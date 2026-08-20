import React from 'react';
import { BookOpen, FolderOpen, Cpu, Bot, ShieldCheck, Zap, Globe, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onCheckoutClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCheckoutClick }) => {
  return (
    <header className="relative pt-20 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 hero-pattern border-b border-gray-200/60 overflow-hidden">
      {/* Decorative gradient blur background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-64 bg-blue-100/60 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        
        {/* Top pill badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-blue-50 border border-blue-200 text-blue-900 px-3 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-sm font-bold mb-4 sm:mb-6 shadow-xs max-w-full text-left">
          <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse shrink-0" />
          <span className="truncate sm:overflow-visible">Solusi Lengkap Audit Mutu Internal (AMI) ISO 9001</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-4 sm:mb-5 leading-tight">
          Baru Ditugaskan Menjadi Auditor Internal ISO 9001,{' '}
          <span className="text-blue-900 block mt-1">Tapi Masih Bingung Mulai dari Mana?</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-sm sm:text-lg md:text-xl text-gray-700 mb-3 sm:mb-4 font-medium leading-relaxed max-w-3xl mx-auto px-1">
          Siapkan checklist, temuan, laporan, dan tindak lanjut audit lebih terstruktur—tanpa harus membuat semuanya dari nol.
        </p>

        <p className="text-xs sm:text-base text-gray-600 mb-6 sm:mb-10 max-w-2xl mx-auto leading-normal px-2">
          <strong className="text-gray-900 font-bold">SMART Audit SYSTEM</strong> menggabungkan panduan audit, worksheet siap pakai, slide presentasi, mind map & infografis per bab, 3 AI Tools, dan AI Assistant dalam satu dashboard praktis.
        </p>

        {/* 4 Visual Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 mb-6 sm:mb-10 max-w-3xl mx-auto">
          <div className="bg-white p-3.5 sm:p-5 rounded-2xl shadow-xs hover:shadow-md transition-shadow border border-gray-200 text-left flex flex-col items-start group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-900 mb-1.5 sm:mb-2 group-hover:scale-105 transition-transform">
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="font-extrabold text-sm sm:text-lg text-gray-900 leading-tight">9 Modul</div>
            <div className="text-[11px] sm:text-xs text-gray-500 font-medium leading-tight mt-0.5">Ebook & Audio Podcast</div>
          </div>

          <div className="bg-white p-3.5 sm:p-5 rounded-2xl shadow-xs hover:shadow-md transition-shadow border border-gray-200 text-left flex flex-col items-start group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-900 mb-1.5 sm:mb-2 group-hover:scale-105 transition-transform">
              <FolderOpen className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="font-extrabold text-sm sm:text-lg text-gray-900 leading-tight">7 Worksheet</div>
            <div className="text-[11px] sm:text-xs text-gray-500 font-medium leading-tight mt-0.5">Formulir AMI Siap Pakai</div>
          </div>

          <div className="bg-white p-3.5 sm:p-5 rounded-2xl shadow-xs hover:shadow-md transition-shadow border border-gray-200 text-left flex flex-col items-start group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-900 mb-1.5 sm:mb-2 group-hover:scale-105 transition-transform">
              <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="font-extrabold text-sm sm:text-lg text-gray-900 leading-tight">3 AI Tools</div>
            <div className="text-[11px] sm:text-xs text-gray-500 font-medium leading-tight mt-0.5">Checklist • PLOR • CAPA</div>
          </div>

          <div className="bg-white p-3.5 sm:p-5 rounded-2xl shadow-xs hover:shadow-md transition-shadow border border-gray-200 text-left flex flex-col items-start group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-900 mb-1.5 sm:mb-2 group-hover:scale-105 transition-transform">
              <Bot className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="font-extrabold text-sm sm:text-lg text-gray-900 leading-tight">AI Assistant</div>
            <div className="text-[11px] sm:text-xs text-gray-500 font-medium leading-tight mt-0.5">Tanya Jawab ISO 24/7</div>
          </div>
        </div>

        {/* Price Box & Offer */}
        <div className="mb-6 bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2">
            <span className="text-gray-400 line-through text-sm sm:text-lg font-semibold">Rp497.000</span>
            <span className="text-2xl sm:text-4xl font-black text-red-600 tracking-tight">
              Rp249.000
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold text-gray-700">
            <span className="bg-red-50 text-red-700 px-2.5 py-1 rounded-full border border-red-200">
              🇮🇩 Promo Kemerdekaan
            </span>
            <span className="bg-gray-100 text-gray-800 px-2.5 py-1 rounded-full">
              Sekali Bayar • Akses Seumur Hidup
            </span>
          </div>
        </div>

        {/* Main CTA Button */}
        <div className="flex flex-col items-center gap-3">
          <a
            id="hero-main-cta"
            href="#checkout"
            onClick={onCheckoutClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-10 py-3.5 sm:py-4 bg-red-600 hover:bg-red-700 active:scale-[0.98] text-white rounded-2xl font-black text-sm sm:text-lg transition-all shadow-lg shadow-red-600/25 hover:shadow-red-600/35"
          >
            <span>SAYA INGIN AKSES SMART AUDIT SYSTEM</span>
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 shrink-0" />
          </a>

          {/* Trust points */}
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-[11px] sm:text-sm text-gray-600 font-semibold mt-1">
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-green-600 shrink-0" />
              Checkout Aman
            </span>
            <span className="text-gray-300">•</span>
            <span className="inline-flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              Akses Instan
            </span>
            <span className="text-gray-300">•</span>
            <span className="inline-flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              Via Browser Tanpa Instalasi
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
