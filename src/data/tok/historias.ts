import type { StorySeed } from '../types';

/**
 * Histórias interativas do toki pona — por enquanto uma por nível (A1.1 e A1.2), pacote
 * incompleto. Usam só vocabulário do núcleo oficial (nimi pu) mais nomes próprios (Ana, Petro),
 * seguindo a prática real da língua de emprestar nomes depois de "jan".
 */
export const STORIES_TOK: StorySeed[] = [
  {
    id: 'tok-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'toki lon kulupu',
    emoji: '👋',
    summary: 'Você encontra jan Petro, outro estudante de toki pona, num grupo on-line da comunidade.',
    cultural_context: 'O toki pona vive sobretudo on-line, em grupos do Facebook, servidores de Discord e no Reddit — não tem um país ou uma "sede" própria. Estimativas de 2021 falam de 500 a 5.000 pessoas com algum domínio da língua.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'toki! nimi mi li Ana. nimi sina li seme?',
        translation: 'Oi! Meu nome é Ana. Qual é o seu nome?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'nimi mi li Petro. mi pona.', translation: 'Meu nome é Petro. Eu estou bem.', next: 'nome' },
          { text: 'mi moku e kili.', translation: 'Eu como uma fruta.', wrong: 'Ana perguntou seu nome — isso não responde. Tente "nimi mi li…".' },
        ],
      },
      nome: {
        text: 'pona a! sina wile toki pona tan seme?',
        translation: 'Ótimo! Por que você quer falar toki pona?',
        emoji: '😊',
        choices: [
          { text: 'mi wile e toki pona tan ni: ona li pona tawa mi.', translation: 'Eu quero toki pona porque isso é bom para mim.', next: 'final_bo' },
          { text: 'ni li jaki.', translation: 'Isso é nojento.', wrong: 'Isso não responde por que você quer aprender toki pona. Tente "mi wile e toki pona tan…".' },
        ],
      },
      final_bo: {
        text: 'mi pilin pona! o toki e toki pona lon tenpo mute!',
        translation: 'Eu me sinto bem! Falemos toki pona muitas vezes!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Um novo amigo no toki pona!', message: 'Petro ficou feliz — e você já trocou as primeiras frases de verdade em toki pona.' },
      },
    },
    glossary: [
      ['toki! / nimi mi li…', 'oi! / meu nome é…'],
      ['pona a!', 'que bom!/ótimo!'],
      ['sina wile e seme? / tan seme?', 'o que você quer? / por quê?'],
    ],
  },
  {
    id: 'tok-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'mama mi en tomo mi',
    emoji: '🏠',
    summary: 'Petro pergunta sobre sua família e sua casa.',
    cultural_context: 'O vocabulário oficial do toki pona não tem palavra pra "irmão" ou "irmã" — só "mama" (pai/mãe/criador). Quem fala a língua precisa improvisar uma frase pra falar de irmãos, como "jan mama sama" (pessoa de mesmo pai/mãe): é o próprio projeto minimalista da língua, não um esquecimento.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'toki! mama sina li pona anu seme?',
        translation: 'Oi! Seus pais estão bem, ou não?',
        emoji: '👪',
        choices: [
          { text: 'mama mi li pona. mi olin e mama mi.', translation: 'Meus pais estão bem. Eu amo meus pais.', next: 'casa' },
          { text: 'tomo mi li suli.', translation: 'Minha casa é grande.', wrong: 'Isso não responde sobre seus pais. Tente "mama mi li pona" (ou "ike").' },
        ],
      },
      casa: {
        text: 'pona! tomo sina li lon ma seme?',
        translation: 'Que bom! Sua casa fica em que lugar?',
        emoji: '🏠',
        choices: [
          { text: 'tomo mi li lon ma mi, li lili taso li pona.', translation: 'Minha casa fica no meu país, é pequena mas é boa.', next: 'final_bo' },
          { text: 'mi moku e pan.', translation: 'Eu como pão.', wrong: 'Isso não diz onde sua casa fica. Tente "tomo mi li lon…".' },
        ],
      },
      final_bo: {
        text: 'mi wile lukin e tomo sina! o pana e nasin tawa tomo sina!',
        translation: 'Eu quero ver sua casa! Me diz o caminho até sua casa!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Convite para a casa!', message: 'Petro ficou curioso pra conhecer sua família e sua casa — vocês já estão de conversa marcada.' },
      },
    },
    glossary: [
      ['mama', 'pai/mãe/criador(a)'],
      ['tomo', 'casa/construção'],
      ['anu seme?', 'ou o quê? (pergunta de sim/não)'],
    ],
  },
];
