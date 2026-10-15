import { View } from 'react-native';
import type { ReactNode } from 'react';
import Svg, { Circle, Defs, Ellipse, G, Line, LinearGradient, Path, Pattern, Polygon, RadialGradient, Rect, Stop } from 'react-native-svg';
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
      // o veio da madeira vem da textura compartilhada (`Textura`), num padrão só para o tabuleiro todo
      return null;
    case 'vikings':
      // veios de madeira: três linhas curvas, deslocadas casa a casa
      return [0.25, 0.55, 0.8].map((f, i) => (
        <Path
          key={`${k}-${i}`}
          d={`M${x} ${y + c * f} Q ${x + c * 0.5} ${y + c * (f + (((k + i) % 3) - 1) * 0.08)} ${x + c} ${y + c * f}`}
          stroke={escura ? 'rgba(0,0,0,0.18)' : 'rgba(120,70,20,0.18)'}
          strokeWidth={1}
          fill="none"
        />
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
        <Path
          key={`${k}-${i}`}
          d={`M${x} ${y + c * f} q ${c / 4} ${-c * 0.1} ${c / 2} 0 t ${c / 2} 0`}
          stroke={escura ? 'rgba(255,240,210,0.3)' : 'rgba(150,100,40,0.25)'}
          strokeWidth={1.2}
          fill="none"
        />
      ));
    case 'papiro':
      return [0.2, 0.45, 0.7].map((f, i) => (
        <Line key={`${k}-${i}`} x1={x + c * f} y1={y} x2={x + c * f + 1} y2={y + c} stroke="rgba(90,60,20,0.15)" strokeWidth={1} />
      ));
    case 'azulejo':
      // a flor de quatro pétalas, nas casas claras
      if (escura) return null;
      return (
        <G key={k}>
          {[0, 1, 2, 3].map((i) => {
            const a = (i * Math.PI) / 2;
            return (
              <Ellipse
                key={i}
                cx={x + c / 2 + Math.cos(a) * c * 0.18}
                cy={y + c / 2 + Math.sin(a) * c * 0.18}
                rx={c * 0.12}
                ry={c * 0.12}
                fill="rgba(43,91,168,0.28)"
              />
            );
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
      return (
        <Path
          key={k}
          d={`M${x + c * 0.15} ${y + c * 0.75} h${c * 0.2} v${-c * 0.2} h${c * 0.2} v${-c * 0.2} h${c * 0.2}`}
          stroke="rgba(27,27,27,0.55)"
          strokeWidth={Math.max(1.5, c * 0.06)}
          fill="none"
        />
      );
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
      return (
        <Path
          key={k}
          d={`M${x} ${y + c * 0.55} q ${c / 4} ${-c * 0.35} ${c / 2} 0 t ${c / 2} 0`}
          stroke={escura ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.25)'}
          strokeWidth={c * 0.14}
          fill="none"
        />
      );
    case 'amazonia':
      return [0.3, 0.7].map((f, i) => (
        <Path
          key={`${k}-${i}`}
          d={`M${x} ${y + c * f} Q ${x + c * 0.5} ${y + c * (f + (((k + i) % 3) - 1) * 0.1)} ${x + c} ${y + c * f}`}
          stroke="rgba(40,15,0,0.22)"
          strokeWidth={1.2}
          fill="none"
        />
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
      return (
        <Path
          key={k}
          d={`M${x + c / 2} ${y + c * 0.22} L${x + c * 0.78} ${y + c / 2} L${x + c / 2} ${y + c * 0.78} L${x + c * 0.22} ${y + c / 2} Z`}
          fill="rgba(29,63,143,0.22)"
        />
      );
    case 'londres':
      // pedras de calçamento, com o brilho da chuva
      return (
        <G key={k}>
          <Rect
            x={x + c * 0.06}
            y={y + c * 0.06}
            width={c * 0.88}
            height={c * 0.88}
            rx={c * 0.12}
            fill="none"
            stroke={escura ? 'rgba(0,0,0,0.25)' : 'rgba(0,0,0,0.12)'}
            strokeWidth={1.2}
          />
          <Path d={`M${x + c * 0.2} ${y + c * 0.25} q ${c * 0.15} ${-c * 0.06} ${c * 0.3} 0`} stroke="rgba(255,255,255,0.35)" strokeWidth={1.4} fill="none" />
        </G>
      );
    case 'jade':
      return (
        <Path
          key={k}
          d={`M${x} ${y + c * 0.7} C ${x + c * 0.3} ${y + c * 0.5}, ${x + c * 0.6} ${y + c * 0.9}, ${x + c} ${y + c * 0.6}`}
          stroke={tinta}
          strokeWidth={1.4}
          fill="none"
        />
      );
    case 'gelo':
      return (k * 5) % 4 === 0 ? (
        <Path
          key={k}
          d={`M${x + c * 0.2} ${y + c * 0.2} l${c * 0.25} ${c * 0.2} l${-c * 0.1} ${c * 0.3} M${x + c * 0.45} ${y + c * 0.4} l${c * 0.3} ${-c * 0.05}`}
          stroke="rgba(255,255,255,0.6)"
          strokeWidth={1}
          fill="none"
        />
      ) : null;
    case 'aurora':
      return (
        <Path key={k} d={`M${x} ${y + c * 0.5} q ${c / 4} ${-c * 0.2} ${c / 2} 0 t ${c / 2} 0`} stroke="rgba(167,139,250,0.3)" strokeWidth={1.5} fill="none" />
      );
    default:
      return null;
  }
}

/**
 * O fundo de um tabuleiro de casas (xadrez, damas, hnefatafl…): as casas claras e escuras do tema e
 * a textura por cima, num desenho só. As casas tocáveis ficam por cima, transparentes.
 */
export function FundoTabuleiro({
  cols,
  rows,
  casa,
  tema,
  especial,
  tudoEscuro = false,
  inverte = false,
}: {
  cols: number;
  rows: number;
  casa: number;
  tema: TemaJogo;
  especial?: (r: number, c: number) => boolean;
  tudoEscuro?: boolean;
  /** a primeira casa (no alto, à esquerda) escura, como os quadrantes do quantik */
  inverte?: boolean;
}) {
  const casas: ReactNode[] = [];
  const mat = materialDoTema(tema);
  // na madeira, o veio das casas escuras corre atravessado, como na marchetaria
  const atravessado = mat === 'madeira' && !tudoEscuro;
  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++) {
      const esp = especial?.(r, c);
      const escura = tudoEscuro || (r + c + (inverte ? 1 : 0)) % 2 === 1;
      const x = c * casa;
      const y = r * casa;
      casas.push(<Rect key={`q${r}-${c}`} x={x} y={y} width={casa} height={casa} fill={esp ? tema.especial : escura ? tema.escuro : tema.claro} />);
      if (!esp) casas.push(texturaCasa(tema, x, y, casa, escura, r * cols + c));
      if (atravessado) casas.push(<Rect key={`v${r}-${c}`} x={x} y={y} width={casa} height={casa} fill={`url(#${escura ? 'tx-madeira-90' : idTextura('madeira')})`} />);
    }
  return (
    <Svg width={cols * casa} height={rows * casa} style={{ position: 'absolute', left: 0, top: 0 }}>
      <DefsTextura material={mat} />
      {atravessado && (
        <Defs>
          <Pattern id="tx-madeira-90" patternUnits="userSpaceOnUse" x={0} y={0} width={96} height={28} patternTransform="rotate(90)">
            {ladrilho('madeira', true).tracos}
          </Pattern>
        </Defs>
      )}
      {casas}
      {mat && !atravessado && <Rect x={0} y={0} width={cols * casa} height={rows * casa} fill={`url(#${idTextura(mat)})`} />}
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
      {camadasTextura({ largura, altura, material: materialDoTema(tema), escura: corEscura(tema.superficie) })}
    </Svg>
  );
}

// ── padrão da moldura ───────────────────────────────────────────────────────────────────────────

function motivo(p: PadraoMoldura, x: number, y: number, u: number, [c1, c2]: [string, string], k: number): ReactNode {
  switch (p) {
    case 'grega':
      return (
        <Path
          key={k}
          d={`M${x} ${y + u} V${y} H${x + u * 0.8} V${y + u * 0.6} H${x + u * 0.3} V${y + u * 0.3}`}
          stroke={c1}
          strokeWidth={u * 0.14}
          fill="none"
        />
      );
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
      return (
        <Path
          key={k}
          d={`M${x} ${y + u * 0.85} h${u * 0.25} v${-u * 0.25} h${u * 0.25} v${-u * 0.25} h${u * 0.25} v${-u * 0.25}`}
          stroke={k % 2 ? c2 : c1}
          strokeWidth={u * 0.13}
          fill="none"
        />
      );
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
      return (
        <Path
          key={k}
          d={`M${x} ${y + u * 0.6} q ${u / 4} ${-u * 0.4} ${u / 2} 0 t ${u / 2} 0`}
          stroke={k % 2 ? c1 : c2}
          strokeWidth={u * 0.14}
          fill="none"
          opacity={0.8}
        />
      );
    case 'dunas':
      return <Path key={k} d={`M${x} ${y + u * 0.7} q ${u / 2} ${-u * 0.5} ${u} 0`} stroke={c2} strokeWidth={u * 0.12} fill="none" />;
    case 'corda':
      return <Path key={k} d={`M${x} ${y + u * 0.2} l${u} ${u * 0.6}`} stroke={k % 2 ? c1 : c2} strokeWidth={u * 0.32} strokeLinecap="round" />;
    case 'ondas':
      // as ondas de pedra portuguesa do calçadão de Copacabana
      return <Path key={k} d={`M${x} ${y + u * 0.5} q ${u / 4} ${-u * 0.45} ${u / 2} 0 t ${u / 2} 0`} stroke={c1} strokeWidth={u * 0.3} fill="none" />;
    case 'folhas':
      return (
        <Path
          key={k}
          d={`M${x + u * 0.15} ${y + u * 0.85} Q ${x + u * 0.1} ${y + u * 0.15} ${x + u * 0.85} ${y + u * 0.15} Q ${x + u * 0.9} ${y + u * 0.85} ${x + u * 0.15} ${y + u * 0.85} Z`}
          fill={k % 2 ? c1 : c2}
        />
      );
    case 'papelpicado': {
      // bandeirinha de papel recortado: retângulo com a ponta em V e furinhos
      const cores = [c1, c2, '#FFB000', '#7B2CBF', '#FF5A1F'];
      return (
        <G key={k}>
          <Path
            d={`M${x + u * 0.08} ${y + u * 0.08} H${x + u * 0.92} V${y + u * 0.8} L${x + u / 2} ${y + u * 0.95} L${x + u * 0.08} ${y + u * 0.8} Z`}
            fill={cores[k % cores.length]}
          />
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
      return (
        <Path
          key={k}
          d={`M${x} ${y + u / 2} C ${x + u * 0.3} ${y}, ${x + u * 0.7} ${y + u}, ${x + u} ${y + u / 2}`}
          stroke={c1}
          strokeWidth={u * 0.16}
          fill="none"
        />
      );
    case 'rangoli': {
      // flor simétrica de oito pétalas, como os desenhos de pó colorido
      const m = u / 2;
      return (
        <G key={k}>
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
            const a = (i * Math.PI) / 4;
            return <Circle key={i} cx={x + m + Math.cos(a) * u * 0.26} cy={y + m + Math.sin(a) * u * 0.26} r={u * 0.13} fill={i % 2 ? c1 : c2} />;
          })}
          <Circle cx={x + m} cy={y + m} r={u * 0.14} fill="#FFFFFF" />
        </G>
      );
    }
    case 'andino':
      // degraus geométricos, como nos tecidos dos Andes
      return (
        <G key={k}>
          <Path d={`M${x} ${y + u} V${y + u * 0.66} H${x + u * 0.33} V${y + u * 0.33} H${x + u * 0.66} V${y} H${x + u} V${y + u} Z`} fill={k % 2 ? c1 : c2} />
          <Rect x={x + u * 0.72} y={y + u * 0.62} width={u * 0.16} height={u * 0.16} fill="#B3261E" />
        </G>
      );
    case 'khokhloma':
      // folha dourada com duas frutinhas vermelhas
      return (
        <G key={k}>
          <Path
            d={`M${x + u * 0.1} ${y + u * 0.8} Q ${x + u * 0.2} ${y + u * 0.2} ${x + u * 0.7} ${y + u * 0.25} Q ${x + u * 0.55} ${y + u * 0.75} ${x + u * 0.1} ${y + u * 0.8} Z`}
            fill={c2}
          />
          <Circle cx={x + u * 0.75} cy={y + u * 0.62} r={u * 0.12} fill={c1} />
          <Circle cx={x + u * 0.6} cy={y + u * 0.8} r={u * 0.1} fill={c1} />
        </G>
      );
    case 'tulipa':
      // tulipa estilizada (vermelha) com folhas, sobre o branco da cerâmica
      return (
        <G key={k}>
          <Rect x={x} y={y} width={u} height={u} fill="#F4F7F9" />
          <Path d={`M${x + u / 2} ${y + u * 0.92} V${y + u * 0.5}`} stroke={c2} strokeWidth={u * 0.07} />
          <Path
            d={`M${x + u / 2} ${y + u * 0.75} Q ${x + u * 0.2} ${y + u * 0.7} ${x + u * 0.15} ${y + u * 0.45}`}
            stroke={c2}
            strokeWidth={u * 0.07}
            fill="none"
          />
          <Path
            d={`M${x + u * 0.32} ${y + u * 0.18} L${x + u * 0.42} ${y + u * 0.32} L${x + u / 2} ${y + u * 0.12} L${x + u * 0.58} ${y + u * 0.32} L${x + u * 0.68} ${y + u * 0.18} Q ${x + u * 0.7} ${y + u * 0.55} ${x + u / 2} ${y + u * 0.55} Q ${x + u * 0.3} ${y + u * 0.55} ${x + u * 0.32} ${y + u * 0.18} Z`}
            fill={c1}
          />
        </G>
      );
    case 'retalhos': {
      // retalhos de tecido costurados, como no jogakbo
      const cores = [c1, c2, '#F2C14E', '#5DADE2', '#F5EBDD', '#8E44AD'];
      return (
        <G key={k}>
          <Rect x={x} y={y} width={u * 0.6} height={u * 0.55} fill={cores[k % cores.length]} stroke="#F5EBDD" strokeWidth={0.8} />
          <Rect x={x + u * 0.6} y={y} width={u * 0.4} height={u * 0.55} fill={cores[(k + 2) % cores.length]} stroke="#F5EBDD" strokeWidth={0.8} />
          <Rect x={x} y={y + u * 0.55} width={u} height={u * 0.45} fill={cores[(k + 4) % cores.length]} stroke="#F5EBDD" strokeWidth={0.8} />
        </G>
      );
    }
    case 'pontocruz': {
      // losango de ponto-cruz: pequenos X em vermelho e preto
      const s = u / 5;
      const pontos = [
        [2, 0],
        [1, 1],
        [3, 1],
        [0, 2],
        [4, 2],
        [1, 3],
        [3, 3],
        [2, 4],
        [2, 2],
      ];
      return (
        <G key={k}>
          {pontos.map(([px, py], i) => (
            <Path
              key={i}
              d={`M${x + px! * s + 1} ${y + py! * s + 1} l${s - 2} ${s - 2} M${x + px! * s + s - 1} ${y + py! * s + 1} l${-(s - 2)} ${s - 2}`}
              stroke={i === 8 ? c2 : c1}
              strokeWidth={Math.max(1, s * 0.3)}
              strokeLinecap="round"
            />
          ))}
        </G>
      );
    }
  }
}

/** O padrão da moldura: preenche o anel em volta do tabuleiro com o motivo do tema, sem passar por baixo das casas. */
export function PadraoDaMoldura({
  largura,
  altura,
  borda,
  padrao,
  cores,
}: {
  largura: number;
  altura: number;
  borda: number;
  padrao: PadraoMoldura;
  cores: [string, string];
}) {
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

export type FeitioPeca = 'moeda' | 'concha' | 'ardosia' | 'ambar' | 'osso' | 'lapis' | 'areia' | 'flor' | 'vidro';

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
              return (
                <Line
                  key={i}
                  x1={r + Math.cos(a) * (r - 1.5)}
                  y1={r + Math.sin(a) * (r - 1.5)}
                  x2={r + Math.cos(a) * (r - tamanho * 0.09)}
                  y2={r + Math.sin(a) * (r - tamanho * 0.09)}
                  stroke="rgba(0,0,0,0.3)"
                  strokeWidth={0.8}
                />
              );
            })}
            <Circle cx={r} cy={r} r={r * 0.68} fill="none" stroke="rgba(0,0,0,0.35)" strokeWidth={1} />
            {/* um sol gravado no centro da moeda */}
            <Circle cx={r} cy={r} r={r * 0.2} fill="rgba(0,0,0,0.18)" />
            {Array.from({ length: 8 }, (_, i) => {
              const a = (i / 8) * 2 * Math.PI;
              return (
                <Line
                  key={`s${i}`}
                  x1={r + Math.cos(a) * r * 0.28}
                  y1={r + Math.sin(a) * r * 0.28}
                  x2={r + Math.cos(a) * r * 0.45}
                  y2={r + Math.sin(a) * r * 0.45}
                  stroke="rgba(0,0,0,0.25)"
                  strokeWidth={1.2}
                  strokeLinecap="round"
                />
              );
            })}
          </>
        );
      case 'concha':
        return (
          <>
            <Circle cx={r} cy={r} r={r - 1} fill={`url(#${g})`} stroke="rgba(0,0,0,0.45)" strokeWidth={1} />
            {[0.35, 0.55, 0.75].map((f) => (
              <Path
                key={f}
                d={`M${r - r * f} ${r + r * 0.3} Q ${r} ${r - r * f} ${r + r * f} ${r + r * 0.3}`}
                stroke="rgba(120,110,95,0.35)"
                strokeWidth={0.9}
                fill="none"
              />
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
              return (
                <Ellipse
                  key={i}
                  cx={r + Math.cos(a) * r * 0.55}
                  cy={r + Math.sin(a) * r * 0.55}
                  rx={r * 0.32}
                  ry={r * 0.2}
                  transform={`rotate(${(a * 180) / Math.PI} ${r + Math.cos(a) * r * 0.55} ${r + Math.sin(a) * r * 0.55})`}
                  fill={cor}
                  stroke="rgba(0,0,0,0.45)"
                  strokeWidth={0.8}
                />
              );
            })}
            <Circle cx={r} cy={r} r={r * 0.45} fill={`url(#${g})`} stroke="rgba(0,0,0,0.4)" strokeWidth={0.8} />
          </>
        );
      case 'vidro':
        // bolinha de gude: vidro com a espiral colorida por dentro e um reflexo forte
        return (
          <>
            <Circle cx={r} cy={r} r={r - 1} fill={`url(#${g})`} stroke="rgba(0,0,0,0.45)" strokeWidth={1} opacity={0.92} />
            <Path
              d={`M${r - r * 0.55} ${r + r * 0.15} Q ${r - r * 0.1} ${r - r * 0.65} ${r + r * 0.35} ${r - r * 0.1} T ${r + r * 0.55} ${r + r * 0.45}`}
              stroke="#FFFFFF"
              strokeWidth={r * 0.18}
              fill="none"
              opacity={0.75}
              strokeLinecap="round"
            />
            <Path
              d={`M${r - r * 0.4} ${r + r * 0.45} Q ${r} ${r + r * 0.05} ${r + r * 0.3} ${r + r * 0.55}`}
              stroke={cor}
              strokeWidth={r * 0.14}
              fill="none"
              opacity={0.9}
              strokeLinecap="round"
            />
            <Circle cx={r - r * 0.35} cy={r - r * 0.4} r={r * 0.16} fill="#FFFFFF" opacity={0.9} />
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
  const brilho = feitio === 'ardosia' ? 0.12 : feitio === 'ambar' || feitio === 'vidro' ? 0.75 : 0.55;
  return (
    <View style={{ width: tamanho, height: tamanho }}>
      <Svg width={tamanho} height={tamanho}>
        <Defs>
          <RadialGradient id={g} cx="38%" cy="32%" r="72%">
            <Stop offset="0" stopColor="#FFFFFF" stopOpacity={brilho} />
            <Stop offset="0.5" stopColor={cor} />
            <Stop offset="1" stopColor={cor} />
          </RadialGradient>
        </Defs>
        <DefsVolume />
        <Circle cx={r} cy={r + Math.max(1.2, r * 0.08)} r={r - 1} fill="rgba(0,0,0,0.28)" />
        {corpo}
        {feitio !== 'flor' && volumePeca(r, r, r - 1.6, feitio === 'ardosia' ? 0.18 : feitio === 'vidro' || feitio === 'ambar' ? 0 : 0.3)}
        {emblema && (
          <G transform={`translate(${r * 0.45}, ${r * 0.45}) scale(${(r * 1.1) / 512})`}>
            <Path d={emblema} fill="rgba(0,0,0,0.35)" />
          </G>
        )}
      </Svg>
    </View>
  );
}

/** Polígono regular (para os pods do octi e afins). */
export function PoligonoRegular({
  lados,
  r,
  cx,
  cy,
  ...props
}: {
  lados: number;
  r: number;
  cx: number;
  cy: number;
  fill: string;
  stroke?: string;
  strokeWidth?: number;
}) {
  const pts = Array.from({ length: lados }, (_, i) => {
    const a = (i / lados) * 2 * Math.PI - Math.PI / 2;
    return `${cx + Math.cos(a) * r},${cy + Math.sin(a) * r}`;
  }).join(' ');
  return <Polygon points={pts} {...props} />;
}

// ── texturas de material (pedido do dono, 15/10/2026: “melhora a textura geral”) ──────────────────
//
// Um conjunto pequeno de texturas reaproveitáveis, para todos os tabuleiros terem o mesmo acabamento:
// veio de madeira, granulado de pedra, tecido (feltro) e papel. Cada uma é um <Pattern> de SVG com
// poucos traços, repetido pelo navegador ou pelo celular: o custo é o de um retângulo só, seja o
// tabuleiro 3×3 ou 19×19. Por cima vai uma luz suave (mais clara no alto, mais escura nas bordas),
// que dá volume sem pesar.

export type MaterialTextura = 'madeira' | 'pedra' | 'tecido' | 'papel';

/** o material de cada tema vem do som dele (madeira soa a madeira, cerâmica e gelo são lisos como pedra) */
const MATERIAL_DO_SOM: Record<string, MaterialTextura> = {
  madeira: 'madeira',
  'madeira-grave': 'madeira',
  mata: 'madeira',
  pedra: 'pedra',
  ceramica: 'pedra',
  gelo: 'pedra',
  chuva: 'pedra',
  onda: 'pedra',
  moeda: 'pedra',
  areia: 'pedra',
  sino: 'papel',
  papel: 'papel',
  tecido: 'tecido',
};
/** exceções: o verde dos tabuleiros on-line fica como feltro, e o alto contraste fica liso de propósito */
const MATERIAL_DO_TEMA: Partial<Record<string, MaterialTextura | null>> = { verde: 'tecido', sakura: 'papel', contraste: null };

export function materialDoTema(tema: TemaJogo): MaterialTextura | null {
  if (tema.id in MATERIAL_DO_TEMA) return MATERIAL_DO_TEMA[tema.id] ?? null;
  return MATERIAL_DO_SOM[tema.som ?? 'madeira'] ?? 'madeira';
}

/** o material pelo som (a tábua da mancala, as coleções da loja): madeira, pedra, pano ou papel */
export function materialDoSom(som: string | undefined): MaterialTextura {
  return MATERIAL_DO_SOM[som ?? 'madeira'] ?? 'madeira';
}

/** se a cor (#RRGGBB) é escura: a textura troca o risco escuro pelo claro, para aparecer */
export function corEscura(cor: string | undefined): boolean {
  const m = /^#([0-9a-f]{6})$/i.exec(cor ?? '');
  if (!m) return false;
  const n = parseInt(m[1]!, 16);
  return 0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255) < 110;
}

/** o desenho de um ladrilho da textura (o padrão repete este ladrilho) */
function ladrilho(material: MaterialTextura, escura: boolean): { w: number; h: number; tracos: ReactNode } {
  const sombra = escura ? 'rgba(0,0,0,0.32)' : 'rgba(70,40,10,0.15)';
  const luz = escura ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.3)';
  switch (material) {
    case 'madeira':
      return {
        w: 96,
        h: 28,
        tracos: (
          <>
            <Path d="M0 4 C24 2 52 7 96 4" stroke={sombra} strokeWidth={0.9} fill="none" />
            <Path d="M0 10 C30 12 62 8 96 10" stroke={luz} strokeWidth={1.2} fill="none" />
            <Path d="M0 17 C22 15 70 21 96 17" stroke={sombra} strokeWidth={1.4} fill="none" />
            <Path d="M0 24 C40 23 58 26 96 24" stroke={sombra} strokeWidth={0.6} fill="none" />
            <Path d="M30 20 C40 18 50 18 60 20" stroke={sombra} strokeWidth={0.8} fill="none" />
          </>
        ),
      };
    case 'pedra':
      return {
        w: 30,
        h: 30,
        tracos: (
          <>
            {[
              [4, 6, 1.1, 0],
              [17, 3, 0.7, 1],
              [25, 12, 1, 0],
              [9, 18, 0.8, 1],
              [21, 24, 1.2, 0],
              [3, 27, 0.7, 1],
              [13, 10, 0.6, 0],
              [27, 20, 0.6, 1],
            ].map(([x, y, r, l], i) => (
              <Circle key={i} cx={x} cy={y} r={r} fill={l ? luz : sombra} />
            ))}
            <Path d="M0 15 Q 8 12 14 16 T 30 14" stroke={sombra} strokeWidth={0.5} fill="none" opacity={0.6} />
          </>
        ),
      };
    case 'tecido':
      // a trama do pano: fios cruzados bem finos
      return {
        w: 6,
        h: 6,
        tracos: (
          <>
            <Rect x={0} y={1} width={6} height={1.2} fill={sombra} opacity={0.55} />
            <Rect x={3.5} y={0} width={1.2} height={6} fill={luz} opacity={0.6} />
          </>
        ),
      };
    case 'papel':
      // as fibras do papel feito à mão
      return {
        w: 48,
        h: 48,
        tracos: (
          <>
            <Path d="M4 8 l9 2" stroke={sombra} strokeWidth={0.6} />
            <Path d="M30 4 l6 7" stroke={luz} strokeWidth={0.9} />
            <Path d="M18 26 l11 -3" stroke={sombra} strokeWidth={0.5} />
            <Path d="M6 38 l5 6" stroke={luz} strokeWidth={0.8} />
            <Path d="M36 34 l9 1" stroke={sombra} strokeWidth={0.6} />
            <Circle cx={40} cy={18} r={0.8} fill={sombra} />
            <Circle cx={12} cy={22} r={0.6} fill={sombra} />
          </>
        ),
      };
  }
}

/** o id do padrão de um material, para usar como `fill={`url(#${idTextura(…)})`}` depois de `<DefsTextura/>` */
export function idTextura(material: MaterialTextura, escura = false): string {
  return `tx-${material}-${escura ? 'e' : 'c'}`;
}

function padraoTextura(material: MaterialTextura, escura: boolean): ReactNode {
  const l = ladrilho(material, escura);
  return (
    <Pattern id={idTextura(material, escura)} patternUnits="userSpaceOnUse" x={0} y={0} width={l.w} height={l.h}>
      {l.tracos}
    </Pattern>
  );
}

/** A definição do padrão de um material, para preencher uma forma qualquer (o hexágono do abalone, a estrela das damas chinesas). */
export function DefsTextura({ material, escura = false }: { material: MaterialTextura | null; escura?: boolean }) {
  if (!material) return null;
  return <Defs>{padraoTextura(material, escura)}</Defs>;
}

/**
 * As camadas da textura para pôr dentro de um <Svg> que já existe: o padrão do material e a luz
 * suave. Sem `largura`/`altura`, cobre o <Svg> inteiro.
 */
export function camadasTextura({
  largura = '100%',
  altura = '100%',
  material,
  escura = false,
  intensidade = 1,
  luz = true,
  x = 0,
  y = 0,
}: {
  largura?: number | string;
  altura?: number | string;
  material: MaterialTextura | null;
  escura?: boolean;
  intensidade?: number;
  luz?: boolean;
  x?: number;
  y?: number;
}): ReactNode {
  const id = material ? idTextura(material, escura) : null;
  return (
    <>
      <Defs>
        {material && padraoTextura(material, escura)}
        {luz && (
          <RadialGradient id="tx-luz" cx="45%" cy="30%" r="80%">
            <Stop offset="0" stopColor="#FFFFFF" stopOpacity={0.12} />
            <Stop offset="0.55" stopColor="#FFFFFF" stopOpacity={0} />
            <Stop offset="1" stopColor="#000000" stopOpacity={0.16} />
          </RadialGradient>
        )}
      </Defs>
      {id && <Rect x={x} y={y} width={largura} height={altura} fill={`url(#${id})`} opacity={intensidade} />}
      {luz && <Rect x={x} y={y} width={largura} height={altura} fill="url(#tx-luz)" />}
    </>
  );
}

/**
 * A textura por cima de uma superfície lisa (o fundo do tabuleiro, a moldura, a tábua da mancala, o
 * feltro da mesa de cartas). Fica por baixo das peças e não pega toque: é só pôr como primeiro filho
 * da superfície. Sem `largura`/`altura`, cobre o pai inteiro. O material vem do tema (`tema`) ou é
 * dado direto (`material`; `null` deixa só a luz). `fundo` é a cor de baixo, para o risco aparecer
 * tanto na superfície clara quanto na escura.
 */
export function Textura({
  largura,
  altura,
  tema,
  fundo,
  material,
  intensidade = 1,
  luz = true,
  raio = 0,
}: {
  largura?: number;
  altura?: number;
  tema?: TemaJogo;
  fundo?: string;
  material?: MaterialTextura | null;
  intensidade?: number;
  luz?: boolean;
  raio?: number;
}) {
  const mat = material !== undefined ? material : tema ? materialDoTema(tema) : null;
  // o alto contraste fica liso de propósito: nem textura nem luz
  if ((!mat && (!luz || tema?.id === 'contraste')) || largura === 0 || altura === 0) return null;
  const caixa = largura !== undefined && altura !== undefined ? { left: 0, top: 0, width: largura, height: altura } : { left: 0, top: 0, right: 0, bottom: 0 };
  return (
    <View style={{ position: 'absolute', ...caixa, borderRadius: raio, overflow: 'hidden', pointerEvents: 'none' }}>
      <Svg width={largura ?? '100%'} height={altura ?? '100%'}>
        {camadasTextura({ material: mat, escura: corEscura(fundo ?? tema?.superficie), intensidade, luz })}
      </Svg>
    </View>
  );
}

// ── buracos e covas ─────────────────────────────────────────────────────────────────────────────

/**
 * A sombra de dentro de um buraco (a cova do kōnane, o furo das damas chinesas, a casa do Ligue 4):
 * mais escura na borda de cima, onde a parede da cova faz sombra, e um fio de luz embaixo. Vai dentro
 * de um <Svg>, por cima do círculo da cor do buraco. A definição do degradê vem de `<DefsBuraco/>`.
 */
export function sombraBuraco(cx: number, cy: number, r: number, key?: string | number, fio = true): ReactNode {
  if (!fio) return <Circle key={key} cx={cx} cy={cy} r={r} fill="url(#tx-buraco)" />;
  return (
    <G key={key}>
      <Circle cx={cx} cy={cy} r={r} fill="url(#tx-buraco)" />
      <Path d={`M${cx - r * 0.7} ${cy + r * 0.62} A ${r * 0.94} ${r * 0.94} 0 0 0 ${cx + r * 0.7} ${cy + r * 0.62}`} stroke="rgba(255,255,255,0.3)" strokeWidth={Math.max(0.8, r * 0.1)} fill="none" />
    </G>
  );
}

export function DefsBuraco() {
  return (
    <Defs>
      <RadialGradient id="tx-buraco" cx="50%" cy="62%" r="58%">
        <Stop offset="0" stopColor="#000000" stopOpacity={0} />
        <Stop offset="0.65" stopColor="#000000" stopOpacity={0.08} />
        <Stop offset="1" stopColor="#000000" stopOpacity={0.5} />
      </RadialGradient>
    </Defs>
  );
}

/**
 * A sombra de dentro de uma cova feita de <View> (a casa da mancala, o furo do Ligue 4, a cova do
 * kōnane e do pylos), sem SVG, para custar pouco mesmo com cem covas: a borda de cima faz sombra e a de
 * baixo pega luz. Vai como filho da cova, que precisa ter o mesmo `borderRadius`.
 */
export function SombraCova({ raio, espessura = 3 }: { raio: number; espessura?: number }) {
  return (
    <View
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        borderRadius: raio,
        borderWidth: espessura,
        borderTopColor: 'rgba(0,0,0,0.38)',
        borderLeftColor: 'rgba(0,0,0,0.22)',
        borderRightColor: 'rgba(255,255,255,0.08)',
        borderBottomColor: 'rgba(255,255,255,0.22)',
        pointerEvents: 'none',
      }}
    />
  );
}

// ── volume das peças ────────────────────────────────────────────────────────────────────────────

/** O degradê do volume das peças redondas; vai uma vez em cada <Svg> que usa `volumePeca`. */
export function DefsVolume() {
  return (
    <Defs>
      <RadialGradient id="tx-volume" cx="45%" cy="38%" r="62%">
        <Stop offset="0.7" stopColor="#000000" stopOpacity={0} />
        <Stop offset="1" stopColor="#000000" stopOpacity={0.3} />
      </RadialGradient>
    </Defs>
  );
}

/**
 * O volume de uma peça redonda (disco, pedra, bola): a borda de baixo um pouco mais escura e um brilho
 * pequeno no alto, com a luz vindo do alto à esquerda, igual em todos os jogos.
 */
export function volumePeca(cx: number, cy: number, r: number, brilho = 0.4): ReactNode {
  return (
    <>
      <Circle cx={cx} cy={cy} r={r} fill="url(#tx-volume)" />
      {brilho > 0 && (
        <Ellipse cx={cx - r * 0.3} cy={cy - r * 0.44} rx={r * 0.26} ry={r * 0.14} fill="#FFFFFF" opacity={brilho} transform={`rotate(-35 ${cx - r * 0.3} ${cy - r * 0.44})`} />
      )}
    </>
  );
}

/** O degradê de luz de cima para baixo das peças planas (shogi, janggi): vai uma vez em cada <Svg>. */
export function DefsBrilho() {
  return (
    <Defs>
      <LinearGradient id="tx-brilho" x1="0" y1="0" x2="0" y2="1">
        <Stop offset="0" stopColor="#FFFFFF" stopOpacity={0.38} />
        <Stop offset="0.45" stopColor="#FFFFFF" stopOpacity={0} />
        <Stop offset="1" stopColor="#000000" stopOpacity={0.18} />
      </LinearGradient>
    </Defs>
  );
}

/**
 * O relevo de uma peça feita de <View> (o disco do xiangqi): a quina de cima pega luz e a de baixo
 * faz sombra, ao contrário da `SombraCova`. Vai como filho da peça, que precisa ter o mesmo `borderRadius`.
 */
export function RelevoPeca({ raio, espessura = 2 }: { raio: number; espessura?: number }) {
  return (
    <View
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        borderRadius: raio,
        borderWidth: espessura,
        borderTopColor: 'rgba(255,255,255,0.5)',
        borderLeftColor: 'rgba(255,255,255,0.25)',
        borderRightColor: 'rgba(0,0,0,0.12)',
        borderBottomColor: 'rgba(0,0,0,0.25)',
        pointerEvents: 'none',
      }}
    />
  );
}
