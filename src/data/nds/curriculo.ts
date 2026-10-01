import type { UnitSeed } from '../types';

/**
 * Trilha do baixo-alemão: por enquanto só as duas unidades do nível A1 (o pacote está marcado
 * como incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_NDS: UnitSeed[] = [
  {
    id: 'nds-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Moin! De eersten Schreed',
    emoji: '👋',
    card: {
      id: 'nds-c1',
      title: 'Uma língua, não um sotaque do alemão',
      emoji: '🌾',
      history:
        'O baixo-alemão (Plattdüütsch, também chamado Niederdeutsch) é falado no norte da Alemanha e no nordeste dos Países Baixos. Apesar do nome parecido, não é um dialeto do alto-alemão (Hochdeutsch, a norma padrão): os dois vêm de ramos diferentes do germânico ocidental, e o baixo-alemão não passou pela "segunda mutação consonantal" que mudou o alto-alemão — por isso “Water” e “Schipp” soam mais perto do inglês “water” e “ship” do que do alemão “Wasser” e “Schiff”. Na Idade Média, o baixo-alemão foi a língua comercial da Liga Hanseática, falada de Londres a Novgorod; hoje a Alemanha reconhece o Plattdüütsch como língua regional pela Carta Europeia das Línguas Regionais ou Minoritárias, mas o número de falantes cai a cada geração. Aqui se usa a grafia Sass’sche Schrievwies, criada por Johannes Sass em 1935 e ainda a mais difundida.',
      culture_tip:
        '“Moin” é o cumprimento mais famoso do norte da Alemanha: serve a qualquer hora do dia (não só de manhã), e dobrado — “Moin Moin!” — fica ainda mais caloroso. É usado até por quem só fala alto-alemão no dia a dia, como uma marca regional.',
      grammar_why:
        'O baixo-alemão diz o nome com “heten”: “Ik heet Anna”, “Woans heetst du?”. O verbo “wesen” (ser/estar) muda bastante: “ik bün”, “du büst”, “he is” — sem um “estar” separado, como em português.',
      grammar_examples: [
        ['Moin! Ik heet Anna.', 'Oi! Eu me chamo Ana.'],
        ['Woans heetst du?', 'Como você se chama?'],
        ['He is ut Hamborg, se is ut Bremen.', 'Ele é de Hamburgo, ela é de Bremen.'],
        ['Mi geiht dat good, dankeschöön.', 'Eu vou bem, obrigado.'],
      ],
      character_guide: [
        ['oo', 'vogal longa, como o “o” de “avô”', 'good (bom), Brood (pão)'],
        ['ee', 'vogal longa, como o “ê” fechado', 'Been (perna), twee (dois)'],
        ['ü', 'como o “u” francês ou o alemão', 'Dünnersdag (quinta-feira)'],
        ['sch', 'como o “x” de “xícara”', 'Schipp (navio, não entra no vocabulário deste bloco)'],
        ['g entre vogais', 'quase some, vira um som bem suave', 'geiht (vai), Dag (dia)'],
      ],
    },
    lessons: [
      {
        id: 'nds-u1-l1',
        title: 'Moin, dankeschöön, adjüüs!',
        kind: 'licao',
        words: ['Moin', 'Goden Morgen', 'Goden Avend', 'Adjüüs', 'Dankeschöön', 'Bidd'],
        cloze: [
          { sentence: '___! Wo geiht’t?', answer: 'Moin', options: ['Moin', 'Adjüüs', 'Dankeschöön'], translation: 'Oi! Como vai?' },
          { sentence: 'Dat is nu Avend: ___!', answer: 'Goden Avend', options: ['Goden Avend', 'Goden Morgen', 'Dankeschöön'], translation: 'Agora é noite: boa noite!' },
          { sentence: '___ bannig!', answer: 'Dankeschöön', options: ['Dankeschöön', 'Moin', 'Adjüüs'], translation: 'Muito obrigado!' },
        ],
        voice: {
          bot: 'Moin! Wo geiht’t?',
          botTranslation: 'Oi! Como vai?',
          expected: ['Mi geiht dat good, dankeschöön! Un di?', 'good', 'dankeschöön'],
          hint: 'Responda que vai bem e devolva a pergunta: “Mi geiht dat good, dankeschöön! Un di?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em baixo-alemão: um de manhã (“Goden Morgen…”), um à noite (“Goden Avend…”) e uma despedida (“Adjüüs”).',
      },
      {
        id: 'nds-u1-l2',
        title: 'Ik, du, he, se',
        kind: 'licao',
        words: ['ik', 'du', 'he', 'se', 'heten', 'Naam'],
        cloze: [
          { sentence: '___ heet Anna.', answer: 'Ik', options: ['Ik', 'Du', 'He'], translation: 'Eu me chamo Ana.' },
          { sentence: 'Woans ___ du?', answer: 'heetst', options: ['heetst', 'is', 'heff'], translation: 'Como você se chama?' },
          { sentence: '___ is ut Bremen.', answer: 'He', options: ['He', 'Ik', 'Du'], translation: 'Ele é de Bremen.' },
        ],
        voice: {
          bot: 'Moin! Woans heetst du?',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['Ik heet Anna. Un du?', 'ik heet', 'un du'],
          hint: 'Diga o seu nome com “Ik heet…” e devolva a pergunta com “Un du?”.',
        },
        communityPrompt: 'Apresente-se em baixo-alemão: diga o seu nome com “Ik heet…” e pergunte o nome de alguém com “Woans heetst du?”.',
      },
      {
        id: 'nds-u1-l3',
        title: 'Proov: de eersten Schreed',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Moin! Ik heet Jan. Woans heetst du, un woneem kümmst du vun af?',
          botTranslation: 'Oi! Eu me chamo Jan. Como você se chama e de onde você é?',
          expected: ['Moin! Ik heet Lucia un ik bün ut São Paulo.', 'ik heet', 'ik bün ut', 'moin'],
          hint: 'Devolva o cumprimento (“Moin!”), diga o nome com “Ik heet…” e a cidade com “Ik bün ut…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “Ik heet…”, cidade com “Ik bün ut…” e uma despedida.',
      },
    ],
  },
  {
    id: 'nds-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'De Familie un dat Huus',
    emoji: '👪',
    card: {
      id: 'nds-c2',
      title: 'De, dat e um vocabulário quase inglês',
      emoji: '🧭',
      history:
        'O baixo-alemão ficou séculos sem uma escrita padrão, servindo só para a fala do dia a dia enquanto o alto-alemão dominava a escrita, a escola e a igreja desde o século XVI. Por isso muita gente mistura as duas em conversa, e boa parte dos falantes de hoje são bilíngues desde pequenos. Palavras do dia a dia como “Water” (água), “Book” (livro) e “maken” (fazer) soam mais perto do inglês e do neerlandês do que do alemão “Wasser”, “Buch” e “machen” — um lembrete de que inglês, neerlandês e baixo-alemão formam, junto com o frísio, o grupo das línguas germânicas do mar do Norte.',
      culture_tip:
        'A família é central na cultura do norte da Alemanha rural, onde o Plattdüütsch ainda é mais falado. É comum avós falarem Platt com os netos mesmo quando os pais já só falam alemão padrão — um jeito de manter a língua viva em casa.',
      grammar_why:
        'O baixo-alemão tem três gêneros (masculino, feminino, neutro), mas o artigo definido muda pouco: “de” serve pro masculino e pro feminino, e “dat” pro neutro. O possessivo vem antes do nome: “mien Vader” (meu pai), “mien Moder” (minha mãe).',
      grammar_examples: [
        ['Mien Familie is groot.', 'A minha família é grande.'],
        ['Ik heff een Broder un een Swester.', 'Tenho um irmão e uma irmã.'],
        ['Dat Huus is lütt.', 'A casa é pequena.'],
        ['Ik weet dat nich.', 'Eu não sei.'],
      ],
      character_guide: [
        ['de / dat', 'artigo definido: “de” (masc./fem.), “dat” (neutro)', 'de Katt (a gata), dat Huus (a casa)'],
        ['mien / dien / sien', 'possessivo: meu, teu, seu (dele)', 'mien Vader, dien Moder, sien Dochter'],
      ],
    },
    lessons: [
      {
        id: 'nds-u2-l1',
        title: 'Mien Familie',
        kind: 'licao',
        words: ['Familie', 'Moder', 'Vader', 'Broder', 'Swester', 'hebben'],
        cloze: [
          { sentence: 'Mien ___ heet Rosa.', answer: 'Moder', options: ['Moder', 'Vader', 'Broder'], translation: 'A minha mãe se chama Rosa.' },
          { sentence: 'Ik ___ een Broder.', answer: 'heff', options: ['heff', 'bün', 'gah'], translation: 'Eu tenho um irmão.' },
          { sentence: 'Mien ___ is ut Bremen.', answer: 'Vader', options: ['Vader', 'Swester', 'Moder'], translation: 'O meu pai é de Bremen.' },
        ],
        voice: {
          bot: 'Hest du Bröder oder Swestern?',
          botTranslation: 'Você tem irmãos ou irmãs?',
          expected: ['Ja, ik heff een Broder un een Swester.', 'ik heff', 'broder', 'swester'],
          hint: 'Responda com “Ja, ik heff…” ou “Nee, ik heff keen Bröder”.',
        },
        communityPrompt: 'Descreva a sua família em baixo-alemão: quantos irmãos (Bröder) e irmãs (Swestern) você tem, usando “ik heff”.',
      },
      {
        id: 'nds-u2-l2',
        title: 'In’t Huus',
        kind: 'licao',
        words: ['Huus', 'Water', 'Brood', 'Melk', 'Kees', 'eten'],
        cloze: [
          { sentence: 'Mien ___ is lütt.', answer: 'Huus', options: ['Huus', 'Water', 'Brood'], translation: 'A minha casa é pequena.' },
          { sentence: 'Ik drink ___.', answer: 'Water', options: ['Water', 'Brood', 'Kees'], translation: 'Eu bebo água.' },
          { sentence: 'Ik ___ Brood mit Kees.', answer: 'eet', options: ['eet', 'bün', 'heff'], translation: 'Eu como pão com queijo.' },
        ],
        voice: {
          bot: 'Wat eetst du?',
          botTranslation: 'O que você come?',
          expected: ['Ik eet Brood mit Kees.', 'ik eet', 'brood', 'kees'],
          hint: 'Diga o que come com “Ik eet…”.',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: “Ik eet…” e “Ik drink…”.',
      },
      {
        id: 'nds-u2-l3',
        title: 'Proov: Familie un Huus',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Hest du Bröder oder Swestern? Wat eetst du geern?',
          botTranslation: 'Você tem irmãos ou irmãs? O que você gosta de comer?',
          expected: ['Ik heff een Swester, un ik eet geern Brood mit Kees.', 'ik heff', 'ik eet'],
          hint: 'Diga quem você tem na família com “ik heff…” e o que come com “ik eet…”.',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “ik heff”, “ik bün” e “is”.',
      },
    ],
  },
];
