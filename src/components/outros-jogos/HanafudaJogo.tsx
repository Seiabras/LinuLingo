import { useState } from 'react';
import { Image, Pressable, Text, View, useWindowDimensions } from 'react-native';
import { Collapsible } from '@/components/ui';
import { Surge } from '@/components/jogos/anim';
import { FaixaResultado, Instrucao, LinuPensando, PlacarJogo, useLinuJoga, useXpDeVitoria } from '@/components/jogos/ui';
import { Linu } from '@/components/Linu';
import { IMAGENS_HANAFUDA } from '@/data/hanafuda-cartas';
import {
  BARALHO_HANA,
  MESES_HANA,
  carta,
  decidir,
  decisaoDoLinu,
  escolhaDoMonteDoLinu,
  escolherDoMonte,
  jogadaDoLinu,
  jogarDaMao,
  novaRodada,
  paresNaMesa,
  pontosDe,
  yakusDe,
  type EstadoHana,
  type Jogador,
  type TipoCarta,
} from '@/services/hanafuda-engine';
import * as haptics from '@/services/haptics';

const PROPORCAO = 240 / 147; // altura ÷ largura das imagens
const VOCE: Jogador = 0;
const LINU: Jogador = 1;
const TIPOS: { tipo: TipoCarta; nome: string }[] = [
  { tipo: 'luz', nome: 'Luzes' },
  { tipo: 'animal', nome: 'Animais' },
  { tipo: 'fita', nome: 'Fitas' },
  { tipo: 'comum', nome: 'Comuns' },
];

const descreve = (id: number) => {
  const c = carta(id);
  return `${c.nome} (${MESES_HANA[c.mes - 1].planta}, mês ${c.mes})`;
};

/** Uma carta de frente, com a imagem do baralho. */
function Carta({ id, largura, destaque, apagada, onPress }: { id: number; largura: number; destaque?: boolean; apagada?: boolean; onPress?: () => void }) {
  const corpo = (
    <View
      style={{ width: largura, height: largura * PROPORCAO, opacity: apagada ? 0.45 : 1 }}
      className={`overflow-hidden rounded-md ${destaque ? 'border-2 border-emerald-500 dark:border-emerald-400' : ''}`}
    >
      <Image source={IMAGENS_HANAFUDA[id]} style={{ width: '100%', height: '100%' }} resizeMode="contain" accessibilityIgnoresInvertColors />
    </View>
  );
  if (!onPress) return <View accessibilityLabel={descreve(id)}>{corpo}</View>;
  return (
    <Pressable accessibilityRole="button" accessibilityLabel={descreve(id)} onPress={onPress} className="active:opacity-70">
      {corpo}
    </Pressable>
  );
}

/** O verso da carta: vermelho-escuro, como os baralhos tradicionais. */
function Verso({ largura }: { largura: number }) {
  return (
    <View style={{ width: largura, height: largura * PROPORCAO }} className="items-center justify-center rounded-md border-2 border-slate-900 bg-red-900">
      <View style={{ width: largura * 0.55, height: largura * 0.55 * PROPORCAO }} className="rounded-sm border border-red-300/50" />
    </View>
  );
}

/** As cartas que alguém já levou, separadas por tipo, e os yaku que ele tem. */
function Capturas({ ids, quem, largura }: { ids: number[]; quem: string; largura: number }) {
  const yakus = yakusDe(ids);
  return (
    <View className="gap-1 rounded-xl bg-slate-50 p-2 dark:bg-slate-800/60">
      <Text className="text-xs font-bold text-slate-700 dark:text-slate-200">
        {quem} levou {ids.length} {ids.length === 1 ? 'carta' : 'cartas'}
        {yakus.length > 0 ? ` · ${pontosDe(ids)} pts` : ''}
      </Text>
      {ids.length > 0 && (
        <View className="flex-row flex-wrap gap-x-3 gap-y-1">
          {TIPOS.map(({ tipo, nome }) => {
            const doTipo = ids.filter((id) => carta(id).tipo === tipo);
            if (doTipo.length === 0) return null;
            return (
              <View key={tipo} className="gap-0.5">
                <Text className="text-[10px] font-semibold text-slate-600 dark:text-slate-400">
                  {nome} ({doTipo.length})
                </Text>
                <View className="flex-row">
                  {doTipo.map((id, k) => (
                    <View key={id} style={{ marginLeft: k === 0 ? 0 : -largura * 0.45 }}>
                      <Surge>
                        <Carta id={id} largura={largura} />
                      </Surge>
                    </View>
                  ))}
                </View>
              </View>
            );
          })}
        </View>
      )}
      {yakus.length > 0 && (
        <View className="flex-row flex-wrap gap-1">
          {yakus.map((y) => (
            <Text key={y.id} className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-900 dark:bg-amber-900/60 dark:text-amber-100">
              {y.nome} ({y.jp}) · {y.pontos}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
}

interface Partida {
  rodadas: number;
  rodada: number;
  placar: [number, number];
}

const rng = () => Math.random();

/**
 * Hanafuda, no jogo Koi-Koi, contra o Linu (motor em `services/hanafuda-engine.ts`). Você joga uma
 * carta da mão, leva os pares do mesmo mês e vira o monte; ao formar um yaku, escolhe “koi-koi”
 * (continuar) ou parar e marcar. A partida tem 3, 6 ou 12 rodadas (a tradicional: um ano).
 */
export default function HanafudaJogo() {
  const { width } = useWindowDimensions();
  const estreito = width < 480;
  const lCarta = estreito ? 40 : 52;
  const lMao = estreito ? 48 : 60;
  const lMini = estreito ? 22 : 26;

  const [est, setEstado] = useState<EstadoHana>(() => novaRodada(rng, VOCE));
  // a primeira rodada também pode acabar já na distribuição (teshi ou kuttsuki): conta no placar
  const [partida, setPartida] = useState<Partida>(() => {
    const placar: [number, number] = [0, 0];
    if (est.resultado?.vencedor != null) placar[est.resultado.vencedor] += est.resultado.pontos;
    return { rodadas: 3, rodada: 1, placar };
  });
  const [escolhendo, setEscolhendo] = useState<number | null>(null); // carta da mão com 2 pares na mesa
  const [aviso, setAviso] = useState<string | null>(null);
  const [verCartas, setVerCartas] = useState(false);
  const xp = useXpDeVitoria('hanafuda');

  /**
   * Troca o estado da rodada; quando ela acaba, soma os pontos no placar (uma vez só) e dá o XP se
   * você venceu a partida. `base` é a partida em que a rodada conta (a nova, ao dar as cartas).
   */
  const setEst = (novo: EstadoHana, base: Partida = partida) => {
    setEstado(novo);
    if (novo.fase !== 'fim' || !novo.resultado) {
      if (base !== partida) setPartida(base);
      return;
    }
    const r = novo.resultado;
    const placar: [number, number] = [...base.placar];
    if (r.vencedor !== null) placar[r.vencedor] += r.pontos;
    setPartida({ ...base, placar });
    if (base.rodada >= base.rodadas && placar[VOCE] > placar[LINU]) xp.dar();
  };
  const fimDaPartida = est.fase === 'fim' && partida.rodada >= partida.rodadas;

  const vezDoLinu = est.vez === LINU && est.fase !== 'fim';
  // useLinuJoga guarda sempre a versão mais nova desta função, então ela lê o `est` atual
  const jogarLinu = () => {
    const e = est;
    if (e.vez !== LINU || e.fase === 'fim') return;
    if (e.fase === 'jogar') {
      const j = jogadaDoLinu(e);
      setEst(jogarDaMao(e, j.carta, j.alvo));
    } else if (e.fase === 'escolherMonte') setEst(escolherDoMonte(e, escolhaDoMonteDoLinu(e)));
    else {
      const d = decisaoDoLinu(e);
      setAviso(d === 'koikoi' ? 'O Linu fez um yaku e disse “koi-koi!”: ele vai continuar. Se você fizer um yaku antes dele, marca o dobro.' : null);
      setEst(decidir(e, d));
    }
  };
  const pensando = useLinuJoga(vezDoLinu, jogarLinu, 900, `${est.fase}-${est.maos[LINU].length}-${est.monte.length}`);

  const jogar = (id: number, alvo?: number) => {
    haptics.tapLight();
    setAviso(null);
    setEscolhendo(null);
    setEst(jogarDaMao(est, id, alvo));
  };
  const tocarMao = (id: number) => {
    if (est.vez !== VOCE || est.fase !== 'jogar') return;
    if (escolhendo === id) return setEscolhendo(null);
    if (paresNaMesa(est, id).length === 2) return setEscolhendo(id);
    jogar(id);
  };
  const tocarMesa = (id: number) => {
    if (est.vez !== VOCE) return;
    if (est.fase === 'jogar' && escolhendo !== null && paresNaMesa(est, escolhendo).includes(id)) return jogar(escolhendo, id);
    if (est.fase === 'escolherMonte' && est.pendente !== null && paresNaMesa(est, est.pendente).includes(id)) {
      haptics.tapLight();
      setEst(escolherDoMonte(est, id));
    }
  };

  const proximaRodada = () => {
    const r = est.resultado;
    // quem ganhou a rodada dá as cartas na próxima; no empate (oya-ken) o oya continua
    const oya = r?.vencedor ?? est.oya;
    setAviso(null);
    setEscolhendo(null);
    setEst(novaRodada(rng, oya), { ...partida, rodada: partida.rodada + 1 });
  };
  const novaPartida = (rodadas = partida.rodadas) => {
    xp.zerar();
    setAviso(null);
    setEscolhendo(null);
    setEst(novaRodada(rng, VOCE), { rodadas, rodada: 1, placar: [0, 0] });
  };

  // os pares possíveis, para destacar
  const opcoesMesa = est.vez === VOCE && est.fase === 'escolherMonte' && est.pendente !== null ? paresNaMesa(est, est.pendente) : escolhendo !== null ? paresNaMesa(est, escolhendo) : [];
  const temPar = (id: number) => est.vez === VOCE && est.fase === 'jogar' && paresNaMesa(est, id).length > 0;

  const u = est.ultima;
  const quemFoi = u ? (u.jogador === VOCE ? 'Você' : 'O Linu') : '';
  const narracao = u
    ? `${quemFoi} jogou ${carta(u.mao).nome.toLowerCase()} (${MESES_HANA[carta(u.mao).mes - 1].planta.toLowerCase()})${u.levouMao.length ? ` e levou ${u.levouMao.length - 1}` : ', sem par'}${u.virada !== null ? `; virou ${carta(u.virada).nome.toLowerCase()}${u.levouMonte.length ? ` e levou ${u.levouMonte.length - 1}` : ''}` : ''}.`
    : '';

  const r = est.resultado;
  const textoFim = (() => {
    if (!r) return '';
    const quem = r.vencedor === VOCE ? 'Você' : 'O Linu';
    if (r.motivo === 'teshi') return `${quem} recebeu as 4 cartas de um mês (teshi): 6 pontos.`;
    if (r.motivo === 'kuttsuki') return `${quem} recebeu 4 pares (kuttsuki): 6 pontos.`;
    if (r.motivo === 'oya-ken') return `As cartas acabaram sem ninguém parar: ${r.vencedor === VOCE ? 'você deu' : 'o Linu deu'} as cartas e ganha 1 ponto.`;
    return `${quem} parou com ${r.yakus.map((y) => y.nome.toLowerCase()).join(', ')}: ${r.pontos} ${r.pontos === 1 ? 'ponto' : 'pontos'}${r.dobros.length ? ` (${r.dobros.join('; ')})` : ''}.`;
  })();

  const instrucao = (() => {
    if (est.fase === 'fim') return null;
    if (est.vez === LINU) return null;
    if (est.fase === 'decidir') return 'Você fez um yaku! Pare e marque, ou diga “koi-koi” para tentar mais.';
    if (est.fase === 'escolherMonte') return `Você virou ${descreve(est.pendente!)}. Há duas do mesmo mês na mesa: toque em qual levar.`;
    if (escolhendo !== null) return 'Há duas cartas desse mês na mesa: toque em qual levar (ou na carta da mão de novo, para trocar).';
    return 'Sua vez: toque numa carta da sua mão. As de borda verde têm par na mesa.';
  })();

  return (
    <View className="w-full gap-2">
      <PlacarJogo
        jogadores={[
          { id: VOCE, nome: 'Você', amostra: <Text>🙂</Text>, extra: `${partida.placar[VOCE]} pts` },
          { id: LINU, nome: 'Linu', amostra: <Linu mood="feliz" size={18} animate={false} />, extra: `${partida.placar[LINU]} pts` },
        ]}
        vez={est.vez}
        terminou={est.fase === 'fim'}
      />
      <Text className="text-center text-xs font-semibold text-slate-600 dark:text-slate-400">
        Rodada {partida.rodada} de {partida.rodadas} · {est.oya === VOCE ? 'você deu as cartas' : 'o Linu deu as cartas'}
        {est.koi[VOCE] > 0 ? ' · você disse koi-koi' : ''}
        {est.koi[LINU] > 0 ? ' · o Linu disse koi-koi' : ''}
      </Text>

      {/* a mão do Linu, virada */}
      <View className="flex-row justify-center">
        {est.maos[LINU].map((id, k) => (
          <View key={id} style={{ marginLeft: k === 0 ? 0 : -lMini * 0.35 }}>
            <Verso largura={lMini} />
          </View>
        ))}
      </View>
      <Capturas ids={est.capturas[LINU]} quem="O Linu" largura={lMini} />

      {/* a mesa e o monte */}
      <View className="flex-row items-start gap-2 rounded-2xl bg-emerald-800 p-2 dark:bg-emerald-950">
        <View className="items-center gap-0.5">
          {est.monte.length > 0 ? <Verso largura={lCarta} /> : <View style={{ width: lCarta, height: lCarta * PROPORCAO }} />}
          <Text className="text-[10px] font-bold text-emerald-50">monte {est.monte.length}</Text>
          {est.pendente !== null && (
            <Surge>
              <Carta id={est.pendente} largura={lCarta} destaque />
            </Surge>
          )}
        </View>
        <View className="flex-1 flex-row flex-wrap gap-1">
          {est.campo.map((id) => (
            <Surge key={id}>
              <Carta
                id={id}
                largura={lCarta}
                destaque={opcoesMesa.includes(id)}
                apagada={opcoesMesa.length > 0 && !opcoesMesa.includes(id)}
                onPress={opcoesMesa.includes(id) ? () => tocarMesa(id) : undefined}
              />
            </Surge>
          ))}
          {est.campo.length === 0 && <Text className="p-2 text-xs text-emerald-50">A mesa está vazia.</Text>}
        </View>
      </View>

      {pensando ? (
        <LinuPensando visivel />
      ) : est.fase === 'fim' ? (
        <FaixaResultado texto={textoFim} tom={r?.vencedor === VOCE ? 'vitoria' : r?.vencedor === LINU ? 'derrota' : 'empate'} />
      ) : instrucao ? (
        <Instrucao>{instrucao}</Instrucao>
      ) : (
        <Instrucao>{narracao || 'Vez do Linu.'}</Instrucao>
      )}
      {!!narracao && est.fase !== 'fim' && !pensando && instrucao && <Text className="text-center text-[11px] text-slate-500 dark:text-slate-400">{narracao}</Text>}
      {!!aviso && <Text className="rounded-xl bg-amber-100 p-2 text-center text-xs font-semibold text-amber-900 dark:bg-amber-900/60 dark:text-amber-100">{aviso}</Text>}

      {est.fase === 'decidir' && est.vez === VOCE && (
        <View className="gap-2 rounded-2xl border-2 border-amber-400 bg-amber-50 p-3 dark:bg-amber-950/50">
          <Text className="text-sm font-bold text-slate-900 dark:text-white">
            Seus yaku: {yakusDe(est.capturas[VOCE]).map((y) => `${y.nome} (${y.pontos})`).join(', ')} = {pontosDe(est.capturas[VOCE])} pts
          </Text>
          <View className="flex-row flex-wrap gap-2">
            <Pressable
              accessibilityRole="button"
              onPress={() => {
                haptics.tapLight();
                setEst(decidir(est, 'parar'));
              }}
              className="flex-1 items-center rounded-xl bg-emerald-600 px-3 py-2 active:opacity-80"
            >
              <Text className="font-extrabold text-white">Parar e marcar</Text>
            </Pressable>
            <Pressable
              accessibilityRole="button"
              onPress={() => {
                haptics.tapLight();
                setEst(decidir(est, 'koikoi'));
              }}
              className="flex-1 items-center rounded-xl bg-rose-600 px-3 py-2 active:opacity-80"
            >
              <Text className="font-extrabold text-white">Koi-koi! (continuar)</Text>
            </Pressable>
          </View>
          <Text className="text-xs text-slate-600 dark:text-slate-300">Se continuar e o Linu fizer um yaku antes de você, ele marca o dobro e você não marca nada.</Text>
        </View>
      )}

      <Capturas ids={est.capturas[VOCE]} quem="Você" largura={lMini} />

      {/* a sua mão */}
      <View className="flex-row flex-wrap justify-center gap-1.5">
        {est.maos[VOCE].map((id) => (
          <Surge key={id}>
            <View style={{ transform: [{ translateY: escolhendo === id ? -8 : 0 }] }}>
              <Carta id={id} largura={lMao} destaque={temPar(id) || escolhendo === id} onPress={est.vez === VOCE && est.fase === 'jogar' ? () => tocarMao(id) : undefined} />
            </View>
          </Surge>
        ))}
      </View>

      <View className="flex-row flex-wrap items-center justify-center gap-2 pt-1">
        {est.fase === 'fim' && !fimDaPartida && (
          <Pressable accessibilityRole="button" onPress={proximaRodada} className="rounded-full bg-conecta px-4 py-2 active:opacity-80 dark:bg-blue-500">
            <Text className="font-bold text-white">Próxima rodada</Text>
          </Pressable>
        )}
        {fimDaPartida && (
          <Text className="w-full text-center text-sm font-extrabold text-slate-900 dark:text-white">
            Fim da partida: {partida.placar[VOCE] > partida.placar[LINU] ? 'você venceu!' : partida.placar[VOCE] < partida.placar[LINU] ? 'o Linu venceu.' : 'empate.'} ({partida.placar[VOCE]} × {partida.placar[LINU]})
          </Text>
        )}
        <Text className="text-xs font-bold text-slate-600 dark:text-slate-400">Nova partida:</Text>
        {[3, 6, 12].map((n) => (
          <Pressable
            key={n}
            accessibilityRole="button"
            accessibilityLabel={`Nova partida de ${n} rodadas`}
            onPress={() => novaPartida(n)}
            className={`rounded-full px-3 py-1.5 ${partida.rodadas === n ? 'bg-slate-700 dark:bg-slate-200' : 'bg-slate-100 dark:bg-slate-800'}`}
          >
            <Text className={`text-xs font-bold ${partida.rodadas === n ? 'text-white dark:text-slate-900' : 'text-slate-700 dark:text-slate-200'}`}>
              {n === 12 ? '12 (um ano)' : `${n} rodadas`}
            </Text>
          </Pressable>
        ))}
      </View>

      <Collapsible title="As 48 cartas, mês a mês" open={verCartas} onToggle={() => setVerCartas((v) => !v)}>
        <View className="gap-2 pt-1">
          {MESES_HANA.map((m) => (
            <View key={m.mes} className="flex-row items-center gap-2">
              <View className="w-24">
                <Text className="text-xs font-bold text-slate-900 dark:text-white">
                  {m.mes}. {m.planta}
                </Text>
                <Text className="text-[10px] italic text-slate-600 dark:text-slate-400">{m.jp}</Text>
              </View>
              {BARALHO_HANA.filter((c) => c.mes === m.mes).map((c) => (
                <View key={c.id} className="items-center" style={{ width: lCarta + 6 }}>
                  <Carta id={c.id} largura={lCarta} />
                  <Text className="text-center text-[9px] text-slate-600 dark:text-slate-400" numberOfLines={2}>
                    {c.nome}
                  </Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </Collapsible>
    </View>
  );
}
