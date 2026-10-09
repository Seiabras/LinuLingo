import type { StorySeed } from '../types';

/** Histórias interativas do galego — A1.1 ao A2.2, pacote incompleto (ver `incomplete` em index.ts). */
export const STORIES_GL: StorySeed[] = [
  {
    id: 'gl-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Ola en Compostela',
    emoji: '👋',
    summary: 'Você conhece Sabela numa praza de Santiago de Compostela e faz a sua primeira conversa em galego.',
    cultural_context: 'Santiago de Compostela é a capital da Galiza e o destino final do Camiño de Santiago, com milhares de peregrinos chegando todo ano à sua Praza do Obradoiro.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ola! Chámome Sabela. Como estás?',
        translation: 'Oi! Eu me chamo Sabela. Como você está?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Moi ben, grazas! E ti?', translation: 'Muito bem, obrigado! E você?', next: 'ben' },
          { text: 'Adeus!', translation: 'Tchau!', wrong: 'Sabela acabou de te cumprimentar — despedir-se agora seria estranho. Responda ao cumprimento primeiro.' },
        ],
      },
      ben: {
        text: 'Moi ben tamén! E ti, de onde es?',
        translation: 'Muito bem também! E você, de onde é?',
        emoji: '😊',
        choices: [
          { text: 'Son de Brasil.', translation: 'Sou do Brasil.', next: 'final_bo' },
          { text: 'Gústame o café.', translation: 'Eu gosto do café.', wrong: 'Isso não responde "de onde você é". Tente "Son de…".' },
        ],
      },
      final_bo: {
        text: 'Que ben! Benvida a Compostela.',
        translation: 'Que bom! Bem-vinda a Compostela.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Unha boa conversa!', message: 'Sabela sorri: fixeches a túa primeira conversa en galego, na praza máis famosa da Galiza.' },
      },
    },
    glossary: [
      ['ola', 'oi'],
      ['moi ben', 'muito bem'],
      ['son de', 'sou de'],
    ],
  },
  {
    id: 'gl-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Unha chamada á familia',
    emoji: '📞',
    summary: 'Você liga para a sua nova amiga galega Uxía e conta um pouco sobre a sua família e a sua casa.',
    cultural_context: 'Nas aldeias galegas, é comum várias gerações de uma mesma família viverem perto umas das outras, e as reuniões de família nos fins de semana e nas festas do santo patrón são muito importantes.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ola! Cóntame, tes irmáns?',
        translation: 'Oi! Me conte, você tem irmãos?',
        emoji: '📱',
        choices: [
          { text: 'Si, teño un irmán e unha irmá.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'irmans' },
          { text: 'A miña casa é grande.', translation: 'Minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “teño” ou “non teño”.' },
        ],
      },
      irmans: {
        text: 'Que ben! E como é a túa casa?',
        translation: 'Que bom! E como é a sua casa?',
        emoji: '🏠',
        choices: [
          { text: 'A miña casa é pequena pero moi bonita.', translation: 'Minha casa é pequena mas muito bonita.', next: 'final_bo' },
          { text: 'Teño vinte anos.', translation: 'Tenho vinte anos.', wrong: 'Isso não descreve a sua casa. Fale sobre ela: “a miña casa é…”.' },
        ],
      },
      final_bo: {
        text: 'Adoro! Algún día tes que vir visitarnos.',
        translation: 'Adoro! Um dia você tem que vir nos visitar.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Nova amizade!', message: 'Uxía adorou saber da túa familia e da túa casa — e xa te convidou para a Galiza!' },
      },
    },
    glossary: [
      ['irmán / irmá', 'irmão / irmã'],
      ['a miña casa', 'a minha casa'],
      ['teño', 'eu tenho'],
    ],
  },
  {
    id: 'gl-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Choiva en Vigo',
    emoji: '🌧️',
    summary: 'Você encontra o seu amigo Breixo numa rúa de Vigo, bem na véspera de um temporal, e fala sobre o tempo e a roupa.',
    cultural_context: 'Vigo, a cidade máis populosa da Galiza, fica na costa atlântica e é famosa pola choiva frecuente, sobre todo no outono e no inverno.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ola! Que tempo fai hoxe na túa cidade?',
        translation: 'Oi! Que tempo está fazendo hoje na sua cidade?',
        emoji: '🌦️',
        choices: [
          { text: 'Fai moito vento e vai chover.', translation: 'Está com muito vento e vai chover.', next: 'roupa' },
          { text: 'Teño vinte anos.', translation: 'Tenho vinte anos.', wrong: 'Isso não responde sobre o tempo. Use "fai sol/vento/frío/calor" ou "choveu".' },
        ],
      },
      roupa: {
        text: 'Entón leva a chaqueta e os zapatos bos!',
        translation: 'Então leve o casaco e os sapatos bons!',
        emoji: '🧥',
        choices: [
          { text: 'Boa idea, levo tamén un sombreiro.', translation: 'Boa ideia, levo também um chapéu.', next: 'final_bo' },
          { text: 'A miña familia é grande.', translation: 'Minha família é grande.', wrong: 'Isso não tem relação com a roupa. Fale sobre o que você vai levar.' },
        ],
      },
      final_bo: {
        text: 'Perfecto! Imos tomar un café antes de que chova.',
        translation: 'Perfeito! Vamos tomar um café antes que chova.',
        emoji: '☕',
        ending: { tone: 'bom', title: 'Preparados para a choiva!', message: 'Breixo e ti falastes do tempo como verdadeiros galegos — e agora estades prontos para a choiva!' },
      },
    },
    glossary: [
      ['fai vento/choiva', 'está com vento/chuva'],
      ['chaqueta', 'casaco'],
      ['levo', 'eu levo'],
    ],
  },
  {
    id: 'gl-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'De pequena, en Compostela',
    emoji: '🕰️',
    summary: 'Sua amiga Noa conta como era a sua vida de pequena em Santiago de Compostela, e você conta a súa.',
    cultural_context: 'Santiago de Compostela conserva o seu casco histórico medieval quase intacto; moitas familias que viven ali hoxe teñen raíces na cidade de xeracións atrás.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'De pequena, vivía preto da catedral. E ti, onde vivías?',
        translation: 'Quando eu era pequena, vivia perto da catedral. E você, onde você morava?',
        emoji: '🏛️',
        choices: [
          { text: 'De pequeno/a, vivía nunha cidade grande.', translation: 'Quando eu era pequeno(a), eu morava numa cidade grande.', next: 'traballo' },
          { text: 'Dóeme a cabeza.', translation: 'Minha cabeça está doendo.', wrong: 'Isso não responde onde você morava quando era criança. Use "de pequeno/a, vivía…".' },
        ],
      },
      traballo: {
        text: 'E onde traballaban os teus pais?',
        translation: 'E onde seus pais trabalhavam?',
        emoji: '👪',
        choices: [
          { text: 'O meu pai traballaba no hospital, e a miña nai, na escola.', translation: 'Meu pai trabalhava no hospital, e minha mãe, na escola.', next: 'final_bo' },
          { text: 'Mañá levarei luvas.', translation: 'Amanhã vou levar luvas.', wrong: 'Isso não responde sobre o trabalho dos seus pais. Use o imperfecto: "traballaba".' },
        ],
      },
      final_bo: {
        text: 'Que interesante! As nosas infancias foron moi diferentes.',
        translation: 'Que interessante! Nossas infâncias foram bem diferentes.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Lembranzas compartilladas!', message: 'Noa e ti compartistes as vosas lembranzas de infancia — unha boa conversa no imperfecto!' },
      },
    },
    glossary: [
      ['de pequeno/a', 'quando eu era criança'],
      ['vivía', 'eu morava'],
      ['traballaba', 'ele/ela trabalhava'],
    ],
  },
];
