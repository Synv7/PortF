// Native/local shader background (no iframe)
const shaderCanvas = document.getElementById('shaderCanvas');
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const gl = shaderCanvas.getContext('webgl', { antialias: false, alpha: true, premultipliedAlpha: false });

function glResize() {
  if (!gl) return;
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const w = Math.floor(window.innerWidth * dpr);
  const h = Math.floor(window.innerHeight * dpr);
  if (shaderCanvas.width !== w || shaderCanvas.height !== h) {
    shaderCanvas.width = w;
    shaderCanvas.height = h;
    shaderCanvas.style.width = window.innerWidth + 'px';
    shaderCanvas.style.height = window.innerHeight + 'px';
    gl.viewport(0, 0, w, h);
  }
}

// Minimal ShaderToy-style uniforms (native runner)
const vsrc = `
  attribute vec2 aPos;
  void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`;

// A lightweight, brand-friendly animated field.
// Tuned to stay subtle behind glass UI.
const fsrc = `
  precision highp float;
  uniform vec2 uRes;
  uniform float uTime;
  uniform float uScroll;
  uniform vec2 uMouse;

  // Hash / noise
  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }
  float noise(vec2 p){
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f*f*(3.0-2.0*f);
    return mix(a, b, u.x) + (c - a)*u.y*(1.0-u.x) + (d - b)*u.x*u.y;
  }

  float fbm(vec2 p){
    float v = 0.0;
    float a = 0.55;
    for(int i=0;i<6;i++){
      v += a * noise(p);
      p = mat2(1.6, -1.2, 1.2, 1.6) * p; // rotate/scale for more motion
      a *= 0.52;
    }
    return v;
  }

  vec3 palette(float t){
    // blue -> mint -> violet cycling
    vec3 a = vec3(0.06, 0.08, 0.12);
    vec3 b = vec3(0.32, 0.62, 0.95);
    vec3 c = vec3(0.55, 0.98, 0.84);
    vec3 d = vec3(0.72, 0.46, 0.98);
    float k = 0.5 + 0.5*sin(6.28318*t);
    float m = 0.5 + 0.5*sin(6.28318*(t+0.33));
    return mix(a, mix(mix(b,c,k), d, m), 0.85);
  }

  void main(){
    vec2 uv = gl_FragCoord.xy / uRes;
    vec2 p = uv * 2.0 - 1.0;
    p.x *= uRes.x / uRes.y;

    // Normalize mouse to -1..1 (window listener provides pixels in canvas space)
    vec2 m = (uMouse / uRes) * 2.0 - 1.0;
    m.x *= uRes.x / uRes.y;

    // More active motion: time + scroll + mouse warp
    float s = uScroll;
    float t = uTime;

    vec2 q = p;
    q += 0.18 * vec2(
      sin(t*0.55 + p.y*2.2) + 0.35*sin(t*1.15 + p.y*5.2),
      cos(t*0.48 + p.x*2.0) + 0.30*cos(t*1.05 + p.x*4.8)
    );
    q += vec2(0.0, -0.55) * s;
    q += 0.10 * (p - m) / (0.35 + length(p - m));

    // Layered fields
    float n1 = fbm(q*1.75 + t*0.18);
    float n2 = fbm(q*3.10 - t*0.14);
    float n3 = fbm(q*5.20 + vec2(0.0, t*0.10));

    // Ridges + moving scanlines for visibility
    float ridges = 1.0 - abs(2.0*n2 - 1.0);
    ridges = pow(clamp(ridges, 0.0, 1.0), 2.6);

    float lines = 0.5 + 0.5*sin(12.0*(q.x + 0.35*q.y) + t*1.2);
    lines *= 0.35 + 0.65*pow(0.5 + 0.5*sin(10.0*q.y - t*1.1), 2.0);

    // Brighter energetic blobs
    float d1 = length(p - vec2(-0.45, 0.35 + 0.22*sin(t*0.65)));
    float d2 = length(p - vec2( 0.55, -0.25 + 0.18*cos(t*0.55)));
    float d3 = length(p - vec2( 0.10,  0.10 + 0.20*sin(t*0.35)));
    float glow = 0.55/(d1*d1 + 0.10) + 0.40/(d2*d2 + 0.14) + 0.26/(d3*d3 + 0.18);

    // Color + energy mix
    vec3 base = vec3(0.03, 0.04, 0.06);
    float cyc = fract(0.08*t + 0.10*s);
    vec3 pal = palette(cyc + 0.20*n1);

    float energy = 0.55*n1 + 0.35*ridges + 0.25*n3 + 0.22*lines;
    vec3 col = mix(base, pal, clamp(energy, 0.0, 1.0));
    col += glow * (0.10 + 0.06*sin(t*0.8));

    // Vignette
    float vig = smoothstep(1.35, 0.18, length(p));
    col *= vig;

    // Push contrast for visibility
    col = pow(col, vec3(0.92));

    gl_FragColor = vec4(col, 1.0);
  }
`;

function compile(type, src) {
  const sh = gl.createShader(type);
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(sh));
    throw new Error('Shader compile failed');
  }
  return sh;
}

let prog, uRes, uTime, uScroll, uMouse;
if (gl) {
  prog = gl.createProgram();
  gl.attachShader(prog, compile(gl.VERTEX_SHADER, vsrc));
  gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, fsrc));
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    console.error(gl.getProgramInfoLog(prog));
    throw new Error('Program link failed');
  }
  gl.useProgram(prog);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    -1, -1,  1, -1,  -1,  1,
    -1,  1,  1, -1,   1,  1
  ]), gl.STATIC_DRAW);

  const aPos = gl.getAttribLocation(prog, 'aPos');
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

  uRes = gl.getUniformLocation(prog, 'uRes');
  uTime = gl.getUniformLocation(prog, 'uTime');
  uScroll = gl.getUniformLocation(prog, 'uScroll');
  uMouse = gl.getUniformLocation(prog, 'uMouse');

  gl.disable(gl.DEPTH_TEST);
  gl.disable(gl.CULL_FACE);
}

function getScroll01() {
  const max = (document.documentElement.scrollHeight - window.innerHeight) || 1;
  return Math.max(0, Math.min(1, (window.scrollY || 0) / max));
}

// Track mouse globally; canvas ignores pointer events but we can still animate responsively
let mouseX = shaderCanvas.width * 0.5;
let mouseY = shaderCanvas.height * 0.5;
window.addEventListener('mousemove', (e) => {
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  mouseX = e.clientX * dpr;
  // bottom-left origin in shader space
  mouseY = (window.innerHeight - e.clientY) * dpr;
}, { passive: true });

let t0 = performance.now();
function draw(now) {
  if (!gl) return;
  glResize();
  const time = (now - t0) * 0.001;
  gl.uniform2f(uRes, shaderCanvas.width, shaderCanvas.height);
  gl.uniform1f(uTime, time);
  gl.uniform1f(uScroll, getScroll01());
  // Mouse in canvas pixel coords (even though canvas ignores pointer events)
  gl.uniform2f(uMouse, mouseX, mouseY);
  gl.drawArrays(gl.TRIANGLES, 0, 6);
  if (!prefersReduced) requestAnimationFrame(draw);
}

window.addEventListener('resize', () => {
  glResize();
  if (prefersReduced) requestAnimationFrame(draw);
}, { passive: true });

// Render once for reduced motion; animate otherwise
requestAnimationFrame(draw);

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll progress
const scrollBar = document.getElementById('scrollBar');
function updateProgress() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
  const max = (document.documentElement.scrollHeight - window.innerHeight) || 1;
  const pct = Math.max(0, Math.min(1, scrollTop / max));
  scrollBar.style.width = (pct * 100).toFixed(2) + '%';
}
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

// Scroll-spy: highlight active nav link by section
const nav = document.querySelector('header nav');
const links = Array.from(nav.querySelectorAll('a[href^="#"]'));
const sections = links
  .map(a => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);

function setActive(id) {
  links.forEach(a => {
    const isActive = a.getAttribute('href') === `#${id}`;
    a.classList.toggle('active', isActive);
  });
}

const io = new IntersectionObserver((entries) => {
  // Prefer the most visible intersecting section
  const visible = entries
    .filter(e => e.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (visible?.target?.id) setActive(visible.target.id);
}, { threshold: [0.22, 0.35, 0.5, 0.65], rootMargin: '-20% 0px -55% 0px' });

sections.forEach(s => io.observe(s));

// Soft reveal on enter
const revealEls = document.querySelectorAll('.reveal');
const revealIO = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) e.target.classList.add('in');
  }
}, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });
revealEls.forEach(el => revealIO.observe(el));

// Notes:
// - Background is now a native, local WebGL shader (no iframe).

// Mobile nav toggle behavior
(() => {
  const navEl = document.querySelector('.nav');
  const menuToggle = document.querySelector('.menuToggle');
  const primaryNav = document.getElementById('primary-nav');
  if (!navEl || !menuToggle || !primaryNav) return;

  menuToggle.addEventListener('click', (e) => {
    const opened = navEl.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', opened ? 'true' : 'false');
  });

  // Close menu when a nav link is clicked (mobile)
  primaryNav.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', () => {
      if (navEl.classList.contains('open')) {
        navEl.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!navEl.contains(e.target) && navEl.classList.contains('open')) {
      navEl.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navEl.classList.contains('open')) {
      navEl.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
})();
