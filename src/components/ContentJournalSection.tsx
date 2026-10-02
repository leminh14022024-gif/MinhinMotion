import React, { useState } from 'react';
import { JournalArticle } from '../types';
import { 
  BookOpen, 
  Clock, 
  ArrowUpRight, 
  CheckCircle2, 
  X, 
  Share2, 
  Check, 
  Wrench, 
  FileText
} from 'lucide-react';

interface ContentJournalSectionProps {
  articles: JournalArticle[];
}

export const ContentJournalSection: React.FC<ContentJournalSectionProps> = ({ articles }) => {
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copied, setCopied] = useState(false);

  const categories = ['All', 'Engineering & Setup', 'Track Discipline', 'Ownership Economics', 'Car Culture'];

  const filtered = selectedCategory === 'All'
    ? articles
    : articles.filter((a) => a.category === selectedCategory);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-12 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-neutral-900">
          <div>
            <div className="text-xs font-mono text-orange-400 uppercase tracking-widest flex items-center gap-2">
              <FileText className="w-3.5 h-3.5" />
              <span>Independent Technical Journalism</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mt-1">
              The Revhouse Dispatches
            </h2>
            <p className="text-sm text-neutral-400 mt-1 max-w-xl">
              Evergreen engineering dissertations, unvarnished track day balance sheets, and mechanical philosophy. Data-driven and completely ad-free.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 bg-neutral-900/80 p-1 rounded-lg border border-neutral-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  selectedCategory === cat
                    ? 'bg-orange-600 text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {filtered.map((art) => (
            <article
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="group bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-all flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-3">
                  <span className="text-orange-400 font-bold uppercase">{art.category}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{art.readTime}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-display group-hover:text-orange-400 transition-colors leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs text-neutral-300 font-medium mt-2 leading-relaxed">
                  {art.subtitle}
                </p>

                <p className="text-xs text-neutral-400 mt-3 line-clamp-3 leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                <span className="text-neutral-400 font-mono">{art.publishDate}</span>
                <span className="text-orange-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-semibold">
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Article Full Reader Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/90 backdrop-blur-md">
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 text-xs font-mono rounded bg-orange-950/60 text-orange-400 border border-orange-800/60">
                    {selectedArticle.category}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">
                    {selectedArticle.readTime} · By {selectedArticle.author}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleShare}
                    className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                    title="Copy Article Link"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="py-6 space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white font-display leading-tight">
                    {selectedArticle.title}
                  </h2>
                  <p className="text-sm sm:text-base text-neutral-300 font-medium mt-2">
                    {selectedArticle.subtitle}
                  </p>
                </div>

                {/* Article Body */}
                <div className="space-y-4 text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/80 pt-6">
                  {selectedArticle.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {/* Key takeaways callout box */}
                <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-5 mt-6">
                  <div className="text-xs font-bold text-orange-400 uppercase tracking-wide flex items-center gap-2 mb-3 font-display">
                    <Wrench className="w-4 h-4" />
                    <span>Actionable Engineering Takeaways</span>
                  </div>
                  <div className="space-y-2">
                    {selectedArticle.keyTakeaways.map((takeaway, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Reader Footer */}
                <div className="pt-6 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                  <span>Revhouse Sovereign Editorial Archive</span>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold rounded-lg"
                  >
                    Close Dispatch
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
