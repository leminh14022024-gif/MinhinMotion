/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SectionTab, MerchItem, CommunityPost } from './types';
import { 
  INITIAL_CARS, 
  INITIAL_MEDIA, 
  INITIAL_EVENTS, 
  INITIAL_ARTICLES, 
  INITIAL_COMMUNITY_POSTS, 
  INITIAL_MERCH, 
  INITIAL_PARTNERS, 
  CREATOR_PROFILE 
} from './data/initialData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FlywheelDiagram } from './components/FlywheelDiagram';
import { GarageSection } from './components/GarageSection';
import { MediaSection } from './components/MediaSection';
import { EventsSection } from './components/EventsSection';
import { ContentJournalSection } from './components/ContentJournalSection';
import { CommunityPaddockSection } from './components/CommunityPaddockSection';
import { TrustAndAudienceSection } from './components/TrustAndAudienceSection';
import { BusinessStoreSection } from './components/BusinessStoreSection';
import { CartDrawer } from './components/CartDrawer';
import { 
  GitFork, 
  Car, 
  Video, 
  Calendar, 
  BookOpen, 
  Users, 
  ShieldCheck, 
  DollarSign, 
  Check, 
  ArrowRight,
  Flame,
  Mail
} from 'lucide-react';

interface CartItem extends MerchItem {
  quantity: number;
}

export default function App() {
  const [activeTab, setActiveTab] = useState<SectionTab>('overview');
  const [isBlueprintMode, setIsBlueprintMode] = useState<boolean>(false);
  const [cars] = useState(INITIAL_CARS);
  const [mediaEpisodes] = useState(INITIAL_MEDIA);
  const [events, setEvents] = useState(INITIAL_EVENTS);
  const [articles] = useState(INITIAL_ARTICLES);
  const [communityPosts, setCommunityPosts] = useState(INITIAL_COMMUNITY_POSTS);
  const [merch] = useState(INITIAL_MERCH);
  const [partners] = useState(INITIAL_PARTNERS);

  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Cart handlers
  const handleAddToCart = (item: MerchItem) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((i) => {
          if (i.id === id) {
            const nextQty = i.quantity + delta;
            return nextQty > 0 ? { ...i, quantity: nextQty } : null;
          }
          return i;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveCartItem = (id: string) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Event registration handler
  const handleRegisterEvent = (eventId: string) => {
    setEvents((prev) =>
      prev.map((ev) =>
        ev.id === eventId
          ? { ...ev, spotsRemaining: Math.max(0, ev.spotsRemaining - 1) }
          : ev
      )
    );
  };

  // Community handlers
  const handleAddPost = (newPostData: Omit<CommunityPost, 'id' | 'likes' | 'repliesCount' | 'timestamp'>) => {
    const newPost: CommunityPost = {
      ...newPostData,
      id: `post-${Date.now()}`,
      likes: 1,
      repliesCount: 0,
      timestamp: 'Just now'
    };
    setCommunityPosts((prev) => [newPost, ...prev]);
  };

  const handleLikePost = (postId: string) => {
    setCommunityPosts((prev) =>
      prev.map((p) => (p.id === postId ? { ...p, likes: p.likes + 1 } : p))
    );
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
  };

  const totalCartCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);

  const navigateToSection = (tab: SectionTab) => {
    setIsBlueprintMode(false);
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={totalCartCount}
        openCart={() => setIsCartOpen(true)}
        isBlueprintMode={isBlueprintMode}
        setIsBlueprintMode={setIsBlueprintMode}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {isBlueprintMode ? (
          /* Dedicated Standalone Blueprint Mode */
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <FlywheelDiagram onNavigateToSection={navigateToSection} />
          </div>
        ) : (
          <>
            {/* Tab: Overview (Complete Ecosystem Portal) */}
            {activeTab === 'overview' && (
              <>
                <HeroSection
                  onNavigate={navigateToSection}
                  onOpenBlueprint={() => setIsBlueprintMode(true)}
                />

                {/* Embedded Interactive Flywheel Node Map */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                  <div className="mb-4">
                    <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                      Live Architectural Engine
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white font-display mt-0.5">
                      The Sovereign Creator Flywheel
                    </h2>
                    <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl">
                      How each pillar connects: from personal mechanical love down to brand monetization.
                    </p>
                  </div>
                  <FlywheelDiagram onNavigateToSection={navigateToSection} />
                </div>

                {/* Quick Highlights across Garage, Films & Events */}
                <GarageSection cars={cars} />
                <MediaSection episodes={mediaEpisodes} />
                <EventsSection events={events} onRegisterEvent={handleRegisterEvent} />
                <ContentJournalSection articles={articles} />
                <CommunityPaddockSection
                  posts={communityPosts}
                  onAddPost={handleAddPost}
                  onLikePost={handleLikePost}
                />
                <TrustAndAudienceSection />
                <BusinessStoreSection
                  merch={merch}
                  partners={partners}
                  onAddToCart={handleAddToCart}
                />
              </>
            )}

            {/* Individual Tab Pages */}
            {activeTab === 'cars' && <GarageSection cars={cars} />}
            {activeTab === 'media' && <MediaSection episodes={mediaEpisodes} />}
            {activeTab === 'events' && (
              <EventsSection events={events} onRegisterEvent={handleRegisterEvent} />
            )}
            {activeTab === 'content' && <ContentJournalSection articles={articles} />}
            {activeTab === 'community' && (
              <CommunityPaddockSection
                posts={communityPosts}
                onAddPost={handleAddPost}
                onLikePost={handleLikePost}
              />
            )}
            {activeTab === 'trust' && <TrustAndAudienceSection />}
            {activeTab === 'business' && (
              <BusinessStoreSection
                merch={merch}
                partners={partners}
                onAddToCart={handleAddToCart}
              />
            )}
          </>
        )}
      </main>

      {/* Cart Drawer Modal */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

      {/* Footer & Direct Subscriber Dispatch */}
      <footer className="bg-neutral-950 border-t border-neutral-900 mt-16">
        {/* Direct Email Dispatch Banner */}
        <div className="border-b border-neutral-900 bg-neutral-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest">
                  <Flame className="w-3.5 h-3.5" />
                  <span>The MinhinMotion Dawn Dispatch</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-1">
                  Private Convoy Coordinates & Track Briefings
                </h3>
                <p className="text-xs text-neutral-400 mt-1 max-w-lg">
                  Delivered on Friday mornings prior to weekend canyon runs. Telemetry logs, secret mountain rendezvous points, and early event invitations.
                </p>
              </div>

              <div className="w-full lg:w-auto shrink-0">
                {subscribed ? (
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-4 py-3 rounded-lg">
                    <Check className="w-4 h-4" />
                    <span>Registered for Dawn Dispatches. Check your inbox.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                    <input
                      type="email"
                      required
                      placeholder="driver@canyon.com"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 w-64"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs rounded-lg transition-all flex items-center gap-1.5 shrink-0"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Join Dispatch</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links & Architecture Index */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <span className="text-lg font-bold text-white tracking-wider font-display">
                MinhinMotion
              </span>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {CREATOR_PROFILE.philosophy}
              </p>
              <div className="text-xs font-mono text-neutral-500">
                Southern California & Alpine Passes
              </div>
            </div>

            <div>
              <div className="text-xs font-mono text-neutral-300 uppercase tracking-wider mb-3">
                Content Pillars
              </div>
              <ul className="space-y-2 text-xs text-neutral-400">
                <li>
                  <button onClick={() => navigateToSection('cars')} className="hover:text-amber-400 transition-colors">
                    Sovereign Garage Fleet
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateToSection('media')} className="hover:text-amber-400 transition-colors">
                    Apex Chronicles Films
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateToSection('events')} className="hover:text-amber-400 transition-colors">
                    Laguna Seca Track Invitational
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateToSection('content')} className="hover:text-amber-400 transition-colors">
                    Technical Dispatches
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-mono text-neutral-300 uppercase tracking-wider mb-3">
                Flywheel Architecture
              </div>
              <ul className="space-y-2 text-xs text-neutral-400">
                <li>
                  <button onClick={() => setIsBlueprintMode(true)} className="hover:text-amber-400 transition-colors flex items-center gap-1">
                    <GitFork className="w-3 h-3 text-amber-400" />
                    <span>View Visual Flywheel</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateToSection('community')} className="hover:text-amber-400 transition-colors">
                    The Paddock Drivers Club
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateToSection('trust')} className="hover:text-amber-400 transition-colors">
                    Editorial Integrity Charter
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateToSection('business')} className="hover:text-amber-400 transition-colors">
                    Atelier Gear & Alliances
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-mono text-neutral-300 uppercase tracking-wider mb-3">
                Fleet Verification
              </div>
              <div className="p-3 bg-neutral-900/60 border border-neutral-800 rounded-lg text-xs space-y-1.5 font-mono text-neutral-400">
                <div className="flex justify-between">
                  <span>992 GT3:</span>
                  <span className="text-amber-400">1:33.42 @ Laguna</span>
                </div>
                <div className="flex justify-between">
                  <span>R34 GT-R:</span>
                  <span className="text-emerald-400">585 HP Dyno</span>
                </div>
                <div className="flex justify-between">
                  <span>M3 CSL:</span>
                  <span className="text-cyan-400">Factory S54 NA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
            <div>
              © 2026 MinhinMotion. An independent automotive creator ecosystem.
            </div>
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="text-neutral-400">Zero Paid Reviews</span>
              <span>·</span>
              <span className="text-neutral-400">100% Verified Telemetry</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
