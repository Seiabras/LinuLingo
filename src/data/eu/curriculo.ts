import type { UnitSeed } from '../types';

/**
 * Trilha do basco: as quatro unidades dos níveis A1 e A2 (o pacote está marcado como incompleto —
 * ver `incomplete` em index.ts). De B1 ao C2 chega depois.
 */
export const UNITS_EU: UnitSeed[] = [
  {
    id: 'eu-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Kaixo! Lehen urratsak',
    emoji: '👋',
    card: {
      id: 'eu-c1',
      title: 'Uma língua sem parentes',
      emoji: '🏔️',
      history:
        'O basco (euskara) é falado no País Basco, dos dois lados dos Pireneus: no norte da Espanha (Comunidade Autônoma do País Basco e parte de Navarra) e no sudoeste da França. É uma língua isolada: nenhum parentesco com outra língua viva foi comprovado. Ele já era falado na região antes da chegada das línguas indo-europeias, como o latim, e resistiu a elas; inscrições da época romana na Aquitânia trazem nomes que parecem ser de uma forma antiga do basco. Já se propôs parentesco com o ibérico antigo e com línguas do Cáucaso, mas nenhuma dessas hipóteses é aceita pelos linguistas. O primeiro livro impresso em basco saiu em 1545, e desde 1968 a Euskaltzaindia (a Academia da Língua Basca) desenvolve uma norma comum, o euskara batua, que é a usada aqui.',
      culture_tip:
        '“Kaixo” é o “oi” do dia a dia; “egun on” vale de manhã, “arratsalde on” à tarde e “gabon” à noite. Para agradecer, “eskerrik asko” ou, com mais ênfase, “mila esker” (“mil agradecimentos”). Com quase todo mundo se usa “zu” (você); existe também “hi”, bem íntimo, que muitos falantes quase não usam.',
      grammar_why:
        'O verbo vai no fim da frase: “Ane naiz” é, palavra por palavra, “Ane sou”. E a origem se diz com o sufixo -ko + o artigo -a grudados no nome da cidade: “Bilbokoa naiz” (sou de Bilbao), “São Paulokoa naiz” (sou de São Paulo).',
      grammar_examples: [
        ['Kaixo! Ane naiz.', 'Oi! Eu sou a Ane.'],
        ['Nola deitzen zara?', 'Como você se chama?'],
        ['Hura Bilbokoa da.', 'Ele (ou ela) é de Bilbao.'],
        ['Ondo, eskerrik asko. Eta zu?', 'Bem, obrigado. E você?'],
      ],
      character_guide: [
        ['z', 'um “s” comum, como o do português', 'zu (você), zer (o que)'],
        ['s', 'um “s” chiado, com a ponta da língua para cima, entre “s” e “x”', 'asko (muito), eskerrik'],
        ['x', 'como o “x” de “xícara”', 'kaixo (oi)'],
        ['tx', 'como o “tch” de “tchau”', 'txakur (cachorro), txiki (pequeno)'],
        ['tz / ts', 'um “ts” (tz com o “s” do z; ts com o “s” chiado)', 'deitzen (tz), atsegin (ts)'],
        ['h', 'no sul quase sempre mudo', 'hura, hiru (três)'],
        ['rr', 'o “r” vibrado, como o de “caro” dito várias vezes', 'eskerrik'],
      ],
    },
    lessons: [
      {
        id: 'eu-u1-l1',
        title: 'Kaixo, eskerrik asko, agur!',
        kind: 'licao',
        words: ['kaixo', 'egun on', 'arratsalde on', 'gabon', 'agur', 'eskerrik asko'],
        cloze: [
          { sentence: '___, Ane! Zer moduz?', answer: 'Kaixo', options: ['Kaixo', 'Agur', 'Barkatu'], translation: 'Oi, Ane! Como vai?' },
          { sentence: 'Gaua da: ___!', answer: 'gabon', options: ['gabon', 'egun on', 'agur'], translation: 'É noite: boa noite!' },
          { sentence: '___ asko!', answer: 'Eskerrik', options: ['Eskerrik', 'Kaixo', 'Agur'], translation: 'Muito obrigado!' },
        ],
        voice: {
          bot: 'Kaixo! Zer moduz?',
          botTranslation: 'Oi! Como vai?',
          expected: ['Ondo, eskerrik asko! Eta zu?', 'ondo', 'eskerrik asko'],
          hint: 'Responda que vai bem e devolva a pergunta: “Ondo, eskerrik asko! Eta zu?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em basco: um de manhã (“Egun on…”), um à tarde (“Arratsalde on…”) e uma despedida (“Agur”).',
      },
      {
        id: 'eu-u1-l2',
        title: 'Ni, zu, hura',
        kind: 'licao',
        words: ['ni', 'zu', 'hura', 'izen', 'deitu', 'izan'],
        cloze: [
          { sentence: '___ Ane naiz.', answer: 'Ni', options: ['Ni', 'Zu', 'Hura'], translation: 'Eu sou a Ane.' },
          { sentence: 'Nola deitzen ___?', answer: 'zara', options: ['zara', 'naiz', 'da'], translation: 'Como você se chama?' },
          { sentence: 'Hura Bilbokoa ___.', answer: 'da', options: ['da', 'naiz', 'zara'], translation: 'Ele (ou ela) é de Bilbao.' },
        ],
        voice: {
          bot: 'Kaixo! Nola deitzen zara?',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['Ane deitzen naiz. Eta zu?', 'deitzen naiz', 'eta zu'],
          hint: 'Diga o seu nome e depois “deitzen naiz”, e devolva a pergunta com “Eta zu?”.',
        },
        communityPrompt: 'Apresente-se em basco: diga o seu nome com “… deitzen naiz” e pergunte o nome de alguém com “Nola deitzen zara?”.',
      },
      {
        id: 'eu-u1-l3',
        title: 'Azterketa: lehen urratsak',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Kaixo! Ni Mikel naiz. Nola deitzen zara? Nongoa zara?',
          botTranslation: 'Oi! Eu sou o Mikel. Como você se chama? De onde você é?',
          expected: ['Kaixo! Lucia deitzen naiz eta São Paulokoa naiz.', 'deitzen naiz', 'kaixo'],
          hint: 'Devolva o cumprimento (“Kaixo!”), diga o nome com “… deitzen naiz” e a cidade com “…koa naiz”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “… deitzen naiz”, cidade com “…koa naiz” e uma despedida.',
      },
    ],
  },
  {
    id: 'eu-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Familia eta etxea',
    emoji: '👪',
    card: {
      id: 'eu-c2',
      title: 'O artigo no fim e o -k de quem faz',
      emoji: '🧭',
      history:
        'Por ser isolado, o basco não tem parentes para explicar suas palavras mais antigas, como “etxe” (casa), “ur” (água) ou “ama” (mãe). Mas convive há mais de dois mil anos com o latim e com as línguas que vieram dele, e tomou muitas palavras emprestadas: “katu” (gato) vem do latim “cattus” e “liburu” (livro), de “librum”. O caminho também foi ao contrário: o espanhol “izquierdo” e o português “esquerdo” vêm do basco “ezker” (esquerda).',
      culture_tip:
        'No basco, o nome do irmão e da irmã depende de quem fala: uma mulher chama a irmã de “ahizpa” e o irmão de “neba”; um homem chama a irmã de “arreba” e o irmão de “anaia”. Em muitas regiões, porém, “anaia” vale para o irmão de qualquer pessoa.',
      grammar_why:
        'O artigo definido é o sufixo -a no fim do grupo: “etxe” → “etxea” (a casa), “etxe txikia” (a casa pequena), com o adjetivo depois do nome. Quem faz a ação de um verbo com objeto ganha -k: “nik” (eu), “zuk” (você). Por isso se diz “Nik ura edaten dut” (eu bebo água), mas “Ni etxera noa” (eu vou para casa), sem objeto e sem -k. Esse sistema se chama ergativo.',
      grammar_examples: [
        ['Nire familia handia da.', 'A minha família é grande.'],
        ['Anaia bat dut.', 'Tenho um irmão.'],
        ['Nik ura edaten dut.', 'Eu bebo água.'],
        ['Ez dakit.', 'Não sei.'],
      ],
      character_guide: [
        ['-a', 'o artigo vai no fim da palavra', 'etxe → etxea (a casa), ur → ura (a água)'],
        ['-k', 'marca quem faz a ação de um verbo com objeto', 'ni → nik, zu → zuk'],
      ],
    },
    lessons: [
      {
        id: 'eu-u2-l1',
        title: 'Nire familia',
        kind: 'licao',
        words: ['familia', 'ama', 'aita', 'anaia', 'ahizpa', 'arreba'],
        cloze: [
          { sentence: 'Nire ___ Rosa deitzen da.', answer: 'ama', options: ['ama', 'aita', 'anaia'], translation: 'A minha mãe se chama Rosa.' },
          { sentence: 'Anaia bat ___.', answer: 'dut', options: ['dut', 'naiz', 'noa'], translation: 'Tenho um irmão.' },
          { sentence: 'Nire ___ Bilbokoa da.', answer: 'aita', options: ['aita', 'ahizpa', 'ama'], translation: 'O meu pai é de Bilbao.' },
        ],
        voice: {
          bot: 'Familia handia duzu?',
          botTranslation: 'Você tem uma família grande?',
          expected: ['Bai, anaia bat dut.', 'dut', 'bai'],
          hint: 'Responda com “Bai, … bat dut” (sim, tenho um/uma …): “anaia” ou “neba” para irmão, “arreba” ou “ahizpa” para irmã.',
        },
        communityPrompt: 'Descreva a sua família em basco: diga quem são os seus irmãos (anaia/neba, arreba/ahizpa) e os seus pais (ama, aita) com “… bat dut”.',
      },
      {
        id: 'eu-u2-l2',
        title: 'Etxean',
        kind: 'licao',
        words: ['etxe', 'ur', 'ogi', 'esne', 'gazta', 'kafe'],
        cloze: [
          { sentence: 'Nire ___ txikia da.', answer: 'etxea', options: ['etxea', 'ura', 'ogia'], translation: 'A minha casa é pequena.' },
          { sentence: 'Nik ura ___ dut.', answer: 'edaten', options: ['edaten', 'jaten', 'deitzen'], translation: 'Eu bebo água.' },
          { sentence: 'Esnea ___ da.', answer: 'zuria', options: ['zuria', 'beltza', 'gorria'], translation: 'O leite é branco.' },
        ],
        voice: {
          bot: 'Zer jaten duzu?',
          botTranslation: 'O que você come?',
          expected: ['Ogia jaten dut.', 'jaten dut'],
          hint: 'Diga o que come com “… jaten dut”.',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: “Nik … jaten dut” e “Nik … edaten dut”.',
      },
      {
        id: 'eu-u2-l3',
        title: 'Azterketa: familia eta etxea',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Nolakoa da zure familia?',
          botTranslation: 'Como é a sua família?',
          expected: ['Nire familia handia da. Anaia bat dut.', 'nire familia', 'dut'],
          hint: 'Diga se a família é grande ou pequena (“handia / txikia da”) e quem você tem (“… bat dut”).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “da”, “dut” e “deitzen da”.',
      },
    ],
  },
  {
    id: 'eu-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Eguraldia eta sentimenduak',
    emoji: '🌦️',
    card: {
      id: 'eu-c3',
      title: 'A chuva fina de Bilbao e a alegria do Aste Nagusia',
      emoji: '🌧️',
      history:
        'O sirimiri é a chuva fina e constante típica de Bilbao: cai tão de mansinho que parece não molhar, mas empapa. A palavra vem do basco “zirimiri” (também “txirimiri”), provavelmente de origem onomatopeica, e entrou no espanhol como “chirimiri”/“sirimiri” porque essa língua não tinha uma palavra própria para a chuva fina típica da costa cantábrica.',
      culture_tip:
        'A Aste Nagusia (Semana Grande) de Bilbao começa no primeiro sábado depois de 15 de agosto, com um foguete lançado da sacada do Teatro Arriaga. A mascote da festa é a Marijaia, uma figura de quatro metros com os braços erguidos que simboliza a alegria; no último dia, ela é queimada num espetáculo de fogos, encerrando os nove dias de festa.',
      grammar_why:
        'Para contar o que já aconteceu, o presente de “izan” (naiz, zara, da…) e de “egon” (nago, zaude, dago…) troca de forma: “naiz” vira “nintzen” (eu era/fui), “nago” vira “nengoen” (eu estava). É assim que se diz, por exemplo, que ontem fez frio ou que alguém estava cansado.',
      grammar_examples: [
        ['Atzo hotz egin zuen.', 'Ontem fez frio.'],
        ['Atzo nekatuta nengoen.', 'Ontem eu estava cansado.'],
        ['Gaur pozik nago.', 'Hoje estou feliz.'],
        ['Zuek gazte zineten.', 'Vocês eram jovens.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'eu-u3-l1',
        title: 'Zein eguraldi egiten du?',
        kind: 'licao',
        words: ['euri', 'elur', 'eguzki', 'haize', 'hotz', 'bero'],
        cloze: [
          { sentence: 'Gaur ___ egiten du.', answer: 'euria', options: ['euria', 'elurra', 'eguzkia'], translation: 'Hoje chove.' },
          { sentence: 'Neguan ___ egiten du.', answer: 'elurra', options: ['elurra', 'euria', 'haizea'], translation: 'No inverno neva.' },
          { sentence: 'Gaur ___ dago, eta bero egiten du.', answer: 'eguzkia', options: ['eguzkia', 'haizea', 'hotza'], translation: 'Hoje tem sol, e está calor.' },
        ],
        voice: {
          bot: 'Zer eguraldi egiten du gaur?',
          botTranslation: 'Que tempo faz hoje?',
          expected: ['Gaur hotz egiten du.', 'hotz', 'bero'],
          hint: 'Diga o tempo com “... egiten du”: “Gaur hotz egiten du.”.',
        },
        communityPrompt: 'Descreva o tempo de hoje em basco usando “gaur ... egiten du”, e diga como você está com “... nago”.',
      },
      {
        id: 'eu-u3-l2',
        title: 'Nola zaude?',
        kind: 'licao',
        words: ['pozik', 'triste', 'nekatuta', 'haserre', 'gose', 'buru'],
        cloze: [
          { sentence: 'Gaur ___ nago.', answer: 'pozik', options: ['pozik', 'triste', 'haserre'], translation: 'Hoje estou feliz.' },
          { sentence: 'Buruko mina dut, ___ nago.', answer: 'nekatuta', options: ['nekatuta', 'pozik', 'gose'], translation: 'Tenho dor de cabeça, estou cansado.' },
          { sentence: '___ naiz! Zerbait jan nahi dut.', answer: 'Gose', options: ['Gose', 'Haserre', 'Triste'], translation: 'Estou com fome! Quero comer algo.' },
        ],
        voice: {
          bot: 'Nola zaude gaur?',
          botTranslation: 'Como você está hoje?',
          expected: ['Nekatuta nago, baina pozik.', 'nekatuta', 'pozik'],
          hint: 'Diga como está com “... nago”.',
        },
        communityPrompt: 'Escreva três frases sobre como você está hoje, usando “... nago” e um sentimento (pozik, triste, nekatuta, haserre, gose).',
      },
      {
        id: 'eu-u3-l3',
        title: 'Azterketa: eguraldia eta sentimenduak',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Atzo nola zeunden, eta zein eguraldi egin zuen?',
          botTranslation: 'Como você estava ontem, e que tempo fez?',
          expected: ['Atzo nekatuta nengoen, eta hotz egin zuen.', 'nengoen', 'hotz'],
          hint: 'Use o passado de egon (“nengoen”) para dizer como estava, e descreva o tempo com “egin zuen”.',
        },
        communityPrompt: 'Escreva um parágrafo curto: como você estava ontem (“atzo ... nengoen”) e como está hoje (“gaur ... nago”).',
      },
    ],
  },
  {
    id: 'eu-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Hiria eta lanbideak',
    emoji: '🏙️',
    card: {
      id: 'eu-c4',
      title: 'Pastores bascos no Oeste americano e o mercado da Ribera',
      emoji: '🐑',
      history:
        'Desde a década de 1870, muitos bascos emigraram para o oeste dos Estados Unidos para trabalhar como artzainak (pastores de ovelhas) em Nevada, Idaho e outros estados da Grande Bacia; a cidade de Elko, em Nevada, e o sudoeste de Idaho se tornaram centros da vida basca na América. A partir de 1960, a Western Range Association recrutou centenas de bascos direto pelo consulado americano em Bilbao, com contratos de três anos. Hoje quase 8 mil moradores de Idaho se identificam como bascos.',
      culture_tip:
        'O Mercado da Ribera, em Bilbao, foi inaugurado em 1929, com projeto do arquiteto Pedro de Ispizúa: com cerca de 10.000 m² em dois andares, é descrito como um dos maiores mercados cobertos da Europa (as fontes não concordam se é, de fato, o maior).',
      grammar_why:
        'O caso dativo marca “a quem” ou “para quem”: junta-se -ri a nomes terminados em vogal e -i aos terminados em consoante. Verbos como “lagundu” (ajudar) e “itxaron” (esperar) costumam usar essa pessoa com -(r)i. E, para comparar lugares ou pessoas, o adjetivo ganha -ago e a referência leva “baino” (“que”).',
      grammar_examples: [
        ['Medikuak gaixoari laguntzen dio.', 'O médico ajuda o paciente.'],
        ['Bilbo Donostia baino handiagoa da.', 'Bilbao é maior que San Sebastián.'],
        ['Autobusari itxaroten diot.', 'Eu espero o ônibus.'],
        ['Sukaldariak jatetxean lan egiten du.', 'O cozinheiro trabalha no restaurante.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'eu-u4-l1',
        title: 'Hirian',
        kind: 'licao',
        words: ['plaza', 'merkatu', 'eliza', 'eskola', 'ospitale', 'aireportu'],
        cloze: [
          { sentence: 'Barazkiak ___ erosten ditut.', answer: 'merkatuan', options: ['merkatuan', 'elizan', 'eskolan'], translation: 'Compro verduras no mercado.' },
          { sentence: 'Haurrak ___ doaz.', answer: 'eskolara', options: ['eskolara', 'ospitalera', 'aireportura'], translation: 'As crianças vão para a escola.' },
          { sentence: 'Hegazkina ___ dago.', answer: 'aireportuan', options: ['aireportuan', 'plazan', 'elizan'], translation: 'O avião está no aeroporto.' },
        ],
        voice: {
          bot: 'Non dago ospitale hurbilena?',
          botTranslation: 'Onde é o hospital mais próximo?',
          expected: ['Ospitalea plazatik hurbil dago.', 'ospitale', 'plaza'],
          hint: 'Diga onde fica usando “... hurbil dago” (fica perto de).',
        },
        communityPrompt: 'Descreva o seu bairro em basco: quais destes lugares (plaza, merkatu, eliza, eskola, ospitale) você tem perto, e qual é o mais próximo da sua casa.',
      },
      {
        id: 'eu-u4-l2',
        title: 'Lanbideak',
        kind: 'licao',
        words: ['mediku', 'irakasle', 'sukaldari', 'artzain', 'idazle', 'hogei'],
        cloze: [
          { sentence: '___ak ospitalean lan egiten du.', answer: 'Medikuak', options: ['Medikuak', 'Irakasleak', 'Sukaldariak'], translation: 'O médico trabalha no hospital.' },
          { sentence: '___ak liburu berria idatzi du.', answer: 'Idazleak', options: ['Idazleak', 'Artzainak', 'Medikuak'], translation: 'O escritor escreveu um livro novo.' },
          { sentence: 'Nire anaiak ___ urte ditu.', answer: 'hogei', options: ['hogei', 'hamar', 'ehun'], translation: 'O meu irmão tem vinte anos.' },
        ],
        voice: {
          bot: 'Zein da zure lanbidea? Eta zure lagunarena?',
          botTranslation: 'Qual é a sua profissão? E a do seu amigo?',
          expected: ['Ni irakaslea naiz, eta nire laguna medikua da.', 'irakasle', 'mediku'],
          hint: 'Diga a sua profissão e a de um amigo com “... naiz/da”.',
        },
        communityPrompt: 'Escreva sobre três profissões (mediku, irakasle, sukaldari, artzain, idazle) e compare-as usando “-ago” e “baino”: qual você acha mais interessante que a outra?',
      },
      {
        id: 'eu-u4-l3',
        title: 'Azterketa: hiria eta lanbideak',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Zein hiri da handiagoa: Bilbo ala Donostia? Eta zein da zure hiria?',
          botTranslation: 'Qual cidade é maior: Bilbao ou San Sebastián? E como é a sua cidade?',
          expected: ['Bilbo Donostia baino handiagoa da.', 'baino', 'handiagoa'],
          hint: 'Use o comparativo “... baino handiagoa” para comparar as duas cidades.',
        },
        communityPrompt: 'Escreva cinco frases comparando lugares ou pessoas da sua cidade com “-ago” e “baino”, e pelo menos uma com o dativo “-ri” (como “laguntzen diot”).',
      },
    ],
  },
];
