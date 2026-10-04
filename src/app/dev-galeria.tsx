import { ScrollView, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Linu } from '@/components/Linu';
import { ROUPAS_LINU, slotOf } from '@/data/roupas-linu';
import { NIVEIS_CEFR } from '@/services/cachecol';

/**
 * Página só de desenvolvimento: o Linu vetorial com cada roupinha da loja e cada cachecol, para
 * conferir o desenho de tudo de uma vez (`?parte=roupas|cachecol|combos`). Fora do modo de
 * desenvolvimento, não mostra nada.
 */
export default function DevGaleria() {
  const { parte = 'roupas', slot } = useLocalSearchParams<{ parte?: string; slot?: string }>();
  if (!__DEV__) return null;
  const roupas = ROUPAS_LINU.filter((o) => !slot || slotOf(o.id) === slot);
  return (
    <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6, padding: 6 }} style={{ backgroundColor: '#e0f2fe' }}>
      {parte === 'cachecol' &&
        NIVEIS_CEFR.map((n) => (
          <View key={n} testID={`cachecol-${n}`} style={{ width: 130, alignItems: 'center', backgroundColor: '#fff', borderRadius: 12 }}>
            <Linu size={120} animate={false} outfit={null} cachecol={n} />
            <Text style={{ fontSize: 11 }}>{n}</Text>
          </View>
        ))}
      {parte === 'roupas' &&
        roupas.map((o) => (
          <View key={o.id} testID={`roupa-${o.id}`} style={{ width: 130, alignItems: 'center', backgroundColor: '#fff', borderRadius: 12 }}>
            <Linu size={120} animate={false} outfit={o.id} cachecol={null} />
            <Text style={{ fontSize: 10 }} numberOfLines={1}>
              {o.id}
            </Text>
          </View>
        ))}
      {parte === 'combos' &&
        roupas
          .filter((o) => slotOf(o.id) === 'corpo')
          .map((o, i) => (
            <View key={o.id} style={{ width: 130, alignItems: 'center', backgroundColor: '#fff', borderRadius: 12 }}>
              <Linu size={120} animate={false} outfit={[o.id]} cachecol={NIVEIS_CEFR[i % 6]} />
              <Text style={{ fontSize: 10 }} numberOfLines={1}>
                {o.id} + {NIVEIS_CEFR[i % 6]}
              </Text>
            </View>
          ))}
    </ScrollView>
  );
}
