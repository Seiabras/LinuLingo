import type { GrammarTopic } from '../types';

/** Tópicos de gramática do guarani paraguaio — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_GN: GrammarTopic[] = [
  {
    id: 'gn-g1',
    level: 'A1.1',
    title: 'Vogais nasais e o puso (\')',
    emoji: '🔤',
    summary: 'O guarani usa o alfabeto latino mais vogais nasais (ã, ẽ, ĩ, õ, ũ, ỹ), a vogal y e o apóstrofo do puso.',
    sections: [
      {
        text: 'O guarani tem um traço raro entre as línguas do mundo: a nasalidade “contamina” a palavra inteira a partir de uma sílaba nasal, passando por cima de consoantes sem som (surdas) até esbarrar numa sílaba oral com acento. Por isso “avañe\'ẽ” soa nasalado do meio para o fim. O puso (\') marca uma pausa curtinha na garganta, a oclusiva glotal, que é um som próprio, não um sinal de pontuação: “mba\'e” (coisa) e “mbae” seriam palavras diferentes se “mbae” existisse.',
        table: {
          head: ['Letra', 'Som', 'Exemplo'],
          rows: [
            ['ã, ẽ, ĩ, õ, ũ, ỹ', 'vogal nasal (sai pelo nariz)', 'avañe\'ẽ (guarani), kuarahy (sol, oral)'],
            ['y', 'vogal só do guarani, entre “u” e “i”', 'y (água)'],
            ['\' (puso)', 'pausa curta na garganta', 'mba\'e (coisa), y\'u (beber água)'],
            ['g̃', 'o “g” nasalizado', 'poucas palavras, como g̃uahẽ (chegar)'],
          ],
        },
        examples: [
          ['Avañe\'ẽ', 'A língua guarani'],
          ['Mba\'éichapa?', 'Oi, como vai?'],
        ],
      },
    ],
    pitfalls: [
      'Ignorar o puso (\'): “mba\'e” sem a pausa muda a palavra e dificulta o entendimento.',
      'Ler as vogais com til (ã, ẽ…) como se fossem só um acento de intensidade: elas mudam o som da vogal inteira, nasalando-a.',
    ],
    quiz: [
      { question: 'O que marca o apóstrofo (\') em guarani?', options: ['Uma pausa curta na garganta (oclusiva glotal)', 'Só separa sílabas, sem som', 'Indica vogal longa'], answer: 'Uma pausa curta na garganta (oclusiva glotal)', explanation: 'O puso é um som consonantal próprio do guarani, chamado de oclusiva glotal pelos linguistas.' },
      { question: 'O que quer dizer “avañe\'ẽ”?', options: ['A língua guarani', 'Boa tarde', 'Muito obrigado'], answer: 'A língua guarani', explanation: '“Avañe\'ẽ” é formado por “ava” (gente, povo) + “ñe\'ẽ” (língua): “a língua do povo”.' },
    ],
  },
  {
    id: 'gn-g2',
    level: 'A1.1',
    title: 'Pronomes e verbos ativos',
    emoji: '🙋',
    summary: 'Seis pronomes pessoais e um jeito de conjugar verbos de ação grudando um pedacinho (prefixo) no começo da palavra.',
    sections: [
      {
        text: 'Os pronomes do guarani distinguem “nós com quem ouve” (ñande) de “nós sem quem ouve” (ore) — um traço chamado inclusivo/exclusivo, que o português não tem. Nos verbos de ação (chamados pelos gramáticos de verbos “ativos”), a pessoa não aparece numa terminação como em português (fal-o, fal-as): ela gruda como prefixo no começo do verbo.',
        table: {
          head: ['Pronome', 'Tradução', 'Prefixo do verbo', 'karu (comer)'],
          rows: [
            ['che', 'eu', 'a-', 'akaru'],
            ['nde', 'tu, você', 're-', 'rekaru'],
            ['ha\'e', 'ele, ela', 'o-', 'okaru'],
            ['ñande', 'nós (com quem ouve)', 'ja-/ña-', 'jakaru'],
            ['ore', 'nós (sem quem ouve)', 'ro-', 'rokaru'],
            ['pende', 'vocês', 'pe-', 'pekaru'],
            ['ha\'ekuéra', 'eles, elas', 'o-', 'okaru'],
          ],
        },
        examples: [
          ['Che aguatase.', 'Eu quero andar (lit. eu ando-quero).'],
          ['Ore roiko Paraguáipe.', 'Nós (sem você) moramos no Paraguai.'],
        ],
      },
    ],
    pitfalls: [
      'Confundir “ñande” (nós, incluindo quem ouve) com “ore” (nós, sem incluir quem ouve): usar o errado muda quem está convidado na frase.',
      'Procurar uma terminação de verbo como em português: em guarani o pedacinho da pessoa vem antes, não depois.',
    ],
    quiz: [
      { question: 'Como se diz “eu como”?', options: ['Akaru', 'Okaru', 'Rekaru'], answer: 'Akaru', explanation: 'O prefixo de 1ª pessoa singular nos verbos ativos é “a-”.' },
      { question: '“Ore roiko” é usado quando…', options: ['quem ouve não está incluído no “nós”', 'quem ouve está incluído', 'só se fala de uma pessoa'], answer: 'quem ouve não está incluído no “nós”', explanation: '“Ore” é o “nós” exclusivo; para incluir quem ouve, usa-se “ñande”.' },
    ],
  },
  {
    id: 'gn-g3',
    level: 'A1.2',
    title: 'Posse ativa e inativa: che, nde, i-/h-',
    emoji: '👪',
    summary: 'Nomes de parentesco e partes do corpo pedem sempre um dono, e adjetivos se comportam como um verbo “ser” com prefixo de pessoa.',
    sections: [
      {
        text: 'Muitos substantivos do guarani (parentesco, partes do corpo) não aparecem “soltos” na fala comum: pedem um dono marcado por um prefixo. É a chamada posse inativa, com os mesmos pronomes che/nde/ha\'e. Além disso, nomes que começam com vogal costumam trocar essa vogal por “r-” quando têm dono (óga → róga). Os adjetivos funcionam do mesmo jeito, como se fossem um verbo “ser” pequenininho: ganham o prefixo da pessoa.',
        table: {
          head: ['', 'téra (nome)', 'óga (casa)', 'vai (ruim)'],
          rows: [
            ['eu / minha', 'che réra', 'che róga', 'che vai (eu sou ruim)'],
            ['tu / tua', 'nde réra', 'nde róga', 'nde vai'],
            ['ele / dele', 'héra', 'hóga', 'ivai (é ruim)'],
          ],
        },
        examples: [
          ['Che róga iporã chéve.', 'Eu gosto da minha casa (lit. minha casa é boa para mim).'],
          ['Mba\'éichapa nde réra?', 'Como é o seu nome?'],
        ],
      },
    ],
    pitfalls: [
      'Usar “téra”, “óga” sozinhos quando o sentido pede um dono: o natural é “che réra”, “che róga”, não “téra” solto.',
      'Esquecer o prefixo “i-” na 3ª pessoa dos adjetivos: “vai” sozinho soa incompleto; o comum é “ivai”.',
    ],
    quiz: [
      { question: 'Como se diz “meu nome”?', options: ['Che réra', 'Che téra', 'Réra che'], answer: 'Che réra', explanation: '“Téra” troca o t- por r- depois de “che”, “nde” e outros donos.' },
      { question: 'Como se diz “é ruim” (ele/ela)?', options: ['Ivai', 'Vai', 'Chevai'], answer: 'Ivai', explanation: 'A 3ª pessoa da posse/adjetivo inativo usa o prefixo “i-” antes de vogal.' },
    ],
  },
  {
    id: 'gn-g4',
    level: 'A1.2',
    title: 'Grudando pedacinhos: -pe, ndive, -se, -ta',
    emoji: '🧩',
    summary: 'O guarani é uma língua aglutinante: gruda posposições e sufixos no final das palavras, em vez de usar preposições soltas antes delas.',
    sections: [
      {
        text: 'Em vez de preposições como “em”, “para” ou “com” antes do nome (como em português), o guarani gruda posposições depois dele. “-pe” marca lugar (em, a) e “ndive” marca companhia (com). Outros pedacinhos grudam direto no verbo: “-se” depois do verbo quer dizer “querer fazer aquilo”, e “-ta” marca um futuro bem próximo (“vou já, já”).',
        table: {
          head: ['Pedacinho', 'Função', 'Exemplo'],
          rows: [
            ['-pe', 'em, a, no(a)', 'Paraguáipe (no Paraguai)'],
            ['ndive', 'com (alguém)', 'oréndive (com a gente)'],
            ['-se', 'querer fazer algo', 'aguatase (eu quero andar)'],
            ['-ta', 'futuro próximo', 'aporandúta (eu vou perguntar já)'],
          ],
        },
        examples: [
          ['Che ru oiko Paraguáipe.', 'Meu pai mora no Paraguai.'],
          ['Aporandúta ndéve peteĩ mba\'e.', 'Vou te perguntar uma coisa.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma palavra solta para “em” ou “no”: no guarani ela gruda no final do nome, como “-pe”.',
      'Esquecer que “-se” muda o sentido do verbo inteiro: “aguata” (eu ando) vira “aguatase” (eu quero andar).',
    ],
    quiz: [
      { question: 'Como se diz “no Paraguai”?', options: ['Paraguáipe', 'Pe Paraguái', 'Paraguái ndive'], answer: 'Paraguáipe', explanation: 'A posposição “-pe” gruda depois do nome do lugar.' },
      { question: 'O que “-se” acrescenta a um verbo?', options: ['A ideia de “querer fazer aquilo”', 'O plural', 'O passado'], answer: 'A ideia de “querer fazer aquilo”', explanation: '“Aguata” (andar) + “-se” = “aguatase” (querer andar).' },
    ],
  },
];
