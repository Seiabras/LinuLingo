import type { UnitSeed } from '../types';

/**
 * Trilha do interslavo: as quatro unidades de A1 e A2 por enquanto (ver `incomplete` em
 * index.ts). Fontes: `steen.free.fr/interslavic/` (grammar.html, verbs.html, nouns.html,
 * pronouns.html, en-ms.html), conferidas de novo nesta sessão.
 */
export const UNITS_ISV: UnitSeed[] = [
  {
    id: 'isv-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Dobry denj! Pervi slova',
    emoji: '🤝',
    card: {
      id: 'isv-c1',
      title: 'A língua que qualquer eslavo entende sem estudar',
      emoji: '🤝',
      history:
        'O interslavo (medžuslovjansky) não é a língua de nenhum país: é uma língua “zonal”, montada com as raízes e as regras gramaticais que o russo, o polonês, o tcheco, o croata e todas as outras línguas eslavas vivas têm em comum. A ideia é que qualquer eslavo consiga ler e entender interslavo sem nunca ter estudado a língua. O projeto atual nasceu em 2017, da fusão de dois projetos mais antigos (Slovianski e Novoslověnsky), e é mantido por um comitê de cinco linguistas, entre eles o holandês Jan van Steenbergen.',
      culture_tip:
        'O interslavo tem até conferências internacionais de verdade — a terceira aconteceu em Uherský Brod, na República Tcheca, em 2020 — e se escreve com dois alfabetos “oficialmente iguais”: o latino (usado neste curso) e o cirílico.',
      grammar_why:
        'O verbo “byti” (ser/estar) muda por pessoa (ja jesm, ty jesi, on jest...), diferente do esperanto ou do novial. Por isso o pronome de sujeito quase nunca é omitido, mesmo quando a terminação já indica quem fala.',
      grammar_examples: [
        ['Ja jesm Ana.', 'Eu sou a Ana.'],
        ['Ty jesi Petr?', 'Você é o Petro?'],
      ],
      character_guide: [
        ['č', 'som de “tch” português', 'denj não tem, mas “črveny” (vermelho) tem'],
        ['j', 'som de “i” rápido antes de vogal, como o “y” do inglês “yes”', 'moj (“moi”, meu)'],
        ['y', 'um “i” mais “fechado”/gutural que o “i” comum — em dúvida, pronuncie como “i”', 'ty (“tchi”, você)'],
      ],
    },
    lessons: [
      {
        id: 'isv-u1-l1',
        title: 'Dobry denj, blagodarju!',
        kind: 'licao',
        words: ['Dobry denj', 'Blagodarju', 'da', 'ne', 'ime', 'Sbogom'],
        cloze: [
          { sentence: '___, Petr!', answer: 'Dobry denj', options: ['Dobry denj', 'Blagodarju', 'Sbogom'], translation: 'Olá, Petro!' },
          { sentence: '___ za hlěb!', answer: 'Blagodarju', options: ['Blagodarju', 'Dobry denj', 'Ne'], translation: 'Obrigado pelo pão!' },
          { sentence: 'Čto jest tvoje ___?', answer: 'ime', options: ['ime', 'denj', 'da'], translation: 'Qual é o seu nome?' },
        ],
        voice: {
          bot: 'Dobry denj! Čto jest tvoje ime?',
          botTranslation: 'Olá! Qual é o seu nome?',
          expected: ['Moje ime jest Ana.', 'ja jesm', 'moje ime'],
          hint: 'Diga seu nome com “Moje ime jest…” ou “Ja jesm…”.',
        },
        communityPrompt: 'Apresente-se em interslavo: diga seu nome com “Moje ime jest…” ou “Ja jesm…”.',
      },
      {
        id: 'isv-u1-l2',
        title: 'Ja, ty, on, ona',
        kind: 'licao',
        words: ['ja', 'ty', 'on', 'ona', 'byti', 'prijatelj'],
        cloze: [
          { sentence: '___ jesm Ana.', answer: 'Ja', options: ['Ja', 'Ty', 'On'], translation: 'Eu sou a Ana.' },
          { sentence: '___ jest moj otec.', answer: 'On', options: ['On', 'Ja', 'My'], translation: 'Ele é meu pai.' },
          { sentence: 'Ty jesi moj ___.', answer: 'prijatelj', options: ['prijatelj', 'ime', 'denj'], translation: 'Você é meu amigo.' },
        ],
        voice: {
          bot: 'Dobry denj! Či ty jesi Ana?',
          botTranslation: 'Olá! Você é a Ana?',
          expected: ['Ne, ja jesm Petr.', 'da, ja jesm', 'ne, ja jesm'],
          hint: 'Responda com “Da, ja jesm…” ou “Ne, ja jesm…” e diga seu nome.',
        },
        communityPrompt: 'Pergunte o nome de alguém com “Čto jest tvoje ime?”.',
      },
      {
        id: 'isv-u1-l3',
        title: 'Prova: pervi slova',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Dobry denj! Ja jesm Petr. A ty, kto ty jesi?',
          botTranslation: 'Olá! Eu sou o Petro. E você, quem é você?',
          expected: ['Dobry denj! Ja jesm Ana. Blagodarju!', 'ja jesm', 'blagodarju'],
          hint: 'Responda a saudação, diga quem você é e agradeça com “Blagodarju”.',
        },
        communityPrompt: 'Escreva uma apresentação curta em interslavo: saudação, seu nome e uma despedida (“Sbogom”).',
      },
    ],
  },
  {
    id: 'isv-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Rodina i dom',
    emoji: '👪',
    card: {
      id: 'isv-c2',
      title: 'Uma raiz comum a quase toda língua eslava',
      emoji: '👪',
      history:
        'Palavras como “mati” (mãe), “brat” (irmão) e “dom” (casa) são praticamente iguais em russo, polonês, tcheco, croata e búlgaro — é exatamente esse núcleo comum que o comitê do interslavo escolhe para o vocabulário, em vez de inventar palavras novas ou copiar só uma língua eslava específica.',
      culture_tip:
        'O dicionário oficial do interslavo tem mais de 12 mil linhas — bem mais que a maioria das línguas construídas do app, por isso o interslavo chega a um teto mais alto (B2) na tabela de “até onde cada idioma consegue chegar”.',
      grammar_why:
        'O adjetivo do interslavo muda de terminação para combinar com o gênero do substantivo: “-y” para masculino, “-a” para feminino, “-o” para neutro — diferente do esperanto ou do novial, onde o adjetivo nunca muda.',
      grammar_examples: [
        ['Dom jest veliky.', 'A casa é grande. (masculino)'],
        ['Moja rodina jest velika.', 'Minha família é grande. (feminino)'],
      ],
      character_guide: [
        ['ě', 'o “yat”: amolece a consoante antes dele', 'hlěb (“khlyeb”, pão)'],
        ['ch inexistente', 'o interslavo usa “h” para o som gutural, não “ch”', 'sem exemplo no vocabulário desta unidade'],
      ],
    },
    lessons: [
      {
        id: 'isv-u2-l1',
        title: 'Moja rodina',
        kind: 'licao',
        words: ['rodina', 'otec', 'mati', 'brat', 'sestra', 'imati'],
        cloze: [
          { sentence: 'Moj ___ jest dobry.', answer: 'otec', options: ['otec', 'mati', 'brat'], translation: 'Meu pai é bom.' },
          { sentence: 'Moj ___ jest maly.', answer: 'brat', options: ['brat', 'sestra', 'rodina'], translation: 'Meu irmão é pequeno.' },
          { sentence: 'Moja ___ jest velika.', answer: 'rodina', options: ['rodina', 'dom', 'ime'], translation: 'Minha família é grande.' },
        ],
        voice: {
          bot: 'Či tvoj brat jest dobry?',
          botTranslation: 'Seu irmão é bom?',
          expected: ['Da, moj brat jest dobry.', 'da, moj brat', 'ne, moj brat'],
          hint: 'Responda com “Da, moj brat jest…” ou “Ne, moj brat jest…”.',
        },
        communityPrompt: 'Descreva sua família em interslavo: quantos irmãos você tem e como se chamam seus pais.',
      },
      {
        id: 'isv-u2-l2',
        title: 'V mojem domu',
        kind: 'licao',
        words: ['dom', 'veliky', 'maly', 'dobry', 'voda', 'hlěb'],
        cloze: [
          { sentence: 'Moj ___ jest maly.', answer: 'dom', options: ['dom', 'hlěb', 'voda'], translation: 'Minha casa é pequena.' },
          { sentence: 'Voda jest ___.', answer: 'dobra', options: ['dobra', 'dobry', 'dobro'], translation: 'A água é boa.' },
          { sentence: '___ jest dobry.', answer: 'Hlěb', options: ['Hlěb', 'Dom', 'Voda'], translation: 'O pão é bom.' },
        ],
        voice: {
          bot: 'Či tvoj dom jest veliky ili maly?',
          botTranslation: 'Sua casa é grande ou pequena?',
          expected: ['Moj dom jest maly.', 'dom jest veliky', 'dom jest maly'],
          hint: 'Use “Moj dom jest…” para descrever a casa.',
        },
        communityPrompt: 'Descreva sua casa em interslavo: se é grande (veliky) ou pequena (maly), e o que tem nela.',
      },
      {
        id: 'isv-u2-l3',
        title: 'Prova: rodina i dom',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Naš dom jest veliky. A či tvoj dom jest veliky ili maly?',
          botTranslation: 'Nossa casa é grande. E a sua casa é grande ou pequena?',
          expected: ['Moj dom jest maly, ale moja rodina jest velika.', 'moj dom', 'moja rodina'],
          hint: 'Diga como é sua casa com “Moj dom jest…” e fale da família com “Moja rodina jest…”.',
        },
        communityPrompt: 'Escreva um parágrafo curto apresentando sua família e sua casa em interslavo, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
  {
    id: 'isv-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Moja škola, moja vesna',
    emoji: '🏫',
    card: {
      id: 'isv-c3',
      title: 'O acusativo: quando o objeto muda de forma',
      emoji: '🎯',
      history:
        'O interslavo tem sete casos, mas o acusativo (o caso do objeto direto) segue uma regra simples: em substantivos animados (pessoas e animais), ele é igual ao genitivo (“-a”); nos demais, é igual ao nominativo, sem mudar nada. Esta unidade também traz os sete dias da semana e as quatro estações, confirmados no dicionário oficial — e os adjetivos “novy”/“stary” (novo/velho), que concordam em gênero como “veliky”/“maly”.',
      culture_tip:
        'O interslavo já teve três conferências internacionais de verdade, reunindo falantes de vários países eslavos — um bom motivo para aprender os dias da semana e combinar encontros: “Ja budu tam v ponedělok” (eu estarei lá na segunda).',
      grammar_why:
        'Repare “Ja vidžu brata” (vejo o irmão, animado, acusativo = genitivo “-a”) contra “Ja vidžu dom” (vejo a casa, inanimado, acusativo = nominativo, sem mudar). É a mesma lógica que a maioria das línguas eslavas vivas do app já ensina.',
      grammar_examples: [
        ['Ja vidžu brata, i ja vidžu dom.', 'Eu vejo o irmão, e eu vejo a casa.'],
        ['Dnes jest ponedělok.', 'Hoje é segunda-feira.'],
        ['Moja škola jest nova.', 'A minha escola é nova.'],
      ],
      character_guide: [
        ['-a (acusativo animado)', 'objeto direto de pessoa/animal, igual ao genitivo', 'brata (de brat, irmão)'],
        ['-u (acusativo feminino)', 'objeto direto feminino, troca o -a final', 'vodu (de voda, água)'],
      ],
    },
    lessons: [
      {
        id: 'isv-u3-l1',
        title: 'Ponedělok, vtorok, srěda',
        kind: 'licao',
        words: ['ponedělok', 'vtorok', 'srěda', 'četvrtok', 'petok', 'subota'],
        cloze: [
          { sentence: 'Dnes jest ___.', answer: 'ponedělok', options: ['ponedělok', 'vtorok', 'subota'], translation: 'Hoje é segunda-feira.' },
          { sentence: 'Zautra jest ___.', answer: 'vtorok', options: ['vtorok', 'srěda', 'nedělja'], translation: 'Amanhã é terça-feira.' },
          { sentence: 'Posledni denj tydnja jest ___.', answer: 'nedělja', options: ['nedělja', 'ponedělok', 'srěda'], translation: 'O último dia da semana é domingo.' },
        ],
        voice: {
          bot: 'Kaky denj jest dnes? Ponedělok ili subota?',
          botTranslation: 'Que dia é hoje? Segunda ou sábado?',
          expected: ['Dnes jest ponedělok.', 'dnes jest', 'subota'],
          hint: 'Responda com “Dnes jest…” e um dia da semana.',
        },
        communityPrompt: 'Diga em interslavo que dia é hoje e que dia será amanhã, usando “dnes jest…” e “zautra jest…”.',
      },
      {
        id: 'isv-u3-l2',
        title: 'Ja vidžu brata',
        kind: 'licao',
        words: ['škola', 'učitelj', 'novy', 'stary', 'pisati', 'čitati'],
        cloze: [
          { sentence: 'Moja ___ jest nova.', answer: 'škola', options: ['škola', 'učitelj', 'kniga'], translation: 'A minha escola é nova.' },
          { sentence: 'Ja vidžu ___.', answer: 'brata', options: ['brata', 'brat', 'bratu'], translation: 'Eu vejo o irmão. (acusativo animado)' },
          { sentence: 'Ja ___ knigu.', answer: 'čitaju', options: ['čitaju', 'čitati', 'čitam'], translation: 'Eu leio um livro.' },
        ],
        voice: {
          bot: 'Či tvoja škola jest nova ili stara?',
          botTranslation: 'A sua escola é nova ou velha?',
          expected: ['Moja škola jest nova.', 'nova', 'stara'],
          hint: 'Responda com “Moja škola jest…” e um adjetivo.',
        },
        communityPrompt: 'Descreva a sua escola em interslavo: “moja škola jest…”, usando nova, stara, velika ou mala.',
      },
      {
        id: 'isv-u3-l3',
        title: 'Prova: dny i škola',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Kaky denj jest dnes, i či tvoja škola jest nova?',
          botTranslation: 'Que dia é hoje, e a sua escola é nova?',
          expected: ['Dnes jest srěda, i moja škola jest nova.', 'dnes jest', 'moja škola'],
          hint: 'Responda com um dia da semana e uma descrição da sua escola.',
        },
        communityPrompt: 'Escreva três frases em interslavo: uma com um dia da semana, uma com “ja vidžu…” (acusativo) e uma descrevendo algo com novy ou stary.',
      },
    ],
  },
  {
    id: 'isv-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Ja budu rabotati',
    emoji: '💼',
    card: {
      id: 'isv-c4',
      title: 'O passado e o futuro, com byti',
      emoji: '🕰️',
      history:
        'O interslavo forma o passado e o futuro combinando “byti” (ser/estar) com outra parte do verbo: o passado composto usa “byti” no presente mais o particípio-L (dělal/dělala/dělalo/dělali); o futuro usa “byti” no futuro (budu, budeš…) mais o infinitivo. Esta unidade também traz vocabulário de cidade e trabalho: trg (mercado), magazin (loja), rabota (trabalho).',
      culture_tip:
        'O dicionário oficial do interslavo (en-ms.html) tem mais de 12 mil linhas — por isso este curso consegue ensinar vocabulário de cidade, trabalho e clima com a mesma certeza das palavras mais básicas, sempre com a grafia latina e cirílica lado a lado.',
      grammar_why:
        'Repare como o particípio-L concorda com o gênero do sujeito: “on kupil” (ele comprou) mas “ona kupila” (ela comprou). E o futuro nunca conjuga o verbo principal: “ja budu rabotati”, sempre no infinitivo depois de “budu”.',
      grammar_examples: [
        ['Ona kupila hlěb na trgu.', 'Ela comprou pão no mercado.'],
        ['Ja budu rabotati zautra.', 'Eu trabalharei amanhã.'],
        ['Moj lěkar pomagaje mnogo.', 'O meu médico ajuda muito.'],
      ],
      character_guide: [
        ['-l/-la/-lo/-li', 'particípio do passado, concorda com o sujeito', 'kupil / kupila (de kupiti, comprar)'],
        ['budu + infinitivo', 'o futuro, sem conjugar o verbo principal', 'budu rabotati (trabalharei)'],
      ],
    },
    lessons: [
      {
        id: 'isv-u4-l1',
        title: 'Ona kupila hlěb',
        kind: 'licao',
        words: ['trg', 'magazin', 'kupiti', 'prodavati', 'oděža', 'rabota'],
        cloze: [
          { sentence: 'Ona ___ hlěb na trgu.', answer: 'kupila', options: ['kupila', 'kupil', 'kupiti'], translation: 'Ela comprou pão no mercado.' },
          { sentence: 'On ___ hlěb v magazinu.', answer: 'prodaval', options: ['prodaval', 'prodavala', 'prodavati'], translation: 'Ele vendia pão na loja.' },
          { sentence: 'Moja ___ jest dobra.', answer: 'rabota', options: ['rabota', 'škola', 'oděža'], translation: 'O meu trabalho é bom.' },
        ],
        voice: {
          bot: 'Čto ty kupila na trgu?',
          botTranslation: 'O que você comprou no mercado?',
          expected: ['Ja kupila hlěb i mlěko.', 'ja kupila', 'ja kupil'],
          hint: 'Responda com “Ja kupil…” (homem) ou “Ja kupila…” (mulher).',
        },
        communityPrompt: 'Conte em interslavo o que você comprou hoje, usando “ja kupil(a)…”.',
      },
      {
        id: 'isv-u4-l2',
        title: 'Ja budu rabotati',
        kind: 'licao',
        words: ['rabotati', 'pomagati', 'boljnica', 'lěkar', 'dožd', 'sněg'],
        cloze: [
          { sentence: 'Ja ___ rabotati zautra.', answer: 'budu', options: ['budu', 'byl', 'jesm'], translation: 'Eu trabalharei amanhã.' },
          { sentence: 'Moj ___ pomagaje mnogo.', answer: 'lěkar', options: ['lěkar', 'učitelj', 'trg'], translation: 'O meu médico ajuda muito.' },
          { sentence: 'Zautra budet ___.', answer: 'dožd', options: ['dožd', 'sněg', 'větr'], translation: 'Amanhã vai chover.' },
        ],
        voice: {
          bot: 'Čto ty budeš dělati zautra?',
          botTranslation: 'O que você fará amanhã?',
          expected: ['Ja budu rabotati.', 'ja budu', 'zautra'],
          hint: 'Responda com “Ja budu…” e um verbo no infinitivo.',
        },
        communityPrompt: 'Diga em interslavo o que você fará amanhã, usando “ja budu…” mais um verbo no infinitivo.',
      },
      {
        id: 'isv-u4-l3',
        title: 'Prova: rabota i vrěmě',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Čto ty kupila dnes, i čto ty budeš dělati zautra?',
          botTranslation: 'O que você comprou hoje, e o que você fará amanhã?',
          expected: ['Ja kupila oděžu, i zautra ja budu rabotati.', 'ja kupila', 'ja budu'],
          hint: 'Use o particípio-L para o passado e “ja budu…” para o futuro.',
        },
        communityPrompt: 'Escreva um parágrafo curto contando o que você fez ontem (passado com byti + particípio-L) e o que fará amanhã (futuro com budu + infinitivo).',
      },
    ],
  },
];
