import type { UnitSeed } from '../types';

/**
 * Trilha do baniwa: por enquanto só as duas unidades do nível A1 (pacote incompleto — ver
 * `incomplete` em index.ts). Ver vocabulario.ts para as fontes de cada palavra e para a explicação de
 * como as frases que não são citações diretas de Ramirez/Taylor foram montadas combinando morfemas
 * já atestados (nunca uma palavra inventada).
 */
export const UNITS_KPC: UnitSeed[] = [
  {
    id: 'kpc-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Nhúa Walimanai',
    emoji: '🏞️',
    card: {
      id: 'kpc-c1',
      title: 'Walimanai, o povo do rio Içana',
      emoji: '🛶',
      history:
        'O baniwa (os próprios falantes se chamam “walimanai”, lit. “os outros novos que vão nascer”, em contraste com os antepassados ancestrais “waferinaipe”) é uma língua indígena viva da família aruak (arawak), falada por cerca de 17,6 mil pessoas em mais de 200 comunidades às margens do rio Içana e afluentes como o Aiari e o Cuiari, no noroeste do Amazonas, na fronteira entre Brasil, Colômbia e Venezuela. É uma das línguas oficiais do município de São Gabriel da Cachoeira e do estado do Amazonas, ao lado do nheengatu e do tukano — três línguas de famílias totalmente diferentes, cooficiais na mesma região. O baniwa forma um continuum dialetal com o curripaco (kurripako), falado mais ao norte, no alto Içana e na Colômbia: muitos linguistas tratam as duas variantes como dialetos de uma mesma língua, “baniwa-curripaco”.',
      culture_tip:
        'A sociedade baniwa é organizada em fratrias patrilineares e exogâmicas (quem nasce numa fratria busca casamento fora dela) — Hohodene, Walipere-dakenai, Dzauinai e Adzanene são algumas das principais. O criador, segundo a cosmologia baniwa, é Nhiãperikuli; seu filho Kuwai é a figura central dos ritos de iniciação dos jovens.',
      grammar_why:
        'O baniwa tem dois jogos de afixos pessoais que acompanham o verbo — prefixos (nu-, pi-, li-/ru-, wa-, i-, na-) e sufixos —, e também pronomes INDEPENDENTES (nhúa, phía, lhía, rhúa, wháa, hía, nháa). Os pronomes independentes são usados sem verbo quando não há um “suporte verbal direto”, como ao responder uma pergunta ou se apresentar: por isso “Nhúa Walimanai” (lit. “eu, walimanai”) já funciona como “eu sou baniwa”, sem precisar de um verbo “ser”.',
      grammar_examples: [
        ['Nhúa Walimanai.', 'Eu sou walimanai (baniwa).'],
        ['Káphaa phía Walimanai?', 'Você é walimanai?'],
        ['Nukapa.', 'Eu vejo. (prefixo nu- + kapa, “ver”)'],
        ['Pikapanhua.', 'Tu me vês. (prefixo pi- + kapa + sufixo -nhua, “me”)'],
      ],
      character_guide: [
        ['ñ', 'nasal palatal, como o “nh” de “sonho”', 'ñame (não, negado)'],
        ['nh, mh, ph, th', 'consoante nasal ou plosiva seguida de um sopro de ar (aspiração)', 'nháa (eles/elas), mhéreeri (irmão mais novo), phía (tu), théewa (amanhã)'],
        ['á, é, í, ú (acento agudo)', 'marca a sílaba tônica fora do padrão (a penúltima sílaba já é tônica por padrão) e distingue palavras parecidas', 'nhúa (eu), hániri (pai)'],
        ['dz, ts', 'africadas, como o “dz” de “pizza” e o “ts” de “tsunami”', 'dzama (dois), dzaawi (onça)'],
      ],
    },
    lessons: [
      {
        id: 'kpc-u1-l1',
        title: 'Nhúa, phía, lhía, rhúa',
        kind: 'licao',
        words: ['Nhúa', 'Phía', 'Lhía', 'Rhúa', 'Wháa', 'Nháa'],
        cloze: [
          { sentence: '___ Walimanai.', answer: 'Nhúa', options: ['Nhúa', 'Phía', 'Lhía'], translation: 'Eu sou walimanai.' },
          { sentence: 'Káphaa ___ Walimanai?', answer: 'phía', options: ['phía', 'lhía', 'rhúa'], translation: 'Você é walimanai?' },
          { sentence: '___ Walimanai.', answer: 'Wháa', options: ['Wháa', 'Nháa', 'Rhúa'], translation: 'Nós somos walimanai.' },
        ],
        voice: {
          bot: 'Káphaa phía Walimanai?',
          botTranslation: 'Você é walimanai?',
          expected: ['Nhúa Walimanai.', 'nhúa'],
          hint: 'Responda com “Nhúa Walimanai.” (eu sou walimanai) — o pronome independente dispensa verbo “ser”.',
        },
        communityPrompt: 'Apresente-se em baniwa usando “Nhúa Walimanai.” e diga “ele” com “lhía” e “ela” com “rhúa”.',
      },
      {
        id: 'kpc-u1-l2',
        title: 'Káphaa, kúa, ñame',
        kind: 'licao',
        words: ['Káphaa', 'Kúa', 'Ñame', 'Úupi', 'Théewa', 'Wheekudza'],
        cloze: [
          { sentence: '___ phía Walimanai?', answer: 'Káphaa', options: ['Káphaa', 'Kúa', 'Ñame'], translation: 'Você é walimanai? (pergunta de sim/não)' },
          { sentence: '___ íinaiwatsa núawa?', answer: 'Kúa', options: ['Kúa', 'Ñame', 'Úupi'], translation: 'Com quem irei?' },
          { sentence: '___ kéeruakanhua.', answer: 'Ñame', options: ['Ñame', 'Théewa', 'Wheekudza'], translation: 'Não estou zangado.' },
        ],
        voice: {
          bot: 'Káphaa phía Walimanai?',
          botTranslation: 'Você é walimanai?',
          expected: ['Nhúa Walimanai. Ñame kéeruakanhua.', 'ñame'],
          hint: 'Confirme com “Nhúa Walimanai.” e, se quiser negar algo, comece a frase com “Ñame”.',
        },
        communityPrompt: 'Escreva uma pergunta de sim/não com “Káphaa…?” e uma negação com “Ñame…”.',
      },
      {
        id: 'kpc-u1-l3',
        title: 'Test: Nhúa Walimanai',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Káphaa phía Walimanai? Kúa pihániri?',
          botTranslation: 'Você é walimanai? Quem é seu pai?',
          expected: ['Nhúa Walimanai. Nu-hániri.', 'nhúa', 'walimanai'],
          hint: 'Confirme sua identidade com “Nhúa Walimanai.” e comece a falar da família com “Nu-” (meu).',
        },
        communityPrompt: 'Escreva uma apresentação completa: quem você é (“Nhúa Walimanai.”), uma pergunta com “Káphaa…?” e uma negação com “Ñame…”.',
      },
    ],
  },
  {
    id: 'kpc-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Nu-hániri, nu-hadua',
    emoji: '👨‍👩‍👧',
    card: {
      id: 'kpc-c2',
      title: 'Família e números no Içana',
      emoji: '🖐️',
      history:
        'No baniwa, os termos de parentesco são nomes DEPENDENTES: ao contrário de “tsíino” (cão), que funciona sozinho, uma palavra como “hániri” (pai) quase sempre aparece com um prefixo possessivo — “nu-hániri” (meu pai), “pi-hániri” (teu pai). Os numerais também têm sua própria lógica: de 1 a 4 existem raízes próprias (apaa-, dzama-, madali-, likua-), mas a partir de 5 o baniwa conta pelas mãos — “apeéma pakáapi” (uma mão) é cinco, e “dzameéma pakáapi” (duas mãos) é dez.',
      culture_tip:
        'A canoa (“íita”) é o meio de transporte do dia a dia ao longo do rio Içana e seus afluentes — é por isso que ela aparece como o primeiro exemplo de numeral citado nos estudos sobre a língua: “apá íita”, uma canoa.',
      grammar_why:
        'Os classificadores do baniwa (mais de 40, segundo Aikhenvald) marcam a forma física das coisas e aparecem junto a substantivos, numerais e adjetivos: “-aápa” (forma oblonga, como bananas e tubérculos), “-da” (forma redonda), “-iíta” (achatado ou forma humana) e “-áanhaa” (líquidos) são alguns deles. É por isso que “duas bananas” se diz “dzama-ápa palana” (o “-ápa” marca a forma oblonga da banana), enquanto “uma canoa” é simplesmente “apá íita”.',
      grammar_examples: [
        ['Apá íita.', 'Uma canoa.'],
        ['Dzamaápa palana.', 'Duas bananas.'],
        ['Nu-hániri.', 'Meu pai.'],
        ['Nu-hadua.', 'Minha mãe.'],
      ],
      character_guide: [
        ['-aápa', 'classificador de forma oblonga (aves, tubérculos, bananas)', 'dzamaápa palana (duas bananas)'],
        ['-da', 'classificador de forma redonda (animais, frutos)', 'ver vocabulario.ts, nota sobre classificadores'],
        ['nu-, pi-', 'prefixo possessivo: “meu”, “teu” (obrigatório em nomes dependentes, como os de parentesco)', 'nu-hániri (meu pai), pi-hadua (tua mãe)'],
        ['pakáapi', 'mão; base do sistema de contagem a partir de 5', 'apeéma pakáapi (cinco, lit. uma mão)'],
      ],
    },
    lessons: [
      {
        id: 'kpc-u2-l1',
        title: 'Hániri, hadua, iri, íitu',
        kind: 'licao',
        words: ['Hániri', 'Hadua', 'Iri', 'Íitu', 'Pheeri', 'Mhéreeri'],
        cloze: [
          { sentence: 'Nu-___.', answer: 'hániri', options: ['hániri', 'hadua', 'iri'], translation: 'Meu pai.' },
          { sentence: 'Nu-___.', answer: 'hadua', options: ['hadua', 'íitu', 'pheeri'], translation: 'Minha mãe.' },
          { sentence: 'Nu-___.', answer: 'mhéreeri', options: ['mhéreeri', 'pheeri', 'iri'], translation: 'Meu irmão mais novo.' },
        ],
        voice: {
          bot: 'Kalhe pihániri?',
          botTranslation: 'Onde está o seu pai?',
          expected: ['Nu-hániri…', 'hániri'],
          hint: 'Comece a resposta com “Nu-hániri” (meu pai) — hániri é um nome dependente, precisa do prefixo.',
        },
        communityPrompt: 'Apresente sua família usando os prefixos “nu-” (meu) com “hániri”, “hadua”, “iri” e “íitu”.',
      },
      {
        id: 'kpc-u2-l2',
        title: 'Apaa, dzama, madali, likua',
        kind: 'licao',
        words: ['Apaa', 'Dzama', 'Madali', 'Likua', 'Apeéma pakáapi', 'Íita'],
        cloze: [
          { sentence: '___ íita.', answer: 'Apá', options: ['Apá', 'Dzamaápa', 'Madali'], translation: 'Uma canoa.' },
          { sentence: '___ palana.', answer: 'Dzamaápa', options: ['Dzamaápa', 'Apá', 'Likuaáaka'], translation: 'Duas bananas.' },
          { sentence: '___ pakáapi: cinco.', answer: 'Apeéma', options: ['Apeéma', 'Dzameéma', 'Madali'], translation: 'Uma mão: cinco.' },
        ],
        voice: {
          bot: 'Kenakuda íita?',
          botTranslation: 'Quantas canoas?',
          expected: ['Apá íita.', 'apá', 'íita'],
          hint: 'Conte a canoa com “Apá íita.” (uma canoa).',
        },
        communityPrompt: 'Conte até quatro em baniwa (“apaa, dzama, madali, likua”) e diga “cinco” com “apeéma pakáapi” (uma mão).',
      },
      {
        id: 'kpc-u2-l3',
        title: 'Test: nu-hániri',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Kalhe pihániri? Kenakuda íita?',
          botTranslation: 'Onde está o seu pai? Quantas canoas?',
          expected: ['Nu-hániri… Apá íita.', 'hániri', 'íita'],
          hint: 'Fale do seu pai com “Nu-hániri” e conte a canoa com “Apá íita.”.',
        },
        communityPrompt: 'Escreva sobre sua família (“nu-hániri”, “nu-hadua”) e conte alguma coisa usando os numerais de 1 a 5.',
      },
    ],
  },
];
