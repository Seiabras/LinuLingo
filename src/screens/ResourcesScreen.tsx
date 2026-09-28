import { useState } from 'react';
import { Linking, Pressable, Text, View } from 'react-native';
import { ArrowLeft, ExternalLink } from 'lucide-react-native';
import { Card, Chip, Screen, SpeechBubble } from '@/components/ui';
import { HScroll } from '@/components/HScroll';
import { Linu } from '@/components/Linu';
import { LANGUAGES, isAvailable } from '@/data/idiomas';
import { RESOURCES } from '@/data/recursos';
import { MEDIA_LABEL, type MediaKind, type MediaPick, type ProficiencyExam } from '@/data/recursos/tipos';
import { useApp } from '@/services/app-state';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';
import { nomeIdioma } from '@/services/idioma-nome';

type Tab = 'provas' | 'midia' | 'dicas';
const CEFR_ORDER = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const KIND_ORDER: MediaKind[] = ['filme', 'serie', 'livro', 'hq', 'musica', 'podcast', 'canal', 'noticias', 'ferramenta', 'jogo'];
const levelTone = (l: string): 'green' | 'blue' | 'orange' => (l.startsWith('A') ? 'green' : l.startsWith('B') ? 'blue' : 'orange');

/**
 * Provas e dicas: as provas de proficiência de cada idioma (TOEFL, Cambridge, DELE, JLPT, TOPIK…)
 * e o que ver, ler e ouvir para praticar fora do app, com o nível a partir do qual dá para aproveitar.
 * Mostra primeiro o idioma estudado, mas deixa ver todos os da lista (inclusive os «em breve»).
 */
export default function ResourcesScreen() {
  const { pack } = useApp();
  const dark = useIsDark();
  const [code, setCode] = useState(RESOURCES[pack.code] ? pack.code : 'en');
  const [tab, setTab] = useState<Tab>('provas');
  const [kind, setKind] = useState<MediaKind | null>(null);
  const res = RESOURCES[code];
  const lang = LANGUAGES.find((l) => l.code === code)!;
  // o idioma estudado primeiro; depois os do app; depois os «em breve»
  const langs = [...LANGUAGES].sort((a, b) => Number(b.code === pack.code) - Number(a.code === pack.code) || Number(isAvailable(b.code)) - Number(isAvailable(a.code)));
  const kinds = KIND_ORDER.filter((k) => res.media.some((m) => m.kind === k));
  const media = res.media.filter((m) => !kind || m.kind === kind);

  return (
    <Screen>
      <View className="flex-row items-center gap-3 pt-3">
        <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
          <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
        </Pressable>
        <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">🎓 Provas e dicas</Text>
      </View>

      <View className="mt-4 flex-row items-end gap-2">
        <Linu mood="falando" size={70} />
        <SpeechBubble className="mb-6">Quer um certificado ou só praticar vendo filme? Aqui estão as provas mais pedidas e o que ver, ler e ouvir em {nomeIdioma(lang.name)}.</SpeechBubble>
      </View>

      <HScroll className="mt-2" label="os idiomas" contentContainerStyle={{ gap: 8, paddingVertical: 4 }}>
        {langs.map((l) => (
          <Pressable
            key={l.code}
            accessibilityRole="button"
            accessibilityState={{ selected: l.code === code }}
            onPress={() => {
              setCode(l.code);
              setKind(null);
            }}
            className={`flex-row items-center gap-1 rounded-full border-2 px-3 py-1.5 ${l.code === code ? 'border-conecta bg-conecta-light dark:bg-blue-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
          >
            <Text>{l.flag}</Text>
            <Text className={`text-sm font-bold ${l.code === code ? 'text-conecta' : 'text-slate-700 dark:text-slate-200'}`}>{l.name}</Text>
            {!isAvailable(l.code) && <Text className="text-[10px] font-bold uppercase text-slate-400">breve</Text>}
          </Pressable>
        ))}
      </HScroll>

      <View className="mt-3 flex-row gap-1 rounded-2xl bg-slate-100 p-1 dark:bg-slate-800" accessibilityRole="tablist">
        {(
          [
            ['provas', `🎓 Provas (${res.exams.length})`],
            ['midia', `🎬 Ver, ler e ouvir (${res.media.length})`],
            ['dicas', '💡 Dicas'],
          ] as [Tab, string][]
        ).map(([id, label]) => (
          <Pressable
            key={id}
            accessibilityRole="tab"
            accessibilityState={{ selected: tab === id }}
            onPress={() => setTab(id)}
            className={`flex-1 items-center rounded-xl px-2 py-2 ${tab === id ? 'bg-white dark:bg-slate-900' : ''}`}
          >
            <Text className={`text-center text-xs font-extrabold ${tab === id ? 'text-conecta' : 'text-slate-500 dark:text-slate-400'}`}>{label}</Text>
          </Pressable>
        ))}
      </View>

      {tab === 'provas' && (
        <View className="mt-4 gap-3">
          {res.exams.length === 0 && (
            <Card>
              <Text className="leading-6 text-slate-700 dark:text-slate-200">
                O {nomeIdioma(lang.name)} ainda não tem uma prova de proficiência internacional padronizada. Veja na aba «💡 Dicas» como comprovar e medir o seu nível.
              </Text>
            </Card>
          )}
          {res.exams.map((e) => (
            <ExamCard key={e.id} exam={e} />
          ))}
          {res.exams.length > 0 && <Text className="text-xs leading-5 text-slate-500 dark:text-slate-400">Preços, datas e regras mudam todo ano: confira sempre no site oficial antes de se inscrever.</Text>}
        </View>
      )}

      {tab === 'midia' && (
        <View className="mt-4">
          <HScroll label="os tipos" contentContainerStyle={{ gap: 8, paddingVertical: 2 }}>
            {[null, ...kinds].map((k) => (
              <Pressable
                key={k ?? 'todos'}
                accessibilityRole="button"
                accessibilityState={{ selected: kind === k }}
                onPress={() => setKind(k)}
                className={`rounded-full px-3 py-1.5 ${kind === k ? 'bg-conecta' : 'bg-slate-200 dark:bg-slate-800'}`}
              >
                <Text className={`text-sm font-bold ${kind === k ? 'text-white' : 'text-slate-700 dark:text-slate-200'}`}>{k ? `${MEDIA_LABEL[k].emoji} ${MEDIA_LABEL[k].label}` : 'Tudo'}</Text>
              </Pressable>
            ))}
          </HScroll>
          <Text className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">O nível é a partir de quando dá para aproveitar no original (filmes e séries com legenda no idioma).</Text>
          {(kind ? [kind] : kinds).map((k) => (
            <View key={k} className="mt-4">
              <Text className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                {MEDIA_LABEL[k].emoji} {MEDIA_LABEL[k].label}
              </Text>
              <View className="gap-2">
                {media
                  .filter((m) => m.kind === k)
                  .sort((a, b) => CEFR_ORDER.indexOf(a.level) - CEFR_ORDER.indexOf(b.level))
                  .map((m) => (
                    <MediaCard key={`${m.kind}:${m.title}`} m={m} />
                  ))}
              </View>
            </View>
          ))}
        </View>
      )}

      {tab === 'dicas' && (
        <View className="mt-4 gap-2">
          {res.tips.map((t, i) => (
            <Card key={i} className="flex-row gap-3">
              <Text className="text-lg">💡</Text>
              <Text className="flex-1 leading-6 text-slate-700 dark:text-slate-200">{t}</Text>
            </Card>
          ))}
        </View>
      )}
    </Screen>
  );
}

function ExamCard({ exam: e }: { exam: ProficiencyExam }) {
  return (
    <Card className={e.main ? 'border-2 border-conquista/60' : ''}>
      <View className="flex-row flex-wrap items-center gap-2">
        <Text className="text-xl font-extrabold text-slate-900 dark:text-white">
          {e.flag} {e.name}
        </Text>
        {e.main && <Chip label="a mais pedida" tone="green" />}
        <Chip label={e.cefr[0] === e.cefr[1] ? e.cefr[0] : `${e.cefr[0]}–${e.cefr[1]}`} tone={levelTone(e.cefr[1])} />
      </View>
      <Text className="mt-1 text-sm italic text-slate-600 dark:text-slate-300">{e.fullName}</Text>
      <Text className="mt-1 text-xs text-slate-500 dark:text-slate-400">{e.org}</Text>

      <Row label="Níveis">{e.levels}</Row>
      <Text className="mt-3 text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Como é a prova</Text>
      {e.format.map((f, i) => (
        <Text key={i} className="mt-1 leading-5 text-slate-700 dark:text-slate-200">
          • {f}
        </Text>
      ))}
      <Row label="Validade">{e.validity}</Row>
      <View className="mt-3 flex-row flex-wrap gap-1">
        {e.usedFor.map((u) => (
          <Chip key={u} label={u} tone="blue" />
        ))}
      </View>
      <Row label="Onde fazer">{e.where}</Row>
      <View className="mt-3 flex-row gap-2 rounded-xl bg-amber-50 p-3 dark:bg-amber-950/40">
        <Text>🐧</Text>
        <Text className="flex-1 text-sm leading-5 text-slate-800 dark:text-slate-200">{e.tip}</Text>
      </View>
      <Pressable accessibilityRole="link" onPress={() => Linking.openURL(e.url)} className="mt-3 flex-row items-center gap-1 self-start" hitSlop={6}>
        <Text className="font-bold text-conecta">Site oficial</Text>
        <ExternalLink size={14} color="#2563EB" />
      </Pressable>
    </Card>
  );
}

function Row({ label, children }: { label: string; children: string }) {
  return (
    <Text className="mt-3 leading-5 text-slate-700 dark:text-slate-200">
      <Text className="font-bold">{label}: </Text>
      {children}
    </Text>
  );
}

function MediaCard({ m }: { m: MediaPick }) {
  return (
    <Card>
      <View className="flex-row items-start gap-2">
        <View className="flex-1">
          <Text className="font-extrabold text-slate-900 dark:text-white">{m.title}</Text>
          {m.original && m.original !== m.title && <Text className="text-sm text-slate-600 dark:text-slate-300">{m.original}</Text>}
          <Text className="text-xs text-slate-500 dark:text-slate-400">
            {m.by}
            {m.year ? ` · ${m.year}` : ''}
          </Text>
        </View>
        <Chip label={`${m.level}+`} tone={levelTone(m.level)} />
      </View>
      <Text className="mt-2 text-sm leading-5 text-slate-700 dark:text-slate-200">{m.why}</Text>
      {m.accent && <Text className="mt-1 text-xs font-bold text-conecta">🗣️ {m.accent}</Text>}
    </Card>
  );
}
