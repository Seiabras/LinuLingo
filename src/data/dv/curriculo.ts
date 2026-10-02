import type { UnitSeed } from '../types';

/**
 * Trilha do dhivehi: por enquanto só as duas unidades do nível A1 (pacote novo e incompleto — ver
 * `incomplete` em index.ts). Fontes: ver cabeçalho de vocabulario.ts.
 */
export const UNITS_DV: UnitSeed[] = [
  {
    id: 'dv-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Assalaamu alaikum! Os primeiros passos',
    emoji: '👋',
    card: {
      id: 'dv-c1',
      title: 'Uma escrita que nasceu de números',
      emoji: '🇲🇻',
      history:
        'O dhivehi (ދިވެހި), ou divehi, é a língua oficial e nacional das Maldivas, falada por cerca de 504.829 pessoas (dado de 2022, segundo a Wikipédia). É uma língua indo-ariana — parente do hindi — mas faz parte de um grupinho à parte dentro da família, o “indo-ariano insular”, junto com o sinhala do Sri Lanka: são línguas aparentadas, mas não mutuamente inteligíveis. O nome completo da língua em dhivehi é “ދިވެހިބަސް” (dhivehi bas), literalmente “língua dos ilhéus” — a palavra “ބަސް” (bas, língua) vem do sânscrito “bhāṣā”, a mesma raiz da palavra hindi “भाषा”.',
      culture_tip:
        '“އައްސަލާމު ޢަލައިކުމް” (assalaamu alaikum) é a saudação formal, de origem árabe e islâmica (“que a paz esteja com você”), usada em todo o mundo muçulmano. No dia a dia, “މަރުޙަބާ” (maruhabaa) serve como “oi” ou “bem-vindo” mais informal, e “ޝުކުރިއްޔާ” (shukuriyyaa, também do árabe) é o obrigado.',
      grammar_why:
        'O dhivehi se escreve na escrita Thaana, da direita pra esquerda — a exceção entre as línguas indo-arianas, que normalmente se escrevem da esquerda pra direita (como o hindi, em devanágari). Isso aconteceu por causa da islamização das Maldivas e do contato com o árabe. Veja o tópico de gramática “Thaana: o alfabeto que nasceu de números” para a história completa.',
      grammar_examples: [
        ['އައްސަލާމު ޢަލައިކުމް!', 'Que a paz esteja com você! (saudação formal)'],
        ['މަރުޙަބާ! ހާލުކިހިނެއް?', 'Oi! Como você está?'],
        ['ޝުކުރިއްޔާ!', 'Obrigado!'],
        ['ދިވެހިބަސް', 'a língua dhivehi (lit. “língua dos ilhéus”)'],
      ],
      character_guide: [
        ['ހ', 'h, como em “hotel”', 'ހާލުކިހިނެއް (como você está?)'],
        ['ށ', 'um “x” retroflexo, só do dhivehi — sem equivalente exato em português', 'ށ (shaviyani)'],
        ['ޏ', 'como o “nh” do português', 'ޏ (gnaviyani)'],
        ['ރ', 'um “r” batido, como o “r” de “caro”', 'ރަތް (vermelho)'],
      ],
    },
    lessons: [
      {
        id: 'dv-u1-l1',
        title: 'Assalaamu alaikum, shukuriyyaa!',
        kind: 'licao',
        words: ['އައްސަލާމު ޢަލައިކުމް', 'މަރުޙަބާ', 'ވަކިވެލަން', 'ދަނީ', 'ޝުކުރިއްޔާ', 'ހާލުކިހިނެއް'],
        cloze: [
          { sentence: '___! ހާލުކިހިނެއް?', answer: 'މަރުޙަބާ', options: ['މަރުޙަބާ', 'ވަކިވެލަން', 'ޝުކުރިއްޔާ'], translation: 'Oi! Como você está?' },
          { sentence: 'ރަނގަޅު, ___!', answer: 'ޝުކުރިއްޔާ', options: ['ޝުކުރިއްޔާ', 'ދަނީ', 'އައްސަލާމު ޢަލައިކުމް'], translation: 'Bem, obrigado!' },
          { sentence: '___!', answer: 'އައްސަލާމު ޢަލައިކުމް', options: ['އައްސަލާމު ޢަލައިކުމް', 'ވަކިވެލަން', 'ދަނީ'], translation: 'Que a paz esteja com você! (saudação formal)' },
        ],
        voice: {
          bot: 'އައްސަލާމު ޢަލައިކުމް! ހާލުކިހިނެއް?',
          botTranslation: 'Que a paz esteja com você! Como você está?',
          expected: ['ރަނގަޅު, ޝުކުރިއްޔާ!', 'ރަނގަޅު', 'ޝުކުރިއްޔާ'],
          hint: 'Responda que está bem (ރަނގަޅު) e agradeça (ޝުކުރިއްޔާ).',
        },
        communityPrompt: 'Escreva três cumprimentos em dhivehi: um formal (އައްސަލާމު ޢަލައިކުމް), um informal (މަރުޙަބާ) e uma despedida (ވަކިވެލަން).',
      },
      {
        id: 'dv-u1-l2',
        title: 'Aharen, kalē, ēnā',
        kind: 'licao',
        words: ['އަހަރެން', 'ކަލޭ', 'އޭނާ', 'އަހަރެމެން', 'މަންމަ', 'ބައްޕަ'],
        cloze: [
          { sentence: '___ ރަނގަޅު.', answer: 'އަހަރެން', options: ['އަހަރެން', 'ކަލޭ', 'އޭނާ'], translation: 'Eu [estou] bem.' },
          { sentence: '___ ކާކު?', answer: 'ކަލޭ', options: ['ކަލޭ', 'އަހަރެން', 'އަހަރެމެން'], translation: 'Quem é você?' },
          { sentence: 'އަހަރެންގެ ___.', answer: 'ބައްޕަ', options: ['ބައްޕަ', 'މަންމަ', 'ކަލޭ'], translation: 'O meu pai.' },
        ],
        voice: {
          bot: 'ކޮން ނަމެއް ކިޔަނީ?',
          botTranslation: 'Qual é o seu nome?',
          expected: ['އަހަރެންގެ ނަން', 'ނަން'],
          hint: 'Diga seu nome começando com “އަހަރެންގެ ނަން…” (aharen̊ge nan̊…, “meu nome é…”).',
        },
        communityPrompt: 'Apresente sua família em dhivehi: “އަހަރެންގެ ބައްޕަ” (meu pai) e “އަހަރެންގެ މަންމަ” (minha mãe).',
      },
      {
        id: 'dv-u1-l3',
        title: 'Test: os primeiros passos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'އައްސަލާމު ޢަލައިކުމް! ކަލޭ ކާކު?',
          botTranslation: 'Que a paz esteja com você! Quem é você?',
          expected: ['މަރުޙަބާ! އަހަރެންގެ ނަން...', 'ރަނގަޅު', 'ޝުކުރިއްޔާ'],
          hint: 'Devolva o cumprimento e diga seu nome com “އަހަރެންގެ ނަން…”.',
        },
        communityPrompt: 'Escreva uma pequena apresentação: cumprimento, “އަހަރެންގެ ނަން…” (meu nome é…) e uma despedida.',
      },
    ],
  },
  {
    id: 'dv-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Kaⁿḍu, mas e cores',
    emoji: '🌊',
    card: {
      id: 'dv-c2',
      title: 'Sete casos — e uma casa que virou gramática',
      emoji: '🧩',
      history:
        'As Maldivas são um arquipélago no Oceano Índico: o mar (ކަނޑު, kaⁿḍu) e o peixe (މަސް, mas) estão no centro da vida ali, o que ajuda a explicar por que “peixe” e até “carne” compartilham a mesma palavra em vocabulários do dhivehi coletados por linguistas. A língua marca a função das palavras na frase com até sete casos gramaticais (direto, dativo, ablativo, genitivo, locativo, instrumental, sociativo) — em vez de preposições soltas como em português.',
      culture_tip:
        'O dhivehi tem três registros de fala, ligados à hierarquia social: “maaiy bas” (o mais formal), “reethi bas” (o padrão, ensinado aqui) e “aadhaige bas” (informal, entre amigos). Isso é mais do que o simples “tu” x “você” de outras línguas.',
      grammar_why:
        'O sufixo de posse “-ge” (como em “އަހަރެންގެ”, “meu”) não surgiu do nada: é a própria palavra “ގެ” (ge, “casa”), que foi, aos poucos, virando também o marcador gramatical de posse. Veja o tópico de gramática “Sete casos” para a tabela completa.',
      grammar_examples: [
        ['ކަނޑު ނޫ.', 'O mar é azul.'],
        ['އަހަރެން މަސް ކެއުން.', 'Eu como peixe. (lit. “eu peixe comendo”, ordem sujeito-objeto-verbo)'],
        ['ގެ', 'casa'],
        ['އަހަރެންގެ ގެ', 'a minha casa (lit. “eu-genitivo casa”)'],
      ],
      character_guide: [
        ['ޅ', 'um “l” retroflexo, só do dhivehi', 'ބަޅު (cachorro)'],
        ['ޑ', 'um “d” retroflexo', 'ޑ (daviyani)'],
        ['ނ', 'n, como em “nada”', 'ނޫ (azul)'],
      ],
    },
    lessons: [
      {
        id: 'dv-u2-l1',
        title: 'Kaⁿḍu, mas, dūni',
        kind: 'licao',
        words: ['ކަނޑު', 'މަސް', 'ދޫނި', 'ބަޅު', 'ފެން', 'ލޮނު'],
        cloze: [
          { sentence: 'އަހަރެންގެ ___.', answer: 'ބަޅު', options: ['ބަޅު', 'މަސް', 'ދޫނި'], translation: 'O meu cachorro.' },
          { sentence: 'އަހަރެންގެ ___.', answer: 'މަސް', options: ['މަސް', 'ފެން', 'ލޮނު'], translation: 'O meu peixe.' },
          { sentence: 'ކަލޭގެ ___.', answer: 'ފެން', options: ['ފެން', 'ލޮނު', 'ކަނޑު'], translation: 'A sua água.' },
        ],
        voice: {
          bot: 'އަހަރެންގެ ބަޅު.',
          botTranslation: 'O meu cachorro.',
          expected: ['އަހަރެންގެ ބަޅު.', 'ބަޅު', 'މަސް'],
          hint: 'Fale sobre um bicho ou comida com “އަހަރެންގެ…” (aharen̊ge…, “meu/minha…”).',
        },
        communityPrompt: 'Escreva sobre o mar e os bichos: “ކަނޑު” (o mar), “މަސް” (peixe) e “އަހަރެންގެ ބަޅު” (meu cachorro).',
      },
      {
        id: 'dv-u2-l2',
        title: 'Bōḍu, kuḍa, rangalhu',
        kind: 'licao',
        words: ['ބޮޑު', 'ކުޑަ', 'ރަނގަޅު', 'ކެއުން', 'ބުއިން', 'އެކެއް'],
        cloze: [
          { sentence: 'އަހަރެން މަސް ___.', answer: 'ކެއުން', options: ['ކެއުން', 'ބުއިން', 'ރަނގަޅު'], translation: 'Eu como peixe.' },
          { sentence: 'އަހަރެން ފެން ___.', answer: 'ބުއިން', options: ['ބުއިން', 'ކެއުން', 'ބޮޑު'], translation: 'Eu bebo água.' },
          { sentence: '___ ގަސް.', answer: 'ބޮޑު', options: ['ބޮޑު', 'ކުޑަ', 'ރަނގަޅު'], translation: 'Árvore grande.' },
        ],
        voice: {
          bot: 'ކަލޭ ފެން ބުއިން?',
          botTranslation: 'Você bebe água?',
          expected: ['ލައްބަ, އަހަރެން ފެން ބުއިން.', 'ލައްބަ', 'ނޫން'],
          hint: 'Responda “ލައްބަ” (sim) ou “ނޫން” (não) e repita “އަހަރެން ފެން ބުއިން”.',
        },
        communityPrompt: 'Escreva o que você come e bebe: “އަހަރެން [palavra] ކެއުން” (eu como…) ou “އަހަރެން [palavra] ބުއިން” (eu bebo…).',
      },
      {
        id: 'dv-u2-l3',
        title: 'Test: kaⁿḍu e cores',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'ކަލޭގެ މަސް ރަނގަޅު?',
          botTranslation: 'O seu peixe é bom?',
          expected: ['ލައްބަ, ރަނގަޅު.', 'ލައްބަ', 'ނޫން'],
          hint: 'Responda “ލައްބަ” ou “ނޫން” e use “ރަނގަޅު” (bom).',
        },
        communityPrompt: 'Escreva cinco frases curtas sobre comida, bichos e cores em dhivehi, usando as palavras desta unidade.',
      },
    ],
  },
];
