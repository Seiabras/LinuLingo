import type { StorySeed } from '../types';

/** Histórias interativas do khmer — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_KM: StorySeed[] = [
  {
    id: 'km-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'សួស្តីនៅភ្នំពេញ',
    emoji: '👋',
    summary: 'Você conhece a សុភា (Sophea) perto do Rio das Quatro Faces, em Phnom Penh, e faz a sua primeira conversa em khmer.',
    cultural_context: 'O ponto onde o rio Tonlé Sap encontra o Mekong, em frente ao Palácio Real de Phnom Penh, é chamado de “Chaktomuk” (Rio das Quatro Faces) e é um dos lugares mais movimentados da capital do Camboja ao entardecer.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'សួស្តី! ខ្ញុំឈ្មោះសុភា។ អ្នកសុខសប្បាយទេ?',
        translation: 'Oi! Eu me chamo Sophea. Tudo bem com você?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'សួស្តី! ខ្ញុំសុខសប្បាយ, អរគុណ។', translation: 'Oi! Eu estou bem, obrigado(a).', next: 'nome' },
          { text: 'លាហើយ!', translation: 'Tchau!', wrong: 'Sophea acabou de se apresentar: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      nome: {
        text: 'ល្អណាស់! អ្នកឈ្មោះអ្វី?',
        translation: 'Que ótimo! Qual é o seu nome?',
        emoji: '😊',
        choices: [
          { text: 'ខ្ញុំឈ្មោះលីនូ។', translation: 'Eu me chamo Linu.', next: 'pais' },
          { text: 'ខ្ញុំផឹកទឹក។', translation: 'Eu bebo água.', wrong: 'Isso não responde qual é o seu nome. Use “ខ្ញុំឈ្មោះ…”.' },
        ],
      },
      pais: {
        text: 'ល្អ, លីនូ! ប្រទេសអ្នកជាអ្វី?',
        translation: 'Legal, Linu! Qual é o seu país?',
        emoji: '🌍',
        choices: [
          { text: 'ប្រទេសខ្ញុំជាប្រេស៊ីល។', translation: 'O meu país é o Brasil.', next: 'final_bom' },
          { text: 'ខ្ញុំចូលចិត្តតែ។', translation: 'Eu gosto de chá.', wrong: 'Isso não responde qual é o seu país. Use “ប្រទេសខ្ញុំជា…”.' },
        ],
      },
      final_bom: {
        text: 'ល្អណាស់! សូមស្វាគមន៍មកកាន់ភ្នំពេញ។',
        translation: 'Muito bom! Seja bem-vindo(a) a Phnom Penh.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'ការសន្ទនាដំបូង', message: 'Sophea sorri: você fez a sua primeira conversa em khmer.' },
      },
    },
    glossary: [
      ['សួស្តី', 'oi, olá'],
      ['អ្នកសុខសប្បាយទេ?', 'tudo bem com você?'],
      ['ខ្ញុំឈ្មោះ…', 'eu me chamo…'],
      ['ប្រទេសខ្ញុំជា…', 'o meu país é…'],
    ],
  },
  {
    id: 'km-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'ទៅសៀមរាប',
    emoji: '🛺',
    summary: 'ដារា (Dara), um amigo de Siem Reap, pergunta pela sua família e convida você para ver o nascer do sol em Angkor Wat.',
    cultural_context: 'Siem Reap é a cidade-porta de entrada para Angkor Wat, o maior monumento religioso do mundo, erguido no século XII — ver o sol nascer atrás das suas torres é um dos passeios mais procurados do Camboja.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'សួស្តី! តើអ្នកមានបងប្អូនទេ?',
        translation: 'Oi! Você tem irmãos?',
        emoji: '📱',
        choices: [
          { text: 'ចាស, ខ្ញុំមានបងស្រីម្នាក់។', translation: 'Sim, eu tenho uma irmã mais velha.', next: 'bong' },
          { text: 'ផ្ទះខ្ញុំធំ។', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “ខ្ញុំមាន…”.' },
        ],
      },
      bong: {
        text: 'ល្អណាស់! តើអ្នកចង់ទៅមើលថ្ងៃរះនៅអង្គរវត្តទេ?',
        translation: 'Que ótimo! Você quer ir ver o nascer do sol em Angkor Wat?',
        emoji: '🌅',
        choices: [
          { text: 'ចង់ណាស់, អរគុណ!', translation: 'Quero muito, obrigado(a)!', next: 'final_bom' },
          { text: 'ខ្ញុំញ៉ាំបាយ។', translation: 'Eu como arroz.', wrong: 'Dara fez um convite: responda com “ចង់” (quero) ou “ទេ, អរគុណ” (não, obrigado).' },
        ],
      },
      final_bom: {
        text: 'អស្ចារ្យ! ថ្ងៃស្អែក ម៉ោងប្រាំ, នៅមុខអង្គរវត្ត។',
        translation: 'Combinado! Amanhã cinco horas, na frente de Angkor Wat.',
        emoji: '🛕',
        ending: { tone: 'bom', title: 'ថ្ងៃរះនៅអង្គរ', message: 'Você vai ver o nascer do sol em Angkor Wat ao lado de Dara.' },
      },
    },
    glossary: [
      ['តើអ្នកមានបងប្អូនទេ?', 'você tem irmãos?'],
      ['ខ្ញុំមាន…', 'eu tenho…'],
      ['ចង់', 'querer'],
      ['អង្គរវត្ត', 'Angkor Wat'],
    ],
  },
];
