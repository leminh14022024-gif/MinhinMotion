import React from 'react';
import { SectionTab } from '../types';
import { ShoppingBag, GitFork, Gauge } from 'lucide-react';

interface NavbarProps {
  activeTab: SectionTab;
  setActiveTab: (tab: SectionTab) => void;
  cartCount: number;
  openCart: () => void;
  isBlueprintMode: boolean;
  setIsBlueprintMode: (mode: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  openCart,
  isBlueprintMode,
  setIsBlueprintMode
}) => {
  const navItems: { tab: SectionTab; label: string }[] = [
    { tab: 'overview', label: 'Overview' },
    { tab: 'cars', label: 'Experience' },
    { tab: 'media', label: 'Films' },
    { tab: 'events', label: 'Events' },
    { tab: 'content', label: 'Journal' },
    { tab: 'community', label: 'Community' },
    { tab: 'business', label: 'Store & Partners' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => {
            setIsBlueprintMode(false);
            setActiveTab('overview');
          }}
          className="text-xl font-bold italic no-underline tracking-wider text-neutral-100 hover:text-amber-400 transition-colors shrink-0 text-left font-display"
        >
          MinhinMotion
        </button>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-400">
          {navItems.map((item) => {
            const isActive = !isBlueprintMode && activeTab === item.tab;
            return (
              <button
                key={item.tab}
                onClick={() => {
                  setIsBlueprintMode(false);
                  setActiveTab(item.tab);
                }}
                className={`transition-colors relative py-1 hover:text-neutral-100 ${
                  isActive ? 'text-neutral-100 font-semibold' : ''
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber-500 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setIsBlueprintMode(!isBlueprintMode)}
            className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-md border transition-all ${
              isBlueprintMode
                ? 'bg-amber-500 text-neutral-950 border-amber-400 shadow-md shadow-amber-500/20'
                : 'bg-neutral-900 text-neutral-200 border-neutral-800 hover:border-neutral-700 hover:text-white'
            }`}
            title="Inspect the complete automotive creator brand architecture flowchart"
          >
            {isBlueprintMode ? (
              <>
                <Gauge className="w-3.5 h-3.5" />
                <span className="whitespace-nowrap">View Platform</span>
              </>
            ) : (
              <>
                <GitFork className="w-3.5 h-3.5 text-amber-400" />
                <span className="whitespace-nowrap">Brand Flywheel Map</span>
              </>
            )}
          </button>

          <button
            onClick={openCart}
            aria-label="Open merchandise shopping cart"
            className="relative p-2 text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 rounded-md hover:border-neutral-700 transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-neutral-950 font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center tabular-nums">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav bar row for easy thumb tap */}
      <div className="lg:hidden flex items-center gap-4 px-4 py-2 border-t border-neutral-900/60 overflow-x-auto text-xs text-neutral-400">
        {navItems.map((item) => (
          <button
            key={item.tab}
            onClick={() => {
              setIsBlueprintMode(false);
              setActiveTab(item.tab);
            }}
            className={`whitespace-nowrap py-1 ${
              !isBlueprintMode && activeTab === item.tab ? 'text-amber-400 font-semibold' : 'hover:text-neutral-200'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
};
