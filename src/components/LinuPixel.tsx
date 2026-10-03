import { Image, View, type ImageStyle } from 'react-native';
import Svg, { Rect, type SvgProps } from 'react-native-svg';
import { slotOf } from '@/data/roupas-linu';
import { LINU_PIXEL_COSTAS, LINU_PIXEL_FRENTE, LINU_PIXEL_FUNDO, LINU_PIXEL_H, LINU_PIXEL_ROUPA, LINU_PIXEL_W } from '@/data/linu-pixel';
import { useLinuOutfit } from '@/services/linu-outfit';
import { useLinuCor } from '@/services/linu-cor';
import { CORES_CACHECOL, useCachecol } from '@/services/cachecol';
import type { CefrLevel } from '@/types';

export type LinuPose = 'frente' | 'costas' | 'esquerda' | 'direita';

const LADO = {
  esquerda: require('../../assets/pixel/linu-sprite-esquerda.png'),
  direita: require('../../assets/pixel/linu-sprite-direita.png'),
};

// na web o navegador amplia sem borrar os pixels
const PIXELATED = { imageRendering: 'pixelated' } as unknown as ImageStyle;
const ESPELHO: ImageStyle = { transform: [{ scaleX: -1 }] };

/**
 * O Linu em pixel art, com a cor e as roupinhas escolhidas na loja. Três poses:
 * - de frente (parado): as camadas geradas do desenho vetorial (`scripts/linu-pixel.py`), empilhadas
 *   na mesma ordem do Linu.tsx — corpo, roupa, objeto na mão, olhos e bico, pintura de rosto, chapéu;
 * - de costas (olhando para um objeto): o corpo de costas, com o chapéu, a roupa e o objeto espelhados;
 * - de lado (andando): o pinguim do PixelLab, sem as roupinhas.
 * O cachecol do nível (src/services/cachecol.ts) é desenhado por código, em pixels, logo acima do
 * corpo e por baixo da roupa do corpo — de frente com a ponta caindo, de costas só a volta.
 * `width` é a largura na tela da pose de frente; a altura segue a proporção (52 × 61).
 */
export function LinuPixel({ pose = 'frente', width }: { pose?: LinuPose; width: number }) {
  const look = useLinuOutfit();
  const cor = useLinuCor();
  const cachecol = useCachecol();
  const h = (width * LINU_PIXEL_H) / LINU_PIXEL_W;
  const peca = (slot: string) => {
    const id = look.find((o) => slotOf(o) === slot);
    return id ? LINU_PIXEL_ROUPA[id] : undefined;
  };

  if (pose === 'esquerda' || pose === 'direita') {
    // o pinguim de lado tem 44 × 60: mesma altura, centrado na largura da pose de frente
    const w = (h * 44) / 60;
    return (
      <View style={{ width, height: h, alignItems: 'center' }} accessibilityLabel="Linu andando">
        <Image source={LADO[pose]} style={[{ width: w, height: h }, PIXELATED]} resizeMode="stretch" />
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
      {cachecol && <CachecolPixel cefr={cachecol.cefr} costas={costas} width={width} height={h} />}
      {camadas.slice(1).map((src, i) => img(src, i + 1))}
    </View>
  );
}

// `shapeRendering` existe no SVG (e no react-native-svg), mas não no tipo SvgProps (como em PixelIcon)
const CRISP = { shapeRendering: 'crispEdges' } as unknown as SvgProps;

/**
 * O cachecol em pixels, na grade do Linu (52 × 61), trecho por trecho: [linha, de x, até x, tinta].
 * A volta do pescoço fica nas linhas 37 a 42, logo abaixo da barbicha, na largura do corpo em cada
 * linha, e desce 1 pixel no meio (x 12 a 36) para parecer enrolada; de frente, a ponta cai à esquerda
 * de quem olha (x 13 a 18), como no Linu vetorial. Tintas: k contorno, c claro, m meio, e escuro.
 */
type Trecho = [y: number, x0: number, x1: number, tinta: 'k' | 'c' | 'm' | 'e'];
const FAIXA: Trecho[3][] = ['k', 'c', 'm', 'e', 'k'];
// cada linha da faixa: dos lados na linha y, no meio (que desce) na linha y + 1
const VOLTA_FRENTE: Trecho[] = FAIXA.flatMap((t, i): Trecho[] => [
  [37 + i, i === 0 ? 8 : i < 3 ? 7 : 6, 11, t],
  [38 + i, 12, 36, t],
  [37 + i, 37, 42, t],
]);
const PONTA: Trecho[] = [
  [42, 14, 17, 'm'],
  ...[43, 44, 46, 47].flatMap((y): Trecho[] => [
    [y, 13, 13, 'k'],
    [y, 14, 14, 'c'],
    [y, 15, 16, 'm'],
    [y, 17, 17, 'e'],
    [y, 18, 18, 'k'],
  ]),
  // a listra
  [45, 13, 13, 'k'],
  [45, 14, 17, 'e'],
  [45, 18, 18, 'k'],
  [48, 13, 18, 'k'],
  // a franja
  [49, 14, 14, 'm'],
  [49, 16, 17, 'm'],
  [50, 14, 14, 'e'],
  [50, 17, 17, 'e'],
];
const VOLTA_COSTAS: Trecho[] = [
  [37, 9, 43, 'k'],
  [38, 9, 44, 'c'],
  [39, 9, 44, 'm'],
  [40, 9, 45, 'e'],
  [41, 9, 45, 'k'],
];
const FRENTE = [...VOLTA_FRENTE, ...PONTA];
const INK = '#1F2A44';

function CachecolPixel({ cefr, costas, width, height }: { cefr: CefrLevel; costas: boolean; width: number; height: number }) {
  const [claro, meio, escuro] = CORES_CACHECOL[cefr].cores;
  const tinta = { k: INK, c: claro, m: meio, e: escuro };
  return (
    <View pointerEvents="none" style={{ position: 'absolute', left: 0, top: 0, width, height }}>
      <Svg width={width} height={height} viewBox={`0 0 ${LINU_PIXEL_W} ${LINU_PIXEL_H}`} {...CRISP}>
        {(costas ? VOLTA_COSTAS : FRENTE).map(([y, x0, x1, t], i) => (
          <Rect key={i} x={x0} y={y} width={x1 - x0 + 1} height={1} fill={tinta[t]} />
        ))}
      </Svg>
    </View>
  );
}
