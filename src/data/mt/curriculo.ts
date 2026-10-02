import type { UnitSeed } from '../types';

/**
 * Trilha do maltês — por enquanto só as duas unidades do nível A1 (pacote incompleto, ver
 * `incomplete` em index.ts). Frases de exemplo e diálogos usam só palavras e regras conferidas no
 * Wiktionary, na Wikipédia (inglês) e no Wikivoyage “Maltese phrasebook” — ver os comentários de
 * `vocabulario.ts`. Nenhuma frase usa um verbo “ser” no presente (sem fonte própria do maltês para
 * ele neste pacote): as frases são saudações, vocativos, objetos diretos ou usam o paradigma
 * verificado do verbo “ried” (querer).
 */
export const UNITS_MT: UnitSeed[] = [
  {
    id: 'mt-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Bonġu, kif inti?',
    emoji: '👋',
    card: {
      id: 'mt-c1',
      title: 'Uma língua semítica escrita em latim',
      emoji: '🇲🇹',
      history:
        'O maltês descende do árabe siciliano (sículo-árabe), falado no Emirado da Sicília entre os séculos IX e XIII. Depois da conquista normanda de 1091 e da retomada cristã — que tirou o árabe do governo da Sicília em 1198 e expulsou ou dispersou os muçulmanos de lá no século XIII —, o sículo-árabe foi se apagando na própria Sicília (o seu último dialeto não siciliano-maltês desapareceu por volta do início do século XIX). Só sobreviveu em Malta, onde seguiu seu próprio caminho por 800 anos, recebendo cada vez mais palavras do siciliano, do italiano e, mais recentemente, do inglês. A ortografia moderna, em alfabeto latino, foi padronizada em 1924. Hoje o maltês tem cerca de 530 mil falantes (uns 450 mil em Malta, 79 mil na diáspora, a maior parte na Austrália) e é a única língua semítica e afro-asiática oficial da União Europeia.',
      culture_tip:
        'Mesmo sendo semítica, a única escrita oficial do maltês sempre foi o alfabeto latino — nunca o árabe. As letras extras (ċ, ġ, ħ, ż, għ) têm uma história recente: o ċ foi usado pela primeira vez por Martin Cannolo no Evangelho maltês de 1822, e o ġ começou como um “g” com trema, reduzido a um ponto só em 1843. E nem tudo que parece italiano é italiano: “bonġu” (bom dia) vem do francês “bonjour”, não do italiano “buongiorno”.',
      grammar_why:
        'O artigo definido do maltês é il- (“o”, “a”). Antes de vogal vira l- (l-omm, “a mãe”; l-ilma, “a água”). Antes de nove consoantes chamadas de “consoantes solares” — Ċ, D, N, R, S, T, X, Ż, Z, herdadas do árabe —, o l do artigo desaparece e vira a própria consoante da palavra: id-dar (a casa), ix-xemx (o sol).',
      grammar_examples: [
        ['Bonġu! Kif inti?', 'Bom dia! Como você está?'],
        ['Jisimni Ana.', 'Eu me chamo Ana. (lit. “[é] o meu nome, Ana”)'],
        ['Id-dar.', 'A casa.'],
        ['Ix-xemx.', 'O sol.'],
      ],
      character_guide: [
        ['ċ', 'som de “tch” (como em “tchau”)', 'jiddispjaċini (sinto muito)'],
        ['ġ', 'som de “dj” (como em “adjetivo”)', 'bonġu (bom dia)'],
        ['ħ', 'h soprado, bem mais forte que o h do inglês', 'ħobż (pão)'],
        ['ż', '“z” sempre sonoro (nunca som de “s”)', 'żgħir (pequeno)'],
        ['għ', 'quase sempre muda — só vira uma pausa na garganta', 'għajn (olho)'],
      ],
    },
    lessons: [
      {
        id: 'mt-u1-l1',
        title: 'Bonġu, grazzi, saħħa!',
        kind: 'licao',
        words: ['bonġu', 'bonswa', 'saħħa', 'grazzi', 'jekk jogħġbok', 'skużi'],
        cloze: [
          { sentence: '___! Kif inti?', answer: 'Bonġu', options: ['Bonġu', 'Bonswa', 'Saħħa'], translation: 'Bom dia! Como você está?' },
          { sentence: 'Ilma, ___.', answer: 'jekk jogħġbok', options: ['jekk jogħġbok', 'grazzi', 'skużi'], translation: 'Água, por favor.' },
          { sentence: 'Bonswa! ___!', answer: 'Saħħa', options: ['Saħħa', 'Bonġu', 'Skużi'], translation: 'Boa noite! Até logo!' },
        ],
        voice: {
          bot: 'Bonġu! Kif inti?',
          botTranslation: 'Bom dia! Como você está?',
          expected: ['Tajjeb, grazzi!', 'tajjeb', 'grazzi'],
          hint: 'Responda que está bem com “Tajjeb” e agradeça com “Grazzi”.',
        },
        communityPrompt: 'Escreva três expressões em maltês: um cumprimento (“Bonġu” ou “Bonswa”), um agradecimento (“Grazzi”) e uma despedida (“Saħħa”).',
      },
      {
        id: 'mt-u1-l2',
        title: 'Jisimni Ana',
        kind: 'licao',
        words: ['jien', 'int', 'jisimni', 'kif inti?', 'iva', 'le'],
        cloze: [
          { sentence: '___ jisimni Ana.', answer: 'Jien', options: ['Jien', 'Int', 'Iva'], translation: 'Eu me chamo Ana.' },
          { sentence: '___, kif inti?', answer: 'Int', options: ['Int', 'Jien', 'Le'], translation: 'Você, como está?' },
          { sentence: '___, grazzi!', answer: 'Iva', options: ['Iva', 'Le', 'Jien'], translation: 'Sim, obrigado!' },
        ],
        voice: {
          bot: 'Jisimni Marija. Int?',
          botTranslation: 'Eu me chamo Marija. E você?',
          expected: ['Jisimni Ana.', 'jisimni'],
          hint: 'Diga o seu nome com “Jisimni…”.',
        },
        communityPrompt: 'Apresente-se em maltês: diga o seu nome com “Jisimni…” e pergunte “Kif inti?” para alguém.',
      },
      {
        id: 'mt-u1-l3',
        title: 'Prova: bonġu, kif inti?',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Bonġu! Jisimni Pawlu. Int, kif inti?',
          botTranslation: 'Bom dia! Eu me chamo Pawlu. E você, como está?',
          expected: ['Bonġu! Jisimni Ana. Tajjeb, grazzi!', 'jisimni', 'tajjeb'],
          hint: 'Devolva o cumprimento, diga o seu nome com “Jisimni…” e diga que está bem com “Tajjeb”.',
        },
        communityPrompt: 'Escreva uma apresentação completa em maltês: cumprimento (“Bonġu”), nome (“Jisimni…”) e como você está (“Tajjeb, grazzi!”).',
      },
    ],
  },
  {
    id: 'mt-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Il-familja u d-dar',
    emoji: '👪',
    card: {
      id: 'mt-c2',
      title: 'Entre o árabe e a Sicília',
      emoji: '🧭',
      history:
        'O vocabulário do maltês tem camadas bem documentadas: cerca de um terço vem do núcleo semítico herdado do sículo-árabe (palavras do dia a dia, como dar “casa”, tajjeb “bom”, ħobż “pão”), pouco mais da metade vem do italiano e do siciliano (como familja “família”, kamra “quarto”, grazzi “obrigado”), e entre 6% e 20% vem do inglês, a outra língua oficial de Malta. Às vezes a origem é uma surpresa: “missier” (pai) parece uma palavra de parentesco bem antiga, mas veio do siciliano antigo “misseri” e substituiu a palavra semítica nativa “bu” — já “ħu” (irmão) e “oħt” (irmã) continuam semíticos, do árabe.',
      culture_tip:
        'O maltês tinha palavras semíticas próprias para tons de azul (iżraq, ikħal), mas hoje usa principalmente “blu”, emprestado do siciliano/italiano. E “qattus” (gato), que parece uma palavra árabe comum, remonta ao latim “cattus” — viajou do latim para línguas berberes do norte da África, entrou no árabe magrebino falado ali e chegou ao maltês nessa forma: um parente bem distante do português “gato”.',
      grammar_why:
        'Por baixo da escrita latina, o maltês guarda raízes semíticas de três consoantes. A raiz x-m-x (sol) dá xemx (sol), xemxi (ensolarado) e nixxemmex (eu tomo sol). Os adjetivos de cor seguem um padrão parecido: aħmar/ħamra (vermelho/vermelha), abjad/bajda (branco/branca), iswed/sewda (preto/preta) — o masculino no formato a-CCaC, o feminino em CaCCa.',
      grammar_examples: [
        ['Aħmar, iswed, abjad.', 'Vermelho, preto, branco.'],
        ['Tajjeb!', 'Bom! Ótimo!'],
        ['Int trid ħobż?', 'Você quer pão?'],
        ['Jien rrid ilma.', 'Eu quero água.'],
      ],
      character_guide: [
        ['d', 'consoante solar: puxa o il- do artigo para id-', 'id-dar (a casa)'],
        ['n', 'consoante solar: puxa o il- do artigo para in-', 'in-nar (o fogo)'],
        ['s', 'consoante solar: puxa o il- do artigo para is-', 'is-siġra (a árvore)'],
      ],
    },
    lessons: [
      {
        id: 'mt-u2-l1',
        title: 'Omm, missier u l-familja',
        kind: 'licao',
        words: ['omm', 'missier', 'ħu', 'oħt', 'familja', 'dar'],
        cloze: [
          { sentence: 'Bonġu, ___!', answer: 'Omm', options: ['Omm', 'Missier', 'Ħu'], translation: 'Bom dia, mãe!' },
          { sentence: 'Skużi, ___!', answer: 'Missier', options: ['Missier', 'Ħu', 'Oħt'], translation: 'Com licença, pai!' },
          { sentence: 'Bonswa, ___!', answer: 'Oħt', options: ['Oħt', 'Ħu', 'Familja'], translation: 'Boa noite, irmã!' },
        ],
        voice: {
          bot: 'Kif inti, ħu?',
          botTranslation: 'Como você está, irmão?',
          expected: ['Tajjeb, grazzi!', 'tajjeb'],
          hint: 'Responda “Tajjeb, grazzi!” (bem, obrigado).',
        },
        communityPrompt: 'Apresente a sua família em maltês usando “Omm”, “Missier”, “Ħu”, “Oħt”, “Familja” e “Dar”.',
      },
      {
        id: 'mt-u2-l2',
        title: 'Il-kamra u l-kuluri',
        kind: 'licao',
        words: ['kamra', 'aħmar', 'iswed', 'abjad', 'tajjeb', 'kelb'],
        cloze: [
          { sentence: 'Aħmar? Le, ___!', answer: 'Iswed', options: ['Iswed', 'Abjad', 'Tajjeb'], translation: '“Vermelho?” “Não, preto!”' },
          { sentence: 'Abjad? Le, ___!', answer: 'Aħmar', options: ['Aħmar', 'Iswed', 'Kelb'], translation: '“Branco?” “Não, vermelho!”' },
          { sentence: 'Il-kelb... ___!', answer: 'Tajjeb', options: ['Tajjeb', 'Iswed', 'Kamra'], translation: 'O cachorro... bom!' },
        ],
        voice: {
          bot: 'Il-kamra. Aħmar?',
          botTranslation: 'O quarto. Vermelho?',
          expected: ['Le, iswed!', 'iswed', 'le'],
          hint: 'Responda com uma cor: “Le, iswed!” (não, preto!).',
        },
        communityPrompt: 'Descreva as cores do seu quarto ou do seu cachorro em maltês usando “Aħmar”, “Iswed”, “Abjad” ou “Tajjeb”.',
      },
      {
        id: 'mt-u2-l3',
        title: 'Prova: il-familja u d-dar',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Bonġu! Jisimni Pawlu. Trid ħobż?',
          botTranslation: 'Bom dia! Eu me chamo Pawlu. Você quer pão?',
          expected: ['Bonġu! Iva, rrid ħobż, grazzi.', 'rrid', 'grazzi'],
          hint: 'Devolva o cumprimento e diga que quer pão com “Rrid ħobż”.',
        },
        communityPrompt: 'Escreva uma conversa curta em maltês: cumprimento, um membro da família e um pedido de comida ou bebida com “Rrid…”.',
      },
    ],
  },
];
