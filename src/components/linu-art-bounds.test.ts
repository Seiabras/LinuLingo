import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

/**
 * Garante que nada do que o Linu segura na mão passa da área visível do SVG (`viewBox="0 0 120 140"`,
 * `Linu.tsx`) — se passar, o `<Svg>` corta, como aconteceu com a quena e o tabuleiro de xadrez
 * (RESOLVER-COM-PRIORIDADE-14-10.md, item 4, 15/10/2026: "tudo que é segurado pelo Linu é cortado").
 *
 * Não renderiza de verdade (não há DOM/browser nem React aqui): lê o código-fonte de `HeldArt`
 * (`LinuRoupas.tsx`) e extrai as formas de cada `case` (Rect/Circle/Ellipse/Line/Path, com curvas
 * Bézier e arcos elípticos amostrados de verdade, não só os pontos de controle) pra calcular uma
 * caixa, aplicando a mesma composição de transformações que `Linu.tsx` usa pra desenhar o item na mão
 * (`translate(15 113) rotate(-10) scale(1.12)`). Se um `case` novo usar um jeito de gerar `d` que este
 * teste não reconhece, ele falha pedindo pra estender o parser — nunca pula a peça em silêncio.
 *
 * Roupa do corpo, rosto e chapéus (outras pastas de desenho do Linu) ficam de fora por ora: usam
 * padrões de `.map()` mais variados (arrays de tuplas desestruturadas, por exemplo) que precisariam de
 * mais tempo pra cobrir sem gerar falso positivo — não eram o que foi reportado. Dá pra estender este
 * arquivo com o mesmo `checkCases` se um bug parecido aparecer lá.
 */

const VB_W = 120;
const VB_H = 140;
// algumas caixas são conservadoras de propósito (o quadrado inteiro em volta de um círculo onde um
// ponto gerado em tempo de execução sempre cai, por exemplo) e passam perto de 0/120/140 por frações
// de unidade sem o desenho realmente chegar lá — tolerância pequena o bastante pra nunca esconder um
// corte de verdade (os casos que realmente cortavam passavam de 2 a 12 unidades da borda)
const EPSILON = 0.5;

type Pt = { x: number; y: number };
type Op = { kind: 'translate'; x: number; y: number } | { kind: 'rotate'; deg: number } | { kind: 'scale'; s: number };

function parseTransform(attr: string | undefined): Op[] {
  if (!attr) return [];
  const ops: Op[] = [];
  const re = /(translate|rotate|scale)\(([^)]+)\)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(attr))) {
    const nums = m[2].trim().split(/[\s,]+/).map(Number);
    if (m[1] === 'translate') ops.push({ kind: 'translate', x: nums[0], y: nums[1] ?? 0 });
    else if (m[1] === 'rotate') ops.push({ kind: 'rotate', deg: nums[0] }); // só rotação em torno da origem (sem cx,cy) é suportada
    else if (m[1] === 'scale') ops.push({ kind: 'scale', s: nums[0] });
  }
  return ops;
}

/** Aplica a lista de operações a um ponto na ordem do SVG: a de trás pra frente (a mais à direita primeiro). */
function applyOps(p: Pt, ops: Op[]): Pt {
  let r = p;
  for (let i = ops.length - 1; i >= 0; i--) {
    const op = ops[i];
    if (op.kind === 'translate') r = { x: r.x + op.x, y: r.y + op.y };
    else if (op.kind === 'scale') r = { x: r.x * op.s, y: r.y * op.s };
    else {
      const rad = (op.deg * Math.PI) / 180;
      const c = Math.cos(rad), s = Math.sin(rad);
      r = { x: r.x * c - r.y * s, y: r.x * s + r.y * c };
    }
  }
  return r;
}

const ARG_COUNT: Record<string, number> = { M: 2, L: 2, T: 2, H: 1, V: 1, C: 6, S: 4, Q: 4, A: 7, Z: 0 };

/** Amostra uma curva de Bézier quadrática (1 ponto de controle) ou cúbica (2) em alguns pontos de t=0 a 1. */
function sampleBezier(p0: Pt, ctrl: Pt[], p1: Pt): Pt[] {
  const pts: Pt[] = [];
  for (let i = 0; i <= 10; i++) {
    const t = i / 10;
    const u = 1 - t;
    if (ctrl.length === 1) {
      pts.push({ x: u * u * p0.x + 2 * u * t * ctrl[0].x + t * t * p1.x, y: u * u * p0.y + 2 * u * t * ctrl[0].y + t * t * p1.y });
    } else {
      const [c1, c2] = ctrl;
      pts.push({
        x: u ** 3 * p0.x + 3 * u * u * t * c1.x + 3 * u * t * t * c2.x + t ** 3 * p1.x,
        y: u ** 3 * p0.y + 3 * u * u * t * c1.y + 3 * u * t * t * c2.y + t ** 3 * p1.y,
      });
    }
  }
  return pts;
}

/** Amostra um arco elíptico SVG (comando A), convertendo pra parametrização por centro (fórmula da spec do SVG). */
function sampleArc(p0: Pt, rx: number, ry: number, xRotDeg: number, largeArc: boolean, sweep: boolean, p1: Pt): Pt[] {
  if (rx === 0 || ry === 0) return [p0, p1];
  rx = Math.abs(rx); ry = Math.abs(ry);
  const phi = (xRotDeg * Math.PI) / 180;
  const cosPhi = Math.cos(phi), sinPhi = Math.sin(phi);
  const dx2 = (p0.x - p1.x) / 2, dy2 = (p0.y - p1.y) / 2;
  const x1p = cosPhi * dx2 + sinPhi * dy2;
  const y1p = -sinPhi * dx2 + cosPhi * dy2;
  const lambda = (x1p * x1p) / (rx * rx) + (y1p * y1p) / (ry * ry);
  if (lambda > 1) { const s = Math.sqrt(lambda); rx *= s; ry *= s; }
  const sign = largeArc !== sweep ? 1 : -1;
  const num = rx * rx * ry * ry - rx * rx * y1p * y1p - ry * ry * x1p * x1p;
  const den = rx * rx * y1p * y1p + ry * ry * x1p * x1p;
  const co = sign * Math.sqrt(Math.max(0, num / den));
  const cxp = (co * rx * y1p) / ry;
  const cyp = (-co * ry * x1p) / rx;
  const cx = cosPhi * cxp - sinPhi * cyp + (p0.x + p1.x) / 2;
  const cy = sinPhi * cxp + cosPhi * cyp + (p0.y + p1.y) / 2;
  const angle = (ux: number, uy: number, vx: number, vy: number) => {
    const sign2 = ux * vy - uy * vx < 0 ? -1 : 1;
    const dot = Math.max(-1, Math.min(1, (ux * vx + uy * vy) / Math.sqrt((ux * ux + uy * uy) * (vx * vx + vy * vy))));
    return sign2 * Math.acos(dot);
  };
  const theta1 = angle(1, 0, (x1p - cxp) / rx, (y1p - cyp) / ry);
  let dTheta = angle((x1p - cxp) / rx, (y1p - cyp) / ry, (-x1p - cxp) / rx, (-y1p - cyp) / ry);
  if (!sweep && dTheta > 0) dTheta -= 2 * Math.PI;
  if (sweep && dTheta < 0) dTheta += 2 * Math.PI;
  const pts: Pt[] = [];
  for (let i = 0; i <= 12; i++) {
    const t = theta1 + (dTheta * i) / 12;
    pts.push({ x: cx + rx * Math.cos(t) * cosPhi - ry * Math.sin(t) * sinPhi, y: cy + rx * Math.cos(t) * sinPhi + ry * Math.sin(t) * cosPhi });
  }
  return pts;
}

/** Pontos absolutos (de verdade, não os números crus) de um atributo `d` de `<Path>`, com curvas amostradas. */
function pathPoints(d: string): Pt[] {
  const tokens = d.match(/[MLHVCSQTAZ]|-?\d+\.?\d*(?:e-?\d+)?/gi) ?? [];
  const pts: Pt[] = [];
  let i = 0;
  let cx = 0, cy = 0, startX = 0, startY = 0;
  let cmd = '';
  while (i < tokens.length) {
    if (/[MLHVCSQTAZ]/i.test(tokens[i])) cmd = tokens[i++];
    const upper = cmd.toUpperCase();
    const n = ARG_COUNT[upper];
    if (upper === 'Z') {
      cx = startX; cy = startY;
      pts.push({ x: cx, y: cy });
      continue;
    }
    const rel = cmd !== upper;
    const args = tokens.slice(i, i + n).map(Number);
    i += n;
    const p0 = { x: cx, y: cy };
    if (upper === 'H') {
      cx = rel ? cx + args[0] : args[0];
    } else if (upper === 'V') {
      cy = rel ? cy + args[0] : args[0];
    } else if (upper === 'C' || upper === 'S' || upper === 'Q' || upper === 'T') {
      const abs = args.map((v, idx) => (rel ? v + (idx % 2 === 0 ? p0.x : p0.y) : v));
      const end = { x: abs[abs.length - 2], y: abs[abs.length - 1] };
      const ctrl: Pt[] = [];
      for (let a = 0; a + 1 < abs.length - 2; a += 2) ctrl.push({ x: abs[a], y: abs[a + 1] });
      // S/T (curva "suave") não têm o 1º ponto de controle no `d` — aproxima com o ponto final como controle
      // (caixa um pouco mais larga que o ideal, mas sempre segura, nunca mais estreita que a curva real)
      pts.push(...sampleBezier(p0, ctrl.length ? ctrl : [end], end));
      cx = end.x; cy = end.y;
    } else if (upper === 'A') {
      const [rx, ry, xRot, largeArc, sweep, ex0, ey0] = args;
      const end = { x: rel ? cx + ex0 : ex0, y: rel ? cy + ey0 : ey0 };
      pts.push(...sampleArc(p0, rx, ry, xRot, largeArc !== 0, sweep !== 0, end));
      cx = end.x; cy = end.y;
    } else {
      const px = rel ? cx + args[0] : args[0];
      const py = rel ? cy + args[1] : args[1];
      pts.push({ x: px, y: py });
      cx = px; cy = py;
    }
    if (upper === 'M') { startX = cx; startY = cy; }
    pts.push({ x: cx, y: cy });
    // depois do primeiro M/m, um par de números sem letra nova é um L/l implícito — igual ao SVG de verdade
    if (upper === 'M') cmd = rel ? 'l' : 'L';
  }
  return pts;
}

/**
 * Acha, antes de `beforeIndex`, o `.map()` mais próximo que declara `varName` — seja como a própria
 * variável do array (`[99, 105, …].map((y) => …)`), como o índice (`arr.map((c, i) => …)`), ou como
 * uma `const` derivada dentro do corpo do `.map()` (ex. `const x = -13 + 26 * t`, no papel picado) —
 * e devolve todos os valores reais que `varName` toma, um por iteração do array.
 */
function resolveMapVar(code: string, varName: string, beforeIndex: number): number[] | null {
  const re = /\[([^\]]*)\]\.map\(\(\s*([^)]*)\)\s*=>\s*(\{|\()/g;
  let best: { arr: string; params: string[]; bodyStart: number; isBlock: boolean } | null = null;
  let m: RegExpExecArray | null;
  while ((m = re.exec(code))) {
    if (m.index >= beforeIndex) break;
    best = { arr: m[1], params: m[2].split(',').map((s) => s.trim()).filter(Boolean), bodyStart: m.index + m[0].length, isBlock: m[3] === '{' };
  }
  if (!best) return null;
  const n = best.arr.length === 0 ? 0 : best.arr.split(',').length;
  const scopeByIndex: Record<string, number>[] = Array.from({ length: n }, () => ({}));
  const [p1, p2] = best.params;
  if (p2) for (let i = 0; i < n; i++) scopeByIndex[i][p2] = i; // o 2º parâmetro de `.map` é sempre o índice
  if (p1 && best.arr.split(',').every((v) => !Number.isNaN(Number(v.trim())))) {
    const vals = best.arr.split(',').map((v) => Number(v.trim()));
    for (let i = 0; i < n; i++) scopeByIndex[i][p1] = vals[i];
  }
  if (best.isBlock) {
    // `const nome = expressão;` dentro do corpo do `.map`, na ordem — cada uma pode usar as de cima
    const body = code.slice(best.bodyStart, beforeIndex);
    for (const cm of body.matchAll(/const\s+(\w+)\s*=\s*([^;]+);/g)) {
      const [, name, expr] = cm;
      for (let i = 0; i < n; i++) {
        const names = Object.keys(scopeByIndex[i]);
        try {
          // `new Function` só avalia aritmética que já estava no código-fonte do app, nunca entrada externa
          scopeByIndex[i][name] = new Function(...names, `return (${expr});`)(...names.map((k) => scopeByIndex[i][k]));
        } catch {
          /* variável usada na expressão ainda não resolvida (não é deste `.map`) — ignora essa linha */
        }
      }
    }
  }
  if (!scopeByIndex[0] || !(varName in scopeByIndex[0])) return null;
  const out = scopeByIndex.map((s) => s[varName]);
  return out.every((v) => typeof v === 'number' && !Number.isNaN(v)) ? out : null;
}

/** `torso`/`band` (`LinuRoupas.tsx`) e `starPath` (`LinuOutfit.tsx`): os únicos geradores dinâmicos de `d`. */
function knownHelperBounds(call: string, code: string, atIndex: number): Pt[] | null {
  const fn = call.match(/^([a-zA-Z]+)\(([^)]+)\)$/);
  if (!fn) return null;
  const [, name, argsRaw] = fn;
  if (name !== 'torso' && name !== 'band' && name !== 'starPath') return null;
  // cada argumento é um número literal ou o nome da variável de um `.map()` em volta desse `d={...}`
  const argStrs = argsRaw.split(',').map((s) => s.trim());
  const resolved: number[][] = argStrs.map((a) => {
    const lit = Number(a);
    if (!Number.isNaN(lit)) return [lit];
    return resolveMapVar(code, a, atIndex) ?? [NaN];
  });
  const pts: Pt[] = [];
  // produto cartesiano das possibilidades de cada argumento (quase sempre só 1 é variável)
  const combos: number[][] = resolved.reduce<number[][]>((acc, vals) => acc.flatMap((c) => vals.map((v) => [...c, v])), [[]]);
  for (const args of combos) {
    if (args.some(Number.isNaN)) return null;
    if (name === 'torso') {
      const [yTop, yBot] = args;
      pts.push({ x: 20, y: yTop }, { x: 100, y: yBot }); // a silhueta nunca passa de 60 ± 40 (máximo de `half()`), por construção
    } else if (name === 'band') {
      const [y, h] = args;
      pts.push({ x: 20, y }, { x: 100, y: y + h });
    } else {
      const [cx, cy, r] = args;
      pts.push({ x: cx - r, y: cy - r }, { x: cx + r, y: cy + r });
    }
  }
  return pts;
}

/**
 * Acha um "ponto num círculo" definido localmente no `case`, tipo o `p` do frevo:
 * `const p = (a) => \`${R * Math.cos(a)} ${CY + R * Math.sin(a)}\`` (ou com `CX +` antes do cosseno).
 * Retorna o nome da função e a caixa do círculo que ela sempre fica dentro, pra usar sempre que
 * `${nome(...)}` aparecer dentro de um `d` gerado por template string.
 */
function circleHelpers(code: string): Map<string, Pt[]> {
  const helpers = new Map<string, Pt[]>();
  for (const m of code.matchAll(/const (\w+) = \([^)]*\) => `([^`]*)`/g)) {
    const [, name, body] = m;
    const cosM = body.match(/(?:(-?[\d.]+)\s*\+\s*)?(-?[\d.]+)\s*\*\s*Math\.cos/);
    const sinM = body.match(/(?:(-?[\d.]+)\s*\+\s*)?(-?[\d.]+)\s*\*\s*Math\.sin/);
    if (!cosM || !sinM) continue;
    const cx = Number(cosM[1] ?? 0), rx = Number(cosM[2]), cy = Number(sinM[1] ?? 0), ry = Number(sinM[2]);
    helpers.set(name, [{ x: cx - rx, y: cy - ry }, { x: cx + rx, y: cy + ry }]);
  }
  return helpers;
}

/** Pontos de forma (local, antes de qualquer transformação) extraídos de um trecho de JSX. */
function localPoints(code: string): { pts: Pt[]; unknownDynamicD: string[] } {
  const pts: Pt[] = [];
  const unknownDynamicD: string[] = [];
  const circles = circleHelpers(code);
  for (const m of code.matchAll(/<Rect\s+x="(-?[\d.]+)"\s+y="(-?[\d.]+)"\s+width="(-?[\d.]+)"\s+height="(-?[\d.]+)"/g)) {
    const [, x, y, w, h] = m.map(Number);
    pts.push({ x, y }, { x: x + w, y }, { x, y: y + h }, { x: x + w, y: y + h });
  }
  for (const m of code.matchAll(/<Circle\s+cx="(-?[\d.]+)"\s+cy="(-?[\d.]+)"\s+r="(-?[\d.]+)"/g)) {
    const [, cx, cy, r] = m.map(Number);
    for (let a = 0; a < 360; a += 45) pts.push({ x: cx + r * Math.cos((a * Math.PI) / 180), y: cy + r * Math.sin((a * Math.PI) / 180) });
  }
  for (const m of code.matchAll(/<Ellipse\s+cx="(-?[\d.]+)"\s+cy="(-?[\d.]+)"\s+rx="(-?[\d.]+)"\s+ry="(-?[\d.]+)"/g)) {
    const [, cx, cy, rx, ry] = m.map(Number);
    for (let a = 0; a < 360; a += 45) pts.push({ x: cx + rx * Math.cos((a * Math.PI) / 180), y: cy + ry * Math.sin((a * Math.PI) / 180) });
  }
  for (const m of code.matchAll(/<Line\s+x1="(-?[\d.]+)"\s+y1="(-?[\d.]+)"\s+x2="(-?[\d.]+)"\s+y2="(-?[\d.]+)"/g)) {
    const [, x1, y1, x2, y2] = m.map(Number);
    pts.push({ x: x1, y: y1 }, { x: x2, y: y2 });
  }
  // d="..." (literal) e d={`...`} (template string): os dois têm texto de verdade pra analisar
  for (const m of code.matchAll(/ d="([^"]+)"/g)) pts.push(...pathPoints(m[1]));
  for (const m of code.matchAll(/ d=\{`([^`]+)`\}/g)) {
    const usedCircleHelper = [...circles.keys()].some((name) => m[1].includes(`${name}(`));
    if (usedCircleHelper) {
      // a posição exata de `${helper(...)}` não dá pra calcular sem rodar o JS de verdade, mas a
      // caixa do círculo onde o ponto sempre cai (`circles`) já é um limite seguro — não faz sentido
      // tentar analisar o texto do `d` com o `${...}` trocado por um número qualquer (viraria um arco
      // degenerado, início = fim, e quebraria o cálculo do centro do arco)
      for (const name of circles.keys()) if (m[1].includes(`${name}(`)) pts.push(...circles.get(name)!);
      continue;
    }
    const exprs = [...m[1].matchAll(/\$\{([^}]+)\}/g)].map((x) => x[1]);
    // `${expressão aritmética simples de uma variável de .map()}` (ex. `${y + 2}`): acha os valores
    // reais da variável e resolve a expressão de verdade, pra cada valor — não é só a quena/tabuleiro
    const idents = new Set(exprs.flatMap((e) => [...e.matchAll(/[a-zA-Z_]\w*/g)].map((x) => x[0])));
    const idx = m.index ?? 0;
    const values = new Map<string, number[]>();
    let allResolved = true;
    for (const id of idents) {
      const vals = resolveMapVar(code, id, idx);
      if (!vals) { allResolved = false; break; }
      values.set(id, vals);
    }
    if (!allResolved || idents.size === 0) {
      if (exprs.length > 0) unknownDynamicD.push(...exprs.map((e) => `\`${m[1]}\` (\${${e}})`));
      else pts.push(...pathPoints(m[1]));
      continue;
    }
    const names = [...idents];
    const combos: number[][] = names.reduce<number[][]>((acc, n) => acc.flatMap((c) => values.get(n)!.map((v) => [...c, v])), [[]]);
    for (const combo of combos) {
      let filled = m[1];
      for (const e of exprs) {
        // `new Function` só avalia aritmética que já estava no código-fonte do app, nunca entrada externa
        const val = new Function(...names, `return (${e});`)(...combo);
        filled = filled.replace(`\${${e}}`, String(val));
      }
      pts.push(...pathPoints(filled));
    }
  }
  // d={chamada(...)}: só os três geradores conhecidos; qualquer outro, reporta pra não passar em silêncio
  for (const m of code.matchAll(/ d=\{([a-zA-Z]+\([^)]*\))\}/g)) {
    const known = knownHelperBounds(m[1], code, m.index ?? 0);
    if (known) pts.push(...known);
    else unknownDynamicD.push(m[1]);
  }
  return { pts, unknownDynamicD };
}

/** O `transform` do `<G>` que embrulha o conteúdo do `case` (se houver — pode vir depois de comentários). */
function caseLocalTransform(code: string): Op[] {
  const m = code.match(/<G transform="([^"]+)">/);
  return parseTransform(m?.[1]);
}

function splitCases(fnBody: string): { id: string; code: string }[] {
  const matches = [...fnBody.matchAll(/case '([a-z]+)':/g)];
  return matches.map((m, i) => ({ id: m[1], code: fnBody.slice(m.index, matches[i + 1]?.index ?? fnBody.length) }));
}

function functionBody(src: string, name: string): string {
  const start = src.indexOf(`export function ${name}`);
  assert.ok(start >= 0, `função ${name} não encontrada`);
  const end = src.indexOf('\nexport function', start + 1);
  return src.slice(start, end < 0 ? src.length : end);
}

/** `Held` (mão), mood normal: `Linu.tsx`, `translate(15 113) rotate(-10) scale(1.12)`. */
const HELD_BASE = parseTransform('translate(15 113) rotate(-10) scale(1.12)');
function checkCases(label: string, cases: { id: string; code: string }[], base: Op[]) {
  for (const c of cases) {
    const { pts, unknownDynamicD } = localPoints(c.code);
    assert.equal(unknownDynamicD.length, 0, `${label} '${c.id}': usa um gerador dinâmico de \`d\` que este teste não conhece (${unknownDynamicD.join(', ')}) — estenda \`knownHelperBounds\` em vez de deixar passar sem conferir`);
    assert.ok(pts.length > 0, `${label} '${c.id}': o teste não conseguiu extrair nenhuma forma pra conferir — estenda este teste em vez de pular a peça`);
    const local = caseLocalTransform(c.code);
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    for (const p0 of pts) {
      const p = applyOps(applyOps(p0, local), base);
      minX = Math.min(minX, p.x); maxX = Math.max(maxX, p.x);
      minY = Math.min(minY, p.y); maxY = Math.max(maxY, p.y);
    }
    assert.ok(minX >= -EPSILON && maxX <= VB_W + EPSILON && minY >= -EPSILON && maxY <= VB_H + EPSILON, `${label} '${c.id}': passa da área visível do SVG (0..${VB_W} x 0..${VB_H}) — caixa calculada x:[${minX.toFixed(1)},${maxX.toFixed(1)}] y:[${minY.toFixed(1)},${maxY.toFixed(1)}]. Desloque o \`<G transform>\` desse case pra dentro (ver o conserto da quena/tabuleiroxadrez).`);
  }
}

test('desenho do Linu: nada do que é segurado na mão passa da borda do SVG e fica cortado', () => {
  const src = readFileSync(new URL('./LinuRoupas.tsx', import.meta.url), 'utf8');
  checkCases('mão', splitCases(functionBody(src, 'HeldArt')), HELD_BASE);
});
