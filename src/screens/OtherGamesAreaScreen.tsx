import { Pressable, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { Card, Screen, SpeechBubble } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { IconeOutroJogo } from '@/components/outros-jogos/IconeOutroJogo';
import { REGIOES } from '@/data/jogos-conhecimento';
import { AREAS_JOGO, jogosDaArea, type AreaJogo, type OutroJogo } from '@/data/outros-jogos';
import * as haptics from '@/services/haptics';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';
import { alvoDoTour } from '@/services/tour';

const FALA: Record<AreaJogo, string> = {
  cartas: 'Baralhos do mundo, com a história de verdade. Jogue comigo!',
  azar: 'Aqui as fichas são de mentira: o jogo é entender as chances.',
  brincadeiras: 'Brincadeiras de rua e de infância, de vários países.',
  esportes: 'Esportes com história e regras, num jeito simples de jogar.',
  videogames: 'Os videogames que fizeram história, num jeito simples de jogar.',
};

/** O cartão de um jogo da área: desenho, nome, de onde vem, a história curta e o que ele tem. */
function CartaoOutroJogo({ g }: { g: OutroJogo }) {
  const regiao = REGIOES.find((r) => r.id === g.regiao)?.nome;
  const pronto = g.status === 'pronto';
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Abrir ${g.name}`}
      disabled={!pronto}
      onPress={() => {
        haptics.tapLight();
        router.push(`/jogos/${g.area}/${g.id}`);
      }}
      className={`flex-row gap-3 rounded-2xl bg-white p-3 active:bg-slate-50 dark:bg-slate-900 dark:active:bg-slate-800 ${pronto ? '' : 'opacity-60'}`}
      style={{ shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 6, shadowOffset: { width: 0, height: 2 }, elevation: 2 }}
    >
      <IconeOutroJogo id={g.id} emoji={g.emoji} tamanho={64} />
      <View className="flex-1 gap-1">
        <Text className="text-base font-extrabold text-slate-900 dark:text-white">{g.name}</Text>
        <Text className="text-xs text-slate-600 dark:text-slate-400">{[regiao, g.povo, g.year].filter(Boolean).join(' · ')}</Text>
        {!!g.about && (
          <Text className="text-xs leading-4 text-slate-700 dark:text-slate-300" numberOfLines={3}>
            {g.about}
          </Text>
        )}
        <View className="flex-row flex-wrap gap-1">
          {g.linu && <Text className="rounded-full bg-sky-100 px-2 py-0.5 text-[10px] font-bold text-sky-800 dark:bg-sky-950 dark:text-sky-300">contra o Linu</Text>}
          {g.playable && (
            <Text className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">jogável</Text>
          )}
          {!!g.rules && (
            <Text className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-900 dark:bg-amber-950 dark:text-amber-300">
              história, regras e {g.variants?.length ?? 0} variantes
            </Text>
          )}
          {!pronto && <Text className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-300">em breve</Text>}
        </View>
      </View>
    </Pressable>
  );
}

/** Uma área de jogos (Perfil → Jogos → Cartas, Azar…): a lista dos jogos dela. */
export default function OtherGamesAreaScreen() {
  const { area } = useLocalSearchParams<{ area: string }>();
  const dark = useIsDark();
  const info = AREAS_JOGO.find((a) => a.id === area);
  if (!info) {
    return (
      <Screen>
        <Text className="pt-6 text-base text-slate-700 dark:text-slate-200">Área de jogos não encontrada.</Text>
      </Screen>
    );
  }
  const jogos = jogosDaArea(info.id);
  return (
    <Screen scroll>
      <View className="gap-3 pt-3">
        <View className="flex-row items-center gap-3">
          <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
            <ArrowLeft size={24} color={dark ? '#E2E8F0' : '#334155'} />
          </Pressable>
          <Text className="text-3xl">{info.emoji}</Text>
          <View className="flex-1">
            <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">{info.nome}</Text>
            <Text className="text-xs font-semibold text-slate-600 dark:text-slate-400">{info.descricao}</Text>
          </View>
        </View>
        <View className="flex-row items-end gap-2">
          <Linu mood="feliz" size={56} animate={false} />
          <SpeechBubble className="mb-4">{FALA[info.id]}</SpeechBubble>
        </View>
        <View ref={alvoDoTour('jogos-area-lista')} className="gap-3">
          {jogos.map((g) => (
            <CartaoOutroJogo key={g.id} g={g} />
          ))}
          {jogos.length === 0 && (
            <Card>
              <Text className="text-sm text-slate-600 dark:text-slate-400">Os jogos desta área estão chegando.</Text>
            </Card>
          )}
        </View>
      </View>
    </Screen>
  );
}
