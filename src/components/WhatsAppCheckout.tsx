import React, { useState, useEffect } from 'react';
import { MessageCircle, Copy, Check, Sparkles, ShieldCheck, Clock, CheckCircle2, User, Zap } from 'lucide-react';
import { CHECKOUT_WHATSAPP_NUMBER } from '../data/auditContent';

interface WhatsAppCheckoutProps {
  onWhatsAppClick?: () => void;
}

export const WhatsAppCheckout: React.FC<WhatsAppCheckoutProps> = ({ onWhatsAppClick }) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 1, hours: 2, minutes: 0, seconds: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return { days: 1, hours: 2, minutes: 0, seconds: 30 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getCustomMessage = () => {
    let msg = `Halo Admin SMART Audit SYSTEM, saya ingin memesan Paket Lengkap Promo Kemerdekaan (Rp249.000).`;
    if (name.trim()) {
      msg += `\n\nNama: ${name.trim()}`;
    }
    if (company.trim()) {
      msg += `\nInstansi/Perusahaan: ${company.trim()}`;
    }
    msg += `\n\nMohon info nomor rekening / pembayaran untuk akses instannya. Terima kasih!`;
    return msg;
  };

  const getWaUrl = () => {
    const text = encodeURIComponent(getCustomMessage());
    return `https://wa.me/${CHECKOUT_WHATSAPP_NUMBER}?text=${text}`;
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(getCustomMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCheckout = () => {
    // Fire Meta Pixel tracking
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'Lead', {
        content_name: 'SMART Audit SYSTEM - WA Contact',
        value: 249000,
        currency: 'IDR'
      });
      (window as any).fbq('track', 'InitiateCheckout', {
        content_name: 'SMART Audit SYSTEM',
        content_ids: ['smart-audit-system'],
        content_type: 'product',
        value: 249000,
        currency: 'IDR'
      });
    }

    if (onWhatsAppClick) {
      onWhatsAppClick();
    }
  };

  return (
    <section id="checkout" className="py-16 md:py-24 bg-white border-t border-gray-200 scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Title */}
        <span className="text-xs font-black uppercase tracking-widest text-green-700 bg-green-50 border border-green-200 px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          Proses Order Cepat & Mudah
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3 tracking-tight">
          Amankan Harga Promo Kemerdekaan!
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-6 max-w-xl mx-auto">
          Dapatkan akses instan ke seluruh paket SMART Audit SYSTEM melalui verifikasi langsung di WhatsApp resmi kami.
        </p>

        {/* Urgency countdown bar */}
        <div className="max-w-lg mx-auto bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 mb-6 sm:mb-8 flex flex-col sm:flex-row items-center justify-between gap-2 shadow-lg shadow-red-600/25 border border-red-500">
          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold tracking-wide">
            <Clock className="w-4 h-4 text-amber-300 animate-pulse shrink-0" />
            <span>Sisa Waktu Promo:</span>
          </div>
          <div className="flex items-center gap-1 font-mono font-black text-xs sm:text-sm">
            <div className="flex items-center gap-0.5 bg-black/35 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg">
              <span>{timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}</span>
              <span className="text-[9px] sm:text-[10px] text-amber-300 font-sans font-semibold ml-0.5">Hari</span>
            </div>
            <span className="text-amber-300 font-bold">:</span>
            <div className="flex items-center gap-0.5 bg-black/35 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg">
              <span>{timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}</span>
              <span className="text-[9px] sm:text-[10px] text-amber-300 font-sans font-semibold ml-0.5">Jam</span>
            </div>
            <span className="text-amber-300 font-bold">:</span>
            <div className="flex items-center gap-0.5 bg-black/35 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg">
              <span>{timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}</span>
              <span className="text-[9px] sm:text-[10px] text-amber-300 font-sans font-semibold ml-0.5">Mnt</span>
            </div>
            <span className="text-amber-300 font-bold">:</span>
            <div className="flex items-center gap-0.5 bg-black/35 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md sm:rounded-lg">
              <span>{timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}</span>
              <span className="text-[9px] sm:text-[10px] text-amber-300 font-sans font-semibold ml-0.5">Dtk</span>
            </div>
          </div>
        </div>

        {/* WhatsApp Card Box */}
        <div className="bg-gradient-to-b from-green-50/90 to-emerald-50/70 border-2 border-green-500 rounded-3xl p-5 sm:p-10 shadow-xl w-full overflow-hidden transform transition hover:shadow-2xl">
          
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg shadow-green-500/30">
            <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
          </div>

          <h3 className="text-xl sm:text-3xl font-black text-gray-900 mb-2">
            Pesan Langsung via WhatsApp
          </h3>

          <p className="text-gray-700 mb-5 sm:mb-6 font-medium text-xs sm:text-base max-w-lg mx-auto leading-relaxed">
            Mumpung masih <strong className="text-green-800 font-extrabold text-sm sm:text-lg">Promo Kemerdekaan Rp249.000</strong> saja, buruan pesan sekarang sebelum harga naik menjadi <span className="line-through text-gray-500">Rp999.000</span> saat rilis ISO 9001:2026!
          </p>

          {/* Quick Optional Input */}
          <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-green-200 mb-5 sm:mb-6 text-left max-w-md mx-auto shadow-xs space-y-2.5">
            <div>
              <label className="block text-[11px] sm:text-xs font-bold text-gray-700 mb-1">
                Nama Lengkap Anda (Opsional):
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Budi Santoso"
                  className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center text-xs text-gray-500 mb-1 font-bold">
                <span className="text-[11px]">Pesan Otomatis:</span>
                <button
                  onClick={handleCopyMessage}
                  className="text-green-700 hover:text-green-800 flex items-center gap-1 font-semibold text-[11px]"
                >
                  {copied ? <Check className="w-3 h-3 text-green-600" /> : <Copy className="w-3 h-3" />}
                  {copied ? 'Tersalin' : 'Salin'}
                </button>
              </div>
              <p className="text-[11px] sm:text-xs text-gray-700 italic bg-gray-50 p-2 rounded border border-gray-100 font-mono line-clamp-3">
                "{getCustomMessage()}"
              </p>
            </div>
          </div>

          {/* Primary Action Button */}
          <a
            id="wa-checkout-btn"
            href={getWaUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCheckout}
            className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 sm:px-12 py-3.5 sm:py-5 bg-green-500 hover:bg-green-600 active:scale-[0.98] text-white rounded-full font-black text-sm sm:text-lg transition-all shadow-xl shadow-green-500/30"
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
            <span>PESAN SEKARANG VIA WHATSAPP</span>
          </a>

          {/* Guarantees */}
          <div className="mt-6 sm:mt-8 pt-5 border-t border-green-200/80 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[11px] sm:text-xs font-semibold text-gray-600">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-green-600 shrink-0" /> Verifikasi Otomatis
            </span>
            <span className="text-gray-300">•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-green-600 shrink-0" /> Respon Cepat & Ramah
            </span>
            <span className="text-gray-300">•</span>
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Akses Dashboard Instan
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
