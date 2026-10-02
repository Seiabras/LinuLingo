import type { StorySeed } from '../types';

/**
 * Histórias interativas do fon — uma por nível (A1.1 e A1.2), pacote incompleto (ver `incomplete`
 * em index.ts). Só usam palavras e construções com fonte verificada (ver vocabulario.ts). O nome
 * “Sika” é um nome fon de verdade, dado tradicionalmente a meninas nascidas numa segunda-feira
 * (Wiktionary, verbete «Sika»); como não há fonte confirmada para “bom dia”/“como vai” em fon, as
 * duas histórias começam direto pela única saudação confirmada, “Kwabɔ” (bem-vindo).
 */
export const STORIES_FON: StorySeed[] = [
  {
    id: 'fon-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Kwabɔ ɖò aximɛ ɔ́',
    emoji: '🏪',
    summary: 'Você chega ao mercado de Cotonou, onde um honton (amigo vendedor) te recebe e oferece peixe.',
    cultural_context: 'Cotonou é a maior cidade do Benin e seus mercados, como o Dantokpa, são centros de vida social e comercial do povo fon.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Kwabɔ! Un ɖó hwévi ɖò aximɛ.',
        translation: 'Bem-vindo! Eu tenho peixe no mercado.',
        emoji: '🙋',
        choices: [
          { text: 'Un xɔ̀ hwévi.', translation: 'Eu compro peixe.', next: 'compra' },
          { text: 'Wémà ɔ́.', translation: 'O livro.', wrong: 'O honton falou de peixe, não de livro. Responda sobre o que ele está oferecendo.' },
        ],
      },
      compra: {
        text: 'Nǔ ɔ́ kpàtàkì: un ɖó akouwè?',
        translation: 'A coisa importante: você tem dinheiro?',
        emoji: '💰',
        choices: [
          { text: 'Un ɖó akouwè.', translation: 'Eu tenho dinheiro.', next: 'final_bom' },
          { text: 'Un yì.', translation: 'Eu vou embora.', wrong: 'Vocês já estão combinando a compra do peixe — ir embora agora não responde à pergunta sobre o dinheiro.' },
        ],
      },
      final_bom: {
        text: 'Kwabɔ! Hweví ɔ́ nú wé.',
        translation: 'Bem-vindo! O peixe é para você.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Nǔ ɔ́ kpàtàkì!', message: 'Você comprou peixe no mercado de Cotonou com a ajuda do honton.' },
      },
    },
    glossary: [
      ['Kwabɔ', 'bem-vindo'],
      ['aximɛ', 'mercado'],
      ['xɔ̀', 'comprar'],
      ['akouwè', 'dinheiro'],
    ],
  },
  {
    id: 'fon-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Sika, gbɔ́ kpo hweví kpo',
    emoji: '🐐',
    summary: 'Sika, criadora de animais perto de Abomé, mostra os bichos da fazenda e os peixes e lagostas que traz do mercado.',
    cultural_context: 'Abomé foi a capital do Reino do Daomé; hoje a região mistura a criação tradicional de cabras e ovelhas com o comércio de peixe e frutos do mar vindos da costa.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Kwabɔ! Un ɖó gbɔ́ kpo lɛ̀ngbɔ́ kpo.',
        translation: 'Bem-vindo! Eu tenho cabra e ovelha.',
        emoji: '🐑',
        choices: [
          { text: 'Un xɔ̀ lɛ̀ngbɔ́ví.', translation: 'Eu compro um cordeiro.', next: 'peixe' },
          { text: 'Un ɖó ví.', translation: 'Eu tenho um filho/uma filha.', wrong: 'Sika está oferecendo animais, não perguntando sobre sua família. Diga o que você quer comprar.' },
        ],
      },
      peixe: {
        text: 'Hweví kpo acɔci kpo ɖò aximɛ.',
        translation: 'Peixe e lagosta estão no mercado.',
        emoji: '🦞',
        choices: [
          { text: 'Un yì aximɛ.', translation: 'Eu vou ao mercado.', next: 'final_bom' },
          { text: 'Hanjitɔ́ ɔ́.', translation: 'O cantor.', wrong: 'Isso não responde sobre ir ao mercado buscar peixe e lagosta.' },
        ],
      },
      final_bom: {
        text: 'Kwabɔ ɖò aximɛ ɔ́, honton!',
        translation: 'Bem-vindo ao mercado, amigo!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Nǔ ɔ́ kpàtàkì!', message: 'Você foi ao mercado com Sika e voltou com os animais e peixes que precisava.' },
      },
    },
    glossary: [
      ['gbɔ́', 'cabra'],
      ['lɛ̀ngbɔ́ví', 'cordeiro'],
      ['acɔci', 'lagosta'],
      ['hweví', 'peixe'],
    ],
  },
];
