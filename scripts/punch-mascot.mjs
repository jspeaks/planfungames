import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC =
  "/Users/jspeaks/dev/plan-fun-games-mascot/grok/design/character/celebrating.jpg";
const OUT_DIR = path.resolve("public");

const BG = [230, 215, 175];
const OUTER_TOL = 38;

const distBg = (r, g, b) =>
  Math.hypot(r - BG[0], g - BG[1], b - BG[2]);
const luma = (r, g, b) => 0.2126 * r + 0.7152 * g + 0.0722 * b;
const isOuterCream = (r, g, b) => distBg(r, g, b) <= OUTER_TOL;
const isDark = (r, g, b) => luma(r, g, b) < 85;
const isOrange = (r, g, b) =>
  r > 160 && g > 80 && g < 200 && b < 100 && r > g + 20 && g > b;
const isPink = (r, g, b) =>
  r > 180 && g > 80 && g < 140 && b > 70 && b < 130 && r - g > 40;

const { data, info } = await sharp(SRC)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height } = info;
const n = width * height;
const rgba = new Uint8ClampedArray(data);
const pix = (p) => {
  const i = p * 4;
  return [rgba[i], rgba[i + 1], rgba[i + 2]];
};

const outer = new Uint8Array(n);
const oq = [];
const tryOuter = (x, y) => {
  if (x < 0 || y < 0 || x >= width || y >= height) return;
  const p = y * width + x;
  if (outer[p]) return;
  const [r, g, b] = pix(p);
  if (!isOuterCream(r, g, b)) return;
  outer[p] = 1;
  oq.push(p);
};
for (let x = 0; x < width; x++) {
  tryOuter(x, 0);
  tryOuter(x, height - 1);
}
for (let y = 0; y < height; y++) {
  tryOuter(0, y);
  tryOuter(width - 1, y);
}
for (let i = 0; i < oq.length; i++) {
  const p = oq[i];
  const x = p % width;
  const y = (p / width) | 0;
  tryOuter(x - 1, y);
  tryOuter(x + 1, y);
  tryOuter(x, y - 1);
  tryOuter(x, y + 1);
}

const orangeSeen = new Uint8Array(n);
let ballCells = [];
for (let s = 0; s < n; s++) {
  if (orangeSeen[s] || outer[s]) continue;
  const [r, g, b] = pix(s);
  if (!isOrange(r, g, b)) continue;
  const cells = [];
  const st = [s];
  orangeSeen[s] = 1;
  while (st.length) {
    const p = st.pop();
    cells.push(p);
    const x = p % width;
    const y = (p / width) | 0;
    for (const np of [p - 1, p + 1, p - width, p + width]) {
      if (np < 0 || np >= n) continue;
      const nx = np % width;
      const ny = (np / width) | 0;
      if (Math.abs(nx - x) + Math.abs(ny - y) !== 1) continue;
      if (orangeSeen[np] || outer[np]) continue;
      const [nr, ng, nb] = pix(np);
      if (!isOrange(nr, ng, nb)) continue;
      orangeSeen[np] = 1;
      st.push(np);
    }
  }
  if (cells.length > ballCells.length) ballCells = cells;
}

const ball = new Uint8Array(n);
let bx = 0;
let by = 0;
for (const p of ballCells) {
  ball[p] = 1;
  bx += p % width;
  by += (p / width) | 0;
}
const ballCx = bx / ballCells.length;
const ballCy = by / ballCells.length;
const radii = ballCells.map((p) =>
  Math.hypot((p % width) - ballCx, ((p / width) | 0) - ballCy),
);
radii.sort((a, b) => a - b);
const ballR = radii[(radii.length * 0.9) | 0];

const nearBall = new Uint8Array(n);
for (let p = 0; p < n; p++) {
  const x = p % width;
  const y = (p / width) | 0;
  if (Math.hypot(x - ballCx, y - ballCy) <= ballR + 6) nearBall[p] = 1;
}

const darkSeen = new Uint8Array(n);
const holes = new Uint8Array(n);
const reports = [];

for (let s = 0; s < n; s++) {
  if (darkSeen[s] || !nearBall[s] || outer[s]) continue;
  const [r, g, b] = pix(s);
  if (!isDark(r, g, b)) continue;

  const cells = [];
  const st = [s];
  darkSeen[s] = 1;
  let minX = width;
  let minY = height;
  let maxX = 0;
  let maxY = 0;
  while (st.length) {
    const p = st.pop();
    cells.push(p);
    const x = p % width;
    const y = (p / width) | 0;
    if (x < minX) minX = x;
    if (y < minY) minY = y;
    if (x > maxX) maxX = x;
    if (y > maxY) maxY = y;
    for (const np of [p - 1, p + 1, p - width, p + width]) {
      if (np < 0 || np >= n) continue;
      const nx = np % width;
      const ny = (np / width) | 0;
      if (Math.abs(nx - x) + Math.abs(ny - y) !== 1) continue;
      if (darkSeen[np] || outer[np] || !nearBall[np]) continue;
      const [nr, ng, nb] = pix(np);
      if (!isDark(nr, ng, nb)) continue;
      darkSeen[np] = 1;
      st.push(np);
    }
  }

  const bw = maxX - minX + 1;
  const bh = maxY - minY + 1;
  if (cells.length < 40 || bw < 12 || bh < 12 || bw > 140 || bh > 140) continue;

  const pad = 1;
  const x0 = Math.max(0, minX - pad);
  const y0 = Math.max(0, minY - pad);
  const x1 = Math.min(width - 1, maxX + pad);
  const y1 = Math.min(height - 1, maxY + pad);
  const inDark = new Set(cells);
  const reached = new Set();
  const fq = [];
  const seed = (x, y) => {
    const p = y * width + x;
    if (reached.has(p) || inDark.has(p)) return;
    reached.add(p);
    fq.push(p);
  };
  for (let x = x0; x <= x1; x++) {
    seed(x, y0);
    seed(x, y1);
  }
  for (let y = y0; y <= y1; y++) {
    seed(x0, y);
    seed(x1, y);
  }
  for (let i = 0; i < fq.length; i++) {
    const p = fq[i];
    const x = p % width;
    const y = (p / width) | 0;
    for (const [nx, ny] of [
      [x - 1, y],
      [x + 1, y],
      [x, y - 1],
      [x, y + 1],
    ]) {
      if (nx < x0 || ny < y0 || nx > x1 || ny > y1) continue;
      const np = ny * width + nx;
      if (reached.has(np) || inDark.has(np)) continue;
      reached.add(np);
      fq.push(np);
    }
  }

  const interior = [];
  let pinkHits = 0;
  for (let y = y0; y <= y1; y++) {
    for (let x = x0; x <= x1; x++) {
      const p = y * width + x;
      if (inDark.has(p) || reached.has(p)) continue;
      interior.push(p);
      const [ir, ig, ib] = pix(p);
      if (isPink(ir, ig, ib)) pinkHits++;
    }
  }

  const area = interior.length;
  const aspect = bw / bh;
  const cx = (minX + maxX) / 2;
  const cy = (minY + maxY) / 2;
  const distToBall = Math.hypot(cx - ballCx, cy - ballCy);
  const fillRatio = area / (bw * bh);
  const holeLike =
    area >= 40 &&
    area <= 2000 &&
    aspect > 0.4 &&
    aspect < 2.4 &&
    fillRatio > 0.15 &&
    fillRatio < 0.92 &&
    distToBall < ballR * 1.05 &&
    distToBall > ballR * 0.2 &&
    pinkHits < Math.max(8, area * 0.05) &&
    cells.length < 2800;

  reports.push({
    dark: cells.length,
    area,
    cx: cx | 0,
    cy: cy | 0,
    bw,
    bh,
    aspect: +aspect.toFixed(2),
    fill: +fillRatio.toFixed(2),
    dR: +((distToBall / ballR).toFixed(2)),
    pink: pinkHits,
    holeLike,
  });

  if (holeLike) {
    for (const p of interior) holes[p] = 1;
  }
}

const dilated = new Uint8Array(holes);
for (let p = 0; p < n; p++) {
  if (!holes[p]) continue;
  const x = p % width;
  const y = (p / width) | 0;
  for (let dy = -1; dy <= 1; dy++) {
    for (let dx = -1; dx <= 1; dx++) {
      const xx = x + dx;
      const yy = y + dy;
      if (xx < 0 || yy < 0 || xx >= width || yy >= height) continue;
      const np = yy * width + xx;
      if (outer[np]) continue;
      const [nr, ng, nb] = pix(np);
      if (isDark(nr, ng, nb)) continue;
      dilated[np] = 1;
    }
  }
}
holes.set(dilated);

console.log({
  outer: outer.reduce((a, b) => a + b, 0),
  ball: ballCells.length,
  ballCx: ballCx | 0,
  ballCy: ballCy | 0,
  ballR: ballR | 0,
  holePx: holes.reduce((a, b) => a + b, 0),
  holeCount: reports.filter((r) => r.holeLike).length,
});
console.table(reports.sort((a, b) => b.area - a.area));

for (let p = 0; p < n; p++) {
  if (outer[p] || holes[p]) rgba[p * 4 + 3] = 0;
}

await mkdir(OUT_DIR, { recursive: true });

const pipeline = sharp(Buffer.from(rgba), {
  raw: { width, height, channels: 4 },
})
  .trim({ threshold: 0 })
  .resize({
    width: 512,
    height: 512,
    fit: "inside",
    withoutEnlargement: true,
  });

const pngPath = path.join(OUT_DIR, "mascot-celebrating.png");
const webpPath = path.join(OUT_DIR, "mascot-celebrating.webp");

await pipeline
  .clone()
  .png({ compressionLevel: 9, adaptiveFiltering: true, palette: true })
  .toFile(pngPath);
await pipeline
  .clone()
  .webp({ quality: 80, alphaQuality: 90, effort: 6 })
  .toFile(webpPath);

const pngMeta = await sharp(pngPath).metadata();
const webpMeta = await sharp(webpPath).metadata();
console.log("png", pngMeta.width, pngMeta.height, pngMeta.size);
console.log("webp", webpMeta.width, webpMeta.height, webpMeta.size);
