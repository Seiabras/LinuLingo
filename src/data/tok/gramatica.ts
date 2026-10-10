import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do toki pona — por enquanto só A1.1 e A1.2 (pacote incompleto, ver
 * `incomplete` em index.ts). O toki pona foi desenhado por Sonja Lang pra ter o mínimo de
 * gramática possível: sem conjugação, sem concordância, sem gênero, sem plural obrigatório — quase
 * tudo gira em volta de um punhado de partículas (li, e, la, pi, o...) numa ordem fixa. Fontes:
 * Sonja Lang, "Toki Pona: The Language of Good" (2014); tokipona.org; Wikipédia ("Toki Pona",
 * seções de gramática e fonologia).
 */
export const GRAMMAR_TOK: GrammarTopic[] = [
  {
    id: 'tok-g1',
    level: 'A1.1',
    title: '14 letras, sílaba (C)V(N), acento sempre na primeira sílaba',
    emoji: '🔤',
    summary: 'O toki pona escreve com só 14 letras latinas. Toda sílaba segue o padrão (consoante)+vogal+(nasal): nunca duas vogais coladas, nunca consoantes juntas (a não ser "n" antes de outra consoante). O acento tônico é sempre na primeira sílaba.',
    sections: [
      {
        text: 'As 14 letras são a, e, i, j, k, l, m, n, o, p, s, t, u, w — faltam b, c, d, f, g, h, q, r, v, x, y, z. São 9 consoantes (p, t, k, s, m, n, l, j, w) e 5 vogais (a, e, i, o, u), nenhuma com acento. Veja o som de cada uma na aba Alfabeto.',
        examples: [
          ['toki pona', 'o próprio nome da língua: "toki" (falar/língua) + "pona" (bom/simples) = "a língua boa/simples"'],
          ['jan, kala, mun', 'pessoa, peixe, lua — todas com só letras do toki pona'],
        ],
      },
      {
        heading: 'A sílaba: (consoante opcional) + vogal + (nasal opcional)',
        text: 'Cada sílaba tem no máximo uma consoante no início e, no fim, só a nasal "n" (antes de outra consoante ou no fim da palavra) — nunca duas vogais coladas (um ditongo) nem duas consoantes comuns juntas. "Tenpo" se divide ten-po; "insa" se divide in-sa; "soweli" se divide so-we-li.',
        examples: [
          ['tenpo', 'TEN-po (tempo) — o "n" fecha a primeira sílaba'],
          ['soweli', 'SO-we-li (animal) — três sílabas simples'],
        ],
      },
      {
        heading: 'O acento tônico: sempre na primeira sílaba',
        text: 'Essa regra não tem exceção: a sílaba tônica de qualquer palavra do toki pona, de qualquer tamanho, é sempre a primeira — diferente do português, em que o acento varia de palavra para palavra.',
        examples: [
          ['soweli', 'SO-we-li, nunca so-we-LI'],
          ['kalama', 'KA-la-ma (som), nunca ka-LA-ma'],
        ],
      },
    ],
    pitfalls: [
      'Ler "j" como o "j" do português (de "já"): no toki pona "j" é sempre o "y" do inglês "yes", um deslize rápido antes da vogal.',
      'Procurar uma exceção à regra do acento: não existe nenhuma palavra do toki pona com acento fora da primeira sílaba.',
    ],
    quiz: [
      {
        question: 'Onde fica o acento tônico de "soweli" (animal)?',
        options: ['Na primeira sílaba: SO-we-li', 'Na última sílaba: so-we-LI', 'Na sílaba do meio: so-WE-li'],
        answer: 'Na primeira sílaba: SO-we-li',
        explanation: 'No toki pona, o acento tônico é SEMPRE na primeira sílaba da palavra, sem exceção.',
      },
    ],
  },
  {
    id: 'tok-g2',
    level: 'A1.1',
    title: 'Ordem sujeito-verbo-objeto e a partícula "li"',
    emoji: '📘',
    summary: 'O toki pona segue sempre sujeito-verbo-objeto. A partícula "li" vem entre o sujeito e o predicado (o verbo) — menos quando o sujeito é "mi" ou "sina", caso em que "li" desaparece.',
    sections: [
      {
        text: '"li" marca o início do predicado de qualquer frase, pra qualquer sujeito — "jan li pona" (a pessoa é boa), "ona li pona" (ele/ela é bom/boa), "soweli li moku" (o animal come). A única exceção: quando o sujeito é exatamente "mi" (eu/nós) ou "sina" (você/vocês), o "li" cai fora.',
        table: {
          head: ['Sujeito', 'Com ou sem "li"', 'Exemplo'],
          rows: [
            ['mi / sina', 'SEM li', 'mi pona. / sina pona.'],
            ['jan, ona, qualquer outro', 'COM li', 'jan li pona. / ona li pona.'],
          ],
        },
        examples: [
          ['mi pona. sina pona.', 'Eu estou bem. Você está bem.'],
          ['jan li pona. ona li pona.', 'A pessoa é boa. Ele/ela é bom(a).'],
        ],
      },
      {
        heading: 'A partícula "o": ordens e desejos',
        text: 'No começo da frase, "o" marca uma ordem: "o moku!" (comam!/vamos comer!). Depois de "mi" ou "sina" (no lugar de "li"), marca um desejo ou pedido sobre esse sujeito: "sina o pona" (que você fique bem).',
        examples: [['o moku!', 'Comam!/Vamos comer!']],
      },
      {
        heading: 'Pergunta de sim/não: repetir o verbo com "ala" no meio',
        text: 'Pra perguntar algo que se responde com sim ou não, repete-se o verbo (ou o predicado) com "ala" (não) entre as duas cópias: "sina pona ala pona?" é "você está bem?" (literalmente, "você bem não-bem?"). Responde-se só repetindo a parte que importa: "pona" (sim) ou "pona ala" (não).',
        examples: [
          ['sina pona ala pona?', 'Você está bem?'],
          ['sina wile ala wile e telo?', 'Você quer água?'],
        ],
      },
    ],
    pitfalls: [
      'Pôr "li" depois de "mi"/"sina" por hábito de sempre marcar o verbo: "mi li pona" está errado — o certo é "mi pona", sem "li".',
      'Esquecer o "li" depois de qualquer outro sujeito: "jan pona" sozinho não tem verbo — precisa de "jan li pona".',
      'Procurar uma palavra separada pra "pergunta de sim/não": o toki pona repete o próprio verbo com "ala" no meio, não usa uma partícula nova.',
    ],
    quiz: [
      {
        question: 'Qual frase está certa para "a pessoa é boa"?',
        options: ['jan li pona', 'jan pona', 'mi li pona'],
        answer: 'jan li pona',
        explanation: '"jan" não é "mi" nem "sina", então precisa do "li" antes do predicado: "jan li pona".',
      },
    ],
  },
  {
    id: 'tok-g3',
    level: 'A1.2',
    title: 'A partícula "e": quem recebe a ação',
    emoji: '🎯',
    summary: '"e" marca o objeto direto — a coisa que recebe a ação do verbo. Sem objeto, a frase não precisa de "e"; quando se nomeia o objeto, "e" é obrigatório antes dele.',
    sections: [
      {
        text: '"mi moku" (eu como) já é uma frase completa, sem dizer o quê. Pra dizer o QUE se come, entra "e" antes do objeto: "mi moku e kili" (eu como fruta). Se houver mais de um objeto, "e" se repete antes de cada um.',
        table: {
          head: ['Frase', 'Tradução'],
          rows: [
            ['mi moku.', 'Eu como (algo, sem dizer o quê).'],
            ['mi moku e kili.', 'Eu como fruta.'],
            ['mi moku e kili e pan.', 'Eu como fruta e pão.'],
          ],
        },
        examples: [
          ['mi olin e sina.', 'Eu te amo.'],
          ['mi moku e pan, taso mi wile ala e kili.', 'Eu como pão, mas eu não quero fruta.'],
        ],
      },
    ],
    pitfalls: [
      'Esquecer o "e" antes do objeto direto: "mi moku kili" está errado — precisa ser "mi moku e kili".',
      'Pôr "e" antes de algo que não é objeto direto (por exemplo, depois de "li" ou antes do sujeito): "e" só marca objeto, nunca sujeito.',
    ],
    quiz: [
      {
        question: 'Qual frase está certa para "eu vejo o peixe"?',
        options: ['mi lukin e kala.', 'mi lukin kala.', 'mi e lukin kala.'],
        answer: 'mi lukin e kala.',
        explanation: '"kala" é o objeto direto (quem recebe a ação de "ver"), então precisa do "e" antes: "lukin e kala".',
      },
    ],
  },
  {
    id: 'tok-g4',
    level: 'A1.2',
    title: '"la" dá o contexto; "pi" junta modificadores',
    emoji: '🧩',
    summary: '"X la, Y" usa X como contexto (tempo, condição, lugar) pra entender Y. "pi" junta dois ou mais modificadores numa frase só, pra eles valerem como UM modificador do substantivo anterior.',
    sections: [
      {
        text: 'Uma frase com "la" tem duas partes: o contexto (antes de "la") e a frase principal (depois da vírgula). "tenpo suno la, mi moku" (de dia, eu como) — "tenpo suno" (tempo-sol = de dia) é o contexto pra "mi moku".',
        examples: [
          ['tenpo suno la, mi moku.', 'De dia, eu como.'],
          ['tenpo pimeja la, mi lape.', 'De noite (tempo escuro), eu durmo.'],
        ],
      },
      {
        heading: '"pi": juntando modificadores',
        text: 'Um substantivo pode ganhar vários modificadores em sequência ("jan pona" = pessoa boa). Mas quando dois ou mais desses modificadores precisam valer como UM bloco só (modificando outra coisa), usa-se "pi" antes desse bloco: "tomo pi jan pona" (a casa da pessoa boa) — "pi" junta "jan pona" (pessoa boa) num modificador só de "tomo".',
        examples: [['tomo pi jan pona li suli.', 'A casa da pessoa boa é grande.']],
      },
    ],
    pitfalls: [
      'Usar "pi" com um modificador só: "pi" só entra quando há DOIS OU MAIS modificadores que precisam virar um bloco — com um só, não precisa de "pi".',
      'Esquecer a vírgula depois do contexto com "la": "X la, Y" sempre tem essa pausa entre o contexto e a frase principal.',
    ],
    quiz: [
      {
        question: 'Qual frase quer dizer "a casa da pessoa boa"?',
        options: ['tomo pi jan pona', 'tomo jan pona pi', 'pi tomo jan pona'],
        answer: 'tomo pi jan pona',
        explanation: '"pi" vem ANTES do bloco de modificadores que deve valer como um só: "pi jan pona" (pessoa boa) modifica "tomo" (casa) como um bloco.',
      },
    ],
  },
  {
    id: 'tok-g5',
    level: 'A1.2',
    title: 'Uma palavra, um campo de sentido inteiro',
    emoji: '🌐',
    summary: 'Cada palavra do toki pona cobre de propósito um campo de sentido amplo: "pona" é bom, simples E consertar; "suli" é grande, alto, longo E importante. O contexto é que decide qual sentido vale. Os números seguem a mesma lógica: só existem palavras pra 1, 2, "vários" e "tudo".',
    sections: [
      {
        text: 'Diferente do português, que tem uma palavra pra cada sentido fino (bom, simples, consertar, arrumar...), o toki pona usa UMA raiz pra todo um campo de sentido relacionado. Isso é central no projeto da língua: poucas raízes, usadas com muita elasticidade.',
        table: {
          head: ['Palavra', 'Campo de sentido'],
          rows: [
            ['pona', 'bom · simples · consertar/arrumar'],
            ['suli', 'grande · alto · longo · importante'],
            ['moku', 'comer · beber · comida'],
            ['pilin', 'sentimento · sentir · coração'],
          ],
        },
        examples: [
          ['ni li pona.', 'Isso é bom. / Isso é simples.'],
          ['mama li suli tawa mi.', 'O pai/a mãe é importante para mim.'],
        ],
      },
      {
        heading: 'Números de propósito imprecisos',
        text: 'O toki pona oficial só tem palavra pra "um" (wan), "dois" (tu), "vários/muitos" (mute) e "tudo/infinito" (ale) — não existe uma palavra pra "sete" ou "quinze". Quem precisa contar com mais precisão combina essas palavras (ou empresta números de outra língua), mas o padrão da língua é mesmo não se importar com números exatos.',
        examples: [['mi jo e luka tu.', 'Eu tenho duas mãos. (luka, aqui, é "mão" — tu modifica como "duas")']],
      },
      {
        heading: 'O sistema de contagem formal: luka (5), mute (20), ale (100)',
        text: 'Além da visão minimalista (wan/tu/mute/ale), existe um sistema oficial de contagem por soma, do livro de Sonja Lang: "luka" vale 5, "mute" vale 20 e "ale" vale 100 — e os números se formam somando essas palavras em sequência, igual ao algarismo romano. "luka tu" nesse sistema é 5+2=7, bem diferente do "luka tu" = "duas mãos" do uso cotidiano — só o contexto diz qual dos dois sistemas está em jogo.',
        examples: [['mi jo e luka luka tu.', 'Eu tenho doze (5+5+2) [no sistema de contagem formal].']],
      },
    ],
    pitfalls: [
      'Procurar uma palavra separada pra cada sentido em português: no toki pona, a MESMA palavra cobre o campo inteiro — "pona" não distingue "bom" de "simples" de "consertar"; o contexto decide.',
      'Esperar números exatos como em português: o toki pona oficial não tem palavra pra "sete" nem "quinze" — só wan, tu, mute e ale (ou a soma de luka/mute/ale do sistema formal).',
      'Confundir "luka tu" cotidiano (duas mãos) com "luka tu" do sistema formal de contagem (5+2=7): são dois usos diferentes da mesma combinação de palavras.',
    ],
    quiz: [
      {
        question: 'Qual destes é um sentido real de "suli" no toki pona?',
        options: ['Importante', 'Triste', 'Azul'],
        answer: 'Importante',
        explanation: '"suli" cobre grande, alto, longo E importante — um campo de sentido só, igual "pona" cobre bom, simples e consertar.',
      },
    ],
  },
  {
    id: 'tok-g6',
    level: 'A1.2',
    title: 'Pré-verbos: começo, continuação, capacidade e vontade',
    emoji: '⏳',
    summary: 'O toki pona não conjuga verbo (sem sufixo de passado/futuro). Em vez disso, prende outra palavra ANTES do verbo principal pra marcar que a ação está começando, continuando, é possível ou é desejada: "mi kama sona e toki pona" é "eu estou aprendendo toki pona" (literalmente, "eu venho a saber").',
    sections: [
      {
        text: 'Palavras como "kama" (vir a ser, começar), "ken" (poder, ter permissão), "wile" (querer, precisar) e "awen" (continuar, ficar) também funcionam como pré-verbos: coladas antes de outro verbo, mudam o sentido dele sem precisar de sufixo nenhum. Dois pré-verbos podem se juntar na mesma frase.',
        table: {
          head: ['Pré-verbo', 'Sentido', 'Exemplo'],
          rows: [
            ['kama', 'vir a ser, começar a', 'mi kama sona e toki pona. — Eu estou aprendendo toki pona.'],
            ['ken', 'poder, ter permissão', 'mi ken pali. — Eu posso trabalhar.'],
            ['wile', 'querer, precisar', 'mi wile lukin e tomo. — Eu quero olhar a casa.'],
            ['awen', 'continuar, ficar', 'mi awen pali. — Eu continuo trabalhando.'],
          ],
        },
        examples: [['mi wile kama sona e toki pona.', 'Eu quero aprender toki pona. (dois pré-verbos: wile + kama)']],
      },
    ],
    pitfalls: ['Procurar um sufixo de tempo/aspecto como em português: o toki pona marca "começando"/"continuando"/"podendo" com uma palavra separada ANTES do verbo, nunca com uma terminação.'],
    quiz: [
      {
        question: 'Como o toki pona diz que uma ação está "em processo de começar"?',
        options: ['Com o pré-verbo "kama" antes do verbo principal', 'Com um sufixo no verbo', 'Não dá para marcar isso'],
        answer: 'Com o pré-verbo "kama" antes do verbo principal',
        explanation: '"kama" (vir a ser) antes de outro verbo marca que a ação está em processo: "kama sona" é "vir a saber", ou seja, "estar aprendendo".',
      },
    ],
  },
  {
    id: 'tok-g7',
    level: 'A2.1',
    title: 'O vocativo: "o" depois do nome, pra chamar alguém',
    emoji: '📣',
    summary: 'Pra chamar alguém antes de falar com essa pessoa, o nome vem seguido de "o", formando uma frase vocativa separada: "jan Petro o, sina pona ala pona?" (Petro, você está bem?). É diferente do "o" no COMEÇO de uma frase, que marca uma ordem (já visto na A1.2).',
    sections: [
      {
        text: 'A frase vocativa (de chamado) vem ANTES da frase principal e termina com "o" depois de quem está sendo chamado: "jan Petro o" é como dizer "Petro," ou "ei, Petro". Isso é diferente do "o" logo no COMEÇO de uma frase, que marca uma ordem: "o moku!" (comam!).',
        table: {
          head: ['Uso do "o"', 'Posição', 'Exemplo'],
          rows: [
            ['Vocativo (chamar alguém)', 'depois do nome, antes da frase', 'jan Petro o, sina pona ala pona? — Petro, você está bem?'],
            ['Imperativo (dar uma ordem)', 'no começo da frase', 'o moku! — Comam!'],
          ],
        },
        examples: [['jan Ana o, mi olin e sina.', 'Ana, eu te amo.']],
      },
    ],
    pitfalls: [
      'Confundir o "o" vocativo (depois do nome, chamando alguém) com o "o" imperativo (no começo da frase, dando uma ordem): a POSIÇÃO decide qual é qual.',
    ],
    quiz: [
      {
        question: 'Como se chama "Petro" antes de falar com ele, em toki pona?',
        options: ['jan Petro o', 'o jan Petro', 'jan o Petro'],
        answer: 'jan Petro o',
        explanation: 'O vocativo vem com "o" DEPOIS do nome da pessoa chamada: "jan Petro o".',
      },
    ],
  },
  {
    id: 'tok-g8',
    level: 'A2.1',
    title: 'Modificadores em cadeia: a ordem muda o sentido',
    emoji: '🧱',
    summary: 'Modificadores empilhados depois de um substantivo se acumulam, mas podem ficar ambíguos sem "pi": "jan pona mute" costuma ser "muitas pessoas boas". Numa palavra composta de duas raízes, a ORDEM também muda o sentido: "soweli utala" (animal de luta) é diferente de "utala soweli" (luta entre animais).',
    sections: [
      {
        text: 'Modificadores empilham depois do substantivo, e cada um modifica o GRUPO INTEIRO antes dele. "jan pona mute" é lido normalmente como "pessoa boa, muitas" (muitas pessoas boas). Pra fixar que "pona mute" (muito bom) é um bloco só, descrevendo UMA pessoa, usa-se "pi" (já visto na A1.2): "jan pi pona mute" é "uma pessoa muito boa".',
        examples: [
          ['jan pona mute', 'pessoa boa, muitas (sentido mais comum: muitas pessoas boas)'],
          ['jan pi pona mute', 'uma pessoa muito boa ("pona mute" é um bloco só)'],
        ],
      },
      {
        heading: 'A ordem das raízes muda o sentido',
        text: 'Numa palavra composta de duas raízes (sem "pi"), a PRIMEIRA é o núcleo e a segunda a modifica: "soweli utala" (literalmente "animal de luta") é um animal que luta; "utala soweli" (literalmente "luta de animal") é uma luta/guerra ENTRE animais. Trocar a ordem troca o sentido.',
        examples: [
          ['soweli utala', 'animal de luta (um animal que luta)'],
          ['utala soweli', 'luta de animais (guerra entre animais)'],
        ],
      },
    ],
    pitfalls: [
      'Achar que "jan pona mute" só pode significar "uma pessoa muito boa": sem "pi", o sentido mais natural é "muitas pessoas boas" — pra garantir "muito boa" (uma pessoa só), use "jan pi pona mute".',
      'Trocar a ordem de duas raízes sem perceber a mudança de sentido: "soweli utala" e "utala soweli" não são a mesma coisa.',
    ],
    quiz: [
      {
        question: 'O que "jan pi pona mute" garante, que "jan pona mute" não garante?',
        options: ['Que "pona mute" (muito bom) é um bloco só, descrevendo UMA pessoa', 'Que são várias pessoas', 'Que a pessoa é má'],
        answer: 'Que "pona mute" (muito bom) é um bloco só, descrevendo UMA pessoa',
        explanation: '"pi" agrupa "pona mute" como um modificador só de "jan", fixando o sentido de "uma pessoa muito boa" — sem "pi", o mais natural seria "muitas pessoas boas".',
      },
    ],
  },
  {
    id: 'tok-g9',
    level: 'A2.2',
    title: 'Comparação sem palavra própria: "X la" e "tawa X"',
    emoji: '⚖️',
    summary: 'O toki pona não tem uma palavra pronta pra "mais...que". Comparações usam uma referência: colocando algo antes de "la" (já visto na A1.2), o resto da frase é entendido relativo a essa referência; "tawa X" (do ponto de vista de X) faz o mesmo papel depois do adjetivo.',
    sections: [
      {
        text: 'A comunidade do toki pona documenta formas de comparar com construções já conhecidas: "poki mi la sike sina li suli" é, ao pé da letra, "relativo à minha caixa, sua bola é grande" — ou seja, sua bola é MAIOR que minha caixa. A mesma ideia, com "tawa" depois do adjetivo: "sike sina li suli tawa poki mi" (sua bola é grande do ponto de vista da minha caixa).',
        table: {
          head: ['Construção', 'Sentido', 'Exemplo'],
          rows: [
            ['X la Y li ADJ', 'Y é ADJ relativo a X', 'poki mi la sike sina li suli. — Perto da minha caixa, sua bola é grande.'],
            ['Y li ADJ tawa X', 'Y é ADJ do ponto de vista de X', 'sike sina li suli tawa poki mi. — Sua bola é grande pro ponto de vista da minha caixa.'],
            ['Duas frases com taso', 'uma coisa é X, mas a outra é Y (contraste)', 'poki mi li lili. taso, sike sina li suli. — Minha caixa é pequena, mas sua bola é grande.'],
          ],
        },
        examples: [['tomo mi la tomo sina li suli.', 'Perto da minha casa, sua casa é grande (sua casa é maior que a minha).']],
      },
    ],
    pitfalls: [
      'Procurar uma palavra isolada pra "mais...que": o toki pona usa uma referência (la/tawa) ou duas frases com "taso", nunca uma palavra de comparação sozinha.',
    ],
    quiz: [
      {
        question: 'Como o toki pona expressa "sua bola é maior que minha caixa"?',
        options: ['poki mi la sike sina li suli.', 'sike sina li suli mute.', 'poki mi li sike.'],
        answer: 'poki mi la sike sina li suli.',
        explanation: 'Colocando "poki mi" (minha caixa) como referência antes de "la", o resto da frase ("sike sina li suli") é entendido relativo a ela: sua bola é grande EM COMPARAÇÃO com minha caixa.',
      },
    ],
  },
  {
    id: 'tok-g10',
    level: 'A2.2',
    title: 'Superlativo com "nanpa wan"; igualdade com "sama"',
    emoji: '🏆',
    summary: 'O superlativo usa "nanpa wan" (literalmente "número um") depois do adjetivo: "X li suli nanpa wan" é "X é o maior". A igualdade usa "sama": "X li sama Y" é "X é igual/parecido a Y".',
    sections: [
      {
        text: 'Pra dizer que algo é "o maior de todos" (superlativo), acrescenta-se "nanpa wan" (número um) depois do adjetivo: "poki sina li suli nanpa wan" é "sua caixa é a maior". Pra dizer que duas coisas são iguais, usa-se "sama": "wawa mi li sama wawa sina" é "minha força é igual à sua" (eu sou tão forte quanto você).',
        table: {
          head: ['Construção', 'Sentido', 'Exemplo'],
          rows: [
            ['ADJ nanpa wan', 'o mais ADJ de todos (superlativo)', 'poki sina li suli nanpa wan. — Sua caixa é a maior.'],
            ['sama', 'igual/parecido a', 'wawa mi li sama wawa sina. — Minha força é igual à sua.'],
            ['ADJ; ante ale li OPOSTO', 'reforça o superlativo: "todos os outros são o oposto"', 'poki sina li suli. poki ante ale li lili. — Sua caixa é grande; as outras caixas são pequenas.'],
          ],
        },
        examples: [['mi sama sina.', 'Eu sou igual a você. (já visto na A1.1, com "sama" sozinho)']],
      },
    ],
    pitfalls: [
      'Confundir "nanpa wan" (número um, superlativo) com "wan" sozinho (só o numeral "um"): "nanpa" transforma o numeral num ORDINAL, "o primeiro/o número um".',
      'Esquecer que "sama" compara igualdade, não diferença de tamanho: pra "mais...que", veja o tópico anterior (la/tawa).',
    ],
    quiz: [
      {
        question: 'Como se diz "sua caixa é a maior" em toki pona?',
        options: ['poki sina li suli nanpa wan.', 'poki sina li suli sama.', 'poki sina li nanpa wan.'],
        answer: 'poki sina li suli nanpa wan.',
        explanation: '"nanpa wan" (número um) depois do adjetivo "suli" marca o superlativo: "é a maior".',
      },
    ],
  },
];
