import type { UnitSeed } from '../types';

/**
 * Trilha do toscano antigo/florentino: só as duas unidades do nível A1 por enquanto (ver
 * `incomplete` em index.ts). Cenário: a Florença (Fiorenza) de Dante Alighieri (1265-1321), entre o
 * fim do século XIII e o exílio de 1302 — a mesma Florença que Dante, no Inferno (Canto XXVI,
 * versos 1-3), chama de "Fiorenza" numa apóstrofe sarcástica, conferida direto no texto via
 * Wikisource italiano. Nenhum alfabeto novo: o toscano antigo usa o mesmo alfabeto latino do pacote
 * `it`.
 */
export const UNITS_FIOR1236: UnitSeed[] = [
  {
    id: 'fior1236-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Deh, chi se\' tu? — nas vielas de Fiorenza',
    emoji: '⚜️',
    card: {
      id: 'fior1236-c1',
      title: 'A língua que se tornou o padrão',
      emoji: '📜',
      history:
        'O toscano antigo/florentino é a língua de Florença dos séculos XIII e XIV — a MESMA língua que, nas mãos de Dante Alighieri (1265-1321), Petrarca e Boccaccio, se tornou o modelo do italiano padrão de hoje. Dante escreveu toda a Divina Comédia em florentino, não em latim (uma escolha ousada para a época), e no tratado "De vulgari eloquentia" discutiu abertamente qual variedade da península merecia ser a língua ilustre, cardinal e áulica da Itália. Séculos depois, no Renascimento, o humanista Pietro Bembo tomou o florentino de Dante e Petrarca como modelo oficial — por isso o italiano padrão de hoje é, na prática, descendente direto desta língua.',
      culture_tip:
        'O Wiktionary não trata o toscano antigo como uma seção de língua separada do italiano (diferente do francês antigo ou do castelhano medieval, que têm cabeçalho próprio) — é só uma língua "etimologia-apenas" (código interno "roa-oit"), usada em notas de origem de palavras de OUTRAS línguas. Por isso cada palavra deste pacote vem de dentro da própria seção "Italian" do Wiktionary, com etiqueta "apocopated"/"archaic"/"dated"/"literary" ou citação direta e datada de Dante ou Boccaccio — nunca de uma seção "Old Italian" que simplesmente não existe lá.',
      grammar_why:
        'A marca mais fácil de reconhecer no florentino antigo é a SÍNCOPE POÉTICA (ou apócope): a queda da vogal final de certas palavras, por exigência do verso — "core" (coração) vira "cor", "amore" vira "amor", "onore" vira "onor". É um recurso de estilo, não um erro: o próprio "sono" (eu sou) vira "son", como no famoso verso de Dante no Purgatório: "Ben son, ben son Beatrice" (sou mesmo, sou mesmo Beatriz!).',
      grammar_examples: [
        ['Deh, dimmi tu!', 'Ah, me diga então!'],
        ['Messere, pace!', 'Senhor, paz!'],
        ["Ben son, ben son Beatrice.", 'Sou mesmo, sou mesmo Beatriz. (Dante, Purgatório, Canto XXX, verso 73)'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'fior1236-u1-l1',
        title: 'Deh, messere! — apresentações na praça',
        kind: 'licao',
        words: ['deh', 'lasso', 'donna', 'poeta', 'messere', 'uom'],
        cloze: [
          { sentence: 'Dante è ___.', answer: 'poeta', options: ['poeta', 'messere', 'uom'], translation: 'Dante é poeta.' },
          { sentence: '___, dimmi tu!', answer: 'Deh', options: ['Deh', 'Lasso', 'Core'], translation: 'Ah, me diga então!' },
          { sentence: "Qui è l'___ felice.", answer: 'uom', options: ['uom', 'donna', 'poeta'], translation: 'Aqui o homem é feliz.' },
        ],
        voice: {
          bot: 'Deh, chi se\' tu?',
          botTranslation: 'Ah, quem é você?',
          expected: ['Io son poeta.', 'io son poeta'],
          hint: 'Responda com "Io son..." (eu sou...) e diga quem você é.',
        },
        communityPrompt: 'Apresente-se em toscano antigo: diga quem você é com "Io son..." (poeta, messere...).',
      },
      {
        id: 'fior1236-u1-l2',
        title: 'Fiorenza, cittade bella — a cidade e o céu',
        kind: 'licao',
        words: ['cittade', 'Fiorenza', 'stella', 'core', 'ciel', 'altrui'],
        cloze: [
          { sentence: 'Fiorenza è ___ bella.', answer: 'cittade', options: ['cittade', 'stella', 'core'], translation: 'Florença é uma cidade bela.' },
          { sentence: 'Il ___ è bello stasera.', answer: 'ciel', options: ['ciel', 'core', 'fior'], translation: 'O céu está bonito hoje à noite.' },
          { sentence: "A riveder le ___!", answer: 'stelle', options: ['stelle', 'cittadi', 'cori'], translation: 'A rever as estrelas! (verso final do Inferno de Dante)' },
        ],
        voice: {
          bot: 'Godi, Fiorenza! Vedi le stelle?',
          botTranslation: 'Alegra-te, Florença! Você vê as estrelas?',
          expected: ['Vedo le stelle nel ciel.', 'vedo le stelle'],
          hint: 'Responda descrevendo a cidade ou o céu: "Vedo le stelle nel ciel" (vejo as estrelas no céu).',
        },
        communityPrompt: 'Descreva Fiorenza em toscano antigo: "Fiorenza è cittade bella" (Florença é uma cidade bela) ou fale do céu e das estrelas.',
      },
      {
        id: 'fior1236-u1-l3',
        title: 'Prova: chegando a Fiorenza',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: "Pace, forestiero! Io son Dante, poeta di questa cittade.",
          botTranslation: 'Paz, forasteiro! Eu sou Dante, poeta desta cidade.',
          expected: ['Pace! Io son uom novo qui.', 'pace io son uom'],
          hint: 'Responda com "Pace!" e diga quem você é, com "Io son...".',
        },
        communityPrompt: 'Escreva uma apresentação curta em toscano antigo: quem você é ("Io son...") e uma frase sobre Fiorenza, o céu ou as estrelas.',
      },
    ],
  },
  {
    id: 'fior1236-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Tanto gentile — poesia e amor na Vita Nuova',
    emoji: '🌸',
    card: {
      id: 'fior1236-c2',
      title: 'Beatriz e a "Vita Nuova": o amor que virou livro',
      emoji: '💘',
      history:
        'Beatriz Portinari morreu em 1290, e foi esse luto que levou Dante a escrever a "Vita Nuova" (Vida Nova, por volta de 1292-1294) — um livro de poemas entrelaçados por prosa que conta a história do seu amor por ela, desde o primeiro encontro na infância até depois da morte dela. O soneto mais famoso do livro, "Tanto gentile e tanto onesta pare" (Tão gentil e tão honesta parece), descreve o efeito do "saluto" (a saudação/cumprimento) de Beatriz sobre quem a vê passar pelas ruas de Fiorenza: "la donna mia quand\'ella altrui saluta" (minha dona quando ela saúda outrem). É dessa mesma "Vita Nuova" que Dante tira o costume de chamar Beatriz de "la donna mia" — não "mulher", no sentido moderno, mas "minha dona/senhora", um título de respeito cortês.',
      culture_tip:
        'Boa parte do vocabulário mais "poético" do florentino antigo são formas apocopadas (ver fior1236-g1): "core" (coração) e "amor" (amor) aparecem o tempo todo nos sonetos de amor de Dante e Petrarca, exatamente pela mesma razão métrica. "Disio" (desejo) é a MESMA palavra que aparece no verso de Paolo e Francesca no Inferno: "quanti dolci pensier, quanto disio" (quantos doces pensamentos, quanto desejo).',
      grammar_why:
        'Advérbios e conjunções inteiros desapareceram do italiano padrão depois de Dante: "quivi" (ali/lá), "unque" (jamais) e "ca" (porque/que) soam hoje tão arcaicos em italiano quanto "ires" ou "vós" soariam em português. O Wiktionary rotula os três "archaic" ou "dated" — e o "unque" tem até citação direta de Dante no Purgatório.',
      grammar_examples: [
        ['La donna è quivi.', 'A dona está ali.'],
        ['Non vidi unque tal cosa.', 'Nunca vi tal coisa.'],
        ['Ca tu sei poeta.', 'Porque você é poeta.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'fior1236-u2-l1',
        title: "Tanto gentile — o soneto da Vita Nuova",
        kind: 'licao',
        words: ['onor', 'amor', 'fior', 'disio', 'sovra', 'quivi'],
        cloze: [
          { sentence: "L'___ move il core.", answer: 'amor', options: ['amor', 'onor', 'fior'], translation: 'O amor move o coração.' },
          { sentence: 'Il ___ è bello.', answer: 'fior', options: ['fior', 'onor', 'disio'], translation: 'A flor é bela.' },
          { sentence: 'La donna è ___.', answer: 'quivi', options: ['quivi', 'sovra', 'disio'], translation: 'A dona está ali.' },
        ],
        voice: {
          bot: 'Tanto gentile pare la donna mia.',
          botTranslation: 'Tão gentil parece a minha dona. (Dante, Vita Nuova, soneto 26)',
          expected: ["L'amor move il core.", 'amor move il core'],
          hint: 'Responda falando de amor, flor ou desejo: "L\'amor move il core" (o amor move o coração).',
        },
        communityPrompt: 'Escreva uma frase sobre amor em toscano antigo: "L\'amor move il core" (o amor move o coração) ou "Il fior è bello" (a flor é bela).',
      },
      {
        id: 'fior1236-u2-l2',
        title: 'Ca tu sei poeta — dizer, ver, andar',
        kind: 'licao',
        words: ['unque', 'ca', 'veder', 'dir', 'amar', 'andar'],
        cloze: [
          { sentence: 'Non vidi ___ tal cosa.', answer: 'unque', options: ['unque', 'ca', 'quivi'], translation: 'Nunca vi tal coisa.' },
          { sentence: 'Voglio ___ le stelle.', answer: 'veder', options: ['veder', 'dir', 'andar'], translation: 'Eu quero ver as estrelas.' },
          { sentence: 'Vogliamo ___ a Fiorenza.', answer: 'andar', options: ['andar', 'veder', 'amar'], translation: 'Queremos ir a Florença.' },
        ],
        voice: {
          bot: 'Che vuoi dir, forestiero?',
          botTranslation: 'O que você quer dizer, forasteiro?',
          expected: ['Voglio veder le stelle.', 'voglio veder'],
          hint: 'Responda com o que você quer ver, dizer ou fazer: "Voglio veder le stelle" (quero ver as estrelas).',
        },
        communityPrompt: 'Diga o que você quer fazer em toscano antigo: "Voglio veder..." (quero ver), "Voglio andar..." (quero ir) ou "Voglio dir..." (quero dizer).',
      },
      {
        id: 'fior1236-u2-l3',
        title: 'Prova: o soneto de Beatriz',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: "Tanto gentile e tanto onesta pare la donna mia quand'ella altrui saluta.",
          botTranslation: 'Tão gentil e tão honesta parece minha dona quando ela saúda outrem. (Dante, Vita Nuova, soneto 26)',
          expected: ["L'amor move il core. Voglio veder la donna.", 'amor move il core'],
          hint: 'Responda falando de amor, do coração ou do que você quer ver.',
        },
        communityPrompt: 'Escreva um parágrafo curto em toscano antigo sobre amor ou poesia, usando ao menos três palavras desta unidade.',
      },
    ],
  },
  {
    id: 'fior1236-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Un gran mercatante — no mercado de Fiorenza',
    emoji: '🪙',
    card: {
      id: 'fior1236-c3',
      title: 'O florim que conquistou a Europa',
      emoji: '🪙',
      history:
        'Fiorenza não era só a cidade dos poetas: era também uma potência bancária e mercantil. Em 1252, a cidade começou a cunhar o "fiorino" (florim), uma moeda de ouro tão confiável que logo circulou por toda a Europa, usada por reis e mercadores de terras distantes. A riqueza vinha sobretudo do comércio de lã e do câmbio de moedas, organizado em "arti" (guildas) — as Arti Maggiori, como a dos mercadores, governavam boa parte da vida política da cidade. É nesse mundo de "mercatanti" (mercadores) que Boccaccio, poucas décadas depois de Dante, ambienta dezenas de contos do Decameron.',
      culture_tip:
        'O Wiktionary rotula "mercatante" "archaic/obsolete" — forma antiga de "mercante" (mercador), usada sem parar por Boccaccio: muitos contos do Decameron começam com "Un mercatante...".',
      grammar_why:
        'A apócope de fior1236-g1 ("core"→"cor") continua produtiva numa família inteira de palavras novas: "sol" (sole), "mar" (mare), "pan" (pane), "gran" (grande), "tal" (tale), "qual" (quale) e "buon" (buono) — todas rotuladas "apocopated" pelo Wiktionary.',
      grammar_examples: [
        ['Il sol è bello sovra il mar.', 'O sol é belo sobre o mar.'],
        ['Un gran mercatante.', 'Um grande mercador.'],
        ["Un fiorino d'oro.", 'Um florim de ouro.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'fior1236-u3-l1',
        title: 'Sol, mar, pan — a apócope continua',
        kind: 'licao',
        words: ['sol', 'mar', 'pan', 'gran', 'tal', 'qual'],
        cloze: [
          { sentence: 'Il ___ è bello.', answer: 'sol', options: ['sol', 'mar', 'pan'], translation: 'O sol é belo.' },
          { sentence: 'Un ___ poeta.', answer: 'gran', options: ['gran', 'tal', 'qual'], translation: 'Um grande poeta.' },
          { sentence: '___ è la tua cittade?', answer: 'Qual', options: ['Qual', 'Tal', 'Gran'], translation: 'Qual é a tua cidade?' },
        ],
        voice: {
          bot: 'Vedi il sol sovra il mar?',
          botTranslation: 'Você vê o sol sobre o mar?',
          expected: ['Vedo il sol sovra il mar.', 'vedo il sol'],
          hint: 'Responda descrevendo o sol ou o mar: "Vedo il sol sovra il mar" (vejo o sol sobre o mar).',
        },
        communityPrompt: 'Descreva o céu de Fiorenza em toscano antigo, usando "sol", "mar" ou "gran" (grande).',
      },
      {
        id: 'fior1236-u3-l2',
        title: "Mercatante, fiorino — l'arte dei mercatanti",
        kind: 'licao',
        words: ['buon', 'donzella', 'cavaliere', 'mercatante', 'fiorino', 'arte'],
        cloze: [
          { sentence: 'Il ___ è ricco.', answer: 'mercatante', options: ['mercatante', 'cavaliere', 'donzella'], translation: 'O mercador é rico.' },
          { sentence: "Un ___ d'oro.", answer: 'fiorino', options: ['fiorino', 'mercatante', 'arte'], translation: 'Um florim de ouro.' },
          { sentence: "L'___ dei mercatanti è grande.", answer: 'arte', options: ['arte', 'fiorino', 'cavaliere'], translation: 'A guilda dos mercadores é grande.' },
        ],
        voice: {
          bot: 'Io son mercatante. Hai tu fiorini?',
          botTranslation: 'Eu sou mercador. Você tem florins?',
          expected: ['Sì, ho fiorini.', 'ho fiorini'],
          hint: 'Responda dizendo se você tem florins: "Ho fiorini" (tenho florins).',
        },
        communityPrompt: 'Fale do mercado de Fiorenza em toscano antigo: um mercatante, um fiorino ou uma arte (guilda).',
      },
      {
        id: 'fior1236-u3-l3',
        title: 'Prova: o mercado de Fiorenza',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: "Io son un gran mercatante di Fiorenza. Hai tu fiorini d'oro?",
          botTranslation: 'Eu sou um grande mercador de Fiorenza. Você tem florins de ouro?',
          expected: ['Sì, ho un fiorino.', 'ho fiorini'],
          hint: 'Responda dizendo se você tem florins, usando "ho" (eu tenho).',
        },
        communityPrompt: 'Escreva um parágrafo curto sobre o mercado de Fiorenza, usando ao menos três palavras desta unidade.',
      },
    ],
  },
  {
    id: 'fior1236-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Speme, pace, vita — a poesia depois de Beatriz',
    emoji: '🕊️',
    card: {
      id: 'fior1236-c4',
      title: '"Fia": o futuro que só a poesia usava',
      emoji: '🔮',
      history:
        'Depois da morte de Beatriz, a poesia de Dante se volta pra temas mais graves: a esperança ("speme"), a dor ("doglia") e a própria vida ("vita") — a mesma palavra que dá título à "Vita Nuova". É nesse registro solene que aparece "fia", uma forma antiga do futuro de "essere" (sarà), usada quase só em momentos de profecia na Commedia, quando um personagem anuncia o que ainda vai acontecer.',
      culture_tip:
        'O Wiktionary rotula "poscia" (depois/então) e "guari" (muito, só na negativa "non guari") "archaic" — mais duas palavras de função que a poesia preservou, exatamente como "quivi" e "unque" (fior1236-g3).',
      grammar_why:
        '"Fia" (será) é o futuro arcaico de "essere" usado por Dante em versos de profecia — diferente de "fu" (foi, passado) e de "son" (sou, apocopado de "sono"). "Tal fia la fine" (tal será o fim) é a estrutura típica desse uso solene.',
      grammar_examples: [
        ['Tal fia la fine.', 'Tal será o fim.'],
        ['Poscia dirò la mia speme.', 'Depois direi a minha esperança.'],
        ['Non vidi guari doglia come questa.', 'Não vi muita dor como esta.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'fior1236-u4-l1',
        title: 'Fia, poscia, guari — o futuro arcaico',
        kind: 'licao',
        words: ['fia', 'poscia', 'guari', 'beltà', 'speme', 'diletto'],
        cloze: [
          { sentence: 'Tal ___ la fine.', answer: 'fia', options: ['fia', 'poscia', 'guari'], translation: 'Tal será o fim.' },
          { sentence: '___ dirò.', answer: 'Poscia', options: ['Poscia', 'Fia', 'Guari'], translation: 'Depois direi.' },
          { sentence: 'Non vidi ___ tal beltà.', answer: 'guari', options: ['guari', 'poscia', 'fia'], translation: 'Não vi muita beleza como essa.' },
        ],
        voice: {
          bot: 'Che fia di noi, poscia?',
          botTranslation: 'O que será de nós, depois?',
          expected: ['Fia pace e diletto.', 'fia pace'],
          hint: 'Responda com "Fia..." (será...) e diga o que você espera: pace, diletto ou speme.',
        },
        communityPrompt: 'Use "fia" (será) para imaginar o futuro em toscano antigo, e "poscia" (depois) para continuar a frase.',
      },
      {
        id: 'fior1236-u4-l2',
        title: 'Doglia, gioia, pace — depois de Beatriz',
        kind: 'licao',
        words: ['doglia', 'gioia', 'pace', 'vita', 'morte', 'tempo'],
        cloze: [
          { sentence: 'Gran ___ sento nel core.', answer: 'doglia', options: ['doglia', 'gioia', 'pace'], translation: 'Grande dor sinto no coração.' },
          { sentence: 'La ___ non vince amor.', answer: 'morte', options: ['morte', 'vita', 'tempo'], translation: 'A morte não vence o amor.' },
          { sentence: '___ nuova comincia.', answer: 'Vita', options: ['Vita', 'Morte', 'Tempo'], translation: 'Vida nova começa.' },
        ],
        voice: {
          bot: 'Senti doglia o gioia nel tuo core?',
          botTranslation: 'Você sente dor ou alegria no seu coração?',
          expected: ['Sento gioia e pace.', 'sento gioia'],
          hint: 'Responda dizendo o que sente: "Sento gioia" (sinto alegria) ou "Sento doglia" (sinto dor).',
        },
        communityPrompt: 'Escreva uma frase sobre a vida, a morte ou o tempo em toscano antigo, inspirada na Vita Nuova de Dante.',
      },
      {
        id: 'fior1236-u4-l3',
        title: 'Prova: speme e vita nuova',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: "Poscia che la donna mia fu morta, grande doglia sentii. Ma tal fia la mia speme.",
          botTranslation: 'Depois que a minha dona morreu, grande dor senti. Mas tal será a minha esperança.',
          expected: ['Fia pace e vita nuova.', 'fia pace'],
          hint: 'Responda com "Fia..." (será...) e fale de esperança, paz ou vida nova.',
        },
        communityPrompt: 'Escreva um parágrafo curto sobre esperança e vida nova, no estilo da Vita Nuova, usando ao menos três palavras desta unidade.',
      },
    ],
  },
];
