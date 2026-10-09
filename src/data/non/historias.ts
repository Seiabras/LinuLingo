import type { StorySeed } from '../types';

/** Histórias interativas do nórdico antigo — A1 (A1.1 e A1.2) mais A2 (A2.1 e A2.2), acrescentado depois. */
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
  {
    id: 'non-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Kaldr dagr í Björgvin',
    emoji: '🧥',
    summary: 'No porto de Björgvin, você encontra o mercador Þórir num dia frio e compra um manto novo.',
    cultural_context: 'O comércio de peles e lã era parte importante da economia viking, e os mercadores (kaupmenn) viajavam entre a Noruega, a Islândia e as Ilhas Britânicas levando mercadorias desse tipo.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Heill! Er veðr kalt í dag?',
        translation: 'Salve! O tempo está frio hoje?',
        emoji: '🙋‍♂️',
        choices: [
          { text: 'Já, kalt er, ok vindr er mikill.', translation: 'Sim, está frio, e o vento está forte.', next: 'feldr' },
          { text: 'Ek em glaðr.', translation: 'Eu estou feliz.', wrong: 'Þórir perguntou sobre o tempo — isso não responde. Diga “já” (sim) ou “nei” (não).' },
        ],
      },
      feldr: {
        text: 'Ek á feld ok skó, vill þú kaupa?',
        translation: 'Eu tenho um manto e um sapato, você quer comprar?',
        emoji: '🧥',
        choices: [
          { text: 'Já, ek vil kaupa feld.', translation: 'Sim, eu quero comprar um manto.', next: 'final_bo' },
          { text: 'Ek em þyrstr.', translation: 'Estou com sede.', wrong: 'Þórir vende roupas, não bebida. Diga o que você quer com “ek vil kaupa…”.' },
        ],
      },
      final_bo: {
        text: 'Gott! Nú átt þú feld.',
        translation: 'Bom! Agora você tem um manto.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Nýr feldr!', message: 'Você comprou um manto novo no porto de Björgvin — já pode enfrentar o vento frio do Atlântico Norte!' },
      },
    },
    glossary: [
      ['er veðr kalt?', 'o tempo está frio?'],
      ['ek vil kaupa…', 'eu quero comprar…'],
      ['feldr', 'manto'],
    ],
  },
  {
    id: 'non-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Í gær ok í dag',
    emoji: '🧠',
    summary: 'Sua amiga Auðr pergunta como foi o seu dia de ontem e como você está se sentindo hoje.',
    cultural_context: 'As sagas islandesas são contadas quase sempre no pretérito — "comeram e beberam", "ela chamou" — porque narram eventos atribuídos a gerações anteriores à da escrita.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Heil! Vart þú móðr í gær?',
        translation: 'Oi! Você estava cansado(a) ontem?',
        emoji: '📜',
        choices: [
          { text: 'Já, ek var móðr, en nú em ek glaðr.', translation: 'Sim, eu estava cansado(a), mas agora estou feliz.', next: 'mat' },
          { text: 'Hundr minn er mikill.', translation: 'Meu cachorro é grande.', wrong: 'Auðr perguntou como você estava ontem — isso não responde. Use “ek var…”.' },
        ],
      },
      mat: {
        text: 'Gott! Átum vér brauð í gær?',
        translation: 'Bom! Nós comemos pão ontem?',
        emoji: '🍞',
        choices: [
          { text: 'Já, vér átum brauð ok drukkum vatn.', translation: 'Sim, nós comemos pão e bebemos água.', next: 'final_bo' },
          { text: 'Ek em þyrstr nú.', translation: 'Estou com sede agora.', wrong: 'Auðr perguntou sobre ontem — responda no pretérito, com “vér átum…”.' },
        ],
      },
      final_bo: {
        text: 'Nú ert þú glaðr, ok ek em glaðr.',
        translation: 'Agora você está feliz, e eu estou feliz.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Dagr sem leið!', message: 'Você e Auðr relembraram o dia de ontem — e hoje já estão mais felizes.' },
      },
    },
    glossary: [
      ['vart þú…?', 'você estava…?'],
      ['vér átum', 'nós comemos (pretérito)'],
      ['nú em ek glaðr', 'agora estou feliz'],
    ],
  },
];
