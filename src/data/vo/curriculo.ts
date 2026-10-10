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
  {
    id: 'vo-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Adelo, vien e dokel',
    emoji: '🌤️',
    card: {
      id: 'vo-c3',
      title: 'Mais de cem mil páginas: a Wikipédia em volapük',
      emoji: '🌐',
      history:
        'Em dezembro de 2007, a Wikipédia em volapük chegou a superar a do esperanto em número de artigos, subindo ao 15º lugar entre todas as edições, com mais de 112 mil páginas — a maioria gerada por um programa automático que criava verbetes geográficos curtos, sobretudo de pequenas vilas, numa tentativa de dar mais visibilidade à língua. Em março de 2013, a Wikipédia em esperanto, com uma comunidade de editores bem mais ativa, já tinha 176.792 artigos, contra 119.091 da em volapük. Hoje ela é a 106ª maior de todas (56.121 artigos) — ainda a terceira maior entre as línguas construídas, depois do esperanto e do Ido.',
      culture_tip:
        'O vocabulário de clima e profissões deste nível segue o mesmo manual que sustentou boa parte da A1: o "Hand-book of Volapük", de Charles E. Sprague (1888). Fontes confiáveis pro volapük moderno continuam raras, então esse dicionário de mais de cem anos ainda é consultado hoje por quem estuda a língua.',
      grammar_why:
        'O imperativo troca a terminação de pessoa do verbo por -öd (ordem comum): "Gololöd!" é "vá!". É assim que se dá uma instrução direta em volapük, sem precisar de nenhuma palavra extra como "por favor" (essa vem separada, com "begö").',
      grammar_examples: [
        ['Gololöd!', 'Vá!'],
        ['Yuföd!', 'Ajude!'],
      ],
      character_guide: [
        ['sílaba tônica em palavras de 3+ sílabas', 'continua sempre a ÚLTIMA', 'gödel ("gö-DEL", manhã)'],
        ['y (nunca aparece)', 'o alfabeto reformado não usa "y" em nenhuma palavra nativa', '(nenhuma palavra deste curso tem "y")'],
      ],
    },
    lessons: [
      {
        id: 'vo-u3-l1',
        title: 'Adelo, odelo, ädelo',
        kind: 'licao',
        words: ['adelo', 'odelo', 'ädelo', 'gödel', 'vien', 'hitik'],
        cloze: [
          { sentence: '___, ob vobob.', answer: 'Adelo', options: ['Adelo', 'Odelo', 'Ädelo'], translation: 'Hoje, eu trabalho.' },
          { sentence: '___, ob golob.', answer: 'Odelo', options: ['Odelo', 'Adelo', 'Ädelo'], translation: 'Amanhã, eu vou/irei.' },
          { sentence: 'Sol binon ___.', answer: 'hitik', options: ['hitik', 'gudik', 'badik'], translation: 'O sol é quente.' },
        ],
        voice: {
          bot: 'Lio binon-li vien adelo?',
          botTranslation: 'Como está o vento hoje?',
          expected: ['Vien binon gretik adelo.', 'vien binon', 'adelo'],
          hint: 'Descreva o vento de hoje com "Vien binon…" e um adjetivo que você já conhece.',
        },
        communityPrompt: 'Diga o que você faz hoje (adelo), amanhã (odelo) e ontem (ädelo) em volapük, usando "ob vobob", "ob golob" etc.',
      },
      {
        id: 'vo-u3-l2',
        title: 'Lömib, nif e dokel',
        kind: 'licao',
        words: ['glad', 'lömib', 'nif', 'dokel', 'tidel', 'vobön'],
        cloze: [
          { sentence: '___ binon badik.', answer: 'Lömib', options: ['Lömib', 'Nif', 'Glad'], translation: 'A chuva é má (ruim).' },
          { sentence: 'Ob logob ___.', answer: 'gladi', options: ['gladi', 'vini', 'bodi'], translation: 'Eu vejo o gelo.' },
          { sentence: 'Tidel ___ büki.', answer: 'labon', options: ['labon', 'vobon', 'golon'], translation: 'O professor tem um livro.' },
        ],
        voice: {
          bot: 'Dokel binon-li flen ola?',
          botTranslation: 'O médico é seu amigo?',
          expected: ['Si, dokel binon flen oba.', 'si, dokel', 'flen oba'],
          hint: 'Responda com "Si, dokel binon flen oba." ou "Nö."',
        },
        communityPrompt: 'Fale de uma profissão (dokel, tidel) com "binon" e diga se essa pessoa é sua amiga (flen oba).',
      },
      {
        id: 'vo-u3-l3',
        title: 'Prova: tempo e clima',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Adelo, vien binon gretik, ab sol binon hitik. Lio binon-li gödel ola?',
          botTranslation: 'Hoje, o vento está forte, mas o sol está quente. Como está a sua manhã?',
          expected: ['Gödel oba binon gudik.', 'gödel oba', 'ob vobob'],
          hint: 'Descreva sua manhã com "Gödel oba binon…" e diga se você trabalha hoje (vobön).',
        },
        communityPrompt: 'Escreva um parágrafo curto sobre seu dia: o clima (vien, lömib, nif, sol), o que você faz (vobön, golön) e uma profissão que você conhece.',
      },
    ],
  },
  {
    id: 'vo-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Mon, kap e beat',
    emoji: '🛍️',
    card: {
      id: 'vo-c4',
      title: 'Dinheiro disfarçado: o mesmo truque de "löf" e "pöp"',
      emoji: '💰',
      history:
        'O vocabulário de compras deste nível segue o mesmo método de Schleyer que a A1 já mostrou: raízes principalmente do inglês, cortadas pra uma sílaba e disfarçadas (sem o som "r", entre outras mudanças) pra nenhuma nacionalidade ter vantagem por já conhecer a palavra. "Mon" (dinheiro) segue o mesmo padrão de "löf" (amar, de "love") e "pöp" (papel, de "paper"), já vistos na A1.',
      culture_tip:
        'O vocabulário de corpo e compras também vem do "Hand-book of Volapük", de Charles E. Sprague (1888) — o mesmo manual de mais de cem anos que sustenta boa parte do curso, por fontes confiáveis pro volapük moderno continuarem raras.',
      grammar_why:
        'O genitivo -a, que marca posse em qualquer substantivo, também vale pros pronomes: "ob" (eu) → "oba" (meu). O curso já usa "oba" desde a A1.1 ("Nem oba binon Lina"); agora a regra vale pra "ola" (seu), "oma" (dele) e assim por diante.',
      grammar_examples: [
        ['Nam oba binon smalik.', 'Minha mão é pequena.'],
        ['Beat oba binon gudik.', 'Minha felicidade é boa (eu estou feliz).'],
      ],
      character_guide: [
        ['z', 'como em "zebra", nunca como "s"', 'zunik ("zu-NIK", bravo)'],
        ['ü depois de consoante', 'sempre o som novo (arredondado), nunca "u" comum', 'suäm ("su-ÄM", preço)'],
      ],
    },
    lessons: [
      {
        id: 'vo-u4-l1',
        title: 'Mon e suäm',
        kind: 'licao',
        words: ['mon', 'suäm', 'delidik', 'nedelidik', 'lemön', 'selön'],
        cloze: [
          { sentence: 'Ob labob ___.', answer: 'moni', options: ['moni', 'suämi', 'bodi'], translation: 'Eu tenho dinheiro.' },
          { sentence: 'Vin binon ___.', answer: 'delidik', options: ['delidik', 'nedelidik', 'gretik'], translation: 'O vinho é caro.' },
          { sentence: 'Ob ___ bodi.', answer: 'lemob', options: ['lemob', 'selob', 'vobob'], translation: 'Eu compro pão.' },
        ],
        voice: {
          bot: 'Liomödoto at frädon-li?',
          botTranslation: 'Quanto custa isto?',
          expected: ['Suäm binon smalik.', 'suäm binon', 'nedelidik'],
          hint: 'Responda com "Suäm binon…" e diga se o preço é alto (delidik) ou baixo (nedelidik).',
        },
        communityPrompt: 'Descreva uma compra em volapük: diga o que você compra (ob lemob…) e se o preço é caro (delidik) ou barato (nedelidik).',
      },
      {
        id: 'vo-u4-l2',
        title: 'Kap, nam e beat',
        kind: 'licao',
        words: ['kap', 'nam', 'nud', 'beat', 'zunik', 'studön'],
        cloze: [
          { sentence: 'Kap oba binon ___.', answer: 'gretik', options: ['gretik', 'smalik', 'badik'], translation: 'Minha cabeça é grande.' },
          { sentence: 'Ob ___ Volapüki.', answer: 'studob', options: ['studob', 'vobob', 'lemob'], translation: 'Eu estudo volapuque.' },
          { sentence: 'Kat binon ___.', answer: 'zunik', options: ['zunik', 'gudik', 'beat'], translation: 'O gato está bravo.' },
        ],
        voice: {
          bot: 'Lio stadol-li adelo? Beat ola binon-li gudik?',
          botTranslation: 'Como você está hoje? A sua felicidade está boa?',
          expected: ['Beat oba binon gudik. Ob studob Volapüki.', 'beat oba', 'ob studob'],
          hint: 'Responda com "Beat oba binon…" e diga o que você estuda (ob studob…).',
        },
        communityPrompt: 'Descreva seu corpo e seus sentimentos em volapük: use "kap", "nam" ou "nud", e diga se "beat oba binon gudik" (sua felicidade está boa).',
      },
      {
        id: 'vo-u4-l3',
        title: 'Prova: compras e sentimentos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ob lemob bodi, ab bod binon delidik. Lio stadol-li?',
          botTranslation: 'Eu compro pão, mas o pão está caro. Como você está?',
          expected: ['Beat oba binon gudik, ab mon oba binon smalik.', 'beat oba', 'mon oba'],
          hint: 'Diga como está sua felicidade (beat oba binon…) e fale do seu dinheiro (mon oba).',
        },
        communityPrompt: 'Escreva um parágrafo curto em volapük sobre uma compra e como você se sente, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
];
