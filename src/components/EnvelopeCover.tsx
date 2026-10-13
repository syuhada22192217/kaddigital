import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import ringExchangeMirrorBg from '../assets/images/cermin_sarung_cincin_1791903850336.jpg';

interface EnvelopeCoverProps {
  onOpen: () => void;
}

export const EnvelopeCover: React.FC<EnvelopeCoverProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleFlowerClick = () => {
    setIsOpening(true);
    // Allow the window opening transition with blurry backdrop to play smoothly
    setTimeout(() => {
      onOpen();
    }, 1400);
  };

  return (
    <div className="relative min-h-[92vh] flex items-center justify-center p-3 sm:p-6 overflow-hidden select-none bg-stone-900">
      {/* Background: The Ornate Vintage Gold Baroque Mirror with Menyarung Cincin Hands */}
      <div className={`absolute inset-0 z-0 transition-all duration-1000 ${isOpening ? 'scale-105 filter blur-sm' : 'scale-100'}`}>
        <img
          src={ringExchangeMirrorBg}
          alt="Cermin Emas & Menyarung Cincin"
          className="w-full h-full object-cover sm:object-contain filter brightness-95"
        />
        <div className="absolute inset-0 bg-black/15 pointer-events-none" />
      </div>

      {/* Floating bokeh fairy light particles */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <div className="absolute w-3 h-3 rounded-full bg-amber-200/50 blur-[1px] animate-petal" style={{ left: '25%', top: '20%', animationDuration: '9s' }} />
        <div className="absolute w-4 h-4 rounded-full bg-amber-300/40 blur-[1px] animate-petal" style={{ left: '70%', top: '35%', animationDuration: '11s', animationDelay: '2s' }} />
        <div className="absolute w-2 h-2 rounded-full bg-white/60 blur-[1px] animate-petal" style={{ left: '40%', top: '60%', animationDuration: '13s', animationDelay: '4s' }} />
      </div>

      {/* -------------------------------------------------------------
          TETINGKAP TRANSITION EFFECT (Buka Tingkap dengan Background Kabur)
         ------------------------------------------------------------- */}
      {isOpening && (
        <div className="absolute inset-0 z-30 pointer-events-none flex overflow-hidden">
          {/* Left Window Shutter opening outwards */}
          <div
            className="w-1/2 h-full bg-white/20 backdrop-blur-md border-r-2 border-amber-300/60 shadow-2xl transition-all duration-1000 ease-out origin-left flex items-center justify-center"
            style={{
              transform: 'perspective(1200px) rotateY(-85deg) scale(1.05)',
              opacity: 0.1,
            }}
          >
            {/* Window pane mullions */}
            <div className="w-full h-full border-4 border-amber-300/40 grid grid-rows-3 gap-2 p-4">
              <div className="border border-white/40 rounded-t-full" />
              <div className="border border-white/40" />
              <div className="border border-white/40" />
            </div>
          </div>

          {/* Right Window Shutter opening outwards */}
          <div
            className="w-1/2 h-full bg-white/20 backdrop-blur-md border-l-2 border-amber-300/60 shadow-2xl transition-all duration-1000 ease-out origin-right flex items-center justify-center"
            style={{
              transform: 'perspective(1200px) rotateY(85deg) scale(1.05)',
              opacity: 0.1,
            }}
          >
            {/* Window pane mullions */}
            <div className="w-full h-full border-4 border-amber-300/40 grid grid-rows-3 gap-2 p-4">
              <div className="border border-white/40 rounded-t-full" />
              <div className="border border-white/40" />
              <div className="border border-white/40" />
            </div>
          </div>

          {/* Dreamy soft blur overlay in center while window swings open */}
          <div className="absolute inset-0 bg-white/25 backdrop-blur-sm animate-fade-out" />
        </div>
      )}

      {/* Central White Flower Button with Maroon/Dark Red Typography */}
      <div
        className={`relative z-20 flex flex-col items-center justify-center transition-all duration-700 ${
          isOpening ? 'scale-150 opacity-0 -translate-y-8' : 'scale-100 opacity-100'
        }`}
      >
        <button
          onClick={handleFlowerClick}
          className="group relative flex flex-col items-center justify-center focus:outline-none cursor-pointer"
          aria-label="Tekan Bunga Untuk Buka Kad"
        >
          {/* White 5-Petal Flower Button */}
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center drop-shadow-[0_12px_24px_rgba(0,0,0,0.55)] group-hover:scale-105 transition-transform duration-300">
            {/* SVG 5-Petal Flower */}
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full filter drop-shadow-md transition-transform duration-500 group-hover:rotate-12"
            >
              <defs>
                <radialGradient id="petalGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="70%" stopColor="#fdfcf9" />
                  <stop offset="100%" stopColor="#eae6dc" />
                </radialGradient>
                <filter id="petalShadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.15" />
                </filter>
              </defs>

              {/* 5 Petals */}
              <g filter="url(#petalShadow)">
                <ellipse cx="100" cy="55" rx="35" ry="46" fill="url(#petalGrad)" />
                <ellipse cx="138" cy="85" rx="35" ry="46" fill="url(#petalGrad)" transform="rotate(72 138 85)" />
                <ellipse cx="124" cy="135" rx="35" ry="46" fill="url(#petalGrad)" transform="rotate(144 124 135)" />
                <ellipse cx="76" cy="135" rx="35" ry="46" fill="url(#petalGrad)" transform="rotate(216 76 135)" />
                <ellipse cx="62" cy="85" rx="35" ry="46" fill="url(#petalGrad)" transform="rotate(288 62 85)" />
              </g>

              {/* Center Core Circle with gold ring */}
              <circle cx="100" cy="100" r="32" fill="#ffffff" stroke="#D4AF37" strokeWidth="1" />
            </svg>

            {/* Couple Script Names in Center of Flower: Merah Gelap / Maroon (#7A0C16) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
              <span className="font-script text-xl sm:text-2xl text-[#7A0C16] leading-none tracking-wide font-bold drop-shadow-2xs">
                {WEDDING_DATA.groom.shortName}
              </span>
              <span className="font-script text-xs sm:text-sm text-[#7A0C16]/80 my-0.5">
                &
              </span>
              <span className="font-script text-xl sm:text-2xl text-[#7A0C16] leading-none tracking-wide font-bold drop-shadow-2xs">
                {WEDDING_DATA.bride.shortName}
              </span>
            </div>
          </div>

          {/* Hint badge under flower */}
          <div className="mt-4 px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-amber-300/40 text-amber-200 text-[11px] font-medium flex items-center gap-1.5 shadow-lg group-hover:bg-[#7A0C16] group-hover:text-white transition-colors">
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span>Sentuh Bunga Untuk Buka Kad</span>
          </div>
        </button>
      </div>

      {/* Bottom subtle bar */}
      <div className="absolute bottom-0 left-0 right-0 h-14 bg-[#556045] border-t border-[#6d795b] flex items-center justify-center z-10 text-stone-200 text-xs tracking-widest font-semibold">
        <span>WALIMATUL URUS</span>
      </div>
    </div>
  );
};
