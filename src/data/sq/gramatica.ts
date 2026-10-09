import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do albanês — A1.1 ao A2.2 (pacote incompleto, ver `incomplete` em
 * index.ts). Os quatro tópicos do A2 (sq-g5 a sq-g8) seguem o Wikcionário em inglês
 * (en.wiktionary.org, um verbete por palavra citada) e as tabelas de conjugação do FSI Language
 * Courses (fsi-language-courses.org/albanian/verbs), que mostram o futuro com “do të” + subjuntivo
 * e o uso do subjuntivo depois de “duhet”.
 */
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
  {
    id: 'sq-g5',
    level: 'A2.1',
    title: 'O futuro: do të + subjuntivo',
    emoji: '🔮',
    summary: '“Do të” antes do verbo no subjuntivo forma o futuro — e o subjuntivo, com a partícula “të”, é a mesma forma usada depois de verbos como “dua”, “mund” e “duhet”.',
    sections: [
      {
        text: 'O albanês forma o futuro com “do” mais o subjuntivo presente do verbo principal, marcado pela partícula “të”. O subjuntivo muda a terminação pela pessoa, como o presente indicativo.',
        table: {
          head: ['Pronome', 'Subjuntivo (shkoj)', 'Futuro'],
          rows: [
            ['unë', 'të shkoj', 'do të shkoj'],
            ['ti', 'të shkosh', 'do të shkosh'],
            ['ai / ajo', 'të shkojë', 'do të shkojë'],
          ],
        },
        examples: [
          ['Do të blej një xhaketë.', 'Eu vou comprar uma jaqueta.'],
          ['Nesër do të bjerë shi.', 'Amanhã vai chover.'],
        ],
      },
    ],
    pitfalls: ['Usar o indicativo presente depois de “do të”: o verbo ali é sempre subjuntivo, mesmo quando a forma parece igual ao indicativo em alguns verbos.', 'Esquecer o “të”: “do” sozinho, sem “të”, não forma o futuro.'],
    quiz: [
      { question: 'Como se diz “eu vou comprar uma jaqueta”?', options: ['Do të blej një xhaketë.', 'Do blej një xhaketë.', 'Blej do një xhaketë.'], answer: 'Do të blej një xhaketë.', explanation: 'O futuro é “do” + “të” + o verbo no subjuntivo.' },
      { question: 'A partícula “të” do futuro também aparece…', options: ['depois de verbos como “dua” e “duhet”', 'só no futuro, nunca em outro lugar', 'só com o verbo “jam”'], answer: 'depois de verbos como “dua” e “duhet”', explanation: '“Të” marca o subjuntivo, usado tanto no futuro (“do të”) quanto depois de verbos como “dua” (querer) e “duhet” (deve).' },
    ],
  },
  {
    id: 'sq-g6',
    level: 'A2.1',
    title: 'O comparativo e o superlativo: më',
    emoji: '📏',
    summary: 'O albanês compara com a palavra “më” (mais) antes do adjetivo, e o superlativo acrescenta o artigo definido no fim do próprio adjetivo.',
    sections: [
      {
        text: 'Basta pôr “më” antes do adjetivo para o comparativo. Para o superlativo, o adjetivo (já com “më” antes) ganha também o artigo definido pós-posto, do mesmo jeito que os substantivos (ver sq-g3).',
        table: {
          head: ['Grau', 'Forma', 'Exemplo'],
          rows: [
            ['comparativo', 'më + adjetivo', 'më i ftohtë (mais frio)'],
            ['superlativo', 'më + adjetivo + -i/-a', 'më i ftohti (o mais frio)'],
          ],
        },
        examples: [
          ['Sot është më ngrohtë se dje.', 'Hoje está mais quente do que ontem.'],
          ['Kjo është shtëpia më e madhe.', 'Essa é a casa mais grande.'],
        ],
      },
    ],
    pitfalls: ['Esquecer o “më” antes do adjetivo: sem ele, não há comparação, só a descrição simples.', 'Confundir o comparativo (“më i ftohtë”, mais frio) com o superlativo, que pede também o artigo definido no fim.'],
    quiz: [
      { question: 'Como se diz “mais frio”?', options: ['më i ftohtë', 'i ftohtë', 'ftohti'], answer: 'më i ftohtë', explanation: '“Më” antes do adjetivo forma o comparativo.' },
      { question: 'O que marca o superlativo, além de “më”?', options: ['o artigo definido no fim do adjetivo', 'a palavra “shumë”', 'nada: é igual ao comparativo'], answer: 'o artigo definido no fim do adjetivo', explanation: 'O superlativo leva “më” e também o artigo definido pós-posto no adjetivo.' },
    ],
  },
  {
    id: 'sq-g7',
    level: 'A2.2',
    title: '“Duhet të” + subjuntivo (necessidade)',
    emoji: '📌',
    summary: '“Duhet” (é preciso) é impessoal — nunca muda de forma — e vem sempre seguido de “të” mais o verbo principal no subjuntivo.',
    sections: [
      {
        text: '“Duhet” não concorda com ninguém: é sempre a mesma palavra, qualquer que seja a pessoa que precisa fazer algo. Quem muda é o verbo principal depois de “të”, no subjuntivo.',
        table: {
          head: ['Pessoa', 'Construção', 'Tradução'],
          rows: [
            ['unë', 'duhet të blej', 'eu tenho que comprar'],
            ['ti', 'duhet të blesh', 'você tem que comprar'],
            ['ne', 'duhet të punojmë', 'nós temos que trabalhar'],
          ],
        },
        examples: [
          ['Duhet të blej një xhaketë.', 'Eu tenho que comprar uma jaqueta.'],
          ['Nuk duhet të harrosh kapelën.', 'Você não deve esquecer o chapéu.'],
        ],
      },
    ],
    pitfalls: ['Tentar conjugar “duhet” pela pessoa: ele é sempre impessoal; o que muda é o verbo depois de “të”.', 'Esquecer o “të”: “duhet” nunca vem direto com o verbo principal, sempre com “të” no meio.'],
    quiz: [
      { question: 'Como se diz “eu tenho que comprar um chapéu”?', options: ['Duhet të blej një kapelë.', 'Unë duhem blej një kapelë.', 'Duhet blej një kapelë.'], answer: 'Duhet të blej një kapelë.', explanation: '“Duhet” é impessoal e pede “të” antes do verbo no subjuntivo.' },
      { question: '“Duhet” muda de forma conforme a pessoa?', options: ['Não, é sempre impessoal', 'Sim, como qualquer verbo', 'Só no plural'], answer: 'Não, é sempre impessoal', explanation: 'Quem concorda com a pessoa é o verbo depois de “të”, nunca “duhet”.' },
    ],
  },
  {
    id: 'sq-g8',
    level: 'A2.2',
    title: 'Os números de 20 a 100: njëzet e një',
    emoji: '🔢',
    summary: 'Depois das dezenas inteiras (njëzet, tridhjetë…), os números compostos se formam com a palavra “e” (e) entre a dezena e a unidade.',
    sections: [
      {
        text: 'Assim como em português (“vinte e um”), o albanês usa uma palavra de ligação — “e” — entre a dezena e a unidade. A dezena vem sempre primeiro, depois “e”, depois a unidade.',
        table: {
          head: ['Número', 'Formação', 'Tradução'],
          rows: [
            ['21', 'njëzet e një', 'vinte e um'],
            ['35', 'tridhjetë e pesë', 'trinta e cinco'],
            ['99', 'nëntëdhjetë e nëntë', 'noventa e nove'],
          ],
        },
        examples: [
          ['Jam njëzet e pesë vjeç.', 'Eu tenho vinte e cinco anos.'],
          ['Njëqind e një euro, ju lutem.', 'Cento e um euros, por favor.'],
        ],
      },
    ],
    pitfalls: ['Esquecer o “e” entre a dezena e a unidade: “njëzet një” soa incompleto; o certo é “njëzet e një”.', 'Inverter a ordem: a dezena vem sempre antes da unidade, nunca o contrário.'],
    quiz: [
      { question: 'Como se diz “vinte e cinco”?', options: ['njëzet e pesë', 'pesë e njëzet', 'njëzetpesë'], answer: 'njëzet e pesë', explanation: 'A dezena vem primeiro, depois “e”, depois a unidade: “njëzet e pesë”.' },
      { question: 'O que liga a dezena à unidade nos números compostos?', options: ['a palavra “e”', 'um hífen', 'nada, ficam juntas'], answer: 'a palavra “e”', explanation: 'Como o “e” do português em “vinte e um”, o albanês usa “e” entre dezena e unidade.' },
    ],
  },
];
