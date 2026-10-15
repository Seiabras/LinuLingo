import type { ShogiPecas } from '@/services/jogos-prefs';

/**
 * Os estilos de peça do shogi (personalização). As peças de verdade trazem o nome em kanji; para quem
 * não lê kanji, há peças “de aprendiz”, que desenham na peça para onde ela anda, como as peças com
 * setas feitas para iniciantes (a “Study Shogi” da Kumon, por exemplo).
 */
export const ESTILOS_SHOGI: Record<ShogiPecas, { nome: string; kanji: boolean; setas: boolean }> = {
  kanji: { nome: 'Kanji', kanji: true, setas: false },
  setas: { nome: 'Kanji e movimento', kanji: true, setas: true },
  letras: { nome: 'Letra e movimento', kanji: false, setas: true },
};

/** A letra de cada peça no estilo sem kanji (iniciais em português; a promovida ganha um “+”). */
export const LETRAS_SHOGI: Record<number, string> = { 1: 'P', 2: 'L', 3: 'C', 4: 'Pr', 5: 'O', 6: 'B', 7: 'T', 8: 'R', 9: '+P', 10: '+L', 11: '+C', 12: '+Pr', 13: '+B', 14: '+T' };
