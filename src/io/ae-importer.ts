import type { Track } from './types';

export type AECompData = {
  width: number;
  height: number;
  fps: number;
  duration: number;
  layers: AELayerData[];
};

export type AELayerData = {
  name: string;
  startTime: number;
  outPoint: number;
  position: [number, number, number];
  rotation: number;
  opacity: number;
  scale: [number, number, number];
  keyframes?: { time: number; value: any; easing: string }[];
};

export function importFromAE(aeData: AECompData): Track[] {
  return aeData.layers.map((layer, idx) => ({
    id: crypto.randomUUID(),
    type: 'shape' as const,
    start: layer.startTime || 0,
    duration: (layer.outPoint || 0) - (layer.startTime || 0),
    layer: idx,
    params: {
      p4_positionX: layer.position[0] || 960,
      p5_positionY: layer.position[1] || 540,
      p10_rotation: layer.rotation || 0,
      p13_opacity: layer.opacity || 100,
      p7_scaleX: (layer.scale?.[0] || 100),
      p8_scaleY: (layer.scale?.[1] || 100),
    },
    keyframes: {},
    expressions: {},
  }));
}

export function exportToAE(tracks: Track[], width: number, height: number, fps: number, duration: number): AECompData {
  return {
    width,
    height,
    fps,
    duration,
    layers: tracks.map(tr => ({
      name: `${tr.type}-${tr.id.slice(0, 8)}`,
      startTime: tr.start,
      outPoint: tr.start + tr.duration,
      position: [tr.params.p4_positionX || 960, tr.params.p5_positionY || 540, tr.params.p6_positionZ || 0],
      rotation: tr.params.p10_rotation || 0,
      opacity: tr.params.p13_opacity || 100,
      scale: [tr.params.p7_scaleX || 100, tr.params.p8_scaleY || 100, tr.params.p9_scaleZ || 100],
    })),
  };
}
