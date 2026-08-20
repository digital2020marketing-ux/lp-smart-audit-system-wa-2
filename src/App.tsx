import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IsoUpdateBanner } from './components/IsoUpdateBanner';
import { PainPoints } from './components/PainPoints';
import { WorkflowSection } from './components/WorkflowSection';
import { AiToolsShowcase } from './components/AiToolsShowcase';
import { VideoDemoAccordion } from './components/VideoDemoAccordion';
import { WorksheetsSection } from './components/WorksheetsSection';
import { TargetAudience } from './components/TargetAudience';
import { PricingOffer } from './components/PricingOffer';
import { WhatsAppCheckout } from './components/WhatsAppCheckout';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const handleCheckoutScroll = () => {
    // Track Meta Pixel InitiateCheckout
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'InitiateCheckout', {
        content_name: 'SMART Audit SYSTEM',
        content_ids: ['smart-audit-system'],
        content_type: 'product',
        value: 249000,
        currency: 'IDR'
      });
    }

    const checkoutElem = document.getElementById('checkout');
    if (checkoutElem) {
      checkoutElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col selection:bg-blue-900 selection:text-white">
      {/* Top Fixed Navbar */}
      <Navbar onCheckoutClick={handleCheckoutScroll} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onCheckoutClick={handleCheckoutScroll} />

        {/* 2. ISO 9001:2026 Roadmap & Free Update Banner */}
        <IsoUpdateBanner onCheckoutClick={handleCheckoutScroll} />

        {/* 3. Tantangan / Masalah Auditor */}
        <PainPoints />

        {/* 4. Alur Kerja Sistem 4 Tahap */}
        <WorkflowSection />

        {/* 5. 3 AI Tools Showcase */}
        <AiToolsShowcase onCheckoutClick={handleCheckoutScroll} />

        {/* 6. Cuplikan Video Demo Produk */}
        <VideoDemoAccordion />

        {/* 8. 7 Worksheet & 9 Modul Panduan */}
        <WorksheetsSection />

        {/* 10. Cocok Untuk Siapa */}
        <TargetAudience />

        {/* 11. Penawaran Paket & Pricing Promo Kemerdekaan */}
        <PricingOffer onCheckoutClick={handleCheckoutScroll} />

        {/* 12. WhatsApp Direct Checkout Section */}
        <WhatsAppCheckout />

        {/* 13. FAQ */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp and Sticky Mobile CTAs */}
      <FloatingWhatsApp />
    </div>
  );
}
