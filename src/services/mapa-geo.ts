/** Geometria do mapa: subdivisões e enquadramentos (funções puras, testáveis). */
export type Box = { x: number; y: number; w: number; h: number };

export interface SubShape {
  /** Código ISO 3166-2 ('' quando o Natural Earth traz uma divisão sem código ISO atual) */
  code: string;
  /** Nome do Natural Earth (usado quando não há nome ISO) */
  name: string;
  d: string;
  cx: number;
  cy: number;
  area: number;
  /** Unidade ISO maior que contém esta (ex.: RS-VO para os distritos da Voivodina) */
  parent: string;
  note?: string;
}

/** Contornos do Natural Earth ([código, nome, d, cx, cy, área, unidade acima, nota?]) → objetos. */
export function parseSubdivisions(json: string): SubShape[] {
  return (JSON.parse(json) as [string, string, string, number, number, number, string, string?][]).map(([code, name, d, cx, cy, area, parent, note]) => ({
    code,
    name,
    d,
    cx,
    cy,
    area,
    parent,
    ...(note ? { note } : {}),
  }));
}

/** Caixas dos anéis de um caminho SVG (M/L absolutos ou m/l relativos, fechados com Z). */
export function ringBoxes(d: string): Box[] {
  const out: Box[] = [];
  for (const part of d.split(/(?=[Mm])/)) {
    const tokens = part.match(/[MmLlZz]|-?\d*\.?\d+(?:e-?\d+)?/g);
    if (!tokens) continue;
    let cmd = 'M';
    let x = 0;
    let y = 0;
    let first = true;
    let [x0, x1, y0, y1] = [Infinity, -Infinity, Infinity, -Infinity];
    for (let i = 0; i < tokens.length; i++) {
      const t = tokens[i];
      if (/[A-Za-z]/.test(t)) {
        cmd = t;
        continue;
      }
      const a = parseFloat(t);
      const b = parseFloat(tokens[++i]);
      const rel = (cmd === 'l' || cmd === 'm') && !first;
      x = rel ? x + a : a;
      y = rel ? y + b : b;
      first = false;
      [x0, x1, y0, y1] = [Math.min(x0, x), Math.max(x1, x), Math.min(y0, y), Math.max(y1, y)];
    }
    if (x0 <= x1) out.push({ x: x0, y: y0, w: x1 - x0, h: y1 - y0 });
  }
  return out;
}

/**
 * Enquadramento do país: a caixa do maior pedaço, mais os pedaços próximos dele.
 * Ilhas e territórios longe (Alasca, Havaí, a ponta da Rússia do outro lado do mapa) ficam de fora,
 * como faz o Google Maps ao mostrar um país.
 */
export function focusBox(boxes: Box[], reach = 0.6, minReach = 0): Box | null {
  if (!boxes.length) return null;
  const main = boxes.reduce((a, b) => (b.w * b.h > a.w * a.h ? b : a));
  const mx = Math.max(Math.max(main.w, main.h, 2) * reach, minReach);
  let [x0, y0, x1, y1] = [main.x, main.y, main.x + main.w, main.y + main.h];
  for (const b of boxes) {
    const near = b.x < main.x + main.w + mx && b.x + b.w > main.x - mx && b.y < main.y + main.h + mx && b.y + b.h > main.y - mx;
    if (near) [x0, y0, x1, y1] = [Math.min(x0, b.x), Math.min(y0, b.y), Math.max(x1, b.x + b.w), Math.max(y1, b.y + b.h)];
  }
  return { x: x0, y: y0, w: x1 - x0, h: y1 - y0 };
}

/** Caixa (com margem) que mostra a caixa pedida inteira na proporção da tela. */
export function fitBox(b: Box, aspect: number, pad = 0.12): Box {
  const w0 = Math.max(b.w, 0.4) * (1 + 2 * pad);
  const h0 = Math.max(b.h, 0.4) * (1 + 2 * pad);
  const w = Math.max(w0, h0 / aspect);
  const h = w * aspect;
  return { x: b.x + b.w / 2 - w / 2, y: b.y + b.h / 2 - h / 2, w, h };
}
