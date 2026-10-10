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
    cultural_context: 'O toki pona vive sobretudo on-line, em grupos do Facebook, servidores de Discord e no Reddit — não tem um país ou uma "sede" própria. Estimativas de 2021 falam de 500 a 5.000 pessoas com algum domínio da língua; o maior servidor de Discord da comunidade, "ma pona pi toki pona", já passou de 16 mil membros, com a maioria dizendo saber pelo menos o básico da língua.',
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
  {
    id: 'tok-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'jan Petro o, o kama!',
    emoji: '📣',
    summary: 'Você chama jan Petro pelo nome e fala sobre o animal de estimação dele, usando modificadores em cadeia.',
    cultural_context: 'No toki pona não existe diferença de registro na segunda pessoa ("sina" serve pra tudo), mas o vocativo com "o" ainda é usado como um gesto de atenção — dizer o nome da pessoa antes de falar com ela.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'toki! mi jo e soweli ike.',
        translation: 'Oi! Eu tenho um animal mau (travesso).',
        emoji: '🐾',
        choices: [
          { text: 'jan Petro o, soweli sina li seme?', translation: 'Petro, como é o seu animal?', next: 'animal' },
          { text: 'mi moku e kili.', translation: 'Eu como uma fruta.', wrong: 'Isso não pergunta sobre o animal de Petro. Chame-o e pergunte: "jan Petro o, soweli sina li seme?"' },
        ],
      },
      animal: {
        text: 'soweli mi li soweli utala, taso ona li pona tawa mi.',
        translation: 'Meu animal é um animal de luta, mas ele é bom pra mim.',
        emoji: '🐕',
        choices: [
          { text: 'ona li pona! mi olin e soweli sina.', translation: 'Ele é bom! Eu amo o seu animal.', next: 'final_bo' },
          { text: 'ma li suli.', translation: 'O país é grande.', wrong: 'Isso não fala do animal de Petro. Comente sobre ele: "ona li…".' },
        ],
      },
      final_bo: {
        text: 'mi pilin pona tan ni!',
        translation: 'Eu me sinto bem com isso!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Um animal especial', message: 'Petro gostou de compartilhar sobre seu animal de luta gentil — mais uma conversa de verdade em toki pona.' },
      },
    },
    glossary: [
      ['jan [nome] o', 'chamando alguém pelo nome'],
      ['soweli utala', 'animal de luta'],
      ['pona tawa mi', 'bom pra mim'],
    ],
  },
  {
    id: 'tok-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'poki sina li suli',
    emoji: '📦',
    summary: 'Você e um amigo comparam suas caixas (poki) e descobrem quem tem a maior.',
    cultural_context: 'O toki pona não tem palavra própria pra "mais" ou "menos": comparar bem nesta língua significa escolher com cuidado uma referência (la/tawa) ou usar "nanpa wan" pro superlativo.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'toki! poki mi li suli.',
        translation: 'Oi! Minha caixa é grande.',
        emoji: '📦',
        choices: [
          { text: 'poki mi la poki sina li suli.', translation: 'Perto da minha caixa, a sua é grande (a sua é maior que a minha).', next: 'comparar' },
          { text: 'mi moku e pan.', translation: 'Eu como pão.', wrong: 'Isso não compara as caixas. Use "poki mi la poki sina li suli" ou "li lili".' },
        ],
      },
      comparar: {
        text: 'sina jo e poki seme? ona li suli sama poki mi anu seme?',
        translation: 'Que caixa você tem? Ela é igual à minha caixa, ou não?',
        emoji: '❓',
        choices: [
          { text: 'poki mi li suli nanpa wan!', translation: 'Minha caixa é a maior!', next: 'final_bo' },
          { text: 'kili li suwi.', translation: 'A fruta é doce.', wrong: 'Isso não responde sobre o tamanho da caixa. Compare com "sama" ou "nanpa wan".' },
        ],
      },
      final_bo: {
        text: 'pona a! sina jo e poki pona.',
        translation: 'Que bom! Você tem uma caixa boa.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'A maior caixa', message: 'Vocês compararam as caixas e se divertiram — mais uma conversa de verdade em toki pona.' },
      },
    },
    glossary: [
      ['X la Y li suli', 'perto de X, Y é grande (comparação)'],
      ['nanpa wan', 'o número um (superlativo)'],
      ['sama', 'igual/parecido'],
    ],
  },
];
