import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do kaiowá — por enquanto só A1.1 e A1.2 (pacote incompleto). Traços
 * conferidos especificamente para o kaiowá (não copiados do guarani paraguaio nem do mbyá):
 * pt.wikipedia.org/wiki/Língua_caiouá (fonologia, ortografia, pronomes, substantivos, numerais —
 * citando majoritariamente Valéria Faria Cardoso, «Aspectos Morfossintáticos da Língua Kaiowá»,
 * tese de doutorado, Unicamp, 2008) e a própria tese de Cardoso, lida no original (305 p., texto
 * completo em etnolinguistica.wdfiles.com/local--files/tese:cardoso-2008/).
 */
export const GRAMMAR_KGK: GrammarTopic[] = [
  {
    id: 'kgk-g1',
    level: 'A1.1',
    title: 'Fonemas e grafemas do kaiowá',
    emoji: '🔤',
    summary: 'O kaiowá tem 15 fonemas consonantais, seis vogais orais e seis nasais, e uma pausa na garganta própria da língua, marcada por apóstrofo.',
    sections: [
      {
        text: 'O kaiowá distingue seis vogais orais (a, e, i, o, u, y) das mesmas seis vogais nasalizadas (ã, ẽ, ĩ, õ, ũ, ỹ) — a nasalidade muda o som da vogal inteira, não é só um sinal de pontuação. A letra “y” representa uma vogal própria do guarani, sem equivalente no português, entre o “u” e o “i”. O apóstrofo marca uma pausa curta na garganta (uma oclusiva glotal): “ha\'e” (ele, ela) soaria diferente sem ele. A letra “x” soa como o “ch” do francês ou o “sh” do inglês, “nh” soa como o “nh” de “ninho”, e o acento tônico cai quase sempre na última sílaba (por isso só se marca quando cai em outro lugar, como em “óga”, casa).',
        table: {
          head: ['Grafema', 'Som', 'Exemplo'],
          rows: [
            ['y', 'vogal própria do guarani, entre “u” e “i”', 'y (água), ywy (terra)'],
            ['ã, ẽ, ĩ, õ, ũ, ỹ', 'vogal nasal (sai pelo nariz)', 'nhãne (nós), peteĩ (um)'],
            ['\' (oclusiva glotal)', 'pausa curta na garganta', 'ha\'e (ele, ela), a\'y (filho)'],
            ['x', 'como “ch”/“sh”', 'xe (eu)'],
            ['nh', 'como o “nh” de “ninho”', 'nhãne (nós, incluindo quem ouve)'],
            ['kw', 'como “qu” de “quando”', 'kwarahy (sol), kwaa (saber)'],
          ],
        },
        examples: [
          ['Aguyjevete!', 'Muito obrigado(a)!'],
          ['Xe reko.', 'Meu jeito de ser.'],
        ],
      },
    ],
    pitfalls: [
      'Ignorar o apóstrofo: sem ele, palavras como “ha\'e” e “a\'y” perdem a pausa que as distingue.',
      'Ler o “x” como a letra “x” do português (de “táxi” ou “exame”): no kaiowá ele sempre soa como “ch”/“sh”.',
    ],
    quiz: [
      {
        question: 'O que o apóstrofo (\') marca no kaiowá?',
        options: ['Uma pausa curta na garganta (oclusiva glotal)', 'Que a vogal anterior é nasal', 'Nada: é só decoração'],
        answer: 'Uma pausa curta na garganta (oclusiva glotal)',
        explanation: 'Palavras como “ha\'e” (ele, ela) e “a\'y” (filho) usam essa pausa como parte do som da palavra.',
      },
      {
        question: 'Como soa a letra “x” no kaiowá?',
        options: ['Como “ch”/“sh”', 'Como o “x” de “táxi”', 'É muda'],
        answer: 'Como “ch”/“sh”',
        explanation: 'A palavra “xe” (eu) usa esse som, diferente do “x” do português.',
      },
    ],
  },
  {
    id: 'kgk-g2',
    level: 'A1.1',
    title: 'Pronomes: nhãne × ore',
    emoji: '🙋',
    summary: 'Sete pronomes pessoais, com um “nós” que inclui quem ouve (nhãne) e outro que não inclui (ore) — e frases que dispensam um verbo “ser” na 3ª pessoa.',
    sections: [
      {
        text: 'Os pronomes do kaiowá distinguem duas formas de “nós”, uma marca que o português não tem: “nhãne” inclui a pessoa com quem se fala, e “ore” não inclui. Para descrever algo ou alguém na 3ª pessoa, duas palavras lado a lado já formam uma frase completa, sem precisar de um verbo equivalente a “ser”: “óga porã” já é “a casa é boa/bonita”. O kaiowá tem verbos que servem de cópula em outros contextos (“iko”, ser/estar/ter; “-ĩ”, estar/haver), mas a descrição simples de uma 3ª pessoa não exige nenhum deles.',
        table: {
          head: ['Pronome', 'Tradução'],
          rows: [
            ['xe', 'eu'],
            ['ne', 'tu, você'],
            ['ha\'e', 'ele, ela'],
            ['nhãne', 'nós (incluindo quem ouve)'],
            ['ore', 'nós (sem incluir quem ouve)'],
            ['peẽ', 'vocês'],
            ['ha\'e kwery', 'eles, elas'],
          ],
        },
        examples: [
          ['Xe ava.', 'Eu sou gente (uma pessoa).'],
          ['Ha\'e karai.', 'Ele é um não indígena (branco).'],
          ['Nhãne reko.', 'Nosso jeito de ser (de todos nós, incluindo quem ouve).'],
        ],
      },
    ],
    pitfalls: [
      'Confundir “nhãne” (nós incluindo quem ouve) com “ore” (nós sem incluir quem ouve): trocar um pelo outro muda quem está incluído na frase.',
      'Procurar uma palavra para “ser”/“estar” numa descrição simples de 3ª pessoa: no kaiowá a frase se monta só com as duas palavras, sem verbo de ligação.',
    ],
    quiz: [
      { question: '“Nhãne” é usado quando…', options: ['quem ouve está incluído no “nós”', 'quem ouve não está incluído', 'só se fala de uma pessoa'], answer: 'quem ouve está incluído no “nós”', explanation: 'Para excluir quem ouve, usa-se “ore”.' },
      { question: 'Como se diz “a casa é boa” sem inventar um verbo “ser”?', options: ['Óga porã.', 'Óga ha\'e porã.', 'Porã óga iko.'], answer: 'Óga porã.', explanation: 'A 3ª pessoa não precisa de cópula: substantivo e adjetivo bastam, com o adjetivo depois.' },
    ],
  },
  {
    id: 'kgk-g3',
    level: 'A1.2',
    title: 'Sem artigos: demonstrativos e a ordem das palavras',
    emoji: '👉',
    summary: 'O kaiowá não tem artigos definidos ou indefinidos: demonstrativos como “ko” (este) marcam o que seria definido, o numeral vem antes do substantivo e o adjetivo vem depois.',
    sections: [
      {
        text: 'Diferente do português, o kaiowá não tem palavras separadas para “o/a/um/uma”: a definitude de um substantivo é indicada por demonstrativos ou simplesmente pelo contexto. Os demonstrativos distinguem a proximidade entre quem fala e quem ouve: “ko” aponta algo perto de quem fala, “upe” aponta algo perto de quem ouve, e “amõ” aponta algo distante dos dois. Quanto à ordem das palavras, o numeral vem sempre antes do substantivo que conta (“mokõi gua\'a”, duas araras), enquanto o adjetivo vem sempre depois do substantivo que descreve (“gua\'a pytã”, arara vermelha) — nunca ao contrário, como às vezes acontece em português (“uma bonita arara”).',
        table: {
          head: ['Palavra', 'Proximidade', 'Tradução'],
          rows: [
            ['ko', 'perto de quem fala', 'este, esta, isto'],
            ['upe', 'perto de quem ouve', 'esse, essa, isso'],
            ['amõ', 'distante dos dois', 'aquele(s), aquela(s), ali'],
          ],
        },
        examples: [
          ['Mokõi jaguarete.', 'Duas onças (numeral antes do substantivo).'],
          ['Gua\'a pytã.', 'Arara vermelha (adjetivo depois do substantivo).'],
          ['Óga pyahu.', 'Casa nova.'],
        ],
      },
    ],
    pitfalls: [
      'Procurar uma palavra para “o/a/um/uma”: o kaiowá não tem artigos; use um demonstrativo (ko, upe, amõ) só quando quiser apontar algo específico.',
      'Colocar o adjetivo antes do substantivo, como em português: no kaiowá ele vem sempre depois. O numeral, ao contrário, vem sempre antes.',
    ],
    quiz: [
      { question: 'Qual é a ordem certa para “três araras”?', options: ['Mbohapy gua\'a.', 'Gua\'a mbohapy.', 'Mbohapy porã gua\'a.'], answer: 'Mbohapy gua\'a.', explanation: 'O numeral vem sempre antes do substantivo no kaiowá.' },
      { question: 'O que “ko” significa?', options: ['Este, esta, isto (perto de quem fala)', 'Muito', 'Aquele, ali (longe dos dois)'], answer: 'Este, esta, isto (perto de quem fala)', explanation: 'Para algo distante de quem fala e de quem ouve, usa-se “amõ”.' },
    ],
  },
  {
    id: 'kgk-g4',
    level: 'A1.2',
    title: 'Tempo no substantivo: -kwe e -rã',
    emoji: '⏳',
    summary: 'Além dos verbos, os substantivos do kaiowá podem levar um sufixo de passado (-kwe) ou de futuro (-rã): uma “ex-casa” ou uma “futura casa” se dizem com uma só palavra.',
    sections: [
      {
        text: 'Um traço típico das línguas tupi-guarani, bem documentado para o kaiowá, é marcar tempo também nos substantivos, não só nos verbos. O sufixo “-kwe” (às vezes “-ngwe”) indica que algo já foi o que o substantivo diz, mas não é mais: “óga” (casa) vira “ógakwe” (“ex-casa”, uma casa que não existe mais como tal). O sufixo “-rã” indica que algo ainda vai ser: “mena” (esposo) vira “menarã” (“futuro esposo”, o noivo). É uma categoria chamada de “tempo nominal”, diferente do tempo verbal comum, e mostra que no kaiowá até um objeto ou uma relação de parentesco pode “ter” passado ou futuro.',
        table: {
          head: ['Sufixo', 'Sentido', 'Exemplo'],
          rows: [
            ['-kwe (~ -ngwe)', 'passado: já foi, não é mais', 'óga “casa” → ógakwe “ex-casa”'],
            ['-rã', 'futuro: ainda vai ser', 'mena “esposo” → menarã “futuro esposo”'],
          ],
        },
        examples: [
          ['Óga.', 'Casa (agora).'],
          ['Ógakwe.', 'Ex-casa (que já foi casa, não é mais).'],
          ['Menarã.', 'Futuro esposo (noivo).'],
        ],
      },
    ],
    pitfalls: [
      'Achar que só o verbo pode ser marcado para passado ou futuro: no kaiowá, o substantivo também leva esse sufixo, com um sentido próprio (“deixou de ser”/“ainda vai ser”), diferente do tempo verbal.',
      'Traduzir “-kwe” só como um “passado” qualquer: ele indica especificamente que algo deixou de ser o que o substantivo nomeia (uma ex-casa, um ex-marido), não uma ação passada.',
    ],
    quiz: [
      { question: 'O que o sufixo “-rã” indica num substantivo kaiowá?', options: ['Que algo ainda vai ser (futuro)', 'Que algo já foi e não é mais (passado)', 'Que o substantivo é plural'], answer: 'Que algo ainda vai ser (futuro)', explanation: '“Menarã” é o “futuro esposo”, alguém que ainda vai ser marido.' },
      { question: 'O sufixo “-kwe” se junta a…', options: ['substantivos, não só verbos', 'só a verbos', 'só a números'], answer: 'substantivos, não só verbos', explanation: 'É a chamada “tempo nominal”: um traço típico das línguas tupi-guarani, bem documentado no kaiowá.' },
    ],
  },
];
