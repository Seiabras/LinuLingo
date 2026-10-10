import type { GrammarTopic } from '../types';

/**
 * Gramática do alutiiq — por enquanto só A1.1 e A1.2 (curso incompleto). Fontes: [WIKT] (os exemplos dos
 * verbetes “asirluni”, “maqarluni”, “pat’snarluni”, “qenaluni”, “sakaarlluni”, “ca”, “angli”, e o
 * verbete iúpique “-qaa”, a partícula das perguntas de sim ou não); [WIKI] «Alutiiq language» (o
 * alfabeto e a tabela dos números e dos meses nos dois dialetos). Todos os exemplos são frases das
 * fontes, com a tradução delas.
 */
export const GRAMMAR_EMS: GrammarTopic[] = [
  {
    id: 'ems-g1',
    level: 'A1.1',
    title: 'Como está: os verbos em -luni',
    emoji: '😊',
    summary: 'Os verbos que dizem como alguém ou algo está aparecem com -luni: asirluni, qenaluni, sakaarlluni.',
    sections: [
      {
        text: 'O alutiiq não tem adjetivos como o português: para dizer que alguém está bem, doente ou cansado, usa verbos. No dicionário, eles aparecem com o final -luni, e nas frases essa mesma forma diz como a pessoa estava.',
        table: {
          head: ['Verbo', 'Sentido'],
          rows: [
            ['asirluni', 'estar bem'],
            ['qenaluni', 'estar doente'],
            ['sakaarlluni', 'estar cansado'],
          ],
        },
        examples: [
          ['Taata Paluwigmek tekitellria asirluni?', 'O papai estava bem quando voltou de Port Graham?'],
          ['Litnaurwigmen agellrianga sakaarlluni unuaka’arpak.', 'Eu estava cansado quando saí para a escola hoje cedo.'],
        ],
      },
    ],
    pitfalls: ['Procurar um adjetivo para “doente”: em alutiiq é um verbo, “qenaluni”.'],
    quiz: [
      { question: 'O que quer dizer “sakaarlluni”?', options: ['estar cansado', 'estar quente', 'estar bem'], answer: 'estar cansado', explanation: '“Sakaarlluni” é estar cansado, exausto.' },
    ],
  },
  {
    id: 'ems-g2',
    level: 'A1.1',
    title: 'Perguntas de sim ou não: -qaa',
    emoji: '❓',
    summary: 'A partícula -qaa, colada à primeira palavra, faz uma pergunta de sim ou não.',
    sections: [
      {
        text: 'Como no iúpique central, o alutiiq faz perguntas de sim ou não colando -qaa à primeira palavra da frase. E para dizer que não sabe a resposta, basta “Ca”.',
        examples: [
          ['Picinek-qaa una uswiillraraaq englumen taillria qenaluni?', 'Aquela criança chegou mesmo em casa doente?'],
          ['Cacaq ang’aqurtau’u? — Ca.', 'O que ela está carregando? — Não sei.'],
        ],
      },
    ],
    pitfalls: ['Pôr -qaa no fim da frase: ela vai colada à primeira palavra, “Picinek-qaa …”.'],
    quiz: [
      { question: 'Como se diz “não sei”?', options: ['Ca', 'Canaituq', 'Cama’i'], answer: 'Ca', explanation: '“Ca” é “não sei”; “Canaituq”, “de nada”; “Cama’i”, “olá”.' },
    ],
  },
  {
    id: 'ems-g3',
    level: 'A1.2',
    title: 'O tempo e o lugar: -mi',
    emoji: '🌤️',
    summary: 'Para dizer onde, o lugar leva -mi: Sun’ami, em Kodiak.',
    sections: [
      {
        text: 'Nas frases sobre o tempo, o lugar vem primeiro, com o final -mi (em): “Sun’ami”, em Kodiak; “Aluuwimi”, na península do Alasca. Depois vêm a hora do dia e como está o tempo.',
        examples: [
          ['Sun’ami enerpak pat’snarluni macartuq.', 'Hoje de manhã está frio, mas faz sol em Kodiak.'],
          ['Aluuwimi unuarpak maqarluni macartuq.', 'Hoje de manhã está quente e faz sol na península do Alasca.'],
        ],
      },
    ],
    pitfalls: ['Trocar “maqarluni” (quente) por “pat’snarluni” (frio).'],
    quiz: [
      { question: 'O que quer dizer “Sun’ami”?', options: ['em Kodiak', 'o sol', 'hoje de manhã'], answer: 'em Kodiak', explanation: '-mi é “em”.' },
    ],
  },
  {
    id: 'ems-g4',
    level: 'A1.2',
    title: 'Os números e os dois dialetos',
    emoji: '🔢',
    summary: 'Os números do koniag e do chugach: quase iguais, com algumas formas próprias.',
    sections: [
      {
        text: 'Os números do alutiiq são parentes dos do iúpique central (“pingayun”, “talliman”). O koniag, de Kodiak, e o chugach, da península Kenai, contam quase igual, mas mudam alguns números — em Chenega, dois é “atel’ek”.',
        table: {
          head: ['Número', 'Koniag', 'Chugach'],
          rows: [
            ['1', 'allringuq', 'allringuq, all’inguq'],
            ['2', 'mal’uk', 'malruk, mall’uk, atel’ek'],
            ['3', 'pingayun', 'pingayun, pinga’an'],
            ['4', 'staaman', 'staaman'],
            ['5', 'talliman', 'talliman'],
            ['7', 'mallrungin', 'mallruungin, maquungwin'],
            ['10', 'qulen', 'qulen'],
          ],
        },
        examples: [['Talliman.', 'Cinco.']],
      },
    ],
    pitfalls: ['Achar que cada dialeto tem números próprios: quatro, cinco e dez são iguais nos dois.'],
    quiz: [
      { question: 'Como se diz “cinco” em alutiiq?', options: ['talliman', 'staaman', 'qulen'], answer: 'talliman', explanation: '“Talliman” é cinco nos dois dialetos.' },
    ],
  },
];
