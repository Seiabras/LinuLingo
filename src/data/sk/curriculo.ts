import type { UnitSeed } from '../types';

/**
 * Trilha do eslovaco: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_SK: UnitSeed[] = [
  {
    id: 'sk-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Ahoj! Prvé kroky',
    emoji: '👋',
    card: {
      id: 'sk-c1',
      title: 'Uma língua no coração da Europa',
      emoji: '🇸🇰',
      history:
        'O eslovaco é uma língua eslava ocidental, tão próxima do tcheco que os dois povos se entendem sem estudar. Por muito tempo, na Eslováquia se escreveu em latim, em tcheco ou em húngaro. A primeira norma escrita do eslovaco foi proposta pelo padre Anton Bernolák em 1787; a norma que venceu foi a de Ľudovít Štúr, de 1843, baseada nos dialetos do centro do país e depois reformada. Hoje o eslovaco é a língua oficial da Eslováquia e uma das línguas oficiais da União Europeia.',
      culture_tip:
        'Ao entrar numa loja ou num elevador, diga «Dobrý deň». «Ahoj» serve para oi e para tchau entre amigos. Com desconhecidos, usa-se «vy» com o verbo no plural, mesmo falando com uma pessoa só: «Ako sa máte?» (Como vai o senhor?).',
      grammar_why:
        'O eslovaco não tem artigos: «pes» é «o cachorro» ou «um cachorro». A terminação do verbo já mostra quem faz a ação, então o pronome costuma cair: «som» já é «eu sou». O nome se diz com um verbo reflexivo, como em português: «volám sa Anna» (eu me chamo Anna).',
      grammar_examples: [
        ['Ahoj! Volám sa Anna.', 'Oi! Eu me chamo Anna.'],
        ['Ako sa voláš?', 'Como você se chama?'],
        ['On je z Košíc, ona je z Bratislavy.', 'Ele é de Košice, ela é de Bratislava.'],
        ['Dobre, ďakujem. A ty?', 'Bem, obrigado. E você?'],
      ],
      character_guide: [
        ['č / š / ž', '«tch» de «tchau» / «ch» de «chá» / «j» de «já»', 'čierny, šesť, žena'],
        ['ď / ť / ň / ľ', 'versões macias de d, t, n, l («dj», «tj», «nh», «lh»)', 'ďakujem, päť, deň, veľmi'],
        ['c', '«ts» de «tsunami»', 'otec (pai)'],
        ['ch', '«rr» aspirado, como o «r» de «rato» no Rio', 'chlieb (pão)'],
        ['ä', 'no padrão atual, soa como «é»', 'päť (cinco)'],
        ['ô', '«uo», um ditongo', 'môj (meu)'],
        ['ia / ie / iu', 'ditongos, ditos numa sílaba só', 'piatok, chlieb'],
        ['á, é, í, ó, ú, ý', 'o acento agudo marca vogal longa, não a tônica', 'áno, kamarát'],
        ['acento', 'a tônica cai sempre na primeira sílaba', 'ĎA-ku-jem, KA-ma-rát'],
      ],
    },
    lessons: [
      {
        id: 'sk-u1-l1',
        title: 'Ahoj, ďakujem, dovidenia!',
        kind: 'licao',
        words: ['ahoj', 'dobrý deň', 'dobrý večer', 'dobrú noc', 'dovidenia', 'ďakujem'],
        cloze: [
          { sentence: '___, Zuzka! Ako sa máš?', answer: 'Ahoj', options: ['Ahoj', 'Dobrú noc', 'Ďakujem'], translation: 'Oi, Zuzka! Como vai?' },
          { sentence: 'Je neskoro. ___!', answer: 'Dobrú noc', options: ['Dobrú noc', 'Dobrý deň', 'Ďakujem'], translation: 'Já é tarde. Boa noite!' },
          { sentence: '___ veľmi pekne!', answer: 'Ďakujem', options: ['Ďakujem', 'Ahoj', 'Dovidenia'], translation: 'Muito obrigado!' },
        ],
        voice: {
          bot: 'Ahoj! Ako sa máš?',
          botTranslation: 'Oi! Como vai?',
          expected: ['Dobre, ďakujem! A ty?', 'dobre', 'ďakujem'],
          hint: 'Responda que vai bem e devolva a pergunta: «Dobre, ďakujem! A ty?».',
        },
        communityPrompt: 'Escreva três cumprimentos em eslovaco: um de dia («Dobrý deň…»), um à noite («Dobrý večer…») e uma despedida («Dovidenia» ou «Dobrú noc»).',
      },
      {
        id: 'sk-u1-l2',
        title: 'Ja, ty, on, ona',
        kind: 'licao',
        words: ['ja', 'ty', 'on', 'ona', 'volať sa', 'meno'],
        cloze: [
          { sentence: '___ sa volám Eva.', answer: 'Ja', options: ['Ja', 'Ty', 'On'], translation: 'Eu me chamo Eva.' },
          { sentence: 'A ___? Ako sa voláš?', answer: 'ty', options: ['ty', 'on', 'ona'], translation: 'E você? Como você se chama?' },
          { sentence: '___ je z Košíc. To je môj brat.', answer: 'On', options: ['On', 'Ona', 'Ja'], translation: 'Ele é de Košice. É o meu irmão.' },
        ],
        voice: {
          bot: 'Ahoj! Ako sa voláš?',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['Volám sa Ana. A ty?', 'volám sa', 'a ty'],
          hint: 'Diga o seu nome com «Volám sa…» e devolva a pergunta com «A ty?».',
        },
        communityPrompt: 'Apresente-se em eslovaco: diga o seu nome com «Volám sa…» e pergunte o nome de alguém com «Ako sa voláš?».',
      },
      {
        id: 'sk-u1-l3',
        title: 'Test: prvé kroky',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ahoj! Volám sa Peter. Ako sa voláš a odkiaľ si?',
          botTranslation: 'Oi! Eu me chamo Peter. Como você se chama e de onde você é?',
          expected: ['Ahoj! Volám sa Lucia a som zo São Paula.', 'volám sa', 'som z', 'ahoj'],
          hint: 'Devolva o cumprimento («Ahoj!»), diga o nome com «Volám sa…» e a cidade com «Som z…».',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com «Volám sa…», cidade com «Som z…» e uma despedida.',
      },
    ],
  },
  {
    id: 'sk-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Rodina a domov',
    emoji: '👪',
    card: {
      id: 'sk-c2',
      title: 'Três gêneros, «môj / moja / moje» e o «ne-»',
      emoji: '🧭',
      history:
        'O eslovaco tem seis casos: a terminação do substantivo muda conforme a função na frase. Você já viu isso sem perceber: «som z Bratislavy» (sou de Bratislava) usa o genitivo de «Bratislava», e «kávu, prosím» usa o acusativo de «káva». Uma regra só do eslovaco é a «lei do ritmo»: duas sílabas longas seguidas costumam não aparecer, e por isso se diz «krásne mesto», e não «krásné».',
      culture_tip:
        'Na Eslováquia, muita gente comemora o «meniny», o dia do nome: o calendário traz um nome para cada dia do ano, e quem tem aquele nome recebe parabéns quase como num aniversário.',
      grammar_why:
        'Os substantivos são masculinos, femininos ou neutros, e a terminação costuma mostrar qual: consoante → masculino (dom, brat), -a → feminino (mama, voda), -o → neutro (mlieko, víno). O possessivo concorda: «môj brat», «moja sestra», «moje mlieko». Para negar, o «ne-» se escreve grudado no verbo — «viem» (sei) → «neviem» (não sei) —, mas o verbo «byť» é exceção: «nie som» (não sou), separado.',
      grammar_examples: [
        ['Moja rodina je veľká.', 'A minha família é grande.'],
        ['Mám brata a sestru.', 'Tenho um irmão e uma irmã.'],
        ['Mlieko je biele.', 'O leite é branco.'],
        ['Neviem.', 'Eu não sei.'],
      ],
      character_guide: [
        ['-a → -u', 'depois de «mám» (tenho), a palavra feminina muda: é o acusativo', 'sestra → mám sestru'],
        ['ne- / nie', 'a negação vai junto do verbo, menos com «byť»', 'nemám (não tenho), nie som (não sou)'],
      ],
    },
    lessons: [
      {
        id: 'sk-u2-l1',
        title: 'Moja rodina',
        kind: 'licao',
        words: ['rodina', 'mama', 'otec', 'brat', 'sestra', 'mať'],
        cloze: [
          { sentence: 'Moja ___ sa volá Eva.', answer: 'mama', options: ['mama', 'otec', 'brat'], translation: 'A minha mãe se chama Eva.' },
          { sentence: 'Ja ___ brata a sestru.', answer: 'mám', options: ['mám', 'som', 'idem'], translation: 'Eu tenho um irmão e uma irmã.' },
          { sentence: 'Môj ___ je z Košíc.', answer: 'otec', options: ['otec', 'sestra', 'mama'], translation: 'O meu pai é de Košice.' },
        ],
        voice: {
          bot: 'Máš brata alebo sestru?',
          botTranslation: 'Você tem irmão ou irmã?',
          expected: ['Áno, mám brata a sestru.', 'mám', 'brata', 'sestru'],
          hint: 'Responda com «Áno, mám…» ou «Nie, nemám…».',
        },
        communityPrompt: 'Descreva a sua família em eslovaco: se você tem irmão (brat) ou irmã (sestra) e como se chamam os seus pais («Moja mama sa volá…»).',
      },
      {
        id: 'sk-u2-l2',
        title: 'Doma',
        kind: 'licao',
        words: ['dom', 'voda', 'chlieb', 'mlieko', 'syr', 'mať rád'],
        cloze: [
          { sentence: 'Môj ___ je malý.', answer: 'dom', options: ['dom', 'voda', 'mlieko'], translation: 'A minha casa é pequena.' },
          { sentence: 'Pijem ___.', answer: 'vodu', options: ['vodu', 'chlieb', 'syr'], translation: 'Eu bebo água.' },
          { sentence: 'Jem chlieb a ___.', answer: 'syr', options: ['syr', 'vodu', 'mlieko'], translation: 'Eu como pão e queijo.' },
        ],
        voice: {
          bot: 'Čo ješ na raňajky?',
          botTranslation: 'O que você come no café da manhã?',
          expected: ['Jem chlieb a syr.', 'jem', 'chlieb', 'syr'],
          hint: 'Diga o que come com «Jem…».',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: «Jem…» e «Pijem…».',
      },
      {
        id: 'sk-u2-l3',
        title: 'Test: rodina a domov',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Porozprávaj o rodine: máš brata alebo sestru?',
          botTranslation: 'Conte da sua família: você tem irmão ou irmã?',
          expected: ['Áno, mám sestru. Volá sa Mária.', 'mám', 'volá sa'],
          hint: 'Diga se tem irmãos («mám…») e o nome deles («volá sa…»).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando «mám», «volá sa» e «je».',
      },
    ],
  },
];
