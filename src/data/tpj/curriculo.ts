import type { UnitSeed } from '../types';

/**
 * Trilha do tapiete: só as duas unidades do nível A1 (pacote marcado como incompleto — ver
 * `incomplete` em index.ts). Ver vocabulario.ts para as fontes de cada palavra e para a explicação de
 * como as frases que não são citações diretas do artigo de González (2010) foram montadas (combinando
 * só morfemas atestados, nunca palavras novas).
 */
export const UNITS_TPJ: UnitSeed[] = [
  {
    id: 'tpj-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Nde, ha\'e, tapiete',
    emoji: '🏞️',
    card: {
      id: 'tpj-c1',
      title: 'Um povo pequeno no Chaco',
      emoji: '🏞️',
      history: 'O tapiete é uma língua tupi-guarani viva, falada por um grupo pequeno na região do Chaco, na fronteira entre Argentina, Bolívia e Paraguai. Os censos de 2010-2012 registram cerca de 2.470 pessoas tapietes no Paraguai (a maior parte, com 1.748 falantes de primeira língua), 407 na Argentina (sobretudo na província de Salta) e 144 na Bolívia. Na Argentina, a língua recuou muito nas últimas décadas: hoje a maioria das crianças só a entende, sem falar — por isso este pacote é pequeno e documenta sobretudo a variedade descrita por uma linguista que trabalhou com a comunidade de “Misión Los Tapietes”, em Tartagal (Salta), perto do rio Pilcomayo.',
      culture_tip: 'O nome “tapiete” é o autoglotônimo usado pelos próprios tapietes na Argentina e na Bolívia; os grupos do Paraguai preferem se chamar “ñandereta” ou “ava”, ou usam “guaraní ñandeva” para falar com pessoas de fora. Curiosamente, a palavra “tapiete” tem uma origem incômoda: vem do guarani “tapii ete” — “verdadeiros escravos” —, um nome dado de fora que o povo acabou adotando.',
      grammar_why: 'O tapiete marca a pessoa que fala diretamente no verbo, com um prefixo, em vez de depender só de um pronome solto: “a-” é o prefixo da 1ª pessoa (“a-karu”, eu como), e “o-”/“ñi-” marca a 3ª pessoa (“ha’e ñi-mbo’e”, ele/ela estuda). Mesmo assim, a língua tem pronomes independentes, como “nde” (tu/você) e “ha’e” (ele/ela), usados sobretudo como sujeito ou para dar ênfase.',
      grammar_examples: [
        ["Ha'e ñi-mbo'e.", 'Ele/ela estuda.'],
        ['Nde tapiete.', 'Você é tapiete.'],
        ['A-karu.', 'Eu como.'],
      ],
      character_guide: [
        ['ɨ', 'vogal central (entre o “i” e o “u” do português), sem arredondar os lábios', 'ɨ (água), kwarasɨ (sol)'],
        ["'", 'oclusiva glotal: uma parada curta na garganta', "ha'e (ele/ela), ka'a (mato)"],
        ['ã, ĩ, ũ (til)', 'vogal nasalizada: o ar sai também pelo nariz', 'sĩ (mãe), kãwĩ (chicha)'],
        ['ä, ö (trema)', 'vogal nasalizada, na ortografia usada por González (2010) para o tapiete', 'wähe (chega), pörä (bonito)'],
      ],
    },
    lessons: [
      {
        id: 'tpj-u1-l1',
        title: "Nde, ha'e, tu, sĩ",
        kind: 'licao',
        words: ['nde', "ha'e", 'tu', 'sĩ', "sanya'ɨ", 'tapiete'],
        cloze: [
          { sentence: '___ tapiete.', answer: 'Nde', options: ['Nde', "Ha'e", 'Ampo'], translation: 'Você é tapiete.' },
          { sentence: "___ ñi-mbo'e.", answer: "Ha'e", options: ["Ha'e", 'Nde', 'Tu'], translation: 'Ele/ela estuda.' },
          { sentence: 'Ampo ___.', answer: 'sĩ', options: ['sĩ', 'tu', "sanya'ɨ"], translation: 'Esta é a mãe.' },
        ],
        voice: {
          bot: 'Nde tapiete?',
          botTranslation: 'Você é tapiete?',
          expected: ["Ha'e tapiete.", "tapiete"],
          hint: 'Responda com “Ha\'e tapiete.” (ele/ela é tapiete, usado aqui como “sim, sou tapiete”).',
        },
        communityPrompt: 'Apresente sua família em tapiete usando “tu” (pai), “sĩ” (mãe) e “sanya\'ɨ” (criança).',
      },
      {
        id: 'tpj-u1-l2',
        title: 'Ɨ, tata, kwarasɨ, ampo',
        kind: 'licao',
        words: ['ɨ', 'tata', "ka'a", 'kwarasɨ', 'ampo', 'heta'],
        cloze: [
          { sentence: 'Ampo ___.', answer: 'tata', options: ['tata', 'ɨ', 'kwarasɨ'], translation: 'Isto é fogo.' },
          { sentence: '___ ɨ.', answer: 'Ampo', options: ['Ampo', "Ha'e", 'Nde'], translation: 'Isto é água.' },
          { sentence: '___ o-ĩ.', answer: 'Heta', options: ['Heta', 'Ampo', "Ka'a"], translation: 'Há muito.' },
        ],
        voice: {
          bot: 'Ampo kwarasɨ?',
          botTranslation: 'Isto é o sol?',
          expected: ['Ampo kwarasɨ.', 'kwarasɨ'],
          hint: 'Confirme com “Ampo kwarasɨ.” (isto é o sol).',
        },
        communityPrompt: 'Escreva sobre a natureza do Chaco usando “ɨ” (água), “tata” (fogo), “ka\'a” (mato) e “kwarasɨ” (sol).',
      },
      {
        id: 'tpj-u1-l3',
        title: 'Test: nde, ha\'e, tapiete',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: "Nde tapiete? Ampo kwarasɨ?",
          botTranslation: 'Você é tapiete? Isto é o sol?',
          expected: ["Ha'e tapiete. Ampo kwarasɨ.", "tapiete", "kwarasɨ"],
          hint: 'Confirme as duas perguntas: “Ha\'e tapiete.” e “Ampo kwarasɨ.”.',
        },
        communityPrompt: 'Escreva cinco frases curtas apresentando sua família e a natureza ao redor, usando “ampo” (isto/este).',
      },
    ],
  },
  {
    id: 'tpj-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'A-karu, a-pota',
    emoji: '🌽',
    card: {
      id: 'tpj-c2',
      title: 'Comer, querer, chegar',
      emoji: '🌽',
      history: 'A chicha (“kãwĩ”, uma bebida fermentada de milho) e o milho (“awati”) aparecem entre as palavras mais bem documentadas do tapiete — um sinal de como a agricultura de milho é importante na vida da comunidade do Chaco. O verbo “chegar” (“wähe”) também foi registrado várias vezes pela linguista Hebe González: é um dos poucos verbos citados sozinho, sem prefixo de pessoa, no artigo que serve de fonte para este pacote.',
      culture_tip: 'O artigo de González (2010) descreve o tapiete falado em Tartagal, no norte da Argentina, onde a língua está em retrocesso: a maioria das crianças hoje entende mas não fala mais o idioma dos pais e avós. Aprender mesmo poucas palavras, como as deste curso, ajuda a manter viva a memória da língua.',
      grammar_why: 'O prefixo “a-” (1ª pessoa) é um dos padrões mais confirmados do tapiete: aparece em dezenas de verbos diferentes no artigo-fonte, como “a-karu” (como), “a-pota” (quero) e “a-hesha” (vejo). Já “heta” (muito) é um quantificador que pode aparecer sozinho diante do verbo “ser/estar” (“ĩ”): “Heta o-ĩ.” (há muito).',
      grammar_examples: [
        ['A-karu.', 'Eu como.'],
        ['A-pota.', 'Eu quero.'],
        ['Heta o-ĩ.', 'Há muito.'],
        ["A-karu so'o.", 'Eu como carne.'],
      ],
      character_guide: [
        ['a-', 'prefixo de 1ª pessoa (eu) na maioria dos verbos', 'a-karu (como), a-pota (quero), a-hesha (vejo)'],
        ['sh, ch, y', 'dígrafos da ortografia usada por González (2010): “sh” = som de “x” de “xícara”; “ch” = som de “tch”; “y” = som de “dj”', 'minshi (pequeno), shure (batata)'],
        ['kw', 'oclusiva velar seguida de “u” curto (labiovelarizada)', 'kwarasɨ (sol)'],
      ],
    },
    lessons: [
      {
        id: 'tpj-u2-l1',
        title: "A-karu, a-pota, so'o",
        kind: 'licao',
        words: ['karu', 'pota', 'hendu', 'hesha', "so'o", 'awati'],
        cloze: [
          { sentence: 'A-___.', answer: 'karu', options: ['karu', 'pota', 'hendu'], translation: 'Eu como.' },
          { sentence: "A-karu ___.", answer: "so'o", options: ["so'o", 'awati', 'ɨ'], translation: 'Eu como carne.' },
          { sentence: 'A-___.', answer: 'hesha', options: ['hesha', 'hendu', 'pota'], translation: 'Eu vejo.' },
        ],
        voice: {
          bot: "A-pota so'o. Nde?",
          botTranslation: 'Eu quero carne. E você?',
          expected: ["A-pota awati.", 'a-pota', 'awati'],
          hint: 'Diga o que você quer com “A-pota ___.” (eu quero…), usando “awati” (milho) ou outra palavra de comida.',
        },
        communityPrompt: 'Escreva o que você come e quer usando “a-karu” (eu como) e “a-pota” (eu quero), com “so\'o” (carne) e “awati” (milho).',
      },
      {
        id: 'tpj-u2-l2',
        title: "Wata, wähe, puka, katu",
        kind: 'licao',
        words: ['wata', 'wähe', 'puka', 'katu', 'minta', 'kãwĩ'],
        cloze: [
          { sentence: '___.', answer: 'Wähe', options: ['Wähe', 'Wewe', 'Puka'], translation: 'Chega.' },
          { sentence: 'A-___.', answer: 'wata', options: ['wata', 'puka', 'katu'], translation: 'Eu ando/caminho.' },
          { sentence: 'Ampo ___.', answer: 'kãwĩ', options: ['kãwĩ', 'minta', "so'o"], translation: 'Esta é a chicha.' },
        ],
        voice: {
          bot: 'Wähe! Nde tapiete?',
          botTranslation: 'Chegou! Você é tapiete?',
          expected: ["Ha'e tapiete. A-wata.", "tapiete", "wata"],
          hint: 'Confirme que é tapiete e diga que está chegando a pé com “a-wata” (eu ando/caminho).',
        },
        communityPrompt: 'Escreva uma pequena cena de chegada na aldeia (“tenta”), usando “wähe” (chega), “a-wata” (eu caminho) e “a-puka” (eu rio).',
      },
      {
        id: 'tpj-u2-l3',
        title: 'Test: a-karu, wähe',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: "Nde tapiete? A-pota so'o. Wähe!",
          botTranslation: 'Você é tapiete? Eu quero carne. Chegou!',
          expected: ["Ha'e tapiete. A-karu so'o.", "tapiete", "karu"],
          hint: 'Confirme que é tapiete e diga que também come carne, com “a-karu ___.”.',
        },
        communityPrompt: 'Escreva um pequeno diálogo de chegada e refeição, usando pelo menos quatro palavras das duas unidades.',
      },
    ],
  },
];
