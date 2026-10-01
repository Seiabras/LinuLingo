import type { GrammarTopic } from '../types';

/** Tópicos de gramática do mirandês — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_MWL: GrammarTopic[] = [
  {
    id: 'mwl-g1',
    level: 'A1.1',
    title: 'Pronúncia: sons que o português já não tem',
    emoji: '🔤',
    summary: 'O mirandês guardou sons que o latim tinha e o português perdeu com o tempo.',
    sections: [
      {
        text: 'A ortografia usa o alfabeto latino com uma base parecida com a do português (lh, nh), mas representa sons mais antigos: o “f” inicial do latim ficou onde o espanhol o trocou por “h”, e há mais sons de “s”/“z” do que no português moderno.',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['lh', 'como o “lh” do português', 'lheite (leite)'],
            ['ç', 'um “s” surdo', 'çculpe (desculpe)'],
            ['ei', 'ditongo próprio, mais fechado que no português', 'deimingo (domingo)'],
          ],
        },
        examples: [
          ['Buonos dies!', 'Bom dia!'],
          ['L lheite ye branco.', 'O leite é branco.'],
        ],
      },
    ],
    pitfalls: ['Ler “ç” como o “ç” do português (som de “s” antes de a/o/u): no mirandês ele aparece em mais contextos.', 'Achar que o mirandês é só português com sotaque: a gramática e o vocabulário têm regras próprias.'],
    quiz: [
      { question: 'O que quer dizer “lheite”?', options: ['leite', 'lenha', 'leve'], answer: 'leite', explanation: '“Lheite” é a forma mirandesa de “leite”, com o “lh” no lugar do “l” simples do latim “lacte”.' },
      { question: 'Como se diz “bom dia”?', options: ['Buonos dies', 'Buonas nuites', 'Adius'], answer: 'Buonos dies', explanation: '“Buonos dies” serve de manhã; à noite usa-se “buonas nuites”.' },
    ],
  },
  {
    id: 'mwl-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo ser',
    emoji: '🙋',
    summary: 'Seis pronomes e um verbo ser com forma própria para cada um.',
    sections: [
      {
        text: 'O mirandês costuma dizer o pronome, como o português: “eu sou”, “tu sós”. O verbo “ser” cobre o que a pessoa é; para dizer onde alguém está, usa-se uma forma própria do verbo estar, como “cumo stá?”.',
        table: {
          head: ['Pronome', 'Tradução', 'ser'],
          rows: [
            ['eu', 'eu', 'sou'],
            ['tu', 'tu, você', 'sós'],
            ['el / eilha', 'ele / ela', 'yê'],
            ['nós', 'nós', 'somos'],
            ['bós', 'vocês; o senhor (formal)', 'sodes'],
            ['eilhes / eilhas', 'eles / elas', 'son'],
          ],
        },
        examples: [
          ['Eu sou de Miranda.', 'Eu sou de Miranda.'],
          ['Nós somos amigos.', 'Nós somos amigos.'],
        ],
      },
    ],
    pitfalls: ['Confundir “yê” (ele/ela é) com “ye”, que também aparece em frases descritivas como “l pan ye buono” — é a mesma palavra, só a grafia varia um pouco entre fontes.'],
    quiz: [
      { question: 'Complete: “Eu ___ de Miranda.”', answer: 'sou', options: ['sou', 'yê', 'somos'], explanation: '“Sou” é a forma de “ser” para “eu”.' },
      { question: '“Bós” serve para…', options: ['vocês e o tratamento formal', 'só para nós', 'só para eles'], answer: 'vocês e o tratamento formal', explanation: 'Como o “vós” antigo do português, “bós” é plural e também forma educada de falar com uma pessoa.' },
    ],
  },
  {
    id: 'mwl-g3',
    level: 'A1.2',
    title: 'O artigo l/la e o possessivo',
    emoji: '👪',
    summary: 'Artigo definido l/la e possessivos mie/miu que concordam com a coisa possuída.',
    sections: [
      {
        text: 'O artigo definido é “l” (masculino) e “la” (feminino). O possessivo concorda em gênero com a coisa possuída, não com quem possui: “miu pai” (meu pai, masculino) e “mie mai” (minha mãe, feminino).',
        table: {
          head: ['', 'masculino', 'feminino'],
          rows: [
            ['o/a + palavra', 'l pan', 'la casa'],
            ['meu/minha', 'miu pai', 'mie mai'],
          ],
        },
        examples: [
          ['La mie casa ye pequeinha.', 'A minha casa é pequena.'],
          ['Miu pai ye de Miranda.', 'Meu pai é de Miranda.'],
        ],
      },
    ],
    pitfalls: ['Usar “miu”/“mie” sem olhar o gênero da coisa possuída: é “mie mai” (mãe, feminino), nunca “miu mai”.'],
    quiz: [
      { question: 'Como se diz “a minha casa”?', options: ['la mie casa', 'l miu casa', 'la miu casa'], answer: 'la mie casa', explanation: '“Casa” é feminina, então o artigo é “la” e o possessivo é “mie”.' },
      { question: 'Como se diz “meu pai”?', options: ['miu pai', 'mie pai', 'l pai'], answer: 'miu pai', explanation: '“Pai” é masculino, então o possessivo é “miu”.' },
    ],
  },
  {
    id: 'mwl-g4',
    level: 'A1.2',
    title: 'O verbo tener (ter)',
    emoji: '🤲',
    summary: '“Tener” muda bastante de forma conforme a pessoa, como no espanhol e no asturiano vizinhos.',
    sections: [
      {
        text: 'O verbo ter é “tener”, e aparece muito para falar de família: “tengo trés moços i ua moça” (tenho três filhos e uma filha).',
        table: {
          head: ['Pronome', 'tener'],
          rows: [
            ['eu', 'tengo'],
            ['tu', 'tenes'],
            ['el / eilha', 'ten'],
            ['nós', 'tenemos'],
            ['bós', 'teneis'],
            ['eilhes / eilhas', 'ténen'],
          ],
        },
        examples: [
          ['Tengo un armano i ua armana.', 'Tenho um irmão e uma irmã.'],
          ['Tenes armanos?', 'Você tem irmãos?'],
        ],
      },
    ],
    pitfalls: ['Confundir “tener” (ter) com “ser” (ser/estar): “tengo un armano” é “tenho um irmão”, não “sou um irmão”.'],
    quiz: [
      { question: 'Como se diz “eu tenho um irmão”?', options: ['Tengo un armano.', 'Sou un armano.', 'Armano tengo.'], answer: 'Tengo un armano.', explanation: '“Tengo” é a forma de “tener” para “eu”.' },
      { question: '“Tenes armanas?” pergunta sobre…', options: ['irmãs', 'irmãos', 'filhos'], answer: 'irmãs', explanation: '“Armanas” é o plural feminino de “armana” (irmã).' },
    ],
  },
];
