import type { StorySeed } from '../types';

/** Histórias interativas do friulano — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_FUR: StorySeed[] = [
  {
    id: 'fur-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Mandi a Udin',
    emoji: '👋',
    summary: 'Você conhece Marie numa praça de Udine (Udin, em friulano) e faz a sua primeira conversa em friulano.',
    cultural_context: 'Udine é a principal cidade do Friul; a sua praça da Liberdade, com a loggia veneziana, é o ponto de encontro do centro.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Mandi! O mi clami Marie. Cemût stâstu?',
        translation: 'Oi! Eu me chamo Maria. Como vai você?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Ben, graciis! E tu?', translation: 'Bem, obrigado! E você?', next: 'ben' },
          { text: 'Buine gnot!', translation: 'Boa noite (despedida)!', wrong: 'Marie acabou de chegar: “buine gnot” é para ir dormir. Responda ao cumprimento.' },
        ],
      },
      ben: {
        text: 'Ancje jo ben! Di dulà sêstu?',
        translation: 'Eu também estou bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'O soi di São Paulo.', translation: 'Sou de São Paulo.', next: 'final_bon' },
          { text: 'O bêf aghe.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “O soi di…”.' },
        ],
      },
      final_bon: {
        text: 'Ce biel! Benvignût a Udin!',
        translation: 'Que legal! Bem-vindo a Udine!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Un bon inizi!', message: 'Marie sorri: você fez a sua primeira conversa em friulano.' },
      },
    },
    glossary: [
      ['mandi', 'oi; tchau'],
      ['cemût stâstu?', 'como vai você?'],
      ['o soi di', 'eu sou de'],
      ['benvignût', 'bem-vindo'],
    ],
  },
  {
    id: 'fur-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Un tai cun Toni',
    emoji: '🍷',
    summary: 'Toni, um amigo de Gorizia, pergunta pela sua família e convida você para comer frico.',
    cultural_context: 'O frico, de queijo montasio e batata, é o prato típico do Friul; o “tai” é a taça de vinho dos bares das aldeias.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Mandi! Âstu fradis o sûrs?',
        translation: 'Oi! Você tem irmãos ou irmãs?',
        emoji: '📱',
        choices: [
          { text: 'Sì, o ai un fradi e une sûr.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'fradis' },
          { text: 'La mê cjase e je grande.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “o ai…”.' },
        ],
      },
      fradis: {
        text: 'Ce biel! Vuelistu mangjâ il frico cun nô?',
        translation: 'Que legal! Quer comer frico com a gente?',
        emoji: '🧀',
        choices: [
          { text: 'Sì, graciis tantis!', translation: 'Sim, muito obrigado!', next: 'final_bon' },
          { text: 'O soi di São Paulo.', translation: 'Sou de São Paulo.', wrong: 'Toni fez um convite: responda com “sì” ou “no, graciis”.' },
        ],
      },
      final_bon: {
        text: 'Benon! Mê mari e fâs il frico plui bon dal Friûl.',
        translation: 'Ótimo! A minha mãe faz o frico mais gostoso do Friul.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Un invît!', message: 'Você foi convidado para comer frico com a família de Toni.' },
      },
    },
    glossary: [
      ['fradi / sûr', 'irmão / irmã'],
      ['o ai', 'eu tenho'],
      ['frico', 'prato de queijo e batata'],
      ['graciis tantis', 'muito obrigado'],
    ],
  },
  {
    id: 'fur-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Il marcjât a Udin',
    emoji: '🛍️',
    summary: 'No mercado de Udine, você fala do tempo com um vendedor e compra uma roupa nova.',
    cultural_context: 'Udin (Udine), a maior cidade do Friul, tem invernos frios com neve nas montanhas Cárnicas ao norte, e verões quentes na planície.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Mandi! Vuê al è frêt propi, bêf un cafè cjalt!',
        translation: 'Oi! Hoje está muito frio, beba um café quente!',
        emoji: '☕',
        choices: [
          { text: 'Graciis, mi puedistu judâ?', translation: 'Obrigado, você pode me ajudar?', next: 'judâ' },
          { text: 'La mê cjase e je grande.', translation: 'A minha casa é grande.', wrong: 'Isso não responde ao cumprimento sobre o frio. Agradeça e peça ajuda.' },
        ],
      },
      judâ: {
        text: 'Sì! Ce vuelistu comprâ vuê?',
        translation: 'Sim! O que você quer comprar hoje?',
        emoji: '🛍️',
        choices: [
          { text: 'O vuei comprâ un vistît gnûf.', translation: 'Quero comprar uma roupa nova.', next: 'final_bon' },
          { text: 'O soi dal Brasîl.', translation: 'Eu sou do Brasil.', wrong: 'Isso não diz o que você quer comprar. Use “o vuei comprâ…”.' },
        ],
      },
      final_bon: {
        text: 'Biel chest vistît! Al sta ben cul frêt di vuê.',
        translation: 'Linda essa roupa! Combina com o frio de hoje.',
        emoji: '👕',
        ending: { tone: 'bom', title: 'Un vistît gnûf!', message: 'Você comprou uma roupa nova e aprendeu a falar do tempo em friulano.' },
      },
    },
    glossary: [
      ['frêt', 'frio'],
      ['bevi', 'beber'],
      ['comprâ', 'comprar'],
      ['o vuei', 'eu quero'],
    ],
  },
  {
    id: 'fur-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Dal dotôr',
    emoji: '🩺',
    summary: 'Numa consulta com o médico em Udine, você explica o que dói e descreve como se sente.',
    cultural_context: 'No Friul, não é raro o médico de família falar friulano com os pacientes, sobretudo nas zonas rurais, ao lado do italiano.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Mandi! O soi il dotôr. Ce mâl âstu?',
        translation: 'Oi! Eu sou o médico. O que dói em você?',
        emoji: '👨‍⚕️',
        choices: [
          { text: 'Il cjâf mi dûl propi.', translation: 'A cabeça me dói muito.', next: 'cjaf' },
          { text: 'O sai fevelâ furlan.', translation: 'Eu sei falar friulano.', wrong: 'O médico perguntou o que dói, não se você fala friulano. Diga o que dói.' },
        ],
      },
      cjaf: {
        text: 'Cemût si sintistu, oltri di chest?',
        translation: 'Como você está se sentindo, além disso?',
        emoji: '🤔',
        choices: [
          { text: 'O soi avilît, no mi sint ben.', translation: 'Estou triste, não me sinto bem.', next: 'final_bon' },
          { text: 'O soi insegnant.', translation: 'Sou professor.', wrong: 'O médico quer saber como você está se sentindo, não a sua profissão.' },
        ],
      },
      final_bon: {
        text: 'Tu scugnis polsâ. Bêf tante aghe e torne indaûr se no tu stâs miôr.',
        translation: 'Você precisa descansar. Beba bastante água e volte se não se sentir melhor.',
        emoji: '💧',
        ending: { tone: 'bom', title: 'Un bon conseli!', message: 'Você explicou como se sentia e recebeu um bom conselho do médico.' },
      },
    },
    glossary: [
      ['dûl', 'dói'],
      ['sintî', 'sentir-se'],
      ['avilît', 'triste'],
      ['polsâ', 'descansar'],
    ],
  },
];
