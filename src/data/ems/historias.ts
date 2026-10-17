import type { StorySeed } from '../types';

/**
 * Histórias do alutiiq — uma por subnível, do A1.1 ao A2.2. Ambientadas em Kodiak. As do A2 (17/10/2026)
 * usam só frases de [KALT] (o livro-texto de Kodiak, 2023) e [FRASES] (o guia de conversação, 2006), com a
 * página impressa ao lado; a única montada é “Gui Linu”, pelo molde “Gui [NOME]” (KALT p. 20).
 * As do A1:
 * Falas do [ANLC] (“Cama’i”, “Quyanaa”) e dos exemplos do [WIKT] (“Canaituq”, “Ai?”, “Awa ai?”, “Ca”),
 * com a tradução deles; o tempo, de [KALT] p. 96 (“Macanguq, kesiin pat’snartuq cali”) e [FRASES] p. 18
 * (“Qaninguq”), no lugar da frase do [WIKT] com “enerpak … macartuq” (revisão de 17/10/2026). O pão, do
 * russo “khleb”: [WIKT] s.v. “kelipaq”, com a grafia de Kodiak, “gleipaq”, de [WOTW] 136; o chá,
 * “caayuq”: [WOTW] 495. O koniag de Kodiak com poucas dezenas de falantes idosos em 2010: [WIKI].
 */
export const STORIES_EMS: StorySeed[] = [
  {
    id: 'ems-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Cama’i!',
    emoji: '👋',
    summary: 'O Linu chega a Kodiak e cumprimenta em alutiiq.',
    cultural_context:
      'Kodiak fica na ilha de mesmo nome, terra do dialeto koniag. Em 2010, o falar de Kodiak tinha só umas 50 pessoas que o falavam, todas idosas, e o liceu da cidade passou a ensinar a língua, a pedido dos alunos.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Cama’i!',
        translation: 'Olá!',
        emoji: '👋',
        choices: [
          { text: 'Cama’i!', translation: 'Olá!', next: 'repete' },
          { text: 'Canaituq.', translation: 'De nada.', wrong: 'Ninguém agradeceu ainda! Cumprimente: “Cama’i!”.' },
        ],
      },
      repete: {
        text: 'Ai?',
        translation: 'Hein? O que você disse?',
        emoji: '👂',
        choices: [
          { text: 'Cama’i! Quyanaa!', translation: 'Olá! Obrigado!', next: 'final' },
          { text: 'Ca.', translation: 'Não sei.', wrong: 'A pessoa não ouviu. Repita: “Cama’i!”.' },
        ],
      },
      final: {
        text: 'Canaituq!',
        translation: 'De nada!',
        emoji: '😌',
        ending: { tone: 'bom', title: 'Quyanaa!', message: 'Você cumprimentou, repetiu quando não ouviram e agradeceu — e ouviu o “Canaituq” de resposta.' },
      },
    },
    glossary: [
      ['Cama’i', 'olá'],
      ['Ai?', 'hein?'],
      ['Quyanaa', 'obrigado'],
      ['Canaituq', 'de nada'],
    ],
  },
  {
    id: 'ems-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Macanguq',
    emoji: '🌤️',
    summary: 'Num dia frio e de sol em Kodiak, oferecem chá ao Linu.',
    cultural_context:
      'Em alutiiq, o chá é “caayuq” e o pão, “gleipaq” — palavra que veio do russo “khleb”, como nas outras línguas do Alasca.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Macanguq, kesiin pat’snartuq cali.',
        translation: 'Faz sol, mas também está frio.',
        emoji: '🌤️',
        choices: [
          { text: 'Quyanaa!', translation: 'Obrigado!', next: 'cha' },
          { text: 'Qaninguq.', translation: 'Está nevando.', wrong: 'Disseram que faz sol e está frio, “macanguq” e “pat’snartuq”. Agradeça a notícia: “Quyanaa!”.' },
        ],
      },
      cha: {
        text: 'Caayuq? Gleipaq?',
        translation: 'Chá? Pão?',
        emoji: '🍵',
        choices: [
          { text: 'Caayuq, quyanaa!', translation: 'Chá, obrigado!', next: 'final' },
          { text: 'Arlluk.', translation: 'Orca.', wrong: 'Ofereceram chá ou pão. Escolha um: “Caayuq” ou “Gleipaq”.' },
        ],
      },
      final: {
        text: 'Canaituq! Awa ai?',
        translation: 'De nada! É só isso?',
        emoji: '😊',
        ending: { tone: 'bom', title: 'Quyanaa!', message: 'Você entendeu o tempo, aceitou o chá e agradeceu em alutiiq.' },
      },
    },
    glossary: [
      ['pat’snartuq', 'está frio'],
      ['macanguq', 'faz sol'],
      ['caayuq', 'chá'],
      ['Awa ai?', 'é só isso?'],
    ],
  },
  {
    id: 'ems-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Natmen ag’it?',
    emoji: '🏖️',
    summary: 'Em Kodiak, uma moça se apresenta ao Linu e quer saber para onde ele vai.',
    // KALT p. 20 (apresentar-se com a família ajudava a firmar amizades); p. 5 (isiik, coruja, um dos
    // nomes alutiiq de April Isiik Counceller, uma das autoras)
    cultural_context:
      'Em alutiiq, a pessoa pode se apresentar com “Gui …” (eu sou …), “Atqa …” (meu nome é …) ou “Ap’rtaaraatnga …-mek” (me chamam de …). Muita gente em Kodiak tem também um nome alutiiq, como Isiik, que quer dizer “coruja”.',
    start: 'inicio',
    nodes: {
      inicio: {
        // KALT p. 20
        text: 'Cama’i, asirtuten-qaa?',
        translation: 'Olá, você está bem?',
        emoji: '👋',
        choices: [
          // KALT p. 20 (com o nome do Linu no molde do livro)
          { text: 'Asirtua. Gui Linu, kina ellpet?', translation: 'Estou bem. Eu sou o Linu, quem é você?', next: 'nome' },
          // A1 (Quyanaituq)
          { text: 'Quyanaituq.', translation: 'De nada.', wrong: 'Ela perguntou se você está bem. Responda “Asirtua” (estou bem).' },
        ],
      },
      nome: {
        // KALT p. 20 (Ap’rtaaraatnga [NOME]-mek); p. 92 (Natmen ag’it?)
        text: 'Ap’rtaaraatnga Isiik-mek. Natmen ag’it?',
        translation: 'Me chamam de Isiik. Para onde você vai?',
        emoji: '🙋‍♀️',
        choices: [
          // KALT p. 61
          { text: 'Qutmen agciqua.', translation: 'Vou para a praia.', next: 'praia' },
          // FRASES p. 10
          { text: 'Nuniamen agciqua.', translation: 'Vou para Old Harbor.', next: 'aviao' },
        ],
      },
      praia: {
        // KALT p. 36
        text: 'Kuimartuq taquka’aq!',
        translation: 'O urso está nadando!',
        emoji: '🐻',
        choices: [
          // KALT p. 96
          { text: 'Alingua, kesiin agciqua.', translation: 'Estou com medo, mas vou.', next: 'final_corajoso' },
          // KALT p. 96
          { text: 'Agyunitua elliin alinglua.', translation: 'Não quero ir porque estou com medo.', next: 'final_casa' },
        ],
      },
      aviao: {
        // KALT p. 94
        text: 'Tengausqakun agciqukut.',
        translation: 'Nós vamos de avião.',
        emoji: '🛩️',
        choices: [
          // FRASES p. 3
          { text: 'Kita!', translation: 'Vamos!', next: 'final_aviao' },
          // KALT p. 36 (Kuimartuq taquka’aq)
          { text: 'Kuimartuq taquka’aq.', translation: 'O urso está nadando.', wrong: 'Ela falou do avião. Aceite o convite: “Kita!” (vamos!).' },
        ],
      },
      final_corajoso: {
        // FRASES p. 3
        text: 'Kita-ruq!',
        translation: 'Vamos, então!',
        emoji: '🏖️',
        ending: { tone: 'bom', title: 'Coragem na praia!', message: 'Você se apresentou, disse para onde ia e contou o que sentia, com os finais do “eu”: asirtua, agciqua, alingua.' },
      },
      final_casa: {
        // FRASES p. 3
        text: 'Ainguall’raq!',
        translation: 'Coitadinho!',
        emoji: '🤗',
        ending: { tone: 'bom', title: 'Melhor não arriscar', message: 'Você explicou por que não queria ir, com “elliin” (porque). Ursos e praia, só de longe!' },
      },
      final_aviao: {
        // FRASES p. 10
        text: 'Tengausqaq taiyuq!',
        translation: 'Lá vem o avião!',
        emoji: '✈️',
        ending: { tone: 'bom', title: 'Rumo a Old Harbor!', message: 'Você se apresentou e disse para onde ia, com o -men de “para”: Nuniamen agciqua.' },
      },
    },
    glossary: [
      ['asirtua', 'estou bem'],
      ['kina ellpet?', 'quem é você?'],
      ['natmen?', 'para onde?'],
      ['agciqua', 'eu vou (vou ir)'],
      ['alingua', 'estou com medo'],
      ['kesiin', 'mas'],
      ['elliin', 'porque'],
      ['tengausqaq', 'avião'],
    ],
  },
  {
    id: 'ems-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Ima-mi ilaten?',
    emoji: '🫖',
    summary: 'O Linu visita uma anciã em Kodiak, toma chá e conta da família.',
    // FRASES p. 7 (visitar é uma tradição importante nas comunidades alutiiq), p. 8 (Caayuryugtuten-qaa?);
    // a grafia do chá: KALT p. 70 e [WOTW] 495 (caayuq); o russo чай: [WIKT] s.v. “cayuq”
    cultural_context:
      'Visitar é uma tradição antiga nas comunidades alutiiq: reunir-se para contar histórias, dançar ou só passar a tarde juntos. E a visita começa com chá. Em Kodiak, o chá é “caayuq”, palavra que veio do russo “tchai”.',
    start: 'inicio',
    nodes: {
      inicio: {
        // FRASES p. 7
        text: 'Itra.',
        translation: 'Entre.',
        emoji: '🚪',
        choices: [
          { text: 'Quyanaa.', translation: 'Obrigado.', next: 'cha' },
          // FRASES p. 29
          { text: 'Ani.', translation: 'Saia.', wrong: 'Ela convidou você para entrar. Agradeça: “Quyanaa.”' },
        ],
      },
      cha: {
        // FRASES p. 7 e 8
        text: 'Aqumsaa’a. Caayuryugtuten-qaa?',
        translation: 'Sente-se, por favor. Quer chá?',
        emoji: '🍵',
        choices: [
          // FRASES p. 2 (Aa’a, Quyanaa)
          { text: 'Aa’a, quyanaa.', translation: 'Sim, obrigado.', next: 'familia' },
          // FRASES p. 2 (Qang’a, Quyanaa)
          { text: 'Qang’a, quyanaa.', translation: 'Não, obrigado.', next: 'familia' },
        ],
      },
      familia: {
        // FRASES p. 7
        text: 'Ima-mi ilaten?',
        translation: 'E a sua família, como vai?',
        emoji: '👨‍👩‍👧',
        choices: [
          // FRASES p. 7
          { text: 'Ilanka asirtut.', translation: 'A minha família está bem.', next: 'origem' },
          // FRASES p. 7
          { text: 'Paniyaqa qumigtuq!', translation: 'A minha filha está grávida!', next: 'origem' },
        ],
      },
      origem: {
        // KALT p. 94
        text: 'Naken taima’it?',
        translation: 'De onde você é?',
        emoji: '🗺️',
        choices: [
          // FRASES p. 5
          { text: 'Sun’ami sullrianga.', translation: 'Eu nasci em Kodiak.', next: 'final_kodiak' },
          // FRASES p. 10
          { text: 'Camaken taillrianga.', translation: 'Eu vim dos 48 estados lá de baixo (os Estados Unidos continentais).', next: 'final_longe' },
        ],
      },
      final_kodiak: {
        // FRASES p. 8
        text: 'Unuaqu tang’rciqamken.',
        translation: 'Até amanhã (eu vejo você amanhã).',
        emoji: '👋',
        ending: { tone: 'bom', title: 'Quyanaasinaq!', message: 'Você contou da família e de onde nasceu, com o passado em -llri-: “sullrianga”, eu nasci.' },
      },
      final_longe: {
        // FRASES p. 8
        text: 'Quyanaa tailuten.',
        translation: 'Obrigada por ter vindo.',
        emoji: '🤝',
        ending: { tone: 'bom', title: 'Uma visita de longe', message: 'Você contou de onde veio, com o -ken de “de lá”, e a anciã agradeceu a visita.' },
      },
    },
    glossary: [
      ['itra', 'entre'],
      ['caayuq', 'chá'],
      ['aa’a / qang’a', 'sim / não'],
      ['ilanka', 'minha família'],
      ['naken?', 'de onde?'],
      ['sullrianga', 'eu nasci'],
      ['unuaqu', 'amanhã'],
    ],
  },
];
