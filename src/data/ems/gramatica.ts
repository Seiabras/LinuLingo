import type { GrammarTopic } from '../types';

/**
 * Gramática do alutiiq, do A1.1 ao A2.2. O A2 (17/10/2026) segue [KALT], o “Kodiak Alutiiq Language
 * Textbook” (Sun’aq Tribe of Kodiak e Alutiiq Museum, 2023), e [FRASES], o “Kodiak Alutiiq Conversational
 * Phrasebook” (Alutiiq Museum, 2006), com a página impressa de cada tabela e frase; o “R” russo dos
 * livros vira “ʀ”. Fontes do A1: [WIKT] (os exemplos dos
 * verbetes “asirluni”, “maqarluni”, “pat’snarluni”, “qenaluni”, “sakaarlluni”, “ca”, “angli”, e o
 * verbete iúpique “-qaa”, a partícula das perguntas de sim ou não); [WIKI] «Alutiiq language» (o
 * alfabeto e a tabela dos números e dos meses nos dois dialetos). Todos os exemplos são frases das
 * fontes, com a tradução delas.
 */
export const GRAMMAR_EMS: GrammarTopic[] = [
  {
    id: 'ems-g1',
    level: 'A1.1',
    title: 'Como está: os verbos em -luni',
    emoji: '😊',
    summary: 'Os verbos que dizem como alguém ou algo está aparecem com -luni: asirluni, qenaluni, sakaarlluni.',
    sections: [
      {
        text: 'O alutiiq não tem adjetivos como o português: para dizer que alguém está bem, doente ou cansado, usa verbos. No dicionário, eles aparecem com o final -luni, e nas frases essa mesma forma diz como a pessoa estava.',
        table: {
          head: ['Verbo', 'Sentido'],
          rows: [
            ['asirluni', 'estar bem'],
            ['qenaluni', 'estar doente'],
            ['sakaarlluni', 'estar cansado'],
          ],
        },
        examples: [
          ['Taata Paluwigmek tekitellria asirluni?', 'O papai estava bem quando voltou de Port Graham?'],
          ['Litnaurwigmen agellrianga sakaarlluni unuaka’arpak.', 'Eu estava cansado quando saí para a escola hoje cedo.'],
        ],
      },
    ],
    pitfalls: ['Procurar um adjetivo para “doente”: em alutiiq é um verbo, “qenaluni”.'],
    quiz: [
      { question: 'O que quer dizer “sakaarlluni”?', options: ['estar cansado', 'estar quente', 'estar bem'], answer: 'estar cansado', explanation: '“Sakaarlluni” é estar cansado, exausto.' },
    ],
  },
  {
    id: 'ems-g2',
    level: 'A1.1',
    title: 'Perguntas de sim ou não: -qaa',
    emoji: '❓',
    summary: 'A partícula -qaa, colada à primeira palavra, faz uma pergunta de sim ou não.',
    sections: [
      {
        text: 'Como no iúpique central, o alutiiq faz perguntas de sim ou não colando -qaa à primeira palavra da frase. E para dizer que não sabe a resposta, basta “Ca”.',
        examples: [
          ['Picinek-qaa una uswiillraraaq englumen taillria qenaluni?', 'Aquela criança chegou mesmo em casa doente?'],
          ['Cacaq ang’aqurtau’u? — Ca.', 'O que ela está carregando? — Não sei.'],
        ],
      },
    ],
    pitfalls: ['Pôr -qaa no fim da frase: ela vai colada à primeira palavra, “Picinek-qaa …”.'],
    quiz: [
      { question: 'Como se diz “não sei”?', options: ['Ca', 'Canaituq', 'Cama’i'], answer: 'Ca', explanation: '“Ca” é “não sei”; “Canaituq”, “de nada”; “Cama’i”, “olá”.' },
    ],
  },
  {
    id: 'ems-g3',
    level: 'A1.2',
    title: 'O tempo e o lugar: -mi',
    emoji: '🌤️',
    summary: 'Para dizer onde, o lugar leva -mi: Sun’ami, em Kodiak.',
    sections: [
      {
        text: 'Nas frases sobre o tempo, o lugar vem primeiro, com o final -mi (em): “Sun’ami”, em Kodiak; “Aluuwimi”, na península do Alasca. Depois vêm a hora do dia e como está o tempo.',
        examples: [
          ['Sun’ami enerpak pat’snarluni macartuq.', 'Hoje de manhã está frio, mas faz sol em Kodiak.'],
          ['Aluuwimi unuarpak maqarluni macartuq.', 'Hoje de manhã está quente e faz sol na península do Alasca.'],
        ],
      },
    ],
    pitfalls: ['Trocar “maqarluni” (quente) por “pat’snarluni” (frio).'],
    quiz: [
      { question: 'O que quer dizer “Sun’ami”?', options: ['em Kodiak', 'o sol', 'hoje de manhã'], answer: 'em Kodiak', explanation: '-mi é “em”.' },
    ],
  },
  {
    id: 'ems-g4',
    level: 'A1.2',
    title: 'Os números e os dois dialetos',
    emoji: '🔢',
    summary: 'Os números do koniag e do chugach: quase iguais, com algumas formas próprias.',
    sections: [
      {
        text: 'Os números do alutiiq são parentes dos do iúpique central (“pingayun”, “talliman”). O koniag, de Kodiak, e o chugach, da península Kenai, contam quase igual, mas mudam alguns números — em Chenega, dois é “atel’ek”.',
        table: {
          head: ['Número', 'Koniag', 'Chugach'],
          rows: [
            ['1', 'allringuq', 'allringuq, all’inguq'],
            ['2', 'mal’uk', 'malruk, mall’uk, atel’ek'],
            ['3', 'pingayun', 'pingayun, pinga’an'],
            ['4', 'staaman', 'staaman'],
            ['5', 'talliman', 'talliman'],
            ['7', 'mallrungin', 'mallruungin, maquungwin'],
            ['10', 'qulen', 'qulen'],
          ],
        },
        examples: [['Talliman.', 'Cinco.']],
      },
    ],
    pitfalls: ['Achar que cada dialeto tem números próprios: quatro, cinco e dez são iguais nos dois.'],
    quiz: [
      { question: 'Como se diz “cinco” em alutiiq?', options: ['talliman', 'staaman', 'qulen'], answer: 'talliman', explanation: '“Talliman” é cinco nos dois dialetos.' },
    ],
  },
  // ══ A2.1 e A2.2 (17/10/2026): paradigmas e frases de [KALT] e [FRASES], página impressa ══
  {
    id: 'ems-g5',
    level: 'A2.1',
    title: 'Eu, você, ele: o final do verbo',
    emoji: '🙋',
    summary: 'O final do verbo diz quem faz e quantos são: asirtua (eu estou bem), asirtuten (você), asirtuq (ele, ela).',
    sections: [
      {
        // KALT p. 56 (tabelas 13 e 14; o “-nga” é opcional e quase todos o deixam cair)
        heading: 'O presente: -tua, -tuten, -tuq',
        text: 'Segundo o livro de Kodiak, todo verbo leva um final que diz a pessoa (eu, você, ele) e o número (um, dois, três ou mais). No presente, todos começam com -tu- (ou só -u-, depois de algumas raízes). O “-nga” de “asirtuanga” é opcional: a maioria diz só “asirtua”.',
        table: {
          head: ['Pessoa', 'Um', 'Dois', 'Três ou mais'],
          rows: [
            ['eu / nós', 'asirtua(nga)', 'asirtukuk', 'asirtukut'],
            ['você / vocês', 'asirtuten', 'asirtutek', 'asirtuci'],
            ['ele, ela / eles', 'asirtuq', 'asirtuk', 'asirtut'],
          ],
        },
        examples: [
          ['Qiagua. Qia’uten. Qia’uq.', 'Eu estou chorando. Você está chorando. Ele está chorando.'],
          ['Asirtukut.', 'Nós (três ou mais) estamos bem.'],
        ],
      },
      {
        // KALT p. 32–33 (q, k, t; wiinaq, wiinak, wiinat), p. 35 (nukallpiaq ner’uq …), p. 56 (× Piugta asirtut)
        heading: 'Um, dois, três ou mais',
        text: 'O alutiiq conta em três: um, dois e três ou mais. O nome termina em -q para um, -k para dois e -t para três ou mais, e o verbo acompanha. “Piugta asirtut” está errado: o cachorro é um só, e “asirtut” é para três ou mais.',
        table: {
          head: ['Alutiiq', 'Português'],
          rows: [
            ['Nukallpiaq ner’uq.', 'O homem está comendo.'],
            ['Nukallpiak ner’uk.', 'Os dois homens estão comendo.'],
            ['Nukallpiat ner’ut.', 'Os homens estão comendo.'],
          ],
        },
      },
      {
        // KALT p. 48 (gui, ellpet, elliin; os pronomes quase não se usam, só para ênfase), p. 86 (tabela 28)
        heading: 'Gui, ellpet: os pronomes',
        text: 'Como o verbo já diz quem faz, os pronomes quase não aparecem: servem para dar ênfase ou apresentar alguém. “Elliin” (ele, ela) só se usa para quem já está na conversa.',
        table: {
          head: ['Pessoa', 'Um', 'Dois', 'Três ou mais'],
          rows: [
            ['1ª', 'gui', 'guangkunuk', 'guangkuta'],
            ['2ª', 'ellpet', 'ellpetek', 'ellpeci'],
            ['3ª', 'elliin', 'ellaigta', 'ellaita'],
          ],
        },
        examples: [
          ['Gui silugtua.', 'Eu estou feliz.'],
          ['Ellpet kumegtuten.', 'Você está com raiva.'],
        ],
      },
      {
        // KALT p. 53 (os sentimentos, resposta a “Asirtuten-qaa?”); FRASES p. 7 (kumegtuq × qumigtuq)
        heading: 'Como você está?',
        text: 'A pergunta “Asirtuten-qaa?” (você está bem?) pede um destes verbos, com o final do “eu”.',
        table: {
          head: ['Alutiiq', 'Português'],
          rows: [
            ['Asirtua.', 'Estou bem.'],
            ['Asiitua.', 'Não estou bem.'],
            ['Silugtua.', 'Estou feliz.'],
            ['Imasuugtua.', 'Estou triste.'],
            ['Alingua.', 'Estou com medo.'],
            ['Sakaartua.', 'Estou cansado.'],
          ],
        },
      },
    ],
    pitfalls: [
      'Usar “asirtut” para uma pessoa só: o final de três ou mais é -t; para um é -q (o livro de Kodiak marca “Piugta asirtut” como errado).',
      'Confundir “kumegtua” (estou com raiva) com “qumigtuq” (está grávida): o guia de conversação conta que uma aprendiz quis dizer que estava grávida e disse que estava brava.',
    ],
    quiz: [
      {
        question: 'Como se diz “você está bem”?',
        options: ['Asirtuten.', 'Asirtua.', 'Asirtuq.'],
        answer: 'Asirtuten.',
        explanation: '-tuten é o final de “você”; -tua é “eu”, e -tuq, “ele, ela”.',
      },
      {
        question: 'O que quer dizer “Nukallpiak ner’uk”?',
        options: ['Os dois homens estão comendo.', 'O homem está comendo.', 'Os homens (três ou mais) estão comendo.'],
        answer: 'Os dois homens estão comendo.',
        explanation: 'O -k no nome e no verbo marca dois.',
      },
    ],
  },
  {
    id: 'ems-g6',
    level: 'A2.1',
    title: 'Onde, para onde, de onde: -mi, -men, -mek',
    emoji: '🧭',
    summary: 'O lugar ganha um final: -mi (em), -men (para), -mek (de). Daí vêm nani? natmen? naken?',
    sections: [
      {
        // KALT p. 90 (tabela 31), p. 91–93 (Sun’ami, Sun’amen, Sun’amek)
        heading: 'Três finais para o lugar',
        text: 'O livro de Kodiak chama esses finais de casos oblíquos. Os três mais usados dizem onde a coisa está, para onde vai e de onde vem. Para dois e para três ou mais, os finais mudam: -gni, -gnun, -gnek (dois) e -ni, -nun, -nek (três ou mais).',
        table: {
          head: ['Final', 'Sentido', 'Sun’aq (Kodiak)', 'nuna (aldeia)'],
          rows: [
            ['-mi', 'em', 'Sun’ami', 'nunami'],
            ['-men', 'para', 'Sun’amen', 'nunamen'],
            ['-mek', 'de', 'Sun’amek', 'nunamek'],
          ],
        },
      },
      {
        // KALT p. 91 (Nani et’cit?), p. 92 (Natmen ag’it?), p. 94 (Naken taima’it?); p. 61 (Qutmen agciqua)
        heading: 'Nani? Natmen? Naken?',
        text: 'As perguntas de lugar seguem os mesmos finais: “nani?” (onde?), “natmen?” (para onde?) e “naken?” (de onde?).',
        table: {
          head: ['Alutiiq', 'Português'],
          rows: [
            ['Nani et’cit?', 'Onde você está?'],
            ['Natmen ag’it?', 'Para onde você vai?'],
            ['Naken taima’it?', 'De onde você é?'],
            ['Qutmen agciqua.', 'Vou para a praia.'],
          ],
        },
      },
      {
        // KALT p. 94 (Tengausqakun agciqukut; Natgun ag’it?), p. 95 (Alutiit’stun, “como um alutiiq”)
        heading: 'Por onde e “como”',
        text: 'Há ainda o -kun ou -gun, “por, pelo”, que diz o caminho e o meio de transporte, e o -t’stun, “como”. É dele que vem o nome da língua: “Alutiit’stun” é “como um alutiiq”, e “Sugt’stun”, “como uma pessoa”.',
        examples: [
          ['Tengausqakun agciqukut.', 'Vamos de avião.'],
          ['Arhnat’stun kuimartuq.', 'Ela nada como uma lontra-marinha.'],
        ],
      },
    ],
    pitfalls: [
      'Trocar -men e -mek: “Sun’amen” é “para Kodiak”, e “Sun’amek”, “de Kodiak”.',
      'Esquecer que alguns nomes guardam o g da raiz: “iqalluk” (peixe) vira “iqallugmen” (para o peixe), e “kuik” (rio), “kuigmen”.',
    ],
    quiz: [
      {
        question: 'Como se diz “em Kodiak”?',
        options: ['Sun’ami', 'Sun’amen', 'Sun’amek'],
        answer: 'Sun’ami',
        explanation: '-mi é “em”; -men, “para”; -mek, “de”.',
      },
      {
        question: 'O que quer dizer “Natmen ag’it?”',
        options: ['Para onde você vai?', 'Onde você está?', 'De onde você é?'],
        answer: 'Para onde você vai?',
        explanation: '“Natmen” leva o -men de “para”.',
      },
    ],
  },
  {
    id: 'ems-g7',
    level: 'A2.2',
    title: 'Meu, teu, dele: o dono no fim da palavra',
    emoji: '👪',
    summary: 'O dono é um final: emaaqa (minha avó), yaaman (tua pedra), yaamaa (a pedra dele).',
    sections: [
      {
        // KALT p. 115 (tabela 34 e os exemplos com yaamaq)
        heading: 'Um dono',
        text: 'No livro de Kodiak, o final muda conforme o dono (eu, você, ele) e conforme quantas coisas ele tem (uma, duas, três ou mais).',
        table: {
          head: ['Dono', 'Uma pedra', 'Duas pedras', 'Três ou mais'],
          rows: [
            ['meu', 'yaamaqa', 'yaamagka', 'yaamanka'],
            ['teu', 'yaaman', 'yaamagken', 'yaamaten'],
            ['dele, dela', 'yaamaa', 'yaamak', 'yaamai'],
          ],
        },
      },
      {
        // KALT p. 118 (Family Terms, com a forma “meu”), p. 74 (Emaaqa Sally); FRASES p. 4 (maama, taata: as
        // formas de chamar), p. 5 (Mal’ugnek alqanq’rtua; Atra Sam)
        heading: 'A família',
        text: 'A família quase sempre vem com o dono. “Maama” e “taata” são as formas de chamar (mamãe! papai!); com o dono, ficam “maamaqa” (minha mãe) e “taataqa” (meu pai).',
        table: {
          head: ['Parente', 'Meu, minha'],
          rows: [
            ['maama (mãe)', 'maamaqa'],
            ['taata (pai)', 'taataqa'],
            ['emaa (avó)', 'emaaqa'],
            ['apaa (avô)', 'apaaqa'],
            ['uyuwaq (irmão ou irmã mais novo)', 'uyuwaqa'],
            ['paniyaq (filha)', 'paniyaqa'],
            ['awaqutaq (filho)', 'awaqutaqa'],
          ],
        },
        examples: [
          ['Emaaqa Sally.', 'Minha avó é Sally.'],
          ['Atra Sam.', 'O nome dele é Sam.'],
        ],
      },
      {
        // KALT p. 116 (tabelas 35 e 36: englurpuk, englurpet, englurci, engluat)
        heading: 'Dois ou mais donos',
        text: 'Com dois ou mais donos, o final muda de novo. Com a casa, “engluq”:',
        table: {
          head: ['Dono', 'Uma casa'],
          rows: [
            ['de nós dois', 'englurpuk'],
            ['de nós (três ou mais)', 'englurpet'],
            ['de vocês (três ou mais)', 'englurci'],
            ['deles (três ou mais)', 'engluat'],
          ],
        },
      },
    ],
    pitfalls: [
      'Dizer “maama” para “minha mãe”: “maama” é chamar (“mamãe!”); “minha mãe” é “maamaqa”.',
      'Confundir “yaamak” (as duas pedras dele) com “yaamagka” (as minhas duas pedras).',
    ],
    quiz: [
      {
        question: 'Como se diz “minha avó”?',
        options: ['emaaqa', 'emaa', 'emaan'],
        answer: 'emaaqa',
        explanation: 'O final -qa é “meu, minha”.',
      },
      {
        question: 'O que quer dizer “yaaman”?',
        options: ['a tua pedra', 'a minha pedra', 'a pedra dele'],
        answer: 'a tua pedra',
        explanation: '-n é “teu”; “yaamaqa” é “minha pedra”, e “yaamaa”, “a pedra dele”.',
      },
    ],
  },
  {
    id: 'ems-g8',
    level: 'A2.2',
    title: 'Ontem, hoje, amanhã: o passado e o futuro',
    emoji: '⏳',
    summary: 'O passado tem final próprio (-llria); o futuro usa -ciq- com os finais do presente.',
    sections: [
      {
        // KALT p. 145 (tabela 50 e Atullrianga …); FRASES p. iv–v (-llria no norte, -ll’ia no sul), p. 5
        // (Sun’ami sullrianga), p. 11 (Iqallugsullriakut)
        heading: 'O passado: -llri-',
        text: 'Segundo o livro de Kodiak, o alutiiq só tem dois tempos: o passado e o não passado. O passado tem um marcador próprio, -llri-. No sul de Kodiak, muitos dizem -ll’i-: “sull’ia” no lugar de “sullria” (nasceu).',
        table: {
          head: ['Pessoa', 'Um', 'Dois', 'Três ou mais'],
          rows: [
            ['eu / nós', 'atullrianga', 'atullriakuk', 'atullriakut'],
            ['você / vocês', 'atullriaten', 'atullriatek', 'atullriaci'],
            ['ele, ela / eles', 'atullria', 'atullriik', 'atullriit'],
          ],
        },
        examples: [
          ['Sun’ami sullrianga.', 'Eu nasci em Kodiak.'],
          ['Iqallugsullriakut.', 'Nós fomos pescar.'],
        ],
      },
      {
        // KALT p. 144 (+ciqe-, +ningaite-; ~kutar-, “ir”, “estar para”)
        heading: 'O futuro: -ciq-',
        text: 'O presente e o futuro usam os mesmos finais. Para o futuro, entra -ciq- antes do final; para “não vai”, -ningait-.',
        table: {
          head: ['Alutiiq', 'Português'],
          rows: [
            ['Aturtua.', 'Estou cantando.'],
            ['Aturciqua.', 'Vou cantar.'],
            ['Aturningaitua.', 'Não vou cantar.'],
            ['Atuqutartuq.', 'Ele está para cantar.'],
          ],
        },
      },
      {
        // KALT p. 146 (palavras do tempo; +(r)pak, -nra, ~ku), p. 147 (frases)
        heading: 'Palavras do tempo',
        text: 'As palavras do tempo ganham finais: -pak é “este, hoje”, -ku é “o próximo”, e -nra é “todo”.',
        table: {
          head: ['Palavra', '-pak', '-ku', '-nra'],
          rows: [
            ['unuk (noite)', 'unugpak (hoje à noite)', 'unuku (mais tarde, à noite)', 'ununra (toda noite)'],
            ['uksuq (inverno)', 'uksurpak (este inverno)', 'uksuqu (o próximo inverno)', 'uksunra (todo inverno)'],
          ],
        },
        examples: [
          ['Unuami nerellrianga.', 'Eu comi hoje de manhã.'],
          ['Unuanra kuufiarturtaartua.', 'Eu tomo café toda manhã.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar um final de futuro: o futuro é o presente com -ciq- no meio (“aturciqua”, vou cantar).',
      'Usar o passado para o que acabou de acontecer: o livro explica que, para o que aconteceu agora mesmo, fica o presente (“aturtua” pode ser “cantei agora”).',
    ],
    quiz: [
      {
        question: 'Como se diz “eu cantava”?',
        options: ['atullrianga', 'aturciqua', 'aturtua'],
        answer: 'atullrianga',
        explanation: '-llri- marca o passado; -ciq-, o futuro.',
      },
      {
        question: 'O que quer dizer “Unugmi qawarciqua”?',
        options: ['Vou dormir hoje à noite.', 'Dormi ontem à noite.', 'Durmo toda noite.'],
        answer: 'Vou dormir hoje à noite.',
        explanation: '“Unugmi” é “à noite”, e -ciq- marca o futuro.',
      },
    ],
  },
];
