import React, { useState } from 'react';
import { X, Copy, Check, Code, Sparkles, CheckCircle2 } from 'lucide-react';
import { JEMPUTAN_ME_CSS_OVERRIDE } from '../data/cssOverrideCode';

interface CssOverrideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CssOverrideModal: React.FC<CssOverrideModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(JEMPUTAN_ME_CSS_OVERRIDE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#8B0000]/20 flex flex-col max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-stone-50/80">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-[#8B0000]/10 text-[#8B0000]">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-stone-900 font-serif-luxury">
                Kod CSS Override jemputan.me
              </h3>
              <p className="text-xs text-stone-500">
                Tema Putih (White Theme) + Hiasan Bunga & Elemen Merah Maroon (#8B0000)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-left text-xs text-stone-700">
          {/* Requirements fulfilled list */}
          <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 space-y-1.5">
            <p className="font-bold text-amber-900 text-xs flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-700" />
              Keperluan Kod CSS Dipenuhi Sepenuhnya:
            </p>
            <ul className="space-y-1 text-stone-600 pl-1">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                <span><strong>1. Background:</strong> Latar belakang <code className="bg-white px-1 py-0.5 rounded border text-[#8B0000]">#content</code>, <code className="bg-white px-1 py-0.5 rounded border text-[#8B0000]">body</code> dipaksa <code className="bg-white px-1 py-0.5 rounded border">#ffffff !important</code> dan gambar latar statik dibuang.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                <span><strong>2. Typography Colors:</strong> Tajuk, <code className="bg-white px-1 py-0.5 rounded border">h1-h6</code>, <code className="bg-white px-1 py-0.5 rounded border">.name1</code>, <code className="bg-white px-1 py-0.5 rounded border">.name2</code>, <code className="bg-white px-1 py-0.5 rounded border">.and</code>, <code className="bg-white px-1 py-0.5 rounded border">.parent_name</code>, <code className="bg-white px-1 py-0.5 rounded border">.bride_name p</code>, <code className="bg-white px-1 py-0.5 rounded border">.sectionTitle</code> ke Maroon Red <code className="bg-white px-1 py-0.5 rounded border text-[#8B0000]">#8B0000 !important</code>.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                <span><strong>3. Buttons & Selectors:</strong> Semua <code className="bg-white px-1 py-0.5 rounded border">.btn</code>, <code className="bg-white px-1 py-0.5 rounded border">.btn-primary</code>, dan <code className="bg-white px-1 py-0.5 rounded border">.wish-cta-row button</code> ditukar ke background & border <code className="bg-white px-1 py-0.5 rounded border text-[#8B0000]">#8B0000 !important</code> bertulis putih.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                <span><strong>4. Header Floral Image:</strong> Pseudo-element <code className="bg-white px-1 py-0.5 rounded border">body::before</code> dengan <code className="bg-white px-1 py-0.5 rounded border">./kad putih_files/bunga-merah.png</code>, <code className="bg-white px-1 py-0.5 rounded border">contain</code>, <code className="bg-white px-1 py-0.5 rounded border">top center</code>, dan z-index tinggi.</span>
              </li>
            </ul>
          </div>

          {/* Guide where to paste */}
          <div className="p-3 bg-stone-100 rounded-lg text-stone-600">
            <p className="font-semibold text-stone-800 mb-1">
              Cara Pemasangan ke HTML jemputan.me:
            </p>
            <ol className="list-decimal list-inside space-y-1 text-[11px]">
              <li>Tekan butang <strong>"Salin Kod CSS"</strong> di bawah.</li>
              <li>Buka fail HTML jemputan.me anda (contohnya <code className="bg-white px-1 rounded">index.html</code>).</li>
              <li>Cari tag penutup <code className="text-[#8B0000] font-bold">&lt;/head&gt;</code>.</li>
              <li>Tampal kod ini tepat di atas tag <code className="text-[#8B0000] font-bold">&lt;/head&gt;</code> dan simpan fail.</li>
            </ol>
          </div>

          {/* Code display block */}
          <div className="relative">
            <pre className="p-4 bg-stone-900 text-stone-100 rounded-xl font-mono text-[11px] leading-relaxed overflow-x-auto max-h-72 border border-stone-800">
              <code>{JEMPUTAN_ME_CSS_OVERRIDE}</code>
            </pre>
            <button
              onClick={handleCopy}
              className="absolute top-3 right-3 px-3 py-1.5 bg-[#8B0000] hover:bg-[#6e0000] text-white rounded-md text-xs font-medium flex items-center gap-1.5 shadow-md transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Berjaya Disalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin Kod</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-stone-200 bg-stone-50">
          <span className="text-[11px] text-stone-500">
            Sesuai untuk semua kad berasaskan sistem jemputan.me
          </span>
          <div className="flex gap-2">
            <button
              onClick={handleCopy}
              className="px-4 py-2 bg-[#8B0000] hover:bg-[#6e0000] text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Telah Disalin!' : 'Salin Kod CSS'}</span>
            </button>
            <button
              onClick={onClose}
              className="px-3 py-2 border border-stone-300 hover:bg-stone-100 text-stone-700 rounded-lg text-xs font-medium transition-colors cursor-pointer"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
