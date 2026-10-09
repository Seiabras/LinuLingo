import type { StorySeed } from '../types';

/** Histórias interativas do alemão — A1 (A1.1 e A1.2) mais A2 (A2.1 e A2.2), acrescentado depois. */
export const STORIES_DE: StorySeed[] = [
  {
    id: 'de-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Hallo in Hamburg',
    emoji: '👋',
    summary: 'Você conhece Anna na estação central de Hamburgo e faz a sua primeira conversa em alemão.',
    cultural_context: 'Hamburgo, no norte da Alemanha, é a segunda maior cidade do país e tem um dos maiores portos da Europa.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: "Hallo! Ich heiße Anna. Wie geht's?",
        translation: 'Oi! Eu me chamo Anna. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Gut, danke! Und dir?', translation: 'Bem, obrigado! E você?', next: 'gut' },
          { text: 'Tschüss!', translation: 'Tchau!', wrong: 'Anna acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      gut: {
        text: 'Auch gut! Woher kommst du?',
        translation: 'Também bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Ich komme aus São Paulo.', translation: 'Sou de São Paulo.', next: 'final_gut' },
          { text: 'Ich trinke Wasser.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Ich komme aus…”.' },
        ],
      },
      final_gut: {
        text: 'Toll! Willkommen in Hamburg!',
        translation: 'Que legal! Bem-vindo a Hamburgo!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Ein guter Anfang!', message: 'Anna sorri: você fez a sua primeira conversa em alemão.' },
      },
    },
    glossary: [
      ['hallo', 'oi, olá'],
      ["wie geht's?", 'como vai?'],
      ['ich komme aus', 'eu sou de'],
      ['willkommen', 'bem-vindo'],
    ],
  },
  {
    id: 'de-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ein Abendessen mit der Familie',
    emoji: '👪',
    summary: 'Jonas, um amigo de Munique, pergunta pela sua família e convida você para jantar com a família dele.',
    cultural_context: 'Munique (München) é a capital da Baviera, no sul da Alemanha; o jantar em família costuma ser simples, muitas vezes com pão, queijo e frios (“Abendbrot”).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Hallo! Hast du Geschwister?',
        translation: 'Oi! Você tem irmãos?',
        emoji: '📱',
        choices: [
          { text: 'Ja, ich habe einen Bruder und eine Schwester.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'geschwister' },
          { text: 'Mein Haus ist groß.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “Ich habe…”.' },
        ],
      },
      geschwister: {
        text: 'Toll! Möchtest du am Samstag zu uns kommen?',
        translation: 'Que legal! Quer vir à nossa casa no sábado?',
        emoji: '🍽️',
        choices: [
          { text: 'Ja, gern! Danke!', translation: 'Sim, com prazer! Obrigado!', next: 'final_gut' },
          { text: 'Ich komme aus São Paulo.', translation: 'Sou de São Paulo.', wrong: 'Jonas fez um convite: responda com “Ja, gern!” ou “Nein, danke”.' },
        ],
      },
      final_gut: {
        text: 'Super! Meine Mutter backt Brot.',
        translation: 'Ótimo! A minha mãe vai fazer pão.',
        emoji: '🍞',
        ending: { tone: 'bom', title: 'Eine Einladung!', message: 'Você foi convidado para jantar com a família de Jonas.' },
      },
    },
    glossary: [
      ['Bruder / Schwester', 'irmão / irmã'],
      ['Geschwister', 'irmãos (irmãos e irmãs juntos)'],
      ['ja, gern', 'sim, com prazer'],
      ['zu uns', 'à nossa casa'],
    ],
  },
  {
    id: 'de-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Regen in Hamburg',
    emoji: '🌧️',
    summary: 'Uma chuva forte pega você de surpresa em Hamburgo, e a sua amiga Anna ajuda você a decidir o que comprar e vestir.',
    cultural_context: 'Hamburgo, no norte da Alemanha, tem um clima bem chuvoso e ventoso o ano inteiro, por isso o guarda-chuva (der Regenschirm) é item quase obrigatório na bolsa de quem mora ali.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Oh, es regnet stark! Hast du einen Regenschirm?',
        translation: 'Nossa, está chovendo muito forte! Você tem um guarda-chuva?',
        emoji: '🌧️',
        choices: [
          { text: 'Nein, ich habe keinen Regenschirm.', translation: 'Não, eu não tenho guarda-chuva.', next: 'kaufen' },
          { text: 'Ich mag Kaffee.', translation: 'Eu gosto de café.', wrong: 'Anna perguntou sobre o guarda-chuva — isso não responde à pergunta.' },
        ],
      },
      kaufen: {
        text: 'Komm, wir kaufen eine Jacke und einen Regenschirm in diesem Geschäft.',
        translation: 'Vem, vamos comprar uma jaqueta e um guarda-chuva nesta loja.',
        emoji: '🧥',
        choices: [
          { text: 'Gut, ich kaufe auch eine Jacke.', translation: 'Certo, eu também vou comprar uma jaqueta.', next: 'final_gut' },
          { text: 'Ich mag diese Schuhe nicht.', translation: 'Eu não gosto destes sapatos.', wrong: 'Isso não ajuda com a chuva. Concorde em comprar a Jacke/o Regenschirm.' },
        ],
      },
      final_gut: {
        text: 'Toll! Jetzt werden wir nicht nass.',
        translation: 'Ótimo! Agora não vamos nos molhar.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Trocken und sicher!', message: 'Você e Anna se protegeram da chuva repentina de Hamburgo — secos e prontos para continuar o dia!' },
      },
    },
    glossary: [
      ['es regnet stark', 'está chovendo forte'],
      ['der Regenschirm', 'o guarda-chuva'],
      ['ich kaufe', 'eu compro'],
    ],
  },
  {
    id: 'de-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Ein neuer Beruf',
    emoji: '💼',
    summary: 'Você encontra o seu amigo Jonas depois do seu primeiro dia de trabalho como professora, e conta como se sentiu.',
    cultural_context: 'Na Alemanha, é comum tratar médicos e professores pelo cargo, mesmo fora do trabalho — e desde 1994 a lei garante o uso oficial da forma feminina dos cargos, como “Lehrerin” e “Ärztin”.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Hallo! Wie war dein erster Tag als Lehrerin?',
        translation: 'Oi! Como foi o seu primeiro dia como professora?',
        emoji: '🧑‍🏫',
        choices: [
          { text: 'Ich bin glücklich, aber ein bisschen müde.', translation: 'Estou feliz, mas um pouco cansada.', next: 'weiter' },
          { text: 'Morgen kommt Regen.', translation: 'Amanhã vem chuva.', wrong: 'Jonas perguntou sobre o seu dia de trabalho — isso não responde.' },
        ],
      },
      weiter: {
        text: 'Toll! Sind deine Schüler nett?',
        translation: 'Que legal! Os seus alunos são legais?',
        emoji: '🎒',
        choices: [
          { text: 'Ja, sie sind sehr nette Schüler.', translation: 'Sim, eles são alunos muito legais.', next: 'final_gut' },
          { text: 'Ich habe Angst vor Katzen.', translation: 'Eu tenho medo de gatos.', wrong: 'Isso não responde sobre os alunos.' },
        ],
      },
      final_gut: {
        text: 'Schön zu hören! Du wirst eine tolle Lehrerin sein.',
        translation: 'Que bom ouvir isso! Você vai ser uma professora incrível.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Ein guter erster Tag!', message: 'Jonas ficou feliz em saber do seu primeiro dia como professora — parece que você já encontrou alunos ótimos!' },
      },
    },
    glossary: [
      ['nette Schüler', 'alunos legais'],
      ['glücklich, aber müde', 'feliz, mas cansada'],
      ['tolle Lehrerin', 'professora incrível'],
    ],
  },
];
