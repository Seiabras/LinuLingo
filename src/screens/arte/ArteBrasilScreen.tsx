import { Text, View } from 'react-native';
import { Card, Screen, SectionTitle } from '@/components/ui';
import { AreaCabecalho } from '@/components/area/AreaCabecalho';
import { MarcosArea } from '@/components/area/AreaTrilha';
import { ARTISTAS_BRASIL, MARCOS_ARTE_BRASIL } from '@/data/arte/consulta';

/** A arte no Brasil: a história em marcos e as artistas e os artistas. */
export default function ArteBrasilScreen() {
  return (
    <Screen>
      <AreaCabecalho area="arte" titulo="Arte no Brasil" subtitulo="Das pinturas nas rochas do Piauí à arte contemporânea." />

      <SectionTitle>A história, ano a ano</SectionTitle>
      <MarcosArea area="arte" marcos={MARCOS_ARTE_BRASIL} />

      <SectionTitle>Artistas</SectionTitle>
      <View className="gap-2">
        {ARTISTAS_BRASIL.map((a) => (
          <Card key={a.nome} className="gap-0.5">
            <Text className="text-base font-extrabold text-slate-900 dark:text-white">{a.nome}</Text>
            <Text className="text-xs font-bold text-fuchsia-700 dark:text-fuchsia-400">{a.anos}</Text>
            <Text className="text-sm text-slate-700 dark:text-slate-300">{a.fez}</Text>
          </Card>
        ))}
      </View>
    </Screen>
  );
}
