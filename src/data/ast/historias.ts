import type { StorySeed } from '../types';

/** Histórias interativas do asturiano — por enquanto uma por nível (A1.1 a A2.2), pacote incompleto. */
export const STORIES_AST: StorySeed[] = [
  {
    id: 'ast-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Hola en Xixón',
    emoji: '👋',
    summary: 'Você conhece Sabela num passeio de Gijón (Xixón) e faz a sua primeira conversa em asturiano.',
    cultural_context: 'Xixón (Gijón, em castelhano) é a maior cidade das Astúrias e fica na costa do Mar Cantábrico, com um famoso passeio litorâneo, o Muro de San Lorenzo.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Hola! Llámome Sabela. Cómo tas?',
        translation: 'Oi! Eu me chamo Sabela. Como você está?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Mui bien, gracies! Y tu?', translation: 'Muito bem, obrigado! E você?', next: 'bien' },
          { text: 'Adiós!', translation: 'Tchau!', wrong: 'Sabela acabou de te cumprimentar — despedir-se agora seria estranho. Responda ao cumprimento primeiro.' },
        ],
      },
      bien: {
        text: 'Mui bien tamién! Y tu, de ónde yes?',
        translation: 'Muito bem também! E você, de onde é?',
        emoji: '😊',
        choices: [
          { text: 'Soi de Brasil.', translation: 'Sou do Brasil.', next: 'final_bo' },
          { text: 'Préstame’l café.', translation: 'Eu gosto do café.', wrong: 'Isso não responde "de onde você é". Tente "Soi de…".' },
        ],
      },
      final_bo: {
        text: 'Qué bien! Bienvenida a Xixón.',
        translation: 'Que bom! Bem-vinda a Gijón.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Una bona conversa!', message: 'Sabela sorri: esta ye la to primera conversa n’asturianu, nel Muro de San Lorenzo.' },
      },
    },
    glossary: [
      ['hola', 'oi'],
      ['mui bien', 'muito bem'],
      ['soi de', 'sou de'],
    ],
  },
  {
    id: 'ast-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Una llamada a la familia',
    emoji: '📞',
    summary: 'Você liga para a sua nova amiga asturiana Uxía e conta um pouco sobre a sua família e a sua casa.',
    cultural_context: 'Nas aldeias das Astúrias, é comum várias gerações de uma mesma família viverem perto umas das outras, e as fiestes (festas do santo padroeiro de cada aldeia) são um momento importante de reunião.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Hola! Cúntame, tienes hermanos?',
        translation: 'Oi! Me conte, você tem irmãos?',
        emoji: '📱',
        choices: [
          { text: 'Sí, tengo un hermanu y una hermana.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'hermanos' },
          { text: 'La mio casa ye grande.', translation: 'Minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “tengo” ou “nun tengo”.' },
        ],
      },
      hermanos: {
        text: 'Qué bien! Y cómo ye la to casa?',
        translation: 'Que bom! E como é a sua casa?',
        emoji: '🏠',
        choices: [
          { text: 'La mio casa ye pequeña pero mui guapa.', translation: 'Minha casa é pequena mas muito bonita.', next: 'final_bo' },
          { text: 'Tengo venti años.', translation: 'Tenho vinte anos.', wrong: 'Isso não descreve a sua casa. Fale sobre ela: “la mio casa ye…”.' },
        ],
      },
      final_bo: {
        text: 'Préstame enforma! Tienes que venir a Xixón dalgún día.',
        translation: 'Eu gosto muito! Você tem que vir a Gijão algum dia.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Nueva amistá!', message: 'A Uxía présta-y falar contigo: yá son amigues!' },
      },
    },
    glossary: [
      ['hermanu / hermana', 'irmão / irmã'],
      ['la mio casa', 'a minha casa'],
      ['tengo', 'eu tenho'],
    ],
  },
  {
    id: 'ast-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Ayeri nel mercáu del Fontán',
    emoji: '🧺',
    summary: 'Você conta a Uxía como foi o seu dia de ontem no mercáu del Fontán, em Uviéu, usando o pretérito.',
    cultural_context: 'O mercáu del Fontán, em Uviéu, funciona como mercado há séculos; o movimento fica mais intenso nos dias de xueves, sábadu y domingu.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Qué tiempu fixo ayeri na to ciudá?',
        translation: 'Que tempo fez ontem na sua cidade?',
        emoji: '🌧️',
        choices: [
          { text: 'Ayeri fixo fríu y llovió muncho.', translation: 'Ontem fez frio e choveu muito.', next: 'tiempu' },
          { text: 'Mañana diré a Xixón.', translation: 'Amanhã irei a Gijão.', wrong: 'Isso fala do futuro, não do tempo de ontem. Use o pretérito: “ayeri fixo…”.' },
        ],
      },
      tiempu: {
        text: 'Ya, ye normal equí. Y qué compresti nel mercáu?',
        translation: 'Pois é, é normal aqui. E o que você comprou no mercado?',
        emoji: '🧺',
        choices: [
          { text: 'Compré pan nel mercáu del Fontán.', translation: 'Comprei pão no mercado do Fontán.', next: 'final_bo' },
          { text: 'La fabada ye meyor que l’otru platu.', translation: 'A fabada é melhor que o outro prato.', wrong: 'Isso não diz o que você comprou. Use o pretérito “compré” e diga o quê.' },
        ],
      },
      final_bo: {
        text: 'Qué bien! El pan del Fontán ye guapísimu.',
        translation: 'Que bom! O pão do Fontán é ótimo.',
        emoji: '🥖',
        ending: { tone: 'bom', title: 'Un bon día de mercáu!', message: 'Uxía sorri: contesti bien el to día d’ayeri, col pretéritu y too.' },
      },
    },
    glossary: [
      ['ayeri fixo fríu', 'ontem fez frio'],
      ['llovió', 'choveu'],
      ['compré', 'eu comprei'],
    ],
  },
  {
    id: 'ast-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'De viaxe pal Camín Primitivu',
    emoji: '🧳',
    summary: 'Você planeja com Sabela uma viagem futura pelos Picos d’Europa, usando o futuro simples.',
    cultural_context: 'O Camín Primitivu, que passa por Uviéu, é considerado a rota mais antiga do Camino de Santiago, perto dos Picos d’Europa.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'L’añu que vien, qué viaxe faes?',
        translation: 'No ano que vem, que viagem você faz?',
        emoji: '⛰️',
        choices: [
          { text: 'Diré pal Camín Primitivu, nos Picos d’Europa.', translation: 'Irei para o Camín Primitivu, nos Picos d’Europa.', next: 'camin' },
          { text: 'Ayeri llovió muncho na ciudá.', translation: 'Ontem choveu muito na cidade.', wrong: 'Isso fala do passado, não da viagem futura. Use o futuro: “diré pa…”.' },
        ],
      },
      camin: {
        text: 'Guapo! Y cómo dirás: en tren o en coche?',
        translation: 'Que bom! E como você irá: de trem ou de carro?',
        emoji: '🚆',
        choices: [
          { text: 'Diré en tren y compraré una maleta nueva.', translation: 'Irei de trem e comprarei uma mala nova.', next: 'final_bo' },
          { text: 'La mio casa ye pequeña pero mui guapa.', translation: 'Minha casa é pequena mas muito bonita.', wrong: 'Isso não responde como você vai viajar. Use o futuro: “diré en…”.' },
        ],
      },
      final_bo: {
        text: 'Perfecto! Espero que nun llueva muncho pel camín.',
        translation: 'Perfeito! Espero que não chova muito pelo caminho.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Un viaxe bien planiáu!', message: 'Sabela queda prestosa: yá tienes el to viaxe pal Camín Primitivu too planiáu, col futuru.' },
      },
    },
    glossary: [
      ['diré pa…', 'irei para…'],
      ['compraré', 'eu vou comprar'],
      ['en tren', 'de trem'],
    ],
  },
];
