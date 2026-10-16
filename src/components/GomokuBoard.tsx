import { useCallback } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Circle, Line } from 'react-native-svg';
import { useLadoDoLinu } from '@/services/quem-comeca';
import * as haptics from '@/services/haptics';
import { useJogosPrefs, useVariante } from '@/services/jogos-prefs';
import { lanceGomoku } from '@/services/jogos-ia';
import { createInitialState, jogar, podeTrocar, trocar, type LinhaState, type Marca } from '@/services/linha-engine';
import { Pulsa, Surge } from './jogos/anim';
import { FundoSuperficie } from './jogos/visual';
import { useTemaJogo } from './jogos/tema';
import { SeletorTamanho, useRecomecaNoTamanho, useTamanho, type OpcaoTamanho } from './jogos/tamanho';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, Moldura, PecaRedonda, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

/**
 * Os tamanhos: o gomoku se joga hoje num tabuleiro de Go 15×15, e antigamente o padrão era o 19×19
 * (Wikipédia em inglês, “Gomoku”, consultada em 15/10/2026).
 */
const TAMANHOS: OpcaoTamanho[] = [
  { id: '15', rotulo: '15×15' },
  { id: '19', rotulo: '19×19' },
];
const NOME: Record<Marca, string> = { x: 'Pretas', o: 'Brancas' };
const COR: Record<Marca, 'escura' | 'clara'> = { x: 'escura', o: 'clara' };
/** os pontos marcados do tabuleiro de Go (hoshi): os quatro 4-4 e o centro */
const hoshi = (n: number) => [3 * n + 3, 3 * n + n - 4, ((n - 1) / 2) * (n + 1), (n - 4) * n + 3, (n - 4) * n + n - 4];

/**
 * Gomoku, o cinco em linha (estilo livre, 15×15 ou 19×19, ver `linha-engine.ts`): as pretas começam e vence
 * quem fizer uma linha de cinco ou mais. A dois no mesmo aparelho ou contra o Linu (ele fica com as
 * brancas).
 */
export function GomokuBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const [tam, escolherTamanho] = useTamanho('gomoku', TAMANHOS, '15');
  // as variantes: 'caro' (o cinco bloqueado nas duas pontas não vale) e 'troca' (trocar de cor depois da 1ª pedra)
  const [variante] = useVariante('gomoku');
  const caro = variante === 'caro';
  const comTroca = variante === 'troca';
  const inicio = useCallback(() => createInitialState(Number(tam), 5, { caro, troca: comTroca }), [tam, caro, comTroca]);
  const h = useHistorico<LinhaState>(inicio, variante ? `gomoku:${variante}` : 'gomoku');
  const state = h.state;
  useRecomecaNoTamanho(tam, String(state.n), h.reiniciar);
  const N = state.n;
  const HOSHI = hoshi(N);
  const passo = useCasa(N, 34, N > 15 ? 14 : 18);
  const lado = passo * N;
  const xp = useXpDeVitoria('gomoku');

  const contraLinu = prefs.adversario === 'linu';
  // a cor do Linu na partida (a escolha “quem começa”: as pretas começam); com a troca, as cores mudam
  const corInicialDoLinu = useLadoDoLinu<Marca>('x', 'o', h.pilha[0]!, h.lances);
  const marcaDoLinu: Marca = state.trocou ? (corInicialDoLinu === 'x' ? 'o' : 'x') : corInicialDoLinu;
  const vezDoLinu = contraLinu && state.turn === marcaDoLinu && state.winner === null;

  const por = useCallback(
    (i: number) => {
      const next = jogar(state, i);
      if (next === state) return;
      haptics.tapLight();
      h.jogar(next);
      if (next.winner !== null && next.winner !== 'empate' && !(contraLinu && next.winner === marcaDoLinu)) xp.dar();
    },
    [state, h, contraLinu, xp, marcaDoLinu],
  );
  const fazerTroca = () => {
    haptics.tapLight();
    h.jogar(trocar(state));
  };

  const pensando = useLinuJoga(vezDoLinu, () => {
    // com a troca: o Linu fica com a primeira pedra se ela estiver perto do meio (a parte mais forte)
    if (podeTrocar(state) && state.ultimo !== null) {
      const meio = (N - 1) / 2;
      const r = Math.floor(state.ultimo / N);
      const c = state.ultimo % N;
      if (Math.max(Math.abs(r - meio), Math.abs(c - meio)) <= 3) return fazerTroca();
    }
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
    h.desfazer(contraLinu && state.turn !== marcaDoLinu && h.lances >= 2 ? 2 : 1);
  };

  const nomeDe = (m: Marca) => (contraLinu ? (m === marcaDoLinu ? 'Linu' : 'Você') : NOME[m]);
  const resultado =
    state.winner === null
      ? null
      : state.winner === 'empate'
        ? { texto: 'Empate: o tabuleiro encheu', tom: 'empate' as const }
        : contraLinu
          ? state.winner !== marcaDoLinu
            ? { texto: 'Cinco em linha! Você venceu o Linu!', tom: 'vitoria' as const }
            : { texto: 'O Linu fez cinco em linha.', tom: 'derrota' as const }
          : { texto: `Cinco em linha! ${NOME[state.winner]} venceram!`, tom: 'vitoria' as const };
  const centro = (i: number) => ({ x: (i % N) * passo + passo / 2, y: Math.floor(i / N) * passo + passo / 2 });

  return (
    <View className="items-center gap-3">
      <PlacarJogo jogadores={(['x', 'o'] as const).map((m) => ({ id: m, nome: nomeDe(m), amostra: <PecaRedonda jogo="gomoku" lado={COR[m]} tamanho={18} /> }))} vez={state.turn} terminou={state.winner !== null} />
      <SeletorTamanho opcoes={TAMANHOS} atual={tam} onEscolher={escolherTamanho} />
      {resultado ? (
        <FaixaResultado texto={resultado.texto} tom={resultado.tom} />
      ) : vezDoLinu || pensando ? (
        <LinuPensando visivel />
      ) : (
        <Instrucao>
          {state.trocou && h.lances <= 2 ? (contraLinu ? (marcaDoLinu === 'x' ? 'O Linu trocou: agora ele é as pretas e você, as brancas. ' : 'Você trocou: agora você é as pretas e o Linu, as brancas. ') : 'Trocaram de cor! ') : ''}
          {contraLinu ? (state.turn === marcaDoLinu ? 'Vez do Linu' : 'Sua vez') : `Vez das ${NOME[state.turn].toLowerCase()}`}: toque num cruzamento.{' '}
          {caro ? 'Cinco em linha vence, mas não se o adversário tapar as duas pontas.' : 'Cinco em linha vence.'}
        </Instrucao>
      )}
      {/* a troca é de quem joga em segundo: a dois, ou você, quando o Linu começou */}
      {podeTrocar(state) && (!contraLinu || corInicialDoLinu === 'x') && !vezDoLinu && (
        <Pressable accessibilityRole="button" onPress={fazerTroca} className="rounded-full border-2 border-emerald-600 bg-emerald-50 px-4 py-2 active:bg-emerald-100 dark:border-emerald-400 dark:bg-emerald-950">
          <Text className="text-sm font-bold text-emerald-800 dark:text-emerald-200">Trocar de cor (ficar com as pretas)</Text>
        </Pressable>
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
          const naLinha = state.linha.indexOf(i);
          const pedra = m && (
            <View>
              <PecaRedonda jogo="gomoku" lado={COR[m]} tamanho={passo * 0.94} />
              {naLinha < 0 && ultima && prefs.ultimoLance && (
                <View
                  style={{
                    position: 'absolute',
                    left: passo * 0.32,
                    top: passo * 0.32,
                    width: passo * 0.3,
                    height: passo * 0.3,
                    borderRadius: passo,
                    borderWidth: 2,
                    borderColor: m === 'x' ? '#FFFFFF' : '#111111',
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
              {/* a linha vencedora acende pedra por pedra, com um anel que pulsa */}
              {m && naLinha >= 0 && (
                <Pulsa key={`l${h.lances}`} atraso={300 + naLinha * 110} style={{ position: 'absolute', width: passo * 0.98, height: passo * 0.98, borderRadius: passo, borderWidth: 3, borderColor: '#E11D48', pointerEvents: 'none' }}>
                  <View />
                </Pulsa>
              )}
            </Pressable>
          );
        })}
      </Moldura>

      <ControlesJogo onRecomecar={recomecar} onDesfazer={desfazer} podeDesfazer={h.lances > 0 && !pensando} />
    </View>
  );
}
