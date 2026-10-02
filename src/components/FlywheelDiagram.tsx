import React, { useState } from 'react';
import { FLYWHEEL_NODES } from '../data/initialData';
import { FlywheelNode, SectionTab } from '../types';
import { 
  User, 
  Sparkles, 
  Flame, 
  Car as CarIcon, 
  Video, 
  Calendar, 
  Globe, 
  BookOpen, 
  Users, 
  Eye, 
  ShieldCheck, 
  Handshake, 
  DollarSign, 
  ArrowRight, 
  Zap, 
  CheckCircle2, 
  Layers
} from 'lucide-react';

interface FlywheelDiagramProps {
  onNavigateToSection: (tab: SectionTab) => void;
  activeSelectedNodeId?: string;
}

const nodeIcons: Record<string, React.ReactNode> = {
  'you': <User className="w-5 h-5 text-amber-400" />,
  'personal-brand': <Sparkles className="w-5 h-5 text-amber-400" />,
  'love-for-cars': <Flame className="w-5 h-5 text-red-400" />,
  'cars': <CarIcon className="w-5 h-5 text-blue-400" />,
  'media': <Video className="w-5 h-5 text-purple-400" />,
  'events': <Calendar className="w-5 h-5 text-emerald-400" />,
  'website': <Globe className="w-5 h-5 text-cyan-400" />,
  'content': <BookOpen className="w-5 h-5 text-orange-400" />,
  'community': <Users className="w-5 h-5 text-teal-400" />,
  'audience': <Eye className="w-5 h-5 text-indigo-400" />,
  'trust': <ShieldCheck className="w-5 h-5 text-emerald-400" />,
  'brand': <Handshake className="w-5 h-5 text-rose-400" />,
  'business': <DollarSign className="w-5 h-5 text-amber-400" />
};

export const FlywheelDiagram: React.FC<FlywheelDiagramProps> = ({
  onNavigateToSection,
  activeSelectedNodeId = 'you'
}) => {
  const [selectedId, setSelectedId] = useState<string>(activeSelectedNodeId);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationIndex, setSimulationIndex] = useState<number | null>(null);

  const selectedNode = FLYWHEEL_NODES.find((n) => n.id === selectedId) || FLYWHEEL_NODES[0];

  const simulationFlow = [
    'you',
    'personal-brand',
    'love-for-cars',
    'cars',
    'media',
    'events',
    'website',
    'content',
    'community',
    'audience',
    'trust',
    'brand',
    'business'
  ];

  const handleSimulatePulse = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    let step = 0;
    setSimulationIndex(step);
    setSelectedId(simulationFlow[step]);

    const interval = setInterval(() => {
      step += 1;
      if (step >= simulationFlow.length) {
        clearInterval(interval);
        setIsSimulating(false);
        setSimulationIndex(null);
      } else {
        setSimulationIndex(step);
        setSelectedId(simulationFlow[step]);
      }
    }, 700);
  };

  const isHighlighted = (id: string) => {
    if (isSimulating && simulationIndex !== null) {
      return simulationFlow[simulationIndex] === id;
    }
    return selectedId === id;
  };

  return (
    <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 lg:p-8 relative overflow-hidden">
      {/* Background glow styling */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 blur-3xl pointer-events-none rounded-full" />

      {/* Header cluster */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-neutral-900">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            <span>Core Architectural Blueprint</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display mt-1">
            The Automotive Creator Flywheel
          </h2>
          <p className="text-sm text-neutral-400 mt-1 max-w-xl">
            From personal mechanical devotion to an enduring, high-trust creator business. Click any node to inspect execution tactics, metrics, and jump to live features.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleSimulatePulse}
            disabled={isSimulating}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg border transition-all ${
              isSimulating
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 animate-pulse'
                : 'bg-neutral-900 text-neutral-200 border-neutral-800 hover:border-amber-500/50 hover:text-white'
            }`}
          >
            <Zap className={`w-3.5 h-3.5 ${isSimulating ? 'text-amber-300 animate-spin' : 'text-amber-400'}`} />
            <span>{isSimulating ? 'Simulating Value Flow...' : 'Simulate Flywheel Flow'}</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Flowchart Left / Node Detail Panel Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
        {/* Left Column: Visual Tree Layout matching user diagram */}
        <div className="lg:col-span-7 flex flex-col items-center select-none">
          {/* Level 1: YOU */}
          <TreeNodeButton
            node={FLYWHEEL_NODES[0]}
            isHighlighted={isHighlighted('you')}
            onClick={() => setSelectedId('you')}
          />

          <VerticalConnector />

          {/* Level 2: PERSONAL BRAND */}
          <TreeNodeButton
            node={FLYWHEEL_NODES[1]}
            isHighlighted={isHighlighted('personal-brand')}
            onClick={() => setSelectedId('personal-brand')}
          />

          <VerticalConnector />

          {/* Level 3: LOVE FOR CARS */}
          <TreeNodeButton
            node={FLYWHEEL_NODES[2]}
            isHighlighted={isHighlighted('love-for-cars')}
            onClick={() => setSelectedId('love-for-cars')}
          />

          {/* Fork into 3 Pillars: CARS | MEDIA | EVENTS */}
          <BranchConnectorThree />

          <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full max-w-lg mb-1">
            <TreeNodeButton
              node={FLYWHEEL_NODES[3]}
              isHighlighted={isHighlighted('cars')}
              onClick={() => setSelectedId('cars')}
              compact
            />
            <TreeNodeButton
              node={FLYWHEEL_NODES[4]}
              isHighlighted={isHighlighted('media')}
              onClick={() => setSelectedId('media')}
              compact
            />
            <TreeNodeButton
              node={FLYWHEEL_NODES[5]}
              isHighlighted={isHighlighted('events')}
              onClick={() => setSelectedId('events')}
              compact
            />
          </div>

          {/* Merge into WEBSITE */}
          <MergeConnectorThree />

          {/* Level 5: WEBSITE */}
          <TreeNodeButton
            node={FLYWHEEL_NODES[6]}
            isHighlighted={isHighlighted('website')}
            onClick={() => setSelectedId('website')}
          />

          {/* Fork into CONTENT & COMMUNITY */}
          <BranchConnectorTwo />

          <div className="grid grid-cols-2 gap-4 w-full max-w-md mb-1">
            <TreeNodeButton
              node={FLYWHEEL_NODES[7]}
              isHighlighted={isHighlighted('content')}
              onClick={() => setSelectedId('content')}
              compact
            />
            <TreeNodeButton
              node={FLYWHEEL_NODES[8]}
              isHighlighted={isHighlighted('community')}
              onClick={() => setSelectedId('community')}
              compact
            />
          </div>

          {/* Merge into AUDIENCE */}
          <MergeConnectorTwo />

          {/* Level 7: AUDIENCE */}
          <TreeNodeButton
            node={FLYWHEEL_NODES[9]}
            isHighlighted={isHighlighted('audience')}
            onClick={() => setSelectedId('audience')}
          />

          <VerticalConnector />

          {/* Level 8: TRUST */}
          <TreeNodeButton
            node={FLYWHEEL_NODES[10]}
            isHighlighted={isHighlighted('trust')}
            onClick={() => setSelectedId('trust')}
          />

          <VerticalConnector />

          {/* Level 9: BRAND */}
          <TreeNodeButton
            node={FLYWHEEL_NODES[11]}
            isHighlighted={isHighlighted('brand')}
            onClick={() => setSelectedId('brand')}
          />

          <VerticalConnector />

          {/* Level 10: BUSINESS */}
          <TreeNodeButton
            node={FLYWHEEL_NODES[12]}
            isHighlighted={isHighlighted('business')}
            onClick={() => setSelectedId('business')}
            primary
          />
        </div>

        {/* Right Column: Node Deep Dive Panel */}
        <div className="lg:col-span-5">
          <div className="sticky top-24 bg-neutral-900/70 border border-neutral-800 rounded-xl p-6 backdrop-blur-md">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-neutral-800 border border-neutral-700">
                  {nodeIcons[selectedNode.id]}
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                    Stage {selectedNode.level} of 10 · {selectedNode.category.toUpperCase()}
                  </span>
                  <h3 className="text-xl font-bold text-white font-display">
                    {selectedNode.label}
                  </h3>
                </div>
              </div>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed mt-4">
              {selectedNode.summary}
            </p>

            {/* Strategic KPI metrics */}
            <div className="grid grid-cols-2 gap-3 my-5">
              {selectedNode.kpis.map((kpi, idx) => (
                <div key={idx} className="bg-neutral-950/80 border border-neutral-800/80 rounded-lg p-3">
                  <div className="text-[11px] text-neutral-400 uppercase tracking-wider">
                    {kpi.label}
                  </div>
                  <div className="text-lg font-bold text-amber-400 font-mono mt-0.5 tabular-nums">
                    {kpi.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Tactical Implementation Checklist */}
            <div className="space-y-3 mb-6">
              <span className="text-xs font-semibold text-neutral-200 uppercase tracking-wide">
                Tactical Execution Playbook
              </span>
              <div className="space-y-2">
                {selectedNode.tactics.map((tactic, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{tactic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Jump to Live App Feature */}
            <button
              onClick={() => onNavigateToSection(selectedNode.targetSection)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-sm rounded-lg transition-all shadow-md shadow-amber-500/10 hover:shadow-amber-500/20"
            >
              <span>Explore {selectedNode.label} in App</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Tree node button component
interface TreeNodeButtonProps {
  node: FlywheelNode;
  isHighlighted: boolean;
  onClick: () => void;
  compact?: boolean;
  primary?: boolean;
}

const TreeNodeButton: React.FC<TreeNodeButtonProps> = ({
  node,
  isHighlighted,
  onClick,
  compact = false,
  primary = false
}) => {
  return (
    <button
      onClick={onClick}
      className={`group relative flex items-center justify-center transition-all duration-200 rounded-lg border text-center font-display ${
        compact ? 'w-full py-2.5 px-2' : 'w-64 sm:w-72 py-3 px-4'
      } ${
        isHighlighted
          ? 'bg-amber-500 text-neutral-950 border-amber-400 shadow-lg shadow-amber-500/25 scale-[1.03] z-10'
          : primary
          ? 'bg-neutral-900/90 text-amber-400 border-amber-500/40 hover:border-amber-400 hover:bg-neutral-800'
          : 'bg-neutral-900/80 text-neutral-200 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800/80'
      }`}
    >
      <div className="flex items-center gap-2 justify-center">
        <span className={`shrink-0 transition-transform ${isHighlighted ? 'scale-110 text-neutral-950' : ''}`}>
          {nodeIcons[node.id]}
        </span>
        <span className={`font-bold tracking-wider uppercase text-xs sm:text-sm ${
          isHighlighted ? 'text-neutral-950' : 'text-neutral-100'
        }`}>
          {node.label}
        </span>
      </div>
    </button>
  );
};

const VerticalConnector: React.FC = () => (
  <div className="w-[2px] h-6 bg-gradient-to-b from-neutral-700 to-neutral-700 relative">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-amber-400/80 rounded-full" />
  </div>
);

const BranchConnectorThree: React.FC = () => (
  <div className="w-full max-w-lg flex flex-col items-center py-2">
    <div className="w-[2px] h-3 bg-neutral-700" />
    <div className="w-[66%] h-[2px] bg-neutral-700 relative">
      {/* Down indicators */}
      <div className="absolute left-0 top-0 w-[2px] h-3 bg-neutral-700" />
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] h-3 bg-neutral-700" />
      <div className="absolute right-0 top-0 w-[2px] h-3 bg-neutral-700" />
    </div>
    <div className="h-3" />
  </div>
);

const MergeConnectorThree: React.FC = () => (
  <div className="w-full max-w-lg flex flex-col items-center py-2">
    <div className="h-1" />
    <div className="w-[66%] h-[2px] bg-neutral-700 relative">
      <div className="absolute left-0 bottom-0 w-[2px] h-3 bg-neutral-700" />
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[2px] h-3 bg-neutral-700" />
      <div className="absolute right-0 bottom-0 w-[2px] h-3 bg-neutral-700" />
    </div>
    <div className="w-[2px] h-3 bg-neutral-700" />
  </div>
);

const BranchConnectorTwo: React.FC = () => (
  <div className="w-full max-w-md flex flex-col items-center py-2">
    <div className="w-[2px] h-3 bg-neutral-700" />
    <div className="w-[50%] h-[2px] bg-neutral-700 relative">
      <div className="absolute left-0 top-0 w-[2px] h-3 bg-neutral-700" />
      <div className="absolute right-0 top-0 w-[2px] h-3 bg-neutral-700" />
    </div>
    <div className="h-3" />
  </div>
);

const MergeConnectorTwo: React.FC = () => (
  <div className="w-full max-w-md flex flex-col items-center py-2">
    <div className="h-1" />
    <div className="w-[50%] h-[2px] bg-neutral-700 relative">
      <div className="absolute left-0 bottom-0 w-[2px] h-3 bg-neutral-700" />
      <div className="absolute right-0 bottom-0 w-[2px] h-3 bg-neutral-700" />
    </div>
    <div className="w-[2px] h-3 bg-neutral-700" />
  </div>
);
