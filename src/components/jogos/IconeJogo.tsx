import Svg, { Circle, Ellipse, G, Line, Path, Polygon, Rect, SvgXml, Text as SvgText } from 'react-native-svg';
import { PECAS_XADREZ_SVG } from '@/data/pecas-xadrez';

const P = '#1C1F24';
const B = '#F6F3EA';
const MADEIRA = '#DCB35C';
const ESCURO = '#B58863';
const CLARO = '#F0D9B5';

/** Uma pedra/peça redonda pequena, com contorno. */
const pedra = (cx: number, cy: number, r: number, cor: string, k: string | number) => <Circle key={k} cx={cx} cy={cy} r={r} fill={cor} stroke="#000" strokeWidth={1} />;

/**
 * Ícone desenhado de cada jogo (no lugar do emoji, que não existe para todos e é pequeno demais;
 * regra do app, ver AGENTS.md). Tamanho padrão 48.
 */
export function IconeJogo({ id, tamanho = 48 }: { id: string; tamanho?: number }) {
  const s = tamanho;
  if (id === 'xadrez') {
    return (
      <Svg width={s} height={s} viewBox="0 0 48 48">
        <Rect x={0} y={0} width={48} height={48} rx={10} fill={CLARO} />
        <Rect x={24} y={0} width={24} height={24} fill={ESCURO} />
        <Rect x={0} y={24} width={24} height={24} fill={ESCURO} />
        <G>
          <SvgXml xml={PECAS_XADREZ_SVG.wn!} width={30} height={30} x={2} y={14} />
          <SvgXml xml={PECAS_XADREZ_SVG.bk!} width={26} height={26} x={20} y={2} />
        </G>
      </Svg>
    );
  }
  const corpo = (() => {
    switch (id) {
      case 'damas':
      case 'damas-chinesas-old':
        return (
          <>
            <Rect x={0} y={0} width={48} height={48} rx={10} fill={CLARO} />
            {[0, 1, 2, 3].map((r) => [0, 1, 2, 3].map((c) => ((r + c) % 2 ? <Rect key={`${r}${c}`} x={c * 12} y={r * 12} width={12} height={12} fill={ESCURO} /> : null)))}
            {pedra(18, 18, 8, P, 'a')}
            {pedra(30, 30, 8, B, 'b')}
            <Circle cx={30} cy={30} r={4} fill="none" stroke="#8A8170" strokeWidth={1.5} />
          </>
        );
      case 'go':
      case 'gomoku':
        return (
          <>
            <Rect x={0} y={0} width={48} height={48} rx={10} fill={MADEIRA} />
            {[8, 16, 24, 32, 40].map((v) => (
              <G key={v}>
                <Line x1={8} y1={v} x2={40} y2={v} stroke="#3B2A14" strokeWidth={1} />
                <Line x1={v} y1={8} x2={v} y2={40} stroke="#3B2A14" strokeWidth={1} />
              </G>
            ))}
            {id === 'go'
              ? [pedra(16, 16, 5, P, 1), pedra(24, 16, 5, B, 2), pedra(24, 24, 5, P, 3), pedra(32, 24, 5, B, 4), pedra(16, 32, 5, B, 5)]
              : [8, 16, 24, 32, 40].map((v, k) => pedra(v, v, 4.5, k === 4 ? B : P, k))}
          </>
        );
      case 'velha':
        return (
          <>
            <Rect x={0} y={0} width={48} height={48} rx={10} fill="#FFFFFF" />
            <Path d="M17 6 V42 M31 6 V42 M6 17 H42 M6 31 H42" stroke="#334155" strokeWidth={2.5} strokeLinecap="round" />
            <Path d="M8 8 L15 15 M15 8 L8 15" stroke="#E11D48" strokeWidth={3} strokeLinecap="round" />
            <Path d="M21 21 L28 28 M28 21 L21 28" stroke="#E11D48" strokeWidth={3} strokeLinecap="round" />
            <Circle cx={38} cy={11} r={4.5} fill="none" stroke="#2563EB" strokeWidth={3} />
            <Circle cx={11} cy={38} r={4.5} fill="none" stroke="#2563EB" strokeWidth={3} />
            <Path d="M33 33 L40 40 M40 33 L33 40" stroke="#E11D48" strokeWidth={3} strokeLinecap="round" />
          </>
        );
      case 'conecta4':
        return (
          <>
            <Rect x={0} y={0} width={48} height={48} rx={10} fill="#1D4ED8" />
            {[0, 1, 2, 3].map((r) =>
              [0, 1, 2, 3].map((c) => {
                const cor = r === 3 - c ? '#E11D48' : r === 3 && c > 0 ? '#FACC15' : '#0B1F4D';
                return <Circle key={`${r}${c}`} cx={9 + c * 10} cy={9 + r * 10} r={4.2} fill={cor} />;
              }),
            )}
          </>
        );
      case 'reversi':
        return (
          <>
            <Rect x={0} y={0} width={48} height={48} rx={10} fill="#1F7A3D" />
            <Path d="M24 4 V44 M4 24 H44" stroke="#0E4D24" strokeWidth={1.5} />
            {pedra(14, 14, 8, B, 1)}
            {pedra(34, 14, 8, P, 2)}
            {pedra(14, 34, 8, P, 3)}
            {pedra(34, 34, 8, B, 4)}
          </>
        );
      case 'nim':
        // palitos em fileiras de 1, 3, 5 e 7 (as de Marienbad)
        return (
          <>
            <Rect x={0} y={0} width={48} height={48} rx={10} fill="#14532D" />
            {[1, 3, 5, 7].flatMap((n, r) =>
              Array.from({ length: n }, (_, k) => {
                const x = 24 + (k - (n - 1) / 2) * 5.2;
                const y = 5 + r * 10.5;
                return (
                  <G key={`${r}-${k}`}>
                    <Rect x={x - 0.9} y={y + 1.5} width={1.8} height={7.5} rx={0.6} fill="#E7C38B" />
                    <Circle cx={x} cy={y + 1.5} r={1.5} fill="#DC2626" />
                  </G>
                );
              }),
            )}
          </>
        );
      case 'alquerque':
        // a grade 5×5 com as diagonais, peças claras embaixo e escuras em cima, o meio vazio
        return (
          <>
            <Rect x={0} y={0} width={48} height={48} rx={10} fill="#E8D5A8" />
            <Path
              d="M6 6 H42 M6 15 H42 M6 24 H42 M6 33 H42 M6 42 H42 M6 6 V42 M15 6 V42 M24 6 V42 M33 6 V42 M42 6 V42 M6 6 L42 42 M42 6 L6 42 M24 6 L42 24 L24 42 L6 24 Z"
              stroke="#6B4423"
              strokeWidth={1.3}
              fill="none"
            />
            {[6, 15, 24, 33, 42].flatMap((x) => [
              <Circle key={`e${x}`} cx={x} cy={6} r={3.4} fill="#3F2A1D" />,
              <Circle key={`c${x}`} cx={x} cy={42} r={3.4} fill="#FFF8E7" stroke="#6B4423" strokeWidth={0.8} />,
            ])}
            <Circle cx={15} cy={24} r={3.4} fill="#3F2A1D" />
            <Circle cx={33} cy={24} r={3.4} fill="#FFF8E7" stroke="#6B4423" strokeWidth={0.8} />
          </>
        );
      case 'moinho':
        return (
          <>
            <Rect x={0} y={0} width={48} height={48} rx={10} fill={MADEIRA} />
            <Rect x={6} y={6} width={36} height={36} fill="none" stroke="#3B2A14" strokeWidth={2} />
            <Rect x={14} y={14} width={20} height={20} fill="none" stroke="#3B2A14" strokeWidth={2} />
            <Path d="M24 6 V14 M24 34 V42 M6 24 H14 M34 24 H42" stroke="#3B2A14" strokeWidth={2} />
            {pedra(6, 6, 4.5, P, 1)}
            {pedra(24, 6, 4.5, P, 2)}
            {pedra(42, 6, 4.5, P, 3)}
            {pedra(34, 34, 4.5, B, 4)}
          </>
        );
      case 'hnefatafl':
        return (
          <>
            <Rect x={0} y={0} width={48} height={48} rx={10} fill={CLARO} />
            <Rect x={18} y={18} width={12} height={12} fill="#E3B04B" />
            <Rect x={0} y={0} width={10} height={10} fill="#E3B04B" />
            <Rect x={38} y={38} width={10} height={10} fill="#E3B04B" />
            {pedra(24, 24, 6, B, 'r')}
            <Path d="M22.5 19.5 h3 v3 h3 v3 h-3 v5 h-3 v-5 h-3 v-3 h3 Z" fill="#C9A227" stroke="#000" strokeWidth={0.6} />
            {pedra(24, 10, 4, P, 1)}
            {pedra(38, 24, 4, P, 2)}
            {pedra(10, 24, 4, P, 3)}
            {pedra(24, 38, 4, P, 4)}
          </>
        );
      case 'oware':
        return (
          <>
            <Rect x={1} y={12} width={46} height={24} rx={12} fill="#8B5A2B" />
            {[0, 1, 2].map((c) =>
              [0, 1].map((r) => (
                <G key={`${r}${c}`}>
                  <Circle cx={12 + c * 12} cy={19 + r * 10} r={4.5} fill="#5C3A1A" />
                  <Circle cx={11 + c * 12} cy={18 + r * 10} r={1.4} fill="#E8D9B0" />
                  <Circle cx={13.5 + c * 12} cy={20 + r * 10} r={1.4} fill="#E8D9B0" />
                </G>
              )),
            )}
          </>
        );
      case 'bao':
        // o tabuleiro de 4 fileiras de 8 covas, com a nyumba quadrada nas fileiras do meio
        return (
          <>
            <Rect x={0} y={0} width={48} height={48} rx={10} fill="#8B5A2B" />
            {[0, 1, 2, 3].map((r) =>
              [0, 1, 2, 3, 4, 5, 6, 7].map((c) => {
                const x = 4.5 + c * 5.5;
                const y = 8 + r * 9 + (r >= 2 ? 2 : 0);
                const casa = (r === 1 && c === 3) || (r === 2 && c === 4);
                return casa ? (
                  <Rect key={`${r}${c}`} x={x - 2.3} y={y - 2.3} width={4.6} height={4.6} rx={0.8} fill="#5C3A1A" stroke="#E0B04B" strokeWidth={0.8} />
                ) : (
                  <Circle key={`${r}${c}`} cx={x} cy={y} r={2.3} fill="#5C3A1A" />
                );
              }),
            )}
            {[
              [10, 26],
              [20.5, 24.5],
              [27, 26],
              [15, 35],
              [37, 34],
            ].map(([x, y], k) => (
              <Circle key={k} cx={x} cy={y} r={1.1} fill="#E8D9B0" />
            ))}
          </>
        );
      case 'sungka':
        // o tabuleiro filipino em forma de barco: 2 fileiras de 7 casinhas e os dois depósitos nas pontas
        return (
          <>
            <Rect x={0} y={0} width={48} height={48} rx={10} fill="#0E7490" />
            <Path d="M2 24 Q6 12 16 13 H32 Q42 12 46 24 Q42 36 32 35 H16 Q6 36 2 24 Z" fill="#C68642" stroke="#6B3F17" strokeWidth={1.5} />
            <Ellipse cx={7.5} cy={24} rx={3} ry={5.5} fill="#8E5A28" />
            <Ellipse cx={40.5} cy={24} rx={3} ry={5.5} fill="#8E5A28" />
            {[0, 1, 2, 3, 4, 5, 6].flatMap((k) => [
              <Circle key={`a${k}`} cx={13 + k * 3.7} cy={19.5} r={1.6} fill="#8E5A28" />,
              <Circle key={`b${k}`} cx={13 + k * 3.7} cy={28.5} r={1.6} fill="#8E5A28" />,
            ])}
            <Ellipse cx={40.5} cy={22} rx={1.4} ry={1} fill="#FFF8E7" />
          </>
        );
      case 'toguz-korgool':
        // o tabuleiro comprido da Ásia Central: 2 fileiras de 9 covas e os dois kazans no meio
        return (
          <>
            <Rect x={0} y={0} width={48} height={48} rx={10} fill="#3B2A1D" />
            <Rect x={2} y={11} width={44} height={26} rx={6} fill="#C9B18A" stroke="#6E5A3A" strokeWidth={1.5} />
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].flatMap((k) => [
              <Circle key={`a${k}`} cx={6.5 + k * 4.4} cy={16} r={1.9} fill="#9C875E" />,
              <Circle key={`b${k}`} cx={6.5 + k * 4.4} cy={32} r={1.9} fill="#9C875E" />,
            ])}
            <Rect x={6} y={21.5} width={36} height={2} rx={1} fill="#9C875E" />
            <Rect x={6} y={25} width={36} height={2} rx={1} fill="#9C875E" />
            <Circle cx={6.5 + 4 * 4.4} cy={32} r={1.9} fill="#7C3AED" />
          </>
        );
      case 'pallanguzhi':
        // o tabuleiro de metal do sul da Índia, com 2 fileiras de 7 covas e búzios
        return (
          <>
            <Rect x={0} y={0} width={48} height={48} rx={10} fill="#7A1F1F" />
            <Rect x={3} y={14} width={42} height={20} rx={7} fill="#D4AF37" stroke="#8A6A1A" strokeWidth={1.5} />
            {[0, 1, 2, 3, 4, 5, 6].flatMap((k) => [
              <Circle key={`a${k}`} cx={8 + k * 5.3} cy={19.5} r={2.2} fill="#B8922A" />,
              <Circle key={`b${k}`} cx={8 + k * 5.3} cy={28.5} r={2.2} fill="#B8922A" />,
            ])}
            <Ellipse cx={13.3} cy={28.5} rx={1.6} ry={1.1} fill="#FFF8E7" />
            <Ellipse cx={29.2} cy={19.5} rx={1.6} ry={1.1} fill="#FFF8E7" />
          </>
        );
      case 'kalah':
        // as duas fileiras de casas e os dois depósitos compridos nas pontas
        return (
          <>
            <Rect x={1} y={10} width={46} height={28} rx={12} fill="#8B5A2B" />
            <Rect x={4} y={14} width={7} height={20} rx={3.5} fill="#5C3A1A" />
            <Rect x={37} y={14} width={7} height={20} rx={3.5} fill="#5C3A1A" />
            {[0, 1, 2].map((c) =>
              [0, 1].map((r) => (
                <G key={`${r}${c}`}>
                  <Circle cx={17 + c * 7} cy={19 + r * 10} r={3.2} fill="#5C3A1A" />
                  <Circle cx={17 + c * 7} cy={19 + r * 10} r={1.2} fill="#E8D9B0" />
                </G>
              )),
            )}
            <Circle cx={40.5} cy={20} r={1.4} fill="#E8D9B0" />
            <Circle cx={40.5} cy={25} r={1.4} fill="#E8D9B0" />
            <Circle cx={40.5} cy={30} r={1.4} fill="#E8D9B0" />
          </>
        );
      case 'fanorona':
        // a grade com as diagonais e a fileira do meio alternada, com o ponto central vazio
        return (
          <>
            <Rect x={0} y={0} width={48} height={48} rx={10} fill={MADEIRA} />
            {[8, 24, 40].map((v) => (
              <G key={v}>
                <Line x1={4} y1={v} x2={44} y2={v} stroke="#3B2A14" strokeWidth={1} />
              </G>
            ))}
            {[4, 14, 24, 34, 44].map((v) => (
              <Line key={v} x1={v} y1={8} x2={v} y2={40} stroke="#3B2A14" strokeWidth={1} />
            ))}
            <Path d="M4 8 L36 40 M14 8 L44 38 M44 8 L12 40 M34 8 L4 38" stroke="#3B2A14" strokeWidth={0.8} />
            {[4, 14, 24, 34, 44].map((x, k) => pedra(x, 8, 3.6, P, `p${k}`))}
            {[4, 14, 34, 44].map((x, k) => pedra(x, 24, 3.6, k % 2 ? B : P, `m${k}`))}
            {[4, 14, 24, 34, 44].map((x, k) => pedra(x, 40, 3.6, B, `b${k}`))}
          </>
        );
      case 'damas-chinesas': {
        // a estrela de 6 pontas, com bolinhas de três cores em três pontas
        const c = 24;
        const pt = (q: number, r: number) => `${c + 2.6 * (q + r / 2)},${c + 2.6 * 0.866 * r}`;
        const bola = (q: number, r: number, cor: string, k: string) => pedra(c + 2.6 * (q + r / 2), c + 2.6 * 0.866 * r, 2.3, cor, k);
        return (
          <>
            <Rect x={0} y={0} width={48} height={48} rx={10} fill={MADEIRA} />
            <Polygon points={[pt(8, -4), pt(-4, 8), pt(-4, -4)].join(' ')} fill="#F5E6C8" stroke="#3B2A14" strokeWidth={1} />
            <Polygon points={[pt(-8, 4), pt(4, -8), pt(4, 4)].join(' ')} fill="#F5E6C8" stroke="#3B2A14" strokeWidth={1} />
            <Polygon points={[pt(8, -4), pt(-4, 8), pt(-4, -4)].join(' ')} fill="#F5E6C8" />
            {[
              [-2, 6],
              [-1, 6],
              [-2, 7],
            ].map(([q, r], k) => bola(q!, r!, '#E11D48', `v${k}`))}
            {[
              [2, -6],
              [1, -6],
              [2, -7],
            ].map(([q, r], k) => bola(q!, r!, '#2563EB', `a${k}`))}
            {[
              [6, -3],
              [6, -2],
              [5, -2],
            ].map(([q, r], k) => bola(q!, r!, '#16A34A', `g${k}`))}
          </>
        );
      }
      case 'gamao':
        // os triângulos (pontos) de cima e de baixo, duas peças e um dado
        return (
          <>
            <Rect x={0} y={0} width={48} height={48} rx={10} fill={MADEIRA} />
            {[0, 1, 2, 3, 4, 5].map((k) => (
              <G key={k}>
                <Polygon points={`${2 + k * 7.4},2 ${9.4 + k * 7.4},2 ${5.7 + k * 7.4},20`} fill={k % 2 ? CLARO : ESCURO} stroke="#3B2A14" strokeWidth={0.5} />
                <Polygon points={`${2 + k * 7.4},46 ${9.4 + k * 7.4},46 ${5.7 + k * 7.4},28`} fill={k % 2 ? ESCURO : CLARO} stroke="#3B2A14" strokeWidth={0.5} />
              </G>
            ))}
            {pedra(5.7, 41, 3.4, B, 'b1')}
            {pedra(5.7, 34.5, 3.4, B, 'b2')}
            {pedra(42.7, 7, 3.4, P, 'p1')}
            <Rect x={17} y={17} width={14} height={14} rx={3} fill="#FBF7EE" stroke="#1C1917" strokeWidth={1.2} />
            {[
              [20.5, 20.5],
              [27.5, 20.5],
              [24, 24],
              [20.5, 27.5],
              [27.5, 27.5],
            ].map(([x, y], k) => (
              <Circle key={k} cx={x} cy={y} r={1.4} fill="#1C1917" />
            ))}
          </>
        );
      case 'domino':
        // duas pedras de marfim encostadas em L: um 6|3 deitado e um 3|3 atravessado
        return (
          <>
            <Rect x={0} y={0} width={48} height={48} rx={10} fill="#1F6F4A" />
            <Rect x={4} y={18} width={26} height={13} rx={2.5} fill="#FBF7EC" stroke="#3B2A14" strokeWidth={1} />
            <Line x1={17} y1={20} x2={17} y2={29} stroke="#8A7A60" strokeWidth={1} />
            {[[7.5, 21], [7.5, 24.5], [7.5, 28], [13.5, 21], [13.5, 24.5], [13.5, 28], [20, 21], [23.5, 24.5], [27, 28]].map(([x, y], k) => (
              <Circle key={k} cx={x} cy={y} r={1.3} fill="#1C1917" />
            ))}
            <Rect x={31} y={11.5} width={13} height={26} rx={2.5} fill="#FBF7EC" stroke="#3B2A14" strokeWidth={1} />
            <Line x1={33} y1={24.5} x2={42} y2={24.5} stroke="#8A7A60" strokeWidth={1} />
            {[[34, 14.5], [37.5, 18], [41, 21.5], [34, 27.5], [37.5, 31], [41, 34.5]].map(([x, y], k) => (
              <Circle key={`b${k}`} cx={x} cy={y} r={1.3} fill="#1C1917" />
            ))}
          </>
        );
      case 'makruk':
        // o tabuleiro de uma cor só, com as linhas, o bia na 3ª fileira e o khun
        return (
          <>
            <Rect x={0} y={0} width={48} height={48} rx={10} fill={ESCURO} />
            {[12, 24, 36].map((v) => (
              <G key={v}>
                <Line x1={0} y1={v} x2={48} y2={v} stroke="#3B2A14" strokeWidth={0.8} />
                <Line x1={v} y1={0} x2={v} y2={48} stroke="#3B2A14" strokeWidth={0.8} />
              </G>
            ))}
            <SvgXml xml={PECAS_XADREZ_SVG.wk!} width={24} height={24} x={2} y={22} />
            <SvgXml xml={PECAS_XADREZ_SVG.bn!} width={22} height={22} x={24} y={2} />
            {pedra(30, 33, 3, B, 'b1')}
            {pedra(42, 33, 3, B, 'b2')}
          </>
        );
      case 'janggi': {
        // duas peças octogonais, os generais 漢 (vermelho) e 楚 (azul), num tabuleiro sem rio
        const oct = (cx: number, cy: number, r: number) =>
          Array.from({ length: 8 }, (_, k) => `${cx + r * Math.cos(Math.PI / 8 + (k * Math.PI) / 4)},${cy + r * Math.sin(Math.PI / 8 + (k * Math.PI) / 4)}`).join(' ');
        return (
          <>
            <Rect x={0} y={0} width={48} height={48} rx={10} fill={MADEIRA} />
            {[8, 18, 28, 38].map((v) => (
              <G key={v}>
                <Line x1={4} y1={v} x2={44} y2={v} stroke="#3B2A14" strokeWidth={0.8} />
                <Line x1={v} y1={4} x2={v} y2={44} stroke="#3B2A14" strokeWidth={0.8} />
              </G>
            ))}
            <Polygon points={oct(16, 31, 11)} fill="#F3E3C0" stroke="#B91C1C" strokeWidth={2} />
            <SvgText x={16} y={36} fontSize={13} fontWeight="bold" fill="#B91C1C" textAnchor="middle">
              漢
            </SvgText>
            <Polygon points={oct(32, 17, 11)} fill="#F3E3C0" stroke="#1D4ED8" strokeWidth={2} />
            <SvgText x={32} y={22} fontSize={13} fontWeight="bold" fill="#1D4ED8" textAnchor="middle">
              楚
            </SvgText>
          </>
        );
      }
      case 'xiangqi':
        // duas peças redondas com os caracteres do cavalo (vermelho) e do carro (preto)
        return (
          <>
            <Rect x={0} y={0} width={48} height={48} rx={10} fill={MADEIRA} />
            <Line x1={4} y1={24} x2={44} y2={24} stroke="#3B2A14" strokeWidth={1} />
            <Circle cx={16} cy={30} r={11} fill="#F5E6C8" stroke="#B91C1C" strokeWidth={2} />
            <SvgText x={16} y={35} fontSize={13} fontWeight="bold" fill="#B91C1C" textAnchor="middle">
              傌
            </SvgText>
            <Circle cx={32} cy={18} r={11} fill="#F5E6C8" stroke="#1C1917" strokeWidth={2} />
            <SvgText x={32} y={23} fontSize={13} fontWeight="bold" fill="#1C1917" textAnchor="middle">
              車
            </SvgText>
          </>
        );
      case 'shogi':
        // duas peças pentagonais com kanji: a torre (飛) do sente e o dragão (龍, vermelho) do gote, de cabeça para baixo
        return (
          <>
            <Rect x={0} y={0} width={48} height={48} rx={10} fill={MADEIRA} />
            {[12, 24, 36].map((k) => (
              <G key={k}>
                <Line x1={k} y1={2} x2={k} y2={46} stroke="#3B2A14" strokeWidth={0.8} />
                <Line x1={2} y1={k} x2={46} y2={k} stroke="#3B2A14" strokeWidth={0.8} />
              </G>
            ))}
            <Polygon points="16,24 23,27 25,44 7,44 9,27" fill="#EFCB8A" stroke="#7C4A1E" strokeWidth={1.5} />
            <SvgText x={16} y={40} fontSize={11} fontWeight="bold" fill="#1C1917" textAnchor="middle">
              飛
            </SvgText>
            <G transform="rotate(180 32 14)">
              <Polygon points="32,4 39,7 41,24 23,24 25,7" fill="#EFCB8A" stroke="#7C4A1E" strokeWidth={1.5} />
              <SvgText x={32} y={20} fontSize={11} fontWeight="bold" fill="#B91C1C" textAnchor="middle">
                龍
              </SvgText>
            </G>
          </>
        );
      case 'quarto':
        // duas peças do Quarto: uma alta, escura, redonda e furada; outra baixa, clara e quadrada
        return (
          <>
            <Rect x={0} y={0} width={48} height={48} rx={10} fill={MADEIRA} />
            <Circle cx={24} cy={24} r={21} fill="none" stroke="#5C3B1E" strokeWidth={1.5} />
            <Path d="M7 14 L7 34 A 8 3.4 0 0 0 23 34 L23 14 Z" fill="#5E3618" stroke="#1E1006" strokeWidth={1.2} />
            <Ellipse cx={15} cy={14} rx={8} ry={3.4} fill="#7A4A24" stroke="#1E1006" strokeWidth={1.2} />
            <Ellipse cx={15} cy={14} rx={3.6} ry={1.6} fill="#120902" stroke="#C9A66B" strokeWidth={0.8} />
            <Polygon points="26,30 34,26.5 42,30 34,33.5" fill="#F6E3BC" stroke="#5C3B1E" strokeWidth={1.2} />
            <Polygon points="26,30 34,33.5 34,39 26,35.5" fill="#E2C58F" stroke="#5C3B1E" strokeWidth={1.2} />
            <Polygon points="34,33.5 42,30 42,35.5 34,39" fill="#C9A66B" stroke="#5C3B1E" strokeWidth={1.2} />
          </>
        );
      case 'bagh-chal':
        // o tabuleiro 5×5 com as diagonais, um tigre no canto e duas cabras
        return (
          <>
            <Rect x={0} y={0} width={48} height={48} rx={10} fill={MADEIRA} />
            <Path d="M6 6 H42 V42 H6 Z M6 15 H42 M6 24 H42 M6 33 H42 M15 6 V42 M24 6 V42 M33 6 V42 M6 6 L42 42 M42 6 L6 42 M24 6 L42 24 L24 42 L6 24 Z" stroke="#3B2A14" strokeWidth={1.2} fill="none" />
            {pedra(10, 10, 7, '#F08A24', 't')}
            <Path d="M10 4 V8 M5 9 L8 10 M15 9 L12 10" stroke="#1C1209" strokeWidth={1.4} strokeLinecap="round" />
            {pedra(24, 24, 4.6, '#FAFAF5', 'c1')}
            {pedra(33, 33, 4.6, '#FAFAF5', 'c2')}
          </>
        );
      case 'onca':
        // o quadrado do alquerque com a toca triangular em cima, a onça e dois cachorros
        return (
          <>
            <Rect x={0} y={0} width={48} height={48} rx={10} fill={MADEIRA} />
            <Path d="M10 22 H38 V44 H10 Z M10 33 H38 M24 22 V44 M10 22 L38 44 M38 22 L10 44 M24 22 L10 8 H38 Z M17 15 H31 M24 22 V8" stroke="#3B2A14" strokeWidth={1.4} fill="none" strokeLinejoin="round" />
            {pedra(24, 33, 5, '#E8A73E', 'o')}
            <Circle cx={22.3} cy={31.5} r={1} fill="#2A1A0C" />
            <Circle cx={25.8} cy={34.5} r={1} fill="#2A1A0C" />
            {pedra(10, 44, 3.6, '#F2E6D2', 'c1')}
            {pedra(38, 44, 3.6, '#F2E6D2', 'c2')}
          </>
        );
      case 'pylos':
        // a pirâmide vista de cima: 4 bolas embaixo, uma em cima, entre elas
        return (
          <>
            <Rect x={0} y={0} width={48} height={48} rx={10} fill={MADEIRA} />
            {pedra(15, 15, 9, '#E9D3A8', 'a')}
            {pedra(33, 15, 9, '#5A3A22', 'b')}
            {pedra(15, 33, 9, '#5A3A22', 'c')}
            {pedra(33, 33, 9, '#E9D3A8', 'd')}
            <Ellipse cx={26} cy={27} rx={9.5} ry={9} fill="#000" opacity={0.3} />
            {pedra(24, 24, 9.5, '#E9D3A8', 'e')}
            <Circle cx={21} cy={21} r={3} fill="#FFF6E2" opacity={0.7} />
          </>
        );
      case 'quixo':
        // 3×3 cubos de madeira: cruzes e círculos, um liso
        return (
          <>
            <Rect x={0} y={0} width={48} height={48} rx={10} fill="#5C3B1E" />
            {[0, 1, 2].map((r) =>
              [0, 1, 2].map((c) => {
                const x = 3 + c * 14.5;
                const y = 3 + r * 14.5;
                const k = r * 3 + c;
                const sim = [1, 0, 2, 2, 1, 0, 0, 2, 1][k];
                return (
                  <G key={k}>
                    <Rect x={x} y={y} width={13} height={13} rx={2} fill="#EED9B0" stroke="#7A5530" strokeWidth={0.8} />
                    {sim === 1 && <Path d={`M${x + 3.5} ${y + 3.5} L${x + 9.5} ${y + 9.5} M${x + 9.5} ${y + 3.5} L${x + 3.5} ${y + 9.5}`} stroke="#E11D48" strokeWidth={2.2} strokeLinecap="round" />}
                    {sim === 2 && <Circle cx={x + 6.5} cy={y + 6.5} r={3.4} fill="none" stroke="#2563EB" strokeWidth={2} />}
                  </G>
                );
              }),
            )}
          </>
        );
      case 'pontinhos':
        // uma grade de 3×3 pontos, com traços vermelhos e azuis e um quadradinho fechado
        return (
          <>
            <Rect x={0} y={0} width={48} height={48} rx={10} fill="#FFFFFF" stroke="#CBD5E1" strokeWidth={1} />
            <Rect x={10} y={10} width={14} height={14} fill="#E11D48" opacity={0.3} />
            <Path d="M10 10 H24 M10 24 H24 M24 24 H38" stroke="#E11D48" strokeWidth={2.6} strokeLinecap="round" />
            <Path d="M10 10 V24 M24 10 V24 M38 24 V38" stroke="#2563EB" strokeWidth={2.6} strokeLinecap="round" />
            {[10, 24, 38].flatMap((y) => [10, 24, 38].map((x) => <Circle key={`${x}-${y}`} cx={x} cy={y} r={2.6} fill="#1C1F24" />))}
          </>
        );
      case 'hex':
        // um losango de 3×3 hexágonos, com as beiras do vermelho (cima e baixo) e do azul (lados)
        return (
          <>
            <Rect x={0} y={0} width={48} height={48} rx={10} fill="#FBF3E3" />
            <Path d="M11 9.5 H36 M20 40.5 H45" stroke="#E11D48" strokeWidth={3} strokeLinecap="round" />
            <Path d="M8.5 16 L17.5 33 M38.5 16 L46 30" stroke="#2563EB" strokeWidth={3} strokeLinecap="round" />
            <Polygon key={0} points="14.5,12.3 18.8,14.7 18.8,19.7 14.5,22.1 10.2,19.7 10.2,14.7" fill="#E11D48" stroke="#5C3B1E" strokeWidth={0.8} />
            <Polygon key={1} points="23.5,12.3 27.8,14.7 27.8,19.7 23.5,22.1 19.2,19.7 19.2,14.7" fill="#F0D9B5" stroke="#5C3B1E" strokeWidth={0.8} />
            <Polygon key={2} points="32.5,12.3 36.8,14.7 36.8,19.7 32.5,22.1 28.2,19.7 28.2,14.7" fill="#E11D48" stroke="#5C3B1E" strokeWidth={0.8} />
            <Polygon key={3} points="19.0,20.1 23.3,22.5 23.3,27.5 19.0,29.9 14.7,27.5 14.7,22.5" fill="#F0D9B5" stroke="#5C3B1E" strokeWidth={0.8} />
            <Polygon key={4} points="28.0,20.1 32.3,22.5 32.3,27.5 28.0,29.9 23.7,27.5 23.7,22.5" fill="#E11D48" stroke="#5C3B1E" strokeWidth={0.8} />
            <Polygon key={5} points="37.0,20.1 41.3,22.5 41.3,27.5 37.0,29.9 32.7,27.5 32.7,22.5" fill="#2563EB" stroke="#5C3B1E" strokeWidth={0.8} />
            <Polygon key={6} points="23.5,27.8 27.8,30.3 27.8,35.3 23.5,37.7 19.2,35.3 19.2,30.3" fill="#F0D9B5" stroke="#5C3B1E" strokeWidth={0.8} />
            <Polygon key={7} points="32.5,27.8 36.8,30.3 36.8,35.3 32.5,37.7 28.2,35.3 28.2,30.3" fill="#F0D9B5" stroke="#5C3B1E" strokeWidth={0.8} />
            <Polygon key={8} points="41.5,27.8 45.8,30.3 45.8,35.3 41.5,37.7 37.2,35.3 37.2,30.3" fill="#2563EB" stroke="#5C3B1E" strokeWidth={0.8} />
          </>
        );
      case 'qawale':
        // um tabuleiro 4×4 com uma pilha de pedras: areia embaixo, clara e escura por cima
        return (
          <>
            <Rect x={0} y={0} width={48} height={48} rx={10} fill={CLARO} />
            <Path d="M12 2 V46 M24 2 V46 M36 2 V46 M2 12 H46 M2 24 H46 M2 36 H46" stroke="#B58863" strokeWidth={1.2} />
            <Ellipse cx={24} cy={37} rx={13} ry={5.5} fill="#7A4A1E" />
            <Ellipse cx={24} cy={35.5} rx={12.4} ry={5} fill="#D49A5E" />
            <Ellipse cx={24} cy={29} rx={12} ry={5.2} fill="#6B6257" />
            <Ellipse cx={24} cy={27.6} rx={11.4} ry={4.8} fill="#EEE8DC" />
            <Ellipse cx={24} cy={21} rx={11} ry={5} fill="#0B0C0E" />
            <Ellipse cx={24} cy={19.6} rx={10.4} ry={4.6} fill="#34363B" />
            <Ellipse cx={20} cy={18} rx={4} ry={1.4} fill="#6E727A" />
          </>
        );
      case 'squadro':
        // dois trilhos que se cruzam, com um barco claro indo para a direita e um escuro subindo
        return (
          <>
            <Rect x={0} y={0} width={48} height={48} rx={10} fill={MADEIRA} />
            <Path d="M6 17 H42 M6 31 H42 M17 6 V42 M31 6 V42" stroke="#8B5E2B" strokeWidth={3} strokeLinecap="round" opacity={0.55} />
            <Path d="M5 35 L19 35 L25 31 L19 27 L5 27 Q3 31 5 35 Z" fill="#F4E2BD" stroke="#5C3B1E" strokeWidth={1.3} strokeLinejoin="round" />
            <Path d="M35 43 L35 29 L31 23 L27 29 L27 43 Q31 45 35 43 Z" fill="#6B3F1F" stroke="#1E1006" strokeWidth={1.3} strokeLinejoin="round" />
            {[11, 15, 19].map((y) => (
              <Circle key={y} cx={44} cy={y} r={1.3} fill="#5C3B1E" />
            ))}
          </>
        );
      case 'qomet':
        // os três quadrados com o centro e as diagonais, e um quadrado de estrelas douradas
        return (
          <>
            <Rect x={0} y={0} width={48} height={48} rx={10} fill="#1F2937" />
            <Path d="M6 6 H42 V42 H6 Z M12 12 H36 V36 H12 Z M18 18 H30 V30 H18 Z M24 6 V42 M6 24 H42 M6 6 L42 42 M42 6 L6 42" stroke="#9CA3AF" strokeWidth={1.4} fill="none" />
            {[
              [12, 12],
              [24, 12],
              [12, 24],
              [24, 24],
            ].map(([x, y]) => (
              <Circle key={`${x}-${y}`} cx={x} cy={y} r={4.2} fill="#F5C542" stroke="#8A5A00" strokeWidth={1} />
            ))}
            <Path d="M12 12 H24 V24 H12 Z" stroke="#F5C542" strokeWidth={1.6} fill="none" />
            <Circle cx={36} cy={36} r={4.2} fill="#7B2D26" stroke="#2B0D0A" strokeWidth={1} />
            <Circle cx={42} cy={24} r={4.2} fill="#7B2D26" stroke="#2B0D0A" strokeWidth={1} />
          </>
        );
      case 'konane':
        // o papamū: pedras pretas (basalto) e brancas (coral) alternadas, com o buraco da abertura
        return (
          <>
            <Rect x={0} y={0} width={48} height={48} rx={10} fill="#C7B79A" />
            {[0, 1, 2, 3].map((r) =>
              [0, 1, 2, 3].map((c) =>
                r === 1 && (c === 1 || c === 2) ? (
                  <Circle key={`${r}${c}`} cx={9 + c * 10} cy={9 + r * 10} r={3} fill="#8C7A5B" />
                ) : (
                  pedra(9 + c * 10, 9 + r * 10, 4.2, (r + c) % 2 ? B : P, `${r}${c}`)
                ),
              ),
            )}
          </>
        );
      case 'mu-torere': {
        // a estrela de 8 pontas, com as 4 peças de cada lado e o centro vazio
        const pts = Array.from({ length: 16 }, (_, k) => {
          const a = (k * Math.PI) / 8;
          const r = k % 2 === 0 ? 21 : 9;
          return `${24 + r * Math.sin(a)},${24 - r * Math.cos(a)}`;
        }).join(' ');
        return (
          <>
            <Rect x={0} y={0} width={48} height={48} rx={10} fill={CLARO} />
            <Polygon points={pts} fill={ESCURO} stroke="#5C3B1E" strokeWidth={1.2} strokeLinejoin="round" />
            <Circle cx={24} cy={24} r={3.5} fill={CLARO} stroke="#5C3B1E" strokeWidth={1} />
            {Array.from({ length: 8 }, (_, i) => {
              const a = (i * Math.PI) / 4;
              return pedra(24 + 17 * Math.sin(a), 24 - 17 * Math.cos(a), 4.2, i < 4 ? B : P, `m${i}`);
            })}
          </>
        );
      }
      case 'quantik':
        // os 4 quadrantes, com as 4 formas: esfera, cubo, cilindro e cone
        return (
          <>
            <Rect x={0} y={0} width={48} height={48} rx={10} fill={CLARO} />
            <Rect x={24} y={0} width={24} height={24} fill={ESCURO} />
            <Rect x={0} y={24} width={24} height={24} fill={ESCURO} />
            <Path d="M24 2 V46 M2 24 H46" stroke="#5C3B1E" strokeWidth={2} />
            <Circle cx={12} cy={12} r={7} fill="#E2C58F" stroke="#5C3B1E" strokeWidth={1.2} />
            <Polygon points="29,10 36,7 43,10 36,13" fill="#7A4A24" stroke="#1E1006" strokeWidth={1} />
            <Polygon points="29,10 36,13 36,20 29,17" fill="#5E3618" stroke="#1E1006" strokeWidth={1} />
            <Polygon points="36,13 43,10 43,17 36,20" fill="#43250E" stroke="#1E1006" strokeWidth={1} />
            <Path d="M6 30 L6 40 A 6 2.4 0 0 0 18 40 L18 30 Z" fill="#5E3618" stroke="#1E1006" strokeWidth={1} />
            <Ellipse cx={12} cy={30} rx={6} ry={2.4} fill="#7A4A24" stroke="#1E1006" strokeWidth={1} />
            <Path d="M36 28 L29 42 A 7 2.6 0 0 0 43 42 Z" fill="#E2C58F" stroke="#5C3B1E" strokeWidth={1.2} />
          </>
        );
      case 'quoridor':
        return (
          <>
            <Rect x={0} y={0} width={48} height={48} rx={10} fill="#5C3B1E" />
            {[0, 1, 2, 3].map((r) => [0, 1, 2, 3].map((c) => <Rect key={`${r}${c}`} x={3 + c * 11} y={3 + r * 11} width={9} height={9} rx={2} fill={CLARO} />))}
            <Rect x={3} y={23} width={20} height={2.5} fill="#8B5A2B" />
            <Rect x={34} y={3} width={2.5} height={20} fill="#8B5A2B" />
            {pedra(18.5, 40.5, 4, '#E11D48', 1)}
            {pedra(29.5, 7.5, 4, '#2563EB', 2)}
          </>
        );
      case 'abalone':
        return (
          <>
            <Polygon points="12,4 36,4 47,24 36,44 12,44 1,24" fill="#C9D7DF" stroke="#2E4450" strokeWidth={2} />
            {[16, 24, 32].map((x, k) => pedra(x, 14, 4, '#E11D48', `a${k}`))}
            {[20, 28].map((x, k) => pedra(x, 22, 4, '#E11D48', `b${k}`))}
            {[16, 24, 32].map((x, k) => pedra(x, 34, 4, '#2563EB', `c${k}`))}
          </>
        );
      case 'octi':
        return (
          <>
            <Rect x={0} y={0} width={48} height={48} rx={10} fill={CLARO} />
            <Polygon points="18,10 30,10 38,18 38,30 30,38 18,38 10,30 10,18" fill="#EA580C" stroke="#000" strokeWidth={1.5} />
            <Path d="M24 10 V3 M38 24 H45 M33 15 L38 10" stroke="#EA580C" strokeWidth={3.5} strokeLinecap="round" />
          </>
        );
      case 'pacote':
        // a caixa de presente da loja
        return (
          <>
            <Rect x={6} y={18} width={36} height={26} rx={3} fill="#F97316" />
            <Rect x={3} y={12} width={42} height={9} rx={2} fill="#FB923C" />
            <Rect x={21} y={12} width={6} height={32} fill="#FDE68A" />
            <Path d="M24 12 C 16 2, 8 8, 14 12 Z M24 12 C 32 2, 40 8, 34 12 Z" fill="#FDE68A" />
          </>
        );
      default:
        // jogo ainda sem ícone próprio: um tabuleiro simples com o nome abreviado
        return (
          <>
            <Rect x={0} y={0} width={48} height={48} rx={10} fill="#E2E8F0" />
            <SvgText x={24} y={30} fontSize={16} fontWeight="bold" fill="#475569" textAnchor="middle">
              {id.slice(0, 2).toUpperCase()}
            </SvgText>
          </>
        );
    }
  })();
  return (
    <Svg width={s} height={s} viewBox="0 0 48 48">
      {corpo}
    </Svg>
  );
}
