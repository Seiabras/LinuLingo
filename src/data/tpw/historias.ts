import type { StorySeed } from '../types';

/** Histórias interativas do tupi antigo — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_TPW: StorySeed[] = [
  {
    id: 'tpw-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Ereîúrype? Chegando à aldeia',
    emoji: '👋',
    summary: 'Você chega a uma aldeia tupinambá na costa e troca o primeiro cumprimento com Potyra.',
    cultural_context:
      'Chegar à casa de alguém era, em si, um acontecimento social: por isso o cumprimento mais comum do tupi antigo é justamente perguntar se a pessoa veio (“Ereîúrype?”), e não um simples “oi” solto.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ereîúrype?',
        translation: 'Você veio?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Pa, aîur.', translation: 'Sim, eu vim.', next: 'veio' },
          { text: 'Tupã irumo!', translation: 'Adeus!', wrong: 'Potyra está te recebendo, não se despedindo de você — confirme que você chegou com “Pa, aîur”.' },
        ],
      },
      veio: {
        text: 'Marãpe nde rera?',
        translation: 'Qual é o seu nome?',
        emoji: '😊',
        choices: [
          { text: 'Xe rera Linu.', translation: 'Meu nome é Linu.', next: 'nome' },
          { text: "A'u pirá.", translation: 'Eu como peixe.', wrong: 'Isso não responde qual é o seu nome. Tente “Xe rera…”.' },
        ],
      },
      nome: {
        text: 'Ixé, xe rera Potyra. Erekó membyra?',
        translation: 'Eu, meu nome é Potyra. Você tem filhos?',
        emoji: '👩',
        choices: [
          { text: 'Aani, ixé mirĩ.', translation: 'Não, eu sou pequeno (ainda não).', next: 'final_bo' },
          { text: 'Eẽ, arekó membyra mokõî.', translation: 'Sim, eu tenho dois filhos.', next: 'final_bo' },
          { text: 'Oka gûasu.', translation: 'A casa é grande.', wrong: 'Isso não responde sobre filhos. Use “Eẽ, arekó…” ou “Aani”.' },
        ],
      },
      final_bo: {
        text: 'Katu! Xe irumo eîkó.',
        translation: 'Que bom! Fique comigo (lit. “esteja comigo”).',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Uma boa chegada!', message: 'Potyra sorri: você fez a sua primeira conversa em tupi antigo, logo na entrada da aldeia.' },
      },
    },
    glossary: [
      ['Ereîúrype? / Pa, aîur', 'você veio? / sim, eu vim'],
      ['Marãpe nde rera?', 'qual é o seu nome?'],
      ['erekó', 'ter'],
    ],
  },
  {
    id: 'tpw-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Na oca com a família',
    emoji: '🏡',
    summary: 'Potyra te convida para entrar na oca (a casa comprida da aldeia) e conhecer um pouco da família e da comida dela.',
    cultural_context:
      'A oca tupinambá era uma casa comprida de palha, onde várias famílias aparentadas moravam juntas, cada uma com o seu próprio fogo (tatá) para cozinhar e se esquentar.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Xe oka pupé eîkó. Erekó sy, tuba?',
        translation: 'Fique na minha casa. Você tem mãe, pai?',
        emoji: '🏡',
        choices: [
          { text: 'Eẽ, xe sy katu, xe ruba gûasu.', translation: 'Sim, minha mãe é boa, meu pai é grande.', next: 'familia' },
          { text: 'Mosapyr abá.', translation: 'Três homens.', wrong: 'Isso não fala da sua família. Tente “Xe sy…” ou “Xe ruba…”.' },
        ],
      },
      familia: {
        text: "Katu! A'u-potár pirá?",
        translation: 'Que bom! Você quer comer peixe?',
        emoji: '🐟',
        choices: [
          { text: "Eẽ, a'u-potár pirá.", translation: 'Sim, eu quero comer peixe.', next: 'final_bo' },
          { text: 'Aani, abati a\'u-potár.', translation: 'Não, eu quero comer milho.', next: 'final_bo' },
          { text: 'Ybaka obyeté.', translation: 'O céu é azul.', wrong: 'Isso não responde se você quer comer peixe. Use “Eẽ…” ou “Aani…”.' },
        ],
      },
      final_bo: {
        text: 'Taîasó ka\'a pupé pirá ropuká!',
        translation: 'Vamos ao mato pescar! (lit. “assar/pegar peixe”)',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Um convite de verdade!', message: 'Potyra gostou de saber da sua família e do que você gosta de comer — e já te chamou para pescar com ela.' },
      },
    },
    glossary: [
      ['sy / tuba', 'mãe / pai'],
      ["a'u-potár", 'querer comer'],
      ['oka', 'casa'],
    ],
  },
];
