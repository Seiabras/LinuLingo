import { useCallback } from 'react';
import { Pressable, View } from 'react-native';
import Svg, { Circle, Line } from 'react-native-svg';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { lanceGomoku } from '@/services/jogos-ia';
import { createInitialState, jogar, type LinhaState, type Marca } from '@/services/linha-engine';
import { Surge } from './jogos/anim';
import { FundoSuperficie } from './jogos/visual';
import { useTemaJogo } from './jogos/tema';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, Moldura, PecaRedonda, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

const N = 15;
const NOME: Record<Marca, string> = { x: 'Pretas', o: 'Brancas' };
const COR: Record<Marca, 'escura' | 'clara'> = { x: 'escura', o: 'clara' };
/** os pontos marcados do tabuleiro de Go 15×15 (hoshi): os quatro 4-4 e o centro */
const HOSHI = [3 * N + 3, 3 * N + 11, 7 * N + 7, 11 * N + 3, 11 * N + 11];
const inicio = () => createInitialState(N, 5);

/**
 * Gomoku, o cinco em linha (estilo livre, 15×15, ver `linha-engine.ts`): as pretas começam e vence
 * quem fizer uma linha de cinco ou mais. A dois no mesmo aparelho ou contra o Linu (ele fica com as
 * brancas).
 */
export function GomokuBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const passo = useCasa(N, 34, 18);
  const lado = passo * N;
  const h = useHistorico<LinhaState>(inicio, 'gomoku');
  const state = h.state;
  const xp = useXpDeVitoria('gomoku');

  const contraLinu = prefs.adversario === 'linu';
  const vezDoLinu = contraLinu && state.turn === 'o' && state.winner === null;

  const por = useCallback(
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
    const i = lanceGomoku(state, prefs.nivel);
    if (i !== null) por(i);
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

  const nomeDe = (m: Marca) => (contraLinu ? (m === 'x' ? 'Você' : 'Linu') : NOME[m]);
  const resultado =
    state.winner === null
      ? null
      : state.winner === 'empate'
        ? { texto: 'Empate: o tabuleiro encheu', tom: 'empate' as const }
        : contraLinu
          ? state.winner === 'x'
            ? { texto: 'Cinco em linha! Você venceu o Linu!', tom: 'vitoria' as const }
            : { texto: 'O Linu fez cinco em linha.', tom: 'derrota' as const }
          : { texto: `Cinco em linha! ${NOME[state.winner]} venceram!`, tom: 'vitoria' as const };
  const centro = (i: number) => ({ x: (i % N) * passo + passo / 2, y: Math.floor(i / N) * passo + passo / 2 });

  return (
    <View className="items-center gap-3">
      <PlacarJogo jogadores={(['x', 'o'] as const).map((m) => ({ id: m, nome: nomeDe(m), amostra: <PecaRedonda jogo="gomoku" lado={COR[m]} tamanho={18} /> }))} vez={state.turn} terminou={state.winner !== null} />
      {resultado ? (
        <FaixaResultado texto={resultado.texto} tom={resultado.tom} />
      ) : vezDoLinu || pensando ? (
        <LinuPensando visivel />
      ) : (
        <Instrucao>Vez das {NOME[state.turn].toLowerCase()}: toque num cruzamento. Cinco em linha vence.</Instrucao>
      )}

      <Moldura largura={lado} altura={lado} fundo={tema.superficie}>
        <FundoSuperficie largura={lado} altura={lado} tema={tema} unidade={passo * 2} />
        {/* as linhas numa camada por cima do fundo (no web, o fundo, que é absoluto, cobria as linhas) */}
        <Svg width={lado} height={lado} style={{ position: 'absolute', left: 0, top: 0 }}>
          {Array.from({ length: N }, (_, k) => (
            <Line key={`h${k}`} x1={passo / 2} y1={k * passo + passo / 2} x2={lado - passo / 2} y2={k * passo + passo / 2} stroke={tema.linha} strokeWidth={k === 0 || k === N - 1 ? 1.8 : 1} />
          ))}
          {Array.from({ length: N }, (_, k) => (
            <Line key={`v${k}`} x1={k * passo + passo / 2} y1={passo / 2} x2={k * passo + passo / 2} y2={lado - passo / 2} stroke={tema.linha} strokeWidth={k === 0 || k === N - 1 ? 1.8 : 1} />
          ))}
          {HOSHI.map((i) => {
            const c = centro(i);
            return <Circle key={i} cx={c.x} cy={c.y} r={Math.max(2, passo * 0.09)} fill={tema.linha} />;
          })}
        </Svg>
        {state.board.map((m, i) => {
          const c = centro(i);
          const ultima = state.ultimo === i;
          const naLinha = state.linha.includes(i);
          const pedra = m && (
            <View>
              <PecaRedonda jogo="gomoku" lado={COR[m]} tamanho={passo * 0.94} />
              {(naLinha || (ultima && prefs.ultimoLance)) && (
                <View
                  style={{
                    position: 'absolute',
                    left: naLinha ? 0 : passo * 0.32,
                    top: naLinha ? 0 : passo * 0.32,
                    width: naLinha ? passo * 0.94 : passo * 0.3,
                    height: naLinha ? passo * 0.94 : passo * 0.3,
                    borderRadius: passo,
                    borderWidth: naLinha ? 3 : 2,
                    borderColor: naLinha ? '#E11D48' : m === 'x' ? '#FFFFFF' : '#111111',
                  }}
                />
              )}
            </View>
          );
          return (
            <Pressable
              key={i}
              disabled={m !== null || state.winner !== null || vezDoLinu}
              onPress={() => por(i)}
              style={{ position: 'absolute', left: c.x - passo / 2, top: c.y - passo / 2, width: passo, height: passo, alignItems: 'center', justifyContent: 'center' }}
            >
              {pedra && ultima ? <Surge key={h.lances}>{pedra}</Surge> : pedra}
            </Pressable>
          );
        })}
      </Moldura>

      <ControlesJogo onRecomecar={recomecar} onDesfazer={desfazer} podeDesfazer={h.lances > 0 && !pensando} />
    </View>
  );
}
