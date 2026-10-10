import type { UnitSeed } from '../types';

/**
 * Trilha do romanche: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_RM: UnitSeed[] = [
  {
    id: 'rm-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Allegra! Ils emprims pass',
    emoji: '👋',
    card: {
      id: 'rm-c1',
      title: 'A quarta língua nacional da Suíça',
      emoji: '🏔️',
      history:
        'O romanche nasceu do latim falado nos Alpes, na antiga província romana da Récia, onde hoje fica o cantão dos Grisões, no leste da Suíça. É a menor das quatro línguas nacionais do país (as outras são o alemão, o francês e o italiano): virou língua nacional em 1938 e, desde 1996, é também língua oficial da Confederação no trato com quem fala romanche. Os falantes estão divididos entre cinco variedades escritas nos vales (sursilvano, sutsilvano, surmirano, puter e vallader); em 1982 criou-se uma norma comum, o Rumantsch Grischun, usada aqui e nos textos oficiais do governo federal e do cantão.',
      culture_tip:
        '“Allegra!” é o cumprimento típico dos Grisões, e muita gente que nem fala romanche o usa. “Bun di” vale para o dia, “buna saira” para a noite, e “a revair” para se despedir. Entre amigos se usa “ti”; com desconhecidos e em situações formais, “vus”, com o verbo no plural, como o “vous” francês.',
      grammar_why:
        'O romanche diz o nome com o verbo “ter”: “jau hai num Anna” é, palavra por palavra, “eu tenho nome Anna”. E um único verbo, “esser”, cobre o nosso ser e o nosso estar: “jau sun da Cuira” (sou de Chur) e “jau sun bain” (estou bem).',
      grammar_examples: [
        ['Allegra! Jau hai num Anna.', 'Oi! Eu me chamo Anna.'],
        ['Co has ti num?', 'Como você se chama?'],
        ['El è da Cuira, ella è da Mustér.', 'Ele é de Chur, ela é de Disentis.'],
        ['Bain, grazia. E tai?', 'Bem, obrigado. E você?'],
      ],
      character_guide: [
        ['tg', 'um som entre “tch” e “ti”, dito com a língua no palato', 'fitg (muito), latg (leite), notg (noite)'],
        ['tsch', 'como o “tch” de “tchau”', 'tschintg (cinco)'],
        ['gl', 'como o “lh” do português (antes de i)', 'famiglia, figl (filho)'],
        ['ch', 'antes de a, o, u, soa parecido com o tg: um “tch” mole', 'chasa (casa), chaun (cachorro)'],
        ['è / é', 'o acento marca a vogal aberta ou fechada', 'el è (ele é), café'],
      ],
    },
    lessons: [
      {
        id: 'rm-u1-l1',
        title: 'Allegra, grazia, a revair!',
        kind: 'licao',
        words: ['allegra', 'bun di', 'buna saira', 'buna notg', 'a revair', 'grazia'],
        cloze: [
          { sentence: '___, Anna! Co vai?', answer: 'Allegra', options: ['Allegra', 'A revair', 'Grazia'], translation: 'Oi, Anna! Como vai?' },
          { sentence: 'I è notg: ___!', answer: 'buna notg', options: ['buna notg', 'bun di', 'grazia'], translation: 'Já é noite: boa noite!' },
          { sentence: '___ fitg!', answer: 'Grazia', options: ['Grazia', 'Allegra', 'A revair'], translation: 'Muito obrigado!' },
        ],
        voice: {
          bot: 'Allegra! Co vai?',
          botTranslation: 'Oi! Como vai?',
          expected: ['Bain, grazia! E tai?', 'bain', 'grazia'],
          hint: 'Responda que vai bem e devolva a pergunta: “Bain, grazia! E tai?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em romanche: um de manhã (“Bun di…”), um à noite (“Buna saira…”) e uma despedida (“A revair”).',
      },
      {
        id: 'rm-u1-l2',
        title: 'Jau, ti, el, ella',
        kind: 'licao',
        words: ['jau', 'ti', 'el', 'ella', 'avair num', 'num'],
        cloze: [
          { sentence: '___ hai num Sara.', answer: 'Jau', options: ['Jau', 'Ti', 'El'], translation: 'Eu me chamo Sara.' },
          { sentence: 'Co has ___ num?', answer: 'ti', options: ['ti', 'el', 'nus'], translation: 'Como você se chama?' },
          { sentence: '___ è da Cuira.', answer: 'El', options: ['El', 'Jau', 'Ti'], translation: 'Ele é de Chur.' },
        ],
        voice: {
          bot: 'Allegra! Co has ti num?',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['Jau hai num Ana. E ti?', 'jau hai num', 'e ti'],
          hint: 'Diga o seu nome com “Jau hai num…” e devolva a pergunta com “E ti?”.',
        },
        communityPrompt: 'Apresente-se em romanche: diga o seu nome com “Jau hai num…” e pergunte o nome de alguém com “Co has ti num?”.',
      },
      {
        id: 'rm-u1-l3',
        title: 'Test: ils emprims pass',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Allegra! Jau hai num Gian. Co has ti num e danunder es ti?',
          botTranslation: 'Oi! Eu me chamo Gian. Como você se chama e de onde você é?',
          expected: ['Allegra! Jau hai num Lucia e jau sun da São Paulo.', 'jau hai num', 'jau sun da', 'allegra'],
          hint: 'Devolva o cumprimento (“Allegra!”), diga o nome com “Jau hai num…” e a cidade com “Jau sun da…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “Jau hai num…”, cidade com “Jau sun da…” e uma despedida.',
      },
    ],
  },
  {
    id: 'rm-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'La famiglia e la chasa',
    emoji: '👪',
    card: {
      id: 'rm-c2',
      title: 'Il, la, ils, las e o “na… betg”',
      emoji: '🧭',
      history:
        'O romanche viveu cercado de alemão: por séculos os Grisões comerciaram e estudaram em alemão, e muitas palavras do dia a dia vieram de lá. Mesmo assim, a gramática ficou românica, parente próxima do ladino das Dolomitas e do friulano, com quem o romanche forma, para muitos linguistas, o grupo reto-românico.',
      culture_tip:
        'As aldeias dos Grisões são pequenas, e as famílias costumam ter raízes num vale só. Por isso perguntar “danunder es ti?” (de onde você é?) quase sempre leva a uma resposta com o nome da aldeia e do vale.',
      grammar_why:
        'O artigo definido é “il” (masculino) e “la” (feminino), no plural “ils” e “las”; antes de vogal, “l\'”. O possessivo vai antes do nome e concorda com ele: “mes bab” (meu pai), “mia mamma” (minha mãe). Para negar, o romanche usa duas palavras em volta do verbo: “jau na sai betg” (eu não sei).',
      grammar_examples: [
        ['Mia famiglia è gronda.', 'A minha família é grande.'],
        ['Jau hai in frar ed ina sora.', 'Tenho um irmão e uma irmã.'],
        ['Il latg è alv.', 'O leite é branco.'],
        ['Jau na sai betg.', 'Eu não sei.'],
      ],
      character_guide: [
        ['ed', 'o “e” vira “ed” antes de vogal', 'in frar ed ina sora'],
        ['l\'', 'o artigo perde a vogal antes de vogal', 'l\'aua (a água), l\'emna (a semana)'],
      ],
    },
    lessons: [
      {
        id: 'rm-u2-l1',
        title: 'Mia famiglia',
        kind: 'licao',
        words: ['famiglia', 'mamma', 'bab', 'frar', 'sora', 'avair'],
        cloze: [
          { sentence: 'Mia ___ ha num Rosa.', answer: 'mamma', options: ['mamma', 'bab', 'frar'], translation: 'A minha mãe se chama Rosa.' },
          { sentence: 'Jau ___ in frar.', answer: 'hai', options: ['hai', 'sun', 'vom'], translation: 'Eu tenho um irmão.' },
          { sentence: 'Mes ___ è da Mustér.', answer: 'bab', options: ['bab', 'sora', 'mamma'], translation: 'O meu pai é de Disentis.' },
        ],
        voice: {
          bot: 'Has ti frars u soras?',
          botTranslation: 'Você tem irmãos ou irmãs?',
          expected: ['Gea, jau hai in frar ed ina sora.', 'jau hai', 'frar', 'sora'],
          hint: 'Responda com “Gea, jau hai…” ou “Na, jau n\'hai betg frars”.',
        },
        communityPrompt: 'Descreva a sua família em romanche: quantos irmãos (frars) e irmãs (soras) você tem e como se chamam os seus pais.',
      },
      {
        id: 'rm-u2-l2',
        title: 'En chasa',
        kind: 'licao',
        words: ['chasa', 'aua', 'paun', 'latg', 'caschiel', 'plaschair'],
        cloze: [
          { sentence: 'Mia ___ è pitschna.', answer: 'chasa', options: ['chasa', 'aua', 'paun'], translation: 'A minha casa é pequena.' },
          { sentence: 'Jau baiv ___.', answer: 'aua', options: ['aua', 'paun', 'caschiel'], translation: 'Eu bebo água.' },
          { sentence: 'Jau mangel paun e ___.', answer: 'caschiel', options: ['caschiel', 'aua', 'latg'], translation: 'Eu como pão e queijo.' },
        ],
        voice: {
          bot: 'Tge mangias ti?',
          botTranslation: 'O que você come?',
          expected: ['Jau mangel paun e caschiel.', 'jau mangel', 'paun', 'caschiel'],
          hint: 'Diga o que come com “Jau mangel…”.',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: “Jau mangel…” e “Jau baiv…”.',
      },
      {
        id: 'rm-u2-l3',
        title: 'Test: famiglia e chasa',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Raquinta da tia famiglia: has ti frars u soras?',
          botTranslation: 'Conte da sua família: você tem irmãos ou irmãs?',
          expected: ['Gea, jau hai ina sora. Ella ha num Maria.', 'jau hai', 'ha num'],
          hint: 'Diga quantos irmãos tem (“jau hai…”) e o nome deles (“el/ella ha num…”).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “jau hai”, “ha num” e “è”.',
      },
    ],
  },
  {
    id: 'rm-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Il temp e la vesta',
    emoji: '🌦️',
    card: {
      id: 'rm-c3',
      title: 'O futuro com “vegnir” (vir)',
      emoji: '🔮',
      history:
        'O romanche não tem uma terminação própria de futuro: forma o futuro com o verbo “vegnir” (vir) conjugado, seguido de “a” (ou “ad” antes de vogal) e o infinitivo — “jau vegn a cumprar” é, literalmente, “eu venho a comprar”. É uma construção perifrástica única entre as línguas românicas: onde o português usa “ir” (“vou comprar”), o romanche usa “vir”. O sursilvano, outro idioma reto-românico dos Grisões, forma o futuro do mesmo jeito.',
      culture_tip:
        'Nos Grisões, o clima muda muito entre o vale e a montanha: nas cidades como Cuira (Chur) os verões são quentes, mas nos passos alpinos neva mesmo no verão. Falar do tempo (“tge temp fa oz?”) é um assunto tão comum quanto em qualquer lugar.',
      grammar_why:
        'O verbo “vegnir” se conjuga normalmente (vegn, vegns, vegn, vegnin, vegnis, vegnan) e é seguido de “a” mais o infinitivo do verbo principal, formando o futuro de qualquer verbo, sem exceção.',
      grammar_examples: [
        ['Damaun jau vegn a cumprar ina chautschas novas.', 'Amanhã eu vou comprar uma calça nova.'],
        ['Oz è chaud, damaun vegn ad esser fraid.', 'Hoje está quente, amanhã vai estar frio.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'rm-u3-l1',
        title: 'Tge temp fa oz?',
        kind: 'licao',
        words: ['plievgia', 'sulegl', 'vent', 'naiv', 'chaud', 'fraid'],
        cloze: [
          { sentence: 'Oz plova, igl è ___.', answer: 'plievgia', options: ['plievgia', 'sulegl', 'naiv'], translation: 'Hoje chove, tem chuva.' },
          { sentence: 'D\'enviern giaina ___ en las muntognas.', answer: 'naiv', options: ['naiv', 'plievgia', 'vent'], translation: 'No inverno cai neve nas montanhas.' },
          { sentence: 'Oz è ___ fitg, baiva aua!', answer: 'chaud', options: ['chaud', 'fraid', 'nivel'], translation: 'Hoje está muito quente, beba água!' },
        ],
        voice: {
          bot: 'Tge temp fa oz?',
          botTranslation: 'Que tempo faz hoje?',
          expected: ['Oz è chaud e splendra il sulegl.', 'chaud', 'sulegl'],
          hint: 'Descreva o tempo com “oz è…” e o adjetivo (chaud, fraid) ou um substantivo (sulegl, plievgia).',
        },
        communityPrompt: 'Descreva o tempo de hoje onde você mora, em romanche: se está quente ou frio, se tem sol, vento ou chuva.',
      },
      {
        id: 'rm-u3-l2',
        title: 'La vesta',
        kind: 'licao',
        words: ['chalzer', 'chapè', 'giachet', 'chautschas', 'chaltschiel', 'cumprar'],
        cloze: [
          { sentence: 'Jau vi ___ ina giachet nova.', answer: 'cumprar', options: ['cumprar', 'pensar', 'lavurar'], translation: 'Eu quero comprar uma jaqueta nova.' },
          { sentence: 'Mes ___ èn novs.', answer: 'chalzers', options: ['chalzers', 'chapès', 'chaltschiels'], translation: 'Meus sapatos são novos.' },
          { sentence: 'El porta in ___ cotschen.', answer: 'chapè', options: ['chapè', 'chalzer', 'giachet'], translation: 'Ele usa um chapéu vermelho.' },
        ],
        voice: {
          bot: 'Tge vesta portas ti oz?',
          botTranslation: 'Que roupa você está usando hoje?',
          expected: ['Oz jau porti ina giachet nova.', 'giachet', 'porti'],
          hint: 'Descreva a sua roupa com “jau porti…” e uma peça (giachet, chalzers).',
        },
        communityPrompt: 'Descreva a roupa que você está usando hoje, em romanche, e diga se você vai comprar algo novo em breve (“jau vegn a cumprar…”).',
      },
      {
        id: 'rm-u3-l3',
        title: 'Emprova: il temp e la vesta',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Tge temp fa oz, e tge vegns ti a far damaun?',
          botTranslation: 'Que tempo faz hoje, e o que você vai fazer amanhã?',
          expected: ['Oz è chaud. Damaun jau vegn a lavurar e a cumprar ina giachet nova.', 'jau vegn a', 'oz è'],
          hint: 'Descreva o tempo com “oz è…” e o futuro com “jau vegn a…” pra dizer o que vai fazer amanhã.',
        },
        communityPrompt: 'Escreva três frases: o tempo de hoje, uma peça de roupa que você gosta e um plano pra amanhã com “jau vegn a…”.',
      },
    ],
  },
  {
    id: 'rm-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Il corp, las professiuns e las sentiments',
    emoji: '🩺',
    card: {
      id: 'rm-c4',
      title: 'Comparar com “pli”',
      emoji: '📊',
      history:
        'O romanche forma o comparativo com “pli” (mais), como o italiano “più”, vindo antes do adjetivo — “pli gronda” é “maior”. O superlativo junta o artigo definido: “la pli veglia cultura” (a cultura mais antiga), um exemplo real da própria gramática de ensino do Rumantsch Grischun. Um intensificador diferente, “memia” (muito, demais), não é comparativo: “memias autas” é “muito altas”, não “mais altas”.',
      culture_tip:
        'Cuira (Chur), a capital dos Grisões, é a cidade mais antiga da Suíça com ocupação contínua. Falar da profissão e dos sentimentos é parte do dia a dia — os romanches, um povo pequeno e orgulhoso da própria língua, adoram perguntar “co vai?” de verdade, não só como fórmula de cortesia.',
      grammar_why:
        'O verbo “pudair” (poder, conseguir) é irregular: jau poss, ti pos, el/ella po, nus pudain, vus pudais, els pon. Ele é seguido direto do infinitivo, sem preposição.',
      grammar_examples: [
        ['Ella è pli auta che ses frar.', 'Ela é mais alta que o irmão dela.'],
        ['Jau poss discurrer in pau rumantsch.', 'Eu consigo falar um pouco de romanche.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'rm-u4-l1',
        title: 'Il corp',
        kind: 'licao',
        words: ['chau', 'maun', 'bratsch', 'comba', 'egl', 'bucca'],
        cloze: [
          { sentence: 'Il ___ ma fa mal.', answer: 'chau', options: ['chau', 'maun', 'bucca'], translation: 'A cabeça me dói.' },
          { sentence: 'Ella ha ___ blos.', answer: 'egls', options: ['egls', 'mauns', 'combas'], translation: 'Ela tem olhos claros.' },
          { sentence: 'Dai ma tia ___, per plaschair.', answer: 'maun', options: ['maun', 'chau', 'venter'], translation: 'Me dê a mão, por favor.' },
        ],
        voice: {
          bot: 'Tge ta fa mal?',
          botTranslation: 'O que dói em você?',
          expected: ['Il chau ma fa mal.', 'ma fa mal', 'chau'],
          hint: 'Responda com “[parte do corpo] ma fa mal” pra dizer o que dói.',
        },
        communityPrompt: 'Escreva três frases dizendo o que dói (“… ma fa mal”) usando palavras desta lição.',
      },
      {
        id: 'rm-u4-l2',
        title: 'Professiuns e sentiments',
        kind: 'licao',
        words: ['medi', 'tgirunza', 'cuschinier', 'cuntent', 'stanchel', 'pudair'],
        cloze: [
          { sentence: 'Mes bab è ___.', answer: 'medi', options: ['medi', 'tgirunza', 'cuntent'], translation: 'Meu pai é médico.' },
          { sentence: 'Jau sun ___ oz, jau hai lavurà fitg.', answer: 'stanchel', options: ['stanchel', 'cuntent', 'medi'], translation: 'Hoje estou cansado, trabalhei muito.' },
          { sentence: '___ discurrer in pau rumantsch.', answer: 'Jau poss', options: ['Jau poss', 'Jau hai', 'Jau sun'], translation: 'Eu consigo falar um pouco de romanche.' },
        ],
        voice: {
          bot: 'Tge lavur fas ti, e co ta sentas ti oz?',
          botTranslation: 'Que trabalho você faz, e como você está se sentindo hoje?',
          expected: ['Jau sun medi, e oz sun jau cuntent.', 'jau sun', 'cuntent'],
          hint: 'Diga a sua profissão com “jau sun…” e como se sente com “jau sun cuntent/stanchel”.',
        },
        communityPrompt: 'Descreva a sua profissão (ou a de um familiar) e como você está se sentindo hoje, em romanche.',
      },
      {
        id: 'rm-u4-l3',
        title: 'Emprova: il corp, professiuns e sentiments',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Tge lavur fas ti, e ta fa mal il chau oz?',
          botTranslation: 'Que trabalho você faz, e a cabeça dói em você hoje?',
          expected: ['Jau sun medi, e oz ma fa mal il chau, jau sun stanchel.', 'jau sun', 'ma fa mal'],
          hint: 'Diga a sua profissão (“jau sun…”) e se alguma parte do corpo dói (“… ma fa mal”).',
        },
        communityPrompt: 'Escreva um parágrafo curto: a sua profissão, como você está se sentindo e uma coisa que você consegue fazer bem (“jau poss…”).',
      },
    ],
  },
];
