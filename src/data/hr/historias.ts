import type { StorySeed } from '../types';
// Histórias 3 e 4 (A2.1 e A2.2) acrescentadas depois das duas originais do A1.

/** Histórias interativas do croata — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_HR: StorySeed[] = [
  {
    id: 'hr-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Bok u Zagrebu',
    emoji: '👋',
    summary: 'Você conhece Ivana na praça Ban Jelačić, no centro de Zagreb, e faz a sua primeira conversa em croata.',
    cultural_context: 'A praça Ban Jelačić é o coração de Zagreb, a capital da Croácia: é ali que muita gente marca encontro “pod satom”, embaixo do relógio da praça.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bok! Zovem se Ivana. Kako si?',
        translation: 'Oi! Eu me chamo Ivana. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Dobro, hvala! A ti?', translation: 'Bem, obrigado! E você?', next: 'dobro' },
          { text: 'Doviđenja!', translation: 'Até logo!', wrong: 'Ivana acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      dobro: {
        text: 'I ja sam dobro! Odakle si?',
        translation: 'Eu também estou bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Ja sam iz São Paula.', translation: 'Sou de São Paulo.', next: 'final_bom' },
          { text: 'Pijem vodu.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Ja sam iz…”.' },
        ],
      },
      final_bom: {
        text: 'Super! Dobro došao u Zagreb!',
        translation: 'Que legal! Bem-vindo a Zagreb!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Dobar početak!', message: 'Ivana sorri: você fez a sua primeira conversa em croata.' },
      },
    },
    glossary: [
      ['bok', 'oi'],
      ['kako si?', 'como vai?'],
      ['ja sam iz', 'eu sou de'],
      ['dobro došao', 'bem-vindo (a uma mulher: dobro došla)'],
    ],
  },
  {
    id: 'hr-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Nedjeljni ručak',
    emoji: '👪',
    summary: 'Luka, um amigo de Split, pergunta pela sua família e convida você para o almoço de domingo com a família dele.',
    cultural_context: 'Split, na Dalmácia, cresceu em volta do palácio que o imperador romano Diocleciano mandou construir por volta do ano 300.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bok! Imaš li brata ili sestru?',
        translation: 'Oi! Você tem irmão ou irmã?',
        emoji: '📱',
        choices: [
          { text: 'Da, imam brata i sestru.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'obitelj' },
          { text: 'Moja kuća je velika.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “imam…”.' },
        ],
      },
      obitelj: {
        text: 'Super! Želiš li doći na ručak u nedjelju?',
        translation: 'Que legal! Quer vir almoçar no domingo?',
        emoji: '🍽️',
        choices: [
          { text: 'Da, puno hvala!', translation: 'Sim, muito obrigado!', next: 'final_bom' },
          { text: 'Ja sam iz São Paula.', translation: 'Sou de São Paulo.', wrong: 'Luka fez um convite: responda com “da” ou “ne, hvala”.' },
        ],
      },
      final_bom: {
        text: 'Odlično! Moja majka peče ribu na gradele.',
        translation: 'Ótimo! A minha mãe faz peixe na grelha.',
        emoji: '🐟',
        ending: { tone: 'bom', title: 'Poziv!', message: 'Você foi convidado para o almoço de domingo com a família de Luka.' },
      },
    },
    glossary: [
      ['brat / sestra', 'irmão / irmã'],
      ['imam', 'eu tenho'],
      ['da', 'sim'],
      ['ručak', 'almoço'],
    ],
  },
  {
    id: 'hr-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Vrijeme na Jadranu',
    emoji: '🏝️',
    summary: 'Ana pergunta como você está se sentindo e qual vai ser o tempo para um passeio de barco pela costa da Dalmácia.',
    cultural_context: 'A costa da Dalmácia, no Adriático, tem verões longos e quentes; muitos croatas passam o fim de semana entre as ilhas, de barco, quando o tempo ajuda.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bok! Kako si se osjećao jučer?',
        translation: 'Oi! Como você se sentiu ontem?',
        emoji: '📱',
        choices: [
          { text: 'Jučer sam bio umoran, a danas sam sretan.', translation: 'Ontem eu estava cansado, mas hoje estou feliz.', next: 'vreme' },
          { text: 'Danas ima sunce.', translation: 'Hoje tem sol.', wrong: 'Isso não responde como você se sentiu. Use “Jučer sam bio/bila...”.' },
        ],
      },
      vreme: {
        text: 'Super! Kakvo će biti vrijeme za izlet brodom u nedjelju?',
        translation: 'Ótimo! Qual vai ser o tempo para o passeio de barco no domingo?',
        emoji: '🌤️',
        choices: [
          { text: 'Sutra će biti sunce, bit će lijepo.', translation: 'Amanhã vai ter sol, vai estar bonito.', next: 'poziv' },
          { text: 'Boli me glava.', translation: 'Dói-me a cabeça.', wrong: 'Isso não responde sobre o tempo. Use “će biti...”.' },
        ],
      },
      poziv: {
        text: 'Super! Hoćeš li doći na izlet brodom?',
        translation: 'Ótimo! Você quer vir no passeio de barco?',
        emoji: '⛵',
        choices: [
          { text: 'Da, s radošću!', translation: 'Sim, com prazer!', next: 'final_bom' },
          { text: 'Ja sam liječnik.', translation: 'Eu sou médico.', wrong: 'Ana convidou você para o passeio: responda “da” ou “ne”.' },
        ],
      },
      final_bom: {
        text: 'Odlično! Vidimo se na obali u nedjelju ujutro.',
        translation: 'Ótimo! Nos vemos na costa no domingo de manhã.',
        emoji: '⛵',
        ending: { tone: 'bom', title: 'Izlet brodom!', message: 'Você combinou um passeio de barco com Ana para domingo, se o tempo ajudar.' },
      },
    },
    glossary: [
      ['vrijeme', 'o tempo (clima)'],
      ['sretan', 'feliz'],
      ['izlet brodom', 'passeio de barco'],
      ['će biti', 'vai ser, vai estar'],
    ],
  },
  {
    id: 'hr-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Na Dolacu',
    emoji: '🏪',
    summary: 'Você encontra a cozinheira Petra comprando ingredientes frescos no Dolac, o mercado central de Zagreb, e pergunta sobre os preços e os lugares da cidade.',
    cultural_context: 'O Dolac, em Zagreb, é conhecido como "o estômago de Zagreb": debaixo dos famosos guarda-sóis vermelhos, produtores vendem fruta, legumes e queijo fresco todas as manhãs desde 1930.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bok! Ja sam Petra, kuharica sam. Što tražiš?',
        translation: 'Oi! Eu sou a Petra, sou cozinheira. O que você está procurando?',
        emoji: '🧑‍🍳',
        choices: [
          { text: 'Tražim svježe povrće.', translation: 'Estou procurando verduras frescas.', next: 'cena' },
          { text: 'Radim u bolnici.', translation: 'Eu trabalho no hospital.', wrong: 'Isso não responde o que você procura na tržnici.' },
        ],
      },
      cena: {
        text: 'Ovdje na tržnici sve je svježe, a cijene su dobre.',
        translation: 'Aqui no mercado tudo é fresco, e os preços são bons.',
        emoji: '💰',
        choices: [
          { text: 'Koju tržnicu preporučuješ u Zagrebu?', translation: 'Qual mercado você recomenda em Zagreb?', next: 'final_bom' },
          { text: 'Ja sam učitelj.', translation: 'Eu sou professor.', wrong: 'Isso não continua a conversa sobre a tržnica. Pergunte sobre os preços ou os mercados.' },
        ],
      },
      final_bom: {
        text: 'Dolac je stara tržnica u centru, i svatko je voli.',
        translation: 'O Dolac é um mercado antigo no centro, e todo mundo gosta dele.',
        emoji: '🏪',
        ending: { tone: 'bom', title: 'Dobar savjet!', message: 'Petra deu a você uma boa dica de onde fazer compras em Zagreb.' },
      },
    },
    glossary: [
      ['tržnica', 'mercado'],
      ['svježe', 'fresco'],
      ['cijena', 'preço'],
      ['kuharica', 'cozinheira'],
    ],
  },
];
