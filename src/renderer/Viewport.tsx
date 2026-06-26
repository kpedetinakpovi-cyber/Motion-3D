import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import type { Timeline } from '../core/Timeline';

type ViewportProps = {
  timeline: Timeline;
  time: number;
};

export default function Viewport({ timeline, time }: ViewportProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const reqRef = useRef<number | null>(null);

  useEffect(() => {
    const width = 800;
    const height = 450;
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.OrthographicCamera(0, width, height, 0, -1000, 1000);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    rendererRef.current = renderer;
    renderer.setSize(width, height);
    renderer.setClearColor(0x111111);
    renderer.outputEncoding = THREE.sRGBEncoding;

    // Add lights
    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(400, 225, 100);
    scene.add(light);

    // Demo mesh
    const planeGeo = new THREE.PlaneGeometry(200, 100);
    const material = new THREE.MeshPhongMaterial({ color: 0xff0033 });
    const mesh = new THREE.Mesh(planeGeo, material);
    mesh.position.set(400, 225, 0);
    scene.add(mesh);

    if (mountRef.current) {
      mountRef.current.innerHTML = '';
      mountRef.current.appendChild(renderer.domElement);
    }

    function renderLoop() {
      if (timeline.tracks.length > 0) {
        const frame = timeline.renderFrame(time)[0];
        if (frame) {
          const px = frame['p4_positionX'] ?? 400;
          const py = frame['p5_positionY'] ?? 225;
          const sx = ((frame['p7_scaleX'] ?? 100) / 100);
          const sy = ((frame['p8_scaleY'] ?? 100) / 100);
          const rot = ((frame['p10_rotation'] ?? 0) * Math.PI) / 180;
          const opacity = (frame['p13_opacity'] ?? 100) / 100;
          mesh.position.set(px, height - py, 0);
          mesh.scale.set(sx * 2, sy * 2, 1);
          mesh.rotation.z = rot;
          (material as THREE.MeshPhongMaterial).opacity = opacity;
          (material as THREE.MeshPhongMaterial).transparent = opacity < 1;
        }
      }

      renderer.render(scene, camera);
      reqRef.current = requestAnimationFrame(renderLoop);
    }

    reqRef.current = requestAnimationFrame(renderLoop);

    return () => {
      if (reqRef.current) cancelAnimationFrame(reqRef.current);
      renderer.dispose();
      planeGeo.dispose();
      material.dispose();
    };
  }, [timeline, time]);

  return <div ref={mountRef} style={{ width: 800, height: 450 }} />;
}
