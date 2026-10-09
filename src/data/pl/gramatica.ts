import type { GrammarTopic } from '../types';

/** Tópicos de gramática do polonês — A1.1 ao A2.2 (pacote incompleto; B1 em diante ainda falta). */
export const GRAMMAR_PL: GrammarTopic[] = [
  {
    id: 'pl-g1',
    level: 'A1.1',
    title: 'Pronúncia: sz, cz, rz, ł e as nasais',
    emoji: '🔤',
    summary: 'O polonês se escreve com letras latinas, mas combina letras de um jeito próprio. Uma vez aprendidas as regras, a leitura é bem regular.',
    sections: [
      {
        text: 'Cada letra ou grupo de letras tem quase sempre o mesmo som. A tônica cai na penúltima sílaba em quase todas as palavras.',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['sz', '“ch” de “chá”', 'proszę (por favor)'],
            ['cz', '“tch” de “tchau”', 'czarny (preto)'],
            ['rz, ż', '“j” de “já”', 'trzy (três), też (também)'],
            ['ł', '“u” de “mau”', 'mały (pequeno)'],
            ['w', '“v”', 'woda (água)'],
            ['ą, ę', 'vogais nasais (“om”, “em”)', 'są (são), dziękuję'],
            ['ó', '“u”', 'córka (filha)'],
          ],
        },
        examples: [
          ['Dziękuję bardzo!', 'Muito obrigado!'],
          ['Mleko jest białe.', 'O leite é branco.'],
        ],
      },
    ],
    pitfalls: [
      'Ler o “w” como “u”: “woda” soa “vóda”.',
      'Ler o “ł” como “l”: em “mały” ele soa como o “u” de “mau”.',
      'Pôr a tônica no fim, como em “obrigado” → “dziękuJÊ”: o certo é “dzięKUję”, na penúltima.',
    ],
    quiz: [
      { question: 'Como soa o “rz” de “trzy” (três)?', options: ['Como o “j” de “já”', 'Como “r” + “z”', 'Como “rr” de “carro”'], answer: 'Como o “j” de “já”', explanation: '“rz” e “ż” têm o mesmo som; depois de t, p e k ele fica surdo, como um “ch”.' },
      { question: 'Em que sílaba cai a tônica de “przyjaciel” (amigo)?', options: ['na penúltima: przy-JA-ciel', 'na última: przy-ja-CIEL', 'na primeira: PRZY-ja-ciel'], answer: 'na penúltima: przy-JA-ciel', explanation: 'No polonês, a tônica cai quase sempre na penúltima sílaba.' },
    ],
  },
  {
    id: 'pl-g2',
    level: 'A1.1',
    title: 'Os pronomes, o verbo być e o “pan / pani”',
    emoji: '🙋',
    summary: 'Seis pronomes, um verbo para ser e estar e a forma educada com “pan” e “pani”.',
    sections: [
      {
        text: '“Być” cobre o nosso ser e o nosso estar. Como a terminação já mostra a pessoa, o pronome costuma ficar de fora: “jestem z São Paulo” (sou de São Paulo).',
        table: {
          head: ['Pronome', 'Tradução', 'być'],
          rows: [
            ['ja', 'eu', 'jestem'],
            ['ty', 'tu, você', 'jesteś'],
            ['on / ona / ono', 'ele / ela / (neutro)', 'jest'],
            ['my', 'nós', 'jesteśmy'],
            ['wy', 'vocês', 'jesteście'],
            ['oni / one', 'eles / elas', 'są'],
          ],
        },
        examples: [
          ['Jestem z São Paulo.', 'Sou de São Paulo.'],
          ['My jesteśmy przyjaciółmi.', 'Nós somos amigos.'],
        ],
      },
      {
        heading: 'O tratamento formal',
        text: 'Com desconhecidos, em lojas e no trabalho, não se usa “ty”: diz-se “pan” (o senhor) ou “pani” (a senhora), com o verbo na 3ª pessoa, como no “o senhor é” do português.',
        examples: [
          ['Jak się pan nazywa?', 'Como o senhor se chama?'],
          ['Czy pani jest z Warszawy?', 'A senhora é de Varsóvia?'],
        ],
      },
    ],
    pitfalls: ['Tratar um desconhecido por “ty”: em polonês isso soa íntimo demais. Use “pan” ou “pani”.', '“Oni” é para grupos com pelo menos um homem; para grupos só de mulheres, crianças ou coisas, “one”.'],
    quiz: [
      { question: 'Complete: “___ z Curitiby.” (Eu sou de Curitiba.)', options: ['Jestem', 'Jest', 'Jesteś'], answer: 'Jestem', explanation: '“Jestem” é a forma de “być” para “ja”; o pronome pode ficar de fora.' },
      { question: 'Como perguntar educadamente a um senhor “como o senhor se chama?”', options: ['Jak się pan nazywa?', 'Jak się nazywasz?', 'Jak masz na imię?'], answer: 'Jak się pan nazywa?', explanation: 'No tratamento formal entra “pan” e o verbo vai para a 3ª pessoa.' },
    ],
  },
  {
    id: 'pl-g3',
    level: 'A1.2',
    title: 'O gênero dos substantivos e o possessivo',
    emoji: '👪',
    summary: 'Masculino, feminino e neutro, quase sempre visíveis na terminação, e “mój / moja / moje”.',
    sections: [
      {
        text: 'Olhe a última letra da palavra: consoante costuma ser masculino, -a costuma ser feminino, -o, -e e -ę são neutros. O possessivo e o adjetivo concordam com o substantivo.',
        table: {
          head: ['Gênero', 'Terminação', 'Exemplo com “meu”'],
          rows: [
            ['masculino', 'consoante', 'mój dom, mój brat'],
            ['feminino', '-a', 'moja mama, moja siostra'],
            ['neutro', '-o, -e, -ę', 'moje mleko, moje imię'],
          ],
        },
        examples: [
          ['Mój dom jest mały.', 'A minha casa é pequena.'],
          ['Moja rodzina jest duża.', 'A minha família é grande.'],
        ],
      },
    ],
    pitfalls: [
      '“Dom” (casa) é masculino, ao contrário de “casa”: “mój dom”, não “moja dom”.',
      'Há exceções: “tata” (pai) termina em -a mas é masculino — “mój tata”.',
    ],
    quiz: [
      { question: 'Qual é o gênero de “mleko” (leite)?', options: ['neutro', 'masculino', 'feminino'], answer: 'neutro', explanation: 'Palavras terminadas em -o costumam ser neutras.' },
      { question: 'Como se diz “a minha irmã”?', options: ['moja siostra', 'mój siostra', 'moje siostra'], answer: 'moja siostra', explanation: '“Siostra” é feminino, então o possessivo é “moja”.' },
    ],
  },
  {
    id: 'pl-g4',
    level: 'A1.2',
    title: 'O verbo mieć e a negação com “nie”',
    emoji: '🚫',
    summary: '“Mieć” (ter) no presente e a negação com “nie” antes do verbo.',
    sections: [
      {
        text: 'Para negar, põe-se “nie” antes do verbo. Depois de um verbo negado, o objeto direto passa para o genitivo: “mam siostrę” (tenho uma irmã) → “nie mam siostry” (não tenho irmã).',
        table: {
          head: ['Pronome', 'mieć', 'negativo'],
          rows: [
            ['ja', 'mam', 'nie mam'],
            ['ty', 'masz', 'nie masz'],
            ['on / ona', 'ma', 'nie ma'],
            ['my', 'mamy', 'nie mamy'],
            ['wy', 'macie', 'nie macie'],
            ['oni / one', 'mają', 'nie mają'],
          ],
        },
        examples: [
          ['Mam na imię Anna.', 'Meu nome é Anna.'],
          ['Nie mówię po niemiecku.', 'Eu não falo alemão.'],
        ],
      },
    ],
    pitfalls: ['Pôr o “nie” depois do verbo: o certo é “nie wiem”, nunca “wiem nie”.', 'Manter o acusativo depois da negação: “nie mam siostrę” está errado; o certo é “nie mam siostry”.'],
    quiz: [
      { question: 'Como se diz “eu não sei”?', options: ['Nie wiem.', 'Wiem nie.', 'Nie jestem wiem.'], answer: 'Nie wiem.', explanation: 'O “nie” vem logo antes do verbo.' },
      { question: 'Complete: “On ___ brata.” (Ele tem um irmão.)', options: ['ma', 'mam', 'mają'], answer: 'ma', explanation: '“Ma” é a forma de “mieć” para on / ona.' },
    ],
  },
  {
    id: 'pl-g5',
    level: 'A2.1',
    title: 'O passado: o sufixo -ł- e o gênero de quem fala',
    emoji: '🕰️',
    summary: 'O polonês não usa um verbo auxiliar separado no passado: a terminação de pessoa e gênero gruda direto no radical do verbo com -ł-.',
    sections: [
      {
        text: 'O passado se forma com o radical do verbo, o sufixo -ł- e uma terminação que marca a pessoa e, no singular, também o gênero de quem fala ou do sujeito. No plural, a diferença é entre grupos com pelo menos um homem (-li) e grupos só de mulheres ou crianças (-ły).',
        table: {
          head: ['Pessoa', 'masculino', 'feminino'],
          rows: [
            ['ja (eu)', 'kupiłem', 'kupiłam'],
            ['ty (tu)', 'kupiłeś', 'kupiłaś'],
            ['on / ona', 'kupił', 'kupiła'],
            ['my (nós)', 'kupiliśmy', 'kupiłyśmy'],
          ],
        },
        examples: [
          ['Wczoraj padał deszcz.', 'Ontem choveu.'],
          ['Kupiłem nową kurtkę.', 'Eu comprei uma jaqueta nova. (fala um homem)'],
        ],
      },
      {
        heading: 'Uma mulher fala diferente de um homem',
        text: 'Diferente do português, o polonês marca no verbo se quem fala é homem ou mulher: um homem diz “kupiłem”, uma mulher diz “kupiłam”. Isso vale para qualquer verbo no passado, incluindo “być”: “byłem” / “byłam”.',
        examples: [['Byłem w szkole.', 'Eu estive na escola. (fala um homem)']],
      },
    ],
    pitfalls: [
      'Procurar um verbo auxiliar separado, como “jsem” no tcheco: em polonês a terminação gruda direto no verbo principal.',
      'Esquecer de marcar o próprio gênero: uma mulher nunca diz “kupiłem”, só “kupiłam”.',
    ],
    quiz: [
      { question: 'Como uma mulher diz “eu comprei uma jaqueta”?', options: ['Kupiłam kurtkę.', 'Kupiłem kurtkę.', 'Jestem kupiła kurtkę.'], answer: 'Kupiłam kurtkę.', explanation: 'A terminação -am marca que quem fala é mulher.' },
      { question: '“Wczoraj padał deszcz” quer dizer…', options: ['Ontem choveu', 'Hoje está chovendo', 'Vai chover amanhã'], answer: 'Ontem choveu', explanation: '“Padał” é a forma masculina do passado de “padać” (cair; chover).' },
    ],
  },
  {
    id: 'pl-g6',
    level: 'A2.2',
    title: 'O narzędnik: być + profissão',
    emoji: '🧑‍⚕️',
    summary: 'Para dizer a profissão com “być” (ser), o substantivo vai para o caso instrumental (narzędnik), não para o nominativo.',
    sections: [
      {
        text: 'Depois de “być” (ser), uma profissão ou papel muda de forma: masculino e neutro costumam ganhar -em, feminino ganha -ą. O instrumental também aparece depois de “z” (com).',
        table: {
          head: ['Gênero', 'Nominativo', 'Narzędnik (depois de być)'],
          rows: [
            ['masculino', 'lekarz', 'Jestem lekarzem.'],
            ['feminino', 'pielęgniarka', 'Jestem pielęgniarką.'],
            ['com “z”', 'brat', 'Idę z bratem.'],
          ],
        },
        examples: [
          ['Jestem nauczycielem.', 'Eu sou professor.'],
          ['Ona jest pielęgniarką.', 'Ela é enfermeira.'],
        ],
      },
    ],
    pitfalls: ['Deixar a profissão no nominativo depois de “być”: o certo é “jestem lekarzem”, não “jestem lekarz”.', 'Usar a terminação masculina -em para uma palavra feminina: “pielęgniarka” vira “pielęgniarką”, com -ą.'],
    quiz: [
      { question: 'Como se diz “eu sou professor” (homem)?', options: ['Jestem nauczycielem.', 'Jestem nauczyciel.', 'Jestem nauczyciela.'], answer: 'Jestem nauczycielem.', explanation: 'Depois de “być”, a profissão masculina vai para o narzędnik, com -em.' },
      { question: 'Como se diz “ela é enfermeira”?', options: ['Ona jest pielęgniarką.', 'Ona jest pielęgniarka.', 'Ona jest pielęgniarkę.'], answer: 'Ona jest pielęgniarką.', explanation: 'A profissão feminina ganha -ą no narzędnik.' },
    ],
  },
  {
    id: 'pl-g7',
    level: 'A2.2',
    title: 'O miejscownik: onde algo está, com w e na',
    emoji: '📍',
    summary: 'Para dizer onde alguém está ou trabalha, o polonês usa “w” (em, dentro) ou “na” (em, sobre) com o substantivo no caso locativo (miejscownik).',
    sections: [
      {
        text: 'O locativo muda a terminação do substantivo e, às vezes, a última consoante do radical (palatalização). “W” serve para estar dentro de um lugar fechado; “na” para superfícies, praças, ruas e certos lugares como “na uniwersytecie”.',
        table: {
          head: ['Lugar', 'Nominativo', 'Miejscownik'],
          rows: [
            ['cidade', 'miasto', 'w mieście'],
            ['escola', 'szkoła', 'w szkole'],
            ['Polônia', 'Polska', 'w Polsce'],
            ['rua', 'ulica', 'na ulicy'],
          ],
        },
        examples: [
          ['Moja mama pracuje w szpitalu.', 'A minha mãe trabalha no hospital.'],
          ['Mieszkam w dużym mieście.', 'Eu moro numa cidade grande.'],
        ],
      },
    ],
    pitfalls: ['Usar o nominativo depois de “w” ou “na”: “w miasto” está errado; o certo é “w mieście”.', 'Confundir “w” com “na”: lugares fechados usam “w” (w szkole), superfícies e certos lugares usam “na” (na ulicy).'],
    quiz: [
      { question: 'Como se diz “eu moro numa cidade grande”?', options: ['Mieszkam w dużym mieście.', 'Mieszkam w duże miasto.', 'Mieszkam na dużym mieście.'], answer: 'Mieszkam w dużym mieście.', explanation: '“Miasto” no miejscownik, depois de “w”, vira “mieście”.' },
      { question: 'Qual é a forma certa de “Polska” depois de “w”?', options: ['w Polsce', 'w Polska', 'w Polsku'], answer: 'w Polsce', explanation: 'O miejscownik de “Polska” é “Polsce”, com a troca de k por c.' },
    ],
  },
];
