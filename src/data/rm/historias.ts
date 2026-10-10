import type { StorySeed } from '../types';

/** Histórias interativas do romanche — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_RM: StorySeed[] = [
  {
    id: 'rm-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Allegra a Cuira',
    emoji: '👋',
    summary: 'Você conhece Anna na estação de trem de Chur (Cuira, em romanche) e faz a sua primeira conversa em romanche.',
    cultural_context: 'Chur é a capital do cantão dos Grisões, o único cantão suíço com três línguas oficiais: alemão, romanche e italiano.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Allegra! Jau hai num Anna. Co vai?',
        translation: 'Oi! Eu me chamo Anna. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Bain, grazia! E tai?', translation: 'Bem, obrigado! E você?', next: 'bain' },
          { text: 'A revair!', translation: 'Tchau!', wrong: 'Anna acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      bain: {
        text: 'Era bain! Danunder es ti?',
        translation: 'Também bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Jau sun da São Paulo.', translation: 'Sou de São Paulo.', next: 'final_bun' },
          { text: 'Jau baiv aua.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Jau sun da…”.' },
        ],
      },
      final_bun: {
        text: 'Bella! Bainvegni a Cuira!',
        translation: 'Que legal! Bem-vindo a Chur!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'In bun cumenzament!', message: 'Anna sorri: você fez a sua primeira conversa em romanche.' },
      },
    },
    glossary: [
      ['allegra', 'oi, olá'],
      ['co vai?', 'como vai?'],
      ['jau sun da', 'eu sou de'],
      ['bainvegni', 'bem-vindo'],
    ],
  },
  {
    id: 'rm-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ina tschaina en famiglia',
    emoji: '👪',
    summary: 'Gian, um amigo de Disentis, pergunta pela sua família e convida você para jantar com a família dele.',
    cultural_context: 'Disentis (Mustér, em romanche) fica na Surselva, a região onde mais se fala romanche no dia a dia.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Allegra! Has ti frars u soras?',
        translation: 'Oi! Você tem irmãos ou irmãs?',
        emoji: '📱',
        choices: [
          { text: 'Gea, jau hai in frar ed ina sora.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'frars' },
          { text: 'Mia chasa è gronda.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “jau hai…”.' },
        ],
      },
      frars: {
        text: 'Bella! Vuls ti vegnir tar nus sonda?',
        translation: 'Que legal! Quer vir à nossa casa no sábado?',
        emoji: '🍽️',
        choices: [
          { text: 'Gea, grazia fitg!', translation: 'Sim, muito obrigado!', next: 'final_bun' },
          { text: 'Jau sun da São Paulo.', translation: 'Sou de São Paulo.', wrong: 'Gian fez um convite: responda com “gea” ou “na, grazia”.' },
        ],
      },
      final_bun: {
        text: 'Fitg bain! Mia mamma fa paun e caschiel.',
        translation: 'Muito bem! A minha mãe faz pão e queijo.',
        emoji: '🧀',
        ending: { tone: 'bom', title: 'In invit!', message: 'Você foi convidado para jantar com a família de Gian.' },
      },
    },
    glossary: [
      ['frar / sora', 'irmão / irmã'],
      ['jau hai', 'eu tenho'],
      ['gea', 'sim'],
      ['tar nus', 'na nossa casa'],
    ],
  },
  {
    id: 'rm-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Il marcau a Cuira',
    emoji: '🛍️',
    summary: 'No mercado de Chur, você fala do tempo com um vendedor e compra uma jaqueta nova.',
    cultural_context: 'Cuira (Chur), capital dos Grisões, tem invernos frios de verdade, com neve nos passos alpinos ao redor — bem diferente do verão, que pode ser bem quente no vale.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bun di! Oz è fraid fitg, baiva in café chaud!',
        translation: 'Bom dia! Hoje está muito frio, beba um café quente!',
        emoji: '☕',
        choices: [
          { text: 'Grazia, pos ti am\'gidar?', translation: 'Obrigado, você pode me ajudar?', next: 'agidar' },
          { text: 'Mia chasa è gronda.', translation: 'Minha casa é grande.', wrong: 'Isso não responde ao cumprimento sobre o frio. Agradeça e peça ajuda.' },
        ],
      },
      agidar: {
        text: 'Gea! Tge vul ti cumprar oz?',
        translation: 'Sim! O que você quer comprar hoje?',
        emoji: '🛍️',
        choices: [
          { text: 'Jau vi cumprar ina giachet nova.', translation: 'Quero comprar uma jaqueta nova.', next: 'final_bonu' },
          { text: 'Jau sun da Brasil.', translation: 'Eu sou do Brasil.', wrong: 'Isso não diz o que você quer comprar. Use “jau vi cumprar…”.' },
        ],
      },
      final_bonu: {
        text: 'Bella questa giachet! Ella fa bain cun il fraid dad oz.',
        translation: 'Linda essa jaqueta! Combina com o frio de hoje.',
        emoji: '🧥',
        ending: { tone: 'bom', title: 'Ina giachet nova!', message: 'Você comprou uma jaqueta nova e aprendeu a falar do tempo em romanche.' },
      },
    },
    glossary: [
      ['fraid', 'frio'],
      ['baiver', 'beber'],
      ['cumprar', 'comprar'],
      ['jau vi', 'eu quero'],
    ],
  },
  {
    id: 'rm-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Tar il medi',
    emoji: '🩺',
    summary: 'Numa consulta com o médico em Cuira, você explica o que dói e descreve como se sente.',
    cultural_context: 'Nos Grisões, não é raro o médico falar romanche com pacientes das vales mais isoladas, onde a língua ainda é a do dia a dia em casa.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bun di! Jau sun il medi. Tge ta fa mal?',
        translation: 'Bom dia! Eu sou o médico. O que dói em você?',
        emoji: '👨‍⚕️',
        choices: [
          { text: 'Il chau ma fa mal fitg.', translation: 'A cabeça me dói muito.', next: 'chau' },
          { text: 'Jau poss discurrer rumantsch.', translation: 'Eu consigo falar romanche.', wrong: 'O médico perguntou o que dói, não se você fala romanche. Diga o que dói.' },
        ],
      },
      chau: {
        text: 'Co ta sentas ti, ultra da quai?',
        translation: 'Como você está se sentindo, além disso?',
        emoji: '🤔',
        choices: [
          { text: 'Jau sun stanchel fitg, jau n\'sun betg bain.', translation: 'Estou muito cansado, não estou bem.', next: 'final_bonu' },
          { text: 'Jau sun medi.', translation: 'Eu sou médico.', wrong: 'O médico quer saber como você está se sentindo, não a sua profissão.' },
        ],
      },
      final_bonu: {
        text: 'Ti stos reposar. Baiva bia aua e vegn enavos sche ti na ta sentas betg meglier.',
        translation: 'Você precisa descansar. Beba bastante água e volte se não se sentir melhor.',
        emoji: '💧',
        ending: { tone: 'bom', title: 'In bun cussegl!', message: 'Você explicou como se sentia e recebeu um bom conselho do médico.' },
      },
    },
    glossary: [
      ['fa mal', 'dói'],
      ['sentir', 'sentir-se'],
      ['stanchel', 'cansado'],
      ['reposar', 'descansar'],
    ],
  },
];
