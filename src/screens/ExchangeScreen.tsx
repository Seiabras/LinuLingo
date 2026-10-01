import { useEffect, useState } from 'react';
import { Platform, Pressable, Share, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import { Screen, Button, Card, Chip, SpeechBubble } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { useApp } from '@/services/app-state';
import { siteUrl } from '@/services/site-url';
import { applyReply, decodeExchange, exchangeLink, REACTIONS, type CommunityRow, type ExchangeMessage, type ExchangeRequest, type Reaction } from '@/services/community';
import * as haptics from '@/services/haptics';

/**
 * A troca por link: quem recebe um pedido avalia com um emoji e uma sugestão e devolve outro link;
 * quem abre a resposta vê a avaliação guardada no próprio envio. Tudo vai no «#» do link.
 */
export default function ExchangeScreen() {
  const { db, user } = useApp();
  // o envio vem no «#» do endereço (só existe na web)
  const [msg] = useState<ExchangeMessage | 'invalido'>(() => (Platform.OS === 'web' && typeof window !== 'undefined' ? (decodeExchange(window.location.hash) ?? 'invalido') : 'invalido'));
  const [saved, setSaved] = useState<CommunityRow | null | 'nao-achado'>(null);

  useEffect(() => {
    if (msg !== 'invalido' && msg.t === 'resposta') applyReply(db, msg).then((row) => setSaved(row ?? 'nao-achado'));
  }, [db, msg]);

  return (
    <Screen>
      <Text className="pt-3 text-2xl font-extrabold text-slate-900 dark:text-white">👥 Troca de feedback</Text>
      {msg === 'invalido' ? (
        <Card className="mt-4 gap-2">
          <Text className="text-base text-slate-700 dark:text-slate-300">Este link não abriu: ele pode ter sido cortado ao ser copiado. Peça para mandarem de novo.</Text>
          <Button title="Ir para o LinuLingo" onPress={() => router.replace('/')} />
        </Card>
      ) : msg.t === 'pedido' ? (
        <Review req={msg} defaultName={user?.name && user.name !== 'Aluno' ? user.name : ''} />
      ) : (
        <View className="mt-4 gap-3">
          <View className="flex-row items-end gap-2">
            <Linu mood={saved && saved !== 'nao-achado' ? 'comemorando' : 'pensando'} size={64} />
            <SpeechBubble className="mb-5">
              {saved === null
                ? 'Guardando a avaliação…'
                : saved === 'nao-achado'
                  ? 'Esse envio não está neste aparelho. Abra o link no aparelho (e no navegador) de onde você mandou o pedido.'
                  : `${msg.from} avaliou o seu envio!`}
            </SpeechBubble>
          </View>
          {saved && saved !== 'nao-achado' && (
            <Card className="gap-2">
              <Text className="text-xs font-bold text-slate-500">{saved.prompt}</Text>
              <Text className="text-lg text-slate-900 dark:text-white">{saved.content}</Text>
              <Text className="text-lg font-bold text-slate-900 dark:text-white">
                {REACTIONS[msg.reaction].emoji} {REACTIONS[msg.reaction].label}
              </Text>
              {msg.suggestion && <Text className="text-base text-conquista-dark dark:text-green-300">Sugestão: {msg.suggestion}</Text>}
              <Button title="Ver meus envios" onPress={() => router.replace('/comunidade')} />
            </Card>
          )}
        </View>
      )}
    </Screen>
  );
}

function Review({ req, defaultName }: { req: ExchangeRequest; defaultName: string }) {
  const [reaction, setReaction] = useState<Reaction | null>(null);
  const [suggestion, setSuggestion] = useState('');
  const [name, setName] = useState(defaultName);
  const [done, setDone] = useState<string | null>(null);

  const reply = async () => {
    if (!reaction) return;
    const { url } = exchangeLink(siteUrl(), { v: 1, t: 'resposta', id: req.id, reaction, ...(suggestion.trim() ? { suggestion: suggestion.trim() } : {}), from: name.trim() || 'Um colega' });
    haptics.success();
    const text = `Minha avaliação do seu ${req.kind === 'audio' ? 'áudio' : 'texto'} no LinuLingo:`;
    let how = 'compartilhado';
    const nav = typeof navigator !== 'undefined' ? (navigator as Navigator & { share?: (d: ShareData) => Promise<void> }) : null;
    if (Platform.OS === 'web' && nav?.share) {
      await nav.share({ title: 'LinuLingo', text, url }).catch(async () => {
        how = (await navigator.clipboard.writeText(`${text} ${url}`).then(() => 'copiado', () => 'falhou')) as string;
      });
    } else if (Platform.OS === 'web') {
      how = await navigator.clipboard.writeText(`${text} ${url}`).then(
        () => 'copiado',
        () => 'falhou',
      );
    } else await Share.share({ message: `${text} ${url}` }).catch(() => (how = 'falhou'));
    setDone(how === 'falhou' ? url : how);
  };

  return (
    <View className="mt-4 gap-3">
      <View className="flex-row items-end gap-2">
        <Linu mood="falando" size={64} />
        <SpeechBubble className="mb-5">
          {req.from} está aprendendo {req.langName} e pediu a sua avaliação. Diga se deu para entender e, se quiser, sugira o jeito certo.
        </SpeechBubble>
      </View>
      <Card className="gap-2">
        <Text className="text-xs font-bold text-slate-500">{req.prompt}</Text>
        <Text className="text-lg text-slate-900 dark:text-white">{req.kind === 'audio' ? `🎙️ “${req.content}”` : req.content}</Text>
        {req.audio ? (
          <Button title="▶ Ouvir o áudio" variant="ghost" onPress={() => typeof Audio !== 'undefined' && new Audio(req.audio!).play().catch(() => {})} />
        ) : req.kind === 'audio' ? (
          <Chip label="o áudio não coube no link: avalie a frase" tone="amber" />
        ) : null}
      </Card>
      {done ? (
        <Card className="gap-2">
          <Text className="text-lg font-bold text-slate-900 dark:text-white">✅ Avaliação pronta!</Text>
          <Text className="text-base text-slate-700 dark:text-slate-300">
            {done === 'copiado'
              ? `O link da resposta foi copiado. Cole numa mensagem para ${req.from}.`
              : done === 'compartilhado'
                ? `Mande o link da resposta para ${req.from}.`
                : `Copie este link e mande para ${req.from}: ${done}`}
          </Text>
          <Button title="Conhecer o LinuLingo" variant="ghost" onPress={() => router.replace('/')} />
        </Card>
      ) : (
        <Card className="gap-3">
          <Text className="font-semibold text-slate-700 dark:text-slate-200">Deu para entender?</Text>
          <View className="flex-row gap-2">
            {(Object.keys(REACTIONS) as Reaction[]).map((r) => (
              <Pressable
                key={r}
                accessibilityRole="radio"
                accessibilityState={{ checked: reaction === r }}
                aria-checked={reaction === r}
                accessibilityLabel={REACTIONS[r].label}
                onPress={() => setReaction(r)}
                className={`flex-1 items-center gap-0.5 rounded-2xl border-2 py-2 ${reaction === r ? 'border-conecta bg-conecta-light dark:bg-blue-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
              >
                <Text className="text-2xl">{REACTIONS[r].emoji}</Text>
                <Text className="text-center text-[11px] font-semibold text-slate-600 dark:text-slate-300">{REACTIONS[r].label}</Text>
              </Pressable>
            ))}
          </View>
          <TextInput
            value={suggestion}
            onChangeText={setSuggestion}
            multiline
            placeholder="Sugestão gentil (opcional): como ficaria certo?"
            accessibilityLabel="Sugestão gentil"
            className="min-h-[70px] rounded-xl border-2 border-slate-200 bg-white p-3 text-base text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          />
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Seu nome (aparece para quem pediu)"
            accessibilityLabel="Seu nome"
            className="rounded-xl border-2 border-slate-200 bg-white p-3 text-base text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          />
          <Button title="Mandar a avaliação" variant="success" disabled={!reaction} onPress={reply} />
        </Card>
      )}
    </View>
  );
}
