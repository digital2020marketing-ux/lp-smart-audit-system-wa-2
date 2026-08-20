import React from 'react';
import { TrendingUp, Shield, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-14 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg bg-blue-900 flex items-center justify-center text-white">
            <TrendingUp className="w-4 h-4 text-blue-200" />
          </div>
          <span className="font-black text-2xl tracking-tight text-white">
            SMART<span className="text-red-500">Audit</span>
          </span>
        </div>

        <p className="text-gray-300 text-sm font-semibold mb-1">
          Sistem Pembelajaran & Manajemen Audit Mutu Internal Modern
        </p>
        <p className="text-xs text-gray-500 max-w-md mx-auto mb-8">
          Belajar lebih terstruktur. Dokumen lebih siap. Proses audit lebih praktis dengan panduan ISO 9001:2015.
        </p>

        <div className="border-t border-gray-800/80 pt-8 text-xs flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500">
          <p>© 2026 SMART Audit SYSTEM. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <span>•</span>
            <span className="flex items-center gap-1 text-gray-400">
              <Lock className="w-3 h-3 text-green-500" /> SSL 256-bit Encrypted
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
