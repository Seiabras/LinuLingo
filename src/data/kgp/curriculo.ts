import type { UnitSeed } from '../types';

/**
 * Trilha do kaingang, do A1.1 ao teto (B1.4). Os exemplos giram em torno de uma aldeia (ẽmã) numa terra indígena
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
      // Revisto em 17/10/2026: “Inh kanhgág.”, “Ti kófa.”, “Inh panh mág.” e “Ã kanhgág?” eram montadas. Agora
      // Ferro (UEL, 2021), p. 80; Felisbino e Silveira (Signum, 2022), p. 56 e 58.
      grammar_examples: [
        // Ordem com pronome: Abreu (2009), citada por Tabosa, tese (UEL, 2014), p. 106
        ['Jun inh.', '“Eu cheguei.” — aqui o pronome vem depois do verbo, ordem comum quando o sujeito é um pronome (Ferro, 2021, p. 80).'],
        ['Jun ti. Jun fi.', '“Ele chegou. Ela chegou.” — “ti” (ele) e “fi” (ela): o gênero só aparece aqui (p. 80).'],
        ['Inh nỹ fi tóg inh kanhrãn é.', '“A minha mãe me ensinava.” — “inh” antes do nome é “meu, minha” (Felisbino e Silveira, 2022, p. 58).'],
        ['Ã mỹ há?', '“Você está bem?” — “ã” serve para qualquer pessoa (p. 56).'],
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
        // Revisto em 17/10/2026 (as três frases e a pergunta eram montadas): Ferro (UEL, 2021), p. 80, e
        // Felisbino e Silveira (Signum, 2022), p. 56
        cloze: [
          { sentence: 'Jun ___.', answer: 'inh', options: ['inh', 'ã', 'ti'], translation: '“Eu cheguei.”' },
          { sentence: 'Jun ___.', answer: 'ti', options: ['ti', 'fi', 'ẽg'], translation: '“Ele chegou.”' },
          { sentence: 'Jun ___.', answer: 'fi', options: ['fi', 'ti', 'ãjag'], translation: '“Ela chegou.”' },
        ],
        voice: {
          bot: 'Ã mỹ há?',
          botTranslation: 'Você está bem?',
          expected: ["Hỹ'ỹ, há inh jẽ.", "hỹ'ỹ, há inh jẽ", "hỹ'ỹ"],
          hint: 'Responda como os falantes do Paraná: “Hỹ\'ỹ, há inh jẽ.” (sim, estou bem).',
        },
        communityPrompt: 'Escreva os seis pronomes pessoais do kaingang vistos nesta lição: inh, ã, ti, fi, ẽg, ãjag.',
      },
      {
        id: 'kgp-u1-l2',
        title: 'A família (panh, nỹ, gĩr)',
        kind: 'licao',
        words: ['panh', 'nỹ', 'gĩr', 'ũn gré', 'ũn tỹtá', 'kófa'],
        // Revisto em 17/10/2026 (as três frases e a pergunta eram montadas): Felisbino e Silveira (Signum,
        // 2022), p. 58; Tabosa, tese (UEL, 2014), p. 161; Tabosa, dissertação (UEL, 2006), p. 55; Zilli
        // (UEL, 2024), p. 75 (Felisbino 2024)
        cloze: [
          { sentence: 'Inh ___ fi tóg inh kanhrãn é.', answer: 'nỹ', options: ['nỹ', 'panh', 'gĩr'], translation: '“A minha mãe me ensinava.”' },
          { sentence: '___ fi sĩnvĩ.', answer: 'Ũn tỹtá', options: ['Ũn tỹtá', 'Ũn gré', 'Kófa'], translation: '“A mulher é bonita.”' },
          { sentence: 'Kófa vỹ ___ ag mỹ ó to.', answer: 'gĩr', options: ['gĩr', 'panh', 'nỹ'], translation: '“O velho contou uma história para os meninos.”' },
        ],
        voice: {
          bot: 'Ã jóg vỹ hẽ ra vyr?',
          botTranslation: 'Para onde o seu pai foi?',
          expected: ['Ki inh kagtĩg nĩ.', 'ki inh kagtĩg nĩ', "Ha'."],
          hint: 'Se não sabe, diga como na pesquisa de Zilli: “Ki inh kagtĩg nĩ.” (eu não sei). “Jóg” também é pai: a palavra kaingang, ao lado de “panh”, que veio do português.',
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
          hint: 'Diga que escreve um pouco, como K9 na pesquisa: “Ka ijóg rán pãgsĩ nĩgtĩ gé.” (K9 é de Faxinal, onde o “eu” soa “ijóg”; em Apucaraninha é “isóg”.) Ou só “Hỹ\'ỹ” (sim) ou “Vó” (não).',
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
        // Revisto em 17/10/2026 (a pergunta era montada): Felisbino e Silveira, Signum, 2022, p. 57
        // (pesquisadora e K11, da TI Marrecas, que diz “ijóg”, eu)
        voice: {
          bot: 'Ã tỹ hẽ tá ke nam?',
          botTranslation: 'De onde você é?',
          expected: ['Há ijóg tỹ Maréka ki ke nĩ.', 'há ijóg tỹ maréka ki ke nĩ'],
          hint: 'Diga de onde é, como o falante de Marrecas (PR): “Há ijóg tỹ Maréka ki ke nĩ.” (eu sou daqui de Marrecas).',
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
        'O kaingang é uma língua SOV (sujeito-objeto-verbo): o verbo vem por último, como em “Ti tóg rãgró krãn huri” (“ele plantou feijão”, lit. “ele [sujeito] feijão [objeto] plantou-já [verbo]”). Os verbos não se conjugam por pessoa como em português (não existe algo como “planto/plantas/planta”): quem faz a ação é mostrado pelo pronome (antes ou depois do verbo, conforme a frase), não por uma terminação nele.',
      grammar_examples: [
        // Revisto em 17/10/2026 (“Mĩg mág.” era montada): Tabosa, tese (UEL, 2014), p. 164
        ['Mĩg vỹ éhé ja ti.', '“A onça era grande” — sem verbo “ser”: o nome, “vỹ” e a qualidade (Tabosa, 2014, p. 164).'],
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
        // montadas: pronome antes do nome = possessivo (Tabosa, tese, UEL, 2014, p. 105: “inh pratu” ‘meu prato’)
        cloze: [
          { sentence: 'Inh ___.', answer: 'krĩ', options: ['krĩ', 'pẽ', 'jã'], translation: '“Minha cabeça.”' },
          { sentence: 'Inh ___.', answer: 'nĩjẽ', options: ['nĩjẽ', 'jẽnky', 'nĩgrẽg'], translation: '“Meu nariz.”' },
          { sentence: 'Inh ___.', answer: 'nĩgrẽg', options: ['nĩgrẽg', 'pẽ', 'krĩ'], translation: '“Minha orelha.”' },
        ],
        // Revisto em 17/10/2026 (“Hẽ tag?” era montada): Ferro (UEL, 2021), p. 74
        voice: {
          bot: 'Ã mỹ to hé?',
          botTranslation: 'Você caiu?',
          expected: ['Vó.', 'vó', "Hỹ'ỹ.", "hỹ'ỹ"],
          hint: 'Responda “Vó” (não) ou “Hỹ\'ỹ” (sim).',
        },
        communityPrompt: 'Escreva três partes do corpo em kaingang vistas nesta lição: krĩ (cabeça), pẽ (braço) e jã (dente).',
      },
      {
        id: 'kgp-u2-l2',
        title: 'A mata e os bichos',
        kind: 'licao',
        words: ['goj', 'pĩ', 'mĩg', 'pỹn', 'fãfãn', 'kasor'],
        // Revisto em 17/10/2026: “Goj kavéj.” e “Mĩg mág.” eram montadas. Tabosa, tese (UEL, 2014), p. 135 e
        // p. 164; “Pỹn sãn inh.” é do verbete “sãn” (Wiktionary, de Wiesemann)
        cloze: [
          { sentence: 'Gĩr vỹ ___ kron.', answer: 'goj', options: ['goj', 'pĩ', 'mĩg'], translation: '“O menino bebeu água.”' },
          { sentence: '___ sãn inh.', answer: 'Pỹn', options: ['Pỹn', 'Fãfãn', 'Kasor'], translation: '“Pisei numa cobra.”' },
          { sentence: '___ vỹ éhé ja ti.', answer: 'Mĩg', options: ['Mĩg', 'Goj', 'Jã'], translation: '“A onça era grande.”' },
        ],
        // Revisto em 17/10/2026 (“Hẽ tag? Mĩg?” era montada): Zilli (UEL, 2024), p. 79, quadro 12
        voice: {
          bot: 'Ã mỹ vé?',
          botTranslation: 'Você viu?',
          expected: ["Hỹ'ỹ.", "hỹ'ỹ", 'Vó.', 'vó'],
          hint: 'Responda “Hỹ\'ỹ” (sim) ou “Vó” (não).',
        },
        communityPrompt: 'Fale sobre a mata usando pelo menos duas palavras desta lição: um bicho (mĩg, pỹn, fãfãn ou kasor) e a água (goj) ou o fogo (pĩ).',
      },
      {
        id: 'kgp-u2-l3',
        title: 'Prova: corpo e natureza',
        kind: 'prova',
        words: [],
        cloze: [],
        // Revisto em 17/10/2026 (“Hẽ tag? Ã krĩ mág?” era montada): Lima (UEL, 2023), p. 73, ex. 27
        voice: {
          bot: 'Sĩg ta.',
          botTranslation: 'Estou indo embora.',
          expected: ['Ha tĩg.', 'ha tĩg'],
          hint: 'Despeça-se como no exemplo de Lima: “Ha tĩg.” (pode ir).',
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
        'Em kaingang, Apucaraninha é “Karỹnĩnh”. Uma frase do vocabulário de Oliveira (2026) diz: “Karỹnĩnh ki sẽsĩ e vỹ kynkyr sĩvĩ han tĩ.” (“No Apucaraninha há muitos passarinhos que cantam bonito.”). E as perguntas que Ferro (2021) gravou falam da vida de lá, como o time de futebol Tubarão Indígena: “Tubarão ĩnhigenã ag mỹ jogo ki vẽnhmã?” (“O Tubarão Indígena ganhou o jogo?”).',
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
          hint: 'Diga que ela vai para a escola: “Escola ra fi vỹr.” O “ra” (para) vem depois do lugar, e o “fi” (ela) vem logo antes do verbo.',
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
  // ══ B1.1 a B1.4 (17/10/2026) ══
  // Fontes (ver o cabeçalho do bloco B1 em vocabulario): Tabosa, tese (UEL, 2014) = TA14; Tabosa,
  // dissertação (UEL, 2006) = TA06; Tabosa e Santos (Entretextos e Signum, 2013) = TS13; as narrativas de
  // Ferro (UEL, 2021) = FE21; Souza (UEL, 2022) = SO22; “Vãnh kãmĩ grugru” (2020) = IS20, só pelas frases
  // que Lima (LI23), Zilli (ZI24) e Souza citam com tradução. Página impressa ao lado de cada frase.
  // Todas as frases em kaingang destas quatro unidades são frases das fontes; nenhuma foi montada.
  {
    id: 'kgp-u5',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Kar kỹ: caçar, pescar e jogar bola',
    emoji: '⚽',
    card: {
      id: 'kgp-c5',
      title: 'Uma tese inteira com um professor kaingang',
      emoji: '🧑‍🏫',
      // TA14 p. 18 (coleta com Pedro Kagre Kág Cândido de Almeida, professor bilíngue, que também traduz
      // cartilhas de saúde e manuais); TS13 Signum p. 295 (contribuir com a gramática pedagógica de
      // Ludoviko dos Santos); Signum 25(3), 2022, Apresentação (homenagem póstuma a Ludoviko dos Santos)
      history:
        'Do B1 em diante, a gramática do curso vem sobretudo da tese de Luciana Pereira Tabosa, “Orações complexas da língua kaingang” (UEL, 2014), orientada por Ludoviko dos Santos. Todas as frases que ela coletou para a tese são de um único colaborador: Pedro Kagre Kág Cândido de Almeida, professor bilíngue da Terra Indígena Apucaraninha, acostumado a traduzir do kaingang para o português e do português para o kaingang, de cartilhas de saúde a manuais. Ludoviko dos Santos, que coordenava na UEL o projeto de uma gramática pedagógica do kaingang, ganhou da revista Signum, em 2022, um número inteiro em homenagem póstuma.',
      // FE21 p. 92 (narrativa D: o campeonato de sábado; “mora” e “kỹpeonãto” vêm do português), p. 94–97
      // (narrativa E: os times convidam o narrador; ele joga pelo Chelsea), p. 86–99 (“Kỹ hã vẽ.”)
      culture_tip:
        'As histórias que Ferro gravou em Apucaraninha falam muito de futebol. Num sábado tem campeonato, “kỹpeonãto”, e o irmão do narrador joga no time adversário. Em outro, três times convidam o narrador, que avisa que vai jogar pelo Chelsea. Ferro mostra que “mora” (bola) e “kỹpeonãto” vêm do português. E toda história termina igual: “Kỹ hã vẽ.”, “então é isso”.',
      // TA14 p. 197–214; TS13 Entretextos p. 200 e 205
      grammar_why:
        'Para juntar nomes, use “mré” (com): “Pedro mré Ludoviko” (Pedro e Ludoviko). Para juntar frases, “kar kỹ” (depois) e “kỹ” (então) abrem a segunda. “Vó” é o “ou” da pergunta e vai no fim. “Hã ra” é o “mas”, e “hã kỹ”, o “por isso”.',
      grammar_examples: [
        ['Gĩr vỹ mro, kar kỹ vim ke, kar kỹ ẽkrénh.', '“O menino nadou, pescou e caçou.” (Tabosa, p. 202)'],
        ['Gĩr mỹ gãr kó, goj kron vó?', '“O menino comeu o milho ou bebeu água?” (p. 197)'],
        ['Gĩr vỹ pévé, hã ra tóg fỹ tũ nĩ.', '“O menino caiu, mas não chorou.” (p. 210)'],
        ['Gĩr vỹ kaga, hã kỹ tóg escola ra ti tũ nĩ.', '“O menino está doente, por isso não vai à escola.” (p. 214)'],
      ],
      // TA14 p. 197–214; FE21 p. 85 (sir)
      character_guide: [
        ['mré', '“e” entre dois nomes (a mesma palavra de “com”)', 'Pedro mré Ludoviko (Pedro e Ludoviko)'],
        ['kar kỹ / kỹ', '“depois” / “então”, no começo da segunda frase', 'kar kỹ vim ke (e depois pescou)'],
        ['vó', '“ou”, no fim da pergunta', 'goj kron vó? (ou bebeu água?)'],
        ['hã ra / jãvo', '“mas”; “jãvo” às vezes é um “e” de contraste', 'hã ra tóg fỹ tũ nĩ (mas não chorou)'],
        ['hã kỹ', '“por isso”', 'hã kỹ Pedro tóg kãtĩ tũ nĩ (por isso o Pedro não veio)'],
      ],
    },
    lessons: [
      {
        id: 'kgp-u5-l1',
        title: 'Ẽkrénh tĩ: o caçador',
        kind: 'licao',
        words: ['ẽkrénh', 'vim ke', 'ẽkrénh tĩ', 'fỹ', 'pévé', 'kar kỹ'],
        cloze: [
          // TA14 p. 202, ex. 22
          { sentence: 'Gĩr vỹ mro, kar kỹ vim ke, kar kỹ ___.', answer: 'ẽkrénh', options: ['ẽkrénh', 'fỹ', 'pévé'], translation: '“O menino nadou, pescou e caçou.”' },
          // TA14 p. 210, ex. 46
          { sentence: 'Gĩr vỹ pévé, hã ra tóg ___ tũ nĩ.', answer: 'fỹ', options: ['fỹ', 'ẽkrénh', 'vim ke'], translation: '“O menino caiu, mas não chorou.”' },
          // TA14 p. 203, ex. 27
          { sentence: 'Ẽkrénh tĩ vỹ mĩg tãnh ___ pỹn tãnh gé.', answer: 'kar kỹ', options: ['kar kỹ', 'hã kỹ', 'jãvo'], translation: '“O caçador matou a onça e matou a cobra.”' },
        ],
        voice: {
          // TA14 p. 197, ex. 7 (pergunta) e p. 135, ex. 27a (resposta)
          bot: 'Gĩr mỹ gãr kó, goj kron vó?',
          botTranslation: 'O menino comeu o milho ou bebeu água?',
          expected: ['Gĩr vỹ goj kron.', 'gĩr vỹ goj kron', 'goj kron'],
          hint: 'Diga que ele bebeu água, com a frase de Tabosa: “Gĩr vỹ goj kron.” Repare que o “mỹ” da pergunta vira “vỹ” na resposta.',
        },
        // TA14 p. 198, ex. 9
        communityPrompt: 'Copie a frase de Tabosa “Pedro mré Manoel, kar kỹ Ludovico ag vim kenh mũ jẽg.” (Pedro, Manuel e Ludoviko foram pescar no rio). Sublinhe o “mré” e o “kar kỹ” e diga quem foi pescar.',
      },
      {
        id: 'kgp-u5-l2',
        title: 'Hã ra, jãvo, hã kỹ: mas e por isso',
        kind: 'licao',
        words: ['hã ra', 'jãvo', 'hã kỹ', 'kajãm', 'tar', 'kaga'],
        cloze: [
          // TA14 p. 197, ex. 4
          { sentence: 'Pedro vỹ jyryryn kajãm, ___ Ludoviko vỹ moto kajãm.', answer: 'jãvo', options: ['jãvo', 'hã kỹ', 'kar kỹ'], translation: '“Pedro comprou um carro e Ludoviko comprou uma moto.”' },
          // TA14 p. 211, ex. 48
          { sentence: 'Ẽkrénh tĩ vỹ tar nĩ vẽ, ___ ti mĩg tãnh tũ nĩ.', answer: 'hã ra', options: ['hã ra', 'hã kỹ', 'kar kỹ'], translation: '“O caçador era forte, mas não conseguiu matar a onça.”' },
          // TA14 p. 214, ex. 60
          { sentence: 'Gĩr vỹ kaga ___ tóg escola ra ti tũ nĩ.', answer: 'hã kỹ', options: ['hã kỹ', 'hã ra', 'jãvo'], translation: '“O menino está doente, por isso não vai à escola.”' },
        ],
        voice: {
          // FE21 p. 96, narrativa E13 (Luan pergunta ao narrador)
          bot: 'Ã mỹ ẽg hã mré kenh ke mũ?',
          botTranslation: 'Você vai jogar com nós?',
          expected: ["Hỹ'ỹ.", "hỹ'ỹ", 'Vó.', 'vó'],
          hint: 'Responda “Hỹ\'ỹ” (sim) ou “Vó” (não). Na história de Ferro, o narrador recusa: já tinha prometido jogar pelo Chelsea.',
        },
        // TA14 p. 213, ex. 56
        communityPrompt: 'Escreva duas frases sobre você e um amigo ligadas por “jãvo”, como a de Tabosa: “Ludoviko vỹ cafe kron jãvo Luciana fi vỹ kron tũ nĩ.” (Ludoviko tomou café e Luciana não tomou).',
      },
      {
        id: 'kgp-u5-l3',
        title: 'Prova: e, ou, mas',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          // TA14 p. 208, ex. 40
          bot: 'Pedro mỹ igreja ra tĩg mũ, vỹ escola ra vó?',
          botTranslation: 'Pedro vai à igreja ou à escola?',
          expected: ['Igreja ra.', 'igreja ra', 'Escola ra.', 'escola ra'],
          hint: 'Escolha um dos lugares, como na pergunta: “igreja ra” (à igreja) ou “escola ra” (à escola).',
        },
        // TA14 p. 198 e 202, ex. 11
        communityPrompt: 'Conte o seu dia em kaingang ligando as frases com “kar kỹ”, como a de Tabosa: “Maria fi gãr fãg, kur kygfã gé, vẽjen han gé, kar kỹ ĩn ky kũ gé.” (Maria colheu milho, lavou a roupa, fez comida e limpou a casa).',
      },
    ],
  },
  {
    id: 'kgp-u6',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Gĩr tỹ mora nig mũ: o menino que chutou a bola',
    emoji: '🧩',
    card: {
      id: 'kgp-c6',
      title: 'Uma frase, duas leituras',
      emoji: '🎭',
      // TS13 Signum p. 293 (resumo), p. 304–306 (relativas internas, sem relativizador), p. 309–310 (o
      // colaborador lê as duas frases com ênfase diferente)
      history:
        'Em 2013, Tabosa e Santos publicaram na revista Signum o estudo das orações relativas do kaingang, as do tipo “o menino que chutou a bola”. A conclusão é que a língua não tem um “que”: a frase inteira fica no lugar do nome. Por isso, “a onça que mordeu o menino morreu” e “o menino que a onça mordeu morreu” se dizem igual. Os pesquisadores perguntaram ao colaborador como se sabe quem morreu. Ele respondeu que a diferença está no jeito de falar e leu as duas frases, pondo mais ênfase no nome de quem morreu.',
      // FE21 p. 90–91 (narrativa C: as primas, a igreja, cantar, andar até amanhecer); ZI24 p. 19 (o
      // hinário da Igreja Evangélica Kaingang, “Jesus mỹ jãn jafã”)
      culture_tip:
        'Na narrativa C de Ferro, uma jovem de Apucaraninha conta o sábado: foi à casa da irmã, encontrou as primas, foi à igreja para cantar e andou com elas a noite inteira, até amanhecer. Cantar na igreja é comum: Zilli (2024) usou como fonte o hinário da Igreja Evangélica Kaingang, “Jesus mỹ jãn jafã”.',
      // TS13 Signum p. 304–308; TA14 p. 124–137
      grammar_why:
        'Para dizer “o menino que chutou a bola”, a frase inteira “gĩr tỹ mora nig mũ” entra no lugar de “o menino”. Dentro dela, quem faz a ação leva “tỹ”; fora, a frase toda leva “vỹ”. O mesmo vale para “disse que” e “viu que”: o que foi dito ou visto vem inteiro antes do verbo.',
      grammar_examples: [
        ['Gĩr tỹ mora nig mũ vỹ pévé.', '“O menino que chutou a bola caiu.” (Tabosa, 2014, p. 152)'],
        ['Ũn prẽr mũ ẽn vỹ vẽnhavã.', '“Aquele que gritou correu.” (p. 156)'],
        ['Ũn tỹtá fi gĩr vỹ pẽngre péju hé.', '“A mulher disse que o menino roubou a galinha.” (p. 124)'],
        ['Gĩr vỹ ti professora fi vĩ mẽ.', '“O menino ouviu a professora falar.” (p. 137)'],
      ],
      character_guide: [
        ['… mũ vỹ', 'fecha a relativa e marca a frase inteira como sujeito', 'gĩr fỹ mũ vỹ nũr (o menino que chorou dormiu)'],
        ['tỹ', 'quem faz a ação dentro da relativa', 'mĩg tỹ gĩr prãg mũ (a onça que mordeu o menino)'],
        ['ẽn', '“aquele”, retoma a relativa', 'ũn prẽr mũ ẽn (aquele que gritou)'],
        ['hé / he', '“dizer”, no fim do que foi dito', 'gĩr vỹ pẽngre péju hé (disse que o menino roubou a galinha)'],
      ],
    },
    lessons: [
      {
        id: 'kgp-u6-l1',
        title: 'O menino que chutou a bola',
        kind: 'licao',
        words: ['nig', 'ter', 'fón', 'ẽn', 'prẽr', 'ũn'],
        cloze: [
          // TA14 p. 152, ex. 2
          { sentence: 'Gĩr tỹ mora ___ mũ vỹ pévé.', answer: 'nig', options: ['nig', 'fón', 'ter'], translation: '“O menino que chutou a bola caiu.”' },
          // TA14 p. 159
          { sentence: 'Mĩg tỹ gĩr prãg mũ vỹ ___.', answer: 'ter', options: ['ter', 'prẽr', 'nig'], translation: '“A onça que mordeu o menino morreu.”' },
          // TA14 p. 156
          { sentence: 'Ũn prẽr mũ ___ vỹ vẽnhavã.', answer: 'ẽn', options: ['ẽn', 'ũn', 'mré'], translation: '“Aquele que gritou correu.”' },
        ],
        voice: {
          // FE21 p. 72
          bot: 'Maria fi mỹ gãr to há nĩ?',
          botTranslation: 'Maria gosta de milho?',
          expected: ["Hỹ'ỹ.", "hỹ'ỹ", 'Vó.', 'vó', "Ha'."],
          hint: 'Responda “Hỹ\'ỹ” (sim), “Vó” (não) ou, se não sabe, “Ha\'.”.',
        },
        // TA14 p. 169
        communityPrompt: 'Traduza a relativa de Tabosa “Pỹn tỹ mĩg prãg mũ vỹ pẽngre tãnh.” (a cobra que mordeu a onça matou a galinha). Depois explique por que a mesma frase poderia falar da onça, e como o falante mostra de quem está falando.',
      },
      {
        id: 'kgp-u6-l2',
        title: 'Disse, ouviu, conhece, quer',
        kind: 'licao',
        words: ['he', 'péju', 'ki kanhró', 'ki kanhrãn', 'mẽ', 'sór'],
        cloze: [
          // FE21 p. 86, narrativa A2
          { sentence: 'Kỹ inh a, b, c, d ki kanhrãn, ___ gé.', answer: 'he', options: ['he', 'mẽ', 'sór'], translation: '“Eu aprendi o a, b, c, d, disse também.”' },
          // TA14 p. 175, ex. 52a
          { sentence: 'Manoel vỹ gĩr ki ___ nĩ.', answer: 'kanhró', options: ['kanhró', 'péju', 'sór'], translation: '“Manoel conhece o menino.”' },
          // TA14 p. 131, ex. 19
          { sentence: 'Pedro vỹ tóg pirã sam ___ mũ.', answer: 'sór', options: ['sór', 'mẽ', 'he'], translation: '“Pedro queria pescar um peixe.”' },
        ],
        voice: {
          // FE21 p. 73
          bot: 'Tubarão ĩnhigenã ag mỹ jogo ki vẽnhmã?',
          botTranslation: 'O Tubarão Indígena ganhou o jogo?',
          expected: ["Hỹ'ỹ.", "hỹ'ỹ", 'Vó.', 'vó', "Ha'."],
          hint: 'Responda “Hỹ\'ỹ” (sim), “Vó” (não) ou “Ha\'.” (não sei).',
        },
        // TA14 p. 124 e p. 137
        communityPrompt: 'Compare as duas frases de Tabosa: “Ũn tỹtá fi gĩr vỹ pẽngre péju hé.” (a mulher disse que o menino roubou a galinha) e “Ũn gré vỹ gĩr tỹ pẽngre péju vé.” (o homem viu o menino roubar a galinha). Em qual o menino leva “vỹ” e em qual leva “tỹ”?',
      },
      {
        id: 'kgp-u6-l3',
        title: 'Prova: o menino que…',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          // FE21 p. 89, narrativa C1 (pergunta) e C2 (resposta)
          bot: 'Manu inh mré tónh jé kãtĩg.',
          botTranslation: 'Manu, venha contar para mim.',
          expected: ['Hỹ mỹ hamẽ?', 'hỹ mỹ hamẽ', 'Hỹ mỹ hamẽ? Samano ka inh hẽ ri ké?'],
          hint: 'Responda como a narradora de Ferro: “Hỹ mỹ hamẽ?” (é sério isso?), e, se quiser, “Samano ka inh hẽ ri ké?” (o que eu fiz no sábado?).',
        },
        // TA14 p. 165 e p. 167
        communityPrompt: 'Escreva duas relativas de Tabosa e traduza: “Jandira fi tỹ gĩr mỹ vẽjẽn nĩm mũ vỹ fỹ.” (o menino para quem Jandira deu comida chorou) e “Gĩr jóg ter mũ vỹ fỹ.” (o menino cujo pai morreu chorou).',
      },
    ],
  },
  {
    id: 'kgp-u7',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Kỹ, mũra, ra, jé: quando, se, para',
    emoji: '⏱️',
    card: {
      id: 'kgp-c7',
      title: 'De Apucaraninha para a universidade',
      emoji: '🚌',
      // FE21 p. 87–89 (narrativa B: a estudante acorda às 4 e 20, toma banho, se veste, espera o ônibus
      // com o pai, estuda na UEL e volta); TA14 p. 18 (escolas da TI Apucaraninha); TA14 p. 132 (“goj mág tỹ
      // Pucaraninh”, o rio Apucaraninha)
      history:
        'A narrativa B de Ferro conta a manhã de quem sai de Apucaraninha para estudar na Universidade Estadual de Londrina. O narrador acorda cedo, “às 5 horas”, e logo se corrige: “não é isso, às 4 e 20, acho”. Toma banho, se veste, olha os cadernos e vai esperar o ônibus no ponto com o pai. O pai pega outro ônibus, para o trabalho, e o narrador vai estudar. Na terra indígena há escolas bilíngues, e o rio também tem nome kaingang nas frases de Tabosa: “goj mág tỹ Pucaraninh”, o rio Apucaraninha.',
      // TA14 p. 184–192 (ex. 1–30: chuva, rio, onça, caça, pesca, Londrina)
      culture_tip:
        'As frases de “quando” e “se” que Tabosa gravou mostram a vida da aldeia: a chuva que enche o rio, a roupa sobre a grama, que molha, o caçador e a onça, a pesca, a estrada molhada até Londrina. “Ta kutẽ mág tĩ kỹ, goj nỹ var mũ.”: se chover bastante, o rio vai encher.',
      // TA14 p. 184–192
      grammar_why:
        'A palavra que liga vem no fim da frase de “quando”, “se” ou “para”, e essa frase costuma vir primeiro: “Gĩr tỹ mĩg vé kỹ, ti vẽnhvã.” (quando o menino viu a onça, ele correu). “Kỹ” é “quando” ou “porque”; “mũra”, “quando”; “ra”, “se”; “jé”, “para”; “ke jo”, “antes de”.',
      grammar_examples: [
        ['Gĩr tỹ mĩg vé kỹ, ti vẽnhvã.', '“Quando o menino viu a onça, ele correu.” (Tabosa, p. 184)'],
        ['Gislaine fi jun mũra, hã Luciana fi tĩg.', '“Quando a Gislaine chegou, a Luciana saiu.” (p. 186)'],
        ['Gĩr vỹ ti nũr ke jo vẽjẽn kó.', '“Antes de dormir, o menino comeu a comida.” (p. 187)'],
        ['Gĩr vỹ fỹ, ti pẽn mráj kỹ.', '“O menino chorou porque quebrou o pé.” (p. 189)'],
      ],
      character_guide: [
        ['kỹ', '“quando” no fim da primeira frase; “porque” no fim da segunda', 'Gĩr tỹ mĩg vé kỹ (quando o menino viu a onça)'],
        ['mũra', '“quando”; também “mesmo que”', 'Gislaine fi jun mũra (quando a Gislaine chegou)'],
        ['ra', '“se”', 'Caçador tỹ mĩg tãnh ra (se o caçador tivesse matado a onça)'],
        ['jé', '“para”, no fim', 'fi tỹ bolo han jé (para fazer bolo)'],
        ['ke jo', '“antes de”', 'ti nũr ke jo (antes de dormir)'],
      ],
    },
    lessons: [
      {
        id: 'kgp-u7-l1',
        title: 'Ta kutẽ: quando chove',
        kind: 'licao',
        words: ['mũra', 'kutẽ', 'var', 'goj mág', 'mur', 'pénũ'],
        cloze: [
          // TA14 p. 185, ex. 7
          { sentence: 'Ta kutẽ mág tĩ kỹ, goj nỹ ___ mũ.', answer: 'var', options: ['var', 'mur', 'pénũ'], translation: '“Se chover bastante, o rio vai encher.”' },
          // TA14 p. 186, ex. 9
          { sentence: 'Gislaine fi jun ___, hã Luciana fi tĩg.', answer: 'mũra', options: ['mũra', 'jé', 'jo'], translation: '“Quando a Gislaine chegou, a Luciana saiu.”' },
          // TA14 p. 184, ex. 2
          { sentence: 'Caçador tỹ mĩg ___ kỹ, ti ter.', answer: 'pénũ', options: ['pénũ', 'var', 'kutẽ'], translation: '“Assim que o caçador atirou na onça, ela morreu.”' },
        ],
        voice: {
          // FE21 p. 97, narrativa E20 (pergunta) e E21 (resposta)
          bot: 'Nomĩgo tũ mỹ?',
          botTranslation: 'Não era domingo?',
          expected: ['Nomĩgo ki ke vẽ mỹr.', 'nomĩgo ki ke vẽ mỹr', "Hỹ'ỹ.", "hỹ'ỹ"],
          hint: 'Confirme como os amigos na história de Ferro: “Nomĩgo ki ke vẽ mỹr.” (verdade, foi no domingo). Ou só “Hỹ\'ỹ”.',
        },
        // TA14 p. 184, ex. 4
        communityPrompt: 'Copie a frase de Tabosa “Ludoviko jun kỹ, Pedro vỹ ti mré vĩ ke mũ.” (quando o Ludoviko chegar, o Pedro falará com ele) e escreva em português o que você vai fazer quando alguém da sua família chegar.',
      },
      {
        id: 'kgp-u7-l2',
        title: 'Jé e ke jo: para e antes',
        kind: 'licao',
        words: ['jé', 'jo', 'ra', 'kamẽg', 'vẽnh kypé', 'kygfã'],
        cloze: [
          // TA14 p. 188, ex. 18
          { sentence: 'Maria fi gãr kygfa fi tỹ bolo han ___.', answer: 'jé', options: ['jé', 'jo', 'ra'], translation: '“Maria colheu milho para fazer bolo.”' },
          // TA14 p. 187, ex. 12
          { sentence: 'Gĩr vỹ ti nũr ke ___ vẽjẽn kó.', answer: 'jo', options: ['jo', 'jé', 'kỹ'], translation: '“Antes de dormir, o menino comeu a comida.”' },
          // TA14 p. 192, ex. 29
          { sentence: 'Caçador tỹ mĩg tãnh ___, ti pijé gĩr pranh mũ vẽ.', answer: 'ra', options: ['ra', 'jé', 'jo'], translation: '“Se o caçador tivesse matado a onça, ela não morderia o menino.”' },
        ],
        voice: {
          // FE21 p. 98, narrativa E23 (pergunta) e E24 (resposta, “hỹ’y” na fonte)
          bot: 'Nomĩgo kã ke mỹ hamẽ?',
          botTranslation: 'Foi no domingo?',
          expected: ["Hỹ'ỹ.", "hỹ'ỹ", 'Vó.', 'vó'],
          hint: 'Responda “Hỹ\'ỹ” (sim), como o amigo na história de Ferro, ou “Vó” (não).',
        },
        // TA14 p. 189, ex. 22
        communityPrompt: 'Escreva uma frase com “porque”, como a de Tabosa “Gĩr vỹ fỹ, ti pẽn mráj kỹ.” (o menino chorou porque quebrou o pé): primeiro o que aconteceu, depois o motivo, com “kỹ” no fim.',
      },
      {
        id: 'kgp-u7-l3',
        title: 'Prova: quando, se, para',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          // FE21 p. 97, narrativa E18 (pergunta) e E21 (resposta)
          bot: 'Samano ki mẽ?',
          botTranslation: 'No sábado, né?',
          expected: ["Hỹ'ỹ.", "hỹ'ỹ", 'Nomĩgo ki ke vẽ mỹr.', 'nomĩgo ki ke vẽ mỹr'],
          hint: 'Concorde com “Hỹ\'ỹ”, ou corrija como os amigos de Ferro: “Nomĩgo ki ke vẽ mỹr.” (verdade, foi no domingo).',
        },
        // TA14 p. 186, ex. 11, e p. 187, ex. 12
        communityPrompt: 'Conte a sua noite com duas frases de Tabosa como modelo: “Gĩr vỹ ti tỹ bolo ko kar kỹ nũr.” (depois que o menino comeu o bolo, ele foi dormir) e “Gĩr vỹ ti nũr ke jo vẽjẽn kó.” (antes de dormir, o menino comeu a comida).',
      },
    ],
  },
  {
    id: 'kgp-u8',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Vãnh kãmĩ grugru: brilhos na floresta',
    emoji: '🍄',
    card: {
      id: 'kgp-c8',
      title: 'Um livro de ciência em kaingang',
      emoji: '📗',
      // ZI24 p. 17–19 (Brilhos na Floresta, de Noêmia Ishikawa: história baseada em fatos reais, na
      // floresta amazônica, sobre fungos bioluminescentes, traduzida para vários idiomas, entre eles o
      // kaingang, por Damaris Kanĩnsãnh Felisbino); LI23 p. 72 (a tradutora nasceu e mora em
      // Apucaraninha); SO22 p. 42–43 (história sobre cogumelos bioluminescentes)
      history:
        '“Brilhos na Floresta”, de Noemia Kazue Ishikawa e outros autores, é um livro de divulgação científica sobre os fungos que brilham no escuro da floresta amazônica. A história é baseada em fatos reais e foi traduzida para muitas línguas: japonês, inglês, nheengatu, yanomami, baniwa, espanhol, francês… e kaingang. A versão kaingang, “Vãnh kãmĩ grugru” (2020), é de Damaris Kanĩnsãnh Felisbino, professora nascida e moradora da Terra Indígena Apucaraninha. Lima, Zilli e Souza usaram frases do livro nas suas pesquisas, com tradução.',
      // SO22 p. 42 (“Kỹ inh kanhkã ag vỹ tóg jógóg ti mũmẽg han.” ‘Então os [meus] parentes espantaram o
      // gavião’; “kanhkã”, glosado ‘família’); LI23 p. 72 (“ãjag néj grugrug rỹ” ‘Acendam a lanterna!’)
      culture_tip:
        'No livro, um dos personagens conta uma história dos parentes: “Kỹ inh kanhkã ag vỹ tóg jógóg ti mũmẽg han.”, “então os meus parentes espantaram o gavião”. Repare em “kanhkã”: no A1 ela era “céu”, e aqui, com “ag”, quer dizer os parentes, a família. E, no meio da floresta, à noite, outro personagem diz: “ãjag néj grugrug rỹ”, “acendam a lanterna!”.',
      // TA06 p. 72–79 e 57–64; TA14 p. 138–147
      grammar_why:
        'Para “fazer alguém fazer”, a ação inteira vem antes de “han”: “Nẽko vỹ sẽsĩ tẽ han.” (Manoel fez o pássaro voar). E muitos verbos têm um par: com “-n” alguém faz (“rĩn”, acordar alguém), com “-r” a coisa acontece sozinha (“rĩr”, acordar).',
      grammar_examples: [
        ['Nẽko vỹ sẽsĩ tẽ han.', '“Manoel fez o pássaro voar.” (Tabosa, 2006, p. 73)'],
        ['Gĩr nỹ fi vỹ ti tỹ goj kron han.', '“A mãe fez o menino beber água.” (p. 75)'],
        ['Ũn sĩ nỹ fi vỹ ti rĩn. — Ũn sĩ vỹ rĩr.', '“A mãe acordou o menino. — O menino acordou.” (p. 60)'],
        ['Gĩr vỹ vẽnh rem.', '“O menino se penteou.” (p. 69)'],
      ],
      character_guide: [
        ['han', '“fazer”, no fim: fazer alguém fazer', 'sẽsĩ tẽ han (fazer o pássaro voar)'],
        ['-n / -r', 'alguém faz / acontece sozinho', 'nón / nor (abrir algo / abrir-se)'],
        ['vẽnh', '“a si mesmo”', 'vẽnh rem (pentear-se)'],
        ['jagnẽ', '“um ao outro”', 'jagnẽ ka to tẽ (encontrar-se)'],
        ['mãn tũ nĩ ha', '“parou de” (lit. “não… de novo agora”)', 'vãju mãn tũ nĩ ha (parou de fumar)'],
      ],
    },
    lessons: [
      {
        id: 'kgp-u8-l1',
        title: 'Han: fazer alguém fazer',
        kind: 'licao',
        words: ['han', 'tẽ', 'rĩn', 'pũn', 'nón', 'jãn'],
        cloze: [
          // TA06 p. 73, ex. 103
          { sentence: 'Nẽko vỹ sẽsĩ tẽ ___.', answer: 'han', options: ['han', 'nón', 'rĩn'], translation: '“Manoel fez o pássaro voar.”' },
          // TA06 p. 61, ex. 73
          { sentence: 'Gĩr vỹ jãnkã ___.', answer: 'nón', options: ['nón', 'pũn', 'jãn'], translation: '“O menino abriu a porta.”' },
          // TA06 p. 60, ex. 69
          { sentence: 'Ũn gré vỹ ĩn ___.', answer: 'pũn', options: ['pũn', 'nón', 'rĩn'], translation: '“O homem queimou a casa.”' },
        ],
        voice: {
          // LI23 p. 73, ex. 28 (IS20)
          bot: "Sỹ venh há tĩ! Nũ'ẽmja, mũ jé?",
          botTranslation: 'Ah! Eu quero ver! Vamos, Noemia?',
          expected: ['Mũ jé!', 'mũ jé'],
          hint: 'Aceite o convite com “Mũ jé!” (vamos!). No livro, é o próprio Ikena quem completa: “Mũ jé!”.',
        },
        // TA06 p. 75, ex. 111
        communityPrompt: 'Copie a frase de Tabosa “Gĩr nỹ fi vỹ ti tỹ manỹnỹ kó han.” (a mãe fez o menino comer banana). Sublinhe a ação de dentro (“ti tỹ manỹnỹ kó”) e o “han” do fim.',
      },
      {
        id: 'kgp-u8-l2',
        title: 'Vẽnh e jagnẽ: a si mesmo, um ao outro',
        kind: 'licao',
        words: ['vẽnh', 'rem', 'jagnẽ', 'ka to tẽ', 'pẽnjẽg', 'mãn'],
        cloze: [
          // TA06 p. 69, ex. 99
          { sentence: 'Gĩr vỹ ___ rem.', answer: 'vẽnh', options: ['vẽnh', 'jagnẽ', 'mãn'], translation: '“O menino se penteou.”' },
          // TA06 p. 67, ex. 93
          { sentence: 'Manoel mré Jandira fag vỹ ___ ka to tẽ.', answer: 'jagnẽ', options: ['jagnẽ', 'vẽnh', 'han'], translation: '“Manoel e Jandira se encontraram.”' },
          // TA14 p. 139, ex. 39
          { sentence: 'Manoel vỹ ĩn han ___ huri.', answer: 'pẽnjẽg', options: ['pẽnjẽg', 'mãn', 'jagnẽ'], translation: '“Manoel começou a construir sua casa.”' },
        ],
        voice: {
          // TA14 p. 207, ex. 36
          bot: 'Ã mỹ gãr génh, ka nin vó?',
          botTranslation: 'Você quer milho ou mandioca?',
          expected: ['Gãr.', 'gãr', 'Ka nin.', 'ka nin'],
          hint: 'Escolha uma das duas: “gãr” (milho) ou “ka nin” (mandioca).',
        },
        // TA06 p. 68–69, ex. 96–97
        communityPrompt: 'Copie o par de Tabosa “Jandira fi vỹ gĩr ku pé.” (Jandira lavou o menino) e “Gĩr vỹ vẽnh ku pé.” (o menino se lavou). O que mudou de uma frase para a outra?',
      },
      {
        id: 'kgp-u8-l3',
        title: 'Prova: fazer, a si mesmo, um ao outro',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          // LI23 p. 72, ex. 25 (IS20; o livro escreve “hẽ tá”, Lima, “hẽn tá”)
          bot: 'Ve há han nĩ rỹ, ti tỹ hẽ tá grugrug mũ tá, ãjag néj grugrug rỹ!',
          botTranslation: 'Olhem bem onde está brilhando, acendam a lanterna!',
          expected: ["Hỹ'ỹ.", "hỹ'ỹ", 'Mũ jé!', 'mũ jé'],
          hint: 'Aceite com “Hỹ\'ỹ” (sim) ou chame os outros: “Mũ jé!” (vamos!).',
        },
        // TA14 p. 141–142, ex. 46 e 48
        communityPrompt: 'Escreva o que você começou e o que terminou hoje, com duas frases de Tabosa como modelo: “Manoel vỹ ĩn han pẽnjẽg huri.” (Manoel começou a construir sua casa) e “Manoel vỹ ĩn han kãn huri.” (Manoel terminou de construir a casa).',
      },
    ],
  },
];
