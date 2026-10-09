import type { StorySeed } from '../types';
// Histórias 3 e 4 (A2.1 e A2.2) acrescentadas depois das duas originais do A1.

/** Histórias interativas do esloveno — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_SL: StorySeed[] = [
  {
    id: 'sl-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Živjo v Ljubljani',
    emoji: '👋',
    summary: 'Você conhece Nina na Ponte Tripla, no centro de Liubliana, e faz a sua primeira conversa em esloveno.',
    cultural_context: 'A Ponte Tripla (Tromostovje), sobre o rio Ljubljanica, é um dos cartões-postais de Liubliana, a capital da Eslovênia; o conjunto foi desenhado pelo arquiteto Jože Plečnik.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Živjo! Ime mi je Nina. Kako si?',
        translation: 'Oi! Eu me chamo Nina. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Dobro, hvala! Pa ti?', translation: 'Bem, obrigado! E você?', next: 'dobro' },
          { text: 'Nasvidenje!', translation: 'Até logo!', wrong: 'Nina acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      dobro: {
        text: 'Tudi jaz sem dobro! Od kod si?',
        translation: 'Eu também estou bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Sem iz São Paula.', translation: 'Sou de São Paulo.', next: 'final_bom' },
          { text: 'Pijem vodo.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Sem iz…”.' },
        ],
      },
      final_bom: {
        text: 'Super! Dobrodošel v Ljubljani!',
        translation: 'Que legal! Bem-vindo a Liubliana!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Dober začetek!', message: 'Nina sorri: você fez a sua primeira conversa em esloveno.' },
      },
    },
    glossary: [
      ['živjo', 'oi'],
      ['kako si?', 'como vai?'],
      ['sem iz', 'eu sou de'],
      ['dobrodošel', 'bem-vindo (a uma mulher: dobrodošla)'],
    ],
  },
  {
    id: 'sl-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Nedeljsko kosilo',
    emoji: '👪',
    summary: 'Luka, um amigo de Maribor, pergunta pela sua família e convida você para o almoço de domingo com a família dele.',
    cultural_context: 'Maribor, a segunda maior cidade da Eslovênia, tem uma videira que o Guinness registra como a mais velha do mundo ainda dando uvas, com mais de 400 anos.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Živjo! Imaš brata ali sestro?',
        translation: 'Oi! Você tem irmão ou irmã?',
        emoji: '📱',
        choices: [
          { text: 'Da, imam brata in sestro.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'druzina' },
          { text: 'Moja hiša je velika.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “imam…”.' },
        ],
      },
      druzina: {
        text: 'Super! Bi prišel v nedeljo na kosilo?',
        translation: 'Que legal! Você viria almoçar no domingo?',
        emoji: '🍽️',
        choices: [
          { text: 'Da, hvala lepa!', translation: 'Sim, muito obrigado!', next: 'final_bom' },
          { text: 'Sem iz São Paula.', translation: 'Sou de São Paulo.', wrong: 'Luka fez um convite: responda com “da” ou “ne, hvala”.' },
        ],
      },
      final_bom: {
        text: 'Odlično! Moja mama bo spekla potico.',
        translation: 'Ótimo! A minha mãe vai assar uma potica (rosca de massa doce enrolada com recheio de nozes).',
        emoji: '🍰',
        ending: { tone: 'bom', title: 'Vabilo!', message: 'Você foi convidado para o almoço de domingo com a família de Luka.' },
      },
    },
    glossary: [
      ['brat / sestra', 'irmão / irmã'],
      ['imam', 'eu tenho'],
      ['da', 'sim'],
      ['kosilo', 'almoço'],
    ],
  },
  {
    id: 'sl-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Vreme v gorah',
    emoji: '⛰️',
    summary: 'Nina pergunta como você está se sentindo e qual vai ser o tempo para uma caminhada no Parque Nacional do Triglav.',
    cultural_context: 'O Triglav, com 2864 metros, é a montanha mais alta da Eslovênia e aparece na bandeira do país. O Parque Nacional do Triglav, nos Alpes Julianos, é o único parque nacional esloveno.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Živjo! Kako si se počutil včeraj?',
        translation: 'Oi! Como você se sentiu ontem?',
        emoji: '📱',
        choices: [
          { text: 'Včeraj sem bil utrujen, danes pa sem vesel.', translation: 'Ontem eu estava cansado, mas hoje estou feliz.', next: 'vreme' },
          { text: 'Danes je sonce.', translation: 'Hoje tem sol.', wrong: 'Isso não responde como você se sentiu. Use “Včeraj sem bil/bila...”.' },
        ],
      },
      vreme: {
        text: 'Super! Kakšno bo vreme za pohod na Triglav v nedeljo?',
        translation: 'Ótimo! Qual vai ser o tempo para a caminhada ao Triglav no domingo?',
        emoji: '🌤️',
        choices: [
          { text: 'Jutri bo sonce, bo lepo.', translation: 'Amanhã vai ter sol, vai estar bonito.', next: 'vabilo' },
          { text: 'Boli me glava.', translation: 'Dói-me a cabeça.', wrong: 'Isso não responde sobre o tempo. Use “bo...”.' },
        ],
      },
      vabilo: {
        text: 'Super! Ali boš šel na pohod z nama?',
        translation: 'Ótimo! Você vai no passeio com a gente?',
        emoji: '🥾',
        choices: [
          { text: 'Da, z veseljem!', translation: 'Sim, com prazer!', next: 'final_bom' },
          { text: 'Jaz sem zdravnik.', translation: 'Eu sou médico.', wrong: 'Nina convidou você para o passeio: responda “da” ou “ne”.' },
        ],
      },
      final_bom: {
        text: 'Odlično! Midva bova čakala na postaji ob sedmih.',
        translation: 'Ótimo! Nós dois vamos esperar na estação às sete.',
        emoji: '🥾',
        ending: { tone: 'bom', title: 'Pohod na Triglav!', message: 'Você combinou uma caminhada com Nina para domingo, se o tempo ajudar.' },
      },
    },
    glossary: [
      ['vreme', 'o tempo (clima)'],
      ['vesel', 'feliz'],
      ['pohod', 'caminhada, trilha'],
      ['bo', 'vai ser, vai estar'],
    ],
  },
  {
    id: 'sl-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Na tržnici',
    emoji: '🏪',
    summary: 'Você encontra a cozinheira Maja comprando ingredientes frescos na Tržnica central de Ljubljana e pergunta sobre os preços e os lugares da cidade.',
    cultural_context: 'A Tržnica central de Ljubljana, desenhada pelo arquiteto Jože Plečnik, fica às margens do rio Ljubljanica, com a sua colunata e o pavilhão do mercado de peixe.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Živjo! Jaz sem Maja, kuharica sem. Kaj iščeš?',
        translation: 'Oi! Eu sou a Maja, sou cozinheira. O que você está procurando?',
        emoji: '🧑‍🍳',
        choices: [
          { text: 'Iščem sveže zelenjave.', translation: 'Estou procurando verduras frescas.', next: 'cena' },
          { text: 'Delam v bolnišnici.', translation: 'Eu trabalho no hospital.', wrong: 'Isso não responde o que você procura na tržnici.' },
        ],
      },
      cena: {
        text: 'Tukaj na tržnici je vse sveže, in cene so dobre.',
        translation: 'Aqui no mercado tudo é fresco, e os preços são bons.',
        emoji: '💰',
        choices: [
          { text: 'Katero tržnico priporočaš v Ljubljani?', translation: 'Qual mercado você recomenda em Ljubljana?', next: 'final_bom' },
          { text: 'Jaz sem učitelj.', translation: 'Eu sou professor.', wrong: 'Isso não continua a conversa sobre a tržnica. Pergunte sobre os preços ou os mercados.' },
        ],
      },
      final_bom: {
        text: 'Tržnica ob Ljubljanici je stara in vsi jo imajo radi.',
        translation: 'O mercado às margens do Ljubljanica é antigo e todo mundo gosta dele.',
        emoji: '🏪',
        ending: { tone: 'bom', title: 'Dober nasvet!', message: 'Maja deu a você uma boa dica de onde fazer compras em Ljubljana.' },
      },
    },
    glossary: [
      ['tržnica', 'mercado'],
      ['sveže', 'fresco'],
      ['cena', 'preço'],
      ['kuharica', 'cozinheira'],
    ],
  },
];
