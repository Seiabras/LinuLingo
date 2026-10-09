import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do curdo central (soranî) — A1 completo, A2 (A2.1 e A2.2) novo nesta rodada.
 *
 * Fontes: en.wikipedia.org/wiki/Kurdish_alphabets, en.wikipedia.org/wiki/Kurdish_languages,
 * en.wikipedia.org/wiki/Kurdish_grammar e en.wikipedia.org/wiki/Central_Kurdish_grammar (esta
 * última citando W. M. Thackston, “Sorani Kurdish — A Reference Grammar with Selected Readings”,
 * Harvard, 2006, e Yadgar Karimi, “Kurdish Ezafe construction”, Lingua 117, 2007).
 *
 * Fontes novas para os tópicos A2 (consultadas em 09/10/2026): as mesmas duas páginas da Wikipédia
 * em inglês acima (“Central_Kurdish_grammar” e “Kurdish_grammar”) têm, cada uma, uma tabela própria
 * dos clíticos pronominais (-m, -t, -y, -man, -tan, -yan) e exemplos de verdade com eles — usados
 * nos tópicos ckb-g5 e ckb-g6. O ckb-g7 (indefinido/definido/plural) soma essas duas páginas com um
 * exemplo de verdade de um artigo acadêmico sobre processamento de soranî (um lematizador e
 * corretor ortográfico): Ahmadi, S. “Building a Lemmatizer and a Spell-checker for Sorani Kurdish”,
 * arXiv:1809.10763, que dá a frase real “nawendekanî dengdanman” (nossos centros de votação).
 */
export const GRAMMAR_CKB: GrammarTopic[] = [
  {
    id: 'ckb-g1',
    level: 'A1.1',
    title: 'Um alfabeto que escreve as vogais',
    emoji: '🔤',
    summary: 'O soranî usa uma versão modificada do alfabeto árabe-persa que, ao contrário do árabe, escreve quase todas as vogais como letras próprias.',
    sections: [
      {
        text:
          'O árabe é um “abjad”: normalmente só as consoantes (e as vogais longas) ganham letra, e o leitor precisa saber de cor onde entram as vogais curtas. O alfabeto do soranî, criado nos anos 1920, resolveu isso dando letra própria a quase toda vogal — por isso a Wikipédia o descreve como “almost a true alphabet” (quase um alfabeto de verdade, não um abjad). O curdo do norte (curmanji), em contraste, usa alfabeto latino, não este.',
        table: {
          head: ['Letra', 'Som', 'Exemplo'],
          rows: [
            ['ا', 'vogal longa “á”', 'ئاو (aw) “água”'],
            ['ە', 'vogal breve “é”', 'باش (baş) “bom”'],
            ['و / وو', 'vogal “u” curta / longa', 'دوو (dû) “dois”'],
            ['ۆ', 'vogal “ô” fechada', 'تۆ (to) “tu, você”'],
            ['ی', 'vogal “i”', 'شین (şîn) “azul”'],
            ['ێ', 'vogal “ê” fechada', 'ئەستێرە (estêre) “estrela”'],
          ],
        },
        examples: [
          ['سڵاو! چۆنی؟', 'Oi! Como vai?'],
          ['ناوی تۆ چییە؟', 'Qual é o teu nome?'],
        ],
      },
    ],
    pitfalls: [
      'Esperar que o soranî se leia como o árabe: aqui praticamente toda vogal tem letra própria, então não há vogais “escondidas” para adivinhar.',
      'Confundir ۆ (fechado, “tۆ”) com و (que pode soar “u” ou virar consoante “w”, dependendo da palavra).',
    ],
    quiz: [
      {
        question: 'O que torna o alfabeto do soranî diferente do árabe comum?',
        options: ['Escreve quase todas as vogais como letras próprias', 'Não tem nenhuma vogal', 'Usa o alfabeto latino'],
        answer: 'Escreve quase todas as vogais como letras próprias',
        explanation: 'O árabe é um abjad (normalmente só consoantes); o soranî dá letra própria a quase toda vogal, como ا, ە, ۆ, ێ.',
      },
      {
        question: 'Qual destas línguas curdas usa alfabeto latino, não o árabe-persa modificado?',
        options: ['O curmanji (curdo do norte)', 'O soranî (curdo central)', 'Nenhuma: todo curdo usa o mesmo alfabeto'],
        answer: 'O curmanji (curdo do norte)',
        explanation: 'O curmanji usa o alfabeto de Bedirxan/Hawar, em letras latinas; o soranî usa o alfabeto curdo-árabe, com vogais próprias.',
      },
    ],
  },
  {
    id: 'ckb-g2',
    level: 'A1.1',
    title: 'Sem gênero e sem caso',
    emoji: '🚫',
    summary: 'O soranî não marca gênero gramatical nem declina os substantivos por caso — diferente do curmanji, que tem os dois.',
    sections: [
      {
        text:
          'O linguista Philip G. Kreyenbroek resume a diferença entre as duas maiores línguas curdas: “Sorani has neither gender nor case-endings, whereas Kurmanji has both” (o soranî não tem nem gênero nem terminações de caso, enquanto o curmanji tem os dois). No curmanji, um substantivo muda de forma conforme é sujeito, objeto, possuidor ou vocativo (caso oblíquo, construto, vocativo); no soranî, a mesma palavra serve para tudo — só muda, às vezes, se é definida ou indefinida.',
        table: {
          head: ['', 'Soranî', 'Curmanji'],
          rows: [
            ['Gênero gramatical', 'não tem', 'tem (masc./fem./neutro)'],
            ['Caso (nominativo × oblíquo)', 'não tem', 'tem'],
            ['Indefinido', '-êk (sufixo)', 'sem marca própria'],
            ['Definido', '-eke (sing.), -ekan (plural)', 'sem marca própria'],
          ],
        },
        examples: [
          ['دۆست', '“amigo”, sem marca de gênero'],
          ['دۆستێک', '“um amigo” (indefinido, -êk)'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma tabela de declinação como a do curmanji: no soranî, o substantivo não muda por função sintática.',
      'Achar que “-eke”/“-êk” são “o/a” e “um/uma” portugueses soltos: são sufixos presos à palavra, não artigos separados.',
    ],
    quiz: [
      {
        question: 'Segundo Kreyenbroek, o que o soranî NÃO tem, ao contrário do curmanji?',
        options: ['Gênero e terminações de caso', 'Vogais', 'Palavras para números'],
        answer: 'Gênero e terminações de caso',
        explanation: '“Sorani has neither gender nor case-endings, whereas Kurmanji has both” — por isso este pacote não traz tabela de gênero.',
      },
      {
        question: 'Como o soranî marca que um substantivo é “indefinido” (um/uma)?',
        options: ['Com o sufixo -êk', 'Com um artigo solto antes da palavra', 'Não marca de jeito nenhum'],
        answer: 'Com o sufixo -êk',
        explanation: 'O sufixo -êk vai grudado no fim da palavra: دۆستێک (dostêk) é “um amigo”.',
      },
    ],
  },
  {
    id: 'ckb-g3',
    level: 'A1.2',
    title: 'A ezafe: o “ی” que liga duas palavras',
    emoji: '🔗',
    summary: 'Sem casos para marcar “de quem é”, o soranî usa uma partícula de ligação — a ezafe — entre um substantivo e o que vem depois dele.',
    sections: [
      {
        text:
          'A ezafe (também escrita “izafe”) é uma partícula presa ao fim do substantivo, que liga ele a um possuidor ou a um adjetivo logo depois. Thackston dá o exemplo “کراسی ئادام” (kras-y Adam), literalmente “camisa-DE Adam” = “a camisa do Adam”. A mesma partícula também liga substantivo e adjetivo: “خانووێکی خۆش” (xanwêkî xoş) é “uma casa agradável” — substantivo, sufixo indefinido -êk, ezafe -î, e só depois o adjetivo.',
        table: {
          head: ['Construção', 'Exemplo', 'Tradução literal'],
          rows: [
            ['substantivo + ezafe + possuidor', 'داری چیا', 'árvore-DE montanha'],
            ['substantivo + ezafe + adjetivo', 'داری سەوز', 'árvore-DE verde'],
            ['substantivo + ezafe + pronome', 'دۆستی من', 'amigo-DE eu'],
          ],
        },
        examples: [
          ['داری چیا.', 'A árvore da montanha.'],
          ['چاوی من سەوزە.', 'Meu olho é verde.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar um “de” solto como em português: a ezafe vem grudada no fim da primeira palavra, não antes da segunda.',
      'Colocar o adjetivo antes do substantivo, como em português: no soranî o adjetivo sempre vem depois, ligado pela ezafe.',
    ],
    quiz: [
      {
        question: 'O que “کراسی ئادام” (kras-y Adam) quer dizer?',
        options: ['A camisa do Adam', 'O Adam tem uma camisa', 'Adam é uma camisa'],
        answer: 'A camisa do Adam',
        explanation: 'A ezafe “-y” liga “کراس” (camisa) a “ئادام” (Adam): literalmente “camisa-DE Adam”.',
      },
      {
        question: 'Em soranî, onde fica o adjetivo em relação ao substantivo?',
        options: ['Depois, ligado pela ezafe', 'Antes, como em português', 'Em qualquer lugar da frase'],
        answer: 'Depois, ligado pela ezafe',
        explanation: '“داری سەوز” (a árvore verde) é, literalmente, “árvore-DE verde”: o adjetivo vem depois.',
      },
    ],
  },
  {
    id: 'ckb-g4',
    level: 'A1.2',
    title: 'O verbo no fim da frase',
    emoji: '📐',
    summary: 'Nas frases de exemplo da gramática de referência do soranî, o verbo vem depois do sujeito e do objeto — sujeito, objeto, verbo.',
    sections: [
      {
        text:
          'A frase-modelo da gramática de Thackston para o presente é “Min nan dexom”, literalmente “eu · pão · como” — o sujeito (min) vem primeiro, o objeto (nan) no meio, e o verbo (dexom) por último. O mesmo padrão aparece no passado: “Min nanim xward” (eu · pão-meu · comi). Esse é o padrão sujeito-objeto-verbo, comum a outras línguas iranianas como o persa. (Um resumo solto da Wikipédia em inglês, sem fonte própria, chama o curdo de “sujeito-verbo-objeto” — mas as frases com fonte citada, da gramática de referência, mostram o verbo no fim; este pacote segue os exemplos com fonte.)',
        examples: [
          ['Min nan dexom.', 'Eu como o pão. (lit.: eu · pão · como)'],
          ['Min nanim xward.', 'Eu comi o pão. (lit.: eu · pão-meu · comi)'],
        ],
      },
    ],
    pitfalls: [
      'Esperar o verbo logo depois do sujeito, como em português: no soranî ele fecha a frase.',
      'Traduzir palavra por palavra na ordem do português: “eu como pão” vira, em soranî, “eu pão como”.',
    ],
    quiz: [
      {
        question: 'Em “Min nan dexom” (eu como o pão), onde fica o verbo?',
        options: ['No fim da frase', 'Logo depois do sujeito', 'No começo da frase'],
        answer: 'No fim da frase',
        explanation: '“Min” (eu) é o sujeito, “nan” (pão) o objeto, e “dexom” (como), o verbo, fecha a frase.',
      },
      {
        question: 'Qual é a ordem básica mostrada pelos exemplos com fonte da gramática de referência do soranî?',
        options: ['Sujeito-objeto-verbo', 'Verbo-sujeito-objeto', 'Objeto-verbo-sujeito'],
        answer: 'Sujeito-objeto-verbo',
        explanation: '“Min nan dexom” e “Min nanim xward” mostram sempre o verbo por último.',
      },
    ],
  },
  {
    id: 'ckb-g5',
    level: 'A2.1',
    title: 'Os clíticos pronominais: -م, -ت, -ی, -مان, -تان, -یان',
    emoji: '🔗',
    summary: 'Um mesmo conjunto de seis terminações presas serve para “meu/seu/dele…” e, no passado, para marcar quem fez a ação.',
    sections: [
      {
        text:
          'Desde a A1 este pacote usa “-م” (meu) preso ao fim da palavra: “ناوم” (meu nome), “باوکم” (meu pai). Esse clítico faz parte de uma série completa de seis, confirmada tanto em “Central Kurdish grammar” quanto em “Kurdish grammar” (Wikipédia em inglês): -م (meu/eu), -ت (teu/tu), -ی (dele-dela/ele-ela), -مان (nosso/nós), -تان (vosso/vocês), -یان (deles/eles). A mesma série serve pra posse (presa a um substantivo) e, como mostra o próximo tópico, pra marcar o AGENTE no passado de verbos transitivos.',
        table: {
          head: ['Clítico', 'Sentido (posse)', 'Exemplo'],
          rows: [
            ['-م', 'meu', 'کتێبەکەم (o meu livro)'],
            ['-ت', 'teu', 'بلوزەکەت (a tua blusa)'],
            ['-ی', 'dele, dela', '—'],
            ['-مان', 'nosso', 'کتێبەکەمان (o nosso livro, se roubado: “Kteb-eke-man dizra”)'],
            ['-تان', 'vosso', '—'],
            ['-یان', 'deles, delas', 'کتێبەکەیان سووتا (o livro deles queimou)'],
          ],
        },
        examples: [
          ['کتێبەکەم باشە.', 'O meu livro é útil/bom. (Kteb-eke-m baş-a)'],
          ['کتێبەکەیان سووتا.', 'O livro deles queimou. (Kteb-eke-yan suta)'],
        ],
      },
    ],
    pitfalls: [
      'Esperar um pronome separado antes da palavra, como o “meu” do português: no soranî o clítico vai grudado no FIM da palavra possuída.',
      'Esquecer que “-ی” sozinho (dele/dela) pode se confundir visualmente com a ezafe “-ی”: o contexto (se já existe uma ezafe antes, ou se a frase pede um possuidor) decide qual é qual.',
    ],
    quiz: [
      {
        question: 'Como se diz “o nosso livro” grudando o clítico certo em “کتێبەکە” (o livro)?',
        options: ['کتێبەکەمان', 'کتێبەکەتان', 'کتێبەکەیان'],
        answer: 'کتێبەکەمان',
        explanation: '“-مان” é o clítico de “nosso”: “Kteb-eke-man”, confirmado na gramática de referência do soranî.',
      },
      {
        question: 'Os clíticos -م, -ت, -ی, -مان, -تان, -یان servem só para posse?',
        options: ['Não: no passado de verbos transitivos, marcam quem fez a ação', 'Sim, só para posse', 'Não: servem só como artigo definido'],
        answer: 'Não: no passado de verbos transitivos, marcam quem fez a ação',
        explanation: 'O próximo tópico (ckb-g6) mostra esse segundo uso, com “Min nanim xward” (eu comi o pão).',
      },
    ],
  },
  {
    id: 'ckb-g6',
    level: 'A2.1',
    title: 'O passado transitivo: o “eu” vira um clítico preso a outra palavra',
    emoji: '🧩',
    summary: 'Nas frases com objeto, o verbo no passado não muda de pessoa — é um clítico preso ao objeto (ou a outra palavra antes do verbo) que diz quem fez a ação.',
    sections: [
      {
        text:
          'Em “Min nan dexom” (eu como o pão), o verbo no presente concorda com “min” (eu), normalmente. Mas no passado, com objeto, a gramática de referência do soranî mostra outro comportamento: “Min nanim xward” é, literalmente, “eu · pão-meu · comeu” — o clítico “-م” (que em outro contexto quer dizer “meu”) gruda em “نان” (pão) pra avisar QUEM comeu, e o verbo “خوارد” (xward, comeu) fica na forma simples, sem terminação de pessoa. O mesmo padrão aparece em “wtar-eke-m nûsî” (o-artigo-meu escreveu = eu escrevi o artigo): o clítico de quem agiu gruda no objeto, não no verbo.',
        table: {
          head: ['Frase', 'Literal', 'Tradução'],
          rows: [
            ['Min nanim xward.', 'eu · pão-meu · comeu', 'Eu comi o pão.'],
            ['Wtar-ekem nûsî.', 'o-artigo-meu · escreveu', 'Eu escrevi o artigo.'],
          ],
        },
        examples: [
          ['من نانم خوارد.', 'Eu comi o pão.'],
          ['کردم.', 'Eu fiz. (forma confirmada do passado de کردن)'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma terminação de pessoa no verbo, como em português: no passado transitivo soranî, é o CLÍTICO preso ao objeto que marca quem fez a ação — o verbo fica numa forma só.',
      'Achar que “-م” é sempre “meu”: no passado transitivo, o mesmo “-م” pode estar marcando o AGENTE (quem fez), não o possuidor.',
    ],
    quiz: [
      {
        question: 'Em “Min nanim xward” (eu comi o pão), o que o “-م” preso a “نان” (pão) está marcando?',
        options: ['Quem comeu (o agente), não o possuidor do pão', 'Que o pão é meu', 'O tempo futuro'],
        answer: 'Quem comeu (o agente), não o possuidor do pão',
        explanation: 'No passado transitivo soranî, o clítico de pessoa gruda no objeto (ou na palavra antes do verbo) para marcar o agente — não é posse aqui.',
      },
      {
        question: 'No passado transitivo do soranî, como fica a terminação de pessoa no próprio verbo?',
        options: ['Não muda: fica numa forma simples, sem marcar pessoa', 'Muda normalmente, como em português', 'Vira sempre o infinitivo'],
        answer: 'Não muda: fica numa forma simples, sem marcar pessoa',
        explanation: '“Xward” (comeu) e “nûsî” (escreveu) não mudam de forma — quem marca a pessoa é o clítico preso a outra palavra.',
      },
    ],
  },
  {
    id: 'ckb-g7',
    level: 'A2.2',
    title: 'Indefinido -ێک, definido -ەکە, plural definido -ەکان',
    emoji: '🔢',
    summary: 'Três sufixos presos resolvem o que em português fazemos com “um/uma”, “o/a” e “os/as”.',
    sections: [
      {
        text:
          'O soranî não tem palavras separadas para “um/uma” ou “o/a”: usa sufixos presos ao fim do substantivo. “-ێک” marca o indefinido (“دۆستێک”, um amigo). “-ەکە” marca o definido no singular (“کتێبەکە”, o livro — confirmado em “Kurdish grammar” e “Central Kurdish grammar”, Wikipédia em inglês). No plural definido, o sufixo é “-ەکان”: um artigo sobre processamento do soranî (Ahmadi, arXiv:1809.10763) dá o exemplo real “nawendekanî dengdanman” — “ناوەند” (centro) + “ـەکان” (plural definido) + “ـی” (ezafe) + “دەنگدان” (votação) + “ـمان” (nosso) = “os nossos centros de votação”.',
        table: {
          head: ['Sufixo', 'Função', 'Exemplo'],
          rows: [
            ['-ێک', 'indefinido (um/uma)', 'دۆستێک (um amigo)'],
            ['-ەکە', 'definido singular (o/a)', 'کتێبەکە (o livro)'],
            ['-ەکان', 'definido plural (os/as)', 'ناوەندەکان (os centros)'],
          ],
        },
        examples: [
          ['دۆستێک', 'Um amigo.'],
          ['کتێبەکە', 'O livro.'],
          ['ناوەندەکانی دەنگدانمان', 'Os nossos centros de votação.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar um “os/as” solto antes da palavra: no soranî, o plural definido é um sufixo preso, “-ەکان”, sempre no fim.',
      'Misturar o indefinido “-ێک” com o definido “-ەکە”: são sufixos diferentes, nunca usados juntos na mesma palavra.',
    ],
    quiz: [
      {
        question: 'Qual sufixo marca o plural DEFINIDO (“os/as”) em soranî?',
        options: ['-ەکان', '-ێک', '-ەکە'],
        answer: '-ەکان',
        explanation: '“ناوەندەکان” (os centros) usa “-ەکان” — confirmado no exemplo real “nawendekanî dengdanman” (os nossos centros de votação).',
      },
      {
        question: 'Como se diz “um amigo” (indefinido) a partir de “دۆست” (amigo)?',
        options: ['دۆستێک', 'دۆستەکە', 'دۆستەکان'],
        answer: 'دۆستێک',
        explanation: '“-ێک” é o sufixo indefinido, equivalente ao nosso “um/uma”.',
      },
    ],
  },
];
