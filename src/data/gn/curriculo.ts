import type { UnitSeed } from '../types';

/**
 * Trilha do guarani paraguaio: por enquanto só as duas unidades do nível A1 (o pacote está marcado
 * como incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_GN: UnitSeed[] = [
  {
    id: 'gn-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Mba\'éichapa! Ñepyrũ',
    emoji: '👋',
    card: {
      id: 'gn-c1',
      title: 'A língua que não morreu',
      emoji: '🇵🇾',
      history:
        'O guarani paraguaio (avañe\'ẽ, “a língua do ava”, do povo) é hoje falado por mais de 6,5 milhões de pessoas e é co-oficial com o espanhol no Paraguai desde a Constituição de 1992 — um caso raro na América: uma língua indígena com status igual ao do idioma colonial, falada pela maioria da população, inclusive por quem não tem ascendência indígena. No século XVII e XVIII, os jesuítas organizaram reduções (aldeamentos) na região e usaram o guarani como língua de evangelização e de ensino; o padre Antonio Ruiz de Montoya publicou em 1640 o “Tesoro de la lengua guaraní”, um dos primeiros grandes dicionários da língua. Hoje a Academia de la Lengua Guaraní, criada em 2013, cuida da gramática e da ortografia oficial — a mesma seguida aqui, a do guarani paraguaio padrão (diferente do guarani mbyá e de outras variedades faladas do lado brasileiro da fronteira).',
      culture_tip:
        'No Paraguai quase todo mundo fala as duas línguas misturadas no dia a dia, o “jopara” (literalmente “mistura”): uma frase pode começar em espanhol e terminar em guarani. Mesmo assim, “mba\'éichapa” (oi, como vai) e “aguyje” (obrigado) são ouvidos em guarani puro em qualquer conversa.',
      grammar_why:
        'O guarani não tem um verbo “ser” como o português: para dizer quem alguém é, basta pôr as duas palavras lado a lado. “Che Ana” já quer dizer “Eu sou Ana” (lit. “eu Ana”). O pronome “ha\'e” funciona como “ele, ela” e também como uma espécie de “é” para apontar algo: “Ha\'e che angirũ” (Ela é minha amiga).',
      grammar_examples: [
        ['Mba\'éichapa, Ana?', 'Oi, Ana, como vai?'],
        ['Che Ana.', 'Eu sou a Ana.'],
        ['Ha\'e che angirũ.', 'Ela é minha amiga.'],
        ['Heẽ, aguyje!', 'Sim, obrigado(a)!'],
      ],
      character_guide: [
        ['ã, ẽ, ĩ, õ, ũ, ỹ', 'vogal nasal: sai pelo nariz, como o “ã” de “irmã”', 'avañe\'ẽ (guarani), ára (dia)'],
        ['\' (puso)', 'uma pausa curta na garganta (oclusiva glotal), como entre as duas sílabas de “uh-oh”', 'mba\'e (coisa), y\'u (beber água)'],
        ['g̃', 'o “g” nasalizado, só existe em guarani', 'usado em poucas palavras, como g̃uahẽ (chegar)'],
        ['y', 'uma vogal só do guarani, entre o “u” e o “i”', 'y (água)'],
        ['mb, nd, ng', 'consoantes “pré-nasalizadas”: soam quase como “mb” de “mboi” dito de um fôlego só', 'mbarakaja (gato), angirũ (amigo)'],
      ],
    },
    lessons: [
      {
        id: 'gn-u1-l1',
        title: 'Mba\'éichapa, heẽ, nahániri',
        kind: 'licao',
        words: ['mba\'éichapa', 'heẽ', 'nahániri', 'aguyje', 'ikatu', 'ha'],
        cloze: [
          { sentence: '___, Carlos!', answer: 'Mba\'éichapa', options: ['Mba\'éichapa', 'Aguyje', 'Nahániri'], translation: 'Oi, Carlos!' },
          { sentence: 'Ikatúpa reike? — ___, aguyje.', answer: 'Heẽ', options: ['Heẽ', 'Nahániri', 'Ha'], translation: 'Posso entrar? — Sim, obrigado(a).' },
          { sentence: '___, aguyje.', answer: 'Nahániri', options: ['Nahániri', 'Heẽ', 'Aguyje'], translation: 'Não, obrigado(a).' },
        ],
        voice: {
          bot: 'Mba\'éichapa?',
          botTranslation: 'Oi, como vai?',
          expected: ['Heẽ, aguyje! Ha nde?', 'heẽ', 'aguyje'],
          hint: 'Responda com “Heẽ, aguyje!” e devolva a pergunta: “Ha nde?” (E você?).',
        },
        communityPrompt: 'Escreva uma saudação curta em guarani: “Mba\'éichapa”, uma resposta com “Heẽ” ou “Nahániri”, e “Aguyje”.',
      },
      {
        id: 'gn-u1-l2',
        title: 'Che, nde, ha\'e, téra',
        kind: 'licao',
        words: ['che', 'nde', 'ha\'e', 'téra', 'mitã', 'angirũ'],
        cloze: [
          { sentence: '___ Ana.', answer: 'Che', options: ['Che', 'Nde', 'Ha\'e'], translation: 'Eu sou a Ana.' },
          { sentence: 'Mba\'éichapa ___ réra?', answer: 'nde', options: ['nde', 'che', 'ha\'e'], translation: 'Como é o seu nome?' },
          { sentence: '___ che angirũ.', answer: 'Ha\'e', options: ['Ha\'e', 'Che', 'Nde'], translation: 'Ele é meu amigo.' },
        ],
        voice: {
          bot: 'Mba\'éichapa nde réra?',
          botTranslation: 'Como é o seu nome?',
          expected: ['Che réra Ana.', 'che réra', 'mba\'éichapa'],
          hint: 'Diga o seu nome com “Che réra…” (lit. “meu nome (é)…”).',
        },
        communityPrompt: 'Apresente-se em guarani: diga o seu nome com “Che réra…” e pergunte o nome de alguém com “Mba\'éichapa nde réra?”.',
      },
      {
        id: 'gn-u1-l3',
        title: 'Test: ñepyrũ',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Mba\'éichapa! Che réra Gloria. Ha nde?',
          botTranslation: 'Oi! Meu nome é Gloria. E você?',
          expected: ['Mba\'éichapa, Gloria! Che réra Lucas.', 'che réra', 'mba\'éichapa'],
          hint: 'Devolva a saudação (“Mba\'éichapa!”) e diga o seu nome com “Che réra…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: saudação, nome com “Che réra…” e um “Aguyje” de despedida.',
      },
    ],
  },
  {
    id: 'gn-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Che róga ha che família',
    emoji: '👪',
    card: {
      id: 'gn-c2',
      title: 'Che, nde, i-: a posse que muda com a pessoa',
      emoji: '🏠',
      history:
        'Muitas palavras de parentesco e de partes do corpo no guarani quase nunca aparecem “soltas”: elas pedem sempre um dono. “Nome” sozinho é “téra”, mas na fala do dia a dia o normal é “che réra” (meu nome), “nde réra” (teu nome) ou “héra” (o nome dele) — a primeira letra muda conforme quem é o dono. O mesmo acontece com “óga” (casa): “che róga” é “minha casa”. Esse traço, chamado posse ativa e inativa pelos linguistas, também aparece nos verbos: em vez de terminações como as do português (-o, -as, -a), o guarani ativo gruda um pedacinho no começo do verbo ou do adjetivo (a-, re-, o-) para dizer quem faz ou quem é.',
      culture_tip:
        'Os números em guarani só vão até dez de forma regular; no dia a dia, principalmente a partir do quatro, a maioria dos paraguaios usa os números do espanhol (cuatro, cinco…), um exemplo claro do jopara. Ainda assim, aprender peteĩ, mokõi, mbohapy e irundy é parte de qualquer curso de guarani, inclusive nas escolas.',
      grammar_why:
        'Adjetivos e algumas ações se comportam como o verbo “ser”: ganham um pedacinho (prefixo) para a pessoa. Na 3ª pessoa, esse pedacinho costuma ser “i-” (antes de vogal) ou “h-” (antes de vogal também, em outra classe de palavras): “ivai” (é feio/ruim), mas “hovy” (azul) já aparece assim nos dicionários, com o h- grudado de fábrica. Já nos verbos de ação, o pedacinho muda com quem faz a ação: “a-” (eu), “re-” (tu), “o-” (ele/ela) — “akaru” (eu como), “rekaru” (tu comes), “okaru” (ele come).',
      grammar_examples: [
        ['Che róga iporã chéve.', 'Eu gosto da minha casa (lit. minha casa é boa para mim).'],
        ['Che ru oiko Paraguáipe.', 'Meu pai mora no Paraguai.'],
        ['Pe óga guasu.', 'Aquela casa é grande.'],
        ['Akaru tembi\'u porã.', 'Eu como comida boa.'],
      ],
      character_guide: [
        ['r- (posse)', 'liga o dono a um nome que começa com vogal', 'óga → che róga (minha casa)'],
        ['i-/h- (3ª pessoa)', 'o “dele/dela” em nomes e adjetivos', 'téra → héra (o nome dele); vai → ivai (é ruim)'],
        ['a-/re-/o- (verbo)', 'eu / tu / ele, grudados no verbo', 'karu → akaru, rekaru, okaru (comer)'],
      ],
    },
    lessons: [
      {
        id: 'gn-u2-l1',
        title: 'Sy, ru, óga, tembi\'u',
        kind: 'licao',
        words: ['sy', 'ru', 'óga', 'y', 'tembi\'u', 'karu'],
        cloze: [
          { sentence: 'Che ___ ha\'e Rosa.', answer: 'sy', options: ['sy', 'ru', 'óga'], translation: 'Minha mãe é a Rosa.' },
          { sentence: 'Che r___ iporã chéve.', answer: 'óga', options: ['óga', 'ru', 'sy'], translation: 'Eu gosto da minha casa.' },
          { sentence: 'Che ___ tembi\'u porã.', answer: 'akaru', options: ['akaru', 'okaru', 'rekaru'], translation: 'Eu como comida boa.' },
        ],
        voice: {
          bot: 'Mba\'épa pe tembi\'u?',
          botTranslation: 'O que é essa comida?',
          expected: ['Pe tembi\'u iporã. Akaru.', 'tembi\'u', 'akaru'],
          hint: 'Diga que a comida é boa (“iporã”) e que você vai comer (“akaru”).',
        },
        communityPrompt: 'Escreva sobre a sua família e a sua casa: “Che sy…”, “Che ru…” e “Che róga…”.',
      },
      {
        id: 'gn-u2-l2',
        title: 'Porã, vai, guasu, michĩ',
        kind: 'licao',
        words: ['porã', 'vai', 'guasu', 'michĩ', 'jagua', 'mbarakaja'],
        cloze: [
          { sentence: 'Che jagua ___.', answer: 'iporã', options: ['iporã', 'ivai', 'guasu'], translation: 'Meu cachorro é bonzinho.' },
          { sentence: 'Pe mbarakaja ___.', answer: 'michĩ', options: ['michĩ', 'guasu', 'ivai'], translation: 'Aquele gato é pequeno.' },
          { sentence: 'Jaguarete ___.', answer: 'guasu', options: ['guasu', 'michĩ', 'ivai'], translation: 'A onça-pintada é grande.' },
        ],
        voice: {
          bot: 'Mba\'éichapa nde jagua?',
          botTranslation: 'Como é o seu cachorro?',
          expected: ['Che jagua iporã ha michĩ.', 'iporã', 'michĩ'],
          hint: 'Descreva o seu cachorro (ou gato) com “iporã” (bonzinho), “guasu” (grande) ou “michĩ” (pequeno).',
        },
        communityPrompt: 'Descreva um bicho de estimação em guarani usando “iporã”, “ivai”, “guasu” ou “michĩ”.',
      },
      {
        id: 'gn-u2-l3',
        title: 'Test: róga ha família',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Mba\'éichapa nde róga ha nde família?',
          botTranslation: 'Como é a sua casa e a sua família?',
          expected: ['Che róga michĩ. Che sy ha che ru oiko oréndive.', 'che róga', 'che sy', 'che ru'],
          hint: 'Descreva a casa (“che róga…”) e diga quem mora nela (“che sy”, “che ru”).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua casa e a sua família, usando “che róga”, “che sy”, “che ru” e “iporã”.',
      },
    ],
  },
];
