import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do croata: A1 completo (hr-g1 a hr-g4) mais A2 (hr-g5 a hr-g7, acrescentado
 * depois). Fontes dos tópicos novos: Wikcionário em inglês (en.wiktionary.org), verbete "biti"
 * (tabelas do futuro e do perfeito sérvio-croata, com a nota explícita de que a grafia com o
 * infinitivo completo antes de "ću" — "radit ću" — é a convenção croata) e verbete
 * "pomoći"/"pomagati"; e, para o instrumental com "s/sa", o guia learncroatian.eu/blog/
 * instrumental-case (exemplos "Putujem s mamom" e "Pijem kavu s mlijekom"), confirmado contra o
 * padrão de declinação já usado sem explicar em "Jedem kruh sa sirom" (A1, unidade 2).
 */
export const GRAMMAR_HR: GrammarTopic[] = [
  {
    id: 'hr-g1',
    level: 'A1.1',
    title: 'Pronúncia: uma letra, um som',
    emoji: '🔤',
    summary: 'O alfabeto croata tem 30 letras, e cada uma tem sempre o mesmo som. Três delas são escritas com duas letras: dž, lj e nj.',
    sections: [
      {
        text: 'O croata se lê exatamente como se escreve. A atenção vai para as letras com sinais e para o “j”, que é sempre um “i” curto.',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['č', '“tch” duro', 'četiri (quatro)'],
            ['ć', '“tch” macio', 'noć (noite)'],
            ['đ', '“dj” macio', 'doviđenja'],
            ['š / ž', '“ch” / “j”', 'šest, živim'],
            ['j', '“i” de “pai”', 'ja (eu)'],
            ['lj / nj', '“lh” / “nh”', 'prijatelj, njihov'],
            ['c', '“ts”', 'otac (pai)'],
          ],
        },
        examples: [
          ['Puno hvala!', 'Muito obrigado!'],
          ['Laku noć!', 'Boa noite!'],
        ],
      },
    ],
    pitfalls: [
      'Ler o “j” como o nosso “j”: “ja” soa “iá”.',
      'Ler o “c” como “k”: “otac” soa “ótats”.',
      'Esperar uma vogal em “crn” ou “četvrtak”: o “r” faz o papel de vogal.',
    ],
    quiz: [
      { question: 'Como soa o “j” de “ja” (eu)?', options: ['como o “i” de “pai”', 'como o “j” de “já”', 'como o “g” de “gato”'], answer: 'como o “i” de “pai”', explanation: '“Ja” soa “iá”.' },
      { question: 'Qual destas é uma letra só do alfabeto croata, mesmo escrita com dois sinais?', options: ['lj', 'lh', 'll'], answer: 'lj', explanation: '“Lj”, “nj” e “dž” contam como uma letra cada.' },
    ],
  },
  {
    id: 'hr-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo biti',
    emoji: '🙋',
    summary: 'Sete pronomes, as formas curtas de “biti” (ser, estar) e o tratamento formal com “vi”.',
    sections: [
      {
        text: 'No presente, “biti” tem formas curtas e átonas: “sam”, “si”, “je”… Elas não podem abrir a frase: vem antes o pronome ou outra palavra.',
        table: {
          head: ['Pronome', 'Tradução', 'biti'],
          rows: [
            ['ja', 'eu', 'sam'],
            ['ti', 'tu, você', 'si'],
            ['on / ona / ono', 'ele / ela / (neutro)', 'je'],
            ['mi', 'nós', 'smo'],
            ['vi', 'vocês; o senhor, a senhora', 'ste'],
            ['oni / one', 'eles / elas', 'su'],
          ],
        },
        examples: [
          ['Ja sam iz São Paula.', 'Sou de São Paulo.'],
          ['Iz Zagreba sam.', 'Sou de Zagreb.'],
        ],
      },
      {
        heading: 'O tratamento formal',
        text: 'Com desconhecidos, mais velhos e no trabalho, use “vi” com o verbo no plural, mesmo falando com uma pessoa só.',
        examples: [
          ['Kako ste?', 'Como vai o senhor / a senhora?'],
          ['Odakle ste?', 'De onde o senhor é?'],
        ],
      },
    ],
    pitfalls: ['Começar a frase com “sam”: diga “Ja sam…” ou “Iz Zagreba sam”.', 'Tratar um desconhecido por “ti”: soa íntimo demais. Use “vi”.'],
    quiz: [
      { question: 'Complete: “Ja ___ iz Curitibe.” (Eu sou de Curitiba.)', options: ['sam', 'je', 'si'], answer: 'sam', explanation: '“Sam” é a forma curta de “biti” para “ja”.' },
      { question: '“Kako ste?” é…', options: ['formal ou plural', 'só para amigos', 'só para crianças'], answer: 'formal ou plural', explanation: '“Ste” é a forma de “vi”, usada para vocês e para tratar alguém com respeito.' },
    ],
  },
  {
    id: 'hr-g3',
    level: 'A1.2',
    title: 'O gênero dos substantivos e o possessivo',
    emoji: '👪',
    summary: 'Masculino, feminino e neutro, quase sempre visíveis na terminação, e “moj / moja / moje”.',
    sections: [
      {
        text: 'A última letra costuma mostrar o gênero: consoante → masculino, -a → feminino, -o ou -e → neutro. Algumas palavras terminadas em consoante são femininas, como “obitelj” (família) e “noć” (noite). O possessivo e o adjetivo concordam com o substantivo.',
        table: {
          head: ['Gênero', 'Terminação', 'Exemplo com “meu”'],
          rows: [
            ['masculino', 'consoante', 'moj grad, moj brat'],
            ['feminino', '-a (e algumas em consoante)', 'moja kuća, moja obitelj'],
            ['neutro', '-o, -e', 'moje mlijeko, moje ime'],
          ],
        },
        examples: [
          ['Moja kuća je mala.', 'A minha casa é pequena.'],
          ['Moj otac je iz Splita.', 'O meu pai é de Split.'],
        ],
      },
    ],
    pitfalls: [
      '“Obitelj” (família) termina em consoante mas é feminino: “moja obitelj”.',
      '“Mačka” (gato) é feminino: “mačka je crna”.',
    ],
    quiz: [
      { question: 'Qual é o gênero de “mlijeko” (leite)?', options: ['neutro', 'masculino', 'feminino'], answer: 'neutro', explanation: 'Palavras terminadas em -o costumam ser neutras.' },
      { question: 'Como se diz “a minha família”?', options: ['moja obitelj', 'moj obitelj', 'moje obitelj'], answer: 'moja obitelj', explanation: '“Obitelj” é feminino, apesar da consoante no fim.' },
    ],
  },
  {
    id: 'hr-g4',
    level: 'A1.2',
    title: 'O verbo imati e a negação',
    emoji: '🚫',
    summary: '“Imati” (ter) no presente e a negação: “ne” antes do verbo, com algumas formas grudadas.',
    sections: [
      {
        text: 'Para negar, “ne” vem antes do verbo e se escreve separado: “ne znam”. Três verbos muito usados grudam a negação: “imati” → “nemam”, “biti” → “nisam”, “htjeti” → “neću”.',
        table: {
          head: ['Pronome', 'imati', 'negativo'],
          rows: [
            ['ja', 'imam', 'nemam'],
            ['ti', 'imaš', 'nemaš'],
            ['on / ona', 'ima', 'nema'],
            ['mi', 'imamo', 'nemamo'],
            ['vi', 'imate', 'nemate'],
            ['oni', 'imaju', 'nemaju'],
          ],
        },
        examples: [
          ['Imam sestru.', 'Tenho uma irmã.'],
          ['Nemam brata.', 'Não tenho irmão.'],
          ['Nisam iz Zagreba.', 'Não sou de Zagreb.'],
        ],
      },
    ],
    pitfalls: ['Dizer “ne imam”: o certo é “nemam”.', 'Dizer “ne sam”: o certo é “nisam”.'],
    quiz: [
      { question: 'Como se diz “eu não tenho irmão”?', options: ['Nemam brata.', 'Ne imam brata.', 'Imam ne brata.'], answer: 'Nemam brata.', explanation: 'A negação de “imam” é uma palavra só: “nemam”.' },
      { question: 'Complete: “On ___ sestru.” (Ele tem uma irmã.)', options: ['ima', 'imam', 'imaju'], answer: 'ima', explanation: '“Ima” é a forma de “imati” para on / ona.' },
    ],
  },
  {
    id: 'hr-g5',
    level: 'A2.1',
    title: 'Futur I: infinitivo + “ću”, “ćeš”, “će”',
    emoji: '🔮',
    summary: 'O futuro simples se forma com as formas curtas de “htjeti” (ću, ćeš, će...) junto do infinitivo do verbo.',
    sections: [
      {
        text: 'Como “sam” no presente de “biti”, as formas “ću/ćeš/će...” não podem abrir a frase: precisam de uma palavra antes. No croata padrão, quando o infinitivo vem logo antes de “ću”, as duas palavras ficam separadas, mas o infinitivo perde o “-i” final: “učiti” + “ću” → “učit ću” (diferente do sérvio, que junta tudo numa palavra: “učiću”).',
        table: {
          head: ['Pronome', 'htjeti (futuro)', 'Exemplo com “učiti”'],
          rows: [
            ['ja', 'ću', 'učit ću'],
            ['ti', 'ćeš', 'učit ćeš'],
            ['on / ona', 'će', 'učit će'],
            ['mi', 'ćemo', 'učit ćemo'],
            ['vi', 'ćete', 'učit ćete'],
            ['oni', 'će', 'učit će'],
          ],
        },
        examples: [
          ['Sutra ću učiti hrvatski.', 'Amanhã vou estudar croata.'],
          ['Učit ću cijeli dan.', 'Vou estudar o dia todo.'],
          ['On će kupiti kruh.', 'Ele vai comprar pão.'],
        ],
      },
    ],
    pitfalls: [
      'Juntar “ću” com a palavra anterior quando ela não é o infinitivo do mesmo verbo: “Sutra ću učiti” fica em duas palavras, porque “sutra” veio antes.',
      'Escrever como no sérvio (“učiću”, numa palavra só): no croata padrão, o infinitivo e “ću” ficam separados por um espaço, mesmo perdendo o “-i” final: “učit ću”.',
    ],
    quiz: [
      { question: 'Como se diz “ele vai comprar pão”?', options: ['On će kupiti kruh.', 'On ću kupiti kruh.', 'Kupitiće on kruh.'], answer: 'On će kupiti kruh.', explanation: '“Će” é a forma de “htjeti” para on / ona.' },
      { question: 'Como se escreve “vou estudar” no croata padrão, sem nada antes?', options: ['Učit ću.', 'Učiću.', 'Ću učiti.'], answer: 'Učit ću.', explanation: 'No croata, o infinitivo perde o “-i” final mas fica separado de “ću” por um espaço.' },
    ],
  },
  {
    id: 'hr-g6',
    level: 'A2.1',
    title: 'Perfekt: “sam učio”, “si učila”',
    emoji: '⏳',
    summary: 'O passado mais comum do croata se forma com o presente de “biti” mais um participle que concorda em gênero com quem fala.',
    sections: [
      {
        text: 'O perfeito (perfekt) é o tempo passado do dia a dia. Usa o presente de “biti” (sam, si, je...) mais o participle do verbo principal, terminado em “-o” no masculino, “-la” no feminino e “-lo” no neutro. Assim como “sam”, o auxiliar não abre a frase: o participle vem primeiro. Verbos com “e/je” no radical mudam com a pronúncia ijekaviana: “živjeti” (viver) dá “živio” (masc.), não o “živeo” do sérvio ekaviano.',
        table: {
          head: ['Pronome', 'biti', 'učiti → participle'],
          rows: [
            ['ja (m / f)', 'sam', 'učio / učila'],
            ['ti (m / f)', 'si', 'učio / učila'],
            ['on / ona', 'je', 'učio / učila'],
            ['mi (pl.)', 'smo', 'učili'],
            ['vi (pl.)', 'ste', 'učili'],
            ['oni (pl.)', 'su', 'učili'],
          ],
        },
        examples: [
          ['Učio sam hrvatski tri mjeseca.', 'Estudei croata durante três meses. (fala um homem)'],
          ['Ona je živjela u Splitu.', 'Ela viveu em Split.'],
          ['Kupili smo kruh.', 'Compramos pão.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer a concordância de gênero do participle: um homem diz “učio sam”, uma mulher diz “učila sam”.',
      'Usar o participle ekaviano do sérvio (“živeo”) no croata: a forma ijekaviana é “živio”.',
    ],
    quiz: [
      { question: 'Como uma mulher diz “eu estudei”?', options: ['Učila sam.', 'Učio sam.', 'Učim sam.'], answer: 'Učila sam.', explanation: 'O participle concorda em gênero com quem fala: feminino é “učila”.' },
      { question: 'Qual auxiliar forma o perfeito para “oni” (eles)?', options: ['su', 'je', 'ste'], answer: 'su', explanation: '“Su” é a forma de “biti” para a 3ª pessoa do plural.' },
    ],
  },
  {
    id: 'hr-g7',
    level: 'A2.2',
    title: 'Instrumental: “s mlijekom”, “autobusom”',
    emoji: '🧀',
    summary: 'O instrumental marca “com” (companhia ou combinação), com a preposição “s/sa”, e também o meio ou a ferramenta, sem preposição.',
    sections: [
      {
        text: 'Depois de “s” ou “sa” (“com”), o substantivo vai para o instrumental: os femininos em “-a” e os masculinos/neutros trocam a terminação por “-om” ou “-em”. Usa-se “sa” (não “s”) antes de palavra que comece com s, š, z ou ž. Sem preposição, o instrumental também marca o meio de transporte ou a ferramenta.',
        table: {
          head: ['Nominativo', 'Instrumental', 'Com “s/sa”'],
          rows: [
            ['kava', 'kavom', 's kavom'],
            ['sir', 'sirom', 'sa sirom'],
            ['mlijeko', 'mlijekom', 's mlijekom'],
          ],
        },
        examples: [
          ['Jedem kruh sa sirom.', 'Eu como pão com queijo.'],
          ['Pijem kavu s mlijekom.', 'Eu bebo café com leite.'],
          ['Putujem autobusom.', 'Eu viajo de ônibus. (sem preposição: o meio de transporte)'],
        ],
      },
    ],
    pitfalls: [
      'Usar “s” antes de palavra que comece com s, š, z ou ž: o certo é “sa”, como em “sa sirom”, não “s sirom”.',
      'Deixar o substantivo igual ao nominativo depois de “s/sa”: “kava” precisa virar “kavom”.',
    ],
    quiz: [
      { question: 'Como se diz “café com leite”?', options: ['kava s mlijekom', 'kava i mlijeko', 'kava mlijeko'], answer: 'kava s mlijekom', explanation: '“S” + instrumental (mlijekom) marca “com”.' },
      { question: 'Qual é o instrumental de “sir” (queijo)?', options: ['sirom', 'sir', 'sira'], answer: 'sirom', explanation: 'Substantivos masculinos terminados em consoante recebem “-om” no instrumental.' },
    ],
  },
];
