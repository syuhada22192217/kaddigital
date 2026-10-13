import React, { useState, useEffect, useCallback } from 'react';
import { EnvelopeCover } from './components/EnvelopeCover';
import { BrideGroomSection } from './components/BrideGroomSection';
import { CountdownTimer } from './components/CountdownTimer';
import { EventDetailsSection } from './components/EventDetailsSection';
import { MapLocationSection } from './components/MapLocationSection';
import { RsvpSection, GOOGLE_SCRIPT_URL } from './components/RsvpSection';
import { GuestbookSection } from './components/GuestbookSection';
import { ContactSection } from './components/ContactSection';
import { StickyBottomBar } from './components/StickyBottomBar';
import { ButterfliesOverlay } from './components/ButterfliesOverlay';
import { YouTubeAudioPlayer } from './components/YouTubeAudioPlayer';
import { Wish } from './data/weddingData';
import { weddingAudio } from './utils/audio';
import { RotateCcw, Heart, Sparkles, Volume2, VolumeX } from 'lucide-react';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [totalHadir, setTotalHadir] = useState<number>(0);
  const [totalTidakHadir, setTotalTidakHadir] = useState<number>(0);
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [isLoadingLiveData, setIsLoadingLiveData] = useState<boolean>(true);

  // Sync music state with audio manager
  useEffect(() => {
    weddingAudio.setListener((playing) => {
      setIsPlayingMusic(playing);
    });
  }, []);

  // 2. LOAD LIVE DATA (ON PAGE LOAD) via GET fetch() to GOOGLE_SCRIPT_URL
  const fetchLiveWeddingData = useCallback(async () => {
    try {
      setIsLoadingLiveData(true);
      const res = await fetch(GOOGLE_SCRIPT_URL);
      if (res.ok) {
        const data = await res.json();
        // Parse the JSON response (totalHadir, totalTidakHadir, and wishes)
        if (typeof data.totalHadir === 'number') {
          setTotalHadir(data.totalHadir);
        }
        if (typeof data.totalTidakHadir === 'number') {
          setTotalTidakHadir(data.totalTidakHadir);
        }
        if (Array.isArray(data.wishes)) {
          // Map array of real wishes names and messages dynamically
          const parsedWishes: Wish[] = data.wishes.map((w: any, idx: number) => ({
            id: w.id || `gas-${idx}-${Date.now()}`,
            name: w.nama || w.name || w.guestName || 'Tetamu Jemputan',
            message: w.ucapan || w.message || '',
            time: w.time || w.tarikh || '',
            relationship: w.relationship || (w.pihakAmar ? 'Pihak Amar' : w.pihakSyuhada ? 'Pihak Syuhada' : undefined),
          })).filter((item: Wish) => item.name && item.message);

          setWishes(parsedWishes);
        }
      }
    } catch (err) {
      console.error("Gagal memuat turun data langsung dari Google Apps Script:", err);
    } finally {
      setIsLoadingLiveData(false);
    }
  }, []);

  useEffect(() => {
    // 1. Muat turun data serta-merta semasa laman dibuka
    fetchLiveWeddingData();

    // 2. Segerak automatik berkala setiap 20 saat untuk semua pengguna yang sedang buka laman
    const intervalId = setInterval(() => {
      fetchLiveWeddingData();
    }, 20000);

    // 3. Segerak serta-merta apabila pengguna kembali ke tab browser (Chrome/Safari dll)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        fetchLiveWeddingData();
      }
    };
    window.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleVisibilityChange);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleVisibilityChange);
    };
  }, [fetchLiveWeddingData]);

  const handleOpenCard = () => {
    setIsOpened(true);
    // Start playing background music automatically upon opening the card
    setIsPlayingMusic(true);
    weddingAudio.start();
  };

  const handleToggleMusic = () => {
    const nextState = !isPlayingMusic;
    setIsPlayingMusic(nextState);
    if (nextState) {
      weddingAudio.start();
    } else {
      weddingAudio.stop();
    }
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 font-body text-stone-800 flex flex-col items-center justify-start sm:py-6 px-0 sm:px-4">
      {/* YouTube Background Music Player (https://youtu.be/IBFWlwnrpdU) */}
      <YouTubeAudioPlayer isPlaying={isPlayingMusic} />

      {/* Main Container Phone Frame / Card Canvas */}
      <main className="w-full max-w-[460px] min-h-screen sm:min-h-0 bg-stone-900 shadow-2xl sm:rounded-3xl border-0 sm:border-8 border-stone-800 overflow-hidden relative">
        {/* Floating Quick Music Control on Top Right */}
        {isOpened && (
          <button
            onClick={handleToggleMusic}
            className="fixed sm:absolute top-3 right-3 z-50 p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-amber-300/40 text-amber-200 shadow-lg hover:scale-110 transition-transform cursor-pointer"
            title={isPlayingMusic ? 'Jeda Muzik' : 'Mainkan Muzik'}
            aria-label="Kawalan Muzik"
          >
            {isPlayingMusic ? (
              <Volume2 className="w-4 h-4 text-amber-300 animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4 text-stone-400" />
            )}
          </button>
        )}

        {/* If unopened: Display Envelope Cover with Wax Seal */}
        {!isOpened ? (
          <EnvelopeCover onOpen={handleOpenCard} />
        ) : (
          <div id="content" className="relative bg-[#3b4728] pb-24 text-white">
            {/* Top Bar for Resetting / Closing Card */}
            <div className="px-4 py-2.5 bg-black/40 border-b border-amber-300/20 flex items-center justify-between text-[11px] text-amber-200/90">
              <span className="flex items-center gap-1.5 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                Walimatul Urus Amar & Syuhada
              </span>
              <button
                onClick={() => {
                  setIsOpened(false);
                  setIsPlayingMusic(false);
                  weddingAudio.stop();
                }}
                className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
                title="Kembali ke Sampul Kad"
              >
                <RotateCcw className="w-3 h-3" />
                Tutup Kad
              </button>
            </div>

            {/* Floating Animated Butterflies Overlay */}
            <ButterfliesOverlay />

            {/* 1. Bride & Groom Section */}
            <BrideGroomSection themeStyle="emerald" />

            {/* 2. Countdown Timer Section (With tetingkap.jpg background) */}
            <CountdownTimer />

            {/* 3. Event Details, Itinerary & Dress Code Section (With tetingkap.jpg background) */}
            <EventDetailsSection />

            {/* 4. Map & Location Section (Dewan Masjid Seberang Takir with masjid.jpg & tetingkap.jpg) */}
            <MapLocationSection />

            {/* 5. Kehadiran Tetamu Section (Live Google Apps Script Integration) */}
            <RsvpSection
              totalHadir={totalHadir}
              totalTidakHadir={totalTidakHadir}
              onRefreshLiveData={fetchLiveWeddingData}
            />

            {/* 6. Guestbook & Wishes Section (Live Wishes dynamically from Google Apps Script) */}
            <GuestbookSection
              wishes={wishes}
              onRefreshLiveData={fetchLiveWeddingData}
              isLoading={isLoadingLiveData}
            />

            {/* 7. Contact Family Section (With tetingkap.jpg background & 4 relationship contacts) */}
            <ContactSection />

            {/* Footer Note with Prayer and #AMARriedtoSYU hashtag at the very end */}
            <footer className="py-10 px-4 text-center border-t border-amber-300/20 bg-black/40 text-xs text-stone-300 space-y-3">
              <div className="flex items-center justify-center gap-1.5 text-amber-300">
                <Heart className="w-4 h-4 fill-amber-300" />
                <span className="font-script text-2xl font-bold">Amar & Syuhada</span>
                <Heart className="w-4 h-4 fill-amber-300" />
              </div>

              <p className="font-serif text-sm font-semibold text-white">
                1 Januari 2027 • Dewan Masjid Seberang Takir, Terengganu
              </p>

              <p className="text-[11px] text-stone-300">
                Semoga Allah merahmati perjalanan bahtera perkahwinan ini. Aamiin
              </p>
              <p className="text-sm sm:text-base font-serif-luxury text-amber-200 mt-2 font-medium tracking-wide" dir="rtl">
                بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
              </p>

              {/* Requirement 17: hashtag di bahagian paling akhir */}
              <div className="pt-2">
                <span className="inline-block px-4 py-1.5 rounded-full bg-amber-400/20 border border-amber-300/40 text-amber-200 text-sm font-bold tracking-wider">
                  #AMARriedtoSYU
                </span>
              </div>
            </footer>
          </div>
        )}
      </main>

      {/* Floating Sticky Bottom Bar for fast mobile access */}
      {isOpened && (
        <StickyBottomBar
          isPlaying={isPlayingMusic}
          onToggleMusic={handleToggleMusic}
          onNavigate={handleScrollTo}
        />
      )}
    </div>
  );
}
