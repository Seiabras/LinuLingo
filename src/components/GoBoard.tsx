import { useCallback, useMemo } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Circle, Line, Rect } from 'react-native-svg';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { alternarMorto, contarArea, createInitialState, desistir, encerrar, jogadaLegal, jogar, passar, voltarAJogar, type Cor, type GoState } from '@/services/go-engine';
import { Estouro, Surge } from './jogos/anim';
import { FundoSuperficie } from './jogos/visual';
import { useTemaJogo } from './jogos/tema';
import { SeletorTamanho, useRecomecaNoTamanho, useTamanho, type OpcaoTamanho } from './jogos/tamanho';
import { ControlesJogo, FaixaResultado, Instrucao, Moldura, PecaRedonda, PlacarJogo, useCasa, useHistorico, useXpDeVitoria } from './jogos/ui';

/**
 * Os tamanhos do tabuleiro: o 19×19 é o padrão, e os de 9×9 e 13×13 são os que os iniciantes usam
 * (Wikipédia em inglês, “Go (game)”, consultada em 15/10/2026). Aqui o 9×9 continua como o padrão.
 */
const TAMANHOS: OpcaoTamanho[] = [
  { id: '9', rotulo: '9×9' },
  { id: '13', rotulo: '13×13' },
  { id: '19', rotulo: '19×19' },
];
const NOME: Record<Cor, string> = { b: 'Pretas', w: 'Brancas' };
const COR: Record<Cor, 'escura' | 'clara'> = { b: 'escura', w: 'clara' };
/** as colunas do Go pulam o “I”, para não confundir com o “J” (convenção dos diagramas de Go) */
const colunasGo = (n: number) => 'ABCDEFGHJKLMNOPQRST'.slice(0, n).split('');
const linhasGo = (n: number) => Array.from({ length: n }, (_, k) => String(n - k));
/**
 * Os pontos marcados (hoshi): no 9×9, os cantos de 3-3 e o centro; no 13×13, os de 4-4 e o centro; no
 * 19×19, os nove de sempre (4-4, os do meio das bordas e o centro).
 */
function hoshi(n: number): number[] {
  const a = n === 9 ? 2 : 3;
  const b = n - 1 - a;
  const m = (n - 1) / 2;
  const pontos: [number, number][] = [
    [a, a],
    [a, b],
    [b, a],
    [b, b],
    [m, m],
  ];
  if (n === 19) pontos.push([a, m], [m, a], [m, b], [b, m]);
  return pontos.map(([r, c]) => r * n + c);
}

/**
 * Tabuleiro jogável de Go 9×9, 13×13 ou 19×19 (regras em `go-engine.ts`): toque num cruzamento vazio para pôr a
 * pedra. Pretas começam. Dois passes seguidos abrem a contagem: toque nos grupos mortos para
 * marcá-los e confirme. Sem acordo, dá para voltar a jogar (como nas regras chinesas). A dois no
 * mesmo aparelho.
 */
export function GoBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const [tam, escolherTamanho] = useTamanho('go', TAMANHOS, '9');
  const inicio = useCallback(() => createInitialState(Number(tam)), [tam]);
  const h = useHistorico<GoState>(inicio, 'go');
  const state = h.state;
  useRecomecaNoTamanho(tam, String(state.tamanho), h.reiniciar);
  const N = state.tamanho;
  const COLUNAS = colunasGo(N);
  const LINHAS = linhasGo(N);
  const HOSHI = hoshi(N);
  const passo = useCasa(N, 46, N > 13 ? 14 : 20);
  const lado = passo * N;
  const xp = useXpDeVitoria('go');

  // as pedras que o último lance capturou (estavam no tabuleiro e sumiram)
  const anterior = h.pilha.length > 1 ? h.pilha[h.pilha.length - 2]! : null;
  const capturadas = anterior && typeof state.ultimo === 'number' ? anterior.board.flatMap((p, i) => (p && !state.board[i] ? [i] : [])) : [];
  const area = useMemo(() => (state.fase === 'jogando' ? null : contarArea(state.board, N, state.mortas)), [state, N]);
  const centro = (i: number) => ({ x: (i % N) * passo + passo / 2, y: Math.floor(i / N) * passo + passo / 2 });

  const aplicar = (next: GoState) => {
    if (next === state) return;
    haptics.tapLight();
    h.jogar(next);
    if (next.fase === 'fim' && next.resultado && next.resultado.vencedor !== 'empate') xp.dar();
  };

  const aoTocar = (i: number) => {
    if (state.fase === 'jogando') {
      if (jogadaLegal(state, i)) {
        const next = jogar(state, i);
        haptics.tapLight();
        h.jogar(next, next.capturas[state.turn] > state.capturas[state.turn] ? 'captura' : undefined);
      }
      else if (state.board[i] === null) haptics.tapLight();
    } else if (state.fase === 'contagem') aplicar(alternarMorto(state, i));
  };

  const recomecar = () => {
    haptics.tapLight();
    h.reiniciar();
    xp.zerar();
  };

  const r = state.resultado;
  const fmt = (v: number) => String(v).replace('.', ',');
  const resultado = r
    ? r.desistencia
      ? `${NOME[r.vencedor as Cor]} venceram: o outro lado desistiu.`
      : r.vencedor === 'empate'
        ? `Empate: ${fmt(r.pretas)} × ${fmt(r.brancas)}`
        : `${NOME[r.vencedor]} venceram, ${fmt(r.pretas)} × ${fmt(r.brancas)} (com o komi de ${fmt(state.komi)})`
    : null;

  const instrucao =
    state.fase === 'contagem'
      ? 'Contagem: toque nos grupos mortos para tirá-los. Os quadradinhos mostram de quem é cada ponto.'
      : state.ultimo === 'passe'
        ? `${NOME[state.turn === 'b' ? 'w' : 'b']} passaram. Se ${NOME[state.turn].toLowerCase()} passarem também, começa a contagem.`
        : `Vez das ${NOME[state.turn].toLowerCase()}: toque num cruzamento vazio.`;

  const botao = (rotulo: string, onPress: () => void, forte = false) => (
    <Pressable
      accessibilityRole="button"
      onPress={() => {
        haptics.tapLight();
        onPress();
      }}
      className={`rounded-full px-3.5 py-2 ${forte ? 'bg-conecta dark:bg-blue-500' : 'bg-slate-100 dark:bg-slate-800'}`}
    >
      <Text className={`text-sm font-bold ${forte ? 'text-white' : 'text-slate-700 dark:text-slate-200'}`}>{rotulo}</Text>
    </Pressable>
  );

  return (
    <View className="items-center gap-3">
      <PlacarJogo
        jogadores={(['b', 'w'] as const).map((c) => ({
          id: c,
          nome: NOME[c],
          amostra: <PecaRedonda jogo="go" lado={COR[c]} tamanho={18} />,
          extra: `${state.capturas[c]} capturada${state.capturas[c] === 1 ? '' : 's'}`,
        }))}
        vez={state.turn}
        terminou={state.fase !== 'jogando'}
      />
      <SeletorTamanho opcoes={TAMANHOS} atual={tam} onEscolher={escolherTamanho} />
      {resultado ? <FaixaResultado texto={resultado} tom={r?.vencedor === 'empate' ? 'empate' : 'vitoria'} /> : <Instrucao>{instrucao}</Instrucao>}
      {area && state.fase === 'contagem' && (
        <Text className="text-sm font-bold text-slate-800 dark:text-slate-100">
          Pretas {area.b} · Brancas {area.w} + {fmt(state.komi)} de komi = {fmt(area.w + state.komi)}
        </Text>
      )}

      <Moldura largura={lado} altura={lado} casa={passo} colunas={COLUNAS} linhas={LINHAS} fundo={tema.superficie}>
        <FundoSuperficie largura={lado} altura={lado} tema={tema} unidade={passo} />
        {/* as linhas numa camada por cima do fundo (no web, o fundo, que é absoluto, cobria as linhas) */}
        <Svg width={lado} height={lado} style={{ position: 'absolute', left: 0, top: 0 }}>
          {Array.from({ length: N }, (_, k) => (
            <Line key={`h${k}`} x1={passo / 2} y1={k * passo + passo / 2} x2={lado - passo / 2} y2={k * passo + passo / 2} stroke={tema.linha} strokeWidth={k === 0 || k === N - 1 ? 2 : 1.2} />
          ))}
          {Array.from({ length: N }, (_, k) => (
            <Line key={`v${k}`} x1={k * passo + passo / 2} y1={passo / 2} x2={k * passo + passo / 2} y2={lado - passo / 2} stroke={tema.linha} strokeWidth={k === 0 || k === N - 1 ? 2 : 1.2} />
          ))}
          {HOSHI.map((i) => {
            const c = centro(i);
            return <Circle key={i} cx={c.x} cy={c.y} r={Math.max(2.5, passo * 0.08)} fill={tema.linha} />;
          })}
          {/* na contagem, de quem é cada ponto vazio */}
          {area &&
            area.dono.map((d, i) => {
              if (!d || (state.board[i] !== null && !state.mortas.includes(i))) return null;
              const c = centro(i);
              const t = passo * 0.3;
              return <Rect key={`t${i}`} x={c.x - t / 2} y={c.y - t / 2} width={t} height={t} fill={d === 'b' ? '#111111' : '#FFFFFF'} stroke="#000" strokeWidth={0.8} />;
            })}
        </Svg>
        {state.board.map((p, i) => {
          const c = centro(i);
          const ultima = state.ultimo === i;
          const morta = state.mortas.includes(i);
          const pedra = p && (
            <View style={{ opacity: morta ? 0.35 : 1 }}>
              <PecaRedonda jogo="go" lado={COR[p]} tamanho={passo * 0.92} />
              {ultima && prefs.ultimoLance && (
                <View style={{ position: 'absolute', left: passo * 0.31, top: passo * 0.31, width: passo * 0.3, height: passo * 0.3, borderRadius: passo, borderWidth: 2.5, borderColor: p === 'b' ? '#FFFFFF' : '#111111' }} />
              )}
            </View>
          );
          return (
            <Pressable
              key={i}
              accessibilityLabel={`${COLUNAS[i % N]}${LINHAS[Math.floor(i / N)]}${p ? `, pedra ${p === 'b' ? 'preta' : 'branca'}` : ''}`}
              onPress={() => aoTocar(i)}
              style={{ position: 'absolute', left: c.x - passo / 2, top: c.y - passo / 2, width: passo, height: passo, alignItems: 'center', justifyContent: 'center' }}
            >
              {pedra && ultima ? <Surge key={h.lances}>{pedra}</Surge> : pedra}
              {!p && capturadas.includes(i) && <Estouro key={`e${h.lances}`} tamanho={passo} />}
            </Pressable>
          );
        })}
      </Moldura>

      {state.fase === 'jogando' && (
        <View className="flex-row flex-wrap justify-center gap-2">
          {botao('Passar a vez', () => aplicar(passar(state)))}
          {botao('Desistir', () => aplicar(desistir(state)))}
        </View>
      )}
      {state.fase === 'contagem' && (
        <View className="flex-row flex-wrap justify-center gap-2">
          {botao('Confirmar a contagem', () => aplicar(encerrar(state)), true)}
          {botao('Voltar a jogar', () => aplicar(voltarAJogar(state)))}
        </View>
      )}

      <ControlesJogo
        onRecomecar={recomecar}
        onDesfazer={() => {
          haptics.tapLight();
          h.desfazer(1);
        }}
        podeDesfazer={h.lances > 0}
      />
    </View>
  );
}
