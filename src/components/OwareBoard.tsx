import { useCallback, useMemo } from 'react';
import { View } from 'react-native';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { BUSCA_OWARE, escolherLance, NIVEIS } from '@/services/jogos-ia';
import { createInitialState, detalharSemeadura, legalMoves, rowOf, sow, type OwareState, type PlayerId } from '@/services/oware-engine';
import { quadrosDaSemeadura } from '@/services/semeadura';
import { Cova, TexturaTabua, textoSemeadura, useSemeadura, useVisualMancala, VooSementes } from './jogos/mancala';
import { useTemaJogo } from './jogos/tema';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

interface Passo {
  s: OwareState;
  /** a casa que foi esvaziada no último lance */
  origem?: number;
}

const NOME: Record<PlayerId, string> = { 0: 'Jogador 1', 1: 'Jogador 2' };
const inicio = (): Passo => ({ s: createInitialState() });

/**
 * Tabuleiro jogável de Oware (variante abapa, ver `oware-engine.ts`). A fileira de baixo é do
 * jogador 1 (casas 0-5, da esquerda para a direita) e a de cima, do jogador 2 (11 a 6), para a
 * semeadura dar a volta no mesmo sentido na tela. A dois no mesmo aparelho ou contra o Linu (ele
 * fica com a fileira de cima).
 */
export function OwareBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const { tabua, semente } = useVisualMancala('oware');
  const casa = useCasa(6.6, 58);
  const h = useHistorico<Passo>(inicio, 'oware');
  const { s: state, origem } = h.state;
  const anterior = h.pilha.length > 1 ? h.pilha[h.pilha.length - 2]!.s : null;
  const xp = useXpDeVitoria('oware');
  const semeadura = useSemeadura(tabua.som);
  const { quadro, passo, animando } = semeadura;

  const contraLinu = prefs.adversario === 'linu';
  // o Linu só joga depois que a semeadura anterior termina de aparecer
  const vezDoLinu = contraLinu && state.turn === 1 && state.winner === null && !animando;
  const moves = useMemo(() => legalMoves(state), [state]);

  const jogar = useCallback(
    (idx: number) => {
      const next = sow(state, idx);
      if (next === state) return;
      haptics.tapLight();
      const { caminho, capturadas } = detalharSemeadura(state, idx);
      const outro = state.turn === 0 ? 1 : 0;
      // as capturadas vão para quem jogou; se o outro ficou sem lance, ele recolhe as da fileira dele
      const animou = semeadura.iniciar(
        quadrosDaSemeadura({ antes: state.houses, origem: idx, caminho, depois: next.houses, grupos: [{ de: capturadas, para: state.turn }, { de: rowOf(outro), para: outro }] }),
      );
      h.jogar({ s: next, origem: idx }, animou ? null : capturadas.length > 0 ? 'captura' : tabua.som);
      if (next.winner !== null && next.winner !== 'empate' && !(contraLinu && next.winner === 1)) xp.dar();
    },
    [state, h, contraLinu, xp, tabua.som, semeadura],
  );

  const pensando = useLinuJoga(vezDoLinu, () => {
    const { prof, ruido } = NIVEIS.oware[prefs.nivel];
    const m = escolherLance(state, prof, BUSCA_OWARE, ruido);
    if (m !== null) jogar(m);
  });

  const recomecar = () => {
    haptics.tapLight();
    semeadura.parar();
    h.reiniciar();
    xp.zerar();
  };
  const desfazer = () => {
    haptics.tapLight();
    semeadura.parar();
    h.desfazer(contraLinu && state.turn === 0 && h.lances >= 2 ? 2 : 1);
  };

  const nomeDe = (p: PlayerId) => (contraLinu ? (p === 0 ? 'Você' : 'Linu') : NOME[p]);
  const placar = `${state.scores[0]} × ${state.scores[1]}`;
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

  const covas = quadro ? quadro.covas : state.houses;
  const cova = (idx: number) => {
    const n = covas[idx]!;
    const jogavel = moves.includes(idx) && !vezDoLinu && state.winner === null && !animando && !(contraLinu && state.turn === 1);
    const cai = quadro?.cai === idx;
    return (
      <Cova
        key={idx}
        n={n}
        tamanho={casa}
        jogavel={jogavel}
        destaque={cai ? '#FBBF24' : (prefs.ultimoLance || animando) && idx === origem ? tema.ultimo : jogavel && prefs.dicas ? '#F5D68A' : undefined}
        ganhou={prefs.animacoes ? cai : anterior !== null && n > anterior.houses[idx]!}
        chave={animando ? passo : h.lances}
        caiu={cai ? passo : undefined}
        rotulo={`Casa com ${n} sementes`}
        tabua={tabua}
        semente={semente}
        onPress={() => jogar(idx)}
      />
    );
  };

  // o centro de cada cova dentro do tabuleiro (8 de margem, covas com 4 de folga, fileiras com 6)
  const centro = (idx: number) => {
    const col = idx < 6 ? idx : 11 - idx;
    return { x: 8 + col * (casa + 4) + casa / 2, y: 8 + (idx < 6 ? casa + 6 : 0) + casa / 2 };
  };
  const largura = 16 + casa * 6 + 20;
  // as capturadas sobem para o placar de quem ficou com elas (o jogador 1 à esquerda, o 2 à direita)
  const placarDe = (p: number) => ({ x: largura * (p === 0 ? 0.25 : 0.75), y: -casa * 1.4 });

  return (
    <View className="items-center gap-3">
      <PlacarJogo jogadores={([0, 1] as const).map((p) => ({ id: p, nome: nomeDe(p), amostra: <View />, extra: `${state.scores[p]} capturadas` }))} vez={state.turn} terminou={state.winner !== null} />
      {resultado ? (
        <FaixaResultado texto={resultado.texto} tom={resultado.tom} />
      ) : quadro ? (
        <Instrucao>{textoSemeadura(quadro, 'para o placar')}</Instrucao>
      ) : vezDoLinu || pensando ? (
        <LinuPensando visivel />
      ) : (
        <Instrucao>Toque numa casa da sua fileira ({state.turn === 0 ? 'a de baixo' : 'a de cima'}) para semear.</Instrucao>
      )}

      <View style={{ backgroundColor: tabua.tabua, borderRadius: casa, padding: 8, gap: 6, borderWidth: 3, borderColor: tabua.borda, shadowColor: '#000', shadowOpacity: 0.3, shadowRadius: 8, shadowOffset: { width: 0, height: 4 }, elevation: 6 }}>
        <TexturaTabua tabua={tabua} raio={casa - 3} />
        <View style={{ flexDirection: 'row', gap: 4 }}>{[...rowOf(1)].reverse().map(cova)}</View>
        <View style={{ flexDirection: 'row', gap: 4 }}>{rowOf(0).map(cova)}</View>
        {quadro?.tipo === 'voa' &&
          quadro.voam.map((v) => <VooSementes key={`${passo}-${v.de}`} de={centro(v.de)} para={placarDe(v.para)} n={v.n} casa={casa} semente={semente} pousa={false} />)}
      </View>

      <ControlesJogo onRecomecar={recomecar} onDesfazer={desfazer} podeDesfazer={h.lances > 0 && !pensando} />
    </View>
  );
}
