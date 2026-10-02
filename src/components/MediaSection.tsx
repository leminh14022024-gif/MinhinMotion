import React, { useState } from 'react';
import { MediaEpisode } from '../types';
import { 
  Play, 
  Video, 
  Clock, 
  Eye, 
  Camera, 
  Disc, 
  X, 
  CheckCircle2, 
  Volume2, 
  Sliders
} from 'lucide-react';

interface MediaSectionProps {
  episodes: MediaEpisode[];
}

export const MediaSection: React.FC<MediaSectionProps> = ({ episodes }) => {
  const [activeSeries, setActiveSeries] = useState<string>('All');
  const [selectedEpisode, setSelectedEpisode] = useState<MediaEpisode | null>(null);

  const seriesList = ['All', 'Apex Chronicles', 'The Build', 'Track Battles', 'Canyon Patrol'];

  const filteredEpisodes = activeSeries === 'All'
    ? episodes
    : episodes.filter((ep) => ep.series === activeSeries);

  return (
    <section className="py-12 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-neutral-900">
          <div>
            <div className="text-xs font-mono text-purple-400 uppercase tracking-widest flex items-center gap-2">
              <Video className="w-3.5 h-3.5" />
              <span>Cinematic Visual Storytelling</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mt-1">
              Films & Track Dispatches
            </h2>
            <p className="text-sm text-neutral-400 mt-1 max-w-xl">
              Uncut induction audio, gyro-stabilized tracking cameras, and telemetry analysis. No fake exhaust voiceovers, no generic hype music.
            </p>
          </div>

          {/* Series filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-neutral-900/80 p-1 rounded-lg border border-neutral-800">
            {seriesList.map((series) => (
              <button
                key={series}
                onClick={() => setActiveSeries(series)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  activeSeries === series
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {series}
              </button>
            ))}
          </div>
        </div>

        {/* Video Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {filteredEpisodes.map((ep) => (
            <div
              key={ep.id}
              className="group bg-neutral-900/50 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-700 transition-all flex flex-col"
            >
              {/* Thumbnail Container */}
              <div 
                className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900 cursor-pointer"
                onClick={() => setSelectedEpisode(ep)}
              >
                <img
                  src={ep.image}
                  alt={ep.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-neutral-950/30 group-hover:bg-neutral-950/10 transition-colors" />

                {/* Play Button Indicator */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-purple-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-purple-500 transition-all">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Badges on Video */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-[11px] font-mono font-bold uppercase rounded bg-neutral-950/85 text-purple-300 border border-purple-500/30 backdrop-blur-md">
                    {ep.series}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 flex items-center gap-2">
                  <span className="px-2 py-0.5 text-[11px] font-mono rounded bg-neutral-950/85 text-neutral-200 border border-neutral-800 backdrop-blur-md flex items-center gap-1">
                    <Clock className="w-3 h-3 text-neutral-400" />
                    <span>{ep.duration}</span>
                  </span>
                </div>
              </div>

              {/* Card Meta & Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono mb-2">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 text-neutral-500" />
                      <span>{ep.views} Views</span>
                    </span>
                    <span>·</span>
                    <span>{ep.publishDate}</span>
                    <span>·</span>
                    <span className="text-amber-400">{ep.featuredCar}</span>
                  </div>

                  <h3 
                    onClick={() => setSelectedEpisode(ep)}
                    className="text-lg font-bold text-white font-display hover:text-purple-400 transition-colors cursor-pointer"
                  >
                    {ep.title}
                  </h3>

                  <p className="text-xs text-neutral-300 line-clamp-2 mt-2 leading-relaxed">
                    {ep.summary}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                  <div className="text-[11px] text-neutral-400 flex items-center gap-1.5 truncate pr-2">
                    <Camera className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                    <span className="truncate">{ep.cameraRig}</span>
                  </div>

                  <button
                    onClick={() => setSelectedEpisode(ep)}
                    className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1 shrink-0"
                  >
                    <span>Watch Film & Telemetry</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Cinema Telemetry Modal */}
        {selectedEpisode && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/90 backdrop-blur-md">
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-neutral-800 sticky top-0 bg-neutral-900/95 backdrop-blur-sm z-10">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 text-xs font-mono rounded bg-purple-950/60 text-purple-300 border border-purple-800/60">
                    {selectedEpisode.series}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">
                    {selectedEpisode.duration} · {selectedEpisode.views} views
                  </span>
                </div>
                <button
                  onClick={() => setSelectedEpisode(null)}
                  className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player Mockup with Simulated Telemetry HUD */}
              <div className="relative aspect-[16/9] w-full bg-black overflow-hidden">
                <img
                  src={selectedEpisode.image}
                  alt={selectedEpisode.title}
                  className="w-full h-full object-cover brightness-75"
                />
                
                {/* Cinema HUD Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 p-6 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs font-mono text-white/80">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                      <span>REC [RAW 6K 24.00 FPS]</span>
                    </div>
                    <div>CHASE CRANE CAM 01 · G-FORCE: 1.34G LATERAL</div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-end sm:items-center justify-between gap-4">
                    <div className="bg-black/70 backdrop-blur-md border border-white/10 rounded-lg p-3 text-xs font-mono text-white space-y-1">
                      <div className="text-amber-400 font-bold">{selectedEpisode.featuredCar}</div>
                      <div className="flex items-center gap-4 text-[11px] text-neutral-300">
                        <span>RPM: 8,420</span>
                        <span>SPEED: 134 MPH</span>
                        <span>STEER: +14.2°</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 bg-neutral-900/80 px-3 py-1.5 rounded-full border border-neutral-700 text-xs text-white">
                      <Volume2 className="w-4 h-4 text-emerald-400" />
                      <span>Binaural Engine Audio (Uncompressed)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details underneath */}
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                    {selectedEpisode.title}
                  </h3>
                  <p className="text-sm text-neutral-300 mt-2 leading-relaxed">
                    {selectedEpisode.summary}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-4">
                    <div className="text-xs font-bold text-neutral-200 uppercase tracking-wide flex items-center gap-2 mb-2 font-display">
                      <Sliders className="w-3.5 h-3.5 text-purple-400" />
                      <span>Production Rig Breakdown</span>
                    </div>
                    <p className="text-xs text-neutral-300 font-mono">
                      {selectedEpisode.cameraRig}
                    </p>
                  </div>

                  <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-4">
                    <div className="text-xs font-bold text-neutral-200 uppercase tracking-wide flex items-center gap-2 mb-2 font-display">
                      <Disc className="w-3.5 h-3.5 text-amber-400" />
                      <span>Sound Recording Ethics</span>
                    </div>
                    <p className="text-xs text-neutral-300">
                      Exhaust boundary mics rigged with heat-shielded DPA lavaliers inside the engine bay and bumper diffuser. Zero artificial audio synths.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-neutral-200 uppercase tracking-wide mb-3 font-display">
                    Key Technical Highlights
                  </h4>
                  <div className="space-y-2">
                    {selectedEpisode.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
