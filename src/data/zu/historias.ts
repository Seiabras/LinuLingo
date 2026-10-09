import type { StorySeed } from '../types';

/**
 * Histórias interativas do zulu (isiZulu) — uma por nível em A1 (A1.1 e A1.2) e, a partir desta sessão,
 * também uma por nível em A2 (A2.1 e A2.2 — pacote agora completo até A2.2, ver `incomplete` em
 * index.ts). As falas só combinam palavras atestadas (ver vocabulario.ts) com os padrões de frase também
 * atestados: saudações fixas, a cópula “ng(u)-”, a alternância disjunta/conjunta do presente (forma
 * disjunta, com “-ya-”, quando o verbo fecha a oração ou é seguido só de advérbio; forma conjunta, sem
 * “-ya-”, quando o verbo é seguido de um objeto direto) e, nas histórias novas, o futuro (“-zo-”, que não
 * alterna como o presente, atestado em en.wikipedia.org/wiki/Zulu_grammar mesmo seguido de objeto, como
 * em “Ngizomsiza”) — nunca uma palavra, uma concordância ou um possessivo não atestados (por isso as
 * histórias evitam, por exemplo, “meu amigo”, cujo possessivo de classe 1 não foi confirmado em nenhuma
 * fonte consultada, preferindo “um amigo”, sem posse marcada).
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
  {
    id: 'zu-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Namhlanje ngisebenza',
    emoji: '💼',
    summary: 'Um dia comum: você conta o que fez ontem, o que faz hoje, e cuida de uma loja até a noite.',
    cultural_context:
      'O isiZulu marca o passado recente com o sufixo “-ile” (“Ngihambile”, eu fui) e o futuro com o prefixo “-zo-” (“Ngizovala”, eu vou fechar) — duas formas confirmadas em en.wikipedia.org/wiki/Zulu_grammar e usadas juntas nesta história para contar um dia inteiro.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ngihambile izolo. Namhlanje ngiyasebenza.',
        translation: 'Eu fui ontem. Hoje eu trabalho.',
        emoji: '💼',
        choices: [
          { text: 'Ngizolala ebusuku.', translation: 'Eu vou dormir de noite.', next: 'loja' },
          {
            text: 'Ngiyaphuma kusasa.',
            translation: 'Eu saio amanhã.',
            wrong: 'Essa frase pula para o futuro sem terminar a ideia de hoje — experimente continuar com “Ngizolala ebusuku.” (eu vou dormir de noite).',
          },
        ],
      },
      loja: {
        text: 'Ngivula isitolo.',
        translation: 'Eu abro a loja.',
        emoji: '🏪',
        choices: [
          { text: 'Ngithenga ukudla.', translation: 'Eu compro comida.', next: 'final' },
          {
            text: 'Ngivala isitolo.',
            translation: 'Eu fecho a loja.',
            wrong: 'Você acabou de abrir a loja — ainda não é hora de fechar. Experimente “Ngithenga ukudla.” (eu compro comida).',
          },
        ],
      },
      final: {
        text: 'Ngizovala isitolo ebusuku. Hamba kahle!',
        translation: 'Eu vou fechar a loja de noite. Vá bem!',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Um bom dia de trabalho',
          message: 'Você descreveu um dia inteiro em isiZulu: o que fez ontem, o que faz hoje e o que vai fazer à noite!',
        },
      },
    },
    glossary: [
      ['izolo', 'ontem'],
      ['namhlanje', 'hoje'],
      ['sebenza', 'trabalhar'],
      ['vula', 'abrir'],
      ['vala', 'fechar'],
      ['thenga', 'comprar'],
    ],
  },
  {
    id: 'zu-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Ngizothenga isipho',
    emoji: '🎁',
    summary: 'Um plano para amanhã: comprar um presente, entrar numa loja e ajudar um amigo.',
    cultural_context:
      'O futuro do isiZulu (“-zo-”/“-yo-”) e a concordância de objeto (“-m-”, de classe 1, em “Ngimnika”, eu dou a ele/ela) aparecem juntos nesta história, do mesmo jeito confirmado em en.wikipedia.org/wiki/Zulu_grammar, no exemplo “Ngizomsiza” (eu vou ajudá-lo/a).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Kusasa ngizothenga isipho.',
        translation: 'Amanhã eu vou comprar um presente.',
        emoji: '🎁',
        choices: [
          { text: 'Ngifuna imali.', translation: 'Eu quero dinheiro.', next: 'isitolo' },
          {
            text: 'Ngiyalala.',
            translation: 'Eu durmo.',
            wrong: 'Essa frase muda de assunto — para seguir o plano de compras, experimente “Ngifuna imali.” (eu quero dinheiro).',
          },
        ],
      },
      isitolo: {
        text: 'Ngibona isitolo. Ngiyangena.',
        translation: 'Eu vejo uma loja. Eu entro.',
        emoji: '🏪',
        choices: [
          { text: 'Ngibona umngane.', translation: 'Eu vejo um amigo.', next: 'amigo' },
          {
            text: 'Ngiyaphuma.',
            translation: 'Eu saio.',
            wrong: 'Você acabou de entrar — ainda não é hora de saír. Experimente “Ngibona umngane.” (eu vejo um amigo).',
          },
        ],
      },
      amigo: {
        text: 'Umngane uyasiza.',
        translation: 'O amigo ajuda.',
        emoji: '🤲',
        choices: [
          { text: 'Ngimnika isipho.', translation: 'Eu dou um presente a ele/ela.', next: 'final' },
          {
            text: 'Ngicela imali.',
            translation: 'Eu peço dinheiro.',
            wrong: 'Essa frase não reage à ajuda do amigo — experimente agradecer dando o presente: “Ngimnika isipho.” (eu dou um presente a ele/ela).',
          },
        ],
      },
      final: {
        text: 'Ngiyabonga! Sala kahle.',
        translation: 'Obrigado! Fique bem.',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Um presente para o amigo',
          message: 'Você planejou uma compra no futuro, entrou na loja e ajudou um amigo com um presente — tudo em isiZulu!',
        },
      },
    },
    glossary: [
      ['kusasa', 'amanhã'],
      ['imali', 'dinheiro'],
      ['isitolo', 'loja'],
      ['umngane', 'amigo'],
      ['siza', 'ajudar'],
      ['nika', 'dar'],
    ],
  },
];
