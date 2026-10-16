import type { UnitSeed } from '../types';

/**
 * Trilha do apache ocidental, do A1.1 ao A2.2 (o teto do idioma). «Apache» não é uma única língua: é um
 * grupo de línguas atabascanas meridionais (apache ocidental, chiricauá, mescalero, jicarila, lipã,
 * apache das planícies — ver en.wikipedia.org/wiki/Apachean_languages). Este pacote escolheu o apache
 * ocidental (Western Apache, ISO 639-3 «apw») por ter o maior número de falantes (13.445 em 2013,
 * segundo a Wikipédia em inglês) e a documentação mais rica entre as línguas apache.
 *
 * A1 (unidades 1 e 2): palavras isoladas e fórmulas fixas atestadas verbete por verbete no Wiktionary
 * em inglês. A2 (unidades 3 e 4): frases da gramática de Willem J. de Reuse, com Phillip Goode, «A
 * Practical Grammar of the San Carlos Apache Language» (Lincom Europa, 2006), lida no PDF divulgado
 * pelo San Carlos Apache College (ementa do curso APA 101, 2025). Cada frase leva a página impressa do
 * livro no comentário; nenhuma frase das unidades 3 e 4 foi montada por este curso.
 */
export const UNITS_APW: UnitSeed[] = [
  {
    id: 'apw-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Dagotʼee! As primeiras palavras',
    emoji: '👋',
    card: {
      id: 'apw-c1',
      title: 'Qual “apache”? A língua com mais falantes e mais fontes abertas',
      emoji: '🏜️',
      history:
        '“Apache” é o nome comum de várias línguas atabascanas meridionais distintas, não de uma língua só: apache ocidental, chiricauá, mescalero, jicarila, lipã e apache das planícies, segundo o artigo “Apachean languages” da Wikipédia em inglês. Este curso ensina especificamente o apache ocidental (Western Apache), falado por cerca de 13.445 pessoas (2013), a maioria nas reservas de San Carlos e de Fort Apache/White Mountain, no Arizona — a língua apache com mais falantes e, nesta pesquisa, a que tem de longe a documentação aberta mais rica: quase 500 verbetes no Wiktionary em inglês, um dicionário publicado (Western Apache-English Dictionary, 1998) e uma gramática (A Practical Grammar of the San Carlos Apache Language, de Willem de Reuse e Phillip Goode, 2006). Os próprios falantes chamam a língua de “Ndee biyáti\'” (ou “Nṉee biyáti\'”), segundo o quadro da Wikipédia em inglês — literalmente algo como “a fala do povo”.',
      culture_tip:
        '“Dagotʼee!” é a saudação registrada no Wiktionary; “áho” é “obrigado(a)”; e “hon dah” é um “bom dia” dirigido especificamente a um grupo de homens, segundo o mesmo dicionário — um lembrete de que uma saudação pode depender de quem ouve, algo que o português não marca. O povo apache ocidental da região das Montanhas Brancas (White Mountain) se autodesigna “Dził Łigai Si\'án N\'dee”, que o Wiktionary traduz como “povo das Montanhas Brancas” — a própria palavra “dził” (montanha) está dentro desse nome.',
      grammar_why:
        'O apache ocidental usa o alfabeto latino, mas com o apóstrofo (ʼ) como letra própria (uma parada no ar, não uma aspa), o “ł” (uma consoante lateral que não existe em português) e vogais nasalizadas marcadas com o gancho do ogonek (ą, į, ǫ). O acento agudo marca o tom alto da palavra — isso volta com mais detalhe na aba de gramática.',
      grammar_examples: [
        ['Dagotʼee!', '“Oi!” — a saudação registrada no Wiktionary para o apache ocidental.'],
        ['Áho!', '“Obrigado(a)!”'],
        ["Ndee biyáti'.", '“A língua apache ocidental” (lit. “a fala do povo”) — o nome que os próprios falantes dão à língua, segundo a Wikipédia em inglês.'],
        ['Dził Łigai Si\'án N\'dee', '“Povo das Montanhas Brancas” — autodesignação do apache ocidental de White Mountain, Arizona, segundo o Wiktionary.'],
      ],
      character_guide: [
        ['ʼ', 'letra própria: uma oclusiva glotal (parada no ar), não uma aspa', 'dagotʼee'],
        ['ł', 'consoante lateral surda, sem equivalente exato em português', 'łį́į́ʼ (cavalo)'],
        ['ą, į, ǫ', 'vogal nasalizada (o gancho do ogonek marca a nasalização)', 'nadą́ʼ (milho)'],
        ['acento agudo (á, í, ...)', 'marca o tom alto da sílaba (ver gramática)', 'áho'],
      ],
    },
    lessons: [
      {
        id: 'apw-u1-l1',
        title: 'Dagotʼee! Áho!',
        kind: 'licao',
        words: ['dagotʼee', 'áho', 'gozhǫǫ doleeł', 'hon dah', 'shíí', 'nohwíí'],
        cloze: [
          {
            sentence: '“___!”: a saudação do dia a dia, segundo o Wiktionary.',
            answer: 'dagotʼee',
            options: ['dagotʼee', 'áho', 'hon dah'],
            translation: '“Dagotʼee!”: oi, olá.',
          },
          {
            sentence: 'Dagotʼee! ___!',
            answer: 'áho',
            options: ['áho', 'shíí', 'nohwíí'],
            translation: 'Oi! Obrigado!',
          },
          {
            sentence: '“___”: nós.',
            answer: 'nohwíí',
            options: ['nohwíí', 'shíí', 'gozhǫǫ doleeł'],
            translation: '“Nohwíí”: nós.',
          },
        ],
        voice: {
          bot: 'Dagotʼee!',
          botTranslation: 'Oi!',
          expected: ['Dagotʼee! Áho!', 'dagotʼee', 'áho'],
          hint: 'Devolva a saudação com “Dagotʼee!” e agradeça com “Áho!”.',
        },
        communityPrompt: 'Escreva a saudação e o agradecimento do apache ocidental: “Dagotʼee” e “Áho”.',
      },
      {
        id: 'apw-u1-l2',
        title: 'Ndee: pessoas da comunidade',
        kind: 'licao',
        words: ['ndee', 'isdzán', 'ishkiin', 'bikʼisn', 'bimaa', 'diyin'],
        cloze: [
          {
            sentence: '“___”: pessoa; o povo apache (autodesignação).',
            answer: 'ndee',
            options: ['ndee', 'isdzán', 'ishkiin'],
            translation: '“Ndee”: pessoa; o povo apache.',
          },
          {
            sentence: '“___”: mulher.',
            answer: 'isdzán',
            options: ['isdzán', 'ishkiin', 'bimaa'],
            translation: '“Isdzán”: mulher.',
          },
          {
            sentence: '“___”: mãe.',
            answer: 'bimaa',
            options: ['bimaa', 'bikʼisn', 'diyin'],
            translation: '“Bimaa”: mãe.',
          },
        ],
        voice: {
          bot: 'Ndee.',
          botTranslation: 'Pessoa; povo.',
          expected: ['Ndee.', 'ndee'],
          hint: 'Repita a palavra para “pessoa” e “povo apache”: “ndee”.',
        },
        communityPrompt: 'Escreva três palavras para pessoas em apache ocidental: “ndee” (pessoa), “isdzán” (mulher) e “ishkiin” (menino).',
      },
      // Lições extras do A1.1 (16/10/2026), só com palavras que o pacote já tinha (Wiktionary). A
      // explicação de “bi-” vem de De Reuse (2006), p. 78 (T3: “bi-” = “his/her”) e p. 79–80 (T5:
      // “bigod” = “his/her knee”; partes do corpo sempre têm dono).
      {
        id: 'apw-u1-l4',
        title: 'Bidáá, jaa, bizéʼ: o corpo',
        kind: 'licao',
        words: ['bidáá', 'jaa', 'bizéʼ', 'bikeeʼ', 'bijíí', 'bitaʼ'],
        cloze: [
          { sentence: '“___”: olho(s).', answer: 'bidáá', options: ['bidáá', 'jaa', 'bizéʼ'], translation: '“Bidáá”: olho(s).' },
          { sentence: '“___”: orelha.', answer: 'jaa', options: ['jaa', 'bikeeʼ', 'bitaʼ'], translation: '“Jaa”: orelha.' },
          { sentence: '“___”: coração.', answer: 'bijíí', options: ['bijíí', 'bizéʼ', 'bidáá'], translation: '“Bijíí”: coração.' },
        ],
        voice: {
          bot: 'Bizéʼ.',
          botTranslation: 'Boca.',
          expected: ['Bizéʼ.', 'bizéʼ'],
          hint: 'Repita a palavra para “boca”: “bizéʼ”.',
        },
        communityPrompt:
          'Na gramática de De Reuse (2006), as partes do corpo sempre têm dono, e “bi-” quer dizer “dele” ou “dela”, como em “bigod” (o joelho dele). Escreva três partes do corpo com “bi-”: “bidáá”, “bizéʼ” e “bikeeʼ”.',
      },
      {
        id: 'apw-u1-l5',
        title: 'Kįh: casa, chapéu e milho',
        kind: 'licao',
        words: ['kįh', 'chʼah', 'yoo', 'chizh', 'mansáána', 'nadą́ʼ'],
        cloze: [
          { sentence: '“___”: casa.', answer: 'kįh', options: ['kįh', 'chʼah', 'yoo'], translation: '“Kįh”: casa.' },
          { sentence: '“___”: milho.', answer: 'nadą́ʼ', options: ['nadą́ʼ', 'mansáána', 'chizh'], translation: '“Nadą́ʼ”: milho.' },
          { sentence: '“___”: maçã.', answer: 'mansáána', options: ['mansáána', 'nadą́ʼ', 'yoo'], translation: '“Mansáána”: maçã.' },
        ],
        voice: {
          bot: 'Kįh.',
          botTranslation: 'Casa.',
          expected: ['Kįh.', 'kįh'],
          hint: 'Repita a palavra para “casa”: “kįh”.',
        },
        communityPrompt: '“Mansáána” (maçã) veio do espanhol “manzana”. Escreva em apache ocidental as palavras para casa, chapéu e milho: “kįh”, “chʼah” e “nadą́ʼ”.',
      },
      {
        id: 'apw-u1-l3',
        title: 'Prova: as primeiras palavras',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Dagotʼee! Isdzán, ishkiin, bimaa.',
          botTranslation: 'Oi! Mulher, menino, mãe.',
          expected: ['Áho!', 'áho'],
          hint: 'Depois de ouvir essas palavras, agradeça com “Áho!”.',
        },
        communityPrompt: 'Escreva uma pequena cena: cumprimente com “Dagotʼee”, nomeie duas pessoas (por exemplo “isdzán” e “ishkiin”) e agradeça com “Áho”.',
      },
    ],
  },
  {
    id: 'apw-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Números, natureza e bichos',
    emoji: '🏔️',
    card: {
      id: 'apw-c2',
      title: 'Tom alto, tom baixo — e um parentesco de 92% com o navajo',
      emoji: '🎵',
      history:
        'O apache ocidental é uma língua tonal. Harry Hoijer e outros linguistas descrevem as línguas atabascanas meridionais com quatro tons (alto, baixo, ascendente e descendente, na tradição de transcrição americanista), e o artigo “Apachean languages” da Wikipédia em inglês registra que De Reuse (2006) encontrou ainda um tom médio específico do apache ocidental, marcado com um mácron — a própria palavra deste curso para “oito”, “tsebīī”, traz essa vogal de tom médio. Na ortografia prática, porém, só o tom alto costuma ser marcado, com o acento agudo; o tom baixo fica sem marca, segundo o artigo “Western Apache language” da mesma Wikipédia.',
      culture_tip:
        'A Wikipédia em inglês (artigo “Navajo language”) registra que o navajo é a língua mais próxima do apache ocidental: as duas compartilham um sistema de tons parecido e mais de 92% do vocabulário. Apache ocidental e navajo pertencem ao mesmo subgrupo ocidental das línguas apachianas, junto com o mescalero e o chiricauá — o navajo e o apache ocidental (sobretudo a variedade dilzhé\'e) são os dois mais próximos entre si dentro desse subgrupo, segundo o artigo “Apachean languages”.',
      grammar_why:
        'O verbo do apache ocidental muda de forma segundo a forma do objeto de que se fala — um sistema de “verbos classificatórios” comparável ao do jicarila e do mescalero, segundo a Wikipédia em inglês. Isso e a ordem das palavras (sujeito-objeto-verbo) voltam com mais detalhe na aba de gramática.',
      grammar_examples: [
        ['Dałaá, nakih, táági, dį́į́\'i, ashdla\'i.', '“Um, dois, três, quatro, cinco.”'],
        ['Dził, tséé, zas.', '“Montanha, pedra, neve.” — três palavras da natureza.'],
        ['Shash, gah, łį́į́ʼ.', '“Urso, coelho, cavalo.” — três bichos.'],
        ['Tsebīī.', '“Oito” — com a vogal de tom médio (ī) que De Reuse (2006) descreve para o apache ocidental.'],
      ],
      character_guide: [
        ['acento agudo (á, í, ...)', 'tom alto', 'áho'],
        ['sem acento', 'tom baixo', 'dawa (tudo)'],
        ['mácron (ī, macron sobre a vogal)', 'tom médio, descrito por De Reuse (2006) especificamente para o apache ocidental', 'tsebīī (oito)'],
      ],
    },
    lessons: [
      {
        id: 'apw-u2-l1',
        title: 'Contando até cinco',
        kind: 'licao',
        words: ['dałaá', 'nakih', 'táági', "dį́į́'i", "ashdla'i", 'tú'],
        cloze: [
          {
            sentence: 'Dałaá, nakih, ___.',
            answer: 'táági',
            options: ['táági', "dį́į́'i", "ashdla'i"],
            translation: 'Um, dois, três.',
          },
          {
            sentence: "___, ashdla'i.",
            answer: "dį́į́'i",
            options: ["dį́į́'i", 'táági', 'nakih'],
            translation: 'Quatro, cinco.',
          },
          {
            sentence: '“___”: água.',
            answer: 'tú',
            options: ['tú', 'dałaá', 'nakih'],
            translation: '“Tú”: água.',
          },
        ],
        voice: {
          bot: 'Dałaá, nakih, táági…',
          botTranslation: 'Um, dois, três…',
          expected: ["Dį́į́'i", "dį́į́'i"],
          hint: 'Complete a contagem: depois de “táági” (três) vem “dį́į́\'i” (quatro).',
        },
        communityPrompt: "Conte de um a cinco em apache ocidental: dałaá, nakih, táági, dį́į́'i, ashdla'i.",
      },
      {
        id: 'apw-u2-l2',
        title: 'Dził, shash, łį́į́ʼ: natureza e bichos',
        kind: 'licao',
        words: ['dził', 'tséé', 'zas', 'shash', 'gah', 'łį́į́ʼ'],
        cloze: [
          {
            sentence: '“___”: montanha.',
            answer: 'dził',
            options: ['dził', 'tséé', 'zas'],
            translation: '“Dził”: montanha.',
          },
          {
            sentence: '“___”: urso.',
            answer: 'shash',
            options: ['shash', 'gah', 'łį́į́ʼ'],
            translation: '“Shash”: urso.',
          },
          {
            sentence: '“___”: cavalo.',
            answer: 'łį́į́ʼ',
            options: ['łį́į́ʼ', 'gah', 'shash'],
            translation: '“Łį́į́ʼ”: cavalo.',
          },
        ],
        voice: {
          bot: 'Shash.',
          botTranslation: 'Urso.',
          expected: ['Shash.', 'shash'],
          hint: 'Repita a palavra para “urso”: “shash”.',
        },
        communityPrompt: 'Nomeie três coisas da natureza e um bicho em apache ocidental: “dził” (montanha), “zas” (neve) e “shash” (urso).',
      },
      {
        id: 'apw-u2-l3',
        title: 'Prova: números, natureza e bichos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: "Dałaá, nakih, táági, dį́į́'i…",
          botTranslation: 'Um, dois, três, quatro…',
          expected: ["Ashdla'i", "ashdla'i"],
          hint: "Complete a contagem até cinco: “ashdla'i”.",
        },
        communityPrompt: "Escreva uma pequena cena em apache ocidental: conte até cinco (dałaá…ashdla'i) e nomeie um bicho e uma coisa da natureza.",
      },
    ],
  },
  // ══ A2.1 e A2.2 (16/10/2026) ══
  // Fonte: Willem J. de Reuse, com Phillip Goode, “A Practical Grammar of the San Carlos Apache
  // Language” (Lincom Europa, 2006), citada como DR06 com a página impressa. Todas as frases em apache
  // destas duas unidades são frases do livro (nenhuma foi montada); a página vai ao lado de cada uma.
  // Grafia do livro (variedade de San Carlos, com o tom médio marcado pelo mácron).
  {
    id: 'apw-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Hayú dínyāā? Ir, vir e ser de algum lugar',
    emoji: '🛣️',
    card: {
      id: 'apw-c3',
      title: 'Uma gramática feita com os falantes de San Carlos',
      emoji: '📘',
      // DR06 p. vii (Phillip Goode e os consultores de San Carlos, Peridot e Bylas), p. 7 (o tom médio,
      // novidade do livro), p. 8 (“tāāgi” 'three'), p. 23 (os três tons). De Reuse, “Issues in Language
      // Textbook Development: The Case of Western Apache” (1997), p. 123: nunca criou frases sozinho.
      history:
        'Do A2 em diante, este curso segue a gramática prática do apache de San Carlos, de Willem de Reuse (2006). Ela foi feita com Phillip Goode e com falantes de San Carlos, Peridot e Bylas. O livro marca três tons: o alto (á), o médio (ā, com um traço em cima) e o baixo (sem marca). Por isso “três” aparece ali como “tāāgi”, e não “táági”. Num artigo de 1997, De Reuse conta que nunca criou frases em apache sozinho: todas vieram de falantes. Este curso faz o mesmo e usa só frases do livro.',
      // DR06 p. 66 (Hant’é baa naṉāā? é mais invasivo que “What are you doing?”); p. 71–72 (palavras novas
      // montadas na hora; ch’iyán baa gowąh, “casa a respeito de comida”).
      culture_tip:
        'Perguntar “Hant\'é baa naṉāā?” (“o que você está fazendo?”) é mais invasivo em apache do que em português, e por isso se pergunta menos, segundo De Reuse. Outra coisa: para lugares novos, os falantes criam palavras na hora. Uma mercearia pode ser “ch\'iyán baa gowąh”, ao pé da letra “a casa a respeito de comida”.',
      // DR06 p. 65: os verbos de movimento têm um radical para um, outro para dois e outro para três ou mais.
      grammar_why:
        'Os verbos de ir e vir têm uma forma para uma pessoa, outra para duas e outra para três ou mais: “díyāā” (eu vou), “dit\'āāzh” (nós dois vamos), “dikai” (nós, três ou mais, vamos).',
      grammar_examples: [
        ['Hayú dínyāā?', '“Para onde você vai?” (De Reuse, p. 65)'],
        ['Fiinigisyú díyāā.', '“Eu vou para Phoenix.” (p. 65)'],
        ["Hadí' naṉāā?", '“De onde você é?” (p. 66)'],
        ["Sengaadí' nashāā.", '“Eu sou de San Carlos.” (p. 66)'],
      ],
      // DR06 p. 8, 11 (ṉ), p. 23 (tons), p. 67 (=yú “para”, =dí’ “de”).
      character_guide: [
        ['ā, ē, ī (mácron)', 'tom médio, só em vogal longa', 'díyāā (eu vou)'],
        ['ṉ', '“n sublinhado”: para a maioria, igual a “n”; alguns dizem quase “nd”', 'naṉāā (você é de)'],
        ['-yú', 'colado no lugar: “para”', 'Fiinigisyú (para Phoenix)'],
        ["-dí'", 'colado no lugar: “de”', "Sengaadí' (de San Carlos)"],
      ],
    },
    lessons: [
      {
        id: 'apw-u3-l1',
        title: 'Hayú dínyāā? Para onde você vai?',
        kind: 'licao',
        words: ['hayú', 'díyāā', 'dínyāā', 'diyāā', 'dikai', 'intin'],
        cloze: [
          // DR06 p. 65 (1a)
          { sentence: 'Hayú ___?', answer: 'dínyāā', options: ['dínyāā', 'díyāā', 'diyāā'], translation: 'Para onde você vai?' },
          // DR06 p. 65 (1b)
          { sentence: 'Fiinigisyú ___.', answer: 'díyāā', options: ['díyāā', 'dínyāā', 'dikai'], translation: 'Eu vou para Phoenix.' },
          // DR06 p. 75, Conversa 3 (3a–4b)
          {
            sentence: "Ya' na'íziidyú dínyāā? — Ha'oh, ___.",
            answer: "k'ad",
            options: ["k'ad", 'dah', 'kū'],
            translation: 'Você vai para o trabalho? — Sim, daqui a pouco.',
          },
        ],
        voice: {
          // DR06 p. 63, Conversa 3 (1a–2b)
          bot: 'Dīī hayú intin?',
          botTranslation: 'Para onde vai esta estrada?',
          expected: ['Ai Bésh baa gowąhyú intin.', 'bésh baa gowąhyú intin', 'intin'],
          hint: 'Diga que é a estrada para Globe: “Ai Bésh baa gowąhyú intin.” (Globe é “Bésh baa gowąh”, a “casa a respeito do metal”).',
        },
        communityPrompt: 'Escreva para onde você vai, como no livro de De Reuse: “Hayú dínyāā?” e a resposta “… -yú díyāā.” com o nome de uma cidade.',
      },
      {
        id: 'apw-u3-l2',
        title: "Hadí' naṉāā? De onde você é?",
        kind: 'licao',
        words: ["hadí'", 'nashāā', 'naṉāā', 'naghāā', 'kū', 'ákū'],
        cloze: [
          // DR06 p. 66 (5a)
          { sentence: "Hadí' ___?", answer: 'naṉāā', options: ['naṉāā', 'nashāā', 'naghāā'], translation: 'De onde você é?' },
          // DR06 p. 66 (6b)
          { sentence: "Ha'oh, Bésh baa gowąhdí' ___.", answer: 'nashāā', options: ['nashāā', 'naṉāā', 'díyāā'], translation: 'Sim, eu sou de Globe.' },
          // DR06 p. 75, Conversa 4 (10c)
          { sentence: "Dah, doo ádí' ___ da.", answer: 'naghāā', options: ['naghāā', 'nashāā', 'naṉāā'], translation: 'Não, ele não é de lá.' },
        ],
        voice: {
          // DR06 p. 66 (5a); p. 77 (8)
          bot: "Hadí' naṉāā?",
          botTranslation: 'De onde você é?',
          expected: ["Kūdí' nashāā.", "kūdí' nashāā", 'nashāā'],
          hint: 'Diga que você é daqui: “Kūdí\' nashāā.” (“kū” é “aqui”, e “-dí\'” é “de”).',
        },
        communityPrompt: "Escreva de onde você é, como no livro: “Hadí' naṉāā?” e a resposta “(sua cidade)-dí' nashāā.”",
      },
      {
        id: 'apw-u3-l3',
        title: 'Prova: ir, vir e ser de algum lugar',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          // DR06 p. 57 (T4d) e p. 58 (T5)
          bot: "Ya' Fiinigisyú dínyāā né?",
          botTranslation: 'Você vai para Phoenix?',
          expected: ["Ha'oh.", "ha'oh", "ha'ah", 'dah'],
          hint: 'Responda “Ha\'oh” (sim; as mulheres dizem mais “ha\'ah”) ou “Dah” (não).',
        },
        communityPrompt: "Escreva um diálogo curto com frases do livro: alguém pergunta “Hayú dínyāā?”, você responde com uma cidade e “díyāā”, e depois pergunta “Hadí' naṉāā?”.",
      },
    ],
  },
  {
    id: 'apw-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Shitaa, dį́jį̄į̄: família, dias e tempo',
    emoji: '👨‍👩‍👧',
    card: {
      id: 'apw-c4',
      title: 'Parentes que sempre têm dono',
      emoji: '👵',
      // DR06 p. 183 (parentesco mais complexo e importante na cultura apache; -māā, -taa sempre com
      // prefixo; Máa! Táa!), p. 183–184 (avós maternos e paternos; termos recíprocos), p. 185 (-k’isn e
      // -lah dependem do sexo de quem fala).
      history:
        'Os nomes de parentes, e o jeito certo de chamar cada um, pesam muito mais na cultura apache do que na cultura anglo-americana, segundo De Reuse. Avó materna e avó paterna têm nomes diferentes. E os nomes de avós são de mão dupla: a criança chama a avó materna de “shiwóyé”, e a avó chama o neto pelo mesmo nome. Irmão e irmã também dependem de quem fala: “shik\'isn” é “meu irmão” na boca de um homem e “minha irmã” na boca de uma mulher.',
      // DR06 p. 183 (T2: Máa! Táa!, falados sem prefixo e com entonação descendente).
      culture_tip:
        'Para chamar a mãe ou o pai direto, os filhos não usam o “meu”: dizem “Máa!” (mãe!) e “Táa!” (pai!), com a voz descendo no fim. Em qualquer outra situação, o nome do parente vem com um dono: “shitaa” (meu pai), “nitaa” (seu pai).',
      // DR06 p. 78 (T2, T3), p. 80 (partes do corpo e parentes sempre têm dono), p. 96 (ni’ e doleeł);
      // “nitaa” em p. 63 (Conversa 2: “nitaahí?”, “e o seu pai?”); “bimāā” p. 79; “nohwiwóyé” p. 75.
      grammar_why:
        'O dono vem como prefixo no começo da palavra: “shi-” (meu), “ni-” (seu), “bi-” (dele, dela). Para falar de passado e futuro, muitas frases só ganham uma palavrinha no fim: “ni\'” (era, foi) ou “doleeł” (será).',
      grammar_examples: [
        ["Shitaa át'į̄į̄.", '“É meu pai.” (De Reuse, p. 92)'],
        ["Dīī shidizhé ádat'ēē.", '“Estes são meus irmãos mais novos.” (p. 89)'],
        ["Nłt'ēē ni'.", '“Foi bom.” (p. 96)'],
        ['Nłt\'ēē doleeł.', '“Vai ser bom.” (p. 96)'],
      ],
      character_guide: [
        ['shi-', 'meu, minha', 'shitaa (meu pai)'],
        ['ni-', 'seu, sua (de uma pessoa)', 'nitaa (seu pai)'],
        ['bi-', 'dele, dela', 'bimāā (a mãe dele)'],
        ['nohwi-', 'nosso (ou de vocês dois)', 'nohwiwóyé (nossa avó)'],
      ],
    },
    lessons: [
      {
        id: 'apw-u4-l1',
        title: 'Shitaa: a família',
        kind: 'licao',
        words: ['shitaa', 'shidizhé', 'shiwóyé', "mę́'", "na'ilín", 'chaghą́shé'],
        cloze: [
          // DR06 p. 92 (28a–b)
          { sentence: "Dīī hadín át'į̄į̄? — ___ át'į̄į̄.", answer: 'shitaa', options: ['shitaa', 'shidizhé', "mę́'"], translation: 'Quem é este? — É meu pai.' },
          // DR06 p. 89 (5)
          { sentence: "Dīī ___ ádat'ēē.", answer: 'shidizhé', options: ['shidizhé', 'shiwóyé', "na'ilín"], translation: 'Estes são meus irmãos mais novos.' },
          // DR06 p. 93 (41a–b)
          {
            sentence: "Ya' nichaghą́shé ła'? — Ha'ah, ___ ła'.",
            answer: 'shichaghą́shé',
            options: ['shichaghą́shé', 'shitaa', 'shiwóyé'],
            translation: 'Você tem filhos? — Sim, tenho filhos.',
          },
        ],
        voice: {
          // DR06 p. 90 (6a–b)
          bot: "Hadín át'į̄į̄?",
          botTranslation: 'Quem é?',
          expected: ["Shitaa át'į̄į̄.", "shitaa át'į̄į̄", 'shitaa'],
          hint: 'Diga que é seu pai: “Shitaa át\'į̄į̄.”',
        },
        // DR06 p. 89 (3) e (5)
        communityPrompt: "Escreva quem é quem na sua família com a fórmula do livro: “Dīī shimāā át'ēē.” (Esta é minha mãe.) e “Dīī shidizhé ádat'ēē.” (Estes são meus irmãos mais novos.).",
      },
      {
        id: 'apw-u4-l2',
        title: 'Dį́jį̄į̄: hoje, ontem e amanhã',
        kind: 'licao',
        words: ['dį́jį̄į̄', 'iską̄ą̄', "adą̄ą̄dą́'", 'jį̄į̄', "tł'é'", "gosk'az"],
        cloze: [
          // DR06 p. 223 (T2)
          { sentence: "___ gonłt'ēē.", answer: 'dį́jį̄į̄', options: ['dį́jį̄į̄', 'iską̄ą̄', "tł'é'"], translation: 'Hoje está um dia bonito.' },
          // DR06 p. 316 (11)
          {
            sentence: 'Nakih ___go Cindy Show Lowyú diyāā doleeł.',
            answer: 'iską̄ą̄',
            options: ['iską̄ą̄', "adą̄ą̄dą́'", 'dį́jį̄į̄'],
            translation: 'Daqui a dois dias, a Cindy vai a Show Low.',
          },
          // DR06 p. 265 (2)
          { sentence: "___ zhāāli nashné' ni'.", answer: "adą̄ą̄dą́'", options: ["adą̄ą̄dą́'", 'iską̄ą̄', 'jį̄į̄'], translation: 'Ontem eu tinha dinheiro.' },
        ],
        voice: {
          // DR06 p. 223 (T1, T2)
          bot: "Dadányú dagot'ēē?",
          botTranslation: 'Como está lá fora?',
          expected: ["Gosk'az.", "gosk'az", 'gozil', "Dadányú gonłt'ēē."],
          hint: 'Diga como está o tempo: “Gosk\'az.” (faz frio), “Gozil.” (está morno) ou “Dadányú gonłt\'ēē.” (está bonito lá fora).',
        },
        communityPrompt: "Escreva como está o tempo hoje, com uma frase do livro de De Reuse: “Dį́jį̄į̄ gonłt'ēē.”, “Gosk'az.” ou “Gozil.”.",
      },
      {
        id: 'apw-u4-l3',
        title: 'Prova: família, dias e tempo',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          // DR06 p. 265 (6) e p. 58 (T5)
          bot: "Ya' nłt'ēēgo íłhosh lán, tł'é'dą́'?",
          botTranslation: 'Você dormiu bem ontem à noite?',
          expected: ["Ha'oh.", "ha'oh", "ha'ah", 'dah'],
          hint: 'Responda “Ha\'oh” ou “Ha\'ah” (sim) ou “Dah” (não).',
        },
        communityPrompt: "Escreva duas frases do livro sobre o tempo, uma no passado e uma no futuro: “Nłt'ēē ni'.” (foi bom) e “Nłt'ēē doleeł.” (vai ser bom), e diga quando, com “adą̄ą̄dą́'” (ontem) ou “iską̄ą̄” (amanhã).",
      },
    ],
  },
];
