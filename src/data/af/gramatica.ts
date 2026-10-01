import type { GrammarTopic } from '../types';

/** Tópicos de gramática do africâner — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_AF: GrammarTopic[] = [
  {
    id: 'af-g1',
    level: 'A1.1',
    title: 'Pronúncia: g, v, w, oe, y e os acentos',
    emoji: '🔤',
    summary: 'A escrita do africâner é bem regular; algumas letras soam diferente do português.',
    sections: [
      {
        text: 'Quem aprende as regras abaixo consegue ler quase qualquer palavra. O acento circunflexo (ê, ô, û) marca vogais longas.',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['g', 'raspado na garganta, como o “r” carioca', 'goed (bom)'],
            ['v', '“f”', 'vyf (cinco), vriend (amigo)'],
            ['w', '“v”', 'water (água), wit (branco)'],
            ['oe', '“u”', 'broer (irmão)'],
            ['ie', '“i”', 'drie (três)'],
            ['y / ei', 'parecido com “âi”', 'wyn (vinho), klein'],
          ],
        },
        examples: [
          ['Goeiemôre!', 'Bom dia!'],
          ['Ek drink water.', 'Eu bebo água.'],
        ],
      },
    ],
    pitfalls: ['Ler o “v” como o nosso “v”: “vyf” (cinco) começa com som de “f”.', 'Ler o “y” como “i”: em “wyn” ele soa parecido com “âi”.'],
    quiz: [
      { question: 'Como começa o som de “vyf” (cinco)?', options: ['com “f”', 'com “v”', 'com “u”'], answer: 'com “f”', explanation: 'Em africâner, o “v” soa como o nosso “f”.' },
      { question: 'Como soa o “oe” de “broer”?', options: ['“u”', '“ô”', '“oê”'], answer: '“u”', explanation: '“oe” sempre soa como o nosso “u”.' },
    ],
  },
  {
    id: 'af-g2',
    level: 'A1.1',
    title: 'Os pronomes e um verbo que não muda',
    emoji: '🙋',
    summary: 'Os pronomes pessoais e a grande facilidade do africâner: o verbo é igual para todas as pessoas.',
    sections: [
      {
        text: 'Em africâner, o verbo não se conjuga pela pessoa. “Wees” (ser, estar) fica “is” no presente para todo mundo, e qualquer verbo segue a mesma ideia: “ek praat”, “jy praat”, “hulle praat”. O pronome, por isso, é obrigatório.',
        table: {
          head: ['Pronome', 'Tradução', 'wees (presente)'],
          rows: [
            ['ek', 'eu', 'is'],
            ['jy / u', 'tu, você / o senhor, a senhora', 'is'],
            ['hy / sy', 'ele / ela', 'is'],
            ['ons', 'nós', 'is'],
            ['julle', 'vocês', 'is'],
            ['hulle', 'eles, elas', 'is'],
          ],
        },
        examples: [
          ["Ek is 'n student.", 'Sou estudante.'],
          ['Ons is vriende.', 'Nós somos amigos.'],
        ],
      },
    ],
    pitfalls: ['Tentar conjugar como em português ou neerlandês (“ek ben”, “hy heeft”): em africâner é sempre “is” e “het”.', 'Confundir “sy” (ela) com o “zij” neerlandês, que também quer dizer “eles”.'],
    quiz: [
      { question: 'Complete: “Ons ___ vriende.”', options: ['is', 'sind', 'zijn'], answer: 'is', explanation: 'No presente, “wees” é “is” para todas as pessoas.' },
      { question: 'Qual pronome quer dizer “eles”?', options: ['hulle', 'julle', 'ons'], answer: 'hulle', explanation: '“hulle” = eles, elas; “julle” = vocês; “ons” = nós.' },
    ],
  },
  {
    id: 'af-g3',
    level: 'A1.2',
    title: "Die, 'n e a posse com “se”",
    emoji: '👪',
    summary: 'Sem gênero gramatical: um artigo definido só, um indefinido só, e a posse com a palavrinha “se”.',
    sections: [
      {
        text: 'O africâner perdeu o gênero gramatical do neerlandês: tudo é “die” (o, a, os, as) e “\'n” (um, uma). O plural costuma acrescentar -e ou -s: hond → honde, broer → broers. Para dizer “de alguém”, põe-se “se” entre o dono e a coisa: “my pa se huis”, a casa do meu pai.',
        table: {
          head: ['', 'singular', 'plural'],
          rows: [
            ['definido', 'die hond', 'die honde'],
            ['indefinido', "'n hond", '—'],
            ['posse', 'my ma se naam', 'my broers se huis'],
          ],
        },
        examples: [
          ['My huis is klein.', 'A minha casa é pequena.'],
          ['My ma se naam is Rosa.', 'O nome da minha mãe é Rosa.'],
        ],
      },
    ],
    pitfalls: ['Procurar o gênero da palavra: em africâner não existe; é sempre “die”.', 'Traduzir palavra por palavra “o nome da minha mãe” (“die naam van my ma”): o mais natural é “my ma se naam”.'],
    quiz: [
      { question: 'Qual é o artigo definido de “kat” (gato)?', options: ['die', 'het', 'de'], answer: 'die', explanation: 'Em africâner o artigo definido é sempre “die”.' },
      { question: 'Como se diz “a casa do meu pai”?', options: ['my pa se huis', 'my huis se pa', 'die pa huis'], answer: 'my pa se huis', explanation: 'O dono vem primeiro, depois “se” e depois a coisa possuída.' },
    ],
  },
  {
    id: 'af-g4',
    level: 'A1.2',
    title: 'O verbo hê e a negação dupla “nie… nie”',
    emoji: '🚫',
    summary: '“hê” (ter) vira “het” no presente, e a negação usa “nie” duas vezes.',
    sections: [
      {
        text: 'O africâner nega com dois “nie”: o primeiro depois do verbo, o segundo no fim da frase. Quando o verbo já está no fim, basta um: “Ek weet nie” (eu não sei). O verbo “hê” (ter) é “het” no presente, para todas as pessoas.',
        table: {
          head: ['Afirmativa', 'Negativa', 'Tradução'],
          rows: [
            ["Ek het 'n kat.", "Ek het nie 'n kat nie.", 'Eu (não) tenho um gato.'],
            ['Ek praat Afrikaans.', 'Ek praat nie Afrikaans nie.', 'Eu (não) falo africâner.'],
            ['Die huis is groot.', 'Die huis is nie groot nie.', 'A casa (não) é grande.'],
            ['Ek weet.', 'Ek weet nie.', 'Eu (não) sei.'],
          ],
        },
        examples: [
          ["Ek het 'n hond.", 'Eu tenho um cachorro.'],
          ['Ek praat nie Engels nie.', 'Eu não falo inglês.'],
        ],
      },
    ],
    pitfalls: ['Esquecer o segundo “nie” no fim da frase: “Ek praat nie Afrikaans” soa incompleto.', 'Usar “hê” no presente: o presente é “het” (“ek het”); “hê” é o infinitivo.'],
    quiz: [
      { question: 'Como se diz “eu não falo africâner”?', options: ['Ek praat nie Afrikaans nie.', 'Ek nie praat Afrikaans.', 'Ek praat Afrikaans nie nie.'], answer: 'Ek praat nie Afrikaans nie.', explanation: 'O primeiro “nie” vem depois do verbo e o segundo fecha a frase.' },
      { question: "Complete: “Hy ___ 'n broer.”", options: ['het', 'hê', 'is'], answer: 'het', explanation: 'No presente, “hê” é “het” para todas as pessoas.' },
    ],
  },
];
