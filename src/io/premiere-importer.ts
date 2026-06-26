import type { Track } from '../core/types';

export interface PremierePro {
  fps: number;
  width: number;
  height: number;
  duration: number;
  sequences: PremiereSequence[];
}

export interface PremiereSequence {
  name: string;
  tracks: PremiereTrack[];
}

export interface PremiereTrack {
  id: string;
  clips: PremiereClip[];
}

export interface PremiereClip {
  id: string;
  name: string;
  startTime: number;
  duration: number;
  inPoint: number;
  outPoint: number;
  effects?: Record<string, any>;
}

export function importFromPremiere(ppData: PremierePro): Track[] {
  return ppData.sequences.flatMap(seq =>
    seq.tracks.flatMap((ppTrack, trackIdx) =>
      ppTrack.clips.map((clip, clipIdx) => ({
        id: crypto.randomUUID(),
        type: 'video' as const,
        start: clip.startTime / 30, // Assuming 30fps base
        duration: clip.duration / 30,
        layer: trackIdx,
        params: {
          p4_positionX: 960,
          p5_positionY: 540,
          p13_opacity: 100,
        },
        keyframes: {},
        expressions: {},
      }))
    )
  );
}

export function exportToPremiere(tracks: Track[], width: number, height: number, fps: number, duration: number): PremierePro {
  return {
    fps,
    width,
    height,
    duration,
    sequences: [{
      name: 'Sequence 1',
      tracks: tracks.map((tr, idx) => ({
        id: tr.id,
        clips: [{
          id: crypto.randomUUID(),
          name: `Clip-${idx}`,
          startTime: tr.start * fps,
          duration: tr.duration * fps,
          inPoint: 0,
          outPoint: tr.duration * fps,
          effects: {},
        }],
      })),
    }],
  };
}
