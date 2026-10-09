import type { UnitSeed } from '../types';

/**
 * Trilha do hebraico moderno — as quatro unidades do A1 e do A2 (pacote incompleto até A2.2, ver
 * `incomplete` em index.ts). Fontes da parte histórica/gramatical: ver o início de `gramatica.ts`
 * (Wikipédia em inglês, artigos “Modern Hebrew”, “Hebrew alphabet”, “Niqqud”, “Construct state”,
 * “Hebrew verb conjugation”, “Modern Hebrew grammar”), checados em 02/10/2026 e, pra leva A2,
 * 09/10/2026.
 */
export const UNITS_HE: UnitSeed[] = [
  {
    id: 'he-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Shalom! Os primeiros passos',
    emoji: '👋',
    card: {
      id: 'he-c1',
      title: 'Uma língua que “ressuscitou”',
      emoji: '🕊️',
      history:
        'O hebraico é uma língua afro-asiática, da família semítica, ramo cananeu — prima do árabe, do amárico e do aramaico (Wikipédia, “Modern Hebrew”). Por quase 1700 anos ele viveu só como língua de oração e de estudo, sem ninguém falando em casa: o dia a dia dos judeus era em aramaico, grego, iídiche, judeu-espanhol e outras línguas. A partir do fim do século 19, o linguista Eliezer Ben-Yehuda liderou um movimento para transformar essa língua de livros em língua falada todo dia de novo — um dos poucos casos documentados no mundo de uma língua “sem falantes nativos” virar, em poucas gerações, a língua materna de um país inteiro. Hoje o hebraico moderno (ivrit) é a língua oficial e nacional de Israel.',
      culture_tip:
        '“Shalom” serve pra tudo: oi, tchau e “paz” — é também a saudação do sábado judaico, “Shabat shalom”. “Toda” (obrigado) e “bevakasha” (por favor; de nada) aparecem o tempo todo no dia a dia, até entre desconhecidos.',
      grammar_why:
        'O hebraico escrito no dia a dia quase nunca mostra as vogais: jornal, placa de rua, mensagem de WhatsApp — tudo sai só com as consoantes (ver o tópico de gramática sobre o abjad e o niqqud). E, diferente do português, o hebraico não usa verbo nenhum pra dizer “eu sou” ou “ele é” no presente: “Ani Dan” já quer dizer “Eu [sou o] Dan” (ver o tópico sobre frases sem verbo “ser”).',
      grammar_examples: [
        ['Shalom! Ani Dan.', 'Oi! Eu sou o Dan.'],
        ['Mi at?', 'Quem é você (fem.)?'],
        ['Hu gadol.', 'Ele é grande.'],
        ['Ma ha-shem?', 'Qual é o nome?'],
      ],
      character_guide: [
        ['א ב ג ד ה ו ז ח ט י', '10 das 22 letras do abjad hebraico (sem vogais próprias)', 'אני (ani, eu)'],
        ['ח', 'som gutural, como o “j” espanhol ou o “ch” alemão de “Bach” — nunca o “ch” português', 'חלב (khalav, leite)'],
        ['שלום termina com ם', 'a forma final (sofit) da letra מ, usada só no fim da palavra', 'שלום (shalom)'],
        ['אמן termina com ן', 'a forma final (sofit) da letra נ', 'אמן (amen)'],
        ['sem niqqud', 'no dia a dia as vogais (niqqud) quase nunca aparecem — só em dicionário, poesia e livro infantil', 'שלום, לא, בית — sem nenhum pontinho'],
      ],
    },
    lessons: [
      {
        id: 'he-u1-l1',
        title: 'Shalom, boker tov, toda',
        kind: 'licao',
        words: ['שלום', 'בוקר טוב', 'ערב טוב', 'לילה טוב', 'תודה', 'סליחה'],
        cloze: [
          { sentence: '___, Dan!', answer: 'שלום', options: ['שלום', 'תודה', 'סליחה'], translation: 'Oi, Dan!' },
          { sentence: 'Ha-laila: ___!', answer: 'לילה טוב', options: ['לילה טוב', 'בוקר טוב', 'ערב טוב'], translation: 'A noite: boa noite!' },
          { sentence: 'Ha-kafe tov, ___!', answer: 'תודה', options: ['תודה', 'שלום', 'סליחה'], translation: 'O café está bom, obrigado!' },
        ],
        voice: {
          bot: 'Shalom! Ani Noa.',
          botTranslation: 'Oi! Eu sou a Noa.',
          expected: ['Shalom! Ani Dan.', 'shalom', 'ani'],
          hint: 'Responda com “Shalom!” e diga o seu nome com “Ani …”.',
        },
        communityPrompt: 'Apresente-se em hebraico: diga “Shalom!” e o seu nome com “Ani …”.',
      },
      {
        id: 'he-u1-l2',
        title: 'Ani, ata, hu, hi',
        kind: 'licao',
        words: ['אני', 'אתה', 'את', 'הוא', 'היא', 'שם'],
        cloze: [
          { sentence: '___ Dan.', answer: 'אני', options: ['אני', 'אתה', 'הוא'], translation: 'Eu sou o Dan.' },
          { sentence: 'Mi ___?', answer: 'את', options: ['את', 'הוא', 'היא'], translation: 'Quem é você (fem.)?' },
          { sentence: 'Ma ha-___?', answer: 'שם', options: ['שם', 'הוא', 'אני'], translation: 'Qual é o nome?' },
        ],
        voice: {
          bot: 'Mi at?',
          botTranslation: 'Quem é você (fem.)?',
          expected: ['Ani Noa.', 'ani'],
          hint: 'Diga o seu nome com “Ani …”.',
        },
        communityPrompt: 'Escreva três frases apresentando você e um amigo, usando “Ani”, “Ata/At” e “Hu/Hi”.',
      },
      {
        id: 'he-u1-l3',
        title: 'Test: os primeiros passos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Shalom! Ani Dan. Mi at?',
          botTranslation: 'Oi! Eu sou o Dan. Quem é você?',
          expected: ['Shalom! Ani Noa.', 'shalom', 'ani'],
          hint: 'Devolva o cumprimento (“Shalom!”) e diga o seu nome com “Ani …”.',
        },
        communityPrompt: 'Escreva uma apresentação completa em hebraico: cumprimento, o seu nome com “Ani…” e uma despedida (“Laila tov” ou “Shalom”).',
      },
    ],
  },
  {
    id: 'he-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'A família, a casa e a comida',
    emoji: '👪',
    card: {
      id: 'he-c2',
      title: 'Smikhut e os verbos de três letras',
      emoji: '🧩',
      history:
        'O hebraico tem um jeito só dele de juntar dois substantivos pra mostrar posse, sem usar uma palavra separada pra “de”: é o estado construto, ou smikhut (ver o tópico de gramática). “Beit sefer” (literalmente “casa-de livro”) quer dizer “escola”; “ugat gvina” (“bolo-de queijo”) é cheesecake. E os verbos nascem quase todos de uma raiz de três consoantes — o shoresh — que ganha vogais e prefixos diferentes conforme o “molde” (binyan) usado: são sete moldes ao todo (Wikipédia, “Hebrew verb conjugation”).',
      culture_tip:
        '“Ima” e “aba” (mamãe e papai) são as formas informais mais usadas no dia a dia em Israel, até entre adultos falando dos próprios pais — as formas “em” e “av” soam mais formais ou literárias.',
      grammar_why:
        'Pra descrever algo (“a casa é grande”), o hebraico também dispensa o verbo: “Ha-bayit gadol” já é uma frase completa, sem “é”. O artigo definido é o prefixo “ha-”, grudado na palavra: “bayit” (uma casa) vira “ha-bayit” (a casa).',
      grammar_examples: [
        ['Zot ha-mishpakha.', 'Essa é a família.'],
        ['Ha-bayit gadol.', 'A casa é grande.'],
        ['Hu ohev lekhem.', 'Ele gosta de pão.'],
        ['Hu rotze kafe.', 'Ele quer café.'],
      ],
      character_guide: [
        ['משפחה', 'a letra ח no meio da palavra: som gutural', 'mishpakha (família)'],
        ['בית → בֵּית', 'em “beit sefer” (escola), “bayit” perde o “a” final — é o estado construto', 'beit sefer (escola)'],
        ['ה-', 'o artigo definido “ha-” gruda na palavra seguinte', 'ha-bayit (a casa)'],
      ],
    },
    lessons: [
      {
        id: 'he-u2-l1',
        title: 'Ha-mishpakha sheli',
        kind: 'licao',
        words: ['משפחה', 'אמא', 'אבא', 'אח', 'אחות', 'בית'],
        cloze: [
          { sentence: 'Zot ha-___.', answer: 'משפחה', options: ['משפחה', 'אמא', 'בית'], translation: 'Essa é a família.' },
          { sentence: 'Shalom, ___!', answer: 'אמא', options: ['אמא', 'אבא', 'אח'], translation: 'Oi, mãe!' },
          { sentence: 'Hu ha-___.', answer: 'אח', options: ['אח', 'אחות', 'אבא'], translation: 'Ele é o irmão.' },
        ],
        voice: {
          bot: 'Zot ha-mishpakha?',
          botTranslation: 'Essa é a família?',
          expected: ['Ken, zot ha-mishpakha.', 'ken', 'mishpakha'],
          hint: 'Responda “Ken” (sim) ou “Lo” (não) e repita “ha-mishpakha”.',
        },
        communityPrompt: 'Apresente a sua família em hebraico com “Ima”, “Aba”, “Akh” e “Akhot”, e os nomes de cada um.',
      },
      {
        id: 'he-u2-l2',
        title: 'Lekhem, khalav, kafe',
        kind: 'licao',
        words: ['לחם', 'חלב', 'גבינה', 'קפה', 'מים', 'אהב'],
        cloze: [
          { sentence: 'Hu ___ lekhem.', answer: 'אהב', options: ['אהב', 'רוצה', 'שתה'], translation: 'Ele gosta de pão.' },
          { sentence: 'Hu ___ khalav.', answer: 'שתה', options: ['שתה', 'אהב', 'רוצה'], translation: 'Ele bebeu leite.' },
          { sentence: 'Hu rotze ___.', answer: 'קפה', options: ['קפה', 'לחם', 'מים'], translation: 'Ele quer café.' },
        ],
        voice: {
          bot: 'Ata rotze kafe?',
          botTranslation: 'Você quer café?',
          expected: ['Ken, ani rotze kafe.', 'ken', 'rotze', 'kafe'],
          hint: 'Responda “Ken” ou “Lo” e repita “rotze kafe”.',
        },
        communityPrompt: 'Escreva o que você gosta de comer e beber em hebraico, usando “Ani ohev…” e “Ani rotze…”.',
      },
      {
        id: 'he-u2-l3',
        title: 'Test: família e comida',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ata ohev lekhem?',
          botTranslation: 'Você gosta de pão?',
          expected: ['Ken, ani ohev lekhem.', 'ken', 'ohev', 'lekhem'],
          hint: 'Responda com “Ken, ani ohev…” ou “Lo, ani lo ohev…”.',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e o que você gosta de comer, usando “Ima”, “Aba”, “Ani ohev” e “Ani rotze”.',
      },
    ],
  },
  {
    id: 'he-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Mezeg avir u-vgadim',
    emoji: '🌦️',
    card: {
      id: 'he-c3',
      title: 'שלי, שלו, שלה: a posse com של',
      emoji: '🔗',
      history:
        'Além do smikhut (ver a unidade anterior), o hebraico de hoje usa bastante a preposição “של” (de) pra mostrar posse — a Wikipédia em inglês (“Modern Hebrew grammar”) explica que ela ganha um sufixo de pessoa: שלי (sheli, meu), שלו (shelo, dele), שלה (shelah, dela).',
      culture_tip:
        'Falar do מזג אוויר (tempo) é um assunto tão universal em Israel quanto em qualquer lugar — do calor seco do verão à chuva (גשם) do inverno, e até שלג (neve) ocasional em Jerusalém.',
      grammar_why:
        'Repare como “ha-kova sheli” (meu chapéu) usa “של” mais o sufixo “-i”, enquanto “ha-kova shel Dan” (o chapéu do Dan) usa “של” mais um nome — ver o tópico de gramática “he-g6”.',
      grammar_examples: [
        ['Ha-mezeg avir kham hayom.', 'O tempo está quente hoje.'],
        ['Ha-kova sheli shakhor.', 'O meu chapéu é preto.'],
        ['Ha-na’alayim shel Noa chadashot.', 'Os sapatos da Noa são novos.'],
        ['Yered geshem machar.', 'Vai cair chuva amanhã.'],
      ],
      character_guide: [
        ['שלי / שלו / שלה', '“meu/dele/dela”, de של + sufixo de pessoa', 'ha-kova sheli (meu chapéu)'],
        ['נעליים', 'forma dual (dois sapatos formam um par)', 'na’alayim (sapatos)'],
      ],
    },
    lessons: [
      {
        id: 'he-u3-l1',
        title: 'Eykh ha-mezeg avir hayom?',
        kind: 'licao',
        words: ['מזג אוויר', 'חם', 'קר', 'גשם', 'שלג', 'רוח'],
        cloze: [
          { sentence: 'Ha-mezeg avir ___ hayom.', answer: 'חם', options: ['חם', 'קר', 'רוח'], translation: 'O tempo está quente hoje.' },
          { sentence: 'Machar yered ___.', answer: 'גשם', options: ['גשם', 'שלג', 'רוח'], translation: 'Amanhã vai cair chuva.' },
          { sentence: 'Ha-___ gdola hayom.', answer: 'רוח', options: ['רוח', 'שלג', 'מזג אוויר'], translation: 'O vento está forte hoje.' },
        ],
        voice: {
          bot: 'Eykh ha-mezeg avir hayom?',
          botTranslation: 'Como está o tempo hoje?',
          expected: ['Ha-mezeg avir kham hayom.', 'kham', 'kar'],
          hint: 'Responda com “Ha-mezeg avir … hayom” e “kham” ou “kar”.',
        },
        communityPrompt: 'Descreva o tempo de hoje em hebraico, usando “חם”, “קר”, “גשם” ou “שלג”.',
      },
      {
        id: 'he-u3-l2',
        title: 'Ha-begadim sheli',
        kind: 'licao',
        words: ['בגדים', 'חולצה', 'נעליים', 'כובע', 'עיר', 'רחוב'],
        cloze: [
          { sentence: 'Ha-___ sheli khadasha.', answer: 'חולצה', options: ['חולצה', 'כובע', 'נעליים'], translation: 'A minha camisa é nova.' },
          { sentence: 'Zot ___ gdola.', answer: 'עיר', options: ['עיר', 'רחוב', 'כובע'], translation: 'Essa é uma cidade grande.' },
          { sentence: 'Ha-___ gadol.', answer: 'רחוב', options: ['רחוב', 'עיר', 'נעליים'], translation: 'A rua é grande.' },
        ],
        voice: {
          bot: 'Eyze tseva ha-khultsa shelkha?',
          botTranslation: 'Que cor é a sua camisa?',
          expected: ['Ha-khultsa sheli kkhola.', 'kkhola', 'aduma'],
          hint: 'Responda com “ha-khultsa sheli …” e uma cor.',
        },
        communityPrompt: 'Descreva a roupa que você está vestindo hoje em hebraico, usando “חולצה”, “נעליים” ou “כובע” e uma cor.',
      },
      {
        id: 'he-u3-l3',
        title: 'Test: mezeg avir u-vgadim',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Eykh ha-mezeg avir, u-ma telbash?',
          botTranslation: 'Como está o tempo, e o que você vai vestir?',
          expected: ['Ha-mezeg avir kar, ve-ani elbash kova ve-khultsa.', 'kar', 'kova'],
          hint: 'Diga o tempo (“ha-mezeg avir … ”) e a roupa que vai vestir.',
        },
        communityPrompt: 'Escreva cinco frases sobre o tempo e a roupa, usando “שלי/שלו/שלה” pra dizer de quem é cada peça.',
      },
    ],
  },
  {
    id: 'he-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Miktsoa u-rgashot',
    emoji: '🩺',
    card: {
      id: 'he-c4',
      title: 'O futuro: um prefixo pra cada pessoa',
      emoji: '⏩',
      history:
        'Falar dos próprios planos de trabalho é uma boa porta pro futuro em hebraico: a Wikipédia em inglês (“Modern Hebrew verb conjugation”) traz a tabela do futuro de כתב (escrever) no binyan pa‘al — אכתוב (ekhtov, eu vou escrever), יכתוב (yikhtov, ele vai escrever) — cada pessoa com o seu prefixo.',
      culture_tip:
        'Perguntar “ma ata oved?” (o que você trabalha?) é uma forma comum e direta de abrir conversa sobre profissão em Israel, sem cerimônia.',
      grammar_why:
        'Note o prefixo mudando por pessoa: א- (eu), ת- (tu/ela), י- (ele), נ- (nós) — sempre grudado direto na raiz do verbo, sem palavra separada pro futuro (ver “he-g7”).',
      grammar_examples: [
        ['Hu rofe, ve-hi more.', 'Ele é médico, e ela é professora.'],
        ['Ani ekhtov mikhtav machar.', 'Eu vou escrever uma carta amanhã.'],
        ['Ani sameach, aval ayef.', 'Eu estou feliz, mas cansado.'],
        ['Hi mefachedet ki hi avda harbe.', 'Ela está com medo porque trabalhou muito.'],
      ],
      character_guide: [
        ['א- / ת- / י- / נ-', 'os prefixos do futuro, um por pessoa', 'ekhtov (eu vou escrever)'],
        ['כועס / כועסת', 'o particípio de sentimento concorda em gênero', 'hu koes (m.) / hi koeset (f.)'],
      ],
    },
    lessons: [
      {
        id: 'he-u4-l1',
        title: 'Ma ata oved?',
        kind: 'licao',
        words: ['רופא', 'מורה', 'מהנדס', 'תלמיד', 'שמח', 'עצוב'],
        cloze: [
          { sentence: 'Hu ___ ve-hu oved be-beit cholim.', answer: 'רופא', options: ['רופא', 'מורה', 'תלמיד'], translation: 'Ele é médico e trabalha no hospital.' },
          { sentence: 'Hi ___ ve-hi ovedet be-beit sefer.', answer: 'מורה', options: ['מורה', 'מהנדס', 'רופא'], translation: 'Ela é professora e trabalha na escola.' },
          { sentence: 'Ani ___ hayom.', answer: 'שמח', options: ['שמח', 'עצוב', 'תלמיד'], translation: 'Eu estou feliz hoje.' },
        ],
        voice: {
          bot: 'Ma ata oved?',
          botTranslation: 'O que você trabalha?',
          expected: ['Ani talmid.', 'ani rofe', 'ani more'],
          hint: 'Responda com “Ani …” e uma profissão.',
        },
        communityPrompt: 'Diga a sua profissão em hebraico com “Ani …” e como você está se sentindo hoje.',
      },
      {
        id: 'he-u4-l2',
        title: 'Eykh ata margish hayom?',
        kind: 'licao',
        words: ['כועס', 'מפחד', 'עייף', 'כתב', 'קרא', 'ראה'],
        cloze: [
          { sentence: 'Hu ___ ki hu avad harbe.', answer: 'עייף', options: ['עייף', 'כועס', 'מפחד'], translation: 'Ele está cansado porque trabalhou muito.' },
          { sentence: 'Ani ___ mikhtav.', answer: 'כותב', options: ['כותב', 'קורא', 'רואה'], translation: 'Eu escrevo uma carta.' },
          { sentence: 'Hu ___ sefer.', answer: 'קורא', options: ['קורא', 'כותב', 'רואה'], translation: 'Ele lê um livro.' },
        ],
        voice: {
          bot: 'Ha-im ata ayef o sameach?',
          botTranslation: 'Você está cansado ou feliz?',
          expected: ['Ani kcat ayef.', 'ayef', 'sameach'],
          hint: 'Responda com “Ani …” e um sentimento.',
        },
        communityPrompt: 'Escreva três frases com “כתב”, “קרא” e “ראה” sobre o que você fez hoje.',
      },
      {
        id: 'he-u4-l3',
        title: 'Test: mikצoa u-rgashot',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ma ata oved? Ve-eykh ata margish hayom?',
          botTranslation: 'O que você trabalha? E como você está se sentindo hoje?',
          expected: ['Ani mehandes, ve-ani sameach hayom.', 'ani mehandes', 'sameach'],
          hint: 'Diga sua profissão (“Ani …”) e um sentimento.',
        },
        communityPrompt: 'Escreva cinco frases sobre profissões e sentimentos, usando o futuro (א-/ת-/י-/נ-) pra falar de planos.',
      },
    ],
  },
];
