import type { UnitSeed } from '../types';

/**
 * Trilha do tikuna: por enquanto só as duas unidades do nível A1 (pacote incompleto — ver
 * `incomplete` em index.ts). As frases em tikuna que aparecem aqui usam só palavras com fonte
 * confirmada (ver vocabulario.ts); por isso a maioria junta um numeral a um substantivo — o padrão
 * de frase mais seguro e documentado — em vez de inventar orações com verbos conjugados que nenhuma
 * fonte registrou nesta ortografia prática.
 */
export const UNITS_TCA: UnitSeed[] = [
  {
    id: 'tca-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Nuxmae! Saudações e o povo magüta',
    emoji: '👋',
    card: {
      id: 'tca-c1',
      title: 'A maior língua indígena do Brasil',
      emoji: '🌳',
      history:
        'O tikuna (ou ticuna) é falado por cerca de 48 mil pessoas no Alto Solimões, no Amazonas, além de comunidades na Colômbia e no Peru — provavelmente a língua indígena com mais falantes do Brasil e da própria Amazônia. Os próprios falantes chamam a si mesmos e à sua língua de “magüta”, nome que a tradição oral liga ao herói Yoi, que teria “pescado” o primeiro tikuna com uma vara nas águas vermelhas do igarapé Eware. O tikuna é classificado como língua isolada: não se comprovou parentesco com nenhuma outra língua viva, embora pesquisas recentes (Carvalho 2009; Goulard & Montes Rodríguez 2013) tenham proposto — sem confirmação definitiva até agora — uma conexão com o extinto yuri e com a língua dos caravalo. O território tikuna se expandiu bastante só a partir do século XIX, o que ajuda a explicar por que a língua varia pouco de um lado a outro de um domínio tão grande, que vai do rio Putumayo-Içá ao rio Tefé, com falantes também nas cidades de Manaus e Iquitos.',
      culture_tip:
        'Segundo o Instituto Socioambiental (ISA), a sociedade tikuna se divide em duas metades exogâmicas (quem nasce numa metade só pode casar com alguém da outra), cada uma reunindo vários clãs chamados “kï’á” — uma metade agrupa clãs batizados com nomes de pássaros (como arara, mutum, japu), a outra, com nomes de plantas (como buriti, saúva, onça).',
      grammar_why:
        'O tikuna é uma língua tonal: a mesma sequência de letras pode mudar de sentido só pela melodia da voz. A ortografia oficial (criada com o Instituto Linguístico de Verão/SIL e o Ministério da Educação do Peru) só marca essa melodia com acento quando duas palavras escritas do mesmo jeito podem se confundir — como “dexi” (água) e “dexa” (mensagem). Isso volta com mais detalhe na gramática desta unidade.',
      grammar_examples: [
        ['Nuxmae! Tamoxẽ!', '“Oi! Obrigado(a)!” — cumprimento e agradecimento, as duas palavras mais básicas do curso.'],
        ['Du-ũ, magüta.', '“Nós, [somos] o povo magüta [tikuna].”'],
        ['Cuma rii mea cupuracu.', '“Você trabalha muito bem.” — frase citada literalmente da cartilha oficial de 1997.'],
      ],
      character_guide: [
        ['ü', 'vogal própria do tikuna, sem equivalente exato no português', 'Wüxi (“um”)'],
        ['x', 'nesta ortografia, marca uma oclusiva glotal (uma pequena parada no ar), não o som de “x” do português', 'Nuxmae (“oi”)'],
        ['ẽ, ã, ũ', 'vogal nasalizada: a til marca a nasalização, como no português “mãe”', 'Tamoxẽ (“obrigado”)'],
        ['ng', 'som nasal antes de “g”, como o “n” de “angosto” em espanhol', 'Ngexüi (“mulher”)'],
      ],
    },
    lessons: [
      {
        id: 'tca-u1-l1',
        title: 'Nuxmae! Tamoxẽ!',
        kind: 'licao',
        words: ['Nuxmae', 'Cuxnama', 'Tamoxẽ', 'Magüta', 'Du-ũ', 'Cuma'],
        cloze: [
          { sentence: '“___!” “Nuxmae!”', answer: 'Nuxmae', options: ['Nuxmae', 'Cuxnama', 'Tamoxẽ'], translation: '“Oi!” “Oi!” — cumprimento recíproco.' },
          { sentence: 'Tamoxẽ! ___!', answer: 'Cuxnama', options: ['Cuxnama', 'Nuxmae', 'Du-ũ'], translation: 'Obrigado(a)! Tchau!' },
          { sentence: 'Du-ũ, ___.', answer: 'Magüta', options: ['Magüta', 'Cuma', 'Du-ũ'], translation: 'Nós, [somos] o povo magüta.' },
        ],
        voice: {
          bot: 'Nuxmae!',
          botTranslation: 'Oi!',
          expected: ['Nuxmae!', 'nuxmae'],
          hint: 'Responda com “Nuxmae!” — a mesma palavra serve para cumprimentar e para responder ao cumprimento.',
        },
        communityPrompt: 'Escreva o cumprimento e o agradecimento em tikuna: “Nuxmae” e “Tamoxẽ”.',
      },
      {
        id: 'tca-u1-l2',
        title: 'Wüxi, taxre, tomaxixpü: contando e as pessoas',
        kind: 'licao',
        words: ['Chatü', 'Ngexüi', 'Wüxi', 'Taxre', 'Tomaxixpü', 'Ãgümücü'],
        cloze: [
          { sentence: 'Wüxi, taxre, ___, ãgümücü.', answer: 'Tomaxixpü', options: ['Tomaxixpü', 'Wüxi', 'Taxre'], translation: 'Um, dois, três, quatro.' },
          { sentence: 'Wüxi ___.', answer: 'Chatü', options: ['Chatü', 'Ngexüi', 'Taxre'], translation: 'Um homem.' },
          { sentence: 'Taxre ___.', answer: 'Ngexüi', options: ['Ngexüi', 'Chatü', 'Ãgümücü'], translation: 'Duas mulheres.' },
        ],
        voice: {
          bot: 'Wüxi, taxre, tomaxixpü…',
          botTranslation: 'Um, dois, três…',
          expected: ['Ãgümücü', 'ãgümücü'],
          hint: 'Complete a contagem: depois de “tomaxixpü” (três) vem “ãgümücü” (quatro).',
        },
        communityPrompt: 'Conte de um a quatro em tikuna: wüxi, taxre, tomaxixpü, ãgümücü.',
      },
      {
        id: 'tca-u1-l3',
        title: 'Prova: saudações e pessoas',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Nuxmae! Wüxi, taxre, tomaxixpü, ãgümücü…',
          botTranslation: 'Oi! Um, dois, três, quatro…',
          expected: ['Wüxi mixepüx', 'wüxi mixepüx'],
          hint: 'Complete a contagem até cinco: “wüxi mixepüx”.',
        },
        communityPrompt: 'Escreva uma pequena apresentação em tikuna: o cumprimento, o agradecimento e conte até cinco.',
      },
    ],
  },
  {
    id: 'tca-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'A floresta, os bichos e a noite',
    emoji: '🌙',
    card: {
      id: 'tca-c2',
      title: 'Dez tons numa só sílaba',
      emoji: '🎵',
      history:
        'A característica mais famosa do tikuna entre os linguistas é o seu sistema de tons: o linguista Denis Bertet (2021) mostrou que a variedade falada em San Martín de Amacayacu (Colômbia) tem dez tonemas distintos em sílaba tônica — um dos maiores inventários de tons já descritos no mundo, e o maior de toda a América do Sul. Na prática, isso significa que a mesma sequência de consoantes e vogais pode ter vários significados completamente diferentes, dependendo só da melodia com que é pronunciada. Comunidades como Filadélfia, perto de Benjamin Constant (Amazonas), mantêm o tikuna bem vivo no dia a dia, ao lado do português.',
      culture_tip:
        'Segundo a tradição oral tikuna, dois irmãos heróis, Yoi e Ipi, criaram o primeiro povo tikuna e organizaram a vida social: a montanha de origem de Yoi, chamada Taiwegine, é considerada um território sagrado até hoje.',
      grammar_why:
        'A cartilha oficial de 1997 usa a mesma letra sublinhada para marcar duas coisas diferentes: uma vogal “laringalizada” (pronunciada com uma pequena contração na garganta) ou uma consoante “glotalizada”. Por isso “to” (outro) e “tox” (macaco-da-noite), ou “nape” (dorme) e “nape” (na frente de), podem até se escrever quase igual e ainda assim serem palavras completamente diferentes. Isso volta com mais detalhe na gramática desta unidade.',
      grammar_examples: [
        ['Wüxi airu, taxre churi.', '“Um cachorro, dois morcegos.” — numeral junto do substantivo, sem palavra para “é”.'],
        ['Chiitacu, nape.', '“De noite, (ele/ela) dorme.”'],
        ['To.', '“Outro.” — citado na cartilha de 1997 junto de “tox” (macaco-da-noite) para mostrar como a laringalização muda o sentido.'],
      ],
      character_guide: [
        ['acento agudo (´)', 'marca o tom só quando duas palavras se confundiriam por escrito', 'dexi (“água”) × dexa (“mensagem”)'],
        ['til (˜)', 'nasaliza a vogal', 'Tawẽmake (“lua”)'],
        ['x', 'oclusiva glotal nesta ortografia', 'Tox (“macaco-da-noite”)'],
      ],
    },
    lessons: [
      {
        id: 'tca-u2-l1',
        title: 'Os bichos da floresta',
        kind: 'licao',
        words: ['Airu', 'Ngobii', 'Tox', 'Churi', 'Ngoxii', 'Enii'],
        cloze: [
          { sentence: 'Wüxi ___.', answer: 'Airu', options: ['Airu', 'Ngobii', 'Tox'], translation: 'Um cachorro.' },
          { sentence: 'Taxre ___.', answer: 'Churi', options: ['Churi', 'Ngobii', 'Ngoxii'], translation: 'Dois morcegos.' },
          { sentence: 'Tomaxixpü ___.', answer: 'Enii', options: ['Enii', 'Tox', 'Airu'], translation: 'Três camarões.' },
        ],
        voice: {
          bot: 'Nuxmae! Wüxi airu.',
          botTranslation: 'Oi! Um cachorro.',
          expected: ['Tamoxẽ!', 'tamoxẽ'],
          hint: 'Agradeça com “Tamoxẽ!”.',
        },
        communityPrompt: 'Nomeie três bichos da floresta em tikuna, usando um numeral antes de cada um (ex.: “wüxi airu”, um cachorro).',
      },
      {
        id: 'tca-u2-l2',
        title: 'Sol, lua e noite',
        kind: 'licao',
        words: ['Iake', 'Tawẽmake', 'Chiitacu', 'Nape', 'Dexi', 'Tuxu'],
        cloze: [
          { sentence: 'Wüxi ___.', answer: 'Iake', options: ['Iake', 'Dexi', 'Tuxu'], translation: 'Um sol.' },
          { sentence: 'Chiitacu, ___.', answer: 'Nape', options: ['Nape', 'Tawẽmake', 'Dexi'], translation: 'De noite, (ele/ela) dorme.' },
          { sentence: 'Wüxi ___.', answer: 'Tuxu', options: ['Tuxu', 'Tawẽmake', 'Chiitacu'], translation: 'Um espinho.' },
        ],
        voice: {
          bot: 'Iake, tawẽmake, dexi…',
          botTranslation: 'Sol, lua, água…',
          expected: ['Chiitacu', 'chiitacu'],
          hint: 'Complete com outra palavra da natureza: “chiitacu” (noite).',
        },
        communityPrompt: 'Escreva três palavras da natureza em tikuna: sol (iake), lua (tawẽmake) e água (dexi).',
      },
      {
        id: 'tca-u2-l3',
        title: 'Prova: a floresta e a noite',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Nuxmae! Wüxi airu, wüxi iake…',
          botTranslation: 'Oi! Um cachorro, um sol…',
          expected: ['Tamoxẽ!', 'tamoxẽ'],
          hint: 'Feche a apresentação agradecendo: “Tamoxẽ!”.',
        },
        communityPrompt: 'Escreva uma pequena cena em tikuna: cumprimente, nomeie um bicho e uma coisa da natureza, e agradeça no final.',
      },
    ],
  },
];
