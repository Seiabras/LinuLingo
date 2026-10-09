import type { StorySeed } from '../types';

/** Histórias interativas do macedônio — uma por nível, de A1.1 a A2.2 (pacote incompleto). */
export const STORIES_MK: StorySeed[] = [
  {
    id: 'mk-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Здраво во Скопје',
    emoji: '👋',
    summary: 'Você conhece Ana na estação de Skopje e faz a sua primeira conversa em macedônio.',
    cultural_context: 'Skopje (Скопје) é a capital e a maior cidade da Macedônia do Norte, às margens do rio Vardar.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Здраво! Јас се викам Ана. Како си?',
        translation: 'Oi! Eu me chamo Ana. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Добро, благодарам! А ти?', translation: 'Bem, obrigado! E você?', next: 'dobro' },
          { text: 'Довидување!', translation: 'Tchau!', wrong: 'Ana acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      dobro: {
        text: 'И јас сум добро! Од каде си?',
        translation: 'Eu também estou bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Јас сум од Сао Паоло.', translation: 'Sou de São Paulo.', next: 'final_dobro' },
          { text: 'Пијам вода.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Јас сум од…”.' },
        ],
      },
      final_dobro: {
        text: 'Убаво! Добредојде во Скопје!',
        translation: 'Que legal! Bem-vindo a Skopje!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Добар почеток!', message: 'Ana sorri: você fez a sua primeira conversa em macedônio.' },
      },
    },
    glossary: [
      ['здраво', 'oi, olá'],
      ['како си?', 'como vai?'],
      ['јас сум од', 'eu sou de'],
      ['добредојде', 'bem-vindo'],
    ],
  },
  {
    id: 'mk-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Вечера со семејството',
    emoji: '👪',
    summary: 'Goran, um amigo de Bitola, pergunta pela sua família e convida você para jantar.',
    cultural_context: 'Bitola (Битола) é a segunda maior cidade da Macedônia do Norte; na sua rua principal, a Широк Сокак, prédios do tempo otomano ficam lado a lado com construções ao estilo europeu.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Здраво! Имаш ли браќа или сестри?',
        translation: 'Oi! Você tem irmãos ou irmãs?',
        emoji: '📱',
        choices: [
          { text: 'Да, имам брат и сестра.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'braka' },
          { text: 'Куќата ми е голема.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “имам…”.' },
        ],
      },
      braka: {
        text: 'Убаво! Сакаш ли да дојдеш кај нас во сабота?',
        translation: 'Que legal! Quer vir à nossa casa no sábado?',
        emoji: '🍽️',
        choices: [
          { text: 'Да, многу благодарам!', translation: 'Sim, muito obrigado!', next: 'final_bom' },
          { text: 'Јас сум од Сао Паоло.', translation: 'Sou de São Paulo.', wrong: 'Goran fez um convite: responda com “да” ou “не, благодарам”.' },
        ],
      },
      final_bom: {
        text: 'Одлично! Мајка ми прави леб и сирење.',
        translation: 'Ótimo! Minha mãe faz pão e queijo.',
        emoji: '🧀',
        ending: { tone: 'bom', title: 'Покана!', message: 'Você foi convidado para jantar com a família de Goran.' },
      },
    },
    glossary: [
      ['брат / сестра', 'irmão / irmã'],
      ['имам', 'eu tenho'],
      ['да', 'sim'],
      ['кај нас', 'na nossa casa'],
    ],
  },
  {
    id: 'mk-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Карневалот во Вевчани',
    emoji: '🎭',
    summary: 'Em janeiro, você visita o carnaval de máscaras de Vevčani e conversa com Biljana sobre o frio e como todos se sentem na festa.',
    cultural_context: 'O carnaval de Vevčani, perto do lago Ohrid, acontece todo mês de janeiro; a tradição local diz que tem uns 1.400 anos, e os participantes usam máscaras que, segundo a crença popular, afastam os espíritos maus do inverno.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Здраво! Многу е студено вечерва. Како се чувствуваш?',
        translation: 'Oi! Está muito frio esta noite. Como você está se sentindo?',
        emoji: '🥶',
        choices: [
          { text: 'Уморен сум, но многу среќен.', translation: 'Estou cansado, mas muito feliz.', next: 'srekjen' },
          { text: 'Утре ќе врне дожд.', translation: 'Amanhã vai chover.', wrong: 'Isso não responde como você está se sentindo. Use “сум...”.' },
        ],
      },
      srekjen: {
        text: 'Зошто си толку среќен?',
        translation: 'Por que você está tão feliz?',
        emoji: '😊',
        choices: [
          { text: 'Маските се многу убави, и има музика.', translation: 'As máscaras são muito bonitas, e tem música.', next: 'final_bom' },
          { text: 'Главата ме боли.', translation: 'Minha cabeça está doendo.', wrong: 'Isso não explica por que você está feliz. Fale do carnaval.' },
        ],
      },
      final_bom: {
        text: 'Токму така! Карневалот во Вевчани е прекрасен!',
        translation: 'Exatamente! O carnaval de Vevčani é maravilhoso!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Ноќ со маски!', message: 'Você viveu a alegria do carnaval de Vevčani, frio e tudo.' },
      },
    },
    glossary: [
      ['студено', 'frio'],
      ['среќен', 'feliz'],
      ['маска', 'máscara'],
      ['карневал', 'carnaval'],
    ],
  },
  {
    id: 'mk-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Во Старата Чаршија',
    emoji: '🏺',
    summary: 'No Bazar Antigo de Skopje, você conhece Vasko, que é ourives, e fala sobre a cidade e as profissões do bazar.',
    cultural_context: 'A Стара Чаршија (Bazar Antigo) de Skopje é considerada o maior bazar dos Bálcãs fora de Istambul, com lojas organizadas por ofício desde a época otomana.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Здраво! Со што се занимаваш?',
        translation: 'Oi! O que você faz (qual é a sua profissão)?',
        emoji: '🧑‍🎨',
        choices: [
          { text: 'Јас сум учител. А ти?', translation: 'Eu sou professor. E você?', next: 'profesija' },
          { text: 'Дваесет години имам.', translation: 'Tenho vinte anos.', wrong: 'Isso não responde à profissão. Use “сум...”.' },
        ],
      },
      profesija: {
        text: 'Јас продавам прстени и накит тука, во Чаршијата.',
        translation: 'Eu vendo anéis e joias aqui, no Bazar.',
        emoji: '💍',
        choices: [
          { text: 'Скопје е поголемо од Битола, нели?', translation: 'Skopje é maior que Bitola, não é?', next: 'final_bom' },
          { text: 'Врне дожд.', translation: 'Está chovendo.', wrong: 'Isso não tem nada a ver com a cidade. Compare Skopje com outra cidade.' },
        ],
      },
      final_bom: {
        text: 'Да, многу поголемо! Дојди пак во Чаршијата!',
        translation: 'Sim, muito maior! Venha de novo ao Bazar!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Во Чаршијата!', message: 'Você conheceu Vasko no Bazar Antigo de Skopje e falou sobre as cidades da Macedônia do Norte.' },
      },
    },
    glossary: [
      ['чаршија', 'bazar, mercado tradicional'],
      ['продавам', 'eu vendo'],
      ['поголемо од', 'maior que'],
      ['нели?', 'não é? (pergunta de confirmação)'],
    ],
  },
];
