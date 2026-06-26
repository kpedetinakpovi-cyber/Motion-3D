import { PARAMS_100 } from './params';
import type { ParamDef } from './params';

export type TrackType = 'video'|'audio'|'text'|'shape'|'camera'|'light'|'null'|'adjustment';

export type Keyframe = {
  time: number;
  value: number;
  easing: 'linear'|'bezier'|'hold';
  ox?: number;
  oy?: number;
  ix?: number;
  iy?: number;
};

export type Track = {
  id: string;
  type: TrackType;
  start: number;
  duration: number;
  layer: number;
  params: Record<string, any>;
  keyframes: Record<string, Keyframe[]>;
  expressions: Record<string, string>;
};

export class Timeline {
  tracks: Track[] = [];
  compWidth = 1920;
  compHeight = 1080;
  fps = 30;
  duration = 60;
  private rngSeed = 1;
  private vm: any;

  constructor() {
    // Lazy-load vm2 only when expressions are used
  }

  setSeed(seed: number) { this.rngSeed = seed | 0; }

  addTrack(type: TrackType, params: Partial<Record<string, any>> = {}): string {
    const id = crypto.randomUUID();
    const baseParams = Object.fromEntries(PARAMS_100.map(p => [p.key, p.default]));
    this.tracks.push({
      id,
      type,
      start: 0,
      duration: 5,
      layer: this.tracks.length,
      params: { ...baseParams, ...params },
      keyframes: {},
      expressions: {},
    });
    return id;
  }

  addKeyframe(trackId: string, param: string, kf: Keyframe) {
    const t = this.tracks.find(t => t.id === trackId);
    if (!t) return;
    if (!t.keyframes[param]) t.keyframes[param] = [];
    t.keyframes[param].push(kf);
    t.keyframes[param].sort((a, b) => a.time - b.time);
  }

  setExpression(trackId: string, param: string, expr: string) {
    const t = this.tracks.find(t => t.id === trackId);
    if (!t) return;
    t.expressions[param] = expr;
  }

  valueAtTime(trackId: string, param: string, time: number): number {
    const t = this.tracks.find(tr => tr.id === trackId);
    if (!t) return 0;
    const def = PARAMS_100.find(p => p.key === param);
    if (t.expressions && t.expressions[param]) {
      // Prepare helpers bound to this track and param
      const sandboxHelpers = this.buildExpressionHelpers(t, param, time);
      // Dynamically import vm2 for server-side execution
      if (typeof window === 'undefined') {
        try {
          // eslint-disable-next-line global-require
          const { VM } = require('vm2');
          const vm = new VM({ sandbox: { ...sandboxHelpers } });
          vm.sandbox.time = time;
          vm.sandbox.value = this.interpKeyframes(t, param, time);
          const res = vm.run(t.expressions[param]);
          return typeof res === 'number' ? res : Number(res);
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error('Expression error:', err);
          return this.interpKeyframes(t, param, time);
        }
      }
    }
    return this.interpKeyframes(t, param, time);
  }

  private interpKeyframes(t: Track, param: string, time: number): number {
    const kfs = t.keyframes[param];
    const def = PARAMS_100.find(p => p.key === param);
    const fallback = t.params[param] ?? def?.default ?? 0;
    if (!kfs || !kfs.length) return fallback;
    if (time <= kfs[0].time) return kfs[0].value;
    if (time >= kfs[kfs.length - 1].time) return kfs[kfs.length - 1].value;
    for (let i = 0; i < kfs.length - 1; i++) {
      const a = kfs[i];
      const b = kfs[i + 1];
      if (time >= a.time && time <= b.time) {
        const td = (time - a.time) / (b.time - a.time);
        if (a.easing === 'hold') return a.value;
        if (a.easing === 'linear') return a.value + (b.value - a.value) * td;
        return this.bezier(a.value, a.ox ?? 0, a.oy ?? 0, b.ix ?? 0, b.iy ?? 0, b.value, td);
      }
    }
    return fallback;
  }

  private bezier(p0: number, ox: number, oy: number, ix: number, iy: number, p1: number, t: number): number {
    const v0 = p0;
    const v1 = p0 + oy;
    const v2 = p1 + iy;
    const v3 = p1;
    const u = 1 - t;
    return u * u * u * v0 + 3 * u * u * t * v1 + 3 * u * t * t * v2 + t * t * t * v3;
  }

  private mulberry32(a: number) {
    return function() {
      a |= 0;
      a = a + 0x6D2B79F5 | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = t + Math.imul(t ^ (t >>> 7), 61 | t) ^ t;
      return (((t ^ (t >>> 14)) >>> 0) / 4294967296);
    };
  }

  private wiggle(freq: number, amp: number, time: number) {
    const rnd = this.mulberry32(this.rngSeed + Math.floor(time * 1000))();
    return Math.sin(time * freq * 2 * Math.PI) * amp + (rnd * 2 - 1) * amp * 0.5;
  }

  private buildExpressionHelpers(t: Track, param: string, time: number) {
    const self = this;
    const kfs = t.keyframes[param] || [];

    function clamp(v: number, a: number, b: number) {
      return Math.max(a, Math.min(b, v));
    }
    function linear(a: number, b: number, tt: number) {
      return a + (b - a) * tt;
    }
    function ease(tt: number) {
      return tt < 0.5 ? 2 * tt * tt : -1 + (4 - 2 * tt) * tt;
    }
    function min(...vs: number[]) {
      return Math.min(...vs);
    }
    function max(...vs: number[]) {
      return Math.max(...vs);
    }

    const loopOut = (type: 'cycle'|'pingpong'|'offset'|'continue' = 'cycle') => {
      if (!kfs || kfs.length < 2) return self.interpKeyframes(t, param, time);
      const first = kfs[0];
      const last = kfs[kfs.length - 1];
      const span = last.time - first.time;
      if (span <= 0) return last.value;
      if (time <= last.time) return self.interpKeyframes(t, param, time);
      const dt = time - last.time;
      const cycles = Math.floor(dt / span) + 1;
      const pos = ((dt % span) + first.time);
      if (type === 'cycle') {
        return self.interpKeyframes(t, param, pos);
      }
      if (type === 'pingpong') {
        const cycleIndex = Math.floor(dt / span);
        const within = dt % span;
        const forward = cycleIndex % 2 === 0;
        const tt = forward ? first.time + within : last.time - within;
        return self.interpKeyframes(t, param, tt);
      }
      if (type === 'offset') {
        const base = self.interpKeyframes(t, param, pos);
        const offset = last.value - first.value;
        return base + offset * cycles;
      }
      if (type === 'continue') {
        if (kfs.length < 2) return last.value;
        const a = kfs[kfs.length - 2];
        const b = last;
        const slope = (b.value - a.value) / (b.time - a.time || 1);
        return b.value + slope * (time - b.time);
      }
      return self.interpKeyframes(t, param, time);
    };

    return {
      Math,
      wiggle: (f: number, a: number) => this.wiggle(f, a, time),
      loopOut,
      time,
      value: this.interpKeyframes(t, param, time),
      clamp,
      linear,
      ease,
      min,
      max,
      compWidth: this.compWidth,
      compHeight: this.compHeight,
      index: Number(t.layer),
      seed: this.rngSeed,
    };
  }

  renderFrame(time: number): Record<string, any>[] {
    return this.tracks.slice().sort((a, b) => a.layer - b.layer).map(tr => {
      const out: any = { id: tr.id, type: tr.type };
      for (const p of PARAMS_100) {
        out[p.key] = this.valueAtTime(tr.id, p.key, time);
      }
      return out;
    });
  }
}
