import type { UnitSeed } from '../types';

/**
 * Trilha do télugo: por enquanto só as duas unidades do nível A1 — ver `incomplete` em index.ts.
 * Da A2 ao C2 chega depois.
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
];
