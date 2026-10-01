import type { GrammarTopic } from '../types';

/** Tópicos de gramática do siciliano — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_SCN: GrammarTopic[] = [
  {
    id: 'scn-g1',
    level: 'A1.1',
    title: 'Pronúncia: ḍḍ, j e as vogais finais',
    emoji: '🔤',
    summary: 'O siciliano usa o alfabeto latino, mas tem um som próprio (o “ḍḍ”) e vogais finais diferentes do italiano.',
    sections: [
      {
        text: 'O siciliano reduziu as vogais finais átonas do latim a só três sons (u, i, a), ao contrário do italiano, que manteve quatro. E o -LL- latino, em vez de virar “l” dobrado como no italiano, virou um som retroflexo, batendo a língua no céu da boca.',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['ḍḍ (ou dd)', 'retroflexo, sem igual no italiano', 'cavaḍḍu (cavalo), beḍḍu (bonito)'],
            ['j', 'quase um “i” consoante', 'jiri (ir), joviri (quinta)'],
            ['u final', 'onde o italiano tem “o”', 'nomu, amicu'],
            ['i final', 'onde o italiano tem “e”', 'pani, cani'],
          ],
        },
        examples: [
          ['Lu cavaḍḍu curri.', 'O cavalo corre.'],
          ['Bongiornu, amicu!', 'Bom dia, amigo!'],
        ],
      },
    ],
    pitfalls: ['Ler “ḍḍ” como um “d” comum: é um som batido com a língua para trás, diferente de qualquer som do português.', 'Trocar o “u” final por “o”, como em italiano: em siciliano o masculino termina em “u”.'],
    quiz: [
      { question: 'O que quer dizer “cavaḍḍu”?', options: ['cavalo', 'cachorro', 'casa'], answer: 'cavalo', explanation: 'Do latim “caballus”, com o -LL- virando o som retroflexo “ḍḍ”.' },
      { question: 'Onde o italiano tem “o” final, o siciliano costuma ter…', options: ['u', 'a', 'i'], answer: 'u', explanation: 'As vogais finais átonas do siciliano são só u/i/a; “nome” (italiano) vira “nomu”.' },
    ],
  },
  {
    id: 'scn-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo èssiri',
    emoji: '🙋',
    summary: 'Sete pronomes e um só verbo para ser e estar: “èssiri”.',
    sections: [
      {
        text: 'Como o italiano, o siciliano costuma dizer o pronome, mas pode também omiti-lo quando o verbo já deixa claro quem é. “Èssiri” serve tanto para “ser” quanto para “estar”.',
        table: {
          head: ['Pronome', 'Tradução', 'èssiri'],
          rows: [
            ['iu', 'eu', 'sugnu'],
            ['tu', 'tu, você', 'si'],
            ['iddu / idda', 'ele / ela', 'è'],
            ['nuàtri', 'nós', 'semu'],
            ['vuàtri', 'vocês', 'siti'],
            ['iddi', 'eles / elas', 'sunnu'],
          ],
        },
        examples: [
          ['Iu sugnu di Sampaulu.', 'Sou de São Paulo.'],
          ['Nuàtri semu amici.', 'Nós somos amigos.'],
        ],
      },
    ],
    pitfalls: ['Procurar um verbo separado para “estar”: “iu sugnu bonu” (estou bem) usa o mesmo “èssiri”.'],
    quiz: [
      { question: 'Complete: “Iu ___ di Palermu.”', options: ['sugnu', 'è', 'semu'], answer: 'sugnu', explanation: '“Sugnu” é a forma de “èssiri” para “iu”.' },
      { question: '“Vuàtri siti” serve para falar com…', options: ['mais de uma pessoa', 'só uma criança', 'só animais'], answer: 'mais de uma pessoa', explanation: '“Vuàtri” é o plural de “tu”, equivalente ao “vós”/“vocês”.' },
    ],
  },
  {
    id: 'scn-g3',
    level: 'A1.2',
    title: 'Os artigos u, a, i',
    emoji: '👪',
    summary: 'Artigo definido u/a no singular, i no plural para os dois gêneros.',
    sections: [
      {
        text: 'Os substantivos são masculinos ou femininos. O artigo definido é “u” (masculino) e “a” (feminino); no plural, os dois usam “i”. Antes de vogal, “u”/“a” perdem a vogal: “l’amicu”, “n’acqua”.',
        table: {
          head: ['', 'singular', 'plural'],
          rows: [
            ['masculino', 'u cani', 'i cani'],
            ['feminino', 'a casa', 'i casi'],
          ],
        },
        examples: [
          ['A me casa è nica.', 'A minha casa é pequena.'],
          ['U pani è friscu.', 'O pão é fresco.'],
        ],
      },
    ],
    pitfalls: ['Esperar um artigo plural diferente para cada gênero, como no italiano (“i”/“le”): em siciliano os dois usam “i”.'],
    quiz: [
      { question: 'Qual é o artigo definido feminino singular?', options: ['a', 'u', 'i'], answer: 'a', explanation: '“A” é o artigo feminino singular: “a casa”.' },
      { question: 'Como fica o plural de “u cani” (o cachorro)?', options: ['i cani', 'i canu', 'a cani'], answer: 'i cani', explanation: 'O plural usa “i” para os dois gêneros.' },
    ],
  },
  {
    id: 'scn-g4',
    level: 'A1.2',
    title: 'O verbo aviri e a negação com non',
    emoji: '🚫',
    summary: '“Aviri” é ter; para negar, basta pôr “non” antes do verbo.',
    sections: [
      {
        text: 'O verbo ter é “aviri”. Para negar qualquer verbo, o siciliano usa só “non” antes dele, sem segunda partícula.',
        table: {
          head: ['Pronome', 'aviri', 'negativo'],
          rows: [
            ['iu', 'haju', 'non haju'],
            ['tu', 'hai', 'non hai'],
            ['iddu / idda', 'havi', 'non havi'],
            ['nuàtri', 'avemu', 'non avemu'],
            ['vuàtri', 'aviti', 'non aviti'],
            ['iddi', 'hannu', 'non hannu'],
          ],
        },
        examples: [
          ['Haju un frati.', 'Tenho um irmão.'],
          ['Non sacciu.', 'Eu não sei.'],
        ],
      },
    ],
    pitfalls: ['Esperar duas partículas de negação, como no francês: em siciliano “non” sozinho já nega.'],
    quiz: [
      { question: 'Como se diz “eu não sei”?', options: ['Non sacciu.', 'Sacciu non.', 'Non sacciu non.'], answer: 'Non sacciu.', explanation: '“Non” vem antes do verbo e basta sozinho.' },
      { question: '“Iddu havi” quer dizer…', options: ['ele tem', 'ele é', 'ele vai'], answer: 'ele tem', explanation: '“Havi” é a forma de “aviri” (ter) para “iddu”.' },
    ],
  },
];
