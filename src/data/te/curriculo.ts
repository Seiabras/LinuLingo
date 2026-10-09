import type { UnitSeed } from '../types';

/**
 * Trilha do télugo: as quatro unidades do A1 e do A2 (pacote incompleto, ver `incomplete` em
 * index.ts; falta do B1 em diante). Fontes adicionais das unidades 3 e 4: Wikipédia em inglês
 * («Osmania General Hospital», «Pochampally Ikat») e as mesmas fontes de gramatica.ts.
 */
export const UNITS_TE: UnitSeed[] = [
  {
    id: 'te-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'నమస్కారం! మొదటి అడుగులు',
    emoji: '🙏',
    card: {
      id: 'te-c1',
      title: 'Mais de mil anos de literatura',
      emoji: '📜',
      history:
        'O télugo é falado por cerca de 100 milhões de pessoas — a quarta língua nativa mais falada da Índia, depois do hindi, do bengali e do marathi, e a 14ª do mundo. É a língua oficial de Andhra Pradesh e de Telangana, no sudeste da Índia, com status oficial também no distrito de Yanam, em Puducherry. Uma das primeiras palavras em télugo já encontradas, “nāgabu”, veio de uma inscrição na estupa de Amaravati, de cerca de 200 a.C.; a primeira inscrição longa inteira em télugo é de 575 d.C. Em 2008, o télugo recebeu do governo indiano o título de “língua clássica”, reconhecendo mais de mil anos de tradição literária contínua — um auge veio no século 16, sob o império Vijayanagara, com o poeta-rei Krishnadevaraya.',
      culture_tip:
        'Para se despedir, o télugo usa “వెళ్ళొస్తాను” (veḷḷostānu), que ao pé da letra quer dizer algo como “eu vou e volto” — mas funciona simplesmente como um “tchau”, mesmo quando a pessoa não vai voltar tão cedo.',
      grammar_why:
        'O télugo não usa nenhum verbo para apresentar nome ou identidade: “నా పేరు ప్రియ” é, ao pé da letra, “meu nome Priya” — sem nada equivalente a “é”. Esse predicado sem cópula (zero-copula) só vale quando o predicado é um substantivo; com adjetivos, o télugo usa o verbo “ఉండు” (existir, estar).',
      grammar_examples: [
        ['నమస్కారం, నా పేరు ప్రియ.', 'Olá, meu nome é Priya.'],
        ['మీ పేరేమండి?', 'Qual é o seu nome? (formal)'],
        ['మీరు ఎలా ఉన్నారు?', 'Como você está? (formal)'],
        ['నేను బాగున్నాను.', 'Eu estou bem.'],
      ],
      character_guide: [
        ['అ', 'um “a” curto, como em “cama”', 'అమ్మ (amma, “mãe”)'],
        ['న', 'como o “n” do português', 'నాన్న (nānna, “pai”)'],
        ['డ', 'um “d” retroflexo, língua curvada para trás, sem equivalente em português', 'ఎక్కడ (ekkaḍa, “onde”)'],
        ['ర', 'um erre batido uma vez, como no espanhol', 'పేరు (pēru, “nome”)'],
        ['చ', 'uma consoante “tch”, como em “tchau”', 'చిన్న (cinna, “pequeno”)'],
      ],
    },
    lessons: [
      {
        id: 'te-u1-l1',
        title: 'నమస్కారం, ధన్యవాదములు',
        kind: 'licao',
        words: ['నమస్కారం', 'శుభోదయం', 'శుభ రాత్రి', 'వెళ్ళొస్తాను', 'ధన్యవాదములు', 'దయచేసి'],
        cloze: [
          { sentence: '___, ప్రియ! మీరు ఎలా ఉన్నారు?', answer: 'నమస్కారం', options: ['నమస్కారం', 'వెళ్ళొస్తాను', 'దయచేసి'], translation: 'Olá, Priya! Como você está?' },
          { sentence: 'నీళ్ళు, ___.', answer: 'దయచేసి', options: ['దయచేసి', 'ధన్యవాదములు', 'నమస్కారం'], translation: 'Água, por favor.' },
          { sentence: 'చాలా ___!', answer: 'ధన్యవాదములు', options: ['ధన్యవాదములు', 'శుభోదయం', 'దయచేసి'], translation: 'Muito obrigado!' },
        ],
        voice: {
          bot: 'నమస్కారం! మీరు ఎలా ఉన్నారు?',
          botTranslation: 'Olá! Como você está?',
          expected: ['నేను బాగున్నాను, ధన్యవాదములు.', 'బాగున్నాను', 'ధన్యవాదములు'],
          hint: 'Responda que está bem e agradeça: “నేను బాగున్నాను, ధన్యవాదములు.”',
        },
        communityPrompt: 'Escreva três cumprimentos em télugo: um de manhã (“శుభోదయం”), um à noite (“శుభ రాత్రి”) e um agradecimento (“ధన్యవాదములు”).',
      },
      {
        id: 'te-u1-l2',
        title: 'నేను, నువ్వు, మీరు',
        kind: 'licao',
        words: ['నేను', 'నువ్వు', 'మీరు', 'పేరు', 'ఉండు', 'దేశం'],
        cloze: [
          { sentence: 'నా ___ ప్రియ.', answer: 'పేరు', options: ['పేరు', 'దేశం', 'ఇల్లు'], translation: 'Meu nome é Priya.' },
          { sentence: '___ బాగున్నాను.', answer: 'నేను', options: ['నేను', 'నువ్వు', 'మీరు'], translation: 'Eu estou bem.' },
          { sentence: '___ ఎలా ఉన్నారు?', answer: 'మీరు', options: ['మీరు', 'నేను', 'నువ్వు'], translation: 'Como você está? (formal)' },
        ],
        voice: {
          bot: 'మీ పేరేమండి?',
          botTranslation: 'Qual é o seu nome? (formal)',
          expected: ['నా పేరు ... .', 'నా పేరు'],
          hint: 'Diga o seu nome com “నా పేరు … .”.',
        },
        communityPrompt: 'Apresente-se em télugo: diga o seu nome com “నా పేరు … .” e de onde você é com “నేను … నుండి.”.',
      },
      {
        id: 'te-u1-l3',
        title: 'పరీక్ష: మొదటి అడుగులు',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'నమస్కారం, నా పేరు రాజు. మీ పేరు ఏమిటి?',
          botTranslation: 'Olá, meu nome é Raju. Qual é o seu nome?',
          expected: ['నమస్కారం, నా పేరు ... .', 'నా పేరు'],
          hint: 'Devolva o cumprimento e diga o seu nome com “నా పేరు … .”.',
        },
        communityPrompt: 'Escreva uma apresentação completa em télugo: cumprimento (“నమస్కారం”), nome (“నా పేరు … ”) e de onde você é (“నేను … నుండి”).',
      },
    ],
  },
  {
    id: 'te-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'నా కుటుంబం మరియు ఇల్లు',
    emoji: '👪',
    card: {
      id: 'te-c2',
      title: 'Dois estados, uma língua',
      emoji: '🏛️',
      history:
        'Até 2014, Andhra Pradesh e Telangana eram um único estado. Em 2 de junho de 2014, Telangana se separou e virou um estado novo, com Hyderabad como capital — por um tempo, capital dividida com Andhra Pradesh também. As duas regiões continuam com o télugo como língua oficial e compartilham a mesma literatura, música e culinária, embora o télugo falado tenha diferenças de sotaque e de vocabulário entre elas.',
      culture_tip:
        'O Ugadi é o ano-novo télugo (e canarês), comemorado em março ou abril, com pratos como o “Ugadi Pachadi”, que mistura seis sabores — doce, azedo, salgado, amargo, adstringente e picante — para lembrar que o ano traz experiências de todo tipo.',
      grammar_why:
        'O télugo marca três gêneros gramaticais — masculino, feminino e neutro —, mas, diferente do português, o neutro cobre todo substantivo que não seja humano (até bichos, plantas e objetos). Para dizer que tem um parente, o télugo usa o dativo (నాకు, “para mim”) com “ఉండు” (existir): “నాకు ఒక అన్న ఉన్నాడు” é, ao pé da letra, “para mim um irmão mais velho existe”.',
      grammar_examples: [
        ['నాకు ఒక అన్న ఉన్నాడు.', 'Eu tenho um irmão mais velho.'],
        ['నాకు ఒక చెల్లి ఉంది.', 'Eu tenho uma irmã mais nova.'],
        ['నా ఇల్లు చిన్నగా ఉంది.', 'Minha casa é pequena.'],
        ['నాకు తిండి కావాలి.', 'Eu quero/preciso de comida.'],
      ],
      character_guide: [
        ['క', 'como o “k” do português', 'అక్క (akka, “irmã mais velha”)'],
        ['త', 'um “t” dental, com a língua tocando os dentes', 'తమ్ముడు (tammuḍu, “irmão mais novo”)'],
        ['ఇ', 'um “i” curto', 'ఇల్లు (illu, “casa”)'],
        ['ప', 'como o “p” do português, sem soprar', 'పాలు (pālu, “leite”)'],
      ],
    },
    lessons: [
      {
        id: 'te-u2-l1',
        title: 'నా కుటుంబం',
        kind: 'licao',
        words: ['అమ్మ', 'నాన్న', 'అన్న', 'అక్క', 'తమ్ముడు', 'చెల్లి'],
        cloze: [
          { sentence: 'నాకు ఒక ___ ఉన్నాడు.', answer: 'అన్న', options: ['అన్న', 'అక్క', 'చెల్లి'], translation: 'Eu tenho um irmão mais velho.' },
          { sentence: 'నాకు ఒక ___ ఉంది.', answer: 'చెల్లి', options: ['చెల్లి', 'అన్న', 'తమ్ముడు'], translation: 'Eu tenho uma irmã mais nova.' },
          { sentence: 'నా ___ బాగున్నాడు.', answer: 'నాన్న', options: ['నాన్న', 'అమ్మ', 'అక్క'], translation: 'Meu pai está bem.' },
        ],
        voice: {
          bot: 'మీ అన్న పేరు ఏమిటి?',
          botTranslation: 'Qual é o nome do seu irmão mais velho?',
          expected: ['నా అన్న పేరు ... .', 'నా అన్న పేరు'],
          hint: 'Diga o nome com “నా అన్న పేరు … .”.',
        },
        communityPrompt: 'Fale sobre a sua família em télugo: quantos irmãos você tem, usando “నాకు ఒక అన్న/అక్క/తమ్ముడు/చెల్లి ఉన్నాడు/ఉంది.”.',
      },
      {
        id: 'te-u2-l2',
        title: 'ఇల్లు మరియు తిండి',
        kind: 'licao',
        words: ['ఇల్లు', 'నీళ్ళు', 'అన్నం', 'పాలు', 'తిను', 'తాగు'],
        cloze: [
          { sentence: 'నా ___ చిన్నగా ఉంది.', answer: 'ఇల్లు', options: ['ఇల్లు', 'పాలు', 'అన్నం'], translation: 'Minha casa é pequena.' },
          { sentence: 'నాకు ___ కావాలి.', answer: 'నీళ్ళు', options: ['నీళ్ళు', 'పాలు', 'అన్నం'], translation: 'Eu quero água.' },
          { sentence: 'అన్నం ___!', answer: 'తిను', options: ['తిను', 'తాగు', 'ఉండు'], translation: 'Coma a comida! (imperativo informal)' },
        ],
        voice: {
          bot: 'మీకు ఏమి కావాలి?',
          botTranslation: 'O que você quer?',
          expected: ['నాకు నీళ్ళు కావాలి.', 'నాకు … కావాలి'],
          hint: 'Diga o que você quer com “నాకు … కావాలి.”.',
        },
        communityPrompt: 'Escreva o que você quer comer e beber, usando “నాకు … కావాలి.”.',
      },
      {
        id: 'te-u2-l3',
        title: 'పరీక్ష: కుటుంబం మరియు ఇల్లు',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'మీ అమ్మ పేరు ఏమిటి?',
          botTranslation: 'Qual é o nome da sua mãe?',
          expected: ['నా అమ్మ పేరు ... .', 'నా అమ్మ పేరు'],
          hint: 'Diga o nome da sua mãe com “నా అమ్మ పేరు … .”.',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “నా … పేరు … .”, “నాకు … ఉన్నాడు/ఉంది” e “నా ఇల్లు … గా ఉంది.”.',
      },
    ],
  },
  {
    id: 'te-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'నేను బడిలో ఉన్నాను',
    emoji: '🏫',
    card: {
      id: 'te-c3',
      title: 'Um hospital construído por um Nizam',
      emoji: '🏥',
      history:
        'O Osmania General Hospital, em Hyderabad, teve o prédio atual concluído em 1919, por ordem do último Nizam de Hyderabad, Mir Osman Ali Khan — daí o nome. Foi projetado pelo arquiteto britânico Vincent Jerome Esch com Nawab Khan Bahadur Mirza Akbar Baig, em estilo indo-sarracênico, e é até hoje um dos hospitais públicos mais importantes de Telangana.',
      culture_tip:
        'Para “escola”, o télugo falado do dia a dia usa “బడి”; “పాఠశాల”, de origem sânscrita, é a forma mais formal, mais comum na escrita e em placas.',
      grammar_why:
        'O sufixo locativo “-లో” marca “em, dentro de” (బడిలో, ఆసుపత్రిలో) — e “ఇల్లు” (casa) muda para a forma oblíqua “ఇంటి” antes dele (ఇంటిలో). A mesma lógica do dativo com “ఉండు”, já usada para parentesco, serve também para sentimentos: “నాకు ఆకలి ఉంది” é “para mim fome existe” (estou com fome).',
      grammar_examples: [
        ['నేను బడిలో ఉన్నాను.', 'Eu estou na escola.'],
        ['ఆమె ఆసుపత్రిలో ఉంది.', 'Ela está no hospital.'],
        ['నాకు ఆకలి ఉంది.', 'Estou com fome.'],
        ['నాకు భయం ఉంది.', 'Estou com medo.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'te-u3-l1',
        title: 'బడి, ఆసుపత్రి మరియు కొట్టు',
        kind: 'licao',
        words: ['బడి', 'ఆసుపత్రి', 'కొట్టు', 'రోడ్డు', 'వైద్యుడు', 'ఉపాధ్యాయుడు'],
        cloze: [
          { sentence: 'నేను ___ ఉన్నాను.', answer: 'బడిలో', options: ['బడిలో', 'ఆసుపత్రిలో', 'ఇంటిలో'], translation: 'Eu estou na escola.' },
          { sentence: 'ఆమె ___ ఉంది.', answer: 'ఆసుపత్రిలో', options: ['ఆసుపత్రిలో', 'బడిలో', 'ఇంటిలో'], translation: 'Ela está no hospital.' },
          { sentence: 'అతను ___.', answer: 'వైద్యుడు', options: ['వైద్యుడు', 'ఉపాధ్యాయుడు', 'రైతు'], translation: 'Ele é médico.' },
        ],
        voice: {
          bot: 'మీరు ఎక్కడ ఉన్నారు?',
          botTranslation: 'Onde você está? (formal)',
          expected: ['నేను బడిలో ఉన్నాను.', 'బడిలో ఉన్నాను'],
          hint: 'Diga onde você está com “నేను …లో ఉన్నాను.”.',
        },
        communityPrompt: 'Escreva onde você está agora, usando “నేను …లో ఉన్నాను.” com “బడి”, “ఆసుపత్రి”, “కొట్టు” ou “ఇల్లు”.',
      },
      {
        id: 'te-u3-l2',
        title: 'నాకు ఆకలి ఉంది',
        kind: 'licao',
        words: ['ఆకలి', 'దాహం', 'భయం', 'సంతోషం', 'దుఃఖం', 'కోపం'],
        cloze: [
          { sentence: 'నాకు ___ ఉంది.', answer: 'ఆకలి', options: ['ఆకలి', 'దాహం', 'భయం'], translation: 'Estou com fome.' },
          { sentence: 'నాకు ___ ఉంది.', answer: 'దాహం', options: ['దాహం', 'ఆకలి', 'సంతోషం'], translation: 'Estou com sede.' },
          { sentence: 'నాకు ___ ఉంది.', answer: 'భయం', options: ['భయం', 'కోపం', 'దుఃఖం'], translation: 'Estou com medo.' },
        ],
        voice: {
          bot: 'మీకు ఎలా ఉంది?',
          botTranslation: 'Como você está se sentindo?',
          expected: ['నాకు ఆకలి ఉంది.', 'ఆకలి ఉంది'],
          hint: 'Diga como você está se sentindo com “నాకు … ఉంది.”.',
        },
        communityPrompt: 'Escreva três frases sobre como você está se sentindo, usando “నాకు … ఉంది.” com “ఆకలి”, “దాహం”, “భయం”, “సంతోషం”, “దుఃఖం” ou “కోపం”.',
      },
      {
        id: 'te-u3-l3',
        title: 'పరీక్ష: బడిలో నా అనుభవం',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'మీరు ఎక్కడ ఉన్నారు? మీకు ఎలా ఉంది?',
          botTranslation: 'Onde você está? Como você está se sentindo?',
          expected: ['నేను బడిలో ఉన్నాను. నాకు ఆకలి ఉంది.', 'బడిలో ఉన్నాను', 'ఆకలి ఉంది'],
          hint: 'Diga onde você está com “…లో ఉన్నాను.” e como se sente com “నాకు … ఉంది.”.',
        },
        communityPrompt: 'Escreva um parágrafo curto contando onde você está (బడి/ఆసుపత్రి/కొట్టు/ఇల్లు) e como você está se sentindo (ఆకలి/దాహం/భయం/సంతోషం/దుఃఖం/కోపం).',
      },
    ],
  },
  {
    id: 'te-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'రేపు వెళ్తాను',
    emoji: '🔮',
    card: {
      id: 'te-c4',
      title: 'Os fios tingidos de Pochampally',
      emoji: '🧵',
      history:
        'O Pochampally Ikat é tecido em Bhoodan Pochampally, no distrito de Yadadri Bhuvanagiri, em Telangana — Telangana é um dos centros de tecelagem ikat mais antigos da Índia. A técnica (“double ikat”) tinge os fios da urdidura e da trama antes de tecer, criando os desenhos geométricos característicos; em 2005, a saree Pochampally recebeu o registro de Indicação Geográfica (GI), reconhecendo essa origem e técnica específicas.',
      culture_tip:
        'Para o télugo, “చీర” não é só uma peça de roupa qualquer: é a veste tradicional feminina indiana, e tecidos como o Pochampally Ikat fazem dela também uma forma de arte e de identidade regional.',
      grammar_why:
        'O futuro do télugo troca a raiz do verbo (“వెళ్ళు” vira “వెళ్త-”) antes das terminações pessoais: “నేను రేపు వెళ్తాను” (eu vou amanhã). Para comparar, o télugo usa o sufixo “-కంటే” (do caso ablativo) grudado na palavra comparada: “అతనికంటే నేను పొడుగు” é, ao pé da letra, “mais-que-ele eu alto” (eu sou mais alto que ele) — fonte: Wikipédia em inglês, artigo “Telugu grammar”.',
      grammar_examples: [
        ['నేను రేపు వెళ్తాను.', 'Eu vou/irei amanhã.'],
        ['ఆమె బడికి వెళ్తుంది.', 'Ela vai à escola.'],
        ['అతనికంటే నేను పొడుగు.', 'Eu sou mais alto do que ele.'],
        ['నాకు ఒక టోపీ కావాలి.', 'Eu quero um boné.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'te-u4-l1',
        title: 'నా బట్టలు',
        kind: 'licao',
        words: ['చొక్కా', 'చీర', 'టోపీ', 'చెప్పు', 'బట్ట', 'పొడుగు'],
        cloze: [
          { sentence: 'ఇది నా ___.', answer: 'చొక్కా', options: ['చొక్కా', 'టోపీ', 'చెప్పు'], translation: 'Esta é a minha camisa.' },
          { sentence: 'ఇది నా ___.', answer: 'టోపీ', options: ['టోపీ', 'చెప్పు', 'చీర'], translation: 'Este é o meu boné.' },
          { sentence: 'అతనికంటే నేను ___.', answer: 'పొడుగు', options: ['పొడుగు', 'చిన్న', 'మంచి'], translation: 'Eu sou mais alto do que ele.' },
        ],
        voice: {
          bot: 'ఇది ఏమిటి?',
          botTranslation: 'O que é isso?',
          expected: ['ఇది నా టోపీ.', 'నా టోపీ'],
          hint: 'Diga o que é com “ఇది నా … .”.',
        },
        communityPrompt: 'Escreva sobre as suas roupas, usando “ఇది నా …” com “చొక్కా”, “చీర”, “టోపీ” ou “చెప్పు”.',
      },
      {
        id: 'te-u4-l2',
        title: 'రేపు వెళ్తాను',
        kind: 'licao',
        words: ['రేపు', 'ఈరోజు', 'వచ్చు', 'కొను', 'చూడు', 'విను'],
        cloze: [
          { sentence: 'నేను ___ వెళ్తాను.', answer: 'రేపు', options: ['రేపు', 'ఈరోజు', 'ఇల్లు'], translation: 'Eu vou amanhã.' },
          { sentence: 'ఒక టోపీ ___!', answer: 'కొను', options: ['కొను', 'చూడు', 'విను'], translation: 'Compre um boné! (imperativo informal)' },
          { sentence: 'తెలుగు ___!', answer: 'విను', options: ['విను', 'చూడు', 'కొను'], translation: 'Escute o télugo! (imperativo informal)' },
        ],
        voice: {
          bot: 'రేపు ఏమి కావాలి?',
          botTranslation: 'O que você quer amanhã?',
          expected: ['నాకు ఒక టోపీ కావాలి.', 'టోపీ కావాలి'],
          hint: 'Diga o que você quer com “నాకు … కావాలి.”.',
        },
        communityPrompt: 'Escreva o que você vai fazer amanhã e o que você quer, usando “రేపు వెళ్తాను” e “నాకు … కావాలి.”.',
      },
      {
        id: 'te-u4-l3',
        title: 'పరీక్ష: రేపు వెళ్తాను',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'ఇది ఏమిటి? మీరు రేపు ఏమి కావాలి?',
          botTranslation: 'O que é isso? O que você quer amanhã?',
          expected: ['ఇది నా టోపీ. నాకు ఒక చొక్కా కావాలి.', 'నా టోపీ', 'కావాలి'],
          hint: 'Diga o que é com “ఇది నా … .” e o que você quer com “నాకు … కావాలి.”.',
        },
        communityPrompt: 'Escreva um parágrafo curto sobre o que você veste e o que vai fazer amanhã, usando “ఇది నా …”, “-కంటే” (para comparar) e “రేపు వెళ్తాను”.',
      },
    ],
  },
];
