import Svg, { ClipPath, Defs, Polygon, Rect } from 'react-native-svg';
import type { BandeiraRegional } from '@/data/bandeiras-regionais';

const W = 60;
const H = 40;

/** Pontos de um paralelogramo ao longo da diagonal (x1,y1)→(x2,y2), com `largura` de espessura
 * perpendicular à diagonal (em unidades do canvas 60×40) — usado pra faixa diagonal e pra cada
 * braço da aspa (X). */
function diagonalBand(x1: number, y1: number, x2: number, y2: number, largura: number): string {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  const nx = (-dy / len) * (largura / 2);
  const ny = (dx / len) * (largura / 2);
  const a = [x1 + nx, y1 + ny];
  const b = [x2 + nx, y2 + ny];
  const c = [x2 - nx, y2 - ny];
  const d = [x1 - nx, y1 - ny];
  return [a, b, c, d].map((p) => p.join(',')).join(' ');
}

/**
 * Bandeira de uma região específica (não o país inteiro), desenhada em SVG a partir das cores e
 * proporções oficiais de `bandeiras-regionais.ts` — nunca um emoji de bandeira, porque o Unicode só
 * tem bandeira de verdade pra país (ver o comentário daquele arquivo).
 */
export function RegionFlag({ bandeira, size = 18 }: { bandeira: BandeiraRegional; size?: number }) {
  const w = size * 1.5;
  const h = size;
  return (
    <Svg width={w} height={h} viewBox={`0 0 ${W} ${H}`}>
      <Defs>
        <ClipPath id="moldura">
          <Rect x={0} y={0} width={W} height={H} />
        </ClipPath>
      </Defs>
      <Rect x={0} y={0} width={W} height={H} fill="#FFFFFF" />
      {bandeira.tipo === 'listras' && (
        <>
          {bandeira.cores.map((c, i) => {
            const stripeH = H / bandeira.cores.length;
            return <Rect key={i} x={0} y={i * stripeH} width={W} height={stripeH} fill={c} />;
          })}
        </>
      )}
      {bandeira.tipo === 'faixa-diagonal' && (
        <>
          <Rect x={0} y={0} width={W} height={H} fill={bandeira.fundo} />
          <Polygon points={diagonalBand(0, 0, W, H, bandeira.largura * H)} fill={bandeira.faixa} clipPath="url(#moldura)" />
        </>
      )}
      {bandeira.tipo === 'cruz-sobre-aspa' && (
        <>
          <Rect x={0} y={0} width={W} height={H} fill={bandeira.fundo} />
          <Polygon points={diagonalBand(0, 0, W, H, bandeira.larguraAspa * H)} fill={bandeira.aspa} clipPath="url(#moldura)" />
          <Polygon points={diagonalBand(0, H, W, 0, bandeira.larguraAspa * H)} fill={bandeira.aspa} clipPath="url(#moldura)" />
          <Rect x={0} y={H / 2 - (bandeira.larguraCruz * H) / 2} width={W} height={bandeira.larguraCruz * H} fill={bandeira.cruz} />
          <Rect x={W / 2 - (bandeira.larguraCruz * H) / 2} y={0} width={bandeira.larguraCruz * H} height={H} fill={bandeira.cruz} />
        </>
      )}
    </Svg>
  );
}
