import type { StorySeed } from '../types';

/** Histórias interativas em letão (lv-h1 … lv-h15): 3 por subnível, de A1.1 a B1.1, cada uma num lugar diferente. */
export const STORIES: StorySeed[] = [
  // ───────────────────────── A1.1 ─────────────────────────
  {
    id: 'lv-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Zivis Centrāltirgū',
    emoji: '🐟',
    summary: 'No Mercado Central de Riga, o Linu conhece a Laima, a vendedora de peixe, e aprende a contar em letão.',
    cultural_context:
      'O Mercado Central de Riga (Centrāltirgus), aberto em 1930, funciona em grandes pavilhões feitos com a estrutura de hangares de zepelins alemães da Primeira Guerra Mundial. Ele faz parte do centro histórico de Riga, Patrimônio Mundial da UNESCO.',
    start: 'start',
    glossary: [
      ['Labdien! / Uz redzēšanos!', 'Bom dia! (ou boa tarde) / Até logo!'],
      ['Es esmu… / Kas tu esi?', 'Eu sou… / Quem é você? (o verbo “būt”: es esmu, tu esi, viņš ir)'],
      ['izsalcis', 'com fome, faminto (o “c” se lê “ts”)'],
      ['zivs — divas zivis', 'peixe — dois peixes (“zivs” é feminina, por isso “divas”, e não “divi”)'],
      ['lūdzu / paldies', 'por favor / obrigado'],
      ['trīs, seši, divdesmit', 'três, seis, vinte (o macron de “trīs” deixa o “i” longo)'],
      ['tirgus', 'mercado (tônica na 1ª sílaba: TIR-gus)'],
    ],
    nodes: {
      start: {
        emoji: '🏛️',
        text: 'Rīga, Centrāltirgus. Tirgus ir liels. Linu ir izsalcis.',
        translation: 'Riga, o Mercado Central. O mercado é grande. O Linu está com fome.',
        choices: [
          { text: 'Linu iet pie zivīm.', translation: 'O Linu vai até os peixes.', next: 'zivis' },
          { text: 'Linu skatās uz paviljoniem.', translation: 'O Linu olha os pavilhões.', next: 'paviljoni' },
        ],
      },
      paviljoni: {
        emoji: '🏗️',
        text: 'Paviljoni ir lieli un veci.',
        translation: 'Os pavilhões são grandes e velhos.',
        choices: [{ text: '“Tagad — zivis!”', translation: '“Agora: peixes!”', next: 'zivis' }],
      },
      zivis: {
        emoji: '👩',
        text: '“Labdien! Es esmu Laima. Kas tu esi?”',
        translation: '“Bom dia! Eu sou a Laima. Quem é você?”',
        choices: [
          { text: '“Labdien! Es esmu Linu.”', translation: '“Bom dia! Eu sou o Linu.”', next: 'izsalcis' },
          {
            text: '“Uz redzēšanos, Laima!”',
            translation: '“Até logo, Laima!”',
            wrong: 'A Laima disse “Labdien!” (bom dia) e perguntou “Kas tu esi?” (quem é você?). “Uz redzēšanos” é despedida: o Linu nem se apresentou ainda! Responda “Es esmu Linu”.',
          },
        ],
      },
      izsalcis: {
        emoji: '🐧',
        text: '“Tu esi pingvīns! Tu esi izsalcis?”',
        translation: '“Você é um pinguim! Está com fome?”',
        choices: [
          { text: '“Jā, es esmu ļoti izsalcis!”', translation: '“Sim, estou com muita fome!”', next: 'cena' },
          {
            text: '“Nē, es neesmu izsalcis.”',
            translation: '“Não, não estou com fome.”',
            wrong: 'A história começou com “Linu ir izsalcis”: o Linu ESTÁ com fome! “Izsalcis” quer dizer “faminto”.',
          },
        ],
      },
      cena: {
        emoji: '🐟',
        text: '“Šeit ir zivis. Viena zivs — trīs eiro.”',
        translation: '“Aqui estão os peixes. Um peixe: três euros.”',
        choices: [
          { text: '“Divas zivis, lūdzu!”', translation: '“Dois peixes, por favor!”', next: 'divas' },
          { text: '“Divdesmit zivis, lūdzu!”', translation: '“Vinte peixes, por favor!”', next: 'final_daudz' },
        ],
      },
      divas: {
        emoji: '💶',
        text: '“Divas zivis — seši eiro. Paldies!”',
        translation: '“Dois peixes: seis euros. Obrigada!”',
        choices: [{ text: 'Linu dod vienu zivi Laimai.', translation: 'O Linu dá um peixe para a Laima.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Laima smejas: “Paldies, Linu! Tu esi labs draugs.”',
        translation: 'A Laima ri: “Obrigada, Linu! Você é um bom amigo.”',
        ending: { tone: 'bom', title: 'Amigo no mercado', message: 'O Linu comprou dois peixes, dividiu um com a Laima e ganhou uma amiga em Riga.' },
      },
      final_daudz: {
        emoji: '😅',
        text: '“Divdesmit zivis? Tas ir sešdesmit eiro!” Tas ir par daudz!',
        translation: '“Vinte peixes? São sessenta euros!” É demais!',
        ending: { tone: 'neutro', title: 'Peixe demais', message: 'Vinte peixes (“divdesmit zivis”) a três euros custam sessenta! Tente de novo com “divas zivis” (dois peixes).' },
      },
    },
  },
  {
    id: 'lv-h2',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Auksta jūra Jūrmalā',
    emoji: '🏖️',
    summary: 'Na praia de Jūrmala, o Linu conhece o Kārlis e mostra que um pinguim não tem medo de mar gelado.',
    cultural_context:
      'Jūrmala quer dizer literalmente “beira-mar” (jūra, mar + mala, beira): é uma cidade de praia perto de Riga, com uma longa faixa de areia branca, dunas, pinheiros e casas de madeira do século XIX e do começo do XX. Mesmo no verão, a água do golfo de Riga costuma ser fria.',
    start: 'start',
    glossary: [
      ['Sveiki!', 'Oi! (e também “tchau”, em conversa informal)'],
      ['Es esmu… / Un tu?', 'Eu sou… / E você?'],
      ['jūra', 'mar (o “ū” é longo: JUU-ra)'],
      ['auksts / auksta', 'frio / fria (masculino / feminino)'],
      ['ļoti', 'muito (o “ļ” é palatal, como o “lh” de “olho”)'],
      ['septiņpadsmit, divdesmit', 'dezessete, vinte (“-padsmit” forma os números de 11 a 19)'],
      ['saldējums', 'sorvete'],
    ],
    nodes: {
      start: {
        emoji: '☀️',
        text: 'Jūrmala. Smiltis ir baltas. Saule spīd.',
        translation: 'Jūrmala. A areia é branca. O sol brilha.',
        choices: [
          { text: 'Linu iet uz jūru.', translation: 'O Linu vai para o mar.', next: 'juru' },
          { text: 'Linu skatās uz kāpām.', translation: 'O Linu olha as dunas.', next: 'kapas' },
        ],
      },
      kapas: {
        emoji: '🌲',
        text: 'Kāpas ir augstas. Priedes ir zaļas.',
        translation: 'As dunas são altas. Os pinheiros são verdes.',
        choices: [{ text: '“Tagad — jūra!”', translation: '“Agora: o mar!”', next: 'juru' }],
      },
      juru: {
        emoji: '👦',
        text: '“Sveiki! Es esmu Kārlis. Un tu?”',
        translation: '“Oi! Eu sou o Kārlis. E você?”',
        choices: [
          { text: '“Sveiki! Es esmu Linu. Es esmu pingvīns.”', translation: '“Oi! Eu sou o Linu. Eu sou um pinguim.”', next: 'auksta' },
          {
            text: '“Paldies! Uz redzēšanos!”',
            translation: '“Obrigado! Até logo!”',
            wrong: 'O Kārlis disse “Sveiki!” (oi) e perguntou “Un tu?” (e você?). Ele quer saber quem é o Linu: responda “Es esmu Linu”.',
          },
        ],
      },
      auksta: {
        emoji: '🥶',
        text: '“Jūra ir ļoti auksta! Tikai septiņpadsmit grādi.”',
        translation: '“O mar está muito frio! Só dezessete graus.”',
        choices: [
          { text: '“Tas ir labi! Es esmu pingvīns!”', translation: '“Isso é bom! Eu sou um pinguim!”', next: 'peld' },
          {
            text: '“Jā, jūra ir karsta!”',
            translation: '“Sim, o mar está quente!”',
            wrong: 'O Kārlis disse “ļoti auksta”: muito FRIA! E só dezessete graus (“septiņpadsmit”). “Karsta” quer dizer “quente”, o contrário.',
          },
        ],
      },
      peld: {
        emoji: '🌊',
        text: 'Linu peld. Kārlis skaita: “Viens, divi, trīs… desmit!”',
        translation: 'O Linu nada. O Kārlis conta: “Um, dois, três… dez!”',
        choices: [
          { text: 'Linu nāk ārā.', translation: 'O Linu sai da água.', next: 'final_bom' },
          { text: 'Linu peld tālu, tālu.', translation: 'O Linu nada longe, bem longe.', next: 'final_talu' },
        ],
      },
      final_bom: {
        emoji: '🍦',
        text: '“Tu esi ātrs! Saldējums?” “Jā, paldies!”',
        translation: '“Você é rápido! Um sorvete?” “Sim, obrigado!”',
        ending: { tone: 'bom', title: 'Amigo de praia', message: 'O Linu mostrou que pinguim não tem medo de água fria e ganhou um sorvete em Jūrmala.' },
      },
      final_talu: {
        emoji: '😟',
        text: 'Kārlis skaita: “Divdesmit… Linu? Kur tu esi?”',
        translation: 'O Kārlis conta: “Vinte… Linu? Onde você está?”',
        ending: { tone: 'neutro', title: 'Longe demais', message: 'O Linu nadou tão longe que o Kārlis o perdeu de vista. No mar, fique perto dos amigos!' },
      },
    },
  },
  {
    id: 'lv-h3',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Putni Kolkasragā',
    emoji: '🐦',
    summary: 'No cabo Kolka, onde dois mares se encontram, o Linu conhece a Rūta e conta pássaros com ela.',
    cultural_context:
      'O cabo Kolka (Kolkasrags), na ponta norte da Curlândia, separa o golfo de Riga do mar Báltico aberto; na primavera e no outono, é um dos grandes pontos de passagem de aves migratórias da Europa. Perto dele começa a Costa Livônia (Līvõd rānda), terra dos livônios, um povo de língua fínica.',
    start: 'start',
    glossary: [
      ['Labvakar!', 'Boa noite! (ao chegar; tônica na 1ª sílaba: LAB-va-kar)'],
      ['putns', 'pássaro, ave'],
      ['vējš', 'vento (o “ē” é longo)'],
      ['desmit, vienpadsmit, divpadsmit', 'dez, onze, doze'],
      ['Skaties!', 'Olha!'],
      ['jūra, divas jūras', 'mar, dois mares'],
      ['skaisti', 'que lindo, é bonito'],
    ],
    nodes: {
      start: {
        emoji: '🌬️',
        text: 'Kolkasrags. Šeit ir vējš. Šeit ir divas jūras.',
        translation: 'O cabo Kolka. Aqui venta. Aqui há dois mares.',
        choices: [
          { text: 'Linu iet uz ragu.', translation: 'O Linu vai até a ponta do cabo.', next: 'rags' },
          { text: 'Linu iet uz mežu.', translation: 'O Linu vai para a floresta.', next: 'mezs' },
        ],
      },
      mezs: {
        emoji: '🌲',
        text: 'Mežs ir tumšs un kluss.',
        translation: 'A floresta é escura e silenciosa.',
        choices: [{ text: '“Tagad — jūra!”', translation: '“Agora: o mar!”', next: 'rags' }],
      },
      rags: {
        emoji: '👩',
        text: '“Labvakar! Es esmu Rūta. Tu esi putns?”',
        translation: '“Boa noite! Eu sou a Rūta. Você é um pássaro?”',
        choices: [
          { text: '“Jā! Es esmu pingvīns. Es esmu Linu.”', translation: '“Sim! Eu sou um pinguim. Eu sou o Linu.”', next: 'putni' },
          {
            text: '“Nē, es esmu zivs.”',
            translation: '“Não, eu sou um peixe.”',
            wrong: 'A Rūta perguntou “Tu esi putns?” (você é um pássaro?). O pinguim É uma ave! “Zivs” quer dizer “peixe”.',
          },
        ],
      },
      putni: {
        emoji: '🐦',
        text: 'Rūta skaita putnus: “Desmit, vienpadsmit, divpadsmit!”',
        translation: 'A Rūta conta os pássaros: “Dez, onze, doze!”',
        choices: [
          { text: '“Divpadsmit putni! Tas ir daudz!”', translation: '“Doze pássaros! É bastante!”', next: 'juras' },
          {
            text: '“Divi putni? Tas ir maz.”',
            translation: '“Dois pássaros? É pouco.”',
            wrong: 'A Rūta contou até “divpadsmit”: doze, e não dois (“divi”). Em letão, “-padsmit” forma os números de 11 a 19.',
          },
        ],
      },
      juras: {
        emoji: '🌊',
        text: 'Šeit satiekas divas jūras: Rīgas jūras līcis un Baltijas jūra.',
        translation: 'Aqui se encontram dois mares: o golfo de Riga e o mar Báltico.',
        choices: [
          { text: '“Te ir skaisti!”', translation: '“Aqui é lindo!”', next: 'final_bom' },
          { text: 'Linu lec ūdenī.', translation: 'O Linu pula na água.', next: 'final_straume' },
        ],
      },
      final_bom: {
        emoji: '🌅',
        text: 'Saule riet. Linu un Rūta ir laimīgi.',
        translation: 'O sol se põe. O Linu e a Rūta estão felizes.',
        ending: { tone: 'bom', title: 'Pôr do sol no cabo', message: 'O Linu contou pássaros com a Rūta e viu o sol se pôr entre dois mares.' },
      },
      final_straume: {
        emoji: '😨',
        text: 'Ūdens ir auksts, un straume ir stipra! Rūta sauc: “Linu, nāc ārā!”',
        translation: 'A água é fria, e a correnteza é forte! A Rūta chama: “Linu, sai daí!”',
        ending: { tone: 'neutro', title: 'Correnteza forte', message: 'Na ponta do cabo Kolka as correntes costumam ser fortes, e nadar ali é perigoso. Melhor admirar os dois mares da areia!' },
      },
    },
  },
  // ───────────────────────── A1.2 ─────────────────────────
  {
    id: 'lv-h4',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Karte Vecrīgā',
    emoji: '🗺️',
    summary: 'Perdido nas ruelas da Cidade Velha de Riga, o Linu procura a catedral com a ajuda do guia Māris.',
    cultural_context:
      'A Catedral de Riga (Rīgas Doms), começada em 1211, é a maior igreja medieval dos países bálticos, e o seu grande órgão do século XIX é famoso pelos concertos. A Cidade Velha de Riga (Vecrīga) é Patrimônio Mundial da UNESCO desde 1997.',
    start: 'start',
    glossary: [
      ['man ir / man nav (+ genitivo)', 'eu tenho / eu não tenho: “man ir karte”, mas “man nav kartes”'],
      ['karte', 'mapa'],
      ['meklēt — es meklēju, tu meklē', 'procurar — eu procuro, você procura'],
      ['strādāt par gidu', 'trabalhar como guia'],
      ['zināt — es zinu / nezināt', 'saber — eu sei / não saber (o “ne-” gruda no verbo)'],
      ['iela, šaura iela', 'rua, rua estreita (feminino, termina em -a)'],
      ['biļete', 'ingresso, bilhete (o “ļ” é palatal)'],
    ],
    nodes: {
      start: {
        emoji: '🏰',
        text: 'Linu ir Vecrīgā. Viņam ir karte, bet viņš nezina, kur ir Doms.',
        translation: 'O Linu está na Cidade Velha de Riga. Ele tem um mapa, mas não sabe onde fica a catedral.',
        choices: [
          { text: 'Linu prasa palīdzību.', translation: 'O Linu pede ajuda.', next: 'maris' },
          { text: 'Linu pats lasa karti.', translation: 'O Linu mesmo lê o mapa.', next: 'karte' },
        ],
      },
      karte: {
        emoji: '🗺️',
        text: 'Karte ir liela, bet ielas ir mazas un šauras. Linu neko nesaprot.',
        translation: 'O mapa é grande, mas as ruas são pequenas e estreitas. O Linu não entende nada.',
        choices: [{ text: 'Linu prasa palīdzību.', translation: 'O Linu pede ajuda.', next: 'maris' }],
      },
      maris: {
        emoji: '🧔',
        text: '“Sveiki! Es esmu Māris, es strādāju par gidu. Ko tu meklē?”',
        translation: '“Oi! Eu sou o Māris, trabalho como guia. O que você procura?”',
        choices: [{ text: '“Es meklēju Domu.”', translation: '“Eu procuro a catedral.”', next: 'nav_kartes' }],
      },
      nav_kartes: {
        emoji: '🧭',
        text: '“Domu? Man nav kartes, bet es zinu ceļu. Tev ir karte?”',
        translation: '“A catedral? Eu não tenho mapa, mas conheço o caminho. Você tem mapa?”',
        choices: [
          { text: '“Jā, man ir karte. Lūk!”', translation: '“Sim, eu tenho um mapa. Olha aqui!”', next: 'iela' },
          {
            text: '“Nē. Bet tev ir karte, vai ne?”',
            translation: '“Não. Mas você tem um mapa, não tem?”',
            wrong: 'O Māris disse “Man nav kartes”: ELE não tem mapa (“nav” + o genitivo “kartes” é a negação de “man ir”). Quem tem o mapa é o Linu, como diz o começo da história: “Viņam ir karte”.',
          },
        ],
      },
      iela: {
        emoji: '👣',
        text: 'Māris paņem karti. “Mēs ejam pa šo ielu, un tur ir Doma laukums.”',
        translation: 'O Māris pega o mapa. “Nós vamos por esta rua, e ali fica a praça da Catedral.”',
        choices: [
          { text: 'Viņi iet kopā.', translation: 'Eles vão juntos.', next: 'laukums' },
          { text: 'Linu iet viens pa citu ielu.', translation: 'O Linu vai sozinho por outra rua.', next: 'final_apmaldijies' },
        ],
      },
      laukums: {
        emoji: '⛪',
        text: 'Šis ir Rīgas Doms. Tas ir ļoti vecs. Šodien tur ir ērģeļu koncerts.',
        translation: 'Esta é a Catedral de Riga. Ela é muito antiga. Hoje há um concerto de órgão lá.',
        choices: [
          { text: '“Es gribu biļeti!”', translation: '“Eu quero um ingresso!”', next: 'final_bom' },
          {
            text: '“Žēl, šodien nav koncerta.”',
            translation: '“Que pena, hoje não tem concerto.”',
            wrong: 'O texto diz “Šodien tur ir ērģeļu koncerts”: hoje HÁ um concerto de órgão. Se não houvesse, seria “nav koncerta” (nav + genitivo).',
          },
        ],
      },
      final_bom: {
        emoji: '🎶',
        text: 'Linu pērk divas biļetes: vienu sev un vienu Mārim. Ērģeles spēlē. Skaisti!',
        translation: 'O Linu compra dois ingressos: um para ele e um para o Māris. O órgão toca. Que lindo!',
        ending: { tone: 'bom', title: 'Música na catedral', message: 'O Linu achou a catedral e agradeceu ao guia com um ingresso para o concerto.' },
      },
      final_apmaldijies: {
        emoji: '🌀',
        text: 'Linu iet viens. Ielas ir šauras, un Linu atkal nezina, kur viņš ir.',
        translation: 'O Linu vai sozinho. As ruas são estreitas, e o Linu de novo não sabe onde está.',
        ending: { tone: 'neutro', title: 'Perdido de novo', message: 'Nas ruelas da Cidade Velha é fácil se perder. Da próxima vez, vá com o guia!' },
      },
    },
  },
  {
    id: 'lv-h5',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Pāri Gaujai',
    emoji: '🚡',
    summary: 'Em Sigulda, no outono, o Linu e a Ilze atravessam o vale do Gauja de teleférico e avistam o castelo de Turaida.',
    cultural_context:
      'Sigulda, no vale do rio Gauja, é chamada de “Suíça da Vidzeme” pelas colinas e florestas; um teleférico cruza o vale até Krimulda. Ali perto fica o castelo de Turaida, de tijolos vermelhos, fundado no século XIII.',
    start: 'start',
    glossary: [
      ['braukt — es braucu, mēs braucam', 'ir (de veículo) — eu vou, nós vamos'],
      ['man ir bail', 'eu tenho medo, estou com medo'],
      ['man nav naudas', 'eu não tenho dinheiro (“nav” pede o genitivo: nauda → naudas)'],
      ['pils', 'castelo (feminino, apesar do -s)'],
      ['sarkans / sarkana', 'vermelho / vermelha'],
      ['upe', 'rio'],
      ['vagoniņš', 'bondinho, cabine (diminutivo de “vagons”)'],
    ],
    nodes: {
      start: {
        emoji: '🍂',
        text: 'Rudens Siguldā. Koki ir sarkani un dzelteni. Ilze saka: “Mēs braucam ar vagoniņu pāri Gaujai!”',
        translation: 'Outono em Sigulda. As árvores estão vermelhas e amarelas. A Ilze diz: “Nós vamos de bondinho por cima do Gauja!”',
        choices: [
          { text: '“Jā, es gribu braukt!”', translation: '“Sim, eu quero ir!”', next: 'vagonins' },
          { text: '“Man ir bail. Es nebraucu.”', translation: '“Tenho medo. Eu não vou.”', next: 'bail' },
        ],
      },
      bail: {
        emoji: '😰',
        text: '“Tev ir bail? Nav problēmu. Mēs varam iet kājām, bet ceļš ir garš.”',
        translation: '“Você está com medo? Sem problema. Podemos ir a pé, mas o caminho é longo.”',
        choices: [
          { text: '“Labi, es braucu. Tu esi ar mani.”', translation: '“Tá bom, eu vou. Você está comigo.”', next: 'vagonins' },
          { text: 'Linu un Ilze iet kājām.', translation: 'O Linu e a Ilze vão a pé.', next: 'final_kajam' },
        ],
      },
      vagonins: {
        emoji: '🚡',
        text: 'Vagoniņš brauc augstu. Lejā ir upe un meži. Linu neskatās lejā.',
        translation: 'O bondinho vai alto. Lá embaixo há o rio e florestas. O Linu não olha para baixo.',
        choices: [
          { text: 'Linu atver acis.', translation: 'O Linu abre os olhos.', next: 'skats' },
          { text: 'Linu tur Ilzes roku.', translation: 'O Linu segura a mão da Ilze.', next: 'skats' },
        ],
      },
      skats: {
        emoji: '🏞️',
        text: '“Skaties! Tur, tālumā, ir Turaidas pils. Tā ir sarkana.”',
        translation: '“Olha! Lá longe está o castelo de Turaida. Ele é vermelho.”',
        choices: [
          { text: '“Cik skaisti! Es gribu iet uz pili.”', translation: '“Que lindo! Eu quero ir ao castelo.”', next: 'pils' },
          {
            text: '“Pils ir balta, jā?”',
            translation: '“O castelo é branco, né?”',
            wrong: 'A Ilze disse “Tā ir sarkana”: o castelo é VERMELHO (de tijolo), não branco (“balta”).',
          },
        ],
      },
      pils: {
        emoji: '🏰',
        text: 'Pie pils ir mazs veikals. Ilze saka: “Man nav naudas. Tev ir nauda?”',
        translation: 'Perto do castelo há uma lojinha. A Ilze diz: “Eu não tenho dinheiro. Você tem?”',
        choices: [
          { text: '“Jā, man ir nauda. Es pērku divas kafijas.”', translation: '“Sim, eu tenho dinheiro. Eu compro dois cafés.”', next: 'final_bom' },
          {
            text: '“Tev ir nauda, tu pērc!”',
            translation: '“Você tem dinheiro, você compra!”',
            wrong: 'A Ilze disse “Man nav naudas”: ela NÃO tem dinheiro (“nav” + o genitivo “naudas”). Quem pode pagar é o Linu.',
          },
        ],
      },
      final_bom: {
        emoji: '☕',
        text: 'Linu un Ilze dzer kafiju un skatās uz Gaujas ieleju. Rudens ir skaists!',
        translation: 'O Linu e a Ilze tomam café e olham o vale do Gauja. O outono é lindo!',
        ending: { tone: 'bom', title: 'Coragem nas alturas', message: 'O Linu venceu o medo, cruzou o vale de bondinho e pagou o café da amiga.' },
      },
      final_kajam: {
        emoji: '🥾',
        text: 'Ceļš ir ļoti garš. Kad Linu un Ilze ir pie pils, pils jau ir slēgta.',
        translation: 'O caminho é muito longo. Quando o Linu e a Ilze chegam ao castelo, ele já está fechado.',
        ending: { tone: 'neutro', title: 'Castelo fechado', message: 'A pé demorou demais. O bondinho é seguro: da próxima vez, encare a altura!' },
      },
    },
  },
  {
    id: 'lv-h6',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Mazbānītis Ventspilī',
    emoji: '🚂',
    summary: 'Em Ventspils, o Linu quer andar no trenzinho à beira-mar, mas está sem bilhete, até que a Dace aparece.',
    cultural_context:
      'Ventspils, na foz do rio Venta, tem um dos maiores portos da Letônia. No Museu ao Ar Livre da Beira-Mar da cidade, um trenzinho de bitola estreita, o “mazbānītis”, leva os visitantes num passeio curto no verão.',
    start: 'start',
    glossary: [
      ['viņam nav biļetes', 'ele não tem bilhete (“nav” + genitivo)'],
      ['kase', 'bilheteria, caixa'],
      ['pārdot — es pārdodu / nepārdodu', 'vender — eu vendo / não vendo'],
      ['vilciens / mazbānītis', 'trem / trenzinho de bitola estreita'],
      ['osta', 'porto'],
      ['kuģis — kuģi', 'navio — navios (masculino plural em -i)'],
      ['es redzu', 'eu vejo'],
    ],
    nodes: {
      start: {
        emoji: '🚂',
        text: 'Ventspils. Linu grib braukt ar mazbānīti, bet viņam nav biļetes.',
        translation: 'Ventspils. O Linu quer andar no trenzinho, mas não tem bilhete.',
        choices: [
          { text: 'Linu iet uz kasi.', translation: 'O Linu vai até a bilheteria.', next: 'kase' },
          { text: 'Linu kāpj vilcienā bez biļetes.', translation: 'O Linu sobe no trem sem bilhete.', next: 'bez' },
        ],
      },
      bez: {
        emoji: '🧑‍✈️',
        text: 'Konduktors saka: “Labdien! Jūsu biļete, lūdzu!” Bet biļetes nav.',
        translation: 'O condutor diz: “Boa tarde! Seu bilhete, por favor!” Mas bilhete não há.',
        choices: [{ text: 'Linu iet uz kasi.', translation: 'O Linu vai até a bilheteria.', next: 'kase' }],
      },
      kase: {
        emoji: '👧',
        text: 'Pie kases stāv meitene. “Es esmu Dace. Man ir divas biļetes, bet mana māsa neiet.”',
        translation: 'Perto da bilheteria está uma menina. “Eu sou a Dace. Eu tenho dois bilhetes, mas a minha irmã não vai.”',
        choices: [
          { text: '“Vai tu pārdod vienu biļeti?”', translation: '“Você vende um bilhete?”', next: 'biletes' },
          {
            text: '“Tev nav biļešu? Man arī nav.”',
            translation: '“Você não tem bilhetes? Eu também não.”',
            wrong: 'A Dace disse “Man ir divas biļetes”: ela TEM dois bilhetes, e a irmã dela não vai. Sobra um!',
          },
        ],
      },
      biletes: {
        emoji: '🎟️',
        text: '“Nē, es nepārdodu. Es to dodu tev! Mēs braucam kopā.”',
        translation: '“Não, eu não vendo. Eu te dou! Nós vamos juntos.”',
        choices: [{ text: '“Paldies, Dace!”', translation: '“Obrigado, Dace!”', next: 'vilciens' }],
      },
      vilciens: {
        emoji: '🛤️',
        text: 'Mazbānītis brauc lēni. Dace rāda: “Tur ir jūra, un tur ir osta. Ostā ir lieli kuģi.”',
        translation: 'O trenzinho anda devagar. A Dace mostra: “Lá está o mar, e lá está o porto. No porto há navios grandes.”',
        choices: [
          { text: '“Es redzu kuģus! Viens, divi, trīs kuģi.”', translation: '“Eu vejo os navios! Um, dois, três navios.”', next: 'kugi' },
          { text: 'Linu aizver acis un guļ.', translation: 'O Linu fecha os olhos e dorme.', next: 'final_gul' },
        ],
      },
      kugi: {
        emoji: '🚢',
        text: '“Kuģi ir lieli, bet mūsu vilciens ir mazs. Tu esi priecīgs?”',
        translation: '“Os navios são grandes, mas o nosso trem é pequeno. Você está contente?”',
        choices: [
          { text: '“Jā! Es mīlu vilcienus un kuģus.”', translation: '“Sim! Eu amo trens e navios.”', next: 'final_bom' },
          {
            text: '“Jā, bet kuģi ir mazi.”',
            translation: '“Sim, mas os navios são pequenos.”',
            wrong: 'A Dace disse “Kuģi ir lieli”: os navios são GRANDES; o pequeno é o trem (“vilciens ir mazs”).',
          },
        ],
      },
      final_bom: {
        emoji: '🍦',
        text: 'Linu un Dace ēd saldējumu pie jūras. Laba diena Ventspilī!',
        translation: 'O Linu e a Dace tomam sorvete perto do mar. Um bom dia em Ventspils!',
        ending: { tone: 'bom', title: 'Bilhete de presente', message: 'Graças à Dace, o Linu andou no trenzinho e viu os navios do porto.' },
      },
      final_gul: {
        emoji: '😴',
        text: 'Linu guļ. Kad viņš atver acis, brauciens jau ir galā.',
        translation: 'O Linu dorme. Quando ele abre os olhos, o passeio já acabou.',
        ending: { tone: 'neutro', title: 'Passeio dormindo', message: 'O Linu ganhou o bilhete, mas dormiu a viagem toda. Da próxima vez, olhe o porto!' },
      },
    },
  },
  // ───────────────────────── A2.1 ─────────────────────────
  {
    id: 'lv-h7',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Kur zivis lido',
    emoji: '🐟',
    summary: 'Em Kuldīga, na primavera, o pescador Mārtiņš mostra ao Linu os peixes que saltam a cascata mais larga da Europa.',
    cultural_context:
      'A Ventas rumba, em Kuldīga, é considerada a cascata mais larga da Europa: mais de 240 metros de largura e só uns 2 metros de altura. Na primavera, as vimbas (um peixe de rio) saltam por cima dela rio acima, e por isso Kuldīga é chamada de cidade onde “os peixes voam”; o centro antigo é Patrimônio Mundial da UNESCO desde 2023.',
    start: 'start',
    glossary: [
      ['Kuldīgā, pavasarī, vecpilsētā', 'em Kuldīga, na primavera, na cidade velha (o locativo: -ā, -ī, -ē)'],
      ['pār Ventu / pāri ūdenskritumam', 'sobre o Venta / por cima da cascata'],
      ['pret straumi', 'contra a corrente'],
      ['Vai…?', 'partícula que abre as perguntas de sim ou não: “Vai tā ir Ventas rumba?”'],
      ['pa kreisi / pa labi', 'à esquerda / à direita'],
      ['pie lielā akmens', 'perto da pedra grande (“pie” + genitivo)'],
      ['plats, zems', 'largo, baixo'],
      ['vimba — vimbas', 'vimba, um peixe de rio — vimbas'],
    ],
    nodes: {
      start: {
        emoji: '🌉',
        text: 'Kuldīgā ir pavasaris. Linu stāv uz vecā ķieģeļu tilta pār Ventu. Lejā ir plats, bet zems ūdenskritums.',
        translation: 'Em Kuldīga é primavera. O Linu está sobre a velha ponte de tijolos que cruza o Venta. Lá embaixo há uma cascata larga, mas baixa.',
        choices: [
          { text: '“Vai tā ir Ventas rumba?” Linu iet pie ūdenskrituma.', translation: '“Aquela é a Ventas rumba?” O Linu vai até a cascata.', next: 'rumba' },
          { text: 'Linu vispirms iet uz vecpilsētu.', translation: 'O Linu primeiro vai para a cidade velha.', next: 'vecpilseta' },
        ],
      },
      vecpilseta: {
        emoji: '🏘️',
        text: 'Vecpilsētā ir šauras ielas un vecas koka mājas. Mazā kafejnīcā Linu dzer karstu kakao.',
        translation: 'Na cidade velha há ruas estreitas e casas antigas de madeira. Num pequeno café, o Linu toma um chocolate quente.',
        choices: [{ text: '“Tagad uz ūdenskritumu!”', translation: '“Agora, para a cascata!”', next: 'rumba' }],
      },
      rumba: {
        emoji: '🧔',
        text: 'Pie ūdenskrituma stāv zvejnieks Mārtiņš. “Jā, šī ir Ventas rumba, platākais ūdenskritums Eiropā. Vai tu zini, ka šeit zivis lido?”',
        translation: 'Perto da cascata está o pescador Mārtiņš. “Sim, esta é a Ventas rumba, a cascata mais larga da Europa. Você sabe que aqui os peixes voam?”',
        choices: [{ text: '“Zivis lido? Vai tas ir joks?”', translation: '“Os peixes voam? Isso é piada?”', next: 'vimbas' }],
      },
      vimbas: {
        emoji: '🐟',
        text: '“Nav joks! Pavasarī vimbas lec pāri ūdenskritumam. Tās peld pret straumi, uz upes augšteci.”',
        translation: '“Não é piada! Na primavera, as vimbas pulam por cima da cascata. Elas nadam contra a corrente, rumo à parte alta do rio.”',
        choices: [
          { text: '“Kur tās ir? Es gribu redzēt!”', translation: '“Onde elas estão? Eu quero ver!”', next: 'redzet' },
          {
            text: '“Tātad vimbas peld lejup, uz jūru.”',
            translation: '“Então as vimbas nadam rio abaixo, para o mar.”',
            wrong: 'O Mārtiņš disse “pret straumi” (contra a corrente) e “uz upes augšteci” (rumo à parte alta do rio): as vimbas SOBEM o rio, não descem para o mar.',
          },
        ],
      },
      redzet: {
        emoji: '👀',
        text: 'Mārtiņš rāda uz ūdenskrituma malu. “Skaties pa kreisi, pie lielā akmens!”',
        translation: 'O Mārtiņš aponta para a beira da cascata. “Olhe à esquerda, perto da pedra grande!”',
        choices: [
          { text: 'Linu skatās pa kreisi, uz lielo akmeni.', translation: 'O Linu olha à esquerda, para a pedra grande.', next: 'lec' },
          {
            text: 'Linu skatās pa labi, uz tiltu.',
            translation: 'O Linu olha à direita, para a ponte.',
            wrong: 'O Mārtiņš disse “pa kreisi” (à esquerda) e “pie lielā akmens” (perto da pedra grande). “Pa labi” é à direita!',
          },
        ],
      },
      lec: {
        emoji: '✨',
        text: 'Viena, divas, trīs zivis lec gaisā! Tās ir sudrabainas un ļoti ātras.',
        translation: 'Um, dois, três peixes pulam no ar! Eles são prateados e muito rápidos.',
        choices: [
          { text: 'Linu mēģina noķert zivi ar knābi.', translation: 'O Linu tenta pegar um peixe com o bico.', next: 'final_plunks' },
          { text: 'Linu tikai skatās un smaida.', translation: 'O Linu só olha e sorri.', next: 'final_bom' },
        ],
      },
      final_bom: {
        emoji: '🌈',
        text: '“Paldies, ka tu tās neēd!” smejas Mārtiņš. Linu un Mārtiņš sēž pie upes līdz vakaram.',
        translation: '“Obrigado por não comê-las!”, ri o Mārtiņš. O Linu e o Mārtiņš ficam sentados perto do rio até a noite.',
        ending: { tone: 'bom', title: 'Peixes voadores', message: 'O Linu viu as vimbas saltarem a Ventas rumba e resistiu à tentação de pescar uma.' },
      },
      final_plunks: {
        emoji: '💦',
        text: 'Plunkš! Linu krīt ūdenī. Ūdens ir auksts, un zivis ir prom.',
        translation: 'Tchibum! O Linu cai na água. A água está fria, e os peixes foram embora.',
        ending: { tone: 'neutro', title: 'De molho no Venta', message: 'O Linu quis pegar um peixe e acabou dentro do rio. As vimbas só estavam de passagem!' },
      },
    },
  },
  {
    id: 'lv-h8',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Laterna Cēsu pilī',
    emoji: '🕯️',
    summary: 'No castelo medieval de Cēsis, o Linu sobe uma torre escura de lanterna na mão e ouve a história da bandeira letã.',
    cultural_context:
      'O castelo de Cēsis começou a ser construído no século XIII pelos cavaleiros da Ordem dos Irmãos da Espada; nas torres escuras, os visitantes sobem com lanternas de vela. Segundo a tradição, a bandeira vermelho-branco-vermelho da Letônia vem de um trecho da Crônica Rimada da Livônia (fim do século XIII) sobre uma bandeira usada perto de Cēsis.',
    start: 'start',
    glossary: [
      ['Cēsis — pie Cēsīm — Cēsu pils', 'Cēsis — perto de Cēsis — o castelo de Cēsis (o nome da cidade é feminino plural)'],
      ['laterna ar sveci', 'lanterna com vela (“ar” + acusativo)'],
      ['maza sarkana / liela zaļa', 'pequena vermelha / grande verde (o adjetivo concorda com “laterna”, feminino)'],
      ['kāpnes', 'escada (só existe no plural: “kāpnes ir šauras”)'],
      ['tornis — torņa augšā', 'torre — no alto da torre (n → ņ no genitivo)'],
      ['karogs ar baltu svītru', 'bandeira com uma faixa branca'],
      ['Esi uzmanīgs!', 'Tome cuidado! (seja cuidadoso)'],
    ],
    nodes: {
      start: {
        emoji: '🏰',
        text: 'Cēsis ir sena pilsēta Vidzemē. Pils torņos ir tumšs, tāpēc katrs apmeklētājs saņem laternu ar sveci.',
        translation: 'Cēsis é uma cidade antiga na Vidzeme. Nas torres do castelo está escuro, por isso cada visitante recebe uma lanterna com vela.',
        choices: [
          { text: 'Linu iet pie kases.', translation: 'O Linu vai até a bilheteria.', next: 'kase' },
          { text: 'Linu vispirms iet uz pils parku.', translation: 'O Linu primeiro vai ao parque do castelo.', next: 'parks' },
        ],
      },
      parks: {
        emoji: '🌳',
        text: 'Pils parkā ir zaļš zāliens un mierīgs dīķis. Bērni spēlējas pie ūdens.',
        translation: 'No parque do castelo há um gramado verde e um lago tranquilo. As crianças brincam perto da água.',
        choices: [{ text: 'Linu iet pie kases.', translation: 'O Linu vai até a bilheteria.', next: 'kase' }],
      },
      kase: {
        emoji: '👩',
        text: 'Gide Baiba saka: “Labdien! Šeit ir divas laternas: maza sarkana un liela zaļa. Kuru tu gribi?”',
        translation: 'A guia Baiba diz: “Boa tarde! Aqui há duas lanternas: uma pequena vermelha e uma grande verde. Qual você quer?”',
        choices: [
          { text: '“Mazo sarkano, lūdzu.”', translation: '“A pequena vermelha, por favor.”', next: 'tornis' },
          { text: '“Lielo zaļo, lūdzu.”', translation: '“A grande verde, por favor.”', next: 'tornis' },
          {
            text: '“Vai tev ir zila laterna?”',
            translation: '“Você tem uma lanterna azul?”',
            wrong: 'A Baiba só tem duas lanternas: uma pequena vermelha (“maza sarkana”) e uma grande verde (“liela zaļa”). Azul (“zila”) não há!',
          },
        ],
      },
      tornis: {
        emoji: '🕯️',
        text: 'Torņa kāpnes ir šauras, stāvas un tumšas. “Vai tu redzi pakāpienus?” jautā Baiba. “Esi uzmanīgs!”',
        translation: 'A escada da torre é estreita, íngreme e escura. “Você está vendo os degraus?”, pergunta a Baiba. “Tome cuidado!”',
        choices: [
          { text: '“Jā, ar laternu es redzu labi.”', translation: '“Sim, com a lanterna eu vejo bem.”', next: 'augsa' },
          { text: '“Nē, es neredzu. Es eju atpakaļ.”', translation: '“Não, não vejo. Vou voltar.”', next: 'final_atpakal' },
        ],
      },
      augsa: {
        emoji: '🏞️',
        text: 'Torņa augšā ir vējš un skaists skats. Lejā ir sarkani jumti, zaļi parki un balta baznīca. “Vai tu zini, ka Latvijas karoga stāsts sākas pie Cēsīm?” jautā Baiba.',
        translation: 'No alto da torre venta e a vista é linda. Lá embaixo há telhados vermelhos, parques verdes e uma igreja branca. “Você sabe que a história da bandeira da Letônia começa perto de Cēsis?”, pergunta a Baiba.',
        choices: [{ text: '“Vai tiešām? Pastāsti!”', translation: '“Sério? Conta!”', next: 'karogs' }],
      },
      karogs: {
        emoji: '🇱🇻',
        text: '“Sena hronika stāsta par sarkanu karogu ar baltu svītru. Tagad Latvijas karogs ir tumši sarkans ar baltu svītru vidū.”',
        translation: '“Uma crônica antiga fala de uma bandeira vermelha com uma faixa branca. Hoje a bandeira da Letônia é vermelho-escura, com uma faixa branca no meio.”',
        choices: [
          { text: '“Tātad karogs ir sarkans ar baltu svītru.”', translation: '“Então a bandeira é vermelha com uma faixa branca.”', next: 'final_bom' },
          {
            text: '“Tātad karogs ir balts ar sarkanu svītru.”',
            translation: '“Então a bandeira é branca com uma faixa vermelha.”',
            wrong: 'A Baiba disse “sarkans ar baltu svītru”: VERMELHO com uma faixa branca. O fundo é vermelho-escuro, e a faixa do meio é branca.',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu nes laternu lejā un saka: “Paldies, Baiba! Cēsis ir brīnišķīga pilsēta.”',
        translation: 'O Linu leva a lanterna para baixo e diz: “Obrigado, Baiba! Cēsis é uma cidade maravilhosa.”',
        ending: { tone: 'bom', title: 'Luz na torre', message: 'O Linu subiu a torre escura, viu a cidade do alto e aprendeu a história da bandeira letã.' },
      },
      final_atpakal: {
        emoji: '🌑',
        text: 'Linu iet lejā pa tumšajām kāpnēm. Viņš neredz skatu no torņa, bet dzer labu kafiju pilsētas kafejnīcā.',
        translation: 'O Linu desce pela escada escura. Ele não vê a vista da torre, mas toma um bom café num café da cidade.',
        ending: { tone: 'neutro', title: 'Café em vez de vista', message: 'Com a lanterna dava para ver os degraus! Da próxima vez, suba até o alto da torre.' },
      },
    },
  },
  {
    id: 'lv-h9',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Pilsēta, kurā piedzimst vējš',
    emoji: '🪁',
    summary: 'Em Liepāja, a cidade do vento, o Linu e o Edgars soltam pipa na praia, e o vento resolve brincar também.',
    cultural_context:
      'Liepāja, no sudoeste da Letônia, é chamada de “a cidade onde nasce o vento”, verso de uma canção popular letã; fica entre o mar Báltico e o lago de Liepāja. A sala de concertos da cidade, a “Lielais dzintars” (O Grande Âmbar), tem uma fachada de vidro cor de âmbar.',
    start: 'start',
    glossary: [
      ['Liepājā, pludmalē, smiltīs', 'em Liepāja, na praia, na areia (locativo)'],
      ['stiprs vējš', 'vento forte'],
      ['liels, dzeltens pūķis', 'uma pipa grande e amarela (“pūķis” é pipa e também dragão)'],
      ['aukla', 'linha, cordão'],
      ['virs jūras', 'acima do mar (“virs” + genitivo)'],
      ['pie liela, balta akmens', 'perto de uma pedra grande e branca (os adjetivos também vão para o genitivo)'],
      ['Vai…?', 'abre a pergunta de sim ou não'],
    ],
    nodes: {
      start: {
        emoji: '🌬️',
        text: 'Liepājā pūš stiprs vējš. Linu un Edgars ir pludmalē ar lielu, dzeltenu pūķi.',
        translation: 'Em Liepāja sopra um vento forte. O Linu e o Edgars estão na praia com uma pipa grande e amarela.',
        choices: [
          { text: '“Vai šodien vējš ir labs pūķim?”', translation: '“Hoje o vento está bom para a pipa?”', next: 'pukis' },
          { text: 'Linu vispirms grib redzēt koncertzāli.', translation: 'O Linu primeiro quer ver a sala de concertos.', next: 'dzintars' },
        ],
      },
      dzintars: {
        emoji: '🏢',
        text: 'Pilsētas centrā ir koncertzāle “Lielais dzintars”. Tā ir no dzeltena stikla, kā liels dzintara gabals.',
        translation: 'No centro da cidade fica a sala de concertos “Lielais dzintars”. Ela é de vidro amarelo, como um grande pedaço de âmbar.',
        choices: [{ text: '“Tagad uz pludmali!”', translation: '“Agora, para a praia!”', next: 'pukis' }],
      },
      pukis: {
        emoji: '🪁',
        text: '“Vējš ir ļoti labs!” saka Edgars. “Tu turi auklu, un es skrienu ar pūķi.”',
        translation: '“O vento está ótimo!”, diz o Edgars. “Você segura a linha, e eu corro com a pipa.”',
        choices: [
          { text: 'Linu tur auklu.', translation: 'O Linu segura a linha.', next: 'gaisa' },
          {
            text: 'Linu skrien ar pūķi.',
            translation: 'O Linu corre com a pipa.',
            wrong: 'O Edgars disse “Tu turi auklu” (você segura a linha) e “es skrienu ar pūķi” (EU corro com a pipa). O Linu fica com a linha!',
          },
        ],
      },
      gaisa: {
        emoji: '☁️',
        text: 'Pūķis ir gaisā, augstu virs jūras. Pēkšņi vējš kļūst vēl stiprāks.',
        translation: 'A pipa está no ar, bem alto acima do mar. De repente o vento fica ainda mais forte.',
        choices: [
          { text: 'Linu tur auklu ar abiem spārniem.', translation: 'O Linu segura a linha com as duas asas.', next: 'cepure' },
          { text: 'Linu palaiž auklu vaļā.', translation: 'O Linu solta a linha.', next: 'final_prom' },
        ],
      },
      cepure: {
        emoji: '🧢',
        text: 'Edgara cepure lido pa gaisu! Tā nokrīt smiltīs, pie liela, balta akmens.',
        translation: 'O boné do Edgars voa pelos ares! Ele cai na areia, perto de uma pedra grande e branca.',
        choices: [
          { text: '“Cepure ir smiltīs, pie akmens!”', translation: '“O boné está na areia, perto da pedra!”', next: 'final_bom' },
          {
            text: '“Cepure ir jūrā!”',
            translation: '“O boné está no mar!”',
            wrong: 'O texto diz “smiltīs” (na areia, o locativo de “smiltis”), perto da pedra branca, e não “jūrā” (no mar).',
          },
        ],
      },
      final_bom: {
        emoji: '🌅',
        text: 'Edgars paņem cepuri, un pūķis joprojām lido. “Liepājā vējš vienmēr ir draugs,” smejas Edgars.',
        translation: 'O Edgars pega o boné, e a pipa continua voando. “Em Liepāja o vento é sempre amigo”, ri o Edgars.',
        ending: { tone: 'bom', title: 'Dono do vento', message: 'O Linu segurou firme a pipa e ainda achou o boné do amigo na areia.' },
      },
      final_prom: {
        emoji: '🌊',
        text: 'Dzeltenais pūķis lido prom pāri jūrai. Edgars ir bēdīgs: “Tas bija mans labākais pūķis…”',
        translation: 'A pipa amarela voa para longe, por cima do mar. O Edgars fica triste: “Era a minha melhor pipa…”',
        ending: { tone: 'neutro', title: 'Pipa perdida', message: 'Em Liepāja, cidade do vento, a linha da pipa não se solta nunca!' },
      },
    },
  },
  // ───────────────────────── A2.2 ─────────────────────────
  {
    id: 'lv-h10',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Zilā šalle Rundālē',
    emoji: '🧣',
    summary: 'A Zane perdeu o cachecol azul no palácio de Rundāle, e o Linu refaz com ela o passeio da véspera para achá-lo.',
    cultural_context:
      'O palácio de Rundāle foi projetado no século XVIII pelo arquiteto italiano Bartolomeo Rastrelli, o mesmo do Palácio de Inverno de São Petersburgo, para Ernst Johann von Biron, duque da Curlândia. O Salão Dourado e o Salão Branco são os mais famosos, e o jardim à francesa tem um grande roseiral.',
    start: 'start',
    glossary: [
      ['vakar mēs bijām…', 'ontem nós estivemos… (passado de “būt”: biju, biji, bija, bijām, bijāt)'],
      ['es pazaudēju / es atradu', 'eu perdi / eu achei'],
      ['savu šalli, savā somā', 'o próprio cachecol, na própria bolsa (“savs” se refere ao sujeito da frase)'],
      ['Es to atdevu sargam Kārlim.', 'Eu o entreguei ao guarda Kārlis (dativo: sargs → sargam, Kārlis → Kārlim)'],
      ['pie Kārļa, brāļa atslēgas', 'até o Kārlis, as chaves do irmão (l → ļ no genitivo: Kārlis → Kārļa, brālis → brāļa)'],
      ['cepures, lietussargi', 'chapéus, guarda-chuvas (plurais)'],
      ['Šalles nebija.', 'Não havia cachecol (“nebija” + genitivo)'],
      ['konfekšu kaste', 'caixa de bombons (t → š: konfekte → konfekšu)'],
    ],
    nodes: {
      start: {
        emoji: '🏰',
        text: 'Vakar Linu un viņa draudzene Zane bija Rundāles pilī. Šodien Zane zvana: “Linu, es pazaudēju savu zilo šalli! Vai tu to redzēji?”',
        translation: 'Ontem o Linu e a amiga dele, a Zane, estiveram no palácio de Rundāle. Hoje a Zane liga: “Linu, eu perdi o meu cachecol azul! Você o viu?”',
        choices: [
          { text: '“Es neredzēju. Brauksim atpakaļ uz pili!”', translation: '“Não vi. Vamos voltar ao palácio!”', next: 'atpakal' },
          { text: '“Vai tu paskatījies savā somā?”', translation: '“Você olhou na sua bolsa?”', next: 'soma' },
        ],
      },
      soma: {
        emoji: '👜',
        text: 'Zane skatās somā. Tur ir viņas telefons, divas biļetes un brāļa atslēgas, bet šalles nav.',
        translation: 'A Zane olha na bolsa. Lá estão o telefone dela, dois ingressos e as chaves do irmão, mas o cachecol não está.',
        choices: [{ text: '“Labi, braucam uz pili.”', translation: '“Tá bom, vamos ao palácio.”', next: 'atpakal' }],
      },
      atpakal: {
        emoji: '💂',
        text: 'Pie pils sargs jautā: “Kur jūs vakar bijāt?” Zane atbild: “No rīta mēs bijām dārzā, pēc tam Zelta zālē.”',
        translation: 'Na entrada do palácio, o guarda pergunta: “Onde vocês estiveram ontem?” A Zane responde: “De manhã estivemos no jardim; depois, no Salão Dourado.”',
        choices: [
          { text: '“Vispirms meklēsim dārzā!”', translation: '“Primeiro vamos procurar no jardim!”', next: 'darzs' },
          {
            text: 'Linu saka: “Mēs vakar bijām tikai Baltajā zālē.”',
            translation: 'O Linu diz: “Ontem nós só estivemos no Salão Branco.”',
            wrong: 'A Zane disse que de manhã eles estiveram “dārzā” (no jardim) e depois “Zelta zālē” (no Salão Dourado). O Salão Branco nem foi citado!',
          },
        ],
      },
      darzs: {
        emoji: '🌹',
        text: 'Rožu dārzā strādā dārznieks. “Vakar šeit bija daudz tūristu. Es atradu trīs cepures, divus lietussargus un vienu cimdu. Šalles nebija.”',
        translation: 'No roseiral trabalha um jardineiro. “Ontem havia muitos turistas aqui. Achei três chapéus, dois guarda-chuvas e uma luva. Cachecol não havia.”',
        choices: [
          { text: '“Tad ejam uz Zelta zāli.”', translation: '“Então vamos ao Salão Dourado.”', next: 'zale' },
          {
            text: '“Paldies! Lūdzu, dodiet Zanei viņas šalli.”',
            translation: '“Obrigado! Por favor, dê à Zane o cachecol dela.”',
            wrong: 'O jardineiro achou chapéus, guarda-chuvas e uma luva, mas disse “Šalles nebija”: cachecol não havia (nebija + genitivo).',
          },
        ],
      },
      zale: {
        emoji: '✨',
        text: 'Zelta zālē viss spīd. Muzeja darbiniece saka: “Vakar es atradu zilu šalli pie loga. Es to atdevu sargam Kārlim pie ieejas.”',
        translation: 'No Salão Dourado tudo brilha. A funcionária do museu diz: “Ontem eu achei um cachecol azul perto da janela. Eu o entreguei ao guarda Kārlis, na entrada.”',
        choices: [
          { text: 'Viņi iet pie Kārļa.', translation: 'Eles vão até o Kārlis.', next: 'sargs' },
          { text: 'Zane saka: “Šalle nav svarīga. Braucam mājās.”', translation: 'A Zane diz: “O cachecol não é importante. Vamos para casa.”', next: 'final_majas' },
        ],
      },
      sargs: {
        emoji: '🧣',
        text: 'Kārlis smaida: “Vai šī ir jūsu šalle?” Zane priecīgi saka: “Jā, tā ir mana! Paldies jums!”',
        translation: 'O Kārlis sorri: “Este é o cachecol de vocês?” A Zane diz, contente: “Sim, é o meu! Obrigada!”',
        choices: [{ text: 'Zane iedod Kārlim konfekšu kasti.', translation: 'A Zane dá ao Kārlis uma caixa de bombons.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎁',
        text: 'Visi ir priecīgi. Pirms mājām Zane un Linu vēlreiz iet caur rožu dārzu, un Zanes zilā šalle plīvo vējā.',
        translation: 'Todos estão contentes. Antes de ir para casa, a Zane e o Linu passam mais uma vez pelo roseiral, e o cachecol azul da Zane balança ao vento.',
        ending: { tone: 'bom', title: 'Cachecol encontrado', message: 'Refazendo o passeio da véspera, o Linu e a Zane acharam o cachecol com o guarda Kārlis.' },
      },
      final_majas: {
        emoji: '🚗',
        text: 'Viņi brauc mājās bez šalles. Nākamajā dienā Kārlis zvana: “Jūsu šalle ir pie manis!”',
        translation: 'Eles voltam para casa sem o cachecol. No dia seguinte, o Kārlis liga: “O seu cachecol está comigo!”',
        ending: { tone: 'neutro', title: 'Quase lá', message: 'A funcionária tinha dito que deu o cachecol ao guarda Kārlis (“sargam Kārlim”, no dativo). Era só ir até ele (“pie Kārļa”)!' },
      },
    },
  },
  {
    id: 'lv-h11',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Paka no Jāņa',
    emoji: '📦',
    summary: 'Em Daugavpils, o Linu leva um pacote para a avó de um amigo, que mora na fortaleza, e descobre um pintor famoso nascido na cidade.',
    cultural_context:
      'Daugavpils, a segunda maior cidade da Letônia, fica na Latgália, às margens do rio Daugava; a sua fortaleza do século XIX ainda tem ruas e casas onde moram pessoas. Ali nasceu, em 1903, o pintor Mark Rothko, e hoje um centro de arte com o nome dele funciona dentro da fortaleza. Na cidade, muita gente fala russo no dia a dia, além do letão.',
    start: 'start',
    glossary: [
      ['atbrauca, iedeva, aizbrauca', 'chegou, deu, foi embora (passado)'],
      ['Jānis — Jāņa vecmāmiņa', 'Jānis — a avó do Jānis (n → ņ no genitivo)'],
      ['manai vecmāmiņai / Jānim', 'para a minha avó / para o Jānis (dativo)'],
      ['cietoksnis — cietoksnī', 'fortaleza — na fortaleza'],
      ['mans tēvs, tava vecmāmiņa', 'o meu pai, a sua avó (possessivos)'],
      ['mazdēls', 'neto'],
      ['gleznotājs, gleznas', 'pintor, quadros'],
      ['latviski un krieviski', 'em letão e em russo'],
    ],
    nodes: {
      start: {
        emoji: '🚆',
        text: 'Linu atbrauca uz Daugavpili ar vilcienu. Viņa draugs Jānis iedeva viņam paku: “Lūdzu, aiznes to manai vecmāmiņai! Viņa dzīvo cietoksnī.”',
        translation: 'O Linu chegou a Daugavpils de trem. O amigo dele, o Jānis, lhe deu um pacote: “Por favor, leve isto para a minha avó! Ela mora na fortaleza.”',
        choices: [
          { text: 'Linu iet uz cietoksni.', translation: 'O Linu vai para a fortaleza.', next: 'cietoksnis' },
          { text: 'Linu vispirms paēd stacijā.', translation: 'O Linu primeiro come alguma coisa na estação.', next: 'stacija' },
        ],
      },
      stacija: {
        emoji: '🥟',
        text: 'Stacijas kafejnīcā Linu ēda pelmeņus un dzēra tēju. Pārdevēja runāja latviski un krieviski.',
        translation: 'No café da estação, o Linu comeu pelmeni e tomou chá. A vendedora falava letão e russo.',
        choices: [{ text: 'Tagad uz cietoksni!', translation: 'Agora, para a fortaleza!', next: 'cietoksnis' }],
      },
      cietoksnis: {
        emoji: '🧱',
        text: 'Cietoksnis ir liels, ar sarkaniem ķieģeļu mūriem un platām ielām. Uz ielas stāv vīrs ar suni. “Jūs kādu meklējat?”',
        translation: 'A fortaleza é grande, com muralhas de tijolo vermelho e ruas largas. Na rua há um homem com um cachorro. “O senhor procura alguém?”',
        choices: [
          { text: '“Es meklēju Jāņa vecmāmiņu, Annu.”', translation: '“Eu procuro a avó do Jānis, a Anna.”', next: 'vecmamina' },
          {
            text: '“Es meklēju Jāni.”',
            translation: '“Eu procuro o Jānis.”',
            wrong: 'Foi o Jānis que DEU o pacote (“iedeva”); quem mora na fortaleza é a avó dele. O Linu procura “Jāņa vecmāmiņu” (Jānis → Jāņa, com a troca n → ņ no genitivo).',
          },
        ],
      },
      vecmamina: {
        emoji: '👵',
        text: 'Vīrs rāda uz dzeltenu māju. Pie durvīm stāv sirma kundze. “Labdien! Es esmu Anna. Tu esi mana mazdēla draugs?”',
        translation: 'O homem aponta para uma casa amarela. Na porta está uma senhora de cabelos brancos. “Boa tarde! Eu sou a Anna. Você é amigo do meu neto?”',
        choices: [{ text: '“Jā! Jānis sūta jums šo paku.”', translation: '“Sim! O Jānis manda este pacote para a senhora.”', next: 'paka' }],
      },
      paka: {
        emoji: '🎁',
        text: 'Anna atver paku. Tajā ir divas grāmatas un vecas fotogrāfijas. “Ak, šīs ir manas fotogrāfijas! Es tās pērn atstāju pie Jāņa.”',
        translation: 'A Anna abre o pacote. Dentro há dois livros e fotografias antigas. “Ah, estas são as minhas fotos! Eu as deixei na casa do Jānis no ano passado.”',
        choices: [{ text: '“Kas ir šajās fotogrāfijās?”', translation: '“O que tem nestas fotografias?”', next: 'foto' }],
      },
      foto: {
        emoji: '🖼️',
        text: '“Šeit ir mans tēvs. Viņš bija gleznotājs un gleznoja upes un ezerus. Daugavpilī piedzima arī slavenais gleznotājs Marks Rotko.”',
        translation: '“Aqui está o meu pai. Ele era pintor e pintava rios e lagos. Em Daugavpils nasceu também o famoso pintor Mark Rothko.”',
        choices: [
          { text: '“Vai Rotko dzīvoja šeit visu mūžu?”', translation: '“O Rothko morou aqui a vida toda?”', next: 'rotko' },
          { text: '“Paldies, bet mans vilciens drīz brauc.”', translation: '“Obrigado, mas o meu trem sai logo.”', next: 'final_vilciens' },
        ],
      },
      rotko: {
        emoji: '🎨',
        text: '“Nē. Viņš bija mazs zēns, kad ģimene aizbrauca uz Ameriku. Tagad cietoksnī ir viņa mākslas centrs. Iesim kopā?”',
        translation: '“Não. Ele era um menino quando a família foi embora para a América. Hoje há o centro de arte dele na fortaleza. Vamos juntos?”',
        choices: [
          { text: '“Jā, iesim!”', translation: '“Sim, vamos!”', next: 'final_bom' },
          {
            text: '“Tātad Rotko visu mūžu dzīvoja cietoksnī.”',
            translation: '“Então o Rothko morou a vida toda na fortaleza.”',
            wrong: 'A Anna disse que ele “bija mazs zēns” (era um menino) quando a família “aizbrauca uz Ameriku” (foi embora para a América). Ele não passou a vida em Daugavpils.',
          },
        ],
      },
      final_bom: {
        emoji: '🖌️',
        text: 'Linu un Anna kopā skatījās gleznas. Vakarā Linu uzrakstīja Jānim: “Tava vecmāmiņa ir brīnišķīga!”',
        translation: 'O Linu e a Anna viram os quadros juntos. À noite, o Linu escreveu para o Jānis: “A sua avó é maravilhosa!”',
        ending: { tone: 'bom', title: 'Entrega com arte', message: 'O Linu entregou o pacote, ganhou uma amiga e conheceu a arte de Rothko na cidade onde ele nasceu.' },
      },
      final_vilciens: {
        emoji: '🚆',
        text: 'Linu steidzās uz staciju. Vilcienā viņš domāja: “Žēl, es neredzēju mākslas centru…”',
        translation: 'O Linu correu para a estação. No trem, ele pensou: “Que pena, não vi o centro de arte…”',
        ending: { tone: 'neutro', title: 'Pressa demais', message: 'O pacote chegou, mas o Linu perdeu o centro de arte da fortaleza. Da próxima vez, reserve mais tempo para Daugavpils!' },
      },
    },
  },
  {
    id: 'lv-h12',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Laipa pār purvu',
    emoji: '🦌',
    summary: 'Numa manhã de neblina no pântano de Ķemeri, o Linu e o Oskars encontram pegadas e seguem um cervo pela passarela de madeira.',
    cultural_context:
      'O Parque Nacional de Ķemeri, perto de Jūrmala, é conhecido pelo Grande Pântano de Ķemeri (Lielais Ķemeru tīrelis), atravessado por uma trilha de tábuas de madeira com uma torre de observação. Nas turfeiras da Letônia vivem cervos, alces e aves como o grou.',
    start: 'start',
    glossary: [
      ['purvs, laipa', 'pântano, passarela de tábuas'],
      ['ieradās, redzēja, apstājās', 'chegaram, viram, parou (passado)'],
      ['briedis — brieža pēdas', 'cervo — pegadas de cervo (d → ž no genitivo)'],
      ['lācis — lāča', 'urso — de urso (c → č no genitivo)'],
      ['ezeri, priedes, dzērves', 'lagos, pinheiros, grous (plurais)'],
      ['tava fotogrāfija / saviem draugiem', 'a sua foto / para os próprios amigos (possessivo e dativo plural)'],
      ['klusi / skaļi', 'baixinho, em silêncio / alto'],
    ],
    nodes: {
      start: {
        emoji: '🌫️',
        text: 'Agrā rītā Linu un Oskars ieradās Ķemeru nacionālajā parkā. Pār lielo purvu iet gara koka laipa.',
        translation: 'De manhã cedo, o Linu e o Oskars chegaram ao Parque Nacional de Ķemeri. Sobre o grande pântano passa uma longa passarela de madeira.',
        choices: [
          { text: 'Viņi uzkāpa skatu tornī.', translation: 'Eles subiram na torre de observação.', next: 'tornis' },
          { text: 'Viņi uzreiz gāja pa laipu.', translation: 'Eles foram direto pela passarela.', next: 'laipa' },
        ],
      },
      tornis: {
        emoji: '🔭',
        text: 'No torņa viņi redzēja mazus ezerus, zemas priedes un miglu. Oskars teica: “Pagājušajā gadā es šeit redzēju dzērves.”',
        translation: 'Da torre eles viram lagos pequenos, pinheiros baixos e neblina. O Oskars disse: “No ano passado eu vi grous aqui.”',
        choices: [{ text: 'Viņi nokāpa un gāja pa laipu.', translation: 'Eles desceram e foram pela passarela.', next: 'laipa' }],
      },
      laipa: {
        emoji: '👣',
        text: 'Uz laipas bija slapjš. Pēkšņi Oskars apstājās: “Skaties! Tur, sūnās, ir pēdas. Tās ir brieža pēdas, nevis lāča.”',
        translation: 'Na passarela estava molhado. De repente o Oskars parou: “Olha! Ali, no musgo, há pegadas. São pegadas de cervo, não de urso.”',
        choices: [
          { text: '“Briedis? Kur tas tagad ir?”', translation: '“Um cervo? Onde ele está agora?”', next: 'briedis' },
          {
            text: '“Lācis! Man ir bail, ejam prom!”',
            translation: '“Um urso! Estou com medo, vamos embora!”',
            wrong: 'O Oskars disse “brieža pēdas, nevis lāča”: pegadas de CERVO, não de urso. “Brieža” e “lāča” são os genitivos de “briedis” e “lācis”, com a troca de consoante (d → ž, c → č).',
          },
        ],
      },
      briedis: {
        emoji: '🦌',
        text: 'Viņi gāja klusi. Pie mazā ezera stāvēja briedis ar lieliem ragiem. Tas dzēra ūdeni.',
        translation: 'Eles andaram em silêncio. Perto do lago pequeno estava um cervo de chifres grandes. Ele bebia água.',
        choices: [
          { text: 'Linu klusi fotografēja briedi.', translation: 'O Linu fotografou o cervo em silêncio.', next: 'foto' },
          { text: 'Linu skaļi sauca: “Sveiks, briedi!”', translation: 'O Linu gritou: “Oi, cervo!”', next: 'final_aizskreja' },
        ],
      },
      foto: {
        emoji: '📸',
        text: 'Briedis pacēla galvu, paskatījās uz viņiem un lēnām aizgāja mežā. “Tava fotogrāfija ir lieliska!” teica Oskars.',
        translation: 'O cervo levantou a cabeça, olhou para eles e foi embora devagar para a floresta. “A sua foto ficou ótima!”, disse o Oskars.',
        choices: [
          { text: '“Es to tūlīt sūtu saviem draugiem!”', translation: '“Vou mandar agora mesmo para os meus amigos!”', next: 'final_bom' },
          {
            text: '“Žēl, ka briedis uzreiz aizskrēja.”',
            translation: '“Pena que o cervo saiu correndo na hora.”',
            wrong: 'O texto diz que o cervo levantou a cabeça, olhou para eles e foi embora “lēnām” (devagar). Ele não fugiu correndo!',
          },
        ],
      },
      final_bom: {
        emoji: '🌅',
        text: 'Migla pazuda, un saule apspīdēja purvu. Tā bija laba diena: Linu un Oskars redzēja briedi!',
        translation: 'A neblina sumiu, e o sol iluminou o pântano. Foi um bom dia: o Linu e o Oskars viram um cervo!',
        ending: { tone: 'bom', title: 'Manhã no pântano', message: 'Andando em silêncio, o Linu viu o cervo de perto e ainda tirou uma ótima foto.' },
      },
      final_aizskreja: {
        emoji: '💨',
        text: 'Briedis nobijās un aizskrēja. Oskars nopūtās: “Purvā mēs runājam klusi, Linu…”',
        translation: 'O cervo se assustou e fugiu correndo. O Oskars suspirou: “No pântano a gente fala baixinho, Linu…”',
        ending: { tone: 'neutro', title: 'Grito no pântano', message: 'O grito espantou o cervo. Nas trilhas da natureza, silêncio é tudo!' },
      },
    },
  },
  // ───────────────────────── B1.1 ─────────────────────────
  {
    id: 'lv-h13',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Sejas Alberta ielā',
    emoji: '🏛️',
    summary: 'Na rua Alberta, em Riga, a guia Līga transforma o Linu em detetive: ele precisa achar três detalhes nas fachadas Art Nouveau.',
    cultural_context:
      'Cerca de um terço dos prédios do centro de Riga é em Art Nouveau (em letão, “jūgendstils”), uma das maiores concentrações do mundo; a rua Alberta (Alberta iela) reúne fachadas do arquiteto Mikhail Eisenstein, cheias de rostos, máscaras e animais. Na mesma rua funciona o Centro de Art Nouveau de Riga, um museu instalado num apartamento da época.',
    start: 'start',
    glossary: [
      ['jūgendstils', 'Art Nouveau (do alemão “Jugendstil”)'],
      ['tu būsi, es iedošu, mēs iesim', 'você será, eu darei, nós iremos (futuro com -s-)'],
      ['Atrodi! Paskaties! Nāc šurp!', 'Encontre! Olhe! Venha cá! (imperativo)'],
      ['Nesteidzies!', 'Não se apresse! (reflexivo negado: steigties)'],
      ['atpūsties, apsēsties, priecāties', 'descansar, sentar-se, alegrar-se (verbos reflexivos em -ties)'],
      ['Linu! Līga!', 'vocativo: nomes em -a e nomes estrangeiros como “Linu” não mudam'],
      ['seja ar atvērtu muti', 'um rosto de boca aberta'],
      ['trīspadsmit', 'treze'],
    ],
    nodes: {
      start: {
        emoji: '🕵️',
        text: '“Labrīt, Linu! Šodien tu būsi detektīvs,” saka gide Līga Alberta ielā. “Paskaties uz šīm mājām: tās ir celtas jūgendstilā. Atrodi trīs lietas, un es tev iedošu balvu!”',
        translation: '“Bom dia, Linu! Hoje você vai ser detetive”, diz a guia Līga na rua Alberta. “Olhe estas casas: foram construídas em Art Nouveau. Encontre três coisas, e eu vou te dar um prêmio!”',
        choices: [
          { text: '“Labi, Līga! Ko man meklēt?”', translation: '“Tá bom, Līga! O que eu devo procurar?”', next: 'uzdevums' },
          {
            text: '“Paldies par balvu, Līga!”',
            translation: '“Obrigado pelo prêmio, Līga!”',
            wrong: 'A Līga disse “es tev iedošu balvu” (vou te dar um prêmio), no futuro, e só DEPOIS que você achar três coisas (“Atrodi trīs lietas”). O prêmio ainda não veio!',
          },
        ],
      },
      uzdevums: {
        emoji: '📜',
        text: '“Pirmkārt, atrodi seju ar atvērtu muti. Otrkārt, atrodi lauvu. Treškārt, atrodi sievieti ar ziediem matos.”',
        translation: '“Primeiro, encontre um rosto de boca aberta. Segundo, encontre um leão. Terceiro, encontre uma mulher com flores no cabelo.”',
        choices: [
          { text: '“Es sākšu ar lauvu!”', translation: '“Vou começar pelo leão!”', next: 'lauva' },
          { text: '“Vispirms es atpūtīšos kafejnīcā.”', translation: '“Primeiro vou descansar num café.”', next: 'kafejnica' },
        ],
      },
      kafejnica: {
        emoji: '☕',
        text: 'Linu apsēdās kafejnīcā. Pie blakus galdiņa sēdēja vecs kungs. “Tu meklē sejas? Paskaties uz augšu, pāri ielai!”',
        translation: 'O Linu se sentou num café. Na mesinha ao lado estava sentado um senhor idoso. “Você está procurando rostos? Olhe para cima, do outro lado da rua!”',
        choices: [{ text: 'Linu paskatījās uz augšu.', translation: 'O Linu olhou para cima.', next: 'seja' }],
      },
      lauva: {
        emoji: '🦁',
        text: 'Linu staigā gar mājām un skatās uz augšu. Pēkšņi viņš ierauga divas lauvas pie ieejas. “Lauvas! Vēl divas lietas,” priecājas Linu.',
        translation: 'O Linu anda ao longo das casas e olha para cima. De repente, ele vê dois leões na entrada. “Leões! Faltam duas coisas”, alegra-se o Linu.',
        choices: [{ text: 'Linu meklē tālāk.', translation: 'O Linu continua procurando.', next: 'seja' }],
      },
      seja: {
        emoji: '😱',
        text: 'Augstu pie jumta ir milzīga seja ar atvērtu muti. Liekas, ka tā kliedz. Linu to nofotografē.',
        translation: 'Lá no alto, perto do telhado, há um rosto enorme de boca aberta. Parece que está gritando. O Linu o fotografa.',
        choices: [{ text: 'Linu gaida, ko teiks Līga.', translation: 'O Linu espera o que a Līga vai dizer.', next: 'zvans' }],
      },
      zvans: {
        emoji: '📱',
        text: 'Līga zvana: “Linu, kā tev iet? Paklausies: pēdējo lietu tu atradīsi mājā ar numuru trīspadsmit. Nesteidzies un skaties uzmanīgi!”',
        translation: 'A Līga liga: “Linu, como está indo? Escute: a última coisa você vai encontrar na casa número treze. Não se apresse e olhe com atenção!”',
        choices: [
          { text: 'Linu mierīgi iet uz māju numur trīspadsmit.', translation: 'O Linu vai com calma até a casa número treze.', next: 'trispadsmit' },
          {
            text: 'Linu ātri skrien uz māju numur trīs.',
            translation: 'O Linu corre depressa até a casa número três.',
            wrong: 'A Līga disse “trīspadsmit” (treze), não “trīs” (três), e ainda pediu “Nesteidzies” (não se apresse): o imperativo negado do reflexivo “steigties”.',
          },
        ],
      },
      trispadsmit: {
        emoji: '👀',
        text: 'Uz mājas fasādes ir daudz seju. Viena sieviete ar ziediem matos skatās tieši uz Linu. Blakus viņai ir vīrietis ar garu bārdu.',
        translation: 'Na fachada da casa há muitos rostos. Uma mulher com flores no cabelo olha bem para o Linu. Ao lado dela há um homem de barba comprida.',
        choices: [
          { text: '“Atradu! Līga, nāc šurp!”', translation: '“Achei! Līga, vem cá!”', next: 'final_bom' },
          { text: 'Linu nofotografē vīrieti ar bārdu.', translation: 'O Linu fotografa o homem de barba.', next: 'final_barda' },
        ],
      },
      final_bom: {
        emoji: '🏆',
        text: 'Līga atnāca un smaidīja. “Apsveicu, Linu! Rīt mēs kopā iesim uz Jūgendstila centru — tā būs tava balva.”',
        translation: 'A Līga veio e sorriu. “Parabéns, Linu! Amanhã nós vamos juntos ao Centro de Art Nouveau: esse vai ser o seu prêmio.”',
        ending: { tone: 'bom', title: 'Detetive do Art Nouveau', message: 'O Linu achou o rosto, os leões e a mulher com flores, e ganhou uma visita ao museu.' },
      },
      final_barda: {
        emoji: '🧔',
        text: '“Linu, tas ir vīrietis ar bārdu, nevis sieviete ar ziediem!” smējās Līga. “Mēģināsim vēlreiz rīt.”',
        translation: '“Linu, esse é um homem de barba, não uma mulher com flores!”, riu a Līga. “Vamos tentar de novo amanhã.”',
        ending: { tone: 'neutro', title: 'Rosto errado', message: 'A tarefa era “sieviete ar ziediem matos” (uma mulher com flores no cabelo). Quase!' },
      },
    },
  },
  {
    id: 'lv-h14',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Mežsarga noteikumi',
    emoji: '🐻',
    summary: 'Nas trilhas naturais de Līgatne, o guarda-florestal Andris ensina ao Linu as regras para ajudar a alimentar alces e um urso.',
    cultural_context:
      'O Parque Nacional do Gauja, criado em 1973, é o mais antigo da Letônia. Nas trilhas naturais de Līgatne (Līgatnes dabas takas), dentro dele, dá para ver em grandes cercados animais da floresta báltica, como alces, ursos e javalis.',
    start: 'start',
    glossary: [
      ['mežsargs', 'guarda-florestal'],
      ['Sveiks, pingvīn! / Andri!', 'vocativo: os masculinos em -s perdem o “s” (pingvīns → pingvīn!, Andris → Andri!)'],
      ['tu palīdzēsi, mēs iesim, mēs barosim', 'você vai ajudar, nós vamos, nós vamos alimentar (futuro)'],
      ['nebaro, nekliedz, neej', 'não alimente, não grite, não vá (imperativo negativo)'],
      ['Apsēdies! Turies pie margām!', 'Sente-se! Segure-se no corrimão! (imperativo de verbos reflexivos)'],
      ['alnis — aļņi', 'alce — alces (n → ņ)'],
      ['lācis — lāči', 'urso — ursos'],
      ['piecelties — lācis piecēlās', 'levantar-se — o urso se levantou'],
    ],
    nodes: {
      start: {
        emoji: '🌲',
        text: 'Līgatnes dabas takās Linu satika mežsargu Andri. “Sveiks, pingvīn! Šodien tu man palīdzēsi pabarot dzīvniekus,” teica Andris. “Bet vispirms klausies noteikumus.”',
        translation: 'Nas trilhas naturais de Līgatne, o Linu encontrou o guarda-florestal Andris. “Oi, pinguim! Hoje você vai me ajudar a alimentar os animais”, disse o Andris. “Mas primeiro escute as regras.”',
        choices: [
          { text: '“Es klausos, Andri!”', translation: '“Estou ouvindo, Andris!”', next: 'noteikumi' },
          { text: '“Noteikumi ir garlaicīgi. Ejam!”', translation: '“Regras são chatas. Vamos!”', next: 'steiga' },
        ],
      },
      steiga: {
        emoji: '😬',
        text: '“Pagaidi!” Andris teica stingri. “Mežā bez noteikumiem nevar. Apsēdies un klausies.”',
        translation: '“Espere!”, disse o Andris com firmeza. “Na floresta não dá para ficar sem regras. Sente-se e escute.”',
        choices: [{ text: '“Labi, labi. Es klausos.”', translation: '“Tá bom, tá bom. Estou ouvindo.”', next: 'noteikumi' }],
      },
      noteikumi: {
        emoji: '📋',
        text: '“Pirmais: nebaro dzīvniekus ar maizi. Otrais: nekliedz. Trešais: neej tuvu pie žoga, aiz kura dzīvo lāči.”',
        translation: '“Primeira: não alimente os animais com pão. Segunda: não grite. Terceira: não chegue perto da cerca atrás da qual vivem os ursos.”',
        choices: [
          { text: '“Skaidrs. Ko mēs darīsim vispirms?”', translation: '“Entendido. O que vamos fazer primeiro?”', next: 'alni' },
          {
            text: '“Labi! Es iedošu lāčiem maizi.”',
            translation: '“Beleza! Vou dar pão aos ursos.”',
            wrong: 'O Andris disse “nebaro dzīvniekus ar maizi” (não alimente os animais com pão) e “neej tuvu” (não chegue perto) dos ursos. O imperativo negativo com ne- proíbe as duas coisas!',
          },
        ],
      },
      alni: {
        emoji: '🫎',
        text: '“Vispirms mēs iesim pie aļņiem. Paņem šo spaini ar burkāniem.” Aļņi lēni un mierīgi nāca pie žoga.',
        translation: '“Primeiro vamos até os alces. Pegue este balde de cenouras.” Os alces vieram até a cerca devagar e tranquilos.',
        choices: [{ text: 'Linu uzmanīgi deva aļņiem burkānus.', translation: 'O Linu deu as cenouras aos alces com cuidado.', next: 'lacis' }],
      },
      lacis: {
        emoji: '🐻',
        text: '“Tagad paskaties uz to pusi, bet klusi,” čukstēja Andris. Starp kokiem gulēja liels brūns lācis. “Viņš tikko pamodās un ir ļoti izsalcis. Tūlīt es viņam iedošu zivis.”',
        translation: '“Agora olhe para aquele lado, mas em silêncio”, sussurrou o Andris. Entre as árvores estava deitado um grande urso-pardo. “Ele acabou de acordar e está com muita fome. Já vou dar peixes para ele.”',
        choices: [
          { text: '“Andri, vai es drīkstu palīdzēt?”', translation: '“Andris, eu posso ajudar?”', next: 'zivis' },
          { text: '“Es gribu viņu samīļot!” Linu skrēja pie žoga.', translation: '“Quero fazer carinho nele!” O Linu correu até a cerca.', next: 'final_zogs' },
        ],
      },
      zivis: {
        emoji: '🐟',
        text: '“Drīksti, bet paliec aiz manis. Turies pie margām, te ir slidens.” Andris iemeta zivis pār žogu, un lācis lēnām piecēlās.',
        translation: '“Pode, mas fique atrás de mim. Segure-se no corrimão, aqui escorrega.” O Andris jogou os peixes por cima da cerca, e o urso se levantou devagar.',
        choices: [
          { text: '“Viņš ēd zivis tāpat kā es!”', translation: '“Ele come peixe igualzinho a mim!”', next: 'final_bom' },
          {
            text: '“Tātad lācis vēl guļ.”',
            translation: '“Então o urso ainda está dormindo.”',
            wrong: 'O texto diz “lācis lēnām piecēlās”: o urso se LEVANTOU devagar (do reflexivo “piecelties”). Ele acordou com o cheiro dos peixes!',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: '“Paldies, Linu, tu biji lielisks palīgs!” teica Andris. “Nāc atkal vasarā, tad mēs kopā barosim mežacūkas.”',
        translation: '“Obrigado, Linu, você foi um ótimo ajudante!”, disse o Andris. “Volte no verão; aí nós vamos alimentar os javalis juntos.”',
        ending: { tone: 'bom', title: 'Ajudante da floresta', message: 'O Linu seguiu as regras, alimentou os alces e viu o urso comer de perto, com segurança.' },
      },
      final_zogs: {
        emoji: '🚫',
        text: 'Andris ātri satvēra Linu. “Stāvi! Lācis nav rotaļlieta!” Ar to ekskursija beidzās.',
        translation: 'O Andris agarrou o Linu depressa. “Pare! Urso não é brinquedo!” E ali o passeio acabou.',
        ending: { tone: 'neutro', title: 'Regra esquecida', message: 'O Linu esqueceu a terceira regra: “neej tuvu pie žoga” (não chegue perto da cerca). Com urso, só de longe!' },
      },
    },
  },
  {
    id: 'lv-h15',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Jāņu nakts pie Rāznas',
    emoji: '🔥',
    summary: 'Na Latgália, à beira do lago Rāzna, o Linu passa a noite de Jāņi com a Inese e o avô dela: coroa de carvalho, queijo, canções e fogueira.',
    cultural_context:
      'Os Jāņi, a festa do solstício de verão (noite de 23 para 24 de junho), são o feriado mais querido da Letônia: canta-se “līgo”, os homens usam coroas de folhas de carvalho e as mulheres de flores, come-se queijo com cominho, pula-se a fogueira e se procura a lendária “flor da samambaia”. O Rāzna, na Latgália, a “terra dos lagos azuis”, é o segundo maior lago do país; ali também se fala o latgaliano, língua regional reconhecida por lei.',
    start: 'start',
    glossary: [
      ['Vasals!', 'Oi! (em latgaliano; em letão padrão, “Sveiks!”)'],
      ['Jāņi, Jāņu nakts', 'a festa de São João letã, a noite de Jāņi'],
      ['tu svinēsi, mēs dziedāsim, tu būsi', 'você vai festejar, nós vamos cantar, você será (futuro)'],
      ['Paņem! Pin! Pārlec!', 'Pegue! Trance! Pule por cima! (imperativo)'],
      ['Apsēdies! Uzmanies! Nebaidies!', 'Sente-se! Cuidado! Não tenha medo! (imperativo de reflexivos)'],
      ['ozola vainags', 'coroa de folhas de carvalho'],
      ['Jāzep! Inese!', 'vocativo: Jāzeps → Jāzep!; os nomes em -e não mudam'],
      ['papardes zieds', 'a flor da samambaia (lendária: a samambaia não dá flor)'],
    ],
    nodes: {
      start: {
        emoji: '🌿',
        text: 'Latgalē, pie Rāznas ezera, Inese sagaida Linu: “Vasals, Linu! Tā latgalieši saka „sveiks”. Šovakar būs Jāņi, un tu svinēsi kopā ar mums!”',
        translation: 'Na Latgália, à beira do lago Rāzna, a Inese recebe o Linu: “Vasals, Linu! É assim que os latgalianos dizem ‘oi’. Hoje à noite é Jāņi, e você vai festejar com a gente!”',
        choices: [
          { text: '“Paldies, Inese! Ko man darīt?”', translation: '“Obrigado, Inese! O que eu faço?”', next: 'vainags' },
          { text: '“Es esmu noguris. Es iešu gulēt.”', translation: '“Estou cansado. Vou dormir.”', next: 'gulet' },
        ],
      },
      gulet: {
        emoji: '😴',
        text: '“Ko? Jāņu naktī neviens neguļ!” smejas Inese. “Kas guļ Jāņos, tas visu gadu būs miegains. Nāc!”',
        translation: '“O quê? Na noite de Jāņi ninguém dorme!”, ri a Inese. “Quem dorme em Jāņi vai passar o ano inteiro com sono. Vem!”',
        choices: [{ text: '“Labi, labi, es nākšu!”', translation: '“Tá bom, tá bom, eu vou!”', next: 'vainags' }],
      },
      vainags: {
        emoji: '🌼',
        text: 'Inese pin vainagu no pļavas ziediem. “Tev, Linu, pienākas ozola vainags, jo tu esi puisis. Paņem šos ozola zarus un pin pats!”',
        translation: 'A Inese trança uma coroa de flores do campo. “Para você, Linu, cabe uma coroa de carvalho, porque você é rapaz. Pegue estes galhos de carvalho e trance você mesmo!”',
        choices: [
          { text: 'Linu pin vainagu no ozola zariem.', translation: 'O Linu trança uma coroa com os galhos de carvalho.', next: 'siers' },
          {
            text: 'Linu pin vainagu no pļavas ziediem.',
            translation: 'O Linu trança uma coroa de flores do campo.',
            wrong: 'A Inese disse que o Linu, como rapaz (“puisis”), deve usar coroa de CARVALHO (“ozola vainags”) e mandou: “Paņem šos ozola zarus un pin pats!” As flores do campo são da coroa dela.',
          },
        ],
      },
      siers: {
        emoji: '🧀',
        text: 'Vectētiņš Jāzeps nes lielu, apaļu sieru ar ķimenēm. “Apsēdies, Linu, un nogaršo! Vēlāk mēs dziedāsim līgo dziesmas.”',
        translation: 'O avô Jāzeps traz um queijo grande e redondo com cominho. “Sente-se, Linu, e prove! Mais tarde vamos cantar as canções de līgo.”',
        choices: [{ text: '“Garšīgs! Paldies, Jāzep!”', translation: '“Delicioso! Obrigado, Jāzeps!”', next: 'dziesmas' }],
      },
      dziesmas: {
        emoji: '🎶',
        text: 'Visi sāk dziedāt: “Līgo, līgo!” Inese čukst: “Klausies un atkārto pēc manis. Nebaidies, neviens nesmiesies!”',
        translation: 'Todos começam a cantar: “Līgo, līgo!” A Inese sussurra: “Escute e repita depois de mim. Não tenha medo, ninguém vai rir!”',
        choices: [
          { text: 'Linu dzied līdzi: “Līgo!”', translation: 'O Linu canta junto: “Līgo!”', next: 'ugunskurs' },
          { text: 'Linu klusē, jo baidās kļūdīties.', translation: 'O Linu fica calado, porque tem medo de errar.', next: 'ugunskurs' },
        ],
      },
      ugunskurs: {
        emoji: '🔥',
        text: 'Pusnaktī pie ezera deg liels ugunskurs. Jāzeps saka: “Pārlec pār ugunskuru, bet uzmanies! Kurš pārlēks, tam būs laimīgs gads.”',
        translation: 'À meia-noite, perto do lago, arde uma grande fogueira. O Jāzeps diz: “Pule por cima da fogueira, mas cuidado! Quem pular vai ter um ano feliz.”',
        choices: [
          { text: 'Linu ieskrienas un pārlec pār uguni.', translation: 'O Linu toma impulso e pula por cima do fogo.', next: 'paparde' },
          {
            text: '“Jāzep, tu teici, ka lēkt ir aizliegts?”',
            translation: '“Jāzeps, você disse que pular é proibido?”',
            wrong: 'O Jāzeps disse “Pārlec!” (pule por cima!), um imperativo, e “uzmanies!” (cuidado!). Ele não proibiu nada: ao contrário, prometeu um ano feliz (“laimīgs gads”) para quem pular.',
          },
        ],
      },
      paparde: {
        emoji: '🌌',
        text: '“Tagad ejam mežā meklēt papardes ziedu!” saka Inese. “Tas zied tikai vienu nakti gadā. Turies man blakus, mežā ir tumšs.”',
        translation: '“Agora vamos à floresta procurar a flor da samambaia!”, diz a Inese. “Ela só floresce uma noite por ano. Fique do meu lado, na floresta está escuro.”',
        choices: [
          { text: 'Linu iet ar Inesi mežā.', translation: 'O Linu vai com a Inese para a floresta.', next: 'final_bom' },
          { text: 'Linu apguļas zālē un aizver acis.', translation: 'O Linu se deita na grama e fecha os olhos.', next: 'final_miegs' },
        ],
      },
      final_bom: {
        emoji: '🌅',
        text: 'Papardes ziedu viņi neatrada, bet atrada kaut ko labāku: saullēktu pār Rāznas ezeru. “Nākamgad mēs meklēsim atkal,” smaidīja Inese.',
        translation: 'A flor da samambaia eles não acharam, mas acharam coisa melhor: o nascer do sol sobre o lago Rāzna. “No ano que vem a gente procura de novo”, sorriu a Inese.',
        ending: { tone: 'bom', title: 'Acordado até o sol', message: 'O Linu passou a noite de Jāņi como manda a tradição: coroa, queijo, canções, fogueira e o nascer do sol.' },
      },
      final_miegs: {
        emoji: '😴',
        text: 'Linu aizmiga zālē un pamodās tikai pusdienlaikā. “Nu, Linu, tu visu gadu būsi miegains!” smējās Inese.',
        translation: 'O Linu adormeceu na grama e só acordou na hora do almoço. “Pois é, Linu, você vai passar o ano inteiro com sono!”, riu a Inese.',
        ending: { tone: 'neutro', title: 'Soneca de Jāņi', message: 'Na noite de Jāņi a tradição é não dormir até o nascer do sol. Quem dorme, dizem, passa o ano com sono!' },
      },
    },
  },
];
