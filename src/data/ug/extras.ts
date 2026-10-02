import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

/**
 * Textos de outros alunos esperando correção (erros típicos de brasileiros no uigur): ordem errada
 * da negação “emes” (que vem DEPOIS da palavra negada, ao contrário do “não” do português, que vem
 * antes), confusão entre “bu” (isto) e “ئۇ” (ele/ela), e o sufixo de plural “-lar” usado depois de
 * um numeral, quando a regra do uigur (citada na Wikipédia) é não usá-lo.
 */
export const COMMUNITY_UG: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'سىز ياخشىمۇ؟',
    content: 'مەن ئەمەس ياخشى.',
    reference: 'مەن ياخشى ئەمەس.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'دادا ياخشىمۇ؟',
    content: 'ھەئە، بۇ ياخشى.',
    reference: 'ھەئە، ئۇ ياخشى.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'تۆت كىتاب ياخشىمۇ؟',
    content: 'ھەئە، تۆت كىتابلار ياخشى.',
    reference: 'ھەئە، تۆت كىتاب ياخشى.',
  },
];

/** Cenário de conversa: um cumprimento formal (registro “siz”), seguido de uma pergunta sobre a casa. */
export const SCENARIOS_UG: ScenarioSeed[] = [
  {
    id: 'ug-s1',
    title: 'ياخشىمۇسىز!',
    emoji: '👋',
    cefr: 'A1',
    register: 'formal',
    persona: 'um colega do curso de uigur',
    description: 'Alguém cumprimenta você formalmente e pergunta sobre a sua casa. É uma conversa de registro formal: use “siz”, não “sen”.',
    turns: [
      {
        bot: 'ياخشىمۇسىز!',
        botTranslation: 'Olá! (cumprimento formal)',
        keywords: ['ھەئە', 'رەھمەت', 'ياخشى'],
        suggestions: ['ياخشىمۇسىز! رەھمەت، مەن ياخشى.', 'ھەئە، مەن ياخشى.'],
        registerBreakers: ['سەن'],
      },
      {
        bot: 'ئۆيىڭىز ياخشىمۇ؟',
        botTranslation: 'A sua casa (tratamento formal) é boa?',
        keywords: ['ياخشى', 'ھەئە', 'ياق'],
        suggestions: ['ھەئە، ئۆي ياخشى.', 'ياق، ئۆي ياخشى ئەمەس.'],
        registerBreakers: ['سەن'],
      },
    ],
  },
];

/**
 * Palavras do uigur com a raiz conhecida e o que as fontes consultadas (Wikcionário em inglês)
 * registram sobre a sua formação. O uigur não é parente do português, então nenhuma palavra é
 * “transparente” para quem fala português — a seção mostra a história de cada palavra mesmo assim.
 * Como nenhuma fonte consultada deu a grafia exata de palavras cognatas noutras línguas (só os
 * nomes das línguas, em alguns casos), a lista de cognatos fica vazia em vez de inventada.
 */
export const ETYMOLOGY_UG: EtymologySeed[] = [
  {
    word: 'سۈت',
    root_word: '*sǖt',
    origin_language: 'Prototurco',
    cognates: [],
    evolution_note:
      'O Wikcionário em inglês registra que “süt” (leite) vem do prototurco reconstruído *sǖt, por meio do chagatai (a língua literária turca da Ásia Central entre os séculos XV e XX, antepassada literária do uigur moderno). Não é uma palavra emprestada de outra família de línguas: já existia nessa forma desde o turco antigo.',
    transparent: false,
  },
  {
    word: 'مۈشۈك',
    root_word: '*pišik',
    origin_language: 'Prototurco comum',
    cognates: [],
    evolution_note:
      'O Wikcionário registra que “müshük” (gato) vem do prototurco comum reconstruído *pišik — uma raiz turca antiga, bem diferente da palavra “kedi” usada no turco da Turquia (que tem outra origem). Isso mostra que nem toda palavra do uigur tem uma parecida no turco: às vezes são raízes turcas diferentes, que sobreviveram em ramos diferentes da família.',
    transparent: false,
  },
  {
    word: 'رەھمەت',
    root_word: 'rehmet (chagatai)',
    origin_language: 'Árabe, por meio do chagatai',
    cognates: [],
    evolution_note:
      'O Wikcionário registra que “rehmet” (obrigado) vem do chagatai e, antes disso, do árabe — a língua clássica da religião e do direito islâmico, que deixou muitas palavras de uso diário no uigur, como em várias outras línguas turcas e no persa. A fonte consultada não deu a grafia árabe original, então este pacote não a reproduz.',
    transparent: false,
  },
  {
    word: 'ياخشىمۇسىز',
    root_word: 'ياخشى (yaxshi)',
    origin_language: 'Uigur (formação interna)',
    cognates: [],
    evolution_note:
      'O Wikcionário decompõe “yaxshimusiz” em três pedaços grudados: “yaxshi” (bom) + “-mu” (sufixo de pergunta) + “-siz” (você, tratamento formal) — ou seja, “[você] está bem?”, usado como cumprimento. É um ótimo exemplo de como o uigur, uma língua aglutinante, cria palavras novas colando sufixos numa raiz.',
    transparent: false,
  },
  {
    word: 'ئات',
    root_word: 'at (prototurco)',
    origin_language: 'Prototurco',
    cognates: [],
    evolution_note:
      'O Wikcionário registra três palavras diferentes, todas escritas “at” em uigur e vindas do turco antigo por meio do chagatai: uma quer dizer “cavalo” (também “cavalo” no jogo de xadrez), outra quer dizer “nome” (e também “substantivo”, no sentido gramatical), e uma terceira é uma forma do verbo “atmaq” (atirar). As três remontam a raízes prototurcas diferentes que, por acaso, caíram na mesma grafia — a fonte consultada cita o mesmo parentesco em uzbeque, cazaque, tuvano, iacuto e turco, mas sem dar a grafia exata em cada um. Neste pacote, “at” aparece só no sentido de “cavalo”, entre os animais, para não confundir com “nome”.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_UG: [string, string][] = [
  ['سىز ياخشىمۇ؟', 'Você está bem?'],
  ['ئۆيىڭىز ياخشىمۇ؟', 'A sua casa (tratamento formal) é boa?'],
  ['دادا ياخشىمۇ؟ ئانا ياخشىمۇ؟', 'O pai está bem? A mãe está bem?'],
  ['مۈشۈك ياخشىمۇ؟', 'O gato é bom, está bem?'],
];

export const SHADOWING_UG: [string, string][] = [
  ['ياخشىمۇسىز!', 'Olá! (cumprimento formal)'],
  ['ھەئە، مەن ياخشى.', 'Sim, eu estou bem.'],
  ['ياق، بۇ كىتاب ئەمەس.', 'Não, isto não é um livro.'],
  ['بىز بېيجىڭغا كەلدۇق.', 'Nós viemos a Pequim.'],
];
