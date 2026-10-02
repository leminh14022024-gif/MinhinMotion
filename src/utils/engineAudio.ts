// Procedural Web Audio API Engine Rev Synthesizer
let audioCtx: AudioContext | null = null;
let activeEngine: {
  osc1: OscillatorNode;
  osc2: OscillatorNode;
  noiseGain: GainNode;
  filter: BiquadFilterNode;
  masterGain: GainNode;
  type: string;
} | null = null;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function startEngineIdle(profile: 'flat6' | 'v8' | 'inline6Turbo') {
  try {
    stopEngineSound();
    const ctx = getAudioContext();

    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.01, ctx.currentTime);
    masterGain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 0.1);

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, ctx.currentTime);
    filter.Q.value = 3.5;

    // Harmonic oscillators
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();

    let baseFreq = 48; // Idle around 800-900 rpm
    if (profile === 'flat6') {
      osc1.type = 'sawtooth';
      osc2.type = 'triangle';
      baseFreq = 54;
    } else if (profile === 'inline6Turbo') {
      osc1.type = 'sawtooth';
      osc2.type = 'sawtooth';
      baseFreq = 50;
    } else {
      osc1.type = 'sawtooth';
      osc2.type = 'sine';
      baseFreq = 42;
    }

    osc1.frequency.setValueAtTime(baseFreq, ctx.currentTime);
    osc2.frequency.setValueAtTime(baseFreq * 1.5, ctx.currentTime);

    // Subtle noise for exhaust rumble
    const bufferSize = ctx.sampleRate * 1;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }
    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.02, ctx.currentTime);

    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.value = 220;

    whiteNoise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(filter);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(masterGain);
    masterGain.connect(ctx.destination);

    osc1.start();
    osc2.start();
    whiteNoise.start();

    activeEngine = { osc1, osc2, noiseGain, filter, masterGain, type: profile };
  } catch {
    // Gracefully handle browser policy
  }
}

export function revEngineToRpm(rpm: number, maxRpm: number) {
  if (!activeEngine || !audioCtx) return;
  try {
    const ctx = audioCtx;
    const ratio = Math.max(0.1, Math.min(1.0, rpm / maxRpm));
    
    // Scale pitch with RPM
    let baseFreq = 50 + ratio * 280;
    if (activeEngine.type === 'flat6') {
      baseFreq = 55 + ratio * 340; // Shrieking 9000 RPM pitch
    }

    activeEngine.osc1.frequency.setTargetAtTime(baseFreq, ctx.currentTime, 0.05);
    activeEngine.osc2.frequency.setTargetAtTime(baseFreq * 1.5, ctx.currentTime, 0.05);
    activeEngine.filter.frequency.setTargetAtTime(450 + ratio * 2400, ctx.currentTime, 0.05);
    activeEngine.masterGain.gain.setTargetAtTime(0.12 + ratio * 0.14, ctx.currentTime, 0.04);
  } catch {
    // Ignore
  }
}

export function stopEngineSound() {
  if (!activeEngine || !audioCtx) return;
  try {
    const ctx = audioCtx;
    activeEngine.masterGain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.15);
    const engineToStop = activeEngine;
    setTimeout(() => {
      try {
        engineToStop.osc1.stop();
        engineToStop.osc2.stop();
        engineToStop.osc1.disconnect();
        engineToStop.osc2.disconnect();
      } catch {
        // Ignore
      }
    }, 180);
    activeEngine = null;
  } catch {
    activeEngine = null;
  }
}
