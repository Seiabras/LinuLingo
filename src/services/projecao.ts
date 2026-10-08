import { MAP_W } from '@/data/mapa-mundi';

/**
 * A projeção Natural Earth I do mapa-múndi, igual à de scripts/projecao.mjs (que gerou os contornos):
 * longitude e latitude viram x e y no mesmo sistema do SVG do mapa (largura MAP_W).
 */
function project(lon: number, lat: number): [number, number] {
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
const S = MAP_W / (2 * X_MAX);

export function lonLatParaMapa(lon: number, lat: number): { x: number; y: number } {
  const [x, y] = project(lon, lat);
  return { x: (x + X_MAX) * S, y: (Y_MAX - y) * S };
}
