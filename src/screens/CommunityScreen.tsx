import { useCallback, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { useFocusEffect } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { Screen, Button, Card, Chip, SectionTitle } from '@/components/ui';
import { useApp } from '@/services/app-state';
import { awardXp, correctPeer, listCommunity } from '@/database/queries';
import { XP } from '@/services/progress';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';
import type { CommunityFeedback } from '@/types';

type Item = CommunityFeedback & { reference: string | null };

/** Comunidade (Busuu): corrigir textos de outros alunos (+20 XP) e acompanhar os próprios envios. */
export default function CommunityScreen() {
  const { db, pack, refresh } = useApp();
  const dark = useIsDark();
  const [items, setItems] = useState<Item[]>([]);

  const load = useCallback(async () => setItems(await listCommunity(db, pack.code)), [db, pack.code]);
  useFocusEffect(
    useCallback(() => {
      load();
    }, [load]),
  );

  const peers = items.filter((i) => !i.is_mine);
  const mine = items.filter((i) => i.is_mine);

  return (
    <Screen>
      <View className="flex-row items-center gap-3 pt-3">
        <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
          <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
        </Pressable>
        <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">👥 Comunidade</Text>
      </View>

      <SectionTitle>Corrija outros alunos · +{XP.communityCorrection} XP cada</SectionTitle>
      <View className="gap-3">
        {peers.map((p) => (
          <PeerCard
            key={p.id}
            item={p}
            specialChars={pack.specialChars}
            onCorrect={async (text) => {
              await correctPeer(db, p.id, text);
              await awardXp(db, XP.communityCorrection, 'comunidade');
              refresh();
              load();
            }}
          />
        ))}
      </View>

      <SectionTitle>Seus envios</SectionTitle>
      {mine.length === 0 ? (
        <Text className="text-slate-500 dark:text-slate-400">Você ainda não enviou nada. A etapa 5 de cada lição permite enviar um texto.</Text>
      ) : (
        <View className="gap-3">
          {mine.map((m) => (
            <Card key={m.id} className="gap-2">
              <Text className="text-xs font-bold text-slate-500">{m.prompt}</Text>
              <Text className="text-lg text-slate-900 dark:text-white">{m.content}</Text>
              <Chip label="⏳ aguardando nativos" tone="amber" />
            </Card>
          ))}
          <Text className="text-xs text-slate-500 dark:text-slate-400">
            Os envios ficam guardados no aparelho. Quando o servidor da comunidade for ligado, eles seguem para correção de falantes nativos.
          </Text>
        </View>
      )}
    </Screen>
  );
}

function PeerCard({ item, specialChars, onCorrect }: { item: Item; specialChars: string[]; onCorrect: (text: string) => Promise<void> }) {
  const [text, setText] = useState(item.content);
  const [saving, setSaving] = useState(false);
  const corrected = item.status === 'corrigido';
  return (
    <Card className="gap-2">
      <View className="flex-row items-center justify-between">
        <Text className="font-bold text-slate-800 dark:text-slate-100">{item.author_name}</Text>
        {corrected && <Chip label="✓ corrigido" tone="green" />}
      </View>
      <Text className="text-xs text-slate-500 dark:text-slate-400">Tarefa: {item.prompt}</Text>
      <Text className="rounded-xl bg-slate-100 p-3 text-lg text-slate-900 dark:bg-slate-800 dark:text-white">{item.content}</Text>

      {!corrected ? (
        <>
          <Text className="text-sm font-semibold text-slate-600 dark:text-slate-300">Reescreva corrigindo os erros:</Text>
          <TextInput
            value={text}
            onChangeText={setText}
            multiline
            autoCapitalize="none"
            className="min-h-[70px] rounded-xl border-2 border-slate-200 bg-white p-3 text-base text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          />
          <View className="flex-row flex-wrap gap-2">
            {specialChars.map((ch) => (
              <Pressable key={ch} onPress={() => setText((t) => t + ch)} className="h-9 w-9 items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-800">
                <Text className="font-bold text-slate-800 dark:text-slate-100">{ch}</Text>
              </Pressable>
            ))}
          </View>
          <Button
            title="Enviar correção"
            variant="success"
            loading={saving}
            disabled={saving || text.trim() === item.content.trim()}
            onPress={async () => {
              setSaving(true);
              await onCorrect(text.trim());
              setSaving(false);
            }}
          />
        </>
      ) : (
        <View className="gap-1">
          <Text className="text-sm font-semibold text-slate-600 dark:text-slate-300">Sua correção:</Text>
          <Text className="text-base text-conecta-dark dark:text-blue-300">{item.correction}</Text>
          {item.reference && (
            <>
              <Text className="mt-1 text-sm font-semibold text-slate-600 dark:text-slate-300">Correção de referência:</Text>
              <Text className="text-base font-semibold text-conquista-dark dark:text-green-300">{item.reference}</Text>
            </>
          )}
        </View>
      )}
    </Card>
  );
}
