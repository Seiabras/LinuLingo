import type { UnitSeed } from '../types';

/**
 * Trilha do cassubiano: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_CSB: UnitSeed[] = [
  {
    id: 'csb-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Witôj! Ils emprims krokë',
    emoji: '👋',
    card: {
      id: 'csb-c1',
      title: 'A língua da Pomerânia',
      emoji: '🌊',
      history:
        'O cassubiano (kaszëbsczi jãzëk) é falado na Pomerânia, no norte da Polônia, ao redor de Gdańsk — a região chamada de Kaszëbë (Kashubia). É o parente vivo mais próximo do polonês antigo e do polabiano, uma língua eslava que já se extinguiu; juntos formam o ramo lequítico do eslavo ocidental. Desde 2005, a Polônia reconhece o cassubiano como língua regional, com direito a ensino nas escolas e uso em repartições públicas em alguns municípios. As estimativas de falantes variam de cerca de 100 mil a mais de 300 mil, a depender de contar só quem fala em casa ou também quem entende.',
      culture_tip:
        '“Witôj!” serve para cumprimentar e dar as boas-vindas a qualquer hora do dia. Um símbolo forte da cultura cassúbia é o bordado tradicional: usa sete cores fixas, cada uma com um sentido — tons de azul para o céu, os lagos e o mar Báltico, verde para os campos e florestas, amarelo para o sol, vermelho para o amor à terra e preto para o trabalho duro do povo cassúbio.',
      grammar_why:
        'O cassubiano diz o nome com “nazéwac sã”, literalmente “chamar-se”: “jô sã nazéwóm” é “eu me chamo”. E um só verbo, “bëc”, cobre o nosso ser e o nosso estar: “jô jem z Kuritibë” (sou de Curitiba) e “jô jem dobri” (estou bem, com o adjetivo concordando).',
      grammar_examples: [
        ['Witôj! Jak sã nazéwôsz?', 'Oi! Como você se chama?'],
        ['Jô sã nazéwóm Ana.', 'Eu me chamo Ana.'],
        ['Òn je z Gduńska, òna je z Gdinie.', 'Ele é de Gdańsk, ela é de Gdynia.'],
        ['Dzãkùjã, dobrze! A të?', 'Obrigado, bem! E você?'],
      ],
      character_guide: [
        ['ë', 'vogal central fraca, entre o “u” de “mas” e o “e” de “bife”', 'dzãkùjã (obrigado), drëch (amigo)'],
        ['ò', 'um ditongo, perto de “uê”', 'dobri wieczór, gard (cidade)'],
        ['ô', 'varia por região; aqui, perto do “ê” aberto', 'dobri dzéń, wiôldżi (grande)'],
        ['ã', 'vogal nasal, como o “ã” do português', 'dzãkùjã, piątk (sexta-feira)'],
        ['cz / sz', 'como “tch” e “x” do português', 'czôrny (preto), szesc (seis)'],
      ],
    },
    lessons: [
      {
        id: 'csb-u1-l1',
        title: 'Witôj, dzãkùjã, do ùzdrzeniô!',
        kind: 'licao',
        words: ['witôj', 'dobri dzéń', 'dobri noc', 'do ùzdrzeniô', 'dzãkùjã', 'proszã'],
        cloze: [
          { sentence: '___, Ano! Jak sã môsz?', answer: 'Witôj', options: ['Witôj', 'Do ùzdrzeniô', 'Dzãkùjã'], translation: 'Oi, Ana! Como vai?' },
          { sentence: 'Je noc: ___!', answer: 'dobri noc', options: ['dobri noc', 'dobri dzéń', 'dzãkùjã'], translation: 'É noite: boa noite!' },
          { sentence: '___ bëlno!', answer: 'Dzãkùjã', options: ['Dzãkùjã', 'Witôj', 'Proszã'], translation: 'Muito obrigado!' },
        ],
        voice: {
          bot: 'Witôj! Jak sã môsz?',
          botTranslation: 'Oi! Como vai?',
          expected: ['Dobrze, dzãkùjã! A të?', 'dobrze', 'dzãkùjã'],
          hint: 'Responda que vai bem e devolva a pergunta: “Dobrze, dzãkùjã! A të?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em cassubiano: um de dia (“Dobri dzéń…”), um à noite (“Dobri noc…”) e uma despedida (“Do ùzdrzeniô”).',
      },
      {
        id: 'csb-u1-l2',
        title: 'Jô, të, òn, òna',
        kind: 'licao',
        words: ['jô', 'të', 'òn', 'òna', 'nazéwac sã', 'miono'],
        cloze: [
          { sentence: '___ sã nazéwóm Ana.', answer: 'Jô', options: ['Jô', 'Të', 'Òn'], translation: 'Eu me chamo Ana.' },
          { sentence: 'Jak sã ___?', answer: 'nazéwôsz', options: ['nazéwôsz', 'jes', 'môsz'], translation: 'Como você se chama?' },
          { sentence: '___ je z Gduńska.', answer: 'Òn', options: ['Òn', 'Jô', 'Të'], translation: 'Ele é de Gdańsk.' },
        ],
        voice: {
          bot: 'Witôj! Jak sã nazéwôsz?',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['Jô sã nazéwóm Ana. A të?', 'jô sã nazéwóm', 'a të'],
          hint: 'Diga o seu nome com “Jô sã nazéwóm…” e devolva a pergunta com “A të?”.',
        },
        communityPrompt: 'Apresente-se em cassubiano: diga o seu nome com “Jô sã nazéwóm…” e pergunte o nome de alguém com “Jak sã nazéwôsz?”.',
      },
      {
        id: 'csb-u1-l3',
        title: 'Sprôwdzónka: pierszé krokë',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Witôj! Jô sã nazéwóm Paweł. Jak sã nazéwôsz, a skądka të jes?',
          botTranslation: 'Oi! Eu me chamo Paweł. Como você se chama, e de onde você é?',
          expected: ['Witôj! Jô sã nazéwóm Lucia ë jem z São Paulo.', 'jô sã nazéwóm', 'jem z', 'witôj'],
          hint: 'Devolva o cumprimento (“Witôj!”), diga o nome com “Jô sã nazéwóm…” e a cidade com “Jem z…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “Jô sã nazéwóm…”, cidade com “Jem z…” e uma despedida.',
      },
    ],
  },
  {
    id: 'csb-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Familëjô ë chëcz',
    emoji: '👪',
    card: {
      id: 'csb-c2',
      title: 'Uma língua ainda principalmente falada',
      emoji: '🧭',
      history:
        'Por muito tempo, o cassubiano foi visto como um dialeto do polonês — um debate que ainda não é unânime entre linguistas, embora o reconhecimento oficial de 2005 trate o cassubiano como língua à parte. A escrita cresceu sobretudo a partir do século XIX, com dicionários e gramáticas de estudiosos como Florian Ceynowa e, no século XX, Jan Trepczyk, que ajudaram a fixar a norma usada hoje. Mesmo assim, o cassubiano continua sendo, na vida das famílias, muito mais uma língua falada em casa do que escrita.',
      culture_tip:
        'A família é o lugar onde o cassubiano resiste mais: é em casa, com os avós e os pais, que a língua passa de geração em geração. Perguntar pela família (“Jak sã mô Twòja familëjô?”) é um jeito natural de puxar conversa com quem fala cassubiano.',
      grammar_why:
        'O verbo “ter” é “miec”: “jô móm brata” (tenho um irmão). Para negar, o cassubiano põe “nié” antes do verbo, como o nosso “não”: “jô nié wiém” (eu não sei).',
      grammar_examples: [
        ['Jô móm brata ë sostrã.', 'Tenho um irmão e uma irmã.'],
        ['Mòja chëcz je môłô.', 'A minha casa é pequena.'],
        ['Mlékò je biôłé.', 'O leite é branco.'],
        ['Jô nié wiém.', 'Eu não sei.'],
      ],
      character_guide: [
        ['mój / mòja', 'possessivo “meu/minha”, concorda com a coisa possuída', 'mój òjc (meu pai), mòja mac (minha mãe)'],
        ['-ã', 'o acusativo de muitos femininos termina em -ã', 'sostrã, kawã'],
      ],
    },
    lessons: [
      {
        id: 'csb-u2-l1',
        title: 'Mòja familëjô',
        kind: 'licao',
        words: ['mac', 'òjc', 'brat', 'sostra', 'miec', 'drëch'],
        cloze: [
          { sentence: 'Mòja ___ mô na miono Anna.', answer: 'mac', options: ['mac', 'òjc', 'brat'], translation: 'A minha mãe se chama Anna.' },
          { sentence: 'Jô ___ brata.', answer: 'móm', options: ['móm', 'jem', 'jidã'], translation: 'Eu tenho um irmão.' },
          { sentence: 'Mój ___ je z Kartuz.', answer: 'òjc', options: ['òjc', 'sostra', 'mac'], translation: 'Meu pai é de Kartuzy.' },
        ],
        voice: {
          bot: 'Môsz brata czë sostrã?',
          botTranslation: 'Você tem irmão ou irmã?',
          expected: ['Jo, jô móm brata ë sostrã.', 'jô móm', 'brat', 'sostra'],
          hint: 'Responda com “Jo, jô móm…” e diga o irmão (brat) e a irmã (sostra) que você tem.',
        },
        communityPrompt: 'Descreva a sua família em cassubiano: quantos irmãos (brat) e irmãs (sostra) você tem, usando “jô móm”.',
      },
      {
        id: 'csb-u2-l2',
        title: 'W chëczë',
        kind: 'licao',
        words: ['chëcz', 'wòda', 'chléb', 'mlékò', 'jesc', 'pic'],
        cloze: [
          { sentence: 'Mòja ___ je môłô.', answer: 'chëcz', options: ['chëcz', 'wòda', 'chléb'], translation: 'A minha casa é pequena.' },
          { sentence: 'Jô ___ wòdã.', answer: 'pijã', options: ['pijã', 'jém', 'móm'], translation: 'Eu bebo água.' },
          { sentence: 'Jô jém ___ s mlékã.', answer: 'chléb', options: ['chléb', 'wòda', 'chëcz'], translation: 'Eu como pão com leite.' },
        ],
        voice: {
          bot: 'Co jész?',
          botTranslation: 'O que você come?',
          expected: ['Jô jém chléb.', 'jô jém', 'chléb'],
          hint: 'Diga o que come com “Jô jém…”.',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: “Jô jém…” e “Jô pijã…”.',
      },
      {
        id: 'csb-u2-l3',
        title: 'Sprôwdzónka: familëjô ë chëcz',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Môsz brata czë sostrã? Co jész?',
          botTranslation: 'Você tem irmão ou irmã? O que você come?',
          expected: ['Jô móm sostrã ë jém chléb.', 'jô móm', 'jém'],
          hint: 'Diga quem você tem na família com “jô móm…” e o que come com “jô jém…”.',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “jô móm”, “jô jem” e “je”.',
      },
    ],
  },
];
