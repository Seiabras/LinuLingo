import type { UnitSeed } from '../types';

/**
 * Trilha do uigur: por enquanto só as duas unidades do nível A1 (pacote incompleto — ver
 * `incomplete` em index.ts). Da A2 ao C2 chega conforme mais fontes específicas do uigur puderem
 * ser conferidas (ver nota de fontes em vocabulario.ts).
 */
export const UNITS_UG: UnitSeed[] = [
  {
    id: 'ug-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'ياخشىمۇسىز! (Yaxshimusiz!)',
    emoji: '👋',
    card: {
      id: 'ug-c1',
      title: 'Uma língua túrquica escrita com letras árabes',
      emoji: '🕌',
      history:
        'O uigur (ئۇيغۇرچە, Uyghurche) é uma língua túrquica do ramo carlúquico, falada por 8 a 13 milhões de pessoas (dado de 2021 citado na Wikipédia), a maioria na Região Autônoma Uigur de Xinjiang, no noroeste da China (quase 11,8 milhões de pessoas uigures no censo chinês de 2020), com comunidades também no Cazaquistão, no Paquistão, na Turquia, no Quirguistão e no Uzbequistão. Apesar do alfabeto parecido com o árabe, o uigur não é parente do árabe nem do persa: é parente próximo do uzbeque (os dois vêm do mesmo ramo carlúquico) e mais distante do turco da Turquia, que pertence a outro ramo da família túrquica, o oghuz. Desde 1978/1983, a China usa oficialmente o alfabeto árabe uigur (Uyghur Ereb Yéziqi, UEY); fora da China também se escreve o uigur em alfabeto cirílico ou latino. A Wikipédia cita um relatório do INALCO (2021) descrevendo o uigur como língua ameaçada, com o dialeto lop classificado como criticamente ameaçado.',
      culture_tip:
        '“Yaxshimusiz!” é o cumprimento formal mais comum: a própria palavra já mostra como o uigur gruda pedaços de sentido numa palavra só — “yaxshi” (bom) + “-mu” (pergunta) + “-siz” (você, formal), ou seja, “[você] está bem?”. A maioria das pessoas uigures é muçulmana sunita, segundo a Wikipédia, o que molda parte da vida cultural e das comidas tradicionais, como o nan (pão), que aparece mais adiante no curso.',
      grammar_why:
        'Para dizer “isto é um livro”, o uigur nem precisa de um verbo “ser”: “بۇ كىتاب” (bu kitab) já quer dizer isso sozinho, sem nada a mais. Para negar, usa-se a palavra “ئەمەس” (emes) depois da palavra negada: “بۇ كىتاب ئەمەس” (bu kitab emes) é “isto não é um livro”.',
      grammar_examples: [
        ['ياخشىمۇسىز!', 'Olá! (cumprimento formal: “está bem?”)'],
        ['ھەئە، بۇ كىتاب.', 'Sim, isto é um livro.'],
        ['ياق، بۇ كىتاب ئەمەس.', 'Não, isto não é um livro.'],
      ],
      character_guide: [
        ['ئا', 'vogal aberta “a”, como em “pá” — igual a todas as vogais do uigur, vem sempre com um hemze (ئ) de apoio no início da palavra', 'ئات (at) — cavalo'],
        ['ئە', 'vogal “e” mais aberta, parecida com o “é” de “pé”', 'ئەمەس (emes) — não é, não está'],
        ['ئى', 'vogal “i” fechada', 'ئىت (it) — cachorro'],
        ['ئو', 'vogal “o” arredondada posterior', 'ئون (on) — dez'],
        ['ئۆ', 'vogal “ö” arredondada anterior, sem equivalente exato no português (como o alemão “ö”)', 'ئۆي (öy) — casa'],
        ['ئۈ', 'vogal “ü” arredondada anterior, sem equivalente exato no português (como o alemão “ü”)', 'ئۈچ (üch) — três'],
      ],
    },
    lessons: [
      {
        id: 'ug-u1-l1',
        title: 'ياخشىمۇسىز، رەھمەت',
        kind: 'licao',
        words: ['ياخشىمۇسىز', 'رەھمەت', 'ھەئە', 'ياق', 'بۇ', 'ئۇ'],
        cloze: [
          { sentence: 'ياخشىمۇسىز! ___، رەھمەت!', answer: 'ھەئە', options: ['ھەئە', 'ياق', 'بۇ'], translation: 'Olá! Sim, obrigado!' },
          { sentence: 'ھەئە، ___ كىتاب.', answer: 'بۇ', options: ['بۇ', 'ئۇ', 'ياق'], translation: 'Sim, isto é um livro.' },
          { sentence: 'ياق، ___ ياخشى ئەمەس.', answer: 'ئۇ', options: ['ئۇ', 'بۇ', 'رەھمەت'], translation: 'Não, ele/ela não é bom/boa.' },
        ],
        voice: {
          bot: 'ياخشىمۇسىز!',
          botTranslation: 'Olá! (lit. “você está bem?”, cumprimento formal)',
          expected: ['ياخشىمۇسىز! رەھمەت، ھەئە.', 'ياخشىمۇسىز', "ھەئە"],
          hint: "Devolva o cumprimento “Yaxshimusiz!” e diga “sim” (he'e) e “obrigado” (rehmet).",
        },
        communityPrompt: "Escreva uma pequena troca de cumprimentos em uigur usando “Yaxshimusiz!”, “He'e” (sim) ou “Yaq” (não) e “Rehmet” (obrigado).",
      },
      {
        id: 'ug-u1-l2',
        title: 'مەن، سەن، بىز',
        kind: 'licao',
        words: ['مەن', 'سەن', 'سىز', 'بىز', 'ئۇلار', 'ئەمەس'],
        cloze: [
          { sentence: '___ ياخشى.', answer: 'مەن', options: ['مەن', 'سەن', 'سىز'], translation: 'Eu estou bem.' },
          { sentence: '___ ياخشى ئەمەس.', answer: 'ئۇلار', options: ['ئۇلار', 'بىز', 'سەن'], translation: 'Eles/elas não estão bem.' },
          { sentence: '___ ياخشىمۇ؟', answer: 'سىز', options: ['سىز', 'بىز', 'مەن'], translation: 'Você (formal) está bem?' },
        ],
        voice: {
          bot: 'سىز ياخشىمۇ؟',
          botTranslation: 'O senhor/a senhora está bem?',
          expected: ['ھەئە، مەن ياخشى.', 'مەن ياخشى', 'ھەئە'],
          hint: "Responda “He'e, men yaxshi” (sim, eu estou bem).",
        },
        communityPrompt: 'Apresente os pronomes: escreva três frases curtas com “men”, “biz” e “ular” seguidos de “yaxshi” ou “yaxshi emes”.',
      },
      {
        id: 'ug-u1-l3',
        title: 'Test: ياخشىمۇسىز!',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'ياخشىمۇسىز! سىز ياخشىمۇ؟',
          botTranslation: 'Olá! Você (formal) está bem?',
          expected: ['ياخشىمۇسىز! ھەئە، مەن ياخشى. رەھمەت!', 'ياخشىمۇسىز', 'مەن ياخشى'],
          hint: 'Cumprimente (“Yaxshimusiz!”), diga que está bem (“men yaxshi”) e agradeça (“rehmet”).',
        },
        communityPrompt: 'Escreva uma apresentação curta: cumprimento (“Yaxshimusiz!”), como você está (“Men yaxshi.”) e um agradecimento (“Rehmet!”).',
      },
    ],
  },
  {
    id: 'ug-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'ئۆي، دادا، ئانا',
    emoji: '👪',
    card: {
      id: 'ug-c2',
      title: 'Aglutinação, SOV e sem gênero',
      emoji: '🧩',
      history:
        'O uigur é uma língua aglutinante: gruda um sufixo atrás do outro numa cadeia só, cada um com um sentido fixo. O exemplo citado na Wikipédia “ئۆيىڭىزگە” (öy-ingiz-ge) junta “casa” + “seu” (formal) + “para”, resultando em “para a sua casa”. A frase segue a ordem sujeito-objeto-verbo (SOV): o exemplo “men uyghurche oquymen” é, palavra por palavra, “eu uigur estudo”, com o verbo sempre no final — diferente do português, que é SVO.',
      culture_tip:
        'Entre os pratos tradicionais uigures citados pela Wikipédia estão o laghman, o manti, o dapanji, o samsa e o nan — o pão redondo que também aparece no vocabulário desta unidade.',
      grammar_why:
        'O uigur não tem gênero gramatical: a mesma palavra “ئۇ” (u) serve para “ele” e para “ela”, e os adjetivos não mudam de forma. Depois de um numeral, o substantivo fica no singular — sem o sufixo de plural “-lar”: “بەش يۇلتۇز” (bäsh yultuz) é “cinco estrela” (não “cinco estrelas”), segundo a regra citada na Wikipédia.',
      grammar_examples: [
        ['ئۆي چوڭ.', 'A casa é grande.'],
        ['مەن ئوقۇيمەن.', 'Eu leio, eu estudo.'],
        ['بەش يۇلتۇز.', 'Cinco estrelas. (lit. “cinco estrela”, sem plural depois do numeral)'],
      ],
      character_guide: [
        ['ڭ', 'som nasal “ng” (como o final de “também”), uma letra que o árabe padrão não tem', 'ئۆيىڭىزگە (öyingizge) — “para a sua casa”'],
['ئ (hemze)', 'a marca de apoio: toda vogal do uigur, no começo da palavra, vem apoiada nela — por isso as vogais iniciais são sempre ئا, ئە، ئى... e nunca a vogal sozinha', 'ئات (at) — cavalo'],
      ],
    },
    lessons: [
      {
        id: 'ug-u2-l1',
        title: 'دادا، ئانا، ئۆي',
        kind: 'licao',
        words: ['دادا', 'ئانا', 'بالا', 'ئۆي', 'كىتاب', 'ياخشى'],
        cloze: [
          { sentence: 'بۇ ___.', answer: 'ئۆي', options: ['ئۆي', 'كىتاب', 'بالا'], translation: 'Isto é uma casa.' },
          { sentence: '___ ياخشى.', answer: 'ئانا', options: ['ئانا', 'دادا', 'بالا'], translation: 'A mãe está bem.' },
          { sentence: 'كىتاب ___.', answer: 'ياخشى', options: ['ياخشى', 'ئۆي', 'دادا'], translation: 'O livro é bom.' },
        ],
        voice: {
          bot: 'ئۆيىڭىز ياخشىمۇ؟',
          botTranslation: 'A sua casa (tratamento formal) é boa?',
          expected: ['ھەئە، ئۆي ياخشى.', 'ئۆي ياخشى', 'ھەئە'],
          hint: "Responda “He'e, öy yaxshi” (sim, a casa é boa).",
        },
        communityPrompt: 'Descreva a sua família e a sua casa em uigur: “Bu öy…”, “Dada…”, “Ana…”, “Öy yaxshi.”.',
      },
      {
        id: 'ug-u2-l2',
        title: 'بىر، ئىككى، ئۈچ...',
        kind: 'licao',
        words: ['بىر', 'ئىككى', 'ئۈچ', 'تۆت', 'بەش', 'ئون'],
        cloze: [
          { sentence: 'بىر قول، ___ كۆز.', answer: 'ئىككى', options: ['ئىككى', 'ئۈچ', 'ئون'], translation: 'Uma mão, dois olhos.' },
          { sentence: '___ كىتاب.', answer: 'ئۈچ', options: ['ئۈچ', 'تۆت', 'بەش'], translation: 'Três livros.' },
          { sentence: '___ ئۆي.', answer: 'ئون', options: ['ئون', 'بىر', 'تۆت'], translation: 'Dez casas.' },
        ],
        voice: {
          bot: 'بىر، ئىككى، ئۈچ...؟',
          botTranslation: 'Um, dois, três...?',
          expected: ['تۆت، بەش... ئون!', 'تۆت', 'ئون'],
          hint: 'Continue a contagem: “töt, bäsh… on!”.',
        },
        communityPrompt: 'Escreva os números de um a dez em uigur que você já aprendeu: “bir, ikki, üch…”.',
      },
      {
        id: 'ug-u2-l3',
        title: 'Test: ئۆي، دادا، ئانا',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'دادا ياخشىمۇ؟ ئۆيىڭىز ياخشىمۇ؟',
          botTranslation: 'O pai está bem? A sua casa (tratamento formal) é boa?',
          expected: ['ھەئە، دادا ياخشى. ئۆي ياخشى.', 'دادا ياخشى', 'ئۆي ياخشى'],
          hint: 'Responda às duas perguntas: “He\'e, dada yaxshi. Öy yaxshi.” (sim, o pai está bem; a casa é boa).',
        },
        communityPrompt: 'Escreva cinco frases misturando pessoas, casa e números: por exemplo “Dada yaxshi”, “Bir kitab”, “Öy chong”.',
      },
    ],
  },
];
