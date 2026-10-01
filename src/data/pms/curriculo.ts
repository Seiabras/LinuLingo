import type { UnitSeed } from '../types';

/**
 * Trilha do piemontês: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_PMS: UnitSeed[] = [
  {
    id: 'pms-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Cerea! Ij prim pass',
    emoji: '👋',
    card: {
      id: 'pms-c1',
      title: 'Uma língua galo-itálica de Turim',
      emoji: '🏔️',
      history:
        'O piemontês (piemontèis) é falado no Piemonte, noroeste da Itália, ao redor de Turim. É classificado como língua galo-itálica, diferente do italiano padrão — teve até a sua própria tradição literária, desde o século XVIII — e a UNESCO o lista como língua vulnerável. Foi a língua da corte na época em que Turim era a capital do Reino da Sardenha-Piemonte, que depois unificou a Itália; apesar disso, hoje tem cada vez menos falantes jovens. Aqui se usa a grafia piemontese moderna, a norma literária padrão baseada na variedade de Turim.',
      culture_tip:
        '“Cerea” é uma saudação informal usada a qualquer hora do dia. Para agradecer, “mersi”; para se despedir, “arvëdse”. Com desconhecidos e em situações formais, usa-se “voiàutri” em vez de “ti”.',
      grammar_why:
        'O piemontês tem um traço único entre as línguas românicas: o pronome verbal obrigatório. Além do pronome pessoal (mi, ti, chiel…), quase todo verbo conjugado leva um segundo pronome colado nele — “i”, “it”, “a” — mesmo quando o pronome pessoal já apareceu: “mi i son” (eu sou), não só “mi son”.',
      grammar_examples: [
        ['Cerea! Mi i son Ana.', 'Oi! Eu sou a Ana.'],
        ['Coma it ciame-to?', 'Como você se chama?'],
        ['Chiel a l’é ëd Turin.', 'Ele é de Turim.'],
        ['Bin, mersi! E ti?', 'Bem, obrigado! E você?'],
      ],
      character_guide: [
        ['ë', 'uma vogal bem curta e fraca, quase engolida', 'ëdcò (também), vënner (sexta-feira)'],
        ['eu', 'um ditongo fechado, sem equivalente exato em português', 'neuit (noite), eut (oito)'],
        ['j', 'som de “i” consoante, como em “mais” dito rápido', 'ij (os, artigo plural), fija (filha)'],
        ['ò', 'um “o” bem aberto', 'nò (não), còsa (o que)'],
        ['-to / -ti', 'terminação de pergunta colada no verbo', 'ciame-to? (você se chama?), stas-to? (você está?)'],
      ],
    },
    lessons: [
      {
        id: 'pms-u1-l1',
        title: 'Cerea, mersi, arvëdse!',
        kind: 'licao',
        words: ['cerea', 'bondì', 'bon-a sèira', 'bon-a neuit', 'arvëdse', 'mersi'],
        cloze: [
          { sentence: '___, Ana! Coma stas-to?', answer: 'Cerea', options: ['Cerea', 'Arvëdse', 'Mersi'], translation: 'Oi, Ana! Como vai?' },
          { sentence: 'A l’é neuit: ___!', answer: 'bon-a neuit', options: ['bon-a neuit', 'bondì', 'mersi'], translation: 'É noite: boa noite!' },
          { sentence: '___ tant!', answer: 'Mersi', options: ['Mersi', 'Cerea', 'Arvëdse'], translation: 'Muito obrigado!' },
        ],
        voice: {
          bot: 'Cerea! Coma stas-to?',
          botTranslation: 'Oi! Como vai?',
          expected: ['Bin, mersi! E ti?', 'bin', 'mersi'],
          hint: 'Responda que vai bem e devolva a pergunta: “Bin, mersi! E ti?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em piemontês: um de manhã (“Bondì…”), um à noite (“Bon-a sèira…”) e uma despedida (“Arvëdse”).',
      },
      {
        id: 'pms-u1-l2',
        title: 'Mi, ti, chiel, chila',
        kind: 'licao',
        words: ['mi', 'ti', 'chiel', 'chila', 'avèj nòm', 'nòm'],
        cloze: [
          { sentence: '___ i l’hai nòm Sara.', answer: 'Mi', options: ['Mi', 'Ti', 'Chiel'], translation: 'Eu me chamo Sara.' },
          { sentence: 'Coma it ___-to?', answer: 'ciame', options: ['ciame', 'ses', 'l’has'], translation: 'Como você se chama?' },
          { sentence: '___ a l’é ëd Turin.', answer: 'Chiel', options: ['Chiel', 'Mi', 'Ti'], translation: 'Ele é de Turim.' },
        ],
        voice: {
          bot: 'Cerea! Coma it ciame-to?',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['I l’hai nòm Ana. E ti?', 'i l’hai nòm', 'e ti'],
          hint: 'Diga o seu nome com “I l’hai nòm…” e devolva a pergunta com “E ti?”.',
        },
        communityPrompt: 'Apresente-se em piemontês: diga o seu nome com “I l’hai nòm…” e a sua cidade com “I son ëd…”.',
      },
      {
        id: 'pms-u1-l3',
        title: 'Preuva: ij prim pass',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Cerea! I l’hai nòm Gion. Coma it ciame-to e da andova ses-to?',
          botTranslation: 'Oi! Eu me chamo Gion. Como você se chama e de onde você é?',
          expected: ['Cerea! I l’hai nòm Lucia e i son ëd San Pàul.', 'i l’hai nòm', 'i son ëd', 'cerea'],
          hint: 'Devolva o cumprimento (“Cerea!”), diga o nome com “I l’hai nòm…” e a cidade com “I son ëd…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “I l’hai nòm…”, cidade com “I son ëd…” e uma despedida.',
      },
    ],
  },
  {
    id: 'pms-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'La famija e la ca',
    emoji: '👪',
    card: {
      id: 'pms-c2',
      title: 'O verbo avèj e a negação com nen',
      emoji: '🧭',
      history:
        'O piemontês é dividido em variedades do oeste e do leste, com algumas diferenças de som — por exemplo, “leite” é “làit” no oeste (a variedade usada aqui) e soa diferente no leste. Por séculos foi a língua do dia a dia de uma região rica em comércio e agricultura, com bastante contato com o francês, do outro lado dos Alpes.',
      culture_tip:
        'Pan e formagg (pão e queijo) são a base simples de muitas refeições piemontesas; um bom vin (vinho) da região, como o Barolo, é motivo de orgulho local.',
      grammar_why:
        'O verbo ter é “avèj”, usado também na expressão “avèj nòm” (ter nome, chamar-se). Para negar, o piemontês coloca “nen” DEPOIS do verbo — o contrário do português: “i sai nen” é “eu não sei”, não “eu nen sei”.',
      grammar_examples: [
        ['I l’hai doi frej.', 'Tenho dois irmãos.'],
        ['Mia ca a l’é cita.', 'A minha casa é pequena.'],
        ['Ël làit a l’é bianch.', 'O leite é branco.'],
        ['I sai nen.', 'Eu não sei.'],
      ],
      character_guide: [
        ['nen', 'a palavra da negação, sempre depois do verbo', 'i sai nen (não sei), i son nen (não sou/estou)'],
        ['a l’é / a l’ha', 'o pronome verbal “a” se funde com “l’” antes de vogal', 'chiel a l’é (ele é), chila a l’ha (ela tem)'],
      ],
    },
    lessons: [
      {
        id: 'pms-u2-l1',
        title: 'Mia famija',
        kind: 'licao',
        words: ['famija', 'mare', 'pare', 'frel', 'seur', 'avèj'],
        cloze: [
          { sentence: 'Mia ___ a l’ha nòm Rosa.', answer: 'mare', options: ['mare', 'pare', 'frel'], translation: 'A minha mãe se chama Rosa.' },
          { sentence: 'I ___ un frel.', answer: 'l’hai', options: ['l’hai', 'son', 'von'], translation: 'Eu tenho um irmão.' },
          { sentence: 'Mè ___ a l’é ëd Turin.', answer: 'pare', options: ['pare', 'seur', 'mare'], translation: 'O meu pai é de Turim.' },
        ],
        voice: {
          bot: 'L’has-to frej o seure?',
          botTranslation: 'Você tem irmãos ou irmãs?',
          expected: ['Sì, i l’hai un frel e na seur.', 'i l’hai', 'frel', 'seur'],
          hint: 'Responda com “Sì, i l’hai…” ou “Nò, i l’hai nen frej”.',
        },
        communityPrompt: 'Descreva a sua família em piemontês: quantos irmãos (frej) e irmãs (seure) você tem e como se chamam os seus pais.',
      },
      {
        id: 'pms-u2-l2',
        title: 'An ca',
        kind: 'licao',
        words: ['ca', 'eva', 'pan', 'làit', 'formagg', 'piasej'],
        cloze: [
          { sentence: 'Mia ___ a l’é cita.', answer: 'ca', options: ['ca', 'eva', 'pan'], translation: 'A minha casa é pequena.' },
          { sentence: 'I bèivo ___.', answer: 'eva', options: ['eva', 'pan', 'formagg'], translation: 'Eu bebo água.' },
          { sentence: 'I mangio pan e ___.', answer: 'formagg', options: ['formagg', 'eva', 'làit'], translation: 'Eu como pão e queijo.' },
        ],
        voice: {
          bot: 'Còsa mange-to?',
          botTranslation: 'O que você come?',
          expected: ['I mangio pan e formagg.', 'i mangio', 'pan', 'formagg'],
          hint: 'Diga o que come com “I mangio…”.',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: “I mangio…” e “I bèivo…”.',
      },
      {
        id: 'pms-u2-l3',
        title: 'Preuva: famija e ca',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Conta-mi ëd toa famija: l’has-to frej o seure?',
          botTranslation: 'Conte da sua família: você tem irmãos ou irmãs?',
          expected: ['Sì, i l’hai na seur. A l’ha nòm Maria.', 'i l’hai', 'a l’ha nòm'],
          hint: 'Diga quantos irmãos tem (“i l’hai…”) e o nome deles (“a l’ha nòm…”).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “i l’hai”, “a l’ha nòm” e “a l’é”.',
      },
    ],
  },
];
