import { Linking, Pressable, Text, View } from 'react-native';
import { Card, Screen, SectionTitle } from '@/components/ui';
import { AreaCabecalho } from '@/components/area/AreaCabecalho';
import { AJUDA_BRASIL, MARCOS_PSI_BRASIL } from '@/data/psicologia/brasil';
import { PSICANALISE_E_CIENCIA } from '@/data/psicologia/psicanalise';

const SER_PSICANALISTA = PSICANALISE_E_CIENCIA.find((b) => b.titulo.startsWith('Dá para ser psicanalista'))!;

/** A psicologia no Brasil: a história em marcos, a profissão (psicólogo × psicanalista) e onde pedir ajuda. */
export default function PsiBrasilScreen() {
  return (
    <Screen>
      <AreaCabecalho
        area="psicologia"
        titulo="Psicologia no Brasil"
        subtitulo="Como a psicologia chegou e cresceu aqui, quem pode atender e onde pedir ajuda."
      />

      <SectionTitle>A história, ano a ano</SectionTitle>
      <Card className="gap-0">
        {MARCOS_PSI_BRASIL.map((m, i) => (
          <View key={m.titulo} className="flex-row gap-3">
            <View className="w-16 items-center">
              <Text className="text-center text-xs font-extrabold text-violet-700 dark:text-violet-300">{m.ano}</Text>
              {i < MARCOS_PSI_BRASIL.length - 1 && <View className="mt-1 w-0.5 flex-1 bg-violet-200 dark:bg-violet-800" />}
            </View>
            <View className="flex-1 pb-3">
              <Text className="font-extrabold text-slate-900 dark:text-white">{m.titulo}</Text>
              <Text className="text-sm text-slate-700 dark:text-slate-300">{m.sobre}</Text>
            </View>
          </View>
        ))}
      </Card>

      <SectionTitle>Psicólogo e psicanalista</SectionTitle>
      <Card className="gap-1.5">
        <Text className="text-base font-extrabold text-slate-900 dark:text-white">{SER_PSICANALISTA.titulo}</Text>
        {SER_PSICANALISTA.paragrafos.map((t) => (
          <Text key={t} className="text-sm text-slate-700 dark:text-slate-300">
            {t}
          </Text>
        ))}
      </Card>

      <SectionTitle>Onde pedir ajuda</SectionTitle>
      <View className="gap-2">
        {AJUDA_BRASIL.map((a) => (
          <Card key={a.nome} className="gap-0.5">
            <Text className="font-extrabold text-slate-900 dark:text-white">{a.nome}</Text>
            <Text className="text-sm text-slate-700 dark:text-slate-300">{a.como}</Text>
          </Card>
        ))}
        <Pressable
          accessibilityRole="link"
          onPress={() => void Linking.openURL('tel:188')}
          className="self-start rounded-full bg-violet-600 px-4 py-2 active:opacity-80"
        >
          <Text className="font-bold text-white">Ligar para o CVV (188)</Text>
        </Pressable>
      </View>
    </Screen>
  );
}
