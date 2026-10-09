import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do hauçá: A1.1 e A1.2 (ha-g1 a ha-g4) e, a partir de ha-g5, os quatro
 * tópicos novos do A2 — números acima de dez, o tempo completivo, o futuro com “za” e o plural dos
 * substantivos. O pacote segue incompleto do B1.1 em diante.
 * Fontes de ha-g1 a ha-g4: Wikipedia (artigo “Hausa language”, seções de fonologia, gênero e
 * pronomes), Omniglot (as formas “Kana/Kina lahiya?”), Wiktionary (formas possuídas de gida, mota,
 * uwa, yarinya, suna e littafi).
 * Fontes de ha-g5 a ha-g8: Wikipedia, artigo “Hausa grammar” (as formas do completivo — na, ka/ki,
 * ya/ta, mun, kun, sun — e do futuro com “za”, além das 20 classes de plural propostas por Paul
 * Newman, 2000, “The Hausa Language: An Encyclopedic Reference Grammar”); Omniglot
 * (omniglot.com/language/numbers/hausa.htm) e languagesandnumbers.com/how-to-count-in-hausa
 * (numerais de onze a mil, com a nota de que boa parte das dezenas — talatin, arba’in, hamsin,
 * sittin, saba’in, tamanin, tis’in — são palavras emprestadas do árabe); Wiktionary em inglês
 * (formas de plural de yaro, gida, mota, littafi, suna e malami).
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
  {
    id: 'ha-g5',
    level: 'A2.1',
    title: 'Lambobi manya: de onze a mil',
    emoji: '🔢',
    summary: 'Depois do dez, o hauçá soma “goma” (dez) com “sha” e a unidade; as dezenas, o cem e o mil são palavras próprias, muitas vindas do árabe.',
    sections: [
      {
        text: 'De onze a dezenove, o hauçá soma “goma” (dez) com a partícula “sha” e a unidade — e, no dia a dia, o “goma” costuma até cair, sobrando só “sha” e o número.',
        table: {
          head: ['Número', 'Hauçá'],
          rows: [
            ['11', '(goma) sha ɗaya'],
            ['12', '(goma) sha biyu'],
            ['15', '(goma) sha biyar'],
            ['19', '(goma) sha tara'],
          ],
        },
        examples: [['Yara goma sha ɗaya.', 'Onze crianças.']],
      },
      {
        heading: 'Dezenas, cem e mil',
        text: 'Da casa das dezenas em diante, boa parte das palavras vem do árabe — “ashirin”, “talatin”, “arba’in”, “hamsin”, “sittin”, “saba’in”, “tamanin” e “tis’in” seguem o padrão dos numerais árabes de dezena —, enquanto “ɗari” (cem) e “dubu” (mil) são palavras hauçás mais antigas, sem esse parentesco. De vinte em diante, a unidade se liga com “da” (e), não mais com “sha”.',
        table: {
          head: ['Número', 'Hauçá'],
          rows: [
            ['20', 'ashirin'],
            ['21', 'ashirin da ɗaya'],
            ['30', 'talatin'],
            ['50', 'hamsin'],
            ['100', 'ɗari'],
            ['1000', 'dubu'],
          ],
        },
        examples: [
          ['Shekara talatin.', 'Trinta anos.'],
          ['Littattafai ɗari.', 'Cem livros.'],
        ],
      },
    ],
    pitfalls: [
      'Esperar “goma” (dez) sempre aparecer antes de “sha”: no dia a dia, costuma vir só “sha ɗaya”, “sha biyu”… sem o “goma”.',
      'Usar “sha” nas dezenas acima de vinte: a partir do vinte, a palavra de ligação muda para “da” (“ashirin da ɗaya”, vinte e um), não “sha”.',
    ],
    quiz: [
      {
        question: 'Como se diz “onze” em hauçá?',
        options: ['goma sha ɗaya', 'ashirin', 'ɗari'],
        answer: 'goma sha ɗaya',
        explanation: '“Goma” (dez) + “sha” + “ɗaya” (um).',
      },
      {
        question: 'Que número é “ɗari”?',
        options: ['Cem', 'Dez', 'Mil'],
        answer: 'Cem',
        explanation: '“Ɗari” é cem; “dubu” é mil.',
      },
    ],
  },
  {
    id: 'ha-g6',
    level: 'A2.1',
    title: 'O completivo: na, ka/ki, ya/ta, mun, kun, sun',
    emoji: '✅',
    summary: 'Para contar o que já aconteceu, o hauçá troca o pronome solto (ni, kai…) por uma forma presa direto no verbo, sem precisar de outra palavra de tempo.',
    sections: [
      {
        text: 'O completivo (também chamado de perfeito) é o tempo mais comum para contar algo que já aconteceu — e pode valer tanto um passado simples quanto algo que acabou de acontecer e ainda vale agora.',
        table: {
          head: ['Pronome', 'Completivo'],
          rows: [
            ['ni', 'na'],
            ['kai', 'ka'],
            ['ke', 'ki'],
            ['shi', 'ya'],
            ['ita', 'ta'],
            ['mu', 'mun'],
            ['ku', 'kun'],
            ['su', 'sun'],
          ],
        },
        examples: [
          ['Na saya shinkafa.', 'Eu comprei arroz.'],
          ['Ya zo.', 'Ele veio (ou: ele chegou).'],
        ],
      },
      {
        heading: 'Diferente do contínuo',
        text: 'Diferente do contínuo visto antes (“ina”, “kana”…), o completivo não tem o “-na-” extra: é só o pronome preso, direto antes do verbo — “mun tafi” (nós fomos), não “muna tafi”.',
        examples: [
          ['Mun tafi kasuwa.', 'Nós fomos ao mercado.'],
          ['Sun sha ruwa.', 'Eles beberam água.'],
        ],
      },
    ],
    pitfalls: [
      'Confundir “ka” (completivo, tu/você homem) com “kai” (pronome independente, tu/você homem): quem entra direto antes do verbo é “ka”, não “kai”.',
      'Confundir “ki” (completivo, tu/você mulher) com “ke” (pronome independente, tu/você mulher): são formas diferentes.',
    ],
    quiz: [
      {
        question: 'Como se diz “nós compramos” no completivo?',
        options: ['Mun saya.', 'Muna saya.', 'Mu saya.'],
        answer: 'Mun saya.',
        explanation: '“Mu” (nós) ganha a forma completiva “mun”.',
      },
      {
        question: 'Qual pronome completivo corresponde a “ela” (ita)?',
        options: ['ta', 'ya', 'ki'],
        answer: 'ta',
        explanation: '“Ita” (ela) tem a forma completiva “ta”.',
      },
    ],
  },
  {
    id: 'ha-g7',
    level: 'A2.2',
    title: 'O futuro com “za”: zan, za ka/za ki, zai/za ta…',
    emoji: '🔮',
    summary: 'O futuro do hauçá põe “za” antes do pronome — e em duas pessoas as duas palavras se juntam numa só: “zan” (eu vou) e “zai” (ele vai).',
    sections: [
      {
        text: 'Em “eu” e “ele”, “za” se contrai com o pronome; nas outras pessoas, fica separado.',
        table: {
          head: ['Pronome', 'Futuro'],
          rows: [
            ['ni', 'zan'],
            ['kai', 'za ka'],
            ['ke', 'za ki'],
            ['shi', 'zai'],
            ['ita', 'za ta'],
            ['mu', 'za mu'],
            ['ku', 'za ku'],
            ['su', 'za su'],
          ],
        },
        examples: [
          ['Zan tafi makaranta.', 'Eu vou à escola.'],
          ['Zai zo gobe.', 'Ele vai vir amanhã.'],
        ],
      },
      {
        heading: 'O pronome solto é opcional',
        text: 'Como o sujeito já está dentro da própria forma do futuro, o pronome independente (ni, kai…) quase sempre fica de fora: “Zan tafi” já é “Eu vou”, sem precisar de “ni” antes.',
        examples: [['Za mu tafi kasuwa da yamma.', 'Nós vamos ao mercado de tarde.']],
      },
    ],
    pitfalls: [
      'Tentar dizer “eu vou” como “za ni”: a forma contraída e mais comum é “zan”.',
      'Misturar o futuro com o completivo: “zan tafi” é “eu vou” (ainda não aconteceu); “na tafi” é “eu fui” (já aconteceu).',
    ],
    quiz: [
      {
        question: 'Como se diz “ele vai vir”?',
        options: ['Zai zo.', 'Ya zo.', 'Za shi zo.'],
        answer: 'Zai zo.',
        explanation: '“Za” + “shi” (ele) se contrai em “zai”.',
      },
      {
        question: 'O que a forma “zan” já traz embutido?',
        options: ['O sujeito “eu”', 'O sujeito “nós”', 'Nada: precisa de pronome solto depois'],
        answer: 'O sujeito “eu”',
        explanation: '“Zan” vem de “za” + “ni” (eu): o sujeito já está na própria palavra.',
      },
    ],
  },
  {
    id: 'ha-g8',
    level: 'A2.2',
    title: 'O plural dos substantivos: vários jeitos de dizer “mais de um”',
    emoji: '👥',
    summary: 'O hauçá não tem um único sufixo de plural: cada substantivo tem sua própria forma, e o jeito seguro de aprender é par a par, no singular e no plural.',
    sections: [
      {
        text: 'Não existe uma regra única de plural: “yaro” troca só a vogal final; “gida” ganha “-je”; “mota” ganha “-ci”; “littafi” dobra parte da palavra; “suna” ganha “-ye”; “malami” ganha “-ai”. O linguista Paul Newman chega a descrever cerca de vinte classes de plural no hauçá — por isso o caminho mais seguro é aprender cada palavra nova já com o seu plural, em vez de tentar adivinhar por uma regra geral.',
        table: {
          head: ['Singular', 'Plural', 'Tradução'],
          rows: [
            ['yaro', 'yara', 'menino → meninos'],
            ['gida', 'gidaje', 'casa → casas'],
            ['mota', 'motoci', 'carro → carros'],
            ['littafi', 'littattafai', 'livro → livros'],
            ['suna', 'sunaye', 'nome → nomes'],
            ['malami', 'malamai', 'professor → professores'],
          ],
        },
        examples: [
          ['Yara goma sha ɗaya.', 'Onze crianças.'],
          ['Motoci ashirin.', 'Vinte carros.'],
        ],
      },
    ],
    pitfalls: [
      'Tentar aplicar o mesmo sufixo de plural (tipo o “-ai” de “malamai”) em qualquer palavra: cada substantivo tem sua própria forma de plural, sem uma regra geral confiável.',
      'Esquecer “’yan’uwa” (visto na unidade de família): é o plural irregular de “ɗan’uwa”, e muda até a primeira parte da palavra, não só o final.',
    ],
    quiz: [
      {
        question: 'Qual é o plural de “littafi” (livro)?',
        options: ['littattafai', 'littafai só', 'littafis'],
        answer: 'littattafai',
        explanation: 'O plural de “littafi” dobra parte da palavra: “littattafai”.',
      },
      {
        question: 'Qual é o plural de “gida” (casa)?',
        options: ['gidaje', 'gidai', 'gidoci'],
        answer: 'gidaje',
        explanation: '“Gida” forma o plural com “-je”: “gidaje”.',
      },
    ],
  },
];
