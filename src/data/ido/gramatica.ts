import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do Ido — por enquanto só A1.1 e A1.2 (pacote incompleto, ver `incomplete`
 * em index.ts). O Ido nasceu em 1907 como uma REFORMA do esperanto: um comitê encabeçado pelo
 * matemático francês Louis Couturat trabalhou as mudanças, com Louis de Beaufront como o autor
 * principal do projeto (revelado só depois da morte de Couturat, em 1914) e a colaboração inicial
 * do linguista dinamarquês Otto Jespersen. A ideia era limar as irregularidades que sobraram no
 * esperanto. Fontes: Wikipédia, “Ido”, “Ido grammar” e “Comparison between Esperanto and Ido”;
 * Wikcionário (verbetes individuais).
 */
export const GRAMMAR_IDO: GrammarTopic[] = [
  {
    id: 'ido-g1',
    level: 'A1.1',
    title: 'Sem acentos: 26 letras comuns e 3 dígrafos',
    emoji: '🔤',
    summary: 'O Ido usa as mesmas 26 letras do alfabeto comum (a-z), sem NENHUM acento — diferente do esperanto, que tem 6 letras com diacrítico (ĉ, ĝ, ĥ, ĵ, ŝ, ŭ). Os sons que o esperanto escreve com acento, o Ido escreve com duas letras: ch, sh, qu.',
    sections: [
      {
        text: 'A Wikipédia resume a escolha do comitê de 1907: “Ido uses the same 26 letters as the English (Latin) alphabet, with no diacritics... three digraphs and no ligatures” (o Ido usa as mesmas 26 letras do alfabeto inglês/latino, sem diacríticos... três dígrafos e nenhuma ligadura). Na prática: o “ĉ” do esperanto (tch) virou “ch”; o “ŝ” (x/ch) virou “sh”; e o Ido manteve “qu” (kw) do jeito que o inglês/português já escrevem.',
        examples: [
          ['chanco', 'sorte (tch-, como “ĉ” no esperanto)'],
          ['shuo', 'sapato (x/ch-, como “ŝ” no esperanto)'],
          ['aquo', 'água (kw-, “a-KWO”)'],
        ],
      },
      {
        heading: 'O “j” e o “y” trocaram de papel com o esperanto',
        text: 'Esta é a armadilha nº 1 pra quem já estudou esperanto no app: no Ido, “j” soa como o “j” do PORTUGUÊS, de “já” (fromajo, “fro-MA-jo”, queijo). No esperanto, esse mesmo “j” soa como “y” do inglês “yes” — e é exatamente esse som de deslize que o Ido escreve com “y” (yes, “iéss”, sim).',
        examples: [
          ['fromajo (Ido) = fromaĝo (esperanto)', 'queijo — o “j” do Ido já faz o som que o esperanto precisa do “ĝ” pra fazer'],
          ['yes (Ido) ~ jes (esperanto)', 'sim — mesma palavra quase, mas o “y”/“j” trocaram de função'],
        ],
      },
    ],
    pitfalls: [
      'Ler o “j” do Ido como se fosse o “j” do esperanto (que soa “y”): no Ido, “j” é sempre o “j” do português, de “já”.',
      'Esperar acento em alguma letra: o Ido não tem NENHUM — nem agudo, nem circunflexo, nem til.',
    ],
    quiz: [
      {
        question: 'Como se lê o “j” de “fromajo” (queijo) em Ido?',
        options: ['Como o “j” do português, de “já”', 'Como o “y” do inglês “yes”', 'Mudo, como o “h” do português'],
        answer: 'Como o “j” do português, de “já”',
        explanation: 'No Ido, “j” vale [ʒ], igual ao português. É o esperanto que usa “j” pro som de “y” — no Ido, esse som tem letra própria: “y”.',
      },
    ],
  },
  {
    id: 'ido-g2',
    level: 'A1.1',
    title: 'Substantivos em -o, plural -i; adjetivos em -a (sem concordância)',
    emoji: '📘',
    summary: 'Todo substantivo termina em -o; no plural, o -o troca por -i (não “-oj” como no esperanto). O adjetivo termina em -a e NUNCA muda — nem por número, nem por gênero: é sempre a mesma forma.',
    sections: [
      {
        text: 'A Wikipédia descreve a diferença com o esperanto assim: no esperanto o plural é “-oj” (domoj); no Ido é “-i”, trocando a vogal final (domo → domi). E o artigo “Comparison between Esperanto and Ido” é direto sobre o adjetivo: no esperanto ele concorda (“grandaj hundoj”, cães grandes); no Ido ele fica “Unchanged” (sem mudar) — “granda hundi”, com a MESMA forma do singular, mesmo acompanhando um substantivo no plural.',
        table: {
          head: ['Ido', 'Tradução'],
          rows: [
            ['domo', 'casa (uma casa)'],
            ['la domo', 'a casa'],
            ['domi', 'casas'],
            ['la granda domi', 'as casas grandes (granda NÃO vira grandi)'],
          ],
        },
        examples: [
          ['Me havas du libri.', 'Eu tenho dois livros.'],
          ['La amiki esas bona.', 'Os amigos são bons. — “bona” fica igual, nunca “bonai” nem “boni”.'],
        ],
      },
      {
        heading: 'O artigo “la” nunca muda, e não existe artigo indefinido',
        text: 'Igual ao esperanto: “la” serve pra “o”/“a”/“os”/“as”, sem variar por gênero ou número. E não existe “um”/“uma” — “domo” sozinha já pode significar “casa” ou “uma casa”.',
        examples: [['La libri esas bona.', 'Os livros são bons.']],
      },
    ],
    pitfalls: [
      'Tentar flexionar o adjetivo no plural (como em esperanto ou português): no Ido ele é SEMPRE invariável — “granda”, nunca “grandi” ou “grandai”.',
      'Fazer o plural com “-oj” (hábito de quem já estudou esperanto): no Ido é “-i”, não “-oj”.',
    ],
    quiz: [
      {
        question: 'Como fica “os cachorros grandes” em Ido?',
        options: ['la granda hundi', 'la grandi hundi', 'la grandaj hundoj'],
        answer: 'la granda hundi',
        explanation: '“hundo” vai pro plural com -i (hundi); mas o adjetivo “granda” NÃO concorda — fica sempre igual, diferente do esperanto (que exigiria “grandaj hundoj”).',
      },
    ],
  },
  {
    id: 'ido-g3',
    level: 'A1.2',
    title: 'Sem caso obrigatório: a ordem das palavras já basta',
    emoji: '🎯',
    summary: 'O Ido não exige a marca de acusativo (-n) que o esperanto usa sempre no objeto direto. Na ordem normal (sujeito-verbo-objeto), o substantivo fica igual sujeito ou objeto — a ordem das palavras já diz quem faz o quê.',
    sections: [
      {
        text: 'O artigo “Comparison between Esperanto and Ido” resume a diferença: no esperanto, o “-n” é obrigatório em qualquer ordem de palavras; no Ido, o “-n” só aparece quando o objeto vem ANTES do sujeito (uma inversão rara — a maioria das frases não precisa dela). Na ordem normal — a que este curso usa — o substantivo não muda nada.',
        table: {
          head: ['Função', 'Ido', 'Tradução'],
          rows: [
            ['Sujeito', 'La hundo manjas.', 'O cachorro come.'],
            ['Objeto direto (ordem normal, sem -n)', 'Me havas hundo.', 'Eu tenho um cachorro.'],
            ['Objeto direto no plural (sem -n)', 'Me havas du hundi.', 'Eu tenho dois cachorros.'],
          ],
        },
        examples: [
          ['Me amas mea familio.', 'Eu amo a minha família.'],
          ['El drinkas aquo.', 'Ela bebe água.'],
        ],
      },
    ],
    pitfalls: [
      'Copiar o hábito do esperanto e pôr -n no objeto direto: no Ido, na ordem normal (sujeito-verbo-objeto), isso não é preciso — “Me havas hundo”, não “Me havas hundon”.',
      'Esperar que o adjetivo do objeto também mude: como o adjetivo nunca concorda em Ido (ver tópico anterior), ele fica igual em qualquer função na frase.',
    ],
    quiz: [
      {
        question: 'Como se diz “eu vejo um cachorro grande” em Ido, na ordem normal da frase?',
        options: ['Me vidas granda hundo.', 'Me vidas grandan hundon.', 'Me vidas granda hundon.'],
        answer: 'Me vidas granda hundo.',
        explanation: 'Na ordem sujeito-verbo-objeto, o Ido não marca o objeto direto com -n (diferente do esperanto, que marcaria “grandan hundon”). “Granda hundo” fica igual, seja sujeito ou objeto.',
      },
    ],
  },
  {
    id: 'ido-g4',
    level: 'A1.2',
    title: 'Os três tempos verbais: -as, -is, -os (e o imperativo -ez)',
    emoji: '⏰',
    summary: 'Como no esperanto, o verbo do Ido NUNCA muda por pessoa — “me esas”, “vu esas”, “il esas” são todos “esas”. Só o TEMPO muda a terminação: -as (presente), -is (passado), -os (futuro). E pra dar uma ordem, existe a terminação própria -ez.',
    sections: [
      {
        text: 'A mesma regra do esperanto, herdada por ele: nenhuma conjugação por pessoa, só por tempo.',
        table: {
          head: ['Pronome', 'esar (ser/estar)', 'parolar (falar)'],
          rows: [
            ['me/vu/il/el/ni/li', 'esas (presente)', 'parolas'],
            ['me/vu/il/el/ni/li', 'esis (passado)', 'parolis'],
            ['me/vu/il/el/ni/li', 'esos (futuro)', 'parolos'],
          ],
        },
        examples: [
          ['Me esas, vu esas, il esas — omna esas “esas”.', 'Eu sou, você é, ele é — todos são “esas”.'],
          ['Hiere me parolis. Hodie me parolas. Morge me parolos.', 'Ontem eu falei. Hoje eu falo. Amanhã eu falarei.'],
        ],
      },
      {
        heading: 'O imperativo: -ez',
        text: 'Pra dar uma ordem ou pedido direto, o verbo termina em -ez, pra qualquer pessoa: “Irez!” (vá!), “Venez!” (venha!). É a mesma terminação que aparece em “Pardonez me!” (desculpe!) e “Bonvolez” (por favor).',
        examples: [['Venez amiko!', 'Venha, amigo!']],
      },
    ],
    pitfalls: [
      'Procurar uma conjugação por pessoa, como em português (“eu falo”, “tu falas”): no Ido é sempre a MESMA forma — só o pronome muda.',
      'Confundir -ez (imperativo, uma ordem) com -as/-is/-os (tempo): -ez só aparece quando se está mandando ou pedindo algo diretamente.',
    ],
    quiz: [
      {
        question: 'Como se diz “nós comemos” (no presente) em Ido?',
        options: ['Ni manjas.', 'Ni manjis.', 'Ni manjez.'],
        answer: 'Ni manjas.',
        explanation: 'Presente é sempre -as, pra qualquer pessoa: “manjas” serve pra “eu como”, “você come”, “nós comemos” etc. “Manjez” seria uma ordem (“comam!”), não o presente.',
      },
    ],
  },
  {
    id: 'ido-g5',
    level: 'A1.2',
    title: 'Sem masculino por padrão: -ulo, -ino, e os afixos -et-/-eg-/mal-',
    emoji: '🧩',
    summary: 'No Ido, palavras de parentesco como “frato” (irmão/irmã) e “filio” (filho/filha) já nascem NEUTRAS — nem masculinas nem femininas. Os sufixos -ulo (masculino) e -ino (feminino) são opcionais, usados só quando o sexo importa. Isso é diferente do esperanto, que assume o masculino como padrão.',
    sections: [
      {
        text: 'A Wikipédia é clara sobre essa diferença de design: no esperanto, “assumes the male gender by default... mainly words dealing with familial relationships” (assume o gênero masculino como padrão, principalmente em palavras de parentesco) — por isso “frato” (irmão) precisa do sufixo -ino pra virar “fratino” (irmã). No Ido, a raiz já é neutra, e -ulo/-ino são os dois opcionais: “servisto” (quem serve, de qualquer sexo) vira “servistulo” (garçom) ou “servistino” (garçonete) só quando faz sentido especificar.',
        table: {
          head: ['Raiz neutra', 'Masculino (-ulo)', 'Feminino (-ino)'],
          rows: [
            ['frato (irmão/irmã)', 'fratulo (irmão)', 'fratino (irmã)'],
            ['filio (filho/filha)', 'filiulo (filho)', 'filiino (filha)'],
          ],
        },
        examples: [[
          'Me havas un fratulo e un fratino.',
          'Eu tenho um irmão e uma irmã.',
        ]],
      },
      {
        heading: 'Nem tudo usa mal-: o Ido prefere uma palavra própria quando ela existe',
        text: 'O esperanto resolve quase todo oposto com o prefixo mal- (granda/malgranda). O Ido também tem mal- (existe, por exemplo, em “mala”, que o Wikcionário define como “opposite”, oposto), mas evita empilhá-lo sempre que já existe uma raiz própria mais natural: “pequeno” é “mikra” (do grego, como “micro-”), não “malgranda”; “frio” é “kolda”, não “malvarma”.',
        examples: [
          ['mikra, nunca *malgranda', 'pequeno'],
          ['kolda, nunca *malvarma', 'frio'],
        ],
      },
      {
        heading: '-et- (diminutivo) e -eg- (aumentativo)',
        text: 'Esses dois continuam iguais ao esperanto, encaixados entre a raiz e a terminação: domo (casa) + -eg- → domego (casarão/mansão); bela (bonito) + -eg- → belega (belíssimo).',
        examples: [['domego', 'casarão (domo + -eg- + -o)']],
      },
    ],
    pitfalls: [
      'Achar que “frato” já significa só “irmão” (como o esperanto faz): no Ido, “frato” é neutro — “irmão” é “fratulo”, “irmã” é “fratino”.',
      'Formar o oposto de qualquer palavra com mal-, por hábito do esperanto: o Ido prefere uma raiz própria quando ela existe (“mikra” pra pequeno, “kolda” pra frio), e reserva mal- pra quando não há raiz pronta.',
    ],
    quiz: [
      {
        question: 'O que significa a raiz “frato”, sozinha, no Ido?',
        options: ['Irmão OU irmã, sem especificar — é neutra', 'Só “irmão”, igual ao esperanto', 'Só “irmã”'],
        answer: 'Irmão OU irmã, sem especificar — é neutra',
        explanation: 'No Ido, “frato” não assume nenhum sexo. “fratulo” (com -ulo) marca o masculino, “fratino” (com -ino) marca o feminino — os dois sufixos são opcionais.',
      },
    ],
  },
];
