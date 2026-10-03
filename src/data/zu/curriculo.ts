import type { UnitSeed } from '../types';

/**
 * Trilha do zulu (isiZulu): por enquanto só as duas unidades do nível A1 (pacote incompleto — ver
 * `incomplete` em index.ts). Ver vocabulario.ts para as fontes de cada palavra e de cada regra
 * gramatical usada aqui. Frases novas (fora de citação direta) só combinam palavras já atestadas com
 * padrões de verbo também atestados: a concordância de sujeito, a alternância entre a forma disjunta
 * (com “-ya-”, quando o verbo fecha a frase) e a conjunta (sem “-ya-”, quando segue objeto), e a cópula
 * “ng(u)-” — nunca uma concordância de classe nova ou uma conjugação inventada.
 */
export const UNITS_ZU: UnitSeed[] = [
  {
    id: 'zu-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Sawubona! Ungubani?',
    emoji: '👋',
    card: {
      id: 'zu-c1',
      title: 'Sawubona! O povo e a língua zulu',
      emoji: '🇿🇦',
      history:
        'O isiZulu é uma língua banta do ramo nguni, falada por cerca de 12 milhões de pessoas como língua materna (2013–2017) e mais 16 milhões como segunda língua (2002) — é a língua mais falada em casa na África do Sul (24% da população) e uma das 12 línguas oficiais do país desde 1994, sobretudo em KwaZulu-Natal e no sul de Mpumalanga, com falantes também no Zimbábue e no Lesoto. John Dube escreveu “Insila kaShaka” (1930), o primeiro romance em isiZulu; a canção “Jerusalema” (2019) tem letra em isiZulu, e o filme “O Rei Leão” usa falas na língua (en.wikipedia.org/wiki/Zulu_language).',
      culture_tip:
        '“Sawubona” é uma contração de “siyakubona” (nós te vemos) — cumprimentar é, literalmente, reconhecer a presença de alguém. “Sanibonani” cumprimenta várias pessoas, ou mostra respeito a alguém mais velho ou a um estranho, mesmo sendo uma só pessoa — a mesma ideia do “tu”/“vocês” do português, só que aqui mora no próprio cumprimento (en.wiktionary.org/wiki/sawubona, en.wiktionary.org/wiki/sanibonani).',
      grammar_why:
        'Mesmo as saudações do isiZulu são frases conjugadas, não palavras soltas: o verbo leva um prefixo de sujeito que concorda com quem fala — “ngi-” (eu), “u-” (você, ou ele/ela de certas classes), “si-” (nós), “ni-” (vocês), “ba-” (eles, classe 2). Para dizer “é” entre duas coisas, o isiZulu gruda o prefixo “ng-” na palavra seguinte: a própria Wikipédia em inglês cita “ngumama” (é minha mãe) e “nginguḿfâzi” (eu sou mulher).',
      grammar_examples: [
        ['Sawubona! Unjani?', 'Oi! Como você está?'],
        ['Ngiyaphila, ngiyabonga.', 'Estou bem, obrigado.'],
        ['Ungubani igama lakho?', 'Qual é o seu nome?'],
        ['Igama lami nginguLinu.', 'Meu nome é Linu.'],
      ],
      character_guide: [
        ['c', 'clique dentialveolar — um estalo da língua atrás dos dentes da frente, como o “tsc-tsc” de reprovação em português', 'ngiCela (por favor, eu peço)'],
        ['q', 'clique pós-alveolar — um estalo mais “oco”, descrito na Wikipédia como o som de uma tampa de garrafa abrindo', 'iQanda (ovo)'],
        ['x', 'clique lateral — um estalo pelo lado da boca, descrito na Wikipédia como o som de um cavalo andando', 'ngiyaXolisa (desculpa, eu peço desculpas)'],
      ],
    },
    lessons: [
      {
        id: 'zu-u1-l1',
        title: 'Sawubona, sanibonani',
        kind: 'licao',
        words: ['sawubona', 'sanibonani', 'ngiyabonga', 'ngiyaxolisa', 'unjani', 'ngiyaphila'],
        cloze: [
          { sentence: '___! Unjani?', answer: 'Sawubona', options: ['Sawubona', 'Sanibonani', 'Ngiyabonga'], translation: 'Oi! Como você está?' },
          { sentence: 'Ngiyaphila, ___.', answer: 'ngiyabonga', options: ['ngiyabonga', 'ngiyaxolisa', 'sawubona'], translation: 'Estou bem, obrigado.' },
          { sentence: '___, Linu!', answer: 'Ngiyaxolisa', options: ['Ngiyaxolisa', 'Sanibonani', 'Yebo'], translation: 'Desculpa, Linu!' },
        ],
        voice: {
          bot: 'Sawubona! Unjani?',
          botTranslation: 'Oi! Como você está?',
          expected: ['Ngiyaphila, ngiyabonga.', 'ngiyaphila'],
          hint: 'Responda com “Ngiyaphila, ngiyabonga.” (estou bem, obrigado).',
        },
        communityPrompt: 'Cumprimente um grupo, ou alguém mais velho, com “Sanibonani!” e pergunte “Unjani?” (como você está?).',
      },
      {
        id: 'zu-u1-l2',
        title: 'Yebo, cha, ngicela',
        kind: 'licao',
        words: ['yebo', 'cha', 'yini', 'ubani', 'ngicela', 'mina'],
        cloze: [
          { sentence: '___, ngiyabonga.', answer: 'Yebo', options: ['Yebo', 'Cha', 'Ubani'], translation: 'Sim, obrigado.' },
          { sentence: '___ lokhu?', answer: 'Yini', options: ['Yini', 'Ubani', 'Cha'], translation: 'O que é isso?' },
          { sentence: '___ amanzi.', answer: 'Ngicela', options: ['Ngicela', 'Yebo', 'Cha'], translation: 'Água, por favor (eu peço água).' },
        ],
        voice: {
          bot: 'Ubani lo muntu?',
          botTranslation: 'Quem é essa pessoa?',
          expected: ['Mina.', 'mina'],
          hint: 'Responda apontando para si mesmo: “Mina.” (eu).',
        },
        communityPrompt: 'Aponte para um objeto e pergunte “Yini lokhu?” (o que é isso?), e responda sim ou não com “Yebo”/“Cha”.',
      },
      {
        id: 'zu-u1-l3',
        title: 'Wena, yena, thina, nina, bona',
        kind: 'licao',
        words: ['wena', 'yena', 'thina', 'nina', 'bona', 'umuntu'],
        cloze: [
          { sentence: '___ unjani?', answer: 'Wena', options: ['Wena', 'Yena', 'Nina'], translation: 'E você, como está?' },
          { sentence: '___ uyaphila.', answer: 'Yena', options: ['Yena', 'Wena', 'Thina'], translation: 'Ele/ela está bem.' },
          { sentence: '___ bayaphila.', answer: 'Bona', options: ['Bona', 'Thina', 'Nina'], translation: 'Eles/elas estão bem.' },
        ],
        voice: {
          bot: 'Nina ninjani?',
          botTranslation: 'E vocês, como estão?',
          expected: ['Thina siyaphila.', 'siyaphila'],
          hint: 'Responda com “Thina siyaphila.” (nós estamos bem).',
        },
        communityPrompt: 'Aponte para alguém e pergunte “Ubani lo muntu?” (quem é essa pessoa?); depois pergunte “Nina ninjani?” para um grupo.',
      },
      {
        id: 'zu-u1-l4',
        title: 'Umama, ubaba, hamba kahle',
        kind: 'licao',
        words: ['umama', 'ubaba', 'umntwana', 'sala', 'hamba', 'kahle'],
        cloze: [
          { sentence: 'Ngithanda ___.', answer: 'umama', options: ['umama', 'ubaba', 'umntwana'], translation: 'Eu gosto da mãe.' },
          { sentence: 'Ngibona ___.', answer: 'ubaba', options: ['ubaba', 'umama', 'umntwana'], translation: 'Eu vejo o pai.' },
          { sentence: '___ kahle!', answer: 'Hamba', options: ['Hamba', 'Sala', 'Ngicela'], translation: 'Vá bem! (uma forma de se despedir)' },
        ],
        voice: {
          bot: 'Sala kahle!',
          botTranslation: 'Fique bem! (despedida, para quem fica)',
          expected: ['Hamba kahle!', 'hamba kahle'],
          hint: 'Responda com “Hamba kahle!” (vá bem) — a outra metade da despedida.',
        },
        communityPrompt: 'Apresente “umama” (mãe), “ubaba” (pai) e “umntwana” (criança), depois se despeça com “Hamba kahle!” ou “Sala kahle!”.',
      },
      {
        id: 'zu-u1-l5',
        title: 'Teste: Sawubona! Ungubani?',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Sawubona! Unjani? Ungubani igama lakho?',
          botTranslation: 'Oi! Como você está? Qual é o seu nome?',
          expected: ['Ngiyaphila, ngiyabonga. Igama lami nginguLinu.', 'ngiyaphila'],
          hint: 'Combine as três respostas: como você está, obrigado, e o seu nome.',
        },
        communityPrompt: 'Escreva uma apresentação curta em isiZulu: cumprimento, como você está e o seu nome.',
      },
    ],
  },
  {
    id: 'zu-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Kunye, kubili, kuthathu',
    emoji: '🔟',
    card: {
      id: 'zu-c2',
      title: 'Números, bichos e natureza',
      emoji: '🌳',
      history:
        'Os numerais de 5 a 10 do isiZulu são, na verdade, substantivos da classe 7: “isithupha” (seis) também significa “polegar”, e “isikhombisa” (sete) também significa “dedo indicador” — uma pista de que contar nos dedos começava pelo polegar. Os numerais de 1 a 4 (kunye, kubili, kuthathu, kune) usam uma raiz numeral presa, confirmada no Wiktionary em zulu, com o prefixo “ku-” da concordância abstrata das classes 15/17 (en.wiktionary.org/wiki/isithupha, en.wiktionary.org/wiki/isikhombisa, zu.wiktionary.org).',
      culture_tip:
        'O isiZulu usa a mesma palavra, “luhlaza”, tanto para verde quanto para azul — o Wiktionary confirma a definição dupla “green, blue” — uma pista de que a língua agrupa as cores de um jeito diferente do português. A língua tem 16 classes de substantivo ao todo, e os sons de clique (c, q, x) somam 18 variantes diferentes, contando as versões aspiradas e nasalizadas de cada um dos três pontos de articulação (en.wikipedia.org/wiki/Zulu_language).',
      grammar_why:
        'O verbo do isiZulu no presente muda de forma dependendo do que vem depois dele: sem nada depois, ele leva o infixo “-ya-” (“Ngiyahamba”, eu vou); seguido de um objeto, o “-ya-” desaparece (“Ngifunda isiZulu”, eu estudo zulu). Essa alternância aparece em várias tabelas de conjugação do Wiktionary (hamba, dla, funa, thanda, khuluma, funda, cela, azi, phila todas mostram o mesmo par de formas).',
      grammar_examples: [
        ['Ngiyahamba.', 'Eu vou (ando).'],
        ['Ngifunda isiZulu.', 'Eu estudo zulu.'],
        ['Ngikhuluma isiZulu.', 'Eu falo zulu.'],
        ['Ngidla inyama.', 'Eu como carne.'],
      ],
      character_guide: [
        ['ny', 'nasal palatal sonora — como o “nh” de “ninho”, em português', 'inyoni (pássaro), inyama (carne)'],
        ['hl', 'fricativa lateral surda — um “lh” soprado, sem vibrar a garganta, sem equivalente exato no português', 'isihlanu (cinco)'],
      ],
    },
    lessons: [
      {
        id: 'zu-u2-l1',
        title: 'Kunye, kubili, kuthathu',
        kind: 'licao',
        words: ['kunye', 'kubili', 'kuthathu', 'kune', 'isihlanu', 'isithupha'],
        cloze: [
          { sentence: '___, kubili, kuthathu.', answer: 'Kunye', options: ['Kunye', 'Kubili', 'Kune'], translation: 'Um, dois, três.' },
          { sentence: 'Kubili, ___, kune.', answer: 'kuthathu', options: ['kuthathu', 'kune', 'kunye'], translation: 'Dois, três, quatro.' },
          { sentence: 'Isihlanu, ___.', answer: 'isithupha', options: ['isithupha', 'isikhombisa', 'kune'], translation: 'Cinco, seis.' },
        ],
        voice: {
          bot: 'Kunye, kubili, kuthathu, kune, isihlanu…',
          botTranslation: 'Um, dois, três, quatro, cinco…',
          expected: ['Isithupha.', 'isithupha'],
          hint: 'Complete a sequência com “isithupha” (seis).',
        },
        communityPrompt: 'Conte de um a seis em isiZulu: “Kunye, kubili, kuthathu, kune, isihlanu, isithupha.”',
      },
      {
        id: 'zu-u2-l2',
        title: 'Isikhombisa, ishumi, umuntu',
        kind: 'licao',
        words: ['isikhombisa', 'isishiyagalombili', 'isishiyagalolunye', 'ishumi', 'umuntu', 'indlu'],
        cloze: [
          { sentence: 'Isithupha, isikhombisa, ___.', answer: 'isishiyagalombili', options: ['isishiyagalombili', 'isishiyagalolunye', 'ishumi'], translation: 'Seis, sete, oito.' },
          { sentence: 'Isishiyagalombili, ___, ishumi.', answer: 'isishiyagalolunye', options: ['isishiyagalolunye', 'isishiyagalombili', 'isikhombisa'], translation: 'Oito, nove, dez.' },
          { sentence: 'Ngibona ___.', answer: 'indlu', options: ['indlu', 'umuntu', 'umntwana'], translation: 'Eu vejo uma casa.' },
        ],
        voice: {
          bot: 'Ngumuntu.',
          botTranslation: '(Ele/ela) é uma pessoa.',
          expected: ['Ngumuntu.', 'ngumuntu'],
          hint: 'Use a cópula “ng-” grudada em “umuntu” (pessoa): “Ngumuntu.”',
        },
        communityPrompt: 'Conte até dez em isiZulu e depois diga “Ngibona indlu.” (eu vejo uma casa) olhando ao redor.',
      },
      {
        id: 'zu-u2-l3',
        title: 'Ilanga, amanzi, umuthi',
        kind: 'licao',
        words: ['ilanga', 'inyanga', 'amanzi', 'umuthi', 'umlilo', 'inkanyezi'],
        cloze: [
          { sentence: 'Ngibona ___.', answer: 'ilanga', options: ['ilanga', 'inyanga', 'umlilo'], translation: 'Eu vejo o sol.' },
          { sentence: 'Ngifuna ___.', answer: 'amanzi', options: ['amanzi', 'umuthi', 'inkanyezi'], translation: 'Eu quero água.' },
          { sentence: 'Ngibona ___.', answer: 'inkanyezi', options: ['inkanyezi', 'umuthi', 'inyanga'], translation: 'Eu vejo uma estrela.' },
        ],
        voice: {
          bot: 'Ngibona umuthi.',
          botTranslation: 'Eu vejo uma árvore.',
          expected: ['Ngibona umuthi.', 'umuthi'],
          hint: 'Repita a frase apontando para uma árvore: “Ngibona umuthi.”',
        },
        communityPrompt: 'Aponte para o sol, a lua ou uma árvore e diga “Ngibona ilanga/inyanga/umuthi.” (eu vejo…).',
      },
      {
        id: 'zu-u2-l4',
        title: 'Inja, ikati, ukudla',
        kind: 'licao',
        words: ['inja', 'ikati', 'inkukhu', 'inkomo', 'inyoni', 'ukudla'],
        cloze: [
          { sentence: '___ iyadla.', answer: 'Inja', options: ['Inja', 'Ikati', 'Inyoni'], translation: 'O cachorro come.' },
          { sentence: 'Ngidla ___.', answer: 'inkukhu', options: ['inkukhu', 'inkomo', 'ukudla'], translation: 'Eu como galinha.' },
          { sentence: 'Ngifuna ___.', answer: 'ukudla', options: ['ukudla', 'inkomo', 'inyoni'], translation: 'Eu quero comida.' },
        ],
        voice: {
          bot: 'Inyoni iyadla.',
          botTranslation: 'O pássaro come.',
          expected: ['Inyoni iyadla.', 'iyadla'],
          hint: 'Repita: “Inyoni iyadla.” — concordância “i-” (classe 9) + “-ya-”, porque não há nada depois do verbo.',
        },
        communityPrompt: 'Descreva um bicho com “Ngibona…” (eu vejo) + o nome dele, ou diga que ele come com “iyadla”.',
      },
      {
        id: 'zu-u2-l5',
        title: 'O corpo',
        kind: 'licao',
        words: ['ikhanda', 'iso', 'isandla', 'unyawo', 'umlenze', 'khulu'],
        cloze: [
          { sentence: 'Ngibona ___.', answer: 'ikhanda', options: ['ikhanda', 'isandla', 'unyawo'], translation: 'Eu vejo a cabeça.' },
          { sentence: 'Ngibona ___.', answer: 'umlenze', options: ['umlenze', 'unyawo', 'isandla'], translation: 'Eu vejo a perna.' },
          { sentence: 'Ngibona ___.', answer: 'iso', options: ['iso', 'isandla', 'ikhanda'], translation: 'Eu vejo o olho.' },
        ],
        voice: {
          bot: 'Ngibona isandla.',
          botTranslation: 'Eu vejo a mão.',
          expected: ['Ngibona isandla.', 'isandla'],
          hint: 'Repita a frase apontando para a sua mão: “Ngibona isandla.”',
        },
        communityPrompt: 'Aponte para partes do corpo e diga “Ngibona…” (eu vejo), e descreva algo grande com “khulu” (grande).',
      },
      {
        id: 'zu-u2-l6',
        title: 'Teste: Kunye, kubili, kuthathu',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ngibona ilanga. Kunye, kubili, kuthathu…',
          botTranslation: 'Eu vejo o sol. Um, dois, três…',
          expected: ['Kune, isihlanu, isithupha.', 'isithupha'],
          hint: 'Continue a contagem depois de “kuthathu”: “kune, isihlanu, isithupha.”',
        },
        communityPrompt: 'Escreva uma descrição curta de um passeio: o que você vê (Ngibona…), um bicho e a contagem até dez.',
      },
    ],
  },
];
