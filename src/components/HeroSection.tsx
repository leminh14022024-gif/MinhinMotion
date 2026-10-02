import React from 'react';
import { SectionTab } from '../types';
import { ArrowRight, Disc3, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (tab: SectionTab) => void;
  onOpenBlueprint: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenBlueprint }) => {
  return (
    <section className="relative overflow-hidden border-b border-neutral-900 bg-neutral-950">
      {/* 16:9 Cinematic Visual Hero Container */}
      <div className="relative w-full h-[520px] md:h-[640px] overflow-hidden">
        <img
          src="/src/assets/images/hero_civic_black_1790553420550.jpg"
          alt="Xe Honda Civic thể thao độ màu đen với biển số đã được che"
          className="w-full h-full object-cover object-center brightness-[0.85] contrast-[1.05] transition-transform duration-1000 scale-100 hover:scale-[1.02]"
          referrerPolicy="no-referrer"
        />

        {/* Measured scrim overlay for 4.5:1 text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-neutral-950/30 to-transparent" />

        {/* Content over hero image */}
        <div className="absolute inset-0 flex flex-col justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
          {/* Unboxed clean metadata kicker with dot separators */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wide text-amber-400/90 mb-3">
            <span>Automotive Creator Ecosystem</span>
            <span aria-hidden="true">·</span>
            <span>Southern California & Alpine Passes</span>
            <span aria-hidden="true">·</span>
            <span>Est. 2021</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal not-italic no-underline tracking-tight text-white max-w-4xl text-balance font-display leading-[1.08] mb-4">
            A place for everyone who loves cars to share the passion and experience
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed mb-8">
            A space documenting my journey through the automotive world — from the cars, driving experiences, photos, and films to events and a passionate community.
          </p>

          {/* Action cluster */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigate('cars')}
              className="flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold text-sm rounded-lg transition-all shadow-lg shadow-amber-500/10 hover:shadow-amber-500/25 shrink-0"
            >
              <span>Explore The Garage</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenBlueprint}
              className="flex items-center gap-2 px-6 py-3 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 hover:text-white font-medium text-sm rounded-lg border border-neutral-700/80 transition-all backdrop-blur-sm shrink-0"
            >
              <Disc3 className="w-4 h-4 text-amber-400" />
              <span>Inspect Flywheel Blueprint</span>
            </button>

            <div className="hidden sm:flex items-center gap-2 text-xs text-neutral-400 pl-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Independent Editorial Charter</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quantitative proof bar placed adjacent to the hero claim */}
      <div className="border-t border-neutral-900 bg-neutral-900/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums font-mono">
                4 Active
              </div>
              <div className="text-xs text-neutral-400 mt-1">Fleet Builds & Track Weapons</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums font-mono">
                1,240+
              </div>
              <div className="text-xs text-neutral-400 mt-1">Hours Logged on Circuit & Pass</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums font-mono">
                18.4K
              </div>
              <div className="text-xs text-neutral-400 mt-1">Paddock Drivers & Club Members</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-amber-400 tabular-nums font-mono">
                100%
              </div>
              <div className="text-xs text-neutral-400 mt-1">Independent Editorial Integrity</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
