import type { UnitSeed } from '../types';

/**
 * Trilha do javanês: as duas unidades do nível A1 e, a partir da terceira, as duas do nível A2 (o
 * pacote continua marcado como incompleto — ver `incomplete` em index.ts — porque B1 ao C2 chegam
 * depois). Fontes dos fatos culturais novos usados nos cartões das unidades 3 e 4: o artigo da
 * Wikipédia em inglês "Javanese calendar" (o ciclo de mercado de cinco dias, pasaran); e uma
 * reportagem do portal detikJogja que resume o livro de referência "Baboning Pepak Basa Jawa" sobre
 * os nomes tradicionais das horas do dia. As palavras novas usadas nos exemplos têm a fonte
 * individual no cabeçalho de vocabulario.ts.
 */
export const UNITS_JV: UnitSeed[] = [
  {
    id: 'jv-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Halo! Ngoko, o jeito de falar do dia a dia',
    emoji: '👋',
    card: {
      id: 'jv-c1',
      title: 'A língua com mais falantes nativos da Indonésia',
      emoji: '🗺️',
      history:
        'O javanês (basa Jawa) é falado principalmente na ilha de Java, na Indonésia, por cerca de 68 milhões de pessoas como língua materna — mais do que o indonésio, a língua oficial do país, que a maioria dos javaneses aprende como segunda língua. É a maior língua austronésia do mundo em número de falantes nativos, mas não tem status oficial nacional: o indonésio é que ocupa esse papel, como símbolo de unidade entre as mais de 700 línguas do arquipélago.',
      culture_tip:
        'O javanês tem dois registros principais de fala, usados segundo a formalidade e a diferença de idade/status entre quem conversa: “ngoko” (informal, do dia a dia, entre amigos e familiares) e “krama” (formal, respeitoso, para quem é mais velho ou desconhecido). Este curso ensina o ngoko primeiro, por ser o mais comum na conversa cotidiana — o krama tem palavras diferentes para os mesmos conceitos.',
      grammar_why:
        'Assim como o indonésio, o verbo javanês não muda de forma pela pessoa: “aku mangan” (eu como) e “dhèwèké mangan” (ele/ela come) usam o mesmo “mangan”. A diferença maior do javanês não está na pessoa gramatical, mas no REGISTRO: a mesma ideia muda de palavra entre o ngoko e o krama, não pela pessoa que fala.',
      grammar_examples: [
        ['Aku saka Brasil.', 'Eu sou do Brasil. (ngoko)'],
        ['Kowé saka ngendi?', 'De onde você é? (ngoko)'],
        ['Dhèwèké saka Yogyakarta.', 'Ele/ela é de Yogyakarta.'],
      ],
      character_guide: [
        ['dh / th', 'consoantes retroflexas, com a língua curvada pra trás — sem equivalente exato no português', 'dhèwèké (ele/ela), gedhé (grande)'],
        ['a (final)', 'em sílaba aberta no final da palavra, soa mais como "o" do que como "a"', 'kowé [kowé], mas "a" final de "apa" soa "apå"'],
        ['ng', 'som nasal único, como o "ng" de "sing" em inglês', 'ngomong (falar), ngombé (beber)'],
      ],
    },
    lessons: [
      {
        id: 'jv-u1-l1',
        title: 'Halo, matur nuwun!',
        kind: 'licao',
        words: ['Halo', 'Sugeng énjang', 'Sugeng dalu', 'Matur nuwun', 'Sami-sami', "Ma'af"],
        cloze: [
          { sentence: '___, piyé kabaré?', answer: 'Halo', options: ['Halo', 'Matur nuwun', "Ma'af"], translation: 'Oi, como você está?' },
          { sentence: 'Aku seneng banget. ___, Ibu!', answer: 'Matur nuwun', options: ['Matur nuwun', 'Sami-sami', 'Halo'], translation: 'Eu estou muito feliz. Obrigado, mamãe!' },
          { sentence: '— Matur nuwun! — ___!', answer: 'Sami-sami', options: ['Sami-sami', "Ma'af", 'Sugeng dalu'], translation: '— Obrigado! — De nada!' },
        ],
        voice: {
          bot: 'Halo! Piyé kabaré?',
          botTranslation: 'Oi! Como você está?',
          expected: ['Apik-apik baé, matur nuwun!', 'apik', 'matur nuwun'],
          hint: 'Responda que está bem com “apik-apik baé” e agradeça com “matur nuwun”.',
        },
        communityPrompt: 'Escreva três cumprimentos em javanês: um de manhã (“Sugeng énjang…”), um à noite (“Sugeng dalu…”) e um agradecimento com “Matur nuwun”.',
      },
      {
        id: 'jv-u1-l2',
        title: 'Aku, kowé, dhèwèké',
        kind: 'licao',
        words: ['Aku', 'Kowé', 'Dhèwèké', 'kita', 'Iyå', 'Ora'],
        cloze: [
          { sentence: '___ saka Brasil.', answer: 'Aku', options: ['Aku', 'Kowé', 'Dhèwèké'], translation: 'Eu sou do Brasil.' },
          { sentence: 'Ayo, ___ sinau basa Jawa!', answer: 'kita', options: ['kita', 'aku', 'kowé'], translation: 'Vamos, nós aprender javanês!' },
          { sentence: '— Kowé seneng gedhang? — ___, seneng banget!', answer: 'Iyå', options: ['Iyå', 'Ora', 'Matur nuwun'], translation: '— Você gosta de banana? — Sim, gosto muito!' },
        ],
        voice: {
          bot: 'Kowé saka ngendi?',
          botTranslation: 'De onde você é?',
          expected: ['Aku saka Brasil.', 'aku saka', 'brasil'],
          hint: 'Responda com “Aku saka…” e o nome do seu país.',
        },
        communityPrompt: 'Apresente-se em javanês: diga “Aku saka…” (eu sou de…) e pergunte a origem de outra pessoa com “Kowé saka ngendi?”.',
      },
      {
        id: 'jv-u1-l3',
        title: 'Prova: halo lan ngoko',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: "Halo! Aku saka Yogyakarta. Kowé saka ngendi, lan piyé kabaré?",
          botTranslation: 'Oi! Eu sou de Yogyakarta. De onde você é, e como você está?',
          expected: ['Halo! Aku saka Brasil, lan apik-apik baé, matur nuwun!', 'aku saka', 'apik', 'matur nuwun'],
          hint: 'Devolva o cumprimento, diga de onde você é com “aku saka…” e como está com “apik-apik baé”.',
        },
        communityPrompt: 'Escreva uma apresentação curta em javanês: cumprimento, de onde você é e como está, usando “ngoko”.',
      },
    ],
  },
  {
    id: 'jv-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ing omah: kulawarga lan panganan',
    emoji: '🏠',
    card: {
      id: 'jv-c2',
      title: 'Mas e Mbak: irmãos pela idade, como no indonésio',
      emoji: '🧭',
      history:
        'Assim como o indonésio, o javanês não tem palavras separadas para “irmão” e “irmã”: o que importa é a idade relativa. “Mas” é um irmão mais velho (ou qualquer homem um pouco mais velho, como forma de tratamento respeitoso) e “Mbak” é uma irmã mais velha (ou qualquer mulher um pouco mais velha). “Adhi” serve para qualquer irmão ou irmã mais novo(a), sem distinção de sexo.',
      culture_tip:
        'Chamar alguém de “Mas” ou “Mbak” é uma forma comum e respeitosa de se dirigir a quem atende numa loja, dirige um táxi ou trabalha num restaurante, mesmo sem parentesco nenhum — parecido com “moço”/“moça” no Brasil, mas usado com muito mais frequência no dia a dia javanês.',
      grammar_why:
        'O plural em javanês, como no indonésio, costuma se formar repetindo a palavra: “wong” (pessoa) → “wong-wong” (pessoas). Na maioria das frases, porém, o contexto já deixa claro se é singular ou plural, sem precisar repetir nada.',
      grammar_examples: [
        ['Omahku cilik nanging apik.', 'A minha casa é pequena, mas bonita.'],
        ['Aku duwé siji Mas lan siji Adhi.', 'Eu tenho um irmão mais velho e um irmão/irmã mais novo(a).'],
      ],
      character_guide: [
        ['é', 'som fechado, como o "ê" de "mês"', 'kowé (você), sésuk (amanhã)'],
        ['è', 'som aberto, como o "é" de "café"', 'dhèwèké (ele/ela)'],
      ],
    },
    lessons: [
      {
        id: 'jv-u2-l1',
        title: 'Kulawarga: Bapak, Ibu, Mas, Mbak',
        kind: 'licao',
        words: ['Bapak', 'Ibu', 'Mas', 'Mbak', 'Adhi', 'apik'],
        cloze: [
          { sentence: '___-ku saka Solo.', answer: 'Bapak', options: ['Bapak', 'Ibu', 'Mas'], translation: 'O meu pai é de Solo.' },
          { sentence: 'Aku duwé siji ___ lan siji Adhi.', answer: 'Mas', options: ['Mas', 'Mbak', 'Ibu'], translation: 'Eu tenho um irmão mais velho e um irmão/irmã mais novo(a).' },
          { sentence: 'Mbakku ___ banget.', answer: 'apik', options: ['apik', 'gedhé', 'cilik'], translation: 'A minha irmã mais velha é muito gentil.' },
        ],
        voice: {
          bot: 'Kowé duwé Mas utawa Adhi?',
          botTranslation: 'Você tem irmão(s) mais velho(s) ou mais novo(s)?',
          expected: ['Iyå, aku duwé siji Mas lan siji Adhi.', 'aku duwé', 'mas', 'adhi'],
          hint: 'Responda com “aku duwé…” e quantos Mas/Mbak/Adhi você tem.',
        },
        communityPrompt: 'Descreva a sua família em javanês: quantos Mas, Mbak ou Adhi você tem, e como se chamam o seu Bapak e a sua Ibu.',
      },
      {
        id: 'jv-u2-l2',
        title: 'Ing omah',
        kind: 'licao',
        words: ['omah', 'banyu', 'mangan', 'ngombé', 'seneng', 'gedhé'],
        cloze: [
          { sentence: 'Omahku cilik nanging ___.', answer: 'apik', options: ['apik', 'gedhé', 'banyu'], translation: 'A minha casa é pequena, mas bonita.' },
          { sentence: 'Aku arep ___, Mbak.', answer: 'banyu', options: ['banyu', 'mangan', 'omah'], translation: 'Eu quero água, Mbak.' },
          { sentence: 'Aku ___ gedhang banget.', answer: 'seneng', options: ['seneng', 'mangan', 'ngombé'], translation: 'Eu gosto muito de banana.' },
        ],
        voice: {
          bot: 'Kowé seneng gedhang?',
          botTranslation: 'Você gosta de banana?',
          expected: ['Iyå, aku seneng banget!', 'aku seneng', 'banget'],
          hint: 'Use “aku seneng” (eu gosto) para responder.',
        },
        communityPrompt: 'Descreva a sua casa em duas ou três frases, usando “omah”, “gedhé” ou “cilik”, e o que você gosta de comer ou beber.',
      },
      {
        id: 'jv-u2-l3',
        title: 'Prova: kulawarga lan omah',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Kulawarga lan omah?',
          botTranslation: 'Família e casa?',
          expected: ['Aku duwé Bapak, Ibu, lan siji Mas. Omahku cilik nanging apik.', 'aku duwé', 'omahku'],
          hint: 'Cite os parentes com “aku duwé…” e descreva a casa com “omahku…”.',
        },
        communityPrompt: 'Escreva um parágrafo curto apresentando a sua família e a sua casa, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
  {
    id: 'jv-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Jam pira? Pitakon lan rutinitas',
    emoji: '❓',
    card: {
      id: 'jv-c3',
      title: 'O relógio chegou depois: como Java contava as horas',
      emoji: '🕰️',
      history:
        'Antes do relógio mecânico se popularizar, os javaneses marcavam as horas por acontecimentos do dia, não por números fixos: uma reportagem do portal de notícias detikJogja, que resume o livro de referência “Baboning Pepak Basa Jawa”, lista nomes como “jago kluruk sepisan” (o galo canta uma vez, por volta das três da manhã) e “bedhug dzuhur” (o tambor do meio-dia, no horário da oração muçulmana), baseados em sons e costumes do campo. A própria palavra usada hoje para “hora” e “relógio”, “jam”, é um empréstimo que veio do malaio e, mais fundo, do sânscrito “yāma” — um sinal de como o javanês foi absorvendo vocabulário de outras línguas ao longo dos séculos, sem deixar de guardar os seus próprios nomes tradicionais para o tempo.',
      culture_tip:
        'Perguntar “que horas são” ou “onde” muda de palavra segundo quem pergunta e para quem: com amigos e família, “ngendi” (onde) e “pira” (quanto/quantos) bastam; com alguém mais velho ou desconhecido, a forma respeitosa troca para “pundi” e “pinten” — o mesmo padrão ngoko/krama já visto no nível A1, agora aplicado a palavras de pergunta.',
      grammar_why:
        'Esta unidade apresenta as seis perguntas básicas do dia a dia — “apa” (o quê), “sapa” (quem), “ngendi” (onde), “kapan” (quando), “pira” (quanto/quantos) e “piyé” (como) — e revela um sufixo que já estava escondido desde a primeira lição deste curso: “-é”/“-ne”, que cola “o/a dele(a)” ou “o/a” direto no final da palavra. É esse sufixo que transforma “kabar” (notícia) em “kabaré” na saudação “Piyé kabaré?”, e “rega” (preço) em “regane” em “Pira regane iki?”.',
      grammar_examples: [
        ['Sapa jenengmu?', 'Qual é o seu nome? (literalmente: quem é o seu nome?)'],
        ['Omahmu ngendi?', 'Onde é a sua casa?'],
        ['Jam pira saiki?', 'Que horas são agora?'],
        ['Kapan kowé mulih?', 'Quando você volta pra casa?'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'jv-u3-l1',
        title: 'Apa, sapa, ngendi: as perguntas do dia a dia',
        kind: 'licao',
        words: ['apa', 'sapa', 'ngendi', 'kapan', 'pira', 'piyé'],
        cloze: [
          { sentence: '___ jenengmu?', answer: 'Sapa', options: ['Sapa', 'Apa', 'Kapan'], translation: 'Qual é o seu nome? (literalmente: quem é o seu nome?)' },
          { sentence: 'Omahmu ___?', answer: 'ngendi', options: ['ngendi', 'pira', 'piyé'], translation: 'Onde é a sua casa?' },
          { sentence: '___ regane iki?', answer: 'Pira', options: ['Pira', 'Sapa', 'Kapan'], translation: 'Quanto custa isto?' },
        ],
        voice: {
          bot: 'Kapan kowé mulih?',
          botTranslation: 'Quando você volta pra casa?',
          expected: ['Aku mulih sésuk.', 'aku mulih', 'sésuk'],
          hint: 'Responda com “aku mulih” e quando — por exemplo “sésuk” (amanhã).',
        },
        communityPrompt: 'Escreva três perguntas em javanês usando “sapa”, “ngendi” e “pira”, uma para cada colega responder.',
      },
      {
        id: 'jv-u3-l2',
        title: 'Tangi, adus, sinau: a rotina do dia',
        kind: 'licao',
        words: ['tangi', 'adus', 'turu', 'sinau', 'mulih', 'gawé'],
        cloze: [
          { sentence: 'Aku ___ jam enem.', answer: 'tangi', options: ['tangi', 'turu', 'adus'], translation: 'Eu levanto às seis horas.' },
          { sentence: 'Bapakku ___ ing kutha.', answer: 'gawé', options: ['gawé', 'sinau', 'mulih'], translation: 'Meu pai trabalha na cidade.' },
          { sentence: 'Aku ___ basa Jawa.', answer: 'sinau', options: ['sinau', 'adus', 'tangi'], translation: 'Eu estudo javanês.' },
        ],
        voice: {
          bot: 'Jam pira kowé tangi?',
          botTranslation: 'Que horas você levanta?',
          expected: ['Aku tangi jam enem.', 'aku tangi', 'jam enem'],
          hint: 'Responda com “Aku tangi jam…” e a hora.',
        },
        communityPrompt: 'Descreva a sua rotina diária em javanês usando pelo menos três destes verbos: tangi, adus, turu, sinau, mulih, gawé.',
      },
      {
        id: 'jv-u3-l3',
        title: 'Prova: pitakon lan rutinitas',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Piyé kabaré? Jam pira kowé tangi?',
          botTranslation: 'Como você está? Que horas você levanta?',
          expected: ['Apik-apik baé, matur nuwun! Aku tangi jam enem.', 'aku tangi', 'jam enem'],
          hint: 'Responda ao cumprimento e diga a que horas você levanta, com “Aku tangi jam…”.',
        },
        communityPrompt: 'Escreva um parágrafo curto contando a sua rotina (quando levanta, o que estuda, onde trabalha) e termine com uma pergunta para um colega, usando “kapan” ou “pira”.',
      },
    ],
  },
  {
    id: 'jv-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Pira regane? Blanja ing pasar',
    emoji: '🛒',
    card: {
      id: 'jv-c4',
      title: 'Pasaran: o mercado que também é um calendário',
      emoji: '🗓️',
      history:
        'Em Java, o mesmo radical “pasar” (mercado) deu nome a uma semana de cinco dias própria, a pasaran, usada ao lado da semana de sete dias de origem islâmica: Legi, Pahing, Pon, Wagé e Kliwon — cada uma com uma forma krama (Manis, Pait, Pethak, Cemèng e Asih), uma cor e uma direção associadas. Tradicionalmente, os moradores se reuniam no mercado local no dia da semana que lhe dava nome, para socializar, vender e trocar produtos, e algumas cidades ainda guardam esse costume em nomes como Pasar Legi ou Pasar Kliwon, mesmo onde o comércio hoje funciona todos os dias. Combinada com a semana de sete dias, a pasaran forma um ciclo de 35 dias (a wetonan), usado até hoje para calcular datas consideradas favoráveis.',
      culture_tip:
        'Pesquisas sobre o jeito de falar em mercados javaneses de verdade (em Pekalongan e em Semarang, na mesma ilha de Java) mostram que vendedores e compradores trocam de registro o tempo todo durante a mesma negociação: usam krama com quem é mais velho ou desconhecido, e ngoko com quem já é conhecido ou da mesma idade — a pechincha muda de tom de frase em frase, não só de preço.',
      grammar_why:
        'Para perguntar e responder preços, esta unidade usa os números além de vinte — “telung puluh” (trinta), “patang puluh” (quarenta), “séket” (cinquenta), “sewidak” (sessenta), “satus” (cem) e “sèwu” (mil) — que também têm uma forma krama diferente da ngoko, do mesmo jeito que “ngendi”/“pundi” ou “pira”/“pinten” já vistos na unidade anterior.',
      grammar_examples: [
        ['Pira regane iki?', 'Quanto custa isto?'],
        ['Aku duwé satus pelem.', 'Eu tenho cem mangas.'],
        ['Gedhang iki murah.', 'Esta banana é barata.'],
        ['Pelem iki larang.', 'Esta manga é cara.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'jv-u4-l1',
        title: 'Telung puluh, patang puluh: números maiores',
        kind: 'licao',
        words: ['telung puluh', 'patang puluh', 'séket', 'sewidak', 'satus', 'sèwu'],
        cloze: [
          { sentence: 'Aku duwé ___ pelem.', answer: 'telung puluh', options: ['telung puluh', 'patang puluh', 'satus'], translation: 'Eu tenho trinta mangas.' },
          { sentence: 'Aku duwé ___ gedhang.', answer: 'séket', options: ['séket', 'sewidak', 'sèwu'], translation: 'Eu tenho cinquenta bananas.' },
          { sentence: 'Aku duwé ___ asu.', answer: 'sewidak', options: ['sewidak', 'satus', 'patang puluh'], translation: 'Eu tenho sessenta cachorros.' },
        ],
        voice: {
          bot: 'Pira pelemmu?',
          botTranslation: 'Quantas mangas você tem?',
          expected: ['Aku duwé satus pelem.', 'aku duwé', 'satus'],
          hint: 'Responda com “Aku duwé…” e o número.',
        },
        communityPrompt: 'Escreva em javanês quatro frases dizendo quantas coisas você tem, usando “telung puluh”, “patang puluh”, “séket” e “sewidak” (os números podem ser inventados).',
      },
      {
        id: 'jv-u4-l2',
        title: 'Ing pasar: tuku, rega, dhuwit',
        kind: 'licao',
        words: ['pasar', 'tuku', 'rega', 'larang', 'murah', 'dhuwit'],
        cloze: [
          { sentence: 'Aku ___ gedhang ing pasar.', answer: 'tuku', options: ['tuku', 'gawé', 'adus'], translation: 'Eu compro banana no mercado.' },
          { sentence: 'Pelem iki ___ banget.', answer: 'larang', options: ['larang', 'murah', 'apik'], translation: 'Esta manga é muito cara.' },
          { sentence: 'Aku ora duwé ___.', answer: 'dhuwit', options: ['dhuwit', 'rega', 'pasar'], translation: 'Eu não tenho dinheiro.' },
        ],
        voice: {
          bot: 'Pira regane gedhang iki?',
          botTranslation: 'Quanto custa esta banana?',
          expected: ['Regane séket.', 'regane', 'séket'],
          hint: 'Responda com o preço, usando “regane…” e o número.',
        },
        communityPrompt: 'Escreva um diálogo curto no pasar: pergunte o preço de duas coisas com “Pira regane…?”, reclame que uma é cara (“larang”) e diga que não tem mais dinheiro (“Aku ora duwé dhuwit”).',
      },
      {
        id: 'jv-u4-l3',
        title: 'Prova: blanja ing pasar',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Iki pasar gedhé. Pira regane pelem?',
          botTranslation: 'Este é um mercado grande. Quanto custam as mangas?',
          expected: ['Regane satus. Murah banget!', 'regane satus', 'murah'],
          hint: 'Diga o preço com “Regane…” e o número; se quiser, comente se está caro ou barato com “larang”/“murah”.',
        },
        communityPrompt: 'Escreva a cena completa de uma compra no pasar: pergunte o preço de duas coisas diferentes, compare se é caro ou barato, e diga quanto dinheiro você tem ou não tem.',
      },
    ],
  },
];
