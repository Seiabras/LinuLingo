import type { StorySeed } from '../types';

/** Histórias interativas do nórdico antigo — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_NON: StorySeed[] = [
  {
    id: 'non-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Heill no porto de Björgvin',
    emoji: '👋',
    summary: 'Você desembarca de um navio e conhece Þórir, um mercador viking, no porto.',
    cultural_context: 'Björgvin (hoje Bergen, Noruega) era um porto movimentado da era viking, ponto de partida de viagens para a Islândia e para as Ilhas Britânicas — rota que mercadores e colonos percorriam com frequência entre os séculos IX e XI.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Heill! Hvert er nafn þitt?',
        translation: 'Salve! Qual é o seu nome?',
        emoji: '🙋‍♂️',
        choices: [
          { text: 'Ek heiti Auðr. Ok þú?', translation: 'Eu me chamo Auðr. E você?', next: 'nome' },
          { text: 'Far vel!', translation: 'Tchau!', wrong: 'Þórir acabou de te perguntar o seu nome — despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      nome: {
        text: 'Ek heiti Þórir. Hvaðan ert þú?',
        translation: 'Eu me chamo Þórir. De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Ek em frá Íslandi.', translation: 'Eu sou da Islândia.', next: 'final_bo' },
          { text: 'Vín er gott.', translation: 'O vinho é bom.', wrong: 'Isso não responde de onde você é. Tente "Ek em frá..."' },
        ],
      },
      final_bo: {
        text: 'Gott! Þökk fyrir, Auðr!',
        translation: 'Que bom! Obrigado, Auðr!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Um novo encontro!', message: 'Þórir sorri: você fez a sua primeira conversa em nórdico antigo, no porto de Björgvin.' },
      },
    },
    glossary: [
      ['heill / heil', 'oi/salve (a um homem/a uma mulher)'],
      ['ek heiti...', 'eu me chamo...'],
      ['þökk fyrir', 'obrigado'],
    ],
  },
  {
    id: 'non-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Em casa, à mesa',
    emoji: '🏠',
    summary: 'Você visita a casa da sua nova amiga Auðr e conta um pouco sobre a sua família.',
    cultural_context: 'As casas da era viking eram longas construções de madeira e turfa (as "longhouses"), com um fogo central que servia para cozinhar e esquentar o ambiente — toda a família e, às vezes, os animais, dividiam o mesmo espaço no inverno.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Heil! Átt þú bróðir eða systir?',
        translation: 'Oi! Você tem irmão ou irmã?',
        emoji: '📜',
        choices: [
          { text: 'Já, ek á bróðir ok systir.', translation: 'Sim, eu tenho irmão e irmã.', next: 'fam' },
          { text: 'Hús mitt er mikit.', translation: 'Minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use "já, ek á..." ou "nei".' },
        ],
      },
      fam: {
        text: 'Gott! Ok hvé er hús þitt?',
        translation: 'Que bom! E como é a sua casa?',
        emoji: '🏠',
        choices: [
          { text: 'Hús mitt er lítit en gott.', translation: 'Minha casa é pequena mas boa.', next: 'final_bo' },
          { text: 'Tuttugu ár.', translation: 'Vinte anos.', wrong: 'Isso não descreve a sua casa. Fale sobre ela: "hús mitt..."' },
        ],
      },
      final_bo: {
        text: 'Undarligt! Kom heill til húss míns.',
        translation: 'Que interessante! Seja bem-vindo(a) à minha casa.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Uma nova amizade!', message: 'Auðr gostou de saber da sua família — e já te convidou para visitar a casa dela.' },
      },
    },
    glossary: [
      ['bróðir / systir', 'irmão / irmã'],
      ['hús mitt', 'minha casa'],
      ['eiga (ek á)', 'ter/possuir (eu tenho)'],
    ],
  },
];
