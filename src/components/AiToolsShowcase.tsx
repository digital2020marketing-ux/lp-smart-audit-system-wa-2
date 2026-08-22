import React, { useState } from 'react';
import { ListChecks, FilePenLine, Target, Check, Sparkles, ArrowRight, Bot, ChevronRight } from 'lucide-react';

interface AiToolsShowcaseProps {
  onCheckoutClick: () => void;
}

interface PromptDemo {
  id: string;
  label: string;
  question: string;
  answerTitle: string;
  answerSummary: string;
  keyPoints: string[];
}

const PROMPT_DEMOS: PromptDemo[] = [
  {
    id: 'diff',
    label: 'Perbedaan ISO 19011:2018 vs 2026',
    question: 'Apa perbedaan ISO 19011:2018 dan ISO 19011:2026 serta panduan transisinya?',
    answerTitle: 'Perbandingan & Arah Pembaharuan ISO 19011:2026',
    answerSummary: 'ISO 19011:2026 memperkuat panduan audit sistem manajemen dengan fokus pada transformasi digital dan tata kelola risiko modern:',
    keyPoints: [
      'Digital & Remote Auditing: Standarisasi metode audit hibrida, keamanan data audit, dan verifikasi bukti digital.',
      'Konteks Perubahan Iklim (Climate Change): Integrasi aspek lingkungan dan keberlanjutan ke dalam pertimbangan program audit.',
      'Evaluasi Kompetensi Auditor: Penekanan literasi data, analytical thinking, dan evaluasi bukti berbasis risiko kontekstual.',
      'Panduan Transisi: Organisasi dapat melakukan Gap Analysis bertahap tanpa mengubah total struktur audit internal yang sudah berjalan.'
    ]
  },
  {
    id: 'gap',
    label: 'Gap Analysis Kesiapan Audit',
    question: 'Bagaimana melakukan Gap Analysis kesiapan audit sistem manajemen?',
    answerTitle: '5 Langkah Gap Analysis Praktis',
    answerSummary: 'Metode terstruktur untuk mengukur kesiapan audit internal tanpa mengganggu operasional:',
    keyPoints: [
      'Langkah 1: Pemetaan matriks klausul ISO terkini terhadap dokumen SOP & IK yang sedang berlaku.',
      'Langkah 2: Uji petik implementasi lapangan (apakah praktek kerja sesuai dengan dokumen terdokumentasi).',
      'Langkah 3: Identifikasi celah ketidaksesuaian (Missing documentation vs Implementation gap).',
      'Langkah 4: Prioritaskan temuan berdasarkan risiko dampak terhadap mutu produk & kepuasan pelanggan.',
      'Langkah 5: Rancang Action Plan perbaikan dengan target PIC dan tenggat waktu yang realistis.'
    ]
  },
  {
    id: 'docs',
    label: 'Dokumen & Kompetensi Wajib',
    question: 'Dokumen, kompetensi auditor, dan program audit apa saja yang wajib disiapkan?',
    answerTitle: 'Checklist Kesiapan Auditor & Dokumen AMI',
    answerSummary: 'Paket instrumen esensial yang harus dimiliki sebelum memulai penugasan audit internal:',
    keyPoints: [
      'Dokumen Wajib: Program Audit Tahunan (Klausul 9.2.2), Jadwal Audit (Audit Plan), Surat Pemberitahuan Audit, Checklist Audit Klausul 4-10, Formulir PTKP/CAPA, dan Format Laporan Ringkasan.',
      'Kompetensi Auditor: Memahami prinsip audit ISO 19011, menguasai klausul ISO 9001, memiliki objektivitas & independensi (tidak mengaudit pekerjaan sendiri), serta mampu merumuskan temuan metode PLOR.',
      'Tools Pendukung: Lembar kerja siap edit + AI Co-pilot untuk mempercepat penyusunan checklist dan laporan.'
    ]
  }
];

export const AiToolsShowcase: React.FC<AiToolsShowcaseProps> = ({ onCheckoutClick }) => {
  const [selectedPrompt, setSelectedPrompt] = useState<string>('diff');
  const activePrompt = PROMPT_DEMOS.find(p => p.id === selectedPrompt) || PROMPT_DEMOS[0];

  return (
    <section id="ai-tools" className="py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            AI-Powered Suite & Co-Pilot
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
            3 AI Tools + ISO 19011 Co-Pilot Assistant
          </h2>
          <p className="text-gray-400 mt-2 text-sm sm:text-base max-w-2xl mx-auto">
            Kombinasi lengkap 3 alat bantu otomatisasi audit internal serta asisten AI interaktif untuk konsultasi standar ISO 19011 dan ISO 9001.
          </p>
        </div>

        {/* 3 AI Tools Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          
          {/* Card 1: AI CHECKLIST */}
          <div className="bg-gray-800/90 hover:bg-gray-800 rounded-3xl border border-gray-700/80 p-6 sm:p-7 flex flex-col justify-between transition-all hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-900/20 group">
            <div>
              <div className="w-14 h-14 bg-blue-900/40 rounded-2xl flex items-center justify-center text-blue-400 text-2xl mb-5 border border-blue-500/30 group-hover:scale-105 transition-transform">
                <ListChecks className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-black mb-1 text-white tracking-tight">AI CHECKLIST</h3>
              <p className="text-blue-400 text-xs font-bold mb-5 uppercase tracking-wider">
                Tahap: Persiapan Audit
              </p>
              <p className="text-gray-400 text-xs sm:text-sm mb-5 leading-relaxed">
                Hasilkan daftar pertanyaan audit terstruktur (open-ended), referensi klausul ISO 9001 yang tepat, dan panduan bukti objektif yang wajib diperiksa.
              </p>
              
              <div className="border-t border-gray-700/60 pt-4 mb-4">
                <p className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">Output yang Didapat:</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Checklist Audit Per Departemen</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Pertanyaan Audit Mendalam (5W1H)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Klausul Terkait ISO 9001</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Rekomendasi Bukti Objektif</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-700/40">
              <span className="text-[11px] text-blue-300 font-semibold bg-blue-900/30 px-3 py-1 rounded-full border border-blue-500/20">
                ⚡ Generate dalam 15 Detik
              </span>
            </div>
          </div>

          {/* Card 2: AI PLOR */}
          <div className="bg-gray-800/90 hover:bg-gray-800 rounded-3xl border border-gray-700/80 p-6 sm:p-7 flex flex-col justify-between transition-all hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-900/20 group">
            <div>
              <div className="w-14 h-14 bg-amber-900/40 rounded-2xl flex items-center justify-center text-amber-400 text-2xl mb-5 border border-amber-500/30 group-hover:scale-105 transition-transform">
                <FilePenLine className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="text-xl font-black mb-1 text-white tracking-tight">AI PLOR</h3>
              <p className="text-amber-400 text-xs font-bold mb-5 uppercase tracking-wider">
                Tahap: Temuan & Pelaporan
              </p>
              <p className="text-gray-400 text-xs sm:text-sm mb-5 leading-relaxed">
                Tulis catatan lapangan apa adanya, AI PLOR akan memformat temuan menjadi rumusan standar internasional yang objektif, jelas, dan tidak memicu perdebatan.
              </p>

              <div className="border-t border-gray-700/60 pt-4 mb-4">
                <p className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">Struktur Temuan PLOR:</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-red-400 shrink-0" />
                    <span><strong>P</strong>roblem (Ketidaksesuaian)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span><strong>L</strong>ocation (Lokasi/Unit Kerja)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" />
                    <span><strong>O</strong>bjective Evidence (Fakta Bukti)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-green-400 shrink-0" />
                    <span><strong>R</strong>equirement (Klausul SMM)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-700/40">
              <span className="text-[11px] text-amber-300 font-semibold bg-amber-900/30 px-3 py-1 rounded-full border border-amber-500/20">
                📝 Standar ISO 19011 Internasional
              </span>
            </div>
          </div>

          {/* Card 3: AI CAPA */}
          <div className="bg-gray-800/90 hover:bg-gray-800 rounded-3xl border border-gray-700/80 p-6 sm:p-7 flex flex-col justify-between transition-all hover:border-green-500/50 hover:shadow-xl hover:shadow-green-900/20 group">
            <div>
              <div className="w-14 h-14 bg-green-900/40 rounded-2xl flex items-center justify-center text-green-400 text-2xl mb-5 border border-green-500/30 group-hover:scale-105 transition-transform">
                <Target className="w-7 h-7 text-green-400" />
              </div>
              <h3 className="text-xl font-black mb-1 text-white tracking-tight">AI CAPA</h3>
              <p className="text-green-400 text-xs font-bold mb-5 uppercase tracking-wider">
                Tahap: Tindak Lanjut Perbaikan
              </p>
              <p className="text-gray-400 text-xs sm:text-sm mb-5 leading-relaxed">
                Membantu memandu auditee merumuskan akar masalah (Root Cause 5-Why), tindakan koreksi segera, dan tindakan pencegahan agar temuan tidak terulang.
              </p>

              <div className="border-t border-gray-700/60 pt-4 mb-4">
                <p className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">Komponen CAPA:</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-green-400 shrink-0" />
                    <span>Analisis Akar Masalah (5-Why)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-green-400 shrink-0" />
                    <span>Koreksi Langsung (Correction)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-green-400 shrink-0" />
                    <span>Tindakan Korektif (Corrective Action)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-green-400 shrink-0" />
                    <span>PIC, Deadline & Monitoring</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-700/40">
              <span className="text-[11px] text-green-300 font-semibold bg-green-900/30 px-3 py-1 rounded-full border border-green-500/20">
                🎯 Cegah Ketidaksesuaian Berulang
              </span>
            </div>
          </div>

        </div>

        {/* Highlight Showcase: ISO 19011 Audit Assistant */}
        <div className="bg-white text-gray-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-gray-100 mb-12 relative overflow-hidden">
          
          {/* Top Assistant Identity */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8">
            
            {/* Emblem Avatar */}
            <div className="relative mb-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-emerald-600 via-teal-500 to-amber-400 p-1 shadow-lg flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-white overflow-hidden relative">
                  <div className="absolute inset-0 bg-teal-900/60 flex items-center justify-center">
                    <Bot className="w-8 h-8 sm:w-10 sm:h-10 text-teal-300" />
                  </div>
                  {/* Subtle decorative chart badge */}
                  <div className="absolute bottom-1 right-1 bg-amber-400 rounded-full p-0.5 text-[8px] text-slate-950 font-black">
                    ✓
                  </div>
                </div>
              </div>
            </div>

            {/* Assistant Name */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-4">
              ISO 19011 Audit Assistant
            </h3>

            {/* Description */}
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
              Co-pilot profesional untuk auditor dan praktisi sistem manajemen berbasis <strong className="text-gray-900 font-bold">ISO 19011:2026</strong>. Membantu perencanaan, pelaksanaan, evaluasi bukti, temuan, pelaporan, kompetensi auditor, serta perbandingan <strong className="text-gray-900 font-bold">ISO 19011:2018–2026</strong>.
            </p>
          </div>

          {/* 3 Quick Prompt Action Cards (As in the original UI) */}
          <div className="grid sm:grid-cols-3 gap-3.5 mb-8">
            {PROMPT_DEMOS.map(demo => {
              const isSelected = selectedPrompt === demo.id;
              return (
                <button
                  key={demo.id}
                  onClick={() => setSelectedPrompt(demo.id)}
                  className={`text-left p-4 sm:p-5 rounded-2xl border transition-all flex flex-col justify-between group ${
                    isSelected
                      ? 'bg-blue-50/80 border-blue-500 shadow-md ring-2 ring-blue-500/20'
                      : 'bg-gray-50/80 hover:bg-gray-100/80 border-gray-200 text-gray-700'
                  }`}
                >
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-900 block mb-1">
                      {demo.label}
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-gray-900 leading-snug line-clamp-3">
                      &ldquo;{demo.question}&rdquo;
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-bold text-blue-900 mt-3 pt-2 border-t border-gray-200/60">
                    <span>{isSelected ? 'Sedang Ditampilkan' : 'Klik untuk Lihat Simulasi'}</span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Response Box Preview */}
          <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-inner">
            <div className="flex items-start gap-3 mb-4 border-b border-slate-800 pb-3">
              <div className="w-8 h-8 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0 mt-0.5">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">ISO 19011 Audit Assistant</span>
                  <span className="text-[10px] text-teal-400/80 font-mono bg-teal-950/60 px-2 py-0.5 rounded border border-teal-800/40">Co-Pilot 24/7</span>
                </div>
                <h4 className="font-extrabold text-sm sm:text-base text-white mt-0.5">
                  {activePrompt.answerTitle}
                </h4>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 mb-3 leading-relaxed">
              {activePrompt.answerSummary}
            </p>

            <ul className="space-y-2">
              {activePrompt.keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0 mt-2" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                Siap digunakan 24/7 untuk konsultasi seluruh kasus audit mutu internal Anda.
              </span>
              <span className="text-teal-400 font-semibold">Tercakup dalam SMART Audit SYSTEM</span>
            </div>
          </div>

        </div>

        {/* Action Button */}
        <div className="text-center">
          <a
            id="ai-tools-cta"
            href="#checkout"
            onClick={onCheckoutClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-black text-base sm:text-lg transition-all shadow-xl shadow-red-600/30 transform hover:-translate-y-0.5"
          >
            <span>SAYA INGIN AKSES SMART AUDIT SYSTEM</span>
            <ArrowRight className="w-5 h-5 text-white" />
          </a>
          <p className="text-gray-400 text-xs mt-3">
            Termasuk 3 AI Tools + ISO 19011 Audit Assistant dengan Akses Seumur Hidup
          </p>
        </div>
      </div>
    </section>
  );
};

