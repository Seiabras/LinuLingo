import type { UnitSeed } from '../types';

/**
 * Trilha do ladino das Dolomitas (idioma do vale de Badia): por enquanto as unidades do A1 e do A2
 * (o pacote está marcado como incompleto — ver `incomplete` em index.ts). As de B1 e B2 chegam
 * depois.
 */
export const UNITS_LLD: UnitSeed[] = [
  {
    id: 'lld-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Bun de y bëgnodüs!',
    emoji: '👋',
    card: {
      id: 'lld-c1',
      title: 'A língua dos vales das Dolomitas',
      emoji: '🏔️',
      history:
        'O ladino nasceu do latim falado nos Alpes depois da conquista romana, e o próprio nome vem de “latinus”. Hoje ele vive em cinco vales das Dolomitas, no norte da Itália: Badia e Gherdëina (Val Gardena), na província de Bolzano (Tirol do Sul); Fascia, no Trentino; e Fodom e Anpezo (Cortina d\'Ampezzo), na província de Belluno. Nos censos de 2006 a 2011, cerca de 41 mil pessoas declararam o ladino como língua materna, e ele é reconhecido oficialmente no Tirol do Sul e no Trentino. Cada vale tem o seu idioma escrito; existe também uma norma comum, o “Ladin Dolomitan”, mas aqui usamos o badiot, o ladino do vale de Badia, na grafia do Istitut Ladin Micurá de Rü, fundado em 1976 em San Martin de Tor.',
      culture_tip:
        'No vale de Badia, “bun de” é o bom-dia, “bun domisdé” a boa-tarde, “bona sëra” o cumprimento da noite e “bona nöt” a despedida antes de dormir. Para agradecer, o dicionário do vale traz “dilan”, mas você também vai ouvir “giulan” e “iolan”; no vizinho vale de Gherdëina se diz “de gra”. Entre amigos se usa “tö”; com desconhecidos, “os”, com o verbo no plural.',
      grammar_why:
        'O badiot diz o nome com o verbo “ter”: “iö á inom Ana” é, palavra por palavra, “eu tenho nome Ana”. E nas perguntas aparece quase sempre a partícula “pa”, que não se traduz: “Co aste pa inom?” (Como você se chama?), “Da olá este pa?” (De onde você é?).',
      grammar_examples: [
        ['Bun de! Iö á inom Ana.', 'Bom dia! Eu me chamo Ana.'],
        ['Co aste pa inom?', 'Como você se chama?'],
        ['Da olá este pa?', 'De onde você é?'],
        ['Bëgn, dilan! Y tö?', 'Bem, obrigado! E você?'],
      ],
      character_guide: [
        ['ë', 'uma vogal central, entre “a” e “e”', 'bëgn (bem), sëra (noite), ëra (ela)'],
        ['ö', '“e” dito com os lábios arredondados, como o “eu” francês', 'nöt (noite), incö (hoje)'],
        ['ü', '“i” dito com os lábios arredondados, como o “u” francês', 'düc (todos), nü (nove)'],
        ['c (antes de e, i) / ci', '“tch”, como em “tchau”', 'cité (cidade), ciasa (casa)'],
        ['ch (antes de e, i)', '“k”', 'chësc (este), chiló (aqui)'],
        ['gn', 'como o “nh” do português', 'bëgn (bem), compagn (amigo)'],
        ['y', 'a conjunção “e”, lida “i”', 'pan y ega (pão e água)'],
      ],
    },
    lessons: [
      {
        id: 'lld-u1-l1',
        title: 'Bun de, dilan, a s\'odëi!',
        kind: 'licao',
        words: ['bun de', 'bun domisdé', 'bona sëra', 'bona nöt', 'a s\'odëi', 'dilan'],
        cloze: [
          { sentence: '___, Maria! Co vára pa?', answer: 'Bun de', options: ['Bun de', 'A s\'odëi', 'Dilan'], translation: 'Bom dia, Maria! Como vai?' },
          { sentence: 'Al é sëra: ___ a düc!', answer: 'bona sëra', options: ['bona sëra', 'bun de', 'dilan'], translation: 'É noite: boa noite a todos!' },
          { sentence: '___ por la scincunda!', answer: 'Dilan', options: ['Dilan', 'Bun de', 'A s\'odëi'], translation: 'Obrigado pelo presente!' },
        ],
        voice: {
          bot: 'Bun de! Co vára pa?',
          botTranslation: 'Bom dia! Como vai?',
          expected: ['Bëgn, dilan! Y tö?', 'bëgn', 'dilan'],
          hint: 'Responda que vai bem e devolva a pergunta: “Bëgn, dilan! Y tö?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em ladino: um de manhã (“Bun de…”), um à tarde (“Bun domisdé…”) e uma despedida (“A s\'odëi”).',
      },
      {
        id: 'lld-u1-l2',
        title: 'Iö, tö, ël, ëra',
        kind: 'licao',
        words: ['iö', 'tö', 'ël', 'ëra', 'avëi inom', 'inom'],
        cloze: [
          { sentence: '___ á inom Sara.', answer: 'Iö', options: ['Iö', 'Tö', 'Ël'], translation: 'Eu me chamo Sara.' },
          { sentence: 'Co aste pa ___?', answer: 'inom', options: ['inom', 'ciasa', 'ega'], translation: 'Como você se chama?' },
          { sentence: '___ é n mi bun compagn.', answer: 'Ël', options: ['Ël', 'Iö', 'Tö'], translation: 'Ele é um bom amigo meu.' },
        ],
        voice: {
          bot: 'Ciao! Co aste pa inom?',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['Iö á inom Ana. Y tö?', 'iö á inom', 'y tö'],
          hint: 'Diga o seu nome com “Iö á inom…” e devolva a pergunta com “Y tö?”.',
        },
        communityPrompt: 'Apresente-se em ladino: diga o seu nome com “Iö á inom…” e pergunte o nome de alguém com “Co aste pa inom?”.',
      },
      {
        id: 'lld-u1-l3',
        title: 'Prova: bun de y bëgnodüs',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Bun de! Iö á inom Tone. Co aste pa inom? Da olá este pa?',
          botTranslation: 'Bom dia! Eu me chamo Tone. Como você se chama? De onde você é?',
          expected: ['Bun de! Iö á inom Lucia y iö sun da São Paulo.', 'iö á inom', 'iö sun da', 'bun de'],
          hint: 'Devolva o cumprimento (“Bun de!”), diga o nome com “Iö á inom…” e a cidade com “Iö sun da…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “Iö á inom…”, cidade com “Iö sun da…” e uma despedida.',
      },
    ],
  },
  {
    id: 'lld-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'La familia y la ciasa',
    emoji: '👪',
    card: {
      id: 'lld-c2',
      title: 'Le, la, i, les e o “ne… nia”',
      emoji: '🧭',
      history:
        'Os vales ladinos viveram séculos entre o mundo alemão, ao norte, e o italiano, ao sul, e muita gente ali cresce falando três línguas. Mesmo assim, a gramática ficou românica, e o ladino é parente próximo do romanche da Suíça e do friulano; se os três formam um grupo só, o “reto-românico”, é uma discussão antiga entre os linguistas, a chamada “questione ladina”. A primeira gramática do ladino foi escrita em 1833 por Micurá de Rü, um padre do vale de Badia, que dá nome ao instituto cultural dos ladinos.',
      culture_tip:
        'As Dolomitas são Patrimônio Mundial da UNESCO desde 2009. Ao entardecer, os paredões de pedra ficam cor-de-rosa e alaranjados: os ladinos chamam esse espetáculo de “enrosadira”.',
      grammar_why:
        'O artigo definido é “le” (masculino) e “la” (feminino), e vira “l\'” antes de vogal; no plural, “i” e “les”. O possessivo antes do nome vem sem artigo: “mi fre” (meu irmão), “mia ciasa” (minha casa). Para negar, o badiot põe “ne” antes do verbo e “nia” depois: “iö ne sá nia” (eu não sei).',
      grammar_examples: [
        ['Mi fre é plü gran co iö.', 'O meu irmão é maior do que eu.'],
        ['Al á n möt y na möta.', 'Ele tem um filho e uma filha.'],
        ['Le lat é sann.', 'O leite é saudável.'],
        ['Iö ne sá nia.', 'Eu não sei.'],
      ],
      character_guide: [
        ['n / na', 'o artigo indefinido: “n” (masculino) e “na” (feminino)', 'n fre, na so'],
        ['l\'', 'o artigo perde a vogal antes de vogal', 'l\'ega (a água), l\'edema (a semana)'],
      ],
    },
    lessons: [
      {
        id: 'lld-u2-l1',
        title: 'Mia familia',
        kind: 'licao',
        words: ['familia', 'uma', 'pere', 'fre', 'so', 'avëi'],
        cloze: [
          { sentence: 'Mi ___ é plü gran co iö.', answer: 'fre', options: ['fre', 'uma', 'ciasa'], translation: 'O meu irmão é maior do que eu.' },
          { sentence: 'Iö ___ dui fredesc.', answer: 'á', options: ['á', 'sun', 'vá'], translation: 'Eu tenho dois irmãos.' },
          { sentence: 'La uma y le ___.', answer: 'pere', options: ['pere', 'so', 'ega'], translation: 'A mãe e o pai.' },
        ],
        voice: {
          bot: 'Aste pa fredesc y sorus?',
          botTranslation: 'Você tem irmãos e irmãs?',
          expected: ['Sce, iö á n fre y na so.', 'iö á', 'fre', 'so'],
          hint: 'Responda com “Sce, iö á…” e diga quantos irmãos (fredesc) e irmãs (sorus) você tem.',
        },
        communityPrompt: 'Descreva a sua família em ladino: quantos irmãos (fredesc) e irmãs (sorus) você tem e como se chamam os seus pais.',
      },
      {
        id: 'lld-u2-l2',
        title: 'A ciasa',
        kind: 'licao',
        words: ['ciasa', 'ega', 'pan', 'lat', 'ciajó', 'plajëi'],
        cloze: [
          { sentence: 'Al á na bela ___.', answer: 'ciasa', options: ['ciasa', 'ega', 'pan'], translation: 'Ele tem uma casa bonita.' },
          { sentence: 'Iö bëri ___.', answer: 'ega', options: ['ega', 'pan', 'ciajó'], translation: 'Eu bebo água.' },
          { sentence: 'Iö mangi pan y ___.', answer: 'ciajó', options: ['ciajó', 'ega', 'lat'], translation: 'Eu como pão e queijo.' },
        ],
        voice: {
          bot: 'Ci mangeste pa?',
          botTranslation: 'O que você come?',
          expected: ['Iö mangi pan y ciajó.', 'iö mangi', 'pan', 'ciajó'],
          hint: 'Diga o que come com “Iö mangi…”.',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: “Iö mangi…” e “Iö bëri…”.',
      },
      {
        id: 'lld-u2-l3',
        title: 'Prova: familia y ciasa',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Aste pa na gran familia? Aste pa fredesc y sorus?',
          botTranslation: 'Você tem uma família grande? Você tem irmãos e irmãs?',
          expected: ['Sce, iö á dui fredesc y na so.', 'iö á', 'fredesc', 'familia'],
          hint: 'Diga quantos irmãos tem com “iö á…” (fredesc = irmãos, sorus = irmãs).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “iö á”, “iö sun” e “é”.',
      },
    ],
  },
  // ── A2.1 e A2.2 (10/10/2026) ──
  // Fontes: as palavras, as frases e as conjugações vêm do dicionário on-line do Istitut Ladin
  // Micurá de Rü (itavalbadia.ladinternet.it: verbetes e “schemi verbali”, consultados em
  // 10/10/2026). A regra do verbo em segundo lugar vem de Jan Casalicchio, “Il ladino e i suoi
  // idiomi” (capítulo 4 do material de ensino do CAI, caiscuola.cai.it). Os fatos culturais vêm da
  // Wikipédia: em inglês (“Alta Badia”, “Gran Risa”, “Val Badia”, “Ladin language”), em italiano
  // (“Lingua ladina”) e em alemão (“La Usc di Ladins”), consultadas em 10/10/2026.
  // Frases montadas (só com formas das tabelas verbais e as regras dos tópicos de gramática):
  // “Ci oste pa cumpré?” (oste, pergunta de orëi, + infinitivo, como “Oste te bëre valch?”);
  // “I oress n ciapel / na ciamëja, prëibel.” (i oress, como em “i oress savëi”, “i oress palsé”);
  // “Le ciapel costa vint euro y la ciamëja caranta.” (costa, de costé); “Al costa trënta euro.”
  // (como “al costa manco co diesc euro”); “I sun n dotur.” (como “al é n maester de vita”);
  // “Incö ne pói nia lauré.” (pói, forma de pergunta depois de “incö”, como “incö n'ál pa nia…”);
  // “I á me de vënter y i sun massa stanch.” (duas frases do dicionário unidas com “y”);
  // “Ci laur fejeste pa?” (fejeste, pergunta de fá, como em “Ci fejeste pa en domënia?”).
  {
    id: 'lld-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Le tëmp y i guanc',
    emoji: '🌦️',
    card: {
      id: 'lld-c3',
      title: 'O verbo em segundo lugar',
      emoji: '🔄',
      history:
        'Nos vales do norte, Badia e Gherdëina, o verbo fica sempre em segundo lugar na frase, como no alemão. Se a frase começa com “incö” (hoje), o verbo vem logo depois, antes do sujeito. Por muito tempo se achou que isso era um empréstimo do alemão. Mas o linguista Jan Casalicchio mostra que a regra ladina é diferente da alemã: a ordem básica é sujeito, verbo e objeto, e às vezes o verbo fica em outro lugar. Para a linguista Paola Benincà, todas as línguas românicas tinham uma regra assim na Idade Média; o ladino do norte guardou essa relíquia, talvez com a ajuda do vizinho alemão.',
      culture_tip:
        'A parte alta do vale de Badia, com Corvara, La Ila e Badia, é a estação de esqui Alta Badia. Quase todo dezembro desde 1990, a pista Gran Risa, em La Ila, recebe uma prova de slalom gigante da Copa do Mundo de esqui, uma das mais difíceis do circuito. No inverno faz frio de verdade: é a hora dos “guanc da d\'invern”, as roupas de inverno.',
      grammar_why:
        'Quando a frase começa com outra palavra que não o sujeito (incö, inier, d\'invern), o verbo vem em segundo lugar e ganha a forma da pergunta: “al é frëit” (está frio) vira “incö él frëit” (hoje está frio). No passado é igual: “al á plovü” vira “inier ál plovü” (ontem choveu).',
      grammar_examples: [
        ['Ci tëmp él pa incö?', 'Que tempo faz hoje?'],
        ['Incö él veramënter frëit.', 'Hoje está frio de verdade.'],
        ['Incö é le cil plëgn de niores.', 'Hoje o céu está cheio de nuvens.'],
        ['Le vënt sciüra.', 'O vento assobia.'],
        ['Incö él trënta gra.', 'Hoje faz trinta graus.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'lld-u3-l1',
        title: 'Ci tëmp él pa incö?',
        kind: 'licao',
        words: ['tëmp', 'plöia', 'nëi', 'sorëdl', 'frëit', 'cialt'],
        cloze: [
          { sentence: 'Ci ___ él pa incö?', answer: 'tëmp', options: ['tëmp', 'vënt', 'prisc'], translation: 'Que tempo faz hoje?' },
          { sentence: 'Al dá ___.', answer: 'sorëdl', options: ['sorëdl', 'plöia', 'niora'], translation: 'Faz sol (lit. “o sol brilha”).' },
          { sentence: 'D\'invern él dër ___.', answer: 'frëit', options: ['frëit', 'cialt', 'cer'], translation: 'No inverno faz muito frio.' },
        ],
        voice: {
          bot: 'Ci tëmp él pa incö?',
          botTranslation: 'Que tempo faz hoje?',
          expected: ['Incö él veramënter frëit.', 'incö él', 'frëit'],
          hint: 'Comece com “Incö él…” (o verbo vem antes do sujeito) e diga se está frio (frëit) ou quente (cialt). Também vale “Al dá sorëdl” (faz sol) ou “Al nëi” (está nevando).',
        },
        communityPrompt: 'Descreva em ladino o tempo de hoje onde você mora: comece com “Incö él…” e use frëit, cialt, plöia, nëi ou sorëdl.',
      },
      {
        id: 'lld-u3-l2',
        title: 'Jí a botëghes',
        kind: 'licao',
        words: ['guant', 'braia', 'cialzá', 'ciapel', 'cumpré', 'scioldi'],
        cloze: [
          { sentence: 'Chël ___ de lana me plej.', answer: 'guant', options: ['guant', 'prisc', 'vënt'], translation: 'Eu gosto daquela roupa de lã.' },
          { sentence: 'Al é massa ___!', answer: 'cer', options: ['cer', 'bunmarcé', 'cialt'], translation: 'É caro demais!' },
          { sentence: 'I n\'á degügn ___.', answer: 'scioldi', options: ['scioldi', 'cialzá', 'braia'], translation: 'Eu não tenho dinheiro nenhum.' },
        ],
        voice: {
          bot: 'Bun de! Ci oste pa cumpré?',
          botTranslation: 'Bom dia! O que você quer comprar?',
          expected: ['I oress n ciapel, prëibel.', 'i oress', 'prëibel'],
          hint: 'Peça com educação: “I oress…” (eu queria) + a coisa (n ciapel, na braia) + “prëibel”.',
        },
        communityPrompt: 'Escreva o que você está vestindo hoje e o que gostaria de comprar: “I oress n ciapel…”, “I oress na ciamëja…”.',
      },
      {
        id: 'lld-u3-l3',
        title: 'Prova: le tëmp y les botëghes',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Bun de! Le ciapel costa vint euro y la ciamëja caranta. Ci oste pa cumpré?',
          botTranslation: 'Bom dia! O chapéu custa vinte euros, e a camisa, quarenta. O que você quer comprar?',
          expected: ['I oress le ciapel, prëibel.', 'i oress', 'prëibel'],
          hint: 'Diga o que quer com “I oress…” e termine com “prëibel”. Se achar caro, diga “Al é massa cer!”.',
        },
        communityPrompt: 'Escreva uma lista de compras em ladino com o preço (le prisc) de cada coisa: “le ciapel: cincanta euro”, “i cialzá: cënt euro”. Diga o que é bunmarcé (barato), o que é cer (caro) e em que botëga (loja) você compra.',
      },
    ],
  },
  {
    id: 'lld-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Dal dotur',
    emoji: '🩺',
    card: {
      id: 'lld-c4',
      title: 'Mëssi, pó: dever e poder',
      emoji: '☝️',
      history:
        'No Tirol do Sul, o ladino é língua oficial: é usado nas repartições públicas, por escrito e oralmente, e, nas escolas das localidades ladinas, é língua de ensino ao lado do alemão e do italiano. Desde os anos 1970, os empregos no serviço público da província são divididos pela “proporção étnica”: a cada censo, de dez em dez anos, cada morador declara o seu grupo linguístico, e as vagas são distribuídas conforme esses números. Assim os ladinos têm lugar garantido no serviço público, de acordo com o tamanho do grupo.',
      culture_tip:
        'Todo sábado sai “La Usc di Ladins” (A Voz dos Ladinos), o principal jornal semanal dos vales ladinos, fundado em 1949 com o nome “Nos Ladins”. Cada vale escreve as suas notícias no seu próprio idioma: gherdëina, badiot, fascian, fodom e ampezan. E a sede da RAI em Bolzano faz programas de rádio e TV em ladino, com a marca Rai Ladinia.',
      grammar_why:
        '“Messëi” (dever, precisar) e “podëi” (poder) vêm com o infinitivo logo depois: “incö mëssi jí dal dotur” (hoje preciso ir ao médico), “pói mangé chësc pom?” (posso comer esta maçã?). E para dizer o que dói, o badiot usa “avëi me” (ter dor): “i á me de vënter” (estou com dor de barriga).',
      grammar_examples: [
        ['Incö mëssi jí dal dotur.', 'Hoje preciso ir ao médico.'],
        ['I á me de vënter.', 'Estou com dor de barriga.'],
        ['Al á me a n brac.', 'Ele está com dor num braço.'],
        ['Te mësses avëi paziënza.', 'Você precisa ter paciência.'],
        ['Pói mangé chësc pom?', 'Posso comer esta maçã?'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'lld-u4-l1',
        title: 'Le ce, les mans y les iames',
        kind: 'licao',
        words: ['ce', 'man', 'brac', 'iama', 'edl', 'vënter'],
        cloze: [
          { sentence: 'I á me de ___.', answer: 'vënter', options: ['vënter', 'ce', 'nes'], translation: 'Estou com dor de barriga.' },
          { sentence: 'Se lavé les ___.', answer: 'mans', options: ['mans', 'iames', 'edli'], translation: 'Lavar as mãos.' },
          { sentence: 'Ëra á i ___ rosc.', answer: 'edli', options: ['edli', 'brac', 'mans'], translation: 'Ela tem olhos castanhos.' },
        ],
        voice: {
          bot: 'Bun de! Co vára pa?',
          botTranslation: 'Bom dia! Como vai?',
          expected: ['I á me de vënter.', 'i á me', 'vënter'],
          hint: 'Diga o que dói com “I á me de…” (estou com dor de…) ou com “I á me a…”: “i á me a na iama” (uma perna está doendo).',
        },
        communityPrompt: 'Descreva o rosto de alguém em ladino: os olhos (edli), o nariz (nes) e a boca (bocia). Exemplos: “Ëra á i edli rosc.”, “Al á n nes lunch.”',
      },
      {
        id: 'lld-u4-l2',
        title: 'Dotur, maester, cogo',
        kind: 'licao',
        words: ['dotur', 'maester', 'cogo', 'lauré', 'contënt', 'stanch'],
        cloze: [
          { sentence: 'Ël é le pröm ___.', answer: 'cogo', options: ['cogo', 'dotur', 'maester'], translation: 'Ele é o chefe de cozinha (lit. “o primeiro cozinheiro”).' },
          { sentence: 'I sun massa ___.', answer: 'stanch', options: ['stanch', 'contënt', 'püre'], translation: 'Estou cansado demais.' },
          { sentence: 'I sun dër ___ da t\'odëi!', answer: 'contënt', options: ['contënt', 'stanch', 'tëma'], translation: 'Estou muito feliz de te ver!' },
        ],
        voice: {
          bot: 'Ciao! Ci laur fejeste pa?',
          botTranslation: 'Oi! Que trabalho você faz?',
          expected: ['I sun n dotur.', 'i sun n', 'dotur', 'maester', 'cogo'],
          hint: 'Diga a profissão com “I sun n…”: dotur (médico), maester (professor), cogo (cozinheiro).',
        },
        communityPrompt: 'Escreva onde você trabalha e como se sente no fim do dia: “I laori a…”, “I sun stanch” ou “I sun contënt”. Se tiver medo de alguma coisa no trabalho, use “i á tëma da…” (como em “al á tëma da joré”, ele tem medo de voar).',
      },
      {
        id: 'lld-u4-l3',
        title: 'Prova: dal dotur',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Bun de! Co vára pa? Tan de borjú aste pa?',
          botTranslation: 'Bom dia! Como vai? Quanta febre você tem?',
          expected: ['I á me de vënter y i sun massa stanch.', 'i á me', 'stanch'],
          hint: 'Diga o que dói (“I á me de…”) e como se sente (“i sun stanch”, “i sun püre”).',
        },
        communityPrompt: 'Escreva um bilhete para o trabalho: diga que está doente (“i sun püre”), que precisa ir ao médico (“incö mëssi jí dal dotur”, com messëi) e que hoje não pode trabalhar (“incö ne pói nia lauré”, com podëi).',
      },
    ],
  },
];
