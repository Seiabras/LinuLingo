import type { UnitSeed } from '../types';

/** Trilha do dinamarquês: uma unidade por subnível (A1.1 → C2). */
export const UNITS_DA: UnitSeed[] = [
  {
    id: 'da-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Hej! Os sons do dinamarquês',
    emoji: '👋',
    card: {
      id: 'da-c1',
      title: 'Uma língua que se escreve de um jeito e se fala de outro',
      emoji: '🗣️',
      history:
        'O dinamarquês é uma língua germânica do norte: descende do nórdico antigo, a língua dos vikings, e é prima próxima do norueguês e do sueco. Na escrita, dinamarqueses e noruegueses se entendem quase sem esforço, porque durante séculos, até 1814, a Noruega esteve unida à Dinamarca e escreveu em dinamarquês. Na fala é outra história: o dinamarquês engole consoantes, tem um número enorme de vogais e um «soluço» na garganta, o stød, e até suecos e noruegueses às vezes pedem para repetir. O alfabeto tem 29 letras: depois do z vêm æ, ø e å. A letra «å» só entrou na escrita oficial com a reforma ortográfica de 1948, a mesma que acabou com a maiúscula nos substantivos; antes se escrevia «aa», e por isso algumas cidades, como Aalborg e Aarhus, ainda aparecem com as duas letras.',
      culture_tip:
        '«Hej» serve para todo mundo, a qualquer hora, e também para se despedir. Os dinamarqueses tratam quase todos por «du» (você), até o chefe e a médica; o «De» de cortesia hoje só aparece em situações muito formais, como falar com a família real. Não existe uma palavra exata para «por favor»: o trabalho é feito por «tak», que aparece o tempo todo: ao receber o troco, ao aceitar algo («ja tak») e ao sair da mesa («tak for mad»). Ao ser apresentado, dê um aperto de mão, olhe nos olhos e diga o seu nome.',
      grammar_why:
        'Boa notícia: o verbo dinamarquês não muda com a pessoa. Em português dizemos «eu sou, você é, nós somos, eles são»; em dinamarquês é «er» para todo mundo: jeg er, du er, han er, hun er, vi er, I er, de er. Os pronomes são jeg (eu, que soa «iai»), du (você), han (ele), hun (ela), vi (nós), I (vocês, sempre com maiúscula, para não confundir com a preposição «i») e de (eles, elas), que soa «di». O mesmo «er» serve para «ser» e «estar»: «Jeg er træt» (estou cansado) e «Jeg er fra Brasilien» (sou do Brasil). E, para a idade, também se usa «er», não «ter»: «Jeg er tyve år» (tenho vinte anos). Nos números, repare como a escrita engana: syv (7) soa quase «siu», otte (8) soa «óde» e tyve (20) soa «tü-ue».',
      grammar_examples: [
        ['Jeg er fra Brasilien.', 'Eu sou do Brasil.'],
        ['Hun er i Aarhus i dag.', 'Ela está em Aarhus hoje.'],
        ['Vi er trætte, men glade.', 'Nós estamos cansados, mas contentes.'],
        ['De er fra Odense, og I?', 'Eles são de Odense, e vocês?'],
      ],
      character_guide: [
        ['æ', '«é» aberto de «café»; às vezes ainda mais aberto, quase um «a»', 'æble, læse, være'],
        ['ø', 'faça a boca de «ô» e diga «ê»: o som de «eu» do francês ou do «ö» alemão', 'øl, søster, brød'],
        ['å', '«ó» aberto de «avó» ou «ô» fechado de «avô», conforme a palavra', 'år, gå, blå'],
        ['y', 'diga «i» com os lábios em bico, como o «u» do francês', 'ny, by, syv'],
        ['u', '«u» de «uva», mas com os lábios bem arredondados e para a frente', 'du, hus, ud'],
        ['a', 'na maioria das palavras soa bem aberto e para a frente, perto de «é»; junto de r fica fundo, um «a» de «casa»', 'gade, male, bage (perto de «é»); far, rar («a» fundo)'],
        ['e no fim', 'o «e» átono final é bem fraco, um «â» quase engolido', 'lille, kage, pige'],
        ['vogais', 'o dinamarquês tem mais de vinte sons de vogal (contando as longas e as curtas); não se assuste: imite e compare, palavra por palavra', 'is × es, hus × hos, lys × løs'],
        ['stød [ˀ]', 'um pequeno «soluço» ou rangido na garganta, no meio da sílaba; às vezes é a única diferença entre duas palavras', 'hun (ela, sem stød) × hund (cachorro, com stød); man (a gente) × mand (homem)'],
        ['d suave [ð]', 'depois de vogal, o d vira um som frouxo, parecido com o «th» do inglês «this», mas com a língua mole, quase um «l» que não encosta', 'mad, gade, rød, med'],
        ['d mudo', 'o d não soa em «ld», «nd», «rd» nem em várias palavras curtas', 'holde, land, bord, godt, hvad'],
        ['h mudo', 'antes de v e de j, o h não se pronuncia', 'hvad, hvem, hvor, hjem, hjælpe'],
        ['g suave ou mudo', 'depois de vogal, o g vira «i», vira «u» ou some', 'jeg («iai»), mig («mai»), pige («pí-i»), og («ô»), bage («bé-ie»)'],
        ['v depois de vogal', 'soa como «u», formando ditongo', 'syv («siu»), hav, lov'],
        ['r', 'raspado na garganta, bem suave; depois de vogal quase vira uma vogal «a» fraca', 'rød, tre (garganta); far, mor, fire («fí-a»)'],
        ['p, t, k no começo', 'soltos com um sopro forte; o t inicial soa quase «ts»', 'tak, to, tyve, kage, pige'],
        ['p, t, k no meio e no fim', 'depois de vogal amolecem e soam quase g, b, d, sem sopro', 'køkken, hoppe, sætte'],
      ],
    },
    lessons: [
      {
        id: 'da-u1-l1',
        title: 'Hej, farvel!',
        kind: 'licao',
        words: ['hej', 'godmorgen', 'farvel', 'tak', 'hvordan går det?', 'det går godt'],
        cloze: [
          { sentence: 'Hej, Mette! Hvordan ___ det? — Det går godt, tak!', answer: 'går', options: ['går', 'er', 'hedder'], translation: 'Oi, Mette! Como vai? — Vai bem, obrigado!' },
          { sentence: 'Klokken er syv om morgenen: ___, mor!', answer: 'godmorgen', options: ['godmorgen', 'godnat', 'farvel'], translation: 'São sete da manhã: bom dia, mãe!' },
          { sentence: 'Farvel, og ___ for i dag!', answer: 'tak', options: ['tak', 'hej', 'ja'], translation: 'Tchau, e obrigado por hoje!' },
        ],
        voice: {
          bot: 'Hej! Hvordan går det?',
          botTranslation: 'Oi! Como vai?',
          expected: ['Det går godt, tak! Hvad med dig?', 'det går godt', 'tak', 'hvad med dig'],
          hint: 'Responda que vai bem e devolva a pergunta: «Det går godt, tak! Hvad med dig?». Em «godt», o d é mudo (soa «gót»); em «hvad», o h é mudo (soa quase «va»); e «dig» soa «dai».',
        },
        communityPrompt: 'Escreva dois cumprimentos em dinamarquês: um de manhã, para uma vizinha («Godmorgen…»), e um de despedida para um amigo («Farvel…» ou «Hej hej…»). Use «Hvordan går det?» em um deles.',
      },
      {
        id: 'da-u1-l2',
        title: 'Eu, você, ele, ela',
        kind: 'licao',
        words: ['jeg', 'du', 'han', 'hun', 'vi', 'de'],
        cloze: [
          { sentence: 'Jeg ___ fra Brasilien.', answer: 'er', options: ['er', 'være', 'hedder'], translation: 'Eu sou do Brasil.' },
          { sentence: 'Det er Freja. ___ er fra Aarhus.', answer: 'Hun', options: ['Hun', 'Han', 'Den'], translation: 'Essa é a Freja. Ela é de Aarhus.' },
          { sentence: 'Mads og Freja? ___ er i København nu.', answer: 'De', options: ['De', 'Dem', 'I'], translation: 'O Mads e a Freja? Eles estão em Copenhague agora.' },
        ],
        voice: {
          bot: 'Hej! Jeg hedder Mads, og jeg er fra Odense. Hvad med dig?',
          botTranslation: 'Oi! Eu me chamo Mads e sou de Odense. E você?',
          expected: ['Hej, Mads! Jeg hedder Ana, og jeg er fra Brasilien.', 'jeg hedder', 'jeg er fra', 'Brasilien'],
          hint: 'Diga o seu nome com «Jeg hedder…» e a origem com «Jeg er fra…». O «jeg» soa «iai», e o d de «hedder» é o d suave, frouxo, quase um «l».',
        },
        communityPrompt: 'Apresente três pessoas em dinamarquês, uma frase para cada, usando «er»: você («Jeg er…»), um amigo («Han er…») e uma amiga («Hun er…»). Repare que o verbo não muda!',
      },
      {
        id: 'da-u1-l3',
        title: 'Desafio de voz: prazer em conhecer',
        kind: 'voz',
        words: ['jeg hedder', 'hvad hedder du?', 'rart at møde dig', 'syv', 'tolv', 'tyve'],
        cloze: [
          { sentence: 'Fem, seks, ___, otte.', answer: 'syv', options: ['syv', 'sytten', 'tyve'], translation: 'Cinco, seis, sete, oito.' },
          { sentence: 'Ti plus ti er ___.', answer: 'tyve', options: ['tyve', 'tolv', 'sytten'], translation: 'Dez mais dez são vinte.' },
          { sentence: 'Vi ___ i Nyhavn nu.', answer: 'er', options: ['er', 'være', 'hedder'], translation: 'Nós estamos em Nyhavn agora.' },
        ],
        voice: {
          bot: 'Hej, jeg hedder Sofie. Hvad hedder du? Og hvor gammel er du?',
          botTranslation: 'Oi, eu me chamo Sofie. Como você se chama? E quantos anos você tem?',
          expected: ['Hej, Sofie! Jeg hedder Paulo, og jeg er tyve år. Rart at møde dig!', 'jeg hedder', 'år', 'rart at møde dig'],
          hint: 'A idade vem com «er»: «Jeg er tyve år» (tenho vinte anos). «Tyve» soa quase «tü-ue», e em «møde» o d é suave.',
        },
        communityPrompt: 'Escreva um diálogo curto em que duas pessoas se apresentam, dizem a idade com números até 20 («Jeg er sytten år») e terminam com «Rart at møde dig!».',
      },
      {
        id: 'da-u1-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Godmorgen, og velkommen til København! Hvad hedder du, og hvor kommer du fra?',
          botTranslation: 'Bom dia e bem-vindo a Copenhague! Como você se chama, e de onde você é?',
          expected: [
            'Godmorgen! Jeg hedder Marta, og jeg kommer fra Brasilien, fra Recife. Rart at møde dig!',
            'godmorgen',
            'jeg hedder',
            'jeg kommer fra',
            'rart at møde dig',
          ],
          hint: 'Devolva o cumprimento («Godmorgen!»), diga o nome com «Jeg hedder…», a origem com «Jeg kommer fra…» e feche com «Rart at møde dig!».',
        },
        communityPrompt: 'Escreva uma apresentação completa em dinamarquês: cumprimento, nome, de onde você é, a sua idade, duas pessoas da sua vida com «han er» / «hun er» e uma despedida.',
      },
    ],
  },
  {
    id: 'da-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Rugbrød, smørrebrød e hygge',
    emoji: '🥪',
    card: {
      id: 'da-c2',
      title: 'O artigo que vai no fim',
      emoji: '🍞',
      history:
        'O pão da Dinamarca é o rugbrød: um pão de centeio escuro, denso e azedinho, feito com fermentação natural e cheio de grãos. Sobre uma fatia dele, com manteiga, nasce o smørrebrød (literalmente «pão com manteiga»), o sanduíche aberto que os dinamarqueses comem no almoço, a «frokost», com garfo e faca: arenque, ovo com camarão, rosbife ou o clássico leverpostej, um patê de fígado quente ou frio. O que se põe em cima do pão tem até nome próprio: «pålæg». E o doce folhado que o mundo chama de «danish» se chama, na Dinamarca, «wienerbrød», o «pão de Viena», porque a técnica chegou com padeiros vindos da Áustria no século XIX.',
      culture_tip:
        'Ao terminar uma refeição na casa de alguém, agradeça sempre com «tak for mad» (obrigado pela comida); o anfitrião responde «velbekomme». Na hora do café com bolo, o clima ideal tem nome: «hygge», aquele aconchego de velas acesas, conversa sem pressa e ninguém olhando o celular. Os dinamarqueses acendem velas até no café da manhã, sobretudo no inverno escuro. E, no smørrebrød, a ordem conta: primeiro o peixe (o arenque), depois as carnes e, por fim, o queijo.',
      grammar_why:
        'Todo substantivo dinamarquês tem um gênero: o comum, com «en» (cerca de três em cada quatro palavras), ou o neutro, com «et»: en ost (um queijo), et æg (um ovo), et brød (um pão). Não há regra segura, então aprenda sempre a palavra junto com o artigo. A grande surpresa: o artigo definido (o, a) não vem antes, mas grudado no fim da palavra: osten (o queijo), ægget (o ovo), brødet (o pão); se a palavra já termina em -e, basta -n ou -t: kagen (o bolo), æblet (a maçã). No plural, muitas palavras ganham -er ou -e (kager, oste), e várias não mudam (æg, brød); o plural definido termina em -ne: kagerne, ostene, æggene. No presente, o verbo tem uma forma só, terminada em -r: jeg spiser, du spiser, vi spiser. Para dizer que algo existe, use «der er» (há, tem); para dizer que gosta, «jeg kan lide», geralmente com «godt» no meio e sem preposição: jeg kan godt lide kaffe (eu gosto de café).',
      grammar_examples: [
        ['Vi har et rugbrød. Brødet er friskt.', 'Nós temos um pão de centeio. O pão está fresco.'],
        ['Der er to æg og en ost i køleskabet.', 'Tem dois ovos e um queijo na geladeira.'],
        ['Jeg kan godt lide kaffe, men jeg drikker ikke mælk.', 'Eu gosto de café, mas não bebo leite.'],
        ['Kagerne er fra bageriet.', 'Os bolos são da padaria.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'da-u2-l1',
        title: 'O café da manhã',
        kind: 'licao',
        words: ['morgenmad', 'rugbrød', 'smør', 'ost', 'kaffe', 'mælk'],
        cloze: [
          { sentence: 'Hvor er ___? — Den er i køleskabet.', answer: 'osten', options: ['osten', 'ost', 'oste'], translation: 'Onde está o queijo? — Está na geladeira.' },
          { sentence: 'Mette ___ rugbrød med ost til morgenmad.', answer: 'spiser', options: ['spiser', 'spise', 'spist'], translation: 'A Mette come pão de centeio com queijo no café da manhã.' },
          { sentence: 'Kaffen er varm, men ___ er kold.', answer: 'mælken', options: ['mælken', 'mælket', 'mælk'], translation: 'O café está quente, mas o leite está frio.' },
        ],
        voice: {
          bot: 'Godmorgen! Hvad spiser du til morgenmad?',
          botTranslation: 'Bom dia! O que você come no café da manhã?',
          expected: ['Jeg spiser rugbrød med smør og ost, og jeg drikker kaffe.', 'jeg spiser', 'rugbrød', 'jeg drikker'],
          hint: 'Use o presente em -r: «Jeg spiser…», «Jeg drikker…». Em «rugbrød», o g quase some e o d do fim é o d suave: soa mais ou menos «ru-brøl», com a língua mole.',
        },
        communityPrompt: 'Descreva o seu café da manhã em dinamarquês com três frases no presente («Jeg spiser…», «Jeg drikker…») e use pelo menos uma forma definida, como «kaffen» ou «osten».',
      },
      {
        id: 'da-u2-l2',
        title: 'Smørrebrød no almoço',
        kind: 'licao',
        words: ['frokost', 'smørrebrød', 'pålæg', 'leverpostej', 'æg', 'der er'],
        cloze: [
          { sentence: '___ leverpostej og æg i køleskabet.', answer: 'Der er', options: ['Der er', 'Det er', 'Den er'], translation: 'Tem patê de fígado e ovos na geladeira.' },
          { sentence: 'Jeg har to ___ i madpakken.', answer: 'æg', options: ['æg', 'ægge', 'ægget'], translation: 'Eu tenho dois ovos na marmita.' },
          { sentence: 'Et æg og en ost: ___ er kogt, og osten er stærk.', answer: 'ægget', options: ['ægget', 'æggen', 'æg'], translation: 'Um ovo e um queijo: o ovo está cozido, e o queijo é forte.' },
        ],
        voice: {
          bot: 'Velkommen! Hvad vil du have på dit smørrebrød?',
          botTranslation: 'Bem-vindo! O que você quer no seu smørrebrød?',
          expected: ['Jeg vil gerne have leverpostej og æg, tak.', 'jeg vil gerne have', 'leverpostej', 'tak'],
          hint: 'Para pedir com educação, use «Jeg vil gerne have…» (eu gostaria de…) e termine com «tak», que aqui faz o papel do nosso «por favor».',
        },
        communityPrompt: 'Monte o seu smørrebrød ideal em dinamarquês: diga o que há na geladeira com «Der er…», escolha três coisas de «pålæg» e use duas formas definidas («ægget», «osten»…).',
      },
      {
        id: 'da-u2-l3',
        title: 'Desafio de voz: café com bolo',
        kind: 'voz',
        words: ['kunne lide', 'kage', 'kanelsnegl', 'bageri', 'hygge', 'te'],
        cloze: [
          { sentence: 'Jeg kan godt ___ kage.', answer: 'lide', options: ['lide', 'lider', 'kan'], translation: 'Eu gosto de bolo.' },
          { sentence: 'Bageren har mange ___ i dag.', answer: 'kager', options: ['kager', 'kage', 'kagen'], translation: 'O padeiro tem muitos bolos hoje.' },
          { sentence: 'Vi ___ te og spiser kanelsnegle.', answer: 'drikker', options: ['drikker', 'drikke', 'drak'], translation: 'Nós tomamos chá e comemos rolinhos de canela.' },
        ],
        voice: {
          bot: 'Hej! Kan du lide kaffe, eller vil du hellere have te? Der er også kage.',
          botTranslation: 'Oi! Você gosta de café ou prefere chá? Também tem bolo.',
          expected: ['Jeg kan godt lide te. Og jeg vil gerne have en kanelsnegl, tak!', 'jeg kan godt lide', 'te', 'kanelsnegl'],
          hint: 'Responda com «Jeg kan godt lide…» e peça um doce com «Jeg vil gerne have…». Em «lide», o d é suave: soa quase «lí-le».',
        },
        communityPrompt: 'Escreva em dinamarquês quatro frases sobre o que você gosta e não gosta de comer e beber: duas com «Jeg kan godt lide…» e duas com «Jeg kan ikke lide…».',
      },
      {
        id: 'da-u2-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Det er lørdag, og vi hygger os med kaffe og kage. Hvad kan du lide at spise og drikke?',
          botTranslation: 'É sábado, e estamos curtindo um momento de hygge com café e bolo. O que você gosta de comer e beber?',
          expected: [
            'Jeg kan godt lide rugbrød med ost, og jeg drikker kaffe med mælk. Kagen er dejlig!',
            'jeg kan godt lide',
            'jeg drikker',
            'kagen',
          ],
          hint: 'Junte tudo: «Jeg kan godt lide…», um verbo no presente em -r («Jeg drikker…») e uma forma definida para elogiar («Kagen er dejlig!»).',
        },
        communityPrompt: 'Escreva um pequeno texto sobre uma tarde de hygge em dinamarquês: o que há na mesa («Der er…»), o que cada pessoa come e bebe (presente em -r) e do que você gosta («Jeg kan godt lide…»). Use pelo menos três formas definidas.',
      },
    ],
  },
  {
    id: 'da-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'De bicicleta por Copenhague',
    emoji: '🚲',
    card: {
      id: 'da-c3',
      title: 'O verbo sempre em segundo lugar',
      emoji: '2️⃣',
      history:
        'Copenhague é uma das cidades mais amigas da bicicleta do mundo: há mais bicicletas do que carros, e muita gente pedala para o trabalho e para a escola faça chuva, faça vento ou neve. As ciclovias costumam ficar entre a calçada e a rua, um pouco mais altas que o asfalto, e em muitos cruzamentos têm semáforo próprio. Um dos cartões-postais da cidade é Nyhavn, o «porto novo», um canal aberto entre 1671 e 1673, no reinado de Christian V, e ladeado por casas coloridas. Hans Christian Andersen morou em três endereços diferentes de Nyhavn.',
      culture_tip:
        'Na ciclovia, pedale sempre pela direita e deixe a esquerda livre para quem quer ultrapassar. Antes de parar, levante a mão; antes de virar, estique o braço para o lado. Para virar à esquerda num cruzamento, o ciclista não corta pela frente dos carros: atravessa reto, para no canto oposto e espera o sinal para seguir. À noite, farol e lanterna são obrigatórios. E não pare no meio da ciclovia para tirar foto: na hora do rush, os ciclistas vão rápido e tocam a campainha sem dó.',
      grammar_why:
        'A regra de ouro do dinamarquês é a V2: na oração principal, o verbo fica sempre na segunda posição. Se a frase começa pelo sujeito, nada muda: «Jeg cykler til arbejde». Mas, se ela começa por outra coisa, como um tempo ou um lugar, o sujeito passa para depois do verbo: «I dag cykler jeg til arbejde» (literalmente, «hoje pedalo eu para o trabalho»). Nas perguntas de sim ou não, o verbo vem primeiro («Cykler du?»); com palavra interrogativa, ela vem na frente e o verbo logo depois («Hvor bor du?»). As preposições básicas são i (em, dentro: i København), på (em, sobre: på cykelstien, e também para bairros e ilhas: på Nørrebro, på Bornholm), til (para) e fra (de, origem). O adjetivo concorda com o substantivo: en stor by, et stort hus (ganha -t com et) e store byer (ganha -e no plural).',
      grammar_examples: [
        ['I dag cykler jeg til arbejde.', 'Hoje eu vou de bicicleta para o trabalho.'],
        ['Hvor bor du? — Jeg bor på Nørrebro.', 'Onde você mora? — Eu moro em Nørrebro.'],
        ['Hun har en rød cykel og et nyt kort over byen.', 'Ela tem uma bicicleta vermelha e um mapa novo da cidade.'],
        ['Om vinteren er cykelstierne mørke og våde.', 'No inverno, as ciclovias ficam escuras e molhadas.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'da-u3-l1',
        title: 'Na ciclovia',
        kind: 'licao',
        words: ['cykel', 'cykelsti', 'cykle', 'hjelm', 'lyskryds', 'trafiklys'],
        cloze: [
          { sentence: 'Om morgenen ___ jeg til skole.', answer: 'cykler', options: ['cykler', 'cykle', 'at cykle'], translation: 'De manhã eu vou de bicicleta para a escola.' },
          { sentence: 'Min cykel er gammel, men hjelmen er ___.', answer: 'ny', options: ['ny', 'nyt', 'nye'], translation: 'A minha bicicleta é velha, mas o capacete é novo.' },
          { sentence: 'Ved trafiklyset ___ vi på grønt.', answer: 'venter', options: ['venter', 'vente', 'at vente'], translation: 'No semáforo, nós esperamos o verde.' },
        ],
        voice: {
          bot: 'Hvordan kommer du på arbejde?',
          botTranslation: 'Como você vai para o trabalho?',
          expected: ['Jeg cykler. Om morgenen cykler jeg på cykelstien til arbejde.', 'jeg cykler', 'om morgenen cykler jeg', 'cykelstien'],
          hint: 'Comece a segunda frase por «Om morgenen» e lembre-se da V2: o verbo vem antes do sujeito, «Om morgenen cykler jeg…».',
        },
        communityPrompt: 'Descreva em dinamarquês o seu caminho até o trabalho ou a escola com três frases, cada uma começando por uma expressão de tempo ou de lugar («I dag…», «Om morgenen…», «Ved lyskrydset…»), com o verbo em segundo lugar.',
      },
      {
        id: 'da-u3-l2',
        title: 'Direita, esquerda, em frente',
        kind: 'licao',
        words: ['venstre', 'højre', 'ligeud', 'hjørne', 'bro', 'kort'],
        cloze: [
          { sentence: 'Undskyld, ___ ligger Nyhavn?', answer: 'hvor', options: ['hvor', 'hvad', 'hvem'], translation: 'Com licença, onde fica Nyhavn?' },
          { sentence: 'Jeg kommer ___ Brasilien, men jeg bor i København.', answer: 'fra', options: ['fra', 'til', 'på'], translation: 'Eu venho do Brasil, mas moro em Copenhague.' },
          { sentence: 'Bageriet ligger ___ hjørnet.', answer: 'på', options: ['på', 'i', 'fra'], translation: 'A padaria fica na esquina.' },
        ],
        voice: {
          bot: 'Undskyld, hvor ligger Den Lille Havfrue?',
          botTranslation: 'Com licença, onde fica a Pequena Sereia?',
          expected: ['Du cykler ligeud, over broen, og så til venstre ved hjørnet.', 'ligeud', 'over broen', 'til venstre'],
          hint: 'Use «ligeud» (em frente), «til venstre» (à esquerda) e «til højre» (à direita). Em «højre», o h é mudo e o j soa «i»: «hói-a».',
        },
        communityPrompt: 'Explique em dinamarquês, com o mapa na mão, como ir da sua casa até uma padaria: use «ligeud», «til venstre», «til højre» e pelo menos duas preposições (i, på, til, fra).',
      },
      {
        id: 'da-u3-l3',
        title: 'Desafio de voz: um passeio em Nyhavn',
        kind: 'voz',
        words: ['havn', 'kanal', 'båd', 'turist', 'smuk', 'gammel'],
        cloze: [
          { sentence: 'Nyhavn er en ___ kanal med farverige huse.', answer: 'gammel', options: ['gammel', 'gammelt', 'gamle'], translation: 'Nyhavn é um canal antigo com casas coloridas.' },
          { sentence: 'Husene i Nyhavn er ___.', answer: 'smukke', options: ['smukke', 'smuk', 'smukt'], translation: 'As casas de Nyhavn são bonitas.' },
          { sentence: 'Om sommeren ___ mange turister i Nyhavn.', answer: 'er der', options: ['er der', 'der er', 'er det'], translation: 'No verão há muitos turistas em Nyhavn.' },
        ],
        voice: {
          bot: 'Hej! Er du turist? Hvad synes du om København?',
          botTranslation: 'Oi! Você é turista? O que você acha de Copenhague?',
          expected: ['Ja, jeg er turist fra Brasilien. København er en smuk by! I dag tager jeg en båd rundt i havnen.', 'jeg er turist', 'en smuk by', 'i dag tager jeg'],
          hint: 'Elogie a cidade com um adjetivo («en smuk by») e comece uma frase por «I dag», com o verbo antes do sujeito: «I dag tager jeg…».',
        },
        communityPrompt: 'Escreva um cartão-postal de Nyhavn em dinamarquês com quatro frases: use três adjetivos concordando com en, et e o plural (en gammel kanal, et smukt hus, farverige huse) e comece uma frase por «Om aftenen…».',
      },
      {
        id: 'da-u3-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Velkommen til København! Hvordan kommer du rundt i byen, og hvad vil du se?',
          botTranslation: 'Bem-vindo a Copenhague! Como você se locomove pela cidade, e o que quer ver?',
          expected: [
            'Jeg cykler rundt i byen. I dag cykler jeg til Nyhavn, og i morgen tager jeg bussen til Den Lille Havfrue.',
            'jeg cykler',
            'i dag cykler jeg',
            'i morgen tager jeg',
          ],
          hint: 'Mostre a V2 duas vezes: «I dag cykler jeg…» e «I morgen tager jeg…». Use «til» para o destino e «i» para dentro da cidade.',
        },
        communityPrompt: 'Planeje em dinamarquês um dia de bicicleta por Copenhague: faça duas perguntas (uma com «Hvor…?» e uma de sim ou não), responda-as, use três preposições diferentes e dois adjetivos concordando com o substantivo.',
      },
    ],
  },
  {
    id: 'da-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Era uma vez em Odense',
    emoji: '🦢',
    card: {
      id: 'da-c4',
      title: 'O passado e «den lille havfrue»',
      emoji: '📖',
      history:
        'Hans Christian Andersen nasceu em 1805 em Odense, na ilha de Fiônia, filho de um sapateiro e de uma lavadeira, numa família pobre. O pai morreu quando ele tinha 11 anos, e aos 14 o menino foi sozinho para Copenhague, sonhando ser ator. Não deu certo no teatro, mas ele virou escritor: a partir de 1835 publicou os contos de fadas, os «eventyr», que o tornaram famoso no mundo inteiro, como «Prinsessen på ærten» (A princesa e a ervilha), «Den lille havfrue» (A pequena sereia) e «Den grimme ælling» (O patinho feio). Desde 1913, uma pequena estátua de bronze da Pequena Sereia olha para o mar no porto de Copenhague. Andersen morreu em 1875, em Copenhague.',
      culture_tip:
        'Em Odense, a casa onde Andersen viveu na infância e o museu dedicado a ele atraem visitantes do mundo todo; pela cidade, siga as pegadas pintadas no chão que ligam os lugares da vida dele. O dia do seu aniversário, 2 de abril, é celebrado como o Dia Internacional do Livro Infantil. Na Dinamarca, os contos são lidos para as crianças desde cedo, e muitas expressões vêm deles: dizer que algo é «kejserens nye klæder» (a roupa nova do imperador) é dizer que todo mundo finge ver o que não existe.',
      grammar_why:
        'Para contar o que aconteceu, o dinamarquês tem o pretérito, sem diferença entre «fazia» e «fez»: os verbos fracos ganham -ede ou -te (lavede, spiste, købte), e os fortes mudam a vogal (skrive → skrev, drikke → drak, gå → gik, se → så). O perfeito usa «har» + particípio (har spist, har skrevet) ou, com verbos de movimento e de mudança, «er» (er gået, er blevet). Com adjetivo, a forma definida muda de lugar: em vez do final -en/-et, usa-se den (comum), det (neutro) ou de (plural) antes do adjetivo com -e, e o substantivo fica sem terminação: den lille havfrue, det gamle hus, de grimme ællinger. Nada de «den lille havfruen»: o dinamarquês não repete o artigo, ao contrário do sueco e do norueguês. Nos possessivos, min/mit/mine concordam com a coisa possuída (min cykel, mit hus, mine bøger). E na terceira pessoa há uma sutileza: «sin» (sit, sine) quando o dono é o próprio sujeito, e «hans» ou «hendes» quando é outra pessoa.',
      grammar_examples: [
        ['H.C. Andersen skrev mange eventyr.', 'H.C. Andersen escreveu muitos contos de fadas.'],
        ['Har du læst «Den grimme ælling»?', 'Você já leu «O patinho feio»?'],
        ['Den lille havfrue sidder på en sten ved havnen.', 'A Pequena Sereia está sentada numa pedra junto ao porto.'],
        ['Andersen elskede sin mor, men hans far døde tidligt.', 'Andersen amava a mãe, mas o pai dele morreu cedo.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'da-u4-l1',
        title: 'O menino pobre que escrevia',
        kind: 'licao',
        words: ['eventyr', 'forfatter', 'fortælle', 'skrive', 'papir', 'fattig'],
        cloze: [
          { sentence: 'Andersen ___ sine første eventyr i 1835.', answer: 'skrev', options: ['skrev', 'skrevet', 'skriver'], translation: 'Andersen escreveu os seus primeiros contos em 1835.' },
          { sentence: 'Hans familie var ___, og de boede i et lille hus i Odense.', answer: 'fattig', options: ['fattig', 'fattige', 'fattigt'], translation: 'A família dele era pobre e morava numa casinha em Odense.' },
          { sentence: 'Jeg har ___ «Den grimme ælling» tre gange.', answer: 'læst', options: ['læst', 'læste', 'læser'], translation: 'Eu já li «O patinho feio» três vezes.' },
        ],
        voice: {
          bot: 'Min bedstemor fortalte mig eventyr, da jeg var lille. Hvad med dig?',
          botTranslation: 'A minha avó me contava contos de fadas quando eu era pequeno. E você?',
          expected: ['Min mor fortalte mig også eventyr. Jeg elskede den grimme ælling.', 'min mor fortalte', 'eventyr', 'jeg elskede'],
          hint: 'Conte no pretérito: «fortalte» (contava, contou) e «elskede» (amava). Lembre-se de que o dinamarquês não distingue «contava» de «contou».',
        },
        communityPrompt: 'Conte em dinamarquês, com quatro frases no pretérito, uma história que alguém contava para você na infância: quem contava («Min … fortalte…»), onde vocês estavam e do que você mais gostava.',
      },
      {
        id: 'da-u4-l2',
        title: 'O patinho feio e a princesa',
        kind: 'licao',
        words: ['ælling', 'svane', 'and', 'grim', 'prinsesse', 'ært'],
        cloze: [
          { sentence: 'Den ___ ælling blev til en smuk svane.', answer: 'grimme', options: ['grimme', 'grim', 'grimt'], translation: 'O patinho feio virou um belo cisne.' },
          { sentence: '___ gamle and så på ællingerne.', answer: 'Den', options: ['Den', 'Det', 'De'], translation: 'A velha pata olhou para os patinhos.' },
          { sentence: 'Prinsessen sov dårligt, fordi der lå en ært under ___ madrasser.', answer: 'hendes', options: ['hendes', 'sine', 'hans'], translation: 'A princesa dormiu mal porque havia uma ervilha debaixo dos colchões dela.' },
        ],
        voice: {
          bot: 'Kender du eventyret om den grimme ælling? Hvad skete der til sidst?',
          botTranslation: 'Você conhece o conto do patinho feio? O que aconteceu no final?',
          expected: ['Ja! Den grimme ælling voksede op, og til sidst blev den en smuk svane.', 'den grimme ælling', 'blev', 'svane'],
          hint: 'Use a forma definida com adjetivo, sem dupla marca: «den grimme ælling» (nunca «den grimme ællingen»), e o pretérito «blev» (virou, tornou-se).',
        },
        communityPrompt: 'Reconte em dinamarquês, em cinco frases no pretérito, o conto «Prinsessen på ærten». Use pelo menos duas vezes a forma definida com adjetivo («den lille ært», «den rigtige prinsesse»).',
      },
      {
        id: 'da-u4-l3',
        title: 'Desafio de voz: meu, seu, dele',
        kind: 'voz',
        words: ['min', 'din', 'sin', 'hans', 'hendes', 'vores'],
        cloze: [
          { sentence: 'Det er ___ hus. Jeg bor her.', answer: 'mit', options: ['mit', 'min', 'mine'], translation: 'É a minha casa. Eu moro aqui.' },
          { sentence: 'Peter cykler til Odense med ___ søster.', answer: 'sin', options: ['sin', 'hans', 'sit'], translation: 'O Peter vai de bicicleta a Odense com a irmã (dele mesmo).' },
          { sentence: 'Peter er her, men ___ cykel står i Aarhus.', answer: 'hans', options: ['hans', 'sin', 'sit'], translation: 'O Peter está aqui, mas a bicicleta dele está em Aarhus.' },
        ],
        voice: {
          bot: 'Du har besøgt Andersens hus i Odense, ikke? Hvad så du?',
          botTranslation: 'Você visitou a casa de Andersen em Odense, não foi? O que você viu?',
          expected: ['Ja! Jeg så hans papirklip, og min veninde købte en bog med hans eventyr.', 'jeg så', 'hans', 'min veninde købte'],
          hint: 'Andersen fazia recortes de papel, os «papirklip». Use «hans» para as coisas dele e «min» para a sua amiga, e o pretérito: «så» (vi), «købte» (comprou).',
        },
        communityPrompt: 'Escreva em dinamarquês quatro frases sobre a família de um amigo, mostrando a diferença entre «sin» e «hans/hendes»: por exemplo, «Han besøger sin mor» × «Hans mor bor i Aalborg».',
      },
      {
        id: 'da-u4-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Hvad har du lavet i Odense i dag?',
          botTranslation: 'O que você fez em Odense hoje?',
          expected: [
            'Jeg har besøgt Andersens hus. Bagefter gik jeg en tur i den gamle by, og min ven købte en bog med hans eventyr.',
            'jeg har besøgt',
            'den gamle by',
            'hans eventyr',
          ],
          hint: 'Comece no perfeito («Jeg har besøgt…»), continue no pretérito («Bagefter gik jeg…»), use uma forma definida com adjetivo («den gamle by») e um possessivo.',
        },
        communityPrompt: 'Escreva em dinamarquês o diário de um dia em Odense: use o perfeito («Jeg har…») e o pretérito de pelo menos três verbos fortes (gik, så, skrev…), duas formas definidas com adjetivo e os possessivos «sin» e «hans».',
      },
    ],
  },
  {
    id: 'da-u5',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Férias no sommerhus, em Skagen',
    emoji: '🏖️',
    card: {
      id: 'da-c5',
      title: 'Pode, deve, vai: modais, imperativo e reflexivos',
      emoji: '🧭',
      history:
        'O sommerhus, a casinha de veraneio perto do mar ou da floresta, é uma instituição dinamarquesa: muitas famílias têm uma ou alugam uma por uma semana no verão. Um dos destinos mais queridos é Skagen, na ponta norte da Jutlândia, onde fica Grenen, uma língua de areia em que dois mares se encontram, o Skagerrak e o Kattegat, e dá para ver as ondas batendo de lados opostos. A areia ali anda: perto da cidade, a igreja de São Lourenço foi sendo soterrada pelas dunas e acabou fechada em 1795; hoje só a torre aparece acima da areia, e por isso ela é chamada de «Den Tilsandede Kirke», a igreja soterrada. No fim do século XIX, a luz especial de Skagen atraiu um grupo de pintores, os pintores de Skagen, como Anna e Michael Ancher e P. S. Krøyer.',
      culture_tip:
        'Na noite de 23 de junho, a véspera de São João, os dinamarqueses celebram o «sankthansaften»: acendem fogueiras na praia, põem nelas uma bruxa de pano e cantam juntos a «Midsommervisen», escrita em 1885 por Holger Drachmann, poeta e pintor ligado a Skagen. Ao alugar um sommerhus, confira se é preciso levar lençóis e toalhas e se a faxina final está incluída; o costume é deixar a casa tão limpa quanto a encontrou. E respeite as placas: em Grenen, é proibido entrar no mar, porque as correntes são perigosas.',
      grammar_why:
        'Os verbos modais vêm seguidos do infinitivo SEM «at»: jeg kan svømme, du må gå, vi vil bade. «Kan» é poder ou saber; «vil» é querer; «skal» é o que está combinado, planejado ou obrigatório; «bør» é o conselho (você deveria); «må» é ter permissão ou ter de. Atenção à armadilha: «du må ikke» é proibição (você não pode), e «não precisa» é «du behøver ikke». Para o futuro, «skal» expressa plano («Vi skal til Skagen»; repare que, com destino, nem precisa de verbo de movimento), «vil» expressa vontade ou previsão, e «kommer til at» é a previsão mais neutra («Det kommer til at regne»). O imperativo é o próprio radical do verbo, sem o -e final: bade → bad!, huske → husk!, skynde sig → skynd dig! Muitos verbos são reflexivos e pedem o pronome «se», que muda com a pessoa: jeg sætter mig, du sætter dig, han sætter sig, vi sætter os, I sætter jer, de sætter sig.',
      grammar_examples: [
        ['Vi skal til Skagen i sommerferien.', 'Nós vamos para Skagen nas férias de verão.'],
        ['Du må ikke bade her – strømmen er for stærk.', 'Você não pode entrar no mar aqui: a correnteza é forte demais.'],
        ['Tag et håndklæde med, og skynd dig!', 'Leve uma toalha e se apresse!'],
        ['Vi glæder os til at grille på stranden.', 'Estamos ansiosos para fazer churrasco na praia.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'da-u5-l1',
        title: 'Entre as dunas e o mar',
        kind: 'licao',
        words: ['sommerhus', 'strand', 'hav', 'bølge', 'klit', 'bade'],
        cloze: [
          { sentence: 'Kan du ___? — Ja, men ikke i store bølger.', answer: 'svømme', options: ['svømme', 'at svømme', 'svømmer'], translation: 'Você sabe nadar? — Sei, mas não em ondas grandes.' },
          { sentence: 'Strømmen er farlig, så man må ikke ___ ved Grenen.', answer: 'bade', options: ['bade', 'at bade', 'bader'], translation: 'A correnteza é perigosa, então não se pode entrar no mar em Grenen.' },
          { sentence: 'Vi ___ til stranden i morgen – det har vi aftalt.', answer: 'skal', options: ['skal', 'kan', 'bør'], translation: 'Nós vamos à praia amanhã: já combinamos.' },
        ],
        voice: {
          bot: 'Hvad skal vi lave i sommerhuset i morgen?',
          botTranslation: 'O que vamos fazer na casa de veraneio amanhã?',
          expected: ['Vi skal gå en tur i klitterne, og om eftermiddagen kan vi bade i havet.', 'vi skal', 'kan vi bade', 'klitterne'],
          hint: 'Use «skal» para o plano e «kan» para a possibilidade, sempre com o infinitivo sem «at». Se começar por «om eftermiddagen», não esqueça a V2: «om eftermiddagen kan vi…».',
        },
        communityPrompt: 'Planeje em dinamarquês três dias num sommerhus: para cada dia, uma frase com «skal» (o plano) e outra com «kan» ou «vil» (uma possibilidade ou vontade).',
      },
      {
        id: 'da-u5-l2',
        title: 'Relaxar e se divertir',
        kind: 'licao',
        words: ['sætte sig', 'skynde sig', 'glæde sig', 'more sig', 'slappe af', 'klæde sig på'],
        cloze: [
          { sentence: 'Vi ___ os til ferien.', answer: 'glæder', options: ['glæder', 'glæde', 'glad'], translation: 'Estamos ansiosos pelas férias.' },
          { sentence: 'Børnene morer ___ på stranden.', answer: 'sig', options: ['sig', 'dem', 'os'], translation: 'As crianças se divertem na praia.' },
          { sentence: 'Kom og sæt ___ her ved bålet!', answer: 'dig', options: ['dig', 'sig', 'du'], translation: 'Venha sentar aqui perto da fogueira!' },
        ],
        voice: {
          bot: 'Skynd dig! Vi skal spise om fem minutter.',
          botTranslation: 'Apresse-se! Vamos comer daqui a cinco minutos.',
          expected: ['Ja, ja, jeg skynder mig! Jeg klæder mig bare på.', 'jeg skynder mig', 'jeg klæder mig', 'på'],
          hint: 'O pronome reflexivo acompanha a pessoa: «jeg skynder mig», «du skynder dig». Em «klæde sig på», o «på» vai para o fim: «Jeg klæder mig på».',
        },
        communityPrompt: 'Escreva em dinamarquês cinco frases sobre um dia de férias com a família, cada uma com um verbo reflexivo e um sujeito diferente: jeg … mig, du … dig, han … sig, vi … os, de … sig.',
      },
      {
        id: 'da-u5-l3',
        title: 'Desafio de voz: a fogueira de São João',
        kind: 'voz',
        words: ['pas på', 'grille', 'is', 'vandre', 'telt', 'huske'],
        cloze: [
          { sentence: '___ at tage solcreme med!', answer: 'Husk', options: ['Husk', 'Huske', 'Husker'], translation: 'Lembre-se de levar protetor solar!' },
          { sentence: 'I aften skal vi ___ på stranden.', answer: 'grille', options: ['grille', 'griller', 'at grille'], translation: 'Hoje à noite vamos fazer churrasco na praia.' },
          { sentence: '___ på! Bålet er meget varmt.', answer: 'Pas', options: ['Pas', 'Passer', 'At passe'], translation: 'Cuidado! A fogueira está muito quente.' },
        ],
        voice: {
          bot: 'I morgen er det sankthansaften. Hvad skal vi tage med til stranden?',
          botTranslation: 'Amanhã é a véspera de São João. O que vamos levar para a praia?',
          expected: ['Vi skal have pølser med til grillen, og husk is til børnene!', 'vi skal', 'husk', 'is'],
          hint: 'Diga o plano com «Vi skal…» e dê uma ordem amigável com o imperativo, que é o verbo sem o -e final: «husk» (lembre), «tag» (leve).',
        },
        communityPrompt: 'Escreva em dinamarquês uma lista de cinco instruções para a festa de sankthans na praia, todas no imperativo, incluindo uma proibição com «Du må ikke…» e um conselho com «Du bør…».',
      },
      {
        id: 'da-u5-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Velkommen til sommerhuset! Hvad vil du lave i ferien, og hvad skal vi huske?',
          botTranslation: 'Bem-vindo à casa de veraneio! O que você quer fazer nas férias, e do que precisamos lembrar?',
          expected: [
            'Jeg vil slappe af og bade i havet. I morgen skal vi vandre til Grenen, og vi må huske vand og solcreme. Skynd dig, bølgerne venter!',
            'jeg vil slappe af',
            'i morgen skal vi',
            'vi må huske',
            'skynd dig',
          ],
          hint: 'Junte tudo: um desejo com «vil», um plano com «skal» (com a V2 depois de «I morgen»), uma obrigação com «må», um reflexivo e um imperativo («Skynd dig!»).',
        },
        communityPrompt: 'Escreva em dinamarquês uma mensagem para amigos que vão passar uma semana com você num sommerhus em Skagen: o que vocês vão fazer (skal, vil), o que se pode e não se pode fazer (kan, må, må ikke), três ordens no imperativo e dois verbos reflexivos.',
      },
    ],
  },
  {
    id: 'da-u6',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Vento e mar: a costa dinamarquesa',
    emoji: '🌊',
    card: {
      id: 'da-c6',
      title: 'Onde os dois mares se encontram',
      emoji: '🏖️',
      history:
        'Nenhum ponto da Dinamarca fica a mais de uns 50 quilômetros do mar, e o país tem milhares de quilômetros de litoral. Em Grenen, a ponta norte da Jutlândia, perto de Skagen, dá para ver as ondas do Skagerrak e do Kattegat se chocando. Ali perto ficam a Råbjerg Mile, uma duna que anda com o vento, e a Den Tilsandede Kirke, a igreja que a areia foi cobrindo até ser fechada em 1795: hoje só a torre aparece. No fim do século XIX, a luz de Skagen atraiu um grupo de pintores, os Skagensmalerne, como P. S. Krøyer e Anna Ancher. No outro extremo do país, na ilha de Møn, as falésias brancas de giz de Møns Klint passam dos 100 metros de altura.',
      culture_tip:
        'O verão dinamarquês é curto, e muitas famílias passam as férias num sommerhus, a casa de veraneio perto da praia. Os dinamarqueses vão à praia com vento e até com chuva, e no inverno os mais corajosos praticam a vinterbadning, o banho de mar gelado. Depois de uma tempestade de inverno, vale procurar rav (âmbar) na areia da costa oeste. E confira a vejrudsigt: no litoral o tempo muda depressa, e os dinamarqueses repetem «Der findes ikke dårligt vejr, kun dårligt tøj» (não existe tempo ruim, só roupa ruim).',
      grammar_why:
        'Na oração principal, o «ikke» vem depois do verbo: «Jeg bader ikke i dag». Na subordinada (depois de at, fordi, når, da, hvis, om, selvom), o «ikke» e advérbios como «aldrig» e «altid» vêm ANTES do verbo: «fordi jeg ikke tør» — a mesma ordem do português («porque eu não tenho coragem»). Se a subordinada abre a frase, a principal inverte por causa do V2: «Når det blæser, bliver vi hjemme». «Når» serve para o presente e para o que se repete; «da» é para uma vez só no passado. «Om» é o «se» da pergunta indireta («Jeg ved ikke, om…»); «hvis» é o «se» de condição. O mais-que-perfeito é «havde» + particípio, como o nosso «tinha feito»: «Vi havde gået i to timer, da det begyndte at regne»; com verbos de movimento com destino, entra «var»: «Solen var gået ned».',
      grammar_examples: [
        ['Vi tager til stranden, selvom det blæser.', 'A gente vai à praia mesmo que esteja ventando.'],
        ['Hun siger, at hun aldrig har badet i Vesterhavet.', 'Ela diz que nunca tomou banho no Mar do Norte.'],
        ['Når solen skinner, er hele Danmark på stranden.', 'Quando faz sol, a Dinamarca inteira vai para a praia.'],
        ['Vi havde gået i to timer, da vi nåede Grenen.', 'A gente tinha andado duas horas quando chegou a Grenen.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'da-u6-l1',
        title: 'Em Grenen, onde os mares se encontram',
        kind: 'licao',
        words: ['kyst', 'hav', 'bølge', 'strand', 'klit', 'vandkant'],
        cloze: [
          {
            sentence: 'Man må ikke bade ved Grenen, fordi det ___ sikkert.',
            answer: 'ikke er',
            options: ['ikke er', 'er ikke', 'ikke var'],
            translation: 'Não se pode tomar banho em Grenen, porque não é seguro.',
          },
          {
            sentence: 'Stil dig i vandkanten, ___ du vil se de to have mødes.',
            answer: 'hvis',
            options: ['hvis', 'om', 'at'],
            translation: 'Fique na beira da água se quiser ver os dois mares se encontrarem.',
          },
          {
            sentence: 'Vi ___ allerede set bølgerne fra klitten, da solen gik ned.',
            answer: 'havde',
            options: ['havde', 'har', 'var'],
            translation: 'A gente já tinha visto as ondas lá da duna quando o sol se pôs.',
          },
        ],
        voice: {
          bot: 'Hej! Skal du også ud til Grenen i dag?',
          botTranslation: 'Oi! Você também vai até Grenen hoje?',
          expected: [
            'Ja, men jeg bader ikke, fordi jeg ikke kan lide kolde bølger.',
            'fordi jeg ikke',
            'bader ikke',
            'kolde bølger',
          ],
          hint: 'Explique com «fordi» e lembre: na subordinada o «ikke» vem antes do verbo (fordi jeg ikke kan…).',
        },
        communityPrompt:
          'Descreva uma praia de que você gosta em 3 frases: uma com «fordi … ikke», uma com «når» e uma no mais-que-perfeito (havde + particípio).',
      },
      {
        id: 'da-u6-l2',
        title: 'Vento, neblina e previsão do tempo',
        kind: 'licao',
        words: ['vind', 'storm', 'blæsevejr', 'tåge', 'vejrudsigt', 'byge'],
        cloze: [
          {
            sentence: 'Ifølge vejrudsigten kommer der storm i aften, så vi ved ikke, ___ færgen sejler.',
            answer: 'om',
            options: ['om', 'hvis', 'at'],
            translation: 'Segundo a previsão do tempo, vai ter tempestade hoje à noite, então a gente não sabe se a balsa vai sair.',
          },
          {
            sentence: 'Jeg tager en jakke med, fordi jeg ___ fryse i blæsevejret.',
            answer: 'ikke vil',
            options: ['ikke vil', 'vil ikke', 'ikke ville'],
            translation: 'Eu levo uma jaqueta, porque não quero passar frio na ventania.',
          },
          {
            sentence: '___ vi var på Bornholm sidste år, var der tåge hver morgen.',
            answer: 'Da',
            options: ['Da', 'Når', 'Om'],
            translation: 'Quando a gente esteve em Bornholm no ano passado, tinha neblina toda manhã.',
          },
        ],
        voice: {
          bot: 'Det blæser helt vildt. Skal vi stadig cykle ud til stranden?',
          botTranslation: 'Está ventando demais. A gente ainda vai de bicicleta até a praia?',
          expected: [
            'Ja, hvis vejrudsigten ikke lover storm, cykler vi alligevel.',
            'hvis vejrudsigten ikke',
            'cykler vi',
            'alligevel',
          ],
          hint: 'Comece com «hvis» e ponha o «ikke» antes do verbo; depois a principal inverte (cykler vi).',
        },
        communityPrompt:
          'Escreva a previsão do tempo de um fim de semana no litoral em 3 frases com subordinadas (når, hvis, selvom), pondo o «ikke» antes do verbo em pelo menos uma.',
      },
      {
        id: 'da-u6-l3',
        title: 'Desafio de voz: verão no sommerhus',
        kind: 'voz',
        words: ['rav', 'muslingeskal', 'tidevand', 'klint', 'vinterbadning', 'sommerhus'],
        cloze: [
          {
            sentence: 'Vi fandt rav på stranden, fordi der ___ været storm om natten.',
            answer: 'havde',
            options: ['havde', 'har', 'var'],
            translation: 'A gente achou âmbar na praia porque tinha tido tempestade à noite.',
          },
          {
            sentence: 'Min mormor siger, at hun ___ vinterbadning.',
            answer: 'aldrig har prøvet',
            options: ['aldrig har prøvet', 'har aldrig prøvet', 'aldrig prøvet har'],
            translation: 'Minha avó diz que nunca experimentou o banho de mar no inverno.',
          },
          {
            sentence: 'Børnene samlede muslingeskaller ved Vadehavet, ___ der var ebbe.',
            answer: 'mens',
            options: ['mens', 'hvis', 'om'],
            translation: 'As crianças catavam conchas no Mar de Wadden enquanto a maré estava baixa.',
          },
        ],
        voice: {
          bot: 'Vil du med i vandet? Det er kun fire grader!',
          botTranslation: 'Quer entrar na água comigo? Está só quatro graus!',
          expected: [
            'Nej tak, jeg bliver på stranden, fordi jeg ikke tør bade, når vandet er så koldt.',
            'fordi jeg ikke tør',
            'når vandet',
            'nej tak',
          ],
          hint: 'Recuse com «fordi jeg ikke tør…» e acrescente uma subordinada com «når».',
        },
        communityPrompt:
          'Grave-se contando um dia na praia: o que vocês tinham feito antes (havde + particípio), o que aconteceu «da…» e o que vocês fizeram «selvom…».',
      },
      {
        id: 'da-u6-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Fortæl om den bedste tur, du har haft ved havet. Hvad var der sket, før I kom hjem?',
          botTranslation: 'Conte sobre o melhor passeio que você já fez à beira-mar. O que tinha acontecido antes de vocês voltarem para casa?',
          expected: [
            'Vi havde gået langs kysten hele dagen, og selvom det blæste, var vi glade, fordi vi ikke havde set så smukke klitter før.',
            'havde gået',
            'selvom det blæste',
            'fordi vi ikke',
            'var vi glade',
          ],
          hint: 'Junte o mais-que-perfeito (havde gået), «selvom» com a inversão depois (var vi) e uma subordinada com «ikke» antes do verbo.',
        },
        communityPrompt:
          'Escreva um relato de 5 frases de um fim de semana no litoral dinamarquês: use at, når ou da, fordi, selvom e hvis, com pelo menos dois «ikke» em subordinadas e um verbo no mais-que-perfeito.',
      },
    ],
  },
  {
    id: 'da-u7',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Saúde: læge, lægevagt e apotek',
    emoji: '🩺',
    card: {
      id: 'da-c7',
      title: 'Cuidar da saúde à dinamarquesa',
      emoji: '💊',
      history:
        'O sistema de saúde dinamarquês é público e pago pelos impostos: a consulta com o clínico e o hospital não custam nada ao paciente. Todo morador registrado no CPR recebe o sundhedskort, o «cartão amarelo», e tem um clínico geral fixo, a egen læge, que é a porta de entrada do sistema: é ele quem encaminha para o especialista. O Rigshospitalet, o grande hospital de Copenhague, tem origem no Frederiks Hospital, aberto em 1757. E em 1903 o médico dinamarquês Niels Finsen ganhou o Prêmio Nobel de Medicina pelo tratamento de doenças com luz.',
      culture_tip:
        'Para ir ao médico, primeiro você liga ou marca horário no lægehus, geralmente de manhã cedo. À noite e no fim de semana, quem atende é a lægevagt; na região de Copenhague, o número é o 1813, e é preciso ligar antes de ir ao pronto-socorro. Em emergência, o número é o 112. Os remédios da farmácia não são de graça: o Estado paga uma parte, que cresce conforme o quanto você gasta no ano. A receita é eletrônica: no apotek, basta mostrar o sundhedskort.',
      grammar_why:
        'A passiva tem duas formas. Com -s, para o que é geral, rotina ou regra: «Recepten sendes til apoteket» (a receita é enviada para a farmácia), «Medicinen skal tages to gange om dagen». Com «blive» + particípio, para um fato concreto, um acontecimento: «Han blev kørt til skadestuen» (ele foi levado ao pronto-socorro). Quem faz a ação entra com «af»: «Jeg blev undersøgt af lægen». Os verbos com partícula mudam de sentido, e a partícula leva o acento: «falde» é cair, mas «falde om» é desmaiar, desabar; «ringe» é ligar, e «ringe op» é telefonar para alguém. O particípio também serve de adjetivo: «et brækket ben» (uma perna quebrada), «den ordinerede medicin» (o remédio receitado).',
      grammar_examples: [
        ['Recepten sendes direkte til apoteket.', 'A receita é enviada direto para a farmácia.'],
        ['Hun blev undersøgt af lægen i går.', 'Ela foi examinada pelo médico ontem.'],
        ['Tabletterne skal tages med vand.', 'Os comprimidos devem ser tomados com água.'],
        ['Han faldt om og blev kørt til skadestuen.', 'Ele desmaiou e foi levado ao pronto-socorro.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'da-u7-l1',
        title: 'No lægehus',
        kind: 'licao',
        words: ['lægehus', 'bestille tid', 'konsultation', 'venteværelse', 'recept', 'sundhedskort'],
        cloze: [
          {
            sentence: 'I venteværelset ___ patienterne ind efter tur.',
            answer: 'kaldes',
            options: ['kaldes', 'kalder', 'kaldte'],
            translation: 'Na sala de espera, os pacientes são chamados por ordem.',
          },
          {
            sentence: 'Jeg ___ undersøgt af lægen i morges.',
            answer: 'blev',
            options: ['blev', 'har', 'bliver'],
            translation: 'Eu fui examinado pelo médico hoje de manhã.',
          },
          {
            sentence: 'Lægen ringer dig ___ i morgen med svaret på blodprøven.',
            answer: 'op',
            options: ['op', 'ud', 'af'],
            translation: 'O médico te liga amanhã com o resultado do exame de sangue.',
          },
        ],
        voice: {
          bot: 'Lægehuset, goddag. Hvad kan jeg hjælpe med?',
          botTranslation: 'Consultório médico, bom dia. Em que posso ajudar?',
          expected: [
            'Goddag, jeg vil gerne bestille tid. Jeg har haft feber i tre dage og vil gerne undersøges.',
            'bestille tid',
            'haft feber',
            'undersøges',
          ],
          hint: 'Peça um horário e use a passiva com -s: «vil gerne undersøges» (quero ser examinado).',
        },
        communityPrompt:
          'Escreva 3 frases sobre uma ida ao médico: uma na passiva com -s (sendes, tages), uma com «blev» + particípio e uma com um verbo com partícula (ringe op, falde om).',
      },
      {
        id: 'da-u7-l2',
        title: 'Emergência: lægevagt e skadestue',
        kind: 'licao',
        words: ['lægevagt', 'skadestue', 'alarmcentral', 'ambulance', 'knoglebrud', 'gips'],
        cloze: [
          {
            sentence: 'Hun faldt af cyklen, og armen ___ lagt i gips.',
            answer: 'blev',
            options: ['blev', 'bliver', 'har'],
            translation: 'Ela caiu da bicicleta, e o braço foi engessado.',
          },
          {
            sentence: 'Når man ringer 112, ___ opkaldet af alarmcentralen.',
            answer: 'besvares',
            options: ['besvares', 'besvarer', 'besvaret'],
            translation: 'Quando você liga para o 112, a chamada é atendida pela central de emergência.',
          },
          {
            sentence: 'Manden faldt ___ på gaden, og der blev ringet efter en ambulance.',
            answer: 'om',
            options: ['om', 'op', 'ind'],
            translation: 'O homem desmaiou na rua, e chamaram uma ambulância.',
          },
        ],
        voice: {
          bot: 'Alarmcentralen. Hvad er der sket?',
          botTranslation: 'Central de emergência. O que aconteceu?',
          expected: [
            'En mand er faldet om på gaden. Han trækker vejret, men han skal hentes af en ambulance med det samme.',
            'faldet om',
            'trækker vejret',
            'skal hentes',
          ],
          hint: 'Diga o que aconteceu (er faldet om) e use a passiva: «skal hentes» (precisa ser buscado).',
        },
        communityPrompt:
          'Imagine que um amigo se machucou em Copenhague. Escreva 3 frases: o que aconteceu (blev + particípio), para onde ligar (lægevagt ou 112) e o que foi feito no pronto-socorro.',
      },
      {
        id: 'da-u7-l3',
        title: 'Desafio de voz: no apotek',
        kind: 'voz',
        words: ['apotek', 'pille', 'smertestillende', 'bivirkning', 'hostesaft', 'dosis'],
        cloze: [
          {
            sentence: 'Pillerne skal ___ efter måltidet.',
            answer: 'tages',
            options: ['tages', 'tage', 'taget'],
            translation: 'Os comprimidos devem ser tomados depois da refeição.',
          },
          {
            sentence: 'Smertestillende medicin kan ___ uden recept på apoteket.',
            answer: 'købes',
            options: ['købes', 'købe', 'købt'],
            translation: 'Analgésico pode ser comprado sem receita na farmácia.',
          },
          {
            sentence: 'Kontakt lægen, hvis du får bivirkninger af den ___ medicin.',
            answer: 'ordinerede',
            options: ['ordinerede', 'ordinere', 'ordinerer'],
            translation: 'Procure o médico se você tiver efeitos colaterais com o remédio receitado.',
          },
        ],
        voice: {
          bot: 'Goddag. Hvad kan jeg hjælpe med?',
          botTranslation: 'Bom dia. Em que posso ajudar?',
          expected: [
            'Jeg har hoste. Kan hostesaft købes uden recept, og hvor tit skal den tages?',
            'uden recept',
            'købes',
            'skal den tages',
          ],
          hint: 'Pergunte com a passiva com -s: «kan … købes» (pode ser comprado) e «skal … tages» (deve ser tomado).',
        },
        communityPrompt:
          'Grave-se no apotek: diga o que você sente, pergunte se um remédio pode ser comprado sem receita (kan … købes) e como ele deve ser tomado (skal … tages).',
      },
      {
        id: 'da-u7-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Fortæl om en gang, du kom til skade. Hvad skete der, og hvordan blev du behandlet?',
          botTranslation: 'Conte sobre uma vez em que você se machucou. O que aconteceu e como você foi tratado?',
          expected: [
            'Jeg faldt af cyklen og brækkede armen. Jeg blev kørt til skadestuen, hvor armen blev røntgenfotograferet og lagt i gips.',
            'faldt af cyklen',
            'blev kørt',
            'skadestuen',
            'lagt i gips',
          ],
          hint: 'Conte em ordem: o acidente (faldt af…), a passiva com «blev» (blev kørt, blev lagt i gips) e onde isso aconteceu.',
        },
        communityPrompt:
          'Escreva 5 frases sobre o sistema de saúde dinamarquês para um amigo brasileiro: use a passiva com -s pelo menos duas vezes, «blev» + particípio uma vez e dois verbos com partícula.',
      },
    ],
  },
  {
    id: 'da-u8',
    level: 'B1.4',
    cefr: 'B1',
    title: 'H. C. Andersen: o patinho que virou cisne',
    emoji: '🦢',
    card: {
      id: 'da-c8',
      title: 'O filho do sapateiro de Odense',
      emoji: '📖',
      history:
        'Hans Christian Andersen nasceu em Odense, na ilha de Fiônia, em 2 de abril de 1805, filho de um sapateiro e de uma lavadeira. Aos 14 anos, foi sozinho para Copenhague sonhando ser ator; acabou famoso pelos contos de fadas, os eventyr, como «Prinsessen på ærten» (1835), «Den lille havfrue» (1837) e «Den grimme ælling» (1843). Seus contos foram traduzidos para mais de cem línguas, e o dia do seu nascimento, 2 de abril, é o Dia Internacional do Livro Infantil. A estátua da Pequena Sereia, de Edvard Eriksen, está na Langelinie, em Copenhague, desde 1913. Andersen morreu em Copenhague em 1875.',
      culture_tip:
        'Em Odense dá para visitar a casinha amarela onde, segundo a tradição, Andersen nasceu, e o museu dedicado a ele. Em Nyhavn, as casas coloridas dos números 18, 20 e 67 tiveram Andersen como morador. Para os dinamarqueses, os contos não são só coisa de criança: «Kejserens nye klæder» (A roupa nova do imperador) virou expressão para quem finge ver o que não existe. E prepare-se: a Pequena Sereia é bem menor do que muitos turistas imaginam.',
      grammar_why:
        'O comparativo e o superlativo se formam com -ere e -est: «smuk, smukkere, smukkest», «grim, grimmere, grimmest». Alguns são irregulares, como em português: «god, bedre, bedst», «gammel, ældre, ældst», «lille, mindre, mindst», «stor, større, størst». Palavras longas e particípios usam «mere» e «mest»: «mere berømt, mest berømt». «End» é o «do que»: «Svanen er smukkere end ællingen». Com a forma definida, o superlativo ganha -e: «den smukkeste svane». O relativo é «som» (sujeito ou objeto) ou «der» (só sujeito); «hvis» é o nosso «cujo»: «forfatteren, hvis eventyr alle kender». No discurso indireto, o verbo recua no tempo e o «ikke» vai para antes do verbo: «Hun sagde, at hun ikke kunne sove». E numa pergunta indireta em que a hv-palavra é o sujeito entra um «der»: «Ved du, hvem der skrev det?»',
      grammar_examples: [
        ['Den grimme ælling blev den smukkeste svane af dem alle.', 'O patinho feio virou o cisne mais bonito de todos.'],
        ['Andersen er den mest berømte danske forfatter i verden.', 'Andersen é o escritor dinamarquês mais famoso do mundo.'],
        ['Det er et eventyr om en prinsesse, der ikke kunne sove på en ært.', 'É um conto sobre uma princesa que não conseguia dormir em cima de uma ervilha.'],
        ['Hun sagde, at hun ikke havde lukket et øje hele natten.', 'Ela disse que não tinha pregado o olho a noite inteira.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'da-u8-l1',
        title: 'Odense: o menino pobre que ficou famoso',
        kind: 'licao',
        words: ['eventyr', 'forfatter', 'fattig', 'berømt', 'bog', 'historie'],
        cloze: [
          {
            sentence: 'Andersen var ___ end de fleste børn i Odense.',
            answer: 'fattigere',
            options: ['fattigere', 'fattigste', 'fattig'],
            translation: 'Andersen era mais pobre do que a maioria das crianças de Odense.',
          },
          {
            sentence: 'Andersen er den ___ forfatter, Danmark har haft.',
            answer: 'mest berømte',
            options: ['mest berømte', 'mest berømt', 'mere berømte'],
            translation: 'Andersen é o escritor mais famoso que a Dinamarca já teve.',
          },
          {
            sentence: 'Det er en forfatter, ___ bøger er oversat til mere end hundrede sprog.',
            answer: 'hvis',
            options: ['hvis', 'som', 'der'],
            translation: 'É um escritor cujos livros foram traduzidos para mais de cem línguas.',
          },
        ],
        voice: {
          bot: 'Hvem er den mest kendte danske forfatter, synes du?',
          botTranslation: 'Quem é o escritor dinamarquês mais conhecido, na sua opinião?',
          expected: [
            'Det er H. C. Andersen, som skrev eventyr, der er kendt i hele verden.',
            'H. C. Andersen',
            'som skrev',
            'der er kendt',
          ],
          hint: 'Responda com dois relativos: «som skrev…» e «der er kendt…».',
        },
        communityPrompt:
          'Apresente um escritor ou escritora de que você gosta em 3 frases: uma com comparativo (end), uma com superlativo (den mest… ou -este) e uma com relativo (som, der ou hvis).',
      },
      {
        id: 'da-u8-l2',
        title: 'O patinho feio',
        kind: 'licao',
        words: ['ælling', 'svane', 'grim', 'smuk', 'lykkelig', 'modig'],
        cloze: [
          {
            sentence: 'Ællingen var ___ end de andre ællinger.',
            answer: 'grimmere',
            options: ['grimmere', 'grimmeste', 'grimt'],
            translation: 'O patinho era mais feio do que os outros patinhos.',
          },
          {
            sentence: 'Til sidst var han den ___ svane i haven.',
            answer: 'smukkeste',
            options: ['smukkeste', 'smukkere', 'smukkest'],
            translation: 'No fim, ele era o cisne mais bonito do jardim.',
          },
          {
            sentence: 'Ællingen spurgte, ___ de andre fugle ville lege med ham.',
            answer: 'om',
            options: ['om', 'at', 'hvis'],
            translation: 'O patinho perguntou se os outros pássaros queriam brincar com ele.',
          },
        ],
        voice: {
          bot: 'Hvorfor er eventyret om den grimme ælling så populært, tror du?',
          botTranslation: 'Por que você acha que o conto do patinho feio faz tanto sucesso?',
          expected: [
            'Fordi den grimme ælling, som ingen kunne lide, blev den smukkeste svane af dem alle.',
            'som ingen kunne lide',
            'den smukkeste svane',
            'fordi',
          ],
          hint: 'Use um relativo com «som» e um superlativo com a forma definida (den smukkeste).',
        },
        communityPrompt:
          'Reconte «Den grimme ælling» em 4 frases, com pelo menos um comparativo (grimmere, smukkere), um superlativo e um relativo (som ou der).',
      },
      {
        id: 'da-u8-l3',
        title: 'Desafio de voz: a princesa e a ervilha',
        kind: 'voz',
        words: ['prinsesse', 'ært', 'konge', 'klog', 'dum', 'gammel'],
        cloze: [
          {
            sentence: 'Den gamle dronning var ___ end kongen og prinsen.',
            answer: 'klogere',
            options: ['klogere', 'klogest', 'kloge'],
            translation: 'A velha rainha era mais esperta do que o rei e o príncipe.',
          },
          {
            sentence: 'Prinsessen fortalte, at hun ___ sovet hele natten.',
            answer: 'ikke havde',
            options: ['ikke havde', 'havde ikke', 'ikke har'],
            translation: 'A princesa contou que não tinha dormido a noite inteira.',
          },
          {
            sentence: 'Kongen spurgte, hvem ___ havde lagt en ært i sengen.',
            answer: 'der',
            options: ['der', 'som', 'hvis'],
            translation: 'O rei perguntou quem tinha posto uma ervilha na cama.',
          },
        ],
        voice: {
          bot: 'Hvad sagde prinsessen om morgenen?',
          botTranslation: 'O que a princesa disse de manhã?',
          expected: [
            'Hun sagde, at hun ikke havde sovet, fordi der lå noget hårdt i sengen.',
            'hun sagde, at',
            'ikke havde sovet',
            'noget hårdt',
          ],
          hint: 'Passe para o discurso indireto: «Hun sagde, at…», recue o tempo (havde sovet) e ponha o «ikke» antes do verbo.',
        },
        communityPrompt:
          'Grave-se recontando o que a princesa, o rei e a rainha disseram, em discurso indireto: «Hun sagde, at…», «Kongen spurgte, om…», com o verbo recuado no tempo.',
      },
      {
        id: 'da-u8-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Hvilket eventyr af Andersen kan du bedst lide, og hvorfor?',
          botTranslation: 'De qual conto de Andersen você gosta mais, e por quê?',
          expected: [
            'Jeg kan bedst lide Den grimme ælling, som handler om en fugl, der er grimmere end de andre, men som bliver den smukkeste svane.',
            'kan bedst lide',
            'som handler om',
            'grimmere end',
            'den smukkeste',
          ],
          hint: 'Junte um superlativo irregular (bedst), relativos (som, der) e um comparativo com «end».',
        },
        communityPrompt:
          'Escreva 5 frases comparando dois contos de Andersen: use comparativo e superlativo (inclusive um irregular, como bedre ou ældst), «som», «der» e «hvis», e uma frase em discurso indireto.',
      },
    ],
  },
  {
    id: 'da-u9',
    level: 'B2.1',
    cefr: 'B2',
    title: 'E se…? Vento, bicicletas e um país mais verde',
    emoji: '🌬️',
    card: {
      id: 'da-c9',
      title: 'O país das turbinas e das ciclovias',
      emoji: '🚲',
      history:
        'Nos anos 1890, o professor Poul la Cour fez em Askov, na Jutlândia, experiências pioneiras para gerar eletricidade com o vento. Em 1991, a Dinamarca inaugurou em Vindeby, perto da ilha de Lolland, o primeiro parque eólico no mar do mundo. Hoje o vento produz algo em torno de metade da eletricidade do país. A ilha de Samsø ficou conhecida por produzir mais energia renovável do que consome. E Copenhague virou símbolo da bicicleta: boa parte dos moradores vai pedalando para o trabalho e a escola, por ciclovias largas e separadas dos carros.',
      culture_tip:
        'Nas ciclovias dinamarquesas há regras não escritas: pedale pela direita, ultrapasse pela esquerda e levante a mão antes de parar. Não freie de repente nem fique pedalando devagar lado a lado com um amigo, bloqueando quem vem atrás. A ladcykel, a bicicleta de carga, é usada para levar crianças e compras. No inverno os dinamarqueses continuam pedalando, com chuva ou vento: é só ter a roupa certa.',
      grammar_why:
        'Para hipóteses, o dinamarquês usa o passado: «Hvis jeg havde mere tid, ville jeg cykle til arbejde» (se eu tivesse mais tempo, iria de bicicleta para o trabalho). É o mesmo movimento do português com o «tivesse» e o «iria»: «hvis» + passado e «ville» (ou «kunne», «skulle») + infinitivo. Para o que não aconteceu, entra o mais-que-perfeito: «Hvis jeg havde vidst det, ville jeg have taget toget» (se eu soubesse, teria pegado o trem). Na fala, a principal muitas vezes vira mais-que-perfeito também: «Hvis jeg havde vidst det, var jeg blevet hjemme». Dá para dispensar o «hvis» invertendo o verbo: «Havde jeg vidst det, …». «Skulle» dá o «se por acaso»: «Skulle det regne, tager vi toget». E «gid» + passado é o nosso «quem dera»: «Gid det var sommer!»',
      grammar_examples: [
        ['Hvis jeg boede i København, ville jeg cykle overalt.', 'Se eu morasse em Copenhague, iria de bicicleta para todo lado.'],
        ['Hvis det ikke blæste så meget, kunne vi cykle til stranden.', 'Se não ventasse tanto, a gente poderia ir de bicicleta até a praia.'],
        ['Hvis jeg havde vidst det, ville jeg have taget toget.', 'Se eu soubesse disso, teria pegado o trem.'],
        ['Havde vi taget toget, var vi kommet til tiden.', 'Se a gente tivesse pegado o trem, teria chegado na hora.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'da-u9-l1',
        title: 'O vento que ilumina o país',
        kind: 'licao',
        words: ['vindmølle', 'energi', 'strøm', 'elektricitet', 'solcelle', 'klima'],
        cloze: [
          {
            sentence: 'Hvis det ikke blæste så meget i Danmark, ___ vi få mindre strøm fra vindmøllerne.',
            answer: 'ville',
            options: ['ville', 'vil', 'skal'],
            translation: 'Se não ventasse tanto na Dinamarca, a gente teria menos eletricidade das turbinas.',
          },
          {
            sentence: 'Hvis jeg ___ et hus, ville jeg sætte solceller på taget.',
            answer: 'havde',
            options: ['havde', 'har', 'have'],
            translation: 'Se eu tivesse uma casa, poria painéis solares no telhado.',
          },
          {
            sentence: 'Hvis vi havde slukket lyset, ville elregningen have ___ mindre.',
            answer: 'været',
            options: ['været', 'være', 'var'],
            translation: 'Se a gente tivesse apagado a luz, a conta de luz teria sido menor.',
          },
        ],
        voice: {
          bot: 'Hvad ville du gøre, hvis du var klimaminister i en dag?',
          botTranslation: 'O que você faria se fosse ministro do clima por um dia?',
          expected: [
            'Hvis jeg var klimaminister, ville jeg bygge flere vindmøller og sætte solceller på alle skoler.',
            'hvis jeg var',
            'ville jeg',
            'vindmøller',
          ],
          hint: 'Comece com «Hvis jeg var…» e, na principal, inverta: «ville jeg» + infinitivo.',
        },
        communityPrompt:
          'Escreva 3 frases sobre energia na sua cidade com «hvis» + passado e «ville» ou «kunne» + infinitivo, e mais uma com «hvis jeg havde…, ville jeg have…».',
      },
      {
        id: 'da-u9-l2',
        title: 'Copenhague sobre duas rodas',
        kind: 'licao',
        words: ['cykel', 'cykelsti', 'cyklist', 'ladcykel', 'hjelm', 'cykle'],
        cloze: [
          {
            sentence: 'Hvis der ikke var cykelstier overalt, ___ færre mennesker cykle til arbejde.',
            answer: 'ville',
            options: ['ville', 'vil', 'skal'],
            translation: 'Se não houvesse ciclovias por toda parte, menos gente iria de bicicleta para o trabalho.',
          },
          {
            sentence: 'Hvis jeg ___ dig, ville jeg tage en hjelm på.',
            answer: 'var',
            options: ['var', 'er', 'være'],
            translation: 'Se eu fosse você, eu colocaria um capacete.',
          },
          {
            sentence: '___ det regne i morgen, tager jeg bussen i stedet for cyklen.',
            answer: 'Skulle',
            options: ['Skulle', 'Ville', 'Hvis'],
            translation: 'Se por acaso chover amanhã, eu pego o ônibus em vez da bicicleta.',
          },
        ],
        voice: {
          bot: 'Skal vi køre i bil eller cykle til stranden?',
          botTranslation: 'Vamos de carro ou de bicicleta até a praia?',
          expected: [
            'Hvis det ikke regnede, ville jeg hellere cykle, men i dag tager vi bilen.',
            'hvis det ikke regnede',
            'ville jeg hellere cykle',
            'tager vi bilen',
          ],
          hint: 'Faça uma hipótese com «hvis» + passado (hvis det ikke regnede) e responda com «ville jeg hellere…».',
        },
        communityPrompt:
          'Escreva 3 frases com «hvis jeg var…» ou «hvis jeg havde…» sobre como seria sua vida de ciclista em Copenhague, e uma com «skulle» (se por acaso).',
      },
      {
        id: 'da-u9-l3',
        title: 'Desafio de voz: um futuro mais verde',
        kind: 'voz',
        words: ['elbil', 'ladestander', 'miljø', 'forurening', 'bæredygtig', 'affald'],
        cloze: [
          {
            sentence: 'Hvis der var flere ladestandere, ___ flere folk købe en elbil.',
            answer: 'ville',
            options: ['ville', 'vil', 'havde'],
            translation: 'Se houvesse mais pontos de recarga, mais gente compraria um carro elétrico.',
          },
          {
            sentence: 'Hvis vi havde sorteret affaldet, ___ vi have sparet penge.',
            answer: 'kunne',
            options: ['kunne', 'kan', 'kunnet'],
            translation: 'Se a gente tivesse separado o lixo, poderia ter economizado dinheiro.',
          },
          {
            sentence: 'Gid byen ___ mindre forurening!',
            answer: 'havde',
            options: ['havde', 'har', 'have'],
            translation: 'Quem dera a cidade tivesse menos poluição!',
          },
        ],
        voice: {
          bot: 'Tror du, at vi kan leve mere bæredygtigt?',
          botTranslation: 'Você acha que a gente pode viver de um jeito mais sustentável?',
          expected: [
            'Ja, hvis alle cyklede mere og sorterede affaldet, ville det være godt for miljøet.',
            'hvis alle cyklede',
            'ville det være',
            'miljøet',
          ],
          hint: 'Use «hvis» + passado (cyklede, sorterede) e, na principal, «ville det være…».',
        },
        communityPrompt:
          'Grave-se respondendo: o que você faria diferente se morasse na Dinamarca? Use «hvis jeg boede…, ville jeg…», uma hipótese no passado (hvis jeg havde…, ville jeg have…) e um «gid».',
      },
      {
        id: 'da-u9-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Forestil dig, at du var flyttet til Danmark for ti år siden. Hvordan ville dit liv have været?',
          botTranslation: 'Imagine que você tivesse se mudado para a Dinamarca dez anos atrás. Como teria sido sua vida?',
          expected: [
            'Hvis jeg var flyttet til Danmark for ti år siden, ville jeg have lært dansk og cyklet til arbejde hver dag.',
            'hvis jeg var flyttet',
            'ville jeg have',
            'lært dansk',
            'cyklet',
          ],
          hint: 'Hipótese no passado: «hvis jeg var flyttet…» (verbo de movimento leva «var») e «ville jeg have» + particípio.',
        },
        communityPrompt:
          'Escreva 5 frases sobre um futuro mais verde: duas hipóteses no presente (hvis + passado, ville + infinitivo), uma no passado (havde … ville have), uma com inversão sem «hvis» e uma com «skulle» ou «gid».',
      },
    ],
  },
  {
    id: 'da-u10',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Registro formal: e-mails e repartições',
    emoji: '🏛️',
    card: {
      id: 'da-c10',
      title: 'Papéis, CPR e a caixa de correio digital',
      emoji: '📨',
      history:
        'O CPR, o registro civil central da Dinamarca, foi criado em 1968: desde então, todo morador tem um cpr-nummer de dez dígitos, formado pela data de nascimento e mais quatro números. Com ele se abre conta no banco, se recebe o sundhedskort e se fala com qualquer órgão público. Desde 2014, a correspondência oficial para os cidadãos chega pela Digital Post, a caixa de correio digital do setor público. O atendimento presencial fica no Borgerservice, o balcão de atendimento de cada kommune. A Constituição, a Grundloven, foi assinada em 5 de junho de 1849, e o 5 de junho, o Grundlovsdag, é lembrado até hoje.',
      culture_tip:
        'O dinamarquês formal é menos cerimonioso do que o português: até em e-mails para repartições se usa «du», e o «De» ficou raro, restrito a situações muito solenes ou a pessoas bem idosas. Um e-mail começa com «Kære…» ou simplesmente «Hej…» e termina com «Venlig hilsen» ou «Med venlig hilsen» e o seu nome. Seja direto: diga logo na primeira frase o que você quer. E, quando se mudar, avise a kommune em até cinco dias.',
      grammar_why:
        'O registro formal escrito tem marcas próprias. A passiva com -s aparece muito em regras e instruções: «Ansøgningen skal sendes senest den 1. marts», «Skemaet udfyldes digitalt». «Du bedes…» (pede-se que você…) é a ordem educada típica das repartições: «Du bedes oplyse dit cpr-nummer». Pedidos gentis usam o passado dos modais, como o nosso «poderia»: «Kunne du sende mig…?», além de «Jeg vil gerne bede om…» e «venligst» (por gentileza): «Svar venligst inden fredag». Há fórmulas fixas: «Hermed sender jeg…» (envio por meio deste…), «Vedhæftet finder du…» (em anexo você encontra…), «På forhånd tak» (desde já, obrigado). O estilo nominal também é típico: «ved flytning» (em caso de mudança) em vez de «når man flytter». Mas nada de exagero: os dinamarqueses preferem um tom claro e simples, e o «du» vale aqui também.',
      grammar_examples: [
        ['Ansøgningen skal sendes senest den 1. marts.', 'O requerimento deve ser enviado até 1º de março.'],
        ['Kunne du venligst sende mig en kopi af kontrakten?', 'Você poderia, por gentileza, me enviar uma cópia do contrato?'],
        ['Vedhæftet finder du den udfyldte blanket.', 'Em anexo você encontra o formulário preenchido.'],
        ['Du bedes møde op med dit pas.', 'Pede-se que você compareça com seu passaporte.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'da-u10-l1',
        title: 'No Borgerservice',
        kind: 'licao',
        words: ['borgerservice', 'cpr-nummer', 'kommune', 'adresse', 'registrere', 'myndighed'],
        cloze: [
          {
            sentence: 'Flytningen skal ___ senest fem dage efter, at du er flyttet.',
            answer: 'anmeldes',
            options: ['anmeldes', 'anmelde', 'anmeldt'],
            translation: 'A mudança deve ser comunicada até cinco dias depois de você se mudar.',
          },
          {
            sentence: 'Du bedes ___ dit cpr-nummer.',
            answer: 'oplyse',
            options: ['oplyse', 'oplyses', 'oplyst'],
            translation: 'Pede-se que você informe o seu cpr-nummer.',
          },
          {
            sentence: 'Når din adresse er ___, får du et sundhedskort med posten.',
            answer: 'registreret',
            options: ['registreret', 'registrere', 'registreres'],
            translation: 'Quando o seu endereço estiver registrado, você recebe um sundhedskort pelo correio.',
          },
        ],
        voice: {
          bot: 'Goddag, velkommen til Borgerservice. Hvad kan jeg hjælpe med?',
          botTranslation: 'Bom dia, bem-vindo ao Borgerservice. Em que posso ajudar?',
          expected: [
            'Goddag. Jeg er lige flyttet til kommunen og vil gerne registrere min nye adresse.',
            'lige flyttet',
            'registrere',
            'min nye adresse',
          ],
          hint: 'Diga que acabou de se mudar (er lige flyttet) e o que você quer, de forma direta e educada (vil gerne…).',
        },
        communityPrompt:
          'Escreva 3 frases que um funcionário do Borgerservice diria, usando a passiva com -s (skal registreres), «Du bedes…» e «venligst».',
      },
      {
        id: 'da-u10-l2',
        title: 'Um e-mail formal',
        kind: 'licao',
        words: ['kære', 'venlig hilsen', 'e-mail', 'ansøgning', 'underskrift', 'formel'],
        cloze: [
          {
            sentence: '___ finder du min ansøgning og mit cv.',
            answer: 'Vedhæftet',
            options: ['Vedhæftet', 'Venligst', 'Kære'],
            translation: 'Em anexo você encontra meu requerimento e meu currículo.',
          },
          {
            sentence: 'Jeg skriver for ___ spørge, om min ansøgning er modtaget.',
            answer: 'at',
            options: ['at', 'og', 'til'],
            translation: 'Escrevo para perguntar se o meu requerimento foi recebido.',
          },
          {
            sentence: 'Kontrakten skal ___ af begge parter.',
            answer: 'underskrives',
            options: ['underskrives', 'underskrive', 'underskriver'],
            translation: 'O contrato deve ser assinado pelas duas partes.',
          },
        ],
        voice: {
          bot: 'Hvordan begynder og slutter man en formel e-mail på dansk?',
          botTranslation: 'Como se começa e termina um e-mail formal em dinamarquês?',
          expected: [
            'Man begynder med Kære eller Hej og navnet, og man slutter med Med venlig hilsen og sit eget navn.',
            'Kære',
            'venlig hilsen',
            'sit eget navn',
          ],
          hint: 'Cite a saudação (Kære, Hej) e o fecho (Med venlig hilsen); com «man», o possessivo é «sit».',
        },
        communityPrompt:
          'Escreva um e-mail curto (4 frases) para uma escola de idiomas pedindo informações: «Kære…», «Jeg skriver for at…», um pedido com «Kunne du…?» e o fecho «Med venlig hilsen».',
      },
      {
        id: 'da-u10-l3',
        title: 'Desafio de voz: pedir e reclamar com educação',
        kind: 'voz',
        words: ['ansøge', 'klage', 'tilladelse', 'opholdstilladelse', 'skema', 'skat'],
        cloze: [
          {
            sentence: 'Jeg vil gerne ___ om opholdstilladelse.',
            answer: 'ansøge',
            options: ['ansøge', 'ansøgning', 'ansøges'],
            translation: 'Eu gostaria de pedir autorização de residência.',
          },
          {
            sentence: 'Skemaet ___ digitalt og sendes til kommunen.',
            answer: 'udfyldes',
            options: ['udfyldes', 'udfylder', 'udfyldte'],
            translation: 'O formulário é preenchido digitalmente e enviado para o município.',
          },
          {
            sentence: 'Hvis du vil klage over afgørelsen, ___ du sende din klage inden fire uger.',
            answer: 'skal',
            options: ['skal', 'skulle have', 'ville'],
            translation: 'Se você quiser recorrer da decisão, deve enviar a sua reclamação em até quatro semanas.',
          },
        ],
        voice: {
          bot: 'Goddag, du taler med kommunen. Hvad drejer det sig om?',
          botTranslation: 'Bom dia, você está falando com a prefeitura. Do que se trata?',
          expected: [
            'Goddag. Jeg har fået en afgørelse fra kommunen, og jeg vil gerne klage, fordi jeg mener, at den ikke er korrekt.',
            'vil gerne klage',
            'afgørelse',
            'ikke er korrekt',
          ],
          hint: 'Seja direto: o que você recebeu, o que quer (vil gerne klage) e por quê, com o «ikke» antes do verbo na subordinada.',
        },
        communityPrompt:
          'Grave-se fazendo um pedido formal por telefone: cumprimente, diga o que deseja com «Jeg vil gerne ansøge om…» ou «Jeg vil gerne klage over…», explique o motivo e agradeça (tak for hjælpen).',
      },
      {
        id: 'da-u10-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Du er flyttet, men du har ikke fået dit nye sundhedskort. Hvad skriver du til kommunen?',
          botTranslation: 'Você se mudou, mas não recebeu o seu novo sundhedskort. O que você escreve para a prefeitura?',
          expected: [
            'Kære Borgerservice. Jeg flyttede den 1. maj, men jeg har endnu ikke modtaget mit nye sundhedskort. Kunne I venligst sende det til min nye adresse? På forhånd tak. Med venlig hilsen Ana Souza',
            'Kære',
            'endnu ikke modtaget',
            'Kunne I venligst',
            'Med venlig hilsen',
          ],
          hint: 'Monte o e-mail: saudação, o motivo logo no começo, um pedido com «Kunne I venligst…» e o fecho formal.',
        },
        communityPrompt:
          'Escreva um e-mail formal completo (6 frases) para uma repartição dinamarquesa: saudação, o motivo na primeira frase, a passiva com -s, um pedido com «Kunne du…?» ou «Du bedes…», «Vedhæftet finder du…» e o fecho.',
      },
    ],
  },
  // ───────────────────────── da-u11 · B2.3 ─────────────────────────
  {
    id: 'da-u11',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Idiomas, compostos e a gíria de Copenhague',
    emoji: '🐄',
    card: {
      id: 'da-c11',
      title: 'Ingen ko på isen: o dinamarquês figurado',
      emoji: '🧊',
      history:
        'O dinamarquês junta palavras sem espaço e cria compostos quase sem limite: «hjemme» + «kontor» dá «hjemmekontor», e «arbejde» + «miljø» dá «arbejdsmiljø», com um -s- de ligação. Separar o composto (særskrivning) é um erro clássico que muda o sentido: «en engelsklærer» é um professor de inglês, mas «en engelsk lærer» é um professor inglês. A palavra «hygge», o clima aconchegante de velas, café e boa companhia, virou moda no mundo todo por volta de 2016 e hoje aparece em dicionários de inglês. Nas cidades, os jovens misturam gírias como «fedt», «sejt» e «vildt» com palavras vindas do árabe e do inglês; os linguistas chamam de «multietnolekt» a fala que nasceu nos bairros multiculturais.',
      culture_tip:
        'Use a gíria só com quem você conhece: com o chefe ou numa repartição, «fedt» vira «godt» ou «fint». Os idiomas, ao contrário, estão por toda parte, até no jornal: «der er ingen ko på isen» («não tem vaca no gelo») quer dizer «não tem problema nenhum», e «at stå med håret i postkassen» («ficar com o cabelo preso na caixa do correio») é ficar numa situação constrangedora, sem saída. E «pyt!» é o «deixa pra lá» com que os dinamarqueses evitam se estressar com coisas pequenas.',
      grammar_why:
        'No composto dinamarquês, a última palavra manda: ela dá o sentido principal e o gênero. «Et kontor» faz «et hjemmekontor» e «hjemmekontoret»; «en tid» faz «en skærmtid» e «skærmtiden». Entre as partes pode aparecer um -s- de ligação (arbejdsmiljø, arbejdsplads) ou um -e- (juleaften, julemand), e tudo se escreve junto, sem espaço nem hífen. A tônica cai na primeira parte, o contrário do português, em que «guarda-chuva» tem a tônica no fim. Os idiomas são blocos fixos: não se troca «katten» por «en kat» em «købe katten i sækken», mas o verbo se conjuga normalmente (han købte katten i sækken).',
      grammar_examples: [
        ['Hun havde is i maven under hele eksamen.', 'Ela manteve a calma durante a prova inteira.'],
        ['Vi købte katten i sækken, da vi købte den gamle bil.', 'Nós compramos gato por lebre quando compramos o carro velho.'],
        ['Skærmtiden hos børn er steget meget de seneste år.', 'O tempo de tela das crianças aumentou muito nos últimos anos.'],
        ['Koncerten i går var vildt fed!', 'O show de ontem foi muito massa!'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'da-u11-l1',
        title: 'Idiomas do dia a dia',
        kind: 'licao',
        words: ['pyt', 'tak for kaffe', 'hold da op', 'for pokker', 'før eller siden', 'mere eller mindre'],
        cloze: [
          {
            sentence: 'Hvis jeg tager toget til Aarhus, kan jeg besøge mormor og se byen på samme tid. Så slår jeg to fluer med ét ___.',
            answer: 'smæk',
            options: ['smæk', 'slag', 'hug'],
            translation: 'Se eu pegar o trem para Aarhus, posso visitar a vovó e ver a cidade ao mesmo tempo. Assim mato dois coelhos com uma cajadada só.',
          },
          {
            sentence: 'Sælgeren lovede, at bilen var som ny, men vi ___ katten i sækken.',
            answer: 'købte',
            options: ['købte', 'køber', 'købt'],
            translation: 'O vendedor prometeu que o carro estava como novo, mas nós compramos gato por lebre.',
          },
          {
            sentence: 'Tag det roligt, der er ingen ___ på isen.',
            answer: 'ko',
            options: ['ko', 'kat', 'hest'],
            translation: 'Fica tranquilo, não tem problema nenhum.',
          },
        ],
        voice: {
          bot: 'Når man taler om solen! Vi snakkede lige om dig. Hvordan gik jobsamtalen i går? Var du nervøs?',
          botTranslation: 'Falando no diabo! A gente estava falando de você agorinha. Como foi a entrevista de emprego ontem? Você ficou nervoso?',
          expected: [
            'Nej, jeg havde is i maven hele tiden. Jeg svarede roligt på alle spørgsmålene, og jeg tror, det gik godt.',
            'is i maven',
            'roligt',
            'gik godt',
          ],
          hint: 'Use «have is i maven» no passado (havde is i maven) e conte com calma como foi a entrevista.',
        },
        communityPrompt: 'Escreva 4 frases em dinamarquês contando uma situação em que você «købte katten i sækken» ou «slog to fluer med ét smæk». Conjugue o verbo do idioma no passado.',
      },
      {
        id: 'da-u11-l2',
        title: 'Compostos: a última palavra manda',
        kind: 'licao',
        words: ['skærmtid', 'arbejdsmiljø', 'hjemmekontor', 'ladcykel', 'vinterbadning', 'fællessang'],
        cloze: [
          {
            sentence: 'Det nye ___ på kontoret er meget bedre end det gamle.',
            answer: 'arbejdsmiljø',
            options: ['arbejdsmiljø', 'arbejds miljø', 'arbejdmiljø'],
            translation: 'O novo ambiente de trabalho no escritório é muito melhor que o antigo.',
          },
          {
            sentence: 'Forældrene vil gerne begrænse ___ for børnene.',
            answer: 'skærmtiden',
            options: ['skærmtiden', 'skærmtidet', 'skærm tiden'],
            translation: 'Os pais querem limitar o tempo de tela das crianças.',
          },
          {
            sentence: 'Om vinteren hopper Mette i havet hver morgen. ___ er blevet meget populær i Danmark.',
            answer: 'Vinterbadning',
            options: ['Vinterbadning', 'Vinter badning', 'Vinter-badning'],
            translation: 'No inverno, a Mette pula no mar toda manhã. O banho de mar no inverno ficou muito popular na Dinamarca.',
          },
        ],
        voice: {
          bot: 'Du har boet i Danmark et stykke tid nu. Hvilke danske ord synes du er sjove eller mærkelige?',
          botTranslation: 'Você já mora na Dinamarca há um tempo. Que palavras dinamarquesas você acha engraçadas ou esquisitas?',
          expected: [
            'Jeg synes, de sammensatte ord er sjove, for eksempel «ladcykel» og «vinterbadning». Man sætter bare ordene sammen, og så har man et nyt ord!',
            'ladcykel',
            'vinterbadning',
            'sætter',
          ],
          hint: 'Dê dois exemplos de compostos e explique como eles se formam; lembre que se escrevem juntos, sem espaço.',
        },
        communityPrompt: 'Invente 3 compostos dinamarqueses com palavras que você já conhece (ex.: «kaffe» + «kop») e escreva uma frase com cada um, usando a forma definida com o gênero da última palavra.',
      },
      {
        id: 'da-u11-l3',
        title: 'Desafio de voz: a gíria de Copenhague',
        kind: 'voz',
        words: ['fedt', 'sejt', 'vildt', 'mega', 'sindssyg', 'stemning'],
        cloze: [
          {
            sentence: 'Koncerten på Vesterbro i går var ___ god!',
            answer: 'vildt',
            options: ['vildt', 'vild', 'vilde'],
            translation: 'O show em Vesterbro ontem foi bom demais!',
          },
          {
            sentence: 'Den nye film er ___ spændende, du skal se den!',
            answer: 'sindssygt',
            options: ['sindssygt', 'sindssyg', 'sindssyge'],
            translation: 'O filme novo é absurdamente emocionante, você tem que ver!',
          },
          {
            sentence: 'Der var en helt fantastisk ___ til festen i lørdags.',
            answer: 'stemning',
            options: ['stemning', 'stemme', 'stemmer'],
            translation: 'O clima estava simplesmente fantástico na festa de sábado passado.',
          },
        ],
        voice: {
          bot: 'Hej! Skal vi tage en shawarma på Nørrebro bagefter? Den er mega god, altså.',
          botTranslation: 'E aí! Vamos comer um shawarma em Nørrebro depois? É bom demais, sério.',
          expected: [
            'Ja, det lyder fedt! Jeg er vildt sulten, så kom, vi går!',
            'fedt',
            'vildt',
            'sulten',
          ],
          hint: 'Responda no mesmo tom descontraído, com duas gírias da lição, sem exagerar nem imitar sotaque.',
        },
        communityPrompt: 'Reescreva em dinamarquês padrão, para um e-mail ao chefe, a mensagem «Mødet var mega fedt, altså!» e explique em português, em 2 frases, quando cada versão cabe.',
      },
      {
        id: 'da-u11-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Jeg skriver en artikel om, hvordan unge i København taler. Hvad synes du om slang og nye ord på dansk?',
          botTranslation: 'Estou escrevendo um artigo sobre como os jovens de Copenhague falam. O que você acha da gíria e das palavras novas no dinamarquês?',
          expected: [
            'Jeg synes, det er spændende. Sproget forandrer sig hele tiden, og ord som «sejt» og «vildt» viser, hvor kreative de unge er. Men på arbejdet og i skolen er det klogt at bruge et mere neutralt sprog.',
            'forandrer sig',
            'hele tiden',
            'på arbejdet',
          ],
          hint: 'Dê a sua opinião, cite exemplos de gíria e mostre que sabe em que situações cada registro cabe.',
        },
        communityPrompt: 'Escreva em dinamarquês um diálogo de 6 falas entre dois amigos de Copenhague usando pelo menos 2 idiomas, 2 compostos e 2 gírias desta unidade.',
      },
    ],
  },

  // ───────────────────────── da-u12 · B2.4 ─────────────────────────
  {
    id: 'da-u12',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Efter min mening…',
    emoji: '🗣️',
    card: {
      id: 'da-c12',
      title: 'Debater à dinamarquesa',
      emoji: '⚖️',
      history:
        'A Dinamarca ganhou a sua primeira Constituição, a Grundlov, em 5 de junho de 1849, e o 5 de junho (grundlovsdag) ainda é lembrado com discursos ao ar livre. O artigo 77 garante a liberdade de expressão (ytringsfrihed) e proíbe a censura. Desde 2011, a pequena cidade de Allinge, na ilha de Bornholm, recebe todo mês de junho o Folkemødet, uma espécie de festival da democracia em que políticos, organizações e cidadãos debatem em tendas e palcos, de igual para igual. Na escola, os alunos treinam o texto argumentativo, em que é preciso pesar os prós e os contras antes de concluir.',
      culture_tip:
        'Os dinamarqueses discutem de forma direta, mas calma: a ironia é frequente, e levantar a voz pega mal. É comum começar reconhecendo o outro lado («Jeg forstår godt, hvad du mener, men…»). E depois da discussão ninguém fica de mal: dá para discordar em tudo e tomar um café juntos.',
      grammar_why:
        'Os conectores dão estrutura ao argumento: «desuden» (além disso) soma, «derimod» (por outro lado, já) contrasta, «alligevel» (mesmo assim) concede, «dog» (porém) faz uma ressalva, e «altså» (ou seja, portanto) conclui. Quando um deles abre a frase, vale a regra V2: o verbo vem logo em seguida, e o sujeito depois dele — «Desuden er det dyrt», nunca «Desuden det er dyrt». «Efter min mening» também conta como primeiro elemento: «Efter min mening bør vi spare». «Derimod» e «dog» podem ainda vir depois do verbo: «I Skagen er der derimod ro og fred». Na pontuação, o dinamarquês usa a vírgula gramatical: depois de uma oração subordinada que abre a frase, a vírgula é obrigatória (Hvis det regner, bliver vi hjemme); já a vírgula antes de «at», «som» ou «hvis», o chamado startkomma, é opcional: «Jeg synes, at…» e «Jeg synes at…» estão ambas certas.',
      grammar_examples: [
        ['Bilen er praktisk. Desuden bor vi langt fra byen.', 'O carro é prático. Além disso, moramos longe da cidade.'],
        ['Det regnede hele dagen. Alligevel tog vi på skovtur.', 'Choveu o dia inteiro. Mesmo assim, fomos passear na floresta.'],
        ['I København er der meget trafik; i Skagen er der derimod ro og fred.', 'Em Copenhague há muito trânsito; já em Skagen há paz e sossego.'],
        ['Hvis vi bruger flere penge nu, bliver der mindre tilbage til vores børn.', 'Se gastarmos mais dinheiro agora, vai sobrar menos para os nossos filhos.'],
        ['Du er altså enig med mig?', 'Então você concorda comigo?'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'da-u12-l1',
        title: 'Dar e defender a opinião',
        kind: 'licao',
        words: ['debat', 'holdning', 'overbevise', 'overtale', 'kritisere', 'uenig'],
        cloze: [
          {
            sentence: 'Efter min mening ___ starte senere om morgenen.',
            answer: 'bør skolen',
            options: ['bør skolen', 'skolen bør', 'skolen at bør'],
            translation: 'Na minha opinião, a escola deveria começar mais tarde de manhã.',
          },
          {
            sentence: 'Hun prøvede at ___ mig til at stemme, men jeg blev hjemme.',
            answer: 'overtale',
            options: ['overtale', 'overbevise', 'kritisere'],
            translation: 'Ela tentou me convencer a votar, mas eu fiquei em casa.',
          },
          {
            sentence: 'Politikeren ændrede sin ___, efter at hun havde læst rapporten.',
            answer: 'holdning',
            options: ['holdning', 'holdningen', 'holdninger'],
            translation: 'A parlamentar mudou de posição depois de ler o relatório.',
          },
        ],
        voice: {
          bot: 'Skal man forbyde mobiltelefoner i folkeskolen? Hvad er din holdning?',
          botTranslation: 'Deveriam proibir celulares na escola pública? Qual é a sua posição?',
          expected: [
            'Efter min mening bør man forbyde mobilerne i timerne. Eleverne bliver nemt forstyrret. Desuden taler de mere sammen i frikvarteret, når der ikke er skærme.',
            'efter min mening',
            'desuden',
            'forstyrret',
          ],
          hint: 'Comece com «Efter min mening» e ponha o verbo logo depois; dê dois argumentos ligados por «desuden».',
        },
        communityPrompt: 'Escreva em dinamarquês um pequeno parágrafo de opinião (5 frases) sobre um problema da sua cidade, começando por «Efter min mening» e respeitando o V2 depois dele.',
      },
      {
        id: 'da-u12-l2',
        title: 'Conectores: além disso, porém, mesmo assim',
        kind: 'licao',
        words: ['derimod', 'desuden', 'altså', 'alligevel', 'dog', 'tværtimod'],
        cloze: [
          {
            sentence: 'Det var koldt og blæsende. ___ gik vi en lang tur ved stranden.',
            answer: 'Alligevel',
            options: ['Alligevel', 'Desuden', 'Tværtimod'],
            translation: 'Estava frio e ventando. Mesmo assim, fizemos uma longa caminhada na praia.',
          },
          {
            sentence: 'Lejligheden er stor og lys. Desuden ___ tæt på stationen.',
            answer: 'ligger den',
            options: ['ligger den', 'den ligger', 'den at ligge'],
            translation: 'O apartamento é grande e claro. Além disso, fica perto da estação.',
          },
          {
            sentence: 'Han er ikke doven — ___, han arbejder mere end nogen anden.',
            answer: 'tværtimod',
            options: ['tværtimod', 'desuden', 'altså'],
            translation: 'Ele não é preguiçoso — pelo contrário, trabalha mais do que qualquer um.',
          },
        ],
        voice: {
          bot: 'Vil du hellere bo i København eller på landet? Giv mig både fordele og ulemper.',
          botTranslation: 'Você prefere morar em Copenhague ou no interior? Me dê as vantagens e as desvantagens.',
          expected: [
            'I København er der mange muligheder. Desuden er der kort til arbejdet. På landet er der derimod ro og natur. Alligevel vælger jeg byen, for jeg elsker kulturlivet.',
            'desuden',
            'derimod',
            'alligevel',
          ],
          hint: 'Use «desuden» para somar, «derimod» para contrastar e «alligevel» para concluir; o verbo vem logo depois do conector.',
        },
        communityPrompt: 'Escreva 4 frases comparando o Brasil e a Dinamarca, com «desuden», «derimod», «alligevel» e «altså», um em cada frase, e o verbo em segundo lugar quando o conector abre a frase.',
      },
      {
        id: 'da-u12-l3',
        title: 'Desafio de voz: a vírgula dinamarquesa',
        kind: 'voz',
        words: ['komma', 'punktum', 'sætning', 'retskrivning', 'ytringsfrihed', 'rimelig'],
        cloze: [
          {
            sentence: 'Hvis det regner i morgen, ___ aflyst.',
            answer: 'bliver koncerten',
            options: ['bliver koncerten', 'koncerten bliver', 'koncerten at blive'],
            translation: 'Se chover amanhã, o show vai ser cancelado.',
          },
          {
            sentence: 'På dansk sætter man altid ___ efter en ledsætning, der står først i sætningen.',
            answer: 'komma',
            options: ['komma', 'punktum', 'spørgsmålstegn'],
            translation: 'Em dinamarquês, sempre se põe vírgula depois de uma oração subordinada que vem no começo da frase.',
          },
          {
            sentence: 'Det er ikke ___, at de unge skal betale for de ældres fejl.',
            answer: 'rimeligt',
            options: ['rimeligt', 'rimelig', 'rimelige'],
            translation: 'Não é justo que os jovens tenham de pagar pelos erros dos mais velhos.',
          },
        ],
        voice: {
          bot: 'Min danske kollega siger, at kommaer er det sværeste på dansk. Kan du forklare, hvornår man sætter komma?',
          botTranslation: 'Meu colega dinamarquês diz que as vírgulas são a parte mais difícil do dinamarquês. Você consegue explicar quando se põe vírgula?',
          expected: [
            'Man sætter altid komma efter en ledsætning, der står først. For eksempel: «Hvis det regner, bliver vi hjemme.» Kommaet før «at» er derimod valgfrit.',
            'ledsætning',
            'hvis det regner',
            'valgfrit',
          ],
          hint: 'Explique a vírgula obrigatória depois da subordinada inicial, dê um exemplo e diga que o startkomma antes de «at» é opcional.',
        },
        communityPrompt: 'Escreva em dinamarquês 3 frases que comecem com uma oração subordinada (Hvis…, Når…, Selvom…), com a vírgula no lugar certo e o verbo logo depois dela.',
      },
      {
        id: 'da-u12-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Vi holder en debat på Folkemødet: Skal Danmark have en arbejdsuge på fire dage? Du har ordet.',
          botTranslation: 'Estamos fazendo um debate no Folkemødet: a Dinamarca deveria ter uma semana de trabalho de quatro dias? A palavra é sua.',
          expected: [
            'Efter min mening er det en god idé. Folk får mere tid til familien, og desuden bliver de mindre stressede. Det koster derimod penge for virksomhederne. Alligevel tror jeg, at fordelene er størst. Vi bør altså prøve det.',
            'efter min mening',
            'desuden',
            'derimod',
            'alligevel',
          ],
          hint: 'Construa um argumento completo: opinião, dois argumentos, uma objeção e a conclusão, com os conectores da unidade e o V2.',
        },
        communityPrompt: 'Escreva em dinamarquês um artigo de opinião curto (8–10 frases) para um jornal local, com pelo menos 4 conectores desta unidade e a vírgula depois de cada subordinada que abre a frase.',
      },
    ],
  },

  // ───────────────────────── da-u13 · C1.1 ─────────────────────────
  {
    id: 'da-u13',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Dialetos, vizinhos e ilhas',
    emoji: '🗺️',
    card: {
      id: 'da-c13',
      title: 'Rigsdansk, dialetos e as línguas do Reino',
      emoji: '🧭',
      history:
        'Até o século XX, cada região da Dinamarca tinha o seu dialeto, e ainda hoje dá para ouvir as diferenças: no oeste da Jutlândia, o artigo definido vem antes do substantivo («æ hus» em vez de «huset»), e no sul da Jutlândia o sønderjysk cumprimenta com «mojn», a qualquer hora do dia, tanto ao chegar quanto ao sair. Na ilha de Bornholm, o bornholmsk soa tão diferente que muitos dinamarqueses o acham parecido com o sueco. O Reino da Dinamarca inclui também as Ilhas Faroé e a Groenlândia, que têm autonomia e línguas próprias: o feroês e o groenlandês (kalaallisut), língua oficial da Groenlândia desde 2009. No sul da Jutlândia vive uma minoria de língua alemã desde que a região voltou à Dinamarca, em 1920, e do outro lado da fronteira, no norte da Alemanha, vive uma minoria dinamarquesa.',
      culture_tip:
        'Dinamarqueses, noruegueses e suecos costumam conversar cada um na sua língua, e isso tem nome: «nabosprog» (línguas vizinhas). A leitura é fácil entre dinamarquês e norueguês, mas o dinamarquês falado é o mais difícil para os vizinhos, por causa das consoantes que somem e das muitas vogais. Nas Faroé e na Groenlândia, algumas palavras locais são um gesto de respeito: «takk» em feroês e «qujanaq» em groenlandês querem dizer «obrigado». E nunca chame um sønderjyde de alemão: a fronteira de 1920 ainda é um tema de orgulho.',
      grammar_why:
        'Dinamarquês, norueguês (bokmål) e sueco compartilham a gramática: V2, artigo definido no fim do substantivo e verbos que não mudam com a pessoa. As diferenças estão na grafia, na pronúncia e no vocabulário: o norueguês tira o «d» mudo de «hvad», e o sueco escreve «jag» (eu) e «vad» (o quê) onde o dinamarquês tem «jeg» e «hvad». Há falsos amigos que pregam peças: «rolig» quer dizer «calmo» em dinamarquês, mas «engraçado» em sueco. Nos dialetos, a variação vai além do sotaque: o vestjysk põe o artigo antes do substantivo («æ hus»), e o bornholmsk ainda tem três gêneros (masculino, feminino e neutro), como o dinamarquês antigo. Na escrita, porém, todos usam o mesmo rigsdansk, e é ele que você deve usar em textos formais.',
      grammar_examples: [
        ['Jeg forstår godt norsk, når jeg læser det, men svensk er sværere at høre.', 'Eu entendo bem o norueguês quando leio, mas o sueco é mais difícil de entender falado.'],
        ['I Vestjylland siger mange «æ hus» i stedet for «huset».', 'No oeste da Jutlândia, muita gente diz «æ hus» em vez de «huset».'],
        ['På Færøerne taler man færøsk, men alle lærer også dansk i skolen.', 'Nas Ilhas Faroé se fala feroês, mas todos também aprendem dinamarquês na escola.'],
        ['Grønlandsk er det officielle sprog i Grønland.', 'O groenlandês é a língua oficial da Groenlândia.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'da-u13-l1',
        title: 'Os dialetos dinamarqueses',
        kind: 'licao',
        words: ['mojn', 'udtale', 'tosproget', 'lokal', 'genkende', 'typisk'],
        cloze: [
          {
            sentence: 'Min mormor kommer fra Sønderjylland, og hun siger altid «___», både når hun kommer, og når hun går.',
            answer: 'mojn',
            options: ['mojn', 'goddag', 'godnat'],
            translation: 'Minha avó é do sul da Jutlândia e sempre diz «mojn», tanto quando chega quanto quando vai embora.',
          },
          {
            sentence: 'Man kan ___ en jyde på udtalen allerede efter to sætninger.',
            answer: 'genkende',
            options: ['genkende', 'kende til', 'lære at kende'],
            translation: 'Dá para reconhecer um jutlandês pela pronúncia já depois de duas frases.',
          },
          {
            sentence: 'Mange ord bliver ___ helt anderledes på bornholmsk end på rigsdansk.',
            answer: 'udtalt',
            options: ['udtalt', 'udtaler', 'udtale'],
            translation: 'Muitas palavras são pronunciadas de um jeito bem diferente no bornholmsk e no dinamarquês padrão.',
          },
        ],
        voice: {
          bot: 'Æ hus ligger lige ved æ kirke. Forstår du, hvad jeg siger? Jeg er fra Vestjylland.',
          botTranslation: 'A casa fica bem do lado da igreja. Você entende o que eu estou dizendo? Eu sou do oeste da Jutlândia.',
          expected: [
            'Ja, jeg forstår det godt. På vestjysk står artiklen foran ordet, så «æ hus» betyder «huset». Det er spændende at høre en lokal dialekt.',
            'æ hus',
            'huset',
            'dialekt',
          ],
          hint: 'Mostre que entendeu, explique em dinamarquês padrão o artigo anteposto do vestjysk e comente o dialeto com simpatia.',
        },
        communityPrompt: 'Escreva em dinamarquês 4 frases comparando um sotaque ou dialeto do Brasil com um dialeto dinamarquês desta lição, usando pelo menos uma passiva com «blive» (bliver udtalt, bliver brugt).',
      },
      {
        id: 'da-u13-l2',
        title: 'Dinamarquês, norueguês e sueco',
        kind: 'licao',
        words: ['ligne', 'oversætte', 'tolk', 'nabo', 'forvirret', 'ens'],
        cloze: [
          {
            sentence: 'Norsk og dansk ___ hinanden meget på skrift.',
            answer: 'ligner',
            options: ['ligner', 'lignes', 'lignet'],
            translation: 'O norueguês e o dinamarquês se parecem muito na escrita.',
          },
          {
            sentence: 'Min svenske kollega sagde, at filmen var «rolig», så jeg blev helt ___: Var den kedelig eller sjov?',
            answer: 'forvirret',
            options: ['forvirret', 'forvirrende', 'forvirre'],
            translation: 'Meu colega sueco disse que o filme era «rolig», e eu fiquei totalmente confuso: era parado ou engraçado?',
          },
          {
            sentence: 'Til mødet i Stockholm havde vi ikke brug for en ___: Alle talte deres eget sprog.',
            answer: 'tolk',
            options: ['tolk', 'tolke', 'tolket'],
            translation: 'Na reunião em Estocolmo não precisamos de intérprete: cada um falou a sua própria língua.',
          },
        ],
        voice: {
          bot: 'Hvorfor kan danskere, nordmænd og svenskere tale sammen uden tolk? Det forstår mine brasilianske venner ikke.',
          botTranslation: 'Por que dinamarqueses, noruegueses e suecos conseguem conversar sem intérprete? Meus amigos brasileiros não entendem isso.',
          expected: [
            'Fordi sprogene ligner hinanden meget. De har den samme grammatik og mange ens ord. Men den danske udtale er svær for nordmænd og svenskere, så nogle gange må man tale langsomt.',
            'ligner hinanden',
            'grammatik',
            'udtale',
          ],
          hint: 'Explique o que as três línguas têm em comum e onde o dinamarquês complica a conversa.',
        },
        communityPrompt: 'Compare em dinamarquês, em 4 frases, a relação entre português e espanhol com a relação entre dinamarquês e norueguês. Use «ligne hinanden» e pelo menos um falso amigo.',
      },
      {
        id: 'da-u13-l3',
        title: 'Desafio de voz: Faroé, Groenlândia e a fronteira',
        kind: 'voz',
        words: ['mindretal', 'grænse', 'fællesskab', 'selvstændig', 'uafhængig', 'nationalitet'],
        cloze: [
          {
            sentence: 'Det tyske ___ i Sønderjylland har sine egne skoler og foreninger.',
            answer: 'mindretal',
            options: ['mindretal', 'mindretallet', 'flertal'],
            translation: 'A minoria alemã no sul da Jutlândia tem as suas próprias escolas e associações.',
          },
          {
            sentence: 'Danmark, Færøerne og Grønland udgør tilsammen ___.',
            answer: 'rigsfællesskabet',
            options: ['rigsfællesskabet', 'rigs fællesskabet', 'rigsfællesskab'],
            translation: 'A Dinamarca, as Ilhas Faroé e a Groenlândia formam juntas a comunidade do Reino.',
          },
          {
            sentence: 'Efter afstemningen i 1920 blev ___ mellem Danmark og Tyskland flyttet mod syd.',
            answer: 'grænsen',
            options: ['grænsen', 'grænse', 'grænserne'],
            translation: 'Depois do plebiscito de 1920, a fronteira entre a Dinamarca e a Alemanha foi deslocada para o sul.',
          },
        ],
        voice: {
          bot: 'Du skal til Nuuk og arbejde i et halvt år. Hvad vil du gerne vide om sproget og kulturen i Grønland?',
          botTranslation: 'Você vai para Nuuk trabalhar por meio ano. O que você gostaria de saber sobre a língua e a cultura da Groenlândia?',
          expected: [
            'Jeg vil gerne lære lidt grønlandsk, for det er det officielle sprog. Jeg vil for eksempel sige «qujanaq» i stedet for «tak». Jeg vil også vide, hvordan man viser respekt for den lokale kultur.',
            'grønlandsk',
            'qujanaq',
            'kultur',
          ],
          hint: 'Mostre interesse pela língua groenlandesa, use uma palavra local e fale de respeito à cultura.',
        },
        communityPrompt: 'Explique em dinamarquês, em 5 frases e em tom neutro, o que é o rigsfællesskab e que línguas se falam nele. Use pelo menos uma oração relativa com «som» ou «der».',
      },
      {
        id: 'da-u13-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Vi laver et radioprogram om sprog i Danmark. Hvordan vil du forklare den danske sprogsituation for brasilianere?',
          botTranslation: 'Estamos fazendo um programa de rádio sobre as línguas da Dinamarca. Como você explicaria a situação linguística dinamarquesa para brasileiros?',
          expected: [
            'Danmark har ét skriftsprog, rigsdansk, men mange dialekter, for eksempel jysk, fynsk og bornholmsk. I rigsfællesskabet taler man også færøsk og grønlandsk, og i Sønderjylland bor der et tysk mindretal. Desuden kan danskere tale med nordmænd og svenskere, fordi sprogene ligner hinanden.',
            'dialekter',
            'færøsk',
            'mindretal',
            'ligner hinanden',
          ],
          hint: 'Organize a resposta: a língua padrão, os dialetos, as línguas do Reino, a minoria alemã e os vizinhos escandinavos.',
        },
        communityPrompt: 'Escreva em dinamarquês um texto de 8–10 frases para um blog de viagem sobre a variação do dinamarquês: um dialeto, as Faroé ou a Groenlândia e o «nabosprog», com um exemplo de cada.',
      },
    ],
  },

  // ───────────────────────── da-u14 · C1.2 ─────────────────────────
  {
    id: 'da-u14',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Repartições, jornais e teses',
    emoji: '📑',
    card: {
      id: 'da-c14',
      title: 'Do kancellistil ao klarsprog',
      emoji: '📰',
      history:
        'Durante séculos, as cartas oficiais dinamarquesas seguiram o «kancellistil», o estilo pesado da antiga chancelaria real, cheio de substantivos, voz passiva e frases longas. Nas últimas décadas, o movimento do «klarsprog» (linguagem clara) passou a incentivar repartições e empresas a escrever de forma simples: frases curtas, verbos em vez de substantivos, o leitor tratado por «du» e a informação mais importante primeiro. O jornalismo segue a «nyhedstrekanten», a pirâmide invertida: o essencial vem logo no primeiro parágrafo. Na universidade, o mestrado (kandidatuddannelse) termina com o «speciale», uma dissertação escrita que costuma ser avaliada pelo orientador e por um examinador externo, o «censor».',
      culture_tip:
        'As cartas públicas dinamarquesas hoje chegam quase todas pelo correio digital, e a repartição trata você por «du»: o «De» formal ficou reservado a situações muito cerimoniosas. Se uma carta estiver confusa, é normal ligar e pedir uma explicação: «Hvad betyder det konkret for mig?». Nos jornais, repare na diferença entre a notícia (nyhed), neutra, e os textos de opinião assinados, como o «debatindlæg» e a «kronik».',
      grammar_why:
        'O texto especializado dinamarquês tem três marcas. A primeira é a passiva com -s, típica de regras e instruções: «Ansøgningen skal sendes senest den 1. maj» (o pedido deve ser enviado até 1º de maio). A segunda é o excesso de substantivos, que os dinamarqueses chamam de «navneordssyge» (doença dos substantivos): «Der foretages en undersøgelse af sagen» fica mais claro como «Vi undersøger sagen». A terceira é a ordem da informação: no klarsprog e na notícia, o mais importante vem primeiro, e cada frase carrega uma ideia só. No texto acadêmico, a passiva com o sujeito formal «det» deixa a frase impessoal («I dette speciale undersøges det, hvordan…»), mas o «jeg» e o «vi» também são aceitos hoje e costumam deixar o texto mais claro.',
      grammar_examples: [
        ['Ansøgningen skal sendes senest den 1. maj.', 'O pedido deve ser enviado até 1º de maio.'],
        ['Der foretages en undersøgelse af sagen. → Vi undersøger sagen.', 'Realiza-se uma investigação do caso. → Nós investigamos o caso.'],
        ['Storebæltsbroen blev lukket i nat på grund af storm.', 'A ponte do Grande Belt foi fechada esta noite por causa de uma tempestade.'],
        ['I dette speciale undersøges det, hvordan unge bruger sociale medier.', 'Nesta dissertação, investiga-se como os jovens usam as redes sociais.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'da-u14-l1',
        title: 'Cartas de repartição e klarsprog',
        kind: 'licao',
        words: ['myndighed', 'lovforslag', 'vedtage', 'tydelig', 'formel', 'officiel'],
        cloze: [
          {
            sentence: 'Ansøgningen skal ___ senest den 1. marts.',
            answer: 'sendes',
            options: ['sendes', 'sender', 'sendte'],
            translation: 'O pedido deve ser enviado até 1º de março.',
          },
          {
            sentence: 'Lovforslaget blev ___ af Folketinget i juni.',
            answer: 'vedtaget',
            options: ['vedtaget', 'vedtog', 'vedtage'],
            translation: 'O projeto de lei foi aprovado pelo Parlamento em junho.',
          },
          {
            sentence: 'Brevet fra kommunen var ikke særlig ___, så jeg ringede og spurgte.',
            answer: 'tydeligt',
            options: ['tydeligt', 'tydelig', 'tydelige'],
            translation: 'A carta da prefeitura não era muito clara, então eu liguei e perguntei.',
          },
        ],
        voice: {
          bot: 'Jeg har fået et brev fra kommunen: «Der er truffet afgørelse om afslag på Deres ansøgning om boligstøtte.» Hvad betyder det egentlig?',
          botTranslation: 'Recebi uma carta da prefeitura: «Foi tomada a decisão de indeferimento do seu pedido de auxílio-moradia.» O que isso quer dizer, afinal?',
          expected: [
            'Det betyder, at kommunen har sagt nej til din ansøgning. På klarsprog kunne man skrive: «Vi har desværre sagt nej til din ansøgning om boligstøtte.»',
            'sagt nej',
            'ansøgning',
            'klarsprog',
          ],
          hint: 'Traduza o «kancellistil» para uma frase simples, com sujeito, verbo ativo e o leitor tratado por «du».',
        },
        communityPrompt: 'Reescreva em klarsprog a frase «Der skal ske indsendelse af dokumentationen inden fristens udløb» e explique em português, em 2 frases, o que você mudou.',
      },
      {
        id: 'da-u14-l2',
        title: 'A pirâmide invertida',
        kind: 'licao',
        words: ['journalist', 'overskrift', 'nyhed', 'pressefrihed', 'redaktør', 'falske nyheder'],
        cloze: [
          {
            sentence: 'Det vigtigste i en ___ skal stå i første afsnit.',
            answer: 'nyhed',
            options: ['nyhed', 'nyheden', 'nyheder'],
            translation: 'O mais importante de uma notícia tem de estar no primeiro parágrafo.',
          },
          {
            sentence: 'Ifølge politiet ___ ingen kommet til skade ved ulykken.',
            answer: 'er',
            options: ['er', 'har', 'bliver'],
            translation: 'Segundo a polícia, ninguém se feriu no acidente.',
          },
          {
            sentence: 'Nyheder på sociale medier bør altid ___, før man deler dem.',
            answer: 'tjekkes',
            options: ['tjekkes', 'tjekke', 'tjekket'],
            translation: 'As notícias nas redes sociais devem sempre ser checadas antes de a gente compartilhá-las.',
          },
        ],
        voice: {
          bot: 'Du er journalist og har tredive sekunder i radioen. Storebæltsbroen er lukket på grund af storm. Hvordan begynder du?',
          botTranslation: 'Você é jornalista e tem trinta segundos no rádio. A ponte do Grande Belt está fechada por causa de uma tempestade. Como você começa?',
          expected: [
            'Storebæltsbroen er lukket for al trafik i nat på grund af storm. Ifølge politiet er ingen kommet til skade. Bilister bør udsætte rejsen til i morgen.',
            'lukket',
            'ifølge politiet',
            'storm',
          ],
          hint: 'Comece pelo fato mais importante (o quê, onde, por quê), cite a fonte com «ifølge» e termine com o conselho prático.',
        },
        communityPrompt: 'Escreva em dinamarquês uma notícia curta (5 frases) sobre um acontecimento inventado na sua cidade, na ordem da pirâmide invertida, com uma manchete (overskrift) e uma fonte citada com «ifølge».',
      },
      {
        id: 'da-u14-l3',
        title: 'Desafio de voz: a defesa do speciale',
        kind: 'voz',
        words: ['forskning', 'forsker', 'analyse', 'speciale', 'videnskabelig', 'observation'],
        cloze: [
          {
            sentence: 'Formålet med dette speciale er at ___, hvordan unge bruger sociale medier.',
            answer: 'undersøge',
            options: ['undersøge', 'undersøger', 'undersøgt'],
            translation: 'O objetivo desta dissertação é investigar como os jovens usam as redes sociais.',
          },
          {
            sentence: 'Resultaterne ___ i en videnskabelig artikel næste år.',
            answer: 'offentliggøres',
            options: ['offentliggøres', 'offentliggør', 'offentliggjorde'],
            translation: 'Os resultados serão publicados num artigo científico no ano que vem.',
          },
          {
            sentence: 'Analysen bygger på data, som ___ på fem skoler i Aarhus.',
            answer: 'blev indsamlet',
            options: ['blev indsamlet', 'indsamlede', 'har indsamlet'],
            translation: 'A análise se baseia em dados que foram coletados em cinco escolas de Aarhus.',
          },
        ],
        voice: {
          bot: 'Tak for fremlæggelsen. Som censor vil jeg gerne spørge: Hvad er den vigtigste konklusion i dit speciale?',
          botTranslation: 'Obrigado pela apresentação. Como examinador externo, gostaria de perguntar: qual é a conclusão mais importante da sua dissertação?',
          expected: [
            'Den vigtigste konklusion er, at unge bruger sociale medier mere til nyheder end til underholdning. Det viser både min analyse af data og mine observationer. Resultatet er dog usikkert, fordi undersøgelsen er lille.',
            'konklusion',
            'analyse',
            'usikkert',
          ],
          hint: 'Apresente a conclusão, diga em que dados ela se apoia e reconheça um limite do estudo com «dog».',
        },
        communityPrompt: 'Escreva em dinamarquês o resumo (abstract) de um trabalho imaginário em 5 frases: objetivo, método, dados, resultado e limitação, com pelo menos duas passivas (-s ou blive).',
      },
      {
        id: 'da-u14-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Du arbejder i kommunen og skal omskrive et brev. Originalen lyder: «Ved manglende indbetaling inden fristens udløb vil sagen blive overgivet til inkasso.» Hvordan skriver du det på klarsprog, og hvorfor?',
          botTranslation: 'Você trabalha na prefeitura e precisa reescrever uma carta. O original diz: «Em caso de falta de pagamento antes do vencimento do prazo, o processo será encaminhado à cobrança.» Como você escreve isso em linguagem clara, e por quê?',
          expected: [
            'Jeg ville skrive: «Hvis du ikke betaler, før fristen udløber, sender vi sagen til inkasso.» Sætningen er stadig præcis, men den bruger verber i stedet for navneord, og den taler direkte til læseren.',
            'hvis du ikke betaler',
            'fristen',
            'læseren',
          ],
          hint: 'Transforme os substantivos em verbos, troque a passiva pela ativa, trate o leitor por «du» e justifique cada mudança.',
        },
        communityPrompt: 'Escreva em dinamarquês dois textos sobre o mesmo fato (o fechamento de uma biblioteca): uma carta oficial em klarsprog e uma notícia de jornal em pirâmide invertida, com 5 frases cada.',
      },
    ],
  },

  // ───────────────────────── da-u15 · C2 ─────────────────────────
  {
    id: 'da-u15',
    level: 'C2',
    cefr: 'C2',
    title: 'Andersen, Kierkegaard e o dinamarquês antigo',
    emoji: '🦢',
    card: {
      id: 'da-c15',
      title: 'O dinamarquês da literatura',
      emoji: '📜',
      history:
        'Hans Christian Andersen (1805–1875), nascido em Odense, escreveu mais de 150 contos de fadas, como «Den grimme ælling» (O patinho feio) e «Kejserens nye klæder» (A roupa nova do imperador), traduzidos para mais de cem línguas. Søren Kierkegaard (1813–1855), de Copenhague, é considerado o pai do existencialismo e publicou muitas obras com pseudônimos, como «Enten – Eller» (Ou isto, ou aquilo, 1843). J. P. Jacobsen (1847–1885) escreveu o romance «Niels Lyhne» (1880), que o poeta Rilke admirava, e Herman Bang (1857–1912) renovou a prosa com o estilo impressionista de «Ved Vejen» (1886). Todos escreveram antes da reforma ortográfica de 1948, que trocou o «aa» por «å» e passou os substantivos para a minúscula.',
      culture_tip:
        'Em Odense dá para visitar o museu dedicado a Andersen e a casa onde ele passou a infância; em Copenhague, a estátua da Pequena Sereia, inspirada num conto dele, está no porto desde 1913. Os provérbios (ordsprog) ainda aparecem em conversas e manchetes: «Borte godt, men hjemme bedst» («longe é bom, mas em casa é melhor») é o nosso «lar, doce lar». A grafia antiga sobrevive em nomes: Aalborg nunca deixou o «aa», e Aarhus voltou a usá-lo oficialmente em 2011.',
      grammar_why:
        'Os textos anteriores a 1948 seguem outra ortografia: todos os substantivos com maiúscula (como no alemão), «aa» no lugar de «å» e as formas «kunde», «skulde» e «vilde» no lugar de «kunne», «skulle» e «ville». No século XIX, a escrita ainda tinha formas de plural no verbo, como «vi ere» (nós somos) e «de vare» (eles eram), que a fala já não usava, e grafias como «gjør» por «gør». A prosa literária usa o pretérito narrativo, períodos longos e muita subordinação, enquanto os provérbios preferem o presente genérico, o «man» impessoal e frases curtas e simétricas: «Man skal ikke skue hunden på hårene» (não se deve julgar o cão pelo pelo, ou seja, as aparências enganam).',
      grammar_examples: [
        ['«Det gjør ikke noget at være født i Andegaarden, naar man kun har ligget i et Svaneæg!» (Den grimme ælling, 1843)', '«Não faz mal nascer no quintal dos patos quando se esteve num ovo de cisne!» (O patinho feio, 1843)'],
        ['«Men han har jo ikke noget paa!» sagde et lille Barn. (Kejserens nye klæder, 1837)', '«Mas ele não está vestindo nada!», disse uma criancinha. (A roupa nova do imperador, 1837)'],
        ['Livet forstås baglæns, men må leves forlæns.', 'A vida se entende olhando para trás, mas precisa ser vivida olhando para a frente. (Kierkegaard, forma moderna de uma anotação de diário de 1843)'],
        ['Når katten er ude, spiller musene på bordet.', 'Quando o gato sai, os ratos fazem a festa (literalmente: «brincam em cima da mesa»).'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'da-u15-l1',
        title: 'Andersen, o contador de histórias',
        kind: 'licao',
        words: ['ælling', 'svane', 'digt', 'rørende', 'ensomhed', 'udgive'],
        cloze: [
          {
            sentence: 'H.C. Andersen ___ sine første eventyr i 1835, og siden er de blevet oversat til mere end hundrede sprog.',
            answer: 'udgav',
            options: ['udgav', 'udgive', 'udgivet'],
            translation: 'H. C. Andersen publicou os seus primeiros contos em 1835, e desde então eles foram traduzidos para mais de cem línguas.',
          },
          {
            sentence: '«Den grimme ælling» handler om en fugl, der føler sig anderledes, og mange læsere synes, at historien er dybt ___.',
            answer: 'rørende',
            options: ['rørende', 'rørt', 'rører'],
            translation: '«O patinho feio» fala de uma ave que se sente diferente, e muitos leitores acham a história profundamente comovente.',
          },
          {
            sentence: 'Selvom Andersen voksede op som søn af en fattig skomager i Odense, ___ han verdensberømt.',
            answer: 'blev',
            options: ['blev', 'bliver', 'blevet'],
            translation: 'Embora Andersen tenha crescido como filho de um sapateiro pobre em Odense, ele ficou famoso no mundo inteiro.',
          },
        ],
        voice: {
          bot: 'Hvilket af H.C. Andersens eventyr kan du bedst lide, og hvorfor? Og synes du, at det kun er for børn?',
          botTranslation: 'De qual conto de H. C. Andersen você mais gosta, e por quê? E você acha que ele é só para crianças?',
          expected: [
            'Jeg kan bedst lide «Den grimme ælling», fordi den handler om at være anderledes. Ællingen bliver drillet af alle, men til sidst opdager den, at den er en svane. Det er ikke kun en historie for børn; den handler også om ensomhed og om at finde sin plads i verden.',
            'Den grimme ælling',
            'anderledes',
            'svane',
          ],
          hint: 'Escolha um conto, resuma o enredo no presente, interprete o tema e responda à segunda pergunta com um argumento.',
        },
        communityPrompt: 'Reconte em dinamarquês, em 6 frases no pretérito, um conto de Andersen de que você se lembre, e termine com uma frase sobre a «moral» da história.',
      },
      {
        id: 'da-u15-l2',
        title: 'Kierkegaard, Jacobsen e Bang',
        kind: 'licao',
        words: ['angst', 'tvivle', 'fortvivlet', 'længsel', 'evig', 'eksistere'],
        cloze: [
          {
            sentence: 'Kierkegaard udgav mange af sine bøger under ___, så læseren ikke skulle læse dem som hans egne meninger.',
            answer: 'pseudonym',
            options: ['pseudonym', 'pseudonymet', 'pseudonymer'],
            translation: 'Kierkegaard publicou muitos dos seus livros sob pseudônimo, para que o leitor não os lesse como opiniões dele próprio.',
          },
          {
            sentence: 'I romanen «Niels Lyhne» ___ hovedpersonen allerede som barn troen på Gud.',
            answer: 'mister',
            options: ['mister', 'miste', 'mistet'],
            translation: 'No romance «Niels Lyhne», o protagonista perde a fé em Deus ainda criança.',
          },
          {
            sentence: 'Herman Bangs roman «Ved Vejen» handler om en ___ kvinde, der lever et stille liv i en lille by ved jernbanen.',
            answer: 'ensom',
            options: ['ensom', 'ensomt', 'ensomme'],
            translation: 'O romance «Ved Vejen», de Herman Bang, fala de uma mulher solitária que leva uma vida quieta numa cidadezinha à beira da ferrovia.',
          },
        ],
        voice: {
          bot: 'Kierkegaard skrev, at livet forstås baglæns, men må leves forlæns. Hvad tror du, han mente med det?',
          botTranslation: 'Kierkegaard escreveu que a vida se entende olhando para trás, mas precisa ser vivida olhando para a frente. O que você acha que ele quis dizer com isso?',
          expected: [
            'Jeg tror, han mente, at vi først forstår vores valg bagefter. Men vi kan ikke vente med at leve, til vi har forstået alt. Vi må vælge nu, selvom vi tvivler, og det er netop det, der kan give angst.',
            'bagefter',
            'vælge',
            'tvivler',
          ],
          hint: 'Interprete a frase com as suas palavras, ligue-a à escolha e à dúvida e use pelo menos uma concessiva com «selvom».',
        },
        communityPrompt: 'Escreva em dinamarquês um parágrafo de 6 frases sobre uma escolha difícil da sua vida que você só entendeu depois, citando a frase de Kierkegaard e usando «tvivle», «længsel» ou «angst».',
      },
      {
        id: 'da-u15-l3',
        title: 'Desafio de voz: provérbios e a grafia antiga',
        kind: 'voz',
        words: ['gammeldags', 'stave', 'bogstav', 'historisk', 'ældgammel', 'alfabet'],
        cloze: [
          {
            sentence: 'Før retskrivningsreformen i 1948 ___ man «aa» i stedet for «å» og alle navneord med stort.',
            answer: 'skrev',
            options: ['skrev', 'skriver', 'skrevet'],
            translation: 'Antes da reforma ortográfica de 1948, escrevia-se «aa» em vez de «å» e todos os substantivos com maiúscula.',
          },
          {
            sentence: 'Man skal ikke skue hunden på ___.',
            answer: 'hårene',
            options: ['hårene', 'håret', 'hår'],
            translation: 'Não se deve julgar o cão pelo pelo (as aparências enganam).',
          },
          {
            sentence: 'Borte godt, men hjemme ___.',
            answer: 'bedst',
            options: ['bedst', 'bedre', 'godt'],
            translation: 'Longe é bom, mas em casa é melhor (lar, doce lar).',
          },
        ],
        voice: {
          bot: 'Du kom en time for sent til middagen, men du har kage med! Har du et dansk ordsprog til det?',
          botTranslation: 'Você chegou uma hora atrasado para o jantar, mas trouxe bolo! Você tem um provérbio dinamarquês para isso?',
          expected: [
            'Ja: Bedre sent end aldrig! Undskyld forsinkelsen, men kagen er hjemmelavet, så jeg håber, at I tilgiver mig.',
            'bedre sent end aldrig',
            'undskyld',
            'kagen',
          ],
          hint: 'Responda com o provérbio certo, peça desculpas com humor e use a forma definida de «kage».',
        },
        communityPrompt: 'Transcreva para a ortografia moderna a frase de Andersen «Det gjør ikke noget at være født i Andegaarden, naar man kun har ligget i et Svaneæg!» e explique em português quais mudanças vêm da reforma de 1948.',
      },
      {
        id: 'da-u15-p',
        title: 'Prova da unidade',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Du skal holde en kort tale om dansk litteratur på biblioteket i Odense. Hvordan begynder du?',
          botTranslation: 'Você vai fazer um discurso curto sobre literatura dinamarquesa na biblioteca de Odense. Como você começa?',
          expected: [
            'Kære alle. Dansk litteratur er meget mere end H.C. Andersens eventyr, selvom de er verdensberømte. Kierkegaard lærte os at tvivle og at vælge, og J.P. Jacobsen og Herman Bang viste, hvor stærkt man kan skrive om længsel og ensomhed. Deres sprog er gammeldags, men deres spørgsmål er stadig aktuelle.',
            'Andersen',
            'Kierkegaard',
            'længsel',
            'aktuelle',
          ],
          hint: 'Abra com uma saudação formal, cite pelo menos três autores com uma ideia de cada e feche ligando o passado ao presente.',
        },
        communityPrompt: 'Escreva em dinamarquês um ensaio curto (10–12 frases) sobre um dos autores desta unidade, com um provérbio dinamarquês, uma citação curta na grafia original e a mesma citação na grafia moderna.',
      },
    ],
  },
];
