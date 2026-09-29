import { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { Card, Chip, InfoLabel, SpeechBubble } from '@/components/ui';
import { HScroll } from '@/components/HScroll';
import { Linu } from '@/components/Linu';
import { WORLD } from '@/data/mapa-mundi';
import { miniCourse } from '@/data/cursos';
import { flagOf } from '@/data/onde-se-fala';
import {
  CONLANGS,
  CONTACT_LANGUAGES,
  CONTACT_STAGES,
  CONTROLLED,
  FORMAL_BRIDGE,
  FORMAL_GROUPS,
  HUMAN_VS_FORMAL,
  MODALITIES,
  ORIGINS,
  PIE_NOTE,
  PIE_WORDS,
  PURPOSES,
  SAME_IDEA,
  STAGES,
  STATES,
  contactFromGlottolog,
  type Conlang,
  type ConlangTree,
  type ConlangTreeNode,
  type ConlangOrigin,
  type ConlangPurpose,
  type ConlangStage,
} from '@/data/tipos-de-linguas';

const PARTS = [
  { id: 'artificiais', label: '🛠️ Artificiais' },
  { id: 'formais', label: '💻 Formais' },
  { id: 'contato', label: '🤝 De contato' },
  { id: 'controladas', label: '📏 Controladas' },
  { id: 'modalidade', label: '👂 Modalidade' },
  { id: 'estado', label: '🧬 Vivas e mortas' },
] as const;
type PartId = (typeof PARTS)[number]['id'];

/**
 * Aba «Tipos de línguas» da Cultura: as artificiais (com filtros por propósito, origem e grau de
 * desenvolvimento), as formais e computacionais, as de contato, as controladas, a modalidade e o
 * estado. A parte vem da rota (/cultura?aba=tipos&parte=formais).
 */
export function LanguageTypesTab() {
  const { parte } = useLocalSearchParams<{ parte?: string }>();
  const part: PartId = PARTS.some((p) => p.id === parte) ? (parte as PartId) : 'artificiais';
  const setPart = (id: PartId) => router.setParams({ parte: id });
  return (
    <View className="gap-3">
      <View className="mt-2 flex-row items-end gap-2">
        <Linu mood="pensando" size={60} animate={false} />
        <SpeechBubble className="mb-5">Nem toda língua nasceu sozinha na boca de um povo: umas foram inventadas, outras nasceram do encontro de povos, outras só as máquinas «falam».</SpeechBubble>
      </View>
      <HScroll label="as partes" contentContainerStyle={{ gap: 8 }}>
        {PARTS.map((p) => {
          const on = p.id === part;
          return (
            <Pressable
              key={p.id}
              accessibilityRole="tab"
              accessibilityState={{ selected: on }}
              aria-selected={on}
              onPress={() => setPart(p.id)}
              className={`rounded-full border-2 px-3 py-1.5 ${on ? 'border-conecta bg-conecta-light dark:bg-blue-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
            >
              <Text className={`font-bold ${on ? 'text-conecta' : 'text-slate-600 dark:text-slate-300'}`}>{p.label}</Text>
            </Pressable>
          );
        })}
      </HScroll>
      {part === 'artificiais' && <Conlangs />}
      {part === 'formais' && <Formal />}
      {part === 'contato' && <Contact />}
      {part === 'controladas' && <Controlled />}
      {part === 'modalidade' && <Modality />}
      {part === 'estado' && <State />}
    </View>
  );
}

function Title({ children }: { children: string }) {
  return <Text className="mt-3 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">{children}</Text>;
}

function Intro({ title, text }: { title: string; text: string }) {
  return (
    <Card className="gap-2">
      <Text className="text-lg font-extrabold text-slate-900 dark:text-white">{title}</Text>
      <Text className="text-base leading-6 text-slate-700 dark:text-slate-300">{text}</Text>
    </Card>
  );
}

/** Uma fileira de filtros: «Todas» e uma opção por valor. */
function FilterRow<T extends string>({ label, info, options, value, onChange }: { label: string; info: string; options: [T, string][]; value: T | null; onChange: (v: T | null) => void }) {
  return (
    <View className="gap-1.5">
      <InfoLabel label={label} info={info} />
      <View className="flex-row flex-wrap gap-2">
        {[[null, 'Todas'] as [T | null, string], ...options].map(([v, l]) => {
          const on = value === v;
          return (
            <Pressable
              key={l}
              accessibilityRole="radio"
              accessibilityState={{ checked: on }}
              aria-checked={on}
              accessibilityLabel={`${label}: ${l}`}
              onPress={() => onChange(v)}
              className={`rounded-full border-2 px-3 py-1 ${on ? 'border-conecta bg-conecta-light dark:bg-blue-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
            >
              <Text className={`text-sm font-bold ${on ? 'text-conecta' : 'text-slate-600 dark:text-slate-300'}`}>{l}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

function Conlangs() {
  const [purpose, setPurpose] = useState<ConlangPurpose | null>(null);
  const [origin, setOrigin] = useState<ConlangOrigin | null>(null);
  const [stage, setStage] = useState<ConlangStage | null>(null);
  const list = CONLANGS.filter((c) => (!purpose || c.purpose === purpose) && (!origin || c.origin === origin) && (!stage || c.stage === stage));
  return (
    <>
      <Intro
        title="Línguas artificiais (conlangs)"
        text="Línguas criadas de propósito por uma pessoa ou um grupo, e não surgidas sozinhas numa comunidade. Dá para classificá-las de três jeitos: pelo propósito (para que foram feitas), pela origem (de onde vêm as palavras) e pelo grau de desenvolvimento (dá para conversar nelas?)."
      />
      <Card className="gap-3">
        <FilterRow
          label="Propósito"
          info={Object.values(PURPOSES)
            .map((p) => `${p.emoji} ${p.label}: ${p.text}`)
            .join('\n\n')}
          options={(Object.keys(PURPOSES) as ConlangPurpose[]).map((k) => [k, `${PURPOSES[k].emoji} ${PURPOSES[k].label.split(' (')[0]}`])}
          value={purpose}
          onChange={setPurpose}
        />
        <FilterRow
          label="Origem"
          info={Object.values(ORIGINS)
            .map((o) => `${o.label}: ${o.text}`)
            .join('\n\n')}
          options={(Object.keys(ORIGINS) as ConlangOrigin[]).map((k) => [k, ORIGINS[k].label])}
          value={origin}
          onChange={setOrigin}
        />
        <FilterRow
          label="Desenvolvimento"
          info={Object.values(STAGES)
            .map((s) => `${s.label}: ${s.text}`)
            .join('\n\n')}
          options={(Object.keys(STAGES) as ConlangStage[]).map((k) => [k, STAGES[k].label])}
          value={stage}
          onChange={setStage}
        />
      </Card>
      {purpose && <Text className="text-sm leading-5 text-slate-600 dark:text-slate-400">{PURPOSES[purpose].text}</Text>}
      <Text className="text-sm font-bold text-slate-500 dark:text-slate-400">
        {list.length} {list.length === 1 ? 'língua' : 'línguas'}
      </Text>
      {list.map((c) => (
        <ConlangCard key={c.id} c={c} />
      ))}
      {list.length === 0 && (
        <Card>
          <Text className="text-slate-600 dark:text-slate-400">Nenhuma língua da lista combina com esses três filtros juntos. Tente tirar um deles.</Text>
        </Card>
      )}
    </>
  );
}

function ConlangCard({ c }: { c: Conlang }) {
  return (
    <Card className="gap-2">
      <View className="flex-row items-center gap-3">
        <Text className="text-3xl">{c.emoji}</Text>
        <View className="flex-1">
          <Text className="text-lg font-extrabold text-slate-900 dark:text-white">{c.name}</Text>
          <Text className="text-xs text-slate-500 dark:text-slate-400">
            {c.creator} · {c.year}
          </Text>
        </View>
      </View>
      <View className="flex-row flex-wrap gap-1.5">
        <Chip label={`${PURPOSES[c.purpose].emoji} ${PURPOSES[c.purpose].label.split(' (')[0]}`} tone="blue" />
        <Chip label={ORIGINS[c.origin].label} tone="amber" />
        <Chip label={STAGES[c.stage].label} tone={c.stage === 'completa' ? 'green' : 'slate'} />
      </View>
      <Text className="text-sm font-semibold leading-5 text-slate-800 dark:text-slate-200">{c.about}</Text>
      <Text className="text-sm leading-5 text-slate-600 dark:text-slate-400">{c.text}</Text>
      {c.samples?.map(([t, pt]) => (
        <View key={t} className="rounded-xl bg-amber-50 px-3 py-2 dark:bg-amber-950/40">
          <Text className="font-bold text-slate-900 dark:text-white">{t}</Text>
          <Text className="text-sm text-slate-600 dark:text-slate-400">{pt}</Text>
        </View>
      ))}
      {c.note && <Text className="text-xs italic leading-4 text-slate-500 dark:text-slate-400">⚖️ {c.note}</Text>}
      {c.tree && <ConlangTreeView tree={c.tree} />}
      {miniCourse(c.id) && (
        <Pressable accessibilityRole="button" onPress={() => router.push({ pathname: '/curso/[id]', params: { id: c.id } })} className="items-center rounded-xl bg-conecta py-2 active:opacity-90">
          <Text className="font-bold text-white">🎓 Fazer o curso de {c.name.split(' (')[0]}</Text>
        </Pressable>
      )}
      {c.id === 'tsevhu' && (
        <Pressable accessibilityRole="button" onPress={() => router.push('/tsevhu')} className="items-center rounded-xl bg-conecta py-2 active:opacity-90">
          <Text className="font-bold text-white">🐟 Abrir o módulo do Tsevhu</Text>
        </Pressable>
      )}
    </Card>
  );
}

/** A árvore genealógica de uma língua artificial: galhos recuados, com a língua do cartão em destaque. */
function ConlangTreeView({ tree }: { tree: ConlangTree }) {
  return (
    <View className="gap-1 rounded-xl bg-emerald-50 px-3 py-2 dark:bg-emerald-950/40">
      <Text className="text-xs font-bold uppercase tracking-wide text-emerald-800 dark:text-emerald-300">
        🌳 Árvore genealógica · {tree.kind === 'ficção' ? 'dentro da ficção' : 'de verdade'}
      </Text>
      <TreeBranch node={tree.root} highlight={tree.highlight} depth={0} />
      {tree.note && <Text className="mt-1 text-xs leading-4 text-slate-600 dark:text-slate-400">{tree.note}</Text>}
    </View>
  );
}

function TreeBranch({ node, highlight, depth }: { node: ConlangTreeNode; highlight: string; depth: number }) {
  const on = node.name === highlight;
  return (
    <View className={depth > 0 ? 'ml-3 border-l-2 border-emerald-300 pl-2 dark:border-emerald-800' : ''}>
      <Text className={`text-sm leading-5 ${on ? 'font-extrabold text-emerald-900 dark:text-emerald-200' : 'text-slate-800 dark:text-slate-200'}`}>
        {on ? '📍 ' : ''}
        {node.name}
        {node.note && <Text className="text-xs font-normal text-slate-500 dark:text-slate-400"> — {node.note}</Text>}
      </Text>
      {node.children?.map((ch) => (
        <TreeBranch key={ch.name} node={ch} highlight={highlight} depth={depth + 1} />
      ))}
    </View>
  );
}

function Formal() {
  return (
    <>
      <Intro
        title="Línguas formais e computacionais"
        text="As línguas humanas têm ambiguidade, e o contexto a resolve. As línguas formais são construídas sobre regras matemáticas e lógicas estritas, para serem processadas por máquinas ou por sistemas formais sem nenhuma dúvida sobre o que cada frase quer dizer."
      />
      {FORMAL_GROUPS.map((g) => (
        <Card key={g.id} className="gap-2">
          <Text className="text-lg font-extrabold text-slate-900 dark:text-white">
            {g.emoji} {g.name}
          </Text>
          <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">{g.text}</Text>
          {g.items.map((i) => (
            <View key={i.name} className="gap-0.5 rounded-xl border border-slate-200 px-3 py-2 dark:border-slate-700">
              <Text className="font-bold text-slate-900 dark:text-white">
                {i.name} <Text className="font-normal text-slate-500">· {i.year} · {i.who}</Text>
              </Text>
              <Text className="text-sm leading-5 text-slate-600 dark:text-slate-400">{i.text}</Text>
            </View>
          ))}
        </Card>
      ))}
      <Title>A mesma ideia em várias línguas</Title>
      <Card className="gap-2">
        <Text className="font-extrabold text-slate-900 dark:text-white">{SAME_IDEA.title}</Text>
        {SAME_IDEA.lines.map(([k, v]) => (
          <View key={k} className="gap-0.5">
            <Text className="text-xs font-bold uppercase tracking-wide text-conecta">{k}</Text>
            <Text className="rounded-lg bg-slate-100 px-2 py-1 font-mono text-sm text-slate-800 dark:bg-slate-800 dark:text-slate-100">{v}</Text>
          </View>
        ))}
      </Card>
      <Title>Humanas × formais</Title>
      {HUMAN_VS_FORMAL.map(([k, human, formal]) => (
        <Card key={k} className="gap-1">
          <Text className="font-extrabold text-slate-900 dark:text-white">{k}</Text>
          <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">🗣️ {human}</Text>
          <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">💻 {formal}</Text>
        </Card>
      ))}
      <Card>
        <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">🔗 {FORMAL_BRIDGE}</Text>
      </Card>
    </>
  );
}

function Contact() {
  const [glotto, setGlotto] = useState<ReturnType<typeof contactFromGlottolog> | null>(null);
  const [all, setAll] = useState(false);
  useEffect(() => {
    let alive = true;
    import('@/data/linguas-glottolog').then((g) => alive && setGlotto(contactFromGlottolog(g.GLOTTOLOG_ROWS)));
    return () => {
      alive = false;
    };
  }, []);
  const shown = glotto ? (all ? glotto : glotto.slice(0, 15)) : [];
  return (
    <>
      <Intro
        title="Línguas híbridas e de contato"
        text="Surgem quando grupos que não têm uma língua em comum precisam se comunicar rápido — por comércio, trabalho, escravidão ou migração. Do mais simples ao mais completo:"
      />
      {CONTACT_STAGES.map((s, i) => (
        <View key={s.name} className="flex-row gap-3">
          <Text className="w-8 pt-3 text-center text-2xl">{s.emoji}</Text>
          <Card className="flex-1 gap-1">
            <Text className="font-extrabold text-slate-900 dark:text-white">
              {i + 1}. {s.name}
            </Text>
            <Text className="text-sm leading-5 text-slate-600 dark:text-slate-400">{s.text}</Text>
          </Card>
        </View>
      ))}
      <Title>Exemplos</Title>
      {CONTACT_LANGUAGES.map((l) => (
        <Card key={l.name} className="gap-1.5">
          <View className="flex-row flex-wrap items-center gap-2">
            <Text className="text-base font-extrabold text-slate-900 dark:text-white">{l.name}</Text>
            <Chip label={l.kind} tone={l.kind === 'crioulo' ? 'green' : l.kind === 'pidgin' ? 'amber' : 'blue'} />
          </View>
          <Text className="text-xs text-slate-500 dark:text-slate-400">
            📍 {l.where} · base: {l.base}
          </Text>
          <Text className="text-sm leading-5 text-slate-600 dark:text-slate-400">{l.text}</Text>
          {l.sample && (
            <View className="rounded-xl bg-amber-50 px-3 py-2 dark:bg-amber-950/40">
              <Text className="font-bold text-slate-900 dark:text-white">{l.sample[0]}</Text>
              <Text className="text-sm text-slate-600 dark:text-slate-400">{l.sample[1]}</Text>
            </View>
          )}
        </Card>
      ))}
      <Title>Pidgins e línguas mistas no Glottolog</Title>
      <Card className="gap-2">
        {!glotto ? (
          <Text className="text-slate-500 dark:text-slate-400">Carregando o Glottolog…</Text>
        ) : (
          <>
            <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">
              {glotto.filter((g) => g.kind === 'pidgin').length} pidgins e {glotto.filter((g) => g.kind === 'mista').length} línguas mistas; {glotto.filter((g) => g.extinct).length} já não são usados. Os crioulos o Glottolog põe na família da língua que deu o vocabulário: o haitiano entre as indo-europeias, por causa do francês.
            </Text>
            {shown.map((g) => (
              <Text key={g.name} className={`text-sm ${g.extinct ? 'text-slate-400' : 'text-slate-800 dark:text-slate-200'}`}>
                {g.kind === 'mista' ? '🔀' : '🤝'} <Text className="font-bold">{g.name}</Text>
                {' · '}
                {g.countries
                  .map((iso) => WORLD.find((c) => c.iso === iso))
                  .filter((c) => !!c)
                  .map((c) => `${flagOf(c!.iso2)} ${c!.name}`)
                  .join(', ')}
                {g.extinct ? ' · extinto' : ''}
              </Text>
            ))}
            {glotto.length > 15 && (
              <Pressable accessibilityRole="button" onPress={() => setAll((a) => !a)}>
                <Text className="font-bold text-conecta">{all ? 'Mostrar menos' : `Ver todos (${glotto.length})`}</Text>
              </Pressable>
            )}
          </>
        )}
      </Card>
    </>
  );
}

function Controlled() {
  return (
    <>
      <Intro
        title="Línguas controladas e simplificadas"
        text="Pedaços padronizados e restritos de uma língua natural: gramática simplificada e vocabulário limitado, para evitar ambiguidade em manuais técnicos, na aviação, no mar, na tradução automática ou em documentos que todos precisam entender."
      />
      {CONTROLLED.map((c) => (
        <Card key={c.name} className="gap-1.5">
          <Text className="text-base font-extrabold text-slate-900 dark:text-white">
            {c.emoji} {c.name} <Text className="font-normal text-slate-500">· {c.year}</Text>
          </Text>
          <Text className="text-sm leading-5 text-slate-600 dark:text-slate-400">{c.text}</Text>
          {c.sample && (
            <View className="rounded-xl bg-amber-50 px-3 py-2 dark:bg-amber-950/40">
              <Text className="font-bold text-slate-900 dark:text-white">{c.sample[0]}</Text>
              <Text className="text-sm text-slate-600 dark:text-slate-400">{c.sample[1]}</Text>
            </View>
          )}
        </Card>
      ))}
    </>
  );
}

function Modality() {
  return (
    <>
      <Intro title="Por modalidade" text="Pelo canal: como a língua é produzida e percebida." />
      {MODALITIES.map((m) => (
        <Card key={m.name} className="gap-1.5">
          <Text className="text-base font-extrabold text-slate-900 dark:text-white">
            {m.emoji} {m.name}
          </Text>
          <Text className="text-sm leading-5 text-slate-600 dark:text-slate-400">{m.text}</Text>
          <Text className="text-xs text-slate-500 dark:text-slate-400">Exemplos: {m.examples}</Text>
        </Card>
      ))}
      <Pressable accessibilityRole="button" onPress={() => router.setParams({ aba: 'sinais', parte: 'estrutura' })} className="items-center rounded-2xl bg-conecta p-3 active:opacity-90">
        <Text className="font-extrabold text-white">🤟 Ir para as línguas de sinais</Text>
      </Pressable>
      <Pressable accessibilityRole="button" onPress={() => router.push({ pathname: '/curso/[id]', params: { id: 'tatil' } })} className="items-center rounded-2xl border-2 border-conecta/30 bg-white p-3 active:opacity-80 dark:bg-slate-900">
        <Text className="font-bold text-conecta">🎓 Curso: Braille e comunicação tátil</Text>
      </Pressable>
    </>
  );
}

function State() {
  return (
    <>
      <Intro title="Por estado de uso" text="Se a língua ainda é aprendida pelas crianças, se só sobrevive por escrito ou se é uma ancestral reconstruída." />
      {STATES.map((s) => (
        <Card key={s.name} className="gap-1.5">
          <Text className="text-base font-extrabold text-slate-900 dark:text-white">
            {s.emoji} {s.name}
          </Text>
          <Text className="text-sm leading-5 text-slate-600 dark:text-slate-400">{s.text}</Text>
          {s.examples.map(([n, t]) => (
            <Text key={n} className="text-sm leading-5 text-slate-700 dark:text-slate-300">
              • <Text className="font-bold">{n}</Text>: {t}
            </Text>
          ))}
        </Card>
      ))}
      <Title>Palavras do proto-indo-europeu</Title>
      <Card className="gap-2">
        {PIE_WORDS.map((w) => (
          <View key={w.pie} className="gap-0.5">
            <Text className="font-bold text-slate-900 dark:text-white">
              <Text className="font-mono">{w.pie}</Text> · {w.means}
            </Text>
            <Text className="text-sm leading-5 text-slate-600 dark:text-slate-400">→ {w.children}</Text>
          </View>
        ))}
        <Text className="text-sm leading-5 text-slate-600 dark:text-slate-400">{PIE_NOTE}</Text>
      </Card>
      <Pressable accessibilityRole="button" onPress={() => router.push('/mapa')} className="items-center rounded-2xl border-2 border-conecta/30 bg-white p-3 active:opacity-80 dark:bg-slate-900">
        <Text className="font-bold text-conecta">⏳ A linha do tempo das línguas fica no mapa</Text>
      </Pressable>
    </>
  );
}
