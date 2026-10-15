import { useCallback, useMemo } from 'react';
import { Text, View } from 'react-native';
import * as haptics from '@/services/haptics';
import { useJogosPrefs, useVariante } from '@/services/jogos-prefs';
import { BUSCA_KALAH, escolherLance, NIVEIS } from '@/services/jogos-ia';
import { casasDe, createInitialState, DEPOSITO, frente, jogar as semear, lancesLegais, type Jogador, type KalahState } from '@/services/kalah-engine';
import { quadrosDaSemeadura } from '@/services/semeadura';
import { Cova, Numero, Sementes, textoSemeadura, useSemeadura, useVisualMancala, VooSementes } from './jogos/mancala';
import { useTemaJogo } from './jogos/tema';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

const NOME: Record<Jogador, string> = { 0: 'Jogador 1', 1: 'Jogador 2' };

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
  // variantes: 'frente-vazia' (captura mesmo com a casa da frente vazia) e 'seis' (6 sementes por casa)
  const [variante] = useVariante('kalah');
  const regra = variante === 'frente-vazia' || variante === 'seis' ? variante : '';
  const inicio = useCallback(() => (regra === 'seis' ? createInitialState(6) : regra === 'frente-vazia' ? createInitialState(4, 'frente-vazia') : createInitialState()), [regra]);
  const h = useHistorico<KalahState>(inicio, regra ? `kalah:${regra}` : 'kalah');
  const state = h.state;
  const anterior = h.pilha.length > 1 ? h.pilha[h.pilha.length - 2]! : null;
  const xp = useXpDeVitoria('kalah');
  const semeadura = useSemeadura(tabua.som);
  const { quadro, passo, animando } = semeadura;

  const contraLinu = prefs.adversario === 'linu';
  // o Linu só joga depois que a semeadura anterior (a dele também, na vez extra) termina de aparecer
  const vezDoLinu = contraLinu && state.turn === 1 && state.winner === null && !animando;
  const lances = useMemo(() => lancesLegais(state), [state]);

  const jogar = useCallback(
    (i: number) => {
      const next = semear(state, i);
      if (next === state || !next.ultimo) return;
      haptics.tapLight();
      const { semeadas, captura } = next.ultimo;
      // a captura vai para o depósito de quem jogou; no fim do jogo, cada um recolhe as do seu lado
      const grupos = [
        ...(captura !== null ? [{ de: [captura, frente(captura)], para: DEPOSITO[state.turn] }] : []),
        { de: casasDe(0), para: DEPOSITO[0] },
        { de: casasDe(1), para: DEPOSITO[1] },
      ];
      const animou = semeadura.iniciar(quadrosDaSemeadura({ antes: state.covas, origem: i, caminho: semeadas, depois: next.covas, grupos, destinoNasCovas: true }));
      h.jogar(next, animou ? null : captura !== null ? 'captura' : tabua.som);
      if (next.winner === 0 || (next.winner === 1 && !contraLinu)) xp.dar();
    },
    [state, h, contraLinu, xp, tabua.som, semeadura],
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
    semeadura.parar();
    h.reiniciar();
    xp.zerar();
  };
  // contra o Linu, desfazer volta até a sua jogada anterior (passando pelas vezes extras dele)
  const desfazer = () => {
    haptics.tapLight();
    semeadura.parar();
    if (!contraLinu) return h.desfazer(1);
    let n = 1;
    while (h.pilha.length - 1 - n > 0 && h.pilha[h.pilha.length - 1 - n]!.turn !== 0) n++;
    h.desfazer(n);
  };

  const nomeDe = (p: Jogador) => (contraLinu ? (p === 0 ? 'Você' : 'Linu') : NOME[p]);
  const placar = `${state.covas[6]} × ${state.covas[13]}`;
  // o resultado espera a última semeadura terminar de aparecer
  const resultado =
    state.winner === null || animando
      ? null
      : state.winner === 'empate'
        ? { texto: `Empate, ${placar}`, tom: 'empate' as const }
        : contraLinu
          ? state.winner === 0
            ? { texto: `Você venceu o Linu, ${placar}!`, tom: 'vitoria' as const }
            : { texto: `O Linu venceu, ${placar}.`, tom: 'derrota' as const }
          : { texto: `${NOME[state.winner]} venceu, ${placar}!`, tom: 'vitoria' as const };

  const ultimo = state.ultimo;
  const covas = quadro ? quadro.covas : state.covas;
  // com a semeadura animada, o número acende cova por cova; sem ela, todas as que ganharam de uma vez
  const ganhou = (i: number) => (prefs.animacoes ? quadro?.cai === i || (quadro?.chegou.includes(i) ?? false) : anterior !== null && state.covas[i]! > anterior.covas[i]!);
  const chave = animando ? passo : h.lances;
  const cova = (i: number) => {
    const n = covas[i]!;
    const jogavel = lances.includes(i) && !vezDoLinu && state.winner === null && !animando && !(contraLinu && state.turn === 1);
    const cai = quadro?.cai === i;
    return (
      <Cova
        key={i}
        n={n}
        tamanho={casa}
        jogavel={jogavel}
        destaque={
          cai ? '#FBBF24' : (prefs.ultimoLance || animando) && ultimo?.de === i ? tema.ultimo : !animando && ultimo?.captura === i ? '#E11D48' : jogavel && prefs.dicas ? '#F5D68A' : undefined
        }
        ganhou={ganhou(i)}
        chave={chave}
        caiu={cai ? passo : undefined}
        rotulo={`Casa com ${n} sementes`}
        tabua={tabua}
        semente={semente}
        onPress={() => jogar(i)}
      />
    );
  };
  const deposito = (p: Jogador) => {
    const i = DEPOSITO[p];
    const n = covas[i]!;
    const alto = casa * 2 + 6;
    return (
      <View
        accessibilityLabel={`Depósito de ${nomeDe(p)}: ${n} sementes`}
        style={{ width: casa * 0.95, height: alto, borderRadius: casa / 2, backgroundColor: tabua.cova, borderWidth: 2, borderColor: quadro?.cai === i || quadro?.chegou.includes(i) ? '#FBBF24' : tabua.borda, alignItems: 'center', justifyContent: 'center', overflow: 'visible' }}
      >
        {/* o depósito é comprido: as sementes vão em duas pilhas, uma em cima da outra (até 24 desenhadas) */}
        <Sementes n={Math.min(n, 12)} r={casa * 0.45 - 2} tipo={semente} />
        <Sementes n={Math.min(Math.max(n - 12, 0), 12)} r={casa * 0.45 - 2} tipo={semente} />
        <Numero n={n} ganhou={ganhou(i)} chave={chave} />
      </View>
    );
  };

  // o centro de cada cova e de cada depósito dentro do tabuleiro (8 de margem; o depósito do jogador 2 à
  // esquerda, as fileiras no meio, com 4 de folga entre as covas e 6 entre as partes)
  const centro = (i: number) => {
    const meio = 8 + casa * 0.95 + 6;
    if (i === DEPOSITO[1]) return { x: 8 + casa * 0.475, y: 8 + casa + 3 };
    if (i === DEPOSITO[0]) return { x: meio + casa * 6 + 20 + 6 + casa * 0.475, y: 8 + casa + 3 };
    const col = i < 6 ? i : 12 - i;
    return { x: meio + col * (casa + 4) + casa / 2, y: 8 + (i < 6 ? casa + 6 : 0) + casa / 2 };
  };

  const instrucao = quadro ? textoSemeadura(quadro) : ultimo?.jogaDeNovo && state.winner === null
    ? `A última semente caiu no depósito: ${nomeDe(state.turn) === 'Você' ? 'você joga' : `${nomeDe(state.turn)} joga`} de novo!`
    : `Toque numa casa da sua fileira (${state.turn === 0 ? 'a de baixo' : 'a de cima'}) para semear.`;

  return (
    <View className="items-center gap-3">
      <PlacarJogo
        jogadores={([0, 1] as const).map((p) => ({ id: p, nome: nomeDe(p), amostra: <View />, extra: `${state.covas[DEPOSITO[p]]} no depósito` }))}
        vez={state.turn}
        terminou={state.winner !== null}
      />
      {resultado ? (
        <FaixaResultado texto={resultado.texto} tom={resultado.tom} />
      ) : !quadro && (vezDoLinu || pensando) ? (
        <LinuPensando visivel />
      ) : (
        <Instrucao>{instrucao}</Instrucao>
      )}

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
        {quadro?.tipo === 'voa' &&
          quadro.voam.map((v) => <VooSementes key={`${passo}-${v.de}`} de={centro(v.de)} para={centro(v.para)} n={v.n} casa={casa} semente={semente} pousa />)}
      </View>
      <Text className="text-[11px] text-slate-500 dark:text-slate-400">O depósito de cada um fica à direita de quem joga.</Text>

      <ControlesJogo onRecomecar={recomecar} onDesfazer={desfazer} podeDesfazer={h.lances > 0 && !pensando} />
    </View>
  );
}
