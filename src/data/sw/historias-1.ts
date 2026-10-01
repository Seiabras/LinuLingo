import type { StorySeed } from '../types';

/** Histórias interativas em suaíli, A1.1 a B1.4 (uma por subnível). */
export const STORIES_SW_1: StorySeed[] = [
  // ───────────────────────── A1.1 ─────────────────────────
  {
    id: 'sw-h01',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Karibu Dar es Salaam!',
    emoji: '✈️',
    summary: 'O Linu desce do avião em Dar es Salaam e precisa cumprimentar, agradecer e dizer o nome pela primeira vez em suaíli.',
    cultural_context:
      'Dar es Salaam é a maior cidade da Tanzânia e o seu principal porto; o nome vem do árabe e quer dizer “casa da paz”. Na chegada, todo mundo cumprimenta antes de qualquer coisa: “Jambo” ou “Habari?” com desconhecidos, “Mambo?” entre jovens e “Shikamoo” para os mais velhos. “Karibu” (bem-vindo) é a palavra que o visitante mais ouve, e serve também para “de nada”.',
    start: 'start',
    glossary: [
      ['karibu', 'bem-vindo; de nada'],
      ['habari?', 'como vai? (lit. notícias?)'],
      ['nzuri', 'bem, bom'],
      ['asante', 'obrigado'],
      ['jina langu ni…', 'o meu nome é…'],
      ['uwanja wa ndege', 'aeroporto'],
      ['teksi', 'táxi'],
    ],
    nodes: {
      start: {
        emoji: '🛬',
        text: 'Linu anafika Dar es Salaam. Kuna joto sana. Mwanamke mmoja anatabasamu na kusema: “Karibu Tanzania! Habari?”',
        translation: 'O Linu chega a Dar es Salaam. Está muito quente. Uma mulher sorri e diz: “Bem-vindo à Tanzânia! Como vai?”',
        choices: [
          { text: 'Nzuri, asante!', translation: 'Bem, obrigado!', next: 'jina' },
          {
            text: 'Karibu!',
            translation: 'Bem-vindo!',
            wrong: 'É a mulher que dá as boas-vindas ao Linu. À pergunta “Habari?” (como vai?), responde-se “Nzuri” (bem), e de preferência com um “asante”.',
          },
        ],
      },
      jina: {
        emoji: '🙂',
        text: 'Mwanamke anasema: “Jina langu ni Amina. Jina lako nani?” Linu anafikiri kidogo.',
        translation: 'A mulher diz: “O meu nome é Amina. Qual é o seu nome?” O Linu pensa um pouco.',
        choices: [
          { text: 'Jina langu ni Linu.', translation: 'O meu nome é Linu.', next: 'mbrazili' },
          { text: 'Mimi ni Linu, ninatoka Brazili.', translation: 'Eu sou o Linu, venho do Brasil.', next: 'mbrazili' },
        ],
      },
      mbrazili: {
        emoji: '🇧🇷',
        text: 'Amina anacheka: “Brazili? Mpira! Samba!” Anauliza: “Unakwenda wapi sasa?”',
        translation: 'A Amina ri: “Brasil? Futebol! Samba!” E pergunta: “Para onde você vai agora?”',
        choices: [
          { text: 'Ninakwenda hotelini.', translation: 'Vou para o hotel.', next: 'teksi' },
          { text: 'Sijui. Nisaidie, tafadhali.', translation: 'Não sei. Me ajude, por favor.', next: 'msaada' },
        ],
      },
      msaada: {
        emoji: '🗺️',
        text: 'Amina anaangalia karatasi ya Linu. “Hoteli yako iko mjini. Chukua teksi”, anasema.',
        translation: 'A Amina olha o papel do Linu. “O seu hotel fica no centro. Pegue um táxi”, diz ela.',
        choices: [{ text: 'Asante sana, Amina!', translation: 'Muito obrigado, Amina!', next: 'teksi' }],
      },
      teksi: {
        emoji: '🚕',
        text: 'Nje ya uwanja wa ndege kuna teksi nyingi. Dereva anasema: “Jambo! Karibu! Twende?”',
        translation: 'Fora do aeroporto há muitos táxis. O motorista diz: “Olá! Bem-vindo! Vamos?”',
        choices: [
          { text: 'Jambo! Ndiyo, twende hotelini, tafadhali.', translation: 'Olá! Sim, vamos para o hotel, por favor.', next: 'final_bom' },
          { text: 'Linu anaingia bila kusema kitu.', translation: 'O Linu entra sem dizer nada.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🌴',
        text: 'Dereva anacheka: “Unaongea Kiswahili vizuri!” Linu anafurahi sana. “Asante!” anasema.',
        translation: 'O motorista ri: “Você fala suaíli bem!” O Linu fica muito feliz. “Obrigado!”, diz ele.',
        ending: { tone: 'bom', title: 'Primeiras palavras', message: 'O Linu cumprimentou, agradeceu e disse o nome: o começo perfeito na Tanzânia, onde cumprimentar vem antes de tudo.' },
      },
      final_neutro: {
        emoji: '😶',
        text: 'Dereva anaendesha kimya. Linu anafikiri: “Kesho nitasema ‘jambo’ kwanza.”',
        translation: 'O motorista dirige em silêncio. O Linu pensa: “Amanhã vou dizer ‘jambo’ primeiro.”',
        ending: { tone: 'neutro', title: 'Silêncio no táxi', message: 'Na África Oriental, entrar sem cumprimentar soa frio. Um “jambo” abre qualquer conversa.' },
      },
    },
  },
  // ───────────────────────── A1.2 ─────────────────────────
  {
    id: 'sw-h04',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Sokoni Kariakoo',
    emoji: '🍌',
    summary: 'No enorme mercado de Kariakoo, em Dar es Salaam, o Linu compra frutas e treina os números.',
    cultural_context:
      'Kariakoo é o maior mercado de Dar es Salaam, com um prédio central e ruas cheias de bancas ao redor, onde se vende de tudo: frutas, peixe, tecidos, eletrônicos. O nome vem do inglês “carrier corps”, o corpo de carregadores africanos da Primeira Guerra Mundial, que acampava ali. O dinheiro é o xelim tanzaniano (shilingi), e é comum pedir e dar preços em milhares.',
    start: 'start',
    glossary: [
      ['soko', 'mercado'],
      ['bei gani?', 'quanto custa? (lit. que preço?)'],
      ['shilingi', 'xelim (o dinheiro)'],
      ['elfu', 'mil'],
      ['ndizi', 'banana'],
      ['embe', 'manga'],
      ['nataka', 'eu quero'],
    ],
    nodes: {
      start: {
        emoji: '🧺',
        text: 'Sokoni Kariakoo kuna watu wengi sana. Mama mmoja anauza ndizi na maembe. “Karibu, mwanangu! Unataka nini?”',
        translation: 'No mercado de Kariakoo há muita gente. Uma senhora vende bananas e mangas. “Bem-vindo, meu filho! O que você quer?”',
        choices: [
          { text: 'Nataka ndizi, tafadhali.', translation: 'Quero bananas, por favor.', next: 'ndizi' },
          { text: 'Nataka maembe, tafadhali.', translation: 'Quero mangas, por favor.', next: 'maembe' },
        ],
      },
      ndizi: {
        emoji: '🍌',
        text: '“Ndizi tano ni shilingi elfu moja”, anasema mama. Linu ana shilingi elfu mbili.',
        translation: '“Cinco bananas custam mil xelins”, diz a senhora. O Linu tem dois mil xelins.',
        choices: [
          { text: 'Nipe ndizi kumi, tafadhali.', translation: 'Me dê dez bananas, por favor.', next: 'kumi' },
          {
            text: 'Nipe ndizi tano. Hii hapa shilingi elfu tatu.',
            translation: 'Me dê cinco bananas. Aqui estão três mil xelins.',
            wrong: 'Cinco bananas custam “elfu moja”, mil xelins, e o Linu só tem “elfu mbili”, dois mil. Ele não tem três mil (elfu tatu) para dar.',
          },
        ],
      },
      maembe: {
        emoji: '🥭',
        text: '“Embe moja ni shilingi mia tano”, anasema mama. “Maembe matatu ni elfu moja na mia tano.”',
        translation: '“Uma manga custa quinhentos xelins”, diz a senhora. “Três mangas custam mil e quinhentos.”',
        choices: [
          { text: 'Nipe maembe matatu, tafadhali.', translation: 'Me dê três mangas, por favor.', next: 'malipo' },
          { text: 'Ni ghali! Nipe embe moja tu.', translation: 'É caro! Me dê só uma manga.', next: 'malipo' },
        ],
      },
      kumi: {
        emoji: '🧮',
        text: 'Mama anahesabu: “Moja, mbili, tatu… kumi! Ndizi kumi ni shilingi elfu mbili.” Linu anatoa pesa.',
        translation: 'A senhora conta: “Um, dois, três… dez! Dez bananas custam dois mil xelins.” O Linu entrega o dinheiro.',
        choices: [{ text: 'Asante, mama!', translation: 'Obrigado, senhora!', next: 'malipo' }],
      },
      malipo: {
        emoji: '💵',
        text: 'Mama anatabasamu na anaweka tunda moja zaidi kwenye mfuko. “Hii ni zawadi”, anasema.',
        translation: 'A senhora sorri e põe uma fruta a mais no saco. “Isto é um presente”, diz ela.',
        choices: [
          { text: 'Asante sana! Kwa heri, mama!', translation: 'Muito obrigado! Tchau, senhora!', next: 'final_bom' },
          { text: 'Linu anaondoka haraka.', translation: 'O Linu vai embora depressa.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '😊',
        text: '“Kwa heri, mwanangu! Karibu tena!” Linu anatembea sokoni na mfuko wa matunda.',
        translation: '“Tchau, meu filho! Volte sempre!” O Linu anda pelo mercado com o saco de frutas.',
        ending: { tone: 'bom', title: 'Frutas e números', message: 'O Linu pediu, contou e agradeceu em suaíli — e ainda ganhou uma fruta de presente.' },
      },
      final_neutro: {
        emoji: '🚶',
        text: 'Mama anamwangalia Linu akiondoka. Linu anafikiri: “Nimesahau kusema asante…”',
        translation: 'A senhora olha o Linu indo embora. O Linu pensa: “Esqueci de dizer obrigado…”',
        ending: { tone: 'neutro', title: 'Esqueceu o “asante”', message: 'Números certos, mas faltou a despedida: no mercado, a gentileza faz parte da compra.' },
      },
    },
  },
  // ───────────────────────── A2.1 ─────────────────────────
  {
    id: 'sw-h07',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Siku moja Morogoro',
    emoji: '🏡',
    summary: 'O Linu passa um dia com a família anfitriã em Morogoro, ao pé das montanhas Uluguru, e aprende a falar da família e da rotina.',
    cultural_context:
      'Morogoro fica no interior da Tanzânia, ao pé das montanhas Uluguru, numa região agrícola de frutas, arroz e verduras. Nas famílias tanzanianas, os mais velhos são tratados com muito respeito: as crianças os cumprimentam com “Shikamoo”, e eles respondem “Marahaba”. É comum que primos, avós e tios morem perto ou na mesma casa, e todos ajudam no trabalho do dia.',
    start: 'start',
    glossary: [
      ['familia', 'família'],
      ['bibi', 'avó; senhora'],
      ['babu', 'avô'],
      ['shikamoo / marahaba', 'cumprimento aos mais velhos / resposta'],
      ['shamba', 'roça, plantação'],
      ['kupika', 'cozinhar'],
      ['ugali', 'polenta firme de milho'],
    ],
    nodes: {
      start: {
        emoji: '🌄',
        text: 'Asubuhi, Linu anaamka nyumbani kwa familia ya Mzee Juma. Bibi yuko jikoni, na watoto wanacheza nje. Bibi anamwona Linu.',
        translation: 'De manhã, o Linu acorda na casa da família do senhor Juma. A avó está na cozinha, e as crianças brincam lá fora. A avó vê o Linu.',
        choices: [
          { text: 'Shikamoo, bibi!', translation: 'Meus respeitos, vovó!', next: 'bibi' },
          {
            text: 'Mambo, bibi!',
            translation: 'E aí, vovó!',
            wrong: '“Mambo” é cumprimento de jovens e amigos. Para os mais velhos, o respeito pede “Shikamoo”.',
          },
        ],
      },
      bibi: {
        emoji: '👵',
        text: '“Marahaba, mwanangu! Umelala salama?” anauliza bibi. “Leo tunakwenda shambani. Unataka kuja?”',
        translation: '“Obrigada, meu filho! Dormiu bem?”, pergunta a avó. “Hoje vamos para a roça. Quer vir?”',
        choices: [
          { text: 'Ndiyo! Ninapenda kufanya kazi shambani.', translation: 'Sim! Eu gosto de trabalhar na roça.', next: 'shamba' },
          { text: 'Nitabaki nyumbani kupika na wewe.', translation: 'Vou ficar em casa cozinhando com a senhora.', next: 'jikoni' },
        ],
      },
      shamba: {
        emoji: '🌽',
        text: 'Shambani, Mzee Juma na watoto wake wanalima mahindi na mboga. Mtoto mmoja, Neema, anamfundisha Linu kupanda mbegu.',
        translation: 'Na roça, o senhor Juma e os filhos cultivam milho e verduras. Uma das crianças, a Neema, ensina o Linu a plantar sementes.',
        choices: [{ text: 'Linu anapanda mbegu kwa uangalifu.', translation: 'O Linu planta as sementes com cuidado.', next: 'chakula' }],
      },
      jikoni: {
        emoji: '🍲',
        text: 'Bibi anapika ugali na mboga za majani. Anamwonyesha Linu jinsi ya kukoroga ugali kwa mwiko mkubwa. “Ugali ni mzito!” anacheka Linu.',
        translation: 'A avó cozinha ugali com verduras. Ela mostra ao Linu como mexer o ugali com uma colher de pau grande. “O ugali é pesado!”, ri o Linu.',
        choices: [{ text: 'Linu anakoroga mpaka ugali uwe tayari.', translation: 'O Linu mexe até o ugali ficar pronto.', next: 'chakula' }],
      },
      chakula: {
        emoji: '🍽️',
        text: 'Jioni familia yote inakula pamoja. Mzee Juma anauliza: “Linu, familia yako iko wapi? Una ndugu wangapi?”',
        translation: 'À noitinha, a família toda come junto. O senhor Juma pergunta: “Linu, onde está a sua família? Quantos irmãos você tem?”',
        choices: [
          { text: 'Familia yangu iko Brazili. Nina dada mmoja na kaka wawili.', translation: 'A minha família está no Brasil. Tenho uma irmã e dois irmãos.', next: 'final_bom' },
          { text: 'Sitaki kuongea kuhusu familia.', translation: 'Não quero falar sobre família.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🌙',
        text: 'Watoto wanauliza maswali mengi kuhusu Brazili. Bibi anasema: “Sasa wewe ni sehemu ya familia yetu.”',
        translation: 'As crianças fazem muitas perguntas sobre o Brasil. A avó diz: “Agora você faz parte da nossa família.”',
        ending: { tone: 'bom', title: 'Parte da família', message: 'Com o “shikamoo” na hora certa e falando da própria família, o Linu ganhou um lugar à mesa.' },
      },
      final_neutro: {
        emoji: '😐',
        text: 'Kuna kimya kidogo. Mzee Juma anasema kwa upole: “Hakuna shida.” Lakini Linu anaona kwamba watoto walitaka kujua zaidi.',
        translation: 'Há um pequeno silêncio. O senhor Juma diz com gentileza: “Não tem problema.” Mas o Linu percebe que as crianças queriam saber mais.',
        ending: { tone: 'neutro', title: 'Conversa curta', message: 'Na Tanzânia, perguntar pela família é carinho. Contar um pouco da sua abre muitas portas.' },
      },
    },
  },
  // ───────────────────────── A2.2 ─────────────────────────
  {
    id: 'sw-h10',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Kupatana bei Darajani',
    emoji: '🧣',
    summary: 'No mercado Darajani, em Stone Town, Zanzibar, o Linu quer comprar uma kanga e aprende a pechinchar com simpatia.',
    cultural_context:
      'Stone Town, o centro antigo da cidade de Zanzibar, é Patrimônio Mundial da UNESCO desde 2000, com ruelas estreitas, portas de madeira entalhadas e o mercado Darajani. A kanga é um tecido retangular estampado, usado pelas mulheres como saia, xale ou pano para carregar bebês, e cada uma traz um provérbio ou uma frase em suaíli. Pechinchar faz parte da compra, sempre com bom humor.',
    start: 'start',
    glossary: [
      ['kanga', 'tecido estampado com um provérbio'],
      ['kupatana bei', 'pechinchar, chegar a um acordo no preço'],
      ['punguza', 'abaixe (o preço)'],
      ['ghali', 'caro'],
      ['rahisi', 'barato; fácil'],
      ['methali', 'provérbio'],
    ],
    nodes: {
      start: {
        emoji: '🏪',
        text: 'Duka moja Darajani lina kanga nyingi za rangi nzuri. Mwuzaji anasema: “Karibu! Kanga hii ni shilingi elfu kumi na tano.”',
        translation: 'Uma loja em Darajani tem muitas kangas de cores bonitas. O vendedor diz: “Bem-vindo! Esta kanga custa quinze mil xelins.”',
        choices: [
          { text: 'Ni ghali sana! Punguza kidogo, tafadhali.', translation: 'É muito caro! Abaixe um pouco, por favor.', next: 'bei' },
          { text: 'Sawa, nitanunua.', translation: 'Está bem, vou comprar.', next: 'haraka' },
        ],
      },
      haraka: {
        emoji: '😮',
        text: 'Mwuzaji anashangaa: “Hukupatana bei? Hapa Zanzibar tunapenda kuongea kidogo kwanza!” Anacheka na kupunguza bei mwenyewe.',
        translation: 'O vendedor se espanta: “Você não pechinchou? Aqui em Zanzibar gostamos de conversar um pouco primeiro!” Ele ri e abaixa o preço sozinho.',
        choices: [{ text: 'Linu anacheka pia na kuanza kuongea.', translation: 'O Linu ri também e começa a conversar.', next: 'methali' }],
      },
      bei: {
        emoji: '🤝',
        text: '“Kwa rafiki yangu, elfu kumi na mbili”, anasema mwuzaji. Linu alisikia jana kwamba kanga nzuri ni elfu kumi.',
        translation: '“Para o meu amigo, doze mil”, diz o vendedor. O Linu ouviu ontem que uma kanga boa custa dez mil.',
        choices: [
          { text: 'Elfu kumi, rafiki. Tafadhali!', translation: 'Dez mil, amigo. Por favor!', next: 'methali' },
          {
            text: 'Elfu ishirini, tafadhali!',
            translation: 'Vinte mil, por favor!',
            wrong: 'Ishirini é vinte: mais caro do que o vendedor pediu (doze mil)! Para pechinchar, ofereça menos, como “elfu kumi” (dez mil).',
          },
        ],
      },
      methali: {
        emoji: '📜',
        text: 'Mwuzaji anaonyesha maneno kwenye kanga: “Haba na haba hujaza kibaba.” Anaeleza: “Ni methali. Maana yake: kidogo kidogo, kitu kinajaa.”',
        translation: 'O vendedor mostra as palavras na kanga: “Pouco a pouco se enche a medida.” E explica: “É um provérbio. Quer dizer: de pouquinho em pouquinho, a coisa se enche.”',
        choices: [
          { text: 'Ninaipenda! Nitanunua kwa elfu kumi na moja.', translation: 'Adorei! Vou comprar por onze mil.', next: 'final_bom' },
          { text: 'Sitaki methali. Nataka kanga bila maneno.', translation: 'Não quero provérbio. Quero uma kanga sem palavras.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🧣',
        text: 'Mwuzaji anafurahi: “Tumepatana!” Anaikunja kanga vizuri. Linu anarudi hotelini na methali mpya.',
        translation: 'O vendedor fica contente: “Fechamos negócio!” Ele dobra a kanga com cuidado. O Linu volta para o hotel com um provérbio novo.',
        ending: { tone: 'bom', title: 'Pouco a pouco', message: 'O Linu pechinchou com simpatia, entendeu o provérbio e fechou um preço justo para os dois.' },
      },
      final_neutro: {
        emoji: '🤷',
        text: 'Mwuzaji anacheka: “Kila kanga ina maneno, rafiki!” Linu anaondoka bila kitu, lakini anakumbuka methali ile.',
        translation: 'O vendedor ri: “Toda kanga tem palavras, amigo!” O Linu vai embora sem nada, mas se lembra daquele provérbio.',
        ending: { tone: 'neutro', title: 'Kanga sem palavras não existe', message: 'As frases são a alma da kanga: é por elas que as pessoas escolhem uma e não outra.' },
      },
    },
  },
  // ───────────────────────── B1.1 ─────────────────────────
  {
    id: 'sw-h13',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Saa moja asubuhi',
    emoji: '🕖',
    summary: 'Em Arusha, o Linu compra passagem para Moshi e se confunde com a hora suaíli, que começa a contar ao amanhecer.',
    cultural_context:
      'Na hora suaíli, o dia começa com o nascer do sol, por volta das seis da manhã, que é “saa kumi na mbili” (a décima segunda hora). Por isso as sete da manhã são “saa moja asubuhi” (a primeira hora da manhã) e as oito da noite são “saa mbili usiku”. Perto da linha do equador, o sol nasce e se põe quase sempre na mesma hora, e o sistema faz muito sentido. Arusha e Moshi ficam no norte da Tanzânia, perto do monte Kilimanjaro.',
    start: 'start',
    glossary: [
      ['saa moja asubuhi', 'sete da manhã (1ª hora do dia)'],
      ['saa mbili', 'oito horas'],
      ['basi', 'ônibus'],
      ['tiketi', 'passagem, bilhete'],
      ['nilichelewa', 'eu me atrasei'],
      ['litaondoka', 'vai partir (o ônibus)'],
    ],
    nodes: {
      start: {
        emoji: '🎫',
        text: 'Linu yuko kwenye kituo cha mabasi cha Arusha. Anamwuliza karani: “Basi la Moshi litaondoka saa ngapi?” Karani anajibu: “Saa moja asubuhi kesho.”',
        translation: 'O Linu está na rodoviária de Arusha. Pergunta ao atendente: “A que horas parte o ônibus para Moshi?” O atendente responde: “Amanhã, às sete da manhã.”',
        choices: [
          { text: 'Linu anaandika: “saa saba asubuhi”.', translation: 'O Linu anota: “saa saba asubuhi”.', next: 'makosa' },
          { text: 'Linu anauliza: “Saa moja ni saa saba kwa saa za Kizungu?”', translation: 'O Linu pergunta: “Saa moja é sete horas no relógio europeu?”', next: 'ufafanuzi' },
        ],
      },
      makosa: {
        emoji: '⏰',
        text: 'Kesho yake Linu alifika kituoni saa sita mchana, kwa sababu alifikiri basi litaondoka saa saba. Kumbe basi lilikuwa limeshaondoka zamani, saa moja asubuhi!',
        translation: 'No dia seguinte, o Linu chegou à rodoviária ao meio-dia, porque achava que o ônibus sairia à “saa saba”. Na verdade, o ônibus já tinha partido havia muito tempo, às sete da manhã!',
        choices: [{ text: 'Linu anaenda kwa karani tena.', translation: 'O Linu vai de novo até o atendente.', next: 'ufafanuzi' }],
      },
      ufafanuzi: {
        emoji: '🌅',
        text: 'Karani anaeleza kwa upole: “Kwetu, siku inaanza jua linapochomoza. Saa moja asubuhi ni saa saba kwa saa za Kizungu.”',
        translation: 'O atendente explica com paciência: “Para nós, o dia começa quando o sol nasce. Saa moja asubuhi são sete horas no relógio europeu.”',
        choices: [
          { text: 'Nitakuja mapema kesho. Nipe tiketi moja, tafadhali.', translation: 'Amanhã virei cedo. Me dê uma passagem, por favor.', next: 'safari' },
          {
            text: 'Kwa hiyo saa moja asubuhi ni saa moja usiku kwa Kizungu?',
            translation: 'Então saa moja asubuhi é uma hora da madrugada no relógio europeu?',
            wrong: 'Não: saa moja é a primeira hora depois do nascer do sol (por volta das seis), ou seja, sete da manhã. É só somar seis horas.',
          },
        ],
      },
      safari: {
        emoji: '🚌',
        text: 'Basi lilijaa watu, mizigo na hata kuku wawili. Njiani, Linu aliona mlima mkubwa wenye theluji juu. “Ule ni Kilimanjaro”, jirani yake alisema.',
        translation: 'O ônibus lotou de gente, bagagem e até duas galinhas. No caminho, o Linu viu uma montanha enorme com neve no topo. “Aquele é o Kilimanjaro”, disse o vizinho de banco.',
        choices: [
          { text: 'Nitapanda mlima ule siku moja!', translation: 'Um dia vou subir aquela montanha!', next: 'final_bom' },
          { text: 'Linu alilala safari yote.', translation: 'O Linu dormiu a viagem inteira.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🏔️',
        text: 'Walifika Moshi saa tatu asubuhi. Linu alimwambia jirani: “Sasa ninaelewa saa za Kiswahili: saa tatu asubuhi ni saa tisa kwa saa za Kizungu!”',
        translation: 'Chegaram a Moshi às nove da manhã. O Linu disse ao vizinho: “Agora entendo a hora suaíli: saa tatu asubuhi são nove horas no relógio europeu!”',
        ending: { tone: 'bom', title: 'A hora do sol', message: 'O Linu entendeu que a hora suaíli começa ao amanhecer: basta somar seis horas.' },
      },
      final_neutro: {
        emoji: '😴',
        text: 'Linu aliamka Moshi bila kuona Kilimanjaro. “Nitaiona wakati mwingine”, alijiambia.',
        translation: 'O Linu acordou em Moshi sem ter visto o Kilimanjaro. “Verei outra vez”, disse a si mesmo.',
        ending: { tone: 'neutro', title: 'Dormiu a paisagem', message: 'Chegou a tempo, mas perdeu a vista do Kilimanjaro pela janela.' },
      },
    },
  },
  // ───────────────────────── B1.2 ─────────────────────────
  {
    id: 'sw-h16',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Ufunguo wa nyumba ya mawe',
    emoji: '🔑',
    summary: 'Em Lamu, onde não há carros, o Linu perde a chave de uma casa antiga de pedra e percorre as ruelas perguntando se alguém a encontrou.',
    cultural_context:
      'A Cidade Velha de Lamu, numa ilha do norte do Quênia, é o assentamento suaíli mais antigo e bem conservado da costa, Patrimônio Mundial da UNESCO desde 2001. As casas são de pedra de coral, com portas de madeira entalhadas, e as ruelas são tão estreitas que não passam carros: as pessoas andam a pé, de barco ou de burro.',
    start: 'start',
    glossary: [
      ['ufunguo', 'chave'],
      ['nimepoteza', 'eu perdi (acabei de perder)'],
      ['umeuona?', 'você a viu? (a chave)'],
      ['punda', 'burro'],
      ['mlango', 'porta'],
      ['mchongo', 'entalhe'],
    ],
    nodes: {
      start: {
        emoji: '🏠',
        text: 'Linu amerudi nyumbani baada ya kutembea mjini, lakini mfukoni hakuna kitu. “Nimepoteza ufunguo!” anasema. Mwenye nyumba, Bi Fatma, amesafiri kwenda Mombasa.',
        translation: 'O Linu voltou para casa depois de passear pela cidade, mas não há nada no bolso. “Perdi a chave!”, diz ele. A dona da casa, dona Fatma, viajou para Mombasa.',
        choices: [
          { text: 'Linu anarudi njia aliyopita.', translation: 'O Linu refaz o caminho por onde passou.', next: 'njia' },
          { text: 'Linu anamwuliza jirani.', translation: 'O Linu pergunta ao vizinho.', next: 'jirani' },
        ],
      },
      jirani: {
        emoji: '👳',
        text: 'Jirani, mzee mwenye kofia nyeupe, anasema: “Sijauona ufunguo wako, lakini mtoto wangu amepita sokoni. Mwulize yeye.”',
        translation: 'O vizinho, um senhor de kofia branca, diz: “Não vi a sua chave, mas o meu filho passou pelo mercado. Pergunte a ele.”',
        choices: [{ text: 'Linu anaenda sokoni.', translation: 'O Linu vai ao mercado.', next: 'njia' }],
      },
      njia: {
        emoji: '🫏',
        text: 'Katika vichochoro vyembamba, punda anapita na mzigo wa mchanga. Kijana mmoja anamwona Linu akitafuta chini. “Umepoteza nini, rafiki?”',
        translation: 'Nas ruelas estreitas, passa um burro carregado de areia. Um rapaz vê o Linu procurando no chão. “O que você perdeu, amigo?”',
        choices: [
          { text: 'Nimepoteza ufunguo. Umeuona?', translation: 'Perdi uma chave. Você a viu?', next: 'kijana' },
          {
            text: 'Nimepoteza punda. Umemwona?',
            translation: 'Perdi um burro. Você o viu?',
            wrong: 'O Linu perdeu a chave (ufunguo), não um burro! Repare também no objeto dentro do verbo: -u- para ufunguo (umeuona), -m- para gente e bichos (umemwona).',
          },
        ],
      },
      kijana: {
        emoji: '🧑',
        text: 'Kijana anafikiri. “Ndiyo! Nimeuona ufunguo karibu na mlango wa msikiti. Nimeupeleka kwa mwalimu wa madrasa.” Anamwonyesha Linu njia.',
        translation: 'O rapaz pensa. “Sim! Vi uma chave perto da porta da mesquita. Levei-a para o professor da escola corânica.” E mostra o caminho ao Linu.',
        choices: [
          { text: 'Linu anamshukuru na kumfuata.', translation: 'O Linu agradece e o segue.', next: 'mwalimu' },
          { text: 'Linu anaamua kulala nje usiku huu.', translation: 'O Linu decide dormir fora esta noite.', next: 'final_neutro' },
        ],
      },
      mwalimu: {
        emoji: '📿',
        text: 'Mwalimu ameuweka ufunguo mezani. Anampa Linu na kusema: “Watu wa Lamu ni waaminifu. Hapa kitu kilichopotea hurudi kwa mwenyewe.”',
        translation: 'O professor tinha deixado a chave sobre a mesa. Ele a entrega ao Linu e diz: “O povo de Lamu é honesto. Aqui, uma coisa perdida volta para o dono.”',
        choices: [{ text: 'Asante sana, mwalimu!', translation: 'Muito obrigado, professor!', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🚪',
        text: 'Linu amefungua mlango mkubwa wa mbao wenye michongo mizuri. Ameketi juu ya paa, akaangalia bahari na jahazi zikipita.',
        translation: 'O Linu abriu a grande porta de madeira de belos entalhes. Sentou-se no terraço e ficou olhando o mar e os dhows passando.',
        ending: { tone: 'bom', title: 'A chave de volta', message: 'Perguntando com o perfeito -me- e o objeto no verbo (umeuona?), o Linu achou a chave numa cidade onde as coisas voltam ao dono.' },
      },
      final_neutro: {
        emoji: '🌙',
        text: 'Linu amekaa kwenye baraza ya nyumba usiku mzima. Asubuhi kijana amemletea ufunguo: “Kwa nini hukuja jana?”',
        translation: 'O Linu passou a noite inteira sentado no banco de pedra da entrada. De manhã, o rapaz trouxe-lhe a chave: “Por que você não veio ontem?”',
        ending: { tone: 'neutro', title: 'Noite no banco de pedra', message: 'A chave estava a poucos passos. Às vezes, seguir quem ajuda poupa uma noite ao relento.' },
      },
    },
  },
  // ───────────────────────── B1.3 ─────────────────────────
  {
    id: 'sw-h19',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Pole pole Kilimanjaro',
    emoji: '🏔️',
    summary: 'Subindo o Kilimanjaro, o Linu sente os efeitos da altitude e precisa seguir os conselhos do guia, dados no subjuntivo e no imperativo.',
    cultural_context:
      'O Kilimanjaro, no norte da Tanzânia, é a montanha mais alta da África, com cerca de 5.900 metros; o pico mais alto chama-se Uhuru, “liberdade”. Os guias e carregadores repetem sempre “pole pole” (devagar, devagar), porque subir rápido demais aumenta o risco do mal da altitude, que dá dor de cabeça, enjoo e cansaço. A regra de ouro é subir devagar, beber muita água e descer se os sintomas piorarem.',
    start: 'start',
    glossary: [
      ['pole pole', 'devagar, devagar'],
      ['mwongozaji', 'guia'],
      ['kichwa kinauma', 'a cabeça dói'],
      ['unywe maji', 'que você beba água, beba água'],
      ['tushuke', 'desçamos, vamos descer'],
      ['kilele', 'cume, pico'],
    ],
    nodes: {
      start: {
        emoji: '🥾',
        text: 'Siku ya tatu, Linu na mwongozaji wake, Baraka, wanapanda juu zaidi. Linu anataka kutembea haraka. Baraka anasema: “Pole pole, rafiki! Tembea polepole na unywe maji mengi.”',
        translation: 'No terceiro dia, o Linu e o guia dele, Baraka, sobem mais alto. O Linu quer andar depressa. O Baraka diz: “Devagar, amigo! Ande devagar e beba muita água.”',
        choices: [
          { text: 'Sawa, nitatembea polepole.', translation: 'Está bem, vou andar devagar.', next: 'polepole' },
          { text: 'Mimi ni pengwini mwenye nguvu! Twende haraka!', translation: 'Eu sou um pinguim forte! Vamos rápido!', next: 'haraka' },
        ],
      },
      haraka: {
        emoji: '🤕',
        text: 'Baada ya saa mbili, kichwa cha Linu kinauma sana, na anajisikia kichefuchefu. Baraka anamwangalia kwa wasiwasi.',
        translation: 'Depois de duas horas, a cabeça do Linu dói muito, e ele sente enjoo. O Baraka olha para ele preocupado.',
        choices: [
          { text: 'Tupumzike kidogo, tafadhali.', translation: 'Vamos descansar um pouco, por favor.', next: 'pumzika' },
          {
            text: 'Kichwa hakiniumi, niko sawa kabisa.',
            translation: 'A cabeça não está doendo, estou ótimo.',
            wrong: 'O texto diz que a cabeça do Linu “inauma sana”, dói muito, e que ele sente enjoo. Esconder os sintomas da altitude é perigoso: é preciso contar ao guia.',
          },
        ],
      },
      polepole: {
        emoji: '🐢',
        text: 'Wanatembea polepole, hatua kwa hatua. Wabebaji wanawapita wakiimba. Jioni wanafika kambini, na Linu anajisikia vizuri.',
        translation: 'Eles andam devagar, passo a passo. Os carregadores os ultrapassam cantando. À tarde chegam ao acampamento, e o Linu se sente bem.',
        choices: [{ text: 'Linu anakunywa chai na kupumzika.', translation: 'O Linu toma chá e descansa.', next: 'usiku' }],
      },
      pumzika: {
        emoji: '💧',
        text: 'Baraka anampa maji na kusema: “Kunywa maji haya, kisha ukae hapa kwa dakika kumi. Kama kichwa kitaendelea kuuma, tushuke kidogo.”',
        translation: 'O Baraka lhe dá água e diz: “Beba esta água e depois fique sentado aqui por dez minutos. Se a cabeça continuar doendo, vamos descer um pouco.”',
        choices: [
          { text: 'Linu anafuata ushauri wa Baraka.', translation: 'O Linu segue o conselho do Baraka.', next: 'usiku' },
          { text: 'Linu anaamua kushuka kabisa.', translation: 'O Linu decide descer de vez.', next: 'final_neutro' },
        ],
      },
      usiku: {
        emoji: '⭐',
        text: 'Usiku wa manane wanaanza kupanda kilele. Baraka anasema: “Usikimbie. Pumua kwa nguvu. Tuimbe pamoja!” Wanaimba nyimbo za wabebaji hatua kwa hatua.',
        translation: 'No meio da noite, começam a subir para o cume. O Baraka diz: “Não corra. Respire fundo. Vamos cantar juntos!” Eles cantam as canções dos carregadores passo a passo.',
        choices: [{ text: 'Linu anaendelea kupanda polepole.', translation: 'O Linu continua subindo devagar.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🌅',
        text: 'Jua linapochomoza, Linu yuko kwenye kilele cha Uhuru. Chini yake kuna mawingu kama bahari nyeupe. “Pole pole ndio mwendo”, anasema Baraka.',
        translation: 'Quando o sol nasce, o Linu está no pico Uhuru. Abaixo dele, as nuvens parecem um mar branco. “Devagar é o jeito de andar”, diz o Baraka.',
        ending: { tone: 'bom', title: 'No teto da África', message: 'Seguindo os conselhos no subjuntivo (unywe, tupumzike, tushuke) e o “pole pole”, o Linu chegou ao cume com segurança.' },
      },
      final_neutro: {
        emoji: '⛺',
        text: 'Linu anashuka hadi kambi ya chini na kujisikia vizuri tena. “Mlima hautakimbia”, anacheka Baraka. “Utarudi mwaka ujao.”',
        translation: 'O Linu desce até o acampamento de baixo e volta a se sentir bem. “A montanha não vai fugir”, ri o Baraka. “Você volta no ano que vem.”',
        ending: { tone: 'neutro', title: 'A montanha espera', message: 'Descer foi uma decisão segura. Com o mal da altitude, a saúde vem antes do cume.' },
      },
    },
  },
  // ───────────────────────── B1.4 ─────────────────────────
  {
    id: 'sw-h22',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Mahojiano ya kazi Nairobi',
    emoji: '💼',
    summary: 'Em Nairobi, o Linu tem uma entrevista de emprego numa empresa de turismo e precisa falar da própria experiência com orações relativas.',
    cultural_context:
      'Nairobi, a capital do Quênia, é um dos maiores centros econômicos da África Oriental, com empresas de tecnologia, turismo e organizações internacionais. No Quênia, o inglês e o suaíli são línguas oficiais; nas entrevistas de emprego o inglês é comum, mas falar bem suaíli é muito valorizado, sobretudo no atendimento ao público. A pontualidade e as boas maneiras contam muito.',
    start: 'start',
    glossary: [
      ['mahojiano', 'entrevista'],
      ['uzoefu', 'experiência'],
      ['kampuni', 'empresa'],
      ['watalii', 'turistas'],
      ['ambaye', 'que, o qual (para pessoas)'],
      ['ambalo, ambacho…', 'que (concordando com a classe)'],
    ],
    nodes: {
      start: {
        emoji: '🏢',
        text: 'Linu anafika ofisini dakika kumi kabla ya mahojiano. Bi Wanjiru, meneja wa kampuni, anamkaribisha: “Karibu, keti. Tueleze kuhusu uzoefu wako.”',
        translation: 'O Linu chega ao escritório dez minutos antes da entrevista. A senhora Wanjiru, gerente da empresa, o recebe: “Bem-vindo, sente-se. Conte-nos sobre a sua experiência.”',
        choices: [
          { text: 'Nimefanya kazi na watalii ambao walitoka nchi nyingi.', translation: 'Trabalhei com turistas que vinham de muitos países.', next: 'uzoefu' },
          { text: 'Sina uzoefu, lakini ninajifunza haraka.', translation: 'Não tenho experiência, mas aprendo rápido.', next: 'kujifunza' },
        ],
      },
      kujifunza: {
        emoji: '📚',
        text: 'Bi Wanjiru anatabasamu. “Ni vizuri kusema ukweli. Ni kitu gani ambacho umejifunza hivi karibuni?”',
        translation: 'A senhora Wanjiru sorri. “É bom dizer a verdade. O que é que você aprendeu recentemente?”',
        choices: [{ text: 'Nimejifunza Kiswahili, lugha ambayo ninaipenda sana.', translation: 'Aprendi suaíli, uma língua que eu amo muito.', next: 'uzoefu' }],
      },
      uzoefu: {
        emoji: '🗺️',
        text: 'Meneja anaandika. “Kazi hii inahitaji mtu ambaye anaweza kuongea na watalii kwa lugha tatu. Unajua lugha gani?”',
        translation: 'A gerente anota. “Este trabalho precisa de alguém que consiga falar com os turistas em três línguas. Que línguas você sabe?”',
        choices: [
          { text: 'Ninajua Kireno, Kiingereza na Kiswahili.', translation: 'Sei português, inglês e suaíli.', next: 'swali' },
          {
            text: 'Ninajua lugha moja tu, Kichina.',
            translation: 'Sei só uma língua, o chinês.',
            wrong: 'O Linu está falando suaíli com a gerente e é brasileiro: sabe pelo menos português e suaíli. E a vaga pede três línguas (lugha tatu).',
          },
        ],
      },
      swali: {
        emoji: '❓',
        text: '“Vizuri sana”, anasema Bi Wanjiru. “Swali la mwisho: una swali lolote ambalo ungependa kuuliza?”',
        translation: '“Muito bem”, diz a senhora Wanjiru. “Última pergunta: você tem alguma pergunta que gostaria de fazer?”',
        choices: [
          { text: 'Ndiyo. Ni safari zipi ambazo kampuni inapanga zaidi?', translation: 'Sim. Quais são as viagens que a empresa mais organiza?', next: 'final_bom' },
          { text: 'Hapana. Mshahara ni kiasi gani?', translation: 'Não. Quanto é o salário?', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🤝',
        text: 'Bi Wanjiru anaeleza kuhusu safari za Maasai Mara na pwani ya Diani. Mwishoni anasema: “Tutakupigia simu kesho. Asante kwa kuja kwa wakati.”',
        translation: 'A senhora Wanjiru fala dos safáris no Maasai Mara e da costa de Diani. No fim, diz: “Vamos telefonar amanhã. Obrigada por ter vindo na hora.”',
        ending: { tone: 'bom', title: 'Boa impressão', message: 'Pontualidade, relativas bem usadas (ambao, ambayo, ambazo) e uma boa pergunta final: o Linu brilhou na entrevista.' },
      },
      final_neutro: {
        emoji: '😬',
        text: 'Meneja anajibu kwa ufupi na kufunga daftari. Linu anaondoka akifikiri kwamba ingekuwa bora kuuliza kuhusu kazi kwanza.',
        translation: 'A gerente responde brevemente e fecha o caderno. O Linu sai pensando que teria sido melhor perguntar sobre o trabalho primeiro.',
        ending: { tone: 'neutro', title: 'Pergunta fora de hora', message: 'O salário é uma pergunta legítima, mas numa primeira entrevista costuma vir depois do interesse pelo trabalho.' },
      },
    },
  },
];
