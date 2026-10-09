import type { StorySeed } from '../types';

/** Histórias interativas do khmer — A1 (A1.1 e A1.2) mais A2 (A2.1 e A2.2), acrescentado depois. */
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
  {
    id: 'km-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'ត្រជាក់នៅផ្សារ',
    emoji: '🧤',
    summary: 'No mercado de Phnom Penh, você conversa com a vendedora សុខា sobre o tempo frio e compra uma roupa nova.',
    cultural_context: 'O Camboja tem clima tropical de monções, com estação chuvosa (maio a outubro) e estação seca (novembro a abril) — dias realmente frios são raros, então quando o tempo esfria um pouco, é assunto garantido de conversa no mercado.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'ជំរាបសួរ! ថ្ងៃនេះត្រជាក់ទេ?',
        translation: 'Olá! Hoje está frio?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'ចាស, ត្រជាក់ និង មានខ្យល់។', translation: 'Sim, está frio e tem vento.', next: 'crompar' },
          { text: 'ខ្ញុំជាគ្រូ។', translation: 'Eu sou professor(a).', wrong: 'សុខា perguntou sobre o tempo — isso não responde à pergunta. Diga se está frio com “ចាស” ou “ទេ”.' },
        ],
      },
      crompar: {
        text: 'ខ្ញុំមានមួកនិងស្រោមដៃ, អ្នកចង់ទិញទេ?',
        translation: 'Eu tenho chapéus e luvas, você quer comprar?',
        emoji: '🧤',
        choices: [
          { text: 'ចាស, ខ្ញុំទិញមួកមួយ។', translation: 'Sim, eu compro um chapéu.', next: 'final_bo' },
          { text: 'ខ្ញុំឃ្លាន, ខ្ញុំចង់ញ៉ាំបាយ។', translation: 'Estou com fome, quero comer.', wrong: 'សុខា vende roupas, não comida. Diga o que você quer comprar com “ខ្ញុំទិញ…”.' },
        ],
      },
      final_bo: {
        text: 'ល្អណាស់! អ្នកនឹងរីករាយជាមួយមួកនេះ។',
        translation: 'Muito bom! Você vai ficar feliz com esse chapéu.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'ការទិញល្អមួយ!', message: 'Você comprou um chapéu novo no mercado — já pode enfrentar o vento frio de Phnom Penh!' },
      },
    },
    glossary: [
      ['ត្រជាក់ទេ?', 'está frio?'],
      ['ខ្ញុំទិញ…', 'eu compro…'],
      ['មួក', 'chapéu'],
    ],
  },
  {
    id: 'km-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'នៅសាលារៀន',
    emoji: '🏫',
    summary: 'No fim de um longo dia de trabalho na escola, você encontra o professor សុវណ្ណ e conta como se sente.',
    cultural_context: 'O título “គ្រូ” (professor) carrega respeito que vai além da sala de aula no Camboja: o mesmo composto aparece em “គ្រូពេទ្យ” (literalmente “professor que cura”), a palavra pra “médico”.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'ជំរាបសួរ! អ្នកធ្វើការនៅសាលារៀននេះទេ?',
        translation: 'Olá! Você trabalha nesta escola?',
        emoji: '🧑‍🏫',
        choices: [
          { text: 'ចាស, ខ្ញុំជាគ្រូ។', translation: 'Sim, eu sou professor(a).', next: 'sentiments' },
          { text: 'ខ្ញុំស្រេកទឹក។', translation: 'Estou com sede.', wrong: 'សុវណ្ណ perguntou se você trabalha na escola — isso não responde. Use “ចាស” ou “ទេ”.' },
        ],
      },
      sentiments: {
        text: 'ល្អណាស់! អ្នករីករាយទេ?',
        translation: 'Muito bom! Você está feliz?',
        emoji: '😊',
        choices: [
          { text: 'ខ្ញុំហត់, ប៉ុន្តែរីករាយ។', translation: 'Estou cansado(a), mas feliz.', next: 'final_bo' },
          { text: 'ខ្ញុំជាកសិករ។', translation: 'Eu sou agricultor(a).', wrong: 'Isso não diz como você se sente. Use “ខ្ញុំ…” com រីករាយ, ទុក្ខ ou ហត់.' },
        ],
      },
      final_bo: {
        text: 'ខ្ញុំយល់ច្បាស់ — ការធ្វើការនៅសាលារៀនហត់ដែរ។',
        translation: 'Eu entendo bem — trabalhar na escola também cansa.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'ថ្ងៃការងារល្អ!', message: 'សុវណ្ណ entendeu como você se sente — vocês dois trabalharam duro hoje!' },
      },
    },
    glossary: [
      ['ខ្ញុំជាគ្រូ', 'eu sou professor(a)'],
      ['អ្នករីករាយទេ?', 'você está feliz?'],
      ['ហត់, ប៉ុន្តែរីករាយ', 'cansado, mas feliz'],
    ],
  },
];
