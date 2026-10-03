import type { StorySeed } from '../types';

/**
 * Histórias interativas do zulu (isiZulu) — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto.
 * As falas só combinam palavras atestadas (ver vocabulario.ts) com os padrões de frase também atestados:
 * saudações fixas, a cópula “ng(u)-”, e a alternância disjunta/conjunta do presente (forma disjunta, com
 * “-ya-”, quando o verbo fecha a oração; forma conjunta, sem “-ya-”, quando o verbo é seguido de objeto)
 * — nunca uma palavra ou concordância nova inventada.
 */
export const STORIES_ZU: StorySeed[] = [
  {
    id: 'zu-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Sawubona, Thandiwe!',
    emoji: '👋',
    summary: 'Você encontra a Thandiwe na rua e troca as primeiras palavras em isiZulu: cumprimento, como está e o seu nome.',
    cultural_context:
      '“Sawubona” (para uma pessoa) e “Sanibonani” (para várias pessoas, ou com respeito a alguém mais velho ou a um estranho) abrem qualquer conversa em isiZulu — e “Unjani?” (como você está?) costuma vir logo depois.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Sawubona! Unjani?',
        translation: 'Oi! Como você está?',
        emoji: '👋',
        choices: [
          { text: 'Ngiyaphila, ngiyabonga.', translation: 'Estou bem, obrigado.', next: 'nome' },
          {
            text: 'Ngiyabonga, Thandiwe!',
            translation: 'Obrigado, Thandiwe!',
            wrong: 'Isso agradece, mas não responde “como você está?”. Experimente “Ngiyaphila, ngiyabonga.” (estou bem, obrigado).',
          },
        ],
      },
      nome: {
        text: 'Mina ngiyaphila. Ungubani igama lakho?',
        translation: 'Eu estou bem. Qual é o seu nome?',
        emoji: '❓',
        choices: [
          { text: 'Igama lami nginguLinu.', translation: 'Meu nome é Linu.', next: 'final' },
          {
            text: 'Yebo, ngiyaphila.',
            translation: 'Sim, estou bem.',
            wrong: 'Essa resposta não diz o seu nome — “Ungubani igama lakho?” pergunta o nome. Experimente “Igama lami ngingu…” (meu nome é…).',
          },
        ],
      },
      final: {
        text: 'Sawubona, Linu! Ngiyaxolisa, ngiyabonga!',
        translation: 'Oi, Linu! Com licença, obrigado!',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Nova amizade',
          message: 'Você se apresentou em isiZulu: cumprimentou, disse como está e deu o seu nome. Sawubona!',
        },
      },
    },
    glossary: [
      ['Sawubona', 'oi, olá (para uma pessoa)'],
      ['Unjani', 'como você está?'],
      ['Ngiyaphila', 'eu estou bem'],
      ['Ungubani', 'qual é/quem é (forma usada em “qual é o seu nome?”)'],
      ['igama', 'nome'],
      ['Ngiyaxolisa', 'desculpa, eu peço desculpas'],
    ],
  },
  {
    id: 'zu-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ngiyahamba',
    emoji: '🚶',
    summary: 'Um passeio curto: você anda, vê o sol e bichos pelo caminho, e diz do que gosta.',
    cultural_context:
      'A alternância entre a forma disjunta do verbo (com “-ya-”, quando nada vem depois) e a forma conjunta (sem “-ya-”, quando um objeto vem depois) é um traço central do isiZulu, confirmado em várias tabelas de conjugação do Wiktionary — “Ngiyahamba” (eu vou) ao lado de “Ngibona inja” (eu vejo um cachorro).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ngiyahamba. Ngibona ilanga.',
        translation: 'Eu vou. Eu vejo o sol.',
        emoji: '☀️',
        choices: [
          { text: 'Ngibona inja.', translation: 'Eu vejo um cachorro.', next: 'inja' },
          { text: 'Ngibona ikati.', translation: 'Eu vejo um gato.', next: 'ikati' },
        ],
      },
      inja: {
        text: 'Inja iyadla.',
        translation: 'O cachorro come.',
        emoji: '🐕',
        choices: [
          { text: 'Ngithanda inja.', translation: 'Eu gosto do cachorro.', next: 'final' },
          {
            text: 'Ngifuna amanzi.',
            translation: 'Eu quero água.',
            wrong: 'Essa frase muda de assunto — para reagir ao cachorro, experimente “Ngithanda inja.” (eu gosto do cachorro).',
          },
        ],
      },
      ikati: {
        text: 'Ikati liyadla.',
        translation: 'O gato come.',
        emoji: '🐈',
        choices: [
          { text: 'Ngithanda ikati.', translation: 'Eu gosto do gato.', next: 'final' },
          {
            text: 'Ngibona umlilo.',
            translation: 'Eu vejo fogo.',
            wrong: 'Essa frase muda de assunto — para reagir ao gato, experimente “Ngithanda ikati.” (eu gosto do gato).',
          },
        ],
      },
      final: {
        text: 'Ngiyaphila! Ngiyabonga.',
        translation: 'Estou bem! Obrigado.',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Um bom passeio',
          message: 'Você descreveu o passeio em isiZulu — o que viu, usando a forma conjunta, e do que gostou!',
        },
      },
    },
    glossary: [
      ['Ngiyahamba', 'eu vou, eu ando'],
      ['ilanga', 'sol'],
      ['inja', 'cachorro'],
      ['ikati', 'gato'],
      ['amanzi', 'água'],
      ['umlilo', 'fogo'],
    ],
  },
];
