import Svg, { Ellipse, G, Line, Path, Text as SvgText } from 'react-native-svg';
import { ehPreta, posicaoNaPauta } from '@/services/musica/notas';
import { useIsDark } from '@/services/theme';

const ESPACO = 10; // distância entre duas linhas da pauta
const TOPO = 30; // margem acima da 5ª linha (para as notas agudas)
const ALTURA = TOPO + 4 * ESPACO + 42; // embaixo cabem o sol grave e o nome das notas

/** O y de uma posição na pauta (0 = 1ª linha, de baixo; cada passo é meio espaço). */
const yDe = (pos: number) => TOPO + 4 * ESPACO - pos * (ESPACO / 2);

/**
 * A clave de sol, desenhada pelo app (um traço só: a espiral em volta da 2ª linha, a do sol, sobe,
 * faz a volta de cima e desce cortando a pauta).
 */
function ClaveDeSol({ x, cor }: { x: number; cor: string }) {
  const y2 = yDe(2); // a linha do sol
  const d = [
    `M ${x + 9} ${y2 + 1}`,
    `C ${x + 3} ${y2 + 2}, ${x + 3} ${y2 - 7}, ${x + 10} ${y2 - 7}`,
    `C ${x + 18} ${y2 - 7}, ${x + 19} ${y2 + 7}, ${x + 10} ${y2 + 8}`,
    `C ${x + 1} ${y2 + 9}, ${x - 2} ${y2 - 2}, ${x + 6} ${y2 - 12}`,
    `C ${x + 13} ${y2 - 20}, ${x + 17} ${y2 - 30}, ${x + 12} ${y2 - 36}`,
    `C ${x + 7} ${y2 - 30}, ${x + 8} ${y2 - 18}, ${x + 11} ${y2 + 16}`,
    `C ${x + 12} ${y2 + 24}, ${x + 6} ${y2 + 26}, ${x + 4} ${y2 + 21}`,
  ].join(' ');
  return <Path d={d} stroke={cor} strokeWidth={2} fill="none" strokeLinecap="round" />;
}

export interface NotaNaPauta {
  midi: number;
  /** destaque (a nota tocada agora, a nota certa, a errada) */
  cor?: string;
}

/**
 * A pauta com a clave de sol e as notas (semibreves), com as linhas suplementares e o sustenido
 * quando precisa. Partitura desde o começo (decisão do dono, 17/10/2026).
 */
export function Pauta({ notas, largura = 320, rotulos = false, nomes }: { notas: NotaNaPauta[]; largura?: number; rotulos?: boolean; nomes?: (midi: number) => string }) {
  const dark = useIsDark();
  const tinta = dark ? '#e2e8f0' : '#1e293b';
  const x0 = 46;
  const passo = notas.length ? Math.min(44, (largura - x0 - 16) / notas.length) : 44;
  return (
    <Svg width="100%" viewBox={`0 0 ${largura} ${ALTURA}`} style={{ aspectRatio: largura / ALTURA }}>
      {[0, 2, 4, 6, 8].map((p) => (
        <Line key={p} x1={6} x2={largura - 6} y1={yDe(p)} y2={yDe(p)} stroke={tinta} strokeWidth={1} />
      ))}
      <ClaveDeSol x={10} cor={tinta} />
      {notas.map((n, i) => {
        const pos = posicaoNaPauta(n.midi);
        const x = x0 + passo * i + passo / 2;
        const y = yDe(pos);
        const cor = n.cor ?? tinta;
        // linhas suplementares: abaixo da 1ª linha (posições pares negativas) e acima da 5ª
        const sup: number[] = [];
        for (let p = -2; p >= pos; p -= 2) sup.push(p);
        for (let p = 10; p <= pos; p += 2) sup.push(p);
        return (
          <G key={i}>
            {sup.map((p) => (
              <Line key={p} x1={x - 10} x2={x + 10} y1={yDe(p)} y2={yDe(p)} stroke={tinta} strokeWidth={1} />
            ))}
            {ehPreta(n.midi) && (
              <SvgText x={x - 17} y={y + 4} fontSize={13} fill={cor} fontWeight="bold">
                ♯
              </SvgText>
            )}
            <Ellipse cx={x} cy={y} rx={6.5} ry={4.6} fill="none" stroke={cor} strokeWidth={2.2} transform={`rotate(-20 ${x} ${y})`} />
            {rotulos && nomes && (
              <SvgText x={x} y={ALTURA - 4} fontSize={9} fill={cor} textAnchor="middle">
                {nomes(n.midi)}
              </SvgText>
            )}
          </G>
        );
      })}
    </Svg>
  );
}
