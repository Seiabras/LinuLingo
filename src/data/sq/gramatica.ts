import type { GrammarTopic } from '../types';

/** Tópicos de gramática do albanês — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_SQ: GrammarTopic[] = [
  {
    id: 'sq-g1',
    level: 'A1.1',
    title: 'Pronúncia: o ë neutro e os nove dígrafos',
    emoji: '🔤',
    summary: 'O alfabeto albanês tem 36 letras: as 26 do latino, mais “ç”, “ë” e nove dígrafos que valem uma letra só.',
    sections: [
      {
        text: 'Cada um destes pares de letras é tratado como uma letra só no alfabeto albanês, com um som próprio — nunca se lê as duas letras separadas.',
        table: {
          head: ['Dígrafo', 'Som', 'Exemplo'],
          rows: [
            ['dh', 'como o “th” de “this” (inglês)', 'dhe (e)'],
            ['gj', 'suave, entre “d” e “j”', 'gjashtë (seis)'],
            ['ll', '“l” grosso, puxado para trás', 'mollë (maçã)'],
            ['nj', 'como o “nh” do português', 'një (um)'],
            ['rr', '“r” vibrante forte', 'rrugë (rua)'],
            ['sh', 'como o “x” de “xadrez”', 'shtëpi (casa)'],
            ['th', 'como o “th” de “think” (inglês)', 'djathë (queijo)'],
            ['xh', 'como o “j” do inglês “jungle”', 'xhaxhai (tio)'],
          ],
        },
        examples: [
          ['Shtëpia ime.', 'A minha casa.'],
          ['Dua djathë.', 'Eu quero queijo.'],
        ],
      },
      {
        heading: 'A vogal ë',
        text: 'A letra “ë” é uma vogal neutra, parecida com o “e” mudo do francês ou o fim de “the” em inglês. Em muitas palavras, sobretudo no fim, ela quase desaparece na fala rápida — mas nunca se escreve sem ela.',
        examples: [
          ['vëlla', 'irmão'],
          ['pesë', 'cinco'],
        ],
      },
    ],
    pitfalls: [
      'Ler cada letra do dígrafo separadamente: “sh”, “xh”, “gj” etc. são letras únicas do alfabeto albanês, não duas letras juntas.',
      'Confundir “ë” com um “e” comum: ele é uma vogal neutra, mais fechada e mais curta.',
    ],
    quiz: [
      { question: 'Como soa o dígrafo “sh” em “shtëpi” (casa)?', options: ['Como o “x” de “xadrez”', 'Como “s” + “h” separados', 'Como o “ch” do francês'], answer: 'Como o “x” de “xadrez”', explanation: '“Sh” é sempre um som só, igual ao “x” português.' },
      { question: 'O que é a letra “ë”?', options: ['Uma vogal neutra, parecida com o “e” mudo do francês', 'Um “e” comum, igual ao do português', 'Uma consoante'], answer: 'Uma vogal neutra, parecida com o “e” mudo do francês', explanation: '“Ë” tem som próprio, mais curto e fechado que o “e” do português.' },
    ],
  },
  {
    id: 'sq-g2',
    level: 'A1.1',
    title: 'O verbo jam (ser/estar) e os pronomes',
    emoji: '🙋',
    summary: '“Jam” é irregular; como a terminação do verbo já mostra a pessoa, o pronome pode ser deixado de fora quando não há dúvida.',
    sections: [
      {
        text: 'O verbo ser/estar é “jam”, irregular no presente. Como em italiano ou espanhol, o albanês costuma dispensar o pronome quando o verbo já deixa claro quem fala — mas ele aparece para dar ênfase ou tirar uma dúvida, como em “Po ti?” (e você?).',
        table: {
          head: ['Pronome', 'Tradução', 'jam'],
          rows: [
            ['unë', 'eu', 'jam'],
            ['ti', 'tu, você', 'je'],
            ['ai / ajo', 'ele / ela', 'është'],
            ['ne', 'nós', 'jemi'],
            ['ju', 'vocês; o senhor (formal)', 'jeni'],
            ['ata / ato', 'eles, elas', 'janë'],
          ],
        },
        examples: [
          ['Unë jam nga Sao Paulo.', 'Eu sou de São Paulo.'],
          ['Ata janë miq.', 'Eles são amigos.'],
        ],
      },
    ],
    pitfalls: [
      'Estranhar a falta do pronome: “Jam mirë” (estou bem) já diz “eu” pela terminação do verbo.',
      'Confundir “jeni” (vocês/formal) com “janë” (eles, elas): parecidos, mas diferentes.',
    ],
    quiz: [
      { question: 'Complete: “Unë ___ nga Tirana.”', options: ['jam', 'je', 'jemi'], answer: 'jam', explanation: '“Jam” é a forma de “unë”.' },
      { question: '“Ju jeni” serve para…', options: ['vocês e o tratamento formal', 'só para “eles”', 'só para “eu”'], answer: 'vocês e o tratamento formal', explanation: 'Como em várias línguas europeias, “ju” é o plural e também a forma educada de falar com uma pessoa só.' },
    ],
  },
  {
    id: 'sq-g3',
    level: 'A1.2',
    title: 'O artigo definido pós-posto (-a / -i / -u)',
    emoji: '🔗',
    summary: 'O albanês não tem um artigo separado como “o/a” em português: ele gruda no fim da palavra.',
    sections: [
      {
        text: 'O indefinido não precisa de marca (“shtëpi” já pode ser “uma casa”); o definido vem grudado no fim, mudando conforme a terminação da palavra. Substantivos femininos que terminam em “ë” trocam o “ë” por “a”; os masculinos terminados em consoante comum ganham “-i”, e os que terminam em “k”, “g”, “h” ou vogal tônica ganham “-u”.',
        table: {
          head: ['Sem artigo', 'Com artigo', 'Tradução'],
          rows: [
            ['shtëpi', 'shtëpia', 'a casa'],
            ['bukë', 'buka', 'o pão'],
            ['qytet', 'qyteti', 'a cidade'],
            ['mik', 'miku', 'o amigo'],
          ],
        },
        examples: [
          ['Shtëpia ime është e vogël.', 'A minha casa é pequena.'],
          ['Buka është e freskët.', 'O pão está fresco.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr um artigo antes, como em português: “a casa” é só “shtëpia”, com o “-a” no fim.',
      'Esquecer que a terminação da palavra decide o sufixo: “-a” nas femininas em “-ë”, “-i” ou “-u” nas masculinas.',
    ],
    quiz: [
      { question: 'Como se diz “a casa”?', options: ['shtëpia', 'shtëpi', 'e shtëpi'], answer: 'shtëpia', explanation: 'O “ë” final de “shtëpi” vira “a” para formar o definido.' },
      { question: '“Buka” quer dizer…', options: ['o pão', 'um pão', 'os pães'], answer: 'o pão', explanation: '“Bukë” é “pão”; com o artigo grudado (“ë” → “a”), “buka” é “o pão”.' },
    ],
  },
  {
    id: 'sq-g4',
    level: 'A1.2',
    title: 'A negação com nuk / s’',
    emoji: '🚫',
    summary: 'Para negar qualquer verbo, basta pôr “nuk” (ou, na fala, “s’”) logo antes dele — não importa a pessoa nem o tempo.',
    sections: [
      {
        text: 'A regra é a mesma para todo verbo: sujeito + “nuk” + verbo. Na fala informal, “nuk” costuma encurtar para “s’”, grudado na palavra seguinte.',
        table: {
          head: ['Afirmativa', 'Negativa', 'Tradução'],
          rows: [
            ['Unë di.', 'Unë nuk di.', 'Eu sei. / Eu não sei.'],
            ['Ne flasim shqip.', 'Ne nuk flasim shqip.', 'Nós falamos albanês. / Nós não falamos albanês.'],
            ['E di.', 'Nuk e di. (s’e di)', 'Eu sei disso. / Eu não sei disso.'],
          ],
        },
        examples: [
          ['Nuk e di.', 'Não sei.'],
          ['Unë nuk kuptoj.', 'Eu não entendo.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma forma negativa irregular do verbo: diferente de línguas eslavas vizinhas, no albanês “nuk” funciona igual com qualquer verbo.',
      'Esquecer que “s’” é só a forma falada e encurtada de “nuk”, não uma palavra diferente.',
    ],
    quiz: [
      { question: 'Como se diz “eu não sei”?', options: ['Unë nuk di.', 'Unë di nuk.', 'Nuk unë di.'], answer: 'Unë nuk di.', explanation: '“Nuk” vem sempre logo antes do verbo.' },
      { question: '“Nuk e di” quer dizer…', options: ['Não sei (disso).', 'Não tenho.', 'Não sou.'], answer: 'Não sei (disso).', explanation: '“Di” é “saber”; com “nuk” antes, vira negativo.' },
    ],
  },
];
