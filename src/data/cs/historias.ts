import type { StorySeed } from '../types';

/** Histórias interativas do tcheco — A1.1 ao A2.2, pacote incompleto (B1 em diante ainda falta). */
export const STORIES_CS: StorySeed[] = [
  {
    id: 'cs-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Ahoj v Praze',
    emoji: '👋',
    summary: 'Você conhece Eva na praça da Cidade Velha de Praga, perto do relógio astronômico, e faz a sua primeira conversa em tcheco.',
    cultural_context: 'O relógio astronômico de Praga, na praça da Cidade Velha (Staroměstské náměstí), funciona desde o século XV e atrai uma multidão a cada hora cheia.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ahoj! Jmenuji se Eva. Jak se máš?',
        translation: 'Oi! Eu me chamo Eva. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Dobře, děkuji! A ty?', translation: 'Bem, obrigado! E você?', next: 'dobre' },
          { text: 'Na shledanou!', translation: 'Até logo!', wrong: 'Eva acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      dobre: {
        text: 'Taky dobře! Odkud jsi?',
        translation: 'Também bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Jsem ze São Paula.', translation: 'Sou de São Paulo.', next: 'final_dobry' },
          { text: 'Piju vodu.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Jsem z…”.' },
        ],
      },
      final_dobry: {
        text: 'Super! Vítej v Praze!',
        translation: 'Que legal! Bem-vindo a Praga!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Dobrý začátek!', message: 'Eva sorri: você fez a sua primeira conversa em tcheco.' },
      },
    },
    glossary: [
      ['ahoj', 'oi'],
      ['jak se máš?', 'como vai?'],
      ['taky', 'também (forma do dia a dia de “také”)'],
      ['vítej', 'bem-vindo'],
    ],
  },
  {
    id: 'cs-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Nedělní oběd',
    emoji: '👪',
    summary: 'Petr, um amigo de Brno, pergunta pela sua família e convida você para o almoço de domingo com a família dele.',
    cultural_context: 'Brno é a maior cidade da Morávia e a segunda da República Tcheca. O almoço de domingo em família é uma tradição forte no país.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ahoj! Máš bratra nebo sestru?',
        translation: 'Oi! Você tem irmão ou irmã?',
        emoji: '📱',
        choices: [
          { text: 'Ano, mám bratra a sestru.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'rodina' },
          { text: 'Můj dům je velký.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “mám…”.' },
        ],
      },
      rodina: {
        text: 'Super! Chceš přijít v neděli na oběd?',
        translation: 'Que legal! Quer vir almoçar no domingo?',
        emoji: '🍽️',
        choices: [
          { text: 'Ano, děkuji moc!', translation: 'Sim, muito obrigado!', next: 'final_dobry' },
          { text: 'Jsem ze São Paula.', translation: 'Sou de São Paulo.', wrong: 'Petr fez um convite: responda com “ano” ou “ne, děkuji”.' },
        ],
      },
      final_dobry: {
        text: 'Výborně! Moje máma vaří knedlíky.',
        translation: 'Ótimo! A minha mãe faz knedlíky (bolinhos de massa).',
        emoji: '🥟',
        ending: { tone: 'bom', title: 'Pozvání!', message: 'Você foi convidado para o almoço de domingo com a família de Petr.' },
      },
    },
    glossary: [
      ['bratr / sestra', 'irmão / irmã'],
      ['mám', 'eu tenho'],
      ['ano', 'sim'],
      ['oběd', 'almoço'],
    ],
  },
  {
    id: 'cs-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Déšť v Ostravě',
    emoji: '🌧️',
    summary: 'Tereza, uma amiga de Ostrava, encontra você numa tarde chuvosa e conta o que comprou para o frio.',
    cultural_context: 'Ostrava, no nordeste da República Tcheca, tem invernos frios e chuvosos; a antiga cidade industrial hoje é conhecida também pela vida cultural e universitária.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ahoj! Včera celý den pršelo.',
        translation: 'Oi! Ontem choveu o dia todo.',
        emoji: '🌧️',
        choices: [
          { text: 'Ano, a bylo i studeno!', translation: 'Sim, e também estava frio!', next: 'studeno' },
          { text: 'Mám bratra a sestru.', translation: 'Eu tenho um irmão e uma irmã.', wrong: 'Tereza está falando do tempo, não perguntou sobre a sua família. Responda sobre o clima.' },
        ],
      },
      studeno: {
        text: 'Přesně! Včera jsem koupila nový kabát.',
        translation: 'Exatamente! Eu comprei um casaco novo ontem.',
        emoji: '🧥',
        choices: [
          { text: 'Krásný! Musím si také koupit svetr.', translation: 'Que bonito! Eu também tenho que comprar um suéter.', next: 'final_dobry' },
          { text: 'Kočka je černá.', translation: 'O gato é preto.', wrong: 'Isso não tem nada a ver com roupas ou o tempo. Fale sobre o que você precisa comprar.' },
        ],
      },
      final_dobry: {
        text: 'Dobrý nápad! Tak budeš mít teplo.',
        translation: 'Boa ideia! Assim você vai ficar aquecido.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Teplo a sucho!', message: 'Você e Tereza conversaram sobre o tempo e as roupas para o frio, usando o passado em -l.' },
      },
    },
    glossary: [
      ['pršelo', 'choveu'],
      ['koupila jsem', 'eu comprei (fala uma mulher)'],
      ['musím si koupit', 'eu tenho que comprar'],
      ['dobrý nápad', 'boa ideia'],
    ],
  },
  {
    id: 'cs-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'U lékaře',
    emoji: '🧑‍⚕️',
    summary: 'Você vai ao médico em Olomouci porque está com dor de cabeça, e conta como está se sentindo.',
    cultural_context: 'Na República Tcheca, a primeira consulta costuma ser com o médico de família (praktický lékař), que depois encaminha a pacientes para especialistas se for preciso.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ahoj! Co tě bolí?',
        translation: 'Oi! O que está doendo em você?',
        emoji: '🧑‍⚕️',
        choices: [
          { text: 'Bolí mě hlava.', translation: 'Minha cabeça está doendo.', next: 'hlava' },
          { text: 'Jsem učitelem.', translation: 'Eu sou professor.', wrong: 'O médico perguntou o que está doendo, não qual é a sua profissão. Fale sobre a dor.' },
        ],
      },
      hlava: {
        text: 'Jak se cítíš? Jsi také unavený?',
        translation: 'Como você se sente? Você também está cansado?',
        emoji: '😴',
        choices: [
          { text: 'Ano, jsem velmi unavený.', translation: 'Sim, estou muito cansado.', next: 'final_dobry' },
          { text: 'Nosím kabát.', translation: 'Eu estou usando um casaco.', wrong: 'O médico perguntou como você se sente, não sobre a sua roupa. Fale sobre o cansaço.' },
        ],
      },
      final_dobry: {
        text: 'Rozumím. Pij hodně vody a dobře si odpočiň.',
        translation: 'Eu entendo. Beba muita água e descanse bem.',
        emoji: '💧',
        ending: { tone: 'bom', title: 'Dobrá rada!', message: 'Você conseguiu explicar ao médico onde dói e como se sente, usando o vocabulário do corpo e dos sentimentos.' },
      },
    },
    glossary: [
      ['co tě bolí?', 'o que está doendo em você?'],
      ['bolí mě hlava', 'minha cabeça está doendo'],
      ['jak se cítíš?', 'como você se sente?'],
      ['jsem unavený', 'eu estou cansado'],
    ],
  },
];
