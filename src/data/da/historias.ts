import type { StorySeed } from '../types';

/** Histórias interativas em dinamarquês: 3 por subnível, cada uma num lugar diferente. */
export const STORIES_DA: StorySeed[] = [
  // ───────────────────────── A1.1 ─────────────────────────
  {
    id: 'da-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Pølser i Nyhavn',
    emoji: '🌭',
    summary: 'Em Nyhavn, o porto colorido de Copenhague, o Linu conhece a Freja e prova o cachorro-quente dinamarquês.',
    cultural_context:
      'Nyhavn é um canal aberto no século XVII no centro de Copenhague, com casas coloridas e barcos de madeira; o escritor H. C. Andersen morou ali em três endereços diferentes. Pelas ruas da cidade, os carrinhos de cachorro-quente (pølsevogne) vendem a «rød pølse», uma salsicha tingida de vermelho.',
    start: 'start',
    glossary: [
      ['Hej! / Farvel!', 'Oi! / Tchau!'],
      ['Jeg hedder… / Hvem er du?', 'Eu me chamo… / Quem é você? (o «dd» de «hedder» é o «d» suave, quase o «th» do inglês «this»)'],
      ['sulten', 'com fome'],
      ['en pølse', 'uma salsicha, um cachorro-quente'],
      ['ja tak / nej tak', 'sim, obrigado / não, obrigado'],
      ['Jeg er tyve år.', 'Eu tenho vinte anos. (em dinamarquês a idade vai com «være»: «eu SOU vinte anos»)'],
      ['fem', 'cinco'],
      ['lækkert', 'gostoso, delicioso'],
    ],
    nodes: {
      start: {
        emoji: '⚓',
        text: 'København, Nyhavn. Husene er røde, gule og blå. Linu er sulten.',
        translation: 'Copenhague, Nyhavn. As casas são vermelhas, amarelas e azuis. O Linu está com fome.',
        choices: [
          { text: 'Linu går til en pølsevogn.', translation: 'O Linu vai até um carrinho de cachorro-quente.', next: 'vogn' },
          { text: 'Linu ser på bådene.', translation: 'O Linu olha os barcos.', next: 'baade' },
        ],
      },
      baade: {
        emoji: '⛵',
        text: 'Bådene er gamle og smukke.',
        translation: 'Os barcos são velhos e bonitos.',
        choices: [{ text: '«Nu: mad!»', translation: '«Agora: comida!»', next: 'vogn' }],
      },
      vogn: {
        emoji: '👩',
        text: '«Hej! Jeg hedder Freja. Hvem er du?»',
        translation: '«Oi! Eu me chamo Freja. Quem é você?»',
        choices: [
          { text: '«Hej! Jeg er Linu.»', translation: '«Oi! Eu sou o Linu.»', next: 'alder' },
          {
            text: '«Farvel, Freja!»',
            translation: '«Tchau, Freja!»',
            wrong: 'A Freja disse «Hej!» (Oi!) e perguntou «Hvem er du?» (Quem é você?). «Farvel» é «tchau»: o Linu nem se apresentou ainda! Responda «Jeg er Linu».',
          },
        ],
      },
      alder: {
        emoji: '🎂',
        text: '«Jeg er tyve år. Og du?»',
        translation: '«Eu tenho vinte anos. E você?»',
        choices: [
          { text: '«Jeg er fem år.»', translation: '«Eu tenho cinco anos.»', next: 'poelse' },
          { text: '«Jeg er også tyve!»', translation: '«Eu também tenho vinte!»', next: 'poelse' },
        ],
      },
      poelse: {
        emoji: '🌭',
        text: '«Er du sulten? Vil du have en pølse?»',
        translation: '«Você está com fome? Quer um cachorro-quente?»',
        choices: [
          { text: '«Ja tak!»', translation: '«Sim, obrigado!»', next: 'to' },
          {
            text: '«Nej tak, jeg er ikke sulten.»',
            translation: '«Não, obrigado, não estou com fome.»',
            wrong: 'A história começou dizendo «Linu er sulten»: o Linu ESTÁ com fome! «Sulten» quer dizer «com fome».',
          },
        ],
      },
      to: {
        emoji: '🌭',
        text: '«Her er to pølser. En til dig og en til mig.»',
        translation: '«Aqui estão dois cachorros-quentes. Um para você e um para mim.»',
        choices: [
          { text: 'Linu spiser en pølse.', translation: 'O Linu come um cachorro-quente.', next: 'final_bom' },
          { text: 'Linu spiser to pølser!', translation: 'O Linu come dois cachorros-quentes!', next: 'final_grisk' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu og Freja spiser sammen. Mmm, lækkert!',
        translation: 'O Linu e a Freja comem juntos. Hum, que delícia!',
        ending: { tone: 'bom', title: 'Cachorro-quente dividido', message: 'O Linu dividiu as salsichas e ganhou uma amiga em Copenhague.' },
      },
      final_grisk: {
        emoji: '😠',
        text: 'To pølser! Nu er Freja sulten… og sur.',
        translation: 'Dois cachorros-quentes! Agora a Freja está com fome… e brava.',
        ending: { tone: 'neutro', title: 'Pinguim guloso', message: 'A Freja disse «en til dig og en til mig» (um para você e um para mim). Tente de novo e divida!' },
      },
    },
  },
  {
    id: 'da-h2',
    level: 'A1.1',
    cefr: 'A1',
    title: 'To have i Skagen',
    emoji: '🌊',
    summary: 'Em Grenen, a pontinha norte da Dinamarca, o Linu conhece o Mads e fica com um pé em cada mar.',
    cultural_context:
      'Grenen, a ponta de areia de Skagen, é o extremo norte da Dinamarca: ali se encontram dois mares, o Skagerrak e o Kattegat, e dá para ficar com um pé em cada um. A luz especial de Skagen atraiu, no fim do século XIX, um grupo famoso de artistas, os «pintores de Skagen».',
    start: 'start',
    glossary: [
      ['to have', 'dois mares'],
      ['koldt / varmt', 'frio / quente'],
      ['en fod', 'um pé'],
      ['her / der', 'aqui / ali'],
      ['Det blæser.', 'Está ventando.'],
      ['tolv', 'doze'],
      ['glad', 'feliz (o «d» final é o «d» suave, e o «a» soa quase como «é»)'],
    ],
    nodes: {
      start: {
        emoji: '🏖️',
        text: 'Skagen, Grenen. Det er koldt, og det blæser.',
        translation: 'Skagen, Grenen. Está frio, e está ventando.',
        choices: [
          { text: 'Linu går til stranden.', translation: 'O Linu vai até a praia.', next: 'strand' },
          { text: 'Linu går hjem. Det er for koldt!', translation: 'O Linu vai para casa. Está frio demais!', next: 'final_hjem' },
        ],
      },
      strand: {
        emoji: '🧒',
        text: '«Hej! Jeg er Mads. Er du turist?»',
        translation: '«Oi! Eu sou o Mads. Você é turista?»',
        choices: [
          { text: '«Ja! Jeg er Linu, fra Antarktis.»', translation: '«Sou! Eu sou o Linu, da Antártida.»', next: 'have' },
          {
            text: '«Nej, jeg er Mads.»',
            translation: '«Não, eu sou o Mads.»',
            wrong: 'Mads é ELE! Ele perguntou «Er du turist?» (Você é turista?). Responda sobre você: «Ja, jeg er Linu».',
          },
        ],
      },
      have: {
        emoji: '🌊',
        text: '«Se! Her er to have.»',
        translation: '«Olhe! Aqui há dois mares.»',
        choices: [{ text: '«To have? Hvor?»', translation: '«Dois mares? Onde?»', next: 'forklaring' }],
      },
      forklaring: {
        emoji: '🗺️',
        text: '«Skagerrak er her, og Kattegat er der.»',
        translation: '«O Skagerrak é aqui, e o Kattegat é ali.»',
        choices: [
          { text: 'Linu står med en fod i hvert hav.', translation: 'O Linu fica com um pé em cada mar.', next: 'vand' },
          {
            text: '«Er Skagerrak og Kattegat to byer?»',
            translation: '«Skagerrak e Kattegat são duas cidades?»',
            wrong: 'O Mads disse «to have»: dois MARES («hav» = mar). O Skagerrak e o Kattegat são os dois mares que se encontram em Grenen.',
          },
        ],
      },
      vand: {
        emoji: '🥶',
        text: '«Vandet er koldt, ikke? Det er tolv grader.»',
        translation: '«A água está fria, né? Está doze graus.»',
        choices: [
          { text: '«Nej! Jeg er fra Antarktis. Tolv grader er varmt!»', translation: '«Não! Eu sou da Antártida. Doze graus é quente!»', next: 'final_bom' },
          { text: '«Brr! Farvel, Mads!»', translation: '«Brr! Tchau, Mads!»', next: 'final_hjem' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu og Mads står i to have. Linu er glad!',
        translation: 'O Linu e o Mads estão em dois mares. O Linu está feliz!',
        ending: { tone: 'bom', title: 'Um pé em cada mar', message: 'O Linu ficou no ponto mais ao norte da Dinamarca, com um pé no Skagerrak e outro no Kattegat.' },
      },
      final_hjem: {
        emoji: '🏠',
        text: 'Linu er hjemme. Grenen er der… uden Linu.',
        translation: 'O Linu está em casa. Grenen está lá… sem o Linu.',
        ending: { tone: 'neutro', title: 'Friozinho à toa', message: 'Um pinguim com frio?! Tente de novo e vá até a praia.' },
      },
    },
  },
  {
    id: 'da-h3',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Fossiler på Møn',
    emoji: '🪨',
    summary: 'Na praia embaixo de Møns Klint, o Linu conhece a Ida e ganha fósseis de milhões de anos.',
    cultural_context:
      'Møns Klint, na ilha de Møn, é um paredão de calcário branco que passa dos 100 metros de altura, formado há cerca de 70 milhões de anos por restos de minúsculos seres marinhos. Na praia, lá embaixo, é comum achar fósseis, como ouriços-do-mar petrificados.',
    start: 'start',
    glossary: [
      ['klinten', 'a falésia, o paredão'],
      ['hvid / høj', 'branco / alto'],
      ['stranden', 'a praia'],
      ['en sten', 'uma pedra'],
      ['et fossil', 'um fóssil'],
      ['elleve / et', 'onze / um (neutro)'],
      ['Pas på!', 'Cuidado!'],
      ['farlig', 'perigoso'],
    ],
    nodes: {
      start: {
        emoji: '🏞️',
        text: 'Møn. Klinten er hvid og høj. Linu er på stranden.',
        translation: 'Møn. A falésia é branca e alta. O Linu está na praia.',
        choices: [
          { text: 'Linu går til klinten.', translation: 'O Linu vai até a falésia.', next: 'paspaa' },
          { text: 'Linu ser på stenene.', translation: 'O Linu olha as pedras.', next: 'sten' },
        ],
      },
      paspaa: {
        emoji: '⚠️',
        text: 'En pige råber: «Hej! Pas på! Klinten er farlig!»',
        translation: 'Uma menina grita: «Oi! Cuidado! A falésia é perigosa!»',
        choices: [
          { text: 'Linu går tilbage.', translation: 'O Linu volta.', next: 'sten' },
          {
            text: 'Linu går helt tæt på klinten.',
            translation: 'O Linu chega bem pertinho da falésia.',
            wrong: 'A menina gritou «Pas på!» (Cuidado!) e disse que a falésia é «farlig» (perigosa). Pedras podem cair: fique longe do paredão!',
          },
        ],
      },
      sten: {
        emoji: '👧',
        text: '«Hej! Jeg er Ida. Se, en rund sten! Det er et fossil.»',
        translation: '«Oi! Eu sou a Ida. Olhe, uma pedra redonda! É um fóssil.»',
        choices: [{ text: '«Wow! Hej, Ida. Jeg er Linu.»', translation: '«Uau! Oi, Ida. Eu sou o Linu.»', next: 'tal' }],
      },
      tal: {
        emoji: '🔢',
        text: '«Jeg har elleve fossiler. Du har et. Vil du have to?»',
        translation: '«Eu tenho onze fósseis. Você tem um. Quer dois?»',
        choices: [
          { text: '«Ja tak, Ida!»', translation: '«Sim, obrigado, Ida!»', next: 'final_bom' },
          { text: 'Linu tager alle elleve!', translation: 'O Linu pega todos os onze!', next: 'final_grisk' },
          {
            text: '«Nej tak. Jeg har ti fossiler.»',
            translation: '«Não, obrigado. Eu tenho dez fósseis.»',
            wrong: 'A Ida disse «Du har et» (você tem UM). Quem tem «elleve» (onze) fósseis é ela!',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Nu har Linu tre fossiler. Han er meget glad!',
        translation: 'Agora o Linu tem três fósseis. Ele está muito feliz!',
        ending: { tone: 'bom', title: 'Tesouro de calcário', message: 'O Linu ganhou fósseis de milhões de anos e uma amiga em Møn.' },
      },
      final_grisk: {
        emoji: '😢',
        text: 'Linu har tolv fossiler. Ida har nul. Hun er ked af det.',
        translation: 'O Linu tem doze fósseis. A Ida tem zero. Ela está triste.',
        ending: { tone: 'neutro', title: 'Pinguim ganancioso', message: 'A Ida ofereceu dois, não todos! Tente de novo e aceite com educação.' },
      },
    },
  },
  // ───────────────────────── A1.2 ─────────────────────────
  {
    id: 'da-h4',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Eventyr i Odense',
    emoji: '📖',
    summary: 'Em Odense, a cidade natal de H. C. Andersen, o Linu visita o museu do escritor e se reconhece num dos contos.',
    cultural_context:
      'Hans Christian Andersen nasceu em Odense, na ilha de Fiônia, em 1805. Contos dele como «O Patinho Feio» e «A Pequena Sereia» estão entre os textos mais traduzidos do mundo, e a cidade tem um museu inteiro dedicado ao escritor.',
    start: 'start',
    glossary: [
      ['et eventyr / eventyret', 'um conto de fadas / o conto'],
      ['en bog / bøger', 'um livro / livros'],
      ['der er', 'há, tem'],
      ['Jeg kan lide…', 'Eu gosto de…'],
      ['en ælling / ællingen', 'um patinho / o patinho'],
      ['en svane', 'um cisne'],
      ['en havfrue', 'uma sereia'],
      ['grim', 'feio'],
    ],
    nodes: {
      start: {
        emoji: '🏘️',
        text: 'Linu er i Odense. Gaden er gammel, og husene er små og gule.',
        translation: 'O Linu está em Odense. A rua é antiga, e as casas são pequenas e amarelas.',
        choices: [
          { text: 'Linu går ind i museet.', translation: 'O Linu entra no museu.', next: 'museum' },
          { text: 'Linu køber en is først.', translation: 'O Linu compra um sorvete primeiro.', next: 'is' },
        ],
      },
      is: {
        emoji: '🍦',
        text: 'Isen er kold og god. Linu kan lide is!',
        translation: 'O sorvete é gelado e gostoso. O Linu gosta de sorvete!',
        choices: [{ text: 'Nu går Linu ind i museet.', translation: 'Agora o Linu entra no museu.', next: 'museum' }],
      },
      museum: {
        emoji: '🏛️',
        text: 'I museet er der mange bøger og billeder. En guide spørger: «Hej! Kan du lide eventyr?»',
        translation: 'No museu há muitos livros e quadros. Uma guia pergunta: «Oi! Você gosta de contos de fadas?»',
        choices: [
          { text: '«Ja! Jeg læser eventyr hver aften.»', translation: '«Gosto! Eu leio contos de fadas toda noite.»', next: 'eventyr' },
          { text: '«Nej, jeg kan ikke lide bøger.»', translation: '«Não, eu não gosto de livros.»', next: 'final_ud' },
        ],
      },
      eventyr: {
        emoji: '📚',
        text: '«Her er eventyrene af H.C. Andersen. Der er en havfrue, en tinsoldat og en grim ælling.»',
        translation: '«Aqui estão os contos de H. C. Andersen. Tem uma sereia, um soldadinho de chumbo e um patinho feio.»',
        choices: [
          { text: '«Jeg kan lide ællingen!»', translation: '«Eu gosto do patinho!»', next: 'aelling' },
          { text: '«Jeg kan lide havfruen.»', translation: '«Eu gosto da sereia.»', next: 'havfrue' },
        ],
      },
      havfrue: {
        emoji: '🧜',
        text: '«Havfruen er smuk, men eventyret er trist. Kom, der er også en ælling!»',
        translation: '«A sereia é linda, mas o conto é triste. Venha, também tem um patinho!»',
        choices: [{ text: 'Linu går med guiden.', translation: 'O Linu vai com a guia.', next: 'aelling' }],
      },
      aelling: {
        emoji: '🦢',
        text: '«Ællingen er grå og grim. Men til sidst er den en smuk svane!»',
        translation: '«O patinho é cinza e feio. Mas no fim ele é um cisne lindo!»',
        choices: [
          { text: '«Ligesom mig! Pingvinunger er også grå.»', translation: '«Igual a mim! Filhotes de pinguim também são cinza.»', next: 'final_bom' },
          {
            text: '«Så ællingen er en and til sidst?»',
            translation: '«Então no fim o patinho é um pato?»',
            wrong: 'A guia disse que no fim ele é «en smuk svane»: um cisne lindo! O «patinho feio» nunca foi pato de verdade.',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Guiden griner: «Du har ret! Måske er du også en svane.» Linu køber en bog med eventyrene.',
        translation: 'A guia ri: «Você tem razão! Talvez você também seja um cisne.» O Linu compra um livro com os contos.',
        ending: { tone: 'bom', title: 'O pinguim cisne', message: 'O Linu conheceu os contos de Andersen e descobriu que também foi um filhote cinza e desengonçado.' },
      },
      final_ud: {
        emoji: '🪑',
        text: 'Linu går ud igen. Han sidder alene på en bænk og spiser en is til.',
        translation: 'O Linu sai de novo. Ele fica sentado sozinho num banco e toma mais um sorvete.',
        ending: { tone: 'neutro', title: 'Sem contos de fadas', message: 'Ir à cidade de Andersen e não ver os contos dele? Tente de novo e diga «Ja!».' },
      },
    },
  },
  {
    id: 'da-h5',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Hos bageren i Den Gamle By',
    emoji: '🥐',
    summary: 'No museu a céu aberto de Aarhus, o Linu visita uma escola antiga e compra doces numa padaria de outros tempos.',
    cultural_context:
      'Den Gamle By («a cidade velha»), em Aarhus, é um museu a céu aberto: casas antigas de várias cidades dinamarquesas foram desmontadas e remontadas ali, formando uma cidadezinha de outros tempos. Funcionários vestidos à moda antiga trabalham nas lojas e oficinas.',
    start: 'start',
    glossary: [
      ['en bager / bageren', 'um padeiro / o padeiro (e também a padaria: «hos bageren»)'],
      ['et rundstykke / rundstykker', 'um pãozinho / pãezinhos'],
      ['en kanelsnegl / kanelsnegle', 'um caracol de canela / caracóis de canela'],
      ['i dag / i går', 'hoje / ontem'],
      ['frisk', 'fresco'],
      ['koster', 'custa'],
      ['Goddag!', 'Bom dia! Olá! (cumprimento mais formal)'],
    ],
    nodes: {
      start: {
        emoji: '🏘️',
        text: 'Linu er i Aarhus, i Den Gamle By. Der er gamle huse, en skole og en bager.',
        translation: 'O Linu está em Aarhus, na Den Gamle By. Há casas antigas, uma escola e uma padaria.',
        choices: [
          { text: 'Linu går til bageren.', translation: 'O Linu vai à padaria.', next: 'bager' },
          { text: 'Linu går til skolen.', translation: 'O Linu vai à escola.', next: 'skole' },
        ],
      },
      skole: {
        emoji: '🏫',
        text: 'I skolen er der små borde og en sort tavle. Læreren siger: «Goddag! Her skriver vi med kridt.»',
        translation: 'Na escola há mesinhas e um quadro-negro. O professor diz: «Bom dia! Aqui a gente escreve com giz.»',
        choices: [{ text: 'Linu skriver «Linu» på tavlen. Så går han til bageren.', translation: 'O Linu escreve «Linu» no quadro. Depois ele vai à padaria.', next: 'bager' }],
      },
      bager: {
        emoji: '🧑‍🍳',
        text: 'Bageren siger: «Goddag! Vi har kanelsnegle og rundstykker.»',
        translation: 'O padeiro diz: «Bom dia! Temos caracóis de canela e pãezinhos.»',
        choices: [{ text: '«Hvad koster en kanelsnegl?»', translation: '«Quanto custa um caracol de canela?»', next: 'pris' }],
      },
      pris: {
        emoji: '🪙',
        text: '«En kanelsnegl koster ti kroner. Kanelsneglene er fra i dag, men rundstykkerne er fra i går.»',
        translation: '«Um caracol de canela custa dez coroas. Os caracóis são de hoje, mas os pãezinhos são de ontem.»',
        choices: [
          { text: '«En kanelsnegl, tak!»', translation: '«Um caracol de canela, por favor!»', next: 'snegl' },
          { text: '«Åh nej! Jeg har ingen penge…»', translation: '«Ai, não! Eu não tenho dinheiro…»', next: 'final_ingen' },
          {
            text: '«Et rundstykke, tak. Det er friskt, ikke?»',
            translation: '«Um pãozinho, por favor. Está fresquinho, né?»',
            wrong: 'O padeiro disse que «rundstykkerne er fra i går»: os pãezinhos são de ONTEM. Os fresquinhos, de hoje («fra i dag»), são os caracóis de canela!',
          },
        ],
      },
      snegl: {
        emoji: '😋',
        text: 'Linu spiser kanelsneglen. Den er varm og sød.',
        translation: 'O Linu come o caracol de canela. Ele está quentinho e doce.',
        choices: [
          { text: '«Mmm! Jeg kan lide kanelsnegle. En til, tak!»', translation: '«Hum! Eu gosto de caracóis de canela. Mais um, por favor!»', next: 'final_bom' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Nu har Linu to kanelsnegle i maven. Den Gamle By er dejlig!',
        translation: 'Agora o Linu tem dois caracóis de canela na barriga. A Den Gamle By é uma delícia!',
        ending: { tone: 'bom', title: 'Doce viagem no tempo', message: 'O Linu passeou por uma cidade de antigamente e comprou o doce mais fresco da padaria.' },
      },
      final_ingen: {
        emoji: '😔',
        text: 'Bageren siger: «Så er der ingen kanelsnegl i dag.» Linu går sulten hjem.',
        translation: 'O padeiro diz: «Então hoje não tem caracol de canela.» O Linu vai para casa com fome.',
        ending: { tone: 'neutro', title: 'Bolso vazio', message: 'Sem coroas, sem caracol! Tente de novo: desta vez o Linu tem dinheiro.' },
      },
    },
  },
  {
    id: 'da-h6',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Sol over Gudhjem',
    emoji: '🐟',
    summary: 'Na ilha de Bornholm, o Linu entra num defumadouro de arenques e descobre o prato mais famoso da ilha.',
    cultural_context:
      'Bornholm é uma ilha dinamarquesa no mar Báltico, famosa pelos defumadouros de arenque com suas chaminés brancas. O prato típico se chama «Sol over Gudhjem» («sol sobre Gudhjem»): arenque defumado sobre pão de centeio, com uma gema crua no meio, rabanete e cebolinha.',
    start: 'start',
    glossary: [
      ['et røgeri / røgeriet', 'um defumadouro / o defumadouro'],
      ['en sild / silden', 'um arenque / o arenque'],
      ['røget', 'defumado'],
      ['rugbrød', 'pão de centeio (escuro e azedinho)'],
      ['en æggeblomme', 'uma gema de ovo'],
      ['rå', 'cru'],
      ['radiser / purløg', 'rabanetes / cebolinha'],
      ['Jeg kan (ikke) lide…', 'Eu (não) gosto de…'],
    ],
    nodes: {
      start: {
        emoji: '🏝️',
        text: 'Linu er på Bornholm, i byen Gudhjem. Solen skinner, og havet er blåt.',
        translation: 'O Linu está em Bornholm, na cidade de Gudhjem. O sol está brilhando, e o mar está azul.',
        choices: [
          { text: 'Linu går til røgeriet.', translation: 'O Linu vai ao defumadouro.', next: 'roegeri' },
          { text: 'Linu bader i havet.', translation: 'O Linu toma banho de mar.', next: 'bad' },
        ],
      },
      bad: {
        emoji: '🏊',
        text: 'Vandet er koldt, men Linu kan lide koldt vand. Nu er han sulten.',
        translation: 'A água está fria, mas o Linu gosta de água fria. Agora ele está com fome.',
        choices: [{ text: 'Linu går til røgeriet.', translation: 'O Linu vai ao defumadouro.', next: 'roegeri' }],
      },
      roegeri: {
        emoji: '🏭',
        text: 'Røgeriet har fem hvide skorstene. Der er røg, og det dufter af fisk.',
        translation: 'O defumadouro tem cinco chaminés brancas. Tem fumaça, e sente-se o cheiro de peixe.',
        choices: [{ text: 'Linu går ind.', translation: 'O Linu entra.', next: 'menu' }],
      },
      menu: {
        emoji: '📋',
        text: 'En mand siger: «Hej! Vi har røget sild, laks og rejer. Og vi har Sol over Gudhjem.»',
        translation: 'Um homem diz: «Oi! Temos arenque defumado, salmão e camarão. E temos Sol over Gudhjem.»',
        choices: [
          { text: '«Hvad er Sol over Gudhjem?»', translation: '«O que é Sol over Gudhjem?»', next: 'forklar' },
          { text: '«Jeg kan lide laks. Laks, tak!»', translation: '«Eu gosto de salmão. Salmão, por favor!»', next: 'final_laks' },
        ],
      },
      forklar: {
        emoji: '🍳',
        text: '«Det er en røget sild på rugbrød. Solen er en rå æggeblomme. Der er også radiser og purløg.»',
        translation: '«É um arenque defumado sobre pão de centeio. O sol é uma gema crua. Também tem rabanete e cebolinha.»',
        choices: [
          { text: '«Mmm! Jeg kan lide sild. En, tak!»', translation: '«Hum! Eu gosto de arenque. Um, por favor!»', next: 'sol' },
          {
            text: '«Så solen er et stegt æg?»',
            translation: '«Então o sol é um ovo frito?»',
            wrong: 'O homem disse «en rå æggeblomme»: uma gema CRUA. Não é ovo frito: o «sol» é a gema crua em cima do arenque.',
          },
        ],
      },
      sol: {
        emoji: '☀️',
        text: 'Linu spiser ved havet. Silden er varm, og æggeblommen er gul som solen.',
        translation: 'O Linu come à beira-mar. O arenque está quentinho, e a gema é amarela como o sol.',
        choices: [{ text: '«Tak! Det er lækkert!»', translation: '«Obrigado! Está uma delícia!»', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu er mæt og glad. Bornholm er en dejlig ø!',
        translation: 'O Linu está satisfeito e feliz. Bornholm é uma ilha maravilhosa!',
        ending: { tone: 'bom', title: 'Sol no prato', message: 'O Linu provou o prato mais famoso de Bornholm, com vista para o Báltico.' },
      },
      final_laks: {
        emoji: '🐟',
        text: 'Laksen er god. Men ved bordet ved siden af spiser en pige Sol over Gudhjem… og Linu er lidt misundelig.',
        translation: 'O salmão é gostoso. Mas na mesa ao lado uma menina come Sol over Gudhjem… e o Linu fica com um pouco de inveja.',
        ending: { tone: 'neutro', title: 'Faltou o sol', message: 'Salmão é bom, mas o prato típico da ilha ficou para outra vez. Tente de novo e pergunte o que é «Sol over Gudhjem».' },
      },
    },
  },
  // ───────────────────────── A2.1 ─────────────────────────
  {
    id: 'da-h7',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Vægteren i Ribe',
    emoji: '🏮',
    summary: 'Na cidade mais antiga da Dinamarca, o Linu encontra o vigia noturno e é convidado para a ronda da noite.',
    cultural_context:
      'Ribe, no sudoeste da Jutlândia, é a cidade mais antiga da Dinamarca, fundada nos anos 700, na era viking. Nas noites de verão, um vigia noturno (vægter) de roupa antiga, lanterna e bastão percorre as ruelas e canta os versos que os vigias cantavam séculos atrás.',
    start: 'start',
    glossary: [
      ['en vægter / vægteren', 'um vigia noturno / o vigia'],
      ['en lygte', 'uma lanterna'],
      ['en stor kirke / et højt tårn', 'uma igreja grande / uma torre alta'],
      ['et gammelt, gult hus', 'uma casa velha e amarela (com «et», o adjetivo ganha -t)'],
      ['Hvor…? / Hvornår…?', 'Onde…? / Quando…?'],
      ['i aften', 'hoje à noite'],
      ['på torvet / foran kirken', 'na praça / em frente à igreja'],
      ['fra / til', 'de / para'],
    ],
    nodes: {
      start: {
        emoji: '🚆',
        text: 'Linu kommer fra Esbjerg med toget. I Ribe er gaderne smalle, og husene er gamle og skæve.',
        translation: 'O Linu chega de Esbjerg de trem. Em Ribe, as ruas são estreitas, e as casas são velhas e tortas.',
        choices: [
          { text: 'Linu går direkte til torvet.', translation: 'O Linu vai direto para a praça.', next: 'torv' },
          { text: 'Linu spørger en dame: «Hvor er hotellet?»', translation: 'O Linu pergunta a uma senhora: «Onde fica o hotel?»', next: 'dame' },
        ],
      },
      dame: {
        emoji: '👵',
        text: '«Hotellet ligger på torvet, ved siden af domkirken. Det er et gammelt, gult hus.»',
        translation: '«O hotel fica na praça, ao lado da catedral. É uma casa velha e amarela.»',
        choices: [
          { text: '«Tak! Så går jeg til torvet.»', translation: '«Obrigado! Então vou para a praça.»', next: 'torv' },
          {
            text: '«Tak! Så hotellet er et stort, rødt hus?»',
            translation: '«Obrigado! Então o hotel é uma casa grande e vermelha?»',
            wrong: 'A senhora disse «et gammelt, gult hus»: uma casa VELHA e AMARELA. Repare no -t de «gammelt» e «gult»: é porque «hus» é neutro (et).',
          },
        ],
      },
      torv: {
        emoji: '⛪',
        text: 'På torvet står en stor kirke med et højt tårn. Foran kirken venter en mand med en lygte og en lang stok.',
        translation: 'Na praça há uma igreja grande com uma torre alta. Em frente à igreja, um homem espera com uma lanterna e um bastão comprido.',
        choices: [{ text: '«Goddag! Hvem er du?»', translation: '«Boa tarde! Quem é o senhor?»', next: 'vaegter' }],
      },
      vaegter: {
        emoji: '🏮',
        text: '«Jeg er vægteren! Hver aften går jeg rundt i byen og synger. I aften starter vi klokken ti. Vil du med?»',
        translation: '«Eu sou o vigia! Toda noite eu ando pela cidade e canto. Hoje à noite começamos às dez. Quer vir junto?»',
        choices: [
          { text: '«Ja! Hvor starter I?»', translation: '«Quero! Onde vocês começam?»', next: 'rute' },
          { text: '«Nej tak, jeg er træt. Jeg går i seng.»', translation: '«Não, obrigado, estou cansado. Vou dormir.»', next: 'final_seng' },
        ],
      },
      rute: {
        emoji: '🕙',
        text: '«Vi starter her, foran kirken. Først går vi ned til åen, og så går vi til rådhuset.»',
        translation: '«Começamos aqui, em frente à igreja. Primeiro descemos até o riacho, e depois vamos à prefeitura.»',
        choices: [
          { text: '«Godt! Jeg kommer klokken ti.»', translation: '«Ótimo! Eu venho às dez.»', next: 'tur' },
          {
            text: '«Så vi starter ved åen klokken tolv?»',
            translation: '«Então começamos no riacho, ao meio-dia?»',
            wrong: 'O vigia disse «klokken ti» (às dez) e que eles começam «her, foran kirken» (aqui, em frente à igreja). Só DEPOIS eles vão até o riacho («åen»).',
          },
        ],
      },
      tur: {
        emoji: '🌙',
        text: 'Klokken ti går de gennem byen. Vægteren synger en gammel sang, og mange turister følger efter ham.',
        translation: 'Às dez eles atravessam a cidade. O vigia canta uma canção antiga, e muitos turistas o seguem.',
        choices: [
          { text: 'Linu synger med.', translation: 'O Linu canta junto.', next: 'final_bom' },
          { text: 'Linu ser en kat i et vindue og går efter katten.', translation: 'O Linu vê um gato numa janela e vai atrás do gato.', next: 'final_vild' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Til sidst siger vægteren: «Du synger godt, lille pingvin! Kom igen i morgen.»',
        translation: 'No fim, o vigia diz: «Você canta bem, pinguinzinho! Volte amanhã.»',
        ending: { tone: 'bom', title: 'Vigia honorário', message: 'O Linu passeou pela cidade mais antiga da Dinamarca à luz da lanterna e ainda cantou junto.' },
      },
      final_vild: {
        emoji: '🐈',
        text: 'Katten løber ind i en smal gade. Nu er Linu alene, og alle gaderne ser ens ud.',
        translation: 'O gato corre para uma ruela. Agora o Linu está sozinho, e todas as ruas parecem iguais.',
        ending: { tone: 'neutro', title: 'Perdido em Ribe', message: 'Seguir gato em ruela antiga dá nisso! Tente de novo e fique com o vigia.' },
      },
      final_seng: {
        emoji: '😴',
        text: 'Linu sover på hotellet. Uden for vinduet synger vægteren… uden Linu.',
        translation: 'O Linu dorme no hotel. Do lado de fora da janela, o vigia canta… sem o Linu.',
        ending: { tone: 'neutro', title: 'Sono na hora errada', message: 'A ronda do vigia é o ponto alto da noite em Ribe. Tente de novo e diga «Ja!».' },
      },
    },
  },
  {
    id: 'da-h8',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Vikingeskibe i Roskilde',
    emoji: '⛵',
    summary: 'No Museu dos Navios Vikings de Roskilde, o Linu descobre por que os navios foram afundados e vai remar no fiorde.',
    cultural_context:
      'No Museu dos Navios Vikings de Roskilde estão cinco navios afundados de propósito por volta do ano 1070, para bloquear a entrada do fiorde e proteger a cidade de ataques. Eles foram retirados do fundo em 1962, e hoje o museu constrói cópias com as técnicas da época e sai com elas pelo fiorde.',
    start: 'start',
    glossary: [
      ['et skib / skibe / skibene', 'um navio / navios / os navios'],
      ['et langt, smalt skib', 'um navio comprido e estreito'],
      ['på fjorden / i fjorden', 'no fiorde (na superfície / dentro da água)'],
      ['en åre', 'um remo'],
      ['ro / sejle', 'remar / navegar'],
      ['Hvorfor…?', 'Por que…?'],
      ['i takt', 'no mesmo ritmo'],
      ['Vil du med?', 'Quer vir junto?'],
    ],
    nodes: {
      start: {
        emoji: '🏛️',
        text: 'I dag er Linu i Roskilde. Han besøger Vikingeskibsmuseet ved fjorden.',
        translation: 'Hoje o Linu está em Roskilde. Ele visita o Museu dos Navios Vikings, junto ao fiorde.',
        choices: [{ text: 'Linu går ind i hallen.', translation: 'O Linu entra no salão.', next: 'hal' }],
      },
      hal: {
        emoji: '⛵',
        text: 'I hallen ligger fem gamle skibe. Et skib er langt og smalt, et andet er bredt og kort.',
        translation: 'No salão estão cinco navios antigos. Um navio é comprido e estreito, outro é largo e curto.',
        choices: [
          { text: '«Hvorfor ligger skibene her?»', translation: '«Por que os navios estão aqui?»', next: 'guide' },
          { text: 'Linu tager et billede og går ud til havnen.', translation: 'O Linu tira uma foto e sai para o porto.', next: 'havn' },
        ],
      },
      guide: {
        emoji: '🧔',
        text: 'En guide svarer: «Omkring år 1070 sænker vikingerne fem skibe i fjorden. Så kan fjender ikke sejle til Roskilde.»',
        translation: 'Um guia responde: «Por volta do ano 1070, os vikings afundam cinco navios no fiorde. Assim os inimigos não conseguem navegar até Roskilde.»',
        choices: [
          { text: '«Spændende! Kan man sejle i et vikingeskib i dag?»', translation: '«Que interessante! Dá para navegar num navio viking hoje?»', next: 'havn' },
          {
            text: '«Så vikingerne sejler med skibene til Roskilde?»',
            translation: '«Então os vikings navegam com os navios até Roskilde?»',
            wrong: 'O guia disse que os vikings AFUNDAM («sænker») os navios no fiorde, justamente para que os inimigos NÃO consigam chegar a Roskilde («kan ikke sejle til Roskilde»).',
          },
        ],
      },
      havn: {
        emoji: '⚓',
        text: 'På havnen ligger nye skibe, bygget som i vikingetiden. En pige råber: «Vi sejler om ti minutter! Vil du med?»',
        translation: 'No porto há navios novos, construídos como na era viking. Uma moça grita: «Saímos em dez minutos! Quer vir junto?»',
        choices: [{ text: '«Ja tak!»', translation: '«Quero, sim!»', next: 'baad' }],
      },
      baad: {
        emoji: '🚣',
        text: 'Båden er smal og lang, og der er seksten årer. «Alle ror nu!» råber pigen. «En, to, en, to!»',
        translation: 'O barco é estreito e comprido, e há dezesseis remos. «Todo mundo rema agora!», grita a moça. «Um, dois, um, dois!»',
        choices: [
          { text: 'Linu ror i takt med de andre.', translation: 'O Linu rema no ritmo dos outros.', next: 'takt' },
          { text: 'Linu ror hurtigt, meget hurtigt, og helt alene.', translation: 'O Linu rema rápido, muito rápido, e sozinho.', next: 'final_rundt' },
        ],
      },
      takt: {
        emoji: '🌬️',
        text: 'Ude på fjorden er der god vind. Pigen siger: «Nu sejler vi med sejlet. I kan hvile jer.»',
        translation: 'Lá no fiorde há um bom vento. A moça diz: «Agora vamos à vela. Vocês podem descansar.»',
        choices: [
          { text: 'Linu sidder stille og ser på fjorden.', translation: 'O Linu fica sentado quietinho olhando o fiorde.', next: 'final_bom' },
          {
            text: '«Skal vi ro mere nu?»',
            translation: '«Agora a gente tem que remar mais?»',
            wrong: 'A moça disse que agora eles vão «med sejlet» (à vela) e que todos podem descansar («I kan hvile jer»). Nada de remar!',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Solen skinner på fjorden, og vinden er i sejlet. Linu er en rigtig viking i dag!',
        translation: 'O sol brilha no fiorde, e o vento enche a vela. O Linu é um viking de verdade hoje!',
        ending: { tone: 'bom', title: 'Viking por um dia', message: 'O Linu aprendeu a história dos navios afundados e ainda navegou numa cópia viking.' },
      },
      final_rundt: {
        emoji: '🔄',
        text: 'Båden drejer rundt og rundt. Pigen griner: «Pingviner er gode til at svømme, men ikke til at ro!»',
        translation: 'O barco gira e gira. A moça ri: «Pinguins são bons de nado, mas não de remo!»',
        ending: { tone: 'neutro', title: 'Remando em círculos', message: 'No barco viking, todo mundo rema no mesmo ritmo («i takt»). Tente de novo!' },
      },
    },
  },
  {
    id: 'da-h9',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Stenskibe ved Aalborg',
    emoji: '🪨',
    summary: 'Em Aalborg, o Linu pede informação, atravessa o Limfjord de ônibus e visita um cemitério viking com túmulos em forma de navio.',
    cultural_context:
      'Em Lindholm Høje, numa colina do outro lado do Limfjord, em frente a Aalborg, há um grande cemitério da Idade do Ferro e da era viking, com cerca de 700 túmulos. Muitos são marcados por pedras dispostas em forma de navio, os «stenskibe» (navios de pedra).',
    start: 'start',
    glossary: [
      ['på den anden side af', 'do outro lado de'],
      ['Tag bussen!', 'Pegue o ônibus!'],
      ['stå af', 'descer (do ônibus)'],
      ['ved museet', 'junto ao museu'],
      ['en lang bro', 'uma ponte comprida'],
      ['en grav / gravene', 'um túmulo / os túmulos'],
      ['Er det langt herfra?', 'É longe daqui?'],
    ],
    nodes: {
      start: {
        emoji: '🌉',
        text: 'Linu er i Aalborg. I dag vil han se Lindholm Høje, men hvor ligger det?',
        translation: 'O Linu está em Aalborg. Hoje ele quer ver Lindholm Høje, mas onde fica?',
        choices: [
          { text: 'Linu spørger en dreng på gaden.', translation: 'O Linu pergunta a um menino na rua.', next: 'dreng' },
          { text: 'Linu går bare mod nord.', translation: 'O Linu simplesmente anda para o norte.', next: 'nord' },
        ],
      },
      nord: {
        emoji: '🌧️',
        text: 'Linu går og går. Efter en time er han træt, og det regner.',
        translation: 'O Linu anda e anda. Depois de uma hora ele está cansado, e está chovendo.',
        choices: [{ text: 'Nu spørger Linu en dreng.', translation: 'Agora o Linu pergunta a um menino.', next: 'dreng' }],
      },
      dreng: {
        emoji: '🧒',
        text: 'Drengen siger: «Lindholm Høje ligger på den anden side af Limfjorden. Tag bussen fra banegården, og stå af ved museet.»',
        translation: 'O menino diz: «Lindholm Høje fica do outro lado do Limfjord. Pegue o ônibus na estação de trem e desça junto ao museu.»',
        choices: [
          { text: '«Tak! Så går jeg til banegården.»', translation: '«Obrigado! Então vou para a estação.»', next: 'bus' },
          {
            text: '«Tak! Så jeg står af ved kirken?»',
            translation: '«Obrigado! Então eu desço na igreja?»',
            wrong: 'O menino disse «stå af ved museet»: desça junto ao MUSEU. Ninguém falou de igreja!',
          },
        ],
      },
      bus: {
        emoji: '🚌',
        text: 'I bussen sidder en gammel dame med en stor hund. Bussen kører over en lang bro. «Skal du til Lindholm Høje?» spørger damen.',
        translation: 'No ônibus está sentada uma senhora com um cachorro grande. O ônibus passa por uma ponte comprida. «Você vai para Lindholm Høje?», pergunta a senhora.',
        choices: [
          { text: '«Ja! Er det langt herfra?»', translation: '«Vou! É longe daqui?»', next: 'dame' },
          { text: 'Linu leger med hunden og glemmer at stå af.', translation: 'O Linu brinca com o cachorro e esquece de descer.', next: 'final_forbi' },
        ],
      },
      dame: {
        emoji: '👵',
        text: '«Nej, det er tæt på. Der er mange gamle grave på bakken. Nogle er formet som et skib.»',
        translation: '«Não, é pertinho. Há muitos túmulos antigos na colina. Alguns têm forma de navio.»',
        choices: [{ text: 'Linu står af ved museet.', translation: 'O Linu desce junto ao museu.', next: 'hoje' }],
      },
      hoje: {
        emoji: '⛰️',
        text: 'På bakken er græsset grønt, og der ligger hundredvis af sten. Mange sten står i en lang, smal oval, ligesom et skib.',
        translation: 'Na colina a grama é verde, e há centenas de pedras. Muitas pedras formam um oval comprido e estreito, igual a um navio.',
        choices: [{ text: '«Hvorfor ser gravene ud som skibe?»', translation: '«Por que os túmulos parecem navios?»', next: 'skib' }],
      },
      skib: {
        emoji: '⛵',
        text: 'Et skilt forklarer det: måske er skibet en rejse til de dødes land. Linu sætter sig på en sten og ser ud over fjorden.',
        translation: 'Uma placa explica: talvez o navio seja uma viagem para a terra dos mortos. O Linu se senta numa pedra e olha o fiorde.',
        choices: [{ text: 'Linu bliver der, indtil solen går ned.', translation: 'O Linu fica ali até o sol se pôr.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Solen går ned over Limfjorden. Linu tænker på vikingerne. Det er et smukt og stille sted.',
        translation: 'O sol se põe sobre o Limfjord. O Linu pensa nos vikings. É um lugar bonito e tranquilo.',
        ending: { tone: 'bom', title: 'Navios de pedra', message: 'O Linu pediu informação, pegou o ônibus certo e viu os navios de pedra dos vikings.' },
      },
      final_forbi: {
        emoji: '🐕',
        text: 'Hunden er sød, men bussen kører langt væk fra Lindholm Høje. Linu er nu i en helt anden by!',
        translation: 'O cachorro é fofo, mas o ônibus vai para longe de Lindholm Høje. O Linu agora está numa cidade totalmente diferente!',
        ending: { tone: 'neutro', title: 'Distraído pelo cachorro', message: 'A senhora avisou que era pertinho! Tente de novo e desça junto ao museu («ved museet»).' },
      },
    },
  },
  // ───────────────────────── A2.2 ─────────────────────────
  {
    id: 'da-h10',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Sort sol ved Vadehavet',
    emoji: '🐦',
    summary: 'Com os amigos Karen e Anders, o Linu vai ao litoral do Mar de Wadden ver o «sol negro», a dança de milhares de estorninhos.',
    cultural_context:
      'Na primavera e no outono, nos pântanos costeiros do sudoeste da Jutlândia, junto ao Mar de Wadden, centenas de milhares de estorninhos voam juntos ao pôr do sol, desenhando figuras no céu e às vezes tapando a luz: os dinamarqueses chamam isso de «sort sol», «sol negro». O Mar de Wadden é Patrimônio Mundial da UNESCO.',
    start: 'start',
    glossary: [
      ['en stær / stære', 'um estorninho / estorninhos'],
      ['en flok / den store flok', 'um bando / o bando grande'],
      ['en kikkert', 'um binóculo'],
      ['sin / hans', 'dele (do próprio sujeito) / dele (de outra pessoa)'],
      ['så / har set', 'viu / já viu (pretérito / perfeito)'],
      ['marsken', 'o pântano costeiro'],
      ['diget', 'o dique'],
      ['blev til', 'virou, se transformou em'],
    ],
    nodes: {
      start: {
        emoji: '🌅',
        text: 'Sidste weekend tog Linu til marsken ved Vadehavet med sin veninde Karen og hendes bror, Anders. De ville se sort sol.',
        translation: 'No fim de semana passado, o Linu foi ao pântano junto ao Mar de Wadden com a amiga dele, a Karen, e o irmão dela, o Anders. Eles queriam ver o «sol negro».',
        choices: [{ text: 'Linu spurgte: «Hvad er sort sol?»', translation: 'O Linu perguntou: «O que é o sol negro?»', next: 'hvad' }],
      },
      hvad: {
        emoji: '🐦',
        text: 'Karen forklarede: «Om aftenen flyver tusindvis af stære sammen. Den store flok kan næsten skjule solen.»',
        translation: 'A Karen explicou: «À tardinha, milhares de estorninhos voam juntos. O bando grande consegue quase esconder o sol.»',
        choices: [
          { text: '«Har du set det før?»', translation: '«Você já viu isso antes?»', next: 'foer' },
          {
            text: '«Så sort sol er en solformørkelse?»',
            translation: '«Então o sol negro é um eclipse?»',
            wrong: 'A Karen explicou que são milhares de estorninhos («stære») voando juntos: é o bando grande que quase esconde o sol, não um eclipse.',
          },
        ],
      },
      foer: {
        emoji: '👀',
        text: '«Ja, mange gange», svarede Karen. «Men Anders har aldrig set det.» Anders havde sin nye kikkert med, men Karen havde ikke sin med.',
        translation: '«Já, muitas vezes», respondeu a Karen. «Mas o Anders nunca viu.» O Anders tinha levado o binóculo novo dele, mas a Karen não tinha trazido o dela.',
        choices: [{ text: 'De gik op på diget og ventede.', translation: 'Eles subiram no dique e esperaram.', next: 'dige' }],
      },
      dige: {
        emoji: '🌾',
        text: 'Klokken otte begyndte himlen at blive mørk. Pludselig kom de første fugle, så hundrede, så tusinde, og den lille flok blev til en kæmpe sky.',
        translation: 'Às oito, o céu começou a escurecer. De repente chegaram os primeiros pássaros, depois cem, depois mil, e o bandinho virou uma nuvem gigante.',
        choices: [
          { text: 'Linu var helt stille og kiggede op.', translation: 'O Linu ficou bem quietinho e olhou para cima.', next: 'sky' },
          { text: 'Linu råbte «Se! Se!» og viftede med vingerne.', translation: 'O Linu gritou «Olhe! Olhe!» e sacudiu as asas.', next: 'final_skraemt' },
        ],
      },
      sky: {
        emoji: '🖤',
        text: 'Anders gav Linu sin kikkert. «Se gennem min kikkert», sagde han. «Så kan du se hver enkelt fugl.»',
        translation: 'O Anders deu ao Linu o binóculo dele. «Olhe pelo meu binóculo», disse ele. «Assim você consegue ver cada pássaro.»',
        choices: [
          { text: 'Linu takkede Anders og kiggede gennem hans kikkert.', translation: 'O Linu agradeceu ao Anders e olhou pelo binóculo dele.', next: 'final_bom' },
          {
            text: 'Linu takkede Karen for hendes kikkert.',
            translation: 'O Linu agradeceu à Karen pelo binóculo dela.',
            wrong: 'Quem emprestou foi o ANDERS: «Anders gav Linu SIN kikkert», e «sin» aponta para o sujeito da frase, o Anders. A Karen nem tinha trazido o dela («havde ikke sin med»)!',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Bagefter sagde Linu: «Det er det smukkeste, jeg nogensinde har set!» Karen smilede: «Nu har du også set sort sol.»',
        translation: 'Depois o Linu disse: «É a coisa mais linda que eu já vi!» A Karen sorriu: «Agora você também já viu o sol negro.»',
        ending: { tone: 'bom', title: 'Sol negro', message: 'O Linu ficou quietinho no dique e viu o balé de milhares de estorninhos sobre o Mar de Wadden.' },
      },
      final_skraemt: {
        emoji: '🌫️',
        text: 'Fuglene fløj over til en anden mark langt væk. Linu så kun nogle små, sorte prikker. «Næste gang skal jeg være stille», tænkte han.',
        translation: 'Os pássaros voaram para outro campo, bem longe. O Linu só viu uns pontinhos pretos. «Da próxima vez vou ficar quieto», pensou ele.',
        ending: { tone: 'neutro', title: 'Pinguim barulhento', message: 'Para ver o sol negro de perto, silêncio! Tente de novo.' },
      },
    },
  },
  {
    id: 'da-h11',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Runestenene i Jelling',
    emoji: '📜',
    summary: 'Numa excursão com o amigo Emil, o Linu conhece as pedras rúnicas de Jelling, a «certidão de batismo» da Dinamarca.',
    cultural_context:
      'Em Jelling, no centro da Jutlândia, há duas pedras rúnicas do século X. A menor foi erguida pelo rei Gorm, o Velho, para a esposa, Thyra; a maior, pelo filho deles, Haroldo Dente-Azul (Harald Blåtand), que conta nela que conquistou toda a Dinamarca e a Noruega e tornou os dinamarqueses cristãos, e por isso é chamada de «certidão de batismo da Dinamarca». O conjunto, com dois grandes montes e uma igreja, é Patrimônio Mundial da UNESCO.',
    start: 'start',
    glossary: [
      ['en runesten / runestenene', 'uma pedra rúnica / as pedras rúnicas'],
      ['den store sten / den lille sten', 'a pedra grande / a pedra pequena'],
      ['rejste', 'ergueu'],
      ['sin kone / sine forældre', 'a (própria) esposa / os (próprios) pais'],
      ['mit billede / dit billede', 'a minha foto / a sua foto'],
      ['en dåbsattest', 'uma certidão de batismo'],
      ['har sovet', 'dormiu (perfeito)'],
      ['en høj', 'um monte, uma colina'],
    ],
    nodes: {
      start: {
        emoji: '🚗',
        text: 'I går tog Linu til Jelling med sin ven Emil. Emils mor kørte, og hun fortalte om vikingekongerne hele vejen.',
        translation: 'Ontem o Linu foi a Jelling com o amigo dele, o Emil. A mãe do Emil dirigiu, e ela falou dos reis vikings a viagem inteira.',
        choices: [
          { text: 'Linu lyttede til hende.', translation: 'O Linu prestou atenção nela.', next: 'kirke' },
          { text: 'Linu faldt i søvn på bagsædet.', translation: 'O Linu pegou no sono no banco de trás.', next: 'sov' },
        ],
      },
      sov: {
        emoji: '😴',
        text: 'Da Linu vågnede, var de allerede i Jelling. «Du har sovet hele vejen!» grinede Emil.',
        translation: 'Quando o Linu acordou, eles já estavam em Jelling. «Você dormiu a viagem inteira!», riu o Emil.',
        choices: [{ text: 'Linu gned øjnene og steg ud af bilen.', translation: 'O Linu esfregou os olhos e desceu do carro.', next: 'kirke' }],
      },
      kirke: {
        emoji: '⛪',
        text: 'Ved den hvide kirke stod to runesten. Den store sten var over to meter høj, og den lille sten var lidt ældre.',
        translation: 'Junto à igreja branca havia duas pedras rúnicas. A pedra grande tinha mais de dois metros de altura, e a pedra pequena era um pouco mais antiga.',
        choices: [{ text: '«Hvem har rejst stenene?»', translation: '«Quem ergueu as pedras?»', next: 'lille' }],
      },
      lille: {
        emoji: '👑',
        text: 'Emils mor forklarede: «Kong Gorm rejste den lille sten for sin kone, Thyra. Deres søn, Harald Blåtand, rejste den store sten for sine forældre.»',
        translation: 'A mãe do Emil explicou: «O rei Gorm ergueu a pedra pequena para a esposa dele, a Thyra. O filho deles, Haroldo Dente-Azul, ergueu a pedra grande para os pais dele.»',
        choices: [
          { text: '«Og hvad står der på den store sten?»', translation: '«E o que está escrito na pedra grande?»', next: 'store' },
          {
            text: '«Så Thyra var Harald Blåtands kone?»',
            translation: '«Então a Thyra era a esposa do Haroldo Dente-Azul?»',
            wrong: '«Gorm rejste den lille sten for SIN kone»: «sin» aponta para o sujeito, o Gorm. A Thyra era a esposa do Gorm e MÃE do Haroldo («deres søn» = o filho deles).',
          },
        ],
      },
      store: {
        emoji: '✝️',
        text: '«På stenen står der, at Harald vandt hele Danmark og Norge og gjorde danerne kristne», sagde hun. «Derfor kalder man den Danmarks dåbsattest.»',
        translation: '«Na pedra está escrito que o Haroldo conquistou toda a Dinamarca e a Noruega e tornou os dinamarqueses cristãos», disse ela. «Por isso ela é chamada de certidão de batismo da Dinamarca.»',
        choices: [
          { text: 'Linu tog et billede af den store sten med sin telefon.', translation: 'O Linu tirou uma foto da pedra grande com o celular dele.', next: 'foto' },
          { text: 'Linu løb op på den store høj og lagde sin telefon i græsset.', translation: 'O Linu subiu correndo o monte grande e deixou o celular na grama.', next: 'final_telefon' },
        ],
      },
      foto: {
        emoji: '📸',
        text: 'Emil tog også et billede med sin telefon. «Mit billede er bedre end dit», sagde han. «Nej, mit er det bedste!» svarede Linu.',
        translation: 'O Emil também tirou uma foto com o celular dele. «A minha foto é melhor que a sua», disse ele. «Não, a minha é a melhor!», respondeu o Linu.',
        choices: [{ text: 'De viste deres billeder til Emils mor.', translation: 'Eles mostraram as fotos deles para a mãe do Emil.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Emils mor lo: «Jeres billeder er begge flotte. Og nu har I set Danmarks dåbsattest!»',
        translation: 'A mãe do Emil riu: «As fotos de vocês dois estão lindas. E agora vocês já viram a certidão de batismo da Dinamarca!»',
        ending: { tone: 'bom', title: 'Certidão de batismo', message: 'O Linu aprendeu quem ergueu as pedras de Jelling e ainda voltou com uma foto (quase) perfeita.' },
      },
      final_telefon: {
        emoji: '📵',
        text: 'Om aftenen kunne Linu ikke finde sin telefon. Den lå stadig i græsset i Jelling, med alle hans billeder.',
        translation: 'À noite, o Linu não conseguia achar o celular dele. Ele ainda estava na grama em Jelling, com todas as fotos dele.',
        ending: { tone: 'neutro', title: 'Celular esquecido', message: 'Repare: «sin telefon» (o celular do próprio sujeito, o Linu) × «hans billeder» (as fotos dele, quando o sujeito da frase é outro: «den», o celular). Tente de novo e fique com o celular na mão!' },
      },
    },
  },
  {
    id: 'da-h12',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Holger Danske på Kronborg',
    emoji: '🏰',
    summary: 'No castelo de Kronborg, o castelo do Hamlet, o Linu e o primo Otto descem aos porões escuros para ver o herói que dorme.',
    cultural_context:
      'O castelo de Kronborg, em Helsingør, é o cenário de «Hamlet», de Shakespeare, e Patrimônio Mundial da UNESCO. Nos porões fica a estátua de Holger Danske, herói lendário que, segundo a lenda, dorme ali e vai acordar se a Dinamarca estiver em perigo.',
    start: 'start',
    glossary: [
      ['slottet / borggården', 'o castelo / o pátio do castelo'],
      ['kasematterne', 'os porões fortificados (casamatas)'],
      ['en lommelygte', 'uma lanterna de mão'],
      ['sin fætter / Ottos skridt', 'o (próprio) primo / os passos do Otto'],
      ['sit sværd og sit skjold', 'a espada e o escudo dele (palavras «et»: sit)'],
      ['i fare', 'em perigo'],
      ['At være eller ikke være', 'Ser ou não ser'],
    ],
    nodes: {
      start: {
        emoji: '⛴️',
        text: 'Sidste sommer besøgte Linu Kronborg i Helsingør med sin fætter, Otto. Fra slottet kunne de se Sverige på den anden side af Øresund.',
        translation: 'No verão passado, o Linu visitou Kronborg, em Helsingør, com o primo dele, o Otto. Do castelo eles conseguiam ver a Suécia do outro lado do Øresund.',
        choices: [{ text: 'De gik ind i den store borggård.', translation: 'Eles entraram no grande pátio do castelo.', next: 'gaard' }],
      },
      gaard: {
        emoji: '💀',
        text: 'I borggården mødte de en skuespiller. Han var klædt ud som Hamlet og holdt et kranium i hånden. «At være eller ikke være», sagde han dramatisk.',
        translation: 'No pátio eles encontraram um ator. Ele estava vestido de Hamlet e segurava uma caveira na mão. «Ser ou não ser», disse ele, dramático.',
        choices: [
          { text: 'Linu klappede højt.', translation: 'O Linu aplaudiu bem alto.', next: 'skuespil' },
          { text: 'Otto blev bange for kraniet og løb ned i kælderen.', translation: 'O Otto ficou com medo da caveira e correu para o porão.', next: 'kaelder' },
        ],
      },
      skuespil: {
        emoji: '🎭',
        text: 'Skuespilleren bukkede. «Tak! Har I været nede i kasematterne? Dernede sover Holger Danske. Men tag en lommelygte med, for der er meget mørkt.»',
        translation: 'O ator fez uma reverência. «Obrigado! Vocês já desceram às casamatas? Lá embaixo dorme o Holger Danske. Mas levem uma lanterna, porque é muito escuro.»',
        choices: [
          { text: 'Linu tog sin lille lommelygte frem, og de gik ned.', translation: 'O Linu pegou a lanterninha dele, e eles desceram.', next: 'kase' },
          {
            text: '«Så Holger Danske er en skuespiller ligesom dig?»',
            translation: '«Então o Holger Danske é um ator como você?»',
            wrong: 'O ator disse que o Holger Danske DORME («sover») lá embaixo, nos porões: é o herói da lenda, não um ator.',
          },
        ],
      },
      kaelder: {
        emoji: '🏃',
        text: 'Linu løb efter sin fætter. Nede i mørket kunne han ikke se noget, og han hørte kun Ottos skridt.',
        translation: 'O Linu correu atrás do primo. Lá embaixo, no escuro, ele não conseguia ver nada e só ouvia os passos do Otto.',
        choices: [{ text: 'Linu tog sin lille lommelygte frem.', translation: 'O Linu pegou a lanterninha dele.', next: 'kase' }],
      },
      kase: {
        emoji: '🗿',
        text: 'I lyset fra lommelygten så de en kæmpestor statue. Manden sad med sit sværd og sit skjold, og hans øjne var lukkede.',
        translation: 'Na luz da lanterna eles viram uma estátua enorme. O homem estava sentado com a espada e o escudo, e os olhos dele estavam fechados.',
        choices: [
          { text: '«Det er Holger Danske! Han sover, fordi Danmark ikke er i fare.»', translation: '«É o Holger Danske! Ele dorme porque a Dinamarca não está em perigo.»', next: 'fare' },
          { text: 'Otto råbte meget højt: «Vågn op!»', translation: 'O Otto gritou bem alto: «Acorde!»', next: 'final_vaagn' },
        ],
      },
      fare: {
        emoji: '🛡️',
        text: 'Otto hviskede: «Jeg kender legenden. Hvis Danmark kommer i fare, vågner han.» Linu nikkede: «Så lad os lade ham sove.»',
        translation: 'O Otto sussurrou: «Eu conheço a lenda. Se a Dinamarca estiver em perigo, ele acorda.» O Linu fez que sim: «Então vamos deixá-lo dormir.»',
        choices: [{ text: 'De gik stille op igen.', translation: 'Eles subiram de novo em silêncio.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Ude i solen spiste de is og så på skibene i Øresund. Det var en perfekt dag.',
        translation: 'Lá fora, no sol, eles tomaram sorvete e olharam os navios no Øresund. Foi um dia perfeito.',
        ending: { tone: 'bom', title: 'O herói continua dormindo', message: 'O Linu viu o Hamlet, desceu aos porões e deixou o Holger Danske dormir em paz.' },
      },
      final_vaagn: {
        emoji: '📢',
        text: 'Råbet gav ekko i hele kælderen. En vagt kom løbende: «Her skal man være stille!» De måtte gå ud med det samme.',
        translation: 'O grito ecoou no porão inteiro. Um segurança veio correndo: «Aqui é preciso fazer silêncio!» Eles tiveram de sair na mesma hora.',
        ending: { tone: 'neutro', title: 'Barulho no porão', message: 'O Holger Danske não acordou, mas o segurança, sim! Tente de novo com mais respeito.' },
      },
    },
  },
  // ───────────────────────── B1.1 ─────────────────────────
  {
    id: 'da-h13',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Drager på Fanø',
    emoji: '🪁',
    summary: 'O Linu pega a balsa de Esbjerg para a ilha de Fanø, onde o avô da amiga Sofie o espera com uma pipa gigante.',
    cultural_context:
      'Fanø fica bem em frente a Esbjerg, a uns 12 minutos de balsa. As praias largas e planas e o vento constante do Mar do Norte fazem da ilha um lugar famoso para empinar pipas: todo ano, em junho, gente do mundo inteiro se reúne ali num grande encontro de pipas.',
    start: 'start',
    glossary: [
      ['en drage', 'uma pipa (e também um dragão!)'],
      ['flyve med drage', 'empinar pipa'],
      ['færgen', 'a balsa'],
      ['skal / vil', 'vai (plano, obrigação) / quer, vai'],
      ['du må ikke…', 'você não pode…'],
      ['Hold fast! / Skynd dig!', 'Segure firme! / Depressa!'],
      ['glæde sig', 'estar ansioso (por algo bom)'],
      ['give slip', 'soltar'],
    ],
    nodes: {
      start: {
        emoji: '⛴️',
        text: 'Linu står på havnen i Esbjerg med sin veninde Sofie. «Skynd dig!» siger hun. «Færgen til Fanø sejler om fem minutter, og vi skal nå den.»',
        translation: 'O Linu está no porto de Esbjerg com a amiga dele, a Sofie. «Depressa!», diz ela. «A balsa para Fanø sai em cinco minutos, e a gente tem que pegá-la.»',
        choices: [
          { text: 'Linu skynder sig om bord.', translation: 'O Linu embarca correndo.', next: 'faerge' },
          { text: 'Linu vil først købe en is.', translation: 'O Linu quer comprar um sorvete primeiro.', next: 'is' },
        ],
      },
      is: {
        emoji: '🍦',
        text: 'Da Linu kommer tilbage med isen, sejler færgen lige ud af havnen. Sofie vinker fra dækket og råber: «Tag den næste! Jeg venter på dig på Fanø.»',
        translation: 'Quando o Linu volta com o sorvete, a balsa está saindo do porto. A Sofie acena do convés e grita: «Pegue a próxima! Eu te espero em Fanø.»',
        choices: [{ text: 'Linu sætter sig på en bænk og venter på den næste færge.', translation: 'O Linu se senta num banco e espera a próxima balsa.', next: 'strand' }],
      },
      faerge: {
        emoji: '🌊',
        text: 'På færgen sætter de sig ved vinduet. «I dag skal vi flyve med drage på stranden», fortæller Sofie. «Min morfar har bygget en kæmpe drage. Jeg glæder mig!»',
        translation: 'Na balsa, eles se sentam junto à janela. «Hoje vamos empinar pipa na praia», conta a Sofie. «O meu avô construiu uma pipa enorme. Estou ansiosa!»',
        choices: [
          { text: '«Jeg glæder mig også! Hvor stor er den?»', translation: '«Eu também estou ansioso! De que tamanho ela é?»', next: 'strand' },
          {
            text: '«Skal vi købe en drage på Fanø?»',
            translation: '«A gente vai comprar uma pipa em Fanø?»',
            wrong: 'A Sofie disse «Min morfar har bygget en kæmpe drage»: o avô dela JÁ CONSTRUIU uma pipa enorme. Não precisam comprar nada!',
          },
        ],
      },
      strand: {
        emoji: '🏖️',
        text: 'Stranden på Fanø er enorm og flad, og det blæser meget. Sofies morfar venter ved en stor, rød drage, som ligner en blæksprutte. «Velkommen, Linu! Vil du holde snoren?»',
        translation: 'A praia de Fanø é enorme e plana, e venta muito. O avô da Sofie espera ao lado de uma pipa grande e vermelha, que parece um polvo. «Bem-vindo, Linu! Quer segurar a linha?»',
        choices: [
          { text: '«Ja! Hvad skal jeg gøre?»', translation: '«Quero! O que eu tenho que fazer?»', next: 'instruks' },
          { text: '«Nej tak, jeg vil hellere se på.»', translation: '«Não, obrigado, prefiro ficar olhando.»', next: 'se' },
        ],
      },
      se: {
        emoji: '👀',
        text: 'Linu sætter sig i sandet og ser på alle dragerne på himlen. Efter en stund siger morfar: «Kom nu! Du må prøve, ellers fortryder du det.»',
        translation: 'O Linu se senta na areia e olha todas as pipas no céu. Depois de um tempo, o avô diz: «Venha! Você tem que experimentar, senão vai se arrepender.»',
        choices: [{ text: '«Okay, okay! Hvad skal jeg gøre?»', translation: '«Tá bom, tá bom! O que eu tenho que fazer?»', next: 'instruks' }],
      },
      instruks: {
        emoji: '🪁',
        text: '«Hold snoren med begge hænder!» siger morfar. «Når jeg råber, skal du løbe mod vinden. Og husk: du må ikke give slip!»',
        translation: '«Segure a linha com as duas mãos!», diz o avô. «Quando eu gritar, você tem que correr contra o vento. E lembre-se: você não pode soltar!»',
        choices: [
          { text: 'Morfar råber, og Linu løber mod vinden med snoren i begge vinger.', translation: 'O avô grita, e o Linu corre contra o vento com a linha nas duas asas.', next: 'flyv' },
          {
            text: '«Så jeg skal give slip, når du råber?»',
            translation: '«Então eu tenho que soltar quando você gritar?»',
            wrong: 'O avô disse «du må ikke give slip»: você NÃO pode soltar! Quando ele gritar, é para CORRER contra o vento («løbe mod vinden»). Atenção: em dinamarquês, «må ikke» é proibição, não «não precisa».',
          },
        ],
      },
      flyv: {
        emoji: '🐙',
        text: 'Dragen stiger højt op. Pludselig kommer et kraftigt vindstød, og Linu bliver løftet lidt op fra jorden! «Hold fast!» råber Sofie.',
        translation: 'A pipa sobe bem alto. De repente vem uma rajada forte de vento, e o Linu é levantado um pouco do chão! «Segure firme!», grita a Sofie.',
        choices: [
          { text: 'Linu holder fast og borer fødderne ned i sandet.', translation: 'O Linu segura firme e finca os pés na areia.', next: 'final_bom' },
          { text: 'Linu bliver bange og giver slip.', translation: 'O Linu fica com medo e solta.', next: 'final_vaek' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Morfar skynder sig hen og hjælper, og sammen styrer de dragen. Om aftenen spiser de fiskefrikadeller hos morfar. «Næste år vil jeg bygge min egen drage», siger Linu.',
        translation: 'O avô corre para ajudar, e juntos eles controlam a pipa. À noite, eles comem bolinhos de peixe na casa do avô. «No ano que vem vou construir a minha própria pipa», diz o Linu.',
        ending: { tone: 'bom', title: 'Pinguim piloto', message: 'O Linu segurou firme, seguiu as instruções e empinou um polvo gigante no céu de Fanø.' },
      },
      final_vaek: {
        emoji: '💨',
        text: 'Dragen flyver væk over klitterne og forsvinder. Morfar sukker: «Nå, så må vi bygge en ny til næste år.» Linu skammer sig lidt.',
        translation: 'A pipa voa para longe sobre as dunas e desaparece. O avô suspira: «Bom, então vamos ter que construir outra para o ano que vem.» O Linu fica um pouco envergonhado.',
        ending: { tone: 'neutro', title: 'Pipa perdida', message: 'O avô avisou: «Du må ikke give slip!» Tente de novo e segure firme.' },
      },
    },
  },
  {
    id: 'da-h14',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Sankthansaften i Hornbæk',
    emoji: '🔥',
    summary: 'Na noite de São João, o Linu vai à praia de Hornbæk com o amigo Mikkel: fogueira, bruxa de palha e a canção de verão.',
    cultural_context:
      'Na noite de 23 de junho, a sankthansaften, os dinamarqueses acendem fogueiras em praias e parques, muitas vezes com uma bruxa de pano e palha no topo, e cantam a «Midsommervisen» («Vi elsker vort land»), com letra de Holger Drachmann, de 1885. Diz-se que a bruxa «voa» para o Bloksbjerg, o monte Brocken, na Alemanha.',
    start: 'start',
    glossary: [
      ['sankthansaften', 'a noite de São João (23 de junho)'],
      ['et bål / bålet', 'uma fogueira / a fogueira'],
      ['en heks / heksen', 'uma bruxa / a bruxa'],
      ['halv ti', 'nove e meia (!): «meia para as dez»'],
      ['Tag … med!', 'Traga…!'],
      ['more sig', 'divertir-se'],
      ['øve sig', 'praticar, treinar'],
      ['føle sig', 'sentir-se'],
    ],
    nodes: {
      start: {
        emoji: '📱',
        text: 'Linu får en besked fra sin ven Mikkel: «Kom til sankthans på stranden i Hornbæk i aften! Vi skal have bål og pølser. Tag gerne en pose brænde med.»',
        translation: 'O Linu recebe uma mensagem do amigo Mikkel: «Venha para o São João na praia de Hornbæk hoje à noite! Vamos ter fogueira e salsichas. Se puder, traga um saco de lenha.»',
        choices: [
          { text: 'Linu køber en pose brænde og tager toget til Hornbæk.', translation: 'O Linu compra um saco de lenha e pega o trem para Hornbæk.', next: 'strand' },
          {
            text: 'Linu svarer: «Skal jeg tage pølser med?»',
            translation: 'O Linu responde: «Eu tenho que levar salsichas?»',
            wrong: 'O Mikkel pediu «en pose brænde»: um saco de LENHA. As salsichas eles já vão ter («Vi skal have bål og pølser»).',
          },
        ],
      },
      strand: {
        emoji: '🏖️',
        text: 'På stranden står et stort bål, og øverst sidder en heks, lavet af halm og gammelt tøj. «Hvorfor er der en heks på bålet?» spørger Linu. Mikkel smiler: «Det er tradition. Du skal bare se!»',
        translation: 'Na praia há uma fogueira grande, e lá no alto está sentada uma bruxa feita de palha e roupa velha. «Por que tem uma bruxa na fogueira?», pergunta o Linu. O Mikkel sorri: «É tradição. Você vai ver!»',
        choices: [
          { text: '«Må jeg hjælpe med heksen?»', translation: '«Posso ajudar com a bruxa?»', next: 'heks' },
          { text: '«Hvornår tænder I bålet?»', translation: '«Quando vocês acendem a fogueira?»', next: 'tid' },
        ],
      },
      heks: {
        emoji: '🧹',
        text: 'Mikkels mor giver ham en gammel kost. «Sæt kosten fast i heksens hånd! Så kan hun flyve til Bloksbjerg i Tyskland, siger man.»',
        translation: 'A mãe do Mikkel dá a ele uma vassoura velha. «Prenda a vassoura na mão da bruxa! Assim ela pode voar até o Bloksbjerg, na Alemanha, é o que dizem.»',
        choices: [{ text: 'Linu sætter kosten fast og ser sig tilfreds omkring.', translation: 'O Linu prende a vassoura e olha em volta, satisfeito.', next: 'tid' }],
      },
      tid: {
        emoji: '🕤',
        text: 'Mikkel forklarer: «Vi tænder bålet klokken halv ti, når solen er ved at gå ned. Indtil da kan vi grille pølser og bade.»',
        translation: 'O Mikkel explica: «A gente acende a fogueira às nove e meia, quando o sol está se pondo. Até lá, podemos assar salsichas e tomar banho de mar.»',
        choices: [
          { text: 'Linu griller pølser og bader i havet.', translation: 'O Linu assa salsichas e toma banho de mar.', next: 'bad' },
          {
            text: '«Halv ti? Altså efter klokken ti. Så har jeg god tid.»',
            translation: '«Halv ti? Ou seja, depois das dez. Então tenho bastante tempo.»',
            wrong: 'Cuidado com as horas: «halv ti» é «meia hora ANTES das dez», ou seja, 21h30, e não 10h30! Em dinamarquês, o «halv» conta para a hora seguinte.',
          },
        ],
      },
      bad: {
        emoji: '🌊',
        text: 'Vandet er koldt, men Linu morer sig. Så begynder alle at samle sig om bålet. «Nu skal vi synge!» råber Mikkel.',
        translation: 'A água está fria, mas o Linu se diverte. Então todos começam a se reunir em volta da fogueira. «Agora vamos cantar!», grita o Mikkel.',
        choices: [
          { text: 'Linu stiller sig ved siden af Mikkel.', translation: 'O Linu se coloca ao lado do Mikkel.', next: 'sang' },
          { text: 'Linu bliver i vandet. Han vil svømme lidt mere.', translation: 'O Linu fica na água. Ele quer nadar mais um pouco.', next: 'final_svoem' },
        ],
      },
      sang: {
        emoji: '🔥',
        text: 'Bålet brænder, og alle synger «Vi elsker vort land». Linu kan ikke teksten, men han nynner med.',
        translation: 'A fogueira arde, e todos cantam «Vi elsker vort land» («Nós amamos a nossa terra»). O Linu não sabe a letra, mas cantarola junto.',
        choices: [{ text: '«Kan du lære mig sangen til næste år?»', translation: '«Você pode me ensinar a canção para o ano que vem?»', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Mikkel smiler: «Selvfølgelig! Men så skal du øve dig hele året.» Heksen forsvinder i røgen, og Linu føler sig som en ægte dansker.',
        translation: 'O Mikkel sorri: «Claro! Mas aí você vai ter que treinar o ano inteiro.» A bruxa some na fumaça, e o Linu se sente um dinamarquês de verdade.',
        ending: { tone: 'bom', title: 'Noite de São João', message: 'O Linu levou a lenha, entendeu o «halv ti» e cantou (quase) junto em volta da fogueira.' },
      },
      final_svoem: {
        emoji: '🌙',
        text: 'Da Linu endelig kommer op af vandet, er bålet brændt ned, og alle er gået hjem. Han må nøjes med en kold pølse.',
        translation: 'Quando o Linu finalmente sai da água, a fogueira já se apagou, e todos foram para casa. Ele tem que se contentar com uma salsicha fria.',
        ending: { tone: 'neutro', title: 'Mergulho longo demais', message: 'Pinguim na água perde a noção do tempo! Tente de novo e vá cantar em volta da fogueira.' },
      },
    },
  },
  {
    id: 'da-h15',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Op på Himmelbjerget',
    emoji: '⛰️',
    summary: 'Perto de Silkeborg, o Linu e a amiga Louise vão de barco a vapor até a «montanha do céu» e precisam voltar a tempo.',
    cultural_context:
      'O Himmelbjerget («a montanha do céu»), perto de Silkeborg, tem só 147 metros de altura, mas já foi considerado o ponto mais alto da Dinamarca — hoje se sabe que não é. Dá para chegar lá pelos lagos no «Hjejlen», um barco a vapor com rodas de pás que navega desde 1861.',
    start: 'start',
    glossary: [
      ['vil / skal', 'quer, vai / vai (plano), tem que'],
      ['vi må skynde os', 'temos que nos apressar'],
      ['Kom ikke for sent!', 'Não se atrase!'],
      ['kvart over fire', 'quatro e quinze'],
      ['Slap af!', 'Relaxe!'],
      ['hvile sig / sætte sig', 'descansar / sentar-se'],
      ['en madpakke', 'uma marmita, lanche embrulhado'],
      ['ærgre sig', 'ficar chateado (consigo mesmo)'],
    ],
    nodes: {
      start: {
        emoji: '🚢',
        text: 'Linu og hans veninde Louise vil op på Himmelbjerget. «Vi skal sejle med Hjejlen fra Silkeborg», siger Louise. «Det er et gammelt dampskib. Du vil elske det!»',
        translation: 'O Linu e a amiga dele, a Louise, querem subir o Himmelbjerget. «Vamos de Hjejlen a partir de Silkeborg», diz a Louise. «É um barco a vapor antigo. Você vai adorar!»',
        choices: [{ text: 'Linu glæder sig og køber to billetter.', translation: 'O Linu fica animado e compra duas passagens.', next: 'dampskib' }],
      },
      dampskib: {
        emoji: '♨️',
        text: 'Hjejlen tøffer langsomt over søerne, og røgen stiger op fra skorstenen. Kaptajnen siger: «Husk: den sidste båd tilbage til Silkeborg sejler kvart over fire. Kom ikke for sent!»',
        translation: 'O Hjejlen avança devagar pelos lagos, e a fumaça sobe da chaminé. O capitão diz: «Lembrem-se: o último barco de volta para Silkeborg sai às quatro e quinze. Não se atrasem!»',
        choices: [
          { text: '«Tak! Vi skal nok være her.»', translation: '«Obrigado! Pode deixar que estaremos aqui.»', next: 'bred' },
          {
            text: '«Fint, så kan vi tage en båd tilbage klokken fem.»',
            translation: '«Ótimo, então podemos pegar um barco de volta às cinco.»',
            wrong: '«Kvart over fire» é 16h15, e o capitão disse que é o ÚLTIMO barco de volta («den sidste båd»). Às cinco já não tem mais barco!',
          },
        ],
      },
      bred: {
        emoji: '🌲',
        text: 'Båden lægger til ved foden af bakken. Stien op gennem skoven er stejl. «Skynd dig ikke så meget», siger Louise. «Vi har god tid.»',
        translation: 'O barco atraca ao pé do morro. A trilha que sobe pelo bosque é íngreme. «Não se apresse tanto», diz a Louise. «Temos bastante tempo.»',
        choices: [
          { text: 'Linu går roligt og nyder skoven.', translation: 'O Linu vai com calma e aproveita o bosque.', next: 'top' },
          { text: 'Linu løber hele vejen op.', translation: 'O Linu sobe correndo o caminho todo.', next: 'loeb' },
        ],
      },
      loeb: {
        emoji: '🥵',
        text: 'Linu når toppen først, men så må han sætte sig på en bænk. Han har ondt i fødderne og kan næsten ikke trække vejret.',
        translation: 'O Linu chega primeiro ao topo, mas aí tem que se sentar num banco. Os pés dele doem, e ele mal consegue respirar.',
        choices: [{ text: 'Linu hviler sig og venter på Louise.', translation: 'O Linu descansa e espera a Louise.', next: 'top' }],
      },
      top: {
        emoji: '🗼',
        text: 'På toppen står et højt tårn. Louise læser skiltet: «Himmelbjerget er 147 meter højt. Engang troede man, at det var Danmarks højeste punkt.» Linu griner: «I Antarktis har vi bjerge på næsten 5000 meter!»',
        translation: 'No topo há uma torre alta. A Louise lê a placa: «O Himmelbjerget tem 147 metros de altura. Antigamente se achava que era o ponto mais alto da Dinamarca.» O Linu ri: «Na Antártida temos montanhas de quase 5000 metros!»',
        choices: [
          { text: '«Skal vi gå op i tårnet?»', translation: '«Vamos subir na torre?»', next: 'taarn' },
          {
            text: '«Så Himmelbjerget er Danmarks højeste punkt?»',
            translation: '«Então o Himmelbjerget é o ponto mais alto da Dinamarca?»',
            wrong: 'A placa diz «Engang troede man…»: ANTIGAMENTE achavam que era o ponto mais alto. Hoje se sabe que não é.',
          },
        ],
      },
      taarn: {
        emoji: '👀',
        text: 'Fra tårnet kan de se søer og skove, så langt øjet rækker. «Lad os spise vores madpakker her», foreslår Louise. Pludselig kigger Linu på uret: klokken er fire!',
        translation: 'Da torre eles veem lagos e bosques a perder de vista. «Vamos comer os nossos lanches aqui», sugere a Louise. De repente, o Linu olha o relógio: são quatro horas!',
        choices: [
          { text: '«Vi må skynde os ned til båden!»', translation: '«Temos que correr para o barco!»', next: 'final_bom' },
          { text: '«Slap af, vi har masser af tid.»', translation: '«Relaxe, temos tempo de sobra.»', next: 'final_sent' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'De løber ned ad stien og når båden i sidste øjeblik. På vejen tilbage spiser de madpakkerne på dækket. «I morgen skal vi bare slappe af», siger Louise, og Linu er helt enig.',
        translation: 'Eles descem a trilha correndo e pegam o barco no último minuto. Na volta, comem os lanches no convés. «Amanhã a gente só vai descansar», diz a Louise, e o Linu concorda plenamente.',
        ending: { tone: 'bom', title: 'No último minuto', message: 'O Linu lembrou do «kvart over fire» e voltou de barco a vapor, com vista para os lagos.' },
      },
      final_sent: {
        emoji: '😬',
        text: 'Da de kommer ned, sejler Hjejlen lige ud fra broen. Nu må de vente en time på en bus, og Linu ærgrer sig.',
        translation: 'Quando eles chegam lá embaixo, o Hjejlen está saindo do cais. Agora eles têm que esperar uma hora por um ônibus, e o Linu fica chateado consigo mesmo.',
        ending: { tone: 'neutro', title: 'Barco perdido', message: 'O último barco saía «kvart over fire» (16h15), e já eram quatro horas! Tente de novo e apresse-se.' },
      },
    },
  },
  // ───────────────────────── B1.2 ─────────────────────────
  {
    id: 'da-h16',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Sort sol i marsken',
    emoji: '🐦',
    summary: 'Na marisma perto de Tønder, o Linu espera o pôr do sol com a amiga Karen para ver o «sol negro», a dança de milhares de estorninhos.',
    cultural_context:
      'No sudoeste da Jutlândia, perto de Tønder e Ribe, centenas de milhares de estorninhos se reúnem na primavera e no outono sobre a marisma do Mar de Wadden. Ao pôr do sol, voam juntos em formações que escurecem o céu: é o «sort sol», o «sol negro». O Mar de Wadden dinamarquês é Patrimônio Mundial da UNESCO desde 2014.',
    start: 'start',
    glossary: [
      ['stære', 'estorninhos'],
      ['marsken', 'a marisma, o pântano costeiro'],
      ['flokken', 'o bando'],
      ['diget', 'o dique'],
      ['sivene', 'os juncos'],
      ['selvom', 'embora, mesmo que'],
      ['var gået ned', 'tinha se posto (mais-que-perfeito)'],
      ['kikkert', 'binóculo'],
    ],
    nodes: {
      start: {
        emoji: '🌾',
        text: 'Det var en kold aften i september, og Linu var kommet til marsken ved Tønder. Hans veninde Karen havde lovet at vise ham sort sol, som hun havde set mange gange som barn. Hun sagde, at stærene først ville komme, når solen var gået ned.',
        translation: 'Era um fim de tarde frio de setembro, e o Linu tinha chegado à marisma perto de Tønder. Sua amiga Karen tinha prometido mostrar a ele o «sol negro», que ela tinha visto muitas vezes quando criança. Ela disse que os estorninhos só viriam quando o sol tivesse se posto.',
        choices: [
          { text: 'Linu fulgte med Karen op på diget.', translation: 'O Linu acompanhou a Karen até o alto do dique.', next: 'diget' },
          { text: 'Linu spurgte, om han måtte tage billeder med blitz.', translation: 'O Linu perguntou se podia tirar fotos com flash.', next: 'blitz' },
          {
            text: 'Linu sagde, at han hellere ville se fuglene i morgen tidlig.',
            translation: 'O Linu disse que preferia ver os pássaros no dia seguinte, de manhã cedo.',
            wrong: 'A Karen disse que os estorninhos só viriam «når solen var gået ned» — QUANDO o sol TIVESSE SE POSTO. O espetáculo do sort sol é no fim da tarde, não de manhã.',
          },
        ],
      },
      blitz: {
        emoji: '📸',
        text: 'Karen rystede på hovedet. Hun forklarede, at et skarpt lys kan skræmme flokken, så den ikke lander, hvor den plejer. Linu lagde kameraet tilbage i tasken, selvom han var lidt skuffet.',
        translation: 'A Karen balançou a cabeça. Ela explicou que uma luz forte pode assustar o bando, de modo que ele não pousa onde costuma pousar. O Linu guardou a câmera de volta na bolsa, embora estivesse um pouco decepcionado.',
        choices: [
          { text: 'Linu gik med Karen op på diget.', translation: 'O Linu subiu o dique com a Karen.', next: 'diget' },
          {
            text: 'Linu tændte blitzen, fordi Karen havde sagt, at fuglene ikke var bange for lys.',
            translation: 'O Linu ligou o flash, porque a Karen tinha dito que os pássaros não tinham medo de luz.',
            wrong: 'A Karen disse o contrário: uma luz forte pode assustar o bando, «så den ikke lander» — de modo que ele NÃO pousa. Repare no «ikke» antes do verbo: na oração subordinada, ele vem antes do verbo conjugado.',
          },
        ],
      },
      diget: {
        emoji: '🔭',
        text: 'Fra diget kunne de se marsken, der var flad og grøn, så langt øjet rakte. Karen fortalte, at hendes bedstefar havde været landmand her, før han flyttede ind til byen. Pludselig opdagede Linu, at han havde glemt sin kikkert i bilen.',
        translation: 'Do dique eles viam a marisma, plana e verde até onde a vista alcançava. A Karen contou que o avô dela tinha sido agricultor ali antes de se mudar para a cidade. De repente, o Linu percebeu que tinha esquecido o binóculo no carro.',
        choices: [
          { text: 'Linu løb tilbage til bilen efter kikkerten.', translation: 'O Linu correu de volta ao carro para buscar o binóculo.', next: 'bilen' },
          { text: 'Linu besluttede, at han ikke behøvede kikkerten.', translation: 'O Linu decidiu que não precisava do binóculo.', next: 'uden' },
        ],
      },
      bilen: {
        emoji: '🚗',
        text: 'Bilen stod længere væk, end Linu havde troet. Da han endelig kom tilbage med kikkerten, var himlen næsten mørk, og fuglene var allerede landet i sivene. Karen trøstede ham og sagde, at de kunne komme igen i morgen aften.',
        translation: 'O carro estava mais longe do que o Linu tinha pensado. Quando ele finalmente voltou com o binóculo, o céu estava quase escuro, e os pássaros já tinham pousado nos juncos. A Karen o consolou e disse que eles podiam voltar na noite seguinte.',
        ending: { tone: 'neutro', title: 'Por um binóculo', message: 'Enquanto o Linu buscava o binóculo, o sol negro aconteceu sem ele. Amanhã tem outra chance!' },
      },
      uden: {
        emoji: '🌇',
        text: 'Linu blev stående på diget, selvom han ikke havde kikkerten med. Kort efter at solen var gået ned, kom de første små flokke ind fra havet. Karen hviskede, at de store flokke snart ville komme bagefter.',
        translation: 'O Linu ficou no dique, mesmo sem ter o binóculo. Pouco depois de o sol se pôr, os primeiros bandos pequenos chegaram do mar. A Karen sussurrou que os bandos grandes logo viriam atrás.',
        choices: [{ text: 'Linu kiggede op mod himlen.', translation: 'O Linu olhou para o céu.', next: 'sort_sol' }],
      },
      sort_sol: {
        emoji: '🌑',
        text: 'Pludselig var himlen fuld af fugle. Tusindvis af stære fløj sammen og dannede figurer, der skiftede form hvert sekund. Linu forstod nu, hvorfor man kalder det sort sol: flokken var så tæt, at man næsten ikke kunne se himlen.',
        translation: 'De repente, o céu estava cheio de pássaros. Milhares de estorninhos voavam juntos e formavam figuras que mudavam de forma a cada segundo. O Linu entendeu então por que chamam aquilo de sol negro: o bando era tão denso que quase não dava para ver o céu.',
        choices: [
          { text: 'Linu spurgte Karen, hvorfor fuglene flyver sådan.', translation: 'O Linu perguntou à Karen por que os pássaros voam assim.', next: 'hvorfor' },
          { text: 'Linu klappede højt, fordi det var så flot.', translation: 'O Linu bateu palmas bem alto, porque era lindo demais.', next: 'klap' },
        ],
      },
      hvorfor: {
        emoji: '🦅',
        text: 'Karen forklarede, at forskerne mener, at fuglene flyver tæt sammen, fordi rovfugle så har sværere ved at fange dem. Hun havde læst, at en enkelt flok kan bestå af flere hundrede tusind fugle. Lige da hun havde sagt det, landede hele flokken i sivene på én gang.',
        translation: 'A Karen explicou que os cientistas acham que os pássaros voam bem juntos porque assim as aves de rapina têm mais dificuldade para pegá-los. Ela tinha lido que um único bando pode ter várias centenas de milhares de pássaros. Assim que ela disse isso, o bando inteiro pousou nos juncos de uma vez.',
        choices: [{ text: 'Linu og Karen gik stille tilbage mod bilen.', translation: 'O Linu e a Karen voltaram em silêncio para o carro.', next: 'final_bom' }],
      },
      klap: {
        emoji: '👏',
        text: 'Lyden fik en del af flokken til at dreje skarpt til siden. Karen lo og sagde, at stærene ikke var vant til et publikum, der klappede. Heldigvis samlede flokken sig igen, og kort efter landede den i sivene.',
        translation: 'O barulho fez uma parte do bando virar bruscamente para o lado. A Karen riu e disse que os estorninhos não estavam acostumados com uma plateia que batia palmas. Por sorte, o bando se juntou de novo e, pouco depois, pousou nos juncos.',
        choices: [{ text: 'Linu lovede at være stille næste gang.', translation: 'O Linu prometeu ficar quieto da próxima vez.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '✨',
        text: 'På vejen tilbage var det helt mørkt, og marsken var stille. Karen sagde, at hun aldrig havde set sort sol så flot som i aften. Linu svarede, at han ikke ville glemme det, om han så blev hundrede år.',
        translation: 'No caminho de volta estava totalmente escuro, e a marisma estava em silêncio. A Karen disse que nunca tinha visto um sol negro tão bonito quanto naquela noite. O Linu respondeu que não ia esquecer aquilo nem que vivesse cem anos.',
        ending: { tone: 'bom', title: 'O céu que escureceu', message: 'O Linu esperou o pôr do sol e viu milhares de estorninhos dançarem sobre a marisma do Mar de Wadden.' },
      },
    },
  },
  {
    id: 'da-h17',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Rundkirken på Bornholm',
    emoji: '⛪',
    summary: 'Hospedado em Gudhjem, o Linu pega a bicicleta da anfitriã para conhecer a igreja redonda de Østerlars antes que ela feche.',
    cultural_context:
      'A ilha de Bornholm, no Báltico, tem quatro igrejas redondas medievais — Østerlars, Olsker, Nylars e Nyker —, construídas por volta do século XII; a de Østerlars é a maior. As paredes grossas e o andar de cima indicam que também serviam de refúgio contra ataques vindos do mar. Na ilha se come o «sol over Gudhjem»: arenque defumado no pão de centeio com uma gema crua no meio.',
    start: 'start',
    glossary: [
      ['pensionat', 'pensão, pousada'],
      ['værtinden', 'a anfitriã'],
      ['røget sild', 'arenque defumado'],
      ['æggeblomme', 'gema de ovo'],
      ['kirketjeneren', 'o sacristão, o zelador da igreja'],
      ['væggene', 'as paredes'],
      ['før han havde set', 'antes de ter visto'],
      ['kalkmalerier', 'pinturas murais (sobre cal)'],
    ],
    nodes: {
      start: {
        emoji: '🚲',
        text: 'Linu boede på et lille pensionat i Gudhjem. Om morgenen sagde værtinden, Birthe, at han ikke måtte rejse hjem, før han havde set Østerlars Kirke. Hun lånte ham sin cykel og fortalte, at kirken lukkede klokken fem.',
        translation: 'O Linu estava hospedado numa pequena pensão em Gudhjem. De manhã, a anfitriã, Birthe, disse que ele não podia voltar para casa antes de ter visto a igreja de Østerlars. Ela emprestou a bicicleta dela e contou que a igreja fechava às cinco.',
        choices: [
          { text: 'Linu cyklede af sted med det samme.', translation: 'O Linu saiu pedalando na mesma hora.', next: 'cykel' },
          { text: 'Linu spiste først en stor frokost på havnen.', translation: 'O Linu primeiro almoçou bem no porto.', next: 'frokost' },
          {
            text: 'Linu tog af sted klokken seks, fordi Birthe havde sagt, at kirken åbnede om aftenen.',
            translation: 'O Linu saiu às seis, porque a Birthe tinha dito que a igreja abria à noite.',
            wrong: 'A Birthe disse que a igreja «lukkede klokken fem» — FECHAVA às cinco. Chegar às seis seria tarde demais.',
          },
        ],
      },
      frokost: {
        emoji: '🐟',
        text: 'På havnen bestilte Linu en «sol over Gudhjem»: røget sild på rugbrød med en rå æggeblomme i midten. Den var så god, at han bestilte en til. Da han kiggede på uret, var klokken allerede fire.',
        translation: 'No porto, o Linu pediu um «sol over Gudhjem» (sol sobre Gudhjem): arenque defumado no pão de centeio com uma gema crua no meio. Estava tão bom que ele pediu mais um. Quando olhou o relógio, já eram quatro horas.',
        choices: [
          { text: 'Linu cyklede så hurtigt, han kunne.', translation: 'O Linu pedalou o mais rápido que conseguiu.', next: 'sent' },
          { text: 'Linu besluttede at tage til kirken i morgen i stedet.', translation: 'O Linu decidiu ir à igreja no dia seguinte.', next: 'final_imorgen' },
        ],
      },
      sent: {
        emoji: '⏰',
        text: 'Vejen til Østerlars gik op ad bakke, og Linu var helt forpustet, da han nåede frem. Klokken var ti minutter i fem, og kirketjeneren var ved at låse døren. Linu fortalte, at han var cyklet helt fra Gudhjem, og manden smilede.',
        translation: 'O caminho até Østerlars era subida, e o Linu estava totalmente sem fôlego quando chegou. Faltavam dez para as cinco, e o sacristão estava trancando a porta. O Linu contou que tinha vindo pedalando lá de Gudhjem, e o homem sorriu.',
        choices: [{ text: 'Linu spurgte, om han måtte kigge ind et øjeblik.', translation: 'O Linu perguntou se podia dar uma olhada lá dentro por um instante.', next: 'kirken' }],
      },
      cykel: {
        emoji: '🌳',
        text: 'Linu cyklede gennem marker og små skove, og efter en halv time så han kirken. Den var rund og hvid og havde et spidst, sort tag. Han havde aldrig set en kirke, der så sådan ud.',
        translation: 'O Linu pedalou por campos e pequenos bosques e, depois de meia hora, viu a igreja. Ela era redonda e branca e tinha um telhado pontudo e preto. Ele nunca tinha visto uma igreja assim.',
        choices: [{ text: 'Linu stillede cyklen og gik ind.', translation: 'O Linu estacionou a bicicleta e entrou.', next: 'kirken' }],
      },
      kirken: {
        emoji: '🏰',
        text: 'Indenfor mødte Linu kirketjeneren, Poul, der fortalte, at kirken var bygget i 1100-tallet. Han forklarede, at væggene var så tykke, fordi folk havde brugt kirken som borg, når fjender kom fra havet. Øverst oppe var der et rum, hvor man tidligere havde holdt vagt.',
        translation: 'Lá dentro, o Linu encontrou o sacristão, Poul, que contou que a igreja tinha sido construída no século XII. Ele explicou que as paredes eram tão grossas porque as pessoas tinham usado a igreja como fortaleza quando inimigos vinham do mar. No alto havia um cômodo onde antigamente se montava guarda.',
        choices: [
          { text: 'Linu gik op ad den smalle trappe.', translation: 'O Linu subiu a escada estreita.', next: 'trappe' },
          { text: 'Linu blev nede og kiggede på væggene.', translation: 'O Linu ficou embaixo, olhando as paredes.', next: 'ned' },
          {
            text: 'Linu forstod, at kirken var blevet bygget for nylig.',
            translation: 'O Linu entendeu que a igreja tinha sido construída recentemente.',
            wrong: 'O Poul disse que a igreja foi construída «i 1100-tallet» — no século XII (os anos 1100). Ela tem uns 800 anos!',
          },
        ],
      },
      trappe: {
        emoji: '🪟',
        text: 'Trappen var så smal, at Linu måtte gå sidelæns. Fra de små vinduer øverst oppe kunne han se markerne og havet i det fjerne. Han forstod nu, hvorfor vagterne havde valgt netop dette sted.',
        translation: 'A escada era tão estreita que o Linu teve de subir de lado. Das janelinhas lá em cima ele via os campos e o mar ao longe. Entendeu então por que os vigias tinham escolhido justamente aquele lugar.',
        choices: [
          { text: 'Linu kiggede efter skibe på havet.', translation: 'O Linu procurou navios no mar.', next: 'skibe' },
          { text: 'Linu gik ned igen, fordi han ikke kunne lide højder.', translation: 'O Linu desceu de novo, porque não gostava de altura.', next: 'ned' },
        ],
      },
      skibe: {
        emoji: '⛵',
        text: 'Linu stod længe ved vinduet og forestillede sig, at han var vagt for 800 år siden. Da han endelig gik ned, sagde Poul, at han næsten havde låst ham inde. De grinede begge to, og Poul gav ham en lille bog om de fire rundkirker på øen.',
        translation: 'O Linu ficou muito tempo na janela, imaginando que era um vigia de 800 anos atrás. Quando finalmente desceu, o Poul disse que quase o tinha trancado lá dentro. Os dois riram, e o Poul deu a ele um livrinho sobre as quatro igrejas redondas da ilha.',
        choices: [{ text: 'Linu takkede og cyklede tilbage til Gudhjem.', translation: 'O Linu agradeceu e voltou pedalando para Gudhjem.', next: 'final_bom' }],
      },
      ned: {
        emoji: '🎨',
        text: 'Nede i kirken viste Poul ham nogle gamle kalkmalerier. Han fortalte, at mange danske kirker havde fået deres malerier dækket med hvid kalk efter reformationen, og at man først meget senere havde fundet dem igen. Linu kunne ikke forstå, at nogen havde villet skjule noget så smukt.',
        translation: 'Na parte de baixo da igreja, o Poul mostrou a ele umas pinturas murais antigas. Contou que muitas igrejas dinamarquesas tiveram as pinturas cobertas de cal branca depois da Reforma, e que só muito mais tarde elas foram redescobertas. O Linu não conseguia entender como alguém tinha querido esconder algo tão bonito.',
        choices: [{ text: 'Linu takkede Poul og cyklede tilbage.', translation: 'O Linu agradeceu ao Poul e voltou pedalando.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🌅',
        text: 'Da Linu kom tilbage til pensionatet, spurgte Birthe, om hun havde haft ret. Linu svarede, at han nu forstod, hvorfor hun ikke ville lade ham rejse, før han havde set kirken. Om aftenen spiste de røget sild sammen på havnen.',
        translation: 'Quando o Linu voltou à pensão, a Birthe perguntou se ela tinha razão. O Linu respondeu que agora entendia por que ela não queria deixá-lo ir embora antes de ter visto a igreja. À noite, os dois comeram arenque defumado juntos no porto.',
        ending: { tone: 'bom', title: 'Igreja e fortaleza', message: 'O Linu conheceu a maior igreja redonda de Bornholm, que foi templo e refúgio ao mesmo tempo.' },
      },
      final_imorgen: {
        emoji: '🕰️',
        text: 'Linu cyklede langsomt tilbage og fortalte Birthe, at han ikke havde nået kirken. Hun sagde, at det ikke gjorde noget, fordi kirken havde stået der i over 800 år. «Den står der nok også i morgen», sagde hun.',
        translation: 'O Linu voltou devagar de bicicleta e contou à Birthe que não tinha chegado a tempo à igreja. Ela disse que não tinha problema, porque a igreja estava ali havia mais de 800 anos. «Amanhã ela certamente ainda vai estar lá», disse ela.',
        ending: { tone: 'neutro', title: 'Fica para amanhã', message: 'O arenque venceu a igreja hoje — mas ela espera o Linu há 800 anos, e pode esperar mais um dia.' },
      },
    },
  },
  {
    id: 'da-h18',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Fossiler under Møns Klint',
    emoji: '🪨',
    summary: 'Com a geóloga Mette, o Linu desce os penhascos brancos de Møns Klint para procurar fósseis na praia.',
    cultural_context:
      'Møns Klint, no leste da ilha de Møn, é um paredão de calcário branco com mais de 100 metros de altura, formado há cerca de 70 milhões de anos com restos de minúsculos organismos marinhos. Pedaços do penhasco desabam de tempos em tempos, e na praia se acham fósseis, como os belemnites, que os dinamarqueses chamam de «vættelys» (velas de duende).',
    start: 'start',
    glossary: [
      ['klinten', 'o penhasco, a falésia'],
      ['kridt', 'giz, calcário'],
      ['vættelys', 'belemnite (fóssil em forma de vela)'],
      ['søpindsvin', 'ouriço-do-mar'],
      ['vandkanten', 'a beira da água'],
      ['uden varsel', 'sem aviso'],
      ['var faldet ned', 'tinha caído (mais-que-perfeito)'],
    ],
    nodes: {
      start: {
        emoji: '🏔️',
        text: 'Linu havde læst om Møns Klint, længe før han kom til Danmark. Nu stod han øverst oppe og kiggede ned på havet, der var lysegrønt. Geologen Mette, som han havde mødt på vandrerhjemmet, sagde, at de skulle gå ned til stranden og lede efter fossiler.',
        translation: 'O Linu tinha lido sobre Møns Klint muito antes de vir para a Dinamarca. Agora ele estava lá no alto, olhando para o mar, que era verde-claro. A geóloga Mette, que ele tinha conhecido no albergue, disse que eles iam descer até a praia para procurar fósseis.',
        choices: [
          { text: 'Linu fulgte efter Mette ned ad trappen.', translation: 'O Linu seguiu a Mette escada abaixo.', next: 'trappen' },
          { text: 'Linu spurgte, hvad man kunne finde på stranden.', translation: 'O Linu perguntou o que se podia encontrar na praia.', next: 'fossiler' },
          {
            text: 'Linu blev oppe på klinten, fordi Mette havde sagt, at fossilerne lå deroppe.',
            translation: 'O Linu ficou no alto do penhasco, porque a Mette tinha dito que os fósseis estavam lá em cima.',
            wrong: 'A Mette disse que eles iam «gå ned til stranden» — DESCER até a praia — para procurar fósseis. É lá embaixo que eles aparecem.',
          },
        ],
      },
      fossiler: {
        emoji: '🐚',
        text: 'Mette forklarede, at klinten var lavet af kridt, som bestod af skaller fra bittesmå havdyr. Hvis man var heldig, kunne man finde søpindsvin eller vættelys mellem stenene. Hun fortalte, at navnet vættelys betyder «vætternes lys», fordi fossilerne ligner små lys.',
        translation: 'A Mette explicou que o penhasco era feito de calcário, formado por conchas de bichinhos marinhos minúsculos. Com sorte, dava para achar ouriços-do-mar ou belemnites entre as pedras. Ela contou que o nome «vættelys» quer dizer «velas dos duendes», porque os fósseis parecem velinhas.',
        choices: [{ text: 'Linu fulgte efter Mette ned ad trappen.', translation: 'O Linu seguiu a Mette escada abaixo.', next: 'trappen' }],
      },
      trappen: {
        emoji: '🪜',
        text: 'Trappen ned til stranden havde flere hundrede trin, og Linu talte dem ikke, selvom han havde lovet sig selv at gøre det. Nede ved vandet så han, at et stort stykke af klinten lå på stranden. Mette sagde, at det var faldet ned i løbet af vinteren.',
        translation: 'A escada até a praia tinha várias centenas de degraus, e o Linu não os contou, embora tivesse prometido a si mesmo que contaria. Lá embaixo, perto da água, ele viu que um pedaço grande do penhasco estava caído na praia. A Mette disse que ele tinha caído durante o inverno.',
        choices: [
          { text: 'Linu gik hen for at kigge på det store stykke kridt.', translation: 'O Linu foi até lá olhar o pedaço grande de calcário.', next: 'stykke' },
          { text: 'Linu spurgte, om det var farligt at gå tæt på klinten.', translation: 'O Linu perguntou se era perigoso chegar perto do penhasco.', next: 'farligt' },
        ],
      },
      farligt: {
        emoji: '⚠️',
        text: 'Mette svarede, at man aldrig skulle gå helt ind under klinten, fordi der kunne falde sten ned uden varsel. Hun viste ham, hvor de kunne gå, og sagde, at de bedste fund ofte lå ude ved vandkanten. Der vaskede bølgerne stenene rene.',
        translation: 'A Mette respondeu que nunca se devia ficar bem embaixo do penhasco, porque podiam cair pedras sem aviso. Ela mostrou por onde eles podiam andar e disse que os melhores achados costumavam ficar na beira da água. Ali as ondas lavavam as pedras.',
        choices: [
          { text: 'Linu gik langs vandkanten og kiggede.', translation: 'O Linu andou pela beira da água procurando.', next: 'fund' },
          {
            text: 'Linu gik tæt ind til klinten, fordi Mette havde sagt, at det var det sikreste sted.',
            translation: 'O Linu foi para bem perto do penhasco, porque a Mette tinha dito que era o lugar mais seguro.',
            wrong: 'A Mette disse o contrário: nunca se deve ficar embaixo do penhasco, «fordi der kunne falde sten ned uden varsel» — porque podem cair pedras sem aviso. O lugar indicado era a beira da água.',
          },
        ],
      },
      stykke: {
        emoji: '💥',
        text: 'Linu var næsten nået hen til klinten, da en lille sten faldt ned lige ved siden af ham. Mette råbte, at han skulle komme tilbage med det samme. Hun forklarede, at der også kunne falde større stykker ned, selvom vejret var godt.',
        translation: 'O Linu tinha quase chegado ao penhasco quando uma pedrinha caiu bem do lado dele. A Mette gritou que ele voltasse imediatamente. Ela explicou que pedaços maiores também podiam cair, mesmo com o tempo bom.',
        choices: [{ text: 'Linu skyndte sig ud til vandkanten.', translation: 'O Linu correu para a beira da água.', next: 'fund' }],
      },
      fund: {
        emoji: '🔍',
        text: 'Efter en times søgen havde Linu kun fundet almindelige flintesten. Så fik han øje på noget lille og aflangt, der lå mellem stenene. Det var brunt og glat og lignede et lille, spidst lys.',
        translation: 'Depois de uma hora procurando, o Linu só tinha achado pedras de sílex comuns. Então ele avistou algo pequeno e comprido entre as pedras. Era marrom e liso e parecia uma velinha pontuda.',
        choices: [
          { text: 'Linu viste Mette, hvad han havde fundet.', translation: 'O Linu mostrou à Mette o que tinha achado.', next: 'vaettelys' },
          { text: 'Linu kastede det tilbage i vandet, fordi han troede, at det var en almindelig sten.', translation: 'O Linu jogou aquilo de volta na água, porque achou que era uma pedra comum.', next: 'final_kastet' },
        ],
      },
      vaettelys: {
        emoji: '🕯️',
        text: 'Mette blev helt begejstret og sagde, at det var et vættelys, der var omkring 70 millioner år gammelt. Hun forklarede, at dyret havde levet i havet, dengang Danmark lå under vand. Linu kunne næsten ikke tro, at han holdt noget så gammelt i hånden.',
        translation: 'A Mette ficou empolgadíssima e disse que era um belemnite de uns 70 milhões de anos. Ela explicou que o bicho tinha vivido no mar, na época em que a Dinamarca ficava debaixo d’água. O Linu mal conseguia acreditar que segurava algo tão antigo na mão.',
        choices: [{ text: 'Linu pakkede fossilet forsigtigt ind.', translation: 'O Linu embrulhou o fóssil com cuidado.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Om aftenen lå vættelyset på bordet på vandrerhjemmet, og alle ville se det. Mette sagde, at hun havde ledt i mange år, før hun fandt sit første. Linu besluttede, at det skulle med hjem til Brasilien.',
        translation: 'À noite, o belemnite estava na mesa do albergue, e todo mundo queria vê-lo. A Mette disse que tinha procurado durante muitos anos antes de achar o primeiro dela. O Linu decidiu que ele ia junto para o Brasil.',
        ending: { tone: 'bom', title: 'Uma vela de 70 milhões de anos', message: 'Seguindo os conselhos da Mette, o Linu achou seu primeiro fóssil na praia de Møns Klint.' },
      },
      final_kastet: {
        emoji: '🌊',
        text: 'Mette havde set det hele og sukkede. Hun forklarede, at den aflange sten nok havde været et vættelys, og at bølgerne nu havde taget den. Linu ledte resten af dagen uden at finde et nyt, men han lovede, at han ville komme tilbage næste sommer.',
        translation: 'A Mette tinha visto tudo e suspirou. Explicou que aquela pedra comprida provavelmente era um belemnite, e que agora as ondas o tinham levado. O Linu procurou o resto do dia sem achar outro, mas prometeu que voltaria no verão seguinte.',
        ending: { tone: 'neutro', title: 'De volta ao mar', message: 'O Linu devolveu ao mar um fóssil sem saber. Fica a lição — e a vontade de voltar a Møn.' },
      },
    },
  },
  // ───────────────────────── B1.3 ─────────────────────────
  {
    id: 'da-h19',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Stenene i Jelling',
    emoji: '🗿',
    summary: 'Ajudando um professor numa excursão escolar a Jelling, o Linu aprende a história das pedras rúnicas — e precisa não perder nenhuma criança.',
    cultural_context:
      'Em Jelling, no centro da Jutlândia, há duas pedras rúnicas do século X. A menor foi erguida pelo rei Gorm, o Velho, em memória da esposa Thyra; a maior, pelo filho deles, Harald Dente-Azul, que nela afirma ter conquistado a Dinamarca e a Noruega e tornado os dinamarqueses cristãos — por isso é chamada de «certidão de batismo da Dinamarca». Pedras, montes funerários e igreja são Patrimônio Mundial da UNESCO desde 1994.',
    start: 'start',
    glossary: [
      ['runesten', 'pedra rúnica'],
      ['højene', 'os montes (funerários)'],
      ['blev rejst af', 'foi erguida por (passiva com blive)'],
      ['beskyttes', 'são protegidas (passiva com -s)'],
      ['dåbsattest', 'certidão de batismo'],
      ['glasmontrer', 'vitrines de vidro'],
      ['finde ud af', 'descobrir, perceber'],
      ['hugget ind', 'entalhado'],
    ],
    nodes: {
      start: {
        emoji: '🚌',
        text: 'Linu var med som hjælper, da en 5. klasse fra Vejle tog på tur til Jelling. Læreren, Jonas, havde bedt ham om at passe på, at ingen blev væk. Da bussen holdt, løb børnene straks ud på den store plads mellem de to høje.',
        translation: 'O Linu foi como ajudante quando uma turma de 5º ano de Vejle fez uma excursão a Jelling. O professor, Jonas, tinha pedido a ele que cuidasse para que ninguém se perdesse. Quando o ônibus parou, as crianças correram na mesma hora para a grande praça entre os dois montes.',
        choices: [
          { text: 'Linu talte børnene, før de gik videre.', translation: 'O Linu contou as crianças antes de seguirem.', next: 'tal' },
          { text: 'Linu fulgte med børnene hen til runestenene.', translation: 'O Linu foi com as crianças até as pedras rúnicas.', next: 'stenene' },
        ],
      },
      tal: {
        emoji: '🔢',
        text: 'Linu talte børnene to gange og fandt ud af, at der manglede en dreng. Han så sig omkring og fik øje på Mikkel, der var løbet helt op på toppen af den nordlige høj. Jonas sukkede og sagde, at det skete hvert år.',
        translation: 'O Linu contou as crianças duas vezes e percebeu que faltava um menino. Ele olhou em volta e avistou o Mikkel, que tinha subido correndo até o topo do monte norte. O Jonas suspirou e disse que isso acontecia todo ano.',
        choices: [{ text: 'Linu kaldte på Mikkel og bad ham komme ned.', translation: 'O Linu chamou o Mikkel e pediu que ele descesse.', next: 'hoej' }],
      },
      hoej: {
        emoji: '⛰️',
        text: 'Mikkel kom løbende ned og sagde, at han bare ville se udsigten. Jonas forklarede, at højene blev bygget for over tusind år siden, og at den ene måske blev lavet til kong Gorm. Så gik de alle sammen hen til stenene.',
        translation: 'O Mikkel desceu correndo e disse que só queria ver a vista. O Jonas explicou que os montes foram construídos havia mais de mil anos, e que um deles talvez tenha sido feito para o rei Gorm. Então todos foram juntos até as pedras.',
        choices: [{ text: 'Linu gik med hen til runestenene.', translation: 'O Linu foi junto até as pedras rúnicas.', next: 'stenene' }],
      },
      stenene: {
        emoji: '🪨',
        text: 'Runestenene står i dag i store glasmontrer, så de beskyttes mod regn og frost. Jonas fortalte, at den lille sten blev rejst af kong Gorm til minde om hans kone, Thyra. Den store sten blev sat op af deres søn, Harald Blåtand.',
        translation: 'Hoje as pedras rúnicas ficam em grandes vitrines de vidro, para ficarem protegidas da chuva e da geada. O Jonas contou que a pedra pequena foi erguida pelo rei Gorm em memória da esposa dele, Thyra. A pedra grande foi erguida pelo filho deles, Harald Dente-Azul.',
        choices: [
          { text: 'Linu spurgte, hvad der står på den store sten.', translation: 'O Linu perguntou o que está escrito na pedra grande.', next: 'indskrift' },
          {
            text: 'Linu forstod, at Thyra havde rejst den lille sten for Gorm.',
            translation: 'O Linu entendeu que a Thyra tinha erguido a pedra pequena para o Gorm.',
            wrong: 'Na passiva, quem faz a ação vem depois de «af»: «den lille sten blev rejst AF kong Gorm» — foi erguida PELO rei Gorm, em memória da Thyra.',
          },
        ],
      },
      indskrift: {
        emoji: '📜',
        text: 'Jonas læste teksten højt i en moderne oversættelse: «Kong Harald lod gøre dette minde efter Gorm, sin far, og efter Thyra, sin mor – den Harald, som vandt sig hele Danmark og Norge og gjorde danerne kristne.» Han forklarede, at stenen derfor kaldes Danmarks dåbsattest. På den ene side er en figur af Kristus hugget ind i stenen.',
        translation: 'O Jonas leu o texto em voz alta numa tradução moderna: «O rei Harald mandou fazer este monumento em memória de Gorm, seu pai, e de Thyra, sua mãe — aquele Harald que conquistou para si toda a Dinamarca e a Noruega e tornou os dinamarqueses cristãos.» Ele explicou que por isso a pedra é chamada de certidão de batismo da Dinamarca. Num dos lados, há uma figura de Cristo entalhada na pedra.',
        choices: [
          { text: 'Linu spurgte, hvad en dåbsattest er.', translation: 'O Linu perguntou o que é uma certidão de batismo.', next: 'attest' },
          { text: 'Linu gik rundt om stenen for at se figuren.', translation: 'O Linu deu a volta na pedra para ver a figura.', next: 'figur' },
          {
            text: 'Linu forstod, at Harald havde gjort nordmændene kristne, men ikke danerne.',
            translation: 'O Linu entendeu que o Harald tinha tornado os noruegueses cristãos, mas não os dinamarqueses.',
            wrong: 'A inscrição diz que Harald «vandt sig hele Danmark og Norge» (conquistou a Dinamarca e a Noruega) e «gjorde danerne kristne» — tornou os DINAMARQUESES cristãos. É por isso que a pedra é a «certidão de batismo» do país.',
          },
        ],
      },
      attest: {
        emoji: '👶',
        text: 'Jonas forklarede, at en dåbsattest er et papir, der udstedes, når et barn bliver døbt. Stenen kaldes sådan, fordi den fortæller, hvornår danerne blev kristne. Børnene syntes, at det var sjovt, at et helt land kunne have en dåbsattest.',
        translation: 'O Jonas explicou que uma certidão de batismo é um papel emitido quando uma criança é batizada. A pedra tem esse apelido porque conta quando os dinamarqueses se tornaram cristãos. As crianças acharam engraçado um país inteiro ter uma certidão de batismo.',
        choices: [{ text: 'Linu gik med klassen hen mod museet.', translation: 'O Linu foi com a turma em direção ao museu.', next: 'museum' }],
      },
      figur: {
        emoji: '✝️',
        text: 'Figuren af Kristus er slidt, men man kan stadig se armene, der er strakt ud. Jonas sagde, at det er et af de ældste billeder af Kristus i Danmark. Linu tog et billede, og så gik klassen videre.',
        translation: 'A figura de Cristo está gasta, mas ainda dá para ver os braços abertos. O Jonas disse que é uma das imagens de Cristo mais antigas da Dinamarca. O Linu tirou uma foto, e a turma seguiu em frente.',
        choices: [{ text: 'Linu gik med klassen hen mod museet.', translation: 'O Linu foi com a turma em direção ao museu.', next: 'museum' }],
      },
      museum: {
        emoji: '🏛️',
        text: 'Efter besøget ved stenene skulle klassen ind på museet over for kirken. Jonas bad Linu om at tælle børnene igen, før de gik ind. Der var 24 børn på listen.',
        translation: 'Depois da visita às pedras, a turma ia entrar no museu em frente à igreja. O Jonas pediu ao Linu que contasse as crianças de novo antes de entrarem. Havia 24 crianças na lista.',
        choices: [
          { text: 'Linu talte børnene omhyggeligt.', translation: 'O Linu contou as crianças com cuidado.', next: 'final_bom' },
          { text: 'Linu gik bare ind, fordi han havde talt dem, da de kom.', translation: 'O Linu simplesmente entrou, porque já as tinha contado na chegada.', next: 'final_vaek' },
        ],
      },
      final_bom: {
        emoji: '✍️',
        text: 'Alle 24 børn var der, og Linu nikkede til Jonas. Inde på museet fik børnene lov til at skrive deres egne navne med runer. Mikkel skrev «Linu» med runer på et stykke papir og gav det til ham som gave.',
        translation: 'As 24 crianças estavam lá, e o Linu fez sinal de positivo para o Jonas. No museu, as crianças puderam escrever o próprio nome em runas. O Mikkel escreveu «Linu» em runas num papel e deu a ele de presente.',
        ending: { tone: 'bom', title: 'Nome em runas', message: 'Ninguém se perdeu, e o Linu aprendeu por que duas pedras de Jelling são a certidão de batismo da Dinamarca.' },
      },
      final_vaek: {
        emoji: '🙈',
        text: 'Inde på museet opdagede Jonas, at Mikkel manglede. De fandt ham et kvarter senere oppe på den nordlige høj, hvor han var ved at lege viking. Ingen var kommet til skade, men Jonas bad Linu om altid at tælle én gang til.',
        translation: 'Dentro do museu, o Jonas percebeu que o Mikkel estava faltando. Eles o encontraram quinze minutos depois no alto do monte norte, brincando de viking. Ninguém se machucou, mas o Jonas pediu ao Linu que sempre contasse mais uma vez.',
        ending: { tone: 'neutro', title: 'O viking fujão', message: 'O Mikkel voltou ao monte, e a lição ficou: numa excursão, conta-se sempre mais uma vez.' },
      },
    },
  },
  {
    id: 'da-h20',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Guide på Kronborg',
    emoji: '🏰',
    summary: 'No primeiro dia como guia no castelo de Kronborg, em Helsingør, o Linu leva turistas brasileiros das muralhas até os subterrâneos onde dorme Holger Danske.',
    cultural_context:
      'O castelo de Kronborg, em Helsingør, controla a parte mais estreita do Øresund, a uns 4 km da Suécia. De 1429 a 1857, os navios que passavam pelo estreito pagavam ali a taxa do Øresund ao rei dinamarquês. Shakespeare ambientou «Hamlet» no castelo (Helsingør é a Elsinore da peça), e nos subterrâneos há uma estátua de Holger Danske, o herói lendário que acordaria se a Dinamarca estivesse em perigo.',
    start: 'start',
    glossary: [
      ['voldene', 'as muralhas, os baluartes'],
      ['tolden', 'a taxa alfandegária, o pedágio'],
      ['blev afskaffet', 'foi abolido (passiva com blive)'],
      ['kasematterne', 'as casamatas, os subterrâneos'],
      ['lommelygte', 'lanterna'],
      ['tænde', 'acender, ligar'],
      ['sagnet', 'a lenda'],
      ['opdigtet', 'inventado, fictício'],
    ],
    nodes: {
      start: {
        emoji: '🧭',
        text: 'Linu havde fået sommerjob som guide på Kronborg i Helsingør. Første dag blev han sat til at vise en gruppe brasilianske turister rundt. Hans chef, Lone, gav ham en lommelygte og sagde, at han skulle huske at tænde den, før han gik ned i kasematterne.',
        translation: 'O Linu tinha conseguido um emprego de verão como guia em Kronborg, em Helsingør. No primeiro dia, ele foi encarregado de mostrar o castelo a um grupo de turistas brasileiros. A chefe dele, Lone, deu a ele uma lanterna e disse que ele devia lembrar de acendê-la antes de descer às casamatas.',
        choices: [
          { text: 'Linu startede turen ude på voldene ved vandet.', translation: 'O Linu começou a visita nas muralhas, junto à água.', next: 'volde' },
          { text: 'Linu tog gruppen direkte ned i kasematterne.', translation: 'O Linu levou o grupo direto para as casamatas.', next: 'kasematter' },
        ],
      },
      volde: {
        emoji: '⚓',
        text: 'Fra voldene kunne man se over til Helsingborg i Sverige, der kun ligger fire kilometer væk. Linu forklarede, at alle skibe, der sejlede gennem Øresund, i flere hundrede år blev tvunget til at betale told her. Pengene blev brugt af kongen, og tolden blev først afskaffet i 1857.',
        translation: 'Das muralhas dava para ver Helsingborg, na Suécia, a só quatro quilômetros. O Linu explicou que, durante vários séculos, todos os navios que passavam pelo Øresund eram obrigados a pagar uma taxa ali. O dinheiro era usado pelo rei, e a taxa só foi abolida em 1857.',
        choices: [
          { text: 'En turist spurgte, hvorfor slottet er så berømt.', translation: 'Um turista perguntou por que o castelo é tão famoso.', next: 'hamlet' },
          {
            text: 'Linu fortalte, at skibene stadig betaler told, når de sejler forbi.',
            translation: 'O Linu contou que os navios ainda pagam a taxa quando passam por ali.',
            wrong: 'O texto diz «tolden blev først afskaffet i 1857» — a taxa SÓ FOI ABOLIDA em 1857. «Blev afskaffet» é passiva com «blive»: algo que aconteceu com a taxa. Hoje ninguém paga mais.',
          },
        ],
      },
      hamlet: {
        emoji: '💀',
        text: 'Linu fortalte, at Shakespeare havde lagt handlingen i «Hamlet» her på slottet i Helsingør, der på engelsk hedder Elsinore. Stykket bliver stadig spillet på Kronborg om sommeren. En turist spurgte, om Hamlet virkelig havde boet her.',
        translation: 'O Linu contou que Shakespeare tinha ambientado «Hamlet» ali no castelo de Helsingør, que em inglês se chama Elsinore. A peça ainda é encenada em Kronborg no verão. Uma turista perguntou se o Hamlet tinha morado ali de verdade.',
        choices: [{ text: 'Linu forklarede, at Hamlet er en opdigtet person.', translation: 'O Linu explicou que o Hamlet é um personagem inventado.', next: 'opdigtet' }],
      },
      opdigtet: {
        emoji: '📖',
        text: 'Linu forklarede, at Hamlet aldrig har eksisteret, men at historien bygger på et gammelt dansk sagn om prinsen Amled. Turisterne nikkede og tog billeder af slotsgården. Så var det tid til at gå ned i kasematterne.',
        translation: 'O Linu explicou que o Hamlet nunca existiu, mas que a história se baseia numa antiga lenda dinamarquesa sobre o príncipe Amled. Os turistas concordaram e tiraram fotos do pátio do castelo. Então chegou a hora de descer às casamatas.',
        choices: [{ text: 'Linu førte gruppen hen til trappen.', translation: 'O Linu levou o grupo até a escada.', next: 'kasematter' }],
      },
      kasematter: {
        emoji: '🕳️',
        text: 'Trappen førte ned i mørke, kolde gange under slottet. Her havde soldater i gamle dage boet i ugevis. Linu stak hånden i lommen og mærkede lommelygten.',
        translation: 'A escada descia para corredores escuros e frios embaixo do castelo. Ali, antigamente, soldados tinham morado por semanas a fio. O Linu pôs a mão no bolso e sentiu a lanterna.',
        choices: [
          { text: 'Linu tændte lommelygten, før han gik videre.', translation: 'O Linu acendeu a lanterna antes de seguir.', next: 'holger' },
          { text: 'Linu gik videre uden at tænde den, fordi han ville spare på batteriet.', translation: 'O Linu seguiu sem acendê-la, porque queria economizar a bateria.', next: 'moerke' },
        ],
      },
      moerke: {
        emoji: '🌑',
        text: 'Efter få meter kunne ingen se noget, og en turist snublede over en sten. Nogle af de andre begyndte at grine nervøst. Linu fandt lommelygten frem og tændte den i en fart.',
        translation: 'Depois de poucos metros, ninguém enxergava nada, e um turista tropeçou numa pedra. Alguns dos outros começaram a rir de nervoso. O Linu tirou a lanterna do bolso e a acendeu depressa.',
        choices: [{ text: 'Linu undskyldte og førte gruppen videre.', translation: 'O Linu pediu desculpas e levou o grupo adiante.', next: 'holger' }],
      },
      holger: {
        emoji: '🛡️',
        text: 'I lyset fra lommelygten dukkede en kæmpe stenfigur op. Linu fortalte, at det var Holger Danske, som ifølge sagnet sover her under slottet. Hvis Danmark kommer i fare, vågner han op og kæmper for landet.',
        translation: 'Na luz da lanterna, apareceu uma enorme figura de pedra. O Linu contou que era Holger Danske, que, segundo a lenda, dorme ali embaixo do castelo. Se a Dinamarca estiver em perigo, ele acorda e luta pelo país.',
        choices: [
          { text: 'Linu spurgte turisterne, om de ville høre mere om sagnet.', translation: 'O Linu perguntou aos turistas se queriam ouvir mais sobre a lenda.', next: 'sagn' },
          {
            text: 'Linu sagde, at Holger Danske plejer at vågne op hver sommer.',
            translation: 'O Linu disse que o Holger Danske costuma acordar todo verão.',
            wrong: 'Segundo a lenda, Holger Danske «sover» — dorme — e só acorda «hvis Danmark kommer i fare», SE a Dinamarca estiver em perigo. Nada de acordar todo verão!',
          },
        ],
      },
      sagn: {
        emoji: '🗡️',
        text: 'Turisterne syntes, at det var den bedste del af turen. En af dem spurgte, om man kunne vække Holger, hvis man råbte højt nok. Linu svarede, at det heldigvis aldrig var blevet prøvet.',
        translation: 'Os turistas acharam que aquela era a melhor parte da visita. Um deles perguntou se dava para acordar o Holger gritando bem alto. O Linu respondeu que, felizmente, isso nunca tinha sido testado.',
        choices: [
          { text: 'Linu sluttede turen og førte gruppen op i solen.', translation: 'O Linu encerrou a visita e levou o grupo de volta para o sol.', next: 'final_bom' },
          { text: 'Linu blev nede i kasematterne for at se sig omkring alene.', translation: 'O Linu ficou nas casamatas para dar uma olhada sozinho.', next: 'final_laast' },
        ],
      },
      final_bom: {
        emoji: '☀️',
        text: 'Da gruppen kom op i solen igen, klappede turisterne. Lone havde hørt det hele fra trappen og sagde, at han var født til at være guide. Samme eftermiddag blev Linu bedt om at tage en ny gruppe.',
        translation: 'Quando o grupo voltou ao sol, os turistas aplaudiram. A Lone tinha ouvido tudo da escada e disse que ele tinha nascido para ser guia. Na mesma tarde, pediram ao Linu que levasse um novo grupo.',
        ending: { tone: 'bom', title: 'Guia de primeira', message: 'Taxa do Øresund, Hamlet e Holger Danske: o primeiro dia do Linu em Kronborg foi um sucesso.' },
      },
      final_laast: {
        emoji: '🔒',
        text: 'Linu gik rundt i gangene, indtil han opdagede, at døren var blevet låst udefra. Han bankede på i et kvarter, før Lone endelig hørte ham og lukkede ham ud. Hun grinede og sagde, at Holger Danske i det mindste havde fået selskab.',
        translation: 'O Linu andou pelos corredores até descobrir que a porta tinha sido trancada por fora. Ele bateu durante quinze minutos até que a Lone finalmente o ouviu e o deixou sair. Ela riu e disse que pelo menos o Holger Danske tinha ganhado companhia.',
        ending: { tone: 'neutro', title: 'Companhia para o Holger', message: 'Curioso demais, o Linu ficou trancado nos subterrâneos — mas saiu com uma boa história para contar.' },
      },
    },
  },
  {
    id: 'da-h21',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Æbleskiver i Den Gamle By',
    emoji: '🥞',
    summary: 'Vestido de aprendiz de padeiro do século XIX no museu Den Gamle By, em Aarhus, o Linu aprende a fazer æbleskiver para o Natal.',
    cultural_context:
      'Den Gamle By («a cidade velha»), em Aarhus, é um museu a céu aberto de história urbana: casas antigas de várias cidades dinamarquesas foram desmontadas e reconstruídas ali. No Natal, os dinamarqueses comem æbleskiver — bolinhas de massa assadas numa frigideira com cavidades redondas e viradas com uma agulha de tricô — com açúcar de confeiteiro e geleia, acompanhadas de gløgg, o vinho quente com especiarias.',
    start: 'start',
    glossary: [
      ['frivillig', 'voluntário'],
      ['klædt ud som', 'fantasiado de'],
      ['dejen', 'a massa'],
      ['røre', 'mexer, bater'],
      ['bliver lavet', 'é feito (passiva com blive)'],
      ['blev hældt', 'foi despejado'],
      ['vendes', 'são viradas (passiva com -s)'],
      ['strikkepind', 'agulha de tricô'],
    ],
    nodes: {
      start: {
        emoji: '🎄',
        text: 'I december var Linu frivillig i Den Gamle By i Aarhus. Han blev klædt ud som bagerdreng fra 1800-tallet med forklæde og hvid hue. Bageren, Hanne, forklarede, at alt i bageriet bliver lavet på den gammeldags måde.',
        translation: 'Em dezembro, o Linu era voluntário na Den Gamle By, em Aarhus. Ele foi vestido de aprendiz de padeiro do século XIX, com avental e gorro branco. A padeira, Hanne, explicou que tudo na padaria é feito do jeito antigo.',
        choices: [
          { text: 'Linu gik ud i køkkenet sammen med Hanne.', translation: 'O Linu foi para a cozinha com a Hanne.', next: 'koekken' },
          { text: 'Linu spurgte, hvor husene kommer fra.', translation: 'O Linu perguntou de onde vêm as casas.', next: 'husene' },
        ],
      },
      husene: {
        emoji: '🏘️',
        text: 'Hanne fortalte, at husene ikke blev bygget her fra starten. De er blevet taget ned i andre danske byer og flyttet hertil, bjælke for bjælke. Nogle af dem er flere hundrede år gamle.',
        translation: 'A Hanne contou que as casas não foram construídas ali desde o começo. Elas foram desmontadas em outras cidades dinamarquesas e trazidas para lá, viga por viga. Algumas têm vários séculos.',
        choices: [
          { text: 'Linu gik ud i køkkenet med Hanne.', translation: 'O Linu foi para a cozinha com a Hanne.', next: 'koekken' },
          {
            text: 'Linu forstod, at husene var blevet bygget i Aarhus for længe siden.',
            translation: 'O Linu entendeu que as casas tinham sido construídas em Aarhus havia muito tempo.',
            wrong: 'A Hanne disse que as casas «er blevet taget ned i andre danske byer og flyttet hertil» — foram DESMONTADAS em OUTRAS cidades e TRAZIDAS para lá. Repare nas passivas com «blive»: as casas sofreram a mudança.',
          },
        ],
      },
      koekken: {
        emoji: '🔥',
        text: 'I køkkenet var ovnen allerede tændt, og det duftede af kanel. Hanne bad Linu om at røre dejen til æbleskiver, mens hun satte gløggen over. Hun sagde, at dejen skulle røres godt igennem, før den blev hældt i panden.',
        translation: 'Na cozinha, o forno já estava aceso, e cheirava a canela. A Hanne pediu ao Linu que batesse a massa das æbleskiver enquanto ela punha o gløgg no fogo. Ela disse que a massa devia ser bem batida antes de ser despejada na frigideira.',
        choices: [
          { text: 'Linu rørte dejen, til den var helt glat.', translation: 'O Linu bateu a massa até ela ficar bem lisa.', next: 'pande' },
          { text: 'Linu hældte dejen i panden med det samme.', translation: 'O Linu despejou a massa na frigideira na mesma hora.', next: 'klumper' },
        ],
      },
      klumper: {
        emoji: '😬',
        text: 'Dejen var fuld af klumper, og de første æbleskiver blev flade og mærkelige. Hanne lo og sagde, at hun selv havde lavet den samme fejl, da hun var ny. De hældte resten tilbage i skålen og begyndte forfra.',
        translation: 'A massa estava cheia de grumos, e as primeiras æbleskiver saíram achatadas e esquisitas. A Hanne riu e disse que ela mesma tinha cometido o mesmo erro quando era novata. Eles puseram o resto de volta na tigela e recomeçaram.',
        choices: [{ text: 'Linu rørte dejen godt igennem denne gang.', translation: 'Dessa vez, o Linu bateu bem a massa.', next: 'pande' }],
      },
      pande: {
        emoji: '🍳',
        text: 'Æbleskivepanden havde syv runde huller, og i hvert hul blev der hældt lidt dej. Hanne viste ham, hvordan kuglerne skulle vendes med en strikkepind. Det så let ud, men Linus første æbleskiver faldt ud af panden.',
        translation: 'A frigideira de æbleskiver tinha sete cavidades redondas, e em cada uma se despejava um pouco de massa. A Hanne mostrou como as bolinhas deviam ser viradas com uma agulha de tricô. Parecia fácil, mas as primeiras æbleskiver do Linu caíram da frigideira.',
        choices: [
          { text: 'Linu øvede sig, til han kunne vende dem.', translation: 'O Linu treinou até conseguir virá-las.', next: 'oevet' },
          { text: 'Linu gav op og lod Hanne vende dem.', translation: 'O Linu desistiu e deixou a Hanne virá-las.', next: 'opgive' },
        ],
      },
      oevet: {
        emoji: '💪',
        text: 'Efter en halv time var Linu blevet så god, at Hanne lod ham stå alene ved panden. Imens var der kommet en lang kø af gæster uden for døren. Alle ville have varme æbleskiver med flormelis og syltetøj.',
        translation: 'Depois de meia hora, o Linu tinha ficado tão bom que a Hanne o deixou sozinho na frigideira. Enquanto isso, uma longa fila de visitantes tinha se formado do lado de fora da porta. Todos queriam æbleskiver quentinhas com açúcar de confeiteiro e geleia.',
        choices: [
          { text: 'Linu serverede de varme æbleskiver for gæsterne.', translation: 'O Linu serviu as æbleskiver quentes aos visitantes.', next: 'final_bom' },
          {
            text: 'Linu lukkede døren, fordi Hanne havde sagt, at der ikke var kommet nogen gæster.',
            translation: 'O Linu fechou a porta, porque a Hanne tinha dito que não tinha chegado nenhum visitante.',
            wrong: 'O texto diz «der var kommet en lang kø af gæster uden for døren» — tinha se formado uma longa fila de visitantes do lado de fora. Todo mundo queria æbleskiver!',
          },
        ],
      },
      opgive: {
        emoji: '🤷',
        text: 'Hanne vendte æbleskiverne hurtigt, mens Linu hældte dej i hullerne. Sammen blev de et godt hold, men Linu nåede aldrig at lære at vende dem selv. Om eftermiddagen blev bageriet lukket, fordi dejen var brugt op.',
        translation: 'A Hanne virava as æbleskiver depressa enquanto o Linu despejava massa nas cavidades. Juntos formaram uma boa equipe, mas o Linu nunca chegou a aprender a virá-las sozinho. À tarde, a padaria foi fechada, porque a massa tinha acabado.',
        ending: { tone: 'neutro', title: 'Meio aprendiz', message: 'Com a Hanne virando e o Linu despejando, a padaria deu conta — mas a agulha de tricô ficou para a próxima.' },
      },
      final_bom: {
        emoji: '🎅',
        text: 'Gæsterne spiste æbleskiver og drak gløgg, mens sneen faldt uden for vinduerne. En gammel dame sagde, at de smagte præcis som dem, hendes mor havde lavet. Hanne gav Linu en æbleskivepande i julegave, så han kunne lave dem derhjemme.',
        translation: 'Os visitantes comeram æbleskiver e beberam gløgg enquanto a neve caía lá fora. Uma senhora disse que elas tinham exatamente o gosto das que a mãe dela fazia. A Hanne deu ao Linu uma frigideira de æbleskiver de presente de Natal, para ele fazer em casa.',
        ending: { tone: 'bom', title: 'Padeiro de Natal', message: 'O Linu dominou a agulha de tricô e serviu æbleskiver a uma fila inteira no museu de Aarhus.' },
      },
    },
  },
  // ───────────────────────── B1.4 ─────────────────────────
  {
    id: 'da-h22',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Danmarks mest berømte bakke',
    emoji: '⛰️',
    summary: 'Em Silkeborg, o Linu e a amiga Sofie sobem o Himmelbjerget — e descobrem que a «montanha» mais famosa da Dinamarca não é a mais alta.',
    cultural_context:
      'O Himmelbjerget («a montanha do céu»), perto de Silkeborg, tem só 147 metros, e por muito tempo se achou que fosse o ponto mais alto da Dinamarca. Não é: Møllehøj, também no leste da Jutlândia, tem cerca de 171 metros. Dá para chegar ao Himmelbjerget pelos lagos no Hjejlen, um barco a vapor com rodas de pás de 1861.',
    start: 'start',
    glossary: [
      ['bakke', 'colina, morro'],
      ['hjuldamper', 'barco a vapor com rodas de pás'],
      ['stejlere', 'mais íngreme'],
      ['den flotteste', 'a mais bonita'],
      ['det højeste punkt', 'o ponto mais alto'],
      ['som / der', 'que (pronomes relativos)'],
      ['ikke nær så', 'nem de longe tão'],
    ],
    nodes: {
      start: {
        emoji: '🗺️',
        text: 'Linu og hans veninde Sofie var på weekendtur i Silkeborg. Sofie sagde, at de skulle op på Himmelbjerget, som hun kaldte «Danmarks mest berømte bakke». Man kunne enten sejle derhen med en gammel hjuldamper eller gå ad en sti gennem skoven, der var længere, men meget smukkere.',
        translation: 'O Linu e a amiga Sofie estavam passando o fim de semana em Silkeborg. A Sofie disse que eles iam subir o Himmelbjerget, que ela chamava de «o morro mais famoso da Dinamarca». Dava para ir até lá num velho barco a vapor com rodas de pás ou por uma trilha pelo bosque, que era mais longa, mas muito mais bonita.',
        choices: [
          { text: 'Linu valgte at sejle med hjuldamperen.', translation: 'O Linu escolheu ir no barco a vapor.', next: 'baad' },
          { text: 'Linu valgte at gå gennem skoven.', translation: 'O Linu escolheu ir a pé pelo bosque.', next: 'skov' },
        ],
      },
      baad: {
        emoji: '🛥️',
        text: 'Hjuldamperen var den ældste båd, Linu nogensinde havde sejlet med. Kaptajnen fortalte, at den var fra 1861, og at den stadig blev fyret med kul. Linu stod ved rælingen og så søerne glide forbi.',
        translation: 'O barco a vapor era o mais antigo em que o Linu já tinha andado. O capitão contou que ele era de 1861 e que ainda funcionava a carvão. O Linu ficou junto à amurada vendo os lagos passarem.',
        choices: [{ text: 'Linu gik i land ved foden af bakken.', translation: 'O Linu desembarcou ao pé do morro.', next: 'top' }],
      },
      skov: {
        emoji: '🌲',
        text: 'Stien gik op og ned gennem en skov, der var tættere, end Linu havde troet. Undervejs mødte de en ældre mand, som gik tur med sin hund. Han fortalte dem, at stien til højre var kortere, men at den var meget stejlere.',
        translation: 'A trilha subia e descia por um bosque mais fechado do que o Linu tinha imaginado. No caminho, eles encontraram um senhor que passeava com o cachorro. Ele contou que a trilha da direita era mais curta, mas muito mais íngreme.',
        choices: [
          { text: 'Linu og Sofie tog den korte, stejle sti.', translation: 'O Linu e a Sofie pegaram a trilha curta e íngreme.', next: 'stejl' },
          { text: 'Linu og Sofie fortsatte ad den lange sti.', translation: 'O Linu e a Sofie continuaram pela trilha longa.', next: 'top' },
          {
            text: 'Linu tog stien til højre, fordi manden havde sagt, at den var den letteste.',
            translation: 'O Linu pegou a trilha da direita, porque o homem tinha dito que era a mais fácil.',
            wrong: 'O homem disse que a trilha da direita era «kortere, men meget stejlere» — mais CURTA, porém muito mais ÍNGREME. Mais curta não quer dizer mais fácil!',
          },
        ],
      },
      stejl: {
        emoji: '🧗',
        text: 'Stien var så stejl, at Linu måtte holde fast i træernes rødder. Sofie var hurtigere end ham og ventede grinende på toppen. «Og så siger folk, at Danmark er fladt!» råbte hun.',
        translation: 'A trilha era tão íngreme que o Linu teve de se segurar nas raízes das árvores. A Sofie era mais rápida que ele e o esperava rindo lá no alto. «E ainda dizem que a Dinamarca é plana!», gritou ela.',
        choices: [{ text: 'Linu kravlede det sidste stykke op.', translation: 'O Linu escalou o último trecho.', next: 'top' }],
      },
      top: {
        emoji: '🏞️',
        text: 'På toppen stod et tårn af mursten, og udsigten over søerne var den flotteste, Linu havde set i Danmark. Sofie fortalte, at man i mange år havde troet, at Himmelbjerget var landets højeste punkt. Det var det dog ikke.',
        translation: 'No alto havia uma torre de tijolos, e a vista dos lagos era a mais bonita que o Linu tinha visto na Dinamarca. A Sofie contou que por muitos anos se acreditou que o Himmelbjerget fosse o ponto mais alto do país. Mas não era.',
        choices: [
          { text: 'Linu spurgte, hvilket punkt der så er det højeste.', translation: 'O Linu perguntou qual era, então, o ponto mais alto.', next: 'hoejest' },
          {
            text: 'Linu sagde stolt, at han nu havde været på Danmarks højeste punkt.',
            translation: 'O Linu disse, orgulhoso, que agora tinha estado no ponto mais alto da Dinamarca.',
            wrong: 'A Sofie disse que por muito tempo se ACHOU («man havde troet») que o Himmelbjerget fosse o ponto mais alto — «Det var det dog ikke»: mas não era.',
          },
        ],
      },
      hoejest: {
        emoji: '📏',
        text: 'Sofie forklarede, at Himmelbjerget kun er 147 meter højt, mens Møllehøj, der ligger længere mod syd, er cirka 171 meter. Hun sagde, at Møllehøj til gengæld er meget kedeligere, fordi der næsten ikke er noget at se. Linu syntes, at det var typisk dansk, at det mest berømte bjerg ikke var det højeste.',
        translation: 'A Sofie explicou que o Himmelbjerget tem só 147 metros, enquanto Møllehøj, que fica mais ao sul, tem cerca de 171. Ela disse que, em compensação, Møllehøj é muito mais sem graça, porque quase não há nada para ver. O Linu achou bem dinamarquês que a montanha mais famosa não fosse a mais alta.',
        choices: [
          { text: 'Linu foreslog, at de også tog til Møllehøj.', translation: 'O Linu sugeriu que eles fossem também a Møllehøj.', next: 'moellehoej' },
          { text: 'Linu købte en is og satte sig i græsset.', translation: 'O Linu comprou um sorvete e sentou na grama.', next: 'final_bom' },
        ],
      },
      moellehoej: {
        emoji: '🌾',
        text: 'De tog bussen og gik det sidste stykke over markerne. Toppen var bare en lille bakke midt på en mark, og udsigten var ikke nær så flot som fra Himmelbjerget. Sofie sagde, at Linu nu var den eneste brasilianer, hun kendte, der havde været på Danmarks højeste naturlige punkt.',
        translation: 'Eles pegaram o ônibus e fizeram o último trecho a pé pelos campos. O topo era só uma colininha no meio de um campo, e a vista não era nem de longe tão bonita quanto a do Himmelbjerget. A Sofie disse que o Linu agora era o único brasileiro que ela conhecia que tinha estado no ponto natural mais alto da Dinamarca.',
        ending: { tone: 'bom', title: 'No topo de verdade', message: 'Nada de vista, mas o Linu chegou ao ponto natural mais alto da Dinamarca — 171 metros!' },
      },
      final_bom: {
        emoji: '🍦',
        text: 'Linu og Sofie sad længe i græsset og spiste is, mens hjuldamperen sejlede forbi nede på søen. Sofie spurgte, hvad han syntes om det danske «bjerg». Linu svarede, at det var den laveste, men hyggeligste bjergtur, han nogensinde havde været på.',
        translation: 'O Linu e a Sofie ficaram muito tempo sentados na grama tomando sorvete, enquanto o barco a vapor passava lá embaixo no lago. A Sofie perguntou o que ele tinha achado da «montanha» dinamarquesa. O Linu respondeu que tinha sido a escalada mais baixa, mas mais aconchegante, que ele já tinha feito.',
        ending: { tone: 'bom', title: 'A montanha mais baixa', message: 'O Himmelbjerget não é o ponto mais alto da Dinamarca, mas é o mais bonito — e o Linu aprovou.' },
      },
    },
  },
  {
    id: 'da-h23',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Det blå lys i Skagen',
    emoji: '🎨',
    summary: 'Num curso de pintura em Skagen, o Linu vai até Grenen, onde dois mares se encontram, e aprende a esperar pela luz azul do fim do dia.',
    cultural_context:
      'No extremo norte da Jutlândia, em Grenen, se encontram o Skagerrak e o Kattegat, e dá para ficar com um pé em cada mar. No fim do século XIX, os «pintores de Skagen», como P. S. Krøyer e Anna e Michael Ancher, se reuniram na cidade atraídos pela luz; Krøyer ficou famoso pelas praias na luz azulada do entardecer.',
    start: 'start',
    glossary: [
      ['maler', 'pintor'],
      ['staffeli', 'cavalete'],
      ['hvor to have mødes', 'onde dois mares se encontram'],
      ['hvis billeder', 'cujos quadros'],
      ['blåere', 'mais azul'],
      ['det blåeste', 'o mais azul'],
      ['end', 'do que'],
    ],
    nodes: {
      start: {
        emoji: '🖌️',
        text: 'Linu var taget til Skagen, fordi han havde hørt, at lyset der var det smukkeste i Danmark. Han havde meldt sig til et malerkursus hos Ole, en gammel maler, som havde boet i byen hele sit liv. Ole sagde, at de først skulle ud til Grenen, hvor to have mødes.',
        translation: 'O Linu tinha ido a Skagen porque tinha ouvido dizer que a luz de lá era a mais bonita da Dinamarca. Ele tinha se inscrito num curso de pintura com o Ole, um pintor idoso que tinha morado na cidade a vida inteira. O Ole disse que primeiro eles iam até Grenen, onde dois mares se encontram.',
        choices: [
          { text: 'Linu tog sit staffeli og fulgte med Ole.', translation: 'O Linu pegou o cavalete e acompanhou o Ole.', next: 'grenen' },
          { text: 'Linu spurgte, hvilke malere der havde boet i Skagen.', translation: 'O Linu perguntou que pintores tinham morado em Skagen.', next: 'malere' },
        ],
      },
      malere: {
        emoji: '🖼️',
        text: 'Ole fortalte, at en gruppe kunstnere, som kaldes Skagensmalerne, boede her i slutningen af 1800-tallet. Den mest kendte af dem var P.S. Krøyer, hvis billeder af stranden i det blå aftenlys er berømte i hele Danmark. Ole sagde, at han selv var blevet maler, fordi han havde set de billeder som dreng.',
        translation: 'O Ole contou que um grupo de artistas, chamados de pintores de Skagen, morou ali no fim do século XIX. O mais conhecido deles era P. S. Krøyer, cujos quadros da praia na luz azul do entardecer são famosos em toda a Dinamarca. O Ole disse que ele mesmo tinha virado pintor porque tinha visto aqueles quadros quando menino.',
        choices: [
          { text: 'Linu fulgte med Ole ud til Grenen.', translation: 'O Linu acompanhou o Ole até Grenen.', next: 'grenen' },
          {
            text: 'Linu forstod, at Ole havde kendt Krøyer personligt, da han var dreng.',
            translation: 'O Linu entendeu que o Ole tinha conhecido o Krøyer pessoalmente quando menino.',
            wrong: 'Os pintores de Skagen viveram ali no fim do século XIX. O Ole disse que virou pintor porque viu «de billeder» — AQUELES QUADROS — quando menino, não que conheceu o Krøyer. Repare no relativo «hvis billeder»: CUJOS quadros.',
          },
        ],
      },
      grenen: {
        emoji: '🌊',
        text: 'Yderst ude på Grenen kunne Linu se, hvordan bølgerne fra to sider mødtes i en lang linje. Ole forklarede, at Skagerrak ligger mod vest og Kattegat mod øst, og at man kan stå med en fod i hvert hav. Vandet var koldere, end Linu havde forventet.',
        translation: 'Lá na ponta de Grenen, o Linu via as ondas dos dois lados se encontrando numa linha comprida. O Ole explicou que o Skagerrak fica a oeste e o Kattegat a leste, e que dá para ficar com um pé em cada mar. A água estava mais fria do que o Linu esperava.',
        choices: [
          { text: 'Linu stillede sig med en fod i hvert hav.', translation: 'O Linu ficou com um pé em cada mar.', next: 'foedder' },
          { text: 'Linu satte staffeliet op og begyndte at male.', translation: 'O Linu montou o cavalete e começou a pintar.', next: 'male' },
        ],
      },
      foedder: {
        emoji: '🦶',
        text: 'Linu tog skoene af og stillede sig i vandet, mens Ole tog et billede af ham. En bølge, der var større end de andre, gjorde ham våd helt op til knæene. Ole grinede og sagde, at det var den bedste måde at lære havet at kende på.',
        translation: 'O Linu tirou os sapatos e entrou na água enquanto o Ole tirava uma foto dele. Uma onda maior que as outras o molhou até os joelhos. O Ole riu e disse que aquele era o melhor jeito de conhecer o mar.',
        choices: [{ text: 'Linu satte staffeliet op og begyndte at male.', translation: 'O Linu montou o cavalete e começou a pintar.', next: 'male' }],
      },
      male: {
        emoji: '🟨',
        text: 'Linu malede himlen, havet og sandet, men farverne blev ikke, som han ville. Ole kiggede på billedet og sagde, at Linu brugte for meget gult. Han forklarede, at lyset i Skagen er blåere end de fleste andre steder, især om aftenen.',
        translation: 'O Linu pintou o céu, o mar e a areia, mas as cores não ficaram como ele queria. O Ole olhou o quadro e disse que o Linu estava usando amarelo demais. Explicou que a luz em Skagen é mais azul do que na maioria dos outros lugares, principalmente ao entardecer.',
        choices: [
          { text: 'Linu ventede på aftenlyset og malede igen.', translation: 'O Linu esperou a luz do entardecer e pintou de novo.', next: 'aften' },
          { text: 'Linu syntes, at hans billede var godt nok, og gik hjem.', translation: 'O Linu achou que seu quadro estava bom o bastante e foi embora.', next: 'hjem' },
        ],
      },
      aften: {
        emoji: '🌆',
        text: 'Da solen var gået ned, fik himlen og havet næsten samme farve. Linu forstod nu, hvad Ole havde ment: det var det blåeste lys, han nogensinde havde set. Ole hviskede, at det var den time, som malerne i Skagen havde elsket mest.',
        translation: 'Quando o sol se pôs, o céu e o mar ficaram quase da mesma cor. O Linu entendeu então o que o Ole queria dizer: era a luz mais azul que ele já tinha visto. O Ole sussurrou que aquela era a hora que os pintores de Skagen mais tinham amado.',
        choices: [
          { text: 'Linu malede så hurtigt, han kunne, før lyset forsvandt.', translation: 'O Linu pintou o mais rápido que pôde, antes que a luz sumisse.', next: 'final_bom' },
          {
            text: 'Linu pakkede sammen og ventede til næste morgen, fordi Ole havde sagt, at lyset var blåest om morgenen.',
            translation: 'O Linu guardou tudo e esperou até a manhã seguinte, porque o Ole tinha dito que a luz era mais azul de manhã.',
            wrong: 'O Ole disse que a luz é mais azul «især om aftenen» — principalmente AO ENTARDECER. E aquela era justamente a hora preferida dos pintores!',
          },
        ],
      },
      hjem: {
        emoji: '🏠',
        text: 'Linu gik tilbage til vandrerhjemmet med sit gule billede under armen. Om aftenen så han fra vinduet, at himlen blev dybblå over havet. Han forstod, at han var gået hjem for tidligt, og besluttede at prøve igen næste dag.',
        translation: 'O Linu voltou ao albergue com seu quadro amarelo debaixo do braço. À noite, viu da janela o céu ficar azul-escuro sobre o mar. Entendeu que tinha ido embora cedo demais e decidiu tentar de novo no dia seguinte.',
        ending: { tone: 'neutro', title: 'Cedo demais', message: 'O Linu perdeu a hora azul por pouco. Em Skagen, vale esperar o fim do dia!' },
      },
      final_bom: {
        emoji: '💙',
        text: 'Billedet blev ikke perfekt, men det var blåt og stille, ligesom aftenen. Ole sagde, at det var det bedste billede, en elev havde malet på hans kursus i år. Linu hængte det op over sin seng, da han kom hjem.',
        translation: 'O quadro não ficou perfeito, mas era azul e calmo, como aquele fim de tarde. O Ole disse que era o melhor quadro que um aluno tinha pintado no curso dele naquele ano. O Linu o pendurou em cima da cama quando voltou para casa.',
        ending: { tone: 'bom', title: 'A hora azul', message: 'Paciência recompensada: o Linu pintou a luz azul que encantou os pintores de Skagen.' },
      },
    },
  },
  {
    id: 'da-h24',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Lunderne på Mykines',
    emoji: '🐧',
    summary: 'Nas Ilhas Faroé, o Linu aprende um pouco de feroês com a família que o hospeda e tenta chegar à ilha de Mykines para ver os papagaios-do-mar.',
    cultural_context:
      'As Ilhas Faroé são um território autônomo dentro do Reino da Dinamarca, com língua própria, o feroês, mais próximo do islandês que do dinamarquês; o dinamarquês é ensinado nas escolas. A ilha de Mykines, no extremo oeste do arquipélago, é famosa pelas colônias de papagaios-do-mar (lunder, em dinamarquês), que passam o verão ali e o inverno em alto-mar.',
    start: 'start',
    glossary: [
      ['lunde', 'papagaio-do-mar (puffin)'],
      ['færøsk', 'feroês'],
      ['ligner mere … end', 'se parece mais com … do que'],
      ['flest', 'o maior número, mais'],
      ['den stejleste', 'a mais íngreme'],
      ['kajen', 'o cais'],
      ['aflyst', 'cancelado'],
      ['takk fyri', 'obrigado (em feroês)'],
    ],
    nodes: {
      start: {
        emoji: '🏔️',
        text: 'Linu var kommet til Tórshavn på Færøerne, hvor han boede hos en familie, som han havde fundet på nettet. Værtsfaren, Jógvan, talte dansk med ham, men færøsk med sine børn. Linu syntes, at færøsk lød helt anderledes end dansk.',
        translation: 'O Linu tinha chegado a Tórshavn, nas Ilhas Faroé, onde estava hospedado com uma família que tinha achado na internet. O dono da casa, Jógvan, falava dinamarquês com ele, mas feroês com os filhos. O Linu achava que o feroês soava completamente diferente do dinamarquês.',
        choices: [
          { text: 'Linu spurgte Jógvan om forskellen på de to sprog.', translation: 'O Linu perguntou ao Jógvan qual era a diferença entre as duas línguas.', next: 'sprog' },
          { text: 'Linu spurgte, hvordan han kunne komme til Mykines.', translation: 'O Linu perguntou como podia chegar a Mykines.', next: 'mykines' },
        ],
      },
      sprog: {
        emoji: '🗣️',
        text: 'Jógvan forklarede, at færøsk ligner islandsk mere end dansk, fordi begge sprog er udviklet fra det sprog, som de norske bosættere talte for over tusind år siden. Alle færinger lærer dansk i skolen, men hjemme taler de færøsk. Han lærte Linu at sige «takk fyri», som betyder tak.',
        translation: 'O Jógvan explicou que o feroês se parece mais com o islandês do que com o dinamarquês, porque as duas línguas vêm da língua que os colonos noruegueses falavam há mais de mil anos. Todos os feroeses aprendem dinamarquês na escola, mas em casa falam feroês. Ele ensinou o Linu a dizer «takk fyri», que quer dizer obrigado.',
        choices: [
          { text: 'Linu sagde «takk fyri» og spurgte om vejen til Mykines.', translation: 'O Linu disse «takk fyri» e perguntou o caminho para Mykines.', next: 'mykines' },
          {
            text: 'Linu forstod, at færøsk bare er en dansk dialekt.',
            translation: 'O Linu entendeu que o feroês é só um dialeto do dinamarquês.',
            wrong: 'O Jógvan disse que o feroês «ligner islandsk mere end dansk» — se parece MAIS com o islandês DO QUE com o dinamarquês. É uma língua própria, não um dialeto.',
          },
        ],
      },
      mykines: {
        emoji: '📻',
        text: 'Jógvan sagde, at Mykines var den ø, hvor der var flest lunder, men at båden kun sejlede, når havet var roligt. Han havde hørt i radioen, at det ville blæse op om eftermiddagen. Hvis Linu ville af sted, skulle han tage den første båd om morgenen.',
        translation: 'O Jógvan disse que Mykines era a ilha com mais papagaios-do-mar, mas que o barco só saía quando o mar estava calmo. Ele tinha ouvido no rádio que ia ventar forte à tarde. Se o Linu quisesse ir, devia pegar o primeiro barco da manhã.',
        choices: [
          { text: 'Linu stod tidligt op og tog den første båd.', translation: 'O Linu acordou cedo e pegou o primeiro barco.', next: 'baad' },
          { text: 'Linu sov længe og ville tage båden om eftermiddagen.', translation: 'O Linu dormiu até tarde e quis pegar o barco da tarde.', next: 'sen' },
          {
            text: 'Linu ventede til eftermiddagen, fordi Jógvan havde sagt, at vejret ville blive bedre.',
            translation: 'O Linu esperou até a tarde, porque o Jógvan tinha dito que o tempo ia melhorar.',
            wrong: 'O Jógvan contou o que tinha ouvido no rádio: «at det ville blæse op om eftermiddagen» — que ia VENTAR FORTE à tarde. Por isso o conselho era pegar o primeiro barco.',
          },
        ],
      },
      sen: {
        emoji: '🌬️',
        text: 'Da Linu kom ned til havnen om eftermiddagen, var bølgerne store og hvide. På et skilt ved billetkontoret stod der, at alle afgange var aflyst resten af dagen. Linu forstod nu, hvorfor Jógvan havde sagt, at han skulle tage den første båd.',
        translation: 'Quando o Linu chegou ao porto à tarde, as ondas estavam grandes e brancas de espuma. Numa placa na bilheteria estava escrito que todas as saídas estavam canceladas pelo resto do dia. O Linu entendeu então por que o Jógvan tinha dito que ele devia pegar o primeiro barco.',
        ending: { tone: 'neutro', title: 'O mar decidiu', message: 'Nas Faroé, quem manda é o tempo. Os papagaios-do-mar ficam para outro dia — de manhã cedo!' },
      },
      baad: {
        emoji: '⛴️',
        text: 'Båden var lille, og havet var større end noget, Linu havde sejlet på før. Efter en times sejlads nåede de Mykines, der rejste sig stejlt op af havet. En lokal guide, Rakul, som mødte dem på kajen, fortalte, at stien til lunderne var den stejleste på hele øen.',
        translation: 'O barco era pequeno, e o mar era maior do que qualquer coisa em que o Linu já tinha navegado. Depois de uma hora de viagem, chegaram a Mykines, que se erguia íngreme do mar. Uma guia local, Rakul, que os recebeu no cais, contou que a trilha até os papagaios-do-mar era a mais íngreme da ilha.',
        choices: [
          { text: 'Linu fulgte med Rakul op ad stien.', translation: 'O Linu acompanhou a Rakul trilha acima.', next: 'sti' },
          { text: 'Linu blev nede i landsbyen og drak kaffe først.', translation: 'O Linu ficou no vilarejo e tomou um café antes.', next: 'kaffe' },
        ],
      },
      kaffe: {
        emoji: '☕',
        text: 'I den lille landsby med græstag drak Linu kaffe med en gammel mand, der havde boet på øen hele sit liv. Manden fortalte, at der kun boede meget få mennesker på Mykines hele året. Han sagde, at lunderne var øens vigtigste gæster om sommeren.',
        translation: 'No vilarejo de telhados de grama, o Linu tomou café com um senhor que tinha morado na ilha a vida inteira. O homem contou que pouquíssimas pessoas moravam em Mykines o ano todo. Disse que os papagaios-do-mar eram os hóspedes mais importantes da ilha no verão.',
        choices: [{ text: 'Linu skyndte sig op ad stien efter de andre.', translation: 'O Linu subiu a trilha depressa atrás dos outros.', next: 'sti' }],
      },
      sti: {
        emoji: '🥾',
        text: 'Stien gik langs kanten af en høj klippe, og Rakul bad alle om at gå langsomt. Øverst oppe sad der hundredvis af lunder med farverige næb, og de var mindre, end Linu havde troet. Rakul fortalte, at lunderne kun er på øen om sommeren og tilbringer vinteren ude på havet.',
        translation: 'A trilha seguia pela beira de um penhasco alto, e a Rakul pediu a todos que andassem devagar. Lá em cima havia centenas de papagaios-do-mar de bico colorido, e eles eram menores do que o Linu imaginava. A Rakul contou que eles só ficam na ilha no verão e passam o inverno em alto-mar.',
        choices: [
          { text: 'Linu satte sig stille og kiggede på fuglene.', translation: 'O Linu sentou quietinho e ficou olhando os pássaros.', next: 'final_bom' },
          { text: 'Linu gik helt ud til kanten for at tage et bedre billede.', translation: 'O Linu foi até a beirada para tirar uma foto melhor.', next: 'kant' },
        ],
      },
      kant: {
        emoji: '⚠️',
        text: 'Rakul stoppede ham med det samme og sagde, at kanten var farligere, end den så ud, fordi græsset var glat. Hun forklarede, at lunderne også ville blive bange, hvis han kom for tæt på. Linu undskyldte og satte sig ved siden af hende.',
        translation: 'A Rakul o parou na hora e disse que a beirada era mais perigosa do que parecia, porque a grama era escorregadia. Ela explicou que os papagaios-do-mar também se assustariam se ele chegasse perto demais. O Linu pediu desculpas e sentou ao lado dela.',
        choices: [{ text: 'Linu ventede stille på, at fuglene kom tættere på.', translation: 'O Linu esperou em silêncio que os pássaros se aproximassem.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🐟',
        text: 'En lunde landede kun et par meter fra Linu med næbbet fuldt af små fisk. Den kiggede på ham, som om den undrede sig over, hvad en pingvin lavede her. Linu tænkte, at det var den bedste dag, han havde haft på hele rejsen.',
        translation: 'Um papagaio-do-mar pousou a poucos metros do Linu com o bico cheio de peixinhos. Ele olhou para o Linu como se estivesse se perguntando o que um pinguim fazia ali. O Linu achou que aquele era o melhor dia da viagem inteira.',
        ending: { tone: 'bom', title: 'Primos do norte', message: 'Madrugando e respeitando a beirada do penhasco, o Linu viu de perto os papagaios-do-mar de Mykines.' },
      },
    },
  },
  // ───────────────────────── B2.1 ─────────────────────────
  {
    id: 'da-h25',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Ombord på et vikingeskib',
    emoji: '⛵',
    summary: 'Voluntário no Museu dos Navios Vikings de Roskilde, o Linu navega numa réplica pelo fiorde e precisa decidir entre remar e içar a vela quando o vento vira.',
    cultural_context:
      'Por volta de 1070, os próprios vikings afundaram cinco navios no fiorde de Roskilde, perto de Skuldelev, para bloquear a passagem de inimigos. Em 1962, arqueólogos cercaram o local com um dique, bombearam a água e escavaram os navios, que hoje estão no Vikingeskibsmuseet, em Roskilde. O museu constrói réplicas navegáveis, e no verão o público pode sair no fiorde a bordo delas.',
    start: 'start',
    glossary: [
      ['skipperen', 'o capitão (de barco pequeno)'],
      ['hvis jeg var dig, ville jeg …', 'se eu fosse você, eu …'],
      ['havde du lyttet', 'se você tivesse ouvido'],
      ['ville have vidst', 'teria sabido'],
      ['spærre', 'bloquear'],
      ['gå på grund', 'encalhar'],
      ['årerne', 'os remos'],
      ['hejse sejlet', 'içar a vela'],
    ],
    nodes: {
      start: {
        emoji: '🛶',
        text: 'Linu var frivillig på Vikingeskibsmuseet i Roskilde, hvor man kan sejle i kopier af gamle vikingeskibe. Skipperen, Rasmus, sagde, at de ville sejle ud på fjorden, hvis vinden holdt. «Hvis jeg var dig, ville jeg tage en ekstra trøje med», tilføjede han og kiggede på de grå skyer.',
        translation: 'O Linu era voluntário no Museu dos Navios Vikings de Roskilde, onde se pode navegar em réplicas de antigos navios vikings. O capitão, Rasmus, disse que eles sairiam pelo fiorde se o vento se mantivesse. «Se eu fosse você, levaria um suéter a mais», acrescentou ele, olhando as nuvens cinzentas.',
        choices: [
          { text: 'Linu hentede en ekstra trøje.', translation: 'O Linu foi buscar um suéter a mais.', next: 'troeje' },
          { text: 'Linu sagde, at han ikke frøs let, og gik om bord.', translation: 'O Linu disse que não sentia frio fácil e embarcou.', next: 'frys' },
        ],
      },
      troeje: {
        emoji: '🧶',
        text: 'Linu hentede sin tykkeste trøje og gik om bord. Skibet var smallere, end han havde troet, og der var hverken tag eller kahyt. Rasmus forklarede, at vikingerne sad på deres kister og roede, når der ikke var vind nok.',
        translation: 'O Linu buscou seu suéter mais grosso e embarcou. O navio era mais estreito do que ele imaginava, e não havia nem teto nem cabine. O Rasmus explicou que os vikings sentavam nos seus baús e remavam quando não havia vento suficiente.',
        choices: [{ text: 'Linu tog plads ved en åre.', translation: 'O Linu se sentou junto a um remo.', next: 'fjord' }],
      },
      frys: {
        emoji: '🥶',
        text: 'Ude på fjorden begyndte det at blæse koldt, og Linu frøs, så tænderne klaprede. En af de andre roere, Freja, lånte ham sin jakke. «Havde du lyttet til Rasmus, ville du ikke fryse nu», sagde hun med et smil.',
        translation: 'No fiorde começou a soprar um vento frio, e o Linu tremia tanto que os dentes batiam. Uma das outras remadoras, Freja, emprestou a jaqueta dela. «Se você tivesse ouvido o Rasmus, não estaria com frio agora», disse ela, sorrindo.',
        choices: [{ text: 'Linu takkede Freja og tog fat i åren.', translation: 'O Linu agradeceu à Freja e pegou o remo.', next: 'fjord' }],
      },
      fjord: {
        emoji: '🌫️',
        text: 'Midt på fjorden fortalte Rasmus, at vikingerne selv havde sænket fem skibe her omkring år 1070. De ville spærre fjorden, så fjender ikke kunne sejle ind til Roskilde. Hvis man ikke kendte den smalle vej forbi skibene, ville man gå på grund.',
        translation: 'No meio do fiorde, o Rasmus contou que os próprios vikings tinham afundado cinco navios ali por volta do ano 1070. Eles queriam bloquear o fiorde para que inimigos não pudessem chegar a Roskilde. Quem não conhecesse a passagem estreita entre os navios encalharia.',
        choices: [
          { text: 'Linu spurgte, hvordan skibene var blevet fundet.', translation: 'O Linu perguntou como os navios tinham sido encontrados.', next: 'fundet' },
          {
            text: 'Linu forstod, at skibene var sunket i en storm.',
            translation: 'O Linu entendeu que os navios tinham afundado numa tempestade.',
            wrong: 'O Rasmus disse que os vikings «selv havde sænket» os navios — os PRÓPRIOS vikings os afundaram, de propósito, para bloquear o fiorde contra inimigos. Não foi tempestade.',
          },
        ],
      },
      fundet: {
        emoji: '🏺',
        text: 'Rasmus fortalte, at arkæologerne i 1962 byggede en dæmning rundt om stedet og pumpede vandet væk. Så kunne de grave skibene ud, stykke for stykke. «Hvis de ikke havde gjort det, ville vi aldrig have vidst, hvordan vikingerne byggede deres skibe», sagde han.',
        translation: 'O Rasmus contou que, em 1962, os arqueólogos construíram um dique em volta do local e bombearam a água para fora. Aí puderam escavar os navios, pedaço por pedaço. «Se eles não tivessem feito isso, nunca teríamos sabido como os vikings construíam seus navios», disse ele.',
        choices: [{ text: 'Linu kiggede ned i det mørke vand.', translation: 'O Linu olhou para a água escura.', next: 'vind' }],
      },
      vind: {
        emoji: '🌧️',
        text: 'Pludselig drejede vinden, og det begyndte at regne. Rasmus sagde, at de enten kunne ro tilbage med det samme eller hejse sejlet og krydse op mod vinden. Hvis de valgte sejlet, ville turen tage længere tid, men de ville lære mere. Han lod besætningen stemme.',
        translation: 'De repente o vento virou e começou a chover. O Rasmus disse que eles podiam voltar remando na mesma hora ou içar a vela e bordejar contra o vento. Se escolhessem a vela, a volta demoraria mais, mas eles aprenderiam mais. Ele deixou a tripulação votar.',
        choices: [
          { text: 'Linu stemte for at ro tilbage.', translation: 'O Linu votou por voltar remando.', next: 'ro' },
          { text: 'Linu stemte for at prøve med sejlet.', translation: 'O Linu votou por tentar com a vela.', next: 'sejl' },
        ],
      },
      ro: {
        emoji: '💦',
        text: 'Alle tog fat i årerne, og Linu roede, så armene gjorde ondt. Efter en time var de tilbage i havnen, våde og trætte. Rasmus sagde, at vikingerne sikkert ville have gjort det samme, hvis de havde haft travlt. Linu tænkte, at han gerne ville have prøvet sejlet.',
        translation: 'Todos pegaram os remos, e o Linu remou até os braços doerem. Depois de uma hora estavam de volta ao porto, molhados e cansados. O Rasmus disse que os vikings com certeza teriam feito o mesmo se estivessem com pressa. O Linu pensou que teria gostado de experimentar a vela.',
        ending: { tone: 'neutro', title: 'Braço de viking', message: 'Voltaram em segurança, à força de remo. A vela quadrada fica para a próxima viagem.' },
      },
      sejl: {
        emoji: '🟥',
        text: 'Det store, firkantede sejl blev hejst, og skibet begyndte at bevæge sig hurtigere. Rasmus viste Linu, hvordan han skulle holde tovet stramt, og sagde, at han ville have været en god viking. Linu svarede, at han så hellere ville have været en viking med regnjakke.',
        translation: 'A grande vela quadrada foi içada, e o navio começou a andar mais rápido. O Rasmus mostrou ao Linu como segurar o cabo bem esticado e disse que ele teria sido um bom viking. O Linu respondeu que, nesse caso, preferiria ter sido um viking de capa de chuva.',
        choices: [
          { text: 'Linu holdt tovet stramt hele vejen hjem.', translation: 'O Linu segurou o cabo esticado o caminho todo.', next: 'final_bom' },
          {
            text: 'Linu slap tovet, fordi Rasmus havde sagt, at han ikke var god nok.',
            translation: 'O Linu soltou o cabo, porque o Rasmus tinha dito que ele não era bom o bastante.',
            wrong: 'O Rasmus disse que o Linu «ville have været en god viking» — TERIA SIDO um bom viking. É um elogio no condicional passado, não uma crítica.',
          },
        ],
      },
      final_bom: {
        emoji: '🌤️',
        text: 'Da de lagde til i havnen, var regnen holdt op, og solen skinnede over domkirken. Rasmus gav Linu hånden og sagde, at han var velkommen i besætningen, hvis han ville komme igen næste sommer. Linu svarede, at han ikke ville have misset turen for noget i verden.',
        translation: 'Quando atracaram no porto, a chuva tinha parado, e o sol brilhava sobre a catedral. O Rasmus apertou a mão do Linu e disse que ele seria bem-vindo na tripulação se quisesse voltar no verão seguinte. O Linu respondeu que não teria perdido aquele passeio por nada neste mundo.',
        ending: { tone: 'bom', title: 'Tripulante viking', message: 'Com a vela quadrada e muita chuva, o Linu navegou como os vikings no fiorde de Roskilde.' },
      },
    },
  },
  {
    id: 'da-h26',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Hvis ællingen aldrig blev en svane',
    emoji: '🦢',
    summary: 'Numa oficina de escrita em Odense, cidade natal de Hans Christian Andersen, o Linu precisa inventar um novo final para um conto de fadas.',
    cultural_context:
      'Hans Christian Andersen (1805–1875) nasceu em Odense, na ilha de Fiônia, filho de um sapateiro pobre, e aos 14 anos foi sozinho para Copenhague tentar a sorte. Seus contos, como «O patinho feio» (Den grimme ælling) e «A roupa nova do imperador» (Kejserens nye klæder), foram traduzidos para mais de cem línguas.',
    start: 'start',
    glossary: [
      ['eventyr', 'conto de fadas'],
      ['ælling', 'patinho'],
      ['svane', 'cisne'],
      ['hvis I kunne …, hvilket ville I så …', 'se vocês pudessem…, qual vocês…'],
      ['hvis barnet havde tiet stille', 'se a criança tivesse ficado calada'],
      ['ville have grinet', 'teria rido'],
      ['forlag', 'editora'],
      ['læse op', 'ler em voz alta'],
    ],
    nodes: {
      start: {
        emoji: '📚',
        text: 'Linu var i Odense, hvor H.C. Andersen blev født i 1805. På biblioteket deltog han i et skriveværksted med Else, der skrev børnebøger. Hun spurgte gruppen: «Hvis I kunne ændre slutningen på et af Andersens eventyr, hvilket ville I så vælge?»',
        translation: 'O Linu estava em Odense, onde H. C. Andersen nasceu em 1805. Na biblioteca, ele participava de uma oficina de escrita com a Else, que escrevia livros infantis. Ela perguntou ao grupo: «Se vocês pudessem mudar o final de um dos contos de Andersen, qual escolheriam?»',
        choices: [
          { text: 'Linu valgte «Den grimme ælling».', translation: 'O Linu escolheu «O patinho feio».', next: 'aelling' },
          { text: 'Linu valgte «Kejserens nye klæder».', translation: 'O Linu escolheu «A roupa nova do imperador».', next: 'kejser' },
        ],
      },
      aelling: {
        emoji: '🐣',
        text: 'Else mindede dem om, at den grimme ælling til sidst opdager, at den i virkeligheden er en svane. Hun spurgte, hvad der ville ske, hvis den aldrig blev til en svane. Linu tænkte længe, før han svarede.',
        translation: 'A Else lembrou que o patinho feio descobre, no fim, que na verdade é um cisne. Ela perguntou o que aconteceria se ele nunca virasse cisne. O Linu pensou bastante antes de responder.',
        choices: [
          { text: 'Linu sagde, at ællingen så ville lære at være glad for sig selv.', translation: 'O Linu disse que o patinho, então, aprenderia a gostar de si mesmo.', next: 'glad' },
          {
            text: 'Linu sagde, at han ikke kunne svare, fordi ællingen bliver til en høne i eventyret.',
            translation: 'O Linu disse que não podia responder, porque no conto o patinho vira uma galinha.',
            wrong: 'A Else lembrou que, no conto, o patinho descobre que «i virkeligheden er en svane» — que na verdade é um CISNE. A pergunta era justamente: e se ele NUNCA virasse cisne?',
          },
        ],
      },
      glad: {
        emoji: '💛',
        text: 'Else syntes, at det var en fin idé, og bad ham skrive den ned. Linu skrev om en ælling, der aldrig blev smuk, men som fandt venner, der kunne lide den alligevel. «Hvis Andersen havde læst det, ville han måske have grinet», sagde Else.',
        translation: 'A Else achou a ideia boa e pediu que ele a escrevesse. O Linu escreveu sobre um patinho que nunca ficou bonito, mas que encontrou amigos que gostavam dele assim mesmo. «Se o Andersen tivesse lido isso, talvez tivesse dado risada», disse a Else.',
        choices: [{ text: 'Linu gjorde sin historie færdig.', translation: 'O Linu terminou sua história.', next: 'oplaes' }],
      },
      kejser: {
        emoji: '👑',
        text: 'I eventyret går kejseren nøgen gennem byen, fordi ingen tør sige, at de ikke kan se hans nye tøj. Kun et lille barn råber sandheden. Else spurgte, hvad der ville være sket, hvis barnet havde tiet stille.',
        translation: 'No conto, o imperador desfila nu pela cidade, porque ninguém tem coragem de dizer que não enxerga a roupa nova dele. Só uma criança pequena grita a verdade. A Else perguntou o que teria acontecido se a criança tivesse ficado calada.',
        choices: [
          { text: 'Linu sagde, at kejseren så ville være gået nøgen rundt resten af livet.', translation: 'O Linu disse que, nesse caso, o imperador teria andado nu pelo resto da vida.', next: 'noegen' },
          {
            text: 'Linu sagde, at det var kejseren selv, der råbte sandheden.',
            translation: 'O Linu disse que foi o próprio imperador quem gritou a verdade.',
            wrong: 'No conto, «kun et lille barn råber sandheden» — SÓ UMA CRIANÇA PEQUENA grita a verdade. O imperador segue desfilando, sem admitir nada.',
          },
        ],
      },
      noegen: {
        emoji: '🐧',
        text: 'Hele gruppen grinede, og Else sagde, at det var en god begyndelse. Linu skrev en historie om en kejser, der gik nøgen rundt i årevis, fordi ingen turde sige noget, indtil en pingvin kom til byen. Else sagde, at pingvinen mindede hende om nogen.',
        translation: 'O grupo inteiro riu, e a Else disse que era um bom começo. O Linu escreveu uma história sobre um imperador que andou nu durante anos, porque ninguém tinha coragem de dizer nada, até que um pinguim chegou à cidade. A Else disse que o pinguim a fazia lembrar de alguém.',
        choices: [{ text: 'Linu gjorde sin historie færdig.', translation: 'O Linu terminou sua história.', next: 'oplaes' }],
      },
      oplaes: {
        emoji: '🎤',
        text: 'Til sidst skulle alle læse deres historie op for de andre. Linu var nervøs, fordi hans dansk ikke var perfekt. Else sagde, at hvis han hellere ville, kunne han også bare aflevere teksten til hende.',
        translation: 'No fim, todos iam ler a sua história em voz alta para os outros. O Linu estava nervoso, porque o dinamarquês dele não era perfeito. A Else disse que, se ele preferisse, podia também só entregar o texto a ela.',
        choices: [
          { text: 'Linu læste sin historie højt.', translation: 'O Linu leu sua história em voz alta.', next: 'hoejt' },
          { text: 'Linu afleverede teksten og gik.', translation: 'O Linu entregou o texto e foi embora.', next: 'aflever' },
        ],
      },
      hoejt: {
        emoji: '👏',
        text: 'Linu læste langsomt og snublede over et par ord, men alle lyttede. Da han var færdig, klappede de andre, og en lille pige spurgte, om historien fandtes som bog. Else sagde, at hvis han skrev flere, ville hun gerne hjælpe ham med at finde et forlag.',
        translation: 'O Linu leu devagar e tropeçou em algumas palavras, mas todos prestaram atenção. Quando terminou, os outros aplaudiram, e uma menininha perguntou se a história existia em livro. A Else disse que, se ele escrevesse mais, ela o ajudaria de bom grado a encontrar uma editora.',
        choices: [{ text: 'Linu lovede at skrive flere historier.', translation: 'O Linu prometeu escrever mais histórias.', next: 'final_bom' }],
      },
      aflever: {
        emoji: '🚶',
        text: 'Linu gav teksten til Else og gik ud i solen. På vej hjem gik han forbi Andersens barndomshjem, et lille hus i en smal gade. Han tænkte, at hvis han havde været lidt modigere, ville han også have hørt, hvad de andre syntes om hans historie.',
        translation: 'O Linu entregou o texto à Else e saiu para o sol. No caminho de volta, passou pela casa onde Andersen viveu na infância, uma casinha numa rua estreita. Pensou que, se tivesse sido um pouco mais corajoso, também teria ouvido o que os outros achavam da história dele.',
        ending: { tone: 'neutro', title: 'Coragem para a próxima', message: 'A história ficou pronta, mas ninguém a ouviu. Da próxima vez, o Linu promete ler em voz alta.' },
      },
      final_bom: {
        emoji: '✒️',
        text: 'Om aftenen gik Linu forbi Andersens barndomshjem, et lille hus i en smal gade. Andersen var søn af en fattig skomager og rejste alene til København som fjortenårig. Linu tænkte, at hvis en fattig dreng fra Odense kunne blive verdensberømt, kunne en pingvin måske også skrive en bog.',
        translation: 'À noite, o Linu passou pela casa onde Andersen viveu na infância, uma casinha numa rua estreita. Andersen era filho de um sapateiro pobre e foi sozinho para Copenhague aos quatorze anos. O Linu pensou que, se um menino pobre de Odense tinha conseguido ficar famoso no mundo todo, talvez um pinguim também pudesse escrever um livro.',
        ending: { tone: 'bom', title: 'Um novo contador de histórias', message: 'O Linu leu seu conto em voz alta na cidade de Andersen — e ganhou vontade de escrever mais.' },
      },
    },
  },
  {
    id: 'da-h27',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Blandt isbjergene i Ilulissat',
    emoji: '🧊',
    summary: 'Na Groenlândia, o Linu sai de barco entre os icebergs de Ilulissat com o capitão Aputsiaq, que sabe muito bem o que aconteceria se chegassem perto demais.',
    cultural_context:
      'Ilulissat, na costa oeste da Groenlândia, fica na foz de um fiorde cheio de icebergs que se desprendem da geleira Sermeq Kujalleq, uma das mais rápidas do mundo; o fiorde é Patrimônio Mundial da UNESCO desde 2004. O nome da cidade significa «icebergs» em groenlandês (kalaallisut), a língua oficial da Groenlândia.',
    start: 'start',
    glossary: [
      ['isbjerg', 'iceberg'],
      ['gletsjer', 'geleira'],
      ['kælve', 'desprender-se (um pedaço de gelo)'],
      ['vælte', 'virar, tombar'],
      ['hvis det skete, ville …', 'se isso acontecesse, …'],
      ['ville have været i fare', 'teriam estado em perigo'],
      ['tågen lettede', 'a neblina se dissipou'],
      ['qujanaq', 'obrigado (em groenlandês)'],
    ],
    nodes: {
      start: {
        emoji: '🌁',
        text: 'Linu var kommet til Ilulissat i det vestlige Grønland for at se isfjorden. På havnen mødte han skipperen Aputsiaq, som sejlede turister ud mellem isbjergene. Han hilste på grønlandsk og forklarede så på dansk, at båden ville sejle om en halv time, hvis tågen lettede.',
        translation: 'O Linu tinha chegado a Ilulissat, no oeste da Groenlândia, para ver o fiorde de gelo. No porto, encontrou o capitão Aputsiaq, que levava turistas de barco entre os icebergs. Ele cumprimentou em groenlandês e depois explicou em dinamarquês que o barco sairia dali a meia hora, se a neblina se dissipasse.',
        choices: [
          { text: 'Linu ventede på kajen og så tågen lette.', translation: 'O Linu esperou no cais e viu a neblina se dissipar.', next: 'taage' },
          { text: 'Linu spurgte, hvad «Ilulissat» betyder.', translation: 'O Linu perguntou o que quer dizer «Ilulissat».', next: 'navn' },
          { text: 'Linu gik på café, fordi han var sikker på, at tågen ikke ville lette.', translation: 'O Linu foi a um café, porque tinha certeza de que a neblina não ia se dissipar.', next: 'cafe' },
        ],
      },
      navn: {
        emoji: '🔤',
        text: 'Aputsiaq forklarede, at Ilulissat betyder «isbjergene» på grønlandsk, som er det officielle sprog i Grønland. Han lærte Linu at sige «qujanaq», som betyder tak. «Hvis du siger det til folk her, bliver de glade», sagde han, mens tågen langsomt forsvandt.',
        translation: 'O Aputsiaq explicou que Ilulissat quer dizer «os icebergs» em groenlandês, que é a língua oficial da Groenlândia. Ele ensinou o Linu a dizer «qujanaq», que significa obrigado. «Se você disser isso para as pessoas daqui, elas vão ficar contentes», disse ele, enquanto a neblina ia sumindo devagar.',
        choices: [
          { text: 'Linu sagde «qujanaq» og gik om bord.', translation: 'O Linu disse «qujanaq» e embarcou.', next: 'taage' },
          {
            text: 'Linu forstod, at dansk er det eneste officielle sprog i Grønland.',
            translation: 'O Linu entendeu que o dinamarquês é a única língua oficial da Groenlândia.',
            wrong: 'O Aputsiaq disse que o groenlandês «er det officielle sprog i Grønland» — É a língua oficial da Groenlândia. O dinamarquês também é muito usado, mas a língua oficial é o groenlandês (kalaallisut).',
          },
        ],
      },
      cafe: {
        emoji: '☕',
        text: 'Linu drak kaffe og kiggede ud på den tætte tåge. Da han kom tilbage til havnen tre kvarter senere, var himlen klar, og båden var allerede sejlet. En fisker sagde, at hvis han var blevet på kajen, ville han være kommet med.',
        translation: 'O Linu tomou café olhando a neblina densa. Quando voltou ao porto, quarenta e cinco minutos depois, o céu estava limpo e o barco já tinha partido. Um pescador disse que, se ele tivesse ficado no cais, teria conseguido ir junto.',
        ending: { tone: 'neutro', title: 'O barco partiu', message: 'No Ártico, a neblina vai e vem depressa. O Linu vai tentar de novo amanhã — esperando no cais!' },
      },
      taage: {
        emoji: '🚤',
        text: 'Tågen lettede, og båden sejlede ud mellem isbjerge, der var større end huse. Nogle var kridhvide, andre næsten blå. Aputsiaq fortalte, at isen kom fra en af de hurtigste gletsjere i verden, længere inde i fjorden.',
        translation: 'A neblina se dissipou, e o barco saiu entre icebergs maiores que casas. Alguns eram branquíssimos, outros quase azuis. O Aputsiaq contou que o gelo vinha de uma das geleiras mais rápidas do mundo, mais para dentro do fiorde.',
        choices: [
          { text: 'Linu bad Aputsiaq om at sejle tættere på det største isbjerg.', translation: 'O Linu pediu ao Aputsiaq que chegasse mais perto do maior iceberg.', next: 'taet' },
          { text: 'Linu spurgte, hvorfor nogle af isbjergene var blå.', translation: 'O Linu perguntou por que alguns icebergs eram azuis.', next: 'blaa' },
        ],
      },
      blaa: {
        emoji: '💎',
        text: 'Aputsiaq forklarede, at isen bliver blå, når den er presset så hårdt sammen, at luftboblerne næsten forsvinder. Han fiskede et lille stykke is op af havet og gav det til Linu. «Hvis du smagte på det, ville du drikke vand, der er tusinder af år gammelt», sagde han.',
        translation: 'O Aputsiaq explicou que o gelo fica azul quando é comprimido com tanta força que as bolhas de ar quase desaparecem. Ele pescou um pedacinho de gelo do mar e o deu ao Linu. «Se você provasse, estaria bebendo uma água de milhares de anos», disse ele.',
        choices: [{ text: 'Linu smagte på isen.', translation: 'O Linu provou o gelo.', next: 'smag' }],
      },
      smag: {
        emoji: '😋',
        text: 'Isen smagte helt rent, og Linu tænkte, at det var det ældste, han nogensinde havde smagt. Aputsiaq lo og sagde: «Hvis du bliver her en uge mere, gør jeg dig til grønlænder.» Så vendte han båden mod havnen.',
        translation: 'O gelo tinha um gosto totalmente puro, e o Linu pensou que era a coisa mais antiga que já tinha provado. O Aputsiaq riu e disse: «Se você ficar aqui mais uma semana, eu te transformo em groenlandês.» Então virou o barco em direção ao porto.',
        choices: [{ text: 'Linu nød den sidste del af turen.', translation: 'O Linu aproveitou o último trecho do passeio.', next: 'final_bom' }],
      },
      taet: {
        emoji: '⚠️',
        text: 'Aputsiaq rystede på hovedet og forklarede, at et isbjerg kan kælve eller vælte uden varsel. Hvis det skete, mens de lå tæt på, ville bølgen kunne vælte båden. Derfor holdt han altid god afstand, uanset hvad turisterne ønskede.',
        translation: 'O Aputsiaq balançou a cabeça e explicou que um iceberg pode soltar um pedaço ou tombar sem aviso. Se isso acontecesse com eles por perto, a onda poderia virar o barco. Por isso ele sempre mantinha uma boa distância, não importava o que os turistas quisessem.',
        choices: [
          { text: 'Linu forstod det og tog billeder på afstand.', translation: 'O Linu entendeu e tirou fotos de longe.', next: 'kaelv' },
          {
            text: 'Linu blev skuffet, fordi Aputsiaq havde sagt, at isbjerge aldrig bevæger sig.',
            translation: 'O Linu ficou decepcionado, porque o Aputsiaq tinha dito que icebergs nunca se mexem.',
            wrong: 'O Aputsiaq disse o contrário: um iceberg pode «kælve eller vælte uden varsel» — soltar pedaços ou TOMBAR SEM AVISO. É por isso que ele não chega perto.',
          },
        ],
      },
      kaelv: {
        emoji: '💥',
        text: 'Kort efter hørte de et brag, der lød som torden. Et stort stykke is faldt af isbjerget og ramte vandet med et plask, der sendte bølger hen mod båden. Linu tænkte, at hvis de havde ligget tættere på, ville de have været i fare.',
        translation: 'Pouco depois, ouviram um estrondo que parecia um trovão. Um pedaço grande de gelo se soltou do iceberg e caiu na água com um baque que mandou ondas na direção do barco. O Linu pensou que, se eles estivessem mais perto, teriam corrido perigo.',
        choices: [{ text: 'Linu takkede Aputsiaq for, at han havde holdt afstand.', translation: 'O Linu agradeceu ao Aputsiaq por ter mantido distância.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🌞',
        text: 'Da båden lagde til i havnen igen, takkede Linu Aputsiaq for turen. Skipperen smilede og sagde, at han var velkommen igen næste sommer. Om aftenen sad Linu længe ved vinduet og så isbjergene lyse i midnatssolen.',
        translation: 'Quando o barco atracou de novo no porto, o Linu agradeceu ao Aputsiaq pelo passeio. O capitão sorriu e disse que ele seria bem-vindo de novo no verão seguinte. À noite, o Linu ficou muito tempo na janela vendo os icebergs brilharem sob o sol da meia-noite.',
        ending: { tone: 'bom', title: 'Sol da meia-noite', message: 'Com um capitão prudente, o Linu viu de perto — mas não perto demais — os icebergs de Ilulissat.' },
      },
    },
  },
  // ───────────────────────── B2.2 ─────────────────────────
  {
    id: 'da-h28',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Et brev fra kommunen',
    emoji: '✉️',
    summary: 'Recém-chegado a Copenhague, o Linu recebe uma carta formal da prefeitura e vai ao Borgerservice se registrar e ganhar seu número CPR.',
    cultural_context:
      'Quem se muda para a Dinamarca precisa se registrar no Folkeregister (o registro civil) pelo Borgerservice, o atendimento ao cidadão da prefeitura, e recebe um CPR-nummer, um número pessoal usado em quase tudo, do banco ao médico. Junto vem o sundhedskort, o cartão de saúde amarelo, que traz o nome do clínico geral escolhido. Nas cartas oficiais, a fórmula «du bedes…» («pede-se que você…») é a maneira educada de dar uma instrução.',
    start: 'start',
    glossary: [
      ['vedrørende', 'referente a, a respeito de'],
      ['du bedes møde op', 'pede-se que você compareça'],
      ['senest', 'no mais tardar, até'],
      ['lejekontrakt', 'contrato de aluguel'],
      ['sagsbehandleren', 'o/a atendente, o/a responsável pelo processo'],
      ['tildelt', 'atribuído, concedido'],
      ['sundhedskort', 'cartão de saúde'],
      ['bopæl', 'residência, domicílio'],
    ],
    nodes: {
      start: {
        emoji: '📬',
        text: 'Linu var lige flyttet til København for at studere, og en dag lå der et brev fra kommunen i hans postkasse. Der stod: «Vedrørende din anmodning om registrering i Folkeregistret. Du bedes møde op i Borgerservice med gyldigt pas og lejekontrakt senest den 15. oktober.» Linu læste brevet to gange.',
        translation: 'O Linu tinha acabado de se mudar para Copenhague para estudar, e um dia havia uma carta da prefeitura na caixa de correio dele. Dizia: «Referente à sua solicitação de registro no Registro Civil. Pede-se que você compareça ao Atendimento ao Cidadão com passaporte válido e contrato de aluguel até, no mais tardar, 15 de outubro.» O Linu leu a carta duas vezes.',
        choices: [
          { text: 'Linu fandt sit pas og sin lejekontrakt frem.', translation: 'O Linu separou o passaporte e o contrato de aluguel.', next: 'papirer' },
          { text: 'Linu ringede til kommunen for at spørge, hvad «du bedes» betyder.', translation: 'O Linu ligou para a prefeitura para perguntar o que quer dizer «du bedes».', next: 'ring' },
          {
            text: 'Linu svarede på brevet med en e-mail og regnede med, at sagen så var klaret.',
            translation: 'O Linu respondeu à carta por e-mail e achou que o assunto estava resolvido.',
            wrong: 'A carta diz «Du bedes møde op i Borgerservice» — pede-se que você COMPAREÇA pessoalmente ao Atendimento ao Cidadão, com passaporte e contrato. Um e-mail não resolve.',
          },
        ],
      },
      ring: {
        emoji: '📞',
        text: 'En venlig medarbejder forklarede, at «du bedes» er en høflig måde at sige «du skal» på i officielle breve. Hun tilføjede, at man bør bestille tid på kommunens hjemmeside, da der ofte er lang ventetid. Linu takkede og bestilte en tid til den følgende tirsdag.',
        translation: 'Uma funcionária simpática explicou que «du bedes» é um jeito educado de dizer «você deve» em cartas oficiais. Ela acrescentou que é recomendável agendar um horário no site da prefeitura, já que a espera costuma ser longa. O Linu agradeceu e agendou para a terça-feira seguinte.',
        choices: [{ text: 'Linu fandt sit pas og sin lejekontrakt frem.', translation: 'O Linu separou o passaporte e o contrato de aluguel.', next: 'papirer' }],
      },
      papirer: {
        emoji: '🎫',
        text: 'Tirsdag morgen tog Linu sit pas og sin lejekontrakt med til Borgerservice. Han trak et nummer og satte sig i venteværelset, hvor der hang en skærm med numre. Efter tyve minutter blev hans nummer kaldt op.',
        translation: 'Na terça de manhã, o Linu levou o passaporte e o contrato de aluguel ao Atendimento ao Cidadão. Ele pegou uma senha e se sentou na sala de espera, onde havia uma tela com números. Depois de vinte minutos, o número dele foi chamado.',
        choices: [{ text: 'Linu gik hen til skranken.', translation: 'O Linu foi até o guichê.', next: 'skranke' }],
      },
      skranke: {
        emoji: '🪪',
        text: 'Sagsbehandleren hilste og spurgte, hvad hun kunne hjælpe med. Linu havde øvet sig på en høflig sætning, men blev pludselig i tvivl, om han skulle sige «du» eller «De». Han vidste, at man skriver meget formelt i breve fra myndighederne.',
        translation: 'A atendente cumprimentou e perguntou em que podia ajudar. O Linu tinha ensaiado uma frase educada, mas de repente ficou em dúvida se devia dizer «du» (você) ou «De» (o senhor, a senhora). Ele sabia que as cartas das autoridades são escritas de forma bem formal.',
        choices: [
          { text: 'Linu sagde «du», ligesom alle andre han havde mødt.', translation: 'O Linu disse «du», como todo mundo que ele tinha conhecido.', next: 'du' },
          { text: 'Linu sagde «De» for at være ekstra høflig.', translation: 'O Linu disse «De» para ser extra educado.', next: 'de' },
        ],
      },
      de: {
        emoji: '🎩',
        text: 'Sagsbehandleren smilede og sagde, at det var længe siden, nogen havde sagt «De» til hende. Hun forklarede, at næsten alle danskere siger «du», også til myndigheder og chefer. I dag bruges «De» mest over for kongehuset og nogle meget gamle mennesker.',
        translation: 'A atendente sorriu e disse que fazia tempo que ninguém a chamava de «De». Ela explicou que quase todos os dinamarqueses dizem «du», inclusive para autoridades e chefes. Hoje, «De» se usa mais com a família real e com algumas pessoas muito idosas.',
        choices: [{ text: 'Linu grinede og gav hende sine papirer.', translation: 'O Linu riu e entregou os documentos a ela.', next: 'sag' }],
      },
      du: {
        emoji: '🙂',
        text: 'Linu sagde: «Hej, jeg har fået et brev om, at jeg skal registreres.» Sagsbehandleren nikkede og bad om hans pas og lejekontrakt. Hun kiggede papirerne igennem og sagde, at det hele så ud til at være i orden.',
        translation: 'O Linu disse: «Oi, recebi uma carta dizendo que preciso me registrar.» A atendente assentiu e pediu o passaporte e o contrato de aluguel. Ela examinou os documentos e disse que tudo parecia estar em ordem.',
        choices: [{ text: 'Linu ventede, mens hun skrev på computeren.', translation: 'O Linu esperou enquanto ela digitava no computador.', next: 'sag' }],
      },
      sag: {
        emoji: '💻',
        text: 'Hun forklarede, at han ville få tildelt et CPR-nummer, og at hans sundhedskort ville blive sendt til hans adresse inden for et par uger. Han skulle desuden vælge en praktiserende læge. «Ønsker du en læge i nærheden af din bopæl?» spurgte hun.',
        translation: 'Ela explicou que ele receberia um número CPR e que o cartão de saúde seria enviado para o endereço dele dentro de algumas semanas. Além disso, ele precisava escolher um clínico geral. «Deseja um médico perto da sua residência?», perguntou ela.',
        choices: [
          { text: 'Linu svarede ja og valgte en læge tæt på sin lejlighed.', translation: 'O Linu disse que sim e escolheu um médico perto do apartamento.', next: 'final_bom' },
          { text: 'Linu sagde, at han ikke havde brug for en læge, da han aldrig var syg.', translation: 'O Linu disse que não precisava de médico, já que nunca ficava doente.', next: 'final_senere' },
          {
            text: 'Linu spurgte, om han kunne få sundhedskortet med hjem med det samme.',
            translation: 'O Linu perguntou se podia levar o cartão de saúde para casa na hora.',
            wrong: 'A atendente disse que o cartão «ville blive sendt til hans adresse inden for et par uger» — SERIA ENVIADO para o endereço dele em algumas semanas. É passiva com «blive»: o cartão chega pelo correio.',
          },
        ],
      },
      final_senere: {
        emoji: '🤒',
        text: 'Sagsbehandleren forklarede, at han ville få brug for en fast læge, hvis han en dag blev syg, og at det var nemmest at vælge nu. Linu besluttede alligevel at vente. Tre uger senere fik han influenza og måtte ringe til kommunen for at vælge en læge i en fart.',
        translation: 'A atendente explicou que ele ia precisar de um médico fixo se um dia ficasse doente, e que era mais fácil escolher agora. Mesmo assim, o Linu decidiu esperar. Três semanas depois, ele pegou uma gripe e teve de ligar às pressas para a prefeitura para escolher um médico.',
        ending: { tone: 'neutro', title: 'Médico às pressas', message: 'O registro deu certo, mas o Linu aprendeu que é melhor escolher o médico antes de precisar dele.' },
      },
      final_bom: {
        emoji: '💛',
        text: 'Et par uger senere kom der et gult kort med posten. På kortet stod hans navn, hans CPR-nummer og navnet på hans læge. Linu følte, at han nu for alvor boede i Danmark.',
        translation: 'Algumas semanas depois, chegou pelo correio um cartão amarelo. Nele estavam o nome dele, o número CPR e o nome do médico. O Linu sentiu que agora morava na Dinamarca de verdade.',
        ending: { tone: 'bom', title: 'O cartão amarelo', message: 'Carta formal entendida, registro feito e médico escolhido: o Linu agora é oficialmente morador da Dinamarca.' },
      },
    },
  },
  {
    id: 'da-h29',
    level: 'B2.2',
    cefr: 'B2',
    title: 'En ansøgning til Ribe',
    emoji: '📝',
    summary: 'O Linu se candidata a uma vaga de verão no escritório de turismo de Ribe, a cidade mais antiga da Dinamarca, e precisa acertar o tom da carta e da entrevista.',
    cultural_context:
      'Ribe, no sudoeste da Jutlândia, é considerada a cidade mais antiga da Dinamarca: surgiu como centro comercial no início do século VIII. No verão, um vigia noturno (vægter) de lanterna e lança percorre as ruas ao anoitecer cantando os antigos versos dos vigias, uma tradição mantida para os visitantes.',
    start: 'start',
    glossary: [
      ['stillingsopslag', 'anúncio de vaga'],
      ['ansøgning', 'candidatura, carta de apresentação'],
      ['med henvisning til', 'com referência a'],
      ['hermed', 'por meio desta'],
      ['jobsamtale', 'entrevista de emprego'],
      ['indkaldt', 'convocado'],
      ['Jeg ser frem til at høre fra jer', 'Aguardo o retorno de vocês'],
      ['Med venlig hilsen', 'Atenciosamente'],
    ],
    nodes: {
      start: {
        emoji: '🏘️',
        text: 'Linu havde set et stillingsopslag fra turistkontoret i Ribe, Danmarks ældste by. De søgte en sommerhjælp, der kunne tale flere sprog og vise turister rundt. Ansøgningen skulle sendes senest fredag, og man skulle vedlægge et CV.',
        translation: 'O Linu tinha visto um anúncio de vaga do escritório de turismo de Ribe, a cidade mais antiga da Dinamarca. Eles procuravam um ajudante de verão que falasse várias línguas e mostrasse a cidade aos turistas. A candidatura devia ser enviada até sexta-feira, no mais tardar, com um currículo em anexo.',
        choices: [
          { text: 'Linu begyndte at skrive ansøgningen.', translation: 'O Linu começou a escrever a candidatura.', next: 'udkast' },
          { text: 'Linu bad sin danske ven, Mads, om hjælp.', translation: 'O Linu pediu ajuda ao amigo dinamarquês, Mads.', next: 'mads' },
        ],
      },
      mads: {
        emoji: '💡',
        text: 'Mads havde selv skrevet mange ansøgninger og gav Linu tre råd. Man skal skrive kort og konkret, man skal forklare, hvorfor man søger netop denne stilling, og man skal ikke begynde med «Hej». Han sagde, at «Kære» er helt almindeligt, også i formelle breve.',
        translation: 'O Mads já tinha escrito muitas candidaturas e deu ao Linu três conselhos. É preciso escrever de forma curta e concreta, explicar por que se quer justamente aquela vaga e não começar com «Oi». Ele disse que «Kære» (Prezado/Querido) é totalmente comum, inclusive em cartas formais.',
        choices: [
          { text: 'Linu takkede Mads og begyndte at skrive.', translation: 'O Linu agradeceu ao Mads e começou a escrever.', next: 'udkast' },
          {
            text: 'Linu begyndte brevet med «Hej med jer!», fordi Mads havde sagt, at det var mest almindeligt.',
            translation: 'O Linu começou a carta com «Oi, pessoal!», porque o Mads tinha dito que era o mais comum.',
            wrong: 'O Mads disse o contrário: «man skal ikke begynde med ‹Hej›» — NÃO se deve começar com «Oi». O comum, mesmo em cartas formais, é «Kære».',
          },
        ],
      },
      udkast: {
        emoji: '⌨️',
        text: 'Linu skrev: «Kære turistkontor. Med henvisning til jeres stillingsopslag vil jeg hermed søge stillingen som sommerhjælp. Jeg taler portugisisk, engelsk og dansk og har erfaring med at vise turister rundt.» Han læste det igennem og syntes, at det lød meget voksent.',
        translation: 'O Linu escreveu: «Prezado escritório de turismo. Com referência ao anúncio de vocês, venho por meio desta me candidatar à vaga de ajudante de verão. Falo português, inglês e dinamarquês e tenho experiência em guiar turistas.» Ele releu e achou que soava muito adulto.',
        choices: [
          { text: 'Linu tilføjede, hvorfor han gerne ville arbejde i Ribe.', translation: 'O Linu acrescentou por que queria trabalhar em Ribe.', next: 'hvorfor' },
          { text: 'Linu sendte ansøgningen med det samme.', translation: 'O Linu enviou a candidatura na mesma hora.', next: 'sendt' },
        ],
      },
      sendt: {
        emoji: '📭',
        text: 'Linu sendte ansøgningen og ventede. Efter en uge fik han et kort svar: «Tak for din ansøgning. Vi har desværre valgt en anden kandidat.» Senere forklarede Mads ham, at de fleste arbejdsgivere gerne vil vide, hvorfor man søger netop deres stilling.',
        translation: 'O Linu enviou a candidatura e esperou. Depois de uma semana, recebeu uma resposta curta: «Obrigado pela sua candidatura. Infelizmente, escolhemos outro candidato.» Mais tarde, o Mads explicou que a maioria dos empregadores quer saber por que a pessoa se candidata justamente à vaga deles.',
        ending: { tone: 'neutro', title: 'Faltou o porquê', message: 'A carta era formal, mas não dizia por que Ribe. Na próxima candidatura, o Linu vai explicar sua motivação.' },
      },
      hvorfor: {
        emoji: '🏮',
        text: 'Linu skrev, at han var blevet interesseret i Ribe, efter at han havde gået med vægteren rundt i byen en sommeraften. Han skrev også, at han gerne ville fortælle brasilianske turister om byens historie. Til sidst skrev han: «Jeg ser frem til at høre fra jer. Med venlig hilsen, Linu».',
        translation: 'O Linu escreveu que tinha se interessado por Ribe depois de ter acompanhado o vigia noturno pela cidade numa noite de verão. Escreveu também que gostaria de contar a história da cidade a turistas brasileiros. Por fim, escreveu: «Aguardo o retorno de vocês. Atenciosamente, Linu».',
        choices: [{ text: 'Linu sendte ansøgningen.', translation: 'O Linu enviou a candidatura.', next: 'samtale' }],
      },
      samtale: {
        emoji: '🤝',
        text: 'Tre dage senere blev han indkaldt til en jobsamtale. Lederen af turistkontoret, Birgit, bød ham velkommen og spurgte, hvad han vidste om Ribe. Linu kunne mærke, at hans hjerte bankede hurtigere.',
        translation: 'Três dias depois, ele foi chamado para uma entrevista de emprego. A chefe do escritório de turismo, Birgit, deu as boas-vindas e perguntou o que ele sabia sobre Ribe. O Linu sentia o coração batendo mais rápido.',
        choices: [
          { text: 'Linu fortalte om vægteren og byens lange historie.', translation: 'O Linu falou do vigia noturno e da longa história da cidade.', next: 'svar' },
          { text: 'Linu indrømmede, at han ikke vidste så meget endnu.', translation: 'O Linu admitiu que ainda não sabia muita coisa.', next: 'aerlig' },
        ],
      },
      aerlig: {
        emoji: '😅',
        text: 'Birgit sagde, at det var fint at være ærlig, men at hun havde håbet, at han havde forberedt sig lidt. Hun spurgte, om der ikke var noget, han huskede fra sine besøg i byen. Linu tænkte sig om et øjeblik.',
        translation: 'A Birgit disse que era bom ser sincero, mas que ela esperava que ele tivesse se preparado um pouco. Ela perguntou se não havia nada de que ele se lembrasse das visitas à cidade. O Linu pensou por um instante.',
        choices: [{ text: 'Linu nævnte, at han havde gået med vægteren.', translation: 'O Linu mencionou que tinha acompanhado o vigia noturno.', next: 'svar' }],
      },
      svar: {
        emoji: '⭐',
        text: 'Linu fortalte, at Ribe blev grundlagt for omkring 1300 år siden, og at vægteren stadig går rundt i gaderne om sommeren og synger de gamle vers. Birgit så imponeret ud. Hun spurgte, om han ville kunne starte allerede den 1. juni.',
        translation: 'O Linu contou que Ribe foi fundada há cerca de 1.300 anos e que o vigia noturno ainda percorre as ruas no verão cantando os versos antigos. A Birgit pareceu impressionada. Ela perguntou se ele poderia começar já em 1º de junho.',
        choices: [
          { text: 'Linu svarede, at han sagtens kunne det.', translation: 'O Linu respondeu que podia, sem problema.', next: 'final_bom' },
          {
            text: 'Linu blev ked af det, fordi han troede, at Birgit havde afvist ham.',
            translation: 'O Linu ficou triste, porque achou que a Birgit o tinha recusado.',
            wrong: 'A Birgit perguntou se ele «ville kunne starte allerede den 1. juni» — se ele PODERIA COMEÇAR já em 1º de junho. É sinal de que ela quer contratá-lo!',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Et par dage senere modtog Linu en kontrakt på e-mail. I mailen stod der: «Vi glæder os til at byde dig velkommen i teamet.» Linu svarede, at han takkede for tilliden og glædede sig til at begynde.',
        translation: 'Alguns dias depois, o Linu recebeu um contrato por e-mail. A mensagem dizia: «Temos o prazer de dar as boas-vindas a você na equipe.» O Linu respondeu agradecendo pela confiança e dizendo que estava ansioso para começar.',
        ending: { tone: 'bom', title: 'Contratado em Ribe', message: 'Carta formal, motivação clara e boa preparação: o Linu vai passar o verão guiando turistas na cidade mais antiga da Dinamarca.' },
      },
    },
  },
  {
    id: 'da-h30',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Vandskade i Aalborg',
    emoji: '💧',
    summary: 'Quando começa a pingar água do teto do seu apartamento em Aalborg, o Linu precisa comunicar o dano por escrito à associação habitacional — no tom certo.',
    cultural_context:
      'Aalborg, no norte da Jutlândia, fica às margens do Limfjord. Muitos dinamarqueses moram de aluguel em associações habitacionais sem fins lucrativos (boligforeninger), que cuidam dos prédios, mas não dos pertences dos moradores: para isso existe a indboforsikring, o seguro residencial do inquilino. Os endereços indicam andar e lado: «3. th.» é o 3º andar, à direita (til højre).',
    start: 'start',
    glossary: [
      ['vandskade', 'dano causado por água'],
      ['boligforening', 'associação habitacional'],
      ['vagttelefon', 'telefone de plantão'],
      ['anmelde', 'comunicar oficialmente, registrar'],
      ['jeg skal hermed', 'venho por meio desta'],
      ['vedhæftet finder I', 'em anexo vocês encontram'],
      ['vi bekræfter hermed modtagelsen', 'confirmamos o recebimento'],
      ['indboforsikring', 'seguro dos bens da casa'],
    ],
    nodes: {
      start: {
        emoji: '🏢',
        text: 'Linu boede i en lejlighed i Aalborg, tæt ved Limfjorden. En søndag morgen opdagede han, at der dryppede vand fra loftet i køkkenet. Han bankede på hos naboen ovenpå, men ingen lukkede op.',
        translation: 'O Linu morava num apartamento em Aalborg, perto do Limfjord. Num domingo de manhã, ele percebeu que estava pingando água do teto da cozinha. Bateu na porta do vizinho de cima, mas ninguém abriu.',
        choices: [
          { text: 'Linu satte en spand under dryppet og ringede til boligforeningens vagttelefon.', translation: 'O Linu pôs um balde embaixo da goteira e ligou para o plantão da associação habitacional.', next: 'vagt' },
          { text: 'Linu besluttede at skrive en vred e-mail til boligforeningen.', translation: 'O Linu decidiu escrever um e-mail furioso para a associação habitacional.', next: 'vred' },
        ],
      },
      vred: {
        emoji: '😠',
        text: 'Linu skrev: «Jeres bygning er elendig! Nu drypper det fra loftet, og ingen gør noget!!!» Før han nåede at sende den, kiggede naboen fra den anden side af gangen, fru Holm, forbi. Hun læste mailen og sagde, at en rolig og saglig mail ville blive taget langt mere alvorligt.',
        translation: 'O Linu escreveu: «O prédio de vocês é péssimo! Agora está pingando do teto, e ninguém faz nada!!!» Antes que ele a enviasse, a vizinha do outro lado do corredor, a senhora Holm, passou por lá. Ela leu o e-mail e disse que uma mensagem calma e objetiva seria levada muito mais a sério.',
        choices: [
          { text: 'Linu slettede mailen og ringede til vagttelefonen i stedet.', translation: 'O Linu apagou o e-mail e ligou para o plantão.', next: 'vagt' },
          {
            text: 'Linu sendte mailen, fordi fru Holm havde sagt, at vrede mails bliver taget mest alvorligt.',
            translation: 'O Linu enviou o e-mail, porque a senhora Holm tinha dito que e-mails furiosos são levados mais a sério.',
            wrong: 'A senhora Holm disse o contrário: «en rolig og saglig mail» — uma mensagem CALMA e OBJETIVA — «ville blive taget langt mere alvorligt», seria levada muito mais a sério.',
          },
        ],
      },
      vagt: {
        emoji: '🔧',
        text: 'En håndværker kom efter en time og fandt ud af, at et rør var sprunget hos naboen ovenpå. Han lukkede for vandet og sagde, at Linu skulle anmelde skaden skriftligt til boligforeningen. Han rådede ham også til at tage billeder af loftet og af de ting, der var blevet våde.',
        translation: 'Um encanador chegou depois de uma hora e descobriu que um cano tinha estourado no apartamento do vizinho de cima. Ele fechou a água e disse que o Linu devia comunicar o dano por escrito à associação. Aconselhou também que ele tirasse fotos do teto e das coisas que tinham molhado.',
        choices: [{ text: 'Linu tog billeder af skaden.', translation: 'O Linu fotografou o estrago.', next: 'billeder' }],
      },
      billeder: {
        emoji: '📷',
        text: 'Linu fotograferede loftet, gulvet og en reol, hvor flere bøger var blevet ødelagt. Så satte han sig for at skrive e-mailen. Han vidste, at den skulle være formel, men han var usikker på, hvordan den skulle begynde.',
        translation: 'O Linu fotografou o teto, o chão e uma estante onde vários livros tinham estragado. Então se sentou para escrever o e-mail. Ele sabia que devia ser formal, mas não tinha certeza de como começar.',
        choices: [
          { text: 'Linu skrev emnelinjen «Vedrørende vandskade i lejlighed 3. th.».', translation: 'O Linu escreveu no assunto «Referente a dano causado por água no apartamento 3º andar, à direita».', next: 'mail' },
          { text: 'Linu begyndte med «Hej venner!».', translation: 'O Linu começou com «Oi, amigos!».', next: 'hej' },
        ],
      },
      hej: {
        emoji: '🤦',
        text: 'Linu kom i tanke om, at han skrev til en boligforening og ikke til sine venner. Han slettede «Hej venner!» og skrev i stedet en emnelinje, der forklarede sagen kort. Han havde læst, at danske myndigheder og firmaer foretrækker, at man kommer hurtigt til sagen.',
        translation: 'O Linu se lembrou de que estava escrevendo para uma associação habitacional, e não para os amigos. Apagou «Oi, amigos!» e escreveu um assunto que explicava a questão em poucas palavras. Ele tinha lido que autoridades e empresas dinamarquesas preferem que se vá direto ao ponto.',
        choices: [{ text: 'Linu skrev resten af e-mailen.', translation: 'O Linu escreveu o resto do e-mail.', next: 'mail' }],
      },
      mail: {
        emoji: '📧',
        text: 'Linu skrev: «Jeg skal hermed anmelde en vandskade, som skete søndag morgen. Skaden skyldes et sprunget rør i lejligheden ovenover. Vedhæftet finder I billeder af skaden. Jeg vil bede jer om at oplyse, hvornår loftet kan blive repareret.» Han sluttede med «Med venlig hilsen» og sit fulde navn.',
        translation: 'O Linu escreveu: «Venho por meio desta comunicar um dano causado por água, ocorrido no domingo de manhã. O dano se deve a um cano estourado no apartamento de cima. Em anexo, seguem fotos do dano. Peço que me informem quando o teto poderá ser consertado.» Ele terminou com «Atenciosamente» e o nome completo.',
        choices: [{ text: 'Linu sendte e-mailen.', translation: 'O Linu enviou o e-mail.', next: 'svar' }],
      },
      svar: {
        emoji: '📨',
        text: 'To dage senere kom der svar: «Vi bekræfter hermed modtagelsen af din anmeldelse. Loftet vil blive repareret inden for 14 dage. Skader på dine egne ejendele er ikke dækket af boligforeningen og skal anmeldes til dit eget forsikringsselskab.» Linu kiggede på de ødelagte bøger.',
        translation: 'Dois dias depois, veio a resposta: «Confirmamos o recebimento da sua comunicação. O teto será consertado dentro de 14 dias. Danos aos seus bens pessoais não são cobertos pela associação habitacional e devem ser comunicados à sua própria seguradora.» O Linu olhou para os livros estragados.',
        choices: [
          { text: 'Linu kontaktede sit forsikringsselskab om bøgerne.', translation: 'O Linu entrou em contato com a seguradora por causa dos livros.', next: 'forsikring' },
          { text: 'Linu havde ingen forsikring og besluttede bare at vente på reparationen.', translation: 'O Linu não tinha seguro e decidiu só esperar o conserto.', next: 'final_ingen' },
          {
            text: 'Linu ventede på, at boligforeningen betalte for hans bøger.',
            translation: 'O Linu ficou esperando a associação pagar pelos livros dele.',
            wrong: 'A resposta diz que danos aos bens pessoais «er ikke dækket af boligforeningen» — NÃO SÃO COBERTOS pela associação — e «skal anmeldes til dit eget forsikringsselskab»: devem ser comunicados à sua PRÓPRIA seguradora.',
          },
        ],
      },
      forsikring: {
        emoji: '📑',
        text: 'Linu havde heldigvis tegnet en indboforsikring, da han flyttede ind. Han sendte de samme billeder til forsikringsselskabet og henviste til boligforeningens svar. En uge senere fik han besked om, at forsikringen ville dække bøgerne.',
        translation: 'Por sorte, o Linu tinha feito um seguro residencial quando se mudou. Ele mandou as mesmas fotos à seguradora e fez referência à resposta da associação. Uma semana depois, foi informado de que o seguro cobriria os livros.',
        choices: [{ text: 'Linu ventede på, at loftet blev repareret.', translation: 'O Linu esperou o teto ser consertado.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '📚',
        text: 'Da håndværkerne havde repareret loftet, lignede køkkenet sig selv igen. Linu købte nye bøger, og en af dem handlede om formelt dansk. Han grinede ved tanken om, at han allerede havde lært det meste på den hårde måde.',
        translation: 'Quando os pedreiros terminaram de consertar o teto, a cozinha voltou a ser como antes. O Linu comprou livros novos, e um deles era sobre dinamarquês formal. Ele riu ao pensar que já tinha aprendido a maior parte daquilo do jeito mais difícil.',
        ending: { tone: 'bom', title: 'Tudo em ordem', message: 'Um e-mail claro e formal, fotos e seguro em dia: o Linu resolveu a goteira sem dor de cabeça.' },
      },
      final_ingen: {
        emoji: '🍷',
        text: 'Loftet blev repareret til tiden, men Linu måtte selv betale for de ødelagte bøger. Naboen ovenpå kom senere forbi med en undskyldning og en flaske vin. Linu lovede sig selv, at han ville tegne en indboforsikring allerede samme uge.',
        translation: 'O teto foi consertado no prazo, mas o Linu teve de pagar do próprio bolso pelos livros estragados. Mais tarde, o vizinho de cima apareceu com um pedido de desculpas e uma garrafa de vinho. O Linu prometeu a si mesmo que faria um seguro residencial naquela mesma semana.',
        ending: { tone: 'neutro', title: 'Lição cara', message: 'O teto ficou novo, mas os livros não. Na Dinamarca, o inquilino precisa do próprio seguro.' },
      },
    },
  },
  // ───────────────────────── B2.3 ─────────────────────────
  {
    id: 'da-h31',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Ingen ko på isen',
    emoji: '🐄',
    summary: 'Em Aarhus, o Linu passa uma tarde com dois estudantes que falam gíria e expressões idiomáticas — e precisa descobrir o que é elogio, o que é zoação e por que uma vaca no gelo não é problema nenhum.',
    cultural_context:
      'Aarhus, a segunda maior cidade da Dinamarca, é uma cidade universitária cheia de estudantes; o bairro mais antigo, o Latinerkvarteret, fica ao lado da catedral. A ortografia de 1948 trocou «aa» por «å», mas a cidade decidiu voltar oficialmente à grafia «Aarhus» a partir de 2011.',
    start: 'start',
    glossary: [
      ['fedt', 'legal, massa (gíria; lit.: gordo)'],
      ['nederen', 'chato, uma droga (gíria)'],
      ['sgu', 'partícula que reforça a frase (de «så Gud»)'],
      ['at tage pis på nogen', 'zoar alguém'],
      ['der er ingen ko på isen', 'está tudo bem, sem problema (lit.: não há vaca no gelo)'],
      ['at have en skrue løs', 'ter um parafuso solto'],
      ['at slå to fluer med ét smæk', 'matar dois coelhos com uma cajadada só (lit.: duas moscas com uma palmada)'],
      ['at gå som katten om den varme grød', 'fazer rodeio (lit.: andar como o gato em volta do mingau quente)'],
    ],
    nodes: {
      start: {
        emoji: '☕',
        text: 'Det var en solrig fredag i september, og Linu sad på en bænk ved åen midt i Aarhus. To studerende med kaffekopper i hænderne satte sig ved siden af ham, en fyr, der hed Mads, og en pige, der hed Freja. «Hold da op, en pingvin ved åen! Det er sgu vildt», sagde Mads og grinede. Freja spurgte, om Linu ville med dem en tur gennem Latinerkvarteret.',
        translation:
          'Era uma sexta-feira ensolarada de setembro, e o Linu estava sentado num banco à beira do rio, no centro de Aarhus. Dois estudantes com copos de café na mão sentaram-se ao lado dele, um rapaz chamado Mads e uma garota chamada Freja. «Caramba, um pinguim na beira do rio! Isso é muito doido», disse o Mads, rindo. A Freja perguntou se o Linu queria dar uma volta com eles pelo Latinerkvarteret.',
        choices: [
          { text: 'Tage med dem gennem Latinerkvarteret.', translation: 'Ir com eles pelo Latinerkvarteret.', next: 'kvarter' },
          { text: 'Spørge først, hvad «sgu» betyder.', translation: 'Perguntar primeiro o que quer dizer «sgu».', next: 'sgu' },
        ],
      },
      sgu: {
        emoji: '🗣️',
        text: '«Sgu er et lille ord, som gør alting lidt stærkere», forklarede Freja. «Det kommer af “så Gud”, men i dag er der ingen, der tænker på Gud, når de siger det.» Mads tilføjede, at hans mormor sagde «sgu» i hver anden sætning, også når hun var i kirke. Linu tænkte, at de mindste ord tit er de sværeste at oversætte.',
        translation:
          '«Sgu é uma palavrinha que deixa tudo um pouco mais forte», explicou a Freja. «Vem de “så Gud” (assim Deus), mas hoje ninguém pensa em Deus quando fala.» O Mads acrescentou que a avó dele dizia «sgu» a cada duas frases, até quando estava na igreja. O Linu pensou que as palavras menores muitas vezes são as mais difíceis de traduzir.',
        choices: [{ text: 'Gå med dem op i Latinerkvarteret.', translation: 'Subir com eles até o Latinerkvarteret.', next: 'kvarter' }],
      },
      kvarter: {
        emoji: '🏘️',
        text: 'I Latinerkvarteret var gaderne smalle og brostensbelagte, og husene var malet gule, røde og grønne. Freja pegede på en lille café og sagde, at den havde de fedeste kanelsnegle i hele byen. Mads rystede på hovedet og sagde, at caféen ved siden af var meget bedre, og at Frejas café var total nederen. «Bare rolig, han tager pis på mig», sagde Freja til Linu og himlede med øjnene.',
        translation:
          'No Latinerkvarteret as ruas eram estreitas e de paralelepípedo, e as casas eram pintadas de amarelo, vermelho e verde. A Freja apontou para um cafezinho e disse que ali tinham os caracóis de canela mais incríveis da cidade. O Mads balançou a cabeça e disse que o café do lado era muito melhor, e que o café da Freja era uma droga total. «Relaxa, ele está me zoando», disse a Freja ao Linu, revirando os olhos.',
        choices: [
          { text: 'Foreslå, at de smager kanelsnegle begge steder.', translation: 'Sugerir que eles provem caracóis de canela nos dois lugares.', next: 'smag' },
          {
            text: '«Så Mads er virkelig vred på Freja?»',
            translation: '«Então o Mads está bravo de verdade com a Freja?»',
            wrong: 'A Freja disse «han tager pis på mig»: «at tage pis på nogen» é zoar alguém, brincar de provocar. O Mads não está bravo; está só implicando com ela por causa do café.',
          },
        ],
      },
      smag: {
        emoji: '🥐',
        text: 'Freja klappede i hænderne. «Genialt! Så slår vi to fluer med ét smæk: vi får to kager, og vi finder ud af, hvem der har ret», sagde hun. De købte en kanelsnegl i hver café og delte dem i tre stykker på en trappe i solen. Mads måtte indrømme, at Frejas kanelsnegl var den bedste, men han påstod, at det kun var, fordi den var varmere.',
        translation:
          'A Freja bateu palmas. «Genial! Assim a gente mata dois coelhos com uma cajadada só: ganha dois doces e descobre quem tem razão», disse ela. Compraram um caracol de canela em cada café e dividiram em três pedaços numa escada, no sol. O Mads teve que admitir que o caracol da Freja era o melhor, mas afirmou que era só porque estava mais quentinho.',
        choices: [
          { text: '«To fluer med ét smæk betyder altså at få to ting ud af én handling?»', translation: '«Então “duas moscas com uma palmada” quer dizer conseguir duas coisas com uma ação só?»', next: 'aaen' },
          {
            text: '«Skal vi altså jage fluerne væk fra kagerne?»',
            translation: '«Então a gente tem que espantar as moscas dos doces?»',
            wrong: 'Não há mosca nenhuma: «at slå to fluer med ét smæk» é uma expressão, como o nosso «matar dois coelhos com uma cajadada só». A Freja quis dizer que, provando nos dois cafés, eles ganhavam doce e resolviam a discussão de uma vez.',
          },
        ],
      },
      aaen: {
        emoji: '🌊',
        text: '«Præcis!» sagde Freja. Bagefter gik de langs åen, og Linu fik lyst til at hoppe i vandet for at køle sig af. «Er du helt væk? Du har sgu en skrue løs!» råbte Mads, da han så Linu stå på kanten. Freja lo: «Der er ingen ko på isen, han er jo en pingvin!» Hun forklarede, at udtrykket betyder, at der ikke er noget at være bekymret for, og så hoppede Linu i med et stort plask.',
        translation:
          '«Exatamente!», disse a Freja. Depois eles andaram ao longo do rio, e o Linu ficou com vontade de pular na água para se refrescar. «Ficou maluco? Você tem um parafuso solto!», gritou o Mads quando viu o Linu na beirada. A Freja riu: «Não tem vaca nenhuma no gelo, ele é um pinguim!» Ela explicou que a expressão quer dizer que não há motivo para preocupação, e então o Linu pulou com um grande tchibum.',
        choices: [{ text: 'Svømme i land og gå videre med dem.', translation: 'Nadar até a margem e seguir com eles.', next: 'gamleby' }],
      },
      gamleby: {
        emoji: '🏚️',
        text: 'Senere gik de tre op til Den Gamle By, et frilandsmuseum med gamle huse, som er blevet flyttet dertil fra hele Danmark. Mens de gik mellem bindingsværkshusene, begyndte Freja at snakke om vejret, om eksamen og om alt muligt andet. Mads hviskede til Linu: «Hun går som katten om den varme grød. Hun vil sige noget, men hun tør ikke.» Da Mads gik hen for at købe vand, fortalte Freja Linu, at hun havde to billetter til en koncert i aften, og at hun gerne ville spørge Mads, om han ville med.',
        translation:
          'Mais tarde os três subiram até a Den Gamle By, um museu a céu aberto com casas antigas que foram levadas para lá de toda a Dinamarca. Enquanto andavam entre as casas de enxaimel, a Freja começou a falar do tempo, da prova e de tudo quanto era coisa. O Mads cochichou para o Linu: «Ela está rodeando o mingau feito gato. Quer dizer alguma coisa, mas não tem coragem.» Quando o Mads foi comprar água, a Freja contou ao Linu que tinha dois ingressos para um show naquela noite e que queria perguntar ao Mads se ele queria ir junto.',
        choices: [
          { text: 'Opmuntre Freja til selv at spørge Mads direkte.', translation: 'Encorajar a Freja a perguntar ela mesma ao Mads, diretamente.', next: 'direkte' },
          { text: 'Tilbyde at spørge Mads for hende.', translation: 'Oferecer-se para perguntar ao Mads por ela.', next: 'forhende' },
        ],
      },
      direkte: {
        emoji: '🎸',
        text: 'Da Mads kom tilbage, tog Freja en dyb indånding og spurgte ham lige ud, om han ville med til koncerten. Mads blev helt rød i hovedet og sagde, at det ville være vildt fedt. «Se, der var ingen ko på isen», sagde Linu, og alle tre grinede. Om aftenen sad Linu alene ved åen med den sidste bid kanelsnegl og tænkte, at dansk er et sprog fuldt af køer, katte og fluer.',
        translation:
          'Quando o Mads voltou, a Freja respirou fundo e perguntou na lata se ele queria ir ao show. O Mads ficou vermelho como um pimentão e disse que ia ser muito massa. «Viu? Não tinha vaca nenhuma no gelo», disse o Linu, e os três caíram na risada. À noite, o Linu ficou sozinho à beira do rio com o último pedaço de caracol de canela, pensando que o dinamarquês é uma língua cheia de vacas, gatos e moscas.',
        ending: { tone: 'bom', title: 'Nenhuma vaca no gelo', message: 'Você entendeu a gíria, a zoação e as expressões — e ainda ajudou a Freja a parar de rodear o mingau.' },
      },
      forhende: {
        emoji: '😬',
        text: 'Linu gik hen til Mads og fortalte ham, at Freja havde to billetter og gerne ville have ham med. Mads kiggede forvirret på Freja, som blev rød og skyndte sig at sige, at det bare var en idé. Stemningen blev lidt akavet, og Freja begyndte at snakke om eksamen igen. De tog alle tre til koncerten, men Freja sagde næsten ingenting hele aftenen.',
        translation:
          'O Linu foi até o Mads e contou que a Freja tinha dois ingressos e queria que ele fosse junto. O Mads olhou confuso para a Freja, que ficou vermelha e se apressou a dizer que era só uma ideia. O clima ficou meio constrangedor, e a Freja voltou a falar da prova. Os três foram ao show, mas a Freja quase não abriu a boca a noite toda.',
        ending: { tone: 'neutro', title: 'Recado dado, mas…', message: 'Você entendeu tudo, mas às vezes é melhor deixar a pessoa falar por si mesma: o gato precisa chegar ao mingau sozinho.' },
      },
    },
  },
  {
    id: 'da-h32',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Hygge i stormvejr',
    emoji: '🕯️',
    summary: 'Numa noite de tempestade em Skagen, na ponta norte da Dinamarca, o Linu aprende o que é hygge e entra num jogo de palavras compostas em que a última palavra é quem manda.',
    cultural_context:
      'Skagen, na ponta norte da Jutlândia, é onde se encontram os mares Skagerrak e Kattegat, na ponta de areia chamada Grenen. No fim do século XIX, pintores como Michael e Anna Ancher e P. S. Krøyer se instalaram ali atraídos pela luz; ao sul da cidade, a areia trazida pelo vento soterrou tanto a velha igreja que ela foi fechada em 1795, e hoje só a torre aparece entre as dunas.',
    start: 'start',
    glossary: [
      ['at hygge sig', 'curtir um momento aconchegante, com gente querida'],
      ['en hyggekrog', 'um cantinho aconchegante'],
      ['et sammensat ord', 'uma palavra composta'],
      ['en husbåd / et bådhus', 'uma casa-barco / um galpão de barcos'],
      ['en fiskekone', 'uma peixeira (mulher que vende peixe)'],
      ['en sandodde', 'uma ponta de areia que entra no mar'],
      ['sandflugt', 'a areia levada pelo vento, que avança sobre a terra'],
      ['et stearinlys', 'uma vela'],
    ],
    nodes: {
      start: {
        emoji: '🌬️',
        text: 'Det var en mørk eftermiddag i november, da Linu steg ud af toget i Skagen, helt oppe på Danmarks nordligste spids. Vinden hylede mellem de gule huse med røde tegltage, og allerede klokken fire begyndte det at blive mørkt. På det lille pensionat, hvor han skulle bo, tog værtinden Birthe imod ham med et stort smil. «Velkommen! I aften skal vi bare hygge os», sagde hun og tændte et stearinlys i vinduet.',
        translation:
          'Era uma tarde escura de novembro quando o Linu desceu do trem em Skagen, lá em cima, na ponta mais ao norte da Dinamarca. O vento uivava entre as casas amarelas de telhado vermelho, e já às quatro horas começava a escurecer. Na pensãozinha onde ia ficar, a dona, Birthe, o recebeu com um sorrisão. «Bem-vindo! Hoje à noite a gente só vai curtir uma hygge», disse ela, acendendo uma vela na janela.',
        choices: [
          { text: 'Spørge, hvad «hygge» egentlig betyder.', translation: 'Perguntar o que «hygge» quer dizer, afinal.', next: 'hyggeord' },
          { text: 'Gå ud til Grenen, før det bliver helt mørkt.', translation: 'Ir até Grenen antes que escureça de vez.', next: 'grenen' },
        ],
      },
      hyggeord: {
        emoji: '🧶',
        text: '«Hygge er svært at forklare», sagde Birthe og satte sig i en lænestol med et tæppe over benene. «Det er ikke bare stearinlys og varm kakao; det er følelsen af at være tryg sammen med nogen, man holder af, mens det stormer udenfor.» Hun fortalte, at man kan sætte «hygge» sammen med næsten alt: en hyggeaften, en hyggesnak, hyggebukser og en hyggekrog. Linu lagde mærke til, at alle ordene blev skrevet som ét langt ord, uden mellemrum.',
        translation:
          '«Hygge é difícil de explicar», disse a Birthe, sentando-se numa poltrona com uma manta sobre as pernas. «Não é só vela e chocolate quente; é a sensação de estar seguro junto de gente de quem a gente gosta, enquanto lá fora cai uma tempestade.» Ela contou que dá para juntar «hygge» com quase tudo: uma noite de hygge, um papo gostoso, calças de ficar em casa e um cantinho aconchegante. O Linu reparou que todas essas palavras eram escritas como uma palavra só, comprida, sem espaço.',
        choices: [{ text: 'Gå alligevel en tur ud til Grenen først.', translation: 'Dar mesmo assim uma volta até Grenen primeiro.', next: 'grenen' }],
      },
      grenen: {
        emoji: '🌊',
        text: 'Birthe tog et tørklæde på og fulgte Linu ud til Grenen, den lange sandodde, hvor Danmark ender. Her mødes to have, Skagerrak og Kattegat, og bølgerne slår ind mod hinanden fra hver sin side. Linu stillede sig med den ene fod i hvert hav og følte sig som verdens mest berejste pingvin. «Om sommeren står turisterne i kø for at gøre præcis det samme», sagde Birthe og lo, mens de første regndråber ramte dem.',
        translation:
          'A Birthe pôs um cachecol e acompanhou o Linu até Grenen, a longa ponta de areia onde a Dinamarca termina. Ali se encontram dois mares, o Skagerrak e o Kattegat, e as ondas batem umas contra as outras, cada uma vindo de um lado. O Linu ficou com um pé em cada mar e se sentiu o pinguim mais viajado do mundo. «No verão os turistas fazem fila para fazer exatamente isso», disse a Birthe, rindo, enquanto as primeiras gotas de chuva os atingiam.',
        choices: [{ text: 'Skynde sig hjem til pensionatet.', translation: 'Voltar correndo para a pensão.', next: 'aften' }],
      },
      aften: {
        emoji: '🐟',
        text: 'Hjemme på pensionatet havde Birthes barnebarn, tiårige Emil, dækket bord med fiskefrikadeller, rugbrød og hjemmelavet remoulade. Efter maden foreslog Emil en ordleg, hvor man skulle bygge så lange sammensatte ord som muligt. «Det sidste ord bestemmer, hvad tingen er, og om det hedder en eller et», forklarede han. «En husbåd er en båd, man kan bo i, men et bådhus er et hus, hvor man har sin båd. Hvad er så en fiskekone?»',
        translation:
          'De volta à pensão, o neto da Birthe, o Emil, de dez anos, tinha posto a mesa com bolinhos de peixe, pão de centeio e remoulade caseiro. Depois do jantar, o Emil propôs um jogo de palavras em que era preciso montar palavras compostas o mais compridas possível. «A última palavra decide o que a coisa é, e se ela leva “en” ou “et”», explicou ele. «Uma husbåd é um barco onde se pode morar, mas um bådhus é uma casa onde se guarda o barco. Então, o que é uma fiskekone?»',
        choices: [
          { text: '«En kone, der sælger fisk.»', translation: '«Uma mulher que vende peixe.»', next: 'storm' },
          {
            text: '«En fisk, der er blevet gift.»',
            translation: '«Um peixe que se casou.»',
            wrong: 'Pela regra do Emil, a última palavra manda: em «fiskekone», o núcleo é «kone» (mulher, esposa), e «fisk» só diz de que tipo. Uma fiskekone é uma peixeira, a mulher que vende peixe — e por isso é «en fiskekone», como «en kone».',
          },
        ],
      },
      storm: {
        emoji: '⚡',
        text: '«Rigtigt!» råbte Emil, og i samme øjeblik gik strømmen, fordi stormen havde væltet en ledning et sted. Birthe fandt flere stearinlys frem, og snart var stuen fuld af et gult, varmt lys, mens vinden rev i tagstenene. Emil ville gerne løbe ned til stranden for at se de store bølger i mørket. Birthe foreslog i stedet, at de blev inde, så hun kunne fortælle historien om kirken, som sandet begravede.',
        translation:
          '«Certo!», gritou o Emil, e no mesmo instante a luz acabou, porque a tempestade tinha derrubado um fio em algum lugar. A Birthe pegou mais velas, e logo a sala ficou cheia de uma luz amarela e quente, enquanto o vento sacudia as telhas. O Emil queria correr até a praia para ver as ondas grandes no escuro. A Birthe sugeriu, em vez disso, que ficassem dentro de casa para ela contar a história da igreja que a areia enterrou.',
        choices: [
          { text: 'Blive inde og høre historien om kirken.', translation: 'Ficar dentro de casa e ouvir a história da igreja.', next: 'kirke' },
          { text: 'Tage med Emil ned til stranden.', translation: 'Ir com o Emil até a praia.', next: 'final_neutro' },
        ],
      },
      kirke: {
        emoji: '⛪',
        text: 'Birthe fortalte, at der for mange hundrede år siden lå en stor kirke syd for byen. I 1700-tallet blev sandflugten værre og værre, sandet føg ind over markerne og hobede sig op mod kirkens mure, og det fortælles, at folk til sidst måtte skovle sig vej ind til gudstjenesten. I 1795 blev kirken lukket, og i dag står kun tårnet tilbage midt i klitterne. «Derfor hedder den Den Tilsandede Kirke», sagde Birthe, og Emil lyttede med store øjne, selvom han havde hørt historien hundrede gange.',
        translation:
          'A Birthe contou que, muitas centenas de anos atrás, havia uma igreja grande ao sul da cidade. No século XVIII a areia levada pelo vento foi piorando, cobria os campos e se amontoava contra as paredes da igreja, e dizem que no fim as pessoas precisavam abrir caminho com a pá para chegar à missa. Em 1795 a igreja foi fechada, e hoje só a torre continua de pé no meio das dunas. «Por isso ela se chama a Igreja Soterrada», disse a Birthe, e o Emil ouvia de olhos arregalados, embora já tivesse escutado a história cem vezes.',
        choices: [{ text: 'Foreslå at fortsætte ordlegen i lysets skær.', translation: 'Sugerir continuar o jogo de palavras à luz das velas.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🕯️',
        text: 'De spillede ordlegen til langt ud på natten, og Emil vandt med «stearinlysstormaftenshyggekrog», som han påstod var et rigtigt ord. Linu fik andenpladsen med «pingvinvinterbadeklub». Da strømmen kom tilbage, var der ingen af dem, der ville tænde loftslampen. «Det her», sagde Birthe stille og pegede på de flakkende lys, «det er hygge.»',
        translation:
          'Jogaram até tarde da noite, e o Emil ganhou com «velatempestadenoitecantinhoaconchegante», que ele jurava ser uma palavra de verdade. O Linu ficou em segundo lugar com «clubedebanhodeinvernodepinguins». Quando a luz voltou, ninguém quis acender a lâmpada do teto. «Isto aqui», disse a Birthe baixinho, apontando para as velas tremeluzentes, «isto é hygge.»',
        ending: { tone: 'bom', title: 'Hygge à luz de velas', message: 'Você entendeu a hygge, montou compostos e aprendeu que a última palavra manda: uma husbåd é um barco, e um bådhus é uma casa.' },
      },
      final_neutro: {
        emoji: '🌧️',
        text: 'Linu og Emil tog regntøj på og løb ned til stranden, hvor bølgerne var store som huse. Det var flot, men vinden var så stærk, at Emil næsten blæste omkuld, og de kom hjem gennemblødte og med sand i ørerne. Birthe sagde ikke noget, men hun rakte dem hver et tæppe og en kop kakao. Resten af aftenen sad de og rystede af kulde, og historien om kirken måtte vente til en anden gang.',
        translation:
          'O Linu e o Emil vestiram capas de chuva e correram até a praia, onde as ondas eram do tamanho de casas. Foi bonito, mas o vento era tão forte que o Emil quase saiu voando, e eles voltaram encharcados e com areia nos ouvidos. A Birthe não disse nada, mas deu a cada um uma manta e uma xícara de chocolate quente. Passaram o resto da noite tremendo de frio, e a história da igreja ficou para outra vez.',
        ending: { tone: 'neutro', title: 'Encharcados de tempestade', message: 'A aventura foi bonita, mas a hygge estava lá dentro, à luz das velas — e a história da igreja ficou para outro dia.' },
      },
    },
  },
  {
    id: 'da-h33',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Kolde fødder på fjorden',
    emoji: '⛵',
    summary: 'Em Roskilde, o Linu sai para velejar numa réplica de navio viking e descobre que, no mar dinamarquês, se fala de pés frios, touros e papagaios sem que haja nenhum a bordo.',
    cultural_context:
      'O Museu dos Navios Vikings de Roskilde guarda cinco navios que foram afundados de propósito no século XI em Skuldelev, no fiorde de Roskilde, para bloquear a passagem de inimigos; em 1962 o local foi cercado por um dique, esvaziado, e os navios foram retirados aos pedaços. O museu constrói réplicas com técnicas da Era Viking e, no verão, leva visitantes para velejar no fiorde; a catedral de Roskilde, ali perto, é onde estão enterrados os reis e rainhas da Dinamarca.',
    start: 'start',
    glossary: [
      ['at have vind i sejlene', 'estar com o vento a favor'],
      ['at få kolde fødder', 'ficar com medo, amarelar (lit.: ficar com os pés frios)'],
      ['at holde hovedet koldt', 'manter a cabeça fria'],
      ['at være ude på dybt vand', 'estar numa situação difícil (lit.: em água funda)'],
      ['at tage tyren ved hornene', 'pegar o touro pelos chifres'],
      ['at skyde papegøjen', 'tirar a sorte grande (lit.: acertar o papagaio)'],
      ['en sejlrende', 'um canal navegável'],
    ],
    nodes: {
      start: {
        emoji: '🛶',
        text: 'En varm julidag stod Linu foran Vikingeskibsmuseet i Roskilde og kiggede ud over fjorden. Inde i den store hal lå resterne af fem gamle vikingeskibe, som var blevet sænket i fjorden for næsten tusind år siden. En skægget guide ved navn Søren fortalte, at museet havde bygget kopier af skibene, og at gæsterne kunne komme med ud at sejle. «Vi har vind i sejlene i dag», sagde han og pegede på flaget, der stod stift ud i vinden.',
        translation:
          'Num dia quente de julho, o Linu estava diante do Museu dos Navios Vikings, em Roskilde, olhando para o fiorde. Dentro do grande salão estavam os restos de cinco navios vikings antigos, que tinham sido afundados no fiorde quase mil anos atrás. Um guia barbudo chamado Søren contou que o museu tinha construído cópias dos navios e que os visitantes podiam sair para velejar. «Hoje estamos com o vento a favor», disse ele, apontando para a bandeira, esticada no vento.',
        choices: [
          { text: 'Melde sig til sejlturen med det samme.', translation: 'Inscrever-se no passeio de barco na hora.', next: 'sejl' },
          { text: 'Høre mere om de sænkede skibe først.', translation: 'Ouvir mais sobre os navios afundados primeiro.', next: 'skibene' },
        ],
      },
      skibene: {
        emoji: '🧩',
        text: 'Søren forklarede, at vikingerne havde sænket skibene med vilje ved Skuldelev for at spærre sejlrenden, så fjender ikke kunne sejle ind til Roskilde. I 1962 byggede man en dæmning rundt om stedet, pumpede vandet væk og tog tusindvis af små træstykker op af mudderet. «Det var som et puslespil, hvis brikker havde ligget i vand i ni hundrede år», sagde Søren. Linu tænkte, at arkæologer må have en engels tålmodighed.',
        translation:
          'O Søren explicou que os vikings tinham afundado os navios de propósito em Skuldelev para bloquear o canal, de modo que os inimigos não conseguissem chegar a Roskilde pela água. Em 1962 construíram um dique em volta do lugar, bombearam a água para fora e tiraram milhares de pedacinhos de madeira da lama. «Foi como um quebra-cabeça cujas peças tinham ficado novecentos anos debaixo d’água», disse o Søren. O Linu pensou que arqueólogos devem ter uma paciência de anjo.',
        choices: [{ text: 'Melde sig til sejlturen.', translation: 'Inscrever-se no passeio de barco.', next: 'sejl' }],
      },
      sejl: {
        emoji: '🌬️',
        text: 'Kort efter sad Linu på en bænk i en åben træbåd sammen med otte andre gæster, deriblandt en pige på tolv, der hed Ida. Søren stod ved roret og råbte ordrer, og alle måtte hjælpe med at hejse det store, firkantede sejl. Da båden kom ud på fjorden, satte den fart, og Ida hvinede af glæde. Men da hun så, hvor dybt vandet var, blev hun bleg og sagde stille, at hun havde fået kolde fødder.',
        translation:
          'Pouco depois, o Linu estava sentado num banco de um barco aberto de madeira com outros oito visitantes, entre eles uma menina de doze anos chamada Ida. O Søren ficou no leme gritando ordens, e todo mundo teve que ajudar a içar a grande vela quadrada. Quando o barco chegou ao fiorde, ganhou velocidade, e a Ida deu gritinhos de alegria. Mas, quando viu como a água era funda, ficou pálida e disse baixinho que tinha ficado com os pés frios.',
        choices: [
          { text: 'Sætte sig ved siden af Ida og berolige hende.', translation: 'Sentar-se ao lado da Ida e acalmá-la.', next: 'ida' },
          {
            text: 'Give Ida et par tykke uldsokker.',
            translation: 'Dar à Ida um par de meias grossas de lã.',
            wrong: '«At få kolde fødder» não tem a ver com meias: quer dizer ficar com medo, perder a coragem. A Ida ficou pálida porque se assustou com a água funda, não porque os pés estivessem gelados.',
          },
        ],
      },
      ida: {
        emoji: '🐧',
        text: 'Linu satte sig ved siden af Ida og fortalte hende, at han selv havde svømmet i vand, der var meget koldere og dybere. «Og hvis du falder i, så redder jeg dig; jeg er jo en pingvin», sagde han. Ida grinede og slappede lidt af. Søren nikkede anerkendende og sagde, at det vigtigste på et skib er at holde hovedet koldt.',
        translation:
          'O Linu sentou-se ao lado da Ida e contou que ele mesmo já tinha nadado em águas muito mais frias e fundas. «E se você cair, eu te salvo; afinal, sou um pinguim», disse ele. A Ida riu e relaxou um pouco. O Søren fez que sim com a cabeça, aprovando, e disse que o mais importante num navio é manter a cabeça fria.',
        choices: [{ text: 'Sejle videre ud på fjorden.', translation: 'Seguir velejando pelo fiorde.', next: 'vindstod' }],
      },
      vindstod: {
        emoji: '💨',
        text: 'Midt ude på fjorden kom der pludselig et kraftigt vindstød, og båden krængede så meget, at vandet skvulpede ind over rælingen. Et par af gæsterne råbte op, og en ældre herre tabte sin hat i vandet. Søren råbte, at nu var de ude på dybt vand, og at nogen måtte tage tyren ved hornene og hjælpe med at få sejlet ned. Ida kiggede på Linu, og Linu kiggede på rebet.',
        translation:
          'No meio do fiorde veio de repente uma rajada forte, e o barco adernou tanto que a água entrou por cima da borda. Alguns visitantes gritaram, e um senhor de idade deixou o chapéu cair na água. O Søren gritou que agora eles estavam em apuros e que alguém tinha que pegar o touro pelos chifres e ajudar a baixar a vela. A Ida olhou para o Linu, e o Linu olhou para a corda.',
        choices: [
          { text: 'Tage tyren ved hornene og hale sejlet ned sammen med Ida.', translation: 'Pegar o touro pelos chifres e baixar a vela junto com a Ida.', next: 'sejlned' },
          { text: 'Hoppe i vandet efter herrens hat.', translation: 'Pular na água atrás do chapéu do senhor.', next: 'final_neutro' },
          {
            text: '«Søren vil altså have, at vi skal fange en tyr?»',
            translation: '«Então o Søren quer que a gente pegue um touro?»',
            wrong: 'Não há touro a bordo: «at tage tyren ved hornene» é enfrentar o problema de frente, como em português. E «ude på dybt vand» aqui não fala da profundidade: quer dizer que a situação ficou difícil. O Søren está pedindo ajuda para baixar a vela.',
          },
        ],
      },
      sejlned: {
        emoji: '🪢',
        text: 'Linu og Ida greb rebet og halede af alle kræfter, mens Søren drejede båden op mod vinden. Langsomt gled sejlet ned, båden rettede sig op, og alle begyndte at ro ind mod land i takt. Da de nåede havnen, klappede Søren Ida på skulderen og sagde, at hun havde holdt hovedet koldt som en rigtig viking. Ida smilede og sagde, at hun ikke længere havde kolde fødder, kun våde.',
        translation:
          'O Linu e a Ida agarraram a corda e puxaram com toda a força, enquanto o Søren virava o barco contra o vento. Devagar a vela desceu, o barco se endireitou, e todos começaram a remar para a terra no mesmo ritmo. Quando chegaram ao porto, o Søren deu um tapinha no ombro da Ida e disse que ela tinha mantido a cabeça fria como uma verdadeira viking. A Ida sorriu e disse que já não estava com os pés frios, só molhados.',
        choices: [{ text: 'Hjælpe med at fortøje båden.', translation: 'Ajudar a amarrar o barco.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎩',
        text: 'Da båden var fortøjet, opdagede den ældre herre, at hans hat var skyllet i land lige ved museet. «Så skød jeg sgu papegøjen i dag», sagde han glad og tog den våde hat på. Søren forklarede Linu, at «at skyde papegøjen» betyder at have kæmpe held, fordi den, der skød træfuglen ned ved de gamle skyttefester, vandt hele konkurrencen. Ida gav Linu et kram og lovede, at hun ville komme igen næste sommer.',
        translation:
          'Quando o barco já estava amarrado, o senhor descobriu que o chapéu dele tinha ido parar na margem, bem perto do museu. «Pois hoje eu tirei a sorte grande», disse ele, contente, pondo o chapéu molhado. O Søren explicou ao Linu que «at skyde papegøjen» quer dizer ter uma sorte enorme, porque, nas antigas festas de tiro, quem derrubava o pássaro de madeira ganhava a competição. A Ida deu um abraço no Linu e prometeu voltar no verão seguinte.',
        ending: { tone: 'bom', title: 'Viking de cabeça fria', message: 'Você entendeu os pés frios, o touro e o papagaio — e ajudou a baixar a vela na hora certa.' },
      },
      final_neutro: {
        emoji: '💦',
        text: 'Linu hoppede i vandet og svømmede efter hatten, mens båden drev videre uden ham. Uden hans hjælp tog det lang tid at få sejlet ned, og Ida græd lidt af skræk. Linu fandt hatten, men da han endelig kom op i båden igen, var alle våde og trætte. Søren sagde venligt, men bestemt, at på et vikingeskib hjælper man først hinanden og redder hatte bagefter.',
        translation:
          'O Linu pulou na água e nadou atrás do chapéu, enquanto o barco seguia sem ele. Sem a ajuda dele, demorou muito para baixar a vela, e a Ida chorou um pouco de medo. O Linu achou o chapéu, mas quando finalmente voltou ao barco, todos estavam molhados e cansados. O Søren disse, gentil mas firme, que num navio viking primeiro se ajuda os outros e só depois se salva chapéu.',
        ending: { tone: 'neutro', title: 'Chapéu salvo, vela não', message: 'Você entendeu o pedido do Søren, mas escolheu o chapéu em vez de pegar o touro pelos chifres.' },
      },
    },
  },
  // ───────────────────────── B2.4 ─────────────────────────
  {
    id: 'da-h34',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Bilfri søndag?',
    emoji: '🚲',
    summary: 'Numa ponte cheia de ciclistas em Copenhague, o Linu vira o mediador de um debate de rádio sobre domingos sem carros — e precisa entender cada «derimod» e cada «alligevel» para resumir os argumentos.',
    cultural_context:
      'Copenhague é famosa pelas bicicletas: na cidade há muito mais bicicletas do que carros, e a Dronning Louises Bro, entre o centro e o bairro de Nørrebro, é uma das ruas com mais ciclistas da cidade. Na escrita, a vírgula tradicional separa a oração subordinada («Jeg synes, at…»); pelas regras oficiais, essa vírgula antes da subordinada é opcional.',
    start: 'start',
    glossary: [
      ['derimod', 'por outro lado, ao contrário'],
      ['desuden', 'além disso'],
      ['altså', 'ou seja, então; afinal'],
      ['alligevel', 'mesmo assim'],
      ['for det første', 'em primeiro lugar'],
      ['på den ene side … på den anden side', 'por um lado … por outro lado'],
      ['der er noget om snakken', 'tem um fundo de verdade'],
      ['en ladcykel', 'uma bicicleta de carga'],
    ],
    nodes: {
      start: {
        emoji: '🌉',
        text: 'Klokken var otte om morgenen, og på Dronning Louises Bro i København susede cyklisterne forbi i lange rækker. Linu stod ved rækværket og talte cykler, da en journalist fra en lokalradio kom hen til ham med en mikrofon. Hun hed Lise og skulle optage en debat om, hvorvidt indre by skulle være bilfri hver søndag. «Vi mangler en neutral person, der kan opsummere argumenterne til sidst. Vil du?» spurgte hun.',
        translation:
          'Eram oito da manhã, e na ponte Dronning Louises Bro, em Copenhague, os ciclistas passavam zunindo em longas filas. O Linu estava junto ao parapeito contando bicicletas quando uma jornalista de uma rádio local veio até ele com um microfone. Ela se chamava Lise e ia gravar um debate sobre se o centro da cidade deveria ficar sem carros todo domingo. «Falta uma pessoa neutra para resumir os argumentos no final. Topa?», perguntou ela.',
        choices: [
          { text: 'Sige ja og gå med ind til debatten.', translation: 'Dizer que sim e ir com ela para o debate.', next: 'hanne' },
          { text: 'Sige ja, men først spørge et par cyklister på broen.', translation: 'Dizer que sim, mas antes perguntar a alguns ciclistas na ponte.', next: 'broen' },
        ],
      },
      broen: {
        emoji: '🗣️',
        text: 'Linu stillede sig ved cykelstien og spurgte et par cyklister, hvad de mente. En ældre mand med en ladcykel sagde, at han cyklede hver dag, men at han alligevel var imod forslaget, fordi hans datter sad i kørestol og var afhængig af bil. En ung kvinde råbte i forbifarten, at luften i byen var alt for dårlig, og at alle bare skulle cykle. Linu skrev begge svar ned og tænkte, at det ikke ville blive nogen let debat.',
        translation:
          'O Linu ficou ao lado da ciclovia e perguntou a alguns ciclistas o que achavam. Um senhor com uma bicicleta de carga disse que pedalava todo dia, mas que mesmo assim era contra a proposta, porque a filha dele usava cadeira de rodas e dependia do carro. Uma moça gritou, passando, que o ar da cidade estava ruim demais e que todo mundo devia simplesmente pedalar. O Linu anotou as duas respostas e pensou que o debate não ia ser fácil.',
        choices: [{ text: 'Gå ind til debatten.', translation: 'Entrar para o debate.', next: 'hanne' }],
      },
      hanne: {
        emoji: '👗',
        text: 'Debatten foregik på en café ved broen, og den første, der fik ordet, var Hanne, som havde en tøjbutik i indre by. «For det første kommer mange af mine kunder langvejs fra, og de kommer i bil», sagde hun. «Desuden er søndag den dag, hvor familierne har tid til at handle, og derfor vil et forbud ramme os hårdt.» Hun sluttede med at sige, at hun ikke var imod cykler, men at hun syntes, at byen skulle være for alle.',
        translation:
          'O debate aconteceu num café junto à ponte, e a primeira a falar foi a Hanne, que tinha uma loja de roupas no centro. «Em primeiro lugar, muitos dos meus clientes vêm de longe, e vêm de carro», disse ela. «Além disso, domingo é o dia em que as famílias têm tempo para fazer compras, e por isso uma proibição vai nos atingir em cheio.» Ela terminou dizendo que não era contra as bicicletas, mas que achava que a cidade devia ser para todos.',
        choices: [
          { text: 'Lytte til den næste debattør.', translation: 'Ouvir o próximo debatedor.', next: 'jonas' },
          {
            text: '«Hanne er altså imod cykler.»',
            translation: '«Então a Hanne é contra as bicicletas.»',
            wrong: 'A Hanne disse justamente que NÃO era contra as bicicletas («hun ikke var imod cykler»). Ela é contra a proibição dos carros aos domingos, porque tem medo de perder os clientes que vêm de longe.',
          },
        ],
      },
      jonas: {
        emoji: '🚴',
        text: 'Så fik Jonas ordet; han var cykelbud og kørte over hundrede kilometer om dagen gennem byen. «Jeg forstår godt Hannes bekymring. Jeg mener derimod, at bilfri søndage vil trække flere mennesker ind til butikkerne, ikke færre», sagde han. «Når gaderne er stille og rene, går folk rundt i timevis, og de, der går rundt, køber altså også noget.» Hanne rystede på hovedet, men hun indrømmede alligevel, at der var noget om snakken, og Lise bad Linu forklare, hvad Jonas’ hovedargument var.',
        translation:
          'Então foi a vez do Jonas; ele era entregador de bicicleta e rodava mais de cem quilômetros por dia pela cidade. «Eu entendo a preocupação da Hanne. Por outro lado, acho que domingos sem carro vão levar MAIS gente às lojas, não menos», disse ele. «Quando as ruas estão calmas e limpas, as pessoas passeiam por horas, e quem passeia, afinal, também compra.» A Hanne balançou a cabeça, mas mesmo assim admitiu que aquilo tinha um fundo de verdade, e a Lise pediu ao Linu que explicasse qual era o argumento principal do Jonas.',
        choices: [
          { text: '«Jonas mener, at bilfri søndage vil give butikkerne flere kunder.»', translation: '«O Jonas acha que domingos sem carro vão dar mais clientes às lojas.»', next: 'forslag' },
          {
            text: '«Jonas er enig med Hanne i, at et forbud vil skade butikkerne.»',
            translation: '«O Jonas concorda com a Hanne que uma proibição vai prejudicar as lojas.»',
            wrong: 'O Jonas disse «Jeg mener derimod…»: «derimod» (por outro lado, ao contrário) marca a posição oposta à da Hanne. Ele entende a preocupação dela, mas acha que ruas sem carro vão trazer mais clientes, não menos.',
          },
        ],
      },
      forslag: {
        emoji: '⚖️',
        text: '«Præcis», sagde Lise og spurgte Linu, om han kunne se en løsning, som begge parter kunne leve med. Linu tænkte på dem, der ikke kan cykle, og på dem, der ikke kan tåle mere forurening. På den ene side ville Jonas have renere luft og flere fodgængere; på den anden side var Hanne bange for at miste sine kunder. Han kunne enten foreslå et kompromis eller give den ene af dem ret.',
        translation:
          '«Exato», disse a Lise, e perguntou ao Linu se ele via uma solução com que os dois lados pudessem conviver. O Linu pensou em quem não pode pedalar e em quem não aguenta mais poluição. Por um lado, o Jonas queria ar mais limpo e mais pedestres; por outro, a Hanne tinha medo de perder os clientes. Ele podia propor um meio-termo ou dar razão a um dos dois.',
        choices: [
          { text: 'Foreslå én bilfri søndag om måneden som et forsøg.', translation: 'Propor um domingo sem carros por mês, como teste.', next: 'final_bom' },
          { text: 'Give Jonas ret: alle kan jo bare cykle.', translation: 'Dar razão ao Jonas: afinal, todo mundo pode pedalar.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '📻',
        text: 'Linu foreslog, at man kunne begynde med én bilfri søndag om måneden som et forsøg, og at taxaer og biler til mennesker med handicap stadig skulle kunne køre. «Det lyder fornuftigt; så kan vi jo se, om Jonas har ret», sagde Hanne. Jonas smilede og sagde, at han hellere ville have fire søndage end én, men at én alligevel var en god begyndelse. Lise slukkede mikrofonen og sagde, at Linu burde have sit eget radioprogram.',
        translation:
          'O Linu propôs começar com um domingo sem carros por mês, como teste, e que táxis e carros de pessoas com deficiência continuassem podendo circular. «Parece sensato; assim a gente vê se o Jonas tem razão», disse a Hanne. O Jonas sorriu e disse que preferia quatro domingos a um, mas que um, mesmo assim, era um bom começo. A Lise desligou o microfone e disse que o Linu devia ter seu próprio programa de rádio.',
        ending: { tone: 'bom', title: 'Mediador de ponte', message: 'Você entendeu o «derimod» do Jonas e o «alligevel» da Hanne, resumiu os dois lados e achou um meio-termo.' },
      },
      final_neutro: {
        emoji: '📴',
        text: 'Linu sagde, at han var enig med Jonas, fordi alle jo bare kunne cykle, ligesom han selv gjorde. Hanne blev fornærmet og spurgte, hvordan en pingvin i øvrigt kunne nå pedalerne. Debatten endte i et skænderi, og Lise måtte afbryde optagelsen før tid. Bagefter tænkte Linu, at det ikke er nemt at være neutral, når man selv har en mening.',
        translation:
          'O Linu disse que concordava com o Jonas, porque todo mundo podia simplesmente pedalar, como ele mesmo fazia. A Hanne se ofendeu e perguntou, aliás, como é que um pinguim alcançava os pedais. O debate acabou em bate-boca, e a Lise teve que interromper a gravação antes da hora. Depois o Linu pensou que não é fácil ser neutro quando a gente mesmo tem opinião.',
        ending: { tone: 'neutro', title: 'Mediador de um lado só', message: 'Você entendeu os argumentos, mas o papel era resumir e mediar — e não escolher um lado no ar.' },
      },
    },
  },
  {
    id: 'da-h35',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Kom og spis, mormor!',
    emoji: '✍️',
    summary: 'Em Aalborg, o Linu quer salvar um velho silo do porto e escreve uma carta ao jornal — aprendendo a organizar argumentos, a respeitar o outro lado e a não esquecer a vírgula que salva a vovó.',
    cultural_context:
      'Aalborg, às margens do Limfjord, transformou sua orla portuária: onde havia fábricas e armazéns hoje há calçadões, moradias e o Utzon Center, projetado por Jørn Utzon — o arquiteto da Ópera de Sydney, que cresceu em Aalborg — e inaugurado em 2008. Na Dinamarca, as cartas de leitores («læserbreve») são uma parte importante do debate público nos jornais locais.',
    start: 'start',
    glossary: [
      ['et læserbrev', 'uma carta de leitor (ao jornal)'],
      ['en holdning', 'uma posição, uma opinião'],
      ['en ledsætning', 'uma oração subordinada'],
      ['ganske vist … men alligevel', 'é verdade que … mas mesmo assim'],
      ['modparten', 'o lado contrário'],
      ['at rive ned', 'demolir'],
      ['at bevare', 'preservar'],
      ['en kornsilo', 'um silo de grãos'],
    ],
    nodes: {
      start: {
        emoji: '🏗️',
        text: 'En blæsende lørdag i oktober gik Linu langs havnefronten i Aalborg sammen med Signe, en dansklærer, som han boede hos. Hvor der før lå fabrikker og pakhuse, var der nu promenader, trapper ned til Limfjorden og nye boligblokke af glas. For enden af kajen stod en gammel, grå kornsilo med et skilt, hvor der stod, at den snart skulle rives ned og erstattes af lejligheder. «Det er da synd!» udbrød Linu, og Signe svarede, at hvis han mente det, så skulle han skrive et læserbrev til avisen.',
        translation:
          'Num sábado de vento, em outubro, o Linu caminhava pela orla do porto de Aalborg com a Signe, uma professora de dinamarquês em cuja casa ele estava hospedado. Onde antes havia fábricas e armazéns, agora havia calçadões, escadarias descendo até o Limfjord e prédios novos de vidro. No fim do cais havia um velho silo de grãos, cinzento, com uma placa dizendo que em breve ele seria demolido para dar lugar a apartamentos. «Mas que pena!», exclamou o Linu, e a Signe respondeu que, se ele achava isso, devia escrever uma carta ao jornal.',
        choices: [
          { text: 'Begynde på læserbrevet med det samme.', translation: 'Começar a carta na hora.', next: 'skrive' },
          { text: 'Gå først hen til Utzon Center.', translation: 'Ir primeiro até o Utzon Center.', next: 'utzon' },
        ],
      },
      utzon: {
        emoji: '⛵',
        text: 'Længere henne ad kajen lå Utzon Center, en lav bygning med bølgende tage, tegnet af arkitekten Jørn Utzon, som voksede op i Aalborg. Signe fortalte, at Utzon som dreng så sejlskibene i havnen, og at mange mener, at man kan se dem igen i operahuset i Sydney. «Han blev ikke berømt ved at rive det gamle ned, men ved at se det med nye øjne», sagde hun. Linu fik en idé til sit læserbrev: hvorfor ikke bygge boligerne inde i siloen i stedet for at rive den ned?',
        translation:
          'Mais adiante no cais ficava o Utzon Center, um prédio baixo de telhados ondulados, projetado pelo arquiteto Jørn Utzon, que cresceu em Aalborg. A Signe contou que o Utzon, quando menino, via os veleiros no porto, e que muita gente acha que dá para vê-los de novo na Ópera de Sydney. «Ele não ficou famoso derrubando o velho, mas olhando para ele com outros olhos», disse ela. O Linu teve uma ideia para a carta: por que não construir as moradias dentro do silo, em vez de demoli-lo?',
        choices: [{ text: 'Gå hjem og skrive læserbrevet.', translation: 'Ir para casa e escrever a carta.', next: 'skrive' }],
      },
      skrive: {
        emoji: '📝',
        text: 'Hjemme i Signes køkken satte Linu sig med en kop te og en blok papir. Signe forklarede, at et godt læserbrev begynder med en klar holdning, og at argumenterne skal bindes sammen med ord som «for det første», «desuden» og «derfor». Linu skrev: «Jeg mener at siloen skal bevares», og Signe satte straks et komma efter «mener». «Traditionelt sætter man komma foran en ledsætning; i dag er det faktisk valgfrit, men det gør teksten lettere at læse», sagde hun.',
        translation:
          'De volta à cozinha da Signe, o Linu sentou-se com uma xícara de chá e um bloco de papel. A Signe explicou que uma boa carta de leitor começa com uma posição clara, e que os argumentos devem ser amarrados com palavras como «em primeiro lugar», «além disso» e «por isso». O Linu escreveu: «Eu acho que o silo deve ser preservado», e a Signe logo pôs uma vírgula depois de «mener». «Tradicionalmente se põe vírgula antes de uma oração subordinada; hoje ela é opcional, mas deixa o texto mais fácil de ler», disse ela.',
        choices: [
          { text: 'Spørge, om et komma virkelig kan betyde så meget.', translation: 'Perguntar se uma vírgula pode mesmo fazer tanta diferença.', next: 'komma' },
          { text: 'Skrive videre på argumenterne.', translation: 'Continuar escrevendo os argumentos.', next: 'modargument' },
        ],
      },
      komma: {
        emoji: '👵',
        text: '«Et komma kan redde liv», sagde Signe og skrev to sætninger på papiret: «Kom og spis, mormor!» og «Kom og spis mormor!» Hun spurgte Linu, hvilken af dem man siger, når man inviterer sin mormor til bords. Linu kiggede længe på de to sætninger og på det lille komma, der var den eneste forskel.',
        translation:
          '«Uma vírgula pode salvar vidas», disse a Signe, e escreveu duas frases no papel: «Kom og spis, mormor!» e «Kom og spis mormor!». Ela perguntou ao Linu qual das duas se diz quando se chama a avó para a mesa. O Linu olhou demoradamente para as duas frases e para a vírgula pequenininha, a única diferença entre elas.',
        choices: [
          { text: '«Den med komma, for der taler man til mormor.»', translation: '«A com vírgula, porque ali a gente está falando com a vovó.»', next: 'modargument' },
          {
            text: '«Den uden komma; kommaet er jo bare pynt.»',
            translation: '«A sem vírgula; a vírgula é só enfeite.»',
            wrong: 'Sem vírgula, «Kom og spis mormor!» quer dizer «Venha comer a vovó!» — a avó vira o prato. Com vírgula, «mormor» é a pessoa com quem se fala: «Venha comer, vovó!». A vírgula aqui não tem nada de enfeite.',
          },
        ],
      },
      modargument: {
        emoji: '⚖️',
        text: 'Signe forklarede, at et stærkt læserbrev også tager modpartens argumenter alvorligt. «Byen mangler ganske vist boliger», sagde hun, «men alligevel kan man godt mene, at det gamle skal bevares. Hvis du viser, at du forstår den anden side, bliver dit eget argument desuden stærkere.» Linu tyggede på blyanten og tænkte over, hvordan han skulle skrive slutningen.',
        translation:
          'A Signe explicou que uma carta forte também leva a sério os argumentos do outro lado. «É verdade que a cidade precisa de moradias», disse ela, «mas mesmo assim dá para defender que o antigo seja preservado. Se você mostra que entende o outro lado, além disso, seu próprio argumento fica mais forte.» O Linu mordeu o lápis e pensou em como escrever o final.',
        choices: [
          { text: 'Skrive, at byen ganske vist mangler boliger, men at de kan bygges inde i siloen.', translation: 'Escrever que é verdade que a cidade precisa de moradias, mas que elas podem ser construídas dentro do silo.', next: 'final_bom' },
          { text: 'Skrive, at politikerne er nogle idioter, der ikke forstår noget.', translation: 'Escrever que os políticos são uns idiotas que não entendem nada.', next: 'final_neutro' },
          {
            text: '«Signe mener altså ikke, at byen mangler boliger.»',
            translation: '«Então a Signe acha que a cidade não precisa de moradias.»',
            wrong: '«Ganske vist» quer dizer «é verdade que, de fato»: a Signe ADMITE que a cidade precisa de moradias, e só depois vem o «men alligevel» (mas mesmo assim). É a estrutura clássica do contra-argumento: reconhecer o outro lado antes de defender o seu.',
          },
        ],
      },
      final_bom: {
        emoji: '📰',
        text: 'Linu skrev, at byen ganske vist manglede boliger, men at man kunne slå to fluer med ét smæk ved at bygge lejlighederne inde i den gamle silo. Signe læste brevet, rettede to kommaer og sendte det til avisen. Tre dage senere stod det i avisen, og i kommentarfeltet skrev mange, at de var enige, mens andre mente, at det ville blive alt for dyrt. En uge efter blev Linu inviteret til et borgermøde på rådhuset for at fremlægge sin idé.',
        translation:
          'O Linu escreveu que era verdade que a cidade precisava de moradias, mas que dava para matar dois coelhos com uma cajadada só construindo os apartamentos dentro do velho silo. A Signe leu a carta, corrigiu duas vírgulas e mandou para o jornal. Três dias depois ela saiu publicada, e nos comentários muita gente escreveu que concordava, enquanto outros achavam que ia ficar caro demais. Uma semana depois, o Linu foi convidado para uma reunião de moradores na prefeitura para apresentar a ideia.',
        ending: { tone: 'bom', title: 'Carta com vírgula', message: 'Você entendeu a vírgula que salva a vovó e o «ganske vist … men alligevel», e escreveu uma carta que abriu o debate.' },
      },
      final_neutro: {
        emoji: '📪',
        text: 'Linu skrev et vredt brev, hvor han kaldte politikerne idioter og satte tre udråbstegn efter hver sætning. Signe læste det og sagde forsigtigt, at avisen nok ikke ville bringe det. Hun fik ret: redaktøren svarede høfligt, at brevet var for groft, og at det manglede argumenter. Siloen stod der stadig, men Linu lærte, at en mening uden argumenter sjældent flytter noget.',
        translation:
          'O Linu escreveu uma carta furiosa, chamando os políticos de idiotas e pondo três pontos de exclamação depois de cada frase. A Signe leu e disse, com cuidado, que o jornal provavelmente não ia publicar. Ela acertou: o editor respondeu educadamente que a carta era grosseira demais e que faltavam argumentos. O silo continuava lá, mas o Linu aprendeu que uma opinião sem argumentos raramente muda alguma coisa.',
        ending: { tone: 'neutro', title: 'Carta devolvida', message: 'Você entendeu a estrutura, mas trocou os argumentos por xingamentos — e jornal nenhum publica ofensa.' },
      },
    },
  },
  {
    id: 'da-h36',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Mørket over Møn',
    emoji: '🌌',
    summary: 'Numa reunião de moradores em Stege, na ilha de Møn, o Linu acompanha a briga entre empregos e céu estrelado — e precisa entender cada «ikke desto mindre» e cada «dog» para propor uma saída.',
    cultural_context:
      'Møns Klint, na ilha de Møn, são falésias de calcário branco com mais de cem metros de altura, formadas por conchas microscópicas depositadas no fundo do mar há cerca de 70 milhões de anos; na praia se acham fósseis com facilidade. Møn e a ilhota vizinha de Nyord receberam um reconhecimento internacional pelo céu noturno escuro, raro num país tão iluminado.',
    start: 'start',
    glossary: [
      ['et borgermøde', 'uma reunião aberta de moradores'],
      ['en ordstyrer', 'um moderador de debate'],
      ['at få ordet', 'receber a palavra'],
      ['ikke desto mindre', 'ainda assim, mesmo assim'],
      ['dog', 'porém, contudo'],
      ['til gengæld', 'em compensação'],
      ['at save den gren over, man selv sidder på', 'serrar o galho em que se está sentado'],
      ['bælgmørke', 'breu, escuridão total'],
    ],
    nodes: {
      start: {
        emoji: '🏫',
        text: 'Det var en kold aften i februar, og gymnastiksalen på skolen i Stege var fyldt med mennesker. Kommunen havde indkaldt til borgermøde om et nyt, stort feriecenter tæt ved Møns Klint, med oplyste parkeringspladser og lamper langs alle stierne. Linu var kommet sammen med Grethe, som han boede hos, og som var amatørastronom. «Hvis de sætter alle de lamper op, kan vi sige farvel til stjernerne», hviskede hun, mens ordstyreren bankede på mikrofonen.',
        translation:
          'Era uma noite fria de fevereiro, e o ginásio da escola de Stege estava lotado. A prefeitura tinha convocado uma reunião de moradores sobre um centro de férias novo e grande perto de Møns Klint, com estacionamentos iluminados e postes ao longo de todas as trilhas. O Linu tinha vindo com a Grethe, em cuja casa estava hospedado, e que era astrônoma amadora. «Se puserem todos esses postes, podemos dar adeus às estrelas», cochichou ela, enquanto o moderador batia no microfone.',
        choices: [
          { text: 'Høre, hvad bygherren siger.', translation: 'Ouvir o que diz o responsável pela obra.', next: 'kasper' },
          { text: 'Spørge Grethe, hvorfor stjernerne er så vigtige her.', translation: 'Perguntar à Grethe por que as estrelas são tão importantes ali.', next: 'stjerner' },
        ],
      },
      stjerner: {
        emoji: '✨',
        text: 'Grethe fortalte, at Møn og den lille ø Nyord har fået international anerkendelse for deres mørke nattehimmel. «Her er så lidt lys fra byerne, at man kan se Mælkevejen med det blotte øje, og det er blevet sjældent i Danmark», sagde hun. Hun forklarede, at der desuden kommer turister om vinteren for at kigge på stjerner, netop når der ellers næsten ingen gæster er på øen. Linu tænkte på, at han om eftermiddagen havde stået nede på stranden under de hvide kridtklinter og samlet fossiler, der var millioner af år gamle.',
        translation:
          'A Grethe contou que Møn e a ilhota de Nyord receberam um reconhecimento internacional pelo céu noturno escuro. «Aqui há tão pouca luz das cidades que dá para ver a Via Láctea a olho nu, e isso ficou raro na Dinamarca», disse ela. Explicou que, além disso, vêm turistas no inverno para olhar as estrelas, justamente quando quase não há visitantes na ilha. O Linu lembrou que, à tarde, tinha estado na praia, debaixo das falésias brancas de calcário, catando fósseis de milhões de anos.',
        choices: [{ text: 'Lytte til den første taler.', translation: 'Ouvir o primeiro orador.', next: 'kasper' }],
      },
      kasper: {
        emoji: '🏨',
        text: 'Den første, der fik ordet, var Kasper, som stod bag feriecentret. «Efter min mening er det her en enestående chance for Møn», begyndte han. «For det første vil centret skabe over hundrede arbejdspladser, og desuden flytter de unge væk fra øen, fordi der ikke er job til dem.» Han sluttede: «Lamperne er altså nødvendige; ingen gæster vil gå rundt i bælgmørke.»',
        translation:
          'O primeiro a receber a palavra foi o Kasper, que estava por trás do centro de férias. «Na minha opinião, esta é uma chance única para Møn», começou ele. «Em primeiro lugar, o centro vai criar mais de cem empregos, e, além disso, os jovens estão indo embora da ilha porque não há trabalho para eles.» Ele concluiu: «Os postes, portanto, são necessários; nenhum hóspede vai querer andar no breu.»',
        choices: [{ text: 'Høre Grethes svar.', translation: 'Ouvir a resposta da Grethe.', next: 'grethe' }],
      },
      grethe: {
        emoji: '🔭',
        text: 'Så rakte Grethe hånden op og fik ordet. «Jeg forstår godt, at øen har brug for arbejdspladser, og jeg er ikke imod et feriecenter», sagde hun. «Ikke desto mindre er mørket en af de vigtigste grunde til, at turister kommer hertil om vinteren. Hvis vi ødelægger det, saver vi den gren over, vi selv sidder på.» Ordstyreren kiggede ud over salen og spurgte, om der var andre, der ønskede ordet.',
        translation:
          'Então a Grethe levantou a mão e recebeu a palavra. «Entendo muito bem que a ilha precisa de empregos, e não sou contra um centro de férias», disse ela. «Ainda assim, a escuridão é um dos principais motivos para os turistas virem para cá no inverno. Se a gente acabar com ela, estará serrando o galho em que está sentado.» O moderador olhou para a plateia e perguntou se mais alguém queria a palavra.',
        choices: [
          { text: 'Række vingen op og foreslå et kompromis.', translation: 'Levantar a asa e propor um meio-termo.', next: 'forslag' },
          { text: 'Blive siddende og lade de andre tale.', translation: 'Continuar sentado e deixar os outros falarem.', next: 'final_neutro' },
          {
            text: '«Grethe er altså imod at bygge noget som helst.»',
            translation: '«Então a Grethe é contra construir qualquer coisa.»',
            wrong: 'A Grethe disse que NÃO era contra o centro de férias («jeg er ikke imod et feriecenter»). O «ikke desto mindre» (ainda assim) introduz a ressalva dela: o problema são as luzes, que acabariam com o céu escuro que também atrai turistas.',
          },
        ],
      },
      forslag: {
        emoji: '💡',
        text: 'Linu rejste sig og sagde, at han var turist, og at han var kommet til Møn netop for klinten og stjernerne. «Hvorfor ikke bygge centret, men med lamper, der kun lyser nedad, og som slukker, når der ikke er nogen på stien?» foreslog han. «Så får øen både arbejdspladser og mørke, og centret kan desuden reklamere med stjerneture om vinteren.» Der blev helt stille i salen, og så begyndte nogen bagerst at klappe.',
        translation:
          'O Linu se levantou e disse que era turista, e que tinha vindo a Møn justamente pelas falésias e pelas estrelas. «Por que não construir o centro, mas com luminárias que só iluminam para baixo e que se apagam quando não há ninguém na trilha?», propôs. «Assim a ilha ganha empregos e continua escura, e além disso o centro pode anunciar passeios para ver estrelas no inverno.» O ginásio ficou em silêncio total, e então alguém lá no fundo começou a aplaudir.',
        choices: [{ text: 'Vente på Kaspers svar.', translation: 'Esperar a resposta do Kasper.', next: 'kasper2' }],
      },
      kasper2: {
        emoji: '🤝',
        text: 'Kasper kløede sig i nakken og tænkte sig om et øjeblik. «Det er faktisk en god idé», sagde han. «Den slags lamper er dog dyrere at købe, men til gengæld bruger de mindre strøm, og stjerneture kan give os gæster, også når der er lavsæson.» Ordstyreren spurgte Linu, om han havde forstået Kaspers svar.',
        translation:
          'O Kasper coçou a nuca e pensou um instante. «Na verdade, é uma boa ideia», disse ele. «Esse tipo de luminária é, porém, mais caro de comprar, mas em compensação gasta menos energia, e os passeios de estrelas podem nos trazer hóspedes também na baixa temporada.» O moderador perguntou ao Linu se ele tinha entendido a resposta do Kasper.',
        choices: [
          { text: '«Ja, han synes om idéen, selvom lamperne er dyrere.»', translation: '«Sim, ele gostou da ideia, apesar de as luminárias serem mais caras.»', next: 'final_bom' },
          {
            text: '«Ja, han siger nej, fordi lamperne er for dyre.»',
            translation: '«Sim, ele disse não, porque as luminárias são caras demais.»',
            wrong: 'O Kasper começou dizendo «Det er faktisk en god idé». O «dog» (porém) só acrescenta uma ressalva sobre o preço, e o «til gengæld» (em compensação) mostra a vantagem: gastam menos energia. Ele aceitou a ideia.',
          },
        ],
      },
      final_bom: {
        emoji: '🌠',
        text: 'Et halvt år senere vedtog kommunen planen for feriecentret, med lamper, der lyser nedad og slukker af sig selv. En klar nat i december tog Grethe Linu med op på en mark ved klinten, hvor de lagde sig på et tæppe i det frosne græs. Over dem strakte Mælkevejen sig som et lysende bånd fra den ene horisont til den anden. «Det dér er værd at kæmpe for», sagde Grethe, og Linu kunne ikke være mere enig.',
        translation:
          'Meio ano depois, a prefeitura aprovou o projeto do centro de férias, com luminárias que iluminam para baixo e se apagam sozinhas. Numa noite clara de dezembro, a Grethe levou o Linu a um campo perto das falésias, onde se deitaram numa manta sobre a grama congelada. Acima deles, a Via Láctea se estendia como uma faixa luminosa de um horizonte ao outro. «Isso aí vale a pena defender», disse a Grethe, e o Linu não podia concordar mais.',
        ending: { tone: 'bom', title: 'Estrelas e empregos', message: 'Você entendeu o «ikke desto mindre» da Grethe e o «dog» do Kasper, e propôs uma saída que agradou aos dois lados.' },
      },
      final_neutro: {
        emoji: '🌫️',
        text: 'Linu blev siddende, og debatten fortsatte i to timer, uden at nogen foreslog noget nyt. Kasper og Grethe gentog deres argumenter igen og igen, og til sidst gik folk hjem, trætte og sure. Ordstyreren lovede, at sagen ville blive behandlet på et senere møde. På vejen hjem kiggede Linu op på stjernerne og tænkte, at han måske burde have sagt noget.',
        translation:
          'O Linu continuou sentado, e o debate seguiu por duas horas sem que ninguém propusesse nada novo. O Kasper e a Grethe repetiram os mesmos argumentos várias vezes, e no fim o pessoal foi para casa cansado e emburrado. O moderador prometeu que o assunto seria discutido numa reunião futura. No caminho de volta, o Linu olhou para as estrelas e pensou que talvez devesse ter dito alguma coisa.',
        ending: { tone: 'neutro', title: 'Debate sem fim', message: 'Você entendeu os dois lados, mas ficou calado — e às vezes a ideia que falta no debate é justamente a sua.' },
      },
    },
  },
  // ───────────────────────── C1.1 ─────────────────────────
  {
    id: 'da-h37',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Bornholmsk på røgeriet',
    emoji: '🐟',
    summary: 'Em Bornholm, ilha dinamarquesa no meio do Báltico, o Linu encontra um velho pescador que fala um dialeto que nem os de Copenhague entendem — e descobre que um «sol» pode vir no prato.',
    cultural_context:
      'Bornholm fica no mar Báltico, bem mais perto da Suécia que do resto da Dinamarca. Em 1658 a ilha foi cedida à Suécia, mas no mesmo ano os moradores se rebelaram e a devolveram ao rei dinamarquês; o dialeto da ilha, o bornholmsk, é parente da fala da Escânia e conserva três gêneros gramaticais, como o dinamarquês antigo. A ilha tem quatro igrejas redondas medievais e defumadoras de arenque com chaminés brancas.',
    start: 'start',
    glossary: [
      ['en dialekt', 'um dialeto'],
      ['rigsdansk', 'o dinamarquês padrão'],
      ['bredt bornholmsk', 'bornholmês carregado, bem cerrado'],
      ['et røgeri', 'uma defumadora de peixe'],
      ['en sild', 'um arenque'],
      ['en æggeblomme', 'uma gema de ovo'],
      ['at afstå', 'ceder (um território)'],
      ['en rundkirke', 'uma igreja redonda'],
    ],
    nodes: {
      start: {
        emoji: '⛴️',
        text: 'Færgen fra Ystad i Sydsverige lagde til i Rønne en lun formiddag i juni, og Linu gik i land på Bornholm med rygsækken på ryggen. Øen ligger langt ude i Østersøen, meget tættere på Sverige end på resten af Danmark, og mange københavnere rejser hertil gennem Sverige. På kajen hørte han to havnearbejdere tale sammen, og han forstod næsten ingenting, selvom han var sikker på, at det var dansk. Melodien lød mere svensk end københavnsk, og nogle af ordene havde han aldrig hørt før.',
        translation:
          'A balsa vinda de Ystad, no sul da Suécia, atracou em Rønne numa manhã amena de junho, e o Linu desembarcou em Bornholm de mochila nas costas. A ilha fica lá no meio do Báltico, muito mais perto da Suécia que do resto da Dinamarca, e muita gente de Copenhague vem para cá passando pela Suécia. No cais ele ouviu dois portuários conversando e não entendeu quase nada, embora tivesse certeza de que era dinamarquês. A melodia soava mais sueca que copenhaguense, e algumas palavras ele nunca tinha ouvido.',
        choices: [
          { text: 'Leje en cykel og køre mod Gudhjem.', translation: 'Alugar uma bicicleta e ir para Gudhjem.', next: 'roegeri' },
          { text: 'Tage bussen til Østerlars Rundkirke først.', translation: 'Pegar o ônibus até a igreja redonda de Østerlars primeiro.', next: 'rundkirke' },
        ],
      },
      rundkirke: {
        emoji: '⛪',
        text: 'Østerlars Kirke var rund, hvid og tyk som et tårn, med små vinduer højt oppe i de massive mure. En guide fortalte, at der er fire rundkirker på Bornholm, og at de blev bygget i middelalderen, efter alt at dømme både til gudstjeneste og som tilflugtssted, når der kom fjender fra havet. Hun talte selv rigsdansk, men da hendes telefon ringede, skiftede hun med det samme til bornholmsk. «Vi taler rigsdansk til turisterne og bornholmsk til hinanden», sagde hun bagefter og smilede lidt undskyldende. Linu syntes, det var fascinerende, at man kan skifte sprog midt i en samtale uden at skifte land.',
        translation:
          'A igreja de Østerlars era redonda, branca e maciça como uma torre, com janelinhas lá no alto das paredes grossas. Uma guia contou que há quatro igrejas redondas em Bornholm e que foram construídas na Idade Média, ao que tudo indica tanto para a missa quanto como refúgio quando chegavam inimigos pelo mar. Ela mesma falava o dinamarquês padrão, mas, quando o telefone tocou, passou na hora para o bornholmsk. «Com os turistas a gente fala o padrão, e entre nós, bornholmsk», disse ela depois, com um sorriso meio sem graça. O Linu achou fascinante que dê para trocar de língua no meio de uma conversa sem trocar de país.',
        choices: [{ text: 'Cykle videre til Gudhjem.', translation: 'Seguir de bicicleta até Gudhjem.', next: 'roegeri' }],
      },
      roegeri: {
        emoji: '🏭',
        text: 'I Gudhjem ragede de hvide skorstene fra røgerierne op over de små huse, og luften duftede af røg og sild. Ved et langt bord uden for et røgeri sad en gammel fisker, Aksel, og rensede sild, mens han fortalte en lang historie til en flok turister. Han talte bredt bornholmsk, og turisterne nikkede høfligt, men det var tydeligt, at de ikke fattede et ord. En ung kvinde bag disken, Line, grinede og sagde, at det var hendes morfar, og at han gjorde det med vilje. «Han elsker at se københavnerne svede», hviskede hun.',
        translation:
          'Em Gudhjem, as chaminés brancas das defumadoras se erguiam acima das casinhas, e o ar cheirava a fumaça e arenque. Numa mesa comprida do lado de fora de uma defumadora, um velho pescador, o Aksel, limpava arenques enquanto contava uma longa história a um grupo de turistas. Ele falava um bornholmsk cerrado, e os turistas faziam que sim educadamente, mas estava claro que não pescavam uma palavra. Uma moça atrás do balcão, a Line, riu e disse que era o avô dela, e que ele fazia aquilo de propósito. «Ele adora ver o pessoal de Copenhague suar», cochichou ela.',
        choices: [
          { text: 'Bede Line om at oversætte for morfaren.', translation: 'Pedir à Line que traduza o avô.', next: 'line' },
          {
            text: '«Han taler altså svensk, fordi Bornholm ligger så tæt på Sverige?»',
            translation: '«Então ele está falando sueco, porque Bornholm fica tão perto da Suécia?»',
            wrong: 'Não: o Aksel fala bornholmsk, um dialeto do dinamarquês. A melodia lembra o sueco, e o dialeto é parente da fala da Escânia, no sul da Suécia (que foi dinamarquesa até 1658), mas é dinamarquês — só que um dinamarquês que nem os de Copenhague entendem direito.',
          },
        ],
      },
      line: {
        emoji: '🗣️',
        text: 'Line forklarede, at bornholmsk er en dansk dialekt, men at den har bevaret meget, som rigsdansk mistede for længe siden. «For eksempel har vi stadig tre køn, ligesom man havde i gammeldansk, mens rigsdansk kun har to, fælleskøn og intetkøn», sagde hun. Hun fortalte også, at mange unge på øen i dag taler rigsdansk med bornholmsk melodi, og at det helt brede bornholmsk mest tales af de ældre. «Morfar siger, at når han dør, dør sproget med ham, men det har han sagt i tyve år», tilføjede hun med et skævt smil. Aksel råbte noget fra bordet, og Line oversatte: han ville vide, om pingvinen ville smage en Sol over Gudhjem.',
        translation:
          'A Line explicou que o bornholmsk é um dialeto dinamarquês, mas que conservou muita coisa que o padrão perdeu há muito tempo. «Por exemplo, a gente ainda tem três gêneros, como no dinamarquês antigo, enquanto o padrão só tem dois, o comum e o neutro», disse ela. Contou também que muitos jovens da ilha hoje falam o dinamarquês padrão com melodia de Bornholm, e que o bornholmsk bem cerrado é falado sobretudo pelos mais velhos. «O vovô diz que, quando ele morrer, a língua morre com ele, mas ele diz isso há vinte anos», acrescentou, com um sorriso torto. O Aksel gritou alguma coisa lá da mesa, e a Line traduziu: ele queria saber se o pinguim queria provar um Sol sobre Gudhjem.',
        choices: [
          { text: 'Sige ja tak til en Sol over Gudhjem.', translation: 'Aceitar um Sol sobre Gudhjem.', next: 'sol' },
          {
            text: '«Solen går altså snart ned over Gudhjem?»',
            translation: '«Então o sol vai se pôr logo sobre Gudhjem?»',
            wrong: '«Sol over Gudhjem» (sol sobre Gudhjem) não fala do pôr do sol: é o nome de um prato — pão de centeio com arenque defumado, rabanete, cebolinha e uma gema crua no meio. A gema amarela é o «sol». O Aksel estava oferecendo comida.',
          },
        ],
      },
      sol: {
        emoji: '🍳',
        text: 'Line lagde et stykke rugbrød på en tallerken med en varm, røget sild, radiser og purløg, og i midten satte hun en rå æggeblomme. «Den gule blomme er solen, og resten er Gudhjem», forklarede hun. Linu tog en stor bid, og Aksel klappede ham på ryggen og sagde noget, der fik alle bornholmerne omkring bordet til at grine. Line oversatte, at morfaren havde sagt, at pingvinen spiste som en rigtig bornholmer, «og det er det største kompliment, han kender». Bagefter spurgte Aksel gennem Line, om Linu kendte historien om, hvordan Bornholm blev dansk igen.',
        translation:
          'A Line pôs num prato uma fatia de pão de centeio com um arenque defumado ainda quente, rabanete e cebolinha, e no meio colocou uma gema crua. «A gema amarela é o sol, e o resto é Gudhjem», explicou ela. O Linu deu uma mordida enorme, e o Aksel bateu nas costas dele e disse alguma coisa que fez todos os bornholmeses em volta da mesa rirem. A Line traduziu que o avô tinha dito que o pinguim comia como um verdadeiro bornholmês, «e esse é o maior elogio que ele conhece». Depois o Aksel perguntou, por meio da Line, se o Linu conhecia a história de como Bornholm voltou a ser dinamarquesa.',
        choices: [
          { text: 'Sige nej og bede ham fortælle den.', translation: 'Dizer que não e pedir que ele conte.', next: 'historie' },
          { text: 'Sige, at han hellere vil ned og bade.', translation: 'Dizer que prefere ir nadar.', next: 'final_neutro' },
        ],
      },
      historie: {
        emoji: '⚔️',
        text: 'Aksel lagde kniven fra sig og fortalte langsomt, så Line kunne nå at oversætte. I 1658 måtte Danmark afstå Skåne, Halland, Blekinge og Bornholm til Sverige efter en tabt krig, men samme år gjorde bornholmerne oprør og dræbte den svenske kommandant i Rønne. «Så gav vi øen tilbage til kongen i København, og siden har vi været danske», sagde Aksel stolt, og denne gang talte han så tydeligt, at Linu forstod det uden oversættelse. Line blinkede og sagde, at morfaren sagtens kunne tale rigsdansk, når han ville; han ville bare sjældent. Linu grinede og tænkte, at en dialekt ikke kun er en måde at tale på, men også en måde at vise, hvor man hører til.',
        translation:
          'O Aksel largou a faca e contou devagar, para a Line conseguir traduzir. Em 1658 a Dinamarca teve que ceder a Escânia, a Halland, a Blekinge e Bornholm à Suécia depois de perder uma guerra, mas no mesmo ano os bornholmeses se rebelaram e mataram o comandante sueco em Rønne. «Aí a gente devolveu a ilha ao rei em Copenhague, e desde então somos dinamarqueses», disse o Aksel com orgulho, e dessa vez falou tão claro que o Linu entendeu sem tradução. A Line piscou e disse que o avô sabia muito bem falar o dinamarquês padrão quando queria; ele é que quase nunca queria. O Linu riu e pensou que um dialeto não é só um jeito de falar, mas também um jeito de mostrar de onde a gente é.',
        choices: [{ text: 'Blive siddende ved bordet og lytte videre.', translation: 'Ficar sentado à mesa ouvindo mais.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🌅',
        text: 'Da solen gik ned bag røgeriets skorstene, sad Linu stadig ved det lange bord og lyttede til Aksel, og efterhånden forstod han mere og mere. Han lærte, at man skal lytte efter melodien og ikke hænge sig i hvert enkelt ord. Da han skulle gå, gav Aksel ham hånden og sagde et langt farvel på bornholmsk, som Line nægtede at oversætte. «Det var noget pænt», lovede hun, «tror jeg nok.» Linu cyklede tilbage mod Rønne i den lyse sommernat med smag af røg i næbbet og en ny dialekt i ørerne.',
        translation:
          'Quando o sol se pôs atrás das chaminés da defumadora, o Linu ainda estava à mesa comprida ouvindo o Aksel, e aos poucos foi entendendo cada vez mais. Aprendeu que é preciso ouvir a melodia e não se prender a cada palavra. Na hora de ir embora, o Aksel apertou a mão dele e disse uma longa despedida em bornholmsk, que a Line se recusou a traduzir. «Era uma coisa bonita», garantiu ela, «acho eu.» O Linu pedalou de volta para Rønne na noite clara de verão, com gosto de fumaça no bico e um dialeto novo nos ouvidos.',
        ending: { tone: 'bom', title: 'Ouvido de Bornholm', message: 'Você entendeu que o bornholmsk é dinamarquês, que o «sol» vinha no prato e ouviu a história da ilha da boca de quem a conhece.' },
      },
      final_neutro: {
        emoji: '🏊',
        text: 'Linu takkede for maden og sagde, at han hellere ville ned og bade, mens solen stadig skinnede. Aksel trak på skuldrene og begyndte at fortælle historien til de andre turister, på så bredt bornholmsk, at ingen af dem forstod den. Vandet ved klipperne var klart og koldt, og Linu havde en dejlig eftermiddag. Men om aftenen, da han læste om Bornholm på sin telefon, fandt han ud af, at han var gået glip af en af øens bedste historier, fortalt af en, der kunne den udenad.',
        translation:
          'O Linu agradeceu a comida e disse que preferia ir nadar enquanto o sol ainda brilhava. O Aksel deu de ombros e começou a contar a história para os outros turistas, num bornholmsk tão cerrado que nenhum deles entendeu. A água junto às rochas era transparente e fria, e o Linu teve uma tarde ótima. Mas à noite, lendo sobre Bornholm no celular, descobriu que tinha perdido uma das melhores histórias da ilha, contada por alguém que a sabia de cor.',
        ending: { tone: 'neutro', title: 'Mergulho sem história', message: 'Você entendeu o dialeto e o prato, mas trocou a história da ilha por um mergulho — ela fica para a próxima.' },
      },
    },
  },
  {
    id: 'da-h38',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Ræk mig æ kande',
    emoji: '🎂',
    summary: 'Em Sønderborg, perto da fronteira alemã, o Linu vai a um aniversário com mesa de bolos sem fim e descobre um dialeto que põe o artigo na frente, uma família que fala três línguas e uma história que ainda dói.',
    cultural_context:
      'Depois da derrota na batalha de Dybbøl, em 18 de abril de 1864, o sul da Jutlândia ficou sob domínio alemão até 1920, quando um plebiscito devolveu o norte do Schleswig à Dinamarca — a «genforeningen», a reunificação. Hoje há uma minoria alemã no sul da Dinamarca e uma minoria dinamarquesa no norte da Alemanha, cada uma com escolas e jornais próprios; o dialeto local, o sønderjysk, põe o artigo definido antes do substantivo: «æ hus» é «huset».',
    start: 'start',
    glossary: [
      ['æ (sønderjysk)', 'artigo definido anteposto: «æ kande» = «kanden»'],
      ['et kaffebord', 'uma mesa de café com muitos bolos'],
      ['et mindretal', 'uma minoria'],
      ['dansksindet', 'de sentimento dinamarquês'],
      ['en folkeafstemning', 'um plebiscito'],
      ['genforeningen', 'a reunificação (de 1920)'],
      ['både-og', 'as duas coisas ao mesmo tempo'],
      ['et grænseland', 'uma região de fronteira'],
    ],
    nodes: {
      start: {
        emoji: '🍰',
        text: 'En søndag i maj stod Linu i en lys stue i Sønderborg, hvor Niklas’ morfar, Hans, fyldte firs år. På det lange bord stod der så mange kager, at Linu gav op at tælle, da han var nået til tyve: lagkager, småkager, tærter, kringler og en mørk kage, der lignede rugbrød. «Det er et rigtigt sønderjysk kaffebord», sagde Niklas stolt, «og man skal helst smage det hele.» Morfar Hans sad for bordenden og sagde noget til Linu, som lød næsten som dansk, men ikke helt.',
        translation:
          'Num domingo de maio, o Linu estava numa sala clara em Sønderborg, onde o avô do Niklas, o Hans, fazia oitenta anos. Na mesa comprida havia tantos bolos que o Linu desistiu de contar quando chegou a vinte: bolos em camadas, biscoitos, tortas, rosquinhas trançadas e um bolo escuro que parecia pão de centeio. «É uma mesa de café sønderjysk de verdade», disse o Niklas com orgulho, «e o ideal é provar tudo.» O vovô Hans estava na cabeceira e disse ao Linu uma coisa que soava quase como dinamarquês, mas não inteiramente.',
        choices: [
          { text: 'Spørge, hvorfor der er så mange kager.', translation: 'Perguntar por que há tantos bolos.', next: 'kager' },
          { text: 'Prøve at forstå, hvad morfaren siger.', translation: 'Tentar entender o que o avô está dizendo.', next: 'morfar' },
        ],
      },
      kager: {
        emoji: '☕',
        text: 'Niklas’ mor, Anke, forklarede, at traditionen efter sigende voksede frem i tiden efter 1864, da Sønderjylland hørte under Tyskland. «De dansksindede mødtes i forsamlingshusene, og alle bagte og tog kager med, så kaffebordet blev en måde at holde sammen på», sagde hun. Ifølge traditionen skal der være syv bløde og syv hårde kager, men hos Hans var der mindst dobbelt så mange. «Hver kage er et lille stykke historie», sagde Anke og skar et stykke lagkage til Linu. Så pegede morfar Hans på kaffekanden og sagde noget til ham.',
        translation:
          'A mãe do Niklas, a Anke, explicou que a tradição, pelo que se conta, nasceu no período depois de 1864, quando o sul da Jutlândia pertencia à Alemanha. «Os de sentimento dinamarquês se reuniam nas casas comunitárias, e todo mundo assava e levava bolo, então a mesa de café virou um jeito de se manterem unidos», disse ela. Pela tradição, deve haver sete bolos macios e sete duros, mas na casa do Hans havia pelo menos o dobro. «Cada bolo é um pedacinho de história», disse a Anke, cortando uma fatia de bolo para o Linu. Então o vovô Hans apontou para o bule de café e disse alguma coisa para ele.',
        choices: [{ text: 'Lytte godt efter, hvad morfaren siger.', translation: 'Prestar atenção ao que o avô diz.', next: 'morfar' }],
      },
      morfar: {
        emoji: '🫖',
        text: '«Ræk mig lige æ kande, min dreng», sagde morfar Hans og pegede hen over bordet. Linu kiggede forvirret rundt, for han havde aldrig hørt «æ» brugt på den måde. Niklas forklarede, at man på sønderjysk, ligesom på vestjysk, sætter den bestemte artikel foran ordet i stedet for at hænge den på bagefter, som man gør på rigsdansk. På bordet stod der tre kander: en tom, en med te og så den store kaffekande lige foran Linu.',
        translation:
          '«Me passa aí æ kande, meu rapaz», disse o vovô Hans, apontando por cima da mesa. O Linu olhou em volta, confuso, porque nunca tinha ouvido «æ» usado desse jeito. O Niklas explicou que em sønderjysk, assim como no dialeto do oeste da Jutlândia, o artigo definido vai antes da palavra, em vez de ser grudado no fim, como no dinamarquês padrão. Na mesa havia três bules: um vazio, um com chá e o grande bule de café bem na frente do Linu.',
        choices: [
          { text: 'Række ham den store kaffekande, som han pegede på.', translation: 'Passar a ele o bule grande de café para o qual ele apontou.', next: 'skole' },
          {
            text: 'Hente en ny kande i køkkenet.',
            translation: 'Buscar um bule novo na cozinha.',
            wrong: '«Æ kande» não é «en kande» (um bule qualquer): o «æ» é o artigo definido anteposto do sønderjysk, e «æ kande» equivale a «kanden», o bule — aquele para o qual ele apontou, bem na frente do Linu.',
          },
        ],
      },
      skole: {
        emoji: '🏫',
        text: 'Mens de spiste, fortalte Niklas, at han gik på en tysk skole i Sønderborg, en af mindretallets skoler. «Min far hører til det tyske mindretal, så i skolen taler vi tysk, derhjemme taler vi dansk, og med morfar taler jeg sønderjysk», sagde han. Anke tilføjede, at mange i mindretallet føler sig både tyske og danske, og at de er danske statsborgere ligesom alle andre. «Det er ikke enten-eller», sagde hun, «det er både-og.» Morfar Hans nikkede og sagde noget på sønderjysk, som Niklas oversatte til «grænsen går ikke gennem hjertet».',
        translation:
          'Enquanto comiam, o Niklas contou que estudava numa escola alemã em Sønderborg, uma das escolas da minoria. «Meu pai é da minoria alemã, então na escola a gente fala alemão, em casa fala dinamarquês e com o vovô eu falo sønderjysk», disse ele. A Anke acrescentou que muita gente da minoria se sente alemã e dinamarquesa ao mesmo tempo, e que são cidadãos dinamarqueses como todos os outros. «Não é ou isto ou aquilo», disse ela, «são as duas coisas.» O vovô Hans concordou com a cabeça e disse algo em sønderjysk que o Niklas traduziu como «a fronteira não passa pelo coração».',
        choices: [
          { text: 'Spørge morfar Hans om grænsen og dens historie.', translation: 'Perguntar ao vovô Hans sobre a fronteira e sua história.', next: 'dybbol' },
          {
            text: '«Niklas er altså tysker og ikke dansker.»',
            translation: '«Então o Niklas é alemão, e não dinamarquês.»',
            wrong: 'A Anke disse justamente que não é «enten-eller» (ou isto ou aquilo), e sim «både-og» (as duas coisas): quem pertence à minoria alemã é cidadão dinamarquês e muitas vezes se sente alemão e dinamarquês ao mesmo tempo.',
          },
        ],
      },
      dybbol: {
        emoji: '🌾',
        text: 'Efter kaffen kørte de op til Dybbøl Mølle, hvor man kan se ud over Alssund og Sønderborg. Hans fortalte, at danske og preussiske tropper kæmpede her den 18. april 1864, og at nederlaget betød, at Sønderjylland hørte under Tyskland i over halvtreds år. «Min egen far måtte i tysk uniform under Første Verdenskrig, selvom han følte sig dansk», sagde han stille, «ligesom tusindvis af andre sønderjyske drenge.» Først i 1920, efter en folkeafstemning, kom Nordslesvig tilbage til Danmark, og det kalder man genforeningen. Hans kiggede længe ud over vandet uden at sige noget.',
        translation:
          'Depois do café, foram de carro até o moinho de Dybbøl, de onde se avista o estreito de Als e Sønderborg. O Hans contou que tropas dinamarquesas e prussianas lutaram ali em 18 de abril de 1864, e que a derrota fez o sul da Jutlândia pertencer à Alemanha por mais de cinquenta anos. «Meu próprio pai teve que vestir farda alemã na Primeira Guerra Mundial, mesmo se sentindo dinamarquês», disse ele baixinho, «como milhares de outros rapazes daqui.» Só em 1920, depois de um plebiscito, o norte do Schleswig voltou à Dinamarca, e é isso que se chama de reunificação. O Hans ficou um bom tempo olhando a água em silêncio.',
        choices: [
          { text: 'Spørge Hans, hvordan det er at leve i et grænseland i dag.', translation: 'Perguntar ao Hans como é viver numa região de fronteira hoje.', next: 'final_bom' },
          { text: 'Sige muntert, at så er han jo egentlig halvt tysk.', translation: 'Dizer, todo animado, que então ele é meio alemão.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🤝',
        text: 'Hans tænkte sig længe om, før han svarede. «Da jeg var dreng, snakkede man ikke med naboerne på den anden side», sagde han, «men i dag går mit barnebarn på tysk skole, og jeg er stolt af ham.» Han forklarede, at både det tyske mindretal i Danmark og det danske mindretal syd for grænsen i dag har deres egne skoler, aviser og foreninger. «Det tog hundrede år at lære, at man godt kan være to ting på én gang», sagde han og lagde en hånd på Niklas’ skulder. På vejen hjem sang Niklas en gammel sang på sønderjysk, og Linu nynnede med, selvom han kun forstod hvert tredje ord.',
        translation:
          'O Hans pensou muito antes de responder. «Quando eu era menino, a gente não conversava com os vizinhos do outro lado», disse ele, «mas hoje meu neto estuda numa escola alemã, e eu tenho orgulho dele.» Explicou que tanto a minoria alemã na Dinamarca quanto a minoria dinamarquesa ao sul da fronteira têm hoje suas próprias escolas, jornais e associações. «Levou cem anos para aprender que dá para ser duas coisas ao mesmo tempo», disse ele, pondo a mão no ombro do Niklas. No caminho de volta, o Niklas cantou uma canção antiga em sønderjysk, e o Linu cantarolou junto, embora só entendesse uma palavra a cada três.',
        ending: { tone: 'bom', title: 'Duas coisas ao mesmo tempo', message: 'Você entendeu o «æ» do sønderjysk, o «både-og» da minoria e fez a pergunta certa numa terra de fronteira.' },
      },
      final_neutro: {
        emoji: '😶',
        text: 'Der blev helt stille, og Niklas kiggede ned i jorden. Hans svarede roligt, at hans far havde båret tysk uniform, men at han aldrig havde været tysk i sit hjerte, og at det var et sår, som mange familier i Sønderjylland stadig bar på. Linu skyndte sig at undskylde, og Hans klappede ham venligt på vingen. Men resten af eftermiddagen var stemningen mere stille end før. Linu forstod, at historien i et grænseland ikke er noget, man spøger med.',
        translation:
          'Fez-se um silêncio total, e o Niklas olhou para o chão. O Hans respondeu, calmo, que o pai tinha usado farda alemã, mas nunca tinha sido alemão no coração, e que aquela era uma ferida que muitas famílias do sul da Jutlândia ainda carregavam. O Linu se apressou a pedir desculpas, e o Hans deu um tapinha gentil na asa dele. Mas o resto da tarde foi mais silencioso que antes. O Linu entendeu que, numa terra de fronteira, história não é coisa com que se brinca.',
        ending: { tone: 'neutro', title: 'Brincadeira fora de hora', message: 'Você entendeu a língua e a história, mas errou o tom: numa fronteira, identidade é assunto delicado.' },
      },
    },
  },
  {
    id: 'da-h39',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Tre sprog, én færge',
    emoji: '⛴️',
    summary: 'Na balsa entre Helsingør e a Suécia, o Linu divide a mesa com uma dinamarquesa, uma sueca e um norueguês, cada um falando a própria língua — até que uma piada «calma» e um almoço às oito da manhã causam confusão.',
    cultural_context:
      'Helsingør e Helsingborg ficam frente a frente no ponto mais estreito do Øresund, a cerca de quatro quilômetros uma da outra. No castelo de Kronborg, onde Shakespeare ambientou «Hamlet», a Dinamarca cobrou por séculos um pedágio de todos os navios que passavam pelo estreito. Dinamarqueses, suecos e noruegueses muitas vezes conversam cada um na própria língua, mas os falsos amigos pregam peças.',
    start: 'start',
    glossary: [
      ['nabosprogsforståelse', 'compreensão entre línguas vizinhas'],
      ['rolig (dansk) / rolig (svensk)', 'calmo / engraçado'],
      ['frokost (dansk) / frokost (norsk)', 'almoço / café da manhã'],
      ['en falsk ven', 'um falso amigo (palavra enganosa)'],
      ['en vittighed', 'uma piada'],
      ['at sluge ordene', 'engolir as palavras'],
      ['Øresundstolden', 'o pedágio do Øresund (cobrado de 1429 a 1857)'],
    ],
    nodes: {
      start: {
        emoji: '🌊',
        text: 'Det blæste friskt over Øresund, da Linu gik om bord på færgen fra Helsingør til Helsingborg, en tur på kun omkring tyve minutter. Bag ham lå Kronborg med sine grønne kobbertage, og foran ham kunne han allerede se den svenske kyst. I cafeteriet satte han sig ved et bord sammen med tre fremmede: Mette fra Helsingør, Karin fra Helsingborg og Ola, en nordmand fra Bergen. Til hans store overraskelse talte de hver deres sprog, og alligevel så de ud til at forstå hinanden.',
        translation:
          'Ventava forte sobre o Øresund quando o Linu embarcou na balsa de Helsingør para Helsingborg, uma travessia de só uns vinte minutos. Atrás dele ficava Kronborg, com seus telhados verdes de cobre, e à frente ele já via a costa sueca. No refeitório, sentou-se a uma mesa com três desconhecidos: a Mette, de Helsingør, a Karin, de Helsingborg, e o Ola, um norueguês de Bergen. Para sua grande surpresa, cada um falava a própria língua, e mesmo assim pareciam se entender.',
        choices: [
          { text: 'Spørge, hvordan de kan forstå hinanden.', translation: 'Perguntar como eles conseguem se entender.', next: 'forstaa' },
          { text: 'Lytte til samtalen uden at sige noget.', translation: 'Ouvir a conversa sem dizer nada.', next: 'vits' },
        ],
      },
      forstaa: {
        emoji: '🗣️',
        text: 'Mette forklarede, at dansk, svensk og norsk ligger så tæt på hinanden, at mange skandinaver taler hver deres sprog, når de mødes, og det kalder man nabosprogsforståelse. «Men det går ikke lige godt alle veje», sagde hun. «Nordmændene har det nemmest, fordi deres skriftsprog ligner dansk, og deres udtale ligner svensk.» Karin sagde noget på svensk, og Mette oversatte med et skævt smil: «Hun siger, at det sværeste er at forstå os danskere, fordi vi sluger halvdelen af ordene.» Ola lo så højt, at folk ved nabobordet vendte sig om.',
        translation:
          'A Mette explicou que o dinamarquês, o sueco e o norueguês são tão próximos que muitos escandinavos falam cada um a sua língua quando se encontram, e que isso se chama compreensão entre línguas vizinhas. «Mas não funciona igualmente bem em todas as direções», disse ela. «Os noruegueses são os que se saem melhor, porque a língua escrita deles parece o dinamarquês, e a pronúncia parece o sueco.» A Karin disse alguma coisa em sueco, e a Mette traduziu com um sorriso torto: «Ela diz que o mais difícil é entender a gente, os dinamarqueses, porque engolimos metade das palavras.» O Ola riu tão alto que o pessoal da mesa ao lado se virou.',
        choices: [{ text: 'Lytte videre til samtalen.', translation: 'Continuar ouvindo a conversa.', next: 'vits' }],
      },
      vits: {
        emoji: '😂',
        text: 'Mette fortalte en vittighed om en svensker, en nordmand og en dansker, der sad fast i en elevator, og hun fortalte den på så hurtigt dansk, at Linu først fangede pointen til sidst. Ola klukkede, og Karin klappede i hænderne og udbrød: «Det var jätteroligt!» Mette blev lidt fornærmet og spurgte, hvad der var så roligt ved hendes vittighed. Karin og Ola grinede endnu mere, og Mette kiggede spørgende på Linu.',
        translation:
          'A Mette contou uma piada sobre um sueco, um norueguês e um dinamarquês presos num elevador, e contou num dinamarquês tão rápido que o Linu só pegou a graça no final. O Ola deu uma risadinha, e a Karin bateu palmas e exclamou: «Det var jätteroligt!» A Mette ficou meio ofendida e perguntou o que é que a piada dela tinha de tão calmo. A Karin e o Ola riram ainda mais, e a Mette olhou para o Linu, esperando uma explicação.',
        choices: [
          { text: 'Forklare, at «rolig» betyder sjov på svensk.', translation: 'Explicar que «rolig» quer dizer engraçado em sueco.', next: 'frokost' },
          {
            text: 'Forklare, at Karin syntes, at vittigheden var for stille og kedelig.',
            translation: 'Explicar que a Karin achou a piada parada e chata demais.',
            wrong: 'Em sueco, «rolig» quer dizer engraçado, divertido; em dinamarquês, «rolig» quer dizer calmo, tranquilo. Com «jätteroligt» (superengraçado), a Karin estava elogiando a piada — e a Mette entendeu «supercalmo».',
          },
        ],
      },
      frokost: {
        emoji: '🥐',
        text: 'Mette lo, da hun forstod misforståelsen, og sagde, at det var en af de klassiske fælder mellem dansk og svensk. Så foreslog Ola, at de alle fire skulle mødes igen næste dag og spise frokost sammen på hotellet i Helsingør, hvor han boede. «Klokken otte?» spurgte han, og Mette kiggede forvirret på ham. «Frokost klokken otte om morgenen? Så er jeg jo sulten igen, længe før det bliver aften», sagde hun. Ola så lige så forvirret ud som hun.',
        translation:
          'A Mette riu quando entendeu o mal-entendido e disse que aquela era uma das armadilhas clássicas entre o dinamarquês e o sueco. Então o Ola propôs que os quatro se encontrassem de novo no dia seguinte para tomar «frokost» juntos no hotel em Helsingør onde ele estava hospedado. «Às oito?», perguntou ele, e a Mette olhou para ele confusa. «Almoço às oito da manhã? Aí eu vou estar com fome de novo muito antes de anoitecer», disse ela. O Ola parecia tão confuso quanto ela.',
        choices: [
          { text: 'Forklare, at nordmænd kalder morgenmaden «frokost».', translation: 'Explicar que os noruegueses chamam o café da manhã de «frokost».', next: 'kronborg' },
          {
            text: '«Ola mener altså klokken otte om aftenen.»',
            translation: '«Então o Ola quer dizer às oito da noite.»',
            wrong: 'O Ola não errou o horário: em norueguês, «frokost» é o café da manhã, enquanto em dinamarquês «frokost» é o almoço. Oito da manhã é hora de «frokost» norueguês — e a Mette imaginou um almoço às oito.',
          },
        ],
      },
      kronborg: {
        emoji: '🏰',
        text: 'Næste formiddag mødtes de fire på Kronborg efter en norsk frokost med kaffe og rundstykker. En guide fortalte, at kongen i århundreder opkrævede Øresundstolden her af alle skibe, der sejlede forbi, og at Shakespeare lod «Hamlet» foregå på slottet, som englænderne kaldte Elsinore. Ude på voldene stod en skuespiller og reciterede den berømte replik først på engelsk og bagefter på dansk: «At være eller ikke være». Karin og Ola sagde den på deres egne sprog, og Linu lagde mærke til, at de tre versioner lød næsten ens. Mette foreslog, at de skulle gøre noget ved alle de farlige ord, de havde snublet over.',
        translation:
          'Na manhã seguinte, os quatro se encontraram em Kronborg depois de um «frokost» norueguês, com café e pãezinhos. Um guia contou que, durante séculos, o rei cobrava ali o pedágio do Øresund de todos os navios que passavam, e que Shakespeare ambientou «Hamlet» no castelo, que os ingleses chamavam de Elsinore. Nas muralhas, um ator recitava a fala famosa, primeiro em inglês e depois em dinamarquês: «Ser ou não ser». A Karin e o Ola disseram a frase nas suas línguas, e o Linu reparou que as três versões soavam quase iguais. A Mette sugeriu que eles fizessem alguma coisa com todas as palavras traiçoeiras em que tinham tropeçado.',
        choices: [
          { text: 'Foreslå, at de laver en lille liste over falske venner.', translation: 'Sugerir que façam uma listinha de falsos amigos.', next: 'final_bom' },
          { text: 'Sige, at det ville være nemmere, hvis alle bare talte engelsk.', translation: 'Dizer que seria mais fácil se todos falassem inglês.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '📋',
        text: 'På en bænk ved voldene lavede de fire en liste over de farligste ord: «rolig», der betyder rolig i Danmark og sjov i Sverige, og «frokost», der er frokost i Danmark og morgenmad i Norge. Karin tilføjede, at «semester» på svensk betyder ferie, og Mette lovede aldrig mere at sige til en svensker, at hun glædede sig til sit næste semester. Ola sagde, at listen burde hænge på alle færger over Øresund. Da Linu sejlede tilbage om aftenen, tænkte han, at tre sprog, der næsten er ét, kan give både de største misforståelser og de bedste grin.',
        translation:
          'Num banco junto às muralhas, os quatro fizeram uma lista das palavras mais perigosas: «rolig», que quer dizer calmo na Dinamarca e engraçado na Suécia, e «frokost», que é almoço na Dinamarca e café da manhã na Noruega. A Karin acrescentou que «semester», em sueco, quer dizer férias, e a Mette prometeu nunca mais dizer a um sueco que estava animada com o próximo semestre. O Ola disse que a lista devia ficar pendurada em todas as balsas do Øresund. Voltando de balsa à noite, o Linu pensou que três línguas que são quase uma só rendem os maiores mal-entendidos e as melhores risadas.',
        ending: { tone: 'bom', title: 'Três línguas, uma mesa', message: 'Você desfez os mal-entendidos do «rolig» e do «frokost» e transformou os falsos amigos numa lista para a viagem.' },
      },
      final_neutro: {
        emoji: '🇬🇧',
        text: 'Der blev stille et øjeblik, og så sagde Mette høfligt, at de selvfølgelig godt kunne tale engelsk. Resten af dagen talte de fire engelsk, og ingen misforstod noget, men ingen grinede heller så meget som på færgen. Karin og Ola skiftede efterhånden tilbage til svensk og norsk, når de talte med hinanden. Linu opdagede, at han var gået glip af det sjoveste ved Skandinavien: at man kan forstå hinanden på tre sprog, næsten.',
        translation:
          'Houve um instante de silêncio, e então a Mette disse, educada, que claro que dava para falar inglês. No resto do dia os quatro falaram inglês, e ninguém entendeu nada errado, mas também ninguém riu tanto quanto na balsa. A Karin e o Ola aos poucos voltaram para o sueco e o norueguês quando falavam entre si. O Linu percebeu que tinha perdido o mais divertido da Escandinávia: poder se entender em três línguas — quase.',
        ending: { tone: 'neutro', title: 'Tudo em inglês', message: 'Você entendeu os falsos amigos, mas trocou a graça do escandinavo pelo conforto do inglês.' },
      },
    },
  },
  // ───────────────────────── C1.2 ─────────────────────────
  {
    id: 'da-h40',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Årringe og klart sprog',
    emoji: '🪵',
    summary: 'Em Ribe, a cidade mais antiga da Dinamarca, o Linu ajuda uma curadora a transformar um texto acadêmico sobre arqueologia num painel que uma criança de dez anos consiga ler — sem deixar de ser verdadeiro.',
    cultural_context:
      'Ribe, no sudoeste da Jutlândia, é considerada a cidade mais antiga da Dinamarca: escavações mostram um mercado à beira do rio Ribe já no começo do século VIII, datado pelos anéis de crescimento da madeira. No verão, um vigia noturno percorre as ruas à noite cantando versos antigos. Na Dinamarca, a «klarsprog» (linguagem clara) é o esforço para que órgãos públicos e instituições escrevam de modo simples: frases curtas, voz ativa e o leitor tratado por «du».',
    start: 'start',
    glossary: [
      ['klart sprog', 'linguagem clara'],
      ['en planche', 'um painel de exposição'],
      ['en museumsinspektør', 'um curador de museu'],
      ['dendrokronologi', 'datação pelos anéis de crescimento da madeira'],
      ['en årring', 'um anel de crescimento (de árvore)'],
      ['at henføre til', 'atribuir a, situar em'],
      ['700-tallet', 'o século VIII (os anos 700)'],
      ['en vægter', 'um vigia noturno'],
    ],
    nodes: {
      start: {
        emoji: '🚲',
        text: 'En grå morgen i april cyklede Linu ind i Ribe, hvor skæve bindingsværkshuse lænede sig ind over de brostensbelagte gader, og domkirkens tårn ragede op over de flade marsker. Han skulle være frivillig i en uge på byens museum, som var ved at lave en ny udstilling om byens begyndelse. Museumsinspektøren, Karen, tog imod ham med en tyk rapport under armen og et bekymret udtryk i ansigtet. «Direktøren siger, at vores tekster er for tunge for almindelige mennesker», sukkede hun, «og det er desværre rigtigt.»',
        translation:
          'Numa manhã cinzenta de abril, o Linu chegou de bicicleta a Ribe, onde casas tortas de enxaimel se debruçavam sobre as ruas de paralelepípedo, e a torre da catedral se erguia acima dos pântanos planos. Ele ia passar uma semana como voluntário no museu da cidade, que estava preparando uma nova exposição sobre as origens de Ribe. A curadora, Karen, o recebeu com um relatório grosso debaixo do braço e uma expressão preocupada. «O diretor diz que nossos textos são pesados demais para as pessoas comuns», suspirou ela, «e infelizmente é verdade.»',
        choices: [
          { text: 'Gå direkte i gang med teksterne.', translation: 'Começar direto a trabalhar nos textos.', next: 'tekst' },
          { text: 'Fortælle først om sin tur med vægteren i går aftes.', translation: 'Contar primeiro sobre o passeio com o vigia noturno na noite anterior.', next: 'vaegter' },
        ],
      },
      vaegter: {
        emoji: '🏮',
        text: 'Linu fortalte, at han aftenen før var gået rundt med byens vægter, en mand med lygte og morgenstjerne, som gik gennem gaderne og sang gamle vers. Karen nikkede og forklarede, at vægterne i gamle dage holdt øje med ildebrand og uro om natten, og at traditionen i Ribe er blevet holdt i live til glæde for byens gæster. «Hans vers er flere hundrede år gamle, og alligevel forstår alle dem», sagde hun. «Vores udstillingstekster blev skrevet sidste år, og ingen forstår dem; det siger vel noget.» Hun lagde rapporten på bordet og slog op på første side.',
        translation:
          'O Linu contou que, na noite anterior, tinha acompanhado o vigia noturno da cidade, um homem com lanterna e maça de espetos que andava pelas ruas cantando versos antigos. A Karen fez que sim e explicou que, antigamente, os vigias ficavam de olho em incêndios e desordens durante a noite, e que em Ribe a tradição foi mantida viva para alegria dos visitantes. «Os versos dele têm centenas de anos, e mesmo assim todo mundo entende», disse ela. «Nossos textos da exposição foram escritos no ano passado, e ninguém entende; isso diz alguma coisa.» Ela pôs o relatório na mesa e abriu na primeira página.',
        choices: [{ text: 'Kigge på den første tekst.', translation: 'Olhar o primeiro texto.', next: 'tekst' }],
      },
      tekst: {
        emoji: '📄',
        text: 'Karen læste højt fra udkastet til den første planche: «Den ældste bebyggelse i Ribe kan på grundlag af dendrokronologiske dateringer henføres til begyndelsen af 700-tallet, hvor der etableredes en markedsplads på nordsiden af Ribe Å.» Hun forklarede, at dendrokronologi er en metode, hvor man måler årringene i gammelt træ og sammenligner dem med kendte årringsserier, så man kan se, hvilket år træet blev fældet. «Fagligt set er sætningen helt korrekt», sagde hun, «men en tiårig giver op efter ordet “dendrokronologiske”.» Så spurgte hun Linu, om han kunne sige med sine egne ord, hvad sætningen egentlig betød.',
        translation:
          'A Karen leu em voz alta o rascunho do primeiro painel: «O assentamento mais antigo de Ribe pode, com base em datações dendrocronológicas, ser situado no início do século VIII, quando se estabeleceu um mercado na margem norte do rio Ribe.» Ela explicou que a dendrocronologia é um método em que se medem os anéis de crescimento de madeira antiga e se comparam com séries conhecidas, para saber em que ano a árvore foi cortada. «Do ponto de vista técnico, a frase está corretíssima», disse ela, «mas uma criança de dez anos desiste na palavra “dendrocronológicas”.» Então perguntou ao Linu se ele conseguia dizer com as próprias palavras o que a frase queria dizer de fato.',
        choices: [
          {
            text: '«At man ud fra årringene i træet ved, at der var en markedsplads ved åen allerede i begyndelsen af 700-tallet.»',
            translation: '«Que, pelos anéis da madeira, se sabe que já havia um mercado à beira do rio no começo do século VIII.»',
            next: 'klarsprog',
          },
          {
            text: '«At de ældste træer i Ribe blev plantet for syv hundrede år siden.»',
            translation: '«Que as árvores mais antigas de Ribe foram plantadas setecentos anos atrás.»',
            wrong: 'Não se trata de árvores plantadas: as «dendrokronologiske dateringer» são datações pelos anéis da madeira achada nas escavações, e «700-tallet» é o século VIII (os anos 700), não «setecentos anos atrás». A frase diz que já havia um mercado ali no começo do século VIII.',
          },
        ],
      },
      klarsprog: {
        emoji: '🧑‍🏫',
        text: '«Præcis», sagde Karen og skrev tre punkter på en tavle. Hun forklarede de vigtigste regler for klart sprog: skriv det vigtigste først, brug korte sætninger med aktive verber, og tal direkte til læseren. «I stedet for “der etableredes en markedsplads” skriver man hellere “handelsfolk mødtes her for at købe og sælge”», sagde hun. «Men klart sprog må aldrig blive forkert sprog; det skal være enkelt, ikke unøjagtigt.» Så bad hun Linu om at skrive sine egne forslag til planchen.',
        translation:
          '«Exatamente», disse a Karen, e escreveu três tópicos num quadro. Explicou as regras mais importantes da linguagem clara: escrever primeiro o mais importante, usar frases curtas com verbos na voz ativa e falar diretamente com o leitor. «Em vez de “estabeleceu-se um mercado”, é melhor escrever “comerciantes se encontravam aqui para comprar e vender”», disse ela. «Mas linguagem clara nunca pode virar linguagem errada; tem que ser simples, não imprecisa.» Então pediu ao Linu que escrevesse suas próprias propostas para o painel.',
        choices: [{ text: 'Skrive tre forslag på tavlen.', translation: 'Escrever três propostas no quadro.', next: 'forslag' }],
      },
      forslag: {
        emoji: '✏️',
        text: 'Linu skrev tre forslag på tavlen og bad Karen om at vælge. Det første lød: «For mere end 1300 år siden mødtes handelsfolk her ved åen for at købe og sælge. Det ved vi, fordi årringene i deres gamle træ kan fortælle, hvornår træet blev fældet.» Det andet lød kort og godt: «Vikingerne grundlagde Ribe i år 700.» Det tredje var den oprindelige sætning, bare med større skrift. Karen lagde hovedet på skrå og spurgte, hvilket af dem han selv ville vælge.',
        translation:
          'O Linu escreveu três propostas no quadro e pediu que a Karen escolhesse. A primeira dizia: «Há mais de 1300 anos, comerciantes se encontravam aqui à beira do rio para comprar e vender. Sabemos disso porque os anéis da madeira que eles usaram contam quando a árvore foi cortada.» A segunda dizia, curta e grossa: «Os vikings fundaram Ribe no ano 700.» A terceira era a frase original, só que com letra maior. A Karen inclinou a cabeça e perguntou qual delas ele mesmo escolheria.',
        choices: [
          { text: 'Vælge det første forslag.', translation: 'Escolher a primeira proposta.', next: 'final_bom' },
          { text: 'Vælge det tredje: fagfolk vil sætte pris på præcisionen.', translation: 'Escolher a terceira: os especialistas vão valorizar a precisão.', next: 'final_neutro' },
          {
            text: 'Vælge det andet: det er kortest og derfor klarest.',
            translation: 'Escolher a segunda: é a mais curta e, portanto, a mais clara.',
            wrong: 'Curto não é o mesmo que certo: não se conhece o ano exato (a madeira indica «o começo do século VIII»), e a Era Viking só começa no fim do século VIII. A Karen tinha avisado: linguagem clara não pode virar linguagem imprecisa.',
          },
        ],
      },
      final_bom: {
        emoji: '🔍',
        text: 'Karen læste det første forslag to gange og smilede så for første gang den dag. «Det er klart, det er korrekt, og det gør folk nysgerrige efter at vide mere om årringene», sagde hun. I løbet af ugen skrev de resten af planchene om sammen, og de lavede desuden en lille station, hvor børn selv kunne tælle årringe i en træskive. Ved åbningen stod en pige på otte år og forklarede sin far, hvordan man kan datere en by med et stykke træ, uden at bruge ordet «dendrokronologi» én eneste gang. Linu tænkte, at det var den bedste anmeldelse, en tekst kunne få.',
        translation:
          'A Karen leu a primeira proposta duas vezes e, pela primeira vez naquele dia, sorriu. «É clara, é correta e deixa as pessoas curiosas para saber mais sobre os anéis da madeira», disse ela. Ao longo da semana eles reescreveram juntos os outros painéis e, além disso, montaram uma pequena estação onde as crianças podiam contar os anéis de um disco de madeira. Na inauguração, uma menina de oito anos explicava ao pai como dá para datar uma cidade com um pedaço de madeira, sem usar nem uma vez a palavra «dendrocronologia». O Linu pensou que aquela era a melhor crítica que um texto podia receber.',
        ending: { tone: 'bom', title: 'Claro e correto', message: 'Você decifrou o texto acadêmico e escreveu uma versão simples sem sacrificar a verdade — o coração da linguagem clara.' },
      },
      final_neutro: {
        emoji: '🥱',
        text: 'Karen tøvede, men lod til sidst den oprindelige sætning stå, bare med større skrift. Ved åbningen nikkede et par arkæologer anerkendende, men de fleste familier gik hurtigt forbi planchen og videre hen til vikingesværdene. Direktøren sagde bagefter, at teksten var fagligt perfekt, men at næsten ingen havde læst den. Linu tænkte, at en tekst, som ingen læser, ikke er meget værd, uanset hvor korrekt den er.',
        translation:
          'A Karen hesitou, mas no fim deixou a frase original, só que com letra maior. Na inauguração, alguns arqueólogos aprovaram com a cabeça, mas a maioria das famílias passou depressa pelo painel e foi direto para as espadas vikings. Depois, o diretor disse que o texto era tecnicamente perfeito, mas que quase ninguém o tinha lido. O Linu pensou que um texto que ninguém lê não vale grande coisa, por mais correto que seja.',
        ending: { tone: 'neutro', title: 'Perfeito e ignorado', message: 'Você entendeu o texto acadêmico, mas manteve a versão que só os especialistas leem.' },
      },
    },
  },
  {
    id: 'da-h41',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Sort sol over marsken',
    emoji: '🐦',
    summary: 'Estagiário num jornal de Tønder, perto do Mar de Wadden, o Linu cobre a «sort sol», a dança de centenas de milhares de estorninhos — e aprende a traduzir ciência para o leitor sem transformar hipótese em certeza.',
    cultural_context:
      'O Mar de Wadden (Vadehavet), no sudoeste da Dinamarca, é uma área de marés onde o fundo do mar fica descoberto duas vezes por dia; é uma parada vital para milhões de aves migratórias, e a parte dinamarquesa entrou para o Patrimônio Mundial da UNESCO em 2014. Na primavera e no outono, centenas de milhares de estorninhos formam a «sort sol» (sol negro): nuvens de pássaros que dançam no céu ao pôr do sol antes de dormir nos juncais.',
    start: 'start',
    glossary: [
      ['sort sol', 'o «sol negro», as revoadas de estorninhos'],
      ['en stær', 'um estorninho'],
      ['tidevand / lavvande', 'maré / maré baixa'],
      ['et vade', 'um baixio de lama que a maré descobre'],
      ['en rovfugl', 'uma ave de rapina'],
      ['at formode', 'supor, presumir'],
      ['nyhedstrekanten', 'a pirâmide invertida da notícia'],
      ['en rubrik', 'um título de jornal'],
    ],
    nodes: {
      start: {
        emoji: '📰',
        text: 'En kølig eftermiddag i september sad Linu på redaktionen af en lille lokalavis i Tønder, hvor han var i praktik. Redaktøren, Jens, kastede en notesblok hen til ham og sagde, at der var meldinger om sort sol ude i marsken samme aften. «Du tager med fotografen derud, og i morgen tidlig vil jeg have en artikel på fire hundrede ord på mit bord», sagde han. «Og husk: det vigtigste først.» Linu nikkede, selvom han ikke helt vidste, hvad sort sol var.',
        translation:
          'Numa tarde fresca de setembro, o Linu estava na redação de um pequeno jornal local em Tønder, onde fazia estágio. O editor, Jens, jogou um bloco de notas para ele e disse que havia notícias de «sort sol» no pântano naquela mesma noite. «Você vai lá com a fotógrafa, e amanhã cedo eu quero uma matéria de quatrocentas palavras na minha mesa», disse ele. «E lembre-se: o mais importante primeiro.» O Linu fez que sim, embora não soubesse direito o que era «sort sol».',
        choices: [
          { text: 'Køre ud i marsken med det samme.', translation: 'Ir para o pântano imediatamente.', next: 'marsken' },
          { text: 'Læse lidt om Vadehavet på vejen derud.', translation: 'Ler um pouco sobre o Mar de Wadden no caminho.', next: 'vadehavet' },
        ],
      },
      vadehavet: {
        emoji: '🌊',
        text: 'I bilen læste Linu højt fra en rapport, han havde fundet på nettet, mens fotografen, Sanne, kørte. «Vadehavet er et tidevandsområde, hvor havbunden to gange i døgnet blotlægges ved lavvande, og vaderne rummer en usædvanlig høj tæthed af bunddyr», læste han. Sanne oversatte tørt: «Vandet går ud to gange om dagen, og så ligger mudderet der, fuldt af orme og muslinger, som fuglene æder.» Hun fortalte, at millioner af trækfugle derfor raster her hvert forår og efterår, og at området kom på UNESCO’s verdensarvsliste i 2014. Linu tænkte, at Sanne ville være en god journalist, hvis hun ikke allerede var fotograf.',
        translation:
          'No carro, o Linu leu em voz alta um relatório que tinha achado na internet, enquanto a fotógrafa, Sanne, dirigia. «O Mar de Wadden é uma área de marés onde o fundo do mar é exposto duas vezes a cada vinte e quatro horas na maré baixa, e os baixios abrigam uma densidade excepcionalmente alta de animais do fundo», leu ele. A Sanne traduziu, seca: «A água recua duas vezes por dia, e aí fica a lama, cheia de minhocas e mariscos que os pássaros comem.» Ela contou que, por isso, milhões de aves migratórias param ali toda primavera e todo outono, e que a área entrou na lista do Patrimônio Mundial da UNESCO em 2014. O Linu pensou que a Sanne seria uma boa jornalista, se já não fosse fotógrafa.',
        choices: [{ text: 'Stige ud ved diget i marsken.', translation: 'Descer do carro junto ao dique, no pântano.', next: 'marsken' }],
      },
      marsken: {
        emoji: '🔭',
        text: 'Ude i Tøndermarsken mødte de ornitologen Birgit, som stod med kikkert på et dige, mens solen sank ned over de flade marker. Hun forklarede, at stærene om dagen æder insektlarver på markerne, og at de ved solnedgang samles for at overnatte i tagrørsskovene. «Deres koordinerede flyvemønstre formodes at mindske risikoen for angreb fra rovfugle», sagde hun, som om hun læste op fra en afhandling. Linu skrev sætningen ned ord for ord og spurgte, hvad den betød for en almindelig læser. Birgit bad ham selv prøve at sige det.',
        translation:
          'No pântano de Tønder, encontraram a ornitóloga Birgit, que estava com um binóculo em cima de um dique enquanto o sol descia sobre os campos planos. Ela explicou que durante o dia os estorninhos comem larvas de insetos nos campos e que, ao pôr do sol, se juntam para passar a noite nos juncais. «Presume-se que seus padrões de voo coordenados reduzam o risco de ataque de aves de rapina», disse ela, como se lesse uma tese. O Linu anotou a frase palavra por palavra e perguntou o que ela queria dizer para um leitor comum. A Birgit pediu que ele mesmo tentasse dizer.',
        choices: [
          { text: '«Forskerne tror, at stærene flyver sammen for at gøre det svært for rovfuglene at fange dem.»', translation: '«Os cientistas acham que os estorninhos voam juntos para dificultar que as aves de rapina os peguem.»', next: 'sortsol' },
          {
            text: '«Det er altså bevist, at dansen beskytter stærene mod rovfugle.»',
            translation: '«Então está provado que a dança protege os estorninhos das aves de rapina.»',
            wrong: '«Formodes» (presume-se, supõe-se) indica uma hipótese, não uma certeza. Num texto científico, a diferença entre «formodes» e «er bevist» é enorme — e o jornalista tem que manter essa cautela.',
          },
        ],
      },
      sortsol: {
        emoji: '🌑',
        text: '«Rigtigt, og skriv endelig “tror”, ikke “ved”», sagde Birgit. I det samme kom de første flokke, først et par hundrede fugle, så tusinder, og til sidst så mange, at de formørkede himlen over marsken. Flokken bølgede og drejede som ét levende væsen, og suset fra hundredtusinder af vinger lød som en fjern storm. Da en rovfugl dukkede op, trak flokken sig sammen til en tæt, sort kugle, og Sanne tog billede efter billede. Så dykkede alle stærene på én gang ned i tagrørene, og der blev helt stille.',
        translation:
          '«Isso, e escreva “acham”, de jeito nenhum “sabem”», disse a Birgit. Nesse momento chegaram os primeiros bandos, primeiro umas centenas de pássaros, depois milhares, e no fim tantos que escureceram o céu do pântano. O bando ondulava e girava como um único ser vivo, e o rumor de centenas de milhares de asas soava como uma tempestade distante. Quando apareceu uma ave de rapina, o bando se contraiu numa bola negra e compacta, e a Sanne tirou foto atrás de foto. Então todos os estorninhos mergulharam de uma vez nos juncos, e tudo ficou em silêncio.',
        choices: [{ text: 'Køre tilbage og skrive artiklen.', translation: 'Voltar e escrever a matéria.', next: 'skrive' }],
      },
      skrive: {
        emoji: '⌨️',
        text: 'Tilbage på redaktionen sad Linu til langt ud på natten og skrev. Han havde to forslag til indledningen: det første begyndte «Klokken halv syv kørte vi ud i marsken, hvor ornitologen Birgit ventede på os ved diget», og det andet begyndte «Flere hundrede tusinde stære formørkede i aftes himlen over Tøndermarsken i årets første store sort sol». Han huskede, hvad Jens havde sagt om nyhedstrekanten: det vigtigste først, detaljerne til sidst. Nu skulle han vælge.',
        translation:
          'De volta à redação, o Linu ficou escrevendo até tarde da noite. Ele tinha duas propostas de abertura: a primeira começava com «Às seis e meia fomos para o pântano, onde a ornitóloga Birgit nos esperava junto ao dique», e a segunda começava com «Centenas de milhares de estorninhos escureceram ontem à noite o céu sobre o pântano de Tønder, no primeiro grande sol negro do ano». Ele lembrou o que o Jens tinha dito sobre a pirâmide invertida: o mais importante primeiro, os detalhes no fim. Agora tinha que escolher.',
        choices: [
          { text: 'Vælge indledningen med stærene og den sorte sol.', translation: 'Escolher a abertura com os estorninhos e o sol negro.', next: 'rubrik' },
          { text: 'Vælge indledningen, der fortæller turen i rækkefølge.', translation: 'Escolher a abertura que conta o passeio em ordem.', next: 'final_neutro' },
        ],
      },
      rubrik: {
        emoji: '🗞️',
        text: 'Jens læste indledningen og nikkede tilfreds. «Nu mangler vi bare en rubrik, der får folk til at læse videre», sagde han. Linu foreslog to: «Stære angriber Tønder – himlen blev sort» og «Sort sol over marsken: hundredtusinder af stære danser igen». Jens mindede ham om, at en god rubrik skal fange læseren, men at den aldrig må love mere, end artiklen kan holde.',
        translation:
          'O Jens leu a abertura e aprovou com a cabeça, satisfeito. «Agora só falta um título que faça o pessoal continuar lendo», disse ele. O Linu propôs dois: «Estorninhos atacam Tønder – o céu ficou negro» e «Sol negro sobre o pântano: centenas de milhares de estorninhos dançam de novo». O Jens lembrou que um bom título precisa fisgar o leitor, mas nunca pode prometer mais do que a matéria entrega.',
        choices: [
          { text: 'Vælge «Sort sol over marsken: hundredtusinder af stære danser igen».', translation: 'Escolher «Sol negro sobre o pântano: centenas de milhares de estorninhos dançam de novo».', next: 'final_bom' },
          {
            text: 'Vælge «Stære angriber Tønder – himlen blev sort».',
            translation: 'Escolher «Estorninhos atacam Tønder – o céu ficou negro».',
            wrong: 'Os estorninhos não atacaram ninguém: a dança, pelo que os cientistas supõem, serve para se defender das aves de rapina. Um título que promete um «ataque» é sensacionalista e promete mais do que a matéria entrega — exatamente o que o Jens pediu para evitar.',
          },
        ],
      },
      final_bom: {
        emoji: '🏆',
        text: 'Næste morgen lå avisen på morgenbordene i Tønder med Sannes billede af den sorte kugle over marsken på forsiden. Linu havde skrevet både rubrikken og indledningen, og Jens havde kun rettet ét ord. Birgit ringede til redaktionen og sagde, at det var første gang, en avis havde skrevet “forskerne tror” i stedet for “forskerne har bevist”. «Det er den største ros, en ornitolog kan give», sagde Jens og skænkede en kop kaffe til Linu. Linu gemte avisen i sin rygsæk som et minde om sin første forside.',
        translation:
          'Na manhã seguinte o jornal estava nas mesas de café de Tønder, com a foto da Sanne da bola negra sobre o pântano na primeira página. O Linu tinha escrito o título e a abertura, e o Jens só tinha corrigido uma palavra. A Birgit ligou para a redação e disse que era a primeira vez que um jornal escrevia “os cientistas acham” em vez de “os cientistas provaram”. «É o maior elogio que um ornitólogo pode fazer», disse o Jens, servindo um café ao Linu. O Linu guardou o jornal na mochila como lembrança da sua primeira capa.',
        ending: { tone: 'bom', title: 'Primeira capa', message: 'Você traduziu o «formodes» sem transformar hipótese em fato, abriu com o mais importante e escolheu um título honesto.' },
      },
      final_neutro: {
        emoji: '✂️',
        text: 'Jens læste den første linje og sukkede dybt. «Ingen læser videre efter “klokken halv syv kørte vi”», sagde han. «Læserne vil vide, hvad der skete, ikke hvordan du kom derud.» Han skrev selv indledningen om, og artiklen kom i avisen med Sannes flotte billede, men med Jens som medforfatter. Linu lærte, at i en nyhed er det ikke turen, men begivenheden, der kommer først.',
        translation:
          'O Jens leu a primeira linha e suspirou fundo. «Ninguém continua lendo depois de “às seis e meia fomos”», disse ele. «Os leitores querem saber o que aconteceu, não como você chegou lá.» Ele mesmo reescreveu a abertura, e a matéria saiu no jornal com a foto linda da Sanne, mas com o Jens como coautor. O Linu aprendeu que, numa notícia, o que vem primeiro não é o passeio, e sim o acontecimento.',
        ending: { tone: 'neutro', title: 'Notícia de trás para frente', message: 'Você entendeu a ciência, mas começou pelo caminho e não pelo fato — a pirâmide da notícia é de cabeça para baixo.' },
      },
    },
  },
  {
    id: 'da-h42',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Danmarks dåbsattest',
    emoji: '🪨',
    summary: 'Em Jelling, diante das pedras rúnicas dos reis Gorm e Harald, o Linu acompanha uma excursão de estudantes de história e aprende a ler duas línguas difíceis: a das runas e a dos artigos acadêmicos.',
    cultural_context:
      'Em Jelling, no centro da Jutlândia, há dois grandes túmulos, uma igreja e duas pedras rúnicas do século X, Patrimônio Mundial da UNESCO desde 1994. A pedra pequena, erguida pelo rei Gorm para a rainha Thyra, traz a menção mais antiga ao nome «Danmark» no próprio país; a grande, de Harald Dente-Azul, diz que ele «fez os dinamarqueses cristãos» e é chamada de «certidão de batismo da Dinamarca» — sua imagem de Cristo aparece até no passaporte dinamarquês.',
    start: 'start',
    glossary: [
      ['en runesten', 'uma pedra rúnica'],
      ['en gravhøj', 'um túmulo em forma de colina'],
      ['kumler (gammelt ord)', 'monumentos (palavra antiga)'],
      ['en dåbsattest', 'uma certidão de batismo'],
      ['snarere … end', 'mais … do que; antes … do que'],
      ['formentlig', 'provavelmente'],
      ['kildekritik', 'crítica das fontes'],
      ['en tolkning', 'uma interpretação'],
    ],
    nodes: {
      start: {
        emoji: '🚌',
        text: 'En diset morgen i oktober steg Linu ud af en bus i Jelling sammen med tyve historiestuderende fra Aarhus. Midt i den lille by lå to store gravhøje, og mellem dem stod en hvidkalket kirke og to runesten i hver sin glasmontre. Lektor Anders stillede sig foran gruppen med en kopi af en videnskabelig artikel i hånden. «I dag skal I lære at læse to slags tekster», sagde han, «den, der er hugget i sten, og den, som forskerne har skrevet om den.»',
        translation:
          'Numa manhã de neblina em outubro, o Linu desceu de um ônibus em Jelling com vinte estudantes de história de Aarhus. No meio da cidadezinha havia dois grandes túmulos em forma de colina, e entre eles uma igreja caiada de branco e duas pedras rúnicas, cada uma numa vitrine de vidro. O professor Anders se pôs diante do grupo com a cópia de um artigo científico na mão. «Hoje vocês vão aprender a ler dois tipos de texto», disse ele, «o que foi talhado na pedra e o que os pesquisadores escreveram sobre ele.»',
        choices: [
          { text: 'Gå direkte hen til runestenene.', translation: 'Ir direto até as pedras rúnicas.', next: 'stenene' },
          { text: 'Følge en studerende, Maja, op på den nordlige gravhøj først.', translation: 'Seguir uma estudante, a Maja, até o túmulo do norte primeiro.', next: 'hoejen' },
        ],
      },
      hoejen: {
        emoji: '⛰️',
        text: 'Maja, en studerende med røde kinder og en tyk notesbog, tog Linu med op på toppen af Nordhøjen, hvorfra man kunne se hele monumentområdet. Hun fortalte, at man i højen havde fundet et gravkammer, som allerede var tomt, da det blev åbnet i 1820, og at tømmeret i kammeret ved hjælp af årringene er dateret til omkring 958. «Mange forskere mener, at Gorm først blev begravet herinde, og at hans søn Harald senere flyttede ham ind i kirken, da han selv var blevet kristen», sagde hun. «Men det er en tolkning, ikke en kendsgerning, og det er præcis den slags forskel, lektoren elsker at spørge til.» De gik ned igen, netop som Anders begyndte at læse op ved stenene.',
        translation:
          'A Maja, uma estudante de bochechas vermelhas e caderno grosso, levou o Linu ao alto do túmulo do norte, de onde se via toda a área dos monumentos. Contou que ali dentro tinham achado uma câmara funerária, que já estava vazia quando foi aberta em 1820, e que a madeira da câmara foi datada pelos anéis de crescimento em cerca de 958. «Muitos pesquisadores acham que Gorm foi enterrado primeiro aqui dentro e que o filho, Harald, o transferiu depois para a igreja, quando ele mesmo se tornou cristão», disse ela. «Mas isso é uma interpretação, não um fato, e é exatamente esse tipo de diferença que o professor adora perguntar.» Desceram bem na hora em que o Anders começava a ler junto às pedras.',
        choices: [{ text: 'Skynde sig hen til runestenene.', translation: 'Correr até as pedras rúnicas.', next: 'stenene' }],
      },
      stenene: {
        emoji: '✝️',
        text: 'Anders pegede på den store, trekantede sten og læste indskriften op i moderne dansk oversættelse: «Harald konge bød gøre disse kumler efter Gorm, sin fader, og efter Thyra, sin moder, den Harald, som vandt sig hele Danmark og Norge og gjorde danerne kristne.» Han forklarede, at «kumler» betyder mindesmærker, og at den lille sten ved siden af blev rejst af Gorm for Thyra, og at man på den finder landets ældste kendte omtale af navnet Danmark. På én side af den store sten kunne Linu se et stort dyr, der kæmpede med en slange, og på en anden side en figur med udstrakte arme. «Det er Skandinaviens ældste Kristusfremstilling, og den er i øvrigt trykt inde i alle danske pas», sagde Anders. Så tog han artiklen frem.',
        translation:
          'O Anders apontou para a pedra grande, triangular, e leu a inscrição numa tradução para o dinamarquês moderno: «O rei Harald mandou fazer estes monumentos em memória de Gorm, seu pai, e de Thyra, sua mãe; aquele Harald que conquistou para si toda a Dinamarca e a Noruega e fez os dinamarqueses cristãos.» Explicou que «kumler» quer dizer monumentos, que a pedra pequena ao lado foi erguida por Gorm para Thyra, e que nela está a menção mais antiga que se conhece do nome Danmark no país. Num dos lados da pedra grande, o Linu viu um animal enorme lutando com uma serpente e, em outro, uma figura de braços abertos. «É a representação de Cristo mais antiga da Escandinávia, e, aliás, está impressa dentro de todo passaporte dinamarquês», disse o Anders. Então pegou o artigo.',
        choices: [{ text: 'Lytte til artiklen.', translation: 'Ouvir o artigo.', next: 'manifest' }],
      },
      manifest: {
        emoji: '📑',
        text: 'Anders læste op: «Den store runesten, der normalt dateres til omkring 965, bør snarere forstås som et politisk manifest end som et mindesmærke i snæver forstand; indskriften legitimerer Haralds magt ved at knytte den til både slægten og den nye tro.» Han kiggede op og spurgte, hvem der kunne forklare med almindelige ord, hvad forfatteren egentlig påstod. De studerende kiggede ned i deres notesbøger, og Maja puffede diskret til Linu. Linu tænkte sig om og tog ordet.',
        translation:
          'O Anders leu em voz alta: «A pedra rúnica grande, normalmente datada de cerca de 965, deve antes ser entendida como um manifesto político do que como um monumento em sentido estrito; a inscrição legitima o poder de Harald ao ligá-lo tanto à linhagem quanto à nova fé.» Ele levantou os olhos e perguntou quem conseguia explicar, com palavras comuns, o que o autor afirmava de fato. Os estudantes olharam para os cadernos, e a Maja cutucou o Linu discretamente. O Linu pensou um pouco e pediu a palavra.',
        choices: [
          { text: '«At stenen især er Haralds reklame for sin egen magt, og ikke kun et minde om forældrene.»', translation: '«Que a pedra é sobretudo uma propaganda de Harald do próprio poder, e não só uma homenagem aos pais.»', next: 'daabsattest' },
          {
            text: '«At stenen kun er et mindesmærke for Gorm og Thyra og ikke har noget med politik at gøre.»',
            translation: '«Que a pedra é só um monumento a Gorm e Thyra e não tem nada a ver com política.»',
            wrong: '«Bør snarere forstås som X end som Y» quer dizer «deve antes ser entendida como X do que como Y». O autor diz o contrário: a pedra é sobretudo um manifesto político, que legitima o poder de Harald, e não apenas uma homenagem aos pais.',
          },
        ],
      },
      daabsattest: {
        emoji: '📜',
        text: '«Godt formuleret», sagde Anders. «Derfor kalder man også stenen for Danmarks dåbsattest.» En af de studerende spurgte for sjov, om man så havde fundet Haralds dåbsattest i gravhøjen, og hele gruppen grinede. Anders vendte sig mod Linu og bad ham forklare, hvad billedet egentlig betyder.',
        translation:
          '«Bem formulado», disse o Anders. «É por isso que a pedra também é chamada de certidão de batismo da Dinamarca.» Um dos estudantes perguntou, de brincadeira, se então tinham achado a certidão de batismo de Harald no túmulo, e o grupo inteiro riu. O Anders se virou para o Linu e pediu que ele explicasse o que a imagem quer dizer de fato.',
        choices: [
          { text: '«Stenen er det ældste vidnesbyrd om, at kongemagten gjorde Danmark kristent – landets “dåb”.»', translation: '«A pedra é o testemunho mais antigo de que o poder real tornou a Dinamarca cristã — o “batismo” do país.»', next: 'opgave' },
          {
            text: '«At man har fundet en rigtig dåbsattest i gravhøjen.»',
            translation: '«Que acharam uma certidão de batismo de verdade no túmulo.»',
            wrong: '«Dåbsattest» aqui é uma metáfora: assim como a certidão comprova que uma criança foi batizada, a pedra, com o «gjorde danerne kristne», é o documento mais antigo da conversão oficial do país. Nenhum papel foi achado no túmulo — a pergunta do colega era piada.',
          },
        ],
      },
      opgave: {
        emoji: '📝',
        text: '«Netop, det er et billede», sagde Anders. «Men husk, at et land ikke bliver kristent på én dag, bare fordi en konge hugger det i sten.» Han bad de studerende skrive et kort afsnit om, hvor meget man kan stole på indskriften, og Maja satte sig på en bænk med Linu og viste ham sit udkast. Der stod: «Indskriften lyver, for danerne blev ikke kristne på Haralds tid.» Linu kunne se, at hun havde en pointe, men at sætningen lød mere som en avisoverskrift end som akademisk dansk.',
        translation:
          '«Exatamente, é uma imagem», disse o Anders. «Mas lembrem que um país não vira cristão num dia só porque um rei talhou isso na pedra.» Ele pediu que os estudantes escrevessem um parágrafo curto sobre até que ponto se pode confiar na inscrição, e a Maja sentou-se num banco com o Linu e mostrou o rascunho. Estava escrito: «A inscrição mente, porque os dinamarqueses não se tornaram cristãos no tempo de Harald.» O Linu viu que ela tinha um bom argumento, mas que a frase soava mais como manchete de jornal do que como dinamarquês acadêmico.',
        choices: [
          { text: 'Foreslå en mere nuanceret formulering.', translation: 'Sugerir uma formulação mais matizada.', next: 'final_bom' },
          { text: 'Sige, at sætningen er fin, fordi den er klar.', translation: 'Dizer que a frase está boa, porque é clara.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🎓',
        text: 'Linu foreslog, at hun kunne skrive: «Indskriften bør formentlig læses som et udtryk for Haralds politiske ambitioner snarere end som en beskrivelse af, hvad befolkningen faktisk troede på.» Maja læste sætningen højt to gange og sagde, at den sagde det samme som hendes, bare uden at råbe. Hun tilføjede selv, at gravfund tyder på, at kristendommen bredte sig gradvist over flere generationer. Da Anders fik afsnittene, skrev han i margenen på Majas: «Præcist, forsigtigt og overbevisende.» På vej tilbage til bussen kiggede Linu en sidste gang på stenen og tænkte, at selv tusind år gammel reklame fortjener ordentlig kildekritik.',
        translation:
          'O Linu sugeriu que ela escrevesse: «A inscrição deve provavelmente ser lida como expressão das ambições políticas de Harald, e não tanto como descrição daquilo em que a população de fato acreditava.» A Maja leu a frase em voz alta duas vezes e disse que ela dizia o mesmo que a dela, só que sem gritar. Ela mesma acrescentou que achados de sepulturas indicam que o cristianismo se espalhou aos poucos, ao longo de várias gerações. Quando o Anders recebeu os parágrafos, escreveu na margem do da Maja: «Preciso, cauteloso e convincente.» Voltando para o ônibus, o Linu olhou a pedra uma última vez e pensou que até propaganda de mil anos merece uma boa crítica das fontes.',
        ending: { tone: 'bom', title: 'Crítica das fontes', message: 'Você entendeu o «snarere … end», a metáfora da certidão de batismo e ajudou a Maja a trocar o grito pela cautela acadêmica.' },
      },
      final_neutro: {
        emoji: '🖍️',
        text: 'Maja afleverede afsnittet, som det var, og fik det tilbage med en rød streg under ordet «lyver». Anders havde skrevet i margenen, at pointen var god, men at man i en akademisk tekst ikke kan vide, hvad Harald mente, kun hvad kilderne tyder på. «Skriv hellere “formentlig” og “snarere” end “lyver”», stod der. Maja sukkede og sagde, at hun havde haft ret, bare på den forkerte måde. Linu tænkte, at akademisk dansk ikke handler om at have ret, men om at vise, hvor sikker man kan være.',
        translation:
          'A Maja entregou o parágrafo do jeito que estava e o recebeu de volta com um risco vermelho debaixo da palavra «mente». O Anders tinha escrito na margem que o argumento era bom, mas que num texto acadêmico não dá para saber o que Harald pretendia, só o que as fontes indicam. «Escreva de preferência “provavelmente” e “antes … do que”, e não “mente”», dizia a nota. A Maja suspirou e disse que tinha razão, só que do jeito errado. O Linu pensou que o dinamarquês acadêmico não é sobre ter razão, e sim sobre mostrar o quanto se pode ter certeza.',
        ending: { tone: 'neutro', title: 'Razão do jeito errado', message: 'Você entendeu o artigo e as runas, mas deixou passar uma frase categórica demais para um texto acadêmico.' },
      },
    },
  },
  // ───────────────────────── C2 ─────────────────────────
  {
    id: 'da-h43',
    level: 'C2',
    cefr: 'C2',
    title: 'Men han har jo ikke noget på',
    emoji: '👑',
    summary: 'Num sebo de Odense, cidade natal de Hans Christian Andersen, um velho livreiro mostra ao Linu edições do século XIX — e o Linu precisa ler Andersen na ortografia antiga, com «aa» e substantivos em maiúscula.',
    cultural_context:
      'Hans Christian Andersen nasceu em Odense em 1805, filho de um sapateiro pobre e de uma lavadeira, e partiu sozinho para Copenhague aos catorze anos, em 1819, sonhando com o teatro. Seus contos, como «A roupa nova do imperador» (1837), foram impressos na ortografia da época, com todos os substantivos em maiúscula e «aa» no lugar de «å» — regras que só mudaram com a reforma ortográfica de 1948.',
    start: 'start',
    glossary: [
      ['et antikvariat', 'um sebo, uma livraria de livros antigos'],
      ['retskrivning', 'ortografia'],
      ['aa (gammel stavemåde)', 'å'],
      ['at have noget på', 'estar vestindo alguma coisa'],
      ['man skal ikke skue hunden på hårene', 'não se deve julgar pela aparência (lit.: não se deve olhar o cão pelo pelo)'],
      ['børn og fulde folk taler sandt', 'crianças e bêbados dizem a verdade'],
      ['et embede', 'um cargo público'],
      ['De', 'o senhor, a senhora (tratamento formal, hoje raro)'],
    ],
    nodes: {
      start: {
        emoji: '📚',
        text: 'Regnen silede ned over de brolagte gader i Odense, og Linu søgte ly i et lille antikvariat, hvor klokken over døren klingede, da han trådte ind. Butikken lugtede af støv, læder og gammelt papir, og bøgerne stod i stabler så høje, at de truede med at vælte. Bag disken sad en gammel mand med brillerne på næsetippen, og han præsenterede sig som Viggo, antikvarboghandler gennem halvtreds år. «De er kommet til den rette by, hvis De holder af eventyr», sagde han og smilede, for han hørte til den gamle skole, der stadig siger De til fremmede. Så rejste han sig langsomt og hentede en lille, slidt bog i et glasskab bag sig.',
        translation:
          'A chuva caía forte sobre as ruas de pedra de Odense, e o Linu se abrigou num pequeno sebo, onde o sininho em cima da porta tilintou quando ele entrou. A loja cheirava a poeira, couro e papel velho, e os livros estavam em pilhas tão altas que ameaçavam desabar. Atrás do balcão estava um senhor idoso de óculos na ponta do nariz, que se apresentou como Viggo, livreiro de livros antigos havia cinquenta anos. «O senhor veio à cidade certa, se gosta de contos de fadas», disse ele sorrindo, pois era da velha escola, que ainda trata os desconhecidos por «De». Então se levantou devagar e foi buscar um livrinho gasto num armário de vidro atrás de si.',
        choices: [
          { text: 'Spørge, hvad det er for en bog.', translation: 'Perguntar que livro é aquele.', next: 'bog' },
          { text: 'Fortælle, at han netop har set Andersens barndomshjem.', translation: 'Contar que acabou de ver a casa de infância de Andersen.', next: 'barndom' },
        ],
      },
      barndom: {
        emoji: '🏠',
        text: 'Linu fortalte, at han om formiddagen havde besøgt det lille hus i Munkemøllestræde, hvor Hans Christian Andersen voksede op. Viggo nikkede og fortalte, at drengen var søn af en fattig skomager og en vaskekone, og at han i 1819, kun fjorten år gammel, rejste alene til København for at komme til teatret. «Han havde næsten ingen penge, ingen forbindelser og et udseende, som folk gjorde nar af», sagde Viggo. «Men man skal ikke skue hunden på hårene, som man siger.» Han blinkede til Linu og tilføjede, at netop den erfaring siden blev til et af de mest kendte eventyr i verden.',
        translation:
          'O Linu contou que, de manhã, tinha visitado a casinha em Munkemøllestræde onde Hans Christian Andersen cresceu. O Viggo fez que sim e contou que o menino era filho de um sapateiro pobre e de uma lavadeira, e que em 1819, com apenas catorze anos, partiu sozinho para Copenhague para tentar o teatro. «Ele quase não tinha dinheiro, nem contatos, e tinha uma aparência de que as pessoas zombavam», disse o Viggo. «Mas não se deve julgar o cão pelo pelo, como se diz.» Ele piscou para o Linu e acrescentou que justamente essa experiência virou depois um dos contos mais conhecidos do mundo.',
        choices: [
          { text: '«Man skal altså ikke dømme nogen efter udseendet – ligesom i Den grimme ælling.»', translation: '«Então não se deve julgar ninguém pela aparência — como no Patinho feio.»', next: 'bog' },
          {
            text: '«Man skal altså ikke klappe fremmede hunde.»',
            translation: '«Então não se deve fazer carinho em cachorro desconhecido.»',
            wrong: '«Man skal ikke skue hunden på hårene» (não se deve julgar o cão pelo pelo) é um provérbio: não julgue ninguém pela aparência — como no «Patinho feio», o conto em que o Viggo estava pensando. Não tem nada a ver com cachorros de verdade.',
          },
        ],
      },
      bog: {
        emoji: '📖',
        text: 'Viggo lagde bogen forsigtigt på disken; det var en samling af Andersens eventyr, trykt i 1800-tallet. «Læg mærke til retskrivningen», sagde han og pegede med en tør, tynd finger. Alle navneord var skrevet med stort begyndelsesbogstav, og i stedet for «å» stod der «aa», for det var først med retskrivningsreformen i 1948, at danskerne fik bogstavet med den lille ring og holdt op med at skrive navneordene med stort. Han slog op på «Kejserens nye klæder» og bad Linu læse den berømte sætning nederst på siden: «“Men han har jo ikke noget paa!” sagde et lille Barn.» Så spurgte han, hvad barnet egentlig mente.',
        translation:
          'O Viggo pôs o livro com cuidado no balcão; era uma coletânea de contos de Andersen, impressa no século XIX. «Repare na ortografia», disse ele, apontando com um dedo fino e seco. Todos os substantivos estavam com inicial maiúscula, e no lugar de «å» estava «aa», porque só com a reforma ortográfica de 1948 os dinamarqueses ganharam a letra com a bolinha e pararam de escrever os substantivos com maiúscula. Ele abriu em «A roupa nova do imperador» e pediu ao Linu que lesse a frase famosa no pé da página: «“Mas ele não está vestindo nada!”, disse uma criancinha.» Então perguntou o que a criança queria dizer, afinal.',
        choices: [
          { text: '«At kejseren er helt nøgen; han har ikke noget tøj på.»', translation: '«Que o imperador está completamente nu; não está vestindo roupa nenhuma.»', next: 'barnet' },
          {
            text: '«At kejseren ikke har noget at lave i dag.»',
            translation: '«Que o imperador não tem nada para fazer hoje.»',
            wrong: '«At have noget på» é «estar vestindo alguma coisa». «Han har jo ikke noget paa» (em grafia moderna, «på») quer dizer que o imperador não está vestindo nada — está nu. O «paa» com dois «a» é só a grafia de antes de 1948.',
          },
        ],
      },
      barnet: {
        emoji: '🧒',
        text: '«Netop», sagde Viggo. «Alle de voksne kunne se, at kejseren var nøgen, men ingen turde sige det, af frygt for at blive anset for dumme eller uduelige til deres embede.» Han fortalte, at Andersen efter sigende først havde ladet eventyret slutte anderledes, og at det lille barn kom til i sidste øjeblik, kort før bogen gik i trykken. «Børn og fulde folk taler sandt, siger man, og Andersen vidste, at det kræver et barns uskyld at sige det, som alle andre tier om», sagde Viggo. Linu tænkte på, hvor mange nøgne kejsere han selv havde set gå forbi uden at sige et ord, og Viggo rejste sig for at hente endnu en bog.',
        translation:
          '«Exato», disse o Viggo. «Todos os adultos viam que o imperador estava nu, mas ninguém tinha coragem de dizer, com medo de ser considerado burro ou incapaz para o cargo.» Contou que Andersen, segundo se diz, a princípio tinha feito o conto terminar de outro jeito, e que a criancinha só entrou no último momento, pouco antes de o livro ir para a gráfica. «Crianças e bêbados dizem a verdade, como se diz, e Andersen sabia que é preciso a inocência de uma criança para dizer o que todos os outros calam», disse o Viggo. O Linu pensou em quantos imperadores nus ele mesmo já tinha visto passar sem dizer uma palavra, e o Viggo se levantou para buscar mais um livro.',
        choices: [{ text: 'Vente på den næste bog.', translation: 'Esperar o próximo livro.', next: 'eventyr' }],
      },
      eventyr: {
        emoji: '✨',
        text: 'Den anden bog var tykkere og havde et falmet guldtryk på ryggen: «Mit Livs Eventyr», Andersens selvbiografi. Viggo slog op på første side og læste den første sætning op med en stemme, der var blevet ganske blød: «Mit Liv er et smukt Eventyr, saa rigt og lykkeligt!» Han forklarede, at Andersen skrev det, da han allerede var berømt i hele Europa, og at mange har bemærket, at hans barndom i virkeligheden var alt andet end let. «Han valgte at fortælle sit liv som et eventyr, og måske er det netop derfor, vi stadig læser ham», sagde Viggo. Så spurgte han Linu, hvad han gerne ville med bogen, nu da han havde holdt den i hænderne.',
        translation:
          'O segundo livro era mais grosso e tinha letras douradas desbotadas na lombada: «O conto de fadas da minha vida», a autobiografia de Andersen. O Viggo abriu na primeira página e leu a primeira frase com uma voz que tinha ficado bem suave: «Minha vida é um belo conto de fadas, tão rico e feliz!» Explicou que Andersen escreveu isso quando já era famoso em toda a Europa, e que muita gente observou que a infância dele, na verdade, foi tudo menos fácil. «Ele escolheu contar a própria vida como um conto de fadas, e talvez seja justamente por isso que ainda o lemos», disse o Viggo. Então perguntou ao Linu o que ele queria fazer com o livro, agora que o tinha segurado nas mãos.',
        choices: [
          { text: 'Spørge, om han må komme igen og læse videre i den.', translation: 'Perguntar se pode voltar para continuar lendo.', next: 'final_bom' },
          { text: 'Tilbyde at rette den gamle stavemåde med blyant, så den bliver lettere at læse.', translation: 'Oferecer-se para corrigir a grafia antiga a lápis, para ficar mais fácil de ler.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🎁',
        text: 'Viggo så længe på ham over brillerne og sagde så, at han ikke havde haft så ivrig en læser i butikken i mange år. Resten af ugen kom Linu hver eftermiddag, satte sig i en slidt lænestol mellem stablerne og læste Andersen i den gamle retskrivning, mens regnen trommede på ruden. Efterhånden holdt han op med at snuble over «aa» og de store bogstaver, og han begyndte at høre en stemme bag ordene. Den sidste dag rakte Viggo ham «Mit Livs Eventyr» og sagde, at den var hans, «for en bog hører hjemme hos den, der læser den». Linu gik ud i den våde by med bogen under vingen og tænkte, at hans eget liv også var begyndt at ligne et eventyr.',
        translation:
          'O Viggo olhou longamente para ele por cima dos óculos e disse que fazia muitos anos que não tinha um leitor tão entusiasmado na loja. No resto da semana o Linu voltou toda tarde, sentou-se numa poltrona gasta entre as pilhas e leu Andersen na ortografia antiga, enquanto a chuva batucava na vidraça. Aos poucos parou de tropeçar no «aa» e nas maiúsculas e começou a ouvir uma voz por trás das palavras. No último dia, o Viggo lhe entregou «O conto de fadas da minha vida» e disse que era dele, «porque um livro pertence a quem o lê». O Linu saiu pela cidade molhada com o livro debaixo da asa, pensando que a vida dele também estava começando a parecer um conto de fadas.',
        ending: { tone: 'bom', title: 'Leitor de Andersen', message: 'Você leu Andersen na grafia antiga, entendeu o «ikke noget paa» e os provérbios — e ganhou um livro de quem sabe o valor deles.' },
      },
      final_neutro: {
        emoji: '✏️',
        text: 'Viggo blev så bleg, at Linu et øjeblik troede, at han ville besvime. «Man retter ikke i en bog fra 1800-tallet», sagde han med skælvende stemme, «lige så lidt som man maler en ny næse på et gammelt maleri.» Han forklarede, at den gamle retskrivning er en del af bogens historie, og at man kan læse Andersen i en moderne udgave, hvis man foretrækker det. Så stillede han bogen tilbage i glasskabet og låste omhyggeligt lågen. Linu købte en billig, moderne udgave og gik ud i regnen, en smule flov, men klogere på, hvad gamle bøger betyder for dem, der passer på dem.',
        translation:
          'O Viggo ficou tão pálido que por um instante o Linu achou que ele fosse desmaiar. «Não se corrige um livro do século XIX», disse ele com a voz trêmula, «assim como não se pinta um nariz novo num quadro antigo.» Explicou que a ortografia antiga faz parte da história do livro, e que dá para ler Andersen numa edição moderna, se a pessoa preferir. Então pôs o livro de volta no armário de vidro e trancou a portinha com todo o cuidado. O Linu comprou uma edição moderna baratinha e saiu na chuva, meio envergonhado, mas sabendo melhor o que os livros antigos significam para quem cuida deles.',
        ending: { tone: 'neutro', title: 'Lápis proibido', message: 'Você entendeu Andersen, mas esqueceu que a grafia antiga também é parte da história do livro.' },
      },
    },
  },
  {
    id: 'da-h44',
    level: 'C2',
    cefr: 'C2',
    title: 'En Sandhed for mig',
    emoji: '🌊',
    summary: 'Em Gilleleje, onde Kierkegaard passou um verão aos 22 anos, o Linu caminha com um estudante indeciso até o penhasco de Gilbjerg Hoved e lê com ele, na grafia antiga, duas das frases mais famosas do filósofo.',
    cultural_context:
      'Søren Kierkegaard (1813–1855), filósofo de Copenhague e um dos precursores do existencialismo, passou o verão de 1835, aos 22 anos, em Gilleleje, vila de pescadores no norte da Zelândia, onde escreveu no diário a famosa passagem sobre encontrar «uma verdade que seja verdade para mim». No penhasco de Gilbjerg Hoved, ali perto, há uma pedra em sua memória; muitos de seus livros, como «Ou isto ou aquilo» (1843), saíram sob pseudônimos.',
    start: 'start',
    glossary: [
      ['en dagbogsoptegnelse', 'uma anotação de diário'],
      ['et pseudonym', 'um pseudônimo'],
      ['gjælder / døe (gammel stavemåde)', 'gælder / dø (importa / morrer)'],
      ['baglæns / forlæns', 'para trás / para a frente'],
      ['det er let at være bagklog', 'é fácil ser sábio depois'],
      ['en mindesten', 'uma pedra memorial'],
      ['Enten – Eller', 'Ou isto ou aquilo (livro de 1843)'],
      ['at bønfalde', 'implorar'],
    ],
    nodes: {
      start: {
        emoji: '⚓',
        text: 'En blæsende augustmorgen sad Linu på kajen i Gilleleje, hvor fiskerbådene vuggede i havnen, og mågerne skreg over kasserne med fisk. Ved siden af ham sad Asger, en ung jurastuderende, som han havde mødt på vandrerhjemmet, og stirrede tomt ud over Kattegat. «Jeg skal vælge inden fredag, om jeg fortsætter på jura eller skifter til filosofi», sagde han til sidst, «og jeg kan ikke finde ud af det.» Han fortalte, at han var kommet til Gilleleje, fordi Søren Kierkegaard som ung mand boede her en sommer og skrev nogle af sine mest berømte linjer. «Måske håber jeg, at noget af det stadig hænger i luften», tilføjede han med et skævt smil.',
        translation:
          'Numa manhã de vento em agosto, o Linu estava sentado no cais de Gilleleje, onde os barcos de pesca balançavam no porto e as gaivotas gritavam sobre as caixas de peixe. Ao lado dele estava o Asger, um jovem estudante de direito que ele tinha conhecido no albergue, olhando o Kattegat com o olhar vazio. «Tenho que decidir até sexta se continuo no direito ou se mudo para filosofia», disse ele por fim, «e não consigo.» Contou que tinha vindo a Gilleleje porque Søren Kierkegaard, quando jovem, morou ali num verão e escreveu algumas das suas linhas mais famosas. «Talvez eu tenha esperança de que alguma coisa disso ainda esteja no ar», acrescentou, com um sorriso torto.',
        choices: [
          { text: 'Foreslå, at de går ud til Gilbjerg Hoved.', translation: 'Sugerir que caminhem até Gilbjerg Hoved.', next: 'gilbjerg' },
          { text: 'Spørge, hvem Kierkegaard egentlig var.', translation: 'Perguntar quem era Kierkegaard, afinal.', next: 'hvem' },
        ],
      },
      hvem: {
        emoji: '🎩',
        text: 'Asger fortalte, at Kierkegaard blev født i København i 1813 og døde samme sted i 1855, kun toogfyrre år gammel, og at han i dag regnes for en af eksistensfilosofiens forløbere. Han skrev mange af sine bøger under pseudonymer, for eksempel «Enten – Eller» fra 1843, hvor forskellige opdigtede forfattere taler for hver sin måde at leve på. «Han ville ikke fortælle læseren, hvad der var rigtigt; han ville tvinge læseren til selv at vælge», sagde Asger. Linu bemærkede, at det næppe var tilfældigt, at en mand, der ikke kunne vælge, var faldet for netop Kierkegaard. Asger lo for første gang den morgen og sagde, at det var præcis, hvad hans mormor også havde sagt.',
        translation:
          'O Asger contou que Kierkegaard nasceu em Copenhague em 1813 e morreu lá mesmo em 1855, com apenas quarenta e dois anos, e que hoje é considerado um dos precursores da filosofia existencial. Ele escreveu muitos livros sob pseudônimos, como «Ou isto ou aquilo», de 1843, em que diferentes autores inventados defendem cada um o seu modo de viver. «Ele não queria dizer ao leitor o que era certo; queria obrigar o leitor a escolher sozinho», disse o Asger. O Linu observou que dificilmente era por acaso que um homem que não conseguia escolher tinha se apaixonado justamente por Kierkegaard. O Asger riu pela primeira vez naquela manhã e disse que era exatamente o que a avó dele também tinha dito.',
        choices: [{ text: 'Gå ud til Gilbjerg Hoved sammen.', translation: 'Caminhar juntos até Gilbjerg Hoved.', next: 'gilbjerg' }],
      },
      gilbjerg: {
        emoji: '🪨',
        text: 'De gik langs kysten mod vest, indtil de stod oppe på Gilbjerg Hoved, en høj skrænt med udsigt ud over havet mod Kullen i Sverige. Her stod en mindesten for Kierkegaard, og Asger fortalte, at filosoffen i sommeren 1835, kun toogtyve år gammel, skrev en lang dagbogsoptegnelse i Gilleleje. Han tog en lille, slidt bog op af lommen og læste med den gamle stavemåde: «det gjælder om at finde en Sandhed, som er Sandhed for mig, at finde den Idee, for hvilken jeg vil leve og døe.» Vinden tog fat i siderne, og i et øjeblik sagde ingen af dem noget. Så spurgte Asger, hvad Linu troede, at Kierkegaard mente med «Sandhed for mig».',
        translation:
          'Foram andando pela costa para oeste até chegarem ao alto de Gilbjerg Hoved, uma encosta íngreme com vista para o mar, na direção de Kullen, na Suécia. Ali havia uma pedra em memória de Kierkegaard, e o Asger contou que o filósofo, no verão de 1835, com apenas vinte e dois anos, escreveu em Gilleleje uma longa anotação de diário. Tirou do bolso um livrinho gasto e leu, na grafia antiga: «o que importa é encontrar uma verdade que seja verdade para mim, encontrar a ideia pela qual eu queira viver e morrer.» O vento agarrou as páginas, e por um instante nenhum dos dois disse nada. Então o Asger perguntou o que o Linu achava que Kierkegaard queria dizer com «verdade para mim».',
        choices: [
          { text: '«At man skal finde noget, man selv kan leve for – ikke bare en sandhed, man har lært udenad.»', translation: '«Que a gente precisa achar algo pelo qual possa viver — e não só uma verdade decorada.»', next: 'baglaens' },
          {
            text: '«At enhver sandhed er lige god, og at intet egentlig er sandt.»',
            translation: '«Que toda verdade vale o mesmo, e que nada é verdadeiro de fato.»',
            wrong: 'Kierkegaard não diz que tudo vale ou que nada é verdadeiro. «En Sandhed, som er Sandhed for mig» é uma verdade que a pessoa assume como sua: «den Idee, for hvilken jeg vil leve og døe», a ideia pela qual está disposta a viver e morrer. É compromisso pessoal, não relativismo.',
          },
        ],
      },
      baglaens: {
        emoji: '🔄',
        text: '«Præcis», sagde Asger. «Han ville ikke have en sandhed, der kun stod i bøgerne, men en, der kunne bære et helt liv.» Så fortalte han om en anden optegnelse, fra 1843, hvor Kierkegaard skriver, at filosofien har ret i, at «Livet maa forstaaes baglænds», men at man glemmer den anden sætning, nemlig at «det maa leves forlænds». Han forklarede, at «maa», «forstaaes», «baglænds» og «forlænds» er gamle stavemåder for må, forstås, baglæns og forlæns. «Min mormor siger bare, at det er let at være bagklog», tilføjede han, «men jeg tror, at de to mener nogenlunde det samme.»',
        translation:
          '«Exatamente», disse o Asger. «Ele não queria uma verdade que só estivesse nos livros, mas uma que aguentasse uma vida inteira.» Então falou de outra anotação, de 1843, em que Kierkegaard escreve que a filosofia tem razão ao dizer que «a vida tem que ser compreendida para trás», mas que se esquece a outra frase: que «ela tem que ser vivida para a frente». Explicou que «maa», «forstaaes», «baglænds» e «forlænds» são grafias antigas de må, forstås, baglæns e forlæns. «Minha avó diz simplesmente que é fácil ser sábio depois», acrescentou, «mas acho que os dois querem dizer mais ou menos a mesma coisa.»',
        choices: [
          { text: '«At man først forstår sit liv bagefter, men alligevel må leve det fremad uden at kende enden.»', translation: '«Que a gente só entende a vida depois, mas mesmo assim tem que vivê-la para a frente, sem saber o final.»', next: 'valget' },
          {
            text: '«At man skal leve sit liv baglæns og altid se sig tilbage.»',
            translation: '«Que a gente deve viver a vida para trás, sempre olhando para o passado.»',
            wrong: 'A frase separa duas coisas: a vida «maa forstaaes baglænds» (só se compreende olhando para trás) e «maa leves forlænds» (tem que ser vivida para a frente). Kierkegaard não manda viver olhando para trás; diz que vivemos sem saber o final e só entendemos depois — como no ditado da avó, «é fácil ser sábio depois».',
          },
        ],
      },
      valget: {
        emoji: '⚖️',
        text: 'De satte sig i lyngen ved mindestenen, og Asger fortalte, at hans far var advokat og altid havde regnet med, at sønnen skulle overtage kontoret. «Hvis jeg skifter til filosofi, bliver han skuffet, og hvis jeg bliver på jura, bliver jeg måske selv skuffet resten af livet», sagde han. Han kiggede på Linu og bønfaldt ham næsten om at sige, hvad han skulle gøre. Linu tænkte på Kierkegaard, der netop ikke ville vælge for sine læsere, og på de to linjer om at forstå baglæns og leve forlæns. Han vidste, at det, han sagde nu, kunne komme til at veje tungt.',
        translation:
          'Sentaram-se na urze junto à pedra, e o Asger contou que o pai era advogado e sempre tinha contado com que o filho assumisse o escritório. «Se eu mudar para filosofia, ele vai ficar decepcionado, e se eu ficar no direito, talvez eu mesmo fique decepcionado pelo resto da vida», disse ele. Olhou para o Linu e quase implorou que ele dissesse o que fazer. O Linu pensou em Kierkegaard, que justamente não queria escolher pelos leitores, e nas duas linhas sobre compreender para trás e viver para a frente. Sabia que o que dissesse agora podia pesar muito.',
        choices: [
          { text: 'Sige, at han ikke kan vælge for ham, men gerne vil hjælpe ham med at tænke.', translation: 'Dizer que não pode escolher por ele, mas que quer ajudá-lo a pensar.', next: 'final_bom' },
          { text: 'Sige, at han skal blive på jura, fordi det er det sikreste.', translation: 'Dizer que ele deve ficar no direito, porque é o mais seguro.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🌅',
        text: '«Jeg kan ikke vælge for dig», sagde Linu, «men jeg kan spørge dig om det, Kierkegaard spurgte sig selv: hvilken idé er det, du vil leve for?» Asger blev siddende længe og så ud over vandet, hvor en fiskerbåd langsomt tøffede ind mod havnen. Så begyndte han at tale, først tøvende, siden hurtigere, om de bøger, der havde holdt ham vågen om natten, og om de lovparagraffer, der aldrig havde gjort det. Da solen stod højt, rejste han sig og sagde, at han ville ringe til sin far samme aften, og at han godt vidste, at han først ville forstå valget mange år senere. «Det maa leves forlænds», sagde han og smilede, og Linu tænkte, at mindestenen sjældent havde haft en bedre læser.',
        translation:
          '«Não posso escolher por você», disse o Linu, «mas posso te fazer a pergunta que Kierkegaard fez a si mesmo: qual é a ideia pela qual você quer viver?» O Asger ficou muito tempo sentado olhando o mar, onde um barco de pesca voltava devagar para o porto. Então começou a falar, primeiro hesitante, depois mais depressa, dos livros que o tinham deixado acordado à noite e dos artigos de lei que nunca tinham feito isso. Quando o sol já estava alto, levantou-se e disse que ia ligar para o pai naquela noite, e que sabia muito bem que só ia entender a escolha muitos anos depois. «Tem que ser vivida para a frente», disse ele, sorrindo, e o Linu pensou que a pedra memorial raramente tivera um leitor melhor.',
        ending: { tone: 'bom', title: 'Vivida para a frente', message: 'Você leu Kierkegaard na grafia antiga, entendeu a «verdade para mim» e o «baglænds/forlænds» — e devolveu ao Asger a própria escolha.' },
      },
      final_neutro: {
        emoji: '🐟',
        text: '«Bliv på jura; det er det sikreste», sagde Linu, og Asger nikkede langsomt, som om en tung byrde var blevet taget fra ham. De gik tilbage til Gilleleje og spiste fiskefrikadeller på havnen, og Asger talte om alt andet end filosofi. Men da de skiltes, sagde han stille, at han var lettet over, at nogen havde valgt for ham, og at det måske netop var problemet. Linu så ham gå og tænkte på Kierkegaard, for hvem det at vælge selv var en del af at blive et menneske. Han var ikke sikker på, at han havde gjort Asger en tjeneste.',
        translation:
          '«Fique no direito; é o mais seguro», disse o Linu, e o Asger concordou devagar, como se lhe tivessem tirado um peso enorme. Voltaram para Gilleleje e comeram bolinhos de peixe no porto, e o Asger falou de tudo, menos de filosofia. Mas, na despedida, disse baixinho que estava aliviado por alguém ter escolhido por ele, e que talvez o problema fosse justamente esse. O Linu o viu ir embora e pensou em Kierkegaard, para quem escolher por si mesmo fazia parte de se tornar humano. Não tinha certeza de ter feito um favor ao Asger.',
        ending: { tone: 'neutro', title: 'Escolha emprestada', message: 'Você entendeu os textos, mas escolheu pelo Asger — justamente o que Kierkegaard se recusava a fazer pelos leitores.' },
      },
    },
  },
  {
    id: 'da-h45',
    level: 'C2',
    cefr: 'C2',
    title: 'Den svære Død',
    emoji: '❄️',
    summary: 'Numa noite de neve em Thisted, cidade natal de J. P. Jacobsen, o Linu entra num clube do livro que lê «Niels Lyhne» — e entre provérbios, café e a última frase do romance, descobre por que alguns livros se leem melhor em grupo.',
    cultural_context:
      'Jens Peter Jacobsen (1847–1885), nascido e morto em Thisted, no noroeste da Jutlândia, era botânico, traduziu Darwin para o dinamarquês e escreveu os romances «Fru Marie Grubbe» (1876) e «Niels Lyhne» (1880), admirados em toda a Europa — o poeta Rilke os recomendava com fervor. Seus livros foram impressos na ortografia antiga, e os clubes de leitura nas bibliotecas são uma tradição viva na Dinamarca.',
    start: 'start',
    glossary: [
      ['en læsekreds', 'um clube do livro'],
      ['en prisopgave', 'um trabalho acadêmico premiado'],
      ['nedslående', 'desanimador'],
      ['det er ikke guld alt, der glimrer', 'nem tudo que reluz é ouro'],
      ['små gryder har også ører', 'as crianças também escutam (lit.: panelas pequenas também têm alças)'],
      ['enden god, alting godt', 'tudo está bem quando termina bem'],
      ['svær (her)', 'pesado, duro, grave'],
      ['saa / Døden (gammel stavemåde)', 'så / døden'],
    ],
    nodes: {
      start: {
        emoji: '📚',
        text: 'En mørk januaraften, mens sneen drev hen over Thisted, trådte Linu ind på byens bibliotek for at varme sig. I et hjørne sad en lille gruppe omkring et bord med kaffekander og hjemmebagt kringle, og alle havde den samme gamle roman foran sig. En kvinde med gråt hår og røde briller vinkede ham hen og præsenterede sig som Else, formand for læsekredsen. «Vi læser Niels Lyhne af J.P. Jacobsen, som er født her i byen», sagde hun, «og De – undskyld, du – er meget velkommen til at sætte dig.» Linu satte sig, og en ældre herre skubbede kringlen over til ham uden et ord.',
        translation:
          'Numa noite escura de janeiro, enquanto a neve varria Thisted, o Linu entrou na biblioteca da cidade para se esquentar. Num canto, um grupinho estava sentado em volta de uma mesa com bules de café e rosca caseira, e todos tinham o mesmo romance antigo à frente. Uma senhora de cabelo grisalho e óculos vermelhos acenou para ele e se apresentou como Else, presidente do clube do livro. «Estamos lendo Niels Lyhne, de J. P. Jacobsen, que nasceu aqui na cidade», disse ela, «e o senhor — desculpe, você — é muito bem-vindo para se sentar.» O Linu se sentou, e um senhor de idade empurrou a rosca na direção dele sem dizer uma palavra.',
        choices: [
          { text: 'Spørge, hvem J.P. Jacobsen var.', translation: 'Perguntar quem foi J. P. Jacobsen.', next: 'jacobsen' },
          { text: 'Lytte til diskussionen.', translation: 'Ouvir a discussão.', next: 'laesekreds' },
        ],
      },
      jacobsen: {
        emoji: '🌿',
        text: 'Else fortalte, at Jens Peter Jacobsen blev født i Thisted i 1847, og at han egentlig var botaniker og vandt universitetets guldmedalje for en prisopgave om alger, før han for alvor blev forfatter. Han oversatte desuden Darwins «Arternes Oprindelse» til dansk og var med til at bringe de nye naturvidenskabelige idéer til Danmark. «Han så på mennesker, som han så på planter: nøje, kærligt og uden at lyve om dem», sagde hun. Han fik tuberkulose som ung, vendte syg hjem til Thisted og døde her i 1885, kun otteogtredive år gammel. «Han skrev ikke meget, men det, han skrev, blev læst i hele Europa, og digteren Rilke anbefalede ham varmt i sine breve», tilføjede Else.',
        translation:
          'A Else contou que Jens Peter Jacobsen nasceu em Thisted em 1847, e que na verdade era botânico e ganhou a medalha de ouro da universidade por um trabalho premiado sobre algas, antes de se tornar escritor para valer. Além disso, traduziu «A origem das espécies», de Darwin, para o dinamarquês e ajudou a trazer as novas ideias científicas para a Dinamarca. «Ele olhava para as pessoas como olhava para as plantas: com atenção, com carinho e sem mentir sobre elas», disse ela. Pegou tuberculose jovem, voltou doente para Thisted e morreu aqui em 1885, com apenas trinta e oito anos. «Ele não escreveu muito, mas o que escreveu foi lido na Europa inteira, e o poeta Rilke o recomendava calorosamente nas suas cartas», acrescentou a Else.',
        choices: [{ text: 'Lytte til diskussionen.', translation: 'Ouvir a discussão.', next: 'laesekreds' }],
      },
      laesekreds: {
        emoji: '☕',
        text: 'Diskussionen blev hurtigt livlig. Inger, en pensioneret skolelærer, mente, at romanen var smuk, men dybt nedslående, fordi Niels Lyhne mister alle, han holder af, og aldrig finder en tro at hvile i. Poul, den tavse herre med kringlen, sagde tørt, at det ikke er guld alt, der glimrer, og at mange moderne bøger var langt mere nedslående end Jacobsen, bare uden hans sprog. I hjørnet sad hans barnebarn, Sofie på ni år, og tegnede, og pludselig sagde hun højt: «Morfar siger, at Ingers bøger altid er for triste til ham!» Inger lo og sagde: «Ja, ja, små gryder har også ører.»',
        translation:
          'A discussão logo esquentou. A Inger, uma professora aposentada, achava o romance lindo, mas profundamente desanimador, porque Niels Lyhne perde todos de quem gosta e nunca encontra uma fé em que descansar. O Poul, o senhor calado da rosca, disse secamente que nem tudo que reluz é ouro, e que muitos livros modernos eram bem mais desanimadores que Jacobsen, só que sem a língua dele. No canto estava a neta dele, Sofie, de nove anos, desenhando, e de repente ela disse bem alto: «O vovô diz que os livros da Inger são sempre tristes demais para ele!» A Inger riu e disse: «Pois é, panela pequena também tem alça.»',
        choices: [
          { text: '«Børn hører mere, end de voksne tror.»', translation: '«As crianças ouvem mais do que os adultos pensam.»', next: 'slutning' },
          {
            text: '«Inger mener altså, at Sofie har for store ører.»',
            translation: '«Então a Inger acha que a Sofie tem orelhas grandes demais.»',
            wrong: '«Små gryder har også ører» (panelas pequenas também têm «ører» — as alças da panela, que em dinamarquês se chamam «orelhas») é um provérbio: as crianças escutam tudo o que os adultos dizem. A Inger não fala das orelhas da Sofie, e sim de que ela ouviu o comentário do avô.',
          },
        ],
      },
      slutning: {
        emoji: '🕯️',
        text: 'Til sidst bad Else Linu om at læse romanens sidste ord højt, og hun viste ham, hvor de stod i den gamle udgave med de store begyndelsesbogstaver. Linu læste langsomt: «Og saa døde han endelig Døden, den svære Død.» Der blev stille omkring bordet, og kun sneen, der slog mod ruderne, kunne høres. Else forklarede, at Niels Lyhne dør som ateist, uden at søge trøst i en tro, han ikke har, og at Jacobsen selv havde kæmpet med de samme spørgsmål. Så spurgte hun Linu, hvordan han forstod ordene «døde han endelig Døden».',
        translation:
          'No fim, a Else pediu ao Linu que lesse em voz alta as últimas palavras do romance, e mostrou onde estavam na edição antiga, com as iniciais maiúsculas. O Linu leu devagar: «e então ele enfim morreu a morte, a morte pesada.» Fez-se silêncio em volta da mesa, e só se ouvia a neve batendo nas vidraças. A Else explicou que Niels Lyhne morre ateu, sem buscar consolo numa fé que não tem, e que o próprio Jacobsen tinha lutado com as mesmas perguntas. Então perguntou ao Linu como ele entendia as palavras «ele enfim morreu a morte».',
        choices: [
          { text: '«At han til sidst dør helt og fuldt, med åbne øjne og uden trøst – den tunge død.»', translation: '«Que no fim ele morre por inteiro, de olhos abertos e sem consolo — a morte pesada.»', next: 'kaffe' },
          {
            text: '«At han dør to gange, først i en drøm og så i virkeligheden.»',
            translation: '«Que ele morre duas vezes, primeiro num sonho e depois de verdade.»',
            wrong: '«Døde han Døden» é uma repetição enfática (morrer a morte), não duas mortes. A frase diz que Niels Lyhne enfim morreu de verdade, até o fim, a «svære Død» — a morte pesada, dura —, sem o consolo de uma fé em que não acreditava.',
          },
        ],
      },
      kaffe: {
        emoji: '🥮',
        text: 'Else nikkede langsomt og sagde, at «svær» her betyder tung og hård snarere end vanskelig, sådan som man også taler om en svær sygdom. Inger tørrede diskret en tåre væk, og Poul rømmede sig og sagde, at nu måtte der vist mere kaffe til. Uden for vinduet var det holdt op med at sne, og Else spurgte, om Linu ville blive til en kop til og til snakken om næste måneds bog, eller om han skulle nå den sidste bus ud til Klitmøller, hvor han boede. Sofie kiggede op fra sin tegning og sagde, at han skulle blive. «Enden god, alting godt», sagde Poul, «men så langt er vi ikke nået endnu.»',
        translation:
          'A Else concordou devagar e disse que «svær», aqui, quer dizer pesado e duro, mais do que difícil, como quando se fala de uma doença grave. A Inger enxugou discretamente uma lágrima, e o Poul pigarreou e disse que agora parecia precisar de mais café. Lá fora tinha parado de nevar, e a Else perguntou se o Linu ia ficar para mais uma xícara e para a conversa sobre o livro do mês seguinte, ou se precisava pegar o último ônibus para Klitmøller, onde estava hospedado. A Sofie levantou os olhos do desenho e disse que ele tinha que ficar. «Tudo está bem quando termina bem», disse o Poul, «mas ainda não chegamos lá.»',
        choices: [
          { text: 'Blive til kaffen og snakken.', translation: 'Ficar para o café e a conversa.', next: 'final_bom' },
          { text: 'Takke for i aften og nå den sidste bus.', translation: 'Agradecer pela noite e pegar o último ônibus.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🐧',
        text: 'Linu blev, og snakken fortsatte, til biblioteket lukkede. De blev enige om at læse «Fru Marie Grubbe», Jacobsens første roman, næste gang, og Else lovede at finde en udgave med den gamle retskrivning til Linu, «nu hvor du alligevel kan læse den». Sofie gav ham sin tegning, som forestillede en pingvin, der læste en tyk bog i sneen. Da Linu gik ud i den kolde, stjerneklare nat, tænkte han, at en roman om ensomhed havde givet ham en af de mindst ensomme aftener, han havde haft længe. Poul kørte ham hjem til Klitmøller i sin gamle bil og nynnede hele vejen.',
        translation:
          'O Linu ficou, e a conversa continuou até a biblioteca fechar. Combinaram ler «Fru Marie Grubbe», o primeiro romance de Jacobsen, na vez seguinte, e a Else prometeu arranjar para o Linu uma edição na ortografia antiga, «já que você lê mesmo». A Sofie deu a ele o desenho dela, que mostrava um pinguim lendo um livro grosso na neve. Quando o Linu saiu para a noite fria e estrelada, pensou que um romance sobre a solidão tinha lhe dado uma das noites menos solitárias em muito tempo. O Poul o levou para casa em Klitmøller no seu carro velho, cantarolando o caminho todo.',
        ending: { tone: 'bom', title: 'Clube do livro na neve', message: 'Você leu Jacobsen na grafia antiga, entendeu a «svære Død» e os provérbios — e ganhou um lugar à mesa do clube.' },
      },
      final_neutro: {
        emoji: '🚌',
        text: 'Linu takkede for i aften og skyndte sig ud til stoppestedet, hvor han stod og trippede i kulden. Bussen kom til tiden, og han nåede hjem til Klitmøller i god tid, men han havde glemt at spørge, hvilken bog de skulle læse næste gang. Da han en uge senere ringede til biblioteket, fik han at vide, at læsekredsen var fuldtegnet til foråret. Han købte «Niels Lyhne» i en billig, moderne udgave og læste den alene, og den var lige så smuk, men han savnede Pouls tørre kommentarer og Ingers tårer. Han tænkte, at nogle bøger bedst læses sammen med andre.',
        translation:
          'O Linu agradeceu pela noite e correu até o ponto de ônibus, onde ficou batendo os pés no frio. O ônibus chegou na hora, e ele voltou a Klitmøller com folga, mas tinha esquecido de perguntar qual livro iam ler na vez seguinte. Quando ligou para a biblioteca uma semana depois, disseram que o clube estava lotado até a primavera. Ele comprou «Niels Lyhne» numa edição moderna barata e leu sozinho, e o livro continuava lindo, mas sentiu falta dos comentários secos do Poul e das lágrimas da Inger. Pensou que alguns livros se leem melhor com outras pessoas.',
        ending: { tone: 'neutro', title: 'Leitura solitária', message: 'Você entendeu Jacobsen e os provérbios, mas saiu antes da hora — e perdeu o lugar no clube.' },
      },
    },
  },
];
