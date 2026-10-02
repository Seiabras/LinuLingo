import type { StorySeed } from '../types';

/**
 * Histórias interativas do mapudungún — uma por nível (A1.1 e A1.2), pacote incompleto (ver
 * `incomplete` em index.ts). Todas as falas combinam só palavras e frases já verificadas em
 * vocabulario.ts (ver o cabeçalho daquele arquivo para as fontes e o critério de montagem das frases).
 * Em nenhum nó um personagem decide a identidade ou a resposta do jogador: as duas opções de cada nó
 * ficam sempre para quem está jogando escolher.
 */
export const STORIES_ARN: StorySeed[] = [
  {
    id: 'arn-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Mari mari ta Wallmapu mew',
    emoji: '👋',
    summary: 'Você encontra Lamngen numa comunidade da Araucanía e troca os primeiros cumprimentos em mapudungún.',
    cultural_context: 'A Araucanía, no sul do Chile, é a região com a maior concentração de falantes de mapudungún; há também comunidades do outro lado da Cordilheira dos Andes, na Argentina.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: '¡Mari mari, lamngen!',
        translation: 'Olá, amigo(a)!',
        emoji: '🙋‍♀️',
        choices: [
          { text: '¡Mari mari!', translation: 'Olá!', next: 'saudou' },
          { text: '¡Pewkallal!', translation: 'Até logo!', wrong: 'Ela acabou de cumprimentar você: despedir-se agora seria estranho. Responda o cumprimento primeiro.' },
        ],
      },
      saudou: {
        text: '¿Chumleymi?',
        translation: 'Como você está?',
        emoji: '😊',
        choices: [
          { text: 'Kümelen, kafey.', translation: 'Estou bem, também.', next: 'bem' },
          { text: 'Iñche nien kiñe ruka.', translation: 'Eu tenho uma casa.', wrong: 'Isso não responde “como você está?”. Use “Kümelen…” (estou bem).' },
        ],
      },
      bem: {
        text: 'Iñche nien kiñe ruka. ¿Eymi kafey?',
        translation: 'Eu tenho uma casa. Você também?',
        emoji: '🏠',
        choices: [
          { text: 'Iñche kafey nien kiñe ruka.', translation: 'Eu também tenho uma casa.', next: 'final_bueno' },
          { text: '¿Chem pimi?', translation: 'O que você disse?', wrong: 'Ela perguntou se você também tem uma casa: responda com “iñche kafey…” (eu também…).' },
        ],
      },
      final_bueno: {
        text: '¡Kümelen! ¡Pewkallal, lamngen!',
        translation: 'Que bom! Até logo, amigo(a)!',
        emoji: '🎉',
        ending: { tone: 'bom', title: '¡Kümelen!', message: 'Lamngen se despede sorrindo: você fez a sua primeira conversa em mapudungún.' },
      },
    },
    glossary: [
      ['mari mari', 'olá'],
      ['chumleymi', 'como você está'],
      ['kümelen', 'eu estou bem'],
      ['pewkallal', 'até logo'],
    ],
  },
  {
    id: 'arn-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Kiñe pichi ruka',
    emoji: '🏠',
    summary: 'Peñi mostra a sua ruka (casa) pequena e pergunta o que você está vendo lá dentro.',
    cultural_context: 'A ruka tradicional mapuche é construída com madeira e palha, geralmente com uma única porta voltada para o nascer do sol.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Iñche nien kiñe pichi ruka.',
        translation: 'Eu tenho uma casa pequena.',
        emoji: '👦',
        choices: [
          { text: 'Iñche pen kiñe pichi ruka.', translation: 'Eu vejo uma casa pequena.', next: 'vejo' },
          { text: '¡Pewkallal!', translation: 'Até logo!', wrong: 'Peñi está mostrando a casa dele: despedir-se agora seria estranho.' },
        ],
      },
      vejo: {
        text: 'Iñche kafey nien kiñe ñuke, kiñe poñü.',
        translation: 'Eu também tenho uma mãe, uma batata.',
        emoji: '🥔',
        choices: [
          { text: '¡Küme!', translation: 'Ótimo!', next: 'final_bueno' },
          { text: 'Iñche umawtun.', translation: 'Eu durmo.', wrong: 'Isso muda de assunto. Elogie o que Peñi mostrou com “¡Küme!” (ótimo!).' },
        ],
      },
      final_bueno: {
        text: '¡Küme! Kiñe pichi ruka, kiñe ñuke, kiñe poñü.',
        translation: 'Ótimo! Uma casa pequena, uma mãe, uma batata.',
        emoji: '🎉',
        ending: { tone: 'bom', title: '¡Küme!', message: 'Você descreveu a ruka de Peñi usando só palavras verificadas em mapudungún.' },
      },
    },
    glossary: [
      ['ruka', 'casa'],
      ['pichi', 'pequeno'],
      ['pen', 'eu vejo'],
      ['ñuke', 'mãe'],
    ],
  },
];
