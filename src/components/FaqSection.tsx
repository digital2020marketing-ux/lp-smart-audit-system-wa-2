import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/auditContent';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(prev => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-16 md:py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-blue-900 bg-blue-100 px-3 py-1 rounded-full">
            Tanya Jawab
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            Segala hal yang perlu Anda ketahui tentang SMART Audit SYSTEM.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 shadow-xs overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-5 sm:px-6 py-4.5 font-bold text-gray-900 hover:bg-gray-50/80 focus:outline-none flex justify-between items-center gap-3"
                >
                  <span className="text-sm sm:text-base flex items-start gap-2.5">
                    <HelpCircle className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-blue-900' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-600 border-t border-gray-100 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
