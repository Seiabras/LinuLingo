import type { GrammarTopic } from '../types';

/**
 * Gramática do manchu (mnc), nível A1. Fonte: en.wikipedia.org/wiki/Manchu_language (casos, ordem das
 * palavras, adjetivos, comparação, formas verbais), com os exemplos citados tal qual; a escrita, de
 * en.wikipedia.org/wiki/Manchu_alphabet; as frases do dia a dia, do guia de conversação do Wikivoyage.
 */
export const GRAMMAR_MNC: GrammarTopic[] = [
  {
    id: 'mnc-g1',
    level: 'A1.1',
    title: 'A escrita manchu',
    emoji: '📜',
    summary: 'Vem da escrita mongol: desce de cima pra baixo, as colunas andam da esquerda pra direita, e pontos e círculos separam letras que no mongol eram iguais.',
    sections: [
      {
        text: 'Em 1599, Nurhaci, o líder jurchen que unificou os manchus, mandou adaptar a escrita mongol à sua língua. Em 1632, Dahai acrescentou sinais para tirar as ambiguidades: segundo a Wikipédia em inglês, um k, um g e um h no começo da sílaba passaram a se distinguir por nenhuma marca, um ponto e um círculo. Essa é a “escrita com pontos e círculos”, a forma padrão até hoje. Como na escrita mongol, cada palavra desce de cima pra baixo, e a coluna seguinte vem à direita.',
        examples: [
          ['ᠰᡳ ᠰᠠᡳᠶᡡᠨ?', 'Como vai você?'],
          ['ᠰᠠᡳᠨ᠈ ᠪᠠᠨᡳᡥᠠ᠉', 'Bem, obrigado(a).'],
        ],
      },
      {
        heading: 'Pontuação',
        text: 'O ponto final manchu é “᠉” e a vírgula é “᠈”. Nas perguntas, o app usa o “?” comum, que no texto vertical aparece deitado.',
      },
    ],
    pitfalls: [
      'Esquecer os pontos e círculos: em manchu, eles mudam a letra (k, g, h), não são enfeite.',
      'Ler as colunas da direita pra esquerda, como no chinês vertical: no manchu, a primeira coluna é a da ESQUERDA.',
    ],
    quiz: [
      { question: 'De qual escrita nasceu a escrita manchu?', options: ['Da escrita mongol', 'Dos caracteres chineses', 'Do alfabeto latino'], answer: 'Da escrita mongol', explanation: 'Em 1599, Nurhaci mandou adaptar a escrita mongol ao manchu.' },
      { question: 'O que Dahai acrescentou em 1632?', options: ['Pontos e círculos que separam letras', 'Letras maiúsculas', 'Acentos de tom'], answer: 'Pontos e círculos que separam letras', explanation: 'Um k, um g e um h passaram a se distinguir por nenhuma marca, um ponto e um círculo.' },
    ],
  },
  {
    id: 'mnc-g2',
    level: 'A1.1',
    title: 'Verbo no fim e partículas depois do nome',
    emoji: '🧩',
    summary: 'O verbo fecha a frase, e partículas como be (objeto), de (para, em, com), i (de, posse) e ci (de, a partir de) vêm DEPOIS da palavra que marcam.',
    sections: [
      {
        text: 'Onde o português põe uma preposição antes do nome (“para esta pessoa”, “da casa”), o manchu põe uma partícula depois dele. Todos os exemplos abaixo são da Wikipédia em inglês.',
        table: {
          head: ['Partícula', 'Função', 'Exemplo', 'Português'],
          rows: [
            ['be', 'objeto direto', 'ᡳ ᠪᠣᠣ ᠪᡝ ᠸᡝᡳᠯᡝᠮᠪᡳ᠉', 'Ele constrói uma casa.'],
            ['de', 'para, em, com', 'ᡝᡵᡝ ᠨᡳᠶᠠᠯᠮᠠ ᡩᡝ ᠪᡠᠮᠪᡳ᠉', 'Dá a esta pessoa.'],
            ['i', 'de (posse); com (meio)', 'ᠪᡝᠶᡝ ᡳ ᡤᠠᠯᠠ ᡩᡝ ᠵᠠᡶᠠᡥᠠᠪᡳ᠉', 'Pegou com a própria mão.'],
            ['ci', 'de, a partir de; comparação', 'ᠮᠣᡵᡳᠨ ᡳᠨᡩᠠᡥᡡᠨ ᠴᡳ ᠠᠮᠪᠠ᠉', 'O cavalo é maior que o cão.'],
          ],
        },
        examples: [
          ['ᠠᠯᡳᠨ ᠪᡠᠵᠠᠨ ᡩᡝ ᡨᠣᠮᠣᠮᠪᡳ᠉', 'Vivem nas montanhas e florestas.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar a preposição antes do nome: em manchu ela vem depois, como partícula.',
      'Pôr o verbo no meio da frase: em ᡳ ᠪᠣᠣ ᠪᡝ ᠸᡝᡳᠯᡝᠮᠪᡳ᠉, o verbo “weilembi” (constrói) é a última palavra.',
    ],
    quiz: [
      { question: 'Em ᡳ ᠪᠣᠣ ᠪᡝ ᠸᡝᡳᠯᡝᠮᠪᡳ᠉, o que “be” marca?', options: ['O objeto (a casa)', 'O lugar', 'O tempo'], answer: 'O objeto (a casa)', explanation: '“be” vem depois do objeto direto: boo be, “a casa”.' },
      { question: 'Onde fica o verbo na frase manchu?', options: ['No fim', 'No começo', 'Logo depois do sujeito'], answer: 'No fim', explanation: 'A ordem é sujeito, objeto, verbo.' },
    ],
  },
  {
    id: 'mnc-g3',
    level: 'A1.2',
    title: 'Adjetivo antes ou depois',
    emoji: '🔀',
    summary: 'Antes do nome, o adjetivo descreve (“uma boa pessoa”); depois, ele afirma (“a pessoa é boa”). Para comparar, usa-se ci.',
    sections: [
      {
        text: 'A Wikipédia em inglês dá o par “ᠰᠠᡳᠨ ᠨᡳᠶᠠᠯᠮᠠ᠉” (sain niyalma) (uma boa pessoa) e “ᠨᡳᠶᠠᠯᠮᠠ ᠰᠠᡳᠨ᠉” (niyalma sain) (a pessoa é boa): a mesma palavra muda de papel só pela posição, sem verbo “ser”. Para dizer que algo é maior, menor ou melhor que outra coisa, a partícula “ci” vai depois do termo de comparação.',
        table: {
          head: ['Manchu', 'Leitura', 'Português'],
          rows: [
            ['ᠰᠠᡳᠨ ᠨᡳᠶᠠᠯᠮᠠ᠉', 'sain niyalma.', 'Uma boa pessoa.'],
            ['ᠨᡳᠶᠠᠯᠮᠠ ᠰᠠᡳᠨ᠉', 'niyalma sain.', 'A pessoa é boa.'],
            ['ᠮᠣᡵᡳᠨ ᡳᠨᡩᠠᡥᡡᠨ ᠴᡳ ᠠᠮᠪᠠ᠉', 'morin indahūn ci amba.', 'O cavalo é maior que o cão.'],
          ],
        },
        examples: [
          ['ᡳᠴᡝ ᠪᠣᠣ᠉', 'Uma casa nova.'],
          ['ᡳᠨᡩᠠᡥᡡᠨ ᠠᠵᡳᡤᡝ᠉', 'O cão é pequeno.'],
        ],
      },
    ],
    pitfalls: [
      'Acrescentar um verbo “ser”: ᠨᡳᠶᠠᠯᠮᠠ ᠰᠠᡳᠨ᠉ já é a frase inteira.',
      'Pôr “ci” depois do que é maior: ele vai depois do termo com que se compara (o cão, em “maior que o cão”).',
    ],
    quiz: [
      { question: 'Qual quer dizer “a pessoa é boa”?', options: ['ᠨᡳᠶᠠᠯᠮᠠ ᠰᠠᡳᠨ᠉', 'ᠰᠠᡳᠨ ᠨᡳᠶᠠᠯᠮᠠ᠉', 'ᠨᡳᠶᠠᠯᠮᠠ ᠴᡳ ᠰᠠᡳᠨ᠉'], answer: 'ᠨᡳᠶᠠᠯᠮᠠ ᠰᠠᡳᠨ᠉', explanation: 'Depois do nome, o adjetivo afirma: niyalma sain.' },
      { question: 'Em ᠮᠣᡵᡳᠨ ᡳᠨᡩᠠᡥᡡᠨ ᠴᡳ ᠠᠮᠪᠠ᠉, quem é maior?', options: ['O cavalo', 'O cão', 'Os dois são iguais'], answer: 'O cavalo', explanation: '“ci” marca o termo de comparação, o cão: o cavalo é maior que ele.' },
    ],
  },
  {
    id: 'mnc-g4',
    level: 'A1.2',
    title: 'Verbos em -mbi, pergunta e negação',
    emoji: '❓',
    summary: 'Os verbos aparecem no dicionário em -mbi; para perguntar, acrescenta-se -o; para negar, usa-se a forma em -rakū.',
    sections: [
      {
        text: 'A forma em -mbi é a do presente e a do dicionário: “ᠵᡳᠮᠪᡳ” (jimbi) (vir), “ᠣᠮᡳᠮᠪᡳ” (omimbi) (beber). Para perguntar, a Wikipédia em inglês mostra a partícula -o colada no verbo: “ᡳ ᡳᠨᡝᠩᡤᡳ ᠵᡳᠮᠪᡳᠣ?” (i inenggi jimbio) (ele vem hoje?). O guia do Wikivoyage traz a mesma partícula em “si … gisureme bahanambio?” (você sabe falar …?) e a negação em -rakū: “bahanarakū” (não sei), “ulhirakū” (não entendo).',
        table: {
          head: ['Forma', 'Leitura', 'Português'],
          rows: [
            ['ᠵᡳᠮᠪᡳ', 'jimbi', 'vem / vir'],
            ['ᠵᡳᠮᠪᡳᠣ?', 'jimbio?', 'vem?'],
            ['ᡠᠯᡥᡳᡵᠠᡴᡡ᠉', 'ulhirakū.', 'não entendo'],
          ],
        },
        examples: [
          ['ᡳ ᡳᠨᡝᠩᡤᡳ ᠵᡳᠮᠪᡳᠣ?', 'Ele vem hoje?'],
          ['ᠪᡳ ᠮᠠᠨᠵᡠ ᡤᡳᠰᡠᠨ ᠪᡝ ᡤᡳᠰᡠᡵᡝᠮᡝ ᠪᠠᡥᠠᠨᠠᡵᠠᡴᡡ᠉', 'Eu não sei falar manchu.'],
        ],
      },
    ],
    pitfalls: [
      'Esperar uma palavra separada para perguntar: em manchu, o -o vai grudado no verbo.',
      'Esperar um “não” separado antes do verbo: a negação do verbo é a forma em -rakū.',
    ],
    quiz: [
      { question: 'Como fica “vem?” a partir de ᠵᡳᠮᠪᡳ (vir)?', options: ['ᠵᡳᠮᠪᡳᠣ', 'ᠵᡳᠮᠪᡳᡵᠠᡴᡡ', 'ᠵᡳᠮᠪᡳ ᠪᡝ'], answer: 'ᠵᡳᠮᠪᡳᠣ', explanation: 'A pergunta acrescenta -o: jimbi → jimbio.' },
      { question: 'O que quer dizer ᡠᠯᡥᡳᡵᠠᡴᡡ᠉?', options: ['Não entendo', 'Obrigado', 'Até logo'], answer: 'Não entendo', explanation: 'A forma em -rakū nega o verbo (ulhimbi, entender).' },
    ],
  },
];
