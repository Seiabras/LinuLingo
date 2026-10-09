import type { StorySeed } from '../types';

/**
 * Histórias interativas do gaélico escocês — uma por subnível de A1.1 a A2.2 (pacote incompleto,
 * falta do B1 em diante — ver `incomplete` em index.ts). As duas últimas (A2.1 e A2.2) praticam o
 * passado e os sentimentos com “air” ensinados nas unidades 3 e 4 de curriculo.ts, com as mesmas
 * fontes citadas lá.
 */
export const STORIES_GD: StorySeed[] = [
  {
    id: 'gd-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Halò anns na h-Eileanan Siar',
    emoji: '👋',
    summary: 'Você conhece Mòrag nas Hébridas Exteriores (Na h-Eileanan Siar) e faz a sua primeira conversa em gaélico.',
    cultural_context: 'As Hébridas Exteriores (Na h-Eileanan Siar) são a região onde o gaélico escocês é falado com mais força hoje: mais da metade dos falantes da língua mora ali.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Halò! Is mise Mòrag. Ciamar a tha thu?',
        translation: 'Oi! Eu sou a Mòrag. Como você vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Tha mi gu math, tapadh leat! Agus thusa?', translation: 'Eu vou bem, obrigado! E você?', next: 'bain' },
          { text: 'Beannachd leat!', translation: 'Tchau!', wrong: 'Mòrag acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro com “Tha mi gu math…”.' },
        ],
      },
      bain: {
        text: "Tha gu math cuideachd! Dè an t-ainm a th' ort?",
        translation: 'Vou bem também! Qual é o seu nome?',
        emoji: '😊',
        choices: [
          { text: 'Is mise Ana.', translation: 'Eu sou a Ana.', next: 'final_bun' },
          { text: 'Tha mi ag ithe.', translation: 'Eu estou comendo.', wrong: 'Isso não responde qual é o seu nome. Use “Is mise…”.' },
        ],
      },
      final_bun: {
        text: 'Fàilte, Ana!',
        translation: 'Bem-vinda, Ana!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'A chiad chòmhradh!', message: 'Mòrag sorri: você fez a sua primeira conversa em gaélico.' },
      },
    },
    glossary: [
      ['halò', 'oi, olá'],
      ['is mise', 'eu sou, meu nome é'],
      ['ciamar a tha thu?', 'como vai?'],
      ['fàilte', 'bem-vindo'],
    ],
  },
  {
    id: 'gd-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Cofaidh, aran is càise',
    emoji: '☕',
    summary: 'Você pede café (e talvez pão e queijo) num café escocês, praticando a construção “tha… agam/agad”.',
    cultural_context: 'O gaélico não tem um verbo para “ter”: ao pedir ou receber algo, usa-se sempre “tha” (bi) com a preposição “aig” grudada ao pronome — “tha cofaidh agad” é “você tem café”.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Halò! Dè tha thu ag iarraidh?',
        translation: 'Oi! O que você quer?',
        emoji: '☕',
        choices: [
          { text: 'Cofaidh, mas e do thoil e.', translation: 'Café, por favor.', next: 'cofaidh' },
          { text: 'Tha mi gu math.', translation: 'Eu vou bem.', wrong: 'Isso não responde o que você quer beber. Peça algo com “mas e do thoil e”.' },
        ],
      },
      cofaidh: {
        text: 'Tha sin agam. A bheil thu ag iarraidh aran cuideachd?',
        translation: 'Tenho isso. Você quer pão também?',
        emoji: '🍞',
        choices: [
          { text: 'Tha, agus càise cuideachd.', translation: 'Sim, e queijo também.', next: 'final_tudo' },
          { text: 'Chan eil, tapadh leat.', translation: 'Não, obrigado.', next: 'final_so_cofaidh' },
        ],
      },
      final_tudo: {
        text: 'Tha cofaidh, aran agus càise agad.',
        translation: 'Você tem café, pão e queijo.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Lòn math!', message: 'Você pediu café, pão e queijo em gaélico, usando “tha… agad”.' },
      },
      final_so_cofaidh: {
        text: 'Tha cofaidh agad.',
        translation: 'Você tem café.',
        emoji: '☕',
        ending: { tone: 'neutro', title: 'Dìreach cofaidh', message: 'Você pediu só café — simples e direto, com “tha… agad”.' },
      },
    },
    glossary: [
      ['dè tha thu ag iarraidh?', 'o que você quer?'],
      ['mas e do thoil e', 'por favor'],
      ['tha… agad', 'você tem…'],
      ['cuideachd', 'também'],
    ],
  },
  {
    id: 'gd-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Latha trang',
    emoji: '🧳',
    summary: 'Você conta a um amigo o que fez durante o dia, praticando o passado dos verbos “dèan”, “rach” e “cuidich”.',
    cultural_context: 'Contar o que se fez no dia é uma das primeiras coisas que se aprende a dizer bem numa língua nova — e, no gaélico, isso significa dominar os verbos de raiz irregular do passado, como “rinn” (fez) e “chaidh” (foi).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Halò! Dè rinn thu an-diugh?',
        translation: 'Oi! O que você fez hoje?',
        emoji: '🙋‍♂️',
        choices: [
          { text: 'Rinn mi obair, agus chaidh mi dhan bhùth.', translation: 'Eu trabalhei, e fui a uma loja.', next: 'obra' },
          { text: 'Tha mi gu math.', translation: 'Eu vou bem.', wrong: 'Isso não responde o que você fez. Use um verbo no passado, como “rinn” ou “chaidh”.' },
        ],
      },
      obra: {
        text: 'Snog! An do chuidich thu do mhàthair?',
        translation: 'Legal! Você ajudou a sua mãe?',
        emoji: '🤝',
        choices: [
          { text: 'Chuidich mi mo mhàthair.', translation: 'Eu ajudei a minha mãe.', next: 'final_bom' },
          { text: 'Chaidh mi dhachaigh.', translation: 'Eu fui para casa.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        text: 'Is math sin!',
        translation: 'Isso é bom!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Latha math', message: 'Você contou o seu dia em gaélico usando o passado, inclusive para ajudar alguém.' },
      },
      final_neutro: {
        text: 'Tha sin ceart gu leòr.',
        translation: 'Isso está tudo bem.',
        emoji: '😴',
        ending: { tone: 'neutro', title: 'Dìreach dhachaigh', message: 'Um dia simples, de ir trabalhar e voltar para casa — também contado certinho no passado.' },
      },
    },
    glossary: [
      ['dè rinn thu?', 'o que você fez?'],
      ['chaidh mi', 'eu fui'],
      ['chuidich mi', 'eu ajudei'],
      ['dhachaigh', 'para casa'],
    ],
  },
  {
    id: 'gd-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Toilichte no sgìth?',
    emoji: '🔮',
    summary: 'Você fala de como está se sentindo e planeja o fim de semana, praticando “tha… orm” e o futuro com “bidh”.',
    cultural_context: 'Planejar o Disathairne (sábado) e o Didòmhnaich (domingo) é parte da conversa comum em gaélico, tanto quanto falar de como a pessoa está se sentindo.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ciamar a tha thu an-diugh?',
        translation: 'Como você está hoje?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Tha mi sgìth, ach bidh mi toilichte Disathairne.', translation: 'Estou cansado, mas vou ficar feliz no sábado.', next: 'planos' },
          { text: 'Tha an cù agam.', translation: 'Eu tenho um cachorro.', wrong: 'Isso não responde como você está. Use “tha mi…” com um sentimento.' },
        ],
      },
      planos: {
        text: 'Dè nì thu Disathairne?',
        translation: 'O que você vai fazer no sábado?',
        emoji: '📅',
        choices: [
          { text: 'Bidh mi ag obair sa mhadainn, agus chì mi caraid feasgar.', translation: 'Vou trabalhar de manhã, e vou ver um amigo à tarde.', next: 'final_bom' },
          { text: 'Tha an t-eagal orm.', translation: 'Estou com medo.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        text: 'Sin deireadh-seachdain math!',
        translation: 'Isso é um bom fim de semana!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Deireadh-seachdain math', message: 'Você planejou o fim de semana em gaélico, falando dos seus sentimentos e do futuro com “bidh mi”.' },
      },
      final_neutro: {
        text: 'Tha sin ceart gu leòr.',
        translation: 'Isso está tudo bem.',
        emoji: '😨',
        ending: { tone: 'neutro', title: 'Beagan eagail', message: 'Medo também é um sentimento válido — você usou “tha an t-eagal orm” certinho.' },
      },
    },
    glossary: [
      ['ciamar a tha thu?', 'como você está?'],
      ['bidh mi', 'eu vou / eu costumo'],
      ['tha an t-eagal orm', 'estou com medo'],
    ],
  },
];
