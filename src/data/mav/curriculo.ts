import type { UnitSeed } from '../types';

/**
 * Trilha do sateré-mawé: por enquanto só as duas unidades do nível A1 (pacote incompleto — ver
 * `incomplete` em index.ts). Fontes: ver o cabeçalho de vocabulario.ts ([G] glossário de Miquiles &
 * Castro 2022, [S] tese de Silva 2010, [NT] Novo Testamento só para conferir grafia).
 *
 * As frases são citações de [G] (saudações, “pequenas frases” e os dois diálogos) ou de [S]
 * (exemplos glosados). Duas pequenas adaptações, sempre dentro de um molde atestado: (1) o nome
 * próprio trocado em “Uito Peteru” (sou Pedro) / “Uhet Iruka e” (meu nome é Lucas), de [G]; (2) o
 * objeto trocado em “Atiky'esat mi'u” (quero comida, [G]) / “Uito atiky'esat y'y” (eu quero água,
 * [S] ex. 137a) — o verbo e a ordem das palavras ficam idênticos aos da fonte.
 */
export const UNITS_MAV: UnitSeed[] = [
  {
    id: 'mav-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: "Ihot'ok!",
    emoji: '🌅',
    card: {
      id: 'mav-c1',
      title: 'Sateré-Mawé, os filhos do guaraná',
      emoji: '🌿',
      history:
        'O sateré-mawé é a língua do povo Sateré-Mawé, que vive na Terra Indígena Andirá-Marau — homologada em 1986, com 788.528 hectares entre o Amazonas e o Pará, nos municípios de Maués, Barreirinha, Parintins, Itaituba e Aveiro — e também nas cidades próximas e em Manaus. São cerca de 10 mil pessoas, e a grande maioria fala a língua; desde 2023 ela é uma das 16 línguas indígenas oficiais do estado do Amazonas. É do tronco Tupi, mas não da família tupi-guarani: forma um ramo à parte, “primo” do tupi-guarani e do awetí. Os nomes do povo têm sentido: “Sateré” quer dizer “lagarta de fogo”, o clã mais importante, de onde tradicionalmente vêm os chefes, e “Mawé” quer dizer “papagaio inteligente e curioso”.',
      culture_tip:
        'Os Sateré-Mawé domesticaram a trepadeira do guaraná (waranã) e inventaram o jeito de beneficiá-lo — por isso são chamados “filhos do guaraná”. No dia a dia se bebe o sapo (çapó): o bastão de guaraná ralado na água e servido numa cuia (kui’a). Oferecer o sapo a quem chega é um gesto de acolhida do tuxaua (morekuat).',
      grammar_why:
        'Para dizer “nós”, o sateré-mawé pergunta antes: quem ouve está incluído? “Aito” é “nós, com você junto”; “uruto” é “nós, mas não você”. Os outros pronomes livres são “uito” (eu), “en” (tu, você), “mi’i” (ele, ela — a mesma palavra para os dois), “eipe” (vocês) e “mi’iria” (eles, elas: mi’i + -ria, o sufixo de plural). E o verbo também muda de prefixo conforme a pessoa: “uito areket” (eu dormi), “haryporia toket” (a mulher dormiu).',
      grammar_examples: [
        ['Uito areket.', 'Eu dormi.'],
        ['Haryporia toket.', 'A mulher dormiu.'],
        ['Aito wahenoi.', 'Nós (eu e você) ensinamos.'],
        ["Uruto uruiwuk aria'yp.", 'Nós (sem você) queimamos lenha.'],
      ],
      character_guide: [
        ['y', '/ɨ/, som entre “i” e “u”, com a boca meio aberta, como no nheengatu', "y'y (água)"],
        ["'", 'oclusiva glotal /ʔ/: uma pequena parada do ar na garganta, como em “oh-oh”', "ihot'ok (bom dia)"],
        ['g', 'no fim da sílaba vale /ŋ/, o “ng” do inglês “sing”', 'akag (cabeça), jugkan (tucano)'],
        ['~ (til)', 'vogal nasal', 'manĩ (mandioca), wẽ (boca)'],
      ],
    },
    lessons: [
      {
        id: 'mav-u1-l1',
        title: "Ihot'ok, heika'at",
        kind: 'licao',
        words: ["Ihot'ok", "Heika'at", 'Wantym', 'Hay', 'Waku sese', 'Waku'],
        cloze: [
          { sentence: "___! Heika'at!", answer: 'Hay', options: ['Hay', 'Waku', 'Wantym'], translation: 'Olá! Boa tarde!' },
          { sentence: 'Aikotaig? ___.', answer: 'Waku', options: ['Waku', 'Hay', 'Wantym'], translation: 'Como vai? Bem.' },
          { sentence: 'Waku ___!', answer: 'sese', options: ['sese', 'wy', 'en'], translation: 'Obrigado!' },
        ],
        voice: {
          bot: "Ihot'ok!",
          botTranslation: 'Bom dia!',
          expected: ["Ihot'ok!", "ihot'ok", 'ihotok'],
          hint: "Responda ao cumprimento com o mesmo “Ihot'ok!” (bom dia).",
        },
        communityPrompt: "Cumprimente alguém de manhã (“Ihot'ok!”), de tarde (“Heika'at!”) e de noite (“Wantym!”), e agradeça com “Waku sese!”.",
      },
      {
        id: 'mav-u1-l2',
        title: "Uito, en, mi'i",
        kind: 'licao',
        words: ['Uito', 'En', "Mi'i", 'Ihainia', 'Haryporia', 'Hirokat'],
        cloze: [
          { sentence: '___ Peteru.', answer: 'Uito', options: ['Uito', 'En', "Mi'i"], translation: 'Eu sou Pedro.' },
          { sentence: 'Uweig ___?', answer: 'en', options: ['en', 'uito', 'aito'], translation: 'Quem é você?' },
          { sentence: '___ toket.', answer: 'Haryporia', options: ['Haryporia', 'Hirokat', 'Uito'], translation: 'A mulher dormiu.' },
        ],
        voice: {
          bot: 'Uweig en?',
          botTranslation: 'Quem é você?',
          expected: ['Uito Linu.', 'uito linu', 'uito'],
          hint: 'Responda com “Uito” (eu) seguido do seu nome, como no diálogo: “Uito Peteru” (sou Pedro).',
        },
        communityPrompt: 'Apresente-se com “Uito …” (eu sou …) e pergunte “Uweig en?” (quem é você?).',
      },
      {
        id: 'mav-u1-l3',
        title: "Test: Ihot'ok, uito",
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: "Hay! Heika'at! Aikotaig?",
          botTranslation: 'Olá! Boa tarde! Como vai?',
          expected: ["Heika'at! Waku.", 'waku', "heika'at"],
          hint: "Devolva o “Heika'at!” e responda que vai bem: “Waku.”",
        },
        communityPrompt: "Escreva um diálogo curto: cumprimente (“Hay! Heika'at!”), pergunte “Aikotaig?”, responda “Waku”, apresente-se com “Uito …” e agradeça com “Waku sese!”.",
      },
    ],
  },
  {
    id: 'mav-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Waranã',
    emoji: '🍒',
    card: {
      id: 'mav-c2',
      title: 'Família, guaraná e o porantim',
      emoji: '🪶',
      history:
        'A sociedade sateré-mawé se organiza em clãs (ywania), com nomes de bichos e plantas, como sateré (lagarta de fogo), waranã (guaraná) e akuri (cutia). Os clãs aparecem nos mitos, nas “belas palavras” (saray potairia), e se reúnem no Waymat, o ritual da tucandeira (watyama): o menino que vai virar homem põe a mão numa luva cheia dessas formigas e aguenta as ferroadas, dançando. A história do povo e as suas leis ficam gravadas no puratig (porantim), um remo sagrado entalhado com grafismos, símbolo maior da identidade sateré-mawé.',
      culture_tip:
        'Segundo a “História do Guaraná”, o guaraná nasceu do olho de um menino: Uniawasap, a mãe, plantou o olho direito do filho morto pelos tios, e dali brotou o guaraná verdadeiro — e do mesmo menino veio o primeiro Sateré-Mawé. É por isso que se dizem “filhos do guaraná”, e a própria palavra portuguesa “guaraná” vem do sateré-mawé “waranã”.',
      grammar_why:
        'Em sateré-mawé, quem possui vem como prefixo no próprio nome: “u-” é “meu”, “e-” é “teu” e “i-” é “dele, dela”. Por isso os nomes de parentesco quase nunca aparecem soltos: “ui’ywot” (meu pai), “e’ywot” (teu pai), “i’ywot” (pai dele); “uimẽpyt” (meu filho), “imẽpyt” (filho dele). E para querer algo basta o verbo “atiky’esat” (eu quero) antes da coisa: “atiky’esat mi’u” (quero comida).',
      grammar_examples: [
        ["Ui'ywot.", 'Meu pai.'],
        ["E'ywot.", 'Teu pai.'],
        ['Imẽpyt.', 'O filho dele.'],
        ["Uito atiky'esat y'y.", 'Eu quero água.'],
      ],
      character_guide: [
        ['ẽ, ã, ĩ', 'vogais nasais (til), como em português', 'uimẽpyt (meu filho), waranã (guaraná)'],
        ['á, ý (acento agudo)', 'na grafia do glossário, marca sobretudo a vogal longa', 'át (sol), wáty (lua)'],
        ['-ria', 'sufixo de plural para pessoas', "mi'iria (eles), morekuaria (os chefes)"],
        ["ko'i", 'partícula de plural para coisas', "waikiru ko'i (estrelas)"],
      ],
    },
    lessons: [
      {
        id: 'mav-u2-l1',
        title: "Ui'ywot, uity",
        kind: 'licao',
        words: ["Ui'ywot", 'Uity', 'Uimẽpyt', 'Hary', "Ase'i", 'Netap'],
        cloze: [
          { sentence: '___.', answer: "E'ywot", options: ["E'ywot", "Ui'ywot", "I'ywot"], translation: 'Teu pai.' },
          { sentence: '___.', answer: 'Imẽpyt', options: ['Imẽpyt', 'Uimẽpyt', 'Uity'], translation: 'O filho dele.' },
          { sentence: '___ ikahu.', answer: 'Netap', options: ['Netap', 'Hary', "Ase'i"], translation: 'Casa bonita.' },
        ],
        voice: {
          bot: 'Netap ikahu!',
          botTranslation: 'Casa bonita!',
          expected: ['Waku sese!', 'waku sese'],
          hint: 'Agradeça o elogio à sua casa com “Waku sese!” (obrigado).',
        },
        communityPrompt: "Apresente sua família com os prefixos de posse: “Ui'ywot” (meu pai), “Uity” (minha mãe), “Uimẽpyt” (meu filho), “Hary” (avó), “Ase'i” (avô).",
      },
      {
        id: 'mav-u2-l2',
        title: "Waranã, mi'u, y'y",
        kind: 'licao',
        words: ['Waranã', 'Sapo', "Mi'u", "Y'y", 'Manĩ', 'Awati'],
        cloze: [
          { sentence: "Uito atiky'esat ___.", answer: "y'y", options: ["y'y", 'awati', 'manĩ'], translation: 'Eu quero água.' },
          { sentence: "Atiky'esat ___.", answer: "mi'u", options: ["mi'u", 'sapo', 'waranã'], translation: 'Quero comida.' },
          { sentence: 'Hé ___!', answer: 'kahato', options: ['kahato', 'sese', 'waku'], translation: 'Muito gostoso!' },
        ],
        voice: {
          bot: "Etiky'esat?",
          botTranslation: 'Você quer?',
          expected: ["Atiky'esat mi'u.", "atiky'esat", "mi'u", "y'y"],
          hint: "Diga o que você quer com “Atiky'esat” (eu quero) e a coisa: “Atiky'esat mi'u” (quero comida).",
        },
        communityPrompt: "Peça o que você quer com “Atiky'esat …” (quero …) e elogie a comida com “Hé kahato!” (muito gostoso!).",
      },
      {
        id: 'mav-u2-l3',
        title: "Test: atiky'esat waranã",
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: "Etiky'esat? Uhesý'at?",
          botTranslation: 'Você quer? Está com fome?',
          expected: ["Uhesý'at. Atiky'esat mi'u.", "uhesý'at", "atiky'esat"],
          hint: "Diga que está com fome (“Uhesý'at”) e peça comida (“Atiky'esat mi'u”).",
        },
        communityPrompt: "Escreva sobre a sua família (“Ui'ywot”, “Uity”, “Uimẽpyt”) e diga o que você quer comer ou beber com “Atiky'esat …”.",
      },
    ],
  },
];
