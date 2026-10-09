import type { UnitSeed } from '../types';

/**
 * Trilha do tagalo: as duas unidades do nível A1 e agora as duas do A2 (o pacote está marcado como
 * novo e incompleto — ver `incomplete` em index.ts). De B1 ao C2 chega depois.
 */
export const UNITS_TL: UnitSeed[] = [
  {
    id: 'tl-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Kumusta! Unang mga hakbang',
    emoji: '👋',
    card: {
      id: 'tl-c1',
      title: 'A língua por trás do filipino',
      emoji: '🗺️',
      history:
        'O tagalo (Wikang Tagalog) é falado como língua nativa principalmente em Metro Manila e em boa parte da ilha de Luzon, nas Filipinas. Em 1937, o presidente Manuel L. Quezon o escolheu como base da língua nacional do país — hoje chamada de filipino, oficial ao lado do inglês. As Filipinas têm mais de cem línguas locais; o tagalo e o filipino funcionam como língua franca entre elas, parecido com o papel do indonésio na Indonésia (outra língua austronésia deste app).',
      culture_tip:
        'O tagalo não tem um jeito gramatical de dizer “você” formal como o português. Em vez disso, acrescenta-se a partícula “po” nas frases para mostrar respeito a quem é mais velho ou desconhecido: “Salamat po!” é um “obrigado” respeitoso. “Opo” é o “sim” respeitoso, usado para responder a alguém que se quer tratar com educação.',
      grammar_why:
        'Um dos traços mais estudados do tagalo é que o verbo muda de forma para indicar qual parte da frase é o “foco”, marcado pela partícula “ang” — pode ser quem faz a ação, o que recebe a ação, ou outro papel. É um sistema bem diferente do português, chamado de alinhamento austronésio; esta unidade só apresenta os pronomes e as partículas de respeito, o foco do verbo vem na próxima unidade.',
      grammar_examples: [
        ['Mabuti ako.', 'Eu estou bem.'],
        ['Mabuti ka ba?', 'Você está bem?'],
        ['Kain tayo!', 'Vamos comer! (“tayo”, nós incluindo quem ouve)'],
        ['Salamat po!', 'Obrigado! (com respeito)'],
      ],
      character_guide: [
        ['ng', 'som nasal único, como o “ng” de “sing” em inglês, nunca “n” + “g” separados', 'magandang (de “maganda” + o ligante -ng)'],
        ['po / opo', 'partículas de respeito acrescentadas à frase, sem mudar o verbo nem o pronome', 'Salamat po! (obrigado, com respeito), Opo (sim, com respeito)'],
      ],
    },
    lessons: [
      {
        id: 'tl-u1-l1',
        title: 'Kumusta, salamat, paalam',
        kind: 'licao',
        words: ['kumusta', 'magandang umaga', 'paalam', 'salamat', 'oo', 'hindi'],
        cloze: [
          { sentence: '___ ka?', answer: 'Kumusta', options: ['Kumusta', 'Paalam', 'Salamat'], translation: 'Como você está?' },
          { sentence: '___ po!', answer: 'Magandang umaga', options: ['Magandang umaga', 'Paalam', 'Hindi'], translation: 'Bom dia! (com respeito)' },
          { sentence: '___ po!', answer: 'Salamat', options: ['Salamat', 'Oo', 'Hindi'], translation: 'Obrigado! (com respeito)' },
        ],
        voice: {
          bot: 'Kumusta ka?',
          botTranslation: 'Como você está?',
          expected: ['Mabuti ako, salamat! Ikaw?', 'mabuti', 'salamat'],
          hint: 'Responda que está bem com “Mabuti ako” e agradeça com “salamat”.',
        },
        communityPrompt: 'Escreva três frases em tagalo: uma pergunta com “Kumusta ka?”, um agradecimento com “Salamat” e uma despedida com “Paalam”.',
      },
      {
        id: 'tl-u1-l2',
        title: 'Ako, ikaw, siya',
        kind: 'licao',
        words: ['ako', 'ikaw', 'siya', 'kami', 'tayo', 'sila'],
        cloze: [
          { sentence: 'Mabuti ___.', answer: 'ako', options: ['ako', 'ikaw', 'siya'], translation: 'Eu estou bem.' },
          { sentence: 'Mabuti ka ___?', answer: 'ba', options: ['ba', 'ako', 'po'], translation: 'Você está bem?' },
          { sentence: 'Kain ___!', answer: 'tayo', options: ['tayo', 'kami', 'sila'], translation: 'Vamos comer! (incluindo quem ouve)' },
        ],
        voice: {
          bot: 'Ako si Juan. Ikaw?',
          botTranslation: 'Eu sou o Juan. E você?',
          expected: ['Ako si Ana.', 'ako si'],
          hint: 'Diga o seu nome com “Ako si…” (use o seu próprio nome).',
        },
        communityPrompt: 'Apresente-se em tagalo: diga o seu nome com “Ako si…” e responda “Mabuti ako” a uma pergunta “Kumusta ka?”.',
      },
      {
        id: 'tl-u1-l3',
        title: 'Prova: unang hakbang',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Kumusta ka? Ano ang pangalan mo?',
          botTranslation: 'Como você está? Qual é o seu nome?',
          expected: ['Mabuti ako, salamat! Ako si Lucia.', 'mabuti ako', 'ako si'],
          hint: 'Responda “Mabuti ako, salamat!” e diga o seu nome com “Ako si…”.',
        },
        communityPrompt: 'Escreva uma apresentação curta: como você está (“Mabuti ako”), o seu nome (“Ako si…”) e uma despedida (“Paalam”).',
      },
    ],
  },
  {
    id: 'tl-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Pamilya at bahay',
    emoji: '👪',
    card: {
      id: 'tl-c2',
      title: 'Kuya e ate: tratamento pela idade, não só parentesco',
      emoji: '🧭',
      history:
        'Em filipino, “kuya” (irmão mais velho) e “ate” (irmã mais velha) vêm do chinês hokkien — heranças do comércio chinês antigo nas Filipinas, assim como “tinapay” (pão, de “tapay” + o infixo “-in-”) tem raiz austronésia e “salamat” (obrigado) veio do malaio “selamat”, que por sua vez veio do árabe “salama”. O tagalo juntou camadas de empréstimos de vários povos — malaios, chineses, espanhóis, depois americanos — sem deixar de ser, na gramática, uma língua bem austronésia.',
      culture_tip:
        'Nas Filipinas, “kuya” e “ate” não são usados só para irmãos de verdade: é comum chamar assim qualquer pessoa um pouco mais velha, mesmo sem parentesco — um sinal de respeito e proximidade ao mesmo tempo, parecido com “kakak” no indonésio (outra língua austronésia deste app), mas aqui os nomes dos dois são diferentes para cada sexo.',
      grammar_why:
        'Para juntar um número a um substantivo, o tagalo usa um pequeno “ligante”: “-ng” colado na palavra se ela termina em vogal, “na” separado se termina em consoante. Por isso “três cachorros” é “tatlong aso” (tatlo termina em vogal), mas “quatro casas” é “apat na bahay” (apat termina em consoante “t”).',
      grammar_examples: [
        ['Mabuti si Kuya.', 'O meu irmão mais velho está bem.'],
        ['Mabuti si Ate.', 'A minha irmã mais velha está bem.'],
        ['tatlong aso', 'três cachorros (tatlo + -ng, porque “tatlo” termina em vogal)'],
        ['apat na bahay', 'quatro casas (apat + na, porque “apat” termina em consoante)'],
      ],
      character_guide: [
        ["' (glottal stop)", 'travamento rápido na garganta, sem letra própria na escrita comum — só marcado nos dicionários', 'hindî [hinˈdiʔ] (não)'],
      ],
    },
    lessons: [
      {
        id: 'tl-u2-l1',
        title: 'Nanay, tatay, kuya, ate',
        kind: 'licao',
        words: ['nanay', 'tatay', 'kuya', 'ate', 'mabuti', 'masama'],
        cloze: [
          { sentence: 'Mabuti si ___.', answer: 'Nanay', options: ['Nanay', 'Tatay', 'Kuya'], translation: 'A mamãe está bem.' },
          { sentence: 'Mabuti si ___.', answer: 'Kuya', options: ['Kuya', 'Ate', 'Nanay'], translation: 'O irmão mais velho está bem.' },
          { sentence: '___ ba ito?', answer: 'Masama', options: ['Masama', 'Mabuti', 'Hindi'], translation: 'Isto é ruim?' },
        ],
        voice: {
          bot: 'Mabuti ba si Nanay?',
          botTranslation: 'A sua mãe está bem?',
          expected: ['Opo, mabuti po si Nanay.', 'mabuti', 'opo'],
          hint: 'Responda com “Opo, mabuti po…” para mostrar respeito.',
        },
        communityPrompt: 'Escreva sobre a sua família em tagalo: quem é “Nanay”, “Tatay”, e se você tem um “Kuya” ou uma “Ate”.',
      },
      {
        id: 'tl-u2-l2',
        title: 'Sa bahay',
        kind: 'licao',
        words: ['bahay', 'pinto', 'mesa', 'pagkain', 'isa', 'dalawa'],
        cloze: [
          { sentence: 'Malaki ang ___.', answer: 'bahay', options: ['bahay', 'pinto', 'mesa'], translation: 'A casa é grande.' },
          { sentence: 'Mabuti ang ___.', answer: 'pagkain', options: ['pagkain', 'bahay', 'mesa'], translation: 'A comida é boa.' },
          { sentence: '___ na bahay', answer: 'apat', options: ['apat', 'isa', 'dalawa'], translation: 'quatro casas' },
        ],
        voice: {
          bot: 'Malaki ba ang bahay mo?',
          botTranslation: 'A sua casa é grande?',
          expected: ['Hindi, maliit ang bahay ko.', 'maliit', 'bahay ko'],
          hint: 'Responda com “Malaki ang bahay ko” (grande) ou “Maliit ang bahay ko” (pequena).',
        },
        communityPrompt: 'Descreva a sua casa em duas frases: se é “malaki” (grande) ou “maliit” (pequena), e o que você gosta de comer (“pagkain”) nela.',
      },
      {
        id: 'tl-u2-l3',
        title: 'Prova: pamilya at bahay',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Kumusta ang pamilya mo? Malaki ba ang bahay mo?',
          botTranslation: 'Como está a sua família? A sua casa é grande?',
          expected: ['Mabuti si Nanay at si Tatay. Malaki ang bahay namin.', 'mabuti si', 'bahay'],
          hint: 'Fale de “Nanay” e “Tatay” com “Mabuti si…” e descreva a casa com “Malaki ang bahay…” ou “Maliit ang bahay…”.',
        },
        communityPrompt: 'Escreva um parágrafo curto sobre a sua família e a sua casa, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
  {
    id: 'tl-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Araw-araw: oras, panahon at pamilihan',
    emoji: '🌦️',
    card: {
      id: 'tl-c3',
      title: 'Sol, chuva e tufão: o clima das Filipinas',
      emoji: '🌀',
      history:
        'As Filipinas têm clima tropical, com temperatura média de cerca de 26,6°C o ano todo. Em vez de quatro estações, o país tem duas: a estação chuvosa (Habagat), de junho a outubro, ligada à monção do sudoeste, e a estação seca (Amihan), de novembro a maio — fria de novembro a fevereiro, calorenta de março a maio (os filipinos chamam esse período de “verão”). É também nessa estação chuvosa, entre julho e outubro, que caem os tufões (bagyo), porque as Filipinas ficam dentro da faixa de tufões do Pacífico (en.wikipedia.org/wiki/Climate_of_the_Philippines).',
      culture_tip:
        '“Palengke” e “tindahan” não são a mesma coisa: o palengke é o mercado aberto, geralmente de comida fresca (peixe, carne, fruta), e “tindahan” é uma loja mais genérica — a própria palavra vem de “tinda” (mercadoria) mais o sufixo “-han” (lugar de), ou seja, “lugar de mercadoria” (en.wiktionary.org, verbetes “palengke” e “tindahan”). Regatear o preço no palengke é comum; numa tindahan de bairro, menos.',
      grammar_why:
        'Esta unidade junta os marcadores de tempo (“bukas”, amanhã; “kahapon”, ontem; “ngayon”, agora/hoje) com os comparativos (“mas… kaysa”, mais… do que) — dois jeitos de situar uma frase no tempo e de comparar preços ou coisas no palengke. Veja os tópicos de gramática desta unidade para a lista completa, com as fontes de cada exemplo.',
      grammar_examples: [
        ['Hindî akó magtatrabaho bukas.', 'Eu não vou trabalhar amanhã.'],
        ['Nakità kitá sa tindahan kahapon.', 'Eu te vi na loja ontem.'],
        ['Mas mahal ang talong dito kumpara sa kabilang palengke.', 'A berinjela aqui é mais cara comparada com a do outro mercado.'],
        ['Walâ akóng pera.', 'Eu não tenho dinheiro.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'tl-u3-l1',
        title: 'Anong oras na? Mainit o malamig?',
        kind: 'licao',
        words: ['oras', 'bukas', 'kahapon', 'ngayon', 'mainit', 'malamig'],
        cloze: [
          { sentence: 'Ano ang ___?', answer: 'oras', options: ['oras', 'bukas', 'ngayon'], translation: 'Que horas são?' },
          { sentence: 'Hindî akó magtatrabaho ___.', answer: 'bukas', options: ['bukas', 'kahapon', 'ngayon'], translation: 'Eu não vou trabalhar amanhã.' },
          { sentence: '___ ang tubig.', answer: 'Mainit', options: ['Mainit', 'Malamig', 'Ngayon'], translation: 'A água está quente.' },
        ],
        voice: {
          bot: 'Mainit ba o malamig ngayon?',
          botTranslation: 'Está quente ou frio agora?',
          expected: ['Mainit ngayon.', 'mainit', 'malamig'],
          hint: 'Responda com “Mainit ngayon” (quente) ou “Malamig ngayon” (frio).',
        },
        communityPrompt: 'Escreva três frases em tagalo usando “bukas” (amanhã), “kahapon” (ontem) e “ngayon” (agora/hoje).',
      },
      {
        id: 'tl-u3-l2',
        title: 'Sa palengke',
        kind: 'licao',
        words: ['pera', 'bumili', 'mahal', 'mura', 'tindahan', 'palengke'],
        cloze: [
          { sentence: 'Walâ akóng ___.', answer: 'pera', options: ['pera', 'tindahan', 'palengke'], translation: 'Eu não tenho dinheiro.' },
          { sentence: 'Malaki ang ___.', answer: 'tindahan', options: ['tindahan', 'pera', 'mura'], translation: 'A loja é grande.' },
          { sentence: '___ ang tinapay.', answer: 'Mura', options: ['Mura', 'Mahal', 'Pera'], translation: 'O pão é barato.' },
        ],
        voice: {
          bot: 'Magkano ho ito?',
          botTranslation: 'Quanto custa isto?',
          expected: ['Mura ito.', 'mura', 'mahal'],
          hint: 'Responda se é “mura” (barato) ou “mahal” (caro).',
        },
        communityPrompt: 'Escreva sobre uma compra no “palengke” (mercado): o que você comprou (“bumili ako ng…”) e se foi “mura” (barato) ou “mahal” (caro).',
      },
      {
        id: 'tl-u3-l3',
        title: 'Prova: araw-araw',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Kumusta ang panahon ngayon? Magkano ang tinapay sa palengke?',
          botTranslation: 'Como está o clima agora? Quanto custa o pão no mercado?',
          expected: ['Mabuti ang panahon. Mura ang tinapay.', 'mabuti ang panahon', 'mura'],
          hint: 'Descreva o clima com “Mabuti ang panahon” e o preço com “mura” (barato) ou “mahal” (caro).',
        },
        communityPrompt: 'Escreva um parágrafo curto sobre o seu dia: que horas são (“oras”), o que foi ontem (“kahapon”) e algo que você comprou no mercado (“palengke”).',
      },
    ],
  },
  {
    id: 'tl-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Sa trabaho at sa ospital',
    emoji: '🏥',
    card: {
      id: 'tl-c4',
      title: 'Dyipni: o transporte símbolo das Filipinas',
      emoji: '🚌',
      history:
        'Depois da Segunda Guerra Mundial, os jipes militares Willys MB que as forças dos EUA deixaram nas Filipinas foram reformados por filipinos em veículos de passageiros coloridos e cheios de bancos — a jeepney (“dyipni” em tagalo), hoje o transporte público mais comum do país e um símbolo cultural. O nome é a junção de “jeep” com “jitney”, uma gíria pré-guerra para um táxi coletivo barato (en.wikipedia.org/wiki/Jeepney).',
      culture_tip:
        'Com médicos (“doktor”) e enfermeiros (“nars”), os filipinos costumam manter o “po”/“opo” (já visto na unidade 1) mesmo em consultas rápidas — é um jeito de mostrar respeito a quem cuida da sua saúde, do mesmo jeito que se usa com os mais velhos da família.',
      grammar_why:
        'Nesta unidade, o foco é o aspecto do verbo (completado, incompleto e contemplado) e mais prefixos de ator além do -um- já visto: “mag-” (magbayad, pagar) e “ma-” (maligo, banhar-se; gumising usa -um-). Veja os tópicos de gramática desta unidade para a lista completa de exemplos, com as fontes.',
      grammar_examples: [
        ['Naglutò ang babae.', 'A mulher cozinhou. (completado)'],
        ['Gumising ka na.', 'Levanta já. (imperativo)'],
        ['Maligo ka na.', 'Vai se banhar já. (imperativo)'],
        ['Masakit ang tiyan ko.', 'Minha barriga dói.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'tl-u4-l1',
        title: 'Guro, doktor, trabaho',
        kind: 'licao',
        words: ['guro', 'doktor', 'trabaho', 'sasakyan', 'kotse', 'biyahe'],
        cloze: [
          { sentence: '___ ako.', answer: 'Guro', options: ['Guro', 'Doktor', 'Trabaho'], translation: 'Eu sou professor(a).' },
          { sentence: '___ siya.', answer: 'Doktor', options: ['Doktor', 'Guro', 'Kotse'], translation: 'Ele/ela é médico(a).' },
          { sentence: 'Maliit ang ___.', answer: 'kotse', options: ['kotse', 'trabaho', 'biyahe'], translation: 'O carro é pequeno.' },
        ],
        voice: {
          bot: 'Ano ang trabaho mo?',
          botTranslation: 'Qual é o seu trabalho?',
          expected: ['Guro ako.', 'guro', 'doktor'],
          hint: 'Diga a sua profissão: “Guro ako.”, “Doktor ako.” ou outra da lição.',
        },
        communityPrompt: 'Escreva três frases em tagalo dizendo profissões com o padrão “[profissão] ako/siya”: por exemplo “Guro ako.” ou “Doktor siya.”.',
      },
      {
        id: 'tl-u4-l2',
        title: 'Sa ospital',
        kind: 'licao',
        words: ['ospital', 'gamot', 'masakit', 'ngipin', 'likod', 'tiyan'],
        cloze: [
          { sentence: '___ ang tiyan ko.', answer: 'Masakit', options: ['Masakit', 'Mabuti', 'Malaki'], translation: 'Minha barriga dói.' },
          { sentence: 'Malaki ang ___.', answer: 'ospital', options: ['ospital', 'gamot', 'ngipin'], translation: 'O hospital é grande.' },
          { sentence: 'Mabuti ang ___.', answer: 'gamot', options: ['gamot', 'likod', 'ngipin'], translation: 'O remédio é bom.' },
        ],
        voice: {
          bot: 'Masakit ba ang tiyan mo?',
          botTranslation: 'Sua barriga dói?',
          expected: ['Opo, masakit ang tiyan ko.', 'masakit', 'opo'],
          hint: 'Responda com respeito: “Opo, masakit ang tiyan ko.” ou “Hindi po.”',
        },
        communityPrompt: 'Escreva uma frase dizendo que alguma parte do corpo dói, usando “Masakit ang ___ ko.” (ngipin, likod, tiyan ou outra).',
      },
      {
        id: 'tl-u4-l3',
        title: 'Prova: trabaho at kalusugan',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ano ang trabaho mo? Masakit ba ang ulo mo?',
          botTranslation: 'Qual é o seu trabalho? Sua cabeça dói?',
          expected: ['Guro ako. Hindi masakit ang ulo ko.', 'guro ako', 'masakit'],
          hint: 'Diga sua profissão com “[profissão] ako.” e responda sobre a dor com “masakit” ou “hindi masakit”.',
        },
        communityPrompt: 'Escreva um parágrafo curto: sua profissão (“guro”, “doktor”…), um meio de transporte que você usa (“sasakyan”, “kotse”…) e como está sua saúde hoje.',
      },
    ],
  },
];
