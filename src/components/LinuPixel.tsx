import { Image, View, type ImageStyle } from 'react-native';
import Svg, { Rect, type SvgProps } from 'react-native-svg';
import { slotOf } from '@/data/roupas-linu';
import { LINU_PIXEL_COSTAS, LINU_PIXEL_FRENTE, LINU_PIXEL_FUNDO, LINU_PIXEL_H, LINU_PIXEL_LADOFRENTE, LINU_PIXEL_LADOFUNDO, LINU_PIXEL_ROUPA, LINU_PIXEL_W } from '@/data/linu-pixel';
import { useLinuOutfit } from '@/services/linu-outfit';
import { useLinuCor } from '@/services/linu-cor';
import { tintasDaCorda, useCachecol } from '@/services/cachecol';

export type LinuPose = 'frente' | 'costas' | 'esquerda' | 'direita';

// na web o navegador amplia sem borrar os pixels
const PIXELATED = { imageRendering: 'pixelated' } as unknown as ImageStyle;
const ESPELHO: ImageStyle = { transform: [{ scaleX: -1 }] };

/**
 * O Linu em pixel art, com a cor e as roupinhas escolhidas na loja. Quatro poses, todas geradas do
 * mesmo desenho vetorial (`scripts/linu-pixel.py`), empilhadas na ordem do Linu.tsx:
 * - de frente (parado): corpo, roupa, objeto na mão, olhos e bico, pintura de rosto, chapéu;
 * - de costas (olhando para um objeto): o corpo de costas, com o chapéu, a roupa e o objeto espelhados;
 * - de lado (andando, para a esquerda ou direita): o corpo visto de perfil, com o objeto na mão e o
 *   chapéu (a cabeça é o mesmo círculo da pose de frente, então essas duas peças encaixam sem precisar
 *   de uma captura própria) — a roupa do corpo e a pintura de rosto ainda não têm desenho de perfil,
 *   então não aparecem nessa pose.
 * O cachecol da corda (src/services/cachecol.ts) é desenhado por código, em pixels, logo acima do
 * corpo e por baixo da roupa do corpo — de frente com a ponta caindo, de costas só a volta.
 * `width` é a largura na tela da pose de frente; a altura segue a proporção (52 × 61) em todas as poses.
 */
export function LinuPixel({ pose = 'frente', width, cachecol: pedido }: { pose?: LinuPose; width: number; /** a corda (0 a 21) para as prévias; padrão: a conquistada */ cachecol?: number | null }) {
  const look = useLinuOutfit();
  const cor = useLinuCor();
  const conquistado = useCachecol();
  const corda = pedido === undefined ? (conquistado?.corda ?? null) : pedido;
  const h = (width * LINU_PIXEL_H) / LINU_PIXEL_W;
  const peca = (slot: string) => {
    const id = look.find((o) => slotOf(o) === slot);
    return id ? LINU_PIXEL_ROUPA[id] : undefined;
  };

  if (pose === 'esquerda' || pose === 'direita') {
    // o desenho de perfil olha para a direita; "esquerda" espelha o grupo inteiro (corpo + peças)
    const camadas = [LINU_PIXEL_LADOFUNDO[cor] ?? LINU_PIXEL_LADOFUNDO.padrao, peca('mao'), LINU_PIXEL_LADOFRENTE[cor] ?? LINU_PIXEL_LADOFRENTE.padrao, peca('cabeca')];
    return (
      <View style={[{ width, height: h }, pose === 'esquerda' ? ESPELHO : null]} accessibilityLabel="Linu andando">
        {camadas.map((src, i) =>
          src ? <Image key={i} source={src} style={[{ position: 'absolute', left: 0, top: 0, width, height: h }, PIXELATED]} resizeMode="stretch" /> : null,
        )}
      </View>
    );
  }

  const costas = pose === 'costas';
  const camadas = costas
    ? [LINU_PIXEL_COSTAS[cor] ?? LINU_PIXEL_COSTAS.padrao, peca('corpo'), peca('mao'), peca('cabeca')]
    : [LINU_PIXEL_FUNDO[cor] ?? LINU_PIXEL_FUNDO.padrao, peca('corpo'), peca('mao'), LINU_PIXEL_FRENTE[cor] ?? LINU_PIXEL_FRENTE.padrao, peca('rosto'), peca('cabeca')];
  const img = (src: number | undefined, i: number) =>
    src ? (
      <Image
        key={i}
        source={src}
        // de costas, o que é do corpo de frente (roupa, objeto, chapéu) aparece espelhado
        style={[{ position: 'absolute', left: 0, top: 0, width, height: h }, PIXELATED, costas && i > 0 ? ESPELHO : null]}
        resizeMode="stretch"
      />
    ) : null;

  return (
    <View style={{ width, height: h }} accessibilityLabel={costas ? 'Linu de costas' : 'Linu'}>
      {img(camadas[0], 0)}
      {/* o cachecol vai logo acima do corpo: a roupa do corpo (a camada seguinte) fica por cima dele */}
      {corda !== null && <CachecolPixel corda={corda} costas={costas} width={width} height={h} />}
      {camadas.slice(1).map((src, i) => img(src, i + 1))}
    </View>
  );
}

// `shapeRendering` existe no SVG (e no react-native-svg), mas não no tipo SvgProps (como em PixelIcon)
const CRISP = { shapeRendering: 'crispEdges' } as unknown as SvgProps;

/**
 * O cachecol em pixels, na grade do Linu (52 × 61), trecho por trecho: [linha, de x, até x, tinta].
 * A volta do pescoço fica nas linhas 34 a 39, logo abaixo da barbicha, na largura do corpo em cada
 * linha, e desce 1 pixel no meio (x 12 a 36) para parecer enrolada; de frente, a ponta cai à esquerda
 * de quem olha (x 13 a 18), como no Linu vetorial. Tintas: k contorno, c claro, m meio, e escuro.
 */
type Trecho = [y: number, x0: number, x1: number, tinta: 'k' | 'c' | 'm' | 'e'];
const FAIXA: Trecho[3][] = ['k', 'c', 'm', 'e', 'k'];
// cada linha da faixa: dos lados na linha y, no meio (que desce) na linha y + 1
const VOLTA_FRENTE: Trecho[] = FAIXA.flatMap((t, i): Trecho[] => [
  [34 + i, i === 0 ? 8 : i < 3 ? 7 : 6, 11, t],
  [35 + i, 12, 36, t],
  [34 + i, 37, 42, t],
]);
const PONTA: Trecho[] = [
  [39, 14, 17, 'm'],
  ...[40, 41, 43, 44].flatMap((y): Trecho[] => [
    [y, 13, 13, 'k'],
    [y, 14, 14, 'c'],
    [y, 15, 16, 'm'],
    [y, 17, 17, 'e'],
    [y, 18, 18, 'k'],
  ]),
  // a listra
  [42, 13, 13, 'k'],
  [42, 14, 17, 'e'],
  [42, 18, 18, 'k'],
  [45, 13, 18, 'k'],
  // a franja
  [46, 14, 14, 'm'],
  [46, 16, 17, 'm'],
  [47, 14, 14, 'e'],
  [47, 17, 17, 'e'],
];
const VOLTA_COSTAS: Trecho[] = [
  [34, 9, 43, 'k'],
  [35, 9, 44, 'c'],
  [36, 9, 44, 'm'],
  [37, 9, 45, 'e'],
  [38, 9, 45, 'k'],
];
const INK = '#1F2A44';

/**
 * Nas cordas de duas cores, a volta é trançada: blocos de 3 pixels alternam a cor de base e a segunda
 * (o contorno continua inteiro); na ponta, a listra e a franja vão na segunda cor.
 */
function trancar(trechos: Trecho[], volta: boolean): [y: number, x0: number, x1: number, tinta: Trecho[3], segunda: boolean][] {
  return trechos.flatMap(([y, x0, x1, t]) => {
    if (t === 'k') return [[y, x0, x1, t, false]];
    if (!volta) return [[y, x0, x1, t, y >= 42]];
    const out: [number, number, number, Trecho[3], boolean][] = [];
    for (let x = x0; x <= x1; x++) {
      const segunda = Math.floor(x / 3) % 2 === 1;
      const ult = out[out.length - 1];
      if (ult && ult[4] === segunda && ult[2] === x - 1) ult[2] = x;
      else out.push([y, x, x, t, segunda]);
    }
    return out;
  });
}

function CachecolPixel({ corda, costas, width, height }: { corda: number; costas: boolean; width: number; height: number }) {
  const { base, listra, duas } = tintasDaCorda(corda);
  const tinta = (t: Trecho[3], segunda: boolean) => {
    if (t === 'k') return INK;
    const [claro, meio, escuro] = duas && segunda ? listra : base;
    return { c: claro, m: meio, e: escuro }[t];
  };
  const trechos = costas ? trancar(VOLTA_COSTAS, true) : [...trancar(VOLTA_FRENTE, true), ...trancar(PONTA, false)];
  return (
    <View pointerEvents="none" style={{ position: 'absolute', left: 0, top: 0, width, height }}>
      <Svg width={width} height={height} viewBox={`0 0 ${LINU_PIXEL_W} ${LINU_PIXEL_H}`} {...CRISP}>
        {trechos.map(([y, x0, x1, t, segunda], i) => (
          <Rect key={i} x={x0} y={y} width={x1 - x0 + 1} height={1} fill={tinta(t, segunda)} />
        ))}
      </Svg>
    </View>
  );
}
