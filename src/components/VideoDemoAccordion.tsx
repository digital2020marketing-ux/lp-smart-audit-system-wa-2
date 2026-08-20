import React, { useState } from 'react';
import { ChevronDown, Play, ExternalLink, X, Book, Bot, ListChecks, PenTool, Target } from 'lucide-react';
import { VIDEO_DEMOS } from '../data/auditContent';
import { VideoDemoItem } from '../types';

export const VideoDemoAccordion: React.FC = () => {
  const [openVideoId, setOpenVideoId] = useState<string | null>('video-ebook');
  const [activeModalVideo, setActiveModalVideo] = useState<VideoDemoItem | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenVideoId(prev => (prev === id ? null : id));
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <Book className="w-5 h-5 text-blue-600" />;
      case 'Bot':
        return <Bot className="w-5 h-5 text-purple-600" />;
      case 'ListChecks':
        return <ListChecks className="w-5 h-5 text-green-600" />;
      case 'FilePenLine':
        return <PenTool className="w-5 h-5 text-amber-600" />;
      case 'Target':
        return <Target className="w-5 h-5 text-red-600" />;
      default:
        return <Play className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="demo-video" className="py-16 md:py-20 bg-white border-t border-gray-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-black uppercase tracking-widest text-blue-900 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Cuplikan Video
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
            Lihat Langsung Cara SMART Audit SYSTEM Bekerja
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            Klik pada setiap materi untuk melihat video demo dan penjelasan singkatnya:
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 mb-10">
          {VIDEO_DEMOS.map(demo => {
            const isOpen = openVideoId === demo.id;
            return (
              <div
                key={demo.id}
                className="bg-gray-50 rounded-2xl border border-gray-200/90 overflow-hidden shadow-xs transition-all hover:border-gray-300"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(demo.id)}
                  className="w-full text-left px-5 sm:px-6 py-4.5 font-bold text-gray-900 hover:bg-gray-100/70 focus:outline-none flex justify-between items-center transition-colors"
                >
                  <span className="flex items-center gap-3 text-sm sm:text-base">
                    {renderIcon(demo.iconName)}
                    <span>{demo.title}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-blue-900' : ''
                    }`}
                  />
                </button>

                {/* Accordion Body */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-gray-100">
                    <p className="text-xs sm:text-sm text-gray-600 mb-4">{demo.description}</p>

                    {/* Video Card with Play Action */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-3.5 sm:p-4 rounded-xl border border-gray-200">
                      
                      {/* Thumbnail with overlay */}
                      <div
                        onClick={() => setActiveModalVideo(demo)}
                        className="w-full sm:w-48 aspect-video sm:aspect-auto sm:h-28 rounded-lg overflow-hidden relative group cursor-pointer border border-gray-200 shrink-0"
                      >
                        <img
                          src={demo.thumbnailUrl}
                          alt={demo.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 flex items-center justify-center transition-colors">
                          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                            <Play className="w-4 h-4 ml-0.5" />
                          </div>
                        </div>
                      </div>

                      {/* Video Actions & Links */}
                      <div className="flex-1 text-left w-full space-y-2">
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          Kategori: {demo.category}
                        </div>
                        <div className="flex flex-wrap gap-2 pt-1">
                          <button
                            onClick={() => setActiveModalVideo(demo)}
                            className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-900 hover:bg-blue-950 text-white rounded-lg text-xs font-bold transition-colors shadow-sm"
                          >
                            <Play className="w-3.5 h-3.5" />
                            <span>Tonton Video di Sini</span>
                          </button>
                          <a
                            href={demo.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-xs font-medium transition-colors border border-gray-300"
                          >
                            <span>Buka di YouTube</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Video Player Modal */}
        {activeModalVideo && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-gray-900 rounded-2xl overflow-hidden max-w-lg w-full border border-gray-700 shadow-2xl relative">
              <div className="flex justify-between items-center px-4 py-3 bg-gray-800 border-b border-gray-700 text-white">
                <span className="font-bold text-sm truncate">{activeModalVideo.title}</span>
                <button
                  onClick={() => setActiveModalVideo(null)}
                  className="p-1 hover:bg-gray-700 rounded-lg text-gray-300 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative w-full aspect-[9/16] sm:aspect-video bg-black max-h-[75vh]">
                <iframe
                  src={`https://www.youtube.com/embed/${activeModalVideo.youtubeId}?autoplay=1&rel=0`}
                  title={activeModalVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="p-3 bg-gray-800 text-center flex justify-between items-center text-xs text-gray-400">
                <span>{activeModalVideo.description}</span>
                <a
                  href={activeModalVideo.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline flex items-center gap-1 font-bold shrink-0 ml-2"
                >
                  Buka tab baru <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
