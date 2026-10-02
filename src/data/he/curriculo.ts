import type { UnitSeed } from '../types';

/**
 * Trilha do hebraico moderno — por enquanto só as duas unidades do nível A1 (pacote incompleto,
 * ver `incomplete` em index.ts). Fontes da parte histórica/gramatical: ver cabeçalho de
 * `gramatica.ts` (Wikipédia em inglês, artigos “Modern Hebrew”, “Hebrew alphabet”, “Niqqud”,
 * “Construct state”, “Hebrew verb conjugation”), checados em 02/10/2026.
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
];
