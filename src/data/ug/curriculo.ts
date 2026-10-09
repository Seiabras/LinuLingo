import type { UnitSeed } from '../types';

/**
 * Trilha do uigur: as quatro unidades dos níveis A1 e A2 (pacote incompleto — ver `incomplete` em
 * index.ts). As unidades 3 e 4 (A2.1 e A2.2) usam o vocabulário e a gramática pesquisados em
 * 09/10/2026 (ver a nota de fontes em vocabulario.ts e os tópicos novos em gramatica.ts). Da B1 ao
 * C2 chega conforme mais fontes específicas do uigur puderem ser conferidas.
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
  {
    id: 'ug-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'كىم؟ نېمە؟ قاچان؟',
    emoji: '❓',
    card: {
      id: 'ug-c3',
      title: 'Duas formas de contar os dias da semana',
      emoji: '🗓️',
      history:
        'O guia de frases em uigur da Wikivoyage registra que os dias da semana têm duas formas: uma vinda do persa (“düshenbe”, segunda-feira; “seyshenbe”, terça; “charshenbe”, quarta; “peyshenbe”, quinta; “jüme”, sexta; “shenbe”, sábado; “yekshenbe”, domingo) e outra formada com numerais turcos e a palavra “hepte” (semana): “heptining birinchi küni” (“o primeiro dia da semana”, segunda), “heptining ikkinchi küni” (o segundo dia, terça) e assim por diante. É um bom exemplo de como o vocabulário do uigur mistura camadas: palavras antigas vindas do persa ao lado de formações internas, turcas, com os próprios numerais já vistos nas unidades anteriores.',
      culture_tip:
        'Para perguntar “como vai?” de um jeito mais completo do que “yaxshimusiz”, o guia de frases da Wikivoyage registra “Qandaq ehwalingiz؟” (قانداق ئەھۋالىڭىز؟), literalmente “qual é a sua situação?” — junta “qandaq” (como) com “ehwal” (situação) e o sufixo possessivo formal “-ingiz” (seu/sua), o mesmo sufixo que já apareceu em “öyingiz” (a sua casa) na unidade 2.',
      grammar_why:
        'As palavras interrogativas do uigur — “kim” (quem), “nëme” (o quê), “qeyerde” (onde), “qachan” (quando), “qandaq” (como) — entram na frase sem precisar de um verbo “ser” separado, do mesmo jeito que “bu kitab” (isto é um livro) não precisa dele: “bu kim؟” já quer dizer “quem é este/esta?”, e “öy qeyerde؟” já quer dizer “onde é a casa?”.',
      grammar_examples: [
        ['بۇ كىم؟', 'Quem é este/esta?'],
        ['قانداق ئەھۋالىڭىز؟', 'Como você está? (lit. “qual é a sua situação?”)'],
        ['ئەتە ياخشىمۇ؟', 'Amanhã está bom?'],
      ],
      character_guide: [
        ['ب', 'consoante “b”, como em “bola”', 'بەرمەك (bermek) — dar'],
        ['د', 'consoante “d”, como em “dado”', 'دادا (dada) — pai'],
        ['ر', 'consoante “r”, mais parecida com o “r” fraco do espanhol do que com o “r” forte do português', 'رەھمەت (rehmet) — obrigado'],
      ],
    },
    lessons: [
      {
        id: 'ug-u3-l1',
        title: 'كىم؟ نېمە؟ قەيەردە؟',
        kind: 'licao',
        words: ['كىم', 'نېمە', 'قەيەردە', 'قاچان', 'قانداق', 'ھازىر'],
        cloze: [
          { sentence: 'بۇ ___؟', answer: 'كىم', options: ['كىم', 'نېمە', 'قانداق'], translation: 'Quem é este/esta?' },
          { sentence: 'ئۆي ___؟', answer: 'قەيەردە', options: ['قەيەردە', 'قاچان', 'ھازىر'], translation: 'Onde é a casa?' },
          { sentence: 'سىز ___ ياخشىمۇ؟', answer: 'ھازىر', options: ['ھازىر', 'قاچان', 'نېمە'], translation: 'Você está bem agora?' },
        ],
        voice: {
          bot: 'سىز ھازىر قەيەردە؟',
          botTranslation: 'Onde você está agora?',
          expected: ['مەن ھازىر ئۆيدە.', 'ئۆيدە', 'ھازىر'],
          hint: 'Diga que está em casa agora, usando “öyde” (öy + -de, caso locativo, “em/na”) e “hazir” (agora).',
        },
        communityPrompt: 'Escreva três perguntas em uigur usando “kim”, “qeyerde” e “qachan”, cada uma começando por “bu” ou pelo nome de uma coisa.',
      },
      {
        id: 'ug-u3-l2',
        title: 'بۈگۈن، ئەتە، تۈنۈگۈن',
        kind: 'licao',
        words: ['بۈگۈن', 'ئەتە', 'تۈنۈگۈن', 'ئەتىگەن', 'چۈش', 'ھەپتە'],
        cloze: [
          { sentence: '___ ياخشى.', answer: 'بۈگۈن', options: ['بۈگۈن', 'ئەتە', 'تۈنۈگۈن'], translation: 'Hoje está bom.' },
          { sentence: 'بىر ___.', answer: 'ھەپتە', options: ['ھەپتە', 'چۈش', 'ئەتىگەن'], translation: 'Uma semana.' },
          { sentence: '___ ياخشىمۇ؟', answer: 'ئەتىگەن', options: ['ئەتىگەن', 'چۈش', 'تۈنۈگۈن'], translation: 'A manhã está boa?' },
        ],
        voice: {
          bot: 'ئەتە ياخشىمۇ؟',
          botTranslation: 'Amanhã está bom?',
          expected: ["ھەئە، ئەتە ياخشى.", 'ئەتە ياخشى', 'ھەئە'],
          hint: "Responda “He'e, ete yaxshi” (sim, amanhã está bom).",
        },
        communityPrompt: 'Descreva o seu dia em uigur com “bügün”, “ete” e “tünügün”, cada um seguido de “yaxshi” ou “yaxshi emes”.',
      },
      {
        id: 'ug-u3-l3',
        title: 'Test: كىم؟ نېمە؟ قاچان؟',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'سىز ھازىر قەيەردە؟ بۈگۈن ياخشىمۇ؟',
          botTranslation: 'Onde você está agora? Hoje está bom?',
          expected: ["مەن ھازىر ئۆيدە. ھەئە، بۈگۈن ياخشى.", 'ئۆيدە', 'بۈگۈن ياخشى'],
          hint: "Diga onde está agora (“öyde”, em casa) e responda sobre hoje (“he'e, bügün yaxshi”).",
        },
        communityPrompt: 'Escreva cinco frases misturando perguntas e tempo: por exemplo “Bu kim?”, “Ete yaxshimu?”, “Bir hepte.”.',
      },
    ],
  },
  {
    id: 'ug-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'ئاكام، كۆك، يېقىن',
    emoji: '🧑‍🤝‍🧑',
    card: {
      id: 'ug-c4',
      title: 'Sufixos possessivos de verdade, com "su" (água)',
      emoji: '💧',
      history:
        'A Wikipédia regista uma regrinha específica para os sufixos possessivos de palavras de uma sílaba terminadas em vogal arredondada, como “su” (água): entra um “y” de apoio antes do sufixo. É assim que “minha água” fica “suyum” (su-y-um), “a sua água” (tratamento formal) fica “suyingiz” (su-y-ingiz), mas “a água dele/dela” fica “susi” (su-si), sem o “y”, porque o sufixo de 3ª pessoa já começa com uma consoante (“-si”). O mesmo tipo de sufixo possessivo formal já apareceu em “öyingiz” (unidade 2) e aparece de novo em “akam” (ئاكام), “meu irmão mais velho” — “aka” (irmão mais velho) mais o sufixo de 1ª pessoa “-m”.',
      culture_tip:
        'A Região Autônoma Uigur de Xinjiang é a maior divisão administrativa da China em área — mais de 1,6 milhão de km², segundo a Wikipédia —, o que ajuda a explicar por que perguntar se um lugar é “yiraq” (longe) ou “yëqin” (perto) é tão comum em uigur quanto em português.',
      grammar_why:
        'O caso acusativo (objeto direto) usa o sufixo “-ni”, sem variação de harmonia vocálica: “at” (cavalo) mais “-ni” dá “atni” (ئاتنى), o cavalo como objeto de uma frase. Já o plural “-lar/-ler” muda de forma conforme a vogal da palavra: “at” (vogal posterior) dá “atlar” (cavalos), e “müshük” (vogal anterior, com “ü”) dá “müshükler” (gatos) — a mesma harmonia vocálica já estudada na unidade 1, agora aplicada ao plural.',
      grammar_examples: [
        ['ئاكام ياخشى.', 'Meu irmão (mais velho) está bem.'],
        ['ئاتلار ياخشى.', 'Os cavalos estão bem.'],
        ['ئۆي يېقىن.', 'A casa é perto.'],
      ],
      character_guide: [
        ['ل', 'consoante “l”, como em “lua”', 'ئولتۇرماق (olturmaq) — sentar'],
        ['م', 'consoante “m”, como em “mala”', 'مەن (men) — eu'],
        ['ي', 'consoante/semivogal “y”, como em “iogurte”', 'يازماق (yazmaq) — escrever'],
      ],
    },
    lessons: [
      {
        id: 'ug-u4-l1',
        title: 'ئايال، ئەر، ئاكا',
        kind: 'licao',
        words: ['ئايال', 'ئەر', 'ئاكا', 'كۆك', 'كۈلرەڭ', 'بىنەپشە'],
        cloze: [
          { sentence: 'بۇ ___.', answer: 'ئايال', options: ['ئايال', 'ئەر', 'ئاكا'], translation: 'Esta é uma mulher.' },
          { sentence: 'بۇ ___م.', answer: 'ئاكا', options: ['ئاكا', 'ئايال', 'ئەر'], translation: 'Este é o meu irmão (mais velho). (lit. “aka” + “-m”, meu)' },
          { sentence: 'بۇ ___.', answer: 'كۆك', options: ['كۆك', 'كۈلرەڭ', 'بىنەپشە'], translation: 'Isto é azul.' },
        ],
        voice: {
          bot: 'كۆك ياخشىمۇ؟',
          botTranslation: 'O azul é bom?',
          expected: ['ھەئە، كۆك ياخشى.', 'كۆك ياخشى', 'ھەئە'],
          hint: "Responda “He'e, kök yaxshi” (sim, o azul é bom).",
        },
        communityPrompt: 'Apresente a sua família em uigur: “Bu ayal…”, “Bu er…”, “Bu akam…”, cada um seguido de “yaxshi”.',
      },
      {
        id: 'ug-u4-l2',
        title: 'ئۇزۇن، قىسقا، يىراق',
        kind: 'licao',
        words: ['ئۇزۇن', 'قىسقا', 'يىراق', 'يېقىن', 'يېڭى', 'كونا'],
        cloze: [
          { sentence: 'بۇ ___.', answer: 'ئۇزۇن', options: ['ئۇزۇن', 'قىسقا', 'كونا'], translation: 'Isto é longo.' },
          { sentence: 'ئۆي ___.', answer: 'يىراق', options: ['يىراق', 'يېقىن', 'يېڭى'], translation: 'A casa é longe.' },
          { sentence: 'بۇ كىتاب ___.', answer: 'يېڭى', options: ['يېڭى', 'كونا', 'قىسقا'], translation: 'Este livro é novo.' },
        ],
        voice: {
          bot: 'بۇ كىتاب يېڭىمۇ؟',
          botTranslation: 'Este livro é novo?',
          expected: ['ياق، بۇ كىتاب كونا.', 'بۇ كىتاب كونا', 'ياق'],
          hint: 'Responda que não, que o livro é velho/antigo: “yaq, bu kitab kona.”.',
        },
        communityPrompt: 'Descreva três coisas da sua casa em uigur usando “uzun”, “qisqa”, “yiraq”, “yëqin”, “yëngi” ou “kona”.',
      },
      {
        id: 'ug-u4-l3',
        title: 'Test: ئاكام، كۆك، يېقىن',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'ئاكىڭىز ياخشىمۇ؟ ئۆي يېقىنمۇ؟',
          botTranslation: 'O seu irmão (tratamento formal) está bem? A casa é perto?',
          expected: ['ھەئە، ئاكام ياخشى. ئۆي يېقىن.', 'ئاكام ياخشى', 'ئۆي يېقىن'],
          hint: 'Responda às duas perguntas: “He\'e, akam yaxshi. Öy yëqin.” (sim, meu irmão está bem; a casa é perto).',
        },
        communityPrompt: 'Escreva cinco frases misturando família, cores e distância: por exemplo “Bu akam”, “Kök yaxshi”, “Öy yëqin”.',
      },
    ],
  },
];
