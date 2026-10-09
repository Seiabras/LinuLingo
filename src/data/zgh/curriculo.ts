import type { UnitSeed } from '../types';

/**
 * Trilha do tamazight padrão marroquina: por enquanto só as duas unidades do nível A1 (pacote
 * incompleto — ver `incomplete` em index.ts). Fontes: ver o cabeçalho de vocabulario.ts (todas
 * reconferidas em 08/10/2026).
 */
export const UNITS_ZGH: UnitSeed[] = [
  {
    id: 'zgh-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Azul! Primeiro encontro',
    emoji: '👋',
    card: {
      id: 'zgh-c1',
      title: 'Berbere, não um dialeto do árabe',
      emoji: '🇲🇦',
      history:
        'O tamazight (amazigh) é oficial no Marrocos desde a emenda constitucional de 2011, e cerca de 24,8% dos marroquinos o falam como língua nativa (dado de 2024). A forma “padrão” ensinada aqui foi criada pelo IRCAM (o Instituto Real da Cultura Amazigh, de 2001) misturando o tashelhit, o tamazight do Atlas Central e o tarifit — na prática, sobretudo tashelhit, com neologismos cunhados pelo próprio instituto. O tamazight é uma língua berbere, do ramo berbere da família afro-asiática: não é um dialeto do árabe nem vem dele, embora tenha vivido 13 séculos de contato e empréstimos com o árabe marroquino.',
      culture_tip:
        'A saudação “azul” (oi) não é antiga: foi criada no século XX pelo linguista cabila Mouloud Mammeri, a partir do tuaregue “uhal” (saudar) ou “tǝhult” (saudação) — e o “z” é, segundo o Wikcionário em inglês, uma adaptação equivocada do “h” tuaregue original. Mesmo “inventada”, a palavra se espalhou por quase todas as variedades berberes como saudação pan-berbere, inclusive no padrão marroquino.',
      grammar_why:
        'O tamazight não tem um verbo “ser” para apresentar quem é quem: a partícula “d” faz esse papel sozinha, sem conjugar — “D izem” é, literalmente, “[é] leão”, isto é, “é um leão”. Para dizer “eu sou o Linu”, basta “Nekk, d Linu”: o pronome tópico (nekk) seguido de “d” e do nome.',
      grammar_examples: [
        ['Azul! Nekk, d Linu.', 'Oi! Eu sou o Linu.'],
        ['Isem-nnk?', 'Qual é o seu nome? (perguntado a um homem)'],
        ['Tanemmirt! Ar tufat.', 'Obrigado! Até logo.'],
        ['Ur ssnx.', 'Eu não sei.'],
      ],
      character_guide: [
        ['ⴰⵣⵓⵍ (azul)', '“oi”: letras ⴰ(a)+ⵣ(z)+ⵓ(u)+ⵍ(l) — o z soa como no português', 'ⴰⵣⵓⵍ (azul) — “oi”'],
        ['ⵜⴰⵏⵎⵎⵉⵔⵜ (tanemmirt)', '“obrigado”: note a consoante dobrada ⵎⵎ (mm), comum no tifinagh', 'ⵜⴰⵏⵎⵎⵉⵔⵜ (tanemmirt) — “obrigado”'],
        ['ⵖ (ɣ)', 'fricativa gutural sem equivalente exato no português (perto de um “r” forte bem arrastado)', 'ⴰⵖⵉⵍⵉⴼ, em ⵓⵍⴰⵛ ⴰⵖⵉⵍⵉⴼ (ulac aɣilif) — “de nada”'],
        ['ⵢⴰⵏ, ⵙⵉⵏ, ⴽⵕⴰⴹ (yan, sin, kraḍ)', 'os números 1, 2 e 3 em tifinagh — cada sinal é uma consoante ou vogal, sem ligadura entre letras', 'ⵢⴰⵏ (yan) — “um”'],
      ],
    },
    lessons: [
      {
        id: 'zgh-u1-l1',
        title: 'Azul, tanemmirt, ar tufat',
        kind: 'licao',
        words: ['azul', 'tifawin', 'ar tufat', 'tanemmirt', 'ih', 'uhu'],
        cloze: [
          { sentence: '___! Nekk, d Linu.', answer: 'Azul', options: ['Azul', 'Ar tufat', 'Uhu'], translation: 'Oi! Eu sou o Linu.' },
          { sentence: 'Tanemmirt! ___.', answer: 'Ar tufat', options: ['Ar tufat', 'Azul', 'Tifawin'], translation: 'Obrigado! Até logo.' },
          { sentence: '___, tanemmirt.', answer: 'Ih', options: ['Ih', 'Uhu', 'Azul'], translation: 'Sim, obrigado.' },
        ],
        voice: {
          bot: 'Azul! Amek?',
          botTranslation: 'Oi! Como [vai]?',
          expected: ['Azul! Nekk, d Linu.', 'Azul', 'Nekk, d Linu.'],
          hint: 'Devolva “Azul” e diga quem você é com “Nekk, d…”.',
        },
        communityPrompt: 'Escreva uma saudação (Azul ou Tifawin), um agradecimento (Tanemmirt) e uma despedida (Ar tufat).',
      },
      {
        id: 'zgh-u1-l2',
        title: 'Nekk, kečč, kemm',
        kind: 'licao',
        words: ['nekk', 'kečč', 'kemm', 'netta', 'nettat', 'isem'],
        cloze: [
          { sentence: '___, d Linu.', answer: 'Nekk', options: ['Nekk', 'Netta', 'Kečč'], translation: 'Eu sou o Linu.' },
          { sentence: '___-nnk?', answer: 'Isem', options: ['Isem', 'Nekk', 'Netta'], translation: 'Qual é o seu nome? (a um homem)' },
          { sentence: 'Kečč, d Linu? Uhu, ___, d Anya.', answer: 'nekk', options: ['nekk', 'netta', 'kemm'], translation: 'Você é o Linu? Não, eu sou a Anya.' },
        ],
        voice: {
          bot: 'Kečč, d Anya?',
          botTranslation: 'Você (a um homem) é a Anya?',
          expected: ['Uhu, nekk, d Linu.', 'Uhu', 'Nekk, d Linu.'],
          hint: 'Corrija com “Uhu” e diga quem você é com “Nekk, d…”.',
        },
        communityPrompt: 'Apresente-se com “Nekk, d…” e pergunte o nome de alguém com “Isem-nnk?” (a um homem) ou “Isem-nnm?” (a uma mulher).',
      },
      {
        id: 'zgh-u1-l3',
        title: 'Prova: Azul, nekk, kečč',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Azul! Isem-nnm?',
          botTranslation: 'Oi! Qual é o seu nome? (a uma mulher)',
          expected: ['Azul! Nekk, d Linu.', 'Azul', 'Nekk, d Linu.'],
          hint: 'Devolva a saudação e diga seu nome com “Nekk, d…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: saudação (Azul), nome (Nekk, d…) e despedida (Ar tufat).',
      },
    ],
  },
  {
    id: 'zgh-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Dari axxam, dari yemma',
    emoji: '🏠',
    card: {
      id: 'zgh-c2',
      title: 'Sem verbo “ter”: a casa mora em “dari”',
      emoji: '🏠',
      history:
        'O tamazight não tem um verbo “ter” isolado como o português. No tashelhit, “eu tenho” se diz “dari” — literalmente uma preposição (“em”, “com”) já fundida com o sufixo pronominal de primeira pessoa, algo como “em mim” (fonte: manuscrito de Ibn Tunart, lista de palavras que distinguem o tashelhit das outras variedades tamazight, Wikipédia em inglês). A nota da própria Wikipédia explica que uma raiz parecida existe na maioria das outras línguas berberes, então “dari” não é uma rareza do tashelhit, é uma estratégia pan-berbere de expressar posse sem um verbo “ter” de verdade.',
      culture_tip:
        'Os numerais do tamazight concordam em gênero com o substantivo contado nas formas originais berberes (yan/yat, sin/snat…) — mas os numerais tomados de empréstimo do árabe (usados a partir de 11, por exemplo) não concordam. É uma pista de contato linguístico dentro da própria gramática.',
      grammar_why:
        'Dois pontos de gramática novos aqui: o feminino se marca com um prefixo ta- e um sufixo -t ao mesmo tempo (ta-sli-t, “noiva”, de a-sli, “noivo”) — por isso “amecṭuḥ” (pequeno) vira “tamecṭuḥt” para combinar com um substantivo feminino. E “d” também liga dois substantivos como “e”, só que aí ele muda a palavra que vem depois para a “forma de anexão”: “pão” sozinho é “aɣrum”, mas depois de “d” vira “uɣrum” — “aman d uɣrum” é “água e pão”.',
      grammar_examples: [
        ['Dari axxam amecṭuḥ.', 'Eu tenho uma casa pequena.'],
        ['Aman d uɣrum.', 'Água e pão.'],
        ['Dari aydi.', 'Eu tenho um cachorro.'],
        ['Yemma. Baba.', 'Mãe. Pai.'],
      ],
      character_guide: [
        ['ⴰⵅⵅⴰⵎ (axxam)', '“casa”: ⵅ é uma fricativa gutural surda, mais atrás na garganta que o nosso “r”', 'ⴰⵅⵅⴰⵎ (axxam) — “casa”'],
        ['ⵢⴻⵎⵎⴰ (yemma)', '“mãe”: ⴻ é um “e” curto, quase mudo', 'ⵢⴻⵎⵎⴰ (yemma) — “mãe”'],
        ['ⴽⴽⵓⵥ, ⵙⵎⵎⵓⵙ, ⵙⴹⵉⵚ (kkuẓ, semmus, sḍis)', 'os números 4, 5 e 6 — ⵥ(ẓ) e ⵚ(ṣ) são versões “pesadas” (enfáticas) de z e s', 'ⵙⴹⵉⵚ (sḍis) — “seis”'],
      ],
    },
    lessons: [
      {
        id: 'zgh-u2-l1',
        title: 'Yan, sin, kraḍ…',
        kind: 'licao',
        words: ['yan', 'sin', 'kraḍ', 'kkuẓ', 'semmus', 'sḍis'],
        cloze: [
          { sentence: '___, sin, kraḍ.', answer: 'Yan', options: ['Yan', 'Sin', 'Mraw'], translation: 'Um, dois, três.' },
          { sentence: 'Kkuẓ, ___, sḍis.', answer: 'semmus', options: ['semmus', 'sin', 'tam'], translation: 'Quatro, cinco, seis.' },
          { sentence: 'Yan, sin, ___.', answer: 'kraḍ', options: ['kraḍ', 'sḍis', 'tam'], translation: 'Um, dois, três.' },
        ],
        voice: {
          bot: 'Yan, sin, kraḍ, kkuẓ...?',
          botTranslation: 'Um, dois, três, quatro...?',
          expected: ['Semmus, sḍis.', 'Semmus', 'Sḍis'],
          hint: 'Continue a contagem: depois de kkuẓ vem semmus, depois sḍis.',
        },
        communityPrompt: 'Escreva os números de yan (1) a sḍis (6) em tamazight.',
      },
      {
        id: 'zgh-u2-l2',
        title: 'Dari axxam, dari aydi',
        kind: 'licao',
        words: ['axxam', 'yemma', 'baba', 'aman', 'aɣrum', 'aydi'],
        cloze: [
          { sentence: 'Dari ___.', answer: 'axxam', options: ['axxam', 'aydi', 'aman'], translation: 'Eu tenho uma casa.' },
          { sentence: '___ d uɣrum.', answer: 'Aman', options: ['Aman', 'Yemma', 'Baba'], translation: 'Água e pão.' },
          { sentence: 'Dari ___ amecṭuḥ.', answer: 'aydi', options: ['aydi', 'aman', 'baba'], translation: 'Eu tenho um cachorro pequeno.' },
        ],
        voice: {
          bot: 'Dari axxam amecṭuḥ. Kečč?',
          botTranslation: 'Eu tenho uma casa pequena. E você (a um homem)?',
          expected: ['Dari axxam ameqqran.', 'Dari axxam', 'Axxam ameqqran'],
          hint: 'Responda com “Dari axxam…” e um adjetivo (ameqqran ou amecṭuḥ).',
        },
        communityPrompt: 'Descreva sua casa e sua família com “Dari axxam…”, “Yemma” e “Baba”.',
      },
      {
        id: 'zgh-u2-l3',
        title: 'Prova: números e família',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Dari aydi. Dari axxam ameqqran. Kečč?',
          botTranslation: 'Eu tenho um cachorro. Eu tenho uma casa grande. E você?',
          expected: ['Dari aydi. Dari axxam amecṭuḥ.', 'Dari aydi', 'Dari axxam'],
          hint: 'Fale da sua casa e de um bicho de estimação com “Dari…”.',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua casa, a sua família e um bicho de estimação, usando “Dari”.',
      },
    ],
  },
];
