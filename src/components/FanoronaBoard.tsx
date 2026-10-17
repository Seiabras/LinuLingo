import { useCallback, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Line } from 'react-native-svg';
import { useLadoDoLinu } from '@/services/quem-comeca';
import * as haptics from '@/services/haptics';
import { useJogosPrefs, useVariante } from '@/services/jogos-prefs';
import { BUSCA_FANORONA, escolherLance, NIVEIS } from '@/services/jogos-ia';
import {
  COLUNAS,
  combinarEmpate,
  contar,
  createInitialState,
  naVela,
  encerrarVez,
  forte,
  idx,
  jogar,
  lancesLegais,
  LINHAS,
  type Cor,
  type FanoronaState,
  type LanceFanorona,
} from '@/services/fanorona-engine';
import { Desliza, Estouro } from './jogos/anim';
import { FundoSuperficie } from './jogos/visual';
import { useTemaJogo } from './jogos/tema';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, Moldura, PecaRedonda, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

const NOME: Record<Cor, string> = { w: 'Brancas', b: 'Pretas' };
const LADO: Record<Cor, 'clara' | 'escura'> = { w: 'clara', b: 'escura' };

/**
 * Fanorona de Madagascar (ver `fanorona-engine.ts`): toque numa peça e depois num ponto marcado. Os
 * pontos em vermelho capturam; as peças que vão sair ganham um anel. Quando o mesmo lance pode capturar
 * por aproximação ou por afastamento, aparecem os dois botões para escolher. Depois de capturar, a
 * mesma peça pode seguir capturando ou parar. A dois no mesmo aparelho ou contra o Linu (ele fica com
 * as pretas e joga a vez inteira de uma vez).
 */
export function FanoronaBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const passo = useCasa(COLUNAS, 44, 30);
  const W = passo * COLUNAS;
  const H = passo * LINHAS;
  // a variante 'vela' (a revanche): as pretas, vencedoras da anterior, só oferecem pedras até ficarem com 5
  const [variante] = useVariante('fanorona');
  const vela = variante === 'vela';
  const inicio = useCallback(() => createInitialState(vela), [vela]);
  const h = useHistorico<FanoronaState>(inicio, vela ? 'fanorona:vela' : 'fanorona');
  const state = h.state;
  const xp = useXpDeVitoria('fanorona');
  const [sel, setSel] = useState<number | null>(null);
  const [escolha, setEscolha] = useState<LanceFanorona[] | null>(null);

  const contraLinu = prefs.adversario === 'linu';
  // de que lado fica o Linu nesta partida (a escolha “quem começa”)
  const LINU = useLadoDoLinu(h.pilha[0]!.turn, h.pilha[0]!.turn === 'w' ? 'b' : 'w', h.pilha[0]!, h.lances);
  // contra o Linu, o jogador fica sempre embaixo: o tabuleiro gira quando o lado dele é o de cima
  const virado = contraLinu && LINU === 'w';
  const vezDoLinu = contraLinu && state.turn === LINU && state.winner === null;
  const lances = useMemo(() => lancesLegais(state), [state]);
  const selecionada = state.seq ? state.seq.peca : sel;
  const doSelecionado = selecionada === null ? [] : lances.filter((l) => l.de === selecionada);
  const movem = new Set(lances.map((l) => l.de));
  const temCaptura = lances.some((l) => l.tipo !== null);

  const aplicar = useCallback(
    (next: FanoronaState) => {
      setSel(null);
      setEscolha(null);
      h.jogar(next, next.ultimo !== state.ultimo && next.ultimo?.capturadas.length ? 'captura' : undefined);
      if (next.winner !== null && (!contraLinu || next.winner !== LINU)) xp.dar();
    },
    [h, contraLinu, xp, state, LINU],
  );

  const fazer = (l: LanceFanorona) => {
    haptics.tapLight();
    aplicar(jogar(state, l));
  };

  const tocar = (i: number) => {
    if (state.winner !== null || vezDoLinu) return;
    const opcoes = doSelecionado.filter((l) => l.para === i);
    if (opcoes.length === 1) return fazer(opcoes[0]!);
    if (opcoes.length > 1) {
      haptics.tapLight();
      setEscolha(opcoes);
      return;
    }
    if (!state.seq && state.board[i] === state.turn && movem.has(i)) {
      haptics.tapLight();
      setSel(i === sel ? null : i);
      setEscolha(null);
    }
  };

  // o Linu joga a vez inteira (a sequência de capturas, se houver) e ela entra como um lance só
  const pensando = useLinuJoga(vezDoLinu, () => {
    const { prof, ruido } = NIVEIS.fanorona[prefs.nivel];
    let s = state;
    for (let k = 0; k < 20 && s.turn === LINU && s.winner === null; k++) {
      const m = escolherLance(s, prof, BUSCA_FANORONA, ruido);
      if (m === null) break;
      s = m === 'parar' ? encerrarVez(s) : jogar(s, m);
    }
    if (s !== state) aplicar(s);
  });

  const recomecar = () => {
    haptics.tapLight();
    setSel(null);
    setEscolha(null);
    h.reiniciar();
    xp.zerar();
  };
  // contra o Linu, desfazer volta ao começo da sua vez anterior (a vez pode ter vários passos)
  const desfazer = () => {
    haptics.tapLight();
    setSel(null);
    setEscolha(null);
    if (!contraLinu) return h.desfazer(1);
    let n = 1;
    while (h.pilha.length - 1 - n > 0) {
      const p = h.pilha[h.pilha.length - 1 - n]!;
      if (p.turn === 'w' && !p.seq) break;
      n++;
    }
    h.desfazer(n);
  };

  const nomeDe = (c: Cor) => (contraLinu ? (c === LINU ? 'Linu' : 'Você') : NOME[c]);
  const resultado =
    state.winner === null
      ? null
      : state.winner === 'empate'
        ? { texto: state.vela ? 'Empate: na vela, o empate não perdoa.' : 'Empate!', tom: 'empate' as const }
        : state.vela && state.winner === 'w' && state.board.includes('b')
          ? { texto: `${contraLinu ? 'O Linu' : 'As pretas'} não ${contraLinu ? 'tinha' : 'tinham'} mais pedra para oferecer: a vela parou, e ${contraLinu ? 'você foi perdoado' : 'as brancas foram perdoadas'}!`, tom: 'vitoria' as const }
        : contraLinu
          ? state.winner !== LINU
            ? { texto: 'Você capturou todas as peças do Linu!', tom: 'vitoria' as const }
            : { texto: 'O Linu capturou todas as suas peças.', tom: 'derrota' as const }
          : { texto: `As ${NOME[state.winner].toLowerCase()} venceram!`, tom: 'vitoria' as const };

  const centro = (i: number) => ({ x: (i % COLUNAS) * passo + passo / 2, y: Math.floor(i / COLUNAS) * passo + passo / 2 });
  const alvos = new Map<number, boolean>();
  for (const l of doSelecionado) alvos.set(l.para, (alvos.get(l.para) ?? false) || l.tipo !== null);
  const marcadas = new Set((escolha ?? doSelecionado.filter((l) => l.tipo !== null)).flatMap((l) => l.capturadas));
  const ultimo = state.ultimo;
  const capturadasAgora = new Set(ultimo?.capturadas ?? []);

  // as linhas do tabuleiro: horizontais, verticais e as diagonais que saem dos pontos fortes
  const linhas: { a: number; b: number }[] = [];
  for (let i = 0; i < LINHAS * COLUNAS; i++) {
    const r = Math.floor(i / COLUNAS);
    const c = i % COLUNAS;
    if (c + 1 < COLUNAS) linhas.push({ a: i, b: idx(r, c + 1) });
    if (r + 1 < LINHAS) linhas.push({ a: i, b: idx(r + 1, c) });
    if (forte(i) && r + 1 < LINHAS) {
      if (c + 1 < COLUNAS) linhas.push({ a: i, b: idx(r + 1, c + 1) });
      if (c - 1 >= 0) linhas.push({ a: i, b: idx(r + 1, c - 1) });
    }
  }

  const velaAgora = naVela(state);
  const instrucao = velaAgora
    ? state.turn === 'b'
      ? 'Vela: as pretas não capturam. Ande e deixe uma pedra para as brancas capturarem.'
      : 'Vela: capture uma pedra das pretas (uma só por vez). Quando elas tiverem 5, volta a regra normal.'
    : state.seq
    ? 'Capturou! Pode seguir capturando com a mesma peça (pontos vermelhos) ou parar aqui.'
    : temCaptura
      ? `${contraLinu ? (state.turn === LINU ? 'Vez do Linu' : 'Sua vez') : `Vez das ${NOME[state.turn].toLowerCase()}`}: capturar é obrigatório. Toque numa peça marcada.`
      : `${contraLinu ? (state.turn === LINU ? 'Vez do Linu' : 'Sua vez') : `Vez das ${NOME[state.turn].toLowerCase()}`}: toque numa peça e depois num ponto vizinho vazio.`;

  return (
    <View className="items-center gap-3">
      <PlacarJogo
        jogadores={(['w', 'b'] as const).map((c) => ({ id: c, nome: nomeDe(c), amostra: <PecaRedonda jogo="fanorona" lado={LADO[c]} tamanho={18} />, extra: `${contar(state, c)} peças` }))}
        vez={state.turn}
        terminou={state.winner !== null}
      />
      {resultado ? <FaixaResultado texto={resultado.texto} tom={resultado.tom} /> : vezDoLinu || pensando ? <LinuPensando visivel /> : <Instrucao>{instrucao}</Instrucao>}

      <Moldura virado={virado} largura={W} altura={H} fundo={tema.superficie}>
        <FundoSuperficie largura={W} altura={H} tema={tema} unidade={passo * 2} />
        {/* as linhas numa camada por cima do fundo (no web, o fundo, que é absoluto, cobria as linhas) */}
        <Svg width={W} height={H} style={{ position: 'absolute', left: 0, top: 0 }}>
          {linhas.map(({ a, b }, k) => {
            const p = centro(a);
            const q = centro(b);
            return <Line key={k} x1={p.x} y1={p.y} x2={q.x} y2={q.y} stroke={tema.linha} strokeWidth={1.4} />;
          })}
        </Svg>
        {state.board.map((x, i) => {
          const c = centro(i);
          const alvo = alvos.get(i);
          const veioDe = ultimo && ultimo.para === i ? ultimo.de : null;
          const peca = x && (
            <View>
              <PecaRedonda jogo="fanorona" lado={LADO[x]} tamanho={passo * 0.78} />
              {(selecionada === i || marcadas.has(i) || (prefs.dicas && !state.seq && selecionada === null && movem.has(i) && !vezDoLinu)) && (
                <View
                  style={{
                    position: 'absolute',
                    left: -3,
                    top: -3,
                    width: passo * 0.78 + 6,
                    height: passo * 0.78 + 6,
                    borderRadius: passo,
                    borderWidth: 3,
                    borderColor: marcadas.has(i) ? '#E11D48' : selecionada === i ? tema.selecao : tema.dica,
                  }}
                />
              )}
            </View>
          );
          return (
            <Pressable
              key={i}
              accessibilityLabel={`Ponto ${Math.floor(i / COLUNAS) + 1}, ${(i % COLUNAS) + 1}${x ? `: ${NOME[x].toLowerCase().slice(0, -1)}` : ''}`}
              onPress={() => tocar(i)}
              style={{ position: 'absolute', left: c.x - passo / 2, top: c.y - passo / 2, width: passo, height: passo, alignItems: 'center', justifyContent: 'center' }}
            >
              {alvo !== undefined && (
                <View style={{ position: 'absolute', width: passo * 0.34, height: passo * 0.34, borderRadius: passo, backgroundColor: alvo ? '#E11D48' : tema.dica, opacity: 0.85 }} />
              )}
              {peca && veioDe !== null && prefs.animacoes ? (
                <Desliza key={h.lances} dx={((veioDe % COLUNAS) - (i % COLUNAS)) * passo} dy={(Math.floor(veioDe / COLUNAS) - Math.floor(i / COLUNAS)) * passo}>
                  {peca}
                </Desliza>
              ) : (
                peca
              )}
              {prefs.ultimoLance && ultimo && (ultimo.de === i || ultimo.para === i) && !x && (
                <View style={{ position: 'absolute', width: passo * 0.5, height: passo * 0.5, borderRadius: passo, borderWidth: 2, borderColor: tema.ultimo }} />
              )}
              {capturadasAgora.has(i) && <Estouro key={`e${h.lances}`} tamanho={passo} />}
            </Pressable>
          );
        })}
      </Moldura>

      {escolha && (
        <View className="flex-row flex-wrap justify-center gap-2">
          {escolha.map((l) => (
            <Pressable key={l.tipo} accessibilityRole="button" onPress={() => fazer(l)} className="rounded-full bg-rose-600 px-4 py-2 active:opacity-80">
              <Text className="font-extrabold text-white">
                {l.tipo === 'aproximacao' ? 'Aproximação' : 'Afastamento'}: leva {l.capturadas.length}
              </Text>
            </Pressable>
          ))}
        </View>
      )}

      <ControlesJogo
        onRecomecar={recomecar}
        onDesfazer={desfazer}
        podeDesfazer={h.lances > 0 && !pensando}
        extra={
          <>
            {state.seq && !vezDoLinu && (
              <Pressable accessibilityRole="button" onPress={() => aplicar(encerrarVez(state))} className="rounded-full bg-emerald-600 px-3.5 py-2 active:opacity-80">
                <Text className="text-sm font-bold text-white">Parar aqui</Text>
              </Pressable>
            )}
            {state.winner === null && !contraLinu && h.lances > 0 && (
              <Pressable accessibilityRole="button" onPress={() => aplicar(combinarEmpate(state))} className="rounded-full bg-slate-100 px-3.5 py-2 active:bg-slate-200 dark:bg-slate-800">
                <Text className="text-sm font-bold text-slate-700 dark:text-slate-200">Combinar empate</Text>
              </Pressable>
            )}
          </>
        }
      />
    </View>
  );
}
