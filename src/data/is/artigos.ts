import type { ArticleSeed } from '../artigos';

/** Artigos culturais graduados do islandês (ver src/data/artigos.ts). */
export const ARTIGOS_IS: ArticleSeed[] = [
  {
    id: 'is-a-pylsa',
    level: 'A1.1',
    title: 'Pylsa með öllu',
    emoji: '🌭',
    paragraphs: [
      'Pylsa er mjög vinsæll matur á Íslandi. Margir borða pylsu „með öllu“: með lauk, tómatsósu og sinnepi.',
      'Pylsan er ódýr og góð. Maður kaupir pylsu í sjoppu og borðar hana þar.',
    ],
    translation: [
      'O cachorro-quente é uma comida muito popular na Islândia. Muita gente come o cachorro-quente “com tudo”: com cebola, ketchup e mostarda.',
      'O cachorro-quente é barato e bom. A gente compra o cachorro-quente num quiosque e come ali mesmo.',
    ],
    glossary: [
      ['öllu', 'tudo (em “með öllu”, com tudo)'],
      ['lauk', 'cebola'],
      ['tómatsósu', 'ketchup'],
      ['sinnepi', 'mostarda'],
      ['ódýr', 'barato'],
      ['sjoppu', 'quiosque, lanchonete (de “sjoppa”)'],
    ],
    questions: [
      { q: 'O que quer dizer “pylsa með öllu”?', options: ['Cachorro-quente com tudo', 'Cachorro-quente sem nada', 'Peixe com batata'], answer: 0 },
      { q: 'Como é o cachorro-quente, segundo o texto?', options: ['Caro e raro', 'Barato e bom', 'Só para o verão'], answer: 1 },
    ],
  },
  {
    id: 'is-a-sundlaugar',
    level: 'A2.1',
    title: 'Sundlaugar og heitir pottar',
    emoji: '♨️',
    paragraphs: [
      'Á Íslandi eru margar sundlaugar. Vatnið er heitt, því það kemur úr jörðinni. Fólk fer í sund allt árið, líka þegar það er kalt úti.',
      'Í heitu pottunum situr fólk og talar saman um veðrið, fréttir og stjórnmál. Margir segja að heiti potturinn sé eins og kaffihús Íslendinga.',
      'Áður en maður fer í sundlaugina verður maður að þvo sér vel, án sundfata.',
    ],
    translation: [
      'Na Islândia há muitas piscinas. A água é quente, porque vem da terra. As pessoas vão nadar o ano inteiro, também quando está frio lá fora.',
      'Nas banheiras quentes (“heitir pottar”), as pessoas ficam sentadas conversando sobre o tempo, as notícias e a política. Muitos dizem que o “heiti potturinn” é como o café dos islandeses.',
      'Antes de entrar na piscina, é preciso se lavar bem, sem roupa de banho.',
    ],
    glossary: [
      ['jörðinni', 'a terra, o chão'],
      ['árið', 'o ano (em “allt árið”, o ano inteiro)'],
      ['pottunum / potturinn', 'as banheiras / a banheira (quentes, ao ar livre)'],
      ['veðrið', 'o tempo (clima)'],
      ['sundfata', 'roupa de banho'],
    ],
    forms: [['kemur', 'koma']],
    questions: [
      { q: 'Por que a água das piscinas é quente?', options: ['Porque vem da terra', 'Porque é aquecida a gás', 'Porque o sol esquenta'], answer: 0 },
      { q: 'Do que se fala nos “heitir pottar”?', options: ['Só de esporte', 'Do tempo, das notícias e da política', 'Ninguém fala nada'], answer: 1 },
      { q: 'O que é preciso fazer antes de entrar na piscina?', options: ['Pagar em dinheiro', 'Lavar-se bem, sem roupa de banho', 'Pôr uma touca'], answer: 1 },
    ],
  },
  {
    id: 'is-a-jolasveinar',
    level: 'B1.1',
    title: 'Jólasveinarnir þrettán',
    emoji: '🎅',
    paragraphs: [
      'Á Íslandi er ekki einn jólasveinn, heldur þrettán. Þeir búa uppi í fjöllunum hjá Grýlu, sem étur óþekk börn.',
      'Í desember kemur einn jólasveinn á dag. Börnin setja skóinn út í glugga og fá nammi eða eitthvað lítið í hann ef þau hafa verið góð. Ef þau hafa verið óþekk fá þau kartöflu.',
      'Jólasveinarnir heita skemmtilegum nöfnum: Stúfur er minnstur, Hurðaskellir skellir hurðum, Gluggagægir horfir inn um glugga og Kertasníkir stelur kertum.',
      'Og svo er það jólakötturinn: hann étur börn sem fá ekkert nýtt til að fara í fyrir jólin.',
    ],
    translation: [
      'Na Islândia, não há um “jólasveinn” (rapaz do Natal), e sim treze: uns trolls brincalhões, e não Papais Noéis. Eles moram lá em cima nas montanhas, com a Grýla, que devora crianças malcriadas.',
      'Em dezembro, chega um jólasveinn por dia. As crianças põem um sapato na janela e ganham doce ou alguma coisinha nele se foram boazinhas. Se foram malcriadas, ganham uma batata.',
      'Os jólasveinar têm nomes divertidos: Stúfur é o menor, Hurðaskellir bate as portas, Gluggagægir espia pelas janelas e Kertasníkir rouba velas.',
      'E ainda tem o Gato de Natal (“jólakötturinn”): ele devora as crianças que não ganham nada novo para vestir antes do Natal.',
    ],
    glossary: [
      ['jólasveinarnir / jólasveinn', 'os rapazes do Natal / o rapaz do Natal (os “Papais Noéis” islandeses)'],
      ['fjöllunum', 'as montanhas'],
      ['óþekk', 'malcriadas, desobedientes'],
      ['desember', 'dezembro'],
      ['skóinn', 'o sapato'],
      ['kertum', 'velas'],
      ['jólakötturinn', 'o Gato de Natal'],
      ['jólin', 'o Natal'],
    ],
    forms: [
      ['börn', 'barn'],
      ['börnin', 'barn'],
      ['kemur', 'koma'],
      ['nöfnum', 'nafn'],
      ['minnstur', 'lítill'],
      ['skellir', 'skella'],
      ['stelur', 'stela'],
      ['étur', 'éta'],
      ['nýtt', 'nýr'],
    ],
    questions: [
      { q: 'Quantos jólasveinar há na Islândia?', options: ['Um', 'Treze', 'Vinte e quatro'], answer: 1 },
      { q: 'O que ganha a criança malcriada no sapato?', options: ['Um presente', 'Uma batata', 'Nada, nem o sapato'], answer: 1 },
      { q: 'Quem o Gato de Natal devora?', options: ['Quem não ganha nada novo para vestir antes do Natal', 'Quem come muito doce', 'Os jólasveinar'], answer: 0 },
    ],
  },
  {
    id: 'is-a-althingi',
    level: 'B2.1',
    title: 'Alþingi á Þingvöllum',
    emoji: '🏛️',
    paragraphs: [
      'Alþingi er eitt elsta þing í heimi. Það var stofnað árið 930 á Þingvöllum, og þar hittust höfðingjar landsins einu sinni á ári, á sumrin.',
      'Á þinginu voru lög sögð upp og deilur leystar. Lögsögumaðurinn kunni lögin utan að og sagði þau upphátt, því að þá voru engar bækur á íslensku.',
      'Árið 1000 ákvað Alþingi að Íslendingar skyldu taka kristni. Þeir sem vildu máttu þó áfram blóta í leyni.',
      'Í dag er Alþingi í Reykjavík, en Þingvellir eru þjóðgarður og á heimsminjaskrá UNESCO. Þar má sjá hvar Norður-Ameríkuflekinn og Evrasíuflekinn færast í sundur.',
    ],
    translation: [
      'O Alþingi é um dos parlamentos mais antigos do mundo. Foi fundado no ano de 930 em Þingvellir, e ali os chefes do país se reuniam uma vez por ano, no verão.',
      'Na assembleia, as leis eram recitadas e as disputas resolvidas. O “lögsögumaður” (o recitador da lei) sabia as leis de cor e as dizia em voz alta, porque naquela época não havia livros em islandês.',
      'No ano 1000, o Alþingi decidiu que os islandeses adotariam o cristianismo. Quem quisesse, porém, ainda podia fazer sacrifícios aos deuses antigos às escondidas.',
      'Hoje o Alþingi fica em Reykjavík, mas Þingvellir é parque nacional e Patrimônio Mundial da UNESCO. Ali dá para ver onde as placas da América do Norte e da Eurásia se afastam uma da outra.',
    ],
    glossary: [
      ['Alþingi', 'o Alþingi, o parlamento islandês (“a assembleia de todos”)'],
      ['höfðingjar', 'chefes, líderes'],
      ['lögsögumaðurinn', 'o recitador da lei'],
      ['heimsminjaskrá', 'a lista do Patrimônio Mundial'],
    ],
    forms: [
      ['bækur', 'bók'],
      ['ákvað', 'ákveða'],
    ],
    questions: [
      { q: 'Quando o Alþingi foi fundado?', options: ['No ano de 930', 'No ano 1000', 'Em 1944'], answer: 0 },
      { q: 'Por que o recitador da lei sabia as leis de cor?', options: ['Porque era proibido escrevê-las', 'Porque não havia livros em islandês', 'Porque as leis eram cantadas na igreja'], answer: 1 },
      { q: 'O que dá para ver em Þingvellir hoje?', options: ['Onde duas placas tectônicas se afastam', 'O maior vulcão da Europa', 'A casa do primeiro rei da Islândia'], answer: 0 },
    ],
  },
  {
    id: 'is-a-handritin',
    level: 'C1.1',
    title: 'Handritin koma heim',
    emoji: '📜',
    paragraphs: [
      'Á miðöldum skrifuðu Íslendingar sögur, lög og ljóð á kálfskinn. Þessi handrit geyma meðal annars Íslendingasögurnar, Eddukvæðin og Snorra-Eddu, sem eru meðal merkustu bókmennta Norðurlanda.',
      'Á 17. og 18. öld safnaði Árni Magnússon handritum um allt land og flutti þau til Kaupmannahafnar, sem þá var höfuðborg ríkisins. Í brunanum mikla árið 1728 brann margt í borginni, en Árni bjargaði flestum handritunum.',
      'Eftir að Ísland varð lýðveldi árið 1944 kröfðust Íslendingar þess að fá handritin heim. Árið 1971 kom danskt herskip til Reykjavíkur með Konungsbók Eddukvæða og Flateyjarbók, og þúsundir manna biðu við höfnina.',
      'Í dag eru handritin varðveitt bæði í Reykjavík og í Kaupmannahöfn, og fræðimenn á báðum stöðum rannsaka þau saman.',
    ],
    translation: [
      'Na Idade Média, os islandeses escreviam sagas, leis e poemas em pele de bezerro (pergaminho). Esses manuscritos guardam, entre outras obras, as sagas dos islandeses, os poemas da Edda e a Edda de Snorri, que estão entre as obras mais importantes da literatura nórdica.',
      'Nos séculos XVII e XVIII, Árni Magnússon juntou manuscritos pelo país inteiro e os levou para Copenhague, que era então a capital do reino. No grande incêndio de 1728, muita coisa queimou na cidade, mas Árni salvou a maioria dos manuscritos.',
      'Depois que a Islândia virou república, em 1944, os islandeses exigiram que os manuscritos voltassem para casa. Em 1971, um navio de guerra dinamarquês chegou a Reykjavík com o Codex Regius dos poemas da Edda e o Flateyjarbók, e milhares de pessoas esperavam no porto.',
      'Hoje os manuscritos são conservados tanto em Reykjavík quanto em Copenhague, e pesquisadores dos dois lugares os estudam juntos.',
    ],
    glossary: [
      ['flestum', 'a maioria (de)'],
      ['handritunum', 'os manuscritos (dativo de “handritin”)'],
      ['kálfskinn', 'pele de bezerro, pergaminho'],
    ],
    forms: [
      ['kröfðust', 'krefjast'],
      ['brann', 'brenna'],
    ],
    questions: [
      { q: 'Em que material os manuscritos foram escritos?', options: ['Papel', 'Pele de bezerro', 'Madeira'], answer: 1 },
      { q: 'O que aconteceu em 1728?', options: ['Um grande incêndio em Copenhague', 'A independência da Islândia', 'A volta dos manuscritos'], answer: 0 },
      { q: 'Como os primeiros manuscritos voltaram em 1971?', options: ['De avião, em segredo', 'Num navio de guerra dinamarquês, com milhares esperando no porto', 'Pelo correio'], answer: 1 },
    ],
  },
];
