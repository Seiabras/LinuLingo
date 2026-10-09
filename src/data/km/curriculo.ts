import type { UnitSeed } from '../types';

/**
 * Trilha do khmer: A1 completo (unidades 1 e 2), mais A2 (unidades 3 e 4, acrescentadas depois —
 * ver `incomplete` em index.ts). Do B1 ao C1 chega nas próximas atualizações.
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
  {
    id: 'km-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'សម្លៀកបំពាក់ និង អាកាសធាតុ',
    emoji: '🧥',
    card: {
      id: 'km-c3',
      title: 'Dois verbos pra "vestir", e o tempo tropical do Camboja',
      emoji: '🌦️',
      history:
        'O Camboja tem clima tropical de monções, com só duas estações bem marcadas: a chuvosa (de maio a outubro, quando o vento sudoeste traz a maior parte da chuva do ano) e a seca (de novembro a abril). Essa alternância sempre regulou o calendário agrícola do país — inclusive o ritmo das enchentes do Tonlé Sap, o grande lago que dobra de tamanho na estação das chuvas.',
      culture_tip:
        'O សំពត់ (sampot) é a peça tradicional mais reconhecível do vestuário khmer — uma espécie de saia enrolada, hoje usada sobretudo em ocasiões formais, casamentos e festas, enquanto o dia a dia é dominado pela roupa ocidental.',
      grammar_why:
        'O khmer não tem um verbo só pra "vestir": "ពាក់" (pĕək) veste chapéu (មួក), camisa (អាវ), sapato (ស្បែកជើង) e acessórios; "ស្លៀក" (sliək) veste só peças abaixo da cintura, como calça (ខោ) e o sampot (សំពត់).',
      grammar_examples: [
        ['ថ្ងៃនេះត្រជាក់, ខ្ញុំពាក់អាវ។', 'Hoje está frio, eu visto uma camisa.'],
        ['ម្តាយខ្ញុំស្លៀកសំពត់។', 'Minha mãe veste um sampot.'],
        ['ខ្ញុំខ្លាចភ្លៀង។', 'Eu tenho medo de chuva.'],
      ],
      character_guide: [
        ['ត្រ em "ត្រជាក់"', 'encontro consonantal "tr", os dois sons se ouvem', 'ត្រជាក់ (frio)'],
        ['ជ', 'som de "ch" (como o j francês, mas sem vibrar)', 'ត្រជាក់, ច្រមុះ'],
        ['ក្ដ em "ក្ដៅ"', 'encontro "kd", soa quase junto', 'ក្ដៅ (calor)'],
      ],
    },
    lessons: [
      {
        id: 'km-u3-l1',
        title: 'អាកាសធាតុ',
        kind: 'licao',
        words: ['ភ្លៀង', 'ខ្យល់', 'ត្រជាក់', 'ក្ដៅ', 'ពពក', 'ភ្លើង'],
        cloze: [
          { sentence: 'ថ្ងៃនេះ___, យកអាវ!', answer: 'ត្រជាក់', options: ['ត្រជាក់', 'ក្ដៅ', 'ភ្លៀង'], translation: 'Hoje está frio, pegue uma camisa!' },
          { sentence: 'មេឃមាន___។', answer: 'ពពក', options: ['ពពក', 'ខ្យល់', 'ភ្លើង'], translation: 'O céu tem nuvens.' },
          { sentence: 'ខ្ញុំចូលចិត្ត___។', answer: 'ភ្លៀង', options: ['ភ្លៀង', 'ភ្លើង', 'ខ្យល់'], translation: 'Eu gosto de chuva.' },
        ],
        voice: {
          bot: 'ថ្ងៃនេះត្រជាក់ទេ?',
          botTranslation: 'Hoje está frio?',
          expected: ['ចាស, ត្រជាក់ និង មានខ្យល់។', 'ត្រជាក់', 'ខ្យល់'],
          hint: 'Descreva o tempo usando ត្រជាក់ (frio), ក្ដៅ (calor), ភ្លៀង (chuva) ou ខ្យល់ (vento).',
        },
        communityPrompt: 'Descreva o tempo de hoje em khmer, usando pelo menos duas palavras desta lição.',
      },
      {
        id: 'km-u3-l2',
        title: 'សម្លៀកបំពាក់',
        kind: 'licao',
        words: ['ខោ', 'អាវ', 'ស្រោមដៃ', 'ស្បែកជើង', 'មួក', 'សំពត់'],
        cloze: [
          { sentence: 'ខ្ញុំពាក់___។', answer: 'មួក', options: ['មួក', 'ខោ', 'សំពត់'], translation: 'Eu visto um chapéu.' },
          { sentence: 'ម្តាយខ្ញុំស្លៀក___។', answer: 'សំពត់', options: ['សំពត់', 'អាវ', 'មួក'], translation: 'Minha mãe veste um sampot.' },
          { sentence: 'ថ្ងៃត្រជាក់, ខ្ញុំពាក់___។', answer: 'ស្រោមដៃ', options: ['ស្រោមដៃ', 'ស្បែកជើង', 'ខោ'], translation: 'Dia frio, eu visto luvas.' },
        ],
        voice: {
          bot: 'ថ្ងៃនេះត្រជាក់, អ្នកពាក់អ្វី?',
          botTranslation: 'Hoje está frio, o que você está vestindo?',
          expected: ['ខ្ញុំពាក់អាវនិងមួក។', 'ពាក់', 'អាវ'],
          hint: 'Use “ពាក់…” para chapéu, camisa, sapato ou luva, e “ស្លៀក…” para calça ou sampot.',
        },
        communityPrompt: 'Escreva três peças de roupa que você usaria em um dia frio, usando “ពាក់” ou “ស្លៀក”.',
      },
      {
        id: 'km-u3-l3',
        title: 'ការប្រឡង៖ សម្លៀកបំពាក់ និង អាកាសធាតុ',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'ត្រជាក់ទេ, ហើយអ្នកពាក់អ្វី?',
          botTranslation: 'Está frio, e o que você está vestindo?',
          expected: ['ត្រជាក់, ខ្ញុំពាក់អាវនិងមួក។', 'ត្រជាក់', 'ពាក់'],
          hint: 'Descreva o tempo e depois a roupa, usando “ពាក់” ou “ស្លៀក”.',
        },
        communityPrompt: 'Escreva um parágrafo curto descrevendo o tempo de hoje e a roupa que você está usando.',
      },
    ],
  },
  {
    id: 'km-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'ទីកន្លែង មុខរបរ និង អារម្មណ៍',
    emoji: '🏪',
    card: {
      id: 'km-c4',
      title: 'Profissões, lugares, e comparando com ជាង',
      emoji: '⚖️',
      history:
        'A agricultura, sobretudo o cultivo de arroz na bacia do Tonlé Sap e do Mekong, sustentou a civilização khmer desde a época de Angkor (séculos IX-XV), com seu sistema sofisticado de reservatórios (barays) e canais de irrigação. Hoje o Camboja ainda tem uma proporção grande de agricultores (កសិករ), ao lado de uma economia urbana crescente em Phnom Penh, com médicos (គ្រូពេទ្យ), professores (គ្រូ) e outras profissões.',
      culture_tip:
        'O título “គ្រូ” (professor) carrega um respeito que vai além da sala de aula: no budismo khmer, usa-se a mesma palavra, no composto “គ្រូពេទ្យ” (literalmente “professor de cura”), pra “médico” — um eco de como o conhecimento curativo tradicional já foi transmitido como um tipo de ensino.',
      grammar_why:
        'Pra comparar duas coisas, o khmer põe “ជាង” (ciəng, “mais que”) depois do adjetivo: “ធំជាង” (maior), “ល្អជាង” (melhor) — sem mudar a forma do adjetivo. E pra contar com precisão, insere um classificador entre o número e o substantivo: “នាក់” pra pessoas, “ក្បាល” pra animais (ex.: “មិត្តបួននាក់”, quatro amigos).',
      grammar_examples: [
        ['មន្ទីរពេទ្យនេះធំជាងសាលារៀន។', 'Este hospital é maior que a escola.'],
        ['ខ្ញុំមានគ្រូបួននាក់។', 'Eu tenho quatro professores.'],
        ['ខ្ញុំហត់, ប៉ុន្តែរីករាយ។', 'Estou cansado, mas feliz.'],
      ],
      character_guide: [
        ['ជ in "ជាង"', 'som de "ch" suave', 'ជាង (mais que)'],
        ['ក្ស, ប្រ (encontros)', 'as duas consoantes se ouvem juntas, sem vogal entre elas', 'កសិករ (agricultor)'],
        ['ណ vs ន', 'série A (ណ) e série O (ន) soam quase iguais sozinhas, mas mudam a vogal seguinte', 'នាក់ (série A, pessoas)'],
      ],
    },
    lessons: [
      {
        id: 'km-u4-l1',
        title: 'ទីកន្លែង និង មុខរបរ',
        kind: 'licao',
        words: ['ផ្សារ', 'សាលារៀន', 'មន្ទីរពេទ្យ', 'គ្រូ', 'គ្រូពេទ្យ', 'កសិករ'],
        cloze: [
          { sentence: 'ខ្ញុំទិញទឹកនៅ___។', answer: 'ផ្សារ', options: ['ផ្សារ', 'សាលារៀន', 'មន្ទីរពេទ្យ'], translation: 'Eu compro água no mercado.' },
          { sentence: 'ឪពុកខ្ញុំជា___។', answer: 'កសិករ', options: ['កសិករ', 'គ្រូ', 'គ្រូពេទ្យ'], translation: 'Meu pai é agricultor.' },
          { sentence: 'គាត់ជា___ និង ធ្វើការនៅមន្ទីរពេទ្យ។', answer: 'គ្រូពេទ្យ', options: ['គ្រូពេទ្យ', 'គ្រូ', 'កសិករ'], translation: 'Ele/ela é médico e trabalha no hospital.' },
        ],
        voice: {
          bot: 'អ្នកធ្វើការនៅឯណា?',
          botTranslation: 'Onde você trabalha?',
          expected: ['ខ្ញុំធ្វើការនៅសាលារៀន។', 'ធ្វើការនៅ', 'សាលារៀន'],
          hint: 'Diga onde você trabalha usando “ខ្ញុំធ្វើការនៅ…” e um lugar desta lição.',
        },
        communityPrompt: 'Escreva onde ficam o mercado, a escola e o hospital da sua cidade, e se você conhece alguém com uma dessas profissões.',
      },
      {
        id: 'km-u4-l2',
        title: 'អារម្មណ៍',
        kind: 'licao',
        words: ['រីករាយ', 'ទុក្ខ', 'ហត់', 'ឃ្លាន', 'ស្រេក', 'ខ្លាច'],
        cloze: [
          { sentence: 'ខ្ញុំ___ណាស់។', answer: 'ហត់', options: ['ហត់', 'រីករាយ', 'ទុក្ខ'], translation: 'Estou muito cansado.' },
          { sentence: 'ខ្ញុំ___ទឹក។', answer: 'ស្រេក', options: ['ស្រេក', 'ឃ្លាន', 'ខ្លាច'], translation: 'Estou com sede.' },
          { sentence: 'ខ្ញុំ___ភ្លៀង។', answer: 'ខ្លាច', options: ['ខ្លាច', 'រីករាយ', 'ហត់'], translation: 'Tenho medo de chuva.' },
        ],
        voice: {
          bot: 'អ្នករីករាយទេ?',
          botTranslation: 'Você está feliz?',
          expected: ['ខ្ញុំរីករាយណាស់។', 'រីករាយ', 'ហត់'],
          hint: 'Diga como você se sente usando រីករាយ (feliz), ទុក្ខ (triste), ហត់ (cansado) ou outra palavra da lição.',
        },
        communityPrompt: 'Escreva como você está se sentindo hoje e por quê, usando pelo menos duas palavras desta lição.',
      },
      {
        id: 'km-u4-l3',
        title: 'ការប្រឡង៖ ទីកន្លែង មុខរបរ និង អារម្មណ៍',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'អ្នកធ្វើការនៅឯណា, ហើយអ្នករីករាយទេ?',
          botTranslation: 'Onde você trabalha, e você está feliz?',
          expected: ['ខ្ញុំធ្វើការនៅសាលារៀន, ខ្ញុំរីករាយ។', 'ធ្វើការនៅ', 'រីករាយ'],
          hint: 'Diga onde trabalha (“ធ្វើការនៅ…”) e como se sente (“ខ្ញុំ…”).',
        },
        communityPrompt: 'Escreva um parágrafo contando sua profissão (ou a que você quer ter), onde você trabalharia, e como isso te faz sentir.',
      },
    ],
  },
];
