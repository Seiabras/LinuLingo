import type { UnitSeed } from '../types';

/**
 * Trilha do jejuense: por enquanto só as duas unidades do nível A1 (pacote incompleto — ver
 * `incomplete` em index.ts). Fontes: ver o cabeçalho de vocabulario.ts (todas consultadas em
 * 09/10/2026) — o Jeju-eo Talking Dictionary (Swarthmore/Living Tongues), a Wikipédia em inglês
 * ("Jeju language") e a página de gramática do curso de linguística de campo da Swarthmore
 * (wikis.swarthmore.edu/ling073/Jeju/Grammar, que resume Yang, Yang & O'Grady, "Jejueo: The
 * Language of Korea's Jeju Island", University of Hawai'i Press, 2020/2019).
 */
export const UNITS_JJE: UnitSeed[] = [
  {
    id: 'jje-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: '혼저옵서예! Primeiro encontro',
    emoji: '👋',
    card: {
      id: 'jje-c1',
      title: 'Uma língua própria, não um “jeito de falar” do coreano',
      emoji: '🏝️',
      history:
        'O jejuense (제주말, Jeju-mal) é falado na ilha de Jeju, ao sul da península coreana, por cerca de 5 a 10 mil pessoas fluentes — quase todas com mais de 70 anos. A UNESCO classifica a língua como criticamente ameaçada desde 2010. Por décadas foi chamada só de “dialeto de Jeju”, mas o Ethnologue e o Glottolog já dão a ela um código próprio (jje), separado do coreano, dentro da mesma família coreânica — a diferença entre as duas é grande o bastante pra não haver entendimento mútuo automático. O jejuense preserva uma vogal do coreano antigo (a “ㆍ”, arae-a) que o coreano padrão perdeu há séculos — por cuidado com a renderização, este pacote não usa essa vogal em nenhuma palavra, mas ela é uma das marcas mais estudadas da língua.',
      culture_tip:
        '“혼저옵서예!” é a saudação de boas-vindas mais conhecida de Jeju — tão associada à ilha que aparece em placas de turismo e letreiros de recepção; o equivalente no coreano padrão seria algo como “어서 오세요” (seja bem-vindo).',
      grammar_why:
        'O jejuense tem palavras BÁSICAS de família completamente diferentes do coreano padrão: “mãe” é “어멍” (não “어머니”), “pai” é “아방” (não “아버지”) — uma diferença bem mais profunda do que um simples “jeito de falar”, já que são palavras do vocabulário mais essencial, não gírias ou formalidades.',
      grammar_examples: [
        ['혼저옵서예!', 'Oi, bem-vindo!'],
        ['고맙수다!', 'Obrigado!'],
        ['나는 린주라마씀.', 'Eu sou o Linu. (lit. “eu+tópico Linu+sufixo enfático”)'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'jje-u1-l1',
        title: '혼저옵서예, 고맙수다',
        kind: 'licao',
        words: ['혼저옵서예', '고맙수다', '나', '느', '우리', '이거'],
        cloze: [
          { sentence: '___!', answer: '혼저옵서예', options: ['혼저옵서예', '고맙수다', '나'], translation: 'Oi, bem-vindo!' },
          { sentence: '___!', answer: '고맙수다', options: ['고맙수다', '혼저옵서예', '느'], translation: 'Obrigado!' },
          { sentence: '___.', answer: '나', options: ['나', '느', '우리'], translation: 'Eu.' },
        ],
        voice: {
          bot: '혼저옵서예!',
          botTranslation: 'Oi, bem-vindo!',
          expected: ['고맙수다!'],
          hint: 'Agradeça a boas-vindas com “고맙수다!”.',
        },
        communityPrompt: 'Escreva a saudação de boas-vindas (혼저옵서예) e um agradecimento (고맙수다).',
      },
      {
        id: 'jje-u1-l2',
        title: '누게, 무싱거, 어멍',
        kind: 'licao',
        words: ['저거', '누게', '무싱거', '어멍', '아방', '사름'],
        cloze: [
          { sentence: '___?', answer: '누게', options: ['누게', '무싱거', '저거'], translation: 'Quem?' },
          { sentence: '___?', answer: '무싱거', options: ['무싱거', '누게', '이거'], translation: 'O quê?' },
          { sentence: '___.', answer: '어멍', options: ['어멍', '아방', '사름'], translation: 'Mãe.' },
        ],
        voice: {
          bot: '아방?',
          botTranslation: 'Pai?',
          expected: ['어멍.', '아방.'],
          hint: 'Responda com uma palavra de família: “어멍” (mãe) ou “아방” (pai).',
        },
        communityPrompt: 'Escreva duas palavras de família: mãe (어멍) e pai (아방).',
      },
      {
        id: 'jje-u1-l3',
        title: 'Prova: 혼저옵서예, 나',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: '혼저옵서예!',
          botTranslation: 'Oi, bem-vindo!',
          expected: ['고맙수다! 나는 린주라마씀.'],
          hint: 'Agradeça e diga seu nome com “나는 ___ 라마씀” (eu sou ___).',
        },
        communityPrompt: 'Escreva uma apresentação: a saudação (혼저옵서예), seu nome (나는 ___ 라마씀) e um agradecimento (고맙수다).',
      },
    ],
  },
  {
    id: 'jje-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: '호나, 둘, 쉿, 늿: pessoas e números',
    emoji: '🔢',
    card: {
      id: 'jje-c2',
      title: 'Um sufixo que o coreano padrão não tem',
      emoji: '📐',
      history:
        'A maior parte do que se sabe hoje sobre a gramática do jejuense vem de um esforço de documentação recente: o Jeju-eo Talking Dictionary (Swarthmore College e Living Tongues Institute, 2014) registrou palavras com áudio de falantes nativos, e o livro “Jejueo: The Language of Korea\'s Jeju Island” (Changyong Yang, Sejung Yang e William O\'Grady, University of Hawai\'i Press, 2020) é o primeiro livro em inglês dedicado inteiramente à gramática da língua. Sem esses dois projetos recentes, o jejuense teria muito menos material em inglês do que até o checheno ou o abecásio, apesar de ser falado dentro da Coreia do Sul.',
      culture_tip:
        'Os numerais pra CONTAR objetos no jejuense (호나, 둘, 쉿, 늿…) são claramente parecidos com os numerais nativos do coreano padrão (하나, 둘, 셋, 넷) — mas não idênticos: é um bom exemplo de como duas línguas-irmãs guardam palavras parecidas, mas não iguais, depois de séculos separadas pelo mar.',
      grammar_why:
        'O jejuense tem um sufixo de ênfase/polidez que o coreano padrão não usa assim: “-마씸”/“-마씀”, que se prende depois do predicado (“바다라마씸”, “é o mar”, “소리라마씸”, “é o som”) — documentado pela página de gramática da Swarthmore como um marcador de ênfase, não só de polidez comum. Este pacote usa esse mesmo sufixo pra montar a apresentação “나는 ___ 라마씀” (eu sou ___).',
      grammar_examples: [
        ['호나, 둘, 쉿, 늿.', 'Um, dois, três, quatro.'],
        ['어멍, 아방.', 'Mãe, pai.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'jje-u2-l1',
        title: '예펜, 소나이, 호나',
        kind: 'licao',
        words: ['예펜', '소나이', '호나', '둘', '쉿', '늿'],
        cloze: [
          { sentence: '___.', answer: '예펜', options: ['예펜', '소나이', '사름'], translation: 'Mulher.' },
          { sentence: '___.', answer: '호나', options: ['호나', '둘', '쉿'], translation: 'Um.' },
          { sentence: '___.', answer: '늿', options: ['늿', '쉿', '둘'], translation: 'Quatro.' },
        ],
        voice: {
          bot: '호나, 둘, 쉿...',
          botTranslation: 'Um, dois, três...',
          expected: ['늿.'],
          hint: 'Continue a contagem: depois de 쉿 (três) vem 늿 (quatro).',
        },
        communityPrompt: 'Conte de 호나 (um) até 늿 (quatro) em jejuense.',
      },
      {
        id: 'jje-u2-l2',
        title: '먹다, 보다, 오다',
        kind: 'licao',
        words: ['먹다', '물다', '보다', '알다', '오다', '해'],
        cloze: [
          { sentence: '___.', answer: '먹다', options: ['먹다', '물다', '보다'], translation: 'Comer.' },
          { sentence: '___.', answer: '오다', options: ['오다', '알다', '보다'], translation: 'Vir.' },
          { sentence: '___.', answer: '해', options: ['해', '별', '물'], translation: 'Sol.' },
        ],
        voice: {
          bot: '먹다?',
          botTranslation: 'Comer?',
          expected: ['먹다.'],
          hint: 'Repita a palavra “먹다” (comer).',
        },
        communityPrompt: 'Escreva três verbos que você aprendeu: 먹다 (comer), 보다 (ver) e 오다 (vir).',
      },
      {
        id: 'jje-u2-l3',
        title: 'Prova: pessoas e números',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: '어멍, 아방, 예펜...',
          botTranslation: 'Mãe, pai, mulher...',
          expected: ['소나이.'],
          hint: 'Complete a lista com outra palavra de pessoa: “소나이” (homem).',
        },
        communityPrompt: 'Escreva sobre sua família ou conte até 늿 (quatro) em jejuense.',
      },
    ],
  },
];
