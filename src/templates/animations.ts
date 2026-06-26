export const textAnimationTemplates = [
  {
    id: 'text-fade-in',
    name: 'Fade In',
    category: 'Text Entrance',
    duration: 1,
    keyframes: {
      p13_opacity: [
        { time: 0, value: 0, easing: 'linear' },
        { time: 1, value: 100, easing: 'linear' },
      ],
    },
  },
  {
    id: 'text-fade-out',
    name: 'Fade Out',
    category: 'Text Exit',
    duration: 1,
    keyframes: {
      p13_opacity: [
        { time: 0, value: 100, easing: 'linear' },
        { time: 1, value: 0, easing: 'linear' },
      ],
    },
  },
  {
    id: 'text-slide-left',
    name: 'Slide In Left',
    category: 'Text Entrance',
    duration: 0.8,
    keyframes: {
      p4_positionX: [
        { time: 0, value: -500, easing: 'bezier', oy: 100, ix: -100 },
        { time: 0.8, value: 960, easing: 'bezier', oy: 0, ix: 0 },
      ],
      p13_opacity: [
        { time: 0, value: 0, easing: 'linear' },
        { time: 0.8, value: 100, easing: 'linear' },
      ],
    },
  },
  {
    id: 'text-slide-right',
    name: 'Slide In Right',
    category: 'Text Entrance',
    duration: 0.8,
    keyframes: {
      p4_positionX: [
        { time: 0, value: 2420, easing: 'bezier', oy: 100, ix: -100 },
        { time: 0.8, value: 960, easing: 'bezier', oy: 0, ix: 0 },
      ],
      p13_opacity: [
        { time: 0, value: 0, easing: 'linear' },
        { time: 0.8, value: 100, easing: 'linear' },
      ],
    },
  },
  {
    id: 'text-slide-up',
    name: 'Slide In Up',
    category: 'Text Entrance',
    duration: 0.8,
    keyframes: {
      p5_positionY: [
        { time: 0, value: 1100, easing: 'bezier', oy: 100, ix: -100 },
        { time: 0.8, value: 540, easing: 'bezier', oy: 0, ix: 0 },
      ],
      p13_opacity: [
        { time: 0, value: 0, easing: 'linear' },
        { time: 0.8, value: 100, easing: 'linear' },
      ],
    },
  },
  {
    id: 'text-slide-down',
    name: 'Slide In Down',
    category: 'Text Entrance',
    duration: 0.8,
    keyframes: {
      p5_positionY: [
        { time: 0, value: -20, easing: 'bezier', oy: 100, ix: -100 },
        { time: 0.8, value: 540, easing: 'bezier', oy: 0, ix: 0 },
      ],
      p13_opacity: [
        { time: 0, value: 0, easing: 'linear' },
        { time: 0.8, value: 100, easing: 'linear' },
      ],
    },
  },
  {
    id: 'text-zoom-in',
    name: 'Zoom In',
    category: 'Text Entrance',
    duration: 0.6,
    keyframes: {
      p7_scaleX: [
        { time: 0, value: 0, easing: 'bezier', oy: 50, ix: 0 },
        { time: 0.6, value: 100, easing: 'bezier', oy: 0, ix: 0 },
      ],
      p8_scaleY: [
        { time: 0, value: 0, easing: 'bezier', oy: 50, ix: 0 },
        { time: 0.6, value: 100, easing: 'bezier', oy: 0, ix: 0 },
      ],
      p13_opacity: [
        { time: 0, value: 0, easing: 'linear' },
        { time: 0.6, value: 100, easing: 'linear' },
      ],
    },
  },
  {
    id: 'text-zoom-out',
    name: 'Zoom Out',
    category: 'Text Exit',
    duration: 0.6,
    keyframes: {
      p7_scaleX: [
        { time: 0, value: 100, easing: 'linear' },
        { time: 0.6, value: 0, easing: 'linear' },
      ],
      p8_scaleY: [
        { time: 0, value: 100, easing: 'linear' },
        { time: 0.6, value: 0, easing: 'linear' },
      ],
      p13_opacity: [
        { time: 0, value: 100, easing: 'linear' },
        { time: 0.6, value: 0, easing: 'linear' },
      ],
    },
  },
  {
    id: 'text-rotate-360',
    name: '360 Rotate',
    category: 'Text Entrance',
    duration: 1,
    keyframes: {
      p10_rotation: [
        { time: 0, value: 0, easing: 'linear' },
        { time: 1, value: 360, easing: 'linear' },
      ],
      p13_opacity: [
        { time: 0, value: 0, easing: 'linear' },
        { time: 0.2, value: 100, easing: 'linear' },
        { time: 0.8, value: 100, easing: 'linear' },
        { time: 1, value: 100, easing: 'linear' },
      ],
    },
  },
  {
    id: 'text-bounce',
    name: 'Bounce In',
    category: 'Text Entrance',
    duration: 0.8,
    keyframes: {
      p5_positionY: [
        { time: 0, value: 1080, easing: 'linear' },
        { time: 0.4, value: 400, easing: 'linear' },
        { time: 0.6, value: 580, easing: 'linear' },
        { time: 0.8, value: 540, easing: 'linear' },
      ],
      p13_opacity: [
        { time: 0, value: 0, easing: 'linear' },
        { time: 0.8, value: 100, easing: 'linear' },
      ],
    },
  },
  {
    id: 'text-elastic',
    name: 'Elastic',
    category: 'Text Entrance',
    duration: 1.2,
    expressions: {
      p7_scaleX: 'wiggle(3, 20, time) + 100',
      p8_scaleY: 'wiggle(3, 20, time) + 100',
    },
  },
  {
    id: 'text-shake',
    name: 'Shake',
    category: 'Text Emphasis',
    duration: 0.5,
    expressions: {
      p4_positionX: '960 + wiggle(8, 10)',
      p5_positionY: '540 + wiggle(8, 10)',
    },
  },
  {
    id: 'text-pulse',
    name: 'Pulse',
    category: 'Text Emphasis',
    duration: 0.6,
    keyframes: {
      p7_scaleX: [
        { time: 0, value: 100, easing: 'linear' },
        { time: 0.3, value: 120, easing: 'linear' },
        { time: 0.6, value: 100, easing: 'linear' },
      ],
      p8_scaleY: [
        { time: 0, value: 100, easing: 'linear' },
        { time: 0.3, value: 120, easing: 'linear' },
        { time: 0.6, value: 100, easing: 'linear' },
      ],
    },
  },
];

export const shapeAnimationTemplates = [
  {
    id: 'shape-fade-in',
    name: 'Fade In',
    category: 'Shape Entrance',
    duration: 0.5,
    keyframes: {
      p13_opacity: [
        { time: 0, value: 0, easing: 'linear' },
        { time: 0.5, value: 100, easing: 'linear' },
      ],
    },
  },
  {
    id: 'shape-fade-out',
    name: 'Fade Out',
    category: 'Shape Exit',
    duration: 0.5,
    keyframes: {
      p13_opacity: [
        { time: 0, value: 100, easing: 'linear' },
        { time: 0.5, value: 0, easing: 'linear' },
      ],
    },
  },
  {
    id: 'shape-move-left',
    name: 'Move Left',
    category: 'Shape Motion',
    duration: 1,
    keyframes: {
      p4_positionX: [
        { time: 0, value: 960, easing: 'linear' },
        { time: 1, value: 400, easing: 'linear' },
      ],
    },
  },
  {
    id: 'shape-move-right',
    name: 'Move Right',
    category: 'Shape Motion',
    duration: 1,
    keyframes: {
      p4_positionX: [
        { time: 0, value: 960, easing: 'linear' },
        { time: 1, value: 1520, easing: 'linear' },
      ],
    },
  },
  {
    id: 'shape-move-up',
    name: 'Move Up',
    category: 'Shape Motion',
    duration: 1,
    keyframes: {
      p5_positionY: [
        { time: 0, value: 540, easing: 'linear' },
        { time: 1, value: 100, easing: 'linear' },
      ],
    },
  },
  {
    id: 'shape-move-down',
    name: 'Move Down',
    category: 'Shape Motion',
    duration: 1,
    keyframes: {
      p5_positionY: [
        { time: 0, value: 540, easing: 'linear' },
        { time: 1, value: 980, easing: 'linear' },
      ],
    },
  },
  {
    id: 'shape-rotate',
    name: 'Rotate 360',
    category: 'Shape Rotation',
    duration: 2,
    keyframes: {
      p10_rotation: [
        { time: 0, value: 0, easing: 'linear' },
        { time: 2, value: 360, easing: 'linear' },
      ],
    },
  },
  {
    id: 'shape-scale-up',
    name: 'Scale Up',
    category: 'Shape Scale',
    duration: 0.8,
    keyframes: {
      p7_scaleX: [
        { time: 0, value: 50, easing: 'linear' },
        { time: 0.8, value: 100, easing: 'linear' },
      ],
      p8_scaleY: [
        { time: 0, value: 50, easing: 'linear' },
        { time: 0.8, value: 100, easing: 'linear' },
      ],
    },
  },
  {
    id: 'shape-scale-down',
    name: 'Scale Down',
    category: 'Shape Scale',
    duration: 0.8,
    keyframes: {
      p7_scaleX: [
        { time: 0, value: 100, easing: 'linear' },
        { time: 0.8, value: 50, easing: 'linear' },
      ],
      p8_scaleY: [
        { time: 0, value: 100, easing: 'linear' },
        { time: 0.8, value: 50, easing: 'linear' },
      ],
    },
  },
  {
    id: 'shape-orbit',
    name: 'Orbit Center',
    category: 'Shape Motion',
    duration: 3,
    expressions: {
      p4_positionX: '960 + 300 * Math.cos(time * 2 * Math.PI / 3)',
      p5_positionY: '540 + 200 * Math.sin(time * 2 * Math.PI / 3)',
    },
  },
  {
    id: 'shape-spiral',
    name: 'Spiral In',
    category: 'Shape Motion',
    duration: 2,
    expressions: {
      p4_positionX: '960 + (time / 2) * 400 * Math.cos(time * 8 * Math.PI)',
      p5_positionY: '540 + (time / 2) * 300 * Math.sin(time * 8 * Math.PI)',
      p7_scaleX: '(time / 2) * 100',
      p8_scaleY: '(time / 2) * 100',
    },
  },
];

export const transitionTemplates = [
  {
    id: 'transition-fade',
    name: 'Fade',
    category: 'Basic',
    duration: 0.5,
    inKeyframes: {
      p13_opacity: [
        { time: 0, value: 0, easing: 'linear' },
        { time: 0.5, value: 100, easing: 'linear' },
      ],
    },
    outKeyframes: {
      p13_opacity: [
        { time: 0, value: 100, easing: 'linear' },
        { time: 0.5, value: 0, easing: 'linear' },
      ],
    },
  },
  {
    id: 'transition-slide-left',
    name: 'Slide Left',
    category: 'Direction',
    duration: 0.6,
    inKeyframes: {
      p4_positionX: [
        { time: 0, value: 1920, easing: 'linear' },
        { time: 0.6, value: 960, easing: 'linear' },
      ],
    },
    outKeyframes: {
      p4_positionX: [
        { time: 0, value: 960, easing: 'linear' },
        { time: 0.6, value: 0, easing: 'linear' },
      ],
    },
  },
  {
    id: 'transition-slide-right',
    name: 'Slide Right',
    category: 'Direction',
    duration: 0.6,
    inKeyframes: {
      p4_positionX: [
        { time: 0, value: 0, easing: 'linear' },
        { time: 0.6, value: 960, easing: 'linear' },
      ],
    },
    outKeyframes: {
      p4_positionX: [
        { time: 0, value: 960, easing: 'linear' },
        { time: 0.6, value: 1920, easing: 'linear' },
      ],
    },
  },
  {
    id: 'transition-slide-up',
    name: 'Slide Up',
    category: 'Direction',
    duration: 0.6,
    inKeyframes: {
      p5_positionY: [
        { time: 0, value: 1080, easing: 'linear' },
        { time: 0.6, value: 540, easing: 'linear' },
      ],
    },
    outKeyframes: {
      p5_positionY: [
        { time: 0, value: 540, easing: 'linear' },
        { time: 0.6, value: 0, easing: 'linear' },
      ],
    },
  },
  {
    id: 'transition-slide-down',
    name: 'Slide Down',
    category: 'Direction',
    duration: 0.6,
    inKeyframes: {
      p5_positionY: [
        { time: 0, value: 0, easing: 'linear' },
        { time: 0.6, value: 540, easing: 'linear' },
      ],
    },
    outKeyframes: {
      p5_positionY: [
        { time: 0, value: 540, easing: 'linear' },
        { time: 0.6, value: 1080, easing: 'linear' },
      ],
    },
  },
  {
    id: 'transition-zoom',
    name: 'Zoom',
    category: 'Scale',
    duration: 0.5,
    inKeyframes: {
      p7_scaleX: [
        { time: 0, value: 0, easing: 'linear' },
        { time: 0.5, value: 100, easing: 'linear' },
      ],
      p8_scaleY: [
        { time: 0, value: 0, easing: 'linear' },
        { time: 0.5, value: 100, easing: 'linear' },
      ],
    },
    outKeyframes: {
      p7_scaleX: [
        { time: 0, value: 100, easing: 'linear' },
        { time: 0.5, value: 0, easing: 'linear' },
      ],
      p8_scaleY: [
        { time: 0, value: 100, easing: 'linear' },
        { time: 0.5, value: 0, easing: 'linear' },
      ],
    },
  },
];

export const colorGradingTemplates = [
  {
    id: 'grade-warm',
    name: 'Warm Tone',
    category: 'Color Grading',
    params: {
      p37_luminance: 5,
      p38_contraste: 10,
      p40_saturation: 15,
      p41_température: 30,
    },
  },
  {
    id: 'grade-cool',
    name: 'Cool Tone',
    category: 'Color Grading',
    params: {
      p37_luminance: -5,
      p38_contraste: 10,
      p40_saturation: 10,
      p41_température: -30,
    },
  },
  {
    id: 'grade-cinematic',
    name: 'Cinematic',
    category: 'Color Grading',
    params: {
      p37_luminance: 10,
      p38_contraste: 20,
      p40_saturation: 25,
      p44_noirs: -15,
      p46_hautes_lumières: -10,
    },
  },
  {
    id: 'grade-vintage',
    name: 'Vintage',
    category: 'Color Grading',
    params: {
      p37_luminance: 8,
      p38_contraste: -10,
      p40_saturation: -20,
      p41_température: 20,
      p43_exposition: 0.3,
    },
  },
  {
    id: 'grade-noir',
    name: 'Black & White',
    category: 'Color Grading',
    params: {
      p40_saturation: -100,
      p38_contraste: 25,
      p37_luminance: 0,
    },
  },
  {
    id: 'grade-vivid',
    name: 'Vivid',
    category: 'Color Grading',
    params: {
      p40_saturation: 50,
      p38_contraste: 15,
      p37_luminance: 5,
      p48_vibrance: 40,
    },
  },
];

export const effectTemplates = [
  {
    id: 'effect-glow',
    name: 'Glow',
    category: 'Light',
    params: {
      p51_glow_intensite: 100,
      p52_glow_rayon: 50,
      p53_glow_seuil: 60,
    },
  },
  {
    id: 'effect-bloom',
    name: 'Bloom',
    category: 'Light',
    params: {
      p51_glow_intensite: 150,
      p52_glow_rayon: 80,
      p53_glow_seuil: 50,
    },
  },
  {
    id: 'effect-blur',
    name: 'Blur',
    category: 'Blur',
    params: {
      p76_flou_gaussien: 10,
    },
  },
  {
    id: 'effect-motion-blur',
    name: 'Motion Blur',
    category: 'Blur',
    params: {
      p76_flou_gaussien: 5,
      p77_flou_direction: 0,
    },
  },
  {
    id: 'effect-lens-flare',
    name: 'Lens Flare',
    category: 'Light',
    params: {
      p54_lens_flare_type: '105mm',
      p55_lens_flare_lumi: 100,
    },
  },
  {
    id: 'effect-sparkle',
    name: 'Sparkle',
    category: 'Particle',
    params: {
      p58_sparkle_densite: 50,
      p59_sparkle_taille: 3,
      p60_sparkle_vitesse: 2,
    },
  },
  {
    id: 'effect-bokeh',
    name: 'Bokeh',
    category: 'Depth',
    params: {
      p63_bokeh_quantite: 50,
    },
  },
  {
    id: 'effect-neon',
    name: 'Neon',
    category: 'Light',
    params: {
      p61_neon_epaisseur: 10,
      p62_neon_couleur: '#FF0033',
    },
  },
];

export const textStyleTemplates = [
  {
    id: 'style-bold',
    name: 'Bold',
    category: 'Typography',
    params: {
      p26_graisse: '700',
      p23_taille: 280,
    },
  },
  {
    id: 'style-light',
    name: 'Light',
    category: 'Typography',
    params: {
      p26_graisse: '300',
      p23_taille: 200,
    },
  },
  {
    id: 'style-italic',
    name: 'Italic',
    category: 'Typography',
    params: {
      p27_italique: true,
      p26_graisse: '500',
    },
  },
  {
    id: 'style-outline',
    name: 'Outline',
    category: 'Typography',
    params: {
      p26_graisse: '700',
      p61_neon_epaisseur: 3,
    },
  },
  {
    id: 'style-shadow',
    name: 'Shadow',
    category: 'Typography',
    params: {
      p26_graisse: '600',
      p14_feather: 5,
    },
  },
  {
    id: 'style-3d',
    name: '3D Text',
    category: 'Typography',
    params: {
      p11_rotationX: 30,
      p12_rotationY: 45,
      p95_extrusion_profondeur: 50,
    },
  },
];

export const cameraTemplates = [
  {
    id: 'camera-push-in',
    name: 'Push In',
    category: 'Camera Motion',
    duration: 2,
    keyframes: {
      p91_camera_zoom: [
        { time: 0, value: 50, easing: 'linear' },
        { time: 2, value: 150, easing: 'linear' },
      ],
    },
  },
  {
    id: 'camera-pull-out',
    name: 'Pull Out',
    category: 'Camera Motion',
    duration: 2,
    keyframes: {
      p91_camera_zoom: [
        { time: 0, value: 150, easing: 'linear' },
        { time: 2, value: 50, easing: 'linear' },
      ],
    },
  },
  {
    id: 'camera-pan-left',
    name: 'Pan Left',
    category: 'Camera Motion',
    duration: 2,
    keyframes: {
      p74_perspective_X: [
        { time: 0, value: 0, easing: 'linear' },
        { time: 2, value: -50, easing: 'linear' },
      ],
    },
  },
  {
    id: 'camera-pan-right',
    name: 'Pan Right',
    category: 'Camera Motion',
    duration: 2,
    keyframes: {
      p74_perspective_X: [
        { time: 0, value: 0, easing: 'linear' },
        { time: 2, value: 50, easing: 'linear' },
      ],
    },
  },
  {
    id: 'camera-tilt-up',
    name: 'Tilt Up',
    category: 'Camera Motion',
    duration: 2,
    keyframes: {
      p75_perspective_Y: [
        { time: 0, value: 0, easing: 'linear' },
        { time: 2, value: -50, easing: 'linear' },
      ],
    },
  },
  {
    id: 'camera-tilt-down',
    name: 'Tilt Down',
    category: 'Camera Motion',
    duration: 2,
    keyframes: {
      p75_perspective_Y: [
        { time: 0, value: 0, easing: 'linear' },
        { time: 2, value: 50, easing: 'linear' },
      ],
    },
  },
  {
    id: 'camera-orbit',
    name: 'Orbit',
    category: 'Camera Motion',
    duration: 4,
    expressions: {
      p74_perspective_X: '50 * Math.sin(time * Math.PI / 2)',
      p75_perspective_Y: '30 * Math.cos(time * Math.PI / 2)',
    },
  },
];

export const allTemplates = [
  ...textAnimationTemplates,
  ...shapeAnimationTemplates,
  ...transitionTemplates,
  ...colorGradingTemplates,
  ...effectTemplates,
  ...textStyleTemplates,
  ...cameraTemplates,
];

export function getTemplatesByCategory(category: string) {
  return allTemplates.filter(t => t.category === category);
}

export function getTemplatesForType(type: 'text' | 'shape' | 'camera') {
  switch (type) {
    case 'text':
      return [...textAnimationTemplates, ...textStyleTemplates, ...transitionTemplates];
    case 'shape':
      return [...shapeAnimationTemplates, ...transitionTemplates, ...effectTemplates];
    case 'camera':
      return [...cameraTemplates];
    default:
      return allTemplates;
  }
}
