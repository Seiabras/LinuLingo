import type { UnitSeed } from '../types';

/**
 * Trilha do kamaiurá, do A1.1 ao A2.2 (o teto do idioma). Fonte: Lucy Seki, «Gramática do Kamaiurá» (2000) — ver o comentário do
 * topo de vocabulario.ts. As frases das lacunas e dos desafios de voz são exemplos da gramática (número
 * entre parênteses nos comentários) ou trocam uma só palavra num molde atestado, sem inventar
 * morfologia: «Erejo ko'yt? — Ajo ko'yt» (texto de Arawitará, linhas 16–17), «Ije Kawa» → «Ije Linu»
 * (797a), «Kamajura ako» (798a), «Haj, mawite?» (230), «Po ipira a'ep? — Anite ipira a'ep» (521)–(522),
 * «Ywaka tsowy» (298), «Tata heny» (1436a), «Kunu'uma oket» (468), «Aha wey'um» (425).
 */
export const UNITS_KAY: UnitSeed[] = [
  {
    id: 'kay-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: "Erejo ko'yt?",
    emoji: '👋',
    card: {
      id: 'kay-c1',
      title: 'Kamaiurá: uma língua tupi-guarani no coração do Xingu',
      emoji: '🌿',
      history:
        'O kamaiurá é a língua do povo Kamaiurá, que vive às margens da lagoa Ipavu (Ypawu, na própria língua), no Parque Indígena do Xingu, em Mato Grosso — cerca de 710 pessoas em 2020, segundo a Sesai. É da família tupi-guarani, a mesma do guarani e do tupi antigo, mas forma sozinha um ramo próprio dentro dela: o linguista Aryon Rodrigues (1985) a colocou como única integrante do “subconjunto VII” da família, por traços como a conservação das consoantes no fim das palavras (kwat, sol; jawat, onça). A grande descrição da língua é a “Gramática do Kamaiurá” de Lucy Seki (2000), fruto de pesquisa com o povo desde 1968. Os próprios Kamaiurá contam que, antigamente, o povo se chamava Jamyrá e vivia junto dos Tapirapé, até subir o Xingu e se fixar na lagoa; desde a passagem pelo Morená, chamam a si mesmos de Apyap.',
      culture_tip:
        'O Alto Xingu é um lugar raro no mundo: povos de quatro famílias de línguas diferentes (tupi, aruak, karib e o trumai, uma língua isolada) dividem os mesmos rituais — o kwaryp (quarup), festa em memória dos mortos; o jawari, jogo de arremesso de flechas; a luta huka-huka (joetykap, em kamaiurá) —, mas cada povo fala a sua própria língua, sem uma língua franca comum. A língua é a marca da identidade de cada povo. Por isso a saudação kamaiurá não é um “oi” genérico: quem recebe pergunta “Erejo ko\'yt?” (você veio?), e quem chega responde “Ajo ko\'yt” (eu vim).',
      grammar_why:
        'O kamaiurá não precisa de verbo “ser” para dizer quem alguém é: “Ije morerekwat” já é “eu sou chefe” (lit. “eu chefe”), e “Awa ene?” é “quem é você?” (lit. “quem você?”). E há dois “nós”: “jene” inclui quem ouve (eu e você), “ore” deixa quem ouve de fora (eu e eles, mas não você).',
      grammar_examples: [
        ["Erejo ko'yt? — Ajo ko'yt.", 'Você veio? — Eu vim.'],
        ['Awa ene? — Ije Linu.', 'Quem é você? — Eu sou o Linu.'],
        ['Ije morerekwat.', 'Eu sou chefe.'],
        ['Jene retama.', 'Nossa aldeia (de todos nós, com você).'],
      ],
      character_guide: [
        ["' (apóstrofo)", 'uma pausa curta na garganta (oclusiva glotal), como no meio de “uh-oh”', "'y (água), kunu'um (menino), ka'ahet (livro)"],
        ['y', 'vogal entre o “i” e o “u”, com a língua no meio da boca e os lábios sem arredondar', "ywaka (céu), 'y (água), wyra (pássaro)"],
        ['ŋ', 'o som do “ng” de “ring” em inglês, o mesmo do fim de “manga” falado depressa', "akaŋ (cabeça), je'eŋ (falar)"],
        ['ts', 'um som só, como o “ts” de “tsunami”', 'tsiŋ (branco), pitsun (preto)'],
        ['j', 'som de “i” rápido antes de vogal, como em “iate”', 'jawat (onça), jay (lua), ije (eu)'],
        ['ã, ẽ, ĩ, õ, ũ, ỹ', 'vogal nasal: sai também pelo nariz', "kujã (mulher), he'ẽ (sim), mokõj (dois)"],
      ],
    },
    lessons: [
      {
        id: 'kay-u1-l1',
        title: "Erejo ko'yt, he'ẽ, anite",
        kind: 'licao',
        words: ["erejo ko'yt", "ajo ko'yt", "he'ẽ", 'anite', 'kõ', 'aje'],
        cloze: [
          { sentence: "Erejo ko'yt? — ___.", answer: "Ajo ko'yt", options: ["Ajo ko'yt", 'Anite', 'Kõ'], translation: 'Você veio? — Eu vim.' },
          { sentence: 'Po ne akaŋay? — ___.', answer: 'Anite', options: ['Anite', 'Aje', 'Kõ'], translation: 'Sua cabeça está doendo? — Não.' },
          { sentence: '___, taetsakane.', answer: 'Kõ', options: ['Kõ', "He'ẽ", 'Aje'], translation: 'Não sei, vou ver ainda.' },
        ],
        voice: {
          bot: "Erejo ko'yt?",
          botTranslation: 'Você veio? (é assim que se recebe quem chega)',
          expected: ["Ajo ko'yt.", "ajo ko'yt"],
          hint: "Responda “Ajo ko'yt” (eu vim).",
        },
        communityPrompt: "Escreva um pequeno diálogo de chegada: alguém pergunta “Erejo ko'yt?” e você responde “Ajo ko'yt”. Depois responda a uma pergunta com “he'ẽ” (sim), “anite” (não) ou “kõ” (não sei).",
      },
      {
        id: 'kay-u1-l2',
        title: 'Ije, ene, jene, ore',
        kind: 'licao',
        words: ['ije', 'ene', "a'e", 'jene', 'ore', 'pehẽ'],
        cloze: [
          { sentence: '___ morerekwat.', answer: 'Ije', options: ['Ije', 'Pehẽ', 'Ore'], translation: 'Eu sou chefe.' },
          { sentence: 'Awa ___?', answer: 'ene', options: ['ene', 'ije', 'ore'], translation: 'Quem é você?' },
          { sentence: '___ retama.', answer: 'Jene', options: ['Jene', 'Ore', 'Pehẽ'], translation: 'Nossa aldeia (de todos nós, incluindo você).' },
        ],
        voice: {
          bot: 'Awa ene?',
          botTranslation: 'Quem é você?',
          expected: ['Ije Linu.', 'ije'],
          hint: 'Responda “Ije” seguido do seu nome — sem verbo “ser”: “Ije Linu.”',
        },
        communityPrompt: 'Apresente-se com “Ije…” e pergunte “Awa ene?”. Depois escreva uma frase com “jene” (nós, com você) e outra com “ore” (nós, sem você).',
      },
      {
        id: 'kay-u1-l3',
        title: "Kamajura ako: kujã, akwama'e, kunu'um",
        kind: 'licao',
        words: ['kamajura', "kunu'um", 'kujã', "akwama'e", 'paje', 'jyjryp'],
        cloze: [
          { sentence: 'Jawara ___.', answer: 'kujã', options: ['kujã', "akwama'e", 'paje'], translation: 'Onça fêmea.' },
          { sentence: 'Kamajura ___.', answer: 'ako', options: ['ako', 'ereko', 'ojan'], translation: 'Eu sou kamaiurá.' },
          { sentence: '___ ereko.', answer: 'Paje', options: ['Paje', "Kunu'um", 'Jyjryp'], translation: 'Você é pajé.' },
        ],
        voice: {
          bot: 'Jawara kujã.',
          botTranslation: 'Onça fêmea.',
          expected: ["Jawara akwama'e.", "akwama'e"],
          hint: "Troque “kujã” (mulher, fêmea) por “akwama'e” (homem, macho).",
        },
        communityPrompt: "Escreva quem é quem: “Paje ereko” (você é pajé), “Kamajura ako” (eu sou kamaiurá); e diga se um bicho é macho ou fêmea com “akwama'e” e “kujã”.",
      },
      {
        id: 'kay-u1-l4',
        title: 'Awa? Mam? Mawite?',
        kind: 'licao',
        words: ['awa', 'mam', 'mawite', 'haj', 'ha', 'jot'],
        cloze: [
          { sentence: '___ ene?', answer: 'Awa', options: ['Awa', 'Mam', 'Mawite'], translation: 'Quem é você?' },
          { sentence: '___ jako?', answer: 'Mawite', options: ['Mawite', 'Awa', 'Mam'], translation: 'Como vamos fazer?' },
          { sentence: '___ wararuwijawa rekow?', answer: 'Mam', options: ['Mam', 'Awa', 'Haj'], translation: 'Onde está o cachorro?' },
        ],
        voice: {
          bot: 'Linu!',
          botTranslation: 'Linu! (alguém está chamando você)',
          expected: ['Haj, mawite?', 'haj'],
          hint: 'Responda a quem chama com “Haj” (pois não?) e pergunte “mawite?” (o que é?).',
        },
        communityPrompt: "Escreva três perguntas com “awa” (quem?), “mam” (onde?) e “mawite” (como?), e uma frase dizendo que você já vai: “Aha ko'yt.”",
      },
      {
        id: 'kay-u1-l5',
        title: "Prova: Erejo ko'yt?",
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: "Erejo ko'yt? Awa ene?",
          botTranslation: 'Você veio? Quem é você?',
          expected: ["Ajo ko'yt. Ije Linu.", "ajo ko'yt"],
          hint: "Responda às duas perguntas: “Ajo ko'yt” (eu vim) e “Ije…” com o seu nome.",
        },
        communityPrompt: "Escreva uma chegada completa na aldeia: a saudação “Erejo ko'yt?”, a resposta, quem você é (“Ije…”) e uma resposta com “he'ẽ”, “anite” ou “kõ”.",
      },
    ],
  },
  {
    id: 'kay-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: "Mojepete, mokõj, mo'apyt",
    emoji: '🖐️',
    card: {
      id: 'kay-c2',
      title: 'Contar nas mãos, nomear o mundo',
      emoji: '✋',
      history:
        'Os números do kamaiurá contam a história dos dedos. “Mojepete, mokõj, mo\'apyt, mojo\'irũ” são um, dois, três e quatro; o cinco, “jenepomomap”, quer dizer “fazer terminar a nossa mão”, e o dez, “jenepopap”, “as nossas mãos terminaram”. Do seis ao nove se diz “passar pela nossa mão uma vez, duas vezes…” (“jene poa wero\'yahap mojepete” é seis), e do quinze em diante entram os pés: o vinte é “os nossos pés terminaram os dois”. Para o tempo, o sol e a lua servem de relógio: “kwara o\'at” (o sol caiu) quer dizer “passou um ano”, e repetir “jaya” (lua) conta os meses.',
      culture_tip:
        'Quando chegaram coisas novas à aldeia, o kamaiurá criou nomes com as próprias palavras em vez de copiar o português: o relógio é “kwara ra\'aŋap” (imagem do sol), a lanterna é “jaya ra\'aŋap” (imagem da lua), o papel e o livro são “ka\'ahet” (parecido com folha), o metal é “itaju” (pedra amarela), o biscoito é “mejuwe” (falso beiju) e o hospital é “moaŋa pyt” (casa do remédio).',
      grammar_why:
        'Quando um nome é sujeito ou objeto, ele ganha o sufixo “-a”, e a consoante final muda antes dessa vogal: “t” vira “r” e “p” vira “w”. Por isso “kwat” (sol) vira “kwara” em “Kwara o\'at”, e “wararuwijap” (cachorro) vira “wararuwijawa” em “Wararuwijawa ojan” (o cachorro correu). As cores e as qualidades são verbos, com o prefixo “i-” (é…): “Moĩa ipitsun” — a cobra é preta.',
      grammar_examples: [
        ["Mokõj kunu'uma oyk.", 'Dois meninos chegaram.'],
        ["Kwara o'at.", 'Passou um ano (lit. o sol caiu).'],
        ['Wararuwijawa ojan.', 'O cachorro correu.'],
        ['Moĩa ipitsun.', 'A cobra é preta.'],
      ],
      character_guide: [
        ['kw', 'um som só: “k” com os lábios arredondados, como em “quase”', "kwat (sol), kwaryp (quarup)"],
        ['hw', 'um “h” soprado com os lábios arredondados', 'hwã (mão)'],
        ['-t / -r', 'o “t” do fim da palavra vira “r” (um “r” fraco, como em “caro”) antes de vogal', 'kwat → kwara, jawat → jawara'],
        ['-p / -w', 'o “p” do fim da palavra vira “w” antes de vogal', 'wararuwijap → wararuwijawa'],
      ],
    },
    lessons: [
      {
        id: 'kay-u2-l1',
        title: "Mojepete, mokõj, mo'apyt",
        kind: 'licao',
        words: ['mojepete', 'mokõj', "mo'apyt", "mojo'irũ", 'jenepomomap', 'jenepopap'],
        cloze: [
          { sentence: "Mojepete, ___, mo'apyt.", answer: 'mokõj', options: ['mokõj', "mojo'irũ", 'jenepopap'], translation: 'Um, dois, três.' },
          { sentence: "Mo'apyt, ___, jenepomomap.", answer: "mojo'irũ", options: ["mojo'irũ", 'mojepete', 'mokõj'], translation: 'Três, quatro, cinco.' },
          { sentence: "___ kunu'uma oyk.", answer: 'Mokõj', options: ['Mokõj', 'Jenepopap', 'Jenepomomap'], translation: 'Dois meninos chegaram.' },
        ],
        voice: {
          bot: "Mojepete, mokõj, mo'apyt…",
          botTranslation: 'Um, dois, três…',
          expected: ["Mojo'irũ, jenepomomap.", "mojo'irũ"],
          hint: "Continue a contagem: “mojo'irũ” (quatro), “jenepomomap” (cinco — a nossa mão terminou).",
        },
        communityPrompt: "Conte de um a cinco nos dedos de uma mão em kamaiurá, e depois diga dez: “jenepopap” (as nossas mãos terminaram).",
      },
      {
        id: 'kay-u2-l2',
        title: "Kwat, jay, 'y, aman",
        kind: 'licao',
        words: ["'y", 'kwat', 'jay', 'ywaka', 'aman', 'ita'],
        cloze: [
          { sentence: "___ o'at.", answer: 'Kwara', options: ['Kwara', 'Amana', 'Jaya'], translation: 'Passou um ano (lit. o sol caiu).' },
          { sentence: '___ okywe.', answer: 'Amana', options: ['Amana', 'Kwara', 'Ywaka'], translation: 'Ainda está chovendo.' },
          { sentence: "Ka'ahera enuŋ ___ wyrip.", answer: 'ita', options: ['ita', 'ywaka', 'jay'], translation: 'Coloque o papel debaixo da pedra.' },
        ],
        voice: {
          bot: 'Amana okywe.',
          botTranslation: 'Ainda está chovendo.',
          expected: ['Amana okywe.', 'amana'],
          hint: 'Repita: “aman” (chuva) ganha o “-a” de sujeito: “Amana okywe.”',
        },
        communityPrompt: "Escreva sobre o tempo: a chuva (aman), o sol (kwat), a lua (jay) e o céu (ywaka). Use “Kwara o'at” para dizer que passou um ano.",
      },
      {
        id: 'kay-u2-l3',
        title: 'Ipira, jawat, moĩ',
        kind: 'licao',
        words: ['ipira', 'wyra', 'jawat', 'jakare', 'wararuwijap', 'moĩ'],
        cloze: [
          { sentence: "___ oy'u.", answer: 'Jawara', options: ['Jawara', 'Ipira', 'Wyra'], translation: 'A onça está bebendo água.' },
          { sentence: "Po ___ a'ep?", answer: 'ipira', options: ['ipira', 'jawat', 'moĩ'], translation: 'Lá tem peixe?' },
          { sentence: '___ ipitsun.', answer: 'Moĩa', options: ['Moĩa', 'Jawara', 'Wararuwijawa'], translation: 'A cobra é preta.' },
        ],
        voice: {
          bot: "Po ipira a'ep?",
          botTranslation: 'Lá tem peixe?',
          expected: ["Anite ipira a'ep.", 'anite'],
          hint: "Responda que não tem: “Anite ipira a'ep” (lá não tem peixe).",
        },
        communityPrompt: "Pergunte “Po … a'ep?” (lá tem …?) com bichos da lagoa e do mato — ipira, jakare, moĩ — e responda com “anite” quando não tiver.",
      },
      {
        id: 'kay-u2-l4',
        title: 'Tap, tata, ini, meju',
        kind: 'licao',
        words: ['tap', 'tata', 'ini', 'yat', 'meju', "mani'ip"],
        cloze: [
          { sentence: '___ heny.', answer: 'Tata', options: ['Tata', 'Ini', 'Meju'], translation: 'O fogo está aceso.' },
          { sentence: "Po ___ a'ep?", answer: 'ini', options: ['ini', 'tata', 'tap'], translation: 'Lá tem rede?' },
          { sentence: "___, mani'ityp.", answer: "Mani'ip", options: ["Mani'ip", 'Meju', 'Yat'], translation: 'Mandioca, mandiocal.' },
        ],
        voice: {
          bot: 'Tata heny.',
          botTranslation: 'O fogo está aceso.',
          expected: ['Tata heny.', 'tata'],
          hint: 'Repita: “Tata heny” — o fogo está aceso (aceso: “h-eny”).',
        },
        communityPrompt: "Descreva uma casa da aldeia: o fogo (tata), a rede (ini), o beiju (meju) feito de mandioca (mani'ip) e a canoa (yat) na beira da lagoa.",
      },
      {
        id: 'kay-u2-l5',
        title: 'Akaŋ, hwã, py',
        kind: 'licao',
        words: ['akaŋ', 'juru', 'nami', 'hwã', 'jywa', 'py'],
        cloze: [
          { sentence: 'Po ne ___ay?', answer: 'akaŋ', options: ['akaŋ', 'py', 'nami'], translation: 'Sua cabeça está doendo?' },
          { sentence: 'Je ___.', answer: 'hwã', options: ['hwã', 'py', 'juru'], translation: 'A minha mão.' },
          { sentence: 'Je ___.', answer: 'nami', options: ['nami', 'jywa', 'akaŋ'], translation: 'A minha orelha.' },
        ],
        voice: {
          bot: 'Po ne akaŋay?',
          botTranslation: 'Sua cabeça está doendo?',
          expected: ['Anite.', 'anite'],
          hint: 'Responda que não: “Anite.”',
        },
        communityPrompt: 'Aponte para partes do seu corpo dizendo “Je…” (meu, minha): je akaŋ, je hwã, je py…',
      },
      {
        id: 'kay-u2-l6',
        title: "Karu, y'u, ket, je'eŋ",
        kind: 'licao',
        words: ['karu', "y'u", 'ket', 'maraka', "je'eŋ", 'jan'],
        cloze: [
          { sentence: "Kunu'uma ___.", answer: 'oket', options: ['oket', 'ojan', "oy'u"], translation: 'O menino está dormindo.' },
          { sentence: 'Ije ___, ene erekaraj.', answer: "aje'eŋ", options: ["aje'eŋ", 'ajot', 'aha'], translation: 'Eu falo e você escreve.' },
          { sentence: 'Wararuwijawa ___.', answer: 'ojan', options: ['ojan', 'oket', 'oyk'], translation: 'O cachorro correu.' },
        ],
        voice: {
          bot: 'Aha wekarum.',
          botTranslation: 'Eu vou comer.',
          expected: ["Aha wey'um.", "wey'um"],
          hint: "Diga que você vai beber água: “Aha wey'um.”",
        },
        communityPrompt: "Escreva o que você vai fazer agora com “Aha we…m” (eu vou para…): wekarum (comer), wey'um (beber água), wemarakam (cantar).",
      },
      {
        id: 'kay-u2-l7',
        title: 'Pitsun, tsiŋ, piraŋ, katu',
        kind: 'licao',
        words: ['pitsun', 'tsiŋ', 'piraŋ', 'jup', 'tsowy', 'katu'],
        cloze: [
          { sentence: 'Moĩa ___.', answer: 'ipitsun', options: ['ipitsun', 'itsiŋ', 'ijup'], translation: 'A cobra é preta.' },
          { sentence: 'Ywaka ___.', answer: 'tsowy', options: ['tsowy', 'pitsun', 'piraŋ'], translation: 'Céu azul.' },
          { sentence: 'Je ___.', answer: 'katu', options: ['katu', 'tsiŋ', 'jup'], translation: 'Eu sou bom.' },
        ],
        voice: {
          bot: 'Moĩa ipitsun.',
          botTranslation: 'A cobra é preta.',
          expected: ['Moĩa ipitsun.', 'ipitsun'],
          hint: 'Repita: a cor é um verbo, com “i-” na frente (é preta).',
        },
        communityPrompt: 'Descreva as cores do que está perto de você com “i-”: ipitsun (é preto), itsiŋ (é branco), ipiraŋ (é vermelho), ijup (é amarelo), itsowy (é azul).',
      },
      {
        id: 'kay-u2-l8',
        title: "Prova: Mojepete, mokõj, mo'apyt",
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: "Po ipira a'ep? Mojepete, mokõj…",
          botTranslation: 'Lá tem peixe? Um, dois…',
          expected: ["He'ẽ. Mo'apyt, mojo'irũ, jenepomomap.", "mo'apyt"],
          hint: "Diga que sim (“he'ẽ”) e continue contando os peixes até cinco.",
        },
        communityPrompt: 'Escreva um passeio pela lagoa: conte os peixes até cinco, diga a cor de um bicho com “i-” e quem você encontrou.',
      },
    ],
  },
  // ══ A2.1 e A2.2 (17/10/2026) ══
  // Fonte: a mesma gramática de Seki (2000), citada com a página impressa; grafia conferida na imagem
  // digitalizada. As frases são exemplos numerados da gramática, na escrita corrida dos textos do
  // apêndice. As únicas montadas seguem o molde «je + nome» de (3a) je akaŋ (p. 56) e vêm marcadas.
  {
    id: 'kay-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Je rup, je y: a família',
    emoji: '👨‍👩‍👧',
    card: {
      id: 'kay-c3',
      title: 'Parentes com dono e a regra do respeito',
      emoji: '🏡',
      // Seki 2000, pp. 387–389 (Galvão 1953: sistema bilateral; termo próprio para primo cruzado,
      // -'atywahap; o sexo de quem fala muda o termo) e pp. 391–392 (lista de termos).
      history:
        'Em kamaiurá, quem fala também conta. Um homem chama o irmão mais velho de “ryke\'yt” e o mais novo de “rywyt”, e tem uma palavra só para irmã, “renyt”. Uma mulher faz o contrário: uma palavra só para irmão, “kywyt”, e duas para as irmãs. Com os filhos é igual: o pai diz “ra\'yt” (filho) e “rajyt” (filha); a mãe diz “memyrake” e “memykujã”. Os filhos do irmão do pai e da irmã da mãe também são “irmãos”. Já os filhos do irmão da mãe e da irmã do pai têm nome próprio, “\'atywahap”, um termo que a linguista Lucy Seki ouviu tanto nos mitos quanto na conversa do dia a dia.',
      // Seki 2000, p. 395 (21.1.3, relações de evitação): genro e sogros não dizem o nome um do outro e
      // se tratam pelo plural; os Kamaiurá veem isso como respeito.
      culture_tip:
        'Alguns parentes por casamento se evitam. Um homem e o sogro ou a sogra, e uma mulher e o sogro, não ficam perto em casa nem no trabalho e não falam direto um com o outro. Na língua, a regra é ainda mais fina: essas pessoas não dizem o nome uma da outra, nem quando a outra não está, e quando precisam se dirigir uma à outra usam os pronomes do plural. Para os Kamaiurá, isso é uma demonstração de respeito.',
      // Seki 2000, pp. 55–58 (prefixos relacionais), (2a–b) e (4) p. 56; (16) p. 59.
      grammar_why:
        'Parentes e partes do corpo nunca aparecem sozinhos: vêm sempre com o dono antes. E entre o dono e a palavra entra o prefixo “r-” em muitas delas: “je rup” (meu pai), “kunu\'uma rup” (o pai do menino). Quando o dono é “ele”, e já se sabe quem é, entra outro prefixo: “tup” (o pai dele).',
      grammar_examples: [
        ['Je rup.', 'Meu pai. (Seki, p. 56)'],
        ["Kunu'uma rup.", 'O pai do menino. (p. 56)'],
        ["Je ra'yra wereko ywyrapara.", 'Meu filho tem arco. (p. 304)'],
        ['Na je pyrite.', 'Eu não tenho casa. (p. 330)'],
      ],
      // Seki 2000, p. 56 (r- e a nasalização pe=n-up), p. 392 (ramỹj, memykujã), p. 48 (-t → -r).
      character_guide: [
        ['r- (prefixo)', 'liga o dono à palavra; depois de “pe” (vocês) vira “n”', 'je rup (meu pai), pe nup (o pai de vocês)'],
        ['ỹ', 'a vogal “y” nasal, saindo também pelo nariz', 'ramỹj (avô)'],
        ["-t → -r, -p → -w", 'a consoante final muda antes do -a', "ra'yt → je ra'yra; rup → je ruwa nite"],
      ],
    },
    lessons: [
      {
        id: 'kay-u3-l1',
        title: 'Je rup, je y, ama, apa',
        kind: 'licao',
        words: ['rup', 'y', 'ama', 'apa', 'ramỹj', 'jaryj'],
        cloze: [
          // (1494) p. 394
          { sentence: 'Po ereko ___?', answer: 'ama', options: ['ama', 'apa', 'jaryj'], translation: 'Como vai, mamãe?' },
          // (290) p. 117
          { sentence: 'Ne ___ ke eraha.', answer: 'ramỹja', options: ['ramỹja', 'ruwa', 'ya'], translation: 'Leve o teu avô.' },
          // (253) p. 108
          { sentence: 'Je ___ nite.', answer: 'ruwa', options: ['ruwa', 'ramỹja', 'ya'], translation: 'Com o meu pai.' },
        ],
        voice: {
          // (290) p. 117; respostas a ordens, p. 235 (aje «sim, de acordo»)
          bot: 'Ne ramỹja ke eraha.',
          botTranslation: 'Leve o teu avô.',
          expected: ['Aje.', 'aje', "he'ẽ"],
          hint: 'É um pedido: aceite com “Aje” (está bem), a resposta que Seki registra para ordens.',
        },
        communityPrompt: 'Apresente a sua família com o dono antes de cada palavra: “je rup” (meu pai), “je y” (minha mãe), “je ramỹj” (meu avô), “je jaryj” (minha avó).',
      },
      {
        id: 'kay-u3-l2',
        title: "Je ra'yt, je remireko",
        kind: 'licao',
        words: ["ra'yt", 'rajyt', 'kywyt', "ryke'yt", 'renyt', 'remireko'],
        cloze: [
          // (1138) p. 304
          { sentence: 'Je ___ wereko ywyrapara.', answer: "ra'yra", options: ["ra'yra", 'remirekoa', 'ruwa'], translation: 'Meu filho tem arco.' },
          // (599) p. 180
          { sentence: "Je ___ wetsak kye'ia ne remiekarera.", answer: "ryke'yra", options: ["ryke'yra", "ra'yra", 'ramỹja'], translation: 'Meu irmão mais velho viu a faca que você estava procurando.' },
          // (801a) p. 222
          { sentence: 'Tyruhera amepy ne ___ upe.', answer: 'remirekoa', options: ['remirekoa', "ryke'yra", 'ramỹja'], translation: 'Comprei um vestido para a tua esposa.' },
        ],
        voice: {
          // (519) p. 164; (99b) p. 77
          bot: "Mame ne ra'yra rekow?",
          botTranslation: 'Onde está o teu filho?',
          expected: ['Amoete ikow.', 'amoete'],
          hint: 'Diga que ele está longe: “Amoete ikow.”',
        },
        communityPrompt: 'Escreva quem é quem na sua família, lembrando que em kamaiurá a palavra muda conforme quem fala: um homem diz “je renyt” (minha irmã), uma mulher diz “je kywyt” (meu irmão). E a irmã do pai é “je jaje” (minha tia).',
      },
      {
        id: 'kay-u3-l3',
        title: 'Prova: a família',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          // (498) p. 160 e (1230) p. 330
          bot: 'Po ne pyt?',
          botTranslation: 'Você tem casa?',
          expected: ['Na je pyrite.', 'na je pyrite', "he'ẽ"],
          hint: 'Responda que não tem: “Na je pyrite” (eu não tenho casa), com o “na… -ite” que envolve a palavra.',
        },
        communityPrompt: 'Escreva sobre a casa e a família de alguém: “je pyra amoete” (minha casa fica longe), “je tutyra morerekwara” (meu tio é o chefe), e uma frase negada com “na… -ite”.',
      },
    ],
  },
  {
    id: 'kay-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: "O'iran aha: o dia, a roça e a lagoa",
    emoji: '🌅',
    card: {
      id: 'kay-c4',
      title: 'Um dia contado pelo sol e pela luta',
      emoji: '☀️',
      // Seki 2000, pp. 402–403 (21.4, termos para partes do ano e do dia).
      history:
        'O kamaiurá conta o dia pelo caminho do sol e pela vida da aldeia. Às 6 horas é “kwara emamuẽ”, quando o sol sai; às 8, “ywate kwara”, o sol está alto; às 9, “perto de terminar o trabalho na roça”. Às 14 horas é “joetykawa wite”, perto da luta, e às 15, “em cima da luta”: é a hora da luta corporal de todas as tardes. Às 17 vem “kwara jup”, o sol amarelo, e às 18, “kwara o\'itse”, o sol entrou. O ano também tem duas partes, contadas pelo sol e pela chuva: “kwat”, o verão, de abril a setembro, e “yw”, o inverno chuvoso, de outubro a março.',
      // Seki 2000, p. 219, (789): mametuamuẽ, de mam «onde» + -tu «vir» + -ramuẽ «quando».
      culture_tip:
        'Para perguntar a que hora alguém chegou, o kamaiurá pergunta onde estava o sol: “Mametuamuẽ ereyk?” (quando você chegou?) junta “mam” (onde), uma forma do verbo “vir” e “-ramuẽ” (quando). A resposta também vem pelo sol: “Ko\'emamuẽ ayk”, cheguei de manhã.',
      // Seki 2000, pp. 109–110 (caso locativo) e pp. 231–232 (imperativo).
      grammar_why:
        'Para dizer onde, o nome ganha um final de lugar: “ka\'a” (mata) vira “ka\'ap” (na mata), “ok” (casa) vira “okip” (em casa). E para mandar, o verbo troca o prefixo: “ekaru!” (coma!), “pekaru!” (comam!). A proibição tem final próprio: “erekaruem!” (não coma!).',
      grammar_examples: [
        ["Ka'ap ikow.", 'Ele está na mata. (Seki, p. 110)'],
        ["O'iran aha pinamomoten.", 'Amanhã irei pescar. (p. 99)'],
        ['Ekaru!', 'Coma! (p. 231)'],
        ['Erekaruem!', 'Não coma! (p. 232)'],
      ],
      // Seki 2000, pp. 109 (alomorfes -p, -m, -ip, -im), 190 (-ramuẽ), 234 (atsã).
      character_guide: [
        ['-p / -m / -ip / -im', '“em, para”: o final de lugar muda conforme o fim da palavra', "kop (na roça), paranam (no rio), okip (em casa), ypytunim (à noite)"],
        ['-amuẽ', '“quando”: o “ẽ” final é nasal', "ko'emamuẽ (de manhã), ka'arukamuẽ (à tarde)"],
        ['atsã', 'partícula que deixa a ordem gentil, como “por favor”', 'Tata atsã emonyk je upe.'],
      ],
    },
    lessons: [
      {
        id: 'kay-u4-l1',
        title: "Ikue, arehe, o'iran",
        kind: 'licao',
        words: ['ikue', "o'iran", 'arehe', "ko'em", "ka'aruk", 'ypytun'],
        cloze: [
          // (96) p. 76
          { sentence: '___ rak ikeri.', answer: 'Ikue', options: ['Ikue', "O'iran", 'Arehe'], translation: 'Ele dormiu ontem.' },
          // (216) p. 99
          { sentence: '___ aha pinamomoten.', answer: "O'iran", options: ["O'iran", 'Ikue', 'Ypytun'], translation: 'Amanhã irei pescar.' },
          // (789) p. 219
          { sentence: '___ ayk.', answer: "Ko'emamuẽ", options: ["Ko'emamuẽ", "Ka'arukamuẽ", 'Ypytunim'], translation: 'Cheguei de manhã.' },
        ],
        voice: {
          // (789) p. 219
          bot: 'Mametuamuẽ ereyk?',
          botTranslation: 'Quando você chegou? (lit. onde estava o sol quando você chegou?)',
          expected: ["Ko'emamuẽ ayk.", "ko'emamuẽ", "ka'arukamuẽ"],
          hint: 'Responda pelo sol: “Ko\'emamuẽ ayk” (cheguei de manhã).',
        },
        communityPrompt: 'Conte o seu dia em kamaiurá: o que você fez “ikue” (ontem), o que faz “arehe” (hoje) e o que fará “o\'iran” (amanhã), de manhã (“ko\'emamuẽ”) ou à tarde (“ka\'arukamuẽ”).',
      },
      {
        id: 'kay-u4-l2',
        title: "Ko, ka'a, yupap: onde?",
        kind: 'licao',
        words: ['ko', "ka'a", 'yupap', 'pem', "'am", 'maramuẽ'],
        cloze: [
          // (764) p. 215
          { sentence: '___ ko katy ereo?', answer: 'Maramuẽ', options: ['Maramuẽ', 'Mam', 'Awa'], translation: 'Quando você vai à roça?' },
          // (1369) p. 363
          { sentence: "Moĩa 'aŋ o'up ___ reme'yp.", answer: 'yupawa', options: ['yupawa', "ka'a", 'kop'], translation: 'A cobra está na margem da lagoa.' },
          // (1246) p. 333
          { sentence: 'Anite pakua ___.', answer: 'pem', options: ['pem', "'am", 'ko'], translation: 'Lá não há paca.' },
        ],
        voice: {
          // (262) p. 110
          bot: "Ka'ap ikow.",
          botTranslation: 'Ele está na mata.',
          expected: ["Ka'ap ikow.", "ka'ap"],
          hint: 'Repita: “ka\'a” (mata) com o final de lugar “-p” vira “ka\'ap” (na mata).',
        },
        communityPrompt: 'Escreva onde ficam as coisas da aldeia: a roça (“ko”), a mata (“ka\'a”), a lagoa (“yupap”). Use “\'am” (aqui) e “pem” (lá).',
      },
      {
        id: 'kay-u4-l3',
        title: 'Prova: o dia, a roça e a lagoa',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          // (216) p. 99; resposta com aje, p. 235
          bot: "O'iran aha pinamomoten.",
          botTranslation: 'Amanhã irei pescar.',
          expected: ['Aje.', 'aje', "he'ẽ"],
          hint: 'Concorde com “Aje” (está bem) ou “He\'ẽ” (sim).',
        },
        communityPrompt: 'Escreva o plano de amanhã com frases da gramática: “O\'iran aha pinamomoten” (amanhã irei pescar), uma ordem com “e-” (como “Tata atsã emonyk je upe”, por favor, acenda o fogo para mim) e uma proibição com “-em”.',
      },
    ],
  },
];
