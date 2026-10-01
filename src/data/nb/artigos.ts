import type { ArticleSeed } from '../artigos';

/** Artigos culturais graduados do norueguês (bokmål) (ver src/data/artigos.ts). */
export const ARTIGOS_NB: ArticleSeed[] = [
  {
    id: 'nb-a-hytte',
    level: 'A1.1',
    title: 'Hytta',
    emoji: '🛖',
    paragraphs: [
      'Mange i Norge har en hytte. Hytta er ofte liten og gammel, og den ligger i skogen eller på fjellet.',
      'Der bor familien i ferien. Man går tur, leser og snakker sammen.',
    ],
    translation: [
      'Muita gente na Noruega tem uma cabana. A cabana é muitas vezes pequena e velha, e fica na floresta ou na montanha.',
      'Lá a família fica nas férias. Faz-se caminhada, lê-se e conversa-se junto.',
    ],
    glossary: [
      ['ofte', 'muitas vezes'],
      ['skogen', 'a floresta'],
      ['ferien', 'as férias'],
      ['tur', 'passeio, caminhada'],
    ],
    questions: [
      { q: 'Como costuma ser a cabana?', options: ['Grande e nova', 'Pequena e velha', 'Um apartamento na cidade'], answer: 1 },
      { q: 'Quando a família vai para a cabana?', options: ['Nas férias', 'Só no Natal', 'Nunca'], answer: 0 },
    ],
  },
  {
    id: 'nb-a-17-mai',
    level: 'A2.1',
    title: '17. mai',
    emoji: '🇳🇴',
    paragraphs: [
      'Den 17. mai feirer Norge grunnloven fra 1814. Det er nasjonaldagen, og hele landet har fest.',
      'Barna går i tog gjennom byen med flagg og musikk. Mange har på seg bunad, en fin drakt. Etterpå spiser barna is og pølser – ofte mye mer enn vanlig!',
    ],
    translation: [
      'Em 17 de maio a Noruega comemora a Constituição de 1814. É o dia nacional, e o país inteiro está em festa.',
      'As crianças desfilam pela cidade com bandeiras e música. Muitos vestem o bunad, um traje de festa. Depois as crianças comem sorvete e salsichas — muitas vezes bem mais do que o normal!',
    ],
    glossary: [
      ['mai', 'maio'],
      ['nasjonaldagen', 'o dia nacional'],
      ['musikk', 'música'],
      ['drakt', 'traje'],
      ['is', 'sorvete'],
      ['pølser', 'salsichas'],
    ],
    questions: [
      { q: 'O que se comemora em 17 de maio?', options: ['A Constituição de 1814', 'O Natal', 'O fim do inverno'], answer: 0 },
      { q: 'O que é o bunad?', options: ['Uma comida', 'Um traje de festa', 'Uma dança'], answer: 1 },
    ],
  },
  {
    id: 'nb-a-brunost',
    level: 'B1.1',
    title: 'Brunost og ostehøvelen',
    emoji: '🧀',
    paragraphs: [
      'Brunost er en brun og litt søt ost, laget av myse – det som blir igjen når man lager vanlig ost. Mange nordmenn spiser den på brødskiver til frokost, gjerne sammen med et glass melk.',
      'Brunosten skjæres i tynne skiver med en ostehøvel. Ostehøvelen er en norsk oppfinnelse: Thor Bjørklund fra Lillehammer fant den opp i 1925.',
    ],
    translation: [
      'O brunost é um queijo marrom e um pouco doce, feito de soro — o que sobra quando se faz queijo comum. Muitos noruegueses o comem em fatias de pão no café da manhã, de preferência com um copo de leite.',
      'O brunost é cortado em fatias finas com um fatiador de queijo. O fatiador é uma invenção norueguesa: Thor Bjørklund, de Lillehammer, o inventou em 1925.',
    ],
    glossary: [
      ['myse', 'soro do leite'],
      ['brødskiver', 'fatias de pão'],
      ['ostehøvel', 'fatiador de queijo'],
      ['norsk', 'norueguesa'],
      ['oppfinnelse', 'invenção'],
    ],
    forms: [
      ['fant', 'finne'],
    ],
    questions: [
      { q: 'De que é feito o brunost?', options: ['De leite de rena', 'De soro, o que sobra ao fazer queijo', 'De chocolate'], answer: 1 },
      { q: 'Com o que ele é cortado?', options: ['Com uma faca grande', 'Com um fatiador de queijo', 'Com uma serra'], answer: 1 },
      { q: 'Quem inventou o fatiador de queijo?', options: ['Thor Bjørklund, de Lillehammer', 'Um cozinheiro francês', 'Um rei'], answer: 0 },
    ],
  },
  {
    id: 'nb-a-nynorsk',
    level: 'B2.1',
    title: 'Bokmål og nynorsk',
    emoji: '✍️',
    paragraphs: [
      'Norge har to skriftspråk: bokmål og nynorsk. Bokmål bygger på det danske skriftspråket, som ble brukt i Norge i flere hundre år, mens nynorsk ble laget av Ivar Aasen på 1800-tallet, ut fra norske dialekter.',
      'Omtrent en av ti elever skriver nynorsk på skolen, og nynorsk står sterkest på Vestlandet. Alle elever lærer likevel begge skriftspråkene, og staten må bruke begge. Muntlig snakker de fleste nordmenn dialekt, uansett hvilket skriftspråk de bruker.',
    ],
    translation: [
      'A Noruega tem duas línguas escritas: o bokmål e o nynorsk. O bokmål se baseia na língua escrita dinamarquesa, usada na Noruega por várias centenas de anos, enquanto o nynorsk foi criado pelo linguista Ivar Aasen no século XIX, a partir dos dialetos noruegueses.',
      'Cerca de um em cada dez alunos escreve em nynorsk na escola, e o nynorsk é mais forte no oeste do país (Vestlandet). Mesmo assim, todos os alunos aprendem as duas, e o Estado precisa usar ambas. Na fala, a maioria dos noruegueses fala dialeto, qualquer que seja a língua escrita que use.',
    ],
    glossary: [
      ['bokmål', 'bokmål, uma das duas escritas do norueguês'],
      ['nynorsk', 'nynorsk, a outra escrita'],
      ['skriftspråket / skriftspråkene', 'a língua escrita / as línguas escritas'],
    ],
    forms: [
      ['må', 'måtte'],
    ],
    questions: [
      { q: 'Em que se baseia o bokmål?', options: ['No sueco', 'Na língua escrita dinamarquesa', 'No islandês antigo'], answer: 1 },
      { q: 'Quem criou o nynorsk?', options: ['O rei da Noruega', 'O linguista Ivar Aasen', 'Uma comissão dinamarquesa'], answer: 1 },
      { q: 'Onde o nynorsk é mais forte?', options: ['Em Oslo', 'No oeste (Vestlandet)', 'No extremo norte'], answer: 1 },
    ],
  },
  {
    id: 'nb-a-nansen',
    level: 'C1.1',
    title: 'Fridtjof Nansen',
    emoji: '🧭',
    paragraphs: [
      'Forskeren Fridtjof Nansen (1861–1930) krysset Grønland på ski i 1888 og lot seg senere drive med skipet “Fram” gjennom isen i Polhavet for å komme nærmest mulig Nordpolen.',
      'Etter første verdenskrig ble han Folkeforbundets høykommissær for flyktninger. Han fikk innført “Nansenpasset”, et reisedokument for statsløse flyktninger som hundretusener fikk nytte av. For dette arbeidet fikk han Nobels fredspris i 1922.',
    ],
    translation: [
      'O cientista e explorador Fridtjof Nansen (1861–1930) atravessou a Groenlândia de esqui em 1888 e depois se deixou levar à deriva com o navio “Fram” pelo gelo do oceano Ártico, para chegar o mais perto possível do Polo Norte.',
      'Depois da Primeira Guerra Mundial, tornou-se alto-comissário da Liga das Nações para os refugiados. Criou o “passaporte Nansen”, um documento de viagem para refugiados apátridas que beneficiou centenas de milhares de pessoas. Por esse trabalho recebeu o Nobel da Paz em 1922.',
    ],
    glossary: [
      ['lot', 'deixou'],
      ['verdenskrig', 'guerra mundial'],
      ['høykommissær', 'alto-comissário'],
      ['reisedokument', 'documento de viagem'],
    ],
    questions: [
      { q: 'Como Nansen atravessou a Groenlândia?', options: ['De esqui', 'De avião', 'De trenó puxado por renas'], answer: 0 },
      { q: 'Para quem era o “passaporte Nansen”?', options: ['Para exploradores', 'Para refugiados apátridas', 'Para diplomatas'], answer: 1 },
      { q: 'Por que ele recebeu o Nobel da Paz?', options: ['Pelo trabalho com os refugiados', 'Pela expedição ao Polo', 'Por um livro'], answer: 0 },
    ],
  },
];
