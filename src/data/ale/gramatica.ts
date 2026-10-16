import type { GrammarTopic } from '../types';

/**
 * Gramática do aleúte, do A1.1 ao B1.4 (B1: ver o comentário antes de ale-g9). A2.1 e A2.2: Knut Bergsland, “Aleut Grammar / Unangam
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
        text: 'Em Atka, “qilagan” quer dizer amanhã ou ontem, e quem decide é o verbo principal, antes do auxiliar “saĝa-” (dormir, passar a noite). Na forma -l (o conjuntivo), é ontem: “Qilagan haqal saĝanax̂”, ele veio ontem. Na forma -ĝan (o intencional), é amanhã: “Qilagan waaĝaaĝan saĝanax̂”, ele vai chegar amanhã.',
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
      'Achar que “qilagan” é só amanhã: com o verbo principal em -l (“haqal saĝanax̂”), é ontem; com -ĝan (“waaĝaaĝan saĝanax̂”), é amanhã. O auxiliar “saĝanax̂” é o mesmo nas duas.',
      'Ler -na- como passado em “Piitrax̂ waaĝaaĝan aĝnax̂”: depois do auxiliar “aĝ-”, ele indica um futuro mais distante.',
    ],
    quiz: [
      { question: 'O que quer dizer “Qilagan haqal saĝanax̂”?', options: ['Ele veio ontem.', 'Ele vem amanhã.', 'Ele está chegando.'], answer: 'Ele veio ontem.', explanation: '“Haqal” está na forma -l (o conjuntivo): com ela, “qilagan” é ontem. Com “haqaaĝan”, seria amanhã.' },
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
  // ══ B1 (entrega de 16/10/2026): regras de [BERG97], com a página. Os exemplos são frases atkanas de
  // [BERG97] e [BERG94] (o ano entre parênteses no comentário é o que Bergsland dá), de Cedor L. Snigaroff
  // (1952, “N.M.”, citadas em [BERG97]) e de [DIRKS78] (1978), com a tradução da fonte. Nenhuma foi montada.
  {
    id: 'ale-g9',
    level: 'B1.1',
    title: 'Uma ação puxa a outra: o conjuntivo',
    emoji: '🔗',
    // [BERG97] §2.1.9.2, p. 86 (“-lix | -six, A, Au -l | -s, neg. -lakan Conjunctive. E.g. asx̂a-lix, -l
    // ‘dying’, asx̂a-lakan ‘not dying’; ayux-six, -s ‘going out (in a boat)’, ayug-lakan ‘not going out’”;
    // “The conjunctive admits neither simple number suffixes nor possessive suffixes”); p. 87 (A “haqal
    // qada ‘come and eat!’”); §3.9.3.1, p. 232–233 (sucessão: A 1978 “utal alaĝum achidan [for achidaa]
    // hnux̂takuq ‘I went down to the beach’”; A 1978 “tayaĝux̂ ixs tanaaĝakux̂ ‘the man returned’”; A 1978
    // “qayax̂ hangal kangakux̂”; A 1971 “Piitrax̂ ayuxtal qawanaaĝnax̂ ‘Peter went out to hunt sea lion’”);
    // §3.9.3.2, p. 233–234 (A 1978 “alax̂ angunal aduzax̂”; A “ama ‘also, and’”; A 1952 “hingan sulakan
    // uglaga agacha suda ‘don't take that one, take rather the other one’”; “in Atkan, by asxuun(ulax) ‘or’
    // […] 1979 qal asxuunulax hilax̂? ‘is he eating or (is he) reading?’”; A 1952 “haagal asx̂alanas ‘they
    // starved to death’” (N.M. 3:111); A 1978 “baankix̂ alqutal haxsit ‘how did you open the can?’”;
    // A 1973 “slaĝux̂ kayutul humsikux̂ ‘the wind is blowing hard’”).
    summary: 'Quando duas ações vêm juntas, só o último verbo leva o tempo e a pessoa; os outros ficam no conjuntivo: -l (depois de vogal) ou -s (depois de consoante).',
    sections: [
      {
        text: 'Em Atka, o conjuntivo termina em -l depois de vogal e em -s depois de consoante. Ele não leva pessoa nem número: quem diz o tempo e a pessoa é o último verbo da frase. A forma negativa é -lakan.',
        table: {
          head: ['Raiz', 'Conjuntivo', 'Negativo'],
          rows: [
            ['asx̂a- (morrer)', 'asx̂al (morrendo)', 'asx̂alakan (sem morrer)'],
            ['ayux- (sair de barco)', 'ayuxs (saindo de barco)', 'ayuglakan (sem sair de barco)'],
          ],
        },
        examples: [
          ['Haqal qada!', 'Venha comer!'],
          ['Qayax̂ hangal kangakux̂.', 'Ela subiu até o alto da colina.'],
        ],
      },
      {
        text: 'Uma ação depois da outra: com os verbos de movimento, o conjuntivo diz o caminho, e o último verbo diz aonde se chegou.',
        examples: [
          ['Tayaĝux̂ ixs tanaaĝakux̂.', 'O homem voltou para casa.'],
          ['Utal alaĝum achidan hnux̂takuq.', 'Desci até a praia.'],
          ['Piitrax̂ ayuxtal qawanaaĝnax̂.', 'O Pedro saiu de barco para caçar leão-marinho.'],
        ],
      },
      {
        text: 'O conjuntivo também diz o que acontece ao mesmo tempo, o jeito ou a causa.',
        examples: [
          ['Alax̂ angunal aduzax̂.', 'A baleia é grande e comprida.'],
          ['Slaĝux̂ kayutul humsikux̂.', 'O vento está soprando forte.'],
          ['Baankix̂ alqutal haxsit?', 'Como você abriu a lata?'],
          ['Haagal asx̂alanas.', 'Morreram de fome.'],
        ],
      },
      {
        text: 'O negativo -lakan faz o contraste: “não isto, mas aquilo”. E, em Atka, “asxuunulax” quer dizer “ou”.',
        examples: [
          ['Hingan sulakan uglaga agacha suda.', 'Não pegue esse, pegue o outro.'],
          ['Qal asxuunulax hilax̂?', 'Ele está comendo ou lendo?'],
        ],
      },
    ],
    pitfalls: [
      'Pôr a pessoa no primeiro verbo: em “Haqal qada!”, só “qada” leva a ordem; “haqal” fica no conjuntivo.',
      'Trocar -l e -s: “haqal” vem de “haqa-”, que acaba em vogal; “ixs” e “aygaxs” vêm de raízes que acabam em consoante.',
    ],
    quiz: [
      { question: 'O que quer dizer “Haqal qada!”?', options: ['Venha comer!', 'Ele veio e comeu.', 'Não coma!'], answer: 'Venha comer!', explanation: '“Haqal” (vindo) está no conjuntivo; “qada” é a ordem: coma!' },
      { question: 'Em “Alax̂ angunal aduzax̂”, qual verbo está no conjuntivo?', options: ['angunal', 'aduzax̂', 'alax̂'], answer: 'angunal', explanation: '“Angunal” (sendo grande) termina em -l; “aduzax̂” leva o tempo e a pessoa.' },
      { question: 'Como se diz “ou” em Atka?', options: ['asxuunulax', 'ama', 'aang'], answer: 'asxuunulax', explanation: '“Ama” é “e, também”; “aang” é “sim”.' },
    ],
  },
  {
    id: 'ale-g10',
    level: 'B1.1',
    title: 'Agora ou sempre: o geral e -za-',
    emoji: '🔁',
    // [BERG97] §2.1.9.3.1, p. 88 (“The general is a zero tense […]. A statement in the general may be
    // generic”: A “isuĝix̂ alaĝum algaa ax̂ ‘the hair seal is a sea mammal’; Unangax̂ aq ‘I am an Aleut’;
    // […] haagaĝulaq ‘I do not starve (I have enough food)’, cf. present haagalakaq ‘I am not hungry
    // (now)’”; “A statement in the general very often […] includes the derivational suffix A -za-, E (and
    // A) -da- ‘generally, usually’, e.g. A qawax̂ angunazax̂ ‘a sea lion is big, the sea lion is a big
    // animal’; Piitrax̂ kurizaĝulax̂ […] ‘Peter does not smoke, never smokes’, cf. present Piitrax̂ kurilakax̂
    // ‘Peter is not smoking (now)’”; “A Piitrax̂ kurizax̂ ii? ‘does Peter smoke, is Peter a smoker’”).
    // [DIRKS78] p. 5: “Slum aslaan hitnisas hitil aguun lalgazas” (“During the summers certain plants are
    // gathered for food”); “Aangsus tulkusix̂ ilagaan agulgaaĝutazas” (“Berries are also used for making
    // fish spread”).
    summary: 'O presente (-ku-) é o que acontece agora; para o que é sempre assim, Atka usa o geral, quase sempre com -za-.',
    sections: [
      {
        text: 'O presente com -ku- diz o que acontece agora. Para um costume ou uma verdade geral, Atka usa o geral, quase sempre com o sufixo -za-, “de costume, sempre”.',
        table: {
          head: ['Agora (presente)', 'Sempre (geral)'],
          rows: [
            ['Piitrax̂ kurilakax̂. (O Pedro não está fumando.)', 'Piitrax̂ kurizaĝulax̂. (O Pedro não fuma, nunca fuma.)'],
            ['Haagalakaq. (Não estou com fome.)', 'Haagaĝulaq. (Não passo fome, tenho comida.)'],
          ],
        },
        examples: [
          ['Qawax̂ angunazax̂.', 'O leão-marinho é grande (é um bicho grande).'],
          ['Piitrax̂ kurizax̂ ii?', 'O Pedro fuma? (Ele é fumante?)'],
        ],
      },
      {
        text: 'O geral também diz o que uma coisa é.',
        examples: [
          ['Isuĝix̂ alaĝum algaa ax̂.', 'A foca é um mamífero do mar.'],
          ['Unangax̂ aq.', 'Eu sou aleúte.'],
        ],
      },
      {
        text: 'Nos textos de Atka, -za- aparece em tudo o que se faz sempre, como nas receitas do “Atkan Food”.',
        examples: [
          ['Slum aslaan hitnisas hitil aguun lalgazas.', 'No verão, certas plantas são colhidas para comer.'],
          ['Aangsus tulkusix̂ ilagaan agulgaaĝutazas.', 'Com as frutinhas também se faz pasta de peixe.'],
        ],
      },
    ],
    pitfalls: ['Usar o presente para um costume: “Piitrax̂ kurilakax̂” é só agora; “o Pedro nunca fuma” é “Piitrax̂ kurizaĝulax̂”.'],
    quiz: [
      { question: 'Qual frase quer dizer “o Pedro nunca fuma”?', options: ['Piitrax̂ kurizaĝulax̂.', 'Piitrax̂ kurilakax̂.', 'Piitrax̂ kurizax̂ ii?'], answer: 'Piitrax̂ kurizaĝulax̂.', explanation: '-za- é o costume; “kurilakax̂” é só agora.' },
      { question: 'O que quer dizer “Unangax̂ aq”?', options: ['Eu sou aleúte.', 'Ele é aleúte.', 'Os aleútes.'], answer: 'Eu sou aleúte.', explanation: 'É o geral, que diz o que alguém é.' },
    ],
  },
  {
    id: 'ale-g11',
    level: 'B1.2',
    title: 'Onde: nagan, kugan, angan',
    emoji: '📦',
    // [BERG97] §2.1.6.0–2, p. 67–69 (os positional nouns têm sufixos de posse e casos adverbiais: locativo,
    // “a position at the referent as well as a motion to the referent”, e ablativo, “a motion from as well
    // as a motion along the referent”; “hadan ‘toward him/her/it’, abl. hadaan”; “qusan ‘above, over
    // him/her/it’, abl. qusaan”; “angan ‘beside, alongside, etc.’, abl. angaan”; “kugan ‘on top of -,
    // etc.’, abl. kugaan”; “nagan ‘inside of it’, abl. nagaan”; “kuu ‘its top surface’”; o dativo 3A
    // “ngaan”); [BERG94] p. 190 (il-: “inside (in relation to an opening)”) e p. 281 (nag-: “inside,
    // interior (of something hollow that has an opening)”). Exemplos: [BERG97] p. 158 (A 1971 “Piitrax̂
    // kanfiixtas yaasikam nagan aĝikux̂”; “qas Piitram ngaan (or Piitramaan) aĝnaq ‘I gave the fish to
    // Peter’”), p. 62 (A 1971 “asux̂ imdahlikum ilam axs stuuluĝim kugan hyukux̂”), p. 194 (A 1950 “itxaan
    // tanadgusim kugaan waaĝakux̂”; A 1951 “siching hiisix̂ angalim ilan ‘on the fourth day’”), p. 159
    // (A 1971 “hlax̂ hachigan kugaan tuganax̂ ‘he slapped the boy on his back’”; A 1950 “anagan xliibam ilaa
    // ngaan aĝikuu ‘his mother gave him a piece of bread’”), p. 222 (A 1973 “skuulnikas skuulim nagan qangul
    // hagyayal qilax̂sis”), p. 207 (A 1973 “sunam kugan ayuxtal amaxtikus”).
    summary: 'O lugar de referência vem antes, com -m; a posição vem depois, com -n (onde, para onde) ou -aan (de onde).',
    sections: [
      {
        text: 'As palavras de posição são nomes. O lugar de referência vem antes, com -m, como o dono na posse, e a posição vem depois. Com -n (o locativo), dizem onde a coisa está ou para onde vai; com -aan (o ablativo), de onde vem ou por onde passa.',
        table: {
          head: ['Posição', 'Onde, para onde (-n)', 'De onde (-aan)'],
          rows: [
            ['dentro (de algo oco)', 'nagan', 'nagaan'],
            ['em cima', 'kugan', 'kugaan'],
            ['ao lado', 'angan', 'angaan'],
            ['acima', 'qusan', 'qusaan'],
            ['em direção a', 'hadan', 'hadaan'],
          ],
        },
        examples: [
          ['Piitrax̂ kanfiixtas yaasikam nagan aĝikux̂.', 'O Pedro pôs as balas numa caixa.'],
          ['Asux̂ imdahlikum ilam axs stuuluĝim kugan hyukux̂.', 'A panela encheu demais e transbordou na mesa.'],
          ['Itxaan tanadgusim kugaan waaĝakux̂.', 'Ele veio de outra aldeia.'],
          ['Hlax̂ hachigan kugaan tuganax̂.', 'Ele deu um tapa nas costas do menino.'],
        ],
      },
      {
        text: '“Nagan” é o interior de algo oco, com abertura (uma caixa, uma casa); “ilan” é “dentro, junto”, e serve também para o tempo.',
        examples: [
          ['Skuulnikas skuulim nagan qangul hagyayal qilax̂sis.', 'Os alunos entraram na escola e a limparam hoje de manhã.'],
          ['Siching hiisix̂ angalim ilan.', 'No quarto dia.'],
          ['Sunam kugan ayuxtal amaxtikus.', 'Saímos num navio à noite.'],
        ],
      },
      {
        text: 'Para “para alguém”, o aleúte usa “ngaan”, o dativo, depois do nome em -m.',
        examples: [
          ['Qas Piitram ngaan aĝnaq.', 'Eu dei os peixes ao Pedro.'],
          ['Anagan xliibam ilaa ngaan aĝikuu.', 'A mãe dele deu a ele um pedaço de pão.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr a posição antes do lugar: é “yaasikam nagan”, com o lugar primeiro.',
      'Trocar -n por -aan: “tanadgusim kugaan waaĝakux̂” é “veio da aldeia”, não “foi para a aldeia”.',
    ],
    quiz: [
      { question: 'Como se diz “dentro da caixa”?', options: ['yaasikam nagan', 'nagan yaasikax̂', 'yaasikax̂ nagaan'], answer: 'yaasikam nagan', explanation: 'O lugar vem antes, com -m; a posição depois, com -n.' },
      { question: 'O que quer dizer “Itxaan tanadgusim kugaan waaĝakux̂”?', options: ['Ele veio de outra aldeia.', 'Ele foi para outra aldeia.', 'Ele mora em outra aldeia.'], answer: 'Ele veio de outra aldeia.', explanation: '“Kugaan”, com -aan, é “de onde”.' },
      { question: 'Qual forma quer dizer “de cima de”?', options: ['kugaan', 'kugan', 'kuu'], answer: 'kugaan', explanation: '“Kugan” é “em cima”; “kuu”, “a superfície de cima dele”.' },
    ],
  },
  {
    id: 'ale-g12',
    level: 'B1.3',
    title: 'Ordens e avisos: -da, -lagada, -ĝanaan',
    emoji: '🍳',
    // [BERG97] §2.1.9.6, p. 96 (“2.p.sg. E, A -(a)da […]; neg. E, A -lagada […]; no marking of anaphoric
    // complement. E.g. E, A qanguda […] ‘(please) come in!’; E, A qada ‘(please) eat!’ (A more politely qadá
    // with lengthened final vowel); E/A nung/ngus aĝada (later A iming aĝida) ‘give it to me’; […] A hichada
    // […] (stem hit-) ‘go out!’; […] E, A sulagada ‘don't take it’; A hyutlagada ‘don't spill it’”); p. 87
    // (A 1950 “ukudigalix ‘live well!’ (also imperative ukudigada)”); §2.1.9.7, p. 97 (“The prohibitive
    // expresses a warning, differing from the negative imperative or optative by referring to a
    // non-immediate future, e.g. […] A 1950- sisaaĝanax̂t ‘don't get lost (lose your way)’; […] A
    // ugunuuĝanaan ‘don't forget it’”); p. 234 (A 1952 “hingan sulakan uglaga agacha suda”). [DIRKS78]
    // p. 9: “Hitaasazahliguun txin qakatil aguun qan’gim ngaan taxsada” (“After it dries, store it for
    // winter”); “Qangal aguun taangaa hyus chachix̂talakan piichim nagan ax̂tal qakatida” (“When the rice is
    // done, pour the water out and take the lid off the pot. Stick the pot into the oven and let it dry in
    // there”).
    summary: 'Para pedir a uma pessoa: -da (qada, coma!); para proibir: -lagada (hyutlagada, não derrame!); para avisar: -ĝanaan (ugunuuĝanaan, não esqueça!).',
    sections: [
      {
        text: 'Para pedir a uma pessoa que faça algo, o verbo termina em -da (ou -ada). Para dizer “não faça”, -lagada. A ordem não marca o objeto: “qada” é “coma” e também “coma isso”.',
        table: {
          head: ['Raiz', 'Faça!', 'Não faça!'],
          rows: [
            ['qa- (comer)', 'qada (coma!)', '—'],
            ['su- (pegar)', 'suda (pegue!)', 'sulagada (não pegue!)'],
            ['hyut- (derramar)', '—', 'hyutlagada (não derrame!)'],
            ['hit- (sair)', 'hichada (saia!)', '—'],
          ],
        },
        examples: [
          ['Qanguda!', 'Entre, por favor!'],
          ['Hichada!', 'Saia!'],
          ['Iming aĝida.', 'Me dê isso.'],
        ],
      },
      {
        text: 'Com a última vogal alongada, o pedido fica mais educado: “qadá!”. As despedidas também são ordens: “ukudigada!”, viva bem!',
        examples: [
          ['Qadá!', 'Coma, por favor!'],
          ['Ukudigada!', 'Viva bem! (tchau)'],
        ],
      },
      {
        text: 'Para um aviso sobre o que pode acontecer mais tarde, Atka usa o proibitivo, em -ĝanaan ou -ĝanax̂t.',
        examples: [
          ['Sisaaĝanax̂t!', 'Não se perca!'],
          ['Ugunuuĝanaan!', 'Não esqueça!'],
        ],
      },
      {
        text: 'Nas receitas do “Atkan Food”, a ordem fica no fim de frases longas.',
        examples: [
          ['Hitaasazahliguun txin qakatil aguun qan’gim ngaan taxsada.', 'Depois que secar, guarde para o inverno.'],
          ['Qangal aguun taangaa hyus chachix̂talakan piichim nagan ax̂tal qakatida.', 'Quando a sarana estiver cozida, jogue a água fora, tire a tampa e ponha a panela no forno para secar.'],
        ],
      },
    ],
    pitfalls: [
      'Proibir com -lakan: “não pegue” é “sulagada”. O -lakan vem antes de outra ordem: “Hingan sulakan uglaga agacha suda”, não pegue esse, pegue o outro.',
    ],
    quiz: [
      { question: 'Como se diz “não derrame!”?', options: ['Hyutlagada!', 'Hyutikuq.', 'Qada!'], answer: 'Hyutlagada!', explanation: '-lagada é o “não faça”.' },
      { question: 'O que quer dizer “Qanguda!”?', options: ['Entre, por favor!', 'Saia!', 'Coma!'], answer: 'Entre, por favor!', explanation: '“Saia!” é “Hichada!”; “Coma!”, “Qada!”.' },
      { question: 'Qual é o convite mais educado?', options: ['Qadá!', 'Qada!', 'Qakus.'], answer: 'Qadá!', explanation: 'A última vogal alongada deixa o pedido mais educado.' },
    ],
  },
  {
    id: 'ale-g14',
    level: 'B1.3',
    title: 'Quando e se: o condicional -gu-',
    emoji: '⏳',
    // [BERG97] §2.1.9.9, p. 99 (“E, Au -gu- | -ku-; A -(i)gu- […] Conditional”; “The 1.p.sg. […] has in
    // eastern Eastern (Ea) and in Atkan a lengthened vowel (-guung)”; A 1950 “qalgadas ilgal lagumax
    // haqaasazakus ‘they look for food and when they get it they bring it back’”; “sunax̂ haqaguu ‘when the
    // ship comes’”; A 1952 “tayaĝum ngus aĝil (for ax̂s) agungis suungan aĝikuning ‘if the man gives them
    // to me I will take them’”); p. 202 (A 1950 “haqal agungis agiitaangan aĝikuning ‘if they come I'll go
    // with them’”); p. 340 (“A new point is frequently introduced by the anterior or conditional of a-qada-
    // ‘after having’, e.g. […] A Aqadaam, or Aqadaguun ‘Then (s)he’”). [DIRKS78] p. 5: “Hagumatakus lalgal
    // aqadaguun jaamix̂ ilagaan agulgal xliibam angan qalgazas” (“The berries are gathered and jelly is made
    // out of them. Then the jelly is eaten on bread”).
    summary: 'O condicional -(i)gu- diz “quando” ou “se”: “sunax̂ haqaguu”, quando o navio vem.',
    sections: [
      {
        text: 'O condicional de Atka é -(i)gu-, com a pessoa no fim. Ele diz “quando” ou “se”. Para “eu”, Atka alonga a vogal: -guung.',
        examples: [
          ['Sunax̂ haqaguu.', 'Quando o navio vem.'],
          ['Qalgadas ilgal lagumax haqaasazakus.', 'Eles procuram comida e, quando acham, trazem para casa.'],
        ],
      },
      {
        text: 'Muitas vezes o verbo principal fica no conjuntivo, e o condicional vai para o auxiliar “a-” (ser): “haqal agungis”, se eles vierem.',
        examples: [
          ['Haqal agungis agiitaangan aĝikuning.', 'Se eles vierem, eu vou com eles.'],
          ['Tayaĝum ngus aĝil agungis suungan aĝikuning.', 'Se o homem me der essas coisas, eu vou pegar.'],
        ],
      },
      {
        text: 'Nos textos, “aqadaguun” (depois disso, então) abre um passo novo: é o condicional de “a-qada-”, depois de ter.',
        examples: [['Hagumatakus lalgal aqadaguun jaamix̂ ilagaan agulgal xliibam angan qalgazas.', 'As frutinhas são colhidas, e então se faz geleia com elas, que se come no pão.']],
      },
    ],
    pitfalls: ['Procurar uma palavra separada para “se”: em aleúte, o “se” e o “quando” estão no sufixo -gu- do verbo.'],
    quiz: [
      { question: 'O que quer dizer “Sunax̂ haqaguu”?', options: ['Quando o navio vem.', 'O navio veio.', 'O navio está chegando.'], answer: 'Quando o navio vem.', explanation: '-gu- é o condicional: quando, se.' },
      { question: 'Como Atka marca “eu” no condicional?', options: ['com a vogal longa: -guung', 'com -kuq', 'com -naq'], answer: 'com a vogal longa: -guung', explanation: '-kuq é o “eu” do presente; -naq, do passado.' },
    ],
  },
  {
    id: 'ale-g13',
    level: 'B1.4',
    title: 'Antigamente, dizem: -zana-, hiilax̂ta- e a voz passiva',
    emoji: '📜',
    // [BERG97] §2.1.9.3.1, p. 88 (-za- ‘generally, usually’) e §2.1.9.3.3, p. 90 (-na-, o passado de pelo
    // menos um dia); §3.4.3, p. 167 (“-lga- | -sxa-, a general passive suffix”); [BERG94] p. 168
    // (“hiilax̂ta-lix […] A 1860- […] vp. 1. to be spoken to; to be said, told about”). Exemplos de Cedor
    // L. Snigaroff, A 1952: [BERG97] p. 222 (N.M. 1:30, “Anĝaĝinangis hingaan Saĝuugam hadan ayx̂al ilagaan
    // alanadix ukumixtax̂ maqax̂tazanas hiilax̂tazas. ‘The people (of Amlia) used to go to Old Harbor to get
    // what they needed, it is said.’”), p. 180 (N.M. 1:20, “taxsaĝinas qanas al, tagadax̂ taxsazanas
    // hilax̂tazas ‘they (the people) ate the stored ones and replenished the supplies, it is said’”), p. 207
    // (N.M. 1:54), p. 249 (N.M. 2:25, “hlax̂ a-ku-q-aang hiilax̂takus tutaza-qa-ning ‘when I was a boy I heard
    // people telling about it’”; o curso tira os hífens de análise), p. 90 (N.M. 1:43), p. 295 (N.M. 1:15,
    // “ulam angunagan, ilan anĝaĝilgaayulax, qalgadas qulihlingiin aguĝal ‘a big house in which no one
    // (passive) lived being built just for food’”).
    summary: '-zana- é o que se costumava fazer; “hiilax̂tazas” no fim da frase é “dizem, conta-se”; -lga-, -sxa- fazem a voz passiva.',
    sections: [
      {
        text: '-za- é o sufixo do costume. Junto com o passado -na-, vira -zana-: o que se costumava fazer. Nas histórias de Snigaroff, é assim que se conta a vida de antigamente.',
        examples: [
          ['Anĝaĝinangis hingaan Saĝuugam hadan ayx̂al ilagaan alanadix ukumixtax̂ maqax̂tazanas hiilax̂tazas.', 'As pessoas (de Amlia) costumavam ir até Old Harbor para conseguir o que precisavam, dizem.'],
          ['Taxsaĝinas qanas al, tagadax̂ taxsazanas hilax̂tazas.', 'Elas comiam o que estava guardado e juntavam provisões novas, dizem.'],
        ],
      },
      {
        text: '“Hiilax̂ta-” quer dizer “ser dito”. No fim da frase, “hiilax̂tazas” ou “hiilax̂tadax̂” é “dizem, conta-se”: quem fala não viu, ouviu contar.',
        examples: [
          ['Hagumatal anĝaĝinas qaatulakan qanagzanas hiilax̂tadas.', 'Assim as pessoas passavam o inverno sem fome, dizem.'],
          ['Hlax̂ akuqaang hiilax̂takus tutazaqaning.', 'Quando eu era menino, ouvi as pessoas contarem.'],
        ],
      },
      {
        text: 'A voz passiva tira da frase quem faz a ação: -lga- ou -sxa- depois do verbo. “Sulilgal”, sendo salgado; “qakasxal”, sendo seco. Ninguém diz quem salgou: o que importa é o peixe.',
        examples: [
          ['Qas sulilgal, qakasxal, huuzuugizangis taxsazaqas ax̂takus.', 'O peixe era salgado e seco, e tudo era guardado.'],
          ['Ulam angunagan, ilan anĝaĝilgaayulax, qalgadas qulihlingiin aguĝal.', 'Uma casa grande, em que ninguém morava, construída só para a comida.'],
        ],
      },
    ],
    pitfalls: [
      'Ler “hiilax̂tazas” como “eles disseram” a alguém: é “dizem, conta-se”, e quem fala não viu.',
      'Achar que -zana- foi uma vez só: “maqax̂tazanas” é o que se fazia sempre, “costumavam fazer”.',
    ],
    quiz: [
      { question: 'O que quer dizer “hiilax̂tadas” no fim de uma frase?', options: ['dizem, conta-se', 'eu vi', 'eles vão dizer'], answer: 'dizem, conta-se', explanation: '“Hiilax̂ta-” é “ser dito”.' },
      { question: 'Em “Qas sulilgal, qakasxal…”, quem salgou o peixe?', options: ['A frase não diz: é a voz passiva.', 'O pescador.', 'O menino.'], answer: 'A frase não diz: é a voz passiva.', explanation: '-lga- e -sxa- tiram da frase quem faz a ação.' },
      { question: 'O que quer dizer “Hlax̂ akuqaang hiilax̂takus tutazaqaning”?', options: ['Quando eu era menino, ouvi as pessoas contarem.', 'O menino contou uma história.', 'Vou contar quando for velho.'], answer: 'Quando eu era menino, ouvi as pessoas contarem.', explanation: '“Tutazaqaning”: eu ouvia (tuta-, ouvir).' },
    ],
  },
];
