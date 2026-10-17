import type { UnitSeed } from '../types';

/**
 * Trilha do kaingang, do A1.1 ao teto (A2.2). Os exemplos giram em torno de uma aldeia (ẽmã) numa terra indígena
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
      // Felisbino e Silveira, Signum 25(3), 2022, p. 54–58: conversas por WhatsApp entre falantes de oito
      // terras indígenas do Paraná, abertas com “Ajag mỹ há kara?” e “Ã mỹ há?”, respondidas com “Hỹ’ỹ,
      // há inh jẽ.”
      culture_tip:
        'Não há, nas fontes, um “oi” solto como o do português. Nas conversas gravadas por Felisbino e Silveira (2022) com falantes do Paraná, a conversa abre com uma pergunta: “Ã mỹ há?” (“você está bem?”) ou, para o grupo, “Ajag mỹ há kara?” (“vocês todos estão bem?”). A resposta é “Hỹ\'ỹ, há inh jẽ.” (“sim, estou bem”). As lições extras desta unidade ensinam esse começo de conversa.',
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
          bot: 'Ã ũn gré?',
          botTranslation: 'Você, homem?',
          expected: ['Inh ũn gré', 'inh ũn tỹtá', 'inh kófa'],
          hint: 'Responda dizendo quem você é: “Inh ũn gré” (eu, homem) ou “Inh ũn tỹtá” (eu, mulher).',
        },
        communityPrompt: 'Cite três palavras da família em kaingang: panh (pai), nỹ (mãe) e gĩr (criança).',
      },
      // ── Lições extras do A1.1 (17/10/2026). Frases de Felisbino e Silveira (Signum, 2022: conversas
      // reais entre falantes do Paraná, com tradução), de Zilli (UEL, 2024: negação, com exemplos de
      // Wiesemann 2011), de Ferro (UEL, 2021) e de Lima (UEL, 2023). Página ao lado de cada frase.
      {
        id: 'kgp-u1-l4',
        title: 'Ã mỹ há? Sim, não e “estou bem”',
        kind: 'licao',
        words: ["hỹ'ỹ", 'vó', 'há', 'nejé', 'tĩg', 'mũ jé'],
        cloze: [
          // Felisbino e Silveira 2022, p. 56 (pergunta da pesquisadora e resposta de K9)
          { sentence: "Ã mỹ há? — ___, há inh jẽ.", answer: "Hỹ'ỹ", options: ["Hỹ'ỹ", 'Vó', 'Nejé'], translation: '“Você está bem? — Sim, estou bem.”' },
          // Zilli 2024, p. 60 (Wiesemann 2011, s.v. mỹ vó)
          { sentence: 'Ã mỹ vé? — ___.', answer: 'Vó', options: ['Vó', "Hỹ'ỹ", 'Há'], translation: '“Você viu? — Não.”' },
          // Zilli 2024, p. 65 (Wiesemann 2011, s.v. nejé)
          { sentence: 'Ã mỹ inh mré tĩg mũ? — ___.', answer: 'Nejé', options: ['Nejé', 'Há', 'Mũ jé'], translation: '“Você vai comigo? — De jeito nenhum.”' },
        ],
        voice: {
          // Felisbino e Silveira 2022, p. 56
          bot: 'Ã mỹ há?',
          botTranslation: 'Você está bem?',
          expected: ["Hỹ'ỹ, há inh jẽ.", "hỹ'ỹ, há inh jẽ", "hỹ'ỹ"],
          hint: 'Responda como os falantes da pesquisa: “Hỹ\'ỹ, há inh jẽ.” (sim, estou bem).',
        },
        // Lima 2023, p. 73 (ex. 27: “– Sĩg ta.” ‘Estou indo embora’ “– Ha tĩg.” ‘Pode ir’)
        communityPrompt: 'Escreva uma despedida curta como a do livro de Lima: alguém diz “Sĩg ta.” (estou indo embora) e o outro responde “Ha tĩg.” (pode ir).',
      },
      {
        id: 'kgp-u1-l5',
        title: 'Ẽg vĩ: falar, ler e escrever',
        kind: 'licao',
        words: ['vĩ', 'rán', 'tugtó', 'vẽnhrán', 'kanhrãn', 'pãgsĩ'],
        cloze: [
          // Felisbino e Silveira 2022, p. 56 (pergunta da pesquisadora)
          { sentence: 'Ã mỹ ẽg ___ rán há nĩ?', answer: 'vĩ', options: ['vĩ', 'rán', 'pãgsĩ'], translation: '“Você sabe escrever na nossa língua?”' },
          // Ferro 2021, p. 74, ex. 12
          { sentence: 'Ã mỹ ___ to há nĩ?', answer: 'tugtó', options: ['tugtó', 'kanhrãn', 'vĩ'], translation: '“Você gosta de ler?”' },
          // Felisbino e Silveira 2022, p. 57 (K11, da TI Marrecas, que diz “ijóg” onde Apucaraninha diz “isóg”, eu)
          { sentence: 'Ha ijóg ___ tĩ.', answer: 'vẽnhrán', options: ['vẽnhrán', 'tugtó', 'pãgsĩ'], translation: '“Eu estudo.”' },
        ],
        voice: {
          // Felisbino e Silveira 2022, p. 56 (pergunta da pesquisadora e resposta de K9)
          bot: 'Ã mỹ ẽg vĩ rán há nĩ?',
          botTranslation: 'Você sabe escrever na nossa língua?',
          expected: ['Ka ijóg rán pãgsĩ nĩgtĩ gé.', 'rán pãgsĩ', "hỹ'ỹ", 'vó'],
          hint: 'Diga que escreve um pouco, como K9 na pesquisa: “Ka ijóg rán pãgsĩ nĩgtĩ gé.” Ou só “Hỹ\'ỹ” (sim) ou “Vó” (não).',
        },
        // Felisbino e Silveira 2022, p. 58 (K14: “Inh nỹ fi tóg inh kanhrãn é.” ‘A minha mãe me ensinava.’)
        communityPrompt: 'Conte quem te ensinou a ler, como K14 na pesquisa de Felisbino e Silveira: “Inh nỹ fi tóg inh kanhrãn é.” (a minha mãe me ensinava).',
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
          // “hỹ’ỹ” (sim): Zilli 2024, p. 79, e Felisbino e Silveira 2022, p. 56
          expected: ["Hỹ'ỹ, mĩg", 'mĩg', 'Pỹn'],
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
  // ══ A2.1 e A2.2 (17/10/2026) ══
  // Fontes (ver o cabeçalho do bloco A2 em vocabulario): Ferro (UEL, 2021) = FE21; Lima (UEL, 2023) =
  // LI23; Zilli (UEL, 2024) = ZI24; Oliveira (UEL, 2026) = OL26; Felisbino e Silveira (Signum, 2022) =
  // FS22; D'Angelis, “A língua Kaingang” (Portal Kaingang) = DA. Página impressa ao lado de cada frase.
  // Todas as frases em kaingang destas duas unidades são frases das fontes; nenhuma foi montada.
  // Variedade: o kaingang do Paraná ao norte do Iguaçu, quase sempre da Terra Indígena Apucaraninha.
  {
    id: 'kgp-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Ũ nỹ gãr kó? Perguntas, bichos e comida',
    emoji: '❓',
    card: {
      id: 'kgp-c3',
      title: 'Uma gramática feita em Apucaraninha',
      emoji: '📘',
      // OL26 p. 14 (projeto GraBiM, coordenado por Marcelo Silveira, para uma gramática pedagógica do
      // kaingang de Apucaraninha, perto de Tamarana, PR); FS22 p. 49 (Damaris Kanĩnsãnh Felisbino,
      // professora do Colégio Estadual Indígena Benedito Rokag); DA p. 2 (os dois dialetos do Paraná);
      // ISA, “Kaingang” (os cinco dialetos de Wiesemann).
      history:
        'Do A2 em diante, o curso segue as pesquisas da Universidade Estadual de Londrina, no projeto “Gramática, Bilinguismo e Multietnia”, coordenado por Marcelo Silveira. O grupo trabalha com falantes da Terra Indígena Apucaraninha, perto de Tamarana (PR), para escrever uma gramática pedagógica para as escolas da aldeia. Uma das colaboradoras é Damaris Kanĩnsãnh Felisbino, professora kaingang. Wiesemann dividiu a língua em cinco dialetos, e Apucaraninha fica no do Paraná, ao norte do rio Iguaçu.',
      // OL26, resumo em kaingang (“ga tỹ Karỹnĩnh (PR)”) e p. 85 (ficha SẼSĨ); FE21 p. 73 (Tubarão Indígena)
      culture_tip:
        'Em kaingang, Apucaraninha é “Karỹnĩnh”. Uma frase do vocabulário de Oliveira (2026) diz: “Karỹnĩnh ki sẽsĩ e vỹ kynkyr sĩvĩ han tĩ.” (“No Apucaraninha há muitos passarinhos que cantam bonito.”). E as perguntas que Ferro (2021) gravou falam da vida de lá, como o time de futebol da aldeia: “Tubarão ĩnhigenã ag mỹ jogo ki vẽnhmã?” (“O Tubarão Indígena ganhou o jogo?”).',
      // FE21 p. 72–74 (mỹ logo depois do sujeito; sem entonação própria, segundo a colaboradora)
      grammar_why:
        'Para perguntar “sim ou não”, ponha “mỹ” logo depois de quem faz a ação: “Ã mỹ to hé?” (“você caiu?”). O verbo continua no fim. Segundo Ferro, a pergunta nem precisa de entonação própria: o “mỹ” já avisa. Com palavras como “ne” (o quê) e “hẽ tá” (onde), o “mỹ” sai.',
      grammar_examples: [
        ['Ã mỹ to hé?', '“Você caiu?” (Ferro, p. 74)'],
        ['João mỹ pũ kó?', '“João comeu o pão?” (p. 72)'],
        ['Ũ nỹ gãr kó?', '“Quem comeu o milho?” (p. 76)'],
        ['João vỹ ne kó?', '“O que João comeu?” (p. 75)'],
      ],
      // FE21 p. 72 (mỹ), p. 76 (nỹ), p. 75 (vỹ); LI23 p. 12 (quadro das vogais: y = /ɨ/; ỹ é a nasal)
      character_guide: [
        ['mỹ', 'partícula da pergunta de sim ou não, logo depois do sujeito', 'Ã mỹ to hé? (você caiu?)'],
        ['nỹ', 'vem depois de “ũ” quando “quem” faz a ação', 'Ũ nỹ gãr kó? (quem comeu o milho?)'],
        ['vỹ', 'marca quem faz a ação, depois de um nome', 'Pirã vỹ mro. (o peixe nadou)'],
        ['ỹ', 'o “y” nasal: a vogal central alta, dita pelo nariz', 'mỹ, vỹ, nỹ'],
      ],
    },
    lessons: [
      {
        id: 'kgp-u3-l1',
        title: 'Os bichos de Karỹnĩnh',
        kind: 'licao',
        words: ['kajẽr', 'pẽngre', 'pivinh', 'kasĩn', 'hoghog', 'pépo'],
        cloze: [
          // FE21 p. 73, ex. 8
          { sentence: 'Pivinh vỹ ___ kó.', answer: 'kasĩn', options: ['kasĩn', 'pépo', 'kajẽr'], translation: '“O gato comeu o rato.”' },
          // FE21 p. 73, ex. 6 (grafado “Hog hog” na fonte)
          { sentence: 'Hoghog vỹ ___ fi tén.', answer: 'pẽngre', options: ['pẽngre', 'pivinh', 'kasĩn'], translation: '“O cachorro matou a galinha.”' },
          // OL26 p. 80
          { sentence: '___ vỹ vãnh kãtá vẽnhpéju kỹ nĩ.', answer: 'Kajẽr', options: ['Kajẽr', 'Pẽngre', 'Hoghog'], translation: '“O macaco está escondido na floresta.”' },
        ],
        voice: {
          // ZI24 p. 79 (quadro 12)
          bot: 'Ã mỹ vé?',
          botTranslation: 'Você viu?',
          expected: ["Hỹ'ỹ.", "hỹ'ỹ", 'Vó.', 'vó'],
          hint: 'Responda “Hỹ\'ỹ” (sim) ou “Vó” (não). As duas respostas aparecem assim no trabalho de Zilli (2024).',
        },
        // OL26 p. 84 (ficha PÉPO) e p. 79 (ficha HOGHOG)
        communityPrompt: 'Copie e traduza duas frases das fichas de Oliveira (2026): “Pépo vỹ kuty ra rĩr nĩgtĩ.” (o sapo fica ativo de noite) e “Pivinh vỹ kasĩn kó.” (o gato comeu o rato). Depois sublinhe o “vỹ” e diga quem faz a ação.',
      },
      {
        id: 'kgp-u3-l2',
        title: 'Ũ nỹ? Hẽra? Perguntas do dia a dia',
        kind: 'licao',
        words: ['kó', 'kron', 'jun', 'to hé', 'hẽra', 'hẽ ri ken kỹ'],
        cloze: [
          // FE21 p. 72, ex. 3
          { sentence: 'João mỹ pũ ___?', answer: 'kó', options: ['kó', 'kron', 'jun'], translation: '“João comeu o pão?”' },
          // ZI24 p. 62 (Tabosa 2014, p. 213)
          { sentence: 'Ã mỹ kafe ___ mũ, goj vó?', answer: 'kron', options: ['kron', 'kó', 'to hé'], translation: '“Você quer beber café ou água?”' },
          // FE21 p. 72, ex. 2
          { sentence: 'Maria fi mỹ ___?', answer: 'to hé', options: ['to hé', 'kó', 'kron'], translation: '“Maria caiu?”' },
        ],
        voice: {
          // FE21 p. 75, ex. 17 (pergunta) e p. 80, ex. 52 (resposta)
          bot: 'Hẽra Maria fi vyr?',
          botTranslation: 'Aonde a Maria vai?',
          expected: ['Escola ra fi vỹr.', 'escola ra fi vỹr', 'escola ra'],
          hint: 'Diga que ela foi para a escola: “Escola ra fi vỹr.” O “ra” (para) vem depois do lugar, e o “fi” (ela) vem no fim, antes do verbo.',
        },
        // FE21 p. 77, ex. 25
        communityPrompt: 'Escreva a pergunta que Ferro gravou depois de um jogo: “Ẽg tỹ hẽ ri ken kỹ jogo kren né?” (por que nós perdemos o jogo?). Depois escreva uma pergunta sua com “hẽra” (para onde) e outra com “hẽ tá” (onde).',
      },
      {
        id: 'kgp-u3-l3',
        title: 'Prova: perguntas, bichos e comida',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          // ZI24 p. 62 (Tabosa 2014, p. 213)
          bot: 'Ã mỹ kafe kron mũ, goj vó?',
          botTranslation: 'Você quer beber café ou água?',
          expected: ['Kafe.', 'kafe', 'Goj.', 'goj'],
          hint: 'Escolha uma das duas coisas: “kafe” (café) ou “goj” (água).',
        },
        // ZI24 p. 74 (Felisbino 2024, frase 87) e p. 75 (frase 89)
        communityPrompt: 'Escreva um diálogo com duas perguntas e duas respostas das pesquisas: “Hẽ tá ã régre vỹ jẽ hỹn?” — “Ha\'.” (onde estará seu irmão? — não sei) e “Ã jóg vỹ hẽ ra vyr?” — “Ki inh kagtĩg nĩ.” (para onde seu pai foi? — eu não sei).',
      },
    ],
  },
  {
    id: 'kgp-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Ã kakã kyku rỹ! Ordens, recusas e o corpo',
    emoji: '🗣️',
    card: {
      id: 'kgp-c4',
      title: 'Pedir com jeito, mandar com pressa',
      emoji: '🤲',
      // LI23 p. 59–60 (ra ‘faça agora!’ e -m nĩ ~ nĩ ‘faça em qualquer tempo!’, Wiesemann 2011, p. 19);
      // p. 71 (ex. 23a–c: ra em Wiesemann, rỹ em Rio das Cobras e Apucaraninha hoje); p. 76 (nĩ mais polido)
      history:
        'Ursula Wiesemann descreveu duas marcas de ordem no kaingang: “ra”, que quer dizer “faça agora!”, e “nĩ”, que quer dizer “faça em qualquer tempo!”. Rosângela Lima (2023) comparou as frases que Wiesemann ouviu em Rio das Cobras nos anos 1960 e 1970 com as de falantes jovens de hoje. Eles dizem “rỹ” onde Wiesemann escreveu “ra”: “Ã néj grug rỹ!” (“acenda a sua vela!”). E Lima conclui que “nĩ” soa mais educado: é a marca dos pedidos e dos conselhos.',
      // DA p. 6 (vyn, va, ma, tug; marca comprida e marca redonda, Kamé e Kainhru)
      culture_tip:
        'Em kaingang, “carregar” muda conforme a coisa, conta D\'Angelis: “vyn” para algo comprido, como lenha; “va” para algo comprido no ombro, como uma foice; “ma” para algo curto ou redondo, como um livro ou uma panela; e “tug” para levar uma criança nas costas. Comprido e redondo pesam na cultura toda: as pessoas se dividem em marca comprida e marca redonda, as metades Kamé e Kainhru.',
      // FE21 p. 81 (a pessoa da ordem fica de fora); LI23 p. 69–70 (tũg ra ~ rỹ, tũg nĩ, ker … hẽ)
      grammar_why:
        'Na ordem, o “você” fica de fora: só o objeto, o verbo e, no fim, “rỹ” (agora) ou “nĩ” (quando puder). Para proibir, entra “tũg” antes da marca: “Tĩ tũg rỹ.” (“não vá embora agora”). Um pedido gentil pode vir sem marca nenhuma: “Kumẽr hã vĩ.” (“fale devagar”).',
      grammar_examples: [
        ['Nũr rỹ, João!', '“Durma, João!” (Ferro, p. 82)'],
        ['Kumẽr hã vĩ.', '“Fale devagar.”, um pedido, sem marca (Lima, p. 66)'],
        ['Pẽngre fi tãnh tũg nĩ!', '“Não mate a galinha!” (Ferro, p. 82)'],
        ['Ker kagrã hẽ!', '“Não comam tudo!” (Ferro, p. 82)'],
      ],
      // LI23 p. 70–72; FE21 p. 82; ZI24 p. 69–70
      character_guide: [
        ['rỹ / ra', '“faça agora”: “rỹ” entre os falantes de hoje, “ra” em Wiesemann', 'Nũr rỹ! (durma!)'],
        ['nĩ', '“faça quando puder”, mais educado', 'Ti vĩ kato tũg nĩ! (não responda a ele!)'],
        ['tũg', '“não”, antes da marca de ordem', 'Tĩ tũg rỹ. (não vá embora agora)'],
        ['ker … hẽ', '“de jeito nenhum!”: abre e fecha a proibição', 'Ker kutẽ hẽ! (não saia de jeito nenhum!)'],
      ],
    },
    lessons: [
      {
        id: 'kgp-u4-l1',
        title: 'O corpo: kanẽ, nĩgé, pẽn',
        kind: 'licao',
        words: ['kanẽ', 'nĩgé', 'pẽn', 'fa', 'gãnh', 'nug'],
        cloze: [
          // OL26 p. 101
          { sentence: 'Gĩr vỹ ti ___ tỹ móra nig.', answer: 'pẽn', options: ['pẽn', 'nĩgé', 'kanẽ'], translation: '“O menino chutou a bola com o pé.”' },
          // OL26 p. 92
          { sentence: 'Gĩr vỹ ti ___ kóké ti tỹ vãnh kãmĩ vẽnhvó kỹ.', answer: 'fa', options: ['fa', 'gãnh', 'nug'], translation: '“O menino machucou a perna ao correr pela floresta.”' },
          // OL26 p. 94
          { sentence: 'Gĩr vỹ ti ___ jãré kar kỹ ti rem festa jo.', answer: 'gãnh', options: ['gãnh', 'kanẽ', 'pẽn'], translation: '“O menino cortou o cabelo e penteou antes da festa.”' },
        ],
        voice: {
          // FE21 p. 81, ex. 57
          bot: 'Ã kakã kyku rỹ!',
          botTranslation: 'Limpe o seu rosto!',
          expected: ["Hỹ'ỹ.", "hỹ'ỹ", 'nejé'],
          hint: 'Aceite com “Hỹ\'ỹ” (sim). Ou recuse, sem educação, com “Nejé” (de jeito nenhum).',
        },
        // OL26 p. 96, p. 99 e p. 95
        communityPrompt: 'Traduza três frases das fichas de Oliveira (2026): “Gĩr vỹ ti kanẽ tỹ mrin ké ti tỹ kanhkã ki evãnh jé.”, “Gĩr vỹ ti nug kaga kri ti nĩgẽ fẽg.” e “Gĩr vỹ ti kanhir tĩra ti jakrĩ kãgfá.” Dica: kanẽ é olho, kanhkã é céu, nug é barriga e jakrĩ é joelho.',
      },
      {
        id: 'kgp-u4-l2',
        title: 'Na cozinha da titija',
        kind: 'licao',
        words: ['titija', 'nénh', 'kamó', 'kagré', 'rãgró', 'kikó'],
        cloze: [
          // OL26 p. 91
          { sentence: 'Titija fi vỹ ___ mré aronh han ẽg jẽn ke ki.', answer: 'rãgró', options: ['rãgró', 'kamó', 'kikó'], translation: '“A tia cozinhou feijão com arroz para o almoço.”' },
          // OL26 p. 86
          { sentence: 'Titija fi vỹ fág ___ vẽjẽn mỹ.', answer: 'nénh', options: ['nénh', 'kagré', 'titija'], translation: '“A tia cozinhou pinhão para a refeição.”' },
          // LI23 p. 73, ex. 30
          { sentence: '___ fár kufé rỹ kỹ pĩ kãra rãg.', answer: 'Kagré', options: ['Kagré', 'Kamó', 'Rãgró'], translation: '“Tire a casca da mandioca e ponha no fogo.”' },
        ],
        voice: {
          // ZI24 p. 60 (frase 28, de Felisbino 2021)
          bot: 'Ã mỹ jẽ?',
          botTranslation: 'Você almoçou?',
          expected: ['Vó.', 'vó', "Hỹ'ỹ.", "hỹ'ỹ"],
          hint: 'Responda “Vó” (não) ou “Hỹ\'ỹ” (sim).',
        },
        // OL26 p. 88 (ficha KAMÓ) e p. 89 (ficha KIKÓ)
        communityPrompt: 'Escreva o que a família preparou, com duas frases das fichas de Oliveira (2026): “Ijỹ fi vỹ kamó mré kagré han.” (a mãe preparou sopa com banana e mandioca) e “Titija fi vỹ kikó nénh kỹ tỹ tuj hé jẽn ke ki.” (a tia cozinhou abóbora e fez um purê para o almoço).',
      },
      {
        id: 'kgp-u4-l3',
        title: 'Prova: ordens, recusas e o corpo',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          // ZI24 p. 79 (quadro 12) e p. 65 (Wiesemann 2011, s.v. nejé)
          bot: 'Ã mỹ inh mré tĩg mũ?',
          botTranslation: 'Você vai comigo?',
          expected: ["Hỹ'ỹ.", "hỹ'ỹ", 'Nejé.', 'nejé', 'vó'],
          hint: 'Aceite com “Hỹ\'ỹ” ou recuse: “Vó” é o não suave; “Nejé” é o “de jeito nenhum”, mais rude.',
        },
        // LI23 p. 73, ex. 29; FE21 p. 81, ex. 58
        communityPrompt: 'Escreva duas ordens das pesquisas e diga para quem cada uma serve: “Ã mruja tu rỹ kusãg jé ti ke mũ.” (vista a blusa porque vai esfriar) e “Ãjag tarefa hynhan rỹ, gĩngĩr.” (façam suas tarefas, crianças!). Depois transforme uma delas em proibição com “tũg”.',
      },
    ],
  },
];
