import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do malgaxe — por enquanto só A1.1 e A1.2 (pacote incompleto). Fontes: o
 * apêndice "Malagasy Swadesh list" do Wiktionary (ordem VOS, exemplo "Nahita ny voalavo ny akoho"),
 * a tese de Keenan & Ralalaoherivony sobre pronomes possessivos (sufixos -ko/-nao/-ny), a base de
 * tipologia WALS (ordem substantivo-adjetivo) e o dicionário malagasyword.org (padrão de tempo
 * mi-/ni-/hi- nos verbos ativos, confirmado em várias entradas, como mihinana/nihinana/hihinana).
 */
export const GRAMMAR_MG: GrammarTopic[] = [
  {
    id: 'mg-g1',
    level: 'A1.1',
    title: 'A ordem VOS: o predicado vem primeiro',
    emoji: '🔀',
    summary: 'Em malgaxe, o predicado (verbo ou adjetivo) vem no início da frase, e quem faz ou é aquilo vem no final — o oposto da ordem sujeito-verbo-objeto do português.',
    sections: [
      {
        text: 'O malgaxe é classificado como VOS (verbo-objeto-sujeito): o predicado abre a frase, e o sujeito fecha. Com um adjetivo como predicado, a lógica é a mesma: “Tsara izy” não é “bem ele”, é “Ele está bem” — “tsara” (bem/bom) é o predicado, “izy” (ele/ela) é quem está assim.',
        examples: [
          ['Tsara izy.', 'Ele/ela está bem.'],
          ['Mihinana vary isika.', 'Nós comemos arroz. (lit. “come arroz nós”)'],
        ],
      },
      {
        heading: 'A pergunta de sim/não: a partícula “ve”',
        text: 'Para fazer uma pergunta de sim/não, o malgaxe não muda a ordem da frase: só acrescenta a partícula “ve” logo depois do predicado (com tudo que o acompanha, como o objeto), antes do sujeito.',
        examples: [['Tia vary ve ianao?', 'Você gosta de arroz? (lit. “gosta arroz [pergunta] você”)']],
      },
    ],
    pitfalls: ['Tentar traduzir palavra por palavra na ordem do português: “Tsara izy” não é “Bem ele”, é “Ele está bem” — o predicado vem primeiro, não o sujeito.'],
    quiz: [
      {
        question: 'Em “Tsara izy”, qual palavra é o predicado (o que vem primeiro em malgaxe)?',
        options: ['tsara (bem/bom)', 'izy (ele/ela)', 'as duas, juntas'],
        answer: 'tsara (bem/bom)',
        explanation: 'O malgaxe é VOS: o predicado (aqui, o adjetivo “tsara”) vem primeiro, e o sujeito (“izy”) vem depois.',
      },
    ],
  },
  {
    id: 'mg-g2',
    level: 'A1.1',
    title: 'Aho, ianao, izy: os pronomes depois do predicado',
    emoji: '🙋',
    summary: 'Os pronomes pessoais mais comuns (“aho”, “ianao”, “izy”…) aparecem depois do predicado, encaixando na ordem VOS — e “nós” tem duas palavras diferentes, segundo quem está incluído.',
    sections: [
      {
        table: {
          head: ['Pronome', 'Tradução'],
          rows: [
            ['aho', 'eu'],
            ['ianao', 'você'],
            ['izy', 'ele / ela'],
            ['isika', 'nós (inclui quem ouve)'],
          ],
        },
        text: '“Aho” (eu) é usado depois do predicado, como nos exemplos deste curso (“Tsara aho”, eu estou bem) — existe também “izaho”, usado antes do predicado, mas esse uso não entra nesta primeira versão.',
        examples: [
          ['Tsara aho, misaotra!', 'Eu estou bem, obrigado!'],
          ['Manao ahoana ianao?', 'Como você está?'],
        ],
      },
      {
        heading: '“Nós” tem duas palavras',
        text: 'O malgaxe distingue um “nós” que inclui a pessoa com quem se fala (“isika”, ensinado neste curso) de um “nós” que a exclui (“izahay”, fora desta primeira versão) — uma distinção que o português não faz.',
      },
    ],
    pitfalls: ['Colocar o pronome antes do predicado, como em português (“Eu tsara” em vez de “Tsara aho”): em malgaxe, ele vem depois.'],
    quiz: [
      {
        question: 'Qual é a tradução de “isika”?',
        options: ['nós (incluindo quem ouve)', 'eu', 'eles/elas'],
        answer: 'nós (incluindo quem ouve)',
        explanation: '“Isika” é o “nós” inclusivo; existe também “izahay”, o “nós” exclusivo, que não entra nesta versão do curso.',
      },
    ],
  },
  {
    id: 'mg-g3',
    level: 'A1.2',
    title: 'Substantivo + adjetivo: a ordem invertida',
    emoji: '📐',
    summary: 'Dentro de um grupo de palavras (não como predicado da frase), o adjetivo vem DEPOIS do substantivo em malgaxe: “trano lehibe” é “casa grande”, nesta ordem, sempre.',
    sections: [
      {
        text: 'Quando o adjetivo descreve um substantivo dentro do mesmo grupo de palavras (não como predicado de uma frase inteira), a ordem é substantivo primeiro, adjetivo depois — sem exceção, diferente do português, que às vezes aceita as duas ordens (“casa grande”/“grande casa”).',
        examples: [['trano lehibe', 'casa grande']],
      },
      {
        heading: 'E como predicado, o adjetivo pula pra frente',
        text: 'Quando o mesmo adjetivo é o predicado da frase (não só descreve um substantivo), ele pula pra frente de tudo, pela ordem VOS já vista na unidade 1: “Lehibe ny trano” (a casa é grande) tem “lehibe” primeiro, porque agora ele é o predicado, não só um descritor dentro do grupo.',
        examples: [['Lehibe ny trano.', 'A casa é grande.']],
      },
    ],
    pitfalls: ['Esperar a ordem do português (adjetivo às vezes antes do substantivo): em malgaxe, dentro do grupo de palavras, o adjetivo é sempre depois.'],
    quiz: [
      {
        question: 'Como se diz “casa grande” em malgaxe?',
        options: ['trano lehibe', 'lehibe trano', 'as duas formas valem'],
        answer: 'trano lehibe',
        explanation: 'Dentro do grupo de palavras, o substantivo vem primeiro e o adjetivo depois: “trano lehibe”, nunca o contrário.',
      },
    ],
  },
  {
    id: 'mg-g4',
    level: 'A1.2',
    title: 'O tempo do verbo é um prefixo: mi-, ni-, hi-',
    emoji: '⏱️',
    summary: 'Muitos verbos do malgaxe trocam a primeira letra do prefixo para marcar o tempo: “m” no presente, “n” no passado, “h” no futuro — a raiz da palavra não muda.',
    sections: [
      {
        table: {
          head: ['Tempo', 'Prefixo', 'Exemplo (comer)'],
          rows: [
            ['presente', 'mi-', 'mihinana (como/comes/come)'],
            ['passado', 'ni-', 'nihinana (comi/comeu)'],
            ['futuro', 'hi-', 'hihinana (vou comer/vai comer)'],
          ],
        },
        text: 'A raiz do verbo fica a mesma nos três tempos (aqui, “-hinana”); só o começo do prefixo muda: “m” no presente, “n” no passado, “h” no futuro. O mesmo padrão vale para “misotro” (beber): “nisotro” no passado, “hisotro” no futuro.',
        examples: [
          ['Mihinana vary aho.', 'Eu como arroz.'],
          ['Omaly, nihinana vary aho.', 'Ontem, eu comi arroz.'],
        ],
      },
    ],
    pitfalls: ['Procurar uma palavra de tempo separada, como “comi” em português: em malgaxe o tempo mora dentro do prefixo do próprio verbo.'],
    quiz: [
      {
        question: 'Como fica “mihinana” (comer) no passado?',
        options: ['nihinana', 'hihinana', 'tsy mihinana'],
        answer: 'nihinana',
        explanation: 'O presente troca o “m” do prefixo por “n” no passado: mihinana → nihinana.',
      },
    ],
  },
];
