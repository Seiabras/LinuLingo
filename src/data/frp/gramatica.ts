import type { GrammarTopic } from '../types';

/** Tópicos de gramática do francoprovençal — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_FRP: GrammarTopic[] = [
  {
    id: 'frp-g1',
    level: 'A1.1',
    title: 'Pronúncia: os acentos da ORB',
    emoji: '🔤',
    summary: 'A ORB (Ortografia de Referência B) usa acentos para marcar vogais abertas e fechadas, parecido com o português.',
    sections: [
      {
        text: 'Quase tudo se lê como em português ou francês. Os acentos fazem a diferença entre vogais abertas e fechadas.',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['é / ê', 'fechado, como em “você”', 'édye (água), étre (ser)'],
            ['è', 'aberto, como em “pé”', 'grant-marci, règion'],
            ['ô', '“o” fechado', 'coment, bôna (boa)'],
            ['ç', 'sempre “s”', 'francoprovènçâl'],
          ],
        },
        examples: [
          ['Bonjorn!', 'Bom dia!'],
          ['On veiro d’édye.', 'Um copo de água.'],
        ],
      },
    ],
    pitfalls: ['Ler “ç” como “k”: em francoprovençal, como em francês, é sempre “s”.', 'Confundir “é” fechado com “è” aberto: o acento muda o som da vogal.'],
    quiz: [
      { question: 'O que quer dizer “édye”?', options: ['água', 'ovo', 'idade'], answer: 'água', explanation: '“Édye” é a palavra para água na ORB.' },
      { question: 'Como soa o “ç” em “francoprovènçâl”?', options: ['Como “s”', 'Como “k”', 'Como “tch”'], answer: 'Como “s”', explanation: 'O “ç” marca sempre o som de “s”, como no francês.' },
    ],
  },
  {
    id: 'frp-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo étre',
    emoji: '🙋',
    summary: 'Seis pronomes e o verbo “étre” (ser/estar), com uma forma para cada um.',
    sections: [
      {
        text: 'Como o português, o francoprovençal costuma dizer o pronome. “Étre” serve tanto para o que a pessoa é quanto para como ela está.',
        table: {
          head: ['Pronome', 'Tradução', 'étre'],
          rows: [
            ['je', 'eu', 'su'],
            ['te', 'tu, você', 'és'],
            ['il', 'ele, ela', 'est'],
            ['nos', 'nós', 'sens'],
            ['vos', 'vocês; o senhor (formal)', 'étes'],
            ['ils', 'eles, elas', 'sont'],
          ],
        },
        examples: [
          ['Je su de Sant-Pâblo.', 'Sou de São Paulo.'],
          ['Nos sens amis.', 'Nós somos amigos.'],
        ],
      },
    ],
    pitfalls: ['Procurar um verbo “estar” separado: “je su bien” (estou bem) usa o mesmo “étre”.'],
    quiz: [
      { question: 'Complete: “Je ___ de Genèva.”', options: ['su', 'est', 'sens'], answer: 'su', explanation: '“Su” é a forma de “étre” para “je”.' },
      { question: '“Vos étes” serve para…', options: ['vocês e o tratamento formal', 'só para nós', 'só para eles'], answer: 'vocês e o tratamento formal', explanation: 'Como o “vous” francês, “vos” é o plural e também a forma educada de falar com uma pessoa.' },
    ],
  },
  {
    id: 'frp-g3',
    level: 'A1.2',
    title: 'O verbo aveir e o gênero dos adjetivos',
    emoji: '👪',
    summary: '“Aveir” é ter; os adjetivos concordam em gênero, geralmente com -a no feminino.',
    sections: [
      {
        text: 'O verbo “aveir” (ter) muda conforme a pessoa. Muitos adjetivos acrescentam “-a” para o feminino: “bon” → “bôna”, “grant” → “granta”, “petit” → “petita”.',
        table: {
          head: ['Pronome', 'aveir'],
          rows: [
            ['je', 'hai'],
            ['te', 'has'],
            ['il', 'hat'],
          ],
        },
        examples: [
          ['Je hai on frâre.', 'Tenho um irmão.'],
          ['Ma mêson est petita.', 'A minha casa é pequena.'],
        ],
      },
    ],
    pitfalls: ['Esquecer o “-a” do feminino: “la mêson est petit” soa errado; o certo é “petita”.'],
    quiz: [
      { question: 'Como se diz “eu tenho”?', options: ['Je hai.', 'Je su.', 'Je has.'], answer: 'Je hai.', explanation: '“Hai” é a forma de “aveir” para “je”.' },
      { question: 'Qual é o feminino de “grant” (grande)?', options: ['granta', 'grante', 'grand'], answer: 'granta', explanation: 'O feminino regular acrescenta “-a”.' },
    ],
  },
  {
    id: 'frp-g4',
    level: 'A1.2',
    title: 'Números e o artigo indefinido',
    emoji: '🔢',
    summary: 'Os números de 1 a 10 e o artigo indefinido “on/ona”, diante do nome.',
    sections: [
      {
        text: 'O artigo indefinido é “on” (masculino) ou “ona” (feminino), como o nosso “um/uma”. O número “yon” (um) também muda de forma conforme o gênero.',
        table: {
          head: ['Número', 'Masculino', 'Feminino'],
          rows: [
            ['1', 'yon', 'yona'],
            ['2', 'dos', 'does'],
            ['4', 'quatro', 'quat'],
          ],
        },
        examples: [
          ['On pan, se vos plai.', 'Um pão, por favor.'],
          ['Je hai dos frâres.', 'Tenho dois irmãos.'],
        ],
      },
    ],
    pitfalls: ['Usar “yon” como artigo: o artigo indefinido é “on/ona”, diferente do número “yon/yona”, mesmo soando parecido.'],
    quiz: [
      { question: 'Como se diz “dez”?', options: ['diéx', 'dis', 'dèque'], answer: 'diéx', explanation: '“Diéx” é dez em francoprovençal.' },
      { question: 'Qual artigo indefinido vai antes de um nome masculino?', options: ['on', 'ona', 'la'], answer: 'on', explanation: '“On” é o artigo indefinido masculino, equivalente a “um”.' },
    ],
  },
];
