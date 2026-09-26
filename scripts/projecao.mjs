// Projeção Natural Earth I e simplificação compartilhadas pelos geradores do mapa.
export function project(lon, lat) {
  const l = (lon * Math.PI) / 180;
  const p = (lat * Math.PI) / 180;
  const p2 = p * p;
  const p4 = p2 * p2;
  return [
    l * (0.8707 - 0.131979 * p2 + p4 * (-0.013791 + p4 * (0.003971 * p2 - 0.001529 * p4))),
    p * (1.007226 + p2 * (0.015085 + p4 * (-0.044475 + 0.028874 * p2 - 0.005916 * p4))),
  ];
}
const X_MAX = project(180, 0)[0];
const Y_MAX = project(0, 84)[1];
const Y_MIN = project(0, -58)[1];
export const W = 1000;
const S = W / (2 * X_MAX);
export const H = Math.round((Y_MAX - Y_MIN) * S);
export const toSvg = ([lon, lat]) => {
  const [x, y] = project(lon, lat);
  return [(x + X_MAX) * S, (Y_MAX - y) * S];
};

// Anel fechado (1º ponto = último): divide no ponto mais distante do início e simplifica as duas metades
export function simplifyRing(pts, tol) {
  if (pts.length < 5) return pts;
  let k = 1;
  let best = 0;
  for (let i = 1; i < pts.length - 1; i++) {
    const d = Math.hypot(pts[i][0] - pts[0][0], pts[i][1] - pts[0][1]);
    if (d > best) {
      best = d;
      k = i;
    }
  }
  return [...simplify(pts.slice(0, k + 1), tol).slice(0, -1), ...simplify(pts.slice(k), tol)];
}

// Douglas–Peucker: tira pontos que não mudam o desenho (arquivo leve)
export function simplify(pts, tol) {
  if (pts.length < 4) return pts;
  const keep = new Uint8Array(pts.length);
  keep[0] = keep[pts.length - 1] = 1;
  const stack = [[0, pts.length - 1]];
  while (stack.length) {
    const [a, b] = stack.pop();
    const [ax, ay] = pts[a];
    const [bx, by] = pts[b];
    const dx = bx - ax;
    const dy = by - ay;
    const len = Math.hypot(dx, dy) || 1;
    let far = -1;
    let dmax = tol;
    for (let i = a + 1; i < b; i++) {
      const d = Math.abs(dy * pts[i][0] - dx * pts[i][1] + bx * ay - by * ax) / len;
      if (d > dmax) {
        dmax = d;
        far = i;
      }
    }
    if (far >= 0) {
      keep[far] = 1;
      stack.push([a, far], [far, b]);
    }
  }
  return pts.filter((_, i) => keep[i]);
}
