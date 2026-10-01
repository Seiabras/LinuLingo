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
];
