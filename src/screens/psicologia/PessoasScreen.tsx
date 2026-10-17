import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Card, Screen } from '@/components/ui';
import { AreaCabecalho } from '@/components/area/AreaCabecalho';
import { MapaArea, nomeDoPais } from '@/components/mapa/MapaArea';
import { paisDaPessoa, PESSOAS_BRASIL, PESSOAS_MUNDO, type Pessoa } from '@/data/psicologia/pessoas';

const TODAS = [...PESSOAS_MUNDO, ...PESSOAS_BRASIL];
const CONTAGEM: Record<string, number> = {};
for (const p of TODAS) {
  const iso = paisDaPessoa(p);
  if (iso) CONTAGEM[iso] = (CONTAGEM[iso] ?? 0) + 1;
}

function CartaoPessoa({ p }: { p: Pessoa }) {
  return (
    <Card className="gap-0.5">
      <Text className="text-base font-extrabold text-slate-900 dark:text-white">{p.nome}</Text>
      <Text className="text-xs font-bold text-violet-700 dark:text-violet-400">
        {p.onde}
        {p.anos ? ` · ${p.anos}` : ''}
      </Text>
      <Text className="text-sm text-slate-700 dark:text-slate-300">{p.fez}</Text>
    </Card>
  );
}

/** As pessoas da psicologia: quem criou as ideias que aparecem no app, no mundo e no Brasil. */
export default function PessoasScreen() {
  const [onde, setOnde] = useState<'mundo' | 'brasil' | 'mapa'>('mundo');
  const [pais, setPais] = useState<string | null>(null);
  const lista = onde === 'mundo' ? PESSOAS_MUNDO : onde === 'brasil' ? PESSOAS_BRASIL : pais ? TODAS.filter((p) => paisDaPessoa(p) === pais) : [];
  return (
    <Screen>
      <AreaCabecalho area="psicologia" titulo="Pessoas" subtitulo="Quem pensou as ideias que você encontra na trilha, no laboratório e nas abordagens." />
      <View className="mt-3 flex-row gap-2">
        {(
          [
            ['mundo', '🌍 No mundo'],
            ['brasil', '🇧🇷 No Brasil'],
            ['mapa', '🗺️ No mapa'],
          ] as const
        ).map(([k, nome]) => (
          <Pressable
            key={k}
            accessibilityRole="tab"
            accessibilityState={{ selected: onde === k }}
            onPress={() => setOnde(k)}
            className={`flex-1 rounded-xl border-2 p-2 ${onde === k ? 'border-violet-500 bg-violet-50 dark:bg-violet-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
          >
            <Text className="text-center text-sm font-bold text-slate-700 dark:text-slate-200">{nome}</Text>
          </Pressable>
        ))}
      </View>
      {onde === 'brasil' && (
        <Text className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Pioneiras e pioneiros da psicologia e da psicanálise no Brasil. A história completa, ano a ano, está na aba Brasil.
        </Text>
      )}
      {onde === 'mapa' && (
        <View className="mt-3 gap-2">
          <MapaArea contagem={CONTAGEM} cor="#8B5CF6" selecionado={pais} aoEscolher={setPais} unidade={['pessoa', 'pessoas']} />
          <Text className="text-sm text-slate-600 dark:text-slate-400">
            {pais ? `Quem trabalhou em ${nomeDoPais(pais)}:` : 'Toque num país para ver quem fez a psicologia ali.'}
          </Text>
        </View>
      )}
      <View className="mt-3 gap-2">
        {lista.map((p) => (
          <CartaoPessoa key={p.nome} p={p} />
        ))}
      </View>
    </Screen>
  );
}
