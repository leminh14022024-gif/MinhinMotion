import React, { useState, useEffect } from 'react';
import { Car } from '../types';
import { 
  Gauge, 
  Volume2, 
  VolumeX, 
  Timer, 
  Wrench, 
  Zap, 
  Activity, 
  Layers
} from 'lucide-react';
import { startEngineIdle, revEngineToRpm, stopEngineSound } from '../utils/engineAudio';

interface GarageSectionProps {
  cars: Car[];
}

export const GarageSection: React.FC<GarageSectionProps> = ({ cars }) => {
  const [selectedCarId, setSelectedCarId] = useState<string>(cars[0].id);
  const [activeTab, setActiveTab] = useState<'build' | 'dyno' | 'laptimes'>('build');
  const [isAudioRunning, setIsAudioRunning] = useState(false);
  const [currentRpm, setCurrentRpm] = useState(900);
  const [isThrottling, setIsThrottling] = useState(false);

  const car = cars.find((c) => c.id === selectedCarId) || cars[0];

  // Stop audio when changing cars or unmounting
  useEffect(() => {
    stopEngineSound();
    setIsAudioRunning(false);
    setCurrentRpm(900);
    return () => {
      stopEngineSound();
    };
  }, [selectedCarId]);

  // Audio start / toggle
  const toggleSound = () => {
    if (isAudioRunning) {
      stopEngineSound();
      setIsAudioRunning(false);
      setCurrentRpm(900);
    } else {
      startEngineIdle(car.soundProfile);
      setIsAudioRunning(true);
      setCurrentRpm(950);
    }
  };

  // Throttle rev loop
  useEffect(() => {
    let animationFrameId: number;
    if (isThrottling && isAudioRunning) {
      const step = () => {
        setCurrentRpm((prev) => {
          const next = Math.min(car.maxRpm, prev + 120);
          revEngineToRpm(next, car.maxRpm);
          return next;
        });
        animationFrameId = requestAnimationFrame(step);
      };
      animationFrameId = requestAnimationFrame(step);
    } else if (!isThrottling && isAudioRunning) {
      const step = () => {
        setCurrentRpm((prev) => {
          if (prev <= 950) return 950;
          const next = Math.max(950, prev - 180);
          revEngineToRpm(next, car.maxRpm);
          return next;
        });
        if (currentRpm > 950) {
          animationFrameId = requestAnimationFrame(step);
        }
      };
      animationFrameId = requestAnimationFrame(step);
    }
    return () => cancelAnimationFrame(animationFrameId);
  }, [isThrottling, isAudioRunning, car.maxRpm, currentRpm]);

  return (
    <section className="py-12 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-neutral-900">
          <div>
            <div className="text-xs font-mono text-amber-400 uppercase tracking-widest flex items-center gap-2">
              <Wrench className="w-3.5 h-3.5" />
              <span>Core Fleet & Build Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mt-1">
              The Sovereign Garage
            </h2>
            <p className="text-sm text-neutral-400 mt-1 max-w-xl">
              Every build represents a distinct driving philosophy. No garage queens; every chassis is corner-balanced, tracked, and dialled in.
            </p>
          </div>

          {/* Car selector tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-neutral-900/80 p-1.5 rounded-lg border border-neutral-800">
            {cars.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedCarId(item.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  selectedCarId === item.id
                    ? 'bg-amber-500 text-neutral-950 font-bold shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {item.name.split(' (')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Car Showcase Hero */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Big Image & Interactive Engine Acoustics */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl aspect-[16/10]">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-2.5 py-1 text-xs font-mono font-bold uppercase rounded bg-neutral-950/80 text-amber-400 border border-amber-500/30 backdrop-blur-md">
                  {car.badge}
                </span>
                <span className="px-2.5 py-1 text-xs font-mono rounded bg-neutral-900/80 text-neutral-300 border border-neutral-700 backdrop-blur-md">
                  {car.year}
                </span>
              </div>

              {/* Engine Rev Synthesizer Overlay on Car Image */}
              <div className="absolute bottom-4 left-4 right-4 bg-neutral-950/85 backdrop-blur-md border border-neutral-800 p-4 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={toggleSound}
                    className={`p-3 rounded-lg border transition-all ${
                      isAudioRunning
                        ? 'bg-amber-500 text-neutral-950 border-amber-400'
                        : 'bg-neutral-800 text-neutral-300 border-neutral-700 hover:text-white'
                    }`}
                    title={isAudioRunning ? 'Cut Ignition' : 'Start Engine Idle'}
                  >
                    {isAudioRunning ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
                  </button>
                  <div>
                    <div className="text-xs font-medium text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
                      <span>Exhaust Acoustic Simulator</span>
                      {isAudioRunning && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />}
                    </div>
                    <div className="text-sm font-bold text-white font-mono">
                      {isAudioRunning ? `${currentRpm} RPM` : 'Ignition Off (Click to Start)'}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  <button
                    onMouseDown={() => {
                      if (!isAudioRunning) {
                        startEngineIdle(car.soundProfile);
                        setIsAudioRunning(true);
                      }
                      setIsThrottling(true);
                    }}
                    onMouseUp={() => setIsThrottling(false)}
                    onMouseLeave={() => setIsThrottling(false)}
                    onTouchStart={() => {
                      if (!isAudioRunning) {
                        startEngineIdle(car.soundProfile);
                        setIsAudioRunning(true);
                      }
                      setIsThrottling(true);
                    }}
                    onTouchEnd={() => setIsThrottling(false)}
                    className="select-none w-full sm:w-auto px-5 py-2.5 bg-red-600 hover:bg-red-500 active:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-md transition-all shadow-lg shadow-red-600/30 flex items-center justify-center gap-2"
                  >
                    <Zap className="w-4 h-4" />
                    <span>Hold Throttle (Rev to Redline)</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Spec Bar Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-neutral-900/60 border border-neutral-800 rounded-lg p-3.5">
                <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono">Peak Power</div>
                <div className="text-xl font-bold text-white font-mono mt-1 tabular-nums">{car.powerHp} <span className="text-xs text-neutral-400 font-normal">HP</span></div>
              </div>
              <div className="bg-neutral-900/60 border border-neutral-800 rounded-lg p-3.5">
                <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono">Torque</div>
                <div className="text-xl font-bold text-white font-mono mt-1 tabular-nums">{car.torqueNm} <span className="text-xs text-neutral-400 font-normal">Nm</span></div>
              </div>
              <div className="bg-neutral-900/60 border border-neutral-800 rounded-lg p-3.5">
                <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono">0-60 MPH</div>
                <div className="text-xl font-bold text-amber-400 font-mono mt-1 tabular-nums">{car.zeroToSixtySec} <span className="text-xs text-neutral-400 font-normal">sec</span></div>
              </div>
              <div className="bg-neutral-900/60 border border-neutral-800 rounded-lg p-3.5">
                <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono">Curb Weight</div>
                <div className="text-xl font-bold text-white font-mono mt-1 tabular-nums">{car.weightKg} <span className="text-xs text-neutral-400 font-normal">kg</span></div>
              </div>
            </div>
          </div>

          {/* Right Column: Build Sheet, Dyno, Lap Times */}
          <div className="lg:col-span-5 bg-neutral-900/60 border border-neutral-800 rounded-xl p-6 flex flex-col gap-5">
            <div>
              <span className="text-xs font-mono text-amber-400/90">{car.engine}</span>
              <h3 className="text-2xl font-bold text-white font-display mt-0.5">{car.name}</h3>
              <p className="text-xs text-neutral-300 leading-relaxed mt-2.5">{car.story}</p>
            </div>

            {/* Sub-tabs */}
            <div className="flex border-b border-neutral-800 text-xs font-semibold text-neutral-400">
              <button
                onClick={() => setActiveTab('build')}
                className={`flex items-center gap-1.5 pb-2.5 border-b-2 mr-5 transition-colors ${
                  activeTab === 'build' ? 'text-amber-400 border-amber-400' : 'border-transparent hover:text-white'
                }`}
              >
                <Wrench className="w-3.5 h-3.5" />
                <span>Modifications</span>
              </button>
              <button
                onClick={() => setActiveTab('laptimes')}
                className={`flex items-center gap-1.5 pb-2.5 border-b-2 mr-5 transition-colors ${
                  activeTab === 'laptimes' ? 'text-amber-400 border-amber-400' : 'border-transparent hover:text-white'
                }`}
              >
                <Timer className="w-3.5 h-3.5" />
                <span>Lap Telemetry</span>
              </button>
              <button
                onClick={() => setActiveTab('dyno')}
                className={`flex items-center gap-1.5 pb-2.5 border-b-2 transition-colors ${
                  activeTab === 'dyno' ? 'text-amber-400 border-amber-400' : 'border-transparent hover:text-white'
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                <span>Dyno Graph</span>
              </button>
            </div>

            {/* Tab 1: Modifications Build Sheet */}
            {activeTab === 'build' && (
              <div className="space-y-4">
                {car.modifications.map((modGroup, idx) => (
                  <div key={idx} className="bg-neutral-950/70 border border-neutral-800/80 rounded-lg p-3.5">
                    <div className="text-xs font-bold text-neutral-200 uppercase tracking-wide flex items-center gap-2 mb-2 font-display">
                      <Layers className="w-3 h-3 text-amber-400" />
                      <span>{modGroup.category}</span>
                    </div>
                    <ul className="space-y-1.5">
                      {modGroup.parts.map((part, pIdx) => (
                        <li key={pIdx} className="text-xs text-neutral-300 flex items-start gap-2">
                          <span className="text-amber-500 font-mono mt-0.5">›</span>
                          <span>{part}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 2: Lap Times */}
            {activeTab === 'laptimes' && (
              <div className="space-y-3">
                {car.lapTimes.map((lap, idx) => (
                  <div key={idx} className="bg-neutral-950/80 border border-neutral-800 rounded-lg p-3.5 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white">{lap.track}</div>
                      <div className="text-[11px] text-neutral-400">{lap.condition}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-amber-400 font-mono tabular-nums">{lap.time}</div>
                      <div className="text-[10px] uppercase font-mono text-emerald-400">Verified Lap</div>
                    </div>
                  </div>
                ))}
                <div className="p-3 bg-neutral-950/50 rounded-lg border border-neutral-800 text-[11px] text-neutral-400">
                  All lap times verified via AiM Solo 2 DL 25Hz GPS telemetry loggers. Weather and tire compound conditions documented.
                </div>
              </div>
            )}

            {/* Tab 3: Interactive Dyno Chart */}
            {activeTab === 'dyno' && (
              <div className="bg-neutral-950/80 border border-neutral-800 rounded-lg p-4">
                <div className="flex items-center justify-between text-xs text-neutral-400 pb-3 border-b border-neutral-800/80 mb-3">
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> Power (HP)</span>
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-cyan-400" /> Torque (Nm)</span>
                </div>
                <div className="space-y-2.5">
                  {car.dynoCurve.map((point, idx) => (
                    <div key={idx} className="text-xs">
                      <div className="flex justify-between font-mono text-[11px] text-neutral-400 mb-1">
                        <span>{point.rpm} RPM</span>
                        <span>{point.hp} HP / {point.torque} Nm</span>
                      </div>
                      <div className="w-full h-2 bg-neutral-900 rounded-full overflow-hidden flex gap-1">
                        <div
                          className="h-full bg-amber-400 rounded-full transition-all"
                          style={{ width: `${(point.hp / car.powerHp) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-neutral-800 text-[11px] text-neutral-400">
                  DynoJet 424xLC2 all-wheel-drive hub dyno calibration with SAE J1349 weather correction factor applied.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
