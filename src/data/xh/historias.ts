import type { StorySeed } from '../types';

/**
 * Histórias interativas do isiXhosa — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. As
 * falas só combinam palavras atestadas (ver vocabulario.ts) com os padrões de frase também atestados:
 * saudações fixas, a cópula “ngu-”, e a alternância conjunta/disjunta do presente (forma conjunta, sem
 * “-ya-”, quando o verbo é seguido de objeto — Pitcher 2023, citando Visser 1989; forma disjunta, com
 * “-ya-”, quando o verbo fecha a oração) — nunca uma palavra ou concordância nova inventada.
 */
export const STORIES_XH: StorySeed[] = [
  {
    id: 'xh-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Molo, Nomsa!',
    emoji: '👋',
    summary: 'Você encontra a Nomsa na rua e troca as primeiras palavras em isiXhosa: cumprimento, como está e o seu nome.',
    cultural_context:
      '“Molo” (para uma pessoa) e “Molweni” (para várias pessoas, ou com respeito a alguém mais velho) abrem qualquer conversa em isiXhosa — e “Unjani?” (como você está?) costuma vir logo depois, como no roteiro de conversação da Wikivoyage.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Molo! Unjani?',
        translation: 'Oi! Como você está?',
        emoji: '👋',
        choices: [
          { text: 'Ndiyaphila, enkosi.', translation: 'Estou bem, obrigado.', next: 'nome' },
          {
            text: 'Enkosi, Nomsa!',
            translation: 'Obrigado, Nomsa!',
            wrong: 'Isso agradece, mas não responde “como você está?”. Experimente “Ndiyaphila, enkosi.” (estou bem, obrigado).',
          },
        ],
      },
      nome: {
        text: 'Mna ndiyaphila. Ngubani igama lakho?',
        translation: 'Eu estou bem. Qual é o seu nome?',
        emoji: '❓',
        choices: [
          { text: 'Igama lam nguLinu.', translation: 'Meu nome é Linu.', next: 'final' },
          {
            text: 'Ewe, ndiyaphila.',
            translation: 'Sim, estou bem.',
            wrong: 'Essa resposta não diz o seu nome — “Ngubani igama lakho?” pergunta o nome. Experimente “Igama lam ngu…” (meu nome é…).',
          },
        ],
      },
      final: {
        text: 'Molo, Linu! Uxolo, enkosi!',
        translation: 'Oi, Linu! Com licença, obrigado!',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Nova amizade',
          message: 'Você se apresentou em isiXhosa: cumprimentou, disse como está e deu o seu nome. Molo!',
        },
      },
    },
    glossary: [
      ['Molo', 'oi, olá (para uma pessoa)'],
      ['Unjani', 'como você está?'],
      ['Ndiyaphila', 'eu estou bem'],
      ['Ngubani', 'quem (lit. “é quem”)'],
      ['igama', 'nome'],
      ['Uxolo', 'desculpa, com licença'],
    ],
  },
  {
    id: 'xh-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ndiyahamba',
    emoji: '🚶',
    summary: 'Um passeio curto: você anda, vê o sol e bichos pelo caminho, e diz do que gosta.',
    cultural_context:
      'A alternância entre a forma disjunta do verbo (com “-ya-”, quando nada vem depois) e a forma conjunta (sem “-ya-”, quando um objeto vem depois) é um traço central do isiXhosa, estudado em detalhe por Pitcher (2023) — “Ndiyahamba” (eu vou) ao lado de “Ndibona inja” (eu vejo um cachorro).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ndiyahamba. Ndibona ilanga.',
        translation: 'Eu vou. Eu vejo o sol.',
        emoji: '☀️',
        choices: [
          { text: 'Ndibona inja.', translation: 'Eu vejo um cachorro.', next: 'inja' },
          { text: 'Ndibona ikati.', translation: 'Eu vejo um gato.', next: 'ikati' },
        ],
      },
      inja: {
        text: 'Inja iyatya.',
        translation: 'O cachorro come.',
        emoji: '🐕',
        choices: [
          { text: 'Ndithanda inja.', translation: 'Eu gosto do cachorro.', next: 'final' },
          {
            text: 'Ndisela amanzi.',
            translation: 'Eu bebo água.',
            wrong: 'Essa frase muda de assunto — para reagir ao cachorro, experimente “Ndithanda inja.” (eu gosto do cachorro).',
          },
        ],
      },
      ikati: {
        text: 'Ikati iyasela.',
        translation: 'O gato bebe.',
        emoji: '🐈',
        choices: [
          { text: 'Ndithanda ikati.', translation: 'Eu gosto do gato.', next: 'final' },
          {
            text: 'Ndibona umlilo.',
            translation: 'Eu vejo fogo.',
            wrong: 'Essa frase muda de assunto — para reagir ao gato, experimente “Ndithanda ikati.” (eu gosto do gato).',
          },
        ],
      },
      final: {
        text: 'Ndiyaphila! Enkosi.',
        translation: 'Estou bem! Obrigado.',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Um bom passeio',
          message: 'Você descreveu o passeio em isiXhosa — o que viu, usando a forma conjunta, e do que gostou!',
        },
      },
    },
    glossary: [
      ['Ndiyahamba', 'eu vou, eu ando'],
      ['ilanga', 'sol'],
      ['inja', 'cachorro'],
      ['ikati', 'gato'],
      ['amanzi', 'água'],
      ['umlilo', 'fogo'],
    ],
  },
];
