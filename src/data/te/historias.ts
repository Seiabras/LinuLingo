import type { StorySeed } from '../types';

/** Histórias interativas do télugo — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_TE: StorySeed[] = [
  {
    id: 'te-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'చార్మినార్ దగ్గర నమస్కారం',
    emoji: '🕌',
    summary: 'Você conhece a ప్రియ (Priya) perto do Charminar, em Hyderabad, e faz a sua primeira conversa em télugo.',
    cultural_context:
      'O Charminar foi construído em 1591 por Muhammad Quli Qutb Shah, quinto governante da dinastia Qutb Shahi, no centro da então nova cidade de Hyderabad. Com seus quatro minaretes, é o símbolo mais conhecido da cidade e aparece até no emblema oficial de Telangana.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'నమస్కారం! నా పేరు ప్రియ. మీరు ఎలా ఉన్నారు?',
        translation: 'Olá! Meu nome é Priya. Como você está?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'నమస్కారం! నేను బాగున్నాను, ధన్యవాదములు.', translation: 'Olá! Eu estou bem, obrigado(a).', next: 'bagu' },
          { text: 'వెళ్ళొస్తాను!', translation: 'Tchau!', wrong: 'Priya acabou de se apresentar e perguntar como você está: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      bagu: {
        text: 'నేను బాగున్నాను! మీరు ఎక్కడ నుండి?',
        translation: 'Eu também estou bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'నేను బ్రెజిల్ నుండి.', translation: 'Eu sou do Brasil.', next: 'final_bom' },
          { text: 'నాకు అన్నం కావాలి.', translation: 'Eu quero comida.', wrong: 'Isso não responde de onde você é. Use “… నుండి” (de …).' },
        ],
      },
      final_bom: {
        text: 'చాలా బాగుంది! హైదరాబాద్‌కు స్వాగతం.',
        translation: 'Que ótimo! Bem-vindo(a) a Hyderabad.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'మొదటి సంభాషణ', message: 'Priya sorri: você fez a sua primeira conversa em télugo perto do Charminar.' },
      },
    },
    glossary: [
      ['నమస్కారం', 'oi, olá (cumprimento formal)'],
      ['మీరు ఎలా ఉన్నారు?', 'como você está? (formal)'],
      ['నేను బాగున్నాను', 'eu estou bem'],
      ['… నుండి', 'de … (origem)'],
    ],
  },
  {
    id: 'te-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'నా కుటుంబం',
    emoji: '👪',
    summary: 'రాజు (Raju) pergunta pela sua família e pela sua casa.',
    cultural_context:
      'O Ugadi, ano-novo télugo, é celebrado em março ou abril com o prato “Ugadi Pachadi”, que mistura seis sabores diferentes para representar as experiências boas e ruins que o ano novo pode trazer — um costume ligado à ideia de família reunida.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'నమస్కారం! మీ అమ్మ పేరు ఏమిటి?',
        translation: 'Olá! Qual é o nome da sua mãe?',
        emoji: '📱',
        choices: [
          { text: 'నా అమ్మ పేరు ... .', translation: 'O nome da minha mãe é ... .', next: 'amma' },
          { text: 'నాకు నీళ్ళు కావాలి.', translation: 'Eu quero água.', wrong: 'Isso não responde sobre o nome da sua mãe. Use “నా అమ్మ పేరు … .”.' },
        ],
      },
      amma: {
        text: 'బాగుంది! నాకు ఒక అన్న ఉన్నాడు. మీకు?',
        translation: 'Que bom! Eu tenho um irmão mais velho. E você?',
        emoji: '😊',
        choices: [
          { text: 'నాకు ఒక అక్క ఉంది.', translation: 'Eu tenho uma irmã mais velha.', next: 'final_bom' },
          { text: 'ఇది చిన్న ఇల్లు.', translation: 'Isto é uma casa pequena.', wrong: 'Isso não responde sobre seus irmãos. Fale sobre a sua família com “నాకు … ఉన్నాడు/ఉంది.”.' },
        ],
      },
      final_bom: {
        text: 'చాలా బాగుంది! నా కుటుంబం పెద్దగా ఉంది.',
        translation: 'Que ótimo! Minha família é grande.',
        emoji: '👪',
        ending: { tone: 'bom', title: 'నా కుటుంబం', message: 'Raju sorri: agora você sabe contar sobre a sua família em télugo.' },
      },
    },
    glossary: [
      ['అన్న / అక్క', 'irmão / irmã mais velho(a)'],
      ['నాకు … ఉన్నాడు/ఉంది', 'eu tenho … (parente)'],
      ['పేరు', 'nome'],
      ['కుటుంబం', 'família'],
    ],
  },
];
