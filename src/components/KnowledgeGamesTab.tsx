import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Palette, ShoppingBag } from 'lucide-react-native';
import { Card, SpeechBubble } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { IconeJogo } from '@/components/jogos/IconeJogo';
import { LojaJogos } from '@/components/jogos/LojaJogos';
import { PainelPersonalizar } from '@/components/jogos/PainelPersonalizar';
import { CURSOS_JOGOS } from '@/data/cursos-jogos';
import { CATEGORIAS, EPOCAS, KNOWLEDGE_GAMES, REGIOES, type EpocaJogo, type KnowledgeGame, type RegiaoJogo } from '@/data/jogos-conhecimento';
import * as haptics from '@/services/haptics';
import { useIsDark } from '@/services/theme';
import { alvoDoTour } from '@/services/tour';
import { AmigoEscondido } from '@/components/AmigoEscondido';
import { MapaArea, nomeDoPais } from '@/components/mapa/MapaArea';
import { PAISES_DO_JOGO } from '@/data/jogos-paises';

type Agrupar = 'tipo' | 'epoca' | 'lugar' | 'mapa';

function Filtro({ rotulo, ativo, onPress }: { rotulo: string; ativo: boolean; onPress: () => void }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: ativo }}
      onPress={() => {
        haptics.tapLight();
        onPress();
      }}
      className={`rounded-full border-2 px-3 py-1 ${ativo ? 'border-conecta bg-conecta-50 dark:border-conecta-400 dark:bg-conecta-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
    >
      <Text className={`text-xs font-bold ${ativo ? 'text-conecta-dark dark:text-conecta-300' : 'text-slate-700 dark:text-slate-200'}`}>{rotulo}</Text>
    </Pressable>
  );
}

/** O cartão de um jogo na grade: ícone desenhado, nome, de onde vem e o que ele tem. */
function CartaoJogo({ g }: { g: KnowledgeGame }) {
  const regiao = REGIOES.find((r) => r.id === g.regiao)?.nome;
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Abrir ${g.name}`}
      onPress={() => {
        haptics.tapLight();
        router.push(`/jogo/${g.id}`);
      }}
      className="w-[48%] gap-1.5 rounded-2xl bg-white p-3 active:scale-95 active:bg-slate-50 dark:bg-slate-900 dark:active:bg-slate-800"
      style={{ shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 6, shadowOffset: { width: 0, height: 2 }, elevation: 2 }}
    >
      <IconeJogo id={g.id} tamanho={52} />
      <Text className="text-base font-extrabold text-slate-900 dark:text-white" numberOfLines={2}>
        {g.name}
      </Text>
      <Text className="text-xs text-slate-600 dark:text-slate-400" numberOfLines={2}>
        {[regiao, g.povo].filter(Boolean).join(' · ')}
      </Text>
      <View className="flex-row flex-wrap gap-1">
        {g.linu && (
          <Text className="rounded-full bg-sky-100 px-2 py-0.5 text-[10px] font-bold text-sky-800 dark:bg-sky-950 dark:text-sky-300">contra o Linu</Text>
        )}
        {CURSOS_JOGOS[g.id] && (
          <Text className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
            curso
          </Text>
        )}
      </View>
    </Pressable>
  );
}

/**
 * Aba “🎲 Jogos” da Cultura: os jogos de tabuleiro do mundo, com história e regras reais. Grade de
 * jogos (toque abre a página do jogo), agrupada por tipo, por época ou por lugar, com filtros de
 * época e de lugar (pedido do dono, 11/10/2026: “jogos antigos, de tal lugar e de tal povo”), a
 * personalização e a loja dos jogos.
 */
export function KnowledgeGamesTab() {
  const dark = useIsDark();
  const [agrupar, setAgrupar] = useState<Agrupar>('tipo');
  const [epoca, setEpoca] = useState<EpocaJogo | null>(null);
  const [regiao, setRegiao] = useState<RegiaoJogo | null>(null);
  const [painel, setPainel] = useState<'personalizar' | 'loja' | null>(null);
  const [pais, setPais] = useState<string | null>(null);
  const cor = dark ? '#E2E8F0' : '#334155';

  const prontos = KNOWLEDGE_GAMES.filter((g) => g.status === 'pronto' && (!epoca || g.epoca === epoca) && (!regiao || g.regiao === regiao));
  const breve = KNOWLEDGE_GAMES.filter((g) => g.status === 'em breve');
  const grupos =
    agrupar === 'tipo'
      ? CATEGORIAS.map((c) => ({ id: c.id, nome: c.nome, sub: c.descricao, jogos: prontos.filter((g) => g.categoria === c.id) }))
      : agrupar === 'epoca'
        ? EPOCAS.map((e) => ({ id: e.id, nome: e.nome, sub: '', jogos: prontos.filter((g) => g.epoca === e.id) }))
        : REGIOES.map((r) => ({ id: r.id, nome: r.nome, sub: '', jogos: prontos.filter((g) => g.regiao === r.id) }));

  return (
    <View className="gap-3">
      <View className="mt-2 flex-row items-end gap-2">
        <Linu mood="pensando" size={60} animate={false} />
        <SpeechBubble className="mb-5">Jogos de tabuleiro do mundo todo, com a história e as regras de verdade. Jogue a dois ou contra mim!</SpeechBubble>
        <AmigoEscondido id="albatroz" style={{ marginBottom: 20 }} />
      </View>

      <View ref={alvoDoTour('jogos-botoes')} className="flex-row flex-wrap gap-2">
        <Pressable
          accessibilityRole="button"
          onPress={() => setPainel(painel === 'personalizar' ? null : 'personalizar')}
          className={`flex-row items-center gap-1.5 rounded-full px-3.5 py-2 ${painel === 'personalizar' ? 'bg-conecta dark:bg-conecta-500' : 'bg-slate-100 dark:bg-slate-800'}`}
        >
          <Palette size={16} color={painel === 'personalizar' ? '#FFFFFF' : cor} />
          <Text className={`text-sm font-bold ${painel === 'personalizar' ? 'text-white' : 'text-slate-700 dark:text-slate-200'}`}>Personalizar</Text>
        </Pressable>
        <Pressable
          accessibilityRole="button"
          onPress={() => setPainel(painel === 'loja' ? null : 'loja')}
          className={`flex-row items-center gap-1.5 rounded-full px-3.5 py-2 ${painel === 'loja' ? 'bg-orange-500' : 'bg-orange-100 dark:bg-orange-950'}`}
        >
          <ShoppingBag size={16} color={painel === 'loja' ? '#FFFFFF' : '#C2410C'} />
          <Text className={`text-sm font-bold ${painel === 'loja' ? 'text-white' : 'text-orange-800 dark:text-orange-300'}`}>Loja dos jogos</Text>
        </Pressable>
      </View>
      {painel === 'personalizar' && (
        <Card>
          <PainelPersonalizar />
        </Card>
      )}
      {painel === 'loja' && (
        <Card>
          <LojaJogos />
        </Card>
      )}

      <View className="gap-2">
        <View className="flex-row flex-wrap items-center gap-2">
          <Text className="text-xs font-extrabold uppercase text-slate-600 dark:text-slate-400">Agrupar por</Text>
          <Filtro rotulo="Tipo" ativo={agrupar === 'tipo'} onPress={() => setAgrupar('tipo')} />
          <Filtro rotulo="Época" ativo={agrupar === 'epoca'} onPress={() => setAgrupar('epoca')} />
          <Filtro rotulo="Lugar" ativo={agrupar === 'lugar'} onPress={() => setAgrupar('lugar')} />
          <Filtro rotulo="No mapa" ativo={agrupar === 'mapa'} onPress={() => setAgrupar('mapa')} />
        </View>
        <View className="flex-row flex-wrap items-center gap-2">
          <Text className="text-xs font-extrabold uppercase text-slate-600 dark:text-slate-400">Quando</Text>
          <Filtro rotulo="Todas" ativo={!epoca} onPress={() => setEpoca(null)} />
          {EPOCAS.map((e) => (
            <Filtro key={e.id} rotulo={e.nome} ativo={epoca === e.id} onPress={() => setEpoca(epoca === e.id ? null : e.id)} />
          ))}
        </View>
        <View className="flex-row flex-wrap items-center gap-2">
          <Text className="text-xs font-extrabold uppercase text-slate-600 dark:text-slate-400">Onde</Text>
          <Filtro rotulo="Todos" ativo={!regiao} onPress={() => setRegiao(null)} />
          {REGIOES.filter((r) => KNOWLEDGE_GAMES.some((g) => g.regiao === r.id)).map((r) => (
            <Filtro key={r.id} rotulo={r.nome} ativo={regiao === r.id} onPress={() => setRegiao(regiao === r.id ? null : r.id)} />
          ))}
        </View>
      </View>

      {prontos.length === 0 && <Text className="text-sm text-slate-600 dark:text-slate-400">Nenhum jogo com esses filtros ainda.</Text>}
      {agrupar === 'mapa' && <MapaDosJogos jogos={prontos} pais={pais} setPais={setPais} />}
      {agrupar !== 'mapa' &&
        grupos
          .filter((gr) => gr.jogos.length > 0)
          .map((gr) => (
            <View key={gr.id} className="gap-2">
              <View>
                <Text className="text-base font-extrabold text-slate-900 dark:text-white">{gr.nome}</Text>
                {!!gr.sub && <Text className="text-xs text-slate-600 dark:text-slate-400">{gr.sub}</Text>}
              </View>
              <View className="flex-row flex-wrap justify-between gap-y-3">
                {gr.jogos.map((g) => (
                  <CartaoJogo key={g.id} g={g} />
                ))}
              </View>
            </View>
          ))}

      {breve.length > 0 && (
        <Card className="gap-2">
          <Text className="text-base font-extrabold text-slate-900 dark:text-white">Em breve</Text>
          <View className="flex-row flex-wrap gap-2">
            {breve.map((g) => (
              <View key={g.id} className="flex-row items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 dark:bg-slate-800">
                <IconeJogo id={g.id} tamanho={22} />
                <Text className="text-xs font-bold text-slate-700 dark:text-slate-200">{g.name}</Text>
              </View>
            ))}
          </View>
        </Card>
      )}
    </View>
  );
}

/** Os jogos no mapa-múndi: cada país com os jogos que nasceram ou foram criados ali. */
function MapaDosJogos({ jogos, pais, setPais }: { jogos: KnowledgeGame[]; pais: string | null; setPais: (p: string | null) => void }) {
  const contagem: Record<string, number> = {};
  for (const g of jogos) for (const iso of PAISES_DO_JOGO[g.id] ?? []) contagem[iso] = (contagem[iso] ?? 0) + 1;
  const doPais = pais ? jogos.filter((g) => PAISES_DO_JOGO[g.id]?.includes(pais)) : [];
  return (
    <View className="gap-3">
      <MapaArea contagem={contagem} cor="#0D9488" selecionado={pais} aoEscolher={setPais} unidade={['jogo', 'jogos']} />
      {pais ? (
        <View className="gap-2">
          <Text className="text-base font-extrabold text-slate-900 dark:text-white">De {nomeDoPais(pais)}</Text>
          <View className="flex-row flex-wrap justify-between gap-y-3">
            {doPais.map((g) => (
              <CartaoJogo key={g.id} g={g} />
            ))}
          </View>
          {doPais.map((g) => (
            <Text key={g.id} className="text-xs text-slate-600 dark:text-slate-400">
              <Text className="font-bold">{g.name}:</Text> {g.where}
            </Text>
          ))}
        </View>
      ) : (
        <Text className="text-sm text-slate-600 dark:text-slate-400">Toque num país para ver os jogos que nasceram ou foram criados ali.</Text>
      )}
    </View>
  );
}
