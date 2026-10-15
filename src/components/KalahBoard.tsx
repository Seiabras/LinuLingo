import { useCallback, useMemo } from 'react';
import { Text, View } from 'react-native';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { BUSCA_KALAH, escolherLance, NIVEIS } from '@/services/jogos-ia';
import { casasDe, createInitialState, DEPOSITO, jogar as semear, lancesLegais, type Jogador, type KalahState } from '@/services/kalah-engine';
import { Cova, Numero, Sementes, useVisualMancala } from './jogos/mancala';
import { useTemaJogo } from './jogos/tema';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

const NOME: Record<Jogador, string> = { 0: 'Jogador 1', 1: 'Jogador 2' };
const inicio = () => createInitialState();

/**
 * Mancala (Kalah), ver `kalah-engine.ts`. A fileira de baixo e o depósito da direita são do jogador 1;
 * a de cima e o depósito da esquerda, do jogador 2: a semeadura dá a volta no sentido anti-horário na
 * tela. Quem termina no próprio depósito joga de novo. A dois no mesmo aparelho ou contra o Linu (ele
 * fica com a fileira de cima e mostra cada semeadura, também as da vez extra).
 */
export function KalahBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const { tabua, semente } = useVisualMancala('kalah');
  // 6 casas, 2 depósitos e as folgas cabem em ~9,6 casas de largura
  const casa = useCasa(9.6, 54);
  const h = useHistorico<KalahState>(inicio, 'kalah');
  const state = h.state;
  const anterior = h.pilha.length > 1 ? h.pilha[h.pilha.length - 2]! : null;
  const xp = useXpDeVitoria('kalah');

  const contraLinu = prefs.adversario === 'linu';
  const vezDoLinu = contraLinu && state.turn === 1 && state.winner === null;
  const lances = useMemo(() => lancesLegais(state), [state]);

  const jogar = useCallback(
    (i: number) => {
      const next = semear(state, i);
      if (next === state) return;
      haptics.tapLight();
      h.jogar(next, next.ultimo?.captura !== null && next.ultimo?.captura !== undefined ? 'captura' : tabua.som);
      if (next.winner === 0 || (next.winner === 1 && !contraLinu)) xp.dar();
    },
    [state, h, contraLinu, xp, tabua.som],
  );

  const pensando = useLinuJoga(
    vezDoLinu,
    () => {
      const { prof, ruido } = NIVEIS.kalah[prefs.nivel];
      const m = escolherLance(state, prof, BUSCA_KALAH, ruido);
      if (m !== null) jogar(m);
    },
    650,
    h.lances,
  );

  const recomecar = () => {
    haptics.tapLight();
    h.reiniciar();
    xp.zerar();
  };
  // contra o Linu, desfazer volta até a sua jogada anterior (passando pelas vezes extras dele)
  const desfazer = () => {
    haptics.tapLight();
    if (!contraLinu) return h.desfazer(1);
    let n = 1;
    while (h.pilha.length - 1 - n > 0 && h.pilha[h.pilha.length - 1 - n]!.turn !== 0) n++;
    h.desfazer(n);
  };

  const nomeDe = (p: Jogador) => (contraLinu ? (p === 0 ? 'Você' : 'Linu') : NOME[p]);
  const placar = `${state.covas[6]} × ${state.covas[13]}`;
  const resultado =
    state.winner === null
      ? null
      : state.winner === 'empate'
        ? { texto: `Empate, ${placar}`, tom: 'empate' as const }
        : contraLinu
          ? state.winner === 0
            ? { texto: `Você venceu o Linu, ${placar}!`, tom: 'vitoria' as const }
            : { texto: `O Linu venceu, ${placar}.`, tom: 'derrota' as const }
          : { texto: `${NOME[state.winner]} venceu, ${placar}!`, tom: 'vitoria' as const };

  const ultimo = state.ultimo;
  const ganhou = (i: number) => anterior !== null && state.covas[i]! > anterior.covas[i]!;
  const cova = (i: number) => {
    const n = state.covas[i]!;
    const jogavel = lances.includes(i) && !vezDoLinu && state.winner === null;
    return (
      <Cova
        key={i}
        n={n}
        tamanho={casa}
        jogavel={jogavel}
        destaque={prefs.ultimoLance && ultimo?.de === i ? tema.ultimo : ultimo?.captura === i ? '#E11D48' : jogavel && prefs.dicas ? '#F5D68A' : undefined}
        ganhou={ganhou(i)}
        chave={h.lances}
        rotulo={`Casa com ${n} sementes`}
        tabua={tabua}
        semente={semente}
        onPress={() => jogar(i)}
      />
    );
  };
  const deposito = (p: Jogador) => {
    const i = DEPOSITO[p];
    const n = state.covas[i]!;
    const alto = casa * 2 + 6;
    return (
      <View
        accessibilityLabel={`Depósito de ${nomeDe(p)}: ${n} sementes`}
        style={{ width: casa * 0.95, height: alto, borderRadius: casa / 2, backgroundColor: tabua.cova, borderWidth: 2, borderColor: tabua.borda, alignItems: 'center', justifyContent: 'center', overflow: 'visible' }}
      >
        {/* o depósito é comprido: as sementes vão em duas pilhas, uma em cima da outra (até 24 desenhadas) */}
        <Sementes n={Math.min(n, 12)} r={casa * 0.45 - 2} tipo={semente} />
        <Sementes n={Math.min(Math.max(n - 12, 0), 12)} r={casa * 0.45 - 2} tipo={semente} />
        <Numero n={n} ganhou={ganhou(i)} chave={h.lances} />
      </View>
    );
  };

  const instrucao = ultimo?.jogaDeNovo && state.winner === null
    ? `A última semente caiu no depósito: ${nomeDe(state.turn) === 'Você' ? 'você joga' : `${nomeDe(state.turn)} joga`} de novo!`
    : `Toque numa casa da sua fileira (${state.turn === 0 ? 'a de baixo' : 'a de cima'}) para semear.`;

  return (
    <View className="items-center gap-3">
      <PlacarJogo
        jogadores={([0, 1] as const).map((p) => ({ id: p, nome: nomeDe(p), amostra: <View />, extra: `${state.covas[DEPOSITO[p]]} no depósito` }))}
        vez={state.turn}
        terminou={state.winner !== null}
      />
      {resultado ? <FaixaResultado texto={resultado.texto} tom={resultado.tom} /> : vezDoLinu || pensando ? <LinuPensando visivel /> : <Instrucao>{instrucao}</Instrucao>}

      <View
        style={{
          backgroundColor: tabua.tabua,
          borderRadius: casa * 0.7,
          padding: 8,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 6,
          borderWidth: 3,
          borderColor: tabua.borda,
          shadowColor: '#000',
          shadowOpacity: 0.3,
          shadowRadius: 8,
          shadowOffset: { width: 0, height: 4 },
          elevation: 6,
        }}
      >
        {deposito(1)}
        <View style={{ gap: 6 }}>
          <View style={{ flexDirection: 'row', gap: 4 }}>{[...casasDe(1)].reverse().map(cova)}</View>
          <View style={{ flexDirection: 'row', gap: 4 }}>{casasDe(0).map(cova)}</View>
        </View>
        {deposito(0)}
      </View>
      <Text className="text-[11px] text-slate-500 dark:text-slate-400">O depósito de cada um fica à direita de quem joga.</Text>

      <ControlesJogo onRecomecar={recomecar} onDesfazer={desfazer} podeDesfazer={h.lances > 0 && !pensando} />
    </View>
  );
}
