import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do tikuna — por enquanto só A1.1 e A1.2 (pacote incompleto). Fontes:
 * “Naanearu Uchiga” (Ministério da Educação do Peru/SIL, 1997), cartilha oficial de alfabetização
 * cujo texto completo (alfabeto, pronúncia e os pares mínimos de nasalização/laringalização/
 * glotalização usados nesta unidade) foi lido em archive.org/details/rosettaproject_tca_ortho-1
 * (Projeto Rosetta); Bertet, D. “Tikuna, a Ten-Toneme Language in Amazonia”, Amerindia 43 (2021) —
 * para os dez tonemas da variedade de San Martín de Amacayacu e, na nota de rodapé 22 do mesmo
 * artigo, para as cinco classes nominais do tikuna; e os numerais de um a cinco de
 * native-languages.org/ticuna_words.htm, conferidos contra a forma fonológica de “dog” (“airu”) do
 * próprio Bertet (2021).
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
      'Esquecer o til em palavras como “Tamoxẽ”: sem ele, a vogal deixa de ser nasalizada e a palavra muda.',
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
          'Isso quer dizer que a mesma sequência de consoantes e vogais pode ter significados totalmente diferentes, dependendo só da melodia com que é pronunciada — como no mandarim, mas com muito mais tons distintos. A ortografia prática do tikuna não marca o tom em toda palavra: ela só usa o acento agudo quando duas palavras poderiam se confundir por escrito. A própria cartilha oficial de 1997 usa este par quase idêntico para ensinar a regra:',
        examples: [
          ['dexi', 'água'],
          ['dexa', 'mensagem, recado (duas palavras quase iguais na escrita, mas com tons diferentes)'],
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
        explanation: 'É o caso de “dexi” (água) e “dexa” (mensagem): duas palavras quase idênticas na escrita, que a própria cartilha de 1997 usa para mostrar por que marcar o tom é necessário.',
      },
    ],
  },
  {
    id: 'tca-g3',
    level: 'A1.2',
    title: 'Mais do que tom: nasalização, laringalização e glotalização',
    emoji: '🧵',
    summary:
      'Além do tom (visto no tópico anterior), a cartilha oficial de 1997 usa três outras marcas para separar palavras que, sem elas, pareceriam idênticas: o til (nasalização), o sublinhado numa vogal (laringalização) e o sublinhado numa consoante (glotalização consonântica).',
    sections: [
      {
        heading: 'A til: nasalização',
        text:
          'Como em português (“mãe”, “não”), o til sobre uma vogal tikuna marca que o ar sai também pelo nariz ao pronunciá-la. A cartilha de 1997 usa justamente um par quase idêntico para mostrar a regra:',
        examples: [
          ['tuxii', '“a” (complemento direto, “ela” como objeto)'],
          ['tiixil', '“cântaro” (com a vogal nasalizada marcada por til)'],
        ],
      },
      {
        heading: 'O sublinhado: laringalização e glotalização',
        text:
          'Quando a contração acontece na garganta (laringalização) numa vogal, ou quando uma consoante é pronunciada com uma pequena parada no ar (glotalização), a cartilha de 1997 sublinha a letra afetada. Sem essa marca, duas palavras bem diferentes podem parecer escritas quase do mesmo jeito. São exemplos citados na própria cartilha:',
        table: {
          head: ['Par', 'Tikuna', 'Tikuna', 'Significados'],
          rows: [
            ['vogal laringalizada', 'to', 'tox', '“outro” / “macaco-da-noite”'],
            ['consoante glotalizada', 'tacii', 'tacii', '“grande” / “qual, que”'],
          ],
        },
      },
      {
        heading: 'Nem toda semelhança na escrita é coincidência',
        text:
          'Outros dois pares citados pela cartilha mostram a mesma ideia com o tom: “chiitacu” (noite) e “churi” (morcego) foram escolhidos ali para o aluno treinar o ouvido com os dois tipos de consoante (“normal” e “forte”); e “nape” pode ser “(ele/ela) dorme” ou “na frente de”, dependendo só da pronúncia.',
      },
    ],
    pitfalls: [
      'Achar que til, sublinhado numa vogal e sublinhado numa consoante marcam a mesma coisa: são três fenômenos diferentes (nasalização, laringalização, glotalização), que só por acaso usam sinais parecidos.',
      'Ignorar essas marcas ao ler em voz alta: como “to” (outro) e “tox” (macaco-da-noite) mostram, elas podem ser a única diferença entre duas palavras completamente diferentes.',
    ],
    quiz: [
      {
        question: 'Segundo a cartilha oficial de 1997, o que diferencia “to” (outro) de “tox” (macaco-da-noite)?',
        options: [
          'A laringalização/glotalização marcada por sublinhado',
          'Nada: são a mesma palavra escrita de dois jeitos',
          'O gênero gramatical',
        ],
        answer: 'A laringalização/glotalização marcada por sublinhado',
        explanation: 'A cartilha de 1997 cita justamente este par para mostrar como o sublinhado numa letra separa duas palavras bem diferentes.',
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
          'O linguista Denis Bertet descreve, na variedade de tikuna de San Martín de Amacayacu (Amerindia 43, 2021, nota de rodapé 22), um sistema de cinco classes nominais: feminino, masculino, neutro, saliente e não saliente. Diferente do gênero gramatical fixo do português (“a casa”, “o carro”), a classe de um substantivo tikuna pode mudar de acordo com o que o falante quer destacar no discurso — por isso este curso não marca gênero gramatical no vocabulário, como marca no de línguas românicas.',
      },
    ],
    pitfalls: [
      'Esperar que cada substantivo tikuna tenha um gênero fixo, como em português: aqui a classe pode mudar conforme o contexto, não é uma etiqueta permanente da palavra.',
      'Confundir essa classificação com o gênero gramatical europeu: são cinco classes, não duas, e elas fazem um trabalho diferente — menos sobre a palavra em si, mais sobre o que o falante quer comunicar na frase.',
    ],
    quiz: [
      {
        question: 'Quantas classes de concordância nominal o tikuna tem, segundo a descrição de Bertet (2021)?',
        options: ['Cinco (feminino, masculino, neutro, saliente, não saliente)', 'Duas (masculino e feminino, como o português)', 'Nenhuma: o tikuna não marca classe nominal'],
        answer: 'Cinco (feminino, masculino, neutro, saliente, não saliente)',
        explanation: 'Bertet descreve cinco classes nominais no tikuna, que além disso podem mudar de acordo com o contexto do discurso — diferente do gênero fixo do português.',
      },
    ],
  },
];
