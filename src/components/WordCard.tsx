import { Text, View } from 'react-native';
import Svg, { Circle, Line, Path, Rect } from 'react-native-svg';

/**
 * O cartão da palavra: a imagem das palavras que não têm foto, pictograma nem emoji só delas
 * (conectivos, expressões, palavras abstratas — decisão do dono do projeto, ver AGENTS.md). Cor e
 * padrão saem da própria palavra, então dois cartões do mesmo Cofre não ficam iguais, e o texto é a
 * palavra, sem fingir um sentido que um ícone não teria. Com `revealText` falso (a frente do
 * flashcard), só a cor e o padrão: o texto entregaria a resposta.
 */

/** FNV-1a de 32 bits: o mesmo texto dá sempre o mesmo cartão. */
function hash(s: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

/** 18 matizes, espaçados pelo círculo de cores; fundo claro e traço médio da mesma cor. */
const HUES = 18;
const PATTERNS = 8;

export function wordCardStyle(text: string) {
  const h = hash(text);
  const hue = Math.round(((h % HUES) * 360) / HUES);
  return {
    pattern: Math.floor(h / HUES) % PATTERNS,
    // o ângulo/deslocamento varia também, para o mesmo padrão não repetir igualzinho
    turn: Math.floor(h / (HUES * PATTERNS)) % 4,
    bg: `hsl(${hue}, 70%, 90%)`,
    ink: `hsl(${hue}, 55%, 72%)`,
    border: `hsl(${hue}, 45%, 62%)`,
  };
}

function Pattern({ kind, turn, ink }: { kind: number; turn: number; ink: string }) {
  const p = { stroke: ink, strokeWidth: 5, fill: 'none' } as const;
  const shift = turn * 6;
  switch (kind) {
    case 0: // listras diagonais
      return <>{[-100, -60, -20, 20, 60, 100].map((o) => <Line key={o} x1={o + shift} y1={0} x2={o + shift + 100} y2={100} {...p} />)}</>;
    case 1: // bolinhas
      return <>{[15, 45, 75].flatMap((y) => [15, 45, 75].map((x) => <Circle key={`${x}-${y}`} cx={x + (y === 45 ? 15 : 0) + shift / 2} cy={y} r={6} fill={ink} />))}</>;
    case 2: // ondas
      return <>{[20, 50, 80].map((y) => <Path key={y} d={`M-10 ${y} q 15 -${10 + turn * 2} 30 0 t 30 0 t 30 0 t 30 0`} {...p} />)}</>;
    case 3: // xadrez de quadrinhos
      return <>{[0, 1, 2, 3].flatMap((r) => [0, 1, 2, 3].filter((c) => (r + c + turn) % 2 === 0).map((c) => <Rect key={`${r}-${c}`} x={c * 25 + 4} y={r * 25 + 4} width={17} height={17} fill={ink} />))}</>;
    case 4: // anéis concêntricos
      return <>{[12, 28, 44, 60].map((r) => <Circle key={r} cx={turn % 2 ? 0 : 100} cy={turn < 2 ? 0 : 100} r={r + 10} {...p} />)}</>;
    case 5: // zigue-zague
      return <>{[22, 50, 78].map((y) => <Path key={y} d={`M-5 ${y} l 15 -12 l 15 12 l 15 -12 l 15 12 l 15 -12 l 15 12 l 15 -12`} {...p} />)}</>;
    case 6: // grade
      return <>{[20, 40, 60, 80].flatMap((v) => [<Line key={`h${v}`} x1={0} y1={v + shift / 3} x2={100} y2={v + shift / 3} {...p} strokeWidth={3} />, <Line key={`v${v}`} x1={v} y1={0} x2={v} y2={100} {...p} strokeWidth={3} />])}</>;
    default: // triângulos
      return <>{[0, 1, 2].flatMap((r) => [0, 1, 2].map((c) => <Path key={`${r}-${c}`} d={`M${c * 34 + 4} ${r * 34 + 28} l 13 -22 l 13 22 z`} fill={ink} transform={turn % 2 ? `rotate(180 ${c * 34 + 17} ${r * 34 + 17})` : undefined} />))}</>;
  }
}

/**
 * O texto do cartão pequeno da lista do Cofre: as iniciais das palavras («a fim de que» → «AFQ») ou,
 * numa palavra só, as três primeiras letras («uma» → «UMA», «um» → «UM»: não podem ficar iguais).
 */
function initials(text: string): string {
  const words = text.split(/[\s/-]+/).filter((w) => /\p{L}/u.test(w));
  const big = words.filter((w) => w.length > 2);
  const use = (big.length ? big : words).slice(0, 3);
  const s = use.length > 1 ? use.map((w) => [...w][0]).join('') : [...(use[0] ?? '?')].slice(0, 3).join('');
  return s.toLocaleUpperCase('pt-BR');
}

export function WordCard({ text, size, revealText = true }: { text: string; size: number; revealText?: boolean }) {
  const st = wordCardStyle(text);
  const radius = Math.round(size * 0.16);
  const small = size < 72;
  const label = small ? initials(text) : text;
  const fontSize = small ? Math.round(size * (label.length > 2 ? 0.28 : 0.36)) : Math.max(13, Math.min(Math.round(size * 0.15), Math.round((size * 1.9) / Math.max(4, Math.sqrt(text.length) * 2.2))));
  return (
    <View
      accessibilityRole="image"
      accessibilityLabel={revealText ? `Cartão: ${text}` : 'Cartão da palavra'}
      style={{ width: size, height: size, borderRadius: radius, overflow: 'hidden', backgroundColor: st.bg, borderWidth: 1, borderColor: st.border }}
    >
      <Svg width={size} height={size} viewBox="0 0 100 100" style={{ position: 'absolute' }}>
        <Pattern kind={st.pattern} turn={st.turn} ink={st.ink} />
      </Svg>
      {revealText && (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: Math.round(size * 0.08) }}>
          <Text
            numberOfLines={small ? 1 : 4}
            adjustsFontSizeToFit
            style={{
              fontSize,
              lineHeight: Math.round(fontSize * 1.2),
              fontWeight: '800',
              color: '#0F172A',
              textAlign: 'center',
              backgroundColor: 'rgba(255,255,255,0.82)',
              borderRadius: 6,
              paddingHorizontal: small ? 2 : 6,
              paddingVertical: small ? 0 : 2,
              overflow: 'hidden',
            }}
          >
            {label}
          </Text>
        </View>
      )}
    </View>
  );
}
