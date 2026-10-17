import { Text, View } from 'react-native';
import { Card, Screen, SectionTitle } from '@/components/ui';
import { AreaCabecalho } from '@/components/area/AreaCabecalho';
import { FichaArea, MarcosArea } from '@/components/area/AreaTrilha';
import { DEZ_PASSOS, MARCOS_ALI_BRASIL, REGIOES } from '@/data/alimentacao/consulta';

/** A alimentação no Brasil: o Guia Alimentar, a comida de cada região e a história em marcos. */
export default function AliBrasilScreen() {
  return (
    <Screen>
      <AreaCabecalho area="alimentacao" titulo="Comida no Brasil" subtitulo="O Guia Alimentar, o que se come em cada região e a luta contra a fome." />

      <SectionTitle>Os dez passos do Guia Alimentar</SectionTitle>
      <Card className="gap-1.5">
        {DEZ_PASSOS.map((p, i) => (
          <View key={p} className="flex-row gap-2">
            <Text className="w-6 text-right font-extrabold text-lime-700 dark:text-lime-400">{i + 1}.</Text>
            <Text className="flex-1 text-sm text-slate-700 dark:text-slate-300">{p}</Text>
          </View>
        ))}
        <Text className="mt-1 text-xs italic text-slate-600 dark:text-slate-400">Ministério da Saúde, “Guia Alimentar para a População Brasileira”, 2014.</Text>
      </Card>

      <SectionTitle>A comida de cada região</SectionTitle>
      <View className="gap-2">
        {REGIOES.map((r) => (
          <FichaArea key={r.nome} titulo={r.nome} linha={r.linha} paragrafos={[r.sobre]} />
        ))}
      </View>

      <SectionTitle>A história, ano a ano</SectionTitle>
      <MarcosArea area="alimentacao" marcos={MARCOS_ALI_BRASIL} />
    </Screen>
  );
}
