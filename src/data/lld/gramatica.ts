import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do ladino das Dolomitas (idioma do vale de Badia) — por enquanto do A1.1 ao
 * A2.2 (pacote incompleto). Conjugações conferidas nas tabelas verbais do dicionário
 * «Dizionar Ladin Val Badia–Talian» do Istitut Ladin Micurá de Rü.
 */
export const GRAMMAR_LLD: GrammarTopic[] = [
  {
    id: 'lld-g1',
    level: 'A1.1',
    title: 'Pronúncia: ë, ö, ü e as letras c e ch',
    emoji: '🔤',
    summary: 'O badiot usa o alfabeto latino com três vogais com trema e regras para c, ch, g e gh parecidas com as do italiano.',
    sections: [
      {
        text: 'Quase tudo se lê como em português ou italiano. As novidades são três vogais que o português não tem e a troca entre “c” e “ch” antes de e e i.',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['ë', 'vogal central, entre “a” e “e”', 'sëra (noite), bëgn (bem)'],
            ['ö', '“e” com os lábios arredondados', 'nöt (noite), incö (hoje)'],
            ['ü', '“i” com os lábios arredondados', 'düc (todos), nü (nove)'],
            ['c (antes de e, i) / ci', '“tch”', 'cité (cidade), ciasa (casa)'],
            ['ch (antes de e, i)', '“k”', 'chiló (aqui), chësc (este)'],
            ['j', 'como o “j” do português', 'jí (ir), jöbia (quinta-feira)'],
          ],
        },
        examples: [
          ['Bona nöt!', 'Boa noite!'],
          ['Iö vá te cité.', 'Eu vou à cidade.'],
        ],
      },
    ],
    pitfalls: [
      'Ler “ciasa” com “s” de “sapo”: é “tch” no começo e o “s” entre vogais soa como “z”.',
      'Ignorar o trema: “ö” e “ü” mudam o som e muitas vezes o sentido da palavra.',
    ],
    quiz: [
      { question: 'Como começa o som de “cité” (cidade)?', options: ['Com “tch”', 'Com “s”', 'Com “k”'], answer: 'Com “tch”', explanation: 'Antes de e e i, o “c” ladino soa “tch”, como no italiano “città”.' },
      { question: 'O que quer dizer “nöt”?', options: ['noite', 'não', 'nove'], answer: 'noite', explanation: 'Do latim “nocte”; “bona nöt” é “boa noite”. Nove é “nü”.' },
    ],
  },
  {
    id: 'lld-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo ester',
    emoji: '🙋',
    summary: 'Os pronomes pessoais do badiot e o presente de “ester” (ser, estar).',
    sections: [
      {
        text: 'Os pronomes são iö, tö, ël (ele), ëra (ela), nos, os e ëi (eles) ou ëres (elas). O verbo “ester” serve para dizer o que ou de onde a pessoa é. Repare que “iö sun” e “nos sun” têm a mesma forma, e a terceira pessoa é “é” no singular e no plural.',
        table: {
          head: ['Pronome', 'Tradução', 'ester'],
          rows: [
            ['iö', 'eu', 'sun'],
            ['tö', 'tu, você', 'es'],
            ['ël / ëra', 'ele / ela', 'é'],
            ['nos', 'nós', 'sun'],
            ['os', 'vocês; o senhor (formal)', 'sëis'],
            ['ëi / ëres', 'eles / elas', 'é'],
          ],
        },
        examples: [
          ['Iö sun da São Paulo.', 'Sou de São Paulo.'],
          ['Os sëis mi compagns.', 'Vocês são meus amigos.'],
        ],
      },
      {
        text: 'Na fala, além do pronome forte, aparecem formas curtas grudadas no verbo: “i” para eu, “al” para ele, “ara” para ela e “ai” para eles: “al é n bun pere” (ele é um bom pai), “ara é na bona compagna” (ela é uma boa amiga).',
        examples: [
          ['Al é n bun pere.', 'Ele é um bom pai.'],
          ['Ara é na bona compagna.', 'Ela é uma boa amiga.'],
        ],
      },
    ],
    pitfalls: [
      'Confundir “os” (vocês, ou o senhor/a senhora) com o artigo português “os”.',
      'Estranhar “iö sun” e “nos sun”: são mesmo iguais, e quem mostra a pessoa é o pronome.',
    ],
    quiz: [
      { question: 'Complete: “Iö ___ da Curitiba.”', options: ['sun', 'é', 'sëis'], answer: 'sun', explanation: '“Sun” é a forma de “ester” para “iö” (e também para “nos”).' },
      { question: '“Os sëis” serve para…', options: ['vocês e o tratamento formal', 'só para nós', 'só para eles'], answer: 'vocês e o tratamento formal', explanation: 'Como o “vous” francês, “os” é o plural e também a forma educada de falar com uma pessoa.' },
    ],
  },
  {
    id: 'lld-g3',
    level: 'A1.2',
    title: 'Le, la e o possessivo',
    emoji: '👪',
    summary: 'Artigos le/la/i/les, os indefinidos n/na e possessivos que concordam com a coisa possuída.',
    sections: [
      {
        text: 'Os substantivos são masculinos ou femininos. O artigo definido é “le” e “la”, no plural “i” e “les”, e vira “l\'” antes de vogal. O indefinido é “n” (masculino) e “na” (feminino). O plural nem sempre é só um -s: iat → iac, fre → fredesc, so → sorus.',
        table: {
          head: ['', 'singular', 'plural'],
          rows: [
            ['masculino', 'le iat', 'i iac'],
            ['feminino', 'la ciasa', 'les ciases'],
            ['meu / minha', 'mi fre / mia ciasa', 'mi fredesc / mies sorus'],
          ],
        },
        examples: [
          ['Mia ciasa é picera.', 'A minha casa é pequena.'],
          ['To cian é propi pros.', 'O seu cachorro é mesmo bonzinho.'],
        ],
      },
    ],
    pitfalls: [
      'Usar artigo antes do possessivo como em português (“o meu irmão”): em badiot é só “mi fre”.',
      'Confundir “so” (irmã) com o possessivo “so” (seu, dele): “so pere” é “o pai dele”.',
    ],
    quiz: [
      { question: 'Qual é o plural de “fre” (irmão)?', options: ['fredesc', 'fres', 'frei'], answer: 'fredesc', explanation: 'É um plural irregular: n fre, dui fredesc.' },
      { question: 'Como se diz “minha casa”?', options: ['mia ciasa', 'mi ciasa', 'la mia ciasa'], answer: 'mia ciasa', explanation: 'O possessivo concorda com “ciasa” (feminino) e vem sem artigo.' },
    ],
  },
  {
    id: 'lld-g4',
    level: 'A1.2',
    title: 'Perguntas com “pa” e a negação “ne… nia”',
    emoji: '❓',
    summary: 'Nas perguntas o verbo ganha uma terminação própria e a partícula “pa”; para negar, “ne” antes do verbo e “nia” depois.',
    sections: [
      {
        text: 'O badiot tem uma forma do verbo só para perguntar: “tö as” (você tem) vira “aste?”, “tö es” (você é) vira “este?”. Quase sempre vem junto a partícula “pa”: “Co aste pa inom?”, “Da olá este pa?”.',
        table: {
          head: ['Pronome', 'avëi', 'na pergunta'],
          rows: [
            ['iö', 'á', 'ái?'],
            ['tö', 'as', 'aste?'],
            ['ël / ëra', 'á', 'ál? / ára?'],
            ['nos', 'un', 'unse?'],
            ['os', 'ëis', 'ëise?'],
            ['ëi / ëres', 'á', 'ái? / áres?'],
          ],
        },
        examples: [
          ['Aste pa fredesc y sorus?', 'Você tem irmãos e irmãs?'],
          ['Can vaste pa a ciasa?', 'Quando você vai para casa?'],
        ],
      },
      {
        text: 'Para negar, “ne” vem antes do verbo e “nia” depois, como o francês “ne… pas”: “iö ne sá nia” (eu não sei). Antes de vogal, “ne” vira “n\'”.',
        examples: [
          ['Iö ne sá nia.', 'Eu não sei.'],
          ['Ne te plejel nia?', 'Você não gosta?'],
        ],
      },
    ],
    pitfalls: ['Esquecer o “nia”: “iö ne sá” sozinho soa incompleto.', 'Usar “tö as?” para perguntar: a forma de pergunta é “aste?”.'],
    quiz: [
      { question: 'Como se diz “eu não sei”?', options: ['Iö ne sá nia.', 'Iö nia sá.', 'Ne iö sá.'], answer: 'Iö ne sá nia.', explanation: 'A negação tem duas partes: “ne” antes do verbo e “nia” depois.' },
      { question: '“Co aste pa inom?” quer dizer…', options: ['Como você se chama?', 'Onde você mora?', 'O que você quer?'], answer: 'Como você se chama?', explanation: 'Em badiot o nome se diz com “avëi inom”, “ter nome”; “aste” é a forma de pergunta de “tö as”.' },
    ],
  },
  // ── A2.1 e A2.2 (10/10/2026) ──
  // Fontes: as tabelas verbais (“schemi verbali”) e a fraseologia do dicionário on-line do Istitut
  // Ladin Micurá de Rü (itavalbadia.ladinternet.it: avëi, ester, jí, lauré, cumpré, messëi, podëi,
  // e os verbetes piovere, nevicare, tempo, più, meno, meglio, migliore, male, dolore), consultados em
  // 10/10/2026; a regra do verbo em segundo lugar, de Jan Casalicchio, “Il ladino e i suoi idiomi”
  // (caiscuola.cai.it). Frases montadas: “le cil é plëgn de niores” (a frase do dicionário “incö é
  // le cil plëgn de niores” na ordem normal, sem o advérbio), “al é dër frëit” (“d'invern él dër
  // frëit” na ordem normal), “incö él frëit” (“incö él veramënter frëit” sem o advérbio, como “defora
  // él frëit” e “chiló él frëit”, que estão no dicionário) e “al plöi” (plöi, a forma que o dicionário dá
  // para plovëi, com o sujeito vazio “al”, como em “al nëi”). “Al é frëit” é a frase do dicionário
  // “vistete, al é frëit!” (verbete vestirsi).
  {
    id: 'lld-g5',
    level: 'A2.1',
    title: 'O verbo em segundo lugar: “Incö él frëit”',
    emoji: '🔄',
    summary: 'No badiot o verbo fica em segundo lugar: se a frase começa com um advérbio, o verbo vem antes do sujeito, na forma da pergunta.',
    sections: [
      {
        text: 'Na ordem normal o sujeito vem primeiro: “al é frëit” (está frio). Mas o badiot, como o gherdëina, quer o verbo em segundo lugar. Se a frase começa com outra coisa, como “incö” (hoje), “inier” (ontem) ou “d\'invern” (no inverno), o verbo vem logo depois e o sujeito passa para trás dele, grudado no verbo. É a mesma forma da pergunta: “él?”, “ál?”.',
        table: {
          head: ['Ordem normal', 'Começando com advérbio', 'Tradução'],
          rows: [
            ['al é frëit', 'incö él frëit', 'hoje está frio'],
            ['al á plovü döt le de', 'inier ál plovü döt le de', 'ontem choveu o dia inteiro'],
            ['al é dër frëit', 'd\'invern él dër frëit', 'no inverno faz muito frio'],
            ['le cil é plëgn de niores', 'incö é le cil plëgn de niores', 'hoje o céu está cheio de nuvens'],
          ],
        },
        examples: [
          ['Ci tëmp él pa incö?', 'Que tempo faz hoje?'],
          ['Doman sarál bel tëmp.', 'Amanhã vai fazer tempo bom.'],
        ],
      },
      {
        text: 'Para falar do tempo, o badiot usa verbos sem sujeito de verdade, como o português “chove”: “al nëi” (está nevando), “al plöi” (chove), “al dá sorëdl” (faz sol). Esse “al” não quer dizer “ele”: é só o sujeito vazio da frase.',
        examples: [
          ['Al nëi.', 'Está nevando.'],
          ['Al dá sorëdl.', 'Faz sol.'],
          ['Inier ál plovü döt le de.', 'Ontem choveu o dia inteiro.'],
        ],
      },
    ],
    pitfalls: [
      'Dizer “incö al é frëit”: depois de “incö”, o verbo vem antes do sujeito, “incö él frëit”.',
      'Traduzir o “al” de “al nëi” por “ele”: nas frases sobre o tempo ele não se traduz.',
    ],
    quiz: [
      { question: 'Complete: “Incö ___ dër cialt.”', options: ['él', 'al é', 'é al'], answer: 'él', explanation: 'Depois de “incö”, o verbo vem em segundo lugar, na forma da pergunta: “incö él dër cialt”.' },
      { question: 'Como se diz “ontem choveu o dia inteiro”?', options: ['Inier ál plovü döt le de.', 'Al inier á plovü döt le de.', 'Inier plovü ál döt le de.'], answer: 'Inier ál plovü döt le de.', explanation: 'Começando com “inier”, o auxiliar vem em segundo lugar com o sujeito grudado: “ál”, e o particípio depois.' },
      { question: '“Al nëi” quer dizer…', options: ['Está nevando.', 'Ele é novo.', 'Faz sol.'], answer: 'Está nevando.', explanation: '“Novëi” é nevar; “al nëi” é “neva, está nevando”, com o sujeito vazio “al”.' },
    ],
  },
  {
    id: 'lld-g6',
    level: 'A2.1',
    title: 'O passado: “iö á cumpré”, “iö sun jü”',
    emoji: '⏪',
    summary: 'O passado do dia a dia se faz com avëi ou ester mais o particípio, como o passato prossimo italiano.',
    sections: [
      {
        text: 'Para contar o que aconteceu, use o presente de “avëi” (iö á, tö as, ël á…) e o particípio do verbo. Os verbos em -é fazem o particípio também em -é: lauré → lauré, cumpré → cumpré. Outros têm particípio próprio, que vale decorar: avëi → albü, podëi → podü, messëi → messü.',
        table: {
          head: ['Pronome', 'lauré (trabalhar)', 'cumpré (comprar)'],
          rows: [
            ['iö', 'á lauré', 'á cumpré'],
            ['tö', 'as lauré', 'as cumpré'],
            ['ël / ëra', 'á lauré', 'á cumpré'],
            ['nos', 'un lauré', 'un cumpré'],
            ['os', 'ëis lauré', 'ëis cumpré'],
            ['ëi / ëres', 'á lauré', 'á cumpré'],
          ],
        },
        examples: [
          ['Ël s\'á cumpré n ciapel.', 'Ele comprou um chapéu para si.'],
          ['I á dormí assá.', 'Eu dormi o suficiente.'],
          ['T\'as lauré debann.', 'Você trabalhou de graça.'],
        ],
      },
      {
        text: 'Verbos de movimento, como “jí” (ir), e o próprio “ester” usam “ester” como auxiliar. Aí o particípio concorda com o sujeito, como no italiano: um homem diz “iö sun jü”, uma mulher diz “iö sun jüda”; no plural, “nos sun jüs” e “nos sun jüdes”.',
        table: {
          head: ['Pronome', 'jí (masculino)', 'jí (feminino)'],
          rows: [
            ['iö', 'sun jü', 'sun jüda'],
            ['tö', 'es jü', 'es jüda'],
            ['ël / ëra', 'é jü', 'é jüda'],
            ['nos', 'sun jüs', 'sun jüdes'],
            ['os', 'sëis jüs', 'sëis jüdes'],
            ['ëi / ëres', 'é jüs', 'é jüdes'],
          ],
        },
        examples: [
          ['Al é gnü a mans ötes.', 'Ele veio de mãos vazias.'],
          ['I prisc é jüs sö.', 'Os preços subiram.'],
        ],
      },
    ],
    pitfalls: [
      'Usar “avëi” com “jí”: é “iö sun jü”, não “iö á jü”.',
      'Esquecer a concordância com “ester”: uma mulher diz “iö sun jüda”.',
    ],
    quiz: [
      { question: 'Complete: “Iö ___ cumpré na ciamëja.”', options: ['á', 'sun', 'as'], answer: 'á', explanation: '“Cumpré” usa avëi: iö á cumpré.' },
      { question: 'Uma mulher diz “eu fui”:', options: ['iö sun jüda', 'iö á jü', 'iö sun jü'], answer: 'iö sun jüda', explanation: '“Jí” usa ester, e o particípio concorda: jü (masculino), jüda (feminino).' },
      { question: 'Qual é o particípio de “avëi”?', options: ['albü', 'avü', 'avé'], answer: 'albü', explanation: 'É irregular: iö á albü (eu tive).' },
    ],
  },
  {
    id: 'lld-g7',
    level: 'A2.2',
    title: 'Messëi e podëi; “avëi me”',
    emoji: '☝️',
    summary: '“Messëi” (dever, precisar) e “podëi” (poder) com o infinitivo logo depois, e “avëi me” para dizer o que dói.',
    sections: [
      {
        text: 'Os dois verbos são irregulares no presente. O infinitivo vem logo depois. Na pergunta, como sempre, o verbo ganha a forma própria: “pói?” (posso?), “mësseste?” (você precisa?).',
        table: {
          head: ['Pronome', 'messëi', 'podëi'],
          rows: [
            ['iö', 'mëssi', 'pó'],
            ['tö', 'mësses', 'pos'],
            ['ël / ëra', 'mëss', 'pó'],
            ['nos', 'messun', 'podun'],
            ['os', 'messëis', 'podëis'],
            ['ëi / ëres', 'mëss', 'pó'],
          ],
        },
        examples: [
          ['Incö mëssi jí dal dotur.', 'Hoje preciso ir ao médico.'],
          ['Pói mangé chësc pom?', 'Posso comer esta maçã?'],
          ['Te mësses avëi paziënza.', 'Você precisa ter paciência.'],
          ['An pó vire cun püch.', 'Dá para viver com pouco.'],
        ],
      },
      {
        text: 'Para dizer o que dói, o badiot usa “avëi me” (ter dor) e uma preposição antes da parte do corpo, que muda de expressão para expressão e vale decorar junto: “i á me de vënter” (estou com dor de barriga), “i á me a na iama” (uma perna está doendo), “i á me tl col” (estou com dor de garganta).',
        examples: [
          ['I á me a na iama.', 'Uma perna está doendo.'],
          ['Al á me a n brac.', 'Ele está com dor num braço.'],
          ['I á me tl col.', 'Estou com dor de garganta.'],
        ],
      },
    ],
    pitfalls: [
      'Confundir “mëss” (ele precisa) com “mëssi” (eu preciso).',
      'Traduzir “avëi me” palavra por palavra: “me” aqui é o substantivo “dor”, não o pronome.',
    ],
    quiz: [
      { question: 'Como se diz “hoje preciso ir ao médico”?', options: ['Incö mëssi jí dal dotur.', 'Incö pó jí dal dotur.', 'Incö jí mëssi dal dotur.'], answer: 'Incö mëssi jí dal dotur.', explanation: '“Mëssi” é “eu preciso”, e o infinitivo “jí” vem logo depois.' },
      { question: 'Complete: “Tö ___ avëi paziënza.”', options: ['mësses', 'mëssi', 'messun'], answer: 'mësses', explanation: 'É a forma de “tö”: tö mësses.' },
      { question: '“I á me de vënter” quer dizer…', options: ['Estou com dor de barriga.', 'Estou com fome.', 'Tenho medo.'], answer: 'Estou com dor de barriga.', explanation: '“Avëi me” é “ter dor”, e “vënter” é a barriga.' },
    ],
  },
  {
    id: 'lld-g8',
    level: 'A2.2',
    title: 'Comparar: “plü… co”, “manco… co”, “le miú”',
    emoji: '📊',
    summary: '“Plü” (mais) e “manco” (menos) antes do adjetivo, “co” antes do segundo termo; e as formas “miú” e “damí” (melhor).',
    sections: [
      {
        text: 'Para comparar, ponha “plü” (mais) ou “manco” (menos) antes do adjetivo e “co” antes do segundo termo: “ël é plü bel co tö” (ele é mais bonito que você). Com o artigo, vira superlativo: “le mëis plü cialt” (o mês mais quente).',
        table: {
          head: ['', 'badiot', 'português'],
          rows: [
            ['mais… que', 'plü cialt co inier', 'mais quente que ontem'],
            ['menos… que', 'manco important co l\'ater', 'menos importante que o outro'],
            ['o mais…', 'le mëis plü cialt', 'o mês mais quente'],
            ['melhor', 'miú / damí', 'melhor (adjetivo / advérbio)'],
          ],
        },
        examples: [
          ['Incö él plü cialt co inier.', 'Hoje está mais quente que ontem.'],
          ['Al costa manco co diesc euro.', 'Custa menos de dez euros.'],
          ['Le mëis plü cialt é agost.', 'O mês mais quente é agosto.'],
        ],
      },
      {
        text: '“Melhor” tem duas formas: “miú” como adjetivo (“ël é le miú”, ele é o melhor) e “damí” como advérbio (“proa da scrí damí!”, tente escrever melhor!).',
        examples: [
          ['Ël é le miú.', 'Ele é o melhor.'],
          ['Cater edli vëiga damí co dui.', 'Quatro olhos veem melhor que dois.'],
          ['Incö me vára bele damí!', 'Hoje já estou melhor!'],
        ],
      },
    ],
    pitfalls: [
      'Confundir “miú” (adjetivo: “na miú soluziun”, uma solução melhor) com “damí” (advérbio: “scrí damí”, escrever melhor).',
      'Esquecer que “manco” também é “menos” antes de substantivo: “inier êl manco jënt” (ontem havia menos gente; “êl” é o passado de “él”, que vem no B1).',
    ],
    quiz: [
      { question: 'Complete: “Ël é plü bel ___ tö.”', options: ['co', 'de', 'plü'], answer: 'co', explanation: 'O segundo termo da comparação vem com “co”: plü bel co tö.' },
      { question: '“Le mëis plü cialt é agost” quer dizer…', options: ['O mês mais quente é agosto.', 'Agosto é menos quente.', 'Agosto é tão quente quanto julho.'], answer: 'O mês mais quente é agosto.', explanation: 'Com o artigo, “plü” forma o superlativo: le mëis plü cialt.' },
      { question: 'Qual é o advérbio “melhor”?', options: ['damí', 'miú', 'manco'], answer: 'damí', explanation: '“Damí” é o advérbio (“scrí damí”); “miú” é o adjetivo (“ël é le miú”).' },
    ],
  },
];
