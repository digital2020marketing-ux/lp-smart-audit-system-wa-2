import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { CHECKOUT_WHATSAPP_URL } from '../data/auditContent';

export const FloatingWhatsApp: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWaClick = () => {
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'Lead', {
        content_name: 'SMART Audit SYSTEM - Floating WA',
        value: 249000,
        currency: 'IDR'
      });
    }
  };

  return (
    <>
      {/* Floating Action Buttons bottom-right */}
      <div className="fixed bottom-16 sm:bottom-6 right-3 sm:right-6 z-40 flex flex-col gap-2 items-end">
        {/* Scroll To Top button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 backdrop-blur-sm border border-gray-300 text-gray-700 shadow-md flex items-center justify-center hover:bg-gray-100 transition-all hover:scale-110 active:scale-95"
            aria-label="Kembali ke atas"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        )}

        {/* Floating WhatsApp Button */}
        <a
          id="floating-wa-btn"
          href={CHECKOUT_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWaClick}
          className="group flex items-center gap-2.5 bg-green-500 hover:bg-green-600 active:scale-95 text-white p-3 sm:pl-4 sm:pr-5 sm:py-3 rounded-full shadow-xl hover:shadow-green-500/40 transition-all"
          aria-label="Hubungi WhatsApp Admin"
        >
          <div className="relative">
            <MessageCircle className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full border-2 border-white animate-pulse" />
          </div>
          <div className="hidden sm:flex flex-col text-left">
            <span className="text-[10px] uppercase font-bold tracking-wider text-green-100 leading-none">
              Konsultasi & Order
            </span>
            <span className="font-extrabold text-xs sm:text-sm leading-tight">
              Chat WA (0822-2777-1941)
            </span>
          </div>
        </a>
      </div>

      {/* Sticky Bottom Bar for Mobile Only */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 px-3.5 py-2 flex items-center justify-between shadow-2xl safe-area-bottom">
        <div className="flex flex-col">
          <span className="text-[9px] text-gray-500 font-extrabold uppercase tracking-wide">Promo Kemerdekaan</span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-black text-red-600 leading-none">Rp249.000</span>
            <span className="text-[10px] text-gray-400 line-through leading-none">497rb</span>
          </div>
        </div>
        <a
          href="#checkout"
          className="bg-red-600 hover:bg-red-700 active:scale-95 text-white font-extrabold text-xs px-4 py-2 rounded-xl shadow-md flex items-center gap-1.5"
        >
          <span>PESAN SEKARANG</span>
        </a>
      </div>
    </>
  );
};
