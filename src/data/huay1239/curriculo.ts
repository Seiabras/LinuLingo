import type { UnitSeed } from '../types';

/**
 * Trilha do quéchua de Áncash: por enquanto só as duas unidades do nível A1 (curso incompleto — ver
 * `incomplete` em index.ts). Fontes no cabeçalho de vocabulario.ts: [WIKI], [OMNI].
 *
 * As frases são do [WIKI] (o “breve vocabulário” e os exemplos do verbo “ser” implícito do «Quechua de
 * Huaylas»: “Imanawllataq kaykanki?”, “Yamayllam kaykaa”, “Pitaq? — Nuqam”, “Imatan? — Allqum”,
 * “Allqupaqku? — Allqupaqmi”; e os exemplos de derivação e de enclíticos da «Gramática del quechua
 * ancashino»), com a tradução deles. Nenhuma frase com gramática nova foi montada por nós.
 */
export const UNITS_HUAY1239: UnitSeed[] = [
  {
    id: 'huay1239-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Yaw! Imanawllataq kaykanki?',
    emoji: '👋',
    card: {
      id: 'huay1239-c1',
      title: 'O quéchua da Cordilheira Branca',
      emoji: '🏔️',
      // [WIKI] «Quechua ancashino» (cerca de um milhão de falantes; ramo Quéchua I; Áncash e o oeste de
      // Huánuco; oficial onde predomina, pela Constituição de 1993; o alfabeto de 1975, as vogais e e o
      // tiradas em 1985, o ⟨ćh⟩ de 2014; o “s” que vira “h” em Huaylas: wasi → wahi → wai; o “q” só
      // oclusivo no Callejón de Huaylas).
      history:
        'O quéchua de Áncash é falado na serra do norte do Peru, no departamento de Áncash e no oeste de Huánuco, por cerca de um milhão de pessoas. É do ramo Quéchua I, o quéchua central, diferente do quéchua do sul de Cusco e da Bolívia, e pela Constituição peruana é oficial onde predomina, ao lado do espanhol. Ele tem um jeito próprio de soar: no Callejón de Huaylas, aos pés da Cordilheira Branca, o antigo “s” do começo das sílabas virou “h” ou até sumiu — a palavra “wasi” (casa) virou “wahi” e depois “wai”. O alfabeto oficial veio em 1975, e em 1985 ficou só com três vogais: a, i, u, e as longas, dobradas.',
      culture_tip:
        'Para chamar alguém, diz-se “Yaw!”, que também serve de “olá”. E quando batem à porta e perguntam “Pitaq?” (quem é?), a resposta é “Nuqam!” (sou eu) — ou, com mais respeito, “Nuqallaa”.',
      grammar_why:
        'O quéchua de Áncash nem sempre precisa do verbo “ser”: basta o final -m (ou -mi) na palavra. “Nuqam” é “sou eu”; “Allqum” é “é um cachorro”; “Yamayllam kaykaa” é “estou bem”. E as vogais longas mudam a pessoa do verbo: “kaykaa” é “eu estou”, e “kaykanki”, “você está”.',
      grammar_examples: [
        ['Pitaq? — Nuqam.', 'Quem é? — Sou eu.'],
        ['Imatan? — Allqum.', 'O que é? — É um cachorro.'],
        ['Yamayllam kaykaa.', 'Estou bem.'],
      ],
      character_guide: [
        ['aa, ii, uu', 'vogal dobrada é vogal longa', 'kaykaa (eu estou)'],
        ['q', 'um “k” do fundo da garganta (fora de Huaylas, um som raspado)', 'qam (você)'],
        ['ts', 'um “t” e um “s” juntos', 'tsay (isso)'],
        ['sh', 'o “ch” do português, de “chá”', 'shunqu (coração)'],
        ['ll', 'o “lh” do português', 'llampu (macio)'],
        ['ñ', 'o “nh” do português', 'ñawi (olho)'],
      ],
    },
    lessons: [
      {
        id: 'huay1239-u1-l1',
        title: 'Yaw!',
        kind: 'licao',
        words: ['Yaw', 'Imanawllataq kaykanki?', 'Yamayllaku kaykanki?', 'Yamayllam kaykaa', 'aw', 'mana'],
        cloze: [
          { sentence: '___ kaykaa.', answer: 'Yamayllam', options: ['Yamayllam', 'Imanawllataq', 'Yaw'], translation: 'Estou bem.' },
          { sentence: 'Imanawllataq ___?', answer: 'kaykanki', options: ['kaykanki', 'kaykaa', 'nuqam'], translation: 'Como você está?' },
          { sentence: 'Yamayllaku ___?', answer: 'kaykanki', options: ['kaykanki', 'allqum', 'awmi'], translation: 'Você está bem?' },
        ],
        voice: {
          bot: 'Imanawllataq kaykanki?',
          botTranslation: 'Como você está?',
          expected: ['Yamayllam kaykaa.', 'Yamayllam kaykaa', 'yamayllam kaykaa'],
          hint: 'Diga que está bem: “Yamayllam kaykaa”.',
        },
        communityPrompt: 'Escreva um cumprimento (“Yaw!”), a pergunta “Imanawllataq kaykanki?” e a resposta.',
      },
      {
        id: 'huay1239-u1-l2',
        title: 'Pitaq? — Nuqam',
        kind: 'licao',
        words: ['Pitaq?', 'Nuqallaa', 'nuqa', 'qam', 'pay', 'nuqantsik'],
        cloze: [
          { sentence: 'Pitaq? — ___.', answer: 'Nuqam', options: ['Nuqam', 'Allqum', 'Yaw'], translation: 'Quem é? — Sou eu.' },
          { sentence: '___.', answer: 'Qammi', options: ['Qammi', 'Nuqam', 'Paytsuraq'], translation: 'É você.' },
          { sentence: 'Manam ___tsu.', answer: 'payta', options: ['payta', 'nuqam', 'allqu'], translation: 'Não é a ele.' },
        ],
        voice: {
          bot: 'Pitaq?',
          botTranslation: 'Quem é?',
          expected: ['Nuqam.', 'Nuqam', 'nuqam', 'Nuqallaa'],
          hint: 'Diga que é você: “Nuqam!” ou, com respeito, “Nuqallaa”.',
        },
        communityPrompt: 'Escreva o diálogo da porta: “Pitaq?” — “Nuqam!”.',
      },
      {
        id: 'huay1239-u1-l3',
        title: 'Prova: Yaw!',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Yamayllaku kaykanki?',
          botTranslation: 'Você está bem?',
          expected: ['Yamayllam kaykaa.', 'Yamayllam kaykaa', 'Yamayllam', 'Awmi'],
          hint: 'Responda que sim: “Yamayllam kaykaa”.',
        },
        communityPrompt: 'Escreva um encontro: “Yaw!”, “Imanawllataq kaykanki?”, “Yamayllam kaykaa”.',
      },
    ],
  },
  {
    id: 'huay1239-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Imatan? — Allqum',
    emoji: '🐕',
    card: {
      id: 'huay1239-c2',
      title: 'Huaylas e Conchucos',
      emoji: '🗻',
      // [WIKI] «Clasificación del quechua ancashino» (os dois dialetos; aw > oo, ay > ee, uy > ii em
      // Huaylas: chawpi > choopi, tsay > tsee, mikuy > mikii; o -ski de Conchucos: mikuskin “acaba de
      // comer”; o “q” que some no fim da palavra no sul de Conchucos: mikushaq > mikushaa “comerei”).
      history:
        'O quéchua de Áncash tem dois grandes dialetos, separados pela Cordilheira Branca: o de Huaylas, a oeste, e o de Conchucos, a leste. Em Huaylas, os ditongos viram vogais longas: “chawpi” (meio) soa “choopi”, “tsay” (isso) soa “tsee” e “mikuy” (comer) soa “mikii”. Conchucos tem um final que Huaylas não usa, o -ski: “mikuskin” é “acaba de comer”. E no sul de Conchucos o “q” do fim da palavra some e alonga a vogal: “mikushaq” (comerei) vira “mikushaa”.',
      culture_tip:
        'Quando faz frio na serra, diz-se “Alalaw!”. Quando algo é feio, “Atataw!”. E quando se está cansado, “Ananaw!”.',
      grammar_why:
        'O quéchua cola finais nas palavras para mudar o sentido. Com -yuq, “quem tem”: “waakayuq” é o dono de vacas, e “payqa allquyuq”, ele tem cachorro. Com -lla, “só”: “allqulla”, só o cachorro. E com -paq, “para”: “Allqupaqku?”, é para o cachorro? — “Allqupaqmi”, é para o cachorro, sim.',
      grammar_examples: [
        ['Payqa allquyuq.', 'Ele tem cachorro.'],
        ['Allqupaqku? — Allqupaqmi.', 'É para o cachorro? — É para o cachorro, sim.'],
        ['Allqunwan.', 'Com o cachorro dele.'],
      ],
      character_guide: [
        ['-yuq', 'quem tem', 'waakayuq (dono de vacas)'],
        ['-lla', 'só, apenas', 'allqulla (só o cachorro)'],
        ['-paq', 'para', 'allqupaq (para o cachorro)'],
        ['-chaw', 'em, no, na', 'wayichaw (na casa)'],
      ],
    },
    lessons: [
      {
        id: 'huay1239-u2-l1',
        title: 'Allqu, waaka, wayi',
        kind: 'licao',
        words: ['allqu', 'waaka', 'wayi', 'hirka', 'yaku', 'rumi'],
        cloze: [
          { sentence: 'Imatan? — ___.', answer: 'Allqum', options: ['Allqum', 'Nuqam', 'Qammi'], translation: 'O que é? — É um cachorro.' },
          { sentence: 'Payqa ___.', answer: 'allquyuq', options: ['allquyuq', 'allqulla', 'allqum'], translation: 'Ele tem cachorro.' },
          { sentence: '___mi kaykaa.', answer: 'Hirkachaw', options: ['Hirkachaw', 'Wayi', 'Allqu'], translation: 'Estou no morro.' },
        ],
        voice: {
          bot: 'Imatan?',
          botTranslation: 'O que é?',
          expected: ['Allqum.', 'Allqum', 'allqum'],
          hint: 'Diga que é um cachorro: “Allqum”.',
        },
        communityPrompt: 'Escreva o que você vê, com o -m: “Allqum”, “Rumim”…',
      },
      {
        id: 'huay1239-u2-l2',
        title: 'Alalaw!',
        kind: 'licao',
        words: ['Alalaw!', 'Atataw!', 'Ananaw!', 'mikuy', 'yaykuy', 'waaka'],
        cloze: [
          { sentence: 'Allqupaqku? — ___.', answer: 'Allqupaqmi', options: ['Allqupaqmi', 'Allqum', 'Nuqam'], translation: 'É para o cachorro? — É para o cachorro, sim.' },
          { sentence: '___!', answer: 'Alalaw', options: ['Alalaw', 'Ananaw', 'Atataw'], translation: 'Que frio!' },
          { sentence: 'Yaykurqan___.', answer: 'mi', options: ['mi', 'tsu', 'ku'], translation: 'Ele entrou (eu vi).' },
        ],
        voice: {
          bot: 'Alalaw!',
          botTranslation: 'Que frio!',
          expected: ['Aw!', 'Aw', 'aw', 'Awmi', 'Ananaw'],
          hint: 'Concorde: “Awmi!” (sim).',
        },
        communityPrompt: 'Escreva o que você diz quando faz frio, quando algo é feio e quando está cansado.',
      },
      {
        id: 'huay1239-u2-l3',
        title: 'Prova: Imatan? — Allqum',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ayka?',
          botTranslation: 'Quanto?',
          expected: ['Pitsqa.', 'Pitsqa', 'pitsqa', 'Kima', 'Ishkay', 'Huk', 'Chunka'],
          hint: 'Responda com um número: “Pitsqa” (cinco), “Kima” (três)…',
        },
        communityPrompt: 'Conte de um a cinco no quéchua de Áncash: “huk, ishkay, kima, chusku, pitsqa”.',
      },
    ],
  },
];
