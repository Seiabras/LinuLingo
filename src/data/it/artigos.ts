import type { ArticleSeed } from '../artigos';

/** Artigos culturais graduados do italiano (ver src/data/artigos.ts). */
export const ARTIGOS_IT: ArticleSeed[] = [
  {
    id: 'it-a-domenica',
    level: 'A1.1',
    title: 'La domenica dai nonni',
    emoji: '🍝',
    paragraphs: [
      'In Italia, la famiglia è molto importante. La domenica, figli e nipoti vanno a casa dei nonni.',
      'La nonna cucina e tutti mangiano insieme a un grande tavolo. Si mangia e si parla molto: il pranzo può durare ore!',
    ],
    translation: [
      'Na Itália, a família é muito importante. No domingo, filhos e netos vão à casa dos avós.',
      'A avó cozinha e todos comem juntos numa mesa grande. Come-se e conversa-se muito: o almoço pode durar horas!',
    ],
    glossary: [
      ['importante', 'importante'],
      ['domenica', 'domingo'],
      ['tutti', 'todos'],
      ['insieme', 'juntos'],
      ['durare', 'durar'],
      ['ore', 'horas'],
    ],
    forms: [
      ['vanno', 'andare'],
      ['può', 'potere'],
    ],
    questions: [
      { q: 'Aonde a família vai no domingo?', options: ['Ao restaurante', 'À casa dos avós', 'À praia'], answer: 1 },
      { q: 'Quem cozinha?', options: ['A avó', 'O pai', 'As crianças'], answer: 0 },
    ],
  },
  {
    id: 'it-a-befana',
    level: 'A2.1',
    title: 'La Befana',
    emoji: '🧹',
    paragraphs: [
      'La notte tra il 5 e il 6 gennaio, in Italia arriva la Befana: una vecchia signora gentile che vola su una scopa. Entra nelle case dal camino e lascia regali ai bambini.',
      'I bambini appendono una calza vuota. La mattina la trovano piena di dolci, se sono stati buoni; se sono stati cattivi, trovano il carbone — che spesso è uno zucchero nero. Il 6 gennaio è anche la festa dell\'Epifania, e finiscono le vacanze di Natale.',
    ],
    translation: [
      'Na noite de 5 para 6 de janeiro, na Itália chega a Befana: uma senhora velha e gentil que voa numa vassoura. Entra nas casas pela chaminé e deixa presentes para as crianças.',
      'As crianças penduram uma meia vazia. De manhã a encontram cheia de doces, se foram boazinhas; se foram malcriadas, encontram carvão — que muitas vezes é um açúcar preto. O 6 de janeiro é também a festa da Epifania, e acabam as férias de Natal.',
    ],
    glossary: [
      ['notte', 'noite'],
      ['signora', 'senhora'],
      ['scopa', 'vassoura'],
      ['appendono', 'penduram'],
      ['mattina', 'manhã'],
      ['dolci', 'doces'],
      ['zucchero', 'açúcar'],
      ['nero', 'preto'],
      ['festa', 'festa'],
      ['vacanze', 'férias'],
    ],
    questions: [
      { q: 'Como a Befana viaja?', options: ['Num trenó', 'Numa vassoura', 'De trem'], answer: 1 },
      { q: 'O que ganham as crianças malcriadas?', options: ['Carvão (muitas vezes de açúcar)', 'Nada', 'Uma bicicleta'], answer: 0 },
      { q: 'O que termina em 6 de janeiro?', options: ['O ano escolar', 'As férias de Natal', 'O verão'], answer: 1 },
    ],
  },
  {
    id: 'it-a-palio',
    level: 'B1.1',
    title: 'Il Palio di Siena',
    emoji: '🐎',
    paragraphs: [
      'Il 2 luglio e il 16 agosto, Siena si ferma per il Palio: una corsa di cavalli nella piazza del Campo, al centro della città. La città è divisa in diciassette contrade, cioè quartieri, ognuna con i suoi colori e la sua bandiera.',
      'Ogni volta corrono dieci contrade. I fantini montano senza sella e devono fare tre giri della piazza: la corsa dura circa novanta secondi. Vince il cavallo che arriva primo, anche senza fantino! La contrada vincitrice riceve il “drappellone”, un grande stendardo dipinto, e festeggia per giorni.',
    ],
    translation: [
      'Em 2 de julho e em 16 de agosto, Siena para por causa do Palio: uma corrida de cavalos na praça do Campo, no centro da cidade. A cidade é dividida em dezessete “contrade”, isto é, bairros, cada uma com suas cores e sua bandeira.',
      'Em cada corrida disputam dez contrade. Os jóqueis montam sem sela e precisam dar três voltas na praça: a corrida dura cerca de noventa segundos. Ganha o cavalo que chega primeiro, mesmo sem jóquei! A contrada vencedora recebe o “drappellone”, um grande estandarte pintado, e festeja por dias.',
    ],
    glossary: [
      ['luglio', 'julho'],
      ['agosto', 'agosto'],
      ['fantini', 'jóqueis'],
      ['fantino', 'jóquei'],
      ['montano', 'montam'],
      ['sella', 'sela'],
      ['giri', 'voltas'],
      ['drappellone', 'o estandarte do Palio'],
      ['dipinto', 'pintado'],
      ['festeggia', 'festeja'],
    ],
    forms: [
      ['devono', 'dovere'],
    ],
    questions: [
      { q: 'Quanto dura a corrida?', options: ['Cerca de noventa segundos', 'Uma hora', 'O dia inteiro'], answer: 0 },
      { q: 'O que são as contrade?', options: ['Cavalos', 'Bairros da cidade', 'Igrejas'], answer: 1 },
      { q: 'Um cavalo sem jóquei pode ganhar?', options: ['Não, é desclassificado', 'Sim', 'Só se a contrada pedir'], answer: 1 },
    ],
  },
  {
    id: 'it-a-venezia',
    level: 'B2.1',
    title: 'Venezia e l\'acqua alta',
    emoji: '🌊',
    paragraphs: [
      'Venezia è costruita su più di cento isole, in mezzo a una laguna. Da secoli, in autunno e in inverno, la città conosce l\'“acqua alta”: quando la marea sale più del normale, spinta dal vento di scirocco, l\'acqua invade le calli e piazza San Marco, che è uno dei punti più bassi.',
      'Nel novembre del 2019 la marea ha raggiunto 187 centimetri, uno dei livelli più alti mai registrati, e ha causato danni enormi. Per proteggere la città è stato costruito il MOSE, un sistema di barriere mobili alle bocche della laguna, che si alzano quando è prevista una marea forte. Le barriere sono state sollevate per la prima volta nell\'ottobre del 2020.',
      'Il MOSE ha fermato molte maree, ma non risolve tutti i problemi: è costato miliardi di euro e c\'è chi teme che, a lungo andare, cambi l\'equilibrio della laguna.',
    ],
    translation: [
      'Veneza é construída sobre mais de cem ilhas, no meio de uma laguna. Há séculos, no outono e no inverno, a cidade conhece a “acqua alta”: quando a maré sobe acima do normal, empurrada pelo vento siroco, a água invade as ruelas e a praça de São Marcos, que é um dos pontos mais baixos.',
      'Em novembro de 2019 a maré chegou a 187 centímetros, um dos níveis mais altos já registrados, e causou danos enormes. Para proteger a cidade foi construído o MOSE, um sistema de barreiras móveis nas entradas da laguna, que se erguem quando se prevê uma maré forte. As barreiras foram levantadas pela primeira vez em outubro de 2020.',
      'O MOSE deteve muitas marés, mas não resolve todos os problemas: custou bilhões de euros, e há quem tema que, com o tempo, ele mude o equilíbrio da laguna.',
    ],
    glossary: [
      ['spinta', 'empurrada'],
      ['scirocco', 'siroco, vento quente do sudeste'],
      ['invade', 'invade'],
      ['punti', 'pontos'],
      ['danni', 'danos'],
      ['barriere', 'barreiras'],
      ['equilibrio', 'equilíbrio'],
    ],
    questions: [
      { q: 'O que é a “acqua alta”?', options: ['Uma chuva forte', 'A maré acima do normal que invade a cidade', 'Um festival de verão'], answer: 1 },
      { q: 'O que é o MOSE?', options: ['Um museu', 'Um sistema de barreiras móveis', 'Um barco'], answer: 1 },
      { q: 'Qual preocupação o texto menciona?', options: ['Que o MOSE mude o equilíbrio da laguna', 'Que os turistas parem de vir', 'Que as ilhas afundem em um ano'], answer: 0 },
    ],
  },
  {
    id: 'it-a-dante',
    level: 'C1.1',
    title: 'Dante, padre della lingua',
    emoji: '🪶',
    paragraphs: [
      'Dante Alighieri nacque a Firenze nel 1265. Coinvolto nelle lotte politiche della sua città, nel 1302 fu condannato all\'esilio e non vi fece mai ritorno: morì a Ravenna nel 1321, dove ancora oggi si trova la sua tomba.',
      'Durante l\'esilio compose la “Commedia” — l\'aggettivo “Divina” le fu aggiunto più tardi — il viaggio immaginario del poeta attraverso l\'Inferno, il Purgatorio e il Paradiso. La scelta di scriverla non in latino, ma nel volgare fiorentino, fu decisiva: nei secoli successivi quella lingua divenne la base dell\'italiano letterario, e per questo Dante viene chiamato “padre della lingua italiana”.',
      'Dal 2020 il 25 marzo, data in cui secondo gli studiosi comincia il viaggio della Commedia, si celebra il Dantedì, la giornata nazionale dedicata al poeta.',
    ],
    translation: [
      'Dante Alighieri nasceu em Florença em 1265. Envolvido nas lutas políticas da sua cidade, em 1302 foi condenado ao exílio e nunca mais voltou: morreu em Ravena em 1321, onde até hoje fica o seu túmulo.',
      'Durante o exílio compôs a “Comédia” — o adjetivo “Divina” foi acrescentado depois — a viagem imaginária do poeta pelo Inferno, pelo Purgatório e pelo Paraíso. A escolha de escrevê-la não em latim, mas no vulgar florentino, foi decisiva: nos séculos seguintes essa língua se tornou a base do italiano literário, e por isso Dante é chamado de “pai da língua italiana”.',
      'Desde 2020, em 25 de março, data em que segundo os estudiosos começa a viagem da Comédia, celebra-se o Dantedì, o dia nacional dedicado ao poeta.',
    ],
    glossary: [
      ['coinvolto', 'envolvido'],
      ['esilio', 'exílio'],
      ['aggiunto', 'acrescentado'],
      ['poeta', 'poeta'],
      ['dedicata', 'dedicada'],
    ],
    forms: [
      ['nacque', 'nascere'],
      ['fu', 'essere'],
      ['fece', 'fare'],
    ],
    questions: [
      { q: 'Por que Dante é chamado de “pai da língua italiana”?', options: ['Porque escreveu uma gramática', 'Porque escreveu a Comédia no vulgar florentino, que virou a base do italiano literário', 'Porque foi professor de latim'], answer: 1 },
      { q: 'Onde Dante morreu?', options: ['Em Florença', 'Em Ravena', 'Em Roma'], answer: 1 },
      { q: 'O que é o Dantedì?', options: ['O dia nacional dedicado a Dante, em 25 de março', 'Um prêmio de poesia', 'O aniversário de Florença'], answer: 0 },
    ],
  },
];
