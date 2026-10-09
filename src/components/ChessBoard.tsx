import { useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Button, Chip } from '@/components/ui';
import { useApp } from '@/services/app-state';
import { awardXp } from '@/database/queries';
import * as haptics from '@/services/haptics';
import {
  createInitialState,
  legalMovesFrom,
  makeMove,
  moveNeedsPromotion,
  type ChessState,
  type Color,
  type PieceType,
  type Pos,
} from '@/services/xadrez-engine';

const CELL = 38;
const BOARD_PX = CELL * 8;

const LIGHT = '#F1F5F9'; // slate-100
const DARK = '#64748B'; // slate-500
const SELECTED_BG = 'rgba(252, 211, 77, 0.55)'; // amber, casa selecionada
const CHECK_BG = 'rgba(220, 38, 38, 0.45)'; // vermelho, rei em xeque
const MOVE_DOT = '#16A34A'; // verde, lance possível pra casa vazia
const CAPTURE_RING = '#DC2626'; // vermelho, lance possível capturando

const GLYPH: Record<Color, Record<PieceType, string>> = {
  w: { k: '♔', q: '♕', r: '♖', b: '♗', n: '♘', p: '♙' },
  b: { k: '♚', q: '♛', r: '♜', b: '♝', n: '♞', p: '♟' },
};

const PROMO_PIECES: PieceType[] = ['q', 'r', 'b', 'n'];
const PROMO_LABEL: Record<PieceType, string> = { q: 'Dama', r: 'Torre', b: 'Bispo', n: 'Cavalo', p: 'Peão', k: 'Rei' };

const NOME_COR: Record<Color, string> = { w: 'Brancas', b: 'Pretas' };

/** Casa do rei de quem tem a vez, só quando ele está em xeque (pra destacar na tela); senão `null`. */
function checkedKingPos(state: ChessState): Pos | null {
  if (!state.inCheck) return null;
  for (let row = 0; row < 8; row++)
    for (let col = 0; col < 8; col++) {
      const p = state.board[row][col];
      if (p && p.type === 'k' && p.color === state.turn) return { row, col };
    }
  return null;
}

/**
 * Tabuleiro jogável de Xadrez (8×8, 2 jogadores no mesmo aparelho, passando a vez). Regras oficiais
 * da FIDE (ver `xadrez-engine.ts`): toque numa peça sua pra selecionar, toque numa casa marcada pra
 * mover. Promoção pede a peça escolhida; sem IA — os dois lados são jogadores humanos.
 */
export function ChessBoard() {
  const { db, refresh } = useApp();
  const [state, setState] = useState<ChessState>(createInitialState);
  const [selected, setSelected] = useState<Pos | null>(null);
  const [pendingPromotion, setPendingPromotion] = useState<{ from: Pos; to: Pos; color: Color } | null>(null);
  const [xpGanho, setXpGanho] = useState(false);

  const moves = useMemo(() => (selected ? legalMovesFrom(state, selected) : []), [state, selected]);
  const kingPos = useMemo(() => checkedKingPos(state), [state]);

  const reiniciar = () => {
    haptics.tapLight();
    setState(createInitialState());
    setSelected(null);
    setPendingPromotion(null);
    setXpGanho(false);
  };

  const concluirLance = (from: Pos, to: Pos, promotion?: PieceType) => {
    const next = makeMove(state, from, to, promotion);
    if (next === state) return;
    haptics.tapLight();
    setState(next);
    setSelected(null);
    setPendingPromotion(null);
    if (next.result.status === 'checkmate' && !xpGanho) {
      setXpGanho(true);
      haptics.success();
      awardXp(db, 10, 'jogo:xadrez').then(() => refresh());
    }
  };

  const aoTocarCasa = (pos: Pos) => {
    if (pendingPromotion || state.result.status !== 'playing') return;
    if (selected && moves.some((m) => m.row === pos.row && m.col === pos.col)) {
      if (moveNeedsPromotion(state, selected, pos)) {
        haptics.tapLight();
        setPendingPromotion({ from: selected, to: pos, color: state.turn });
      } else {
        concluirLance(selected, pos);
      }
      return;
    }
    const piece = state.board[pos.row][pos.col];
    if (piece && piece.color === state.turn) {
      haptics.tapLight();
      setSelected(pos);
    } else {
      setSelected(null);
    }
  };

  const resultLabel = (() => {
    if (state.result.status === 'checkmate') return `Xeque-mate! ${NOME_COR[state.result.winner]} venceram 🎉`;
    if (state.result.status === 'stalemate') return 'Afogamento — empate (ninguém em xeque, mas sem lance legal)';
    if (state.result.status === 'draw') return state.result.reason === '50-lances' ? 'Empate — 50 lances sem captura nem movimento de peão' : 'Empate — mesma posição repetida 3 vezes';
    return null;
  })();

  return (
    <View className="items-center gap-3">
      <View className="flex-row items-center gap-2">
        {(['w', 'b'] as const).map((c) => (
          <View key={c} className="flex-row items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 dark:bg-slate-800">
            <Text className="text-sm">{GLYPH[c].k}</Text>
            <Text className={`text-xs font-bold ${state.turn === c && state.result.status === 'playing' ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
              {NOME_COR[c]}
            </Text>
          </View>
        ))}
      </View>

      {resultLabel ? (
        <Chip label={resultLabel} tone={state.result.status === 'checkmate' ? 'green' : 'amber'} />
      ) : (
        state.inCheck && <Chip label={`Xeque! ${NOME_COR[state.turn]} precisam responder`} tone="rose" />
      )}

      <View style={{ width: BOARD_PX, height: BOARD_PX }} className="overflow-hidden rounded-xl border border-slate-300 dark:border-slate-600">
        {state.board.map((rowPieces, row) => (
          <View key={row} style={{ flexDirection: 'row' }}>
            {rowPieces.map((piece, col) => {
              const isDark = (row + col) % 2 === 1;
              const isSelected = selected?.row === row && selected?.col === col;
              const isMove = moves.some((m) => m.row === row && m.col === col);
              const isCheckSquare = kingPos?.row === row && kingPos?.col === col;
              return (
                <Pressable
                  key={col}
                  onPress={() => aoTocarCasa({ row, col })}
                  style={{ width: CELL, height: CELL, backgroundColor: isDark ? DARK : LIGHT, alignItems: 'center', justifyContent: 'center' }}
                >
                  {isCheckSquare && <View style={{ position: 'absolute', width: CELL, height: CELL, backgroundColor: CHECK_BG }} />}
                  {isSelected && <View style={{ position: 'absolute', width: CELL, height: CELL, backgroundColor: SELECTED_BG }} />}
                  {piece && (
                    <Text
                      style={{
                        fontSize: CELL * 0.72,
                        lineHeight: CELL * 0.9,
                        color: piece.color === 'w' ? '#F8FAFC' : '#0F172A',
                        textShadowColor: piece.color === 'w' ? 'rgba(15,23,42,0.85)' : 'rgba(248,250,252,0.55)',
                        textShadowOffset: { width: 0, height: 0 },
                        textShadowRadius: 1.5,
                      }}
                    >
                      {GLYPH[piece.color][piece.type]}
                    </Text>
                  )}
                  {isMove && !piece && <View style={{ position: 'absolute', width: 10, height: 10, borderRadius: 5, backgroundColor: MOVE_DOT }} />}
                  {isMove && piece && (
                    <View style={{ position: 'absolute', width: CELL - 4, height: CELL - 4, borderRadius: 6, borderWidth: 2.5, borderColor: CAPTURE_RING }} />
                  )}
                </Pressable>
              );
            })}
          </View>
        ))}
      </View>

      {pendingPromotion && (
        <View className="items-center gap-2 rounded-xl border border-amber-300 bg-amber-50 p-3 dark:border-amber-800 dark:bg-amber-950/40">
          <Text className="text-sm font-bold text-slate-800 dark:text-slate-100">Promover o peão para:</Text>
          <View className="flex-row gap-2">
            {PROMO_PIECES.map((pt) => (
              <Pressable
                key={pt}
                onPress={() => concluirLance(pendingPromotion.from, pendingPromotion.to, pt)}
                className="items-center gap-0.5 rounded-xl bg-white px-3 py-2 active:bg-slate-100 dark:bg-slate-800 dark:active:bg-slate-700"
              >
                <Text style={{ fontSize: 26, color: '#0F172A' }}>{GLYPH[pendingPromotion.color][pt]}</Text>
                <Text className="text-[10px] font-semibold text-slate-600 dark:text-slate-300">{PROMO_LABEL[pt]}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      )}

      <Button title="Recomeçar" variant="ghost" onPress={reiniciar} />
    </View>
  );
}
