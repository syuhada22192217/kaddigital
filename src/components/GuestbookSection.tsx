import React, { useState } from 'react';
import { Heart, MessageSquarePlus, Loader2, Sparkles, MessageCircleHeart } from 'lucide-react';
import { Wish } from '../data/weddingData';
import windowTetingkapBg from '../assets/images/tetingkap.jpg';
import { GOOGLE_SCRIPT_URL } from './RsvpSection';

interface GuestbookSectionProps {
  wishes: Wish[];
  onRefreshLiveData: () => void;
  isLoading?: boolean;
}

export const GuestbookSection: React.FC<GuestbookSectionProps> = ({
  wishes,
  onRefreshLiveData,
  isLoading = false,
}) => {
  const [showQuickForm, setShowQuickForm] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [likes, setLikes] = useState<{ [id: string]: number }>({});

  const handleLike = (id: string) => {
    setLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);

    const guestNameValue = name.trim();
    const messageValue = message.trim();

    const payload = {
      guestName: guestNameValue,
      name: guestNameValue,
      nama: guestNameValue,
      attendanceStatus: 'Hadir',
      status: 'Hadir',
      paxCount: 1,
      pax: 1,
      pihakAmar: true,
      pihakSyuhada: false,
      message: messageValue,
      ucapan: messageValue,
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.warn("Direct wish submission fallback:", err);
      try {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          body: JSON.stringify(payload),
        });
      } catch (postErr) {
        console.error("Wish POST failed:", postErr);
      }
    }

    setIsSubmitting(false);

    try {
      window.alert("Terima kasih! Ucapan anda telah berjaya direkodkan.");
    } catch {
      // ignore alert restrictions in iframe
    }

    setName('');
    setMessage('');
    setShowQuickForm(false);

    setTimeout(() => {
      onRefreshLiveData();
    }, 600);
  };

  return (
    <section id="ucapan" className="relative py-12 px-4 border-t border-[#8B0000]/10 overflow-hidden">
      {/* Background Image: tetingkap.jpg */}
      <div className="absolute inset-0 z-0">
        <img
          src={windowTetingkapBg}
          alt="Latar Tetingkap"
          className="w-full h-full object-cover filter brightness-95"
        />
        {/* Soft overlay to ensure content readability */}
        <div className="absolute inset-0 bg-white/85 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-md mx-auto space-y-6">
        <div className="text-center">
          <h3 className="sectionTitle text-xs uppercase tracking-[0.2em] text-[#8B0000] font-bold mb-1">
            Buku Ucapan & Doa
          </h3>
          <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-stone-900">
            Titipan Doa Buat Mempelai
          </h2>
        </div>

        {/* Toggle Quick Form Button */}
        <div className="text-center">
          <button
            onClick={() => setShowQuickForm(!showQuickForm)}
            className="btn btn-primary inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-[#8B0000] text-white hover:bg-[#6e0000] transition-colors cursor-pointer shadow-xs"
          >
            <MessageSquarePlus className="w-3.5 h-3.5" />
            {showQuickForm ? 'Tutup Borang' : 'Tulis Ucapan Baru'}
          </button>
        </div>

        {/* Quick Wish Input Form */}
        {showQuickForm && (
          <form
            onSubmit={handleQuickSubmit}
            className="p-4 rounded-xl border border-[#8B0000]/25 bg-white/95 backdrop-blur-md shadow-md space-y-3 text-left"
          >
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">
                Nama Anda <span className="text-[#8B0000]">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama atau nama keluarga..."
                className="w-full px-3 py-1.5 text-xs rounded-lg border border-stone-300 bg-white focus:border-[#8B0000] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">
                Mesej / Doa <span className="text-[#8B0000]">*</span>
              </label>
              <textarea
                required
                rows={2}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Selamat pengantin baru Amar & Syuhada..."
                className="w-full px-3 py-1.5 text-xs rounded-lg border border-stone-300 bg-white focus:border-[#8B0000] outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 px-3 text-xs font-semibold rounded-lg bg-[#8B0000] text-white hover:bg-[#6e0000] transition-colors cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Menghantar Ucapan...</span>
                </>
              ) : (
                <span>Kirimkan Ucapan</span>
              )}
            </button>
          </form>
        )}

        {/* List of dynamic real wishes mapped from Google Apps Script */}
        <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
          {isLoading && wishes.length === 0 ? (
            <div className="p-8 text-center bg-white/80 rounded-xl border border-[#8B0000]/10 text-stone-500 text-xs flex flex-col items-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin text-[#8B0000]" />
              <span>Memuat turun ucapan langsung...</span>
            </div>
          ) : wishes.length === 0 ? (
            <div className="p-8 text-center bg-white/80 backdrop-blur-xs rounded-2xl border border-dashed border-[#8B0000]/20 text-stone-500 text-xs space-y-2">
              <MessageCircleHeart className="w-8 h-8 text-[#8B0000]/50 mx-auto" />
              <p className="font-semibold text-stone-700">Belum ada ucapan lagi</p>
              <p className="text-[11px] text-stone-500">
                Jadilah tetamu pertama yang menitipkan doa dan ucapan buat Amar & Syuhada!
              </p>
            </div>
          ) : (
            wishes.map((w, index) => {
              const count = (likes[w.id] || 0) + 1;
              return (
                <div
                  key={w.id || index}
                  className="wish p-3.5 rounded-xl border border-[#8B0000]/15 bg-white/95 backdrop-blur-xs shadow-xs text-left space-y-1.5 hover:border-[#8B0000]/30 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-[#8B0000] font-serif">
                        {w.name}
                      </span>
                      {w.relationship && (
                        <span className="text-[10px] text-stone-400">
                          • {w.relationship}
                        </span>
                      )}
                    </div>
                    {w.time && (
                      <span className="text-[10px] text-stone-400 tabular-nums">
                        {w.time}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-stone-700 leading-relaxed italic">
                    "{w.message}"
                  </p>

                  <div className="pt-1 flex justify-end">
                    <button
                      onClick={() => handleLike(w.id || `wish-${index}`)}
                      className="flex items-center gap-1 text-[11px] text-stone-500 hover:text-[#8B0000] transition-colors cursor-pointer"
                      title="Kirim Kasih Sayang"
                    >
                      <Heart className="w-3 h-3 text-[#8B0000] fill-[#8B0000]/20" />
                      <span className="tabular-nums">{count}</span>
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
