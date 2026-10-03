import type { UnitSeed } from '../types';

/**
 * Trilha do wolof: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 *
 * Fontes: Wikipédia (inglês) "Wolof language" (classificação, status, sistema de escrita, exemplos
 * de pronomes temporais); Wikcionário (inglês e francês), verbetes individuais citados em
 * vocabulario.ts e extras.ts; Omniglot "Wolof phrases" (cumprimentos).
 */
export const UNITS_WO: UnitSeed[] = [
  {
    id: 'wo-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Jërejëf! Ndaje bu njëkk',
    emoji: '👋',
    card: {
      id: 'wo-c1',
      title: 'A língua mais falada do Senegal',
      emoji: '🇸🇳',
      history:
        'O wolof é uma língua da família Níger-Congo, mas não é uma língua banta: fica no ramo atlântico (também chamado senegambiano), que a Wikipédia e o Wikcionário colocam como um galho separado do Volta-Congo, o galho de onde vêm o suaíli, o zulu e o lingala. Hoje o wolof é a língua nativa de cerca de 40% da população do Senegal (o povo wolof) e, além disso, funciona como língua franca falada por quase todo mundo no país, mesmo quem tem outra língua materna — embora o francês continue sendo a língua oficial, herdada da colonização. O wolof também é falado na Gâmbia (onde é maioria na capital, Banjul) e na Mauritânia. Desde os anos 1970, tem uma grafia latina oficial, usada neste pacote; também existe uma grafia árabe antiga, o wolofal, e um alfabeto próprio criado em 1961, o garay.',
      culture_tip:
        'Cumprimentar em wolof é sempre uma pequena conversa (“waxtaan”), nunca só um “oi” rápido. A pergunta mais comum é “Na nga def?” (como vai?), mas também se pergunta diretamente pela paz: “Jàmm nga am?” (“você tem paz?”), respondida com “Jàmm rekk” (“só paz”, isto é, “vou bem”). Pular direto pro assunto sem passar por essa troca soa estranho.',
      grammar_why:
        'O verbo do wolof não se conjuga: é sempre a mesma forma (“bëgg”, querer; “dem”, ir). Quem muda é o pronome grudado nele, que carrega a pessoa, o tempo e também o que a frase quer destacar — isso é o sistema de “foco” do wolof, que a gramática desta unidade começa a mostrar com “dama” (eu, destacando a ação: “Dama bëgg ceeb”, eu quero arroz) e com “nga” (você, grudado direto no verbo: “Wax nga dëgg”, você tem razão, literalmente “você fala verdade”).',
      grammar_examples: [
        ['Dama bëgg ceeb.', 'Eu quero arroz.'],
        ['Wax nga dëgg.', 'Você tem razão (lit. “você fala verdade”).'],
        ['Maa ngi tudd Omar.', 'Meu nome é Omar (lit. “eu aqui, chamado Omar”).'],
        ['Jàmm rekk, jërejëf.', 'Vou bem, obrigado (lit. “só paz”).'],
      ],
      character_guide: [
        ['x', 'som gutural, raspado no fundo da garganta — como o “j” do espanhol ou o “ch” do alemão em “Bach”', 'xaj (cachorro), xam (saber)'],
        ['ñ', 'como o “nh” do português', 'ñaar (dois), ñuul (preto)'],
        ['j', 'um “dj” suave, com a língua no céu da boca', 'jën (peixe), jant (sol)'],
        ['vogal dobrada (aa, ee, oo)', 'o som fica mais comprido que a vogal simples', 'naan (beber), juróom (cinco)'],
        ['b, d, g no fim da palavra', 'perdem a voz e soam quase como p, t, k', 'ceeb (arroz) soa como “ceep”'],
      ],
    },
    lessons: [
      {
        id: 'wo-u1-l1',
        title: 'Na nga def? Os cumprimentos',
        kind: 'licao',
        words: ['jërejëf', 'waaw', 'déedéet', 'na nga def', 'jàmm nga am', 'jàmm rekk'],
        cloze: [
          { sentence: '___, baay!', answer: 'Jërejëf', options: ['Jërejëf', 'Waaw', 'Déedéet'], translation: 'Obrigado, pai!' },
          { sentence: 'Dama bëgg ceeb. — ___.', answer: 'Waaw', options: ['Waaw', 'Déedéet', 'Jërejëf'], translation: 'Eu quero arroz. — Sim.' },
          { sentence: 'Na nga def? — ___, jërejëf.', answer: 'Jàmm rekk', options: ['Jàmm rekk', 'Jàmm nga am', 'Déedéet'], translation: 'Como vai? — Só paz (vou bem), obrigado.' },
        ],
        voice: {
          bot: 'Na nga def?',
          botTranslation: 'Como vai?',
          expected: ['Jàmm rekk, jërejëf. Yow nag?', 'jàmm rekk', 'jërejëf'],
          hint: 'Responda que vai bem, com “Jàmm rekk”, agradeça com “jërejëf” e devolva a pergunta.',
        },
        communityPrompt: 'Escreva uma troca de cumprimentos em wolof: a pergunta (“Na nga def?” ou “Jàmm nga am?”), a resposta (“Jàmm rekk”) e um agradecimento (“Jërejëf”).',
      },
      {
        id: 'wo-u1-l2',
        title: 'Man, yow, moom — eu, você, a família',
        kind: 'licao',
        words: ['man', 'yow', 'moom', 'baay', 'yaay', 'doom'],
        cloze: [
          { sentence: '___ ak yow.', answer: 'Man', options: ['Man', 'Moom', 'Baay'], translation: 'Eu e você.' },
          { sentence: 'Baay ak ___.', answer: 'yaay', options: ['yaay', 'doom', 'moom'], translation: 'O pai e a mãe.' },
          { sentence: 'Moom ak ___.', answer: 'doom', options: ['doom', 'yow', 'man'], translation: 'Ele/ela e o filho (ou a filha).' },
        ],
        voice: {
          bot: 'Baay ak yaay, ñan nga gën a bëgg?',
          botTranslation: 'Entre o pai e a mãe, qual você gosta mais? (pergunta de aquecimento — pode responder livremente)',
          expected: ['Dama bëgg baay ak yaay.', 'dama bëgg baay', 'dama bëgg yaay'],
          hint: 'Responda com “Dama bëgg…” (eu gosto de…) e o nome da pessoa: baay (pai) ou yaay (mãe).',
        },
        communityPrompt: 'Apresente sua família em wolof: diga “man” (eu), e depois “baay”, “yaay” e “doom” para as pessoas que você tem em casa.',
      },
      {
        id: 'wo-u1-l3',
        title: 'Prova: ndaje bu njëkk',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Na nga def? Man, maa ngi tudd Omar.',
          botTranslation: 'Como vai? Eu, meu nome é Omar.',
          expected: ['Jàmm rekk, jërejëf. Maa ngi tudd Ana.', 'jàmm rekk', 'maa ngi tudd'],
          hint: 'Responda “Jàmm rekk, jërejëf” e diga o seu nome com “Maa ngi tudd…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento (“Na nga def?”), resposta (“Jàmm rekk”), seu nome (“Maa ngi tudd…”) e uma despedida (“Ba beneen”).',
      },
    ],
  },
  {
    id: 'wo-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Kër, ceeb ak jën',
    emoji: '🍚',
    card: {
      id: 'wo-c2',
      title: 'Bi, gi, ji, mi, si, wi: as classes do substantivo',
      emoji: '🏠',
      history:
        'Diferente do suaíli, do zulu ou do lingala — línguas bantas, de outro galho do Níger-Congo —, o wolof não marca a classe do substantivo com um prefixo preso à palavra. Em vez disso, cada substantivo tem uma consoante de classe própria (b, g, j, k, m, s, w, l…) que só aparece quando se junta um artigo ou um demonstrativo: “kër” (casa) usa a classe gi (“kër gi”, a casa), “xaj” (cachorro) usa a classe bi (“xaj bi”, o cachorro), e “ndox” (água) usa a classe mi (“ndox mi”, a água). Não existe gênero masculino/feminino como em português: para dizer o sexo de uma pessoa ou animal, o wolof acrescenta uma palavra à parte, como em “xale bu góor” (criança homem, menino) — por isso este pacote não usa gênero gramatical.',
      culture_tip:
        'A comida mais famosa do Senegal é o “ceebu jën” (arroz com peixe) — o próprio nome já junta duas palavras desta unidade: “ceeb” (arroz) e “jën” (peixe). Em muitas casas senegalesas, a refeição é servida num prato só, grande, de onde todo mundo come junto.',
      grammar_why:
        'Os números de 6 a 9 não são palavras novas: são “juróom” (cinco) mais o número de 1 a 4, igual a “cinco e um”, “cinco e dois”… Já o verbo continua sem conjugação própria — é o pronome grudado nele que muda, como em “Dama lekk ceeb” (eu como arroz) ou “Dama naan ndox” (eu bebo água).',
      grammar_examples: [
        ['Dama lekk ceeb ak jën.', 'Eu como arroz com peixe.'],
        ['Kër gi.', 'A casa.'],
        ['Xaj bi.', 'O cachorro.'],
        ['Juróom benn, juróom ñaar…', 'Seis, sete… (lit. “cinco-um, cinco-dois”)'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'wo-u2-l1',
        title: 'Em casa, na hora da comida',
        kind: 'licao',
        words: ['kër', 'ndox', 'ceeb', 'jën', 'meew', 'benn'],
        cloze: [
          { sentence: 'Dama bëgg ___.', answer: 'ceeb', options: ['ceeb', 'kër', 'benn'], translation: 'Eu quero arroz.' },
          { sentence: 'Dama naan ___.', answer: 'ndox', options: ['ndox', 'jën', 'meew'], translation: 'Eu bebo água.' },
          { sentence: '___, ñaar, ñett…', answer: 'Benn', options: ['Benn', 'Fukk', 'Juróom'], translation: 'Um, dois, três…' },
        ],
        voice: {
          bot: 'Dama lekk ceebu jën. Yow nag?',
          botTranslation: 'Eu como arroz com peixe (ceebu jën). E você?',
          expected: ['Dama lekk ceeb ak jën itam.', 'dama lekk ceeb', 'dama naan ndox'],
          hint: 'Diga o que você come ou bebe com “Dama lekk…” ou “Dama naan…”.',
        },
        communityPrompt: 'Escreva o que tem na sua casa (“kër”) e o que você come e bebe, usando “Dama lekk…” e “Dama naan…”.',
      },
      {
        id: 'wo-u2-l2',
        title: 'Dem, lekk, gis — o corpo e os verbos',
        kind: 'licao',
        words: ['dem', 'lekk', 'naan', 'bët', 'loxo', 'tànk'],
        cloze: [
          { sentence: 'Dama ___ ceeb.', answer: 'lekk', options: ['lekk', 'naan', 'dem'], translation: 'Eu como arroz.' },
          { sentence: 'Man, dama ___.', answer: 'dem', options: ['dem', 'lekk', 'naan'], translation: 'Eu, eu vou (estou indo).' },
          { sentence: 'Dama gis ak ___.', answer: 'bët', options: ['bët', 'loxo', 'tànk'], translation: 'Eu vejo com os olhos.' },
        ],
        voice: {
          bot: 'Loxo yi ak tànk yi, ñaata la am?',
          botTranslation: 'As mãos e os pés, quantos a pessoa tem? (pergunta de aquecimento — responda livremente)',
          expected: ['Dama am ñaar i loxo ak ñaar i tànk.', 'loxo', 'tànk'],
          hint: 'Fale sobre “loxo” (mão/braço) e “tànk” (perna/pé).',
        },
        communityPrompt: 'Escreva três frases com “Dama…” e um verbo desta lição: dem (ir), lekk (comer) ou naan (beber).',
      },
      {
        id: 'wo-u2-l3',
        title: 'Prova: kër, ceeb ak jën',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Dama lekk ceebu jën ci kër gi. Yow, dama dem.',
          botTranslation: 'Eu como arroz com peixe em casa. Eu, eu vou (estou indo).',
          expected: ['Jàmm rekk! Ba beneen.', 'jàmm rekk', 'ba beneen'],
          hint: 'Responda com “Jàmm rekk” e se despeça com “Ba beneen”.',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua casa e a sua comida, usando “kër”, “ceeb”, “jën” e “Dama lekk/naan…”.',
      },
    ],
  },
];
