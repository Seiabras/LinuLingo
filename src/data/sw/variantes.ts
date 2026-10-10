import type { LanguageVariant } from '../types';
import { ipaSwDe } from './tracos';

/**
 * Os dialetos do suaíli (decisão do dono, 10/10/2026): a Tanzânia (o padrão do curso, o Kiswahili
 * sanifu), o Quênia e a República Democrática do Congo. Zanzibar e o continente tanzaniano ficam como
 * sotaques da Tanzânia; Mombasa, Lamu e o sheng de Nairobi, como sotaques do Quênia; Lubumbashi e o
 * kingwana, como sotaques do Congo. Vocabulário no formato [padrão, dialeto, explicação, nota]; nas
 * histórias, a narração segue o padrão e as falas trazem as formas de lá.
 *
 * Fontes: Wikipédia em inglês («Swahili language», «Congo Swahili», «Sheng slang», consultadas em
 * 10/10/2026); Aurélia Ferrari, «Des archives coloniales de Lubumbashi aux pratiques et représentations
 * linguistiques actuelles», Glottopol 20 (2012), que cita Polomé (1968) e Fabian (1986); para o Quênia,
 * os blogs Maneno Matamu («Swahili: Kenyan vs. Tanzanian speak», 2011) e Swahili Bridge («Tanzanian
 * Swahili vs Kenyan Swahili»); a Constituição do Quênia (2010), art. 7.
 */
export const VARIANTS_SW: LanguageVariant[] = [
  {
    code: 'sw-TZ',
    country: 'TZA',
    kind: 'dialeto',
    speechLocale: 'sw-TZ',
    name: 'Suaíli da Tanzânia (Kiswahili sanifu)',
    flag: '🇹🇿',
    summary:
      'O padrão do curso: o Kiswahili sanifu, fixado a partir do falar de Zanzibar e cuidado na Tanzânia pelo Conselho Nacional do Suaíli (BAKITA). É o das escolas, do governo, dos jornais e da rádio tanzanianos.',
    card: {
      id: 'sw-tz-c1',
      title: 'Por que o suaíli da Tanzânia?',
      emoji: '🇹🇿',
      history:
        'O suaíli nasceu nas cidades da costa da África Oriental, onde povos bantos conviveram por séculos com mercadores árabes, persas e indianos: daí as muitas palavras de origem árabe. No século XIX, as caravanas de Zanzibar o levaram até os Grandes Lagos e o Congo. Entre o fim dos anos 1920 e os anos 1930, os territórios britânicos da região escolheram o falar de Zanzibar, o kiunguja, como base da norma escrita. Depois da independência, Julius Nyerere fez do suaíli a língua de toda a Tanzânia: a língua da escola primária, do parlamento e da política, que une mais de cem povos com línguas próprias. Em 1967 nasceu o BAKITA, o Conselho Nacional do Suaíli, que até hoje cria palavras novas. Por isso o suaíli tanzaniano é a referência da norma, e o 7 de julho é, desde 2022, o Dia Mundial do Suaíli da UNESCO.',
      culture_tip:
        'Na Tanzânia, a cortesia começa pelo cumprimento. Aos mais velhos se diz “Shikamoo!” (com respeito), e eles respondem “Marahaba!”. Os desconhecidos viram parentes: a garçonete é “dada” (irmã), o rapaz da mesma idade é “kaka” (irmão), o senhor é “baba” ou “mjomba” (tio). E os pedidos começam por “naomba” (peço): “Naomba maji” (peço água, por favor). Pressa é falta de educação: “pole pole” (devagar) é quase um lema.',
      grammar_why:
        'O padrão segue à risca as classes nominais: cada substantivo pertence a uma classe, e o adjetivo, o número e o verbo concordam com ela (“mtu mzuri anakuja”, a pessoa boa está chegando; “vitabu vitatu vizuri”, três livros bons). Os pedidos educados usam o subjuntivo depois de “naomba”: “Naomba uniletee chai” (por favor, me traga chá). E o padrão prefere palavras suaílis às inglesas: foleni (engarrafamento), mwisho wa wiki (fim de semana), duka kuu (supermercado), nywila (senha).',
      grammar_examples: [
        ['Shikamoo, bibi!', 'Meus respeitos, vovó!'],
        ['Naomba uniletee chai.', 'Por favor, me traga chá.'],
        ['Njoo hapa, mdogo wangu.', 'Venha aqui, meu irmãozinho.'],
        ['Kuna foleni kubwa leo.', 'Hoje tem um engarrafamento enorme.'],
        ['Vitabu vitatu vizuri viko mezani.', 'Três livros bons estão na mesa.'],
      ],
      character_guide: null,
    },
  },

  // ───────────────────────────── QUÊNIA ─────────────────────────────
  {
    code: 'sw-KE',
    country: 'KEN',
    kind: 'dialeto',
    speechLocale: 'sw-KE',
    ipa: ipaSwDe('sw-KE'),
    name: 'Suaíli do Quênia',
    flag: '🇰🇪',
    summary:
      'O suaíli do Quênia, língua nacional e, desde 2010, oficial ao lado do inglês. Na costa, tem os dialetos antigos de Mombasa e Lamu; no interior, é a segunda língua de quase todo mundo, falada depressa, com muito inglês e com o sheng de Nairóbi.',
    card: {
      id: 'sw-ke-c1',
      title: 'Suaíli com pressa',
      emoji: '🚐',
      history:
        'A costa do Quênia é berço do suaíli: em Pate, no arquipélago de Lamu, foi composto em 1728 o “Utendi wa Tambuka”, o manuscrito mais antigo que se conhece da língua, e Mombasa teve poetas famosos, como Muyaka bin Haji, no começo do século XIX. No interior, porém, cada povo tem a sua língua (kikuyu, luo, luhya, kalenjin, kamba…), e o suaíli chegou como língua de contato, de mercado e de quartel. A escola, a partir dos primeiros anos, é em inglês. A Constituição de 2010, no artigo 7, fez do suaíli a língua nacional e uma das duas línguas oficiais, com o inglês. Por isso o suaíli do Quênia é, para a maioria, uma segunda língua de todo dia, mais solta que o padrão tanzaniano, e foi nos bairros populares de Nairóbi que nasceu o sheng.',
      culture_tip:
        'O transporte do Quênia é o matatu, um micro-ônibus pintado com grafites e com o som alto; o nome vem de “tatu” (três), dos três xelins que a passagem custava. O cobrador, o makanga, grita os destinos pela janela, e para descer basta dizer “shukisha!” (me deixa descer). Quem está apertado no banco ouve “tupendane!” (vamos nos amar), o pedido para todo mundo se espremer. No Quênia, chamar desconhecidos de irmão ou tio em suaíli é menos comum que na Tanzânia; muita gente usa o inglês: “auntie”, “uncle”, “sister”.',
      grammar_why:
        'A gramática é a mesma do padrão, mas a fala do dia a dia é mais solta: (1) muitas palavras do inglês, onde a Tanzânia usaria uma palavra suaíli: jam (foleni), wikendi (mwisho wa wiki), supermarket (duka kuu); (2) pedidos diretos, sem “naomba”: “Nipe chai” (me dá um chá), “Niletee kachumbari” (me traz salada); (3) “kuja!” como imperativo de “vir”, onde o padrão diz “njoo!”; na Tanzânia, “kuja!” soa grosseiro; (4) a concordância das classes nominais fica mais frouxa na fala informal; (5) palavras próprias, como “shukisha” (me deixa descer) e “matatu”.',
      grammar_examples: [
        ['Nipe chai, tafadhali.', 'Me dá um chá, por favor. (Tanzânia: Naomba unipe chai.)'],
        ['Kuja hapa!', 'Vem aqui! (Tanzânia: Njoo hapa!)'],
        ['Kuna jam mbaya kwa Thika Road.', 'Tem um engarrafamento feio na Thika Road. (Tanzânia: foleni)'],
        ['Wikendi tutaenda Mombasa.', 'No fim de semana vamos a Mombasa. (Tanzânia: mwisho wa wiki)'],
        ['Shukisha hapa, makanga!', 'Me deixa descer aqui, cobrador! (Tanzânia: shusha)'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'A fala é mais rápida que a tanzaniana: as vogais às vezes se encurtam e as palavras se juntam.',
      'Os sons de origem árabe se simplificam: “dh” vira “d” e “th” vira “t” (dhahabu soa “dahabu”, thelathini soa “telatini”).',
      'Muitos falantes trazem a melodia e os sons da sua primeira língua (kikuyu, luo, luhya…), e o sotaque muda de região para região.',
      'Na costa, em Mombasa e Lamu, a pronúncia é a dos dialetos antigos, mais próxima da de Zanzibar.',
      'As palavras do inglês entram com a pronúncia queniana do inglês: “wikendi”, “jam”, “supermarket”.',
    ],
    vocab: [
      ['daladala', 'matatu', 'micro-ônibus coletivo', 'de “tatu” (três), a passagem de três xelins de antigamente'],
      ['shusha', 'shukisha', 'me deixa descer', 'o que se diz ao cobrador para descer'],
      ['foleni', 'jam', 'engarrafamento', 'do inglês “traffic jam”'],
      ['mwisho wa wiki', 'wikendi', 'fim de semana', 'do inglês “weekend”'],
      ['duka kuu', 'supermarket', 'supermercado', 'o inglês direto'],
      ['nywila', 'password', 'senha', '“nywila” é palavra criada pelo BAKITA'],
      ['njoo!', 'kuja!', 'vem!', 'na Tanzânia, “kuja!” como ordem soa grosseiro, “só se diz a bicho”'],
      ['naomba unipe', 'nipe', 'me dá', 'no Quênia, o pedido direto não é falta de educação'],
      ['dada, kaka', 'sister, auntie', 'irmã, tia (para desconhecidos)', 'o tratamento em inglês é comum em Nairóbi'],
      ['mambo?', 'sasa? / niaje?', 'e aí?', '“niaje” é sheng'],
      ['mjini', 'tao', 'o centro da cidade', 'sheng, do inglês “town”'],
    ],
    stories: [
      {
        id: 'sw-h44',
        variant: 'sw-KE',
        level: 'B1.2',
        cefr: 'B1',
        title: 'Matatu ya kwenda tao',
        emoji: '🚐',
        summary: 'Em Nairóbi, a amiga Wanjiku leva Linu ao centro de matatu, o micro-ônibus grafitado, e ele aprende a falar com o cobrador.',
        cultural_context:
          'O matatu é o transporte mais popular do Quênia: micro-ônibus pintados com grafites, com música alta, que levam o nome de “tatu” (três), os três xelins da passagem de antigamente. O cobrador, o makanga, grita os destinos, apressa os passageiros e pede “tupendane!” quando é preciso apertar. Para descer, diz-se “shukisha!”.',
        start: 'start',
        glossary: [
          ['matatu', 'micro-ônibus coletivo'],
          ['makanga', 'cobrador do matatu'],
          ['tao', 'o centro da cidade (sheng)'],
          ['tupendane', 'vamos nos amar (= se apertem!)'],
          ['nauli', 'passagem, tarifa'],
          ['jam', 'engarrafamento'],
          ['shukisha', 'me deixa descer'],
        ],
        nodes: {
          start: {
            emoji: '🏙️',
            text: 'Linu yuko Nairobi kwa mara ya kwanza. Rafiki yake Wanjiku anasema: “Leo twende tao! Tutapanda matatu.” Linu anauliza: “Tao? Ni wapi?”',
            translation:
              'Linu está em Nairóbi pela primeira vez. A amiga dele, Wanjiku, diz: “Hoje vamos para o tao! Vamos pegar um matatu.” Linu pergunta: “Tao? Onde é isso?”',
            choices: [
              { text: '“Tao ni mjini?”', translation: '“Tao é o centro?”', next: 'kituo' },
              {
                text: '“Matatu ni chakula cha Kenya?”',
                translation: '“Matatu é uma comida do Quênia?”',
                wrong: 'Matatu não é comida: é o micro-ônibus coletivo do Quênia. A Wanjiku disse “tutapanda matatu”, vamos pegar (subir em) um matatu.',
              },
            ],
          },
          kituo: {
            emoji: '🚏',
            text: 'Wanjiku anacheka: “Ndiyo! Tao ni mjini, kwa Sheng.” Matatu inafika kituoni. Ina rangi nyingi na muziki mkubwa. Makanga anapiga kelele dirishani: “Tao, tao! Ingia, ingia haraka!”',
            translation:
              'A Wanjiku ri: “Isso! Tao é o centro, em sheng.” Um matatu chega ao ponto. Ele é todo colorido e tem música alta. O cobrador grita pela janela: “Centro, centro! Entra, entra rápido!”',
            choices: [{ text: 'Linu na Wanjiku wanaingia.', translation: 'Linu e Wanjiku entram.', next: 'ndani' }],
          },
          ndani: {
            emoji: '💺',
            text: 'Ndani ya matatu kuna watu wengi. Makanga anasema kwa sauti: “Tupendane, jamani! Kuna nafasi ya mtu mmoja zaidi!” Watu wanasogea na mama mmoja anakaa karibu na Linu.',
            translation:
              'Dentro do matatu tem muita gente. O cobrador diz em voz alta: “Vamos nos amar, gente! Cabe mais uma pessoa!” As pessoas se ajeitam, e uma senhora se senta ao lado do Linu.',
            choices: [
              { text: 'Linu anasogea pia.', translation: 'Linu também se ajeita.', next: 'nauli' },
              {
                text: 'Linu anafikiri makanga anatangaza harusi.',
                translation: 'Linu acha que o cobrador está anunciando um casamento.',
                wrong: '“Tupendane” (vamos nos amar) é só o jeito brincalhão de pedir que todos se apertem para caber mais um passageiro.',
              },
            ],
          },
          nauli: {
            emoji: '💵',
            text: 'Makanga anakusanya nauli: “Mia moja, mia moja!” Linu analipa shilingi mia moja. Baada ya dakika tano, matatu inasimama. Kuna jam kubwa. Wanjiku anasema: “Jam ya Nairobi ni maarufu!” Linu anakumbuka: “Huko Tanzania wanasema foleni.”',
            translation:
              'O cobrador recolhe as passagens: “Cem, cem!” Linu paga cem xelins. Depois de cinco minutos, o matatu para. Tem um engarrafamento enorme. A Wanjiku diz: “O engarrafamento de Nairóbi é famoso!” Linu se lembra: “Lá na Tanzânia eles dizem foleni.”',
            choices: [
              { text: 'Karibu na soko, Linu anasema: “Shukisha hapa, makanga!”', translation: 'Perto do mercado, Linu diz: “Me deixa descer aqui, cobrador!”', next: 'final_bom' },
              { text: 'Linu anakaa kimya na kusikiliza muziki.', translation: 'Linu fica quieto, ouvindo a música.', next: 'final_neutro' },
            ],
          },
          final_bom: {
            emoji: '🎉',
            text: 'Makanga anapiga dirisha mara mbili na matatu inasimama. Wanjiku anashangaa: “Wewe! Umejua kusema shukisha? Sasa wewe ni Mkenya kabisa!” Wanashuka na kwenda sokoni wakicheka.',
            translation:
              'O cobrador bate duas vezes na lataria e o matatu para. A Wanjiku se espanta: “Olha você! Já sabe dizer shukisha? Agora você é queniano de verdade!” Eles descem e vão ao mercado rindo.',
            ending: {
              tone: 'bom',
              title: 'Queniano de verdade',
              message:
                'Você andou de matatu e aprendeu as palavras do Quênia: matatu, makanga, tao, tupendane, jam e shukisha, que na Tanzânia seriam daladala, kondakta, mjini, foleni e shusha.',
            },
          },
          final_neutro: {
            emoji: '🎶',
            text: 'Linu anasikiliza muziki na kusahau kusema chochote. Matatu inapita soko. Wanjiku anacheka: “Tumepita! Ukitaka kushuka, sema ‘shukisha’!” Wanashuka kituo kinachofuata na kurudi kwa miguu.',
            translation:
              'Linu fica ouvindo a música e esquece de dizer qualquer coisa. O matatu passa do mercado. A Wanjiku ri: “Passamos! Quando quiser descer, diga ‘shukisha’!” Eles descem no ponto seguinte e voltam a pé.',
            ending: {
              tone: 'neutro',
              title: 'Passou do ponto',
              message: 'No matatu, quem não fala não desce. Da próxima vez, avise o makanga: “Shukisha hapa!”',
            },
          },
        },
      },
      {
        id: 'sw-h45',
        variant: 'sw-KE',
        level: 'B2.2',
        cefr: 'B2',
        title: 'Kuja au njoo?',
        emoji: '☕',
        summary: 'Num café de Nairóbi, Linu assiste a uma discussão bem-humorada entre o queniano Otieno e a tanzaniana Neema sobre quem fala “o suaíli certo”.',
        cultural_context:
          'Quenianos e tanzanianos se entendem perfeitamente, mas adoram implicar com o suaíli uns dos outros. Na Tanzânia, onde o suaíli é a língua de tudo, fala-se devagar, com “naomba” nos pedidos e palavras suaílis para quase tudo. No Quênia, onde ele é segunda língua para a maioria, fala-se depressa, com pedidos diretos e muito inglês. Desde 2010, a Constituição do Quênia faz do suaíli língua oficial ao lado do inglês.',
        start: 'start',
        glossary: [
          ['naomba', 'peço, por favor (pedido educado)'],
          ['kuja / njoo', 'vem! (Quênia / padrão)'],
          ['wikendi / mwisho wa wiki', 'fim de semana (Quênia / padrão)'],
          ['kuchokoza', 'provocar, implicar'],
          ['-ngekuwa', 'se fosse (condicional)'],
          ['lugha rasmi', 'língua oficial'],
          ['kwa kuwa', 'já que, porque'],
        ],
        nodes: {
          start: {
            emoji: '☕',
            text: 'Ni Jumamosi asubuhi. Linu amekaa kwenye mgahawa mmoja Nairobi pamoja na Otieno, rafiki yake Mkenya, na Neema, aliyetoka Dar es Salaam wiki iliyopita. Otieno anamwita mhudumu kwa sauti: “Sister, kuja hapa! Nipe chai tatu!”',
            translation:
              'É sábado de manhã. Linu está sentado num café de Nairóbi com Otieno, um amigo queniano, e Neema, que chegou de Dar es Salaam na semana passada. Otieno chama a garçonete em voz alta: “Sister, vem aqui! Me dá três chás!”',
            choices: [
              { text: 'Linu anaona kwamba Neema ameshtuka.', translation: 'Linu percebe que a Neema ficou chocada.', next: 'neema' },
            ],
          },
          neema: {
            emoji: '😳',
            text: 'Neema anaweka kikombe chini: “Otieno! Kwetu Tanzania, ‘kuja!’ tunamwambia mbwa tu. Mtu unamwambia ‘njoo’. Na hatusemi ‘nipe’, tunasema ‘naomba uniletee chai, dada’.” Otieno anacheka: “Huku Kenya hakuna mtu atakayekasirika. Tuko na haraka!”',
            translation:
              'A Neema põe a xícara na mesa: “Otieno! Lá na Tanzânia, ‘kuja!’ a gente só diz para cachorro. Para gente, se diz ‘njoo’. E a gente não diz ‘nipe’, diz ‘por favor, me traga um chá, irmã’.” O Otieno ri: “Aqui no Quênia ninguém vai ficar bravo. A gente está com pressa!”',
            choices: [
              {
                text: '“Kwa hiyo Wakenya hawana adabu?”',
                translation: '“Então os quenianos são mal-educados?”',
                wrong: 'Não é falta de educação: no Quênia, “kuja!” e “nipe” são o jeito normal de pedir, e a garçonete não se ofendeu. O que muda é o costume de cada país.',
              },
              {
                text: '“Kwa hiyo kila nchi ina adabu yake ya lugha?”',
                translation: '“Então cada país tem a sua etiqueta da língua?”',
                next: 'adabu',
              },
            ],
          },
          adabu: {
            emoji: '🤝',
            text: '“Ndiyo hivyo,” anasema Neema. “Na pia maneno. Ninyi mnasema ‘jam’, sisi tunasema ‘foleni’. Mnasema ‘wikendi’, sisi ‘mwisho wa wiki’.” Otieno anajibu: “Kwa kuwa sisi tunasoma kwa Kiingereza shuleni, maneno ya Kiingereza yanaingia tu. Lakini tangu mwaka 2010 Kiswahili ni lugha rasmi ya Kenya, sawa na Kiingereza!”',
            translation:
              '“É isso”, diz a Neema. “E as palavras também. Vocês dizem ‘jam’, nós dizemos ‘foleni’. Vocês dizem ‘wikendi’, nós, ‘mwisho wa wiki’.” Otieno responde: “Como a gente estuda em inglês na escola, as palavras inglesas simplesmente entram. Mas desde 2010 o suaíli é língua oficial do Quênia, igual ao inglês!”',
            choices: [
              {
                text: 'Linu anauliza: “Na Kiswahili kipi ni sahihi?”',
                translation: 'Linu pergunta: “E qual suaíli é o certo?”',
                next: 'sahihi',
              },
              {
                text: 'Linu anafikiri Kiswahili si lugha rasmi ya Kenya.',
                translation: 'Linu acha que o suaíli não é língua oficial do Quênia.',
                wrong: 'É, sim: o Otieno lembrou que, desde a Constituição de 2010, o suaíli é língua oficial do Quênia, ao lado do inglês.',
              },
            ],
          },
          sahihi: {
            emoji: '⚖️',
            text: 'Wote wawili wanajibu pamoja: “Changu!” Kisha wanacheka. Neema anasema: “Kama ningekuwa mwalimu, ningesema kwamba sanifu ni ule wa vitabu. Lakini barabarani, kila mtu anaelewa.” Otieno anaongeza: “Na wewe Linu, ukijua yote mawili, utaongea na watu milioni mia!”',
            translation:
              'Os dois respondem juntos: “O meu!” E depois riem. A Neema diz: “Se eu fosse professora, diria que o padrão é o dos livros. Mas na rua todo mundo entende.” Otieno acrescenta: “E você, Linu, se souber os dois, vai conversar com cem milhões de pessoas!”',
            choices: [
              { text: 'Linu anamwita mhudumu: “Dada, naomba uniletee chai nyingine. Sister, nipe na mandazi!”', translation: 'Linu chama a garçonete: “Irmã, por favor, me traga mais um chá. Sister, me dá também um mandazi!”', next: 'final_bom' },
              { text: 'Linu anabaki kimya ili asiwachokoze.', translation: 'Linu fica quieto para não provocar ninguém.', next: 'final_neutro' },
            ],
          },
          final_bom: {
            emoji: '😂',
            text: 'Neema na Otieno wanacheka mpaka machozi yanawatoka. “Huyu amechanganya Kenya na Tanzania kwa sentensi moja!” anasema Otieno. Mhudumu analeta chai na mandazi akitabasamu.',
            translation:
              'A Neema e o Otieno riem até chorar. “Esse aí misturou o Quênia e a Tanzânia numa frase só!”, diz o Otieno. A garçonete traz o chá e o mandazi sorrindo.',
            ending: {
              tone: 'bom',
              title: 'Duas etiquetas, uma língua',
              message:
                'Você comparou os dois jeitos: o pedido com “naomba” e o subjuntivo (“uniletee”), da Tanzânia, e o direto “nipe” e “kuja!”, do Quênia; “foleni” e “jam”; “mwisho wa wiki” e “wikendi”; e ainda o condicional “ningekuwa / ningesema”.',
            },
          },
          final_neutro: {
            emoji: '🤐',
            text: 'Linu anakunywa chai yake kimya. Neema na Otieno wanaendelea kubishana mpaka saa sita, kila mmoja akitetea Kiswahili chake.',
            translation:
              'Linu bebe o chá em silêncio. A Neema e o Otieno continuam discutindo até o meio-dia, cada um defendendo o seu suaíli.',
            ending: {
              tone: 'neutro',
              title: 'A discussão continua',
              message: 'Não precisa escolher um lado: o suaíli do Quênia e o da Tanzânia são a mesma língua. Saber os dois jeitos de pedir é o melhor dos mundos.',
            },
          },
        },
      },
    ],
  },

  // ───────────────────────────── RD CONGO ─────────────────────────────
  {
    code: 'sw-CD',
    country: 'COD',
    kind: 'dialeto',
    speechLocale: 'sw-TZ',
    name: 'Suaíli do Congo',
    flag: '🇨🇩',
    summary:
      'O suaíli do leste da República Democrática do Congo, uma das quatro línguas nacionais do país, falado por cerca de 11 milhões de pessoas. Tem cara própria: prefixos bantos completos (mukate), muitas palavras do francês e, em Lubumbashi, uma fala que virou língua materna de uma cidade inteira.',
    card: {
      id: 'sw-cd-c1',
      title: 'Swahili bora, swahili facile',
      emoji: '🇨🇩',
      history:
        'O suaíli chegou ao interior do Congo no século XIX com os mercadores árabe-suaílis da costa, como Tippu Tip, e virou a língua de contato das florestas de Maniema: o kingwana. No começo do século XX, sob o domínio belga, espalhou-se pelos acampamentos das minas de cobre do Katanga, onde trabalhavam pessoas de muitos povos e até de países vizinhos; ali nasceu o suaíli de Lubumbashi, que logo virou a língua materna de boa parte da cidade, hoje com cerca de 1,5 milhão de habitantes. Os belgas e os missionários o usaram nas escolas e nas igrejas até 1954, quando o francês virou a única língua de ensino. Hoje o suaíli é uma das quatro línguas nacionais da RD Congo, com o lingala, o kikongo e o tshiluba, e a Constituição de 2006 manda publicar as leis também nessas línguas.',
      culture_tip:
        'Em Lubumbashi, o suaíli local é chamado, meio de brincadeira e meio com desprezo, de “swahili facile” (suaíli fácil), e o padrão da Tanzânia e do Quênia, de “swahili bora” (o suaíli melhor). Mesmo assim, é o suaíli local que as famílias passam aos filhos, que se ouve no mercado e que as cervejas e as operadoras de celular usam nos anúncios. Na rádio, as notícias saem em francês, no suaíli padrão e no suaíli local. No leste, em Goma e Bukavu, rádios como a Okapi e a Maendeleo têm muitos programas em suaíli.',
      grammar_why:
        'A gramática tem a base do suaíli, com diferenças importantes: (1) os prefixos bantos aparecem inteiros: “mukate” (pão), onde o padrão diz “mkate”; (2) os numerais não concordam com o substantivo: “mikate tatu” (padrão: “mikate mitatu”); (3) em Lubumbashi, o locativo “-ni” desapareceu: “ku soko” (no mercado), onde o padrão diz “sokoni”; (4) o francês entra não só nos substantivos, mas também nos conectivos: “parce que” no lugar de “kwa sababu”; (5) há tempos verbais próprios, que distinguem o passado recente do remoto e o progressivo do habitual; (6) o suaíli de Lubumbashi tem três classes nominais a mais que o padrão.',
      grammar_examples: [
        ['Nataka mikate tatu.', 'Quero três pães. (padrão: mikate mitatu)'],
        ['Niko ku soko.', 'Estou no mercado. (padrão: Niko sokoni.)'],
        ['Sikuja parce que nilikuwa mugonjwa.', 'Não vim porque estava doente. (padrão: kwa sababu, mgonjwa)'],
        ['Mutoto anakula mukate.', 'A criança está comendo pão. (padrão: mtoto, mkate)'],
        ['Beyi ni kiloko.', 'O preço é pequeno. (padrão: Bei ni ndogo.)'],
      ],
      character_guide: [
        ['mu-', 'o prefixo aparece inteiro, com a vogal', 'mukate, mutoto, mugonjwa'],
        ['h', 'em Lubumbashi, o “h” não soa e muitas vezes nem se escreve', 'apa (hapa)'],
        ['r → l', 'em Lubumbashi, o “r” costuma virar “l”', 'rafiki soa “lafiki”'],
      ],
    },
    pronunciation: [
      'Os prefixos bantos se pronunciam com a vogal: “mukate”, “mutoto”, onde o padrão diz “mkate”, “mtoto”.',
      'Em Lubumbashi, o “h” não soa: “hapa” vira “apa”, e quem escreve às vezes põe um “h” onde não há, para parecer mais padrão (“kuhona” por “kuona”).',
      'Em Lubumbashi, o “r” costuma virar “l”, o “s” e o “z” tendem a soar “ch” e “j”, e às vezes entra um som entre duas vogais (“bei” vira “beyi”).',
      'No leste, em Goma e Bukavu, a pronúncia é mais próxima do padrão, mas com a melodia das línguas locais.',
      'As palavras francesas entram com a pronúncia do francês do Congo: “parce que”, “commissaire”, “seconde”.',
    ],
    vocab: [
      ['mkate', 'mukate', 'pão', 'o prefixo “mu-” inteiro, como nas línguas bantas vizinhas'],
      ['mtoto', 'mutoto', 'criança', 'a mesma regra'],
      ['kidogo', 'kiloko', 'pequeno, pouco', 'já registrado num vocabulário do Katanga de cerca de 1917'],
      ['hapa', 'apa', 'aqui', 'o “h” não soa em Lubumbashi'],
      ['bei', 'beyi', 'preço', '“inakata beyi”: preço quebrado, promoção'],
      ['sokoni', 'ku soko', 'no mercado', 'em Lubumbashi, o locativo “-ni” sumiu'],
      ['kwa sababu', 'parce que', 'porque', 'o conectivo francês'],
      ['mikate mitatu', 'mikate tatu', 'três pães', 'os numerais não concordam'],
      ['ndiyo', 'njo', 'é, isso é', '“Njo bwanaume”: é coisa de homem (anúncio de cerveja)'],
      ['Kiswahili sanifu', 'swahili bora', 'o suaíli padrão', 'literalmente “o suaíli melhor”'],
    ],
    stories: [
      {
        id: 'sw-h46',
        variant: 'sw-CD',
        level: 'B1.2',
        cefr: 'B1',
        title: 'Mukate ku soko',
        emoji: '🥖',
        summary: 'No mercado de Lubumbashi, Linu tenta comprar pão e banana com o suaíli dos livros e a vendedora Mama Furaha lhe ensina o suaíli da cidade.',
        cultural_context:
          'Lubumbashi, no sul da RD Congo, é a cidade do cobre. O suaíli chegou ali com as minas, no começo do século XX, e virou a língua materna de boa parte da população, com traços próprios: “mukate” por “mkate”, “apa” por “hapa”, numerais sem concordância e muitas palavras do francês, a língua oficial do país. Os moradores o chamam de “swahili facile”.',
        start: 'start',
        glossary: [
          ['mukate', 'pão (padrão: mkate)'],
          ['apa', 'aqui (padrão: hapa)'],
          ['beyi', 'preço (padrão: bei)'],
          ['kiloko', 'pouco, pequeno (padrão: kidogo)'],
          ['ku soko', 'no mercado (padrão: sokoni)'],
          ['parce que', 'porque (francês)'],
          ['ndizi', 'banana'],
        ],
        nodes: {
          start: {
            emoji: '🧺',
            text: 'Linu yuko Lubumbashi. Asubuhi anaenda sokoni kununua mkate na ndizi. Anamsalimia muuzaji: “Hujambo, mama! Naomba mikate mitatu, tafadhali.” Mama anacheka: “Eh! Unasema swahili bora! Mimi ni Mama Furaha. Mukate tatu? Iko apa.”',
            translation:
              'Linu está em Lubumbashi. De manhã, vai ao mercado comprar pão e banana. Cumprimenta a vendedora: “Bom dia, senhora! Por favor, quero três pães.” A senhora ri: “Eh! Você fala o suaíli melhor! Eu sou a Mama Furaha. Três pães? Estão aqui.”',
            choices: [
              { text: '“Mukate? Si mkate?”', translation: '“Mukate? Não é mkate?”', next: 'mukate' },
              {
                text: 'Linu anafikiri Mama Furaha hana mkate.',
                translation: 'Linu acha que a Mama Furaha não tem pão.',
                wrong: 'Ela tem, sim: “Iko apa” é “está aqui” (no padrão, “Iko hapa”). E “mukate” é o mesmo “mkate”, com o prefixo inteiro, como se diz em Lubumbashi.',
              },
            ],
          },
          mukate: {
            emoji: '🥖',
            text: '“Apa Lubumbashi tunasema mukate, mutoto, mutu,” anaeleza Mama Furaha. “Na hatusemi ‘sokoni’, tunasema ‘ku soko’. Sasa, unataka nini tena?” Linu anaangalia ndizi nzuri.',
            translation:
              '“Aqui em Lubumbashi a gente diz mukate, mutoto, mutu”, explica a Mama Furaha. “E não dizemos ‘sokoni’, dizemos ‘ku soko’. Bom, o que mais você quer?” Linu olha umas bananas bonitas.',
            choices: [{ text: '“Ndizi ni bei gani?”', translation: '“Quanto custam as bananas?”', next: 'beyi' }],
          },
          beyi: {
            emoji: '🍌',
            text: '“Beyi ni kiloko sana leo, parce que ni siku ya soko kubwa,” anasema Mama Furaha. “Faranga elfu moja tu.” Linu anarudia polepole: “Beyi… kiloko… parce que…”',
            translation:
              '“O preço está bem baixinho hoje, porque é dia de feira grande”, diz a Mama Furaha. “Só mil francos.” Linu repete devagar: “Beyi… kiloko… parce que…”',
            choices: [
              {
                text: 'Linu anaelewa: beyi ni bei, kiloko ni kidogo.',
                translation: 'Linu entende: beyi é bei (preço), kiloko é kidogo (pouco).',
                next: 'lipa',
              },
              {
                text: 'Linu anaelewa kwamba ndizi ni ghali sana.',
                translation: 'Linu entende que as bananas estão caríssimas.',
                wrong: 'É o contrário: “beyi ni kiloko” é “o preço é pequeno” (no padrão, “bei ni ndogo”). Hoje é dia de feira, e as bananas estão baratas.',
              },
            ],
          },
          lipa: {
            emoji: '💵',
            text: 'Linu analipa na kumshukuru Mama Furaha. Mama anamwongezea ndizi moja: “Zawadi! Kesho urudi ku soko, nitakufundisha swahili facile zaidi.”',
            translation:
              'Linu paga e agradece à Mama Furaha. Ela põe mais uma banana no saco: “Presente! Amanhã volte ao mercado, que eu te ensino mais suaíli facile.”',
            choices: [
              { text: '“Asante, Mama! Kesho nitarudi ku soko!”', translation: '“Obrigado, Mama! Amanhã eu volto ao mercado!”', next: 'final_bom' },
              { text: '“Asante, lakini mimi najifunza swahili bora tu.”', translation: '“Obrigado, mas eu só estou aprendendo o suaíli padrão.”', next: 'final_neutro' },
            ],
          },
          final_bom: {
            emoji: '😄',
            text: 'Mama Furaha anapiga makofi: “Umesema ku soko! Wewe ni mwana wa Lubumbashi sasa!” Wauzaji wengine wanacheka na kumpa Linu majina ya matunda yote kwa swahili facile.',
            translation:
              'A Mama Furaha bate palmas: “Você disse ku soko! Agora você é filho de Lubumbashi!” Os outros vendedores riem e ensinam ao Linu o nome de todas as frutas em suaíli facile.',
            ending: {
              tone: 'bom',
              title: 'Filho de Lubumbashi',
              message:
                'Você reconheceu o suaíli de Lubumbashi: mukate (mkate), apa (hapa), beyi (bei), kiloko (kidogo), ku soko (sokoni), os numerais sem concordância (mukate tatu) e o francês “parce que”.',
            },
          },
          final_neutro: {
            emoji: '🤷',
            text: 'Mama Furaha anainua mabega: “Sawa. Lakini apa, swahili bora hakuna mtu anayeongea ku soko!” Linu anaondoka akifikiri maneno yake.',
            translation:
              'A Mama Furaha dá de ombros: “Tudo bem. Mas aqui ninguém fala o suaíli melhor no mercado!” Linu vai embora pensando nas palavras dela.',
            ending: {
              tone: 'neutro',
              title: 'O suaíli da rua',
              message: 'O padrão é útil, mas a vida de Lubumbashi acontece em swahili facile. Volte amanhã ao mercado!',
            },
          },
        },
      },
      {
        id: 'sw-h47',
        variant: 'sw-CD',
        level: 'B2.2',
        cefr: 'B2',
        title: 'Habari kwa lugha tatu',
        emoji: '📻',
        summary: 'Numa rádio de Lubumbashi, Linu acompanha a jornalista Neema Kalenga, que lê as notícias em francês, no suaíli padrão e no suaíli da cidade, e descobre por que os moradores chamam a própria língua de “fácil”.',
        cultural_context:
          'Em Lubumbashi, as rádios e TVs locais dão as notícias em francês, no suaíli padrão (“swahili bora”) e no suaíli local (“swahili facile”). A linguista Aurélia Ferrari, que estudou a cidade, observou que os moradores desvalorizam o próprio suaíli ao falar dele, mas o valorizam na prática: é a língua que passam aos filhos. Ela notou também a hipercorreção: quem quer soar padrão às vezes erra justamente por isso, como num cartaz do zoológico que escreveu “kuhona” em vez de “kuona”.',
        start: 'start',
        glossary: [
          ['habari', 'notícias; também “como vai?”'],
          ['mtangazaji', 'locutor, apresentador'],
          ['studio', 'estúdio'],
          ['kusahihisha', 'corrigir'],
          ['lugha ya mama', 'língua materna'],
          ['-po-', 'quando (marca de tempo relativo)'],
        ],
        nodes: {
          start: {
            emoji: '🎙️',
            text: 'Ni saa kumi na mbili asubuhi katika studio ndogo ya redio mjini Lubumbashi. Mtangazaji Neema Kalenga anajiandaa kusoma habari. “Leo nitasoma habari mara tatu,” anamwambia Linu. “Kwanza kwa Kifaransa, halafu kwa swahili bora, mwishoni kwa swahili facile.”',
            translation:
              'São seis da manhã num pequeno estúdio de rádio em Lubumbashi. A locutora Neema Kalenga se prepara para ler as notícias. “Hoje vou ler as notícias três vezes”, diz ela ao Linu. “Primeiro em francês, depois no suaíli padrão e, no fim, no suaíli facile.”',
            choices: [
              { text: '“Kwa nini mara tatu?”', translation: '“Por que três vezes?”', next: 'kwanini' },
              {
                text: '“Kwa hiyo habari ni tatu tofauti?”',
                translation: '“Então são três notícias diferentes?”',
                wrong: 'As notícias são as mesmas; o que muda é a língua: francês, suaíli padrão e suaíli local, para todo mundo entender.',
              },
            ],
          },
          kwanini: {
            emoji: '👂',
            text: '“Kwa sababu kila mtu anasikiliza kwa lugha yake,” anajibu Neema. “Wazee wanapenda swahili bora, wasomi wanapenda Kifaransa, lakini watu wengi wa mtaani wanaelewa vizuri swahili facile. Ni lugha ya mama ya watoto wengi apa.”',
            translation:
              '“Porque cada um escuta na sua língua”, responde a Neema. “Os mais velhos gostam do suaíli padrão, os estudados gostam do francês, mas a maior parte do povo do bairro entende melhor o suaíli facile. Ele é a língua materna de muitas crianças daqui.”',
            choices: [
              {
                text: '“Kama ni lugha ya mama, kwa nini mnaiita ‘facile’?”',
                translation: '“Se é língua materna, por que vocês a chamam de ‘fácil’?”',
                next: 'facile',
              },
            ],
          },
          facile: {
            emoji: '🤔',
            text: 'Neema anacheka kidogo. “Swali zuri. Tangu zamani watu waliambiwa kwamba Kiswahili chetu ni kibovu, na wakaamini. Lakini si rahisi hata kidogo! Kina sarufi yake, kina hata ngeli tatu zaidi ya Kiswahili sanifu. Tunakidharau kwa mdomo, lakini tunakiongea kila siku na tunawafundisha watoto wetu.”',
            translation:
              'A Neema dá uma risadinha. “Boa pergunta. Desde a época colonial, as pessoas ouviram que o nosso suaíli era estragado, e acreditaram. Mas ele não tem nada de fácil! Tem a sua gramática, tem até três classes nominais a mais que o suaíli padrão. A gente o despreza com a boca, mas fala todo dia e ensina aos nossos filhos.”',
            choices: [
              {
                text: '“Kwa hiyo ‘facile’ si kwa sababu ni rahisi kweli.”',
                translation: '“Então ‘fácil’ não é porque ele seja fácil de verdade.”',
                next: 'kosa',
              },
              {
                text: '“Kwa hiyo swahili facile hauna sarufi.”',
                translation: '“Então o suaíli facile não tem gramática.”',
                wrong: 'A Neema disse o contrário: ele tem gramática própria (“kina sarufi yake”) e até três classes nominais a mais que o padrão. O apelido “fácil” vem do preconceito, não da língua.',
              },
            ],
          },
          kosa: {
            emoji: '😅',
            text: '“Hasa. Na unajua kitu cha kuchekesha?” anaendelea Neema. “Tunapojaribu kuongea swahili bora, tunakosea zaidi! Jana mtangazaji mmoja alisema ‘siku mitatu’ badala ya ‘siku tatu’, kwa kuogopa kusahau upatanisho. Na kwenye bustani ya wanyama kuna bango linalosema ‘kuhona’ badala ya ‘kuona’!”',
            translation:
              '“Exatamente. E sabe o que é engraçado?”, continua a Neema. “Quando a gente tenta falar o suaíli padrão, erra ainda mais! Ontem um locutor disse ‘siku mitatu’ em vez de ‘siku tatu’, com medo de esquecer a concordância. E no zoológico tem uma placa que diz ‘kuhona’ em vez de ‘kuona’!”',
            choices: [
              { text: 'Taa nyekundu inawaka: wako hewani!', translation: 'A luz vermelha acende: eles estão no ar!', next: 'hewani' },
            ],
          },
          hewani: {
            emoji: '🔴',
            text: 'Neema anasoma habari kwa Kifaransa, kisha kwa swahili bora. Alipofika kwenye swahili facile, anamwonyesha Linu karatasi: “Unataka kusoma habari ya hali ya hewa?”',
            translation:
              'A Neema lê as notícias em francês e depois no suaíli padrão. Quando chega ao suaíli facile, mostra uma folha ao Linu: “Quer ler a previsão do tempo?”',
            choices: [
              { text: 'Linu anachukua karatasi na kusoma kwa sauti.', translation: 'Linu pega a folha e lê em voz alta.', next: 'final_bom' },
              { text: 'Linu anatikisa kichwa: “Hapana, naogopa.”', translation: 'Linu balança a cabeça: “Não, tenho medo.”', next: 'final_neutro' },
            ],
          },
          final_bom: {
            emoji: '🌤️',
            text: 'Linu anasoma: “Leo jua litawaka sana apa Lubumbashi…” Sauti yake inatetemeka, lakini anamaliza. Neema anainua kidole gumba. Baada ya kipindi, simu inalia: msikilizaji mmoja anauliza ni nani yule mgeni anayeongea swahili facile.',
            translation:
              'Linu lê: “Hoje vai fazer muito sol aqui em Lubumbashi…” A voz dele treme, mas ele vai até o fim. A Neema faz sinal de positivo. Depois do programa, o telefone toca: um ouvinte quer saber quem era o estrangeiro que falava suaíli facile.',
            ending: {
              tone: 'bom',
              title: 'No ar em suaíli facile',
              message:
                'Você entendeu a situação das três línguas de Lubumbashi, o preconceito por trás do “facile”, a hipercorreção (“siku mitatu”, “kuhona”) e o tempo relativo “-po-” (“tunapojaribu”, quando tentamos).',
            },
          },
          final_neutro: {
            emoji: '📻',
            text: 'Neema anasoma hali ya hewa mwenyewe. Baada ya kipindi anamwambia Linu: “Usiogope. Hapa hakuna mtu atakayekucheka. Kesho utasoma wewe.”',
            translation:
              'A Neema lê a previsão do tempo ela mesma. Depois do programa, diz ao Linu: “Não tenha medo. Aqui ninguém vai rir de você. Amanhã quem lê é você.”',
            ending: {
              tone: 'neutro',
              title: 'Amanhã é a sua vez',
              message: 'Ler no ar dá medo, mas em Lubumbashi o suaíli facile é a língua de todo mundo. Amanhã, pegue a folha!',
            },
          },
        },
      },
    ],
  },
];
