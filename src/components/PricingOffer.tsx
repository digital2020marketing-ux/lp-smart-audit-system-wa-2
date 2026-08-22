import React from 'react';
import { CheckCircle2, Gift, AlertTriangle, ShieldCheck, Zap, Globe, Infinity, ArrowRight, Sparkles } from 'lucide-react';

interface PricingOfferProps {
  onCheckoutClick: () => void;
}

export const PricingOffer: React.FC<PricingOfferProps> = ({ onCheckoutClick }) => {
  return (
    <section className="py-16 md:py-24 bg-blue-950 text-white border-t border-gray-800 relative overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-500/20 border border-amber-400/30 px-4 py-1.5 rounded-full inline-block mb-3">
            Penawaran Spesial Terbatas
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center leading-tight tracking-tight">
            Mulai Audit Lebih Terstruktur dalam Satu Dashboard
          </h2>
          <p className="text-blue-200 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
            Dapatkan seluruh panduan, instrumen formulir, dan alat bantu AI untuk meningkatkan efisiensi audit internal Anda.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="bg-white text-gray-900 rounded-3xl overflow-hidden shadow-2xl max-w-2xl mx-auto border border-gray-100">
          
          {/* Card Top Banner */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-3.5 px-6 text-center text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>PROMO KEMERDEKAAN — HEMAT LEBIH DARI 50% HARI INI</span>
          </div>

          <div className="p-6 sm:p-10">
            
            {/* Features list */}
            <h3 className="font-black text-xl text-gray-900 mb-6 border-b border-gray-100 pb-4">
              Yang Anda Dapatkan dalam Paket:
            </h3>

            <ul className="space-y-4 mb-8 text-sm sm:text-base font-semibold text-gray-800">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <span><strong>9 Modul Ebook & Audio Podcast</strong> Pembahasan Mendalam Audit Mutu Internal</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <span><strong>7 Worksheet & Formulir AMI</strong> Siap Edit (Word & Excel)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <span><strong>Slide Presentasi Pelatihan (PDF)</strong> Siap Pakai untuk Training & Sosialisasi Audit</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <span><strong>Mind Map & Infografis Per Bab (PDF)</strong> Alur & Ringkasan Klausul ISO 9001</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <span><strong>AI Checklist Generator</strong> Spesialis Klausul ISO 9001</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <span><strong>AI PLOR</strong> — Formulator Laporan Temuan Standar Internasional</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <span><strong>AI CAPA</strong> — Perumus Tindak Lanjut Korektif & Preventif</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <span><strong>ISO 19011 Audit Assistant</strong> — Co-Pilot & Konsultasi Kasus 24/7</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <span><strong>Pre-Test & Post-Test</strong> Pemahaman Audit ISO 9001</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <span><strong>Akses Seumur Hidup (Lifetime Access)</strong> Tanpa Biaya Bulanan</span>
              </li>
              <li className="flex items-start gap-3 pt-4 border-t border-gray-200 mt-2 bg-amber-50/80 p-3.5 rounded-2xl border border-amber-200">
                <Gift className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-blue-950 font-black block">
                    Bonus Eksklusif: Update GRATIS ke ISO 9001:2026
                  </strong>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 font-medium">
                    Saat standar ISO 9001:2026 resmi diterbitkan, seluruh materi dan AI prompt Anda akan otomatis diperbarui tanpa perlu membayar lagi.
                  </p>
                </div>
              </li>
            </ul>

            {/* Warning alert */}
            <div className="bg-red-50 border-2 border-red-200 p-4 sm:p-5 rounded-2xl mb-8 text-center">
              <div className="flex items-center justify-center gap-2 text-red-700 font-extrabold text-xs sm:text-sm mb-1">
                <AlertTriangle className="w-4 h-4 shrink-0 text-red-600" />
                <span>PERHATIAN: HARGA PROMO KEMERDEKAAN TERBATAS!</span>
              </div>
              <p className="text-red-700 text-xs sm:text-sm font-semibold leading-relaxed">
                Harga normal Rp497.000 dan akan dinaikkan menjadi <span className="font-black text-red-900 underline decoration-2">Rp999.000</span> saat ISO 9001:2026 resmi rilis. Pesan hari ini untuk mengunci harga promo terhemat!
              </p>
            </div>

            {/* Price display */}
            <div className="text-center mb-8">
              <p className="text-gray-400 line-through text-base sm:text-lg font-bold mb-1">
                Harga Normal: Rp497.000
              </p>
              <div className="text-4xl sm:text-5xl md:text-6xl font-black text-red-600 tracking-tight">
                Rp249.000
              </div>
              <div className="inline-block bg-gray-100 text-gray-800 font-bold mt-2 text-xs sm:text-sm py-1.5 px-4 rounded-full">
                Sekali Bayar • Akses Seumur Hidup
              </div>
            </div>

            {/* Checkout Trigger */}
            <a
              id="pricing-box-cta"
              href="#checkout"
              onClick={onCheckoutClick}
              className="block w-full bg-red-600 hover:bg-red-700 text-white rounded-2xl font-black text-base sm:text-xl py-5 text-center transition-all shadow-xl shadow-red-600/30 hover:shadow-red-600/40 transform hover:-translate-y-1"
            >
              SAYA INGIN AKSES SMART AUDIT SYSTEM
            </a>

            {/* Micro trust indicators */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs font-bold text-gray-500 pt-4 border-t border-gray-100">
              <span className="flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-green-600" /> Checkout Aman
              </span>
              <span className="flex items-center justify-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-500" /> Akses Instan
              </span>
              <span className="flex items-center justify-center gap-1.5">
                <Globe className="w-4 h-4 text-blue-600" /> Semua Browser
              </span>
              <span className="flex items-center justify-center gap-1.5">
                <Infinity className="w-4 h-4 text-purple-600" /> Akses Selamanya
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
