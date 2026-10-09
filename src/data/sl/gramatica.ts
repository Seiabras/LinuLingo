import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do esloveno: A1 completo (sl-g1 a sl-g4) mais A2 (sl-g5 a sl-g7,
 * acrescentado depois). Fontes dos tópicos novos: Wikcionário em inglês (en.wiktionary.org),
 * verbete "biti" na seção eslovena (tabelas do futuro com "bom" + particípio em "-l" e do
 * pretérito com "sem" + o mesmo particípio) e verbete "kupiti" na seção eslovena (presente
 * "kúpim/kúpiš"); e, para o dual, o verbete "roka" (declinação completa em singular, dual e
 * plural), confirmado por uma pesquisa cruzada sobre o futuro esloveno que cita a ausência de
 * futuro sintético e o uso do particípio-L também no futuro (não o infinitivo, como em outras
 * línguas eslavas).
 */
export const GRAMMAR_SL: GrammarTopic[] = [
  {
    id: 'sl-g1',
    level: 'A1.1',
    title: 'Pronúncia: č, š, ž e o “l” que vira “u”',
    emoji: '🔤',
    summary: 'O alfabeto esloveno tem 25 letras: o latino sem q, w, x e y, mais č, š e ž.',
    sections: [
      {
        text: 'O esloveno se lê quase como se escreve. As letras com “strešica” (o chapeuzinho ˇ) têm sons de “tch”, “ch” e “j”, e o “j” é sempre um “i” curto.',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['č', '“tch”', 'črn (preto)'],
            ['š', '“ch” de “chá”', 'šest (seis)'],
            ['ž', '“j” de “já”', 'živjo (oi)'],
            ['j', '“i” de “pai”', 'jaz (eu)'],
            ['c', '“ts”', 'konec (fim)'],
            ['l no fim da sílaba', '“u”', 'bel (branco)'],
          ],
        },
        examples: [
          ['Hvala lepa!', 'Muito obrigado!'],
          ['Lahko noč!', 'Boa noite!'],
        ],
      },
    ],
    pitfalls: ['Ler o “j” como o nosso “j”: “jaz” soa “iaz”.', 'Ler o “c” como “k”: “konec” soa “kónets”.'],
    quiz: [
      { question: 'Como soa o “ž” de “živjo”?', options: ['como o “j” de “já”', 'como o “z” de “zebra”', 'como o “s” de “sol”'], answer: 'como o “j” de “já”', explanation: 'O chapeuzinho transforma o “z” no som do nosso “j”.' },
      { question: 'Quantas letras tem o alfabeto esloveno?', options: ['25', '30', '33'], answer: '25', explanation: 'É o alfabeto latino sem q, w, x e y, mais č, š e ž.' },
    ],
  },
  {
    id: 'sl-g2',
    level: 'A1.1',
    title: 'Os pronomes, o verbo biti e o dual',
    emoji: '🙋',
    summary: 'O verbo “biti” (ser, estar) tem formas para um, para dois e para vários.',
    sections: [
      {
        text: 'O pronome costuma cair, porque o verbo já mostra a pessoa. Além do singular e do plural, o esloveno tem o dual, para exatamente duas pessoas.',
        table: {
          head: ['Pessoa', 'singular', 'dual', 'plural'],
          rows: [
            ['1ª', 'jaz sem', 'midva sva', 'mi smo'],
            ['2ª', 'ti si', 'vidva sta', 'vi ste'],
            ['3ª', 'on / ona je', 'onadva sta', 'oni so'],
          ],
        },
        examples: [
          ['Sem iz São Paula.', 'Sou de São Paulo.'],
          ['Midva sva prijatelja.', 'Nós dois somos amigos.'],
        ],
      },
      {
        heading: 'O tratamento formal',
        text: 'Com desconhecidos e no trabalho, o esloveno usa “vi”, com o verbo no plural, mesmo para uma pessoa só.',
        examples: [
          ['Kako ste?', 'Como vai o senhor / a senhora?'],
          ['Od kod ste?', 'De onde o senhor é?'],
        ],
      },
    ],
    pitfalls: ['Usar o plural para duas pessoas: para “nós dois”, o certo é “midva sva”, não “mi smo”.', 'Tratar um desconhecido por “ti”: soa íntimo demais. Use “vi”.'],
    quiz: [
      { question: 'Complete: “___ iz Curitibe.” (Eu sou de Curitiba.)', options: ['Sem', 'Je', 'Si'], answer: 'Sem', explanation: '“Sem” é a forma de “biti” para “jaz”.' },
      { question: 'Como se diz “nós dois somos amigos”?', options: ['Midva sva prijatelja.', 'Mi smo prijatelj.', 'Jaz sem prijatelja.'], answer: 'Midva sva prijatelja.', explanation: 'Para duas pessoas, o esloveno usa o dual: “midva sva”.' },
    ],
  },
  {
    id: 'sl-g3',
    level: 'A1.2',
    title: 'O gênero dos substantivos e o possessivo',
    emoji: '👪',
    summary: 'Masculino, feminino e neutro, quase sempre visíveis na terminação, e “moj / moja / moje”.',
    sections: [
      {
        text: 'A última letra costuma mostrar o gênero: consoante → masculino, -a → feminino, -o ou -e → neutro. O possessivo e o adjetivo concordam com o substantivo.',
        table: {
          head: ['Gênero', 'Terminação', 'Exemplo com “meu”'],
          rows: [
            ['masculino', 'consoante', 'moj brat, moj kruh'],
            ['feminino', '-a', 'moja hiša, moja sestra'],
            ['neutro', '-o, -e', 'moje mesto, moje ime'],
          ],
        },
        examples: [
          ['Moja hiša je majhna.', 'A minha casa é pequena.'],
          ['Moj oče je iz Ljubljane.', 'O meu pai é de Liubliana.'],
        ],
      },
    ],
    pitfalls: ['“Oče” (pai) termina em -e mas é masculino: “moj oče”.', '“Mačka” (gato) é feminino: “mačka je črna”.'],
    quiz: [
      { question: 'Qual é o gênero de “mleko” (leite)?', options: ['neutro', 'masculino', 'feminino'], answer: 'neutro', explanation: 'Palavras terminadas em -o costumam ser neutras.' },
      { question: 'Como se diz “o meu pai”?', options: ['moj oče', 'moja oče', 'moje oče'], answer: 'moj oče', explanation: '“Oče” é masculino, apesar do -e no fim.' },
    ],
  },
  {
    id: 'sl-g4',
    level: 'A1.2',
    title: 'O verbo imeti e a negação',
    emoji: '🚫',
    summary: '“Imeti” (ter) no presente e a negação: “ne” antes do verbo, com “nimam” e “nisem” como formas próprias.',
    sections: [
      {
        text: 'Para negar, “ne” vem antes do verbo: “ne vem” (não sei). “Imeti” e “biti” têm negação própria, numa palavra só: “nimam”, “nisem”. Depois de um verbo negado, o objeto vai para o genitivo: “imam sestro” → “nimam sestre”.',
        table: {
          head: ['Pronome', 'imeti', 'negativo'],
          rows: [
            ['jaz', 'imam', 'nimam'],
            ['ti', 'imaš', 'nimaš'],
            ['on / ona', 'ima', 'nima'],
            ['mi', 'imamo', 'nimamo'],
            ['vi', 'imate', 'nimate'],
            ['oni', 'imajo', 'nimajo'],
          ],
        },
        examples: [
          ['Imam sestro.', 'Tenho uma irmã.'],
          ['Nimam brata.', 'Não tenho irmão.'],
          ['Nisem iz Maribora.', 'Não sou de Maribor.'],
        ],
      },
    ],
    pitfalls: ['Dizer “ne imam”: o certo é “nimam”.', 'Dizer “ne sem”: o certo é “nisem”.'],
    quiz: [
      { question: 'Como se diz “eu não tenho irmão”?', options: ['Nimam brata.', 'Ne imam brata.', 'Imam ne brata.'], answer: 'Nimam brata.', explanation: 'A negação de “imam” é uma palavra só: “nimam”.' },
      { question: 'Complete: “On ___ sestro.” (Ele tem uma irmã.)', options: ['ima', 'imam', 'imajo'], answer: 'ima', explanation: '“Ima” é a forma de “imeti” para on / ona.' },
    ],
  },
  {
    id: 'sl-g5',
    level: 'A2.1',
    title: 'O futuro: “bom” + particípio em “-l”',
    emoji: '🔮',
    summary: 'O esloveno não tem futuro numa palavra só: usa “bom/boš/bo...” (futuro de “biti”) mais o mesmo particípio em “-l” usado no passado.',
    sections: [
      {
        text: 'Diferente de outras línguas eslavas, o esloveno forma o futuro com o futuro de “biti” (bom, boš, bo...) seguido do particípio em “-l”, não do infinitivo. O particípio concorda em gênero com quem fala: “-l” no masculino, “-la” no feminino, “-lo” no neutro.',
        table: {
          head: ['Pronome', 'biti (futuro)', 'kupiti → particípio'],
          rows: [
            ['jaz', 'bom', 'kupil / kupila'],
            ['ti', 'boš', 'kupil / kupila'],
            ['on / ona', 'bo', 'kupil / kupila'],
            ['mi', 'bomo', 'kupili / kupile'],
            ['vi', 'boste', 'kupili / kupile'],
            ['oni', 'bodo', 'kupili / kupile'],
          ],
        },
        examples: [
          ['Jutri bom kupil kruh.', 'Amanhã vou comprar pão. (fala um homem)'],
          ['Jutri bom kupila kruh.', 'Amanhã vou comprar pão. (fala uma mulher)'],
          ['Ona bo kupila mleko.', 'Ela vai comprar leite.'],
        ],
      },
    ],
    pitfalls: [
      'Usar o infinitivo depois de “bom” (como em outras línguas eslavas): o esloveno usa o particípio em “-l”, não o infinitivo — “bom kupil”, não “bom kupiti”.',
      'Esquecer a concordância de gênero do particípio: um homem diz “bom kupil”, uma mulher diz “bom kupila”.',
    ],
    quiz: [
      { question: 'Como uma mulher diz “eu vou comprar” (kupiti)?', options: ['bom kupila', 'bom kupil', 'bom kupiti'], answer: 'bom kupila', explanation: 'O particípio concorda em gênero: feminino é “kupila”.' },
      { question: 'O que vem depois de “bom/boš/bo” no futuro esloveno?', options: ['o particípio em “-l”', 'o infinitivo', 'nada, o verbo já está em “bom”'], answer: 'o particípio em “-l”', explanation: 'O esloveno não tem futuro sintético: usa sempre “bom” + particípio.' },
    ],
  },
  {
    id: 'sl-g6',
    level: 'A2.1',
    title: 'O pretérito: “sem” + o mesmo particípio',
    emoji: '⏳',
    summary: 'O passado do dia a dia usa o presente de “biti” (sem, si, je...) com o mesmo particípio em “-l” do futuro — só o auxiliar muda.',
    sections: [
      {
        text: 'Assim como “bom” no futuro, “sem/si/je...” não pode abrir a frase: o particípio vem primeiro. A boa notícia é que o particípio é o mesmo dos dois tempos — só muda o auxiliar: “bom” no futuro, “sem” no pretérito.',
        table: {
          head: ['Pronome', 'biti (presente)', 'kupiti → particípio'],
          rows: [
            ['jaz', 'sem', 'kupil / kupila'],
            ['ti', 'si', 'kupil / kupila'],
            ['on / ona', 'je', 'kupil / kupila'],
            ['mi', 'smo', 'kupili / kupile'],
            ['vi', 'ste', 'kupili / kupile'],
            ['oni', 'so', 'kupili / kupile'],
          ],
        },
        examples: [
          ['Kupil sem kruh.', 'Eu comprei pão. (fala um homem)'],
          ['Kupila sem kruh.', 'Eu comprei pão. (fala uma mulher)'],
          ['Kupili smo kruh.', 'Nós compramos pão.'],
        ],
      },
    ],
    pitfalls: [
      'Começar a frase com “sem/si/je”: assim como “bom” no futuro, o particípio vem primeiro — “Kupil sem”, não “Sem kupil”.',
      'Esquecer a concordância de gênero do particípio no pretérito, igual no futuro.',
    ],
    quiz: [
      { question: 'Como uma mulher diz “eu comprei”?', options: ['Kupila sem.', 'Kupil sem.', 'Kupim sem.'], answer: 'Kupila sem.', explanation: 'O particípio concorda em gênero: feminino é “kupila”.' },
      { question: 'O futuro e o pretérito eslovenos compartilham o quê?', options: ['o particípio em “-l”', 'o infinitivo', 'o mesmo auxiliar'], answer: 'o particípio em “-l”', explanation: 'Só o auxiliar muda: “bom” no futuro, “sem” no pretérito — o particípio é igual.' },
    ],
  },
  {
    id: 'sl-g7',
    level: 'A2.2',
    title: 'O dual: quando são exatamente dois',
    emoji: '✌️',
    summary: 'Além de singular e plural, o esloveno tem o dual: uma forma própria para exatamente duas pessoas ou coisas, com terminações só dele.',
    sections: [
      {
        text: 'O dual aparece em substantivos, adjetivos e verbos sempre que se fala de exatamente duas coisas — comum com partes do corpo que vêm em par, como “roka” (mão). As terminações do dual são diferentes das do plural.',
        table: {
          head: ['Caso', 'Singular', 'Dual', 'Plural'],
          rows: [
            ['nominativo', 'roka', 'roki', 'roke'],
            ['acusativo', 'roko', 'roki', 'roke'],
            ['instrumental', 'roko', 'rokama', 'rokami'],
          ],
        },
        examples: [
          ['Imam dve roki.', 'Eu tenho duas mãos.'],
          ['Midva sva prijatelja.', 'Nós dois somos amigos.'],
          ['Delam z rokama.', 'Eu trabalho com as mãos. (as duas, no dual)'],
        ],
      },
    ],
    pitfalls: [
      'Usar o plural para falar de exatamente duas coisas: “duas mãos” é “dve roki” (dual), não “dve roke” (que soa como o plural comum, para três ou mais).',
      'Confundir o instrumental dual com o plural: “rokama” (as duas mãos) é diferente de “rokami” (as mãos, três ou mais).',
    ],
    quiz: [
      { question: 'Como se diz “eu tenho duas mãos”?', options: ['Imam dve roki.', 'Imam dve roke.', 'Imam dve rok.'], answer: 'Imam dve roki.', explanation: 'Com exatamente duas coisas, o esloveno usa o dual: “roki”, não o plural “roke”.' },
      { question: 'Qual é o instrumental dual de “roka”?', options: ['rokama', 'rokami', 'roko'], answer: 'rokama', explanation: 'O dual tem terminações próprias, diferentes do plural (“rokami”).' },
    ],
  },
];
