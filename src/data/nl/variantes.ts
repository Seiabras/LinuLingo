import type { LanguageVariant } from '../types';

/**
 * Os dialetos do neerlandês (decisão do dono, 10/10/2026): os Países Baixos (o padrão do curso), a
 * Bélgica (o neerlandês de Flandres, chamado de flamengo) e o Suriname, onde o neerlandês é a língua
 * oficial. Os três seguem a mesma norma escrita, cuidada pela Nederlandse Taalunie. Vocabulário no
 * formato [Países Baixos, dialeto, explicação, nota]. Como o curso ainda vai até o A2, as histórias
 * também são A2.
 *
 * Fontes: Wikipédia em neerlandês e em inglês («Belgisch-Nederlands», «Surinaams-Nederlands»,
 * «Nederlandse Taalunie», «Tussentaal», «Poldernederlands», «Keti Koti», consultadas em 10/10/2026), e
 * Jan Stroop, «Poldernederlands» (1998).
 */
export const VARIANTS_NL: LanguageVariant[] = [
  {
    code: 'nl-NL',
    country: 'NLD',
    kind: 'dialeto',
    speechLocale: 'nl-NL',
    name: 'Neerlandês dos Países Baixos',
    flag: '🇳🇱',
    summary: 'O padrão do curso: o neerlandês dos Países Baixos, com a pronúncia do oeste do país (a Randstad, de Amsterdã a Roterdã).',
    card: {
      id: 'nl-nl-c1',
      title: 'Uma língua, uma norma, três países',
      emoji: '🇳🇱',
      history:
        'O neerlandês é a língua dos Países Baixos, de metade da Bélgica (Flandres) e do Suriname, e a base do africâner da África do Sul. Desde 1980, a ortografia e a gramática são cuidadas pela Nederlandse Taalunie (União da Língua Neerlandesa), formada pelos Países Baixos e pela Bélgica; o Suriname entrou como associado em 2004. Por isso os três países escrevem igual, mas falam diferente: o curso ensina a pronúncia do oeste dos Países Baixos, a da TV de Hilversum.',
      culture_tip:
        'Os neerlandeses são famosos pela franqueza: dizem o que pensam, sem rodeios, e isso não é grosseria. A bicicleta é o transporte de todo mundo, e o aniversário é comemorado em roda, com os convidados dando parabéns a toda a família (“Gefeliciteerd met je zus!”, parabéns pela sua irmã!). No dia do rei, 27 de abril, o país inteiro se veste de laranja.',
      grammar_why:
        'O padrão dos Países Baixos é o que o curso ensina: o “g” arranhado do norte (o “harde g”), o “jij/je” para “você” na conversa, “mobiel” (celular), “koelkast” (geladeira), “leuk” (legal). Na Bélgica e no Suriname, a escrita é a mesma, mas a pronúncia e muitas palavras mudam.',
      grammar_examples: [
        ['Heb jij een mobiel?', 'Você tem celular?'],
        ['Dat is leuk!', 'Que legal!'],
        ['De melk staat in de koelkast.', 'O leite está na geladeira.'],
      ],
      character_guide: null,
    },
  },

  // ───────────────────────────── BÉLGICA ─────────────────────────────
  {
    code: 'nl-BE',
    country: 'BEL',
    kind: 'dialeto',
    speechLocale: 'nl-BE',
    name: 'Neerlandês da Bélgica (flamengo)',
    flag: '🇧🇪',
    summary:
      'O neerlandês de Flandres, a metade norte da Bélgica, chamado de flamengo: a mesma língua escrita dos Países Baixos, com o “g” suave, palavras do francês e o “tussentaal”, a fala do dia a dia entre o padrão e os dialetos.',
    card: {
      id: 'nl-be-c1',
      title: 'Goesting, frigo e gsm',
      emoji: '🍟',
      history:
        'A Bélgica tem três línguas oficiais: o neerlandês, no norte (Flandres), o francês, no sul (Valônia), e o alemão, no leste. Por muito tempo, o francês foi a língua da elite e do governo, e os flamengos lutaram pelo direito de estudar e ser julgados na sua língua; só em 1898 o neerlandês ganhou o mesmo status do francês. Hoje, cerca de 60% dos belgas falam neerlandês. A língua escrita é a mesma dos Países Baixos, mas a fala do dia a dia é o “tussentaal” (língua do meio), uma mistura do padrão com os dialetos de Flandres.',
      culture_tip:
        'As batatas fritas (frieten) são belgas, e não francesas: compram-se num “frituur”, com maionese. O chocolate, os waffles e as centenas de cervejas fazem parte da identidade do país. Os flamengos se cumprimentam e se despedem com o mesmo “dag!”, e “Amai!” é a exclamação de espanto mais típica de Flandres.',
      grammar_why:
        'A gramática escrita é a mesma; a fala muda: (1) no tussentaal, “ge” ou “gij” no lugar de “jij” (você): “Hebt ge dat gezien?”; (2) o diminutivo em “-ke”: “manneke” (homenzinho), onde os Países Baixos dizem “mannetje”; (3) palavras do francês: “frigo” (geladeira), “content” (contente), “ambetant” (chato), “plezant” (legal); (4) palavras próprias: “gsm” (celular), “goesting” (vontade), “schoon” (bonito; nos Países Baixos, “limpo”).',
      grammar_examples: [
        ['Hebt ge goesting in frieten?', 'Você está com vontade de batata frita? (Países Baixos: Heb je zin in patat?)'],
        ['Zet de melk in de frigo.', 'Põe o leite na geladeira. (Países Baixos: koelkast)'],
        ['Ik ben content!', 'Estou contente! (Países Baixos: tevreden, blij)'],
        ['Wat een schoon huis!', 'Que casa bonita! (Países Baixos: mooi)'],
        ['Mijn gsm is kapot.', 'O meu celular quebrou. (Países Baixos: mobiel)'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'O “g” e o “ch” são suaves (a “zachte g”), feitos mais na frente da boca, e não arranhados como no norte dos Países Baixos.',
      'O “w” soa como o “w” do inglês, com os lábios arredondados, e não como um “v” leve.',
      'As vogais longas e os ditongos são mais puros: o “ij” de “mijn” soa perto de “éi”, e não de “ai” como em Amsterdã.',
      'O “r” é muitas vezes vibrado na ponta da língua.',
    ],
    vocab: [
      ['mobiel', 'gsm', 'celular', 'a sigla do sistema de celular, que virou palavra'],
      ['koelkast', 'frigo', 'geladeira', 'do francês “frigo”'],
      ['zin', 'goesting', 'vontade', 'do francês antigo “goust”'],
      ['tevreden', 'content', 'contente', 'do francês'],
      ['leuk', 'plezant', 'legal, agradável', 'do francês “plaisant”'],
      ['vervelend', 'ambetant', 'chato, irritante', 'do francês “embêtant”'],
      ['mooi', 'schoon', 'bonito', 'cuidado: nos Países Baixos, “schoon” é limpo'],
      ['slager', 'beenhouwer', 'açougueiro', 'literalmente “cortador de ossos”'],
      ['stoep', 'voetpad', 'calçada'],
      ['broodje', 'pistolet', 'pãozinho redondo', 'o pão do domingo de manhã'],
      ['jij', 'ge / gij', 'você', 'no tussentaal'],
      ['-tje', '-ke', 'diminutivo', 'manneke, boekske'],
    ],
    stories: [
      {
        id: 'nl-h5',
        variant: 'nl-BE',
        level: 'A2.1',
        cefr: 'A2',
        title: 'Frieten in Antwerpen',
        emoji: '🍟',
        summary: 'Em Antuérpia, o amigo Pieter leva Linu a um frituur e Linu aprende as palavras flamengas: goesting, plezant, content.',
        cultural_context:
          'Na Bélgica, as batatas fritas (frieten) se compram num “frituur”, num cone de papel, com maionese. Em Flandres, o neerlandês do dia a dia tem palavras do francês e do próprio flamengo: “goesting” (vontade), “plezant” (legal), “content” (contente).',
        start: 'start',
        glossary: [
          ['frieten', 'batatas fritas'],
          ['frituur', 'barraca de batata frita'],
          ['goesting', 'vontade'],
          ['plezant', 'legal, agradável'],
          ['content', 'contente'],
          ['amai!', 'nossa!'],
        ],
        nodes: {
          start: {
            emoji: '🏙️',
            text: 'Linu is in Antwerpen met zijn vriend Pieter. Pieter vraagt: “Hebt ge goesting in frieten?”',
            translation: 'Linu está em Antuérpia com o amigo Pieter. Pieter pergunta: “Você está com vontade de batata frita?”',
            choices: [
              { text: '“Goesting? Wat is dat?”', translation: '“Goesting? O que é isso?”', next: 'goesting' },
              {
                text: '“Nee, ik heb geen geld.”',
                translation: '“Não, eu não tenho dinheiro.”',
                wrong: 'Pieter não perguntou de dinheiro: “goesting” é “vontade”, como “zin” nos Países Baixos. Ele quer saber se você quer batata frita.',
              },
            ],
          },
          goesting: {
            emoji: '😄',
            text: 'Pieter lacht: “Goesting is zin! In Vlaanderen zeggen we goesting.” Ze gaan naar een frituur. Pieter bestelt: “Twee grote frieten met mayonaise, alstublieft.”',
            translation: 'Pieter ri: “Goesting é vontade! Em Flandres a gente diz goesting.” Eles vão a um frituur. Pieter pede: “Duas batatas fritas grandes com maionese, por favor.”',
            choices: [
              { text: 'Linu eet de frieten.', translation: 'Linu come as batatas fritas.', next: 'come' },
            ],
          },
          come: {
            emoji: '🍟',
            text: '“Amai, die zijn lekker!”, zegt Linu. Pieter is blij: “Zijt ge content?”',
            translation: '“Nossa, que gostosas!”, diz Linu. Pieter fica feliz: “Você está contente?”',
            choices: [
              { text: '“Ja, ik ben heel content! Dat is plezant!”', translation: '“Sim, estou muito contente! Isso é muito legal!”', next: 'final_bom' },
            ],
          },
          final_bom: {
            emoji: '🇧🇪',
            text: 'Pieter lacht: “Amai, ge spreekt al Vlaams!” Ze lopen samen door de oude stad.',
            translation: 'Pieter ri: “Nossa, você já fala flamengo!” Eles passeiam juntos pela cidade velha.',
            ending: {
              tone: 'bom',
              title: 'Al Vlaams!',
              message: 'Você aprendeu as palavras de Flandres: goesting, frieten, content, plezant, amai e o “ge” de “você”.',
            },
          },
        },
      },
      {
        id: 'nl-h6',
        variant: 'nl-BE',
        level: 'A2.2',
        cefr: 'A2',
        title: 'Schoon of proper?',
        emoji: '🏠',
        summary: 'Em Gante, Linu ajuda a amiga Lien a arrumar o apartamento e se confunde com “schoon”, que em Flandres quer dizer “bonito”.',
        cultural_context:
          'Em Flandres, “schoon” quer dizer “bonito”, como o alemão “schön”; nos Países Baixos, “schoon” é “limpo”, e “bonito” é “mooi”. Para “limpo”, os flamengos dizem “proper”.',
        start: 'start',
        glossary: [
          ['schoon', 'bonito (em Flandres); limpo (nos Países Baixos)'],
          ['proper', 'limpo (em Flandres)'],
          ['frigo', 'geladeira'],
          ['gsm', 'celular'],
        ],
        nodes: {
          start: {
            emoji: '🧹',
            text: 'Linu helpt zijn vriendin Lien in Gent. Haar moeder komt op bezoek. Lien zegt: “Het appartement moet proper zijn!”',
            translation: 'Linu ajuda a amiga Lien em Gante. A mãe dela vem visitar. Lien diz: “O apartamento tem que estar limpo!”',
            choices: [
              { text: 'Linu poetst de keuken en de frigo.', translation: 'Linu limpa a cozinha e a geladeira.', next: 'mae' },
            ],
          },
          mae: {
            emoji: '👩',
            text: 'De moeder komt binnen en zegt: “Amai, wat een schoon appartement!” Linu kijkt naar de keuken: “Ja, ik heb alles proper gemaakt!”',
            translation: 'A mãe entra e diz: “Nossa, que apartamento bonito!” Linu olha para a cozinha: “Sim, eu deixei tudo limpo!”',
            choices: [
              {
                text: 'Lien legt uit: “Schoon betekent hier mooi!”',
                translation: 'Lien explica: “Aqui schoon quer dizer bonito!”',
                next: 'final_bom',
              },
              {
                text: 'Linu denkt dat de moeder over de schoonmaak praat.',
                translation: 'Linu acha que a mãe está falando da limpeza.',
                wrong: 'Em Flandres, “schoon” é “bonito” (nos Países Baixos, “mooi”). A mãe elogiou o apartamento, não a faxina; “limpo” em Flandres é “proper”.',
              },
            ],
          },
          final_bom: {
            emoji: '😄',
            text: 'Iedereen lacht. De moeder zegt: “Het is schoon én proper. Merci, Linu!”',
            translation: 'Todo mundo ri. A mãe diz: “Está bonito e limpo. Obrigada, Linu!”',
            ending: {
              tone: 'bom',
              title: 'Schoon en proper',
              message: 'Você aprendeu o falso amigo entre Flandres e os Países Baixos: “schoon” (bonito) × “proper” (limpo), e o “merci” belga.',
            },
          },
        },
      },
    ],
  },

  // ───────────────────────────── SURINAME ─────────────────────────────
  {
    code: 'nl-SR',
    country: 'SUR',
    kind: 'dialeto',
    speechLocale: 'nl-NL',
    name: 'Neerlandês do Suriname',
    flag: '🇸🇷',
    summary:
      'O neerlandês do Suriname, vizinho do Brasil, onde é a língua oficial, da escola e do governo, convivendo com o sranan tongo, o hindustâni, o javanês e muitas outras línguas. Tem palavras do sranan e do português: switi, brada, sabi.',
    card: {
      id: 'nl-sr-c1',
      title: 'Fa waka? O neerlandês da América do Sul',
      emoji: '🇸🇷',
      history:
        'O Suriname foi colônia neerlandesa de 1667 até a independência, em 1975. Africanos escravizados, e depois trabalhadores contratados da Índia, de Java e da China, formaram um dos países mais diversos do mundo, com mais de vinte línguas. O neerlandês é a língua oficial e a da escola, e a maioria dos surinameses o fala, muitos como língua de casa. A língua de contato de todos é o sranan tongo, um crioulo de base inglesa com muitas palavras do neerlandês e do português, herança dos judeus sefarditas e da proximidade com o Brasil. Desde 2004, o Suriname faz parte da Nederlandse Taalunie.',
      culture_tip:
        'O 1º de julho é o Keti Koti (“correntes cortadas”, em sranan), a festa da abolição da escravidão, de 1863, celebrada no Suriname e nos Países Baixos. A comida mistura tudo: o roti indiano, o bami e o nasi javaneses e o pom, um assado de raiz de taioba com frango, prato de festa. E o cumprimento de todo dia, em sranan, é “Fa waka?” (como vai?).',
      grammar_why:
        'A escrita é a dos Países Baixos; a fala tem marcas próprias: (1) palavras do sranan tongo no neerlandês do dia a dia: “switi” (doce, gostoso), “brada” (irmão, amigo), “mati” (amigo); (2) palavras que o sranan pegou do português: “sabi” (saber), “pikin” (criança, de “pequeno”); (3) palavras locais da comida e da vida: “pom”, “roti”, “bakkeljauw” (bacalhau); (4) a troca entre o neerlandês e o sranan no meio da frase.',
      grammar_examples: [
        ['Fa waka, brada?', 'Como vai, irmão? (sranan)'],
        ['Dat eten is echt switi!', 'Essa comida é muito gostosa! (Países Baixos: lekker)'],
        ['Mijn mati komt vanavond.', 'O meu amigo vem hoje à noite. (Países Baixos: vriend)'],
        ['Op Keti Koti eten we samen.', 'No Keti Koti a gente come junto.'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'O “g” é suave, como em Flandres e no sul dos Países Baixos, e não arranhado.',
      'O “r” é vibrado na ponta da língua.',
      'As vogais são mais puras e o ritmo lembra o do sranan tongo.',
      'Muitos falantes têm outra língua de casa (sranan, hindustâni, javanês) e levam a melodia dela para o neerlandês.',
    ],
    vocab: [
      ['lekker', 'switi', 'gostoso, doce', 'do sranan, do inglês “sweet”'],
      ['broer, vriend', 'brada', 'irmão, amigo', 'do sranan'],
      ['vriend', 'mati', 'amigo', 'do sranan'],
      ['weten', 'sabi', 'saber', 'do português “saber”, via sranan'],
      ['kind', 'pikin', 'criança', 'do português “pequeno”, via sranan'],
      ['hoe gaat het?', 'fa waka?', 'como vai?', 'sranan'],
      ['kabeljauw', 'bakkeljauw', 'bacalhau', 'o bacalhau salgado da cozinha surinamesa'],
    ],
    stories: [
      {
        id: 'nl-h7',
        variant: 'nl-SR',
        level: 'A2.1',
        cefr: 'A2',
        title: 'Fa waka in Paramaribo',
        emoji: '🌴',
        summary: 'Em Paramaribo, a amiga Sharon leva Linu ao mercado central, onde se fala neerlandês, sranan e mais um monte de línguas.',
        cultural_context:
          'Paramaribo, a capital do Suriname, tem o centro histórico de madeira tombado pela UNESCO. No mercado central se ouvem neerlandês, sranan tongo, hindustâni e javanês. O cumprimento de todo dia é “Fa waka?” (como vai?).',
        start: 'start',
        glossary: [
          ['fa waka?', 'como vai? (sranan)'],
          ['switi', 'gostoso, doce'],
          ['brada', 'irmão, amigo'],
          ['roti', 'pão indiano com recheio de frango e batata'],
        ],
        nodes: {
          start: {
            emoji: '🌴',
            text: 'Linu is in Paramaribo. Zijn vriendin Sharon zegt: “Fa waka, Linu?” Linu begrijpt het niet.',
            translation: 'Linu está em Paramaribo. A amiga dele, Sharon, diz: “Fa waka, Linu?” Linu não entende.',
            choices: [
              { text: '“Sorry, wat betekent fa waka?”', translation: '“Desculpe, o que quer dizer fa waka?”', next: 'fawaka' },
            ],
          },
          fawaka: {
            emoji: '😄',
            text: 'Sharon lacht: “Dat is Sranantongo. Het betekent: hoe gaat het?” Ze gaan naar de markt. Een man roept: “Brada, kom roti eten!”',
            translation: 'Sharon ri: “É sranan tongo. Quer dizer: como vai?” Eles vão ao mercado. Um homem chama: “Irmão, vem comer roti!”',
            choices: [
              { text: 'Linu koopt een roti.', translation: 'Linu compra um roti.', next: 'roti' },
              {
                text: 'Linu denkt dat de man zijn broer is.',
                translation: 'Linu acha que o homem é irmão dele.',
                wrong: '“Brada” (do sranan) é o jeito amigável de chamar alguém, como “irmão” ou “parceiro” no Brasil.',
              },
            ],
          },
          roti: {
            emoji: '🫓',
            text: 'Linu eet de roti met kip en aardappel. “Dit is heel lekker!”, zegt hij. Sharon zegt: “Hier zeggen we: het is switi!”',
            translation: 'Linu come o roti com frango e batata. “Isso é muito gostoso!”, diz ele. Sharon diz: “Aqui a gente diz: é switi!”',
            choices: [
              { text: '“Switi! Fa waka, brada!”', translation: '“Switi! Como vai, irmão!”', next: 'final_bom' },
            ],
          },
          final_bom: {
            emoji: '🇸🇷',
            text: 'De man van de roti lacht: “Mi de bun! Je spreekt al Surinaams!”',
            translation: 'O homem do roti ri: “Eu vou bem! Você já fala como surinamês!”',
            ending: {
              tone: 'bom',
              title: 'Al Surinaams!',
              message: 'Você aprendeu o neerlandês do Suriname e o sranan do dia a dia: fa waka, brada, switi e roti.',
            },
          },
        },
      },
      {
        id: 'nl-h8',
        variant: 'nl-SR',
        level: 'A2.2',
        cefr: 'A2',
        title: 'Keti Koti',
        emoji: '⛓️',
        summary: 'No 1º de julho, Linu vai com a família da amiga Sharon à festa do Keti Koti e aprende o que se celebra nesse dia.',
        cultural_context:
          'O Keti Koti (“correntes cortadas”) é a festa de 1º de julho que lembra a abolição da escravidão no Suriname e nas colônias neerlandesas do Caribe, em 1863. Muitos ainda tiveram de trabalhar mais dez anos nas plantações, até 1873. A festa tem música, roupas tradicionais e comida.',
        start: 'start',
        glossary: [
          ['Keti Koti', 'correntes cortadas: a festa da abolição'],
          ['de slavernij', 'a escravidão'],
          ['vieren', 'comemorar'],
          ['pikin', 'criança (sranan)'],
        ],
        nodes: {
          start: {
            emoji: '🎉',
            text: 'Het is 1 juli. Sharon zegt: “Vandaag is het Keti Koti. We vieren het einde van de slavernij.”',
            translation: 'É 1º de julho. Sharon diz: “Hoje é Keti Koti. A gente comemora o fim da escravidão.”',
            choices: [
              { text: '“Wat betekent Keti Koti?”', translation: '“O que quer dizer Keti Koti?”', next: 'sentido' },
            ],
          },
          sentido: {
            emoji: '⛓️',
            text: 'Sharons oma vertelt: “Keti Koti betekent: de kettingen zijn gebroken. In 1863 was de slavernij voorbij.”',
            translation: 'A avó da Sharon conta: “Keti Koti quer dizer: as correntes foram quebradas. Em 1863 a escravidão acabou.”',
            choices: [
              {
                text: '“Dus het is een feest van vrijheid.”',
                translation: '“Então é uma festa da liberdade.”',
                next: 'festa',
              },
              {
                text: '“Dus het is een feest van de koning.”',
                translation: '“Então é uma festa do rei.”',
                wrong: 'O Keti Koti não é festa do rei: é a festa da liberdade, que lembra o fim da escravidão, em 1863.',
              },
            ],
          },
          festa: {
            emoji: '💃',
            text: 'Op het plein is er muziek en dans. De pikin dansen met hun oma’s. Sharon geeft Linu een bord met pom: “Proef, het is switi!”',
            translation: 'Na praça tem música e dança. As crianças dançam com as avós. Sharon dá ao Linu um prato de pom: “Prova, é gostoso!”',
            choices: [
              { text: 'Linu eet en danst mee.', translation: 'Linu come e dança junto.', next: 'final_bom' },
            ],
          },
          final_bom: {
            emoji: '🇸🇷',
            text: 'Sharons oma glimlacht: “Keti Koti is voor iedereen. Fijn dat je er bent, mati!”',
            translation: 'A avó da Sharon sorri: “O Keti Koti é para todo mundo. Que bom que você está aqui, amigo!”',
            ending: {
              tone: 'bom',
              title: 'Keti Koti',
              message: 'Você conheceu a festa da abolição no Suriname e aprendeu “de slavernij”, “vieren”, “pikin”, “mati” e o pom.',
            },
          },
        },
      },
    ],
  },
];
