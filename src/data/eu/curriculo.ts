import type { UnitSeed } from '../types';

/**
 * Trilha do basco: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_EU: UnitSeed[] = [
  {
    id: 'eu-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Kaixo! Lehen urratsak',
    emoji: '👋',
    card: {
      id: 'eu-c1',
      title: 'Uma língua sem parentes',
      emoji: '🏔️',
      history:
        'O basco (euskara) é falado no País Basco, dos dois lados dos Pireneus: no norte da Espanha (Comunidade Autônoma do País Basco e parte de Navarra) e no sudoeste da França. É uma língua isolada: nenhum parentesco com outra língua viva foi comprovado. Ele já era falado na região antes da chegada das línguas indo-europeias, como o latim, e resistiu a elas; inscrições da época romana na Aquitânia trazem nomes que parecem ser de uma forma antiga do basco. Já se propôs parentesco com o ibérico antigo e com línguas do Cáucaso, mas nenhuma dessas hipóteses é aceita pelos linguistas. O primeiro livro impresso em basco saiu em 1545, e desde 1968 a Euskaltzaindia (a Academia da Língua Basca) desenvolve uma norma comum, o euskara batua, que é a usada aqui.',
      culture_tip:
        '«Kaixo» é o «oi» do dia a dia; «egun on» vale de manhã, «arratsalde on» à tarde e «gabon» à noite. Para agradecer, «eskerrik asko» ou, com mais ênfase, «mila esker» («mil agradecimentos»). Com quase todo mundo se usa «zu» (você); existe também «hi», bem íntimo, que muitos falantes quase não usam.',
      grammar_why:
        'O verbo vai no fim da frase: «Ane naiz» é, palavra por palavra, «Ane sou». E a origem se diz com o sufixo -ko + o artigo -a grudados no nome da cidade: «Bilbokoa naiz» (sou de Bilbao), «São Paulokoa naiz» (sou de São Paulo).',
      grammar_examples: [
        ['Kaixo! Ane naiz.', 'Oi! Eu sou a Ane.'],
        ['Nola deitzen zara?', 'Como você se chama?'],
        ['Hura Bilbokoa da.', 'Ele (ou ela) é de Bilbao.'],
        ['Ondo, eskerrik asko. Eta zu?', 'Bem, obrigado. E você?'],
      ],
      character_guide: [
        ['z', 'um «s» comum, como o do português', 'zu (você), zer (o que)'],
        ['s', 'um «s» chiado, com a ponta da língua para cima, entre «s» e «x»', 'asko (muito), eskerrik'],
        ['x', 'como o «x» de «xícara»', 'kaixo (oi)'],
        ['tx', 'como o «tch» de «tchau»', 'txakur (cachorro), txiki (pequeno)'],
        ['tz / ts', 'um «ts» (tz com o «s» do z; ts com o «s» chiado)', 'deitzen (tz), atsegin (ts)'],
        ['h', 'no sul quase sempre mudo', 'hura, hiru (três)'],
        ['rr', 'o «r» vibrado, como o de «caro» dito várias vezes', 'eskerrik'],
      ],
    },
    lessons: [
      {
        id: 'eu-u1-l1',
        title: 'Kaixo, eskerrik asko, agur!',
        kind: 'licao',
        words: ['kaixo', 'egun on', 'arratsalde on', 'gabon', 'agur', 'eskerrik asko'],
        cloze: [
          { sentence: '___, Ane! Zer moduz?', answer: 'Kaixo', options: ['Kaixo', 'Agur', 'Barkatu'], translation: 'Oi, Ane! Como vai?' },
          { sentence: 'Gaua da: ___!', answer: 'gabon', options: ['gabon', 'egun on', 'agur'], translation: 'É noite: boa noite!' },
          { sentence: '___ asko!', answer: 'Eskerrik', options: ['Eskerrik', 'Kaixo', 'Agur'], translation: 'Muito obrigado!' },
        ],
        voice: {
          bot: 'Kaixo! Zer moduz?',
          botTranslation: 'Oi! Como vai?',
          expected: ['Ondo, eskerrik asko! Eta zu?', 'ondo', 'eskerrik asko'],
          hint: 'Responda que vai bem e devolva a pergunta: «Ondo, eskerrik asko! Eta zu?».',
        },
        communityPrompt: 'Escreva três cumprimentos em basco: um de manhã («Egun on…»), um à tarde («Arratsalde on…») e uma despedida («Agur»).',
      },
      {
        id: 'eu-u1-l2',
        title: 'Ni, zu, hura',
        kind: 'licao',
        words: ['ni', 'zu', 'hura', 'izen', 'deitu', 'izan'],
        cloze: [
          { sentence: '___ Ane naiz.', answer: 'Ni', options: ['Ni', 'Zu', 'Hura'], translation: 'Eu sou a Ane.' },
          { sentence: 'Nola deitzen ___?', answer: 'zara', options: ['zara', 'naiz', 'da'], translation: 'Como você se chama?' },
          { sentence: 'Hura Bilbokoa ___.', answer: 'da', options: ['da', 'naiz', 'zara'], translation: 'Ele (ou ela) é de Bilbao.' },
        ],
        voice: {
          bot: 'Kaixo! Nola deitzen zara?',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['Ane deitzen naiz. Eta zu?', 'deitzen naiz', 'eta zu'],
          hint: 'Diga o seu nome e depois «deitzen naiz», e devolva a pergunta com «Eta zu?».',
        },
        communityPrompt: 'Apresente-se em basco: diga o seu nome com «… deitzen naiz» e pergunte o nome de alguém com «Nola deitzen zara?».',
      },
      {
        id: 'eu-u1-l3',
        title: 'Azterketa: lehen urratsak',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Kaixo! Ni Mikel naiz. Nola deitzen zara? Nongoa zara?',
          botTranslation: 'Oi! Eu sou o Mikel. Como você se chama? De onde você é?',
          expected: ['Kaixo! Lucia deitzen naiz eta São Paulokoa naiz.', 'deitzen naiz', 'kaixo'],
          hint: 'Devolva o cumprimento («Kaixo!»), diga o nome com «… deitzen naiz» e a cidade com «…koa naiz».',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com «… deitzen naiz», cidade com «…koa naiz» e uma despedida.',
      },
    ],
  },
  {
    id: 'eu-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Familia eta etxea',
    emoji: '👪',
    card: {
      id: 'eu-c2',
      title: 'O artigo no fim e o -k de quem faz',
      emoji: '🧭',
      history:
        'Por ser isolado, o basco não tem parentes para explicar suas palavras mais antigas, como «etxe» (casa), «ur» (água) ou «ama» (mãe). Mas convive há mais de dois mil anos com o latim e com as línguas que vieram dele, e tomou muitas palavras emprestadas: «katu» (gato) vem do latim «cattus» e «liburu» (livro), de «librum». O caminho também foi ao contrário: o espanhol «izquierdo» e o português «esquerdo» vêm do basco «ezker» (esquerda).',
      culture_tip:
        'No basco, o nome do irmão e da irmã depende de quem fala: uma mulher chama a irmã de «ahizpa» e o irmão de «neba»; um homem chama a irmã de «arreba» e o irmão de «anaia». Em muitas regiões, porém, «anaia» vale para o irmão de qualquer pessoa.',
      grammar_why:
        'O artigo definido é o sufixo -a no fim do grupo: «etxe» → «etxea» (a casa), «etxe txikia» (a casa pequena), com o adjetivo depois do nome. Quem faz a ação de um verbo com objeto ganha -k: «nik» (eu), «zuk» (você). Por isso se diz «Nik ura edaten dut» (eu bebo água), mas «Ni etxera noa» (eu vou para casa), sem objeto e sem -k. Esse sistema se chama ergativo.',
      grammar_examples: [
        ['Nire familia handia da.', 'A minha família é grande.'],
        ['Anaia bat dut.', 'Tenho um irmão.'],
        ['Nik ura edaten dut.', 'Eu bebo água.'],
        ['Ez dakit.', 'Não sei.'],
      ],
      character_guide: [
        ['-a', 'o artigo vai no fim da palavra', 'etxe → etxea (a casa), ur → ura (a água)'],
        ['-k', 'marca quem faz a ação de um verbo com objeto', 'ni → nik, zu → zuk'],
      ],
    },
    lessons: [
      {
        id: 'eu-u2-l1',
        title: 'Nire familia',
        kind: 'licao',
        words: ['familia', 'ama', 'aita', 'anaia', 'ahizpa', 'arreba'],
        cloze: [
          { sentence: 'Nire ___ Rosa deitzen da.', answer: 'ama', options: ['ama', 'aita', 'anaia'], translation: 'A minha mãe se chama Rosa.' },
          { sentence: 'Anaia bat ___.', answer: 'dut', options: ['dut', 'naiz', 'noa'], translation: 'Tenho um irmão.' },
          { sentence: 'Nire ___ Bilbokoa da.', answer: 'aita', options: ['aita', 'ahizpa', 'ama'], translation: 'O meu pai é de Bilbao.' },
        ],
        voice: {
          bot: 'Familia handia duzu?',
          botTranslation: 'Você tem uma família grande?',
          expected: ['Bai, anaia bat dut.', 'dut', 'bai'],
          hint: 'Responda com «Bai, … bat dut» (sim, tenho um/uma …): «anaia» ou «neba» para irmão, «arreba» ou «ahizpa» para irmã.',
        },
        communityPrompt: 'Descreva a sua família em basco: diga quem são os seus irmãos (anaia/neba, arreba/ahizpa) e os seus pais (ama, aita) com «… bat dut».',
      },
      {
        id: 'eu-u2-l2',
        title: 'Etxean',
        kind: 'licao',
        words: ['etxe', 'ur', 'ogi', 'esne', 'gazta', 'kafe'],
        cloze: [
          { sentence: 'Nire ___ txikia da.', answer: 'etxea', options: ['etxea', 'ura', 'ogia'], translation: 'A minha casa é pequena.' },
          { sentence: 'Nik ura ___ dut.', answer: 'edaten', options: ['edaten', 'jaten', 'deitzen'], translation: 'Eu bebo água.' },
          { sentence: 'Esnea ___ da.', answer: 'zuria', options: ['zuria', 'beltza', 'gorria'], translation: 'O leite é branco.' },
        ],
        voice: {
          bot: 'Zer jaten duzu?',
          botTranslation: 'O que você come?',
          expected: ['Ogia jaten dut.', 'jaten dut'],
          hint: 'Diga o que come com «… jaten dut».',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: «Nik … jaten dut» e «Nik … edaten dut».',
      },
      {
        id: 'eu-u2-l3',
        title: 'Azterketa: familia eta etxea',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Nolakoa da zure familia?',
          botTranslation: 'Como é a sua família?',
          expected: ['Nire familia handia da. Anaia bat dut.', 'nire familia', 'dut'],
          hint: 'Diga se a família é grande ou pequena («handia / txikia da») e quem você tem («… bat dut»).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando «da», «dut» e «deitzen da».',
      },
    ],
  },
];
