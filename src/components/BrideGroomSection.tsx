import React from 'react';
import { WEDDING_DATA } from '../data/weddingData';
import coupleWalkingGarden from '../assets/images/pengantin_burgundy_grey_1791902834200.jpg';
import ringExchangeMirrorBg from '../assets/images/cermin_sarung_cincin_1791903850336.jpg';
import floralCorner from '../assets/images/bunga_merah_corner_1791894719645.jpg';

interface BrideGroomSectionProps {
  themeStyle: 'emerald' | 'white';
}

export const BrideGroomSection: React.FC<BrideGroomSectionProps> = ({ themeStyle }) => {
  const isEmerald = themeStyle === 'emerald';

  return (
    <div className={`relative transition-colors duration-500 ${isEmerald ? 'bg-[#3b4728] text-white' : 'bg-[#3b4728] text-white'}`}>
      {/* -------------------------------------------------------------
          1. HEADER MIRROR REVEAL (Menyarung Cincin di Dalam Cermin Emas)
         ------------------------------------------------------------- */}
      <div className="relative pt-6 pb-10 px-4 text-center overflow-hidden">
        {/* Background foliage */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={ringExchangeMirrorBg}
            alt="Latar Cermin"
            className="w-full h-full object-cover filter blur-xs"
          />
        </div>

        {/* Floating Bokeh Fairy Lights */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute w-3 h-3 rounded-full bg-amber-200/50 blur-[1px] animate-petal" style={{ left: '15%', top: '25%', animationDuration: '8s' }} />
          <div className="absolute w-4 h-4 rounded-full bg-amber-100/40 blur-[1px] animate-petal" style={{ left: '80%', top: '30%', animationDuration: '10s', animationDelay: '1.5s' }} />
          <div className="absolute w-2 h-2 rounded-full bg-white/60 blur-[1px] animate-petal" style={{ left: '50%', top: '65%', animationDuration: '12s', animationDelay: '3s' }} />
        </div>

        {/* Ornate Gold Mirror Frame Container with Menyarung Cincin reflection */}
        <div className="relative z-20 max-w-[340px] sm:max-w-sm mx-auto shadow-2xl rounded-[160px] overflow-hidden border-4 border-amber-300/80 p-2 bg-gradient-to-b from-amber-100/30 via-transparent to-amber-900/30">
          <div className="relative rounded-[150px] overflow-hidden aspect-[9/14] flex flex-col items-center justify-between p-6 text-center shadow-inner">
            <img
              src={ringExchangeMirrorBg}
              alt="Cermin Pengantin Menyarung Cincin"
              className="absolute inset-0 w-full h-full object-cover filter brightness-90 contrast-105"
            />
            <div className="absolute inset-0 bg-black/25 backdrop-blur-[0.5px]" />

            {/* Top Text inside mirror */}
            <div className="relative z-10 pt-4">
              <span className="text-xs uppercase tracking-[0.25em] text-amber-200 font-serif font-bold drop-shadow-md">
                Walimatul Urus
              </span>
            </div>

            {/* Center Names in Dark Red / Maroon (Merah Gelap #7A0C16) */}
            <div className="relative z-10 my-auto py-2">
              <h1 className="name1 font-script text-5xl sm:text-6xl text-[#7A0C16] drop-shadow-[0_2px_12px_rgba(255,255,255,0.85)] leading-none font-bold">
                {WEDDING_DATA.groom.shortName}
              </h1>
              <span className="and font-script text-2xl text-[#7A0C16] my-1 block drop-shadow-[0_1px_6px_rgba(255,255,255,0.85)]">
                &
              </span>
              <h1 className="name2 font-script text-5xl sm:text-6xl text-[#7A0C16] drop-shadow-[0_2px_12px_rgba(255,255,255,0.85)] leading-none font-bold">
                {WEDDING_DATA.bride.shortName}
              </h1>
            </div>

            {/* Bottom Date inside mirror */}
            <div className="relative z-10 pb-4">
              <p className="cover-date font-serif text-sm font-bold text-amber-100 drop-shadow-md tracking-wider">
                Jumaat • 01.01.2027
              </p>
              <p className="text-[11px] text-amber-200/90 tracking-wide font-medium">
                {WEDDING_DATA.event.dateHijri}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------
          2. INVITATION DETAILS BODY (Harmonious Botanical Color Palette)
         ------------------------------------------------------------- */}
      <div className="relative py-10 px-4 text-center overflow-hidden border-t bg-[#3b4728] border-amber-300/20 text-white">
        <div className="relative z-20 max-w-md mx-auto space-y-6">
          {/* Islamic Greeting */}
          <div className="space-y-2">
            <p className="text-2xl font-serif-luxury tracking-wide" dir="rtl">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>
            <p className="text-xs uppercase tracking-[0.2em] font-bold text-amber-300">
              Undangan Ke Majlis Perkahwinan
            </p>
          </div>

          {/* KOTAK NAMA IBU BAPA: Berlatarkan warna botani gelap elegan (bebas daripada kotak putih janggal) */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-amber-300/50 shadow-xl bg-[#2b351e]/90 text-white text-center p-6 backdrop-blur-md">
            <div className="relative z-10 space-y-3">
              <div>
                <p className="parent_name text-base sm:text-lg font-serif font-bold text-amber-100 leading-tight">
                  {WEDDING_DATA.groom.father}
                </p>
                <p className="text-xs font-serif text-amber-300/80 font-bold my-0.5">&</p>
                <p className="parent_name text-base sm:text-lg font-serif font-bold text-amber-100 leading-tight">
                  {WEDDING_DATA.groom.mother}
                </p>
                <span className="inline-block mt-1 text-[10px] uppercase tracking-wider font-semibold bg-black/30 text-amber-200 px-2.5 py-0.5 rounded-full border border-amber-300/30">
                  Ibu Bapa Pengantin Lelaki
                </span>
              </div>

              <p className="font-script text-2xl text-amber-300 font-bold my-1">
                bersama
              </p>

              <div>
                <p className="parent_name text-base sm:text-lg font-serif font-bold text-amber-100 leading-tight">
                  {WEDDING_DATA.bride.father}
                </p>
                <p className="text-xs font-serif text-amber-300/80 font-bold my-0.5">&</p>
                <p className="parent_name text-base sm:text-lg font-serif font-bold text-amber-100 leading-tight">
                  {WEDDING_DATA.bride.mother}
                </p>
                <span className="inline-block mt-1 text-[10px] uppercase tracking-wider font-semibold bg-black/30 text-amber-200 px-2.5 py-0.5 rounded-full border border-amber-300/30">
                  Ibu Bapa Pengantin Perempuan
                </span>
              </div>
            </div>
          </div>

          {/* Invitation Prose */}
          <div className="py-2 space-y-1 font-serif text-sm sm:text-base leading-relaxed tracking-wide">
            <p className="opacity-90">Dengan penuh kesyukuran kami</p>
            <p className="font-bold text-base sm:text-lg text-amber-200">menjemput</p>
            <p className="text-xs sm:text-sm font-semibold text-stone-200 uppercase tracking-wider">
              Dato' | Datin | Tuan | Puan | Encik | Cik
            </p>
            <p className="opacity-90 text-xs sm:text-sm pt-1">
              seisi keluarga hadir ke majlis perkahwinan anakanda kami
            </p>
          </div>

          {/* KOTAK NAMA MEMPELAI PENGANTIN (Pasangan Pengantin) */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-amber-300/50 shadow-xl bg-[#2b351e]/90 text-white text-center p-6 backdrop-blur-md">
            <div className="relative z-10 py-1">
              <span className="text-[10px] uppercase tracking-[0.2em] text-amber-300 font-bold block mb-2">
                Pasangan Pengantin
              </span>

              {/* Nama mempelai: MUHAMMAD AMAR MUAZZAM BIN MOHD SAYUNI & NUR ALIA SYUHADA BINTI MUSTAFFA */}
              <h2 className="name1 font-serif text-base sm:text-lg font-bold tracking-wide text-amber-100 leading-snug">
                MUHAMMAD AMAR MUAZZAM BIN MOHD SAYUNI
              </h2>

              <div className="my-2.5 flex items-center justify-center gap-3">
                <div className="h-[1px] w-12 bg-amber-400/60" />
                <span className="font-serif italic text-2xl text-amber-300 font-bold">&</span>
                <div className="h-[1px] w-12 bg-amber-400/60" />
              </div>

              <h2 className="name2 font-serif text-base sm:text-lg font-bold tracking-wide text-amber-100 leading-snug">
                NUR ALIA SYUHADA BINTI MUSTAFFA
              </h2>
            </div>
          </div>

          {/* Venue & Date Overview */}
          <div className="pt-2 space-y-4">
            <div>
              <p className="sectionTitle text-xs uppercase tracking-[0.25em] font-bold text-amber-300">
                TEMPAT
              </p>
              <p className="font-serif text-base sm:text-lg font-bold text-white mt-1">
                {WEDDING_DATA.event.venueName.toUpperCase()}
              </p>
              <p className="text-xs text-stone-300 max-w-xs mx-auto mt-0.5">
                {WEDDING_DATA.event.venueAddress}
              </p>
            </div>

            <div className="pt-2">
              <p className="sectionTitle text-xs uppercase tracking-[0.25em] font-bold text-amber-300">
                TARIKH & MASA
              </p>
              <p className="font-serif text-base font-bold text-white mt-1">
                {WEDDING_DATA.event.dateFormatted}
              </p>
              <p className="text-xs text-stone-300">
                {WEDDING_DATA.event.timeFormatted} ({WEDDING_DATA.event.dateHijri})
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------
          3. FULL BLEED ARTWORK: Pengantin Berjalan di Taman Bunga Burgundy
             (Requirement 7: Semoga ikatan cinta dan kasih sayang ini dikurniakan sakinah, mawaddah, rahmah dan kekal hingga ke syurga)
         ------------------------------------------------------------- */}
      <div className="relative w-full max-w-md mx-auto my-6 px-4">
        <div className="relative rounded-3xl overflow-hidden border-2 border-amber-300/60 shadow-2xl group">
          <img
            src={coupleWalkingGarden}
            alt="Amar & Syuhada Berjalan di Taman Bunga"
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-5 text-left text-white">
            <p className="font-script text-3xl text-amber-100 leading-tight">
              Amar & Syuhada
            </p>
            <p className="text-xs text-stone-200 italic mt-1 leading-relaxed">
              "Semoga ikatan cinta dan kasih sayang ini dikurniakan sakinah, mawaddah, rahmah dan kekal hingga ke syurga"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
