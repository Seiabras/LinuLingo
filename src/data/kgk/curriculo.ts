import type { UnitSeed } from '../types';

/**
 * Trilha do kaiowá, do A1.1 ao A2.2 (curso completo até o teto A2, desde 17/10/2026 — ver `incomplete` em
 * index.ts). Revisão de 17/10/2026: as frases das lições, dos testes de voz e dos exemplos dos cartões são
 * do «Dicionário bilíngue kaiwá-português» de Eliane B. L. de Barros (dissertação, UFMS, 2014), copiadas
 * como estão no verbete, com a página impressa no comentário; as poucas frases que só aparecem como
 * pedaço de uma frase maior do dicionário levam a nota «oração tirada de». As tabelas de prefixos vêm dos
 * quadros 10, 11, 13, 15 e 16 de Barros (pp. 107–112), que adaptam Bridgeman e Cardoso (2008). Nenhuma frase
 * foi montada nas lições do A2. Grafia: a ortografia kaiwá do SIL (Bridgeman 2002), a mesma de Barros.
 *
 * Antes da revisão, o A1 traduzia «Óga porã» como “a casa é bonita”; Barros (2014, p. 99) mostra que o
 * adjetivo logo depois do nome é atributivo (avati morotĩ, “milho branco”) e que, na 3ª pessoa, o
 * adjetivo que funciona como predicado leva i- (Ituja-ma óga, “a casa já estava velha”, p. 217; Quadro
 * 16, p. 112). As lições do A1 foram refeitas com frases do dicionário.
 */
export const UNITS_KGK: UnitSeed[] = [
  {
    id: 'kgk-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Agwyjevete! Xe, ne, ha\'e',
    emoji: '👋',
    card: {
      id: 'kgk-c1',
      title: 'Kaiowá: pãi-tavyterã, povo do sul do Mato Grosso do Sul',
      emoji: '🌿',
      // IBGE 2022 e Amambai: como antes (Wikipédia, «Língua caiouá»); Barros 2014, pp. 66 e 90–92 (segunda
      // maior etnia indígena do Brasil no censo de 2010; ortografia do SIL dos anos 1960, cartilha Te'ýi
      // nhe'ẽ de 1963; escolas que usam a convenção paraguaia, citando Cardoso 2008, pp. 19–20)
      history:
        'O kaiowá (também kaiwá; tavyterã ñe\'ẽ, “língua do povo tavyterã”) é uma língua tupi-guarani viva, do mesmo subgrupo do guarani paraguaio e do guarani mbyá. Segundo o Censo do IBGE de 2022, cerca de 38,6 mil pessoas a falam no Brasil, além de milhares no Paraguai e algumas centenas na Argentina. O povo vive sobretudo no sul do Mato Grosso do Sul, em terras indígenas como Dourados, Caarapó, Amambai e Panambizinho. Em 2024, o kaiowá virou língua cooficial no município de Amambai (MS). A escrita tem duas tradições: a do SIL, criada nos anos 1960 para cartilhas como “Te\'ýi nhe\'ẽ” (1963), com nh, gw e kw, que este curso segue; e a do guarani paraguaio, com ñ, gu e ku, usada em muitas escolas da região de Dourados.',
      // Benites 2022 (agwyje, teko araguyje); Barros 2014, pp. 71–72 (família extensa, tekoha)
      culture_tip:
        'A palavra “agwyjevete” liga-se a “agwyje”, “perfeito, maduro”, um estado muito importante na espiritualidade kaiowá: o pesquisador kaiowá Eliel Benites dedica a esse conceito a sua tese de doutorado (UFGD). Por isso ela serve como um agradecimento forte, “muito obrigado(a)”. A vida kaiowá se organiza em famílias extensas, reunidas em tekoha, o lugar onde se vive o teko, o modo de ser kaiowá.',
      // Barros 2014, p. 102 (Quadro 8), p. 199 (Pene mitã) e p. 99 (adjetivo atributivo)
      grammar_why:
        'Os pronomes do kaiowá têm duas formas de “nós”: “nhane” (ou “nhande”) inclui a pessoa com quem se fala, e “ore” não inclui. Para dizer “vocês são crianças”, basta pôr lado a lado o pronome e o nome: “Pene mitã.” Já o adjetivo logo depois do nome o descreve: “karia\'y porã” é “jovem bom”.',
      grammar_examples: [
        // Benites 2022, grafia convertida
        ['Agwyjevete!', 'Muito obrigado(a)!'],
        // Barros 2014, p. 199
        ['Pene mitã.', 'Vocês são crianças.'],
        // Barros 2014, p. 99
        ['Karia\'y porã.', 'Jovem bom.'],
        // Barros 2014, p. 196
        ['Orojapo ore kyha.', 'Nós (sem você) fazíamos nossas redes.'],
      ],
      // Barros 2014, pp. 141–142 (pronúncia das letras, segundo Bridgeman 2002)
      character_guide: [
        ['\' (oclusiva glotal)', 'uma pequena parada entre as vogais', 'ha\'e (ele, ela), ju\'i (sapo)'],
        ['x', 'som chiado, como em “xícara”', 'xe (eu)'],
        ['nh', 'como em “ninho”', 'nhane (nós, com você)'],
        ['y', 'vogal própria do guarani, entre “i” e “u”', 'y (água), yvy (terra)'],
        ['ã, ẽ, ĩ, õ, ũ, ỹ', 'vogal nasal: sai pelo nariz', 'peẽ (vocês), peteĩ (um)'],
      ],
    },
    lessons: [
      {
        id: 'kgk-u1-l1',
        title: 'Agwyjevete, xe, ne, ha\'e',
        kind: 'licao',
        words: ['agwyjevete', 'porã', 'xe', 'ne', 'ha\'e', 'ava'],
        cloze: [
          // Benites 2022, grafia convertida
          { sentence: '“___!” (agradecendo)', answer: 'Agwyjevete', options: ['Agwyjevete', 'Porã', 'Ava'], translation: '“Muito obrigado(a)!”' },
          // Barros 2014, p. 170
          { sentence: '___ sy ndive aju.', answer: 'Xe', options: ['Xe', 'Ne', 'Ha\'e'], translation: 'Eu vim com minha mãe.' },
          // Barros 2014, p. 99
          { sentence: 'Karia\'y ___.', answer: 'porã', options: ['porã', 'ava', 'xe'], translation: 'Jovem bom.' },
        ],
        voice: {
          bot: 'Agwyjevete!',
          botTranslation: 'Muito obrigado(a)!',
          expected: ['Agwyjevete!', 'agwyjevete'],
          hint: 'Agradeça de volta com “Agwyjevete!”.',
        },
        communityPrompt: 'Escreva um agradecimento com “Agwyjevete” e diga com quem você veio, como em “Xe sy ndive aju” (eu vim com minha mãe).',
      },
      {
        id: 'kgk-u1-l2',
        title: 'Nhane, ore, peẽ, kunha, karai',
        kind: 'licao',
        words: ['nhane', 'ore', 'peẽ', 'ha\'e kwéry', 'kunha', 'karai'],
        cloze: [
          // Barros 2014, p. 192
          { sentence: 'Ou ___ pytygwõ.', answer: 'nhane', options: ['nhane', 'peẽ', 'karai'], translation: 'Eles vieram nos ajudar (a todos nós, com você).' },
          // Barros 2014, p. 196
          { sentence: 'Orojapo ___ kyha.', answer: 'ore', options: ['ore', 'nhane', 'peẽ'], translation: 'Nós (sem você) fazíamos nossas redes.' },
          // Barros 2014, p. 175
          { sentence: 'Entéro ___ gwive okyhyje.', answer: 'kunha', options: ['kunha', 'karai', 'peẽ'], translation: 'Todas as mulheres ficaram com medo.' },
        ],
        // Barros 2014, p. 196: repetir a frase
        voice: {
          bot: 'Orojapo ore kyha.',
          botTranslation: 'Nós (sem você) fazíamos nossas redes.',
          expected: ['Orojapo ore kyha.', 'ore'],
          hint: 'Repita: “oro-” no verbo e “ore” antes do nome são o “nós” que não inclui quem ouve.',
        },
        communityPrompt: 'Escreva duas frases sobre “nós”: uma com “nhane” (incluindo quem lê) e outra com “ore” (sem incluir).',
      },
      {
        // lição extra (17/10/2026): cumprimentar e convidar; Barros 2014, p. 181 (Mba'éixa pa ereiko?), p. 189
        // (Ne resãi?, naháni), p. 171 (ka'ay), p. 165 (jaha), p. 150 (Eju ko'a-py)
        id: 'kgk-u1-l4',
        title: 'Mba\'éixa pa ereiko? Cumprimentar e convidar',
        kind: 'licao',
        words: ['Mba\'éixa pa ereiko?', 'Ne resãi?', 'naháni', 'ka\'ay', 'jaha', 'Eju ko\'a-py.'],
        cloze: [
          // Barros 2014, p. 181
          { sentence: '___ pa ereiko?', answer: 'Mba\'éixa', options: ['Mba\'éixa', 'Naháni', 'Jaha'], translation: 'Como você está?' },
          // Barros 2014, p. 171
          { sentence: 'Egwahẽ ja\'u ___, he\'i.', answer: 'ka\'ay', options: ['ka\'ay', 'naháni', 'jaha'], translation: '“Venha, vamos beber mate”, ele disse.' },
          // Barros 2014, p. 165
          { sentence: '___ katu, ha\'e íxupe.', answer: 'Jaha', options: ['Jaha', 'Naháni', 'Ka\'ay'], translation: '“Vamos então”, eu lhe disse.' },
        ],
        // Barros 2014, p. 150 (Eju ko'a-py) e p. 165 (Jaha katu, oração tirada de “Jaha katu, ha'e íxupe”)
        voice: {
          bot: 'Eju ko\'a-py.',
          botTranslation: 'Venha aqui.',
          expected: ['Jaha katu.', 'jaha'],
          hint: 'Aceite o convite: “Jaha katu” (vamos então).',
        },
        communityPrompt: 'Cumprimente alguém com “Mba\'éixa pa ereiko?” ou “Ne resãi?” e convide para tomar mate: “Egwahẽ ja\'u ka\'ay.”',
      },
      {
        // lição extra (17/10/2026): as pessoas; Barros 2014, p. 177 (kwimba'e), p. 175 (kunumi, kunhataĩ), p. 172
        // (karia'y), p. 158 (héry), p. 185 (mitã'i); p. 99 (mitã kwimba'e, mitã kunha, citando Cardoso 2008, p. 43)
        id: 'kgk-u1-l5',
        title: 'Kwimba\'e, kunumi, kunhataĩ: as pessoas',
        kind: 'licao',
        words: ['kwimba\'e', 'kunumi', 'kunhataĩ', 'karia\'y', 'héry', 'mitã\'i'],
        cloze: [
          // Barros 2014, p. 99
          { sentence: 'Mitã ___.', answer: 'kwimba\'e', options: ['kwimba\'e', 'héry', 'kunhataĩ'], translation: 'Menino (criança do sexo masculino).' },
          // Barros 2014, p. 159
          { sentence: 'Upéixa-gwi pe ___ kwarahy.', answer: 'héry', options: ['héry', 'kunumi', 'mitã\'i'], translation: 'Por isso o nome dele é sol.' },
          // Barros 2014, p. 175
          { sentence: 'Pe ___-rehe ojepota mborevi.', answer: 'kunhataĩ', options: ['kunhataĩ', 'karia\'y', 'héry'], translation: 'A anta se apaixonou por aquela moça.' },
        ],
        // Barros 2014, p. 99: as duas formas lado a lado
        voice: {
          bot: 'Mitã kwimba\'e.',
          botTranslation: 'Menino.',
          expected: ['Mitã kunha.', 'kunha'],
          hint: 'Agora diga “menina”: troque “kwimba\'e” (macho) por “kunha” (fêmea).',
        },
        communityPrompt: 'Escreva quem vive na sua casa com kwimba\'e (homem), kunha (mulher), kunumi (menino), kunhataĩ (moça), karia\'y (rapaz) e mitã\'i (bebê).',
      },
      {
        id: 'kgk-u1-l3',
        title: 'Teste: agwyjevete, xe, ha\'e',
        kind: 'prova',
        words: [],
        cloze: [],
        // Barros 2014, p. 181 (pergunta) e p. 189 (Ne resãi?)
        voice: {
          bot: 'Mba\'éixa pa ereiko?',
          botTranslation: 'Como você está?',
          expected: ['Agwyjevete! Ne resãi?', 'agwyjevete', 'Ne resãi?'],
          hint: 'Agradeça com “Agwyjevete” e devolva a pergunta: “Ne resãi?” (você está com saúde?).',
        },
        communityPrompt: 'Escreva uma apresentação curta: agradeça com “Agwyjevete”, diga com quem você veio (“Xe sy ndive aju”) e use “nhane” ou “ore” para falar de “nós”.',
      },
    ],
  },
  {
    id: 'kgk-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Kwarahy, jasy, y: a natureza',
    emoji: '🌞',
    card: {
      id: 'kgk-c2',
      title: 'Ára: céu, dia e tempo numa só palavra',
      emoji: '☀️',
      // Benites 2022 (ára, teko araguyje); Barros 2014, p. 148 (áry: céu; dia) e pp. 100–101 (numerais até quatro,
      // depois heta; numerais do português e do espanhol)
      history:
        'No kaiowá, “ára” (Barros escreve “áry”) é ao mesmo tempo “céu” e “dia”; para Eliel Benites, também “tempo”. Tradicionalmente, a contagem kaiowá tem só quatro numerais próprios: peteĩ (um), mokõi (dois), mbohapy (três) e irundy (quatro). Daí em diante se usa “heta” (muitos). Hoje os números do português e do espanhol também são comuns, sobretudo na escola e no comércio. Os outros guaranis criaram um cinco com “po” (mão), mas os falantes de kaiowá não aceitam esse sistema, segundo Barros (2014).',
      // Barros 2014, p. 73 (avati morotĩ, jakaira; avati nhemongarai, a festa anual do batismo do milho, citando
      // Schaden 1962, p. 47)
      culture_tip:
        'O avati morotĩ (milho branco), também chamado jakaira, é o principal produto da roça kaiowá e carrega a espiritualidade ligada à comida: rezas e cantos acompanham o plantio, a colheita e o preparo. A grande festa do ano é o avati nhemongarai, o “batismo do milho”, na época da colheita. O mbaraka, o chocalho dos cantos-reza, deu à língua portuguesa a palavra “maraca”.',
      // Barros 2014, p. 100 (numerais antes do nome, adjetivos depois)
      grammar_why:
        'O numeral vem sempre antes do nome: “mokõi jasy” é “dois meses”. O adjetivo vem depois: “gwyra porã” é “pássaro bonito”.',
      grammar_examples: [
        // Barros 2014, p. 187
        ['Mokõi jasy oky.', 'Choveu por dois meses.'],
        // Barros 2014, p. 155
        ['Ohasa mbohapy jasy.', 'Passaram-se três meses.'],
        // Barros 2014, p. 176
        ['Haku eterei kwarahy.', 'O sol está quente demais.'],
        // Barros 2014, p. 152
        ['Gwyra porã voi xirino.', 'O beija-flor é mesmo um pássaro bonito.'],
      ],
      // Barros 2014, pp. 141–142
      character_guide: [
        ['kw', 'como em “quarto”', 'kwarahy (sol)'],
        ['gw', 'como em “guarda”', 'gwyra (pássaro), jagwarete (onça)'],
        ['j', 'som de “dj”, como em “jeans”', 'jasy (lua)'],
        ['mb, nd', 'o “b” é sempre “mb”, o “d” é sempre “nd”', 'mbohapy (três)'],
        ['v', 'como em português', 'yvy (terra), yvyra (árvore)'],
      ],
    },
    lessons: [
      {
        id: 'kgk-u2-l1',
        title: 'Kwarahy, jasy, y, yvy, tata, peteĩ',
        kind: 'licao',
        words: ['kwarahy', 'jasy', 'y', 'yvy', 'tata', 'peteĩ'],
        cloze: [
          // Barros 2014, p. 176
          { sentence: 'Haku eterei ___.', answer: 'kwarahy', options: ['kwarahy', 'jasy', 'y'], translation: 'O sol está quente demais.' },
          // Barros 2014, p. 151
          { sentence: 'Osẽ ___-gwi.', answer: 'y', options: ['y', 'yvy', 'tata'], translation: 'Eles saíram da água.' },
          // Barros 2014, p. 200
          { sentence: 'Upéixa ohasa ave ___ ro\'y.', answer: 'peteĩ', options: ['peteĩ', 'tata', 'jasy'], translation: 'Assim passou também um ano.' },
        ],
        // Barros 2014, p. 176: repetir
        voice: {
          bot: 'Haku eterei kwarahy.',
          botTranslation: 'O sol está quente demais.',
          expected: ['Haku eterei kwarahy.', 'kwarahy'],
          hint: 'Repita, com o “kw” de “quarto”: “kwarahy” é o sol.',
        },
        communityPrompt: 'Escreva sobre o tempo de hoje com as palavras da lição: kwarahy (sol), jasy (lua), ama (chuva), y (água), yvy (terra).',
      },
      {
        id: 'kgk-u2-l2',
        title: 'Mokõi, mbohapy, irundy: jagwarete, gwa\'a, gwyra',
        kind: 'licao',
        words: ['mokõi', 'mbohapy', 'irundy', 'jagwarete', 'gwa\'a', 'gwyra'],
        cloze: [
          // Barros 2014, p. 187
          { sentence: '___ jasy oky.', answer: 'Mokõi', options: ['Mokõi', 'Irundy', 'Jagwarete'], translation: 'Choveu por dois meses.' },
          // Barros 2014, p. 155
          { sentence: 'Ohasa ___ jasy.', answer: 'mbohapy', options: ['mbohapy', 'gwyra', 'gwa\'a'], translation: 'Passaram-se três meses.' },
          // Barros 2014, p. 146
          { sentence: 'Amo ou ___.', answer: 'jagwarete', options: ['jagwarete', 'mokõi', 'irundy'], translation: 'Lá longe vem a onça.' },
        ],
        // Barros 2014, p. 146: repetir
        voice: {
          bot: 'Amo ou jagwarete.',
          botTranslation: 'Lá longe vem a onça.',
          expected: ['Amo ou jagwarete.', 'jagwarete'],
          hint: 'Repita: “amo” é “lá longe”, “ou” é “vem” e “jagwarete” é a onça.',
        },
        communityPrompt: 'Conte bichos da mata com os números: peteĩ, mokõi, mbohapy, irundy, e “heta” para muitos (jagwarete, gwa\'a, gwyra, pira).',
      },
      {
        id: 'kgk-u2-l3',
        title: 'Teste: natureza, números e bichos',
        kind: 'prova',
        words: [],
        cloze: [],
        // Barros 2014, p. 146 (Kipy nde topa ama?) e p. 187 (Mokõi jasy oky)
        voice: {
          bot: 'Kipy nde topa ama?',
          botTranslation: 'Onde a chuva te pegou?',
          expected: ['Mokõi jasy oky.', 'oky', 'ama'],
          hint: 'Fale da chuva com um número: “Mokõi jasy oky” (choveu por dois meses).',
        },
        communityPrompt: 'Escreva seis frases curtas sobre a natureza e os bichos com os números de “peteĩ” a “irundy”.',
      },
    ],
  },
  {
    id: 'kgk-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Akaru, amba\'apo, ake: o dia e a família',
    emoji: '🏡',
    card: {
      id: 'kgk-c3',
      title: 'Xe ypy kwéry: o fogo, a parentela e o tekoha',
      emoji: '🔥',
      // Barros 2014, pp. 71–73, citando Pereira 2004 (pp. 47, 51, 65–66, 108, 116) e Schaden 1962 (p. 19)
      history:
        'A organização kaiowá tem três níveis. O primeiro é o “fogo doméstico”, em kaiowá “xe ypy kwéry”: um homem, a esposa e os filhos solteiros, às vezes com outros parentes próximos. Os espaços do fogo são a óga (casa) e a oka (quintal), que pode incluir a roça e a mata em volta. Vários fogos formam a parentela, te\'ýi, cujo chefe é chamado com respeito de “pai”; antigamente a parentela morava junta numa grande casa comunal. Várias parentelas formam o tekoha, que não tem um único chefe: as decisões são tomadas em reuniões, as aty ou atygwasu (“grande reunião”). O líder religioso é o pa\'i.',
      // Barros 2014, p. 201 (pohu: “Quando visitamos uma à outra, nos damos mate para beber e alimentamos uma à
      // outra”), p. 171 (ka'ay) e p. 74 (a roça, o milho e a mandioca)
      culture_tip:
        'Visitar é dividir: num dos relatos do dicionário de Barros, uma senhora kaiowá conta que, quando as vizinhas se visitam, uma dá mate para a outra beber e as duas comem juntas. “Egwahẽ ja\'u ka\'ay” (venha, vamos beber mate) é um convite comum. A roça (kokwe) é o centro da vida: milho, abóbora, mandioca, feijão.',
      // Barros 2014, pp. 107–108 (Quadros 10 e 11) e p. 94 (posse de 3ª pessoa: o-/gw- correferente, i-/h-
      // não correferente; nota 79: traço que não aparece nas outras línguas do grupo guarani)
      grammar_why:
        'O verbo kaiowá muda no começo: “akaru” (eu como), “erekaru” (você come), “okaru” (ele come), “jakaru” (nós, com você), “orokaru” (nós, sem você), “pekaru” (vocês). E o kaiowá distingue dois “seu”: “gwóga” é a casa do próprio sujeito, “hóga” é a casa de outra pessoa. Segundo Barros (2014), essa distinção não aparece nas outras línguas do grupo guarani.',
      grammar_examples: [
        // Barros 2014, p. 174
        ['Kokwe-py omba\'apo.', 'Ele trabalha na roça.'],
        // Barros 2014, p. 170
        ['Oroju oroporahéi.', 'Nós viemos e cantamos.'],
        // Barros 2014, p. 163
        ['Oiko xe sy gwóga-py.', 'Minha mãe mora na casa dela (na própria casa).'],
        // Barros 2014, p. 154
        ['Ha hembireko katu he\'i íxupe.', 'Mas a esposa dele lhe respondeu.'],
      ],
      // Barros 2014, p. 107 (Quadro 10), p. 94 (prefixos relacionais) e p. 111 (Quadro 15)
      character_guide: [
        ['a-', 'eu (no verbo)', 'akaru (eu como), aju (eu venho)'],
        ['ere-', 'você', 'erekaru (você come)'],
        ['o-', 'ele, ela, eles, elas', 'okaru (ele come), oho (ele vai)'],
        ['ja- / nha-', 'nós, com quem ouve (nha- com verbos nasais)', 'jakaru, nhamba\'apo'],
        ['oro-', 'nós, sem quem ouve', 'orokaru, oroju'],
        ['pe-', 'vocês', 'pekaru, peho'],
        ['r- / h- / gw-', 'casa de alguém / dele (outro) / dele mesmo', 'xe róga, hóga, gwóga'],
      ],
    },
    lessons: [
      {
        id: 'kgk-u3-l1',
        title: 'Akaru, amba\'apo, ake: os verbos do dia',
        kind: 'licao',
        words: ['karu', 'mba\'apo', 'ke', 'ju', 'ho', 'gwapy'],
        cloze: [
          // Barros 2014, p. 172
          { sentence: 'Heta so\'o areko-ta ___ hagwã.', answer: 'akaru', options: ['akaru', 'oke', 'aju'], translation: 'Terei bastante carne para me alimentar.' },
          // Barros 2014, p. 174
          { sentence: 'Kokwe-py ___.', answer: 'omba\'apo', options: ['omba\'apo', 'ogwapy', 'oroke'], translation: 'Ele trabalha na roça.' },
          // Barros 2014, p. 170
          { sentence: 'Xe sy ndive ___.', answer: 'aju', options: ['aju', 'oho', 'akaru'], translation: 'Eu vim com minha mãe.' },
        ],
        // Barros 2014, p. 173 (Kipy ereho-ta nde?) e p. 174 (Ko'ẽ ramo aha-ta Tanambi-py)
        voice: {
          bot: 'Kipy ereho-ta nde?',
          botTranslation: 'Aonde você vai?',
          expected: ['Ko\'ẽ ramo aha-ta Tanambi-py.', 'aha-ta', 'aha'],
          hint: 'Diga aonde vai, com “aha” (eu vou): “Ko\'ẽ ramo aha-ta Tanambi-py” (amanhã vou para Tanambi).',
        },
        communityPrompt: 'Conte o seu dia com os verbos da lição: akaru (como), amba\'apo (trabalho), ake (durmo), aju (venho), aha (vou), agwapy (sento). Depois troque a- por oro- para falar de “nós”.',
      },
      {
        id: 'kgk-u3-l2',
        title: 'Xe ru, xe memby: a família',
        kind: 'licao',
        words: ['ru', 'memby', 'ke\'y', 'kyvy', 'tembireko', 'temiarirõ'],
        cloze: [
          // Barros 2014, p. 209
          { sentence: 'Yma jeko oiko araka\'e nhande ___.', answer: 'ru', options: ['ru', 'memby', 'kyvy'], translation: 'Antigamente, dizem, viveu nosso pai.' },
          // Barros 2014, p. 152
          { sentence: '___ ogwejy yvyra rakã-gwi.', answer: 'Ke\'y', options: ['Ke\'y', 'Tembireko', 'Temiarirõ'], translation: 'O irmão mais velho desceu do galho da árvore.' },
          // Barros 2014, p. 178
          { sentence: 'Xe ndaiporivéi-ma xe ___.', answer: 'kyvy', options: ['kyvy', 'ru', 'tembireko'], translation: 'Não tenho mais o meu irmão (diz a irmã).' },
        ],
        // Barros 2014, p. 156: repetir
        voice: {
          bot: 'Xe ahayhu ave xe sy-pe.',
          botTranslation: 'Eu também amo a minha mãe.',
          expected: ['Xe ahayhu ave xe sy-pe.', 'ahayhu'],
          hint: 'Repita: “ahayhu” é “eu amo” e “-pe” marca a quem.',
        },
        communityPrompt: 'Apresente a sua família: xe ru (meu pai), xe sy (minha mãe), xe memby (meu filho, dito pela mãe), xe ryke\'y (meu irmão mais velho), xe rembireko (minha esposa), xe remiarirõ (meu neto).',
      },
      {
        id: 'kgk-u3-l3',
        title: 'Teste: Kipy ereho-ta nde?',
        kind: 'prova',
        words: [],
        cloze: [],
        // Barros 2014, p. 173 e p. 146 (He'i gwembireko-pe: aha-ta anhemitỹ, “Disse à sua mulher: vou plantar”)
        voice: {
          bot: 'Kipy ereho-ta nde?',
          botTranslation: 'Aonde você vai?',
          expected: ['Aha-ta anhemitỹ.', 'aha-ta', 'anhemitỹ'],
          hint: 'Responda que vai plantar: “Aha-ta anhemitỹ.”',
        },
        communityPrompt: 'Escreva um dia na roça da família: quem foi (oho), quem trabalhou (omba\'apo), quem comeu (okaru). Use gwóga (a própria casa) e hóga (a casa de outro).',
      },
    ],
  },
  {
    id: 'kgk-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Mamo, máva, mba\'e: perguntar e dizer não',
    emoji: '❓',
    card: {
      id: 'kgk-c4',
      title: 'Panambizinho e Teko Arandu: a língua na escola',
      emoji: '📚',
      // Barros 2014, pp. 82–84 (Teko Arandu, criado em 2005, primeira turma em 2011; Panambizinho: Pa'i Chiquito,
      // c. 1920, falecido em 1990; 1.272 ha devolvidos em 2005; escola Pa'i Chiquito; língua mais preservada),
      // citando Maciel 2012 (pp. 13–14, 64, 132)
      history:
        'A aldeia Panambizinho, em Dourados, é conhecida como o lugar onde a língua e a cultura kaiowá estão mais preservadas. Foi fundada por volta de 1920 pelo pa\'i (líder religioso) Chiquito Pedro, falecido em 1990, que dá nome à escola da aldeia. Por mais de cinquenta anos, a comunidade viveu em só 60 hectares; em 2005, depois de muita luta, 1.272 hectares foram devolvidos. No mesmo ano, a Universidade Federal da Grande Dourados criou a Licenciatura Intercultural Indígena Teko Arandu, para formar professores kaiowá e guarani para as escolas das aldeias; a primeira turma se formou em 2011.',
      // Barros 2014, p. 76 (teko porã, teko marangatu, citando Azevedo 1989 e Pereira 2004) e p. 77 (o nome secreto
      // e o mitã mongarai, citando Azevedo 1989, p. 120)
      culture_tip:
        'O teko kaiowá, o “modo autêntico de ser”, tem dois princípios: teko marangatu (ser religioso) e teko porã (ser bom, viver bem com os outros). E cada pessoa tem dois nomes: um “brasileiro”, do registro, e um nome secreto, que revela a sua alma (nhe\'ẽ). Ele é dado no mitã mongarai, o batismo da criança, quando o rezador escuta o nome e o transmite aos pais.',
      // Barros 2014, p. 117 (Quadro 20: nd(a)-...-i, pa, tipo), p. 146 (ani) e p. 189 (nd- -i)
      grammar_why:
        'Para negar, o verbo fica entre duas partes: nd(a)- no começo e -i no fim. “Aikwaa” (eu sei) vira “ndaikwaái” (não sei). Numa ordem, o “não” é “ani”: “Ani erekyhyje” (não tenha medo). Nas perguntas, a palavra de pergunta vem no começo, muitas vezes seguida de “pa”: “Máva pa a-py oĩ-ma?” (quem estava aqui?).',
      grammar_examples: [
        // Barros 2014, p. 211
        ['Xe nda\'úi so\'o.', 'Eu não como carne.'],
        // Barros 2014, p. 177
        ['Ani erekyhyje.', 'Não tenha medo.'],
        // Barros 2014, p. 179
        ['Mamo nde sy oho?', 'Aonde foi a tua mãe?'],
        // Barros 2014, p. 117
        ['Amombe\'u-ta.', 'Eu vou contar.'],
      ],
      // Barros 2014, p. 117 (Quadro 20), p. 198 (pa), p. 213 (ta), p. 179 (ma)
      character_guide: [
        ['nd(a)-…-i', 'não (em volta do verbo)', 'ndaikatúi (não consigo)'],
        ['ani', 'não, numa ordem', 'Ani erekyhyje (não tenha medo)'],
        ['pa', 'marca a pergunta', 'Mba\'éixa pa ereiko?'],
        ['-ta', 'vou (intenção, futuro)', 'aha-ta (vou)'],
        ['-ma', 'já', 'ereju-ma (você já veio)'],
      ],
    },
    lessons: [
      {
        id: 'kgk-u4-l1',
        title: 'Mamo, máva, ma\'erã: perguntar',
        kind: 'licao',
        words: ['mamo', 'máva', 'mba\'e', 'mbovy', 'ma\'erã', 'kwehe'],
        cloze: [
          // Barros 2014, p. 179
          { sentence: '___ nde sy oho?', answer: 'Mamo', options: ['Mamo', 'Máva', 'Mbovy'], translation: 'Aonde foi a tua mãe?' },
          // Barros 2014, p. 180
          { sentence: '___ pa a-py oĩ-ma?', answer: 'Máva', options: ['Máva', 'Mamo', 'Kwehe'], translation: 'Quem estava aqui?' },
          // Barros 2014, p. 179
          { sentence: '___ erekyhyje xéhegwi?', answer: 'Ma\'erã', options: ['Ma\'erã', 'Mbovy', 'Máva'], translation: 'Por que você tem medo de mim?' },
        ],
        // Barros 2014, p. 180 (Mba'e pa ojehu nde-vy?) e p. 150 (Ndojehúi mba'eve, oração tirada de “Ndojehúi
        // mba'eve, ere arã ereho-vy”)
        voice: {
          bot: 'Mba\'e pa ojehu nde-vy?',
          botTranslation: 'O que aconteceu com você?',
          expected: ['Ndojehúi mba\'eve.', 'ndojehúi', 'mba\'eve'],
          hint: 'Responda que não aconteceu nada: “Ndojehúi mba\'eve.”',
        },
        communityPrompt: 'Escreva perguntas para alguém da aldeia com mamo (onde), máva (quem), mba\'e (o quê), mbovy (quantos) e ma\'erã (por quê).',
      },
      {
        id: 'kgk-u4-l2',
        title: 'Ani erekyhyje: o que a gente sente',
        kind: 'licao',
        words: ['kyhyje', 'vy\'a', 'poxy', 'hasy', 'kwerái', 'pota'],
        cloze: [
          // Barros 2014, p. 177
          { sentence: 'Ani ___.', answer: 'erekyhyje', options: ['erekyhyje', 'ipoxy', 'hasy'], translation: 'Não tenha medo.' },
          // Barros 2014, p. 156
          { sentence: 'Isy ___-gwi, oho pya\'e eterei.', answer: 'hasy', options: ['hasy', 'avy\'a', 'aipota'], translation: 'Porque a mãe dela estava doente, ela foi bem rápido.' },
          // Barros 2014, p. 220
          { sentence: '___ eterei xe ryke ogwahẽ jevy ramo.', answer: 'Avy\'a', options: ['Avy\'a', 'Ipoxy', 'Ikwerái'], translation: 'Fiquei muito alegre quando a minha irmã chegou de novo.' },
        ],
        // Barros 2014, p. 218 (Ere'use tipo ka'ay?), p. 154 (ha'e3, “sim”) e p. 189 (naháni)
        voice: {
          bot: 'Ere\'use tipo ka\'ay?',
          botTranslation: 'Você quer beber mate?',
          expected: ['Ha\'e.', 'Naháni.', 'ha\'e', 'naháni'],
          hint: 'Responda “Ha\'e” (sim) ou “Naháni” (não).',
        },
        communityPrompt: 'Escreva como você se sentiu hoje: alegre (avy\'a), com medo (akyhyje), cansado (xe kwerái), bravo (xe poxy), doente (xe rasy). E diga o que você quer com “aipota”.',
      },
      {
        id: 'kgk-u4-l3',
        title: 'Teste: Mba\'éixa pa ereiko?',
        kind: 'prova',
        words: [],
        cloze: [],
        // Barros 2014, p. 181 (pergunta) e p. 171 (Xe kangy rei-ma, oração tirada de “Xe kangy rei-ma, he'i xe-vy”)
        voice: {
          bot: 'Mba\'éixa pa ereiko?',
          botTranslation: 'Como você está?',
          expected: ['Xe kangy rei-ma.', 'xe kangy', 'kangy'],
          hint: 'Diga que está sem forças, com “xe” na frente da palavra de estado: “Xe kangy rei-ma” (estou fraco à toa).',
        },
        communityPrompt: 'Escreva um diálogo curto: alguém pergunta “Mba\'éixa pa ereiko?” e “Kipy ereho-ta nde?”, e você responde com um “não” (nd-…-i ou naháni) e um plano com -ta.',
      },
    ],
  },
];
