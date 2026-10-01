import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do tikuna — por enquanto só A1.1 e A1.2 (pacote incompleto). Fontes:
 * “Naanearu Uchiga” (Ministério da Educação do Peru/SIL, 1997, alfabeto e exemplos de pronúncia);
 * Bertet, D. “Tikuna, a Ten-Toneme Language in Amazonia”, Amerindia 43 (2021); Bertet, D. “Nominal
 * agreement class assignment in Tikuna”, Journal of Historical Linguistics (2022, resumo); e os
 * numerais de native-languages.org, conferidos contra a forma fonológica “dog” de Bertet (2021).
 */
export const GRAMMAR_TCA: GrammarTopic[] = [
  {
    id: 'tca-g1',
    level: 'A1.1',
    title: 'O alfabeto tikuna e as letras que não existem em português',
    emoji: '🔤',
    summary:
      'O tikuna usa o alfabeto latino, numa ortografia oficial criada com o Instituto Linguístico de Verão (SIL) e o Ministério da Educação do Peru (cartilha “Naanearu Uchiga”, 1997). Tem vogais orais, nasais e laringalizadas, e consoantes “normais” e “fortes”.',
    sections: [
      {
        text:
          'O alfabeto tikuna tem vinte e duas letras simples e compostas. A maioria se lê quase como em português ou espanhol, mas algumas letras marcam sons que o português não distingue por escrito.',
        table: {
          head: ['Letra/marca', 'Som', 'Exemplo'],
          rows: [
            ['ü', 'vogal própria do tikuna, sem equivalente exato em português', 'Wüxi (“um”)'],
            ['x', 'oclusiva glotal (uma pequena parada no ar), não o som de “x” do português', 'Nuxmae (“oi”)'],
            ['ng', 'som nasal antes de “g”, como o “n” de “angosto” em espanhol', 'Ngexüi (“mulher”)'],
            ['til (ã, ẽ, ũ…)', 'nasaliza a vogal, como no português “mãe”', 'Tamoxẽ (“obrigado”)'],
          ],
        },
        examples: [
          ['Nuxmae!', 'Oi! (o x marca a oclusiva glotal, não o som “x”)'],
          ['Wüxi.', 'Um. (o ü não tem equivalente exato em português)'],
        ],
      },
      {
        heading: 'Vogais orais, nasais e laringalizadas',
        text:
          'A cartilha oficial de 1997 descreve quatro famílias de vogais no tikuna: “de boca” (orais), “de nariz” (nasais, com til), “de garganta” (laringalizadas, sublinhadas na ortografia) e “de nariz e garganta” (nasais e laringalizadas ao mesmo tempo). Essa riqueza vocálica é uma das razões pelas quais o tikuna soa tão diferente do português a um ouvido destreinado.',
      },
    ],
    pitfalls: [
      'Ler o “x” do tikuna como o “x” do português: aqui ele marca uma parada no ar (oclusiva glotal), não o som de “chuva” nem de “exame”.',
      'Esquecer a til em palavras como “Tamoxẽ”: sem ela, a vogal deixa de ser nasalizada e a palavra muda.',
    ],
    quiz: [
      {
        question: 'O que a letra “x” representa na ortografia oficial do tikuna?',
        options: ['Uma oclusiva glotal (uma pequena parada no ar)', 'O mesmo som do “x” em português', 'Uma letra muda, só decorativa'],
        answer: 'Uma oclusiva glotal (uma pequena parada no ar)',
        explanation: 'Diferente do português, o “x” tikuna marca uma parada no ar — por isso palavras como “Nuxmae” não soam como “Nuchmae”.',
      },
    ],
  },
  {
    id: 'tca-g2',
    level: 'A1.1',
    title: 'Uma das línguas com mais tons do mundo',
    emoji: '🎵',
    summary:
      'O linguista Denis Bertet (2021, revista Amerindia) mostrou que a variedade de tikuna falada em San Martín de Amacayacu (Colômbia) tem dez tonemas (unidades de tom) distintos em sílaba tônica — um dos maiores inventários de tons já descritos em qualquer língua do mundo, e o maior da América do Sul.',
    sections: [
      {
        text:
          'Isso quer dizer que a mesma sequência de consoantes e vogais pode ter significados totalmente diferentes, dependendo só da melodia com que é pronunciada — como no mandarim, mas com muito mais tons distintos. A ortografia prática do tikuna não marca o tom em toda palavra: ela só usa o acento agudo quando duas palavras escritas do mesmo jeito poderiam se confundir.',
        examples: [
          ['dexi', 'água'],
          ['dexá', 'mensagem, recado (mesma sequência de letras sem acento; o acento marca o tom diferente)'],
        ],
      },
      {
        heading: 'Por que isso importa para quem está aprendendo',
        text:
          'Um falante de português tende a prestar atenção só nas consoantes e vogais de uma palavra nova. Em tikuna, ignorar a melodia pode levar a dizer uma palavra completamente diferente da pretendida — por isso os áudios e os exemplos deste curso merecem ser ouvidos com atenção à entonação, não só às letras.',
      },
    ],
    pitfalls: [
      'Achar que o acento agudo do tikuna é só um sinal de sílaba tônica, como em português: aqui ele existe para separar palavras que, sem ele, se confundiriam só pelo tom.',
      'Pronunciar uma palavra tikuna “lendo” as letras como em português e ignorando a melodia: como o tikuna tem até dez tons distintos por sílaba, a melodia muda o significado da palavra.',
    ],
    quiz: [
      {
        question: 'Segundo Bertet (2021), quantos tonemas tem a variedade de tikuna estudada em San Martín de Amacayacu, em sílaba tônica?',
        options: ['Dez', 'Três', 'Nenhum: o tikuna não é uma língua tonal'],
        answer: 'Dez',
        explanation: 'Bertet descreve dez tonemas em sílaba tônica — um dos maiores inventários de tons do mundo e o maior da América do Sul.',
      },
      {
        question: 'Quando a ortografia prática do tikuna usa o acento agudo?',
        options: [
          'Só quando duas palavras escritas do mesmo jeito podem se confundir por causa do tom',
          'Em toda vogal tônica, como em português',
          'Nunca: o tikuna não tem acentos',
        ],
        answer: 'Só quando duas palavras escritas do mesmo jeito podem se confundir por causa do tom',
        explanation: 'É o caso de “dexi” (água) e “dexá” (mensagem): sem o acento, as duas se escreveriam exatamente igual.',
      },
    ],
  },
  {
    id: 'tca-g3',
    level: 'A1.2',
    title: 'Os numerais e a contagem por composição',
    emoji: '🔢',
    summary:
      'O tikuna tem numerais próprios de um a cinco e de dez; os números de seis a nove se formam juntando os numerais menores a uma expressão ligada à outra mão — um padrão de contagem por composição comum em línguas indígenas da Amazônia.',
    sections: [
      {
        heading: 'De um a cinco, e dez',
        table: {
          head: ['Numeral', 'Tikuna'],
          rows: [
            ['um', 'wüxi'],
            ['dois', 'taxre'],
            ['três', 'tomaxixpü'],
            ['quatro', 'ãgümücü'],
            ['cinco', 'wüxi mixepüx'],
            ['dez', 'guxmixepüx'],
          ],
        },
        examples: [
          ['Wüxi, taxre, tomaxixpü, ãgümücü.', 'Um, dois, três, quatro.'],
          ['Wüxi mixepüx.', 'Cinco.'],
        ],
      },
      {
        heading: 'Seis a nove: numerais compostos',
        text:
          'Entre seis e nove, o tikuna junta uma expressão (documentada como “naixmixwa rü…”, algo como “da outra mão…”) ao numeral de um a quatro correspondente: seis é, literalmente, “da outra mão, um”; sete, “da outra mão, dois”; e assim por diante. É o mesmo tipo de lógica de contar pelas mãos que aparece em várias línguas indígenas do Brasil.',
      },
      {
        heading: 'Numeral junto do substantivo',
        text:
          'Como em português, o numeral tikuna vem antes do substantivo que ele conta, sem precisar de nenhuma palavra extra entre os dois.',
        examples: [
          ['Wüxi airu.', 'Um cachorro.'],
          ['Taxre churi.', 'Dois morcegos.'],
        ],
      },
    ],
    pitfalls: [
      'Tentar traduzir “seis”, “sete”, “oito” e “nove” como palavras soltas: no tikuna documentado, eles são expressões compostas a partir dos numerais menores, não palavras novas e independentes.',
      'Esquecer que “wüxi mixepüx” (cinco) já é, ele mesmo, uma expressão com duas palavras — não é um erro de digitação.',
    ],
    quiz: [
      {
        question: 'Como o tikuna forma os numerais de seis a nove?',
        options: [
          'Compondo uma expressão ligada à outra mão com os numerais de um a quatro',
          'Com palavras totalmente novas, sem relação com um a quatro',
          'Emprestando os numerais do português',
        ],
        answer: 'Compondo uma expressão ligada à outra mão com os numerais de um a quatro',
        explanation: 'Seis a nove se formam juntando “naixmixwa rü…” (da outra mão…) ao numeral correspondente de um a quatro.',
      },
    ],
  },
  {
    id: 'tca-g4',
    level: 'A1.2',
    title: 'Cinco classes nominais, não dois gêneros',
    emoji: '🧩',
    summary:
      'Em vez do masculino e do feminino do português, o tikuna organiza os substantivos em cinco classes de concordância — feminino, masculino, neutro, saliente e não saliente — e um mesmo substantivo pode mudar de classe dependendo do contexto do discurso.',
    sections: [
      {
        text:
          'O linguista Denis Bertet descreve, no tikuna, um sistema de cinco classes nominais (2022, “Nominal agreement class assignment in Tikuna”): feminino, masculino, neutro, saliente e não saliente. Diferente do gênero gramatical fixo do português (“a casa”, “o carro”), a classe de um substantivo tikuna pode mudar de acordo com o que o falante quer destacar no discurso — por isso este curso não marca gênero gramatical no vocabulário, como marca no de línguas românicas.',
      },
    ],
    pitfalls: [
      'Esperar que cada substantivo tikuna tenha um gênero fixo, como em português: aqui a classe pode mudar conforme o contexto, não é uma etiqueta permanente da palavra.',
      'Confundir essa classificação com o gênero gramatical europeu: são cinco classes, não duas, e elas fazem um trabalho diferente — menos sobre a palavra em si, mais sobre o que o falante quer comunicar na frase.',
    ],
    quiz: [
      {
        question: 'Quantas classes de concordância nominal o tikuna tem, segundo a descrição de Bertet (2022)?',
        options: ['Cinco (feminino, masculino, neutro, saliente, não saliente)', 'Duas (masculino e feminino, como o português)', 'Nenhuma: o tikuna não marca classe nominal'],
        answer: 'Cinco (feminino, masculino, neutro, saliente, não saliente)',
        explanation: 'Bertet descreve cinco classes nominais no tikuna, que além disso podem mudar de acordo com o contexto do discurso — diferente do gênero fixo do português.',
      },
    ],
  },
];
