import React from 'react';
import { ArrowRight, ArrowDown, Gift, AlertTriangle, ShieldAlert } from 'lucide-react';

interface IsoUpdateBannerProps {
  onCheckoutClick: () => void;
}

export const IsoUpdateBanner: React.FC<IsoUpdateBannerProps> = ({ onCheckoutClick }) => {
  return (
    <section className="py-12 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white border-y-4 border-amber-500 relative overflow-hidden">
      {/* Subtle lighting accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        
        {/* Title & Subtitle */}
        <div className="inline-block bg-amber-500/20 border border-amber-400/40 text-amber-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
          Roadmap Standar Internasional
        </div>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-2 text-white tracking-tight">
          SIAP MENYAMBUT ISO 9001:2026
        </h2>
        <p className="text-base sm:text-lg text-blue-200 mb-8 font-medium">
          Gunakan Sekarang, Siap Mengikuti Perkembangan Standar
        </p>

        <p className="mb-8 max-w-2xl mx-auto text-blue-100/90 text-sm sm:text-base leading-relaxed">
          SMART Audit SYSTEM saat ini menggunakan <strong className="text-white font-bold">ISO 9001:2015</strong> sebagai standar utama. Setelah <strong className="text-white font-bold">ISO 9001:2026</strong> resmi diterbitkan, materi dan tools terkait akan diperbarui menyesuaikan edisi terbaru yang berlaku.
        </p>

        {/* Upgrade Card Flow */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-md px-6 py-5 rounded-2xl border border-white/20 w-full md:w-64 text-center shadow-inner">
            <p className="text-xs text-blue-300 font-bold uppercase tracking-wider mb-1">DIGUNAKAN SEKARANG</p>
            <p className="font-black text-xl text-white">ISO 9001:2015</p>
            <p className="text-xs text-blue-200 mt-1">Standar Aktif SMM</p>
          </div>

          <div className="text-amber-400 text-2xl hidden md:flex items-center justify-center w-10 h-10 bg-white/10 rounded-full">
            <ArrowRight className="w-5 h-5" />
          </div>
          <div className="text-amber-400 text-2xl md:hidden flex items-center justify-center w-10 h-10 bg-white/10 rounded-full">
            <ArrowDown className="w-5 h-5" />
          </div>

          <div className="bg-amber-500/20 backdrop-blur-md px-6 py-5 rounded-2xl border border-amber-400/50 w-full md:w-64 text-center shadow-lg shadow-amber-950/30">
            <p className="text-xs text-amber-300 font-bold uppercase tracking-wider mb-1">UPDATE SETELAH TERBIT</p>
            <p className="font-black text-xl text-amber-300">ISO 9001:2026</p>
            <p className="text-xs text-amber-200 mt-1">Gratis untuk Pembeli Hari Ini</p>
          </div>
        </div>

        {/* Free update guarantee card */}
        <div className="max-w-xl mx-auto bg-black/30 border border-white/15 rounded-2xl p-5 mb-8 backdrop-blur-sm">
          <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full font-bold text-xs sm:text-sm shadow-md mb-3">
            <Gift className="w-4 h-4 text-green-200" />
            <span>BELI SEKARANG, DAPAT UPDATE GRATIS</span>
          </div>
          <p className="text-amber-200 text-xs sm:text-sm font-medium leading-relaxed">
            *Harga akan dinaikkan menjadi <strong className="text-white font-extrabold underline decoration-amber-400 decoration-2">Rp999.000</strong> setelah ISO 9001:2026 resmi rilis. Amankan harga <strong className="text-white">Promo Kemerdekaan Rp249.000</strong> hari ini, buruan pesan sekarang!
          </p>
        </div>

        {/* CTA */}
        <div>
          <a
            id="iso-banner-cta"
            href="#checkout"
            onClick={onCheckoutClick}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-950 hover:bg-gray-100 rounded-xl font-black text-sm sm:text-base transition-all shadow-xl hover:scale-105"
          >
            <span>SAYA INGIN AKSES SMART AUDIT SYSTEM</span>
            <ArrowRight className="w-4 h-4 text-blue-900" />
          </a>
        </div>
      </div>
    </section>
  );
};
