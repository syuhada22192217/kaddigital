import React from 'react';
import { Phone, Play, Pause, MapPin, Mail } from 'lucide-react';

interface StickyBottomBarProps {
  isPlaying: boolean;
  onToggleMusic: () => void;
  onNavigate: (sectionId: string) => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({
  isPlaying,
  onToggleMusic,
  onNavigate,
}) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#536140] border-t border-[#65764f] shadow-[0_-4px_20px_rgba(0,0,0,0.3)] py-2.5 px-3">
      <div className="max-w-md mx-auto flex items-center justify-around text-white">
        {/* 1. Hubungi (Phone) */}
        <button
          onClick={() => onNavigate('hubungi')}
          className="flex flex-col items-center justify-center p-1 text-stone-200 hover:text-white transition-colors cursor-pointer group"
          aria-label="Hubungi Keluarga"
          title="Hubungi"
        >
          <div className="w-9 h-9 rounded-full flex items-center justify-center group-hover:bg-white/10 transition-colors">
            <Phone className="w-5 h-5 stroke-[1.6]" />
          </div>
          <span className="text-[9px] tracking-wider uppercase font-medium mt-0.5 opacity-80 group-hover:opacity-100">
            Hubungi
          </span>
        </button>

        {/* 2. Lagu (Play / Pause Music) */}
        <button
          onClick={onToggleMusic}
          className="flex flex-col items-center justify-center p-1 text-stone-200 hover:text-white transition-colors cursor-pointer group"
          aria-label={isPlaying ? 'Jeda Muzik' : 'Mainkan Muzik'}
          title="Lagu Latar"
        >
          <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
            isPlaying ? 'bg-amber-400 text-stone-900 shadow-md ring-2 ring-white/50' : 'group-hover:bg-white/10'
          }`}>
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-current" />
            ) : (
              <Play className="w-5 h-5 stroke-[1.6] ml-0.5" />
            )}
          </div>
          <span className="text-[9px] tracking-wider uppercase font-medium mt-0.5 opacity-80 group-hover:opacity-100">
            {isPlaying ? 'Lagu ON' : 'Lagu'}
          </span>
        </button>

        {/* 3. Lokasi (Map Pin) */}
        <button
          onClick={() => onNavigate('lokasi')}
          className="flex flex-col items-center justify-center p-1 text-stone-200 hover:text-white transition-colors cursor-pointer group"
          aria-label="Lokasi Peta"
          title="Lokasi"
        >
          <div className="w-9 h-9 rounded-full flex items-center justify-center group-hover:bg-white/10 transition-colors">
            <MapPin className="w-5 h-5 stroke-[1.6]" />
          </div>
          <span className="text-[9px] tracking-wider uppercase font-medium mt-0.5 opacity-80 group-hover:opacity-100">
            Lokasi
          </span>
        </button>

        {/* 4. Kehadiran */}
        <button
          onClick={() => onNavigate('kehadiran')}
          className="flex flex-col items-center justify-center p-1 text-amber-200 hover:text-white transition-colors cursor-pointer group"
          aria-label="Pengesahan Kehadiran"
          title="Kehadiran"
        >
          <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center shadow-xs group-hover:bg-white/25 transition-colors">
            <Mail className="w-5 h-5 stroke-[1.7]" />
          </div>
          <span className="text-[9px] tracking-wider uppercase font-bold text-amber-300 mt-0.5">
            Kehadiran
          </span>
        </button>
      </div>
    </nav>
  );
};
