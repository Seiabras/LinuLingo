import type { UnitSeed } from '../types';

/**
 * Trilha do hauçá: as duas unidades do nível A1 e, a partir daqui, as duas do nível A2 — o pacote
 * segue incompleto do B1.1 em diante. As unidades 3 e 4
 * (A2.1 e A2.2) ambientam a mesma amiga Amina (das unidades e histórias do A1) numa ida ao mercado
 * histórico de Kurmi, em Kano, e numa conversa sobre ir à escola.
 * Fontes das unidades 1–2 (A1): Wikipedia (fatos sobre o hauçá, alfabeto boko, gênero gramatical),
 * Omniglot (frases de cumprimento), Wiktionary (gênero e forma possuída dos substantivos usados nos
 * exemplos).
 * Fontes das unidades 3–4 (A2): Wikipedia, artigo “Kurmi Market” (fundação em 1463, sob o rei
 * Muhammad Rumfa, e o papel do mercado no comércio transaariano) e “Hausa grammar” (as formas do
 * completivo e do futuro com “za”); Omniglot e languagesandnumbers.com (numerais acima de dez);
 * pesquisas acadêmicas sobre o sistema tsangaya/“makarantar allo” (a escola corânica tradicional),
 * citadas em detalhe junto da gramática do nível A2; Wiktionary para o vocabulário novo (mesmas
 * fontes documentadas junto da lista de palavras do A2).
 */
export const UNITS_HA: UnitSeed[] = [
  {
    id: 'ha-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Sannu! Matakan farko',
    emoji: '👋',
    card: {
      id: 'ha-c1',
      title: 'A língua do Sahel central',
      emoji: '🕌',
      history:
        'O hauçá pertence ao ramo chádico da família afro-asiática — é parente distante do árabe e do hebraico, não do suaíli nem do iorubá, que são línguas banta e volta-nígero-congolesas. É a língua africana nativa com mais falantes: cerca de 94 milhões de pessoas a falam, entre nativos e segunda língua, sobretudo no norte da Nigéria e no Níger, onde se tornou língua oficial única em 2025. Tradicionalmente se escrevia em ajami, uma adaptação do alfabeto árabe, usada desde o século XVII; hoje a escrita mais comum é o boko, um alfabeto latino criado nos anos 1930 pela administração colonial britânica.',
      culture_tip:
        'Cumprimentar é um ritual social importante entre os hauçás: é comum perguntar pela saúde, pela família e até pelo trabalho antes de ir ao assunto principal de uma conversa — pular direto para o pedido é visto como falta de educação.',
      grammar_why:
        'O hauçá tem um “é” que concorda em gênero: “ne” depois de palavra masculina, “ce” depois de feminina — não importa quem fala. “Ni malami ne” (Eu sou professor) e “Ni malama ce” (Eu sou professora) mudam o “ni” nunca, só o final.',
      grammar_examples: [
        ['Sannu! Sunana Linu.', 'Oi! Meu nome é Linu.'],
        ['Kana lahiya?', 'Você está bem? (para homem)'],
        ['Shi malami ne.', 'Ele é professor.'],
        ['Ita malama ce.', 'Ela é professora.'],
      ],
      character_guide: [
        ['ɓ', 'implosiva: “b” com a garganta puxando o ar para dentro', 'ɓarawo (ladrão)'],
        ['ɗ', 'implosiva, igual mas com “d”', 'ɗan’uwa (irmão)'],
        ['ƙ', 'ejetiva: “k” seco, fechado na garganta', 'ƙafa (pé)'],
        ['ƴ (ou ’y)', 'aproximante presa na garganta; comum vê-la só como apóstrofo', '’yar’uwa (irmã)'],
        ['sh', 'como o “x” de “xadrez”', 'shayi (chá)'],
        ['ts', 'ejetiva: “ts” seco, fechado na garganta', 'tsuntsu (pássaro)'],
      ],
    },
    lessons: [
      {
        id: 'ha-u1-l1',
        title: 'Sannu, na gode, sai an jima!',
        kind: 'licao',
        words: ['sannu', 'sannu da zuwa', 'na gode', 'don Allah', 'sai an jima', 'lafiya lau'],
        cloze: [
          { sentence: '___! Kana lahiya?', answer: 'Sannu', options: ['Sannu', 'Na gode', 'Sai an jima'], translation: 'Oi! Você está bem?' },
          { sentence: 'Ruwa, ___!', answer: 'don Allah', options: ['don Allah', 'na gode', 'sai an jima'], translation: 'Água, por favor!' },
          { sentence: '___, sai gobe!', answer: 'na gode', options: ['na gode', 'sannu', 'lafiya lau'], translation: 'Obrigado, até amanhã!' },
        ],
        voice: {
          bot: 'Sannu! Kana lahiya?',
          botTranslation: 'Oi! Você está bem?',
          expected: ['Lafiya lau, na gode!', 'lafiya lau', 'na gode'],
          hint: 'Responda que está muito bem e agradeça: “Lafiya lau, na gode!”.',
        },
        communityPrompt: 'Escreva três expressões em hauçá: um cumprimento (“Sannu”), um agradecimento (“Na gode”) e uma despedida (“Sai an jima”).',
      },
      {
        id: 'ha-u1-l2',
        title: 'Ni, kai, ke, shi, ita',
        kind: 'licao',
        words: ['ni', 'kai', 'ke', 'shi', 'ita', 'suna'],
        cloze: [
          { sentence: '___ malami ne.', answer: 'Shi', options: ['Shi', 'Ita', 'Ni'], translation: 'Ele é professor.' },
          { sentence: '___ malama ce.', answer: 'Ita', options: ['Ita', 'Shi', 'Kai'], translation: 'Ela é professora.' },
          { sentence: 'Wa ke can? — ___ ne.', answer: 'Ni', options: ['Ni', 'Kai', 'Shi'], translation: 'Quem está aí? — Sou eu.' },
        ],
        voice: {
          bot: 'Sannu! Mi sunanka?',
          botTranslation: 'Oi! Qual é o seu nome?',
          expected: ['Sunana Lúcia.', 'sunana', 'ni'],
          hint: 'Diga seu nome com “Sunana…”.',
        },
        communityPrompt: 'Apresente-se em hauçá: diga seu nome com “Sunana…” e, se quiser, se é “malami ne” ou “malama ce”.',
      },
      {
        id: 'ha-u1-l3',
        title: 'Jarrabawa: matakan farko',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Sannu! Mi sunanka? Kana lahiya?',
          botTranslation: 'Oi! Qual é o seu nome? Você está bem?',
          expected: ['Sannu! Sunana Lúcia. Lafiya lau, na gode!', 'sunana', 'lafiya lau', 'sannu'],
          hint: 'Devolva o cumprimento (“Sannu!”), diga seu nome com “Sunana…” e responda “Lafiya lau, na gode!”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento (“Sannu”), nome (“Sunana…”) e como você está (“Lafiya lau”).',
      },
    ],
  },
  {
    id: 'ha-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Iyali da abinci',
    emoji: '👪',
    card: {
      id: 'ha-c2',
      title: 'Hospitalidade: comida para quem chega',
      emoji: '🍽️',
      history:
        'A hospitalidade é um valor central na cultura hauçá: receber uma visita com comida e bebida é quase uma obrigação social, e recusar um convite para comer pode soar como desfeita. A família extensa — pai, mãe, irmãos, tios e avós morando perto ou na mesma casa — é a base da vida social tradicional, sobretudo nas cidades-estado históricas do norte da Nigéria, como Kano e Katsina.',
      culture_tip:
        'Ao receber chá (shayi) ou água (ruwa) como visita, aceitar é visto como gentileza; recusar sem um bom motivo pode soar indelicado.',
      grammar_why:
        'Para dizer “de fulano”, o hauçá gruda um sufixo no fim do substantivo possuído: “-n” nos masculinos (“gidan Audu”, a casa do Audu), “-r” nos femininos terminados em “-a” (“motar Amina”, o carro da Amina) — nada de um “de” solto como em português.',
      grammar_examples: [
        ['Ina da ɗan’uwa da ’yar’uwa.', 'Eu tenho um irmão e uma irmã.'],
        ['Gidan Audu.', 'A casa do Audu.'],
        ['Motar Amina.', 'O carro da Amina.'],
        ['Ruwa ko shayi?', 'Água ou chá?'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ha-u2-l1',
        title: 'Iyalina',
        kind: 'licao',
        words: ['uba', 'uwa', 'ɗan’uwa', '’yar’uwa', 'yaro', 'yarinya'],
        cloze: [
          { sentence: 'Wannan ___ ne.', answer: 'uba', options: ['uba', 'yaro', 'ɗan’uwa'], translation: 'Este é o pai.' },
          { sentence: 'Wannan ___ ce.', answer: 'uwa', options: ['uwa', 'yarinya', '’yar’uwa'], translation: 'Esta é a mãe.' },
          { sentence: 'Ina da ___.', answer: 'ɗan’uwa', options: ['ɗan’uwa', '’yar’uwa', 'yaro'], translation: 'Eu tenho um irmão.' },
        ],
        voice: {
          bot: 'Kana da ɗan’uwa ko ’yar’uwa?',
          botTranslation: 'Você tem irmão ou irmã?',
          expected: ['Ina da ɗan’uwa da ’yar’uwa.', 'ina da', 'ɗan’uwa'],
          hint: 'Responda com “Ina da…” e o nome do parente.',
        },
        communityPrompt: 'Descreva sua família em hauçá: quem você tem, usando “Ina da…” (uba, uwa, ɗan’uwa, ’yar’uwa).',
      },
      {
        id: 'ha-u2-l2',
        title: 'Ruwa, abinci da shayi',
        kind: 'licao',
        words: ['ruwa', 'abinci', 'shinkafa', 'nama', 'madara', 'shayi'],
        cloze: [
          { sentence: '___ da nama.', answer: 'shinkafa', options: ['shinkafa', 'ruwa', 'madara'], translation: 'Arroz e carne.' },
          { sentence: '___, don Allah!', answer: 'Ruwa', options: ['Ruwa', 'Shayi', 'Madara'], translation: 'Água, por favor!' },
          { sentence: 'Ina da ___.', answer: 'shayi', options: ['shayi', 'ruwa', 'abinci'], translation: 'Eu tenho chá.' },
        ],
        voice: {
          bot: 'Ruwa ko shayi?',
          botTranslation: 'Água ou chá?',
          expected: ['Shayi, don Allah.', 'shayi', 'ruwa'],
          hint: 'Escolha “ruwa” ou “shayi” e peça com “don Allah”.',
        },
        communityPrompt: 'Escreva o que você gosta de beber e comer, usando “ruwa”, “shayi”, “abinci”, “shinkafa” e “nama”.',
      },
      {
        id: 'ha-u2-l3',
        title: 'Jarrabawa: iyali da abinci',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Kana da ɗan’uwa ko ’yar’uwa? Ruwa ko shayi?',
          botTranslation: 'Você tem irmão ou irmã? Água ou chá?',
          expected: ['Ina da ɗan’uwa. Shayi, don Allah.', 'ina da', 'shayi'],
          hint: 'Diga quem você tem na família com “Ina da…” e escolha “ruwa” ou “shayi” com “don Allah”.',
        },
        communityPrompt: 'Escreva cinco frases sobre sua família e o que você come e bebe, usando “Ina da…”, “ne” e “ce”.',
      },
    ],
  },
  {
    id: 'ha-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Kasuwa da lambobi',
    emoji: '🧺',
    card: {
      id: 'ha-c3',
      title: 'Kurmi: o mercado que já tem mais de 500 anos',
      emoji: '🧺',
      history:
        'O mercado de Kurmi, em Kano, nasceu no século XV — a tradição aponta o ano de 1463, sob o rei Muhammad Rumfa — e se tornou o grande entreposto do comércio transaariano: caravanas vindas do norte da África e do Oriente Médio trocavam sal do Saara por couro, tecido e artigos de metal de Kano, e por nozes de cola das florestas da África Ocidental. O mercado sobreviveu a séculos de mudanças, inclusive a uma reconstrução em 1904, já sob a administração colonial britânica, e continua funcionando até hoje, no mesmo lugar.',
      culture_tip:
        'Perguntar o preço com “Nawa ne?” é só o primeiro passo: numa kasuwa hauçá, sobretudo fora das lojas de preço fixo, regatear um pouco faz parte normal da compra.',
      grammar_why:
        'O hauçá tem um tempo chamado completivo, para contar o que já aconteceu: cada pronome ganha uma forma presa direto no verbo — “na” (eu), “ka” (tu, para homem), “ki” (tu, para mulher), “ya” (ele), “ta” (ela), “mun” (nós), “kun” (vós, vocês) e “sun” (eles, elas) —, sem o “-na-” extra do contínuo (“ina”, “kana”…) visto antes.',
      grammar_examples: [
        ['Na saya shinkafa.', 'Eu comprei arroz.'],
        ['Mun tafi kasuwa.', 'Nós fomos ao mercado.'],
        ['Ya zo.', 'Ele veio.'],
        ['Sun sha ruwa.', 'Eles beberam água.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ha-u3-l1',
        title: 'A kasuwa: nawa ne?',
        kind: 'licao',
        words: ['kasuwa', 'kuɗi', 'nawa', 'saya', 'kanti', 'farashi'],
        cloze: [
          { sentence: 'Farashin littafi ___ ne?', answer: 'nawa', options: ['nawa', 'kasuwa', 'kanti'], translation: 'Quanto custa o livro?' },
          { sentence: 'Na ___ shinkafa a kasuwa jiya.', answer: 'saya', options: ['saya', 'farashi', 'kuɗi'], translation: 'Eu comprei arroz no mercado ontem.' },
          { sentence: 'Ina da ___.', answer: 'kuɗi', options: ['kuɗi', 'kanti', 'saya'], translation: 'Eu tenho dinheiro.' },
        ],
        voice: {
          bot: 'Nawa ne wannan littafi?',
          botTranslation: 'Quanto custa este livro?',
          expected: ['Shi ɗari ne.', 'ɗari', 'nawa'],
          hint: 'Responda com um número e “ne”: “Shi ɗari ne.” (São cem.)',
        },
        communityPrompt: 'Escreva um diálogo de compra no mercado: pergunte o preço com “Nawa ne…?” e responda com um número e “ne”.',
      },
      {
        id: 'ha-u3-l2',
        title: 'Lambobi manya',
        kind: 'licao',
        words: ['goma sha ɗaya', 'ashirin', 'talatin', 'hamsin', 'ɗari', 'dubu'],
        cloze: [
          { sentence: 'Yara ___.', answer: 'goma sha ɗaya', options: ['goma sha ɗaya', 'ashirin', 'talatin'], translation: 'Onze crianças.' },
          { sentence: 'Littattafai ___.', answer: 'hamsin', options: ['hamsin', 'ɗari', 'dubu'], translation: 'Cinquenta livros.' },
          { sentence: 'Yara ___.', answer: 'dubu', options: ['dubu', 'ɗari', 'ashirin'], translation: 'Mil crianças.' },
        ],
        voice: {
          bot: 'Yara nawa?',
          botTranslation: 'Quantas crianças?',
          expected: ['Yara ashirin.', 'ashirin', 'yara'],
          hint: 'Responda só com o número e “yara”: “Yara ashirin.” (vinte crianças)',
        },
        communityPrompt: 'Escreva em hauçá cinco frases com números maiores que dez (goma sha ɗaya, ashirin, talatin, hamsin, ɗari, dubu) e um substantivo, como “Yara ashirin” (vinte crianças).',
      },
      {
        id: 'ha-u3-l3',
        title: 'Jarrabawa: kasuwa da lambobi',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Mun tafi kasuwa. Nawa ne wannan littafi?',
          botTranslation: 'Fomos ao mercado. Quanto custa este livro?',
          expected: ['Ɗari ne. Ina da kuɗi. Zan saya littafi.', 'ɗari ne', 'zan saya'],
          hint: 'Diga o preço com um número e “ne” (“Ɗari ne”), diga que tem dinheiro (“Ina da kuɗi”) e feche com o futuro “Zan saya littafi” (Eu vou comprar o livro).',
        },
        communityPrompt: 'Escreva um diálogo completo de compra no mercado: pergunte o preço com “Nawa ne…?”, responda com um número e “ne”, e diga o que vai comprar com “Zan saya…”.',
      },
    ],
  },
  {
    id: 'ha-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Jiya, yau da gobe',
    emoji: '🏫',
    card: {
      id: 'ha-c4',
      title: 'Makaranta: duas escolas, um país',
      emoji: '🏫',
      history:
        'No norte da Nigéria, duas tradições de ensino convivem. “Makaranta” — palavra que vem de “karanta”, ler — é como se chama a escola em geral, incluindo o modelo estatal de língua inglesa implantado ainda no período colonial britânico. Já a “makarantar allo” (o sistema tsangaya) é a escola corânica tradicional, voltada à memorização do Alcorão e à leitura do árabe, em que o aluno (almajiri) costuma morar com o próprio mestre em vez de ir e voltar todo dia. O sistema tsangaya existe há décadas e ainda forma parte importante da educação religiosa na região, mesmo tendo perdido espaço depois que o inglês se tornou a língua oficial do ensino.',
      culture_tip:
        'Assim como “Sannu”, os hauçás também trocam saudações que mudam com a hora do dia: “Barka da yamma!” é a saudação da tarde — “barka” (seja bem-vindo, parabéns) entra em várias saudações hauçás, sempre seguida de “da” e o momento ou a ocasião.',
      grammar_why:
        'O futuro do hauçá usa a partícula “za” antes do pronome, e em duas pessoas as duas palavras se contraem numa só: “zan” (eu vou, de “za” + “ni”) e “zai” (ele vai, de “za” + “shi”). Nas outras pessoas, “za” fica separado: “za ka”/“za ki” (tu vais, para homem/mulher), “za ta” (ela vai), “za mu” (nós vamos), “za ku” (vós ides) e “za su” (eles vão). Como o sujeito já está embutido na própria forma, o pronome independente (ni, kai, ke…) quase sempre fica de fora.',
      grammar_examples: [
        ['Zan tafi makaranta gobe.', 'Eu vou à escola amanhã.'],
        ['Za ka tafi aiki?', 'Você vai trabalhar? (para homem)'],
        ['Zai zo.', 'Ele vai vir.'],
        ['Za su tafi kasuwa da yamma.', 'Eles vão ao mercado de tarde.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ha-u4-l1',
        title: 'Jiya, yau, gobe',
        kind: 'licao',
        words: ['yau', 'jiya', 'gobe', 'safe', 'yamma', 'bayan'],
        cloze: [
          { sentence: 'Mun saya shinkafa ___.', answer: 'yau', options: ['yau', 'jiya', 'gobe'], translation: 'Nós compramos arroz hoje.' },
          { sentence: 'Na saya littafi ___.', answer: 'jiya', options: ['jiya', 'yau', 'safe'], translation: 'Eu comprei um livro ontem.' },
          { sentence: '___ makaranta, zan tafi kasuwa.', answer: 'Bayan', options: ['Bayan', 'Gobe', 'Yamma'], translation: 'Depois da escola, eu vou ao mercado.' },
        ],
        voice: {
          bot: 'Za ka tafi makaranta gobe?',
          botTranslation: 'Você vai à escola amanhã?',
          expected: ['Eh, zan tafi makaranta gobe safe.', 'zan tafi', 'gobe'],
          hint: 'Responda com “Eh” (sim) e o futuro “zan tafi…”: “Eh, zan tafi makaranta gobe safe.”',
        },
        communityPrompt: 'Escreva em hauçá três frases sobre o seu dia: o que você fez ontem (“jiya”), o que fez hoje (“yau”) e o que vai fazer amanhã (“gobe”), usando “na…” e “zan…”.',
      },
      {
        id: 'ha-u4-l2',
        title: 'Aiki, makaranta da lokaci',
        kind: 'licao',
        words: ['aiki', 'makaranta', 'likita', 'mako', 'shekara', 'tafi'],
        cloze: [
          { sentence: 'Zan tafi ___ gobe.', answer: 'aiki', options: ['aiki', 'makaranta', 'likita'], translation: 'Eu vou trabalhar amanhã.' },
          { sentence: '___ ya zo gobe.', answer: 'Likita', options: ['Likita', 'Mako', 'Shekara'], translation: 'O médico vem amanhã.' },
          { sentence: '___ ɗaya.', answer: 'Mako', options: ['Mako', 'Shekara', 'Aiki'], translation: 'Uma semana.' },
        ],
        voice: {
          bot: 'Kana aiki ko makaranta?',
          botTranslation: 'Você está no trabalho ou na escola?',
          expected: ['Ina makaranta.', 'ina makaranta', 'ina aiki'],
          hint: 'Responda com “Ina…” e o lugar: “Ina makaranta.” (Estou na escola.)',
        },
        communityPrompt: 'Escreva em hauçá sobre a sua rotina: quando você vai ao trabalho ou à escola (“Zan tafi…”), e há quanto tempo (“mako”, “shekara”).',
      },
      {
        id: 'ha-u4-l3',
        title: 'Jarrabawa: jiya, yau da gobe',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Za ka tafi aiki ko makaranta gobe?',
          botTranslation: 'Você vai trabalhar ou estudar amanhã?',
          expected: ['Zan tafi makaranta gobe safe.', 'zan tafi makaranta', 'gobe safe'],
          hint: 'Responda com o futuro “Zan tafi…” e diga quando, com “gobe safe” (amanhã de manhã).',
        },
        communityPrompt: 'Escreva cinco frases em hauçá sobre seus planos, usando o futuro “Zan…” e as palavras “gobe”, “mako” e “shekara”.',
      },
    ],
  },
];
