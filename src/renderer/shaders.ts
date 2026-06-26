export const colorGradingShader = {
  vertex: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragment: `
    uniform sampler2D texture1;
    uniform float luminance;
    uniform float contrast;
    uniform float saturation;
    uniform float exposure;
    varying vec2 vUv;
    
    void main() {
      vec4 color = texture2D(texture1, vUv);
      
      // Exposure
      color.rgb *= pow(2.0, exposure);
      
      // Luminance
      color.rgb += vec3(luminance);
      
      // Contrast
      color.rgb = mix(vec3(0.5), color.rgb, contrast);
      
      // Saturation
      float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
      color.rgb = mix(vec3(gray), color.rgb, saturation);
      
      gl_FragColor = color;
    }
  `,
};

export const glowShader = {
  vertex: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragment: `
    uniform sampler2D texture1;
    uniform float intensity;
    uniform float radius;
    uniform float threshold;
    varying vec2 vUv;
    
    void main() {
      vec4 color = texture2D(texture1, vUv);
      float brightness = dot(color.rgb, vec3(0.299, 0.587, 0.114));
      
      if (brightness > threshold) {
        vec3 glow = vec3(0.0);
        for (float i = -radius; i <= radius; i += 1.0) {
          for (float j = -radius; j <= radius; j += 1.0) {
            vec2 offset = vec2(i, j) / 1024.0;
            glow += texture2D(texture1, vUv + offset).rgb * intensity;
          }
        }
        color.rgb += glow / (radius * radius * 4.0);
      }
      
      gl_FragColor = color;
    }
  `,
};

export const displacementShader = {
  vertex: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragment: `
    uniform sampler2D texture1;
    uniform sampler2D displacement;
    uniform float amount;
    varying vec2 vUv;
    
    void main() {
      vec2 disp = texture2D(displacement, vUv).xy * 2.0 - 1.0;
      vec2 uv = vUv + disp * amount;
      vec4 color = texture2D(texture1, uv);
      gl_FragColor = color;
    }
  `,
};
