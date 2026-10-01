import type { UnitSeed } from '../types';

/**
 * Trilha do friulano: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_FUR: UnitSeed[] = [
  {
    id: 'fur-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Mandi! I prins pas',
    emoji: '👋',
    card: {
      id: 'fur-c1',
      title: 'A língua do Friul',
      emoji: '🏔️',
      history:
        'O friulano (furlan) nasceu do latim falado em Aquileia, uma das grandes cidades romanas do norte da Itália, e hoje é falado no Friul, entre os Alpes e o mar Adriático, no nordeste da Itália (províncias de Udine, Pordenone e Gorizia). É uma língua própria, não um dialeto do italiano: a lei italiana de 1999 sobre as minorias linguísticas a reconhece, e a Região Friuli-Venezia Giulia tem uma agência só para ela, a ARLeF. Muitos linguistas o colocam, com o romanche e o ladino, no grupo reto-românico.',
      culture_tip:
        '“Mandi!” é a palavra mais friulana que existe: serve para chegar e para ir embora, como o “tchau” brasileiro. “Bundì” vale para o dia e “buine sere” para a noite. Entre amigos se usa “tu”; com desconhecidos, “vô”, com o verbo no plural.',
      grammar_why:
        'O friulano usa, além do pronome, uma pequena palavra obrigatória antes do verbo, o “clítico de sujeito”: “jo o soi” (eu sou), “tu tu sês” (você é), “lui al è” (ele é), “jê e je” (ela é). Mesmo sem o pronome, o clítico fica: “o soi di Udin” (sou de Udine).',
      grammar_examples: [
        ['Mandi! O mi clami Ane.', 'Oi! Eu me chamo Ana.'],
        ['E tu, cemût ti clamistu?', 'E você, como se chama?'],
        ['Lui al è di Udin, jê e je di Pordenon.', 'Ele é de Udine, ela é de Pordenone.'],
        ['Ben, graciis. E tu?', 'Bem, obrigado. E você?'],
      ],
      character_guide: [
        ['cj', 'um “k” molhado, entre “k” e “tch”', 'cjase (casa), cjan (cachorro)'],
        ['gj', 'um “g” molhado, entre “g” e “dj”', 'gjat (gato)'],
        ['ç', 'como o “tch” de “tchau”', 'piçul (pequeno)'],
        ['â, ê, î, ô, û', 'o acento circunflexo marca vogal longa', 'sûr (irmã), vuê (hoje), cîl (céu)'],
        ['gn', 'como o “nh” do português', 'gnot (noite), agns (anos)'],
      ],
    },
    lessons: [
      {
        id: 'fur-u1-l1',
        title: 'Mandi, graciis!',
        kind: 'licao',
        words: ['mandi', 'bundì', 'buine sere', 'buine gnot', 'graciis', 'par plasê'],
        cloze: [
          { sentence: '___, Marie! Cemût stâstu?', answer: 'Mandi', options: ['Mandi', 'Graciis', 'Par plasê'], translation: 'Oi, Maria! Como vai você?' },
          { sentence: 'Al è tart: ___!', answer: 'buine gnot', options: ['buine gnot', 'bundì', 'graciis'], translation: 'Está tarde: boa noite!' },
          { sentence: 'Un cafè, ___.', answer: 'par plasê', options: ['par plasê', 'mandi', 'bundì'], translation: 'Um café, por favor.' },
        ],
        voice: {
          bot: 'Mandi! Cemût stâstu?',
          botTranslation: 'Oi! Como vai você?',
          expected: ['Ben, graciis! E tu?', 'ben', 'graciis'],
          hint: 'Responda que vai bem e devolva a pergunta: “Ben, graciis! E tu?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em friulano: um de manhã (“Bundì…”), um à noite (“Buine sere…”) e uma despedida (“Mandi”).',
      },
      {
        id: 'fur-u1-l2',
        title: 'Jo, tu, lui, jê',
        kind: 'licao',
        words: ['jo', 'tu', 'lui', 'jê', 'clamâsi', 'non'],
        cloze: [
          { sentence: '___ o mi clami Sare.', answer: 'Jo', options: ['Jo', 'Tu', 'Lui'], translation: 'Eu me chamo Sara.' },
          { sentence: 'E ___, cemût ti clamistu?', answer: 'tu', options: ['tu', 'lui', 'nô'], translation: 'E você, como se chama?' },
          { sentence: '___ al è di Udin.', answer: 'Lui', options: ['Lui', 'Jê', 'Jo'], translation: 'Ele é de Udine.' },
        ],
        voice: {
          bot: 'Mandi! Cemût ti clamistu?',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['O mi clami Ane. E tu?', 'o mi clami', 'e tu'],
          hint: 'Diga o seu nome com “O mi clami…” e devolva a pergunta com “E tu?”.',
        },
        communityPrompt: 'Apresente-se em friulano: diga o seu nome com “O mi clami…” e pergunte o nome de alguém com “Cemût ti clamistu?”.',
      },
      {
        id: 'fur-u1-l3',
        title: 'Prove: i prins pas',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Mandi! O mi clami Toni. E tu, cemût ti clamistu? Di dulà sêstu?',
          botTranslation: 'Oi! Eu me chamo Toni. E você, como se chama? De onde você é?',
          expected: ['Mandi! O mi clami Lucie e o soi di São Paulo.', 'o mi clami', 'o soi di', 'mandi'],
          hint: 'Devolva o cumprimento (“Mandi!”), diga o nome com “O mi clami…” e a cidade com “O soi di…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “O mi clami…”, cidade com “O soi di…” e “Mandi!” no fim.',
      },
    ],
  },
  {
    id: 'fur-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'La famee e la cjase',
    emoji: '👪',
    card: {
      id: 'fur-c2',
      title: 'Il, la, i, lis e o plural em -s',
      emoji: '🧭',
      history:
        'O friulano faz o plural com -s, como o português e o espanhol, e não com vogal, como o italiano: “fradi” → “fradis” (irmãos), “cjase” → “cjasis” (casas). É um dos traços que o separam do italiano falado ao lado e o aproximam das línguas românicas do oeste.',
      culture_tip:
        'O “frico”, feito de queijo montasio e batata, é o prato mais conhecido do Friul, e o “tai di vin” (a taça de vinho) acompanha a conversa nos bares das aldeias, as “ostariis”.',
      grammar_why:
        'O artigo definido é “il” (masculino) e “la” (feminino); no plural, “i” e “lis”. O possessivo vem com o artigo: “il gno amì” (o meu amigo), “la mê amie” (a minha amiga); com os nomes da família, o artigo cai: “gno pari” (meu pai), “mê mari” (minha mãe).',
      grammar_examples: [
        ['La mê famee e je grande.', 'A minha família é grande.'],
        ['O ai un fradi e une sûr.', 'Tenho um irmão e uma irmã.'],
        ['Gno pari al è di Gurize.', 'O meu pai é de Gorizia.'],
        ['Mi plâs une vore il formadi.', 'Eu gosto muito de queijo.'],
      ],
      character_guide: [
        ['-is', 'o plural dos femininos em -e', 'cjase → cjasis, amie → amiis'],
        ['al / e', 'os clíticos de “ele” e “ela”', 'al è (ele é), e je (ela é)'],
      ],
    },
    lessons: [
      {
        id: 'fur-u2-l1',
        title: 'La mê famee',
        kind: 'licao',
        words: ['famee', 'mari', 'pari', 'fradi', 'sûr', 'vê'],
        cloze: [
          { sentence: 'Mê ___ e je di Udin.', answer: 'mari', options: ['mari', 'pari', 'fradi'], translation: 'A minha mãe é de Udine.' },
          { sentence: 'O ___ un fradi.', answer: 'ai', options: ['ai', 'soi', 'voi'], translation: 'Eu tenho um irmão.' },
          { sentence: 'Gno ___ al è di Gurize.', answer: 'pari', options: ['pari', 'sûr', 'mari'], translation: 'O meu pai é de Gorizia.' },
        ],
        voice: {
          bot: 'Âstu fradis o sûrs?',
          botTranslation: 'Você tem irmãos ou irmãs?',
          expected: ['Sì, o ai un fradi e une sûr.', 'o ai', 'fradi', 'sûr'],
          hint: 'Responda com “Sì, o ai…” e diga quantos irmãos você tem.',
        },
        communityPrompt: 'Descreva a sua família em friulano: quantos irmãos (fradis) e irmãs (sûrs) você tem e de onde são os seus pais.',
      },
      {
        id: 'fur-u2-l2',
        title: 'A cjase',
        kind: 'licao',
        words: ['cjase', 'aghe', 'pan', 'lat', 'formadi', 'plasê'],
        cloze: [
          { sentence: 'La mê ___ e je piçule.', answer: 'cjase', options: ['cjase', 'aghe', 'pan'], translation: 'A minha casa é pequena.' },
          { sentence: 'O bêf ___.', answer: 'aghe', options: ['aghe', 'pan', 'formadi'], translation: 'Eu bebo água.' },
          { sentence: 'O mangji pan e ___.', answer: 'formadi', options: ['formadi', 'aghe', 'lat'], translation: 'Eu como pão e queijo.' },
        ],
        voice: {
          bot: 'Ce mangistu vuê?',
          botTranslation: 'O que você come hoje?',
          expected: ['O mangji pan e formadi.', 'o mangji', 'pan', 'formadi'],
          hint: 'Diga o que come com “O mangji…”.',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: “O mangji…” e “O bêf…”.',
      },
      {
        id: 'fur-u2-l3',
        title: 'Prove: la famee e la cjase',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Contimi de tô famee: âstu fradis o sûrs?',
          botTranslation: 'Me conte da sua família: você tem irmãos ou irmãs?',
          expected: ['Sì, o ai une sûr. E si clame Marie.', 'o ai', 'si clame'],
          hint: 'Diga quantos irmãos tem (“o ai…”) e como se chamam (“al si clame…”, “e si clame…”).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “o ai”, “si clame” e “al è / e je”.',
      },
    ],
  },
];
