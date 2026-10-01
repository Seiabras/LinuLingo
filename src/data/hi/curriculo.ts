import type { UnitSeed } from '../types';

/**
 * Trilha do hindi: por enquanto só as duas unidades do nível A1 — ver `incomplete` em index.ts.
 * Da A2 ao C2 chega depois.
 */
export const UNITS_HI: UnitSeed[] = [
  {
    id: 'hi-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'नमस्ते! पहले कदम',
    emoji: '👋',
    card: {
      id: 'hi-c1',
      title: 'Uma escrita silábica com mais de 2500 anos',
      emoji: '🪔',
      history:
        'O hindi é a forma escrita em devanágari do hindustani, a língua faiada na região de Deli: o mesmo idioma falado, escrito em árabe-persa modificado, chama-se urdu, língua oficial do Paquistão. Hindi e urdu soam quase iguais na conversa do dia a dia — a diferença cresce no vocabulário mais formal, em que o hindi busca palavras do sânscrito e o urdu, do persa e do árabe. O devanágari, usado também para escrever o sânscrito e o marathi, descende da escrita brahmi, de mais de 2500 anos, e é uma escrita silábica (abugida): cada consoante já vem com o som “a” embutido, mudado por sinais ao redor quando o som é outra vogal.',
      culture_tip:
        '“नमस्ते” (namastê) serve para “oi” e para “tchau”, em qualquer hora do dia, e vem de uma reverência com as mãos juntas. Já “धन्यवाद” (dhanyavad, obrigado) é mais formal; no dia a dia muita gente usa “शुक्रिया” (shukriya), emprestado do urdu.',
      grammar_why:
        'O hindi é uma língua SOV: o verbo vem por último na frase. “मैं विनोद हूँ” é, palavra por palavra, “eu Vinod sou” — não “eu sou Vinod”.',
      grammar_examples: [
        ['नमस्ते, मैं विनोद हूँ।', 'Oi, eu sou o Vinod.'],
        ['तुम्हारा नाम क्या है?', 'Qual é o seu nome? (informal)'],
        ['वह दिल्ली से है।', 'Ele/ela é de Déli.'],
        ['अलविदा, कल मिलते हैं!', 'Tchau, até amanhã!'],
      ],
      character_guide: [
        ['अ', 'um “a” curto, como em “cama”', 'अच्छा (acchā, “bom”)'],
        ['आ', 'um “a” longo e aberto', 'नमस्ते (namastê) começa com esse som em “ना”'],
        ['न', 'como o “n” do português', 'नाम (nām, “nome”)'],
        ['म', 'como o “m” do português', 'मैं (ma͠i, “eu”)'],
        ['ह', 'um “h” aspirado, soprado, que existe no hindi mas não no português', 'हाँ (hā̃, “sim”)'],
      ],
    },
    lessons: [
      {
        id: 'hi-u1-l1',
        title: 'नमस्ते, धन्यवाद, अलविदा',
        kind: 'licao',
        words: ['नमस्ते', 'सुप्रभात', 'शुभ रात्रि', 'अलविदा', 'धन्यवाद', 'कृपया'],
        cloze: [
          { sentence: '___, विनोद! तुम कैसे हो?', answer: 'नमस्ते', options: ['नमस्ते', 'अलविदा', 'कृपया'], translation: 'Oi, Vinod! Como você vai?' },
          { sentence: 'पहले से रात है। ___!', answer: 'शुभ रात्रि', options: ['शुभ रात्रि', 'सुप्रभात', 'कृपया'], translation: 'Já é noite: boa noite!' },
          { sentence: 'बहुत ___!', answer: 'धन्यवाद', options: ['धन्यवाद', 'नमस्ते', 'अलविदा'], translation: 'Muito obrigado!' },
        ],
        voice: {
          bot: 'नमस्ते! तुम कैसे हो?',
          botTranslation: 'Oi! Como vai?',
          expected: ['मैं ठीक हूँ, धन्यवाद। और तुम?', 'ठीक हूँ', 'धन्यवाद'],
          hint: 'Responda que vai bem e devolva a pergunta: “मैं ठीक हूँ, धन्यवाद। और तुम?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em hindi: um de manhã (“सुप्रभात”), um à noite ao se despedir (“शुभ रात्रि”) e um “até logo” (“अलविदा”).',
      },
      {
        id: 'hi-u1-l2',
        title: 'मैं, तुम, वह',
        kind: 'licao',
        words: ['मैं', 'तुम', 'वह', 'नाम', 'होना', 'शहर'],
        cloze: [
          { sentence: '___ विनोद हूँ।', answer: 'मैं', options: ['मैं', 'तुम', 'वह'], translation: 'Eu sou o Vinod.' },
          { sentence: 'तुम्हारा ___ क्या है?', answer: 'नाम', options: ['नाम', 'शहर', 'देश'], translation: 'Qual é o seu nome? (informal)' },
          { sentence: '___ दिल्ली से है।', answer: 'वह', options: ['वह', 'मैं', 'तुम'], translation: 'Ele/ela é de Déli.' },
        ],
        voice: {
          bot: 'नमस्ते! तुम्हारा नाम क्या है?',
          botTranslation: 'Oi! Qual é o seu nome?',
          expected: ['मेरा नाम लीनू है। और तुम्हारा?', 'मेरा नाम', 'और तुम्हारा'],
          hint: 'Diga o seu nome com “मेरा नाम … है” e devolva a pergunta com “और तुम्हारा?”.',
        },
        communityPrompt: 'Apresente-se em hindi: diga o seu nome com “मेरा नाम … है” e pergunte o nome de alguém com “तुम्हारा नाम क्या है?”.',
      },
      {
        id: 'hi-u1-l3',
        title: 'परीक्षा: पहले कदम',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'नमस्ते, मेरा नाम गौरव है। तुम्हारा नाम क्या है, और तुम कहाँ से हो?',
          botTranslation: 'Oi, eu me chamo Gaurav. Como você se chama e de onde você é?',
          expected: ['नमस्ते, मेरा नाम लूसिया है, और मैं साओ पाउलो से हूँ।', 'मेरा नाम', 'मैं', 'हूँ'],
          hint: 'Devolva o cumprimento (“नमस्ते”), diga o nome (“मेरा नाम … है”) e a cidade (“मैं … से हूँ”).',
        },
        communityPrompt: 'Escreva uma apresentação completa em hindi: cumprimento, nome com “मेरा नाम … है”, cidade com “मैं … से हूँ” e uma despedida.',
      },
    ],
  },
  {
    id: 'hi-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'परिवार और घर',
    emoji: '👪',
    card: {
      id: 'hi-c2',
      title: 'Ter sem o verbo “ter”',
      emoji: '🧭',
      history:
        'O hindi moderno nasceu na região de Deli e do vale do Ganges, a partir do prácrito falado pelos exércitos e pela corte dos sultanatos muçulmanos medievais, o que explica o enorme número de palavras persas e árabes no vocabulário cotidiano (inclusive “शुक्रिया”, obrigado, e “कृपया”, por favor). Depois da independência da Índia em 1947, o hindi em devanágari foi escolhido como uma das línguas oficiais da União, ao lado do inglês e de outras 21 línguas reconhecidas na Constituição.',
      culture_tip:
        'A família estendida — avós, tios e primos morando perto ou na mesma casa — é central na cultura do norte da Índia. Perguntar “तुम्हारा परिवार कैसा है?” (como é a sua família?) é uma forma comum de puxar conversa.',
      grammar_why:
        'O hindi não tem um verbo só para “ter”: para objetos, usa-se “के पास” (perto de) com “होना” (ser/estar) — “मेरे पास एक किताब है” é, literalmente, “perto de mim um livro é”. Já para parentesco, usa-se direto o possessivo com “होना”: “मेरा एक भाई है” (tenho um irmão, literalmente “meu um irmão é”), sem “के पास”.',
      grammar_examples: [
        ['मेरा परिवार बड़ा है।', 'A minha família é grande.'],
        ['मेरा एक भाई है।', 'Eu tenho um irmão.'],
        ['मेरे पास एक किताब है।', 'Eu tenho um livro.'],
        ['मेरा घर छोटा है।', 'A minha casa é pequena.'],
      ],
      character_guide: [
        ['घ', 'um “g” aspirado, soprado', 'घर (ghar, “casa”)'],
        ['प', 'como o “p” do português, sem soprar', 'पानी (pānī, “água”)'],
        ['भ', 'um “b” aspirado, soprado', 'भाई (bhāī, “irmão”)'],
        ['र', 'um erre batido só uma vez, como no espanhol', 'रोटी (roṭī, “pão”)'],
        ['◌ा', 'sinal de vogal “ā” grudado na consoante anterior', 'माँ (mā̃, “mãe”)'],
      ],
    },
    lessons: [
      {
        id: 'hi-u2-l1',
        title: 'मेरा परिवार',
        kind: 'licao',
        words: ['परिवार', 'पिता', 'माँ', 'भाई', 'बहन', 'के पास'],
        cloze: [
          { sentence: 'मेरा ___ बड़ा है।', answer: 'परिवार', options: ['परिवार', 'पिता', 'माँ'], translation: 'A minha família é grande.' },
          { sentence: 'मेरा एक ___ है।', answer: 'भाई', options: ['भाई', 'बहन', 'परिवार'], translation: 'Eu tenho um irmão.' },
          { sentence: 'मेरे ___ दिल्ली से हैं।', answer: 'पिता', options: ['पिता', 'माँ', 'भाई'], translation: 'O meu pai é de Déli.' },
        ],
        voice: {
          bot: 'क्या तुम्हारा कोई भाई या बहन है?',
          botTranslation: 'Você tem algum irmão ou irmã?',
          expected: ['हाँ, मेरा एक भाई और एक बहन है।', 'मेरा … है', 'भाई', 'बहन'],
          hint: 'Responda com “हाँ, मेरा … है” ou “नहीं, मेरा कोई नहीं है”.',
        },
        communityPrompt: 'Descreva a sua família em hindi: quantos irmãos (भाई) e irmãs (बहन) você tem, e como se chamam os seus pais (पिता, माँ).',
      },
      {
        id: 'hi-u2-l2',
        title: 'घर पर',
        kind: 'licao',
        words: ['घर', 'पानी', 'रोटी', 'दूध', 'पनीर', 'खाना'],
        cloze: [
          { sentence: 'मेरा ___ छोटा है।', answer: 'घर', options: ['घर', 'पानी', 'रोटी'], translation: 'A minha casa é pequena.' },
          { sentence: 'मैं ___ पीता हूँ।', answer: 'पानी', options: ['पानी', 'रोटी', 'पनीर'], translation: 'Eu bebo água.' },
          { sentence: 'मैं ___ और पनीर खाता हूँ।', answer: 'रोटी', options: ['रोटी', 'दूध', 'पानी'], translation: 'Eu como pão e queijo.' },
        ],
        voice: {
          bot: 'तुम सुबह क्या खाते हो?',
          botTranslation: 'O que você come de manhã?',
          expected: ['मैं रोटी और पनीर खाता हूँ।', 'मैं … खाता हूँ', 'रोटी', 'पनीर'],
          hint: 'Diga o que você come com “मैं … खाता हूँ”.',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã, usando “मैं … खाता हूँ” e “मैं … पीता हूँ”.',
      },
      {
        id: 'hi-u2-l3',
        title: 'परीक्षा: परिवार और घर',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'अपने परिवार के बारे में बताओ: क्या तुम्हारा कोई भाई या बहन है?',
          botTranslation: 'Conte sobre a sua família: você tem algum irmão ou irmã?',
          expected: ['हाँ, मेरी एक बहन है। उसका नाम माया है।', 'मेरा … है', 'नाम'],
          hint: 'Diga quantos irmãos tem (“मेरा/मेरी … है”) e o nome deles (“उसका नाम … है”).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “मेरा/मेरी … है”, “नाम … है” e “है”.',
      },
    ],
  },
];
