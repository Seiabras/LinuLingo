import type { UnitSeed } from '../types';

/**
 * Trilha do bretão: unidades do nível A1 (br-u1, br-u2) e A2 (br-u3, br-u4) — ver `incomplete` em
 * index.ts pro que ainda falta.
 *
 * Fontes: Omniglot “Breton phrases”, Wikibooks “Breton” (nível 1, lições 1–2), Wikipédia em inglês
 * “Breton language” e “Breton grammar”, Wikipédia em português “Língua bretã”, e entradas individuais
 * do Wiktionary em inglês para cada palavra (ver vocabulario.ts e extras.ts). As unidades A2 usam
 * ainda a Wikipédia em inglês “Breton grammar” (dias confirmados do latim: dimerc'her, diriaou,
 * digwener, disadorn, disul — “dilun” e “dimeurzh” não tiveram a etimologia confirmada nesta
 * pesquisa) e Omniglot “Breton kinship terms”/“Breton time expressions”.
 */
export const UNITS_BR: UnitSeed[] = [
  {
    id: 'br-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Demat ha Kenavo',
    emoji: '👋',
    card: {
      id: 'br-c1',
      title: 'A única língua celta ainda viva no continente',
      emoji: '🌍',
      history:
        'O bretão (brezhoneg) é uma língua celta do ramo britônico, parente do galês e do córnico — não do irlandês ou do gaélico escocês, que são celtas do outro ramo, o goidélico. É falado na Bretanha (Breizh), no noroeste da França, sobretudo na Baixa Bretanha (Breizh-Izel), a oeste. Foi levado para lá por migrantes vindos da Britânia (atual Grã-Bretanha) entre os séculos V e VII, fugindo de invasões — por isso o parentesco com o galês é tão próximo, mesmo a língua tendo se desenvolvido depois do outro lado do Canal da Mancha. O ensino do bretão foi proibido nas escolas da França entre 1880 e meados do século XX, com crianças punidas por falar a língua; a Lei Deixonne, de 1951, começou a reverter essa política. Mesmo assim, o número de falantes caiu de mais de um milhão nos anos 1950 para cerca de 107 mil em 2024, e a UNESCO classifica o bretão como “seriamente ameaçado” em seu Atlas das Línguas em Perigo.',
      culture_tip:
        '“Demat!” serve a qualquer hora do dia, como um “oi” genérico. Para se despedir a gente usa “Kenavo!”, e à noite dá pra trocar por “Nozvezh vat!”. “Trugarez” é o obrigado mais comum, e “mar plij” é o “por favor” que acompanha qualquer pedido, como num café: “Ur banne dour, mar plij” (um copo de água, por favor).',
      grammar_why:
        'O bretão é uma língua VSO (verbo-sujeito-objeto) por baixo da superfície, mas quase toda frase bretã começa com uma outra palavra em foco — o verbo quase nunca vem primeiro na prática. Por isso tanta frase bretã usa uma partícula “a” (ou “e”) logo depois da palavra em destaque: “Me a gomz brezhoneg” (eu falo bretão, literalmente “eu PARTÍCULA falo bretão”) ou “Deskiñ a ran brezhoneg” (estou aprendendo bretão, literalmente “aprender PARTÍCULA faço bretão”).',
      grammar_examples: [
        ['Demat! Mat an traoù?', 'Oi! Tudo bem?'],
        ['Ya, mat-tre. Ha ganit?', 'Sim, muito bem. E você?'],
        ['Me a gomz brezhoneg.', 'Eu falo bretão.'],
        ['Deskiñ a ran brezhoneg.', 'Estou aprendendo bretão.'],
      ],
      character_guide: [
        ["c'h", 'um som de fricativa surda, mais atrás na garganta que o “h” comum (parecido com o “j” espanhol ou o “ch” alemão de “Bach”)', "c'hoar (irmã), ki → ar c'hi (o cachorro)"],
        ['zh', 'representa um som que muda conforme a região: “z” na maior parte da Bretanha, “h” no dialeto vanetês — por isso a própria palavra “bretão” se escreve “brezhoneg”', 'brezhoneg (língua bretã)'],
        ['h', 'quando pronunciado, é uma aspiração leve', 'heol (sol)'],
        ['sem Q, sem X', 'o alfabeto bretão da ortografia peurunvan não usa essas duas letras', '—'],
      ],
    },
    lessons: [
      {
        id: 'br-u1-l1',
        title: 'Demat, trugarez, kenavo!',
        kind: 'licao',
        words: ['demat', 'nozvezh vat', 'kenavo', 'trugarez', 'mar plij', 'ya'],
        cloze: [
          { sentence: '___, Yannig! Mat an traoù?', answer: 'Demat', options: ['Demat', 'Kenavo', 'Trugarez'], translation: 'Oi, Yannig! Tudo bem?' },
          { sentence: '___, ha trugarez!', answer: 'Kenavo', options: ['Kenavo', 'Demat', 'Ya'], translation: 'Tchau, e obrigado!' },
          { sentence: 'Ur banne dour, ___.', answer: 'mar plij', options: ['mar plij', 'trugarez', 'ya'], translation: 'Um copo de água, por favor.' },
        ],
        voice: {
          bot: 'Demat! Mat an traoù?',
          botTranslation: 'Oi! Tudo bem?',
          expected: ['Ya, mat-tre. Ha ganit?', 'ya', 'mat-tre'],
          hint: 'Responda que vai muito bem e devolva a pergunta: “Ya, mat-tre. Ha ganit?”.',
        },
        communityPrompt: 'Escreva três expressões em bretão: um cumprimento (“Demat”), um agradecimento (“Trugarez”) e uma despedida (“Kenavo”).',
      },
      {
        id: 'br-u1-l2',
        title: 'Me, te, eñ, hi',
        kind: 'licao',
        words: ['me', 'te', 'eñ', 'hi', 'ni', 'anv'],
        cloze: [
          { sentence: '___ a gomz brezhoneg.', answer: 'Me', options: ['Me', 'Te', 'Eñ'], translation: 'Eu falo bretão.' },
          { sentence: 'Piv out ___?', answer: 'te', options: ['te', 'me', 'ni'], translation: 'Quem é você?' },
          { sentence: 'Yannig eo va ___.', answer: 'anv', options: ['anv', 'mamm', 'tad'], translation: 'Yannig é meu nome.' },
        ],
        voice: {
          bot: 'Demat! Piv out te?',
          botTranslation: 'Oi! Quem é você?',
          expected: ['Mona eo va anv.', 'eo va anv', 'mona'],
          hint: 'Diga seu nome com o modelo “[Nome] eo va anv” (“[Nome] é meu nome”).',
        },
        communityPrompt: 'Apresente-se em bretão: diga seu nome com “[Nome] eo va anv” e pergunte o nome de alguém com “Piv out te?”.',
      },
      {
        id: 'br-u1-l3',
        title: 'Test: demat ha kenavo',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Demat! Yannig eo va anv. Piv out te?',
          botTranslation: 'Oi! Meu nome é Yannig. Quem é você?',
          expected: ['Demat! Mona eo va anv.', 'demat', 'eo va anv'],
          hint: 'Devolva o cumprimento (“Demat!”) e diga seu nome com “[Nome] eo va anv”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento (“Demat”), nome (“… eo va anv”), e despedida (“Kenavo”).',
      },
    ],
  },
  {
    id: 'br-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'An ti hag ar gwin ruz',
    emoji: '🏠',
    card: {
      id: 'br-c2',
      title: 'Mutações: quando a primeira letra muda',
      emoji: '🔀',
      history:
        'Como todas as línguas celtas, o bretão tem mutações consonânticas iniciais: a primeira letra de uma palavra pode mudar de som dependendo do que vem antes dela — o artigo, um possessivo, um número. É um traço que o bretão compartilha com o galês, o córnico, o irlandês e o gaélico escocês, mas cada língua celta tem suas próprias regras de quando e como mutar. Em bretão há quatro famílias de mutação: a suave (p→b, t→d, k→g, b→v, d→z, g→c’h, m→v), a espirante (p→f, t→z, k→c’h, gw→w), a dura (b→p, d→t, g→k) e a mista. A palavra no dicionário não muda — só a forma falada e escrita na frase.',
      culture_tip:
        'Um exemplo bem concreto: “tad” (pai) vira “da dad” com “da” (seu, mutação suave: t→d) mas vira “ma zad” com “ma” (meu, mutação espirante: t→z) — dois possessivos, duas mutações diferentes para a mesma palavra!',
      grammar_why:
        'O artigo definido também pode mutar o substantivo seguinte: “taol” (mesa, feminino) vira “an daol” (a mesa), e “kador” (cadeira, feminino) vira “ar gador” (a cadeira) — ambas com mutação suave, de acordo com o gênero feminino. Já “dour” (água, masculino) fica “an dour” (a água) sem mudar nada, porque substantivos masculinos costumam não mutar depois do artigo. Mas nem toda palavra segue esse padrão: “ki” (cachorro, masculino) aparece mutado em “ar c’hi” (o cachorro) numa frase de exemplo real do dicionário — então vale aprender cada mutação aos poucos, caso a caso, em vez de confiar numa regra única e sem exceção.',
      grammar_examples: [
        ['Ma zad a zo mat.', 'Meu pai está bem.'],
        ['Mat eo da dad?', 'Seu pai está bem?'],
        ['An daol zo ruz. Ar gador zo glas.', 'A mesa é vermelha. A cadeira é azul.'],
        ["Ar c'hi zo o kousket amañ.", 'O cachorro está dormindo aqui.'],
      ],
      character_guide: [
        ['an / al / ar', 'o artigo definido: “an” antes de vogal, “d”, “n”, “t” e “h” muda; “al” antes de “l”; “ar” nos demais casos', 'an dour (a água), al logodenn (o rato), ar gador (a cadeira)'],
        ['ur / ul / un', 'o artigo indefinido “um/uma”: mesma lógica do definido', 'un aval (uma maçã)'],
      ],
    },
    lessons: [
      {
        id: 'br-u2-l1',
        title: "An ti hag ar boued",
        kind: 'licao',
        words: ['ti', 'kador', 'dour', 'bara', 'kafe', 'kig'],
        cloze: [
          { sentence: 'An ___ zo bihan.', answer: 'ti', options: ['ti', 'kador', 'dour'], translation: 'A casa é pequena.' },
          { sentence: 'Evañ a ran ___.', answer: 'kafe', options: ['kafe', 'kig', 'bara'], translation: 'Eu bebo café.' },
          { sentence: 'Debriñ a ran ___.', answer: 'kig', options: ['kig', 'bara', 'kafe'], translation: 'Eu como carne.' },
        ],
        voice: {
          bot: 'Ur banne dour pe ur banne kafe?',
          botTranslation: 'Um copo de água ou um café?',
          expected: ['Ur banne kafe, mar plij.', 'ur banne kafe', 'mar plij'],
          hint: 'Peça com “Ur banne … , mar plij” (um copo/uma xícara de …, por favor).',
        },
        communityPrompt: 'Descreva sua casa e o que você come: use “An ti zo …” e “Debriñ a ran …”.',
      },
      {
        id: 'br-u2-l2',
        title: 'Ruz, glas, gwenn, du',
        kind: 'licao',
        words: ['ruz', 'glas', 'gwenn', 'du', 'bras', 'bihan'],
        cloze: [
          { sentence: 'Gwin ___, mar plij.', answer: 'ruz', options: ['ruz', 'gwenn', 'glas'], translation: 'Vinho tinto, por favor.' },
          { sentence: '___ eo an ti.', answer: 'Bras', options: ['Bras', 'Bihan', 'Du'], translation: 'A casa é grande.' },
          { sentence: '___ eo al logodenn.', answer: 'Bihan', options: ['Bihan', 'Bras', 'Du'], translation: 'O rato é pequeno.' },
        ],
        voice: {
          bot: 'Ruz pe gwenn eo da gador?',
          botTranslation: 'Sua cadeira é vermelha ou branca?',
          expected: ["Ruz eo ma c'hador.", 'ruz', 'glas'],
          hint: 'Responda com uma cor: “Ruz eo…”, “Glas eo…” ou “Gwenn eo…”.',
        },
        communityPrompt: 'Descreva as cores de três coisas da sua casa, usando “… eo” (ruz, glas, gwenn, du).',
      },
      {
        id: 'br-u2-l3',
        title: 'Test: an ti hag ar gwin ruz',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Bras pe bihan eo da di? Ha ruz pe gwenn eo an nor?',
          botTranslation: 'Sua casa é grande ou pequena? E a porta é vermelha ou branca?',
          expected: ['Bihan eo ma zi, ha ruz eo an nor.', 'bihan', 'bras', 'ruz'],
          hint: 'Use “Bras eo…” ou “Bihan eo…” para o tamanho, e uma cor para a porta.',
        },
        communityPrompt: 'Escreva cinco frases sobre sua casa e a comida que você gosta, usando “eo”, “zo” e “a ran”.',
      },
    ],
  },
  {
    id: 'br-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Ar familh hag ar sizhun',
    emoji: '👪',
    card: {
      id: 'br-c3',
      title: 'Os dias da semana vêm do latim — como quase toda a Europa',
      emoji: '📅',
      history:
        'Mesmo sendo uma língua celta, o bretão nomeia os dias da semana a partir do mesmo calendário romano que deu nome aos dias em português, francês, italiano e espanhol: cada dia era dedicado a um astro ou a um deus romano. O Wiktionary confirma a origem latina de cinco dos sete: “dimerc’her” (quarta) vem de “dies Mercurii” (dia de Mercúrio), “diriaou” (quinta) de “dies Iovis” (dia de Júpiter), “digwener” (sexta) de “dies Veneris” (dia de Vênus), “disadorn” (sábado) de “dies Saturni” (dia de Saturno) e “disul” (domingo) de “dies Solis” (dia do Sol). Para “dilun” (segunda) e “dimeurzh” (terça) o padrão aponta para “dies Lunae” (Lua) e “dies Martis” (Marte) — o mesmo padrão dos outros cinco —, mas esta pesquisa não achou uma entrada de dicionário que confirmasse a etimologia exata desses dois, então o honesto é deixar em aberto.',
      culture_tip:
        'Para perguntar ou dizer que dia é hoje, o bretão usa a estrutura “[Dia] eo hiziv” (lit. “[Dia] é hoje”) — o nome do dia vem primeiro, em foco, como quase toda frase bretã.',
      grammar_why:
        'Esta unidade também traz a família: “breur” (irmão) e “c’hoar” (irmã) não mutam depois de “ma” (meu) porque suas letras iniciais (b, c’h) não entram na mutação espirante — só “tad” muda (“ma zad”). Já “da” (seu/tua) muda “mamm-gozh” para “da vamm-gozh” (m→v), a mesma mutação suave já vista em “tad”→“da dad”.',
      grammar_examples: [
        ['Dilun eo hiziv.', 'Hoje é segunda-feira.'],
        ["Dec'h e oan e Roazhon.", 'Ontem eu estava em Rennes.'],
        ['Piv eo da vamm-gozh?', 'Quem é sua avó?'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'br-u3-l1',
        title: 'Ar familh',
        kind: 'licao',
        words: ['breur', "c'hoar", 'mab', "merc'h", 'tad-kozh', 'mamm-gozh'],
        cloze: [
          { sentence: '___ a zo bras.', answer: 'Breur', options: ['Breur', 'Mab', 'Tad-kozh'], translation: 'O irmão é grande.' },
          { sentence: "Va ___ a zo brav.", answer: "merc'h", options: ["merc'h", 'mab', "c'hoar"], translation: 'Minha filha é bonita.' },
          { sentence: '___ a zo mat.', answer: 'Mamm-gozh', options: ['Mamm-gozh', 'Tad-kozh', 'Eontr'], translation: 'A avó é boa.' },
        ],
        voice: {
          bot: 'Piv eo da vamm-gozh?',
          botTranslation: 'Quem é sua avó?',
          expected: ['Perrine eo va mamm-gozh.', 'eo va mamm-gozh', 'mamm-gozh'],
          hint: 'Diga o nome dela com “[Nome] eo va mamm-gozh”.',
        },
        communityPrompt: 'Apresente sua família em bretão: use “breur”, “c’hoar”, “mab”, “merc’h”, “tad-kozh” ou “mamm-gozh”.',
      },
      {
        id: 'br-u3-l2',
        title: 'Hiziv, dec’h, warc’hoazh',
        kind: 'licao',
        words: ['dilun', 'disadorn', 'disul', 'hiziv', "warc'hoazh", "dec'h"],
        cloze: [
          { sentence: '___ eo hiziv.', answer: 'Dilun', options: ['Dilun', 'Disadorn', 'Disul'], translation: 'Hoje é segunda-feira.' },
          { sentence: "___ e oan e Roazhon.", answer: "Dec'h", options: ["Dec'h", 'Hiziv', "Warc'hoazh"], translation: 'Ontem eu estava em Rennes.' },
          { sentence: "___ e bin amañ.", answer: "Warc'hoazh", options: ["Warc'hoazh", "Dec'h", 'Hiziv'], translation: 'Amanhã eu estarei aqui.' },
        ],
        voice: {
          bot: 'Disul eo hiziv?',
          botTranslation: 'Hoje é domingo?',
          expected: ['Dilun eo hiziv.', 'dilun'],
          hint: 'Diga que dia é hoje de verdade: “[Dia] eo hiziv.”',
        },
        communityPrompt: 'Escreva com dias da semana: diga que dia é hoje, que dia foi ontem, e que dia será amanhã.',
      },
      {
        id: 'br-u3-l3',
        title: 'Test: ar familh hag ar sizhun',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: "Disul eo hiziv. Ha warc'hoazh?",
          botTranslation: 'Hoje é domingo. E amanhã?',
          expected: ["Dilun eo warc'hoazh.", 'dilun'],
          hint: 'Diga que dia vem depois de domingo: “Dilun eo warc’hoazh.”',
        },
        communityPrompt: 'Escreva cinco frases: apresente dois parentes (“breur”, “c’hoar”…) e diga três dias da semana em ordem.',
      },
    ],
  },
  {
    id: 'br-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'An avelioù hag ar c’homparezon',
    emoji: '🍂',
    card: {
      id: 'br-c4',
      title: 'As quatro estações e o comparativo “-oc’h”',
      emoji: '📈',
      history:
        'O bretão nomeia as quatro estações com palavras próprias do celta: “nevez-amzer” (primavera, literalmente “tempo novo”), “hañv” (verão), “diskar-amzer” (outono, literalmente “queda do tempo” — como a queda das folhas) e “goañv” (inverno). A palavra “amzer” serve tanto para “tempo” (duração) quanto para “tempo” (clima) — por isso “An amzer zo brav hiziv” quer dizer “o tempo [clima] está bom hoje”.',
      culture_tip:
        'Para comparar duas coisas, o bretão acrescenta “-oc’h” ao adjetivo (“brasoc’h”, maior) e, para o superlativo, “-añ” (“brasañ”, o maior) — mas “mat” (bom) é irregular: “gwell(oc’h)” (melhor), “gwellañ” (o melhor), como em português.',
      grammar_why:
        'Esta unidade também traz o futuro simples: “bin”/“bezin” (eu serei/estarei), “in” (eu irei) — cada verbo com raiz própria de futuro, sem um sufixo único que sirva para todos.',
      grammar_examples: [
        ['Hañv eo bremañ.', 'É verão agora.'],
        ["Warc'hoazh e bin amañ.", 'Amanhã eu estarei aqui.'],
        ['Brasoc’h eo an ti-mañ.', 'Esta casa é maior.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'br-u4-l1',
        title: 'Peder goañvezh',
        kind: 'licao',
        words: ['nevez-amzer', 'hañv', 'diskar-amzer', 'goañv', 'amzer', 'brav'],
        cloze: [
          { sentence: '___ eo bremañ.', answer: 'Hañv', options: ['Hañv', 'Goañv', 'Nevez-amzer'], translation: 'É verão agora.' },
          { sentence: 'An ___ zo brav hiziv.', answer: 'amzer', options: ['amzer', 'sizhun', 'bloaz'], translation: 'O tempo está bom hoje.' },
          { sentence: "Va merc'h a zo ___.", answer: 'brav', options: ['brav', 'bras', 'mat'], translation: 'Minha filha é bonita.' },
        ],
        voice: {
          bot: 'Hañv eo bremañ, pe goañv?',
          botTranslation: 'É verão agora, ou inverno?',
          expected: ['Hañv eo bremañ.', 'hañv', 'goañv'],
          hint: 'Responda com o nome da estação certa: “Hañv eo bremañ.” ou “Goañv eo bremañ.”',
        },
        communityPrompt: 'Escreva sobre as quatro estações e o tempo (clima) de cada uma, usando “amzer” e “brav”.',
      },
      {
        id: 'br-u4-l2',
        title: 'Niveroù ha gwelet',
        kind: 'licao',
        words: ['unnek', 'ugent', 'tregont', 'kant', 'ober', 'gwelet'],
        cloze: [
          { sentence: 'Dek, ___, daouzek.', answer: 'unnek', options: ['unnek', 'ugent', 'kant'], translation: 'Dez, onze, doze.' },
          { sentence: '___ a ran ar mor.', answer: 'Gwelet', options: ['Gwelet', 'Ober', 'Debriñ'], translation: 'Eu vejo o mar.' },
          { sentence: '___ a ran.', answer: 'Ober', options: ['Ober', 'Gwelet', 'Mont'], translation: 'Eu faço (isso).' },
        ],
        voice: {
          bot: 'Gwelet a ran ar mor. Ha te?',
          botTranslation: 'Eu vejo o mar. E você?',
          expected: ['Gwelet a ran ar mor.', 'gwelet a ran'],
          hint: 'Responda com “Gwelet a ran …” (eu vejo …) e o que você está vendo.',
        },
        communityPrompt: 'Escreva com números acima de dez (“unnek”, “ugent”, “tregont”, “kant”) e os verbos “ober” e “gwelet”.',
      },
      {
        id: 'br-u4-l3',
        title: 'Test: an avelioù hag ar c’homparezon',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: "Brasoc'h eo da di pe va zi?",
          botTranslation: 'Sua casa é maior ou a minha?',
          expected: ["Brasoc'h eo va zi.", "brasoc'h"],
          hint: 'Use o comparativo “-oc’h” (ex.: “brasoc’h”, maior) para comparar.',
        },
        communityPrompt: 'Escreva cinco frases com o futuro (“bin”, “in”) e o comparativo (“-oc’h”).',
      },
    ],
  },
];
