import type { UnitSeed } from '../types';

/**
 * Trilha do karitiana, do A1.1 ao A2.2 (o teto do idioma). O A1 se apoia sobretudo no artigo da
 * Wikipédia em português (que cita Storto 1999 e Everett 2007); o A2 vem direto das fontes
 * acadêmicas, com a página de cada frase (ver o bloco do A2 no fim deste arquivo). Ver
 * vocabulario.ts para as fontes de cada palavra. No A1, as frases que não são citações diretas de
 * Storto (1999), Everett (2007) ou Rocha (2014) foram montadas combinando só
 * estruturas já documentadas — a pergunta “mõrãmõn ka/ho/onỹ?” (atestada) seguida de uma resposta em
 * substantivo nu (regra documentada: frases nominais em karitiana não usam artigo) — nunca uma
 * palavra ou regra nova inventada.
 */
export const UNITS_KTN: UnitSeed[] = [
  {
    id: 'ktn-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Ỹn, ãn, i',
    emoji: '🙋',
    card: {
      id: 'ktn-c1',
      title: 'Yjxa, o povo do rio Candeias',
      emoji: '🏞️',
      history:
        'O karitiana (os próprios falantes se chamam “Yjxa”, o pronome de 1ª pessoa do plural inclusivo — “nós” ou “gente” —, em oposição a “opok”, os não indígenas, e “opok pita”, os outros indígenas) é a única língua ainda viva da família Arikém, um ramo pequeno e separado do tronco linguístico Tupi — não o ramo tupi-guarani de outras línguas indígenas deste app. As outras duas línguas da família, o arikém e o kabixiana, já estão extintas. Em 2017 havia cerca de 396 Karitiana com 333 falantes (Rocha, 2018); em 2021, a Associação do Povo Indígena Karitiana contava cerca de 450 pessoas distribuídas em sete aldeias — um crescimento de 600% desde 1970, quando restavam só 64 pessoas. Vivem na Terra Indígena Karitiana, cerca de 95 km ao sul de Porto Velho (RO), às margens dos rios Candeias, Jamari e Jaci-Paraná. A aldeia principal, Kyõwã, significa “boca (sorriso) de criança”.',
      culture_tip:
        'Até meados do século XX, os Karitiana moravam em grandes casas comunais redondas chamadas “ambi atana” — construídas com troncos, cipó e palha de babaçu, e ensinadas, segundo a tradição, por Botyj̃ (“Deus”, a divindade criadora). Elas foram abandonadas como moradia há décadas, mas continuam sendo erguidas como espaço cerimonial. As famílias extensas eram lideradas por um “mahipto” (chefe).',
      grammar_why:
        'O karitiana tem um traço gramatical raro: é uma língua ergativo-absolutiva. Isso quer dizer que o verbo intransitivo concorda com o seu único argumento (o sujeito), mas o verbo TRANSITIVO concorda com o OBJETO, não com o sujeito — o oposto do padrão do português, que é nominativo-acusativo (o verbo sempre concorda com o sujeito). Por isso “eu” muda de prefixo conforme a frase: em “y-ta-opiso-t ỹn” (eu ouvi), o prefixo “y-” concorda com “ỹn” (eu), o único argumento de um verbo intransitivo; já em “an y-ta-oky-t ỹn” (você me machucou), o mesmo prefixo “y-” aparece porque “ỹn” (eu) é o OBJETO do verbo transitivo “machucar” — o sujeito “você” (an) não é marcado no verbo. Além disso, os pronomes do karitiana são epicenos: “i” serve tanto para “ele” quanto para “ela”, e nenhuma parte da gramática marca gênero.',
      grammar_examples: [
        ['Ỹn a-taka-oky-j an.', 'Eu vou machucar você.'],
        ['An y-ta-oky-t ỹn.', 'Você me machucou.'],
        ['Y-ta-opiso-t ỹn.', 'Eu ouvi.'],
        ['A-ta-opiso-t an.', 'Você ouviu.'],
      ],
      character_guide: [
        ['y', '/ɨ/, som entre “i” e “u”, como o “u-huh” do inglês', 'py (mão)'],
        ['nh', '/ɲ/, como o “nh” de “banho”', 'nhõnh (dente)'],
        ["'", 'oclusiva glotal /ʔ/, uma parada total do ar na garganta', "mỹ'ĩnã (criança)"],
        ['~ (til)', 'marca a nasalização da vogal', 'ỹn (eu), gokyp (sol, sem til: oral)'],
      ],
    },
    lessons: [
      {
        id: 'ktn-u1-l1',
        title: 'Ỹn, ãn, i',
        kind: 'licao',
        words: ['Ỹn', 'Ãn', 'I', 'Taso', 'Nhõnso', "Mỹ'ĩnã"],
        cloze: [
          { sentence: '___ a-taka-oky-j an.', answer: 'Ỹn', options: ['Ỹn', 'Ãn', 'I'], translation: 'Eu vou machucar você.' },
          { sentence: 'An y-ta-oky-t ___.', answer: 'ỹn', options: ['ỹn', 'ãn', 'i'], translation: 'Você me machucou.' },
          { sentence: '___ ty nã-yry-t.', answer: 'Taso', options: ['Taso', 'Nhõnso', "Mỹ'ĩnã"], translation: 'O homem grande chegou.' },
        ],
        voice: {
          bot: 'Mõrãmõn ka?',
          botTranslation: 'O que é isso? (apontando algo na mão)',
          expected: ['Taso.', 'taso', 'nhõnso', "mỹ'ĩnã"],
          hint: 'Responda só com o substantivo, sem artigo: “Taso” (homem) — frases nominais em karitiana não usam “o/a”.',
        },
        communityPrompt: 'Responda “Mõrãmõn ka?” (o que é isso?) com um substantivo que você já sabe, sem usar “o/a”.',
      },
      {
        id: 'ktn-u1-l2',
        title: 'Mãn, sojt, ombyj',
        kind: 'licao',
        words: ['Mãn', 'Sojt', 'Ombyj', 'Yjxa', 'Go i haap', 'Yryhon'],
        cloze: [
          { sentence: 'I ___.', answer: 'sojt', options: ['sojt', 'mãn', 'ombyj'], translation: 'Esposa dele.' },
          { sentence: 'Go i ___!', answer: 'haap', options: ['haap', 'mõnh', 'yryhon'], translation: 'Bom dia!' },
          { sentence: '___!', answer: 'Yryhon', options: ['Yryhon', "Pyse'an", 'Õwĩ'], translation: 'Obrigado!' },
        ],
        voice: {
          bot: 'Go i haap!',
          botTranslation: 'Bom dia!',
          expected: ['Go i haap! Yryhon.', 'yryhon'],
          hint: 'Responda ao cumprimento com “Go i haap!” de volta e agradeça com “Yryhon!”.',
        },
        communityPrompt: 'Cumprimente com “Go i haap!” ou “Go i mõnh!” e agradeça com “Yryhon!”. Depois, apresente sua família com “Mãn” (marido), “Sojt” (esposa) ou “Ombyj” (avô/avó, termo recíproco entre avós e netos).',
      },
      // Lições extras do A1.1 (17/10/2026), só com palavras que o A1 já tinha. Fontes das frases: as
      // expressões e a pergunta “mõrãmõn ka/onỹ?” são as de pt.wikipedia.org/wiki/Língua_caritiana
      // (ver vocabulario.ts e gramatica.ts); “Ese pip” (na água) é do Gopi Yjxa (Ciola 2020, p. 32).
      // As duas respostas “Mõrãmõn onỹ? Oti.” e “Mõrãmõn ka? Iso.” são MONTADAS pela regra que o curso
      // já usa desde o A1.1: pergunta atestada + resposta com o substantivo nu, sem artigo.
      {
        id: 'ktn-u1-l4',
        title: "Go i mõnh, my'ari",
        kind: 'licao',
        words: ['Go i mõnh', "My'ari", "Pyse'an", 'Õwĩ', "O'ĩ", 'Mõrãmõn'],
        cloze: [
          { sentence: 'Go i ___!', answer: 'mõnh', options: ['mõnh', 'haap', 'yryhon'], translation: 'Boa noite!' },
          { sentence: '___ ka?', answer: 'Mõrãmõn', options: ['Mõrãmõn', 'Mõrãpip', 'Mõrãsõg'], translation: 'O que é isso?' },
          { sentence: '___!', answer: "My'ari", options: ["My'ari", "Pyse'an", 'Õwĩ'], translation: 'Vamos!' },
        ],
        voice: {
          bot: 'Go i mõnh!',
          botTranslation: 'Boa noite!',
          expected: ['Go i mõnh!', 'go i mõnh', 'yryhon'],
          hint: 'De noite, responda com a mesma saudação: “Go i mõnh!”.',
        },
        communityPrompt: "Escreva um diálogo curto à noite: alguém diz “Go i mõnh!”, você responde igual e chama para sair com “My'ari!” (vamos!).",
      },
      {
        id: 'ktn-u1-l5',
        title: 'Ese, gokyp, oti',
        kind: 'licao',
        words: ['Ese', 'Gokyp', 'Oti', 'Pãmpi', 'Iso', 'Nip'],
        cloze: [
          { sentence: '___ pip.', answer: 'Ese', options: ['Ese', 'Iso', 'Nip'], translation: 'Na água.' },
          { sentence: 'Mõrãmõn onỹ? ___.', answer: 'Oti', options: ['Oti', 'Ese', 'Iso'], translation: 'O que é aquilo ali? A lua.' },
          { sentence: 'Mõrãmõn ka? ___.', answer: 'Iso', options: ['Iso', 'Gokyp', 'Pãmpi'], translation: 'O que é isso? Fogo.' },
        ],
        voice: {
          bot: 'Mõrãmõn onỹ?',
          botTranslation: 'O que é aquilo ali? (apontando para o céu)',
          expected: ['Gokyp.', 'gokyp', 'oti', 'pãmpi'],
          hint: 'Responda só com o substantivo, sem artigo: “Gokyp” (sol), “Oti” (lua) ou “Pãmpi” (céu).',
        },
        communityPrompt: 'Aponte para três coisas da natureza e responda “Mõrãmõn onỹ?” com o nome delas, sem artigo: “Gokyp”, “Oti”, “Ese”…',
      },
      {
        id: 'ktn-u1-l3',
        title: 'Test: Go i haap, Yjxa',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Go i haap! Mõrãmõn ka?',
          botTranslation: 'Bom dia! O que é isso?',
          expected: ['Taso.', 'nhõnso', "mỹ'ĩnã", 'taso'],
          hint: 'Responda ao cumprimento e nomeie alguém da família só com o substantivo, sem artigo.',
        },
        communityPrompt: 'Escreva uma apresentação: cumprimente com “Go i haap!”, nomeie alguém da família (“Mãn”, “Sojt” ou “Ombyj”) e agradeça com “Yryhon!”.',
      },
    ],
  },
  {
    id: 'ktn-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Mỹhĩn, sypõm, mỹnhỹm',
    emoji: '🖐️',
    card: {
      id: 'ktn-c2',
      title: 'Números e bichos do rio Candeias',
      emoji: '🐍',
      history:
        'O karitiana conta em base 5: há raízes próprias para “um” a “quatro” (mỹhĩn, sypõm, mỹnhỹm, otannỹmỹn), mas “cinco” já é “yj pyt”, literalmente “uma mão”, e “dez” é “yj py ota tyta” (duas mãos). O sistema consegue nomear números até pelo menos 100, mas é uma área da língua em erosão: como o português é a língua usada para vender artesanato aos brasileiros, os números mais altos — que exigem preços em português — estão caindo em desuso, e muitos falantes já os pronunciam com dificuldade (Everett, 2007, p. 317, citado na Wikipédia em português).',
      culture_tip:
        'O rio Candeias é piscoso, e um dos principais rituais karitiana é a festa da jatuarana, celebrando a fartura desse peixe muito apreciado. A pesca com timbó (um cipó que entorpece os peixes) e a caça de paca, capivara e veado completam a alimentação tradicional ao lado da mandioca (gok) plantada em roças de coivara.',
      grammar_why:
        'Assim como as frases nominais não levam artigo, elas também não têm um operador gramatical de número: “gok” serve tanto para “a mandioca” quanto para “as mandiocas”, sem um plural morfológico marcado no substantivo (diferente do português, que sempre marca o plural com “-s”). Os numerais, quando usados, vêm soltos antes ou depois do substantivo, sem concordância nenhuma com ele.',
      grammar_examples: [
        ['Ỹn naka-y-t gok.', 'Eu comi a mandioca.'],
        ['Ãn i-y gok-o hỹ?', 'Você comeu a mandioca?'],
        ['Mỹhĩn, sypõm, mỹnhỹm, otannỹmỹn, yj pyt.', 'Um, dois, três, quatro, cinco.'],
      ],
      character_guide: [
        ['õ, ã, ĩ, ỹ', 'vogais nasais (til)', 'otannỹmỹn (quatro), mõrãmõn (o quê?)'],
        ['x', '/tʃ/, como o “t” de “tio”', 'não aparece nesta unidade'],
        ['hỹ', 'partícula que marca pergunta, no fim da frase (pode ser omitida)', 'ãn i-y gok-o hỹ? (você comeu a mandioca?)'],
        ['naka-, a-', 'prefixos verbais de 3ª e 2ª pessoa que concordam com o objeto (não o sujeito) em verbos transitivos', 'ỹn naka-y-t gok (eu comi a mandioca — “naka-” concorda com “gok”, o objeto)'],
      ],
    },
    lessons: [
      {
        id: 'ktn-u2-l1',
        title: 'Mỹhĩn, sypõm, mỹnhỹm',
        kind: 'licao',
        words: ['Mỹhĩn', 'Sypõm', 'Mỹnhỹm', 'Otannỹmỹn', 'Yj pyt', 'Gok'],
        cloze: [
          { sentence: '___, sypõm, mỹnhỹm.', answer: 'Mỹhĩn', options: ['Mỹhĩn', 'Sypõm', 'Mỹnhỹm'], translation: 'Um, dois, três.' },
          { sentence: 'Otannỹmỹn, ___.', answer: 'yj pyt', options: ['yj pyt', 'mỹhĩn', 'sypõm'], translation: 'Quatro, cinco (lit. “uma mão”).' },
          { sentence: 'Ỹn naka-y-t ___.', answer: 'gok', options: ['gok', 'mỹhĩn', 'sypõm'], translation: 'Eu comi a mandioca.' },
        ],
        voice: {
          bot: 'Ãn i-y gok-o hỹ?',
          botTranslation: 'Você comeu a mandioca?',
          expected: ['Ỹn naka-y-t gok.', 'gok'],
          hint: 'Responda com a frase afirmativa “Ỹn naka-y-t gok.” (eu comi a mandioca).',
        },
        communityPrompt: 'Conte de um a cinco em karitiana (“mỹhĩn, sypõm, mỹnhỹm, otannỹmỹn, yj pyt”) e diga o que você comeu com “naka-y-t”.',
      },
      {
        id: 'ktn-u2-l2',
        title: 'Omãky, syhej, moroja',
        kind: 'licao',
        words: ['Omãky', 'Syhej', 'Sosy', 'Ne', 'Moroja', 'Ip'],
        cloze: [
          { sentence: 'Mõrãmõn ka? ___.', answer: 'Omãky', options: ['Omãky', 'Syhej', 'Ne'], translation: 'O que é isso? Uma onça.' },
          { sentence: 'Mõrãmõn ho? ___.', answer: 'Syhej', options: ['Syhej', 'Sosy', 'Moroja'], translation: 'O que é aquilo? Uma capivara.' },
          { sentence: 'Mõrãmõn onỹ? ___.', answer: 'Moroja', options: ['Moroja', 'Omãky', 'Ne'], translation: 'O que é aquilo ali? Uma cobra.' },
        ],
        voice: {
          bot: 'Mõrãmõn ka?',
          botTranslation: 'O que é isso?',
          expected: ['Omãky.', 'omãky', 'syhej', 'sosy', 'ne', 'moroja', 'ip'],
          hint: 'Responda só com o nome do bicho, sem artigo: “Omãky” (onça), “Syhej” (capivara), “Ip” (peixe)…',
        },
        communityPrompt: 'Pergunte “Mõrãmõn ka?”, “Mõrãmõn ho?” ou “Mõrãmõn onỹ?” (o que é isso/aquilo/aquilo ali?) e responda só com o nome do bicho, sem artigo.',
      },
      {
        id: 'ktn-u2-l3',
        title: 'Test: yj pyt ip',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ãn i-y gok-o hỹ? Mõrãmõn onỹ?',
          botTranslation: 'Você comeu a mandioca? O que é aquilo ali?',
          expected: ['Ỹn naka-y-t gok. Moroja.', 'gok', 'moroja'],
          hint: 'Confirme com “Ỹn naka-y-t gok.” e nomeie o bicho ao longe, sem artigo.',
        },
        communityPrompt: 'Escreva sobre o que você comeu (“naka-y-t gok”, comeu mandioca) e nomeie dois bichos usando “mõrãmõn ka/ho/onỹ?” como pergunta.',
      },
    ],
  },
  // ══ A2.1 e A2.2 (17/10/2026) ══
  // Siglas das fontes (detalhes no comentário do A2 em vocabulario.ts): ST99 = Storto 1999 (tese, MIT);
  // ST19 = Storto, Garcia Karitiana e Nelson Karitiana, “Karitiana – Gokyp – O Sol” (Revista
  // Linguíʃtica 15(1), UFRJ, 2019), só para fatos da introdução, contados com palavras do curso;
  // SR = Storto e Rocha, “Estrutura Argumental na Língua Karitiana”; SUB = Storto, “Subordination in
  // Karitiana” (2012); MC10 = Marques de Carvalho 2010 (dissertação, USP); GOPI = Ciola 2020, “Gopi
  // Yjxa”. Nenhuma frase destas duas unidades foi montada: cada uma leva a página ao lado.
  {
    id: 'ktn-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: "Naka-'y-t, naka-'y-j: ontem e amanhã",
    emoji: '🕰️',
    card: {
      id: 'ktn-c3',
      title: 'Uma língua estudada com a escola da aldeia',
      emoji: '📘',
      // ST19 p. 419–420 (projeto de alfabetização 1994–1997, livro de mais de 100 páginas usado até
      // hoje, “casa da língua”, ensino fundamental completo, mais de uma dezena de professores).
      history:
        'O karitiana ganhou escrita própria num projeto de alfabetização entre 1994 e 1997, coordenado pela linguista Luciana Storto pelo Museu Paraense Emílio Goeldi. Um terço das pessoas com mais de 10 anos aprendeu a ortografia. O livro feito para o projeto, com mais de 100 páginas, ainda é usado na escola, e a comunidade construiu uma “casa da língua” para as aulas. A aldeia central tem o ensino fundamental completo, o que é raro entre os povos indígenas do Brasil, e hoje há mais de uma dezena de professores karitiana formados. Do A2 em diante, este curso segue a tese de Storto (1999) e os trabalhos feitos com ela e com Ana Müller na USP.',
      // ST19 p. 420–421 (crianças da aldeia central aprendem karitiana como 1ª língua; 25% vivem fora
      // da aldeia e 60% desses não falam mais a língua, segundo Rocha 2018).
      culture_tip:
        'Todas as crianças que vivem na aldeia central aprendem o karitiana como primeira língua; o português vem depois, na escola. Mas cerca de 25% do povo vive fora da aldeia, e 60% dessas pessoas já não falam karitiana, segundo o censo de Ivan Rocha (2018) citado por Storto. Por isso a língua é considerada ameaçada.',
      // MC10 p. 37–39 (resumo de Storto 2002: prefixos de pessoa, na(ka)-/ta(ka)-, -i/-j, -Ø/-t).
      grammar_why:
        'O verbo da frase principal leva sempre três marcas: a pessoa, o modo e o tempo. No modo declarativo, o mais comum, a 3ª pessoa leva “na-” ou “naka-”, e as outras pessoas levam “ta-” ou “taka-”. O tempo só tem duas formas: não futuro (presente e passado juntos) e futuro. “Naka-\'y-t” é “comeu” ou “come”; “naka-\'y-j” é “vai comer”.',
      grammar_examples: [
        ["Taso naka-'y-j ohy.", 'O homem vai comer batata-doce. (Storto 1999, p. 134)'],
        ['Maria na-amang gok koot.', 'Ontem a Maria plantou mandioca. (Marques de Carvalho 2010, p. 38)'],
        ['Y-taka-hor-i yta.', 'Nós (sem você) vamos sair. (Marques de Carvalho 2010, p. 37, citando Storto 1999)'],
        ['Dibm y-ta-ama-j leite-ty.', 'Amanhã eu vou comprar leite. (Storto 1999, p. 135)'],
      ],
      character_guide: [
        ['na-, naka-', 'modo declarativo, 3ª pessoa', 'na-amang (plantou)'],
        ['ta-, taka-', 'modo declarativo, as outras pessoas', 'y-ta-ama-j (vou comprar)'],
        ['-t, -Ø', 'não futuro: “-t” depois de vogal, nada depois de consoante', "naka-'y-t (comeu)"],
        ['-j, -i', 'futuro: “-j” depois de vogal, “-i” depois de consoante', 'y-taka-hor-i (vamos sair)'],
      ],
    },
    lessons: [
      {
        id: 'ktn-u3-l1',
        title: 'Na-amang, naka-hyryp: o que aconteceu',
        kind: 'licao',
        words: ['Yryt', 'Tat', 'Hyryp', 'Ohit', 'Pon', 'Amang'],
        cloze: [
          // MC10 p. 38, ex. 24
          { sentence: 'Maria na-___ gok koot.', answer: 'amang', options: ['amang', 'ohit', 'pon'], translation: 'Ontem a Maria plantou mandioca.' },
          // SUB p. 11, ex. 33 (os colchetes da oração subordinada tirados)
          { sentence: 'Boroja taso oky tykiri naka-___ õwã.', answer: 'hyryp', options: ['hyryp', 'yryt', 'tat'], translation: 'Quando o homem matou a cobra, a criança chorou.' },
          // MC10 p. 15, ex. 2
          { sentence: 'Na-___ tyka-t õwã.', answer: 'ohit', options: ['ohit', 'amang', 'hyryp'], translation: 'A criança está pescando.' },
        ],
        voice: {
          // ST99 p. 134, ex. 52a–b (Storto grafa “mora”, sem til)
          bot: "Mora i-'y-j ohy?",
          botTranslation: 'Quem vai comer batata-doce?',
          expected: ["Taso naka-'y-j ohy.", "taso naka-'y-j ohy", 'taso'],
          hint: 'Diga que o homem vai comer, pondo “taso” antes do verbo: “Taso naka-\'y-j ohy.”',
        },
        communityPrompt: "Escreva o que alguém fez ontem com uma frase do curso, como “Maria na-amang gok koot.” (ontem a Maria plantou mandioca), e o que alguém vai fazer, como “Taso naka-'y-j ohy.”",
      },
      {
        id: 'ktn-u3-l2',
        title: "So'oot, pyting, sondyp: ver, querer, saber",
        kind: 'licao',
        words: ["So'oot", 'Pyting', 'Sondyp', 'Opi', 'Hit', 'Boet'],
        cloze: [
          // SUB p. 14, ex. 40 (colchetes tirados)
          { sentence: "Y-py-___-yn yn Inácio 'ep opi-ty.", answer: 'sondyp', options: ['sondyp', 'pyting', 'hit'], translation: 'Eu sei que o Inácio cortou a árvore.' },
          // SUB p. 14, ex. 39
          { sentence: 'Y-py-___-yn yn him pisyp Inácio opi-ty.', answer: 'pyting', options: ['pyting', 'sondyp', 'opi'], translation: 'Eu quero que o Inácio corte a carne de caça.' },
          // SR p. 14, ex. 49
          { sentence: 'Taso naka-___ õwã boetety.', answer: 'hit', options: ['hit', 'opi', 'oky'], translation: 'O homem deu colar para a criança.' },
        ],
        voice: {
          // ST99 p. 135, ex. 54a–b
          bot: 'Tikat a-ama-j leite-ty?',
          botTranslation: 'Quando você vai comprar leite?',
          expected: ['Dibm y-ta-ama-j leite-ty.', 'dibm y-ta-ama-j leite-ty', 'dibm'],
          hint: 'Responda que vai comprar amanhã, com “dibm” na frente: “Dibm y-ta-ama-j leite-ty.”',
        },
        communityPrompt: "Escreva o que você viu, quer ou sabe, no molde de Storto: “Y-py-so'oot-yn yn …” (eu vi …), “Y-py-pyting-yn yn …” (eu quero …).",
      },
      {
        id: 'ktn-u3-l3',
        title: 'Prova: ontem e amanhã',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          // ST99 p. 135, ex. 53a–b (Storto grafa “mora-mon”, sem til)
          bot: "Mora-mon taso ti-'y-t?",
          botTranslation: 'O que o homem comeu?',
          expected: ["Ohy a-taka-'y-t taso.", "ohy a-taka-'y-t taso", 'ohy'],
          hint: 'Para responder “o quê?”, a coisa vem primeiro, com “a-taka-”: “Ohy a-taka-\'y-t taso.” (batata-doce, o homem comeu).',
        },
        communityPrompt: 'Escreva duas frases do curso, uma no não futuro e uma no futuro, e marque onde está o “-t” e o “-j”.',
      },
    ],
  },
  {
    id: 'ktn-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: "Morã i'y morã? Quem come quem",
    emoji: '🐒',
    card: {
      id: 'ktn-c4',
      title: 'Gopi Yjxa: a floresta contada pela escola',
      emoji: '🌳',
      // GOPI, créditos (página sem número depois da capa) e pp. 41–89 (cada bicho num triângulo, com
      // quem o come em cima e o que ele come embaixo, apontando as páginas).
      history:
        'Em 2020 saiu o “Gopi Yjxa”, um léxico ilustrado de plantas e animais feito para a escola karitiana. O levantamento das espécies foi de Cizino Dantas Morais Karitiana. Os textos saíram de uma oficina com professores karitiana (Edilene, Marilena, Marinete, Nelson, Vivaldo, Marcelo e Mauro Karitiana), com revisão de Inácio Karitiana, e o livro foi organizado por Lucas Ciola e Ana Müller, da USP. Cada bicho aparece num triângulo: em cima, quem come esse bicho; embaixo, o que ele come.',
      // GOPI p. 90 (Introdução) e p. 90 (Página 4, castanheira).
      culture_tip:
        'O livro abre dizendo que a sabedoria indígena sobre a floresta se chama etnobiologia e que só ela ensina a usar a floresta sem destruir as plantas, os bichos e os peixes. A castanheira é “a comida de Boty” (o criador), e “Karitiana não pode derrubar a castanheira!” (Gopi Yjxa, p. 90).',
      // MC10 p. 44–46 (ty + dêitico: tyka, tyja, tyso, tysyp); SUB p. 3–5 (tykiri, kit, byyk).
      grammar_why:
        'Para dizer o que alguém está fazendo, o karitiana junta ao verbo um auxiliar que mostra também a posição do corpo: “tyka” (em movimento), “tyja” (sentado), “tyso” (em pé) e “tysyp” (deitado). E as orações de “quando”, “antes” e “depois” terminam com o verbo e uma palavrinha: “tykiri”, “kit” e “byyk”.',
      grammar_examples: [
        ["Maria naka'y tykat kinda'o.", 'Maria está comendo fruta, em movimento. (Marques de Carvalho 2010, p. 45)'],
        ["Maria naka'y tyjat kinda'o.", 'Maria está sentada comendo fruta. (Marques de Carvalho 2010, p. 46)'],
        ['I na-aka-t i-pon tyka-t.', 'Ele está caçando. (Storto 2012, “Subordination in Karitiana”, ex. 19)'],
        ['Boroja taso oky tykiri naka-hyryp õwã.', 'Quando o homem matou a cobra, a criança chorou. (Storto 2012, ex. 33)'],
      ],
      character_guide: [
        ['tyka', 'auxiliar: em movimento', "naka'y tykat (está comendo, andando)"],
        ['tyja', 'auxiliar: sentado', "naka'y tyjat (está comendo, sentado)"],
        ['tyso', 'auxiliar: em pé', "naka'y tysot (está comendo, em pé)"],
        ['tysyp', 'auxiliar: deitado (também usado para o plural)', "naka'y tysyp (está comendo, deitado)"],
      ],
    },
    lessons: [
      {
        id: 'ktn-u4-l1',
        title: "Morã i'y morã? Quem come quem",
        kind: 'licao',
        words: ['Irip', 'Mydo', 'Pikom', 'Koboty', 'Sojxa ty', "Kinda'o"],
        cloze: [
          // GOPI p. 28 (tradução do livro, p. 92)
          { sentence: "___, sojxa, tym naka'yt gok.", answer: 'Mydo', options: ['Mydo', 'Irip', 'Pikom'], translation: 'Cotia, queixada e cateto também comem macaxeira.' },
          // GOPI p. 12 (tradução do livro, p. 91)
          { sentence: "Sosy naka 'yt ___ nam.", answer: 'koboty', options: ['koboty', 'kedo', 'iri'], translation: 'O tatu come cupuaçu podre.' },
          // MC10 p. 46, ex. 40b
          { sentence: "Maria naka'y ___ kinda'o.", answer: 'tyjat', options: ['tyjat', 'tysot', 'tykat'], translation: 'Maria está sentada comendo fruta.' },
        ],
        voice: {
          // GOPI p. 36 (“Quem come quem?”, p. 93) e p. 28
          bot: "Morã i'y morã?",
          botTranslation: 'Quem come quem?',
          expected: ["Mydo, sojxa, tym naka'yt gok.", "mydo, sojxa, tym naka'yt gok", "sosy naka 'yt koboty nam", 'mydo'],
          hint: "Diga quem come a macaxeira, com a frase do Gopi Yjxa: “Mydo, sojxa, tym naka'yt gok.”",
        },
        communityPrompt: "Escolha um bicho do Gopi Yjxa e escreva o que ele come, com uma frase do livro, como “Sosy naka 'yt koboty nam.” (o tatu come cupuaçu podre).",
      },
      {
        id: 'ktn-u4-l2',
        title: 'Tihoot aka ano? Onde você mora?',
        kind: 'licao',
        words: ["'Ep", 'Ejepi', 'Pip', 'Saara', 'Iphy', "O'i"],
        cloze: [
          // GOPI p. 32 (“Ese pip”, na água; tradução p. 93)
          { sentence: 'Ese ___.', answer: 'pip', options: ['pip', 'ty', 'kit'], translation: 'Na água.' },
          // GOPI p. 9 (tradução do livro, p. 91)
          { sentence: "Ororo'o tym na akat ___ ti'yt.", answer: "o'i", options: ["o'i", 'irip', 'mydo'], translation: 'A embaúba tem uma fruta que o bicho-preguiça come.' },
          // SUB p. 8, ex. 16
          { sentence: 'I na-oky tysyp ___.', answer: 'saara', options: ['saara', 'iphy', 'pikom'], translation: 'Ele está matando o jacaré.' },
        ],
        voice: {
          // GOPI p. 32 (pergunta e respostas da página; tradução p. 93)
          bot: 'Tihoot aka ano?',
          botTranslation: 'Onde você mora?',
          expected: ['Ese pip.', 'ese pip', 'ep pip', 'ejepi'],
          hint: 'Responda como os bichos da página 32 do Gopi Yjxa: “Ese pip” (na água), “Ep pip” (na árvore) ou “Ejepi” (na terra).',
        },
        communityPrompt: 'Escolha três bichos e diga onde cada um mora, com as respostas do Gopi Yjxa: “Ese pip” (na água), “Ep pip” (na árvore), “Ejepi” (na terra).',
      },
      {
        id: 'ktn-u4-l3',
        title: 'Prova: quem come quem',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          // GOPI p. 37 (“Quem é caça? Quem é caçador?”, p. 93); resposta SUB p. 8, ex. 19
          bot: 'Morã mot him? Morã mot pontidn?',
          botTranslation: 'Quem é caça? Quem é caçador?',
          expected: ['I na-aka-t i-pon tyka-t.', 'i na-aka-t i-pon tyka-t', 'i-pon tyka-t', 'him'],
          hint: 'Diga que ele está caçando: “I na-aka-t i-pon tyka-t.”',
        },
        communityPrompt: 'Escreva uma cadeia de “quem come quem” com frases do Gopi Yjxa: uma fruta, o bicho que come a fruta e quem caça esse bicho.',
      },
    ],
  },
];
