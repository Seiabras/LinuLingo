import type { ReactNode } from 'react';
import Svg, { Circle, Defs, Ellipse, G, Line, LinearGradient, Path, Polygon, RadialGradient, Rect, Stop } from 'react-native-svg';
import type { PadraoMoldura, TemaJogo } from '@/data/temas-jogos';

/**
 * A aparência dos tabuleiros e das peças além da cor (pedido do dono, 11/10/2026: “não quero mudar
 * só a cor, quero mudar a aparência no geral”): textura nas casas, padrão desenhado na moldura e
 * peças com feitio próprio (moeda, concha, ardósia, âmbar, osso, pedra com pintas de ouro…).
 */

// ── textura das casas ───────────────────────────────────────────────────────────────────────────

/** Desenho por cima de uma casa (x, y, lado `c`), conforme o tema. `escura` diz o tom da casa. */
function texturaCasa(tema: TemaJogo, x: number, y: number, c: number, escura: boolean, k: number): ReactNode {
  const tinta = escura ? 'rgba(255,255,255,0.16)' : 'rgba(0,0,0,0.1)';
  switch (tema.id) {
    case 'madeira':
    case 'vikings':
      // veios de madeira: três linhas curvas, deslocadas casa a casa
      return [0.25, 0.55, 0.8].map((f, i) => (
        <Path key={`${k}-${i}`} d={`M${x} ${y + c * f} Q ${x + c * 0.5} ${y + c * (f + (((k + i) % 3) - 1) * 0.08)} ${x + c} ${y + c * f}`} stroke={escura ? 'rgba(0,0,0,0.18)' : 'rgba(120,70,20,0.18)'} strokeWidth={1} fill="none" />
      ));
    case 'piratas':
      // tábuas do convés com pregos
      return (
        <G key={k}>
          <Line x1={x} y1={y + c / 2} x2={x + c} y2={y + c / 2} stroke="rgba(0,0,0,0.3)" strokeWidth={1.2} />
          <Circle cx={x + c * 0.12} cy={y + c * 0.25} r={c * 0.03} fill="rgba(0,0,0,0.35)" />
          <Circle cx={x + c * 0.88} cy={y + c * 0.75} r={c * 0.03} fill="rgba(0,0,0,0.35)" />
        </G>
      );
    case 'deserto':
      // ondas de areia
      return [0.3, 0.62].map((f, i) => (
        <Path key={`${k}-${i}`} d={`M${x} ${y + c * f} q ${c / 4} ${-c * 0.1} ${c / 2} 0 t ${c / 2} 0`} stroke={escura ? 'rgba(255,240,210,0.3)' : 'rgba(150,100,40,0.25)'} strokeWidth={1.2} fill="none" />
      ));
    case 'papiro':
      return [0.2, 0.45, 0.7].map((f, i) => <Line key={`${k}-${i}`} x1={x + c * f} y1={y} x2={x + c * f + 1} y2={y + c} stroke="rgba(90,60,20,0.15)" strokeWidth={1} />);
    case 'azulejo':
      // a flor de quatro pétalas, nas casas claras
      if (escura) return null;
      return (
        <G key={k}>
          {[0, 1, 2, 3].map((i) => {
            const a = (i * Math.PI) / 2;
            return <Ellipse key={i} cx={x + c / 2 + Math.cos(a) * c * 0.18} cy={y + c / 2 + Math.sin(a) * c * 0.18} rx={c * 0.12} ry={c * 0.12} fill="rgba(43,91,168,0.28)" />;
          })}
          <Circle cx={x + c / 2} cy={y + c / 2} r={c * 0.06} fill="rgba(43,91,168,0.5)" />
        </G>
      );
    case 'zellige': {
      if (!escura) return null;
      const m = c / 2;
      const r = c * 0.3;
      return (
        <G key={k} opacity={0.35}>
          <Rect x={x + m - r * 0.7} y={y + m - r * 0.7} width={r * 1.4} height={r * 1.4} fill="#F4E9D8" />
          <Rect x={x + m - r * 0.7} y={y + m - r * 0.7} width={r * 1.4} height={r * 1.4} fill="#F4E9D8" transform={`rotate(45 ${x + m} ${y + m})`} />
        </G>
      );
    }
    case 'kente':
      if (!escura) return null;
      return (
        <G key={k}>
          <Rect x={x} y={y + c * 0.2} width={c} height={c * 0.12} fill="rgba(242,194,48,0.55)" />
          <Rect x={x} y={y + c * 0.68} width={c} height={c * 0.12} fill="rgba(158,42,30,0.55)" />
        </G>
      );
    case 'tartan':
      return (
        <G key={k}>
          <Rect x={x + c * 0.4} y={y} width={c * 0.2} height={c} fill="rgba(178,34,52,0.18)" />
          <Rect x={x} y={y + c * 0.4} width={c} height={c * 0.2} fill="rgba(178,34,52,0.18)" />
          <Line x1={x + c * 0.15} y1={y} x2={x + c * 0.15} y2={y + c} stroke="rgba(255,255,255,0.25)" strokeWidth={0.8} />
        </G>
      );
    case 'marajoara':
      if (!escura) return null;
      return <Path key={k} d={`M${x + c * 0.15} ${y + c * 0.75} h${c * 0.2} v${-c * 0.2} h${c * 0.2} v${-c * 0.2} h${c * 0.2}`} stroke="rgba(27,27,27,0.55)" strokeWidth={Math.max(1.5, c * 0.06)} fill="none" />;
    case 'sakura':
      if ((k * 7) % 3 !== 0) return null;
      return (
        <G key={k} opacity={0.5}>
          {[0, 1, 2, 3, 4].map((i) => {
            const a = (i * 2 * Math.PI) / 5;
            return <Circle key={i} cx={x + c * 0.7 + Math.cos(a) * c * 0.08} cy={y + c * 0.3 + Math.sin(a) * c * 0.08} r={c * 0.07} fill="#F6B6CB" />;
          })}
        </G>
      );
    case 'copacabana':
      // as ondas pretas e brancas: na casa clara, onda escura; na escura, onda clara
      return <Path key={k} d={`M${x} ${y + c * 0.55} q ${c / 4} ${-c * 0.35} ${c / 2} 0 t ${c / 2} 0`} stroke={escura ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.25)'} strokeWidth={c * 0.14} fill="none" />;
    case 'amazonia':
      return [0.3, 0.7].map((f, i) => (
        <Path key={`${k}-${i}`} d={`M${x} ${y + c * f} Q ${x + c * 0.5} ${y + c * (f + (((k + i) % 3) - 1) * 0.1)} ${x + c} ${y + c * f}`} stroke="rgba(40,15,0,0.22)" strokeWidth={1.2} fill="none" />
      ));
    case 'mexico':
      if (!escura) return null;
      return (
        <G key={k} opacity={0.35}>
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const a = (i * Math.PI) / 3;
            return <Circle key={i} cx={x + c / 2 + Math.cos(a) * c * 0.2} cy={y + c / 2 + Math.sin(a) * c * 0.2} r={c * 0.08} fill="#FFB000" />;
          })}
          <Circle cx={x + c / 2} cy={y + c / 2} r={c * 0.09} fill="#E4007C" />
        </G>
      );
    case 'talavera':
      if (escura) return <Circle key={k} cx={x + c / 2} cy={y + c / 2} r={c * 0.12} fill="rgba(242,183,5,0.55)" />;
      return <Path key={k} d={`M${x + c / 2} ${y + c * 0.22} L${x + c * 0.78} ${y + c / 2} L${x + c / 2} ${y + c * 0.78} L${x + c * 0.22} ${y + c / 2} Z`} fill="rgba(29,63,143,0.22)" />;
    case 'londres':
      // pedras de calçamento, com o brilho da chuva
      return (
        <G key={k}>
          <Rect x={x + c * 0.06} y={y + c * 0.06} width={c * 0.88} height={c * 0.88} rx={c * 0.12} fill="none" stroke={escura ? 'rgba(0,0,0,0.25)' : 'rgba(0,0,0,0.12)'} strokeWidth={1.2} />
          <Path d={`M${x + c * 0.2} ${y + c * 0.25} q ${c * 0.15} ${-c * 0.06} ${c * 0.3} 0`} stroke="rgba(255,255,255,0.35)" strokeWidth={1.4} fill="none" />
        </G>
      );
    case 'jade':
      return <Path key={k} d={`M${x} ${y + c * 0.7} C ${x + c * 0.3} ${y + c * 0.5}, ${x + c * 0.6} ${y + c * 0.9}, ${x + c} ${y + c * 0.6}`} stroke={tinta} strokeWidth={1.4} fill="none" />;
    case 'gelo':
      return (k * 5) % 4 === 0 ? <Path key={k} d={`M${x + c * 0.2} ${y + c * 0.2} l${c * 0.25} ${c * 0.2} l${-c * 0.1} ${c * 0.3} M${x + c * 0.45} ${y + c * 0.4} l${c * 0.3} ${-c * 0.05}`} stroke="rgba(255,255,255,0.6)" strokeWidth={1} fill="none" /> : null;
    case 'aurora':
      return <Path key={k} d={`M${x} ${y + c * 0.5} q ${c / 4} ${-c * 0.2} ${c / 2} 0 t ${c / 2} 0`} stroke="rgba(167,139,250,0.3)" strokeWidth={1.5} fill="none" />;
    default:
      return null;
  }
}

/**
 * O fundo de um tabuleiro de casas (xadrez, damas, hnefatafl…): as casas claras e escuras do tema e
 * a textura por cima, num desenho só. As casas tocáveis ficam por cima, transparentes.
 */
export function FundoTabuleiro({ cols, rows, casa, tema, especial, tudoEscuro = false }: { cols: number; rows: number; casa: number; tema: TemaJogo; especial?: (r: number, c: number) => boolean; tudoEscuro?: boolean }) {
  const casas: ReactNode[] = [];
  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++) {
      const esp = especial?.(r, c);
      const escura = tudoEscuro || (r + c) % 2 === 1;
      const x = c * casa;
      const y = r * casa;
      casas.push(<Rect key={`q${r}-${c}`} x={x} y={y} width={casa} height={casa} fill={esp ? tema.especial : escura ? tema.escuro : tema.claro} />);
      if (!esp) casas.push(texturaCasa(tema, x, y, casa, escura, r * cols + c));
    }
  return (
    <Svg width={cols * casa} height={rows * casa} style={{ position: 'absolute', left: 0, top: 0 }}>
      {casas}
      {/* um brilho leve de cima para baixo, para o tabuleiro não parecer chapado */}
      <Defs>
        <LinearGradient id="brilho-tab" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#FFFFFF" stopOpacity={0.12} />
          <Stop offset="1" stopColor="#000000" stopOpacity={0.1} />
        </LinearGradient>
      </Defs>
      <Rect x={0} y={0} width={cols * casa} height={rows * casa} fill="url(#brilho-tab)" />
    </Svg>
  );
}

/** Fundo dos tabuleiros de linhas (go, gomoku, trilha): a superfície do tema com textura. */
export function FundoSuperficie({ largura, altura, tema, unidade = 32 }: { largura: number; altura: number; tema: TemaJogo; unidade?: number }) {
  const n = Math.ceil(largura / unidade);
  const m = Math.ceil(altura / unidade);
  const tex: ReactNode[] = [];
  for (let r = 0; r < m; r++) for (let c = 0; c < n; c++) tex.push(texturaCasa(tema, c * unidade, r * unidade, unidade, false, r * n + c));
  return (
    <Svg width={largura} height={altura} style={{ position: 'absolute', left: 0, top: 0 }}>
      <Rect x={0} y={0} width={largura} height={altura} fill={tema.superficie} />
      <G opacity={0.7}>{tex}</G>
    </Svg>
  );
}

// ── padrão da moldura ───────────────────────────────────────────────────────────────────────────

function motivo(p: PadraoMoldura, x: number, y: number, u: number, [c1, c2]: [string, string], k: number): ReactNode {
  switch (p) {
    case 'grega':
      return <Path key={k} d={`M${x} ${y + u} V${y} H${x + u * 0.8} V${y + u * 0.6} H${x + u * 0.3} V${y + u * 0.3}`} stroke={c1} strokeWidth={u * 0.14} fill="none" />;
    case 'azulejo':
      return (
        <G key={k}>
          <Rect x={x} y={y} width={u} height={u} fill={c1} stroke={c2} strokeWidth={0.6} />
          <Circle cx={x + u / 2} cy={y + u / 2} r={u * 0.28} fill="none" stroke={c2} strokeWidth={u * 0.1} />
          <Circle cx={x + u / 2} cy={y + u / 2} r={u * 0.08} fill={c2} />
        </G>
      );
    case 'kente':
      return <Rect key={k} x={x} y={y} width={u} height={u} fill={[c1, c2, '#9E2A1E', '#1B1B1B'][k % 4]} />;
    case 'zellige': {
      const m = u / 2;
      const r = u * 0.32;
      return (
        <G key={k}>
          <Rect x={x + m - r} y={y + m - r} width={r * 2} height={r * 2} fill={c2} />
          <Rect x={x + m - r} y={y + m - r} width={r * 2} height={r * 2} fill={c2} transform={`rotate(45 ${x + m} ${y + m})`} />
          <Circle cx={x + m} cy={y + m} r={u * 0.12} fill={c1} />
        </G>
      );
    }
    case 'tartan':
      return (
        <G key={k}>
          <Rect x={x + u * 0.35} y={y} width={u * 0.3} height={u} fill={c2} opacity={0.6} />
          <Rect x={x} y={y + u * 0.35} width={u} height={u * 0.3} fill={c2} opacity={0.6} />
          <Line x1={x + u * 0.1} y1={y} x2={x + u * 0.1} y2={y + u} stroke="#F2E6C2" strokeWidth={0.8} />
        </G>
      );
    case 'marajoara':
      return <Path key={k} d={`M${x} ${y + u * 0.85} h${u * 0.25} v${-u * 0.25} h${u * 0.25} v${-u * 0.25} h${u * 0.25} v${-u * 0.25}`} stroke={k % 2 ? c2 : c1} strokeWidth={u * 0.13} fill="none" />;
    case 'sakura':
      return (
        <G key={k}>
          {[0, 1, 2, 3, 4].map((i) => {
            const a = (i * 2 * Math.PI) / 5 + k;
            return <Circle key={i} cx={x + u / 2 + Math.cos(a) * u * 0.18} cy={y + u / 2 + Math.sin(a) * u * 0.18} r={u * 0.15} fill={c1} />;
          })}
          <Circle cx={x + u / 2} cy={y + u / 2} r={u * 0.08} fill={c2} />
        </G>
      );
    case 'papiro':
      return (
        <G key={k}>
          <Path d={`M${x + u / 2} ${y + u * 0.9} V${y + u * 0.45}`} stroke={c1} strokeWidth={u * 0.08} />
          <Path d={`M${x + u * 0.2} ${y + u * 0.35} Q ${x + u / 2} ${y} ${x + u * 0.8} ${y + u * 0.35} Z`} fill={c2} />
        </G>
      );
    case 'jade':
      return (
        <G key={k}>
          <Circle cx={x + u * 0.35} cy={y + u * 0.55} r={u * 0.2} fill="none" stroke={c1} strokeWidth={u * 0.08} />
          <Circle cx={x + u * 0.62} cy={y + u * 0.45} r={u * 0.24} fill="none" stroke={c1} strokeWidth={u * 0.08} />
        </G>
      );
    case 'aurora':
      return <Path key={k} d={`M${x} ${y + u * 0.6} q ${u / 4} ${-u * 0.4} ${u / 2} 0 t ${u / 2} 0`} stroke={k % 2 ? c1 : c2} strokeWidth={u * 0.14} fill="none" opacity={0.8} />;
    case 'dunas':
      return <Path key={k} d={`M${x} ${y + u * 0.7} q ${u / 2} ${-u * 0.5} ${u} 0`} stroke={c2} strokeWidth={u * 0.12} fill="none" />;
    case 'corda':
      return <Path key={k} d={`M${x} ${y + u * 0.2} l${u} ${u * 0.6}`} stroke={k % 2 ? c1 : c2} strokeWidth={u * 0.32} strokeLinecap="round" />;
    case 'ondas':
      // as ondas de pedra portuguesa do calçadão de Copacabana
      return <Path key={k} d={`M${x} ${y + u * 0.5} q ${u / 4} ${-u * 0.45} ${u / 2} 0 t ${u / 2} 0`} stroke={c1} strokeWidth={u * 0.3} fill="none" />;
    case 'folhas':
      return <Path key={k} d={`M${x + u * 0.15} ${y + u * 0.85} Q ${x + u * 0.1} ${y + u * 0.15} ${x + u * 0.85} ${y + u * 0.15} Q ${x + u * 0.9} ${y + u * 0.85} ${x + u * 0.15} ${y + u * 0.85} Z`} fill={k % 2 ? c1 : c2} />;
    case 'papelpicado': {
      // bandeirinha de papel recortado: retângulo com a ponta em V e furinhos
      const cores = [c1, c2, '#FFB000', '#7B2CBF', '#FF5A1F'];
      return (
        <G key={k}>
          <Path d={`M${x + u * 0.08} ${y + u * 0.08} H${x + u * 0.92} V${y + u * 0.8} L${x + u / 2} ${y + u * 0.95} L${x + u * 0.08} ${y + u * 0.8} Z`} fill={cores[k % cores.length]} />
          <Circle cx={x + u / 2} cy={y + u * 0.42} r={u * 0.12} fill="rgba(0,0,0,0.35)" />
          <Rect x={x + u * 0.2} y={y + u * 0.2} width={u * 0.1} height={u * 0.1} fill="rgba(0,0,0,0.35)" />
          <Rect x={x + u * 0.7} y={y + u * 0.2} width={u * 0.1} height={u * 0.1} fill="rgba(0,0,0,0.35)" />
        </G>
      );
    }
    case 'talavera':
      return (
        <G key={k}>
          <Rect x={x} y={y} width={u} height={u} fill="#FFFDF6" />
          <Path d={`M${x + u / 2} ${y + u * 0.12} L${x + u * 0.88} ${y + u / 2} L${x + u / 2} ${y + u * 0.88} L${x + u * 0.12} ${y + u / 2} Z`} fill={c1} />
          <Circle cx={x + u / 2} cy={y + u / 2} r={u * 0.16} fill={c2} />
        </G>
      );
    case 'tijolos':
      // tijolos de Londres, em fileiras desencontradas
      return (
        <G key={k}>
          <Rect x={x} y={y} width={u} height={u} fill={c2} />
          <Rect x={x + 0.8} y={y + 0.8} width={u - 1.6} height={u / 2 - 1.6} rx={1} fill={c1} />
          <Rect x={x + 0.8 - u / 2} y={y + u / 2 + 0.8} width={u - 1.6} height={u / 2 - 1.6} rx={1} fill={c1} />
          <Rect x={x + 0.8 + u / 2} y={y + u / 2 + 0.8} width={u - 1.6} height={u / 2 - 1.6} rx={1} fill={c1} />
        </G>
      );
    case 'nos':
      return <Path key={k} d={`M${x} ${y + u / 2} C ${x + u * 0.3} ${y}, ${x + u * 0.7} ${y + u}, ${x + u} ${y + u / 2}`} stroke={c1} strokeWidth={u * 0.16} fill="none" />;
  }
}

/** O padrão da moldura: preenche o anel em volta do tabuleiro com o motivo do tema, sem passar por baixo das casas. */
export function PadraoDaMoldura({ largura, altura, borda, padrao, cores }: { largura: number; altura: number; borda: number; padrao: PadraoMoldura; cores: [string, string] }) {
  const u = Math.max(8, borda);
  const itens: ReactNode[] = [];
  let k = 0;
  for (let y = 0; y < altura; y += u)
    for (let x = 0; x < largura; x += u) {
      const dentro = x + u > borda && x < largura - borda && y + u > borda && y < altura - borda;
      if (!dentro) itens.push(motivo(padrao, x, y, u, cores, k++));
    }
  return (
    <Svg width={largura} height={altura} style={{ position: 'absolute', left: 0, top: 0 }}>
      {itens}
    </Svg>
  );
}

// ── peças com feitio próprio ────────────────────────────────────────────────────────────────────

export type FeitioPeca = 'moeda' | 'concha' | 'ardosia' | 'ambar' | 'osso' | 'lapis' | 'areia' | 'flor';

/**
 * Uma peça redonda com feitio próprio, usada pelas peças especiais de cada jogo da loja. `emblema`
 * é um caminho SVG (512×512) gravado no meio, como o camelo das damas das dunas.
 */
export function PecaFeitio({ tamanho, feitio, cor, emblema, id }: { tamanho: number; feitio: FeitioPeca; cor: string; emblema?: string; id: string }) {
  const r = tamanho / 2;
  const g = `pf-${id}`;
  const corpo = (() => {
    switch (feitio) {
      case 'moeda':
        return (
          <>
            <Circle cx={r} cy={r} r={r - 1} fill={`url(#${g})`} stroke="rgba(0,0,0,0.55)" strokeWidth={1.2} />
            {Array.from({ length: 24 }, (_, i) => {
              const a = (i / 24) * 2 * Math.PI;
              return <Line key={i} x1={r + Math.cos(a) * (r - 1.5)} y1={r + Math.sin(a) * (r - 1.5)} x2={r + Math.cos(a) * (r - tamanho * 0.09)} y2={r + Math.sin(a) * (r - tamanho * 0.09)} stroke="rgba(0,0,0,0.3)" strokeWidth={0.8} />;
            })}
            <Circle cx={r} cy={r} r={r * 0.68} fill="none" stroke="rgba(0,0,0,0.35)" strokeWidth={1} />
            {/* um sol gravado no centro da moeda */}
            <Circle cx={r} cy={r} r={r * 0.2} fill="rgba(0,0,0,0.18)" />
            {Array.from({ length: 8 }, (_, i) => {
              const a = (i / 8) * 2 * Math.PI;
              return <Line key={`s${i}`} x1={r + Math.cos(a) * r * 0.28} y1={r + Math.sin(a) * r * 0.28} x2={r + Math.cos(a) * r * 0.45} y2={r + Math.sin(a) * r * 0.45} stroke="rgba(0,0,0,0.25)" strokeWidth={1.2} strokeLinecap="round" />;
            })}
          </>
        );
      case 'concha':
        return (
          <>
            <Circle cx={r} cy={r} r={r - 1} fill={`url(#${g})`} stroke="rgba(0,0,0,0.45)" strokeWidth={1} />
            {[0.35, 0.55, 0.75].map((f) => (
              <Path key={f} d={`M${r - r * f} ${r + r * 0.3} Q ${r} ${r - r * f} ${r + r * f} ${r + r * 0.3}`} stroke="rgba(120,110,95,0.35)" strokeWidth={0.9} fill="none" />
            ))}
          </>
        );
      case 'ardosia':
        return <Circle cx={r} cy={r} r={r - 1} fill={`url(#${g})`} stroke="#000" strokeWidth={1} />;
      case 'ambar':
        return (
          <>
            <Circle cx={r} cy={r} r={r - 1} fill={`url(#${g})`} stroke="rgba(90,40,0,0.7)" strokeWidth={1.2} />
            <Circle cx={r * 1.25} cy={r * 0.75} r={r * 0.09} fill="rgba(255,255,255,0.5)" />
            <Circle cx={r * 0.8} cy={r * 1.3} r={r * 0.05} fill="rgba(255,255,255,0.35)" />
          </>
        );
      case 'osso':
        return (
          <>
            <Circle cx={r} cy={r} r={r - 1} fill={`url(#${g})`} stroke="rgba(80,70,50,0.8)" strokeWidth={1.2} />
            <Circle cx={r} cy={r} r={r * 0.62} fill="none" stroke="rgba(80,70,50,0.6)" strokeWidth={1.4} />
            <Circle cx={r} cy={r} r={r * 0.14} fill="rgba(80,70,50,0.6)" />
          </>
        );
      case 'lapis':
        return (
          <>
            <Circle cx={r} cy={r} r={r - 1} fill={`url(#${g})`} stroke="rgba(0,0,0,0.6)" strokeWidth={1} />
            {[
              [0.6, 0.5],
              [1.3, 0.8],
              [0.9, 1.35],
              [1.45, 1.3],
              [0.55, 1.1],
            ].map(([a, b], i) => (
              <Circle key={i} cx={r * a} cy={r * b} r={Math.max(0.8, r * 0.06)} fill="#E8C35A" />
            ))}
          </>
        );
      case 'flor':
        // uma flor de muitas pétalas, como o cempasúchil
        return (
          <>
            {Array.from({ length: 12 }, (_, i) => {
              const a = (i / 12) * 2 * Math.PI;
              return <Ellipse key={i} cx={r + Math.cos(a) * r * 0.55} cy={r + Math.sin(a) * r * 0.55} rx={r * 0.32} ry={r * 0.2} transform={`rotate(${(a * 180) / Math.PI} ${r + Math.cos(a) * r * 0.55} ${r + Math.sin(a) * r * 0.55})`} fill={cor} stroke="rgba(0,0,0,0.45)" strokeWidth={0.8} />;
            })}
            <Circle cx={r} cy={r} r={r * 0.45} fill={`url(#${g})`} stroke="rgba(0,0,0,0.4)" strokeWidth={0.8} />
          </>
        );
      case 'areia':
        return (
          <>
            <Circle cx={r} cy={r} r={r - 1} fill={`url(#${g})`} stroke="rgba(0,0,0,0.5)" strokeWidth={1.2} />
            <Circle cx={r} cy={r} r={r * 0.7} fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth={1} />
          </>
        );
    }
  })();
  const brilho = feitio === 'ardosia' ? 0.12 : feitio === 'ambar' ? 0.75 : 0.55;
  return (
    <Svg width={tamanho} height={tamanho}>
      <Defs>
        <RadialGradient id={g} cx="38%" cy="32%" r="72%">
          <Stop offset="0" stopColor="#FFFFFF" stopOpacity={brilho} />
          <Stop offset="0.5" stopColor={cor} />
          <Stop offset="1" stopColor={cor} />
        </RadialGradient>
      </Defs>
      <Circle cx={r} cy={r + 1.2} r={r - 1} fill="rgba(0,0,0,0.25)" />
      {corpo}
      {emblema && (
        <G transform={`translate(${r * 0.45}, ${r * 0.45}) scale(${(r * 1.1) / 512})`}>
          <Path d={emblema} fill="rgba(0,0,0,0.35)" />
        </G>
      )}
    </Svg>
  );
}

/** Polígono regular (para os pods do octi e afins). */
export function PoligonoRegular({ lados, r, cx, cy, ...props }: { lados: number; r: number; cx: number; cy: number; fill: string; stroke?: string; strokeWidth?: number }) {
  const pts = Array.from({ length: lados }, (_, i) => {
    const a = (i / lados) * 2 * Math.PI - Math.PI / 2;
    return `${cx + Math.cos(a) * r},${cy + Math.sin(a) * r}`;
  }).join(' ');
  return <Polygon points={pts} {...props} />;
}
