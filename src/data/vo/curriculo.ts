import type { UnitSeed } from '../types';

/**
 * Trilha do volapük: só as duas unidades do nível A1 por enquanto (ver `incomplete` em index.ts) —
 * a segunda língua construída do app com curso de verdade, depois do esperanto (08/10/2026). Ensina
 * a forma reformada de Arie de Jong (1931, "Volapük nulik" — ver index.ts). Fontes: Wikipédia em
 * inglês, "Volapük" (história, gramática); Omniglot, "Useful phrases in Volapük"
 * (https://www.omniglot.com/language/phrases/volapuk.php); andydrummond.net/Volapuk (vocabulário).
 */
export const UNITS_VO: UnitSeed[] = [
  {
    id: 'vo-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Glidö, flen!',
    emoji: '👋',
    card: {
      id: 'vo-c1',
      title: 'A primeira língua construída que teve sucesso de verdade',
      emoji: '🌐',
      history:
        'O volapük nasceu em 1879/1880, criado pelo padre católico alemão Johann Martin Schleyer, em Baden. Antes do esperanto, foi a PRIMEIRA língua construída internacional a conquistar uma comunidade de verdade: por volta de 1889, chegou a ter cerca de 283 clubes, 25 revistas e 316 livros de ensino em 25 línguas, com quase um milhão de pessoas envolvidas de alguma forma. O terceiro congresso internacional de volapük, em 1889, foi falado inteiramente na língua — a primeira vez na história que isso aconteceu numa convenção internacional, dezesseis anos antes do primeiro congresso de esperanto.',
      culture_tip:
        'O movimento entrou em crise rápido: uma disputa interna sobre reformar ou não a língua (entre o criador, Schleyer, que queria manter o controle sobre ela, e parte da Academia, que queria simplificá-la) coincidiu com a ascensão do esperanto, lançado em 1887 — mais simples de aprender. Boa parte da comunidade do volapük migrou pro esperanto, e o movimento quase desapareceu.',
      grammar_why:
        'O acento tônico do volapük cai SEMPRE na última sílaba de qualquer palavra — o oposto exato da regra do esperanto (sempre na penúltima). "Volapük" se diz vo-la-PÜK.',
      grammar_examples: [
        ['Volapük', 'vo-la-PÜK (a própria palavra: "vol", mundo, + "pük", língua/fala)'],
        ['famül', 'fa-MÜL (família)'],
      ],
      character_guide: [
        ['ä', 'som novo: entre "a" e "é", como o alemão', 'äbinom ("é-bi-NOM", ele era)'],
        ['ö', 'som novo: como o "eu" do francês/alemão', 'löfön ("leu-FÖN", amar)'],
        ['ü', 'som novo: "i" com lábios arredondados', 'Volapük ("vo-la-PÜK")'],
        ['c', 'sempre "tch", nunca "k" nem "s"', 'cil ("tchil", criança)'],
      ],
    },
    lessons: [
      {
        id: 'vo-u1-l1',
        title: 'Glidö, danö!',
        kind: 'licao',
        words: ['glidö', 'adyö', 'danö', 'si', 'nö', 'nem'],
        cloze: [
          { sentence: '___, flen!', answer: 'Glidö', options: ['Glidö', 'Adyö', 'Danö'], translation: 'Olá, amigo!' },
          { sentence: '___, flen!', answer: 'Danö', options: ['Danö', 'Glidö', 'Nö'], translation: 'Obrigado, amigo!' },
          { sentence: 'Lio panemol-li? ___ oba binon Lina.', answer: 'Nem', options: ['Nem', 'Danö', 'Si'], translation: 'Qual é o seu nome? Meu nome é Lina.' },
        ],
        voice: {
          bot: 'Glidö! Lio panemol-li?',
          botTranslation: 'Olá! Qual é o seu nome?',
          expected: ['Nem oba binon Ana.', 'nem oba binon', 'glidö'],
          hint: 'Responda com "Nem oba binon…" (meu nome é…) e diga seu nome.',
        },
        communityPrompt: 'Apresente-se em volapük: diga "Glidö!" e depois "Nem oba binon…" com o seu nome.',
      },
      {
        id: 'vo-u1-l2',
        title: 'Ob, ol, om, of',
        kind: 'licao',
        words: ['ob', 'ol', 'om', 'of', 'binön', 'flen'],
        cloze: [
          { sentence: '___ binob flen.', answer: 'Ob', options: ['Ob', 'Ol', 'Of'], translation: 'Eu sou amigo(a).' },
          { sentence: '___ binol flen gudik.', answer: 'Ol', options: ['Ol', 'Ob', 'Om'], translation: 'Você é um bom amigo.' },
          { sentence: 'Flen oba ___ gudik.', answer: 'binon', options: ['binon', 'binol', 'binob'], translation: 'Meu amigo é bom.' },
        ],
        voice: {
          bot: 'Lio stadol-li?',
          botTranslation: 'Como você está?',
          expected: ['Gudiko, danö! Ed ol-li?', 'gudiko, danö', 'ob binob gudik'],
          hint: 'Responda com "Gudiko, danö!" (bem, obrigado) e devolva a pergunta com "Ed ol-li?" (e você?).',
        },
        communityPrompt: 'Pergunte como alguém está com "Lio stadol-li?" e responda com "Gudiko, danö!".',
      },
      {
        id: 'vo-u1-l3',
        title: 'Prova: primeiros passos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Glidö! Lio panemol-li? Ed lio stadol-li?',
          botTranslation: 'Olá! Qual é o seu nome? E como você está?',
          expected: ['Nem oba binon Ana. Gudiko, danö!', 'nem oba binon', 'danö'],
          hint: 'Diga seu nome com "Nem oba binon…" e como está com "Gudiko, danö!".',
        },
        communityPrompt: 'Escreva uma apresentação curta em volapük: saudação ("Glidö!"), seu nome e um agradecimento ("Danö!").',
      },
    ],
  },
  {
    id: 'vo-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Famül oba e dom oba',
    emoji: '👪',
    card: {
      id: 'vo-c2',
      title: 'Uma reforma salvou a língua: a forma que você está aprendendo',
      emoji: '📘',
      history:
        'Na década de 1920, o holandês Arie de Jong, com o apoio do pequeno grupo de falantes que restava, revisou a língua a fundo: simplificou a gramática, eliminou formas verbais raras e gêneros desnecessários, e devolveu o som "r" (que Schleyer tinha abolido em 1879/1880 achando-o difícil pra algumas crianças, idosos e povos asiáticos pronunciarem). A reforma foi publicada em 1931 e ficou conhecida como "Volapük nulik" (volapük novo) — é a forma usada neste curso, por ter mais material confiável disponível hoje, inclusive na Wikipédia em volapük.',
      culture_tip:
        'Com o "r" de volta, palavras ficaram mais parecidas com a língua de origem: "lömib" (chuva, na forma original de Schleyer) virou "rein" na reforma de de Jong — bem mais perto do inglês "rain" e do alemão "Regen".',
      grammar_why:
        'O volapük tem 4 casos gramaticais, como o alemão: nominativo (sujeito, sem marca), genitivo -a (posse, "meu" é "oba" = "ob" + -a), dativo -e e acusativo -i (objeto direto). "Fat löfom soni" (o pai ama o filho): "son" ganha -i porque é quem recebe a ação de amar.',
      grammar_examples: [
        ['Fat löfom soni.', 'O pai ama o filho.'],
        ['Famül oba binon gretik.', 'Minha família é grande.'],
      ],
      character_guide: [
        ['r', 'vibrado simples — devolvido à língua por Arie de Jong em 1931', 'rein ("rein", chuva)'],
        ['j', '"j"/"x", conforme o som vizinho', 'jöl ("jol"/"xol", oito)'],
      ],
    },
    lessons: [
      {
        id: 'vo-u2-l1',
        title: 'Famül oba',
        kind: 'licao',
        words: ['famül', 'fat', 'mot', 'blod', 'sör', 'labön'],
        cloze: [
          { sentence: 'Fat oba binom ___.', answer: 'gudik', options: ['gudik', 'badik', 'gretik'], translation: 'Meu pai é bom.' },
          { sentence: 'Ob ___ bal blodi.', answer: 'labob', options: ['labob', 'binob', 'golob'], translation: 'Eu tenho um irmão.' },
          { sentence: '___ oba binon gretik.', answer: 'Famül', options: ['Famül', 'Dom', 'Flen'], translation: 'Minha família é grande.' },
        ],
        voice: {
          bot: 'Labol-li blodi u söri?',
          botTranslation: 'Você tem irmão ou irmã?',
          expected: ['Si, ob labob blodi e söri.', 'ob labob', 'blod'],
          hint: 'Responda com "Si, ob labob…" (sim, eu tenho…) ou só "Nö." (não).',
        },
        communityPrompt: 'Descreva sua família em volapük: diga se tem irmão (blod) ou irmã (sör), com "Ob labob…".',
      },
      {
        id: 'vo-u2-l2',
        title: 'Dom oba',
        kind: 'licao',
        words: ['dom', 'dog', 'kat', 'vat', 'bod', 'gretik'],
        cloze: [
          { sentence: 'Dom oba binon ___.', answer: 'smalik', options: ['smalik', 'gretik', 'badik'], translation: 'Minha casa é pequena.' },
          { sentence: 'Ob dlinob ___.', answer: 'vati', options: ['vati', 'vat', 'bodi'], translation: 'Eu bebo água.' },
          { sentence: '___ binon gudik.', answer: 'Bod', options: ['Bod', 'Dog', 'Vat'], translation: 'O pão é bom.' },
        ],
        voice: {
          bot: 'Labol-li dogi u kati?',
          botTranslation: 'Você tem cachorro ou gato?',
          expected: ['Ob labob dogi.', 'ob labob', 'e kati'],
          hint: 'Use "Ob labob…" e lembre do -i no final da palavra (o caso acusativo) pra dizer o que você tem.',
        },
        communityPrompt: 'Descreva sua casa em duas frases: se é grande (gretik) ou pequena (smalik), e o que tem nela.',
      },
      {
        id: 'vo-u2-l3',
        title: 'Prova: família e casa',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Dom oba binon gretik. Lio binon-li dom ola, gretik u smalik?',
          botTranslation: 'Minha casa é grande. Como é a sua casa, grande ou pequena?',
          expected: ['Dom oba binon smalik, ab famül oba binon gretik.', 'dom oba', 'famül oba'],
          hint: 'Diga como é sua casa com "Dom oba binon…" e fale da família com "Famül oba binon…".',
        },
        communityPrompt: 'Escreva um parágrafo curto apresentando sua família e sua casa em volapük, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
];
