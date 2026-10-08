import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do esperanto — por enquanto só A1.1 e A1.2 (pacote incompleto, ver
 * `incomplete` em index.ts). O esperanto foi desenhado de propósito pra ter o mínimo de exceções:
 * cada terminação (-o, -a, -as, -n...) faz sempre a mesma coisa, em toda palavra. Fontes: L. L.
 * Zamenhof, "Fundamento de Esperanto" (1887, as 16 regras originais da gramática); Bertilo
 * Wennergren, PMEG — "Plena Manlibro de Esperanta Gramatiko" (lernu.net/pmeg); Wikipedia,
 * "Esperanto grammar" e "Esperanto orthography".
 */
export const GRAMMAR_EO: GrammarTopic[] = [
  {
    id: 'eo-g1',
    level: 'A1.1',
    title: 'Uma letra, um som só — e o acento sempre na penúltima',
    emoji: '🔤',
    summary: 'No esperanto, cada letra tem exatamente UM som, sempre — regra 1 do Fundamento de Zamenhof. E o acento tônico é sempre na penúltima sílaba, sem nenhuma exceção.',
    sections: [
      {
        text: 'Zamenhof desenhou o esperanto para não ter as irregularidades de pronúncia que o português, o inglês ou o francês têm: nenhuma letra muda de som dependendo da palavra, e nenhum som tem mais de uma letra para escrevê-lo. "C" é sempre "ts"; "g" é sempre "g" duro, mesmo antes de "e"/"i" (diferente do português, em que "gelo" tem o "g" como "j"). Veja o alfabeto completo na aba Alfabeto.',
        examples: [
          ['Granda. Giganta.', '"g" sempre duro, mesmo antes de "i" — diferente de "gigante" em português.'],
          ['Centro.', '"c" sempre "ts": "TSEN-tro".'],
        ],
      },
      {
        heading: 'O acento tônico: sempre na penúltima sílaba',
        text: 'Essa é outra regra sem exceção nenhuma: a sílaba tônica de QUALQUER palavra do esperanto, de qualquer tamanho, é sempre a penúltima. "Esperanto" se divide es-pe-RAN-to (acento no "ran"); "amiko" é a-MI-ko; "universitato" é u-ni-ver-si-TA-to.',
        examples: [
          ['Esperanto', 'es-pe-RAN-to'],
          ['amiko', 'a-MI-ko (amigo)'],
        ],
      },
    ],
    pitfalls: [
      'Ler "g" como "j" antes de "e"/"i", pelo hábito do português ("gelo", "giro"): no esperanto "g" é SEMPRE duro, como em "gato".',
      'Procurar uma exceção à regra do acento: não existe nenhuma palavra do esperanto com acento fora da penúltima sílaba.',
    ],
    quiz: [
      {
        question: 'Onde fica o acento tônico de "amiko" (amigo)?',
        options: ['Na penúltima sílaba: a-MI-ko', 'Na última sílaba: a-mi-KO', 'Na primeira sílaba: A-mi-ko'],
        answer: 'Na penúltima sílaba: a-MI-ko',
        explanation: 'No esperanto, o acento tônico é SEMPRE na penúltima sílaba, sem exceção — diferente do português, que varia de palavra para palavra.',
      },
    ],
  },
  {
    id: 'eo-g2',
    level: 'A1.1',
    title: 'Substantivos em -o, plural -oj; adjetivos em -a',
    emoji: '📘',
    summary: 'Todo substantivo termina em -o (plural: -oj). Todo adjetivo termina em -a, e concorda em número com o substantivo que acompanha — mas sem gênero, porque o esperanto não tem gênero gramatical.',
    sections: [
      {
        text: 'A terminação -o marca substantivo, sempre: "domo" (casa), "hundo" (cachorro), "amiko" (amigo). Para o plural, basta acrescentar -j: "domoj" (casas), "hundoj" (cachorros). Não existe artigo indefinido ("um", "uma") no esperanto — só o definido "la" ("o"/"a"/"os"/"as"), que nem varia por gênero ou número.',
        table: {
          head: ['Esperanto', 'Tradução'],
          rows: [
            ['domo', 'casa (uma casa)'],
            ['la domo', 'a casa'],
            ['domoj', 'casas'],
            ['la domoj', 'as casas'],
          ],
        },
        examples: [
          ['Mi havas du hundojn.', 'Eu tenho dois cachorros. (vai ter o -n do acusativo — outro tópico)'],
          ['La amikoj estas bonaj.', 'Os amigos são bons.'],
        ],
      },
      {
        heading: 'O adjetivo em -a concorda em número (nunca em gênero)',
        text: 'O adjetivo sempre termina em -a: "granda" (grande), "bona" (bom/boa — a MESMA palavra serve pros dois, porque não há gênero gramatical). Quando o substantivo vai pro plural, o adjetivo acompanha com -aj.',
        examples: [
          ['La domo estas granda.', 'A casa é grande.'],
          ['La domoj estas grandaj.', 'As casas são grandes.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar um artigo indefinido ("um"/"uma"): não existe — "domo" sozinha já pode ser "casa" ou "uma casa".',
      'Tentar flexionar o adjetivo por gênero (como "bom"/"boa" em português): no esperanto é sempre "bona" para os dois — só o número muda, com -j.',
    ],
    quiz: [
      {
        question: 'Como fica "os cachorros grandes" em esperanto?',
        options: ['la grandaj hundoj', 'la granda hundo', 'la grandoj hundaj'],
        answer: 'la grandaj hundoj',
        explanation: '"hundo" (cachorro) vai pro plural com -oj; o adjetivo "granda" concorda em número com -aj. A ordem adjetivo-substantivo é livre, mas a concordância em -j é obrigatória nos dois.',
      },
    ],
  },
  {
    id: 'eo-g3',
    level: 'A1.2',
    title: 'O caso acusativo: -n no objeto direto',
    emoji: '🎯',
    summary: 'Quem RECEBE a ação (o objeto direto) ganha -n no final — tanto o substantivo quanto o adjetivo que o acompanha. O sujeito da frase NUNCA leva -n.',
    sections: [
      {
        text: 'O esperanto marca o objeto direto com a terminação -n, chamada caso acusativo. Compare: em "Hundo kuras" (o cachorro corre), "hundo" é sujeito, sem -n. Em "Mi vidas hundon" (eu vejo um cachorro), "hundon" é objeto direto, com -n. No plural, o -n vem depois do -j: "Mi vidas hundojn" (eu vejo cachorros).',
        table: {
          head: ['Função', 'Esperanto', 'Tradução'],
          rows: [
            ['Sujeito (sem -n)', 'La hundo manĝas.', 'O cachorro come.'],
            ['Objeto direto (com -n)', 'Mi havas hundon.', 'Eu tenho um cachorro.'],
            ['Objeto direto no plural (-ojn)', 'Mi havas du hundojn.', 'Eu tenho dois cachorros.'],
          ],
        },
        examples: [
          ['Mi amas mian familion.', 'Eu amo a minha família.'],
          ['Ŝi trinkas akvon.', 'Ela bebe água.'],
        ],
      },
      {
        heading: 'O adjetivo que descreve o objeto direto também leva -n',
        text: 'Se um adjetivo acompanha o objeto direto, ele também recebe -n, pra concordar: "Mi havas grandan hundon" (eu tenho um cachorro grande) — "grandan", não "granda".',
        examples: [['Mi vidas malgrandan katon.', 'Eu vejo um gato pequeno.']],
      },
    ],
    pitfalls: [
      'Esquecer o -n no objeto direto: "Mi havas hundo" está errado — precisa ser "Mi havas hundon".',
      'Pôr -n no sujeito da frase: o sujeito NUNCA leva -n, só quem recebe a ação.',
      'Esquecer o -n no adjetivo que descreve o objeto direto: "grandan hundon", não "granda hundon".',
    ],
    quiz: [
      {
        question: 'Qual frase está certa para "eu vejo um cachorro grande"?',
        options: ['Mi vidas grandan hundon.', 'Mi vidas granda hundo.', 'Mi vidas grandan hundo.'],
        answer: 'Mi vidas grandan hundon.',
        explanation: '"Hundo" é o objeto direto (quem recebe a ação de "ver"), então leva -n: "hundon". O adjetivo "granda" concorda com ele e também leva -n: "grandan".',
      },
    ],
  },
  {
    id: 'eo-g4',
    level: 'A1.2',
    title: 'Os três tempos verbais: -as, -is, -os',
    emoji: '⏰',
    summary: 'O verbo esperanto NUNCA muda por pessoa — "mi estas", "vi estas", "li estas" são todos "estas". Só o TEMPO muda a terminação: -as (presente), -is (passado), -os (futuro).',
    sections: [
      {
        text: 'Essa é uma das maiores diferenças do esperanto com o português: o verbo não conjuga por pessoa (eu/tu/ele/nós...) — a mesma forma serve para todo mundo, e o pronome é que diz quem é o sujeito. Só muda o TEMPO: presente -as, passado -is, futuro -os.',
        table: {
          head: ['Pronome', 'esti (ser/estar)', 'paroli (falar)'],
          rows: [
            ['mi/vi/li/ŝi/ni/ili', 'estas (presente)', 'parolas'],
            ['mi/vi/li/ŝi/ni/ili', 'estis (passado)', 'parolis'],
            ['mi/vi/li/ŝi/ni/ili', 'estos (futuro)', 'parolos'],
          ],
        },
        examples: [
          ['Mi estas, vi estas, li estas — ĉiuj estas "estas".', 'Eu sou, você é, ele é — todos são "estas".'],
          ['Hieraŭ mi parolis. Hodiaŭ mi parolas. Morgaŭ mi parolos.', 'Ontem eu falei. Hoje eu falo. Amanhã eu falarei.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma conjugação por pessoa, como em português ("eu falo", "tu falas", "ele fala"): no esperanto é sempre a MESMA forma — só o pronome muda.',
      'Misturar as terminações de tempo com as de substantivo/adjetivo: -as/-is/-os são SEMPRE verbo; -o é substantivo; -a é adjetivo — nunca se confundem.',
    ],
    quiz: [
      {
        question: 'Como se diz "nós comemos" (no presente) em esperanto?',
        options: ['Ni manĝas.', 'Ni manĝis.', 'Ni manĝos.'],
        answer: 'Ni manĝas.',
        explanation: 'Presente é sempre -as, pra qualquer pessoa: "manĝas" serve pra "eu como", "você come", "nós comemos" etc. — o pronome "ni" já diz quem é o sujeito.',
      },
    ],
  },
  {
    id: 'eo-g5',
    level: 'A1.2',
    title: 'Afixos que multiplicam o vocabulário: mal-, -ino, -et-, -eg-',
    emoji: '🧩',
    summary: 'Um punhado de afixos reaproveitáveis cria palavras novas sem precisar de raiz nova: mal- (o oposto), -ino (feminino), -et- (diminutivo) e -eg- (aumentativo) funcionam em qualquer palavra que fizer sentido.',
    sections: [
      {
        text: 'O prefixo mal- inverte o sentido de qualquer adjetivo ou verbo: "bona" (bom) → "malbona" (mau); "granda" (grande) → "malgranda" (pequeno); "malami" (odiar, de "ami", amar). É um dos afixos mais usados do esperanto — aprender UM afixo dá acesso a centenas de palavras novas.',
        table: {
          head: ['Raiz', 'Com mal-', 'Tradução'],
          rows: [
            ['bona (bom)', 'malbona', 'mau/ruim'],
            ['granda (grande)', 'malgranda', 'pequeno'],
            ['ami (amar)', 'malami', 'odiar'],
          ],
        },
        examples: [['La vetero estas malbona.', 'O tempo (clima) está ruim.']],
      },
      {
        heading: '-ino faz o feminino: não é gênero gramatical, é derivação',
        text: 'O esperanto não tem gênero gramatical (substantivo e adjetivo não concordam em masculino/feminino, só em número). Mas o sufixo -ino cria a forma feminina de uma palavra de pessoa/animal quando faz sentido: "patro" (pai) → "patrino" (mãe); "frato" (irmão) → "fratino" (irmã); "filo" (filho) → "filino" (filha).',
        examples: [['Mia fratino estas pli juna ol mi.', 'Minha irmã é mais jovem do que eu.']],
      },
      {
        heading: '-et- (diminutivo) e -eg- (aumentativo)',
        text: 'Encaixados ENTRE a raiz e a terminação final, -et- diminui ("domo" casa → "dometo" casinha) e -eg- aumenta ("domo" → "domego" casarão). Funcionam em substantivos e adjetivos.',
        examples: [
          ['dometo', 'casinha (domo + -et- + -o)'],
          ['granda → grandega', 'grande → enorme'],
        ],
      },
    ],
    pitfalls: [
      'Achar que -ino marca gênero gramatical do jeito que o português faz: no esperanto é um sufixo opcional de DERIVAÇÃO (cria uma palavra nova), não uma concordância obrigatória.',
      'Esquecer que mal-, -et- e -eg- vêm ANTES da terminação final (-o/-a/-as): "malgranda", não "grandamal"; "dometo", não "domoet".',
    ],
    quiz: [
      {
        question: 'Qual é o oposto de "bona" (bom) em esperanto?',
        options: ['malbona', 'bonino', 'bonega'],
        answer: 'malbona',
        explanation: 'O prefixo mal- inverte o sentido de qualquer adjetivo: mal- + bona = malbona (mau/ruim). "-ino" faria o feminino (não se aplica a adjetivo de qualidade), e "-eg-" aumentaria ("bonega" = ótimo).',
      },
    ],
  },
];
