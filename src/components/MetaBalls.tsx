import { useEffect, useRef } from "react";
import {
  Renderer,
  Program,
  Mesh,
  Triangle,
  Transform,
  Vec3,
  Camera,
} from "ogl";

import "./MetaBalls.css";

function parseHexColor(hex: string): [number, number, number] {
  const c = hex.replace("#", "");
  const r = parseInt(c.substring(0, 2), 16) / 255;
  const g = parseInt(c.substring(2, 4), 16) / 255;
  const b = parseInt(c.substring(4, 6), 16) / 255;
  return [r, g, b];
}

function fract(x: number): number {
  return x - Math.floor(x);
}

function hash31(p: number): [number, number, number] {
  let r = [p * 0.1031, p * 0.1030, p * 0.0973].map(fract);
  const r_yzx = [r[1], r[2], r[0]];
  const dotVal = r[0] * (r_yzx[0] + 33.33) +
    r[1] * (r_yzx[1] + 33.33) +
    r[2] * (r_yzx[2] + 33.33);
  for (let i = 0; i < 3; i++) {
    r[i] = fract(r[i] + dotVal);
  }
  return r as [number, number, number];
}

const vertex = `#version 300 es
precision highp float;
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragment = `#version 300 es
precision highp float;
uniform vec3 iResolution;
uniform float iTime;
uniform vec3 iMouse;
uniform vec3 iColor;
uniform vec3 iCursorColor;
uniform float iAnimationSize;
uniform int iBallCount;
uniform float iCursorBallSize;
uniform vec3 iMetaBalls[50];
uniform float iClumpFactor;
uniform bool enableTransparency;
uniform float iCursorInfluence;
out vec4 outColor;

float getMetaBallValue(vec2 c, float r, vec2 p) {
  vec2 d = p - c;
  float dist2 = dot(d, d);
  return (r * r) / max(dist2, 0.01);
}

void main() {
  vec2 fc = gl_FragCoord.xy;
  float scale = iAnimationSize / iResolution.y;
  vec2 coord = (fc - iResolution.xy * 0.5) * scale;
  vec2 mouseW = (iMouse.xy - iResolution.xy * 0.5) * scale;
  
  float m1 = 0.0;
  float cursorInfluence = 0.0;
  
  // Calculate metaballs with cursor influence
  for (int i = 0; i < 50; i++) {
    if (i >= iBallCount) break;
    
    vec2 ballPos = iMetaBalls[i].xy;
    float ballRadius = iMetaBalls[i].z;
    
    // Calculate distance to cursor
    float distToCursor = length(ballPos - mouseW);
    float influence = exp(-distToCursor * 0.1) * iCursorInfluence;
    
    // Attract balls towards cursor
    vec2 attractedPos = mix(ballPos, mouseW, influence * 0.3);
    float attractedRadius = ballRadius * (1.0 + influence * 0.5);
    
    float ballValue = getMetaBallValue(attractedPos, attractedRadius, coord);
    m1 += ballValue;
    
    // Add cursor influence for color mixing
    cursorInfluence += influence * ballValue;
  }
  
  // Cursor metaball with enhanced size based on movement
  float m2 = getMetaBallValue(mouseW, iCursorBallSize, coord);
  
  float total = m1 + m2;
  
  // Dynamic threshold based on cursor proximity
  float threshold = 0.6 + sin(iTime * 2.0) * 0.1;
  float f = smoothstep(threshold - 0.2, threshold + 0.2, total);
  
  vec3 cFinal = vec3(0.0);
  if (total > 0.0) {
    float alpha1 = m1 / (total + 0.001);
    float alpha2 = m2 / (total + 0.001);
    float cursorMix = cursorInfluence / (total + 0.001);
    
    // Enhanced color mixing with cursor influence
    vec3 baseColor = mix(iColor, iCursorColor, cursorMix);
    cFinal = baseColor * alpha1 + iCursorColor * alpha2;
  }
  
  // Enhanced brightness and glow effect
  cFinal *= 1.8;
  cFinal += vec3(0.1, 0.05, 0.0) * f; // Warm glow
  
  float alpha = enableTransparency ? f * 0.9 : 1.0;
  outColor = vec4(cFinal, alpha);
}
`;

interface MetaBallsProps {
  className?: string;
  color?: string;
  speed?: number;
  enableMouseInteraction?: boolean;
  hoverSmoothness?: number;
  animationSize?: number;
  ballCount?: number;
  clumpFactor?: number;
  cursorBallSize?: number;
  cursorBallColor?: string;
  enableTransparency?: boolean;
}

const MetaBalls: React.FC<MetaBallsProps> = ({
  className = "",
  color = "#F9C416",
  speed = 0.4,
  enableMouseInteraction = true,
  hoverSmoothness = 0.1,
  animationSize = 40,
  ballCount = 20,
  clumpFactor = 1.2,
  cursorBallSize = 4,
  cursorBallColor = "#FFD700",
  enableTransparency = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const renderer = new Renderer({ 
      dpr, 
      alpha: true, 
      premultipliedAlpha: false,
      antialias: true
    });
    const gl = renderer.gl;
    
    // Enable blending for transparency
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.clearColor(0, 0, 0, 0);
    
    container.appendChild(gl.canvas);

    const camera = new Camera(gl, {
      left: -1, right: 1, top: 1, bottom: -1, near: 0.1, far: 10,
    });
    camera.position.z = 1;

    const geometry = new Triangle(gl);
    const [r1, g1, b1] = parseHexColor(color);
    const [r2, g2, b2] = parseHexColor(cursorBallColor);

    const metaBallsUniform: Vec3[] = [];
    for (let i = 0; i < 50; i++) {
      metaBallsUniform.push(new Vec3(0, 0, 0));
    }

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new Vec3(0, 0, 0) },
        iMouse: { value: new Vec3(0, 0, 0) },
        iColor: { value: new Vec3(r1, g1, b1) },
        iCursorColor: { value: new Vec3(r2, g2, b2) },
        iAnimationSize: { value: animationSize },
        iBallCount: { value: ballCount },
        iCursorBallSize: { value: cursorBallSize },
        iMetaBalls: { value: metaBallsUniform },
        iClumpFactor: { value: clumpFactor },
        enableTransparency: { value: enableTransparency },
        iCursorInfluence: { value: 0.5 },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });
    const scene = new Transform();
    mesh.setParent(scene);

    const maxBalls = 50;
    const effectiveBallCount = Math.min(ballCount, maxBalls);
    const ballParams: Array<{
      st: number;
      dtFactor: number;
      baseScale: number;
      toggle: number;
      radius: number;
      offsetX: number;
      offsetY: number;
    }> = [];
    
    // Distribute balls across entire screen area
    for (let i = 0; i < effectiveBallCount; i++) {
      const idx = i + 1;
      const h1 = hash31(idx);
      const st = h1[0] * (2 * Math.PI);
      const dtFactor = 0.05 * Math.PI + h1[1] * (0.3 * Math.PI - 0.05 * Math.PI);
      const baseScale = 15.0 + h1[1] * (35.0 - 15.0); // Larger scale for full coverage
      const toggle = Math.floor(h1[2] * 2.0);
      const radiusVal = 1.5 + h1[2] * (4.0 - 1.5);
      
      // Random offsets to distribute across screen
      const offsetX = (h1[0] - 0.5) * 80; // Spread across width
      const offsetY = (h1[1] - 0.5) * 60; // Spread across height
      
      ballParams.push({ 
        st, 
        dtFactor, 
        baseScale, 
        toggle, 
        radius: radiusVal,
        offsetX,
        offsetY
      });
    }

    const mouseBallPos = { x: 0, y: 0 };
    const targetMousePos = { x: 0, y: 0 };
    let pointerInside = false;
    let mouseVelocity = { x: 0, y: 0 };
    let lastMousePos = { x: 0, y: 0 };

    function resize() {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width * dpr, height * dpr);
      gl.canvas.style.width = width + "px";
      gl.canvas.style.height = height + "px";
      program.uniforms.iResolution.value.set(gl.canvas.width, gl.canvas.height, 0);
    }
    window.addEventListener("resize", resize);
    resize();

    function onPointerMove(e: PointerEvent) {
      if (!enableMouseInteraction) return;
      const rect = container.getBoundingClientRect();
      const px = e.clientX - rect.left;
      const py = e.clientY - rect.top;
      
      const newX = (px / rect.width) * gl.canvas.width;
      const newY = (1 - py / rect.height) * gl.canvas.height;
      
      // Calculate mouse velocity for dynamic cursor size
      mouseVelocity.x = newX - lastMousePos.x;
      mouseVelocity.y = newY - lastMousePos.y;
      lastMousePos.x = newX;
      lastMousePos.y = newY;
      
      targetMousePos.x = newX;
      targetMousePos.y = newY;
    }
    
    function onPointerEnter() {
      if (!enableMouseInteraction) return;
      pointerInside = true;
    }
    
    function onPointerLeave() {
      if (!enableMouseInteraction) return;
      pointerInside = false;
    }
    
    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerenter", onPointerEnter);
    container.addEventListener("pointerleave", onPointerLeave);

    const startTime = performance.now();
    let animationFrameId: number;
    
    function update(t: number) {
      animationFrameId = requestAnimationFrame(update);
      const elapsed = (t - startTime) * 0.001;
      program.uniforms.iTime.value = elapsed;

      // Update metaballs positions with full screen coverage
      for (let i = 0; i < effectiveBallCount; i++) {
        const p = ballParams[i];
        const dt = elapsed * speed * p.dtFactor;
        const th = p.st + dt;
        
        // Create orbital motion with offsets for full coverage
        const x = Math.cos(th) * p.baseScale * clumpFactor + p.offsetX;
        const y = Math.sin(th + dt * p.toggle) * p.baseScale * clumpFactor + p.offsetY;
        
        // Add some variation in movement patterns
        const variation = Math.sin(elapsed * 0.5 + i) * 5;
        const posX = x + variation;
        const posY = y + variation * 0.7;
        
        metaBallsUniform[i].set(posX, posY, p.radius);
      }

      // Smooth mouse following with enhanced responsiveness
      const smoothness = pointerInside ? hoverSmoothness * 2 : hoverSmoothness;
      mouseBallPos.x += (targetMousePos.x - mouseBallPos.x) * smoothness;
      mouseBallPos.y += (targetMousePos.y - mouseBallPos.y) * smoothness;
      
      // Dynamic cursor size based on velocity
      const velocity = Math.sqrt(mouseVelocity.x * mouseVelocity.x + mouseVelocity.y * mouseVelocity.y);
      const dynamicSize = cursorBallSize + Math.min(velocity * 0.1, 3);
      program.uniforms.iCursorBallSize.value = dynamicSize;
      
      // Enhanced cursor influence when moving
      const influence = pointerInside ? 0.8 + Math.min(velocity * 0.01, 0.4) : 0.2;
      program.uniforms.iCursorInfluence.value = influence;
      
      program.uniforms.iMouse.value.set(mouseBallPos.x, mouseBallPos.y, 0);

      // Decay mouse velocity
      mouseVelocity.x *= 0.9;
      mouseVelocity.y *= 0.9;

      // Clear and render
      gl.clear(gl.COLOR_BUFFER_BIT);
      renderer.render({ scene, camera });
    }
    animationFrameId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerenter", onPointerEnter);
      container.removeEventListener("pointerleave", onPointerLeave);
      if (container.contains(gl.canvas)) {
        container.removeChild(gl.canvas);
      }
      const loseContext = gl.getExtension("WEBGL_lose_context");
      if (loseContext) {
        loseContext.loseContext();
      }
    };
  }, [
    color,
    cursorBallColor,
    speed,
    enableMouseInteraction,
    hoverSmoothness,
    animationSize,
    ballCount,
    clumpFactor,
    cursorBallSize,
    enableTransparency,
  ]);

  return <div ref={containerRef} className={`metaballs-container ${className}`} />;
};

export default MetaBalls;