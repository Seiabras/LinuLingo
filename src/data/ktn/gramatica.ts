import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do karitiana, do A1.1 ao A2.2. A2: ver o bloco no fim do arquivo. A1: ver o
 * cabeçalho de vocabulario.ts, sobretudo pt.wikipedia.org/wiki/Língua_caritiana (citando Luciana
 * Storto, “Aspects of a Karitiana Grammar”, MIT, 1999, e Caleb Everett, “Patterns in Karitiana:
 * Articulation, Perception, and Grammar”, Rice University, 2007) e en.wikipedia.org/wiki/
 * Karitiana_language.
 */
export const GRAMMAR_KTN: GrammarTopic[] = [
  {
    id: 'ktn-g1',
    level: 'A1.1',
    title: 'Concordância ergativo-absolutiva: um padrão raro',
    emoji: '🔀',
    summary: 'O verbo transitivo concorda com o OBJETO, e o intransitivo com o sujeito — o oposto do português.',
    sections: [
      {
        text: 'O karitiana é classificado como uma língua ergativo-absolutiva (Storto, 1999, pp. 157-159). Isso significa que o sujeito de um verbo intransitivo e o OBJETO de um verbo transitivo recebem o mesmo tipo de marcação no verbo (o “absolutivo”), enquanto o sujeito de um verbo transitivo recebe uma marcação diferente. O português, como a maioria das línguas europeias, é nominativo-acusativo: o verbo sempre concorda com o sujeito, seja ele de um verbo transitivo ou intransitivo. Repare que, nos exemplos abaixo, o prefixo “y-” (1ª pessoa) aparece tanto quando “eu” é o único argumento de um verbo intransitivo (“eu ouvi”) quanto quando “eu” é o OBJETO de um verbo transitivo (“você me machucou”) — nunca quando “eu” é o sujeito de um verbo transitivo.',
        table: {
          head: ['Frase', 'Papel de “eu” (ỹn)', 'Prefixo no verbo'],
          rows: [
            ['Y-ta-opiso-t ỹn. (eu ouvi)', 'sujeito de verbo intransitivo', 'y- (absolutivo)'],
            ['An y-ta-oky-t ỹn. (você me machucou)', 'objeto de verbo transitivo', 'y- (absolutivo)'],
            ['Ỹn a-taka-oky-j an. (eu vou machucar você)', 'sujeito de verbo transitivo', '(não aparece no verbo)'],
          ],
        },
        examples: [
          ['Y-ta-opiso-t ỹn.', 'Eu ouvi.'],
          ['A-ta-opiso-t an.', 'Você ouviu.'],
          ['An y-ta-oky-t ỹn.', 'Você me machucou.'],
          ['Ỹn a-taka-oky-j an.', 'Eu vou machucar você.'],
        ],
      },
    ],
    pitfalls: [
      'Esperar que o verbo sempre concorde com quem pratica a ação, como em português: no karitiana, o verbo transitivo concorda com quem RECEBE a ação (o objeto).',
      'Achar que “y-” sempre quer dizer “eu sou o sujeito”: esse prefixo marca o argumento absolutivo — que pode ser o sujeito (verbo intransitivo) OU o objeto (verbo transitivo).',
    ],
    quiz: [
      { question: 'Em “An y-ta-oky-t ỹn.” (você me machucou), o que o prefixo “y-” marca?', options: ['O objeto (“ỹn”, eu)', 'O sujeito (“an”, você)', 'O tempo verbal'], answer: 'O objeto (“ỹn”, eu)', explanation: 'O karitiana é ergativo-absolutivo: o verbo transitivo concorda com o objeto, não com o sujeito.' },
      { question: 'Em qual tipo de língua o verbo SEMPRE concorda com o sujeito, transitivo ou intransitivo?', options: ['Nominativo-acusativa (como o português)', 'Ergativo-absolutiva (como o karitiana)', 'Nenhuma das duas'], answer: 'Nominativo-acusativa (como o português)', explanation: 'Línguas ergativo-absolutivas, como o karitiana, tratam o objeto transitivo como o sujeito intransitivo para fins de concordância.' },
    ],
  },
  {
    id: 'ktn-g2',
    level: 'A1.1',
    title: 'Perguntas e demonstrativos: “mõrãmõn” e a partícula “hỹ”',
    emoji: '❓',
    summary: 'As perguntas levam a partícula final “hỹ”; “mõrãmõn” (o quê/quem) combina com seis demonstrativos diferentes.',
    sections: [
      {
        text: 'As frases interrogativas do karitiana costumam terminar com a partícula “hỹ”, que pode ser omitida quando o verbo já deixa claro, pela sua forma, que é uma pergunta (Everett, 2007, pp. 322-323). Já as perguntas de conteúdo (o quê, quem, quando, onde, por quê) começam com um pronome interrogativo em posição de foco, como “mõrãmõn” (o quê?, quem?). A língua tem pelo menos seis pronomes demonstrativos, que marcam a distância e a visibilidade da coisa apontada: “ka” (na mão de quem fala), “ho” (perto), “onỹ” (mais longe), “nhã” (perto e sentado), “hyp” (perto e parado) e “hori” (fora de vista).',
        table: {
          head: ['Demonstrativo', 'Sentido'],
          rows: [
            ['ka', 'isto, na mão de quem fala'],
            ['ho', 'isso, perto'],
            ['onỹ', 'aquilo, mais longe'],
            ['hori', 'aquilo, fora de vista'],
          ],
        },
        examples: [
          ['Mõrãmõn ka?', 'O que é isso?'],
          ['Mõrãmõn ho?', 'O que é aquilo?'],
          ['Mõrãmõn onỹ?', 'O que é aquilo ali?'],
          ['Ãn i-y gok-o hỹ?', 'Você comeu a mandioca?'],
        ],
      },
    ],
    pitfalls: [
      'Usar só a entoação para perguntar, como em português: o karitiana marca a pergunta com a partícula “hỹ” no fim da frase (quando ela aparece) ou pela própria forma do verbo.',
      'Tratar os demonstrativos como um só “isso”/“aquilo”: cada um marca uma distância e visibilidade diferentes — “ka” não serve para algo fora de vista (“hori”).',
    ],
    quiz: [
      { question: 'Qual demonstrativo aponta para algo na mão de quem fala?', options: ['Ka', 'Onỹ', 'Hori'], answer: 'Ka', explanation: '“Onỹ” aponta para algo mais longe, e “hori” para algo fora de vista.' },
      { question: 'O que a partícula “hỹ” marca no fim de uma frase?', options: ['Uma pergunta', 'Uma negação', 'O tempo futuro'], answer: 'Uma pergunta', explanation: 'A negação usa outros recursos (sufixos, prefixo “ry-” ou a partícula “padni”), vistos em outro tópico.' },
    ],
  },
  {
    id: 'ktn-g3',
    level: 'A1.2',
    title: 'Numerais de base 5 e substantivos sem artigo',
    emoji: '🖐️',
    summary: 'O karitiana conta pelas mãos a partir de cinco; substantivos aparecem “nus”, sem artigo nem plural.',
    sections: [
      {
        text: 'Os numerais de um a quatro têm raízes próprias (mỹhĩn, sypõm, mỹnhỹm, otannỹmỹn); a partir de cinco, a contagem usa a mão como base: “yj pyt” (cinco) é literalmente “uma mão”, e “dez” é “duas mãos”. O sistema consegue, em tese, nomear números até pelo menos 100 — mas é uma área da língua em erosão, porque o português é a língua usada para negociar preços na venda de artesanato (Everett, 2007, p. 317). Além disso, as frases nominais do karitiana aparecem como substantivos “nus”: sem artigo (“o/a”) e sem nenhuma marca de plural — “gok” serve tanto para “a mandioca” quanto para “as mandiocas”.',
        table: {
          head: ['Número', 'Karitiana'],
          rows: [
            ['1', 'mỹhĩn'],
            ['2', 'sypõm'],
            ['3', 'mỹnhỹm'],
            ['4', 'otannỹmỹn'],
            ['5 (lit. “uma mão”)', 'yj pyt'],
          ],
        },
        examples: [
          ['Mỹhĩn, sypõm, mỹnhỹm, otannỹmỹn, yj pyt.', 'Um, dois, três, quatro, cinco.'],
          ['Ỹn naka-y-t gok.', 'Eu comi a mandioca (ou: as mandiocas).'],
        ],
      },
    ],
    pitfalls: [
      'Esperar uma palavra nova para cada número acima de quatro: a partir de cinco, o karitiana usa múltiplos da mão, não raízes numéricas novas.',
      'Procurar um artigo (“o”, “a”) ou um sufixo de plural (“-s”) antes ou depois do substantivo: frases nominais em karitiana não levam nenhum dos dois.',
    ],
    quiz: [
      { question: 'Como se diz “cinco” em karitiana, e o que isso significa literalmente?', options: ['Yj pyt, “uma mão”', 'Otannỹmỹn, “quatro mãos”', 'Mỹnhỹm, “três dedos”'], answer: 'Yj pyt, “uma mão”', explanation: 'A contagem karitiana passa a usar a mão como base a partir do número cinco.' },
      { question: 'Como “gok” (mandioca) marca o plural?', options: ['Não marca: “gok” serve para uma ou várias mandiocas', 'Com o sufixo “-s”', 'Repetindo a palavra duas vezes'], answer: 'Não marca: “gok” serve para uma ou várias mandiocas', explanation: 'Substantivos no karitiana não variam em número — não há plural morfológico.' },
    ],
  },
  {
    id: 'ktn-g4',
    level: 'A1.2',
    title: 'Negação: três estratégias diferentes',
    emoji: '🚫',
    summary: 'O karitiana nega de jeitos diferentes conforme o verbo: sufixo, prefixo “ry-” ou a partícula “padni”.',
    sections: [
      {
        text: 'A negação no karitiana muda conforme o tipo de verbo (Everett, 2007, pp. 328-332). Em verbos intransitivos terminados em consoante, usa-se o sufixo “-y” (consoante não nasal) ou “-ĩ” (consoante nasal); quando a primeira sílaba é a tônica, o verbo pode levar o prefixo “ry-” em vez do sufixo. Em verbos transitivos, usa-se o prefixo “i-” (o mesmo das perguntas e dos imperativos transitivos). Por fim, qualquer verbo pode ser negado de forma mais analítica com a partícula “padni” depois dele — a estratégia usada na palavra do vocabulário “Padni”.',
        table: {
          head: ['Estratégia', 'Quando se usa', 'Exemplo'],
          rows: [
            ['Sufixo -y / -ĩ', 'verbo intransitivo terminado em consoante', 'y-terektereg-ĩ (eu não dancei)'],
            ['Prefixo ry-', 'verbo intransitivo com a 1ª sílaba tônica', 'y-ry-mbki-y ỹn (eu não sentei)'],
            ['Prefixo i-', 'verbo transitivo', 'i-ator-i ỹn bỹpãn (eu não vou pegar o arco)'],
            ['Partícula padni', 'depois do verbo, em geral', 'ỹn i-soky padni eppa (eu não quebrei a espátula)'],
          ],
        },
        examples: [
          ['Ỹn i-soky padni eppa.', 'Eu não quebrei a espátula.'],
          ['I-ator-i ỹn bỹpãn.', 'Eu não vou pegar o arco.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma palavra única de negação, como o “não” do português antes do verbo: o karitiana muda a estratégia (sufixo, prefixo ou partícula) conforme o verbo.',
      'Confundir o prefixo “i-” da negação transitiva com o “i-” usado também em perguntas e imperativos: é a mesma forma fazendo trabalhos diferentes conforme a construção.',
    ],
    quiz: [
      { question: 'Qual partícula pode negar qualquer verbo, vindo depois dele?', options: ['Padni', "O'ĩ", 'Hỹ'], answer: 'Padni', explanation: "“O'ĩ” é a forma isolada de “não” da Lista de Swadesh; “hỹ” marca pergunta, não negação." },
      { question: 'O que muda a estratégia de negação de um verbo no karitiana?', options: ['Se o verbo é transitivo ou intransitivo (e, nesse caso, a sílaba tônica)', 'O gênero do falante', 'A hora do dia'], answer: 'Se o verbo é transitivo ou intransitivo (e, nesse caso, a sílaba tônica)', explanation: 'Verbos intransitivos usam sufixo ou o prefixo “ry-”; verbos transitivos usam o prefixo “i-”.' },
    ],
  },
  // ══ A2.1 e A2.2 (17/10/2026) ══
  // Siglas das fontes como em vocabulario.ts: ST99 (Storto 1999, página impressa), SR (Storto e Rocha,
  // página do PDF e exemplo), SUB (Storto 2012, “Subordination in Karitiana”, página do PDF e
  // exemplo), MC10 (Marques de Carvalho 2010, página impressa e exemplo), GOPI (Ciola 2020). Nenhuma
  // frase foi montada; os paradigmas são os das fontes.
  {
    id: 'ktn-g5',
    level: 'A2.1',
    title: 'Pessoa, modo e tempo no verbo: naka-\'y-t × naka-\'y-j',
    emoji: '🕰️',
    summary: 'O verbo da frase principal leva pessoa, modo e tempo. Só há dois tempos: não futuro e futuro.',
    sections: [
      {
        // MC10 p. 36–37 (resumo de Storto 2002): prefixos de pessoa nas declarativas.
        text: 'Numa frase principal, o verbo sempre leva um prefixo de pessoa. Esse prefixo concorda com o sujeito do verbo intransitivo ou com o objeto do verbo transitivo, como você viu no A1.1. Nas frases declarativas, a 3ª pessoa não tem prefixo nenhum (Ø), e serve tanto para “ele” quanto para “eles”. Nas outras construções (perguntas, orações relativas), a 3ª pessoa vira “i-”.',
        table: {
          head: ['Pessoa', 'Prefixo (declarativa)'],
          rows: [
            ['eu', 'y-'],
            ['você', 'a-'],
            ['nós (com você)', 'yj-'],
            ['nós (sem você)', 'yta-'],
            ['vocês', 'aj-'],
            ['ele, ela, eles, elas', 'Ø (nada)'],
          ],
        },
      },
      {
        // MC10 p. 37–39: na(ka)- com a 3ª pessoa, ta(ka)- nos outros casos; futuro -i/-j; não futuro -Ø/-t.
        text: 'Depois da pessoa vem o modo. O declarativo, o modo de contar as coisas, é “na-” ou “naka-” com a 3ª pessoa, e “ta-” ou “taka-” com as outras. Por último vem o tempo, no fim do verbo. O karitiana só separa o futuro de todo o resto: o não futuro cobre o presente e o passado. Cada tempo muda de forma conforme o verbo termina em vogal ou em consoante.',
        table: {
          head: ['Tempo', 'Depois de vogal', 'Depois de consoante'],
          rows: [
            ['não futuro (presente e passado)', '-t: na-oky-t (matou)', '-Ø: na-amang (plantou)'],
            ['futuro', "-j: naka-m-'a-j (vai fazer)", '-i: y-taka-hor-i (vamos sair)'],
          ],
        },
        examples: [
          ['Taso na-oky-t boroja.', 'O homem matou a cobra. (MC10 p. 39)'],
          ['Maria na-amang gok koot.', 'Ontem a Maria plantou mandioca. (MC10 p. 38)'],
          ['Y-taka-hor-i yta.', 'Nós (sem você) vamos sair. (MC10 p. 37)'],
          ["2020 pip yn naka-m-'a-j ambi.", 'Em 2020 eu vou construir uma casa. (MC10 p. 38)'],
        ],
      },
      {
        // ST99 p. 134–135, ex. 52b e 53c: o mesmo verbo nos dois tempos. (Storto marca a 53c com “?”
        // só como resposta a “o que o homem comeu?”, em que prefere o objeto na frente; a frase em si
        // é a declarativa comum, SVO.)
        text: 'Compare o mesmo verbo, “\'y” (comer), nos dois tempos, em frases de Storto (1999). Repare também em “2020 pip yn naka-m-\'a-j ambi”: quem constrói é “eu”, mas o verbo leva “naka-”, de 3ª pessoa, porque concorda com o objeto, “ambi” (casa).',
        examples: [
          ["Taso naka-'y-t ohy.", 'O homem comeu batata-doce. (ST99 p. 135)'],
          ["Taso naka-'y-j ohy.", 'O homem vai comer batata-doce. (ST99 p. 134)'],
        ],
      },
    ],
    pitfalls: [
      'Procurar um passado separado do presente: “naka-\'y-t” serve para “come” e para “comeu”. O que muda é só o futuro, com “-j” ou “-i”.',
      'Pôr “naka-” só quando o sujeito é “ele”: no verbo transitivo, o prefixo segue o objeto. “Yn naka-m-\'a-j ambi” (eu vou construir uma casa) leva “naka-” por causa da casa.',
    ],
    quiz: [
      { question: 'Como fica “vai comer” em “Taso naka-\'y-? ohy”?', options: ['naka-\'y-j', 'naka-\'y-t', 'naka-\'y-i'], answer: 'naka-\'y-j', explanation: '“\'y” termina em vogal, então o futuro é “-j”; “-t” é o não futuro.' },
      { question: 'Qual prefixo de pessoa marca “nós, sem você”?', options: ['yta-', 'yj-', 'aj-'], answer: 'yta-', explanation: '“yj-” é “nós, com você”, e “aj-” é “vocês”.' },
      { question: 'Por que “na-amang” (plantou) não tem “-t” no fim?', options: ['Porque “amang” termina em consoante', 'Porque está no futuro', 'Porque o sujeito é “eu”'], answer: 'Porque “amang” termina em consoante', explanation: 'O não futuro é “-t” depois de vogal e nada depois de consoante.' },
    ],
  },
  {
    id: 'ktn-g6',
    level: 'A2.1',
    title: 'O modo assertivo: py-, pyr-, pyry- e o “sim”',
    emoji: '✅',
    summary: 'Para responder “sim” a uma pergunta, o karitiana usa um modo próprio do verbo, com o verbo no começo.',
    sections: [
      {
        // SR p. 2–3 (texto: assertivas como respostas a perguntas sim-não, Landin 1984; fronteiras de
        // narrativa; opiniões enfáticas) e p. 5, nota 7 (alomorfes py-, pyr-, pyry-).
        text: 'Além do declarativo, o karitiana tem o modo assertivo. Ele é usado de forma obrigatória para responder “sim” a uma pergunta de sim ou não, e também para abrir ou fechar uma narrativa e para dar uma opinião com ênfase (Storto e Rocha, citando Landin 1984 e Storto 2002). No assertivo, o verbo vem em primeiro lugar na frase. O prefixo tem três formas, conforme o começo do verbo.',
        table: {
          head: ['Prefixo', 'Quando se usa', 'Exemplo'],
          rows: [
            ['py-', 'verbo que começa por consoante, em sílaba átona', 'py-terekterek-na-n (dançou)'],
            ['pyr-', 'verbo que começa por vogal', 'pyr-oky-dn (matou)'],
            ['pyry-', 'verbo que começa por consoante, em sílaba tônica', 'pyry-hit-yn (deu)'],
          ],
        },
      },
      {
        // SR p. 5–6, ex. 12 e 18; p. 12, ex. 35 e 39; p. 14, ex. 45 e 49.
        text: 'Compare o declarativo e o assertivo do mesmo verbo. No declarativo intransitivo a ordem normal é verbo e depois sujeito; no transitivo, sujeito, verbo e objeto. No assertivo, o verbo sempre abre a frase, e o não futuro vira “-n” (ou “-dn”, “-yn”).',
        table: {
          head: ['Declarativo', 'Assertivo', 'Sentido'],
          rows: [
            ['Naterekteregngãt taso.', 'Pyterekteregngan taso.', 'O homem dançou.'],
            ['Taso naokyt boroja.', 'Pyrokydn taso pat.', 'O homem matou a cobra. / O homem matou a arara.'],
            ['Taso nakahit õwã boetety.', 'Ypyryhityn boetety taso.', 'O homem deu colar para a criança. / O homem me deu o colar.'],
          ],
        },
        examples: [
          ['Pyterekteregngan taso.', 'O homem dançou. (SR p. 5)'],
          ['Pyrokydn taso pat.', 'O homem matou a arara. (SR p. 12)'],
          ['Ypyryhityn boetety taso.', 'O homem me deu o colar. (SR p. 14)'],
        ],
      },
    ],
    pitfalls: [
      'Responder “sim” só com a entoação: a resposta afirmativa a uma pergunta de sim ou não pede o verbo no modo assertivo.',
      'Pôr o sujeito antes do verbo no assertivo: nesse modo, nada vem antes do verbo (Storto e Rocha, p. 16).',
    ],
    quiz: [
      { question: 'Para que serve, entre outras coisas, o modo assertivo?', options: ['Responder “sim” a uma pergunta de sim ou não', 'Fazer perguntas de conteúdo', 'Falar do futuro'], answer: 'Responder “sim” a uma pergunta de sim ou não', explanation: 'Storto e Rocha dizem que o assertivo é usado obrigatoriamente nas respostas a perguntas de sim ou não.' },
      { question: 'Qual forma do assertivo vai com um verbo que começa por vogal, como “oky” (matar)?', options: ['pyr-', 'py-', 'pyry-'], answer: 'pyr-', explanation: 'Por isso “o homem matou a arara” é “Pyrokydn taso pat”.' },
    ],
  },
  {
    id: 'ktn-g7',
    level: 'A2.2',
    title: 'Sentado, em pé, deitado: os auxiliares de postura',
    emoji: '🧍',
    summary: 'O “estar fazendo” leva um auxiliar que diz também a posição do corpo: tyka, tyja, tyso, tysyp.',
    sections: [
      {
        // MC10 p. 44–46 (ty + dêitico; ex. 40a–d com “kinda’o”); SUB p. 10, ex. 27.
        text: 'Para falar de uma ação em andamento, o karitiana põe depois do verbo um auxiliar formado por “ty-” e uma raiz que indica a posição do corpo de quem faz a ação (Storto 2002, resumida por Marques de Carvalho 2010). O tempo vai no auxiliar, não no verbo: “naka-\'y ty-ja-t”.',
        table: {
          head: ['Auxiliar', 'Posição', 'Exemplo (MC10, ex. 40)'],
          rows: [
            ['tyka', 'em movimento', "Maria naka'y tykat kinda'o."],
            ['tyja', 'sentado', "Maria naka'y tyjat kinda'o."],
            ['tyso', 'em pé', "Maria naka'y tysot kinda'o."],
            ['tysyp', 'deitado (também para o plural)', "Maria naka'y tysyp kinda'o."],
          ],
        },
        examples: [
          ["Maria naka'y tykat kinda'o.", 'Maria está comendo fruta, em movimento. (MC10 p. 45)'],
          ["Maria naka'y tyjat kinda'o.", 'Maria está sentada comendo fruta. (MC10 p. 46)'],
          ["Maria naka'y tysot kinda'o.", 'Maria está em pé comendo fruta. (MC10 p. 46)'],
          ["Maria naka'y tysyp kinda'o.", 'Maria está deitada comendo fruta. (MC10 p. 46)'],
        ],
      },
      {
        // SUB p. 6, ex. 14–15; p. 8, ex. 16 e 19; p. 10, ex. 28; MC10 p. 15, ex. 2.
        text: 'O auxiliar serve com qualquer verbo de ação. Quando a ação acontece mais de uma vez, entra “agi” no lugar de “tyka”: “Py-mangat tyka-dn taso Luciana” é “a Luciana está levantando o homem”, e com “agi-dn” ela levanta mais de uma vez (Storto 2012).',
        examples: [
          ['Na-ohit tyka-t õwã.', 'A criança está pescando. (MC10 p. 15)'],
          ['I na-oky tysyp saara.', 'Ele está matando o jacaré. (SUB p. 8)'],
          ["João naka-m-'a tyka-t ambi.", 'O João está fazendo uma casa. (SUB p. 10)'],
          ['I na-aka-t i-pon tyka-t.', 'Ele está caçando. (SUB p. 8)'],
        ],
      },
    ],
    pitfalls: [
      'Usar sempre o mesmo “estar” para tudo: o auxiliar muda com a posição do corpo; “tyja” não serve para quem come andando (“tyka”).',
      'Pôr o “-t” do tempo no verbo principal: com o auxiliar, o tempo vai nele (“naka\'y tyja-t”), não no verbo.',
    ],
    quiz: [
      { question: 'Qual auxiliar diz que a pessoa está sentada?', options: ['tyja', 'tyso', 'tysyp'], answer: 'tyja', explanation: '“tyso” é em pé, e “tysyp” é deitado (ou plural).' },
      { question: 'O que muda de “Maria naka\'y tykat kinda\'o” para “Maria naka\'y tysot kinda\'o”?', options: ['Maria passa a comer em pé', 'Maria passa a comer no futuro', 'A fruta vira várias frutas'], answer: 'Maria passa a comer em pé', explanation: '“tyka” é em movimento; “tyso”, em pé.' },
    ],
  },
  {
    id: 'ktn-g8',
    level: 'A2.2',
    title: 'Quando, antes, depois: tykiri, kit, byyk (e as posposições pip e -ty)',
    emoji: '🔗',
    summary: 'As orações de “quando”, “antes” e “depois” terminam no verbo, sem tempo nem pessoa; “pip” e “-ty” vêm depois do nome.',
    sections: [
      {
        // SUB p. 1–3 (resumo e ex. 1–3); p. 11, ex. 33–34; p. 12, ex. 35.
        text: 'A oração que diz “quando”, “antes” ou “depois” vem com o verbo no fim, sem modo, sem tempo e sem prefixo de pessoa, e termina com a palavra de ligação: “tykiri” (quando, ação já feita), “kit” (antes) e “byyk” (depois). Na fala do dia a dia, a ordem dentro dela é objeto, sujeito e verbo; sujeito, objeto e verbo é o jeito dos mitos e das narrativas tradicionais (Storto 2012).',
        table: {
          head: ['Palavra', 'Sentido', 'Exemplo (SUB, ex. 1–3)'],
          rows: [
            ['tykiri', 'quando (ação já feita)', 'São Paulo pip y-otam tykiri …'],
            ['kit', 'antes de', 'São Paulo pip y-otam kit …'],
            ['byyk', 'depois de', 'São Paulo pip y-otam byyk …'],
            ["tyki'oot", 'enquanto (ação em andamento)', "Gok Maria amang tyki'oot …"],
          ],
        },
        examples: [
          ['São Paulo pip y-otam tykiri naka-pop Maria.', 'Quando eu cheguei em São Paulo, Maria morreu. (SUB p. 3)'],
          ['Boroja taso oky tykiri naka-hyryp õwã.', 'Quando o homem matou a cobra, a criança chorou. (SUB p. 11)'],
          ["Y-ta-ahy-t yn y-pyt'y tykiri.", 'Quando eu como, eu bebo. (SUB p. 12)'],
          ["Gok Maria amang tyki'oot na-oky-t him taso.", 'Enquanto Maria plantava mandioca, o homem matou a caça. (SUB p. 5)'],
        ],
      },
      {
        // SR p. 2, ex. 1; p. 10–11 (-ty com os verbos de sentimento); p. 14, ex. 49; GOPI p. 30 e p. 32.
        text: 'O karitiana não tem preposições: as palavras de lugar vêm depois do nome. “Pip” é “em” ou “para”: “Belém pip” é “para Belém”, e “Ese pip”, “na água”. “-ty” marca o objeto dos verbos de sentimento e de percepção (amar, ver, querer, saber), que para a gramática karitiana são intransitivos, e também a coisa dada com “hit” (dar).',
        examples: [
          ['Belém pip.', 'Para Belém. (SR p. 2)'],
          ['Napasadnat taso tasoojoty.', 'O homem ama a esposa dele. (SR p. 11)'],
          ['Taso nakahit õwã boetety.', 'O homem deu colar para a criança. (SR p. 14)'],
          ['Syhej, mydo, sojxa tym na akat ipasadnat kojpáty gap tym nakahot ikyn.', 'Capivara, cotia, queixada e cateto também gostam de abacaxi e atacam na roça. (GOPI p. 30; tradução do livro, p. 93)'],
        ],
      },
    ],
    pitfalls: [
      'Começar a oração de “quando” pela palavra de ligação, como em português: “tykiri”, “kit” e “byyk” vêm no FIM da oração.',
      'Pôr “-ty” no objeto de “matar” ou “comer”: “-ty” é para os verbos de sentimento e percepção e para a coisa dada; “taso naokyt boroja” (o homem matou a cobra) não leva “-ty”.',
    ],
    quiz: [
      { question: 'Onde fica “tykiri” na oração de “quando”?', options: ['No fim, depois do verbo', 'No começo', 'Antes do sujeito'], answer: 'No fim, depois do verbo', explanation: 'As palavras de ligação do karitiana fecham a oração subordinada.' },
      { question: 'Qual palavra quer dizer “antes de”?', options: ['kit', 'byyk', 'tykiri'], answer: 'kit', explanation: '“byyk” é “depois de”, e “tykiri” é “quando”.' },
      { question: 'Em “Napasadnat taso tasoojoty”, o que marca “-ty”?', options: ['Quem é amado (a esposa)', 'Quem ama (o homem)', 'O tempo passado'], answer: 'Quem é amado (a esposa)', explanation: '“Amar” é intransitivo em karitiana; quem é amado vem com “-ty”.' },
    ],
  },
];
