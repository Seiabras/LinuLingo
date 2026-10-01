import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do baniwa — por enquanto só A1.1 e A1.2 (pacote incompleto). Fontes: ver o
 * cabeçalho de vocabulario.ts, sobretudo pt.wikipedia.org/wiki/Língua_baniwa (citando Henri Ramirez,
 * “Línguas Arawak da Amazônia Setentrional”, 2001, e “Dicionário da língua baniwa”, 2001) e
 * en.wikipedia.org/wiki/Baniwa_of_Içana_language.
 */
export const GRAMMAR_KPC: GrammarTopic[] = [
  {
    id: 'kpc-g1',
    level: 'A1.1',
    title: 'Pronomes independentes: identidade sem verbo “ser”',
    emoji: '🙋',
    summary: 'O baniwa usa os pronomes independentes sozinhos, sem um verbo “ser”, para dizer quem alguém é.',
    sections: [
      {
        text: 'O baniwa marca a pessoa gramatical de dois jeitos: afixos (prefixos e sufixos) que acompanham o verbo, e pronomes INDEPENDENTES (nhúa, phía, lhía, rhúa, wháa, hía, nháa), usados sozinhos quando não há um verbo de apoio — por exemplo, ao responder uma pergunta ou ao se apresentar. É por isso que “Nhúa Walimanai” (lit. “eu, walimanai”) já vale como “eu sou baniwa”: não existe, nessa construção, um verbo equivalente a “ser”.',
        table: {
          head: ['Pessoa', 'Pronome independente', 'Prefixo verbal'],
          rows: [
            ['1ª singular (eu)', 'nhúa', 'nu-'],
            ['2ª singular (tu/você)', 'phía', 'pi-'],
            ['3ª singular não-feminina (ele)', 'lhía', 'li-'],
            ['3ª singular feminina (ela)', 'rhúa', 'ru-'],
            ['1ª plural (nós)', 'wháa', 'wa-'],
            ['3ª plural (eles/elas)', 'nháa', 'na-'],
          ],
        },
        examples: [
          ['Nhúa Walimanai.', 'Eu sou walimanai (baniwa).'],
          ['Nukapa.', 'Eu vejo. (nu- + kapa, “ver”)'],
          ['Pikapanhua.', 'Tu me vês. (pi- + kapa + -nhua, “me”)'],
        ],
      },
    ],
    pitfalls: [
      'Procurar um verbo “ser”/“estar” para traduzir frases como “eu sou baniwa”: o baniwa simplesmente justapõe o pronome independente à palavra que identifica a pessoa, sem verbo.',
      'Confundir “lhía” (ele) com “rhúa” (ela): a 3ª pessoa do singular muda de forma conforme o referente é feminino ou não-feminino — é a única distinção de gênero gramatical da língua.',
    ],
    quiz: [
      { question: 'Como se diz “eu sou baniwa” em baniwa?', options: ['Nhúa Walimanai.', 'Nhúa nii Walimanai.', 'Walimanai sou nhúa.'], answer: 'Nhúa Walimanai.', explanation: 'O pronome independente “nhúa” (eu) é usado sozinho, sem verbo “ser”, para identificar quem fala.' },
      { question: 'Qual pronome independente quer dizer “ela”?', options: ['rhúa', 'lhía', 'nháa'], answer: 'rhúa', explanation: '“Lhía” é “ele” (não-feminino); “nháa” é “eles/elas” (plural).' },
    ],
  },
  {
    id: 'kpc-g2',
    level: 'A1.1',
    title: 'Perguntas: “káphaa” e as palavras interrogativas',
    emoji: '❓',
    summary: 'As perguntas de sim/não começam com “káphaa”; as perguntas abertas usam “kúa” e suas variações.',
    sections: [
      {
        text: 'No baniwa, as sentenças interrogativas se dividem em dois tipos. As de resposta sim/não começam pela partícula “káphaa”. As de resposta variada (quem?, o quê?, onde?, quando?, por quê?, quantos?) começam pelo morfema “kúa” ou por uma de suas variações: “kúame” (como?), “kuawada” (por quê?), “kalhe” (onde?) e “kenakuda” (quantos?).',
        table: {
          head: ['Palavra', 'Sentido', 'Exemplo'],
          rows: [
            ['káphaa', 'pergunta de sim/não', 'káphaa lideeka mukawa? (ele trouxe a espingarda?)'],
            ['kúa', 'o quê?, quem?', 'kúa íinaiwatsa núawa? (com quem irei?)'],
            ['kuamekawali', 'quando?', 'kuamekawali rúukawa (quando ela chegou?)'],
            ['kalhe', 'onde?', 'kalhe pihániri? (onde está o seu pai?)'],
          ],
        },
        examples: [
          ['Káphaa phía Walimanai?', 'Você é walimanai?'],
          ['Kúa íinaiwatsa núawa?', 'Com quem irei?'],
        ],
      },
    ],
    pitfalls: [
      'Fazer uma pergunta de sim/não só pela entonação, como em português: o baniwa marca essas perguntas com a partícula “káphaa” no início da frase.',
      'Usar “kúa” para tudo: cada pergunta aberta tem sua própria variação (“kalhe”, onde; “kenakuda”, quantos…), não é uma palavra única para todas as perguntas.',
    ],
    quiz: [
      { question: 'Qual palavra abre uma pergunta de sim/não em baniwa?', options: ['Káphaa', 'Kúa', 'Ñame'], answer: 'Káphaa', explanation: '“Káphaa” marca especificamente as perguntas de resposta sim/não.' },
      { question: 'O que “kalhe” pergunta?', options: ['Onde?', 'Quando?', 'Quantos?'], answer: 'Onde?', explanation: '“Kenakuda” pergunta “quantos?” e “kuamekawali” pergunta “quando?”.' },
    ],
  },
  {
    id: 'kpc-g3',
    level: 'A1.2',
    title: 'Classificadores e numerais: contando pelas mãos',
    emoji: '🖐️',
    summary: 'Os numerais do baniwa vão de 1 a 4 com raízes próprias; a partir de 5, a língua conta pelas mãos.',
    sections: [
      {
        text: 'O baniwa tem classificadores: morfemas que marcam a forma física das coisas e se prendem a substantivos, numerais e adjetivos. Alguns exemplos: “-aápa” (forma oblonga: aves, tubérculos, bananas), “-da” (forma redonda: animais, frutos), “-iíta” (achatado ou forma humana) e “-áanhaa” (líquidos). Os numerais cardinais de 1 a 4 têm raízes próprias (apaa-, dzama-, madali-, likua-) que podem vir com um classificador, como em “dzama-ápa palana” (duas bananas, com o classificador de forma oblonga). A partir de 5, o baniwa usa as mãos como base: “apeéma pakáapi” (uma mão) é cinco, e “dzameéma pakáapi” (duas mãos) é dez.',
        table: {
          head: ['Classificador', 'Forma', 'Exemplo de classe'],
          rows: [
            ['-aápa', 'oblonga', 'aves, tubérculos, bananas'],
            ['-da', 'redonda', 'animais, frutos'],
            ['-iíta', 'achatada/humana', 'macacos, pessoas'],
            ['-áanhaa', 'líquida', 'água, lágrimas'],
          ],
        },
        examples: [
          ['Apá íita.', 'Uma canoa.'],
          ['Dzamaápa palana.', 'Duas bananas.'],
          ['Apeéma pakáapi.', 'Cinco (lit. “uma mão”).'],
        ],
      },
    ],
    pitfalls: [
      'Esperar uma palavra própria para cada número, como em português: acima de quatro, o baniwa conta por múltiplos da mão (“pakáapi”), não por raízes numéricas novas.',
      'Esquecer o classificador em certos numerais: “duas bananas” leva o classificador “-ápa” (dzamaápa), enquanto “uma canoa” não leva esse mesmo classificador (apá íita) — cada substantivo combina com o classificador que descreve a sua forma.',
    ],
    quiz: [
      { question: 'Como se diz “cinco” em baniwa?', options: ['Apeéma pakáapi (uma mão)', 'Likua', 'Dzameéma pakáapi'], answer: 'Apeéma pakáapi (uma mão)', explanation: '“Dzameéma pakáapi” (duas mãos) é dez, não cinco.' },
      { question: 'O que o classificador “-aápa” marca?', options: ['Forma oblonga (aves, tubérculos, bananas)', 'Forma redonda', 'Líquidos'], answer: 'Forma oblonga (aves, tubérculos, bananas)', explanation: '“-da” marca forma redonda, e “-áanhaa” marca líquidos.' },
    ],
  },
  {
    id: 'kpc-g4',
    level: 'A1.2',
    title: 'Nomes dependentes: a família sempre “de alguém”',
    emoji: '👨‍👩‍👧',
    summary: 'Termos de parentesco e partes do corpo são nomes dependentes: exigem sempre um prefixo possessivo.',
    sections: [
      {
        text: 'O baniwa distingue nomes INDEPENDENTES, que funcionam sozinhos (“tsíino”, cão; “Péduru”, Pedro), de nomes DEPENDENTES, que precisam de um prefixo pessoal indicando o possuidor: partes do corpo (“-káapi”, mão de…), anatomia animal/vegetal (“-ke”, galho de…) e termos de parentesco (“-hániri”, pai de…). Por isso, embora os dicionários citem a forma de parentesco sem prefixo (“hániri”, pai), na fala real ela sempre aparece acompanhada: “nu-hániri” (meu pai), “pi-hadua” (tua mãe).',
        table: {
          head: ['Prefixo', 'Pessoa', 'Exemplo'],
          rows: [
            ['nu-', 'meu', 'nu-hániri (meu pai)'],
            ['pi-', 'teu', 'pi-hadua (tua mãe)'],
            ['wa-', 'nosso', 'wa-iri (nosso filho)'],
          ],
        },
        examples: [
          ['Nu-hániri.', 'Meu pai.'],
          ['Nu-hadua.', 'Minha mãe.'],
          ['Runáapa.', 'O braço dela. (ru- + náapa, braço)'],
        ],
      },
    ],
    pitfalls: [
      'Usar um termo de parentesco sozinho, sem prefixo, esperando que funcione como em português (“pai” sem “meu”/“seu”): no baniwa, esses nomes são dependentes e soam incompletos sem o prefixo possessivo.',
      'Confundir nomes dependentes (parentesco, partes do corpo) com nomes independentes (como “tsíino”, cão, ou nomes próprios): só os dependentes exigem prefixo.',
    ],
    quiz: [
      { question: 'Como se diz “meu pai” em baniwa?', options: ['Nu-hániri.', 'Hániri.', 'Phía hániri.'], answer: 'Nu-hániri.', explanation: '“Hániri” é um nome dependente: precisa do prefixo possessivo “nu-” (meu) na fala real.' },
      { question: 'Qual destas palavras é um nome INDEPENDENTE (funciona sem prefixo pessoal)?', options: ['Tsíino (cão)', 'Hániri (pai)', 'Hadua (mãe)'], answer: 'Tsíino (cão)', explanation: '“Hániri” e “hadua” são nomes dependentes de parentesco; “tsíino” funciona sozinho.' },
    ],
  },
];
