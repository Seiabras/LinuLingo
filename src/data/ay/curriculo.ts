import type { UnitSeed } from '../types';

/** Trilha do aimará — por enquanto só as duas unidades do nível A1 (pacote incompleto — ver `incomplete` em index.ts). */
export const UNITS_AY: UnitSeed[] = [
  {
    id: 'ay-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Kamisaki!',
    emoji: '👋',
    card: {
      id: 'ay-c1',
      title: 'Uma língua do altiplano, falada por quase dois milhões de pessoas',
      emoji: '🏔️',
      history:
        'O aimará (aymar aru) é falado por cerca de 1,7 a 2 milhões de pessoas no altiplano andino, em volta do lago Titicaca: é língua cooficial na Bolívia e no Peru, e tem falantes também no norte do Chile e no noroeste da Argentina. Apesar do contato muito próximo com o quéchua (as duas línguas se influenciaram por séculos, no mesmo território), o aimará pertence a uma família própria — a família aimará, ou jaqi, nome que vem da palavra “jaqi”, “pessoa, ser humano” no próprio idioma. A maioria dos linguistas não considera comprovado um parentesco genealógico entre o aimará e o quéchua: a semelhança que existe vem de contato, não de uma origem comum.',
      culture_tip:
        'No dia a dia, é comum chamar outra pessoa de “jilata” (irmão) ou “kullaka” (irmã) mesmo sem parentesco nenhum — um jeito afetuoso e respeitoso de se dirigir a alguém, parecido com usar “colega” ou “companheiro”, mas mais caloroso. Por isso “Kamisaki, jilata?” (como vai, irmão?) é uma saudação comum entre pessoas que acabaram de se conhecer.',
      grammar_why:
        'O aimará não tem um verbo “ser/estar” como o português: para dizer “eu sou uma pessoa” ou “ele é meu irmão”, basta grudar o sufixo “-wa” no final da palavra que descreve o sujeito — “Naya jaqitwa” (eu sou uma pessoa), “Jupax jilajawa” (ele é meu irmão). Esse “-wa” marca que a frase é uma afirmação direta, baseada em certeza — e volta no quarto tópico de gramática, sobre evidencialidade.',
      grammar_examples: [
        ['Kamisaki?', 'Como vai?'],
        ['Walikiskthwa, yuspagara.', 'Estou bem, obrigado.'],
        ['Naya jaqitwa.', 'Eu sou uma pessoa.'],
        ['Jupax jilajawa.', 'Ele é meu irmão.'],
      ],
      character_guide: [
        ["p', t', ch', k', q'", 'consoantes ejetivas: soltam um ar comprimido logo depois da consoante, sem soprar', "t'ant'a (pão), ch'uqi (batata)"],
        ['ph, th, chh, kh, qh', 'consoantes aspiradas: um sopro de ar depois da consoante', 'phaxsi (lua), qhawqha (quanto)'],
        ['x', 'um som de “r” fraco, raspado no fundo da garganta (parecido com o “j” espanhol)', 'uñjaña (ver), suxta (seis)'],
        ['ä, ï, ü', 'vogal longa (às vezes escrita dobrada: aa, ii, uu)', 'jutäwa (vou vir)'],
      ],
    },
    lessons: [
      {
        id: 'ay-u1-l1',
        title: 'Kamisaki, yuspagara!',
        kind: 'licao',
        words: ['kamisaki', 'waliki', 'janiwa', 'jisa', 'yuspagara', 'jikisiñkama'],
        cloze: [
          { sentence: '___, jilata!', answer: 'Kamisaki', options: ['Kamisaki', 'Yuspagara', 'Jikisiñkama'], translation: 'Olá, irmão! (como vai?)' },
          { sentence: '¿Kamisaki? — ___.', answer: 'Walikiskthwa', options: ['Walikiskthwa', 'Janiwa', 'Jisa'], translation: '— Como vai? — Estou bem.' },
          { sentence: '___, kullaka!', answer: 'Yuspagara', options: ['Yuspagara', 'Janiwa', 'Jikisiñkama'], translation: 'Obrigada, irmã!' },
        ],
        voice: {
          bot: '¿Kamisaki?',
          botTranslation: 'Como vai?',
          expected: ['Walikiskthwa, yuspagara.', 'walikiskthwa', 'waliki'],
          hint: 'Responda que está bem e agradeça: “Walikiskthwa, yuspagara.”',
        },
        communityPrompt: 'Escreva três cumprimentos em aimará: “Kamisaki?” (como vai?), a resposta “Walikiskthwa” (estou bem) e um agradecimento com “Yuspagara”.',
      },
      {
        id: 'ay-u1-l2',
        title: 'Naya, juma, jupa',
        kind: 'licao',
        words: ['naya', 'juma', 'jupa', 'jiwasa', 'suti', 'jaqi'],
        cloze: [
          { sentence: '___ jaqitwa.', answer: 'Naya', options: ['Naya', 'Juma', 'Jupa'], translation: 'Eu sou uma pessoa.' },
          { sentence: '¿___, sutimaxa kunasa?', answer: 'Juma', options: ['Juma', 'Jupa', 'Naya'], translation: 'Você, qual é o seu nome?' },
          { sentence: '___ jilajawa.', answer: 'Jupa', options: ['Jupa', 'Naya', 'Juma'], translation: 'Ele é meu irmão.' },
        ],
        voice: {
          bot: '¿Kunasa sutimaxa?',
          botTranslation: 'Qual é o seu nome?',
          expected: ['Ana satathwa.', 'satathwa'],
          hint: 'Diga o seu nome com “… satathwa.”',
        },
        communityPrompt: 'Apresente-se em aimará: diga o seu nome com “… satathwa” e diga que é uma pessoa feliz de aprender aimará com “Naya jaqitwa.”',
      },
      {
        id: 'ay-u1-l3',
        title: 'Test: kamisaki',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: '¡Kamisaki! Ana satathwa. ¿Jumasti?',
          botTranslation: 'Olá! Eu me chamo Ana. E você?',
          expected: ['Kamisaki! Lucas satathwa.', 'satathwa', 'kamisaki'],
          hint: 'Devolva a saudação (“Kamisaki!”) e diga o seu nome com “… satathwa.”',
        },
        communityPrompt: 'Escreva uma apresentação completa em aimará: saudação (“Kamisaki!”), nome (“… satathwa”) e um agradecimento (“Yuspagara”).',
      },
    ],
  },
  {
    id: 'ay-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Wila masi',
    emoji: '👪',
    card: {
      id: 'ay-c2',
      title: 'Família, comida e a posse grudada na palavra',
      emoji: '🧭',
      history:
        'Assim como no quéchua, a comunidade de parentes e vizinhos (o “ayllu”, palavra que o aimará também usa) é a base da vida social no altiplano, organizada em volta do trabalho da terra — hoje em dia, sobretudo a batata (“ch’uqi”) e os rebanhos de lhama e alpaca. “Wila masi”, literalmente “parente de sangue”, é como o “Diccionario Ilustrado de la Lengua Aymara” (Ministério da Educação do Chile) chama a seção sobre parentesco.',
      culture_tip:
        'Uma curiosidade real do vocabulário aimará: “wila” quer dizer tanto “vermelho” quanto “sangue” — a mesma palavra para as duas coisas, documentada nos dicionários aimará-espanhol consultados para este curso.',
      grammar_why:
        'A posse em aimará é um sufixo grudado na palavra, não uma palavra separada como o nosso “meu”: “uta” é casa, “uta-ja” é minha casa; “uta-ma” é tua casa; “uta-pa” é a casa dele ou dela. É o mesmo sufixo em qualquer palavra: “awki-ja” (meu pai), “jila-ja” (meu irmão, como em “jilajawa”, “ele é meu irmão”).',
      grammar_examples: [
        ['Awkijan sutipax Andrisuwa.', 'O nome do meu pai é André.'],
        ['Mamajan sutipax Lurinsawa.', 'O nome da minha mãe é Lorenza.'],
        ['Jupax kullakajawa.', 'Ela é minha irmã.'],
        ['Jichhurux uta apthapiñani.', 'Hoje vamos arrumar a casa.'],
      ],
      character_guide: [
        ['-ja / -ma / -pa', 'sufixos de posse: meu / teu / dele-dela', 'uta-ja (minha casa)'],
        ["ch'uqi", 'batata (palavra própria do aimará, diferente do quéchua “papa”)', "Ch'uqixa jach'awa."],
      ],
    },
    lessons: [
      {
        id: 'ay-u2-l1',
        title: 'Wila masi',
        kind: 'licao',
        words: ['awki', 'mama', 'jilata', 'kullaka', 'uta', 'wawa'],
        cloze: [
          { sentence: '___jan sutipax Andrisuwa.', answer: 'Awki', options: ['Awki', 'Mama', 'Uta'], translation: 'O nome do meu pai é André.' },
          { sentence: '___jan sutipax Lurinsawa.', answer: 'Mama', options: ['Mama', 'Awki', 'Jilata'], translation: 'O nome da minha mãe é Lorenza.' },
          { sentence: 'Jupax ___jawa.', answer: 'kullaka', options: ['kullaka', 'jilata', 'wawa'], translation: 'Ela é minha irmã.' },
        ],
        voice: {
          bot: '¿Khitisa jumana familiamaja?',
          botTranslation: 'Quem é a sua família?',
          expected: ['Awkijaxa, mamajaxa, jilatajaxa.', 'awki', 'mama'],
          hint: 'Diga quem é a sua família com “awki-ja” (meu pai), “mama-ja” (minha mãe), “jilata-ja” (meu irmão).',
        },
        communityPrompt: 'Descreva a sua família (wila masi) em aimará: use “awkijaxa” (meu pai), “mamajaxa” (minha mãe) e “jilatajaxa/kullakajaxa” (meu irmão/minha irmã).',
      },
      {
        id: 'ay-u2-l2',
        title: "Manq'a, uma",
        kind: 'licao',
        words: ['uma', "t'ant'a", 'aycha', "ch'uqi", "manq'aña", 'umaña'],
        cloze: [
          { sentence: "Junt'um ___.", answer: 'umasiñani', options: ['umasiñani', "manq'asiñani", 'sarañani'], translation: 'Vamos beber chá (água quente).' },
          { sentence: 'Taqini ___!', answer: "manq'asiñani", options: ["manq'asiñani", 'umasiñani', 'irnaqañani'], translation: 'Vamos todos comer!' },
          { sentence: '___ aliri saram.', answer: "T'ant'a", options: ["T'ant'a", "Ch'uqi", 'Aycha'], translation: 'Vai comprar pão.' },
        ],
        voice: {
          bot: "¿Kuna aychsa munta?",
          botTranslation: 'Que carne você quer?',
          expected: ["Ch'uqi munta.", "ch'uqi", 'manq\'a'],
          hint: 'Diga o que você quer comer: “…ta munta.”',
        },
        communityPrompt: 'Escreva o que você come e bebe em aimará: “manq’aña” (comer), “umaña” (beber), “uma” (água), “ch’uqi” (batata) e “aycha” (carne).',
      },
      {
        id: 'ay-u2-l3',
        title: "Test: wila masi e manq'a",
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: '¿Kunasa sutimaxa, kawkirus jutta?',
          botTranslation: 'Qual é o seu nome, de onde você vem?',
          expected: ['Ana satathwa.', 'satathwa'],
          hint: 'Diga o seu nome com “…satathwa” e fale da sua família e comida favorita.',
        },
        communityPrompt: 'Escreva cinco frases sobre você e a sua família em aimará, usando “satathwa”, “jaqitwa” e os parentes e comidas que você aprendeu.',
      },
    ],
  },
];
