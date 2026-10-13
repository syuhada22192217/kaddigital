import React, { useState } from 'react';
import { Gift, Copy, Check, QrCode } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

export const GiftRegistrySection: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [showQr, setShowQr] = useState(false);

  const handleCopy = (accNumber: string, idx: number) => {
    navigator.clipboard.writeText(accNumber);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  return (
    <section id="hadiah" className="py-10 px-4 bg-white border-t border-[#8B0000]/10">
      <div className="max-w-md mx-auto space-y-6 text-center">
        <div>
          <h3 className="sectionTitle text-xs uppercase tracking-[0.2em] text-[#8B0000] font-bold mb-1">
            Salam Keruk & Hadiah
          </h3>
          <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-stone-900">
            Ingatan Tulus Ikhlas
          </h2>
          <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
            Kehadiran & doa restu anda adalah hadiah paling bermakna buat kami sekeluarga. Namun sekiranya ingin menitipkan tanda ingatan secara digital:
          </p>
        </div>

        {/* Bank & DuitNow Accounts */}
        <div className="space-y-3">
          {WEDDING_DATA.giftAccounts.map((account, idx) => (
            <div
              key={idx}
              className="money-card p-4 rounded-xl border border-stone-200 bg-stone-50/60 text-left flex items-center justify-between gap-3 shadow-2xs hover:border-[#8B0000]/30 transition-colors"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#8B0000]">
                    {account.bankName}
                  </span>
                  <span className="text-[10px] bg-stone-200/70 text-stone-600 px-1.5 py-0.5 rounded-sm">
                    {account.type}
                  </span>
                </div>
                <p className="text-sm font-mono font-bold text-stone-900 tracking-wider mt-1 select-all">
                  {account.accountNumber}
                </p>
                <p className="text-[11px] text-stone-500 mt-0.5 truncate">
                  {account.holderName}
                </p>
              </div>

              <button
                onClick={() => handleCopy(account.accountNumber, idx)}
                className="btn btn-card p-2 rounded-lg bg-white border border-stone-200 hover:border-[#8B0000] text-stone-700 hover:text-[#8B0000] transition-colors shrink-0 cursor-pointer flex items-center gap-1 text-xs"
                title="Salin Nombor Akaun"
                aria-label="Salin Nombor Akaun"
              >
                {copiedIndex === idx ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-[10px] text-emerald-700 font-semibold">Disalin</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="text-[10px]">Salin</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* DuitNow QR Trigger */}
        <div className="pt-2">
          <button
            onClick={() => setShowQr(!showQr)}
            className="inline-flex items-center gap-1.5 text-xs text-[#8B0000] font-semibold hover:underline cursor-pointer"
          >
            <QrCode className="w-3.5 h-3.5" />
            {showQr ? 'Sembunyikan DuitNow QR' : 'Papar DuitNow QR Kod'}
          </button>

          {showQr && (
            <div className="mt-4 p-4 bg-white border border-[#8B0000]/25 rounded-2xl max-w-xs mx-auto shadow-md animate-in fade-in zoom-in-95 duration-200">
              <div className="w-44 h-44 mx-auto bg-stone-100 border-2 border-dashed border-[#8B0000]/30 rounded-xl flex flex-col items-center justify-center p-3 text-center">
                {/* Visual DuitNow QR representation */}
                <div className="w-32 h-32 bg-white p-2 rounded-lg shadow-xs flex flex-col items-center justify-center border border-stone-200">
                  <div className="w-full h-full bg-[#8B0000]/10 flex flex-col items-center justify-center relative overflow-hidden rounded">
                    <QrCode className="w-20 h-20 text-[#8B0000]" />
                  </div>
                </div>
              </div>
              <p className="text-xs font-bold text-stone-900 mt-2">
                DuitNow QR Walimatul Urus
              </p>
              <p className="text-[11px] text-stone-500">
                Imbas menggunakan sebarang aplikasi perbankan atau e-dompet
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
