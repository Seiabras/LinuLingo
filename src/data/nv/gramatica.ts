import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do navajo — por enquanto só A1.1 e A1.2 (pacote incompleto). Fontes:
 * en.wikipedia.org/wiki/Navajo_language (letras especiais, marcação de tom, média de morfemas por
 * verbo/substantivo, fato histórico dos code talkers); en.wikipedia.org/wiki/Navajo_grammar
 * (classificadores verbais, prefixos de pessoa, posposições, as 11 posições do molde verbal e o
 * exemplo “ʼadisbąąs”); www.omniglot.com/writing/navajo.htm (regras de acentuação: agudo = tom alto,
 * vogal dobrada = vogal longa); en.wiktionary.org, verbete por verbete, para “łitso” (“é amarelo”),
 * “dootłʼizh” (“é azul-turquesa/verde”) e “nizhóní” (“é bonito”) — todos descritos ali como verbos
 * neutros, não adjetivos; e navajowotd.com/word/azee (o par “azeeʼ”/“azééʼ”, remédio e boca,
 * diferenciados só pelo tom). Nenhuma fonte consultada foi usada para inventar um paradigma de
 * conjugação: onde a fonte não dava a forma conjugada completa, este curso descreve o fenômeno em vez
 * de fabricar um exemplo.
 */
export const GRAMMAR_NV: GrammarTopic[] = [
  {
    id: 'nv-g1',
    level: 'A1.1',
    title: 'O alfabeto navajo e as letras que o português não tem',
    emoji: '🔤',
    summary:
      'O navajo usa o alfabeto latino, mas com vogais nasalizadas, uma consoante lateral própria (ł), um apóstrofo que é uma letra (ʼ) e acentos que marcam o tom, não só a sílaba tônica.',
    sections: [
      {
        text:
          'A maioria das letras do navajo se lê quase como em português ou inglês, mas várias marcas diacríticas carregam informação que o português não tem.',
        table: {
          head: ['Letra/marca', 'O que marca', 'Exemplo'],
          rows: [
            ['ʼ', 'uma letra própria: oclusiva glotal (parada no ar) ou consoante “ejetiva”, não uma aspa', 'Yáʼátʼééh (“oi”)'],
            ['ł', 'consoante lateral surda, sem equivalente exato em português', 'Łééchąąʼí (“cachorro”)'],
            ['ą, ę, į, ǫ', 'vogal nasalizada (o gancho, chamado ogonek, marca a nasalização)', 'Dį́į́ʼ (“quatro”)'],
            ['acento agudo (á, é, í, ó, ...)', 'marca o tom alto da sílaba, segundo a Wikipédia em inglês e o Omniglot', 'Yáʼátʼééh'],
            ['vogal dobrada (aa, ee, ii, oo)', 'vogal longa', 'Łóóʼ (“peixe”)'],
          ],
        },
        examples: [
          ['Yáʼátʼééh!', 'Oi! (o ʼ é uma letra, o acento marca o tom alto)'],
          ['Łééchąąʼí.', 'Cachorro. (o ł não existe em português; o ą é nasalizado)'],
        ],
      },
    ],
    pitfalls: [
      'Ler o apóstrofo do navajo (ʼ) como pontuação e pular ele ao pronunciar: ele é uma letra, e mudar ou tirar essa letra pode mudar a palavra inteira.',
      'Ler o acento agudo do navajo como a sílaba tônica do português: aqui ele marca o tom alto, não necessariamente onde cai a força da voz (o tópico seguinte explica melhor essa diferença).',
    ],
    quiz: [
      {
        question: 'O que o apóstrofo (ʼ) representa na ortografia do navajo?',
        options: ['Uma letra própria (oclusiva glotal ou consoante ejetiva)', 'Só uma pontuação decorativa, como em português', 'O mesmo que a crase em português'],
        answer: 'Uma letra própria (oclusiva glotal ou consoante ejetiva)',
        explanation: 'Diferente do português, em que o apóstrofo é só pontuação, no navajo ele marca um som de verdade — por isso não pode ser ignorado ao ler ou pronunciar uma palavra.',
      },
    ],
  },
  {
    id: 'nv-g2',
    level: 'A1.1',
    title: 'Alto ou baixo: o tom muda a palavra',
    emoji: '🎵',
    summary:
      'O navajo é uma língua tonal: a mesma sequência de letras pode ter dois significados diferentes dependendo só do tom (alto ou baixo) com que é pronunciada. O acento agudo marca o tom alto; a ausência de acento marca o tom baixo.',
    sections: [
      {
        text:
          'Um exemplo clássico, citado em material de ensino de navajo, é o par “azeeʼ” e “azééʼ”: a diferença entre as duas palavras está só no tom.',
        examples: [
          ['azeeʼ', 'remédio (tom baixo)'],
          ['azééʼ', 'boca (tom alto) — “azeeʼ” é derivada desta palavra, já que muitos remédios tradicionais eram tomados pela boca'],
        ],
      },
      {
        heading: 'Por que isso importa para quem está aprendendo',
        text:
          'Um falante de português tende a prestar atenção só nas letras de uma palavra nova. Em navajo, ignorar o tom pode levar a dizer uma palavra diferente da pretendida — por isso vale a pena ouvir os áudios (quando houver) com atenção à melodia, não só às letras.',
      },
    ],
    pitfalls: [
      'Achar que o acento agudo do navajo é só a sílaba tônica, como em português: aqui ele é o tom alto, uma informação que pode mudar o significado inteiro da palavra, não só a força com que ela é dita.',
      'Ignorar o tom ao tentar falar: como “azeeʼ” e “azééʼ” mostram, a diferença entre duas palavras pode estar inteiramente na melodia.',
    ],
    quiz: [
      {
        question: 'O que diferencia “azeeʼ” (remédio) de “azééʼ” (boca) em navajo?',
        options: ['O tom: baixo em “azeeʼ”, alto em “azééʼ”', 'Nada: são a mesma palavra escrita de dois jeitos', 'O gênero gramatical'],
        answer: 'O tom: baixo em “azeeʼ”, alto em “azééʼ”',
        explanation: '“Azeeʼ” é derivada de “azééʼ” (boca), já que remédios tradicionais costumavam ser tomados pela boca — mas as duas palavras só se distinguem pelo tom, marcado (ou não) pelo acento agudo.',
      },
    ],
  },
  {
    id: 'nv-g3',
    level: 'A1.2',
    title: 'Não existe adjetivo: cor e qualidade são verbos',
    emoji: '🎨',
    summary:
      'Em vez de uma classe separada de adjetivos como em português, o navajo descreve cor, tamanho e qualidade com verbos: “łitso” não é “amarelo”, é literalmente “(ele/ela/isso) é amarelo”.',
    sections: [
      {
        text:
          'O Wiktionary mostra, palavra por palavra, que termos de cor e qualidade do navajo são tecnicamente verbos neutros (ou “estativos”): eles já incluem, na própria palavra, prefixos de modo e de pessoa que normalmente esperaríamos só num verbo conjugado.',
        table: {
          head: ['Navajo', 'Análise (Wiktionary)', 'Tradução literal'],
          rows: [
            ['łitso', 'łi- (adjetival) + prefixos de modo/pessoa + -tso (tema verbal “ser amarelo”)', '“(isso) é amarelo”'],
            ['dootłʼizh', 'di- (“cor”) + prefixos + -tłʼizh (tema verbal “ser azul/verde”)', '“(isso) é azul-turquesa/verde”'],
            ['nizhóní', 'ni- + prefixos + -zhǫ́ (tema verbal “ser bonito”) + -í', '“(isso) é bonito”'],
          ],
        },
      },
      {
        heading: 'O sistema de classificadores',
        text:
          'Segundo a Wikipédia em inglês (artigo “Navajo grammar”), todo verbo navajo carrega um dos quatro “classificadores” — ∅ (nenhum), ł, d ou l — que marcam voz e valência (se a ação é feita por alguém a algo, se é reflexiva, passiva etc.). Esses classificadores não têm equivalente direto em português: eles fazem parte da própria raiz do verbo, não são palavras separadas.',
      },
    ],
    pitfalls: [
      'Procurar uma palavra “solta” para cor ou tamanho, como em português: em navajo, essa informação já vem dentro de um verbo com prefixos de modo e pessoa, não é uma palavra independente que se possa simplesmente colar antes do substantivo.',
      'Achar que o navajo tem gênero gramatical (masculino/feminino) nos substantivos, como o português: a língua não tem essa marcação — o que ela tem são os quatro classificadores verbais, que fazem um trabalho bem diferente.',
    ],
    quiz: [
      {
        question: 'O que a palavra navajo “łitso” significa, segundo a análise do Wiktionary?',
        options: ['“(Isso) é amarelo” — um verbo, não um adjetivo separado', 'Só “amarelo”, um adjetivo como em português', 'Um substantivo que nomeia a cor'],
        answer: '“(Isso) é amarelo” — um verbo, não um adjetivo separado',
        explanation: 'O Wiktionary decompõe “łitso” em prefixos de modo/pessoa mais o tema verbal “-tso” (“ser amarelo”): é tecnicamente um verbo neutro, não um adjetivo isolado como em português.',
      },
      {
        question: 'Segundo a Wikipédia em inglês, o que os quatro classificadores (∅, ł, d, l) marcam no verbo navajo?',
        options: ['Voz e valência (quem faz a ação, se é reflexiva, passiva etc.)', 'O tempo verbal (passado, presente, futuro)', 'O gênero do substantivo'],
        answer: 'Voz e valência (quem faz a ação, se é reflexiva, passiva etc.)',
        explanation: 'O artigo “Navajo grammar” da Wikipédia descreve os quatro classificadores como marcadores de voz e valência, parte do molde de prefixos que todo verbo navajo carrega.',
      },
    ],
  },
  {
    id: 'nv-g4',
    level: 'A1.2',
    title: 'Um verbo, uma frase inteira: a polissíntese navajo',
    emoji: '🧩',
    summary:
      'O verbo navajo é polissintético: ele reúne, numa só palavra, prefixos que em português precisariam de uma frase inteira. A Wikipédia em inglês registra uma média de 11 morfemas por verbo, contra 4 ou 5 por substantivo.',
    sections: [
      {
        text:
          'O artigo “Navajo grammar” da Wikipédia em inglês cita o verbo “ʼadisbąąs”, que reúne vários prefixos numa única palavra para dizer algo que em português precisa de uma frase inteira:',
        examples: [['ʼadisbąąs', '“Estou começando a dirigir algum tipo de veículo com rodas.” — um único verbo navajo para uma frase inteira em português.']],
      },
      {
        heading: 'Até onze posições de prefixo',
        text:
          'Segundo a mesma fonte, os prefixos de um verbo navajo se encaixam em até onze posições, divididas em dois grandes grupos: as posições “disjuntas” (mais distantes da raiz do verbo) e as “conjuntas” (mais próximas dela, incluindo objeto, modo/aspecto, sujeito e o classificador visto no tópico anterior), seguidas enfim pela própria raiz do verbo. Nem toda palavra preenche as onze posições — mas o sistema existe, e é uma das razões pelas quais o navajo foi escolhido para o código militar dos “code talkers” na Segunda Guerra Mundial: a complexidade natural da língua, somada à quase ausência de falantes fora da comunidade navajo-apache, tornava o código praticamente impossível de ser quebrado por quem não tivesse crescido falando a língua.',
      },
      {
        heading: 'Por isso este curso não inventa conjugações',
        text:
          'Como cada verbo navajo pode mudar de forma dependendo do sujeito, do objeto, do modo, do aspecto e do classificador, não é seguro “montar” uma frase nova combinando palavras soltas deste curso como se fosse português ou espanhol. Por isso, os exemplos deste curso usam só fórmulas e palavras já atestadas em fontes reais (dicionários, a Wikipédia, o Wiktionary), e não frases novas construídas por conta própria.',
      },
    ],
    pitfalls: [
      'Tentar montar uma frase navajo juntando palavras soltas na ordem do português: como o verbo navajo concentra sujeito, objeto e modo em prefixos presos à raiz, essa tradução palavra-por-palavra normalmente não funciona.',
      'Subestimar quantos morfemas cabem numa única palavra navajo: a média de 11 por verbo (contra 4–5 por substantivo) é um dos traços mais estudados da língua.',
    ],
    quiz: [
      {
        question: 'O que o verbo navajo “ʼadisbąąs”, citado pela Wikipédia em inglês, significa por extenso?',
        options: [
          '“Estou começando a dirigir algum tipo de veículo com rodas”',
          '“Eu dirijo todos os dias”',
          '“O carro é meu”',
        ],
        answer: '“Estou começando a dirigir algum tipo de veículo com rodas”',
        explanation: 'É o exemplo que a Wikipédia usa para mostrar como um único verbo navajo, com vários prefixos, pode equivaler a uma frase inteira em português.',
      },
      {
        question: 'Segundo a Wikipédia em inglês, qual é a média de morfemas por verbo em navajo, comparada à média por substantivo?',
        options: ['Cerca de 11 por verbo, contra 4–5 por substantivo', 'A mesma média para verbos e substantivos', 'Só 1 morfema por verbo, como em português'],
        answer: 'Cerca de 11 por verbo, contra 4–5 por substantivo',
        explanation: 'É um dos números citados no artigo da Wikipédia sobre o navajo para mostrar como o verbo concentra muito mais informação gramatical do que o substantivo.',
      },
    ],
  },
];
