import { useCallback, useMemo } from 'react';
import { Pressable, View } from 'react-native';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { BUSCA_CONECTA4, escolherLance, NIVEIS } from '@/services/jogos-ia';
import { COLS, ROWS, createInitialState, dropPiece, legalCols, type Color, type Conecta4Board as Grade, type Conecta4State } from '@/services/conecta4-engine';
import { Desliza } from './jogos/anim';
import { PecaFeitio } from './jogos/visual';
import { skinDoJogo } from '@/data/loja-jogos';
import { ControlesJogo, Disco, FaixaResultado, Instrucao, LinuPensando, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

interface Passo {
  s: Conecta4State;
  ultimo?: { row: number; col: number };
}

const NOME: Record<Color, string> = { r: 'Vermelho', y: 'Amarelo' };
const COR: Record<Color, string> = { r: '#E11D48', y: '#FACC15' };
const AZUL = '#1D4ED8';
const BURACO = '#0B1F4D';
const inicio = (): Passo => ({ s: createInitialState() });

/** As 4 casas em linha de quem venceu (para brilhar), ou []. */
function linhaVencedora(b: Grade): string[] {
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
 */
export function Conecta4Board() {
  const [prefs] = useJogosPrefs();
  const casa = useCasa(COLS, 50);
  const h = useHistorico<Passo>(inicio, 'conecta4');
  const { s: state, ultimo } = h.state;
  const xp = useXpDeVitoria('conecta4');
  // a peça especial da loja (o cempasúchil…), se estiver em uso
  const skin = skinDoJogo('conecta4', prefs.skins);

  const contraLinu = prefs.adversario === 'linu';
  const vezDoLinu = contraLinu && state.turn === 'y' && state.winner === null;
  const cols = useMemo(() => legalCols(state), [state]);
  const vencedora = useMemo(() => (state.winner && state.winner !== 'empate' ? linhaVencedora(state.board) : []), [state]);

  const soltar = useCallback(
    (col: number) => {
      const next = dropPiece(state, col);
      if (next === state) return;
      haptics.tapLight();
      const row = next.board.findIndex((linha, r) => linha[col] !== null && state.board[r][col] === null);
      h.jogar({ s: next, ultimo: { row, col } });
      if (next.winner !== null && next.winner !== 'empate' && !(contraLinu && next.winner === 'y')) xp.dar();
    },
    [state, h, contraLinu, xp],
  );

  const pensando = useLinuJoga(vezDoLinu, () => {
    const { prof, ruido } = NIVEIS.conecta4[prefs.nivel];
    const col = escolherLance(state, prof, BUSCA_CONECTA4, ruido);
    if (col !== null) soltar(col);
  });

  const recomecar = () => {
    haptics.tapLight();
    h.reiniciar();
    xp.zerar();
  };
  const desfazer = () => {
    haptics.tapLight();
    h.desfazer(contraLinu && state.turn === 'r' && h.lances >= 2 ? 2 : 1);
  };

  const nomeDe = (c: Color) => (contraLinu ? (c === 'r' ? 'Você' : 'Linu') : NOME[c]);
  const resultado =
    state.winner === null
      ? null
      : state.winner === 'empate'
        ? { texto: 'Empate: o tabuleiro encheu', tom: 'empate' as const }
        : contraLinu
          ? state.winner === 'r'
            ? { texto: 'Quatro em linha! Você venceu o Linu!', tom: 'vitoria' as const }
            : { texto: 'O Linu fez quatro em linha.', tom: 'derrota' as const }
          : { texto: `Quatro em linha! ${NOME[state.winner]} venceu!`, tom: 'vitoria' as const };

  return (
    <View className="items-center gap-3">
      <PlacarJogo jogadores={(['r', 'y'] as const).map((c) => ({ id: c, nome: nomeDe(c), amostra: <Disco tamanho={16} cor={COR[c]} /> }))} vez={state.turn} terminou={state.winner !== null} />
      {resultado ? (
        <FaixaResultado texto={resultado.texto} tom={resultado.tom} />
      ) : vezDoLinu || pensando ? (
        <LinuPensando visivel />
      ) : (
        <Instrucao>Toque numa coluna para soltar a peça.</Instrucao>
      )}

      <View style={{ backgroundColor: AZUL, padding: 6, borderRadius: 16, shadowColor: '#000', shadowOpacity: 0.3, shadowRadius: 8, shadowOffset: { width: 0, height: 4 }, elevation: 6 }}>
        <View style={{ flexDirection: 'row' }}>
          {Array.from({ length: COLS }, (_, col) => (
            <Pressable key={col} accessibilityLabel={`Coluna ${col + 1}`} disabled={!cols.includes(col) || vezDoLinu || state.winner !== null} onPress={() => soltar(col)}>
              {Array.from({ length: ROWS }, (__, row) => {
                const p = state.board[row][col];
                const caiu = ultimo && ultimo.row === row && ultimo.col === col;
                const brilha = vencedora.includes(`${row},${col}`);
                const disco = p && (skin ? <PecaFeitio tamanho={casa * 0.84} feitio={skin.pecas[p === 'r' ? 0 : 1].feitio} cor={skin.pecas[p === 'r' ? 0 : 1].cor} id={`c4-${p}`} /> : <Disco tamanho={casa * 0.84} cor={COR[p]} />);
                return (
                  <View key={row} style={{ width: casa, height: casa, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ position: 'absolute', width: casa * 0.84, height: casa * 0.84, borderRadius: casa, backgroundColor: BURACO }} />
                    {disco && caiu ? (
                      <Desliza key={h.lances} dx={0} dy={-(row + 1) * casa} duracao={420} quica>
                        {disco}
                      </Desliza>
                    ) : (
                      disco
                    )}
                    {brilha && <View style={{ position: 'absolute', width: casa * 0.9, height: casa * 0.9, borderRadius: casa, borderWidth: 3, borderColor: '#FFFFFF' }} />}
                  </View>
                );
              })}
            </Pressable>
          ))}
        </View>
      </View>

      <ControlesJogo onRecomecar={recomecar} onDesfazer={desfazer} podeDesfazer={h.lances > 0 && !pensando} />
    </View>
  );
}
