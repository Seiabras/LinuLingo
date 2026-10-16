import type { GrammarTopic } from '../types';

/**
 * Gramática do aleúte, do A1.1 ao A2.2. A2.1 e A2.2: Knut Bergsland, “Aleut Grammar / Unangam
 * Tunuganaan Achixaasix̂” (ANLC, 1997) [BERG97] e “Aleut Dictionary” (ANLC, 1994) [BERG94], lidos nas
 * páginas escaneadas (archive.org/details/micro_IA41153314_0395 e micro_IA41153349_0992); “p.” é a página
 * impressa. Os exemplos são frases atkanas (“A”) dos livros, com a tradução deles; nenhum foi montado.
 * A1.1 e A1.2: Fontes: [WIKI] Wikipédia em
 * inglês, «Aleut language» (consultada em 10/10/2026): as tabelas do presente (-ku-) e do presente
 * negativo (-lakaĝ-), a posse (“tayaĝum adaa”), os pronomes (ting, txin), a ordem sujeito-objeto-verbo,
 * a comparação com as línguas esquimós e a tabela dos números; [OMNI] (frases). Todos os exemplos são
 * frases das fontes, com a tradução delas.
 */
export const GRAMMAR_ALE: GrammarTopic[] = [
  {
    id: 'ale-g1',
    level: 'A1.1',
    title: 'O presente: -ku-',
    emoji: '🙋',
    summary: 'No presente, o verbo leva -ku-. “Ele, ela”: -kux̂. “Eu”, em Atka: -kuq (no leste, -kuqing).',
    sections: [
      {
        text: 'O presente do aleúte se faz com -ku- depois da raiz do verbo, e o fim muda com a pessoa. Nas formas de Atka, “eu” é -kuq, “você” é -kux̂t e “ele, ela” é -kux̂. No aleúte oriental, “eu” é -kuqing e “você” é -kux̂ txin.',
        table: {
          head: ['Pessoa', 'Atka', 'Leste'],
          rows: [
            ['eu', '-kuq', '-kuqing'],
            ['você', '-kux̂t', '-kux̂ txin'],
            ['ele, ela', '-kux̂', '-kux̂'],
          ],
        },
        examples: [
          ['Tayaĝux̂ awakux̂.', 'O homem está trabalhando.'],
          ['Txin yaxtakuq.', 'Eu te amo.'],
          ['Linu asax̂takuq.', 'Meu nome é Linu.'],
        ],
      },
      {
        text: 'Para negar no presente, o verbo leva -lakaĝ- no lugar de -ku-: em Atka, “eu não” é -lakaq, e “ele, ela não”, -lakax̂.',
        table: {
          head: ['Pessoa', 'Atka', 'Leste'],
          rows: [
            ['eu não', '-lakaq', '-lakaqing'],
            ['ele, ela não', '-lakax̂', '-lakax̂'],
          ],
        },
      },
    ],
    pitfalls: ['Usar -kux̂ para “eu”: “awakux̂” é “ele, ela trabalha”; o “eu” de Atka termina em -kuq.'],
    quiz: [
      { question: 'O que quer dizer “Tayaĝux̂ awakux̂”?', options: ['O homem está trabalhando.', 'Eu estou trabalhando.', 'O homem não trabalha.'], answer: 'O homem está trabalhando.', explanation: '-kux̂ é “ele, ela”, no presente.' },
      { question: 'Em Atka, qual é o fim de “eu” no presente?', options: ['-kuq', '-kux̂', '-lakax̂'], answer: '-kuq', explanation: '“Txin yaxtakuq”: eu te amo.' },
    ],
  },
  {
    id: 'ale-g2',
    level: 'A1.1',
    title: 'Sujeito, objeto, verbo',
    emoji: '🧱',
    summary: 'A ordem da frase é fixa: quem faz, o que recebe a ação e, no fim, o verbo.',
    sections: [
      {
        text: 'O aleúte põe o verbo no fim, depois do sujeito e do objeto. Ao contrário das línguas esquimós, que marcam o sujeito com um final diferente quando o verbo tem objeto, o aleúte usa a mesma forma para os dois e deixa a ordem das palavras dizer quem faz o quê.',
        examples: [
          ['Piitrax̂ tayaĝux̂ kidukux̂.', 'O Pedro está ajudando o homem.'],
          ['Tayaĝux̂ awakux̂.', 'O homem está trabalhando.'],
        ],
      },
      {
        text: 'Os pronomes “ting” (eu, me) e “txin” (você, te) aparecem sobretudo como objeto, antes do verbo: “Txin yaxtakuq”, te amo.',
        examples: [['Txin yaxtakuq.', 'Eu te amo.']],
      },
    ],
    pitfalls: ['Trocar a ordem: em “Piitrax̂ tayaĝux̂ kidukux̂”, quem ajuda é o Pedro, que vem primeiro.'],
    quiz: [
      { question: 'Em “Piitrax̂ tayaĝux̂ kidukux̂”, quem ajuda?', options: ['o Pedro', 'o homem', 'eu'], answer: 'o Pedro', explanation: 'O sujeito vem primeiro, o objeto depois e o verbo no fim.' },
    ],
  },
  {
    id: 'ale-g3',
    level: 'A1.2',
    title: 'De quem é: tayaĝum adaa',
    emoji: '🔗',
    summary: 'O dono vem antes, com -m; a coisa vem depois, com -a.',
    sections: [
      {
        text: 'Na posse, as duas palavras mudam: o dono ganha o final -m e vem antes; a coisa ganha o final -a. Se o dono já é conhecido, ele some, e a coisa fica com -a: “ulaa”, a casa dele.',
        table: {
          head: ['Sozinho', 'Com dono', 'Sentido'],
          rows: [
            ['tayaĝux̂ (homem)', 'tayaĝum …', 'do homem'],
            ['adax̂ (pai)', 'tayaĝum adaa', 'o pai do homem'],
            ['—', 'ulaa', 'a casa dele'],
          ],
        },
        examples: [
          ['Tayaĝum adaa.', 'O pai do homem.'],
          ['Tayaĝum ulaa.', 'A casa do homem.'],
        ],
      },
    ],
    pitfalls: ['Pôr o dono depois: “o pai do homem” é “tayaĝum adaa”, com o dono primeiro.'],
    quiz: [
      { question: 'Como se diz “o pai do homem”?', options: ['tayaĝum adaa', 'adax̂ tayaĝux̂', 'adaa tayaĝum'], answer: 'tayaĝum adaa', explanation: 'O dono vem antes, com -m.' },
    ],
  },
  {
    id: 'ale-g4',
    level: 'A1.2',
    title: 'Contar em dez',
    emoji: '🔢',
    summary: 'Ao contrário das línguas esquimós, o aleúte conta em dez: hatix̂ (10), sisax̂ (100).',
    sections: [
      {
        text: 'O inupiaque e o iúpique contam em vinte, mas o aleúte conta em dez. As dezenas se fazem multiplicando: o número leva -dim e vem com “hatix̂” (dez) — como “qankudim hatix̂”. Alguns números mudam entre Atka e o leste.',
        table: {
          head: ['Número', 'Atka', 'Leste'],
          rows: [
            ['1', 'ataqan', 'ataqan'],
            ['2', 'alax', 'aalax'],
            ['3', 'qankus', 'qaankun'],
            ['4', 'siching', 'sichin'],
            ['5', 'chaang', 'chaang'],
            ['10', 'hatix̂', 'hatix̂'],
            ['100', 'sisax̂', 'sisax̂'],
          ],
        },
        examples: [['Ataqan tunuum sanaqaĝikan.', 'Uma língua só nunca basta.']],
      },
    ],
    pitfalls: ['Contar em vinte, como nas línguas esquimós vizinhas: em aleúte, a base é o dez, “hatix̂”.'],
    quiz: [
      { question: 'Como se diz “cinco” em aleúte?', options: ['chaang', 'hatix̂', 'qankus'], answer: 'chaang', explanation: '“Chaang” é cinco; “hatix̂”, dez; “qankus”, três.' },
    ],
  },
  {
    id: 'ale-g5',
    level: 'A2.1',
    title: 'O passado: -na-',
    emoji: '⏪',
    // [BERG97] §2.1.9.3.3, p. 90: “-na- is used in active verbs with a fully specified or no complement”;
    // “the remote refers to a past removed from the time of speech by at least one day”; exemplos A
    // “ukinax̂ ukunaq”, “hlamaan qax̂ aĝnaq”, “sabaakax̂ tayaĝux̂ kignax̂”, “tayaĝux̂ chagix̂ asx̂atnax̂”,
    // “qanayiim haqanax̂t”, “Piitrax̂ haman ulax̂ agunax̂”.
    summary: 'Para o que aconteceu há pelo menos um dia, o verbo leva -na-: “agunax̂”, ele construiu.',
    sections: [
      {
        text: 'O passado do aleúte se faz com -na- depois da raiz do verbo. Ele vale para o que aconteceu há pelo menos um dia. O fim muda com a pessoa, como no presente: “eu” termina em -naq, “você” em -nax̂t e “ele, ela” em -nax̂.',
        table: {
          head: ['Pessoa', 'Presente', 'Passado'],
          rows: [
            ['eu', '-kuq', '-naq'],
            ['você', '-kux̂t', '-nax̂t'],
            ['ele, ela', '-kux̂', '-nax̂'],
          ],
        },
        examples: [
          ['Ukinax̂ ukunaq.', 'Eu achei a faca.'],
          ['Hlamaan qax̂ aĝnaq.', 'Eu dei um peixe ao menino.'],
          ['Qanayiim haqanax̂t?', 'Quando você veio?'],
          ['Piitrax̂ haman ulax̂ agunax̂.', 'O Pedro construiu aquela casa.'],
        ],
      },
      {
        text: 'A ordem continua a mesma: quem faz, o que recebe a ação e, no fim, o verbo no passado.',
        examples: [
          ['Sabaakax̂ tayaĝux̂ kignax̂.', 'O cachorro mordeu o homem.'],
          ['Tayaĝux̂ chagix̂ asx̂atnax̂.', 'O homem pegou um linguado.'],
        ],
      },
    ],
    pitfalls: [
      'Usar -na- para o que acabou de acontecer: o passado com -na- é de pelo menos um dia atrás.',
      'Esquecer que o fim muda com a pessoa: “ukunaq” é “eu achei”; “agunax̂”, “ele construiu”.',
    ],
    quiz: [
      { question: 'O que quer dizer “Sabaakax̂ tayaĝux̂ kignax̂”?', options: ['O cachorro mordeu o homem.', 'O homem mordeu o cachorro.', 'O cachorro vai morder o homem.'], answer: 'O cachorro mordeu o homem.', explanation: 'Quem faz vem primeiro, e -na- marca o passado.' },
      { question: 'Qual é o fim de “eu” no passado?', options: ['-naq', '-nax̂', '-kuq'], answer: '-naq', explanation: '“Ukinax̂ ukunaq”: eu achei a faca.' },
      { question: 'Como se pergunta “quando você veio?”', options: ['Qanayiim haqanax̂t?', 'Kiin asax̂tax̂t?', 'Qaataax̂t?'], answer: 'Qanayiim haqanax̂t?', explanation: '-nax̂t é “você”, no passado.' },
    ],
  },
  {
    id: 'ale-g6',
    level: 'A2.1',
    title: 'Ontem, amanhã e daqui a pouco',
    emoji: '⏩',
    // [BERG97] §2.1.9.3.3, p. 90 (“qilagan waaĝaaĝan saĝanax̂ ‘he will come tomorrow’, maangan saĝaqang ‘I
    // will do it tomorrow’ vs. main verb in the conjunctive for the past (only Atkan): qilagan haqal
    // saĝanax̂ ‘he came yesterday’”; saĝa- “to sleep, pass the night”); §2.1.9.4.2.3, p. 94 (“Piitrax̂
    // waaĝaaĝan aĝikux̂ ‘Peter is coming, is about to come’, Piitrax̂ waaĝaaĝan aĝnax̂ ‘Peter will come
    // back later’”; “A, Au amu- in the present […] indicates a near future”: “Piitrax̂ waaĝaaĝan amukux̂
    // ‘Peter will come soon’”); [BERG94] p. 322 (qilagan: “tomorrow; […] A 1950- yesterday”).
    summary: '“Qilagan” é amanhã ou ontem: quem decide é o verbo. Para o futuro, Atka usa auxiliares: aĝ-, amu-, saĝa-.',
    sections: [
      {
        text: 'Em Atka, “qilagan” quer dizer amanhã. Com o verbo principal na forma -l (o conjuntivo) e o auxiliar “saĝa-” (dormir, passar a noite) no passado, vira ontem: “Qilagan haqal saĝanax̂”, ele veio ontem.',
        examples: [
          ['Qilagan haqal saĝanax̂.', 'Ele veio ontem.'],
          ['Qilagan waaĝaaĝan saĝanax̂.', 'Ele vai chegar amanhã.'],
          ['Maangan saĝaqang.', 'Vou fazer isso amanhã.'],
        ],
      },
      {
        text: 'Para o futuro, o verbo principal termina em -ĝan e vem seguido de um auxiliar. Com “aĝ-” no presente, é agora mesmo; com “amu-”, é daqui a pouco; com “aĝ-” no passado, é mais tarde.',
        table: {
          head: ['Frase', 'Quando'],
          rows: [
            ['Piitrax̂ waaĝaaĝan aĝikux̂.', 'já, está chegando'],
            ['Piitrax̂ waaĝaaĝan amukux̂.', 'logo, daqui a pouco'],
            ['Piitrax̂ waaĝaaĝan aĝnax̂.', 'mais tarde'],
          ],
        },
        examples: [
          ['Piitrax̂ waaĝaaĝan amul ii?', 'O Pedro vai chegar logo?'],
          ['Txin ukux̂tahliinaq.', 'Vou te ver de novo mais tarde.'],
        ],
      },
    ],
    pitfalls: [
      'Achar que “qilagan” é só amanhã: com o verbo no passado (“haqal saĝanax̂”), é ontem.',
      'Ler -na- como passado em “Piitrax̂ waaĝaaĝan aĝnax̂”: depois do auxiliar “aĝ-”, ele indica um futuro mais distante.',
    ],
    quiz: [
      { question: 'O que quer dizer “Qilagan haqal saĝanax̂”?', options: ['Ele veio ontem.', 'Ele vem amanhã.', 'Ele está chegando.'], answer: 'Ele veio ontem.', explanation: 'Com o auxiliar no passado, “qilagan” é ontem.' },
      { question: 'Qual frase quer dizer “o Pedro vai chegar logo”?', options: ['Piitrax̂ waaĝaaĝan amukux̂.', 'Piitrax̂ waaĝaaĝan aĝnax̂.', 'Piitrax̂ haman ulax̂ agunax̂.'], answer: 'Piitrax̂ waaĝaaĝan amukux̂.', explanation: '“Amu-” no presente marca o futuro próximo.' },
    ],
  },
  {
    id: 'ale-g7',
    level: 'A2.2',
    title: 'Um, dois, muitos: -x̂, -x, -s',
    emoji: '👥',
    // [BERG97] §2.1.0, p. 47 (nomes com singular, dual e plural); §2.1.1.1.1, p. 47 (sg. -(x̂), du. -(i)x,
    // pl. E -(i)n, A -(i)s); §2.1.5.1, p. 63 (alax com dual, mais tarde plural; qankus e siching com
    // plural; chaang em diante, singular); §2.1.1.1.3, p. 49 (“adamas ‘our father’, still used by Atkan
    // speakers”). [BERG94] p. 49 (“alax tayaĝux A 1952 two men”), p. 289 (“qas qal qilax̂sis A 1978”),
    // p. 308 (qan’gix̂, pl. A qan’gis); [ANLC] (Unangax̂, Unangas no oeste, Unangan no leste).
    summary: 'Uma coisa termina em -x̂; duas, em -x; muitas, em Atka, em -s (no leste, -n).',
    sections: [
      {
        text: 'O aleúte não tem gênero, mas tem três números: singular (um), dual (dois) e plural (muitos). No singular, o nome termina em -x̂; no dual, em -x; no plural de Atka, em -s. O aleúte oriental faz o plural em -n.',
        table: {
          head: ['Um', 'Dois', 'Muitos (Atka)'],
          rows: [
            ['tayaĝux̂ (um homem)', 'alax tayaĝux (dois homens)', '—'],
            ['qax̂ (um peixe)', '—', 'qas (peixes)'],
            ['Unangax̂ (um aleúte)', '—', 'Unangas (os aleútes)'],
            ['qan’gix̂ (inverno)', '—', 'qan’gis (invernos)'],
          ],
        },
        examples: [
          ['Alax tayaĝux.', 'Dois homens.'],
          ['Qas qal qilax̂sis.', 'Os peixes estavam mordendo a isca hoje de manhã.'],
        ],
      },
      {
        text: 'O número pede uma forma do nome: depois de “alax” (dois), o nome vai para o dual; depois de “qankus” (três) e “siching” (quatro), para o plural; do “chaang” (cinco) em diante, fica no singular.',
      },
      {
        text: 'O dono também tem número: “adamas”, nosso pai, ainda é dito pelos falantes de Atka, com o -mas de “nosso”.',
        examples: [['Adamas.', 'Nosso pai.']],
      },
    ],
    pitfalls: [
      'Usar o plural para duas coisas: dois homens é “alax tayaĝux”, no dual.',
      'Trocar o plural de Atka pelo do leste: em Atka, “Unangas”; no leste, “Unangan”.',
    ],
    quiz: [
      { question: 'Como se diz “peixes” em Atka?', options: ['qas', 'qax̂', 'qan'], answer: 'qas', explanation: 'O plural de Atka termina em -s.' },
      { question: 'Como se diz “dois homens”?', options: ['alax tayaĝux', 'alax tayaĝus', 'tayaĝux̂ alax'], answer: 'alax tayaĝux', explanation: 'Depois de “alax”, o nome vai para o dual, em -x.' },
    ],
  },
  {
    id: 'ale-g8',
    level: 'A2.2',
    title: 'Números grandes: algidim hatix̂',
    emoji: '🧮',
    // [BERG97] §2.1.5.0, p. 63 (tiisichax̂, miliyuunax̂ do russo); §2.1.5.3, p. 64 (-(i)di-m multiplicativo:
    // qankudim, chaangidim; algidim “twice”); §2.1.5.4, p. 64–65 (“algidim hatix̂ ‘twice ten, twenty’”;
    // A 1950- “alax sisax̂, qankus sisax̂, siching sisax̂”; A 1950 hatidim sisax̂ e tiisichax̂); §2.1.5.5,
    // p. 66 (A 1950- “hatim (or hatix̂) ataqan ‘eleven’”, “algidim hatix̂ ataqan ‘twenty one’”; A 1971
    // “sichiing miliyuunax̂, sichiing tiisichax̂, sichiing sisax̂ sichiingidim hatix̂ sichiing = 9,009,999”).
    // [BERG94] p. 49 (“alax hatix̂ (or hatix) A 1791 […], 1840 […], Ab 1931–63 twenty”).
    summary: 'De onze a dezenove, dez + número; as dezenas multiplicam o dez com -dim; cem é sisax̂; mil e milhão vêm do russo.',
    sections: [
      {
        text: 'De onze a dezenove, o dez vem primeiro e o número depois: “hatim ataqan”, onze. As dezenas multiplicam o dez: o número ganha -dim (vezes) e vem antes de “hatix̂”. Vinte é “algidim hatix̂”, duas vezes dez; vinte e um, “algidim hatix̂ ataqan”.',
        table: {
          head: ['Número', 'Aleúte de Atka'],
          rows: [
            ['11', 'hatim ataqan'],
            ['20', 'algidim hatix̂'],
            ['21', 'algidim hatix̂ ataqan'],
            ['100', 'sisax̂'],
            ['200', 'alax sisax̂'],
            ['300', 'qankus sisax̂'],
            ['1.000', 'tiisichax̂ (ou hatidim sisax̂)'],
            ['1.000.000', 'miliyuunax̂'],
          ],
        },
      },
      {
        text: 'Com essas peças, dá para dizer qualquer número. Bergsland registrou em Atka, em 1971, o número 9.009.999:',
        examples: [['Sichiing miliyuunax̂, sichiing tiisichax̂, sichiing sisax̂ sichiingidim hatix̂ sichiing.', '9.009.999']],
      },
    ],
    pitfalls: [
      'Estranhar “alax hatix̂” nas fontes antigas: é o vinte de Atka em 1791 e 1840 (e da ilha de Bering). Desde 1840, Atka multiplica: “algidim hatix̂”.',
      'Esquecer que mil e milhão vêm do russo: “tiisichax̂” (тысяча) e “miliyuunax̂” (миллион).',
    ],
    quiz: [
      { question: 'Como se diz “vinte” em Atka?', options: ['algidim hatix̂', 'hatim ataqan', 'alax sisax̂'], answer: 'algidim hatix̂', explanation: '“Algidim” é duas vezes; “hatix̂”, dez.' },
      { question: 'O que é “alax sisax̂”?', options: ['duzentos', 'vinte', 'dois mil'], answer: 'duzentos', explanation: '“Alax” é dois e “sisax̂”, cem.' },
      { question: 'De que língua vem “tiisichax̂”, mil?', options: ['do russo', 'do inglês', 'do iúpique'], answer: 'do russo', explanation: 'Do russo тысяча (týsyacha).' },
    ],
  },
];
