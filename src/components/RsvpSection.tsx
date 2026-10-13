import React, { useState } from 'react';
import { Users, CheckCircle2, HeartHandshake, UserCheck, UserX, Loader2 } from 'lucide-react';
import windowTetingkapBg from '../assets/images/tetingkap.jpg';

// 1. GLOBAL URL VARIABLE
export const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxIvFa_wjoA6Nto_yYk2-5od6JjEJ-smgOlmqKXg0nOf2zQ4f23xWn_haiQnCsvUQORmA/exec";

interface RsvpSectionProps {
  totalHadir: number;
  totalTidakHadir: number;
  onRefreshLiveData: () => void;
}

export const RsvpSection: React.FC<RsvpSectionProps> = ({
  totalHadir,
  totalTidakHadir,
  onRefreshLiveData,
}) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'attending' | 'declined'>('attending');
  const [pax, setPax] = useState('2');
  const [side, setSide] = useState<'groom' | 'bride'>('groom');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  // 3. RSVP FORM SUBMISSION (POST ACTION)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsSubmitting(true);

    const guestNameValue = name.trim();
    const attendanceStatusValue = status === 'attending' ? 'Hadir' : 'Tidak Hadir';
    const paxCountValue = status === 'attending' ? parseInt(pax, 10) || 1 : 0;
    const isPihakAmar = side === 'groom';
    const isPihakSyuhada = side === 'bride';
    const messageValue = notes.trim();

    // Payload formatted with exact requested parameters and aliases for full compatibility
    const payload = {
      guestName: guestNameValue,
      name: guestNameValue,
      nama: guestNameValue,
      attendanceStatus: attendanceStatusValue,
      status: attendanceStatusValue,
      paxCount: paxCountValue,
      pax: paxCountValue,
      pihakAmar: isPihakAmar,
      pihakSyuhada: isPihakSyuhada,
      message: messageValue,
      ucapan: messageValue,
    };

    try {
      // Transmit payload stringified via fetch() as POST request to GOOGLE_SCRIPT_URL
      // Using text/plain ensures no CORS preflight blocking on Google Apps Script redirects
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.warn("Fetch POST via no-cors fallback:", err);
      try {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          body: JSON.stringify(payload),
        });
      } catch (postErr) {
        console.error("POST failed:", postErr);
      }
    }

    setIsSubmitting(false);

    // On response success, pop native browser message / display Terima kasih! sahaja
    const successMsg = "Terima kasih!";
    try {
      window.alert(successMsg);
    } catch {
      // In case iframe environment restricts window.alert
    }

    // Set UI notification
    setSubmittedMessage(successMsg);

    // Reset the input text fields
    setName('');
    setNotes('');
    setPax('2');
    setStatus('attending');

    // Trigger the live wishes feed reload automatically
    setTimeout(() => {
      onRefreshLiveData();
    }, 600);
  };

  return (
    <section id="kehadiran" className="relative py-12 px-4 border-t border-[#8B0000]/10 overflow-hidden text-white">
      {/* Background Image: tetingkap.jpg */}
      <div className="absolute inset-0 z-0">
        <img
          src={windowTetingkapBg}
          alt="Latar Tetingkap"
          className="w-full h-full object-cover filter brightness-95"
        />
        <div className="absolute inset-0 bg-[#2b351e]/85 backdrop-blur-xs" />
      </div>

      <div className="relative z-10 max-w-md mx-auto space-y-6">
        {/* Section Header */}
        <div className="text-center">
          <h3 className="sectionTitle text-xs uppercase tracking-[0.2em] text-amber-300 font-bold mb-1">
            Pengesahan Kehadiran
          </h3>
          <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white">
            Rekod Kehadiran Tetamu
          </h2>
        </div>

        {/* Live Attendance Tally Scoreboard (Menggantikan digit statik 232 & 20 dengan live data sebenar) */}
        <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-black/40 border border-amber-300/40 shadow-md text-center backdrop-blur-md">
          <div className="p-3 bg-white/10 rounded-xl border border-emerald-400/40 shadow-2xs">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center mx-auto mb-1.5">
              <UserCheck className="w-4 h-4" />
            </div>
            <span className="block text-3xl font-bold text-emerald-300 font-serif tabular-nums">
              {totalHadir}
            </span>
            <span className="text-[11px] font-semibold text-stone-200 uppercase tracking-wider">
              Tetamu Hadir
            </span>
          </div>

          <div className="p-3 bg-white/10 rounded-xl border border-white/20 shadow-2xs">
            <div className="w-8 h-8 rounded-full bg-white/10 text-stone-300 flex items-center justify-center mx-auto mb-1.5">
              <UserX className="w-4 h-4" />
            </div>
            <span className="block text-3xl font-bold text-stone-300 font-serif tabular-nums">
              {totalTidakHadir}
            </span>
            <span className="text-[11px] font-semibold text-stone-300 uppercase tracking-wider">
              Tidak Hadir
            </span>
          </div>
        </div>

        {/* Success Alert Banner if submitted */}
        {submittedMessage && (
          <div className="p-4 rounded-xl border border-emerald-400/60 bg-emerald-950/80 backdrop-blur-md text-emerald-200 text-xs flex items-center justify-between gap-2 shadow-lg">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>{submittedMessage}</span>
            </div>
            <button
              onClick={() => setSubmittedMessage(null)}
              className="text-[10px] text-emerald-300 hover:text-white underline cursor-pointer"
            >
              Tutup
            </button>
          </div>
        )}

        {/* Attendance Form */}
        <form onSubmit={handleSubmit} className="p-5 rounded-2xl border border-amber-300/40 bg-black/45 backdrop-blur-md shadow-md space-y-4 text-left">
          {/* Nama */}
          <div>
            <label className="rf-label block text-xs font-bold text-amber-100 mb-1">
              Nama Tetamu / Keluarga <span className="text-amber-400">*</span>
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-lg border border-white/20 bg-white/10 text-white placeholder-stone-400 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 outline-none"
            />
          </div>

          {/* Pilihan Kehadiran */}
          <div>
            <label className="rf-label block text-xs font-bold text-amber-100 mb-1.5">
              Status Kehadiran <span className="text-amber-400">*</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setStatus('attending')}
                className={`py-2 px-3 rounded-lg text-xs font-semibold border flex items-center justify-center gap-1.5 cursor-pointer transition-colors ${
                  status === 'attending'
                    ? 'bg-[#8B0000] text-white border-amber-300/50 shadow-xs'
                    : 'bg-white/10 text-stone-200 border-white/20 hover:bg-white/20'
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                Hadir
              </button>

              <button
                type="button"
                onClick={() => setStatus('declined')}
                className={`py-2 px-3 rounded-lg text-xs font-semibold border flex items-center justify-center gap-1.5 cursor-pointer transition-colors ${
                  status === 'declined'
                    ? 'bg-[#8B0000] text-white border-amber-300/50 shadow-xs'
                    : 'bg-white/10 text-stone-200 border-white/20 hover:bg-white/20'
                }`}
              >
                <HeartHandshake className="w-3.5 h-3.5" />
                Tidak Hadir
              </button>
            </div>
          </div>

          {/* Jumlah Tetamu (Pax) jika hadir */}
          {status === 'attending' && (
            <div>
              <label className="rf-label block text-xs font-bold text-amber-100 mb-1">
                Jumlah Kehadiran (Pax)
              </label>
              <select
                value={pax}
                onChange={(e) => setPax(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-white/20 bg-[#2b351e] text-white focus:border-amber-400 outline-none cursor-pointer"
              >
                <option value="1">1 Orang</option>
                <option value="2">2 Orang</option>
                <option value="3">3 Orang</option>
                <option value="4">4 Orang</option>
                <option value="5">5 Orang</option>
                <option value="6">6 Orang</option>
              </select>
            </div>
          )}

          {/* Pihak Pengantin */}
          <div>
            <label className="rf-label block text-xs font-bold text-amber-100 mb-1">
              Jemputan Pihak
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <label className={`p-2 rounded-lg border flex items-center gap-2 cursor-pointer transition-colors ${side === 'groom' ? 'border-amber-400 bg-amber-400/20 text-amber-200 font-semibold' : 'border-white/20 bg-white/10 text-stone-300'}`}>
                <input
                  type="radio"
                  name="side"
                  checked={side === 'groom'}
                  onChange={() => setSide('groom')}
                  className="accent-amber-400"
                />
                <span>Pihak Lelaki (Amar)</span>
              </label>

              <label className={`p-2 rounded-lg border flex items-center gap-2 cursor-pointer transition-colors ${side === 'bride' ? 'border-amber-400 bg-amber-400/20 text-amber-200 font-semibold' : 'border-white/20 bg-white/10 text-stone-300'}`}>
                <input
                  type="radio"
                  name="side"
                  checked={side === 'bride'}
                  onChange={() => setSide('bride')}
                  className="accent-amber-400"
                />
                <span>Pihak Perempuan (Syuhada)</span>
              </label>
            </div>
          </div>

          {/* Ucapan Ringkas */}
          <div>
            <label className="rf-label block text-xs font-bold text-amber-100 mb-1">
              Ucapan / Mesej (Pilihan)
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Titipkan doa atau ucapan..."
              className="w-full px-3 py-2 text-xs rounded-lg border border-white/20 bg-white/10 text-white placeholder-stone-400 focus:border-amber-400 outline-none resize-none"
            />
          </div>

          {/* Submission Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary w-full py-3 px-4 rounded-xl bg-[#8B0000] hover:bg-[#6e0000] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer border border-amber-300/40 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 text-amber-300 animate-spin" />
                <span>Menghantar Rekod Kehadiran...</span>
              </>
            ) : (
              <>
                <UserCheck className="w-4 h-4 text-amber-300" />
                <span>Sahkan Kehadiran</span>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};
