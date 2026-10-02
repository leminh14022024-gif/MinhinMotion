import React, { useState } from 'react';
import { CommunityPost } from '../types';
import { 
  Users, 
  Heart, 
  MessageSquare, 
  PlusCircle, 
  Tag, 
  Sparkles, 
  Check, 
  Car as CarIcon, 
  Award, 
  Send
} from 'lucide-react';

interface CommunityPaddockSectionProps {
  posts: CommunityPost[];
  onAddPost: (post: Omit<CommunityPost, 'id' | 'likes' | 'repliesCount' | 'timestamp'>) => void;
  onLikePost: (postId: string) => void;
}

export const CommunityPaddockSection: React.FC<CommunityPaddockSectionProps> = ({
  posts,
  onAddPost,
  onLikePost
}) => {
  const [isPosting, setIsPosting] = useState(false);
  const [authorName, setAuthorName] = useState('');
  const [handle, setHandle] = useState('');
  const [carName, setCarName] = useState('');
  const [badge, setBadge] = useState<CommunityPost['badge']>('Driver');
  const [content, setContent] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});

  const handleToggleLike = (id: string) => {
    setLikedMap((prev) => ({ ...prev, [id]: !prev[id] }));
    onLikePost(id);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !content.trim() || !carName.trim()) return;

    const parsedTags = tagsInput
      .split(',')
      .map((t) => t.trim().replace(/^#/, ''))
      .filter(Boolean);

    onAddPost({
      author: authorName,
      handle: handle.startsWith('@') ? handle : `@${handle || authorName.toLowerCase().replace(/\s+/g, '')}`,
      avatarSeed: authorName.toLowerCase(),
      carName,
      badge,
      content,
      tags: parsedTags.length > 0 ? parsedTags : ['TrackDay', 'Revhouse']
    });

    // Reset
    setAuthorName('');
    setHandle('');
    setCarName('');
    setContent('');
    setTagsInput('');
    setIsPosting(false);
  };

  return (
    <section className="py-12 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-neutral-900">
          <div>
            <div className="text-xs font-mono text-teal-400 uppercase tracking-widest flex items-center gap-2">
              <Users className="w-3.5 h-3.5" />
              <span>Enthusiast Paddock Club</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mt-1">
              Cộng đồng xe hơi
            </h2>
            <p className="text-sm text-neutral-400 mt-1 max-w-xl">
              Nơi các tay lái chia sẻ thông số căn chỉnh, dữ liệu telemetry track day và các buổi giao lưu đoàn xe trên những cung đường uốn lượn.
            </p>
          </div>

          <button
            onClick={() => setIsPosting(!isPosting)}
            className="flex items-center gap-2 px-4 py-2.5 bg-teal-500 hover:bg-teal-400 text-neutral-950 font-bold text-xs rounded-lg transition-all shadow-md shadow-teal-500/10 shrink-0"
          >
            <PlusCircle className="w-4 h-4" />
            <span>{isPosting ? 'Cancel Post' : 'Share Build or Track Report'}</span>
          </button>
        </div>

        {/* Compose Post Box */}
        {isPosting && (
          <form
            onSubmit={handleSubmit}
            className="mt-8 bg-neutral-900/80 border border-teal-500/40 rounded-xl p-6 shadow-xl space-y-4 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <div className="flex items-center gap-2 text-xs font-mono text-teal-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Post to Revhouse Paddock Feed</span>
              </div>
              <span className="text-xs text-neutral-400">Verified Driver Community</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-neutral-300 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Cole Sterling"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-300 mb-1">Social / Radio Handle</label>
                <input
                  type="text"
                  placeholder="@sterling_speed"
                  value={handle}
                  onChange={(e) => setHandle(e.target.value)}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-teal-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-neutral-300 mb-1">Vehicle / Build</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 2005 Lotus Exige S2"
                  value={carName}
                  onChange={(e) => setCarName(e.target.value)}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-300 mb-1">Driver Badge</label>
                <select
                  value={badge}
                  onChange={(e) => setBadge(e.target.value as CommunityPost['badge'])}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-xs text-white focus:outline-none focus:border-teal-500"
                >
                  <option value="Driver">Driver</option>
                  <option value="Track Master">Track Master</option>
                  <option value="Builder">Builder</option>
                  <option value="Collector">Collector</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-neutral-300 mb-1">Dispatch / Setup Findings</label>
              <textarea
                required
                rows={3}
                placeholder="Share your damper adjustments, canyon conditions, oil temps, or tire compound performance..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-teal-500 resize-none"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-neutral-300 mb-1">Tags (comma-separated)</label>
              <input
                type="text"
                placeholder="Suspension, Sonoma, LagunaSeca, Apex"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-teal-500"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsPosting(false)}
                className="px-4 py-2 bg-neutral-800 text-neutral-300 text-xs rounded-lg hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-teal-500 hover:bg-teal-400 text-neutral-950 font-bold text-xs rounded-lg flex items-center gap-1.5 shadow-md shadow-teal-500/10"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Publish Dispatch</span>
              </button>
            </div>
          </form>
        )}

        {/* Posts Stream */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {posts.map((post) => {
            const hasLiked = likedMap[post.id];
            return (
              <div
                key={post.id}
                className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-5 hover:border-neutral-700 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Author Header */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center font-bold text-teal-400 uppercase text-xs">
                        {post.author.slice(0, 2)}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-white">{post.author}</span>
                          <span className="text-[10px] font-mono text-neutral-500">{post.handle}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[11px] text-amber-400 font-mono">
                          <CarIcon className="w-3 h-3 text-neutral-400" />
                          <span className="truncate max-w-[180px]">{post.carName}</span>
                        </div>
                      </div>
                    </div>

                    <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-neutral-950 text-teal-400 border border-teal-500/30 shrink-0">
                      {post.badge}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed my-3">
                    {post.content}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 my-3">
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-[10px] font-mono rounded bg-neutral-950 text-neutral-400 border border-neutral-800"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Interactions */}
                <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
                  <span className="font-mono text-[11px]">{post.timestamp}</span>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleToggleLike(post.id)}
                      className={`flex items-center gap-1 text-xs transition-colors ${
                        hasLiked ? 'text-red-400' : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${hasLiked ? 'fill-current' : ''}`} />
                      <span className="tabular-nums font-mono">{post.likes + (hasLiked ? 1 : 0)}</span>
                    </button>

                    <div className="flex items-center gap-1 text-xs text-neutral-400">
                      <MessageSquare className="w-3.5 h-3.5 text-neutral-500" />
                      <span className="tabular-nums font-mono">{post.repliesCount}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
