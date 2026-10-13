import React from 'react';
import { Calendar, Clock, Sparkles } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import windowTetingkapBg from '../assets/images/tetingkap.jpg';

export const EventDetailsSection: React.FC = () => {
  return (
    <section className="relative py-10 px-4 border-t border-[#8B0000]/10 overflow-hidden">
      {/* Background Image: tetingkap.jpg */}
      <div className="absolute inset-0 z-0">
        <img
          src={windowTetingkapBg}
          alt="Latar Tetingkap"
          className="w-full h-full object-cover filter brightness-95"
        />
        {/* Soft overlay ensuring text and card readability */}
        <div className="absolute inset-0 bg-white/85 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-md mx-auto space-y-8">
        {/* Date & Time Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
          {/* Tarikh */}
          <div className="p-4 rounded-xl border border-[#8B0000]/20 bg-white/90 backdrop-blur-md shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#8B0000]/10 text-[#8B0000] flex items-center justify-center mx-auto mb-2">
              <Calendar className="w-5 h-5" />
            </div>
            <h4 className="sectionTitle text-xs uppercase tracking-widest text-[#8B0000] font-bold mb-1">
              Tarikh
            </h4>
            <p className="text-base font-serif-luxury font-bold text-stone-900">
              {WEDDING_DATA.event.dateFormatted}
            </p>
            <p className="text-xs text-stone-500 mt-0.5">
              {WEDDING_DATA.event.dateHijri}
            </p>
          </div>

          {/* Waktu */}
          <div className="p-4 rounded-xl border border-[#8B0000]/20 bg-white/90 backdrop-blur-md shadow-xs">
            <div className="w-10 h-10 rounded-full bg-[#8B0000]/10 text-[#8B0000] flex items-center justify-center mx-auto mb-2">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="sectionTitle text-xs uppercase tracking-widest text-[#8B0000] font-bold mb-1">
              Waktu
            </h4>
            <p className="text-base font-serif-luxury font-bold text-stone-900">
              {WEDDING_DATA.event.timeFormatted}
            </p>
          </div>
        </div>

        {/* Atur Cara Majlis (8:00 PM & 11:00 PM sahaja) */}
        <div className="p-5 rounded-2xl border border-[#8B0000]/20 bg-white/90 backdrop-blur-md shadow-sm">
          <div className="text-center mb-6">
            <h3 className="sectionTitle text-sm uppercase tracking-[0.2em] text-[#8B0000] font-bold">
              Atur Cara Majlis
            </h3>
          </div>

          {/* Timeline List */}
          <div className="relative pl-6 space-y-5 before:content-[''] before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-[2px] before:bg-[#8B0000]/25">
            {WEDDING_DATA.itinerary.map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-[#8B0000] ring-4 ring-white shadow-xs group-hover:scale-125 transition-transform" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#8B0000] tracking-wide tabular-nums">
                    {item.time}
                  </span>
                  <span className="text-sm font-semibold text-stone-900 mt-0.5">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kod Pakaian (Dress Code) */}
        <div className="p-5 rounded-2xl border border-[#8B0000]/20 bg-white/90 backdrop-blur-md shadow-sm text-center">
          <h3 className="sectionTitle text-xs uppercase tracking-[0.2em] text-[#8B0000] font-bold mb-3 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#8B0000]" />
            Kod Pakaian (Dress Code)
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-lg bg-stone-50/90 border border-stone-200">
              <span className="font-semibold text-stone-900 block mb-0.5">
                Jemputan Pihak Perempuan
              </span>
              <span className="text-stone-600 font-medium">
                {WEDDING_DATA.dressCode.brideSide}
              </span>
            </div>

            <div className="p-3 rounded-lg bg-stone-50/90 border border-stone-200">
              <span className="font-semibold text-stone-900 block mb-0.5">
                Jemputan Pihak Lelaki
              </span>
              <span className="text-stone-600 font-medium">
                {WEDDING_DATA.dressCode.groomSide}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
