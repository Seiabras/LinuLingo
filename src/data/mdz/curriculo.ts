import type { UnitSeed } from '../types';

/**
 * Trilha do aikewára: por enquanto só as duas unidades do nível A1 (pacote incompleto — ver
 * `incomplete` em index.ts). Fontes (detalhes no cabeçalho de vocabulario.ts):
 *   [L14] Lopes, tese UnB 2014 (dicionário Suruí-Português, cap. 10.3; sintaxe, cap. 6.2; escrita,
 *         cap. 5; história e situação da língua, caps. 2 e 3);
 *   [L15] Lopes, Fragmentum n. 46 (2015/2016) — prefixos de pessoa e paradigmas;
 *   [ISA] Roque de Barros Laraia, verbete “Aikewara” em Povos Indígenas no Brasil
 *         (pib.socioambiental.org/pt/Povo:Aikewara, 1998, rev. 2020): nomes, população (470 em 2020,
 *         Siasi/Sesai), clãs, nomes próprios, roça.
 *
 * Todas as frases das lições são citações de [L14]/[L15], com UMA exceção, montada por nós e
 * marcada onde aparece: “Ka'a wi asor” (eu vim do mato), resposta a “Mo wi pa'e eresor?”. Ela troca,
 * na pergunta atestada, “mo” (onde) por “ka'a” (mato) — “ka'a wi” (do mato) está em [L14] ex. 094
 * (“tapi'ira puta oho ka'a wi uhema”) — e “eresor” (você veio) por “asor” (eu venho/vim, [L14] p. 75;
 * [L15] p. 158). As fontes não trazem uma resposta pronta a “de onde você veio?”.
 */
export const UNITS_MDZ: UnitSeed[] = [
  {
    id: 'mdz-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: "Mo wi pa'e eresor?",
    emoji: '👋',
    card: {
      id: 'mdz-c1',
      title: 'Aikewara, o povo do Sororó',
      emoji: '🌳',
      // [L14] caps. 2 e 3 (Tabela 01, pp. 45-47; 2.1, pp. 47-49; 3.3, pp. 62-64) e [ISA] (nomes,
      // população de 2020, epidemia de 1960: 126 → 40 pessoas). “Mudjetíre” não entra como nome: é
      // apelido de origem jê com sentido depreciativo ([L14] p. 49, nota 8).
      history:
        'O aikewára é a língua do povo Aikewara, que vive na Terra Indígena Sororó, no sudeste do Pará, a cerca de 100 km de Marabá — uma terra cortada pela rodovia BR-153. Os de fora deram ao povo vários nomes: “Sororós” (1923) e “Suruí” (anos 1950), por isso a língua também aparece nos livros como suruí do Pará ou suruí do Tocantins. Hoje o povo pede para ser chamado só pelo próprio nome, Aikewara. O contato com os brancos foi duríssimo: em 1960, uma epidemia de gripe matou 86 das 126 pessoas, e nos anos 1970 o povo se viu no meio da Guerrilha do Araguaia. Os Aikewara se recuperaram e eram cerca de 470 em 2020. A língua é da família tupi-guarani, muito próxima da dos Asurini do Tocantins e dos Parakanã. Os adultos e os mais velhos ainda a falam, mas os jovens nascidos a partir dos anos 1990 falam quase só português — por isso os professores aikewara ensinam a língua na escola da aldeia.',
      // [L14] 5.5.3-5.5.4 (sem “?” e sem maiúsculas na escrita dos Aikewara; pa'e marca a pergunta);
      // Anexo G (cantos do velho Miho, gravados e escritos pelos professores Ikatu e Tymykong em abril
      // de 2014 “para a festa Sapurahaj”); s.v. “upurahaj” (dançar; “é a festa do Sapurahaj”).
      culture_tip:
        'Quando os próprios Aikewara escrevem a língua, não usam ponto de interrogação nem letra maiúscula: a pergunta já vem marcada pela palavrinha “pa’e” (“ereker pa’e”, você dormiu?). E na festa do Sapurahaj há canto e dança — “apurahaj” quer dizer “eu danço”. Em 2014, os professores Ikatu e Tymykong gravaram e escreveram os cantos do velho Miho para a festa.',
      // [L15] 1.1.1.2 e Quadro 1 (a-, ere-, uru-, sa-, pe-, u-) e o paradigma de “comer” (p. 158);
      // ordem SOV mais frequente e SVO também comum: [L14] 6.2.2 (pp. 120-121); “ise karuaruhua asuka”
      // (s.v. “karuaruhua”, “eu sempre caço paca”), “ure uruapo ’oga” ([L14] ex. 124).
      grammar_why:
        'O verbo começa com uma marca de quem faz a ação: “a-” para eu (akaru, comi), “ere-” para você (erekaru), “sa-” para nós incluindo quem ouve (sakaru), “uru-” para nós sem quem ouve (urukaru), “pe-” para vocês (pekaru) e “u-” para ele ou ela (ukaru). Por isso o pronome pode ficar de fora: “aker” já é “eu durmo”. O mesmo verbo serve para presente e passado — “aker” é “eu durmo” e “eu dormi”. A ordem mais comum é sujeito, objeto e verbo no fim (“ise karuaruhua asuka”, eu caço paca), mas o verbo também pode vir no meio (“ure uruapo ’oga”, nós fizemos estas casas).',
      grammar_examples: [
        ['Akaru.', 'Eu comi.'],
        ['Erekaru.', 'Você comeu.'],
        ["Ereker pa'e?", 'Você dormiu?'],
        ["Ure uruapo 'oga.", 'Nós fizemos estas casas.'],
      ],
      // [L14] cap. 5.4 (Quadros 09-10), cap. 4 (pares, sílaba, nasalidade) e nota 29 (“j” = /s/ no fim
      // de sílaba); tônica: as transcrições do dicionário (“/kwaɾa'hɨ/”, “/sa'waɾa/”, “/mani'ʔɔga/”).
      character_guide: [
        ['y', '/ɨ/, som entre “i” e “u”, com a boca meio aberta, como no guarani e no nheengatu', "'ya (água), ywy (terra)"],
        ["'", 'oclusiva glotal /ʔ/: uma pequena parada do ar na garganta, como em “oh-oh”', "ka'a (mato), 'oga (casa)"],
        ['j', 'só no fim da sílaba: é o “s” da língua, que ali soa como o “i” de “pai”', 'akojte (eu gosto), haj (azedo)'],
        ['ng', 'um som só, como o “ng” de “manga” falado devagar', 'ipironga (vermelho), itingwoj (sal)'],
        ['kw', 'um som só, como o “qu” de “quase”', 'kwarahy (sol)'],
        ['vogais', 'e/o podem soar abertos ou fechados; perto de m, n e ng as vogais ficam anasaladas, mas não se escreve til', 'manimea (farinha), amona (chuva)'],
        ['tônica', 'não é marcada; costuma ser a última sílaba (kwarahy: kwa-ra-HY), mas o -a final de muitos nomes não leva a força (sawara: sa-WA-ra)', "kwarahy, sawara, mani'oga"],
      ],
    },
    lessons: [
      {
        id: 'mdz-u1-l1',
        title: "Mo wi pa'e eresor?",
        kind: 'licao',
        words: ["mo wi pa'e eresor?", 'asor', 'nawi', 'ajnon', 'katuete', 'aha puta'],
        // “mo wi pa'e eresor?” (s.v. “mo”, “usor”); “aha puta” (s.v. “oho”); “ereker pa'e?” ([L14] ex. 080)
        cloze: [
          { sentence: "Mo wi pa'e ___?", answer: 'eresor', options: ['eresor', 'asor', 'pesor'], translation: 'De onde você veio?' },
          { sentence: 'Aha ___.', answer: 'puta', options: ['puta', "pa'e", 'nawi'], translation: 'Eu vou embora.' },
          { sentence: 'Ereker ___?', answer: "pa'e", options: ["pa'e", 'puta', 'nawi'], translation: 'Você dormiu?' },
        ],
        // “aj'aw pa'e reko?” ([L14] ex. 060) e “nawi” (s.v. “nawi”)
        voice: {
          bot: "Aj'aw pa'e reko?",
          botTranslation: 'Você está morando aqui?',
          expected: ['Nawi.', 'nawi'],
          hint: 'Você só está de visita: responda “Nawi” (não).',
        },
        communityPrompt: "Escreva a pergunta de quem recebe a visita (“Mo wi pa'e eresor?”) e uma despedida (“Aha puta.”).",
      },
      {
        id: 'mdz-u1-l2',
        title: 'Ise, ene, sene',
        kind: 'licao',
        words: ['ise', 'ene', 'ure', 'sene', 'pehe', 'awa'],
        // [L14] ex. 124 (ure uruapo 'oga), [L15] ex. 14 (pehe puta pesuka ma'ea pesehow?), [L14] ex. 084
        // (Ikatua weraha 'ya sene upe). Distratores: “asuka” (s.v. “karuaruhua”: “ise karuaruhua
        // asuka”) e “eresuka” (s.v. “tuwa2”: “eresuka pa'e ma'ea?”).
        cloze: [
          { sentence: "___ uruapo 'oga.", answer: 'Ure', options: ['Ure', 'Ise', 'Pehe'], translation: 'Nós fizemos estas casas.' },
          { sentence: "Pehe puta ___ ma'ea pesehow?", answer: 'pesuka', options: ['pesuka', 'asuka', 'eresuka'], translation: 'Vocês vão matar aquelas caças?' },
          { sentence: "Ikatua weraha 'ya ___ upe.", answer: 'sene', options: ['sene', 'ise', 'ene'], translation: 'Ikatu levou água para nós.' },
        ],
        // “ereker pa'e?” ([L14] ex. 080) e “aker” (s.v. “uker”)
        voice: {
          bot: "Ereker pa'e?",
          botTranslation: 'Você dormiu?',
          expected: ['Aker.', 'aker'],
          hint: 'Ele perguntou com “ere-” (você); responda com “a-” (eu): “Aker” (eu dormi).',
        },
        communityPrompt: 'Escreva frases com “ise” (eu), “ure” (nós, sem você) e “sene” (nós, com você).',
      },
      {
        id: 'mdz-u1-l3',
        title: "Prova: mo wi pa'e eresor?",
        kind: 'prova',
        words: [],
        cloze: [],
        // resposta montada por nós — ver o cabeçalho deste arquivo
        voice: {
          bot: "Mo wi pa'e eresor?",
          botTranslation: 'De onde você veio?',
          expected: ["Ka'a wi asor.", "ka'a wi asor", 'asor'],
          hint: "Diga que veio do mato: “Ka'a wi asor” (eu vim do mato).",
        },
        communityPrompt: "Escreva uma visita curta: a pergunta “Mo wi pa'e eresor?”, a resposta “Ka'a wi asor.” e a despedida “Aha puta.”.",
      },
    ],
  },
  {
    id: 'mdz-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: "Ti ruwa, ti ma'euej",
    emoji: '👪',
    card: {
      id: 'mdz-c2',
      title: 'Família, clãs e roça',
      emoji: '🌽',
      // [ISA]: cinco grupos de descendência patrilinear (Koaci-arúo, quati; Saopakania, gavião;
      // Pindawa, palmeira; Ywyra, madeira; Karajá); chefia hereditária dos Koaci; nome dado ao nascer
      // e nome definitivo no ritual de perfuração do lábio inferior, por volta dos 13 ou 14 anos.
      // “Sapakania”, gavião, na grafia de [L14] (s.v. “sapakania”).
      history:
        'Os Aikewara se dividem em grupos de parentes que passam de pai para filho, como clãs, cada um com o nome de um bicho ou de uma planta: Koaci-arúo (o quati), Saopakania (o gavião — “sapakania” na grafia do dicionário), Pindawa (uma palmeira) e Ywyra (a madeira), além do grupo Karajá. A chefia passava de pai para filho entre os homens do clã do quati. Os nomes das pessoas também têm seu tempo: o menino recebe um nome ao nascer, muitas vezes engraçado, e o nome definitivo só no ritual de furar o lábio inferior, por volta dos 13 ou 14 anos.',
      // [ISA] (roça: mandioca, banana, inhame, batata-doce, milho, pimenta, algodão, fumo; castanhais);
      // [L14] s.v. “manimea”, “manimea pukujtawa roga (~manimea roga)”, “so”, “so kytykawa”.
      culture_tip:
        'A roça sempre foi o centro da vida aikewara: mandioca de várias espécies, banana, inhame, batata-doce, milho, pimenta, algodão e fumo. Da mandioca (“mani’oga”) se faz a farinha (“manimea”), na casa de farinha, a “manimea roga”. Outra riqueza é a castanha-do-pará (“so”), colhida nos castanhais — tão importante que a demarcação da terra deixou de fora castanhais que o povo usava, e isso virou luta de décadas.',
      // [L15] Tabela 2 (uw ‘pai’: t-uwa dele, ɾ-uwa com o dono antes); s.v. “tuwa2” (“ti ruwa”), “eha”
      // (“sene reha, nosso olho”), “uker” (“ti memyra uker”); [L14] ex. 087 (“ne ruwa pe”).
      grammar_why:
        'Para dizer de quem é, o dono vem ANTES: “ti” (meu), “ne” (teu), “sene” (nosso, com você), “pe” (de vocês). Muitos nomes ganham um “r-” depois do dono: “tuwa” é “o pai (de alguém)”, mas “meu pai” é “ti ruwa” e “teu pai”, “ne ruwa”; “eha” é “olho”, e “nosso olho”, “sene reha”. Outros nomes não mudam: “ti memyra”, meu filho. E alguns parentes dependem de quem fala: o homem diz “a’yra” para o filho; a mulher, “memyra”.',
      grammar_examples: [
        ['Ti ruwa.', 'Meu pai.'],
        ['Ne ruwa.', 'Teu pai.'],
        ['Sene reha.', 'Nosso olho.'],
        ['Ti memyra uker.', 'Meu filho dormiu.'],
      ],
      // r-: [L15] Tabela 2; -a argumentativo: [L15] 1.1.2.1 e [L14] ex. 125 (“mani'og”); -hu e -'i:
      // [L15] 1.1.2.2 (tatu + -hu ‘tatu grande’; wyra + -ʔi ‘pássaro pequeno’) e s.v. “tatuhu”,
      // “wyra'i”, “ipira'i”.
      character_guide: [
        ['r- depois do dono', 'muitos nomes ganham um r- quando alguém vem antes deles', 'tuwa → ti ruwa (meu pai), eha → sene reha (nosso olho)'],
        ['-a no fim', 'muitos nomes terminam num -a que pode cair dentro da frase', "mani'oga → “awa pa'e utym mani'og?” (quem plantou a mandioca?)"],
        ['-hu, -uhu', 'grande', 'tatu → tatuhu (tatu-canastra, o tatu grande)'],
        ["-'i", 'pequeno', "wyra → wyra'i (passarinho), ipira → ipira'i (peixinho)"],
      ],
    },
    lessons: [
      {
        id: 'mdz-u2-l1',
        title: "Ti ruwa, ti hy",
        kind: 'licao',
        words: ['ti ruwa', 'ti hy', 'memyra', "a'yra", 'irua', 'amuj'],
        // s.v. “uker” (ti memyra uker), “hy” (ko pupe ti hy ihoj), [L14] ex. 087 (ene pa'e eremono
        // ywyrapara ne ruwa pe?)
        cloze: [
          { sentence: 'Ti ___ uker.', answer: 'memyra', options: ['memyra', 'ruwa', 'hy'], translation: 'Meu filho dormiu.' },
          { sentence: 'Ko pupe ti ___ ihoj.', answer: 'hy', options: ['hy', 'memyra', 'ruwa'], translation: 'Minha mãe foi para a roça.' },
          { sentence: "Ene pa'e eremono ywyrapara ne ___ pe?", answer: 'ruwa', options: ['ruwa', 'tuwa', 'hy'], translation: 'Você deu o arco para o teu pai?' },
        ],
        // s.v. “moron” (“moron pa'e ne ra'yra? quantos filhos são teus?”) e os numerais
        voice: {
          bot: "Moron pa'e ne ra'yra?",
          botTranslation: 'Quantos filhos você tem?',
          expected: ['Namukuj.', 'namukuj', 'usepese', 'irutehe'],
          hint: 'Responda com um número: “usepese” (um), “namukuj” (dois) ou “irutehe” (três).',
        },
        communityPrompt: 'Apresente a sua família com “ti” (meu, minha): “ti ruwa” (meu pai), “ti memyra” (meu filho)…',
      },
      {
        id: 'mdz-u2-l2',
        title: "'Ya, manimea, mani'oga",
        kind: 'licao',
        words: ["'ya", 'manimea', "mani'oga", 'pahakua', 'akaru', "ti ma'euej"],
        // s.v. “ima'euej” (ne ma'euej pa'e?), [L14] ex. 125 (awa pa'e utym mani'og?), s.v. “ukaru”
        // (kopesor sakaru). Distratores: “ne ru'y pa'e?” (s.v. “iru'ya”), “ukaru” (s.v. “ukaru”).
        cloze: [
          { sentence: "Ne ___ pa'e?", answer: "ma'euej", options: ["ma'euej", "ru'y", 'memyra'], translation: 'Você está com fome?' },
          { sentence: "Awa pa'e utym ___?", answer: "mani'og", options: ["mani'og", "'ya", 'manimea'], translation: 'Quem plantou a mandioca?' },
          { sentence: 'Kopesor, ___.', answer: 'sakaru', options: ['sakaru', 'akaru', 'ukaru'], translation: 'Vem aqui, vamos comer.' },
        ],
        voice: {
          bot: "Ne ma'euej pa'e?",
          botTranslation: 'Você está com fome?',
          expected: ["Ti ma'euej.", "ti ma'euej"],
          hint: "Diga que está com fome: “Ti ma'euej” (literalmente, “minha fome”).",
        },
        communityPrompt: "Diga como você está (“Ti ma'euej”, “Ti kane'uete ri'a”) e o que você come.",
      },
      {
        id: 'mdz-u2-l3',
        title: "Prova: ti ma'euej",
        kind: 'prova',
        words: [],
        cloze: [],
        // s.v. “ukaru” (kopesor sakaru) e “ipise”/“emi'u” (temi'u episepise)
        voice: {
          bot: 'Kopesor, sakaru.',
          botTranslation: 'Vem aqui, vamos comer.',
          expected: ["Temi'u episepise.", "temi'u episepise", 'katuete'],
          hint: "Prove e elogie: “Temi'u episepise” (a comida está muito gostosa).",
        },
        communityPrompt: "Escreva sobre a sua família (“ti ruwa”, “ti memyra”…) e sobre a comida: “Ti ma'euej”, “Temi'u episepise”.",
      },
    ],
  },
];
