import React from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export const PainPoints: React.FC = () => {
  const painList = [
    {
      title: 'Checklist belum siap padahal audit segera dimulai.',
      desc: 'Terburu-buru mencari referensi atau copy-paste checklist lama yang tidak sesuai proses divisi terkini.'
    },
    {
      title: 'Bingung menentukan pertanyaan audit yang relevan.',
      desc: 'Pertanyaan terlalu teoritis, tertutup (hanya dijawab ya/tidak), atau tidak menggali efektivitas klausul.'
    },
    {
      title: 'Menemukan ketidaksesuaian tetapi ragu menulis temuan secara objektif.',
      desc: 'Khawatir auditee defensif atau debat berkepanjangan karena temuan dianggap subjektif / opini pribadi.'
    },
    {
      title: 'Laporan harus segera selesai tetapi administrasi masih berantakan.',
      desc: 'Menghabiskan berjam-jam merapikan lembar PTKP, rekapitulasi temuan, dan format presentasi closing.'
    },
    {
      title: 'Baru pertama kali menjadi auditor dan takut salah mengambil keputusan.',
      desc: 'Ragu menentukan kategori temuan (Major, Minor, atau Saran Perbaikan) dan cara menelusuri klausul yang tepat.'
    }
  ];

  return (
    <section id="masalah" className="py-16 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center mb-10">
          <span className="text-xs font-black uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200">
            Tantangan Auditor Lapangan
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
            Pernah Mengalami Ini Saat Audit?
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Kendala-kendala umum yang sering dihadapi auditor internal pemula maupun berpengalaman:
          </p>
        </div>

        {/* Checkpoints list */}
        <div className="space-y-3.5 mb-10">
          {painList.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-4 sm:p-5 bg-gray-50/90 hover:bg-gray-100/80 transition-colors rounded-2xl border border-gray-200/80 shadow-xs"
            >
              <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5 text-green-600">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-900 font-bold text-sm sm:text-base">{item.title}</p>
                <p className="text-gray-500 text-xs sm:text-sm mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Solution Box */}
        <div className="bg-blue-50 border-2 border-blue-200 p-6 sm:p-7 rounded-2xl text-center shadow-sm">
          <p className="text-lg sm:text-xl font-extrabold text-blue-950 leading-snug">
            SMART Audit SYSTEM membantu menyatukan proses tersebut dalam satu alur kerja yang terstruktur dan praktis.
          </p>
          <p className="text-xs sm:text-sm text-blue-700 mt-2 font-medium">
            Mulai dari persiapan, penyusunan pertanyaan, formulasi temuan PLOR, hingga monitoring CAPA.
          </p>
        </div>
      </div>
    </section>
  );
};
