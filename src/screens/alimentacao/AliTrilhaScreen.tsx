import { Text, View } from 'react-native';
import { alvoDoTour } from '@/services/tour';
import { Screen } from '@/components/ui';
import { AreaCabecalho } from '@/components/area/AreaCabecalho';
import { AreaTrilha } from '@/components/area/AreaTrilha';
import { Linu } from '@/components/Linu';
import { PROXIMAS_UNIDADES_ALI, UNIDADES_ALI } from '@/data/alimentacao/trilha';

/** A Trilha da Alimentação: as unidades em ordem, no motor dos minicursos, e os ramos que vão chegar. */
export default function AliTrilhaScreen() {
  return (
    <Screen>
      <AreaCabecalho area="alimentacao" titulo="Trilha" subtitulo="O que o alimento faz no corpo, o que acontece na panela e a comida como cultura, em unidades curtas." />
      <AreaTrilha area="alimentacao" unidades={UNIDADES_ALI} proximas={PROXIMAS_UNIDADES_ALI}>
        <View className="mt-3 rounded-2xl border border-lime-300 bg-lime-50 p-3 dark:border-lime-800 dark:bg-lime-950/40">
          <Text className="text-sm text-lime-900 dark:text-lime-100">
            🍽️ Aqui é educação alimentar, não dieta: o app não passa cardápio nem diz quanto você deve comer. Para isso, procure um nutricionista ou a unidade de saúde.
          </Text>
        </View>
        <View ref={alvoDoTour('ali-trilha')} className="mt-3 flex-row items-center gap-3 rounded-2xl bg-lime-50 p-3 dark:bg-lime-950/40">
          <Linu mood="falando" size={56} />
          <Text className="flex-1 text-sm text-lime-900 dark:text-lime-100">
            Eu como peixe cru todo dia, mas aqui tem arroz, feijão, mandioca e a química da panela. Toda lição termina numa conta ou numa receita de verdade.
          </Text>
        </View>
      </AreaTrilha>
    </Screen>
  );
}
