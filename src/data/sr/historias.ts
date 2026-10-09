import type { StorySeed } from '../types';
// Histórias 3 e 4 (A2.1 e A2.2) acrescentadas depois das duas originais do A1.

/** Histórias interativas do sérvio — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_SR: StorySeed[] = [
  {
    id: 'sr-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Здраво у Београду',
    emoji: '👋',
    summary: 'Você conhece Jelena na fortaleza de Kalemegdan, em Belgrado, e faz a sua primeira conversa em sérvio.',
    cultural_context: 'A fortaleza de Kalemegdan fica no ponto em que o rio Sava deságua no Danúbio, no centro de Belgrado, a capital da Sérvia.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Здраво! Зовем се Јелена. Како си?',
        translation: 'Oi! Eu me chamo Jelena. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Добро, хвала! А ти?', translation: 'Bem, obrigado! E você?', next: 'dobro' },
          { text: 'Довиђења!', translation: 'Até logo!', wrong: 'Jelena acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      dobro: {
        text: 'И ја сам добро! Одакле си?',
        translation: 'Eu também estou bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Ја сам из Сао Паула.', translation: 'Sou de São Paulo.', next: 'final_bom' },
          { text: 'Пијем воду.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Ја сам из…”.' },
        ],
      },
      final_bom: {
        text: 'Супер! Добро дошао у Београд!',
        translation: 'Que legal! Bem-vindo a Belgrado!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Добар почетак!', message: 'Jelena sorri: você fez a sua primeira conversa em sérvio.' },
      },
    },
    glossary: [
      ['здраво', 'oi'],
      ['како си?', 'como vai?'],
      ['ја сам из', 'eu sou de'],
      ['добро дошао', 'bem-vindo (a uma mulher: добро дошла)'],
    ],
  },
  {
    id: 'sr-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Недељни ручак',
    emoji: '👪',
    summary: 'Marko, um amigo de Novi Sad, pergunta pela sua família e convida você para o almoço de domingo com a família dele.',
    cultural_context: 'Novi Sad, às margens do Danúbio, é a segunda maior cidade da Sérvia e a capital da província da Voivodina.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Здраво! Имаш ли брата или сестру?',
        translation: 'Oi! Você tem irmão ou irmã?',
        emoji: '📱',
        choices: [
          { text: 'Да, имам брата и сестру.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'porodica' },
          { text: 'Моја кућа је велика.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “имам…”.' },
        ],
      },
      porodica: {
        text: 'Супер! Хоћеш ли да дођеш на ручак у недељу?',
        translation: 'Que legal! Quer vir almoçar no domingo?',
        emoji: '🍽️',
        choices: [
          { text: 'Да, много хвала!', translation: 'Sim, muito obrigado!', next: 'final_bom' },
          { text: 'Ја сам из Сао Паула.', translation: 'Sou de São Paulo.', wrong: 'Marko fez um convite: responda com “да” ou “не, хвала”.' },
        ],
      },
      final_bom: {
        text: 'Одлично! Моја мајка прави сарму.',
        translation: 'Ótimo! A minha mãe faz sarma (charutinho de repolho).',
        emoji: '🥬',
        ending: { tone: 'bom', title: 'Позив!', message: 'Você foi convidado para o almoço de domingo com a família de Marko.' },
      },
    },
    glossary: [
      ['брат / сестра', 'irmão / irmã'],
      ['имам', 'eu tenho'],
      ['да', 'sim'],
      ['ручак', 'almoço'],
    ],
  },
  {
    id: 'sr-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Време за славу',
    emoji: '🕯️',
    summary: 'Jovana pergunta como você está se sentindo e qual vai ser o tempo no dia da slava da família dela.',
    cultural_context: 'A “крсна слава” é a festa do santo padroeiro de cada família sérvia, passada de pai para filho, com um pão ritual e uma vela abençoados por um padre. No dia da slava, a casa fica de portas abertas para visitas.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Здраво! Како си се осећао јуче?',
        translation: 'Oi! Como você se sentiu ontem?',
        emoji: '📱',
        choices: [
          { text: 'Јуче сам био уморан, а данас сам срећан.', translation: 'Ontem eu estava cansado, mas hoje estou feliz.', next: 'vreme' },
          { text: 'Данас има сунце.', translation: 'Hoje tem sol.', wrong: 'Isso não responde como você se sentiu. Use “Јуче сам био/била...”.' },
        ],
      },
      vreme: {
        text: 'Одлично! Какво ће бити време за моју славу у недељу?',
        translation: 'Ótimo! Qual vai ser o tempo para a minha slava no domingo?',
        emoji: '🌤️',
        choices: [
          { text: 'Сутра ће бити сунце, биће лепо.', translation: 'Amanhã vai ter sol, vai estar bonito.', next: 'convite' },
          { text: 'Боли ме глава.', translation: 'Dói-me a cabeça.', wrong: 'Isso não responde sobre o tempo. Use “ће бити...”.' },
        ],
      },
      convite: {
        text: 'Супер! Хоћеш ли да дођеш на моју славу?',
        translation: 'Ótimo! Você quer vir à minha slava?',
        emoji: '🎉',
        choices: [
          { text: 'Да, са задовољством!', translation: 'Sim, com prazer!', next: 'final_bom' },
          { text: 'Ја сам лекар.', translation: 'Eu sou médico.', wrong: 'Jovana convidou você para a slava: responda “да” ou “не”.' },
        ],
      },
      final_bom: {
        text: 'Дивно! Моја породица ће те чекати са славским колачем.',
        translation: 'Maravilha! A minha família vai te esperar com o pão ritual da slava.',
        emoji: '🥖',
        ending: { tone: 'bom', title: 'Позив на славу!', message: 'Você foi convidado para a slava da família de Jovana no domingo.' },
      },
    },
    glossary: [
      ['време', 'o tempo (clima)'],
      ['срећан', 'feliz'],
      ['слава', 'a festa do santo padroeiro da família'],
      ['ће бити', 'vai ser, vai estar'],
    ],
  },
  {
    id: 'sr-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'На пијаци Каленић',
    emoji: '🏪',
    summary: 'Você encontra o cozinheiro Nemanja comprando ingredientes frescos na Pijaca Kalenić, em Belgrado, e pergunta sobre os preços e os lugares da cidade.',
    cultural_context: 'A Pijaca Kalenić, em Belgrado, é uma das feiras livres mais tradicionais da Sérvia, aberta desde o início do século XX, com produtores vendendo fruta, legumes e queijo fresco todas as manhãs.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Здраво! Ја сам Немања, кувар сам. Шта тражиш?',
        translation: 'Oi! Eu sou o Nemanja, sou cozinheiro. O que você está procurando?',
        emoji: '🧑‍🍳',
        choices: [
          { text: 'Тражим свеже поврће.', translation: 'Estou procurando verduras frescas.', next: 'cena' },
          { text: 'Радим у болници.', translation: 'Eu trabalho no hospital.', wrong: 'Isso não responde o que você procura na pijaca.' },
        ],
      },
      cena: {
        text: 'Овде на пијаци све је јефтино, а поврће је увек свеже.',
        translation: 'Aqui no mercado tudo é barato, e as verduras estão sempre frescas.',
        emoji: '💰',
        choices: [
          { text: 'Коју пијацу препоручујеш у Београду?', translation: 'Qual mercado você recomenda em Belgrado?', next: 'final_bom' },
          { text: 'Ја сам учитељ.', translation: 'Eu sou professor.', wrong: 'Isso não continua a conversa sobre a pijaca. Pergunte sobre os preços ou os mercados.' },
        ],
      },
      final_bom: {
        text: 'Каленић је стара пијаца у центру, и свако је воли.',
        translation: 'A Kalenić é um mercado antigo no centro, e todo mundo gosta dela.',
        emoji: '🏪',
        ending: { tone: 'bom', title: 'Добар савет!', message: 'Nemanja deu a você uma boa dica de onde fazer compras em Belgrado.' },
      },
    },
    glossary: [
      ['пијаца', 'mercado'],
      ['јефтино', 'barato'],
      ['свеже', 'fresco'],
      ['кувар', 'cozinheiro'],
    ],
  },
];
