import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, ExternalLink } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import venuePhoto from '../assets/images/masjid.jpg';
import windowTetingkapBg from '../assets/images/tetingkap.jpg';

export const MapLocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(
      `${WEDDING_DATA.event.venueName}, ${WEDDING_DATA.event.venueAddress}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="lokasi" className="relative py-12 px-4 border-t border-[#8B0000]/10 overflow-hidden">
      {/* Background Image: tetingkap.jpg */}
      <div className="absolute inset-0 z-0">
        <img
          src={windowTetingkapBg}
          alt="Latar Tetingkap"
          className="w-full h-full object-cover filter brightness-95"
        />
        <div className="absolute inset-0 bg-[#2b351e]/85 backdrop-blur-xs" />
      </div>

      <div className="relative z-10 max-w-md mx-auto text-center space-y-6">
        <div>
          <h3 className="sectionTitle text-xs uppercase tracking-[0.2em] text-amber-300 font-bold mb-1">
            Lokasi Majlis
          </h3>
          <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white mt-1">
            {WEDDING_DATA.event.venueName}
          </h2>
          <p className="text-xs text-stone-200 mt-1">
            Kampung Seberang Takir, Kuala Terengganu
          </p>
        </div>

        {/* Venue Photo Card */}
        <div className="relative rounded-2xl overflow-hidden border-2 border-amber-300/40 shadow-xl group">
          <img
            src={venuePhoto}
            alt={WEDDING_DATA.event.venueName}
            className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex items-end p-4 text-left">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-amber-300">
                Pusat Komuniti & Dewan Majlis
              </span>
              <p className="text-white text-sm font-semibold leading-snug">
                Dewan Masjid Seberang Takir
              </p>
              <p className="text-white/80 text-xs truncate">
                Jalan Fikir, Terengganu
              </p>
            </div>
          </div>
        </div>

        {/* Full Address Card with Copy Button */}
        <div className="p-4 rounded-xl border border-amber-300/30 bg-black/40 text-left flex items-start justify-between gap-3 backdrop-blur-md">
          <div className="flex gap-2.5 items-start">
            <MapPin className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-amber-100">
                Alamat Penuh:
              </p>
              <p className="text-xs text-stone-200 mt-0.5 leading-relaxed">
                {WEDDING_DATA.event.venueAddress}
              </p>
            </div>
          </div>

          <button
            onClick={handleCopyAddress}
            className="shrink-0 p-2 text-stone-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer text-xs flex items-center gap-1 border border-white/20"
            title="Salin Alamat"
            aria-label="Salin Alamat"
          >
            {copied ? (
              <Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
            <span className="hidden sm:inline text-[11px]">
              {copied ? 'Disalin' : 'Salin'}
            </span>
          </button>
        </div>

        {/* Maps Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          {/* Google Maps Button */}
          <a
            href={WEDDING_DATA.event.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#8B0000] text-white font-semibold text-xs shadow-md hover:bg-[#6e0000] transition-colors"
          >
            <MapPin className="w-4 h-4" />
            <span>Google Maps</span>
            <ExternalLink className="w-3 h-3 opacity-75" />
          </a>

          {/* Waze Button */}
          <a
            href={WEDDING_DATA.event.wazeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1b2a4a] text-white font-semibold text-xs shadow-md hover:bg-[#121c33] transition-colors"
          >
            <Navigation className="w-4 h-4" />
            <span>Waze Navigation</span>
            <ExternalLink className="w-3 h-3 opacity-75" />
          </a>
        </div>
      </div>
    </section>
  );
};
