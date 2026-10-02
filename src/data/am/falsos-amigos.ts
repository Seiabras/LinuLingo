import type { FalseFriend } from '../types';

/**
 * Falsos amigos amárico × português. O amárico não é parente do português, então os poucos
 * “sósias” vêm de empréstimos do italiano (herança da ocupação de 1936–1941) que mudaram de
 * sentido ao entrar no amárico. Fontes: Wiktionary, verbete de cada palavra (seção “Etymology”).
 */
export const FALSE_FRIENDS_AM: FalseFriend[] = [
  {
    word: 'ካርታ',
    means: 'mapa',
    looksLike: 'carta (a correspondência)',
    forThat: 'ደብዳቤ',
    emoji: '🗺️',
    example: ['ይህ ካርታ ነው።', 'Isto é um mapa.'],
  },
  {
    word: 'ፖስታ',
    means: 'envelope, correspondência (do italiano “posta”)',
    looksLike: 'posta (a posta de peixe ou de carne)',
    forThat: 'ስጋ',
    emoji: '✉️',
    example: ['ይህ ፖስታ ነው።', 'Isto é um envelope.'],
  },
];
