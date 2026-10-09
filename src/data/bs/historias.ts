import type { StorySeed } from '../types';

/** Histórias interativas do bósnio — uma por subnível, do A1.1 ao A2.2 (pacote incompleto, ver `incomplete` em index.ts). */
export const STORIES_BS: StorySeed[] = [
  {
    id: 'bs-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Zdravo u Sarajevu',
    emoji: '👋',
    summary: 'Você conhece Amina na Baščaršija, o bairro histórico de Sarajevo, e faz a sua primeira conversa em bósnio.',
    cultural_context: 'A Baščaršija é o antigo bazar otomano de Sarajevo, cheio de pequenas lojas e cafés — um bom lugar para tomar uma kahva.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Zdravo! Ja sam Amina. Kako si?',
        translation: 'Oi! Eu me chamo Amina. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Dobro, hvala! A ti?', translation: 'Bem, obrigado! E você?', next: 'dobro' },
          { text: 'Doviđenja!', translation: 'Tchau!', wrong: 'Amina acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      dobro: {
        text: 'Također dobro! Odakle si?',
        translation: 'Também bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Ja sam iz São Paula.', translation: 'Sou de São Paulo.', next: 'final_bom' },
          { text: 'Ja pijem vodu.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Ja sam iz…”.' },
        ],
      },
      final_bom: {
        text: 'Lijepo! Hoćeš li kahvu?',
        translation: 'Que legal! Você quer um café?',
        emoji: '☕',
        ending: { tone: 'bom', title: 'Prva kahva!', message: 'Amina sorri: você acabou de ter a sua primeira conversa em bósnio.' },
      },
    },
    glossary: [
      ['zdravo', 'oi, olá'],
      ['kako si?', 'como vai?'],
      ['ja sam iz', 'eu sou de'],
      ['kahva', 'café'],
    ],
  },
  {
    id: 'bs-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Večera s porodicom',
    emoji: '👪',
    summary: 'Tarik, um amigo de Mostar, pergunta pela sua família e convida você para jantar com a família dele.',
    cultural_context: 'Mostar é famosa pela Stari Most (ponte velha), reconstruída depois da guerra dos anos 1990 e hoje Patrimônio Mundial da UNESCO.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Zdravo! Imaš li braću ili sestre?',
        translation: 'Oi! Você tem irmãos ou irmãs?',
        emoji: '📱',
        choices: [
          { text: 'Da, imam brata i sestru.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'braca' },
          { text: 'Moja kuća je velika.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “imam…”.' },
        ],
      },
      braca: {
        text: 'Lijepo! Hoćeš li doći kod nas u subotu?',
        translation: 'Que legal! Você quer vir à nossa casa no sábado?',
        emoji: '🍽️',
        choices: [
          { text: 'Da, puno hvala!', translation: 'Sim, muito obrigado!', next: 'final_bom' },
          { text: 'Ja sam iz São Paula.', translation: 'Sou de São Paulo.', wrong: 'Tarik fez um convite: responda com “da” ou “ne, hvala”.' },
        ],
      },
      final_bom: {
        text: 'Odlično! Moja majka pravi hljeb i sir.',
        translation: 'Ótimo! A minha mãe faz pão e queijo.',
        emoji: '🧀',
        ending: { tone: 'bom', title: 'Poziv!', message: 'Você foi convidado para jantar com a família de Tarik.' },
      },
    },
    glossary: [
      ['brat / sestra', 'irmão / irmã'],
      ['imam', 'eu tenho'],
      ['da', 'sim'],
      ['kod nas', 'na nossa casa'],
    ],
  },
  {
    id: 'bs-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Kupovina na Baščaršiji',
    emoji: '🧥',
    summary: 'Amina encontra você na Baščaršija num dia frio, e vocês decidem o que comprar para o inverno.',
    cultural_context: 'Sarajevo tem inverno frio e com neve (a cidade sediou os Jogos Olímpicos de Inverno de 1984); a Baščaršija, o antigo bazar otomano, vende roupa de inverno ao lado dos artesanatos tradicionais.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Zdravo! Danas je hladno, zar ne?',
        translation: 'Oi! Hoje está frio, não é?',
        emoji: '🥶',
        choices: [
          { text: 'Da, i duva jak vjetar.', translation: 'Sim, e está ventando forte.', next: 'vjetar' },
          { text: 'Ja sam iz São Paula.', translation: 'Eu sou de São Paulo.', wrong: 'Isso não responde sobre o tempo de hoje. Fale do frio ou do vento.' },
        ],
      },
      vjetar: {
        text: 'Moram kupiti novu jaknu. Hoćeš li ići sa mnom?',
        translation: 'Eu preciso comprar uma jaqueta nova. Você quer ir comigo?',
        emoji: '🧥',
        choices: [
          { text: 'Da, i ja trebam šešir.', translation: 'Sim, e eu preciso de um chapéu.', next: 'final_bom' },
          { text: 'Sutra ću nositi haljinu.', translation: 'Amanhã eu vou usar um vestido.', wrong: 'Isso não responde ao convite de Amina. Diga se você vai com ela ou não.' },
        ],
      },
      final_bom: {
        text: 'Odlično! Na Baščaršiji ima lijepih jakni i šešira.',
        translation: 'Ótimo! Na Baščaršija tem jaquetas e chapéus bonitos.',
        emoji: '🛍️',
        ending: { tone: 'bom', title: 'Kupovina!', message: 'Você e Amina foram comprar roupa de inverno juntas.' },
      },
    },
    glossary: [
      ['hladno', 'frio'],
      ['moram kupiti', 'eu preciso comprar'],
      ['trebam', 'eu preciso de'],
      ['jakna / šešir', 'jaqueta / chapéu'],
    ],
  },
  {
    id: 'bs-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Posao u Vijećnici',
    emoji: '📚',
    summary: 'Tarik conta a você sobre o seu novo trabalho na Vijećnica, a biblioteca de Sarajevo reconstruída depois da guerra.',
    cultural_context: 'A Vijećnica, antiga câmara municipal e biblioteca nacional de Sarajevo, foi incendiada no cerco de 1992 e reaberta só em 2014 — um símbolo da reconstrução da cidade.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Zdravo! Sada radim u biblioteci, u Vijećnici.',
        translation: 'Oi! Agora eu trabalho na biblioteca, na Vijećnica.',
        emoji: '📚',
        choices: [
          { text: 'Lijepo! Jesi li sretan?', translation: 'Que legal! Você está feliz?', next: 'sretan' },
          { text: 'Ja sam liječnik.', translation: 'Eu sou médico.', wrong: 'Isso muda de assunto. Pergunte sobre o trabalho novo de Tarik ou como ele se sente.' },
        ],
      },
      sretan: {
        text: 'Da, veoma sam sretan! Ali moram puno raditi.',
        translation: 'Sim, estou muito feliz! Mas eu tenho que trabalhar muito.',
        emoji: '😊',
        choices: [
          { text: 'Razumijem. Ja se osjećam umoran od posla.', translation: 'Entendo. Eu me sinto cansado do trabalho.', next: 'final_bom' },
          { text: 'Sutra ću nositi jaknu.', translation: 'Amanhã eu vou usar uma jaqueta.', wrong: 'Isso não tem nada a ver com o que Tarik disse. Fale sobre trabalho ou sentimentos.' },
        ],
      },
      final_bom: {
        text: 'Razumijem te. Odmor je takođe važan!',
        translation: 'Eu entendo você. Descansar também é importante!',
        emoji: '🤝',
        ending: { tone: 'bom', title: 'Nova Vijećnica', message: 'Você e Tarik conversaram sobre trabalho, sentimentos e a importância de descansar.' },
      },
    },
    glossary: [
      ['radim u biblioteci', 'eu trabalho na biblioteca'],
      ['sretan / umoran', 'feliz / cansado'],
      ['moram raditi', 'eu tenho que trabalhar'],
      ['osjećam se', 'eu me sinto'],
    ],
  },
];
