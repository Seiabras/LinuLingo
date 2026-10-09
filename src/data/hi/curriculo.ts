import type { UnitSeed } from '../types';

/**
 * Trilha do hindi: A1.1 até A2.2 — ver `incomplete` em index.ts. Do B1 ao C2 chega depois.
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
  {
    id: 'hi-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'जयपुर के बाज़ार में',
    emoji: '🏰',
    card: {
      id: 'hi-c3',
      title: 'A cidade rosa, erguida em poucos anos',
      emoji: '🏯',
      history:
        'Jaipur foi fundada em 18 de novembro de 1727 pelo marajá Sawai Jai Singh II, governante de Amber, que deu nome à cidade — uma das primeiras cidades planejadas da Índia moderna, com ruas largas organizadas em seis setores. O arquiteto Vidyadhar Bhattacharya seguiu os princípios clássicos do Vastu Shastra para o traçado. O apelido “Cidade Rosa” é mais recente: a tradição de pintar os prédios do centro histórico de rosa começou em 1876, para a visita do então Príncipe de Gales (futuro rei Eduardo VII) e da rainha Vitória.',
      culture_tip:
        'O Johari Bazaar, um dos mercados mais famosos de Jaipur, é dedicado a joias e pedras preciosas — a cidade é um centro histórico do comércio de pedras na Índia. Como em outros bazares indianos, pechinchar (बारगेनिंग) o preço faz parte da compra, principalmente fora das lojas com preço fixo.',
      grammar_why:
        'Para descrever uma ação acontecendo agora, o hindi usa o presente contínuo: radical do verbo + रहा/रही/रहे (concordando com o sujeito) + है/हो/हैं. “हम बाज़ार जा रहे हैं” é, ao pé da letra, “nós mercado ir estamos”.',
      grammar_examples: [
        ['हम बाज़ार जा रहे हैं।', 'Nós estamos indo ao mercado.'],
        ['आज बारिश हो रही है।', 'Hoje está chovendo.'],
        ['मैं कपड़े खरीद रहा हूँ।', 'Eu estou comprando roupas.'],
        ['यह दुकान बड़ी है।', 'Esta loja é grande.'],
      ],
      character_guide: [
        ['ज़', 'um “z”, letra emprestada do persa/urdu, marcada com um ponto embaixo do “ज”', 'बाज़ार (bāzār, “mercado”)'],
        ['श', 'um “sh”, como em “show”', 'बारिश (bāriś, “chuva”)'],
        ['ड़', 'um “r” retroflexo, batido com a língua curvada para trás — diferente do “र” comum', 'सड़क (saṛak, “rua”)'],
        ['ँ', 'sinal de nasalização vocálica (chandrabindu)', 'मुँह (mũh, “boca”)'],
        ['ॉ', 'sinal de vogal “ŏ” curta, usado em empréstimos do inglês', 'डॉक्टर (ḏŏkṭar, “médico”)'],
      ],
    },
    lessons: [
      {
        id: 'hi-u3-l1',
        title: 'बाज़ार में',
        kind: 'licao',
        words: ['बाज़ार', 'दुकान', 'सड़क', 'कपड़े', 'कमीज़', 'जूते'],
        cloze: [
          { sentence: 'हम ___ जा रहे हैं।', answer: 'बाज़ार', options: ['बाज़ार', 'दुकान', 'सड़क'], translation: 'Nós estamos indo ao mercado.' },
          { sentence: 'यह ___ बड़ी है।', answer: 'दुकान', options: ['दुकान', 'सड़क', 'बाज़ार'], translation: 'Esta loja é grande.' },
          { sentence: 'मैं नए ___ खरीद रहा हूँ।', answer: 'जूते', options: ['जूते', 'कमीज़', 'कपड़े'], translation: 'Eu estou comprando sapatos novos.' },
        ],
        voice: {
          bot: 'तुम क्या खरीद रहे हो?',
          botTranslation: 'O que você está comprando?',
          expected: ['मैं एक कमीज़ खरीद रहा हूँ।', 'मैं … खरीद रहा हूँ', 'कमीज़'],
          hint: 'Diga o que você está comprando com “मैं … खरीद रहा/रही हूँ”.',
        },
        communityPrompt: 'Escreva três frases sobre ir ao bazar: para onde você vai (“मैं बाज़ार जा रहा/रही हूँ”), o que compra e de que loja (“दुकान”).',
      },
      {
        id: 'hi-u3-l2',
        title: 'आज मौसम कैसा है?',
        kind: 'licao',
        words: ['मौसम', 'बारिश', 'गर्मी', 'सर्दी', 'हवा', 'बादल'],
        cloze: [
          { sentence: 'आज ___ हो रही है।', answer: 'बारिश', options: ['बारिश', 'गर्मी', 'सर्दी'], translation: 'Hoje está chovendo.' },
          { sentence: 'आज बहुत ___ है।', answer: 'गर्मी', options: ['गर्मी', 'सर्दी', 'हवा'], translation: 'Hoje está muito calor.' },
          { sentence: 'आसमान में ___ हैं।', answer: 'बादल', options: ['बादल', 'हवा', 'बारिश'], translation: 'Há nuvens no céu.' },
        ],
        voice: {
          bot: 'आज मौसम कैसा है?',
          botTranslation: 'Como está o tempo hoje?',
          expected: ['आज बारिश हो रही है।', 'बारिश हो रही है', 'गर्मी है'],
          hint: 'Descreva o tempo com “आज … है” ou “आज … हो रही है”.',
        },
        communityPrompt: 'Descreva o tempo de hoje em hindi, usando “मौसम”, “बारिश”, “गर्मी” ou “सर्दी”.',
      },
      {
        id: 'hi-u3-l3',
        title: 'परीक्षा: बाज़ार और मौसम',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'आज मौसम कैसा है, और तुम क्या खरीद रहे हो?',
          botTranslation: 'Como está o tempo hoje, e o que você está comprando?',
          expected: ['आज बारिश हो रही है, और मैं एक टोपी खरीद रहा हूँ।', 'हो रही है', 'खरीद रहा हूँ'],
          hint: 'Descreva o tempo e diga o que está comprando, usando o presente contínuo (रहा/रही/रहे).',
        },
        communityPrompt: 'Escreva cinco frases sobre uma ida ao bazar, usando o presente contínuo (“जा रहा/रही हूँ”, “खरीद रहा/रही हूँ”) e o vocabulário do tempo.',
      },
    ],
  },
  {
    id: 'hi-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'मुंबई में भावनाएँ और भविष्य',
    emoji: '🎬',
    card: {
      id: 'hi-c4',
      title: 'Bombaim virou Mumbai, e a monção decide o calendário',
      emoji: '🌧️',
      history:
        'A cidade conhecida por séculos como Bombay foi oficialmente renomeada Mumbai em 1995, quando o governo do estado de Maharashtra adotou o nome marata da cidade. Mumbai é a capital financeira da Índia e sede da indústria de cinema em hindi, apelidada Bollywood. A cidade também marca o calendário do país pela monção (मानसून): as chuvas fortes chegam por volta de junho e trazem boa parte da chuva anual da Índia.',
      culture_tip:
        'Durante a monção, é comum ouvir “आज बहुत बारिश हो रही है” (hoje está chovendo muito) em Mumbai — as ruas podem alagar, e guarda-chuvas coloridos tomam contam das calçadas. No resto do ano, o calor (गर्मी) e o friozinho mais ameno do inverno (सर्दी) marcam as outras estações.',
      grammar_why:
        'Para falar do futuro, o hindi acrescenta गा/गे/गी ao radical do verbo, com uma forma para cada pessoa e gênero: “मैं हिंदी पढ़ूँगा” (eu vou estudar hindi, dito por um homem) muda para “पढ़ूँगी” se quem fala é mulher.',
      grammar_examples: [
        ['मैं हिंदी पढ़ूँगा।', 'Eu vou estudar hindi. (homem)'],
        ['वह बाज़ार जाएगी।', 'Ela vai ao mercado.'],
        ['हम कल मिलेंगे।', 'Nós vamos nos encontrar amanhã.'],
        ['मैं बहुत खुश हूँ।', 'Eu estou muito feliz.'],
      ],
      character_guide: [
        ['ध', 'um “d” dental, soprado (aspirado)', 'अध्यापक (adhyāpak, “professor”)'],
        ['झ', 'um “j” soprado (aspirado)', 'समझना (samajhnā, “entender”)'],
        ['स्स', 'consoante dobrada: “स” geminado, soa mais longo', 'गुस्सा (gussā, “bravo, raiva”)'],
        ['ष', 'um “sh” de origem sânscrita, diferente de “श”', 'भविष्य (bhaviṣya, “futuro”)'],
        ['ई', 'sinal de “ī” longo depois da consoante', 'इंजीनियर (injīniyar, “engenheiro”)'],
      ],
    },
    lessons: [
      {
        id: 'hi-u4-l1',
        title: 'पेशे और भावनाएँ',
        kind: 'licao',
        words: ['डॉक्टर', 'अध्यापक', 'इंजीनियर', 'किसान', 'खुश', 'दुखी'],
        cloze: [
          { sentence: 'मेरे पिता ___ हैं।', answer: 'अध्यापक', options: ['अध्यापक', 'डॉक्टर', 'किसान'], translation: 'O meu pai é professor.' },
          { sentence: 'मेरा भाई ___ है।', answer: 'इंजीनियर', options: ['इंजीनियर', 'किसान', 'डॉक्टर'], translation: 'O meu irmão é engenheiro.' },
          { sentence: 'वह आज बहुत ___ है।', answer: 'खुश', options: ['खुश', 'दुखी', 'थका हुआ'], translation: 'Ele/ela está muito feliz hoje.' },
        ],
        voice: {
          bot: 'तुम्हारे पिता क्या काम करते हैं?',
          botTranslation: 'O que o seu pai faz?',
          expected: ['मेरे पिता डॉक्टर हैं।', 'मेरे पिता', 'हैं'],
          hint: 'Diga a profissão com “मेरे पिता/मेरी माँ … हैं”.',
        },
        communityPrompt: 'Descreva a profissão de alguém da sua família e como você está se sentindo hoje, usando “खुश”, “दुखी” ou “थका हुआ”.',
      },
      {
        id: 'hi-u4-l2',
        title: 'कल और नंबर',
        kind: 'licao',
        words: ['बीस', 'तीस', 'पचास', 'सौ', 'जाना', 'पढ़ना'],
        cloze: [
          { sentence: 'मेरी उम्र ___ साल है।', answer: 'बीस', options: ['बीस', 'तीस', 'सौ'], translation: 'Eu tenho vinte anos.' },
          { sentence: 'यह किताब ___ रुपये की है।', answer: 'पचास', options: ['पचास', 'चालीस', 'तीस'], translation: 'Este livro custa cinquenta rupias.' },
          { sentence: 'एक सदी में ___ साल होते हैं।', answer: 'सौ', options: ['सौ', 'पचास', 'बीस'], translation: 'Em um século há cem anos.' },
        ],
        voice: {
          bot: 'तुम कल क्या करोगे?',
          botTranslation: 'O que você vai fazer amanhã?',
          expected: ['मैं कल बाज़ार जाऊँगा।', 'जाऊँगा', 'कल'],
          hint: 'Responda usando o futuro: “मैं कल … जाऊँगा/जाऊँगी”.',
        },
        communityPrompt: 'Escreva três planos para o futuro em hindi, usando o futuro (“जाऊँगा/जाऊँगी”, “पढ़ूँगा/पढ़ूँगी”) e um número de 20 a 100.',
      },
      {
        id: 'hi-u4-l3',
        title: 'परीक्षा: भावनाएँ और भविष्य',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'तुम कल क्या करोगे, और आज तुम कैसा महसूस कर रहे हो?',
          botTranslation: 'O que você vai fazer amanhã, e como você está se sentindo hoje?',
          expected: ['मैं कल पढ़ूँगा, और आज मैं बहुत खुश हूँ।', 'पढ़ूँगा', 'खुश'],
          hint: 'Use o futuro (“-ूँगा/-ूँगी”) para o plano e um adjetivo de sentimento para hoje.',
        },
        communityPrompt: 'Escreva cinco frases sobre os seus planos de futuro e os seus sentimentos, usando o futuro e “खुश”/“दुखी”/“थका हुआ”.',
      },
    ],
  },
];
