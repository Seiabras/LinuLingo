import type { UnitSeed } from '../types';

/**
 * Trilha do kaingang — por enquanto só as duas unidades do nível A1 (pacote incompleto, ver
 * `incomplete` em index.ts). Os exemplos giram em torno de uma aldeia (ẽmã) numa terra indígena
 * kaingang do sul do Brasil, como a Terra Indígena Xapecó (SC) ou Nonoai (RS) — territórios citados
 * na página do povo kaingang no ISA (pib.socioambiental.org/pt/Povo:Kaingang).
 */
export const UNITS_KGP: UnitSeed[] = [
  {
    id: 'kgp-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Inh kanhgág: eu, você, a família',
    emoji: '🪶',
    card: {
      id: 'kgp-c1',
      title: 'Kanhgág: um dos maiores povos indígenas do Brasil',
      emoji: '🪶',
      history:
        'O kaingang (nome próprio: kanhgág, “pessoa, gente”) é falado por cerca de 35 a 40 mil pessoas no Rio Grande do Sul, em Santa Catarina, no Paraná e em São Paulo — um dos povos indígenas mais numerosos do Brasil, espalhado por mais de 30 terras indígenas, como Xapecó (SC) e Nonoai (RS). É uma língua jê, do tronco Macro-Jê: não tem nenhum parentesco com o tupi antigo nem com o guarani (línguas tupi-guarani), as outras línguas indígenas brasileiras já neste app — são famílias diferentes, tão distantes entre si quanto o português é do finlandês. A sociedade kaingang tradicional se organiza em duas metades (kamé e kairu), que regulam o casamento e vários rituais, incluindo o kiki, cerimônia em homenagem aos mortos. A língua foi descrita em detalhe pela linguista alemã Ursula Wiesemann, autora do “Dicionário Kaingang-Português Português-Kaingang” (2ª ed., 2011) e da ortografia oficial, com 28 letras, usada neste curso.',
      culture_tip:
        'As fontes consultadas para este curso (dicionário de Wiesemann, Wikipédia e o ISA) não registram uma palavra fixa para “oi” ou “tchau” em kaingang, parecida com o “olá” do português — por isso o curso usa “Inh kanhgág” (“eu, kaingang”), uma forma de apresentação real, e não uma saudação inventada. É comum em descrições de línguas pouco documentadas faltar justamente esse tipo de palavra do dia a dia, que os dicionários acadêmicos nem sempre registram.',
      grammar_why:
        'Repare que “ti” (ele) e “fi” (ela) só existem na 3ª pessoa: “inh” (eu), “ã” (tu/você) e “ẽg” (nós) não mudam conforme o gênero de quem fala. É a única distinção de gênero gramatical do kaingang — não há gênero (m/f) em substantivo nem em adjetivo, diferente do português.',
      grammar_examples: [
        ['Inh kanhgág.', '“Eu, kaingang” — forma de se apresentar pela identidade do povo.'],
        ['Ti kófa.', '“Ele, idoso” — ti (ele) e kófa (velho, idoso) um do lado do outro, sem verbo “ser”.'],
        ['Inh panh mág.', '“Meu pai grande” — panh (pai) e mág (grande).'],
        ['Ã kanhgág?', '“Você, kaingang?” — mesma palavra “kanhgág” usada como pergunta sobre a identidade de quem ouve.'],
      ],
      character_guide: [
        ['á', 'vogal central, entre o “a” e o “é”, sem exemplo igual no português (IPA /ə/)', 'régre (“dois”, soa só aproximado para quem fala português)'],
        ['y', 'vogal central alta, atrás da boca, sem equivalente no português (IPA /ɨ/)', 'kysã (lua) — nem “i” nem “u”, um som só do kaingang'],
        ['ã, ẽ, ĩ, ũ, ỹ', 'vogal nasalada, como no português “mãe” ou “bom”', 'nĩjẽ (nariz)'],
        ['nh', 'som de “nh” do português, como em “ninho”', 'kanhgág (pessoa kaingang)'],
        ["'", 'oclusiva glotal: uma pequena parada no ar, como a pausa de “uh-oh” em inglês', "pén'ó (batata)"],
      ],
    },
    lessons: [
      {
        id: 'kgp-u1-l1',
        title: 'Inh, ã, ti, fi: os pronomes',
        kind: 'licao',
        words: ['inh', 'ã', 'ti', 'fi', 'ẽg', 'ãjag'],
        cloze: [
          { sentence: '___ kanhgág.', answer: 'Inh', options: ['Inh', 'Ã', 'Ti'], translation: '“Eu, kaingang.”' },
          { sentence: '___ kófa.', answer: 'Ti', options: ['Ti', 'Fi', 'Ẽg'], translation: '“Ele, idoso.”' },
          { sentence: '___ sĩnvĩ.', answer: 'Fi', options: ['Fi', 'Ti', 'Ãjag'], translation: '“Ela, bonita.”' },
        ],
        voice: {
          bot: 'Ã kanhgág?',
          botTranslation: 'Você, kaingang?',
          expected: ['Inh kanhgág', 'inh kanhgág'],
          hint: 'Responda com “Inh kanhgág” (eu, kaingang).',
        },
        communityPrompt: 'Escreva os seis pronomes pessoais do kaingang vistos nesta lição: inh, ã, ti, fi, ẽg, ãjag.',
      },
      {
        id: 'kgp-u1-l2',
        title: 'A família (panh, nỹ, gĩr)',
        kind: 'licao',
        words: ['panh', 'nỹ', 'gĩr', 'ũn gré', 'ũn tỹtá', 'kófa'],
        cloze: [
          { sentence: 'Inh ___ mág.', answer: 'panh', options: ['panh', 'nỹ', 'gĩr'], translation: '“Meu pai grande.”' },
          { sentence: 'Inh ___ sĩnvĩ.', answer: 'nỹ', options: ['nỹ', 'ũn gré', 'kófa'], translation: '“Minha mãe bonita.”' },
          { sentence: '___ mrir.', answer: 'Gĩr', options: ['Gĩr', 'Kófa', 'Ũn tỹtá'], translation: '“Criança feliz.”' },
        ],
        voice: {
          bot: 'Ẽ, ã ũn gré?',
          botTranslation: 'E então, você, homem?',
          expected: ['Inh ũn gré', 'inh ũn tỹtá', 'inh kófa'],
          hint: 'Responda dizendo quem você é: “Inh ũn gré” (eu, homem) ou “Inh ũn tỹtá” (eu, mulher).',
        },
        communityPrompt: 'Cite três palavras da família em kaingang: panh (pai), nỹ (mãe) e gĩr (criança).',
      },
      {
        id: 'kgp-u1-l3',
        title: 'Prova: eu, você e a família',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ã kanhgág? Ã ũn gré, ũn tỹtá?',
          botTranslation: 'Você, kaingang? Você, homem ou mulher?',
          expected: ['Inh kanhgág, inh ũn gré', 'inh kanhgág, inh ũn tỹtá'],
          hint: 'Diga “Inh kanhgág” e depois “inh ũn gré” (homem) ou “inh ũn tỹtá” (mulher).',
        },
        communityPrompt: 'Escreva uma apresentação curta em kaingang usando pelo menos três palavras desta unidade (pronome, família).',
      },
    ],
  },
  {
    id: 'kgp-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'O corpo, a mata e os bichos',
    emoji: '🐆',
    card: {
      id: 'kgp-c2',
      title: 'O pinhão e a mata de araucárias',
      emoji: '🌰',
      history:
        'Tradicionalmente, os kaingang viviam da caça, da coleta e do cultivo em meio à mata de araucárias do planalto sul-brasileiro — o pinhão (fág, que também dá nome ao próprio pinheiro) era e continua sendo um alimento central, colhido no inverno e assado na fogueira (pĩ). O milho (gãr) também tem um papel importante: dele se fazia tradicionalmente uma bebida fermentada, o kyfe. Hoje a maior parte das terras indígenas kaingang fica em áreas bem menores do que o território original, mas a língua segue viva, com cerca de 60 a 65% do povo falando kaingang no dia a dia, em casa e nas escolas indígenas bilíngues.',
      culture_tip:
        'A palavra “kuprĩg” (espírito, alma) e a figura do kujá (curandeiro, xamã) mostram como partes da cosmologia kaingang atravessam a língua: cuidar do corpo (krĩ, cabeça; pẽ, braço) e cuidar do espírito não são coisas separadas. O kujá é quem tradicionalmente faz essa ponte, usando plantas (ẽkré) e o conhecimento dos ancestrais (jógjóg ve).',
      grammar_why:
        'O kaingang é uma língua SOV (sujeito-objeto-verbo): o verbo vem por último, como em “Ti tóg rãgró krãn huri” (“ele plantou feijão”, lit. “ele [sujeito] feijão [objeto] plantou-já [verbo]”). Os verbos não se conjugam por pessoa como em português (não existe algo como “planto/plantas/planta”): quem faz a ação é mostrado pelo pronome antes do verbo, não por uma terminação nele.',
      grammar_examples: [
        ['Mĩg mág.', '“Onça grande” — substantivo e adjetivo lado a lado, sem verbo “ser”.'],
        ['Pỹn sãn inh.', '“Pisei numa cobra” (lit. “cobra pisou eu”) — frase do próprio dicionário de Wiesemann.'],
        ['Ti tóg rãgró krãn huri.', '“Ele plantou feijão” — ordem sujeito-objeto-verbo, com a partícula “tóg” depois do sujeito.'],
        ['Inh goj ki nĩ.', '“Eu estou na água” — “ki” é uma posposição (“em”), que vem depois da palavra “goj” (água), não antes.'],
      ],
      character_guide: [
        ['g', 'no final de sílaba, soa como um “n” nasal no fundo da garganta (IPA /ŋ/), não como “g” de “gato”', 'mág (“man”, grande)'],
        ['j', 'som de “i” consoantal, parecido com o “y” do inglês “yes”', 'jã (dente)'],
        ['v', 'sempre o som de “u” consoantal (IPA /w/), como o “w” do inglês “water”', 'vyj (arco)'],
        ['s', 'sempre o som de “ch” do português, nunca de “s” ou “z”', 'sĩnvĩ (bonito)'],
      ],
    },
    lessons: [
      {
        id: 'kgp-u2-l1',
        title: 'O corpo (krĩ, pẽ, jã)',
        kind: 'licao',
        words: ['krĩ', 'pẽ', 'jã', 'jẽnky', 'nĩjẽ', 'nĩgrẽg'],
        cloze: [
          { sentence: 'Inh ___.', answer: 'krĩ', options: ['krĩ', 'pẽ', 'jã'], translation: '“Minha cabeça.”' },
          { sentence: 'Inh ___.', answer: 'nĩjẽ', options: ['nĩjẽ', 'jẽnky', 'nĩgrẽg'], translation: '“Meu nariz.”' },
          { sentence: 'Inh ___.', answer: 'nĩgrẽg', options: ['nĩgrẽg', 'pẽ', 'krĩ'], translation: '“Minha orelha.”' },
        ],
        voice: {
          bot: 'Hẽ tag?',
          botTranslation: 'O que é isto? (lit. “qual isto”)',
          expected: ['Inh krĩ', 'inh pẽ', 'inh jã'],
          hint: 'Responda nomeando uma parte do corpo: “Inh krĩ” (minha cabeça), “Inh pẽ” (meu braço) etc.',
        },
        communityPrompt: 'Escreva três partes do corpo em kaingang vistas nesta lição: krĩ (cabeça), pẽ (braço) e jã (dente).',
      },
      {
        id: 'kgp-u2-l2',
        title: 'A mata e os bichos',
        kind: 'licao',
        words: ['goj', 'pĩ', 'mĩg', 'pỹn', 'fãfãn', 'kasor'],
        cloze: [
          { sentence: '___ kavéj.', answer: 'Goj', options: ['Goj', 'Pĩ', 'Mĩg'], translation: '“Água suja.”' },
          { sentence: '___ sãn inh.', answer: 'Pỹn', options: ['Pỹn', 'Fãfãn', 'Kasor'], translation: '“Pisei numa cobra.”' },
          { sentence: '___ mág.', answer: 'Mĩg', options: ['Mĩg', 'Goj', 'Jã'], translation: '“Onça grande.”' },
        ],
        voice: {
          bot: 'Hẽ tag? Mĩg?',
          botTranslation: 'O que é isto? Onça?',
          expected: ['Eẽ, mĩg', 'mĩg', 'Pỹn'],
          hint: 'Confirme ou corrija: diga o nome do bicho, como “mĩg” (onça) ou “pỹn” (cobra).',
        },
        communityPrompt: 'Fale sobre a mata usando pelo menos duas palavras desta lição: um bicho (mĩg, pỹn, fãfãn ou kasor) e a água (goj) ou o fogo (pĩ).',
      },
      {
        id: 'kgp-u2-l3',
        title: 'Prova: corpo e natureza',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Hẽ tag? Ã krĩ mág?',
          botTranslation: 'O que é isto? Sua cabeça é grande?',
          expected: ['Inh krĩ mág', 'inh krĩ'],
          hint: 'Nomeie uma parte do corpo e descreva com “mág” (grande) ou outro adjetivo aprendido.',
        },
        communityPrompt: 'Escreva um parágrafo curto em kaingang descrevendo um bicho da mata e uma parte do seu corpo, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
];
