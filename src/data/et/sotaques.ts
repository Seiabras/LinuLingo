import type { Accent } from '../types';

// Na Estônia, o estoniano padrão (kirjakeel), montado sobre os dialetos do norte, tomou conta da escola, da
// imprensa e da TV no século XX, e os dialetos tradicionais recuaram. Resistem sobretudo nas ilhas do oeste
// e no sudeste, onde as variedades do estoniano do sul (võro e seto) têm escrita e cultura próprias.
// Aqui: sotaques (kind 'sotaque'), dialetos que mudam também palavras e gramática (kind 'dialeto') e as
// línguas próprias faladas no país (kind 'língua').

export const ACCENTS_ET: Accent[] = [
  // ───────────── SOTAQUES ─────────────
  {
    id: 'et-tallinn',
    name: 'Tallinn e o estoniano padrão',
    kind: 'sotaque',
    region: 'Tallinn e o norte da Estônia (Harjumaa)',
    country: 'EST',
    subdivisions: ['EE-37'],
    variant: 'et-EE',
    speechLocale: 'et-EE',
    emoji: '🏰',
    summary: 'A fala da capital e do norte, a mais próxima do estoniano padrão, que nasceu dos dialetos do norte. É a que se ouve no rádio, na TV e nos cursos, e a referência de pronúncia do app.',
    features: [
      'As três quantidades bem nítidas: “sada” (cem), “saada!” (mande!) e “saada” (receber).',
      'A tônica sempre na primeira sílaba, com as sílabas seguintes mais fracas.',
      'No dia a dia, os pronomes curtos: “ma”, “sa”, “ta” no lugar de “mina”, “sina”, “tema”.',
      'Gírias jovens: “äge” (irado, incrível), “lahe” (legal), “tšau” (oi e tchau), e empréstimos do inglês, como “okei” e “sorri”.',
    ],
    examples: [
      ['See on nii äge!', 'Isso é irado!', 'gíria jovem: “äge” = incrível'],
      ['Tšau, kuidas läheb?', 'Oi, tudo bem?', '“tšau” serve para chegar e para ir embora'],
      ['Ma ei tea.', 'Eu não sei.', 'forma curta “ma” no lugar de “mina”'],
    ],
    words: [
      ['äge', 'irado, incrível (gíria)'],
      ['lahe', 'legal, bacana'],
      ['tšau', 'oi; tchau'],
      ['tallinlane', 'pessoa de Tallinn'],
    ],
  },
  {
    id: 'et-louna',
    name: 'O sotaque do sul (Tartu e o sudeste)',
    kind: 'sotaque',
    region: 'Tartu e o sul da Estônia',
    country: 'EST',
    subdivisions: ['EE-79', 'EE-84', 'EE-81', 'EE-64', 'EE-87'],
    variant: 'et-EE',
    speechLocale: 'et-EE',
    emoji: '🎓',
    summary: 'No sul, mesmo quem fala o padrão deixa escapar palavras e a melodia das variedades do estoniano do sul (lõunaeesti), como o võro e o mulgi. Tartu, a cidade universitária, é o coração da região.',
    features: [
      'O estoniano do sul já foi uma língua escrita à parte: o Novo Testamento saiu nele em 1686, antes da Bíblia completa no estoniano do norte (1739).',
      'Palavras do sul entram na fala do dia a dia, como “ummamuudu” (do seu próprio jeito; no padrão, “omamoodi”).',
      'Tartu se orgulha do “Tartu vaim” (o espírito de Tartu): a fama de cidade de estudantes, de livros e de ideias. A universidade é de 1632.',
    ],
    examples: [
      ['Tere tulemast Tartusse!', 'Bem-vindo a Tartu!', 'padrão; no sul, é comum misturar palavras locais'],
      ['Aitümma!', 'Obrigado!', 'forma do sul (võro e seto); no padrão, “Aitäh!”'],
    ],
    words: [
      ['ummamuudu', 'do seu próprio jeito (do võro)'],
      ['tartlane', 'pessoa de Tartu'],
      ['lõunaeesti', 'estoniano do sul'],
    ],
  },
  {
    id: 'et-vene-aktsent',
    name: 'Estoniano com sotaque russo',
    kind: 'sotaque',
    region: 'Ida-Virumaa (Narva, Sillamäe, Kohtla-Järve) e bairros de Tallinn',
    country: 'EST',
    subdivisions: ['EE-45', 'EE-784'],
    variant: 'et-EE',
    speechLocale: 'et-EE',
    emoji: '🗣️',
    summary: 'O estoniano de quem tem o russo como língua materna, muito ouvido no nordeste e em Tallinn. É um sotaque como qualquer outro: muita gente aprende o estoniano na escola ou no trabalho e o usa todo dia.',
    features: [
      'O “õ” costuma soar como o “ы” russo: parecido, mas com a língua mais alta.',
      'O “ö” e o “ü” podem virar “jo” e “ju”, como nas letras russas “ё” e “ю”.',
      'As três quantidades se confundem: a sobrelonga às vezes fica igual à longa.',
      'A tônica pode escapar da primeira sílaba, porque no russo ela é móvel.',
    ],
    examples: [
      ['Mul on hea sõber.', 'Eu tenho um bom amigo.', 'o “õ” de “sõber” pode soar como o “ы” russo'],
      ['Ma töötan Narvas.', 'Eu trabalho em Narva.', 'o “ö” de “töötan” pode soar quase “jo”'],
      ['Kas te räägite eesti keelt?', 'O senhor fala estoniano?', 'a tônica às vezes escorrega para o meio da palavra'],
    ],
  },
  // ───────────── DIALETOS ─────────────
  {
    id: 'et-saarte',
    name: 'Ilhas (saarte murre)',
    kind: 'sotaque',
    region: 'Saaremaa, Muhu e Hiiumaa, as ilhas do oeste',
    country: 'EST',
    subdivisions: ['EE-74', 'EE-39'],
    variant: 'et-EE',
    speechLocale: 'et-EE',
    emoji: '🏝️',
    summary: 'Os dialetos das ilhas do oeste soam “cantados” para o resto do país e ficaram famosos por um detalhe: em Saaremaa, o “õ” quase não existe.',
    features: [
      'No lugar do “õ” se diz “ö” (às vezes “e”): “sõber” vira “söber”, “õhtu” vira “öhtu”.',
      'Melodia mais subida e cantada, que os estonianos do continente reconhecem de longe.',
      'Muitas palavras do mar e da pesca, e empréstimos antigos do sueco e do alemão.',
      'Cada ilha tem seu gentílico e sua fama: os “saarlased” de Saaremaa, os “muhulased” de Muhu e os “hiidlased” de Hiiumaa, conhecidos pelos causos cheios de humor.',
    ],
    examples: [
      ['Tere, söber!', 'Oi, amigo!', 'padrão: “Tere, sõber!”'],
      ['Head öhtut!', 'Boa noite!', 'padrão: “Head õhtut!”'],
    ],
    words: [
      ['saarlane', 'pessoa de Saaremaa'],
      ['muhulane', 'pessoa de Muhu'],
      ['hiidlane', 'pessoa de Hiiumaa'],
    ],
  },
  // ───────────── LÍNGUAS ─────────────
  {
    id: 'et-voro',
    name: 'Võro (võro kiil)',
    kind: 'língua',
    region: 'O sudeste da Estônia: Võrumaa, Põlvamaa e parte de Valgamaa',
    country: 'EST',
    subdivisions: ['EE-87', 'EE-64', 'EE-81'],
    emoji: '🌲',
    summary: 'A variedade mais viva do estoniano do sul, com escrita, jornal, literatura e aulas próprias. O Estado a trata como variedade regional do estoniano; muitos falantes e linguistas a consideram uma língua à parte.',
    features: [
      'Harmonia vocálica, como no finlandês: as vogais de uma palavra combinam entre si (as de trás com as de trás, as da frente com as da frente).',
      'A oclusiva glotal, uma “travinha” na garganta, se escreve com “q”: “kalaq” (peixes).',
      'A letra “y” marca uma vogal que o padrão não tem, parecida com um “õ” mais fechado.',
      'Palavras próprias: “kõnõlõma” (falar; no padrão, “rääkima”), “mõts” (floresta; no padrão, “mets”).',
    ],
    examples: [
      ['Tere!', 'Oi!', 'igual ao padrão'],
      ['Aitümma!', 'Obrigado!', 'padrão: “Aitäh!”'],
      ['Kuis lätt?', 'Como vai?', 'padrão: “Kuidas läheb?”'],
    ],
    words: [
      ['kiil', 'língua (padrão: keel)'],
      ['mõts', 'floresta (padrão: mets)'],
      ['kalaq', 'peixes (padrão: kalad)'],
    ],
  },
  {
    id: 'et-seto',
    name: 'Seto (seto kiil)',
    kind: 'língua',
    region: 'Setomaa, no extremo sudeste da Estônia, junto da fronteira com a Rússia',
    country: 'EST',
    subdivisions: ['EE-732'],
    emoji: '🎶',
    summary: 'Os setos têm fala, costumes e cultura próprios: são cristãos ortodoxos, usam grandes joias de prata e cantam o leelo, canto em várias vozes que a UNESCO reconheceu como patrimônio imaterial da humanidade (2009). A fala é próxima do võro.',
    features: [
      'No leelo, uma cantora puxa os versos, muitas vezes improvisados, e o coro responde em várias vozes.',
      'Todo ano, no começo de agosto, a festa do Reino Seto (Seto Kuningriigi päev) escolhe, de brincadeira e a sério, quem representa o rei mítico Peko.',
      'Parte da Setomaa histórica fica do outro lado da fronteira, na Rússia.',
      'Como no võro, há harmonia vocálica e a oclusiva glotal escrita com “q”.',
    ],
    examples: [
      ['Aitümma!', 'Obrigado!', 'padrão: “Aitäh!”'],
      ['Seto leelo', 'o canto seto', 'patrimônio imaterial da UNESCO'],
    ],
    words: [
      ['leelo', 'o canto em várias vozes dos setos'],
      ['Setomaa', 'a terra dos setos'],
      ['Peko', 'o rei e deus da fertilidade das lendas setos'],
    ],
  },
  {
    id: 'et-vene',
    name: 'Russo (vene keel)',
    kind: 'língua',
    region: 'Ida-Virumaa (Narva, Sillamäe) e Tallinn',
    country: 'EST',
    subdivisions: ['EE-45', 'EE-784'],
    speechLocale: 'ru-RU',
    emoji: '🌉',
    summary: 'A língua materna de cerca de um quarto dos moradores da Estônia. Em Narva, na fronteira com a Rússia, a grande maioria fala russo em casa e na rua.',
    features: [
      'Chegou sobretudo com as migrações da época soviética; já os velhos-crentes (vanausulised), às margens do lago Peipus, vivem ali há cerca de três séculos.',
      'A única língua oficial do país é o estoniano, e muitos russófonos são bilíngues.',
      'Narva fica de frente para Ivangorod, na Rússia: os dois castelos se olham de um lado e do outro do rio.',
    ],
    examples: [
      ['Здравствуйте!', 'Olá! (formal)', 'russo'],
      ['Спасибо!', 'Obrigado!', 'russo'],
      ['Как дела?', 'Tudo bem?', 'russo'],
    ],
    words: [
      ['vene keel', 'a língua russa, em estoniano'],
      ['venelane', 'russo (a pessoa)'],
      ['vanausulised', 'os velhos-crentes do lago Peipus'],
    ],
  },
  {
    id: 'et-rootsi',
    name: 'Sueco da costa (rannarootsi)',
    kind: 'língua',
    region: 'Ilhas e litoral do noroeste: Vormsi, Ruhnu e Noarootsi',
    country: 'EST',
    subdivisions: ['EE-907', 'EE-689', 'EE-441'],
    speechLocale: 'sv-SE',
    emoji: '⛵',
    summary: 'Por séculos, os suecos da Estônia (rannarootslased) viveram nas ilhas e na costa do noroeste. Quase todos partiram para a Suécia em 1944, na Segunda Guerra; hoje a língua vive nos nomes de lugares, em associações culturais e em aulas.',
    features: [
      'Os lugares têm nome sueco: Vormsi é Ormsö, Ruhnu é Runö e Noarootsi é Nuckö.',
      'Os dialetos eram arcaicos, bem diferentes do sueco de Estocolmo.',
      'A lei de autonomia cultural de 1925 reconhecia os suecos como minoria nacional.',
    ],
    examples: [
      ['Hej!', 'Oi!', 'sueco'],
      ['Tack!', 'Obrigado!', 'sueco'],
    ],
    words: [
      ['rannarootslane', 'sueco da costa estoniana'],
      ['Ormsö', 'Vormsi, em sueco'],
      ['Runö', 'Ruhnu, em sueco'],
    ],
  },
];
