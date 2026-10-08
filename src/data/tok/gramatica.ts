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
    ],
    pitfalls: [
      'Pôr "li" depois de "mi"/"sina" por hábito de sempre marcar o verbo: "mi li pona" está errado — o certo é "mi pona", sem "li".',
      'Esquecer o "li" depois de qualquer outro sujeito: "jan pona" sozinho não tem verbo — precisa de "jan li pona".',
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
        examples: [['mi jo e luka tu.', 'Eu tenho duas mãos. (luka = mão/cinco, tu = dois/dividir)']],
      },
    ],
    pitfalls: [
      'Procurar uma palavra separada pra cada sentido em português: no toki pona, a MESMA palavra cobre o campo inteiro — "pona" não distingue "bom" de "simples" de "consertar"; o contexto decide.',
      'Esperar números exatos como em português: o toki pona oficial não tem palavra pra "sete" nem "quinze" — só wan, tu, mute e ale.',
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
];
