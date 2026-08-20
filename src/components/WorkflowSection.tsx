import React from 'react';
import { BookOpen, FolderCheck, Cpu, MessageSquareText, Info } from 'lucide-react';

export const WorkflowSection: React.FC = () => {
  return (
    <section id="cara-kerja" className="py-16 md:py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-blue-900 bg-blue-100 px-3 py-1 rounded-full">
            Alur Kerja Terpadu
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mt-3 tracking-tight">
            Dari Persiapan Sampai Tindak Lanjut dalam Satu Sistem
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-2xl mx-auto">
            Metodologi komprehensif 4 tahap yang menghemat waktu dan meningkatkan kualitas audit internal organisasi Anda.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          
          {/* Step 1 */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl shadow-sm border border-gray-200 hover:border-blue-300 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-blue-900 font-black tracking-widest text-xs uppercase bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">
                  1. PELAJARI
                </span>
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-900">
                  <BookOpen className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-extrabold text-lg sm:text-xl text-gray-900 mb-2">9 Modul Ebook & Audio Podcast</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Pahami alur Audit Mutu Internal secara mendalam mulai dari dasar ISO 19011, pemetaan klausul ISO 9001, teknik sampling, hingga strategi closing meeting.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 text-xs text-gray-500 font-medium">
              💡 Format PDF interaktif + Audio Podcast untuk pemahaman mendalam yang fleksibel didengarkan kapan saja.
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl shadow-sm border border-gray-200 hover:border-blue-300 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-blue-900 font-black tracking-widest text-xs uppercase bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">
                  2. SIAPKAN
                </span>
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-900">
                  <FolderCheck className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-extrabold text-lg sm:text-xl text-gray-900 mb-2">7 Worksheet & Formulir AMI</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Gunakan formulir standar siap pakai untuk program audit, jadwal (audit plan), surat tugas, checklist, presensi, lembar PTKP, hingga laporan akhir.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 text-xs text-gray-500 font-medium">
              📁 Format Microsoft Word & Excel 100% editable dengan format rapi.
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl shadow-sm border border-gray-200 hover:border-blue-300 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-blue-900 font-black tracking-widest text-xs uppercase bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">
                  3. JALANKAN
                </span>
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-900">
                  <Cpu className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-extrabold text-lg sm:text-xl text-gray-900 mb-3">3 AI Tools Spesialis</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-700 font-bold">• AI Checklist:</span>
                  <span>Menyusun pertanyaan audit tajam berbasis klausul.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-700 font-bold">• AI PLOR:</span>
                  <span>Merumuskan temuan audit secara objektif & terstruktur.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-700 font-bold">• AI CAPA:</span>
                  <span>Menyusun akar masalah dan aksi korektif/preventif.</span>
                </li>
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 text-xs text-gray-500 font-medium">
              ⚡ Hemat waktu penyusunan dokumen hingga 80%.
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl shadow-sm border border-gray-200 hover:border-blue-300 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-blue-900 font-black tracking-widest text-xs uppercase bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">
                  4. DISKUSIKAN
                </span>
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-900">
                  <MessageSquareText className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-extrabold text-lg sm:text-xl text-gray-900 mb-2">AI Assistant AMI</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Konsultasikan skenario lapangan, interpretasi klausul ISO 9001, dan simulasi kasus audit dengan asisten AI yang dilatih khusus standar audit mutu.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 text-xs text-gray-500 font-medium">
              🤖 Tanya jawab 24/7 untuk memperkuat kepercayaan diri auditor.
            </div>
          </div>
        </div>

        {/* Ethical / Responsibility Disclaimer */}
        <div className="text-center text-xs sm:text-sm text-gray-600 bg-gray-100/90 border border-gray-200 py-3.5 px-5 rounded-xl max-w-3xl mx-auto flex items-center justify-center gap-2">
          <Info className="w-4 h-4 text-blue-900 shrink-0" />
          <span>
            <strong>Catatan Profesional:</strong> AI membantu mempercepat proses kerja. Verifikasi fakta lapangan, interpretasi persyaratan, dan keputusan audit final tetap menjadi wewenang & tanggung jawab auditor.
          </span>
        </div>
      </div>
    </section>
  );
};
