import type { StorySeed } from '../types';

/**
 * Histórias interativas do eʋe — uma por nível (A1.1 e A1.2), pacote incompleto (ver `incomplete` em
 * index.ts). Só usam palavras e construções com fonte verificada (ver vocabulario.ts): sem cópula
 * (“ser/estar”) nem verbo “ter” confirmados, as frases juntam substantivo+artigo ou sujeito+verbo+
 * objeto. Em cada nó, é sempre o jogador quem escolhe o que ver ou dizer — nunca um personagem decide
 * por ele.
 */
export const STORIES_EE: StorySeed[] = [
  {
    id: 'ee-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Ƒome la',
    emoji: '👨‍👩‍👧',
    summary: 'Você visita a família: o pai, a mãe, o irmão e a irmã, numa casa no sul de Gana.',
    cultural_context: 'O povo eʋe soma cerca de 9 milhões de pessoas entre Gana (uns 6 milhões) e o Togo (uns 3 milhões), segundo a Wikipédia — a família extensa (ƒome) é o centro da vida social dos dois lados da fronteira.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Nye kpɔ ƒome la.',
        translation: 'Eu vejo a família.',
        emoji: '👨‍👩‍👧',
        choices: [
          { text: 'Nye kpɔ fofo.', translation: 'Eu vejo o pai.', next: 'fofo' },
          { text: 'Avu la dzo.', translation: 'O cachorro vai embora.', wrong: 'Isso fala do cachorro indo embora, não de quem você vê na família. Diga quem você vê.' },
        ],
      },
      fofo: {
        text: 'Fofo la kple nɔ la.',
        translation: 'O pai e a mãe.',
        emoji: '👨‍👩',
        choices: [
          { text: 'Akpe, fofo kple nɔ!', translation: 'Obrigado, pai e mãe!', next: 'final_bom' },
          { text: 'Nye ɖu abolo.', translation: 'Eu como pão.', wrong: 'Isso não cumprimenta o pai e a mãe. Diga “obrigado” a eles com “akpe”.' },
        ],
      },
      final_bom: {
        text: 'Ƒome la nyo!',
        translation: 'A família é boa!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Ƒome la nyo!', message: 'Você cumprimentou seu pai e sua mãe e conheceu a família eʋe.' },
      },
    },
    glossary: [
      ['ƒome', 'família'],
      ['fofo', 'pai'],
      ['nɔ', 'mãe'],
      ['akpe', 'obrigado'],
    ],
  },
  {
    id: 'ee-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Dzata, gbɔ̃ kple koklo',
    emoji: '🐐',
    summary: 'Você caminha pelo campo, no sul de Gana, e vê os bichos: cachorro, cabra, ovelha, galinha e até um leão.',
    cultural_context: 'Cabra, ovelha e galinha são comuns nas casas eʋe do sul de Gana e do Togo; o leão (dzata) aparece sobretudo em histórias e símbolos, não no dia a dia das famílias.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Nye zɔ.',
        translation: 'Eu ando.',
        emoji: '🚶',
        choices: [
          { text: 'Nye kpɔ avu.', translation: 'Eu vejo um cachorro.', next: 'animais' },
          { text: 'Nye ɖu abolo.', translation: 'Eu como pão.', wrong: 'Isso não fala de um bicho que você vê andando. Diga o que você vê.' },
        ],
      },
      animais: {
        text: 'Gbɔ̃ kple koklo.',
        translation: 'Cabra e galinha.',
        emoji: '🐐',
        choices: [
          { text: 'Nye kpɔ dzata.', translation: 'Eu vejo um leão.', next: 'final_bom' },
          { text: 'Nye no tsi.', translation: 'Eu bebo água.', wrong: 'Isso não fala de mais um bicho. Diga que você também vê o leão.' },
        ],
      },
      final_bom: {
        text: 'Avu, gbɔ̃, alẽ, koklo kple dzata katã nyo!',
        translation: 'Cachorro, cabra, ovelha, galinha e leão, todos bons!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Dzata la nyo!', message: 'Você viu os bichos do campo: cachorro, cabra, ovelha, galinha e até um leão.' },
      },
    },
    glossary: [
      ['avu', 'cachorro'],
      ['gbɔ̃', 'cabra'],
      ['koklo', 'galinha'],
      ['dzata', 'leão'],
    ],
  },
];
