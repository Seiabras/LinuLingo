import type { UnitSeed } from '../types';

/**
 * Trilha do friulano: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_FUR: UnitSeed[] = [
  {
    id: 'fur-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Mandi! I prins pas',
    emoji: '👋',
    card: {
      id: 'fur-c1',
      title: 'A língua do Friul',
      emoji: '🏔️',
      history:
        'O friulano (furlan) nasceu do latim falado em Aquileia, uma das grandes cidades romanas do norte da Itália, e hoje é falado no Friul, entre os Alpes e o mar Adriático, no nordeste da Itália (províncias de Udine, Pordenone e Gorizia). É uma língua própria, não um dialeto do italiano: a lei italiana de 1999 sobre as minorias linguísticas a reconhece, e a Região Friuli-Venezia Giulia tem uma agência só para ela, a ARLeF. Muitos linguistas o colocam, com o romanche e o ladino, no grupo reto-românico.',
      culture_tip:
        '“Mandi!” é a palavra mais friulana que existe: serve para chegar e para ir embora, como o “tchau” brasileiro. “Bundì” vale para o dia e “buine sere” para a noite. Entre amigos se usa “tu”; com desconhecidos, “vô”, com o verbo no plural.',
      grammar_why:
        'O friulano usa, além do pronome, uma pequena palavra obrigatória antes do verbo, o “clítico de sujeito”: “jo o soi” (eu sou), “tu tu sês” (você é), “lui al è” (ele é), “jê e je” (ela é). Mesmo sem o pronome, o clítico fica: “o soi di Udin” (sou de Udine).',
      grammar_examples: [
        ['Mandi! O mi clami Ane.', 'Oi! Eu me chamo Ana.'],
        ['E tu, cemût ti clamistu?', 'E você, como se chama?'],
        ['Lui al è di Udin, jê e je di Pordenon.', 'Ele é de Udine, ela é de Pordenone.'],
        ['Ben, graciis. E tu?', 'Bem, obrigado. E você?'],
      ],
      character_guide: [
        ['cj', 'um “k” molhado, entre “k” e “tch”', 'cjase (casa), cjan (cachorro)'],
        ['gj', 'um “g” molhado, entre “g” e “dj”', 'gjat (gato)'],
        ['ç', 'como o “tch” de “tchau”', 'piçul (pequeno)'],
        ['â, ê, î, ô, û', 'o acento circunflexo marca vogal longa', 'sûr (irmã), vuê (hoje), cîl (céu)'],
        ['gn', 'como o “nh” do português', 'gnot (noite), agns (anos)'],
      ],
    },
    lessons: [
      {
        id: 'fur-u1-l1',
        title: 'Mandi, graciis!',
        kind: 'licao',
        words: ['mandi', 'bundì', 'buine sere', 'buine gnot', 'graciis', 'par plasê'],
        cloze: [
          { sentence: '___, Marie! Cemût stâstu?', answer: 'Mandi', options: ['Mandi', 'Graciis', 'Par plasê'], translation: 'Oi, Maria! Como vai você?' },
          { sentence: 'Al è tart: ___!', answer: 'buine gnot', options: ['buine gnot', 'bundì', 'graciis'], translation: 'Está tarde: boa noite!' },
          { sentence: 'Un cafè, ___.', answer: 'par plasê', options: ['par plasê', 'mandi', 'bundì'], translation: 'Um café, por favor.' },
        ],
        voice: {
          bot: 'Mandi! Cemût stâstu?',
          botTranslation: 'Oi! Como vai você?',
          expected: ['Ben, graciis! E tu?', 'ben', 'graciis'],
          hint: 'Responda que vai bem e devolva a pergunta: “Ben, graciis! E tu?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em friulano: um de manhã (“Bundì…”), um à noite (“Buine sere…”) e uma despedida (“Mandi”).',
      },
      {
        id: 'fur-u1-l2',
        title: 'Jo, tu, lui, jê',
        kind: 'licao',
        words: ['jo', 'tu', 'lui', 'jê', 'clamâsi', 'non'],
        cloze: [
          { sentence: '___ o mi clami Sare.', answer: 'Jo', options: ['Jo', 'Tu', 'Lui'], translation: 'Eu me chamo Sara.' },
          { sentence: 'E ___, cemût ti clamistu?', answer: 'tu', options: ['tu', 'lui', 'nô'], translation: 'E você, como se chama?' },
          { sentence: '___ al è di Udin.', answer: 'Lui', options: ['Lui', 'Jê', 'Jo'], translation: 'Ele é de Udine.' },
        ],
        voice: {
          bot: 'Mandi! Cemût ti clamistu?',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['O mi clami Ane. E tu?', 'o mi clami', 'e tu'],
          hint: 'Diga o seu nome com “O mi clami…” e devolva a pergunta com “E tu?”.',
        },
        communityPrompt: 'Apresente-se em friulano: diga o seu nome com “O mi clami…” e pergunte o nome de alguém com “Cemût ti clamistu?”.',
      },
      {
        id: 'fur-u1-l3',
        title: 'Prove: i prins pas',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Mandi! O mi clami Toni. E tu, cemût ti clamistu? Di dulà sêstu?',
          botTranslation: 'Oi! Eu me chamo Toni. E você, como se chama? De onde você é?',
          expected: ['Mandi! O mi clami Lucie e o soi di São Paulo.', 'o mi clami', 'o soi di', 'mandi'],
          hint: 'Devolva o cumprimento (“Mandi!”), diga o nome com “O mi clami…” e a cidade com “O soi di…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “O mi clami…”, cidade com “O soi di…” e “Mandi!” no fim.',
      },
    ],
  },
  {
    id: 'fur-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'La famee e la cjase',
    emoji: '👪',
    card: {
      id: 'fur-c2',
      title: 'Il, la, i, lis e o plural em -s',
      emoji: '🧭',
      history:
        'O friulano faz o plural com -s, como o português e o espanhol, e não com vogal, como o italiano: “fradi” → “fradis” (irmãos), “cjase” → “cjasis” (casas). É um dos traços que o separam do italiano falado ao lado e o aproximam das línguas românicas do oeste.',
      culture_tip:
        'O “frico”, feito de queijo montasio e batata, é o prato mais conhecido do Friul, e o “tai di vin” (a taça de vinho) acompanha a conversa nos bares das aldeias, as “ostariis”.',
      grammar_why:
        'O artigo definido é “il” (masculino) e “la” (feminino); no plural, “i” e “lis”. O possessivo vem com o artigo: “il gno amì” (o meu amigo), “la mê amie” (a minha amiga); com os nomes da família, o artigo cai: “gno pari” (meu pai), “mê mari” (minha mãe).',
      grammar_examples: [
        ['La mê famee e je grande.', 'A minha família é grande.'],
        ['O ai un fradi e une sûr.', 'Tenho um irmão e uma irmã.'],
        ['Gno pari al è di Gurize.', 'O meu pai é de Gorizia.'],
        ['Mi plâs une vore il formadi.', 'Eu gosto muito de queijo.'],
      ],
      character_guide: [
        ['-is', 'o plural dos femininos em -e', 'cjase → cjasis, amie → amiis'],
        ['al / e', 'os clíticos de “ele” e “ela”', 'al è (ele é), e je (ela é)'],
      ],
    },
    lessons: [
      {
        id: 'fur-u2-l1',
        title: 'La mê famee',
        kind: 'licao',
        words: ['famee', 'mari', 'pari', 'fradi', 'sûr', 'vê'],
        cloze: [
          { sentence: 'Mê ___ e je di Udin.', answer: 'mari', options: ['mari', 'pari', 'fradi'], translation: 'A minha mãe é de Udine.' },
          { sentence: 'O ___ un fradi.', answer: 'ai', options: ['ai', 'soi', 'voi'], translation: 'Eu tenho um irmão.' },
          { sentence: 'Gno ___ al è di Gurize.', answer: 'pari', options: ['pari', 'sûr', 'mari'], translation: 'O meu pai é de Gorizia.' },
        ],
        voice: {
          bot: 'Âstu fradis o sûrs?',
          botTranslation: 'Você tem irmãos ou irmãs?',
          expected: ['Sì, o ai un fradi e une sûr.', 'o ai', 'fradi', 'sûr'],
          hint: 'Responda com “Sì, o ai…” e diga quantos irmãos você tem.',
        },
        communityPrompt: 'Descreva a sua família em friulano: quantos irmãos (fradis) e irmãs (sûrs) você tem e de onde são os seus pais.',
      },
      {
        id: 'fur-u2-l2',
        title: 'A cjase',
        kind: 'licao',
        words: ['cjase', 'aghe', 'pan', 'lat', 'formadi', 'plasê'],
        cloze: [
          { sentence: 'La mê ___ e je piçule.', answer: 'cjase', options: ['cjase', 'aghe', 'pan'], translation: 'A minha casa é pequena.' },
          { sentence: 'O bêf ___.', answer: 'aghe', options: ['aghe', 'pan', 'formadi'], translation: 'Eu bebo água.' },
          { sentence: 'O mangji pan e ___.', answer: 'formadi', options: ['formadi', 'aghe', 'lat'], translation: 'Eu como pão e queijo.' },
        ],
        voice: {
          bot: 'Ce mangistu vuê?',
          botTranslation: 'O que você come hoje?',
          expected: ['O mangji pan e formadi.', 'o mangji', 'pan', 'formadi'],
          hint: 'Diga o que come com “O mangji…”.',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: “O mangji…” e “O bêf…”.',
      },
      {
        id: 'fur-u2-l3',
        title: 'Prove: la famee e la cjase',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Contimi de tô famee: âstu fradis o sûrs?',
          botTranslation: 'Me conte da sua família: você tem irmãos ou irmãs?',
          expected: ['Sì, o ai une sûr. E si clame Marie.', 'o ai', 'si clame'],
          hint: 'Diga quantos irmãos tem (“o ai…”) e como se chamam (“al si clame…”, “e si clame…”).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “o ai”, “si clame” e “al è / e je”.',
      },
    ],
  },
  {
    id: 'fur-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Il timp e i vistîts',
    emoji: '🌦️',
    card: {
      id: 'fur-c3',
      title: 'O futuro sintético: -arai, -arâs, -arà',
      emoji: '🔮',
      history:
        'Diferente do romanche e do sardo, que formam o futuro com um verbo auxiliar, o friulano tem um futuro sintético de verdade: uma terminação só (-arai, -arâs, -arà, -arìn, -arês, -aran pros verbos em -â), acrescentada direto ao radical do infinitivo — “o fevelarai” é “eu vou falar”. É a mesma estratégia do português (“falarei”), herdada do latim, que o romanche e o sardo perderam.',
      culture_tip:
        'O Friul, no nordeste da Itália, tem um clima bem diferente da Sardenha: invernos frios com neve nas montanhas Cárnicas e verões quentes na planície. Falar do tempo (“ce timp fasial vuê?”) é comum em qualquer conversa.',
      grammar_why:
        'As terminações do futuro se acrescentam ao radical do infinitivo (sem o -â final): fevel- + -arai = fevelarai. É regular pra todos os verbos regulares em -â.',
      grammar_examples: [
        ['Doman o comprarai un vistît gnûf.', 'Amanhã eu vou comprar uma roupa nova.'],
        ['Vuê al è cjalt, doman al sarà frêt.', 'Hoje está quente, amanhã vai estar frio.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'fur-u3-l1',
        title: 'Ce timp fasial vuê?',
        kind: 'licao',
        words: ['ploie', 'soreli', 'vint', 'nêf', 'cjalt', 'frêt'],
        cloze: [
          { sentence: 'Vuê al plouf, e je ___.', answer: 'ploie', options: ['ploie', 'soreli', 'nêf'], translation: 'Hoje chove, tem chuva.' },
          { sentence: 'Di unvier e ven jù la ___ tai monts.', answer: 'nêf', options: ['nêf', 'ploie', 'vint'], translation: 'No inverno cai neve nas montanhas.' },
          { sentence: 'Vuê al è ___ propi, bêf aghe!', answer: 'cjalt', options: ['cjalt', 'frêt', 'nûl'], translation: 'Hoje está muito quente, beba água!' },
        ],
        voice: {
          bot: 'Ce timp fasial vuê?',
          botTranslation: 'Que tempo faz hoje?',
          expected: ['Vuê al è cjalt e al splendrìs il soreli.', 'cjalt', 'soreli'],
          hint: 'Descreva o tempo com “vuê al è…” e o adjetivo (cjalt, frêt) ou um substantivo (soreli, ploie).',
        },
        communityPrompt: 'Descreva o tempo de hoje onde você mora, em friulano: se está quente ou frio, se tem sol, vento ou chuva.',
      },
      {
        id: 'fur-u3-l2',
        title: 'I vistîts',
        kind: 'licao',
        words: ['scarpa', 'cjapiel', 'cjalcìn', 'vistît', 'comprâ', 'lavorâ'],
        cloze: [
          { sentence: 'O vuei ___ un vistît gnûf.', answer: 'comprâ', options: ['comprâ', 'lavorâ', 'pensâ'], translation: 'Eu quero comprar uma roupa nova.' },
          { sentence: 'Lis mês ___ a son gnovis.', answer: 'scarpis', options: ['scarpis', 'cjapiei', 'cjalcìnis'], translation: 'Meus sapatos são novos.' },
          { sentence: 'Al à un ___ ros.', answer: 'cjapiel', options: ['cjapiel', 'cjalcìn', 'vistît'], translation: 'Ele usa um chapéu vermelho.' },
        ],
        voice: {
          bot: 'Ce vistît âstu vuê?',
          botTranslation: 'Que roupa você está usando hoje?',
          expected: ['Vuê o ai un vistît gnûf.', 'vistît', 'o ai'],
          hint: 'Descreva a sua roupa com “o ai…” e uma peça (vistît, scarpis).',
        },
        communityPrompt: 'Descreva a roupa que você está usando hoje, em friulano, e diga se você vai comprar algo novo em breve (“o comprarai…”).',
      },
      {
        id: 'fur-u3-l3',
        title: 'Prove: il timp e i vistîts',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ce timp fasial vuê, e ce fasaristu doman?',
          botTranslation: 'Que tempo faz hoje, e o que você vai fazer amanhã?',
          expected: ['Vuê al è cjalt. Doman o lavorarai e o comprarai un vistît gnûf.', 'o lavorarai', 'vuê al è'],
          hint: 'Descreva o tempo com “vuê al è…” e o futuro com a terminação “-arai” pra dizer o que vai fazer amanhã.',
        },
        communityPrompt: 'Escreva três frases: o tempo de hoje, uma peça de roupa que você gosta e um plano pra amanhã com o futuro em “-arai”.',
      },
    ],
  },
  {
    id: 'fur-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Il cuarp, lis professions e i sentiments',
    emoji: '🩺',
    card: {
      id: 'fur-c4',
      title: 'Comparar com “plui”',
      emoji: '📊',
      history:
        'O friulano forma o comparativo com “plui” (mais), cognato do italiano “più” — o próprio Wikcionário o descreve como a forma comparativa de “molt” (muito). “Plui” vem antes do adjetivo, e o superlativo junta o artigo definido: “il/la plui…”. É a mesma lógica do sardo (“prus”) e do romanche (“pli”), as três línguas vindo da mesma raiz latina “plus”.',
      culture_tip:
        'Udin (Udine), a maior cidade do Friul, é famosa pela sua Piazza della Libertà, de inspiração veneziana. Falar das profissões e dos sentimentos é parte do dia a dia — os friulanos usam a própria língua com orgulho, ao lado do italiano.',
      grammar_why:
        'O verbo “podê” (poder) é irregular: tu podês, lui/jê pò (as outras pessoas seguem o padrão dos verbos em -ê). Ele é seguido direto do infinitivo, sem preposição.',
      grammar_examples: [
        ['Jê e je plui alte di so fradi.', 'Ela é mais alta que o irmão dela.'],
        ['Tu podês fevelâ furlan cun mè.', 'Você pode falar friulano comigo.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'fur-u4-l1',
        title: 'Il cuarp',
        kind: 'licao',
        words: ['cjâf', 'man', 'braç', 'gjambe', 'voli', 'bocje'],
        cloze: [
          { sentence: 'Il ___ mi dûl.', answer: 'cjâf', options: ['cjâf', 'man', 'bocje'], translation: 'A cabeça me dói.' },
          { sentence: 'Jê e à i ___ neris.', answer: 'vôi', options: ['vôi', 'mans', 'gjambis'], translation: 'Ela tem olhos escuros.' },
          { sentence: 'Dami la ___, par plasê.', answer: 'man', options: ['man', 'cjâf', 'panze'], translation: 'Me dê a mão, por favor.' },
        ],
        voice: {
          bot: 'Ce mâl âstu?',
          botTranslation: 'O que dói em você?',
          expected: ['Il cjâf mi dûl.', 'mi dûl', 'cjâf'],
          hint: 'Responda com “[parte do corpo] mi dûl” pra dizer o que dói.',
        },
        communityPrompt: 'Escreva três frases dizendo o que dói (“… mi dûl”) usando palavras desta lição.',
      },
      {
        id: 'fur-u4-l2',
        title: 'Professions e sentiments',
        kind: 'licao',
        words: ['dotôr', 'insegnant', 'feliç', 'avilît', 'inrabiât', 'pensâ'],
        cloze: [
          { sentence: 'Gno pari al è ___.', answer: 'dotôr', options: ['dotôr', 'insegnant', 'feliç'], translation: 'Meu pai é médico.' },
          { sentence: 'Vuê o soi ___, no mi sint ben.', answer: 'avilît', options: ['avilît', 'feliç', 'inrabiât'], translation: 'Hoje estou triste, não me sinto bem.' },
          { sentence: 'Ce ___ di chest?', answer: 'pensistu', options: ['pensistu', 'sintistu', 'compristu'], translation: 'O que você pensa disso?' },
        ],
        voice: {
          bot: 'Ce lavôr fastu, e cemût si sintistu vuê?',
          botTranslation: 'Que trabalho você faz, e como você está se sentindo hoje?',
          expected: ['O soi insegnant, e vuê o soi feliç.', 'o soi', 'feliç'],
          hint: 'Diga a sua profissão com “o soi…” e como se sente com “o soi feliç/avilît”.',
        },
        communityPrompt: 'Descreva a sua profissão (ou a de um familiar) e como você está se sentindo hoje, em friulano.',
      },
      {
        id: 'fur-u4-l3',
        title: 'Prove: il cuarp, lis professions e i sentiments',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ce lavôr fastu, e ti dûl il cjâf vuê?',
          botTranslation: 'Que trabalho você faz, e a cabeça dói em você hoje?',
          expected: ['O soi insegnant, e vuê mi dûl il cjâf, o soi avilît.', 'o soi', 'mi dûl'],
          hint: 'Diga a sua profissão (“o soi…”) e se alguma parte do corpo dói (“… mi dûl”).',
        },
        communityPrompt: 'Escreva um parágrafo curto: a sua profissão, como você está se sentindo e uma coisa que você sabe fazer bem.',
      },
    ],
  },
];
