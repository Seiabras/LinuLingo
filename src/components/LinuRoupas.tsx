import { Circle, Ellipse, G, Line, Path, Rect } from 'react-native-svg';

/**
 * Roupas, pinturas de rosto e objetos para a nadadeira do Linu, no mesmo quadro de 120 × 140 do desenho
 * dele. O corpo é a elipse de centro (60, 84) e raios 40 × 48; a barbicha termina em y ≈ 90, então as
 * roupas vão de y ≈ 90 até a base (132). Os olhos ficam em (46, 52) e (74, 52), o bico entre y 60 e 70.
 * Os chapéus ficam em LinuOutfit.tsx.
 */

/** Meia largura do corpo na altura y (a elipse do corpo), com uma folguinha para dentro. */
const half = (y: number, inset = 0.8) => Math.max(0, 40 * Math.sqrt(Math.max(0, 1 - ((y - 84) / 48) ** 2)) - inset);

/** Contorno do tronco entre yTop e yBot, seguindo a elipse do corpo; `neck` afunda o meio da borda de cima. */
function torso(yTop: number, yBot: number, neck = 0): string {
  const left: string[] = [];
  const right: string[] = [];
  for (let y = yTop; y <= yBot; y += 2) {
    left.push(`${(60 - half(y)).toFixed(1)} ${y}`);
    right.unshift(`${(60 + half(y)).toFixed(1)} ${y}`);
  }
  const top = neck ? ` Q60 ${yTop + neck} ` : ' L';
  return `M${left.join(' L')} L${right.join(' L')}${top}${left[0]} Z`;
}

/** Faixa horizontal do tronco entre y e y + h. */
const band = (y: number, h: number) => `M${60 - half(y)} ${y} L${60 + half(y)} ${y} L${60 + half(y + h)} ${y + h} L${60 - half(y + h)} ${y + h} Z`;

export function BodyArt({ id }: { id: string }) {
  switch (id) {
    case 'ie':
      return (
        <G>
          <Path d={torso(90, 130, 8)} fill="#FFFDF7" stroke="#D6D3D1" strokeWidth="0.8" />
          {/* altițe: o bordado dos ombros */}
          {[26, 94].map((x) => (
            <G key={x}>
              <Rect x={x - 5} y="93" width="10" height="13" fill="#B91C1C" opacity={0.9} />
              {[96, 100, 104].map((y) => (
                <Path key={y} d={`M${x - 3} ${y} L${x} ${y - 2} L${x + 3} ${y} L${x} ${y + 2} Z`} fill="#111827" />
              ))}
            </G>
          ))}
          {/* a gola bordada e a faixa do peito */}
          <Path d="M24 91 Q60 104 96 91" fill="none" stroke="#B91C1C" strokeWidth="2" />
          <Path d="M28 94 Q60 106 92 94" fill="none" stroke="#111827" strokeWidth="1" strokeDasharray="2 1.5" />
          <Rect x="56.5" y="100" width="7" height="28" fill="#B91C1C" />
          {[103, 108, 113, 118, 123].map((y) => (
            <Path key={y} d={`M57.5 ${y} L62.5 ${y + 3} M62.5 ${y} L57.5 ${y + 3}`} stroke="#FFFDF7" strokeWidth="1" />
          ))}
          {[42, 78].map((x) =>
            [110, 118].map((y) => <Path key={`${x}-${y}`} d={`M${x - 2} ${y} L${x + 2} ${y + 3} M${x + 2} ${y} L${x - 2} ${y + 3}`} stroke="#B91C1C" strokeWidth="1.2" />),
          )}
        </G>
      );
    case 'martisor':
      return (
        <G transform="translate(70 104) scale(1.5) translate(-70 -104)">
          {/* o cordão branco e vermelho em laço, preso no peito, com um galanthus pendurado */}
          <Path d="M66 98 Q61 92 66 90 Q70 92 68 98 Q74 93 77 97 Q74 101 68 99" fill="none" stroke="#FFFFFF" strokeWidth="1.6" />
          <Path d="M66 98 Q61 92 66 90 Q70 92 68 98 Q74 93 77 97 Q74 101 68 99" fill="none" stroke="#DC2626" strokeWidth="1.6" strokeDasharray="1.6 1.6" />
          <Path d="M67.5 99 L66 108 M68.5 99 L71 108" stroke="#DC2626" strokeWidth="1" />
          <Path d="M67.5 99 L66 108 M68.5 99 L71 108" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="1 1" />
          <Line x1="68.5" y1="108" x2="68.5" y2="113" stroke="#16A34A" strokeWidth="1" />
          <Path d="M68.5 113 Q65.5 115 66.5 119 Q68.5 117 68.5 113 Q71.5 115 70.5 119 Q68.5 117 68.5 113 Z" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="0.5" />
        </G>
      );
    case 'sarafan':
      return (
        <G>
          <Path d={torso(98, 130)} fill="#B91C1C" />
          {/* alças */}
          <Path d="M36 99 L30 90 L35 89 L41 99 Z M84 99 L90 90 L85 89 L79 99 Z" fill="#B91C1C" />
          {/* a faixa dourada com botões na frente e a barra */}
          <Rect x="56.5" y="98" width="7" height="32" fill="#EAB308" />
          {[103, 110, 117, 124].map((y) => (
            <Circle key={y} cx="60" cy={y} r="1.4" fill="#92400E" />
          ))}
          <Path d={band(98, 3)} fill="#EAB308" />
          <Path d={band(125, 3)} fill="#EAB308" />
        </G>
      );
    case 'manton':
      return (
        <G>
          <Path d="M21 90 Q60 102 99 90 Q96 104 60 129 Q24 104 21 90 Z" fill="#B91C1C" />
          {/* flores bordadas */}
          {[
            [44, 102, '#FDE68A'],
            [60, 110, '#FBCFE8'],
            [76, 102, '#FDE68A'],
            [60, 99, '#FFFFFF'],
            [52, 118, '#FFFFFF'],
            [68, 118, '#FBCFE8'],
          ].map(([x, y, c]) => (
            <G key={`${x}-${y}`}>
              {[0, 72, 144, 216, 288].map((a) => (
                <Circle key={a} cx={(x as number) + 2.2 * Math.cos((a * Math.PI) / 180)} cy={(y as number) + 2.2 * Math.sin((a * Math.PI) / 180)} r="1.6" fill={c as string} />
              ))}
              <Circle cx={x as number} cy={y as number} r="1.1" fill="#16A34A" />
            </G>
          ))}
          {/* as franjas compridas */}
          {Array.from({ length: 11 }, (_, i) => {
            const t = (i + 0.5) / 11;
            const lx = 21 + (60 - 21) * t;
            const ly = 90 + (129 - 90) * t;
            return (
              <G key={i} stroke="#FDE68A" strokeWidth="0.9">
                <Line x1={lx} y1={ly} x2={lx - 1.5} y2={ly + 6} />
                <Line x1={120 - lx} y1={ly} x2={121.5 - lx} y2={ly + 6} />
              </G>
            );
          })}
        </G>
      );
    case 'capulana':
      return (
        <G>
          <Path d={torso(108, 130)} fill="#EA580C" />
          {[
            [36, 114],
            [48, 112],
            [60, 115],
            [72, 112],
            [84, 114],
            [44, 122],
            [56, 124],
            [68, 123],
            [78, 121],
          ].map(([x, y]) => (
            <G key={`${x}-${y}`}>
              <Circle cx={x} cy={y} r="3.2" fill="#FACC15" />
              <Circle cx={x} cy={y} r="1.4" fill="#1E3A8A" />
            </G>
          ))}
          <Path d="M28 110 Q50 116 72 128" fill="none" stroke="#9A3412" strokeWidth="1" />
          {/* o nó na cintura */}
          <Ellipse cx="30" cy="110" rx="3.5" ry="2.5" fill="#C2410C" />
          <Path d="M30 112 L27 120 M31 112 L33 119" stroke="#C2410C" strokeWidth="2" strokeLinecap="round" />
        </G>
      );
    case 'mariniere':
      return (
        <G>
          <Path d={torso(92, 130, 6)} fill="#FFFFFF" />
          {[99, 105, 111, 117, 123].map((y) => (
            <Path key={y} d={band(y, 3)} fill="#1E3A8A" />
          ))}
        </G>
      );
    case 'lusekofte':
      return (
        <G>
          <Path d={torso(92, 130, 6)} fill="#111827" />
          {/* a pala branca com desenho, e os pontinhos («lus») */}
          <Path d={band(92, 9)} fill="#F8FAFC" />
          <Path d="M22 97 L26 94 L30 97 L34 94 L38 97 L42 94 L46 97 L50 94 L54 97 L58 94 L62 97 L66 94 L70 97 L74 94 L78 97 L82 94 L86 97 L90 94 L94 97 L98 94" fill="none" stroke="#111827" strokeWidth="1.2" />
          {[106, 112, 118, 124].flatMap((y, r) =>
            Array.from({ length: 9 }, (_, i) => 60 - 32 + i * 8 + (r % 2) * 4)
              .filter((x) => Math.abs(x - 60) < half(y) - 2 && Math.abs(x - 60) > 3)
              .map((x) => <Circle key={`${x}-${y}`} cx={x} cy={y} r="0.9" fill="#F8FAFC" />),
          )}
          {/* os fechos de metal na frente */}
          {[104, 111, 118].map((y) => (
            <Circle key={y} cx="60" cy={y} r="1.6" fill="#CBD5E1" stroke="#64748B" strokeWidth="0.5" />
          ))}
        </G>
      );
    case 'lopapeysa':
      return (
        <G>
          <Path d={torso(91, 130, 6)} fill="#D6CCBE" />
          {/* a pala redonda de desenhos em volta da gola */}
          <Path d="M22 92 Q60 108 98 92 L99 101 Q60 117 21 101 Z" fill="#57534E" />
          {Array.from({ length: 13 }, (_, i) => {
            const x = 24 + i * 6;
            const y = 96 + 7 * Math.sin((Math.PI * (x - 21)) / 78);
            return <Path key={i} d={`M${x - 2.4} ${y + 2.5} L${x} ${y - 2.5} L${x + 2.4} ${y + 2.5} Z`} fill="#F5F5F4" />;
          })}
          {[126, 128].map((y) => (
            <Path key={y} d={`M${60 - half(y)} ${y} L${60 + half(y)} ${y}`} stroke="#A8A29E" strokeWidth="0.8" />
          ))}
        </G>
      );
    case 'kilt':
      return (
        <G>
          <Path d={torso(112, 130)} fill="#B91C1C" />
          {/* o tartã: faixas verdes cruzadas e fios amarelos */}
          {[36, 50, 64, 78].map((x) => (
            <Rect key={x} x={x} y="112" width="6" height="19" fill="#14532D" opacity={0.55} />
          ))}
          <Path d={band(118, 4)} fill="#14532D" opacity={0.55} />
          {[40, 54, 68, 82].map((x) => (
            <Line key={x} x1={x} y1="112" x2={x} y2="131" stroke="#FACC15" strokeWidth="0.5" />
          ))}
          <Path d={band(112, 3)} fill="#78350F" />
          <Rect x="57.5" y="111.5" width="5" height="4" fill="none" stroke="#D1D5DB" strokeWidth="1" />
          {/* o sporran, a bolsinha da frente */}
          <Path d="M54 116 L66 116 L65 125 Q60 128 55 125 Z" fill="#F5F5F4" stroke="#78350F" strokeWidth="0.8" />
          <Path d="M57 121 L57 127 M60 122 L60 128 M63 121 L63 127" stroke="#111827" strokeWidth="1.2" strokeLinecap="round" />
        </G>
      );
    case 'kente':
      return (
        <G>
          {[
            [
              [34, 90],
              [44, 91],
              [51, 127],
              [42, 128],
            ],
            [
              [86, 90],
              [76, 91],
              [69, 127],
              [78, 128],
            ],
          ].map((pts, s) => {
            const colors = ['#FACC15', '#15803D', '#DC2626', '#FACC15', '#1E3A8A', '#15803D', '#DC2626'];
            return (
              <G key={s}>
                {colors.map((c, i) => {
                  const t0 = i / colors.length;
                  const t1 = (i + 1) / colors.length;
                  const p = (a: number[], b: number[], t: number) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
                  const [a0, a1] = [p(pts[0], pts[3], t0), p(pts[0], pts[3], t1)];
                  const [b0, b1] = [p(pts[1], pts[2], t0), p(pts[1], pts[2], t1)];
                  return (
                    <G key={i}>
                      <Path d={`M${a0[0]} ${a0[1]} L${b0[0]} ${b0[1]} L${b1[0]} ${b1[1]} L${a1[0]} ${a1[1]} Z`} fill={c} />
                      <Line x1={a0[0]} y1={a0[1]} x2={b0[0]} y2={b0[1]} stroke="#111827" strokeWidth="0.7" />
                    </G>
                  );
                })}
              </G>
            );
          })}
        </G>
      );
    case 'lederhosen':
      return (
        <G>
          <Path d={torso(116, 131)} fill="#78350F" />
          <Path d="M60 118 L60 131" stroke="#451A03" strokeWidth="0.8" />
          {/* os suspensórios e a peça da frente com a flor de edelvais */}
          <Path d="M37 90 L41 90 L46 117 L42 117 Z M83 90 L79 90 L74 117 L78 117 Z" fill="#92400E" />
          <Rect x="43" y="99" width="34" height="6" rx="1" fill="#92400E" stroke="#451A03" strokeWidth="0.6" />
          {[0, 60, 120, 180, 240, 300].map((a) => (
            <Circle key={a} cx={60 + 1.8 * Math.cos((a * Math.PI) / 180)} cy={102 + 1.8 * Math.sin((a * Math.PI) / 180)} r="1.1" fill="#F8FAFC" />
          ))}
          <Circle cx="60" cy="102" r="0.8" fill="#FACC15" />
        </G>
      );
    case 'faixa':
      return (
        <G>
          {/* a faixa preta dos castellers, bem apertada na cintura, com a ponta caindo do lado */}
          <Path d={band(106, 10)} fill="#111827" />
          <Path d={band(109, 0.8)} fill="#374151" />
          <Path d={band(113, 0.8)} fill="#374151" />
          <Path d="M27 110 L22 124 L27 125 L31 112 Z" fill="#111827" />
        </G>
      );
    default:
      return null;
  }
}

export function FaceArt({ id }: { id: string }) {
  switch (id) {
    case 'catrina':
      return (
        <G>
          {/* aros pretos em volta dos olhos, com pétalas coloridas */}
          {[46, 74].map((x) => (
            <G key={x}>
              {Array.from({ length: 8 }, (_, i) => {
                const a = (i * Math.PI) / 4;
                return <Circle key={i} cx={x + 10.5 * Math.cos(a)} cy={52 + 10.5 * Math.sin(a)} r="1.8" fill={['#EC4899', '#F97316', '#3B82F6', '#A855F7'][i % 4]} />;
              })}
              <Circle cx={x} cy="52" r="8.5" fill="none" stroke="#111827" strokeWidth="2.4" />
            </G>
          ))}
          {/* a flor na testa e a boca costurada */}
          {[0, 72, 144, 216, 288].map((a) => (
            <Circle key={a} cx={60 + 3 * Math.cos(((a - 90) * Math.PI) / 180)} cy={33 + 3 * Math.sin(((a - 90) * Math.PI) / 180)} r="2.2" fill="#EC4899" />
          ))}
          <Circle cx="60" cy="33" r="1.5" fill="#FACC15" />
          <Line x1="48" y1="76" x2="72" y2="76" stroke="#111827" strokeWidth="1" />
          {[50, 54, 58, 62, 66, 70].map((x) => (
            <Line key={x} x1={x} y1="74" x2={x} y2="78" stroke="#111827" strokeWidth="1" />
          ))}
          <Circle cx="37" cy="66" r="1.2" fill="#3B82F6" />
          <Circle cx="83" cy="66" r="1.2" fill="#3B82F6" />
        </G>
      );
    case 'mascara':
      return (
        <G>
          {/* a máscara dourada com os buracos dos olhos (regra par-ímpar) e uma pluma do lado */}
          <Path d="M90 44 Q100 30 108 20 Q102 34 96 46 Z" fill="#7C3AED" />
          <Path d="M91 45 Q101 33 106 24" stroke="#C4B5FD" strokeWidth="0.8" fill="none" />
          <Path
            d="M27 50 Q29 38 46 40 Q60 44 74 40 Q91 38 93 50 Q90 63 74 63 Q64 63 60 57 Q56 63 46 63 Q30 63 27 50 Z M39 52 A7 5.5 0 1 0 53 52 A7 5.5 0 1 0 39 52 Z M67 52 A7 5.5 0 1 0 81 52 A7 5.5 0 1 0 67 52 Z"
            fill="#D4A017"
            fillRule="evenodd"
            stroke="#92400E"
            strokeWidth="1"
          />
          <Path d="M32 47 Q46 42 56 46 M64 46 Q74 42 88 47" fill="none" stroke="#7C3AED" strokeWidth="1.4" />
          {[34, 86, 60].map((x, i) => (
            <Circle key={x} cx={x} cy={i === 2 ? 49 : 57} r="1.3" fill="#FEF3C7" />
          ))}
        </G>
      );
    case 'careto':
      return (
        <G>
          {/* a máscara vermelha do careto, com faixas amarelas e verdes e o nariz pontudo */}
          <Path
            d="M27 42 Q60 22 93 42 L92 58 Q86 68 72 66 L60 72 L48 66 Q34 68 28 58 Z M40 52 A6 6 0 1 0 52 52 A6 6 0 1 0 40 52 Z M68 52 A6 6 0 1 0 80 52 A6 6 0 1 0 68 52 Z"
            fill="#DC2626"
            fillRule="evenodd"
            stroke="#7F1D1D"
            strokeWidth="1"
          />
          <Path d="M31 40 Q60 24 89 40" fill="none" stroke="#FACC15" strokeWidth="2.5" />
          <Path d="M34 45 Q60 31 86 45" fill="none" stroke="#16A34A" strokeWidth="2" />
          <Path d="M60 50 L55 67 L65 67 Z" fill="#B91C1C" stroke="#7F1D1D" strokeWidth="1" />
          {[36, 84].map((x) => (
            <Circle key={x} cx={x} cy="61" r="2" fill="#FACC15" />
          ))}
        </G>
      );
    case 'thanaka':
      return (
        <G opacity={0.92}>
          {[38, 82].map((x) => (
            <G key={x}>
              <Circle cx={x} cy="65" r="7.5" fill="#EAD9A6" />
              <Path d={`M${x} 59 Q${x + 4} 65 ${x} 71 Q${x - 4} 65 ${x} 59 Z`} fill="none" stroke="#C9B37A" strokeWidth="0.8" />
              <Line x1={x} y1="60" x2={x} y2="70" stroke="#C9B37A" strokeWidth="0.6" />
            </G>
          ))}
          <Path d="M56 34 Q60 30 64 34 Q60 38 56 34 Z" fill="#EAD9A6" />
        </G>
      );
    case 'holi':
      return (
        <G opacity={0.85}>
          {[
            [38, 67, 6, '#EC4899'],
            [83, 64, 5.5, '#22C55E'],
            [50, 30, 5, '#FACC15'],
            [71, 34, 4.5, '#3B82F6'],
            [62, 82, 4, '#A855F7'],
            [33, 45, 3, '#F97316'],
            [88, 46, 3, '#EC4899'],
          ].map(([x, y, r, c]) => (
            <G key={`${x}-${y}`}>
              <Circle cx={x as number} cy={y as number} r={r as number} fill={c as string} />
              <Circle cx={(x as number) + (r as number)} cy={(y as number) - 1} r={(r as number) * 0.35} fill={c as string} />
              <Circle cx={(x as number) - (r as number) * 0.8} cy={(y as number) + (r as number) * 0.7} r={(r as number) * 0.3} fill={c as string} />
            </G>
          ))}
        </G>
      );
    default:
      return null;
  }
}

/**
 * Objeto que o Linu segura na nadadeira esquerda. Desenhado com a origem (0, 0) no ponto em que a
 * nadadeira pega, crescendo para cima (y negativo) até uns 44 de altura e 14 para cada lado.
 */
export function HeldArt({ id }: { id: string }) {
  switch (id) {
    case 'nai':
      return (
        <G>
          {Array.from({ length: 8 }, (_, i) => {
            const x = -11 + i * 3.1;
            const top = -34 + (i - 3.5) ** 2 * 0.35;
            const len = 30 - i * 2.8;
            return <Rect key={i} x={x} y={top} width="2.8" height={len} rx="1.2" fill="#D6A15E" stroke="#7C4A1E" strokeWidth="0.5" />;
          })}
          <Path d="M-12 -24 Q0 -21 13 -24 L13 -21 Q0 -18 -12 -21 Z" fill="#7C4A1E" />
        </G>
      );
    case 'matriochka':
      return (
        <G>
          <Ellipse cx="0" cy="-13" rx="10" ry="13" fill="#DC2626" stroke="#7F1D1D" strokeWidth="0.6" />
          <Circle cx="0" cy="-30" r="7.5" fill="#DC2626" stroke="#7F1D1D" strokeWidth="0.6" />
          <Circle cx="0" cy="-30" r="4.8" fill="#FDE7D0" />
          <Circle cx="-1.6" cy="-30.8" r="0.7" fill="#1F2937" />
          <Circle cx="1.6" cy="-30.8" r="0.7" fill="#1F2937" />
          <Circle cx="-2.6" cy="-28.6" r="1" fill="#FB7185" />
          <Circle cx="2.6" cy="-28.6" r="1" fill="#FB7185" />
          <Ellipse cx="0" cy="-11" rx="6" ry="8" fill="#FDE68A" />
          {[0, 72, 144, 216, 288].map((a) => (
            <Circle key={a} cx={1.8 * Math.cos((a * Math.PI) / 180)} cy={-11 + 1.8 * Math.sin((a * Math.PI) / 180)} r="1.4" fill="#DC2626" />
          ))}
          <Circle cx="0" cy="-11" r="0.9" fill="#16A34A" />
        </G>
      );
    case 'balalaica':
      return (
        <G>
          <Rect x="-1.4" y="-42" width="2.8" height="26" fill="#451A03" />
          <Path d="M-3 -46 L3 -46 L2.4 -41 L-2.4 -41 Z" fill="#451A03" />
          <Path d="M-12 0 Q0 3 12 0 L1.5 -19 Q0 -21 -1.5 -19 Z" fill="#D97706" stroke="#78350F" strokeWidth="0.7" />
          <Circle cx="0" cy="-6" r="2" fill="#451A03" />
          {[-0.7, 0, 0.7].map((x) => (
            <Line key={x} x1={x} y1="-44" x2={x * 3} y2="-1" stroke="#E5E7EB" strokeWidth="0.3" />
          ))}
        </G>
      );
    case 'abanico':
      return (
        <G>
          <Path d="M0 -2 L-19 -13 A22 22 0 0 1 19 -13 Z" fill="#DC2626" />
          <Path d="M-19 -13 A22 22 0 0 1 19 -13" fill="none" stroke="#FFFFFF" strokeWidth="1.4" strokeDasharray="1.5 1" />
          {Array.from({ length: 9 }, (_, i) => {
            const a = ((-60 + i * 15) * Math.PI) / 180;
            return <Line key={i} x1="0" y1="-2" x2={22 * Math.sin(a)} y2={-2 - 22 * Math.cos(a)} stroke="#7F1D1D" strokeWidth="0.5" />;
          })}
          {[-8, 0, 8].map((x) => (
            <Circle key={x} cx={x} cy={-17 + Math.abs(x) * 0.3} r="1.8" fill="#FDE68A" />
          ))}
          <Rect x="-1" y="-2" width="2" height="6" rx="1" fill="#78350F" />
        </G>
      );
    case 'castanuelas':
      return (
        <G>
          <Path d="M-2 -18 Q0 -22 2 -18" fill="none" stroke="#EAB308" strokeWidth="1" />
          <Ellipse cx="-3" cy="-10" rx="5" ry="6.5" fill="#7C2D12" />
          <Ellipse cx="3.5" cy="-8" rx="5" ry="6.5" fill="#9A3412" />
          <Ellipse cx="3" cy="-8.5" rx="2" ry="3" fill="#C2410C" />
          <Line x1="-3" y1="-17" x2="3" y2="-15" stroke="#EAB308" strokeWidth="1" />
        </G>
      );
    case 'mandolino':
      return (
        <G>
          <Rect x="-1.5" y="-40" width="3" height="22" fill="#451A03" />
          <Path d="M-3.5 -46 L3.5 -46 L3 -40 L-3 -40 Z" fill="#451A03" />
          {[-44, -42.5].map((y) => (
            <G key={y}>
              <Circle cx="-4.3" cy={y} r="0.8" fill="#D1D5DB" />
              <Circle cx="4.3" cy={y} r="0.8" fill="#D1D5DB" />
            </G>
          ))}
          <Path d="M0 -21 Q10 -19 10 -8 Q10 2 0 3 Q-10 2 -10 -8 Q-10 -19 0 -21 Z" fill="#F5DEB3" stroke="#92400E" strokeWidth="1.2" />
          <Ellipse cx="0" cy="-10" rx="3" ry="2.2" fill="#451A03" />
          <Rect x="-3" y="-4" width="6" height="1" fill="#451A03" />
          {[-0.8, 0.8].map((x) => (
            <Line key={x} x1={x} y1="-44" x2={x} y2="-3" stroke="#E5E7EB" strokeWidth="0.3" />
          ))}
        </G>
      );
    case 'cavaquinho':
      return (
        <G>
          <Rect x="-1.5" y="-42" width="3" height="22" fill="#292524" />
          <Rect x="-3" y="-46" width="6" height="4.5" rx="1" fill="#44403C" />
          <Circle cx="0" cy="-6" r="8.5" fill="#B45309" />
          <Circle cx="0" cy="-18" r="6.5" fill="#B45309" />
          <Circle cx="0" cy="-14" r="2.6" fill="#1C1917" />
          <Rect x="-3.5" y="-5" width="7" height="1.4" fill="#1C1917" />
          {[-1.1, -0.4, 0.4, 1.1].map((x) => (
            <Line key={x} x1={x} y1="-44" x2={x} y2="-4" stroke="#E5E7EB" strokeWidth="0.25" />
          ))}
        </G>
      );
    case 'ukulele':
      return (
        <G>
          <Rect x="-1.5" y="-41" width="3" height="22" fill="#57534E" />
          <Path d="M-3 -46 Q0 -48 3 -46 L2.5 -41 L-2.5 -41 Z" fill="#E9C46A" stroke="#A16207" strokeWidth="0.5" />
          <Path d="M0 -26 Q7 -26 7 -19 Q7 -15 5 -13 Q10 -10 9 -3 Q7 3 0 3 Q-7 3 -9 -3 Q-10 -10 -5 -13 Q-7 -15 -7 -19 Q-7 -26 0 -26 Z" fill="#E9C46A" stroke="#A16207" strokeWidth="0.8" />
          <Circle cx="0" cy="-12" r="2.6" fill="#422006" />
          <Circle cx="0" cy="-12" r="3.6" fill="none" stroke="#16A34A" strokeWidth="0.6" />
          <Rect x="-3" y="-4" width="6" height="1.2" fill="#422006" />
          {[-1.1, -0.4, 0.4, 1.1].map((x) => (
            <Line key={x} x1={x} y1="-44" x2={x} y2="-3" stroke="#F5F5F4" strokeWidth="0.25" />
          ))}
        </G>
      );
    case 'frevo':
      return (
        <G>
          <Line x1="0" y1="4" x2="0" y2="-34" stroke="#1F2937" strokeWidth="1.2" />
          {['#DC2626', '#FACC15', '#16A34A', '#2563EB'].map((c, i) => {
            const a0 = Math.PI + (i * Math.PI) / 4;
            const a1 = Math.PI + ((i + 1) * Math.PI) / 4;
            const p = (a: number) => `${(15 * Math.cos(a)).toFixed(2)} ${(-34 + 15 * Math.sin(a)).toFixed(2)}`;
            return <Path key={c} d={`M0 -34 L${p(a0)} A15 15 0 0 1 ${p(a1)} Z`} fill={c} />;
          })}
          <Path d="M-15 -34 Q-11 -31 -7.5 -34 Q-4 -31 0 -34 Q4 -31 7.5 -34 Q11 -31 15 -34" fill="none" stroke="#F8FAFC" strokeWidth="1" />
          <Circle cx="0" cy="-49" r="1.2" fill="#1F2937" />
        </G>
      );
    case 'cuia':
      return (
        <G>
          <Line x1="2" y1="-18" x2="9" y2="-40" stroke="#CBD5E1" strokeWidth="1.6" strokeLinecap="round" />
          <Ellipse cx="9" cy="-40.5" rx="1.6" ry="1" fill="#94A3B8" />
          <Path d="M-8 -20 Q-12 -9 -7 -1 Q0 4 7 -1 Q12 -9 8 -20 Z" fill="#7C4A1E" />
          <Path d="M-7 -8 Q0 -5 7 -8" fill="none" stroke="#A16207" strokeWidth="0.7" />
          <Rect x="-8.5" y="-22" width="17" height="3" rx="1" fill="#CBD5E1" />
          <Ellipse cx="0" cy="-22" rx="7" ry="2" fill="#4D7C0F" />
        </G>
      );
    case 'baguete':
      return (
        <G transform="rotate(14)">
          <Ellipse cx="0" cy="-18" rx="4.8" ry="27" fill="#D97706" stroke="#92400E" strokeWidth="0.6" />
          {[-34, -24, -14, -4].map((y) => (
            <Path key={y} d={`M-2.5 ${y + 2} L2.5 ${y - 2}`} stroke="#FDE68A" strokeWidth="1.3" strokeLinecap="round" />
          ))}
        </G>
      );
    case 'dalahast':
      return (
        <G>
          <Path d="M-9 0 L-9 -15 L-6 -18 L5 -18 L7 -27 Q10 -31 13 -28 L15 -24 L13 -22 L10 -23 L9 -18 L10 -15 L10 0 L6 0 L6 -8 L-5 -8 L-5 0 Z" fill="#DC2626" stroke="#7F1D1D" strokeWidth="0.7" />
          <Path d="M6 -26 L8 -18" stroke="#1F2937" strokeWidth="1.4" />
          <Path d="M-6 -18 Q0 -12 6 -18" fill="none" stroke="#FACC15" strokeWidth="1.3" />
          <Circle cx="0" cy="-12" r="1.7" fill="#FFFFFF" />
          <Circle cx="0" cy="-12" r="0.8" fill="#2563EB" />
          <Path d="M-6 -13 Q-4 -10 -2 -13 M2 -13 Q4 -10 6 -13" fill="none" stroke="#16A34A" strokeWidth="0.8" />
          <Circle cx="11" cy="-26.5" r="0.7" fill="#1F2937" />
        </G>
      );
    case 'julehjerte':
      return (
        <G>
          <Path d="M-4 -30 Q0 -38 4 -30" fill="none" stroke="#DC2626" strokeWidth="1.4" />
          <Path d="M0 -4 L-11 -16 Q-15 -23 -10 -28 Q-5 -32 0 -26 Z" fill="#DC2626" />
          <Path d="M0 -4 L11 -16 Q15 -23 10 -28 Q5 -32 0 -26 Z" fill="#FFFFFF" stroke="#DC2626" strokeWidth="0.8" />
          {/* o trançado */}
          <Path d="M-8 -12 L2 -24 M-4 -8 L6 -20 M-11 -18 L-3 -27" stroke="#FFFFFF" strokeWidth="1.1" />
          <Path d="M8 -12 L-2 -24 M4 -8 L-6 -20 M11 -18 L3 -27" stroke="#DC2626" strokeWidth="1.1" opacity={0.85} />
        </G>
      );
    case 'vihta':
      return (
        <G>
          {Array.from({ length: 16 }, (_, i) => {
            const a = ((-50 + (i * 100) / 15) * Math.PI) / 180;
            const r = 14 + (i % 3) * 6;
            const x = r * Math.sin(a);
            const y = -14 - r * Math.cos(a);
            return <Ellipse key={i} cx={x} cy={y} rx="3" ry="4.5" fill={i % 2 ? '#22C55E' : '#16A34A'} transform={`rotate(${(a * 180) / Math.PI} ${x} ${y})`} />;
          })}
          {[-1.5, 0, 1.5].map((x) => (
            <Line key={x} x1={x} y1="4" x2={x * 2} y2="-14" stroke="#78350F" strokeWidth="1.2" />
          ))}
          <Rect x="-3" y="-12" width="6" height="2.5" fill="#D6D3D1" />
        </G>
      );
    case 'lanterna':
      return (
        <G>
          <Line x1="0" y1="4" x2="0" y2="-9" stroke="#A16207" strokeWidth="1.4" />
          <Path d="M-3 -9 L3 -9 M0 -9 L-1 -3 M0 -9 L1 -3" stroke="#FACC15" strokeWidth="0.8" />
          <Ellipse cx="0" cy="-23" rx="11" ry="11.5" fill="#DC2626" />
          {[-6, 0, 6].map((x) => (
            <Path key={x} d={`M${x} -34 Q${x * 1.7} -23 ${x} -12`} fill="none" stroke="#991B1B" strokeWidth="0.8" />
          ))}
          <Rect x="-5.5" y="-36.5" width="11" height="3" rx="1" fill="#EAB308" />
          <Rect x="-5.5" y="-12.5" width="11" height="3" rx="1" fill="#EAB308" />
          <Circle cx="0" cy="-23" r="3" fill="#FACC15" opacity={0.7} />
        </G>
      );
    case 'djembe':
      return (
        <G>
          <Path d="M-11 -38 L11 -38 Q10 -24 3 -18 L3 -9 Q8 -5 7 0 L-7 0 Q-8 -5 -3 -9 L-3 -18 Q-10 -24 -11 -38 Z" fill="#92400E" stroke="#451A03" strokeWidth="0.6" />
          <Ellipse cx="0" cy="-38" rx="11" ry="2.8" fill="#F5E6C8" stroke="#451A03" strokeWidth="0.6" />
          <Path d="M-10 -35 L-6 -22 L-2 -35 L2 -22 L6 -35 L10 -22" fill="none" stroke="#F8FAFC" strokeWidth="0.7" />
          <Path d="M-8 -24 Q0 -21 8 -24" fill="none" stroke="#F8FAFC" strokeWidth="0.9" />
        </G>
      );
    case 'uchiwa':
      return (
        <G>
          <Rect x="-1.2" y="-14" width="2.4" height="18" rx="1" fill="#A16207" />
          <Circle cx="0" cy="-27" r="13" fill="#FFFFFF" stroke="#A16207" strokeWidth="1" />
          <Circle cx="4" cy="-31" r="4.5" fill="#DC2626" />
          <Path d="M-12 -22 Q-8 -26 -4 -22 Q0 -18 4 -22 Q8 -26 12 -22 L11 -19 Q6 -15 0 -16 Q-6 -15 -11 -19 Z" fill="#2563EB" />
          {[-60, -30, 0, 30, 60].map((d) => {
            const a = (d * Math.PI) / 180;
            return <Line key={d} x1="0" y1="-14" x2={13 * Math.sin(a)} y2={-27 - 13 * Math.cos(a) * 0.9} stroke="#E7E5E4" strokeWidth="0.4" />;
          })}
        </G>
      );
    case 'porro':
      return (
        <G>
          {/* o porró: garrafa de vidro com bico comprido, com vinho */}
          <Path d="M-6 0 Q-10 -6 -6 -12 L-3 -16 L-3 -30 L3 -30 L3 -16 L6 -12 Q10 -6 6 0 Z" fill="#E0F2FE" stroke="#7DD3FC" strokeWidth="0.8" opacity={0.95} />
          <Path d="M-8 -6 Q0 -4 8 -6 Q9 -2 6 0 L-6 0 Q-9 -2 -8 -6 Z" fill="#7F1D1D" />
          <Path d="M5 -10 L16 -30 L17.5 -29 L7 -8 Z" fill="#E0F2FE" stroke="#7DD3FC" strokeWidth="0.6" />
          <Rect x="-3.5" y="-33" width="7" height="3" rx="1" fill="#BAE6FD" />
        </G>
      );
    default:
      return null;
  }
}
