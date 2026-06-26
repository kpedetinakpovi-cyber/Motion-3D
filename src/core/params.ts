export type ParamDef = {
  key: string;
  type: 'number'|'boolean'|'enum'|'string'|'path'|'code'|'color';
  min?: number;
  max?: number;
  default: any;
  options?: string[];
  keyframes: boolean;
  expression: boolean;
  gpu?: boolean;
  ia?: string;
  audio?: boolean;
};

export const PARAMS_100: ParamDef[] = [
  { key: 'p1_anchorX', type: 'number', min: -10000, max: 10000, default: 0, keyframes: true, expression: true },
  { key: 'p2_anchorY', type: 'number', min: -10000, max: 10000, default: 0, keyframes: true, expression: true },
  { key: 'p3_anchorZ', type: 'number', min: -10000, max: 10000, default: 0, keyframes: true, expression: true },
  { key: 'p4_positionX', type: 'number', min: -30000, max: 30000, default: 960, keyframes: true, expression: true },
  { key: 'p5_positionY', type: 'number', min: -30000, max: 30000, default: 540, keyframes: true, expression: true },
  { key: 'p6_positionZ', type: 'number', min: -30000, max: 30000, default: 0, keyframes: true, expression: true },
  { key: 'p7_scaleX', type: 'number', min: 0, max: 10000, default: 100, keyframes: true, expression: true },
  { key: 'p8_scaleY', type: 'number', min: 0, max: 10000, default: 100, keyframes: true, expression: true },
  { key: 'p9_scaleZ', type: 'number', min: 0, max: 10000, default: 100, keyframes: true, expression: true },
  { key: 'p10_rotation', type: 'number', min: -36000, max: 36000, default: 0, keyframes: true, expression: true },
  { key: 'p11_rotationX', type: 'number', min: -36000, max: 36000, default: 0, keyframes: true, expression: true },
  { key: 'p12_rotationY', type: 'number', min: -36000, max: 36000, default: 0, keyframes: true, expression: true },
  { key: 'p13_opacity', type: 'number', min: 0, max: 100, default: 100, keyframes: true, expression: true },
  { key: 'p14_feather', type: 'number', min: 0, max: 1000, default: 0, keyframes: true, expression: true },
  { key: 'p15_expansion', type: 'number', min: -1000, max: 1000, default: 0, keyframes: true, expression: true },
  { key: 'p16_mask1_path', type: 'path', default: '', keyframes: true, expression: false, ia: 'SAM2' },
  { key: 'p17_mask1_mode', type: 'enum', options: ['Add','Subtract','Intersect','Lighten','Darken','Difference'], default: 'Add', keyframes: false, expression: false },
  { key: 'p18_mask2_path', type: 'path', default: '', keyframes: true, expression: false, ia: 'SAM2' },
  { key: 'p19_mask2_mode', type: 'enum', options: ['Add','Subtract','Intersect','Lighten','Darken','Difference'], default: 'Add', keyframes: false, expression: false },
  { key: 'p20_mask_opacity', type: 'number', min: 0, max: 100, default: 100, keyframes: true, expression: true },
  { key: 'p21_texte', type: 'string', default: '{{USER_TEXT}}', keyframes: true, expression: true },
  { key: 'p22_police', type: 'string', default: 'Bebas Neue', keyframes: false, expression: false },
  { key: 'p23_taille', type: 'number', min: 1, max: 2000, default: 280, keyframes: true, expression: true },
  { key: 'p24_interligne', type: 'number', min: 0, max: 10, default: 0.8, keyframes: true, expression: true },
  { key: 'p25_kerning', type: 'number', min: -100, max: 100, default: -5, keyframes: true, expression: true },
  { key: 'p26_graisse', type: 'enum', options: ['100','200','300','400','500','600','700','800','900'], default: '700', keyframes: false, expression: false },
  { key: 'p27_italique', type: 'boolean', default: false, keyframes: false, expression: false },
  { key: 'p28_souligne', type: 'boolean', default: false, keyframes: false, expression: false },
  { key: 'p29_majuscule', type: 'boolean', default: true, keyframes: false, expression: false },
  { key: 'p30_alignement', type: 'enum', options: ['gauche','centre','droite','justifie'], default: 'centre', keyframes: false, expression: false },
  { key: 'p31_animateur_type', type: 'enum', options: ['caractère','mot','ligne'], default: 'mot', keyframes: false, expression: false },
  { key: 'p32_animateur_range', type: 'string', default: '0-100%', keyframes: true, expression: true },
  { key: 'p33_animateur_offset', type: 'number', min: -1000, max: 1000, default: -50, keyframes: true, expression: true },
  { key: 'p34_animateur_smooth', type: 'number', min: 0, max: 100, default: 80, keyframes: true, expression: true },
  { key: 'p35_tracé_path', type: 'path', default: '', keyframes: true, expression: false },
  { key: 'p36_couleur_primaire', type: 'color', default: '#FF0033', keyframes: true, expression: true },
  { key: 'p37_luminance', type: 'number', min: -100, max: 100, default: 10, keyframes: true, expression: true },
  { key: 'p38_contraste', type: 'number', min: -100, max: 100, default: 15, keyframes: true, expression: true },
  { key: 'p39_teinte', type: 'number', min: -180, max: 180, default: 0, keyframes: true, expression: true },
  { key: 'p40_saturation', type: 'number', min: -100, max: 100, default: 20, keyframes: true, expression: true },
  { key: 'p41_température', type: 'number', min: -100, max: 100, default: 5, keyframes: true, expression: true },
  { key: 'p42_teinte_verte', type: 'number', min: -100, max: 100, default: 0, keyframes: true, expression: true },
  { key: 'p43_exposition', type: 'number', min: -5, max: 5, default: 0.2, keyframes: true, expression: true },
  { key: 'p44_noirs', type: 'number', min: -100, max: 100, default: -10, keyframes: true, expression: true },
  { key: 'p45_ombres', type: 'number', min: -100, max: 100, default: 15, keyframes: true, expression: true },
  { key: 'p46_hautes_lumières', type: 'number', min: -100, max: 100, default: -5, keyframes: true, expression: true },
  { key: 'p47_blancs', type: 'number', min: -100, max: 100, default: 10, keyframes: true, expression: true },
  { key: 'p48_vibrance', type: 'number', min: -100, max: 100, default: 25, keyframes: true, expression: true },
  { key: 'p49_LUT', type: 'string', default: 'Cinematic_Red.cube', keyframes: false, expression: false },
  { key: 'p50_courbe_RVB', type: 'string', default: '0,0;128,140;255,255', keyframes: true, expression: true },
  { key: 'p51_glow_intensite', type: 'number', min: 0, max: 500, default: 80, keyframes: true, expression: true, gpu: true },
  { key: 'p52_glow_rayon', type: 'number', min: 0, max: 500, default: 45, keyframes: true, expression: true, gpu: true },
  { key: 'p53_glow_seuil', type: 'number', min: 0, max: 100, default: 60, keyframes: true, expression: true, gpu: true },
  { key: 'p54_lens_flare_type', type: 'enum', options: ['50-300mm','105mm','Zoom','Anamorphic'], default: '105mm', keyframes: false, expression: false, gpu: true },
  { key: 'p55_lens_flare_lumi', type: 'number', min: 0, max: 200, default: 30, keyframes: true, expression: true, gpu: true },
  { key: 'p56_light_leak_intensite', type: 'number', min: 0, max: 100, default: 0, keyframes: true, expression: true, gpu: true },
  { key: 'p57_light_leak_couleur', type: 'color', default: '#FF6B00', keyframes: true, expression: true, gpu: true },
  { key: 'p58_sparkle_densite', type: 'number', min: 0, max: 1000, default: 0, keyframes: true, expression: true, gpu: true },
  { key: 'p59_sparkle_taille', type: 'number', min: 0, max: 50, default: 2, keyframes: true, expression: true, gpu: true },
  { key: 'p60_sparkle_vitesse', type: 'number', min: 0, max: 10, default: 1, keyframes: true, expression: true, gpu: true },
  { key: 'p61_neon_epaisseur', type: 'number', min: 0, max: 100, default: 8, keyframes: true, expression: true, gpu: true },
  { key: 'p62_neon_couleur', type: 'color', default: '#FF0033', keyframes: true, expression: true, gpu: true },
  { key: 'p63_bokeh_quantite', type: 'number', min: 0, max: 100, default: 0, keyframes: true, expression: true, gpu: true },
  { key: 'p64_volumetric_densite', type: 'number', min: 0, max: 100, default: 0, keyframes: true, expression: true, gpu: true },
  { key: 'p65_godray_angle', type: 'number', min: 0, max: 360, default: 45, keyframes: true, expression: true, gpu: true },
  { key: 'p66_ondulation_quantite', type: 'number', min: 0, max: 1000, default: 0, keyframes: true, expression: true, gpu: true },
  { key: 'p67_ondulation_largeur', type: 'number', min: 1, max: 1000, default: 100, keyframes: true, expression: true, gpu: true },
  { key: 'p68_torsion_angle', type: 'number', min: -3600, max: 3600, default: 0, keyframes: true, expression: true, gpu: true },
  { key: 'p69_bombement_hauteur', type: 'number', min: -1000, max: 1000, default: 0, keyframes: true, expression: true, gpu: true },
  { key: 'p70_mesh_warp_points', type: 'string', default: '', keyframes: true, expression: false, gpu: true },
  { key: 'p71_corner_pin', type: 'string', default: '', keyframes: true, expression: false, gpu: true },
  { key: 'p72_bezier_warp', type: 'string', default: '', keyframes: true, expression: false, gpu: true },
  { key: 'p73_optics_compensation', type: 'number', min: -100, max: 100, default: 0, keyframes: true, expression: true, gpu: true },
  { key: 'p74_perspective_X', type: 'number', min: -100, max: 100, default: 0, keyframes: true, expression: true, gpu: true },
  { key: 'p75_perspective_Y', type: 'number', min: -100, max: 100, default: 0, keyframes: true, expression: true, gpu: true },
  { key: 'p76_flou_gaussien', type: 'number', min: 0, max: 1000, default: 0, keyframes: true, expression: true, gpu: true },
  { key: 'p77_flou_direction', type: 'number', min: 0, max: 360, default: 0, keyframes: true, expression: true, gpu: true },
  { key: 'p78_flou_angle', type: 'number', min: 0, max: 360, default: 0, keyframes: true, expression: true, gpu: true },
  { key: 'p79_flou_mouvement', type: 'number', min: 0, max: 360, default: 180, keyframes: true, expression: true, gpu: true },
  { key: 'p80_camera_lens_blur', type: 'number', min: 0, max: 100, default: 5, keyframes: true, expression: true, gpu: true },
  { key: 'p81_nettete', type: 'number', min: 0, max: 500, default: 20, keyframes: true, expression: true, gpu: true },
  { "path":"src/core/Timeline.ts","content":"import { VM } from 'vm2';\nimport { PARAMS_100 } from './params';\n\ntype Keyframe = { time: number; value: number; easing: 'linear'|'bezier'|'hold'; ox?: number; oy?: number; ix?: number; iy?: number; };\ntype Track = { id: string; type: 'video'|'audio'|'text'|'shape'|'camera'|'light'|'null'|'adjustment'; start: number; duration: number; layer: number; params: Record<string, any>; keyframes: Record<string, Keyframe[]>; expressions: Record<string, string>; };\n\nexport class Timeline {\n  tracks: Track[] = [];\n  compWidth = 1920;\n  compHeight = 1080;\n  fps = 30;\n  duration = 60;\n  private rngSeed = 1;\n  private vm = new VM({ sandbox: { Math, wiggle: (f:number,a:number)=>this.wiggle(f,a), loopOut: (t='cycle')=>this.loopOut(t), time: 0, value: 0 } });\n\n  setSeed(seed: number) { this.rngSeed = seed | 0; }
\n  addTrack(type: Track['type'], params: Partial<Record<string, any>> = {}): string {\n    const id = crypto.randomUUID();\n    const baseParams = Object.fromEntries(PARAMS_100.map(p => [p.key, p.default]));\n    this.tracks.push({ id, type, start: 0, duration: 5, layer: this.tracks.length, params: {...baseParams,...params }, keyframes: {}, expressions: {} });\n    return id;\n  }\n\n  addKeyframe(trackId: string, param: string, kf: Keyframe) {\n    const t = this.tracks.find(t => t.id === trackId)!;\n    if (!t.keyframes[param]) t.keyframes[param] = [];\n    t.keyframes[param].push(kf);\n    t.keyframes[param].sort((a, b) => a.time - b.time);\n  }\n\n  setExpression(trackId: string, param: string, expr: string) {\n    const t = this.tracks.find(t => t.id === trackId)!;\n    t.expressions[param] = expr;\n  }\n\n  valueAtTime(trackId: string, param: string, time: number): number {\n    const t = this.tracks.find(tr => tr.id === trackId)!;\n    if (t.expressions[param]) {\n      this.vm.sandbox.time = time;\n      this.vm.sandbox.value = this.interpKeyframes(t, param, time);\n      const res = this.vm.run(t.expressions[param]);\n      return typeof res === 'number' ? res : Number(res);
    }\n    return this.interpKeyframes(t, param, time);\n  }\n\n  private interpKeyframes(t: Track, param: string, time: number): number {\n    const kfs = t.keyframes[param];\n    const def = PARAMS_100.find(p => p.key === param);\n    const fallback = t.params[param] ?? def?.default ?? 0;\n    if (!kfs || !kfs.length) return fallback;\n    if (time <= kfs[0].time) return kfs[0].value;\n    if (time >= kfs[kfs.length - 1].time) {\n      // after last keyframe: handle loopOut or continue if expression uses it\n      return kfs[kfs.length - 1].value;\n    }\n    for (let i = 0; i < kfs.length - 1; i++) {\n      const a = kfs[i], b = kfs[i + 1];\n      if (time >= a.time && time <= b.time) {\n        const td = (time - a.time) / (b.time - a.time);\n        if (a.easing === 'hold') return a.value;\n        if (a.easing === 'linear') return a.value + (b.value - a.value) * td;\n        // bezier using value control offsets (oy, iy) as value offsets for control points\n        return this.bezier(a.value, a.oy ?? 0, b.iy ?? 0, b.value, td);\n      }\n    }\n    return fallback;\n  }\n\n  // cubic bezier for scalar values: p0, cp1Offset, cp2Offset, p1, t in [0,1]\n  private bezier(p0:number, cp1Offset:number, cp2Offset:number, p1:number, t:number): number {\n    const u = 1 - t;\n    const v0 = p0;\n    const v1 = p0 + cp1Offset;\n    const v2 = p1 + cp2Offset;\n    const v3 = p1;\n    return u*u*u*v0 + 3*u*u*t*v1 + 3*u*t*t*v2 + t*t*t*v3;\n  }\n\n  // deterministic wiggle using seeded PRNG
  private mulberry32(a:number) {\n    return function() {\n      a |= 0; a = a + 0x6D2B79F5 | 0;\n      let t = Math.imul(a ^ a >>> 15, 1 | a);\n      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;\n      return ((t ^ t >>> 14) >>> 0) / 4294967296;\n    }\n  }\n
  wiggle(freq: number, amp: number): number {\n    const t = this.vm.sandbox.time || 0;\n    const rnd = this.mulberry32(this.rngSeed + Math.floor(t * 1000))();\n    return Math.sin(t * freq * 2 * Math.PI) * amp + (rnd * 2 - 1) * amp * 0.5;\n  }\n\n  loopOut(type: 'cycle'|'pingpong'|'offset'|'continue' = 'cycle'): number {\n    // Simple helper: expects caller to set vm.sandbox.time and vm.sandbox.value if used in expression
    return 0;\n  }\n\n  renderFrame(time: number): Record<string, any>[] {\n    return this.tracks.slice().sort((a, b) => a.layer - b.layer).map(tr => {\n      const out: any = { id: tr.id, type: tr.type };\n      for (const p of PARAMS_100) out[p.key] = this.valueAtTime(tr.id, p.key, time);\n      return out;\n    });\n  }\n}\n"},{ 