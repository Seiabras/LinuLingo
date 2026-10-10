import type { StorySeed } from '../types';

/** Histórias interativas do sardo — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_SC: StorySeed[] = [
  {
    id: 'sc-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Bona die in Casteddu',
    emoji: '👋',
    summary: 'Você conhece Maria numa praça de Cagliari (Casteddu, em sardo) e faz a sua primeira conversa em sardo.',
    cultural_context: 'Cagliari, a capital da Sardenha, se chama Casteddu em sardo: “o castelo”, por causa do bairro antigo no alto do morro.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bona die! Mi naro Maria. Comente istas?',
        translation: 'Bom dia! Eu me chamo Maria. Como você está?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Bene, gràtzias! E tue?', translation: 'Bem, obrigado! E você?', next: 'bene' },
          { text: 'Adiosu!', translation: 'Tchau!', wrong: 'Maria acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      bene: {
        text: 'Bene puru deo! De inue ses?',
        translation: 'Eu também estou bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'So de su Brasile.', translation: 'Sou do Brasil.', next: 'final_bonu' },
          { text: 'Mi praghet su cafè.', translation: 'Eu gosto de café.', wrong: 'Isso não responde de onde você é. Use “So de…”.' },
        ],
      },
      final_bonu: {
        text: 'Ite bellu! Benènnidu a Casteddu!',
        translation: 'Que legal! Bem-vindo a Cagliari!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Una bella die!', message: 'Maria sorri: você fez a sua primeira conversa em sardo.' },
      },
    },
    glossary: [
      ['bona die', 'bom dia, olá'],
      ['comente istas?', 'como você está?'],
      ['so de', 'sou de'],
      ['benènnidu', 'bem-vindo'],
    ],
  },
  {
    id: 'sc-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Sa familia de Antoni',
    emoji: '👪',
    summary: 'Antoni, um amigo de Nuoro, pergunta pela sua família e convida você para comer em casa.',
    cultural_context: 'No interior da Sardenha, a família e a mesa andam juntas: pão fino (carasau), queijo de ovelha e vinho da ilha aparecem em quase toda refeição de domingo.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Salude! Tenes frades o sorres?',
        translation: 'Oi! Você tem irmãos ou irmãs?',
        emoji: '📱',
        choices: [
          { text: 'Eja, apo unu frade e una sorre.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'frades' },
          { text: 'Sa domo mea est manna.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “apo…” (tenho).' },
        ],
      },
      frades: {
        text: 'Bellu! Cheres manigare in domo nostra sa domìniga?',
        translation: 'Que bom! Quer comer na nossa casa no domingo?',
        emoji: '🍽️',
        choices: [
          { text: 'Eja, gràtzias meda!', translation: 'Sim, muito obrigado!', next: 'final_bonu' },
          { text: 'So de su Brasile.', translation: 'Sou do Brasil.', wrong: 'Antoni fez um convite: responda com “eja” (sim) ou “no, gràtzias”.' },
        ],
      },
      final_bonu: {
        text: 'Ajò! Mama at a fàghere pane e casu.',
        translation: 'Vamos! A mamãe vai fazer pão e queijo.',
        emoji: '🧀',
        ending: { tone: 'bom', title: 'Unu cumbidu!', message: 'Você foi convidado para o almoço de domingo em família.' },
      },
    },
    glossary: [
      ['frade / sorre', 'irmão / irmã'],
      ['apo', 'eu tenho'],
      ['eja', 'sim'],
      ['ajò!', 'vamos!'],
    ],
  },
  {
    id: 'sc-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Su mercadu in Nùgoro',
    emoji: '🛍️',
    summary: 'No mercado de Nuoro, você fala do tempo com um vendedor e compra uma camisa nova.',
    cultural_context: 'Nuoro, no centro montanhoso da Sardenha, tem invernos frios de verdade — às vezes com neve nas serras ao redor, diferente do litoral, quente quase o ano todo.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bona die! Oe est fridu meda, bufa unu cafè callente!',
        translation: 'Bom dia! Hoje está muito frio, beba um café quente!',
        emoji: '☕',
        choices: [
          { text: 'Gràtzias, cheres a mi azuare?', translation: 'Obrigado, você pode me ajudar?', next: 'azuare' },
          { text: 'Sa domo mea est manna.', translation: 'A minha casa é grande.', wrong: 'Isso não responde ao cumprimento sobre o frio. Agradeça e peça ajuda.' },
        ],
      },
      azuare: {
        text: 'Eja! Ite cheres comporare oe?',
        translation: 'Sim! O que você quer comprar hoje?',
        emoji: '🛍️',
        choices: [
          { text: 'Chèrgio comporare una camisa noa.', translation: 'Quero comprar uma camisa nova.', next: 'final_bonu' },
          { text: 'Deo so de su Brasile.', translation: 'Eu sou do Brasil.', wrong: 'Isso não diz o que você quer comprar. Use “chèrgio comporare…”.' },
        ],
      },
      final_bonu: {
        text: 'Bella custa camisa! Ti dat bene cun su fridu de oe.',
        translation: 'Linda essa camisa! Combina com o frio de hoje.',
        emoji: '👔',
        ending: { tone: 'bom', title: 'Una camisa noa!', message: 'Você comprou uma camisa nova e aprendeu a falar do tempo em sardo.' },
      },
    },
    glossary: [
      ['fridu', 'frio'],
      ['bufare', 'beber'],
      ['comporare', 'comprar'],
      ['chèrgio', 'eu quero'],
    ],
  },
  {
    id: 'sc-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'In su cunsultoriu',
    emoji: '🩺',
    summary: 'Na consulta com o médico em Cagliari, você explica o que dói e descreve como se sente.',
    cultural_context: 'O sistema de saúde da Sardenha é parte do serviço público italiano, mas é comum ouvir o médico falar sardo com pacientes mais velhos do interior da ilha.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bona die! So su medicu. Ite ti dolet?',
        translation: 'Bom dia! Eu sou o médico. O que dói em você?',
        emoji: '👨‍⚕️',
        choices: [
          { text: 'Sa conca mi dolet meda.', translation: 'A cabeça me dói muito.', next: 'conca' },
          { text: 'Deo potto faeddare sardu.', translation: 'Eu consigo falar sardo.', wrong: 'O médico perguntou o que dói, não se você fala sardo. Diga o que dói.' },
        ],
      },
      conca: {
        text: 'Comente ti intendes, oltre a custu?',
        translation: 'Como você está se sentindo, além disso?',
        emoji: '🤔',
        choices: [
          { text: 'So stancu meda, no isto bene.', translation: 'Estou muito cansado, não estou bem.', next: 'final_bonu' },
          { text: 'So maistu de iscola.', translation: 'Sou professor de escola.', wrong: 'O médico quer saber como você está se sentindo, não a sua profissão.' },
        ],
      },
      final_bonu: {
        text: 'Deves reposare. Bufa abba meda e torra si no ti sentis mègius.',
        translation: 'Você precisa descansar. Beba bastante água e volte se não se sentir melhor.',
        emoji: '💧',
        ending: { tone: 'bom', title: 'Unu bonu cussizu!', message: 'Você explicou como se sentia e recebeu um bom conselho do médico.' },
      },
    },
    glossary: [
      ['dolet', 'dói'],
      ['intèndhere', 'sentir-se'],
      ['stancu', 'cansado'],
      ['reposare', 'descansar'],
    ],
  },
];
