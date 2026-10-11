import { useCallback, useMemo } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { BUSCA_OWARE, escolherLance, NIVEIS } from '@/services/jogos-ia';
import { createInitialState, legalMoves, rowOf, sow, type OwareState, type PlayerId } from '@/services/oware-engine';
import { Surge } from './jogos/anim';
import { useTemaJogo } from './jogos/tema';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

interface Passo {
  s: OwareState;
  /** a casa que foi esvaziada no último lance */
  origem?: number;
}

const NOME: Record<PlayerId, string> = { 0: 'Jogador 1', 1: 'Jogador 2' };
const MADEIRA = { tabua: '#8B5A2B', borda: '#5A3410', cova: '#5C3A1A', covaJogavel: '#7A4E24', semente: '#E8D9B0', sementeBorda: '#6B5A33' };
const inicio = (): Passo => ({ s: createInitialState() });

/** Posições das sementes dentro da cova (até 12 desenhadas; daí em diante só o número conta). */
function sementes(n: number, r: number): { x: number; y: number }[] {
  const out: { x: number; y: number }[] = [];
  const m = Math.min(n, 12);
  for (let k = 0; k < m; k++) {
    // espiral simples a partir do centro
    const ang = k * 2.4;
    const dist = m === 1 ? 0 : r * 0.18 * Math.sqrt(k + 0.5);
    out.push({ x: r + Math.cos(ang) * dist, y: r + Math.sin(ang) * dist });
  }
  return out;
}

/**
 * Tabuleiro jogável de Oware (variante abapa, ver `oware-engine.ts`). A fileira de baixo é do
 * jogador 1 (casas 0-5, da esquerda para a direita) e a de cima, do jogador 2 (11 a 6), para a
 * semeadura dar a volta no mesmo sentido na tela. A dois no mesmo aparelho ou contra o Linu (ele
 * fica com a fileira de cima).
 */
export function OwareBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const casa = useCasa(6.6, 58);
  const h = useHistorico<Passo>(inicio, 'oware');
  const { s: state, origem } = h.state;
  const anterior = h.pilha.length > 1 ? h.pilha[h.pilha.length - 2]!.s : null;
  const xp = useXpDeVitoria('oware');

  const contraLinu = prefs.adversario === 'linu';
  const vezDoLinu = contraLinu && state.turn === 1 && state.winner === null;
  const moves = useMemo(() => legalMoves(state), [state]);

  const jogar = useCallback(
    (idx: number) => {
      const next = sow(state, idx);
      if (next === state) return;
      haptics.tapLight();
      h.jogar({ s: next, origem: idx });
      if (next.winner !== null && next.winner !== 'empate' && !(contraLinu && next.winner === 1)) xp.dar();
    },
    [state, h, contraLinu, xp],
  );

  const pensando = useLinuJoga(vezDoLinu, () => {
    const { prof, ruido } = NIVEIS.oware[prefs.nivel];
    const m = escolherLance(state, prof, BUSCA_OWARE, ruido);
    if (m !== null) jogar(m);
  });

  const recomecar = () => {
    haptics.tapLight();
    h.reiniciar();
    xp.zerar();
  };
  const desfazer = () => {
    haptics.tapLight();
    h.desfazer(contraLinu && state.turn === 0 && h.lances >= 2 ? 2 : 1);
  };

  const nomeDe = (p: PlayerId) => (contraLinu ? (p === 0 ? 'Você' : 'Linu') : NOME[p]);
  const placar = `${state.scores[0]} × ${state.scores[1]}`;
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

  const cova = (idx: number) => {
    const n = state.houses[idx];
    const jogavel = moves.includes(idx) && !vezDoLinu && state.winner === null;
    const ganhou = anterior !== null && n > anterior.houses[idx];
    const r = casa / 2 - 2;
    return (
      <Pressable
        key={idx}
        accessibilityLabel={`Casa com ${n} sementes`}
        disabled={!jogavel}
        onPress={() => jogar(idx)}
        style={{
          width: casa,
          height: casa,
          borderRadius: casa,
          backgroundColor: jogavel ? MADEIRA.covaJogavel : MADEIRA.cova,
          borderWidth: 2,
          borderColor: prefs.ultimoLance && idx === origem ? tema.ultimo : jogavel && prefs.dicas ? '#F5D68A' : MADEIRA.borda,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Svg width={r * 2} height={r * 2}>
          {sementes(n, r).map((p, k) => (
            <Circle key={k} cx={p.x} cy={p.y} r={Math.max(2.5, r * 0.13)} fill={MADEIRA.semente} stroke={MADEIRA.sementeBorda} strokeWidth={0.8} />
          ))}
        </Svg>
        <View style={{ position: 'absolute', bottom: -2, right: -2 }}>
          {ganhou ? (
            <Surge key={h.lances}>
              <Text className="rounded-full bg-amber-300 px-1.5 text-xs font-extrabold text-amber-950">{n}</Text>
            </Surge>
          ) : (
            <Text className="rounded-full bg-white/90 px-1.5 text-xs font-extrabold text-slate-900">{n}</Text>
          )}
        </View>
      </Pressable>
    );
  };

  return (
    <View className="items-center gap-3">
      <PlacarJogo jogadores={([0, 1] as const).map((p) => ({ id: p, nome: nomeDe(p), amostra: <View />, extra: `${state.scores[p]} capturadas` }))} vez={state.turn} terminou={state.winner !== null} />
      {resultado ? (
        <FaixaResultado texto={resultado.texto} tom={resultado.tom} />
      ) : vezDoLinu || pensando ? (
        <LinuPensando visivel />
      ) : (
        <Instrucao>Toque numa casa da sua fileira ({state.turn === 0 ? 'a de baixo' : 'a de cima'}) para semear.</Instrucao>
      )}

      <View style={{ backgroundColor: MADEIRA.tabua, borderRadius: casa, padding: 8, gap: 6, borderWidth: 3, borderColor: MADEIRA.borda, shadowColor: '#000', shadowOpacity: 0.3, shadowRadius: 8, shadowOffset: { width: 0, height: 4 }, elevation: 6 }}>
        <View style={{ flexDirection: 'row', gap: 4 }}>{[...rowOf(1)].reverse().map(cova)}</View>
        <View style={{ flexDirection: 'row', gap: 4 }}>{rowOf(0).map(cova)}</View>
      </View>

      <ControlesJogo onRecomecar={recomecar} onDesfazer={desfazer} podeDesfazer={h.lances > 0 && !pensando} />
    </View>
  );
}
