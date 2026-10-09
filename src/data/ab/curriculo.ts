import type { UnitSeed } from '../types';

/**
 * Trilha do abecásio: por enquanto só as duas unidades do nível A1 (pacote incompleto — ver
 * `incomplete` em index.ts). Fontes: ver o cabeçalho de vocabulario.ts (todas consultadas em
 * 08/10/2026).
 */
export const UNITS_AB: UnitSeed[] = [
  {
    id: 'ab-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Бзиа збаша! Primeiro encontro',
    emoji: '👋',
    card: {
      id: 'ab-c1',
      title: 'Cinco alfabetos em 160 anos',
      emoji: '🏔️',
      history:
        'O abecásio (Аԥсуа бызшәа) é falado sobretudo na Abecásia, região separatista da Geórgia com reconhecimento internacional parcial, e por uma diáspora maior ainda na Turquia. Pertence à família caucasiana do noroeste (abecásio-adigue), ao lado do adigue e do abaza. A escrita trocou de base várias vezes: um alfabeto cirílico de 55 letras, criado por Pyotr von Uslar em 1862; um alfabeto latino, entre 1926 e 1938; um alfabeto de base georgiana, imposto entre 1938 e 1954 (um esforço de georgianização da época de Stalin); e, desde 1954, de volta ao cirílico, com uma última reforma em 1996 que simplificou a marca de labialização para uma letra só, “ә”.',
      culture_tip:
        'O próprio roteiro de frases do Wikivoyage em inglês avisa que o abecásio “é uma língua extremamente difícil de ler”, cheia de labialização: muitas consoantes mudam de som quando são seguidas da letra “ә” — para pronunciá-las, arredonde os lábios como quem vai assobiar, e só depois diga a consoante.',
      grammar_why:
        'O abecásio distingue “tu/você” pelo gênero de quem está sendo chamado, não de quem fala: “уара” é usado para falar com um homem, “бара” para falar com uma mulher — por isso a pergunta “qual é o seu nome?” tem duas formas diferentes, “Уара иухьӡузеи?” (a um homem) e “Бара ибыхьӡузеи?” (a uma mulher). O português não faz essa distinção: “você” serve para os dois.',
      grammar_examples: [
        ['Бзиа збаша! Ушҧаҟоу?', 'Oi! Como vai?'],
        ['Итабуп ибзианы!', 'Bem, obrigado!'],
        ['Уара иухьӡузеи?', 'Qual é o seu nome? (a um homem)'],
        ['Бара ибыхьӡузеи?', 'Qual é o seu nome? (a uma mulher)'],
      ],
      character_guide: [
        ['ә (labialização)', 'não é uma vogal sozinha: arredonda os lábios da consoante anterior, como quem vai assobiar', 'хәба (hәba) — “cinco”'],
        ['ҟ', 'um “k” ejetivo, dito bem no fundo da garganta', 'аҟаԧшь (aqhapsh) — “vermelho”'],
        ['ҵ', 'uma consoante ejetiva própria do abecásio, sem equivalente no português', 'аиқәаҵәа — “preto”'],
        ['ԧ', 'um “p” ejetivo', 'аҧшьба (ԧshba) — “quatro”'],
      ],
    },
    lessons: [
      {
        id: 'ab-u1-l1',
        title: 'Бзиа збаша, ушҧаҟоу',
        kind: 'licao',
        words: ['бзиа збаша', 'ушҧаҟоу', 'итабуп ибзианы', 'ааи', 'мап', 'абзиараз'],
        cloze: [
          { sentence: '___!', answer: 'Бзиа збаша', options: ['Бзиа збаша', 'Ааи', 'Мап'], translation: 'Oi!' },
          { sentence: '___?', answer: 'Ушҧаҟоу', options: ['Ушҧаҟоу', 'Абзиараз', 'Итабуп ибзианы'], translation: 'Como vai?' },
          { sentence: '— Ушҧаҟоу? — ___!', answer: 'Итабуп ибзианы', options: ['Итабуп ибзианы', 'Мап', 'Абзиараз'], translation: '— Como vai? — Bem, obrigado!' },
        ],
        voice: {
          bot: 'Бзиа збаша! Ушҧаҟоу?',
          botTranslation: 'Oi! Como vai?',
          expected: ['Бзиа збаша! Итабуп ибзианы.', 'Итабуп ибзианы.', 'Бзиа збаша'],
          hint: 'Devolva a saudação e diga que está bem, com “Итабуп ибзианы”.',
        },
        communityPrompt: 'Escreva uma saudação (Бзиа збаша), pergunte como alguém está (Ушҧаҟоу) e responda que está bem (Итабуп ибзианы).',
      },
      {
        id: 'ab-u1-l2',
        title: 'Сара, уара, бара',
        kind: 'licao',
        words: ['сара', 'уара', 'бара', 'ҳара', 'шәара', 'сыхӡуп'],
        cloze: [
          { sentence: 'Сара Лину ___.', answer: 'сыхӡуп', options: ['сыхӡуп', 'истахуп', 'ушҧаҟоу'], translation: 'Eu me chamo Linu.' },
          { sentence: '___ иухьӡузеи?', answer: 'Уара', options: ['Уара', 'Бара', 'Ҳара'], translation: 'Qual é o seu nome? (a um homem)' },
          { sentence: '___ ибыхьӡузеи?', answer: 'Бара', options: ['Бара', 'Уара', 'Шәара'], translation: 'Qual é o seu nome? (a uma mulher)' },
        ],
        voice: {
          bot: 'Уара иухьӡузеи?',
          botTranslation: 'Qual é o seu nome? (perguntado a um homem)',
          expected: ['Сара Лину сыхӡуп.', 'Лину сыхӡуп.'],
          hint: 'Diga seu nome com “Сара … сыхӡуп”.',
        },
        communityPrompt: 'Apresente-se com “Сара … сыхӡуп” e pergunte o nome de alguém: “Уара…?” (a um homem) ou “Бара…?” (a uma mulher).',
      },
      {
        id: 'ab-u1-l3',
        title: 'Prova: Бзиа збаша, сара',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Бзиа збаша! Уара иухьӡузеи?',
          botTranslation: 'Oi! Qual é o seu nome?',
          expected: ['Бзиа збаша! Сара Лину сыхӡуп.', 'Сара Лину сыхӡуп.'],
          hint: 'Devolva a saudação e diga seu nome, com “Сара … сыхӡуп”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: saudação (Бзиа збаша), seu nome (Сара … сыхӡуп) e uma despedida (Абзиараз).',
      },
    ],
  },
  {
    id: 'ab-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ача, ашә, аҟаԧшь',
    emoji: '🍞',
    card: {
      id: 'ab-c2',
      title: 'Sem casos — mas um verbo que faz quase tudo',
      emoji: '🧩',
      history:
        'O abecásio cria palavras novas sobretudo por composição: um capítulo acadêmico sobre a formação de palavras no abecásio (Chirikba, no manual de word-formation da de Gruyter) mostra, por exemplo, que “eletricidade” (афымца) nasce da junção de “афы” (relâmpago) com “амца” (fogo) — “fogo-relâmpago”. É um padrão comum na língua: compor palavras simples em vez de criar raízes novas.',
      culture_tip:
        'A composição também aparece em palavras do dia a dia: várias análises acadêmicas do abecásio mostram substantivos formados juntando duas palavras já conhecidas, em vez de usar um sufixo — um jeito de criar vocabulário bem diferente do português, que recorre mais a prefixos e sufixos latinos.',
      grammar_why:
        'O abecásio quase não tem casos gramaticais: ao contrário do russo ou do checheno, os substantivos não trocam de terminação para marcar sujeito, objeto ou posse. Quem faz esse trabalho é o verbo, que leva prefixos indicando quem faz e quem recebe a ação, e a ORDEM das palavras — é por isso que a língua é chamada de “ergativa”, mas sem um único caso gramatical para mostrar isso nos substantivos.',
      grammar_examples: [
        ['Сара истахуп.', 'Eu quero.'],
        ['Ача, ашә, аҩы?', 'Pão, queijo ou vinho?'],
        ['Аӡы.', 'Água.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ab-u2-l1',
        title: 'Ача, ашә, аҩы',
        kind: 'licao',
        words: ['ача', 'ашә', 'аҩы', 'акәтыжь', 'апсыӡ', 'истахуп'],
        cloze: [
          { sentence: 'Сара ___.', answer: 'истахуп', options: ['истахуп', 'сыхӡуп', 'ушҧаҟоу'], translation: 'Eu quero.' },
          { sentence: '___!', answer: 'Ача', options: ['Ача', 'Ашә', 'Аҩы'], translation: 'Pão!' },
          { sentence: '___!', answer: 'Апсыӡ', options: ['Апсыӡ', 'Акәтыжь', 'Ашә'], translation: 'Peixe!' },
        ],
        voice: {
          bot: 'Ача, ашә, аҩы?',
          botTranslation: 'Pão, queijo ou vinho?',
          expected: ['Ача.', 'Ашә.', 'Аҩы.', 'Сара истахуп.'],
          hint: 'Escolha um: diga “Ача”, “Ашә” ou “Аҩы”, ou simplesmente “Сара истахуп” (eu quero).',
        },
        communityPrompt: 'Escreva os nomes de três comidas em abecásio: pão (ача), queijo (ашә) e vinho (аҩы).',
      },
      {
        id: 'ab-u2-l2',
        title: 'Аҟаԧшь, аиаҵәа, аӡы',
        kind: 'licao',
        words: ['аиқәаҵәа', 'ашкәакәа', 'аҟаԧшь', 'аиаҵәа', 'аӡы', 'амца'],
        cloze: [
          { sentence: '___!', answer: 'Аҟаԧшь', options: ['Аҟаԧшь', 'Аиқәаҵәа', 'Ашкәакәа'], translation: 'Vermelho!' },
          { sentence: '___!', answer: 'Аиаҵәа', options: ['Аиаҵәа', 'Аҟаԧшь', 'Амца'], translation: 'Azul!' },
          { sentence: '___!', answer: 'Аӡы', options: ['Аӡы', 'Амца', 'Аиқәаҵәа'], translation: 'Água!' },
        ],
        voice: {
          bot: 'Аӡы?',
          botTranslation: 'Água?',
          expected: ['Ааи, аӡы.', 'Ааи.', 'Аӡы'],
          hint: 'Responda “Ааи” (sim) para confirmar “аӡы” (água).',
        },
        communityPrompt: 'Escreva três cores em abecásio: preto (аиқәаҵәа), branco (ашкәакәа) e vermelho (аҟаԧшь).',
      },
      {
        id: 'ab-u2-l3',
        title: 'Prova: comida e cores',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Сара истахуп. Бара?',
          botTranslation: 'Eu quero. E você (a uma mulher)?',
          expected: ['Сара истахуп.'],
          hint: 'Diga que você também quer algo, com “Сара истахуп”.',
        },
        communityPrompt: 'Escreva cinco palavras novas: duas comidas, duas cores e “água” ou “fogo”.',
      },
    ],
  },
];
