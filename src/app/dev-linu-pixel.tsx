import { ScrollView, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Linu, type LinuCamada } from '@/components/Linu';
import { CORES_LINU } from '@/data/cores-linu';
import { ROUPAS_LINU, slotOf, type OutfitSlot } from '@/data/roupas-linu';

/**
 * Página só de desenvolvimento: cada camada do Linu vetorial sozinha, num quadro de 120 × 140 com fundo
 * liso (`?fundo=000000` ou `ffffff`: o script fotografa nos dois e calcula a transparência), para
 * `scripts/linu-pixel.mjs` transformar em pixel art
 * (`assets/pixel/linu/`). Fora do modo de desenvolvimento, não mostra nada.
 */
const CAMADA_DO_LUGAR: Record<OutfitSlot, LinuCamada> = { corpo: 'roupa', mao: 'mao', rosto: 'rosto', cabeca: 'chapeu' };

function Quadro({ id, fundo, children }: { id: string; fundo: string; children: React.ReactNode }) {
  return (
    <View testID={id} style={{ width: 120, height: 140, backgroundColor: fundo }}>
      {children}
    </View>
  );
}

export default function DevLinuPixel() {
  const { fundo = 'ffffff' } = useLocalSearchParams<{ fundo?: string }>();
  const bg = `#${fundo}`;
  if (!__DEV__) return null;
  return (
    <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', gap: 4, padding: 4 }} style={{ backgroundColor: bg }}>
      {CORES_LINU.map((c) => (
        <Quadro key={`fundo-${c.id}`} id={`camada-fundo-${c.id}`} fundo={bg}>
          <Linu size={120} animate={false} outfit={null} cor={c.id} camadas={['fundo']} />
        </Quadro>
      ))}
      {CORES_LINU.map((c) => (
        <Quadro key={`frente-${c.id}`} id={`camada-frente-${c.id}`} fundo={bg}>
          <Linu size={120} animate={false} outfit={null} cor={c.id} camadas={['frente']} />
        </Quadro>
      ))}
      {ROUPAS_LINU.map((o) => (
        <Quadro key={o.id} id={`camada-roupa-${o.id}`} fundo={bg}>
          <Linu size={120} animate={false} outfit={o.id} cor={null} camadas={[CAMADA_DO_LUGAR[slotOf(o.id)]]} />
        </Quadro>
      ))}
    </ScrollView>
  );
}
