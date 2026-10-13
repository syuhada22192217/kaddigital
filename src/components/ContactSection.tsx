import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import windowTetingkapBg from '../assets/images/tetingkap.jpg';

export const ContactSection: React.FC = () => {
  return (
    <section id="hubungi" className="relative py-12 px-4 border-t border-[#8B0000]/10 overflow-hidden text-white">
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
        <div className="text-center">
          <h3 className="sectionTitle text-xs uppercase tracking-[0.2em] text-amber-300 font-bold mb-1">
            Hubungi Kami
          </h3>
          <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white">
            Maklumat & Pertanyaan
          </h2>
        </div>

        {/* Contacts Grid */}
        <div className="space-y-3">
          {WEDDING_DATA.contacts.map((contact, idx) => {
            const rawDigits = contact.phone.replace(/[^0-9]/g, '');
            // For Malaysian WhatsApp wa.me links, format as 601...
            const waNumber = rawDigits.startsWith('60') ? rawDigits : `60${rawDigits.replace(/^0/, '')}`;
            const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(
              `Assalamualaikum, saya ingin bertanyakan mengenai majlis perkahwinan Amar & Syuhada.`
            )}`;

            // Format local display: 012-953 4254 or 011-2344 8571
            let displayPhone = contact.phone;
            if (rawDigits.length === 10) {
              displayPhone = `${rawDigits.slice(0, 3)}-${rawDigits.slice(3, 6)} ${rawDigits.slice(6)}`;
            } else if (rawDigits.length === 11) {
              displayPhone = `${rawDigits.slice(0, 3)}-${rawDigits.slice(3, 7)} ${rawDigits.slice(7)}`;
            }

            return (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-amber-300/30 bg-black/40 backdrop-blur-md flex items-center justify-between gap-3 shadow-md"
              >
                <div>
                  <h4 className="text-sm font-bold text-white tracking-wide">
                    {contact.name}
                  </h4>
                  <p className="text-xs text-amber-300 font-medium mt-0.5 tabular-nums">
                    {displayPhone}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  {/* WhatsApp button */}
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shadow-xs"
                    title={`WhatsApp ${contact.name}`}
                    aria-label={`WhatsApp ${contact.name}`}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>

                  {/* Phone Call button */}
                  <a
                    href={`tel:${contact.phone}`}
                    className="p-2.5 rounded-lg bg-[#8B0000] hover:bg-[#6e0000] text-white transition-colors shadow-xs border border-amber-300/30"
                    title={`Panggil ${contact.name}`}
                    aria-label={`Panggil ${contact.name}`}
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
