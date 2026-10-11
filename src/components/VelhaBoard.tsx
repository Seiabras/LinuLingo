import { useCallback } from 'react';
import { Pressable, View } from 'react-native';
import Svg, { Circle, Line } from 'react-native-svg';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { BUSCA_VELHA, escolherLance, NIVEIS } from '@/services/jogos-ia';
import { createInitialState, jogar, type LinhaState, type Marca } from '@/services/linha-engine';
import { Surge } from './jogos/anim';
import { useTemaJogo } from './jogos/tema';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, Moldura, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

const COR: Record<Marca, string> = { x: '#E11D48', o: '#2563EB' };
const inicio = () => createInitialState(3, 3);

/** O X ou o O desenhado, grosso e com contorno, para ler bem em qualquer tema. */
export function MarcaVelha({ m, tamanho }: { m: Marca; tamanho: number }) {
  const t = tamanho;
  const e = t * 0.2;
  return (
    <Svg width={t} height={t}>
      {m === 'x' ? (
        <>
          <Line x1={e} y1={e} x2={t - e} y2={t - e} stroke="#000" strokeWidth={t * 0.17} strokeLinecap="round" opacity={0.35} />
          <Line x1={t - e} y1={e} x2={e} y2={t - e} stroke="#000" strokeWidth={t * 0.17} strokeLinecap="round" opacity={0.35} />
          <Line x1={e} y1={e} x2={t - e} y2={t - e} stroke={COR.x} strokeWidth={t * 0.12} strokeLinecap="round" />
          <Line x1={t - e} y1={e} x2={e} y2={t - e} stroke={COR.x} strokeWidth={t * 0.12} strokeLinecap="round" />
        </>
      ) : (
        <>
          <Circle cx={t / 2} cy={t / 2} r={t / 2 - e} fill="none" stroke="#000" strokeWidth={t * 0.17} opacity={0.35} />
          <Circle cx={t / 2} cy={t / 2} r={t / 2 - e} fill="none" stroke={COR.o} strokeWidth={t * 0.12} />
        </>
      )}
    </Svg>
  );
}

/**
 * Jogo da velha (3×3, ver `linha-engine.ts`): toque numa casa vazia. O X começa. A dois no mesmo
 * aparelho ou contra o Linu (ele fica com o O; no difícil ele não perde nunca, e a partida dá velha).
 */
export function VelhaBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const casa = useCasa(3, 96);
  const lado = casa * 3;
  const h = useHistorico<LinhaState>(inicio, 'velha');
  const state = h.state;
  const xp = useXpDeVitoria('velha');

  const contraLinu = prefs.adversario === 'linu';
  const vezDoLinu = contraLinu && state.turn === 'o' && state.winner === null;

  const marcar = useCallback(
    (i: number) => {
      const next = jogar(state, i);
      if (next === state) return;
      haptics.tapLight();
      h.jogar(next);
      if (next.winner === 'x' || (next.winner === 'o' && !contraLinu)) xp.dar();
    },
    [state, h, contraLinu, xp],
  );

  const pensando = useLinuJoga(vezDoLinu, () => {
    const { prof, ruido } = NIVEIS.velha[prefs.nivel];
    const i = escolherLance(state, prof, BUSCA_VELHA, ruido);
    if (i !== null) marcar(i);
  });

  const recomecar = () => {
    haptics.tapLight();
    h.reiniciar();
    xp.zerar();
  };
  const desfazer = () => {
    haptics.tapLight();
    h.desfazer(contraLinu && state.turn === 'x' && h.lances >= 2 ? 2 : 1);
  };

  const nomeDe = (m: Marca) => (contraLinu ? (m === 'x' ? 'Você (X)' : 'Linu (O)') : m.toUpperCase());
  const resultado =
    state.winner === null
      ? null
      : state.winner === 'empate'
        ? { texto: 'Deu velha! Empate.', tom: 'empate' as const }
        : contraLinu
          ? state.winner === 'x'
            ? { texto: 'Três em linha! Você venceu o Linu!', tom: 'vitoria' as const }
            : { texto: 'O Linu fez três em linha.', tom: 'derrota' as const }
          : { texto: `Três em linha! O ${state.winner.toUpperCase()} venceu!`, tom: 'vitoria' as const };

  // a linha vencedora riscada por cima, da primeira à última casa
  const risco = state.linha.length >= 3 ? [state.linha[0]!, state.linha[state.linha.length - 1]!] : null;
  const centro = (i: number) => ({ x: (i % 3) * casa + casa / 2, y: Math.floor(i / 3) * casa + casa / 2 });

  return (
    <View className="items-center gap-3">
      <PlacarJogo jogadores={(['x', 'o'] as const).map((m) => ({ id: m, nome: nomeDe(m), amostra: <MarcaVelha m={m} tamanho={18} /> }))} vez={state.turn} terminou={state.winner !== null} />
      {resultado ? (
        <FaixaResultado texto={resultado.texto} tom={resultado.tom} />
      ) : vezDoLinu || pensando ? (
        <LinuPensando visivel />
      ) : (
        <Instrucao>Vez do {state.turn.toUpperCase()}: toque numa casa vazia.</Instrucao>
      )}

      <Moldura largura={lado} altura={lado} fundo={tema.claro}>
        {/* as quatro linhas do jogo da velha */}
        <Svg width={lado} height={lado} style={{ position: 'absolute' }}>
          {[1, 2].map((k) => (
            <Line key={`v${k}`} x1={k * casa} y1={casa * 0.08} x2={k * casa} y2={lado - casa * 0.08} stroke={tema.moldura} strokeWidth={5} strokeLinecap="round" />
          ))}
          {[1, 2].map((k) => (
            <Line key={`h${k}`} x1={casa * 0.08} y1={k * casa} x2={lado - casa * 0.08} y2={k * casa} stroke={tema.moldura} strokeWidth={5} strokeLinecap="round" />
          ))}
        </Svg>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: lado }}>
          {state.board.map((m, i) => (
            <Pressable
              key={i}
              accessibilityLabel={`Casa ${i + 1}${m ? `, ${m.toUpperCase()}` : ''}`}
              disabled={m !== null || state.winner !== null || vezDoLinu}
              onPress={() => marcar(i)}
              style={{ width: casa, height: casa, alignItems: 'center', justifyContent: 'center', backgroundColor: prefs.ultimoLance && state.ultimo === i ? tema.ultimo : 'transparent' }}
            >
              {m && (state.ultimo === i ? <Surge key={h.lances}><MarcaVelha m={m} tamanho={casa * 0.82} /></Surge> : <MarcaVelha m={m} tamanho={casa * 0.82} />)}
            </Pressable>
          ))}
        </View>
        {risco && (
          <Svg width={lado} height={lado} style={{ position: 'absolute', pointerEvents: 'none' }}>
            <Line x1={centro(risco[0]).x} y1={centro(risco[0]).y} x2={centro(risco[1]).x} y2={centro(risco[1]).y} stroke="#111" strokeWidth={9} strokeLinecap="round" opacity={0.75} />
          </Svg>
        )}
      </Moldura>

      <ControlesJogo onRecomecar={recomecar} onDesfazer={desfazer} podeDesfazer={h.lances > 0 && !pensando} />
    </View>
  );
}
