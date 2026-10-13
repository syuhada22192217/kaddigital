/**
 * Wedding Audio Synthesizer & Player Engine
 * Provides authentic, gentle romantic wedding background music (Canon in D / Wedding Melody in Piano & Strings arpeggios)
 * using Web Audio API so it plays on every device without broken MP3 URLs or network issues.
 */

class WeddingAudioManager {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private timer: number | null = null;
  private gainNode: GainNode | null = null;
  private noteIndex: number = 0;
  private volume: number = 0.45;
  private onStateChange: ((isPlaying: boolean) => void) | null = null;

  // Romantic wedding progression chords (frequencies in Hz)
  // Canon in D transposed to C / F romantic acoustic:
  // C major, G major, A minor, E minor, F major, C major, F major, G major
  private chords = [
    // C Major
    [261.63, 329.63, 392.00, 523.25],
    // G/B
    [246.94, 293.66, 392.00, 493.88],
    // A minor
    [220.00, 261.63, 329.63, 440.00],
    // E minor / G
    [196.00, 246.94, 329.63, 392.00],
    // F Major
    [174.61, 220.00, 261.63, 349.23],
    // C Major / E
    [164.81, 261.63, 329.63, 523.25],
    // F Major
    [174.61, 261.63, 349.23, 440.00],
    // G Major
    [196.00, 293.66, 392.00, 587.33],
  ];

  public init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      this.gainNode.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setListener(cb: (playing: boolean) => void) {
    this.onStateChange = cb;
  }

  public playNote(freq: number, duration: number = 1.2, isBass: boolean = false) {
    if (!this.ctx || !this.gainNode) return;

    try {
      const osc = this.ctx.createOscillator();
      const noteGain = this.ctx.createGain();

      // Warm piano/harp timbre using soft sine + subtle triangle
      osc.type = isBass ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      const now = this.ctx.currentTime;
      const attack = isBass ? 0.08 : 0.04;
      const decay = duration * 0.9;

      noteGain.gain.setValueAtTime(0.0001, now);
      noteGain.gain.exponentialRampToValueAtTime(isBass ? 0.22 : 0.16, now + attack);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + attack + decay);

      osc.connect(noteGain);
      noteGain.connect(this.gainNode);

      osc.start(now);
      osc.stop(now + attack + decay + 0.1);
    } catch {
      // Ignore audio synthesis errors on older environments
    }
  }

  public start() {
    this.init();
    if (this.isPlaying) return;

    this.isPlaying = true;
    if (this.onStateChange) this.onStateChange(true);

    let chordIdx = 0;
    let step = 0;

    const tick = () => {
      if (!this.isPlaying || !this.ctx) return;

      const currentChord = this.chords[chordIdx];
      // Arpeggiate notes
      if (step === 0) {
        // Bass root note
        this.playNote(currentChord[0] / 2, 2.4, true);
        this.playNote(currentChord[0], 1.8);
      } else if (step === 1) {
        this.playNote(currentChord[1], 1.4);
      } else if (step === 2) {
        this.playNote(currentChord[2], 1.4);
      } else if (step === 3) {
        this.playNote(currentChord[3], 1.6);
      }

      step++;
      if (step >= 4) {
        step = 0;
        chordIdx = (chordIdx + 1) % this.chords.length;
      }

      // Schedule next arpeggio beat (approx 68 BPM gentle tempo)
      this.timer = window.setTimeout(tick, 450);
    };

    tick();
  }

  public stop() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    if (this.onStateChange) this.onStateChange(false);
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public setVolume(val: number) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.gainNode && this.ctx) {
      this.gainNode.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
  }

  public getVolume(): number {
    return this.volume;
  }
}

export const weddingAudio = new WeddingAudioManager();
