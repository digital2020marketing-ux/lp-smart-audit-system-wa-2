import React, { Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

// Lazy load below-the-fold components for ultra-fast initial mobile LCP
const IsoUpdateBanner = lazy(() => import('./components/IsoUpdateBanner').then(m => ({ default: m.IsoUpdateBanner })));
const PainPoints = lazy(() => import('./components/PainPoints').then(m => ({ default: m.PainPoints })));
const WorkflowSection = lazy(() => import('./components/WorkflowSection').then(m => ({ default: m.WorkflowSection })));
const AiToolsShowcase = lazy(() => import('./components/AiToolsShowcase').then(m => ({ default: m.AiToolsShowcase })));
const WorksheetsSection = lazy(() => import('./components/WorksheetsSection').then(m => ({ default: m.WorksheetsSection })));
const TargetAudience = lazy(() => import('./components/TargetAudience').then(m => ({ default: m.TargetAudience })));
const PricingOffer = lazy(() => import('./components/PricingOffer').then(m => ({ default: m.PricingOffer })));
const WhatsAppCheckout = lazy(() => import('./components/WhatsAppCheckout').then(m => ({ default: m.WhatsAppCheckout })));
const FaqSection = lazy(() => import('./components/FaqSection').then(m => ({ default: m.FaqSection })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const FloatingWhatsApp = lazy(() => import('./components/FloatingWhatsApp').then(m => ({ default: m.FloatingWhatsApp })));

export default function App() {
  const [showBelowFold, setShowBelowFold] = React.useState(false);

  React.useEffect(() => {
    // Mount below-the-fold components smoothly after initial frame is painted
    if ('requestIdleCallback' in window) {
      const handle = (window as any).requestIdleCallback(() => setShowBelowFold(true), { timeout: 600 });
      return () => (window as any).cancelIdleCallback(handle);
    } else {
      const timer = setTimeout(() => setShowBelowFold(true), 150);
      return () => clearTimeout(timer);
    }
  }, []);

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

    setShowBelowFold(true);
    const checkoutElem = document.getElementById('checkout');
    if (checkoutElem) {
      checkoutElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      setTimeout(() => {
        const el = document.getElementById('checkout');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col selection:bg-blue-900 selection:text-white">
      {/* Top Fixed Navbar (Above the fold) */}
      <Navbar onCheckoutClick={handleCheckoutScroll} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section (Immediate Critical LCP Render) */}
        <Hero onCheckoutClick={handleCheckoutScroll} />

        {/* Below-the-fold sections loaded progressively on idle without blocking initial LCP */}
        {showBelowFold && (
          <Suspense fallback={<div className="min-h-[120px]" />}>
            {/* 2. ISO 9001:2026 Roadmap & Free Update Banner */}
            <IsoUpdateBanner onCheckoutClick={handleCheckoutScroll} />

            {/* 3. Tantangan / Masalah Auditor */}
            <PainPoints />

            {/* 4. Alur Kerja Sistem 4 Tahap */}
            <WorkflowSection />

            {/* 5. 3 AI Tools Showcase */}
            <AiToolsShowcase onCheckoutClick={handleCheckoutScroll} />

            {/* 6. 7 Worksheet & 9 Modul Panduan */}
            <WorksheetsSection />

            {/* 10. Cocok Untuk Siapa */}
            <TargetAudience />

            {/* 11. Penawaran Paket & Pricing Promo Kemerdekaan */}
            <PricingOffer onCheckoutClick={handleCheckoutScroll} />

            {/* 12. WhatsApp Direct Checkout Section */}
            <WhatsAppCheckout />

            {/* 13. FAQ */}
            <FaqSection />
          </Suspense>
        )}
      </main>

      {/* Footer & Floating Widgets loaded progressively */}
      {showBelowFold && (
        <Suspense fallback={null}>
          <Footer />
          <FloatingWhatsApp />
        </Suspense>
      )}
    </div>
  );
}

