import type { Accent } from '../types';

// O lituano padrão (bendrinė kalba) nasceu no fim do século XIX e no começo do XX, sobretudo das falas
// aukštaičių ocidentais da Suvalkija, e hoje é a fala da escola, da TV e das cidades. Os dialetos se
// dividem em dois grandes grupos: os aukštaičių (do «alto», o leste e o centro) e os žemaičių (da «terra
// baixa», o noroeste). Aqui: sotaques (kind 'sotaque'), os dialetos aukštaičių (kind 'dialeto') e as
// falas que muitos tratam como línguas próprias: o samogiciano, cujo estatuto é debatido, e o polonês e o
// russo das minorias da Lituânia (kind 'língua').

export const ACCENTS_LT: Accent[] = [
  // ───────────── SOTAQUES ─────────────
  {
    id: 'lt-vilnius',
    name: 'Vilnius (a capital e o lituano urbano)',
    kind: 'sotaque',
    region: 'Vilnius e arredores, no sudeste do país',
    country: 'LTU',
    subdivisions: ['LT-57', 'LT-58'],
    variant: 'lt-LT',
    speechLocale: 'lt-LT',
    emoji: '🏰',
    summary: 'A fala da capital, próxima do padrão que se ouve na TV e nos cursos, e a referência de pronúncia do app. É uma cidade de muitas línguas: ao lituano se somam o polonês, o russo e, na história, o iídiche.',
    features: [
      'Os dois tons das sílabas longas (o agudo, que cai, e o circunflexo, que sobe) quase não se distinguem na fala rápida da cidade; a tônica livre continua firme.',
      'No começo do século XX, o lituano era minoria na cidade, ao lado do polonês, do iídiche e do russo; hoje é a língua da maioria dos moradores.',
      'Na fala informal entram muletas como “nu” (então, bom) e “tipo” (tipo, assim), e a gíria “faina” (legal).',
      'O “jo” (é, aham) substitui o “taip” (sim) entre amigos.',
    ],
    examples: [
      ['Labas! Kaip sekasi?', 'Oi! Como vai?', 'a saudação de todo dia'],
      ['Jo, faina!', 'É, legal!', 'informal: “jo” = sim; “faina” = legal'],
      ['Nu, tipo, nežinau.', 'Bom, tipo, não sei.', 'muletas da fala jovem'],
    ],
    words: [
      ['jo', 'é, aham (informal)'],
      ['faina', 'legal, bacana (gíria)'],
      ['sostinė', 'a capital'],
      ['vilnietis', 'pessoa de Vilnius'],
    ],
  },
  {
    id: 'lt-diaspora',
    name: 'Lituano da diáspora (išeivija)',
    kind: 'sotaque',
    region: 'As comunidades de emigrantes: São Paulo (a Vila Zelina), Chicago, e hoje o Reino Unido e a Irlanda',
    country: 'BRA',
    subdivisions: ['BR-SP'],
    variant: 'lt-LT',
    speechLocale: 'lt-LT',
    emoji: '🧳',
    summary: 'A fala dos lituanos que emigraram e dos seus descendentes. No Brasil, a maior comunidade está em São Paulo, formada sobretudo por quem chegou no fim da década de 1920.',
    features: [
      'Em São Paulo, a Vila Zelina, na Zona Leste, virou o bairro dos lituanos, com paróquia, grupos de dança folclórica e aulas de língua para os descendentes.',
      'Quem saiu há muito tempo guarda palavras e expressões que na Lituânia já soam antigas.',
      'Palavras do país novo entram na fala com terminações lituanas: nos EUA ficaram famosas “karas” (carro) e “džiabas” (emprego), do inglês “car” e “job”.',
      'Depois de 2004, com a entrada da Lituânia na União Europeia, uma nova onda de emigração levou o lituano ao Reino Unido, à Irlanda e à Noruega.',
    ],
    examples: [
      ['Aš esu lietuvių kilmės.', 'Eu sou de origem lituana.', 'frase comum entre descendentes'],
      ['Mano seneliai atvyko į Braziliją.', 'Meus avós vieram para o Brasil.', 'lituano padrão'],
      ['Važiuoju karu į džiabą.', 'Vou de carro para o trabalho.', 'lituano dos EUA; no padrão: “Važiuoju mašina į darbą.”'],
    ],
    words: [
      ['išeivija', 'a emigração, a diáspora'],
      ['išeivis', 'emigrante'],
      ['bendruomenė', 'comunidade'],
      ['lietuvių kilmės', 'de origem lituana'],
    ],
  },

  // ───────────── DIALETOS (aukštaičių) ─────────────
  {
    id: 'lt-vakaru-aukstaiciu',
    name: 'Aukštaičių ocidental (Suvalkija e Kaunas)',
    kind: 'dialeto',
    region: 'O sudoeste e o centro: a Suvalkija (Marijampolė), Kaunas e as margens do rio Nemunas',
    country: 'LTU',
    subdivisions: ['LT-MR', 'LT-KU'],
    variant: 'lt-LT',
    speechLocale: 'lt-LT',
    emoji: '📚',
    summary: 'A base do lituano padrão: os criadores da língua escrita moderna, como o linguista Jonas Jablonskis e o escritor Vincas Kudirka, vinham da Suvalkija e tomaram a fala da região como modelo.',
    features: [
      'É a fala mais parecida com o padrão: vogais longas e curtas bem separadas e os dois tons claros.',
      'Divide-se em falas menores, como a dos kapsai e a dos zanavykai, na Suvalkija, e a da região de Kaunas.',
      'Guarda as terminações inteiras, sem encurtar o fim das palavras como o samogiciano.',
      'Os suvalkiečiai (o povo da Suvalkija) são o alvo de muitas piadas afetuosas sobre gente econômica.',
    ],
    examples: [
      ['Kaip gyveni?', 'Como vai a vida?', 'soa quase igual ao padrão'],
      ['Labas vakaras!', 'Boa noite!', 'igual ao padrão, com o primeiro “a” longo'],
      ['Važiuojam į Kauną.', 'Vamos para Kaunas.', 'na fala de todo o país, o “-e” de “važiuojame” cai'],
    ],
    words: [
      ['suvalkietis', 'pessoa da Suvalkija'],
      ['Sūduva', 'nome antigo da Suvalkija'],
      ['kaunietis', 'pessoa de Kaunas'],
      ['tarmė', 'dialeto'],
    ],
  },
  {
    id: 'lt-rytu-aukstaiciu',
    name: 'Aukštaičių oriental (Utena e Anykščiai)',
    kind: 'dialeto',
    region: 'O nordeste e o leste: Utena, Anykščiai, Molėtai, Zarasai e a região dos lagos',
    country: 'LTU',
    subdivisions: ['LT-UT'],
    variant: 'lt-LT',
    speechLocale: 'lt-LT',
    emoji: '🌲',
    summary: 'A fala da Aukštaitija, terra de lagos e pinheirais. O traço mais conhecido é o “an” e o “en” que viram “un” e “in”: “ranka” (mão) soa “runka”.',
    features: [
      'As sílabas “an, am” viram “un, um”, e “en, em” viram “in, im”: “ranka” → “runka”, “penki” (cinco) → “pinki”.',
      'Divide-se em várias falas menores, conhecidas pelo nome das cidades, como a dos uteniškiai (de Utena) e a dos anykštėnai (de Anykščiai).',
      'A região de Anykščiai é a terra de escritores clássicos, como Antanas Baranauskas, o autor do poema “Anykščių šilelis” (O pinheiral de Anykščiai), e Jonas Biliūnas.',
      'É ali que fica o Parque Nacional da Aukštaitija, com mais de cem lagos.',
    ],
    examples: [
      ['Mano runka šalta.', 'Minha mão está fria.', 'no padrão: “Mano ranka šalta.”'],
      ['Turiu pinkis obuolius.', 'Tenho cinco maçãs.', 'no padrão: “Turiu penkis obuolius.”'],
      ['Labas rytas!', 'Bom dia!', 'saudação da manhã, igual ao padrão'],
    ],
    words: [
      ['runka', 'mão (padrão: ranka)'],
      ['pinki', 'cinco (padrão: penki)'],
      ['aukštaitis', 'pessoa da Aukštaitija'],
      ['šilelis', 'pinheiral pequeno'],
    ],
  },
  {
    id: 'lt-dzuku',
    name: 'Dzūkų (aukštaičių do sul)',
    kind: 'dialeto',
    region: 'A Dzūkija, no sul: Alytus, Varėna, Druskininkai e Lazdijai, entre florestas de pinheiros',
    country: 'LTU',
    subdivisions: ['LT-AL'],
    variant: 'lt-LT',
    speechLocale: 'lt-LT',
    emoji: '🍄',
    summary: 'A fala dos dzūkai, famosa pelo “dz” e pelo “c”: onde o padrão tem “d” e “t” antes de “i” e “e”, eles dizem “dz” e “c”. Diz-se que o próprio apelido “dzūkas” vem desse jeito de falar.',
    features: [
      'O “d” mole vira “dz” e o “t” mole vira “c” [ts]: “diena” (dia) → “dziena”, “tik” (só) → “cik”. Os lituanos chamam isso de “dzūkavimas”.',
      'É uma fala cantada, e a Dzūkija é conhecida pelas canções populares (dainos).',
      'As florestas de pinheiros da região, como as de Varėna, são o paraíso de quem colhe cogumelos: “grybauti” é quase um esporte nacional ali.',
      'Druskininkai, na beira do rio Nemunas, é uma estância de águas termais desde o século XIX.',
    ],
    examples: [
      ['Laba dziena!', 'Bom dia!', 'no padrão: “Laba diena!”'],
      ['Ar cikrai?', 'Sério mesmo?', 'no padrão: “Ar tikrai?”'],
      ['Cėvas dzirba.', 'O pai trabalha.', 'no padrão: “Tėvas dirba.”'],
    ],
    words: [
      ['dzūkas', 'pessoa da Dzūkija'],
      ['dziena', 'dia (padrão: diena)'],
      ['grybauti', 'colher cogumelos'],
      ['grybas', 'cogumelo'],
    ],
  },

  // ───────────── LÍNGUAS (ou falas com estatuto próprio) ─────────────
  {
    id: 'lt-zemaiciu',
    name: 'Samogiciano (žemaičių kalba)',
    kind: 'língua',
    region: 'A Žemaitija (Samogícia), no noroeste: Telšiai, Plungė, Mažeikiai, Kretinga, Skuodas e o lago Plateliai',
    country: 'LTU',
    subdivisions: ['LT-TE', 'LT-22', 'LT-48', 'LT-45'],
    emoji: '🐻',
    summary: 'Os linguistas lituanos o tratam como um dos dois grandes grupos de dialetos do lituano, mas muitos samogicianos o defendem como língua própria; o debate continua. Tem grafia própria, com letras como ē, ī e ō, e a sua própria Wikipédia.',
    features: [
      'As falas samogicianas se classificam pelo jeito de dizer “duona” (pão): há os dounininkai (“douna”), os dūnininkai (“dūna”) e os donininkai (“dona”).',
      'Encurta as terminações: onde o padrão diz “vyras” (homem), muitos dizem algo como “vīrs”.',
      'A tônica tende a recuar para o começo da palavra, ao contrário do padrão, onde ela pode cair em qualquer sílaba.',
      'Um lituano de Vilnius costuma ter dificuldade de entender um samogiciano falando a fala da aldeia, e isso alimenta o argumento de quem o chama de língua.',
    ],
    examples: [
      ['Svēks!', 'Olá!', 'samogiciano; no padrão: “Sveikas!”'],
      ['douna', 'pão', 'samogiciano do norte; no padrão: “duona”'],
      ['Žemaitėjė', 'a Samogícia', 'samogiciano; no padrão: “Žemaitija”'],
    ],
    words: [
      ['žemaitis', 'samogiciano (a pessoa)'],
      ['Žemaitija', 'a Samogícia, em lituano padrão'],
      ['žemaičių kalba', 'a língua samogiciana'],
    ],
  },
  {
    id: 'lt-polones',
    name: 'Polonês da Lituânia (polszczyzna wileńska)',
    kind: 'língua',
    region: 'O sudeste, em volta de Vilnius: os distritos de Šalčininkai e de Vilnius, e bairros da capital',
    country: 'LTU',
    subdivisions: ['LT-42', 'LT-58', 'LT-57'],
    speechLocale: 'pl-PL',
    emoji: '🦅',
    summary: 'A maior minoria do país: no censo de 2021, perto de 6,5% dos moradores se declararam poloneses. No distrito de Šalčininkai, eles são a maioria.',
    features: [
      'O polonês da região de Vilnius tem sotaque próprio, com influência do bielorrusso e do lituano, e é reconhecível na Polônia.',
      'Nas aldeias, muita gente fala a “mowa prosta”, ou “po prostu” (“simplesmente”): uma fala do dia a dia mais próxima do bielorrusso, que mistura polonês e russo.',
      'Há escolas com ensino em polonês, e muitos são bilíngues ou trilíngues (polonês, lituano e russo).',
      'Entre 1920 e 1939, a região de Vilnius ficou sob a Polônia; é uma memória que lituanos e poloneses ainda contam de jeitos diferentes.',
    ],
    examples: [
      ['Dzień dobry!', 'Bom dia!', 'polonês'],
      ['Jak się masz?', 'Como vai?', 'polonês'],
      ['Rozmawiamy po prostu.', 'Falamos “po prostu” (o jeito simples, da aldeia).', 'como muitos chamam a própria fala mista'],
    ],
    words: [
      ['Wilno', 'Vilnius, em polonês'],
      ['wilnianin', 'pessoa de Vilnius, em polonês'],
      ['tutejszy', '“daqui”, como muitos se diziam antigamente'],
      ['po prostu', 'simplesmente; a fala local'],
    ],
  },
  {
    id: 'lt-russo',
    name: 'Russo da Lituânia',
    kind: 'língua',
    region: 'Visaginas, no nordeste, e bairros de Klaipėda e de Vilnius',
    country: 'LTU',
    subdivisions: ['LT-59', 'LT-20', 'LT-57'],
    speechLocale: 'ru-RU',
    emoji: '⚛️',
    summary: 'A língua materna de cerca de 5% dos moradores. Visaginas, construída a partir de 1975 para os trabalhadores da usina nuclear de Ignalina, é a cidade onde o russo ainda é a língua da maioria.',
    features: [
      'A usina de Ignalina foi desligada em 2009, como condição da entrada da Lituânia na União Europeia, e Visaginas perdeu boa parte dos empregos.',
      'Os mais velhos aprenderam o lituano tarde ou pouco; os jovens estudam lituano na escola e costumam ser bilíngues.',
      'Nomes lituanos de lugares e de repartições entram na fala russa com a declinação do russo: “в Висагинасе” (em Visaginas).',
      'Até 1990, o russo era a língua da administração soviética; depois da independência, o lituano passou a ser a única língua oficial.',
    ],
    examples: [
      ['Привет!', 'Oi!', 'russo'],
      ['Как дела?', 'Como vai?', 'russo'],
      ['Я живу в Висагинасе.', 'Eu moro em Visaginas.', 'russo; o nome lituano recebe a terminação russa do locativo'],
    ],
    words: [
      ['Висагинас', 'Visaginas, em russo'],
      ['по-литовски', 'em lituano'],
      ['Литва', 'a Lituânia, em russo'],
    ],
  },
];
