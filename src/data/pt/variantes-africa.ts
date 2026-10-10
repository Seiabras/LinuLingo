import type { LanguageVariant } from '../types';
import { ipaDe } from './tracos';

/**
 * Os dialetos do português na África (decisão do dono, 09/10/2026: cada país é um dialeto completo,
 * com cartão, pronúncia, vocabulário e duas histórias). Todos seguem a norma escrita de Portugal;
 * o vocabulário vem no formato [Portugal, o país, explicação, nota]. Nas histórias, o texto está no
 * português de lá e a tradução no do Brasil.
 *
 * Fontes: Wikipédia em português («Português angolano», «Português moçambicano», «Português
 * cabo-verdiano», «Português guineense», «Português são-tomense», consultadas em 09/10/2026) e o que
 * elas citam: Amélia Mingas e Ivo Castro (Angola); Timbane (2014) e o censo de 2017 do INE
 * (Moçambique); Santiago e Agostinho (2020, «A Cor das Letras») para São Tomé.
 */
export const VARIANTS_PT_AFRICA: LanguageVariant[] = [
  // ───────────────────────────── ANGOLA ─────────────────────────────
  {
    code: 'pt-AO',
    country: 'AGO',
    kind: 'dialeto',
    speechLocale: 'pt-PT',
    ipa: ipaDe('pt-AO', 'PT'),
    name: 'Português de Angola',
    flag: '🇦🇴',
    summary:
      'O segundo país com mais falantes de português do mundo, depois do Brasil: cerca de 7 em cada 10 angolanos falam a língua, e quase metade a tem como língua materna. Vogais menos engolidas que em Lisboa, ritmo cantado e muitas palavras do quimbundo.',
    card: {
      id: 'pt-ao-c1',
      title: 'Kamba, o português também é angolano',
      emoji: '🇦🇴',
      history:
        'Os portugueses chegaram à costa de Angola no século XV, e Luanda foi fundada em 1576. Durante muito tempo, porém, a língua de Luanda foi o quimbundo: entre 1620 e 1750 ele era a língua da maior parte das casas da cidade, até da elite que trabalhava para a administração portuguesa. O português só se tornou a língua mais falada nas cidades no século XX. Depois da independência, em 1975, a longa guerra civil (até 2002) levou centenas de milhares de pessoas do interior para as cidades, e o português virou a língua comum entre gente de origens diferentes. Hoje é a língua materna de cerca de 45% dos angolanos, e a de quase todos os jovens de Luanda.',
      culture_tip:
        'Em Angola, o respeito aos mais velhos está até no vocabulário: “kota” é a pessoa mais velha, e quem fala com um kota baixa o tom e escolhe as palavras. Entre amigos, o tratamento é “kamba” (amigo, do quimbundo). A gíria de Luanda corre o mundo pela música: o semba, a kizomba e o kuduro levaram “bué” (muito) e “bazar” (ir embora) até a fala dos jovens de Lisboa.',
      grammar_why:
        'O professor Ivo Castro, da Universidade de Lisboa, escreveu em 2006 que, além das normas europeia e brasileira, há duas variantes “em formação”: a angolana e a moçambicana. A angolana já tem marcas claras na fala: o pronome antes do verbo, como no Brasil (“Me dá isso”); o “lhe” como objeto direto (“Lhe vi ontem”, onde a norma pede “Vi-o ontem”); e a preposição “em” com verbos de movimento (“Vou na escola”). A linguista angolana Amélia Mingas chamou essa nova realidade de “português de Angola” ou “angolano”. Na escrita, a norma ainda é a de Portugal, com a ortografia de 1945, e nomes da terra se escrevem muitas vezes com k, w e y: Kuito, Kwanza, Soyo.',
      grammar_examples: [
        ['Me dá a jinguba, se faz favor.', 'Me dá o amendoim, por favor.'],
        ['Lhe vi ontem no musseque.', 'Eu o vi ontem no bairro.'],
        ['Vou na escola de machimbombo.', 'Vou para a escola de ônibus.'],
        ['O kota está a descansar, fala baixo.', 'O mais velho está descansando, fale baixo.'],
        ['Já tomaste o mata-bicho?', 'Você já tomou o café da manhã?'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'Vogais átonas menos reduzidas que em Lisboa: “telefone” soa [teleˈfɔne], com todas as sílabas, mais perto do Brasil que de Portugal.',
      'Muitos sons abertos em Portugal e no Brasil são fechados em Angola: “troféu” soa “trofêu”.',
      'A fala é mais cantada e arrastada, com o ritmo marcado sílaba a sílaba, por influência das línguas bantas, como o quimbundo, o umbundo e o quicongo.',
      'O “s” no fim da sílaba é chiado, como em Portugal: “festa” [ˈfɛʃtɐ].',
    ],
    vocab: [
      ['amendoim', 'jinguba', 'amendoim', 'do quimbundo'],
      ['pequeno-almoço', 'mata-bicho', 'café da manhã'],
      ['autocarro', 'machimbombo', 'ônibus', 'também em Moçambique'],
      ['carrinha de passageiros', 'candongueiro', 'van de transporte coletivo', 'as vans azuis e brancas de Luanda'],
      ['bairro de lata', 'musseque', 'favela, bairro pobre da periferia'],
      ['frigorífico', 'geleira', 'geladeira'],
      ['piripíri', 'jindungo', 'pimenta-malagueta'],
      ['chupa-chupa', 'sambapito', 'pirulito'],
      ['pastilha elástica', 'chuinga', 'chiclete', 'do inglês “chewing gum”'],
      ['rapariga', 'mboa', 'moça'],
      ['amigo', 'kamba', 'amigo', 'do quimbundo'],
      ['pessoa mais velha', 'kota', 'pessoa mais velha, digna de respeito'],
      ['ir embora', 'bazar', 'ir embora', 'passou para a gíria de Portugal'],
      ['muito', 'bué', 'muito', 'também usado em Lisboa'],
      ['dinheiro', 'kumbu', 'dinheiro'],
      ['coisa', 'mambo', 'coisa, assunto'],
      ['casa', 'cubico', 'casa', 'gíria de Luanda'],
    ],
    stories: [
      {
        id: 'pt-ao-h1',
        variant: 'pt-AO',
        level: 'A2.2',
        cefr: 'A2',
        title: 'Candongueiro até à Ilha',
        emoji: '🌅',
        summary: 'Em Luanda, a amiga Weza leva o Linu para tomar o mata-bicho, pegar um candongueiro e passear pela Marginal até a Ilha.',
        cultural_context:
          'Luanda, a capital de Angola, foi fundada em 1576 à beira de uma baía. A Marginal, a avenida da baía, liga o centro à Ilha de Luanda, uma língua de areia cheia de restaurantes de peixe. No alto da cidade fica a Fortaleza de São Miguel, do século XVI. Os candongueiros, vans azuis e brancas, são o transporte do dia a dia.',
        start: 'start',
        glossary: [
          ['mata-bicho', 'café da manhã'],
          ['kamba', 'amigo'],
          ['candongueiro', 'van de transporte coletivo'],
          ['bué', 'muito'],
          ['jinguba', 'amendoim'],
          ['kota', 'pessoa mais velha'],
          ['bazar', 'ir embora'],
        ],
        nodes: {
          start: {
            emoji: '🌅',
            text: 'Linu acorda em Luanda. Lá fora já faz bué de calor. A Weza bate à porta: “Bom dia, kamba! Já tomaste o mata-bicho? Vamos à casa da minha avó, ela fez pão com manteiga e café.”',
            translation: 'Linu acorda em Luanda. Lá fora já faz muito calor. A Weza bate na porta: “Bom dia, amigo! Você já tomou café da manhã? Vamos à casa da minha avó, ela fez pão com manteiga e café.”',
            choices: [
              { text: '“Vamos! Estou com bué de fome.”', translation: '“Vamos! Estou com muita fome.”', next: 'avo' },
              {
                text: 'Linu acha que mata-bicho é um remédio contra insetos.',
                translation: 'Linu acha que “mata-bicho” é um remédio contra insetos.',
                wrong: 'Em Angola, “mata-bicho” é o café da manhã, a primeira refeição do dia. A Weza está convidando o Linu para comer!',
              },
            ],
          },
          avo: {
            emoji: '☕',
            text: 'A avó da Weza é uma kota simpática. Serve café, pão e um pratinho de jinguba torrada. “Come, meu filho. Em Luanda ninguém sai de casa com a barriga vazia.” Linu agradece com respeito.',
            translation: 'A avó da Weza é uma senhora simpática. Serve café, pão e um pratinho de amendoim torrado. “Coma, meu filho. Em Luanda ninguém sai de casa de barriga vazia.” Linu agradece com respeito.',
            choices: [{ text: 'Depois do mata-bicho, saem para passear.', translation: 'Depois do café da manhã, saem para passear.', next: 'rua' }],
          },
          rua: {
            emoji: '🚐',
            text: 'Na rua, passa um candongueiro azul e branco. O cobrador grita o destino pela janela: “Marginal! Ilha!” A Weza levanta a mão. “Vamos nele, é mais rápido que ir a pé.”',
            translation: 'Na rua, passa uma van azul e branca. O cobrador grita o destino pela janela: “Marginal! Ilha!” A Weza levanta a mão. “Vamos nela, é mais rápido do que ir a pé.”',
            choices: [
              { text: 'Entram no candongueiro.', translation: 'Entram na van.', next: 'marginal' },
              { text: 'Linu prefere ir a pé, para ver a cidade.', translation: 'Linu prefere ir a pé, para ver a cidade.', next: 'pe' },
            ],
          },
          pe: {
            emoji: '🚶',
            text: 'Os dois andam pela baixa de Luanda. Passam por prédios antigos e sobem até à Fortaleza de São Miguel, de onde se vê toda a baía. “Aqui tudo começou, há mais de quatrocentos anos”, conta a Weza.',
            translation: 'Os dois andam pelo centro de Luanda. Passam por prédios antigos e sobem até a Fortaleza de São Miguel, de onde se vê a baía inteira. “Aqui tudo começou, há mais de quatrocentos anos”, conta a Weza.',
            choices: [{ text: 'Descem até à Marginal.', translation: 'Descem até a Marginal.', next: 'marginal' }],
          },
          marginal: {
            emoji: '🌴',
            text: 'Na Marginal sopra um vento fresco do mar. Há gente a correr, vendedores de água gelada e palmeiras ao longo da baía. Ao fundo, a Ilha de Luanda. “Lá comemos peixe grelhado”, diz a Weza.',
            translation: 'Na Marginal sopra um vento fresco do mar. Tem gente correndo, vendedores de água gelada e palmeiras ao longo da baía. No fundo, a Ilha de Luanda. “Lá a gente come peixe grelhado”, diz a Weza.',
            choices: [
              { text: '“Vamos à Ilha!”', translation: '“Vamos para a Ilha!”', next: 'final_ilha' },
              { text: 'Linu está cansado e quer voltar para casa.', translation: 'Linu está cansado e quer voltar para casa.', next: 'final_casa' },
              {
                text: 'Linu acha que a Ilha fica do outro lado do oceano.',
                translation: 'Linu acha que a Ilha fica do outro lado do oceano.',
                wrong: 'A Ilha de Luanda fica ali mesmo, ligada à cidade: é uma faixa de areia na frente da baía. Dá para ir de carro ou de candongueiro!',
              },
            ],
          },
          final_ilha: {
            emoji: '🐟',
            text: 'Na Ilha, comem peixe grelhado com funge à beira-mar. Ao fim da tarde, a Weza diz: “Agora vamos bazar, a minha avó está à nossa espera para o jantar.” Linu sorri: já fala um bocadinho de angolano.',
            translation: 'Na Ilha, comem peixe grelhado com funge na beira do mar. No fim da tarde, a Weza diz: “Agora vamos embora, minha avó está esperando a gente para o jantar.” Linu sorri: já fala um pouquinho de angolano.',
            ending: {
              tone: 'bom',
              title: 'Um dia em Luanda',
              message: 'Você aprendeu o “mata-bicho”, o “candongueiro”, o “kamba” e o “bazar”: palavras de Angola que nem o Brasil nem Portugal usam do mesmo jeito.',
            },
          },
          final_casa: {
            emoji: '🏠',
            text: 'Os dois voltam para a casa da avó. O calor cansou o pinguim. A kota ri: “Os pinguins são do frio, meu filho. Amanhã vão à Ilha logo de manhãzinha.”',
            translation: 'Os dois voltam para a casa da avó. O calor cansou o pinguim. A senhora ri: “Pinguim é bicho do frio, meu filho. Amanhã vocês vão para a Ilha logo cedinho.”',
            ending: {
              tone: 'neutro',
              title: 'Calor de pinguim',
              message: 'O passeio ficou pela metade, mas a Ilha de Luanda continua lá, esperando o Linu.',
            },
          },
        },
      },
      {
        id: 'pt-ao-h2',
        variant: 'pt-AO',
        level: 'B1.2',
        cefr: 'B1',
        title: 'Muamba ao domingo',
        emoji: '🍲',
        summary: 'No domingo, a família da Weza prepara muamba de galinha com funge. O avô conta histórias, e à noite toca semba na rádio.',
        cultural_context:
          'A muamba de galinha, cozida com óleo de palma e quiabo, é um dos pratos mais conhecidos de Angola, servida com funge, uma papa firme de farinha de mandioca ou de milho. O semba, ritmo urbano de Luanda dos anos 1950 e 1960, é considerado o pai da kizomba. Na mesa angolana, os mais velhos são servidos primeiro.',
        start: 'start',
        glossary: [
          ['muamba', 'ensopado de galinha com óleo de palma'],
          ['funge', 'papa de farinha de mandioca ou de milho'],
          ['jindungo', 'pimenta-malagueta'],
          ['kota', 'pessoa mais velha'],
          ['mambo', 'coisa, assunto'],
          ['geleira', 'geladeira'],
        ],
        nodes: {
          start: {
            emoji: '🍲',
            text: 'Domingo é dia de família. Na cozinha, a mãe da Weza mexe a panela da muamba. “Linu, vai à geleira buscar a garrafa de água, se faz favor. E não toques no jindungo, que arde bué!”',
            translation: 'Domingo é dia de família. Na cozinha, a mãe da Weza mexe a panela da muamba. “Linu, vá à geladeira buscar a garrafa de água, por favor. E não mexa na pimenta, que arde muito!”',
            choices: [
              { text: 'Linu vai buscar a água à geleira.', translation: 'Linu vai buscar a água na geladeira.', next: 'mesa' },
              {
                text: 'Linu procura uma geleira de verdade, cheia de gelo, no quintal.',
                translation: 'Linu procura uma geleira de verdade, cheia de gelo, no quintal.',
                wrong: 'Em Angola, “geleira” é a geladeira da cozinha. A água está ali dentro!',
              },
            ],
          },
          mesa: {
            emoji: '🪑',
            text: 'A família senta-se à mesa. Primeiro serve-se o avô, depois a avó, e só então os mais novos. O avô explica: “Aqui os kotas comem primeiro. É respeito, não é pressa.” A Weza mostra ao Linu como fazer uma bolinha de funge com a mão.',
            translation: 'A família se senta à mesa. Primeiro se serve o avô, depois a avó, e só então os mais novos. O avô explica: “Aqui os mais velhos comem primeiro. É respeito, não é pressa.” A Weza mostra ao Linu como fazer uma bolinha de funge com a mão.',
            choices: [
              { text: 'Linu experimenta o funge com o molho da muamba.', translation: 'Linu prova o funge com o molho da muamba.', next: 'historia' },
              { text: 'Linu pede só a galinha, sem funge.', translation: 'Linu pede só a galinha, sem funge.', next: 'sem_funge' },
            ],
          },
          sem_funge: {
            emoji: '🤔',
            text: 'A mãe ri: “Muamba sem funge é como semba sem guitarra, Linu!” Linu experimenta e muda de ideias: o funge não tem muito sabor sozinho, mas com o molho fica uma maravilha.',
            translation: 'A mãe ri: “Muamba sem funge é como semba sem violão, Linu!” Linu prova e muda de ideia: o funge não tem muito gosto sozinho, mas com o molho fica uma maravilha.',
            choices: [{ text: 'Continuam a almoçar.', translation: 'Continuam almoçando.', next: 'historia' }],
          },
          historia: {
            emoji: '📻',
            text: 'Depois do almoço, o avô liga o rádio. “Este mambo aqui é semba, Linu. Quando eu era jovem, em Luanda, dançávamos isto nos bairros todos os fins de semana. Hoje os miúdos dançam kizomba, mas a kizomba nasceu do semba.”',
            translation: 'Depois do almoço, o avô liga o rádio. “Isso aqui é semba, Linu. Quando eu era jovem, em Luanda, a gente dançava isso nos bairros todo fim de semana. Hoje a criançada dança kizomba, mas a kizomba nasceu do semba.”',
            choices: [
              { text: 'Linu pede ao avô para lhe ensinar a dançar.', translation: 'Linu pede ao avô para ensiná-lo a dançar.', next: 'final_danca' },
              { text: 'Linu prefere ouvir as histórias do avô.', translation: 'Linu prefere ouvir as histórias do avô.', next: 'final_historias' },
              {
                text: 'Linu conclui que a kizomba é mais antiga que o semba.',
                translation: 'Linu conclui que a kizomba é mais antiga que o semba.',
                wrong: 'O avô disse o contrário: a kizomba nasceu do semba. O semba veio antes!',
              },
            ],
          },
          final_danca: {
            emoji: '💃',
            text: 'O avô levanta-se devagar e mostra os passos. O Linu tropeça, mas a família inteira bate palmas. “Kamba, já és meio angolano!”, grita a Weza.',
            translation: 'O avô se levanta devagar e mostra os passos. O Linu tropeça, mas a família inteira bate palmas. “Amigo, você já é meio angolano!”, grita a Weza.',
            ending: {
              tone: 'bom',
              title: 'Semba no domingo',
              message: 'Você acompanhou um domingo angolano: o respeito aos kotas, a muamba com funge e o semba, avô da kizomba.',
            },
          },
          final_historias: {
            emoji: '🌙',
            text: 'O avô conta histórias da Luanda antiga até a noite chegar. Linu ouve tudo com atenção. “Volta no próximo domingo”, diz o avô, “que ainda tenho bué de histórias.”',
            translation: 'O avô conta histórias da Luanda antiga até a noite chegar. Linu ouve tudo com atenção. “Volte no próximo domingo”, diz o avô, “que eu ainda tenho muita história.”',
            ending: {
              tone: 'bom',
              title: 'As histórias do kota',
              message: 'Ouvir os mais velhos é uma das coisas mais importantes em Angola. E o Linu ainda aprendeu “bué” e “mambo”.',
            },
          },
        },
      },
    ],
  },

  // ───────────────────────────── MOÇAMBIQUE ─────────────────────────────
  {
    code: 'pt-MZ',
    country: 'MOZ',
    kind: 'dialeto',
    speechLocale: 'pt-PT',
    ipa: ipaDe('pt-MZ', 'PT'),
    name: 'Português de Moçambique',
    flag: '🇲🇿',
    summary:
      'A única língua oficial de Moçambique, mas a materna de só 1 em cada 6 moçambicanos: a maioria fala em casa uma das dezenas de línguas bantas. O “e” final soa “i”, o “r” final cai e há palavras novas, como “machamba” e “desconseguir”.',
    card: {
      id: 'pt-mz-c1',
      title: 'Maningue português',
      emoji: '🇲🇿',
      history:
        'Antes da independência, em 1975, o português de Portugal era a única norma aceita, e quem se afastava dela era desprezado. Depois, palavras das línguas locais entraram com força no português moçambicano. O português é a única língua oficial (artigo 5.º da Constituição de 1990), usado pelo Estado, pelos tribunais e pela imprensa, mas no censo de 2017 só 47% da população o falava e cerca de 17% o tinha como língua materna. A língua materna mais falada é o macua (emakhuwa), seguida do changana e do lomué. Entre os jovens das cidades, sobretudo no Sul, o português avança depressa. É a língua de escritores como Mia Couto e José Craveirinha, os dois premiados com o Prémio Camões.',
      culture_tip:
        'Em Moçambique, idade é posto: “madala” é o velho, a pessoa de respeito, e é a ela que se cumprimenta primeiro. Muita gente fala duas, três ou quatro línguas, e o português da rua mistura palavras do changana, do inglês dos vizinhos (África do Sul, Zimbabué) e do português de Portugal. Para não errar: “bichar” é fazer fila, e não tem nada de feio.',
      grammar_why:
        'O linguista Alexandre Timbane (2014) descreve uma variedade própria em uso, com palavras criadas no país. Muitas são verbos novos: “desconseguir” (não conseguir), “depressar” (ir depressa), “cronicar” (escrever crônicas), “bichar” (fazer fila). Outras mudaram de sentido: “estrutura” é a autoridade, o responsável do governo; “situação” é um problema ou uma crise. A professora Perpétua Gonçalves, da Universidade Eduardo Mondlane, lembra que ainda é cedo para fixar uma norma moçambicana: na escrita, vale a de Portugal.',
      grammar_examples: [
        ['Desconsegui apanhar o chapa.', 'Não consegui pegar a van.'],
        ['Temos de bichar no banco.', 'A gente tem que fazer fila no banco.'],
        ['Agorinha mesmo cheguei da machamba.', 'Acabei de chegar da roça.'],
        ['Acordei com uma babalaza.', 'Acordei de ressaca.'],
        ['Esta matapa está maningue boa!', 'Essa matapa está muito boa!'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'O “e” no fim da palavra soa [i], como no Brasil, e não [ɨ] como em Portugal: “felicidade” soa “felicidádi”.',
      'O “r” no fim da palavra muitas vezes não se pronuncia: “estar” soa “está”.',
      'As vogais átonas não são engolidas como em Lisboa: dá para ouvir cada sílaba de “pequeno” [peˈkenu].',
      'Para a maioria, o português é segunda língua, e o sotaque muda conforme a língua materna: quem fala changana em casa soa diferente de quem fala macua.',
    ],
    vocab: [
      ['fazer fila', 'bichar', 'fazer fila', 'em Portugal e no Brasil a palavra soa estranha; aqui é normal'],
      ['não conseguir', 'desconseguir', 'não conseguir'],
      ['agora mesmo', 'agorinha', 'agora mesmo, neste instante'],
      ['ressaca', 'babalaza', 'ressaca'],
      ['horta, campo cultivado', 'machamba', 'roça, plantação da família'],
      ['bairro de lata', 'caniço', 'favela, bairro pobre da periferia'],
      ['autocarro', 'machimbombo', 'ônibus'],
      ['carrinha de passageiros', 'chapa', 'van de transporte coletivo'],
      ['pequeno-almoço', 'matabicho', 'café da manhã'],
      ['papa de milho', 'chima', 'pirão firme de farinha de milho ou de mandioca'],
      ['pessoa idosa', 'madala', 'pessoa idosa, de respeito'],
      ['muito', 'maningue', 'muito', '“maningue nice”: muito bom'],
      ['problema', 'situação', 'problema, crise'],
      ['autoridade', 'estrutura', 'autoridade, responsável do governo'],
      ['mala de mão', 'pasta', 'bolsa de mão'],
    ],
    stories: [
      {
        id: 'pt-mz-h1',
        variant: 'pt-MZ',
        level: 'A2.2',
        cefr: 'A2',
        title: 'Chapa para a Baixa',
        emoji: '🚐',
        summary: 'Em Maputo, o amigo Tomás leva o Linu de chapa até à Baixa, ao Mercado Central e à estação dos comboios, com uma matapa no almoço.',
        cultural_context:
          'Maputo, a capital de Moçambique, fica no extremo sul do país, junto à baía. Na Baixa, o centro antigo, ficam o Mercado Central e a estação ferroviária, um edifício do começo do século XX com uma grande cúpula. Os “chapas” são as vans do transporte coletivo. A matapa, feita com folhas de mandioca, amendoim e leite de coco, é um dos pratos mais típicos do país.',
        start: 'start',
        glossary: [
          ['chapa', 'van de transporte coletivo'],
          ['bichar', 'fazer fila'],
          ['maningue', 'muito'],
          ['matabicho', 'café da manhã'],
          ['agorinha', 'agora mesmo'],
          ['desconseguir', 'não conseguir'],
        ],
        nodes: {
          start: {
            emoji: '☀️',
            text: 'Depois do matabicho, o Tomás chama o Linu: “Vamos à Baixa! Apanhamos o chapa ali na esquina. Mas temos de bichar, que de manhã há maningue gente.”',
            translation: 'Depois do café da manhã, o Tomás chama o Linu: “Vamos ao centro! A gente pega a van ali na esquina. Mas temos que fazer fila, que de manhã tem muita gente.”',
            choices: [
              { text: 'Linu entra na fila com o Tomás.', translation: 'Linu entra na fila com o Tomás.', next: 'chapa' },
              {
                text: 'Linu fica chocado: acha que “bichar” é um palavrão.',
                translation: 'Linu fica chocado: acha que “bichar” é palavrão.',
                wrong: 'Em Moçambique, “bichar” quer dizer fazer fila. Não tem nada de ofensivo: o Tomás só está dizendo que vão esperar!',
              },
            ],
          },
          chapa: {
            emoji: '🚐',
            text: 'O chapa vem cheio. O cobrador grita “Baixa! Baixa!” e abre espaço. O Linu senta-se apertado entre uma senhora com uma capulana colorida e um estudante. “Aqui é sempre assim”, ri-se o Tomás.',
            translation: 'A van vem lotada. O cobrador grita “Centro! Centro!” e abre espaço. O Linu se senta apertado entre uma senhora com uma capulana colorida e um estudante. “Aqui é sempre assim”, ri o Tomás.',
            choices: [{ text: 'Descem na Baixa.', translation: 'Descem no centro.', next: 'mercado' }],
          },
          mercado: {
            emoji: '🧺',
            text: 'No Mercado Central há montes de cajus, piri-piri, mangas e peixe seco. Uma vendedora oferece castanha de caju: “Prova, está maningue fresca!” O Linu prova e quer comprar um saquinho.',
            translation: 'No Mercado Central tem montes de caju, pimenta, manga e peixe seco. Uma vendedora oferece castanha de caju: “Prove, está fresquinha!” O Linu prova e quer comprar um saquinho.',
            choices: [
              { text: 'Linu compra a castanha de caju.', translation: 'Linu compra a castanha de caju.', next: 'estacao' },
              { text: 'Linu pede ao Tomás para irem logo almoçar.', translation: 'Linu pede ao Tomás para irem logo almoçar.', next: 'almoco' },
            ],
          },
          estacao: {
            emoji: '🚉',
            text: 'Com o saquinho de caju na mão, os dois vão até à estação dos comboios. O Linu olha para a cúpula verde e diz: “Desconsigo acreditar que isto é uma estação!” O Tomás ri-se: “Já falas como um moçambicano.”',
            translation: 'Com o saquinho de caju na mão, os dois vão até a estação de trem. O Linu olha para a cúpula verde e diz: “Não consigo acreditar que isso é uma estação!” O Tomás ri: “Você já fala como um moçambicano.”',
            choices: [{ text: 'Agora sim, vão almoçar.', translation: 'Agora sim, vão almoçar.', next: 'almoco' }],
          },
          almoco: {
            emoji: '🍛',
            text: 'Num restaurante simples, pedem matapa com arroz. Chega um prato verde, cheiroso, com coco e amendoim. “É feita com folhas de mandioca”, explica o Tomás.',
            translation: 'Num restaurante simples, pedem matapa com arroz. Chega um prato verde, cheiroso, com coco e amendoim. “É feita com folha de mandioca”, explica o Tomás.',
            choices: [
              { text: '“Está maningue boa!”', translation: '“Está muito boa!”', next: 'final_bom' },
              { text: 'Linu acha estranho comer folhas e come só o arroz.', translation: 'Linu acha estranho comer folhas e come só o arroz.', next: 'final_arroz' },
              {
                text: 'Linu pensa que a matapa é feita de peixe.',
                translation: 'Linu pensa que a matapa é feita de peixe.',
                wrong: 'O Tomás acabou de explicar: a matapa é feita com folhas de mandioca, amendoim e coco.',
              },
            ],
          },
          final_bom: {
            emoji: '😋',
            text: 'O Linu limpa o prato. “Agorinha mesmo descobri o meu prato preferido de Moçambique!” O Tomás promete levá-lo à praia da Costa do Sol no fim de semana.',
            translation: 'O Linu limpa o prato. “Acabei de descobrir meu prato preferido de Moçambique!” O Tomás promete levá-lo à praia da Costa do Sol no fim de semana.',
            ending: {
              tone: 'bom',
              title: 'Um dia na Baixa',
              message: 'Você andou de chapa, aprendeu a bichar e comeu matapa: palavras do português moçambicano que fazem parte do dia a dia de Maputo.',
            },
          },
          final_arroz: {
            emoji: '🍚',
            text: 'O Tomás fica um pouco triste: “É o prato mais nosso que há!” O Linu promete provar da próxima vez, com mais coragem.',
            translation: 'O Tomás fica um pouco triste: “É o prato mais nosso que existe!” O Linu promete provar da próxima vez, com mais coragem.',
            ending: {
              tone: 'neutro',
              title: 'Só arroz',
              message: 'Faltou coragem desta vez, mas a matapa fica esperando pelo Linu.',
            },
          },
        },
      },
      {
        id: 'pt-mz-h2',
        variant: 'pt-MZ',
        level: 'B1.2',
        cefr: 'B1',
        title: 'A Ilha de pedra e cal',
        emoji: '🏝️',
        summary: 'O Linu viaja até à Ilha de Moçambique, no norte do país, que deu nome ao país inteiro. O madala Abudo mostra a fortaleza e a cidade de pedra.',
        cultural_context:
          'A Ilha de Moçambique, na província de Nampula, foi a capital da colônia portuguesa até o fim do século XIX e deu o nome ao país. É Patrimônio Mundial da UNESCO desde 1991. Tem duas partes: a cidade de pedra e cal, com a Fortaleza de São Sebastião, do século XVI, e a cidade de macuti, de casas com telhado de folha de palmeira. No norte, a língua materna da maioria é o macua (emakhuwa).',
        start: 'start',
        glossary: [
          ['madala', 'pessoa idosa, de respeito'],
          ['capulana', 'tecido estampado usado como saia ou pano'],
          ['machamba', 'roça, plantação'],
          ['situação', 'problema'],
          ['depressar', 'ir depressa'],
        ],
        nodes: {
          start: {
            emoji: '🌉',
            text: 'Depois de um dia de viagem, o Linu atravessa a ponte comprida que liga o continente à Ilha de Moçambique. Espera-o o madala Abudo, um senhor de chapéu branco. “Bem-vindo à Ilha, meu filho. Foi daqui que o país tirou o nome.”',
            translation: 'Depois de um dia de viagem, o Linu atravessa a ponte comprida que liga o continente à Ilha de Moçambique. Quem o espera é o seu Abudo, um senhor de chapéu branco. “Bem-vindo à Ilha, meu filho. Foi daqui que o país tirou o nome.”',
            choices: [
              { text: 'Linu cumprimenta o madala com respeito.', translation: 'Linu cumprimenta o senhor com respeito.', next: 'cidades' },
              {
                text: 'Linu chama o madala de “mano”, como a um amigo da mesma idade.',
                translation: 'Linu chama o senhor de “mano”, como um amigo da mesma idade.',
                wrong: '“Madala” é o tratamento de respeito para uma pessoa mais velha. Com um madala, fala-se com respeito, não como com um colega!',
              },
            ],
          },
          cidades: {
            emoji: '🏛️',
            text: '“A Ilha tem duas cidades”, explica o madala. “Ao norte, a cidade de pedra e cal, das casas grandes e das igrejas. Ao sul, a cidade de macuti, onde as casas têm telhado de folha de palmeira. Eu nasci na de macuti.”',
            translation: '“A Ilha tem duas cidades”, explica o senhor. “Ao norte, a cidade de pedra e cal, das casas grandes e das igrejas. Ao sul, a cidade de macuti, onde as casas têm telhado de folha de palmeira. Eu nasci na de macuti.”',
            choices: [
              { text: 'Vão primeiro à Fortaleza de São Sebastião.', translation: 'Vão primeiro à Fortaleza de São Sebastião.', next: 'fortaleza' },
              { text: 'Linu quer conhecer a cidade de macuti.', translation: 'Linu quer conhecer a cidade de macuti.', next: 'macuti' },
            ],
          },
          macuti: {
            emoji: '🏘️',
            text: 'Nas ruelas de macuti, mulheres com capulanas coloridas conversam em macua à porta das casas. O madala traduz: “Estão a dizer que o pinguim deve ter maningue calor!” Todos riem.',
            translation: 'Nas vielas de macuti, mulheres com capulanas coloridas conversam em macua na porta das casas. O senhor traduz: “Estão dizendo que o pinguim deve estar com muito calor!” Todos riem.',
            choices: [{ text: 'Seguem até à fortaleza.', translation: 'Seguem até a fortaleza.', next: 'fortaleza' }],
          },
          fortaleza: {
            emoji: '🏰',
            text: 'A Fortaleza de São Sebastião é enorme, de pedra cinzenta, virada para o oceano Índico. “Tem mais de quatrocentos anos”, conta o madala. “Agora o problema é a maré: a água do mar come as pedras. É uma situação que preocupa toda a gente.”',
            translation: 'A Fortaleza de São Sebastião é enorme, de pedra cinza, virada para o oceano Índico. “Tem mais de quatrocentos anos”, conta o senhor. “Agora o problema é a maré: a água do mar vai comendo as pedras. É um problema que preocupa todo mundo.”',
            choices: [
              { text: 'Linu pergunta como se pode proteger a fortaleza.', translation: 'Linu pergunta como dá para proteger a fortaleza.', next: 'conversa' },
              {
                text: 'Linu entende que “situação” quer dizer uma festa.',
                translation: 'Linu entende que “situação” quer dizer uma festa.',
                wrong: 'Em Moçambique, “situação” quer dizer um problema, uma crise. O madala está preocupado com o mar, não está falando de festa!',
              },
            ],
          },
          conversa: {
            emoji: '🌊',
            text: '“Com trabalho e com dinheiro”, responde o madala, “e com gente que estude a nossa história. Por isso gosto quando vêm visitantes curiosos como tu.” O sol começa a descer sobre o mar.',
            translation: '“Com trabalho e com dinheiro”, responde o senhor, “e com gente que estude a nossa história. Por isso gosto quando vêm visitantes curiosos como você.” O sol começa a descer sobre o mar.',
            choices: [
              { text: 'Ficam a ver o pôr do sol.', translation: 'Ficam vendo o pôr do sol.', next: 'final_sol' },
              { text: 'Linu tem de depressar para apanhar o último chapa.', translation: 'Linu tem que se apressar para pegar a última van.', next: 'final_pressa' },
            ],
          },
          final_sol: {
            emoji: '🌅',
            text: 'O céu fica laranja sobre o Índico. O madala oferece ao Linu uma capulana azul: “Para te lembrares da Ilha.” O Linu promete voltar e contar a história a quem quiser ouvir.',
            translation: 'O céu fica laranja sobre o Índico. O senhor dá ao Linu uma capulana azul: “Para você se lembrar da Ilha.” O Linu promete voltar e contar a história para quem quiser ouvir.',
            ending: {
              tone: 'bom',
              title: 'A Ilha que deu nome ao país',
              message: 'Você conheceu a Ilha de Moçambique e aprendeu “madala”, “capulana” e o sentido moçambicano de “situação”.',
            },
          },
          final_pressa: {
            emoji: '🏃',
            text: 'O Linu despede-se depressa e corre até à ponte. Apanha o chapa no último minuto, mas fica com pena de não ter visto o pôr do sol.',
            translation: 'O Linu se despede depressa e corre até a ponte. Pega a van no último minuto, mas fica com pena de não ter visto o pôr do sol.',
            ending: {
              tone: 'neutro',
              title: 'O último chapa',
              message: 'Deu tempo de voltar, mas o pôr do sol da Ilha fica para a próxima viagem.',
            },
          },
        },
      },
    ],
  },
  // ───────────────────────────── CABO VERDE ─────────────────────────────
  {
    code: 'pt-CV',
    country: 'CPV',
    kind: 'dialeto',
    speechLocale: 'pt-PT',
    ipa: ipaDe('pt-CV', 'PT'),
    name: 'Português de Cabo Verde',
    flag: '🇨🇻',
    summary:
      'A língua oficial, da escola e do jornal, ao lado do crioulo, que é a língua de casa de quase todos. Soa perto do europeu, mas com o “ei” e o “ou” como se escrevem, sem o “e” mudo de Lisboa e com palavras e construções vindas do kriolu.',
    card: {
      id: 'pt-cv-c1',
      title: 'Morabeza em duas línguas',
      emoji: '🇨🇻',
      history:
        'Cabo Verde, um arquipélago de dez ilhas no Atlântico, estava desabitado quando os portugueses chegaram, no século XV. Ali nasceu, do contato entre o português e línguas da costa ocidental africana, o crioulo cabo-verdiano (kriolu), hoje a língua materna de quase toda a população. O português ficou como língua oficial, da escola, dos tribunais e da imprensa: os dois vivem lado a lado, cada um com o seu papel, o que os linguistas chamam de diglossia. Até 2013, quando nasceu a Academia Cabo-verdiana de Letras, nenhuma instituição cuidava do português do país, e as gramáticas e os dicionários vinham de Portugal. Cabo Verde foi o segundo país, depois do Brasil, a ratificar todo o Acordo Ortográfico de 1990.',
      culture_tip:
        '“Morabeza” é a palavra que os cabo-verdianos escolhem para se descrever: a gentileza e a hospitalidade das ilhas. O tratamento é simples, com dois degraus só: “tu” entre íntimos e iguais, e “você” (ou “o senhor”, “a senhora”) para o respeito, sem os muitos degraus de Portugal. Ao telefone diz-se “alô”, como no Brasil. E, por causa do calor, a água nunca é servida “natural”: ou é fresca ou é gelada.',
      grammar_why:
        'Muitas construções do português de Cabo Verde refletem o crioulo, onde o verbo não muda com a pessoa: por isso o pronome quase nunca cai (“Eu desço as escadas”, mais que “Desço as escadas”). O crioulo também não tem futuro simples nem artigo definido: daí a preferência pelo futuro com “ir” (“vou fazer”, e não “farei”) e frases como “Pedro foi”, sem o “o”. Ao oferecer alguma coisa, pergunta-se na negativa: “Não queres um café?”. E a ordem das palavras é mais fixa: “Eu espero que tu chegues lá um dia”, em vez de “Espero eu que um dia lá chegues”.',
      grammar_examples: [
        ['Não queres uma xícara de café?', 'Você quer uma xícara de café?'],
        ['Amanhã eu vou fazer a cachupa.', 'Amanhã eu vou fazer a cachupa.'],
        ['Pedro foi à praia com os amigos.', 'O Pedro foi à praia com os amigos.'],
        ['Se chovesse eu não ia sair.', 'Se chovesse, eu não sairia.'],
        ['Alô? Sim, sou eu.', 'Alô? Sim, sou eu.'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'O “ei” e o “ou” soam como se escrevem: “leite” [ˈlejti], “ouro” [ˈowɾu]. Em Lisboa seriam “lâite” e “ôru”. Do mesmo jeito, “bem” soa [bẽj̃], e não [bɐ̃j̃].',
      'O “e” mudo de Lisboa quase não existe: nas ilhas de Sotavento (Santiago, Fogo, Maio, Brava) vira [i], e nas de Barlavento (São Vicente, Santo Antão, São Nicolau, Sal, Boa Vista) muitas vezes cai.',
      'O “l” é dental, com a ponta da língua nos dentes, como no espanhol. O “b”, o “d” e o “g” entre vogais são sempre oclusivos, sem o som suave de Portugal.',
      'O “rr” é dito com a ponta da língua (mais nas ilhas do Sul) ou no fundo da garganta (mais nas do Norte).',
      'Palavras como “estado” e “espátula” começam com o chiado, sem vogal: [ʃˈtadu].',
    ],
    vocab: [
      ['amendoim', 'mancarra', 'amendoim'],
      ['pardal', 'tchota', 'pardal'],
      ['piripíri', 'malagueta', 'pimenta', 'como no Brasil'],
      ['guitarra', 'violão', 'violão', 'como no Brasil'],
      ['acordeão', 'gaita', 'sanfona'],
      ['berlinde', 'carambola', 'bolinha de gude'],
      ['tabuleiro', 'bandeja', 'bandeja', 'como no Brasil'],
      ['rabanada', 'fatia parida', 'rabanada'],
      ['suspiro', 'beijo', 'suspiro (o doce de clara de ovo)'],
      ['tamarindo', 'tambarina', 'tamarindo'],
      ['embondeiro', 'calabaceira', 'baobá (a árvore e o fruto)'],
      ['está? (ao telefone)', 'alô', 'alô'],
      ['calculadora', 'máquina de calcular', 'calculadora'],
      ['ténis (o calçado)', 'sapatilha', 'tênis'],
      ['banda', 'grupo, conjunto', 'banda de música', '“banda” é só a filarmônica'],
      ['montanha', 'rocha', 'montanha'],
    ],
    stories: [
      {
        id: 'pt-cv-h1',
        variant: 'pt-CV',
        level: 'A2.2',
        cefr: 'A2',
        title: 'Morna no Mindelo',
        emoji: '🎶',
        summary: 'Na ilha de São Vicente, a amiga Nha Lena leva o Linu pelas ruas do Mindelo, mostra o Monte Cara e uma noite de morna.',
        cultural_context:
          'O Mindelo, na ilha de São Vicente, é a cidade da música de Cabo Verde e a terra de Cesária Évora, a “diva dos pés descalços”, que levou a morna ao mundo. A morna, canção lenta e saudosa, é Patrimônio Imaterial da Humanidade (UNESCO, 2019). Do porto vê-se o Monte Cara, um morro que parece um rosto deitado olhando para o céu.',
        start: 'start',
        glossary: [
          ['morabeza', 'hospitalidade, gentileza'],
          ['morna', 'canção lenta e saudosa de Cabo Verde'],
          ['violão', 'violão'],
          ['gaita', 'sanfona'],
          ['alô', 'alô (ao telefone)'],
          ['sodade', 'saudade'],
        ],
        nodes: {
          start: {
            emoji: '📞',
            text: 'O telefone toca no hotel. “Alô? Linu, é a Lena! Não queres conhecer o Mindelo? Eu espero-te na praça daqui a meia hora.”',
            translation: 'O telefone toca no hotel. “Alô? Linu, é a Lena! Você quer conhecer o Mindelo? Eu te espero na praça daqui a meia hora.”',
            choices: [
              { text: '“Quero sim! Vou já.”', translation: '“Quero sim! Já estou indo.”', next: 'praca' },
              {
                text: 'Linu entende que a Lena não quer que ele vá.',
                translation: 'Linu entende que a Lena não quer que ele vá.',
                wrong: 'Em Cabo Verde, oferecer alguma coisa com a pergunta na negativa (“Não queres…?”) é um convite gentil. A Lena quer muito que o Linu vá!',
              },
            ],
          },
          praca: {
            emoji: '⛰️',
            text: 'Na praça, a Lena aponta para o mar. “Estás a ver aquele monte? É o Monte Cara. Olha bem: tem nariz, boca e queixo, como uma pessoa deitada.” O Linu ri: é mesmo um rosto de pedra.',
            translation: 'Na praça, a Lena aponta para o mar. “Está vendo aquele morro? É o Monte Cara. Olhe bem: tem nariz, boca e queixo, como uma pessoa deitada.” O Linu ri: é mesmo um rosto de pedra.',
            choices: [
              { text: 'Vão ver a estátua de Cesária Évora.', translation: 'Vão ver a estátua de Cesária Évora.', next: 'cesaria' },
              { text: 'Linu quer comer alguma coisa primeiro.', translation: 'Linu quer comer alguma coisa primeiro.', next: 'lanche' },
            ],
          },
          lanche: {
            emoji: '🍮',
            text: 'Numa pastelaria, a Lena pede dois “beijos”. O Linu fica vermelho, mas chegam dois suspiros, doces e brancos. “Aqui chamamos-lhes beijos”, explica ela, rindo.',
            translation: 'Numa confeitaria, a Lena pede dois “beijos”. O Linu fica vermelho, mas chegam dois suspiros, doces e brancos. “Aqui a gente chama isso de beijo”, explica ela, rindo.',
            choices: [{ text: 'Depois do lanche, seguem passeio.', translation: 'Depois do lanche, continuam o passeio.', next: 'cesaria' }],
          },
          cesaria: {
            emoji: '👣',
            text: 'Perto do porto há uma estátua de Cesária Évora, a cantora que cantava descalça. “Ela levou a morna ao mundo inteiro”, conta a Lena. “Hoje à noite há música num bar aqui perto.”',
            translation: 'Perto do porto tem uma estátua de Cesária Évora, a cantora que cantava descalça. “Ela levou a morna para o mundo inteiro”, conta a Lena. “Hoje à noite tem música num bar aqui perto.”',
            choices: [
              { text: 'Vão ao bar ouvir morna.', translation: 'Vão ao bar ouvir morna.', next: 'final_morna' },
              { text: 'O Linu está cansado e volta ao hotel.', translation: 'O Linu está cansado e volta para o hotel.', next: 'final_hotel' },
            ],
          },
          final_morna: {
            emoji: '🎸',
            text: 'No bar, um senhor toca violão, outro toca gaita, e uma rapariga canta uma morna sobre a sodade de quem partiu. O Linu não entende todas as palavras em crioulo, mas sente a música. “É a morabeza”, diz a Lena.',
            translation: 'No bar, um senhor toca violão, outro toca sanfona, e uma moça canta uma morna sobre a saudade de quem foi embora. O Linu não entende todas as palavras em crioulo, mas sente a música. “É a morabeza”, diz a Lena.',
            ending: {
              tone: 'bom',
              title: 'Uma noite de morna',
              message: 'Você conheceu o Mindelo e viu que “violão” e “gaita” são palavras de Cabo Verde que também se ouvem no Brasil, mas não em Portugal.',
            },
          },
          final_hotel: {
            emoji: '🛏️',
            text: 'O Linu volta ao hotel e adormece cedo. De madrugada, pela janela, ouve ao longe um violão. “Amanhã não perco”, promete.',
            translation: 'O Linu volta para o hotel e dorme cedo. De madrugada, pela janela, ouve um violão ao longe. “Amanhã eu não perco”, promete.',
            ending: {
              tone: 'neutro',
              title: 'Morna ao longe',
              message: 'A noite de música ficou para amanhã. No Mindelo, sempre há uma morna em algum lugar.',
            },
          },
        },
      },
      {
        id: 'pt-cv-h2',
        variant: 'pt-CV',
        level: 'B1.2',
        cefr: 'B1',
        title: 'Cachupa na Cidade Velha',
        emoji: '🥘',
        summary: 'Na ilha de Santiago, o Linu visita a Cidade Velha, a primeira cidade construída pelos europeus nos trópicos, e aprende a fazer cachupa com a família do Djon.',
        cultural_context:
          'A Cidade Velha (antiga Ribeira Grande), na ilha de Santiago, foi fundada no século XV e é considerada a primeira cidade colonial europeia nos trópicos. Foi um centro do tráfico de pessoas escravizadas entre a África e a América, e é Patrimônio Mundial da UNESCO desde 2009. A cachupa, de milho, feijão e carne ou peixe, cozida lentamente, é o prato nacional; a do dia seguinte, refogada, é a “cachupa guisada”.',
        start: 'start',
        glossary: [
          ['cachupa', 'prato de milho e feijão, cozido lentamente'],
          ['mancarra', 'amendoim'],
          ['fatia parida', 'rabanada'],
          ['rocha', 'montanha'],
          ['fresca', 'gelada (a água)'],
        ],
        nodes: {
          start: {
            emoji: '🏚️',
            text: 'O Djon e o Linu chegam à Cidade Velha. No largo, há um pelourinho de pedra. “Aqui foi a primeira cidade dos europeus nos trópicos”, explica o Djon. “E também um lugar de muita dor: daqui partiram navios de escravizados para a América.”',
            translation: 'O Djon e o Linu chegam à Cidade Velha. Na praça, tem um pelourinho de pedra. “Aqui foi a primeira cidade dos europeus nos trópicos”, explica o Djon. “E também um lugar de muita dor: daqui partiram navios de escravizados para a América.”',
            choices: [
              { text: 'Linu fica em silêncio um momento, a pensar na história.', translation: 'Linu fica em silêncio um momento, pensando na história.', next: 'forte' },
              {
                text: 'Linu acha que a Cidade Velha é uma cidade nova, construída há pouco tempo.',
                translation: 'Linu acha que a Cidade Velha é uma cidade nova, construída há pouco tempo.',
                wrong: 'É o contrário: a Cidade Velha foi fundada no século XV, há mais de quinhentos anos. Por isso o nome!',
              },
            ],
          },
          forte: {
            emoji: '🏰',
            text: 'Sobem até à fortaleza no alto. Lá de cima, o Linu vê o mar, os telhados e, atrás, as rochas secas da ilha. “Aqui dizemos rocha ao que em Portugal chamam montanha”, conta o Djon.',
            translation: 'Sobem até a fortaleza no alto. Lá de cima, o Linu vê o mar, os telhados e, atrás, as montanhas secas da ilha. “Aqui a gente chama de rocha o que em Portugal chamam de montanha”, conta o Djon.',
            choices: [{ text: 'Descem para casa da família do Djon.', translation: 'Descem para a casa da família do Djon.', next: 'casa' }],
          },
          casa: {
            emoji: '🏠',
            text: 'A mãe do Djon está a preparar a cachupa num panelão: milho, feijão, mandioca, couve e carne. “A cachupa leva tempo”, diz ela. “Não queres ajudar a descascar a mancarra?” E oferece água fresca.',
            translation: 'A mãe do Djon está preparando a cachupa num panelão: milho, feijão, mandioca, couve e carne. “A cachupa leva tempo”, diz ela. “Você quer ajudar a descascar o amendoim?” E oferece água gelada.',
            choices: [
              { text: 'Linu ajuda a descascar a mancarra.', translation: 'Linu ajuda a descascar o amendoim.', next: 'espera' },
              { text: 'Linu prefere pôr a mesa.', translation: 'Linu prefere arrumar a mesa.', next: 'espera' },
            ],
          },
          espera: {
            emoji: '⏳',
            text: 'Duas horas depois, a cachupa está pronta. Todos se sentam. O Djon explica: “Hoje comemos a cachupa rica, com carne. Amanhã de manhã, o que sobrar vai para a frigideira com um ovo estrelado: é a cachupa guisada.”',
            translation: 'Duas horas depois, a cachupa fica pronta. Todos se sentam. O Djon explica: “Hoje a gente come a cachupa rica, com carne. Amanhã de manhã, o que sobrar vai para a frigideira com um ovo frito: é a cachupa guisada.”',
            choices: [
              { text: '“Então amanhã volto para o pequeno-almoço!”', translation: '“Então amanhã eu volto para o café da manhã!”', next: 'final_volta' },
              { text: 'Linu come tanto que adormece no sofá.', translation: 'Linu come tanto que dorme no sofá.', next: 'final_sono' },
              {
                text: 'Linu entende que a cachupa guisada é uma sobremesa.',
                translation: 'Linu entende que a cachupa guisada é uma sobremesa.',
                wrong: 'A cachupa guisada é a cachupa do dia anterior, refogada na frigideira, muitas vezes com ovo. É um café da manhã salgado, não um doce!',
              },
            ],
          },
          final_volta: {
            emoji: '🍳',
            text: 'Na manhã seguinte, o Linu volta. A mãe do Djon ri-se e serve a cachupa guisada com ovo, e ainda uma fatia parida de sobremesa. “Agora já és de Santiago”, diz o Djon.',
            translation: 'Na manhã seguinte, o Linu volta. A mãe do Djon ri e serve a cachupa guisada com ovo, e ainda uma rabanada de sobremesa. “Agora você já é de Santiago”, diz o Djon.',
            ending: {
              tone: 'bom',
              title: 'Cachupa duas vezes',
              message: 'Você conheceu a Cidade Velha e a cachupa, e aprendeu que em Cabo Verde “rocha” é montanha e “fatia parida” é rabanada.',
            },
          },
          final_sono: {
            emoji: '😴',
            text: 'O Linu adormece no sofá com a barriga cheia. Quando acorda, já é noite e a cachupa guisada da manhã seguinte já tem dono: o Djon!',
            translation: 'O Linu dorme no sofá de barriga cheia. Quando acorda, já é noite, e a cachupa guisada da manhã seguinte já tem dono: o Djon!',
            ending: {
              tone: 'neutro',
              title: 'Cachupa demais',
              message: 'Comer bem é parte da morabeza. Mas da próxima vez o Linu guarda espaço para a cachupa guisada.',
            },
          },
        },
      },
    ],
  },

  // ───────────────────────────── GUINÉ-BISSAU ─────────────────────────────
  {
    code: 'pt-GW',
    country: 'GNB',
    kind: 'dialeto',
    speechLocale: 'pt-PT',
    name: 'Português da Guiné-Bissau',
    flag: '🇬🇼',
    summary:
      'A língua oficial de um país onde a língua de todos é o kriol. Só cerca de 15% dos guineenses falam português, sobretudo em Bissau; para muitos ele é a terceira língua, depois da língua da família e do kriol.',
    card: {
      id: 'pt-gw-c1',
      title: 'O português ao lado do kriol',
      emoji: '🇬🇼',
      history:
        'Os portugueses comerciaram na costa da Guiné desde o século XV, em feitorias como Cacheu. Do contato com os povos da região, como os balantas, os fulas, os mandingas e os manjacos, nasceu o crioulo da Guiné-Bissau, o kriol, que se tornou a língua franca do país e o símbolo da identidade nacional. A luta pela independência, liderada pelo PAIGC de Amílcar Cabral, terminou com a independência declarada em 1973 e reconhecida por Portugal em 1974. Em 1983, 44% da população falava crioulo e só 11% falava português; em 2019, as estimativas davam cerca de 15%. Depois de 1996, com a CPLP, chegaram professores de Portugal, do Brasil e de Angola, e o Instituto Camões abriu centros de língua em várias cidades.',
      culture_tip:
        'Em Bissau, muita conversa começa em português e acaba em kriol, ou o contrário, na mesma frase. Não é erro: é como as pessoas falam. Quem aprende umas palavras de kriol é sempre bem recebido. O país é cercado por vizinhos de língua francesa, Senegal e Guiné, e por isso o francês também se ouve no comércio e entre os imigrantes.',
      grammar_why:
        'Na escrita e na escola, o português da Guiné-Bissau segue a norma de Portugal. O país participou da redação do Acordo Ortográfico de 1990 e o ratificou por unanimidade em 2009, mas na prática as duas grafias, a de 1945 e a de 1990, ainda convivem. Como o português é para muitos a segunda ou terceira língua, a fala muda conforme a língua materna de cada um. Há ainda poucos estudos que descrevam a variedade guineense em detalhe; o que mais a marca é o vocabulário da terra.',
      grammar_examples: [
        ['Vamos à tabanca do meu avô.', 'Vamos à aldeia do meu avô.'],
        ['As mulheres estão a trabalhar na bolanha.', 'As mulheres estão trabalhando no arrozal.'],
        ['Hoje há caldo de mancarra.', 'Hoje tem ensopado de amendoim.'],
        ['O régulo recebeu os visitantes.', 'O chefe tradicional recebeu os visitantes.'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'A pronúncia de referência, ensinada na escola, é a de Portugal, com o “s” chiado e as vogais átonas reduzidas.',
      'Para quem tem o português como segunda ou terceira língua, a pronúncia muda conforme a língua materna (balanta, fula, mandinga, manjaco, papel e outras).',
      'O kriol de Bissau é mais próximo do português e toma palavras dele com mais facilidade que o kriol do interior.',
    ],
    vocab: [
      ['aldeia', 'tabanca', 'aldeia'],
      ['arrozal alagado', 'bolanha', 'campo alagado onde se planta arroz'],
      ['amendoim', 'mancarra', 'amendoim', 'também em Cabo Verde'],
      ['fruto da palmeira (e o seu óleo)', 'chabéu', 'dendê; e o prato feito com ele'],
      ['chefe tradicional', 'régulo', 'chefe tradicional de uma região'],
      ['arroz cozido', 'bianda', 'arroz cozido, a comida do dia'],
      ['espírito protetor', 'irã', 'espírito protetor da religião tradicional'],
    ],
    stories: [
      {
        id: 'pt-gw-h1',
        variant: 'pt-GW',
        level: 'A2.2',
        cefr: 'A2',
        title: 'Caju em Bandim',
        emoji: '🥜',
        summary: 'No mercado de Bandim, em Bissau, o Linu e a amiga Fatumata compram mancarra e chabéu para o almoço, no tempo do caju.',
        cultural_context:
          'O mercado de Bandim é o maior de Bissau. A castanha de caju é o principal produto de exportação da Guiné-Bissau, e a época da colheita, entre março e junho, movimenta o país inteiro. O caldo de chabéu, feito com o óleo do fruto da palmeira, e o caldo de mancarra, de amendoim, são servidos com arroz.',
        start: 'start',
        glossary: [
          ['mancarra', 'amendoim'],
          ['chabéu', 'fruto da palmeira; o caldo feito com ele'],
          ['bianda', 'arroz cozido'],
          ['tabanca', 'aldeia'],
          ['kriol', 'o crioulo da Guiné-Bissau'],
        ],
        nodes: {
          start: {
            emoji: '🛒',
            text: 'A Fatumata leva o Linu ao mercado de Bandim. Há gente por todo o lado, sacos de arroz, peixe seco e montes de castanha de caju. “É o tempo do caju”, diz ela. “Toda a gente está a vender.”',
            translation: 'A Fatumata leva o Linu ao mercado de Bandim. Tem gente por todo lado, sacos de arroz, peixe seco e montes de castanha de caju. “É a época do caju”, diz ela. “Todo mundo está vendendo.”',
            choices: [
              { text: '“O que vamos comprar?”', translation: '“O que a gente vai comprar?”', next: 'lista' },
              {
                text: 'Linu acha que o caju só existe no Brasil.',
                translation: 'Linu acha que o caju só existe no Brasil.',
                wrong: 'O cajueiro veio do Brasil, levado pelos portugueses, mas hoje a castanha de caju é o principal produto que a Guiné-Bissau vende para o mundo!',
              },
            ],
          },
          lista: {
            emoji: '📝',
            text: '“Precisamos de mancarra para o caldo, e de chabéu”, responde a Fatumata. Uma vendedora chama-os em kriol. A Fatumata responde em kriol e depois traduz: “Ela diz que a mancarra dela é a melhor de Bissau.”',
            translation: '“A gente precisa de amendoim para o caldo, e de dendê”, responde a Fatumata. Uma vendedora chama os dois em kriol. A Fatumata responde em kriol e depois traduz: “Ela diz que o amendoim dela é o melhor de Bissau.”',
            choices: [
              { text: 'Compram a mancarra da vendedora.', translation: 'Compram o amendoim da vendedora.', next: 'chabeu' },
              { text: 'Linu quer ver outras bancas antes de comprar.', translation: 'Linu quer ver outras barracas antes de comprar.', next: 'volta' },
            ],
          },
          volta: {
            emoji: '🔄',
            text: 'Andam pelo mercado inteiro, mas no fim voltam à mesma vendedora. Ela ri-se: “Eu não disse?” O Linu compra a mancarra e ainda leva umas castanhas de caju de presente.',
            translation: 'Andam pelo mercado inteiro, mas no fim voltam à mesma vendedora. Ela ri: “Eu não falei?” O Linu compra o amendoim e ainda ganha umas castanhas de caju de presente.',
            choices: [{ text: 'Vão buscar o chabéu.', translation: 'Vão buscar o dendê.', next: 'chabeu' }],
          },
          chabeu: {
            emoji: '🌴',
            text: 'Na banca do chabéu, os frutos da palmeira estão empilhados, vermelhos e brilhantes. “Com isto fazemos o caldo de chabéu”, explica a Fatumata. “Mas hoje vamos fazer caldo de mancarra. Qual preferes provar amanhã?”',
            translation: 'Na barraca do dendê, os frutos da palmeira estão empilhados, vermelhos e brilhantes. “Com isso a gente faz o caldo de chabéu”, explica a Fatumata. “Mas hoje vamos fazer caldo de amendoim. Qual você prefere provar amanhã?”',
            choices: [
              { text: '“O de chabéu, claro!”', translation: '“O de chabéu, claro!”', next: 'final_bom' },
              { text: 'Linu diz que não gosta de comida com óleo.', translation: 'Linu diz que não gosta de comida com óleo.', next: 'final_neutro' },
            ],
          },
          final_bom: {
            emoji: '🍚',
            text: 'Em casa da Fatumata, comem bianda com caldo de mancarra. É cremoso e um pouco picante. “Amanhã é dia de chabéu”, promete ela. O Linu já sabe dizer tabanca, bolanha e mancarra.',
            translation: 'Na casa da Fatumata, comem arroz com caldo de amendoim. É cremoso e um pouco picante. “Amanhã é dia de chabéu”, promete ela. O Linu já sabe dizer tabanca, bolanha e mancarra.',
            ending: {
              tone: 'bom',
              title: 'Tempo do caju',
              message: 'Você foi ao mercado de Bandim e aprendeu palavras da Guiné-Bissau: mancarra, chabéu e bianda.',
            },
          },
          final_neutro: {
            emoji: '🤷',
            text: 'A Fatumata encolhe os ombros: “Então amanhã só bianda com peixe.” Mas, à noite, o cheiro do caldo da vizinha faz o Linu mudar de ideias.',
            translation: 'A Fatumata dá de ombros: “Então amanhã só arroz com peixe.” Mas, à noite, o cheiro do caldo da vizinha faz o Linu mudar de ideia.',
            ending: {
              tone: 'neutro',
              title: 'O cheiro da vizinha',
              message: 'O chabéu ficou para outro dia. Na Guiné-Bissau, provar a comida da casa é a melhor forma de agradecer.',
            },
          },
        },
      },
      {
        id: 'pt-gw-h2',
        variant: 'pt-GW',
        level: 'B1.2',
        cefr: 'B1',
        title: 'Canoa para os Bijagós',
        emoji: '🛶',
        summary: 'O Linu atravessa o mar até ao arquipélago dos Bijagós, visita uma tabanca e vê as bolanhas de arroz e as praias das tartarugas.',
        cultural_context:
          'O arquipélago dos Bijagós, com cerca de noventa ilhas, é Reserva da Biosfera da UNESCO desde 1996. Lá vive o povo bijagó, com língua e tradições próprias. A ilha de Poilão, no Parque Nacional Marinho João Vieira e Poilão, é um dos maiores locais de desova da tartaruga-verde na costa atlântica africana. Nas bolanhas, campos alagados à beira dos rios e do mar, planta-se o arroz.',
        start: 'start',
        glossary: [
          ['tabanca', 'aldeia'],
          ['bolanha', 'arrozal alagado'],
          ['régulo', 'chefe tradicional'],
          ['irã', 'espírito protetor'],
          ['bianda', 'arroz cozido'],
        ],
        nodes: {
          start: {
            emoji: '⛵',
            text: 'De manhã cedo, o Linu sai do porto de Bissau num barco cheio de gente, sacos e galinhas. O guia, o senhor Armando, explica: “Vamos para Bubaque, nos Bijagós. São quase noventa ilhas, e cada tabanca tem os seus costumes.”',
            translation: 'De manhã cedo, o Linu sai do porto de Bissau num barco cheio de gente, sacos e galinhas. O guia, o senhor Armando, explica: “Vamos para Bubaque, nos Bijagós. São quase noventa ilhas, e cada aldeia tem seus costumes.”',
            choices: [
              { text: 'Linu senta-se e olha para o mar.', translation: 'Linu se senta e olha o mar.', next: 'chegada' },
              {
                text: 'Linu pensa que os Bijagós são uma única ilha grande.',
                translation: 'Linu pensa que os Bijagós são uma ilha grande só.',
                wrong: 'O senhor Armando disse que são quase noventa ilhas! Bubaque é só uma delas.',
              },
            ],
          },
          chegada: {
            emoji: '🏝️',
            text: 'Horas depois, chegam a Bubaque. O senhor Armando leva o Linu a uma tabanca. “Primeiro cumprimentamos o régulo, o chefe da tabanca. É a regra de quem chega.”',
            translation: 'Horas depois, chegam a Bubaque. O senhor Armando leva o Linu a uma aldeia. “Primeiro a gente cumprimenta o régulo, o chefe da aldeia. É a regra de quem chega.”',
            choices: [
              { text: 'Linu cumprimenta o régulo com respeito.', translation: 'Linu cumprimenta o chefe com respeito.', next: 'regulo' },
              { text: 'Linu quer ir logo à praia.', translation: 'Linu quer ir logo para a praia.', next: 'pressa' },
            ],
          },
          pressa: {
            emoji: '✋',
            text: 'O senhor Armando segura-o pelo braço: “Calma! Quem chega a uma tabanca sem cumprimentar o régulo não é bem recebido.” O Linu pede desculpa e vai cumprimentá-lo.',
            translation: 'O senhor Armando segura o Linu pelo braço: “Calma! Quem chega numa aldeia sem cumprimentar o chefe não é bem recebido.” O Linu pede desculpa e vai cumprimentá-lo.',
            choices: [{ text: 'Vão ter com o régulo.', translation: 'Vão falar com o chefe.', next: 'regulo' }],
          },
          regulo: {
            emoji: '🤝',
            text: 'O régulo recebe-os à sombra de uma árvore grande. Fala em bijagó, e o senhor Armando traduz: “Ele diz que és bem-vindo, e que não deves entrar no bosque sagrado: é o lugar dos irãs.”',
            translation: 'O chefe recebe os dois na sombra de uma árvore grande. Fala em bijagó, e o senhor Armando traduz: “Ele diz que você é bem-vindo, e que não deve entrar no bosque sagrado: é o lugar dos espíritos protetores.”',
            choices: [
              { text: 'Linu promete respeitar o bosque e vai ver as bolanhas.', translation: 'Linu promete respeitar o bosque e vai ver os arrozais.', next: 'bolanha' },
              {
                text: 'Linu acha que “irã” é um país e pergunta onde fica.',
                translation: 'Linu acha que “irã” é um país e pergunta onde fica.',
                wrong: 'Aqui, “irã” é um espírito protetor da religião tradicional da Guiné-Bissau. O régulo está falando de um lugar sagrado da ilha!',
              },
            ],
          },
          bolanha: {
            emoji: '🌾',
            text: 'Nas bolanhas, a água do mar entra e sai com a maré. As mulheres plantam arroz com os pés na lama. “Daqui vem a bianda de cada dia”, diz o senhor Armando. Ao fundo, o sol começa a baixar.',
            translation: 'Nos arrozais, a água do mar entra e sai com a maré. As mulheres plantam arroz com os pés na lama. “Daqui vem o arroz de cada dia”, diz o senhor Armando. No fundo, o sol começa a baixar.',
            choices: [
              { text: 'Ficam para o jantar na tabanca.', translation: 'Ficam para o jantar na aldeia.', next: 'final_jantar' },
              { text: 'Voltam para a vila de Bubaque antes de anoitecer.', translation: 'Voltam para a vila de Bubaque antes de escurecer.', next: 'final_vila' },
            ],
          },
          final_jantar: {
            emoji: '🔥',
            text: 'À noite, a tabanca acende uma fogueira. Comem bianda com peixe e ouvem histórias. O régulo oferece ao Linu um pequeno colar de conchas. O pinguim nunca vai esquecer os Bijagós.',
            translation: 'À noite, a aldeia acende uma fogueira. Comem arroz com peixe e ouvem histórias. O chefe dá ao Linu um pequeno colar de conchas. O pinguim nunca vai esquecer os Bijagós.',
            ending: {
              tone: 'bom',
              title: 'Uma noite nos Bijagós',
              message: 'Você aprendeu o respeito ao régulo, as bolanhas e a bianda, e viu que a Guiné-Bissau tem muitas línguas além do português e do kriol.',
            },
          },
          final_vila: {
            emoji: '🌙',
            text: 'Voltam à vila de Bubaque pela estrada de terra. O Linu ainda vê, ao longe, o brilho da fogueira da tabanca e fica com vontade de voltar.',
            translation: 'Voltam para a vila de Bubaque pela estrada de terra. O Linu ainda vê, ao longe, o brilho da fogueira da aldeia e fica com vontade de voltar.',
            ending: {
              tone: 'neutro',
              title: 'A fogueira ao longe',
              message: 'O jantar na tabanca ficou para outra visita. Os Bijagós têm noventa ilhas para descobrir.',
            },
          },
        },
      },
    ],
  },

  // ───────────────────────────── SÃO TOMÉ E PRÍNCIPE ─────────────────────────────
  {
    code: 'pt-ST',
    country: 'STP',
    kind: 'dialeto',
    speechLocale: 'pt-PT',
    ipa: ipaDe('pt-ST', 'PT'),
    name: 'Português de São Tomé e Príncipe',
    flag: '🇸🇹',
    summary:
      'Nas duas ilhas do Golfo da Guiné, o português já é a língua de quase todos e a primeira língua da maioria dos jovens. Vogais átonas bem pronunciadas, traços antigos e o ritmo do “leve-leve”.',
    card: {
      id: 'pt-st-c1',
      title: 'Leve-leve, no meio do mundo',
      emoji: '🇸🇹',
      history:
        'As ilhas de São Tomé e do Príncipe estavam desabitadas quando os navegadores portugueses chegaram, por volta de 1470. Foram povoadas com colonos e pessoas escravizadas trazidas do continente africano, e ali nasceram crioulos de base portuguesa: o forro (ou santome), o angolar e o lung’ie, do Príncipe. Primeiro veio o açúcar; no começo do século XX, as “roças” fizeram do país um dos maiores produtores de cacau do mundo, as “ilhas do chocolate”. Depois da independência, em 1975, o português avançou como língua da casa: segundo Santiago e Agostinho (2020), hoje quase toda a população o fala, e para a maioria dos jovens é a primeira língua.',
      culture_tip:
        '“Leve-leve” é o lema não oficial do país: devagar, com calma, sem pressa. Quem chega apressado aprende depressa a ir no ritmo das ilhas. O tchiloli, teatro de rua tradicional com máscaras e música, encena uma história portuguesa do século XVI, a “Tragédia do Marquês de Mântua”, misturada com a vida da ilha.',
      grammar_why:
        'O português são-tomense guarda traços antigos de pronúncia, de vocabulário e de construção. Na escrita, segue a norma de Portugal; o país ratificou o Acordo Ortográfico de 1990 em 2006, mas a grafia de 1945 ainda é a mais usada. Na fala informal, a colocação do pronome antes do verbo e a concordância mais solta lembram o português do Brasil, e a pronúncia de referência da classe média e alta é a europeia.',
      grammar_examples: [
        ['Aqui tudo se faz leve-leve.', 'Aqui tudo se faz com calma.'],
        ['Me dá um pedaço de fruta-pão.', 'Me dá um pedaço de fruta-pão.'],
        ['Hoje há calulu no almoço.', 'Hoje tem calulu no almoço.'],
        ['Vamos à roça ver o cacau.', 'Vamos à fazenda ver o cacau.'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'Vogais átonas plenas, sem a redução de Lisboa: “telefone” [teleˈfɔne]; o “e” final soa muitas vezes [i].',
      'O “r” forte pode ser batido na ponta da língua ou uvular, conforme a pessoa, e o “s” no fim da sílaba nem sempre chia.',
      'Muitos falantes alternam com o forro, o angolar ou o lung’ie, e as palavras dessas línguas passam para o português do dia a dia.',
    ],
    vocab: [
      ['devagar, com calma', 'leve-leve', 'devagar, com calma'],
      ['fazenda de cacau ou café', 'roça', 'fazenda colonial de cacau ou café'],
      ['floresta', 'obô', 'floresta, mata fechada', 'do forro'],
      ['guisado com folhas e óleo de palma', 'calulu', 'ensopado de peixe ou carne com folhas'],
      ['teatro de rua tradicional', 'tchiloli', 'teatro de rua com máscaras e música'],
      ['crioulo de São Tomé', 'forro', 'o crioulo mais falado do país (santome)'],
    ],
    stories: [
      {
        id: 'pt-st-h1',
        variant: 'pt-ST',
        level: 'A2.2',
        cefr: 'A2',
        title: 'Cacau na roça',
        emoji: '🍫',
        summary: 'Em São Tomé, o Linu visita uma antiga roça de cacau com a amiga Inês, prova o fruto direto da árvore e aprende o ritmo leve-leve.',
        cultural_context:
          'As roças são as antigas fazendas coloniais de São Tomé e Príncipe, com casa grande, hospital, armazéns e as sanzalas onde viviam os trabalhadores. No começo do século XX, o país foi um dos maiores produtores de cacau do mundo. Hoje muitas roças estão em ruínas; algumas viraram pousadas e produzem chocolate fino.',
        start: 'start',
        glossary: [
          ['roça', 'fazenda de cacau'],
          ['leve-leve', 'devagar, com calma'],
          ['obô', 'floresta'],
          ['calulu', 'ensopado com folhas'],
        ],
        nodes: {
          start: {
            emoji: '🚙',
            text: 'A Inês leva o Linu de carro pela estrada da montanha. O obô é verde-escuro e húmido. O Linu pergunta se ainda falta muito. A Inês ri-se: “Leve-leve, Linu. Aqui ninguém tem pressa.”',
            translation: 'A Inês leva o Linu de carro pela estrada da montanha. A floresta é verde-escura e úmida. O Linu pergunta se ainda falta muito. A Inês ri: “Calma, Linu. Aqui ninguém tem pressa.”',
            choices: [
              { text: 'Linu respira fundo e aproveita a paisagem.', translation: 'Linu respira fundo e aproveita a paisagem.', next: 'roca' },
              {
                text: 'Linu entende que “leve-leve” quer dizer que a mochila está leve.',
                translation: 'Linu entende que “leve-leve” quer dizer que a mochila está leve.',
                wrong: '“Leve-leve” é o jeito são-tomense de dizer “devagar, com calma”. A Inês está pedindo paciência!',
              },
            ],
          },
          roca: {
            emoji: '🏚️',
            text: 'Chegam à roça. Há uma casa grande antiga, armazéns compridos e um velho hospital. “Aqui trabalhavam centenas de pessoas”, conta a Inês. “Muitas vieram de Angola, de Cabo Verde e de Moçambique, em condições muito duras.”',
            translation: 'Chegam à fazenda. Tem uma casa grande antiga, armazéns compridos e um velho hospital. “Aqui trabalhavam centenas de pessoas”, conta a Inês. “Muitas vieram de Angola, de Cabo Verde e de Moçambique, em condições muito duras.”',
            choices: [{ text: 'Vão até às árvores de cacau.', translation: 'Vão até os pés de cacau.', next: 'cacau' }],
          },
          cacau: {
            emoji: '🌳',
            text: 'Um trabalhador abre um fruto de cacau com a faca. Dentro, as sementes estão cobertas de uma polpa branca. “Prova a polpa”, diz ele. “É doce. O chocolate vem das sementes, depois de secas.”',
            translation: 'Um trabalhador abre um fruto de cacau com a faca. Dentro, as sementes estão cobertas por uma polpa branca. “Prove a polpa”, diz ele. “É doce. O chocolate vem das sementes, depois de secas.”',
            choices: [
              { text: 'Linu prova a polpa doce.', translation: 'Linu prova a polpa doce.', next: 'almoco' },
              { text: 'Linu tenta morder a semente crua.', translation: 'Linu tenta morder a semente crua.', next: 'amargo' },
            ],
          },
          amargo: {
            emoji: '😖',
            text: 'A semente crua é amarga! O Linu faz uma careta e todos se riem. “Por isso é que se seca e se torra primeiro”, explica o trabalhador.',
            translation: 'A semente crua é amarga! O Linu faz careta e todos riem. “É por isso que se seca e se torra primeiro”, explica o trabalhador.',
            choices: [{ text: 'Vão almoçar.', translation: 'Vão almoçar.', next: 'almoco' }],
          },
          almoco: {
            emoji: '🍲',
            text: 'Ao almoço, a cozinheira serve calulu de peixe com banana cozida e fruta-pão. “E de sobremesa, um bocadinho de chocolate da roça”, diz a Inês.',
            translation: 'No almoço, a cozinheira serve calulu de peixe com banana cozida e fruta-pão. “E de sobremesa, um pedacinho de chocolate da fazenda”, diz a Inês.',
            choices: [
              { text: '“Leve-leve, para durar mais!”', translation: '“Devagar, para durar mais!”', next: 'final_bom' },
              { text: 'Linu come o chocolate todo de uma vez.', translation: 'Linu come o chocolate inteiro de uma vez.', next: 'final_pressa' },
            ],
          },
          final_bom: {
            emoji: '🍫',
            text: 'O Linu come o chocolate devagarinho, a olhar para o obô. A Inês sorri: “Já aprendeste a viver como um são-tomense.”',
            translation: 'O Linu come o chocolate devagarinho, olhando para a floresta. A Inês sorri: “Você já aprendeu a viver como um são-tomense.”',
            ending: {
              tone: 'bom',
              title: 'Leve-leve',
              message: 'Você conheceu uma roça de cacau, provou calulu e aprendeu o lema das ilhas: leve-leve.',
            },
          },
          final_pressa: {
            emoji: '😅',
            text: 'O chocolate acaba num segundo. A Inês abana a cabeça: “Pinguim apressado! Leve-leve, Linu, leve-leve.”',
            translation: 'O chocolate acaba num segundo. A Inês balança a cabeça: “Pinguim apressado! Calma, Linu, calma.”',
            ending: {
              tone: 'neutro',
              title: 'Pressa de pinguim',
              message: 'Em São Tomé, até o chocolate se come com calma. Fica a lição para a próxima.',
            },
          },
        },
      },
      {
        id: 'pt-st-h2',
        variant: 'pt-ST',
        level: 'B1.2',
        cefr: 'B1',
        title: 'O eclipse do Príncipe',
        emoji: '🌑',
        summary: 'Na ilha do Príncipe, o Linu visita a roça Sundy, onde em 1919 uma expedição de cientistas fotografou um eclipse que ajudou a confirmar a teoria de Einstein.',
        cultural_context:
          'Em 29 de maio de 1919, uma expedição britânica liderada pelo astrônomo Arthur Eddington fotografou um eclipse total do Sol na roça Sundy, na ilha do Príncipe. As medições, junto com as feitas em Sobral, no Ceará, mostraram que a luz das estrelas se curva perto do Sol, como previa a teoria da relatividade geral de Albert Einstein. A ilha do Príncipe é Reserva da Biosfera da UNESCO desde 2012.',
        start: 'start',
        glossary: [
          ['roça', 'fazenda de cacau'],
          ['obô', 'floresta'],
          ['leve-leve', 'devagar, com calma'],
          ['lung’ie', 'o crioulo do Príncipe'],
        ],
        nodes: {
          start: {
            emoji: '✈️',
            text: 'O avião pequeno aterra no Príncipe. A ilha é quase toda floresta, com picos de pedra a sair do obô. O guia, o Sr. Jorge, recebe o Linu: “Hoje vou mostrar-te um lugar onde a ciência mudou.”',
            translation: 'O avião pequeno pousa no Príncipe. A ilha é quase toda floresta, com picos de pedra saindo da mata. O guia, seu Jorge, recebe o Linu: “Hoje vou te mostrar um lugar onde a ciência mudou.”',
            choices: [
              { text: '“Que lugar é esse?”', translation: '“Que lugar é esse?”', next: 'sundy' },
              {
                text: 'Linu pensa que o Príncipe é uma cidade de São Tomé.',
                translation: 'Linu pensa que o Príncipe é uma cidade de São Tomé.',
                wrong: 'O Príncipe é a outra ilha do país, a cerca de 150 km de São Tomé. Por isso o Linu teve de ir de avião!',
              },
            ],
          },
          sundy: {
            emoji: '🏡',
            text: 'Chegam à roça Sundy. Num jardim há uma placa de pedra. O Sr. Jorge lê: “Aqui, em 29 de maio de 1919, Eddington fotografou o eclipse que confirmou a teoria de Einstein.”',
            translation: 'Chegam à fazenda Sundy. Num jardim tem uma placa de pedra. Seu Jorge lê: “Aqui, em 29 de maio de 1919, Eddington fotografou o eclipse que confirmou a teoria de Einstein.”',
            choices: [{ text: 'Linu pede para ele explicar melhor.', translation: 'Linu pede para ele explicar melhor.', next: 'explica' }],
          },
          explica: {
            emoji: '🔭',
            text: '“Einstein dizia que o Sol, de tão pesado, curva a luz das estrelas que passa perto dele”, explica o Sr. Jorge. “Mas só dá para ver as estrelas perto do Sol durante um eclipse. Por isso vieram cá, e outra equipa foi para Sobral, no Brasil.”',
            translation: '“Einstein dizia que o Sol, de tão pesado, curva a luz das estrelas que passa perto dele”, explica seu Jorge. “Mas só dá para ver as estrelas perto do Sol durante um eclipse. Por isso vieram para cá, e outra equipe foi para Sobral, no Brasil.”',
            choices: [
              { text: '“Sobral, no Ceará? Então o Brasil também participou!”', translation: '“Sobral, no Ceará? Então o Brasil também participou!”', next: 'nuvens' },
              {
                text: 'Linu conclui que o eclipse foi visto à noite.',
                translation: 'Linu conclui que o eclipse foi visto de noite.',
                wrong: 'Um eclipse do Sol acontece de dia, quando a Lua tapa o Sol. Foi justamente por escurecer em pleno dia que as estrelas apareceram perto dele.',
              },
            ],
          },
          nuvens: {
            emoji: '☁️',
            text: '“Sim! E sabes que aqui quase correu mal?”, ri-se o Sr. Jorge. “Choveu de manhã e havia nuvens. Só no fim, entre as nuvens, conseguiram algumas fotografias boas. Foi preciso paciência, leve-leve.”',
            translation: '“Sim! E sabe que aqui quase deu errado?”, ri seu Jorge. “Choveu de manhã e tinha nuvens. Só no fim, entre as nuvens, conseguiram algumas fotos boas. Foi preciso paciência, com calma.”',
            choices: [
              { text: 'Linu fica a olhar para o céu, a imaginar o eclipse.', translation: 'Linu fica olhando o céu, imaginando o eclipse.', next: 'final_ceu' },
              { text: 'Linu quer ver as praias da ilha.', translation: 'Linu quer ver as praias da ilha.', next: 'final_praia' },
            ],
          },
          final_ceu: {
            emoji: '🌌',
            text: 'À noite, longe das luzes, o céu do Príncipe enche-se de estrelas. O Linu pensa nos cientistas de 1919, à espera das nuvens se abrirem. “Paciência e curiosidade”, diz o Sr. Jorge. “É assim que se descobre o mundo.”',
            translation: 'À noite, longe das luzes, o céu do Príncipe se enche de estrelas. O Linu pensa nos cientistas de 1919, esperando as nuvens abrirem. “Paciência e curiosidade”, diz seu Jorge. “É assim que se descobre o mundo.”',
            ending: {
              tone: 'bom',
              title: 'Estrelas sobre Sundy',
              message: 'Você descobriu que uma pequena ilha de língua portuguesa ajudou a confirmar a teoria da relatividade, e com uma ajuda de Sobral, no Ceará.',
            },
          },
          final_praia: {
            emoji: '🏖️',
            text: 'Vão a uma praia de areia dourada, com o obô a chegar até ao mar. É lindo, mas o Linu fica a pensar que podia ter ouvido mais histórias de Sundy.',
            translation: 'Vão a uma praia de areia dourada, com a floresta chegando até o mar. É lindo, mas o Linu fica pensando que podia ter ouvido mais histórias de Sundy.',
            ending: {
              tone: 'neutro',
              title: 'Praia em vez de estrelas',
              message: 'A praia valeu a pena, mas o céu de Sundy ficou para outra noite.',
            },
          },
        },
      },
    ],
  },
];
