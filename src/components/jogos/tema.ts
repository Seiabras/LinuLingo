import { useJogosPrefs } from '@/services/jogos-prefs';
import { TEMAS_JOGO, type TemaJogo } from '@/data/temas-jogos';

export { TEMAS_JOGO, TEMAS_LOJA, type TemaJogo } from '@/data/temas-jogos';

/** Cores das peças redondas (damas, reversi, go, trilha, hnefatafl): sempre com contorno, para destacar de qualquer casa. */
export const PECA = {
  escura: { fundo: '#1C1F24', brilho: '#5B6472', borda: '#000000', anel: '#E8E2D0' },
  clara: { fundo: '#F6F3EA', brilho: '#FFFFFF', borda: '#2B2B2B', anel: '#8A8170' },
} as const;

export function useTemaJogo(): TemaJogo {
  const [prefs] = useJogosPrefs();
  return TEMAS_JOGO[prefs.tema] ?? TEMAS_JOGO.madeira;
}
