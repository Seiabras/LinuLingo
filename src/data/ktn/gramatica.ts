import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do karitiana — por enquanto só A1.1 e A1.2 (pacote incompleto). Fontes: ver o
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
];
