import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import ringExchangeMirrorBg from '../assets/images/cermin_sarung_cincin_1791903850336.jpg';
import whiteOrchidImg from '../assets/images/orkid_putih_transparent.png';

interface EnvelopeCoverProps {
  onOpen: () => void;
}

export const EnvelopeCover: React.FC<EnvelopeCoverProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleFlowerClick = () => {
    if (isOpening) return;
    setIsOpening(true);
    // Allow the 3D window door split transition (left & right) with blurry backdrop to play smoothly
    setTimeout(() => {
      onOpen();
    }, 1500);
  };

  return (
    <div className="relative min-h-[92vh] flex items-center justify-center p-3 sm:p-6 overflow-hidden select-none bg-stone-950">
      {/* ---------------------------------------------------------------------------------
          1. LATAR BELAKANG (BACKGROUND) KABUR / BLUR SEPENUHNYA DENGAN TONA GELAP ELEGAN
          - Cermin emas dan cincin di latar belakang dikaburkan sepenuhnya (backdrop-blur / filter blur)
          - Tona gelap mewah menaikkan seri bunga orkid putih dan nama pengantin di hadapan
         --------------------------------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={ringExchangeMirrorBg}
          alt="Cermin Emas & Menyarung Cincin"
          className="w-full h-full object-cover sm:object-contain scale-110 filter blur-md brightness-[0.45] contrast-105"
        />
        {/* Lapisan tona gelap elegan bergradien lembut */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-stone-950/65 to-black/85 backdrop-blur-sm pointer-events-none" />
      </div>

      {/* Floating bokeh fairy light particles & subtle golden sparks */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <div
          className="absolute w-3.5 h-3.5 rounded-full bg-amber-200/40 blur-[1px] animate-petal"
          style={{ left: '20%', top: '15%', animationDuration: '9s' }}
        />
        <div
          className="absolute w-4 h-4 rounded-full bg-amber-300/35 blur-[1px] animate-petal"
          style={{ left: '72%', top: '28%', animationDuration: '11s', animationDelay: '2s' }}
        />
        <div
          className="absolute w-2.5 h-2.5 rounded-full bg-white/50 blur-[1px] animate-petal"
          style={{ left: '42%', top: '65%', animationDuration: '13s', animationDelay: '4s' }}
        />
      </div>

      {/* ---------------------------------------------------------------------------------
          2. ANIMASI BUKA KAD BERGAYA TINGKAP / DAUN PINTU (KIRI & KANAN SERENTAK 3D)
          - Background blur terbuka ke arah kiri dan kanan serentak dengan peralihan 3D lancar
         --------------------------------------------------------------------------------- */}
      {isOpening && (
        <div
          className="absolute inset-0 z-40 pointer-events-none flex overflow-hidden"
          style={{ perspective: '1400px' }}
        >
          {/* Daun Tingkap Kiri (Membuka ke arah kiri / rotateY ke luar) */}
          <div
            className="w-1/2 h-full bg-stone-900/80 backdrop-blur-xl border-r border-amber-300/60 shadow-[20px_0_40px_rgba(0,0,0,0.8)] flex items-center justify-center relative overflow-hidden transition-all duration-1000 ease-out origin-left"
            style={{
              transform: 'rotateY(-105deg)',
              opacity: 0,
            }}
          >
            {/* Panel corak kaca tingkap berkembar kiri */}
            <div className="w-full h-full p-4 grid grid-rows-3 gap-3 border-2 border-amber-200/20 m-2 rounded-l-lg bg-white/[0.04]">
              <div className="border border-amber-100/30 rounded-tl-full bg-gradient-to-b from-white/10 to-transparent" />
              <div className="border border-amber-100/30 bg-white/[0.03]" />
              <div className="border border-amber-100/30 bg-white/[0.03]" />
            </div>
            {/* Tombol emas daun pintu tingkap */}
            <div className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-12 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 shadow-lg border border-amber-200/50" />
          </div>

          {/* Daun Tingkap Kanan (Membuka ke arah kanan / rotateY ke luar) */}
          <div
            className="w-1/2 h-full bg-stone-900/80 backdrop-blur-xl border-l border-amber-300/60 shadow-[-20px_0_40px_rgba(0,0,0,0.8)] flex items-center justify-center relative overflow-hidden transition-all duration-1000 ease-out origin-right"
            style={{
              transform: 'rotateY(105deg)',
              opacity: 0,
            }}
          >
            {/* Panel corak kaca tingkap berkembar kanan */}
            <div className="w-full h-full p-4 grid grid-rows-3 gap-3 border-2 border-amber-200/20 m-2 rounded-r-lg bg-white/[0.04]">
              <div className="border border-amber-100/30 rounded-tr-full bg-gradient-to-b from-white/10 to-transparent" />
              <div className="border border-amber-100/30 bg-white/[0.03]" />
              <div className="border border-amber-100/30 bg-white/[0.03]" />
            </div>
            {/* Tombol emas daun pintu tingkap */}
            <div className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-12 rounded-full bg-gradient-to-r from-amber-600 to-amber-400 shadow-lg border border-amber-200/50" />
          </div>

          {/* Flash kilauan cahaya lembut di celah bukaan tengah */}
          <div className="absolute inset-0 bg-white/20 backdrop-blur-sm transition-opacity duration-1000 opacity-0 pointer-events-none" />
        </div>
      )}

      {/* ---------------------------------------------------------------------------------
          3. KUNTUM BUNGA ORKID PUTIH (PHALAENOPSIS) BEBAS CACAT & LEBIH BESAR
          - Kuntum orkid putih asli beresolusi tinggi, kelopak bersih dan licin tanpa bahagian terpotong
          - Saiz bunga lebih besar di tengah-tengah muka hadapan
          - Nama pengantin "Amar & Syuhada" diletakkan tepat di atas permukaan kelopak bunga
          - Fon kaligrafi anggun berwarna merah gelap (deep red / burgundy #7A0C16)
          - Bayang lembut (drop shadow) supaya mudah & jelas dibaca
         --------------------------------------------------------------------------------- */}
      <div
        className={`relative z-30 flex flex-col items-center justify-center transition-all duration-700 ${
          isOpening ? 'scale-125 opacity-0 -translate-y-6' : 'scale-100 opacity-100'
        }`}
      >
        <button
          onClick={handleFlowerClick}
          className="group relative flex flex-col items-center justify-center focus:outline-none cursor-pointer"
          aria-label="Tekan Bunga Orkid Untuk Buka Kad"
        >
          {/* Bekas Kuntum Bunga Orkid Putih Bersaiz Besar */}
          <div className="relative w-72 h-72 sm:w-84 sm:h-84 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
            {/* Kilauan Aura Emas Lembut di belakang kelopak bunga */}
            <div className="absolute inset-4 rounded-full bg-amber-300/20 blur-2xl pointer-events-none animate-pulse" />

            {/* Gambar Bunga Orkid Putih Asli (Phalaenopsis) Tanpa Cacat */}
            <img
              src={whiteOrchidImg}
              alt="Bunga Orkid Putih Phalaenopsis"
              className="w-full h-full object-contain filter drop-shadow-[0_16px_32px_rgba(0,0,0,0.65)] select-none pointer-events-none transition-transform duration-700 group-hover:rotate-3"
            />

            {/* Lapisan halus pemantul cahaya di atas kelopak untuk keanggunan teks */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
              {/* Plat lutsinar amat halus di tengah supaya teks merah gelap sangat kontras dan jelas */}
              <div className="px-5 py-3 rounded-full bg-white/40 backdrop-blur-[2px] shadow-sm flex flex-col items-center justify-center border border-white/50">
                {/* Nama Pengantin: Amar */}
                <span
                  className="font-script text-3xl sm:text-4xl text-[#7A0C16] leading-none tracking-wide font-bold"
                  style={{
                    textShadow:
                      '0 2px 4px rgba(255, 255, 255, 0.9), 0 1px 2px rgba(122, 12, 22, 0.35)',
                  }}
                >
                  {WEDDING_DATA.groom.shortName}
                </span>

                {/* Tanda '&' Anggun */}
                <span
                  className="font-script text-base sm:text-lg text-[#8B0000] my-0.5 font-bold"
                  style={{
                    textShadow: '0 1px 3px rgba(255, 255, 255, 0.95)',
                  }}
                >
                  &
                </span>

                {/* Nama Pengantin: Syuhada */}
                <span
                  className="font-script text-3xl sm:text-4xl text-[#7A0C16] leading-none tracking-wide font-bold"
                  style={{
                    textShadow:
                      '0 2px 4px rgba(255, 255, 255, 0.9), 0 1px 2px rgba(122, 12, 22, 0.35)',
                  }}
                >
                  {WEDDING_DATA.bride.shortName}
                </span>
              </div>
            </div>
          </div>

          {/* Lencana Petunjuk di Bawah Bunga Orkid */}
          <div className="mt-3 px-4 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-amber-300/40 text-amber-200 text-xs font-medium flex items-center gap-1.5 shadow-xl group-hover:bg-[#7A0C16] group-hover:text-white transition-all duration-300 group-hover:scale-105">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin-slow" />
            <span>Sentuh Bunga Untuk Buka Kad</span>
          </div>
        </button>
      </div>

      {/* Bar Bawah: WALIMATUL URUS */}
      <div className="absolute bottom-0 left-0 right-0 h-14 bg-[#556045] border-t border-[#6d795b] flex items-center justify-center z-20 text-stone-200 text-xs tracking-widest font-semibold shadow-lg">
        <span>WALIMATUL URUS</span>
      </div>
    </div>
  );
};
