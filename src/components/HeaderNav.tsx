import React from 'react';
import { Smartphone, Monitor, Code, Music, Volume2, VolumeX } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

interface HeaderNavProps {
  viewMode: 'mobile' | 'desktop';
  onToggleViewMode: (mode: 'mobile' | 'desktop') => void;
  themeStyle: 'emerald' | 'white';
  onToggleTheme: (theme: 'emerald' | 'white') => void;
  onOpenCssModal: () => void;
  isPlayingMusic: boolean;
  onToggleMusic: () => void;
  onNavigate: (sectionId: string) => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  viewMode,
  onToggleViewMode,
  themeStyle,
  onToggleTheme,
  onOpenCssModal,
  isPlayingMusic,
  onToggleMusic,
  onNavigate,
}) => {
  return (
    <header className="sticky top-0 z-30 w-full bg-white/95 backdrop-blur-md border-b border-[#8B0000]/15 shadow-2xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        {/* Zone 1: Single Brand wordmark */}
        <div className="flex items-center gap-2">
          <span className="font-serif-luxury font-bold text-base sm:text-lg text-[#8B0000] tracking-tight whitespace-nowrap shrink-0">
            {WEDDING_DATA.groom.shortName} & {WEDDING_DATA.bride.shortName}
          </span>
          <span className="hidden sm:inline-block text-xs text-stone-400">
            • 01.01.2027
          </span>
        </div>

        {/* Zone 2: Navigation Links (Desktop only) */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-stone-600">
          <button
            onClick={() => onNavigate('lokasi')}
            className="hover:text-[#8B0000] transition-colors whitespace-nowrap cursor-pointer"
          >
            Lokasi Peta
          </button>
          <button
            onClick={() => onNavigate('kehadiran')}
            className="hover:text-[#8B0000] transition-colors whitespace-nowrap cursor-pointer"
          >
            Kehadiran
          </button>
          <button
            onClick={() => onNavigate('ucapan')}
            className="hover:text-[#8B0000] transition-colors whitespace-nowrap cursor-pointer"
          >
            Buku Ucapan
          </button>
          <button
            onClick={() => onNavigate('hadiah')}
            className="hover:text-[#8B0000] transition-colors whitespace-nowrap cursor-pointer"
          >
            Salam Keruk
          </button>
          <button
            onClick={() => onNavigate('hubungi')}
            className="hover:text-[#8B0000] transition-colors whitespace-nowrap cursor-pointer"
          >
            Hubungi
          </button>
        </nav>

        {/* Zone 3: Controls & Primary Action */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Theme switcher: Taman Cermin vs Putih */}
          <div className="hidden sm:flex items-center bg-stone-100 p-1 rounded-lg border border-stone-200 text-xs">
            <button
              onClick={() => onToggleTheme('emerald')}
              className={`px-2.5 py-1 rounded-md font-medium transition-all cursor-pointer ${
                themeStyle === 'emerald'
                  ? 'bg-[#536140] text-white shadow-2xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              title="Tema Hijau Cermin Emas (Sama Seperti Gambar Screenshot)"
            >
              Tema Cermin Emas
            </button>
            <button
              onClick={() => onToggleTheme('white')}
              className={`px-2.5 py-1 rounded-md font-medium transition-all cursor-pointer ${
                themeStyle === 'white'
                  ? 'bg-white text-[#8B0000] shadow-2xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              title="Tema Putih Bersih (White & Maroon)"
            >
              Tema Putih
            </button>
          </div>

          {/* Device Switcher (Mobile simulation vs Full desktop) */}
          <div className="hidden sm:flex items-center bg-stone-100 p-1 rounded-lg border border-stone-200 text-xs">
            <button
              onClick={() => onToggleViewMode('mobile')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md font-medium transition-all cursor-pointer ${
                viewMode === 'mobile'
                  ? 'bg-white text-[#8B0000] shadow-2xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              title="Paparan Telefon Pintar (Android/iPhone)"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Telefon</span>
            </button>
            <button
              onClick={() => onToggleViewMode('desktop')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md font-medium transition-all cursor-pointer ${
                viewMode === 'desktop'
                  ? 'bg-white text-[#8B0000] shadow-2xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              title="Paparan Komputer/Laptop"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Komputer</span>
            </button>
          </div>

          {/* Background Music Button */}
          <button
            onClick={onToggleMusic}
            className={`p-2 rounded-lg border text-xs flex items-center gap-1.5 transition-colors cursor-pointer ${
              isPlayingMusic
                ? 'bg-[#8B0000]/10 border-[#8B0000]/30 text-[#8B0000]'
                : 'bg-stone-50 border-stone-200 text-stone-500 hover:bg-stone-100'
            }`}
            title={isPlayingMusic ? 'Muzik Dimainkan (Klik untuk jeda)' : 'Muzik Dijeda (Klik untuk mainkan)'}
            aria-label="Kawalan Muzik"
          >
            {isPlayingMusic ? (
              <Music className="w-4 h-4 animate-spin-slow text-[#8B0000]" />
            ) : (
              <VolumeX className="w-4 h-4 text-stone-400" />
            )}
            <span className="hidden md:inline text-[11px] font-medium">
              {isPlayingMusic ? 'Muzik ON' : 'Muzik OFF'}
            </span>
          </button>

          {/* Primary CTA: Kod CSS jemputan.me */}
          <button
            onClick={onOpenCssModal}
            className="btn btn-primary inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs font-semibold rounded-lg bg-[#8B0000] text-white hover:bg-[#6e0000] transition-colors cursor-pointer shadow-xs whitespace-nowrap shrink-0"
          >
            <Code className="w-3.5 h-3.5" />
            <span>Salin Kod CSS jemputan.me</span>
          </button>
        </div>
      </div>
    </header>
  );
};
