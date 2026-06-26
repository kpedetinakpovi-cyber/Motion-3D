import type { Track } from '../core/types';

export interface CapCutProject {
  name: string;
  fps: number;
  width: number;
  height: number;
  duration: number;
  tracks: CapCutTrack[];
}

export interface CapCutTrack {
  id: string;
  type: string;
  clips: CapCutClip[];
}

export interface CapCutClip {
  id: string;
  startTime: number;
  duration: number;
  content?: string;
  effects?: Record<string, any>;
}

export function importFromCapCut(ccData: CapCutProject): Track[] {
  return ccData.tracks.flatMap((ccTrack, trackIdx) =>
    ccTrack.clips.map((clip, clipIdx) => ({
      id: crypto.randomUUID(),
      type: ccTrack.type === 'text' ? 'text' : 'shape',
      start: clip.startTime / 1000, // CapCut uses ms
      duration: clip.duration / 1000,
      layer: trackIdx,
      params: {
        p21_texte: clip.content || '{{USER_TEXT}}',
        p4_positionX: 960,
        p5_positionY: 540,
        p13_opacity: 100,
      },
      keyframes: {},
      expressions: {},
    }))
  );
}

export function exportToCapCut(tracks: Track[], name: string, width: number, height: number, fps: number, duration: number): CapCutProject {
  return {
    name,
    fps,
    width,
    height,
    duration,
    tracks: tracks.map((tr, idx) => ({
      id: tr.id,
      type: tr.type,
      clips: [{
        id: crypto.randomUUID(),
        startTime: tr.start * 1000,
        duration: tr.duration * 1000,
        content: tr.params.p21_texte,
        effects: {},
      }],
    })),
  };
}
