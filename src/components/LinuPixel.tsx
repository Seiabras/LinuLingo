import { Image, View, type ImageStyle } from 'react-native';
import { slotOf } from '@/data/roupas-linu';
import { LINU_PIXEL_COSTAS, LINU_PIXEL_FRENTE, LINU_PIXEL_FUNDO, LINU_PIXEL_H, LINU_PIXEL_ROUPA, LINU_PIXEL_W } from '@/data/linu-pixel';
import { useLinuOutfit } from '@/services/linu-outfit';
import { useLinuCor } from '@/services/linu-cor';

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
 * `width` é a largura na tela da pose de frente; a altura segue a proporção (52 × 61).
 */
export function LinuPixel({ pose = 'frente', width }: { pose?: LinuPose; width: number }) {
  const look = useLinuOutfit();
  const cor = useLinuCor();
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

  return (
    <View style={{ width, height: h }} accessibilityLabel={costas ? 'Linu de costas' : 'Linu'}>
      {camadas.map((src, i) =>
        src ? (
          <Image
            key={i}
            source={src}
            // de costas, o que é do corpo de frente (roupa, objeto, chapéu) aparece espelhado
            style={[{ position: 'absolute', left: 0, top: 0, width, height: h }, PIXELATED, costas && i > 0 ? ESPELHO : null]}
            resizeMode="stretch"
          />
        ) : null,
      )}
    </View>
  );
}
