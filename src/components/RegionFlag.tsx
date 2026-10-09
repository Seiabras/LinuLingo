import Svg, { Circle, ClipPath, Defs, Ellipse, G, Polygon, Rect } from 'react-native-svg';
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
 * Flor-de-lis simplificada: uma pétala central e duas laterais (3 lentes pontudas, a central reta
 * pra cima e as de lado giradas ±55°, todas saindo do mesmo ponto de base) mais uma faixa com dois
 * laços na base — a geometria real tem curvas; aqui vira polígono reto, que já basta pro tamanho
 * que este ícone aparece no app (ver a nota em `bandeiras-regionais.ts`, bandeira do Quebec).
 */
function FleurDeLis({ cx, cy, scale, cor }: { cx: number; cy: number; scale: number; cor: string }) {
  // pétala "lente" apontando pra cima, base em (0,0), ponta em (0,-7)
  const petala = '0,-7 1.1,-4 0.9,-1.3 0,0 -0.9,-1.3 -1.1,-4';
  return (
    <G transform={`translate(${cx},${cy}) scale(${scale})`}>
      <Polygon points={petala} fill={cor} />
      <G transform="rotate(-55)">
        <Polygon points={petala} fill={cor} />
      </G>
      <G transform="rotate(55)">
        <Polygon points={petala} fill={cor} />
      </G>
      <Rect x={-3.3} y={-0.3} width={6.6} height={1.5} fill={cor} />
      <Circle cx={-3.6} cy={0.5} r={0.9} fill={cor} />
      <Circle cx={3.6} cy={0.5} r={0.9} fill={cor} />
    </G>
  );
}

/**
 * Tríscele simplificado: uma cabeça (círculo) no centro e 3 pernas dobradas no joelho, cada uma
 * coxa + canela em ângulo, repetidas por rotação de 120° — a simetria de 3 é o que torna a figura
 * reconhecível como tríscele, mais do que o desenho exato de cada perna.
 */
function Triscele({ cx, cy, cor }: { cx: number; cy: number; cor: string }) {
  const perna = (angulo: number) => (
    <G key={angulo} transform={`rotate(${angulo} ${cx} ${cy})`}>
      <Rect x={cx - 1.4} y={cy - 8} width={2.8} height={8} fill={cor} />
      <G transform={`translate(${cx},${cy - 8}) rotate(50)`}>
        <Rect x={-1.4} y={-6} width={2.8} height={6} fill={cor} />
      </G>
    </G>
  );
  return (
    <>
      {[0, 120, 240].map(perna)}
      <Circle cx={cx} cy={cy} r={4.2} fill={cor} />
      <Circle cx={cx - 1.3} cy={cy - 0.5} r={0.5} fill="#fff" />
      <Circle cx={cx + 1.3} cy={cy - 0.5} r={0.5} fill="#fff" />
    </>
  );
}

/** Cabeça de mouro simplificada: círculo preto, faixa branca (bandana) na testa. `r` é o raio. */
function MoorHead({ cx, cy, r, cabeca, bandana }: { cx: number; cy: number; r: number; cabeca: string; bandana: string }) {
  return (
    <>
      <Circle cx={cx} cy={cy} r={r} fill={cabeca} />
      <Rect x={cx - r} y={cy - r * 0.32} width={r * 2} height={r * 0.42} fill={bandana} />
    </>
  );
}

/**
 * Cabeça de mouro grande e sozinha (Córsega): um perfil oval, em vez de um círculo liso, pra não
 * ficar parecendo um sinal de "proibido" — nariz saliente de um lado, queixo pontudo embaixo, faixa
 * branca (bandana) na altura dos olhos.
 */
function BigMoorHead({ cx, cy, rx, ry, cabeca, bandana }: { cx: number; cy: number; rx: number; ry: number; cabeca: string; bandana: string }) {
  const bw = rx * 2.5;
  const bh = ry * 0.3;
  const by = cy - ry * 0.3;
  return (
    <>
      <Ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={cabeca} />
      <Polygon points={`${cx - rx},${cy - 1} ${cx - rx - rx * 0.5},${cy + 2} ${cx - rx},${cy + 5}`} fill={cabeca} />
      <Polygon points={`${cx - 3},${cy + ry - 1} ${cx},${cy + ry + 3} ${cx + 3},${cy + ry - 1}`} fill={cabeca} />
      <Rect x={cx - bw / 2} y={by - bh / 2} width={bw} height={bh} fill={bandana} />
    </>
  );
}

/** Mancha de arminho simplificada (losango pequeno) — a heráldica de verdade tem 3 pontas e rabo. */
function ErmineSpot({ cx, cy, cor }: { cx: number; cy: number; cor: string }) {
  return <Polygon points={`${cx},${cy - 1.3} ${cx + 1},${cy} ${cx},${cy + 1.3} ${cx - 1},${cy}`} fill={cor} />;
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
      {bandeira.tipo === 'cruz-flor-de-lis' &&
        (() => {
          const crossV = W / 6; // espessura da barra vertical da cruz
          const crossH = H / 4; // espessura da barra horizontal da cruz
          const qw = (W - crossV) / 2; // largura de cada quadrante
          const qh = (H - crossH) / 2; // altura de cada quadrante
          const centros: [number, number][] = [
            [qw / 2, qh / 2],
            [W - qw / 2, qh / 2],
            [qw / 2, H - qh / 2],
            [W - qw / 2, H - qh / 2],
          ];
          return (
            <>
              <Rect x={0} y={0} width={W} height={H} fill={bandeira.fundo} />
              <Rect x={(W - crossV) / 2} y={0} width={crossV} height={H} fill={bandeira.cruz} />
              <Rect x={0} y={(H - crossH) / 2} width={W} height={crossH} fill={bandeira.cruz} />
              {centros.map(([cx, cy], i) => (
                <FleurDeLis key={i} cx={cx} cy={cy + 2.5} scale={1.3} cor={bandeira.flor} />
              ))}
            </>
          );
        })()}
      {bandeira.tipo === 'diagonal-triscele' && (
        <>
          <Polygon points={`0,0 ${W},0 ${W},${H}`} fill={bandeira.superior} />
          <Polygon points={`0,0 0,${H} ${W},${H}`} fill={bandeira.inferior} />
          <Triscele cx={W / 2} cy={H / 2} cor={bandeira.figura} />
        </>
      )}
      {bandeira.tipo === 'cruz-mouros' &&
        (() => {
          const t = 4; // espessura da cruz (mesma nos 2 eixos — a fonte tem braços quase iguais)
          const qw = (W - t) / 2;
          const qh = (H - t) / 2;
          const centros: [number, number][] = [
            [qw / 2, qh / 2],
            [W - qw / 2, qh / 2],
            [qw / 2, H - qh / 2],
            [W - qw / 2, H - qh / 2],
          ];
          return (
            <>
              <Rect x={0} y={0} width={W} height={H} fill={bandeira.fundo} />
              <Rect x={(W - t) / 2} y={0} width={t} height={H} fill={bandeira.cruz} />
              <Rect x={0} y={(H - t) / 2} width={W} height={t} fill={bandeira.cruz} />
              {centros.map(([cx, cy], i) => (
                <MoorHead key={i} cx={cx} cy={cy} r={4.3} cabeca={bandeira.cabeca} bandana={bandeira.bandana} />
              ))}
            </>
          );
        })()}
      {bandeira.tipo === 'cabeca-mouro' && (
        <>
          <Rect x={0} y={0} width={W} height={H} fill={bandeira.fundo} />
          <BigMoorHead cx={W / 2} cy={H / 2} rx={9} ry={11} cabeca={bandeira.cabeca} bandana={bandeira.bandana} />
        </>
      )}
      {bandeira.tipo === 'listras-arminhos' &&
        (() => {
          const stripeH = H / bandeira.numListras;
          const cantonW = (W * 612) / 1350;
          const cantonH = (H * 400) / 900;
          const spots: [number, number][] = [];
          for (const fx of [0.22, 0.5, 0.78]) {
            for (const fy of [0.28, 0.72]) spots.push([cantonW * fx, cantonH * fy]);
          }
          return (
            <>
              {Array.from({ length: bandeira.numListras }, (_, i) => (
                <Rect key={i} x={0} y={i * stripeH} width={W} height={stripeH} fill={i % 2 === 0 ? bandeira.escura : bandeira.clara} />
              ))}
              <Rect x={0} y={0} width={cantonW} height={cantonH} fill={bandeira.clara} />
              {spots.map(([sx, sy], i) => (
                <ErmineSpot key={i} cx={sx} cy={sy} cor={bandeira.arminho} />
              ))}
            </>
          );
        })()}
    </Svg>
  );
}
