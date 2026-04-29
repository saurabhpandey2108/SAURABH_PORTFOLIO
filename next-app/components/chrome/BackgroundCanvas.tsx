"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x06070b, 0.02);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    /* ---------- particles ---------- */
    const COUNT = window.innerWidth < 760 ? 90 : 180;
    const RANGE = 18;

    const positions = new Float32Array(COUNT * 3);
    const velocities: { x: number; y: number; z: number }[] = [];

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * RANGE * 2;
      positions[i * 3 + 1] = (Math.random() - 0.5) * RANGE * 1.4;
      positions[i * 3 + 2] = (Math.random() - 0.5) * RANGE * 0.8;
      velocities.push({
        x: (Math.random() - 0.5) * 0.008,
        y: (Math.random() - 0.5) * 0.008,
        z: (Math.random() - 0.5) * 0.008,
      });
    }

    function makeDotTexture() {
      const c = document.createElement("canvas");
      c.width = c.height = 64;
      const ctx = c.getContext("2d")!;
      const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
      g.addColorStop(0, "rgba(79,209,197,1)");
      g.addColorStop(0.4, "rgba(79,209,197,0.6)");
      g.addColorStop(1, "rgba(79,209,197,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(c);
    }

    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.PointsMaterial({
      size: 0.34,
      map: makeDotTexture(),
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: 0x4fd1c5,
    });
    const points = new THREE.Points(pGeo, pMat);
    scene.add(points);

    /* ---------- lines ---------- */
    const lineGeo = new THREE.BufferGeometry();
    const maxLineSegs = COUNT * 6;
    const linePositions = new Float32Array(maxLineSegs * 3);
    const lineColors = new Float32Array(maxLineSegs * 3);
    lineGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage)
    );
    lineGeo.setAttribute(
      "color",
      new THREE.BufferAttribute(lineColors, 3).setUsage(THREE.DynamicDrawUsage)
    );
    const lineMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const lineMesh = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lineMesh);

    /* ---------- decorative wireframe core ---------- */
    const coreGeo = new THREE.IcosahedronGeometry(2.2, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x4fd1c5,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    scene.add(core);

    const ringGeo = new THREE.TorusGeometry(4.5, 0.012, 8, 96);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xfbbf24,
      transparent: true,
      opacity: 0.32,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2.4;
    scene.add(ring);

    /* ---------- mouse + scroll ---------- */
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);

    const onTouchMove = (e: TouchEvent) => {
      if (!e.touches[0]) return;
      mouseX = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    let scrollY = 0;
    const onScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", onScroll);

    /* ---------- resize ---------- */
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    /* ---------- animate ---------- */
    const CONNECT_DIST = 3.4;
    const CONNECT_DIST_SQ = CONNECT_DIST * CONNECT_DIST;

    let raf = 0;
    const animate = () => {
      raf = requestAnimationFrame(animate);

      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      const arr = pGeo.attributes.position.array as Float32Array;

      for (let i = 0; i < COUNT; i++) {
        const ix = i * 3;
        arr[ix] += velocities[i].x;
        arr[ix + 1] += velocities[i].y;
        arr[ix + 2] += velocities[i].z;

        if (Math.abs(arr[ix]) > RANGE) velocities[i].x *= -1;
        if (Math.abs(arr[ix + 1]) > RANGE * 0.7) velocities[i].y *= -1;
        if (Math.abs(arr[ix + 2]) > RANGE * 0.4) velocities[i].z *= -1;
      }
      pGeo.attributes.position.needsUpdate = true;

      let lineIdx = 0;
      for (let i = 0; i < COUNT; i++) {
        const ix = i * 3;
        const x1 = arr[ix];
        const y1 = arr[ix + 1];
        const z1 = arr[ix + 2];
        for (let j = i + 1; j < COUNT; j++) {
          const jx = j * 3;
          const dx = x1 - arr[jx];
          const dy = y1 - arr[jx + 1];
          const dz = z1 - arr[jx + 2];
          const distSq = dx * dx + dy * dy + dz * dz;
          if (distSq < CONNECT_DIST_SQ) {
            const alpha = 1 - distSq / CONNECT_DIST_SQ;
            if (lineIdx < maxLineSegs - 1) {
              const li = lineIdx * 3;
              linePositions[li] = x1;
              linePositions[li + 1] = y1;
              linePositions[li + 2] = z1;
              linePositions[li + 3] = arr[jx];
              linePositions[li + 4] = arr[jx + 1];
              linePositions[li + 5] = arr[jx + 2];
              lineColors[li] = 0.5 * alpha;
              lineColors[li + 1] = 1.0 * alpha;
              lineColors[li + 2] = 0.95 * alpha;
              lineColors[li + 3] = 0.5 * alpha;
              lineColors[li + 4] = 1.0 * alpha;
              lineColors[li + 5] = 0.95 * alpha;
              lineIdx += 2;
            }
          }
        }
      }
      lineGeo.setDrawRange(0, lineIdx);
      lineGeo.attributes.position.needsUpdate = true;
      lineGeo.attributes.color.needsUpdate = true;

      points.rotation.y = targetX * 0.3 + scrollY * 0.0003;
      points.rotation.x = -targetY * 0.2 + scrollY * 0.0002;
      lineMesh.rotation.y = points.rotation.y;
      lineMesh.rotation.x = points.rotation.x;

      core.rotation.y += 0.0015;
      core.rotation.x += 0.001;

      ring.rotation.z += 0.002;

      camera.position.x = targetX * 1.6;
      camera.position.y = targetY * 1.0;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      pGeo.dispose();
      pMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas id="bg-canvas" ref={canvasRef} />;
}
