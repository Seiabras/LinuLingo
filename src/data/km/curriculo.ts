import type { UnitSeed } from '../types';

/**
 * Trilha do khmer: por enquanto só as duas unidades do nível A1 — ver `incomplete` em index.ts.
 * Da A2 ao C2 chega depois.
 */
export const UNITS_KM: UnitSeed[] = [
  {
    id: 'km-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'សួស្តី! ជំហានដំបូង',
    emoji: '👋',
    card: {
      id: 'km-c1',
      title: 'Uma escrita só sua, sem tons para se preocupar',
      emoji: '🪷',
      history:
        'O khmer é a língua do povo khmer e idioma oficial do Camboja, escrito desde pelo menos o século VII numa escrita própria (também chamada khmer), uma abugida descendente da escrita brahmi do sul da Índia, a mesma origem do devanágari e de outras escritas do Sudeste Asiático. O khmer forma seu próprio ramo dentro da família austro-asiática (o ramo mon-khmer), sem parentesco com o tailandês (da família kra-dai) nem com o vietnamita (também austro-asiático, mas de outro ramo) — são só vizinhos geográficos, não línguas irmãs.',
      culture_tip:
        '“សួស្តី” (suostei) é a saudação do dia a dia, usada em qualquer hora; “ជំរាបសួរ” (chumreap suor) é a forma mais formal, feita com as mãos juntas como numa reverência, parecida com o “namastê” indiano — e, como ele, vem do sânscrito.',
      grammar_why:
        'O khmer é uma língua SVO (sujeito-verbo-objeto), como o português: “ខ្ញុំ ចូលចិត្ត តែ” é, palavra por palavra, “eu gosto chá” — sem preposição “de”. E, diferente do tailandês e do vietnamita, o khmer NÃO é uma língua tonal: a mesma sílaba não muda de sentido conforme a melodia da voz, só conforme o som das vogais e consoantes.',
      grammar_examples: [
        ['សួស្តី, ខ្ញុំឈ្មោះដារា។', 'Oi, eu me chamo Dara.'],
        ['អ្នកឈ្មោះអ្វី?', 'Qual é o seu nome?'],
        ['ខ្ញុំរៀនភាសាខ្មែរ។', 'Eu estou aprendendo khmer.'],
        ['លាហើយ, ជួបគ្នាថ្ងៃស្អែក!', 'Tchau, até amanhã!'],
      ],
      character_guide: [
        ['ក', 'um “k” seco, sem soprar', 'ក្រុង (krong, “cidade”)'],
        ['ស', 'como o “s” do português', 'សួស្តី (suostei, “oi”)'],
        ['ម', 'como o “m” do português', 'មិត្ត (mit, “amigo”)'],
        ['ា', 'sinal de vogal “a” longo, grudado depois da consoante', 'ទាន (não usado aqui — veja ជា, chea)'],
        ['ញ', 'um “nh” nasal palatal, como o “nh” de “manhã”', 'ញ៉ាំ (nham, “comer”)'],
      ],
    },
    lessons: [
      {
        id: 'km-u1-l1',
        title: 'សួស្តី, អរគុណ, លាហើយ',
        kind: 'licao',
        words: ['សួស្តី', 'ជំរាបសួរ', 'លាហើយ', 'អរគុណ', 'សូម', 'សុំទោស'],
        cloze: [
          { sentence: '___! អ្នកសុខសប្បាយទេ?', answer: 'សួស្តី', options: ['សួស្តី', 'លាហើយ', 'សូម'], translation: 'Oi! Tudo bem?' },
          { sentence: '___ ណាស់!', answer: 'អរគុណ', options: ['អរគុណ', 'សួស្តី', 'សុំទោស'], translation: 'Muito obrigado!' },
          { sentence: 'ទឹកមួយ, ___។', answer: 'សូម', options: ['សូម', 'លាហើយ', 'អរគុណ'], translation: 'Uma água, por favor.' },
        ],
        voice: {
          bot: 'សួស្តី! អ្នកសុខសប្បាយទេ?',
          botTranslation: 'Oi! Tudo bem?',
          expected: ['ខ្ញុំសុខសប្បាយ, អរគុណ។', 'សុខសប្បាយ', 'អរគុណ'],
          hint: 'Responda que está bem e agradeça: “ខ្ញុំសុខសប្បាយ, អរគុណ។”.',
        },
        communityPrompt: 'Escreva três expressões em khmer: uma saudação (“សួស្តី”), um agradecimento (“អរគុណ”) e uma despedida (“លាហើយ”).',
      },
      {
        id: 'km-u1-l2',
        title: 'ខ្ញុំ, អ្នក, ឈ្មោះ',
        kind: 'licao',
        words: ['ខ្ញុំ', 'អ្នក', 'ឈ្មោះ', 'ជា', 'ក្រុង', 'ប្រទេស'],
        cloze: [
          { sentence: '___ ឈ្មោះដារា។', answer: 'ខ្ញុំ', options: ['ខ្ញុំ', 'អ្នក', 'គាត់'], translation: 'Eu me chamo Dara.' },
          { sentence: '___ ឈ្មោះអ្វី?', answer: 'អ្នក', options: ['អ្នក', 'ខ្ញុំ', 'យើង'], translation: 'Qual é o seu nome?' },
          { sentence: 'កម្ពុជា___ប្រទេសខ្ញុំ។', answer: 'ជា', options: ['ជា', 'មាន', 'ទៅ'], translation: 'Camboja é o meu país.' },
        ],
        voice: {
          bot: 'សួស្តី! អ្នកឈ្មោះអ្វី?',
          botTranslation: 'Oi! Qual é o seu nome?',
          expected: ['ខ្ញុំឈ្មោះលីនូ។ ហើយអ្នក?', 'ខ្ញុំឈ្មោះ', 'ហើយអ្នក'],
          hint: 'Diga seu nome com “ខ្ញុំឈ្មោះ…” e devolva a pergunta com “ហើយអ្នក?” (e você?).',
        },
        communityPrompt: 'Apresente-se em khmer: diga seu nome com “ខ្ញុំឈ្មោះ…” e de que país você é com “…ជាប្រទេសខ្ញុំ”.',
      },
      {
        id: 'km-u1-l3',
        title: 'ការប្រឡង៖ ជំហានដំបូង',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'ជំរាបសួរ, ខ្ញុំឈ្មោះសុភា។ អ្នកឈ្មោះអ្វី, ហើយប្រទេសអ្នកជាអ្វី?',
          botTranslation: 'Olá, eu me chamo Sophea. Qual é o seu nome, e qual é o seu país?',
          expected: ['សួស្តី, ខ្ញុំឈ្មោះលូស៊ីយ៉ា, ប្រទេសខ្ញុំជាប្រេស៊ីល។', 'ខ្ញុំឈ្មោះ', 'ប្រទេសខ្ញុំជា'],
          hint: 'Devolva a saudação, diga seu nome (“ខ្ញុំឈ្មោះ…”) e o seu país (“ប្រទេសខ្ញុំជា…”).',
        },
        communityPrompt: 'Escreva uma apresentação completa em khmer: saudação, nome com “ខ្ញុំឈ្មោះ…”, país com “…ជាប្រទេសខ្ញុំ” e uma despedida.',
      },
    ],
  },
  {
    id: 'km-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'គ្រួសារ និង ផ្ទះ',
    emoji: '👪',
    card: {
      id: 'km-c2',
      title: 'Ter sem verbo de posse exclusivo, e a casa khmer',
      emoji: '🏠',
      history:
        'A família estendida é o centro da vida social cambojana: várias gerações costumam morar perto umas das outras, e visitar os pais e avós nos dias de folga é parte importante da rotina. Nas casas tradicionais khmer, erguidas sobre palafitas de madeira para escapar das cheias da estação das chuvas, o andar de baixo guarda ferramentas e animais, e a vida da família acontece no andar de cima.',
      culture_tip:
        'Perguntar sobre a família de alguém (“គ្រួសារអ្នកមានអ្នកណាខ្លះ?”, quem tem na sua família?) é uma forma comum e bem-vinda de puxar conversa no Camboja, bem diferente do hábito mais reservado de alguns países ocidentais.',
      grammar_why:
        'Para dizer que alguém tem algo (um objeto ou um parente), o khmer usa só o verbo “មាន” (mien, ter/haver), sem um verbo separado de posse e sem artigo antes do substantivo: “ខ្ញុំមានគ្រួសារធំ” é, ao pé da letra, “eu tenho família grande”. O substantivo khmer nunca muda para marcar plural nem gênero: “ឆ្កែ” serve tanto para “um cachorro” quanto para “cachorros”, e o contexto ou um numeral (“ឆ្កែមួយ”, um cachorro) resolve a dúvida.',
      grammar_examples: [
        ['ខ្ញុំមានគ្រួសារធំ។', 'Eu tenho uma família grande.'],
        ['ខ្ញុំមានបងប្រុស។', 'Eu tenho um irmão mais velho.'],
        ['ផ្ទះខ្ញុំតូច។', 'A minha casa é pequena.'],
        ['ខ្ញុំញ៉ាំបាយ។', 'Eu como arroz (comida).'],
      ],
      character_guide: [
        ['ផ', 'um “p” aspirado, soprado', 'ផ្ទះ (phteah, “casa”)'],
        ['ទ', 'um “t” suave, quase “d”', 'ទឹក (teuk, “água”)'],
        ['ប', 'um “p”/“b” sem soprar, entre os dois sons', 'បាយ (bay, “arroz, comida”)'],
        ['ម្ត', 'grupo consonantal “md”, com a subscrita ្ត', 'ម្តាយ (mdaay, “mãe”)'],
        ['ុ', 'sinal de vogal “u” curto, grudado embaixo da consoante', 'កុន (não usado aqui — compare ចូលចិត្ត, chol chet)'],
      ],
    },
    lessons: [
      {
        id: 'km-u2-l1',
        title: 'គ្រួសារខ្ញុំ',
        kind: 'licao',
        words: ['គ្រួសារ', 'ម្តាយ', 'ឪពុក', 'បងប្រុស', 'បងស្រី', 'មាន'],
        cloze: [
          { sentence: 'គ្រួសារខ្ញុំ___ធំ។', answer: 'មាន', options: ['មាន', 'ជា', 'ទៅ'], translation: '(Eu) tenho uma família grande. (ao pé da letra, “família minha tem grande”)' },
          { sentence: 'ខ្ញុំមាន___ម្នាក់។', answer: 'បងប្រុស', options: ['បងប្រុស', 'ម្តាយ', 'ឪពុក'], translation: 'Eu tenho um irmão mais velho.' },
          { sentence: '___ខ្ញុំនៅភ្នំពេញ។', answer: 'ឪពុក', options: ['ឪពុក', 'ម្តាយ', 'បងស្រី'], translation: 'O meu pai está/mora em Phnom Penh.' },
        ],
        voice: {
          bot: 'តើអ្នកមានបងប្អូនទេ?',
          botTranslation: 'Você tem irmãos?',
          expected: ['ចាស, ខ្ញុំមានបងស្រីម្នាក់។', 'ខ្ញុំមាន', 'បងស្រី', 'បងប្រុស'],
          hint: 'Responda com “ចាស/បាទ, ខ្ញុំមាន…” ou “ទេ, ខ្ញុំគ្មានទេ”.',
        },
        communityPrompt: 'Descreva a sua família em khmer: quantos irmãos mais velhos (បង) e mais novos (ប្អូន) você tem, e onde mora a sua mãe (ម្តាយ) e o seu pai (ឪពុក).',
      },
      {
        id: 'km-u2-l2',
        title: 'នៅផ្ទះ',
        kind: 'licao',
        words: ['ផ្ទះ', 'ទឹក', 'បាយ', 'ញ៉ាំ', 'ផឹក', 'ចូលចិត្ត'],
        cloze: [
          { sentence: 'ផ្ទះខ្ញុំ___។', answer: 'តូច', options: ['តូច', 'ធំ', 'ល្អ'], translation: 'A minha casa é pequena.' },
          { sentence: 'ខ្ញុំ___ទឹក។', answer: 'ផឹក', options: ['ផឹក', 'ញ៉ាំ', 'ចូលចិត្ត'], translation: 'Eu bebo água.' },
          { sentence: 'ខ្ញុំ___តែបៃតង។', answer: 'ចូលចិត្ត', options: ['ចូលចិត្ត', 'ញ៉ាំ', 'មាន'], translation: 'Eu gosto de chá verde.' },
        ],
        voice: {
          bot: 'អ្នកចូលចិត្តញ៉ាំអ្វី?',
          botTranslation: 'O que você gosta de comer?',
          expected: ['ខ្ញុំញ៉ាំបាយ។', 'ខ្ញុំញ៉ាំ', 'បាយ'],
          hint: 'Diga o que você come com “ខ្ញុំញ៉ាំ…” e o que bebe com “ខ្ញុំផឹក…”.',
        },
        communityPrompt: 'Escreva o que você come e bebe, usando “ខ្ញុំញ៉ាំ…”, “ខ្ញុំផឹក…” e “ខ្ញុំចូលចិត្ត…”.',
      },
      {
        id: 'km-u2-l3',
        title: 'ការប្រឡង៖ គ្រួសារ និង ផ្ទះ',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'និយាយអំពីគ្រួសារអ្នក: តើអ្នកមានបងប្អូនទេ, ហើយផ្ទះអ្នកនៅឯណា?',
          botTranslation: 'Fale sobre a sua família: você tem irmãos, e onde fica a sua casa?',
          expected: ['ចាស, ខ្ញុំមានប្អូនស្រីម្នាក់។ ផ្ទះខ្ញុំនៅភ្នំពេញ។', 'ខ្ញុំមាន', 'ផ្ទះខ្ញុំនៅ'],
          hint: 'Diga quantos irmãos tem (“ខ្ញុំមាន…”) e onde fica a sua casa (“ផ្ទះខ្ញុំនៅ…”).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “ខ្ញុំមាន…”, “ផ្ទះខ្ញុំ…” e “ខ្ញុំញ៉ាំ/ផឹក…”.',
      },
    ],
  },
];
