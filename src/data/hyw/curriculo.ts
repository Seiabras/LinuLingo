import type { UnitSeed } from '../types';

/**
 * Trilha do armênio ocidental: quatro unidades, A1.1 ao A2.2 — ver `incomplete` em index.ts. Fontes:
 * Wikipédia ("Western Armenian", "Eastern Armenian", "Mardiros Altounian", "Nejmeh Square") e
 * Wikcionário em inglês (uma entrada por palavra, citada em vocabulario.ts e gramatica.ts).
 */
export const UNITS_HYW: UnitSeed[] = [
  {
    id: 'hyw-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Parev! Առաջին քայլերը',
    emoji: '👋',
    card: {
      id: 'hyw-c1',
      title: 'A mesma letra, um som diferente',
      emoji: '🔄',
      history:
        'O armênio ocidental é um dos dois padrões cultos modernos do armênio — o outro é o oriental, falado na Armênia (também neste app). Os dois usam o mesmo alfabeto de 39 letras, criado em 405 por Mesrop Mashtots, mas descendem de comunidades diferentes: o ocidental se baseia no dialeto armênio de Constantinopla/Istambul, falado no Império Otomano. Depois do genocídio armênio de 1915, que arrasou essas comunidades na Anatólia, o armênio ocidental passou a viver quase só na diáspora — no Líbano, na Síria, na França e nos Estados Unidos — sem nenhum país onde seja língua oficial. A UNESCO o classifica como língua ameaçada.',
      culture_tip:
        'O cumprimento de qualquer hora do dia é “Parev” (Բարև) — a mesma palavra do armênio oriental, só que pronunciada diferente: lá soa “barev”, aqui soa “parev”. Isso acontece porque o ocidental trocou a sonoridade de várias consoantes em relação ao oriental (ver o tópico de gramática “A troca de sonoridade”).',
      grammar_why:
        'O armênio ocidental tem o mesmo esqueleto do oriental — o verbo “ser” no presente (եմ, ես, է…) vem no final da frase nos dois — mas troca três dos seis pronomes (դուն, ան, անոնք em vez de դու, նա, նրանք) e muda a pronúncia de boa parte das consoantes.',
      grammar_examples: [
        ['Parev, ես Անի եմ:', 'Oi, eu sou a Ani.'],
        ['Իսկ դուն, ի՞նչպէս կը կոչուիս:', 'E você, como se chama?'],
        ['Ան Պէյրութէն է:', 'Ele/ela é de Beirute.'],
        ['Ցտեսութիւն, վաղը կը տեսնուինք:', 'Até logo, nos vemos amanhã.'],
      ],
      character_guide: [
        ['Բ բ', 'soa “p” aspirado no ocidental (não “b”!) — a sonora virou aspirada', 'Parev (Բարև) soa “parev”, não “barev”'],
        ['Պ պ', 'soa “b” no ocidental (não “p”!) — a surda simples virou sonora', 'պանիր (banir, “queijo”)'],
        ['Փ փ', 'aspirado nos dois padrões, não muda', 'փոքր não é usado no ocidental para “pequeno” (ver պզտիկ)'],
        ['Ր ր', 'um erre batido só uma vez, mais suave que o “rr” do português', 'Parev (Բարև)'],
        ['Ս ս', 'como o “s” de “sapo”, nunca como “z”', 'ես (yess, “eu”)'],
      ],
    },
    lessons: [
      {
        id: 'hyw-u1-l1',
        title: 'Parev, shnorhagaloutioun, tsdesoutioun!',
        kind: 'licao',
        words: ['Բարև', 'Բարի լոյս', 'Ցտեսութիւն', 'Շնորհակալութիւն', 'Ինչպէ՞ս ես', 'Խնդրեմ'],
        cloze: [
          { sentence: '___, Անի՛: Ինչպէ՞ս ես:', answer: 'Բարև', options: ['Բարև', 'Ցտեսութիւն', 'Շնորհակալութիւն'], translation: 'Oi, Ani. Como vai?' },
          { sentence: 'Առտու է. ___:', answer: 'Բարի լոյս', options: ['Բարի լոյս', 'Ցտեսութիւն', 'Շնորհակալութիւն'], translation: 'É de manhã: bom dia!' },
          { sentence: 'Շատ ___:', answer: 'շնորհակալութիւն', options: ['շնորհակալութիւն', 'բարև', 'ցտեսութիւն'], translation: 'Muito obrigado.' },
        ],
        voice: {
          bot: 'Բարև: Ինչպէ՞ս ես:',
          botTranslation: 'Oi! Como vai?',
          expected: ['Լաւ եմ, շնորհակալութիւն: Իսկ դուն՞:', 'լաւ եմ', 'շնորհակալութիւն'],
          hint: 'Responda que vai bem e devolva a pergunta: “Լաւ եմ, շնորհակալութիւն: Իսկ դուն՞:”.',
        },
        communityPrompt: 'Escreva três cumprimentos em armênio ocidental: “Բարև” (parev, a qualquer hora), “Բարի լոյս” (bom dia) e “Ցտեսութիւն” (até logo).',
      },
      {
        id: 'hyw-u1-l2',
        title: 'Ես, դուն, ան',
        kind: 'licao',
        words: ['ես', 'դուն', 'ան', 'մենք', 'անուն', 'ըլլալ'],
        cloze: [
          { sentence: '___ Անի եմ:', answer: 'Ես', options: ['Ես', 'Դուն', 'Ան'], translation: 'Eu sou a Ani.' },
          { sentence: 'Իսկ ___, ի՞նչպէս կը կոչուիս:', answer: 'դուն', options: ['դուն', 'ան', 'մենք'], translation: 'E você, como se chama?' },
          { sentence: '___ Պէյրութէն է:', answer: 'Ան', options: ['Ան', 'Ես', 'Դուն'], translation: 'Ele/ela é de Beirute.' },
        ],
        voice: {
          bot: 'Բարև: Ի՞նչպէս կը կոչուիս:',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['Անունս Լինու է: Իսկ դուն՞:', 'անունս', 'իսկ դուն'],
          hint: 'Diga o seu nome com “Անունս … է” e devolva a pergunta com “Իսկ դուն՞:”.',
        },
        communityPrompt: 'Apresente-se em armênio ocidental: diga o seu nome com “Անունս … է” e pergunte o nome de alguém com “Ի՞նչպէս կը կոչուիս:”.',
      },
      {
        id: 'hyw-u1-l3',
        title: 'Քննութիւն. առաջին քայլերը',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Բարև, անունս Արամ է: Ի՞նչպէս կը կոչուիս, եւ ուրկէ՞ ես:',
          botTranslation: 'Oi, meu nome é Aram. Como você se chama e de onde você é?',
          expected: ['Բարև, անունս Լուսիա է, եւ ես Սան Պաուլուէն եմ:', 'անունս', 'ես', 'եմ'],
          hint: 'Devolva o cumprimento (“Բարև”), diga o nome (“Անունս … է”) e a cidade (“Ես … էն եմ”).',
        },
        communityPrompt: 'Escreva uma apresentação completa em armênio ocidental: cumprimento, nome com “Անունս … է”, cidade com “Ես … էն եմ” e uma despedida (“Ցտեսութիւն”).',
      },
    ],
  },
  {
    id: 'hyw-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ընտանիքը և տունը',
    emoji: '👪',
    card: {
      id: 'hyw-c2',
      title: 'Uma diáspora sem um só centro',
      emoji: '🌍',
      history:
        'Sem um país próprio, o armênio ocidental sobrevive em comunidades espalhadas: o Líbano — onde Beirute é, desde o século XX, um centro importante de imprensa e de material escolar em armênio ocidental —, a Síria (Alepo, Damasco), a França (Marselha) e os Estados Unidos (a região de Los Angeles e Fresno, na Califórnia, tem a maior concentração de armênios ocidentais fora do Oriente Médio). Essa dispersão é também por isso que o armênio ocidental manteve a ortografia clássica, de antes da reforma soviética: cada comunidade seguiu ensinando a língua do seu próprio jeito, longe da reforma que só valeu para a Armênia Soviética.',
      culture_tip:
        'Como em muitas culturas do Mediterrâneo Oriental, a família estendida é central: perguntar pela “ընտանիք” de alguém é uma forma comum de puxar conversa, e não é raro encontrar três gerações morando perto umas das outras.',
      grammar_why:
        'O ocidental tem palavras próprias para verbos do dia a dia: “ունենալ” (ter) é igual ao oriental, mas “ter um irmão” usa a mesma estrutura “ես … ունիմ” (eu … tenho), só que com a terminação ocidental do presente (-իմ em vez de -եմ em alguns verbos).',
      grammar_examples: [
        ['Իմ ընտանիքս մեծ է:', 'A minha família é grande.'],
        ['Ես մէկ եղբայր ունիմ:', 'Eu tenho um irmão.'],
        ['Իմ տունս պզտիկ է:', 'A minha casa é pequena.'],
        ['Ես չեմ գիտեր:', 'Eu não sei.'],
      ],
      character_guide: [
        ['Տ տ', 'soa “d” no ocidental (não “t”!) — a surda simples virou sonora', 'տուն (doun, “casa”)'],
        ['Դ դ', 'soa “t” aspirado no ocidental (não “d”!) — a sonora virou aspirada', 'դուն (toun, “tu”)'],
        ['Կ կ', 'soa “g” no ocidental — a surda simples virou sonora', 'կատու (gadou, “gato”)'],
        ['Գ գ', 'soa “k” aspirado no ocidental — a sonora virou aspirada', 'գլուխ (k’loukh, “cabeça”)'],
        ['ույ / ոյ', 'o ocidental mantém a grafia clássica “ոյ”, onde a reforma oriental escreve “ույ”', 'քոյր (k’oyr, “irmã”)'],
      ],
    },
    lessons: [
      {
        id: 'hyw-u2-l1',
        title: 'Ընտանիքս',
        kind: 'licao',
        words: ['ընտանիք', 'հայր', 'մայր', 'եղբայր', 'քոյր', 'ունենալ'],
        cloze: [
          { sentence: 'Իմ ___ -ս մեծ է:', answer: 'ընտանիք', options: ['ընտանիք', 'հայր', 'մայր'], translation: 'A minha família é grande.' },
          { sentence: 'Ես մէկ ___ ունիմ:', answer: 'եղբայր', options: ['եղբայր', 'քոյր', 'հայր'], translation: 'Eu tenho um irmão.' },
          { sentence: 'Իմ ___ -ս Հալէպէն է:', answer: 'հայր', options: ['հայր', 'մայր', 'քոյր'], translation: 'O meu pai é de Alepo.' },
        ],
        voice: {
          bot: 'Եղբայր կամ քոյր ունի՞ս:',
          botTranslation: 'Você tem irmão ou irmã?',
          expected: ['Այո, ես մէկ եղբայր եւ մէկ քոյր ունիմ:', 'ես … ունիմ', 'եղբայր', 'քոյր'],
          hint: 'Responda com “Այո, ես … ունիմ” ou “Ոչ, ես չունիմ”.',
        },
        communityPrompt: 'Descreva a sua família em armênio ocidental: quantos irmãos (եղբայր) e irmãs (քոյր) você tem, e como se chamam os seus pais (հայր, մայր).',
      },
      {
        id: 'hyw-u2-l2',
        title: 'Տանը',
        kind: 'licao',
        words: ['տուն', 'ջուր', 'հաց', 'կաթ', 'պանիր', 'ուտել'],
        cloze: [
          { sentence: 'Իմ ___ -ս պզտիկ է:', answer: 'տուն', options: ['տուն', 'ջուր', 'հաց'], translation: 'A minha casa é pequena.' },
          { sentence: 'Ես ___ կը խմեմ:', answer: 'ջուր', options: ['ջուր', 'հաց', 'պանիր'], translation: 'Eu bebo água.' },
          { sentence: 'Ես ___ եւ պանիր կ՚ուտեմ:', answer: 'հաց', options: ['հաց', 'կաթ', 'ջուր'], translation: 'Eu como pão e queijo.' },
        ],
        voice: {
          bot: 'Ի՞նչ կ՚ուտես առտուն:',
          botTranslation: 'O que você come de manhã?',
          expected: ['Ես հաց եւ պանիր կ՚ուտեմ:', 'ես … կ՚ուտեմ', 'հաց', 'պանիր'],
          hint: 'Diga o que come com “Ես … կ՚ուտեմ”.',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã, usando “ես … կ՚ուտեմ” e “ես … կը խմեմ”.',
      },
      {
        id: 'hyw-u2-l3',
        title: 'Քննութիւն. ընտանիք և տուն',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Պատմէ քու ընտանիքիդ մասին. եղբայր կամ քոյր ունի՞ս:',
          botTranslation: 'Conte da sua família: você tem irmão ou irmã?',
          expected: ['Այո, ես մէկ քոյր ունիմ: Անոր անունը Մարիա է:', 'ես … ունիմ', 'անունը'],
          hint: 'Diga quantos irmãos tem (“ես … ունիմ”) e o nome deles (“անոր անունը … է”).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “ես … ունիմ”, “անունը … է” e “է”.',
      },
    ],
  },
  {
    id: 'hyw-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Ժամանակը եւ քաղաքը',
    emoji: '🕰️',
    card: {
      id: 'hyw-c3',
      title: 'O relógio da Praça Nejmeh, em Beirute',
      emoji: '🕰️',
      // en.wikipedia.org/wiki/Mardiros_Altounian e en.wikipedia.org/wiki/Nejmeh_Square (consultadas em
      // 09-10/10/2026): Mardiros Altounian, arquiteto armênio-libanês formado na École des Beaux-Arts
      // de Paris, projetou a Torre do Relógio Al-Abed na Praça Nejmeh (Place de l'Étoile) em Beirute —
      // um presente do emigrante libanês-brasileiro Michel Abed —, hoje com um relógio de quatro faces;
      // as fontes não fecham a data exata entre 1931 e 1934, então o texto fica no "anos 1930".
      history:
        'Na Praça Nejmeh (Place de l’Étoile), no centro de Beirute, a torre do relógio foi desenhada nos anos 1930 pelo arquiteto Mardiros Altounian, armênio-libanês formado em Paris — um presente do emigrante libanês-brasileiro Michel Abed à cidade. Hoje o relógio de quatro faces marca as horas no coração da capital onde o armênio ocidental, sem país próprio desde o genocídio de 1915, segue bem vivo: nas igrejas, nas escolas e no comércio ao redor da própria praça.',
      culture_tip:
        'Como a diáspora armênia ocidental não tem um país só seu, a vida muda de moeda e de calendário comercial de uma comunidade pra outra — mas a semana de sete dias (“շաբաթ”) e as horas do dia (“ժամ”) são referência em qualquer lugar onde se fala a língua, do Líbano à França aos Estados Unidos.',
      grammar_why:
        'Esta unidade traz o plural com “-ներ” ou “-եր” (օր → օրեր, քաղաք → քաղաքներ) e formaliza algo que o pacote já usa desde o A1: o artigo definido “-ը/-ն” e os sufixos possessivos “-ս” (meu) e “-դ” (teu), que colam direto no final do substantivo.',
      grammar_examples: [
        ['Շաբաթը եօթ օր ունի:', 'A semana tem sete dias.'],
        ['Քաղաքը մեծ է:', 'A cidade é grande.'],
        ['Աշխատանքս լաւ է:', 'O meu trabalho é bom.'],
        ['Ես գրադարան պիտի երթամ:', 'Eu vou (irei) à biblioteca.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'hyw-u3-l1',
        title: 'Օրեր, շաբաթներ, ամիսներ',
        kind: 'licao',
        words: ['օր', 'ժամ', 'շաբաթ', 'ամիս', 'տարի', 'այսօր'],
        cloze: [
          { sentence: '___ եօթ օր ունի:', answer: 'Շաբաթը', options: ['Շաբաթը', 'Ամիսը', 'Տարին'], translation: 'A semana tem sete dias.' },
          { sentence: '___ ութ է:', answer: 'Ժամը', options: ['Ժամը', 'Օրը', 'Տարին'], translation: 'São oito horas.' },
          { sentence: '___ լաւ օր է:', answer: 'Այսօր', options: ['Այսօր', 'Վաղը', 'Տարին'], translation: 'Hoje é um bom dia.' },
        ],
        voice: {
          bot: 'Այսօր լաւ է:',
          botTranslation: 'Hoje está bom.',
          expected: ['Այո, այսօր լաւ օր է:', 'այսօր', 'լաւ'],
          hint: 'Confirme usando “այսօր” (hoje) e “լաւ” (bom).',
        },
        communityPrompt: 'Escreva as palavras do tempo em armênio ocidental: “օր”, “շաբաթ”, “ամիս”, “տարի” — e diga que dia é hoje usando “այսօր”.',
      },
      {
        id: 'hyw-u3-l2',
        title: 'Քաղաքին մէջ',
        kind: 'licao',
        words: ['քաղաք', 'փողոց', 'դպրոց', 'եկեղեցի', 'շուկայ', 'գրադարան'],
        cloze: [
          { sentence: '___ մեծ է:', answer: 'Քաղաքը', options: ['Քաղաքը', 'Փողոցը', 'Դպրոցը'], translation: 'A cidade é grande.' },
          { sentence: '___ պզտիկ է:', answer: 'Դպրոցը', options: ['Դպրոցը', 'Եկեղեցին', 'Գրադարանը'], translation: 'A escola é pequena.' },
          { sentence: 'Ես ___ պիտի երթամ:', answer: 'շուկայ', options: ['շուկայ', 'գրադարան', 'դպրոց'], translation: 'Eu vou ao mercado.' },
        ],
        voice: {
          bot: 'Ես վաղը գրադարան պիտի երթամ:',
          botTranslation: 'Amanhã eu vou (irei) à biblioteca.',
          expected: ['Ես ալ պիտի երթամ:', 'պիտի երթամ'],
          hint: 'Diga que você também vai, usando “պիտի երթամ” (eu vou/irei).',
        },
        communityPrompt: 'Escreva para onde você vai hoje ou amanhã em armênio ocidental, usando “ես … պիտի երթամ” e uma palavra desta lição (շուկայ, գրադարան, դպրոց, եկեղեցի).',
      },
      {
        id: 'hyw-u3-l3',
        title: 'Քննութիւն. ժամանակը եւ քաղաքը',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Շաբաթը եօթ օր ունի: Դպրոցը մեծ է, եկեղեցին ալ:',
          botTranslation: 'A semana tem sete dias. A escola é grande, e a igreja também.',
          expected: ['Ես գրադարան պիտի երթամ:', 'գրադարան', 'պիտի երթամ'],
          hint: 'Diga que você vai à biblioteca, usando “ես … պիտի երթամ”.',
        },
        communityPrompt: 'Escreva um parágrafo curto sobre a sua semana: quantos dias ela tem (“Շաբաթը եօթ օր ունի”) e para onde você vai (“ես … պիտի երթամ”), usando pelo menos três palavras desta unidade.',
      },
    ],
  },
  {
    id: 'hyw-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Աշխատանք եւ կայարան',
    emoji: '🧳',
    card: {
      id: 'hyw-c4',
      title: 'Uma palavra, duas moedas',
      emoji: '💰',
      // en.wiktionary.org/wiki/դրամ (consultado em 09-10/10/2026): "դրամ" tem dois sentidos no
      // verbete — "money" (dinheiro, em geral) e, com maiúscula no sentido técnico, "dram", a
      // unidade monetária da Armênia.
      history:
        'A palavra “դրամ” quer dizer “dinheiro” no dia a dia, mas também é o nome oficial da moeda da Armênia atual — o dram armênio. É uma coincidência e tanto pra quem estuda as duas variantes do armênio: a diáspora ocidental, sem país próprio desde o genocídio de 1915, não usa o dram em lugar nenhum — cada comunidade (Beirute, Marselha, Los Angeles) paga as contas na moeda de onde vive. O que não muda de comunidade pra comunidade é a própria palavra “դրամ”, pedida em qualquer banco ou mercado em armênio ocidental.',
      culture_tip:
        'Viajar entre as comunidades da diáspora — de avião (“ինքնաթիռ”) ou de carro (“ինքնաշարժ”) — sempre fez parte da vida armênia ocidental, de visita a parentes ou em busca de trabalho (“աշխատանք”). Perguntar pela profissão de alguém é comum logo numa conversa nova, como já apareceu antes neste curso com “բժիշկ” (médico).',
      grammar_why:
        'Esta unidade traz o futuro com “պիտի” antes do verbo (Ես վաղը աշխատանք պիտի ունենամ, eu terei trabalho amanhã) e a negação com o auxiliar “չեմ/չես/չի…” mais a forma conectiva do verbo principal (Ես չեմ գրեր, eu não escrevo) — diferente da negação do próprio futuro, que é “պիտի չ-” direto no verbo, sem o auxiliar “չեմ”.',
      grammar_examples: [
        ['Ես վաղը կայարան պիտի երթամ:', 'Amanhã eu irei à estação.'],
        ['Ես չեմ գրեր:', 'Eu não escrevo.'],
        ['Ես դրամ պիտի ունենամ:', 'Eu terei dinheiro.'],
        ['Աշխատանքս լաւ է. բժիշկ եմ:', 'O meu trabalho é bom: eu sou médico(a).'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'hyw-u4-l1',
        title: 'Ուզել, գալ, գրել',
        kind: 'licao',
        words: ['ուզել', 'գալ', 'գրել', 'աշխատիլ', 'աշխատանք', 'վաղը'],
        cloze: [
          { sentence: 'Ես ջուր ___:', answer: 'կ՚ուզեմ', options: ['կ՚ուզեմ', 'կու գամ', 'չեմ գրեր'], translation: 'Eu quero água.' },
          { sentence: 'Ես տուն ___:', answer: 'կու գամ', options: ['կու գամ', 'կ՚ուզեմ', 'չեմ գրեր'], translation: 'Eu venho para casa.' },
          { sentence: 'Աշխատանքս ___:', answer: 'լաւ է', options: ['լաւ է', 'մեծ է', 'պզտիկ է'], translation: 'O meu trabalho é bom.' },
        ],
        voice: {
          bot: 'Ես հաց կ՚ուզեմ:',
          botTranslation: 'Eu quero pão.',
          expected: ['Ես ալ հաց կ՚ուզեմ:', 'կ՚ուզեմ'],
          hint: 'Diga que você também quer, usando “ես ալ … կ՚ուզեմ”.',
        },
        communityPrompt: 'Escreva três frases em armênio ocidental usando “կ՚ուզեմ” (eu quero), “կու գամ” (eu venho) e “չեմ գրեր” (eu não escrevo).',
      },
      {
        id: 'hyw-u4-l2',
        title: 'Կայարանի մէջ',
        kind: 'licao',
        words: ['բժիշկ', 'կայարան', 'տոմս', 'դրամ', 'ինքնաշարժ', 'ինքնաթիռ'],
        cloze: [
          { sentence: 'Տոմսս ___:', answer: 'ունիմ', options: ['ունիմ', 'ունիս', 'ունի'], translation: 'Eu tenho o meu bilhete.' },
          { sentence: '___ մեծ է:', answer: 'Կայարանը', options: ['Կայարանը', 'Ինքնաշարժը', 'Ինքնաթիռը'], translation: 'A estação é grande.' },
          { sentence: 'Ես ___ ունիմ:', answer: 'դրամ', options: ['դրամ', 'տոմս', 'բժիշկ'], translation: 'Eu tenho dinheiro.' },
        ],
        voice: {
          bot: 'Կայարանի մէջ ենք: Տոմսդ ունիս;',
          botTranslation: 'Estamos na estação. Você tem o seu bilhete?',
          expected: ['Այո, տոմսս ունիմ:', 'տոմսս', 'ունիմ'],
          hint: 'Responda que tem o seu bilhete, usando “տոմսս ունիմ”.',
        },
        communityPrompt: 'Escreva uma frase dizendo que você tem dinheiro e um bilhete, usando “ունիմ” e o sufixo “-ս”.',
      },
      {
        id: 'hyw-u4-l3',
        title: 'Քննութիւն. աշխատանք եւ կայարան',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Վաղը աշխատանք պիտի ունենամ: Դրամ կ՚ուզեմ:',
          botTranslation: 'Amanhã eu terei trabalho. Eu quero dinheiro.',
          expected: ['Ես ալ դրամ կ՚ուզեմ:', 'կ՚ուզեմ'],
          hint: 'Diga que você também quer dinheiro, usando “ես ալ … կ՚ուզեմ”.',
        },
        communityPrompt: 'Escreva um parágrafo curto sobre os seus planos de amanhã, usando o futuro com “պիտի” (ex.: “վաղը … պիտի …”) e pelo menos duas palavras desta unidade (աշխատանք, դրամ, կայարան, ինքնաշարժ, ինքնաթիռ, բժիշկ, տոմս).',
      },
    ],
  },
];
