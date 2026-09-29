import type { GrammarTopic } from '../types';

/** Tópicos de gramática do alemão — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_DE: GrammarTopic[] = [
  {
    id: 'de-g1',
    level: 'A1.1',
    title: 'Pronúncia: trema, ß, ei, ie e ch',
    emoji: '🔤',
    summary: 'O alemão se escreve quase como se fala, mas algumas letras e grupos têm sons que o português escreve de outro jeito.',
    sections: [
      {
        text: 'Uma vez aprendidas as regras, a leitura é bem regular. Os pontos que mais confundem o brasileiro são as vogais com trema, os ditongos e o «ch».',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['ei', '«ai»', 'nein (não), zwei (dois)'],
            ['ie', '«i» longo', 'sieben (sete), vier (quatro)'],
            ['eu / äu', '«ói»', 'neun (nove), heute (hoje)'],
            ['ü', '«i» com os lábios em bico', 'grün (verde), fünf (cinco)'],
            ['ß', '«ss»', 'heißen, weiß (branco)'],
            ['w', '«v»', 'Wasser (água), wo (onde)'],
          ],
        },
        examples: [
          ['Guten Morgen!', 'Bom dia!'],
          ['Die Milch ist weiß.', 'O leite é branco.'],
        ],
      },
    ],
    pitfalls: ['Ler «ei» como «ei» do português: «nein» soa «nain».', 'Ler «ie» como dois sons: em «vier» é um «i» só, longo.', 'Ler o «w» como «u» do inglês: «Wasser» começa com «v».'],
    quiz: [
      { question: 'Como soa o «ei» de «zwei»?', options: ['«ai»', '«ei»', '«i»'], answer: '«ai»', explanation: 'Em alemão, «ei» sempre soa «ai»: zwei = «tsvai».' },
      { question: 'O que quer dizer «weiß»?', options: ['branco', 'vinho', 'quem'], answer: 'branco', explanation: '«weiß» (com ß) é branco e também «eu sei» (ich weiß). Vinho é «Wein».' },
    ],
  },
  {
    id: 'de-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo sein',
    emoji: '🙋',
    summary: 'Os pronomes pessoais, o «Sie» de cortesia e o verbo «sein» (ser e estar), que é irregular.',
    sections: [
      {
        text: 'O alemão sempre diz o pronome: «ich bin», nunca só «bin». O verbo «sein» serve para o nosso ser e o nosso estar. «Sie» com maiúscula é o tratamento formal (o senhor, a senhora) e usa a forma do plural.',
        table: {
          head: ['Pronome', 'Tradução', 'sein'],
          rows: [
            ['ich', 'eu', 'bin'],
            ['du', 'tu, você', 'bist'],
            ['er / sie / es', 'ele / ela / (neutro)', 'ist'],
            ['wir', 'nós', 'sind'],
            ['ihr', 'vocês', 'seid'],
            ['sie / Sie', 'eles, elas / o senhor, a senhora', 'sind'],
          ],
        },
        examples: [
          ['Ich bin aus São Paulo.', 'Sou de São Paulo.'],
          ['Wir sind Freunde.', 'Nós somos amigos.'],
        ],
      },
    ],
    pitfalls: ['Omitir o pronome como no português («Bin müde»): em alemão ele é obrigatório.', 'Usar «du» com um desconhecido mais velho ou no trabalho: o normal é «Sie».'],
    quiz: [
      { question: 'Complete: «Ich ___ aus Recife.»', options: ['bin', 'ist', 'sind'], answer: 'bin', explanation: '«bin» é a forma de «sein» para «ich».' },
      { question: '«Sie sind» com maiúscula serve para…', options: ['o tratamento formal (o senhor, a senhora)', 'só para «ela»', 'só para «nós»'], answer: 'o tratamento formal (o senhor, a senhora)', explanation: '«Sie» com maiúscula é a forma de cortesia, com o verbo no plural.' },
    ],
  },
  {
    id: 'de-g3',
    level: 'A1.2',
    title: 'Der, die, das e o possessivo',
    emoji: '👪',
    summary: 'Três gêneros (masculino, feminino e neutro), os artigos e o possessivo «mein/meine».',
    sections: [
      {
        text: 'Cada substantivo tem um gênero, que aparece no artigo. O gênero muitas vezes não bate com o português, por isso se aprende a palavra junto com o artigo. No plural, o artigo é sempre «die». O possessivo segue o artigo indefinido: «mein» para masculino e neutro, «meine» para feminino e plural.',
        table: {
          head: ['', 'definido', 'indefinido', 'meu / minha'],
          rows: [
            ['masculino', 'der Vater', 'ein Hund', 'mein Bruder'],
            ['feminino', 'die Mutter', 'eine Katze', 'meine Schwester'],
            ['neutro', 'das Haus', 'ein Brot', 'mein Haus'],
            ['plural', 'die Kinder', '—', 'meine Freunde'],
          ],
        },
        examples: [
          ['Mein Haus ist klein.', 'A minha casa é pequena.'],
          ['Meine Mutter heißt Rosa.', 'A minha mãe se chama Rosa.'],
        ],
      },
    ],
    pitfalls: ['Copiar o gênero do português: «a casa» é «das Haus» (neutro) e «o gato» é «die Katze» (feminino).', 'Usar artigo antes do possessivo («die meine Mutter»): em alemão é só «meine Mutter».'],
    quiz: [
      { question: 'Qual é o artigo de «Haus» (casa)?', options: ['das', 'die', 'der'], answer: 'das', explanation: '«Haus» é neutro: das Haus.' },
      { question: 'Como se diz «minha irmã»?', options: ['meine Schwester', 'mein Schwester', 'die meine Schwester'], answer: 'meine Schwester', explanation: '«Schwester» é feminino, então o possessivo é «meine», sem artigo.' },
    ],
  },
  {
    id: 'de-g4',
    level: 'A1.2',
    title: 'O verbo haben e a negação: nicht e kein',
    emoji: '🚫',
    summary: '«haben» (ter) e as duas maneiras de negar: «nicht» e «kein».',
    sections: [
      {
        text: '«nicht» nega o verbo ou um adjetivo e costuma vir depois do verbo: «Ich weiß es nicht» (não sei), «Das Haus ist nicht groß». «kein» nega um substantivo que viria com «ein»: «Ich habe keine Katze» (não tenho gato). Depois de «haben», o masculino «ein/kein» vira «einen/keinen»: «Ich habe einen Bruder».',
        table: {
          head: ['Pronome', 'haben', 'negativo com kein'],
          rows: [
            ['ich', 'habe', 'habe keine Katze'],
            ['du', 'hast', 'hast keine Katze'],
            ['er / sie / es', 'hat', 'hat keine Katze'],
            ['wir', 'haben', 'haben keine Katze'],
            ['ihr', 'habt', 'habt keine Katze'],
            ['sie / Sie', 'haben', 'haben keine Katze'],
          ],
        },
        examples: [
          ['Ich habe einen Hund.', 'Eu tenho um cachorro.'],
          ['Das Haus ist nicht groß.', 'A casa não é grande.'],
        ],
      },
    ],
    pitfalls: ['Pôr «nicht» antes do verbo como o «não» português: «Ich nicht weiß» está errado; o certo é «Ich weiß es nicht».', 'Dizer «nicht ein»: para negar «um/uma», o alemão usa «kein/keine».'],
    quiz: [
      { question: 'Como se diz «eu não tenho gato»?', options: ['Ich habe keine Katze.', 'Ich habe nicht eine Katze.', 'Ich nicht habe Katze.'], answer: 'Ich habe keine Katze.', explanation: 'Para negar um substantivo com «ein/eine», usa-se «kein/keine».' },
      { question: 'Complete: «Er ___ einen Bruder.»', options: ['hat', 'habe', 'hast'], answer: 'hat', explanation: '«hat» é a forma de «haben» para «er», «sie» e «es».' },
    ],
  },
];
