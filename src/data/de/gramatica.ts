import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do alemão — A1 completo, mais A2 (g5-g8). Fontes das construções do A2: Duden
 * online (duden.de, grammatik, verbetes de declinação e dos verbos citados) e Wikcionário em alemão/
 * inglês (en.wiktionary.org, tabelas de conjugação de "kaufen", "sehen", "gehen", "helfen" e
 * "anziehen"/"ausziehen" como verbos separáveis).
 */
export const GRAMMAR_DE: GrammarTopic[] = [
  {
    id: 'de-g1',
    level: 'A1.1',
    title: 'Pronúncia: trema, ß, ei, ie e ch',
    emoji: '🔤',
    summary: 'O alemão se escreve quase como se fala, mas algumas letras e grupos têm sons que o português escreve de outro jeito.',
    sections: [
      {
        text: 'Uma vez aprendidas as regras, a leitura é bem regular. Os pontos que mais confundem o brasileiro são as vogais com trema, os ditongos e o “ch”.',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['ei', '“ai”', 'nein (não), zwei (dois)'],
            ['ie', '“i” longo', 'sieben (sete), vier (quatro)'],
            ['eu / äu', '“ói”', 'neun (nove), heute (hoje)'],
            ['ü', '“i” com os lábios em bico', 'grün (verde), fünf (cinco)'],
            ['ß', '“ss”', 'heißen, weiß (branco)'],
            ['w', '“v”', 'Wasser (água), wo (onde)'],
          ],
        },
        examples: [
          ['Guten Morgen!', 'Bom dia!'],
          ['Die Milch ist weiß.', 'O leite é branco.'],
        ],
      },
    ],
    pitfalls: ['Ler “ei” como “ei” do português: “nein” soa “nain”.', 'Ler “ie” como dois sons: em “vier” é um “i” só, longo.', 'Ler o “w” como “u” do inglês: “Wasser” começa com “v”.'],
    quiz: [
      { question: 'Como soa o “ei” de “zwei”?', options: ['“ai”', '“ei”', '“i”'], answer: '“ai”', explanation: 'Em alemão, “ei” sempre soa “ai”: zwei = “tsvai”.' },
      { question: 'O que quer dizer “weiß”?', options: ['branco', 'vinho', 'quem'], answer: 'branco', explanation: '“weiß” (com ß) é branco e também “eu sei” (ich weiß). Vinho é “Wein”.' },
    ],
  },
  {
    id: 'de-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo sein',
    emoji: '🙋',
    summary: 'Os pronomes pessoais, o “Sie” de cortesia e o verbo “sein” (ser e estar), que é irregular.',
    sections: [
      {
        text: 'O alemão sempre diz o pronome: “ich bin”, nunca só “bin”. O verbo “sein” serve para o nosso ser e o nosso estar. “Sie” com maiúscula é o tratamento formal (o senhor, a senhora) e usa a forma do plural.',
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
    pitfalls: ['Omitir o pronome como no português (“Bin müde”): em alemão ele é obrigatório.', 'Usar “du” com um desconhecido mais velho ou no trabalho: o normal é “Sie”.'],
    quiz: [
      { question: 'Complete: “Ich ___ aus Recife.”', options: ['bin', 'ist', 'sind'], answer: 'bin', explanation: '“bin” é a forma de “sein” para “ich”.' },
      { question: '“Sie sind” com maiúscula serve para…', options: ['o tratamento formal (o senhor, a senhora)', 'só para “ela”', 'só para “nós”'], answer: 'o tratamento formal (o senhor, a senhora)', explanation: '“Sie” com maiúscula é a forma de cortesia, com o verbo no plural.' },
    ],
  },
  {
    id: 'de-g3',
    level: 'A1.2',
    title: 'Der, die, das e o possessivo',
    emoji: '👪',
    summary: 'Três gêneros (masculino, feminino e neutro), os artigos e o possessivo “mein/meine”.',
    sections: [
      {
        text: 'Cada substantivo tem um gênero, que aparece no artigo. O gênero muitas vezes não bate com o português, por isso se aprende a palavra junto com o artigo. No plural, o artigo é sempre “die”. O possessivo segue o artigo indefinido: “mein” para masculino e neutro, “meine” para feminino e plural.',
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
    pitfalls: ['Copiar o gênero do português: “a casa” é “das Haus” (neutro) e “o gato” é “die Katze” (feminino).', 'Usar artigo antes do possessivo (“die meine Mutter”): em alemão é só “meine Mutter”.'],
    quiz: [
      { question: 'Qual é o artigo de “Haus” (casa)?', options: ['das', 'die', 'der'], answer: 'das', explanation: '“Haus” é neutro: das Haus.' },
      { question: 'Como se diz “minha irmã”?', options: ['meine Schwester', 'mein Schwester', 'die meine Schwester'], answer: 'meine Schwester', explanation: '“Schwester” é feminino, então o possessivo é “meine”, sem artigo.' },
    ],
  },
  {
    id: 'de-g4',
    level: 'A1.2',
    title: 'O verbo haben e a negação: nicht e kein',
    emoji: '🚫',
    summary: '“haben” (ter) e as duas maneiras de negar: “nicht” e “kein”.',
    sections: [
      {
        text: '“nicht” nega o verbo ou um adjetivo e costuma vir depois do verbo: “Ich weiß es nicht” (não sei), “Das Haus ist nicht groß”. “kein” nega um substantivo que viria com “ein”: “Ich habe keine Katze” (não tenho gato). Depois de “haben”, o masculino “ein/kein” vira “einen/keinen”: “Ich habe einen Bruder”.',
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
    pitfalls: ['Pôr “nicht” antes do verbo como o “não” português: “Ich nicht weiß” está errado; o certo é “Ich weiß es nicht”.', 'Dizer “nicht ein”: para negar “um/uma”, o alemão usa “kein/keine”.'],
    quiz: [
      { question: 'Como se diz “eu não tenho gato”?', options: ['Ich habe keine Katze.', 'Ich habe nicht eine Katze.', 'Ich nicht habe Katze.'], answer: 'Ich habe keine Katze.', explanation: 'Para negar um substantivo com “ein/eine”, usa-se “kein/keine”.' },
      { question: 'Complete: “Er ___ einen Bruder.”', options: ['hat', 'habe', 'hast'], answer: 'hat', explanation: '“hat” é a forma de “haben” para “er”, “sie” e “es”.' },
    ],
  },
  {
    id: 'de-g5',
    level: 'A2.1',
    title: 'Der Akkusativ: o caso do objeto direto',
    emoji: '🎯',
    summary: 'O Akkusativ marca o objeto direto da frase (o que recebe a ação). No masculino, o artigo muda: “der”/“ein” vira “den”/“einen”. Nos outros gêneros, o artigo fica igual ao Nominativ.',
    sections: [
      {
        text: 'Só o masculino muda de artigo no Akkusativ. O feminino, o neutro e o plural ficam exatamente iguais ao Nominativ (o caso do sujeito).',
        table: {
          head: ['', 'Nominativ (sujeito)', 'Akkusativ (objeto direto)'],
          rows: [
            ['masculino', 'der/ein Hut', 'den/einen Hut'],
            ['feminino', 'die/eine Hose', 'die/eine Hose'],
            ['neutro', 'das/ein Hemd', 'das/ein Hemd'],
            ['plural', 'die Schuhe', 'die Schuhe'],
          ],
        },
        examples: [
          ['Ich kaufe einen Hut.', 'Eu compro um chapéu.'],
          ['Ich trage die Jacke.', 'Eu uso a jaqueta.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer de mudar “der/ein” para “den/einen” no masculino: “Ich kaufe der Hut” está errado; o certo é “Ich kaufe den Hut.”',
      'Mudar o artigo feminino ou neutro no Akkusativ: eles ficam iguais ao Nominativ.',
    ],
    quiz: [{ question: 'Como se diz “eu compro um chapéu” em alemão?', options: ['Ich kaufe einen Hut.', 'Ich kaufe ein Hut.', 'Ich kaufe der Hut.'], answer: 'Ich kaufe einen Hut.', explanation: '“Hut” é masculino; no Akkusativ, “ein” vira “einen”.' }],
  },
  {
    id: 'de-g6',
    level: 'A2.1',
    title: 'Verbos separáveis: anziehen, ausziehen',
    emoji: '🧩',
    summary: 'Muitos verbos alemães têm um prefixo (an-, aus-…) que se SEPARA do verbo na frase e vai para o final: “anziehen” (vestir) vira “ich ziehe … an”.',
    sections: [
      {
        text: 'O prefixo se separa do verbo e vai para o FINAL da frase, enquanto a raiz do verbo (“ziehen”) fica conjugada na posição normal, logo depois do sujeito.',
        examples: [
          ['Ich ziehe eine Jacke an.', 'Eu visto uma jaqueta.'],
          ['Ich ziehe die Schuhe aus.', 'Eu tiro os sapatos.'],
        ],
      },
    ],
    pitfalls: ['Deixar o prefixo junto do verbo na frase: “Ich anziehe eine Jacke” está errado; o prefixo “an” vai para o fim: “Ich ziehe eine Jacke an.”'],
    quiz: [{ question: 'Como se diz “eu visto uma jaqueta” em alemão?', options: ['Ich ziehe eine Jacke an.', 'Ich anziehe eine Jacke.', 'Ich ziehe an eine Jacke.'], answer: 'Ich ziehe eine Jacke an.', explanation: 'O prefixo separável “an” vai para o final da frase.' }],
  },
  {
    id: 'de-g7',
    level: 'A2.2',
    title: 'Das Perfekt: haben/sein + Partizip II',
    emoji: '📜',
    summary: 'Para contar o que já aconteceu, o alemão falado usa o Perfekt: “haben” (ou, com alguns verbos, “sein”) no presente + o Partizip II no final da frase.',
    sections: [
      {
        text: 'A maioria dos verbos forma o Partizip II com “ge-” + a raiz + “-t” (verbos regulares) ou “-en” (verbos irregulares): “gearbeitet” (trabalhado), “gekauft” (comprado), “gesehen” (visto). O auxiliar é “haben” para quase todos os verbos.',
        table: {
          head: ['Pronome', 'haben', 'Partizip II'],
          rows: [
            ['ich', 'habe', 'gearbeitet'],
            ['du', 'hast', 'gekauft'],
            ['er/sie/es', 'hat', 'gesehen'],
            ['wir', 'haben', 'gearbeitet'],
            ['ihr', 'habt', 'gekauft'],
            ['sie/Sie', 'haben', 'gesehen'],
          ],
        },
        examples: [
          ['Ich habe heute gearbeitet.', 'Eu trabalhei hoje.'],
          ['Ich habe einen Hut gekauft.', 'Eu comprei um chapéu.'],
        ],
      },
      {
        heading: 'Verbos com sein',
        text: 'Alguns verbos de movimento ou de mudança de estado (“gehen”, “kommen”…) usam “sein” no lugar de “haben”: “Ich bin nach Hause gegangen” (eu fui para casa).',
        examples: [['Ich bin müde gewesen.', 'Eu estive cansado.']],
      },
    ],
    pitfalls: [
      'Usar “haben” com TODO verbo: verbos de movimento como “gehen” usam “sein”.',
      'Esquecer o “ge-” no Partizip II dos verbos regulares.',
    ],
    quiz: [{ question: 'Como se diz “eu comprei um chapéu” em alemão (Perfekt)?', options: ['Ich habe einen Hut gekauft.', 'Ich kaufe einen Hut gehabt.', 'Ich bin einen Hut gekauft.'], answer: 'Ich habe einen Hut gekauft.', explanation: '“Haben” no presente + o Partizip II “gekauft” no final da frase.' }],
  },
  {
    id: 'de-g8',
    level: 'A2.2',
    title: 'Der Dativ: o caso do objeto indireto',
    emoji: '🤝',
    summary: 'O Dativ marca o objeto indireto (a quem, para quem) e é exigido por certos verbos, como “helfen” (ajudar): “der” vira “dem”, “die” vira “der”, “das” vira “dem”.',
    sections: [
      {
        table: {
          head: ['', 'Nominativ', 'Dativ'],
          rows: [
            ['masculino', 'der Arzt', 'dem Arzt'],
            ['feminino', 'die Ärztin', 'der Ärztin'],
            ['neutro', 'das Kind', 'dem Kind'],
            ['plural', 'die Kinder', 'den Kindern'],
          ],
        },
        examples: [
          ['Der Arzt hilft dem Patienten.', 'O médico ajuda o paciente.'],
          ['Ich helfe meiner Mutter.', 'Eu ajudo a minha mãe.'],
        ],
      },
    ],
    pitfalls: ['Usar o Akkusativ depois de “helfen”: esse verbo exige o Dativ, não o Akkusativ (“ich helfe dem Mann”, não “den Mann”).'],
    quiz: [{ question: 'Como se diz “o médico ajuda o paciente” em alemão?', options: ['Der Arzt hilft dem Patienten.', 'Der Arzt hilft den Patienten.', 'Der Arzt hilft der Patient.'], answer: 'Der Arzt hilft dem Patienten.', explanation: '“Helfen” exige o Dativ; “Patient” é masculino, então “der” vira “dem”.' }],
  },
];
