import React, { useState, useEffect } from 'react';
import { Calendar, Download, ExternalLink } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import windowTetingkapBg from '../assets/images/tetingkap.jpg';

export const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date("2027-01-01T20:00:00+08:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadICS = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Walimatul Urus Amar & Syuhada//MY',
      'CALSCALE:GREGORIAN',
      'BEGIN:VEVENT',
      'SUMMARY:Walimatul Urus Muhammad Amar & Nur Alia Syuhada',
      'DESCRIPTION:Majlis Perkahwinan Muhammad Amar Muazzam & Nur Alia Syuhada. Lokasi: Dewan Masjid Seberang Takir, Terengganu.',
      'LOCATION:Dewan Masjid Seberang Takir, Jalan Fikir, 21300 Kampung Seberang Takir, Terengganu',
      'DTSTART:20270101T120000Z', // 8:00 PM MYT = 12:00 PM UTC
      'DTEND:20270101T150000Z',   // 11:00 PM MYT = 3:00 PM UTC
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Amar_Syuhada_Wedding_2027.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    'Walimatul Urus Amar & Syuhada'
  )}&dates=20270101T120000Z/20270101T150000Z&details=${encodeURIComponent(
    'Majlis Walimatul Urus Muhammad Amar Muazzam & Nur Alia Syuhada bertempat di Dewan Masjid Seberang Takir, Terengganu.'
  )}&location=${encodeURIComponent(
    'Dewan Masjid Seberang Takir, Jalan Fikir, 21300 Kampung Seberang Takir, Terengganu'
  )}`;

  return (
    <section className="relative py-8 px-4 text-center border-y border-[#8B0000]/10 overflow-hidden">
      {/* Background Image: tetingkap.jpg */}
      <div className="absolute inset-0 z-0">
        <img
          src={windowTetingkapBg}
          alt="Latar Tetingkap"
          className="w-full h-full object-cover filter brightness-95"
        />
        <div className="absolute inset-0 bg-white/85 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10">
        <h3 className="sectionTitle text-xs uppercase tracking-[0.2em] text-[#8B0000] font-bold mb-4">
          Menghitung Hari
        </h3>

      {/* Countdown Grid */}
      <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-sm mx-auto mb-6">
        <div className="p-3 bg-white border border-[#8B0000]/15 rounded-xl shadow-xs">
          <span className="block text-2xl sm:text-3xl font-bold text-[#8B0000] font-serif-luxury tabular-nums">
            {String(timeLeft.days).padStart(2, '0')}
          </span>
          <span className="text-[11px] text-stone-500 font-medium">Hari</span>
        </div>

        <div className="p-3 bg-white border border-[#8B0000]/15 rounded-xl shadow-xs">
          <span className="block text-2xl sm:text-3xl font-bold text-[#8B0000] font-serif-luxury tabular-nums">
            {String(timeLeft.hours).padStart(2, '0')}
          </span>
          <span className="text-[11px] text-stone-500 font-medium">Jam</span>
        </div>

        <div className="p-3 bg-white border border-[#8B0000]/15 rounded-xl shadow-xs">
          <span className="block text-2xl sm:text-3xl font-bold text-[#8B0000] font-serif-luxury tabular-nums">
            {String(timeLeft.minutes).padStart(2, '0')}
          </span>
          <span className="text-[11px] text-stone-500 font-medium">Minit</span>
        </div>

        <div className="p-3 bg-white border border-[#8B0000]/15 rounded-xl shadow-xs">
          <span className="block text-2xl sm:text-3xl font-bold text-[#8B0000] font-serif-luxury tabular-nums">
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
          <span className="text-[11px] text-stone-500 font-medium">Saat</span>
        </div>
      </div>

      {/* Add to Calendar CTA */}
      <div className="flex items-center justify-center">
        <a
          href={googleCalendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-[#8B0000] text-white hover:bg-[#6e0000] transition-colors shadow-xs"
        >
          <Calendar className="w-3.5 h-3.5" />
          Simpan Tarikh (Google Calendar)
          <ExternalLink className="w-3 h-3 opacity-80" />
        </a>
      </div>
      </div>
    </section>
  );
};
