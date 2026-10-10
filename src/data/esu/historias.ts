import type { StorySeed } from '../types';

/**
 * Histórias do iúpique do Alasca central — uma por nível (A1.1 e A1.2), curso incompleto. Ambientadas
 * em Bethel (Mamterilleq), no rio Kuskokwim. Falas do [ANLC] (“Waqaa!”,
 * “Cangacit?”, “Assirtua”, “Quyana”, “Quyana tailuci!”, “Piura!”), dos exemplos do [WIKT] (“Qavcinek
 * allrakungqercit?”, “Yuinaqek allrakungqertua”, “Yugcetun qanerciigataqa”, “Ii-i”) e da gramática do
 * [WIKI] (“Neqengqertua”, “Assikaqa”), com a tradução deles. O nome iúpique de Bethel, “Mamterilleq”, é
 * do [WIKI] (lista das aldeias do baixo Kuskokwim).
 */
export const STORIES_ESU: StorySeed[] = [
  {
    id: 'esu-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Quyana tailuci!',
    emoji: '🛬',
    summary: 'O Linu chega a Bethel, no delta do Kuskokwim, e é recebido em iúpique.',
    cultural_context:
      'Bethel, que em iúpique se chama Mamterilleq, fica no rio Kuskokwim, no sudoeste do Alasca. Nas aldeias da região, muitas crianças ainda crescem falando iúpique.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Waqaa! Cangacit?',
        translation: 'Oi! Como vai?',
        emoji: '👋',
        choices: [
          { text: 'Assirtua. Quyana.', translation: 'Estou bem. Obrigado.', next: 'idade' },
          { text: 'Piura!', translation: 'Tchau!', wrong: 'Você acabou de chegar! Diga como está: “Assirtua”.' },
        ],
      },
      idade: {
        text: 'Qavcinek allrakungqercit?',
        translation: 'Quantos anos você tem?',
        emoji: '🎂',
        choices: [
          { text: 'Yuinaqek allrakungqertua.', translation: 'Tenho vinte anos.', next: 'final' },
          { text: 'Yugcetun qanerciigataqa.', translation: 'Não falo iúpique.', wrong: 'Você entendeu a pergunta! Responda a idade: “Yuinaqek allrakungqertua”.' },
        ],
      },
      final: {
        text: 'Quyana tailuci!',
        translation: 'Bem-vindo! (obrigado por vir)',
        emoji: '🤗',
        ending: { tone: 'bom', title: 'Quyana!', message: 'Você respondeu ao “Cangacit?” e disse a sua idade em iúpique logo na chegada a Bethel.' },
      },
    },
    glossary: [
      ['Waqaa', 'oi'],
      ['Cangacit?', 'como vai?'],
      ['Qavcinek allrakungqercit?', 'quantos anos você tem?'],
      ['Quyana tailuci', 'obrigado por virem, bem-vindos'],
    ],
  },
  {
    id: 'esu-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Neqengqertua',
    emoji: '🐟',
    summary: 'Um pescador mostra o peixe ao Linu e oferece chá.',
    cultural_context:
      'Em iúpique, a mesma palavra, “neqa”, quer dizer peixe e comida. E o chá, “caayuq”, chegou com os russos e ficou: a palavra vem do russo “tchai”.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Neqengqertua!',
        translation: 'Eu tenho peixe!',
        emoji: '🐟',
        choices: [
          { text: 'Assikaqa!', translation: 'Eu gosto disso!', next: 'cha' },
          { text: 'Piura!', translation: 'Tchau!', wrong: 'Ele está mostrando o peixe! Diga que gosta: “Assikaqa!”.' },
        ],
      },
      cha: {
        text: 'Caayuq?',
        translation: 'Chá?',
        emoji: '🍵',
        choices: [
          { text: 'Ii-i, quyana!', translation: 'Sim, obrigado!', next: 'final' },
          { text: 'Tuntuvak.', translation: 'Alce.', wrong: 'Ele ofereceu chá. Aceite: “Ii-i, quyana!”.' },
        ],
      },
      final: {
        text: 'Piura!',
        translation: 'Tchau!',
        emoji: '👋',
        ending: { tone: 'bom', title: 'Quyana!', message: 'Você elogiou o peixe e aceitou o chá — duas palavras, “assikaqa” e “quyana”, e a conversa fluiu.' },
      },
    },
    glossary: [
      ['neqengqertua', 'eu tenho peixe'],
      ['assikaqa', 'eu gosto disso'],
      ['caayuq', 'chá'],
      ['ii-i', 'sim'],
    ],
  },
];
