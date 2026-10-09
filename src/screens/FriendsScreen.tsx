import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { ArrowLeft, Camera } from 'lucide-react-native';
import { Screen, Chip, SectionTitle, SpeechBubble } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { LinuAmigo } from '@/components/LinuAmigo';
import { RealPhotoModal } from '@/components/RealPhotoModal';
import { FieldNotebookBackground } from '@/components/FieldNotebookBackground';
import { FieldGuideCard } from '@/components/FieldGuideCard';
import { AMIGOS_LINU, GRUPOS_AMIGOS, type AmigoGrupo, type AmigoLinu } from '@/data/amigos-linu';
import { FOTOS_AMIGOS } from '@/data/fotos-amigos';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';

/**
 * /amigos: os amigos do Linu — outros pinguins e vizinhos da fauna antártica —, cada um com o
 * desenho, a espécie de verdade e fatos sobre ela. Visual de caderno de campo de expedição: fundo de
 * gelo com linhas de contorno e cartões de guia de campo, com a etiqueta do grupo (pinguins, vizinhos
 * do gelo…) em vez de bichos soltos num fundo liso.
 */
export default function FriendsScreen() {
  const dark = useIsDark();
  return (
    <Screen background={<FieldNotebookBackground variant="gelo" />}>
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
      <Text className="mb-6 mt-4 text-xs leading-4 text-slate-600 dark:text-slate-400">
        Os nomes e o jeito de cada um são invenção do LinuLingo; as espécies, as medidas e os fatos são de verdade.
      </Text>
    </Screen>
  );
}

function FriendCard({ a }: { a: AmigoLinu }) {
  const [showPhoto, setShowPhoto] = useState(false);
  const foto = FOTOS_AMIGOS[a.id];
  return (
    <FieldGuideCard label={a.species} className="gap-2">
      <View className="flex-row items-center gap-3">
        <LinuAmigo id={a.id} size={92} />
        <View className="flex-1 gap-1">
          <Text className="text-xl font-extrabold text-slate-900 dark:text-white">{a.name}</Text>
          <Text className="text-xs italic text-slate-600 dark:text-slate-400">{a.scientific}</Text>
          <Text className="text-xs text-slate-600 dark:text-slate-400">{a.jeito}</Text>
        </View>
        {foto && (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={`Ver foto de verdade: ${a.species}`}
            onPress={() => setShowPhoto(true)}
            className="items-center gap-0.5 rounded-xl bg-sky-100 px-2 py-1.5 dark:bg-sky-950/60"
          >
            <Camera size={18} color="#0284C7" />
            <Text className="text-[10px] font-semibold text-sky-700 dark:text-sky-300">foto</Text>
          </Pressable>
        )}
      </View>
      <RealPhotoModal visible={showPhoto} onClose={() => setShowPhoto(false)} title={a.species} subtitle={a.scientific} photo={foto ?? null} />
      <View className="rounded-xl bg-sky-50 px-3 py-2 dark:bg-sky-950/40">
        <Text className="text-sm leading-5 text-slate-800 dark:text-slate-200">“{a.hi}”</Text>
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
    </FieldGuideCard>
  );
}
