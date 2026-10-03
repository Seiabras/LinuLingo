import { useCallback, useState } from 'react';
import { Platform, Pressable, Text, TextInput, View } from 'react-native';
import { router, useFocusEffect } from 'expo-router';
import { Screen, Button, Card, Chip, SectionTitle, LetterPad, SpeechBubble } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { FieldNotebookBackground } from '@/components/FieldNotebookBackground';
import { useApp } from '@/services/app-state';
import { targetInputStyle, targetTextStyle } from '@/services/direction';
import { awardXp, listJournal } from '@/database/queries';
import { localDay, XP } from '@/services/progress';
import { nomeIdioma } from '@/services/idioma-nome';
import { siteUrl } from '@/services/site-url';
import { sendLink } from '@/services/share';
import { useClipRecorder } from '@/services/recorder';
import { AUDIO_MAX_MS, exchangeLink, listCommunityRows, ratePeer, REACTIONS, submitMine, type CommunityRow, type Reaction } from '@/services/community';
import * as haptics from '@/services/haptics';

/** Toca um áudio guardado (data URI) no navegador. */
function playDataUri(uri: string) {
  if (Platform.OS === 'web' && typeof Audio !== 'undefined') new Audio(uri).play().catch(() => {});
}

/**
 * Comunidade leve (sem servidor): avalie textos de colegas com 3 emojis e uma sugestão gentil, e peça
 * avaliação dos seus — as 3 frases do diário de hoje ou 10 segundos de áudio — mandando um link a
 * quem quiser. A resposta volta por outro link e fica guardada no seu envio.
 */
export default function CommunityScreen() {
  const { db, pack, user, refresh } = useApp();
  const [items, setItems] = useState<CommunityRow[]>([]);
  const [journalToday, setJournalToday] = useState<string | null>(null);

  const load = useCallback(async () => {
    setItems(await listCommunityRows(db, pack.code));
    const today = (await listJournal(db, pack.code)).find((j) => j.day === localDay());
    setJournalToday(today ? (today.corrected_input ?? today.raw_user_input) : null);
  }, [db, pack.code]);
  useFocusEffect(
    useCallback(() => {
      load();
    }, [load]),
  );

  const peers = items.filter((i) => !i.is_mine);
  const mine = items.filter((i) => i.is_mine);
  const journalSent = !!journalToday && mine.some((m) => m.kind !== 'audio' && m.content === journalToday);

  return (
    <Screen background={<FieldNotebookBackground variant="pergaminho" />}>
      <Text className="pt-3 text-2xl font-extrabold text-slate-900 dark:text-white">👥 Comunidade</Text>

      <View className="mt-4 flex-row items-end gap-2">
        <Linu mood="falando" size={64} />
        <SpeechBubble className="mb-5">
          Troca de feedback entre alunos: você avalia colegas com 3 emojis e uma sugestão gentil, e pede avaliação mandando um link para quem quiser. Sem servidor: o envio vai dentro do link.
        </SpeechBubble>
      </View>

      <SectionTitle>Avalie colegas · +{XP.communityCorrection} XP cada</SectionTitle>
      <View className="gap-3">
        {peers.map((p) => (
          <PeerCard
            key={p.id}
            item={p}
            specialChars={pack.specialChars}
            onRate={async (reaction, suggestion) => {
              await ratePeer(db, p.id, reaction, suggestion);
              await awardXp(db, XP.communityCorrection, 'comunidade');
              haptics.success();
              refresh();
              load();
            }}
          />
        ))}
      </View>

      <SectionTitle>Peça uma avaliação</SectionTitle>
      <Card className="gap-3">
        <Text className="font-bold text-slate-800 dark:text-slate-100">📓 As 3 frases do diário de hoje</Text>
        {journalToday ? (
          <>
            <Text style={targetTextStyle(pack)} className="rounded-xl bg-slate-100 p-3 text-base text-slate-900 dark:bg-slate-800 dark:text-white">{journalToday}</Text>
            <Button
              title={journalSent ? '✓ Já está nos seus envios' : 'Pôr nos meus envios'}
              variant="ghost"
              disabled={journalSent}
              onPress={async () => {
                await submitMine(db, { language: pack.code, prompt: 'Diário de hoje (3 frases)', content: journalToday, kind: 'texto' });
                load();
              }}
            />
          </>
        ) : (
          <Button title="Escrever no diário" variant="ghost" onPress={() => router.push('/diario')} />
        )}
      </Card>
      <AudioSubmit
        phrase={pack.shadowing[new Date().getDate() % pack.shadowing.length]?.[0] ?? pack.sampleSentence}
        onSaved={async (content, audio) => {
          await submitMine(db, { language: pack.code, prompt: 'Leia em voz alta (10 segundos)', content, kind: 'audio', audio });
          load();
        }}
      />

      <SectionTitle>Seus envios</SectionTitle>
      {mine.length === 0 ? (
        <Text className="text-slate-500 dark:text-slate-400">Você ainda não enviou nada. Mande as frases do diário ou grave 10 segundos aqui em cima; a etapa 5 de cada lição também envia um texto.</Text>
      ) : (
        <View className="gap-3">
          {mine.map((m) => (
            <MineCard key={m.id} item={m} langCode={pack.code} langName={nomeIdioma(pack.name)} from={user?.name ?? 'Um colega'} />
          ))}
        </View>
      )}
    </Screen>
  );
}

function ReactionPicker({ value, onChange }: { value: Reaction | null; onChange: (r: Reaction) => void }) {
  return (
    <View className="flex-row gap-2" accessibilityRole="radiogroup">
      {(Object.keys(REACTIONS) as Reaction[]).map((r) => {
        const on = value === r;
        return (
          <Pressable
            key={r}
            accessibilityRole="radio"
            accessibilityState={{ checked: on }}
            aria-checked={on}
            accessibilityLabel={REACTIONS[r].label}
            onPress={() => onChange(r)}
            className={`flex-1 items-center gap-0.5 rounded-2xl border-2 py-2 ${on ? 'border-conecta bg-conecta-light dark:bg-blue-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
          >
            <Text className="text-2xl">{REACTIONS[r].emoji}</Text>
            <Text className="text-center text-[11px] font-semibold text-slate-600 dark:text-slate-300">{REACTIONS[r].label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

function PeerCard({ item, specialChars, onRate }: { item: CommunityRow; specialChars: string[]; onRate: (r: Reaction, suggestion: string | null) => Promise<void> }) {
  const { pack } = useApp();
  const [reaction, setReaction] = useState<Reaction | null>(null);
  const [text, setText] = useState(item.content);
  const [saving, setSaving] = useState(false);
  const rated = item.status === 'corrigido';
  return (
    <Card className="gap-2">
      <View className="flex-row items-center justify-between">
        <Text className="font-bold text-slate-800 dark:text-slate-100">{item.author_name}</Text>
        {rated && <Chip label={item.reaction ? `${REACTIONS[item.reaction].emoji} avaliado` : '✓ corrigido'} tone="green" />}
      </View>
      <Text className="text-xs text-slate-500 dark:text-slate-400">Tarefa: {item.prompt}</Text>
      <Text style={targetTextStyle(pack)} className="rounded-xl bg-slate-100 p-3 text-lg text-slate-900 dark:bg-slate-800 dark:text-white">{item.content}</Text>

      {!rated ? (
        <>
          <Text className="text-sm font-semibold text-slate-600 dark:text-slate-300">Deu para entender?</Text>
          <ReactionPicker value={reaction} onChange={setReaction} />
          <Text className="text-sm font-semibold text-slate-600 dark:text-slate-300">Sugestão gentil (opcional): reescreva do jeito certo</Text>
          <TextInput
            value={text}
            onChangeText={setText}
            multiline
            autoCapitalize="none"
            accessibilityLabel={`Sugestão para ${item.author_name}`}
            style={targetInputStyle(pack)}
            className="min-h-[70px] rounded-xl border-2 border-slate-200 bg-white p-3 text-base text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          />
          <LetterPad small onInsert={(ch) => setText((t) => t + ch)} onBackspace={() => setText((t) => t.slice(0, -1))} />
          <Button
            title="Enviar avaliação"
            variant="success"
            loading={saving}
            disabled={saving || !reaction}
            onPress={async () => {
              if (!reaction) return;
              setSaving(true);
              await onRate(reaction, text.trim() !== item.content.trim() ? text.trim() : null);
              setSaving(false);
            }}
          />
        </>
      ) : (
        <View className="gap-1">
          {item.correction && (
            <>
              <Text className="text-sm font-semibold text-slate-600 dark:text-slate-300">Sua sugestão:</Text>
              <Text style={targetTextStyle(pack)} className="text-base text-conecta-dark dark:text-blue-300">{item.correction}</Text>
            </>
          )}
          {item.reference && (
            <>
              <Text className="mt-1 text-sm font-semibold text-slate-600 dark:text-slate-300">Correção de referência:</Text>
              <Text style={targetTextStyle(pack)} className="text-base font-semibold text-conquista-dark dark:text-green-300">{item.reference}</Text>
            </>
          )}
        </View>
      )}
    </Card>
  );
}

/** Gravar 10 segundos lendo uma frase, para mandar a um colega. */
function AudioSubmit({ phrase, onSaved }: { phrase: string; onSaved: (content: string, audio: string) => Promise<void> }) {
  const { pack } = useApp();
  const rec = useClipRecorder();
  const [clip, setClip] = useState<string | null>(null);
  const finish = async () => setClip(await rec.stop());
  return (
    <Card className="mt-3 gap-3">
      <Text className="font-bold text-slate-800 dark:text-slate-100">🎙️ 10 segundos de áudio</Text>
      <Text className="text-sm text-slate-600 dark:text-slate-400">Leia em voz alta (ou diga algo seu):</Text>
      <Text style={targetTextStyle(pack)} className="text-lg font-semibold text-slate-900 dark:text-white">“{phrase}”</Text>
      {!rec.supported ? (
        <Text className="text-sm text-slate-500 dark:text-slate-400">Gravar para a comunidade funciona pelo site, num navegador com microfone.</Text>
      ) : rec.recording ? (
        <>
          <View className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
            <View style={{ width: `${Math.round((rec.elapsed / AUDIO_MAX_MS) * 100)}%` }} className="h-2 rounded-full bg-rose-500" />
          </View>
          <Button title={`⏹ Parar (${Math.ceil((AUDIO_MAX_MS - rec.elapsed) / 1000)} s)`} variant="danger" onPress={finish} />
        </>
      ) : clip ? (
        <View className="flex-row gap-2">
          <Button title="▶ Ouvir" variant="ghost" className="flex-1" onPress={() => playDataUri(clip)} />
          <Button
            title="Pôr nos meus envios"
            variant="success"
            className="flex-1"
            onPress={async () => {
              await onSaved(phrase, clip);
              setClip(null);
            }}
          />
        </View>
      ) : (
        <Button title="⏺ Gravar (até 10 s)" onPress={() => rec.start(AUDIO_MAX_MS, setClip)} />
      )}
      {rec.error && <Text className="text-sm text-rose-600">{rec.error}</Text>}
    </Card>
  );
}

function MineCard({ item, langCode, langName, from }: { item: CommunityRow; langCode: string; langName: string; from: string }) {
  const { pack } = useApp();
  const [sent, setSent] = useState<string | null>(null);
  const share = async () => {
    const { url, withoutAudio } = exchangeLink(siteUrl(), {
      v: 1,
      t: 'pedido',
      id: item.id,
      lang: langCode,
      langName,
      prompt: item.prompt,
      kind: item.kind === 'audio' ? 'audio' : 'texto',
      content: item.content,
      ...(item.audio ? { audio: item.audio } : {}),
      from,
    });
    const r = await sendLink(url, `${from} pediu sua avaliação no LinuLingo (${langName}):`);
    setSent(
      r === 'falhou'
        ? 'Não deu para compartilhar nem copiar o link.'
        : `${r === 'copiado' ? 'Link copiado! Cole numa mensagem para um colega.' : 'Link enviado!'}${withoutAudio ? ' (O áudio ficou grande demais para o link; foi só a frase.)' : ''}`,
    );
  };
  return (
    <Card className="gap-2">
      <Text className="text-xs font-bold text-slate-500">{item.prompt}</Text>
      <Text style={targetTextStyle(pack)} className="text-lg text-slate-900 dark:text-white">{item.kind === 'audio' ? `🎙️ “${item.content}”` : item.content}</Text>
      {item.audio && <Button title="▶ Ouvir meu áudio" variant="ghost" onPress={() => playDataUri(item.audio!)} />}
      {item.reply_reaction ? (
        <View className="gap-1 rounded-xl bg-green-50 p-3 dark:bg-green-950/40">
          <Text className="font-bold text-slate-900 dark:text-white">
            {REACTIONS[item.reply_reaction].emoji} {item.reply_from}: {REACTIONS[item.reply_reaction].label.toLowerCase()}
          </Text>
          {item.reply_suggestion && <Text style={targetTextStyle(pack)} className="text-base text-conquista-dark dark:text-green-300">Sugestão: {item.reply_suggestion}</Text>}
        </View>
      ) : (
        <Chip label="⏳ aguardando avaliação" tone="amber" />
      )}
      <Button title="📤 Mandar para um colega avaliar" variant="ghost" onPress={share} />
      {sent && <Text className="text-sm text-slate-600 dark:text-slate-300">{sent}</Text>}
    </Card>
  );
}
