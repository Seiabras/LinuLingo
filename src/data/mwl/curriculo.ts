import type { UnitSeed } from '../types';

/**
 * Trilha do mirandês: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_MWL: UnitSeed[] = [
  {
    id: 'mwl-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Buonos dies! Ls purmeiros passos',
    emoji: '👋',
    card: {
      id: 'mwl-c1',
      title: 'A segunda língua oficial de Portugal',
      emoji: '🏔️',
      history:
        'O mirandês é uma língua asturo-leonesa falada em Miranda de l Douro e região, no nordeste de Portugal (Trás-os-Montes). Em 29 de janeiro de 1999, a Assembleia da República reconheceu o mirandês como língua, dando-lhe estatuto oficial junto do português nos assuntos locais do concelho — o único caso assim em Portugal. A ortografia oficial, feita junto com o Centro de Linguística da Universidade de Lisboa, é de 1999. Hoje são cerca de 3.500 falantes, a maioria com mais de 60 anos.',
      culture_tip:
        '“Buonos dies” serve de manhã, e “buonas tardes”/“buonas nuites” completam o dia. Para agradecer, “oubrigado” (homem) ou “oubrigada” (mulher). “Bós” é a forma de tratamento com respeito, como o “vós” antigo do português.',
      grammar_why:
        'O mirandês guardou sons que o português perdeu: o “f” inicial do latim ficou (como em “falar”), e há sete sons de “s”/“z” diferentes, contra só quatro no português. O verbo ser tem forma própria para cada pessoa: “sou”, “sós”, “yê”, “somos”, “sodes”, “son”.',
      grammar_examples: [
        ['Buonos dies! Eu sou de Miranda.', 'Bom dia! Eu sou de Miranda.'],
        ['Qual ye l sou nome?', 'Qual é o seu nome?'],
        ['El ye de Sendin, eilha ye de Angueira.', 'Ele é de Sendin, ela é de Angueira.'],
        ['Oubrigado! I tu?', 'Obrigado! E você?'],
      ],
      character_guide: [
        ['lh', 'como o “lh” do português', 'lheite (leite), filho'],
        ['nh', 'como o “nh” do português', 'manhana (amanhã)'],
        ['ç', 'um “s” surdo, como em “çculpe”', 'çculpe (desculpe)'],
        ['ei / ou', 'ditongos que o português simplificou (sol vira sou, lei vira lheiç em certas palavras)', 'deimingo, ou'],
        ['nasalação', 'o mirandês nasaliza vogais onde o português não nasaliza mais', 'pessonas'],
      ],
    },
    lessons: [
      {
        id: 'mwl-u1-l1',
        title: 'Buonos dies, oubrigado, adius!',
        kind: 'licao',
        words: ['buonos dies', 'buonas tardes', 'buonas nuites', 'adius', 'oubrigado', 'oubrigada'],
        cloze: [
          { sentence: '___, cumo stá?', answer: 'Buonos dies', options: ['Buonos dies', 'Adius', 'Oubrigado'], translation: 'Bom dia, como está?' },
          { sentence: 'Ye nuite: ___!', answer: 'buonas nuites', options: ['buonas nuites', 'buonos dies', 'adius'], translation: 'É noite: boa noite!' },
          { sentence: '___ pul café!', answer: 'Oubrigado', options: ['Oubrigado', 'Adius', 'Buonos dies'], translation: 'Obrigado pelo café!' },
        ],
        voice: {
          bot: 'Oulá! Cumo stá?',
          botTranslation: 'Oi! Como está?',
          expected: ['Bien, oubrigado! I tu?', 'bien', 'oubrigado'],
          hint: 'Responda que vai bem e devolva a pergunta: “Bien, oubrigado! I tu?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em mirandês: um de dia (“Buonos dies…”), um à noite (“Buonas nuites…”) e uma despedida (“Adius”).',
      },
      {
        id: 'mwl-u1-l2',
        title: 'Eu, tu, el, eilha',
        kind: 'licao',
        words: ['eu', 'tu', 'el', 'eilha', 'ser', 'qual'],
        cloze: [
          { sentence: '___ sou de Miranda.', answer: 'Eu', options: ['Eu', 'Tu', 'El'], translation: 'Eu sou de Miranda.' },
          { sentence: '___ ye l sou nome?', answer: 'Qual', options: ['Qual', 'Adonde', 'Cumo'], translation: 'Qual é o seu nome?' },
          { sentence: '___ ye de Sendin.', answer: 'El', options: ['El', 'Eu', 'Tu'], translation: 'Ele é de Sendin.' },
        ],
        voice: {
          bot: 'Oulá! Qual ye l sou nome?',
          botTranslation: 'Oi! Qual é o seu nome?',
          expected: ['Eu sou Ana. I tu?', 'eu sou', 'i tu'],
          hint: 'Diga o seu nome com “Eu sou…” e devolva a pergunta com “I tu?”.',
        },
        communityPrompt: 'Apresente-se em mirandês: diga o seu nome com “Eu sou…” e pergunte o nome de alguém com “Qual ye l sou nome?”.',
      },
      {
        id: 'mwl-u1-l3',
        title: 'Preba: ls purmeiros passos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Buonos dies! Qual ye l sou nome? Adonde stá?',
          botTranslation: 'Bom dia! Qual é o seu nome? De onde você é?',
          expected: ['Buonos dies! Eu sou Lucia i sou de San Paulo.', 'eu sou', 'buonos dies'],
          hint: 'Devolva o cumprimento (“Buonos dies!”), diga o nome com “Eu sou…” e de onde é.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome, de onde você é e uma despedida.',
      },
    ],
  },
  {
    id: 'mwl-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'La family i la casa',
    emoji: '👪',
    card: {
      id: 'mwl-c2',
      title: 'Armanos, armanas i la mesa de família',
      emoji: '🧭',
      history:
        'O mirandês vive cercado de português havia séculos, mas guardou um vocabulário de família próprio: “armano”/“armana” (irmão/irmã) são bem diferentes do português. É parente próximo do asturiano e do leonês (falados na Espanha vizinha) — os três vêm do mesmo tronco astur-leonês, que se separou do galego-português e do castelhano ainda na Idade Média.',
      culture_tip:
        'A palavra para filho é “moço” e para filha, “moça” — as mesmas palavras que em português soam como “rapaz/rapariga”. O verbo “tener” (ter) é muito usado para falar da família: “tengo trés moços i ua moça” (tenho três filhos e uma filha).',
      grammar_why:
        'O verbo “tener” (ter) muda bastante: “tengo” (eu tenho), “tenes” (tu tens), “ten” (ele/ela tem), “tenemos”, “teneis”, “ténen”. O adjetivo concorda em gênero: “buono” (bom) vira “buona” no feminino.',
      grammar_examples: [
        ['Tengo un armano i ua armana.', 'Tenho um irmão e uma irmã.'],
        ['La mie casa ye pequeinha.', 'A minha casa é pequena.'],
        ['L pan ye buono.', 'O pão é bom.'],
['Mie mai ye Rosa.', 'Minha mãe é Rosa.'],
      ],
      character_guide: [
        ['mie / miu', 'minha / meu', 'mie mai (minha mãe), miu pai (meu pai)'],
        ['l / la', 'o / a (artigo definido)', 'l pan (o pão), la casa (a casa)'],
      ],
    },
    lessons: [
      {
        id: 'mwl-u2-l1',
        title: 'La mie family',
        kind: 'licao',
        words: ['pai', 'mai', 'armano', 'armana', 'tener', 'moço'],
        cloze: [
          { sentence: 'Mie ___ ye Rosa.', answer: 'mai', options: ['mai', 'pai', 'armana'], translation: 'Minha mãe é Rosa.' },
          { sentence: 'Eu ___ un armano.', answer: 'tengo', options: ['tengo', 'sou', 'ye'], translation: 'Eu tenho um irmão.' },
          { sentence: 'Miu ___ ye de Miranda.', answer: 'pai', options: ['pai', 'armana', 'moça'], translation: 'Meu pai é de Miranda.' },
        ],
        voice: {
          bot: 'Tenes armanos?',
          botTranslation: 'Você tem irmãos?',
          expected: ['Si, tengo un armano i ua armana.', 'tengo', 'armano', 'armana'],
          hint: 'Responda com “Si, tengo…” ou “Nó, nun tengo”.',
        },
        communityPrompt: 'Descreva a sua família em mirandês: quantos irmãos (armanos) e irmãs (armanas) você tem.',
      },
      {
        id: 'mwl-u2-l2',
        title: 'An casa',
        kind: 'licao',
        words: ['casa', 'pan', 'auga', 'queiso', 'lheite', 'buono'],
        cloze: [
          { sentence: 'La mie ___ ye pequeinha.', answer: 'casa', options: ['casa', 'auga', 'pan'], translation: 'A minha casa é pequena.' },
          { sentence: 'Tengo ___ i queiso.', answer: 'pan', options: ['pan', 'auga', 'lheite'], translation: 'Tenho pão e queijo.' },
          { sentence: 'L lheite ye ___.', answer: 'buono', options: ['buono', 'grande', 'azul'], translation: 'O leite é bom.' },
        ],
        voice: {
          bot: 'Que tenes na casa?',
          botTranslation: 'O que você tem em casa?',
          expected: ['Tengo pan i queiso.', 'tengo', 'pan', 'queiso'],
          hint: 'Diga o que tem com “Tengo…”.',
        },
        communityPrompt: 'Escreva o que tem na sua casa para comer e beber, usando “Tengo…”.',
      },
      {
        id: 'mwl-u2-l3',
        title: 'Preba: family i casa',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Tenes armanos? Cumo ye la tua casa?',
          botTranslation: 'Você tem irmãos? Como é a sua casa?',
          expected: ['Tengo ua armana i la mie casa ye pequeinha.', 'tengo', 'casa'],
          hint: 'Diga quem você tem na família com “tengo…” e como é a casa.',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “tengo”, “sou” e “ye”.',
      },
    ],
  },
];
