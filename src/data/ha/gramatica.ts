import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do hauçá — por enquanto só A1.1 e A1.2 (pacote incompleto).
 * Fontes: Wikipedia (artigo “Hausa language”, seções de fonologia, gênero e pronomes),
 * Omniglot (as formas “Kana/Kina lahiya?”), Wiktionary (formas possuídas de gida, mota, uwa,
 * yarinya, suna e littafi).
 */
export const GRAMMAR_HA: GrammarTopic[] = [
  {
    id: 'ha-g1',
    level: 'A1.1',
    title: 'Pronúncia: as letras com gancho e os dígrafos do boko',
    emoji: '🔤',
    summary: 'O alfabeto boko tem letras que o português não tem — ɓ, ɗ, ƙ, ƴ — e dígrafos como “sh” e “ts”, que valem um som só.',
    sections: [
      {
        text: 'O hauçá moderno se escreve sobretudo no alfabeto boko (latino, criado nos anos 1930), embora a escrita árabe ajami ainda seja usada para fins religiosos. As quatro letras abaixo marcam consoantes “glotalizadas”, presas na garganta — um traço que o português não tem.',
        table: {
          head: ['Letra', 'Som', 'Exemplo'],
          rows: [
            ['ɓ', 'implosiva: a garganta “puxa” o ar para dentro ao soltar o “b”', 'ɓarawo (ladrão)'],
            ['ɗ', 'implosiva, igual mas com “d”', 'ɗan’uwa (irmão)'],
            ['ƙ', 'ejetiva: um “k” seco, com fechamento na garganta', 'ƙafa (pé)'],
            ['ƴ (também escrita ’y)', 'aproximante presa na garganta; na prática, quase sempre escrita só com apóstrofo', '’yar’uwa (irmã)'],
            ['sh', 'como o “x” de “xadrez”', 'shayi (chá)'],
            ['ts', 'ejetiva: um “ts” seco, com fechamento na garganta', 'tsuntsu (pássaro)'],
          ],
        },
        examples: [
          ['Sannu!', 'Oi!'],
          ['Ƙafa da hannu.', 'Pé e mão.'],
        ],
      },
      {
        heading: 'Tom e vogal longa, sem marcação',
        text: 'O hauçá é uma língua tonal (cada sílaba tem um tom alto, baixo ou descendente) e distingue vogais curtas de longas, mas a escrita comum — jornal, WhatsApp, livro didático — não marca nem o tom nem a vogal longa. Só gramáticas acadêmicas usam acentos para isso.',
        examples: [['daga', 'de (também pode ser “batalha”, com tom e vogal longa diferentes, não marcados na escrita)']],
      },
    ],
    pitfalls: [
      'Ler ɓ, ɗ e ƙ como um “b”, “d” e “k” comuns: são sons presos na garganta, que não existem em português.',
      'Esperar ver o tom marcado no texto: o hauçá do dia a dia não marca tom nem vogal longa.',
    ],
    quiz: [
      {
        question: 'O que torna “ɓ”, “ɗ” e “ƙ” diferentes de “b”, “d” e “k”?',
        options: ['São sons presos na garganta (glotalizados)', 'São só maiúsculas especiais', 'Não existem de verdade no hauçá falado'],
        answer: 'São sons presos na garganta (glotalizados)',
        explanation: 'São consoantes implosivas (ɓ, ɗ) ou ejetivas (ƙ), produzidas com um movimento na garganta que o português não tem.',
      },
      {
        question: 'O hauçá escrito do dia a dia marca o tom das palavras?',
        options: ['Não — só gramáticas acadêmicas marcam', 'Sim, sempre, com acentos', 'Só nas vogais longas'],
        answer: 'Não — só gramáticas acadêmicas marcam',
        explanation: 'Apesar de o hauçá ser tonal, a escrita comum (boko) não marca tom nem vogal longa.',
      },
    ],
  },
  {
    id: 'ha-g2',
    level: 'A1.1',
    title: 'Pronomes pessoais e o “é” com gênero (ne / ce)',
    emoji: '🙋',
    summary: 'O hauçá tem um “é” que muda conforme o gênero da palavra que vem antes dele: “ne” para masculino, “ce” para feminino.',
    sections: [
      {
        text: 'Os pronomes pessoais independentes não mudam de forma com o gênero (diferente do “ele/ela” do português, aqui só a 3ª pessoa do singular distingue).',
        table: {
          head: ['Pronome', 'Tradução'],
          rows: [
            ['ni', 'eu'],
            ['kai', 'tu, você (para homem)'],
            ['ke', 'tu, você (para mulher)'],
            ['shi', 'ele'],
            ['ita', 'ela'],
            ['mu', 'nós'],
            ['ku', 'vós, vocês'],
            ['su', 'eles, elas'],
          ],
        },
      },
      {
        heading: 'Ne ou ce?',
        text: 'Para dizer “X é Y”, o hauçá põe uma partícula depois do predicado: “ne” se a palavra for masculina (ou plural), “ce” se for feminina. O importante é o gênero da palavra que vem antes da partícula — não quem está falando.',
        examples: [
          ['Ni malami ne.', 'Eu sou professor.'],
          ['Ita malama ce.', 'Ela é professora.'],
        ],
      },
    ],
    pitfalls: [
      'Achar que “ne”/“ce” mudam conforme quem fala (eu, tu, ele): na verdade mudam conforme o gênero da palavra que vem logo antes.',
      'Trocar “malami ne” (professor) por “malami ce”: um substantivo masculino nunca leva “ce”.',
    ],
    quiz: [
      {
        question: 'Como termina a frase “Ni malama ___” (Eu sou professora)?',
        options: ['ce', 'ne', 'na'],
        answer: 'ce',
        explanation: '“Malama” (professora) é feminino, então leva “ce”.',
      },
      {
        question: 'O que decide se a frase termina em “ne” ou em “ce”?',
        options: ['O gênero da palavra que vem antes', 'A pessoa que está falando', 'O tempo verbal da frase'],
        answer: 'O gênero da palavra que vem antes',
        explanation: '“Ne”/“ce” concordam com o gênero do predicado, não com o sujeito.',
      },
    ],
  },
  {
    id: 'ha-g3',
    level: 'A1.2',
    title: 'Os pronomes contínuos: ina, kana, kina…',
    emoji: '⏳',
    summary: '“Ina”, “kana”, “kina”… juntam o pronome com a marca de tempo contínuo “na” numa palavra só.',
    sections: [
      {
        text: 'Para dizer “eu estou”, “você está” etc. diante de um nome ou de uma palavra de estado (como “lafiya”, saúde), o hauçá gruda o pronome com “na”, numa única palavra.',
        table: {
          head: ['Pronome', 'Forma contínua'],
          rows: [
            ['ni', 'ina'],
            ['kai', 'kana'],
            ['ke', 'kina'],
            ['shi', 'yana'],
            ['ita', 'tana'],
            ['mu', 'muna'],
            ['ku', 'kuna'],
            ['su', 'suna'],
          ],
        },
        examples: [
          ['Kana lahiya?', 'Você está bem? (perguntando a um homem)'],
          ['Kina lahiya?', 'Você está bem? (perguntando a uma mulher)'],
        ],
      },
      {
        heading: 'Cuidado: com verbos de ação, o verbo muda de forma',
        text: 'As formas desta lição (“ina”, “kana”, “kina”…) aparecem direto antes de um nome ou de uma palavra de estado, como em “Kana lahiya?”. Diante de um verbo de ação (comer, falar, ir…), o hauçá usa uma forma especial do verbo, chamada verbal-substantiva — isso entra nas próximas unidades.',
      },
    ],
    pitfalls: [
      'Tentar usar “ina” direto com qualquer verbo do dicionário: com verbos de ação, o hauçá exige uma forma verbal-substantiva especial, ainda não vista nesta unidade.',
      'Confundir “suna” (eles estão, de “su” + “na”) com “suna” (nome, substantivo): são duas palavras diferentes que se escrevem exatamente igual.',
    ],
    quiz: [
      {
        question: 'Como se pergunta “você está bem?” a uma mulher?',
        options: ['Kina lahiya?', 'Kana lahiya?', 'Muna lahiya?'],
        answer: 'Kina lahiya?',
        explanation: '“Ke” (você, para mulher) + “na” formam “kina”.',
      },
      {
        question: '“Suna” pode significar duas coisas bem diferentes em hauçá. Quais?',
        options: ['“Nome” (substantivo) e “eles estão” (su + na)', '“Água” e “chá”', '“Sim” e “não”'],
        answer: '“Nome” (substantivo) e “eles estão” (su + na)',
        explanation: 'É um par de palavras homófonas: “suna” substantivo (nome) e “suna” pronome contínuo (su + na).',
      },
    ],
  },
  {
    id: 'ha-g4',
    level: 'A1.2',
    title: 'O genitivo grudado: -n ou -r depois do substantivo',
    emoji: '🔗',
    summary: 'Para dizer “de fulano”, o hauçá gruda um “-n” ou um “-r” no fim do substantivo possuído — bem diferente do “de” solto do português.',
    sections: [
      {
        text: 'Quando um substantivo vem seguido direto do nome do dono, ele ganha um sufixo: “-n” nos masculinos, “-r” nos femininos terminados em “-a”.',
        table: {
          head: ['Substantivo', 'Com o dono', 'Tradução'],
          rows: [
            ['gida (casa, masc.)', 'gidan Audu', 'a casa do Audu'],
            ['suna (nome, masc.)', 'sunan Audu', 'o nome do Audu'],
            ['mota (carro, fem.)', 'motar Amina', 'o carro da Amina'],
            ['uwa (mãe, fem.)', 'uwar Amina', 'a mãe da Amina'],
          ],
        },
        examples: [
          ['Gidan Audu.', 'A casa do Audu.'],
          ['Motar Amina.', 'O carro da Amina.'],
        ],
      },
      {
        heading: 'Uma exceção conhecida',
        text: '“Littafi” (livro) é gramaticalmente feminino, mas não termina em “-a” — e por isso leva “-n”, como um masculino: “littafin Audu” (o livro do Audu). O “-r” é mais típico dos femininos terminados em “-a”, não de todo feminino.',
        examples: [['Littafin Audu.', 'O livro do Audu.']],
      },
    ],
    pitfalls: [
      'Achar que todo substantivo feminino leva “-r”: isso vale sobretudo para os terminados em “-a” (mota, uwa); “littafi”, feminino mas sem “-a” no fim, leva “-n”.',
      'Usar o sufixo com o substantivo sozinho: ele só aparece grudado quando vem seguido direto do nome do dono (“gidan Audu”); sozinho, fica “gida”.',
    ],
    quiz: [
      {
        question: 'Como se diz “o carro da Amina”?',
        options: ['motar Amina', 'motan Amina', 'mota na Amina'],
        answer: 'motar Amina',
        explanation: '“Mota” é feminino e termina em “-a”: leva “-r”.',
      },
      {
        question: 'Como se diz “a casa do Audu”?',
        options: ['gidan Audu', 'gidar Audu', 'gida Audu'],
        answer: 'gidan Audu',
        explanation: '“Gida” é masculino: leva “-n”.',
      },
    ],
  },
];
