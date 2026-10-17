import type { UnitSeed } from '../types';

/**
 * Trilha do baniwa, do A1.1 ao A2.2 (o teto do idioma). O A2 (17/10/2026) segue o dicionário e a
 * gramática de Henri Ramirez (2001), com a página de cada frase no comentário. Ver vocabulario.ts para as fontes de cada palavra e para a explicação de
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
        ['Nukápa.', 'Eu vejo. (prefixo nu- + kápa, “ver”)'],
        ['Pikápa nhua.', 'Tu me vês. (prefixo pi- + kápa + sufixo -nhua, “me”)'],
      ],
      character_guide: [
        ['ñ', 'nasal palatal, como o “nh” de “sonho”', 'ñame (não, negado)'],
        ['nh, mh, ph, th', 'consoante nasal ou plosiva seguida de um sopro de ar (aspiração)', 'nháa (eles/elas), mhéreeri (irmão mais novo), phía (tu), théewa (amanhã)'],
        ['á, é, í, ú (acento agudo)', 'marca a sílaba tônica fora do padrão (a penúltima sílaba já é tônica por padrão) e distingue palavras parecidas', 'nhúa (eu), hániri (pai)'],
        ['dz, ts', 'africadas, como o “dz” de “pizza” e o “ts” de “tsunami”', 'dzama (dois), dzáawi (onça)'],
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
        words: ['Káphaa', 'Kúa', 'Ñame', 'Úupi', 'Théewa', 'Wheekúdza'],
        cloze: [
          { sentence: '___ phía Walimanai?', answer: 'Káphaa', options: ['Káphaa', 'Kúa', 'Ñame'], translation: 'Você é walimanai? (pergunta de sim/não)' },
          { sentence: '___ íinaiwatsa núawa?', answer: 'Kúa', options: ['Kúa', 'Ñame', 'Úupi'], translation: 'Com quem irei?' },
          { sentence: '___ kéeruakanhua.', answer: 'Ñame', options: ['Ñame', 'Théewa', 'Wheekúdza'], translation: 'Não estou zangado.' },
        ],
        voice: {
          bot: 'Káphaa phía Walimanai?',
          botTranslation: 'Você é walimanai?',
          expected: ['Nhúa Walimanai. Ñame kéeruakanhua.', 'ñame'],
          hint: 'Confirme com “Nhúa Walimanai.” e, se quiser negar algo, comece a frase com “Ñame”.',
        },
        communityPrompt: 'Escreva uma pergunta de sim/não com “Káphaa…?” e uma negação com “Ñame…”.',
      },
      // Lições extras do A1.1 (17/10/2026), só com palavras que o pacote já tinha. A grafia segue Ramirez:
      // “úuni”, “éenu”, “tsíinu” (R01a p. 101), “hápe” (R01b p. 9), “áapi” (R01b p. 20), “palána” (R01b
      // p. 11), “dzáawi” (R01b p. 17). Hamariene, édzaua e arapê: ISA, povosindigenas.org.br/pt/Povo:Baniwa.
      {
        id: 'kpc-u1-l4',
        title: 'Úuni, éenu, édzaua: a natureza do Içana',
        kind: 'licao',
        words: ['Úuni', 'Éenu', 'Hamariene', 'Édzaua', 'Arapê', 'Hápe'],
        cloze: [
          { sentence: '“___”: água, rio.', answer: 'Úuni', options: ['Úuni', 'Éenu', 'Arapê'], translation: '“Úuni”: água, rio.' },
          { sentence: '“___”: igapó (mata alagada).', answer: 'Arapê', options: ['Arapê', 'Édzaua', 'Hamariene'], translation: '“Arapê”: igapó.' },
          { sentence: '“___”: frio.', answer: 'Hápe', options: ['Hápe', 'Úuni', 'Éenu'], translation: '“Hápe”: frio.' },
        ],
        voice: {
          bot: 'Úuni.',
          botTranslation: 'Água, rio.',
          expected: ['Úuni.', 'úuni'],
          hint: 'Repita a palavra para “água”: “úuni”, com o “u” longo no começo.',
        },
        communityPrompt:
          'O Instituto Socioambiental registra três paisagens do rio Içana: “hamariene” (campinarana), “édzaua” (terra firme) e “arapê” (igapó). Escreva as três e diga qual delas fica alagada.',
      },
      {
        id: 'kpc-u1-l5',
        title: 'Tsíinu, dzáawi, áapi: os bichos',
        kind: 'licao',
        words: ['Tsíinu', 'Dzáawi', 'Áapi', 'Palána', 'Iipe', 'Keepe'],
        cloze: [
          { sentence: '“___”: cão.', answer: 'Tsíinu', options: ['Tsíinu', 'Dzáawi', 'Áapi'], translation: '“Tsíinu”: cão.' },
          { sentence: '“___”: cobra.', answer: 'Áapi', options: ['Áapi', 'Palána', 'Tsíinu'], translation: '“Áapi”: cobra.' },
          { sentence: '“___”: gordo (“com carne”).', answer: 'Keepe', options: ['Keepe', 'Iipe', 'Dzáawi'], translation: '“Keepe”: gordo.' },
        ],
        voice: {
          bot: 'Dzáawi.',
          botTranslation: 'Onça.',
          expected: ['Dzáawi.', 'dzáawi'],
          hint: 'Repita a palavra para “onça”: “dzáawi”.',
        },
        // R01b p. 20: apákhaa áapi makákhai (1 cobra grande); -khaa, classificador das coisas compridas e finas
        communityPrompt:
          'No dicionário de Ramirez, “uma cobra grande” é “apákhaa áapi makákhai”: o “-khaa” é a marca das coisas compridas e finas, como a cobra. Escreva “tsíinu” (cão), “dzáawi” (onça) e “áapi” (cobra).',
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
        'No baniwa, os termos de parentesco são nomes DEPENDENTES: ao contrário de “tsíinu” (cão), que funciona sozinho, uma palavra como “hániri” (pai) quase sempre aparece com um prefixo possessivo — “nu-hániri” (meu pai), “pi-hániri” (teu pai). Os numerais também têm sua própria lógica: de 1 a 4 existem raízes próprias (apaa-, dzama-, madali-, likua-), mas a partir de 5 o baniwa conta pelas mãos — “apeéma pakáapi” (uma mão) é cinco, e “dzameéma pakáapi” (duas mãos) é dez.',
      culture_tip:
        'A canoa (“íita”) é o meio de transporte do dia a dia ao longo do rio Içana e seus afluentes — é por isso que ela aparece como o primeiro exemplo de numeral citado nos estudos sobre a língua: “apá íita”, uma canoa.',
      grammar_why:
        'Os classificadores do baniwa (mais de 40, segundo Aikhenvald) marcam a forma física das coisas e aparecem junto a substantivos, numerais e adjetivos: “-aápa” (forma oblonga, como bananas e tubérculos), “-da” (forma redonda), “-iíta” (achatado ou forma humana) e “-áanhaa” (líquidos) são alguns deles. É por isso que “duas bananas” se diz “dzama-ápa palána” (o “-ápa” marca a forma oblonga da banana), enquanto “uma canoa” é simplesmente “apá íita”.',
      grammar_examples: [
        ['Apá íita.', 'Uma canoa.'],
        ['Dzamaápa palána.', 'Duas bananas.'],
        ['Nu-hániri.', 'Meu pai.'],
        ['Nu-hadua.', 'Minha mãe.'],
      ],
      character_guide: [
        ['-aápa', 'classificador de forma oblonga (aves, tubérculos, bananas)', 'dzamaápa palána (duas bananas)'],
        ['-da', 'classificador de forma redonda (animais, frutos)', 'não aparece no vocabulário deste pacote ainda'],
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
          { sentence: '___ palána.', answer: 'Dzamaápa', options: ['Dzamaápa', 'Apá', 'Likuaáaka'], translation: 'Duas bananas.' },
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
  // ══ A2.1 e A2.2 (17/10/2026) ══
  // Fontes: Henri Ramirez, “Dicionário da Língua Baniwa” (Manaus: EDUA, 2001), R01b, e “Línguas Arawak
  // da Amazônia Setentrional” (2001), R01a, ambos abertos na Biblioteca Digital Curt Nimuendajú, com a
  // página impressa ao lado de cada frase. Grafia: o “o” do dicionário vira “u” (mesma vogal, R01a
  // p. 73–74). Nenhuma frase destas duas unidades foi montada pelo curso.
  {
    id: 'kpc-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Nudéenhi, nímaa: o corpo e o dia',
    emoji: '🔨',
    card: {
      id: 'kpc-c3',
      title: 'Um dicionário de 10 mil palavras',
      emoji: '📘',
      // R01b p. 1–3 (introdução: 3 anos de trabalho, 10.000 verbetes, professores baniwa e curripaco;
      // três superdialetos; o falar de referência é o central, perto da foz do Aiari); p. 4 (4 vogais
      // a, e, i, o); R01a p. 73–74 (a mesma vogal escrita “u”)
      history:
        'Do A2 em diante, este curso segue o dicionário de Henri Ramirez, publicado em Manaus em 2001. Foram três anos de trabalho, e o livro tem 10 mil verbetes, com frases de exemplo. Ramirez o escreveu para estudiosos, para professores baniwa e curripaco e para quem quer aprender a língua. Ele divide o baniwa-curripaco em três grandes dialetos e usa como base o central, falado no rio Içana perto da foz do rio Aiari. É o mesmo baniwa deste curso. Um detalhe de escrita: o dicionário escreve “o” onde este curso escreve “u”. É a mesma vogal, que soa entre o “o” fechado e o “u”.',
      // R01b p. 99 (heekóapi whaa! bom dia!; heekóapikeena whaa, estamos amanhecendo); p. 137 (wémeenapã
      // líodza! boa noite!, fórmula de despedida); p. 212 (mátsia pidzeekátaka nólhio! obrigado!)
      culture_tip:
        'De manhã se diz “Heekúapi whaa!” (bom dia). “Heekúapi” é o dia, a luz do dia, e também “amanhecer”: “heekúapikeena whaa” é “estamos amanhecendo”. À noite, na despedida, se diz “Wémeenapã líudza!” (boa noite). E para agradecer: “Mátsia pidzeekátaka núlhiu!” (obrigado).',
      // R01b p. 9–11
      grammar_why:
        'O verbo baniwa leva sempre um prefixo que diz quem faz: “nudéenhi” (eu trabalho), “pidéenhi” (tu trabalhas). Já os adjetivos não levam prefixo: vêm primeiro, e um sufixo depois diz quem tem a qualidade: “iinúnaa nhua” (estou triste).',
      grammar_examples: [
        ['Nudéenhi.', 'Eu trabalho. (Ramirez, p. 10)'],
        ['Wárha wádiawa!', 'Vamos voltar! (p. 66)'],
        ['Iinúnaa nhua.', 'Estou triste. (p. 11)'],
        ['Pikápa nhua.', 'Tu me vês. (p. 11)'],
      ],
      // R01b p. 4–6 (guia de pronúncia)
      character_guide: [
        ['u (o no dicionário)', 'entre o “o” fechado de “poço” e o “u”', 'núidza (eu choro)'],
        ['tt', '“t” com a lâmina da língua apertada nos dentes de cima', 'pántti (casa)'],
        ['ñh, nh, mh', 'consoante dita sem vibrar a garganta', 'núiñha (eu como)'],
        ['aa, ii, uu', 'vogal longa: dura o dobro, sem pausa no meio', 'nímaa (eu durmo)'],
      ],
    },
    lessons: [
      {
        id: 'kpc-u3-l1',
        title: 'Nudéenhi, núdia, nímaa: os verbos',
        kind: 'licao',
        words: ['Nudéenhi', 'Núdia', 'Nukápa', 'Nímaa', 'Núidza', 'Núiñha'],
        cloze: [
          // R01b p. 11
          { sentence: '___ phia.', answer: 'Nukápa', options: ['Nukápa', 'Nímaa', 'Núidza'], translation: 'Eu te vejo.' },
          // R01b p. 66
          { sentence: 'Wárha ___!', answer: 'wádiawa', options: ['wádiawa', 'nudéenhi', 'nímaa'], translation: 'Vamos voltar!' },
          // R01b p. 127
          { sentence: 'Nuúma ___.', answer: 'núiñhaka', options: ['núiñhaka', 'núidza', 'nukápa'], translation: 'Quero comer.' },
        ],
        voice: {
          // R01b p. 137
          bot: 'Nímheeni mátsia.',
          botTranslation: 'Dormi bem.',
          expected: ['Nímheeni mátsia.', 'nímheeni mátsia', 'nímheeni'],
          hint: 'Repita: “Nímheeni mátsia.” (dormi bem). “Nímheeni” é o passado de “nímaa”, eu durmo.',
        },
        communityPrompt: 'Escreva três verbos com o prefixo “nu-” (eu), como no dicionário de Ramirez: “nudéenhi” (trabalho), “núdia” (volto) e “nukápa” (vejo).',
      },
      {
        id: 'kpc-u3-l2',
        title: 'Nukáapi, nhiwída: o corpo',
        kind: 'licao',
        words: ['Káapi', 'Hiwída', 'Híipa', 'Héeni', 'Húurhi', 'Náapa'],
        cloze: [
          // R01a p. 161 (97): nutákhaa nukáapi
          { sentence: 'Nutákhaa ___.', answer: 'nukáapi', options: ['nukáapi', 'nhúipa', 'nhúeni'], translation: 'Cortei a minha mão.' },
          // R01b p. 66
          { sentence: 'Lidétshiaka ___.', answer: 'lhiwída', options: ['lhiwída', 'likáapi', 'lináapa'], translation: 'Ele menea a cabeça.' },
          // R01b p. 244
          { sentence: 'Liupáta ___.', answer: 'lhíipa', options: ['lhíipa', 'lhiwída', 'likáapi'], translation: 'Ele se coça o pé.' },
        ],
        voice: {
          // R01b p. 15
          bot: 'Phíipa.',
          botTranslation: 'O teu pé.',
          expected: ['Nhúipa.', 'nhúipa'],
          hint: 'Responda com o seu: “nhúipa” (o meu pé). O “h” da raiz pula para depois do “n”.',
        },
        communityPrompt: 'As partes do corpo sempre têm dono em baniwa. Escreva “minha mão”, “minha cabeça” e “meu pé”: “nukáapi”, “nhiwída” e “nhúipa”.',
      },
      {
        id: 'kpc-u3-l3',
        title: 'Prova: o corpo e o dia',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          // R01b p. 99
          bot: 'Heekúapi whaa!',
          botTranslation: 'Bom dia!',
          expected: ['Heekúapi whaa!', 'heekúapi whaa', 'heekúapi'],
          hint: 'Responda o bom-dia com as mesmas palavras: “Heekúapi whaa!”.',
        },
        communityPrompt: 'Escreva uma manhã curta com frases do dicionário: “Heekúapi whaa!” (bom dia), “Nímheeni mátsia.” (dormi bem) e “Mátsia pidzeekátaka núlhiu!” (obrigado).',
      },
    ],
  },
  {
    id: 'kpc-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Pándza, théewa: o tempo e o lugar',
    emoji: '🏘️',
    card: {
      id: 'kpc-c4',
      title: 'Dois “hoje” e quatro distâncias',
      emoji: '⏰',
      // R01a p. 162 (pándza hoje no futuro, úupiika hoje no passado); R01b p. 22 (quatro zonas);
      // p. 254 (pándza ñámeetsa pakápa dzáawi)
      history:
        'Na gramática de 2001, Ramirez mostra que o baniwa tem dois “hoje”: “pándza” é o hoje que ainda vai acontecer, e “úupiika” é o hoje que já passou. E os demonstrativos medem a distância em quatro graus, um a mais que o português. No dicionário, um exemplo de “pándza” conta uma mudança no rio: “Pándza ñámeetsa pakápa dzáawi”, não se veem mais onças em nossa época.',
      // R01b p. 74 (dzakálee: terreiro da casa tradicional, lugar povoado; dzakálee imínali, dono do povoado)
      culture_tip:
        '“Dzakálee” quer dizer povoado, mas também o terreiro da casa tradicional, o pátio no meio da aldeia. Quem cuida do lugar é o “dzakálee imínali”, o dono do povoado.',
      // R01a p. 162–163; R01b p. 22
      grammar_why:
        'O futuro leva o sufixo “-watsa”: “núawatsawa” (irei). E “este”, “esse”, “aquele ali” e “aquele lá” são quatro palavras diferentes: “lhíehe”, “lhíerahã”, “lhiénahã” e “lhiétahã”.',
      grammar_examples: [
        ['Núawatsawa.', 'Irei. (Ramirez 2001a, p. 163)'],
        ['Pándza líukakawa.', 'Ele vai chegar hoje. (Ramirez 2001b, p. 254)'],
        ['Meédzami líukawa.', 'Chegou anteontem. (p. 216)'],
        ['Lhíehe atsíanli.', 'Este homem. (p. 22)'],
      ],
      character_guide: [
        ['ã', 'vogal nasal, como em “lã”', 'áahã (aqui)'],
        ['-watsa', 'sufixo de futuro', 'núawatsawa (irei)'],
        ['lhíe-, rhúa-, nháa-', 'demonstrativo de ele, de ela e de eles', 'lhíehe (este), rhúahã (esta), nháahã (estes)'],
        ['apa-', '“um”, com o classificador da coisa contada', 'apaíta malíye (uma faca), apaápa káana (uma espiga de milho)'],
      ],
    },
    lessons: [
      {
        id: 'kpc-u4-l1',
        title: 'Pántti, kúphe, malíye: as coisas da casa',
        kind: 'licao',
        words: ['Pántti', 'Kúphe', 'Malíye', 'Matsúka', 'Káana', 'Hiipáda'],
        cloze: [
          // R01b p. 255
          { sentence: 'Apadápana ___.', answer: 'pántti', options: ['pántti', 'kúphe', 'malíye'], translation: 'Uma casa.' },
          // R01b p. 207
          { sentence: 'Apaíta ___.', answer: 'malíye', options: ['malíye', 'káana', 'pántti'], translation: 'Uma faca.' },
          // R01b p. 145
          { sentence: 'Apaápa ___.', answer: 'káana', options: ['káana', 'malíye', 'pántti'], translation: 'Uma espiga de milho.' },
        ],
        voice: {
          // R01b p. 127
          bot: 'Líiñhaka kúphe peéthe íyu.',
          botTranslation: 'Ele come peixe com beiju.',
          expected: ['Líiñhaka kúphe peéthe íyu.', 'líiñhaka kúphe', 'kúphe'],
          hint: 'Repita: “Líiñhaka kúphe peéthe íyu.” (ele come peixe com beiju).',
        },
        communityPrompt: 'Conte uma coisa de cada, com o “um” que muda conforme a forma: “apadápana pántti” (uma casa), “apaíta malíye” (uma faca) e “apaápa káana” (uma espiga de milho).',
      },
      {
        id: 'kpc-u4-l2',
        title: 'Atsíanli, íinaru, newíki: as pessoas',
        kind: 'licao',
        words: ['Atsíanli', 'Íinaru', 'Newíki', 'Ienipétti', 'Dzakálee', 'Awakáda'],
        cloze: [
          // R01b p. 212
          { sentence: '___ matsiádali.', answer: 'Atsíanli', options: ['Atsíanli', 'Íinaru', 'Dzakálee'], translation: 'Homem bom.' },
          // R01b p. 23
          { sentence: 'Rhúa ___.', answer: 'íinaru', options: ['íinaru', 'atsíanli', 'dzakálee'], translation: 'A mulher (de quem acabamos de falar).' },
          // R01b p. 74
          { sentence: '___ imínali.', answer: 'Dzakálee', options: ['Dzakálee', 'Ienipétti', 'Newíki'], translation: 'Dono do povoado.' },
        ],
        voice: {
          // R01b p. 99
          bot: 'Kúaka heekúapika pándza?',
          botTranslation: 'Que dia é hoje?',
          expected: ['Míitsheehe pándza.', 'míitsheehe pándza', 'míitsheehe'],
          hint: 'Responda como no dicionário: “Míitsheehe pándza.” (hoje é domingo).',
        },
        communityPrompt: 'Escreva com “este” e “aquele lá”, como no dicionário: “lhíehe atsíanli” (este homem) e “lhiétahã atsíanli” (aquele homem lá).',
      },
      {
        id: 'kpc-u4-l3',
        title: 'Prova: o tempo e o lugar',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          // R01b p. 124 (káphaa pikápakeena dzáawi?); p. 254 (pándza ñámeetsa pakápa dzáawi)
          bot: 'Káphaa pikápakeena dzáawi?',
          botTranslation: 'Você já viu uma onça?',
          expected: ['Pándza ñámeetsa pakápa dzáawi.', 'ñámeetsa pakápa dzáawi', 'ñame'],
          hint: 'Responda com a frase do dicionário: “Pándza ñámeetsa pakápa dzáawi.” (não se veem mais onças em nossa época).',
        },
        communityPrompt: 'Escreva duas frases sobre quando: “Meédzami líukawa.” (chegou anteontem) e “Meédzattuawatsa líukawa.” (ele chegará depois de amanhã).',
      },
    ],
  },
];
