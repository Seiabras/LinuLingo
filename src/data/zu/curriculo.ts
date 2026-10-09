import type { UnitSeed } from '../types';

/**
 * Trilha do zulu (isiZulu): as duas unidades do nível A1 (zu-u1, zu-u2) mais, a partir desta sessão, as
 * duas unidades do nível A2 (zu-u3, zu-u4 — pacote agora completo até A2.2, ver `incomplete` em
 * index.ts). Ver vocabulario.ts e gramatica.ts para as fontes de cada palavra e de cada regra gramatical
 * usada aqui. Frases novas (fora de citação direta) só combinam palavras já atestadas com padrões de
 * verbo também atestados: a concordância de sujeito, a alternância entre a forma disjunta (com “-ya-”,
 * quando o verbo fecha a frase) e a conjunta (sem “-ya-”, quando segue objeto), a cópula “ng(u)-”, e,
 * nas unidades novas, o passado recente (“-ile”/“-ē”) e remoto (“-ā-”), a negação do passado (“-anga”),
 * o futuro imediato e distante (“-zo(ku)-”/“-yo(ku)-”) e a concordância de objeto (“-m-”, classe 1) —
 * nunca uma concordância de classe nova ou uma conjugação inventada.
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
  {
    id: 'zu-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Izolo, namhlanje, kusasa',
    emoji: '📅',
    card: {
      id: 'zu-c3',
      title: 'O passado: o que já aconteceu',
      emoji: '⏮️',
      history:
        'O primeiro livro de gramática do isiZulu não foi publicado na África do Sul: saiu na Noruega, em 1850, fruto do trabalho de missionários luteranos noruegueses na região; o primeiro texto escrito na língua foi uma tradução da Bíblia, publicada só em 1883, porque o isiZulu não tinha escrita própria antes da chegada dos europeus (en.wikipedia.org/wiki/Zulu_language).',
      culture_tip:
        'Os numerais 8 e 9 do isiZulu, “isishiyagalombili” e “isishiyagalolunye” (já vistos na unidade 2), significam literalmente algo como “restam duas” e “resta uma” — uma pista de que a contagem nos dedos ia fechando a mão a partir do dez (en.wikipedia.org/wiki/Zulu_language).',
      grammar_why:
        'O isiZulu marca o passado de duas formas: uma recente, com o sufixo “-ile” no final do verbo (“Sihambile”, nós fomos), e uma remota, com o prefixo “-ā-” antes da raiz, sem sufixo (“Sāhamba”, nós fomos há mais tempo) — ambas confirmadas na Wikipédia em inglês, que também dá a negação comum às duas, com o sufixo “-anga” (“Asihambanga”, nós não fomos).',
      grammar_examples: [
        ['Sihambile.', 'Nós fomos/andamos.'],
        ['Ngihambile izolo.', 'Eu fui ontem.'],
        ['Sāhamba.', 'Nós fomos/andamos (passado mais remoto).'],
        ['Asihambanga.', 'Nós não fomos.'],
      ],
      character_guide: [
        ['dl', 'fricativa lateral alveolar sonora /ɮ/ — a versão “com voz” do “hl” (já visto na unidade 2), sem equivalente no português', 'ukudla (comida) e indlela (caminho, estrada)'],
        ['bh', 'oclusiva bilabial sonora comum /b/ (como o “b” do português) — diferente do “b” sozinho do isiZulu, que é uma implosiva /ɓ/, como em “ubaba” (pai, já visto)', 'ibhasi (ônibus)'],
      ],
    },
    lessons: [
      {
        id: 'zu-u3-l1',
        title: 'Izolo, namhlanje, kusasa',
        kind: 'licao',
        words: ['izolo', 'namhlanje', 'kusasa', 'ubusuku', 'ukusa', 'za'],
        cloze: [
          { sentence: 'Ngihambile ___.', answer: 'izolo', options: ['izolo', 'namhlanje', 'kusasa'], translation: 'Eu fui ontem.' },
          { sentence: 'Ngiyasebenza ___.', answer: 'namhlanje', options: ['namhlanje', 'izolo', 'ubusuku'], translation: 'Eu trabalho hoje.' },
          { sentence: 'Ngizohamba ___.', answer: 'kusasa', options: ['kusasa', 'izolo', 'ukusa'], translation: 'Eu vou/irei amanhã.' },
        ],
        voice: {
          bot: 'Ngizokuza kusasa.',
          botTranslation: 'Eu virei amanhã.',
          expected: ['Ngizokuza kusasa.', 'kusasa'],
          hint: 'Repita a frase: “Ngizokuza kusasa.” (eu virei amanhã).',
        },
        communityPrompt: 'Diga o que você fez ontem (izolo), o que faz hoje (namhlanje) e o que fará amanhã (kusasa).',
      },
      {
        id: 'zu-u3-l2',
        title: 'Vula, vala, ngena, phuma',
        kind: 'licao',
        words: ['vula', 'vala', 'ngena', 'phuma', 'sebenza', 'lala'],
        cloze: [
          { sentence: '___ incwadi!', answer: 'Vula', options: ['Vula', 'Vala', 'Ngena'], translation: 'Abra o livro!' },
          { sentence: '___ incwadi!', answer: 'Vala', options: ['Vala', 'Vula', 'Phuma'], translation: 'Feche o livro!' },
          { sentence: 'Ngiya___.', answer: 'lala', options: ['lala', 'phuma', 'ngena'], translation: 'Eu durmo.' },
        ],
        voice: {
          bot: 'Ngiyasebenza.',
          botTranslation: 'Eu trabalho.',
          expected: ['Ngiyasebenza.', 'sebenza'],
          hint: 'Repita: “Ngiyasebenza.” (eu trabalho).',
        },
        communityPrompt: 'Pratique os verbos: abra e feche um livro dizendo “Vula!”/“Vala!”, depois diga se você trabalha (Ngiyasebenza) ou dorme (Ngiyalala) agora.',
      },
      {
        id: 'zu-u3-l3',
        title: 'Teste: Izolo, namhlanje, kusasa',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ngihambile izolo. Ngizohamba kusasa.',
          botTranslation: 'Eu fui ontem. Eu vou/irei amanhã.',
          expected: ['Ngiyasebenza namhlanje.', 'namhlanje'],
          hint: 'Complete com o presente: “Ngiyasebenza namhlanje.” (eu trabalho hoje).',
        },
        communityPrompt: 'Escreva três frases: uma no passado (izolo), uma no presente (namhlanje) e uma no futuro (kusasa).',
      },
    ],
  },
  {
    id: 'zu-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Ngizothenga, ngizosiza',
    emoji: '🛍️',
    card: {
      id: 'zu-c4',
      title: 'O futuro e as compras',
      emoji: '🛒',
      history:
        'O isiZulu “padrão”, ensinado nas escolas, prefere criar palavras novas a partir de raízes da própria língua; o isiZulu urbano, falado nas cidades, toma de empréstimo muitas palavras do inglês — “udokotela” (médico, já nesta unidade) vem do inglês “doctor”, segundo o Wiktionary em inglês —, o que às vezes torna o isiZulu padrão difícil de acompanhar para os mais jovens (en.wikipedia.org/wiki/Zulu_language).',
      culture_tip:
        'A mesma grafia “umfundisi” pode significar tanto “padre” quanto “professor” em isiZulu — só o tom (a altura da voz em cada sílaba) separa as duas palavras, já que a escrita comum do isiZulu não marca o tom (en.wikipedia.org/wiki/Zulu_language).',
      grammar_why:
        'O futuro do isiZulu tem uma forma imediata (prefixo “-zo-”) e uma mais distante (prefixo “-yo-”); verbos de uma só sílaba ou iniciados por vogal, como “-za” (vir) e “-akha” (construir), ganham o infixo extra “-ku-”/“-kw-” (“Ngizokuza”, eu virei; “Ngizokwakha”, eu vou construir) — e o verbo pode levar ainda uma concordância de objeto opcional, como o “-m-” de “Ngizomsiza” (eu vou ajudá-lo/a), tudo confirmado na Wikipédia em inglês.',
      grammar_examples: [
        ['Ngizokuza.', 'Eu virei.'],
        ['Ngizokwakha indlu.', 'Eu vou construir uma casa.'],
        ['Ngizomsiza.', 'Eu vou ajudá-lo/a.'],
        ['Angizukuza.', 'Eu não virei.'],
      ],
      character_guide: [
        ['kh', 'oclusiva velar aspirada /kʰ/ — um “k” solto com um sopro de ar depois, como em “ikhanda” (cabeça, já visto na unidade 2)', 'isikhwama (bolsa, mala)'],
        ['ng', 'nasal velar, às vezes com um “g” fraco depois, /ŋ(ɡ)/ — como o “ng” de “sing” em inglês', 'umngane (amigo)'],
      ],
    },
    lessons: [
      {
        id: 'zu-u4-l1',
        title: 'Thenga, siza, nika, akha',
        kind: 'licao',
        words: ['thenga', 'siza', 'nika', 'akha', 'isipho', 'imali'],
        cloze: [
          { sentence: 'Ngithenga ___.', answer: 'isipho', options: ['isipho', 'imali', 'indlela'], translation: 'Eu compro um presente.' },
          { sentence: 'Ngicela ___.', answer: 'imali', options: ['imali', 'isipho', 'isitolo'], translation: 'Dinheiro, por favor (eu peço dinheiro).' },
          { sentence: 'Ngizom___.', answer: 'siza', options: ['siza', 'nika', 'thenga'], translation: 'Eu vou ajudá-lo/a.' },
        ],
        voice: {
          bot: 'Ngizokwakha indlu.',
          botTranslation: 'Eu vou construir uma casa.',
          expected: ['Ngizokwakha indlu.', 'akha'],
          hint: 'Repita: “Ngizokwakha indlu.” (eu vou construir uma casa).',
        },
        communityPrompt: 'Diga o que você vai comprar (thenga) e peça ajuda com “Ngisize!” (ajude-me).',
      },
      {
        id: 'zu-u4-l2',
        title: 'Isitolo, imoto, ibhasi, indlela',
        kind: 'licao',
        words: ['isitolo', 'imoto', 'ibhasi', 'indlela', 'umngane', 'biza'],
        cloze: [
          { sentence: 'Ngibona ___.', answer: 'isitolo', options: ['isitolo', 'imoto', 'indlela'], translation: 'Eu vejo uma loja.' },
          { sentence: '___ liyahamba.', answer: 'Ibhasi', options: ['Ibhasi', 'Imoto', 'Indlela'], translation: 'O ônibus vai/anda.' },
          { sentence: '___ iyahamba.', answer: 'Imoto', options: ['Imoto', 'Ibhasi', 'Indlela'], translation: 'O carro vai/anda.' },
        ],
        voice: {
          bot: 'Ibhasi liyabiza.',
          botTranslation: 'O ônibus é caro (custa muito).',
          expected: ['Ibhasi liyabiza.', 'biza'],
          hint: 'Repita: “Ibhasi liyabiza.” (o ônibus é caro).',
        },
        communityPrompt: 'Descreva o caminho até a loja (isitolo) e diga se o ônibus (ibhasi) ou o carro (imoto) é caro (biza).',
      },
      {
        id: 'zu-u4-l3',
        title: 'Teste: Ngizothenga, ngizosiza',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ngizokwakha indlu. Ngizothenga isipho.',
          botTranslation: 'Eu vou construir uma casa. Eu vou comprar um presente.',
          expected: ['Ngizomsiza.', 'siza'],
          hint: 'Complete com “Ngizomsiza.” (eu vou ajudá-lo/a) — pense num amigo (umngane) que precisa de ajuda.',
        },
        communityPrompt: 'Escreva uma frase no futuro com um verbo (za, akha, thenga, siza) e diga quem você ajudaria.',
      },
    ],
  },
];
