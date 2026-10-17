import type { UnitSeed } from '../types';

/**
 * Trilha do kaiowá, do A1.1 ao B1.4 (curso completo até o teto B1, desde 17/10/2026 — ver `incomplete` em
 * index.ts; o B1 está no bloco do fim). Revisão de 17/10/2026: as frases das lições, dos testes de voz e dos exemplos dos cartões são
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
      // Benites 2021 (aguyje, teko araguyje); Barros 2014, pp. 71–72 (família extensa, tekoha)
      culture_tip:
        'A palavra “agwyjevete” liga-se a “agwyje”, “perfeito, maduro”, um estado muito importante na espiritualidade kaiowá: o pesquisador kaiowá Eliel Benites dedica a esse conceito a sua tese de doutorado (UFGD). Por isso ela serve como um agradecimento forte, “muito obrigado(a)”. A vida kaiowá se organiza em famílias extensas, reunidas em tekoha, o lugar onde se vive o teko, o modo de ser kaiowá.',
      // Barros 2014, p. 102 (Quadro 8), p. 199 (Pene mitã) e p. 99 (adjetivo atributivo)
      grammar_why:
        'Os pronomes do kaiowá têm duas formas de “nós”: “nhane” (ou “nhande”) inclui a pessoa com quem se fala, e “ore” não inclui. Para dizer “vocês são crianças”, basta pôr lado a lado o pronome e o nome: “Pene mitã.” Já o adjetivo logo depois do nome o descreve: “karia\'y porã” é “jovem bom”.',
      grammar_examples: [
        // Benites 2021, grafia convertida
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
          // Benites 2021, grafia convertida
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
      // Benites 2021 (glossário: ára); Barros 2014, p. 148 (áry: céu; dia) e pp. 100–101 (numerais até quatro,
      // depois heta; numerais do português e do espanhol)
      history:
        'No kaiowá, “ára” (Barros escreve “áry”) é ao mesmo tempo “céu” e “dia”; para Eliel Benites, também “tempo”. Tradicionalmente, a contagem kaiowá tem só quatro numerais próprios: peteĩ (um), mokõi (dois), mbohapy (três) e irundy (quatro). Daí em diante se usa “heta” (muitos). Hoje os números do português e do espanhol também são comuns, sobretudo na escola e no comércio. Os outros guaranis criaram um cinco com “po” (mão), mas os falantes de kaiowá não aceitam esse sistema, segundo Barros (2014).',
      // Barros 2014, p. 73 (avati morotĩ, jakaira; avati nhemongarai, a festa anual do batismo do milho, citando
      // Schaden 1962, p. 47)
      culture_tip:
        'O avati morotĩ (milho branco), também chamado jakaira, é o principal produto da roça kaiowá e carrega a espiritualidade ligada à comida: rezas e cantos acompanham o plantio, a colheita e o preparo. Segundo Barros, a única festa anual é o avati nhemongarai, o “batismo do milho”, na época da colheita. O mbaraka, o chocalho dos cantos-reza, deu à língua portuguesa a palavra “maraca”.',
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
        // Barros 2014, p. 146 (Kipy nde topa ama?, oração tirada de “Oporandu xe-vy: Kipy nde topa ama?”) e p. 187
        // (Mokõi jasy oky)
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
      // não correferente). Revisão: a nota 79 de Barros diz que o traço não aparece nos outros guaranis, mas
      // Cardoso 2008, p. 39 (Quadro 6), monta os mesmos prefixos em paralelo com descrições do kamaiurá e do
      // guarani paraguaio; o curso não afirma mais que a distinção é exclusiva do kaiowá.
      grammar_why:
        'O verbo kaiowá muda no começo: “akaru” (eu como), “erekaru” (você come), “okaru” (ele come), “jakaru” (nós, com você), “orokaru” (nós, sem você), “pekaru” (vocês). E o kaiowá distingue dois “seu”: “gwóga” é a casa do próprio sujeito, “hóga” é a casa de outra pessoa. Para Barros (2014), é um traço marcante do kaiowá.',
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

  // ═══ B1 (17/10/2026). Como no A2, as frases das lições e dos testes de voz são do dicionário de Barros (2014),
  // copiadas como estão no verbete, com a página impressa; nenhuma foi montada. A gramática segue os tópicos de
  // Cardoso (2008) que Barros resume (ver gramatica.ts). As notas de cultura vêm do cap. 2 de Barros (pp. 65–84). ═══
  {
    id: 'kgk-u5',
    level: 'B1.1',
    cefr: 'B1',
    title: "Ko'ẽ jevy ramo: quando, depois, para",
    emoji: '🌽',
    card: {
      id: 'kgk-c5',
      title: 'Avati nhemongarai: o milho, a roça e a terra',
      emoji: '🌾',
      // Barros 2014, p. 70 (Matte Larangeira, 1882; SPI, primeira reserva em Dourados em 1915 e só 8 reservas até 1928;
      // expulsões entre 1949 e 1979; retomadas desde os anos 1970, mais ainda depois da Constituição de 1988), citando
      // Vietta 2007, Brand 2001 e Mura 2006
      history:
        'Em 1882, a Companhia Matte Larangeira recebeu do Império o arrendamento dos ervais da região. Os kaiowá, que conheciam o preparo da erva-mate, passaram a trabalhar para ela em condições de exploração. Entre 1915 e 1928, o Serviço de Proteção ao Índio demarcou só oito reservas para os kaiowá e os nhandeva; a primeira foi a de Dourados. Entre 1949 e 1979, muitas famílias foram expulsas das suas terras e confinadas nas reservas. Desde os anos 1970, e mais ainda depois da Constituição de 1988, que garante aos indígenas o direito às terras tradicionais, as comunidades lutam para retomá-las.',
      // Barros 2014, pp. 73–74 (caça e pesca como alegria tradicional, a roça como sustento, avati morotĩ ou jakaira, rezas
      // no plantio, na colheita e no preparo; o avati nhemongarai, única festa anual, na colheita), citando Schaden 1962
      culture_tip:
        'A roça sustenta a família, mas a grande alegria tradicional do kaiowá, segundo o antropólogo Egon Schaden, é caçar e pescar. O principal produto é o avati morotĩ, o milho branco, também chamado jakaira: rezas e cantos acompanham o plantio, a colheita e o preparo da comida de milho. A única festa anual que Schaden descreve é o avati nhemongarai, o “batismo do milho”, na época da colheita.',
      // Barros 2014, pp. 115–116 (Quadro 19) e p. 219 (vy2); Cardoso 2008, p. 122
      grammar_why:
        'A palavra que liga duas orações vem no fim da oração que depende, depois do verbo: “Ko\'ẽ jevy ramo oho”, quando amanheceu de novo, ele foi. “Ramo” é “quando” ou “se”; “rire”, “depois de”; “mboyve”, “antes de”; “jave”, “enquanto”; “hagwã”, “para”. E -vy, depois do verbo, diz o que acontece junto: “Xe aripara aju-vy”, eu vim correndo.',
      grammar_examples: [
        // Barros 2014, p. 206, p. 209, p. 155 e p. 208
        ["Ko'ẽ jevy ramo oho.", 'Quando amanheceu de novo, ele foi embora.'],
        ["Peteĩ jasy rire ha'e kwéry ojapo kagwĩ.", 'Depois de um mês, eles faziam a chicha.'],
        ['Ogwejy ko yvy ári opyta hagwã.', 'Desceram para ficar aqui na terra.'],
        ['Xe aripara aju-vy.', 'Eu vim correndo.'],
      ],
      character_guide: [
        ['ramo', 'quando; se (depois do verbo)', "ko'ẽ jevy ramo (quando amanheceu de novo)"],
        ['rire', 'depois de', 'peteĩ jasy rire (depois de um mês)'],
        ['mboyve', 'antes de', 'ohupyty y mboyve (antes de chegar à água)'],
        ['hagwã', 'para, a fim de', 'opyta hagwã (para ficar)'],
        ['-vy', 'fazendo, ao mesmo tempo', 'aripara aju-vy (vim correndo)'],
      ],
    },
    lessons: [
      {
        id: 'kgk-u5-l1',
        title: 'Ramo, rire, hagwã: ligar as orações',
        kind: 'licao',
        words: ['ramo', 'rire', 'mboyve', 'jave', 'hagwã', 'jepe'],
        cloze: [
          // Barros 2014, p. 206
          { sentence: "Ko'ẽ jevy ___ oho.", answer: 'ramo', options: ['ramo', 'rire', 'jepe'], translation: 'Quando amanheceu de novo, ele foi embora.' },
          // Barros 2014, p. 209
          { sentence: "Peteĩ jasy ___ ha'e kwéry ojapo kagwĩ.", answer: 'rire', options: ['rire', 'mboyve', 'jave'], translation: 'Depois de um mês, eles faziam a chicha.' },
          // Barros 2014, p. 155
          { sentence: 'Ogwejy ko yvy ári opyta ___.', answer: 'hagwã', options: ['hagwã', 'ramo', 'jave'], translation: 'Desceram para ficar aqui na terra.' },
        ],
        // Barros 2014, p. 189 (nde2: Mba'e erejapo nde resa-rehe erehexa porã hagwã?) e p. 218 (upéixa: Ajapo upéixa ahexa
        // porã hagwã)
        voice: {
          bot: "Mba'e erejapo nde resa-rehe erehexa porã hagwã?",
          botTranslation: 'O que você faz com os seus olhos para enxergar bem?',
          expected: ['Ajapo upéixa ahexa porã hagwã.', 'ajapo upéixa', 'ahexa porã hagwã'],
          hint: 'Responda com “hagwã” (para): “Ajapo upéixa ahexa porã hagwã” (eu faço assim para enxergar bem).',
        },
        communityPrompt: 'Escreva três frases sobre o seu dia ligando as orações: uma com “ramo” (quando), uma com “rire” (depois de) e uma com “hagwã” (para). Lembre: a palavra que liga vem depois do verbo.',
      },
      {
        id: 'kgk-u5-l2',
        title: "Oronhemitỹ, nhamono'õ: a roça e o tempo",
        kind: 'licao',
        words: ['nhemitỹ', "mono'õ", "mandi'o", 'andai', 'oky', 'arai'],
        cloze: [
          // Barros 2014, p. 193 (oronhemitỹ); p. 194 (oronheno) e p. 182 (oromboaty) como distratores
          { sentence: 'A-py ore heta ___.', answer: 'oronhemitỹ', options: ['oronhemitỹ', 'oronheno', 'oromboaty'], translation: 'Aqui nós plantamos bastante.' },
          // Barros 2014, p. 179
          { sentence: 'Ha onhotỹ ___.', answer: "mandi'o", options: ["mandi'o", 'pakova', 'jety'], translation: 'E plantam mandioca.' },
          // Barros 2014, p. 147
          { sentence: 'Ha oĩ ramo ___ ndajahexa porái jasytata.', answer: 'arai', options: ['arai', 'yvytu', 'oky'], translation: 'E quando há nuvens, não conseguimos ver bem as estrelas.' },
        ],
        // Barros 2014, p. 180 (Mba'e pa ojehu nde-vy?) e p. 211 (sẽ: Xe oky eterei jave ndikatúi asẽ xe róga-gwi)
        voice: {
          bot: "Mba'e pa ojehu nde-vy?",
          botTranslation: 'O que aconteceu com você?',
          expected: ['Xe oky eterei jave ndikatúi asẽ xe róga-gwi.', 'oky eterei jave', 'ndikatúi asẽ'],
          hint: 'Diga que, quando chove demais, você não consegue sair de casa: “Xe oky eterei jave ndikatúi asẽ xe róga-gwi.”',
        },
        communityPrompt: 'Conte o ano na roça da sua família ou de alguém que você conhece: o que se planta (onhemitỹ), quando chove (oky ramo) e o que se colhe depois (rire).',
      },
      {
        id: 'kgk-u5-l3',
        title: "Teste: Ko'ẽ jevy ramo",
        kind: 'prova',
        words: [],
        cloze: [],
        // Barros 2014, p. 164 (itymby: Jaha jahexa itymby) e p. 165 (oração tirada de “Jaha katu, ha'e íxupe”)
        voice: {
          bot: 'Jaha jahexa itymby.',
          botTranslation: 'Vamos ver a plantação de milho.',
          expected: ['Jaha katu.', 'jaha katu', 'jaha'],
          hint: 'Aceite o convite: “Jaha katu” (vamos, então).',
        },
        communityPrompt: 'Escreva um pequeno relato com “upéi” (então), “rire” (depois de) e “jave” (enquanto): o que você fez quando acordou (apáy ramo), e o que fez depois.',
      },
    ],
  },
  {
    id: 'kgk-u6',
    level: 'B1.2',
    cefr: 'B1',
    title: "Ojapo va'e: quem faz, o que se faz",
    emoji: '🏹',
    card: {
      id: 'kgk-c6',
      title: "Mbo'eháry: as escolas das aldeias",
      emoji: '🏫',
      // Barros 2014, p. 81 (oito escolas nas aldeias de Dourados, cerca de 3.700 alunos; professores, coordenadores e
      // diretores quase todos indígenas nas escolas citadas; Escola Estadual Guateka Marçal de Souza, na aldeia Jaguapiru,
      // com EJA e ensino médio), citando Souza 2011, p. 109
      history:
        "Nas aldeias de Dourados há oito escolas, da prefeitura e do estado, com cerca de 3.700 alunos. Nas escolas Tengatui Marangatu, Ramão Martins, Pa'i Chiquito Pedro, Araporã e Lacuí Isnard, os professores dos primeiros anos, os coordenadores e os diretores são quase todos indígenas. Muitos jovens deixam a escola depois do ensino fundamental para trabalhar; a Escola Estadual Guateka Marçal de Souza, na aldeia Jaguapiru, oferece o ensino médio e a educação de jovens e adultos, e muitos indígenas já chegam ao ensino superior.",
      // Barros 2014, p. 182 (Ymagware ombo'e pe ta'ýry-pe ojapo hagwã monde), p. 145 (akutipáy: Monde orojapo oroipyhy
      // hagwã tatu, akutipáy) e p. 148 (arandu)
      culture_tip:
        "Antes da escola, quem ensinava eram os mais velhos. Um falante do dicionário de Barros conta: “Ymagware ombo'e pe ta'ýry-pe ojapo hagwã monde”, os antigos ensinavam os filhos a fazer o mundéu, a armadilha de pegar tatu e paca. E as palavras dos sábios, os arandu, passam de boca em boca: “Upéixa he'i arandu nhe'ẽ-py onhemombe'u”, assim dizem as palavras dos sábios que são contadas.",
      // Barros 2014, p. 104, p. 95 e p. 182 (mbo'eháry)
      grammar_why:
        "“Va'e” vem depois do verbo e faz da oração um nome: “oho va'e” é quem vai; “oho va'ekwe”, quem foi; “oho va'erã”, quem irá. Outros pedaços também fazem nomes de verbos: -ha (quem faz), -pyre (o que foi feito) e tembi- (o que se faz com algo). De “mbo'e” (ensinar) vem “mbo'eháry” (professor); de “'u” (comer), “tembi'u” (comida).",
      grammar_examples: [
        // Barros 2014, p. 219, p. 155, p. 182 e p. 147
        ["Nhande ru ogwereko mokõi tajýry kunhataĩ ojeroky va'e.", 'Nosso pai tinha duas filhas moças que dançavam.'],
        ['Oikwaa ava tape ojapo hagwe.', 'O índio sabia o caminho que tinha feito.'],
        ["Xe mbo'eháry he'i xe-vy.", 'Meu professor me disse.'],
        ["Ha'e monde apoha tekotevẽ omoĩ pe monde gwy rupigwa yvyra.", 'Aquele que faz o mundéu tem que colocar uma madeira embaixo dele.'],
      ],
      character_guide: [
        ["va'e", 'que (depois do verbo)', "oho va'e (quem vai)"],
        ["va'ekwe", 'que foi (passado)', "oho va'ekwe (quem foi)"],
        ['-ha', 'quem faz; o que se faz', 'apoha (aquele que faz)'],
        ['-pyre', 'o que foi feito', 'ojapopyre (o que é feito)'],
        ['tembi-', 'o que se faz com algo', "tembi'u (comida)"],
      ],
    },
    lessons: [
      {
        id: 'kgk-u6-l1',
        title: "Mbo'eháry, kwatia: aprender e contar",
        kind: 'licao',
        words: ["mbo'e", "mbo'eháry", 'kwatia', "monhe'ẽ", "mombe'u", 'porandu'],
        cloze: [
          // Barros 2014, p. 182
          { sentence: "Xe ___ he'i xe-vy.", answer: "mbo'eháry", options: ["mbo'eháry", 'hexakáry', 'arandu'], translation: 'Meu professor me disse.' },
          // Barros 2014, p. 187; p. 202 (aporandu-ta) e p. 160 (aha-ta) como distratores
          { sentence: "Ãy ___ ymagware rehegwa nhe'ẽ.", answer: "amombe'u-ta", options: ["amombe'u-ta", 'aporandu-ta', 'aha-ta'], translation: 'Agora vou contar uma história sobre antigamente.' },
          // Barros 2014, p. 182
          { sentence: "João ombo'e-ta ave íxupe ___ nhe'ẽ-re omonhe'ẽ porã hagwã.", answer: 'kwatia', options: ['kwatia', 'kyse', 'ajaka'], translation: 'João também vai ensinar a ele as palavras escritas, para que ele leia bem.' },
        ],
        // Barros 2014, p. 202 (Aporandu-ta nde-vy peteĩ mba'e-rehe) e p. 154 (ha'e3, “sim; é isso”)
        voice: {
          bot: "Aporandu-ta nde-vy peteĩ mba'e-rehe.",
          botTranslation: 'Vou te perguntar sobre uma coisa.',
          expected: ["Ha'e.", "ha'e"],
          hint: 'Concorde: “Ha\'e” (sim, é isso).',
        },
        communityPrompt: "Escreva sobre quem te ensinou alguma coisa (ombo'e) e o que você gosta de ler (amonhe'ẽ). Use “va'e” uma vez: “… ombo'e va'e” (quem ensina…).",
      },
      {
        id: 'kgk-u6-l2',
        title: "Monde, gwyrapa, hu'y: caçar e pescar",
        kind: 'licao',
        words: ['monde', 'marika', 'jopói', 'pinda', 'gwyrapa', "hu'y"],
        cloze: [
          // Barros 2014, p. 170
          { sentence: "Ke'y oho ___ pira ysyry-py.", answer: 'ojopói', options: ['ojopói', 'omarika', 'ojahu'], translation: 'O irmão mais velho foi pescar peixe no rio.' },
          // Barros 2014, p. 187
          { sentence: 'Omano tatu pe ___ gwy-py.', answer: 'monde', options: ['monde', 'pinda', 'apyka'], translation: 'O tatu morre debaixo do mundéu.' },
          // Barros 2014, p. 153
          { sentence: "Ome'ẽ íxupe ___ ogwahu hagwã.", answer: 'gwyrapa', options: ['gwyrapa', 'kwatia', 'mborahéi'], translation: 'Ele lhe deu um arco para que ele cantasse.' },
        ],
        // Barros 2014, p. 184 (mboypyri: Jahasa-ta mboypyri jajuka hagwã kure) e p. 209 (rupive: Aha-ta xe ave nde rupive)
        voice: {
          bot: 'Jahasa-ta mboypyri jajuka hagwã kure.',
          botTranslation: 'Vamos passar para o outro lado para matar porcos.',
          expected: ['Aha-ta xe ave nde rupive.', 'aha-ta xe ave', 'nde rupive'],
          hint: 'Diga que também vai junto: “Aha-ta xe ave nde rupive” (eu também vou com você).',
        },
        communityPrompt: "Descreva como alguém da sua família pesca ou caça, com “hagwã” (para): o que leva (kyse, pinda, gwyrapa) e para quê.",
      },
      {
        id: 'kgk-u6-l3',
        title: "Teste: Ojapo va'e",
        kind: 'prova',
        words: [],
        cloze: [],
        // Barros 2014, p. 198 (pa: Máva pa hatãve oporahéi) e p. 207 (ranhe: Ne ranhe esapukái)
        voice: {
          bot: 'Máva pa hatãve oporahéi?',
          botTranslation: 'Quem vai cantar mais alto?',
          expected: ['Ne ranhe esapukái.', 'ne ranhe', 'esapukái'],
          hint: 'Mande o outro começar: “Ne ranhe esapukái” (grite você primeiro).',
        },
        communityPrompt: "Escreva duas frases com “va'e” sobre pessoas da sua vida: alguém que ensina (ombo'e va'e) e alguém que conta histórias (omombe'u va'e).",
      },
    ],
  },
  {
    id: 'kgk-u7',
    level: 'B1.3',
    cefr: 'B1',
    title: "Embovy'a nhamói: fazer fazer, a si mesmo, um ao outro",
    emoji: '💊',
    card: {
      id: 'kgk-c7',
      title: 'Pohã: cuidar da saúde',
      emoji: '🩺',
      // Barros 2014, pp. 79–81 (missões em Dourados desde 1928, com Albert Sidney Maxwell; Missão Evangélica Caiuá e o
      // hospital para tuberculose; convênio com a SESAI; postos de saúde e agentes de saúde, muitos indígenas), citando
      // Vietta 2003
      history:
        'As missões evangélicas chegaram a Dourados em 1928, com o missionário presbiteriano Albert Sidney Maxwell. A Missão Evangélica Caiuá, fundada nesse ano, abriu um hospital voltado sobretudo para a tuberculose e salvou muitos indígenas; ainda hoje, ligado à Secretaria Especial de Saúde Indígena (SESAI), é referência na região. Nas aldeias, o atendimento começa nos postos de saúde, e agentes de saúde, muitos deles indígenas, acompanham os moradores.',
      // Barros 2014, p. 171 (ka'aõre: Gwĩ mitã hye ramo iporã ka'aõre ereipixy) e p. 199 (periparo: Ha upéi mitã haku ramo
      // eraha periparo-py embojahu)
      culture_tip:
        "Os remédios do mato aparecem nas histórias do dicionário. Uma falante conta que, quando as crianças estão com a barriga grande, é bom esfregar erva-de-santa-maria (ka'aõre); e que a criança com febre toma banho com pariparoba (periparo), uma planta do brejo: “Mitã haku ramo eraha periparo-py embojahu”.",
      // Barros 2014, p. 182 (mbo-), p. 218 (uka), p. 104 e p. 109 (je-, jo-)
      grammar_why:
        "“Mbo-” (ou “mo-”) na frente do verbo faz alguém ficar ou fazer: “vy'a” é “estar alegre”; “mbovy'a”, “alegrar alguém”. “Uka”, depois do verbo, manda outro fazer: “ohexa uka”, fazer ver, mostrar. “Je-” volta a ação para quem faz (“onhemondýi”, ele se assustou), e “jo-” a faz ir de um para o outro (“onhopytygwõ”, eles se ajudam).",
      grammar_examples: [
        // Barros 2014, p. 182, p. 218, p. 171 e p. 205
        ["Ko'ánga embovy'a katu nhamói.", 'Agora faça o vovô ficar alegre de fato.'],
        ['Ogweru ohexa uka yvagwasu.', 'Ele trouxe e mostrou a eles a fruta grande.'],
        ['Kagware onhemondýi.', 'O tamanduá ficou assustado.'],
        ['Upéixa ore oronhopytygwõmba.', 'Assim nós nos ajudamos.'],
      ],
      character_guide: [
        ['mbo-, mo-', 'fazer alguém ficar ou fazer', "mbovy'a (alegrar alguém)"],
        ['uka', 'mandar outro fazer', 'ohexa uka (mostrar)'],
        ['je-, nhe-', 'a si mesmo', 'onhemondýi (ele se assustou)'],
        ['jo-, nho-', 'um ao outro', 'onhopytygwõ (eles se ajudam)'],
      ],
    },
    lessons: [
      {
        id: 'kgk-u7-l1',
        title: "Mbovy'a, mongaru: fazer alguém ficar",
        kind: 'licao',
        words: ["mbovy'a", 'mboaty', 'mbogwera', 'mongaru', 'mondýi', 'mopotĩ'],
        cloze: [
          // Barros 2014, p. 184; p. 183 (Tombopy'agwapy) e p. 187 (Omondýi) como distratores
          { sentence: '___ jevy nhamói-pe.', answer: "Tombovy'a", options: ["Tombovy'a", 'Omondýi', 'Omopotĩ-ma'], translation: 'Que eles alegrem o vovô de novo.' },
          // Barros 2014, p. 188; p. 172 (akaru) e p. 187 (amombe'u-ta) como distratores
          { sentence: 'Aikwaapa kunumi ___ hagwã.', answer: 'amongaru', options: ['amongaru', 'akaru', "amombe'u-ta"], translation: 'Sei tudo de como dar comida aos meninos.' },
          // Barros 2014, p. 187
          { sentence: '___ jagwarete-pe.', answer: 'Omondýi', options: ['Omondýi', 'Omopotĩ-ma', "Ombo'e"], translation: 'Ele assustou a onça.' },
        ],
        // Barros 2014, p. 182 (mbo-: Ko'ánga embovy'a katu nhamói) e p. 203 (py'agwapy: Nhambopy'agwapy jevy nhamói)
        voice: {
          bot: "Ko'ánga embovy'a katu nhamói.",
          botTranslation: 'Agora faça o vovô ficar alegre de fato.',
          expected: ["Nhambopy'agwapy jevy nhamói.", "nhambopy'agwapy", 'jevy nhamói'],
          hint: 'Conte que vocês já acalmaram o vovô: “Nhambopy\'agwapy jevy nhamói.”',
        },
        communityPrompt: "Escreva o que você faz para alegrar alguém da sua família (ambovy'a) e para cuidar de uma criança (amongaru, amopotĩ).",
      },
      {
        id: 'kgk-u7-l2',
        title: 'Nhemi, nhomongeta, pohã: a si mesmo e um ao outro',
        kind: 'licao',
        words: ['jahu', 'nhemi', 'nhomongeta', 'pytygwõ', 'pohã', 'kwera'],
        cloze: [
          // Barros 2014, p. 193; p. 165 (Ojahu) e p. 203 (Opuka) como distratores
          { sentence: '___ jagwarete-gwi.', answer: 'Onhemi', options: ['Onhemi', 'Ojahu', 'Opuka'], translation: 'Ele se escondeu da onça.' },
          // Barros 2014, p. 194; p. 180 (nhamba'apo) e p. 165 (pejahu) como distratores
          { sentence: "Eju ko'a-py ___.", answer: 'nhanhomongeta', options: ['nhanhomongeta', "nhamba'apo", 'pejahu'], translation: 'Venha aqui, vamos conversar um com o outro.' },
          // Barros 2014, p. 201
          { sentence: 'Iporã ramo ___ ko, oikove jevy arã.', answer: 'pohã', options: ['pohã', "mba'asy", 'kyse'], translation: 'Se o remédio for bom, ele vai viver de novo.' },
        ],
        // Barros 2014, p. 180 (Mba'e pa ojehu nde-vy?) e p. 177 (kwera)
        voice: {
          bot: "Mba'e pa ojehu nde-vy?",
          botTranslation: 'O que aconteceu com você?',
          expected: ["Xe rasy rei-gwi va'ekwe, xe akwera va'ekwe.", 'xe akwera', 'akwera'],
          hint: 'Conte que você esteve doente e sarou: “Xe rasy rei-gwi va\'ekwe, xe akwera va\'ekwe.”',
        },
        communityPrompt: 'Escreva como as pessoas da sua casa se ajudam (oronhopytygwõ) e conversam (oronhomongeta). Use je- ou jo- em duas frases.',
      },
      {
        id: 'kgk-u7-l3',
        title: "Teste: Embovy'a nhamói",
        kind: 'prova',
        words: [],
        cloze: [],
        // Barros 2014, p. 194 (nhomongeta) e p. 165 (oração tirada de “Jaha katu, ha'e íxupe”)
        voice: {
          bot: "Eju ko'a-py nhanhomongeta.",
          botTranslation: 'Venha aqui, vamos conversar um com o outro.',
          expected: ['Jaha katu.', 'jaha katu', 'jaha'],
          hint: 'Aceite: “Jaha katu” (vamos, então).',
        },
        communityPrompt: "Conte uma vez em que alguém cuidou de você quando estava doente: quem deu o remédio (oipohano), quem te alegrou (ombovy'a) e quando você sarou (akwera).",
      },
    ],
  },
  {
    id: 'kgk-u8',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Yma jeko: dizem que, antigamente',
    emoji: '🌞',
    card: {
      id: 'kgk-c8',
      title: 'Ymagware: as histórias dos antigos',
      emoji: '📜',
      // Barros 2014, resumo (duas coletas de textos orais, em 1960 e 2013; 21 falantes de Dourados e Panambizinho; 65
      // histórias), p. 166 e p. 198 (Pa'ikwara e Jasy), p. 165 (jakare), p. 214 (tatu) e pp. 228–229 (a “linguagem
      // sagrada” ficou fora do dicionário)
      history:
        "O dicionário de Eliane de Barros nasceu de 65 histórias contadas por 21 falantes kaiowá de Dourados e Panambizinho: umas gravadas em 1960, outras em 2013. Nelas aparecem Pa'ikwara, o sol, e Jasy, a lua, irmãos, filhos de “nosso grande pai”; o jacaré que leva o irmão mais velho nas costas; o tatu preso no mundéu. Barros conta que muitas palavras das rezas e das divindades não puderam entrar no dicionário: fazem parte da “linguagem sagrada”, que só quem reza domina.",
      // Barros 2014, p. 77 (porahéi: texto com melodia, transmitido de geração a geração; os pa'i podem compor; palavras
      // arcaicas; rezas para tudo, maior orgulho do povo; o caminho da alma para o céu), citando Schaden 1962
      culture_tip:
        "A reza, porahéi, é um texto com melodia passado de geração em geração, e os pa'i (pajés) podem compor as suas. Muitas vezes usa palavras arcaicas, difíceis de entender. Existem rezas para tudo, e elas são o maior orgulho do povo kaiowá: o porahéi também mostra o caminho da alma para o céu.",
      // Barros 2014, p. 168 (jeko), p. 148 (araka'e) e p. 156 (he'i)
      grammar_why:
        "Ao contar, o kaiowá marca de onde vem o que diz: “jeko” é “dizem, ouvi dizer”; “araka'e”, um passado distante, que quem fala não viu. A fala dos personagens vem como foi dita, com “he'i” (disse): “Ipohýi xe rekove, he'i tatu”, minha vida é difícil, diz o tatu. E -pa, depois do verbo, diz que a ação foi completa: “Ohopa”, eles foram todos.",
      grammar_examples: [
        // Barros 2014, p. 168, p. 148, p. 156 e p. 117
        ["Yma jeko oiko araka'e nhande ru.", 'Antigamente, dizem, viveu nosso pai.'],
        ["Yma jeko araka'e ovu y.", 'Muito tempo atrás, dizem, a água subiu.'],
        ["Ipohýi xe rekove, he'i tatu.", '“Minha vida é difícil”, diz o tatu.'],
        ['Ohopa.', 'Eles foram todos.'],
      ],
      character_guide: [
        ['jeko', 'dizem que, ouvi dizer', "Yma jeko oiko araka'e nhande ru."],
        ["araka'e", 'há muito tempo (não visto)', "ovu araka'e (subiu, há muito tempo)"],
        ["he'i", 'disse, diz', "he'i tatu (diz o tatu)"],
        ["ra'e", 'talvez', "Oikove ra'e (talvez sobreviva)"],
        ['-pa', 'tudo, completamente', 'ohopa (foram todos)'],
      ],
    },
    lessons: [
      {
        id: 'kgk-u8-l1',
        title: "Jeko, araka'e: o que se conta",
        kind: 'licao',
        words: ['jeko', "araka'e", 'ymagware', 'nhepyrũ', 'opa', 'mano'],
        cloze: [
          // Barros 2014, p. 168; p. 200 (peve) e p. 209 (rire) como distratores
          { sentence: "Yma ___ oiko araka'e nhande ru.", answer: 'jeko', options: ['jeko', 'peve', 'rire'], translation: 'Antigamente, dizem, viveu nosso pai.' },
          // Barros 2014, p. 194
          { sentence: 'Yma ___ onhepyrũ ramo gware ko yvy.', answer: "araka'e", options: ["araka'e", "ko'ánga", "ko'ẽ ramo"], translation: 'Antigamente, quando começou esta terra.' },
          // Barros 2014, p. 197
          { sentence: "___ ka'agwy.", answer: 'Opa-ma', options: ['Opa-ma', 'Onhepyrũ', 'Okanhy'], translation: 'A mata acabou.' },
        ],
        // Barros 2014, p. 187 (mombe'u) e p. 154 (ha'e3)
        voice: {
          bot: "Ãy amombe'u-ta ymagware rehegwa nhe'ẽ.",
          botTranslation: 'Agora vou contar uma história sobre antigamente.',
          expected: ["Ha'e.", "ha'e"],
          hint: 'Mostre que está ouvindo: “Ha\'e” (sim, é isso).',
        },
        communityPrompt: "Reconte uma história que alguém mais velho te contou, marcando com “jeko” (dizem que) o que você ouviu e com “araka'e” o que aconteceu há muito tempo.",
      },
      {
        id: 'kgk-u8-l2',
        title: 'Okanhy, oripara: os bichos das histórias',
        kind: 'licao',
        words: ['kanhy', 'ripara', 'jakare', "ka'i", 'tatu', "ju'i"],
        cloze: [
          // Barros 2014, p. 172; p. 203 (Opuka) e p. 179 (Omano) como distratores
          { sentence: '___ jagwarete-gwi.', answer: 'Okanhy', options: ['Okanhy', 'Opuka', 'Omano'], translation: 'Ele fugiu da onça.' },
          // Barros 2014, p. 165
          { sentence: "Ke'y ojeupi ___ ati'y-rehe.", answer: 'jakare', options: ['jakare', 'tatu', "ju'i"], translation: 'O irmão mais velho subiu no ombro do jacaré.' },
          // Barros 2014, p. 214
          { sentence: "Ipohýi xe rekove, he'i ___ monde gwy-py oime jave.", answer: 'tatu', options: ['tatu', "ka'i", 'jakare'], translation: '“Minha vida é difícil”, diz o tatu quando está debaixo do mundéu.' },
        ],
        // Barros 2014, p. 190 (nipo) e p. 206 (oração tirada de “Ndaikwaái xe onhorairõ para'e onhopixãi para'e”)
        voice: {
          bot: "Ma'erã nipo ndoipotái imemby omenda?",
          botTranslation: 'Por que será que ela não quer que a filha se case?',
          expected: ['Ndaikwaái.', 'ndaikwaái'],
          hint: 'Diga que não sabe: “Ndaikwaái.”',
        },
        communityPrompt: 'Escreva uma fala para cada bicho, como nas histórias do dicionário, terminando com “he\'i”: o que diria o jacaré, o macaco, o sapo?',
      },
      {
        id: 'kgk-u8-l3',
        title: 'Teste: Yma jeko',
        kind: 'prova',
        words: [],
        cloze: [],
        // Barros 2014, p. 156 (-hegwi: Mamo pa ereho ereripara xéhegwi?) e p. 208 (ripara: Xe aripara aju-vy)
        voice: {
          bot: 'Mamo pa ereho ereripara xéhegwi?',
          botTranslation: 'Aonde você vai correndo para longe de mim?',
          expected: ['Xe aripara aju-vy.', 'aripara aju-vy', 'aripara'],
          hint: 'Diga que, ao contrário, veio correndo: “Xe aripara aju-vy” (eu vim correndo).',
        },
        communityPrompt: "Conte, com suas palavras, a história de Pa'ikwara e Jasy, o sol e a lua, usando “jeko”, “araka'e” e “he'i”.",
      },
    ],
  },
];
