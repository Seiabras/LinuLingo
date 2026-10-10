import type { GrammarTopic } from '../types';

/** Tópicos de gramática do friulano — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_FUR: GrammarTopic[] = [
  {
    id: 'fur-g1',
    level: 'A1.1',
    title: 'Pronúncia: cj, gj, ç e as vogais longas',
    emoji: '🔤',
    summary: 'O friulano usa o alfabeto latino com algumas letras próprias para sons “molhados” e um circunflexo que marca vogal longa.',
    sections: [
      {
        text: 'Quase tudo se lê como em italiano. As novidades são os sons feitos com a língua no céu da boca e as vogais longas, que mudam o sentido das palavras.',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['cj', '“k” molhado, entre “k” e “tch”', 'cjase (casa)'],
            ['gj', '“g” molhado, entre “g” e “dj”', 'gjat (gato)'],
            ['ç', '“tch”', 'piçul (pequeno)'],
            ['â ê î ô û', 'vogal longa', 'sûr (irmã), cîl (céu)'],
          ],
        },
        examples: [
          ['Il gjat al è piçul.', 'O gato é pequeno.'],
          ['O ai une sûr.', 'Tenho uma irmã.'],
        ],
      },
    ],
    pitfalls: ['Ignorar o circunflexo: a vogal longa faz parte da palavra e às vezes muda o sentido.', 'Ler “cj” como “c” + “j”: é um som só.'],
    quiz: [
      { question: 'Qual palavra tem um “k” molhado?', options: ['cjase', 'pan', 'lat'], answer: 'cjase', explanation: 'O grupo “cj” marca o som molhado, entre “k” e “tch”.' },
      { question: 'O que marca o acento em “sûr”?', options: ['vogal longa', 'sílaba sem som', 'vogal nasal'], answer: 'vogal longa', explanation: 'O circunflexo friulano indica que a vogal é longa.' },
    ],
  },
  {
    id: 'fur-g2',
    level: 'A1.1',
    title: 'Os clíticos de sujeito e o verbo jessi',
    emoji: '🙋',
    summary: 'Antes do verbo vem sempre uma palavrinha que repete o sujeito: o, tu, al, e, o, o, a.',
    sections: [
      {
        text: 'O pronome forte (jo, tu, lui…) pode cair, mas o clítico fica: “(jo) o soi di Udin”. É parecido com o francês falado, em que “moi, je suis” repete o sujeito.',
        table: {
          head: ['Pronome', 'Clítico + jessi', 'Tradução'],
          rows: [
            ['jo', 'o soi', 'eu sou'],
            ['tu', 'tu sês', 'você é'],
            ['lui / jê', 'al è / e je', 'ele é / ela é'],
            ['nô', 'o sin', 'nós somos'],
            ['vô', 'o sês', 'vocês são; o senhor é'],
            ['lôr', 'a son', 'eles, elas são'],
          ],
        },
        examples: [
          ['O soi di São Paulo.', 'Sou de São Paulo.'],
          ['Nô o sin amîs.', 'Nós somos amigos.'],
        ],
      },
    ],
    pitfalls: ['Esquecer o clítico: “jo soi” está incompleto; o certo é “jo o soi”.'],
    quiz: [
      { question: 'Complete: “Lui ___ è di Udin.”', options: ['al', 'o', 'e'], answer: 'al', explanation: '“Al” é o clítico de “lui” (ele).' },
      { question: 'Como se diz “ela é”?', options: ['e je', 'al è', 'o soi'], answer: 'e je', explanation: 'Com “jê” (ela), o clítico é “e” e o verbo fica “je”.' },
    ],
  },
  {
    id: 'fur-g3',
    level: 'A1.2',
    title: 'Artigos e plural em -s',
    emoji: '👪',
    summary: 'Artigos il/la/i/lis e um plural que, como no português, acrescenta -s.',
    sections: [
      {
        text: 'Os masculinos fazem o plural com -s (fradi → fradis) e os femininos em -e trocam o -e por -is (cjase → cjasis).',
        table: {
          head: ['', 'singular', 'plural'],
          rows: [
            ['masculino', 'il fradi', 'i fradis'],
            ['feminino', 'la cjase', 'lis cjasis'],
            ['meu / minha', 'il gno amì / la mê amie', 'i miei amîs / lis mês amiis'],
          ],
        },
        examples: [
          ['O ai doi fradis.', 'Tenho dois irmãos.'],
          ['La mê famee e je grande.', 'A minha família é grande.'],
        ],
      },
    ],
    pitfalls: ['Fazer o plural feminino só com -s: “cjases” está errado; o certo é “cjasis”.'],
    quiz: [
      { question: 'Qual é o plural de “cjase”?', options: ['cjasis', 'cjases', 'cjase'], answer: 'cjasis', explanation: 'Os femininos em -e fazem o plural em -is.' },
      { question: 'Como se diz “os irmãos”?', options: ['i fradis', 'il fradis', 'lis fradis'], answer: 'i fradis', explanation: 'O artigo masculino plural é “i”.' },
    ],
  },
  {
    id: 'fur-g4',
    level: 'A1.2',
    title: 'Vê (ter) e plasê (gostar)',
    emoji: '❤️',
    summary: 'O verbo “vê” (ter) e o “plasê”, que funciona como o “gustar” do espanhol.',
    sections: [
      {
        text: '“Plasê” é como “agradar”: o que agrada é o sujeito. “Mi plâs il formadi” quer dizer “o queijo me agrada”, ou seja, eu gosto de queijo.',
        table: {
          head: ['Pronome', 'vê', 'Tradução'],
          rows: [
            ['jo', 'o ai', 'eu tenho'],
            ['tu', 'tu âs', 'você tem'],
            ['lui / jê', 'al à / e à', 'ele / ela tem'],
            ['nô', 'o vin', 'nós temos'],
            ['vô', 'o vês', 'vocês têm'],
            ['lôr', 'a àn', 'eles, elas têm'],
          ],
        },
        examples: [
          ['O ai un gjat.', 'Tenho um gato.'],
          ['Mi plâs une vore il furlan.', 'Eu gosto muito do friulano.'],
        ],
      },
    ],
    pitfalls: ['Dizer “o plâs il formadi” para “eu gosto de queijo”: o certo é “mi plâs il formadi”.'],
    quiz: [
      { question: 'Como se diz “eu gosto de pão”?', options: ['Mi plâs il pan.', 'O plasê il pan.', 'Jo o plâs pan.'], answer: 'Mi plâs il pan.', explanation: 'Com “plasê”, a pessoa que gosta vem como “mi” (me), e o pão é o sujeito.' },
      { question: 'Complete: “Nô ___ doi cjans.”', options: ['o vin', 'o ai', 'a àn'], answer: 'o vin', explanation: '“O vin” é “nós temos”.' },
    ],
  },
  {
    id: 'fur-g5',
    level: 'A2.1',
    title: 'O futuro sintético: -arai, -arâs, -arà…',
    emoji: '🔮',
    summary: 'Diferente do romanche e do sardo, o friulano forma o futuro sem verbo auxiliar: é uma terminação só, acrescentada ao radical do infinitivo (confirmado na conjugação de “fevelâ”, falar).',
    sections: [
      {
        table: {
          head: ['Pronome', 'fevelâ (futuro)', 'Tradução'],
          rows: [
            ['jo', 'o fevelarai', 'eu vou falar'],
            ['tu', 'tu fevelarâs', 'você vai falar'],
            ['lui/jê', 'al/e fevelarà', 'ele/ela vai falar'],
            ['nô', 'o fevelarìn', 'nós vamos falar'],
            ['vô', 'o fevelarês', 'vocês vão falar'],
            ['lôr', 'a fevelaran', 'eles, elas vão falar'],
          ],
        },
        text: 'As terminações do futuro (-arai, -arâs, -arà, -arìn, -arês, -aran) se acrescentam ao radical do infinitivo (fevel-) dos verbos em -â. É um futuro sintético, como o português “falarei”, bem diferente do futuro perifrástico do romanche (“vegn a fevelâ”) e do sardo (“apo a faeddare”).',
        examples: [
          ['Doman o lavorarai.', 'Amanhã eu vou trabalhar.'],
          ['A fevelaran furlan cun nô.', 'Eles vão falar friulano com a gente.'],
        ],
      },
    ],
    pitfalls: ['Tentar formar o futuro friulano com um verbo auxiliar, como no romanche ou no sardo: o friulano usa só uma terminação, sem auxiliar.'],
    quiz: [{ question: 'Como se diz "eu vou falar" em friulano?', options: ['o fevelarai', 'o vegni a fevelâ', 'o ai a fevelâ'], answer: 'o fevelarai', explanation: 'O futuro friulano é sintético: a terminação “-arai” se junta direto ao radical do verbo.' }],
  },
  {
    id: 'fur-g6',
    level: 'A2.2',
    title: 'Comparativo com “plui”',
    emoji: '📊',
    summary: '“Plui” (mais, do latim plus — confirmado no Wikcionário como a forma comparativa de “molt”) vem antes do adjetivo pra formar o comparativo; o superlativo junta o artigo.',
    sections: [
      {
        text: '“Plui” funciona como o “mais” do português, cognato do italiano “più”. Pro segundo termo da comparação, usa-se “di”.',
        examples: [
          ['La mê cjase e je plui grande di chê tô.', 'Minha casa é maior que a sua.'],
          ['Chest al è il plui bon formadi.', 'Este é o melhor (mais bom) queijo.'],
        ],
      },
    ],
    pitfalls: ['Esquecer o artigo no superlativo: “plui bon” é só “melhor” (comparativo); “il plui bon” é “o melhor” (superlativo).'],
    quiz: [{ question: 'Como se diz "minha casa é maior" em friulano?', options: ['la mê cjase e je plui grande', 'la mê cjase plui e je grande', 'plui la mê cjase e je grande'], answer: 'la mê cjase e je plui grande', explanation: '“Plui” vem direto antes do adjetivo: “plui grande”.' }],
  },
];
