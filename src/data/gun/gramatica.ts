import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do guarani mbyá — por enquanto só A1.1 e A1.2 (pacote incompleto). Traços
 * conferidos especificamente para o mbyá (não copiados do guarani paraguaio nem do nheengatu):
 * Wikipédia em inglês («Mbyá Guaraní language», citando Guillaume Thomas e Robert A. Dooley),
 * Wikipédia em português («Língua guarani mbyá»), o Wiktionary em inglês (categoria «Mbya Guarani»,
 * citando Dooley 2016) e Sérgio Florentino da Silva, «O Sistema De Contagem Guarani» (REVEMAT,
 * UFSC, 2018), sobre as aldeias mbyá Itaty/Morro dos Cavalos e M'Biguaçu (SC).
 */
export const GRAMMAR_GUN: GrammarTopic[] = [
  {
    id: 'gun-g1',
    level: 'A1.1',
    title: 'Vogais nasais, puso e o som do x',
    emoji: '🔤',
    summary: 'O guarani mbyá tem doze vogais (seis orais e seis nasais), uma pausa na garganta (puso) e o som “x”, parecido com “ch”/“sh”.',
    sections: [
      {
        text: 'O mbyá tem 12 fonemas vocálicos: seis orais e seis nasais — a nasalidade muda o som da vogal inteira, não é só um acento. O apóstrofo (chamado puso) marca uma pausa curta na garganta (uma oclusiva glotal), um som próprio da língua, não um sinal de pontuação: “ha\'e” (ele, ela) e “tapi\'i” (anta) soariam diferente sem ele. A letra “x” representa um som parecido com o “ch” do francês ou o “sh” do inglês, como em “xee” (eu) e “xamoi” (avô). O acento de intensidade cai quase sempre na última sílaba (oxítona).',
        table: {
          head: ['Letra', 'Som', 'Exemplo'],
          rows: [
            ['ã, ẽ, ĩ, õ, ũ', 'vogal nasal (sai pelo nariz)', 'xee nhandeayvu (minha língua)'],
            ['\' (puso)', 'pausa curta na garganta', 'ha\'e (ele, ela), ka\'i (macaco)'],
            ['x', 'como “ch”/“sh”', 'xee (eu), xondaro (guardião)'],
            ['nh', 'como o “nh” de “ninho”', 'nhe\'e (espírito), nhanderu (Deus)'],
            ['y', 'vogal própria do guarani, entre “u” e “i”', 'y (água), yvy (terra)'],
          ],
        },
        examples: [
          ['Aguyjevete!', 'Bem-vindo(a)! / Muito obrigado(a)!'],
          ['Nhandeayvu.', 'Nossa língua.'],
        ],
      },
    ],
    pitfalls: [
      'Ignorar o puso (\'): sem ele, palavras como “ha\'e” e “tapi\'i” perdem a pausa que as distingue.',
      'Ler o “x” como a letra “x” do português (de “táxi” ou “exame”): no mbyá ele sempre soa como “ch”/“sh”.',
    ],
    quiz: [
      {
        question: 'Quantos fonemas vocálicos tem o guarani mbyá, segundo a linguística?',
        options: ['12 (seis orais e seis nasais)', '5, como o português', '20'],
        answer: '12 (seis orais e seis nasais)',
        explanation: 'A língua distingue sistematicamente vogais orais e nasais, o que dobra o número de vogais em relação ao português.',
      },
      {
        question: 'Como soa a letra “x” no guarani mbyá?',
        options: ['Como “ch”/“sh”', 'Como o “x” de “táxi”', 'É muda'],
        answer: 'Como “ch”/“sh”',
        explanation: 'Palavras como “xee” (eu) e “xamoi” (avô) usam esse som, diferente do “x” do português.',
      },
    ],
  },
  {
    id: 'gun-g2',
    level: 'A1.1',
    title: 'Pronomes e frases sem o verbo “ser”',
    emoji: '🙋',
    summary: 'Seis pronomes pessoais (com um “nós” que inclui quem ouve e outro que não inclui) e frases que dispensam um verbo “ser”.',
    sections: [
      {
        text: 'O guarani mbyá não tem um verbo equivalente a “ser”: duas palavras lado a lado já formam uma frase completa, como em “xee kunha” (eu [sou] mulher). Um exemplo documentado pelos linguistas mostra o mesmo padrão com um adjetivo: “kunha ipuku” (lit. “mulher ela-alta”) equivale a “a mulher é alta”. Os pronomes distinguem dois tipos de “nós”, uma marca que o português não faz: “nhande” inclui a pessoa com quem se fala, e “ore” não inclui.',
        table: {
          head: ['Pronome', 'Tradução'],
          rows: [
            ['xee', 'eu'],
            ['ndee', 'tu, você'],
            ['ha\'e', 'ele, ela'],
            ['nhande', 'nós (incluindo quem ouve)'],
            ['ore', 'nós (sem incluir quem ouve)'],
            ['peẽ', 'vocês'],
            ['ha\'e kuery', 'eles, elas'],
          ],
        },
        examples: [
          ['Xee kunha.', 'Eu sou mulher.'],
          ['Ha\'e xamoi.', 'Ele é o ancião.'],
          ['Nhande reko.', 'Nosso jeito de ser (de todos nós).'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma palavra para “ser”/“estar”: no mbyá a frase se monta só com as duas palavras, sem verbo de ligação.',
      'Confundir “nhande” (nós incluindo quem ouve) com “ore” (nós sem incluir quem ouve): trocar um pelo outro muda quem está incluído na frase.',
    ],
    quiz: [
      { question: 'Como se diz “eu sou mulher”?', options: ['Xee kunha.', 'Xee ha\'e kunha.', 'Kunha xee ikatu.'], answer: 'Xee kunha.', explanation: 'O mbyá não usa verbo “ser”: pronome e predicado ficam lado a lado.' },
      { question: '“Nhande” é usado quando…', options: ['quem ouve está incluído no “nós”', 'quem ouve não está incluído', 'só se fala de uma pessoa'], answer: 'quem ouve está incluído no “nós”', explanation: 'Para excluir quem ouve, usa-se “ore”.' },
    ],
  },
  {
    id: 'gun-g3',
    level: 'A1.2',
    title: 'Kova\'e e o adjetivo depois do nome',
    emoji: '👉',
    summary: 'O demonstrativo “kova\'e” (este, esta, isto) aponta para algo, e o adjetivo vem sempre depois do substantivo que descreve.',
    sections: [
      {
        text: 'Para apontar ou apresentar algo, o mbyá usa o demonstrativo “kova\'e” antes do nome: um exemplo registrado pelos linguistas é “kova\'e oo porã” (esta casa bonita). Repare na ordem: primeiro o demonstrativo, depois o substantivo, e só então o adjetivo — nunca o adjetivo antes do nome, como às vezes acontece em português (“uma bonita casa”).',
        table: {
          head: ['Ordem', 'Exemplo', 'Tradução'],
          rows: [
            ['kova\'e + substantivo', 'Kova\'e tekoa.', 'Esta é a aldeia.'],
            ['kova\'e + substantivo + adjetivo', 'Kova\'e tekoa porã.', 'Esta aldeia é bonita.'],
            ['substantivo + adjetivo (sem demonstrativo)', 'Jagua guaxu.', 'O cachorro é grande.'],
          ],
        },
        examples: [
          ['Kova\'e y.', 'Isto é a água.'],
          ['Yva pytã.', 'O céu é vermelho.'],
        ],
      },
    ],
    pitfalls: [
      'Colocar o adjetivo antes do substantivo, como em português: no mbyá ele vem sempre depois.',
      'Usar “kova\'e” sozinho esperando que ele já signifique “é”: ele só aponta (“este/esta/isto”), quem liga a frase é a ordem das palavras.',
    ],
    quiz: [
      { question: 'Qual é a ordem certa para “esta aldeia bonita”?', options: ['Kova\'e tekoa porã.', 'Kova\'e porã tekoa.', 'Porã kova\'e tekoa.'], answer: 'Kova\'e tekoa porã.', explanation: 'Demonstrativo, depois substantivo, depois adjetivo — essa é a ordem documentada para o mbyá.' },
      { question: 'O que “kova\'e” quer dizer?', options: ['Este, esta, isto', 'Muito', 'Sim'], answer: 'Este, esta, isto', explanation: 'É o demonstrativo usado para apontar algo perto de quem fala.' },
    ],
  },
  {
    id: 'gun-g4',
    level: 'A1.2',
    title: 'Contar de cinco em cinco: peteĩ, mokoĩ, mboapy, irundy',
    emoji: '✋',
    summary: 'A contagem tradicional mbyá tem como base o número cinco e organiza os números em pares.',
    sections: [
      {
        text: 'Uma pesquisa de campo nas aldeias mbyá Itaty (Morro dos Cavalos) e M\'Biguaçu, em Santa Catarina, registrou que a contagem tradicional é feita de cinco em cinco — o número de dedos de uma mão — e que, dentro de cada grupo de cinco, os mbyá contam formando pares, porque várias coisas do mundo vêm aos pares: o sol e a lua, o homem e a mulher, as duas orelhas. Por isso “peteĩ” (um) significa literalmente “um só, sem par”, “mokoĩ” (dois) é “um par”, “mboapy” (três) é o “início de um novo par” e “irundy” (quatro) é “dois pares”. O número cinco fecha a contagem e começa um novo grupo de cinco.',
        table: {
          head: ['Número', 'Palavra', 'Sentido literal'],
          rows: [
            ['1', 'peteĩ', 'um só, sem par'],
            ['2', 'mokoĩ', 'um par'],
            ['3', 'mboapy', 'início de um novo par'],
            ['4', 'irundy', 'dois pares'],
          ],
        },
        examples: [
          ['Peteĩ jagua.', 'Um cachorro.'],
          ['Mokoĩ ava.', 'Dois homens.'],
          ['Irundy mitã.', 'Quatro crianças.'],
        ],
      },
    ],
    pitfalls: [
      'Achar que a lógica da contagem mbyá é igual à do guarani paraguaio: no dia a dia do Paraguai, a maioria usa os números do espanhol a partir do quatro; a contagem tradicional mbyá, em vez disso, é pensada em pares dentro de grupos de cinco.',
      'Traduzir “mboapy” só como “três”, sem perceber que a própria palavra guarda a ideia de “começar um novo par”.',
    ],
    quiz: [
      { question: 'Em que número a contagem tradicional mbyá é baseada?', options: ['Cinco', 'Dez', 'Vinte'], answer: 'Cinco', explanation: 'A base cinco vem do número de dedos de uma mão, segundo a pesquisa de campo nas aldeias Itaty e M\'Biguaçu (SC).' },
      { question: 'O que “mokoĩ” significa literalmente?', options: ['Um par', 'Sem par', 'Dois pares'], answer: 'Um par', explanation: '“Mokoĩ” (dois) é entendido como a formação do primeiro par dentro do grupo de cinco.' },
    ],
  },
];
