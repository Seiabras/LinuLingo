import type { GrammarTopic } from '../types';

/** Tópicos de gramática do buriato — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_BXR: GrammarTopic[] = [
  {
    id: 'bxr-g1',
    level: 'A1.1',
    title: 'As vogais e as três letras extras: Үү, Өө, Һһ',
    emoji: '🔤',
    summary: 'O buriato tem sete vogais e usa três letras cirílicas que o alfabeto russo não tem.',
    sections: [
      {
        text: 'O cirílico buriato, adotado em 1939, é o alfabeto russo mais três letras: Үү, Өө e Һһ (en.wikipedia.org/wiki/Buryat_language). As vogais do buriato somam sete timbres — /i, ʉ, e, a, u, o, ɔ/ — que podem ser curtos ou longos (escritos dobrados: аа, оо, ээ) e seguem harmonia vocálica, um traço comum às línguas mongólicas: os sufixos tendem a repetir o timbre das vogais da palavra a que se prendem (a fonte consultada não detalha as classes exatas de harmonia do buriato, então esta lição fica só na regra geral).',
        table: {
          head: ['Letra', 'Som aproximado', 'Exemplo'],
          rows: [
            ['һ', 'um “h” aspirado, que o português não tem', 'һайн (bom), һара (lua)'],
            ['ү', '“u” fechado com os lábios arredondados (como o alemão ü)', 'нүхэр (amigo)'],
            ['ө', '“o” mais aberto e central (como o alemão ö)', 'мүнөө (agora)'],
            ['аа, оо, ээ', 'vogal longa: o dobro da duração da vogal simples', 'сагаан (branco), баабгай (urso)'],
          ],
        },
        examples: [
          ['Һайн байна!', 'Está bem! (cumprimento)'],
          ['Эндэ һара байна.', 'Há lua aqui.'],
        ],
      },
    ],
    pitfalls: [
      'Confundir һ com o “h” mudo do português: no buriato ele se pronuncia, parecido com uma aspiração.',
      'Ler ү e ө como u e o comuns: são vogais arredondadas diferentes, que mudam o sentido da palavra.',
    ],
    quiz: [
      {
        question: 'Quais três letras o cirílico buriato acrescenta ao alfabeto russo?',
        options: ['Үү, Өө, Һһ', 'Її, Єє, Ґґ', 'Ёё, Йй, Щщ'],
        answer: 'Үү, Өө, Һһ',
        explanation: 'Confirmado por en.wikipedia.org/wiki/Buryat_language: o cirílico buriato, adotado em 1939, acrescenta essas três letras ao alfabeto russo.',
      },
      {
        question: 'O que significa “һайн”?',
        options: ['bom, bem', 'mau, ruim', 'novo'],
        answer: 'bom, bem',
        explanation: '“Һайн” é a forma buriata de “bom”, irmã do mongol khalkha “сайн” (mesma raiz proto-mongólica).',
      },
    ],
  },
  {
    id: 'bxr-g2',
    level: 'A1.1',
    title: 'Oito casos, uma língua aglutinante',
    emoji: '🧩',
    summary: 'O buriato acrescenta sufixos a um tema para marcar função gramatical, incluindo oito casos.',
    sections: [
      {
        text: 'Segundo en.wikipedia.org/wiki/Buryat_language, o buriato tem oito casos gramaticais: nominativo (sujeito, sem marca própria), acusativo (objeto direto), genitivo (posse), instrumental, ablativo (“de, desde”), comitativo (“junto com”), dativo-locativo (“para, em”) e um tema oblíquo, usado como base de outros sufixos. A fonte consultada não traz a forma exata de cada sufixo (cada um muda de som pela harmonia vocálica) — por isso esta lição apresenta só os NOMES dos casos, sem inventar terminações.',
        table: {
          head: ['Caso', 'Para que serve'],
          rows: [
            ['Nominativo', 'o sujeito da frase, sem sufixo'],
            ['Acusativo', 'o objeto direto'],
            ['Genitivo', 'posse (“de alguém”)'],
            ['Instrumental', 'o meio ou instrumento (“com, por meio de”)'],
            ['Ablativo', 'origem (“de, desde”)'],
            ['Comitativo', 'companhia (“junto com”)'],
            ['Dativo-locativo', 'destino ou lugar (“para, em”)'],
          ],
        },
        examples: [['Би эндэ байнаб.', 'Eu estou aqui. (“би”, nominativo, sem sufixo)']],
      },
    ],
    pitfalls: [
      'Esperar uma palavra separada para “de”, “para”, “com”: no buriato essas relações viram sufixo preso ao nome, não uma palavra à parte, como as preposições do português.',
    ],
    quiz: [
      {
        question: 'Quantos casos gramaticais o buriato tem, segundo a Wikipédia?',
        options: ['Oito', 'Quatro', 'Doze'],
        answer: 'Oito',
        explanation: 'Nominativo, acusativo, genitivo, instrumental, ablativo, comitativo, dativo-locativo e um tema oblíquo.',
      },
      {
        question: 'Como o buriato costuma marcar relações como “de”, “para”, “com”?',
        options: ['Com sufixos de caso presos ao nome', 'Com preposições soltas, como o português', 'Essas relações não existem no buriato'],
        answer: 'Com sufixos de caso presos ao nome',
        explanation: 'É uma língua aglutinante: a relação gramatical vira sufixo, não uma palavra separada.',
      },
    ],
  },
  {
    id: 'bxr-g3',
    level: 'A1.2',
    title: 'Ordem SOV e só posposições',
    emoji: '🔚',
    summary: 'O buriato põe o verbo no final da frase e usa só posposições, nunca preposições soltas antes do nome.',
    sections: [
      {
        text: 'A Wikipédia descreve o buriato como uma língua “SOV que faz uso exclusivo de posposições” (en.wikipedia.org/wiki/Buryat_language): o verbo fecha a frase, e as palavras que em português viriam antes do nome (“em”, “com”, “para”) no buriato viriam depois dele, presas como sufixo (ver bxr-g2) ou como posposição separada. Nas frases deste pacote, o verbo existencial “байна” também fecha a frase: lugar/sujeito primeiro, verbo por último.',
        examples: [
          ['Эндэ нуур байна.', 'Há um lago aqui. (lit. “aqui lago há”)'],
          ['Баабгай ехэ байна.', 'O urso é grande. (lit. “urso grande é”)'],
        ],
      },
    ],
    pitfalls: ['Tentar traduzir palavra por palavra na ordem do português: em “Эндэ нуур байна”, o verbo vem por último, não no meio da frase.'],
    quiz: [
      {
        question: 'Em que posição fica o verbo numa frase buriata simples?',
        options: ['No final (SOV)', 'No início (VSO)', 'Não tem posição fixa'],
        answer: 'No final (SOV)',
        explanation: 'A Wikipédia descreve o buriato como língua SOV, com o verbo no final.',
      },
      {
        question: 'O buriato usa preposições (antes do nome) ou posposições (depois do nome)?',
        options: ['Só posposições', 'Só preposições', 'As duas, livremente'],
        answer: 'Só posposições',
        explanation: 'A Wikipédia afirma que o buriato “faz uso exclusivo de posposições”.',
      },
    ],
  },
  {
    id: 'bxr-g4',
    level: 'A1.2',
    title: 'Buriato × mongol khalkha: diferenças sonoras documentadas',
    emoji: '🔍',
    summary: 'O buriato e o mongol khalkha são línguas irmãs da família mongólica, mas com mudanças sonoras regulares e documentadas.',
    sections: [
      {
        text: 'Comparando os verbetes do Wiktionary em inglês, aparecem pelo menos duas mudanças sonoras regulares, herdadas do proto-mongólico, que separam o buriato do mongol khalkha: (1) o *s proto-mongólico virou һ no buriato em várias palavras, enquanto o khalkha manteve o с — o próprio Wiktionary classifica “һайн” (bom) como doublet de “сайн” (khalkha); o mesmo padrão aparece em “һара”/“сар” (lua) e “загаһан”/“загас” (peixe). (2) o *c proto-mongólico (uma africada) virou с no buriato e ц no khalkha: “сагаан”/“цагаан” (branco). Há também uma diferença morfológica, não só sonora: o buriato conserva o -н final de palavras que o khalkha perdeu — “морин”/“морь” (cavalo) e “нэгэн”/“нэг” (um).',
        table: {
          head: ['Mudança (do proto-mongólico)', 'Buriato', 'Khalkha'],
          rows: [
            ['*s → һ no buriato, с no khalkha', 'һайн, һара, загаһан', 'сайн, сар, загас'],
            ['*c → с no buriato, ц no khalkha', 'сагаан', 'цагаан'],
            ['-n final conservado no buriato, perdido no khalkha', 'морин, нэгэн', 'морь, нэг'],
          ],
        },
        examples: [['Һайн байна!', 'Está bem! (buriato; o khalkha diria algo como “Сайн байна уу?”)']],
      },
    ],
    pitfalls: [
      'Achar que buriato e mongol khalkha são a mesma língua com só um sotaque diferente: a própria classificação linguística oscila entre “língua própria” e “grande grupo dialetal do mongol”, mas as mudanças sonoras da tabela são regulares e documentadas, não um sotaque qualquer.',
    ],
    quiz: [
      {
        question: 'Qual é a forma buriata de “сайн” (bom) do mongol khalkha?',
        options: ['һайн', 'сайн', 'шэнэ'],
        answer: 'һайн',
        explanation: 'O Wiktionary classifica “һайн” como doublet (par histórico) de “сайн”: o *s proto-mongólico virou һ no buriato.',
      },
      {
        question: 'O que o buriato “морин” (cavalo) conserva que o khalkha “морь” perdeu?',
        options: ['O -н final', 'A vogal inicial', 'O significado da palavra'],
        answer: 'O -н final',
        explanation: 'O buriato conserva terminações antigas em -н/-м que o khalkha apagou, como em морин~морь e нэгэн~нэг.',
      },
    ],
  },
];
