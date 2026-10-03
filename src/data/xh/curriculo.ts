import type { UnitSeed } from '../types';

/**
 * Trilha do isiXhosa: por enquanto só as duas unidades do nível A1 (pacote incompleto — ver
 * `incomplete` em index.ts). Ver vocabulario.ts para as fontes de cada palavra e de cada regra
 * gramatical usada aqui. Frases novas (fora de citação direta) só combinam palavras já atestadas com
 * dois padrões de verbo também atestados: a forma conjunta, sem “-ya-”, quando o verbo é seguido de
 * objeto (Pitcher 2023, citando Visser 1989), e a cópula “ngu-” (Wikipédia/Wikivoyage) — nunca uma
 * concordância de classe nova ou uma conjugação inventada.
 */
export const UNITS_XH: UnitSeed[] = [
  {
    id: 'xh-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Molo! Ndingubani?',
    emoji: '👋',
    card: {
      id: 'xh-c1',
      title: 'Molo! O povo e a língua xhosa',
      emoji: '🇿🇦',
      history:
        'O isiXhosa é uma língua banta do ramo nguni, falada por cerca de 8 milhões de pessoas como língua materna (2013) e por mais 11 milhões como segunda língua (2002) — sobretudo nas províncias do Cabo Oriental, Cabo Ocidental, Cabo Norte e Gauteng, na África do Sul, onde é uma das línguas oficiais do país, além de comunidades no Zimbábue (também língua oficial ali) e no Lesoto. Nelson Mandela, da família real Thembu, tinha o isiXhosa como língua materna (en.wikipedia.org/wiki/Xhosa_language).',
      culture_tip:
        '“Molo” cumprimenta uma só pessoa; “Molweni” cumprimenta várias pessoas, ou mostra respeito a alguém mais velho — a mesma ideia do “tu”/“vocês” do português, só que aqui mora no próprio cumprimento. A cantora Miriam Makeba ficou mundialmente conhecida cantando em isiXhosa, inclusive a “canção do clique” (Qongqothwane) — os sons de clique (as letras c, q e x) vieram do contato histórico com línguas coissã: cerca de 15% do vocabulário xhosa é de origem coissã, segundo a mesma fonte.',
      grammar_why:
        'Os verbos do isiXhosa começam com um prefixo de sujeito que concorda com quem pratica a ação: “ndi-” (eu), “u-” (você, ou ele/ela de certas classes), “si-” (nós), “ni-” (vocês). Para dizer “é” entre duas coisas, o isiXhosa usa a cópula “ngu-”, grudada na palavra seguinte: “ngumama” (é mãe), “ngutata” (é pai), “ngubani?” (quem é?, literalmente “é quem?”).',
      grammar_examples: [
        ['Molo! Unjani?', 'Oi! Como você está?'],
        ['Ndiyaphila, enkosi.', 'Estou bem, obrigado.'],
        ['Ngubani igama lakho?', 'Qual é o seu nome?'],
        ['Igama lam nguLinu.', 'Meu nome é Linu.'],
      ],
      character_guide: [
        ['c', 'clique dental — um estalo da língua atrás dos dentes da frente, como o “tsc-tsc” de reprovação em português', 'ndiCela (por favor, eu peço)'],
        ['q', 'clique alveolar — um estalo mais “oco”, com a língua batendo atrás da crista dos dentes', 'iQanda (ovo)'],
        ['x', 'clique lateral — um estalo pelo lado da boca, parecido com o som usado para chamar um cavalo', 'uXolo (desculpa, com licença)'],
      ],
    },
    lessons: [
      {
        id: 'xh-u1-l1',
        title: 'Molo, molweni',
        kind: 'licao',
        words: ['molo', 'molweni', 'enkosi', 'uxolo', 'unjani', 'ndiyaphila'],
        cloze: [
          { sentence: '___! Unjani?', answer: 'Molo', options: ['Molo', 'Molweni', 'Enkosi'], translation: 'Oi! Como você está?' },
          { sentence: 'Ndiyaphila, ___.', answer: 'enkosi', options: ['enkosi', 'uxolo', 'molo'], translation: 'Estou bem, obrigado.' },
          { sentence: '___, Linu!', answer: 'Uxolo', options: ['Uxolo', 'Molweni', 'Enkosi'], translation: 'Desculpa, Linu! (com licença)' },
        ],
        voice: {
          bot: 'Molo! Unjani?',
          botTranslation: 'Oi! Como você está?',
          expected: ['Ndiyaphila, enkosi.', 'ndiyaphila'],
          hint: 'Responda com “Ndiyaphila, enkosi.” (estou bem, obrigado).',
        },
        communityPrompt: 'Cumprimente um grupo ou alguém mais velho com “Molweni!” e pergunte “Unjani?” (como você está?).',
      },
      {
        id: 'xh-u1-l2',
        title: 'Ewe, hayi, ndicela',
        kind: 'licao',
        words: ['ewe', 'hayi', 'ntoni', 'ngubani', 'ndicela', 'mna'],
        cloze: [
          { sentence: 'Ufuna ___?', answer: 'ntoni', options: ['ntoni', 'ngubani', 'mna'], translation: 'O que você quer?' },
          { sentence: '___ amanzi.', answer: 'Ndicela', options: ['Ndicela', 'Ewe', 'Hayi'], translation: 'Água, por favor. (eu peço água)' },
          { sentence: '___ igama lakho?', answer: 'Ngubani', options: ['Ngubani', 'Ewe', 'Hayi'], translation: 'Qual é o seu nome?' },
        ],
        voice: {
          bot: 'Ngubani igama lakho?',
          botTranslation: 'Qual é o seu nome?',
          expected: ['Igama lam nguLinu.', 'nguLinu'],
          hint: 'Responda com “Igama lam ngu…” (meu nome é…) seguido do seu nome.',
        },
        communityPrompt: 'Pergunte o nome de alguém com “Ngubani igama lakho?” e responda “Igama lam ngu…” com o seu.',
      },
      {
        id: 'xh-u1-l3',
        title: 'Wena, yena, thina',
        kind: 'licao',
        words: ['wena', 'yena', 'thina', 'umama', 'utata', 'umntwana'],
        cloze: [
          { sentence: '___ unjani?', answer: 'Wena', options: ['Wena', 'Yena', 'Thina'], translation: 'E você, como está?' },
          { sentence: '___ uyaphila.', answer: 'Yena', options: ['Yena', 'Wena', 'Thina'], translation: 'Ele/ela está bem.' },
          { sentence: '___ sifunda isiXhosa.', answer: 'Thina', options: ['Thina', 'Wena', 'Yena'], translation: 'Nós estudamos isiXhosa.' },
        ],
        voice: {
          bot: 'Wena unjani?',
          botTranslation: 'E você, como está?',
          expected: ['Mna ndiyaphila.', 'ndiyaphila'],
          hint: 'Use o pronome de ênfase “mna” (eu) antes de “ndiyaphila” (estou bem).',
        },
        communityPrompt: 'Apresente sua família com “umama” (mãe), “utata” (pai) e “umntwana” (criança).',
      },
      {
        id: 'xh-u1-l4',
        title: 'Teste: Molo! Ndingubani?',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Molo! Unjani? Ngubani igama lakho?',
          botTranslation: 'Oi! Como você está? Qual é o seu nome?',
          expected: ['Ndiyaphila, enkosi. Igama lam nguLinu.', 'ndiyaphila'],
          hint: 'Combine as duas respostas: como você está e o seu nome.',
        },
        communityPrompt: 'Escreva uma apresentação curta em isiXhosa: cumprimento, como você está e o seu nome.',
      },
    ],
  },
  {
    id: 'xh-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Nye, mbini, ntathu',
    emoji: '🔟',
    card: {
      id: 'xh-c2',
      title: 'Números, bichos e natureza',
      emoji: '🌳',
      history:
        'Os numerais de 1 a 10 do isiXhosa — nye, mbini, ntathu, ne, ntlanu, ntandathu, sixhenxe, sibhozo, lithoba, lishumi — vêm do roteiro de conversação da Wikivoyage (en.wikivoyage.org/wiki/Xhosa_phrasebook). A língua é usada como língua de instrução no ensino básico em partes da África do Sul, ao lado do inglês e do africâner, e aparece na rádio e na televisão da emissora pública sul-africana, a SABC (en.wikipedia.org/wiki/Xhosa_language).',
      culture_tip:
        'O isiXhosa usa a mesma palavra, “luhlaza”, tanto para verde quanto para azul — o Wiktionary confirma a definição dupla “green, blue” — uma pista de que a língua agrupa as cores de um jeito diferente do português.',
      grammar_why:
        'O verbo do isiXhosa no presente muda de forma dependendo do que vem depois dele: sem nada depois, ele leva o prefixo “-ya-” (“Ndiyahamba”, eu vou); seguido de um objeto, o “-ya-” desaparece (“Ndibona ilanga”, eu vejo o sol). Essa alternância (chamada de forma conjunta/disjunta) foi estudada em detalhe numa dissertação de mestrado inteira sobre o isiXhosa (Pitcher, Dallas International University, 2023).',
      grammar_examples: [
        ['Ndiyahamba.', 'Eu vou (ando).'],
        ['Ndibona ilanga.', 'Eu vejo o sol.'],
        ['Inja iyatya.', 'O cachorro come.'],
        ['Nditya inyama.', 'Eu como carne.'],
      ],
      character_guide: [
        ['ny', 'nasal palatal sonora — como o “nh” de “ninho”, em português', 'inyama (carne), inyanga (lua)'],
        ['hl', 'fricativa lateral surda — um “lh” soprado, sem vibrar a garganta, sem equivalente exato no português', 'mhlophe (branco)'],
      ],
    },
    lessons: [
      {
        id: 'xh-u2-l1',
        title: 'Nye, mbini, ntathu',
        kind: 'licao',
        words: ['nye', 'mbini', 'ntathu', 'ne', 'ntlanu', 'ntandathu'],
        cloze: [
          { sentence: '___, mbini, ntathu.', answer: 'Nye', options: ['Nye', 'Ne', 'Ntlanu'], translation: 'Um, dois, três.' },
          { sentence: 'Mbini, ___, ne.', answer: 'ntathu', options: ['ntathu', 'ntlanu', 'ntandathu'], translation: 'Dois, três, quatro.' },
          { sentence: 'Ntlanu, ___.', answer: 'ntandathu', options: ['ntandathu', 'ne', 'nye'], translation: 'Cinco, seis.' },
        ],
        voice: {
          bot: 'Nye, mbini, ntathu, ne, ntlanu…',
          botTranslation: 'Um, dois, três, quatro, cinco…',
          expected: ['Ntandathu.', 'ntandathu'],
          hint: 'Complete a sequência com “ntandathu” (seis).',
        },
        communityPrompt: 'Conte de um a seis em isiXhosa: “Nye, mbini, ntathu, ne, ntlanu, ntandathu.”',
      },
      {
        id: 'xh-u2-l2',
        title: 'Sixhenxe, lishumi, umntu',
        kind: 'licao',
        words: ['sixhenxe', 'sibhozo', 'lithoba', 'lishumi', 'umntu', 'indlu'],
        cloze: [
          { sentence: 'Sixhenxe, sibhozo, ___.', answer: 'lithoba', options: ['lithoba', 'lishumi', 'sixhenxe'], translation: 'Sete, oito, nove.' },
          { sentence: 'Sibhozo, lithoba, ___.', answer: 'lishumi', options: ['lishumi', 'lithoba', 'sibhozo'], translation: 'Oito, nove, dez.' },
          { sentence: 'Ndibona ___.', answer: 'indlu', options: ['indlu', 'umntu', 'umntwana'], translation: 'Eu vejo uma casa.' },
        ],
        voice: {
          bot: 'Ngumntu.',
          botTranslation: '(Ele/ela) é uma pessoa.',
          expected: ['Ngumntu.', 'ngumntu'],
          hint: 'Use a cópula “ngu-” grudada em “umntu” (pessoa): “Ngumntu.”',
        },
        communityPrompt: 'Conte até dez em isiXhosa e depois diga “Ndibona indlu.” (eu vejo uma casa) olhando ao redor.',
      },
      {
        id: 'xh-u2-l3',
        title: 'Ilanga, amanzi, umthi',
        kind: 'licao',
        words: ['ilanga', 'inyanga', 'amanzi', 'umthi', 'umlilo', 'inkwenkwezi'],
        cloze: [
          { sentence: 'Ndibona ___.', answer: 'ilanga', options: ['ilanga', 'inyanga', 'umlilo'], translation: 'Eu vejo o sol.' },
          { sentence: 'Ndisela ___.', answer: 'amanzi', options: ['amanzi', 'umthi', 'inkwenkwezi'], translation: 'Eu bebo água.' },
          { sentence: 'Ndibona ___.', answer: 'inkwenkwezi', options: ['inkwenkwezi', 'umthi', 'inyanga'], translation: 'Eu vejo uma estrela.' },
        ],
        voice: {
          bot: 'Ndibona umthi.',
          botTranslation: 'Eu vejo uma árvore.',
          expected: ['Ndibona umthi.', 'umthi'],
          hint: 'Repita a frase apontando para uma árvore: “Ndibona umthi.”',
        },
        communityPrompt: 'Aponte para o sol, a lua ou uma árvore e diga “Ndibona ilanga/inyanga/umthi.” (eu vejo…).',
      },
      {
        id: 'xh-u2-l4',
        title: 'Inja, ikati, ukutya',
        kind: 'licao',
        words: ['inja', 'ikati', 'inkukhu', 'inkomo', 'intaka', 'ukutya'],
        cloze: [
          { sentence: '___ iyatya.', answer: 'Inja', options: ['Inja', 'Ikati', 'Intaka'], translation: 'O cachorro come.' },
          { sentence: '___ iyasela.', answer: 'Ikati', options: ['Ikati', 'Inja', 'Intaka'], translation: 'O gato bebe.' },
          { sentence: 'Nditya ___.', answer: 'inkukhu', options: ['inkukhu', 'inkomo', 'ukutya'], translation: 'Eu como galinha.' },
        ],
        voice: {
          bot: 'Intaka iyahamba.',
          botTranslation: 'O pássaro anda (vai).',
          expected: ['Intaka iyahamba.', 'iyahamba'],
          hint: 'Repita: “Intaka iyahamba.” — concordância “i-” (classe 9) + “-ya-”, porque não há nada depois do verbo.',
        },
        communityPrompt: 'Descreva um bicho com “Ndibona…” (eu vejo) + o nome dele, ou diga o que ele faz com “iya-” + o verbo.',
      },
      {
        id: 'xh-u2-l5',
        title: 'O corpo',
        kind: 'licao',
        words: ['intloko', 'isandla', 'umlenze', 'unyawo', 'iliso', 'khulu'],
        cloze: [
          { sentence: 'Ndibona ___.', answer: 'intloko', options: ['intloko', 'isandla', 'unyawo'], translation: 'Eu vejo a cabeça.' },
          { sentence: 'Ndibona ___.', answer: 'umlenze', options: ['umlenze', 'unyawo', 'isandla'], translation: 'Eu vejo a perna.' },
          { sentence: '___ lam.', answer: 'Iliso', options: ['Iliso', 'Isandla', 'Intloko'], translation: 'Meu olho.' },
        ],
        voice: {
          bot: 'Iliso lam.',
          botTranslation: 'Meu olho.',
          expected: ['Iliso lam.', 'iliso'],
          hint: 'Use o possessivo “lam” (meu) depois de “iliso” (olho) — a mesma construção de “Igama lam”.',
        },
        communityPrompt: 'Aponte para partes do corpo e diga “Ndibona…” (eu vejo) ou use “lam” (meu/minha) para a sua própria, como em “Iliso lam.”.',
      },
      {
        id: 'xh-u2-l6',
        title: 'Teste: Nye, mbini, ntathu',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ndibona ilanga. Nye, mbini, ntathu…',
          botTranslation: 'Eu vejo o sol. Um, dois, três…',
          expected: ['Ne, ntlanu, ntandathu.', 'ntandathu'],
          hint: 'Continue a contagem depois de “ntathu”: “ne, ntlanu, ntandathu.”',
        },
        communityPrompt: 'Escreva uma descrição curta de um passeio: o que você vê (Ndibona…), um bicho e a contagem até dez.',
      },
    ],
  },
];
