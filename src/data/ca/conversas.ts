import type { CommunitySeed, ScenarioSeed } from '../types';

/** Textos de outros alunos esperando correção (com erros típicos de lusófonos). */
export const COMMUNITY_CA: CommunitySeed[] = [
  {
    author_name: 'Lucas 🇧🇷',
    prompt: 'Apresente-se: nome, de onde você é e onde mora.',
    content: 'Hola! Yo soc Lucas. Soc de Brasil i visc en Barcelona.',
    reference: 'Hola! Jo soc en Lucas. Soc del Brasil i visc a Barcelona.',
  },
  {
    author_name: 'Marta 🇵🇹',
    prompt: 'Peça sua bebida favorita num café de Barcelona.',
    content: 'Bon dia! Vull un cafè con llet, per favor.',
    reference: 'Bon dia! Voldria un cafè amb llet, si us plau.',
  },
  {
    author_name: 'Diego 🇦🇷',
    prompt: 'Apresente sua família em 3 frases.',
    content: 'Mi mare es diu Clara i tengo dos germanos.',
    reference: 'La meva mare es diu Clara i tinc dos germans.',
  },
  {
    author_name: 'Aiko 🇯🇵',
    prompt: 'Escreva uma mensagem formal pedindo um quarto para duas noites.',
    content: 'Bon dia! Tens una habitació lliure per dos nits?',
    reference: 'Bon dia! Té una habitació lliure per a dues nits, si us plau?',
  },
];

/** Cenários de conversa com personas e registro social (tu × vostè). */
export const SCENARIOS_CA: ScenarioSeed[] = [
  {
    id: 'ca-s-cafe',
    title: 'Cafè a Barcelona',
    emoji: '☕',
    cefr: 'A1',
    register: 'formal',
    persona: 'Montse, cambrera',
    description: 'Demani una beguda i pagui el compte. Registre formal, amb «vostè».',
    turns: [
      { bot: 'Bon dia! Què li poso?', botTranslation: 'Bom dia! O que lhe sirvo?', keywords: ['cafè', 'te', 'aigua', 'cervesa', 'vi', 'suc'], suggestions: ['Un cafè amb llet, si us plau.', 'Un te, si us plau.'], registerBreakers: ['tio', 'guai'] },
      { bot: 'Sol o amb gel?', botTranslation: 'Puro ou com gelo?', keywords: ['sol', 'gel', 'amb'], suggestions: ['Sol, si us plau.', 'Amb gel, si us plau.'] },
      { bot: 'Res més?', botTranslation: 'Mais alguma coisa?', keywords: ['no', 'res', 'sí', 'gràcies', 'aigua'], suggestions: ['No, gràcies.', 'Sí, i una aigua, si us plau.'] },
      { bot: 'Són tres euros amb vint.', botTranslation: 'São três euros e vinte.', keywords: ['aquí', 'targeta', 'efectiu', 'gràcies'], suggestions: ['Aquí té. Gràcies!', 'Puc pagar amb targeta?'], registerBreakers: ['tu tens'] },
    ],
  },
  {
    id: 'ca-s-hotel',
    title: "Registre a l'hotel",
    emoji: '🏨',
    cefr: 'A2',
    register: 'formal',
    persona: 'Jordi, recepcionista',
    description: 'Faça o check-in e tire dúvidas na recepção. Registro formal, com «vostè».',
    turns: [
      { bot: 'Bona nit! Benvingut. Té una reserva?', botTranslation: 'Boa noite! Bem-vindo. O senhor tem uma reserva?', keywords: ['sí', 'reserva', 'nom', 'no', 'habitació'], suggestions: ['Sí, tinc una reserva a nom de Silva.'], registerBreakers: ['tu', 'tens', 'si us plau tio'] },
      { bot: 'Perfecte. El passaport, si us plau.', botTranslation: 'Perfeito. O passaporte, por favor.', keywords: ['aquí', 'té', 'sí'], suggestions: ['Aquí el té.'] },
      { bot: "L'esmorzar és de set a deu. Té cap pregunta?", botTranslation: 'O café da manhã é das sete às dez. Tem alguma pergunta?', keywords: ['wifi', 'contrasenya', 'no', 'on', 'hora', 'gràcies'], suggestions: ['Quina és la contrasenya del wifi?', 'No, gràcies.'], registerBreakers: ['tu', 'tens'] },
      { bot: 'Habitació 204, segon pis. Bona estada!', botTranslation: 'Quarto 204, segundo andar. Boa estadia!', keywords: ['gràcies', 'moltes', 'bona', 'nit'], suggestions: ['Moltes gràcies! Bona nit!'] },
    ],
  },
  {
    id: 'ca-s-bar',
    title: 'Al bar amb amics',
    emoji: '🍻',
    cefr: 'A2',
    register: 'informal',
    persona: 'Marc, amic català',
    description: 'Papo descontraído entre amigos. Aqui o formal soaria estranho.',
    turns: [
      { bot: 'Ei! Què tal, tio?', botTranslation: 'E aí! Como vai, cara?', keywords: ['bé', 'genial', 'ei', 'gràcies'], suggestions: ['Bé! I tu, què tal?', 'Genial, gràcies!'], registerBreakers: ['vostè', 'si us plau', 'bon dia'] },
      { bot: 'Què beus? Jo em prenc una canya.', botTranslation: 'O que você vai beber? Eu vou de uma cerveja pequena.', keywords: ['canya', 'vi', 'jo també', 'aigua', 'suc'], suggestions: ['Jo també em prenc una canya!', 'Jo prenc un vi.'], registerBreakers: ['vostè', 'si us plau'] },
      { bot: 'Salut!', botTranslation: 'Saúde!', keywords: ['salut'], suggestions: ['Salut!'] },
      { bot: 'Què fas aquest cap de setmana?', botTranslation: 'O que você vai fazer neste fim de semana?', keywords: ['vaig', 'no sé', 'vull', 'muntanya', 'platja', 'casa'], suggestions: ['Vaig a la platja!', 'No ho sé encara. I tu?'], registerBreakers: ['vostè', 'si us plau'] },
    ],
  },
  {
    id: 'ca-s-entrevista',
    title: 'Entrevista de feina',
    emoji: '💼',
    cefr: 'B1',
    register: 'formal',
    persona: 'Senyora Puig, cap de recursos humans',
    description: 'Apresente-se para uma vaga. Formalidade máxima, com «vostè».',
    turns: [
      { bot: "Bon dia! Segui, si us plau. Parli'm una mica de vostè.", botTranslation: 'Bom dia! Sente-se, por favor. Fale-me um pouco sobre o senhor.', keywords: ['em dic', 'soc', 'treballo', 'tinc'], suggestions: ['Em dic Ana, soc del Brasil i treballo en màrqueting.'], registerBreakers: ['ei', 'tu', 'tio'] },
      { bot: 'Per què vol treballar a la nostra empresa?', botTranslation: 'Por que o senhor quer trabalhar na nossa empresa?', keywords: ['perquè', 'vull', "m'agrada", 'empresa', 'experiència'], suggestions: ["Perquè m'agrada l'empresa i vull aprendre."], registerBreakers: ['tu', 'tio'] },
      { bot: 'Parla altres idiomes?', botTranslation: 'O senhor fala outras línguas?', keywords: ['parlo', 'anglès', 'portuguès', 'espanyol', 'sí', 'una mica'], suggestions: ['Sí, parlo portuguès, anglès i una mica de català.'], registerBreakers: ['tu', 'tio'] },
      { bot: 'Gràcies. La trucarem la setmana vinent.', botTranslation: 'Obrigada. Ligaremos para o senhor na semana que vem.', keywords: ['gràcies', 'adéu', 'bon dia'], suggestions: ['Moltes gràcies pel seu temps! Adéu!'], registerBreakers: ['fins ara', 'ei'] },
    ],
  },
];
