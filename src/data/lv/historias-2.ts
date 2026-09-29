import type { StorySeed } from '../types';

/** Histórias interativas em letão (B1.2–B2.2): 3 por subnível, cada uma num lugar diferente. */
export const STORIES: StorySeed[] = [
  // ───────────────────────── B1.2 ─────────────────────────
  {
    id: 'lv-h16',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Papardes zieda meklējumos',
    emoji: '🌿',
    summary: 'Na festa de Jāņi, numa casa de campo da Vidzeme, o Linu aprende tudo o que «tem de» ser feito antes da noite mais curta do ano e sai à procura da flor da samambaia.',
    cultural_context:
      'Jāņi, na noite de 23 para 24 de junho, é a festa mais querida da Letônia: os homens usam coroas de folhas de carvalho, as mulheres coroas de flores, acende-se uma fogueira que deve arder até o amanhecer, canta-se o refrão «līgo» e come-se o queijo de Jāņi, com cominho. Diz a tradição que quem encontra a flor da samambaia (planta que, na verdade, não dá flor) terá sorte.',
    start: 'start',
    glossary: [
      ['jāizdara', 'tem de ser feito'],
      ['vainags', 'coroa (de flores ou folhas)'],
      ['ozollapas', 'folhas de carvalho'],
      ['jāsapin', 'tem de trançar'],
      ['ugunskurs', 'fogueira'],
      ['nedrīkst', 'não se pode'],
      ['papardes zieds', 'a flor da samambaia'],
      ['jāņtārpiņš', 'vaga-lume'],
    ],
    nodes: {
      start: {
        emoji: '🏡',
        text: 'Jāņu dienā Linu atbrauca uz lauku sētu Vidzemē, kur dzīvoja viņa draudzene Ilze ar ģimeni. Ilze uzreiz paskaidroja, ka līdz vakaram vēl daudz kas jāizdara. «Mums jānoplūc ozollapas un pļavas puķes, jo vakarā visiem jābūt vainagos», viņa teica.',
        translation: 'No dia de Jāņi, o Linu chegou a uma casa de campo na Vidzeme, onde morava a amiga dele, Ilze, com a família. A Ilze explicou logo que até a noite ainda havia muita coisa a fazer. «Temos de colher folhas de carvalho e flores do campo, porque à noite todo mundo tem de estar de coroa», disse ela.',
        choices: [
          { text: 'Linu gāja ar Ilzi uz pļavu plūkt puķes.', translation: 'O Linu foi com a Ilze ao prado colher flores.', next: 'plava' },
          { text: 'Linu palika mājā palīdzēt Ilzes mammai.', translation: 'O Linu ficou em casa para ajudar a mãe da Ilze.', next: 'siers' },
        ],
      },
      plava: {
        emoji: '🌼',
        text: 'Pļava bija pilna ar margrietiņām un zilām rudzupuķēm. Ilze parādīja, kā jāsapin vainags: puķes jāsaliek cieši kopā, un kāti jāaptin ar zāli. Linu pina ļoti uzmanīgi, bet viņa vainags visu laiku izjuka.',
        translation: 'O prado estava cheio de margaridas e de centáureas azuis. A Ilze mostrou como se trança uma coroa: as flores têm de ficar bem juntinhas, e os caules têm de ser enrolados com capim. O Linu trançava com muito cuidado, mas a coroa dele se desmanchava o tempo todo.',
        choices: [
          { text: 'Linu palūdza Ilzei parādīt vēlreiz.', translation: 'O Linu pediu à Ilze que mostrasse de novo.', next: 'vainags' },
          {
            text: 'Linu nometa puķes, jo Ilze bija teikusi, ka vainags nav jāpin.',
            translation: 'O Linu largou as flores, porque a Ilze tinha dito que a coroa não precisava ser trançada.',
            wrong: 'A Ilze disse o contrário: «visiem jābūt vainagos» — todos TÊM de estar de coroa. O prefixo jā- (debitivo) indica obrigação, e ela ainda ensinou como «jāsapin» (tem de se trançar) a coroa.',
          },
        ],
      },
      siers: {
        emoji: '🧀',
        text: 'Ilzes mamma Dace taisīja Jāņu sieru. Viņa stāstīja, ka biezpiens jāieliek karstā pienā un pēc tam jāpieber ķimenes, citādi siers nebūs īsts. Linu maisīja katlu tik ilgi, līdz rokas sāka sāpēt.',
        translation: 'A mãe da Ilze, Dace, fazia o queijo de Jāņi. Ela contou que a coalhada tem de ser posta no leite quente e depois é preciso acrescentar cominho, senão o queijo não fica autêntico. O Linu mexeu a panela até os braços começarem a doer.',
        choices: [{ text: 'Kad siers bija gatavs, Linu aizgāja pie Ilzes.', translation: 'Quando o queijo ficou pronto, o Linu foi atrás da Ilze.', next: 'vainags' }],
      },
      vainags: {
        emoji: '🍃',
        text: 'Beidzot Ilze uzlika Linu galvā ozollapu vainagu, ko viņa bija sapinusi viņam. Viņa paskaidroja, ka vīriešiem jānēsā ozollapas, bet sievietēm — puķes. Kad saule nolaidās zemāk, pagalmā iededza lielu ugunskuru.',
        translation: 'Por fim, a Ilze pôs na cabeça do Linu uma coroa de folhas de carvalho que ela tinha trançado para ele. Explicou que os homens têm de usar folhas de carvalho, e as mulheres, flores. Quando o sol desceu mais, acenderam uma grande fogueira no quintal.',
        choices: [{ text: 'Linu piegāja pie ugunskura.', translation: 'O Linu se aproximou da fogueira.', next: 'ugunskurs' }],
      },
      ugunskurs: {
        emoji: '🔥',
        text: 'Visi dziedāja dziesmas ar piedziedājumu «līgo, līgo». Ilzes tētis teica, ka Jāņu naktī nedrīkst gulēt, jo citādi visu gadu būsi miegains. Pusnaktī Ilze pačukstēja: «Iesim meklēt papardes ziedu? Tas jāatrod, pirms aust gaisma.»',
        translation: 'Todos cantavam canções com o refrão «līgo, līgo». O pai da Ilze disse que na noite de Jāņi não se pode dormir, porque senão a pessoa fica sonolenta o ano inteiro. À meia-noite, a Ilze sussurrou: «Vamos procurar a flor da samambaia? Tem de ser encontrada antes de o dia clarear.»',
        choices: [
          { text: 'Linu paņēma lukturīti un devās ar Ilzi uz mežu.', translation: 'O Linu pegou uma lanterninha e foi com a Ilze para o bosque.', next: 'mezs' },
          { text: 'Linu teica, ka vēl mazliet pasēdēs pie uguns.', translation: 'O Linu disse que ia ficar mais um pouquinho sentado perto do fogo.', next: 'aizmiga' },
          {
            text: 'Linu aizgāja gulēt, jo tētis bija teicis, ka Jāņu naktī jāguļ.',
            translation: 'O Linu foi dormir, porque o pai tinha dito que na noite de Jāņi é preciso dormir.',
            wrong: 'O pai disse «nedrīkst gulēt»: NÃO se pode dormir na noite de Jāņi, senão a pessoa fica sonolenta o ano todo. «Nedrīkst» é proibição; «jāguļ» (tem de dormir) seria o oposto.',
          },
        ],
      },
      aizmiga: {
        emoji: '😴',
        text: 'Linu apsēdās uz soliņa pie siltās uguns un aizvēra acis tikai uz brīdi. Kad viņš pamodās, jau bija gaišs, un visi smējās. «Nu tu būsi miegains visu gadu!» jokoja Ilzes tētis.',
        translation: 'O Linu se sentou num banquinho perto do fogo quentinho e fechou os olhos só por um instante. Quando acordou, já estava claro, e todos riam. «Pronto, agora você vai ficar com sono o ano todo!», brincou o pai da Ilze.',
        ending: { tone: 'neutro', title: 'Sono de verão', message: 'O Linu cochilou na noite mais curta do ano. A flor da samambaia fica para o próximo Jāņi.' },
      },
      mezs: {
        emoji: '🌲',
        text: 'Mežā bija tumšs un kluss, tikai kaut kur tālumā vēl skanēja dziesmas. Ilze stāstīja, ka papardes zieds patiesībā neeksistē, bet katram tas jāmeklē pašam. Pēkšņi starp paparžu lapām kaut kas iemirdzējās.',
        translation: 'No bosque estava escuro e silencioso; só lá longe ainda se ouviam as canções. A Ilze contou que a flor da samambaia, na verdade, não existe, mas que cada um tem de procurá-la por conta própria. De repente, algo cintilou entre as folhas das samambaias.',
        choices: [{ text: 'Linu pieliecās tuvāk, lai redzētu, kas tas ir.', translation: 'O Linu se abaixou mais perto para ver o que era.', next: 'tarpins' }],
      },
      tarpins: {
        emoji: '✨',
        text: 'Tā bija jāņtārpiņa gaisma — maza vabole, kas spīd tumsā. Ilze iesmējās un teica, ka tas ir tikpat labi kā papardes zieds. Viņi atgriezās pie ugunskura tieši tad, kad sāka aust.',
        translation: 'Era a luz de um vaga-lume, um besourinho que brilha no escuro. A Ilze riu e disse que aquilo era tão bom quanto a flor da samambaia. Eles voltaram para a fogueira bem na hora em que o dia começava a clarear.',
        ending: { tone: 'bom', title: 'A flor que brilha', message: 'Coroa na cabeça, noite em claro e um vaga-lume no lugar da flor lendária: o Linu viveu um Jāņi de verdade.' },
      },
    },
  },
  {
    id: 'lv-h17',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Kur satiekas divas jūras',
    emoji: '🦆',
    summary: 'No cabo Kolka, o Linu acompanha um ornitólogo na contagem das aves que migram ao amanhecer e precisa decidir o que fazer com uma gaivota machucada.',
    cultural_context:
      'No cabo Kolka (Kolkasrags), no norte da Curlândia, as águas do golfo de Riga encontram as do mar Báltico aberto. O cabo fica numa das rotas de migração de aves mais importantes da Europa: na primavera, as aves seguem a linha da costa e passam por ali em grandes bandos. É também a porta da Costa Livônia, onde as placas de alguns vilarejos trazem o nome em letão e em livônio.',
    start: 'start',
    glossary: [
      ['jāceļas', 'tem de se levantar'],
      ['rītausma', 'amanhecer'],
      ['bars', 'bando'],
      ['jāpieraksta', 'tem de anotar'],
      ['sajukt', 'se confundir, se embaralhar'],
      ['savainots spārns', 'asa machucada'],
      ['nedrīkst', 'não se pode'],
      ['lībieši', 'os livônios'],
    ],
    nodes: {
      start: {
        emoji: '🌅',
        text: 'Linu bija atbraucis uz Kolkasragu, kur Rīgas jūras līcis satiekas ar atklāto jūru. Ornitologs Māris viņam teica, ka rīt agri jāceļas, jo lielākā daļa putnu lido rītausmā. «Ja gribi redzēt lielos barus, tev jābūt krastā pulksten piecos», viņš piebilda.',
        translation: 'O Linu tinha vindo ao cabo Kolka, onde o golfo de Riga se encontra com o mar aberto. O ornitólogo Māris disse a ele que amanhã era preciso levantar cedo, porque a maioria das aves voa ao amanhecer. «Se você quer ver os grandes bandos, tem de estar na praia às cinco horas», acrescentou.',
        choices: [
          { text: 'Linu uzlika modinātāju uz pulksten četriem.', translation: 'O Linu pôs o despertador para as quatro horas.', next: 'rits' },
          {
            text: 'Linu nolēma iet uz krastu pusdienlaikā, kad būs siltāks.',
            translation: 'O Linu decidiu ir à praia na hora do almoço, quando estaria mais quente.',
            wrong: 'O Māris explicou que a maioria das aves voa ao amanhecer e que o Linu «tev jābūt krastā pulksten piecos» — tinha de estar na praia às cinco. Ao meio-dia, os bandos já teriam passado.',
          },
        ],
      },
      rits: {
        emoji: '🔭',
        text: 'No rīta bija auksts, un pār jūru vēl gulēja migla. Māris iedeva Linu binokli un paskaidroja, kā jāskaita putni: vispirms jānovērtē, cik liels ir bars, un tikai tad jāpieraksta skaitlis. Drīz virs viņu galvām aizlidoja pirmās pīles.',
        translation: 'De manhã fazia frio, e a neblina ainda cobria o mar. O Māris deu um binóculo ao Linu e explicou como se contam as aves: primeiro é preciso estimar o tamanho do bando, e só depois anotar o número. Logo os primeiros patos passaram voando sobre a cabeça deles.',
        choices: [
          { text: 'Linu sāka skaitīt pīles.', translation: 'O Linu começou a contar os patos.', next: 'skaita' },
          { text: 'Linu jautāja, kāpēc putni lido tieši šeit.', translation: 'O Linu perguntou por que as aves voam justamente por ali.', next: 'kapec' },
        ],
      },
      kapec: {
        emoji: '🗺️',
        text: 'Māris stāstīja, ka putni negrib lidot pāri atklātai jūrai, tāpēc tie seko krasta līnijai. Kolkasragā krasts beidzas, un putniem jāizlemj, kurp lidot tālāk. Tāpēc pavasarī šeit var redzēt tūkstošiem putnu.',
        translation: 'O Māris contou que as aves não gostam de voar sobre o mar aberto e, por isso, seguem a linha da costa. No cabo Kolka a costa termina, e as aves têm de decidir para onde voar em seguida. É por isso que na primavera se veem milhares de aves ali.',
        choices: [{ text: 'Linu pacēla binokli un sāka skaitīt.', translation: 'O Linu ergueu o binóculo e começou a contar.', next: 'skaita' }],
      },
      skaita: {
        emoji: '🦢',
        text: 'Linu skaitīja un skaitīja, bet putni lidoja tik ātri, ka viņš visu laiku sajuka. «Nekas», smējās Māris, «pirmajā reizē visi sajūk. Galvenais, ka tu pieraksti, cik aptuveni to bija.» Tad Linu pamanīja, ka krastā kāds putns neveikli lēkā.',
        translation: 'O Linu contava e contava, mas as aves voavam tão rápido que ele se embaralhava o tempo todo. «Não tem problema», riu o Māris, «da primeira vez todo mundo se embaralha. O importante é você anotar mais ou menos quantas eram.» Então o Linu percebeu que, na praia, uma ave pulava de um jeito desajeitado.',
        choices: [
          { text: 'Linu gāja paskatīties uz putnu.', translation: 'O Linu foi dar uma olhada na ave.', next: 'putns' },
          { text: 'Linu turpināja skaitīt pīles.', translation: 'O Linu continuou contando os patos.', next: 'turpina' },
        ],
      },
      putns: {
        emoji: '🕊️',
        text: 'Tā bija jauna kaija, kurai bija savainots spārns. Linu jau gribēja to pacelt, bet Māris steidzīgi teica, ka putnu nedrīkst ņemt rokās, jo tas var sabīties vēl vairāk. «Mums jāpiezvana uz nacionālo parku, un tur pateiks, kas jādara.»',
        translation: 'Era uma gaivota jovem, com uma asa machucada. O Linu já ia pegá-la, mas o Māris disse depressa que não se pode pegar a ave na mão, porque ela pode se assustar ainda mais. «Temos de ligar para o parque nacional, e lá vão dizer o que tem de ser feito.»',
        choices: [
          { text: 'Linu palika pa gabalu, kamēr Māris zvanīja.', translation: 'O Linu ficou a distância enquanto o Māris telefonava.', next: 'gaida' },
          {
            text: 'Linu paņēma kaiju rokās, lai to sasildītu.',
            translation: 'O Linu pegou a gaivota na mão para aquecê-la.',
            wrong: 'O Māris avisou que «putnu nedrīkst ņemt rokās»: NÃO se pode pegar a ave na mão, porque ela pode se assustar ainda mais. O que «tem de» ser feito («jāpiezvana») é ligar para o parque.',
          },
        ],
      },
      gaida: {
        emoji: '🪧',
        text: 'Kamēr viņi gaidīja, Māris pastāstīja, ka šajā krastā senāk dzīvoja lībieši, zvejnieki, kuru valoda ir radniecīga igauņu un somu valodai. Viņš piebilda, ka vēl tagad dažu ciemu nosaukumi uz ceļa zīmēm ir rakstīti divās valodās. Linu nolēma, ka pēc tam noteikti aizbrauks tos apskatīt.',
        translation: 'Enquanto esperavam, o Māris contou que antigamente viviam naquela costa os livônios, pescadores cuja língua é parente do estoniano e do finlandês. Acrescentou que ainda hoje os nomes de alguns vilarejos estão escritos em duas línguas nas placas de estrada. O Linu decidiu que depois iria sem falta vê-los.',
        choices: [{ text: 'Linu ieraudzīja, ka tuvojas mašīna.', translation: 'O Linu viu que um carro se aproximava.', next: 'final_bom' }],
      },
      turpina: {
        emoji: '📓',
        text: 'Linu skaitīja līdz pat pusdienām un saskaitīja gandrīz divus tūkstošus pīļu. Māris ierakstīja skaitli savā burtnīcā un pateicās par palīdzību. Tomēr vakarā Linu vēl domāja par mazo putnu krastā un nožēloja, ka nebija aizgājis paskatīties.',
        translation: 'O Linu contou até a hora do almoço e chegou a quase dois mil patos. O Māris anotou o número no caderno e agradeceu pela ajuda. Mesmo assim, à noite o Linu ainda pensava na avezinha da praia e se arrependeu de não ter ido ver.',
        ending: { tone: 'neutro', title: 'Dois mil patos', message: 'A contagem saiu ótima, mas às vezes vale a pena tirar os olhos do binóculo.' },
      },
      final_bom: {
        emoji: '💚',
        text: 'Atbrauca nacionālā parka darbiniece ar kasti un rūpīgi ielika kaiju iekšā. Viņa teica, ka spārns sadzīs un pēc dažām nedēļām putnu varēs atkal palaist brīvībā. Māris uzsita Linu uz pleca: «Šodien tu putnus ne tikai saskaitīji, bet vienu arī izglābi.»',
        translation: 'Chegou uma funcionária do parque nacional com uma caixa e colocou a gaivota lá dentro com cuidado. Ela disse que a asa ia sarar e que em algumas semanas a ave poderia ser solta de novo. O Māris deu um tapinha no ombro do Linu: «Hoje você não só contou as aves, como também salvou uma.»',
        ending: { tone: 'bom', title: 'Guardião do cabo', message: 'O Linu aprendeu a contar bandos e, mais importante, a saber o que NÃO se deve fazer com uma ave ferida.' },
      },
    },
  },
  {
    id: 'lv-h18',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Zivis, kas lec pret straumi',
    emoji: '🐟',
    summary: 'Numa noite de abril em Kuldīga, o Linu vê os peixes saltarem a queda-d’água mais larga da Europa e descobre quando é que se pode atravessá-la a pé.',
    cultural_context:
      'A Ventas rumba, em Kuldīga, tem cerca de 250 metros de largura e é considerada a queda-d’água mais larga da Europa, embora tenha só uns dois metros de altura. Na primavera, os peixes sobem o rio Venta saltando pela queda; antigamente os pescadores penduravam cestos ali, e daí vem o dito de que em Kuldīga se pesca no ar. No verão, com a água baixa, muita gente atravessa a queda a pé.',
    start: 'start',
    glossary: [
      ['jāuzmanās', 'tem de tomar cuidado'],
      ['ūdenskritums', 'queda-d’água, cachoeira'],
      ['vimba', 'vimba (peixe de rio, parente da carpa)'],
      ['izlēkt', 'saltar para fora'],
      ['slidens', 'escorregadio'],
      ['straume', 'correnteza'],
      ['pāriet pāri', 'atravessar'],
    ],
    nodes: {
      start: {
        emoji: '🌊',
        text: 'Aprīļa vakarā Linu stāvēja pie Ventas rumbas Kuldīgā, kur upe krīt pār platu, zemu klinti. Viņa draudzene Anna teica, ka pavasarī te jāatnāk krēslā, jo tad vimbas lec augšup pa ūdenskritumu. «Tikai jāuzmanās — akmeņi ir slideni», viņa brīdināja.',
        translation: 'Numa noite de abril, o Linu estava junto à Ventas rumba, em Kuldīga, onde o rio cai por cima de uma rocha larga e baixa. A amiga dele, Anna, disse que na primavera é preciso vir ali ao entardecer, porque é quando as vimbas saltam queda acima. «Só tem de tomar cuidado: as pedras são escorregadias», avisou ela.',
        choices: [
          { text: 'Linu apsēdās krastā un gaidīja.', translation: 'O Linu se sentou na margem e esperou.', next: 'gaida' },
          { text: 'Linu nokāpa tuvāk ūdenim.', translation: 'O Linu desceu para mais perto da água.', next: 'tuvak' },
        ],
      },
      tuvak: {
        emoji: '😬',
        text: 'Linu nokāpa pa akmeņiem gandrīz līdz pašam ūdenim. Viena kāja paslīdēja, un viņš tikko neiekrita upē. Anna pieskrēja, satvēra viņu aiz rokas un teica: «Es taču teicu, ka jāuzmanās!»',
        translation: 'O Linu desceu pelas pedras quase até a beira da água. Um pé escorregou, e ele por pouco não caiu no rio. A Anna veio correndo, agarrou-o pela mão e disse: «Eu não falei que tinha de tomar cuidado?!»',
        choices: [{ text: 'Linu atkāpās un apsēdās blakus Annai.', translation: 'O Linu recuou e se sentou ao lado da Anna.', next: 'gaida' }],
      },
      gaida: {
        emoji: '🐟',
        text: 'Sākumā nekas nenotika, tikai ūdens šalca. Tad pēkšņi viena zivs izlēca no ūdens, tad otra un trešā. Anna paskaidroja, ka vimbām jātiek augšup pa upi, lai tur izmestu ikrus.',
        translation: 'No começo nada aconteceu; só a água rumorejava. De repente, um peixe saltou para fora da água, depois outro e mais outro. A Anna explicou que as vimbas têm de chegar rio acima para desovar lá.',
        choices: [
          { text: 'Linu jautāja, vai šīs zivis senāk ķēra.', translation: 'O Linu perguntou se antigamente esses peixes eram pescados.', next: 'vesture' },
          {
            text: 'Linu teica, ka žēl zivju, kas bēg prom no Kuldīgas.',
            translation: 'O Linu disse que tinha pena dos peixes que fogem de Kuldīga.',
            wrong: 'Os peixes não estão fugindo: a Anna explicou que as vimbas «jātiek augšup pa upi» — TÊM DE subir o rio para desovar lá em cima.',
          },
        ],
      },
      vesture: {
        emoji: '🧺',
        text: 'Anna stāstīja, ka senāk zvejnieki pie ūdenskrituma piekāra grozus, un zivis iekrita tajos tieši no gaisa. Tāpēc par Kuldīgu saka, ka te zivis ķer gaisā. Viņa piebilda, ka šajā laikā vimbas jāsaudzē, jo tās ir ļoti nogurušas.',
        translation: 'A Anna contou que antigamente os pescadores penduravam cestos junto à queda, e os peixes caíam dentro deles direto do ar. Por isso se diz de Kuldīga que ali se pesca no ar. Ela acrescentou que nessa época as vimbas têm de ser poupadas, porque estão muito cansadas.',
        choices: [{ text: 'Linu jautāja, ko vēl Kuldīgā var redzēt.', translation: 'O Linu perguntou o que mais dava para ver em Kuldīga.', next: 'tilts' }],
      },
      tilts: {
        emoji: '🌉',
        text: 'Nākamajā dienā Anna aizveda Linu uz veco ķieģeļu tiltu pār Ventu. No tilta varēja redzēt visu rumbu, un Anna teica, ka vasarā, kad ūdens ir zems, cilvēki pāriet pāri ūdenskritumam kājām. Linu gribēja to izmēģināt uzreiz.',
        translation: 'No dia seguinte, a Anna levou o Linu à velha ponte de tijolos sobre o Venta. Da ponte dava para ver a queda inteira, e a Anna contou que no verão, quando a água está baixa, as pessoas atravessam a queda a pé. O Linu quis experimentar na mesma hora.',
        choices: [
          { text: 'Linu novilka kurpes un devās uz upi.', translation: 'O Linu tirou os sapatos e foi para o rio.', next: 'auksts' },
          { text: 'Linu pajautāja Annai, vai to var darīt arī tagad.', translation: 'O Linu perguntou à Anna se dava para fazer isso agora também.', next: 'jauta' },
          {
            text: 'Linu teica, ka atbrauks pāriet rumbu ziemā, kad ūdens ir zemākais.',
            translation: 'O Linu disse que voltaria para atravessar a queda no inverno, quando a água está mais baixa.',
            wrong: 'A Anna disse que se atravessa a pé no VERÃO («vasarā»), quando a água está baixa, e não no inverno.',
          },
        ],
      },
      auksts: {
        emoji: '🥶',
        text: 'Tiklīdz Linu iebāza kāju ūdenī, viņš saprata, ka tā bija kļūda: ūdens bija ledains, un straume gandrīz nogāza viņu no kājām. Anna palīdzēja viņam izkāpt krastā un iedeva savu šalli. «Rumbu var pāriet tikai vasarā», viņa atgādināja.',
        translation: 'Assim que o Linu enfiou o pé na água, percebeu que tinha sido um erro: a água estava gelada, e a correnteza quase o derrubou. A Anna o ajudou a sair para a margem e deu a ele o cachecol dela. «Só dá para atravessar a queda no verão», lembrou ela.',
        ending: { tone: 'neutro', title: 'Pés gelados', message: 'O Linu saiu molhado, mas inteiro. Em abril, a Ventas rumba é para olhar, não para atravessar.' },
      },
      jauta: {
        emoji: '📅',
        text: 'Anna pakratīja galvu. «Aprīlī ūdens ir pārāk augsts un auksts. Tev jāatbrauc atkal jūlijā, tad mēs pāriesim kopā.» Linu uzreiz ierakstīja telefonā: «Jūlijs — Kuldīga — jāpāriet rumba».',
        translation: 'A Anna balançou a cabeça. «Em abril a água está alta e fria demais. Você tem de voltar em julho, aí a gente atravessa junto.» O Linu anotou na hora no celular: «Julho — Kuldīga — atravessar a queda».',
        choices: [{ text: 'Linu apsolīja atbraukt vasarā.', translation: 'O Linu prometeu voltar no verão.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '☀️',
        text: 'Jūlijā Linu atbrauca atkal. Ūdens bija silts un zems, un viņi ar Annu lēnām, soli pa solim, pārgāja pāri visai rumbai. Otrā krastā Linu pagriezās atpakaļ un nespēja noticēt, cik plats ir šis ūdenskritums.',
        translation: 'Em julho, o Linu voltou. A água estava morna e baixa, e ele e a Anna atravessaram a queda inteira devagar, passo a passo. Na outra margem, o Linu se virou para trás e não conseguia acreditar em como aquela queda-d’água é larga.',
        ending: { tone: 'bom', title: 'Travessia de verão', message: 'Paciência recompensada: o Linu cruzou a pé a queda-d’água mais larga da Europa.' },
      },
    },
  },
  // ───────────────────────── B1.3 ─────────────────────────
  {
    id: 'lv-h19',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Pazudusī stuka roze',
    emoji: '🏰',
    summary: 'Voluntário no Palácio de Rundāle, o Linu ajuda uma restauradora a descobrir o paradeiro de uma rosa de estuque que caiu do teto durante a noite.',
    cultural_context:
      'O Palácio de Rundāle, no sul da Letônia, foi construído no século XVIII para o duque da Curlândia, Ernst Johann von Biron, segundo o projeto do arquiteto italiano Francesco Bartolomeo Rastrelli, o mesmo do Palácio de Inverno de São Petersburgo. A restauração começou nos anos 1970 e levou décadas; hoje o palácio tem salões decorados com estuque e um grande roseiral.',
    start: 'start',
    glossary: [
      ['tika uzcelta', 'foi construída'],
      ['restauratore', 'restauradora'],
      ['griesti', 'teto (lado de dentro)'],
      ['nokritusī', 'a que caiu'],
      ['ietīts', 'embrulhado'],
      ['salūzis', 'quebrado'],
      ['salīmēt', 'colar'],
      ['nav darāms', 'não é para ser feito'],
    ],
    nodes: {
      start: {
        emoji: '👑',
        text: 'Rundāles pils tika uzcelta astoņpadsmitajā gadsimtā Kurzemes hercogam, un to projektēja itāļu arhitekts Rastrelli. Linu bija atbraucis uz pili kā brīvprātīgais, un viņu sagaidīja restauratore Laura. «Šodien jāpārbauda Baltā zāle», viņa teica, «jo tur kaut kas ir sabojāts.»',
        translation: 'O Palácio de Rundāle foi construído no século XVIII para o duque da Curlândia, e quem o projetou foi o arquiteto italiano Rastrelli. O Linu tinha vindo ao palácio como voluntário, e quem o recebeu foi a restauradora Laura. «Hoje temos de verificar o Salão Branco», disse ela, «porque lá tem alguma coisa danificada.»',
        choices: [
          { text: 'Linu sekoja Laurai uz Balto zāli.', translation: 'O Linu seguiu a Laura até o Salão Branco.', next: 'zale' },
          { text: 'Linu vispirms gribēja apskatīt rožu dārzu.', translation: 'O Linu quis ver primeiro o roseiral.', next: 'darzs' },
        ],
      },
      darzs: {
        emoji: '🌹',
        text: 'Rožu dārzs vēl bija slapjš no rīta rasas. Dārznieks Jānis stāstīja, ka katra roze te ir rūpīgi iestādīta un katra šķirne ir ierakstīta īpašā grāmatā. Tad Linu ieraudzīja Lauru, kas māja viņam no pils loga.',
        translation: 'O roseiral ainda estava molhado do orvalho da manhã. O jardineiro Jānis contou que ali cada rosa é plantada com cuidado e cada variedade é registrada num livro especial. Então o Linu viu a Laura, que acenava para ele de uma janela do palácio.',
        choices: [{ text: 'Linu steidzās uz pili.', translation: 'O Linu correu para o palácio.', next: 'zale' }],
      },
      zale: {
        emoji: '🤍',
        text: 'Baltā zāle bija pilna gaismas, un griesti bija rotāti ar baltiem stuka ornamentiem. Laura parādīja uz stūri, kur trūka vienas stuka rozes. «Tā ir nokritusi naktī», viņa teica. «Nokritusī roze jāatrod, citādi tā būs jāveido no jauna.»',
        translation: 'O Salão Branco estava cheio de luz, e o teto era decorado com ornamentos brancos de estuque. A Laura apontou para um canto onde faltava uma das rosas de estuque. «Ela caiu durante a noite», disse. «A rosa que caiu tem de ser encontrada, senão vai ter de ser feita de novo.»',
        choices: [
          { text: 'Linu sāka meklēt uz grīdas.', translation: 'O Linu começou a procurar no chão.', next: 'grida' },
          {
            text: 'Linu jautāja, kāpēc roze tika noplūkta dārzā.',
            translation: 'O Linu perguntou por que a rosa tinha sido colhida no jardim.',
            wrong: 'Não se trata de uma rosa do jardim: é uma rosa de estuque («stuka roze») que caiu do teto. «Nokritusī» é o particípio de «nokrist», cair: «a que caiu».',
          },
        ],
      },
      grida: {
        emoji: '👣',
        text: 'Uz grīdas nekā nebija, tikai sīki, balti putekļi. Laura teica, ka vakar zāle tika slēgta pulksten sešos un neviens tajā vairs neienāca. Linu pamanīja, ka putekļainas pēdas ved uz durvīm, kas bija atstātas pusviru.',
        translation: 'No chão não havia nada, só um pó branco e fininho. A Laura disse que ontem o salão tinha sido fechado às seis e que ninguém mais entrou lá. O Linu reparou que pegadas empoeiradas levavam até uma porta que tinha sido deixada entreaberta.',
        choices: [
          { text: 'Linu gāja pa pēdām uz gaiteni.', translation: 'O Linu seguiu as pegadas até o corredor.', next: 'ratini' },
          { text: 'Linu ieteica pajautāt apsargam.', translation: 'O Linu sugeriu perguntar ao vigia.', next: 'apsargs' },
        ],
      },
      apsargs: {
        emoji: '🔦',
        text: 'Apsargs Valdis teica, ka naktī bija dzirdējis klusu troksni, bet neko aizdomīgu nebija redzējis. No rīta viņš bija redzējis apkopēju ar tīrīšanas ratiņiem pie Baltās zāles durvīm. «Pajautājiet viņai», viņš ieteica.',
        translation: 'O vigia Valdis disse que de noite tinha ouvido um barulhinho, mas não tinha visto nada suspeito. De manhã, tinha visto a faxineira com o carrinho de limpeza perto da porta do Salão Branco. «Perguntem a ela», sugeriu.',
        choices: [{ text: 'Linu un Laura sameklēja apkopēju.', translation: 'O Linu e a Laura foram atrás da faxineira.', next: 'ratini' }],
      },
      ratini: {
        emoji: '🧹',
        text: 'Gaitenī pie kāpnēm stāvēja apkopēja Inta ar saviem tīrīšanas ratiņiem. Starp slotām un spaiņiem gulēja maza, rūpīgi ietīta paciņa. Inta paskaidroja, ka no rīta bija atradusi uz grīdas salūzušu gabaliņu un to savākusi, lai neviens neuzkāptu tam virsū.',
        translation: 'No corredor, perto da escada, estava a faxineira Inta com o carrinho de limpeza. Entre as vassouras e os baldes havia um pacotinho embrulhado com cuidado. A Inta explicou que de manhã tinha encontrado no chão um pedacinho quebrado e o tinha recolhido, para ninguém pisar em cima.',
        choices: [
          { text: 'Linu uzmanīgi paņēma paciņu un aiznesa Laurai.', translation: 'O Linu pegou o pacotinho com cuidado e o levou para a Laura.', next: 'laura' },
          {
            text: 'Linu sadusmojās, jo Inta bija izmetusi rozi atkritumos.',
            translation: 'O Linu ficou bravo, porque a Inta tinha jogado a rosa no lixo.',
            wrong: 'A Inta não jogou nada fora: ela tinha recolhido («savākusi») o pedaço e guardado, embrulhado («ietīta»), no carrinho, para ninguém pisar em cima.',
          },
        ],
      },
      laura: {
        emoji: '🧩',
        text: 'Laura attina paciņu un atviegloti uzelpoja: roze bija salūzusi tikai divās daļās. «Salauzts nav tas pats, kas pazudis», viņa smaidīja. «To var salīmēt.» Viņa aizgāja pēc instrumentiem, un Linu palika viens ar abām daļām.',
        translation: 'A Laura desembrulhou o pacotinho e respirou aliviada: a rosa tinha se quebrado só em duas partes. «Quebrado não é o mesmo que perdido», sorriu ela. «Dá para colar.» Ela foi buscar as ferramentas, e o Linu ficou sozinho com os dois pedaços.',
        choices: [
          { text: 'Linu gaidīja, kamēr Laura atgriezīsies.', translation: 'O Linu esperou a Laura voltar.', next: 'final_bom' },
          { text: 'Linu paņēma līmi un mēģināja salīmēt rozi pats.', translation: 'O Linu pegou cola e tentou colar a rosa sozinho.', next: 'pats' },
        ],
      },
      pats: {
        emoji: '😅',
        text: 'Linu salika abas daļas kopā un ātri tās salīmēja. Roze tika salīmēta, bet šķībi, un Laurai nācās to visu uzmanīgi atdalīt atpakaļ. «Paldies par centību», viņa nopūtās, «bet restaurācija nav darāma steigā.»',
        translation: 'O Linu juntou as duas partes e colou tudo depressa. A rosa foi colada, mas torta, e a Laura teve de separar tudo de novo com muito cuidado. «Obrigada pelo empenho», suspirou ela, «mas restauração não se faz com pressa.»',
        ending: { tone: 'neutro', title: 'Rosa torta', message: 'A boa vontade do Linu atrasou o trabalho. Na restauração, esperar também faz parte do ofício.' },
      },
      final_bom: {
        emoji: '✨',
        text: 'Laura atgriezās, iedeva Linu otiņu un parādīja, kā jāuzklāj speciālā līme. Pēc divām dienām izžuvusī roze tika pacelta atpakaļ pie griestiem. Apmeklētāji, kas nāca cauri zālei, pat nenojauta, ka tā kādreiz bija nokritusi.',
        translation: 'A Laura voltou, deu um pincel ao Linu e mostrou como se passa a cola especial. Dois dias depois, a rosa, já seca, foi erguida de volta ao teto. Os visitantes que passavam pelo salão nem desconfiavam de que ela um dia tinha caído.',
        ending: { tone: 'bom', title: 'De volta ao teto', message: 'Com paciência e a restauradora ao lado, o Linu ajudou a devolver a rosa ao lugar dela no palácio.' },
      },
    },
  },
  {
    id: 'lv-h20',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Vējš uz Ziemeļu mola',
    emoji: '💨',
    summary: 'Na Karosta, o antigo porto militar de Liepāja, o Linu visita a catedral dos marinheiros e enfrenta o vento no quebra-mar do norte, onde perde o gorro favorito.',
    cultural_context:
      'A Karosta, bairro ao norte de Liepāja, foi construída no fim do século XIX como porto de guerra da frota do Império Russo. No período soviético era uma zona militar fechada, onde nem os moradores de Liepāja entravam livremente. Seu marco é a Catedral Ortodoxa de São Nicolau, de cúpulas douradas, e Liepāja é conhecida na Letônia como «a cidade onde nasce o vento».',
    start: 'start',
    glossary: [
      ['tika uzbūvēta', 'foi construída'],
      ['slēgta zona', 'zona fechada'],
      ['tika izmantota', 'foi usada'],
      ['mols', 'quebra-mar, molhe'],
      ['vēja brāzma', 'rajada de vento'],
      ['adīts', 'tricotado'],
      ['uzņemts', 'tirado (foto)'],
      ['aizliegts', 'proibido'],
    ],
    nodes: {
      start: {
        emoji: '⚓',
        text: 'Karosta tika uzbūvēta deviņpadsmitā gadsimta beigās kā kara osta Krievijas impērijas flotei. Gids Artūrs stāstīja, ka padomju laikā tā bija slēgta zona, kurā pat liepājnieki nedrīkstēja brīvi ieiet. Tagad pa tās ielām staigāja tūristi, un pār jumtiem mirdzēja katedrāles zelta kupoli.',
        translation: 'A Karosta foi construída no fim do século XIX como porto de guerra para a frota do Império Russo. O guia Artūrs contou que no período soviético ela era uma zona fechada, onde nem os moradores de Liepāja podiam entrar livremente. Agora turistas passeavam por suas ruas, e acima dos telhados brilhavam as cúpulas douradas da catedral.',
        choices: [
          { text: 'Linu gribēja ieiet katedrālē.', translation: 'O Linu quis entrar na catedral.', next: 'katedrale' },
          { text: 'Linu jautāja, kur ir Ziemeļu mols.', translation: 'O Linu perguntou onde fica o quebra-mar do norte.', next: 'mols' },
        ],
      },
      katedrale: {
        emoji: '⛪',
        text: 'Pareizticīgo katedrāle tika uzcelta gadsimtu mijā ostas jūrniekiem, un iekšā bija kluss un silts. Artūrs paskaidroja, ka padomju laikā ēka tika izmantota kā kinoteātris un sporta zāle. Tikai pēc neatkarības atjaunošanas tā atkal kļuva par baznīcu.',
        translation: 'A catedral ortodoxa foi construída na virada do século para os marinheiros do porto, e lá dentro estava silencioso e quentinho. O Artūrs explicou que no período soviético o prédio foi usado como cinema e ginásio de esportes. Só depois da restauração da independência voltou a ser igreja.',
        choices: [
          { text: 'Linu devās uz Ziemeļu molu.', translation: 'O Linu seguiu para o quebra-mar do norte.', next: 'mols' },
          {
            text: 'Linu jautāja, kāpēc katedrāle tika uzcelta padomju laikā.',
            translation: 'O Linu perguntou por que a catedral foi construída no período soviético.',
            wrong: 'Ela foi construída («tika uzcelta») na virada do século XIX para o XX. No período soviético, o prédio apenas foi USADO («tika izmantota») como cinema e ginásio.',
          },
        ],
      },
      mols: {
        emoji: '🌬️',
        text: 'Ziemeļu mols stiepās tālu jūrā, un vējš pūta tik stipri, ka Linu gandrīz nevarēja nostāvēt kājās. Artūrs teica, ka Liepāju sauc par pilsētu, kurā piedzimst vējš. Mola galā viļņi, sitoties pret akmeņiem, šļācās augstu gaisā.',
        translation: 'O quebra-mar do norte se estendia longe mar adentro, e o vento soprava tão forte que o Linu quase não conseguia ficar em pé. O Artūrs disse que Liepāja é chamada de a cidade onde nasce o vento. Na ponta do molhe, as ondas, batendo nas pedras, espirravam alto no ar.',
        choices: [
          { text: 'Linu gāja līdz pašam mola galam.', translation: 'O Linu foi até a pontinha do molhe.', next: 'gals' },
          { text: 'Linu palika tuvāk krastam un fotografēja viļņus.', translation: 'O Linu ficou mais perto da praia e fotografou as ondas.', next: 'foto' },
          {
            text: 'Linu novilka jaku, jo vējš bija vājš un silts.',
            translation: 'O Linu tirou a jaqueta, porque o vento estava fraco e morno.',
            wrong: 'O vento soprava tão forte que o Linu «gandrīz nevarēja nostāvēt kājās» — quase não conseguia ficar em pé. Não era hora de tirar a jaqueta!',
          },
        ],
      },
      gals: {
        emoji: '🧢',
        text: 'Pusceļā spēcīga vēja brāzma norāva Linu cepuri un aiznesa to ūdenī pie akmeņiem. Tā bija viņa mīļākā cepure, draudzenes vecmāmiņas adīta, ar latviešu rakstiem. Cepure šūpojās viļņos, un to ar katru mirkli nesa tālāk.',
        translation: 'No meio do caminho, uma rajada forte arrancou o gorro do Linu e o levou para a água, junto às pedras. Era o gorro favorito dele, tricotado pela avó de uma amiga, com padrões letões. O gorro balançava nas ondas e, a cada instante, era levado mais longe.',
        choices: [
          { text: 'Linu gribēja kāpt lejā pie ūdens.', translation: 'O Linu quis descer até a água.', next: 'kapt' },
          { text: 'Linu palūdza Artūram palīdzību.', translation: 'O Linu pediu ajuda ao Artūrs.', next: 'laiva' },
        ],
      },
      kapt: {
        emoji: '⚠️',
        text: 'Artūrs viņu satvēra aiz pleca. «Nekādā gadījumā! Šie akmeņi ir apauguši ar aļģēm, un vilnis tevi var noraut jūrā.» Viņš norādīja uz zīmi, uz kuras bija rakstīts: «Kāpt uz akmeņiem aizliegts».',
        translation: 'O Artūrs o segurou pelo ombro. «De jeito nenhum! Estas pedras estão cobertas de algas, e uma onda pode te arrastar para o mar.» Ele apontou para uma placa em que estava escrito: «Proibido subir nas pedras».',
        choices: [{ text: 'Linu paklausīja un atkāpās.', translation: 'O Linu obedeceu e recuou.', next: 'laiva' }],
      },
      laiva: {
        emoji: '🚤',
        text: 'Artūrs piezvanīja savam draugam zvejniekam, kura laiva stāvēja ostā. Pēc pusstundas laiva lēnām piebrauca pie mola. Zvejnieks ar garu āķi uzmanīgi izvilka cepuri no ūdens.',
        translation: 'O Artūrs ligou para um amigo pescador, cujo barco estava parado no porto. Meia hora depois, o barco chegou devagar junto ao molhe. O pescador, com um gancho comprido, tirou o gorro da água com cuidado.',
        choices: [{ text: 'Linu pateicās zvejniekam.', translation: 'O Linu agradeceu ao pescador.', next: 'final_bom' }],
      },
      foto: {
        emoji: '📷',
        text: 'Linu nostājās aiz liela akmens un fotografēja viļņus, kas triecās pret molu. Cepure palika droši galvā, bet mola galu viņš tā arī neredzēja. Vakarā Artūrs viņam parādīja fotogrāfiju no mola gala, uzņemtu mierīgā dienā.',
        translation: 'O Linu se posicionou atrás de uma pedra grande e fotografou as ondas que batiam contra o molhe. O gorro ficou firme na cabeça, mas a ponta do molhe ele acabou não vendo. À noite, o Artūrs mostrou a ele uma foto da ponta do molhe, tirada num dia calmo.',
        ending: { tone: 'neutro', title: 'Visto de longe', message: 'Seguro e com o gorro na cabeça, o Linu viu o molhe só pela metade. Fica o motivo para voltar num dia sem vento.' },
      },
      final_bom: {
        emoji: '🐟',
        text: 'Zvejnieks pasniedza Linu slapjo cepuri un smējās: «Liepājā vējš paņem, bet jūra atdod.» Cepure tika izžāvēta pie krāsns zvejnieka mājā, kur Linu nogaršoja arī kūpinātas zivis. Tā bija labākā ekskursija, kurā viņš jebkad bija bijis.',
        translation: 'O pescador entregou ao Linu o gorro molhado e riu: «Em Liepāja, o vento leva, mas o mar devolve.» O gorro foi secado perto do fogão na casa do pescador, onde o Linu também provou peixe defumado. Foi o melhor passeio que ele já tinha feito.',
        ending: { tone: 'bom', title: 'O mar devolve', message: 'Sem arriscar nas pedras, o Linu recuperou o gorro e ainda ganhou um almoço de pescador.' },
      },
    },
  },
  {
    id: 'lv-h21',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Krāsu laukumi cietoksnī',
    emoji: '🟥',
    summary: 'Em Daugavpils, o Linu e um amigo da cidade visitam, dentro da velha fortaleza, o centro de arte dedicado a Mark Rothko, pintor nascido ali.',
    cultural_context:
      'O pintor Mark Rothko, um dos grandes nomes do expressionismo abstrato, nasceu em 1903 em Daugavpils (então Dvinsk) e emigrou ainda criança para os Estados Unidos. Desde 2013, o Centro de Arte Mark Rothko funciona no antigo arsenal da Fortaleza de Daugavpils, do século XIX, e exibe algumas obras originais dele. Daugavpils, a maior cidade da Latgália, é bilíngue no dia a dia: muitos moradores falam letão e russo.',
    start: 'start',
    glossary: [
      ['dzimis', 'nascido'],
      ['uzaudzis', 'que cresceu, criado'],
      ['būdams', 'sendo, quando era'],
      ['cietoksnis', 'fortaleza'],
      ['tika atvērts', 'foi aberto'],
      ['stāvošs', 'que está de pé'],
      ['izstādīts', 'exposto'],
      ['krāsu laukums', 'campo de cor'],
    ],
    nodes: {
      start: {
        emoji: '🎟️',
        text: 'Daugavpilī Linu satika savu draugu Oļegu, kurš bija dzimis un uzaudzis šajā pilsētā. Oļegs runāja latviski un krieviski, un viņš smējās, ka Daugavpilī daudzi pāriet no vienas valodas uz otru pat teikuma vidū. Viņš jau bija nopircis divas biļetes uz Marka Rotko mākslas centru.',
        translation: 'Em Daugavpils, o Linu encontrou o amigo Oļegs, que tinha nascido e crescido naquela cidade. O Oļegs falava letão e russo, e brincava que em Daugavpils muita gente passa de uma língua para a outra até no meio da frase. Ele já tinha comprado dois ingressos para o centro de arte Mark Rothko.',
        choices: [
          { text: 'Linu jautāja, kas ir Marks Rotko.', translation: 'O Linu perguntou quem é Mark Rothko.', next: 'rotko' },
          { text: 'Linu ierosināja vispirms paēst.', translation: 'O Linu sugeriu comer primeiro.', next: 'kafejnica' },
        ],
      },
      rotko: {
        emoji: '🎨',
        text: 'Oļegs paskaidroja, ka Rotko ir slavens gleznotājs, dzimis Daugavpilī 1903. gadā. Vēl būdams bērns, viņš kopā ar ģimeni izbrauca uz Ameriku un tur kļuva par vienu no zināmākajiem abstraktās mākslas gleznotājiem. «Centrs atrodas cietoksnī, kas tika uzcelts deviņpadsmitajā gadsimtā», Oļegs piebilda.',
        translation: 'O Oļegs explicou que Rothko é um pintor famoso, nascido em Daugavpils em 1903. Ainda criança, ele foi com a família para a América e lá se tornou um dos pintores mais conhecidos da arte abstrata. «O centro fica na fortaleza, que foi construída no século XIX», acrescentou o Oļegs.',
        choices: [{ text: 'Linu un Oļegs devās uz cietoksni.', translation: 'O Linu e o Oļegs seguiram para a fortaleza.', next: 'cietoksnis' }],
      },
      kafejnica: {
        emoji: '🥟',
        text: 'Viņi apsēdās mazā kafejnīcā, un Oļegs pasūtīja pīrāgus. Ēdot viņš pastāstīja, ka mākslas centrs atrodas vecajā cietoksnī, kas tika uzcelts deviņpadsmitajā gadsimtā. Pīrāgi bija tik garšīgi, ka viņi gandrīz aizmirsa par laiku.',
        translation: 'Eles se sentaram num cafezinho, e o Oļegs pediu pīrāgi (pãezinhos recheados). Enquanto comiam, ele contou que o centro de arte fica na velha fortaleza, que foi construída no século XIX. Os pīrāgi estavam tão gostosos que eles quase se esqueceram da hora.',
        choices: [
          { text: 'Linu paskatījās pulkstenī un steidzināja Oļegu.', translation: 'O Linu olhou o relógio e apressou o Oļegs.', next: 'cietoksnis' },
          {
            text: 'Linu jautāja, kāpēc cietoksnis tika nojaukts.',
            translation: 'O Linu perguntou por que a fortaleza foi demolida.',
            wrong: 'O Oļegs disse que a fortaleza «tika uzcelta» — FOI CONSTRUÍDA no século XIX. Ela não foi demolida: o centro de arte funciona justamente dentro dela.',
          },
        ],
      },
      cietoksnis: {
        emoji: '🧱',
        text: 'Cietoksnis bija milzīgs, ar biezām ķieģeļu sienām un plašiem pagalmiem. Mākslas centrs tika atvērts 2013. gadā bijušajā arsenāla ēkā. Pie ieejas stāvošā darbiniece teica, ka Rotko oriģināldarbi ir izstādīti atsevišķā, īpaši apsargātā zālē.',
        translation: 'A fortaleza era enorme, com grossas paredes de tijolo e pátios amplos. O centro de arte foi aberto em 2013, no antigo prédio do arsenal. A funcionária que estava na entrada disse que as obras originais de Rothko ficam expostas numa sala à parte, especialmente vigiada.',
        choices: [
          { text: 'Linu devās uzreiz uz oriģināldarbu zāli.', translation: 'O Linu foi direto para a sala das obras originais.', next: 'zale' },
          { text: 'Linu vispirms apskatīja citas izstādes.', translation: 'O Linu viu primeiro as outras exposições.', next: 'izstades' },
        ],
      },
      izstades: {
        emoji: '🖼️',
        text: 'Citās zālēs bija izstādīti mūsdienu mākslinieku darbi un fotogrāfijas no vecās Daugavpils. Linu tik ilgi aplūkoja katru bildi, ka pēkšņi atskanēja paziņojums: muzejs tiks slēgts pēc desmit minūtēm.',
        translation: 'Nas outras salas estavam expostas obras de artistas contemporâneos e fotografias da Daugavpils antiga. O Linu olhou cada imagem por tanto tempo que, de repente, soou um aviso: o museu seria fechado dali a dez minutos.',
        choices: [{ text: 'Linu skrēja uz Rotko zāli.', translation: 'O Linu correu para a sala de Rothko.', next: 'steiga' }],
      },
      steiga: {
        emoji: '⏰',
        text: 'Linu ieskrēja Rotko zālē, taču apsargs jau stāvēja pie durvīm. Viņš paspēja apskatīt tikai vienu gleznu, un tad gaisma tika izslēgta. Oļegs viņu mierināja: «Nekas, rīt atnāksim vēlreiz, un tu sāksi ar Rotko.»',
        translation: 'O Linu entrou correndo na sala de Rothko, mas o segurança já estava na porta. Ele só conseguiu ver um quadro, e então a luz foi apagada. O Oļegs o consolou: «Não tem problema, amanhã a gente volta, e você começa pelo Rothko.»',
        ending: { tone: 'neutro', title: 'Um quadro só', message: 'Faltou tempo para o principal. Amanhã, o Linu começa pela sala certa.' },
      },
      zale: {
        emoji: '🟧',
        text: 'Zālē bija puskrēsla, un pie sienām karājās lielas gleznas ar mīkstiem, it kā peldošiem krāsu laukumiem. Linu apsēdās uz soliņa pretī sarkanai gleznai un ilgi skatījās. Viņam šķita, ka krāsas, lēnām kustēdamās, runā ar viņu bez vārdiem.',
        translation: 'Na sala havia uma meia-luz, e nas paredes estavam penduradas telas grandes com campos de cor suaves, como que flutuando. O Linu se sentou num banco diante de um quadro vermelho e ficou olhando por muito tempo. Tinha a impressão de que as cores, movendo-se devagar, falavam com ele sem palavras.',
        choices: [
          { text: 'Linu pajautāja Oļegam, ko viņš redz gleznā.', translation: 'O Linu perguntou ao Oļegs o que ele via no quadro.', next: 'saruna' },
          {
            text: 'Linu teica, ka gleznās ir precīzi uzzīmēti Daugavpils nami.',
            translation: 'O Linu disse que nos quadros estavam desenhadas com precisão as casas de Daugavpils.',
            wrong: 'As telas mostram «krāsu laukumi», campos de cor suaves, «peldoši» (que parecem flutuar), e não casas. Rothko era um pintor abstrato.',
          },
        ],
      },
      saruna: {
        emoji: '🌅',
        text: 'Oļegs brīdi padomāja un teica, ka redz Daugavu rudens vakarā. Linu atzinās, ka viņš redz saulrietu virs Brazīlijas jūras. Darbiniece, kas bija dzirdējusi viņu sarunu, pasmaidīja: «Tieši tā — katrs šeit ierauga kaut ko savu.»',
        translation: 'O Oļegs pensou um instante e disse que via o rio Daugava numa tarde de outono. O Linu confessou que via um pôr do sol sobre o mar do Brasil. A funcionária, que tinha ouvido a conversa, sorriu: «É isso mesmo: aqui cada um enxerga algo seu.»',
        ending: { tone: 'bom', title: 'Cada um vê o seu', message: 'Diante das telas de Rothko, na cidade onde ele nasceu, o Linu e o Oļegs descobriram que a cor também é uma língua.' },
      },
    },
  },
  // ───────────────────────── B1.4 ─────────────────────────
  {
    id: 'lv-h22',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Zemāks par Cukurgalvu',
    emoji: '⛰️',
    summary: 'O Linu se prepara para escalar «a montanha mais alta da Letônia» e descobre que o Gaiziņkalns é bem mais baixo que o Pão de Açúcar, mas nem por isso menos bonito.',
    cultural_context:
      'O Gaiziņkalns, na região montanhosa da Vidzeme, perto de Madona, é o ponto mais alto da Letônia, com cerca de 312 metros acima do nível do mar — mais baixo que o Pão de Açúcar, no Rio de Janeiro, que tem 396 metros. A Letônia é um país quase todo plano, e no inverno o Gaiziņkalns tem pistas de esqui.',
    start: 'start',
    glossary: [
      ['augstākais', 'o mais alto'],
      ['augstāks par', 'mais alto que'],
      ['virsotne', 'cume'],
      ['pakāje', 'sopé, pé do morro'],
      ['līdzens', 'plano'],
      ['kāpiens', 'subida'],
      ['vieglāk', 'mais fácil'],
      ['kurš', 'qual; que (relativo)'],
    ],
    nodes: {
      start: {
        emoji: '🎒',
        text: 'Kristaps lepni paziņoja, ka šodien viņi kāps Latvijas augstākajā kalnā. Linu iedomājās sniegotas virsotnes un stāvas klintis, tāpēc paņēma savu siltāko jaku un lielāko mugursomu. Kristaps paskatījās uz viņu un iesmējās.',
        translation: 'O Kristaps anunciou todo orgulhoso que hoje eles iam subir a montanha mais alta da Letônia. O Linu imaginou picos nevados e penhascos íngremes, por isso pegou a jaqueta mais quente e a mochila maior que tinha. O Kristaps olhou para ele e caiu na risada.',
        choices: [
          { text: 'Linu jautāja, cik augsts ir kalns.', translation: 'O Linu perguntou qual a altura da montanha.', next: 'augstums' },
          { text: 'Linu neko nejautāja un iekāpa mašīnā.', translation: 'O Linu não perguntou nada e entrou no carro.', next: 'cels' },
        ],
      },
      augstums: {
        emoji: '📏',
        text: '«Gaiziņkalns ir 312 metrus augsts», teica Kristaps. Linu brīdi padomāja un teica, ka Cukurgalva Riodežaneiro ir augstāka, gandrīz 400 metru. «Jā, bet mūsējais ir pats augstākais, kāds mums ir!» atbildēja Kristaps.',
        translation: '«O Gaiziņkalns tem 312 metros de altura», disse o Kristaps. O Linu pensou um pouco e disse que o Pão de Açúcar, no Rio de Janeiro, é mais alto, quase 400 metros. «Sim, mas o nosso é o mais alto que a gente tem!», respondeu o Kristaps.',
        choices: [{ text: 'Linu smējās un iekāpa mašīnā.', translation: 'O Linu riu e entrou no carro.', next: 'cels' }],
      },
      cels: {
        emoji: '🚗',
        text: 'Ceļš veda cauri Vidzemes augstienei, kur pakalni kļuva arvien augstāki un meži arvien biezāki. Kristaps stāstīja, ka Latvija lielākoties ir līdzena, tāpēc šis apvidus ir viens no skaistākajiem. Pie kalna pakājes viņi atstāja mašīnu.',
        translation: 'A estrada atravessava o planalto da Vidzeme, onde as colinas ficavam cada vez mais altas e as matas cada vez mais densas. O Kristaps contou que a Letônia é plana na maior parte, por isso essa região é uma das mais bonitas. No sopé do morro, eles deixaram o carro.',
        choices: [
          { text: 'Linu uzlika smago mugursomu.', translation: 'O Linu pôs a mochila pesada nas costas.', next: 'kapiens' },
          { text: 'Linu atstāja lielo somu mašīnā un paņēma tikai ūdeni.', translation: 'O Linu deixou a mochila grande no carro e levou só água.', next: 'viegli' },
        ],
      },
      kapiens: {
        emoji: '🥵',
        text: 'Taka bija daudz īsāka, nekā Linu bija gaidījis, bet smagā mugursoma ar biezāko jaku padarīja kāpienu grūtāku. Pēc divdesmit minūtēm viņš jau bija sasvīdis. Kristaps, kurš nesa tikai ūdens pudeli, gāja pa priekšu un svilpoja.',
        translation: 'A trilha era bem mais curta do que o Linu esperava, mas a mochila pesada, com a jaqueta mais grossa, deixou a subida mais difícil. Depois de vinte minutos, ele já estava suado. O Kristaps, que carregava só uma garrafa de água, ia na frente assobiando.',
        choices: [
          { text: 'Linu sakoda zobus un kāpa tālāk.', translation: 'O Linu cerrou os dentes e continuou subindo.', next: 'virsotne' },
          {
            text: 'Linu sūdzējās, ka kāpj jau vairākas stundas pa garāko taku pasaulē.',
            translation: 'O Linu reclamou que já estava subindo havia várias horas pela trilha mais longa do mundo.',
            wrong: 'Passaram só vinte minutos («pēc divdesmit minūtēm»), e a trilha era «daudz īsāka» — bem MAIS CURTA — do que o Linu esperava. Difícil era só a mochila.',
          },
        ],
      },
      viegli: {
        emoji: '🐧',
        text: 'Bez smagās somas kāpt bija daudz vieglāk. Taka bija īsāka, nekā Linu bija gaidījis, un jau pēc divdesmit minūtēm viņi bija gandrīz augšā. Kristaps teica, ka Linu ir ātrākais pingvīns, kādu viņš jebkad bija redzējis.',
        translation: 'Sem a mochila pesada, subir foi muito mais fácil. A trilha era mais curta do que o Linu esperava, e depois de só vinte minutos eles já estavam quase lá em cima. O Kristaps disse que o Linu era o pinguim mais rápido que ele já tinha visto.',
        choices: [{ text: 'Linu uzskrēja pēdējos metrus.', translation: 'O Linu subiu correndo os últimos metros.', next: 'virsotne' }],
      },
      virsotne: {
        emoji: '🌳',
        text: 'Virsotnē bija neliels klajums, un Kristaps svinīgi paziņoja, ka tagad viņi stāv augstāk par visiem Latvijā. Apkārt, cik tālu vien varēja redzēt, stiepās zaļi meži, zili ezeri un mazas mājas. Kristaps jautāja, kurš skats Linu patīk labāk: šis vai tas, kuru viņš bija redzējis no Cukurgalvas.',
        translation: 'No cume havia uma pequena clareira, e o Kristaps anunciou solenemente que agora eles estavam mais alto que todo mundo na Letônia. Ao redor, até onde a vista alcançava, estendiam-se matas verdes, lagos azuis e casinhas. O Kristaps perguntou de qual vista o Linu gostava mais: desta ou daquela que ele tinha visto do Pão de Açúcar.',
        choices: [
          { text: 'Linu teica, ka šis skats ir mierīgāks un zaļāks.', translation: 'O Linu disse que esta vista é mais tranquila e mais verde.', next: 'final_bom' },
          { text: 'Linu godīgi atzina, ka Cukurgalvas skats ir iespaidīgāks.', translation: 'O Linu admitiu com sinceridade que a vista do Pão de Açúcar é mais impressionante.', next: 'apvainojas' },
          {
            text: 'Linu teica, ka no šejienes jūra un sniegotie kalni izskatās vēl skaistāki.',
            translation: 'O Linu disse que daqui o mar e as montanhas nevadas parecem ainda mais bonitos.',
            wrong: 'Do alto se viam «zaļi meži, zili ezeri un mazas mājas» — matas verdes, lagos azuis e casinhas. Não há mar nem neve à vista: a Letônia é quase toda plana.',
          },
        ],
      },
      apvainojas: {
        emoji: '😤',
        text: 'Kristaps izlikās apvainojies un teica, ka nākamreiz vedīs Linu uz Latvijas zemāko vietu — jūras krastu. Tomēr lejā pie mašīnas viņš jau atkal smējās. Linu apsolīja, ka nākamreiz Latvijas kalnus slavēs skaļāk.',
        translation: 'O Kristaps fingiu ficar ofendido e disse que da próxima vez ia levar o Linu ao ponto mais baixo da Letônia: a beira do mar. Mesmo assim, lá embaixo, junto ao carro, ele já estava rindo de novo. O Linu prometeu que da próxima vez elogiaria os morros da Letônia mais alto.',
        ending: { tone: 'neutro', title: 'Diplomacia de montanha', message: 'Sinceridade demais no topo! O Kristaps perdoou, mas o Linu aprendeu a elogiar o morro dos outros.' },
      },
      final_bom: {
        emoji: '🫖',
        text: 'Kristaps bija tik priecīgs, ka izņēma no somas termosu ar tēju un divus lielākos pīrāgus, kādus Linu jebkad bija redzējis. Viņi sēdēja virsotnē un ēda. Linu nodomāja, ka augstākais kalns ne vienmēr ir labākais — svarīgākais ir, ar ko kopā tu kāp.',
        translation: 'O Kristaps ficou tão contente que tirou da mochila uma garrafa térmica de chá e os dois maiores pīrāgi que o Linu já tinha visto. Eles ficaram sentados no cume, comendo. O Linu pensou que a montanha mais alta nem sempre é a melhor: o mais importante é com quem você sobe.',
        ending: { tone: 'bom', title: 'No topo da Letônia', message: 'Trezentos e doze metros, chá quente e um amigo: o Linu conquistou o cume mais alto do país.' },
      },
    },
  },
  {
    id: 'lv-h23',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Vārdi smilšakmens sienās',
    emoji: '🍂',
    summary: 'No outono do vale do Gauja, o Linu visita a gruta de Gūtmanis, ouve a lenda da Rosa de Turaida e sente vontade de deixar o próprio nome na parede de arenito.',
    cultural_context:
      'A gruta de Gūtmanis (Gūtmaņala), no vale do Gauja, em Sigulda, é considerada a maior gruta dos países bálticos; suas paredes de arenito vermelho estão cobertas de inscrições, algumas de séculos atrás. Ela está ligada à lenda da Rosa de Turaida, a jovem Maija, cujo túmulo fica junto à igreja de Turaida, perto do castelo de tijolos vermelhos fundado no século XIII.',
    start: 'start',
    glossary: [
      ['krāsaināks', 'mais colorido'],
      ['lielākā ala', 'a maior gruta'],
      ['smilšakmens', 'arenito'],
      ['iegriezt', 'entalhar, gravar'],
      ['skaistākā', 'a mais bonita'],
      ['kuru sauca', 'a quem chamavam'],
      ['teika', 'lenda'],
      ['tornis', 'torre'],
    ],
    nodes: {
      start: {
        emoji: '🍁',
        text: 'Rudenī Gaujas ieleja ir krāsaināka nekā jebkurā citā gadalaikā, un Linu to redzēja pats: koki bija dzelteni, sarkani un oranži. Gide Liene aizveda viņu uz Gūtmaņalu, kuru uzskata par lielāko alu Baltijā. Alas ieeja bija augstāka par divstāvu māju.',
        translation: 'No outono, o vale do Gauja fica mais colorido do que em qualquer outra estação, e o Linu viu isso com os próprios olhos: as árvores estavam amarelas, vermelhas e alaranjadas. A guia Liene o levou à gruta de Gūtmanis, considerada a maior gruta do Báltico. A entrada da gruta era mais alta que um sobrado.',
        choices: [
          { text: 'Linu piegāja pie alas sienām.', translation: 'O Linu se aproximou das paredes da gruta.', next: 'sienas' },
          { text: 'Linu jautāja, kāpēc alu sauc par Gūtmaņalu.', translation: 'O Linu perguntou por que a gruta se chama Gūtmaņala.', next: 'nosaukums' },
        ],
      },
      nosaukums: {
        emoji: '💧',
        text: 'Liene stāstīja teiku par dziednieku, kurš ar alas avota ūdeni dziedināja slimos. Vārds «Gūtmanis» nāk no vācu valodas un nozīmē «labais cilvēks». Linu nodzēra malku no avota un teica, ka jūtas vēl veselāks nekā iepriekš.',
        translation: 'A Liene contou a lenda de um curandeiro que curava os doentes com a água da fonte da gruta. O nome «Gūtmanis» vem do alemão e quer dizer «o homem bom». O Linu bebeu um gole da fonte e disse que se sentia ainda mais saudável do que antes.',
        choices: [{ text: 'Linu piegāja pie sienām.', translation: 'O Linu se aproximou das paredes.', next: 'sienas' }],
      },
      sienas: {
        emoji: '✍️',
        text: 'Sienas bija pilnas ar iegrieztiem vārdiem, iniciāļiem un gadskaitļiem. Daži uzraksti bija tik veci, ka burti bija gandrīz izdzisuši. Liene parādīja uz sienu pie ieejas un teica, ka šī ala ir saistīta ar skumjāko Siguldas leģendu.',
        translation: 'As paredes estavam cheias de nomes, iniciais e datas entalhados. Algumas inscrições eram tão antigas que as letras tinham quase sumido. A Liene apontou para a parede junto à entrada e disse que aquela gruta está ligada à lenda mais triste de Sigulda.',
        choices: [{ text: 'Linu palūdza izstāstīt leģendu.', translation: 'O Linu pediu que ela contasse a lenda.', next: 'roze' }],
      },
      roze: {
        emoji: '🌹',
        text: 'Leģenda stāsta par Maiju, meiteni, kuru sauca par Turaidas Rozi, jo viņa bija skaistākā meitene visā apkārtnē. Viņa mīlēja dārznieku Viktoru, bet kāds svešs karavīrs gribēja viņu piespiest kļūt par savu sievu. Maija izvēlējās drīzāk mirt nekā padoties, un viņa tika apglabāta pie Turaidas baznīcas.',
        translation: 'A lenda fala de Maija, uma moça a quem chamavam de Rosa de Turaida, porque era a moça mais bonita de toda a região. Ela amava o jardineiro Viktors, mas um soldado estrangeiro quis obrigá-la a se tornar sua esposa. Maija preferiu morrer a se entregar, e foi enterrada junto à igreja de Turaida.',
        choices: [
          { text: 'Linu ilgi klusēja un tad izņēma no kabatas mazu nazi.', translation: 'O Linu ficou um bom tempo calado e depois tirou do bolso um canivete.', next: 'nazis' },
          { text: 'Linu ierosināja aiziet līdz Turaidas pilij.', translation: 'O Linu sugeriu ir até o castelo de Turaida.', next: 'pils' },
          {
            text: 'Linu brīnījās, kāpēc neglītāko meiteni sauca par Rozi.',
            translation: 'O Linu estranhou que chamassem de Rosa a moça mais feia.',
            wrong: 'É o contrário: Maija era «skaistākā meitene» — a moça MAIS BONITA da região, e por isso a chamavam de Rosa. O superlativo definido feminino termina em -ākā.',
          },
        ],
      },
      nazis: {
        emoji: '🔪',
        text: 'Linu gribēja iegriezt sienā arī savu vārdu, blakus vecākajiem uzrakstiem. Liene viņu ātri apturēja: «Tagad tas ir aizliegts! Vecie uzraksti ir vēsture, bet jaunie tikai bojā smilšakmeni, kas ir ļoti mīksts.»',
        translation: 'O Linu quis gravar o próprio nome na parede também, ao lado das inscrições mais antigas. A Liene o impediu rapidinho: «Hoje isso é proibido! As inscrições velhas são história, mas as novas só estragam o arenito, que é muito mole.»',
        choices: [
          { text: 'Linu nokaunējies nolika nazi atpakaļ kabatā.', translation: 'O Linu, envergonhado, guardou o canivete de volta no bolso.', next: 'pils' },
          {
            text: 'Linu tomēr iegrieza vārdu, jo Liene teica, ka jaunie uzraksti alu padara skaistāku.',
            translation: 'O Linu gravou o nome mesmo assim, porque a Liene disse que as inscrições novas deixam a gruta mais bonita.',
            wrong: 'A Liene disse que as inscrições novas «tikai bojā smilšakmeni» — só estragam o arenito, que é muito mole. E hoje isso é «aizliegts», proibido.',
          },
        ],
      },
      pils: {
        emoji: '🏰',
        text: 'Turaidas pils sarkanie ķieģeļu mūri bija redzami jau no tālienes. Liene ieteica uzkāpt galvenajā tornī, no kura paveras skaistākais skats uz Gaujas ieleju. Tornis bija augsts, un kāpnes bija šaurākas par visām, pa kurām Linu jebkad bija kāpis.',
        translation: 'As muralhas de tijolo vermelho do castelo de Turaida já eram visíveis de longe. A Liene sugeriu subir na torre principal, de onde se abre a vista mais bonita do vale do Gauja. A torre era alta, e a escada era mais estreita do que qualquer outra que o Linu já tinha subido.',
        choices: [
          { text: 'Linu elsodams kāpa augšā.', translation: 'O Linu subiu, ofegante.', next: 'final_bom' },
          { text: 'Linu palika lejā un nopirka suvenīru.', translation: 'O Linu ficou embaixo e comprou uma lembrancinha.', next: 'suvenirs' },
        ],
      },
      suvenirs: {
        emoji: '🎁',
        text: 'Linu nopirka mazu koka rozīti ar uzrakstu «Turaida» un gaidīja lejā. Kad Liene nokāpa, viņa stāstīja, ka no torņa bija redzams skaistākais rudens, kādu viņa atceras. Linu paskatījās uz augsto torni un mazliet nožēloja, ka bija palicis lejā.',
        translation: 'O Linu comprou uma rosinha de madeira escrita «Turaida» e ficou esperando embaixo. Quando a Liene desceu, contou que da torre dava para ver o outono mais bonito de que ela se lembrava. O Linu olhou para a torre alta e se arrependeu um pouco de ter ficado embaixo.',
        ending: { tone: 'neutro', title: 'Rosa de madeira', message: 'Uma lembrancinha na mão, mas a vista mais bonita ficou lá no alto. Fica para o próximo outono.' },
      },
      final_bom: {
        emoji: '🌄',
        text: 'Torņa augšā vējš bija vēss, bet skats bija labāks par visām pastkartēm: sarkanā un zeltainā ieleja un lejā lēnām tekošā Gauja. Linu nodomāja, ka šo skatu atcerēsies ilgāk nekā jebkuru vārdu, kas iegriezts akmenī. Liene pasmaidīja, it kā būtu dzirdējusi viņa domas.',
        translation: 'No alto da torre, o vento era fresco, mas a vista era melhor que todos os cartões-postais: o vale vermelho e dourado e, lá embaixo, o Gauja correndo devagar. O Linu pensou que ia se lembrar dessa vista por mais tempo do que de qualquer nome gravado na pedra. A Liene sorriu, como se tivesse ouvido os pensamentos dele.',
        ending: { tone: 'bom', title: 'Gravado na memória', message: 'Sem estragar o arenito, o Linu levou do vale do Gauja a lembrança mais bonita de todas.' },
      },
    },
  },
  {
    id: 'lv-h24',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Sejas uz fasādēm',
    emoji: '🏛️',
    summary: 'Num concurso de fotografia, o Linu e uma estudante de arquitetura procuram na rua Alberta a fachada art nouveau mais bonita de Riga.',
    cultural_context:
      'Riga tem uma das maiores concentrações de prédios art nouveau (jūgendstils) do mundo, quase todos do começo do século XX, e seu centro histórico é Patrimônio Mundial da UNESCO. Na rua Alberta ficam vários prédios projetados por Mikhail Eisenstein, pai do cineasta Serguei Eisenstein, e o Museu Art Nouveau de Riga, no apartamento onde morou o arquiteto Konstantīns Pēkšēns, famoso por sua escada em espiral.',
    start: 'start',
    glossary: [
      ['jūgendstils', 'art nouveau'],
      ['skaistākā fasāde', 'a fachada mais bonita'],
      ['visdažādākais', 'o mais variado'],
      ['krāšņākais', 'o mais suntuoso'],
      ['kura dēls', 'cujo filho'],
      ['mazāk uzkrītošs', 'menos chamativo'],
      ['pūce', 'coruja'],
      ['oriģinālākā', 'a mais original'],
    ],
    nodes: {
      start: {
        emoji: '📸',
        text: 'Rīgas foto konkursa uzdevums bija vienkāršs: nofotografēt skaistāko jūgendstila fasādi. Linu draudzene Marta, kura studēja arhitektūru, teica, ka labākā vieta tam ir Alberta iela. «Tur ir vairāk jūgendstila namu nekā jebkurā citā ielā, kuru es zinu», viņa teica.',
        translation: 'A tarefa do concurso de fotografia de Riga era simples: fotografar a fachada art nouveau mais bonita. A amiga do Linu, Marta, que estudava arquitetura, disse que o melhor lugar para isso é a rua Alberta. «Lá tem mais prédios art nouveau do que em qualquer outra rua que eu conheço», disse ela.',
        choices: [
          { text: 'Linu devās uz Alberta ielu kopā ar Martu.', translation: 'O Linu foi com a Marta para a rua Alberta.', next: 'iela' },
          { text: 'Linu gribēja vispirms apskatīt Vecrīgu.', translation: 'O Linu quis ver primeiro a Cidade Velha.', next: 'vecriga' },
        ],
      },
      vecriga: {
        emoji: '🧱',
        text: 'Vecrīgā bija šauras, bruģētas ielas un veci nami ar sarkaniem jumtiem, bet jūgendstila ēku tur bija mazāk. Marta paskaidroja, ka jūgendstils Rīgā uzplauka divdesmitā gadsimta sākumā, kad pilsēta strauji auga ārpus vecajiem mūriem. «Mums jāiet uz jaunākajiem kvartāliem», viņa teica.',
        translation: 'Na Cidade Velha havia ruas estreitas de paralelepípedo e casas antigas de telhado vermelho, mas prédios art nouveau ali eram poucos. A Marta explicou que o art nouveau floresceu em Riga no começo do século XX, quando a cidade crescia depressa para fora das antigas muralhas. «Temos de ir para os bairros mais novos», disse ela.',
        choices: [
          { text: 'Linu sekoja Martai uz Alberta ielu.', translation: 'O Linu seguiu a Marta até a rua Alberta.', next: 'iela' },
          {
            text: 'Linu palika Vecrīgā, jo Marta teica, ka tur ir visvairāk jūgendstila ēku.',
            translation: 'O Linu ficou na Cidade Velha, porque a Marta disse que lá há o maior número de prédios art nouveau.',
            wrong: 'A Marta disse o contrário: na Cidade Velha há MENOS («mazāk») prédios art nouveau. O estilo floresceu nos bairros mais novos, fora das antigas muralhas.',
          },
        ],
      },
      iela: {
        emoji: '🦁',
        text: 'Alberta ielā Linu pacēla galvu un aizmirsa aizvērt muti. No fasādēm uz viņu skatījās akmens sejas, lauvas un sievietes ar gariem matiem, un logi bija visdažādākajās formās. Marta stāstīja, ka daudzas no šīm ēkām projektēja arhitekts Mihails Eizenšteins, kura dēls vēlāk kļuva par slavenu kinorežisoru.',
        translation: 'Na rua Alberta, o Linu levantou a cabeça e esqueceu de fechar a boca. Das fachadas olhavam para ele rostos de pedra, leões e mulheres de cabelos compridos, e as janelas tinham as formas mais variadas. A Marta contou que muitos desses prédios foram projetados pelo arquiteto Mikhail Eisenstein, cujo filho depois se tornou um cineasta famoso.',
        choices: [
          { text: 'Linu sāka fotografēt spilgtāko, zilo namu.', translation: 'O Linu começou a fotografar o prédio mais vistoso, o azul.', next: 'zilais' },
          { text: 'Linu ieraudzīja jūgendstila muzeja zīmi.', translation: 'O Linu viu a placa do museu art nouveau.', next: 'muzejs' },
        ],
      },
      muzejs: {
        emoji: '🌀',
        text: 'Muzejs atradās dzīvoklī, kurā kādreiz bija dzīvojis arhitekts Konstantīns Pēkšēns. Tur bija saglabātas vecās mēbeles, krāsnis un pat virtuve, bet spirālveida kāpnes bija visskaistākās, kādas Linu jebkad bija redzējis. Pēc muzeja viņš bija vēl apņēmīgāks atrast savu fasādi.',
        translation: 'O museu ficava no apartamento em que antigamente tinha morado o arquiteto Konstantīns Pēkšēns. Ali estavam conservados os móveis antigos, os fogões a lenha e até a cozinha, mas a escada em espiral era a mais bonita que o Linu já tinha visto. Depois do museu, ele estava ainda mais decidido a achar a sua fachada.',
        choices: [{ text: 'Linu pajautāja Martai padomu.', translation: 'O Linu pediu um conselho à Marta.', next: 'marta' }],
      },
      zilais: {
        emoji: '💙',
        text: 'Zilais nams bija krāšņākais visā ielā: ar maskām, ziedu rotājumiem un statujām jumta malā. Linu uzņēma divdesmit bildes, bet katrā no tām kaut kas trūka — nams bija pārāk augsts, bet iela pārāk šaura. Marta ieteica paskatīties uz kādu mazāk uzkrītošu ēku.',
        translation: 'O prédio azul era o mais suntuoso da rua: com máscaras, ornamentos de flores e estátuas na beira do telhado. O Linu tirou vinte fotos, mas em cada uma faltava alguma coisa: o prédio era alto demais, e a rua, estreita demais. A Marta sugeriu olhar para algum prédio menos chamativo.',
        choices: [
          { text: 'Linu paklausīja Martai.', translation: 'O Linu seguiu o conselho da Marta.', next: 'marta' },
          { text: 'Linu nolēma iesūtīt labāko no divdesmit bildēm.', translation: 'O Linu decidiu mandar a melhor das vinte fotos.', next: 'iesuta' },
        ],
      },
      marta: {
        emoji: '🦉',
        text: 'Marta aizveda viņu pie pelēka nama, kuru lielākā daļa tūristu pat nepamanīja. Virs durvīm sēdēja maza akmens pūce, kuru rīta saule apspīdēja tieši no sāniem. «Visskaistākās detaļas ir tās, kuras neredz uzreiz», teica Marta.',
        translation: 'A Marta o levou até um prédio cinza que a maioria dos turistas nem notava. Acima da porta havia uma corujinha de pedra, que o sol da manhã iluminava bem de lado. «Os detalhes mais bonitos são os que a gente não vê de cara», disse a Marta.',
        choices: [
          { text: 'Linu nogaidīja labāko gaismu un nofotografēja pūci.', translation: 'O Linu esperou a melhor luz e fotografou a coruja.', next: 'final_bom' },
          {
            text: 'Linu nofotografēja pūci uz zilā nama jumta, kuru redzēja visi tūristi.',
            translation: 'O Linu fotografou a coruja no telhado do prédio azul, que todos os turistas viam.',
            wrong: 'A coruja fica acima da porta de um prédio CINZA, que a maioria dos turistas nem nota («nepamanīja»). O relativo «kuru» se refere ao prédio cinza, não ao azul.',
          },
        ],
      },
      iesuta: {
        emoji: '📬',
        text: 'Linu iesūtīja konkursam bildi ar zilo namu. Pēc nedēļas tika paziņoti rezultāti: viņa bilde neuzvarēja, jo gandrīz visi dalībnieki bija nofotografējuši tieši to pašu ēku. Marta teica, ka ar populārākajām ēkām vienmēr tā notiek.',
        translation: 'O Linu mandou para o concurso a foto do prédio azul. Uma semana depois, os resultados foram anunciados: a foto dele não ganhou, porque quase todos os participantes tinham fotografado exatamente o mesmo prédio. A Marta disse que com os prédios mais populares é sempre assim.',
        ending: { tone: 'neutro', title: 'Mais uma foto azul', message: 'A foto era bonita, mas igual a todas as outras. Às vezes o mais bonito é o menos óbvio.' },
      },
      final_bom: {
        emoji: '🏆',
        text: 'Pēc nedēļas Linu saņēma vēstuli: viņa bilde ar mazo akmens pūci bija ieguvusi pirmo vietu. Žūrija rakstīja, ka tā ir oriģinālākā bilde, kādu viņi bija saņēmuši. Linu uzreiz piezvanīja Martai un uzaicināja viņu uz kafiju pašā jaukākajā kafejnīcā, kādu vien varēja atrast.',
        translation: 'Uma semana depois, o Linu recebeu uma carta: a foto dele com a corujinha de pedra tinha ficado em primeiro lugar. O júri escreveu que era a foto mais original que tinham recebido. O Linu ligou na hora para a Marta e a convidou para um café no lugar mais simpático que conseguisse encontrar.',
        ending: { tone: 'bom', title: 'A coruja premiada', message: 'Olhando além do óbvio, o Linu achou o detalhe mais bonito da rua Alberta e ganhou o concurso.' },
      },
    },
  },
  // ───────────────────────── B2.1 ─────────────────────────
  {
    id: 'lv-h25',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Ja jūra būtu siltāka',
    emoji: '🏖️',
    summary: 'Numa manhã de verão em Jūrmala, o Linu hesita diante do mar a 17 graus, cheio de «se»: se a água estivesse mais quente, se ele morasse ali, se ele tivesse coragem…',
    cultural_context:
      'Jūrmala, a uns 25 km de Riga, é uma cidade-balneário à beira do golfo de Riga, com uma praia longa de areia clara e fina e centenas de casas de veraneio de madeira dos séculos XIX e XX. A rua de pedestres Jomas iela, em Majori, é o coração do balneário. O mar ali é raso por um bom trecho, por causa dos bancos de areia, e pequenos pedaços de âmbar às vezes aparecem na praia.',
    start: 'start',
    glossary: [
      ['ja tu būtu redzējis', 'se você tivesse visto'],
      ['tu sēdētu', 'você estaria sentado'],
      ['ja ūdens būtu siltāks', 'se a água fosse mais quente'],
      ['sekls', 'raso'],
      ['sēklis', 'banco de areia'],
      ['ienirt', 'mergulhar'],
      ['dzintars', 'âmbar'],
      ['nodrebēt', 'estremecer'],
    ],
    nodes: {
      start: {
        emoji: '📞',
        text: 'Sandra piezvanīja Linu septiņos no rīta: «Brauc uz Jūrmalu! Ja tu būtu redzējis, cik šodien jūra ir mierīga, tu jau sēdētu vilcienā.» Linu vēl gulēja gultā un domāja, ka pēc vēl vienas stundas miega viņš būtu daudz priecīgāks. Tomēr viņš piecēlās un aizbrauca uz Majoriem.',
        translation: 'A Sandra ligou para o Linu às sete da manhã: «Vem para Jūrmala! Se você tivesse visto como o mar está calmo hoje, já estaria sentado no trem.» O Linu ainda estava deitado e pensou que, com mais uma hora de sono, estaria muito mais feliz. Mesmo assim, levantou e foi para Majori.',
        choices: [
          { text: 'Linu uzreiz steidzās uz pludmali.', translation: 'O Linu correu direto para a praia.', next: 'pludmale' },
          { text: 'Linu vispirms nopirka kafiju Jomas ielā.', translation: 'O Linu primeiro comprou um café na Jomas iela.', next: 'jomas' },
        ],
      },
      jomas: {
        emoji: '☕',
        text: 'Jomas iela vēl bija tukša, tikai sētnieks slaucīja bruģi. Kafejnīcas īpašnieks, sirms vīrs, stāstīja, ka viņa vecvecāki vasarās šeit izīrēja istabas rīdziniekiem. «Ja šīs koka mājas varētu runāt, tās stāstītu simtiem vasaru stāstu», viņš teica.',
        translation: 'A Jomas iela ainda estava vazia; só um gari varria o calçamento. O dono do café, um senhor grisalho, contou que os avós dele alugavam quartos ali no verão para gente de Riga. «Se estas casas de madeira pudessem falar, contariam centenas de histórias de verão», disse ele.',
        choices: [{ text: 'Linu ar kafiju rokā devās uz jūru.', translation: 'O Linu, de café na mão, foi para o mar.', next: 'pludmale' }],
      },
      pludmale: {
        emoji: '🌊',
        text: 'Pludmale bija plata, ar baltām, smalkām smiltīm, un Sandra jau stāvēja ūdenī līdz ceļiem. «Ūdens ir septiņpadsmit grādu!» viņa sauca. «Ja tu ienāktu, pēc minūtes tu aukstumu vairs nejustu.» Linu pieskārās ūdenim ar kāju un nodrebēja.',
        translation: 'A praia era larga, de areia branca e fina, e a Sandra já estava na água até os joelhos. «A água está a dezessete graus!», gritou ela. «Se você entrasse, depois de um minuto já não sentiria o frio.» O Linu encostou o pé na água e estremeceu.',
        choices: [
          { text: 'Linu teica, ka ienāktu, ja ūdens būtu kaut par pāris grādiem siltāks.', translation: 'O Linu disse que entraria se a água estivesse pelo menos uns dois graus mais quente.', next: 'saruna' },
          { text: 'Linu saņēmās un gāja ūdenī.', translation: 'O Linu tomou coragem e entrou na água.', next: 'udens' },
          {
            text: 'Linu priecājās, ka ūdens ir silts kā vanna.',
            translation: 'O Linu ficou feliz porque a água estava quente como numa banheira.',
            wrong: 'A água estava a 17 graus, e o Linu «nodrebēja», estremeceu, ao tocá-la com o pé. A Sandra só disse que, SE ele entrasse («ja tu ienāktu»), deixaria de sentir o frio.',
          },
        ],
      },
      saruna: {
        emoji: '🤔',
        text: 'Sandra smējās un teica, ka Latvijā neviens nekad nepeldētos, ja visi gaidītu tik ilgi kā Linu. «Ja tu dzīvotu šeit, tu zinātu, ka septiņpadsmit grādi ir laba diena», viņa piebilda. Linu paskatījās uz mierīgo jūru un sāka šaubīties.',
        translation: 'A Sandra riu e disse que na Letônia ninguém jamais nadaria se todo mundo esperasse tanto quanto o Linu. «Se você morasse aqui, saberia que dezessete graus é um dia bom», acrescentou. O Linu olhou para o mar calmo e começou a hesitar.',
        choices: [
          { text: 'Linu teica, ka tad labāk iet uzreiz, kamēr nav pārdomājis.', translation: 'O Linu disse que então era melhor entrar logo, antes de mudar de ideia.', next: 'udens' },
          { text: 'Linu nolēma palikt krastā un celt smilšu pili.', translation: 'O Linu decidiu ficar na areia e construir um castelo.', next: 'pils' },
        ],
      },
      udens: {
        emoji: '🥶',
        text: 'Ūdens bija sekls, un viņiem nācās iet ļoti tālu, līdz tas sniedzās līdz viduklim. Sandra paskaidroja, ka Jūrmalā jūra kļūst dziļa lēnām, jo zem ūdens ir smilšu sēkļi. Kad Linu beidzot ienira, viņš iekliedzās tik skaļi, ka kaijas pacēlās gaisā.',
        translation: 'A água era rasa, e eles tiveram de andar muito até ela chegar na cintura. A Sandra explicou que em Jūrmala o mar vai ficando fundo devagar, porque debaixo da água há bancos de areia. Quando o Linu finalmente mergulhou, deu um grito tão alto que as gaivotas levantaram voo.',
        choices: [
          { text: 'Linu peldēja, līdz vairs nejuta aukstumu.', translation: 'O Linu nadou até não sentir mais frio.', next: 'dzintars' },
          {
            text: 'Linu teica, ka būtu labāk ienirt jau pie krasta, jo tur ir visdziļāk.',
            translation: 'O Linu disse que teria sido melhor mergulhar já na beira, porque lá é mais fundo.',
            wrong: 'Na beira é justamente mais raso: a água era «sekls» (rasa), e eles tiveram de andar muito até ela chegar na cintura, por causa dos bancos de areia.',
          },
        ],
      },
      dzintars: {
        emoji: '🟡',
        text: 'Izkāpjot no ūdens, Linu ieraudzīja smiltīs mazu, dzeltenu akmentiņu. Sandra paskaidroja, ka tas ir dzintars un ka pēc vētrām to var atrast vairāk. «Ja tu nebūtu gājis jūrā, tu to nekad nebūtu atradis», viņa smējās.',
        translation: 'Ao sair da água, o Linu viu na areia uma pedrinha amarela. A Sandra explicou que era âmbar e que depois das tempestades dá para achar mais. «Se você não tivesse entrado no mar, nunca teria achado isso», riu ela.',
        choices: [{ text: 'Linu ielika dzintaru kabatā.', translation: 'O Linu guardou o âmbar no bolso.', next: 'final_bom' }],
      },
      pils: {
        emoji: '🏰',
        text: 'Linu uzcēla lielu smilšu pili ar torņiem un grāvi. Kad Sandra iznāca no ūdens, viņa atzina, ka nekad nebūtu domājusi, ka pingvīns var tik labi celt pilis. Tomēr Linu mazliet nožēloja: ja viņš būtu iegājis jūrā, šodien viņš varētu lepoties.',
        translation: 'O Linu construiu um grande castelo de areia, com torres e fosso. Quando a Sandra saiu da água, admitiu que nunca teria imaginado que um pinguim soubesse construir castelos tão bem. Mesmo assim, o Linu se arrependeu um pouco: se tivesse entrado no mar, hoje poderia se orgulhar.',
        ending: { tone: 'neutro', title: 'Castelo seco', message: 'Um castelo bonito, mas o mergulho ficou para outro dia. Na Letônia, 17 graus é dia bom!' },
      },
      final_bom: {
        emoji: '🍦',
        text: 'Pēc peldes viņi sēdēja uz dvieļa siltajās smiltīs un ēda saldējumu. Linu teica, ka viņš būtu smējies, ja kāds vakar būtu teicis, ka viņš peldēsies septiņpadsmit grādos. «Un tagad?» jautāja Sandra. «Tagad es brauktu atkal rīt», atbildēja Linu.',
        translation: 'Depois do banho, eles ficaram sentados numa toalha na areia quente, tomando sorvete. O Linu disse que teria rido se alguém tivesse dito ontem que ele ia nadar a dezessete graus. «E agora?», perguntou a Sandra. «Agora eu voltaria amanhã de novo», respondeu o Linu.',
        ending: { tone: 'bom', title: 'Dezessete graus', message: 'O Linu venceu o frio do Báltico e ainda levou um pedacinho de âmbar de lembrança.' },
      },
    },
  },
];
