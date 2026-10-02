import React from 'react';
import { MerchItem, BrandPartner } from '../types';
import { 
  ShoppingBag, 
  Handshake, 
  DollarSign, 
  ArrowRight, 
  CheckCircle, 
  Layers, 
  ShieldCheck, 
  RefreshCw, 
  Sparkles
} from 'lucide-react';

interface BusinessStoreSectionProps {
  merch: MerchItem[];
  partners: BrandPartner[];
  onAddToCart: (item: MerchItem) => void;
}

export const BusinessStoreSection: React.FC<BusinessStoreSectionProps> = ({
  merch,
  partners,
  onAddToCart
}) => {
  return (
    <section className="py-12 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-neutral-900">
          <div>
            <div className="text-xs font-mono text-amber-400 uppercase tracking-widest flex items-center gap-2">
              <DollarSign className="w-3.5 h-3.5" />
              <span>Sovereign Monetization Engine</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mt-1">
              Store & Technical Alliances
            </h2>
            <p className="text-sm text-neutral-400 mt-1 max-w-xl">
              Commercial viability without compromise: bespoke driver essentials, co-engineered technical testing partnerships, and direct enthusiast commerce.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-neutral-900 px-3 py-2 rounded-lg border border-neutral-800">
            <RefreshCw className="w-4 h-4 text-emerald-400" />
            <span>65% Revenue Reinvested in Garage & Media</span>
          </div>
        </div>

        {/* Business Flywheel Breakdown Card */}
        <div className="mt-8 bg-neutral-900/40 border border-neutral-800 rounded-xl p-6">
          <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-4 flex items-center gap-2">
            <Layers className="w-4 h-4 text-amber-400" />
            <span>The Creator Economy Loop: How Business Re-Energizes The Origin</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="bg-neutral-950/70 border border-neutral-800/80 rounded-lg p-4">
              <div className="text-amber-400 text-xs font-mono font-bold uppercase">Revenue Stream 1</div>
              <div className="text-sm font-bold text-white font-display mt-1">Atelier Gear & Merch</div>
              <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                Heirloom driving gloves, precision pressure gauges, and technical heavyweight apparel. 0% dropshipping.
              </p>
            </div>

            <div className="bg-neutral-950/70 border border-neutral-800/80 rounded-lg p-4">
              <div className="text-emerald-400 text-xs font-mono font-bold uppercase">Revenue Stream 2</div>
              <div className="text-sm font-bold text-white font-display mt-1">Track Invitationals</div>
              <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                Curated private circuit days with telemetry debriefs and pro driving coaches. Pure asphalt experiences.
              </p>
            </div>

            <div className="bg-neutral-950/70 border border-neutral-800/80 rounded-lg p-4">
              <div className="text-cyan-400 text-xs font-mono font-bold uppercase">Revenue Stream 3</div>
              <div className="text-sm font-bold text-white font-display mt-1">Technical R&D Testing</div>
              <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                Long-term engineering trials for Tier-1 motorsport brands (Michelin, Brembo, Motul, Akrapovič).
              </p>
            </div>

            <div className="bg-neutral-950/70 border border-neutral-800/80 rounded-lg p-4">
              <div className="text-purple-400 text-xs font-mono font-bold uppercase">Reinvestment</div>
              <div className="text-sm font-bold text-white font-display mt-1">Fleet & Production</div>
              <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                Funds fuel, race tires, engine overhauls, high-speed camera rigs, and high-quality educational guides.
              </p>
            </div>
          </div>
        </div>

        {/* Section 1: Atelier Store */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                Revhouse Atelier Gear
              </h3>
              <p className="text-xs text-neutral-400 mt-0.5">
                Functional equipment tested in the workshop and on circuit.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {merch.map((item) => (
              <div
                key={item.id}
                className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-5 hover:border-neutral-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-2">
                    <span className="text-amber-400 font-semibold">{item.category}</span>
                    <span className="text-neutral-500 font-mono text-[10px]">{item.colorway}</span>
                  </div>

                  <h4 className="text-base font-bold text-white font-display mb-2">
                    {item.name}
                  </h4>

                  <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {item.sizes && (
                    <div className="flex items-center gap-1.5 mb-4">
                      <span className="text-[10px] uppercase font-mono text-neutral-500 mr-1">Sizes:</span>
                      {item.sizes.map((s) => (
                        <span key={s} className="px-1.5 py-0.5 text-[10px] font-mono bg-neutral-950 border border-neutral-800 rounded text-neutral-300">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                  <div className="text-lg font-bold text-white font-mono">
                    ${item.price}
                  </div>

                  <button
                    onClick={() => onAddToCart(item)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs rounded-lg transition-all shadow-sm"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Technical Partners */}
        <div className="mt-16">
          <div className="mb-6">
            <div className="text-xs font-mono text-rose-400 uppercase tracking-widest flex items-center gap-1.5">
              <Handshake className="w-3.5 h-3.5" />
              <span>Selected Technical Alliances</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-1">
              Active Motorsport Partners
            </h3>
            <p className="text-xs text-neutral-400 mt-0.5">
              We work solely with brands we trust with our lives at 150+ MPH.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                      {partner.category}
                    </span>
                    <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800/60 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      <span>{partner.status}</span>
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white font-display mb-2">
                    {partner.name}
                  </h4>

                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {partner.collaboration}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-neutral-800 text-[11px] text-neutral-400 font-mono flex items-center justify-between">
                  <span>{partner.deliverablesCount} Technical Data Releases Published</span>
                  <span className="text-amber-400">Verified Partnership</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
