import { PARAMS_100 } from '../core/params';
import type { ParamDef } from '../core/params';

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

export interface TimelineInterface {
  tracks: Track[];
  compWidth: number;
  compHeight: number;
  fps: number;
  duration: number;
  setSeed(seed: number): void;
  addTrack(type: TrackType, params?: Partial<Record<string, any>>): string;
  addKeyframe(trackId: string, param: string, kf: Keyframe): void;
  setExpression(trackId: string, param: string, expr: string): void;
  valueAtTime(trackId: string, param: string, time: number): number;
  renderFrame(time: number): Record<string, any>[];
}

export { PARAMS_100, type ParamDef };
