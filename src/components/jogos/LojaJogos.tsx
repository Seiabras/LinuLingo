import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { ITENS_LOJA, PACOTES, itensDoJogo, precoAgora, type ItemLoja } from '@/data/loja-jogos';
import { opcoesDoJogo } from '@/data/opcoes-jogos';
import { EXERCITOS } from '@/data/exercitos-jogos';
import { KNOWLEDGE_GAMES } from '@/data/jogos-conhecimento';
import { TEMAS_JOGO, type TemaJogo, type TemaJogoId } from '@/data/temas-jogos';
import { useLojaJogos } from '@/services/loja-jogos';
import { useJogosPrefs } from '@/services/jogos-prefs';
import * as haptics from '@/services/haptics';
import { Figura } from './Figura';
import { IconeJogo } from './IconeJogo';
import { FundoTabuleiro, PadraoDaMoldura, PecaFeitio } from './visual';

/** Um pedacinho do tabuleiro do tema (3×3 casas com a textura e a moldura com o padrão). */
export function AmostraTema({ t, tamanho = 54 }: { t: TemaJogo; tamanho?: number }) {
  const borda = 7;
  const casa = (tamanho - borda * 2) / 3;
  return (
    <View style={{ width: tamanho, height: tamanho, borderRadius: 8, overflow: 'hidden', backgroundColor: t.moldura }}>
      {t.padrao && t.padraoCores && <PadraoDaMoldura largura={tamanho} altura={tamanho} borda={borda} padrao={t.padrao} cores={t.padraoCores} />}
      <View style={{ position: 'absolute', left: borda, top: borda, width: casa * 3, height: casa * 3 }}>
        <FundoTabuleiro cols={3} rows={3} casa={casa} tema={t} />
      </View>
    </View>
  );
}

/** Prévia de um item da loja (tabuleiro, exército ou peça de jogo). */
export function PreviaItem({ item, tamanho = 54 }: { item: ItemLoja; tamanho?: number }) {
  const [tipo, id] = item.id.split(':') as [string, string];
  if (tipo === 'tabuleiro') return <AmostraTema t={TEMAS_JOGO[id as TemaJogoId]} tamanho={tamanho} />;
  if (tipo === 'jogador') {
    const e = EXERCITOS.find((x) => x.id === id)!;
    return (
      <View
        style={{
          width: tamanho,
          height: tamanho,
          borderRadius: 8,
          backgroundColor: '#E9DFC8',
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}
      >
        <Figura d={e.pecas.n.d} tamanho={tamanho * 0.55} cor="w" />
        <Figura d={e.pecas.k.d} tamanho={tamanho * 0.55} cor="b" />
      </View>
    );
  }
  const s = item.skin!;
  const emblema = s.emblemaDe ? EXERCITOS.find((e) => e.id === s.emblemaDe)?.pecas.p.d : undefined;
  return (
    <View
      style={{
        width: tamanho,
        height: tamanho,
        borderRadius: 8,
        backgroundColor: '#E9DFC8',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
      }}
    >
      {s.pecas.map((p, i) => (
        <PecaFeitio key={i} tamanho={tamanho * 0.46} feitio={p.feitio} cor={p.cor} emblema={emblema} id={`${item.id}-${i}`} />
      ))}
    </View>
  );
}

type Tela =
  { t: 'inicio' } | { t: 'pacotes' } | { t: 'pacote'; id: string } | { t: 'jogo'; jogo: string } | { t: 'categoria'; jogo: string; cat: 'pecas' | 'tabuleiro' };

const NOME_PACOTE = (id: string | undefined) => (id ? (PACOTES.find((p) => p.id === `pacote:${id}`)?.nome ?? id) : 'Avulsos');
// só os jogos que têm algo para comprar (o oware, de covas, não usa os temas de tabuleiro)
const JOGOS = KNOWLEDGE_GAMES.filter((g) => g.status === 'pronto' && (opcoesDoJogo(g.id).tabuleiro || itensDoJogo(g.id, 'pecas').length > 0));

/** Uma linha que leva ao próximo nível da loja. */
function Linha({ titulo, sub, icone, onPress }: { titulo: string; sub?: string; icone?: React.ReactNode; onPress: () => void }) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={() => {
        haptics.tapLight();
        onPress();
      }}
      className="flex-row items-center gap-3 rounded-2xl bg-white p-3 active:bg-slate-100 dark:bg-slate-900 dark:active:bg-slate-800"
    >
      {icone}
      <View className="flex-1">
        <Text className="text-base font-extrabold text-slate-900 dark:text-white">{titulo}</Text>
        {sub && <Text className="text-xs text-slate-600 dark:text-slate-400">{sub}</Text>}
      </View>
      <ChevronRight size={18} color="#64748B" />
    </Pressable>
  );
}

/**
 * Loja dos jogos (pedido do dono, 11/10/2026), em níveis, como numa loja de verdade:
 *   Jogos › Pacotes › Brasil (tudo do tema junto, mais barato), ou
 *   Jogos › Xadrez › Peças › Brasil (uma peça só, de um jogo, agrupada pelo tema).
 */
export function LojaJogos() {
  const loja = useLojaJogos();
  const [, mudar] = useJogosPrefs();
  const [tela, setTela] = useState<Tela>({ t: 'inicio' });

  const nomeJogo = (id: string) => KNOWLEDGE_GAMES.find((g) => g.id === id)?.name ?? id;
  const trilha: { rotulo: string; ir: Tela }[] = [{ rotulo: 'Jogos', ir: { t: 'inicio' } }];
  if (tela.t === 'pacotes' || tela.t === 'pacote') trilha.push({ rotulo: 'Pacotes', ir: { t: 'pacotes' } });
  if (tela.t === 'pacote') trilha.push({ rotulo: PACOTES.find((p) => p.id === tela.id)!.nome, ir: tela });
  if (tela.t === 'jogo' || tela.t === 'categoria') trilha.push({ rotulo: nomeJogo(tela.jogo), ir: { t: 'jogo', jogo: tela.jogo } });
  if (tela.t === 'categoria') trilha.push({ rotulo: tela.cat === 'pecas' ? 'Peças' : 'Tabuleiros', ir: tela });

  const botaoComprar = (id: string) => {
    const preco = precoAgora(id, loja.compras);
    const da = loja.krill >= preco;
    return (
      <Pressable
        accessibilityRole="button"
        disabled={!da}
        onPress={async () => {
          if ((await loja.comprar(id)) && id.startsWith('tabuleiro:')) mudar({ tema: id.split(':')[1] as TemaJogoId });
        }}
        className={`self-start rounded-full px-4 py-2 ${da ? 'bg-orange-500' : 'bg-slate-300 dark:bg-slate-700'}`}
      >
        <Text className="text-sm font-extrabold text-white">{da ? `Comprar por 🦐 ${preco}` : `Faltam 🦐 ${preco - loja.krill}`}</Text>
      </Pressable>
    );
  };

  const cartaoItem = (i: ItemLoja) => {
    const tem = loja.tem.has(i.id);
    const ex = i.tipo === 'jogador' ? EXERCITOS.find((e) => `jogador:${e.id}` === i.id) : undefined;
    return (
      <View key={i.id} className="flex-row gap-3 rounded-2xl bg-white p-3 dark:bg-slate-900">
        <PreviaItem item={i} tamanho={76} />
        <View className="flex-1 gap-1">
          <Text className="text-base font-extrabold text-slate-900 dark:text-white">{i.nome}</Text>
          <Text className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            {i.tipo === 'tabuleiro'
              ? 'Tabuleiro (vale em todos os jogos)'
              : i.tipo === 'jogador'
                ? 'Exército de um jogador (xadrez, damas, hnefatafl)'
                : `Peças do ${nomeJogo(i.skin!.jogo).toLowerCase()}`}{' '}
            · {i.origem}
          </Text>
          <Text className="text-sm text-slate-700 dark:text-slate-300">{i.sobre}</Text>
          {ex && (
            <Text className="text-xs text-slate-600 dark:text-slate-400">
              Rei: {ex.pecas.k.nome} · dama: {ex.pecas.q.nome} · torre: {ex.pecas.r.nome} · bispo: {ex.pecas.b.nome} · cavalo: {ex.pecas.n.nome} · peão:{' '}
              {ex.pecas.p.nome}
            </Text>
          )}
          {tem ? <Text className="text-sm font-bold text-emerald-700 dark:text-emerald-400">✓ Já é seu: escolha em “Personalizar”.</Text> : botaoComprar(i.id)}
        </View>
      </View>
    );
  };

  /** itens agrupados pelo pacote do tema (os avulsos no fim) */
  const porPacote = (itens: ItemLoja[]) => {
    const grupos = new Map<string, ItemLoja[]>();
    for (const i of itens) {
      const k = i.pacote ?? '~';
      if (!grupos.has(k)) grupos.set(k, []);
      grupos.get(k)!.push(i);
    }
    return [...grupos.entries()]
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([k, lista]) => (
        <View key={k} className="gap-2">
          <Text className="text-sm font-extrabold uppercase tracking-wide text-slate-600 dark:text-slate-300">{NOME_PACOTE(k === '~' ? undefined : k)}</Text>
          {lista.map(cartaoItem)}
        </View>
      ));
  };

  return (
    <View className="gap-3">
      <View className="flex-row items-center justify-between">
        <View className="flex-1 flex-row flex-wrap items-center">
          {trilha.map((p, k) => (
            <View key={k} className="flex-row items-center">
              {k > 0 && <Text className="mx-1 text-slate-400">›</Text>}
              <Pressable onPress={() => setTela(p.ir)}>
                <Text className={`text-sm font-extrabold ${k === trilha.length - 1 ? 'text-slate-900 dark:text-white' : 'text-conecta dark:text-blue-400'}`}>
                  {p.rotulo}
                </Text>
              </Pressable>
            </View>
          ))}
        </View>
        <View className="rounded-full bg-orange-100 px-3 py-1 dark:bg-orange-950">
          <Text className="font-extrabold text-orange-700 dark:text-orange-300">🦐 {loja.krill}</Text>
        </View>
      </View>

      {tela.t === 'inicio' && (
        <View className="gap-2">
          <Linha
            titulo="Pacotes"
            sub="Tudo de um tema junto (Brasil, Japão, Piratas…), mais barato."
            icone={<IconeJogo id="pacote" tamanho={40} />}
            onPress={() => setTela({ t: 'pacotes' })}
          />
          {JOGOS.map((g) => (
            <Linha
              key={g.id}
              titulo={g.name}
              sub={[itensDoJogo(g.id, 'pecas').length > 0 && 'Peças', opcoesDoJogo(g.id).tabuleiro && 'tabuleiros']
                .filter(Boolean)
                .join(' e ')
                .replace(/^t/, 'T')}
              icone={<IconeJogo id={g.id} tamanho={40} />}
              onPress={() => setTela({ t: 'jogo', jogo: g.id })}
            />
          ))}
        </View>
      )}

      {tela.t === 'pacotes' &&
        PACOTES.map((p) => {
          const completo = p.itens.every((i) => loja.tem.has(i));
          return (
            <Linha
              key={p.id}
              titulo={p.nome}
              sub={completo ? '✓ completo' : `${p.itens.length} itens · 🦐 ${precoAgora(p.id, loja.compras)}`}
              icone={<PreviaItem item={ITENS_LOJA.find((i) => i.id === p.itens[0])!} tamanho={44} />}
              onPress={() => setTela({ t: 'pacote', id: p.id })}
            />
          );
        })}

      {tela.t === 'pacote' &&
        (() => {
          const p = PACOTES.find((x) => x.id === tela.id)!;
          const itens = p.itens.map((i) => ITENS_LOJA.find((x) => x.id === i)!);
          const separado = itens.filter((i) => !loja.tem.has(i.id)).reduce((s, i) => s + i.preco, 0);
          const completo = itens.every((i) => loja.tem.has(i.id));
          return (
            <View className="gap-3">
              <View className="gap-2 rounded-2xl border-2 border-amber-300 bg-amber-50 p-3 dark:border-amber-700 dark:bg-amber-950/30">
                <Text className="text-lg font-extrabold text-slate-900 dark:text-white">Pacote {p.nome}</Text>
                <Text className="text-sm text-slate-700 dark:text-slate-300">{p.sobre}</Text>
                {completo ? (
                  <Text className="text-sm font-extrabold text-emerald-700 dark:text-emerald-400">✓ Pacote completo</Text>
                ) : (
                  <>
                    <Text className="text-sm font-bold text-emerald-700 dark:text-emerald-400">
                      Separados: 🦐 {separado} · tudo junto: 🦐 {precoAgora(p.id, loja.compras)}
                    </Text>
                    {botaoComprar(p.id)}
                  </>
                )}
              </View>
              <Text className="text-xs font-semibold text-slate-600 dark:text-slate-400">Ou compre só o que quiser:</Text>
              {itens.map(cartaoItem)}
            </View>
          );
        })()}

      {tela.t === 'jogo' && (
        <View className="gap-2">
          {itensDoJogo(tela.jogo, 'pecas').length > 0 && (
            <Linha
              titulo="Peças"
              sub="Exércitos dos jogadores e peças especiais deste jogo"
              icone={<IconeJogo id={tela.jogo} tamanho={40} />}
              onPress={() => setTela({ t: 'categoria', jogo: tela.jogo, cat: 'pecas' })}
            />
          )}
          {opcoesDoJogo(tela.jogo).tabuleiro && (
            <Linha
              titulo="Tabuleiros"
              sub="Cores, textura, moldura e som (valem em todos os jogos de tabuleiro)"
              icone={<AmostraTema t={TEMAS_JOGO.copacabana} tamanho={40} />}
              onPress={() => setTela({ t: 'categoria', jogo: tela.jogo, cat: 'tabuleiro' })}
            />
          )}
        </View>
      )}

      {tela.t === 'categoria' && porPacote(itensDoJogo(tela.jogo, tela.cat))}

      <Text className="text-xs text-slate-600 dark:text-slate-400">O krill vem do XP, o mesmo da loja de roupinhas do Linu. Sem dinheiro real.</Text>
    </View>
  );
}
