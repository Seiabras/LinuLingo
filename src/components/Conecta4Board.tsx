import { useCallback, useMemo } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useLadoDoLinu } from '@/services/quem-comeca';
import * as haptics from '@/services/haptics';
import { useJogosPrefs, useVariante } from '@/services/jogos-prefs';
import { BUSCA_CONECTA4, BUSCA_POPOUT, escolherLance, NIVEIS } from '@/services/jogos-ia';
import { colunasDe, createInitialState, linhasDe, dropPiece, legalCols, legalPops, popPiece, type Color, type Conecta4Board as Grade, type Conecta4State } from '@/services/conecta4-engine';
import { Desliza, Pulsa } from './jogos/anim';
import { PecaFeitio, SombraCova, Textura } from './jogos/visual';
import { skinDoJogo } from '@/data/loja-jogos';
import { GRADES_LIGUE4 } from '@/data/pares-cores';
import { SeletorTamanho, useRecomecaNoTamanho, useTamanho, type OpcaoTamanho } from './jogos/tamanho';
import { ControlesJogo, Disco, FaixaResultado, Instrucao, LinuPensando, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';
import { useParDeCores } from './jogos/tema';

interface Passo {
  s: Conecta4State;
  ultimo?: { row: number; col: number };
  /** no Pop Out: a coluna de onde a peça de baixo foi tirada */
  tirou?: number;
}

const NOME: Record<Color, string> = { r: 'Vermelho', y: 'Amarelo' };
const BURACO = '#0B1F4D';
/**
 * Os tamanhos (colunas × fileiras): o 7×6 clássico e três dos outros tamanhos que a Wikipédia em inglês
 * cita (“Connect Four”, consultada em 15/10/2026: 5×4, 6×5, 8×7, 9×7, 10×7 e 8×8).
 */
const TAMANHOS: OpcaoTamanho[] = [
  { id: '6x5', rotulo: '6×5' },
  { id: '7x6', rotulo: '7×6' },
  { id: '8x7', rotulo: '8×7' },
  { id: '9x7', rotulo: '9×7' },
];

/** As 4 casas em linha de quem venceu (para brilhar), ou []. */
function linhaVencedora(b: Grade): string[] {
  const ROWS = linhasDe(b);
  const COLS = colunasDe(b);
  const dirs = [[0, 1], [1, 0], [1, 1], [1, -1]];
  for (let r = 0; r < ROWS; r++)
    for (let c = 0; c < COLS; c++) {
      const cor = b[r][c];
      if (!cor) continue;
      for (const [dr, dc] of dirs) {
        const cel = [0, 1, 2, 3].map((k) => [r + dr * k, c + dc * k] as const);
        if (cel.every(([rr, cc]) => rr >= 0 && rr < ROWS && cc >= 0 && cc < COLS && b[rr][cc] === cor)) return cel.map(([rr, cc]) => `${rr},${cc}`);
      }
    }
  return [];
}

/**
 * Tabuleiro jogável do Ligue 4 (ver `conecta4-engine.ts`): toque em qualquer casa da coluna e a
 * peça cai até o fundo livre. A dois no mesmo aparelho ou contra o Linu (ele fica com o amarelo).
 * Na variante Pop Out, embaixo de cada coluna em que a peça de baixo é sua aparece o botão “tirar”.
 */
export function Conecta4Board() {
  // vermelho e amarelo e a grade azul por padrão; o par de cores e a grade se escolhem no Personalizar
  const [c0, c1] = useParDeCores('conecta4');
  const COR: Record<Color, string> = { r: c0, y: c1 };
  const [prefs] = useJogosPrefs();
  const [tam, escolherTamanho] = useTamanho('conecta4', TAMANHOS, '7x6');
  const [variante] = useVariante('conecta4');
  const popout = variante === 'popout';
  const inicio = useCallback((): Passo => {
    const [c, r] = tam.split('x').map(Number);
    return { s: createInitialState(c, r, popout ? 'popout' : 'classica') };
  }, [tam, popout]);
  const h = useHistorico<Passo>(inicio, popout ? 'conecta4:popout' : 'conecta4');
  const { s: state, ultimo } = h.state;
  const COLS = colunasDe(state.board);
  const ROWS = linhasDe(state.board);
  useRecomecaNoTamanho(tam, `${COLS}x${ROWS}`, h.reiniciar);
  const casa = useCasa(COLS, 50);
  const xp = useXpDeVitoria('conecta4');
  // a peça especial da loja (o cempasúchil…), se estiver em uso
  const skin = skinDoJogo('conecta4', prefs.skins);
  // a grade: a da coleção especial (se tiver uma em uso) ou a cor escolhida
  const grade = skin?.moldura ?? (GRADES_LIGUE4.find((g) => g.id === prefs.ligue4Grade) ?? GRADES_LIGUE4[0]!).cor;

  const contraLinu = prefs.adversario === 'linu';
  // de que lado fica o Linu nesta partida (a escolha “quem começa”)
  const LINU = useLadoDoLinu(h.pilha[0]!.s.turn, h.pilha[0]!.s.turn === 'r' ? 'y' : 'r', h.pilha[0]!, h.lances);
  const vezDoLinu = contraLinu && state.turn === LINU && state.winner === null;
  const cols = useMemo(() => legalCols(state), [state]);
  const pops = useMemo(() => legalPops(state), [state]);
  const vencedora = useMemo(() => (state.winner && state.winner !== 'empate' ? linhaVencedora(state.board) : []), [state]);

  const soltar = useCallback(
    (col: number) => {
      const next = dropPiece(state, col);
      if (next === state) return;
      haptics.tapLight();
      const row = next.board.findIndex((linha, r) => linha[col] !== null && state.board[r][col] === null);
      h.jogar({ s: next, ultimo: { row, col } });
      if (next.winner !== null && next.winner !== 'empate' && !(contraLinu && next.winner === LINU)) xp.dar();
    },
    [state, h, contraLinu, xp, LINU],
  );

  const tirar = useCallback(
    (col: number) => {
      const next = popPiece(state, col);
      if (next === state) return;
      haptics.tapLight();
      h.jogar({ s: next, tirou: col }, 'captura');
      if (next.winner !== null && next.winner !== 'empate' && !(contraLinu && next.winner === LINU)) xp.dar();
    },
    [state, h, contraLinu, xp, LINU],
  );

  const pensando = useLinuJoga(vezDoLinu, () => {
    const { prof, ruido } = NIVEIS.conecta4[prefs.nivel];
    // tabuleiro mais largo, mais colunas para pensar: um lance a menos no 8×7 e dois no 9×7; no Pop
    // Out há o dobro de lances, e o Linu olha mais um lance a menos
    const menos = prof > 2 ? Math.max(0, COLS - 7) : 0;
    const p = Math.max(1, prof - menos - (popout ? 1 : 0));
    const l = escolherLance(state, p, popout ? BUSCA_POPOUT : BUSCA_CONECTA4, ruido);
    if (l === null) return;
    if (l >= 0) soltar(l);
    else tirar(-l - 1);
  });

  const recomecar = () => {
    haptics.tapLight();
    h.reiniciar();
    xp.zerar();
  };
  const desfazer = () => {
    haptics.tapLight();
    h.desfazer(contraLinu && state.turn !== LINU && h.lances >= 2 ? 2 : 1);
  };

  const nomeDe = (c: Color) => (contraLinu ? (c === LINU ? 'Linu' : 'Você') : NOME[c]);
  const resultado =
    state.winner === null
      ? null
      : state.winner === 'empate'
        ? { texto: popout ? 'Empate: a mesma posição voltou pela terceira vez' : 'Empate: o tabuleiro encheu', tom: 'empate' as const }
        : contraLinu
          ? state.winner !== LINU
            ? { texto: 'Quatro em linha! Você venceu o Linu!', tom: 'vitoria' as const }
            : { texto: 'O Linu fez quatro em linha.', tom: 'derrota' as const }
          : { texto: `Quatro em linha! ${NOME[state.winner]} venceu!`, tom: 'vitoria' as const };

  return (
    <View className="items-center gap-3">
      <PlacarJogo jogadores={(['r', 'y'] as const).map((c) => ({ id: c, nome: nomeDe(c), amostra: <Disco tamanho={16} cor={COR[c]} /> }))} vez={state.turn} terminou={state.winner !== null} />
      <SeletorTamanho opcoes={TAMANHOS} atual={tam} onEscolher={escolherTamanho} />
      {resultado ? (
        <FaixaResultado texto={resultado.texto} tom={resultado.tom} />
      ) : vezDoLinu || pensando ? (
        <LinuPensando visivel />
      ) : (
        <Instrucao>{popout ? 'Toque numa coluna para soltar a peça, ou em “tirar” para tirar uma peça sua de baixo.' : 'Toque numa coluna para soltar a peça.'}</Instrucao>
      )}

      <View style={{ backgroundColor: grade, padding: 6, borderRadius: 16, shadowColor: '#000', shadowOpacity: 0.3, shadowRadius: 8, shadowOffset: { width: 0, height: 4 }, elevation: 6 }}>
        {/* o brilho do plástico da grade */}
        <Textura material={null} raio={16} />
        <View style={{ flexDirection: 'row' }}>
          {Array.from({ length: COLS }, (_, col) => (
            <Pressable key={col} accessibilityLabel={`Coluna ${col + 1}`} disabled={!cols.includes(col) || vezDoLinu || state.winner !== null} onPress={() => soltar(col)}>
              {Array.from({ length: ROWS }, (__, row) => {
                const p = state.board[row][col];
                const caiu = ultimo && ultimo.row === row && ultimo.col === col;
                const brilha = vencedora.indexOf(`${row},${col}`);
                const disco = p && (skin ? <PecaFeitio tamanho={casa * 0.84} feitio={skin.pecas![p === 'r' ? 0 : 1].feitio} cor={skin.pecas![p === 'r' ? 0 : 1].cor} id={`c4-${p}`} /> : <Disco tamanho={casa * 0.84} cor={COR[p]} />);
                return (
                  <View key={row} style={{ width: casa, height: casa, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ position: 'absolute', width: casa * 0.84, height: casa * 0.84, borderRadius: casa, backgroundColor: BURACO }}>
                      <SombraCova raio={casa} />
                    </View>
                    {/* a peça sempre numa View (no web, a <svg> solta ficava por baixo do buraco, que é absoluto, e sumia) */}
                    {disco && caiu ? (
                      <Desliza key={h.lances} dx={0} dy={-(row + 1) * casa} duracao={420} quica>
                        {disco}
                      </Desliza>
                    ) : disco ? (
                      <View>{disco}</View>
                    ) : null}
                    {/* as quatro em linha acendem uma depois da outra (depois que a última peça cai) */}
                    {brilha >= 0 && (
                      <Pulsa key={`l${h.lances}`} atraso={480 + brilha * 130} style={{ position: 'absolute', width: casa * 0.9, height: casa * 0.9, borderRadius: casa, borderWidth: 3, borderColor: '#FFFFFF', pointerEvents: 'none' }}>
                        <View />
                      </Pulsa>
                    )}
                  </View>
                );
              })}
            </Pressable>
          ))}
        </View>
      </View>

      {popout && (
        <View style={{ flexDirection: 'row', paddingHorizontal: 6 }}>
          {Array.from({ length: COLS }, (_, col) => {
            const pode = pops.includes(col) && !vezDoLinu && state.winner === null;
            return (
              <View key={col} style={{ width: casa, alignItems: 'center' }}>
                {pode && (
                  <Pressable
                    accessibilityRole="button"
                    accessibilityLabel={`Tirar a sua peça de baixo da coluna ${col + 1}`}
                    onPress={() => tirar(col)}
                    className="rounded-full bg-slate-100 px-1.5 py-1 active:opacity-70 dark:bg-slate-800"
                  >
                    <Text className="text-[10px] font-bold text-slate-700 dark:text-slate-200">tirar</Text>
                  </Pressable>
                )}
              </View>
            );
          })}
        </View>
      )}

      <ControlesJogo onRecomecar={recomecar} onDesfazer={desfazer} podeDesfazer={h.lances > 0 && !pensando} />
    </View>
  );
}
