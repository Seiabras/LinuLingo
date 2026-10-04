import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do sateré-mawé — por enquanto só A1.1 e A1.2 (pacote incompleto). Fonte
 * principal: Raynice Geraldine Pereira da Silva, “Estudo morfossintático da língua Sateré-Mawé”
 * (tese de doutorado, Unicamp, 2010) — quadros 3 (prefixos de pessoa), 6 (pronomes), 7 (posse) e
 * §4.3.2-4.3.3 (número e gênero), §4.2.2.4 e §5.4 (negação). Os exemplos da tese estão em
 * transcrição fonológica; aqui vão na ortografia prática do glossário de Miquiles & Castro (2022) —
 * ver o cabeçalho de vocabulario.ts. As formas de parentesco com “meu/teu/dele” (ui'ywot, e'ywot,
 * i'ywot, uimẽpyt, emẽpyt, imẽpyt, uity, ety, ity) foram conferidas no Novo Testamento em sateré-mawé (ebible.org).
 * Tópico de posse (mav-g3): posse obrigatória do corpo e do parentesco em Silva 2010, §4.3.1
 * (pp. 143-146) e §7.1 (pp. 266-267); “uipo/epo/ipo” (mão) e “uiakag/eakag/iakag” (cabeça) são os
 * paradigmas dos ex. 97 e 98 (o NT escreve “uipo”, “epo”, “ipo” igual, e “ui'akag” com apóstrofo);
 * forma solta × forma com dono (ny → uity, mo → uipo) em Franceschini 1999, §1.2.1 (p. 24) e §1.2.3
 * (p. 29), que também nota que “ywot” e “mempyt” só aparecem com dono. As formas soltas (ywot, ny,
 * mẽpyt, mo, akag) são as do glossário de Miquiles & Castro (2022) — ver POSSE em vocabulario.ts.
 */
export const GRAMMAR_MAV: GrammarTopic[] = [
  {
    id: 'mav-g1',
    level: 'A1.1',
    title: 'Pronomes: dois jeitos de dizer “nós”',
    emoji: '🙌',
    summary: '“Aito” inclui quem ouve, “uruto” não; “mi’i” serve para “ele” e para “ela”.',
    sections: [
      {
        text: 'Como outras línguas do tronco Tupi, o sateré-mawé separa dois “nós”: o inclusivo, “aito” (eu e você, e talvez mais gente), e o exclusivo, “uruto” (eu e outros, mas NÃO você). A 3ª pessoa não marca gênero: “mi’i” é “ele” ou “ela”. O plural “mi’iria” (eles, elas) é o próprio “mi’i” com o sufixo de plural “-ria”. Além dos pronomes livres, o verbo leva um prefixo de pessoa: “a-” para “eu” (uito areket, eu dormi), “wa-” para “nós” inclusivo (aito wahenoi, nós ensinamos), “uru-” para “nós” exclusivo (uruto uruiwuk, nós queimamos).',
        table: {
          head: ['Pessoa', 'Pronome', 'Exemplo'],
          rows: [
            ['eu', 'uito', 'Uito areket. (eu dormi)'],
            ['tu, você', 'en', 'Uweig en? (quem é você?)'],
            ['ele, ela', 'mi’i', 'Mi’i tikyiat wahi. (ele comprou um colar)'],
            ['nós (com você)', 'aito', 'Aito wahenoi. (nós ensinamos)'],
            ['nós (sem você)', 'uruto', 'Uruto uruiwuk aria’yp. (nós queimamos lenha)'],
            ['vocês', 'eipe', 'Eipe ewei’auka miat. (vocês matam caça)'],
            ['eles, elas', 'mi’iria', 'Mi’iria tiwuk aria’yp. (eles queimam lenha)'],
          ],
        },
        examples: [
          ['Uito areket.', 'Eu dormi.'],
          ['Aito wahenoi.', 'Nós (eu e você) ensinamos.'],
          ["Uruto uruiwuk aria'yp.", 'Nós (sem você) queimamos lenha.'],
          ["Mi'iria tiwuk aria'yp.", 'Eles queimam lenha.'],
        ],
      },
    ],
    pitfalls: [
      'Usar “aito” quando quem ouve não faz parte do grupo: aí o certo é “uruto”.',
      'Procurar uma palavra para “ela” diferente de “ele”: “mi’i” serve para os dois.',
    ],
    quiz: [
      { question: 'Você conta a um visitante o que a sua família fez ontem, sem ele. Qual “nós” usar?', options: ['Uruto', 'Aito', "Mi'iria"], answer: 'Uruto', explanation: '“Uruto” é o “nós” exclusivo: inclui quem fala, mas não quem ouve.' },
      { question: 'Como se diz “ela”?', options: ["Mi'i", 'Uito', 'Eipe'], answer: "Mi'i", explanation: '“Mi’i” vale para “ele” e para “ela”; “uito” é “eu” e “eipe” é “vocês”.' },
    ],
  },
  {
    id: 'mav-g2',
    level: 'A1.1',
    title: 'Plural de gente, plural de coisa',
    emoji: '👥',
    summary: 'Pessoas levam “-ria” (ou “’in”); coisas levam a partícula “ko’i”.',
    sections: [
      {
        text: 'O sateré-mawé não usa um “-s” para tudo: o plural depende do que se conta. Para pessoas (e para os clãs e os bichos de casa) usa-se o sufixo “-ria”: “hirokat” (menino) → “hirokaria” (os meninos), “morekuat” (chefe) → “morekuaria” (os chefes), “mi’i” (ele) → “mi’iria” (eles). Para um grupo de pessoas como coletivo há ainda a partícula “in”: “ihainia’in” (homens). Já para coisas e seres não humanos usa-se a partícula “ko’i”, depois do nome: “waikiru ko’i” (estrelas). Muitas vezes o plural nem aparece: o nome sozinho já pode valer por um ou por vários.',
        table: {
          head: ['Singular', 'Plural', 'Marca'],
          rows: [
            ['hirokat (menino)', 'hirokaria (os meninos)', '-ria (pessoas)'],
            ['morekuat (chefe)', 'morekuaria (os chefes)', '-ria (pessoas)'],
            ['ihainia (homem)', 'ihainia’in (homens)', '’in (coletivo de pessoas)'],
            ['waikiru (estrela)', 'waikiru ko’i (estrelas)', 'ko’i (coisas)'],
          ],
        },
        examples: [
          ['Hirokaria.', 'Os meninos.'],
          ["Waikiru ko'i.", 'Estrelas.'],
          ["Ihainia'in.", 'Homens.'],
        ],
      },
    ],
    pitfalls: [
      'Pôr “ko’i” depois de gente: para pessoas o plural é “-ria” ou “’in”.',
      'Repare que o “t” final cai antes de “-ria”: “hirokat” → “hirokaria”, “morekuat” → “morekuaria”.',
    ],
    quiz: [
      { question: 'Como fica “estrelas”?', options: ["Waikiru ko'i", 'Waikiruria', 'Waikirus'], answer: "Waikiru ko'i", explanation: 'Estrela é coisa, não gente: o plural é com a partícula “ko’i”.' },
      { question: 'Como fica “os meninos”?', options: ['Hirokaria', "Hirokat ko'i", 'Hirokats'], answer: 'Hirokaria', explanation: 'Para pessoas usa-se “-ria”, e o “t” final de “hirokat” cai.' },
    ],
  },
  {
    id: 'mav-g3',
    level: 'A1.2',
    title: 'Posse: “meu”, “teu” e “dele” grudados no nome',
    emoji: '👪',
    summary: 'O dono vem como prefixo: u- (meu), e- (teu), i- (dele, dela). Família e corpo pedem dono.',
    sections: [
      {
        text: 'Em vez de uma palavra separada como “meu” ou “teu”, o sateré-mawé põe um prefixo no próprio nome possuído: “u-” para “meu”, “e-” para “teu” e “i-” para “dele, dela”. Entre o prefixo e o nome às vezes aparece um elemento de ligação (“ui-”, “uhe-”): “u-i-mẽpyt” (meu filho), “u-he-kui’a” (minha cuia).',
        examples: [
          ["Ui'ywot.", 'Meu pai.'],
          ["E'ywot.", 'Teu pai.'],
          ['Imẽpyt.', 'O filho dele.'],
        ],
      },
      {
        text: 'Dois grupos de palavras quase sempre vêm com dono: os nomes de família e as partes do corpo. Ninguém tem “uma mão” ou “um pai” no vazio — é sempre a mão de alguém, o pai de alguém. Na lista de palavras elas aparecem soltas, como no glossário do professor sateré-mawé (ywot, pai; ny, mãe; mẽpyt, filho; akag, cabeça), mas na fala elas levam o prefixo. “Ywot” (pai) e “mẽpyt” (filho), aliás, quase nunca aparecem sem dono.',
        table: {
          head: ['Palavra solta', 'meu', 'teu', 'dele, dela'],
          rows: [
            ['ywot (pai)', 'ui’ywot', 'e’ywot', 'i’ywot'],
            ['mẽpyt (filho)', 'uimẽpyt', 'emẽpyt', 'imẽpyt'],
            ['ny (mãe)', 'uity', 'ety', 'ity'],
            ['mo (mão)', 'uipo', 'epo', 'ipo'],
            ['akag (cabeça)', 'uiakag', 'eakag', 'iakag'],
            ['kui’a (cuia)', 'uhekui’a', 'ekui’a', 'hekui’a'],
          ],
        },
        examples: [
          ['Uity.', 'Minha mãe.'],
          ['Ipo.', 'A mão dele.'],
          ['Uiakag.', 'Minha cabeça.'],
        ],
      },
      {
        text: 'Repare em “mãe” e “mão”: a palavra muda quando ganha dono. Solta, “mãe” é “ny”; com dono, vira “-ty”: “uity” (minha mãe), “ety” (tua mãe), “ity” (mãe dela). Do mesmo jeito, “mo” (mão) vira “-po”: “uipo” (minha mão). Por isso você vai ver “ny” na lista de palavras e “uity” nas frases — são a mesma palavra.',
        examples: [
          ['Ny. Uity.', 'Mãe. Minha mãe.'],
          ['Mo. Uipo.', 'Mão. Minha mão.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma palavra solta para “meu”: em sateré-mawé, “meu” é o prefixo “u-” no próprio nome.',
      'Confundir “i-” (dele, dela) com “u-” (meu): “i’ywot” é o pai DELE; o meu é “ui’ywot”.',
      'Dizer “u-ny” para “minha mãe”: com dono, “ny” vira “-ty” — o certo é “uity”.',
    ],
    quiz: [
      { question: 'Como se diz “teu pai”?', options: ["E'ywot", "Ui'ywot", "I'ywot"], answer: "E'ywot", explanation: '“e-” é o prefixo de “teu”; “ui’ywot” é “meu pai” e “i’ywot” é “pai dele”.' },
      { question: 'O que quer dizer “imẽpyt”?', options: ['O filho dele', 'Meu filho', 'Teu filho'], answer: 'O filho dele', explanation: '“i-” marca “dele, dela”; “meu filho” é “uimẽpyt”.' },
      { question: 'Como se diz “minha mãe”?', options: ['Uity', 'Uny', 'Ny'], answer: 'Uity', explanation: '“Ny” é “mãe” solta; com dono, a palavra vira “-ty”: “uity” (minha mãe).' },
    ],
  },
  {
    id: 'mav-g4',
    level: 'A1.2',
    title: 'Negação em duas partes: “yt … -’i”',
    emoji: '🚫',
    summary: 'Para negar, “yt” vem antes e “-’i” fecha a palavra negada.',
    sections: [
      {
        text: 'O sateré-mawé nega com uma marca em duas partes, que “abraça” o verbo ou o nome: “yt” antes e o sufixo “-’i” no fim. Funciona com verbos (“yt ati’auka’i moi”, eu não matei a cobra), com qualidades (“haryporia yt ikahu’i”, a mulher não é bonita) e até com nomes (“yt iasap’i”, ele não tem cabelo — ou seja, é careca). A resposta “de nada” é justamente uma negação: “yt kat hap’i”, algo como “não foi nada”. Existe ainda uma partícula “hin’i”, de contraexpectativa, que não entra neste nível.',
        table: {
          head: ['Afirmativa', 'Negativa'],
          rows: [
            ['netap ikahu (casa bonita)', 'haryporia yt ikahu’i (a mulher não é bonita)'],
            ['moi (cobra)', 'yt ati’auka’i moi (eu não matei a cobra)'],
            ['asap (cabelo)', 'yt iasap’i (ele não tem cabelo, é careca)'],
          ],
        },
        examples: [
          ["Yt ati'auka'i moi.", 'Eu não matei a cobra.'],
          ["Yt atu'u'i aru.", 'Eu não vou comer.'],
          ["Yt iasap'i.", 'Ele é careca (lit. não tem cabelo).'],
          ["Yt kat hap'i.", 'De nada.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer a segunda metade: “yt” sozinho não basta, a palavra negada também termina em “-’i”.',
      'Pôr o “não” só depois do verbo: “yt” vem ANTES, e o “-’i” é que vem depois.',
    ],
    quiz: [
      { question: 'Qual é a forma negativa de “ikahu” (é bonita)?', options: ["Yt ikahu'i", 'Ikahu yt', "Ikahu'i"], answer: "Yt ikahu'i", explanation: 'A negação tem duas partes: “yt” antes e “-’i” no fim.' },
      { question: 'O que quer dizer “yt kat hap’i”?', options: ['De nada', 'Bom dia', 'Muito obrigado'], answer: 'De nada', explanation: 'É a resposta a “waku sese” (obrigado) — e é, ela mesma, uma frase negativa.' },
    ],
  },
];
