import { Circle, Ellipse, G, Path, Svg } from 'react-native-svg';
import { koiLetters, type KoiLetter } from '@/services/koiwrit';

/**
 * Desenho do Koiwrit, a escrita do Tsevhu. Cada letra é um arco de ¼, ½, ¾ ou do círculo inteiro
 * com o enfeite do seu traço (1 a 10); a palavra é uma ondulação de anéis concêntricos, com a
 * primeira letra no centro, como a pedra que cai na água. É uma versão estilizada da tabela oficial.
 */

const rad = (deg: number) => ((deg - 90) * Math.PI) / 180;
const pt = (cx: number, cy: number, r: number, deg: number) => [cx + r * Math.cos(rad(deg)), cy + r * Math.sin(rad(deg))] as const;

function arc(cx: number, cy: number, r: number, from: number, sweep: number) {
  const s = Math.min(sweep, 359.5);
  const [x1, y1] = pt(cx, cy, r, from);
  const [x2, y2] = pt(cx, cy, r, from + s);
  return `M${x1.toFixed(2)} ${y1.toFixed(2)} A${r} ${r} 0 ${s > 180 ? 1 : 0} 1 ${x2.toFixed(2)} ${y2.toFixed(2)}`;
}

/** Um anel: o arco da letra no raio `r`, começando no ângulo `from`, com o enfeite do traço. */
function Ring({ l, cx, cy, r, from, color, w }: { l: KoiLetter; cx: number; cy: number; r: number; from: number; color: string; w: number }) {
  const sweep = l.size * 90;
  const end = from + Math.min(sweep, 359.5);
  const mid = from + sweep / 2;
  const d = (p: string, extra = {}) => <Path d={p} stroke={color} strokeWidth={w} fill="none" strokeLinecap="round" {...extra} />;
  const [ex, ey] = pt(cx, cy, r, end);
  const [sx, sy] = pt(cx, cy, r, from);
  const [mx, my] = pt(cx, cy, r, mid);
  const k = w * 1.6;
  switch (l.shape) {
    case 1: // arco simples
      return d(arc(cx, cy, r, from, sweep));
    case 2: // arco com um gancho no fim
      return (
        <G>
          {d(arc(cx, cy, r, from, sweep))}
          {d(arc(...pt(cx, cy, r - k, end), k, end + 90, 200))}
        </G>
      );
    case 3: // arco duplo
      return (
        <G>
          {d(arc(cx, cy, r, from, sweep))}
          {d(arc(cx, cy, r - k * 1.2, from + 6, Math.max(20, sweep - 12)))}
        </G>
      );
    case 4: {
      // arco com um tique no começo
      const [ix, iy] = pt(cx, cy, r - k * 1.8, from);
      return (
        <G>
          {d(arc(cx, cy, r, from, sweep))}
          {d(`M${sx} ${sy} L${ix} ${iy}`)}
        </G>
      );
    }
    case 5: // arco com laços nas duas pontas
      return (
        <G>
          {d(arc(cx, cy, r, from, sweep))}
          <Circle cx={sx} cy={sy} r={k * 0.7} stroke={color} strokeWidth={w * 0.8} fill="none" />
          <Circle cx={ex} cy={ey} r={k * 0.7} stroke={color} strokeWidth={w * 0.8} fill="none" />
        </G>
      );
    case 6: {
      // arco com uma corcova para fora no meio
      const [ox, oy] = pt(cx, cy, r + k * 1.8, mid);
      const [ax, ay] = pt(cx, cy, r, mid - 12);
      const [bx, by] = pt(cx, cy, r, mid + 12);
      return (
        <G>
          {d(arc(cx, cy, r, from, sweep))}
          {d(`M${ax} ${ay} Q${ox} ${oy} ${bx} ${by}`)}
        </G>
      );
    }
    case 7: {
      // arco com um ponto por dentro
      const [px, py] = pt(cx, cy, r - k * 1.6, mid);
      return (
        <G>
          {d(arc(cx, cy, r, from, sweep))}
          <Circle cx={px} cy={py} r={w * 0.9} fill={color} />
        </G>
      );
    }
    case 8: // arco partido no meio
      return (
        <G>
          {d(arc(cx, cy, r, from, sweep / 2 - 8))}
          {d(arc(cx, cy, r, mid + 8, sweep / 2 - 8))}
        </G>
      );
    case 9: {
      // arco que começa com um «v»
      const [vx, vy] = pt(cx, cy, r + k * 1.6, from - 10);
      return (
        <G>
          {d(arc(cx, cy, r, from, sweep))}
          {d(`M${vx} ${vy} L${sx} ${sy}`)}
        </G>
      );
    }
    default: // 10: arco com um laço e um arco curto no fim
      return (
        <G>
          {d(arc(cx, cy, r, from, sweep))}
          {d(arc(cx, cy, r + k * 1.2, end - 30, 30))}
          <Circle cx={mx} cy={my} r={w * 0.7} fill={color} />
        </G>
      );
  }
}

/** Uma letra sozinha (para a tabela e o treino). */
export function KoiGlyph({ letter, size = 56, color = '#0EA5E9' }: { letter: KoiLetter; size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 40 40" accessibilityLabel={`sinal do Koiwrit: ${letter.letter}`}>
      <Ring l={letter} cx={20} cy={20} r={12} from={-40} color={color} w={2.2} />
    </Svg>
  );
}

/** A ondulação de uma palavra: um anel por letra, a primeira no centro. */
export function KoiRipple({ word, size = 120, color = '#0EA5E9' }: { word: string; size?: number; color?: string }) {
  const letters = koiLetters(word);
  const n = Math.max(1, letters.length);
  const gap = Math.min(6, 38 / n);
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100" accessibilityLabel={`“${word}” em Koiwrit`}>
      <Circle cx={50} cy={50} r={1.6} fill={color} />
      {letters.map((l, i) => (
        <Ring key={i} l={l} cx={50} cy={50} r={6 + i * gap + gap / 2} from={i * 67 - 30} color={color} w={Math.max(1.1, Math.min(2.2, gap * 0.38))} />
      ))}
    </Svg>
  );
}

/** Um koi visto de cima, com o focinho na direção do tempo e o rabo dobrado conforme o modo. */
export function KoiFish({ angle = 180, mood = 'declarativo', words = [], size = 260, dark = false }: { angle?: number; mood?: string; words?: string[]; size?: number; dark?: boolean }) {
  // o desenho base tem o focinho para cima (0°); o rabo dobra para um lado no imperativo e no interrogativo
  const bend = mood === 'imperativo' ? -22 : mood === 'interrogativo' ? 22 : 0;
  const ink = dark ? '#E2E8F0' : '#0F172A';
  const ripple = dark ? '#38BDF8' : '#0284C7';
  const spots = dark ? '#FB923C' : '#F97316';
  const shown = words.slice(0, 4);
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200" accessibilityLabel={`koi com o focinho a ${angle} graus e o modo ${mood}`}>
      <Circle cx={100} cy={100} r={96} fill="none" stroke={dark ? '#334155' : '#CBD5E1'} strokeWidth={1} strokeDasharray="3 4" />
      <G transform={`rotate(${angle} 100 100)`}>
        {/* rabo */}
        <G transform={`rotate(${bend} 100 140)`}>
          <Path d="M100 138 Q86 162 78 182 Q96 170 100 160 Q104 170 122 182 Q114 162 100 138 Z" fill={dark ? '#1E293B' : '#FFFFFF'} stroke={ink} strokeWidth={2} />
        </G>
        {/* corpo */}
        <Path d="M100 22 Q124 30 126 74 Q126 112 108 140 L92 140 Q74 112 74 74 Q76 30 100 22 Z" fill={dark ? '#1E293B' : '#FFFFFF'} stroke={ink} strokeWidth={2} />
        {/* nadadeiras */}
        <Path d="M76 70 Q56 74 50 92 Q66 88 78 84 Z" fill="none" stroke={ink} strokeWidth={1.6} />
        <Path d="M124 70 Q144 74 150 92 Q134 88 122 84 Z" fill="none" stroke={ink} strokeWidth={1.6} />
        {/* manchas e olhos */}
        <Ellipse cx={92} cy={50} rx={8} ry={6} fill={spots} opacity={0.8} />
        <Ellipse cx={110} cy={98} rx={7} ry={9} fill={spots} opacity={0.7} />
        <Circle cx={92} cy={32} r={2.2} fill={ink} />
        <Circle cx={108} cy={32} r={2.2} fill={ink} />
        <Path d="M96 24 Q88 16 82 18 M104 24 Q112 16 118 18" stroke={ink} strokeWidth={1.2} fill="none" />
        {/* as palavras giram com o koi: a 1ª no meio do corpo, a 2ª perto da cabeça, a 3ª perto do rabo e a 4ª na frente do focinho */}
        {shown.map((w, i) => {
          const pos = [
            [100, 86],
            [100, 48],
            [100, 122],
            [100, 6],
          ][i];
          const s = i === 0 ? 64 : 46;
          return (
            <G key={i} transform={`translate(${pos[0] - s / 2} ${pos[1] - s / 2})`}>
              <KoiRippleInline word={w} size={s} color={ripple} />
            </G>
          );
        })}
      </G>
    </Svg>
  );
}

/** A ondulação dentro de outro SVG (sem o <Svg> próprio). */
function KoiRippleInline({ word, size, color }: { word: string; size: number; color: string }) {
  const letters = koiLetters(word);
  const n = Math.max(1, letters.length);
  const scale = size / 100;
  const gap = Math.min(6, 38 / n);
  return (
    <G transform={`scale(${scale})`}>
      <Circle cx={50} cy={50} r={1.6} fill={color} />
      {letters.map((l, i) => (
        <Ring key={i} l={l} cx={50} cy={50} r={6 + i * gap + gap / 2} from={i * 67 - 30} color={color} w={Math.max(1.1, Math.min(2.2, gap * 0.38))} />
      ))}
    </G>
  );
}
