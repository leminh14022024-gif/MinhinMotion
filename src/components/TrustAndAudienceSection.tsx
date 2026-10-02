import React from 'react';
import { 
  ShieldCheck, 
  Eye, 
  CheckCircle2, 
  XCircle, 
  Lock, 
  FileCheck, 
  Scale, 
  HeartHandshake, 
  AlertTriangle
} from 'lucide-react';

export const TrustAndAudienceSection: React.FC = () => {
  return (
    <section className="py-12 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="pb-8 border-b border-neutral-900">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The Linchpin of the Flywheel</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mt-1">
            Audience, Trust & Brand Integrity
          </h2>
          <p className="text-sm text-neutral-400 mt-1 max-w-2xl">
            In automotive media, vanity numbers mean nothing without credibility. Trust is earned over hundreds of transparent track laps, unedited telemetry, and refusal of compromises.
          </p>
        </div>

        {/* 3 Pillars of Trust */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-display mb-2">
              Verifiable Telemetry
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Every lap time claim is accompanied by raw AiM GPS session files, ambient weather readouts, tire pressure logs, and uncut footwell pedal video. Zero doctored timers.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-display mb-2">
              Unfiltered Tear-Downs
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              When a turbo bearing fails or an oil sample shows rod bearing copper wear, we publish it openly. Real motorsport and canyon driving involves mechanical failures.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-display mb-2">
              Zero Paid Praise
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              We do not accept review compensation from automotive manufacturers or parts suppliers. If a tire overheats in 3 laps or a damper fades, we say so plainly.
            </p>
          </div>
        </div>

        {/* The Brand Alignment Matrix: What We Accept vs What We Reject */}
        <div className="mt-8 bg-neutral-900/60 border border-neutral-800 rounded-xl p-6 lg:p-8">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-wider mb-6">
            <Lock className="w-4 h-4 text-amber-400" />
            <span>The Revhouse Editorial & Partner Charter</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Accepted */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-emerald-400 font-display">
                <CheckCircle2 className="w-4 h-4" />
                <span>What We Partner With & Install</span>
              </div>
              <ul className="space-y-3 text-xs text-neutral-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span><strong>Motorsport-Grade Hardware:</strong> Parts engineered with verifiable FEA analysis, TÜV certification, and real circuit pedigree.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span><strong>Full Data Transparency:</strong> Partners who allow us to publish unfiltered laboratory oil analysis, dyno results, and brake rotor thermographic logs.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span><strong>Heirloom Craftsmanship:</strong> Driving apparel, paddock tools, and mechanical timepieces built to outlast decades of hard usage.</span>
                </li>
              </ul>
            </div>

            {/* Rejected */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-red-400 font-display">
                <XCircle className="w-4 h-4" />
                <span>What We Permanently Reject</span>
              </div>
              <ul className="space-y-3 text-xs text-neutral-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold">✕</span>
                  <span><strong>Paid Positive Sentiment:</strong> Scripted promotional endorsements or NDAs restricting honest critique of handling flaws.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold">✕</span>
                  <span><strong>Cheap Replica Parts:</strong> Cast replica wheels, counterfeit carbon fiber, or dangerous non-certified safety equipment.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold">✕</span>
                  <span><strong>Predatory Creator Schemes:</strong> Casino sponsorships, sketchy crypto/NFT giveaways, or low-grade dropshipped novelty garbage.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
