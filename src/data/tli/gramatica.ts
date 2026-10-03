import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do lingít — por enquanto só A1.1 e A1.2 (pacote incompleto). Fontes: Wikipédia
 * em inglês, artigos “Tlingit_language”, “Tlingit_phonology”, “Tlingit_grammar” e “Tlingit” (o povo);
 * Wiktionary, verbete por verbete — ver o cabeçalho de vocabulario.ts para a citação completa de cada
 * fonte. Nenhuma conjugação verbal é apresentada aqui como se fosse confirmada: onde a fonte não dava a
 * forma completa, este curso descreve o fenômeno em vez de inventar um exemplo.
 */
export const GRAMMAR_TLI: GrammarTopic[] = [
  {
    id: 'tli-g1',
    level: 'A1.1',
    title: 'Um dos maiores inventários de consoantes do mundo',
    emoji: '🔤',
    summary:
      'O lingít é famoso entre linguistas por ter mais de 40 consoantes, com uma série quase completa de consoantes “ejetivas” — presas e fricativas ditas com um golpe de ar vindo da glote.',
    sections: [
      {
        text:
          'O artigo “Tlingit phonology” da Wikipédia em inglês descreve um inventário consonantal com mais de 40 fonemas, organizados em lugares que vão dos lábios até a glote. Quase toda consoante presa, africada e fricativa do lingít tem uma versão “ejetiva” (marcada com apóstrofo, ʼ) — a única que falta, segundo o artigo, é a africada ejetiva [ʃʼ]. Em compensação, a língua não tem o som [l] sonoro comum, e não tem consoantes labiais (como p, b, m) na maioria dos dialetos, exceto em empréstimos recentes do inglês.',
        table: {
          head: ['Traço', 'O que é', 'Exemplo'],
          rows: [
            ['Consoante simples', 'dita sem golpe de ar extra', 'keitl (cachorro)'],
            ['Consoante ejetiva (ʼ)', 'dita com um golpe de ar vindo da glote, mais “seca” que a simples', 'tléixʼ (um), chʼáakʼ (águia)'],
            ['x̱, ḵ, g̱', 'série de consoantes feitas mais atrás na garganta (uvulares) que o x, k, g comuns', 'x̱át (eu), ḵáa (homem), g̱ooch (lobo)'],
          ],
        },
        examples: [
          ['Tléixʼ.', 'Um. (o ʼ final marca a consoante ejetiva)'],
          ['Chʼáakʼ.', 'Águia-de-cabeça-branca. (duas consoantes ejetivas na mesma palavra)'],
        ],
      },
    ],
    pitfalls: [
      'Tratar o apóstrofo (ʼ) como pontuação: em lingít ele é parte da própria consoante (ejetiva) — tirá-lo muda o som e pode mudar a palavra.',
      'Ler x̱, ḵ e g̱ como o x, k e g comuns: são consoantes feitas mais atrás na garganta, numa posição chamada uvular, sem equivalente exato em português.',
    ],
    quiz: [
      {
        question: 'Segundo a Wikipédia em inglês, qual é a única consoante ejetiva que falta na série do lingít?',
        options: ['A africada ejetiva [ʃʼ]', 'Nenhuma: a série é totalmente completa', 'A ejetiva [kʼ]'],
        answer: 'A africada ejetiva [ʃʼ]',
        explanation: 'O artigo “Tlingit phonology” descreve a série de ejetivas como “quase completa”, faltando só [ʃʼ].',
      },
      {
        question: 'O que o apóstrofo (ʼ) marca numa palavra como “tléixʼ” ou “chʼáakʼ”?',
        options: ['Uma consoante ejetiva, dita com um golpe de ar da glote', 'Só uma pausa decorativa, como no português', 'O mesmo que uma crase'],
        answer: 'Uma consoante ejetiva, dita com um golpe de ar da glote',
        explanation: 'É uma letra com som próprio, parte do grande inventário consonantal do lingít — não é pontuação.',
      },
    ],
  },
  {
    id: 'tli-g2',
    level: 'A1.1',
    title: 'Tom alto, tom baixo: a melodia que muda a palavra',
    emoji: '🎵',
    summary:
      'O lingít é uma língua de tom: a maioria dos dialetos distingue tom alto e tom baixo (e o dialeto do sul tem um terceiro, o tom descendente) — marcados por acentos diferentes na vogal.',
    sections: [
      {
        text:
          'O artigo “Tlingit phonology” da Wikipédia em inglês explica que os dialetos do norte e os “transicionais” têm um sistema de dois tons (alto e baixo), o dialeto do sul tem três tons (incluindo um tom descendente), e o dialeto tongass, isolado, não tem tom: em vez disso, distingue vogais curtas, longas, com oclusiva glotal e “esvaecidas”. Na ortografia usada para o tlingit do interior, o acento agudo marca uma vogal curta de tom alto, o circunflexo marca uma vogal longa de tom alto, e o acento grave marca uma vogal longa de tom baixo.',
        table: {
          head: ['Marca', 'O que indica', 'Dialeto'],
          rows: [
            ['´ (agudo)', 'vogal curta, tom alto', 'tlingit do interior'],
            ['^ (circunflexo)', 'vogal longa, tom alto', 'tlingit do interior'],
            ['ˋ (grave)', 'vogal longa, tom baixo', 'tlingit do interior'],
            ['sem tom, 4 registros de vogal', 'curta / longa / glotalizada / “esvaecida”', 'dialeto tongass'],
          ],
        },
        examples: [[ 'G̱agaan.', 'Sol. (a marcação exata do tom varia conforme o dialeto e a fonte consultada)']],
      },
    ],
    pitfalls: [
      'Achar que o lingít tem um sistema de tom só, igual em todo lugar: a Wikipédia descreve pelo menos três sistemas diferentes, conforme o dialeto (dois tons, três tons, ou nenhum tom mas quatro registros de vogal).',
      'Ignorar os acentos como “decoração”: eles carregam informação de tom (ou de registro de vogal, no tongass), que pode distinguir palavras diferentes.',
    ],
    quiz: [
      {
        question: 'Quantos tons têm os dialetos do norte e os “transicionais” do lingít, segundo a Wikipédia em inglês?',
        options: ['Dois (alto e baixo)', 'Três', 'Nenhum: não são tonais'],
        answer: 'Dois (alto e baixo)',
        explanation: 'O artigo “Tlingit phonology” classifica os dialetos do norte e transicionais como de “dois tons”, e o do sul como de “três tons”.',
      },
      {
        question: 'O que o dialeto tongass tem, em vez de tom, segundo a mesma fonte?',
        options: ['Um contraste de quatro registros de vogal (curta, longa, glotalizada, “esvaecida”)', 'O mesmo sistema de dois tons dos outros dialetos', 'Nenhuma marca prosódica'],
        answer: 'Um contraste de quatro registros de vogal (curta, longa, glotalizada, “esvaecida”)',
        explanation: 'O tongass é descrito como um dialeto isolado que, em vez de tom, usa esse contraste de quatro registros vocálicos.',
      },
    ],
  },
  {
    id: 'tli-g3',
    level: 'A1.2',
    title: 'Um verbo, uma frase inteira: a polissíntese lingít',
    emoji: '🧩',
    summary:
      'O lingít é, por padrão, uma língua SOV (sujeito-objeto-verbo), mas com ordem flexível; o verbo é polissintético, reunindo numa só palavra prefixos que em português formariam uma frase inteira.',
    sections: [
      {
        text:
          'Segundo o artigo “Tlingit grammar” da Wikipédia em inglês, o lingít é, por padrão, uma língua SOV, embora a ordem das palavras seja bem flexível. O verbo lingít é polissintético: um único verbo pode equivaler a uma frase inteira em português, porque reúne numa mesma palavra prefixos de objeto, aspecto, modo e sujeito, além de um “classificador” (que marca valência e voz) antes da própria raiz verbal. O artigo cita o exemplo “Ash wootʼee” (“ele/ela encontrou ela/ele”), decomposto assim:',
        table: {
          head: ['Pedaço', 'Função', 'Significado'],
          rows: [
            ['ash', '3ª pessoa, objeto saliente', '“ela/ele” (objeto)'],
            ['ø-', '3ª pessoa, sujeito', '“ele/ela” (sujeito)'],
            ['wu-', 'aspecto perfectivo', 'ação concluída'],
            ['i-', 'classificador estativo', '(marca de valência/voz)'],
            ['tʼí', 'raiz verbal', '“encontrar”'],
          ],
        },
        examples: [['Ash wootʼee.', 'Ele/ela encontrou ela/ele. (exemplo citado por linguistas, com a raiz “tʼí”, encontrar)']],
      },
      {
        heading: 'Por que este curso não tem verbos de ação no vocabulário',
        text:
          'Como cada verbo lingít muda de forma conforme o sujeito, o objeto, o aspecto e o classificador — tudo preso à própria raiz —, não existe uma forma simples de “citação” (como o infinitivo em português) para a maioria dos verbos nas fontes abertas consultadas: nem a Wikipédia nem o Wiktionary (cujas 626 palavras lingít não incluem nenhuma categorizada como verbo) trazem essa lista. Por isso este curso prefere não ter verbos de ação, em vez de inventar uma forma de citação que nenhuma fonte confirma — a mesma escolha feita no pacote do navajo (nv), por um motivo parecido.',
      },
    ],
    pitfalls: [
      'Esperar encontrar um “infinitivo” lingít, como em português (falar, comer): o verbo já nasce conjugado, com sujeito, objeto e aspecto presos à raiz.',
      'Tentar montar uma frase lingít nova juntando palavras soltas na ordem do português: com o verbo concentrando tanta informação gramatical, essa tradução palavra por palavra normalmente não funciona.',
    ],
    quiz: [
      {
        question: 'O que significa o verbo lingít “Ash wootʼee”, citado por linguistas?',
        options: ['“Ele/ela encontrou ela/ele”', '“Eu vou encontrar você”', '“Nós nos encontramos ontem”'],
        answer: '“Ele/ela encontrou ela/ele”',
        explanation: 'É o exemplo usado para mostrar como um único verbo lingít, com vários prefixos (objeto, aspecto, classificador) e a raiz “tʼí” (encontrar), equivale a uma frase inteira em português.',
      },
      {
        question: 'Por que este curso de lingít não tem uma categoria de “verbos de ação” no vocabulário?',
        options: ['Porque as fontes abertas consultadas não trazem uma forma de citação simples para a maioria dos verbos', 'Porque o lingít não tem verbos', 'Porque os verbos lingít são idênticos aos do português'],
        answer: 'Porque as fontes abertas consultadas não trazem uma forma de citação simples para a maioria dos verbos',
        explanation: 'O verbo lingít é polissintético e muda de forma conforme sujeito, objeto, aspecto e classificador — por isso este curso prefere não inventar uma forma de citação que nenhuma fonte confirma.',
      },
    ],
  },
  {
    id: 'tli-g4',
    level: 'A1.2',
    title: 'Duas metades, muitos clãs: Raven e Eagle',
    emoji: '🪶',
    summary:
      'A sociedade lingít se organiza em duas metades (Raven e Eagle), cada uma com vários clãs, descendência matrilinear e emblemas próprios — um sistema social que molda até o vocabulário de parentesco.',
    sections: [
      {
        text:
          'Segundo o artigo “Tlingit” da Wikipédia em inglês, a sociedade lingít é dividida em duas metades (“moieties”): Raven (corvo) e Eagle (águia). Cada metade reúne vários clãs e linhagens, e a descendência é matrilinear: a criança pertence ao clã da mãe, não do pai. Os clãs exibem emblemas próprios — como o corvo e a águia, mas também outros animais — em mastros totêmicos, canoas e tecidos, e a cultura lingít valoriza muito a família, o parentesco e uma rica tradição de oratória, segundo a mesma fonte.',
        table: {
          head: ['Metade', 'Animal associado', 'Palavra em lingít'],
          rows: [
            ['Raven', 'corvo', 'yéil'],
            ['Eagle', 'águia-de-cabeça-branca', 'chʼáakʼ'],
          ],
        },
        examples: [['Yéil, chʼáakʼ.', 'Corvo, águia — os emblemas das duas metades do povo lingít.']],
      },
      {
        heading: 'Por que isso importa para o vocabulário',
        text:
          'Entender que “éesh” (pai) e “tláa” (mãe) são substantivos inalienáveis — que exigem um possuidor (“ax̱ éesh”, “ax̱ tláa”) — faz mais sentido ao lembrar que o parentesco lingít é central: é por meio da mãe que uma pessoa pertence a um clã e a uma das duas metades, Raven ou Eagle.',
      },
    ],
    pitfalls: [
      'Achar que “clã” e “metade” são a mesma coisa: cada metade (Raven ou Eagle) reúne vários clãs diferentes, cada um com seus próprios emblemas e histórias.',
      'Supor que a descendência lingít segue o pai, como é mais comum em português: ela é matrilinear, pelo lado da mãe.',
    ],
    quiz: [
      {
        question: 'Quais são as duas metades (moieties) da sociedade lingít, segundo a Wikipédia em inglês?',
        options: ['Raven (corvo) e Eagle (águia)', 'Sol e Lua', 'Norte e Sul'],
        answer: 'Raven (corvo) e Eagle (águia)',
        explanation: 'A Wikipédia descreve a sociedade lingít como dividida nessas duas metades, cada uma com vários clãs.',
      },
      {
        question: 'Como funciona a descendência tradicional lingít?',
        options: ['Matrilinear: a criança pertence ao clã da mãe', 'Patrilinear: a criança pertence ao clã do pai', 'Não há clãs nem descendência marcada'],
        answer: 'Matrilinear: a criança pertence ao clã da mãe',
        explanation: 'A Wikipédia descreve explicitamente a descendência lingít como matrilinear.',
      },
    ],
  },
];
