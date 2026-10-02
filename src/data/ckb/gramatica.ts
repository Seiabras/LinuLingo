import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do curdo central (soranî) — por enquanto só A1.1 e A1.2 (pacote incompleto).
 *
 * Fontes: en.wikipedia.org/wiki/Kurdish_alphabets, en.wikipedia.org/wiki/Kurdish_languages,
 * en.wikipedia.org/wiki/Kurdish_grammar e en.wikipedia.org/wiki/Central_Kurdish_grammar (esta
 * última citando W. M. Thackston, “Sorani Kurdish — A Reference Grammar with Selected Readings”,
 * Harvard, 2006, e Yadgar Karimi, “Kurdish Ezafe construction”, Lingua 117, 2007).
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
];
