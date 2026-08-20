import React, { useState, useEffect } from 'react';
import { TrendingUp, ArrowRight, Menu, X, Sparkles } from 'lucide-react';
import { CHECKOUT_WHATSAPP_URL } from '../data/auditContent';

interface NavbarProps {
  onCheckoutClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCheckoutClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200/80 py-2.5'
          : 'bg-white/90 backdrop-blur-sm border-b border-gray-100 py-3.5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-blue-900 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <TrendingUp className="w-5 h-5 text-blue-200" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl sm:text-2xl tracking-tight text-gray-900">
                SMART<span className="text-red-600">Audit</span>
              </span>
              <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest -mt-1 hidden sm:block">
                SYSTEM ISO 9001
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#masalah" className="hover:text-blue-900 transition-colors">Tantangan Audit</a>
            <a href="#cara-kerja" className="hover:text-blue-900 transition-colors">Alur Sistem</a>
            <a href="#ai-tools" className="hover:text-blue-900 transition-colors">3 AI Tools</a>
            <a href="#worksheet" className="hover:text-blue-900 transition-colors">7 Worksheet & Media</a>
            <a href="#faq" className="hover:text-blue-900 transition-colors">FAQ</a>
          </div>

          {/* Action CTA */}
          <div className="flex items-center gap-3">
            <a
              id="nav-cta-btn"
              href="#checkout"
              onClick={onCheckoutClick}
              className="hidden sm:inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 md:px-5 py-2.5 rounded-full font-bold text-xs md:text-sm transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <span>AKSES SMART AUDIT</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-gray-200 bg-white rounded-2xl shadow-xl px-4 space-y-2.5">
            <a
              href="#masalah"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-gray-700 hover:text-blue-900"
            >
              Tantangan Auditor
            </a>
            <a
              href="#cara-kerja"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-gray-700 hover:text-blue-900"
            >
              Alur Kerja Sistem
            </a>
            <a
              href="#ai-tools"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-gray-700 hover:text-blue-900"
            >
              3 AI Tools Audit
            </a>
            <a
              href="#worksheet"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-gray-700 hover:text-blue-900"
            >
              7 Worksheet Formulir AMI
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-gray-700 hover:text-blue-900"
            >
              Tanya Jawab (FAQ)
            </a>
            <div className="pt-2">
              <a
                href="#checkout"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onCheckoutClick();
                }}
                className="w-full text-center block bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-bold text-sm shadow-md"
              >
                SAYA INGIN AKSES SMART AUDIT SYSTEM
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
