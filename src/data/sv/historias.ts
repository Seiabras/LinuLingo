import type { StorySeed } from '../types';

/** Histórias interativas em sueco: 3 por subnível, cada uma num lugar diferente. */
export const STORIES_SV: StorySeed[] = [
  // ───────────────────────── A1.1 ─────────────────────────
  {
    id: 'sv-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Fika i Gamla stan',
    emoji: '☕',
    summary: 'Em Gamla stan, o centro antigo de Estocolmo, o Linu conhece a Sara num café e descobre a fika.',
    cultural_context:
      'A «fika» é a pausa para o café com algo doce, um hábito diário na Suécia. O pãozinho de canela (kanelbulle) é tão querido que tem até um dia só dele: 4 de outubro, o Kanelbullens dag.',
    start: 'start',
    glossary: [
      ['Hej! / Hej då!', 'Oi! / Tchau!'],
      ['Jag är… / Vem är du?', 'Eu sou… / Quem é você?'],
      ['tack', 'obrigado, por favor'],
      ['en kanelbulle', 'um pãozinho de canela'],
      ['två / tolv / tjugo', 'dois / doze / vinte'],
      ['hungrig', 'com fome'],
      ['mysigt', 'aconchegante, gostoso'],
    ],
    nodes: {
      start: {
        emoji: '🏰',
        text: 'Stockholm, Gamla stan. Linu är hungrig.',
        translation: 'Estocolmo, Gamla stan. O Linu está com fome.',
        choices: [
          { text: 'Linu går in på ett kafé.', translation: 'O Linu entra num café.', next: 'kafe' },
          { text: 'Linu tittar på Stortorget.', translation: 'O Linu olha a praça Stortorget.', next: 'torget' },
        ],
      },
      torget: {
        emoji: '🏠',
        text: 'Stortorget är vackert. Husen är röda och gula.',
        translation: 'A Stortorget é bonita. As casas são vermelhas e amarelas.',
        choices: [{ text: '«Nu: fika!»', translation: '«Agora: fika!»', next: 'kafe' }],
      },
      kafe: {
        emoji: '👩',
        text: '«Hej! Jag heter Sara. Vem är du?»',
        translation: '«Oi! Eu me chamo Sara. Quem é você?»',
        choices: [
          { text: '«Hej! Jag är Linu.»', translation: '«Oi! Eu sou o Linu.»', next: 'kaffe' },
          {
            text: '«Hej då, Sara!»',
            translation: '«Tchau, Sara!»',
            wrong: 'A Sara disse «Hej!» (Oi!) e perguntou «Vem är du?» (Quem é você?). «Hej då» é «tchau»: o Linu ainda nem se apresentou! Responda «Jag är Linu».',
          },
        ],
      },
      kaffe: {
        emoji: '☕',
        text: '«Kaffe? Det är tjugo kronor.»',
        translation: '«Café? São vinte coroas.»',
        choices: [
          { text: '«Här är tjugo kronor.»', translation: '«Aqui estão vinte coroas.»', next: 'bullar' },
          {
            text: '«Här är två kronor.»',
            translation: '«Aqui estão duas coroas.»',
            wrong: 'O café custa «tjugo» (20), não «två» (2). E o «tj» de «tjugo» soa parecido com o «x» de «xícara», só que mais suave.',
          },
        ],
      },
      bullar: {
        emoji: '🥐',
        text: '«Här är tolv kanelbullar. Hur många, Linu?»',
        translation: '«Aqui estão doze pãezinhos de canela. Quantos, Linu?»',
        choices: [
          { text: '«Två, tack! En till dig.»', translation: '«Dois, por favor! Um para você.»', next: 'final_bom' },
          { text: '«Tolv, tack!»', translation: '«Doze, por favor!»', next: 'final_mage' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu och Sara fikar tillsammans. Mysigt!',
        translation: 'O Linu e a Sara fazem fika juntos. Que aconchegante!',
        ending: { tone: 'bom', title: 'A primeira fika', message: 'O Linu dividiu os pãezinhos de canela e ganhou uma amiga em Estocolmo.' },
      },
      final_mage: {
        emoji: '😵',
        text: 'Tolv bullar! Nu är Linu mätt… och trött.',
        translation: 'Doze pãezinhos! Agora o Linu está cheio… e cansado.',
        ending: { tone: 'neutro', title: 'Barriga de canela', message: 'Doze pãezinhos é demais até para um pinguim! Fika é para dividir. Tente de novo!' },
      },
    },
  },
  {
    id: 'sv-h2',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Renar i Kiruna',
    emoji: '🦌',
    summary: 'Na neve de Kiruna, o Linu conhece a Aili e as renas da família dela.',
    cultural_context:
      'Kiruna é a cidade mais ao norte da Suécia, na Lapônia. A região é terra dos sámi, povo indígena do norte da Escandinávia, para quem a criação de renas é uma parte importante da cultura.',
    start: 'start',
    glossary: [
      ['kallt', 'frio'],
      ['snön', 'a neve'],
      ['en ren / renar', 'uma rena / renas'],
      ['sju / sjutton', 'sete / dezessete'],
      ['Titta!', 'Olhe!'],
      ['snäll', 'bonzinho, manso'],
      ['rädd', 'com medo'],
    ],
    nodes: {
      start: {
        emoji: '❄️',
        text: 'Kiruna. Det är kallt: minus tjugo! Linu är glad.',
        translation: 'Kiruna. Está frio: menos vinte! O Linu está feliz.',
        choices: [{ text: 'Linu går ut i snön.', translation: 'O Linu sai na neve.', next: 'aili' }],
      },
      aili: {
        emoji: '👩',
        text: '«Hej! Jag heter Aili. Är du turist?»',
        translation: '«Oi! Eu me chamo Aili. Você é turista?»',
        choices: [
          { text: '«Ja, jag är turist. Jag är Linu.»', translation: '«Sim, sou turista. Eu sou o Linu.»', next: 'renar' },
          {
            text: '«Nej, jag är Aili.»',
            translation: '«Não, eu sou a Aili.»',
            wrong: 'Aili é ELA! Ela perguntou «Är du turist?» (Você é turista?). Responda sobre você: «Ja, jag är turist».',
          },
        ],
      },
      renar: {
        emoji: '🦌',
        text: '«Titta! Där är sju renar.»',
        translation: '«Olhe! Ali estão sete renas.»',
        choices: [
          { text: '«Oj! Sju renar!»', translation: '«Nossa! Sete renas!»', next: 'stjarna' },
          {
            text: '«Oj! Sjutton renar!»',
            translation: '«Nossa! Dezessete renas!»',
            wrong: 'A Aili disse «sju» (7), não «sjutton» (17). E repare no «sj»: um chiado soprado que não existe em português!',
          },
        ],
      },
      stjarna: {
        emoji: '⭐',
        text: '«Det här är Stjärna. Hon är liten och snäll.»',
        translation: '«Esta é a Stjärna (Estrela). Ela é pequena e mansa.»',
        choices: [
          { text: 'Linu klappar Stjärna.', translation: 'O Linu faz carinho na Stjärna.', next: 'final_bom' },
          { text: 'Linu springer. Han är rädd!', translation: 'O Linu corre. Ele está com medo!', next: 'final_radd' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Stjärna är glad. Linu och Aili är vänner nu.',
        translation: 'A Stjärna está feliz. O Linu e a Aili agora são amigos.',
        ending: { tone: 'bom', title: 'Amigo das renas', message: 'O Linu fez carinho numa rena e ganhou uma amiga na Lapônia.' },
      },
      final_radd: {
        emoji: '🐧',
        text: 'Linu ligger i snön. Stjärna tittar. Hon är snäll!',
        translation: 'O Linu está deitado na neve. A Stjärna olha. Ela é mansa!',
        ending: { tone: 'neutro', title: 'Susto à toa', message: 'A Aili disse que a Stjärna é «snäll» (mansa). Não precisava correr! Tente de novo.' },
      },
    },
  },
  {
    id: 'sv-h3',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Väderkvarnen på Öland',
    emoji: '🌬️',
    summary: 'Em Öland, o Linu conhece o Erik, que cuida de um velho moinho de vento.',
    cultural_context:
      'Öland, ilha do mar Báltico, é ligada ao continente, perto de Kalmar, por uma ponte de cerca de 6 km. A ilha é famosa pelos seus velhos moinhos de vento, que ainda se contam às centenas, e pela «ölandskaka», um bolo de batata típico.',
    start: 'start',
    glossary: [
      ['en väderkvarn', 'um moinho de vento'],
      ['lång / gammal', 'comprido / velho'],
      ['trött / pigg', 'cansado / disposto'],
      ['sex / tretton / trettio', 'seis / treze / trinta'],
      ['havet', 'o mar'],
      ['god', 'gostoso (comida)'],
    ],
    nodes: {
      start: {
        emoji: '🌉',
        text: 'Här är Ölandsbron. Den är sex kilometer lång!',
        translation: 'Aqui está a ponte de Öland. Ela tem seis quilômetros!',
        choices: [
          { text: '«Oj! Hej, Öland!»', translation: '«Nossa! Oi, Öland!»', next: 'kvarn' },
          {
            text: '«Oj! Sju kilometer!»',
            translation: '«Nossa! Sete quilômetros!»',
            wrong: 'O texto diz «sex kilometer»: SEIS quilômetros, não sete («sju»). Cuidado: «sex» em sueco é só o número 6!',
          },
        ],
      },
      kvarn: {
        emoji: '🌬️',
        text: 'Här är en väderkvarn. Den är gammal. «Hej! Jag heter Erik.»',
        translation: 'Aqui está um moinho de vento. Ele é velho. «Oi! Eu me chamo Erik.»',
        choices: [{ text: '«Hej, Erik! Jag heter Linu.»', translation: '«Oi, Erik! Eu me chamo Linu.»', next: 'erik' }],
      },
      erik: {
        emoji: '👴',
        text: '«Välkommen, Linu! Är du trött?»',
        translation: '«Bem-vindo, Linu! Você está cansado?»',
        choices: [
          { text: '«Ja, lite. Jag är trött.»', translation: '«Sim, um pouco. Estou cansado.»', next: 'kaka' },
          { text: '«Nej! Jag är pigg!»', translation: '«Não! Estou disposto!»', next: 'upp' },
        ],
      },
      upp: {
        emoji: '🪜',
        text: '«Bra! Här är trappan. Det är tretton steg.»',
        translation: '«Ótimo! Aqui está a escada. São treze degraus.»',
        choices: [
          { text: 'Ett, två, tre… tretton! Linu är uppe.', translation: 'Um, dois, três… treze! O Linu está lá em cima.', next: 'final_utsikt' },
          {
            text: 'Ett, två, tre… trettio! Linu är uppe.',
            translation: 'Um, dois, três… trinta! O Linu está lá em cima.',
            wrong: 'O Erik disse «tretton» (13) degraus, não «trettio» (30). Os números com -ton são de 13 a 19; com -tio são as dezenas.',
          },
        ],
      },
      final_utsikt: {
        emoji: '🌅',
        text: 'Vad vackert! Havet är blått. Öland är fint.',
        translation: 'Que lindo! O mar é azul. Öland é bonita.',
        ending: { tone: 'bom', title: 'Vista do moinho', message: 'O Linu subiu no moinho do Erik e viu Öland lá do alto.' },
      },
      kaka: {
        emoji: '🥞',
        text: '«Här är ölandskaka. Den är god!»',
        translation: '«Aqui está bolo de Öland. É gostoso!»',
        choices: [{ text: '«Tack, Erik!»', translation: '«Obrigado, Erik!»', next: 'final_kaka' }],
      },
      final_kaka: {
        emoji: '😋',
        text: 'Kakan är god. Men kvarnen? Linu är trött…',
        translation: 'O bolo é gostoso. Mas e o moinho? O Linu está cansado…',
        ending: { tone: 'neutro', title: 'Moinho fica para depois', message: 'Bolo delicioso, mas o Linu não subiu no moinho. Tente de novo!' },
      },
    },
  },
  // ───────────────────────── A1.2 ─────────────────────────
  {
    id: 'sv-h4',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Räkor i Göteborg',
    emoji: '🦐',
    summary: 'Em Gotemburgo, o Linu vai ao mercado de peixe que parece uma igreja e prova um sanduíche de camarão.',
    cultural_context:
      'A Feskekörka («igreja do peixe», no jeito de falar de Gotemburgo) é um mercado de peixes e frutos do mar aberto em 1874, com forma de igreja neogótica. O «räkmacka», sanduíche aberto de camarão com ovo e maionese, é um clássico sueco.',
    start: 'start',
    glossary: [
      ['en spårvagn', 'um bonde'],
      ['en räka / räkor / räkorna', 'um camarão / camarões / os camarões'],
      ['det finns', 'há, tem'],
      ['jag gillar', 'eu gosto de'],
      ['färsk', 'fresco'],
      ['en räkmacka', 'um sanduíche aberto de camarão'],
      ['en mås / måsar', 'uma gaivota / gaivotas'],
    ],
    nodes: {
      start: {
        emoji: '🚋',
        text: 'Linu åker spårvagn i Göteborg. Han åker till Feskekörka.',
        translation: 'O Linu anda de bonde em Gotemburgo. Ele vai à Feskekörka.',
        choices: [{ text: 'Linu kliver av vid Feskekörka.', translation: 'O Linu desce na Feskekörka.', next: 'hallen' }],
      },
      hallen: {
        emoji: '🐟',
        text: 'Huset ser ut som en kyrka! Men här finns det fisk, räkor och hummer.',
        translation: 'O prédio parece uma igreja! Mas aqui tem peixe, camarão e lagosta.',
        choices: [
          { text: '«Jag gillar räkor!»', translation: '«Eu gosto de camarão!»', next: 'kvinnan' },
          {
            text: '«Var är prästen?»',
            translation: '«Onde está o padre?»',
            wrong: 'A Feskekörka só PARECE uma igreja («ser ut som en kyrka»). O texto diz «här finns det fisk, räkor och hummer»: é um mercado de peixe!',
          },
        ],
      },
      kvinnan: {
        emoji: '👩‍🍳',
        text: 'En kvinna säljer räkor. «Hej! Räkorna är färska idag.»',
        translation: 'Uma mulher vende camarões. «Oi! Os camarões estão frescos hoje.»',
        choices: [
          { text: '«En räkmacka, tack!»', translation: '«Um sanduíche de camarão, por favor!»', next: 'macka' },
          { text: '«Ett kilo räkor, tack!»', translation: '«Um quilo de camarão, por favor!»', next: 'final_kilo' },
          {
            text: '«Är räkorna gamla?»',
            translation: '«Os camarões são velhos?»',
            wrong: 'Ela disse «Räkorna är färska»: os camarões estão FRESCOS. «Färsk» parece o inglês «fresh», e quer dizer o mesmo.',
          },
        ],
      },
      macka: {
        emoji: '🥪',
        text: 'Räkmackan är stor. Det finns bröd, ägg, majonnäs och många räkor.',
        translation: 'O sanduíche de camarão é grande. Tem pão, ovo, maionese e muitos camarões.',
        choices: [
          { text: 'Linu äter mackan vid kanalen.', translation: 'O Linu come o sanduíche perto do canal.', next: 'final_bom' },
          { text: 'Linu ger en räka till en mås.', translation: 'O Linu dá um camarão para uma gaivota.', next: 'final_mas' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Solen skiner över kanalen. Mackan är god och Linu är glad.',
        translation: 'O sol brilha sobre o canal. O sanduíche está gostoso e o Linu está feliz.',
        ending: { tone: 'bom', title: 'Camarão com vista', message: 'O Linu provou um räkmacka de verdade em Gotemburgo.' },
      },
      final_mas: {
        emoji: '🐦',
        text: 'Tio måsar kommer! Alla vill ha räkor. Hjälp!',
        translation: 'Vêm dez gaivotas! Todas querem camarão. Socorro!',
        ending: { tone: 'neutro', title: 'Ataque das gaivotas', message: 'Em cidade de porto, nunca dê comida para as gaivotas! O Linu ficou sem sanduíche.' },
      },
      final_kilo: {
        emoji: '🦐',
        text: 'Ett kilo räkor i en påse! Linu äter och äter. Nu luktar han fisk.',
        translation: 'Um quilo de camarão num saquinho! O Linu come e come. Agora ele está cheirando a peixe.',
        ending: { tone: 'neutro', title: 'Pinguim de peixaria', message: 'Camarão demais e nada de pão. Da próxima vez, peça um räkmacka!' },
      },
    },
  },
  {
    id: 'sv-h5',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Polkagrisar vid Vättern',
    emoji: '🍬',
    summary: 'Em Jönköping, à beira do lago Vättern, o Linu ajuda a avó do Oskar a fazer balas listradas.',
    cultural_context:
      'A «polkagris», bengala de açúcar listrada de vermelho e branco com sabor de hortelã-pimenta, foi criada em 1859 por Amalia Eriksson em Gränna, cidadezinha perto de Jönköping. As duas ficam à beira do Vättern, o segundo maior lago da Suécia.',
    start: 'start',
    glossary: [
      ['mormor / farmor', 'avó materna / avó paterna'],
      ['en polkagris', 'bengala de açúcar listrada'],
      ['sockret', 'o açúcar'],
      ['köket', 'a cozinha'],
      ['sjön', 'o lago'],
      ['Vänta!', 'Espere!'],
      ['jag gillar / jag gillar inte', 'eu gosto / eu não gosto'],
    ],
    nodes: {
      start: {
        emoji: '🌊',
        text: 'Linu bor hos Oskar i Jönköping. Staden ligger vid sjön Vättern.',
        translation: 'O Linu está hospedado na casa do Oskar em Jönköping. A cidade fica à beira do lago Vättern.',
        choices: [{ text: '«Vad gör vi idag, Oskar?»', translation: '«O que a gente faz hoje, Oskar?»', next: 'mormor' }],
      },
      mormor: {
        emoji: '👵',
        text: '«Det här är min mormor. Hon gör polkagrisar idag!»',
        translation: '«Esta é a minha avó. Ela faz polkagrisar hoje!»',
        choices: [
          { text: '«Hej! Trevligt att träffas.»', translation: '«Oi! Prazer em conhecer.»', next: 'koket' },
          {
            text: '«Hej, Oskars mamma!»',
            translation: '«Oi, mãe do Oskar!»',
            wrong: '«Mormor» é «mor + mor», a mãe da mãe: é a AVÓ do Oskar por parte de mãe. A avó por parte de pai é «farmor» (far + mor).',
          },
        ],
      },
      koket: {
        emoji: '🍳',
        text: 'Köket är varmt. Mormor har socker, vatten och lite pepparmynta.',
        translation: 'A cozinha está quente. A avó tem açúcar, água e um pouco de hortelã-pimenta.',
        choices: [
          { text: 'Linu hjälper mormor.', translation: 'O Linu ajuda a avó.', next: 'dra' },
          { text: 'Linu går till sjön med Oskar.', translation: 'O Linu vai ao lago com o Oskar.', next: 'final_sjon' },
        ],
      },
      dra: {
        emoji: '🍭',
        text: 'Linu och mormor drar i sockret. Nu är polkagrisarna långa, röda och vita!',
        translation: 'O Linu e a avó puxam o açúcar. Agora as polkagrisar estão compridas, vermelhas e brancas!',
        choices: [{ text: '«Titta, Oskar! Polkagrisarna är klara.»', translation: '«Olhe, Oskar! As polkagrisar estão prontas.»', next: 'varma' }],
      },
      varma: {
        emoji: '⏳',
        text: 'Mormor säger: «Polkagrisarna är varma. Vänta tio minuter!»',
        translation: 'A avó diz: «As polkagrisar estão quentes. Espere dez minutos!»',
        choices: [
          { text: 'Linu väntar och tittar på sjön.', translation: 'O Linu espera e olha o lago.', next: 'final_bom' },
          {
            text: 'Linu tar en polkagris direkt.',
            translation: 'O Linu pega uma polkagris na hora.',
            wrong: 'A avó disse «Polkagrisarna är varma. Vänta tio minuter!»: as balas estão QUENTES, é preciso esperar dez minutos.',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Nu tar Linu en polkagris. Den smakar pepparmynta. Mmm!',
        translation: 'Agora o Linu pega uma polkagris. Ela tem gosto de hortelã-pimenta. Hum!',
        ending: { tone: 'bom', title: 'Doce feito em casa', message: 'O Linu aprendeu a fazer polkagrisar com a avó do Oskar.' },
      },
      final_sjon: {
        emoji: '🪨',
        text: 'Vid sjön blåser det. Linu och Oskar kastar stenar. Hemma äter mormor polkagrisar…',
        translation: 'No lago está ventando. O Linu e o Oskar jogam pedras. Em casa, a avó come polkagrisar…',
        ending: { tone: 'neutro', title: 'Sem doce', message: 'O lago é bonito, mas o Linu perdeu a aula de polkagrisar. Tente de novo!' },
      },
    },
  },
  {
    id: 'sv-h6',
    level: 'A1.2',
    cefr: 'A1',
    title: 'På cykel i Malmö',
    emoji: '🚲',
    summary: 'O Linu aluga uma bicicleta em Malmö, vê a ponte para a Dinamarca e encara a sauna à beira-mar.',
    cultural_context:
      'Malmö, no sul da Suécia, é ligada a Copenhague pela ponte do Öresund, aberta em 2000, que não tem pista para bicicletas. Na praia de Ribersborg fica um «kallbadhus» de 1898: sauna quente e depois um mergulho no mar gelado.',
    start: 'start',
    glossary: [
      ['en cykel / cykeln', 'uma bicicleta / a bicicleta'],
      ['en cykelväg', 'uma ciclovia'],
      ['bron', 'a ponte'],
      ['det finns ingen…', 'não há nenhum(a)…'],
      ['en bastu', 'uma sauna'],
      ['kallt / varmt', 'frio / quente'],
    ],
    nodes: {
      start: {
        emoji: '🚲',
        text: 'Linu hyr en cykel i Malmö. Staden har många cykelvägar.',
        translation: 'O Linu aluga uma bicicleta em Malmö. A cidade tem muitas ciclovias.',
        choices: [
          { text: 'Linu cyklar till havet.', translation: 'O Linu pedala até o mar.', next: 'bron' },
          { text: 'Linu cyklar till ett högt hus.', translation: 'O Linu pedala até um prédio alto.', next: 'huset' },
        ],
      },
      huset: {
        emoji: '🏙️',
        text: 'Huset heter Turning Torso. Det är vitt och mycket högt!',
        translation: 'O prédio se chama Turning Torso. Ele é branco e muito alto!',
        choices: [{ text: '«Wow! Nu cyklar jag till havet.»', translation: '«Uau! Agora vou pedalar até o mar.»', next: 'bron' }],
      },
      bron: {
        emoji: '🌉',
        text: 'Vid havet finns en lång bro. Den går till Danmark, men det finns ingen cykelväg på bron.',
        translation: 'Perto do mar há uma ponte comprida. Ela vai até a Dinamarca, mas não há ciclovia na ponte.',
        choices: [
          { text: 'Linu tittar på bron och cyklar vidare.', translation: 'O Linu olha a ponte e segue pedalando.', next: 'badhus' },
          {
            text: 'Linu cyklar till Danmark på bron.',
            translation: 'O Linu vai de bicicleta até a Dinamarca pela ponte.',
            wrong: 'O texto diz «det finns ingen cykelväg på bron»: NÃO há ciclovia na ponte. «Det finns ingen…» quer dizer «não há nenhum(a)…».',
          },
        ],
      },
      badhus: {
        emoji: '🧖',
        text: 'Här är ett kallbadhus. Det finns en bastu, och havet är kallt.',
        translation: 'Aqui há uma casa de banhos de mar. Tem uma sauna, e o mar está frio.',
        choices: [
          { text: 'Linu badar i havet. Brrr!', translation: 'O Linu toma banho de mar. Brrr!', next: 'final_bom' },
          { text: 'Linu sitter i bastun.', translation: 'O Linu fica sentado na sauna.', next: 'final_bastu' },
        ],
      },
      final_bom: {
        emoji: '🐧',
        text: 'Vattnet är tolv grader. Linu gillar det! Han är ju en pingvin.',
        translation: 'A água está a doze graus. O Linu gosta! Afinal, ele é um pinguim.',
        ending: { tone: 'bom', title: 'Mergulho de pinguim', message: 'Para o Linu, o mar gelado de Malmö é perfeito!' },
      },
      final_bastu: {
        emoji: '🥵',
        text: 'Bastun är varm: nittio grader! Linu svettas. Pingviner gillar inte värme…',
        translation: 'A sauna está quente: noventa graus! O Linu sua. Pinguins não gostam de calor…',
        ending: { tone: 'neutro', title: 'Pinguim cozido', message: 'Sauna sem mergulho? Para um pinguim, isso é demais! Tente de novo.' },
      },
    },
  },
  // ───────────────────────── A2.1 ─────────────────────────
  {
    id: 'sv-h7',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Nyckelharpan i Uppsala',
    emoji: '🎻',
    summary: 'Numa praça de Uppsala, o Linu ouve um instrumento estranho, cheio de teclas de madeira, e acaba numa noite de música folclórica.',
    cultural_context:
      'A nyckelharpa é um instrumento tradicional sueco tocado com arco, com teclas de madeira que apertam as cordas. Ela é muito ligada à região de Uppland, onde fica Uppsala, e a «polska» é uma das danças mais típicas da música folclórica sueca.',
    start: 'start',
    glossary: [
      ['en nyckelharpa', 'rabeca de teclas sueca'],
      ['en tangent / tangenterna', 'uma tecla / as teclas'],
      ['på kvällen / ikväll', 'à noite / hoje à noite'],
      ['en gård', 'um pátio, uma chácara'],
      ['vid ån', 'perto do rio (ån = o riacho, o rio pequeno)'],
      ['stråken', 'o arco (do instrumento)'],
      ['falskt', 'desafinado (falso amigo: não é «falso»!)'],
    ],
    nodes: {
      start: {
        emoji: '🎓',
        text: 'Idag är Linu i Uppsala. På torget spelar en gammal man ett konstigt instrument. Det har många tangenter av trä.',
        translation: 'Hoje o Linu está em Uppsala. Na praça, um senhor toca um instrumento estranho. Ele tem muitas teclas de madeira.',
        choices: [
          { text: '«Ursäkta, vad heter instrumentet?»', translation: '«Com licença, como se chama o instrumento?»', next: 'gunnar' },
          { text: 'Linu går vidare till domkyrkan.', translation: 'O Linu segue até a catedral.', next: 'domkyrkan' },
        ],
      },
      domkyrkan: {
        emoji: '⛪',
        text: 'Domkyrkan är stor och hög. Inne i kyrkan är det tyst och kallt.',
        translation: 'A catedral é grande e alta. Dentro da igreja está silencioso e frio.',
        choices: [
          { text: 'Linu går tillbaka till torget.', translation: 'O Linu volta para a praça.', next: 'gunnar' },
          { text: 'Linu vilar länge på en bänk.', translation: 'O Linu descansa um tempão num banco.', next: 'final_tyst' },
        ],
      },
      final_tyst: {
        emoji: '🕰️',
        text: 'När Linu kommer ut är torget tomt. Mannen med instrumentet är borta.',
        translation: 'Quando o Linu sai, a praça está vazia. O homem do instrumento foi embora.',
        ending: { tone: 'neutro', title: 'A música foi embora', message: 'A catedral é linda, mas o Linu perdeu o músico. Tente de novo!' },
      },
      gunnar: {
        emoji: '👴',
        text: '«Det är en nyckelharpa», säger mannen. «Jag heter Gunnar. På kvällen spelar jag i en folkmusikgrupp.»',
        translation: '«É uma nyckelharpa», diz o homem. «Eu me chamo Gunnar. À noite eu toco num grupo de música folclórica.»',
        choices: [
          { text: '«Spännande! Var spelar ni?»', translation: '«Que legal! Onde vocês tocam?»', next: 'ikvall' },
          {
            text: '«Spelar ni på morgonen?»',
            translation: '«Vocês tocam de manhã?»',
            wrong: 'O Gunnar disse «På kvällen spelar jag…»: ele toca À NOITE. Repare na ordem V2: a expressão de tempo vem primeiro e o verbo «spelar» fica na 2ª posição, antes do sujeito «jag».',
          },
        ],
      },
      ikvall: {
        emoji: '🕗',
        text: '«Ikväll klockan åtta spelar vi på en gård vid ån. Kom gärna!»',
        translation: '«Hoje à noite, às oito, a gente toca numa chácara perto do rio. Apareça!»',
        choices: [
          { text: '«Tack! Då kommer jag klockan åtta.»', translation: '«Obrigado! Então eu vou às oito.»', next: 'garden' },
          {
            text: '«Tack! Då kommer jag klockan tio.»',
            translation: '«Obrigado! Então eu vou às dez.»',
            wrong: 'O Gunnar disse «klockan åtta»: às OITO, não às dez («tio»).',
          },
        ],
      },
      garden: {
        emoji: '🏡',
        text: 'På kvällen är gården full av folk. Gunnar och tre vänner spelar glad musik. Alla dansar polska!',
        translation: 'À noite a chácara está cheia de gente. O Gunnar e três amigos tocam uma música alegre. Todo mundo dança polska!',
        choices: [
          { text: 'Linu dansar med en flicka i röd kjol.', translation: 'O Linu dança com uma moça de saia vermelha.', next: 'final_dans' },
          { text: '«Gunnar, kan jag prova nyckelharpan?»', translation: '«Gunnar, posso experimentar a nyckelharpa?»', next: 'prova' },
        ],
      },
      final_dans: {
        emoji: '💫',
        text: 'Polskan är snabb. Linu snurrar och snurrar… och ramlar på gräset!',
        translation: 'A polska é rápida. O Linu gira e gira… e cai na grama!',
        ending: { tone: 'neutro', title: 'Tonto de tanto girar', message: 'A polska gira muito! O Linu se divertiu, mas nem chegou a tocar a nyckelharpa.' },
      },
      prova: {
        emoji: '🎶',
        text: 'Gunnar ger Linu nyckelharpan. Den är tung! Linu trycker på tangenterna och drar med stråken.',
        translation: 'O Gunnar entrega a nyckelharpa para o Linu. Ela é pesada! O Linu aperta as teclas e passa o arco.',
        choices: [{ text: 'Linu spelar en enkel melodi.', translation: 'O Linu toca uma melodia simples.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Det låter lite falskt, men alla klappar. «Bra, Linu! Nästa år spelar du med oss!»',
        translation: 'Soa um pouco desafinado, mas todo mundo aplaude. «Muito bem, Linu! No ano que vem você toca com a gente!»',
        ending: { tone: 'bom', title: 'Músico de Uppland', message: 'O Linu tocou nyckelharpa pela primeira vez numa noite de música folclórica.' },
      },
    },
  },
  {
    id: 'sv-h8',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Innanför muren i Visby',
    emoji: '🛡️',
    summary: 'O Linu chega a Visby, em Gotland, bem na semana em que a cidade medieval volta à Idade Média.',
    cultural_context:
      'Visby, na ilha de Gotland, ainda é cercada por uma muralha medieval de cerca de 3,4 km, e a cidade é Patrimônio Mundial da UNESCO desde 1995. Todo mês de agosto acontece ali a Medeltidsveckan, a Semana Medieval, com cavaleiros, mercados e música.',
    start: 'start',
    glossary: [
      ['en mur / muren', 'uma muralha / a muralha'],
      ['ett torn / tornet', 'uma torre / a torre'],
      ['medeltiden', 'a Idade Média'],
      ['varje år i augusti', 'todo ano em agosto'],
      ['bredvid / bakom', 'ao lado de / atrás de'],
      ['en affär', 'uma loja (falso amigo: não é «caso amoroso»!)'],
      ['en riddare', 'um cavaleiro'],
    ],
    nodes: {
      start: {
        emoji: '⛴️',
        text: 'Efter tre timmar på båten kommer Linu till Visby. Runt staden står en lång mur från medeltiden.',
        translation: 'Depois de três horas de barco, o Linu chega a Visby. Em volta da cidade há uma muralha comprida da Idade Média.',
        choices: [
          { text: 'Linu går längs muren.', translation: 'O Linu anda ao longo da muralha.', next: 'muren' },
          { text: 'Linu går in genom en port.', translation: 'O Linu entra por um portão.', next: 'gatan' },
        ],
      },
      muren: {
        emoji: '🧱',
        text: 'Muren är gammal och grå. Den är över tre kilometer lång och har många torn.',
        translation: 'A muralha é velha e cinza. Ela tem mais de três quilômetros e muitas torres.',
        choices: [
          { text: 'Linu klättrar upp i ett torn.', translation: 'O Linu sobe numa torre.', next: 'tornet' },
          { text: 'Linu går in i staden.', translation: 'O Linu entra na cidade.', next: 'gatan' },
        ],
      },
      tornet: {
        emoji: '🗼',
        text: 'Från tornet ser Linu havet, röda tak och gamla kyrkor. Solen går snart ner.',
        translation: 'Da torre o Linu vê o mar, telhados vermelhos e igrejas antigas. O sol vai se pôr logo.',
        choices: [
          { text: 'Linu går ner och in i staden.', translation: 'O Linu desce e entra na cidade.', next: 'gatan' },
          { text: 'Linu stannar i tornet och tittar på solnedgången.', translation: 'O Linu fica na torre e olha o pôr do sol.', next: 'final_sol' },
        ],
      },
      final_sol: {
        emoji: '🌅',
        text: 'Solnedgången är fantastisk. Men när Linu kommer ner är festen slut för idag.',
        translation: 'O pôr do sol é fantástico. Mas quando o Linu desce, a festa já acabou por hoje.',
        ending: { tone: 'neutro', title: 'Só o pôr do sol', message: 'Uma vista linda, mas o Linu perdeu a festa medieval. Tente de novo!' },
      },
      gatan: {
        emoji: '🎭',
        text: 'På gatorna finns det riddare, prinsessor och musikanter. Idag börjar Medeltidsveckan!',
        translation: 'Nas ruas há cavaleiros, princesas e músicos. Hoje começa a Semana Medieval!',
        choices: [{ text: '«Ursäkta, vad är Medeltidsveckan?»', translation: '«Com licença, o que é a Semana Medieval?»', next: 'ebba' }],
      },
      ebba: {
        emoji: '👸',
        text: 'En flicka i en lång, grön klänning svarar: «Jag heter Ebba. Varje år i augusti firar vi medeltiden här i en vecka.»',
        translation: 'Uma moça com um vestido longo e verde responde: «Eu me chamo Ebba. Todo ano, em agosto, a gente comemora a Idade Média aqui durante uma semana.»',
        choices: [
          { text: '«Vad roligt! Var hittar jag gamla kläder?»', translation: '«Que divertido! Onde eu encontro roupas antigas?»', next: 'klader' },
          {
            text: '«Varje dag? Hela året?»',
            translation: '«Todo dia? O ano inteiro?»',
            wrong: 'A Ebba disse «Varje år i augusti… i en vecka»: TODO ANO, em AGOSTO, durante UMA SEMANA — não o ano inteiro.',
          },
        ],
      },
      klader: {
        emoji: '🧥',
        text: '«På torget finns en affär med medeltida kläder. Den ligger bredvid kyrkan.»',
        translation: '«Na praça há uma loja de roupas medievais. Ela fica ao lado da igreja.»',
        choices: [
          { text: 'Linu går till affären bredvid kyrkan.', translation: 'O Linu vai à loja ao lado da igreja.', next: 'final_bom' },
          {
            text: 'Linu letar efter affären bakom kyrkan.',
            translation: 'O Linu procura a loja atrás da igreja.',
            wrong: 'A Ebba disse «bredvid kyrkan»: AO LADO da igreja. «Bakom» quer dizer «atrás de».',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Nu har Linu en brun mantel och en liten hatt. Han ser ut som en riddare! Hela kvällen dansar han på torget.',
        translation: 'Agora o Linu tem um manto marrom e um chapeuzinho. Ele parece um cavaleiro! A noite toda ele dança na praça.',
        ending: { tone: 'bom', title: 'Sir Linu de Visby', message: 'O Linu se vestiu de cavaleiro e entrou na Semana Medieval de Gotland.' },
      },
    },
  },
  {
    id: 'sv-h9',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Norrsken i Abisko',
    emoji: '🌌',
    summary: 'Em Abisko, no extremo norte, o Linu sai numa noite de dezembro para ver a aurora boreal.',
    cultural_context:
      'Abisko, no extremo norte da Suécia, tem um dos parques nacionais mais antigos da Europa, criado em 1909. Como o clima ali é seco, o céu costuma ficar limpo, e a região é um dos melhores lugares do país para ver a aurora boreal.',
    start: 'start',
    glossary: [
      ['norrsken', 'aurora boreal'],
      ['en stuga / stugan', 'uma cabana / a cabana'],
      ['himlen', 'o céu'],
      ['från solen / från månen', 'do sol / da lua'],
      ['mörkt', 'escuro'],
      ['en tjock jacka', 'um casaco grosso'],
      ['en mössa', 'um gorro'],
    ],
    nodes: {
      start: {
        emoji: '🚆',
        text: 'Linu kommer till Abisko med nattåget. Det är december, och ute är det mörkt nästan hela dagen.',
        translation: 'O Linu chega a Abisko no trem noturno. É dezembro, e lá fora fica escuro quase o dia todo.',
        choices: [{ text: 'Linu går till en liten stuga.', translation: 'O Linu vai até uma cabaninha.', next: 'stugan' }],
      },
      stugan: {
        emoji: '🏠',
        text: 'I stugan möter han Johan, en guide. «Ikväll är himlen klar. Kanske ser vi norrsken!»',
        translation: 'Na cabana ele encontra o Johan, um guia. «Hoje à noite o céu está limpo. Talvez a gente veja a aurora boreal!»',
        choices: [
          { text: '«Vad är norrsken egentligen?»', translation: '«O que é a aurora boreal, afinal?»', next: 'forklaring' },
          { text: '«Ikväll? Nej, jag är trött. Jag sover nu.»', translation: '«Hoje à noite? Não, estou cansado. Vou dormir agora.»', next: 'final_sova' },
        ],
      },
      final_sova: {
        emoji: '😴',
        text: 'Linu sover gott i en varm säng. På morgonen berättar Johan om ett fantastiskt norrsken…',
        translation: 'O Linu dorme bem numa cama quentinha. De manhã, o Johan conta de uma aurora fantástica…',
        ending: { tone: 'neutro', title: 'Aurora perdida', message: 'O Linu dormiu na noite mais bonita do ano! Tente de novo.' },
      },
      forklaring: {
        emoji: '🔬',
        text: '«Norrsken är ljus på himlen. Små partiklar från solen träffar luften högt över jorden.»',
        translation: '«A aurora boreal é luz no céu. Partículas pequenas vindas do sol batem no ar, bem alto acima da Terra.»',
        choices: [
          { text: '«Spännande! När går vi ut?»', translation: '«Que interessante! Quando a gente sai?»', next: 'ut' },
          {
            text: '«Så norrsken kommer från månen?»',
            translation: '«Então a aurora vem da lua?»',
            wrong: 'O Johan disse «partiklar från solen»: as partículas vêm do SOL, não da lua («månen»).',
          },
        ],
      },
      ut: {
        emoji: '🥾',
        text: '«Klockan nio går vi ner till sjön. Det är minus tjugofem grader ute, så ta varma kläder!»',
        translation: '«Às nove a gente desce até o lago. Está fazendo menos vinte e cinco graus lá fora, então leve roupa quente!»',
        choices: [
          { text: 'Linu tar en tjock jacka och en mössa.', translation: 'O Linu pega um casaco grosso e um gorro.', next: 'sjon' },
          { text: 'Linu stannar i stugan med en kopp te.', translation: 'O Linu fica na cabana com uma xícara de chá.', next: 'final_te' },
        ],
      },
      final_te: {
        emoji: '🍵',
        text: 'I stugan är det varmt och mysigt. Men fönstret är fullt av is, och Linu ser ingenting.',
        translation: 'Na cabana está quentinho e aconchegante. Mas a janela está coberta de gelo, e o Linu não vê nada.',
        ending: { tone: 'neutro', title: 'Chá sem aurora', message: 'Quentinho, mas sem aurora boreal. Tente de novo!' },
      },
      sjon: {
        emoji: '❄️',
        text: 'Vid sjön är det tyst. Först ser de bara stjärnor. Sedan kommer ett grönt ljus över bergen.',
        translation: 'No lago está silencioso. Primeiro eles só veem estrelas. Depois vem uma luz verde sobre as montanhas.',
        choices: [{ text: '«Titta! Där är det!»', translation: '«Olhe! Lá está ela!»', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🌌',
        text: 'Ett grönt och lila ljus dansar på himlen. Linu säger ingenting. Det är en magisk natt.',
        translation: 'Uma luz verde e lilás dança no céu. O Linu não diz nada. É uma noite mágica.',
        ending: { tone: 'bom', title: 'Luzes do norte', message: 'O Linu viu a aurora boreal dançar sobre as montanhas de Abisko.' },
      },
    },
  },
  // ───────────────────────── A2.2 ─────────────────────────
  {
    id: 'sv-h10',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Den gamla klockan i Lund',
    emoji: '🕰️',
    summary: 'Em Lund, o Linu e a amiga Elin esperam o meio-dia para ver o relógio astronômico da catedral tocar.',
    cultural_context:
      'A catedral de Lund, consagrada em 1145, guarda o Horologium mirabile Lundense, um relógio astronômico do século XV. Em certos horários ele toca «In dulci jubilo» no órgão, enquanto dois cavaleiros se enfrentam e os três reis magos desfilam.',
    start: 'start',
    glossary: [
      ['åkte / har åkt', 'foi (de veículo) / tem ido, já foi'],
      ['den gamla domkyrkan', 'a velha catedral'],
      ['klockan', 'o relógio; também «a hora»'],
      ['kvart i tolv / kvart över tolv', 'quinze para o meio-dia / meio-dia e quinze'],
      ['sin mössa / hans mössa', 'o próprio gorro / o gorro dele'],
      ['en riddare / en kung', 'um cavaleiro / um rei'],
      ['aldrig', 'nunca'],
    ],
    nodes: {
      start: {
        emoji: '🚆',
        text: 'Förra helgen åkte Linu till Lund. Hans vän Elin studerar där. På lördagen tog hon honom till den gamla domkyrkan.',
        translation: 'No fim de semana passado, o Linu foi a Lund. A amiga dele, a Elin, estuda lá. No sábado ela o levou à velha catedral.',
        choices: [
          { text: 'De gick in i kyrkan direkt.', translation: 'Eles entraram direto na igreja.', next: 'klockan' },
          { text: 'Linu ville äta lunch först.', translation: 'O Linu quis almoçar primeiro.', next: 'lunch' },
        ],
      },
      lunch: {
        emoji: '🥪',
        text: 'De åt lunch på ett kafé. Maten var god, men det tog lång tid. När de kom till kyrkan var klockan kvart över tolv.',
        translation: 'Eles almoçaram num café. A comida estava boa, mas demorou muito. Quando chegaram à igreja, era meio-dia e quinze.',
        choices: [{ text: '«Oj! Har vi missat musiken?»', translation: '«Opa! A gente perdeu a música?»', next: 'final_missat' }],
      },
      final_missat: {
        emoji: '😅',
        text: '«Ja, tyvärr», sa Elin. «Men den spelar igen klockan tre!» Under tiden gick de en lång promenad i den vackra staden.',
        translation: '«Sim, infelizmente», disse a Elin. «Mas ele toca de novo às três!» Enquanto isso, eles fizeram um longo passeio pela linda cidade.',
        ending: { tone: 'neutro', title: 'Almoço demorado', message: 'O Linu perdeu o relógio ao meio-dia, mas ganhou um passeio por Lund. Tente de novo!' },
      },
      klockan: {
        emoji: '⛪',
        text: 'Inne i kyrkan stod en stor, gammal klocka. Elin förklarade: «Den har funnits här sedan 1400-talet. Klockan tolv spelar den musik!»',
        translation: 'Dentro da igreja havia um relógio grande e antigo. A Elin explicou: «Ele está aqui desde o século XV. Ao meio-dia ele toca música!»',
        choices: [{ text: '«Vad är klockan nu?»', translation: '«Que horas são agora?»', next: 'vanta' }],
      },
      vanta: {
        emoji: '⏰',
        text: 'Klockan var kvart i tolv. De satte sig på en bänk och väntade. Linu lade sin mössa bredvid sig.',
        translation: 'Eram quinze para o meio-dia. Eles se sentaram num banco e esperaram. O Linu pôs o gorro dele do lado.',
        choices: [
          { text: 'Linu tittade på den stora klockan.', translation: 'O Linu olhou o grande relógio.', next: 'spelar' },
          { text: '«Elin, har du varit här förut?»', translation: '«Elin, você já esteve aqui antes?»', next: 'forut' },
        ],
      },
      forut: {
        emoji: '😊',
        text: '«Ja, många gånger! Första gången var jag sju år. Min pappa tog med mig hit.»',
        translation: '«Sim, muitas vezes! A primeira vez eu tinha sete anos. Meu pai me trouxe aqui.»',
        choices: [{ text: 'Linu tittade på klockan igen.', translation: 'O Linu olhou o relógio de novo.', next: 'spelar' }],
      },
      spelar: {
        emoji: '🎺',
        text: 'Precis klockan tolv började orgeln spela. Två små riddare slog mot varandra, och tre kungar gick förbi.',
        translation: 'Exatamente ao meio-dia, o órgão começou a tocar. Dois cavaleirinhos se golpearam, e três reis passaram.',
        choices: [
          { text: '«Otroligt! Jag har aldrig sett något liknande.»', translation: '«Incrível! Eu nunca vi nada parecido.»', next: 'mossan' },
          {
            text: '«Så klockan spelade klockan tio?»',
            translation: '«Então o relógio tocou às dez?»',
            wrong: 'O texto diz «Precis klockan tolv»: exatamente ao MEIO-DIA (12h), não às dez («tio»). Repare: «klockan» é o relógio e também a hora.',
          },
        ],
      },
      mossan: {
        emoji: '🧢',
        text: 'När de gick ut kom en man springande. Han höll en mössa och frågade Elin: «Är det här hans mössa?» Han pekade på Linu.',
        translation: 'Quando eles saíram, um homem veio correndo. Ele segurava um gorro e perguntou à Elin: «Este é o gorro dele?» Ele apontou para o Linu.',
        choices: [
          { text: '«Ja, det är min mössa! Tack så mycket!»', translation: '«Sim, é o meu gorro! Muito obrigado!»', next: 'final_bom' },
          {
            text: '«Nej, det är Elins mössa.»',
            translation: '«Não, é o gorro da Elin.»',
            wrong: 'O Linu tinha deixado «sin mössa» (o PRÓPRIO gorro) no banco. O homem perguntou se era «hans mössa», o gorro DELE, apontando para o Linu. É o gorro do Linu!',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu satte på sig sin mössa och log. Det var en fantastisk dag i den gamla staden.',
        translation: 'O Linu pôs o seu gorro e sorriu. Foi um dia fantástico na velha cidade.',
        ending: { tone: 'bom', title: 'Na hora certa', message: 'O Linu viu o relógio astronômico de Lund tocar e ainda recuperou o gorro.' },
      },
    },
  },
  {
    id: 'sv-h11',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Midsommar i skärgården',
    emoji: '🌸',
    summary: 'O Linu lembra o midsommar que passou numa ilhota do arquipélago de Estocolmo, com flores, dança das rãs e morangos.',
    cultural_context:
      'O midsommar é comemorado na sexta-feira entre 19 e 25 de junho: dança-se em volta de um mastro enfeitado com folhas e flores, e come-se arenque com batatas novas e morangos. Diz a tradição que quem dorme com sete tipos de flores debaixo do travesseiro sonha com o futuro amor.',
    start: 'start',
    glossary: [
      ['firade / har firat', 'comemorou / tem comemorado'],
      ['skärgården', 'o arquipélago'],
      ['midsommarstången', 'o mastro do midsommar'],
      ['små grodorna', 'as rãzinhas (canção e dança)'],
      ['sill och färskpotatis', 'arenque e batatas novas'],
      ['jordgubbar med grädde', 'morangos com creme'],
      ['sin kudde', 'o próprio travesseiro'],
    ],
    nodes: {
      start: {
        emoji: '⛴️',
        text: 'I fjol firade Linu midsommar i Stockholms skärgård. Han åkte båt till en liten ö där hans vän Maja har ett sommarhus.',
        translation: 'No ano passado, o Linu comemorou o midsommar no arquipélago de Estocolmo. Ele foi de barco até uma ilhota onde a amiga dele, a Maja, tem uma casa de veraneio.',
        choices: [{ text: 'Maja väntade på honom vid bryggan.', translation: 'A Maja o esperava no píer.', next: 'bryggan' }],
      },
      bryggan: {
        emoji: '🌼',
        text: '«Välkommen! Vi har plockat blommor hela morgonen», sa Maja. «Nu ska vi klä midsommarstången.»',
        translation: '«Bem-vindo! A gente colheu flores a manhã toda», disse a Maja. «Agora vamos enfeitar o mastro.»',
        choices: [
          { text: 'Linu hjälpte till med blommorna.', translation: 'O Linu ajudou com as flores.', next: 'stangen' },
          { text: 'Linu badade först i det kalla havet.', translation: 'O Linu primeiro tomou banho no mar gelado.', next: 'bad' },
        ],
      },
      bad: {
        emoji: '🌊',
        text: 'Vattnet var bara femton grader. Linu simmade länge. När han kom tillbaka stod stången redan på ängen.',
        translation: 'A água estava só a quinze graus. O Linu nadou um tempão. Quando ele voltou, o mastro já estava de pé no campo.',
        choices: [{ text: 'Linu sprang till ängen.', translation: 'O Linu correu até o campo.', next: 'dans' }],
      },
      stangen: {
        emoji: '🌿',
        text: 'De band björkris och blommor runt den höga stången. Sedan reste alla stången tillsammans.',
        translation: 'Eles amarraram galhos de bétula e flores em volta do mastro alto. Depois todos ergueram o mastro juntos.',
        choices: [{ text: 'Linu tittade på den färdiga stången. Den var jättefin!', translation: 'O Linu olhou o mastro pronto. Estava lindo!', next: 'dans' }],
      },
      dans: {
        emoji: '🐸',
        text: 'Alla dansade runt stången och sjöng «Små grodorna». Man hoppade som grodor! Det var första gången Linu dansade så.',
        translation: 'Todos dançaram em volta do mastro e cantaram «Små grodorna» (As rãzinhas). A gente pulava como rã! Foi a primeira vez que o Linu dançou assim.',
        choices: [
          { text: 'Linu hoppade som en groda.', translation: 'O Linu pulou como uma rã.', next: 'maten' },
          {
            text: 'Linu flaxade med vingarna som en fågel.',
            translation: 'O Linu bateu as asas como um passarinho.',
            wrong: 'A dança é a das «grodorna», as RÃZINHAS: todo mundo pulava como rã («Man hoppade som grodor»), sem bater asas!',
          },
        ],
      },
      maten: {
        emoji: '🍓',
        text: 'Till middag åt de sill, färskpotatis och till sist jordgubbar med grädde. Majas mormor frågade: «Har du ätit sill förut?»',
        translation: 'No jantar eles comeram arenque, batatas novas e, por fim, morangos com creme. A avó da Maja perguntou: «Você já comeu arenque antes?»',
        choices: [{ text: '«Nej, aldrig! Men den är god.»', translation: '«Não, nunca! Mas é gostoso.»', next: 'blommor' }],
      },
      blommor: {
        emoji: '💐',
        text: 'Sent på kvällen, när det fortfarande var ljust, berättade Maja: «Man plockar sju sorters blommor och lägger dem under sin kudde. Då drömmer man om sin framtida kärlek.»',
        translation: 'Tarde da noite, quando ainda estava claro, a Maja contou: «A gente colhe sete tipos de flores e põe debaixo do travesseiro. Aí sonha com o futuro amor.»',
        choices: [
          { text: 'Linu plockade sju blommor och lade dem under sin kudde.', translation: 'O Linu colheu sete flores e as pôs debaixo do seu travesseiro.', next: 'final_drom' },
          { text: 'Linu var för trött och somnade direkt.', translation: 'O Linu estava cansado demais e dormiu na hora.', next: 'final_somn' },
        ],
      },
      final_drom: {
        emoji: '💤',
        text: 'Den natten drömde Linu om en söt pingvin på ett isflak. Vem var hon? Det vet han fortfarande inte!',
        translation: 'Naquela noite, o Linu sonhou com uma pinguim fofa num bloco de gelo. Quem era ela? Ele ainda não sabe!',
        ending: { tone: 'bom', title: 'Sonho de verão', message: 'O Linu viveu um midsommar completo: flores, dança das rãs, morangos e um sonho misterioso.' },
      },
      final_somn: {
        emoji: '😴',
        text: 'Linu sov gott hela den ljusa natten. Men blommorna stod kvar i vasen, och han drömde ingenting.',
        translation: 'O Linu dormiu bem a noite clara inteira. Mas as flores ficaram no vaso, e ele não sonhou nada.',
        ending: { tone: 'neutro', title: 'Sono sem sonho', message: 'Foi um belo midsommar, mas o Linu pulou a tradição das sete flores. Tente de novo!' },
      },
    },
  },
  {
    id: 'sv-h12',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Ryggsäcken på Kalmar slott',
    emoji: '🏰',
    summary: 'Numa visita ao castelo de Kalmar, o amigo do Linu se assusta na masmorra e esquece a mochila.',
    cultural_context:
      'O castelo de Kalmar, no litoral sudeste da Suécia, começou como uma torre de defesa no século XII e foi transformado em palácio renascentista no século XVI. Em 1397 se formou ali a União de Kalmar, que juntou a Suécia, a Dinamarca e a Noruega sob um só monarca.',
    start: 'start',
    glossary: [
      ['slottet', 'o castelo'],
      ['har bott', 'moraram, já moraram (supino)'],
      ['fängelsehålan', 'a masmorra'],
      ['glömde', 'esqueceu'],
      ['sin ryggsäck / hans ryggsäck', 'a própria mochila / a mochila dele'],
      ['min / din', 'meu, minha / seu, sua'],
      ['en plånbok', 'uma carteira'],
    ],
    nodes: {
      start: {
        emoji: '🏰',
        text: 'I somras besökte Linu Kalmar slott med sin kompis Nils. Slottet ligger vid havet och är mycket gammalt.',
        translation: 'No verão passado, o Linu visitou o castelo de Kalmar com o amigo Nils. O castelo fica à beira-mar e é muito antigo.',
        choices: [{ text: 'De gick in genom den stora porten.', translation: 'Eles entraram pelo grande portão.', next: 'garden' }],
      },
      garden: {
        emoji: '🗝️',
        text: 'På gården träffade de en guide i gamla kläder. «Här har kungar och drottningar bott», sa hon.',
        translation: 'No pátio eles encontraram uma guia com roupas de época. «Aqui moraram reis e rainhas», disse ela.',
        choices: [
          { text: '«Får vi se deras rum?»', translation: '«Podemos ver os quartos deles?»', next: 'salen' },
          { text: 'Nils ville se fängelsehålan först.', translation: 'O Nils quis ver a masmorra primeiro.', next: 'fangelse' },
          {
            text: '«Bor kungen här nu?»',
            translation: '«O rei mora aqui agora?»',
            wrong: 'A guia disse «Här har kungar och drottningar bott»: reis e rainhas MORARAM ali, no passado («har bott» é o supino, um tempo passado). Hoje o castelo é um museu.',
          },
        ],
      },
      salen: {
        emoji: '👑',
        text: 'Salen var stor och vacker, med målningar i taket. Nils tog många bilder med sin mobil.',
        translation: 'O salão era grande e bonito, com pinturas no teto. O Nils tirou muitas fotos com o celular dele.',
        choices: [{ text: 'Sedan gick de ner till fängelsehålan.', translation: 'Depois eles desceram até a masmorra.', next: 'fangelse' }],
      },
      fangelse: {
        emoji: '🕯️',
        text: 'Fängelsehålan var mörk och kall. Plötsligt hörde de ett ljud, och Nils sprang ut. Han glömde sin ryggsäck på golvet!',
        translation: 'A masmorra era escura e fria. De repente eles ouviram um barulho, e o Nils saiu correndo. Ele esqueceu a mochila no chão!',
        choices: [
          { text: 'Linu tog Nils ryggsäck och gick ut.', translation: 'O Linu pegou a mochila do Nils e saiu.', next: 'ute' },
          { text: 'Linu sprang också ut, utan ryggsäcken.', translation: 'O Linu também saiu correndo, sem a mochila.', next: 'final_glomt' },
        ],
      },
      ute: {
        emoji: '🎒',
        text: 'Ute på gården letade Nils överallt. «Har du sett min ryggsäck?» frågade han.',
        translation: 'Lá fora, no pátio, o Nils procurava em todo lugar. «Você viu a minha mochila?», perguntou ele.',
        choices: [
          { text: '«Ja, här är din ryggsäck!»', translation: '«Sim, aqui está a sua mochila!»', next: 'final_bom' },
          {
            text: '«Nej, men här är min ryggsäck.»',
            translation: '«Não, mas aqui está a minha mochila.»',
            wrong: 'O Linu pegou a mochila do Nils («Nils ryggsäck») na masmorra. Ela não é do Linu: para o Nils, ela é «din ryggsäck», a SUA mochila.',
          },
        ],
      },
      final_bom: {
        emoji: '🍦',
        text: 'Nils blev så glad att han köpte glass till Linu. De åt den vid vattnet och tittade på den långa bron till Öland.',
        translation: 'O Nils ficou tão feliz que comprou sorvete para o Linu. Eles tomaram o sorvete à beira da água, olhando a longa ponte para Öland.',
        ending: { tone: 'bom', title: 'Herói do castelo', message: 'O Linu salvou a mochila do Nils e ganhou um sorvete à beira-mar.' },
      },
      final_glomt: {
        emoji: '🌧️',
        text: 'På kvällen ringde Nils: «Min ryggsäck! Min plånbok var i den!» Nästa dag fick de åka tillbaka till slottet.',
        translation: 'À noite o Nils ligou: «A minha mochila! A minha carteira estava nela!» No dia seguinte eles tiveram de voltar ao castelo.',
        ending: { tone: 'neutro', title: 'Volta ao castelo', message: 'A mochila ficou para trás na masmorra. Tente de novo!' },
      },
    },
  },
  // ───────────────────────── B1.1 ─────────────────────────
  {
    id: 'sv-h13',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Vid målet i Mora',
    emoji: '⛷️',
    summary: 'No dia da Vasaloppet, o Linu trabalha como voluntário na chegada, em Mora, e conhece um esquiador veterano.',
    cultural_context:
      'A Vasaloppet, corrida de esqui cross-country de 90 km entre Sälen e Mora, na Dalarna, é disputada desde 1922 no primeiro domingo de março. Nos postos ao longo da pista, os esquiadores tomam a tradicional sopa de mirtilo (blåbärssoppa).',
    start: 'start',
    glossary: [
      ['en mil', '10 km (a «milha sueca»; falso amigo: não é «mil»!)'],
      ['måste / ska / kan / får', 'precisar / ir (futuro) / poder / ter permissão'],
      ['kommer att', 'vai (futuro)'],
      ['ta på sig', 'vestir'],
      ['känna sig', 'sentir-se'],
      ['en filt', 'um cobertor'],
      ['blåbärssoppa', 'sopa de mirtilo'],
      ['ett startnummer', 'um número de largada'],
    ],
    nodes: {
      start: {
        emoji: '🏁',
        text: 'Det är första söndagen i mars, och Linu är i Mora. Idag kommer tusentals skidåkare att åka Vasaloppet, nio mil från Sälen. Linu ska hjälpa till som volontär vid målet.',
        translation: 'É o primeiro domingo de março, e o Linu está em Mora. Hoje milhares de esquiadores vão fazer a Vasaloppet, noventa quilômetros desde Sälen. O Linu vai ajudar como voluntário na chegada.',
        choices: [{ text: 'Linu går till volontärtältet.', translation: 'O Linu vai até a tenda dos voluntários.', next: 'taltet' }],
      },
      taltet: {
        emoji: '⛺',
        text: 'I tältet väntar Karin. «Välkommen! Först måste du ta på dig den gula västen. Sedan ska du dela ut filtar till skidåkarna.»',
        translation: 'Na tenda, a Karin está esperando. «Bem-vindo! Primeiro você precisa vestir o colete amarelo. Depois vai distribuir cobertores para os esquiadores.»',
        choices: [
          { text: 'Linu tar på sig västen.', translation: 'O Linu veste o colete.', next: 'malet' },
          { text: '«Kan jag inte åka en bit själv i stället?»', translation: '«Eu não posso esquiar um pedaço em vez disso?»', next: 'aka' },
        ],
      },
      aka: {
        emoji: '🎿',
        text: '«Nej, idag får ingen åka i spåret utan startnummer», säger Karin. «Men du kan anmäla dig till nästa år. Nu behöver vi dig här!»',
        translation: '«Não, hoje ninguém pode esquiar na pista sem número de largada», diz a Karin. «Mas você pode se inscrever para o ano que vem. Agora a gente precisa de você aqui!»',
        choices: [
          { text: '«Okej, då hjälper jag till idag.»', translation: '«Tá bom, então eu ajudo hoje.»', next: 'malet' },
          {
            text: '«Toppen, då åker jag i spåret nu!»',
            translation: '«Ótimo, então vou esquiar na pista agora!»',
            wrong: 'A Karin disse «idag får ingen åka i spåret utan startnummer»: hoje NINGUÉM tem permissão de esquiar na pista sem número. «Får» aqui é permissão, e «ingen» a nega.',
          },
        ],
      },
      malet: {
        emoji: '🎉',
        text: 'Vid målet är det musik och jubel. En trött skidåkare kommer fram till Linu. Han fryser och kan knappt stå.',
        translation: 'Na chegada há música e festa. Um esquiador cansado se aproxima do Linu. Ele está congelando e mal consegue ficar de pé.',
        choices: [
          { text: '«Här, ta den här filten! Sätt dig på bänken.»', translation: '«Tome, pegue este cobertor! Sente-se no banco.»', next: 'akaren' },
          { text: '«Vill du ha lite blåbärssoppa?»', translation: '«Quer um pouco de sopa de mirtilo?»', next: 'soppa' },
        ],
      },
      soppa: {
        emoji: '🫐',
        text: '«Nej tack! Jag har druckit blåbärssoppa vid varje kontroll», skrattar mannen. «Men en filt vill jag gärna ha.»',
        translation: '«Não, obrigado! Tomei sopa de mirtilo em cada posto», ri o homem. «Mas um cobertor eu aceito, sim.»',
        choices: [{ text: 'Linu ger honom en varm filt.', translation: 'O Linu lhe dá um cobertor quente.', next: 'akaren' }],
      },
      akaren: {
        emoji: '🧓',
        text: 'Mannen sveper in sig i filten. «Tack! Jag heter Lars. Jag har åkt Vasaloppet tjugo gånger, och nästa år ska jag åka igen.»',
        translation: 'O homem se enrola no cobertor. «Obrigado! Eu me chamo Lars. Já fiz a Vasaloppet vinte vezes, e no ano que vem vou fazer de novo.»',
        choices: [
          { text: '«Tjugo gånger! Hur känner du dig nu?»', translation: '«Vinte vezes! Como você está se sentindo agora?»', next: 'lars' },
          {
            text: '«Grattis till ditt första lopp!»',
            translation: '«Parabéns pela sua primeira corrida!»',
            wrong: 'O Lars disse «Jag har åkt Vasaloppet tjugo gånger»: ele já fez a corrida VINTE vezes! E «nästa år ska jag åka igen»: no ano que vem ele vai de novo.',
          },
        ],
      },
      lars: {
        emoji: '💬',
        text: '«Jag känner mig trött men lycklig», säger Lars. «Du borde också åka någon gång. Vill du träna med mig i vinter?»',
        translation: '«Estou me sentindo cansado, mas feliz», diz o Lars. «Você também devia fazer um dia. Quer treinar comigo neste inverno?»',
        choices: [
          { text: '«Ja! Jag vill lära mig åka längdskidor.»', translation: '«Quero! Eu quero aprender esqui cross-country.»', next: 'final_bom' },
          { text: '«Nej tack, jag delar hellre ut filtar.»', translation: '«Não, obrigado, prefiro distribuir cobertores.»', next: 'final_filt' },
        ],
      },
      final_bom: {
        emoji: '⛷️',
        text: 'Hela vintern tränar Linu med Lars. Nästa år kommer han att stå vid starten i Sälen, med sitt eget startnummer!',
        translation: 'O inverno inteiro, o Linu treina com o Lars. No ano que vem ele vai estar na largada em Sälen, com seu próprio número!',
        ending: { tone: 'bom', title: 'Rumo aos 90 km', message: 'O Linu ganhou um treinador e uma meta: esquiar a Vasaloppet inteira.' },
      },
      final_filt: {
        emoji: '🧣',
        text: 'Linu stannar vid målet till sent på kvällen. Han delar ut hundratals filtar och känner sig nyttig.',
        translation: 'O Linu fica na chegada até tarde da noite. Ele distribui centenas de cobertores e se sente útil.',
        ending: { tone: 'neutro', title: 'Voluntário de ouro', message: 'O Linu ajudou muita gente, mas deixou passar o convite para treinar. Quem sabe no ano que vem?' },
      },
    },
  },
  {
    id: 'sv-h14',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Luciatåget i Umeå',
    emoji: '🕯️',
    summary: 'No escuro de 13 de dezembro, em Umeå, o Linu participa da procissão de Santa Lúcia da sua escola de sueco.',
    cultural_context:
      'O dia de Santa Lúcia, 13 de dezembro, é comemorado com procissões (luciatåg): a Lucia vai à frente com uma coroa de velas, seguida de damas de branco e dos «stjärngossar», meninos-estrela de chapéu cônico. Comem-se «lussekatter», pães doces de açafrão, e biscoitos de gengibre.',
    start: 'start',
    glossary: [
      ['ett luciatåg', 'uma procissão de Santa Lúcia'],
      ['en stjärngosse', 'um menino-estrela'],
      ['en strut', 'um cone (o chapéu do menino-estrela)'],
      ['klä på sig / skynda sig', 'vestir-se / apressar-se'],
      ['Kom ihåg!', 'Lembre-se!'],
      ['ett ljus', 'uma vela; também «uma luz»'],
      ['lussekatter', 'pães doces de açafrão'],
    ],
    nodes: {
      start: {
        emoji: '🌑',
        text: 'Det är den 13 december i Umeå. Klockan är sju på morgonen, och ute är det fortfarande mörkt. Idag ska Linu vara med i luciatåget på skolan där han läser svenska.',
        translation: 'É 13 de dezembro em Umeå. São sete da manhã, e lá fora ainda está escuro. Hoje o Linu vai participar da procissão de Santa Lúcia na escola onde ele estuda sueco.',
        choices: [{ text: 'Linu skyndar sig till skolan.', translation: 'O Linu corre para a escola.', next: 'skolan' }],
      },
      skolan: {
        emoji: '🏫',
        text: 'Läraren Sofia möter honom i korridoren. «Bra att du kom! Du ska vara stjärngosse. Klä på dig den vita skjortan och ta den här struten.»',
        translation: 'A professora Sofia o encontra no corredor. «Que bom que você veio! Você vai ser menino-estrela. Vista a túnica branca e pegue este chapéu cônico.»',
        choices: [
          { text: 'Linu klär på sig och sätter struten på huvudet.', translation: 'O Linu se veste e põe o cone na cabeça.', next: 'repetition' },
          { text: '«Måste jag verkligen ha en strut på huvudet?»', translation: '«Eu preciso mesmo usar um cone na cabeça?»', next: 'strut' },
        ],
      },
      strut: {
        emoji: '⭐',
        text: '«Ja, alla stjärngossar har en strut med stjärnor på», skrattar Sofia. «Du kommer att se jättefin ut, jag lovar!»',
        translation: '«Sim, todos os meninos-estrela usam um cone com estrelas», ri a Sofia. «Você vai ficar lindo, eu prometo!»',
        choices: [{ text: '«Okej, då tar jag på mig den.»', translation: '«Tá bom, então eu ponho.»', next: 'repetition' }],
      },
      repetition: {
        emoji: '🎶',
        text: 'Alla ställer sig i en lång rad. Lucia går först, med ljus i håret. «Kom ihåg: gå långsamt och sjung tyst i början», säger Sofia.',
        translation: 'Todos se colocam numa fila comprida. A Lucia vai na frente, com velas no cabelo. «Lembrem-se: andem devagar e cantem baixinho no começo», diz a Sofia.',
        choices: [
          { text: 'Linu går långsamt och sjunger tyst.', translation: 'O Linu anda devagar e canta baixinho.', next: 'salen' },
          {
            text: 'Linu springer först och sjunger högt.',
            translation: 'O Linu corre na frente e canta alto.',
            wrong: 'A Sofia pediu «gå långsamt och sjung tyst i början»: andar DEVAGAR e cantar BAIXINHO no começo. E quem vai na frente é a Lucia!',
          },
        ],
      },
      salen: {
        emoji: '🕯️',
        text: 'I den mörka salen sitter föräldrar och vänner. Alla lampor är släckta. Tåget kommer in och sjunger «Sankta Lucia».',
        translation: 'No salão escuro estão sentados pais e amigos. Todas as luzes estão apagadas. A procissão entra cantando «Sankta Lucia».',
        choices: [
          { text: 'Linu tittar på Lucias krona.', translation: 'O Linu olha a coroa da Lucia.', next: 'ljuset' },
          { text: 'Linu letar efter sin kompis Ella i publiken.', translation: 'O Linu procura a amiga Ella na plateia.', next: 'ella' },
        ],
      },
      ljuset: {
        emoji: '🔥',
        text: 'Plötsligt ser Linu att ett ljus i Lucias krona lutar. Det kan falla! Vad ska han göra?',
        translation: 'De repente, o Linu vê que uma vela da coroa da Lucia está torta. Ela pode cair! O que ele deve fazer?',
        choices: [
          { text: 'Linu viskar: «Lucia, stanna lite! Ett ljus lutar.»', translation: 'O Linu cochicha: «Lucia, pare um pouquinho! Uma vela está torta.»', next: 'final_bom' },
          { text: 'Linu blundar och sjunger vidare.', translation: 'O Linu fecha os olhos e continua cantando.', next: 'final_nervos' },
        ],
      },
      ella: {
        emoji: '👋',
        text: 'Där sitter Ella! Hon vinkar. Linu vinkar tillbaka och glömmer att gå, så han står kvar ensam mitt i salen.',
        translation: 'Lá está a Ella! Ela acena. O Linu acena de volta e esquece de andar, então fica parado sozinho no meio do salão.',
        choices: [{ text: 'Linu skyndar sig efter tåget.', translation: 'O Linu corre atrás da procissão.', next: 'final_skratt' }],
      },
      final_bom: {
        emoji: '⭐',
        text: 'Lucia rättar till ljuset och ler mot Linu. Efteråt får alla lussekatter och pepparkakor. «Du räddade tåget!» säger Sofia.',
        translation: 'A Lucia ajeita a vela e sorri para o Linu. Depois, todos ganham lussekatter e biscoitos de gengibre. «Você salvou a procissão!», diz a Sofia.',
        ending: { tone: 'bom', title: 'Menino-estrela atento', message: 'O Linu salvou a coroa da Lucia e ganhou os pãezinhos de açafrão mais merecidos de Umeå.' },
      },
      final_nervos: {
        emoji: '😬',
        text: 'Ljuset faller inte, men Linu känner sig nervös hela tiden. Han glömmer texten två gånger.',
        translation: 'A vela não cai, mas o Linu fica nervoso o tempo todo. Ele esquece a letra duas vezes.',
        ending: { tone: 'neutro', title: 'Por um fio', message: 'Deu tudo certo, mas por sorte. Da próxima vez, avise a Lucia!' },
      },
      final_skratt: {
        emoji: '😂',
        text: 'Alla skrattar, och Linu känner sig lite dum. Men efteråt säger Ella: «Du var den roligaste stjärngossen!»',
        translation: 'Todo mundo ri, e o Linu se sente meio bobo. Mas depois a Ella diz: «Você foi o menino-estrela mais divertido!»',
        ending: { tone: 'neutro', title: 'Estrela perdida', message: 'O Linu se distraiu e ficou para trás, mas pelo menos fez a plateia rir.' },
      },
    },
  },
  {
    id: 'sv-h15',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Älgen i skogen',
    emoji: '🫎',
    summary: 'Em Örebro, o Linu e o amigo Amir acordam de madrugada para tentar ver um alce na floresta.',
    cultural_context:
      'O alce (älg) é o maior animal selvagem da Suécia e é chamado de «rei da floresta» (skogens konung). Ele é mais ativo ao amanhecer e ao entardecer; nas estradas, placas triangulares amarelas com um alce avisam os motoristas.',
    start: 'start',
    glossary: [
      ['en älg / en älgko / en kalv', 'um alce / uma alce fêmea / um filhote'],
      ['du får inte / du får aldrig', 'você não pode / você nunca pode (proibição)'],
      ['måste', 'precisar, ter de'],
      ['en kikare', 'um binóculo'],
      ['matsäck', 'lanche para levar'],
      ['Håll avstånd!', 'Mantenha distância!'],
      ['sätta sig / skynda sig', 'sentar-se / apressar-se'],
    ],
    nodes: {
      start: {
        emoji: '🏰',
        text: 'Linu bor hos sin vän Amir i Örebro. En morgon säger Amir: «I helgen ska vi åka till skogen utanför stan. Om vi har tur, kan vi se en älg!»',
        translation: 'O Linu está hospedado na casa do amigo Amir em Örebro. Uma manhã o Amir diz: «Neste fim de semana a gente vai à floresta fora da cidade. Se tivermos sorte, podemos ver um alce!»',
        choices: [
          { text: '«Vad måste jag ta med mig?»', translation: '«O que eu preciso levar?»', next: 'packa' },
          { text: '«En älg? Är den farlig?»', translation: '«Um alce? Ele é perigoso?»', next: 'farlig' },
        ],
      },
      farlig: {
        emoji: '⚠️',
        text: '«Oftast inte, men du får aldrig gå nära en älg», säger Amir. «En stor älg kan väga över 500 kilo. Håll alltid avstånd!»',
        translation: '«Na maioria das vezes não, mas você nunca pode chegar perto de um alce», diz o Amir. «Um alce grande pode pesar mais de 500 quilos. Sempre mantenha distância!»',
        choices: [
          { text: '«Okej, jag lovar att hålla avstånd.»', translation: '«Tá bom, prometo manter distância.»', next: 'packa' },
          {
            text: '«Bra, då kan jag gå fram och klappa den!»',
            translation: '«Ótimo, então posso chegar perto e fazer carinho nele!»',
            wrong: 'O Amir disse «du får aldrig gå nära en älg»: você NUNCA pode chegar perto de um alce. «Får inte / får aldrig» é proibição.',
          },
        ],
      },
      packa: {
        emoji: '🎒',
        text: '«Ta med dig varma kläder, en kikare och matsäck», säger Amir. «Vi måste gå upp tidigt, för älgar är mest aktiva på morgonen.»',
        translation: '«Leve roupas quentes, um binóculo e um lanche», diz o Amir. «A gente precisa levantar cedo, porque os alces são mais ativos de manhã.»',
        choices: [
          { text: 'Linu ställer väckarklockan på fem.', translation: 'O Linu põe o despertador para as cinco.', next: 'skogen' },
          { text: 'Linu tittar på film till sent på natten.', translation: 'O Linu vê filme até tarde da noite.', next: 'sovit' },
        ],
      },
      sovit: {
        emoji: '😪',
        text: 'På morgonen vaknar Linu inte. Amir knackar på dörren: «Kom igen! Skynda dig, annars kommer vi att missa älgarna!»',
        translation: 'De manhã o Linu não acorda. O Amir bate na porta: «Vamos! Anda logo, senão a gente vai perder os alces!»',
        choices: [{ text: 'Linu klär på sig på två minuter.', translation: 'O Linu se veste em dois minutos.', next: 'skogen' }],
      },
      skogen: {
        emoji: '🌲',
        text: 'I skogen är det dimmigt och tyst. Amir viskar: «Sätt dig här bakom stenen. Nu ska vi vänta och inte prata.»',
        translation: 'Na floresta está nebuloso e silencioso. O Amir cochicha: «Sente aqui atrás da pedra. Agora a gente vai esperar sem falar.»',
        choices: [
          { text: 'Linu sätter sig och väntar tyst.', translation: 'O Linu se senta e espera em silêncio.', next: 'vanta' },
          { text: 'Linu tar fram sin matsäck och öppnar en prasslig påse.', translation: 'O Linu tira o lanche e abre um saco barulhento.', next: 'prassel' },
        ],
      },
      prassel: {
        emoji: '💨',
        text: 'Påsen prasslar högt. Långt borta springer något stort och brunt in bland träden. «Där försvann den», suckar Amir.',
        translation: 'O saco faz um barulhão. Lá longe, uma coisa grande e marrom corre para o meio das árvores. «Lá se foi ele», suspira o Amir.',
        choices: [{ text: '«Förlåt! Kan vi försöka igen?»', translation: '«Desculpe! A gente pode tentar de novo?»', next: 'final_igen' }],
      },
      final_igen: {
        emoji: '🌅',
        text: 'De väntar till kvällen, men ingen älg kommer tillbaka. På vägen hem ser de i alla fall ett rådjur.',
        translation: 'Eles esperam até a noite, mas nenhum alce volta. No caminho de casa, pelo menos, eles veem um cervo.',
        ending: { tone: 'neutro', title: 'Só um cervo', message: 'Na floresta, silêncio é tudo! O barulho espantou o alce. Tente de novo.' },
      },
      vanta: {
        emoji: '🫎',
        text: 'Efter en halvtimme kommer en älgko med en liten kalv ut på gläntan. De äter löv från en björk.',
        translation: 'Depois de meia hora, uma alce fêmea com um filhotinho sai na clareira. Eles comem folhas de uma bétula.',
        choices: [
          { text: 'Linu tar försiktigt fram kikaren.', translation: 'O Linu pega o binóculo com cuidado.', next: 'final_bom' },
          { text: 'Linu reser sig för att se bättre.', translation: 'O Linu se levanta para ver melhor.', next: 'final_flykt' },
        ],
      },
      final_bom: {
        emoji: '🔭',
        text: 'Genom kikaren ser Linu kalvens stora öron. Han kommer att minnas den här morgonen hela livet.',
        translation: 'Pelo binóculo, o Linu vê as orelhas grandes do filhote. Ele vai se lembrar desta manhã a vida inteira.',
        ending: { tone: 'bom', title: 'Encontro na clareira', message: 'Quietinho e à distância, o Linu viu de perto o rei da floresta, ou melhor, a rainha e o príncipe.' },
      },
      final_flykt: {
        emoji: '🌲',
        text: 'Älgkon tittar upp, och på en sekund är de borta. «Nästa gång ska du sitta still», säger Amir och ler.',
        translation: 'A alce levanta a cabeça, e num segundo elas somem. «Da próxima vez, fique parado», diz o Amir, sorrindo.',
        ending: { tone: 'neutro', title: 'Fuga na floresta', message: 'O Linu viu o alce, mas só por um segundo. Tente de novo!' },
      },
    },
  },
  // ───────────────────────── B1.2 ─────────────────────────
  {
    id: 'sv-h16',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Isvägen i Luleå',
    emoji: '🧊',
    summary: 'No inverno de Luleå, o Linu ajuda a Maja a levar correio e comida pela estrada de gelo até uma ilha do arquipélago.',
    cultural_context:
      'No inverno, o mar congela no arquipélago de Luleå, no norte da Suécia, e se abrem estradas de gelo (isvägar) sobre o mar até algumas ilhas. Elas só são liberadas depois que a espessura do gelo é medida e considerada segura.',
    start: 'start',
    glossary: [
      ['isvägen', 'a estrada de gelo'],
      ['skärgården', 'o arquipélago'],
      ['eftersom', 'porque, já que'],
      ['fast', 'embora (coloquial, = fastän)'],
      ['hade mätt', 'tinha medido (mais-que-perfeito)'],
      ['körkort', 'carteira de motorista'],
      ['sprickor', 'rachaduras'],
      ['medicinen', 'o remédio'],
    ],
    nodes: {
      start: {
        emoji: '❄️',
        text: 'Det var februari i Luleå, och havet hade frusit till tjock is. Linu jobbade en vecka hos Maja, som körde post och mat ut till skärgårdens öar. Hon sa att isvägen var öppen, eftersom kommunen hade mätt isen samma morgon.',
        translation: 'Era fevereiro em Luleå, e o mar tinha congelado numa camada grossa de gelo. O Linu trabalhava uma semana com a Maja, que levava correio e comida de carro até as ilhas do arquipélago. Ela disse que a estrada de gelo estava aberta, porque a prefeitura tinha medido o gelo naquela mesma manhã.',
        choices: [
          { text: 'Linu bar ut lådorna till bilen.', translation: 'O Linu levou as caixas até o carro.', next: 'ladorna' },
          { text: 'Linu frågade om han fick köra.', translation: 'O Linu perguntou se podia dirigir.', next: 'kora' },
          {
            text: 'Linu sa att de inte kunde åka, eftersom ingen hade kontrollerat isen.',
            translation: 'O Linu disse que eles não podiam ir, porque ninguém tinha conferido o gelo.',
            wrong: 'A Maja disse que a estrada estava aberta porque a prefeitura «hade mätt isen samma morgon» — TINHA MEDIDO o gelo naquela manhã. O «hade + supino» (mais-que-perfeito) mostra que a medição já tinha acontecido antes.',
          },
        ],
      },
      kora: {
        emoji: '🚗',
        text: 'Maja skrattade och sa att han inte fick köra, eftersom han inte hade något körkort. «Men du får hålla i kartan», sa hon. Linu blev lite besviken, fast han förstod att hon hade rätt.',
        translation: 'A Maja riu e disse que ele não podia dirigir, porque não tinha carteira de motorista. «Mas você pode segurar o mapa», disse ela. O Linu ficou um pouco decepcionado, embora entendesse que ela tinha razão.',
        choices: [
          { text: 'Linu tog kartan och hjälpte till med lådorna.', translation: 'O Linu pegou o mapa e ajudou com as caixas.', next: 'ladorna' },
          {
            text: 'Linu satte sig bakom ratten och startade bilen.',
            translation: 'O Linu sentou ao volante e ligou o carro.',
            wrong: 'A Maja disse «att han inte fick köra» — que ele NÃO podia dirigir, porque não tinha carteira. Repare: na oração subordinada, o «inte» vem ANTES do verbo («att han inte fick»).',
          },
        ],
      },
      ladorna: {
        emoji: '📦',
        text: 'Lådorna var tunga, fast de mest innehöll bröd, mjölk och brev. När allt låg i bilen, märkte Linu att en låda saknades. Maja sa att hon hade glömt den på posten.',
        translation: 'As caixas eram pesadas, embora tivessem sobretudo pão, leite e cartas. Quando estava tudo no carro, o Linu percebeu que faltava uma caixa. A Maja disse que a tinha esquecido no correio.',
        choices: [
          { text: 'De körde tillbaka och hämtade lådan.', translation: 'Eles voltaram e buscaram a caixa.', next: 'posten' },
          { text: 'De åkte ut på isen utan den.', translation: 'Eles saíram para o gelo sem ela.', next: 'utan' },
        ],
      },
      posten: {
        emoji: '🏤',
        text: 'Lådan stod kvar vid dörren på postkontoret. Den var märkt med namnet Elsa, en gammal kvinna som bodde ensam på ön. «Tur att vi inte åkte utan den», sa Maja, «eftersom Elsa har väntat på sin medicin i en vecka.»',
        translation: 'A caixa continuava ao lado da porta da agência do correio. Estava marcada com o nome Elsa, uma senhora que morava sozinha na ilha. «Sorte que não fomos sem ela», disse a Maja, «porque a Elsa está esperando o remédio dela há uma semana.»',
        choices: [{ text: 'Nu åkte de ut på isvägen.', translation: 'Agora eles pegaram a estrada de gelo.', next: 'isvagen' }],
      },
      isvagen: {
        emoji: '🌲',
        text: 'Isvägen var bred och plogad, och längs kanterna stod små granar som visade vägen. Maja körde långsamt, eftersom det fanns sprickor i isen här och där. Hon förklarade att man måste hålla långt avstånd till bilen framför när man kör på is.',
        translation: 'A estrada de gelo era larga e limpa de neve, e ao longo das bordas havia pequenos pinheiros que marcavam o caminho. A Maja dirigia devagar, porque havia rachaduras no gelo aqui e ali. Ela explicou que é preciso manter bastante distância do carro da frente quando se dirige no gelo.',
        choices: [
          { text: 'Linu höll utkik efter ön.', translation: 'O Linu ficou de olho, procurando a ilha.', next: 'on' },
          {
            text: 'Linu sa till Maja att hon borde köra fortare.',
            translation: 'O Linu disse à Maja que ela devia dirigir mais rápido.',
            wrong: 'A Maja dirigia devagar «eftersom det fanns sprickor i isen» — PORQUE havia rachaduras no gelo. Pedir para correr mais não faria sentido!',
          },
        ],
      },
      on: {
        emoji: '🏠',
        text: 'Efter en halvtimme såg de de röda husen på ön. Elsa stod redan nere vid stranden och väntade, fast det var tjugo minusgrader. Hon sa att hon hade sett bilen långt ute på isen.',
        translation: 'Depois de meia hora, eles viram as casas vermelhas da ilha. A Elsa já estava lá embaixo na praia esperando, embora fizesse vinte graus negativos. Ela disse que tinha visto o carro lá longe, no gelo.',
        choices: [{ text: 'Linu gav Elsa lådan med medicinen.', translation: 'O Linu entregou à Elsa a caixa com o remédio.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '☕',
        text: 'Elsa bjöd på kaffe och nybakade bullar i sitt varma kök. Hon berättade att hon hade bott på ön i hela sitt liv. Linu tänkte att han aldrig hade druckit kaffe på en så vacker plats.',
        translation: 'A Elsa ofereceu café e pãezinhos recém-assados na sua cozinha quentinha. Ela contou que tinha morado na ilha a vida inteira. O Linu pensou que nunca tinha tomado café num lugar tão bonito.',
        ending: { tone: 'bom', title: 'Café no fim da estrada de gelo', message: 'O Linu buscou a caixa esquecida e levou o remédio da Elsa pela estrada de gelo. Missão cumprida, com direito a fika!' },
      },
      utan: {
        emoji: '🤦',
        text: 'De körde ut på isen och kom fram till ön efter en halvtimme. Elsa tog emot breven och brödet, men hon frågade var medicinen var. Maja suckade, eftersom de nu måste köra hela vägen tillbaka.',
        translation: 'Eles foram pelo gelo e chegaram à ilha depois de meia hora. A Elsa recebeu as cartas e o pão, mas perguntou onde estava o remédio. A Maja suspirou, porque agora eles tinham que fazer o caminho todo de volta.',
        ending: { tone: 'neutro', title: 'Ida e volta no gelo', message: 'A caixa do remédio ficou no correio. A viagem pelo gelo foi linda, mas vai ter que ser feita duas vezes!' },
      },
    },
  },
  {
    id: 'sv-h17',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Skidskytte i Östersund',
    emoji: '🎿',
    summary: 'Em Östersund, a amiga Sara convence o Linu a experimentar o biatlo: esqui e tiro ao alvo.',
    cultural_context:
      'Östersund, na região de Jämtland, é um dos grandes centros do biatlo (skidskytte) e sediou os Campeonatos Mundiais da modalidade em 2008 e 2019. Segundo uma lenda local, no lago Storsjön vive um monstro, o Storsjöodjuret.',
    start: 'start',
    glossary: [
      ['skidskytte', 'biatlo (esqui + tiro)'],
      ['straffrunda', 'volta de penalidade'],
      ['andas lugnt', 'respirar com calma'],
      ['förrän', 'antes que (depois de negação: «inte… förrän»)'],
      ['hade träffat', 'tinha acertado'],
      ['pimpla', 'pescar num buraco no gelo'],
      ['andfådd', 'ofegante'],
    ],
    nodes: {
      start: {
        emoji: '🏔️',
        text: 'Linu hade aldrig stått på skidor när han kom till Östersund i januari. Hans vän Sara tränade skidskytte och ville att han skulle prova. Hon sa att det inte var svårt, om man bara andades lugnt.',
        translation: 'O Linu nunca tinha subido num par de esquis quando chegou a Östersund, em janeiro. A amiga dele, Sara, treinava biatlo e queria que ele experimentasse. Ela disse que não era difícil, desde que a pessoa respirasse com calma.',
        choices: [
          { text: 'Linu tackade ja och lånade ett par skidor.', translation: 'O Linu aceitou e pegou um par de esquis emprestado.', next: 'skidor' },
          { text: 'Linu sa att han hellre ville titta på Storsjön.', translation: 'O Linu disse que preferia ver o lago Storsjön.', next: 'sjon' },
        ],
      },
      skidor: {
        emoji: '⛷️',
        text: 'Skidorna var långa och smala, och Linu ramlade redan efter tio meter. Sara hjälpte honom upp, fast hon inte kunde sluta skratta. Hon förklarade att han måste flytta vikten från den ena skidan till den andra.',
        translation: 'Os esquis eram compridos e finos, e o Linu caiu já nos primeiros dez metros. A Sara o ajudou a levantar, embora não conseguisse parar de rir. Ela explicou que ele precisava passar o peso de um esqui para o outro.',
        choices: [
          { text: 'Linu försökte igen, långsamt.', translation: 'O Linu tentou de novo, devagar.', next: 'banan' },
          {
            text: 'Linu gav upp, eftersom Sara hade sagt att det var omöjligt.',
            translation: 'O Linu desistiu, porque a Sara tinha dito que era impossível.',
            wrong: 'A Sara nunca disse isso! No começo ela disse «att det inte var svårt» — que NÃO era difícil, se a pessoa respirasse com calma. E agora ela explicou como fazer.',
          },
        ],
      },
      banan: {
        emoji: '🎯',
        text: 'Efter en timme kunde Linu åka runt hela den lilla banan. Då gick de till skjutvallen, där målen stod femtio meter bort. Sara sa att man skjuter fem skott och att varje miss ger en straffrunda.',
        translation: 'Depois de uma hora, o Linu conseguia dar a volta inteira na pista pequena. Então eles foram para o estande de tiro, onde os alvos ficavam a cinquenta metros. A Sara disse que se dão cinco tiros e que cada erro vale uma volta de penalidade.',
        choices: [{ text: 'Linu lade sig ner och siktade.', translation: 'O Linu se deitou e mirou.', next: 'skjuta' }],
      },
      skjuta: {
        emoji: '😮‍💨',
        text: 'Linu var andfådd, eftersom han hade åkt fort den sista biten. Sara viskade att han inte skulle skjuta förrän pulsen hade gått ner. Målen var små och svarta, och de blev vita när man träffade.',
        translation: 'O Linu estava ofegante, porque tinha esquiado rápido no último trecho. A Sara sussurrou que ele não devia atirar antes que o pulso tivesse baixado. Os alvos eram pequenos e pretos, e ficavam brancos quando alguém acertava.',
        choices: [
          { text: 'Linu andades lugnt en stund och sköt sedan fem skott.', translation: 'O Linu respirou com calma por um tempo e depois deu cinco tiros.', next: 'traff' },
          {
            text: 'Linu sköt direkt, så fort han låg ner.',
            translation: 'O Linu atirou na hora, assim que se deitou.',
            wrong: 'A Sara sussurrou «att han inte skulle skjuta förrän pulsen hade gått ner» — que ele NÃO devia atirar ANTES que o pulso baixasse. Atirar logo, ofegante, era justamente o que ela mandou evitar.',
          },
        ],
      },
      traff: {
        emoji: '⚪',
        text: 'Tre av målen blev vita, men två förblev svarta. Linu visste att han nu måste åka två straffrundor. Sara sa att det var bättre än hennes första gång, när hon inte hade träffat något alls.',
        translation: 'Três alvos ficaram brancos, mas dois continuaram pretos. O Linu sabia que agora precisava fazer duas voltas de penalidade. A Sara disse que era melhor que a primeira vez dela, quando não tinha acertado nada.',
        choices: [
          { text: 'Linu åkte straffrundorna med ett leende.', translation: 'O Linu fez as voltas de penalidade sorrindo.', next: 'final_bom' },
          { text: 'Linu smög förbi straffrundan.', translation: 'O Linu passou escondido pela volta de penalidade.', next: 'final_fusk' },
        ],
      },
      final_bom: {
        emoji: '🏅',
        text: 'När Linu kom i mål, klappade Sara och några barn i händerna. Han var trött och blöt, fast han var gladare än på länge. Sara sa att han skulle få komma tillbaka nästa vinter.',
        translation: 'Quando o Linu cruzou a linha de chegada, a Sara e algumas crianças bateram palmas. Ele estava cansado e molhado, embora mais feliz do que em muito tempo. A Sara disse que ele poderia voltar no próximo inverno.',
        ending: { tone: 'bom', title: 'Biatleta de primeira viagem', message: 'O Linu esquiou, respirou com calma, acertou três alvos e pagou as voltas de penalidade com honra.' },
      },
      final_fusk: {
        emoji: '🙈',
        text: 'Linu trodde att ingen såg honom, men tränaren hade stått bakom honom hela tiden. Hon pekade på straffrundan och skakade på huvudet. Linu fick åka båda rundorna ändå, och nu skrattade alla.',
        translation: 'O Linu achou que ninguém o via, mas a treinadora tinha ficado atrás dele o tempo todo. Ela apontou para a volta de penalidade e balançou a cabeça. O Linu teve que fazer as duas voltas mesmo assim, e agora todo mundo ria.',
        ending: { tone: 'neutro', title: 'Pego no flagra', message: 'No biatlo não tem atalho: cada tiro errado vale uma volta de penalidade. Tente de novo, com honestidade!' },
      },
      sjon: {
        emoji: '🐉',
        text: 'Linu gick ner till Storsjön, som var täckt av snö och is. En gammal man som satt och pimplade berättade om Storsjöodjuret, ett monster som många sa att de hade sett. Linu frågade om mannen själv hade sett det.',
        translation: 'O Linu desceu até o lago Storsjön, que estava coberto de neve e gelo. Um senhor que pescava num buraco no gelo contou sobre o Storsjöodjuret, um monstro que muita gente dizia ter visto. O Linu perguntou se o próprio senhor já o tinha visto.',
        choices: [
          { text: 'Linu satte sig bredvid mannen och väntade.', translation: 'O Linu sentou ao lado do senhor e esperou.', next: 'final_sjo' },
          { text: 'Linu gick tillbaka till Sara och skidorna.', translation: 'O Linu voltou para a Sara e os esquis.', next: 'skidor' },
        ],
      },
      final_sjo: {
        emoji: '🐟',
        text: 'De satt vid hålet i isen i två timmar, men odjuret visade sig inte. Mannen fick tre abborrar, och Linu fick kalla fötter. «Bara för att du inte har sett det, betyder det inte att det inte finns», sa mannen.',
        translation: 'Eles ficaram duas horas ao lado do buraco no gelo, mas o monstro não apareceu. O senhor pegou três percas, e o Linu ficou com os pés gelados. «Só porque você não o viu, não quer dizer que ele não exista», disse o senhor.',
        ending: { tone: 'neutro', title: 'Nada de monstro', message: 'O Linu não viu o Storsjöodjuret nem experimentou o biatlo. Mas ouviu uma boa lenda de Jämtland!' },
      },
    },
  },
  {
    id: 'sv-h18',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Landet som steg ur havet',
    emoji: '⛰️',
    summary: 'Na Höga kusten, uma geóloga mostra ao Linu que a terra ali ainda está subindo do mar.',
    cultural_context:
      'A Höga kusten («Costa Alta»), no leste da Suécia, é Patrimônio Mundial da UNESCO desde 2000. Depois da última era do gelo, a terra ali subiu cerca de 286 metros, a maior elevação pós-glacial conhecida no mundo, e ainda sobe uns 8 milímetros por ano.',
    start: 'start',
    glossary: [
      ['landhöjning', 'elevação do terreno (pós-glacial)'],
      ['höja sig', 'erguer-se, subir'],
      ['hade stigit', 'tinha subido'],
      ['kustlinjen', 'a linha da costa'],
      ['fortfarande', 'ainda'],
      ['fiskeläge', 'vila de pescadores'],
      ['grunt', 'raso'],
    ],
    nodes: {
      start: {
        emoji: '🥾',
        text: 'Linu vandrade upp på Skuleberget i Höga kusten tillsammans med geologen Ingrid. Hon berättade att hela området hade legat under ett tjockt istäcke för ungefär tiotusen år sedan. När isen smälte, började landet långsamt att höja sig.',
        translation: 'O Linu subiu a montanha Skuleberget, na Höga kusten, junto com a geóloga Ingrid. Ela contou que a região inteira tinha estado sob uma grossa camada de gelo, uns dez mil anos atrás. Quando o gelo derreteu, a terra começou a se erguer devagar.',
        choices: [
          { text: 'Linu frågade hur mycket landet hade stigit.', translation: 'O Linu perguntou quanto a terra tinha subido.', next: 'stigit' },
          {
            text: 'Linu frågade varför landet hade sjunkit.',
            translation: 'O Linu perguntou por que a terra tinha afundado.',
            wrong: 'A Ingrid disse que a terra começou a «höja sig» — a SE ERGUER, subir — quando o gelo derreteu. Ela não afundou: o peso do gelo saiu e o terreno foi subindo.',
          },
        ],
      },
      stigit: {
        emoji: '📏',
        text: 'Ingrid sa att landet hade stigit nästan trehundra meter sedan isen försvann. Hon förklarade att den högsta kustlinjen här är den högsta i hela världen. Sedan pekade hon på en skylt en bit upp på berget.',
        translation: 'A Ingrid disse que a terra tinha subido quase trezentos metros desde que o gelo sumiu. Ela explicou que a linha costeira mais alta daqui é a mais alta do mundo inteiro. Depois apontou para uma placa um pouco mais acima, na montanha.',
        choices: [
          { text: 'Linu gick fram till skylten.', translation: 'O Linu foi até a placa.', next: 'skylten' },
          { text: 'Linu ville hellre titta in i grottan i berget.', translation: 'O Linu preferia dar uma olhada na caverna da montanha.', next: 'grottan' },
        ],
      },
      grottan: {
        emoji: '🕳️',
        text: 'Grottan låg högt uppe i berget, fast den hade bildats av havet. Ingrid sa att vågorna hade slagit mot klippan när vattnet stod så högt. Linu förstod inte hur havet någonsin hade kunnat nå så långt upp.',
        translation: 'A caverna ficava bem no alto da montanha, embora tivesse sido formada pelo mar. A Ingrid disse que as ondas tinham batido na rocha quando a água estava naquela altura. O Linu não entendia como o mar podia um dia ter chegado tão alto.',
        choices: [{ text: 'Linu gick tillbaka till skylten.', translation: 'O Linu voltou até a placa.', next: 'skylten' }],
      },
      skylten: {
        emoji: '🪧',
        text: 'På skylten stod det att havet en gång hade nått ända hit. Linu tittade ner mot vattnet långt nedanför och kunde knappt tro att det var sant. «Om du tittar noga, ser du runda stenar som vågorna har slipat», sa Ingrid.',
        translation: 'Na placa estava escrito que o mar um dia tinha chegado até ali. O Linu olhou para a água, lá embaixo, e mal conseguia acreditar que era verdade. «Se você olhar com atenção, vai ver pedras redondas que as ondas poliram», disse a Ingrid.',
        choices: [{ text: 'Linu tog upp en rund sten.', translation: 'O Linu pegou uma pedra redonda.', next: 'stenen' }],
      },
      stenen: {
        emoji: '🪨',
        text: 'Stenen var slät och kall, precis som en sten på en strand. Ingrid berättade att landet fortfarande stiger ungefär åtta millimeter om året. Linu räknade och märkte att det blir nästan en meter på hundra år.',
        translation: 'A pedra era lisa e fria, igualzinha a uma pedra de praia. A Ingrid contou que a terra ainda sobe uns oito milímetros por ano. O Linu fez as contas e percebeu que isso dá quase um metro em cem anos.',
        choices: [
          { text: 'Linu frågade vad som händer med hamnarna.', translation: 'O Linu perguntou o que acontece com os portos.', next: 'hamnar' },
          {
            text: 'Linu sa att landhöjningen hade slutat för länge sedan.',
            translation: 'O Linu disse que a elevação da terra tinha parado havia muito tempo.',
            wrong: 'A Ingrid disse que a terra «fortfarande stiger» — AINDA sobe, uns oito milímetros por ano. A elevação não parou.',
          },
        ],
      },
      hamnar: {
        emoji: '⚓',
        text: 'Ingrid sa att många gamla fiskelägen nu ligger en bit från vattnet, eftersom havet har dragit sig tillbaka. Fiskarna var tvungna att flytta sina båthus när vattnet blev för grunt. Hon frågade om Linu ville se ett sådant ställe innan det blev mörkt.',
        translation: 'A Ingrid disse que muitas vilas de pescadores antigas agora ficam um pouco longe da água, porque o mar recuou. Os pescadores tiveram que mudar seus galpões de barco quando a água ficou rasa demais. Ela perguntou se o Linu queria ver um lugar assim antes de escurecer.',
        choices: [
          { text: '«Ja, gärna!»', translation: '«Sim, adoraria!»', next: 'final_bom' },
          { text: 'Linu sa att han var för trött och ville vila.', translation: 'O Linu disse que estava cansado demais e queria descansar.', next: 'final_vila' },
        ],
      },
      final_bom: {
        emoji: '🛶',
        text: 'De körde till ett gammalt fiskeläge, där båthusen stod en bit upp på land. Linu satte sig på en brygga som inte längre nådde ner till vattnet. Han tänkte att han aldrig hade sett ett så tydligt bevis på att jorden rör sig.',
        translation: 'Eles foram até uma antiga vila de pescadores, onde os galpões de barco ficavam um pouco terra adentro. O Linu sentou num cais que já não alcançava a água. Ele pensou que nunca tinha visto uma prova tão clara de que a terra se mexe.',
        ending: { tone: 'bom', title: 'O cais sem mar', message: 'O Linu entendeu a elevação pós-glacial da Höga kusten: um lugar onde a terra ainda está saindo do mar.' },
      },
      final_vila: {
        emoji: '🌅',
        text: 'Linu satte sig på toppen och åt sin matsäck medan solen gick ner över havet. Han såg inga fiskelägen den dagen, fast Ingrid hade sagt att de var fina. Men utsikten var den vackraste han någonsin hade sett.',
        translation: 'O Linu sentou no topo e comeu seu lanche enquanto o sol se punha sobre o mar. Ele não viu nenhuma vila de pescadores naquele dia, embora a Ingrid tivesse dito que eram bonitas. Mas a vista foi a mais bonita que ele já tinha visto.',
        ending: { tone: 'neutro', title: 'Só a vista', message: 'O pôr do sol foi lindo, mas o Linu perdeu a chance de ver as vilas que o mar deixou para trás.' },
      },
    },
  },
  // ───────────────────────── B1.3 ─────────────────────────
  {
    id: 'sv-h19',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Röd färg från gruvan',
    emoji: '🏠',
    summary: 'Perto de Falun, o Linu ajuda o amigo Lars a repintar uma casa de madeira com a famosa tinta vermelha da mina.',
    cultural_context:
      'A mina de cobre de Falun, em Dalarna, funcionou por cerca de mil anos, até 1992, e é Patrimônio Mundial da UNESCO. Dos resíduos da mina se faz o pigmento da «falu rödfärg», a tinta vermelha que colore tantas casas de madeira suecas, em geral com cantos e janelas brancos.',
    start: 'start',
    glossary: [
      ['måla om', 'repintar'],
      ['hälsa på', 'visitar (alguém)'],
      ['skrapa bort', 'raspar, tirar raspando'],
      ['färgen kokas', 'a tinta é cozida (passiva com -s)'],
      ['flagnad', 'descascada (particípio)'],
      ['knutarna', 'os cantos (das casas de madeira)'],
      ['stryka på', 'passar (tinta), aplicar'],
      ['gruvan', 'a mina'],
    ],
    nodes: {
      start: {
        emoji: '🌲',
        text: 'Linu hälsar på sin vän Lars, som bor i ett gammalt trähus utanför Falun. Huset ska målas om i sommar, och Lars har bett Linu att hjälpa till. «Färgen kommer från gruvan i Falun», säger han stolt.',
        translation: 'O Linu visita o amigo Lars, que mora numa casa antiga de madeira perto de Falun. A casa vai ser repintada neste verão, e o Lars pediu ao Linu que ajudasse. «A tinta vem da mina de Falun», diz ele, orgulhoso.',
        choices: [
          { text: 'Linu frågar hur färgen tillverkas.', translation: 'O Linu pergunta como a tinta é fabricada.', next: 'gruvan' },
          { text: 'Linu tar på sig arbetskläderna direkt.', translation: 'O Linu veste a roupa de trabalho na hora.', next: 'skrapa' },
          {
            text: 'Linu frågar varför huset ska rivas.',
            translation: 'O Linu pergunta por que a casa vai ser demolida.',
            wrong: 'O Lars disse que a casa «ska målas om» — vai SER REPINTADA («måla om» = pintar de novo; «målas» é a passiva com -s). Ninguém falou em demolir («riva»).',
          },
        ],
      },
      gruvan: {
        emoji: '⛏️',
        text: 'Lars berättar att koppar bröts i Falu gruva i nästan tusen år. Av resterna från gruvan tillverkas ett rött pigment, som blandas med vatten, mjöl och linolja. Färgen kokas i stora kärl innan den hälls upp i burkar.',
        translation: 'O Lars conta que se extraiu cobre na mina de Falun por quase mil anos. Dos resíduos da mina se fabrica um pigmento vermelho, que é misturado com água, farinha e óleo de linhaça. A tinta é cozida em grandes tachos antes de ser posta em latas.',
        choices: [
          { text: 'Linu vill se gruvan först.', translation: 'O Linu quer ver a mina primeiro.', next: 'besok' },
          { text: 'Linu tycker att de ska sätta igång med målningen.', translation: 'O Linu acha que eles devem começar a pintura.', next: 'skrapa' },
        ],
      },
      besok: {
        emoji: '⛑️',
        text: 'I gruvan får besökarna ta på sig hjälmar och regnjackor. Guiden visar gångar som grävdes ut för flera hundra år sedan. Linu blir lite rädd när lampan släcks en kort stund.',
        translation: 'Na mina, os visitantes vestem capacetes e capas de chuva. O guia mostra galerias que foram escavadas há várias centenas de anos. O Linu fica um pouco assustado quando a lâmpada é apagada por um instante.',
        choices: [
          { text: 'Linu åker tillbaka till huset och börjar arbeta.', translation: 'O Linu volta para a casa e começa a trabalhar.', next: 'skrapa' },
          { text: 'Linu blir så intresserad att han går en tur till.', translation: 'O Linu fica tão interessado que faz mais uma visita guiada.', next: 'final_gruva' },
        ],
      },
      skrapa: {
        emoji: '🧹',
        text: 'Först måste den gamla, flagnade färgen skrapas bort. Lars visar hur man tar bort flagorna utan att skada träet. Efter två timmar är hela väggen skrapad och sopad.',
        translation: 'Primeiro a tinta velha e descascada tem que ser raspada. O Lars mostra como tirar as lascas sem estragar a madeira. Depois de duas horas, a parede inteira está raspada e varrida.',
        choices: [
          { text: 'Linu öppnar färgburken, fast det har börjat regna.', translation: 'O Linu abre a lata de tinta, embora tenha começado a chover.', next: 'regn' },
          { text: 'Linu öppnar färgburken och börjar måla.', translation: 'O Linu abre a lata de tinta e começa a pintar.', next: 'mala' },
        ],
      },
      regn: {
        emoji: '🌧️',
        text: 'Lars skakar på huvudet och säger att färgen inte ska strykas på när väggen är blöt. De sätter sig på verandan och dricker kaffe medan det regnar. Efter en timme har molnen dragit förbi.',
        translation: 'O Lars balança a cabeça e diz que a tinta não deve ser passada quando a parede está molhada. Eles sentam na varanda e tomam café enquanto chove. Depois de uma hora, as nuvens já passaram.',
        choices: [{ text: 'Nu kan de börja måla.', translation: 'Agora eles podem começar a pintar.', next: 'mala' }],
      },
      mala: {
        emoji: '🖌️',
        text: 'Färgen stryks på med en bred pensel, och väggen blir mörkröd. Lars förklarar att den blir ljusare och mattare när den har torkat. «Men fönsterkarmarna och knutarna ska målas vita», säger han. Grannen kommer förbi och tycker att huset redan ser ut som nytt.',
        translation: 'A tinta é passada com um pincel largo, e a parede fica vermelho-escura. O Lars explica que ela fica mais clara e mais fosca depois de seca. «Mas os batentes das janelas e os cantos vão ser pintados de branco», diz ele. O vizinho passa por ali e acha que a casa já parece nova.',
        choices: [
          { text: 'Linu hämtar den vita färgen till fönstren.', translation: 'O Linu vai buscar a tinta branca para as janelas.', next: 'final_bom' },
          {
            text: 'Linu målar fönsterkarmarna röda också.',
            translation: 'O Linu pinta os batentes das janelas de vermelho também.',
            wrong: 'O Lars disse que os batentes e os cantos «ska målas vita» — VÃO SER PINTADOS de branco, como nas casas tradicionais. Vermelho é só para as paredes.',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'På kvällen är huset färdigmålat: rött med vita knutar, precis som husen på vykorten. Lars bjuder på grillad korv som tack för hjälpen. Linu är trött i armarna men stolt över det utförda arbetet.',
        translation: 'À noite a casa está pintada: vermelha com cantos brancos, igualzinha às casas dos cartões-postais. O Lars oferece salsicha grelhada como agradecimento pela ajuda. O Linu está com os braços cansados, mas orgulhoso do trabalho feito.',
        ending: { tone: 'bom', title: 'Casa de cartão-postal', message: 'O Linu aprendeu de onde vem o vermelho das casas suecas e ajudou a deixar a casa do Lars como manda a tradição.' },
      },
      final_gruva: {
        emoji: '⏰',
        text: 'Linu går en guidad tur till, och sedan ännu en. När han kommer tillbaka till huset på kvällen är väggen redan målad. «Den blev målad utan dig», skrattar Lars.',
        translation: 'O Linu faz mais uma visita guiada, e depois mais outra. Quando volta para a casa à noite, a parede já está pintada. «Ela foi pintada sem você», ri o Lars.',
        ending: { tone: 'neutro', title: 'Turista da mina', message: 'O Linu aprendeu muito sobre a mina de Falun, mas deixou o Lars pintando sozinho. Tente de novo!' },
      },
    },
  },
  {
    id: 'sv-h20',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Kören vid Klarälven',
    emoji: '🎶',
    summary: 'Recém-chegado a Karlstad, o Linu entra num coral e se prepara para um concerto à beira do rio.',
    cultural_context:
      'Karlstad, capital de Värmland, fica onde o rio Klarälven deságua no Vänern, o maior lago da Suécia, e tem o apelido de «Solstaden», a cidade do sol. Cantar em coral é um dos passatempos mais populares da Suécia.',
    start: 'start',
    glossary: [
      ['kören', 'o coral'],
      ['stämma', 'naipe, voz (no coral)'],
      ['välkomnas', 'são bem-vindos (passiva com -s)'],
      ['ta emot', 'receber'],
      ['sjunga med', 'cantar junto'],
      ['ställa in', 'cancelar'],
      ['hållas', 'ser realizado (hålla + -s)'],
      ['noterna', 'as partituras'],
    ],
    nodes: {
      start: {
        emoji: '📌',
        text: 'Linu har flyttat till Karlstad för en termin och vill lära känna nya människor. På biblioteket sitter en lapp uppsatt: «Kören söker fler röster. Nybörjare välkomnas!» Repetitionerna hålls varje tisdag i en kyrka nära Klarälven.',
        translation: 'O Linu se mudou para Karlstad por um semestre e quer conhecer gente nova. Na biblioteca há um papel pregado: «O coral procura mais vozes. Iniciantes são bem-vindos!» Os ensaios são realizados toda terça-feira numa igreja perto do Klarälven.',
        choices: [
          { text: 'Linu skriver upp tiden och går dit på tisdag.', translation: 'O Linu anota o horário e vai lá na terça.', next: 'forsta' },
          { text: 'Linu tycker att han sjunger för dåligt och går hem.', translation: 'O Linu acha que canta mal demais e vai para casa.', next: 'hemma' },
          {
            text: 'Linu tror att bara erfarna sångare får vara med.',
            translation: 'O Linu acha que só cantores experientes podem participar.',
            wrong: 'O papel dizia «Nybörjare välkomnas!» — «Iniciantes SÃO BEM-VINDOS!» (passiva com -s). Qualquer pessoa pode entrar!',
          },
        ],
      },
      hemma: {
        emoji: '🎧',
        text: 'Hemma sätter Linu på musik och sjunger med i köket. Grannen knackar på väggen, men sedan hör Linu att hon sjunger med också. Nästa dag möter han henne i trappan, och hon berättar att hon sjunger i samma kör.',
        translation: 'Em casa, o Linu põe uma música e canta junto na cozinha. A vizinha bate na parede, mas depois o Linu ouve que ela também está cantando junto. No dia seguinte ele a encontra na escada, e ela conta que canta naquele mesmo coral.',
        choices: [{ text: 'Linu följer med henne till repetitionen.', translation: 'O Linu vai com ela ao ensaio.', next: 'forsta' }],
      },
      forsta: {
        emoji: '⛪',
        text: 'Körledaren Karin tar emot Linu vid dörren och frågar vilken stämma han sjunger. Linu vet inte, så hon ber honom sjunga några toner. «Du är tenor», säger hon, och han placeras bredvid tre äldre herrar.',
        translation: 'A regente, Karin, recebe o Linu na porta e pergunta em que naipe ele canta. O Linu não sabe, então ela pede que ele cante algumas notas. «Você é tenor», diz ela, e ele é colocado ao lado de três senhores mais velhos.',
        choices: [{ text: 'Linu hälsar på herrarna och tar fram noterna.', translation: 'O Linu cumprimenta os senhores e pega as partituras.', next: 'noter' }],
      },
      noter: {
        emoji: '🎼',
        text: 'Kören övar på en gammal folkvisa från Värmland. Linu kan inte läsa noter, men en av herrarna, Gunnar, pekar ut var han ska börja. Efter en timme sitter melodin i huvudet. Karin meddelar att en konsert ska hållas i parken vid älven på lördag.',
        translation: 'O coral ensaia uma antiga canção folclórica de Värmland. O Linu não sabe ler partitura, mas um dos senhores, o Gunnar, aponta onde ele deve começar. Depois de uma hora, a melodia já está na cabeça. A Karin anuncia que um concerto vai ser realizado no parque à beira do rio no sábado.',
        choices: [
          { text: 'Linu anmäler sig till konserten.', translation: 'O Linu se inscreve para o concerto.', next: 'lordag' },
          {
            text: 'Linu tror att konserten har ställts in.',
            translation: 'O Linu acha que o concerto foi cancelado.',
            wrong: 'A Karin anunciou que um concerto «ska hållas» — VAI SER REALIZADO no sábado, no parque. «Ställa in» (cancelar) não aparece no texto.',
          },
        ],
      },
      lordag: {
        emoji: '☀️',
        text: 'På lördagen har en scen byggts upp i parken vid Klarälven. Solen skiner, precis som den ska i Solstaden. Men när Linu kommer fram, märker han att han har glömt noterna hemma.',
        translation: 'No sábado, um palco foi montado no parque à beira do Klarälven. O sol brilha, do jeito que deve ser na Cidade do Sol. Mas quando o Linu chega, percebe que esqueceu as partituras em casa.',
        choices: [
          { text: 'Linu springer hem och hämtar dem.', translation: 'O Linu corre para casa e as busca.', next: 'springa' },
          { text: 'Linu frågar Gunnar om han får titta i hans noter.', translation: 'O Linu pergunta ao Gunnar se pode olhar a partitura dele.', next: 'gunnar' },
        ],
      },
      springa: {
        emoji: '🏃',
        text: 'Linu springer hela vägen hem och tillbaka igen. När han kommer fram har konserten redan satt igång. Han ställer sig längst bak och sjunger med i den sista sången.',
        translation: 'O Linu corre o caminho todo até em casa e volta. Quando chega, o concerto já começou. Ele fica lá no fundo e canta junto a última música.',
        ending: { tone: 'neutro', title: 'Só a última música', message: 'O Linu buscou as partituras, mas perdeu quase todo o concerto. Às vezes, é melhor pedir ajuda!' },
      },
      gunnar: {
        emoji: '👴',
        text: 'Gunnar ler och håller fram sina noter så att båda kan se. Kören sjunger den värmländska folkvisan, och publiken blir helt tyst. Efteråt hörs en lång applåd över älven.',
        translation: 'O Gunnar sorri e segura a partitura de um jeito que os dois possam ver. O coral canta a canção folclórica de Värmland, e o público fica em total silêncio. Depois, ouve-se um longo aplauso sobre o rio.',
        choices: [{ text: 'Linu bugar sig tillsammans med de andra.', translation: 'O Linu faz uma reverência junto com os outros.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Karin säger att Linu är välkommen tillbaka varje tisdag. Gunnar bjuder hela tenorstämman på fika på ett café vid torget. Linu känner sig inte längre som en främling i Karlstad.',
        translation: 'A Karin diz que o Linu é bem-vindo de volta toda terça. O Gunnar paga um fika para todo o naipe dos tenores num café da praça. O Linu já não se sente um estranho em Karlstad.',
        ending: { tone: 'bom', title: 'Tenor de Karlstad', message: 'O Linu entrou no coral, cantou à beira do Klarälven e ganhou amigos. Nada melhor para se sentir em casa!' },
      },
    },
  },
  {
    id: 'sv-h21',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Ryggsäcken på färjan',
    emoji: '⛴️',
    summary: 'Voltando da Dinamarca para Helsingborg, o Linu esquece a mochila na balsa e precisa recuperá-la.',
    cultural_context:
      'Entre Helsingborg, na Suécia, e Helsingør, na Dinamarca, o estreito de Öresund tem só uns 4 km de largura, e as balsas fazem a travessia em cerca de 20 minutos. Do alto da torre medieval Kärnan, em Helsingborg, avista-se o castelo de Kronborg, do outro lado.',
    start: 'start',
    glossary: [
      ['färjan', 'a balsa, o ferry'],
      ['bli kvar', 'ficar (para trás)'],
      ['lämna in', 'entregar (num balcão, num achados e perdidos)'],
      ['har hittats', 'foi encontrado (passiva com -s)'],
      ['ringa upp', 'ligar para (alguém)'],
      ['knyta av', 'desamarrar'],
      ['halsduk', 'cachecol'],
    ],
    nodes: {
      start: {
        emoji: '🌊',
        text: 'Linu har tagit färjan från Helsingborg till Helsingör i Danmark, en resa som bara tar tjugo minuter. På tillbakavägen går han av i Helsingborg med ett stort leende. Men i terminalen märker han att ryggsäcken har blivit kvar på färjan.',
        translation: 'O Linu pegou a balsa de Helsingborg para Helsingør, na Dinamarca, uma viagem que leva só vinte minutos. Na volta, ele desembarca em Helsingborg com um sorrisão. Mas no terminal percebe que a mochila ficou na balsa.',
        choices: [
          { text: 'Linu går till informationsdisken.', translation: 'O Linu vai ao balcão de informações.', next: 'disken' },
          { text: 'Linu springer tillbaka mot färjan.', translation: 'O Linu corre de volta para a balsa.', next: 'fargan' },
        ],
      },
      fargan: {
        emoji: '🚧',
        text: 'Färjan har redan lagt ut från kajen och är på väg över sundet. En vakt stoppar Linu och säger att passagerare inte släpps ombord efter avgång. Han förklarar att upphittade saker lämnas in till personalen ombord.',
        translation: 'A balsa já saiu do cais e está atravessando o estreito. Um guarda para o Linu e diz que passageiros não são deixados embarcar depois da partida. Ele explica que objetos achados são entregues à tripulação a bordo.',
        choices: [
          { text: 'Linu går till informationsdisken.', translation: 'O Linu vai ao balcão de informações.', next: 'disken' },
          {
            text: 'Linu tror att ryggsäcken har kastats bort.',
            translation: 'O Linu acha que a mochila foi jogada fora.',
            wrong: 'O guarda disse que objetos achados «lämnas in till personalen» — SÃO ENTREGUES à tripulação (passiva com -s; «lämna in» = entregar). Nada foi jogado fora.',
          },
        ],
      },
      disken: {
        emoji: '📝',
        text: 'Kvinnan vid informationsdisken tar fram ett formulär och ber Linu beskriva ryggsäcken. «Den är blå, och en gul halsduk är fastknuten på den», säger Linu. Hon lovar att ringa upp färjan direkt.',
        translation: 'A moça do balcão de informações pega um formulário e pede ao Linu que descreva a mochila. «Ela é azul, e tem um cachecol amarelo amarrado nela», diz o Linu. Ela promete ligar para a balsa na hora.',
        choices: [
          { text: 'Linu väntar vid disken.', translation: 'O Linu espera no balcão.', next: 'vanta' },
          {
            text: 'Linu rättar sig och säger att ryggsäcken är gul.',
            translation: 'O Linu se corrige e diz que a mochila é amarela.',
            wrong: 'O próprio Linu disse que a mochila «är blå» — é azul. Amarelo é o cachecol («en gul halsduk») amarrado nela: «fastknuten» é um particípio, «amarrada».',
          },
        ],
      },
      vanta: {
        emoji: '📞',
        text: 'Efter tio minuter ringer telefonen. En blå ryggsäck har hittats under en bänk på övre däck, men det sitter ingen gul halsduk på den. Kvinnan frågar om Linu är säker på beskrivningen.',
        translation: 'Depois de dez minutos, o telefone toca. Uma mochila azul foi encontrada debaixo de um banco no convés superior, mas não há nenhum cachecol amarelo nela. A moça pergunta se o Linu tem certeza da descrição.',
        choices: [
          { text: 'Linu kommer ihåg att han tog av halsduken i Helsingör.', translation: 'O Linu lembra que tirou o cachecol em Helsingør.', next: 'halsduk' },
          { text: 'Linu säger att det måste vara någon annans ryggsäck.', translation: 'O Linu diz que deve ser a mochila de outra pessoa.', next: 'fel' },
        ],
      },
      halsduk: {
        emoji: '🧣',
        text: 'Linu minns att han knöt av halsduken när han åt glass i solen i Helsingör. Han måste ha glömt den på en bänk där. Kvinnan skrattar och säger att ryggsäcken skickas tillbaka med nästa färja.',
        translation: 'O Linu lembra que desamarrou o cachecol quando tomava sorvete no sol em Helsingør. Deve tê-lo esquecido num banco por lá. A moça ri e diz que a mochila vai ser mandada de volta na próxima balsa.',
        choices: [{ text: 'Linu går upp i tornet Kärnan medan han väntar.', translation: 'O Linu sobe na torre Kärnan enquanto espera.', next: 'karnan' }],
      },
      karnan: {
        emoji: '🏰',
        text: 'Kärnan är ett medeltida torn som står högt över staden. Från toppen ser Linu hela sundet och det danska slottet på andra sidan. Han ser också färjan som kommer tillbaka med hans ryggsäck.',
        translation: 'A Kärnan é uma torre medieval que fica no alto, acima da cidade. Do topo, o Linu vê o estreito inteiro e o castelo dinamarquês do outro lado. Ele vê também a balsa que está voltando com a mochila dele.',
        choices: [{ text: 'Linu skyndar sig ner till terminalen.', translation: 'O Linu desce correndo para o terminal.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎒',
        text: 'Ryggsäcken lämnas över av en leende besättningsman. Allt ligger kvar: plånboken, kameran och en kanelbulle som har blivit lite platt. Linu lovar sig själv att alltid titta under bänken innan han går av.',
        translation: 'A mochila é entregue por um tripulante sorridente. Está tudo lá: a carteira, a câmera e um pão de canela que ficou meio amassado. O Linu promete a si mesmo que sempre vai olhar debaixo do banco antes de desembarcar.',
        ending: { tone: 'bom', title: 'Mochila de volta', message: 'O Linu descreveu a mochila, lembrou do cachecol e ainda ganhou uma vista linda do Öresund.' },
      },
      fel: {
        emoji: '😞',
        text: 'Kvinnan skriver att ryggsäcken inte är Linus och lägger på. Linu väntar i två timmar, men ingen annan ryggsäck hittas. Till slut går han hem utan den.',
        translation: 'A moça anota que a mochila não é do Linu e desliga. O Linu espera duas horas, mas nenhuma outra mochila é encontrada. No fim, ele vai para casa sem ela.',
        ending: { tone: 'neutro', title: 'Perdida por engano', message: 'A mochila achada era mesmo a do Linu: o cachecol amarelo tinha ficado em Helsingør. Da próxima vez, pense duas vezes!' },
      },
    },
  },
  // ───────────────────────── B1.4 ─────────────────────────
  {
    id: 'sv-h22',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Stenskeppet vid havet',
    emoji: '🪨',
    summary: 'Perto de Ystad, o Linu pedala até Ales stenar, um navio de pedras cujo mistério ninguém resolveu.',
    cultural_context:
      'Ales stenar, perto de Ystad, na Escânia, é um monumento de 59 pedras dispostas em forma de navio, com cerca de 67 metros de comprimento. Ninguém sabe ao certo para que servia: muitos pesquisadores o veem como um túmulo, mas há quem defenda que funcionava como calendário solar.',
    start: 'start',
    glossary: [
      ['skeppssättning', 'navio de pedras (monumento pré-histórico)'],
      ['brantare och brantare', 'cada vez mais íngreme'],
      ['den största', 'a maior (superlativo)'],
      ['vars', 'cujo, cuja'],
      ['som', 'que (pronome relativo)'],
      ['mest troligt', 'o mais provável'],
      ['rökeri', 'defumadouro'],
    ],
    nodes: {
      start: {
        emoji: '🚲',
        text: 'Linu cyklar från Ystad längs kusten mot Kåseberga. Det blåser mer än han hade trott, och backarna blir brantare och brantare. Högst upp på en kulle ligger Ales stenar, en av Sveriges största skeppssättningar.',
        translation: 'O Linu pedala de Ystad pela costa em direção a Kåseberga. Venta mais do que ele imaginava, e as ladeiras ficam cada vez mais íngremes. No alto de uma colina fica Ales stenar, um dos maiores navios de pedra da Suécia.',
        choices: [
          { text: 'Linu ställer cykeln och går fram till stenarna.', translation: 'O Linu estaciona a bicicleta e vai até as pedras.', next: 'stenarna' },
          { text: 'Linu stannar först vid rökeriet i byn.', translation: 'O Linu para primeiro no defumadouro da vila.', next: 'rokeri' },
        ],
      },
      rokeri: {
        emoji: '🐟',
        text: 'I Kåseberga ligger ett litet rökeri vars fisk är känd i hela Skåne. Kvinnan bakom disken säger att makrillen är godare än sillen idag. Linu köper den största biten hon har.',
        translation: 'Em Kåseberga há um pequeno defumadouro cujo peixe é famoso em toda a Escânia. A moça do balcão diz que hoje a cavala está mais gostosa que o arenque. O Linu compra o maior pedaço que ela tem.',
        choices: [
          { text: 'Linu tar med fisken upp till stenarna.', translation: 'O Linu leva o peixe até as pedras.', next: 'stenarna' },
          { text: 'Linu äter fisken på bryggan och glömmer tiden.', translation: 'O Linu come o peixe no cais e perde a noção do tempo.', next: 'final_fisk' },
        ],
      },
      stenarna: {
        emoji: '⛵',
        text: 'Stenarna står i en lång oval som ser ut som ett skepp. En guide som heter Per berättar att det finns femtionio stenar och att skeppet är sextiosju meter långt. Han säger att de största stenarna står i fören och i aktern.',
        translation: 'As pedras formam um oval comprido que parece um navio. Um guia que se chama Per conta que há cinquenta e nove pedras e que o navio tem sessenta e sete metros de comprimento. Ele diz que as maiores pedras ficam na proa e na popa.',
        choices: [
          { text: 'Linu frågar vem som byggde skeppet.', translation: 'O Linu pergunta quem construiu o navio.', next: 'vem' },
          {
            text: 'Linu räknar och säger att det måste finnas sextiosju stenar.',
            translation: 'O Linu conta e diz que deve haver sessenta e sete pedras.',
            wrong: 'O Per disse, em discurso indireto, «att det finns femtionio stenar» — que há 59 pedras. O número «sextiosju» (67) é o comprimento do navio, em metros.',
          },
        ],
      },
      vem: {
        emoji: '🤔',
        text: 'Per säger att ingen vet säkert vem som reste stenarna. Vissa forskare menar att platsen är en grav, där skeppet skulle föra den döde vidare. Andra tror att den fungerade som en solkalender.',
        translation: 'O Per diz que ninguém sabe ao certo quem ergueu as pedras. Alguns pesquisadores acham que o lugar é um túmulo, onde o navio levaria o morto adiante. Outros acreditam que ele funcionava como um calendário solar.',
        choices: [{ text: 'Linu frågar vad som är mest troligt.', translation: 'O Linu pergunta o que é mais provável.', next: 'kalender' }],
      },
      kalender: {
        emoji: '🌞',
        text: 'Per svarar att han själv tror mest på graven, men att solkalendern är den populäraste teorin bland turisterna. Enligt den teorin går solen ner precis över den ena ändstenen vid midsommar. «Kom tillbaka en kväll i juni, så får du se själv», säger han.',
        translation: 'O Per responde que ele mesmo acredita mais no túmulo, mas que o calendário solar é a teoria mais popular entre os turistas. Segundo essa teoria, no solstício de verão o sol se põe exatamente sobre uma das pedras da ponta. «Volte numa noite de junho e veja você mesmo», diz ele.',
        choices: [
          { text: 'Linu bestämmer sig för att stanna till solnedgången ändå.', translation: 'O Linu decide ficar até o pôr do sol mesmo assim.', next: 'kvall' },
          {
            text: 'Linu säger att Per tror mest på solkalendern.',
            translation: 'O Linu diz que o Per acredita mais no calendário solar.',
            wrong: 'O Per disse «att han själv tror mest på graven» — que ELE acredita mais na teoria do túmulo. O calendário solar é «den populäraste teorin bland turisterna», a mais popular entre os turistas.',
          },
        ],
      },
      kvall: {
        emoji: '🌇',
        text: 'Det är inte midsommar, men kvällen är ändå den vackraste som Linu har upplevt i Skåne. Himlen blir rosa, och havet nedanför är lugnare än på morgonen. Linu sitter vid den största stenen tills det blir mörkt.',
        translation: 'Não é solstício de verão, mas a noite é mesmo assim a mais bonita que o Linu já viveu na Escânia. O céu fica cor-de-rosa, e o mar lá embaixo está mais calmo que de manhã. O Linu fica sentado junto à maior pedra até escurecer.',
        choices: [{ text: 'Linu cyklar tillbaka till Ystad i skymningen.', translation: 'O Linu pedala de volta a Ystad ao entardecer.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Nästa morgon berättar Linu för sin värd att han har sett solen gå ner vid Ales stenar. Värden säger att han aldrig har varit där, fast han har bott i Ystad i fyrtio år. Linu lovar att visa honom den bästa vägen dit.',
        translation: 'Na manhã seguinte, o Linu conta ao dono da pousada que viu o sol se pôr em Ales stenar. O anfitrião diz que nunca foi lá, embora more em Ystad há quarenta anos. O Linu promete lhe mostrar o melhor caminho até lá.',
        ending: { tone: 'bom', title: 'O navio de pedra', message: 'O Linu ouviu as teorias sobre Ales stenar e viu o pôr do sol mais bonito da Escânia.' },
      },
      final_fisk: {
        emoji: '😋',
        text: 'Fisken är så god att Linu köper en bit till, och sedan ännu en. När han äntligen cyklar upp till kullen, har guiden redan gått hem. Han ser stenarna, men han får aldrig veta vem som byggde dem.',
        translation: 'O peixe é tão gostoso que o Linu compra mais um pedaço, e depois mais outro. Quando enfim pedala até a colina, o guia já foi embora. Ele vê as pedras, mas nunca fica sabendo quem as construiu.',
        ending: { tone: 'neutro', title: 'Barriga cheia, mistério intacto', message: 'O peixe defumado de Kåseberga venceu. Volte cedo para ouvir o guia!' },
      },
    },
  },
  {
    id: 'sv-h23',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Staden som byggdes av sten',
    emoji: '🏛️',
    summary: 'Num passeio guiado por Sundsvall, o Linu descobre por que a cidade de madeira virou «a cidade de pedra».',
    cultural_context:
      'Em 25 de junho de 1888, um grande incêndio destruiu boa parte de Sundsvall, então uma cidade de madeira enriquecida pelas serrarias. O centro foi reconstruído em pedra e tijolo e ganhou o apelido de «Stenstaden», a cidade de pedra.',
    start: 'start',
    glossary: [
      ['stadsvandring', 'passeio guiado a pé pela cidade'],
      ['varmare och torrare', 'mais quente e mais seco'],
      ['vars', 'cujo, cuja'],
      ['sågverken', 'as serrarias'],
      ['det hus som', 'a casa que (relativa formal)'],
      ['den rikaste', 'o mais rico'],
      ['mura', 'construir com tijolos ou pedras'],
    ],
    nodes: {
      start: {
        emoji: '🚶',
        text: 'Linu går på en stadsvandring i Sundsvall med guiden Mona. Hon berättar att staden brann ner en dag i juni 1888, när nästan alla hus var byggda av trä. Efter branden bestämde man att den nya stadskärnan skulle byggas i sten.',
        translation: 'O Linu faz um passeio guiado por Sundsvall com a guia Mona. Ela conta que a cidade pegou fogo num dia de junho de 1888, quando quase todas as casas eram de madeira. Depois do incêndio, decidiu-se que o novo centro seria construído em pedra.',
        choices: [
          { text: 'Linu frågar varför det brann så mycket.', translation: 'O Linu pergunta por que queimou tanto.', next: 'brand' },
          { text: 'Linu tittar upp på de höga stenhusen.', translation: 'O Linu olha para os altos prédios de pedra.', next: 'husen' },
        ],
      },
      brand: {
        emoji: '🔥',
        text: 'Mona säger att sommaren hade varit varmare och torrare än vanligt. Det blåste hårt, och gnistorna flög från tak till tak. Tusentals människor, vars hem hade brunnit upp, blev hemlösa på en enda dag.',
        translation: 'A Mona diz que o verão tinha sido mais quente e mais seco que o normal. Ventava forte, e as faíscas voavam de telhado em telhado. Milhares de pessoas, cujas casas tinham queimado, ficaram sem teto num único dia.',
        choices: [
          { text: 'Linu frågar hur staden byggdes upp igen.', translation: 'O Linu pergunta como a cidade foi reconstruída.', next: 'husen' },
          {
            text: 'Linu säger att det måste ha varit en kall och regnig sommar.',
            translation: 'O Linu diz que deve ter sido um verão frio e chuvoso.',
            wrong: 'A Mona disse que o verão tinha sido «varmare och torrare än vanligt» — MAIS QUENTE e MAIS SECO que o normal (comparativo com -are). Por isso o fogo se espalhou tão rápido.',
          },
        ],
      },
      husen: {
        emoji: '🏰',
        text: 'Stenhusen är större och mer påkostade än Linu hade trott. Mona förklarar att sågverken hade gjort många familjer rika, och att de ville visa det. Det hus som har flest torn tillhörde en av stadens rikaste handlare.',
        translation: 'Os prédios de pedra são maiores e mais suntuosos do que o Linu imaginava. A Mona explica que as serrarias tinham deixado muitas famílias ricas, e que elas queriam mostrar isso. A casa que tem mais torres pertencia a um dos comerciantes mais ricos da cidade.',
        choices: [
          { text: 'Linu vill gå in i ett av husen.', translation: 'O Linu quer entrar num dos prédios.', next: 'inne' },
          {
            text: 'Linu säger att husen byggdes av fattiga fiskare.',
            translation: 'O Linu diz que as casas foram construídas por pescadores pobres.',
            wrong: 'A Mona explicou que as serrarias («sågverken») tinham deixado muitas famílias RICAS, e que elas queriam mostrar isso nas fachadas. Não se falou de pescadores pobres.',
          },
        ],
      },
      inne: {
        emoji: '🪜',
        text: 'I trapphuset finns målade tak och ett golv av marmor. En äldre man som bor på översta våningen stannar och pratar med dem. Han säger att hans farfar var en av dem som murade huset.',
        translation: 'Na escadaria há tetos pintados e um piso de mármore. Um senhor que mora no último andar para e conversa com eles. Ele diz que o avô dele foi um dos pedreiros que ergueram o prédio.',
        choices: [
          { text: 'Linu frågar mannen vad farfadern berättade.', translation: 'O Linu pergunta ao senhor o que o avô contava.', next: 'farfar' },
          { text: 'Linu tackar och går vidare med gruppen.', translation: 'O Linu agradece e segue com o grupo.', next: 'utsikt' },
        ],
      },
      farfar: {
        emoji: '🧱',
        text: 'Mannen säger att farfadern hade berättat att det var det tyngsta arbete han någonsin hade gjort. Murarna kom från hela Sverige, och många av dem stannade kvar i staden. «Utan dem skulle Sundsvall ha sett helt annorlunda ut», säger han.',
        translation: 'O senhor diz que o avô contava que aquele tinha sido o trabalho mais pesado que ele já tinha feito. Os pedreiros vieram de toda a Suécia, e muitos deles ficaram na cidade. «Sem eles, Sundsvall seria completamente diferente», diz ele.',
        choices: [{ text: 'Linu skyndar sig ikapp gruppen.', translation: 'O Linu se apressa para alcançar o grupo.', next: 'utsikt' }],
      },
      utsikt: {
        emoji: '🔭',
        text: 'Vandringen slutar uppe på Norra berget, varifrån man ser hela staden. Mona frågar vilket av husen gruppen tyckte var vackrast. Hon säger att den som ger det bästa svaret får en bok om stadens historia.',
        translation: 'O passeio termina no alto do Norra berget, de onde se vê a cidade inteira. A Mona pergunta qual dos prédios o grupo achou mais bonito. Ela diz que quem der a melhor resposta ganha um livro sobre a história da cidade.',
        choices: [
          {
            text: '«Huset där murarens barnbarn bor, eftersom det har den bästa historien.»',
            translation: '«O prédio onde mora o neto do pedreiro, porque ele tem a melhor história.»',
            next: 'final_bom',
          },
          { text: '«Jag minns faktiskt inget av husen.»', translation: '«Na verdade, não me lembro de nenhum dos prédios.»', next: 'final_glomt' },
        ],
      },
      final_bom: {
        emoji: '📚',
        text: 'Mona skrattar och säger att det är det bästa svaret hon har fått på länge. Linu får boken och läser den på tåget samma kväll. Nu vet han mer om Sundsvall än många som bor där.',
        translation: 'A Mona ri e diz que é a melhor resposta que ela recebe há muito tempo. O Linu ganha o livro e o lê no trem naquela mesma noite. Agora ele sabe mais sobre Sundsvall do que muita gente que mora lá.',
        ending: { tone: 'bom', title: 'A cidade de pedra', message: 'O Linu ouviu a história do incêndio de 1888 e conheceu quem ajudou a reconstruir Sundsvall.' },
      },
      final_glomt: {
        emoji: '😅',
        text: 'Mona ger boken till en flicka som svarade före honom. Linu har sett många vackra hus, men han har inte lyssnat så noga. Han bestämmer sig för att gå vandringen en gång till.',
        translation: 'A Mona dá o livro a uma menina que respondeu antes dele. O Linu viu muitos prédios bonitos, mas não prestou muita atenção. Ele decide fazer o passeio mais uma vez.',
        ending: { tone: 'neutro', title: 'Sem o livro', message: 'Um passeio guiado rende mais quando se presta atenção nas histórias. Tente de novo!' },
      },
    },
  },
  {
    id: 'sv-h24',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Bocken i Gävle',
    emoji: '🐐',
    summary: 'No começo do Advento, o Linu conhece o bode de palha gigante de Gävle e passa uma noite ajudando a vigiá-lo.',
    cultural_context:
      'Desde 1966, um bode de palha gigante, o Gävlebocken, é montado na praça Slottstorget, em Gävle, no primeiro domingo do Advento. Ele já foi incendiado muitas vezes, embora isso seja crime, e virou uma das tradições de Natal mais conhecidas da Suécia.',
    start: 'start',
    glossary: [
      ['bocken', 'o bode'],
      ['halm', 'palha'],
      ['högre än', 'mais alto que'],
      ['det kallaste', 'o mais frio'],
      ['vars', 'cujo, cuja'],
      ['staketet', 'a cerca'],
      ['förbjudet', 'proibido'],
    ],
    nodes: {
      start: {
        emoji: '🎄',
        text: 'Det är första söndagen i advent, och Linu står på Slottstorget i Gävle. Mitt på torget står en jättelik bock av halm, som är högre än ett hus med två våningar. Kvinnan bredvid honom, Eva, säger att bocken har stått där varje jul sedan 1966.',
        translation: 'É o primeiro domingo do Advento, e o Linu está na praça Slottstorget, em Gävle. No meio da praça há um bode gigante de palha, mais alto que uma casa de dois andares. A mulher ao lado dele, Eva, diz que o bode é montado ali todo Natal desde 1966.',
        choices: [
          { text: 'Linu frågar Eva varför bocken är så känd.', translation: 'O Linu pergunta à Eva por que o bode é tão famoso.', next: 'kand' },
          { text: 'Linu går närmare för att ta en bild.', translation: 'O Linu chega mais perto para tirar uma foto.', next: 'bild' },
        ],
      },
      kand: {
        emoji: '🔥',
        text: 'Eva berättar att bocken har brunnit många gånger, fast det är förbjudet att tända eld på den. Hon säger att den vissa år bara har stått i några timmar. «Folk över hela världen följer den via en webbkamera», säger hon.',
        translation: 'A Eva conta que o bode já pegou fogo muitas vezes, embora seja proibido incendiá-lo. Ela diz que em alguns anos ele ficou de pé só algumas horas. «Gente do mundo todo acompanha o bode por uma webcam», diz ela.',
        choices: [
          { text: 'Linu frågar hur bocken skyddas nu.', translation: 'O Linu pergunta como o bode é protegido agora.', next: 'skydd' },
          {
            text: 'Linu säger att det alltså är en tradition att bränna bocken.',
            translation: 'O Linu diz que, então, é tradição queimar o bode.',
            wrong: 'A Eva disse que o bode já queimou muitas vezes, «fast det är förbjudet» — EMBORA seja proibido. Não é tradição: é vandalismo!',
          },
        ],
      },
      skydd: {
        emoji: '🛡️',
        text: 'Eva säger att halmen numera behandlas med ett medel som gör den svårare att tända. Dessutom finns det vakter som går runt bocken dygnet runt. Hon tror att bocken är bättre skyddad än de flesta hus i staden.',
        translation: 'A Eva diz que hoje em dia a palha é tratada com um produto que a torna mais difícil de acender. Além disso, há vigias que fazem a ronda em volta do bode dia e noite. Ela acha que o bode é mais bem protegido que a maioria das casas da cidade.',
        choices: [{ text: 'Linu går fram och tittar på vakterna.', translation: 'O Linu se aproxima para olhar os vigias.', next: 'vakt' }],
      },
      bild: {
        emoji: '📸',
        text: 'Linu går så nära att han känner lukten av halm. En vakt, vars jacka lyser gul i mörkret, ber honom att hålla sig bakom staketet. Han förklarar att ingen får gå närmare än så.',
        translation: 'O Linu chega tão perto que sente o cheiro de palha. Um vigia, cuja jaqueta brilha amarela no escuro, pede que ele fique atrás da cerca. Ele explica que ninguém pode chegar mais perto do que isso.',
        choices: [
          { text: 'Linu backar och ber om ursäkt.', translation: 'O Linu recua e pede desculpas.', next: 'vakt' },
          {
            text: 'Linu klättrar över staketet för att få en bättre bild.',
            translation: 'O Linu pula a cerca para tirar uma foto melhor.',
            wrong: 'O vigia pediu que ele ficasse «bakom staketet» — atrás da cerca — e disse que ninguém pode chegar mais perto. Pular a cerca é o contrário do que ele pediu!',
          },
        ],
      },
      vakt: {
        emoji: '👮',
        text: 'En vakt som heter Jonas frågar om Linu vill följa med på en runda runt bocken i natt. Han säger att natten är kallare än man tror. Det kallaste passet, säger han, är mellan tre och fem på morgonen.',
        translation: 'Um vigia chamado Jonas pergunta se o Linu quer acompanhá-lo numa ronda em volta do bode esta noite. Ele diz que a noite é mais fria do que se imagina. O turno mais frio, diz ele, é entre três e cinco da manhã.',
        choices: [
          { text: 'Linu följer med på nattpasset.', translation: 'O Linu acompanha o turno da noite.', next: 'natt' },
          { text: 'Linu säger att han hellre går till hotellet och sover.', translation: 'O Linu diz que prefere ir para o hotel dormir.', next: 'final_sova' },
        ],
      },
      natt: {
        emoji: '🌙',
        text: 'Klockan fyra är det tjugo minusgrader och helt tyst på torget. Plötsligt ser Linu en man som går mot bocken med något i handen. Jonas lyser på honom med sin ficklampa.',
        translation: 'Às quatro horas faz vinte graus negativos e a praça está em total silêncio. De repente, o Linu vê um homem andando em direção ao bode com alguma coisa na mão. O Jonas ilumina o homem com a lanterna.',
        choices: [{ text: 'Linu och Jonas går fram till mannen.', translation: 'O Linu e o Jonas vão até o homem.', next: 'mannen' }],
      },
      mannen: {
        emoji: '☕',
        text: 'Mannen håller en termos, inte en tändare. Han säger att han har tagit med varm choklad till vakterna, precis som han har gjort varje år. Det är den godaste chokladen som Linu har druckit på hela resan.',
        translation: 'O homem está segurando uma garrafa térmica, não um isqueiro. Ele diz que trouxe chocolate quente para os vigias, como faz todo ano. É o chocolate mais gostoso que o Linu tomou na viagem inteira.',
        choices: [{ text: 'Linu tackar och dricker upp.', translation: 'O Linu agradece e toma tudo.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🌅',
        text: 'När solen går upp står bocken kvar, hel och gyllene. Jonas säger att Linu var den bästa medhjälpare han har haft. Linu får en liten halmbock som tack.',
        translation: 'Quando o sol nasce, o bode continua de pé, inteiro e dourado. O Jonas diz que o Linu foi o melhor ajudante que ele já teve. O Linu ganha um bodinho de palha como agradecimento.',
        ending: { tone: 'bom', title: 'Guardião do bode', message: 'O Linu passou a noite mais fria da viagem protegendo o bode de Gävle, e ele amanheceu inteiro!' },
      },
      final_sova: {
        emoji: '🛏️',
        text: 'Linu sover gott på hotellet. På morgonen läser han att natten var lugn och att bocken står kvar. Han hade gärna varit med, men sängen var betydligt varmare än torget.',
        translation: 'O Linu dorme bem no hotel. De manhã, ele lê que a noite foi tranquila e que o bode continua de pé. Ele teria gostado de estar lá, mas a cama era bem mais quente que a praça.',
        ending: { tone: 'neutro', title: 'Noite quentinha', message: 'O bode sobreviveu sem a ajuda do Linu. Quem sabe no próximo Advento?' },
      },
    },
  },
  // ───────────────────────── B2.1 ─────────────────────────
  {
    id: 'sv-h25',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Vävstolarna i Norrköping',
    emoji: '🧵',
    summary: 'Em Norrköping, o Linu imagina como seria trabalhar nas antigas fábricas têxteis e tenta tecer num tear de verdade.',
    cultural_context:
      'Norrköping cresceu com as fábricas têxteis movidas pelas corredeiras do rio Motala ström e chegou a ser chamada de «a Manchester da Suécia». As velhas fábricas de tijolo hoje abrigam universidade, museus e escritórios; o Arbetets museum (Museu do Trabalho) fica no prédio apelidado de «Strykjärnet», o ferro de passar.',
    start: 'start',
    glossary: [
      ['om du hade levt…', 'se você tivesse vivido…'],
      ['skulle ha jobbat', 'teria trabalhado'],
      ['om jag vore', 'se eu fosse (subjuntivo residual)'],
      ['vore det inte för…', 'se não fosse por…'],
      ['vävstol', 'tear'],
      ['sänkt lön', 'salário reduzido'],
      ['Leve…!', 'Viva…! (subjuntivo residual)'],
    ],
    nodes: {
      start: {
        emoji: '🏭',
        text: 'Linu går längs Motala ström i Norrköping, där vattnet forsar fram mellan gamla fabriker av tegel. Hans vän Hanna, som forskar i historia, visar honom en byggnad som förr var ett textilbruk. «Om du hade levt här för hundra år sedan, skulle du antagligen ha jobbat i en sådan här fabrik», säger hon.',
        translation: 'O Linu caminha ao longo do Motala ström, em Norrköping, onde a água corre forte entre velhas fábricas de tijolo. A amiga dele, Hanna, que pesquisa história, mostra um prédio que antigamente era uma fábrica têxtil. «Se você tivesse vivido aqui cem anos atrás, provavelmente teria trabalhado numa fábrica como esta», diz ela.',
        choices: [
          { text: 'Linu frågar hur det skulle ha varit att jobba där.', translation: 'O Linu pergunta como teria sido trabalhar lá.', next: 'jobb' },
          { text: 'Linu säger att han hellre skulle ha blivit fabriksägare.', translation: 'O Linu diz que preferiria ter sido dono de fábrica.', next: 'agare' },
        ],
      },
      jobb: {
        emoji: '⏱️',
        text: 'Hanna berättar att arbetsdagarna var långa och att många av arbetarna var kvinnor och barn. Bullret från vävstolarna var så högt att man knappt kunde höra sin egen röst. «Om jag vore arbetare då, skulle jag nog lära mig läsa på läpparna», säger hon.',
        translation: 'A Hanna conta que as jornadas eram longas e que muitos dos operários eram mulheres e crianças. O barulho dos teares era tão alto que mal se ouvia a própria voz. «Se eu fosse operária naquela época, acho que aprenderia a ler lábios», diz ela.',
        choices: [
          { text: 'Linu vill se en vävstol på riktigt.', translation: 'O Linu quer ver um tear de verdade.', next: 'museum' },
          {
            text: 'Linu säger att Hanna jobbade i en fabrik när hon var ung.',
            translation: 'O Linu diz que a Hanna trabalhou numa fábrica quando era jovem.',
            wrong: 'A Hanna disse «om jag vore arbetare då» — SE eu FOSSE operária naquela época. É uma hipótese («vore» = fosse), não algo que aconteceu com ela.',
          },
        ],
      },
      agare: {
        emoji: '🎩',
        text: 'Hanna skrattar och säger att det vore trevligt, men att det inte var många som hade den turen. Fabriksägarna bodde i stora villor, medan arbetarfamiljerna delade på små rum. «Tänk om alla hade fått samma chans!» säger hon.',
        translation: 'A Hanna ri e diz que seria ótimo, mas que não eram muitos os que tinham essa sorte. Os donos das fábricas moravam em grandes mansões, enquanto as famílias operárias dividiam quartinhos. «Imagine se todos tivessem tido a mesma chance!», diz ela.',
        choices: [{ text: 'Linu vill se hur arbetarna hade det.', translation: 'O Linu quer ver como os operários viviam.', next: 'museum' }],
      },
      museum: {
        emoji: '🏛️',
        text: 'I huset som kallas Strykjärnet ligger Arbetets museum. En guide sätter igång en gammal vävstol, och hela golvet skakar. Hon frågar om Linu skulle vilja prova att väva en liten bit.',
        translation: 'No prédio chamado Strykjärnet fica o Museu do Trabalho. Uma guia liga um tear antigo, e o chão inteiro treme. Ela pergunta se o Linu gostaria de experimentar tecer um pedacinho.',
        choices: [
          { text: 'Linu säger ja och sätter sig vid vävstolen.', translation: 'O Linu diz que sim e senta ao tear.', next: 'vava' },
          { text: 'Linu säger att han hellre skulle vilja se staden uppifrån.', translation: 'O Linu diz que preferiria ver a cidade do alto.', next: 'utsikt' },
        ],
      },
      utsikt: {
        emoji: '🌉',
        text: 'Från ett högt tak ser Linu hur fabrikerna ligger på rad längs strömmen. Hanna säger att staden kallades Sveriges Manchester när industrin var som störst. «Vore det inte för vattnet, skulle fabrikerna aldrig ha byggts här», säger hon.',
        translation: 'De um telhado alto, o Linu vê as fábricas enfileiradas ao longo do rio. A Hanna diz que a cidade era chamada de Manchester da Suécia quando a indústria estava no auge. «Se não fosse pela água, as fábricas nunca teriam sido construídas aqui», diz ela.',
        choices: [
          { text: 'Linu går tillbaka och provar vävstolen ändå.', translation: 'O Linu volta e experimenta o tear mesmo assim.', next: 'vava' },
          { text: 'Linu sätter sig på ett kafé vid forsen.', translation: 'O Linu senta num café junto à corredeira.', next: 'final_cafe' },
        ],
      },
      vava: {
        emoji: '🪡',
        text: 'Tråden går av två gånger, och Linu blir svettig. Guiden säger att en arbetare som hade gjort så många fel skulle ha fått sänkt lön. Till slut har Linu vävt en liten, sned bit tyg.',
        translation: 'O fio arrebenta duas vezes, e o Linu começa a suar. A guia diz que um operário que tivesse errado tanto teria recebido salário reduzido. No fim, o Linu teceu um pedacinho torto de pano.',
        choices: [
          { text: 'Linu frågar om han får behålla tyget.', translation: 'O Linu pergunta se pode ficar com o pano.', next: 'final_bom' },
          {
            text: 'Linu frågar när han får sin lön.',
            translation: 'O Linu pergunta quando vai receber o salário.',
            wrong: 'A guia disse que um operário que tivesse errado tanto «skulle ha fått sänkt lön» — TERIA recebido salário reduzido. É condicional no passado, sobre a época das fábricas, não uma promessa de pagamento!',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Guiden viker ihop tyget och ger det till Linu. «Leve hantverket!» säger hon och skrattar. Linu tänker att han aldrig mer ska klaga på en lång arbetsdag.',
        translation: 'A guia dobra o pano e o entrega ao Linu. «Viva o trabalho artesanal!», diz ela, rindo. O Linu pensa que nunca mais vai reclamar de um dia longo de trabalho.',
        ending: { tone: 'bom', title: 'Tecelão por um dia', message: 'O Linu imaginou a vida nas fábricas de Norrköping e levou para casa o próprio pedaço de pano, torto e com orgulho.' },
      },
      final_cafe: {
        emoji: '☕',
        text: 'Linu dricker kaffe och lyssnar på forsen. Han tänker att han gärna skulle ha vävt något, om han bara hade vågat. Kanske nästa gång.',
        translation: 'O Linu toma café e escuta a corredeira. Ele pensa que teria gostado de tecer alguma coisa, se ao menos tivesse tido coragem. Quem sabe da próxima vez.',
        ending: { tone: 'neutro', title: 'Café na corredeira', message: 'A vista das fábricas é linda, mas o Linu não experimentou o tear. Tente de novo!' },
      },
    },
  },
  {
    id: 'sv-h26',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Gurkorna i Västerås',
    emoji: '🥒',
    summary: 'Num emprego de verão perto de Västerås, o Linu colhe pepinos e aprende a receita de conserva de uma família.',
    cultural_context:
      'Västerås, às margens do lago Mälaren, é conhecida como «Gurkstaden», a cidade do pepino, por causa da longa tradição de cultivo de pepinos na região. A conserva agridoce de pepino («inlagd gurka» ou «pressgurka») acompanha pratos clássicos como as almôndegas suecas.',
    start: 'start',
    glossary: [
      ['om du hade kommit…', 'se você tivesse chegado…'],
      ['skulle du ha missat', 'você teria perdido'],
      ['om det vore upp till mig', 'se dependesse de mim'],
      ['lägga in', 'fazer conserva'],
      ['ättikslag', 'salmoura de vinagre'],
      ['skörd', 'colheita'],
      ['ett dygn', '24 horas'],
    ],
    nodes: {
      start: {
        emoji: '🌿',
        text: 'Linu har fått sommarjobb hos Birgitta, som odlar gurka i ett växthus utanför Västerås. «Om du hade kommit en vecka senare, skulle du ha missat den största skörden», säger hon. Hela växthuset doftar grönt och varmt.',
        translation: 'O Linu conseguiu um emprego de verão com a Birgitta, que cultiva pepino numa estufa perto de Västerås. «Se você tivesse chegado uma semana mais tarde, teria perdido a maior colheita», diz ela. A estufa inteira tem cheiro de verde e de calor.',
        choices: [
          { text: 'Linu börjar plocka gurkor direkt.', translation: 'O Linu começa a colher pepinos na hora.', next: 'plocka' },
          { text: 'Linu frågar varför Västerås kallas gurkstaden.', translation: 'O Linu pergunta por que Västerås é chamada de cidade do pepino.', next: 'gurkstad' },
        ],
      },
      gurkstad: {
        emoji: '🏙️',
        text: 'Birgitta berättar att man har odlat gurka runt Mälaren i flera hundra år. Jorden och klimatet här passar gurkan bra. «Om det vore upp till mig, skulle det stå en staty av en gurka mitt på torget», skämtar hon.',
        translation: 'A Birgitta conta que se cultiva pepino em volta do Mälaren há várias centenas de anos. O solo e o clima daqui combinam bem com o pepino. «Se dependesse de mim, haveria uma estátua de pepino no meio da praça», brinca ela.',
        choices: [{ text: 'Linu skrattar och börjar plocka.', translation: 'O Linu ri e começa a colher.', next: 'plocka' }],
      },
      plocka: {
        emoji: '🧺',
        text: 'Birgitta visar att gurkorna ska vara ungefär lika långa som en hand. «Om de vore större, skulle de bli för hårda att lägga in», förklarar hon. Linu fyller en hel back på en timme.',
        translation: 'A Birgitta mostra que os pepinos devem ter mais ou menos o comprimento de uma mão. «Se fossem maiores, ficariam duros demais para a conserva», explica ela. O Linu enche um engradado inteiro em uma hora.',
        choices: [
          { text: 'Linu plockar bara gurkor som är lika långa som en hand.', translation: 'O Linu só colhe pepinos do comprimento de uma mão.', next: 'lagg' },
          {
            text: 'Linu väljer de allra största gurkorna, eftersom de ser godast ut.',
            translation: 'O Linu escolhe os pepinos maiores de todos, porque parecem mais gostosos.',
            wrong: 'A Birgitta explicou: se fossem maiores, «skulle de bli för hårda» — FICARIAM duros demais para a conserva. «Skulle + infinitivo» é o condicional: os grandes não servem.',
          },
        ],
      },
      lagg: {
        emoji: '🫙',
        text: 'På eftermiddagen ska gurkorna läggas in i en lag av ättika, socker och vatten. Birgitta säger att receptet kommer från hennes mormor. «Om du glömde sockret, skulle ingen i familjen röra dem», säger hon allvarligt.',
        translation: 'À tarde, os pepinos vão ser postos em conserva numa calda de vinagre, açúcar e água. A Birgitta diz que a receita é da avó dela. «Se você esquecesse o açúcar, ninguém da família tocaria neles», diz ela, séria.',
        choices: [
          { text: 'Linu följer receptet noga.', translation: 'O Linu segue a receita à risca.', next: 'recept' },
          { text: 'Linu vill prova att ha i chili i stället för socker.', translation: 'O Linu quer experimentar pôr pimenta em vez de açúcar.', next: 'chili' },
        ],
      },
      chili: {
        emoji: '🌶️',
        text: 'Birgitta tittar länge på honom. «Om du vore mitt barnbarn, skulle jag säga nej», säger hon, men hon låter honom göra en egen liten burk. Resten görs efter mormors recept.',
        translation: 'A Birgitta olha para ele por um bom tempo. «Se você fosse meu neto, eu diria não», diz ela, mas deixa que ele faça um potinho só dele. O resto é feito com a receita da avó.',
        choices: [{ text: 'Linu fyller sin burk med chili och gurka.', translation: 'O Linu enche o pote dele com pimenta e pepino.', next: 'final_chili' }],
      },
      recept: {
        emoji: '📜',
        text: 'Linu mäter upp ättika, socker och vatten och kokar upp lagen. Gurkorna skärs i tunna skivor och läggs i glasburkar tillsammans med dill. Birgitta säger att burkarna måste stå i kylen i minst ett dygn.',
        translation: 'O Linu mede vinagre, açúcar e água e leva a calda para ferver. Os pepinos são cortados em fatias finas e postos em potes de vidro com endro. A Birgitta diz que os potes precisam ficar na geladeira por pelo menos 24 horas.',
        choices: [
          { text: 'Linu väntar tålmodigt till nästa dag.', translation: 'O Linu espera com paciência até o dia seguinte.', next: 'final_bom' },
          {
            text: 'Linu äter gurkorna samma kväll.',
            translation: 'O Linu come os pepinos na mesma noite.',
            wrong: 'A Birgitta disse que os potes precisam ficar na geladeira «i minst ett dygn» — por pelo menos 24 horas. Na mesma noite ainda é cedo demais!',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Nästa dag bjuder Birgitta på köttbullar, potatismos och Linus inlagda gurka. Hela familjen säger att den smakar precis som mormors. «Leve gurkan!» ropar Birgittas barnbarn.',
        translation: 'No dia seguinte, a Birgitta serve almôndegas, purê de batata e a conserva de pepino do Linu. A família inteira diz que tem o mesmo gosto da da avó. «Viva o pepino!», grita o neto da Birgitta.',
        ending: { tone: 'bom', title: 'Receita de família', message: 'O Linu colheu, seguiu a receita da avó e esperou o tempo certo. A conserva ficou perfeita!' },
      },
      final_chili: {
        emoji: '🥵',
        text: 'Linus chiligurka blir så stark att ingen i familjen vågar äta mer än en skiva. Birgitta säger att den kanske skulle passa på en hamburgare. Linu lovar att följa mormors recept nästa gång.',
        translation: 'O pepino com pimenta do Linu fica tão ardido que ninguém da família se arrisca a comer mais de uma fatia. A Birgitta diz que talvez combinasse com um hambúrguer. O Linu promete seguir a receita da avó da próxima vez.',
        ending: { tone: 'neutro', title: 'Pepino ardido', message: 'Inventar é bom, mas algumas receitas de família são sagradas. Tente de novo!' },
      },
    },
  },
  {
    id: 'sv-h27',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Huset av trä',
    emoji: '🏗️',
    summary: 'Em Skellefteå, um arquiteto mostra ao Linu um dos prédios de madeira mais altos do mundo.',
    cultural_context:
      'O centro cultural Sara, em Skellefteå, inaugurado em 2021, tem 20 andares e é um dos prédios de madeira mais altos do mundo. Abriga biblioteca, teatro e hotel, e o nome homenageia a escritora Sara Lidman, nascida na região.',
    start: 'start',
    glossary: [
      ['skulle jag ha skrattat', 'eu teria rido'],
      ['vore jag tvungen', 'se eu fosse obrigado'],
      ['om det skulle börja brinna', 'se começasse a pegar fogo'],
      ['binder koldioxid', 'retém gás carbônico'],
      ['förkolnar', 'carboniza'],
      ['balkar', 'vigas'],
      ['runt knuten', 'logo ali, na esquina'],
    ],
    nodes: {
      start: {
        emoji: '🌲',
        text: 'Linu besöker Skellefteå, där ett av världens högsta trähus står mitt i centrum. Arkitekten Johan, som var med och ritade huset, möter honom vid entrén. «Om någon hade sagt till mig för trettio år sedan att vi skulle bygga tjugo våningar i trä, skulle jag ha skrattat», säger han.',
        translation: 'O Linu visita Skellefteå, onde um dos prédios de madeira mais altos do mundo fica bem no centro. O arquiteto Johan, que ajudou a projetar o prédio, o encontra na entrada. «Se alguém tivesse me dito trinta anos atrás que construiríamos vinte andares de madeira, eu teria rido», diz ele.',
        choices: [
          { text: 'Linu frågar varför man valde trä.', translation: 'O Linu pergunta por que escolheram madeira.', next: 'tra' },
          { text: 'Linu frågar om huset verkligen klarar en brand.', translation: 'O Linu pergunta se o prédio aguenta mesmo um incêndio.', next: 'brand' },
          {
            text: 'Linu säger att Johan alltid har trott på idén.',
            translation: 'O Linu diz que o Johan sempre acreditou na ideia.',
            wrong: 'O Johan disse que, se alguém tivesse falado isso trinta anos atrás, «skulle jag ha skrattat» — ele TERIA RIDO. Ou seja: antes, ele não acreditava na ideia.',
          },
        ],
      },
      tra: {
        emoji: '♻️',
        text: 'Johan förklarar att träet binder koldioxid, medan betong och stål släpper ut mycket när de tillverkas. Dessutom växer skogen runt knuten. «Vore jag tvungen att välja igen, skulle jag välja trä en gång till», säger han.',
        translation: 'O Johan explica que a madeira retém gás carbônico, enquanto o concreto e o aço emitem muito quando são fabricados. Além disso, a floresta está logo ali. «Se eu tivesse que escolher de novo, escolheria madeira mais uma vez», diz ele.',
        choices: [{ text: 'Linu frågar om det inte är farligt vid brand.', translation: 'O Linu pergunta se não é perigoso em caso de incêndio.', next: 'brand' }],
      },
      brand: {
        emoji: '🧯',
        text: 'Johan säger att grova trästommar brinner långsammare än man tror, eftersom ytan förkolnar och skyddar resten av träet. Huset har dessutom sprinkler på alla våningar. «Om det skulle börja brinna, skulle alla hinna ut i god tid», säger han.',
        translation: 'O Johan diz que estruturas grossas de madeira queimam mais devagar do que se imagina, porque a superfície carboniza e protege o resto da madeira. Além disso, o prédio tem sprinklers em todos os andares. «Se começasse a pegar fogo, todo mundo teria tempo de sair», diz ele.',
        choices: [
          { text: 'Linu vill åka upp till toppen.', translation: 'O Linu quer subir até o topo.', next: 'toppen' },
          { text: 'Linu vill se biblioteket först.', translation: 'O Linu quer ver a biblioteca primeiro.', next: 'bibliotek' },
        ],
      },
      bibliotek: {
        emoji: '📚',
        text: 'I biblioteket luktar det svagt av trä, och taket bärs upp av stora, ljusa balkar. Huset har fått sitt namn efter författaren Sara Lidman, som kom från trakten. Linu hittar en av hennes romaner och börjar bläddra i den.',
        translation: 'Na biblioteca há um leve cheiro de madeira, e o teto é sustentado por grandes vigas claras. O prédio leva o nome da escritora Sara Lidman, que era da região. O Linu encontra um dos romances dela e começa a folheá-lo.',
        choices: [
          { text: 'Linu ställer tillbaka boken och åker upp till toppen.', translation: 'O Linu devolve o livro à estante e sobe até o topo.', next: 'toppen' },
          { text: 'Linu sätter sig och läser hela eftermiddagen.', translation: 'O Linu senta e lê a tarde inteira.', next: 'final_lasa' },
        ],
      },
      toppen: {
        emoji: '🏙️',
        text: 'Från översta våningen ser Linu älven, skogarna och staden långt nedanför. Johan berättar att huset rör sig lite när det blåser hårt. «Om det inte gjorde det, skulle det faktiskt vara sämre», förklarar han.',
        translation: 'Do último andar, o Linu vê o rio, as florestas e a cidade lá embaixo. O Johan conta que o prédio se mexe um pouco quando venta forte. «Se não se mexesse, na verdade seria pior», explica ele.',
        choices: [
          { text: 'Linu frågar om Johan själv skulle vilja bo här.', translation: 'O Linu pergunta se o próprio Johan gostaria de morar ali.', next: 'bo' },
          {
            text: 'Linu blir rädd och springer ner, eftersom huset snart kommer att rasa.',
            translation: 'O Linu fica com medo e desce correndo, porque o prédio logo vai desabar.',
            wrong: 'O Johan disse que o prédio se mexe um pouco com vento forte e que, se NÃO se mexesse, «skulle det vara sämre» — seria pior. Balançar um pouco é normal e seguro.',
          },
        ],
      },
      bo: {
        emoji: '🏡',
        text: 'Johan skrattar och säger att han skulle flytta in redan i morgon, om hans fru gick med på det. Men hon vill hellre bo i en röd stuga vid havet. «Så vi bor i trä i alla fall», säger han.',
        translation: 'O Johan ri e diz que se mudaria já amanhã, se a mulher dele concordasse. Mas ela prefere morar numa casinha vermelha à beira-mar. «Então a gente mora em madeira de qualquer jeito», diz ele.',
        choices: [{ text: 'Linu tackar för visningen.', translation: 'O Linu agradece pela visita.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu tar en sista bild av det höga trähuset i kvällssolen. Han tänker att framtidens städer kanske skulle kunna se ut så här. Om han vore arkitekt, skulle han också bygga i trä.',
        translation: 'O Linu tira uma última foto do alto prédio de madeira no sol da tarde. Ele pensa que as cidades do futuro talvez pudessem ser assim. Se ele fosse arquiteto, também construiria com madeira.',
        ending: { tone: 'bom', title: 'Arranha-céu de madeira', message: 'O Linu descobriu por que Skellefteå apostou na madeira e subiu até o topo de um dos prédios de madeira mais altos do mundo.' },
      },
      final_lasa: {
        emoji: '📖',
        text: 'Linu läser tills biblioteket stänger och glömmer helt bort Johan och utsikten. När han går ut har det redan blivit mörkt. Han har inte sett toppen, men han har hittat en ny favoritförfattare.',
        translation: 'O Linu lê até a biblioteca fechar e esquece completamente o Johan e a vista. Quando sai, já escureceu. Ele não viu o topo, mas encontrou uma nova autora favorita.',
        ending: { tone: 'neutro', title: 'Perdido nos livros', message: 'Nada contra um bom livro, mas a vista lá de cima ficou para outra vez!' },
      },
    },
  },
  // ───────────────────────── B2.2 ─────────────────────────
  {
    id: 'sv-h28',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Marknaden i Jokkmokk',
    emoji: '🦌',
    summary: 'O Linu troca e-mails com a organização da feira de inverno de Jokkmokk e aprende a fotografar e escrever com respeito.',
    cultural_context:
      'A feira de inverno de Jokkmokk, na Lapônia sueca, acontece desde 1605, na primeira semana de fevereiro. É um encontro importante do povo sámi, com artesanato tradicional (duodji), carne de rena e corrida de renas; o respeitoso é sempre pedir licença antes de fotografar alguém.',
    start: 'start',
    glossary: [
      ['kansliet', 'a secretaria, o escritório'],
      ['ackreditering', 'credenciamento'],
      ['vi ber dig att…', 'pedimos que você…'],
      ['Med vänliga hälsningar', 'Atenciosamente (fecho de e-mail)'],
      ['duodji', 'artesanato sámi (palavra sámi)'],
      ['Sápmi', 'a terra dos sámis (norte da Noruega, Suécia, Finlândia e Rússia)'],
      ['Högaktningsfullt', 'Respeitosamente (fecho antiquado)'],
    ],
    nodes: {
      start: {
        emoji: '📧',
        text: 'Linu vill besöka Jokkmokks marknad i februari och skriva en artikel om den för en brasiliansk tidning. Han skickar ett mejl till marknadens kansli och frågar om det krävs ackreditering för att fotografera. Två dagar senare får han svar.',
        translation: 'O Linu quer visitar a feira de Jokkmokk em fevereiro e escrever uma matéria sobre ela para um jornal brasileiro. Ele manda um e-mail para a secretaria da feira perguntando se é preciso credenciamento para fotografar. Dois dias depois, recebe a resposta.',
        choices: [{ text: 'Linu öppnar svaret.', translation: 'O Linu abre a resposta.', next: 'svar' }],
      },
      svar: {
        emoji: '📨',
        text: '«Hej Linu, och tack för ditt mejl! Ackreditering behövs inte, men vi ber dig att alltid fråga innan du fotograferar enskilda personer. Varmt välkommen till Jokkmokk! Med vänliga hälsningar, Kansliet»',
        translation: '«Olá, Linu, e obrigado pelo seu e-mail! Não é preciso credenciamento, mas pedimos que você sempre pergunte antes de fotografar alguém. Seja muito bem-vindo a Jokkmokk! Atenciosamente, A Secretaria»',
        choices: [
          { text: 'Linu svarar kort och tackar för informationen.', translation: 'O Linu responde brevemente e agradece pela informação.', next: 'resa' },
          {
            text: 'Linu fyller i en ansökan om ackreditering.',
            translation: 'O Linu preenche um pedido de credenciamento.',
            wrong: 'O e-mail diz «Ackreditering behövs inte» — credenciamento NÃO é necessário. O que eles pedem («vi ber dig») é que ele sempre pergunte antes de fotografar alguém.',
          },
        ],
      },
      resa: {
        emoji: '❄️',
        text: 'Marknaden hålls första veckan i februari, och i år är det trettio minusgrader. Längs gatorna säljs renskinn, knivar, torkat renkött och slöjd i björk och horn. Linu stannar vid ett stånd där en äldre kvinna säljer vävda band i starka färger.',
        translation: 'A feira acontece na primeira semana de fevereiro, e este ano faz trinta graus negativos. Pelas ruas vendem-se peles de rena, facas, carne de rena seca e artesanato de bétula e chifre. O Linu para numa barraca onde uma senhora vende faixas tecidas em cores fortes.',
        choices: [
          { text: 'Linu frågar om han får fotografera henne.', translation: 'O Linu pergunta se pode fotografá-la.', next: 'fraga' },
          { text: 'Linu tar en bild utan att fråga.', translation: 'O Linu tira uma foto sem perguntar.', next: 'utan' },
        ],
      },
      utan: {
        emoji: '🙅',
        text: 'Kvinnan tittar upp och ser allvarlig ut. Hennes son, som står bredvid, säger vänligt men bestämt att hon inte vill bli fotograferad. Linu raderar bilden och ber om ursäkt.',
        translation: 'A senhora levanta os olhos e fica séria. O filho dela, que está ao lado, diz com gentileza, mas com firmeza, que ela não quer ser fotografada. O Linu apaga a foto e pede desculpas.',
        choices: [{ text: 'Linu frågar i stället om banden.', translation: 'Em vez disso, o Linu pergunta sobre as faixas.', next: 'band' }],
      },
      fraga: {
        emoji: '📷',
        text: 'Kvinnan, som heter Ristin, säger att hon hellre vill att han fotograferar banden än henne själv. Hon berättar att hon lärde sig väva av sin mormor. Mönstren skiljer sig åt mellan olika delar av Sápmi.',
        translation: 'A senhora, que se chama Ristin, diz que prefere que ele fotografe as faixas, e não ela. Ela conta que aprendeu a tecer com a avó. Os desenhos variam entre as diferentes partes de Sápmi.',
        choices: [{ text: 'Linu fotograferar banden och frågar vad mönstren betyder.', translation: 'O Linu fotografa as faixas e pergunta o que os desenhos significam.', next: 'band' }],
      },
      band: {
        emoji: '🧶',
        text: 'Ristin förklarar att duodji, samisk slöjd, ska vara både vacker och användbar. Ett band kan användas till en kolt eller till en väska. Hon säger att hon gärna skulle läsa hans artikel, om han skickade den till henne.',
        translation: 'A Ristin explica que o duodji, o artesanato sámi, deve ser bonito e útil ao mesmo tempo. Uma faixa pode ser usada numa roupa tradicional ou numa bolsa. Ela diz que gostaria de ler a matéria dele, se ele a mandasse para ela.',
        choices: [
          { text: 'Linu ber om hennes e-postadress.', translation: 'O Linu pede o e-mail dela.', next: 'epost' },
          {
            text: 'Linu skriver i sitt block att duodji bara är till prydnad.',
            translation: 'O Linu anota no caderno que o duodji é só enfeite.',
            wrong: 'A Ristin explicou que o duodji deve ser «både vacker och användbar» — bonito E útil. Não é só enfeite: uma faixa serve para a roupa ou para uma bolsa.',
          },
        ],
      },
      epost: {
        emoji: '⌨️',
        text: 'Hemma i Brasilien skriver Linu ett mejl till Ristin och bifogar artikeln. Han funderar länge på hur man inleder och avslutar ett lite formellt mejl på svenska. Till slut väljer han mellan två versioner.',
        translation: 'De volta ao Brasil, o Linu escreve um e-mail para a Ristin com a matéria em anexo. Ele pensa muito em como começar e terminar um e-mail meio formal em sueco. No fim, fica entre duas versões.',
        choices: [
          { text: '«Hej Ristin! Här kommer artikeln, som jag lovade. Med vänliga hälsningar, Linu»', translation: '«Olá, Ristin! Aqui está a matéria, como prometi. Atenciosamente, Linu»', next: 'final_bom' },
          { text: '«Ärade fru Ristin! Härmed översändes artikeln. Högaktningsfullt, Linu»', translation: '«Prezada senhora Ristin! Pela presente, envia-se a matéria. Respeitosamente, Linu»', next: 'final_stel' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Ristin svarar redan samma kväll. Hon skriver att artikeln var respektfull och att hon har visat den för hela familjen. «Välkommen tillbaka nästa år», avslutar hon.',
        translation: 'A Ristin responde na mesma noite. Ela escreve que a matéria foi respeitosa e que mostrou para a família toda. «Bem-vindo de volta no ano que vem», conclui ela.',
        ending: { tone: 'bom', title: 'Com respeito', message: 'O Linu perguntou antes de fotografar, escutou a Ristin e escreveu um e-mail no tom certo: cordial, com «du».' },
      },
      final_stel: {
        emoji: '🎩',
        text: 'Ristin svarar vänligt, men hon undrar om Linu har läst för många gamla brev. «Här i Sverige säger vi du till alla, även till äldre», skriver hon. Linu skrattar och lovar att skriva mer avslappnat nästa gång.',
        translation: 'A Ristin responde com simpatia, mas pergunta se o Linu não andou lendo cartas antigas demais. «Aqui na Suécia a gente trata todo mundo por você, até os mais velhos», escreve ela. O Linu ri e promete escrever de modo mais descontraído da próxima vez.',
        ending: { tone: 'neutro', title: 'Formal demais', message: 'Depois da reforma do «du», quase todo mundo se trata por «du» na Suécia. «Högaktningsfullt» e «Härmed översändes» soam de outro século!' },
      },
    },
  },
  {
    id: 'sv-h29',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Sommarjobb på Smögen',
    emoji: '🦐',
    summary: 'O Linu se candidata a um emprego de verão numa peixaria do cais de Smögen: anúncio, candidatura, entrevista e oferta.',
    cultural_context:
      'Smögen é um antigo vilarejo de pescadores na costa de Bohuslän, no oeste da Suécia, famoso pelo longo cais de madeira Smögenbryggan e pelos frutos do mar, como camarões e lagostins (havskräftor). No verão, o lugar se enche de turistas.',
    start: 'start',
    glossary: [
      ['ansökan', 'a candidatura'],
      ['senast', 'no máximo até, o mais tardar'],
      ['meriterande', 'desejável, conta a favor'],
      ['säsongsanställning', 'emprego temporário, de temporada'],
      ['från och med… till och med…', 'de… até… (inclusive)'],
      ['bekräfta', 'confirmar'],
      ['intyg', 'atestado, carta de referência'],
      ['havskräftor', 'lagostins'],
    ],
    nodes: {
      start: {
        emoji: '📰',
        text: 'Linu läser en annons på nätet: «Fiskaffär på Smögenbryggan söker säsongspersonal till sommaren. Ansökan skickas senast den 15 april. Erfarenhet av kundservice är meriterande.» Linu har jobbat på ett kafé i São Paulo och bestämmer sig för att söka.',
        translation: 'O Linu lê um anúncio na internet: «Peixaria no cais de Smögen procura funcionários temporários para o verão. A candidatura deve ser enviada até 15 de abril. Experiência com atendimento ao cliente é desejável.» O Linu trabalhou num café em São Paulo e decide se candidatar.',
        choices: [
          { text: 'Linu skriver sin ansökan samma dag.', translation: 'O Linu escreve a candidatura no mesmo dia.', next: 'ansokan' },
          {
            text: 'Linu väntar till början av maj med att skicka ansökan.',
            translation: 'O Linu espera até o começo de maio para mandar a candidatura.',
            wrong: 'O anúncio diz que a candidatura deve ser enviada «senast den 15 april» — até 15 de abril, NO MÁXIMO. Em maio já seria tarde demais.',
          },
        ],
      },
      ansokan: {
        emoji: '✉️',
        text: '«Hej! Jag söker tjänsten som säsongsanställd i er fiskaffär. Jag har två års erfarenhet av kundservice och talar portugisiska, engelska och svenska. Jag ser fram emot att höra från er.» Linu bifogar sitt CV och trycker på skicka.',
        translation: '«Olá! Candidato-me à vaga de funcionário temporário na peixaria de vocês. Tenho dois anos de experiência em atendimento ao cliente e falo português, inglês e sueco. Aguardo o retorno de vocês.» O Linu anexa o currículo e clica em enviar.',
        choices: [{ text: 'Linu väntar på svar.', translation: 'O Linu espera a resposta.', next: 'intervju' }],
      },
      intervju: {
        emoji: '💻',
        text: 'En vecka senare blir Linu kallad till en intervju via videolänk. Butikschefen Tove frågar varför han vill jobba just på Smögen. Hon påpekar att arbetsdagarna är långa och att det kan bli väldigt mycket folk på bryggan.',
        translation: 'Uma semana depois, o Linu é chamado para uma entrevista por vídeo. A gerente da loja, Tove, pergunta por que ele quer trabalhar justamente em Smögen. Ela avisa que os dias de trabalho são longos e que o cais pode ficar muito cheio.',
        choices: [
          {
            text: '«Jag trivs när det är mycket att göra, och jag vill lära mig mer om svenska skaldjur.»',
            translation: '«Eu gosto quando tem muito o que fazer, e quero aprender mais sobre os frutos do mar suecos.»',
            next: 'fragor',
          },
          { text: '«Ärligt talat vill jag mest bada och sola.»', translation: '«Sinceramente, eu quero mais é nadar e tomar sol.»', next: 'final_sol' },
        ],
      },
      fragor: {
        emoji: '🗣️',
        text: 'Tove ser nöjd ut och frågar om Linu har några frågor. Linu vill veta mer om arbetstider och lön. Men han vet inte riktigt hur han ska formulera sig i en intervju.',
        translation: 'A Tove parece satisfeita e pergunta se o Linu tem alguma pergunta. O Linu quer saber mais sobre horários e salário. Mas ele não sabe muito bem como se expressar numa entrevista.',
        choices: [
          { text: '«Skulle du kunna berätta lite om arbetstiderna och lönen?»', translation: '«Você poderia me contar um pouco sobre os horários e o salário?»', next: 'erbjudande' },
          {
            text: '«Hur mycket betalar ni? Säg en siffra!»',
            translation: '«Quanto vocês pagam? Fala um número!»',
            wrong: 'Na Suécia se usa «du» até com a chefe, mas uma entrevista pede cortesia: «Skulle du kunna…?» («Você poderia…?») soa educado; «Säg en siffra!» soa ríspido.',
          },
        ],
      },
      erbjudande: {
        emoji: '📩',
        text: 'Två dagar senare kommer ett mejl med rubriken «Erbjudande om säsongsanställning». Där står det att anställningen gäller från och med den 20 juni till och med den 15 augusti. Linu ombeds att bekräfta erbjudandet senast på fredag.',
        translation: 'Dois dias depois chega um e-mail com o assunto «Oferta de emprego temporário». Nele está escrito que o contrato vale de 20 de junho até 15 de agosto, inclusive. Pede-se ao Linu que confirme a oferta até sexta-feira.',
        choices: [
          { text: 'Linu bekräftar direkt och tackar för förtroendet.', translation: 'O Linu confirma na hora e agradece pela confiança.', next: 'bryggan' },
          {
            text: 'Linu tror att jobbet börjar i augusti.',
            translation: 'O Linu acha que o trabalho começa em agosto.',
            wrong: 'O e-mail diz «från och med den 20 juni till och med den 15 augusti» — de 20 de junho ATÉ 15 de agosto (inclusive). Agosto é quando o trabalho termina.',
          },
        ],
      },
      bryggan: {
        emoji: '⚓',
        text: 'I juni står Linu bakom disken i fiskaffären med förkläde och gummistövlar. Han lär sig skilja på räkor, havskräftor och hummer, och kunderna berömmer hans svenska. En kväll efter stängning ser han solen gå ner över havet från bryggan.',
        translation: 'Em junho, o Linu está atrás do balcão da peixaria, de avental e galochas. Ele aprende a diferenciar camarão, lagostim e lagosta, e os clientes elogiam o sueco dele. Numa noite, depois do expediente, ele vê o sol se pôr sobre o mar, do cais.',
        choices: [{ text: 'Linu stannar kvar och njuter av kvällen.', translation: 'O Linu fica e aproveita a noite.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Den sista arbetsdagen får Linu ett intyg av Tove. Där står det att han har varit «en noggrann och serviceinriktad medarbetare». Linu ramar in det och ställer det på hyllan.',
        translation: 'No último dia de trabalho, o Linu recebe uma carta de referência da Tove. Nela está escrito que ele foi «um funcionário cuidadoso e atencioso com os clientes». O Linu põe o papel num porta-retratos na estante.',
        ending: { tone: 'bom', title: 'Verão no cais', message: 'O Linu entendeu o anúncio, escreveu no tom certo e passou um verão inteiro entre camarões e pores do sol.' },
      },
      final_sol: {
        emoji: '🏖️',
        text: 'Tove tackar artigt för samtalet men säger att hon har många sökande. En vecka senare får Linu ett kort mejl: «Tyvärr har vi valt att gå vidare med andra kandidater.» Han åker till Smögen ändå, men bara för att bada.',
        translation: 'A Tove agradece educadamente pela conversa, mas diz que tem muitos candidatos. Uma semana depois, o Linu recebe um e-mail curto: «Infelizmente, decidimos seguir com outros candidatos.» Ele vai a Smögen mesmo assim, mas só para nadar.',
        ending: { tone: 'neutro', title: 'Só de férias', message: 'Sinceridade é bom, mas numa entrevista vale mostrar interesse pelo trabalho. Tente de novo!' },
      },
    },
  },
  {
    id: 'sv-h30',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Konserten i Sigtuna',
    emoji: '🎻',
    summary: 'Para organizar um concerto de música folclórica num parque de Sigtuna, o Linu e a Ebba enfrentam formulários, decisões e condições.',
    cultural_context:
      'Sigtuna, às margens do lago Mälaren, foi fundada por volta do ano 980 e é considerada a cidade mais antiga da Suécia que ainda existe. A nyckelharpa, instrumento de cordas com teclas, é um dos símbolos da música folclórica sueca.',
    start: 'start',
    glossary: [
      ['tillstånd', 'autorização, licença'],
      ['offentlig tillställning', 'evento público'],
      ['sökande', 'requerente, quem faz o pedido'],
      ['beslut', 'decisão'],
      ['beviljas', 'é concedido'],
      ['överklagas', 'ser objeto de recurso'],
      ['under förutsättning att', 'desde que, com a condição de que'],
      ['spelman', 'músico folclórico (plural: spelmän)'],
    ],
    nodes: {
      start: {
        emoji: '🌳',
        text: 'Linu och hans vän Ebba vill ordna en gratis konsert med folkmusik i en park i Sigtuna i augusti. Ebba säger att man behöver tillstånd från polisen för att hålla en offentlig tillställning. «Och vi måste nog fråga kommunen om vi får använda parken», lägger hon till.',
        translation: 'O Linu e a amiga Ebba querem organizar um concerto gratuito de música folclórica num parque de Sigtuna, em agosto. A Ebba diz que é preciso autorização da polícia para realizar um evento público. «E acho que temos que perguntar à prefeitura se podemos usar o parque», acrescenta ela.',
        choices: [
          { text: 'Linu letar upp ansökningsblanketten på polisens webbplats.', translation: 'O Linu procura o formulário de solicitação no site da polícia.', next: 'blankett' },
          { text: 'Linu tycker att de kan strunta i tillståndet.', translation: 'O Linu acha que eles podem ignorar a autorização.', next: 'strunta' },
        ],
      },
      strunta: {
        emoji: '🙄',
        text: 'Ebba skakar på huvudet. «Om polisen kommer och stoppar konserten, har vi gjort allt arbete i onödan», säger hon. Linu inser att hon har rätt.',
        translation: 'A Ebba balança a cabeça. «Se a polícia vier e interromper o concerto, teremos feito todo o trabalho à toa», diz ela. O Linu percebe que ela tem razão.',
        choices: [{ text: 'Linu letar upp blanketten.', translation: 'O Linu procura o formulário.', next: 'blankett' }],
      },
      blankett: {
        emoji: '📋',
        text: 'Blanketten är full av ord som Linu aldrig har sett: «sökande», «arrangör» och «beräknat antal besökare». Ebba förklarar att ansökan ska lämnas in i god tid före evenemanget. Under rubriken «Ärendet avser» skriver de: «Konsert med folkmusik i parken den 20 augusti, kl. 18–21».',
        translation: 'O formulário está cheio de palavras que o Linu nunca viu: «requerente», «organizador» e «número estimado de visitantes». A Ebba explica que o pedido deve ser entregue com bastante antecedência. No campo «Assunto» eles escrevem: «Concerto de música folclórica no parque em 20 de agosto, das 18h às 21h».',
        choices: [
          { text: 'De skickar in ansökan redan i juni.', translation: 'Eles enviam o pedido já em junho.', next: 'svar' },
          {
            text: 'De skriver namnet på musikgruppen under «sökande».',
            translation: 'Eles escrevem o nome do grupo musical no campo «requerente».',
            wrong: '«Sökande» é quem faz o pedido — o requerente, ou seja, eles mesmos. É uma palavra típica da linguagem de repartição (de «söka», solicitar).',
          },
        ],
      },
      svar: {
        emoji: '📬',
        text: 'I juli kommer ett brev från polisen. Där står det: «Beslut: Tillstånd beviljas under förutsättning att arrangören ansvarar för städning efter evenemanget.» Längre ner står det att beslutet kan överklagas inom tre veckor.',
        translation: 'Em julho chega uma carta da polícia. Nela está escrito: «Decisão: A autorização é concedida, desde que o organizador se responsabilize pela limpeza após o evento.» Mais abaixo consta que cabe recurso contra a decisão em até três semanas.',
        choices: [
          { text: 'Linu och Ebba jublar och börjar planera.', translation: 'O Linu e a Ebba comemoram e começam a planejar.', next: 'plan' },
          {
            text: 'Linu tror att ansökan har avslagits och vill överklaga.',
            translation: 'O Linu acha que o pedido foi negado e quer recorrer.',
            wrong: '«Tillstånd beviljas» significa «a autorização É CONCEDIDA». O contrário seria «avslås» (é negada). A única condição é que eles limpem tudo depois.',
          },
        ],
      },
      plan: {
        emoji: '💌',
        text: 'Ebba skriver till kommunen: «Hej! Vi har fått polisens tillstånd och undrar om vi får låna parken och några bänkar den 20 augusti. Tacksam för svar. Vänliga hälsningar, Ebba och Linu.» Kommunen svarar att bänkarna kan hämtas på förrådet dagen innan.',
        translation: 'A Ebba escreve à prefeitura: «Olá! Recebemos a autorização da polícia e gostaríamos de saber se podemos usar o parque e alguns bancos no dia 20 de agosto. Agradecemos a resposta. Atenciosamente, Ebba e Linu.» A prefeitura responde que os bancos podem ser retirados no depósito na véspera.',
        choices: [{ text: 'De bjuder in spelmän från trakten.', translation: 'Eles convidam músicos folclóricos da região.', next: 'konsert' }],
      },
      konsert: {
        emoji: '🎶',
        text: 'På kvällen den 20 augusti spelar tre spelmän nyckelharpa och fiol under de gamla träden. Ett hundratal människor sitter på filtar i gräset, och barnen dansar. Efteråt ligger det papper och muggar överallt.',
        translation: 'Na noite de 20 de agosto, três músicos tocam nyckelharpa e violino debaixo das árvores antigas. Umas cem pessoas estão sentadas em mantas na grama, e as crianças dançam. Depois, há papéis e copos espalhados por toda parte.',
        choices: [
          { text: 'Linu och Ebba städar parken innan de går hem.', translation: 'O Linu e a Ebba limpam o parque antes de ir para casa.', next: 'final_bom' },
          { text: 'De är för trötta och tänker städa i morgon.', translation: 'Eles estão cansados demais e pensam em limpar amanhã.', next: 'final_stad' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Vid midnatt är parken lika ren som innan. Några veckor senare kommer ett mejl från kommunen: «Tack för ett väl genomfört arrangemang. Ni är välkomna att söka igen nästa år.» Ebba och Linu börjar genast planera nästa konsert.',
        translation: 'À meia-noite, o parque está tão limpo quanto antes. Algumas semanas depois chega um e-mail da prefeitura: «Agradecemos pelo evento bem realizado. Vocês são bem-vindos a solicitar novamente no ano que vem.» A Ebba e o Linu começam logo a planejar o próximo concerto.',
        ending: { tone: 'bom', title: 'Música no parque', message: 'O Linu enfrentou a linguagem de repartição, cumpriu a condição da decisão e ainda ganhou um convite para o ano que vem.' },
      },
      final_stad: {
        emoji: '🗑️',
        text: 'På morgonen ringer en tjänsteman från kommunen och påminner om villkoret i beslutet. Linu och Ebba skyndar sig dit med sopsäckar. Nästa år blir det kanske inte lika lätt att få tillstånd.',
        translation: 'De manhã, um funcionário da prefeitura liga e lembra da condição da decisão. O Linu e a Ebba correm para lá com sacos de lixo. No ano que vem, talvez não seja tão fácil conseguir autorização.',
        ending: { tone: 'neutro', title: 'Condição esquecida', message: 'A autorização foi concedida «under förutsättning att» eles limpassem tudo depois. Condição de decisão oficial se cumpre na hora!' },
      },
    },
  },
  // ───────────────────────── B2.3 ─────────────────────────
  {
    id: 'sv-h31',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Ingen ko på isen',
    emoji: '🥐',
    summary: 'No Dia do Kanelbulle, em Haga, Gotemburgo, uma amiga ensina ao Linu expressões idiomáticas, gírias da cidade e o jogo das palavras compostas.',
    cultural_context:
      'O Dia do Kanelbulle (kanelbullens dag) é comemorado na Suécia em 4 de outubro desde 1999. Haga, o bairro antigo de Gotemburgo, é famoso pelos «landshövdingehus», prédios com o térreo de pedra e os andares de cima de madeira, e pelos cafés que vendem kanelbullar do tamanho de um prato.',
    start: 'start',
    glossary: [
      ['ingen ko på isen', 'não tem problema, não há pressa'],
      ['glida in på en räkmacka', 'conseguir algo sem esforço (lit. deslizar num sanduíche de camarão)'],
      ['lägga rabarber på något', 'pôr a mão em algo primeiro, reservar para si'],
      ['ha tummen mitt i handen', 'ser desajeitado'],
      ['gôtt', 'gostoso, bom (pronúncia de Gotemburgo de «gott»)'],
      ['ball', 'legal, massa (gíria de Gotemburgo)'],
      ['ett sammansatt ord', 'uma palavra composta'],
      ['på stående fot', 'na hora, ali mesmo'],
    ],
    nodes: {
      start: {
        emoji: '☕',
        text: 'Det är den fjärde oktober, kanelbullens dag, och Linu har tagit spårvagnen till Haga i Göteborg. Längs Haga Nygata trängs folk utanför kaféerna, och i ett skyltfönster ligger bullar som är stora som tallrikar. Hans vän Elin, en äkta göteborgare, väntar redan med två koppar kaffe i händerna. «Idag ska du få fika på riktigt», säger hon, «och sedan ska jag lära dig prata som en göteborgare.»',
        translation:
          'É dia quatro de outubro, o Dia do Kanelbulle, e o Linu pegou o bonde até Haga, em Gotemburgo. Ao longo da Haga Nygata, as pessoas se apertam na frente dos cafés, e numa vitrine há pães doces do tamanho de pratos. A amiga dele, Elin, uma gotemburguesa legítima, já está esperando com dois cafés nas mãos. «Hoje você vai fazer fika de verdade», diz ela, «e depois vou te ensinar a falar como um gotemburguês.»',
        choices: [
          { text: 'Gå raka vägen in och beställa en jättebulle.', translation: 'Entrar direto e pedir um pão doce gigante.', next: 'bulle' },
          { text: 'Be Elin börja med göteborgskan.', translation: 'Pedir à Elin que comece pelo jeito de falar de Gotemburgo.', next: 'gotebg' },
        ],
      },
      bulle: {
        emoji: '🥐',
        text: 'Bullen är så stor att Linu måste hålla den med båda vingarna, och pärlsockret knastrar mot näbben. «Hur ska jag någonsin orka äta upp den här?» suckar han. Elin skrattar och sopar bort sockerkorn från bordet med handen. «Ta det lugnt, det är ingen ko på isen: vi har hela eftermiddagen, och det du inte orkar tar vi med oss hem.»',
        translation:
          'O pão é tão grande que o Linu precisa segurá-lo com as duas asas, e o açúcar em grãos estala contra o bico. «Como é que eu vou conseguir comer isto tudo?», suspira ele. A Elin ri e varre com a mão os grãos de açúcar da mesa. «Calma, não tem problema nenhum: temos a tarde inteira, e o que você não aguentar a gente leva para casa.»',
        choices: [
          { text: 'Fråga vad kor har med fika att göra.', translation: 'Perguntar o que vacas têm a ver com fika.', next: 'ko' },
          {
            text: 'Titta oroligt ut genom fönstret efter kon på isen.',
            translation: 'Olhar preocupado pela janela procurando a vaca no gelo.',
            wrong: 'A Elin não falou de vaca nenhuma de verdade: «det är ingen ko på isen» é uma expressão idiomática que quer dizer «não tem problema, não há pressa». Ela está dizendo que o Linu pode comer com calma.',
          },
        ],
      },
      ko: {
        emoji: '🐄',
        text: '«Förr i tiden var det farligt om en ko gick ut på isen, eftersom isen kunde brista», förklarar Elin. «Egentligen lyder uttrycket “ingen ko på isen så länge rumpan är i land”: så länge djuret står med bakdelen på stranden finns det ingen fara.» Linu skrattar så att smulorna yr och skriver ner uttrycket i sitt anteckningsblock. «Svenska idiom är ju små berättelser», säger han, och Elin nickar belåtet.',
        translation:
          '«Antigamente era perigoso se uma vaca saía para o gelo, porque o gelo podia quebrar», explica a Elin. «Na verdade, a expressão completa é “nenhuma vaca no gelo enquanto o traseiro estiver em terra”: enquanto o bicho estiver com a parte de trás na margem, não há perigo.» O Linu ri tanto que as migalhas voam, e anota a expressão no caderninho. «As expressões suecas são pequenas histórias», diz ele, e a Elin concorda, satisfeita.',
        choices: [{ text: 'Be om fler ord, nu på göteborgska.', translation: 'Pedir mais palavras, agora no jeito de Gotemburgo.', next: 'gotebg' }],
      },
      gotebg: {
        emoji: '🗣️',
        text: '«Här i stan säger vi inte bara “gott”, vi säger “gôtt”, och när något är riktigt häftigt är det “ball”», säger Elin. Hon berättar att göteborgarna också är kända för sina vitsar, korta skämt som bygger på ordlekar och som resten av Sverige stönar åt. «Och så älskar vi sammansatta ord, precis som alla svenskar», fortsätter hon. «Kan du bygga ett riktigt långt ord med “bulle” i?»',
        translation:
          '«Aqui na cidade a gente não diz só “gott”, diz “gôtt”, e quando uma coisa é muito legal ela é “ball”», diz a Elin. Ela conta que os gotemburgueses também são famosos pelos seus trocadilhos, piadas curtas feitas de jogos de palavras que o resto da Suécia recebe com um gemido. «E a gente adora palavras compostas, como todos os suecos», continua. «Você consegue montar uma palavra bem comprida com “bulle”?»',
        choices: [{ text: 'Anta utmaningen.', translation: 'Aceitar o desafio.', next: 'sammansatt' }],
      },
      sammansatt: {
        emoji: '🧩',
        text: 'Linu funderar och bygger bit för bit: kanel, bulle, bagare, lärling. «En kanelbullsbagarlärling!» utropar han stolt, och Elin applåderar. «Bra, och glöm inte fogen: det heter kanelbull-s-bagare, med ett litet s i mitten», säger hon. «Kom ihåg att det är sista ledet som bestämmer vad ordet betyder: en bullbagare är en person, men en bagarbulle är en bulle.»',
        translation:
          'O Linu pensa e monta pedaço por pedaço: canela, pão doce, padeiro, aprendiz. «Um aprendiz de padeiro de pão de canela!», exclama orgulhoso, e a Elin aplaude. «Muito bem, e não esqueça a junta: é kanelbull-s-bagare, com um s pequenininho no meio», diz ela. «Lembre que é a última parte que decide o que a palavra significa: um «bullbagare» é uma pessoa, mas um «bagarbulle» é um pão.»',
        choices: [
          {
            text: '«Alltså är en kanelbullsbagarlärling någon som lär sig baka kanelbullar.»',
            translation: '«Então um kanelbullsbagarlärling é alguém que está aprendendo a fazer pães de canela.»',
            next: 'rakmacka',
          },
          {
            text: '«Alltså är en bullbagare ett slags bulle.»',
            translation: '«Então um bullbagare é um tipo de pão doce.»',
            wrong: 'A Elin acabou de explicar que, nas palavras compostas suecas, quem manda é a ÚLTIMA parte: «en bullbagare» é um padeiro (bagare) que faz pães doces; um pão seria «en bagarbulle».',
          },
        ],
      },
      rakmacka: {
        emoji: '🦐',
        text: 'Just då kommer Jonte, Elins kusin, fram till bordet i ett förkläde fullt av mjöl. Han berättar att han fick jobbet på kaféet utan att ens söka det: ägaren hörde honom sjunga i kön och anställde honom på stående fot. «Han gled in på en räkmacka», viskar Elin, «det betyder att han fick något utan att anstränga sig.» Jonte himlar med ögonen, men sedan ler han och säger att bageriet på baksidan behöver hjälp idag.',
        translation:
          'Nesse momento chega à mesa o Jonte, primo da Elin, com um avental cheio de farinha. Ele conta que conseguiu o emprego no café sem nem se candidatar: o dono o ouviu cantando na fila e o contratou ali mesmo. «Ele deslizou num sanduíche de camarão», cochicha a Elin, «quer dizer que ele conseguiu uma coisa sem fazer esforço.» O Jonte revira os olhos, mas depois sorri e diz que a padaria dos fundos está precisando de ajuda hoje.',
        choices: [
          { text: 'Erbjuda sig att hjälpa till i bageriet.', translation: 'Oferecer-se para ajudar na padaria.', next: 'bageri' },
          { text: 'Tacka nej och stanna kvar vid bordet med resten av bullen.', translation: 'Recusar e ficar à mesa com o resto do pão.', next: 'final_neutro' },
        ],
      },
      bageri: {
        emoji: '🧑‍🍳',
        text: 'I bageriet är det varmt som i en bastu, och degen till hundratals bullar jäser under linnehanddukar. Jonte visar hur man kavlar ut degen, breder på smör, socker och kanel och rullar ihop alltihop. I början har Linu tummen mitt i handen, fast han inte ens har några tummar, men den tredje längden blir nästan perfekt. När den sista plåten kommer ut ur ugnen ligger en enda jättebulle kvar, och Jonte frågar: «Vill du lägga rabarber på den?»',
        translation:
          'Na padaria está quente como numa sauna, e a massa de centenas de pães cresce debaixo de panos de linho. O Jonte mostra como abrir a massa com o rolo, passar manteiga, açúcar e canela e enrolar tudo. No começo o Linu é um desastre (sem nem ter polegares), mas o terceiro rolo sai quase perfeito. Quando a última assadeira sai do forno, sobra um único pão gigante, e o Jonte pergunta: «Quer pôr a mão nele?»',
        choices: [
          { text: '«Ja, den tar jag – den ska till Elin!»', translation: '«Sim, esse é meu – vai para a Elin!»', next: 'final_bom' },
          {
            text: '«Rabarber? Nej tack, jag vill inte ha någon rabarberpaj.»',
            translation: '«Ruibarbo? Não, obrigado, não quero torta de ruibarbo.»',
            wrong: 'Ninguém falou de torta: «lägga rabarber på något» é uma expressão que quer dizer «pôr a mão em algo primeiro, reservar para si». O Jonte está perguntando se o Linu quer ficar com o último pão gigante.',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu bär ut jättebullen på en tallrik som om den vore en krona, och Elin skrattar så att hon nästan spiller kaffet. «Har du bakat den själv? Det är ju hur ball som helst!» säger hon. Resten av eftermiddagen delar de på bullen, och Linu testar sina nya uttryck på varenda gäst som går förbi. När de går hem i skymningen luktar hans fjädrar kanel, och anteckningsblocket är fullt av idiom.',
        translation:
          'O Linu leva o pão gigante num prato como se fosse uma coroa, e a Elin ri tanto que quase derrama o café. «Você mesmo fez? Isso é legal demais!», diz ela. O resto da tarde eles dividem o pão, e o Linu testa as expressões novas em cada cliente que passa. Quando voltam para casa ao anoitecer, as penas dele cheiram a canela, e o caderninho está cheio de expressões idiomáticas.',
        ending: { tone: 'bom', title: 'Gotemburguês honorário', message: 'Você entendeu as expressões idiomáticas, montou palavras compostas e ainda assou o seu próprio kanelbulle.' },
      },
      final_neutro: {
        emoji: '😮‍💨',
        text: 'Linu stannar kvar vid bordet och kämpar vidare med bullen, bit för bit, medan Elin drar den ena göteborgsvitsen efter den andra. När solen går ned över Haga har han ätit upp nästan allt, men magen protesterar högljutt. «Det var gôtt, men nu orkar jag inte titta på en kanelbulle på ett helt år», stönar han. Elin klappar honom på vingen och lovar att bageriet finns kvar till nästa kanelbullens dag.',
        translation:
          'O Linu fica à mesa e continua lutando com o pão, pedaço por pedaço, enquanto a Elin conta um trocadilho de Gotemburgo atrás do outro. Quando o sol se põe sobre Haga, ele comeu quase tudo, mas a barriga reclama em voz alta. «Estava gostoso, mas agora não consigo nem olhar para um kanelbulle por um ano inteiro», geme ele. A Elin dá um tapinha na asa dele e promete que a padaria vai continuar lá no próximo Dia do Kanelbulle.',
        ending: { tone: 'neutro', title: 'Barriga cheia, caderno pela metade', message: 'Você aprendeu as expressões, mas ficou fora da padaria. Fica para o próximo Dia do Kanelbulle!' },
      },
    },
  },
  {
    id: 'sv-h32',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Inget dåligt väder',
    emoji: '🥾',
    summary: 'Na Kungsleden, a Trilha do Rei na Lapônia sueca, um guia de poucas palavras ensina ao Linu expressões idiomáticas — cada uma na hora certa da caminhada.',
    cultural_context:
      'A Kungsleden é uma trilha de cerca de 440 km entre Abisko e Hemavan, no norte da Suécia, com cabanas de montanha pelo caminho; no verão, acima do Círculo Polar, o sol da meia-noite não se põe. Graças ao allemansrätten, o «direito de todos», qualquer pessoa pode caminhar e acampar na natureza, desde que respeite a terra, os animais e as renas criadas pelos sámi.',
    start: 'start',
    glossary: [
      ['det finns inget dåligt väder, bara dåliga kläder', 'não existe tempo ruim, só roupa ruim'],
      ['ta sig vatten över huvudet', 'dar um passo maior que a perna'],
      ['gå över ån efter vatten', 'complicar o que é simples (lit. atravessar o rio para buscar água)'],
      ['ha is i magen', 'manter a calma (lit. ter gelo na barriga)'],
      ['hals över huvud', 'às pressas, de qualquer jeito'],
      ['en jokk', 'um riacho de montanha (palavra do norte, de origem sámi)'],
      ['ett regnställ', 'um conjunto de roupa de chuva'],
      ['nu är det kört', 'agora já era (coloquial)'],
    ],
    nodes: {
      start: {
        emoji: '🏔️',
        text: 'I början av juli står Linu vid starten av Kungsleden i Abisko, med en ryggsäck som är nästan lika stor som han själv. Hans guide, Nils, är en fåordig fjällman med ett skägg lika grått som fjällen och ett leende som kommer sällan men varar länge. Just när de ska gå börjar det regna, och Linu tittar besviket upp mot de tunga molnen. «Det finns inget dåligt väder, bara dåliga kläder», säger Nils och drar upp dragkedjan på sitt regnställ.',
        translation:
          'No começo de julho, o Linu está no início da Kungsleden, em Abisko, com uma mochila quase do tamanho dele. O guia, Nils, é um montanhês de poucas palavras, com uma barba tão cinzenta quanto as montanhas e um sorriso que aparece pouco, mas dura muito. Bem na hora de sair começa a chover, e o Linu olha decepcionado para as nuvens pesadas. «Não existe tempo ruim, só roupa ruim», diz o Nils, e fecha o zíper da roupa de chuva.',
        choices: [
          { text: 'Leta fram regnstället ur ryggsäcken.', translation: 'Procurar a roupa de chuva na mochila.', next: 'packning' },
          {
            text: 'Föreslå att de väntar på bättre väder, precis som Nils vill.',
            translation: 'Sugerir que esperem um tempo melhor, como o Nils quer.',
            wrong: 'O Nils não quer esperar: o ditado «não existe tempo ruim, só roupa ruim» quer dizer que a chuva não é desculpa — basta estar bem vestido. Por isso ele fecha o zíper e segue em frente.',
          },
        ],
      },
      packning: {
        emoji: '🎒',
        text: 'Linu gräver i ryggsäcken och hittar tre par sockor, en kastrull, ett schackspel och en hel burk myggmedel, men inget regnställ. Nils suckar och räcker honom en gammal regnponcho ur sin egen packning. «Myggmedlet var i alla fall klokt, för här uppe är myggen större än du», säger han torrt. «Men schackspelet får du bära själv hela vägen.»',
        translation:
          'O Linu revira a mochila e encontra três pares de meias, uma panela, um jogo de xadrez e um frasco inteiro de repelente, mas nada de roupa de chuva. O Nils suspira e lhe passa um poncho velho da própria bagagem. «O repelente pelo menos foi uma boa ideia, porque aqui em cima os mosquitos são maiores que você», diz ele, seco. «Mas o xadrez você vai carregar sozinho o caminho todo.»',
        choices: [{ text: 'Ta på sig ponchon och gå vidare.', translation: 'Vestir o poncho e seguir caminho.', next: 'an' }],
      },
      an: {
        emoji: '🌊',
        text: 'Efter några timmar kommer de fram till en bred jokk, och Linu börjar genast planera en omväg på flera kilometer för att hitta ett ställe där man kan vada över. Nils pekar tyst på en hängbro femtio meter bort, som glittrar i regnet. «Varför gå över ån efter vatten?» frågar han, och Linu känner hur det hettar under fjädrarna. Han förstår att uttrycket betyder att man krånglar till något som egentligen är enkelt.',
        translation:
          'Depois de algumas horas eles chegam a um riacho largo, e o Linu começa na hora a planejar um desvio de vários quilômetros para achar um lugar onde dê para atravessar a pé. O Nils aponta em silêncio para uma ponte pênsil a cinquenta metros, brilhando na chuva. «Para que atravessar o rio para buscar água?», pergunta, e o Linu sente o calor subir por baixo das penas. Ele entende que a expressão quer dizer complicar uma coisa que, no fundo, é simples.',
        choices: [{ text: 'Gå över hängbron.', translation: 'Atravessar a ponte pênsil.', next: 'renar' }],
      },
      renar: {
        emoji: '🦌',
        text: 'På andra sidan bron betar en stor renhjord i dimman, och en samisk renskötare står en bit bort med sin hund. Nils saktar in och förklarar att man ska hålla avstånd och aldrig skrämma renarna, eftersom de är både djur och levebröd. Plötsligt springer en ung ren rakt mot stigen, och Linu vill fly hals över huvud. «Ha is i magen», viskar Nils, «stå still, så går den förbi.»',
        translation:
          'Do outro lado da ponte, uma grande manada de renas pasta na neblina, e um criador sámi está um pouco afastado com o seu cachorro. O Nils diminui o passo e explica que é preciso manter distância e nunca assustar as renas, porque elas são ao mesmo tempo animais e sustento. De repente uma rena jovem corre direto para a trilha, e o Linu tem vontade de fugir às pressas. «Fique calmo», sussurra o Nils, «fique parado que ela passa.»',
        choices: [
          { text: 'Stå alldeles stilla och vänta.', translation: 'Ficar totalmente parado e esperar.', next: 'sol' },
          {
            text: 'Äta en näve snö, eftersom Nils vill att han ska få is i magen.',
            translation: 'Comer um punhado de neve, já que o Nils quer que ele tenha gelo na barriga.',
            wrong: '«Ha is i magen» não tem nada a ver com comer gelo: quer dizer «manter a calma, ter sangue-frio». O Nils está pedindo que o Linu fique tranquilo e parado para a rena passar.',
          },
        ],
      },
      sol: {
        emoji: '🌅',
        text: 'Renen travar förbi så nära att Linu känner doften av mossa, och renskötaren höjer handen till tack. På kvällen, när de når fjällstugan, har himlen spruckit upp och midnattssolen lyser orange över topparna. Linu är så upprymd att han föreslår att de ska gå hela vägen till Kebnekaise redan i natt, eftersom det ändå aldrig blir mörkt. Nils höjer ett buskigt ögonbryn och frågar om han verkligen vill ta sig vatten över huvudet.',
        translation:
          'A rena passa trotando tão perto que o Linu sente o cheiro de musgo, e o criador levanta a mão em agradecimento. À noite, quando chegam à cabana, o céu se abriu e o sol da meia-noite brilha laranja sobre os picos. O Linu está tão animado que sugere irem até o Kebnekaise ainda esta noite, já que de qualquer jeito nunca escurece. O Nils levanta uma sobrancelha espessa e pergunta se ele quer mesmo dar um passo maior que a perna.',
        choices: [
          { text: '«Du har rätt. Vi tar det lugnt och bastar i stället.»', translation: '«Você tem razão. Vamos com calma e fazer sauna.»', next: 'stuga' },
          { text: '«Nej då, jag klarar det! Vi går nu.»', translation: '«Que nada, eu dou conta! Vamos agora.»', next: 'natt' },
        ],
      },
      stuga: {
        emoji: '🛖',
        text: 'Fjällstugans vedeldade bastu ligger nere vid sjön, och efter bastun doppar sig Linu i det iskalla vattnet medan Nils ropar uppmuntrande från bryggan. Sedan sitter de i stugan och dricker blåbärssoppa, och en tysk vandrare lär Linu ett nytt kortspel. I gästboken har någon skrivit: «Den som väntar på något gott väntar aldrig för länge.» Linu skriver själv, med stora bokstäver: «Inget dåligt väder, bara dåliga kläder – och ett onödigt schackspel.»',
        translation:
          'A sauna a lenha da cabana fica lá embaixo, perto do lago, e depois da sauna o Linu mergulha na água gelada enquanto o Nils grita incentivos do trapiche. Depois eles se sentam na cabana e tomam sopa de mirtilo, e um caminhante alemão ensina ao Linu um jogo de cartas novo. No livro de visitas alguém escreveu: «Quem espera por algo bom nunca espera demais.» O Linu escreve, com letras grandes: «Não existe tempo ruim, só roupa ruim – e um xadrez desnecessário.»',
        choices: [{ text: 'Gå och lägga sig för att orka nästa dag.', translation: 'Ir dormir para ter forças no dia seguinte.', next: 'final_bom' }],
      },
      natt: {
        emoji: '🌫️',
        text: 'De hinner gå i två timmar innan dimman kommer tillbaka, tät som gröt, och stigen försvinner under Linus fötter. Han blir blöt, trött och sur, och till slut sätter han sig på en sten och erkänner: «Nu är det kört.» Nils sätter sig bredvid honom, skruvar av locket på termosen och säger lugnt att det inte är kört förrän han själv säger det. Sedan vänder de tillsammans tillbaka mot stugan, långsamt och ödmjukt.',
        translation:
          'Eles conseguem andar duas horas antes de a neblina voltar, espessa como mingau, e a trilha some debaixo dos pés do Linu. Ele fica molhado, cansado e mal-humorado, e por fim senta numa pedra e admite: «Agora já era.» O Nils se senta ao lado dele, desenrosca a tampa da garrafa térmica e diz com calma que só “já era” quando ele mesmo disser. Depois os dois voltam juntos para a cabana, devagar e com humildade.',
        choices: [{ text: 'Följa Nils tillbaka till stugan.', translation: 'Seguir o Nils de volta à cabana.', next: 'final_neutro' }],
      },
      final_bom: {
        emoji: '🏅',
        text: 'Dagarna går, och varje dag lär sig Linu ett nytt uttryck och en ny sak om fjället: att jokkarna är kallast på morgonen, att renarna alltid har förtur och att myggen aldrig sover. När de efter fem dagars vandring äntligen ser Kebnekaises snöiga topp har han slutat klaga på vädret helt och hållet. «Du pratar som en fjällman nu», säger Nils och ler sitt sällsynta leende. Linu vet att det är den finaste komplimang han någonsin kommer att få på svenska.',
        translation:
          'Os dias passam, e a cada dia o Linu aprende uma expressão nova e uma coisa nova sobre a montanha: que os riachos são mais frios de manhã, que as renas sempre têm preferência e que os mosquitos nunca dormem. Quando, depois de cinco dias de caminhada, eles finalmente avistam o pico nevado do Kebnekaise, ele já parou de reclamar do tempo por completo. «Agora você fala como um montanhês», diz o Nils, com o seu raro sorriso. O Linu sabe que é o elogio mais bonito que vai receber em sueco.',
        ending: { tone: 'bom', title: 'Montanhês de verdade', message: 'Você entendeu cada expressão na hora certa e soube quando ter calma e quando descansar.' },
      },
      final_neutro: {
        emoji: '🤧',
        text: 'Nästa morgon vaknar Linu i stugan med ont i varenda muskel och en snuva som låter som en mistlur. Nils bestämmer att de ska vila en dag, och Linu tillbringar den med att dricka te och titta ut på regnet. «Kebnekaise står kvar nästa år också», säger Nils vänligt. Linu nickar och lovar sig själv att lyssna på guiden nästa gång, innan han tar sig vatten över huvudet.',
        translation:
          'Na manhã seguinte o Linu acorda na cabana com dor em cada músculo e um resfriado que parece uma buzina de nevoeiro. O Nils decide que vão descansar um dia, e o Linu passa o dia tomando chá e olhando a chuva. «O Kebnekaise continua lá no ano que vem», diz o Nils, gentil. O Linu concorda e promete a si mesmo que da próxima vez vai ouvir o guia antes de dar um passo maior que a perna.',
        ending: { tone: 'neutro', title: 'Um passo maior que a perna', message: 'A pressa custou um dia de cama. Na montanha, «ha is i magen» vale mais que qualquer mapa.' },
      },
    },
  },
  {
    id: 'sv-h33',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Vind i seglen',
    emoji: '⛵',
    summary: 'Em Mariehamn, capital de Åland, o Linu visita um veleiro histórico e sai para velejar com um velho marinheiro que fala por expressões do mar.',
    cultural_context:
      'Åland é uma região autônoma e desmilitarizada da Finlândia onde a única língua oficial é o sueco. No porto de Mariehamn está o Pommern, um veleiro de quatro mastros do início do século XX que hoje é navio-museu; ainda nos anos 1930, veleiros de Åland levavam trigo da Austrália para a Europa, contornando o Cabo Horn.',
    start: 'start',
    glossary: [
      ['ha vind i seglen', 'estar de vento em popa'],
      ['sitta i samma båt', 'estar no mesmo barco'],
      ['ro något i land', 'levar algo até o fim (lit. remar algo até a terra)'],
      ['hålla tummarna', 'torcer por algo (lit. segurar os polegares)'],
      ['stiltje', 'calmaria'],
      ['en fyrmastad bark', 'um veleiro de quatro mastros'],
      ['ålandspannkaka', 'panqueca de forno de Åland, com semolina e cardamomo'],
      ['sviskonkräm', 'creme de ameixa-preta'],
    ],
    nodes: {
      start: {
        emoji: '⚓',
        text: 'Färjan glider in i Mariehamns västra hamn en klar morgon i augusti, och det första Linu ser är fyra höga master mot himlen. Det är Pommern, en fyrmastad bark som i många år har legat här som museifartyg. På kajen står en gammal man med sjömansmössa och tittar på Linu med kisande ögon. «Du ser ut som någon som vill ut på sjön», säger han, «jag heter Kalle och har seglat sedan jag var tolv.»',
        translation:
          'A balsa desliza para dentro do porto oeste de Mariehamn numa manhã clara de agosto, e a primeira coisa que o Linu vê são quatro mastros altos contra o céu. É o Pommern, um veleiro de quatro mastros que há muitos anos está aqui como navio-museu. No cais, um velho de boné de marinheiro olha para o Linu com os olhos apertados. «Você tem cara de quem quer ir para o mar», diz ele, «eu me chamo Kalle e velejo desde os doze anos.»',
        choices: [
          { text: 'Be Kalle visa Pommern först.', translation: 'Pedir ao Kalle que mostre o Pommern primeiro.', next: 'pommern' },
          { text: 'Fråga om de kan segla på en gång.', translation: 'Perguntar se podem velejar agora mesmo.', next: 'segling' },
        ],
      },
      pommern: {
        emoji: '🚢',
        text: 'Ombord på Pommern berättar Kalle om de stora segelfartygen som seglade ända till Australien och tillbaka med vete i lastrummen. «Resan tog månader, och ombord satt alla i samma båt, både bokstavligt och bildligt», säger han. «Blev det storm fick alla hjälpa till, från kaptenen till den yngsta skeppspojken.» Linu stryker med vingen över det slitna trädäcket och försöker föreställa sig vågorna runt Kap Horn.',
        translation:
          'A bordo do Pommern, o Kalle fala dos grandes veleiros que iam até a Austrália e voltavam com trigo nos porões. «A viagem levava meses, e a bordo todos estavam no mesmo barco, no sentido literal e no figurado», diz ele. «Se vinha tempestade, todo mundo tinha que ajudar, do capitão ao grumete mais novo.» O Linu passa a asa pelo convés de madeira gasto e tenta imaginar as ondas em volta do Cabo Horn.',
        choices: [
          { text: '«Så att sitta i samma båt betyder att dela samma problem?»', translation: '«Então estar no mesmo barco quer dizer dividir o mesmo problema?»', next: 'segling' },
          {
            text: '«Så alla fick plats i en enda liten båt?»',
            translation: '«Então todos cabiam num único barquinho?»',
            wrong: 'O Kalle usou «sitta i samma båt» também no sentido figurado: quer dizer «estar na mesma situação, dividir o mesmo problema». Ninguém se espremia num barquinho — o Pommern é enorme.',
          },
        ],
      },
      segling: {
        emoji: '⛵',
        text: 'Kalles båt är liten och vit och nästan lika gammal som sin ägare, skämtar han. De lägger ut från hamnen, och en frisk sydvästlig vind fyller genast seglet. «Nu har vi vind i seglen!» ropar Kalle glatt, och båten lutar så mycket att Linu måste hålla sig fast i relingen. Mellan kobbar och skär breder den åländska skärgården ut sig så långt ögat når, blå och grå och glittrande.',
        translation:
          'O barco do Kalle é pequeno, branco e quase tão velho quanto o dono, brinca ele. Eles saem do porto, e um vento sudoeste fresco enche a vela na hora. «Agora estamos de vento em popa!», grita o Kalle, alegre, e o barco se inclina tanto que o Linu precisa se segurar na amurada. Entre ilhotas e rochedos, o arquipélago de Åland se estende até onde a vista alcança, azul, cinza e cintilante.',
        choices: [{ text: 'Be att få styra båten själv.', translation: 'Pedir para pilotar o barco.', next: 'roder' }],
      },
      roder: {
        emoji: '🧭',
        text: 'Kalle lämnar över rorkulten, och i en halvtimme styr Linu stolt mellan prickarna. Men plötsligt mojnar vinden, seglet hänger slappt och båten ligger stilla som en anka i en damm. «Stiltje», muttrar Kalle, «och motorn har jag lämnat på land för reparation.» Han pekar mot en liten ö med en röd stuga och säger att de får ro dit och vänta på vinden.',
        translation:
          'O Kalle passa a cana do leme, e durante meia hora o Linu pilota orgulhoso entre as boias. Mas de repente o vento amaina, a vela fica frouxa e o barco fica parado como um pato num laguinho. «Calmaria», resmunga o Kalle, «e o motor eu deixei em terra para consertar.» Ele aponta para uma ilhota com uma casinha vermelha e diz que vão ter que remar até lá e esperar o vento.',
        choices: [
          { text: 'Ta årorna och börja ro.', translation: 'Pegar os remos e começar a remar.', next: 'ro' },
          { text: 'Vägra ro och vänta på vinden mitt på fjärden.', translation: 'Recusar-se a remar e esperar o vento ali no meio da baía.', next: 'final_neutro' },
        ],
      },
      ro: {
        emoji: '🚣',
        text: 'Linu ror så att fjädrarna yr, och Kalle sjunger en gammal sjömansvisa för att hålla takten. Efter en timme är ön nästan nådd, men Linus vingar värker och han vill ge upp. «Nu har vi kommit så här långt, nu ska vi ro det här i land», säger Kalle, och han menar det både bokstavligt och bildligt. På bryggan står en kvinna och vinkar med en kaffekanna.',
        translation:
          'O Linu rema tanto que as penas voam, e o Kalle canta uma velha canção de marinheiro para marcar o ritmo. Depois de uma hora a ilha está quase alcançada, mas as asas do Linu doem e ele quer desistir. «Já chegamos até aqui, agora vamos levar isto até o fim», diz o Kalle, e ele quer dizer as duas coisas, a literal e a figurada. No trapiche, uma mulher acena com um bule de café.',
        choices: [{ text: 'Bita ihop och ro de sista metrarna.', translation: 'Aguentar firme e remar os últimos metros.', next: 'on' }],
      },
      on: {
        emoji: '🥞',
        text: 'Kvinnan heter Greta och är Kalles syster, och i den röda stugan bjuder hon på ålandspannkaka med sviskonkräm och vispgrädde. Medan de äter spanar Kalle mot himlen och mumlar att vinden nog kommer tillbaka mot kvällen. «Jag håller tummarna för att ni hinner tillbaka innan färjan går», säger Greta till Linu. Linu tittar på klockan: hans färja till Sverige går klockan sju.',
        translation:
          'A mulher se chama Greta e é irmã do Kalle, e na casinha vermelha ela serve panqueca de Åland com creme de ameixa e chantili. Enquanto comem, o Kalle observa o céu e murmura que o vento deve voltar lá pelo fim da tarde. «Estou torcendo para vocês voltarem antes de a balsa sair», diz a Greta ao Linu. O Linu olha o relógio: a balsa dele para a Suécia sai às sete.',
        choices: [
          { text: 'Vänta lugnt på kvällsvinden tillsammans med Kalle.', translation: 'Esperar tranquilo o vento da tarde junto com o Kalle.', next: 'final_bom' },
          {
            text: 'Fråga Greta om hon har gjort illa tummarna.',
            translation: 'Perguntar à Greta se ela machucou os polegares.',
            wrong: '«Hålla tummarna» é torcer para que algo dê certo, como cruzar os dedos no Brasil. A Greta não machucou os polegares: ela está torcendo para eles voltarem a tempo da balsa.',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Vid sextiden kommer vinden tillbaka, precis som Kalle hade lovat, och båten flyger över fjärden med seglet spänt som ett trumskinn. De glider in i Mariehamns hamn en kvart innan färjan ska gå, och Kalle dunkar Linu i ryggen. «Du har rott i land både båten och dagen», säger han, «och du är välkommen ombord när du vill.» Från färjans däck ser Linu Pommerns master försvinna i kvällsljuset, och han känner att han själv har vind i seglen.',
        translation:
          'Lá pelas seis o vento volta, como o Kalle tinha prometido, e o barco voa pela baía com a vela esticada como pele de tambor. Eles entram no porto de Mariehamn quinze minutos antes de a balsa sair, e o Kalle dá um tapa nas costas do Linu. «Você levou até o fim o barco e o dia», diz ele, «e é bem-vindo a bordo quando quiser.» Do convés da balsa, o Linu vê os mastros do Pommern sumirem na luz do fim de tarde, e sente que ele mesmo está de vento em popa.',
        ending: { tone: 'bom', title: 'De vento em popa', message: 'Você entendeu as expressões do mar, remou até o fim e ainda pegou a balsa.' },
      },
      final_neutro: {
        emoji: '🌇',
        text: 'Linu vägrar röra årorna och föreslår att de väntar på vinden där de ligger. De väntar en timme, sedan två, medan solen bränner och Kalle berättar om stormar vid Kap Horn. När vinden äntligen kommer är det redan sent, och när de når hamnen ser Linu färjan försvinna bakom udden. Han får sova på Kalles soffa och ta morgonfärjan, lite solbränd och betydligt klokare.',
        translation:
          'O Linu se recusa a tocar nos remos e sugere esperar o vento ali mesmo. Eles esperam uma hora, depois duas, enquanto o sol queima e o Kalle conta de tempestades no Cabo Horn. Quando o vento finalmente vem já é tarde, e ao chegarem ao porto o Linu vê a balsa sumir atrás do cabo. Ele dorme no sofá do Kalle e pega a balsa da manhã, meio queimado de sol e bem mais sábio.',
        ending: { tone: 'neutro', title: 'Parado na calmaria', message: 'Sem remar, não se leva nada até o fim: a balsa foi embora, mas o Kalle ganhou um hóspede.' },
      },
    },
  },
  // ───────────────────────── B2.4 ─────────────────────────
  {
    id: 'sv-h34',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Den akademiska kvarten',
    emoji: '⏰',
    summary: 'Em Uppsala, o Linu chega pontualmente a uma aula vazia, descobre o «quarto de hora acadêmico» e precisa defendê-lo num debate estudantil.',
    cultural_context:
      'A Universidade de Uppsala, fundada em 1477, é a mais antiga dos países nórdicos, e os seus estudantes se reúnem em treze «nações», associações com sede, restaurante e festas próprias. Pela tradição do «quarto de hora acadêmico», uma aula marcada para as 10 começa às 10h15, a menos que o horário venha seguido de «s.t.» (sine tempore, «sem tempo»).',
    start: 'start',
    glossary: [
      ['den akademiska kvarten', 'o quarto de hora acadêmico'],
      ['visserligen … men', 'é verdade que … mas'],
      ['däremot', 'por outro lado, já'],
      ['dessutom', 'além disso'],
      ['alltså', 'portanto, ou seja'],
      ['trots att', 'apesar de'],
      ['i gengäld', 'em compensação'],
      ['en nation', 'uma nação (associação estudantil)'],
    ],
    nodes: {
      start: {
        emoji: '🏛️',
        text: 'En måndag i september står Linu utanför en föreläsningssal i Uppsala, punktligt klockan tio, med nyvässade pennor och ett nytt anteckningsblock. Salen är tom, korridoren är tom, och det enda som hörs är en städare som nynnar längre bort. Klockan kvart över strömmar studenterna plötsligt in, lugna och oberörda, och föreläsaren börjar som om ingenting hade hänt. Efteråt förklarar en student, Hanna, att han just har upplevt den akademiska kvarten.',
        translation:
          'Numa segunda-feira de setembro, o Linu está na porta de uma sala de aula em Uppsala, pontualmente às dez, com lápis recém-apontados e um caderno novo. A sala está vazia, o corredor está vazio, e a única coisa que se ouve é um faxineiro cantarolando mais adiante. Às dez e quinze, os estudantes de repente entram em massa, tranquilos e indiferentes, e o professor começa como se nada tivesse acontecido. Depois, uma estudante, Hanna, explica que ele acaba de conhecer o quarto de hora acadêmico.',
        choices: [
          { text: 'Be Hanna förklara traditionen.', translation: 'Pedir à Hanna que explique a tradição.', next: 'kvart' },
          { text: 'Klaga på att ingen här respekterar tider.', translation: 'Reclamar que aqui ninguém respeita horários.', next: 'klaga' },
        ],
      },
      kvart: {
        emoji: '🔔',
        text: '«Förr hade inte alla en klocka, så man väntade en kvart efter att kyrkklockorna hade slagit, för att alla skulle hinna fram», berättar Hanna. «Står det “kl. 10” börjar vi alltså tio och femton, men står det “s.t.” efter tiden börjar vi på slaget.» Hon tillägger att hennes nation har en debatt i kväll om just den frågan: ska den akademiska kvarten avskaffas? «Vi saknar en talare som försvarar kvarten – ställer du upp?»',
        translation:
          '«Antigamente nem todo mundo tinha relógio, então se esperava um quarto de hora depois de os sinos da igreja baterem, para todos darem tempo de chegar», conta a Hanna. «Se está escrito “kl. 10”, a gente começa às dez e quinze; mas se vem “s.t.” depois do horário, começamos em ponto.» Ela acrescenta que a nação dela vai ter um debate hoje à noite justamente sobre isso: o quarto de hora acadêmico deve ser abolido? «Falta alguém para defender o quarto de hora – topa?»',
        choices: [
          { text: 'Tacka ja och börja förbereda sig.', translation: 'Aceitar e começar a se preparar.', next: 'forbered' },
          {
            text: '«Så en föreläsning som står “kl. 10 s.t.” börjar kvart över tio?»',
            translation: '«Então uma aula marcada “kl. 10 s.t.” começa às dez e quinze?»',
            wrong: 'A Hanna explicou o contrário: «s.t.» (sine tempore, «sem tempo») quer dizer que começa na hora exata. É sem o «s.t.» que «kl. 10» significa dez e quinze.',
          },
        ],
      },
      klaga: {
        emoji: '😤',
        text: 'Hanna lyssnar tålmodigt när Linu klagar och säger sedan med ett leende att han faktiskt har rätt på en punkt. «Trots att kvarten är en gammal tradition tycker många att den är förvirrande, särskilt nya studenter», säger hon. «Själv skulle jag däremot sakna den, eftersom den ger alla en chans att hinna mellan salarna.» Sedan berättar hon om kvällens debatt på nationen och frågar om han vill försvara kvarten, eftersom de saknar en talare.',
        translation:
          'A Hanna ouve com paciência as reclamações do Linu e depois diz, sorrindo, que num ponto ele tem razão. «Apesar de o quarto de hora ser uma tradição antiga, muita gente acha confuso, principalmente os estudantes novos», diz ela. «Eu, por outro lado, sentiria falta dele, porque dá a todo mundo a chance de chegar de uma sala à outra.» Depois ela fala do debate desta noite na nação e pergunta se ele quer defender o quarto de hora, porque falta um orador.',
        choices: [{ text: 'Tacka ja, trots att han nyss har klagat.', translation: 'Aceitar, apesar de ter acabado de reclamar.', next: 'forbered' }],
      },
      forbered: {
        emoji: '📝',
        text: 'På eftermiddagen sitter Linu på ett kafé nära domkyrkan och skriver ner sina argument. Hanna har gett honom ett råd: «Visa att du förstår motståndarens argument, men förklara sedan varför dina väger tyngre.» Hon har också skrivit en lista med sambandsord i hans block: visserligen, däremot, dessutom, alltså, trots att. Linu stryker under «visserligen … men» två gånger, eftersom det låter så förnuftigt.',
        translation:
          'À tarde, o Linu se senta num café perto da catedral e anota os seus argumentos. A Hanna lhe deu um conselho: «Mostre que você entende o argumento do adversário, mas depois explique por que os seus pesam mais.» Ela também escreveu no caderno dele uma lista de conectivos: visserligen, däremot, dessutom, alltså, trots att. O Linu sublinha duas vezes «visserligen … men», porque soa tão sensato.',
        choices: [{ text: 'Gå till nationen i god tid.', translation: 'Ir para a nação com antecedência.', next: 'debatt' }],
      },
      debatt: {
        emoji: '🎤',
        text: 'Nationens sal är full av studenter med kaffekoppar, och motståndaren, en ekonomistudent som heter Axel, inleder med stor säkerhet. «Den akademiska kvarten är ett slöseri med tid: femton minuter gånger fyra föreläsningar blir en timme om dagen», säger han. «Dessutom förvirrar den utbytesstudenterna, och alltså borde vi skriva den exakta tiden i schemat.» Publiken applåderar, och sedan är det Linus tur.',
        translation:
          'O salão da nação está cheio de estudantes com xícaras de café, e o adversário, um estudante de economia chamado Axel, abre com muita segurança. «O quarto de hora acadêmico é um desperdício de tempo: quinze minutos vezes quatro aulas dá uma hora por dia», diz ele. «Além disso, confunde os estudantes de intercâmbio, e portanto deveríamos escrever o horário exato na grade.» O público aplaude, e então é a vez do Linu.',
        choices: [
          {
            text: '«Visserligen förlorar vi en kvart, men vi vinner lugn och punktlighet.»',
            translation: '«É verdade que perdemos um quarto de hora, mas ganhamos calma e pontualidade.»',
            next: 'argument',
          },
          {
            text: '«Axel menar alltså att kvarten sparar tid.»',
            translation: '«O Axel quer dizer, então, que o quarto de hora economiza tempo.»',
            wrong: 'O Axel disse o contrário: para ele o quarto de hora é um desperdício («ett slöseri med tid»). «Dessutom» (além disso) acrescenta mais um argumento contra, e «alltså» (portanto) introduz a conclusão dele: escrever o horário exato.',
          },
        ],
      },
      argument: {
        emoji: '⚖️',
        text: 'Linu harklar sig och talar långsamt. «Visserligen förlorar vi en kvart, men i gengäld kommer alla fram i tid, och ingen behöver springa mellan salarna», säger han. «Vad gäller utbytesstudenterna blir de förvirrade en enda gång: jag var själv förvirrad i precis en förmiddag, och nu älskar jag kvarten.» Publiken skrattar, men Axel räcker upp handen: «Om kvarten är så bra, varför kom du då själv klockan tio i morse?»',
        translation:
          'O Linu pigarreia e fala devagar. «É verdade que perdemos um quarto de hora, mas em compensação todos chegam no horário, e ninguém precisa correr entre as salas», diz ele. «Quanto aos estudantes de intercâmbio, eles se confundem uma única vez: eu mesmo fiquei confuso exatamente uma manhã, e agora adoro o quarto de hora.» O público ri, mas o Axel levanta a mão: «Se o quarto de hora é tão bom, por que você mesmo chegou às dez hoje de manhã?»',
        choices: [
          { text: '«Just därför: jag lärde mig något, trots att det kostade mig en kvart.»', translation: '«Justamente por isso: aprendi uma coisa, apesar de ter me custado um quarto de hora.»', next: 'final_bom' },
          { text: '«Jag … min klocka gick fel.»', translation: '«Eu… o meu relógio estava errado.»', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Salen exploderar i skratt och applåder, och till och med Axel ler och nickar erkännande. När rösterna räknas vinner Linus sida med knapp marginal, och nationens ordförande utser honom till kvällens bästa talare. Hanna bjuder på en kopp kaffe och säger att han argumenterade som en infödd uppsalastudent. Nästa morgon kommer Linu till föreläsningen klockan tio och femton, lugn och oberörd, precis som alla andra.',
        translation:
          'O salão explode em risadas e aplausos, e até o Axel sorri e acena com a cabeça, reconhecendo. Na contagem dos votos, o lado do Linu vence por pouco, e o presidente da nação o escolhe como o melhor orador da noite. A Hanna paga um café e diz que ele argumentou como um estudante nativo de Uppsala. Na manhã seguinte, o Linu chega à aula às dez e quinze, tranquilo e indiferente, igualzinho a todo mundo.',
        ending: { tone: 'bom', title: 'O melhor orador da noite', message: 'Você entendeu os argumentos do adversário, usou os conectivos certos e transformou o seu erro em argumento.' },
      },
      final_neutro: {
        emoji: '😅',
        text: 'Några i publiken fnissar, och Axel utnyttjar tystnaden för att upprepa sina siffror en gång till. När rösterna räknas vinner Axels sida, men bara med tre rösters marginal. Efteråt klappar Hanna Linu på axeln och säger att han var modig, fast han glömde sitt bästa sambandsord. «Nästa gång: visserligen … men», viskar hon, och Linu lovar att öva.',
        translation:
          'Algumas pessoas no público dão risadinhas, e o Axel aproveita o silêncio para repetir os seus números mais uma vez. Na contagem, o lado do Axel vence, mas por apenas três votos. Depois, a Hanna dá um tapinha no ombro do Linu e diz que ele foi corajoso, embora tenha esquecido o seu melhor conectivo. «Da próxima vez: visserligen … men», cochicha ela, e o Linu promete treinar.',
        ending: { tone: 'neutro', title: 'Derrota por três votos', message: 'Faltou transformar a pergunta do adversário em argumento. Um bom «visserligen … men» teria virado o jogo.' },
      },
    },
  },
  {
    id: 'sv-h35',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Jätten Finn',
    emoji: '⛪',
    summary: 'Na catedral de Lund, o Linu ajuda uma guia a escrever uma placa sobre o gigante Finn e precisa pesar os dois lados: lenda ou história?',
    cultural_context:
      'A catedral de Lund, dedicada a São Lourenço, foi consagrada em 1145. Segundo a lenda, um gigante chamado Finn a construiu com a condição de receber o sol e a lua, ou os olhos do santo, se este não adivinhasse o seu nome; o santo ouviu a mulher do gigante cantar para o filho, disse o nome, e Finn virou pedra. Na cripta, uma figura de pedra abraçada a uma coluna é identificada pelo povo com o gigante.',
    start: 'start',
    glossary: [
      ['enligt sägnen', 'segundo a lenda'],
      ['å ena sidan … å andra sidan', 'por um lado … por outro'],
      ['däremot', 'por outro lado, já'],
      ['dessutom', 'além disso'],
      ['alltså', 'portanto'],
      ['en skylt', 'uma placa'],
      ['ett utkast', 'um rascunho'],
      ['ett kommatecken', 'uma vírgula'],
    ],
    nodes: {
      start: {
        emoji: '🕯️',
        text: 'I Lunds domkyrka är det svalt och halvmörkt, och Linu går nerför trappan till kryptan, där tunga pelare bär upp valven. Vid en av pelarna står en stenfigur som håller armarna om pelaren, som om den försökte rycka omkull hela kyrkan. En ung guide, Sara, står framför figuren med ett papper i handen och rynkar pannan. «Jag ska skriva en ny skylt om jätten Finn», säger hon, «men jag kan inte bestämma mig för vad den ska säga.»',
        translation:
          'Na catedral de Lund está fresco e na penumbra, e o Linu desce a escada até a cripta, onde colunas pesadas sustentam as abóbadas. Junto de uma das colunas há uma figura de pedra que a abraça, como se tentasse derrubar a igreja inteira. Uma guia jovem, Sara, está diante da figura com um papel na mão e a testa franzida. «Tenho que escrever uma placa nova sobre o gigante Finn», diz ela, «mas não consigo decidir o que ela deve dizer.»',
        choices: [
          { text: 'Be Sara berätta sägnen.', translation: 'Pedir à Sara que conte a lenda.', next: 'sagnen' },
          { text: 'Fråga vad problemet är.', translation: 'Perguntar qual é o problema.', next: 'problem' },
        ],
      },
      sagnen: {
        emoji: '🗿',
        text: '«Enligt sägnen lovade jätten Finn att bygga kyrkan åt den helige Laurentius», berättar Sara. «Som lön ville han ha solen och månen eller helgonets ögon, om inte helgonet kunde gissa hans namn innan kyrkan var färdig.» Men Laurentius hörde jättens hustru sjunga för sitt barn om «Finn, din far», och när han ropade namnet förvandlades jätten till sten. «Och där står han än i dag och kramar pelaren», avslutar hon.',
        translation:
          '«Segundo a lenda, o gigante Finn prometeu construir a igreja para São Lourenço», conta a Sara. «Como pagamento, queria o sol e a lua, ou os olhos do santo, a não ser que o santo adivinhasse o nome dele antes de a igreja ficar pronta.» Mas Lourenço ouviu a mulher do gigante cantar para o filho sobre «Finn, o teu pai», e quando ele gritou o nome o gigante virou pedra. «E lá está ele até hoje, abraçado à coluna», conclui ela.',
        choices: [
          { text: '«Vilken härlig historia! Varför är den ett problem?»', translation: '«Que história linda! Por que ela é um problema?»', next: 'problem' },
          {
            text: '«Så helgonet förlorade sina ögon till slut?»',
            translation: '«Então o santo acabou perdendo os olhos?»',
            wrong: 'Não: o santo adivinhou o nome («Finn») antes de a igreja ficar pronta, graças à canção da mulher do gigante. Por isso ele manteve os olhos, e quem virou pedra foi o Finn.',
          },
        ],
      },
      problem: {
        emoji: '🤔',
        text: '«Min chef vill att skylten bara ska berätta det som historikerna vet, och ingen vet säkert vad figuren föreställde från början», säger Sara. «Däremot tycker jag att sägnen är en del av kyrkans historia, trots att den inte är sann.» Hon suckar och frågar vad Linu tycker. «Du kommer utifrån, så du kanske ser saken klarare än vi.»',
        translation:
          '«O meu chefe quer que a placa conte só o que os historiadores sabem, e ninguém sabe ao certo o que a figura representava originalmente», diz a Sara. «Eu, por outro lado, acho que a lenda faz parte da história da igreja, apesar de não ser verdadeira.» Ela suspira e pergunta o que o Linu acha. «Você vem de fora, talvez veja a questão com mais clareza do que nós.»',
        choices: [
          { text: '«Å ena sidan har din chef rätt, å andra sidan har du också det.»', translation: '«Por um lado o seu chefe tem razão, por outro você também tem.»', next: 'argument' },
          { text: '«Sägnen är roligare, alltså ska skylten bara handla om Finn.»', translation: '«A lenda é mais divertida, portanto a placa deve falar só do Finn.»', next: 'ensidig' },
        ],
      },
      ensidig: {
        emoji: '🙅',
        text: 'Sara skrattar men skakar på huvudet. «Då river min chef ner skylten innan bläcket har torkat», säger hon. «Dessutom finns det besökare som faktiskt tror på allt som står på en skylt.» Linu inser att ett bra argument måste ta hänsyn till motståndarens synpunkter, och han ber om en ny chans.',
        translation:
          'A Sara ri, mas balança a cabeça. «Aí o meu chefe arranca a placa antes de a tinta secar», diz ela. «Além disso, tem visitante que acredita de verdade em tudo o que está escrito numa placa.» O Linu percebe que um bom argumento precisa levar em conta o ponto de vista do outro lado, e pede uma nova chance.',
        choices: [{ text: 'Tänka om och väga båda sidorna.', translation: 'Repensar e pesar os dois lados.', next: 'argument' }],
      },
      argument: {
        emoji: '⚖️',
        text: 'Linu sätter sig på en stenbänk och tänker högt. «Å ena sidan ska en skylt i en kyrka inte lura besökarna att tro på jättar», säger han. «Å andra sidan har sägnen berättats i hundratals år, och den visar hur människor förr försökte förklara en så enorm byggnad.» Sara nickar ivrigt och räcker honom pennan: «Skriv, du! Men tänk på kommatecknen.»',
        translation:
          'O Linu se senta num banco de pedra e pensa em voz alta. «Por um lado, uma placa numa igreja não deve enganar os visitantes, fazendo-os acreditar em gigantes», diz ele. «Por outro, a lenda é contada há centenas de anos, e mostra como as pessoas de antigamente tentavam explicar um prédio tão enorme.» A Sara concorda, animada, e lhe passa a caneta: «Escreve você! Mas cuidado com as vírgulas.»',
        choices: [{ text: 'Skriva ett utkast till skylten.', translation: 'Escrever um rascunho da placa.', next: 'utkast' }],
      },
      utkast: {
        emoji: '✍️',
        text: 'Linu skriver: «Ingen vet säkert vad stenfiguren föreställde från början. Enligt en sägen är det däremot jätten Finn, som byggde kyrkan men förvandlades till sten, när helgonet gissade hans namn. Sägnen är alltså inte historia, men den är en del av kyrkans historia.» Sara läser utkastet och pekar på kommat före «när». «Före en kort bisats på slutet behövs oftast inget komma på svenska», säger hon, «men resten är riktigt bra.»',
        translation:
          'O Linu escreve: «Ninguém sabe ao certo o que a figura de pedra representava originalmente. Segundo uma lenda, por outro lado, é o gigante Finn, que construiu a igreja mas virou pedra, quando o santo adivinhou o seu nome. A lenda, portanto, não é história, mas faz parte da história da igreja.» A Sara lê o rascunho e aponta a vírgula antes de «när». «Antes de uma oração subordinada curta no fim, em sueco geralmente não se usa vírgula», diz ela, «mas o resto está muito bom.»',
        choices: [
          { text: '«Stryk kommat. Och lägg till på slutet: “Döm själv!”»', translation: '«Tire a vírgula. E acrescente no fim: “Julgue você mesmo!”»', next: 'final_bom' },
          { text: '«Kommat får stå kvar, det märks inte.»', translation: '«A vírgula pode ficar, ninguém vai notar.»', next: 'final_neutro' },
          {
            text: '«Vi kan byta “däremot” mot “dessutom”, det betyder ju samma sak.»',
            translation: '«Podemos trocar “däremot” por “dessutom”, quer dizer a mesma coisa.»',
            wrong: '«Däremot» marca um contraste (por outro lado, já), enquanto «dessutom» acrescenta (além disso). No texto, «däremot» opõe o que se sabe ao que a lenda conta — trocar por «dessutom» mudaria o sentido.',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Veckan därpå hänger den nya skylten i kryptan, och Sara skickar en bild till Linu med tre utropstecken. Chefen har godkänt texten, eftersom den skiljer tydligt mellan historia och sägen, och besökarna står länge och läser. Ett barn frågar sin pappa om jätten verkligen var en jätte, och pappan svarar bara: «Döm själv!» Linu tycker att det är den bästa recension en skylt kan få.',
        translation:
          'Na semana seguinte a placa nova está pendurada na cripta, e a Sara manda uma foto para o Linu com três pontos de exclamação. O chefe aprovou o texto, porque ele separa com clareza história e lenda, e os visitantes ficam muito tempo lendo. Uma criança pergunta ao pai se o gigante era mesmo um gigante, e o pai responde apenas: «Julgue você mesmo!» O Linu acha que essa é a melhor crítica que uma placa pode receber.',
        ending: { tone: 'bom', title: 'A placa do gigante', message: 'Você pesou os dois lados, usou os conectivos no sentido certo e até acertou a vírgula.' },
      },
      final_neutro: {
        emoji: '📎',
        text: 'Sara lämnar in texten med kommat kvar, och chefen skickar tillbaka den med röda streck och en lång kommentar om skiljetecken. Skylten blir en månad försenad, och när den till slut kommer upp har sägnen kortats ned till en enda mening. «Nåja, Finn står i alla fall kvar», skriver Sara i ett sms. Linu lovar sig själv att lära sig de svenska kommareglerna ordentligt.',
        translation:
          'A Sara entrega o texto com a vírgula, e o chefe o devolve cheio de riscos vermelhos e um comentário longo sobre pontuação. A placa atrasa um mês, e quando finalmente é pendurada a lenda foi reduzida a uma única frase. «Bom, pelo menos o Finn continua lá», escreve a Sara numa mensagem. O Linu promete a si mesmo aprender direito as regras suecas da vírgula.',
        ending: { tone: 'neutro', title: 'Uma vírgula de atraso', message: 'O argumento era bom, mas o detalhe da pontuação custou caro. No sueco, menos vírgulas antes de subordinadas.' },
      },
    },
  },
  {
    id: 'sv-h36',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Låt Föri gå!',
    emoji: '⛴️',
    summary: 'Num curso de verão em Turku (Åbo), o Linu precisa escrever uma carta de leitor sobre uma proposta inventada: trocar a pequena balsa Föri por uma ponte.',
    cultural_context:
      'Turku (Åbo, em sueco) é a cidade mais antiga da Finlândia e foi a capital do país até 1812; lá funciona a Åbo Akademi, universidade de língua sueca. A pequena balsa Föri atravessa o rio Aura de graça há mais de cem anos, e todo 24 de dezembro, ao meio-dia, a «paz de Natal» é proclamada na antiga praça central da cidade.',
    start: 'start',
    glossary: [
      ['en insändare', 'uma carta de leitor'],
      ['ett förslag', 'uma proposta'],
      ['för det första / för det andra', 'em primeiro lugar / em segundo lugar'],
      ['visserligen … men', 'é verdade que … mas'],
      ['sammanfattningsvis', 'em resumo'],
      ['bemöta ett argument', 'responder a um argumento'],
      ['ett utropstecken', 'um ponto de exclamação'],
      ['med nöd och näppe', 'por um triz'],
    ],
    nodes: {
      start: {
        emoji: '🏫',
        text: 'Linu går en sommarkurs i svenska vid Åbo Akademi, och på fredagen får klassen en ovanlig uppgift av läraren, Birgitta. «Tänk er att någon har föreslagit att Föri, den lilla färjan över Aura å, ska ersättas med en bro», säger hon. «Förslaget är påhittat, men era argument ska vara riktiga: skriv en insändare på högst tvåhundra ord.» Efter lektionen går Linu ner till ån för att se färjan med egna ögon.',
        translation:
          'O Linu está fazendo um curso de verão de sueco na Åbo Akademi, e na sexta-feira a professora, Birgitta, dá à turma uma tarefa incomum. «Imaginem que alguém propôs trocar a Föri, a balsinha que atravessa o rio Aura, por uma ponte», diz ela. «A proposta é inventada, mas os argumentos de vocês têm que ser de verdade: escrevam uma carta de leitor de no máximo duzentas palavras.» Depois da aula, o Linu desce até o rio para ver a balsa com os próprios olhos.',
        choices: [
          { text: 'Åka fram och tillbaka med Föri.', translation: 'Ir e voltar na Föri.', next: 'fori' },
          { text: 'Fråga folk på kajen vad de tycker.', translation: 'Perguntar às pessoas no cais o que elas acham.', next: 'kajen' },
        ],
      },
      fori: {
        emoji: '⛴️',
        text: 'Föri är liten och gungar lugnt över det gröna vattnet, och överfarten tar bara ett par minuter. Ombord sitter en pensionär med en tax, två cyklister och en mamma med barnvagn, och ingen betalar något, eftersom färjan är gratis. Skepparen berättar att Föri har gått här i över hundra år och att hon själv har kört den i trettio. «En bro vore visserligen snabbare», säger hon, «men den skulle aldrig kunna säga god morgon till folk.»',
        translation:
          'A Föri é pequena e balança tranquila sobre a água verde, e a travessia leva só uns dois minutos. A bordo estão um aposentado com um dachshund, dois ciclistas e uma mãe com carrinho de bebê, e ninguém paga nada, porque a balsa é de graça. A barqueira conta que a Föri faz esse trajeto há mais de cem anos e que ela mesma a pilota há trinta. «É verdade que uma ponte seria mais rápida», diz ela, «mas nunca poderia dar bom-dia às pessoas.»',
        choices: [{ text: 'Anteckna skepparens ord och gå i land.', translation: 'Anotar as palavras da barqueira e desembarcar.', next: 'kajen' }],
      },
      kajen: {
        emoji: '🗣️',
        text: 'På kajen frågar Linu några förbipasserande vad de skulle tycka om en bro. En ung man med cykelhjälm svarar att en bro skulle vara praktisk, eftersom det ibland blir kö till färjan på sommaren. En äldre dam skakar däremot på huvudet och säger att Föri är en del av Åbos själ, trots att hon själv sällan åker med den. Linu antecknar allt och märker att han redan har argument för båda sidorna.',
        translation:
          'No cais, o Linu pergunta a alguns passantes o que achariam de uma ponte. Um rapaz de capacete de ciclista responde que uma ponte seria prática, porque às vezes forma fila para a balsa no verão. Uma senhora, por outro lado, balança a cabeça e diz que a Föri faz parte da alma de Åbo, apesar de ela mesma raramente andar nela. O Linu anota tudo e percebe que já tem argumentos para os dois lados.',
        choices: [
          { text: 'Gå hem och börja skriva.', translation: 'Ir para casa e começar a escrever.', next: 'utkast' },
          {
            text: 'Skriva: «Damen åker ofta med Föri och vill därför behålla den.»',
            translation: 'Escrever: «A senhora anda muito na Föri e por isso quer mantê-la.»',
            wrong: 'A senhora disse o contrário: «trots att hon själv sällan åker med den» = «apesar de ela mesma raramente andar nela». Mesmo usando pouco, ela acha que a Föri faz parte da alma da cidade.',
          },
        ],
      },
      utkast: {
        emoji: '📄',
        text: 'Hemma skriver Linu första stycket: «För det första är Föri gratis och öppen för alla. För det andra är den en del av stadens historia. Dessutom är den vacker.» Han läser texten högt och tycker att den låter som en inköpslista. Han vet att en insändare också måste bemöta motståndarnas argument, till exempel köerna och snabbheten.',
        translation:
          'Em casa, o Linu escreve o primeiro parágrafo: «Em primeiro lugar, a Föri é gratuita e aberta a todos. Em segundo lugar, ela faz parte da história da cidade. Além disso, ela é bonita.» Ele lê o texto em voz alta e acha que parece uma lista de compras. Ele sabe que uma carta de leitor também precisa responder aos argumentos do outro lado, como as filas e a rapidez.',
        choices: [
          { text: 'Lägga till ett stycke med «visserligen … men» och «däremot».', translation: 'Acrescentar um parágrafo com «visserligen … men» e «däremot».', next: 'motarg' },
          { text: 'Lämna in texten som den är.', translation: 'Entregar o texto como está.', next: 'final_neutro' },
        ],
      },
      motarg: {
        emoji: '⚖️',
        text: 'Linu skriver: «Visserligen kan det bli kö till färjan en varm sommardag, men kön är kort och utsikten över ån är gratis. En bro skulle däremot kosta miljoner och ta flera år att bygga. Alltså finns det inget skäl att byta ut något som fungerar.» Till sist sätter han rubriken «Bygg ingen bro!!!» och lämnar in texten på måndagen.',
        translation:
          'O Linu escreve: «É verdade que pode formar fila para a balsa num dia quente de verão, mas a fila é curta e a vista do rio é de graça. Uma ponte, por outro lado, custaria milhões e levaria anos para ser construída. Portanto, não há motivo para trocar algo que funciona.» Por fim, ele põe o título «Não construam ponte nenhuma!!!» e entrega o texto na segunda-feira.',
        choices: [{ text: 'Vänta på Birgittas kommentarer.', translation: 'Esperar os comentários da Birgitta.', next: 'lektion' }],
      },
      lektion: {
        emoji: '🖍️',
        text: 'Birgitta delar ut insändarna med kommentarer i rödpenna. På Linus papper har hon ringat in ett kolon och ett tankstreck och skrivit «bra!» i marginalen. Rubriken har hon däremot strukit under och skrivit: «Ett utropstecken räcker, tre låter som ett skrik.» Sedan frågar hon klassen vem som vill läsa upp sin text.',
        translation:
          'A Birgitta devolve as cartas com comentários em caneta vermelha. No papel do Linu, ela circulou dois-pontos e um travessão e escreveu «bom!» na margem. O título, por outro lado, ela sublinhou e escreveu: «Um ponto de exclamação basta, três soam como um grito.» Depois ela pergunta à turma quem quer ler o texto em voz alta.',
        choices: [
          { text: 'Räcka upp vingen och läsa, med ett enda utropstecken.', translation: 'Levantar a asa e ler, com um único ponto de exclamação.', next: 'final_bom' },
          {
            text: 'Lägga till fler utropstecken, eftersom Birgitta gillade rubriken.',
            translation: 'Acrescentar mais pontos de exclamação, já que a Birgitta gostou do título.',
            wrong: 'A Birgitta elogiou os dois-pontos e o travessão, mas NÃO o título: «däremot» marca o contraste, e ela escreveu que um ponto de exclamação basta e que três soam como um grito.',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu läser sin insändare med stadig röst, och när han kommer till «Sammanfattningsvis: låt Föri gå i hundra år till!» applåderar hela klassen. Birgitta föreslår att han skickar texten till den svenskspråkiga lokaltidningen, som en rolig betraktelse över staden. Två veckor senare står den i tidningen, och skepparen på Föri har klippt ut den och satt upp den i sin lilla hytt. Varje gång Linu åker över ån för hon två fingrar till mössan och ler.',
        translation:
          'O Linu lê a carta com voz firme, e quando chega a «Em resumo: deixem a Föri navegar mais cem anos!» a turma inteira aplaude. A Birgitta sugere que ele mande o texto para o jornal local de língua sueca, como uma crônica divertida sobre a cidade. Duas semanas depois ele sai no jornal, e a barqueira da Föri o recortou e pendurou na sua cabine. Toda vez que o Linu atravessa o rio, ela leva dois dedos ao boné e sorri.',
        ending: { tone: 'bom', title: 'Carta publicada', message: 'Você respondeu aos argumentos contrários, usou os conectivos e aprendeu que um ponto de exclamação basta.' },
      },
      final_neutro: {
        emoji: '📋',
        text: 'Birgitta ger tillbaka texten med en vänlig men tydlig kommentar: «Tre argument i rad är ingen argumentation, det är en lista.» Hon förklarar att en läsare som vill ha en bro inte blir övertygad om man inte bemöter hans skäl. Linu blir godkänd, men bara med nöd och näppe. På vägen hem åker han med Föri och tänker på alla «visserligen» han kunde ha skrivit.',
        translation:
          'A Birgitta devolve o texto com um comentário gentil, mas claro: «Três argumentos em fila não são argumentação, são uma lista.» Ela explica que um leitor que quer a ponte não se convence se ninguém responde às razões dele. O Linu é aprovado, mas por um triz. No caminho de volta ele pega a Föri e pensa em todos os «visserligen» que poderia ter escrito.',
        ending: { tone: 'neutro', title: 'Aprovado por um triz', message: 'Uma lista de razões não convence ninguém: faltou responder ao outro lado.' },
      },
    },
  },
  // ───────────────────────── C1.1 ─────────────────────────
  {
    id: 'sv-h37',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Vi råkas vid Havis Amanda',
    emoji: '🧜',
    summary: 'Em Helsinque, o Linu, que aprendeu o sueco da Suécia, descobre o finlandssvenska: palavras que mudam de sentido, um «semla» inesperado e uma fala sem acentos tonais.',
    cultural_context:
      'Cerca de 5% dos finlandeses têm o sueco como língua materna, e o sueco é, ao lado do finlandês, língua nacional da Finlândia; em Helsinque (Helsingfors, em sueco) as placas de rua são bilíngues. O finlandssvenska em geral não tem os dois acentos tonais do sueco da Suécia e tem palavras próprias, os «finlandismos», como «råkas» (encontrar-se) e «pipo» (gorro, do finlandês); lá, «semla» é um simples pãozinho, e o pão doce de Carnaval se chama «fastlagsbulle».',
    start: 'start',
    glossary: [
      ['morjens', 'oi (coloquial em Helsinque)'],
      ['vi råkas', 'a gente se vê (finlandismo; na Suécia: vi ses)'],
      ['kiva', 'legal, agradável (finlandismo, do finlandês)'],
      ['en pipo', 'um gorro (finlandismo; na Suécia: en mössa)'],
      ['en semla', 'na Finlândia: um pãozinho; na Suécia: pão doce com creme'],
      ['en fastlagsbulle', 'o pão doce de Carnaval, como se diz na Finlândia'],
      ['ordaccent', 'acento tonal'],
      ['en finlandism', 'uma palavra ou expressão típica do sueco da Finlândia'],
    ],
    nodes: {
      start: {
        emoji: '⛴️',
        text: 'Linu har lärt sig svenska i Stockholm, så när han kliver av båten i Helsingfors en februarimorgon känner han sig säker på sin sak. Gatuskyltarna är tvåspråkiga, med det finska namnet ovanför det svenska, och i fickan har han ett sms från sin nya vän Mikaela: «Morjens! Vi råkas vid Havis Amanda klockan tolv.» Linu läser meddelandet två gånger och rynkar på näbben. I Stockholm betyder ju «råka» att något händer av en slump, och han undrar om Mikaela verkligen tänker lämna mötet åt ödet.',
        translation:
          'O Linu aprendeu sueco em Estocolmo, então, quando desce do barco em Helsinque numa manhã de fevereiro, está seguro de si. As placas de rua são bilíngues, com o nome finlandês em cima do sueco, e no bolso ele tem uma mensagem da sua nova amiga Mikaela: «Oi! A gente se vê na Havis Amanda ao meio-dia.» O Linu lê a mensagem duas vezes e franze o bico. Em Estocolmo, «råka» quer dizer que algo acontece por acaso, e ele se pergunta se a Mikaela vai mesmo deixar o encontro por conta do destino.',
        choices: [
          { text: 'Gå till statyn vid Salutorget klockan tolv, för säkerhets skull.', translation: 'Ir até a estátua na Praça do Mercado ao meio-dia, por via das dúvidas.', next: 'torget' },
          {
            text: 'Strosa runt på måfå i staden och hoppas att de stöter på varandra.',
            translation: 'Passear a esmo pela cidade e torcer para esbarrar nela.',
            wrong: 'Na Finlândia, «vi råkas» é um finlandismo que quer dizer simplesmente «a gente se encontra, a gente se vê», como «vi ses» na Suécia. A Mikaela marcou um encontro de verdade: ao meio-dia, na estátua Havis Amanda.',
          },
        ],
      },
      torget: {
        emoji: '🧜',
        text: 'Vid Havis Amanda, den nakna havsnymfen i brons vid Salutorget, står Mikaela i en röd stickad mössa och vinkar. «Kiva att du hittade hit!» säger hon, och Linu förstår att «kiva» måste vara något positivt, eftersom hon ler med hela ansiktet. Hon förklarar att ordet kommer från finskan och att finlandssvenskan är full av sådana lån, som «pipo» för mössa. «Min pipo är stickad av mormor», säger hon stolt och drar ner den över öronen, «för här blåser det rakt från havet.»',
        translation:
          'Na Havis Amanda, a ninfa do mar nua de bronze junto à Praça do Mercado, a Mikaela acena com um gorro vermelho de tricô. «Que legal que você achou o lugar!», diz ela, e o Linu entende que «kiva» deve ser algo positivo, porque ela sorri com o rosto inteiro. Ela explica que a palavra vem do finlandês e que o sueco da Finlândia está cheio de empréstimos assim, como «pipo» para gorro. «O meu pipo foi a vovó que tricotou», diz ela, orgulhosa, e o puxa sobre as orelhas, «porque aqui o vento vem direto do mar.»',
        choices: [{ text: 'Föreslå ett kafé för att värma sig.', translation: 'Sugerir um café para se esquentar.', next: 'kafe' }],
      },
      kafe: {
        emoji: '🥯',
        text: 'På ett gammalt kafé vid Esplanaden beställer Linu en semla, eftersom det är februari och han vet att semlor hör fastan till. Servitrisen ställer fram en liten, ljus och helt vanlig bulle, utan grädde och utan mandelmassa. Linu stirrar förvirrat på tallriken, medan Mikaela skrattar så att hon får hicka. «I Finland är en semla bara ett vetebröd», säger hon, «det du ville ha heter fastlagsbulle här, och den kan du få med sylt eller mandelmassa.»',
        translation:
          'Num café antigo na Esplanada, o Linu pede um semla, porque é fevereiro e ele sabe que os semlor são coisa da época de Quaresma. A garçonete traz um pãozinho pequeno, claro e totalmente comum, sem creme e sem pasta de amêndoa. O Linu olha o prato, confuso, enquanto a Mikaela ri tanto que fica com soluço. «Na Finlândia, semla é só um pão de trigo», diz ela, «o que você queria aqui se chama fastlagsbulle, e dá para pedir com geleia ou com pasta de amêndoa.»',
        choices: [
          { text: 'Beställa en fastlagsbulle med mandelmassa.', translation: 'Pedir um fastlagsbulle com pasta de amêndoa.', next: 'toner' },
          {
            text: '«En semla i Finland är alltså samma sak som en semla i Sverige.»',
            translation: '«Então um semla na Finlândia é a mesma coisa que um semla na Suécia.»',
            wrong: 'A Mikaela explicou o contrário: na Finlândia, «semla» é só um pãozinho comum («ett vetebröd»); o pão doce com creme que o Linu queria se chama «fastlagsbulle».',
          },
        ],
      },
      toner: {
        emoji: '🎵',
        text: 'Medan de äter berättar Linu stolt att han har övat på de två ordaccenterna, så att han kan skilja «anden» som fågel från «anden» som spöke. Mikaela ser road ut och säger båda orden precis likadant. «De flesta av oss finlandssvenskar har inte de där tonerna alls», förklarar hon, «vår melodi är jämnare och påminner mer om finskan.» Linu inser att hans mödosamt inövade tonfall låter nästan teatraliskt här, och han skrattar åt sig själv.',
        translation:
          'Enquanto comem, o Linu conta orgulhoso que treinou os dois acentos tonais, para distinguir «anden», o pato, de «anden», o espírito. A Mikaela parece achar graça e diz as duas palavras exatamente igual. «A maioria de nós, suecos da Finlândia, não tem esses tons», explica ela, «a nossa melodia é mais plana e lembra mais o finlandês.» O Linu percebe que a entonação que ele treinou com tanto esforço soa quase teatral ali, e ri de si mesmo.',
        choices: [
          { text: 'Fråga hur många som talar svenska i Finland.', translation: 'Perguntar quantas pessoas falam sueco na Finlândia.', next: 'siffror' },
          { text: 'Fråga om hon någonsin blir tagen för rikssvensk.', translation: 'Perguntar se alguma vez a confundem com uma sueca da Suécia.', next: 'identitet' },
        ],
      },
      siffror: {
        emoji: '📊',
        text: '«Ungefär fem procent av befolkningen har svenska som modersmål, och svenskan är ett av landets två nationalspråk», säger Mikaela. «Längs kusten finns det byar där nästan alla talar svenska, men här i Helsingfors lever vi mitt i finskan och växlar hela tiden.» Hon pekar ut genom fönstret mot Svenska Teatern i slutet av Esplanaden, där hon ska se en pjäs i kväll. «Vill du följa med? Det blir finlandssvenska från scenen, men du kommer att förstå allt, det lovar jag.»',
        translation:
          '«Cerca de cinco por cento da população tem o sueco como língua materna, e o sueco é uma das duas línguas nacionais do país», diz a Mikaela. «No litoral há vilarejos onde quase todo mundo fala sueco, mas aqui em Helsinque a gente vive no meio do finlandês e troca de língua o tempo todo.» Ela aponta pela janela para o Teatro Sueco, no fim da Esplanada, onde vai ver uma peça hoje à noite. «Quer ir junto? Vai ser sueco da Finlândia no palco, mas você vai entender tudo, prometo.»',
        choices: [
          { text: 'Tacka ja till teatern.', translation: 'Aceitar o convite para o teatro.', next: 'teater' },
          { text: 'Tacka nej, han är för trött efter resan.', translation: 'Recusar, ele está cansado demais da viagem.', next: 'final_neutro' },
        ],
      },
      identitet: {
        emoji: '🪞',
        text: '«I Sverige tror folk ibland att jag är finsk när jag pratar, och i Finland tror en del att jag är svensk», säger Mikaela och rycker på axlarna. «Men jag är ingetdera: jag är finlandssvensk, och min svenska är lika riktig som din.» Linu nickar eftertänksamt och tänker att språkgränser sällan följer landsgränser. Mikaela berättar att hon har två biljetter till Svenska Teatern i kväll, och hon frågar om han vill följa med.',
        translation:
          '«Na Suécia, às vezes acham que eu sou finlandesa quando falo, e na Finlândia alguns acham que sou sueca», diz a Mikaela, dando de ombros. «Mas não sou nem uma coisa nem outra: sou sueca da Finlândia, e o meu sueco é tão correto quanto o seu.» O Linu concorda, pensativo, e reflete que as fronteiras das línguas raramente seguem as fronteiras dos países. A Mikaela conta que tem dois ingressos para o Teatro Sueco hoje à noite e pergunta se ele quer ir.',
        choices: [
          { text: 'Tacka ja till teatern.', translation: 'Aceitar o convite para o teatro.', next: 'teater' },
          { text: 'Tacka nej, han är för trött efter resan.', translation: 'Recusar, ele está cansado demais da viagem.', next: 'final_neutro' },
        ],
      },
      teater: {
        emoji: '🎭',
        text: 'Pjäsen är en komedi om en familj i skärgården, och publiken skrattar högt åt repliker som Linu förstår till nittio procent. Han märker att skådespelarna uttalar sj-ljudet mer som ett «sch» och att satsmelodin går upp och ner på ett annat sätt än i Stockholm. I pausen vågar han själv säga «morjens» till en äldre herre i kön till garderoben, och mannen svarar glatt på samma sätt. När ridån går ner efter sista akten frågar Mikaela vad han tyckte.',
        translation:
          'A peça é uma comédia sobre uma família no arquipélago, e o público ri alto de falas que o Linu entende noventa por cento. Ele repara que os atores pronunciam o som «sj» mais como um «ch» e que a melodia da frase sobe e desce de um jeito diferente de Estocolmo. No intervalo, ele mesmo se arrisca a dizer «morjens» a um senhor na fila da chapelaria, e o homem responde, contente, do mesmo jeito. Quando a cortina cai depois do último ato, a Mikaela pergunta o que ele achou.',
        choices: [{ text: '«Det var jättekiva! Vi råkas snart igen, hoppas jag.»', translation: '«Foi superlegal! A gente se vê logo de novo, espero.»', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Mikaela skiner upp och säger att han redan låter lite finlandssvensk, åtminstone när han säger «kiva». På väg ut i den kalla februarinatten går de förbi Havis Amanda, som glittrar av frost under gatlyktorna. Linu tänker att han kom till Helsingfors för att tala svenska och upptäckte att svenskan har fler hem än han trodde. Vid spårvagnshållplatsen vinkar Mikaela och ropar: «Vi råkas!», och den här gången vet han precis vad hon menar.',
        translation:
          'A Mikaela se ilumina e diz que ele já soa um pouco sueco da Finlândia, pelo menos quando diz «kiva». Saindo para a noite fria de fevereiro, eles passam pela Havis Amanda, que brilha de geada sob os postes. O Linu pensa que veio a Helsinque para falar sueco e descobriu que o sueco tem mais casas do que ele imaginava. No ponto do bonde, a Mikaela acena e grita: «Vi råkas!», e desta vez ele sabe exatamente o que ela quer dizer.',
        ending: { tone: 'bom', title: 'Um sueco com mais de uma casa', message: 'Você decifrou os finlandismos, aceitou uma melodia sem acentos tonais e ainda falou «morjens» com um nativo.' },
      },
      final_neutro: {
        emoji: '😴',
        text: 'Linu går tillbaka till hotellet, äter sin fastlagsbulle i sängen och somnar med kläderna på. Nästa morgon skickar Mikaela en bild från teatern, där hela salongen står upp och applåderar. «Du missade något riktigt kiva», skriver hon, «men vi råkas nästa gång du kommer.» Linu lovar att komma tillbaka, och den här gången ska han orka hela vägen till ridån.',
        translation:
          'O Linu volta ao hotel, come o seu fastlagsbulle na cama e dorme de roupa e tudo. Na manhã seguinte, a Mikaela manda uma foto do teatro, com a plateia inteira de pé aplaudindo. «Você perdeu uma coisa muito legal», escreve ela, «mas a gente se vê na próxima vez que você vier.» O Linu promete voltar, e desta vez vai aguentar até a cortina.',
        ending: { tone: 'neutro', title: 'Fica para a próxima', message: 'Você entendeu a Mikaela, mas perdeu a noite no teatro. Helsinque continua esperando.' },
      },
    },
  },
  {
    id: 'sv-h38',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Över bron',
    emoji: '🌉',
    summary: 'Numa viagem de trem de Malmö a Copenhague pela ponte do Öresund, o Linu aprende a ouvir o skånska e descobre as armadilhas do dinamarquês para quem fala sueco.',
    cultural_context:
      'A ligação do Öresund, inaugurada em 2000, une Malmö a Copenhague por uma ponte, a ilha artificial de Peberholm e um túnel submerso do lado dinamarquês. O skånska, falado no sul da Suécia, tem o «r» pronunciado no fundo da garganta, muitos ditongos e palavras próprias como «påg» (menino) e «tös» (menina); a Escânia pertenceu à Dinamarca até 1658.',
    start: 'start',
    glossary: [
      ['en påg', 'um menino (skånska)'],
      ['en tös', 'uma menina (skånska)'],
      ['skorra', 'pronunciar o r no fundo da garganta'],
      ['rolig', 'divertido (sueco); no dinamarquês, «rolig» é calmo'],
      ['frukost', 'café da manhã; no dinamarquês, «frokost» é almoço'],
      ['var och en på sitt språk', 'cada um na sua língua'],
      ['ett sund', 'um estreito'],
      ['göra bort sig', 'passar vergonha'],
    ],
    nodes: {
      start: {
        emoji: '🚆',
        text: 'På Malmö centralstation kliver Linu på Öresundståget tillsammans med sin skånska vän Hampus, som ska visa honom Köpenhamn för första gången. Hampus pratar snabbt och med ett r som skorrar långt bak i halsen, och varje vokal verkar glida över i en annan. «Du ska få se, pågen, om en halvtimme är vi i Danmark», säger han och klappar Linu på vingen. Linu förstår nästan allt, men ordet «pågen» får honom att tveka: är det ett smeknamn eller en förolämpning?',
        translation:
          'Na estação central de Malmö, o Linu embarca no trem do Öresund com o seu amigo escanense Hampus, que vai lhe mostrar Copenhague pela primeira vez. O Hampus fala rápido e com um r que arranha lá no fundo da garganta, e cada vogal parece escorregar para outra. «Você vai ver, garoto, em meia hora estamos na Dinamarca», diz ele, dando um tapinha na asa do Linu. O Linu entende quase tudo, mas a palavra «pågen» o faz hesitar: é um apelido carinhoso ou um insulto?',
        choices: [
          { text: 'Fråga Hampus vad «påg» betyder.', translation: 'Perguntar ao Hampus o que quer dizer «påg».', next: 'pag' },
          { text: 'Låtsas förstå och fråga försiktigt om Skåne i stället.', translation: 'Fingir que entendeu e perguntar com cuidado sobre a Escânia.', next: 'pag' },
        ],
      },
      pag: {
        emoji: '🗣️',
        text: '«En påg är en pojke, och en tös är en flicka, så säger vi i Skåne», förklarar Hampus stolt. «Och när du hör mig säga r längst bak i halsen, så är det inte en förkylning, det är skånska.» Han berättar att Skåne var danskt fram till 1658, och att många ord och ljud i dialekten påminner om danskan på andra sidan sundet. Tåget rullar ut ur staden, och snart ser Linu havet glittra på båda sidor.',
        translation:
          '«Påg é menino, e tös é menina, é assim que a gente fala na Escânia», explica o Hampus, orgulhoso. «E quando você me ouvir dizer o r lá no fundo da garganta, não é resfriado, é skånska.» Ele conta que a Escânia era dinamarquesa até 1658, e que muitas palavras e sons do dialeto lembram o dinamarquês do outro lado do estreito. O trem sai da cidade, e logo o Linu vê o mar brilhar dos dois lados.',
        choices: [
          { text: '«Då är jag alltså en påg, och din syster är en tös.»', translation: '«Então eu sou um påg, e a sua irmã é uma tös.»', next: 'bron' },
          {
            text: '«Så Skåne har alltid varit svenskt?»',
            translation: '«Então a Escânia sempre foi sueca?»',
            wrong: 'O Hampus disse que a Escânia era dinamarquesa até 1658 («var danskt fram till 1658»); por isso o dialeto lembra o dinamarquês do outro lado do estreito.',
          },
        ],
      },
      bron: {
        emoji: '🌉',
        text: 'Tåget susar ut på bron, och Linu trycker näbben mot fönstret: under dem ligger Öresund, grått och glittrande, med segelbåtar som små vita prickar. Mitt i sundet går rälsen ner på en konstgjord ö, Peberholm, och sedan försvinner tåget ner i en tunnel under havsbottnen. «Bro, ö och tunnel, allt på en halvtimme», säger Hampus. «Och när vi kommer upp igen är vi i Danmark, där folk skriver nästan som vi men pratar helt annorlunda.»',
        translation:
          'O trem dispara pela ponte, e o Linu cola o bico na janela: lá embaixo está o Öresund, cinzento e cintilante, com veleiros que parecem pontinhos brancos. No meio do estreito, os trilhos descem para uma ilha artificial, Peberholm, e depois o trem some num túnel sob o fundo do mar. «Ponte, ilha e túnel, tudo em meia hora», diz o Hampus. «E quando a gente subir de novo, estaremos na Dinamarca, onde o pessoal escreve quase como nós, mas fala de um jeito totalmente diferente.»',
        choices: [{ text: 'Fråga hur mycket danska Hampus förstår.', translation: 'Perguntar quanto de dinamarquês o Hampus entende.', next: 'danska' }],
      },
      danska: {
        emoji: '🇩🇰',
        text: '«Att läsa danska är lätt, för orden liknar våra, men att höra den är en annan sak», säger Hampus. «Danskarna sväljer halva orden, och räkneorden är en mardröm: femtio heter något som ungefär betyder “två och en halv gånger tjugo”.» Linu skrattar misstroget, men Hampus lovar att det är sant. «Och akta dig för ord som ser svenska ut men betyder något annat», varnar han, «som “rolig”, som på danska betyder lugn.»',
        translation:
          '«Ler dinamarquês é fácil, porque as palavras parecem as nossas, mas ouvir é outra história», diz o Hampus. «Os dinamarqueses engolem metade das palavras, e os números são um pesadelo: cinquenta se diz com uma palavra que significa mais ou menos “duas vezes e meia vinte”.» O Linu ri, incrédulo, mas o Hampus garante que é verdade. «E cuidado com palavras que parecem suecas mas querem dizer outra coisa», avisa ele, «como “rolig”, que em dinamarquês quer dizer calmo.»',
        choices: [{ text: 'Skriva upp varningen i anteckningsblocket.', translation: 'Anotar o aviso no caderninho.', next: 'kopenhamn' }],
      },
      kopenhamn: {
        emoji: '🍽️',
        text: 'I Köpenhamn möter de Mette, en dansk kollega till Hampus, som har bokat bord på en restaurang vid kanalen. Hon talar danska, långsamt och vänligt, Linu och Hampus svarar på svenska, och på något sätt fungerar samtalet ändå. När de beställer frågar Mette om de redan har ätit «frokost», och Linu svarar stolt att han åt gröt klockan sju. Mette ser förvånad ut, och Hampus viskar att «frokost» på danska betyder lunch.',
        translation:
          'Em Copenhague eles encontram a Mette, uma colega dinamarquesa do Hampus, que reservou mesa num restaurante à beira do canal. Ela fala dinamarquês, devagar e com simpatia, o Linu e o Hampus respondem em sueco, e de algum jeito a conversa funciona. Na hora de pedir, a Mette pergunta se eles já almoçaram («frokost»), e o Linu responde, orgulhoso, que comeu mingau às sete. A Mette parece surpresa, e o Hampus cochicha que «frokost» em dinamarquês é almoço.',
        choices: [{ text: '«Förlåt! Jag menade att jag inte har ätit lunch än.»', translation: '«Desculpe! Eu quis dizer que ainda não almocei.»', next: 'middag' }],
      },
      middag: {
        emoji: '🚲',
        text: 'Mette skrattar och säger att svenskar alltid gör just det misstaget, och att danskarna i sin tur blir förvirrade av svenskans «rolig». Under måltiden berättar hon om sin morgon: hon hade cyklat längs kanalerna medan staden sov, utan en människa i sikte. «Det var en meget rolig morgen», säger hon med ett drömmande leende. Linu försöker komma ihåg vad hans vän sa på tåget, eftersom han inte vill göra bort sig en gång till.',
        translation:
          'A Mette ri e diz que os suecos sempre cometem exatamente esse erro, e que os dinamarqueses, por sua vez, se confundem com o «rolig» do sueco. Durante a refeição, ela conta como foi a sua manhã: tinha pedalado pelos canais enquanto a cidade dormia, sem uma pessoa à vista. «Foi uma manhã muito tranquila», diz ela, com um sorriso sonhador. O Linu tenta lembrar o que o amigo disse no trem, porque não quer passar vergonha de novo.',
        choices: [
          { text: '«Vad skönt med en lugn morgon, när ingen är ute.»', translation: '«Que delícia uma manhã calma, quando não tem ninguém na rua.»', next: 'kvall' },
          {
            text: '«Så du hade jätteroligt? Berätta, vad hände?»',
            translation: '«Então você se divertiu muito? Conta, o que aconteceu?»',
            wrong: 'No dinamarquês, «rolig» quer dizer «calmo, tranquilo», como o Hampus avisou no trem. A Mette descreveu uma manhã sossegada de bicicleta pela cidade adormecida, sem ninguém à vista — não uma manhã divertida.',
          },
        ],
      },
      kvall: {
        emoji: '🌆',
        text: 'Efter middagen promenerar de längs Nyhavn, där de färggranna husen speglar sig i vattnet och folk sitter på kajkanten i kvällssolen. Mette berättar att hon och Hampus alltid talar var sitt språk med varandra, något som man ibland kallar skandinaviska. «Det kräver lite tålamod och mycket god vilja», säger hon, «men det är ju det finaste med att vara grannar.» Klockan närmar sig elva, och Hampus tittar oroligt på tidtabellen.',
        translation:
          'Depois do jantar, eles passeiam por Nyhavn, onde as casas coloridas se refletem na água e as pessoas se sentam na beira do cais no sol do fim de tarde. A Mette conta que ela e o Hampus sempre falam cada um na sua língua, algo que às vezes se chama de «escandinavo». «Exige um pouco de paciência e muita boa vontade», diz ela, «mas é a coisa mais bonita de ser vizinhos.» Já são quase onze horas, e o Hampus olha preocupado para o horário dos trens.',
        choices: [
          { text: 'Stanna en stund till och öva skandinaviska med Mette.', translation: 'Ficar mais um pouco e praticar o «escandinavo» com a Mette.', next: 'final_bom' },
          { text: 'Springa till stationen med Hampus direkt.', translation: 'Correr para a estação com o Hampus imediatamente.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'De sitter kvar på kajen en timme till, och Linu övar på att förstå Mettes danska utan att be henne upprepa. Han märker att det går bättre ju mindre han anstränger sig, när han slutar översätta varje ord och i stället lyssnar efter helheten. När de till slut tar ett senare tåg hem över bron ser han Malmös ljus närma sig över det mörka sundet. «Nu talar du tre språk», säger Hampus, «svenska, skånska och lite danska.»',
        translation:
          'Eles ficam no cais mais uma hora, e o Linu treina entender o dinamarquês da Mette sem pedir que ela repita. Ele percebe que funciona melhor quanto menos se esforça, quando para de traduzir cada palavra e escuta o conjunto. Quando finalmente pegam um trem mais tarde de volta pela ponte, ele vê as luzes de Malmö se aproximarem sobre o estreito escuro. «Agora você fala três línguas», diz o Hampus, «sueco, skånska e um pouco de dinamarquês.»',
        ending: { tone: 'bom', title: 'Três línguas numa ponte', message: 'Você decifrou o skånska, escapou das armadilhas do dinamarquês e aprendeu a conversar cada um na sua língua.' },
      },
      final_neutro: {
        emoji: '🏃',
        text: 'De springer genom de nattliga gatorna och hinner precis med tåget, andfådda och svettiga. På vägen över bron somnar Hampus med huvudet mot fönstret, och Linu sitter ensam och tänker på allt han inte hann fråga Mette. Han vet nu att «rolig» och «frokost» är fällor, men danskan känns fortfarande som ett pussel med för många bitar. Nästa gång, lovar han sig själv, ska han stanna längre och lyssna mer.',
        translation:
          'Eles correm pelas ruas à noite e pegam o trem por um triz, ofegantes e suados. Na travessia da ponte, o Hampus dorme com a cabeça na janela, e o Linu fica sozinho pensando em tudo o que não deu tempo de perguntar à Mette. Agora ele sabe que «rolig» e «frokost» são armadilhas, mas o dinamarquês ainda parece um quebra-cabeça com peças demais. Da próxima vez, promete a si mesmo, vai ficar mais e ouvir mais.',
        ending: { tone: 'neutro', title: 'O último trem', message: 'Você entendeu as armadilhas, mas faltou tempo de ouvido. O dinamarquês se aprende escutando.' },
      },
    },
  },
  {
    id: 'sv-h39',
    level: 'C1.1',
    cefr: 'C1',
    title: 'En svensk i Oslo',
    emoji: '🗿',
    summary: 'Em Oslo, o Linu descobre que sueco e norueguês se entendem quase sem esforço — mas que algumas palavras iguais escondem sentidos diferentes. Uma amiga de Gotland completa a lição de variação.',
    cultural_context:
      'Suecos e noruegueses costumam conversar cada um na sua língua, porque o sueco e o norueguês são muito próximos; na fala, os suecos em geral entendem o norueguês mais facilmente que o dinamarquês. A Noruega esteve unida à Suécia sob o mesmo rei de 1814 a 1905, e Oslo se chamou Christiania, depois Kristiania, até 1925. Em Gotland, o gutamål tradicional descende do antigo gútnico e é conhecido pelos seus ditongos.',
    start: 'start',
    glossary: [
      ['rar', 'no sueco: meigo, fofo; no norueguês: estranho'],
      ['semester', 'no sueco: férias; no norueguês: semestre letivo'],
      ['ferie', 'férias (norueguês)'],
      ['morsom', 'engraçado, divertido (norueguês)'],
      ['kjempebra', 'ótimo (norueguês)'],
      ['gutamål', 'a fala tradicional de Gotland'],
      ['en diftong', 'um ditongo'],
      ['en falsk vän', 'um falso amigo (palavra parecida com sentido diferente)'],
    ],
    nodes: {
      start: {
        emoji: '🚉',
        text: 'En solig lördag i maj kliver Linu av tåget i Oslo tillsammans med Tove, en vän från Visby som studerar i Norge. Tove växlar obekymrat mellan svenska och norska, och ibland dyker det mitt i en mening upp ett ord som varken är det ena eller det andra. «Det är gotländska», säger hon och skrattar, «mormor pratar fortfarande gutamål, med diftonger som får fastlandssvenskar att tappa hakan.» De ska träffa hennes norska studiekamrat Ingrid i Frognerparken.',
        translation:
          'Num sábado ensolarado de maio, o Linu desce do trem em Oslo com a Tove, uma amiga de Visby que estuda na Noruega. A Tove passa tranquilamente do sueco ao norueguês, e às vezes, no meio de uma frase, aparece uma palavra que não é nem uma coisa nem outra. «É gotlandês», diz ela, rindo, «a minha avó ainda fala gutamål, com ditongos que deixam os suecos do continente de queixo caído.» Eles vão encontrar a colega de estudos norueguesa dela, Ingrid, no Parque Frogner.',
        choices: [
          { text: 'Be Tove säga något på gutamål.', translation: 'Pedir à Tove que diga algo em gutamål.', next: 'gutamal' },
          { text: 'Gå direkt till parken.', translation: 'Ir direto para o parque.', next: 'parken' },
        ],
      },
      gutamal: {
        emoji: '🐑',
        text: 'Tove försöker, men hon skrattar så mycket att hon får börja om tre gånger. «Jag kan bara några fraser, och jag uttalar dem nog fel», medger hon. «Men lyssna på melodin: där en stockholmare har en enda ren vokal, kan vi på Gotland ha två som glider ihop.» Hon förklarar att gutamålet härstammar från forngutniskan, som redan på medeltiden skilde sig tydligt från fastlandets fornsvenska. Linu antecknar ivrigt och tänker att Sverige är större än han trodde, åtminstone språkligt.',
        translation:
          'A Tove tenta, mas ri tanto que precisa recomeçar três vezes. «Só sei algumas frases, e devo pronunciar errado», admite. «Mas escuta a melodia: onde um estocolmense tem uma única vogal pura, nós em Gotland podemos ter duas que deslizam juntas.» Ela explica que o gutamål descende do gútnico antigo, que já na Idade Média era claramente diferente do sueco antigo do continente. O Linu anota tudo, animado, e pensa que a Suécia é maior do que ele imaginava, pelo menos em matéria de língua.',
        choices: [{ text: 'Fortsätta mot parken.', translation: 'Seguir para o parque.', next: 'parken' }],
      },
      parken: {
        emoji: '⛲',
        text: 'I Frognerparken står Gustav Vigelands skulpturer i långa rader, människor i granit och brons som gråter, skrattar, brottas och kramas. Ingrid väntar vid fontänen och hälsar med ett glatt «Hei! Så hyggelig at dere kom!». Linu förstår varje ord utan att anstränga sig, och när han svarar på svenska nickar Ingrid som om de talade samma språk. «Vi pratar var och en på sitt eget språk», förklarar Tove, «och det fungerar oftast förvånansvärt bra.»',
        translation:
          'No Parque Frogner, as esculturas de Gustav Vigeland se enfileiram: pessoas de granito e bronze que choram, riem, lutam e se abraçam. A Ingrid espera junto à fonte e cumprimenta com um alegre «Oi! Que bom que vocês vieram!». O Linu entende cada palavra sem esforço, e quando responde em sueco a Ingrid concorda com a cabeça como se falassem a mesma língua. «A gente fala cada um na sua própria língua», explica a Tove, «e na maioria das vezes funciona surpreendentemente bem.»',
        choices: [{ text: 'Fråga Ingrid vilken skulptur hon tycker bäst om.', translation: 'Perguntar à Ingrid de qual escultura ela mais gosta.', next: 'staty' }],
      },
      staty: {
        emoji: '😠',
        text: 'Ingrid leder dem till en liten bronsstaty av en arg pojke som stampar med foten, och hon berättar att han kallas Sinnataggen och att han är en av parkens mest fotograferade figurer. Framför honom står det alltid en klunga turister med kameror. Ingrid betraktar den ilskna lilla pojken och säger på norska att hon tycker att han är «litt rar». Linu ser på statyns knutna nävar och funderar på vad hon egentligen menar.',
        translation:
          'A Ingrid os leva até uma pequena estátua de bronze de um menino bravo batendo o pé, e conta que ele se chama Sinnataggen, uma das figuras mais fotografadas do parque. Na frente dele há sempre um grupinho de turistas com câmeras. A Ingrid observa o menininho furioso e diz em norueguês que o acha «meio estranho». O Linu olha os punhos cerrados da estátua e se pergunta o que ela quer dizer de fato.',
        choices: [
          { text: '«Ja, han är verkligen konstig, med all den där ilskan.»', translation: '«É, ele é esquisito mesmo, com toda essa raiva.»', next: 'glass' },
          {
            text: '«Ja, han är så söt och gullig!»',
            translation: '«É, ele é tão meigo e fofinho!»',
            wrong: 'No norueguês, «rar» quer dizer «estranho, esquisito», e não «meigo, fofo» como no sueco. A Ingrid acha o menino meio esquisito — e ele está batendo o pé de raiva, nada de fofo.',
          },
        ],
      },
      glass: {
        emoji: '🍦',
        text: 'På väg ut ur parken köper de glass, och Ingrid frågar om Linu har semester nu. Han svarar glatt att han har tre veckors semester och att han ska resa runt i hela Norden. Ingrid ser förvirrad ut, och Tove förklarar skrattande att «semester» på norska betyder termin, som på universitetet, medan norrmännen säger «ferie» när de är lediga. «Så för Ingrid lät det som om du skulle plugga i tre veckor och kalla det en resa», säger hon.',
        translation:
          'Saindo do parque eles compram sorvete, e a Ingrid pergunta se o Linu está de «semester» agora. Ele responde, alegre, que tem três semanas de férias e que vai viajar pelos países nórdicos todos. A Ingrid parece confusa, e a Tove explica, rindo, que «semester» em norueguês quer dizer semestre, como na universidade, enquanto os noruegueses dizem «ferie» quando estão de folga. «Então, para a Ingrid, pareceu que você ia estudar três semanas e chamar isso de viagem», diz ela.',
        choices: [
          { text: '«Då säger jag att jag har ferie, och att det är morsomt.»', translation: '«Então vou dizer que estou de ferie, e que é morsomt.»', next: 'union' },
          {
            text: '«Så “ferie” betyder termin på norska?»',
            translation: '«Então “ferie” quer dizer semestre em norueguês?»',
            wrong: 'É o contrário: em norueguês, «semester» é o período letivo (semestre), e «ferie» são as férias. Por isso a Ingrid entendeu que o Linu ia passar três semanas estudando.',
          },
        ],
      },
      union: {
        emoji: '👑',
        text: 'Ingrid skrattar och säger att hans norska redan är «kjempebra». Hon berättar att Norge och Sverige hade samma kung från 1814 till 1905, och att Oslo hette Kristiania fram till 1925. «Därför har svenskar och norrmän skämtat om varandra i över hundra år, som syskon gör», säger hon. På kvällen föreslår hon en båttur på Oslofjorden, men Tove vill hellre gå på en konsert med en gotländsk visgrupp.',
        translation:
          'A Ingrid ri e diz que o norueguês dele já está «ótimo». Ela conta que a Noruega e a Suécia tiveram o mesmo rei de 1814 a 1905, e que Oslo se chamava Kristiania até 1925. «Por isso suecos e noruegueses fazem piada uns dos outros há mais de cem anos, como irmãos», diz ela. À noite, ela sugere um passeio de barco pelo fiorde de Oslo, mas a Tove prefere ir a um show de um grupo de canções gotlandesas.',
        choices: [
          { text: 'Följa med Ingrid ut på fjorden.', translation: 'Ir com a Ingrid ao fiorde.', next: 'final_bom' },
          { text: 'Gå på konserten med Tove.', translation: 'Ir ao show com a Tove.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🌅',
        text: 'Båten glider ut mellan öarna i Oslofjorden, och kvällssolen färgar vattnet guldgult. Linu och Ingrid pratar i två timmar, han på svenska och hon på norska, och bara en enda gång måste de ta till engelska. De skrattar åt «rar» och «semester» och kommer på fler falska vänner, tills Linu har en hel lista. När båten lägger till tänker han att grannspråk är som grannar: man behöver inte vara likadana för att förstå varandra.',
        translation:
          'O barco desliza entre as ilhas do fiorde de Oslo, e o sol da tarde pinta a água de dourado. O Linu e a Ingrid conversam duas horas, ele em sueco e ela em norueguês, e só uma única vez precisam recorrer ao inglês. Eles riem de «rar» e «semester» e descobrem mais falsos amigos, até o Linu ter uma lista inteira. Quando o barco atraca, ele pensa que línguas vizinhas são como vizinhos: não é preciso ser igual para se entender.',
        ending: { tone: 'bom', title: 'Cada um na sua língua', message: 'Você conversou em sueco com uma norueguesa, desarmou os falsos amigos e ainda aprendeu sobre o gutamål.' },
      },
      final_neutro: {
        emoji: '🎶',
        text: 'Konserten är full av värme och gotländska diftonger, och Tove sjunger med i varenda refräng. Linu förstår ungefär hälften av texterna och trivs ändå, även om han undrar hur båtturen på fjorden hade blivit. Efteråt får han ett sms från Ingrid med en bild av solnedgången över vattnet och orden «Neste gang!». Han bestämmer sig för att komma tillbaka till Oslo, gärna under sin semester och inte under hennes.',
        translation:
          'O show é cheio de calor humano e ditongos gotlandeses, e a Tove canta junto cada refrão. O Linu entende mais ou menos metade das letras e se diverte mesmo assim, embora se pergunte como teria sido o passeio no fiorde. Depois, recebe uma mensagem da Ingrid com uma foto do pôr do sol sobre a água e as palavras «Da próxima vez!». Ele decide voltar a Oslo, de preferência durante as férias dele, e não durante o semestre dela.',
        ending: { tone: 'neutro', title: 'O fiorde fica para depois', message: 'Você ganhou uma noite de gotlandês, mas perdeu a conversa em norueguês no fiorde.' },
      },
    },
  },
  // ───────────────────────── C1.2 ─────────────────────────
  {
    id: 'sv-h40',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Landet som växer',
    emoji: '🪨',
    summary: 'Em Vasa (Vaasa), na costa sueca da Finlândia, o Linu ajuda uma geóloga a transformar um texto científico cheio de nominalizações num texto claro sobre a terra que sobe do mar.',
    cultural_context:
      'O arquipélago de Kvarken, perto de Vasa, é Patrimônio Mundial da UNESCO desde 2006, junto com a Costa Alta sueca: desde o fim da última glaciação, a terra, aliviada do peso do gelo, sobe cerca de 8 mm por ano, e novas ilhas surgem do mar. A própria Vasa, depois do grande incêndio de 1852, foi reconstruída mais perto do litoral, que tinha se afastado da cidade antiga.',
    start: 'start',
    glossary: [
      ['landhöjningen', 'o soerguimento da terra'],
      ['en nominalisering', 'uma nominalização (verbo transformado em substantivo)'],
      ['inlandsisen', 'a camada de gelo continental'],
      ['en moränrygg', 'uma crista de morena (sedimento deixado pelo gelo)'],
      ['strandlinjen', 'a linha da costa'],
      ['ett fackord', 'um termo técnico'],
      ['en faktaruta', 'um quadro de informações'],
      ['ett världsarv', 'um patrimônio mundial'],
    ],
    nodes: {
      start: {
        emoji: '🏢',
        text: 'I Vasa, på Finlands västkust, har Linu fått ett sommarjobb på ett naturum, där han ska hjälpa geologen Annika med en ny utställningstext. Hon lägger fram ett papper på bordet och suckar djupt. «Texten är skriven av en forskare för forskare», säger hon, «men våra besökare är barnfamiljer och turister med glass i händerna.» Linu läser den första meningen: «Till följd av avsmältningen av inlandsisen sker en fortgående höjning av landmassan, vilket medför en successiv förskjutning av strandlinjen.»',
        translation:
          'Em Vasa, na costa oeste da Finlândia, o Linu conseguiu um emprego de verão num centro de natureza, onde vai ajudar a geóloga Annika com um texto novo para a exposição. Ela põe um papel na mesa e suspira fundo. «O texto foi escrito por um pesquisador para pesquisadores», diz ela, «mas os nossos visitantes são famílias com crianças e turistas de sorvete na mão.» O Linu lê a primeira frase: «Em decorrência do derretimento da camada de gelo continental, ocorre uma elevação contínua da massa de terra, o que acarreta um deslocamento sucessivo da linha da costa.»',
        choices: [
          { text: 'Försöka förstå meningen bit för bit.', translation: 'Tentar entender a frase pedaço por pedaço.', next: 'analys' },
          { text: 'Fråga Annika vad texten egentligen vill säga.', translation: 'Perguntar à Annika o que o texto quer dizer de verdade.', next: 'forklaring' },
        ],
      },
      analys: {
        emoji: '🔍',
        text: 'Linu tar meningen i bitar och ringar in alla substantiv som egentligen döljer ett verb: avsmältning, höjning, förskjutning. «Varje sådant ord är en händelse som har frusit till en sak», säger Annika, «och det är det vi kallar nominalisering.» Han märker att meningen nästan saknar riktiga verb, bara «sker» och «medför», som inte berättar särskilt mycket. Om man tinar upp substantiven blir allt plötsligt enkelt: isen smälte, landet höjer sig och stranden flyttar sig utåt.',
        translation:
          'O Linu divide a frase em pedaços e circula todos os substantivos que na verdade escondem um verbo: derretimento, elevação, deslocamento. «Cada palavra dessas é um acontecimento que congelou e virou coisa», diz a Annika, «e é isso que chamamos de nominalização.» Ele repara que a frase quase não tem verbos de verdade, só «ocorre» e «acarreta», que não dizem grande coisa. Se a gente descongela os substantivos, tudo fica simples de repente: o gelo derreteu, a terra se eleva e a praia se desloca para fora.',
        choices: [
          { text: 'Skriva om meningen med verb i stället.', translation: 'Reescrever a frase com verbos.', next: 'omskrivning' },
          {
            text: '«Alltså sjunker landet långsamt ner i havet.»',
            translation: '«Então a terra está afundando devagar no mar.»',
            wrong: 'O texto fala de «höjning av landmassan», a ELEVAÇÃO da massa de terra: a terra sobe, e por isso a linha da costa se desloca mar adentro. Nada afunda — é o contrário.',
          },
        ],
      },
      forklaring: {
        emoji: '✏️',
        text: '«Egentligen är det enkelt», säger Annika och ritar en båge på ett papper. «Under istiden låg här en is som var flera kilometer tjock, och den tryckte ner jordskorpan som en tumme i en deg.» När isen smälte började landet resa sig igen, förklarar hon, och det gör det fortfarande, ungefär åtta millimeter om året. Hon ler och tillägger att varje generation i Kvarken får lite mer land än den förra.',
        translation:
          '«No fundo é simples», diz a Annika, desenhando um arco num papel. «Na era glacial havia aqui um gelo de vários quilômetros de espessura, e ele afundava a crosta terrestre como um polegar numa massa.» Quando o gelo derreteu, explica ela, a terra começou a subir de novo, e continua subindo, cerca de oito milímetros por ano. Ela sorri e acrescenta que cada geração em Kvarken ganha um pouco mais de terra que a anterior.',
        choices: [{ text: 'Föreslå att de skriver precis så i utställningen.', translation: 'Sugerir que escrevam exatamente assim na exposição.', next: 'omskrivning' }],
      },
      omskrivning: {
        emoji: '📝',
        text: 'Tillsammans skriver de: «För tiotusen år sedan låg ett tjockt istäcke över landet. När isen smälte började marken sakta resa sig, och det gör den än i dag. Därför blir kusten längre för varje år, och nya öar stiger upp ur havet.» Annika läser högt och nickar belåtet, men sedan rynkar hon pannan. «Min chef kommer att säga att vi har förenklat för mycket och att siffrorna och fackorden måste vara med.»',
        translation:
          'Juntos, eles escrevem: «Há dez mil anos, uma grossa camada de gelo cobria a terra. Quando o gelo derreteu, o solo começou a subir devagar, e continua subindo até hoje. Por isso a costa fica mais extensa a cada ano, e novas ilhas surgem do mar.» A Annika lê em voz alta e concorda, satisfeita, mas depois franze a testa. «O meu chefe vai dizer que simplificamos demais e que os números e os termos técnicos precisam estar lá.»',
        choices: [
          { text: 'Föreslå en faktaruta för den som vill veta mer.', translation: 'Sugerir um quadro de informações para quem quiser saber mais.', next: 'faktaruta' },
          { text: 'Stryka alla siffror och fackord ändå.', translation: 'Cortar todos os números e termos técnicos mesmo assim.', next: 'final_neutro' },
        ],
      },
      faktaruta: {
        emoji: '📦',
        text: 'Linu föreslår att huvudtexten ska vara kort och klar, medan en liten faktaruta vid sidan av får innehålla fackorden. Där skriver de: «Landhöjning: cirka 8 mm per år. De Geer-moräner: låga moränryggar som bildades vid iskanten när den drog sig tillbaka.» Annika tycker att det är en utmärkt kompromiss, eftersom både barnen och geologerna får sitt. Hon föreslår att de ska åka ut i skärgården nästa dag, så att Linu får se moränerna med egna ögon.',
        translation:
          'O Linu sugere que o texto principal seja curto e claro, enquanto um quadrinho ao lado reúne os termos técnicos. Ali eles escrevem: «Soerguimento da terra: cerca de 8 mm por ano. Morenas De Geer: cristas baixas de morena formadas na borda do gelo, à medida que ele recuava.» A Annika acha um ótimo meio-termo, porque tanto as crianças quanto os geólogos saem ganhando. Ela sugere irem ao arquipélago no dia seguinte, para o Linu ver as morenas com os próprios olhos.',
        choices: [{ text: 'Tacka ja till utflykten.', translation: 'Aceitar o passeio.', next: 'skargard' }],
      },
      skargard: {
        emoji: '🏝️',
        text: 'Nästa morgon kör de över Replotbron, Finlands längsta bro, och ut i Kvarkens skärgård. Från ett utsiktstorn ser Linu långa, smala moränryggar som ligger i rader i vattnet, som om en jätte hade krattat havsbottnen. Annika pekar på en gammal fiskebod som i dag står flera meter från vattnet. «När den byggdes stod den vid stranden», säger hon, «landet har bokstavligen vuxit ifrån den.»',
        translation:
          'Na manhã seguinte eles atravessam a ponte de Replot, a mais longa da Finlândia, e seguem para o arquipélago de Kvarken. De uma torre de observação, o Linu vê cristas de morena longas e estreitas enfileiradas na água, como se um gigante tivesse passado o ancinho no fundo do mar. A Annika aponta para uma velha cabana de pescador que hoje fica a vários metros da água. «Quando foi construída, ficava na praia», diz ela, «a terra literalmente cresceu para longe dela.»',
        choices: [
          { text: '«Landhöjning betyder alltså att kusten flyttar sig utåt, inte att havet sjunker.»', translation: '«Então soerguimento quer dizer que a costa avança para fora, e não que o mar baixa.»', next: 'vasastad' },
          {
            text: '«Så fiskarna har flyttat boden bort från vattnet?»',
            translation: '«Então os pescadores mudaram a cabana para longe da água?»',
            wrong: 'A Annika diz que a terra «cresceu para longe» da cabana («vuxit ifrån den»): ninguém a mudou de lugar. Foi o soerguimento da terra que afastou a água, milímetro por milímetro.',
          },
        ],
      },
      vasastad: {
        emoji: '🔥',
        text: 'På hemvägen berättar Annika att landhöjningen har format även Vasas historia. Efter den stora branden 1852 byggdes staden upp på en ny plats närmare havet, eftersom den gamla hamnen hade blivit allt grundare. «Landet växte ifrån staden, så staden fick flytta efter havet», säger hon. Linu antecknar meningen och tänker att den säger mer än hela den ursprungliga utställningstexten.',
        translation:
          'No caminho de volta, a Annika conta que o soerguimento da terra moldou também a história de Vasa. Depois do grande incêndio de 1852, a cidade foi reconstruída num lugar novo, mais perto do mar, porque o porto antigo tinha ficado cada vez mais raso. «A terra cresceu para longe da cidade, então a cidade teve que ir atrás do mar», diz ela. O Linu anota a frase e pensa que ela diz mais do que todo o texto original da exposição.',
        choices: [{ text: 'Föreslå att meningen blir utställningens rubrik.', translation: 'Sugerir que a frase vire o título da exposição.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Utställningen öppnar i augusti, och i entrén står med stora bokstäver: «Landet växte ifrån staden, så staden fick flytta efter havet.» Barnen läser huvudtexten högt för sina föräldrar, och en pensionerad geolog stannar länge vid faktarutan och nickar gillande. Annikas chef, som först var skeptisk, medger att klarspråk inte innebär att man förenklar sanningen, bara att man gör den tillgänglig. Linu får ett tackkort med en bild av en liten ny ö som har stigit upp ur Kvarken.',
        translation:
          'A exposição abre em agosto, e na entrada está escrito em letras grandes: «A terra cresceu para longe da cidade, então a cidade teve que ir atrás do mar.» As crianças leem o texto principal em voz alta para os pais, e um geólogo aposentado fica muito tempo diante do quadro de informações, concordando com a cabeça. O chefe da Annika, que no começo estava cético, admite que linguagem clara não significa simplificar a verdade, só torná-la acessível. O Linu recebe um cartão de agradecimento com a foto de uma ilhota nova que surgiu em Kvarken.',
        ending: { tone: 'bom', title: 'Ciência em linguagem clara', message: 'Você desmontou as nominalizações, manteve o rigor num quadro à parte e fez a ciência chegar a todos.' },
      },
      final_neutro: {
        emoji: '📉',
        text: 'Annikas chef läser den förenklade texten och skickar tillbaka den med en enda kommentar: «Var finns vetenskapen?» Utan siffror och fackord känns texten tunn för de besökare som vill veta mer, och den nya versionen blir en kompromiss som ingen är riktigt nöjd med. Linu lär sig att klarspråk inte betyder att man stryker allt svårt, utan att man ordnar det. Nästa sommar, lovar han Annika, ska de göra om det på rätt sätt.',
        translation:
          'O chefe da Annika lê o texto simplificado e o devolve com um único comentário: «Cadê a ciência?» Sem números e termos técnicos, o texto parece raso para os visitantes que querem saber mais, e a nova versão vira um meio-termo que não agrada a ninguém. O Linu aprende que linguagem clara não é cortar tudo o que é difícil, e sim organizar. No próximo verão, promete ele à Annika, vão refazer do jeito certo.',
        ending: { tone: 'neutro', title: 'Claro demais', message: 'Linguagem clara não é tirar a ciência do texto: faltou um lugar para os números e os termos técnicos.' },
      },
    },
  },
  {
    id: 'sv-h41',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Klarspråk vid gränsen',
    emoji: '📜',
    summary: 'Em Haparanda, na fronteira com a Finlândia, o Linu estagia na prefeitura e reescreve em linguagem clara um folheto sobre o direito de usar o meänkieli.',
    cultural_context:
      'Desde 2000, a Suécia reconhece cinco línguas minoritárias nacionais: sámi, finlandês, meänkieli, romani chib e ídiche. O meänkieli («a nossa língua») é falado no vale do rio Torne, e Haparanda faz parte das áreas administrativas onde se pode usar o finlandês e o meänkieli com as autoridades; a lei sueca de línguas, de 2009, exige que a linguagem do setor público seja «cuidada, simples e compreensível». Do outro lado do rio fica a cidade finlandesa de Tornio, uma hora à frente no relógio.',
    start: 'start',
    glossary: [
      ['klarspråk', 'linguagem clara'],
      ['myndighetssvenska', 'o sueco burocrático'],
      ['krångelsvenska', 'sueco complicado (pejorativo)'],
      ['en enskild', 'um particular, um cidadão comum'],
      ['äga rätt', 'ter direito (jurídico e arcaico)'],
      ['ett förvaltningsområde', 'uma área administrativa (com direitos para a língua minoritária)'],
      ['tillhandahålla', 'fornecer, providenciar'],
      ['en tornedaling', 'um habitante do vale do Torne'],
    ],
    nodes: {
      start: {
        emoji: '🏞️',
        text: 'Haparanda ligger vid Torne älv, precis vid gränsen, och tvillingstaden Torneå på den finska sidan är så nära att man kan promenera dit på några minuter. Linu gör praktik på kommunens informationsavdelning, och på hans första dag lägger chefen, Päivi, en broschyr framför honom. «Den här ska skrivas om på klarspråk», säger hon, «ingen förstår den, inte ens jag.» Linu läser den första meningen: «Enskild äger rätt att vid muntliga och skriftliga kontakter med förvaltningsmyndighet inom förvaltningsområdet använda meänkieli.»',
        translation:
          'Haparanda fica às margens do rio Torne, bem na fronteira, e a cidade gêmea de Tornio, do lado finlandês, é tão perto que dá para ir a pé em poucos minutos. O Linu está estagiando no setor de informação da prefeitura, e no primeiro dia a chefe, Päivi, põe um folheto na frente dele. «Este aqui tem que ser reescrito em linguagem clara», diz ela, «ninguém entende, nem eu.» O Linu lê a primeira frase: «O particular tem o direito de, nos contatos orais e escritos com a autoridade administrativa dentro da área administrativa, usar o meänkieli.»',
        choices: [
          { text: 'Fråga vad «enskild» betyder här.', translation: 'Perguntar o que «enskild» quer dizer aqui.', next: 'enskild' },
          { text: 'Börja skriva om meningen direkt.', translation: 'Começar a reescrever a frase direto.', next: 'forsok' },
        ],
      },
      enskild: {
        emoji: '🧑',
        text: '«En enskild är helt enkelt en vanlig människa, du eller jag, när vi inte företräder en organisation», förklarar Päivi. «Och “äger rätt” betyder bara “har rätt”, det är ett gammalt juridiskt uttryck som har överlevt i myndighetstexter.» Hon berättar att hennes mormor talade meänkieli hemma, men att hon i skolan fick lära sig att det var något man skulle skämmas för. «Därför är det viktigt att den här broschyren verkligen går fram», säger hon allvarligt.',
        translation:
          '«Um “enskild” é simplesmente uma pessoa comum, você ou eu, quando não estamos representando uma organização», explica a Päivi. «E “äger rätt” quer dizer só “tem direito”, é uma expressão jurídica antiga que sobreviveu nos textos oficiais.» Ela conta que a avó falava meänkieli em casa, mas que na escola aprendeu que aquilo era motivo de vergonha. «Por isso é importante que este folheto chegue de verdade às pessoas», diz ela, séria.',
        choices: [
          { text: '«Meningen säger alltså att du och jag får tala meänkieli med kommunen.»', translation: '«Então a frase diz que você e eu podemos falar meänkieli com a prefeitura.»', next: 'forsok' },
          {
            text: '«Alltså får bara organisationer använda meänkieli med kommunen.»',
            translation: '«Então só as organizações podem usar o meänkieli com a prefeitura.»',
            wrong: 'A Päivi explicou que «enskild» é justamente um particular, uma pessoa comum — «du eller jag», quando NÃO representamos uma organização. O direito é de qualquer cidadão.',
          },
        ],
      },
      forsok: {
        emoji: '✍️',
        text: 'Linu skriver: «Du har rätt att använda meänkieli när du pratar med eller skriver till kommunen.» Päivi läser meningen två gånger och ler för första gången den dagen. «Den är nästan lika lång, men nu förstår man vem som har rätten och när den gäller», säger hon. Hon förklarar att språklagen faktiskt kräver att språket i offentlig verksamhet ska vara vårdat, enkelt och begripligt, så klarspråk är inte bara en god idé utan en skyldighet.',
        translation:
          'O Linu escreve: «Você tem direito de usar o meänkieli quando fala ou escreve com a prefeitura.» A Päivi lê a frase duas vezes e sorri pela primeira vez naquele dia. «Ela é quase do mesmo tamanho, mas agora dá para entender quem tem o direito e quando ele vale», diz ela. Ela explica que a lei de línguas exige que a linguagem do setor público seja cuidada, simples e compreensível, então a linguagem clara não é só uma boa ideia, é uma obrigação.',
        choices: [{ text: 'Fortsätta med nästa stycke.', translation: 'Passar para o parágrafo seguinte.', next: 'stycke' }],
      },
      stycke: {
        emoji: '🧾',
        text: 'Nästa stycke är ännu värre: «Vid handläggning av ärende där enskild använt meänkieli sker kommunicering i möjligaste mån på detta språk, varvid tolk vid behov tillhandahålls.» Linu ringar in substantiven som döljer verb och den passiva formen i slutet, som döljer vem som gör vad. Han funderar på vem som egentligen ska göra något här, kommunen eller medborgaren. Päivi lutar sig tillbaka i stolen och väntar på hans förslag.',
        translation:
          'O parágrafo seguinte é ainda pior: «No processamento de caso em que o particular tenha usado o meänkieli, a comunicação se dá, na medida do possível, nessa língua, sendo que intérprete é fornecido quando necessário.» O Linu circula os substantivos que escondem verbos e a forma passiva do final, que esconde quem faz o quê. Ele se pergunta quem, afinal, tem que fazer alguma coisa aqui: a prefeitura ou o cidadão. A Päivi se recosta na cadeira e espera a proposta dele.',
        choices: [
          {
            text: '«Om du skriver på meänkieli svarar vi så långt det går på meänkieli, och vi ordnar tolk om det behövs.»',
            translation: '«Se você escrever em meänkieli, respondemos em meänkieli sempre que possível, e providenciamos intérprete se for preciso.»',
            next: 'besok',
          },
          {
            text: '«Om du skriver på meänkieli måste du själv skaffa och betala en tolk.»',
            translation: '«Se você escrever em meänkieli, tem que arranjar e pagar um intérprete por conta própria.»',
            wrong: 'O texto diz o contrário: «tolk vid behov tillhandahålls» = «um intérprete é fornecido quando necessário». A voz passiva esconde quem age, mas quem fornece o intérprete é o órgão público, não o cidadão.',
          },
        ],
      },
      besok: {
        emoji: '👴',
        text: 'Just då knackar en äldre man på dörren och frågar något på meänkieli, och Päivi svarar honom på samma språk utan att tveka. Han vill ha hjälp med en blankett om färdtjänst, och han har med sig sin dotter, som tolkar för Linus skull. «Pappa har pratat meänkieli hela livet, men blanketterna har alltid varit på krångelsvenska», säger dottern med ett snett leende. Linu visar mannen den nya meningen i broschyren, och mannen läser den långsamt och säger något som får Päivi att skratta.',
        translation:
          'Nesse momento, um senhor bate à porta e pergunta algo em meänkieli, e a Päivi responde na mesma língua sem hesitar. Ele quer ajuda com um formulário de transporte especial, e trouxe a filha, que traduz por causa do Linu. «O papai falou meänkieli a vida inteira, mas os formulários sempre foram em sueco complicado», diz a filha, com um sorriso torto. O Linu mostra ao homem a frase nova do folheto, e o homem a lê devagar e diz algo que faz a Päivi rir.',
        choices: [{ text: 'Fråga vad mannen sa.', translation: 'Perguntar o que o homem disse.', next: 'gransen' }],
      },
      gransen: {
        emoji: '🕐',
        text: '«Han sa att den här svenskan förstår till och med en gammal tornedaling», översätter Päivi. Efter besöket föreslår hon att de ska äta lunch på andra sidan gränsen, i Torneå, där det finns ett kafé hon tycker om. De promenerar dit på fem minuter, men när de kommer fram visar klockorna en timme mer, eftersom Finland ligger i en annan tidszon. «Här kan man gå hem från lunchen och komma fram innan man har gått», skrattar Päivi.',
        translation:
          '«Ele disse que até um velho tornedaliano entende este sueco», traduz a Päivi. Depois da visita, ela sugere almoçarem do outro lado da fronteira, em Tornio, onde há um café de que ela gosta. Eles vão a pé em cinco minutos, mas quando chegam os relógios marcam uma hora a mais, porque a Finlândia fica em outro fuso horário. «Aqui dá para voltar do almoço e chegar antes de ter saído», ri a Päivi.',
        choices: [
          { text: 'Skriva klart broschyren samma eftermiddag.', translation: 'Terminar o folheto na mesma tarde.', next: 'final_bom' },
          { text: 'Ta ledigt resten av dagen och vandra längs älven.', translation: 'Tirar o resto do dia de folga e caminhar pela margem do rio.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'På eftermiddagen skriver Linu klart broschyren, med korta meningar, du-tilltal och aktiva verb, och Päivi läser den med rödpennan i handen utan att använda den en enda gång. Broschyren trycks på svenska, finska och meänkieli, och det första exemplaret går till mannen från morgonen, som kommer tillbaka för att hämta det. «Nu kan jag äntligen läsa vad jag har rätt till», säger han på svenska, långsamt och noggrant. Linu tänker att klarspråk inte bara handlar om grammatik, utan om respekt.',
        translation:
          'À tarde, o Linu termina o folheto, com frases curtas, tratamento por «você» e verbos na voz ativa, e a Päivi o lê de caneta vermelha na mão sem usá-la nem uma vez. O folheto é impresso em sueco, finlandês e meänkieli, e o primeiro exemplar vai para o senhor da manhã, que volta para buscá-lo. «Agora finalmente consigo ler quais são os meus direitos», diz ele em sueco, devagar e com cuidado. O Linu pensa que linguagem clara não é só questão de gramática, mas de respeito.',
        ending: { tone: 'bom', title: 'Direitos que se entendem', message: 'Você desmontou o sueco burocrático, entendeu a voz passiva e escreveu um folheto que chega a quem precisa.' },
      },
      final_neutro: {
        emoji: '🌲',
        text: 'Linu promenerar längs Torne älv i eftermiddagssolen och tittar på forsarna och gränsmärkena. När han kommer tillbaka till kontoret nästa morgon har Päivi redan skrivit om resten av broschyren själv, med hans första mening som förebild. «Du gav oss nyckeln, och jag öppnade dörren», säger hon vänligt. Linu är glad att texten blev klar, men han önskar att han hade stannat och avslutat den själv.',
        translation:
          'O Linu caminha pela margem do rio Torne no sol da tarde, olhando as corredeiras e os marcos da fronteira. Quando volta ao escritório na manhã seguinte, a Päivi já reescreveu sozinha o resto do folheto, usando a primeira frase dele como modelo. «Você nos deu a chave, e eu abri a porta», diz ela, gentil. O Linu fica feliz porque o texto ficou pronto, mas queria ter ficado para terminá-lo ele mesmo.',
        ending: { tone: 'neutro', title: 'A chave, mas não a porta', message: 'Você acertou a primeira frase, mas deixou o resto do trabalho para os outros.' },
      },
    },
  },
  {
    id: 'sv-h42',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Tidningen från Minneapolis',
    emoji: '🗞️',
    summary: 'Em Minnesota, o Linu ajuda uma estudante descendente de suecos a transformar cartas de emigrantes e uma notícia de jornal do século XIX num texto acadêmico.',
    cultural_context:
      'Entre meados do século XIX e o começo do XX, mais de um milhão de suecos emigraram para a América do Norte, fugindo sobretudo da pobreza e das más colheitas; o auge foi na década de 1880. Minnesota recebeu tantos que em várias cidades se publicavam jornais em sueco, e em Lindstrom, apelidada de «a pequena Suécia da América», a caixa-d’água tem a forma de um bule de café sueco.',
    start: 'start',
    glossary: [
      ['utvandringen', 'a emigração'],
      ['en utvandrare', 'um emigrante'],
      ['missväxt', 'má colheita'],
      ['kulminera', 'atingir o auge'],
      ['en källhänvisning', 'uma referência de fonte'],
      ['en fotnot', 'uma nota de rodapé'],
      ['prägla', 'marcar, caracterizar'],
      ['Eder', 'vós, vos (forma antiga, em cartas)'],
    ],
    nodes: {
      start: {
        emoji: '☕',
        text: 'I Lindstrom i Minnesota, där vattentornet är format som en gammal svensk kaffepanna, träffar Linu en historiestudent som heter Karin Johnson. Hennes farfars farfar kom från Småland på 1880-talet, och hon skriver en uppsats om utvandringen på svenska, eftersom hon läser svenska på universitetet. På bordet ligger en hög brev, en gammal svenskspråkig tidning från Minneapolis och en halvfärdig inledning. «Jag vet vad jag vill säga», suckar hon, «men varje gång jag skriver låter det antingen som en dagbok eller som en lagtext.»',
        translation:
          'Em Lindstrom, Minnesota, onde a caixa-d’água tem a forma de um velho bule de café sueco, o Linu conhece uma estudante de história chamada Karin Johnson. O tataravô dela veio de Småland nos anos 1880, e ela está escrevendo um trabalho sobre a emigração em sueco, porque estuda sueco na universidade. Na mesa há uma pilha de cartas, um velho jornal em sueco de Minneapolis e uma introdução pela metade. «Eu sei o que quero dizer», suspira ela, «mas toda vez que escrevo fica parecendo um diário ou um texto de lei.»',
        choices: [
          { text: 'Börja med breven.', translation: 'Começar pelas cartas.', next: 'brev' },
          { text: 'Läsa hennes inledning.', translation: 'Ler a introdução dela.', next: 'inledning' },
        ],
      },
      brev: {
        emoji: '✉️',
        text: 'Det översta brevet är daterat 1882 och skrivet med blyerts på tunt papper. «Kära Föräldrar, jag får meddela Eder att jag har kommit lyckligt fram, och att här finns arbete för den som vill», läser Linu högt. «Brödet är vitt och man äter kött tre gånger om dagen, men jag längtar hem till Eder alla och till skogen.» Karin förklarar att sådana brev lästes högt i hela byar i Sverige och lockade fler att ge sig av.',
        translation:
          'A carta de cima tem data de 1882 e foi escrita a lápis em papel fino. «Queridos Pais, venho comunicar-vos que cheguei com felicidade, e que aqui há trabalho para quem quiser», lê o Linu em voz alta. «O pão é branco e come-se carne três vezes por dia, mas tenho saudade de todos vós e da floresta.» A Karin explica que cartas assim eram lidas em voz alta em aldeias inteiras na Suécia e atraíam mais gente a partir.',
        choices: [
          { text: '«Breven var alltså en av orsakerna till att utvandringen växte.»', translation: '«Então as cartas foram uma das causas do crescimento da emigração.»', next: 'inledning' },
          {
            text: '«Utvandraren vill alltså komma hem, eftersom han saknar arbete.»',
            translation: '«Então o emigrante quer voltar para casa, porque está sem trabalho.»',
            wrong: 'O emigrante escreve que há trabalho para quem quiser («här finns arbete för den som vill») e que se come carne três vezes por dia. Ele sente saudade da família e da floresta, mas não por falta de trabalho.',
          },
        ],
      },
      inledning: {
        emoji: '📑',
        text: 'Karins inledning börjar: «Jag tycker att det är superintressant att så många svenskar åkte till Amerika, typ en miljon!» Linu ler och förklarar att en akademisk text behöver ett neutralt tonfall, exakta uppgifter och helst en källa. De skriver om början tillsammans: «Mellan 1850 och 1930 emigrerade drygt en miljon svenskar till Nordamerika. Utvandringen kulminerade under 1880-talet, då missväxt och fattigdom drev många att lämna landsbygden.»',
        translation:
          'A introdução da Karin começa assim: «Eu acho superinteressante que tantos suecos foram para a América, tipo um milhão!» O Linu sorri e explica que um texto acadêmico precisa de tom neutro, dados exatos e, de preferência, uma fonte. Eles reescrevem o começo juntos: «Entre 1850 e 1930, pouco mais de um milhão de suecos emigraram para a América do Norte. A emigração atingiu o auge na década de 1880, quando más colheitas e pobreza levaram muitos a deixar o campo.»',
        choices: [
          { text: 'Jämföra med tidningens språk.', translation: 'Comparar com a linguagem do jornal.', next: 'tidningen' },
          {
            text: '«Utvandringen kulminerade alltså på 1880-talet, eftersom det gick bra för bönderna.»',
            translation: '«Então a emigração chegou ao auge nos anos 1880 porque os agricultores iam bem.»',
            wrong: 'A frase diz o contrário: foram «missväxt och fattigdom» — más colheitas e pobreza — que levaram muita gente a deixar o campo. «Kulminerade» quer dizer que a emigração atingiu o seu ponto máximo.',
          },
        ],
      },
      tidningen: {
        emoji: '🗞️',
        text: 'Tidningen från Minneapolis är gulnad och sprucken i vecken, och en av rubrikerna lyder: «Nya landsmän anlände i går till staden.» Artikeln är skriven i en helt annan stil än uppsatsen, med korta meningar, citat och en känsla av brådska. «Journalisten vill att läsaren ska se händelsen framför sig», säger Linu, «medan forskaren vill att läsaren ska förstå sammanhanget.» Karin frågar om hon får använda artikeln i uppsatsen, och Linu funderar på hur man gör det på rätt sätt.',
        translation:
          'O jornal de Minneapolis está amarelado e rasgado nas dobras, e uma das manchetes diz: «Novos conterrâneos chegaram ontem à cidade.» A matéria é escrita num estilo totalmente diferente do trabalho, com frases curtas, citações e uma sensação de pressa. «O jornalista quer que o leitor veja o acontecimento diante de si», diz o Linu, «enquanto o pesquisador quer que o leitor entenda o contexto.» A Karin pergunta se pode usar a matéria no trabalho, e o Linu pensa em como fazer isso do jeito certo.',
        choices: [
          { text: 'Föreslå att hon citerar kort och anger källan i en fotnot.', translation: 'Sugerir que ela cite um trecho curto e indique a fonte numa nota de rodapé.', next: 'kallor' },
          { text: 'Föreslå att hon skriver om artikeln med egna ord utan att nämna den.', translation: 'Sugerir que ela reescreva a matéria com as próprias palavras sem mencioná-la.', next: 'plagiat' },
        ],
      },
      plagiat: {
        emoji: '🚫',
        text: 'Linu hinner knappt säga det förrän han själv ångrar sig. «Nej, vänta, då använder du någon annans text utan att säga det, och det kallas plagiat», säger han. Karin nickar och berättar att hennes professor är mycket noga med källhänvisningar, och att en uppsats utan dem underkänns direkt. De bestämmer sig för att göra det ordentligt i stället.',
        translation:
          'O Linu mal termina de falar e já se arrepende. «Não, espera, aí você usa o texto de outra pessoa sem dizer, e isso se chama plágio», diz ele. A Karin concorda e conta que o professor dela é muito rigoroso com referências, e que um trabalho sem elas é reprovado na hora. Eles decidem fazer do jeito certo.',
        choices: [{ text: 'Citera kort och ange källan.', translation: 'Citar um trecho curto e indicar a fonte.', next: 'kallor' }],
      },
      kallor: {
        emoji: '📚',
        text: 'De väljer ut en enda mening ur artikeln och sätter den inom citattecken, följd av en fotnot med tidningens namn och datum. «I en akademisk text är källan lika viktig som citatet», förklarar Linu, «läsaren ska kunna gå tillbaka och kontrollera.» Efter citatet skriver Karin en analyserande mening: «Artikeln speglar den optimism som präglade den svenskamerikanska pressen under perioden.» Linu pekar på ordet «präglade» och säger att det är just den sortens formulering som får en text att låta vetenskaplig utan att bli obegriplig.',
        translation:
          'Eles escolhem uma única frase da matéria e a põem entre aspas, seguida de uma nota de rodapé com o nome do jornal e a data. «Num texto acadêmico, a fonte é tão importante quanto a citação», explica o Linu, «o leitor tem que poder voltar e conferir.» Depois da citação, a Karin escreve uma frase de análise: «A matéria reflete o otimismo que marcava a imprensa sueco-americana no período.» O Linu aponta a palavra «präglade» e diz que é exatamente esse tipo de formulação que faz um texto soar científico sem ficar incompreensível.',
        choices: [{ text: 'Hjälpa Karin att skriva slutsatsen.', translation: 'Ajudar a Karin a escrever a conclusão.', next: 'slutsats' }],
      },
      slutsats: {
        emoji: '🧩',
        text: 'Slutsatsen blir kort: «Utvandringen till Minnesota var både en ekonomisk nödvändighet och en kulturell förflyttning. Genom brev, tidningar och föreningar bevarades det svenska språket i flera generationer, samtidigt som utvandrarna gradvis blev amerikaner.» Karin läser den högt och blir tyst en stund. «Min farfars farfar skulle aldrig ha förstått den här meningen», säger hon, «men den handlar om honom.» Hon frågar om Linu vill följa med till kyrkogården, där familjens första gravsten står.',
        translation:
          'A conclusão fica curta: «A emigração para Minnesota foi ao mesmo tempo uma necessidade econômica e um deslocamento cultural. Por meio de cartas, jornais e associações, a língua sueca foi preservada por várias gerações, ao mesmo tempo que os emigrantes aos poucos se tornavam americanos.» A Karin lê em voz alta e fica em silêncio um instante. «O meu tataravô nunca teria entendido esta frase», diz ela, «mas ela fala dele.» Ela pergunta se o Linu quer ir com ela ao cemitério, onde está a primeira lápide da família.',
        choices: [
          { text: 'Följa med till kyrkogården.', translation: 'Ir ao cemitério com ela.', next: 'final_bom' },
          { text: 'Stanna och korrekturläsa uppsatsen en gång till.', translation: 'Ficar e revisar o trabalho mais uma vez.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🌾',
        text: 'Den lilla kyrkogården ligger på en kulle med utsikt över en sjö, och många av gravstenarna har svenska namn och svenska inskrifter. Karin stannar vid en grå sten där det står «Anders Johansson, född i Småland 1861», och hon lägger en vildblomma framför den. «Här blev Johansson till Johnson», säger hon, «men språket följde med i nästan hundra år.» Linu tänker att uppsatsen nu har något som ingen källförteckning kan ge: en människa bakom siffrorna.',
        translation:
          'O pequeno cemitério fica numa colina com vista para um lago, e muitas das lápides têm nomes suecos e inscrições em sueco. A Karin para diante de uma pedra cinzenta onde está escrito «Anders Johansson, nascido em Småland em 1861», e deixa uma flor do campo diante dela. «Aqui Johansson virou Johnson», diz ela, «mas a língua veio junto por quase cem anos.» O Linu pensa que agora o trabalho tem algo que nenhuma bibliografia dá: uma pessoa por trás dos números.',
        ending: { tone: 'bom', title: 'Uma pessoa por trás dos números', message: 'Você distinguiu o estilo jornalístico do acadêmico, citou com fonte e ajudou a Karin a contar a história da própria família.' },
      },
      final_neutro: {
        emoji: '📝',
        text: 'Linu och Karin läser igenom uppsatsen mening för mening och rättar varenda kommatecken och varenda fotnot. När de är klara är det mörkt ute, och kyrkogården får vänta till en annan dag. Uppsatsen får högsta betyg, och professorn skriver i marginalen att språket är «föredömligt klart». Men Karin säger efteråt att hon hade velat visa Linu sin släkts gravsten, och Linu önskar att han hade följt med.',
        translation:
          'O Linu e a Karin releem o trabalho frase por frase e corrigem cada vírgula e cada nota de rodapé. Quando terminam já está escuro, e o cemitério fica para outro dia. O trabalho tira nota máxima, e o professor escreve na margem que a linguagem é «exemplarmente clara». Mas depois a Karin diz que queria ter mostrado ao Linu a lápide da família, e ele se arrepende de não ter ido.',
        ending: { tone: 'neutro', title: 'Nota máxima, visita adiada', message: 'O texto ficou impecável, mas a história de carne e osso ficou para outro dia.' },
      },
    },
  },
  // ───────────────────────── C2 ─────────────────────────
  {
    id: 'sv-h43',
    level: 'C2',
    cefr: 'C2',
    title: 'Äntligen stod prästen',
    emoji: '📖',
    summary: 'Em Mårbacka, a casa de Selma Lagerlöf em Värmland, uma velha guia lê para o Linu a primeira frase de «Gösta Berlings saga», e a noite de outono se enche de cavaleiros, fantasmas e formas antigas do sueco.',
    cultural_context:
      'Selma Lagerlöf (1858–1940) nasceu e morreu em Mårbacka, em Värmland, e em 1909 foi a primeira mulher a receber o Prêmio Nobel de Literatura. O seu primeiro romance, «Gösta Berlings saga» (1891), conta a história de um padre beberrão e dos cavaleiros boêmios de Ekeby; «A maravilhosa viagem de Nils Holgersson» (1906–1907) foi escrita como livro de geografia para as escolas suecas. A família tinha perdido Mårbacka, e ela a recomprou e viveu lá até morrer.',
    start: 'start',
    glossary: [
      ['äntligen', 'finalmente'],
      ['kavaljererna', 'os cavaleiros (os boêmios de Ekeby)'],
      ['de voro / de sjöngo', 'eles eram / eles cantavam (plural verbal antigo)'],
      ['de gå / de söka', 'eles andam / eles procuram (presente plural antigo)'],
      ['icke', 'não (forma antiga, literária)'],
      ['ty', 'pois, porque (literário)'],
      ['en gengångare', 'uma alma penada'],
      ['borta bra men hemma bäst', 'bom é viajar, mas melhor é estar em casa (provérbio)'],
    ],
    nodes: {
      start: {
        emoji: '🍂',
        text: 'Det var en blåsig oktoberafton, och löven virvlade som guldmynt över gårdsplanen, när Linu kom fram till Mårbacka. Den vita herrgården med sina pelare låg stilla i skymningen, och i ett av fönstren brann en ensam lampa. På trappan stod en gammal kvinna i sjal, som presenterade sig som Ebba och förklarade att hon hade visat gården för besökare i fyrtio år. «Museet är stängt för säsongen», sade hon, «men den som reser så långt för Selmas skull skall icke vända vid grinden.» Hon öppnade dörren, och doften av gammalt trä och torkade äpplen slog emot honom.',
        translation:
          'Era uma tarde de outubro cheia de vento, e as folhas rodopiavam como moedas de ouro pelo pátio quando o Linu chegou a Mårbacka. O casarão branco com as suas colunas repousava imóvel no crepúsculo, e numa das janelas ardia uma lâmpada solitária. Na escada estava uma velha de xale, que se apresentou como Ebba e explicou que mostrava a casa aos visitantes havia quarenta anos. «O museu está fechado nesta estação», disse ela, «mas quem viaja tão longe por causa da Selma não há de voltar do portão.» Ela abriu a porta, e o cheiro de madeira antiga e maçãs secas veio ao encontro dele.',
        choices: [
          { text: 'Följa Ebba in i biblioteket.', translation: 'Seguir a Ebba até a biblioteca.', next: 'bibliotek' },
          { text: 'Be henne först visa trädgården i skymningen.', translation: 'Pedir que ela mostre primeiro o jardim no crepúsculo.', next: 'tradgard' },
        ],
      },
      tradgard: {
        emoji: '🍎',
        text: 'Trädgården låg i halvdunkel, och de gamla äppelträden sträckte sina grenar mot himlen som knotiga händer. Ebba berättade att Selma hade vuxit upp här med sina syskon, och att hon som liten flicka hade fått lyssna till farmors sägner och historier om Värmland, kväll efter kväll. «Allt det där samlade hon i sitt hjärta som äpplen i en källare», sade Ebba, «och sedan tog hon fram dem, ett i sänder, när hon skrev.» Linu tänkte att det var den vackraste förklaring av en författares arbete han någonsin hade hört. En kall vindil fick honom att dra upp axlarna, och de gick in till brasan.',
        translation:
          'O jardim estava na penumbra, e as velhas macieiras estendiam os galhos para o céu como mãos nodosas. A Ebba contou que a Selma tinha crescido ali com os irmãos, e que quando menina ouvia as lendas e histórias de Värmland contadas pela avó, noite após noite. «Tudo aquilo ela guardou no coração como maçãs num porão», disse a Ebba, «e depois ia tirando uma por uma quando escrevia.» O Linu pensou que era a explicação mais bonita do trabalho de um escritor que já tinha ouvido. Uma rajada fria o fez encolher os ombros, e eles entraram para junto do fogo.',
        choices: [{ text: 'Gå in i biblioteket.', translation: 'Entrar na biblioteca.', next: 'bibliotek' }],
      },
      bibliotek: {
        emoji: '📚',
        text: 'I biblioteket stodo böckerna i hyllor ända upp till taket, och på skrivbordet låg en reservoarpenna, som om författarinnan just hade gått ut för att hämta luft. Ebba tog ned en sliten volym, slog upp den första sidan och läste med darrande men klar röst: «Äntligen stod prästen i predikstolen.» Hon slog igen boken och log. «Så börjar Gösta Berlings saga», sade hon, «med en präst som nästan har supit bort sitt ämbete och som ändå, just den söndagen, predikar som en ängel.» Linu kände hur den korta meningen, med sitt «äntligen», bar på en hel församlings otålighet och en hel själs kamp.',
        translation:
          'Na biblioteca, os livros subiam em estantes até o teto, e na escrivaninha havia uma caneta-tinteiro, como se a escritora tivesse acabado de sair para tomar ar. A Ebba pegou um volume gasto, abriu a primeira página e leu com voz trêmula, mas clara: «Finalmente o padre estava no púlpito.» Ela fechou o livro e sorriu. «Assim começa Gösta Berlings saga», disse ela, «com um padre que quase perdeu o cargo de tanto beber e que, mesmo assim, justo naquele domingo, prega como um anjo.» O Linu sentiu que a frase curta, com o seu «finalmente», carregava a impaciência de uma paróquia inteira e a luta de uma alma inteira.',
        choices: [
          { text: 'Fråga vilka kavaljererna på Ekeby voro.', translation: 'Perguntar quem eram os cavaleiros de Ekeby.', next: 'kavaljerer' },
          {
            text: '«Prästen i boken var alltså en mönsterpräst, som alla beundrade.»',
            translation: '«Então o padre do livro era um padre exemplar, que todos admiravam.»',
            wrong: 'A Ebba disse que o padre estava prestes a perder o cargo por causa da bebida («nästan har supit bort sitt ämbete»); mesmo assim, naquele domingo, ele prega como um anjo. Longe de ser exemplar, ele é um pecador genial.',
          },
        ],
      },
      kavaljerer: {
        emoji: '🎻',
        text: '«Kavaljererna voro tolv hemlösa herrar, gamla officerare och ruinerade adelsmän, som levde på nåder hos majorskan på Ekeby», berättade Ebba och lade ett vedträ på brasan. «De sjöngo och spelade och drucko, och de trodde att livet var en fest som aldrig skulle ta slut.» Hon förklarade att Selma hade hört berättelserna om traktens gamla bruk och deras glada herrar redan som barn, här i Fryksdalen. «Förr skrev man så, med vi äro och de voro», tillade hon, «och i Selmas värld låter det som musik.» Linu upprepade tyst för sig själv: de sjöngo, de drucko, de voro.',
        translation:
          '«Os cavaleiros eram doze senhores sem lar, velhos oficiais e nobres arruinados, que viviam de favor na casa da majora de Ekeby», contou a Ebba, pondo uma acha de lenha no fogo. «Eles cantavam, tocavam e bebiam, e achavam que a vida era uma festa que nunca ia acabar.» Ela explicou que a Selma já tinha ouvido quando criança as histórias das antigas forjas da região e dos seus senhores alegres, ali mesmo no vale do Fryken. «Antigamente se escrevia assim, com “vi äro” e “de voro”», acrescentou, «e no mundo da Selma isso soa como música.» O Linu repetiu baixinho para si: de sjöngo, de drucko, de voro.',
        choices: [
          { text: '«I det gamla språket sade man alltså “de voro” där vi säger “de var”?»', translation: '«Então na língua antiga se dizia “de voro” onde hoje dizemos “de var”?»', next: 'nils' },
          {
            text: '«“De sjöngo” handlar alltså om en enda kavaljer som sjöng.»',
            translation: '«Então “de sjöngo” fala de um único cavaleiro que cantava.»',
            wrong: '«Sjöngo», «drucko» e «voro» são formas antigas do PLURAL do pretérito (hoje: sjöng, drack, var). A Ebba fala dos doze cavaleiros — vários, não um só.',
          },
        ],
      },
      nils: {
        emoji: '🪿',
        text: '«Och så har vi pojken», sade Ebba, och hennes ansikte ljusnade. Hon tog fram en annan bok, en tjock läsebok med en gås på pärmen, och läste: «Det var en gång en pojke.» Hon berättade att Selma hade fått i uppdrag att skriva en läsebok i geografi för Sveriges skolbarn, och att hon lät en elak liten pojke, förvandlad till tomte, flyga över hela landet på ryggen på en gås. «Så lärde sig generationer av barn hur deras land såg ut från ovan», sade Ebba, «och att den som är god mot djuren kan bli människa igen.»',
        translation:
          '«E depois temos o menino», disse a Ebba, e o rosto dela se iluminou. Ela pegou outro livro, um livro de leitura grosso com um ganso na capa, e leu: «Era uma vez um menino.» Contou que a Selma tinha recebido a encomenda de escrever um livro de geografia para as crianças das escolas suecas, e que fez um menino malvado, transformado em duende, voar pelo país inteiro nas costas de um ganso. «Assim gerações de crianças aprenderam como era o seu país visto de cima», disse a Ebba, «e que quem é bom com os animais pode voltar a ser gente.»',
        choices: [{ text: 'Fråga om det spökar på Mårbacka.', translation: 'Perguntar se Mårbacka é assombrada.', next: 'spoke' }],
      },
      spoke: {
        emoji: '🕯️',
        text: 'Ebba skrattade lågt och sänkte rösten. «Selma trodde på sådant, åtminstone i sina böcker», sade hon, «och i hennes berättelser gå de döda ofta igen för att ställa något till rätta.» Just då slog den gamla golvklockan i hallen tolv slag, och lampan fladdrade till, fast ingen hade rört den. Linu kände hur fjädrarna reste sig i nacken, men Ebba satt alldeles lugn och drog sjalen tätare kring axlarna. «Den som har rent samvete behöver icke frukta några gengångare», sade hon, «ty de söka endast upp dem som ha glömt något.»',
        translation:
          'A Ebba riu baixinho e baixou a voz. «A Selma acreditava nessas coisas, pelo menos nos livros», disse ela, «e nas histórias dela os mortos muitas vezes voltam para acertar alguma coisa.» Nesse instante o velho relógio de pé do saguão bateu doze badaladas, e a lâmpada tremulou, embora ninguém a tivesse tocado. O Linu sentiu as penas da nuca se arrepiarem, mas a Ebba continuou calmíssima e apertou o xale em volta dos ombros. «Quem tem a consciência limpa não precisa temer almas penadas», disse ela, «pois elas só procuram os que esqueceram alguma coisa.»',
        choices: [{ text: '«Har jag glömt något?»', translation: '«Será que eu esqueci alguma coisa?»', next: 'gastbok' }],
      },
      gastbok: {
        emoji: '🖋️',
        text: '«Kanske», sade Ebba med ett förstulet leende, och hon sköt fram en tung gästbok med skinnband över bordet. «Alla som ha besökt Mårbacka ha skrivit här, och den som glömmer det får enligt sägnen aldrig ro i sina böcker.» Linu tog pennan och tvekade, ty han ville skriva något som var värdigt huset. Han tänkte på prästen i predikstolen, på kavaljererna vid brasan och på pojken på gåsens rygg. Till slut visste han vad han skulle skriva, men han tvekade ännu ett ögonblick.',
        translation:
          '«Talvez», disse a Ebba com um sorriso furtivo, e empurrou pela mesa um pesado livro de visitas encadernado em couro. «Todos os que visitaram Mårbacka escreveram aqui, e quem esquece, diz a lenda, nunca mais tem paz com os seus livros.» O Linu pegou a caneta e hesitou, pois queria escrever algo digno da casa. Pensou no padre no púlpito, nos cavaleiros junto ao fogo e no menino nas costas do ganso. Por fim soube o que escrever, mas ainda hesitou mais um instante.',
        choices: [
          { text: 'Skriva: «Äntligen stod pingvinen på Mårbacka.»', translation: 'Escrever: «Finalmente o pinguim estava em Mårbacka.»', next: 'final_bom' },
          { text: 'Skriva bara sitt namn och datum, för säkerhets skull.', translation: 'Escrever só o nome e a data, por via das dúvidas.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🌕',
        text: 'Ebba läste raden och skrattade så att hela hennes lilla gestalt skakade, och sedan torkade hon en tår ur ögonvrån. «Det hade Selma tyckt om», sade hon, «hon älskade dem som vågade leka med orden.» Hon följde honom ut på trappan, där månen hade stigit upp över dalen och kastade ett silverljus över gårdsplanen. «Borta bra men hemma bäst, säger man», sade hon, «men för en berättelse finns det inga gränser.» Linu gick nedför allén med huvudet fullt av röster, och han visste att han bar med sig en bit av Mårbacka ut i världen.',
        translation:
          'A Ebba leu a linha e riu tanto que a sua figurinha inteira sacudiu, e depois enxugou uma lágrima no canto do olho. «A Selma teria gostado disso», disse ela, «ela amava quem ousava brincar com as palavras.» Ela o acompanhou até a escada, onde a lua tinha subido sobre o vale e lançava uma luz de prata sobre o pátio. «Bom é viajar, mas melhor é estar em casa, como se diz», falou ela, «mas uma história não tem fronteiras.» O Linu desceu a alameda com a cabeça cheia de vozes, e sabia que levava consigo um pedaço de Mårbacka para o mundo.',
        ending: { tone: 'bom', title: 'Um pedaço de Mårbacka', message: 'Você entendeu o sueco literário, as formas antigas do plural e ainda brincou com a primeira frase mais famosa de Selma Lagerlöf.' },
      },
      final_neutro: {
        emoji: '🚉',
        text: 'Linu skrev sitt namn och dagens datum med prydlig handstil, och Ebba nickade vänligt men sade ingenting. Hon följde honom till grinden och önskade honom en god resa, och lampan i fönstret slocknade bakom dem. På vägen till stationen tänkte han att han hade sett allt och ändå missat något, som när man läser en bok för fort och glömmer att lyssna på den. Hemma slog han upp Gösta Berlings saga och läste den första meningen om och om igen. «Äntligen», viskade han för sig själv, och han förstod att han måste resa tillbaka.',
        translation:
          'O Linu escreveu o nome e a data com letra caprichada, e a Ebba acenou com a cabeça, gentil, mas não disse nada. Ela o acompanhou até o portão e desejou boa viagem, e a lâmpada da janela se apagou atrás deles. No caminho para a estação, ele pensou que tinha visto tudo e mesmo assim perdido alguma coisa, como quando se lê um livro depressa demais e se esquece de escutá-lo. Em casa, abriu Gösta Berlings saga e leu a primeira frase uma vez, e outra, e outra. «Finalmente», sussurrou para si mesmo, e entendeu que precisava voltar.',
        ending: { tone: 'neutro', title: 'Uma página em branco', message: 'Você entendeu a visita, mas não ousou brincar com as palavras. Mårbacka espera uma segunda leitura.' },
      },
    },
  },
  {
    id: 'sv-h44',
    level: 'C2',
    cefr: 'C2',
    title: 'Svarta jorden',
    emoji: '🛶',
    summary: 'Em Birka, a antiga cidade viking numa ilha do lago Mälaren, um velho barqueiro conta ao Linu, num sueco solene e cheio de formas arcaicas, a história do monge Ansgário e da «terra negra».',
    cultural_context:
      'Birka, na ilha de Björkö, no lago Mälaren, foi um dos grandes centros comerciais da Era Viking, de meados do século VIII ao fim do século X; junto com Hovgården, na ilha vizinha de Adelsö, é Patrimônio Mundial da UNESCO desde 1993. O solo da antiga cidade, a «terra negra», é escuro de restos de ocupação, e em volta há cerca de 3 000 túmulos; por volta de 830, o monge Ansgário esteve lá para pregar o cristianismo, depois de ser assaltado por piratas no caminho.',
    start: 'start',
    glossary: [
      ['svarta jorden', 'a terra negra (o solo da antiga cidade)'],
      ['en gravhög', 'um túmulo em forma de monte'],
      ['ehuru', 'embora (arcaico)'],
      ['det förtäljes', 'conta-se, narra-se (arcaico)'],
      ['de blevo / de togo / de kommo', 'eles foram / eles tomaram / eles vieram (plural antigo)'],
      ['en träl', 'um escravo (na Era Viking)'],
      ['eftermäle', 'a fama que fica depois da morte'],
      ['fä dör, fränder dö', 'morre o gado, morrem os parentes (verso antigo)'],
    ],
    nodes: {
      start: {
        emoji: '⛴️',
        text: 'Båten från Stockholm gled i nästan två timmar genom Mälarens gröna vatten, innan Björkö steg upp ur diset med sina ekar och sina låga kullar. Vid bryggan stod en gammal båtkarl med vitt skägg, som hette Gunnar och talade som om han hade läst alltför många sagor. «Välkommen till Birka, där köpmän från Bysans och Frisland en gång gingo i land», sade han och bugade sig. «Vi äro få som bo här nu, men jorden minns allt.» Linu kände att han hade klivit i land inte bara på en ö, utan i en annan tid.',
        translation:
          'O barco de Estocolmo deslizou quase duas horas pelas águas verdes do Mälaren antes que Björkö surgisse da névoa, com os seus carvalhos e as suas colinas baixas. No trapiche estava um velho barqueiro de barba branca, chamado Gunnar, que falava como quem leu sagas demais. «Bem-vindo a Birka, onde um dia mercadores de Bizâncio e da Frísia desembarcaram», disse ele, com uma mesura. «Somos poucos os que moramos aqui agora, mas a terra se lembra de tudo.» O Linu sentiu que tinha desembarcado não só numa ilha, mas em outro tempo.',
        choices: [
          { text: 'Gå med Gunnar till svarta jorden.', translation: 'Ir com o Gunnar até a terra negra.', next: 'jorden' },
          { text: 'Gå först upp på Borgberget.', translation: 'Subir primeiro o morro da fortaleza.', next: 'borgen' },
        ],
      },
      borgen: {
        emoji: '🏔️',
        text: 'Från Borgberget, där en gång en fornborg vakade över staden, såg Linu ut över fjärdarna, som glänste som hamrat silver i eftermiddagssolen. Gunnar pekade mot vikarna nedanför och mot gravfälten, där hundratals låga högar reste sig ur gräset. «Här stodo väktarna och spanade efter fiender och köpmän, och ofta visste man icke förrän i sista stund vilka de voro», sade han. Vinden drog genom enarna, och Linu tyckte sig för ett ögonblick höra åror slå mot vattnet. «Kom», sade Gunnar, «jorden väntar på dig.»',
        translation:
          'Do morro da fortaleza, onde outrora uma fortificação vigiava a cidade, o Linu contemplou as baías, que brilhavam como prata batida no sol da tarde. O Gunnar apontou as enseadas lá embaixo e os campos de túmulos, onde centenas de montes baixos se erguiam da relva. «Aqui ficavam os vigias, espreitando inimigos e mercadores, e muitas vezes só no último instante se sabia quem eles eram», disse ele. O vento passava pelos zimbros, e por um momento o Linu teve a impressão de ouvir remos batendo na água. «Venha», disse o Gunnar, «a terra está esperando por você.»',
        choices: [{ text: 'Gå ned till svarta jorden.', translation: 'Descer até a terra negra.', next: 'jorden' }],
      },
      jorden: {
        emoji: '🖤',
        text: 'Gunnar ledde honom till en äng där gräset växte ovanligt frodigt, och han böjde sig ned och tog upp en näve jord, svart som sot. «Detta är svarta jorden», sade han, «och den är svart av två hundra års eldar, av aska, ben och avfall från dem som levde här.» Han berättade att arkeologerna hade funnit pärlor av glas och karneol, silvermynt från Österlandet och kammar av ben i denna jord. «Ehuru husen sedan länge äro borta, lever staden kvar i marken», sade han och lät jorden rinna mellan fingrarna. Linu betraktade den mörka jorden och tänkte att ingen bok kunde berätta mer än en näve av den.',
        translation:
          'O Gunnar o levou até um prado onde a grama crescia excepcionalmente viçosa, abaixou-se e apanhou um punhado de terra, preta como fuligem. «Esta é a terra negra», disse ele, «e ela é negra de duzentos anos de fogueiras, de cinzas, ossos e restos dos que viveram aqui.» Contou que os arqueólogos tinham encontrado nesta terra contas de vidro e de cornalina, moedas de prata do Oriente e pentes de osso. «Embora as casas tenham desaparecido há muito, a cidade continua viva no chão», disse, deixando a terra escorrer entre os dedos. O Linu observou a terra escura e pensou que nenhum livro podia contar mais do que um punhado dela.',
        choices: [
          { text: 'Fråga vilka som bodde här.', translation: 'Perguntar quem morava ali.', next: 'folket' },
          {
            text: '«Jorden är alltså svart för att den är full av kol från en gammal gruva.»',
            translation: '«Então a terra é preta porque está cheia de carvão de uma mina antiga.»',
            wrong: 'O Gunnar explicou que a terra é negra por causa das fogueiras, das cinzas, dos ossos e dos restos deixados pelos que viveram ali («av aska, ben och avfall»). Não há mina nenhuma: é a própria cidade antiga misturada ao solo.',
          },
        ],
      },
      folket: {
        emoji: '⚒️',
        text: '«Här bodde smeder och kammakare, köpmän och krigare, och trälar, som icke ägde sig själva», sade Gunnar allvarligt. «I gravarna har man funnit siden från Österlandet och glas från Rhenlandet, ty Birka var en port mellan världar.» Han berättade att omkring år 830 kom en munk vid namn Ansgar hit från frankernas rike för att predika om Kristus. «Kungen lät honom stanna och predika, ehuru de flesta höllo fast vid de gamla gudarna», sade han. Linu undrade hur det måste ha känts att stå med en främmande tro på en främmande strand.',
        translation:
          '«Aqui moravam ferreiros e fabricantes de pentes, mercadores e guerreiros, e escravos, que não eram donos de si mesmos», disse o Gunnar, sério. «Nos túmulos encontraram seda do Oriente e vidro da Renânia, pois Birka era uma porta entre mundos.» Ele contou que por volta do ano 830 chegou um monge chamado Ansgário, vindo do reino dos francos, para pregar sobre Cristo. «O rei deixou que ele ficasse e pregasse, embora a maioria se mantivesse fiel aos velhos deuses», disse. O Linu se perguntou como teria sido estar com uma fé estrangeira numa praia estrangeira.',
        choices: [{ text: 'Be Gunnar berätta om Ansgars resa.', translation: 'Pedir ao Gunnar que conte a viagem de Ansgário.', next: 'ansgar' }],
      },
      ansgar: {
        emoji: '✝️',
        text: 'Gunnar satte sig på en sten och talade med sänkt röst, som man talar i en kyrka. «Det förtäljes att Ansgar och hans följeslagare på vägen blevo överfallna av sjörövare, som togo allt vad de ägde, även böckerna», sade han. «Ändå fortsatte de, ty de ville icke vända om, och slutligen kommo de till Birka, fattiga men oböjda.» Han tillade att munken sedan vände tillbaka till sitt land, och att det skulle dröja länge innan den nya tron slog rot i Svea rike. «De som så med tårar skola skörda med jubel, står det i Psaltaren», sade han, och Linu förstod att den gamla versen var menad som en sammanfattning.',
        translation:
          'O Gunnar sentou-se numa pedra e falou em voz baixa, como se fala numa igreja. «Conta-se que Ansgário e os seus companheiros foram atacados no caminho por piratas, que levaram tudo o que tinham, até os livros», disse ele. «Mesmo assim seguiram em frente, pois não queriam voltar atrás, e por fim chegaram a Birka, pobres mas sem se dobrar.» Acrescentou que o monge depois voltou para a sua terra, e que ainda levaria muito tempo até a nova fé criar raízes no reino dos suíones. «Os que semeiam com lágrimas colherão com júbilo, diz o Saltério», falou, e o Linu entendeu que o velho versículo era dito como um resumo.',
        choices: [
          { text: 'Fråga vad som till slut hände med Birka.', translation: 'Perguntar o que aconteceu com Birka no fim.', next: 'slutet' },
          {
            text: '«Ansgar kom alltså till Birka med alla sina böcker i behåll.»',
            translation: '«Então Ansgário chegou a Birka com todos os seus livros intactos.»',
            wrong: 'O Gunnar contou que os piratas levaram tudo, «även böckerna» — até os livros. Ansgário chegou a Birka pobre, mas sem se dobrar («fattiga men oböjda»).',
          },
        ],
      },
      slutet: {
        emoji: '🌅',
        text: '«Mot slutet av vikingatiden övergavs staden, och ingen vet med visshet varför», sade Gunnar och såg ut över vattnet. «Kanske blevo farlederna för grunda, ty landet steg sakta ur Mälaren, kanske flyttade makten till andra platser.» Han reste sig mödosamt och hämtade en gammal vers ur minnet, fritt återgiven efter Havamal: «Fä dör, fränder dö, själv dör man likaså, men eftermälet dör aldrig för den som gott har vunnit.» Solen sjönk mot trädtopparna, och båten till Stockholm skulle snart avgå. «Nu är det ditt val, främling», sade han, «vill du stanna till kvällen eller fara hem med dagsljuset?»',
        translation:
          '«No fim da Era Viking a cidade foi abandonada, e ninguém sabe ao certo por quê», disse o Gunnar, olhando a água. «Talvez os canais de navegação tenham ficado rasos demais, pois a terra subia devagar do Mälaren; talvez o poder tenha se mudado para outros lugares.» Ele se levantou com esforço e tirou da memória um verso antigo, livremente adaptado do Hávamál: «Morre o gado, morrem os parentes, morre também a gente; mas a fama nunca morre para quem a conquistou com o bem.» O sol descia para as copas das árvores, e o barco para Estocolmo logo ia partir. «Agora a escolha é sua, forasteiro», disse ele, «quer ficar até a noite ou voltar com a luz do dia?»',
        choices: [
          { text: 'Stanna och se solnedgången med Gunnar.', translation: 'Ficar e ver o pôr do sol com o Gunnar.', next: 'final_bom' },
          { text: 'Ta båten hem med dagsljuset.', translation: 'Pegar o barco de volta com a luz do dia.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '✨',
        text: 'Linu stannade, och de satt tillsammans vid foten av en gravhög medan solen sjönk ned i Mälaren och färgade vattnet rött som smält koppar. Gunnar berättade om runstenar och om kungsgården på Adelsö, om köpmän och krigare, tills stjärnorna tändes en efter en över ön. Sent på kvällen förde han Linu över till fastlandet i sin lilla motorbåt, och motorns dunk ekade som ett hjärta i mörkret. «Glöm icke svarta jorden», sade han vid bryggan, «ty den som minns de döda, han ger dem liv.» Linu lovade, och han visste att han skulle hålla sitt löfte.',
        translation:
          'O Linu ficou, e os dois se sentaram ao pé de um túmulo enquanto o sol afundava no Mälaren e tingia a água de vermelho como cobre derretido. O Gunnar falou de pedras rúnicas e da fazenda real de Adelsö, de mercadores e guerreiros, até que as estrelas se acenderam uma a uma sobre a ilha. Tarde da noite, levou o Linu até o continente no seu barquinho a motor, e as batidas do motor ecoavam como um coração no escuro. «Não esqueça a terra negra», disse ele no trapiche, «pois quem se lembra dos mortos dá-lhes vida.» O Linu prometeu, e sabia que ia cumprir a promessa.',
        ending: { tone: 'bom', title: 'Quem lembra dá vida', message: 'Você acompanhou o sueco solene do barqueiro, com as suas formas arcaicas, e ficou para ouvir a saga inteira.' },
      },
      final_neutro: {
        emoji: '🌫️',
        text: 'Linu tackade Gunnar och skyndade ned till bryggan, där båten redan tutade för avgång. Från däcket såg han den gamle mannen stå kvar på stranden, allt mindre, tills ön åter försvann i diset. Hela vägen till Stockholm satt han med jord under klorna och en känsla av att han hade lämnat en berättelse ofullbordad. Han hade sett staden, men icke dess natt, och han hade hört versen, men icke hela sagan. «Nästa sommar», viskade han åt vattnet, men Mälaren svarade icke.',
        translation:
          'O Linu agradeceu ao Gunnar e desceu às pressas até o trapiche, onde o barco já apitava para partir. Do convés, viu o velho parado na margem, cada vez menor, até a ilha sumir de novo na névoa. Durante todo o caminho até Estocolmo ele ficou com terra sob as garras e a sensação de ter deixado uma história inacabada. Tinha visto a cidade, mas não a sua noite; tinha ouvido o verso, mas não a saga inteira. «No próximo verão», sussurrou para a água, mas o Mälaren não respondeu.',
        ending: { tone: 'neutro', title: 'Uma saga pela metade', message: 'Você entendeu a história, mas partiu antes do fim. Birka guarda o resto para a próxima visita.' },
      },
    },
  },
  {
    id: 'sv-h45',
    level: 'C2',
    cefr: 'C2',
    title: 'En afton i början av maj',
    emoji: '🌆',
    summary: 'No alto de Mosebacke, em Södermalm, Estocolmo, o Linu lê o começo de «O quarto vermelho», de Strindberg, e um velho livreiro o leva por um passeio literário que termina num mistério.',
    cultural_context:
      '«Röda rummet» («O quarto vermelho», 1879), de August Strindberg (1849–1912), é considerado o primeiro romance moderno sueco: uma sátira da Estocolmo da época que começa numa tarde de maio em Mosebacke, em Södermalm, de onde o jovem Arvid Falk contempla a cidade. Södermalm, a grande ilha ao sul do centro, foi por muito tempo um bairro pobre e operário, e ainda guarda casinhas de madeira do século XVIII em ruas como a Fjällgatan.',
    start: 'start',
    glossary: [
      ['en afton', 'uma tarde, um anoitecer (literário)'],
      ['icke', 'não (literário)'],
      ['ty', 'pois (literário)'],
      ['ett antikvariat', 'um sebo'],
      ['i fågelperspektiv', 'em vista de pássaro'],
      ['de ljögo / vi läsa', 'eles mentiam / nós lemos (plural verbal antigo)'],
      ['tala är silver, tiga är guld', 'falar é prata, calar é ouro'],
      ['man ska inte döma hunden efter håren', 'não se julga o livro pela capa (lit. o cão pelo pelo)'],
    ],
    nodes: {
      start: {
        emoji: '🌇',
        text: 'Det var en afton i början av maj, och Linu hade klättrat uppför de branta trapporna till Mosebacke torg med en tunn bok i fickan. Luften var ljum och doftade av nyutslagna lövträd och av våt sten efter ett eftermiddagsregn, och nedanför bredde staden ut sig med sina tak, sina tornspiror och sitt glittrande vatten. Han satte sig på en bänk vid terrassen, slog upp boken och läste de första orden, som han hade hört citeras så många gånger: «Det var en afton i början av maj.» Han log åt sammanträffandet, ty det var ju precis en sådan afton. Då harklade sig någon bakom honom, och en gammal man med vit mustasch och en portfölj under armen frågade om platsen bredvid var ledig.',
        translation:
          'Era uma tarde no começo de maio, e o Linu tinha subido as escadarias íngremes até a praça de Mosebacke com um livro fino no bolso. O ar estava morno e cheirava a árvores recém-brotadas e a pedra molhada depois de uma chuva de fim de tarde, e lá embaixo a cidade se estendia com os seus telhados, as suas torres e a sua água cintilante. Ele se sentou num banco junto ao terraço, abriu o livro e leu as primeiras palavras, que tinha ouvido citar tantas vezes: «Era uma tarde no começo de maio.» Sorriu da coincidência, pois era justamente uma tarde assim. Então alguém pigarreou atrás dele, e um velho de bigode branco e pasta debaixo do braço perguntou se o lugar ao lado estava livre.',
        choices: [
          { text: 'Bjuda mannen att sitta ned.', translation: 'Convidar o homem a se sentar.', next: 'mannen' },
          { text: 'Nicka kort och fortsätta läsa.', translation: 'Acenar rapidamente com a cabeça e continuar lendo.', next: 'mannen' },
        ],
      },
      mannen: {
        emoji: '🎩',
        text: 'Mannen presenterade sig som herr Lindqvist och berättade att han i femtio år hade drivit ett antikvariat på en av Söders sidogator. Han kastade en blick på boken i Linus vingar och nickade gillande. «Röda rummet», sade han, «och ni sitter nästan där Arvid Falk satt, den unge mannen som just hade lämnat sin tjänst för att bli författare.» Han förklarade att Strindberg i det första kapitlet lät hela Stockholm breda ut sig som i fågelperspektiv, med sina kyrkor, sina fabriker och sitt buller. «Man säger att den moderna svenska romanen föddes här uppe», tillade han med ett torrt leende, «men själv tror jag att den föddes av ren ilska.»',
        translation:
          'O homem se apresentou como senhor Lindqvist e contou que por cinquenta anos tinha mantido um sebo numa das ruas transversais de Söder. Lançou um olhar ao livro nas asas do Linu e aprovou com a cabeça. «O quarto vermelho», disse, «e o senhor está sentado quase onde se sentava Arvid Falk, o rapaz que tinha acabado de largar o emprego para ser escritor.» Explicou que Strindberg, no primeiro capítulo, fazia Estocolmo inteira se estender como vista de pássaro, com as suas igrejas, as suas fábricas e o seu barulho. «Dizem que o romance moderno sueco nasceu aqui em cima», acrescentou com um sorriso seco, «mas eu acho que ele nasceu de pura raiva.»',
        choices: [
          { text: '«Varför just ilska?»', translation: '«Por que justamente raiva?»', next: 'ilska' },
          { text: 'Fråga om antikvariatet och Söders historia.', translation: 'Perguntar sobre o sebo e a história de Söder.', next: 'fjallgatan' },
        ],
      },
      ilska: {
        emoji: '🔥',
        text: '«Strindberg var ung och fattig, och han hatade allt som var falskt: ämbetsverk där ingen arbetade, tidningar som ljögo och förläggare som köpte och sålde själar», sade herr Lindqvist. «Så han skrev en satir, och Stockholm skrattade och blev rasande på samma gång.» Han berättade att boken blev en stor framgång och gjorde den unge författaren berömd nästan över en natt. «Tala är silver, tiga är guld, säger ordspråket», tillade han, «men Strindberg teg aldrig en enda dag i sitt liv, och det är därför vi ännu läsa honom.» Linu skrattade och antecknade den gamla pluralformen, som gubben uttalade med tydligt välbehag.',
        translation:
          '«Strindberg era jovem e pobre, e odiava tudo o que era falso: repartições onde ninguém trabalhava, jornais que mentiam e editores que compravam e vendiam almas», disse o senhor Lindqvist. «Então ele escreveu uma sátira, e Estocolmo riu e ficou furiosa ao mesmo tempo.» Contou que o livro foi um grande sucesso e deixou o jovem autor famoso quase da noite para o dia. «Falar é prata, calar é ouro, diz o provérbio», acrescentou, «mas Strindberg nunca se calou um único dia na vida, e é por isso que ainda o lemos.» O Linu riu e anotou a forma antiga do plural, que o velho pronunciava com evidente prazer.',
        choices: [
          { text: '«Boken gjorde honom alltså berömd, trots att den retade upp folk.»', translation: '«Então o livro o deixou famoso, apesar de ter irritado as pessoas.»', next: 'fjallgatan' },
          {
            text: '«Strindberg teg alltså när det var klokast, precis som ordspråket säger.»',
            translation: '«Então Strindberg se calava quando era mais sensato, como diz o provérbio.»',
            wrong: 'O livreiro diz o contrário: «Strindberg teg aldrig en enda dag i sitt liv» — Strindberg nunca se calou um único dia. O provérbio «falar é prata, calar é ouro» aparece justamente para mostrar que ele fez o oposto.',
          },
        ],
      },
      fjallgatan: {
        emoji: '🏘️',
        text: 'De gick längs Fjällgatan, där utsikten över Saltsjön och Djurgården öppnade sig som en teaterridå, och herr Lindqvist berättade om Söders forna dagar. «Här bodde arbetare och sjömän, tvätterskor och hantverkare, och fattigdomen var lika tät som dimman om hösten», sade han. «Men här fanns också krogar och visor och en frihet som de fina kvarteren på andra sidan vattnet aldrig kände.» Han pekade på en av de små trästugorna och berättade att hans farmor hade vuxit upp där med sju syskon i ett enda rum. «Borta bra men hemma bäst», sade han, «och för mig har hemma alltid varit Söder.»',
        translation:
          'Eles seguiram pela Fjällgatan, onde a vista sobre o Saltsjön e Djurgården se abria como uma cortina de teatro, e o senhor Lindqvist falou dos velhos tempos de Söder. «Aqui moravam operários e marinheiros, lavadeiras e artesãos, e a pobreza era densa como a neblina de outono», disse ele. «Mas aqui também havia tabernas e canções e uma liberdade que os bairros finos do outro lado da água nunca conheceram.» Ele apontou uma das casinhas de madeira e contou que a avó dele tinha crescido ali com sete irmãos num único cômodo. «Bom é viajar, mas melhor é estar em casa», disse, «e para mim casa sempre foi Söder.»',
        choices: [{ text: 'Följa med honom till antikvariatet.', translation: 'Acompanhá-lo até o sebo.', next: 'antikvariat' }],
      },
      antikvariat: {
        emoji: '📚',
        text: 'Antikvariatet låg i en källare några kvarter bort, bland låga trähus målade i ockra och falurött, som hade klarat både bränder och rivningar i över två hundra år. I dunklet därinne stodo böckerna i travar på golvet, och en katt låg och sov ovanpå en samlad upplaga av Selma Lagerlöf. «Man ska icke döma hunden efter håren», sade den gamle och strök katten över ryggen, «ty den fulaste boken i hyllan kan bära den vackraste meningen.» Han drog fram en liten, nött volym med lösa blad och lade den varsamt i Linus vingar. «Öppna den», sade han, «och läs vad som står på försättsbladet.»',
        translation:
          'O sebo ficava num porão a algumas quadras dali, entre casas baixas de madeira pintadas de ocre e de vermelho-falun, que tinham sobrevivido a incêndios e demolições por mais de duzentos anos. Na penumbra lá dentro os livros se empilhavam no chão, e um gato dormia em cima das obras reunidas de Selma Lagerlöf. «Não se julga o cão pelo pelo», disse o velho, acariciando o gato, «pois o livro mais feio da estante pode carregar a frase mais bonita.» Ele puxou um volume pequeno e gasto, de folhas soltas, e o pôs com cuidado nas asas do Linu. «Abra», disse, «e leia o que está escrito na folha de rosto.»',
        choices: [{ text: 'Öppna boken.', translation: 'Abrir o livro.', next: 'boken' }],
      },
      boken: {
        emoji: '✒️',
        text: 'Det var en diktsamling från början av förra seklet, och på försättsbladet stod en dedikation, skriven med blekt bläck: «Till min Elsa, som väntade.» Herr Lindqvist berättade att boken hade kommit till honom i en låda från ett dödsbo, och att ingen visste vem Elsa var eller hur länge hon hade väntat. «Varje gammal bok bär två berättelser», sade han, «den som står tryckt och den som har levts av dem som läst den.» Han såg på Linu med ett allvar som plötsligt fick hans ansikte att se mycket gammalt ut. «Jag är för gammal för att leta efter Elsa», sade han, «men ni har unga vingar.»',
        translation:
          'Era um livro de poemas do começo do século passado, e na folha de rosto havia uma dedicatória escrita com tinta desbotada: «Para a minha Elsa, que esperou.» O senhor Lindqvist contou que o livro tinha chegado a ele numa caixa vinda de um espólio, e que ninguém sabia quem era Elsa nem quanto tempo ela tinha esperado. «Todo livro velho carrega duas histórias», disse ele, «a que está impressa e a que foi vivida por quem o leu.» Olhou para o Linu com uma seriedade que de repente fez o seu rosto parecer muito velho. «Estou velho demais para procurar a Elsa», disse, «mas o senhor tem asas jovens.»',
        choices: [
          { text: 'Ta emot boken och lova att försöka ta reda på mer.', translation: 'Aceitar o livro e prometer tentar descobrir mais.', next: 'final_bom' },
          { text: 'Tacka artigt men lämna tillbaka boken.', translation: 'Agradecer educadamente, mas devolver o livro.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '💌',
        text: 'Linu tog emot boken med båda vingarna, som man tar emot något levande, och lovade att göra vad han kunde. De följande veckorna satt han i arkiv och bibliotek och letade i gamla adresskalendrar och kyrkböcker, tills han en regnig eftermiddag fann en Elsa som hade bott på Söder och gift sig sent, efter många års väntan på en sjöman. När han berättade det för herr Lindqvist satt den gamle länge tyst och såg ut genom det lilla källarfönstret. «Bättre sent än aldrig», sade han till slut, med blanka ögon, «både för henne och för mig.» Och Linu tänkte att han nu själv hade blivit en del av bokens andra berättelse, den som icke står tryckt.',
        translation:
          'O Linu recebeu o livro com as duas asas, como quem recebe algo vivo, e prometeu fazer o que pudesse. Nas semanas seguintes, sentou-se em arquivos e bibliotecas e vasculhou velhos catálogos de endereços e registros paroquiais, até que numa tarde de chuva encontrou uma Elsa que tinha morado em Söder e se casado tarde, depois de muitos anos esperando um marinheiro. Quando ele contou isso ao senhor Lindqvist, o velho ficou muito tempo calado, olhando pela janelinha do porão. «Antes tarde do que nunca», disse por fim, de olhos marejados, «para ela e para mim.» E o Linu pensou que ele mesmo agora fazia parte da segunda história do livro, a que não está impressa.',
        ending: { tone: 'bom', title: 'A segunda história do livro', message: 'Você acompanhou o sueco literário de ponta a ponta, com as suas formas antigas e provérbios, e deu um fim à espera de Elsa.' },
      },
      final_neutro: {
        emoji: '🌃',
        text: 'Linu tackade artigt och lade tillbaka boken på disken, ty han kände sig icke värdig ett sådant uppdrag. Herr Lindqvist nickade utan förebråelse och ställde in volymen i hyllan, där den genast försvann bland rader av bleka ryggar. När Linu gick upp mot Mosebacke igen hade skymningen fallit, och staden nedanför tände sina ljus ett efter ett. Han slog upp Röda rummet på nytt men kunde icke samla tankarna, ty han tänkte hela tiden på Elsa, som väntade. Nästa dag gick han tillbaka till antikvariatet, men dörren var stängd, och på lappen stod det bara: «Åter i höst.»',
        translation:
          'O Linu agradeceu educadamente e deixou o livro no balcão, pois não se sentia digno de tal missão. O senhor Lindqvist assentiu sem censura e pôs o volume na estante, onde ele logo sumiu entre fileiras de lombadas desbotadas. Quando o Linu subiu de novo para Mosebacke, o crepúsculo já tinha caído, e a cidade lá embaixo acendia as suas luzes uma a uma. Ele abriu O quarto vermelho outra vez, mas não conseguia concentrar os pensamentos, pois só pensava em Elsa, que esperou. No dia seguinte voltou ao sebo, mas a porta estava fechada, e no bilhete estava escrito apenas: «De volta no outono.»',
        ending: { tone: 'neutro', title: 'De volta no outono', message: 'Você entendeu o passeio literário, mas deixou a história de Elsa na estante. Às vezes, a gente só volta tarde demais.' },
      },
    },
  },
];
