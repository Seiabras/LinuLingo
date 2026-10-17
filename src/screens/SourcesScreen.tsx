import { Linking, Pressable, Text, View } from 'react-native';
import { ArrowLeft, BookA, BookOpen, ExternalLink, Globe, GraduationCap, Headphones, Library, Lightbulb, Microscope, School, ScrollText, ShieldAlert, type LucideIcon } from 'lucide-react-native';
import type { ReactNode } from 'react';
import { Screen, Card, Chip } from '@/components/ui';
import { FieldNotebookBackground } from '@/components/FieldNotebookBackground';
import { Pseudociencias } from '@/components/ciencia/Pseudociencias';
import { useApp } from '@/services/app-state';
import { useIsDark } from '@/services/theme';
import { goBack } from '@/services/nav';
import { nomeIdioma } from '@/services/idioma-nome';
import type { FonteEstudo, MetodoEnsino, TipoFonte } from '@/data/types';
import { useCorDestaque } from '@/services/cor-destaque';
import { hexDaCor } from '@/data/cores-destaque';

/** A ordem e o nome de cada grupo da lista. */
const GRUPOS: { tipo: TipoFonte; titulo: string; Icone: LucideIcon }[] = [
  { tipo: 'gramatica', titulo: 'Gramáticas', Icone: BookOpen },
  { tipo: 'dicionario', titulo: 'Dicionários', Icone: BookA },
  { tipo: 'curso', titulo: 'Cursos e métodos', Icone: GraduationCap },
  { tipo: 'textos', titulo: 'Textos e corpora', Icone: ScrollText },
  { tipo: 'tese', titulo: 'Teses e artigos', Icone: Microscope },
  { tipo: 'audio', titulo: 'Áudio', Icone: Headphones },
  { tipo: 'site', titulo: 'Sites', Icone: Globe },
];

const ACESSO: Record<FonteEstudo['acesso'], { label: string; tone: 'green' | 'amber' | 'slate' }> = {
  aberto: { label: 'grátis na internet', tone: 'green' },
  pago: { label: 'pago', tone: 'amber' },
  biblioteca: { label: 'em bibliotecas', tone: 'slate' },
};

/**
 * Estudar pelas fontes: as gramáticas, dicionários, cursos e corpora do idioma em estudo, agrupados
 * por tipo, e como a língua é ensinada de verdade (os dados vêm de `fontes` e `metodos` do pacote).
 */
export default function SourcesScreen() {
  const corDestaque = useCorDestaque();
  const { pack } = useApp();
  const dark = useIsDark();
  const fontes = pack.fontes ?? [];
  const metodos = pack.metodos ?? [];
  const nome = nomeIdioma(pack.name);

  return (
    <Screen background={<FieldNotebookBackground variant="gelo" />}>
      <View className="flex-row items-center gap-3 pt-3">
        <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
          <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
        </Pressable>
        <Library size={26} color={dark ? hexDaCor(corDestaque, 400) : hexDaCor(corDestaque, 600)} />
        <Text className="flex-1 text-2xl font-extrabold text-slate-900 dark:text-white">Estudar pelas fontes</Text>
      </View>
      <Text className="mt-3 text-base text-slate-700 dark:text-slate-300">
        As gramáticas, os dicionários, os cursos e os textos em que o curso de {nome} se apoia, e outros conferidos para quem quer ir direto à fonte. Os
        links abrem no navegador.
      </Text>

      {fontes.length === 0 && metodos.length === 0 ? (
        <Card className="mt-5">
          <Text className="text-base text-slate-700 dark:text-slate-300">
            As fontes deste curso ainda estão sendo reunidas. Cada uma entra só depois de conferida, então a lista aparece aqui numa próxima atualização.
          </Text>
        </Card>
      ) : (
        <>
          {GRUPOS.map((g) => {
            const itens = fontes.filter((f) => f.tipo === g.tipo);
            if (!itens.length) return null;
            return (
              <View key={g.tipo}>
                <Titulo Icone={g.Icone} dark={dark}>
                  {g.titulo}
                </Titulo>
                <View className="gap-2">
                  {itens.map((f) => (
                    <FonteCard key={f.url ?? f.titulo} fonte={f} dark={dark} />
                  ))}
                </View>
              </View>
            );
          })}

          {metodos.length > 0 && (
            <>
              <Titulo Icone={School} dark={dark}>
                Como a língua é ensinada
              </Titulo>
              <Text className="mb-2 text-sm text-slate-600 dark:text-slate-400">
                Os jeitos como o {nome} é ensinado nas escolas, certificações e cursos, e o que o LinuLingo pode aprender com cada um.
              </Text>
              <View className="gap-2">
                {metodos.map((m) => (
                  <MetodoCard key={m.nome} metodo={m} dark={dark} />
                ))}
              </View>
            </>
          )}
        </>
      )}

      <Titulo Icone={ShieldAlert} dark={dark}>
        Mitos sobre aprender línguas
      </Titulo>
      <Pseudociencias
        area="idiomas"
        intro="Nem tudo o que se diz sobre aprender idiomas tem base. Aqui estão ideias famosas que a pesquisa não sustenta, cada uma com o que promete e o que se sabe."
      />
    </Screen>
  );
}

function FonteCard({ fonte: f, dark }: { fonte: FonteEstudo; dark: boolean }) {
  const corDestaque = useCorDestaque();
  const meta = [f.autor, f.ano].filter(Boolean).join(', ');
  const abrir = f.url ? () => Linking.openURL(f.url!) : undefined;
  return (
    <Pressable
      accessibilityRole={f.url ? 'link' : undefined}
      accessibilityLabel={f.url ? `${f.titulo}, abrir no navegador` : f.titulo}
      disabled={!abrir}
      onPress={abrir}
      className="gap-1.5 rounded-2xl bg-white p-4 active:opacity-80 dark:bg-slate-900"
    >
      <View className="flex-row items-start gap-2">
        <Text className="flex-1 text-base font-extrabold text-slate-900 dark:text-white">{f.titulo}</Text>
        {f.url && <ExternalLink size={16} color={dark ? hexDaCor(corDestaque, 400) : hexDaCor(corDestaque, 600)} />}
      </View>
      {meta ? <Text className="text-xs text-slate-600 dark:text-slate-400">{meta}</Text> : null}
      <Text className="text-sm text-slate-700 dark:text-slate-300">{f.sobre}</Text>
      <View className="mt-1 flex-row flex-wrap gap-1.5">
        <Chip label={ACESSO[f.acesso].label} tone={ACESSO[f.acesso].tone} />
        {f.nivel && <Chip label={`nível ${f.nivel}`} tone="blue" />}
        {f.licenca && <Chip label={f.licenca} tone="slate" />}
      </View>
    </Pressable>
  );
}

function MetodoCard({ metodo: m, dark }: { metodo: MetodoEnsino; dark: boolean }) {
  return (
    <Card className="gap-1.5">
      <Text className="text-base font-extrabold text-slate-900 dark:text-white">{m.nome}</Text>
      <Text className="text-xs font-semibold text-conecta dark:text-conecta-400">{m.ondeQuem}</Text>
      <Text className="text-sm text-slate-700 dark:text-slate-300">{m.comoFunciona}</Text>
      {m.ideiaApp && (
        <View className="mt-1 flex-row gap-2 rounded-xl bg-conecta-50 p-3 dark:bg-slate-800">
          <Lightbulb size={16} color={dark ? '#FBBF24' : '#D97706'} style={{ marginTop: 2 }} />
          <Text className="flex-1 text-sm text-slate-800 dark:text-slate-200">
            <Text className="font-bold">Ideia para o app: </Text>
            {m.ideiaApp}
          </Text>
        </View>
      )}
      <Text className="text-xs text-slate-500 dark:text-slate-400">Fonte: {m.fonte}</Text>
    </Card>
  );
}

/** Título de seção com ícone (no lugar do emoji), no mesmo estilo do `SectionTitle`. */
function Titulo({ Icone, dark, children }: { Icone: LucideIcon; dark: boolean; children: ReactNode }) {
  return (
    <View className="mb-2 mt-6 flex-row items-center gap-2">
      <Icone size={16} color={dark ? '#94A3B8' : '#475569'} />
      <Text className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">{children}</Text>
    </View>
  );
}
