import { Pressable, Text, View } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { Screen, Card, Chip, SectionTitle, SpeechBubble } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { LinuAmigo } from '@/components/LinuAmigo';
import { AMIGOS_LINU, GRUPOS_AMIGOS, type AmigoGrupo, type AmigoLinu } from '@/data/amigos-linu';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';

/**
 * /amigos: os amigos do Linu — outros pinguins e vizinhos da fauna antártica —, cada um com o
 * desenho, a espécie de verdade e fatos sobre ela.
 */
export default function FriendsScreen() {
  const dark = useIsDark();
  return (
    <Screen>
      <View className="flex-row items-center gap-3 pt-3">
        <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
          <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
        </Pressable>
        <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">🐧 Amigos do Linu</Text>
      </View>
      <View className="mt-3 flex-row items-end gap-2">
        <Linu mood="falando" size={80} />
        <SpeechBubble className="flex-1">
          <Text className="text-base text-slate-800 dark:text-slate-100">
            Esta é a minha turma da Antártida e das ilhas em volta! A Dedé e o Pipo são meus primos de verdade: somos os três do gênero <Text className="italic">Pygoscelis</Text>.
          </Text>
        </SpeechBubble>
      </View>
      {(Object.keys(GRUPOS_AMIGOS) as AmigoGrupo[]).map((grupo) => (
        <View key={grupo}>
          <SectionTitle>{GRUPOS_AMIGOS[grupo]}</SectionTitle>
          <View className="gap-3">
            {AMIGOS_LINU.filter((a) => a.group === grupo).map((a) => (
              <FriendCard key={a.id} a={a} />
            ))}
          </View>
        </View>
      ))}
      <Text className="mb-6 mt-4 text-xs leading-4 text-slate-500 dark:text-slate-400">
        Os nomes e o jeito de cada um são invenção do LinuLingo; as espécies, as medidas e os fatos são de verdade.
      </Text>
    </Screen>
  );
}

function FriendCard({ a }: { a: AmigoLinu }) {
  return (
    <Card className="gap-2">
      <View className="flex-row items-center gap-3">
        <LinuAmigo id={a.id} size={92} />
        <View className="flex-1 gap-1">
          <Text className="text-xl font-extrabold text-slate-900 dark:text-white">{a.name}</Text>
          <Text className="text-sm font-semibold text-slate-700 dark:text-slate-300">{a.species}</Text>
          <Text className="text-xs italic text-slate-500 dark:text-slate-400">{a.scientific}</Text>
          <Text className="text-xs text-slate-600 dark:text-slate-400">{a.jeito}</Text>
        </View>
      </View>
      <View className="rounded-xl bg-sky-50 px-3 py-2 dark:bg-sky-950/40">
        <Text className="text-sm leading-5 text-slate-800 dark:text-slate-200">«{a.hi}»</Text>
      </View>
      <View className="flex-row flex-wrap gap-1.5">
        <Chip label={`📏 ${a.size}`} tone="blue" />
        <Chip label={`📍 ${a.home}`} tone="slate" />
      </View>
      {a.facts.map((f) => (
        <Text key={f} className="text-sm leading-5 text-slate-600 dark:text-slate-400">
          • {f}
        </Text>
      ))}
    </Card>
  );
}
