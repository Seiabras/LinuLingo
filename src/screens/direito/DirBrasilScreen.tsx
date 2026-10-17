import { Linking, Pressable, Text, View } from 'react-native';
import { Card, Screen, SectionTitle } from '@/components/ui';
import { AreaCabecalho } from '@/components/area/AreaCabecalho';
import { FichaArea, MarcosArea } from '@/components/area/AreaTrilha';
import { MARCOS_DIREITO_BRASIL, PESSOAS_DIREITO_BRASIL } from '@/data/direito/consulta';

const AJUDA = [
  { nome: 'Defensoria Pública', como: 'Orientação e defesa de graça para quem não pode pagar advogado. Tem em todos os estados e na União.' },
  { nome: 'Juizado Especial Cível', como: 'Causas de até 40 salários mínimos; até 20, sem advogado. Leve documentos, provas e o endereço da outra parte.' },
  { nome: 'Procon e consumidor.gov.br', como: 'Reclamações de consumo. No consumidor.gov.br, a empresa responde pela internet, em até 10 dias.' },
  { nome: 'Disque 100', como: 'Denúncias de violações de direitos humanos (crianças, pessoas idosas, pessoas com deficiência e outras). De graça, 24 horas.' },
  { nome: 'Ligue 180', como: 'Central de Atendimento à Mulher, para violência contra a mulher. De graça, 24 horas.' },
];

/** O direito no Brasil: as Constituições e as leis em marcos, as pessoas e onde buscar ajuda. */
export default function DirBrasilScreen() {
  return (
    <Screen>
      <AreaCabecalho area="direito" titulo="Direito no Brasil" subtitulo="Sete Constituições, as leis que mudaram a vida das pessoas e quem as fez." />

      <SectionTitle>A história, ano a ano</SectionTitle>
      <MarcosArea area="direito" marcos={MARCOS_DIREITO_BRASIL} />

      <SectionTitle>Pessoas</SectionTitle>
      <View className="gap-2">
        {PESSOAS_DIREITO_BRASIL.map((p) => (
          <Card key={p.nome} className="gap-0.5">
            <Text className="text-base font-extrabold text-slate-900 dark:text-white">{p.nome}</Text>
            {p.anos ? <Text className="text-xs font-bold text-amber-700 dark:text-amber-400">{p.anos}</Text> : null}
            <Text className="text-sm text-slate-700 dark:text-slate-300">{p.fez}</Text>
          </Card>
        ))}
      </View>

      <SectionTitle>Onde buscar ajuda</SectionTitle>
      <View className="gap-2">
        {AJUDA.map((a) => (
          <FichaArea key={a.nome} titulo={a.nome} paragrafos={[a.como]} />
        ))}
        <View className="flex-row flex-wrap gap-2">
          <Pressable accessibilityRole="link" onPress={() => void Linking.openURL('tel:100')} className="rounded-full bg-amber-600 px-4 py-2 active:opacity-80">
            <Text className="font-bold text-white">Ligar para o Disque 100</Text>
          </Pressable>
          <Pressable accessibilityRole="link" onPress={() => void Linking.openURL('tel:180')} className="rounded-full bg-amber-600 px-4 py-2 active:opacity-80">
            <Text className="font-bold text-white">Ligar para o 180</Text>
          </Pressable>
          <Pressable accessibilityRole="link" onPress={() => void Linking.openURL('https://www.consumidor.gov.br/')} className="rounded-full border border-amber-600 px-4 py-2 active:opacity-80">
            <Text className="font-bold text-amber-700 dark:text-amber-300">consumidor.gov.br</Text>
          </Pressable>
        </View>
      </View>
    </Screen>
  );
}
