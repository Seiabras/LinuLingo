import type { StorySeed } from '../types';

/** Histórias interativas em norueguês: 3 por subnível, cada uma num lugar diferente. */
export const STORIES_NB: StorySeed[] = [
  // ───────────────────────── A1.1 ─────────────────────────
  {
    id: 'nb-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Reker på Aker Brygge',
    emoji: '🦐',
    summary: 'No cais de Aker Brygge, em Oslo, o Linu conhece a Ingrid e divide com ela um saco de camarões.',
    cultural_context:
      'Aker Brygge, à beira do fiorde de Oslo, foi um estaleiro até 1982 e hoje é uma área de passeio, restaurantes e apartamentos. Ali perto, junto à prefeitura, barcos de pesca costumam vender camarão fresco, que os noruegueses comem descascando na hora, com pão e maionese.',
    start: 'start',
    glossary: [
      ['Hei! / Ha det!', 'Oi! / Tchau!'],
      ['Jeg heter… / Hvem er du?', 'Eu me chamo… / Quem é você?'],
      ['sulten', 'com fome'],
      ['reker', 'camarões'],
      ['ja takk / nei takk', 'sim, obrigado / não, obrigado'],
      ['seks / tolv', 'seis / doze'],
      ['kjempegodt', 'muito gostoso (o «kj» é um chiado suave, parecido com o «ch» do alemão «ich»)'],
    ],
    nodes: {
      start: {
        emoji: '⚓',
        text: 'Oslo, Aker Brygge. Linu er sulten.',
        translation: 'Oslo, Aker Brygge. O Linu está com fome.',
        choices: [
          { text: 'Linu går til en båt.', translation: 'O Linu vai até um barco.', next: 'baat' },
          { text: 'Linu ser på fjorden.', translation: 'O Linu olha o fiorde.', next: 'fjorden' },
        ],
      },
      fjorden: {
        emoji: '🌊',
        text: 'Fjorden er blå. Båtene er hvite.',
        translation: 'O fiorde é azul. Os barcos são brancos.',
        choices: [{ text: '«Nå: mat!»', translation: '«Agora: comida!»', next: 'baat' }],
      },
      baat: {
        emoji: '👩',
        text: '«Hei! Jeg heter Ingrid. Hvem er du?»',
        translation: '«Oi! Eu me chamo Ingrid. Quem é você?»',
        choices: [
          { text: '«Hei! Jeg er Linu.»', translation: '«Oi! Eu sou o Linu.»', next: 'reker' },
          {
            text: '«Ha det, Ingrid!»',
            translation: '«Tchau, Ingrid!»',
            wrong: 'A Ingrid disse «Hei!» (Oi!) e perguntou «Hvem er du?» (Quem é você?). «Ha det» é «tchau»: o Linu nem se apresentou ainda! Responda «Jeg er Linu».',
          },
        ],
      },
      reker: {
        emoji: '🦐',
        text: '«Vil du ha reker? De er ferske.»',
        translation: '«Você quer camarões? Estão fresquinhos.»',
        choices: [
          { text: '«Ja takk!»', translation: '«Sim, obrigado!»', next: 'telle' },
          {
            text: '«Nei takk, jeg er ikke sulten.»',
            translation: '«Não, obrigado, não estou com fome.»',
            wrong: 'A história começou dizendo «Linu er sulten»: o Linu ESTÁ com fome! «Sulten» quer dizer «com fome».',
          },
        ],
      },
      telle: {
        emoji: '🔢',
        text: '«Her er tolv reker. Seks til deg og seks til meg.»',
        translation: '«Aqui estão doze camarões. Seis para você e seis para mim.»',
        choices: [
          { text: 'Linu spiser seks reker.', translation: 'O Linu come seis camarões.', next: 'final_bom' },
          { text: 'Linu spiser tolv reker!', translation: 'O Linu come doze camarões!', next: 'final_mage' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu og Ingrid spiser sammen. Kjempegodt!',
        translation: 'O Linu e a Ingrid comem juntos. Uma delícia!',
        ending: { tone: 'bom', title: 'Camarão dividido', message: 'O Linu dividiu os camarões e ganhou uma amiga em Oslo.' },
      },
      final_mage: {
        emoji: '😠',
        text: 'Tolv reker! Nå er Ingrid sulten… og sur.',
        translation: 'Doze camarões! Agora a Ingrid está com fome… e brava.',
        ending: { tone: 'neutro', title: 'Pinguim guloso', message: 'A Ingrid disse «seks til deg og seks til meg» (seis para você e seis para mim). Tente de novo e divida!' },
      },
    },
  },
  {
    id: 'nb-h2',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Nordlys i Tromsø',
    emoji: '🌌',
    summary: 'Numa noite gelada em Tromsø, o Linu conhece o Aksel e vê a aurora boreal pela primeira vez.',
    cultural_context:
      'Tromsø fica bem ao norte do Círculo Polar Ártico e é um dos melhores lugares do mundo para ver a aurora boreal («nordlys»), de setembro a abril. No auge do inverno, o sol nem chega a nascer: é a «mørketid», a época escura.',
    start: 'start',
    glossary: [
      ['kaldt', 'frio'],
      ['minus tretten', 'menos treze'],
      ['tretti', 'trinta'],
      ['nordlys', 'aurora boreal'],
      ['himmelen', 'o céu'],
      ['grønn', 'verde'],
      ['trøtt', 'cansado, com sono'],
      ['Se!', 'Olhe!'],
    ],
    nodes: {
      start: {
        emoji: '❄️',
        text: 'Tromsø. Det er kaldt: minus tretten grader!',
        translation: 'Tromsø. Está frio: menos treze graus!',
        choices: [
          { text: 'Linu går ut. Han er glad.', translation: 'O Linu sai. Ele está feliz.', next: 'ute' },
          {
            text: '«Tretti grader! Det er varmt!»',
            translation: '«Trinta graus! Está quente!»',
            wrong: 'O texto diz «minus tretten» (menos treze), não «tretti» (trinta). E «kaldt» quer dizer «frio»!',
          },
        ],
      },
      ute: {
        emoji: '👦',
        text: '«Hei! Jeg heter Aksel. Er du turist?»',
        translation: '«Oi! Eu me chamo Aksel. Você é turista?»',
        choices: [
          { text: '«Ja. Jeg er Linu, fra Antarktis.»', translation: '«Sou. Eu sou o Linu, da Antártida.»', next: 'himmel' },
          {
            text: '«Nei, jeg er Aksel.»',
            translation: '«Não, eu sou o Aksel.»',
            wrong: 'Aksel é ELE! Ele perguntou «Er du turist?» (Você é turista?). Responda sobre você: «Ja, jeg er Linu».',
          },
        ],
      },
      himmel: {
        emoji: '🌌',
        text: '«Se! Himmelen er grønn. Det er nordlys!»',
        translation: '«Olhe! O céu está verde. É a aurora boreal!»',
        choices: [
          { text: 'Linu ser opp.', translation: 'O Linu olha para cima.', next: 'stille' },
          { text: 'Linu går inn. Han er trøtt.', translation: 'O Linu entra. Ele está com sono.', next: 'final_trott' },
        ],
      },
      stille: {
        emoji: '✨',
        text: 'Himmelen er grønn og lilla. Nordlyset danser!',
        translation: 'O céu está verde e lilás. A aurora dança!',
        choices: [{ text: '«Tusen takk, Aksel!»', translation: '«Muito obrigado, Aksel!»', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu og Aksel ser på nordlyset. Det er magisk!',
        translation: 'O Linu e o Aksel olham a aurora boreal. É mágico!',
        ending: { tone: 'bom', title: 'Céu verde', message: 'O Linu viu a primeira aurora boreal da vida dele, com um novo amigo.' },
      },
      final_trott: {
        emoji: '😴',
        text: 'Linu sover. Nordlyset er ute… uten Linu.',
        translation: 'O Linu dorme. A aurora está lá fora… sem o Linu.',
        ending: { tone: 'neutro', title: 'Soninho na hora errada', message: 'A aurora boreal não espera ninguém! Tente de novo e olhe para cima.' },
      },
    },
  },
  {
    id: 'nb-h3',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Tørrfisk i Lofoten',
    emoji: '🐟',
    summary: 'Nas ilhas Lofoten, o Linu conhece o Per, um pescador, e prova o bacalhau seco ao vento.',
    cultural_context:
      'Nas Lofoten, o bacalhau do inverno (skrei) é pendurado em grandes armações de madeira (hjeller) e seca ao ar livre por meses, sem sal: é a «tørrfisk». As casinhas vermelhas à beira d’água, as «rorbuer», eram abrigos de pescadores.',
    start: 'start',
    glossary: [
      ['høye', 'altos'],
      ['havet', 'o mar'],
      ['en fisker', 'um pescador'],
      ['fire / fjorten', 'quatro / catorze'],
      ['tørrfisk', 'peixe seco (bacalhau seco ao vento)'],
      ['Smak!', 'Prove!'],
      ['god', 'gostoso'],
    ],
    nodes: {
      start: {
        emoji: '🏔️',
        text: 'Lofoten. Fjellene er høye, og havet er blått.',
        translation: 'Lofoten. As montanhas são altas, e o mar é azul.',
        choices: [{ text: 'Linu går til en rød rorbu.', translation: 'O Linu vai até uma casinha vermelha de pescador.', next: 'rorbu' }],
      },
      rorbu: {
        emoji: '🧔',
        text: '«Hei! Jeg heter Per. Jeg er fisker.»',
        translation: '«Oi! Eu me chamo Per. Eu sou pescador.»',
        choices: [
          { text: '«Hei, Per! Jeg er Linu.»', translation: '«Oi, Per! Eu sou o Linu.»', next: 'baat' },
          {
            text: '«Hei, Per! Er du lærer?»',
            translation: '«Oi, Per! Você é professor?»',
            wrong: 'O Per acabou de dizer «Jeg er fisker»: eu sou pescador!',
          },
        ],
      },
      baat: {
        emoji: '🚤',
        text: 'Per har en båt. Han har fjorten fisk i båten.',
        translation: 'O Per tem um barco. Ele tem catorze peixes no barco.',
        choices: [
          { text: '«Fjorten! Du er flink!»', translation: '«Catorze! Você é bom nisso!»', next: 'hjell' },
          {
            text: '«Bare fire fisk?»',
            translation: '«Só quatro peixes?»',
            wrong: 'O texto diz «fjorten» (catorze), não «fire» (quatro). O «-ten» no fim é como o nosso «-ze» de «catorze».',
          },
        ],
      },
      hjell: {
        emoji: '🐟',
        text: 'Her er tørrfisk. Fisken er hard og tørr.',
        translation: 'Aqui está o peixe seco. O peixe é duro e seco.',
        choices: [{ text: '«Er tørrfisk god?»', translation: '«Peixe seco é gostoso?»', next: 'smak' }],
      },
      smak: {
        emoji: '😋',
        text: '«Ja! Smak, Linu!»',
        translation: '«É! Prove, Linu!»',
        choices: [
          { text: 'Linu smaker. «Mmm!»', translation: 'O Linu prova. «Hummm!»', next: 'final_bom' },
          { text: 'Linu hopper i havet.', translation: 'O Linu pula no mar.', next: 'final_hav' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Tørrfisken er god. Linu og Per er venner nå.',
        translation: 'O peixe seco é gostoso. O Linu e o Per agora são amigos.',
        ending: { tone: 'bom', title: 'Sabor das Lofoten', message: 'O Linu provou a tørrfisk e fez amizade com um pescador.' },
      },
      final_hav: {
        emoji: '🐧',
        text: 'Plask! Havet er kaldt. Men Linu er glad!',
        translation: 'Tchibum! O mar está frio. Mas o Linu está feliz!',
        ending: { tone: 'neutro', title: 'Pinguim é pinguim', message: 'O Linu preferiu pescar sozinho no mar gelado. E a tørrfisk do Per? Tente de novo!' },
      },
    },
  },
  // ───────────────────────── A1.2 ─────────────────────────
  {
    id: 'nb-h4',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Regn på Bryggen',
    emoji: '☔',
    summary: 'Num dia de chuva em Bergen, o Linu passeia por Bryggen e toma uma sopa de peixe no mercado.',
    cultural_context:
      'Bergen, cercada de montanhas, é famosa por chover muito. As casas de madeira coloridas de Bryggen, o antigo cais dos comerciantes da Liga Hanseática, são Patrimônio Mundial da UNESCO desde 1979.',
    start: 'start',
    glossary: [
      ['det regner', 'está chovendo'],
      ['jeg liker / jeg liker ikke', 'eu gosto / eu não gosto'],
      ['en paraply / paraplyen', 'um guarda-chuva / o guarda-chuva'],
      ['huset / husene', 'a casa / as casas'],
      ['det finnes', 'existe, há'],
      ['laks / torsk', 'salmão / bacalhau (fresco)'],
      ['ei suppe / suppa', 'uma sopa / a sopa'],
    ],
    nodes: {
      start: {
        emoji: '🌧️',
        text: 'Linu er i Bergen. Det regner, men Linu liker regn.',
        translation: 'O Linu está em Bergen. Está chovendo, mas o Linu gosta de chuva.',
        choices: [
          { text: 'Linu kjøper en paraply.', translation: 'O Linu compra um guarda-chuva.', next: 'paraply' },
          { text: 'Linu går til Bryggen.', translation: 'O Linu vai até Bryggen.', next: 'bryggen' },
          {
            text: 'Linu er sur. Han liker ikke regn.',
            translation: 'O Linu está emburrado. Ele não gosta de chuva.',
            wrong: 'O texto diz «men Linu liker regn»: MAS o Linu gosta de chuva! «Liker» é «gosta»; «liker ikke» seria «não gosta».',
          },
        ],
      },
      paraply: {
        emoji: '☂️',
        text: 'Paraplyen er gul. Linu liker fargen.',
        translation: 'O guarda-chuva é amarelo. O Linu gosta da cor.',
        choices: [{ text: 'Linu går til Bryggen.', translation: 'O Linu vai até Bryggen.', next: 'bryggen' }],
      },
      bryggen: {
        emoji: '🏘️',
        text: 'Husene på Bryggen er gamle. De er røde, gule og hvite.',
        translation: 'As casas de Bryggen são antigas. Elas são vermelhas, amarelas e brancas.',
        choices: [{ text: 'Linu går til Fisketorget.', translation: 'O Linu vai até o mercado de peixe.', next: 'torget' }],
      },
      torget: {
        emoji: '🐟',
        text: 'Ole selger fisk. «Vi har laks og reker, men i dag finnes det ikke torsk.»',
        translation: 'O Ole vende peixe. «Temos salmão e camarão, mas hoje não tem bacalhau.»',
        choices: [
          { text: '«Jeg liker laks. Laks, takk!»', translation: '«Eu gosto de salmão. Salmão, por favor!»', next: 'suppe' },
          {
            text: '«Torsk, takk!»',
            translation: '«Bacalhau, por favor!»',
            wrong: 'O Ole disse «i dag finnes det ikke torsk»: hoje NÃO tem bacalhau. Ele tem «laks» (salmão) e «reker» (camarão).',
          },
        ],
      },
      suppe: {
        emoji: '🍲',
        text: 'Ole lager fiskesuppe med laks. Suppa er varm og god.',
        translation: 'O Ole faz uma sopa de peixe com salmão. A sopa está quente e gostosa.',
        choices: [
          { text: 'Linu spiser suppa inne.', translation: 'O Linu come a sopa lá dentro.', next: 'final_bom' },
          { text: 'Linu spiser suppa ute i regnet.', translation: 'O Linu come a sopa lá fora, na chuva.', next: 'final_regn' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu spiser og ser på regnet. Bergen er koselig!',
        translation: 'O Linu come e olha a chuva. Bergen é aconchegante!',
        ending: { tone: 'bom', title: 'Sopa quentinha', message: 'Com chuva ou sem chuva, o Linu adorou Bergen.' },
      },
      final_regn: {
        emoji: '🌧️',
        text: 'Regnet faller i suppa. Nå er suppa kald!',
        translation: 'A chuva cai na sopa. Agora a sopa está fria!',
        ending: { tone: 'neutro', title: 'Sopa de chuva', message: 'Gostar de chuva é uma coisa; tomar sopa debaixo dela é outra! Tente de novo.' },
      },
    },
  },
  {
    id: 'nb-h5',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Marked i Røros',
    emoji: '🛷',
    summary: 'Na feira de inverno de Røros, o Linu prova lefse e passeia de trenó puxado a cavalo.',
    cultural_context:
      'Røros, antiga cidade de mineração de cobre, é Patrimônio Mundial da UNESCO pelas suas casas de madeira. Todo ano, em fevereiro, acontece ali a feira de inverno Rørosmartnan, com barracas, cavalos e trenós na neve.',
    start: 'start',
    glossary: [
      ['et marked / markedet', 'uma feira / a feira'],
      ['en bod / boder', 'uma barraca / barracas'],
      ['ei lefse / lefsa', 'uma lefse (panqueca fina de batata ou farinha) / a lefse'],
      ['votter / vottene', 'luvas de um dedo só / as luvas'],
      ['en hest / hesten', 'um cavalo / o cavalo'],
      ['en slede / sleden', 'um trenó / o trenó'],
      ['snill', 'bonzinho, manso'],
    ],
    nodes: {
      start: {
        emoji: '❄️',
        text: 'Det er februar i Røros. Det er kaldt, og det er marked i byen.',
        translation: 'É fevereiro em Røros. Está frio, e tem feira na cidade.',
        choices: [{ text: 'Linu går til markedet.', translation: 'O Linu vai à feira.', next: 'markedet' }],
      },
      markedet: {
        emoji: '🎪',
        text: 'Her finnes det to boder. Én bod selger lefser, og én bod selger votter.',
        translation: 'Aqui há duas barracas. Uma barraca vende lefse, e uma barraca vende luvas.',
        choices: [
          { text: 'Linu kjøper to lefser.', translation: 'O Linu compra duas lefses.', next: 'lefse' },
          { text: 'Linu kjøper votter.', translation: 'O Linu compra luvas.', next: 'votter' },
          {
            text: 'Linu kjøper en is.',
            translation: 'O Linu compra um sorvete.',
            wrong: 'O texto diz que há só duas barracas: uma de «lefser» e uma de «votter» (luvas). Ninguém vende sorvete aqui, e ainda por cima em fevereiro!',
          },
        ],
      },
      votter: {
        emoji: '🧤',
        text: 'Vottene er varme. Men de er for store for en pingvin!',
        translation: 'As luvas são quentinhas. Mas são grandes demais para um pinguim!',
        choices: [{ text: 'Linu ler og kjøper en lefse.', translation: 'O Linu ri e compra uma lefse.', next: 'lefse' }],
      },
      lefse: {
        emoji: '🫓',
        text: 'Lefsa er søt og myk. Linu liker lefse!',
        translation: 'A lefse é doce e macia. O Linu gosta de lefse!',
        choices: [{ text: 'Linu går videre.', translation: 'O Linu segue em frente.', next: 'hest' }],
      },
      hest: {
        emoji: '🐴',
        text: 'En mann kommer med en hest og en slede. «Hei! Jeg heter Jon. Hesten heter Blakken, og han er snill.»',
        translation: 'Um homem chega com um cavalo e um trenó. «Oi! Eu me chamo Jon. O cavalo se chama Blakken, e ele é manso.»',
        choices: [
          { text: '«Hei, Jon! Hei, Blakken!»', translation: '«Oi, Jon! Oi, Blakken!»', next: 'tur' },
          {
            text: '«Hei, Jon! Du er en fin hest!»',
            translation: '«Oi, Jon! Você é um cavalo bonito!»',
            wrong: 'Jon é o HOMEM! «Hesten heter Blakken»: o cavalo se chama Blakken. Repare no «-en» de «hesten»: é o artigo «o» grudado no fim da palavra.',
          },
        ],
      },
      tur: {
        emoji: '🛷',
        text: 'Linu sitter i sleden. Husene er små og gamle, og kirka er hvit.',
        translation: 'O Linu está sentado no trenó. As casas são pequenas e antigas, e a igreja é branca.',
        choices: [
          { text: 'Linu vinker til folk.', translation: 'O Linu acena para as pessoas.', next: 'final_bom' },
          { text: 'Linu lukker øynene.', translation: 'O Linu fecha os olhos.', next: 'final_sov' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Folk vinker tilbake. Linu elsker Røros!',
        translation: 'As pessoas acenam de volta. O Linu adora Røros!',
        ending: { tone: 'bom', title: 'Passeio de trenó', message: 'O Linu provou lefse, conheceu o Blakken e viu a cidade de trenó.' },
      },
      final_sov: {
        emoji: '😴',
        text: 'Linu sover hele turen. Han ser ikke byen!',
        translation: 'O Linu dorme o passeio inteiro. Ele não vê a cidade!',
        ending: { tone: 'neutro', title: 'Soneca no trenó', message: 'O trenó balança, a lefse enche a barriga… e o Linu perdeu o passeio. Tente de novo!' },
      },
    },
  },
  {
    id: 'nb-h6',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Trappene i Ålesund',
    emoji: '🏰',
    summary: 'Em Ålesund, o Linu conhece a Sofie e o cachorro dela, e os três sobem juntos até o mirante do monte Aksla.',
    cultural_context:
      'Depois de um grande incêndio em 1904, Ålesund foi reconstruída em estilo art nouveau («jugendstil»), com torres e fachadas decoradas. Do centro, uma escadaria de 418 degraus sobe até o mirante do monte Aksla.',
    start: 'start',
    glossary: [
      ['huset / husene', 'a casa / as casas'],
      ['et tårn / tårnene', 'uma torre / as torres'],
      ['jeg bor', 'eu moro'],
      ['en hund / hunden', 'um cachorro / o cachorro'],
      ['trinn', 'degraus'],
      ['sliten', 'cansado'],
      ['vafler / vaflene', 'waffles / os waffles'],
    ],
    nodes: {
      start: {
        emoji: '🏰',
        text: 'Linu er i Ålesund. Husene har tårn, og Linu liker tårnene.',
        translation: 'O Linu está em Ålesund. As casas têm torres, e o Linu gosta das torres.',
        choices: [{ text: 'Linu går en tur i byen.', translation: 'O Linu dá uma volta pela cidade.', next: 'jenta' }],
      },
      jenta: {
        emoji: '👧',
        text: '«Hei! Jeg heter Sofie. Jeg bor her. Hunden heter Kaffe.»',
        translation: '«Oi! Eu me chamo Sofie. Eu moro aqui. O cachorro se chama Kaffe.»',
        choices: [
          { text: '«Hei, Sofie! Hei, Kaffe!»', translation: '«Oi, Sofie! Oi, Kaffe!»', next: 'aksla' },
          {
            text: '«Hei! Er du turist også?»',
            translation: '«Oi! Você também é turista?»',
            wrong: 'A Sofie disse «Jeg bor her»: eu moro aqui. Ela não é turista!',
          },
        ],
      },
      aksla: {
        emoji: '⛰️',
        text: '«Fjellet heter Aksla. Det er 418 trinn til toppen.»',
        translation: '«A montanha se chama Aksla. São 418 degraus até o topo.»',
        choices: [
          { text: '«Jeg går med deg!»', translation: '«Eu vou com você!»', next: 'trappene' },
          { text: '«Jeg tar bussen.»', translation: '«Eu vou de ônibus.»', next: 'bussen' },
        ],
      },
      trappene: {
        emoji: '🪜',
        text: 'Linu og Sofie går og går. Trinnene er mange, og Linu er sliten.',
        translation: 'O Linu e a Sofie sobem e sobem. Os degraus são muitos, e o Linu está cansado.',
        choices: [
          { text: 'Linu teller: «Hundre, to hundre, tre hundre…»', translation: 'O Linu conta: «Cem, duzentos, trezentos…»', next: 'toppen' },
          {
            text: '«Bare ti trinn! Det er lett!»',
            translation: '«Só dez degraus! É fácil!»',
            wrong: 'A Sofie disse que são 418 «trinn» (degraus) até o topo, não dez. E o texto diz que o Linu está «sliten»: cansado!',
          },
        ],
      },
      bussen: {
        emoji: '🚌',
        text: 'Bussen er rask. Linu er på toppen først, og han venter på Sofie.',
        translation: 'O ônibus é rápido. O Linu chega primeiro ao topo, e ele espera a Sofie.',
        choices: [{ text: '«Hei, Sofie! Her er jeg!»', translation: '«Oi, Sofie! Estou aqui!»', next: 'toppen' }],
      },
      toppen: {
        emoji: '🌅',
        text: 'Linu ser byen, havet og mange øyer. Sofie har vafler i sekken.',
        translation: 'O Linu vê a cidade, o mar e muitas ilhas. A Sofie tem waffles na mochila.',
        choices: [
          { text: 'Linu og Sofie spiser vaflene sammen.', translation: 'O Linu e a Sofie comem os waffles juntos.', next: 'final_bom' },
          { text: 'Linu spiser alle vaflene.', translation: 'O Linu come todos os waffles.', next: 'final_vafler' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Vaflene er gode, og utsikten er fin. Linu har en ny venn!',
        translation: 'Os waffles estão gostosos, e a vista é linda. O Linu tem uma nova amiga!',
        ending: { tone: 'bom', title: 'Waffles no topo', message: 'O Linu subiu o Aksla, dividiu os waffles e ganhou uma amiga em Ålesund.' },
      },
      final_vafler: {
        emoji: '😠',
        text: 'Nå har Sofie ingen vafler. Hun er sur, og Kaffe også!',
        translation: 'Agora a Sofie não tem waffles. Ela está brava, e o Kaffe também!',
        ending: { tone: 'neutro', title: 'Waffle roubado', message: 'Os waffles eram da Sofie! Tente de novo e divida.' },
      },
    },
  },
  // ───────────────────────── A2.1 ─────────────────────────
  {
    id: 'nb-h7',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Opp til Preikestolen',
    emoji: '🪨',
    summary: 'Saindo de Stavanger, o Linu faz a trilha até o Preikestolen com a guia Mari.',
    cultural_context:
      'O Preikestolen («o púlpito»), perto de Stavanger, é um paredão de rocha de topo plano a cerca de 604 metros acima do Lysefjord. A trilha tem uns 4 km em cada sentido e é uma das caminhadas mais populares da Noruega.',
    start: 'start',
    glossary: [
      ['i dag / om morgenen', 'hoje / de manhã'],
      ['fra / til', 'de / para'],
      ['Hvor kommer du fra?', 'De onde você vem?'],
      ['en stor, flat klippe', 'um penhasco grande e plano'],
      ['bratt / steinete', 'íngreme / pedregoso'],
      ['kanten', 'a beirada'],
      ['ei matpakke / matpakka', 'um lanche embrulhado / o lanche'],
    ],
    nodes: {
      start: {
        emoji: '🚌',
        text: 'I dag drar Linu fra Stavanger til Preikestolen. Om morgenen tar han bussen fra byen. Ved stien venter Mari, en blid guide.',
        translation: 'Hoje o Linu vai de Stavanger até o Preikestolen. De manhã ele pega o ônibus na cidade. Na trilha, a Mari, uma guia sorridente, está esperando.',
        choices: [
          { text: '«Hei, Mari! Hvor lang er turen?»', translation: '«Oi, Mari! Qual é o comprimento da trilha?»', next: 'stien' },
          { text: '«Hei! Hvor er kafeen?»', translation: '«Oi! Onde fica o café?»', next: 'kafe' },
        ],
      },
      kafe: {
        emoji: '☕',
        text: '«Kafeen ligger der borte, ved parkeringsplassen», sier Mari. «Men vi har ikke mye tid.»',
        translation: '«O café fica ali, perto do estacionamento», diz a Mari. «Mas a gente não tem muito tempo.»',
        choices: [{ text: 'Linu kjøper en rask vaffel og går tilbake til Mari.', translation: 'O Linu compra um waffle rapidinho e volta até a Mari.', next: 'stien' }],
      },
      stien: {
        emoji: '🥾',
        text: '«Turen er fire kilometer hver vei», sier Mari. «Men først et spørsmål: Hvor kommer du fra, Linu?»',
        translation: '«A trilha tem quatro quilômetros em cada sentido», diz a Mari. «Mas primeiro uma pergunta: de onde você vem, Linu?»',
        choices: [
          { text: '«Jeg kommer fra Antarktis. Der er det mye is!»', translation: '«Eu venho da Antártida. Lá tem muito gelo!»', next: 'opp' },
          {
            text: '«Jeg kommer til Preikestolen i dag.»',
            translation: '«Eu venho ao Preikestolen hoje.»',
            wrong: 'A Mari perguntou «Hvor kommer du FRA?»: de onde você vem? A resposta precisa de «fra» (de) e da sua terra, não de «til» (para).',
          },
        ],
      },
      opp: {
        emoji: '🪨',
        text: 'Stien er bratt og steinete. Etter to timer ser de en stor, flat klippe. Det er Preikestolen, 604 meter over Lysefjorden!',
        translation: 'A trilha é íngreme e pedregosa. Depois de duas horas, eles veem um penhasco grande e plano. É o Preikestolen, 604 metros acima do Lysefjord!',
        choices: [
          { text: 'Linu går forsiktig mot kanten.', translation: 'O Linu vai com cuidado em direção à beirada.', next: 'kanten' },
          {
            text: 'Linu vil hoppe i fjorden. Det er bare seks meter ned!',
            translation: 'O Linu quer pular no fiorde. São só seis metros até lá embaixo!',
            wrong: 'Não são seis metros: são 604 («seks hundre og fire») metros acima do fiorde! Pular dali, nem pensar.',
          },
        ],
      },
      kanten: {
        emoji: '🌬️',
        text: 'På toppen er vinden sterk. Mari holder Linu i vingen. Under dem ligger fjorden, blå og smal.',
        translation: 'No topo, o vento é forte. A Mari segura o Linu pela asa. Lá embaixo fica o fiorde, azul e estreito.',
        choices: [
          { text: 'Linu og Mari setter seg langt fra kanten og spiser.', translation: 'O Linu e a Mari se sentam longe da beirada e comem.', next: 'final_bom' },
          { text: 'Linu vil ta et bilde helt ute på kanten.', translation: 'O Linu quer tirar uma foto bem na beiradinha.', next: 'final_vind' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Matpakka smaker godt i sola. Etter en fin dag går de ned igjen, trøtte og glade.',
        translation: 'O lanche fica gostoso ao sol. Depois de um belo dia, eles descem de novo, cansados e felizes.',
        ending: { tone: 'bom', title: 'Lanche no púlpito', message: 'O Linu chegou ao Preikestolen e aproveitou a vista com segurança.' },
      },
      final_vind: {
        emoji: '🧢',
        text: 'Et vindkast kommer, og lua til Linu flyr ned i fjorden. Nå har han kalde ører!',
        translation: 'Vem uma rajada de vento, e o gorro do Linu voa para o fiorde. Agora ele está com as orelhas geladas!',
        ending: { tone: 'neutro', title: 'Gorro no fiorde', message: 'Na beirada do Preikestolen o vento é traiçoeiro. Por sorte, só o gorro caiu! Tente de novo.' },
      },
    },
  },
  {
    id: 'nb-h8',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Elgen i løypa',
    emoji: '🫎',
    summary: 'Em Lillehammer, o Linu esquia pela primeira vez com o Emil e dá de cara com um alce na pista.',
    cultural_context:
      'Lillehammer, na ponta norte do Mjøsa, o maior lago da Noruega, sediou os Jogos Olímpicos de Inverno de 1994. O esqui cross-country é quase um esporte nacional, e não é raro encontrar alces (elg) nas florestas em volta das pistas.',
    start: 'start',
    glossary: [
      ['å gå på ski', 'esquiar'],
      ['korte ski / lange ski', 'esquis curtos / esquis compridos'],
      ['løypa', 'a pista de esqui (na floresta)'],
      ['mellom trærne', 'entre as árvores'],
      ['en elg', 'um alce'],
      ['stille', 'quieto, parado'],
      ['ei hytte / hytta', 'uma cabana / a cabana'],
    ],
    nodes: {
      start: {
        emoji: '⛷️',
        text: 'Lillehammer er en liten by ved Mjøsa. I 1994 var det vinter-OL her. I dag skal Linu gå på ski for første gang.',
        translation: 'Lillehammer é uma cidadezinha à beira do Mjøsa. Em 1994 houve Olimpíadas de Inverno aqui. Hoje o Linu vai esquiar pela primeira vez.',
        choices: [{ text: 'Linu går inn i en sportsbutikk.', translation: 'O Linu entra numa loja de esportes.', next: 'butikk' }],
      },
      butikk: {
        emoji: '🎿',
        text: 'I butikken står Emil. «Hei! Vil du leie ski? Vi har korte ski og lange ski.»',
        translation: 'Na loja está o Emil. «Oi! Quer alugar esquis? Temos esquis curtos e compridos.»',
        choices: [
          { text: '«Jeg tar korte ski. Jeg er liten!»', translation: '«Vou levar os curtos. Eu sou pequeno!»', next: 'loypa' },
          { text: '«Jeg tar lange, røde ski. De er fine!»', translation: '«Vou levar esquis compridos e vermelhos. São bonitos!»', next: 'lange' },
        ],
      },
      lange: {
        emoji: '🤕',
        text: 'Skiene er mye lengre enn Linu. Han tar to steg og faller i snøen.',
        translation: 'Os esquis são muito mais compridos que o Linu. Ele dá dois passos e cai na neve.',
        choices: [{ text: '«Emil, kan jeg få korte ski likevel?»', translation: '«Emil, posso pegar os curtos, afinal?»', next: 'loypa' }],
      },
      loypa: {
        emoji: '🌲',
        text: 'Emil og Linu går inn i skogen. Løypa er smal, og trærne er hvite av snø. Plutselig stopper Emil: «Se! Der, mellom trærne!»',
        translation: 'O Emil e o Linu entram na floresta. A pista é estreita, e as árvores estão brancas de neve. De repente, o Emil para: «Olhe! Ali, entre as árvores!»',
        choices: [
          { text: 'Linu ser mellom trærne.', translation: 'O Linu olha entre as árvores.', next: 'elg' },
          {
            text: 'Linu ser opp på himmelen.',
            translation: 'O Linu olha para o céu.',
            wrong: 'O Emil disse «mellom trærne»: ENTRE as árvores, não no céu. «Mellom» é «entre».',
          },
        ],
      },
      elg: {
        emoji: '🫎',
        text: 'I løypa står en stor, brun elg med lange bein. «Vi må være stille», hvisker Emil.',
        translation: 'Na pista há um alce grande e marrom, de pernas compridas. «Temos que ficar quietos», sussurra o Emil.',
        choices: [
          { text: 'Linu står helt stille.', translation: 'O Linu fica completamente parado.', next: 'stille' },
          { text: 'Linu roper: «Hei, elg!»', translation: 'O Linu grita: «Oi, alce!»', next: 'final_roper' },
        ],
      },
      stille: {
        emoji: '🌲',
        text: 'Etter et minutt går elgen rolig inn i skogen igjen. Nå er løypa fri.',
        translation: 'Depois de um minuto, o alce volta calmamente para a floresta. Agora a pista está livre.',
        choices: [
          { text: 'Linu og Emil går videre til ei hytte.', translation: 'O Linu e o Emil seguem até uma cabana.', next: 'final_bom' },
          {
            text: '«Hvorfor står elgen fortsatt i løypa?»',
            translation: '«Por que o alce ainda está na pista?»',
            wrong: 'O texto diz que o alce «går rolig inn i skogen igjen»: voltou calmamente para a floresta. Por isso «løypa er fri»: a pista está livre!',
          },
        ],
      },
      final_bom: {
        emoji: '☕',
        text: 'I hytta drikker de varm kakao. «Du er en flink skiløper, Linu!» sier Emil.',
        translation: 'Na cabana, eles tomam chocolate quente. «Você é um bom esquiador, Linu!», diz o Emil.',
        ending: { tone: 'bom', title: 'Primeira trilha', message: 'O Linu esquiou pela primeira vez, viu um alce de perto e ganhou um amigo em Lillehammer.' },
      },
      final_roper: {
        emoji: '💥',
        text: 'Elgen blir redd og løper rett mot dem. Emil og Linu hopper ut av løypa og havner i en stor snøfonn!',
        translation: 'O alce se assusta e corre direto na direção deles. O Emil e o Linu pulam para fora da pista e vão parar num monte de neve!',
        ending: { tone: 'neutro', title: 'Susto na floresta', message: 'O Emil pediu silêncio: um alce assustado é perigoso. Ainda bem que a neve era fofa! Tente de novo.' },
      },
    },
  },
  {
    id: 'nb-h9',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Toget til Myrdal',
    emoji: '🚂',
    summary: 'O Linu sobe de Flåm até Myrdal no trem de Flåmsbana e vê a «huldra» dançar na cachoeira.',
    cultural_context:
      'A Flåmsbana liga Flåm, no fundo de um braço do Sognefjord, a Myrdal, a 866 metros de altitude, em cerca de 20 km: é uma das ferrovias mais íngremes do mundo. No verão, o trem para na cachoeira Kjosfossen, onde uma dançarina faz o papel da «huldra», uma criatura bela das lendas norueguesas, com rabo de vaca.',
    start: 'start',
    glossary: [
      ['innerst i fjorden', 'no fundo do fiorde'],
      ['ved vinduet', 'junto à janela'],
      ['Hvor skal du?', 'Aonde você vai?'],
      ['en foss / fossen', 'uma cachoeira / a cachoeira'],
      ['huldra', 'a «huldra», criatura das lendas'],
      ['en kuhale', 'um rabo de vaca'],
      ['over havet', 'acima do nível do mar'],
    ],
    nodes: {
      start: {
        emoji: '🏞️',
        text: 'Flåm ligger innerst i en lang fjord. Her starter Flåmsbana, et gammelt og bratt tog. Linu har billett til Myrdal.',
        translation: 'Flåm fica no fundo de um fiorde comprido. Aqui começa a Flåmsbana, um trem antigo e íngreme. O Linu tem passagem para Myrdal.',
        choices: [{ text: 'Linu setter seg ved vinduet.', translation: 'O Linu se senta junto à janela.', next: 'toget' }],
      },
      toget: {
        emoji: '👴',
        text: 'Ved siden av Linu sitter en gammel mann med en stor, grå hatt. «Hei! Jeg heter Knut. Hvor skal du?»',
        translation: 'Ao lado do Linu está sentado um senhor com um chapéu grande e cinza. «Oi! Eu me chamo Knut. Aonde você vai?»',
        choices: [{ text: '«Jeg skal til Myrdal. Og du?»', translation: '«Vou para Myrdal. E você?»', next: 'mannen' }],
      },
      mannen: {
        emoji: '🚂',
        text: '«Jeg bor i Flåm, og jeg kjenner toget godt», sier Knut. «Snart stopper vi ved en stor foss.»',
        translation: '«Eu moro em Flåm e conheço bem o trem», diz o Knut. «Logo vamos parar numa cachoeira grande.»',
        choices: [
          { text: '«Hva heter fossen?»', translation: '«Como se chama a cachoeira?»', next: 'foss' },
          { text: '«Hvorfor stopper toget der?»', translation: '«Por que o trem para lá?»', next: 'foss' },
        ],
      },
      foss: {
        emoji: '💦',
        text: 'Toget stopper ved Kjosfossen. Vannet er hvitt og kaldt, og det bruser. Plutselig kommer en kvinne i rød kjole ut ved fossen og danser!',
        translation: 'O trem para na Kjosfossen. A água é branca e gelada, e faz um barulhão. De repente, uma mulher de vestido vermelho aparece junto à cachoeira e dança!',
        choices: [{ text: '«Hvem er hun?»', translation: '«Quem é ela?»', next: 'huldra' }],
      },
      huldra: {
        emoji: '💃',
        text: '«Det er huldra!» ler Knut. «I gamle eventyr bor hun i skogen. Hun er vakker, men hun har en kuhale.»',
        translation: '«É a huldra!», ri o Knut. «Nos contos antigos, ela mora na floresta. Ela é linda, mas tem um rabo de vaca.»',
        choices: [
          { text: 'Linu går ut og ser etter halen.', translation: 'O Linu sai e procura o rabo.', next: 'hale' },
          { text: 'Linu tar et bilde fra toget.', translation: 'O Linu tira uma foto do trem.', next: 'myrdal' },
          {
            text: '«Så huldra er en ku?»',
            translation: '«Então a huldra é uma vaca?»',
            wrong: 'O Knut disse que ela é «vakker» (linda) e só TEM um rabo de vaca («en kuhale»). Ela não é uma vaca!',
          },
        ],
      },
      hale: {
        emoji: '📢',
        text: 'Linu står ved fossen og ser og ser. Da tuter toget to ganger.',
        translation: 'O Linu fica junto à cachoeira olhando e olhando. Então o trem apita duas vezes.',
        choices: [
          { text: 'Linu løper tilbake til toget.', translation: 'O Linu corre de volta para o trem.', next: 'myrdal' },
          { text: 'Linu blir ved fossen.', translation: 'O Linu fica na cachoeira.', next: 'final_igjen' },
        ],
      },
      myrdal: {
        emoji: '⛰️',
        text: 'Toget går videre opp gjennom mange tunneler. Etter en time er de i Myrdal, 866 meter over havet.',
        translation: 'O trem continua subindo por muitos túneis. Depois de uma hora, eles estão em Myrdal, a 866 metros acima do nível do mar.',
        choices: [
          { text: '«Takk for turen, Knut!»', translation: '«Obrigado pela viagem, Knut!»', next: 'final_bom' },
          {
            text: '«Er vi fortsatt nede ved fjorden?»',
            translation: '«A gente ainda está lá embaixo, no fiorde?»',
            wrong: 'O trem subiu até Myrdal, a «866 meter over havet» (866 metros acima do mar). O fiorde ficou lá embaixo, em Flåm!',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Knut gir Linu et gammelt postkort med huldra på. «Kom tilbake til Flåm en dag!»',
        translation: 'O Knut dá ao Linu um cartão-postal antigo com a huldra. «Volte a Flåm um dia!»',
        ending: { tone: 'bom', title: 'Lembrança da huldra', message: 'O Linu subiu a Flåmsbana, viu a huldra e ganhou um cartão-postal de um novo amigo.' },
      },
      final_igjen: {
        emoji: '😮',
        text: 'Toget kjører uten Linu. Nå må han vente på neste tog, alene ved den kalde fossen.',
        translation: 'O trem vai embora sem o Linu. Agora ele tem que esperar o próximo trem, sozinho junto à cachoeira gelada.',
        ending: { tone: 'neutro', title: 'Ficou pra trás', message: 'O apito era o aviso de partida! O Linu não achou o rabo da huldra e ainda perdeu o trem. Tente de novo.' },
      },
    },
  },
  // ───────────────────────── A2.2 ─────────────────────────
  {
    id: 'nb-h10',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Fela fra Hardanger',
    emoji: '🎻',
    summary: 'Na primavera de Hardanger, o Linu segue uma música estranha e bonita e conhece a Guri, que fabrica e toca a hardingfele.',
    cultural_context:
      'A hardingfele, o «violino de Hardanger», tem, além das quatro cordas tocadas com o arco, quatro ou cinco cordas por baixo que vibram sozinhas e dão ao som um eco especial. É muito decorada e considerada o instrumento nacional da Noruega. Em maio, os pomares de Hardanger ficam cobertos de flores de macieira.',
    start: 'start',
    glossary: [
      ['reiste / hørte / kom', 'viajou / ouviu / veio'],
      ['har laget', 'fez, fabricou'],
      ['ei fele / fela', 'um violino / o violino'],
      ['fela si / fela hans', 'o violino dela (a própria) / o violino dele (de outra pessoa)'],
      ['strengene', 'as cordas'],
      ['en slått', 'uma melodia tradicional para hardingfele'],
      ['bestefaren min', 'o meu avô'],
    ],
    nodes: {
      start: {
        emoji: '🌸',
        text: 'I mai reiste Linu til Hardanger. Epletrærne blomstret, og fjorden var blank som et speil. I en liten bygd hørte han en rar og vakker musikk.',
        translation: 'Em maio, o Linu viajou para Hardanger. As macieiras estavam floridas, e o fiorde estava liso como um espelho. Num vilarejo pequeno, ele ouviu uma música estranha e bonita.',
        choices: [{ text: 'Linu gikk mot musikken.', translation: 'O Linu foi em direção à música.', next: 'verksted' }],
      },
      verksted: {
        emoji: '🪚',
        text: 'Musikken kom fra et gammelt verksted. Der satt en kvinne med ei fele. «Hei! Jeg heter Guri. Jeg har laget denne fela selv.»',
        translation: 'A música vinha de uma oficina antiga. Ali estava sentada uma mulher com um violino. «Oi! Eu me chamo Guri. Eu mesma fiz este violino.»',
        choices: [
          { text: '«Har du laget den selv? Den er så vakker!»', translation: '«Você mesma fez? Ele é tão bonito!»', next: 'fela' },
          {
            text: '«Har du kjøpt den i en butikk?»',
            translation: '«Você comprou numa loja?»',
            wrong: 'A Guri disse «Jeg har laget denne fela selv»: eu mesma FIZ este violino. «Har laget» é o perfeito de «lage» (fazer).',
          },
        ],
      },
      fela: {
        emoji: '🎻',
        text: 'Guri viste Linu fela si. Den hadde fire strenger oppå og fire strenger under. «Strengene under spiller jeg aldri på. De klinger med av seg selv.»',
        translation: 'A Guri mostrou ao Linu o violino dela. Ele tinha quatro cordas em cima e quatro cordas embaixo. «Nas cordas de baixo eu nunca toco. Elas vibram junto sozinhas.»',
        choices: [
          { text: '«Kan du spille en slått for meg?»', translation: '«Você pode tocar uma melodia para mim?»', next: 'slatt' },
          { text: '«Kan jeg prøve fela di?»', translation: '«Posso experimentar o seu violino?»', next: 'prove' },
        ],
      },
      prove: {
        emoji: '🐱',
        text: 'Linu tok fela og buen. Men han trakk buen altfor hardt, og det låt som en sint katt!',
        translation: 'O Linu pegou o violino e o arco. Mas ele puxou o arco com força demais, e soou como um gato bravo!',
        choices: [{ text: 'Linu lo og ga fela tilbake til Guri.', translation: 'O Linu riu e devolveu o violino para a Guri.', next: 'slatt' }],
      },
      slatt: {
        emoji: '🎶',
        text: 'Guri spilte en gammel slått. Linu lukket øynene. Han hadde aldri hørt noe lignende.',
        translation: 'A Guri tocou uma melodia antiga. O Linu fechou os olhos. Ele nunca tinha ouvido nada parecido.',
        choices: [{ text: 'Linu klappet med vingene.', translation: 'O Linu bateu palmas com as asas.', next: 'bestefar' }],
      },
      bestefar: {
        emoji: '🖼️',
        text: '«Den slåtten lærte jeg av bestefaren min», sa Guri. «Han spilte i bryllup her i bygda i femti år. Fela hans henger fortsatt på veggen.»',
        translation: '«Essa melodia eu aprendi com o meu avô», disse a Guri. «Ele tocou em casamentos aqui no vilarejo por cinquenta anos. O violino dele ainda está pendurado na parede.»',
        choices: [
          { text: '«Kan du lære meg en slått?»', translation: '«Você pode me ensinar uma melodia?»', next: 'final_bom' },
          { text: '«Takk for musikken! Nå må jeg rekke ferja.»', translation: '«Obrigado pela música! Agora preciso pegar a balsa.»', next: 'final_ferje' },
          {
            text: '«Så du spiller på fela til bestefaren din?»',
            translation: '«Então você toca no violino do seu avô?»',
            wrong: '«Fela hans» (o violino DELE, do avô) está pendurado na parede. A Guri toca na própria («fela si»), a que ela mesma fez.',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Hele sommeren øvde Linu hos Guri. I august spilte han sin første slått, litt skeivt, men med stort hjerte.',
        translation: 'O verão inteiro, o Linu praticou na casa da Guri. Em agosto ele tocou a sua primeira melodia, meio torta, mas de coração.',
        ending: { tone: 'bom', title: 'Primeira slått', message: 'O Linu encontrou uma professora e aprendeu a tocar a hardingfele.' },
      },
      final_ferje: {
        emoji: '⛴️',
        text: 'Linu rakk ferja. Men han tenkte på den vakre musikken hele veien hjem.',
        translation: 'O Linu pegou a balsa. Mas ficou pensando naquela música bonita o caminho inteiro para casa.',
        ending: { tone: 'neutro', title: 'Música na cabeça', message: 'O Linu pegou a balsa, mas deixou passar a chance de aprender com a Guri. Quem sabe na próxima primavera?' },
      },
    },
  },
  {
    id: 'nb-h11',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Sykkelheisen i Trondheim',
    emoji: '🚲',
    summary: 'Em Trondheim, o Linu tenta subir de bicicleta uma ladeira íngreme e descobre o elevador de bicicletas com a ajuda do Sindre.',
    cultural_context:
      'Em Trondheim, na ladeira de Brubakken, perto da ponte velha (Gamle bybro), existe desde 1993 um elevador de bicicletas, considerado o primeiro do mundo: o ciclista apoia o pé direito numa plaquinha que o empurra morro acima. A cidade também é conhecida pela catedral de Nidaros (Nidarosdomen).',
    start: 'start',
    glossary: [
      ['lånte / syklet / så', 'pegou emprestado / pedalou / viu'],
      ['en bakke / bakken', 'uma ladeira / a ladeira'],
      ['måtte', 'teve que'],
      ['den høyre foten', 'o pé direito'],
      ['mora mi / huset mitt', 'a minha mãe / a minha casa'],
      ['skillingsboller', 'pãezinhos de canela'],
      ['har ikke spist', 'não comi'],
    ],
    nodes: {
      start: {
        emoji: '🌉',
        text: 'I går lånte Linu en sykkel i Trondheim. Han syklet over Gamle bybro og så de fargerike husene langs elva. Så kom han til en veldig bratt bakke.',
        translation: 'Ontem o Linu pegou uma bicicleta emprestada em Trondheim. Ele pedalou pela ponte velha e viu as casas coloridas ao longo do rio. Então chegou a uma ladeira muito íngreme.',
        choices: [
          { text: 'Linu prøvde å sykle opp.', translation: 'O Linu tentou subir pedalando.', next: 'bakke' },
          { text: 'Linu så en rar skinne langs veien.', translation: 'O Linu viu um trilho estranho ao longo da rua.', next: 'heisen' },
        ],
      },
      bakke: {
        emoji: '😓',
        text: 'Linu tråkket og tråkket, men bakken var for bratt. Han måtte gå av sykkelen.',
        translation: 'O Linu pedalou e pedalou, mas a ladeira era íngreme demais. Ele teve que descer da bicicleta.',
        choices: [{ text: '«Uff! Finnes det ingen annen måte?»', translation: '«Ufa! Não existe outro jeito?»', next: 'heisen' }],
      },
      heisen: {
        emoji: '👦',
        text: 'En gutt stoppet ved siden av ham. «Hei! Jeg heter Sindre. Har du ikke prøvd sykkelheisen? Du setter den høyre foten på plata, og så skyver heisen deg opp.»',
        translation: 'Um garoto parou do lado dele. «Oi! Eu me chamo Sindre. Você não experimentou o elevador de bicicletas? Você põe o pé direito na plaquinha, e aí o elevador te empurra para cima.»',
        choices: [
          { text: 'Linu satte den høyre foten på plata.', translation: 'O Linu pôs o pé direito na plaquinha.', next: 'opp' },
          {
            text: 'Linu satte begge vingene på plata.',
            translation: 'O Linu pôs as duas asas na plaquinha.',
            wrong: 'O Sindre explicou: «den høyre foten», o pé direito, vai na plaquinha. As asas ficam no guidão!',
          },
        ],
      },
      opp: {
        emoji: '⬆️',
        text: 'Det gikk fint! Heisen tok Linu helt opp til toppen av bakken. Sindre kom etter ham og lo.',
        translation: 'Deu certo! O elevador levou o Linu até o alto da ladeira. O Sindre veio atrás dele, rindo.',
        choices: [{ text: '«Det var gøy! Bor du her oppe?»', translation: '«Foi divertido! Você mora aqui em cima?»', next: 'sindre' }],
      },
      sindre: {
        emoji: '🏠',
        text: '«Ja, huset mitt ligger rett der borte. Mora mi har bakt skillingsboller i dag. Vil du ha en?»',
        translation: '«Moro, a minha casa fica logo ali. A minha mãe fez pãezinhos de canela hoje. Quer um?»',
        choices: [
          { text: '«Ja takk! Jeg har ikke spist siden i morges.»', translation: '«Quero, obrigado! Não comi nada desde hoje cedo.»', next: 'boller' },
          {
            text: '«Har du bakt dem selv? Så flink du er!»',
            translation: '«Você mesmo fez? Que talento!»',
            wrong: 'O Sindre disse «Mora mi har bakt»: foi a MÃE dele que fez os pãezinhos. «Mora mi» é «a minha mãe».',
          },
        ],
      },
      boller: {
        emoji: '🥐',
        text: 'Bollene var store og varme. Etterpå spurte Sindre: «Skal vi sykle ned til Nidarosdomen?»',
        translation: 'Os pãezinhos estavam grandes e quentinhos. Depois, o Sindre perguntou: «Vamos descer de bicicleta até a catedral de Nidaros?»',
        choices: [
          { text: '«Ja, men sakte!»', translation: '«Vamos, mas devagar!»', next: 'final_bom' },
          { text: '«Ja! Vi kappkjører!»', translation: '«Vamos! Vamos apostar corrida!»', next: 'final_fort' },
        ],
      },
      final_bom: {
        emoji: '⛪',
        text: 'De syklet rolig ned til den store, gamle domkirka. Linu hadde fått en ny venn i Trondheim.',
        translation: 'Eles desceram tranquilos até a grande catedral antiga. O Linu tinha ganhado um novo amigo em Trondheim.',
        ending: { tone: 'bom', title: 'Subida sem suor', message: 'O Linu descobriu o elevador de bicicletas, provou os pãezinhos da mãe do Sindre e fez um amigo.' },
      },
      final_fort: {
        emoji: '💦',
        text: 'Linu syklet altfor fort og havnet midt i en stor vannpytt. Sindre lo så mye at han nesten falt av sykkelen.',
        translation: 'O Linu pedalou rápido demais e foi parar no meio de uma poça enorme. O Sindre riu tanto que quase caiu da bicicleta.',
        ending: { tone: 'neutro', title: 'Pinguim encharcado', message: 'Ladeira abaixo, devagar se vai ao longe! O Linu chegou molhado, mas rindo. Tente de novo.' },
      },
    },
  },
  {
    id: 'nb-h12',
    level: 'A2.2',
    cefr: 'A2',
    title: 'De syv søstrene',
    emoji: '💧',
    summary: 'Num barco pelo Geirangerfjord, a Astrid conta ao Linu a lenda das cachoeiras das Sete Irmãs e do Pretendente.',
    cultural_context:
      'O Geirangerfjord é Patrimônio Mundial da UNESCO desde 2005. Numa das encostas cai a cachoeira De syv søstrene («As Sete Irmãs»); do outro lado do fiorde fica o Friaren («O Pretendente»), que, segundo a lenda, tentou em vão casar com uma das irmãs.',
    start: 'start',
    glossary: [
      ['i fjor sommer', 'no verão passado'],
      ['tok / sa / fortalte', 'pegou / disse / contou'],
      ['en kikkert', 'um binóculo'],
      ['den mest kjente fossen', 'a cachoeira mais famosa'],
      ['et sagn', 'uma lenda'],
      ['fossen hans', 'a cachoeira dele'],
      ['har bodd', 'morou, mora (desde sempre)'],
      ['vokste opp', 'cresceu'],
    ],
    nodes: {
      start: {
        emoji: '🛳️',
        text: 'I fjor sommer tok Linu båten inn Geirangerfjorden. Fjellsidene var bratte og grønne, og overalt falt det fosser ned i fjorden.',
        translation: 'No verão passado, o Linu pegou o barco para dentro do Geirangerfjord. As encostas eram íngremes e verdes, e por toda parte caíam cachoeiras no fiorde.',
        choices: [{ text: 'Linu gikk opp på dekket.', translation: 'O Linu subiu para o convés.', next: 'dekket' }],
      },
      dekket: {
        emoji: '👵',
        text: 'På dekket stod en eldre dame med kikkert. «Se der!» sa hun. «Det er De syv søstrene, den mest kjente fossen i fjorden.»',
        translation: 'No convés estava uma senhora com um binóculo. «Olhe ali!», disse ela. «São as Sete Irmãs, a cachoeira mais famosa do fiorde.»',
        choices: [
          { text: 'Linu telte fossene.', translation: 'O Linu contou as quedas d’água.', next: 'telle' },
          { text: '«Hvorfor heter den det?»', translation: '«Por que ela tem esse nome?»', next: 'sagn' },
        ],
      },
      telle: {
        emoji: '🔢',
        text: 'Linu telte: én, to, tre… «Jeg ser bare fem!» Damen smilte. «Noen ganger er det lite vann. Da ser man ikke alle sammen.»',
        translation: 'O Linu contou: uma, duas, três… «Só estou vendo cinco!» A senhora sorriu. «Às vezes tem pouca água. Aí não dá para ver todas.»',
        choices: [{ text: '«Men hvorfor heter den De syv søstrene?»', translation: '«Mas por que ela se chama As Sete Irmãs?»', next: 'sagn' }],
      },
      sagn: {
        emoji: '📜',
        text: '«Det finnes et gammelt sagn», fortalte damen. «På den andre siden av fjorden står Friaren, en foss som ville gifte seg med en av søstrene. Men ingen av dem ville ha ham.»',
        translation: '«Existe uma lenda antiga», contou a senhora. «Do outro lado do fiorde fica o Friaren, uma cachoeira que queria casar com uma das irmãs. Mas nenhuma delas o quis.»',
        choices: [
          { text: '«Stakkars Friaren! Hva gjorde han da?»', translation: '«Coitado do Pretendente! E o que ele fez então?»', next: 'friaren' },
          {
            text: '«Så han giftet seg med den yngste søsteren?»',
            translation: '«Então ele casou com a irmã mais nova?»',
            wrong: 'A senhora disse «ingen av dem ville ha ham»: NENHUMA delas o quis. O Pretendente ficou sozinho!',
          },
        ],
      },
      friaren: {
        emoji: '🍾',
        text: '«Han begynte å drikke, sier folk. Derfor ser fossen hans ut som en flaske!» Damen lo. «Jeg heter Astrid, forresten. Jeg har bodd i Geiranger hele livet.»',
        translation: '«Ele começou a beber, dizem. Por isso a cachoeira dele tem forma de garrafa!» A senhora riu. «Eu me chamo Astrid, aliás. Moro em Geiranger a vida inteira.»',
        choices: [
          { text: '«Hele livet? Da vet du alt om fjorden!»', translation: '«A vida inteira? Então você sabe tudo sobre o fiorde!»', next: 'astrid' },
          {
            text: '«Har du nettopp flyttet hit?»',
            translation: '«Você acabou de se mudar para cá?»',
            wrong: 'A Astrid disse «Jeg har bodd i Geiranger hele livet»: ela mora em Geiranger a vida INTEIRA. O perfeito com «hele livet» mostra algo que começou no passado e continua até hoje.',
          },
        ],
      },
      astrid: {
        emoji: '🏡',
        text: '«Nesten alt», sa Astrid. «Vil du se gården der jeg vokste opp? Den ligger høyt oppe i fjellsiden.»',
        translation: '«Quase tudo», disse a Astrid. «Quer ver a fazenda onde eu cresci? Ela fica lá no alto da encosta.»',
        choices: [
          { text: '«Ja, gjerne!»', translation: '«Quero, sim!»', next: 'final_bom' },
          { text: '«Nei takk, jeg er redd for høyder.»', translation: '«Não, obrigado, tenho medo de altura.»', next: 'final_baat' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Dagen etter gikk de den bratte stien opp til den gamle gården. Utsikten over fjorden var den fineste Linu noen gang hadde sett.',
        translation: 'No dia seguinte, eles subiram a trilha íngreme até a velha fazenda. A vista do fiorde era a mais bonita que o Linu já tinha visto.',
        ending: { tone: 'bom', title: 'Fazenda no penhasco', message: 'O Linu ouviu uma lenda, ganhou uma amiga e viu o fiorde lá de cima.' },
      },
      final_baat: {
        emoji: '📷',
        text: 'Linu ble om bord og tok mange bilder av fossene. Men han lurte lenge på hvordan utsikten fra gården var.',
        translation: 'O Linu ficou a bordo e tirou muitas fotos das cachoeiras. Mas ficou muito tempo imaginando como seria a vista da fazenda.',
        ending: { tone: 'neutro', title: 'Fotos do convés', message: 'Boas fotos, mas a vista lá do alto ficou só na imaginação. Tente de novo!' },
      },
    },
  },
  // ───────────────────────── B1.1 ─────────────────────────
  {
    id: 'nb-h13',
    level: 'B1.1',
    cefr: 'B1',
    title: '17. mai i Kristiansand',
    emoji: '🇳🇴',
    summary: 'O Linu passa o Dia da Constituição em Kristiansand com a amiga Nora: desfile das crianças, bandas, sorvete e cachorro-quente.',
    cultural_context:
      'O 17 de maio (syttende mai) comemora a Constituição norueguesa, assinada em 1814. Em todo o país, o ponto alto é o «barnetog», o desfile das crianças das escolas com bandeiras e bandas marciais (korps); muita gente veste o traje típico, a «bunad», e o dia é regado a sorvete e cachorro-quente.',
    start: 'start',
    glossary: [
      ['du må / du bør / du kan', 'você precisa / você deveria / você pode'],
      ['skal / kommer til å', 'vai (futuro)'],
      ['skynde seg', 'apressar-se'],
      ['ta på seg / kle på seg', 'vestir, pôr (roupa)'],
      ['en bunad', 'o traje típico norueguês'],
      ['barnetoget', 'o desfile das crianças'],
      ['ei fane / fana', 'um estandarte / o estandarte'],
      ['føle seg', 'sentir-se'],
    ],
    nodes: {
      start: {
        emoji: '🇳🇴',
        text: 'Det er 17. mai, og hele Kristiansand er pyntet med flagg. Linu er invitert av venninna si, Nora, som bor i sentrum. «Du må komme tidlig», sa hun i går, «for barnetoget starter klokka ti.»',
        translation: 'É 17 de maio, e Kristiansand inteira está enfeitada com bandeiras. O Linu foi convidado pela amiga dele, a Nora, que mora no centro. «Você precisa vir cedo», disse ela ontem, «porque o desfile das crianças começa às dez.»',
        choices: [{ text: 'Linu skynder seg til Nora.', translation: 'O Linu corre para a casa da Nora.', next: 'nora' }],
      },
      nora: {
        emoji: '👗',
        text: 'Nora åpner døra i bunad. «Så fin du er!» sier Linu. «Takk! Men nå må du også kle deg litt pent. Ta på deg denne sløyfa!»',
        translation: 'A Nora abre a porta vestida de bunad. «Como você está bonita!», diz o Linu. «Obrigada! Mas agora você também precisa se arrumar um pouco. Ponha esta gravata-borboleta!»',
        choices: [
          { text: 'Linu tar på seg sløyfa.', translation: 'O Linu põe a gravata-borboleta.', next: 'toget' },
          { text: '«Må jeg det? Jeg er jo allerede svart og hvit, som en dress!»', translation: '«Preciso mesmo? Eu já sou preto e branco, como um terno!»', next: 'dress' },
        ],
      },
      dress: {
        emoji: '🤵',
        text: 'Nora ler. «Det er sant, du ser ut som om du går i smoking hele året. Men i dag skal alle ha på seg noe rødt, hvitt eller blått!»',
        translation: 'A Nora ri. «É verdade, parece que você anda de smoking o ano inteiro. Mas hoje todo mundo vai usar alguma coisa vermelha, branca ou azul!»',
        choices: [{ text: 'Linu tar på seg den røde sløyfa likevel.', translation: 'O Linu põe a gravata-borboleta vermelha mesmo assim.', next: 'toget' }],
      },
      toget: {
        emoji: '🥁',
        text: 'I gatene står tusenvis av mennesker. Barna går i tog med flagg, og korpsene spiller. «Der kommer lillebroren min, Jonas!» roper Nora. «Han skal bære fana til skolen sin.»',
        translation: 'Nas ruas há milhares de pessoas. As crianças desfilam com bandeiras, e as bandas tocam. «Lá vem o meu irmãozinho, o Jonas!», grita a Nora. «Ele vai carregar o estandarte da escola dele.»',
        choices: [
          { text: 'Linu vinker til Jonas og roper «Hurra!».', translation: 'O Linu acena para o Jonas e grita «Hurra!».', next: 'jonas' },
          {
            text: '«Er det Jonas som spiller trompet?»',
            translation: '«É o Jonas que está tocando trompete?»',
            wrong: 'A Nora disse «Han skal bære fana»: ele vai CARREGAR o estandarte da escola, não tocar na banda. «Skal» + infinitivo indica o que vai acontecer.',
          },
        ],
      },
      jonas: {
        emoji: '🌭',
        text: 'Etter toget kommer Jonas bort til dem, svett og stolt. «Nå skal vi spise is og pølser!» sier han. «På 17. mai kan man spise så mye man vil.»',
        translation: 'Depois do desfile, o Jonas vem até eles, suado e orgulhoso. «Agora vamos comer sorvete e cachorro-quente!», diz ele. «No 17 de maio a gente pode comer o quanto quiser.»',
        choices: [
          { text: '«Da vil jeg ha tre is med én gang!»', translation: '«Então eu quero três sorvetes de uma vez!»', next: 'is' },
          { text: '«Jeg tror jeg bør begynne med én pølse.»', translation: '«Acho que eu devia começar com um cachorro-quente.»', next: 'polse' },
        ],
      },
      is: {
        emoji: '🍦',
        text: 'Linu spiser tre is og to pølser på en halvtime. Etter en stund begynner han å føle seg rar i magen. «Jeg må sette meg ned litt», sukker han.',
        translation: 'O Linu come três sorvetes e dois cachorros-quentes em meia hora. Depois de um tempo, ele começa a se sentir esquisito da barriga. «Preciso me sentar um pouco», suspira ele.',
        choices: [{ text: 'Linu setter seg på en benk.', translation: 'O Linu se senta num banco.', next: 'final_mage' }],
      },
      polse: {
        emoji: '🔥',
        text: 'Pølsa smaker godt. Så sier Nora: «I kveld skal vi grille i hagen hjemme hos oss. Du må komme!»',
        translation: 'O cachorro-quente está gostoso. Então a Nora diz: «Hoje à noite vamos fazer churrasco no quintal lá em casa. Você tem que vir!»',
        choices: [
          { text: '«Gjerne! Jeg kommer til å ta med kake.»', translation: '«Com prazer! Vou levar bolo.»', next: 'final_bom' },
          {
            text: '«Så grillfesten er i morgen?»',
            translation: '«Então o churrasco é amanhã?»',
            wrong: 'A Nora disse «I kveld skal vi grille»: HOJE À NOITE («i kveld»), não amanhã («i morgen»).',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Om kvelden sitter de i hagen og spiser. Linu synger «Ja, vi elsker» sammen med de andre. Han føler seg nesten som en ekte nordmann.',
        translation: 'À noite, eles estão sentados no quintal comendo. O Linu canta «Ja, vi elsker» (o hino nacional) junto com os outros. Ele se sente quase um norueguês de verdade.',
        ending: { tone: 'bom', title: 'Hurra for 17. mai!', message: 'O Linu viveu o Dia da Constituição de ponta a ponta: desfile, sorvete com moderação e festa com os amigos.' },
      },
      final_mage: {
        emoji: '🤢',
        text: 'Linu tilbringer resten av dagen på benken med vondt i magen. «Neste år skal jeg spise mindre is», lover han seg selv.',
        translation: 'O Linu passa o resto do dia no banco, com dor de barriga. «No ano que vem vou comer menos sorvete», promete ele a si mesmo.',
        ending: { tone: 'neutro', title: 'Barriga de festa', message: '«Poder comer o quanto quiser» não quer dizer «dever»! Tente de novo com um pouco mais de calma.' },
      },
    },
  },
  {
    id: 'nb-h14',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Strømmen ved Bodø',
    emoji: '🌊',
    summary: 'Perto de Bodø, a prima do Linu, uma cientista do mar, mostra a ele a correnteza de maré de Saltstraumen.',
    cultural_context:
      'Saltstraumen, a cerca de 30 km de Bodø, é uma das correntezas de maré mais fortes do mundo: a cada seis horas, mais ou menos, a maré força uma enorme massa de água do mar por um estreito, formando redemoinhos, e a direção se inverte quatro vezes por dia. A região é conhecida pelas águias-rabalvas (havørn).',
    start: 'start',
    glossary: [
      ['forske på', 'pesquisar (cientificamente)'],
      ['tidevannsstrøm', 'correnteza de maré'],
      ['et sund', 'um estreito'],
      ['virvler / malstrømmer', 'redemoinhos'],
      ['en redningsvest', 'um colete salva-vidas'],
      ['holde seg fast', 'segurar-se'],
      ['glede seg', 'estar ansioso (de alegria)'],
      ['en havørn', 'uma águia-rabalva'],
    ],
    nodes: {
      start: {
        emoji: '🔬',
        text: 'Linu er i Bodø for å besøke kusina si, Hanne, som forsker på havet. «I morgen skal vi til Saltstraumen», sier hun. «Der kommer du til å se en av de sterkeste tidevannsstrømmene i verden.»',
        translation: 'O Linu está em Bodø para visitar a prima dele, a Hanne, que pesquisa o mar. «Amanhã vamos a Saltstraumen», diz ela. «Lá você vai ver uma das correntezas de maré mais fortes do mundo.»',
        choices: [{ text: '«Jeg gleder meg!»', translation: '«Mal posso esperar!»', next: 'brua' }],
      },
      brua: {
        emoji: '🌉',
        text: 'Neste dag står de på brua over sundet. Under dem virvler vannet i store malstrømmer. «Hvorfor går vannet så fort?» spør Linu.',
        translation: 'No dia seguinte, eles estão na ponte sobre o estreito. Lá embaixo, a água gira em grandes redemoinhos. «Por que a água corre tão rápido?», pergunta o Linu.',
        choices: [{ text: '«Kan du forklare det, Hanne?»', translation: '«Você pode explicar, Hanne?»', next: 'forklar' }],
      },
      forklar: {
        emoji: '🌀',
        text: 'Hanne forklarer: «Omtrent hver sjette time snur tidevannet. Da må enorme mengder sjøvann presse seg gjennom dette smale sundet. Strømmen kan bli nesten 40 kilometer i timen.»',
        translation: 'A Hanne explica: «Mais ou menos a cada seis horas, a maré vira. Aí uma quantidade enorme de água do mar precisa se espremer por este estreito. A correnteza pode chegar a quase 40 quilômetros por hora.»',
        choices: [
          { text: '«Så strømmen skifter retning fire ganger i døgnet?»', translation: '«Então a correnteza muda de direção quatro vezes por dia?»', next: 'riktig' },
          {
            text: '«Så strømmen er like sterk hele tiden?»',
            translation: '«Então a correnteza é igualmente forte o tempo todo?»',
            wrong: 'A Hanne disse que a maré vira («snur») a cada seis horas, mais ou menos. A correnteza muda de direção e de força: não é igual o tempo todo.',
          },
        ],
      },
      riktig: {
        emoji: '⛵',
        text: '«Akkurat!» sier Hanne. «Nå må jeg skynde meg, for om en halvtime skal jeg måle strømmen fra båten. Vil du bli med?»',
        translation: '«Isso mesmo!», diz a Hanne. «Agora preciso me apressar, porque daqui a meia hora vou medir a correnteza do barco. Quer vir junto?»',
        choices: [
          { text: '«Ja! Men må jeg ha redningsvest?»', translation: '«Quero! Mas preciso de colete salva-vidas?»', next: 'vest' },
          { text: '«Nei takk, jeg blir heller her og ser på fuglene.»', translation: '«Não, obrigado, prefiro ficar aqui olhando os pássaros.»', next: 'orn' },
        ],
      },
      vest: {
        emoji: '🦺',
        text: '«Selvfølgelig! Ta på deg denne, og hold deg fast i rekka», sier Hanne. «Og du må ikke lene deg over kanten.»',
        translation: '«Claro! Vista este aqui e segure-se na amurada», diz a Hanne. «E você não pode se debruçar para fora do barco.»',
        choices: [
          { text: 'Linu tar på seg vesten og setter seg midt i båten.', translation: 'O Linu veste o colete e se senta no meio do barco.', next: 'baaten' },
          {
            text: 'Linu lener seg over kanten for å se bedre.',
            translation: 'O Linu se debruça para fora do barco para ver melhor.',
            wrong: 'A Hanne avisou: «du må ikke lene deg over kanten», você NÃO pode se debruçar para fora. «Må ikke» é proibição, não «não precisa».',
          },
        ],
      },
      baaten: {
        emoji: '📏',
        text: 'Båten gynger, og Hanne senker et måleinstrument ned i vannet. Plutselig ser Linu en stor, brun fugl rett over dem. «En havørn!» roper han.',
        translation: 'O barco balança, e a Hanne baixa um instrumento de medição na água. De repente, o Linu vê um pássaro grande e marrom bem em cima deles. «Uma águia-rabalva!», grita ele.',
        choices: [
          { text: '«Kan jeg skrive ned tallene for deg?»', translation: '«Posso anotar os números para você?»', next: 'final_bom' },
          { text: '«Jeg vil svømme med fiskene i strømmen!»', translation: '«Quero nadar com os peixes na correnteza!»', next: 'final_strom' },
        ],
      },
      orn: {
        emoji: '🦅',
        text: 'Fra brua ser Linu tre havørner som sirkler over strømmen. Plutselig stuper en av dem ned og tar en fisk. «Jeg skal ta det beste bildet i verden», tenker han.',
        translation: 'Da ponte, o Linu vê três águias-rabalvas voando em círculos sobre a correnteza. De repente, uma delas mergulha e pega um peixe. «Vou tirar a melhor foto do mundo», pensa ele.',
        choices: [{ text: 'Linu tar bilder til Hanne kommer tilbake.', translation: 'O Linu tira fotos até a Hanne voltar.', next: 'final_orn' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu noterer alle tallene nøye. Om kvelden sier Hanne: «Du kommer til å bli en god forsker, Linu!»',
        translation: 'O Linu anota todos os números com cuidado. À noite, a Hanne diz: «Você vai ser um bom cientista, Linu!»',
        ending: { tone: 'bom', title: 'Assistente de pesquisa', message: 'O Linu ajudou a medir uma das correntezas mais fortes do mundo e descobriu o gosto pela ciência.' },
      },
      final_strom: {
        emoji: '🙅',
        text: 'Hanne stopper ham i siste liten. «Ikke tenk på det! Ikke engang en pingvin kan svømme mot denne strømmen.» Resten av turen må Linu sitte helt stille.',
        translation: 'A Hanne o segura no último instante. «Nem pense nisso! Nem um pinguim consegue nadar contra essa correnteza.» O resto do passeio, o Linu tem que ficar sentadinho.',
        ending: { tone: 'neutro', title: 'Castigo no barco', message: 'Saltstraumen não é piscina! O Linu ficou de castigo e não ajudou nas medições. Tente de novo.' },
      },
      final_orn: {
        emoji: '📸',
        text: 'Om kvelden viser Linu bildene til Hanne. «De er fantastiske! Du bør sende dem til avisa», sier hun.',
        translation: 'À noite, o Linu mostra as fotos para a Hanne. «Estão fantásticas! Você devia mandar para o jornal», diz ela.',
        ending: { tone: 'bom', title: 'Fotógrafo de águias', message: 'O Linu não entrou no barco, mas voltou com fotos incríveis das águias de Saltstraumen.' },
      },
    },
  },
  {
    id: 'nb-h15',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Hvalsafari i Vesterålen',
    emoji: '🐋',
    summary: 'Em Andenes, no norte de Vesterålen, o Linu sai num safári de baleias com o guia Eirik e ainda visita uma ilha de papagaios-do-mar.',
    cultural_context:
      'Em Andenes, em Vesterålen, o fundo do mar despenca num cânion submarino (Bleiksdjupet) bem perto da costa, e os cachalotes vêm caçar lulas ali: por isso os safáris de baleia são famosos. Na ilhota de Bleiksøya, ali perto, milhares de papagaios-do-mar (lunder) fazem ninho no verão.',
    start: 'start',
    glossary: [
      ['kle seg godt', 'agasalhar-se bem'],
      ['kommer til å bli', 'vai ficar'],
      ['du bør', 'você deveria'],
      ['en spermhval', 'um cachalote'],
      ['blekksprut', 'lula, polvo'],
      ['sprutet', 'o jato (de água que a baleia solta)'],
      ['Gjør deg klar!', 'Prepare-se!'],
      ['en lunde / lunder', 'um papagaio-do-mar / papagaios-do-mar'],
    ],
    nodes: {
      start: {
        emoji: '⚓',
        text: 'Linu er i Andenes, helt nord i Vesterålen. I dag skal han på hvalsafari for første gang. «Kle deg godt», sier guiden Eirik, «for ute på havet kommer det til å bli kaldt.»',
        translation: 'O Linu está em Andenes, bem no norte de Vesterålen. Hoje ele vai fazer um safári de baleias pela primeira vez. «Agasalhe-se bem», diz o guia Eirik, «porque lá no mar vai fazer frio.»',
        choices: [
          { text: 'Linu tar på seg lue og tre gensere.', translation: 'O Linu põe um gorro e três suéteres.', next: 'baten' },
          { text: '«Jeg er en pingvin. Jeg fryser aldri!»', translation: '«Eu sou um pinguim. Eu nunca sinto frio!»', next: 'frys' },
        ],
      },
      frys: {
        emoji: '🧥',
        text: '«Det tror jeg gjerne», ler Eirik. «Men du bør i hvert fall ta med deg en regnjakke. Bølgene kan bli store der ute.»',
        translation: '«Nisso eu acredito», ri o Eirik. «Mas você devia pelo menos levar uma capa de chuva. As ondas podem ficar grandes lá fora.»',
        choices: [{ text: 'Linu tar med seg regnjakka.', translation: 'O Linu leva a capa de chuva.', next: 'baten' }],
      },
      baten: {
        emoji: '🚢',
        text: 'Båten kjører ut mot Bleiksdjupet, en dyp kløft i havbunnen ikke langt fra land. «Her dykker spermhvalene over tusen meter ned for å finne blekksprut», forklarer Eirik. «Når de kommer opp igjen, må de ligge i overflaten og puste en stund.»',
        translation: 'O barco segue para o Bleiksdjupet, um cânion fundo no leito do mar, não muito longe da terra. «Aqui os cachalotes mergulham mais de mil metros para achar lulas», explica o Eirik. «Quando voltam à tona, eles precisam ficar na superfície respirando um tempo.»',
        choices: [{ text: '«Hvordan skal vi finne dem?»', translation: '«Como a gente vai achá-los?»', next: 'lytte' }],
      },
      lytte: {
        emoji: '🎧',
        text: 'Eirik senker en mikrofon ned i vannet. «Hør! Hvalen lager klikkelyder for å finne maten sin.» Etter en stund roper han: «Der borte! Se etter sprutet!»',
        translation: 'O Eirik baixa um microfone na água. «Escute! A baleia faz estalos para achar a comida dela.» Depois de um tempo, ele grita: «Lá longe! Procure o jato!»',
        choices: [
          { text: 'Linu ser mot horisonten.', translation: 'O Linu olha para o horizonte.', next: 'hval' },
          {
            text: '«Synger hvalen for å finne en kjæreste?»',
            translation: '«A baleia canta para achar uma namorada?»',
            wrong: 'O Eirik disse que a baleia faz estalos «for å finne maten sin»: para achar a comida DELA. É assim que o cachalote caça no escuro.',
          },
        ],
      },
      hval: {
        emoji: '🐋',
        text: 'En stor, grå rygg ligger stille i vannet, og sprutet står skrått opp i lufta. «Om noen minutter kommer den til å dykke igjen», sier Eirik. «Gjør deg klar med kameraet!»',
        translation: 'Um dorso grande e cinzento está parado na água, e o jato sobe inclinado no ar. «Daqui a alguns minutos ela vai mergulhar de novo», diz o Eirik. «Prepare-se com a câmera!»',
        choices: [
          { text: 'Linu gjør seg klar med kameraet.', translation: 'O Linu se prepara com a câmera.', next: 'halen' },
          { text: 'Linu lener seg ut for å klappe hvalen.', translation: 'O Linu se debruça para fazer carinho na baleia.', next: 'final_bolge' },
          {
            text: '«Da har vi god tid. Den kommer til å bli her hele dagen.»',
            translation: '«Então temos bastante tempo. Ela vai ficar aqui o dia inteiro.»',
            wrong: 'O Eirik disse «Om noen minutter kommer den til å dykke igjen»: daqui a POUCOS MINUTOS ela vai mergulhar de novo. Não dá para perder tempo!',
          },
        ],
      },
      halen: {
        emoji: '📸',
        text: 'Hvalen løfter halen høyt over vannet og forsvinner ned i dypet. Klikk! Linu har tatt det perfekte bildet. På vei tilbake peker Eirik mot en liten øy.',
        translation: 'A baleia levanta a cauda bem alto acima da água e desaparece no fundo. Clique! O Linu tirou a foto perfeita. Na volta, o Eirik aponta para uma ilhota.',
        choices: [{ text: '«Hva er det for en øy?»', translation: '«Que ilha é aquela?»', next: 'oya' }],
      },
      oya: {
        emoji: '🏝️',
        text: '«Det er Bleiksøya», sier Eirik. «Der hekker tusenvis av lunder om sommeren. Skal vi kjøre litt nærmere?»',
        translation: '«É a Bleiksøya», diz o Eirik. «Lá milhares de papagaios-do-mar fazem ninho no verão. Vamos chegar um pouco mais perto?»',
        choices: [
          { text: '«Ja! Jeg vil gjerne hilse på fuglene.»', translation: '«Vamos! Eu quero muito cumprimentar os pássaros.»', next: 'final_bom' },
          { text: '«Nei takk, jeg føler meg litt sjøsyk.»', translation: '«Não, obrigado, estou me sentindo meio enjoado.»', next: 'final_syk' },
        ],
      },
      final_bom: {
        emoji: '🐦',
        text: 'Lundene flyr rundt båten med småfisk i de fargerike nebbene sine. Linu kommer til å huske denne dagen resten av livet.',
        translation: 'Os papagaios-do-mar voam em volta do barco com peixinhos nos bicos coloridos. O Linu vai se lembrar deste dia pelo resto da vida.',
        ending: { tone: 'bom', title: 'Baleia e papagaios', message: 'O Linu fotografou um cachalote e ainda viu os papagaios-do-mar de Bleiksøya. Dia perfeito!' },
      },
      final_syk: {
        emoji: '🤢',
        text: 'Linu legger seg ned inne i båten resten av turen. Han har et flott bilde av hvalen, men bølgene kommer han heller aldri til å glemme.',
        translation: 'O Linu se deita lá dentro do barco pelo resto do passeio. Ele tem uma foto linda da baleia, mas as ondas ele também nunca vai esquecer.',
        ending: { tone: 'neutro', title: 'Enjoo no mar', message: 'A baleia valeu a viagem, mas os papagaios-do-mar ficaram para a próxima. Tente de novo!' },
      },
      final_bolge: {
        emoji: '🌊',
        text: 'Akkurat da treffer en bølge båten, og Linu blir søkkvåt. Hvalen dykker, og Linu får ikke tatt et eneste bilde.',
        translation: 'Bem nessa hora uma onda atinge o barco, e o Linu fica encharcado. A baleia mergulha, e o Linu não consegue tirar nenhuma foto.',
        ending: { tone: 'neutro', title: 'Banho de mar', message: 'Baleia não é bicho de estimação! O Eirik pediu para preparar a câmera. Tente de novo.' },
      },
    },
  },
  // ───────────────────────── B1.2 ─────────────────────────
  {
    id: 'nb-h16',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Mørketid i Longyearbyen',
    emoji: '🌌',
    summary: 'Na noite polar de Svalbard, o Linu acompanha a pesquisadora Ingrid numa saída noturna para medir a aurora boreal.',
    cultural_context:
      'Longyearbyen, no arquipélago de Svalbard, fica tão ao norte que o sol não aparece acima do horizonte de fim de outubro a meados de fevereiro: é a mørketid, a noite polar. Quem sai da área do povoado precisa levar meios de espantar ursos-polares, e a recomendação é ir também com uma arma.',
    start: 'start',
    glossary: [
      ['mørketida', 'a época escura, a noite polar'],
      ['nordlyset', 'a aurora boreal'],
      ['isbjørn', 'urso-polar'],
      ['geværet', 'a espingarda, o rifle'],
      ['bosetningen', 'o povoado, a área habitada'],
      ['selv om', 'embora, mesmo que'],
      ['hadde glemt', 'tinha esquecido (mais-que-perfeito)'],
    ],
    nodes: {
      start: {
        emoji: '🌑',
        text: 'Det var desember, og sola hadde ikke vist seg over Longyearbyen på mange uker. Linu jobbet som assistent for Ingrid, en forsker som målte nordlyset. Hun sa at de skulle kjøre ut av byen i kveld, fordi himmelen endelig var klar.',
        translation: 'Era dezembro, e o sol não aparecia sobre Longyearbyen havia muitas semanas. O Linu trabalhava como assistente da Ingrid, uma pesquisadora que media a aurora boreal. Ela disse que eles iam sair da cidade de carro naquela noite, porque o céu finalmente estava limpo.',
        choices: [
          { text: 'Linu tok på seg de varmeste klærne han hadde.', translation: 'O Linu vestiu as roupas mais quentes que tinha.', next: 'klaer' },
          { text: 'Linu spurte om han kunne gå ut alene først.', translation: 'O Linu perguntou se podia sair sozinho antes.', next: 'alene' },
          {
            text: 'Linu gikk ut for å se sola gå ned over fjellene.',
            translation: 'O Linu saiu para ver o sol se pôr atrás das montanhas.',
            wrong: 'O texto diz que «sola hadde ikke vist seg» havia muitas semanas — o sol NÃO TINHA APARECIDO. É a noite polar: em dezembro, em Svalbard, não há pôr do sol para ver.',
          },
        ],
      },
      alene: {
        emoji: '🐻‍❄️',
        text: 'Ingrid ristet på hodet og sa at ingen går ut av bosetningen uten gevær. «Selv om du ikke ser noen isbjørn, kan den se deg», sa hun. Linu forsto at hun ikke spøkte.',
        translation: 'A Ingrid balançou a cabeça e disse que ninguém sai do povoado sem espingarda. «Mesmo que você não veja nenhum urso-polar, ele pode ver você», disse ela. O Linu entendeu que ela não estava brincando.',
        choices: [
          { text: 'Linu ble med Ingrid i bilen.', translation: 'O Linu foi com a Ingrid no carro.', next: 'klaer' },
          {
            text: 'Linu gikk ut av byen alene, fordi Ingrid hadde sagt at det var trygt.',
            translation: 'O Linu saiu da cidade sozinho, porque a Ingrid tinha dito que era seguro.',
            wrong: 'A Ingrid disse o contrário: ninguém sai do povoado sem espingarda. E avisou: «Selv om du ikke ser noen isbjørn» — MESMO QUE você não veja nenhum urso, ele pode ver você.',
          },
        ],
      },
      klaer: {
        emoji: '🧤',
        text: 'Ingrid ga ham en tykk dress, votter og ei lue som dekket ørene. Hun la geværet i bilen, selv om hun håpet at de ikke ville trenge det. Så kjørte de ut i mørket, der bare frontlyktene lyste.',
        translation: 'A Ingrid deu a ele um macacão grosso, luvas e um gorro que cobria as orelhas. Ela pôs a espingarda no carro, embora esperasse que não fossem precisar dela. Então eles partiram para o escuro, onde só os faróis iluminavam.',
        choices: [{ text: 'Linu så ut av vinduet mens de kjørte.', translation: 'O Linu olhou pela janela enquanto andavam.', next: 'ute' }],
      },
      ute: {
        emoji: '📷',
        text: 'Etter en halvtime stoppet Ingrid bilen ved ei lita hytte. Hun satte opp et kamera og forklarte at hun ville måle hvor sterkt nordlyset var. Men da hun skulle slå på maskinen, oppdaget hun at hun hadde glemt batteriet i byen.',
        translation: 'Depois de meia hora, a Ingrid parou o carro perto de uma cabana pequena. Ela montou uma câmera e explicou que queria medir a intensidade da aurora. Mas, quando foi ligar o aparelho, descobriu que tinha esquecido a bateria na cidade.',
        choices: [
          { text: 'Linu foreslo at de kjørte tilbake og hentet det.', translation: 'O Linu sugeriu que voltassem para buscá-la.', next: 'tilbake' },
          { text: 'Linu husket at han hadde lagt et ekstra batteri i sekken.', translation: 'O Linu lembrou que tinha posto uma bateria extra na mochila.', next: 'sekken' },
        ],
      },
      sekken: {
        emoji: '🔋',
        text: 'Linu rotet i sekken og fant batteriet som han hadde tatt med om morgenen. Ingrid lo og sa at hun aldri hadde hatt en så god assistent. Akkurat da begynte himmelen å bli grønn.',
        translation: 'O Linu remexeu a mochila e achou a bateria que tinha levado de manhã. A Ingrid riu e disse que nunca tinha tido um assistente tão bom. Bem nessa hora, o céu começou a ficar verde.',
        choices: [{ text: 'Linu så opp mot himmelen.', translation: 'O Linu olhou para o céu.', next: 'nordlys' }],
      },
      nordlys: {
        emoji: '🌌',
        text: 'Grønne bånd danset over fjellene, og etter hvert kom det også litt lilla. Ingrid sa at nordlyset oppstår når partikler fra sola treffer atmosfæren. Linu sto helt stille, fordi han aldri hadde sett noe så vakkert.',
        translation: 'Faixas verdes dançavam sobre as montanhas, e aos poucos veio também um pouco de lilás. A Ingrid disse que a aurora surge quando partículas do sol atingem a atmosfera. O Linu ficou completamente parado, porque nunca tinha visto nada tão bonito.',
        choices: [
          { text: 'Linu hjalp Ingrid med å notere tallene.', translation: 'O Linu ajudou a Ingrid a anotar os números.', next: 'final_bom' },
          { text: 'Linu gikk litt bort fra bilen for å ta et bilde.', translation: 'O Linu se afastou um pouco do carro para tirar uma foto.', next: 'bort' },
        ],
      },
      bort: {
        emoji: '🔦',
        text: 'Linu hadde bare gått noen meter da Ingrid ropte navnet hans. Hun sa at han ikke skulle gå ut av lyset, fordi hun ikke kunne se ham der. Linu snudde med en gang og gikk tilbake til bilen.',
        translation: 'O Linu tinha andado só alguns metros quando a Ingrid gritou o nome dele. Ela disse que ele não devia sair da área iluminada, porque ela não conseguia vê-lo lá. O Linu deu meia-volta na hora e voltou para o carro.',
        choices: [{ text: 'Linu hjalp Ingrid med målingene.', translation: 'O Linu ajudou a Ingrid com as medições.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🌠',
        text: 'Da de kom tilbake til byen, var klokka tre om natta. Ingrid sa at målingene var de beste hun hadde fått hele vinteren. Linu sovnet i bilen, selv om han hadde lovet å holde seg våken.',
        translation: 'Quando voltaram para a cidade, eram três da madrugada. A Ingrid disse que as medições eram as melhores que ela tinha conseguido o inverno todo. O Linu dormiu no carro, embora tivesse prometido ficar acordado.',
        ending: { tone: 'bom', title: 'Luzes na noite polar', message: 'Graças à bateria extra, o Linu salvou a noite de medições e viu sua primeira aurora boreal.' },
      },
      tilbake: {
        emoji: '☁️',
        text: 'De kjørte hele veien tilbake til Longyearbyen for å hente batteriet. Da de kom ut igjen, var himmelen full av skyer. Ingrid sukket og sa at de måtte prøve igjen i morgen, hvis været ble bedre.',
        translation: 'Eles fizeram todo o caminho de volta a Longyearbyen para buscar a bateria. Quando saíram de novo, o céu estava cheio de nuvens. A Ingrid suspirou e disse que teriam de tentar de novo no dia seguinte, se o tempo melhorasse.',
        ending: { tone: 'neutro', title: 'Céu fechado', message: 'Enquanto buscavam a bateria, as nuvens chegaram. A aurora fica para outra noite — e a noite polar é longa!' },
      },
    },
  },
  {
    id: 'nb-h17',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Kongekrabbe i Kirkenes',
    emoji: '🦀',
    summary: 'No fiorde congelado de Kirkenes, o Linu ajuda o Arne num passeio para pescar caranguejos-reais por um buraco no gelo.',
    cultural_context:
      'O caranguejo-real-vermelho (kongekrabbe) foi levado por cientistas soviéticos para o mar de Barents nos anos 1960 e se espalhou pela costa norueguesa. Hoje é uma pesca importante em Finnmark, e em Kirkenes há passeios de inverno em que se pesca o caranguejo por buracos no gelo do fiorde.',
    start: 'start',
    glossary: [
      ['kongekrabbe', 'caranguejo-real'],
      ['teina', 'o covo, a armadilha de pesca'],
      ['snøscooter', 'moto de neve'],
      ['hadde frosset til', 'tinha congelado'],
      ['klørne', 'as garras'],
      ['når', 'quando (repetido ou futuro)'],
      ['ei gryte', 'uma panela grande'],
    ],
    nodes: {
      start: {
        emoji: '❄️',
        text: 'I mars hadde fjorden utenfor Kirkenes frosset til. Linu hadde fått jobb hos Arne, som tok turister med på krabbesafari. Arne forklarte at de skulle kjøre snøscooter ut på isen når gjestene hadde spist frokost.',
        translation: 'Em março, o fiorde perto de Kirkenes tinha congelado. O Linu tinha arrumado trabalho com o Arne, que levava turistas para pescar caranguejo. O Arne explicou que eles iam de moto de neve para o gelo quando os hóspedes tivessem tomado o café da manhã.',
        choices: [
          { text: 'Linu hjalp gjestene med å ta på seg dressene etter frokost.', translation: 'O Linu ajudou os hóspedes a vestir os macacões depois do café.', next: 'dress' },
          { text: 'Linu spurte om isen var trygg.', translation: 'O Linu perguntou se o gelo era seguro.', next: 'trygg' },
          {
            text: 'Linu kjørte ut på isen alene før gjestene sto opp.',
            translation: 'O Linu foi sozinho para o gelo antes de os hóspedes acordarem.',
            wrong: 'O Arne disse que eles iam «når gjestene hadde spist frokost» — QUANDO os hóspedes TIVESSEM tomado o café. O mais-que-perfeito mostra o que precisa acontecer antes: primeiro o café, depois o gelo.',
          },
        ],
      },
      trygg: {
        emoji: '📏',
        text: 'Arne sa at isen var over en halv meter tykk, fordi det hadde vært kaldt hele vinteren. Han hadde målt den selv dagen før. «Jeg kjører aldri ut når jeg ikke er helt sikker», sa han.',
        translation: 'O Arne disse que o gelo tinha mais de meio metro de espessura, porque tinha feito frio o inverno inteiro. Ele mesmo o tinha medido no dia anterior. «Eu nunca saio quando não tenho certeza absoluta», disse ele.',
        choices: [{ text: 'Linu gikk for å hjelpe gjestene.', translation: 'O Linu foi ajudar os hóspedes.', next: 'dress' }],
      },
      dress: {
        emoji: '🛷',
        text: 'Gjestene kom fra Japan, Spania og Brasil, og ingen av dem hadde sittet på en snøscooter før. Linu viste dem hvordan de skulle holde seg fast. En dame fra Recife sa at hun aldri hadde frosset så mye i hele sitt liv.',
        translation: 'Os hóspedes vinham do Japão, da Espanha e do Brasil, e nenhum deles já tinha andado de moto de neve. O Linu mostrou como eles deviam se segurar. Uma senhora de Recife disse que nunca tinha passado tanto frio na vida.',
        choices: [{ text: 'De kjørte ut på fjorden.', translation: 'Eles partiram para o fiorde.', next: 'hullet' }],
      },
      hullet: {
        emoji: '🕳️',
        text: 'Midt på fjorden stoppet Arne ved et hull i isen, der et tau gikk ned i det mørke vannet. Han sa at teina hadde ligget på bunnen i to døgn. Nå skulle de dra den opp, selv om den var veldig tung.',
        translation: 'No meio do fiorde, o Arne parou perto de um buraco no gelo, de onde uma corda descia para a água escura. Ele disse que o covo estava no fundo havia dois dias. Agora eles iam puxá-lo para cima, embora fosse muito pesado.',
        choices: [
          { text: 'Linu og gjestene dro i tauet sammen.', translation: 'O Linu e os hóspedes puxaram a corda juntos.', next: 'krabbe' },
          {
            text: 'Linu sa at teina sikkert var tom, fordi Arne hadde lagt den der samme morgen.',
            translation: 'O Linu disse que o covo com certeza estava vazio, porque o Arne o tinha posto lá naquela mesma manhã.',
            wrong: 'O Arne disse que o covo «hadde ligget på bunnen i to døgn» — TINHA FICADO no fundo por dois dias (døgn = 24 horas), e não desde aquela manhã.',
          },
        ],
      },
      krabbe: {
        emoji: '🦀',
        text: 'Da teina kom opp, var den full av store, røde krabber. Arne tok en av dem og viste at den var over en meter mellom klørne. Han fortalte at krabben ikke hørte hjemme her fra begynnelsen, men at den hadde vandret hit fra øst.',
        translation: 'Quando o covo subiu, estava cheio de caranguejos grandes e vermelhos. O Arne pegou um deles e mostrou que media mais de um metro de uma garra à outra. Ele contou que o caranguejo não era daqui originalmente, mas que tinha vindo do leste.',
        choices: [
          { text: 'Linu spurte hvordan krabbene hadde kommet hit.', translation: 'O Linu perguntou como os caranguejos tinham chegado ali.', next: 'historie' },
          { text: 'Linu ville holde krabben selv.', translation: 'O Linu quis segurar o caranguejo ele mesmo.', next: 'holde' },
        ],
      },
      holde: {
        emoji: '😬',
        text: 'Arne ga ham krabben og sa at han måtte holde den bak klørne. Linu var så nervøs at han nesten mistet den på isen. Krabben rakk å knipe ham i den ene vingen, selv om Arne hadde advart ham.',
        translation: 'O Arne entregou o caranguejo a ele e disse que ele tinha de segurá-lo atrás das garras. O Linu estava tão nervoso que quase o deixou cair no gelo. O caranguejo ainda conseguiu beliscar uma das asas dele, embora o Arne o tivesse avisado.',
        choices: [{ text: 'Linu ga krabben tilbake og ble med til hytta.', translation: 'O Linu devolveu o caranguejo e foi junto para a cabana.', next: 'hytta' }],
      },
      historie: {
        emoji: '🌊',
        text: 'Arne forklarte at forskere hadde satt ut krabben i Barentshavet for mange år siden. Siden hadde den spredt seg langs kysten, fordi den nesten ikke hadde fiender her. «Nå er den både et problem og en god inntekt», sa han.',
        translation: 'O Arne explicou que cientistas tinham soltado o caranguejo no mar de Barents muitos anos antes. Desde então, ele tinha se espalhado pela costa, porque quase não tinha inimigos aqui. «Hoje ele é ao mesmo tempo um problema e uma boa fonte de renda», disse ele.',
        choices: [{ text: 'De kjørte tilbake til land.', translation: 'Eles voltaram para a terra firme.', next: 'hytta' }],
      },
      hytta: {
        emoji: '🍲',
        text: 'Etterpå kjørte de tilbake til ei varm hytte ved fjorden. Arne kokte krabbene i ei stor gryte med sjøvann, og alle spiste med fingrene. Damen fra Recife sa at hun hadde glemt at hun hadde frosset.',
        translation: 'Depois eles voltaram para uma cabana quentinha à beira do fiorde. O Arne cozinhou os caranguejos numa panela grande com água do mar, e todos comeram com as mãos. A senhora de Recife disse que tinha esquecido que tinha passado frio.',
        choices: [
          { text: 'Linu hjalp Arne med å rydde og vaske gryta.', translation: 'O Linu ajudou o Arne a arrumar tudo e lavar a panela.', next: 'final_bom' },
          { text: 'Linu spiste så mye at han ikke klarte å reise seg.', translation: 'O Linu comeu tanto que não conseguia se levantar.', next: 'final_mett' },
        ],
      },
      final_bom: {
        emoji: '🎁',
        text: 'Da gjestene hadde reist, ga Arne Linu en stor krabbeklo som takk. Han sa at Linu kunne komme tilbake neste vinter, hvis han ville. Linu svarte at han gjerne ville, selv om han fortsatt var litt redd for klørne.',
        translation: 'Quando os hóspedes foram embora, o Arne deu ao Linu uma grande garra de caranguejo como agradecimento. Ele disse que o Linu podia voltar no inverno seguinte, se quisesse. O Linu respondeu que queria muito, embora ainda tivesse um pouco de medo das garras.',
        ending: { tone: 'bom', title: 'Ajudante do fiorde', message: 'O Linu puxou o covo, aprendeu a história do caranguejo-real e ainda ganhou convite para voltar.' },
      },
      final_mett: {
        emoji: '😴',
        text: 'Linu spiste sju krabbeklør, og etterpå måtte han legge seg på benken. Arne ryddet alene, mens han ristet på hodet og lo. Gjestene tok bilder av pingvinen som sov med en klo i vingen.',
        translation: 'O Linu comeu sete garras de caranguejo e depois teve de se deitar no banco. O Arne arrumou tudo sozinho, balançando a cabeça e rindo. Os hóspedes tiraram fotos do pinguim que dormia com uma garra na asa.',
        ending: { tone: 'neutro', title: 'Barriga cheia', message: 'O caranguejo estava delicioso, mas o Linu deixou o trabalho todo para o Arne. Da próxima vez, um pouco menos de garras!' },
      },
    },
  },
  {
    id: 'nb-h18',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Påske i Kautokeino',
    emoji: '🦌',
    summary: 'Na Páscoa de Kautokeino, o Linu vai torcer pelo irmão da amiga Máret na corrida de renas e descobre o joik.',
    cultural_context:
      'Kautokeino (Guovdageaidnu, em sámi) é um dos centros da cultura sámi na Noruega. Na Páscoa, tradicionalmente época de reencontros, casamentos e batizados, a cidade recebe um festival com corrida de renas, shows e joik, o canto tradicional sámi. Os desenhos da kofte (gákti, a roupa tradicional) indicam de que região a pessoa vem.',
    start: 'start',
    glossary: [
      ['reinkappkjøring', 'corrida de renas'],
      ['kofte', 'a roupa tradicional sámi (gákti)'],
      ['joik', 'o canto tradicional sámi'],
      ['lavvo', 'a tenda tradicional sámi'],
      ['bidos', 'ensopado sámi de carne de rena'],
      ['om', 'se (em perguntas indiretas)'],
      ['la ikke merke til', 'não percebeu'],
    ],
    nodes: {
      start: {
        emoji: '🐣',
        text: 'Linu kom til Kautokeino i påsken, da hele byen var full av folk. Venninna hans Máret hadde invitert ham, fordi broren hennes skulle være med i reinkappkjøringen. Hun spurte om Linu hadde sett et reinløp før.',
        translation: 'O Linu chegou a Kautokeino na Páscoa, quando a cidade toda estava cheia de gente. A amiga dele, Máret, o tinha convidado porque o irmão dela ia participar da corrida de renas. Ela perguntou se o Linu já tinha visto uma corrida de renas.',
        choices: [
          { text: 'Linu sa at han aldri hadde sett det.', translation: 'O Linu disse que nunca tinha visto.', next: 'isen' },
          { text: 'Linu spurte hva mønsteret på kofta hennes betydde.', translation: 'O Linu perguntou o que significavam os desenhos da kofte dela.', next: 'kofte' },
          {
            text: 'Linu sa at han gledet seg til å kjøre løpet selv.',
            translation: 'O Linu disse que estava ansioso para correr ele mesmo.',
            wrong: 'Quem vai correr é o irmão da Máret: «broren hennes skulle være med i reinkappkjøringen». O Linu foi convidado para assistir.',
          },
        ],
      },
      kofte: {
        emoji: '🧵',
        text: 'Máret hadde på seg ei blå kofte med røde og gule bånd. Hun forklarte at mønsteret viser hvor familien kommer fra, og at man ikke bare kan kjøpe ei slik kofte i en butikk. Kofta var sydd av bestemora hennes.',
        translation: 'A Máret vestia uma kofte azul com faixas vermelhas e amarelas. Ela explicou que os desenhos mostram de onde a família vem, e que não dá para simplesmente comprar uma kofte dessas numa loja. A dela tinha sido costurada pela avó.',
        choices: [{ text: 'De gikk ned til elva for å se løpet.', translation: 'Eles desceram até o rio para ver a corrida.', next: 'isen' }],
      },
      isen: {
        emoji: '🏁',
        text: 'Løpet gikk på isen på elva, og det var kaldt selv om sola skinte. Broren til Máret, Nils, sto på ski bak en rein som ikke ville stå stille. Máret sa at reinen var rask, men at den ikke alltid løp dit Nils ville.',
        translation: 'A corrida era no gelo do rio, e fazia frio embora o sol brilhasse. O irmão da Máret, Nils, estava de esqui atrás de uma rena que não queria ficar parada. A Máret disse que a rena era rápida, mas que nem sempre corria para onde o Nils queria.',
        choices: [
          { text: 'Linu ropte og heiet på Nils.', translation: 'O Linu gritou e torceu pelo Nils.', next: 'lopet' },
          { text: 'Linu gikk for å kjøpe noe varmt å spise.', translation: 'O Linu foi comprar alguma coisa quente para comer.', next: 'kafe' },
        ],
      },
      kafe: {
        emoji: '⛺',
        text: 'I en lavvo ved elva solgte en eldre mann kaffe og bidos, en suppe med reinkjøtt. Mens Linu spiste, begynte mannen å joike stille. Linu la ikke merke til at løpet hadde startet.',
        translation: 'Numa lavvo à beira do rio, um senhor vendia café e bidos, uma sopa com carne de rena. Enquanto o Linu comia, o senhor começou a cantar um joik baixinho. O Linu não percebeu que a corrida tinha começado.',
        choices: [
          { text: 'Linu løp ut for å se løpet.', translation: 'O Linu saiu correndo para ver a corrida.', next: 'lopet' },
          { text: 'Linu ble sittende og lytte til joiken.', translation: 'O Linu ficou sentado ouvindo o joik.', next: 'joik' },
        ],
      },
      joik: {
        emoji: '🎶',
        text: 'Mannen forklarte at man ikke joiker om en person, men at man joiker personen eller stedet. Han hadde laget en joik for hvert av barnebarna sine. Linu spurte forsiktig om han kunne få høre en av dem.',
        translation: 'O senhor explicou que não se canta um joik SOBRE uma pessoa: canta-se a própria pessoa, ou o próprio lugar. Ele tinha feito um joik para cada um dos netos. O Linu perguntou com cuidado se podia ouvir um deles.',
        choices: [{ text: 'Mannen nikket og begynte å joike.', translation: 'O senhor fez que sim e começou a cantar.', next: 'final_joik' }],
      },
      lopet: {
        emoji: '🦌',
        text: 'Nils kom ut av svingen først, men så stoppet reinen plutselig midt på banen. Folk lo og ropte, fordi den hadde fått øye på noen andre reinsdyr ved siden av banen. Máret sa at det samme hadde skjedd i fjor.',
        translation: 'O Nils saiu da curva em primeiro, mas aí a rena parou de repente no meio da pista. O pessoal riu e gritou, porque ela tinha avistado outras renas ao lado da pista. A Máret disse que a mesma coisa tinha acontecido no ano anterior.',
        choices: [
          { text: 'Linu ropte navnet til reinen, som Máret hadde lært ham.', translation: 'O Linu gritou o nome da rena, que a Máret tinha ensinado a ele.', next: 'navn' },
          {
            text: 'Linu jublet, fordi han trodde at Nils hadde vunnet.',
            translation: 'O Linu comemorou, porque achou que o Nils tinha ganhado.',
            wrong: 'O Nils saiu da curva em primeiro, mas a rena «stoppet plutselig midt på banen» — parou de repente no meio da pista. A corrida ainda não tinha terminado.',
          },
        ],
      },
      navn: {
        emoji: '⛷️',
        text: 'Det var nok ikke Linu som fikk reinen til å løpe igjen, men den løp i alle fall. Nils kom i mål som nummer tre, selv om han hadde stått stille i nesten ti sekunder. Han var full av snø og veldig glad.',
        translation: 'Provavelmente não foi o Linu que fez a rena voltar a correr, mas de todo jeito ela correu. O Nils chegou em terceiro, embora tivesse ficado parado quase dez segundos. Ele estava coberto de neve e muito feliz.',
        choices: [{ text: 'De gikk hjem til familien til Máret.', translation: 'Eles foram para a casa da família da Máret.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎁',
        text: 'Om kvelden spiste de middag hos familien til Máret. Bestefaren joiket for Nils, og etterpå sa han at han kanskje skulle lage en joik for pingvinen også. Linu sa at det var den fineste gaven han kunne tenke seg.',
        translation: 'À noite, eles jantaram com a família da Máret. O avô cantou o joik do Nils, e depois disse que talvez fizesse um joik para o pinguim também. O Linu disse que era o presente mais lindo que ele podia imaginar.',
        ending: { tone: 'bom', title: 'Um joik para o Linu', message: 'O Linu torceu pelo Nils até o fim e foi recebido pela família da Máret. Talvez ganhe até um joik só dele!' },
      },
      final_joik: {
        emoji: '🌄',
        text: 'Mannen joiket, og Linu følte at han sto på vidda en sommerdag. Da Linu endelig gikk ut, var løpet ferdig. Máret var ikke sint, men hun sa at han hadde gått glipp av den morsomste reinen i hele Kautokeino.',
        translation: 'O senhor cantou, e o Linu sentiu como se estivesse no planalto num dia de verão. Quando o Linu finalmente saiu, a corrida tinha acabado. A Máret não ficou brava, mas disse que ele tinha perdido a rena mais engraçada de Kautokeino inteira.',
        ending: { tone: 'neutro', title: 'O joik no lugar da corrida', message: 'O Linu perdeu a corrida, mas ouviu um joik de verdade. Fica para o ano que vem torcer pelo Nils!' },
      },
    },
  },
  // ───────────────────────── B1.3 ─────────────────────────
  {
    id: 'nb-h19',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Helleristningene i Alta',
    emoji: '🪨',
    summary: 'Num emprego de verão no museu de Alta, o Linu acompanha uma turma de escola pelas gravuras rupestres e aprende a procurá-las na luz baixa do fim de tarde.',
    cultural_context:
      'As gravuras rupestres (helleristninger) de Alta, no norte da Noruega, foram descobertas em 1973 e são Patrimônio Mundial da UNESCO desde 1985. Feitas entre cerca de 7.000 e 2.000 anos atrás, mostram renas, ursos, barcos e caçadores; algumas foram pintadas de vermelho para que os visitantes consigam vê-las.',
    start: 'start',
    glossary: [
      ['helleristninger', 'gravuras rupestres'],
      ['ble hogget inn', 'foram entalhadas (passiva com bli)'],
      ['kan ses', 'podem ser vistas (passiva com -s)'],
      ['ta vare på', 'cuidar de, preservar'],
      ['se etter', 'procurar'],
      ['få øye på', 'avistar, perceber'],
      ['slitt', 'gasto, desgastado (particípio)'],
      ['tråkke', 'pisar'],
    ],
    nodes: {
      start: {
        emoji: '🏛️',
        text: 'Linu hadde fått sommerjobb på museet i Alta, der helleristningene tas vare på. Den første dagen ble han satt til å følge en skoleklasse sammen med guiden Sigrid. Hun forklarte at bildene ble hogget inn i fjellet for flere tusen år siden. Noen av dem er malt røde, slik at de lettere kan ses.',
        translation: 'O Linu tinha arrumado um emprego de verão no museu de Alta, onde as gravuras rupestres são preservadas. No primeiro dia, ele foi designado para acompanhar uma turma de escola junto com a guia Sigrid. Ela explicou que as figuras foram entalhadas na rocha milhares de anos atrás. Algumas delas estão pintadas de vermelho, para que possam ser vistas com mais facilidade.',
        choices: [
          { text: 'Linu tok imot barna ved inngangen.', translation: 'O Linu recebeu as crianças na entrada.', next: 'barna' },
          {
            text: 'Linu fortalte barna at folk i steinalderen hadde malt bildene røde.',
            translation: 'O Linu contou às crianças que o povo da Idade da Pedra tinha pintado as figuras de vermelho.',
            wrong: 'As figuras «ble hogget inn i fjellet» — FORAM ENTALHADAS na rocha. A tinta vermelha veio muito depois: algumas estão pintadas «slik at de lettere kan ses», para que POSSAM SER VISTAS pelos visitantes de hoje (passiva com -s).',
          },
        ],
      },
      barna: {
        emoji: '🧒',
        text: 'Barna var ivrige og løp rett bort til den første steinen. Sigrid ropte at ingen fikk tråkke på helleristningene, fordi de lett blir slitt. Linu passet på at alle holdt seg på gangveien av tre.',
        translation: 'As crianças estavam animadas e correram direto para a primeira pedra. A Sigrid gritou que ninguém podia pisar nas gravuras, porque elas se desgastam fácil. O Linu cuidou para que todos ficassem na passarela de madeira.',
        choices: [
          { text: 'Linu ba barna se etter en rein på steinen.', translation: 'O Linu pediu às crianças que procurassem uma rena na pedra.', next: 'rein' },
          { text: 'Linu lot en gutt klatre ned på fjellet for å ta et bilde.', translation: 'O Linu deixou um menino descer na rocha para tirar uma foto.', next: 'gutt' },
        ],
      },
      gutt: {
        emoji: '📸',
        text: 'Gutten hoppet ned på fjellet og stilte seg midt på et bilde av en båt. Sigrid ble sint og ba ham komme seg opp med en gang. Etterpå forklarte hun Linu at mange av bildene allerede er skadet av vær og vind. De tåler ikke mer.',
        translation: 'O menino pulou na rocha e ficou bem em cima da figura de um barco. A Sigrid ficou brava e mandou que ele subisse na hora. Depois ela explicou ao Linu que muitas das figuras já estão danificadas pelo tempo e pelo vento. Elas não aguentam mais nada.',
        choices: [
          { text: 'Linu ba om unnskyldning og lovet å passe bedre på.', translation: 'O Linu pediu desculpas e prometeu prestar mais atenção.', next: 'rein' },
          {
            text: 'Linu sa at det ikke gjorde noe, siden bildene var laget i hard stein.',
            translation: 'O Linu disse que não tinha problema, já que as figuras eram feitas em pedra dura.',
            wrong: 'A Sigrid explicou que muitas figuras «allerede er skadet av vær og vind» — JÁ ESTÃO DANIFICADAS pelo tempo (particípio «skadet» depois de «er») — e que não aguentam mais. Pedra dura não quer dizer que não se desgaste.',
          },
        ],
      },
      rein: {
        emoji: '🦌',
        text: 'Barna fant raskt reinen, og snart også en bjørn, en fisker og en lang båt. Sigrid fortalte at reinen var viktig for menneskene som bodde her, og at de fulgte etter flokkene. Ei jente spurte hvorfor noen av bildene ikke var malt.',
        translation: 'As crianças acharam logo a rena, e depois também um urso, um pescador e um barco comprido. A Sigrid contou que a rena era importante para as pessoas que viviam ali, e que elas seguiam os rebanhos. Uma menina perguntou por que algumas figuras não estavam pintadas.',
        choices: [{ text: 'Linu lot Sigrid svare.', translation: 'O Linu deixou a Sigrid responder.', next: 'svar' }],
      },
      svar: {
        emoji: '🌅',
        text: 'Sigrid sa at man ikke maler bildene lenger, fordi malingen kan skade fjellet. I stedet ser forskerne etter nye bilder når sola står lavt og skyggene blir lange. Da er de tynne linjene lettere å få øye på.',
        translation: 'A Sigrid disse que hoje não se pintam mais as figuras, porque a tinta pode danificar a rocha. Em vez disso, os pesquisadores procuram novas figuras quando o sol está baixo e as sombras ficam compridas. Aí as linhas finas ficam mais fáceis de perceber.',
        choices: [
          { text: 'Linu foreslo at de skulle komme tilbake om kvelden.', translation: 'O Linu sugeriu que eles voltassem no fim da tarde.', next: 'kveld' },
          { text: 'Linu gikk videre til kafeen med klassen.', translation: 'O Linu seguiu com a turma para o café.', next: 'final_kafe' },
        ],
      },
      kveld: {
        emoji: '🔦',
        text: 'Etter jobben gikk Linu og Sigrid ut igjen, da sola sto lavt over fjorden. De gikk sakte langs gangveien og så etter linjer i skyggene. Plutselig pekte Linu på noe som så ut som en liten fisk ved siden av stien.',
        translation: 'Depois do trabalho, o Linu e a Sigrid saíram de novo, quando o sol estava baixo sobre o fiorde. Eles andaram devagar pela passarela, procurando linhas nas sombras. De repente, o Linu apontou para algo que parecia um peixinho ao lado da trilha.',
        choices: [{ text: 'Linu tok et bilde og viste det til Sigrid.', translation: 'O Linu tirou uma foto e mostrou à Sigrid.', next: 'funn' }],
      },
      funn: {
        emoji: '🔍',
        text: 'Sigrid bøyde seg ned og ble helt stille. Hun sa at hun aldri hadde sett denne figuren før, og at den måtte bli undersøkt av forskerne. Neste morgen ble funnet meldt til forskerne.',
        translation: 'A Sigrid se abaixou e ficou totalmente em silêncio. Ela disse que nunca tinha visto aquela figura antes, e que ela precisava ser examinada pelos pesquisadores. Na manhã seguinte, a descoberta foi comunicada aos pesquisadores.',
        choices: [{ text: 'Linu ventet spent på svaret.', translation: 'O Linu esperou ansioso pela resposta.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🐟',
        text: 'En uke senere ble det bekreftet at fisken var en helleristning som ikke var registrert før. Sigrid sa at det ikke skjer ofte at en sommervikar gjør et nytt funn. Linu ble så stolt at han fortalte det til alle han møtte.',
        translation: 'Uma semana depois, foi confirmado que o peixe era uma gravura rupestre que ainda não estava registrada. A Sigrid disse que não é sempre que um temporário de verão faz uma descoberta nova. O Linu ficou tão orgulhoso que contou para todo mundo que encontrava.',
        ending: { tone: 'bom', title: 'O peixe na rocha', message: 'Com a luz baixa da tarde e olhos atentos, o Linu ajudou a encontrar uma gravura desconhecida.' },
      },
      final_kafe: {
        emoji: '🧇',
        text: 'På kafeen spiste barna vafler og snakket om bjørnen og båtene. Linu tenkte på skyggene Sigrid hadde nevnt, men han var for trøtt til å gå ut igjen. Kanskje skulle han se etter bilder en annen kveld.',
        translation: 'No café, as crianças comeram waffles e conversaram sobre o urso e os barcos. O Linu pensou nas sombras de que a Sigrid tinha falado, mas estava cansado demais para sair de novo. Talvez ele procurasse figuras numa outra noite.',
        ending: { tone: 'neutro', title: 'Um dia cheio', message: 'A visita foi um sucesso, mas as sombras do fim de tarde ficaram para outra vez.' },
      },
    },
  },
  {
    id: 'nb-h20',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Malmtoget til Narvik',
    emoji: '🚂',
    summary: 'O Linu vai ao porto de Narvik escrever uma reportagem sobre o minério de ferro que chega de trem da Suécia.',
    cultural_context:
      'Pela Ofotbanen, a ferrovia aberta em 1902 entre a Suécia e Narvik, chegam trens com minério de ferro das minas de Kiruna. Graças à Corrente do Golfo, o porto de Narvik não congela no inverno, e por isso o minério é embarcado ali para o mundo todo.',
    start: 'start',
    glossary: [
      ['malmen', 'o minério'],
      ['blir fraktet', 'é transportado (passiva com bli)'],
      ['lastes', 'é carregado (passiva com -s)'],
      ['havna', 'o porto'],
      ['kaia', 'o cais'],
      ['sette i gang', 'pôr em funcionamento, começar'],
      ['holde seg unna', 'manter distância'],
    ],
    nodes: {
      start: {
        emoji: '🗒️',
        text: 'Linu var i Narvik for å skrive en artikkel om havna. Han ble tatt imot av Kari, som hadde jobbet der i tjue år. Hun forklarte at jernmalmen blir fraktet med tog fra Kiruna i Sverige, og at den lastes på skip her. «Havna fryser aldri til, selv om vi er langt nord», sa hun.',
        translation: 'O Linu estava em Narvik para escrever uma reportagem sobre o porto. Ele foi recebido pela Kari, que trabalhava ali havia vinte anos. Ela explicou que o minério de ferro é transportado de trem desde Kiruna, na Suécia, e que é carregado nos navios aqui. «O porto nunca congela, mesmo estando tão ao norte», disse ela.',
        choices: [
          { text: 'Linu spurte hvorfor havna ikke fryser til.', translation: 'O Linu perguntou por que o porto não congela.', next: 'golf' },
          { text: 'Linu ble med Kari ned til kaia.', translation: 'O Linu desceu com a Kari até o cais.', next: 'kaia' },
          {
            text: 'Linu noterte at malmen blir hentet ut av gruver i Narvik.',
            translation: 'O Linu anotou que o minério é extraído de minas em Narvik.',
            wrong: 'A Kari disse que o minério «blir fraktet med tog fra Kiruna i Sverige» — É TRANSPORTADO de trem desde Kiruna, na Suécia. Em Narvik ele só «lastes på skip», é carregado nos navios.',
          },
        ],
      },
      golf: {
        emoji: '🌊',
        text: 'Kari sa at Golfstrømmen holder vannet varmt nok hele vinteren. Derfor ble jernbanen bygget helt hit for over hundre år siden. Linu skrev det ned i notatblokka si.',
        translation: 'A Kari disse que a Corrente do Golfo mantém a água quente o suficiente o inverno inteiro. Por isso a ferrovia foi construída até aqui há mais de cem anos. O Linu anotou isso no bloquinho.',
        choices: [{ text: 'Linu ble med Kari ned til kaia.', translation: 'O Linu desceu com a Kari até o cais.', next: 'kaia' }],
      },
      kaia: {
        emoji: '🚢',
        text: 'Nede på kaia lå et enormt skip som skulle fylles med malm. Et langt tog kom sakte inn, og vognene ble tømt én etter én. Kari ropte at Linu måtte ta på seg hjelm og vest før han gikk videre.',
        translation: 'Lá embaixo no cais havia um navio enorme que ia ser enchido de minério. Um trem comprido chegou devagar, e os vagões foram esvaziados um por um. A Kari gritou que o Linu tinha de pôr capacete e colete antes de seguir em frente.',
        choices: [
          { text: 'Linu tok på seg hjelmen og vesten.', translation: 'O Linu pôs o capacete e o colete.', next: 'skipet' },
          { text: 'Linu gikk videre uten hjelm, fordi han ville se toget på nært hold.', translation: 'O Linu seguiu sem capacete, porque queria ver o trem de perto.', next: 'hjelm' },
        ],
      },
      hjelm: {
        emoji: '⛑️',
        text: 'Linu hadde bare gått noen skritt da en vakt stoppet ham. Han ble fulgt tilbake til kontoret og måtte se en sikkerhetsfilm på tjue minutter. Kari ventet utenfor og smilte litt.',
        translation: 'O Linu tinha dado só alguns passos quando um segurança o parou. Ele foi levado de volta ao escritório e teve de assistir a um filme de segurança de vinte minutos. A Kari esperava do lado de fora, sorrindo um pouco.',
        choices: [{ text: 'Linu tok på seg hjelmen og gikk ut igjen.', translation: 'O Linu pôs o capacete e saiu de novo.', next: 'skipet' }],
      },
      skipet: {
        emoji: '🏗️',
        text: 'Fra et høyt tårn kunne de se hvordan malmen ble ført ut på et langt bånd og ned i skipet. Kapteinen kom opp og fortalte at skipet skulle til Kina, og at reisen tok over en måned. Plutselig stoppet båndet med et smell.',
        translation: 'De uma torre alta, eles podiam ver como o minério era levado por uma esteira comprida até dentro do navio. O capitão subiu e contou que o navio ia para a China, e que a viagem levava mais de um mês. De repente, a esteira parou com um estrondo.',
        choices: [
          { text: 'Linu spurte hva som hadde skjedd.', translation: 'O Linu perguntou o que tinha acontecido.', next: 'stopp' },
          {
            text: 'Linu gratulerte kapteinen, fordi skipet var ferdig lastet.',
            translation: 'O Linu deu os parabéns ao capitão, porque o navio estava totalmente carregado.',
            wrong: 'A esteira «stoppet med et smell» — parou COM UM ESTRONDO, de repente. Isso é sinal de problema, não de que o carregamento terminou.',
          },
        ],
      },
      stopp: {
        emoji: '🚨',
        text: 'En stor stein hadde satt seg fast i båndet, og en alarm ble slått på. Kari sa at feilen måtte rettes før lastingen kunne settes i gang igjen. Arbeiderne kom løpende med verktøy.',
        translation: 'Uma pedra grande tinha ficado presa na esteira, e um alarme foi acionado. A Kari disse que o defeito tinha de ser consertado antes que o carregamento pudesse recomeçar. Os trabalhadores vieram correndo com ferramentas.',
        choices: [
          { text: 'Linu holdt seg unna og så på.', translation: 'O Linu ficou longe e observou.', next: 'fikset' },
          { text: 'Linu tilbød seg å hjelpe arbeiderne.', translation: 'O Linu se ofereceu para ajudar os trabalhadores.', next: 'hjelpe' },
        ],
      },
      hjelpe: {
        emoji: '🙅',
        text: 'Kari takket nei og sa at bare folk med opplæring får gå inn på båndet. Linu skjønte det og ble stående bak gjerdet. Derfra kunne han i alle fall ta gode bilder til artikkelen.',
        translation: 'A Kari agradeceu, mas recusou, e disse que só gente treinada pode entrar na esteira. O Linu entendeu e ficou atrás da grade. Dali, pelo menos, ele podia tirar boas fotos para a reportagem.',
        choices: [{ text: 'Linu ventet til feilen var rettet.', translation: 'O Linu esperou até o defeito ser consertado.', next: 'fikset' }],
      },
      fikset: {
        emoji: '🔧',
        text: 'Etter en halvtime var steinen fjernet, og båndet ble satt i gang igjen. Arbeiderne vinket til pingvinen i tårnet. Kari sa at slikt skjer et par ganger i måneden, og at det aldri blir kjedelig på havna.',
        translation: 'Depois de meia hora, a pedra tinha sido retirada, e a esteira foi ligada de novo. Os trabalhadores acenaram para o pinguim na torre. A Kari disse que isso acontece umas duas vezes por mês, e que no porto nunca fica chato.',
        choices: [
          { text: 'Linu dro hjem og skrev artikkelen samme kveld.', translation: 'O Linu foi para casa e escreveu a reportagem naquela mesma noite.', next: 'final_bom' },
          { text: 'Linu tok Ofotbanen mot Sverige for å se resten av veien.', translation: 'O Linu pegou a Ofotbanen rumo à Suécia para ver o resto do caminho.', next: 'final_tog' },
        ],
      },
      final_bom: {
        emoji: '📰',
        text: 'Artikkelen ble trykt i avisa to dager senere, med et bilde av skipet og toget. Kari ringte og sa at den var hengt opp på pauserommet. Linu syntes det var bedre enn noen pris.',
        translation: 'A reportagem foi publicada no jornal dois dias depois, com uma foto do navio e do trem. A Kari ligou e disse que ela tinha sido pendurada na sala de descanso. O Linu achou isso melhor que qualquer prêmio.',
        ending: { tone: 'bom', title: 'Reportagem no mural', message: 'O Linu entendeu o caminho do minério, do trem ao navio, e entregou a reportagem no prazo.' },
      },
      final_tog: {
        emoji: '⛰️',
        text: 'Utsikten fra Ofotbanen var fantastisk, med fjorder, tunneler og bratte fjell. Men Linu glemte helt tiden, og artikkelen ble ikke levert før fristen. Redaktøren var ikke fornøyd, selv om bildene var vakre.',
        translation: 'A vista da Ofotbanen era fantástica, com fiordes, túneis e montanhas íngremes. Mas o Linu esqueceu totalmente da hora, e a reportagem não foi entregue antes do prazo. O editor não ficou satisfeito, embora as fotos fossem lindas.',
        ending: { tone: 'neutro', title: 'Passeio fora do prazo', message: 'A viagem de trem foi linda, mas a reportagem atrasou. Primeiro o trabalho, depois o passeio!' },
      },
    },
  },
  {
    id: 'nb-h21',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Stavkirka ved Sognefjorden',
    emoji: '⛪',
    summary: 'O Linu atravessa um braço do Sognefjord para visitar a igreja de madeira de Urnes, guiado por uma senhora que cuida dela há décadas.',
    cultural_context:
      'O Sognefjord é o fiorde mais longo e mais profundo da Noruega: tem cerca de 200 km e passa de 1.000 metros de profundidade. Num dos seus braços fica a igreja de madeira (stavkirke) de Urnes, do século XII, considerada a mais antiga que se conservou e Patrimônio Mundial da UNESCO desde 1979; os entalhes da parede norte, reaproveitados de uma igreja anterior, deram nome ao «estilo Urnes» da arte viking.',
    start: 'start',
    glossary: [
      ['stavkirka', 'a igreja de madeira (stavkirke)'],
      ['ferja', 'a balsa'],
      ['utskjæringene', 'os entalhes'],
      ['ble bygget', 'foi construída'],
      ['bevart', 'conservado, preservado (particípio)'],
      ['ta vare på', 'cuidar de'],
      ['gå glipp av', 'perder, deixar de ver'],
      ['ble stengt', 'era fechada (passiva com bli)'],
    ],
    nodes: {
      start: {
        emoji: '⛴️',
        text: 'Linu sto på kaia i Solvorn og ventet på ferja over til Urnes. Han hadde lest at stavkirka der ble bygget for nesten 900 år siden, og at den regnes som den eldste som er bevart. En eldre dame med sykkel ventet ved siden av ham.',
        translation: 'O Linu estava no cais de Solvorn esperando a balsa para Urnes. Ele tinha lido que a igreja de madeira de lá foi construída há quase 900 anos, e que é considerada a mais antiga que se conservou. Uma senhora de bicicleta esperava ao lado dele.',
        choices: [
          { text: 'Linu hilste på damen.', translation: 'O Linu cumprimentou a senhora.', next: 'damen' },
          { text: 'Linu gikk inn på kafeen for å kjøpe is.', translation: 'O Linu entrou no café para comprar sorvete.', next: 'is' },
        ],
      },
      is: {
        emoji: '🍦',
        text: 'Det var lang kø i kafeen, og Linu ble stående lenge. Da han kom ut, så han ferja på vei ut på fjorden. Neste avgang var om en time.',
        translation: 'Tinha uma fila comprida no café, e o Linu ficou lá um tempão. Quando saiu, viu a balsa já indo pelo fiorde. A próxima saída era dali a uma hora.',
        choices: [{ text: 'Linu satte seg og ventet på neste ferje.', translation: 'O Linu sentou e esperou a próxima balsa.', next: 'sen' }],
      },
      damen: {
        emoji: '🚲',
        text: 'Damen het Borghild og bodde på en gård like ved kirka. Hun fortalte at hun hadde vært med på å ta vare på kirka i over førti år. «Du må ikke gå glipp av nordveggen», sa hun, «for der er de fineste utskjæringene.»',
        translation: 'A senhora se chamava Borghild e morava num sítio pertinho da igreja. Ela contou que ajudava a cuidar da igreja havia mais de quarenta anos. «Você não pode deixar de ver a parede norte», disse ela, «porque lá estão os entalhes mais bonitos.»',
        choices: [
          { text: 'Linu spurte hva som var så spesielt med dem.', translation: 'O Linu perguntou o que eles tinham de tão especial.', next: 'vegg' },
          {
            text: 'Linu forsto at Borghild ville at han skulle hoppe over nordveggen.',
            translation: 'O Linu entendeu que a Borghild queria que ele pulasse a parede norte.',
            wrong: '«Gå glipp av» quer dizer PERDER, deixar passar. «Du må ikke gå glipp av nordveggen» = você não pode perder a parede norte — é justamente o que ela recomenda ver!',
          },
        ],
      },
      vegg: {
        emoji: '🐉',
        text: 'Borghild sa at utskjæringene på nordveggen var eldre enn selve kirka. De ble tatt vare på da en eldre kirke ble revet, og satt inn i den nye. Stilen er så kjent at den har fått navn etter stedet: urnesstilen.',
        translation: 'A Borghild disse que os entalhes da parede norte eram mais antigos que a própria igreja. Eles foram guardados quando uma igreja mais antiga foi demolida, e colocados na nova. O estilo é tão conhecido que ganhou o nome do lugar: o estilo Urnes.',
        choices: [{ text: 'Ferja kom, og de gikk om bord sammen.', translation: 'A balsa chegou, e eles embarcaram juntos.', next: 'kirka' }],
      },
      kirka: {
        emoji: '🌲',
        text: 'Fra kaia gikk de opp en bratt bakke til kirka, som sto mørk og stille mellom trærne. Nordveggen var dekket av slanger og dyr som var flettet inn i hverandre. En guide låste opp døra og sa at kirka ble stengt klokka fem.',
        translation: 'Do cais, eles subiram uma ladeira íngreme até a igreja, que se erguia escura e silenciosa entre as árvores. A parede norte era coberta de serpentes e animais entrelaçados. Uma guia destrancou a porta e disse que a igreja fechava às cinco horas.',
        choices: [
          { text: 'Linu gikk inn med guiden.', translation: 'O Linu entrou com a guia.', next: 'inne' },
          { text: 'Linu ble stående ute og tegnet dyrene på veggen.', translation: 'O Linu ficou do lado de fora desenhando os animais da parede.', next: 'tegne' },
          {
            text: 'Linu tenkte at han hadde god tid, fordi kirka var åpen hele kvelden.',
            translation: 'O Linu achou que tinha bastante tempo, porque a igreja ficava aberta a noite toda.',
            wrong: 'A guia disse que «kirka ble stengt klokka fem» — a igreja ERA FECHADA às cinco (passiva com «bli» + particípio). Não ficava aberta a noite toda.',
          },
        ],
      },
      tegne: {
        emoji: '✏️',
        text: 'Linu tegnet så lenge at han glemte tiden fullstendig. Da han så på klokka, var den ti på fem, og døra var i ferd med å bli låst. Guiden sa at han kunne kikke inn i to minutter.',
        translation: 'O Linu desenhou por tanto tempo que esqueceu totalmente da hora. Quando olhou o relógio, eram dez para as cinco, e a porta estava prestes a ser trancada. A guia disse que ele podia dar uma espiada por dois minutos.',
        choices: [{ text: 'Linu løp inn.', translation: 'O Linu entrou correndo.', next: 'final_kort' }],
      },
      inne: {
        emoji: '🕯️',
        text: 'Inne var det mørkt, og det luktet av tjære og gammelt treverk. Guiden viste dem stavene som bærer taket, og forklarte at kirka har stått på samme sted i nesten ni hundre år. Borghild satte seg på en benk og ba Linu sette seg ved siden av henne.',
        translation: 'Lá dentro estava escuro e cheirava a piche e madeira velha. A guia mostrou os pilares que sustentam o telhado e explicou que a igreja está no mesmo lugar há quase novecentos anos. A Borghild sentou num banco e pediu que o Linu sentasse ao lado dela.',
        choices: [{ text: 'Linu satte seg ved siden av Borghild.', translation: 'O Linu sentou ao lado da Borghild.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🌄',
        text: 'De satt stille en stund og hørte på vinden utenfor. Borghild sa at hun håpet at kirka ville bli tatt vare på i ni hundre år til. Linu tok ferja tilbake og lovet seg selv at han skulle komme igjen.',
        translation: 'Eles ficaram um tempo em silêncio, ouvindo o vento lá fora. A Borghild disse que esperava que a igreja fosse cuidada por mais novecentos anos. O Linu pegou a balsa de volta e prometeu a si mesmo que voltaria.',
        ending: { tone: 'bom', title: 'Novecentos anos de madeira', message: 'Com a Borghild como guia, o Linu viu a parede norte e o interior da igreja mais antiga do tipo.' },
      },
      final_kort: {
        emoji: '⏰',
        text: 'Linu rakk bare å se et glimt av det mørke rommet før døra ble låst. Men på ferja tilbake viste han tegningen til Borghild, og hun sa at den var ganske god. Kanskje fikk han se resten neste sommer.',
        translation: 'O Linu só conseguiu ver de relance o interior escuro antes de a porta ser trancada. Mas, na balsa de volta, mostrou o desenho à Borghild, e ela disse que estava bem bom. Talvez ele visse o resto no verão seguinte.',
        ending: { tone: 'neutro', title: 'Um desenho e uma espiada', message: 'O Linu desenhou os entalhes, mas quase não viu o interior. A hora de fechar não espera ninguém!' },
      },
      sen: {
        emoji: '🔒',
        text: 'Linu tok neste ferje, men da han kom opp til kirka, var den allerede stengt. Han gikk rundt og så på utskjæringene på nordveggen utenfra. Det var vakkert, men han skulle gjerne ha sett rommet innenfor også.',
        translation: 'O Linu pegou a balsa seguinte, mas, quando chegou à igreja, ela já estava fechada. Ele deu a volta e olhou os entalhes da parede norte por fora. Era lindo, mas ele bem que gostaria de ter visto o interior também.',
        ending: { tone: 'neutro', title: 'Só por fora', message: 'O sorvete custou a balsa, e a balsa custou a visita. Pelo menos a parede norte se vê de fora!' },
      },
    },
  },
  // ───────────────────────── B1.4 ─────────────────────────
  {
    id: 'nb-h22',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Den høyeste toppen',
    emoji: '⛰️',
    summary: 'Em Jotunheimen, o Linu tenta subir o Galdhøpiggen, o pico mais alto da Noruega, numa travessia de geleira com guia e corda.',
    cultural_context:
      'Jotunheimen, «o lar dos gigantes», é o parque nacional com as montanhas mais altas da Noruega. O Galdhøpiggen, com 2.469 metros, é o ponto mais alto do país e do norte da Europa; saindo da Juvasshytta, a subida cruza uma geleira e por isso se faz com guia e corda.',
    start: 'start',
    glossary: [
      ['det høyeste', 'o mais alto (superlativo)'],
      ['like høy som', 'tão alto quanto'],
      ['brattere', 'mais íngreme (comparativo)'],
      ['føreren', 'o guia (de montanha)'],
      ['breen', 'a geleira'],
      ['sprekker', 'fendas'],
      ['tauet', 'a corda'],
      ['hvis', 'cujo, cuja (pronome relativo)'],
    ],
    nodes: {
      start: {
        emoji: '🏔️',
        text: 'Linu sto utenfor Juvasshytta, som ligger mer enn 1800 meter over havet. Herfra skulle han gå til Galdhøpiggen, det høyeste fjellet i Norge. Føreren, en rolig mann som het Tor, sa at turen over breen var den vanskeligste delen. Han spurte om Linu hadde gått med tau før.',
        translation: 'O Linu estava na frente da Juvasshytta, que fica a mais de 1.800 metros acima do nível do mar. Dali ele ia até o Galdhøpiggen, a montanha mais alta da Noruega. O guia, um homem tranquilo que se chamava Tor, disse que a travessia da geleira era a parte mais difícil. Ele perguntou se o Linu já tinha andado preso a uma corda.',
        choices: [
          {
            text: 'Linu svarte at han aldri hadde gått med tau, men at han var mer vant til is enn de fleste.',
            translation: 'O Linu respondeu que nunca tinha andado de corda, mas que estava mais acostumado com gelo do que a maioria.',
            next: 'tau',
          },
          { text: 'Linu sa at han heller ville gå alene, fordi det gikk raskere.', translation: 'O Linu disse que preferia ir sozinho, porque era mais rápido.', next: 'alene' },
          {
            text: 'Linu tenkte at breen var den letteste delen av turen.',
            translation: 'O Linu pensou que a geleira era a parte mais fácil do passeio.',
            wrong: 'O Tor disse que a travessia da geleira era «den vanskeligste delen» — a parte MAIS DIFÍCIL (superlativo de «vanskelig»), e não a mais fácil («den letteste»).',
          },
        ],
      },
      alene: {
        emoji: '🙅',
        text: 'Tor ristet på hodet. Han forklarte at breen har dype sprekker som er skjult under snøen, og at ingen får gå over uten tau. «Den som går alene, tar den største risikoen av alle», sa han.',
        translation: 'O Tor balançou a cabeça. Ele explicou que a geleira tem fendas profundas que ficam escondidas debaixo da neve, e que ninguém pode atravessá-la sem corda. «Quem vai sozinho corre o maior risco de todos», disse ele.',
        choices: [{ text: 'Linu ga seg og tok på seg selen.', translation: 'O Linu desistiu da ideia e vestiu a cadeirinha.', next: 'tau' }],
      },
      tau: {
        emoji: '🪢',
        text: 'Tor festet Linu til tauet mellom seg og ei jente fra Bergen som het Solveig. Solveig, hvis bror hadde vært på toppen året før, sa at utsikten skulle være den beste i hele Norge. Gruppa begynte å gå sakte over den hvite breen.',
        translation: 'O Tor prendeu o Linu na corda entre ele e uma moça de Bergen que se chamava Solveig. A Solveig, cujo irmão tinha estado no topo no ano anterior, disse que a vista era, pelo que diziam, a melhor de toda a Noruega. O grupo começou a atravessar devagar a geleira branca.',
        choices: [{ text: 'Linu gikk bak Solveig.', translation: 'O Linu foi atrás da Solveig.', next: 'bre' }],
      },
      bre: {
        emoji: '🧊',
        text: 'Midt på breen stoppet Tor og pekte på en smal, blå sprekk. Han sa at den var dypere enn et hus er høyt, og at alle måtte holde tauet stramt. Solveig ble blek og sa at hun var reddere nå enn noen gang før.',
        translation: 'No meio da geleira, o Tor parou e apontou para uma fenda estreita e azul. Ele disse que ela era mais funda do que uma casa é alta, e que todos tinham de manter a corda esticada. A Solveig ficou pálida e disse que estava com mais medo agora do que nunca.',
        choices: [
          { text: 'Linu snakket rolig med Solveig mens de gikk.', translation: 'O Linu conversou com calma com a Solveig enquanto andavam.', next: 'roe' },
          { text: 'Linu hoppet over sprekken for å vise at det var lett.', translation: 'O Linu pulou a fenda para mostrar que era fácil.', next: 'hopp' },
        ],
      },
      hopp: {
        emoji: '😬',
        text: 'Tauet ble med en gang stramt, og Tor ropte at Linu skulle stå helt stille. Etterpå sa han at det var det dummeste han hadde sett på lenge. Linu skammet seg og gikk tilbake på plass i rekka.',
        translation: 'A corda esticou na hora, e o Tor gritou que o Linu ficasse totalmente parado. Depois ele disse que aquilo era a coisa mais boba que tinha visto em muito tempo. O Linu ficou com vergonha e voltou ao seu lugar na fila.',
        choices: [{ text: 'Linu ba om unnskyldning og begynte å snakke rolig med Solveig.', translation: 'O Linu pediu desculpas e começou a conversar com calma com a Solveig.', next: 'roe' }],
      },
      roe: {
        emoji: '🐧',
        text: 'Linu fortalte Solveig om isen i Antarktis, som er mye kaldere og tykkere enn denne breen. Hun lo og sa at hun følte seg tryggere med en pingvin bak seg. Snart var de over breen og kunne ta av seg tauet.',
        translation: 'O Linu contou à Solveig sobre o gelo da Antártida, que é muito mais frio e mais grosso do que essa geleira. Ela riu e disse que se sentia mais segura com um pinguim atrás dela. Logo eles tinham atravessado a geleira e puderam tirar a corda.',
        choices: [{ text: 'De gikk videre mot toppen.', translation: 'Eles seguiram rumo ao topo.', next: 'ur' }],
      },
      ur: {
        emoji: '☁️',
        text: 'Den siste delen gikk over stein og var brattere, men ikke like farlig. Tor sa at de måtte være tilbake på breen før klokka tre, fordi været skulle bli dårligere. Linu så at skyene i vest ble mørkere og mørkere.',
        translation: 'A última parte era por cima de pedras e mais íngreme, mas não tão perigosa. O Tor disse que eles tinham de estar de volta na geleira antes das três, porque o tempo ia piorar. O Linu viu que as nuvens no oeste ficavam cada vez mais escuras.',
        choices: [
          { text: 'Linu skyndte seg mot toppen.', translation: 'O Linu se apressou rumo ao topo.', next: 'toppen' },
          { text: 'Linu foreslo å gå saktere for å spare krefter.', translation: 'O Linu sugeriu andar mais devagar para poupar energia.', next: 'final_taake' },
          {
            text: 'Linu sa til Solveig at været skulle bli bedre utover dagen.',
            translation: 'O Linu disse à Solveig que o tempo ia melhorar ao longo do dia.',
            wrong: 'O Tor avisou que «været skulle bli dårligere» — o tempo IA PIORAR (comparativo de «dårlig»). E as nuvens ficavam «mørkere og mørkere», cada vez mais escuras.',
          },
        ],
      },
      toppen: {
        emoji: '🗻',
        text: 'På toppen sto en liten steinhytte, og rundt dem lå hele Jotunheimen. Tor pekte ut Glittertind, som er nesten like høy som Galdhøpiggen. Linu syntes det var det vakreste han hadde sett i hele sitt liv.',
        translation: 'No topo havia uma pequena cabana de pedra, e em volta deles se estendia toda a Jotunheimen. O Tor mostrou o Glittertind, que é quase tão alto quanto o Galdhøpiggen. O Linu achou que era a coisa mais bonita que já tinha visto na vida.',
        choices: [{ text: 'Gruppa tok et bilde og gikk ned i tide.', translation: 'O grupo tirou uma foto e desceu a tempo.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '📸',
        text: 'De kom ned til Juvasshytta akkurat da regnet begynte. Tor sa at Linu var den flinkeste pingvinen han noen gang hadde hatt på tauet. Solveig lovet å sende ham bildet fra toppen, som var det fineste av alle.',
        translation: 'Eles chegaram à Juvasshytta bem na hora em que a chuva começou. O Tor disse que o Linu era o pinguim mais habilidoso que ele já tinha tido na corda. A Solveig prometeu mandar para ele a foto do topo, que era a mais bonita de todas.',
        ending: { tone: 'bom', title: 'No teto da Noruega', message: 'O Linu atravessou a geleira com segurança e chegou ao ponto mais alto do país antes do mau tempo.' },
      },
      final_taake: {
        emoji: '🌫️',
        text: 'Gruppa gikk saktere enn før, og da de endelig kom opp, lå tåka tett rundt toppen. De så ingenting annet enn hverandre. Linu var stolt av å ha stått på det høyeste punktet i Norge, men utsikten måtte han bare forestille seg.',
        translation: 'O grupo andou mais devagar do que antes, e quando finalmente chegou lá em cima, a neblina cobria o topo. Eles não viam nada além uns dos outros. O Linu ficou orgulhoso de ter pisado no ponto mais alto da Noruega, mas a vista ele só pôde imaginar.',
        ending: { tone: 'neutro', title: 'O topo na neblina', message: 'O Linu chegou lá em cima, mas devagar demais: as nuvens chegaram primeiro. Na montanha, o horário importa!' },
      },
    },
  },
  {
    id: 'nb-h23',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Villreinen på vidda',
    emoji: '🦌',
    summary: 'Numa travessia de Hardangervidda de cabana em cabana, o Linu ajuda um fiscal do parque a contar as renas selvagens.',
    cultural_context:
      'Hardangervidda é o maior planalto montanhoso da Europa, e boa parte dele forma o maior parque nacional da Noruega continental. Lá vive a maior população de renas selvagens (villrein) da Europa, e os visitantes devem manter distância para não espantar os animais.',
    start: 'start',
    glossary: [
      ['vidda', 'o planalto (a Hardangervidda)'],
      ['villreinen', 'a rena selvagem'],
      ['flokken', 'a manada'],
      ['oppsynsmann', 'fiscal, guarda do parque'],
      ['mer sky enn', 'mais arisco que'],
      ['den største', 'o maior (superlativo)'],
      ['kalvene', 'os filhotes'],
      ['kikkerten', 'o binóculo'],
    ],
    nodes: {
      start: {
        emoji: '🥾',
        text: 'Linu gikk fra hytte til hytte over Hardangervidda, den største høyfjellsletta i Europa. Den tredje dagen møtte han Eirik, en oppsynsmann som skulle telle villrein. Eirik fortalte at villreinen er mye mer sky enn tamrein, og at den flykter hvis den ser mennesker. Han spurte om Linu ville bli med.',
        translation: 'O Linu ia de cabana em cabana atravessando a Hardangervidda, o maior planalto de montanha da Europa. No terceiro dia, ele encontrou o Eirik, um fiscal do parque que ia contar renas selvagens. O Eirik contou que a rena selvagem é muito mais arisca que a rena domesticada, e que foge se vê gente. Ele perguntou se o Linu queria ir junto.',
        choices: [
          { text: 'Linu sa ja og lovet å gå så stille han kunne.', translation: 'O Linu disse que sim e prometeu andar o mais silenciosamente que pudesse.', next: 'kikkert' },
          { text: 'Linu takket nei, fordi han heller ville komme fram til hytta før middag.', translation: 'O Linu agradeceu e recusou, porque preferia chegar à cabana antes do jantar.', next: 'hytta' },
          {
            text: 'Linu foreslo å gå helt bort til reinen for å klappe den.',
            translation: 'O Linu sugeriu ir até bem perto das renas para fazer carinho.',
            wrong: 'O Eirik disse que a rena selvagem é «mye mer sky enn tamrein» — MUITO MAIS ARISCA que a domesticada — e que foge «hvis den ser mennesker». Chegar perto para fazer carinho está fora de questão.',
          },
        ],
      },
      kikkert: {
        emoji: '🔭',
        text: 'De gikk i flere timer over myrer og stein, mens Eirik så gjennom kikkerten. Han sa at flokken som han hadde sett dagen før, var den største han hadde sett på mange år. Nå var den et sted lenger vest.',
        translation: 'Eles andaram várias horas por brejos e pedras, enquanto o Eirik olhava pelo binóculo. Ele disse que a manada que tinha visto no dia anterior era a maior que ele via em muitos anos. Agora ela estava em algum lugar mais a oeste.',
        choices: [
          { text: 'Linu spurte hvor mange dyr det var i flokken.', translation: 'O Linu perguntou quantos animais havia na manada.', next: 'antall' },
          { text: 'Linu klatret opp på den høyeste steinen for å se bedre.', translation: 'O Linu subiu na pedra mais alta para ver melhor.', next: 'stein' },
        ],
      },
      stein: {
        emoji: '🪨',
        text: 'Fra steinen kunne Linu se mye lenger enn før. Men Eirik vinket ham ned og forklarte at en pingvin på en stein er lettere å se enn en pingvin bak en stein. Reinen ser bevegelse på lang avstand.',
        translation: 'De cima da pedra, o Linu conseguia ver muito mais longe do que antes. Mas o Eirik fez sinal para ele descer e explicou que um pinguim em cima de uma pedra é mais fácil de ver do que um pinguim atrás de uma pedra. A rena enxerga movimento a uma grande distância.',
        choices: [{ text: 'Linu klatret ned og spurte hvor mange dyr det var i flokken.', translation: 'O Linu desceu e perguntou quantos animais havia na manada.', next: 'antall' }],
      },
      antall: {
        emoji: '🌾',
        text: 'Eirik svarte at han trodde det var over tusen dyr. Han fortalte at villreinen på vidda er en av de siste store flokkene i Europa, og at det er viktig å ikke skremme den. Plutselig la han seg ned i lyngen og pekte.',
        translation: 'O Eirik respondeu que achava que eram mais de mil animais. Ele contou que as renas selvagens do planalto são uma das últimas grandes manadas da Europa, e que é importante não assustá-las. De repente, ele se deitou na urze e apontou.',
        choices: [{ text: 'Linu la seg ned ved siden av ham.', translation: 'O Linu se deitou ao lado dele.', next: 'flokk' }],
      },
      flokk: {
        emoji: '🦌',
        text: 'Langt borte beveget en grå masse seg over en snøfonn. Det var flokken, og den var mye større enn Linu hadde trodd. Eirik hvisket at de skulle ligge stille og telle, og at han ville ta de voksne dyrene mens Linu tok kalvene.',
        translation: 'Lá longe, uma massa cinzenta se movia sobre um campo de neve. Era a manada, e ela era muito maior do que o Linu tinha imaginado. O Eirik sussurrou que eles iam ficar quietos contando, e que ele ficaria com os animais adultos enquanto o Linu contava os filhotes.',
        choices: [
          { text: 'Linu begynte å telle kalvene.', translation: 'O Linu começou a contar os filhotes.', next: 'telle' },
          { text: 'Linu reiste seg for å ta et bedre bilde.', translation: 'O Linu se levantou para tirar uma foto melhor.', next: 'final_flukt' },
          {
            text: 'Linu begynte å telle de voksne dyrene.',
            translation: 'O Linu começou a contar os animais adultos.',
            wrong: 'O Eirik sussurrou que ELE contaria os adultos («han ville ta de voksne dyrene») e que o Linu ficaria com os filhotes («mens Linu tok kalvene») — discurso indireto.',
          },
        ],
      },
      telle: {
        emoji: '🔢',
        text: 'Det tok nesten en time, og kalvene var vanskeligere å telle enn Linu hadde trodd. Til slutt kom han fram til 212 kalver. Eirik noterte tallet og sa at det var flere enn året før.',
        translation: 'Levou quase uma hora, e os filhotes eram mais difíceis de contar do que o Linu tinha pensado. No fim, ele chegou a 212 filhotes. O Eirik anotou o número e disse que eram mais do que no ano anterior.',
        choices: [{ text: 'Linu spurte om det var et godt tegn.', translation: 'O Linu perguntou se isso era um bom sinal.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '📓',
        text: 'Eirik svarte at flere kalver betyr at flokken har det bra. Han sa også at Linu var den roligste medhjelperen han noen gang hadde hatt. Om kvelden spiste de middag sammen på hytta, og Linu fikk skrive navnet sitt i telleboka.',
        translation: 'O Eirik respondeu que mais filhotes significa que a manada está bem. Ele disse também que o Linu era o ajudante mais tranquilo que ele já tivera. À noite, eles jantaram juntos na cabana, e o Linu pôde escrever o nome dele no caderno de contagem.',
        ending: { tone: 'bom', title: 'Contador de renas', message: 'Quieto e atento, o Linu ajudou a contar a maior manada de renas selvagens da Europa.' },
      },
      final_flukt: {
        emoji: '💨',
        text: 'Med en gang løftet noen av dyrene hodet. Et øyeblikk senere løp hele flokken over fonnen og forsvant bak en ås. Eirik sukket og sa at tellingen måtte vente til neste dag.',
        translation: 'Na mesma hora, alguns dos animais levantaram a cabeça. Um instante depois, a manada inteira correu pelo campo de neve e sumiu atrás de um morro. O Eirik suspirou e disse que a contagem teria de esperar até o dia seguinte.',
        ending: { tone: 'neutro', title: 'Manada em fuga', message: 'Uma foto melhor custou a contagem: rena selvagem enxerga longe. Da próxima vez, fique deitado!' },
      },
      hytta: {
        emoji: '🛖',
        text: 'Linu kom fram til hytta i god tid og fikk den beste sengeplassen. Om kvelden kom Eirik inn og fortalte at han hadde funnet flokken, som var større enn på mange år. Linu ønsket at han hadde blitt med.',
        translation: 'O Linu chegou à cabana com folga e ficou com a melhor cama. À noite, o Eirik entrou e contou que tinha encontrado a manada, que estava maior do que em muitos anos. O Linu desejou ter ido junto.',
        ending: { tone: 'neutro', title: 'A melhor cama', message: 'O Linu descansou bem, mas perdeu a chance de ver a manada de perto. O planalto ainda estará lá amanhã!' },
      },
    },
  },
  {
    id: 'nb-h24',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Den glemte veska',
    emoji: '👜',
    summary: 'Em Fredrikstad, o Linu acha uma bolsa esquecida na balsinha que atravessa o rio Glomma e sai pela cidade velha à procura da dona.',
    cultural_context:
      'Fredrikstad foi fundada em 1567 na foz do Glomma, o rio mais longo da Noruega. A Gamlebyen, a cidade velha cercada de muralhas e fossos, é considerada a cidade-fortaleza mais bem conservada da Escandinávia; uma pequena balsa leva pedestres e ciclistas até ela, atravessando o rio.',
    start: 'start',
    glossary: [
      ['ferjemannen', 'o barqueiro da balsa'],
      ['veska', 'a bolsa'],
      ['den eldste', 'o mais velho (superlativo)'],
      ['best bevarte', 'mais bem conservada'],
      ['som', 'que (pronome relativo)'],
      ['hvis', 'cujo, cuja (relativo formal)'],
      ['antikvariatet', 'o sebo'],
      ['vollene', 'as muralhas de terra'],
    ],
    nodes: {
      start: {
        emoji: '⛴️',
        text: 'Linu tok den lille ferja fra sentrum over Glomma til Gamlebyen. Ferjemannen, som het Odd, var den eldste ferjemannen i byen. Da de la til, fant Linu ei rød veske som noen hadde glemt på benken. Odd sa at den sikkert tilhørte damen med den gule hatten, som hadde tatt forrige tur over.',
        translation: 'O Linu pegou a balsinha do centro, atravessando o Glomma até a Gamlebyen. O barqueiro, que se chamava Odd, era o barqueiro mais velho da cidade. Quando atracaram, o Linu achou uma bolsa vermelha que alguém tinha esquecido no banco. O Odd disse que ela com certeza era da senhora do chapéu amarelo, que tinha feito a travessia anterior.',
        choices: [
          { text: 'Linu tilbød seg å lete etter damen i Gamlebyen.', translation: 'O Linu se ofereceu para procurar a senhora na Gamlebyen.', next: 'lete' },
          { text: 'Linu ga veska til Odd og gikk på museum.', translation: 'O Linu deu a bolsa ao Odd e foi ao museu.', next: 'final_museum' },
          {
            text: 'Linu gikk for å lete etter en dame med rød hatt.',
            translation: 'O Linu foi procurar uma senhora de chapéu vermelho.',
            wrong: 'O Odd falou da senhora «med den gule hatten» — de chapéu AMARELO. O que era vermelho era a bolsa («ei rød veske»).',
          },
        ],
      },
      lete: {
        emoji: '🏰',
        text: 'Odd fortalte at Gamlebyen er den best bevarte festningsbyen i Norden, med voller og vollgraver rundt. «Den er større enn du tror», sa han, «så begynn på torget, der de fleste går først.» Linu takket og gikk inn gjennom porten.',
        translation: 'O Odd contou que a Gamlebyen é a cidade-fortaleza mais bem conservada dos países nórdicos, com muralhas e fossos em volta. «Ela é maior do que você pensa», disse ele, «então comece pela praça, que é aonde a maioria vai primeiro.» O Linu agradeceu e entrou pelo portão.',
        choices: [{ text: 'Linu gikk til torget.', translation: 'O Linu foi até a praça.', next: 'torget' }],
      },
      torget: {
        emoji: '☕',
        text: 'På torget satt mange turister, men ingen av dem hadde gul hatt. En servitør sa at hun hadde sett en dame med gul hatt, som hadde spurt etter antikvariatet. Hun sa at antikvariatet lå i gata bak kirka.',
        translation: 'Na praça havia muitos turistas sentados, mas nenhum deles de chapéu amarelo. Uma garçonete disse que tinha visto uma senhora de chapéu amarelo, que tinha perguntado pelo sebo. Ela disse que o sebo ficava na rua atrás da igreja.',
        choices: [
          { text: 'Linu gikk til antikvariatet.', translation: 'O Linu foi até o sebo.', next: 'antikvariat' },
          { text: 'Linu gikk opp på vollene for å se bedre utover byen.', translation: 'O Linu subiu nas muralhas para ver melhor a cidade.', next: 'vollen' },
        ],
      },
      vollen: {
        emoji: '👒',
        text: 'Fra vollene så Linu mange hatter, men de fleste var mindre og mørkere enn den han lette etter. Han kastet bort nesten en halvtime. Til slutt husket han hva servitøren hadde sagt.',
        translation: 'Das muralhas, o Linu viu muitos chapéus, mas a maioria era menor e mais escura do que o que ele procurava. Ele perdeu quase meia hora. No fim, lembrou do que a garçonete tinha dito.',
        choices: [{ text: 'Linu gikk til antikvariatet.', translation: 'O Linu foi até o sebo.', next: 'antikvariat' }],
      },
      antikvariat: {
        emoji: '📚',
        text: 'Antikvariatet var trangere og mer støvete enn noen butikk Linu hadde vært i. Innehaveren, hvis katt sov på disken, sa at en dame med gul hatt hadde vært der for ti minutter siden. Hun hadde sagt at hun skulle ta ferja tilbake til sentrum.',
        translation: 'O sebo era mais apertado e mais empoeirado do que qualquer loja em que o Linu já tinha estado. O dono, cujo gato dormia em cima do balcão, disse que uma senhora de chapéu amarelo tinha passado ali dez minutos antes. Ela tinha dito que ia pegar a balsa de volta para o centro.',
        choices: [
          { text: 'Linu løp tilbake til ferja.', translation: 'O Linu correu de volta para a balsa.', next: 'ferja' },
          {
            text: 'Linu satte seg og ventet på at damen skulle komme tilbake til antikvariatet.',
            translation: 'O Linu sentou e ficou esperando a senhora voltar ao sebo.',
            wrong: 'O dono contou que a senhora tinha dito «at hun skulle ta ferja tilbake til sentrum» — que IA PEGAR A BALSA de volta para o centro (discurso indireto). Ela não ia voltar ao sebo.',
          },
        ],
      },
      ferja: {
        emoji: '🏃',
        text: 'Ved ferjeleiet sto en dame med gul hatt og lette i lommene sine. Hun så mer og mer fortvilet ut. Odd sto i ferja og vinket til Linu.',
        translation: 'No atracadouro da balsa, uma senhora de chapéu amarelo remexia os bolsos. Ela parecia cada vez mais desesperada. O Odd, de pé na balsa, acenou para o Linu.',
        choices: [
          { text: 'Linu ga henne veska.', translation: 'O Linu entregou a bolsa a ela.', next: 'final_bom' },
          { text: 'Linu spurte først hva som var i veska, for å være sikker.', translation: 'O Linu perguntou primeiro o que havia na bolsa, para ter certeza.', next: 'sjekk' },
        ],
      },
      sjekk: {
        emoji: '🗺️',
        text: 'Damen ble litt overrasket, men svarte at det var en lommebok, briller og et gammelt kart over Fredrikstad. Linu kikket, og alt stemte. Han ga henne veska med et smil.',
        translation: 'A senhora ficou um pouco surpresa, mas respondeu que havia uma carteira, óculos e um mapa antigo de Fredrikstad. O Linu deu uma olhada, e estava tudo certo. Ele entregou a bolsa a ela com um sorriso.',
        choices: [{ text: 'Damen takket Linu.', translation: 'A senhora agradeceu ao Linu.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🧇',
        text: 'Damen, som het Randi, sa at kartet var det kjæreste hun eide, fordi det hadde vært farens. Hun insisterte på å spandere vafler på Linu og Odd. Odd sa at det var den beste pausen han hadde hatt på lenge.',
        translation: 'A senhora, que se chamava Randi, disse que o mapa era a coisa mais querida que ela tinha, porque tinha sido do pai dela. Ela fez questão de pagar waffles para o Linu e o Odd. O Odd disse que foi a melhor pausa que ele tinha tido em muito tempo.',
        ending: { tone: 'bom', title: 'O mapa do pai', message: 'Seguindo as pistas certas, o Linu devolveu a bolsa — e o mapa mais querido da Randi.' },
      },
      final_museum: {
        emoji: '🏛️',
        text: 'Linu brukte ettermiddagen på museet og lærte mye om byens historie. Da han kom tilbake til ferja, sa Odd at ingen hadde spurt etter veska. Den ble levert til politiet, og Linu fikk aldri vite hvem som eide den.',
        translation: 'O Linu passou a tarde no museu e aprendeu muito sobre a história da cidade. Quando voltou à balsa, o Odd disse que ninguém tinha perguntado pela bolsa. Ela foi entregue à polícia, e o Linu nunca soube quem era a dona.',
        ending: { tone: 'neutro', title: 'Um mistério sem fim', message: 'O museu foi interessante, mas a bolsa ficou sem dona. Às vezes vale a pena sair procurando!' },
      },
    },
  },
  // ───────────────────────── B2.1 ─────────────────────────
  {
    id: 'nb-h25',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Spennen fra vikingtida',
    emoji: '⚔️',
    summary: 'Como voluntário numa escavação em Tønsberg, o Linu encontra um objeto da Era Viking e aprende que cada gesto pode mudar o que se sabe sobre o passado.',
    cultural_context:
      'Tønsberg costuma ser considerada a cidade mais antiga da Noruega. Perto dela, num monte funerário da fazenda Oseberg, foi encontrado em 1904 o navio de Oseberg, um barco viking enterrado no ano de 834 com duas mulheres e muitos objetos.',
    start: 'start',
    glossary: [
      ['utgravningen', 'a escavação'],
      ['gravhaugen', 'o monte funerário'],
      ['spenne', 'broche, fivela'],
      ['frivillig', 'voluntário'],
      ['hvis du hadde bodd her', 'se você tivesse morado aqui'],
      ['ville ha fisket', 'teria pescado (condicional passado)'],
      ['skulle ønske at', 'queria que, quem dera'],
    ],
    nodes: {
      start: {
        emoji: '🖌️',
        text: 'Linu hadde meldt seg som frivillig på en utgravning ved Slottsfjellet i Tønsberg. Arkeologen Hilde viste ham en liten rute i jorda og ga ham en pensel. «Hvis du finner noe, må du rope med en gang», sa hun. «Hvis du graver for fort, kan du ødelegge alt.»',
        translation: 'O Linu tinha se inscrito como voluntário numa escavação perto do Slottsfjellet, em Tønsberg. A arqueóloga Hilde mostrou a ele um pequeno quadrado de terra e lhe deu um pincel. «Se você achar alguma coisa, tem de gritar na hora», disse ela. «Se cavar rápido demais, pode estragar tudo.»',
        choices: [
          { text: 'Linu begynte å børste forsiktig.', translation: 'O Linu começou a escovar com cuidado.', next: 'borste' },
          { text: 'Linu spurte hvordan livet her ville ha vært for tusen år siden.', translation: 'O Linu perguntou como teria sido a vida ali mil anos atrás.', next: 'livet' },
          {
            text: 'Linu hentet en spade for å komme raskere ned.',
            translation: 'O Linu foi buscar uma pá para chegar mais rápido ao fundo.',
            wrong: 'A Hilde avisou: «Hvis du graver for fort, kan du ødelegge alt» — se você cavar rápido demais, pode estragar tudo. A ideia é ir com o pincel, devagar.',
          },
        ],
      },
      livet: {
        emoji: '🛶',
        text: 'Hilde smilte og sa at hvis Linu hadde bodd her den gangen, ville han sannsynligvis ha fisket og drevet handel ved fjorden. Hun fortalte at Osebergskipet ble funnet i en gravhaug ikke langt herfra. «Hvis jeg kunne reise tilbake i tid», sa hun, «ville jeg ha sett begravelsen med egne øyne.»',
        translation: 'A Hilde sorriu e disse que, se o Linu tivesse morado ali naquela época, provavelmente teria pescado e feito comércio no fiorde. Ela contou que o navio de Oseberg foi encontrado num monte funerário não muito longe dali. «Se eu pudesse voltar no tempo», disse ela, «teria visto o enterro com os meus próprios olhos.»',
        choices: [{ text: 'Linu begynte å børste forsiktig.', translation: 'O Linu começou a escovar com cuidado.', next: 'borste' }],
      },
      borste: {
        emoji: '✨',
        text: 'Etter en time kjente Linu noe hardt under penselen. Det var en liten, grønn gjenstand som så ut som en spenne. Hilde var i den andre enden av feltet og snakket i telefonen.',
        translation: 'Depois de uma hora, o Linu sentiu algo duro debaixo do pincel. Era um objeto pequeno e esverdeado que parecia um broche. A Hilde estava do outro lado do terreno falando ao telefone.',
        choices: [
          { text: 'Linu ropte på Hilde.', translation: 'O Linu chamou a Hilde aos gritos.', next: 'rope' },
          { text: 'Linu tok opp gjenstanden for å vise henne den.', translation: 'O Linu tirou o objeto da terra para mostrar a ela.', next: 'dra' },
        ],
      },
      dra: {
        emoji: '😟',
        text: 'Da Hilde så at gjenstanden var tatt opp, ble hun stille. Hun forklarte at de ville ha visst mye mer hvis de hadde sett nøyaktig hvordan den lå i jorda. Linu skulle ønske at han hadde ventet.',
        translation: 'Quando a Hilde viu que o objeto tinha sido tirado da terra, ficou calada. Ela explicou que eles teriam descoberto muito mais se tivessem visto exatamente como ele estava na terra. O Linu desejou ter esperado.',
        choices: [{ text: 'Linu forklarte så nøyaktig han kunne hvor den hadde ligget.', translation: 'O Linu explicou com a maior precisão possível onde ele estava.', next: 'funn' }],
      },
      rope: {
        emoji: '📏',
        text: 'Hilde kom løpende og la seg på kne ved siden av ruta. Hun tok bilder og målte før hun løftet gjenstanden forsiktig opp. «Hvis du ikke hadde ropt, ville jeg aldri ha sett den der», sa hun.',
        translation: 'A Hilde veio correndo e se ajoelhou ao lado do quadrado. Ela tirou fotos e mediu antes de levantar o objeto com cuidado. «Se você não tivesse gritado, eu nunca o teria visto ali», disse ela.',
        choices: [
          { text: 'Linu spurte hva det var.', translation: 'O Linu perguntou o que era aquilo.', next: 'funn' },
          {
            text: 'Linu forsto at Hilde hadde sett spennen før ham.',
            translation: 'O Linu entendeu que a Hilde tinha visto o broche antes dele.',
            wrong: 'A Hilde disse «Hvis du ikke hadde ropt, ville jeg aldri ha sett den der» — se você NÃO tivesse gritado, eu NUNCA o teria visto. Ou seja: quem achou primeiro foi o Linu.',
          },
        ],
      },
      funn: {
        emoji: '🟢',
        text: 'Det var en spenne av bronse, sannsynligvis fra vikingtida. Hilde sa at den kunne ha tilhørt en kvinne med høy status. Hun spurte om Linu ville være med og vise den fram til de andre frivillige.',
        translation: 'Era um broche de bronze, provavelmente da Era Viking. A Hilde disse que ele poderia ter pertencido a uma mulher de posição elevada. Ela perguntou se o Linu queria ir junto mostrá-lo aos outros voluntários.',
        choices: [
          { text: 'Linu sa ja med glede.', translation: 'O Linu disse que sim, com alegria.', next: 'vise' },
          { text: 'Linu sa at han heller ville fortsette å grave.', translation: 'O Linu disse que preferia continuar cavando.', next: 'grave' },
        ],
      },
      vise: {
        emoji: '👥',
        text: 'De andre samlet seg rundt, og Hilde fortalte hvordan Linu hadde funnet spennen. En gutt spurte hva Linu ville ha gjort hvis han hadde vært viking. Linu tenkte seg litt om før han svarte.',
        translation: 'Os outros se juntaram em volta, e a Hilde contou como o Linu tinha achado o broche. Um menino perguntou o que o Linu teria feito se tivesse sido viking. O Linu pensou um pouco antes de responder.',
        choices: [{ text: 'Linu sa at han ville ha seilt helt til Antarktis for å besøke familien.', translation: 'O Linu disse que teria navegado até a Antártida para visitar a família.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎓',
        text: 'Alle lo. Hilde sa at hvis han kom tilbake neste sommer, skulle hun gi ham en egen rute. Linu reiste hjem med et bilde av spennen og en ny drøm: å bli arkeolog.',
        translation: 'Todo mundo riu. A Hilde disse que, se ele voltasse no verão seguinte, ela lhe daria um quadrado só dele. O Linu voltou para casa com uma foto do broche e um sonho novo: virar arqueólogo.',
        ending: { tone: 'bom', title: 'Arqueólogo por um dia', message: 'O Linu achou um broche viking e aprendeu por que, numa escavação, a paciência vale mais que a pressa.' },
      },
      grave: {
        emoji: '🪱',
        text: 'Linu gravde videre resten av dagen, men fant bare småstein og et par sauebein. Om kvelden hørte han at de andre hadde feiret funnet med kake uten ham. Han skulle ønske at han hadde blitt med.',
        translation: 'O Linu continuou cavando o resto do dia, mas só achou pedrinhas e uns ossos de ovelha. À noite, ficou sabendo que os outros tinham comemorado a descoberta com bolo, sem ele. Ele desejou ter ido junto.',
        ending: { tone: 'neutro', title: 'Festa sem o Linu', message: 'O Linu fez a grande descoberta, mas perdeu a comemoração. Às vezes vale a pena largar a pá!' },
      },
    },
  },
  {
    id: 'nb-h26',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Jazz i Rosenes by',
    emoji: '🎷',
    summary: 'O Linu chega a Molde para o festival de jazz, encontra o show esgotado e precisa decidir como aproveitar a noite.',
    cultural_context:
      'Molde, conhecida como «a cidade das rosas», recebe desde 1961 o Moldejazz, um dos festivais de jazz mais antigos da Europa. Do mirante Varden, acima da cidade, se avista o «panorama de Molde», com mais de duzentos picos de montanha do outro lado do fiorde.',
    start: 'start',
    glossary: [
      ['utsolgt', 'esgotado'],
      ['hvis du hadde kommet', 'se você tivesse vindo'],
      ['ville du ha fått', 'você teria conseguido'],
      ['hvis jeg var deg', 'se eu fosse você'],
      ['angret på', 'se arrependeu de'],
      ['skulle gjerne ha', 'bem que gostaria de ter'],
      ['modigere', 'mais corajoso'],
    ],
    nodes: {
      start: {
        emoji: '🎫',
        text: 'Linu kom til Molde en varm julikveld for å høre jazz. Men da han kom til billettluka, var konserten han ville se, utsolgt. «Hvis du hadde kommet i går, ville du ha fått billett», sa damen i luka. Linu angret på at han ikke hadde kjøpt billett på nettet.',
        translation: 'O Linu chegou a Molde numa noite quente de julho para ouvir jazz. Mas, quando chegou à bilheteria, o show que ele queria ver estava esgotado. «Se você tivesse vindo ontem, teria conseguido ingresso», disse a moça do guichê. O Linu se arrependeu de não ter comprado o ingresso pela internet.',
        choices: [
          { text: 'Linu spurte om det fantes andre konserter samme kveld.', translation: 'O Linu perguntou se havia outros shows naquela noite.', next: 'andre' },
          { text: 'Linu bestemte seg for å gå opp til Varden i stedet.', translation: 'O Linu decidiu subir ao Varden em vez disso.', next: 'varden' },
          {
            text: 'Linu tenkte at han hadde kommet en dag for tidlig.',
            translation: 'O Linu pensou que tinha chegado um dia cedo demais.',
            wrong: 'A moça disse «Hvis du hadde kommet i går, ville du ha fått billett» — se você TIVESSE VINDO ONTEM, teria conseguido ingresso. O Linu chegou tarde demais, não cedo demais.',
          },
        ],
      },
      andre: {
        emoji: '🗒️',
        text: 'Damen sa at det var gratis konserter på torget, men at de ikke var like kjente. «Hvis jeg var deg, ville jeg ha prøvd den lille klubben ved havna», sa hun. «Der spiller unge musikere som ingen har hørt om ennå.»',
        translation: 'A moça disse que havia shows gratuitos na praça, mas que não eram tão famosos. «Se eu fosse você, experimentaria o clubinho perto do porto», disse ela. «Lá tocam músicos jovens de quem ninguém ouviu falar ainda.»',
        choices: [
          { text: 'Linu gikk til klubben ved havna.', translation: 'O Linu foi ao clube perto do porto.', next: 'klubb' },
          { text: 'Linu gikk til torget.', translation: 'O Linu foi à praça.', next: 'torg' },
        ],
      },
      torg: {
        emoji: '🌹',
        text: 'På torget spilte et skoleband, og folk danset mellom rosebedene. Det var hyggelig, men Linu tenkte hele tiden på konserten han ikke fikk se. Han lurte på hva som ville ha skjedd hvis han hadde gått til klubben.',
        translation: 'Na praça, uma banda de escola tocava, e as pessoas dançavam entre os canteiros de rosas. Era agradável, mas o Linu não parava de pensar no show que não pôde ver. Ele se perguntou o que teria acontecido se tivesse ido ao clube.',
        choices: [{ text: 'Linu gikk videre til klubben ved havna.', translation: 'O Linu seguiu até o clube perto do porto.', next: 'klubb' }],
      },
      klubb: {
        emoji: '🎶',
        text: 'Klubben var liten og full av folk, og på scenen sto en ung kvinne med en saksofon. Hun spilte så vakkert at hele rommet ble stille. I pausen kom hun bort til baren, der Linu sto.',
        translation: 'O clube era pequeno e estava lotado, e no palco havia uma moça com um saxofone. Ela tocava tão bonito que a sala inteira ficou em silêncio. No intervalo, ela veio até o bar, onde o Linu estava.',
        choices: [
          { text: 'Linu sa at han aldri hadde hørt noe så fint.', translation: 'O Linu disse que nunca tinha ouvido nada tão bonito.', next: 'prat' },
          { text: 'Linu sa ingenting, fordi han var for sjenert.', translation: 'O Linu não disse nada, porque estava tímido demais.', next: 'final_sjenert' },
        ],
      },
      prat: {
        emoji: '💬',
        text: 'Musikeren, som het Liv, lo og sa at hun ville ha gitt opp musikken for lenge siden hvis det ikke var for publikum som ham. Hun fortalte at bandet skulle spille på den store scenen neste år, hvis alt gikk bra. Så spurte hun om Linu ville høre det siste nummeret fra første rad.',
        translation: 'A musicista, que se chamava Liv, riu e disse que teria desistido da música há muito tempo se não fosse por um público como ele. Ela contou que a banda ia tocar no palco principal no ano seguinte, se tudo desse certo. Então ela perguntou se o Linu queria ouvir a última música da primeira fila.',
        choices: [
          { text: 'Linu takket ja.', translation: 'O Linu aceitou, agradecido.', next: 'final_bom' },
          {
            text: 'Linu forsto at Liv skulle slutte med musikk.',
            translation: 'O Linu entendeu que a Liv ia largar a música.',
            wrong: 'A Liv disse que TERIA desistido da música há muito tempo SE não fosse por um público como ele («ville ha gitt opp … hvis det ikke var for …»). Ou seja: ela continua tocando — e quer chegar ao palco principal no ano que vem.',
          },
        ],
      },
      varden: {
        emoji: '🌄',
        text: 'Linu gikk opp den bratte stien til Varden og kom fram rett før solnedgang. Foran ham lå fjorden og over to hundre fjelltopper. Han tenkte at han aldri ville ha sett dette hvis konserten ikke hadde vært utsolgt.',
        translation: 'O Linu subiu a trilha íngreme até o Varden e chegou pouco antes do pôr do sol. Diante dele estavam o fiorde e mais de duzentos picos de montanha. Ele pensou que nunca teria visto aquilo se o show não estivesse esgotado.',
        choices: [
          { text: 'Linu ble sittende til sola var borte.', translation: 'O Linu ficou sentado até o sol sumir.', next: 'final_varden' },
          { text: 'Linu gikk ned igjen for å finne en annen konsert.', translation: 'O Linu desceu de novo para procurar outro show.', next: 'andre' },
        ],
      },
      final_bom: {
        emoji: '🎷',
        text: 'Fra første rad kjente Linu musikken i hele kroppen. Etterpå skrev Liv navnet sitt på ei serviett til ham. «Hvis jeg blir berømt, er den verdt en formue», sa hun og blunket.',
        translation: 'Da primeira fila, o Linu sentiu a música no corpo inteiro. Depois, a Liv escreveu o nome dela num guardanapo para ele. «Se eu ficar famosa, isso vai valer uma fortuna», disse ela, piscando.',
        ending: { tone: 'bom', title: 'Primeira fila', message: 'O show esgotado virou uma noite melhor ainda: o Linu descobriu uma nova artista e ganhou um autógrafo.' },
      },
      final_varden: {
        emoji: '🌅',
        text: 'Sola gikk sakte ned bak fjellene, og fjorden ble gyllen og rosa. En annen turist sa at hun hadde drømt om å komme hit i tjue år. Linu tenkte at noen ganger blir kvelden bedre enn den man hadde planlagt.',
        translation: 'O sol se pôs devagar atrás das montanhas, e o fiorde ficou dourado e cor-de-rosa. Uma outra turista disse que sonhava vir ali havia vinte anos. O Linu pensou que às vezes a noite fica melhor do que a que a gente tinha planejado.',
        ending: { tone: 'bom', title: 'Duzentos picos', message: 'Sem jazz, mas com o panorama de Molde: o Linu transformou o ingresso perdido num pôr do sol inesquecível.' },
      },
      final_sjenert: {
        emoji: '🤐',
        text: 'Liv gikk tilbake på scenen, og Linu hørte resten av konserten fra baren. Musikken var fantastisk, men han skulle gjerne ha sagt noe til henne. Hvis han hadde vært modigere, ville han kanskje ha fått en ny venn.',
        translation: 'A Liv voltou ao palco, e o Linu ouviu o resto do show do bar. A música era fantástica, mas ele bem que gostaria de ter falado alguma coisa com ela. Se tivesse sido mais corajoso, talvez tivesse feito uma nova amiga.',
        ending: { tone: 'neutro', title: 'Palavras não ditas', message: 'O Linu ouviu um show lindo, mas deixou a timidez falar mais alto. Da próxima vez, um elogio!' },
      },
    },
  },
  {
    id: 'nb-h27',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Tåke på Segla',
    emoji: '🏔️',
    summary: 'Na ilha de Senja, o Linu e o amigo Jonas sobem o Segla e precisam decidir o que fazer quando a neblina chega.',
    cultural_context:
      'Senja é a segunda maior ilha da Noruega continental, famosa pelas montanhas pontudas que caem direto no mar. O Segla, com 639 metros, lembra uma vela de barco quando visto do fiorde e virou uma das trilhas mais procuradas do norte do país.',
    start: 'start',
    glossary: [
      ['tåka', 'a neblina'],
      ['stupet', 'o precipício'],
      ['skaret', 'o colo, a passagem entre picos'],
      ['utpå dagen', 'mais para o fim do dia'],
      ['hvis jeg var dere, ville jeg…', 'se eu fosse vocês, eu…'],
      ['ville ha gått galt', 'teria dado errado'],
      ['burde ha hørt', 'deveria ter ouvido'],
    ],
    nodes: {
      start: {
        emoji: '⛅',
        text: 'Linu og vennen Jonas sto ved foten av Segla tidlig om morgenen. Værmeldingen sa at det kunne komme tåke utpå dagen. Jonas mente at hvis de gikk raskt, ville de være på toppen før tåka kom. Linu var ikke like sikker.',
        translation: 'O Linu e o amigo Jonas estavam ao pé do Segla de manhã cedo. A previsão do tempo dizia que podia vir neblina mais para o fim do dia. O Jonas achava que, se fossem rápido, estariam no topo antes de a neblina chegar. O Linu não tinha tanta certeza.',
        choices: [
          { text: 'Linu ble med Jonas opp.', translation: 'O Linu subiu com o Jonas.', next: 'opp' },
          { text: 'Linu foreslo å gå på en lavere topp i stedet.', translation: 'O Linu sugeriu subir um pico mais baixo em vez disso.', next: 'final_lav' },
          {
            text: 'Linu trodde at værmeldingen lovet sol hele dagen.',
            translation: 'O Linu achou que a previsão prometia sol o dia inteiro.',
            wrong: 'A previsão dizia «det kunne komme tåke utpå dagen» — PODIA vir neblina mais para o fim do dia. Nada de sol garantido.',
          },
        ],
      },
      opp: {
        emoji: '🥾',
        text: 'Stien var bratt og våt, men utsikten ble bedre for hver meter. Etter en time kunne de se fjorden og fiskebåtene langt under seg. Jonas sa at hvis det alltid var slik, ville han ha flyttet hit for lenge siden.',
        translation: 'A trilha era íngreme e molhada, mas a vista melhorava a cada metro. Depois de uma hora, eles viam o fiorde e os barcos de pesca lá embaixo. O Jonas disse que, se fosse sempre assim, ele teria se mudado para lá havia muito tempo.',
        choices: [{ text: 'De gikk videre mot toppen.', translation: 'Eles seguiram rumo ao topo.', next: 'skar' }],
      },
      skar: {
        emoji: '👴',
        text: 'I skaret under toppen møtte de et eldre par som var på vei ned. Mannen sa at tåka allerede lå over Hesten, fjellet like ved. «Hvis jeg var dere, ville jeg ha skyndt meg eller snudd», sa han.',
        translation: 'No colo logo abaixo do topo, eles encontraram um casal de idosos que estava descendo. O homem disse que a neblina já cobria o Hesten, a montanha ao lado. «Se eu fosse vocês, andaria depressa ou daria meia-volta», disse ele.',
        choices: [
          { text: 'Linu og Jonas skyndte seg mot toppen.', translation: 'O Linu e o Jonas correram rumo ao topo.', next: 'toppen' },
          { text: 'Linu sa at de burde snu.', translation: 'O Linu disse que eles deviam dar meia-volta.', next: 'final_snu' },
        ],
      },
      toppen: {
        emoji: '🌫️',
        text: 'De nådde toppen akkurat i tide og så ned på det loddrette stupet mot fjorden. Men etter bare fem minutter kom tåka sigende, og snart kunne de knapt se varden. Jonas ble plutselig usikker på hvilken vei de hadde kommet.',
        translation: 'Eles chegaram ao topo bem a tempo e olharam para o precipício vertical que caía no fiorde. Mas, depois de só cinco minutos, a neblina foi chegando, e logo eles mal conseguiam ver o marco de pedras. O Jonas de repente ficou inseguro sobre o caminho por onde tinham vindo.',
        choices: [
          { text: 'Linu tok fram kartet på mobilen og fulgte sporet.', translation: 'O Linu pegou o mapa no celular e seguiu a trilha gravada.', next: 'spor' },
          { text: 'Linu gikk mot det han trodde var stien.', translation: 'O Linu foi na direção do que achava ser a trilha.', next: 'feil' },
        ],
      },
      feil: {
        emoji: '⚠️',
        text: 'Etter noen minutter sto de ved en kant der fjellet forsvant rett ned i tåka. Linu stoppet brått. Hvis han hadde tatt ett skritt til, ville det ha gått riktig galt.',
        translation: 'Depois de alguns minutos, eles estavam na beira de um lugar onde a montanha sumia direto dentro da neblina. O Linu parou de repente. Se ele tivesse dado mais um passo, teria dado muito errado.',
        choices: [{ text: 'Linu tok fram mobilen og fulgte sporet.', translation: 'O Linu pegou o celular e seguiu a trilha gravada.', next: 'spor' }],
      },
      spor: {
        emoji: '🧭',
        text: 'Sporet på mobilen viste at stien gikk mot øst, ikke mot nord som Jonas hadde trodd. De gikk sakte og holdt seg nær hverandre. Jonas sa at han ikke ville ha funnet ned alene.',
        translation: 'A trilha no celular mostrava que o caminho ia para o leste, e não para o norte, como o Jonas tinha pensado. Eles andaram devagar e ficaram perto um do outro. O Jonas disse que sozinho não teria achado o caminho de descida.',
        choices: [
          { text: 'De fortsatte ned mot øst.', translation: 'Eles continuaram descendo para o leste.', next: 'final_bom' },
          {
            text: 'Linu og Jonas gikk mot nord, slik Jonas hadde foreslått.',
            translation: 'O Linu e o Jonas foram para o norte, como o Jonas tinha sugerido.',
            wrong: 'O mapa mostrava que a trilha ia para o LESTE («mot øst»), e não para o norte, «som Jonas hadde trodd» — como o Jonas tinha pensado, errado.',
          },
        ],
      },
      final_bom: {
        emoji: '🍫',
        text: 'Da de endelig kom under tåka, satte de seg på en stein og delte en sjokolade. Jonas innrømmet at han burde ha hørt på Linu fra starten. Linu svarte at hvis de ikke hadde gått opp, ville de aldri ha sett stupet fra toppen.',
        translation: 'Quando finalmente saíram de baixo da neblina, sentaram numa pedra e dividiram um chocolate. O Jonas admitiu que deveria ter ouvido o Linu desde o começo. O Linu respondeu que, se eles não tivessem subido, nunca teriam visto o precipício lá de cima.',
        ending: { tone: 'bom', title: 'Chocolate depois da neblina', message: 'Com calma e o mapa certo, o Linu levou os dois de volta em segurança — e com a vista do topo na memória.' },
      },
      final_snu: {
        emoji: '↩️',
        text: 'De snudde og gikk ned igjen i roligere tempo. Halvveis ned kom tåka, men da var de allerede på den tydelige stien. Nede ved bilen så de at hele Segla var borte i det grå.',
        translation: 'Eles deram meia-volta e desceram num ritmo mais tranquilo. Na metade da descida, a neblina chegou, mas eles já estavam na trilha bem marcada. Lá embaixo, perto do carro, viram que o Segla inteiro tinha sumido no cinza.',
        ending: { tone: 'bom', title: 'Prudência de pinguim', message: 'Sem topo, mas em segurança: na montanha, voltar a tempo também é uma vitória.' },
      },
      final_lav: {
        emoji: '🌊',
        text: 'De gikk opp på en lav ås ved sjøen og så Segla på avstand. Toppen var klar hele formiddagen, og Jonas sukket at de kunne ha vært der oppe. Linu måtte innrømme at han kanskje hadde vært litt for forsiktig.',
        translation: 'Eles subiram um morro baixo à beira-mar e olharam o Segla de longe. O topo ficou limpo a manhã inteira, e o Jonas suspirou dizendo que eles poderiam ter estado lá em cima. O Linu teve de admitir que talvez tivesse sido cuidadoso demais.',
        ending: { tone: 'neutro', title: 'O Segla de longe', message: 'Cuidado é bom, mas a manhã estava limpa: dava para ter subido e voltado a tempo.' },
      },
    },
  },
  // ───────────────────────── B2.2 ─────────────────────────
  {
    id: 'nb-h28',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Klippfisk til Brasil',
    emoji: '🐟',
    summary: 'Estagiando numa exportadora de bacalhau em Kristiansund, o Linu precisa responder por e-mail, em tom formal, à reclamação de um cliente brasileiro.',
    cultural_context:
      'Kristiansund é chamada de «cidade do bacalhau» (klippfiskbyen): desde o fim do século XVII, o peixe salgado e seco nas pedras do litoral era exportado para a Espanha e Portugal e, mais tarde, para o Brasil, que continua sendo um dos grandes compradores do bacalhau norueguês.',
    start: 'start',
    glossary: [
      ['Vi viser til', 'Fazemos referência a'],
      ['henvendelse', 'contato, solicitação'],
      ['beklager', 'lamentamos, pedimos desculpas'],
      ['forsinkelsen', 'o atraso'],
      ['leveransen', 'a entrega'],
      ['dersom', 'caso, se (formal)'],
      ['vedlagt følger', 'segue em anexo'],
      ['Med vennlig hilsen', 'Atenciosamente'],
    ],
    nodes: {
      start: {
        emoji: '🏢',
        text: 'Linu hadde praksisplass hos et lite klippfiskfirma i Kristiansund. En morgen kom sjefen, Marit, inn på kontoret med et bekymret ansikt. En kunde i Rio de Janeiro hadde sendt en klage, fordi leveransen var tre uker forsinket. «Kan du svare ham?» spurte hun. «Du kan jo portugisisk.»',
        translation: 'O Linu fazia estágio numa pequena empresa de bacalhau em Kristiansund. Uma manhã, a chefe, Marit, entrou no escritório com cara de preocupada. Um cliente no Rio de Janeiro tinha mandado uma reclamação, porque a entrega estava três semanas atrasada. «Você pode responder a ele?», perguntou ela. «Afinal, você sabe português.»',
        choices: [
          { text: 'Linu leste e-posten fra kunden først.', translation: 'O Linu leu primeiro o e-mail do cliente.', next: 'epost' },
          { text: 'Linu begynte å skrive svaret med en gang.', translation: 'O Linu começou a escrever a resposta na hora.', next: 'rask' },
        ],
      },
      rask: {
        emoji: '🙈',
        text: 'Linu skrev: «Hei! Sorry for at fisken er sen, den kommer snart! Klem fra Linu.» Marit leste over skulderen hans og ristet på hodet. «Slik skriver man til venner, ikke til en kunde som er misfornøyd», sa hun.',
        translation: 'O Linu escreveu: «Oi! Foi mal pelo atraso do peixe, logo ele chega! Um abraço do Linu.» A Marit leu por cima do ombro dele e balançou a cabeça. «É assim que se escreve para amigos, não para um cliente insatisfeito», disse ela.',
        choices: [{ text: 'Linu slettet utkastet og leste kundens e-post nøye.', translation: 'O Linu apagou o rascunho e leu com atenção o e-mail do cliente.', next: 'epost' }],
      },
      epost: {
        emoji: '📧',
        text: 'E-posten var skrevet på norsk, og den var svært formell: «Vi viser til vår bestilling av 12. mars og ber om en forklaring på forsinkelsen.» Kunden skrev også at han ville vurdere andre leverandører dersom fisken ikke kom innen utgangen av måneden. Linu forsto at saken var alvorlig.',
        translation: 'O e-mail estava escrito em norueguês e era muito formal: «Fazemos referência ao nosso pedido de 12 de março e solicitamos uma explicação para o atraso.» O cliente escreveu também que consideraria outros fornecedores caso o peixe não chegasse até o fim do mês. O Linu entendeu que o assunto era sério.',
        choices: [
          { text: 'Linu spurte Marit hvorfor fisken var forsinket.', translation: 'O Linu perguntou à Marit por que o peixe estava atrasado.', next: 'grunn' },
          {
            text: 'Linu forsto at kunden allerede hadde kansellert bestillingen.',
            translation: 'O Linu entendeu que o cliente já tinha cancelado o pedido.',
            wrong: 'O cliente disse que consideraria outros fornecedores «dersom fisken ikke kom innen utgangen av måneden» — CASO o peixe não chegasse até o fim do mês. É um aviso, não um cancelamento. «Dersom» é o «se» formal da linguagem de escritório.',
          },
        ],
      },
      grunn: {
        emoji: '🌊',
        text: 'Marit forklarte at en storm hadde holdt skipet tilbake i Nordsjøen i ti dager. Fisken var nå på vei og skulle være framme i Rio om to uker. Hun ba Linu skrive et høflig og tydelig svar og legge ved den nye fraktbekreftelsen.',
        translation: 'A Marit explicou que uma tempestade tinha segurado o navio no Mar do Norte por dez dias. O peixe agora estava a caminho e devia chegar ao Rio em duas semanas. Ela pediu ao Linu que escrevesse uma resposta educada e clara e anexasse a nova confirmação de frete.',
        choices: [{ text: 'Linu skrev et nytt utkast.', translation: 'O Linu escreveu um novo rascunho.', next: 'utkast' }],
      },
      utkast: {
        emoji: '⌨️',
        text: 'Linu skrev: «Vi viser til Deres henvendelse av 2. april og beklager forsinkelsen. Leveransen ble dessverre forsinket på grunn av uvær. Vedlagt følger ny fraktbekreftelse.» Marit nikket, men stoppet ved ordet «Deres».',
        translation: 'O Linu escreveu: «Fazemos referência à sua solicitação de 2 de abril e lamentamos o atraso. Infelizmente, a entrega atrasou devido ao mau tempo. Segue em anexo a nova confirmação de frete.» A Marit concordou com a cabeça, mas parou na palavra «Deres».',
        choices: [{ text: 'Linu spurte hva som var galt med «Deres».', translation: 'O Linu perguntou o que havia de errado com «Deres».', next: 'deres' }],
      },
      deres: {
        emoji: '🎩',
        text: 'Marit forklarte at «De» og «Deres» var vanlige i formelle brev før, men at de nesten ikke brukes lenger. I dag skriver til og med banker og departementer «du» og «din», og mange synes at «De» virker gammeldags eller kaldt. Hun foreslo «din henvendelse» i stedet.',
        translation: 'A Marit explicou que «De» e «Deres» (o senhor, do senhor) eram comuns nas cartas formais de antigamente, mas que quase não se usam mais. Hoje até bancos e ministérios escrevem «du» e «din», e muita gente acha que «De» soa antiquado ou frio. Ela sugeriu «din henvendelse» no lugar.',
        choices: [
          { text: 'Linu byttet til «din henvendelse».', translation: 'O Linu trocou para «din henvendelse».', next: 'avslutt' },
          {
            text: 'Linu beholdt «Deres», fordi Marit hadde sagt at det var det mest moderne.',
            translation: 'O Linu manteve «Deres», porque a Marit tinha dito que era o mais moderno.',
            wrong: 'A Marit disse o contrário: «De» e «Deres» eram comuns ANTES («før») e hoje quase não se usam («nesten ikke brukes lenger»). Até bancos e ministérios escrevem «du» hoje em dia.',
          },
        ],
      },
      avslutt: {
        emoji: '✍️',
        text: 'Til slutt måtte Linu velge en hilsen. Marit sa at «Med vennlig hilsen» passer i nesten alle formelle e-poster, og at «Klem» bare brukes til venner og familie. Hun ba ham også skrive fullt navn og stilling under.',
        translation: 'Por fim, o Linu tinha de escolher uma despedida. A Marit disse que «Med vennlig hilsen» (Atenciosamente) serve para quase todos os e-mails formais, e que «Klem» (abraço) só se usa com amigos e família. Ela pediu também que ele pusesse o nome completo e o cargo embaixo.',
        choices: [
          { text: 'Linu skrev «Med vennlig hilsen, Linu, praktikant» og sendte e-posten.', translation: 'O Linu escreveu «Atenciosamente, Linu, estagiário» e enviou o e-mail.', next: 'final_bom' },
          { text: 'Linu la til to setninger på portugisisk nederst.', translation: 'O Linu acrescentou duas frases em português no final.', next: 'portugisisk' },
        ],
      },
      portugisisk: {
        emoji: '🇧🇷',
        text: 'Under den norske teksten skrev Linu to korte, høflige setninger på portugisisk, der han beklaget igjen og takket for tålmodigheten. Marit var usikker, men lot ham sende e-posten. Neste morgen lå svaret i innboksen.',
        translation: 'Embaixo do texto em norueguês, o Linu escreveu duas frases curtas e educadas em português, pedindo desculpas de novo e agradecendo pela paciência. A Marit ficou em dúvida, mas deixou que ele enviasse o e-mail. Na manhã seguinte, a resposta estava na caixa de entrada.',
        choices: [{ text: 'Linu åpnet svaret.', translation: 'O Linu abriu a resposta.', next: 'final_port' }],
      },
      final_bom: {
        emoji: '✅',
        text: 'Kunden svarte samme ettermiddag: «Takk for rask og tydelig tilbakemelding. Vi ser fram til leveransen.» Marit sa at Linu hadde reddet en av firmaets viktigste kunder. Hun lovet at han skulle få skrive flere e-poster til Brasil.',
        translation: 'O cliente respondeu na mesma tarde: «Obrigado pelo retorno rápido e claro. Aguardamos a entrega.» A Marit disse que o Linu tinha salvado um dos clientes mais importantes da empresa. Ela prometeu que ele ia escrever mais e-mails para o Brasil.',
        ending: { tone: 'bom', title: 'Cliente salvo', message: 'Tom formal, «du» moderno e «Med vennlig hilsen»: o e-mail do Linu acalmou o cliente.' },
      },
      final_port: {
        emoji: '🤝',
        text: 'Kunden hadde svart på portugisisk, og tonen var mye varmere enn i den første e-posten. Han skrev at det var hyggelig å få noen ord på sitt eget språk fra Norge. Marit ba Linu oversette svaret, og fra da av fikk han ansvaret for alle kundene i Brasil.',
        translation: 'O cliente tinha respondido em português, e o tom estava muito mais caloroso do que no primeiro e-mail. Ele escreveu que era bom receber algumas palavras na própria língua vindas da Noruega. A Marit pediu ao Linu que traduzisse a resposta, e a partir daí ele ficou responsável por todos os clientes do Brasil.',
        ending: { tone: 'bom', title: 'Ponte entre Kristiansund e o Rio', message: 'Formal em norueguês e caloroso em português: o Linu ganhou a confiança do cliente e um cargo novo.' },
      },
    },
  },
  {
    id: 'nb-h29',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Kontoret til filmfestivalen',
    emoji: '🎬',
    summary: 'Trabalhando no escritório do festival de cinema de Haugesund, o Linu responde pedidos de credenciamento, recebe uma carta à moda antiga e escreve sua primeira ata.',
    cultural_context:
      'Haugesund recebe todo ano, em agosto, o Festival Internacional de Cinema da Noruega, que se realiza na cidade desde 1973. Ao norte do centro fica o Haraldshaugen, monumento erguido em 1872 para comemorar os mil anos da unificação da Noruega sob Haraldo Cabelo Belo.',
    start: 'start',
    glossary: [
      ['vi bekrefter mottak av', 'confirmamos o recebimento de'],
      ['akkreditering', 'credenciamento'],
      ['saksbehandleren', 'o responsável pelo processo'],
      ['virkedager', 'dias úteis'],
      ['vennligst', 'por favor (formal)'],
      ['innvilge', 'conceder, deferir'],
      ['De / Dem / Deres', 'o senhor, a senhora (forma antiga de cortesia)'],
      ['referat', 'ata, resumo de reunião'],
    ],
    nodes: {
      start: {
        emoji: '🗂️',
        text: 'Linu hadde fått sommerjobb på kontoret til filmfestivalen i Haugesund. Den første oppgaven var å svare på søknader om akkreditering fra journalister. Saksbehandleren, Terje, viste ham en mal som begynte slik: «Vi bekrefter mottak av din søknad.» «Alle svar skal sendes innen to virkedager», sa han.',
        translation: 'O Linu tinha arrumado um emprego de verão no escritório do festival de cinema de Haugesund. A primeira tarefa era responder pedidos de credenciamento de jornalistas. O responsável, Terje, mostrou a ele um modelo que começava assim: «Confirmamos o recebimento do seu pedido.» «Todas as respostas devem ser enviadas em até dois dias úteis», disse ele.',
        choices: [
          { text: 'Linu åpnet innboksen.', translation: 'O Linu abriu a caixa de entrada.', next: 'innboks' },
          {
            text: 'Linu tenkte at han hadde to uker på seg til å svare.',
            translation: 'O Linu pensou que tinha duas semanas para responder.',
            wrong: 'O Terje disse «innen to virkedager» — em até DOIS DIAS ÚTEIS. «Virkedag» (dia útil) é uma palavra típica da linguagem de escritório.',
          },
        ],
      },
      innboks: {
        emoji: '✉️',
        text: 'Den første søknaden var kort og korrekt, men den andre kom med posten, skrevet for hånd. En eldre filmkritiker skrev: «Jeg tillater meg å søke om akkreditering og håper De vil ta min søknad under velvillig vurdering.» Terje lo og sa at slike brev var sjeldne nå.',
        translation: 'O primeiro pedido era curto e correto, mas o segundo chegou pelo correio, escrito à mão. Um crítico de cinema idoso escreveu: «Tomo a liberdade de solicitar credenciamento e espero que o senhor examine meu pedido com boa vontade.» O Terje riu e disse que cartas assim eram raras hoje em dia.',
        choices: [
          { text: 'Linu spurte hvordan han burde svare på et slikt brev.', translation: 'O Linu perguntou como deveria responder a uma carta assim.', next: 'svar' },
          { text: 'Linu svarte med den vanlige malen.', translation: 'O Linu respondeu com o modelo de sempre.', next: 'mal' },
        ],
      },
      mal: {
        emoji: '📨',
        text: 'Linu sendte det vanlige svaret med «din søknad». Noen dager senere ringte kritikeren og spurte, litt fornærmet, om festivalen ikke lenger visste hvordan man skriver et brev. Terje ba Linu ringe ham tilbake og ordne opp.',
        translation: 'O Linu mandou a resposta de sempre, com «din søknad» (seu pedido, tratando por você). Alguns dias depois, o crítico telefonou e perguntou, um pouco ofendido, se o festival não sabia mais escrever uma carta. O Terje pediu ao Linu que ligasse de volta para ele e resolvesse a situação.',
        choices: [{ text: 'Linu ringte kritikeren.', translation: 'O Linu ligou para o crítico.', next: 'telefon' }],
      },
      telefon: {
        emoji: '☎️',
        text: 'Kritikeren tok telefonen med et kort «Ja?». Linu beklaget og sa at søknaden var innvilget, og at han var hjertelig velkommen til å hente pressekortet sitt. Kritikeren ble mildere og fortalte at han hadde vært på festivalen hvert år siden 1970-tallet.',
        translation: 'O crítico atendeu com um seco «Sim?». O Linu pediu desculpas e disse que o pedido tinha sido deferido, e que ele era muito bem-vindo para retirar o crachá de imprensa. O crítico se acalmou e contou que ia ao festival todo ano desde os anos 1970.',
        choices: [{ text: 'Linu takket ham for tålmodigheten.', translation: 'O Linu agradeceu a ele pela paciência.', next: 'mote' }],
      },
      svar: {
        emoji: '🎩',
        text: 'Terje sa at de vanligvis skriver «du» til alle, men at det er høflig å møte en eldre person på hans egne premisser. «Vil du bruke De, må du være konsekvent», sa han. «Da skal det være Dem og Deres også, med stor forbokstav.»',
        translation: 'O Terje disse que eles normalmente tratam todo mundo por «du», mas que é educado respeitar o jeito de uma pessoa mais velha. «Se você quiser usar De, tem de ser coerente», disse ele. «Aí também tem de ser Dem e Deres, com letra maiúscula.»',
        choices: [{ text: 'Linu skrev et svar med «De».', translation: 'O Linu escreveu uma resposta com «De».', next: 'brev' }],
      },
      brev: {
        emoji: '🖋️',
        text: 'Linu skrev: «Vi takker for Deres søknad og har gleden av å innvilge Dem akkreditering. Vennligst hent Deres pressekort i festivalsekretariatet.» Terje leste det to ganger og nikket fornøyd. Brevet ble sendt samme dag.',
        translation: 'O Linu escreveu: «Agradecemos o seu pedido e temos o prazer de lhe conceder o credenciamento. Por gentileza, retire o seu crachá de imprensa na secretaria do festival.» O Terje leu duas vezes e concordou, satisfeito. A carta foi enviada no mesmo dia.',
        choices: [{ text: 'Linu gikk videre til neste oppgave.', translation: 'O Linu passou para a próxima tarefa.', next: 'mote' }],
      },
      mote: {
        emoji: '📝',
        text: 'Om ettermiddagen skulle Linu skrive referat fra et møte med kommunen om parkering under festivalen. Terje sa at et referat skal være kort og nøytralt, uten meninger. Linu hadde notert at en fra kommunen var «helt urimelig og sur».',
        translation: 'À tarde, o Linu tinha de escrever a ata de uma reunião com a prefeitura sobre o estacionamento durante o festival. O Terje disse que uma ata deve ser curta e neutra, sem opiniões. O Linu tinha anotado que uma pessoa da prefeitura estava «totalmente irracional e mal-humorada».',
        choices: [
          { text: 'Linu skrev at kommunen var uenig i forslaget.', translation: 'O Linu escreveu que a prefeitura discordou da proposta.', next: 'final_bom' },
          { text: 'Linu tok med at kommunens representant var urimelig og sur.', translation: 'O Linu incluiu que a representante da prefeitura estava irracional e mal-humorada.', next: 'final_sur' },
          {
            text: 'Linu forsto at referatet burde fortelle hva han selv mente om møtet.',
            translation: 'O Linu entendeu que a ata devia contar o que ele mesmo achou da reunião.',
            wrong: 'O Terje disse que uma ata deve ser «kort og nøytralt, uten meninger» — curta e neutra, SEM opiniões. O que o Linu achou não entra.',
          },
        ],
      },
      final_bom: {
        emoji: '🌇',
        text: 'Terje godkjente referatet uten en eneste endring. Etter jobben gikk Linu ut til Haraldshaugen og så solnedgangen over havet. Neste morgen lå det et håndskrevet takkekort fra filmkritikeren på pulten hans.',
        translation: 'O Terje aprovou a ata sem mudar uma única palavra. Depois do trabalho, o Linu foi até o Haraldshaugen e viu o pôr do sol sobre o mar. Na manhã seguinte, havia um cartão de agradecimento escrito à mão pelo crítico de cinema em cima da mesa dele.',
        ending: { tone: 'bom', title: 'O tom certo', message: 'O Linu soube usar o «De» antigo com quem gosta dele e escreveu uma ata neutra, como manda o escritório.' },
      },
      final_sur: {
        emoji: '🥶',
        text: 'Referatet ble sendt til kommunen før Terje rakk å lese det. Dagen etter kom et kort og kjølig svar: «Vi ber om at referatet rettes.» Linu lærte at det man skriver på jobb, kan bli lest av alle.',
        translation: 'A ata foi enviada à prefeitura antes que o Terje conseguisse lê-la. No dia seguinte chegou uma resposta curta e fria: «Solicitamos que a ata seja corrigida.» O Linu aprendeu que o que se escreve no trabalho pode ser lido por todo mundo.',
        ending: { tone: 'neutro', title: 'Ata com opinião', message: 'Numa ata, nada de adjetivos sobre as pessoas: só o que foi dito e decidido.' },
      },
    },
  },
  {
    id: 'nb-h30',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Brev fra kommunen',
    emoji: '🏛️',
    summary: 'Recém-chegado a Drammen, o Linu recebe da prefeitura uma carta formal negando seu pedido de uma horta à beira do rio e precisa escrever um recurso.',
    cultural_context:
      'Drammen, a sudoeste de Oslo, é cortada pelo rio Drammenselva, que por décadas foi muito poluído pela indústria. Depois de uma grande limpeza, o rio voltou a ter salmão e banhistas, e as margens ganharam calçadões e parques. Na Noruega, quem recebe uma decisão da administração pública em geral tem três semanas para recorrer.',
    start: 'start',
    glossary: [
      ['vedtaket', 'a decisão (administrativa)'],
      ['avslag', 'recusa, indeferimento'],
      ['kan påklages', 'pode ser contestado (passiva com -s)'],
      ['klagefristen', 'o prazo para recorrer'],
      ['folkeregistrert', 'registrado no cadastro de residentes'],
      ['jf. (jamfør)', 'conforme, ver'],
      ['omgjøres', 'ser revisto, alterado'],
      ['saklig', 'objetivo, sóbrio'],
    ],
    nodes: {
      start: {
        emoji: '📬',
        text: 'Linu hadde flyttet til Drammen og søkt om en parsell i kommunens nye hage ved elva. En dag lå det et brev i postkassen: «Vedtak – søknad om parsell. Kommunen har behandlet søknaden din og har kommet fram til at den må avslås.» Linu ble skuffet.',
        translation: 'O Linu tinha se mudado para Drammen e pedido um canteiro na nova horta comunitária da prefeitura, à beira do rio. Um dia havia uma carta na caixa de correio: «Decisão – pedido de canteiro. A prefeitura analisou o seu pedido e concluiu que ele deve ser indeferido.» O Linu ficou decepcionado.',
        choices: [
          { text: 'Linu leste begrunnelsen.', translation: 'O Linu leu a justificativa.', next: 'begrunnelse' },
          { text: 'Linu kastet brevet i søpla.', translation: 'O Linu jogou a carta no lixo.', next: 'final_kast' },
        ],
      },
      begrunnelse: {
        emoji: '📄',
        text: 'Begrunnelsen var at parsellene bare tildeles personer som er folkeregistrert i Drammen. Nederst sto det: «Vedtaket kan påklages. Klagefristen er tre uker fra du mottok dette brevet.» Linu husket plutselig at han aldri hadde sendt flyttemelding.',
        translation: 'A justificativa era que os canteiros só são concedidos a pessoas registradas como moradoras de Drammen. No pé da página estava escrito: «Cabe recurso contra a decisão. O prazo para recorrer é de três semanas a partir do recebimento desta carta.» O Linu lembrou de repente que nunca tinha comunicado a mudança de endereço.',
        choices: [
          { text: 'Linu sendte flyttemelding på nettet med en gang.', translation: 'O Linu comunicou a mudança pela internet na mesma hora.', next: 'flytte' },
          {
            text: 'Linu forsto at han aldri kunne få parsell, uansett hva han gjorde.',
            translation: 'O Linu entendeu que nunca poderia ter um canteiro, fizesse o que fizesse.',
            wrong: 'A carta diz «Vedtaket kan påklages» — a decisão PODE SER CONTESTADA (passiva com -s) — e dá o prazo: três semanas. O problema era só que o Linu não estava registrado em Drammen, e isso tem conserto.',
          },
        ],
      },
      flytte: {
        emoji: '🏠',
        text: 'Noen dager senere fikk han bekreftelse på at den nye adressen var registrert. Nå måtte han skrive en klage til kommunen. Naboen Astrid, som hadde jobbet på et rådhus i mange år, tilbød seg å lese gjennom den.',
        translation: 'Alguns dias depois, ele recebeu a confirmação de que o novo endereço estava registrado. Agora ele tinha de escrever um recurso à prefeitura. A vizinha Astrid, que tinha trabalhado numa prefeitura durante muitos anos, se ofereceu para revisá-lo.',
        choices: [{ text: 'Linu skrev det første utkastet.', translation: 'O Linu escreveu o primeiro rascunho.', next: 'utkast' }],
      },
      utkast: {
        emoji: '😤',
        text: 'Linu skrev: «Hei! Dere har gjort en feil. Jeg bor jo i Drammen nå, så jeg MÅ få en parsell!!» Astrid smilte og sa at en klage skal være saklig, og at store bokstaver og utropstegn virker mot sin hensikt. Hun foreslo å begynne med saksnummeret.',
        translation: 'O Linu escreveu: «Oi! Vocês cometeram um erro. Eu moro em Drammen agora, então eu PRECISO ganhar um canteiro!!» A Astrid sorriu e disse que um recurso deve ser objetivo, e que letras maiúsculas e pontos de exclamação têm o efeito contrário. Ela sugeriu começar pelo número do processo.',
        choices: [
          { text: 'Linu ba Astrid hjelpe ham å skrive om klagen.', translation: 'O Linu pediu à Astrid que o ajudasse a reescrever o recurso.', next: 'omskriv' },
          { text: 'Linu sendte klagen slik den var.', translation: 'O Linu mandou o recurso do jeito que estava.', next: 'final_sint' },
        ],
      },
      omskriv: {
        emoji: '📑',
        text: 'Sammen skrev de: «Klage på vedtak i sak 2026/1452. Jeg viser til vedtak av 3. mai og ønsker å klage på avslaget. Jeg er nå folkeregistrert i Drammen, jf. vedlagt bekreftelse.» Astrid forklarte at «jf.» står for «jamfør», og at forkortelsen er svært vanlig i offentlige brev.',
        translation: 'Juntos, eles escreveram: «Recurso contra a decisão no processo 2026/1452. Faço referência à decisão de 3 de maio e desejo recorrer do indeferimento. Estou agora registrado como morador de Drammen, conforme a confirmação em anexo.» A Astrid explicou que «jf.» é a abreviação de «jamfør» (conforme), muito comum nas cartas oficiais.',
        choices: [{ text: 'Linu spurte hvordan han skulle avslutte klagen.', translation: 'O Linu perguntou como devia terminar o recurso.', next: 'avslutt' }],
      },
      avslutt: {
        emoji: '📅',
        text: 'Astrid sa at han burde avslutte med en tydelig anmodning og en høflig hilsen. Linu skrev: «Jeg ber derfor om at vedtaket omgjøres. Med vennlig hilsen, Linu.» Hun minnet ham om at klagen måtte være sendt før fristen gikk ut 24. mai.',
        translation: 'A Astrid disse que ele devia terminar com um pedido claro e uma despedida educada. O Linu escreveu: «Solicito, portanto, que a decisão seja revista. Atenciosamente, Linu.» Ela lembrou a ele que o recurso tinha de ser enviado antes de o prazo vencer, em 24 de maio.',
        choices: [
          { text: 'Linu sendte klagen samme kveld.', translation: 'O Linu enviou o recurso naquela mesma noite.', next: 'final_bom' },
          {
            text: 'Linu bestemte seg for å sende klagen i juni, når han hadde bedre tid.',
            translation: 'O Linu decidiu mandar o recurso em junho, quando tivesse mais tempo.',
            wrong: 'A Astrid lembrou que o recurso «måtte være sendt før fristen gikk ut 24. mai» — tinha de ser enviado ANTES de o prazo vencer, em 24 de maio. Em junho seria tarde demais.',
          },
        ],
      },
      final_bom: {
        emoji: '🥔',
        text: 'To uker senere kom et nytt brev: «Kommunen har behandlet klagen din og omgjør vedtaket.» Linu fikk en parsell med utsikt over elva, der det nå både var laks og folk som badet. Han plantet poteter og inviterte Astrid på den første middagen fra hagen.',
        translation: 'Duas semanas depois, chegou uma nova carta: «A prefeitura analisou o seu recurso e revê a decisão.» O Linu ganhou um canteiro com vista para o rio, onde agora havia tanto salmão quanto gente tomando banho. Ele plantou batatas e convidou a Astrid para o primeiro jantar da horta.',
        ending: { tone: 'bom', title: 'Batatas à beira do rio', message: 'Recurso objetivo, número do processo e prazo respeitado: o Linu conseguiu o seu canteiro.' },
      },
      final_sint: {
        emoji: '🗑️',
        text: 'Svaret fra kommunen kom etter en måned. Klagen ble tatt til følge fordi Linu nå var folkeregistrert, men saksbehandleren minnet ham høflig om at henvendelser bør holdes i en saklig tone. Linu fikk den siste ledige parsellen, helt bakerst ved kompostbingen.',
        translation: 'A resposta da prefeitura veio depois de um mês. O recurso foi aceito porque o Linu agora estava registrado, mas o servidor lembrou a ele, com educação, que as mensagens devem manter um tom objetivo. O Linu ficou com o último canteiro livre, lá no fundo, ao lado da composteira.',
        ending: { tone: 'neutro', title: 'Canteiro do fundo', message: 'O recurso deu certo, mas o tom não ajudou — e o atraso custou os melhores canteiros.' },
      },
      final_kast: {
        emoji: '🚶',
        text: 'Linu kastet brevet og gikk en lang tur langs elva for å komme over skuffelsen. Tre uker senere fortalte naboen at man nesten alltid kan klage på et vedtak. Da var fristen allerede gått ut, og parsellene var delt ut til andre.',
        translation: 'O Linu jogou a carta fora e fez uma longa caminhada à beira do rio para superar a decepção. Três semanas depois, a vizinha contou que quase sempre dá para recorrer de uma decisão. Aí o prazo já tinha vencido, e os canteiros tinham sido distribuídos para outras pessoas.',
        ending: { tone: 'neutro', title: 'Prazo vencido', message: 'Carta oficial se lê até o fim: quase sempre há um prazo para recorrer.' },
      },
    },
  },
  // ───────────────────────── B2.3 ─────────────────────────
  {
    id: 'nb-h31',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Jalla, Linu!',
    emoji: '🛴',
    summary: 'Em Grünerløkka, em Oslo, o Linu passa uma tarde com dois adolescentes que misturam gíria do bairro com expressões idiomáticas — e precisa descobrir o que é elogio, o que é piada e o que é declaração de amor.',
    cultural_context:
      'Grünerløkka, às margens do rio Akerselva, foi um bairro operário no século XIX, cercado de fábricas têxteis movidas pela força do rio; hoje é conhecido pelos cafés, brechós e parques. Nos bairros multiculturais de Oslo nasceu uma fala jovem que os linguistas chamam de multietnoleto (e que o povo apelidou de «kebabnorsk»), com palavras de origem árabe, turca, urdu e outras, como «wolla» (juro) e «jalla» (vamos, anda logo), que se espalharam pelo país.',
    start: 'start',
    glossary: [
      ['wolla', 'juro, sério (gíria, do árabe)'],
      ['jalla', 'vamos, anda logo (gíria)'],
      ['å sjofe', 'olhar, ver (gíria)'],
      ['å chille', 'relaxar, ficar de boa (gíria)'],
      ['helt sykt', 'demais, sinistro (lit.: totalmente doente)'],
      ['å ta seg vann over hodet', 'dar um passo maior que a perna'],
      ['å ha is i magen', 'manter o sangue-frio (lit.: ter gelo na barriga)'],
      ['å snakke rett fra levra', 'falar com franqueza (lit.: direto do fígado)'],
    ],
    nodes: {
      start: {
        emoji: '🌳',
        text: 'Det var en lørdag i mai, og Linu satt på en benk i Birkelunden midt på Grünerløkka. Ved siden av ham bremset to ungdommer på sparkesykler, en gutt som het Yusuf og ei jente som het Sara. «Wolla, en pingvin på Løkka!» ropte Yusuf og lo. «Chill, han er sikkert turist», sa Sara, og hun spurte Linu om han ville bli med dem ned til elva.',
        translation:
          'Era um sábado de maio, e o Linu estava sentado num banco em Birkelunden, no meio de Grünerløkka. Ao lado dele frearam dois adolescentes de patinete, um garoto chamado Yusuf e uma garota chamada Sara. «Juro, um pinguim na Løkka!», gritou o Yusuf, rindo. «Relaxa, ele deve ser turista», disse a Sara, e perguntou ao Linu se ele queria descer com eles até o rio.',
        choices: [
          { text: 'Bli med dem ned til Akerselva.', translation: 'Descer com eles até o Akerselva.', next: 'elva' },
          { text: 'Spørre først hva «wolla» betyr.', translation: 'Perguntar primeiro o que quer dizer «wolla».', next: 'wolla' },
        ],
      },
      wolla: {
        emoji: '🗣️',
        text: '«Wolla betyr omtrent “jeg sverger” eller “seriøst”», forklarte Sara. «Det kommer fra arabisk, men nå sier alle det, også de som aldri har vært utenfor Oslo.» Yusuf la til at til og med bestemora hans hadde begynt å si det, og at det var helt sykt. Linu tenkte at språk er som elver: de tar med seg alt de møter på veien.',
        translation:
          '«Wolla quer dizer mais ou menos “eu juro” ou “sério”», explicou a Sara. «Vem do árabe, mas agora todo mundo fala, até quem nunca saiu de Oslo.» O Yusuf acrescentou que até a avó dele tinha começado a falar, e que isso era sinistro. O Linu pensou que as línguas são como rios: levam consigo tudo o que encontram pelo caminho.',
        choices: [{ text: 'Bli med dem ned til elva.', translation: 'Descer com eles até o rio.', next: 'elva' }],
      },
      elva: {
        emoji: '🏭',
        text: 'Nede ved Akerselva brølte fossen, og gamle fabrikkbygninger av rød murstein speilet seg i vannet. «Her jobbet barn på vår alder i gamle dager, tolv timer om dagen», sa Sara og pekte på et gammelt spinneri. Yusuf pekte på en gjeng som sto på en bro lenger ned, og ropte: «Sjof dem, de er helt gærne!» Linu forsto ikke ordet, men han så at alle rundt dem snudde hodet mot broen.',
        translation:
          'Lá embaixo, junto ao Akerselva, a cachoeira rugia, e velhos prédios de fábrica de tijolo vermelho se refletiam na água. «Aqui trabalhavam crianças da nossa idade antigamente, doze horas por dia», disse a Sara, apontando para uma antiga fiação. O Yusuf apontou para uma turma numa ponte mais abaixo e gritou: «Olha só eles, são totalmente malucos!» O Linu não entendeu a palavra, mas viu que todo mundo em volta virou a cabeça para a ponte.',
        choices: [
          { text: '«Å sjofe betyr altså å se på noe?»', translation: '«Então “sjofe” quer dizer olhar para alguma coisa?»', next: 'hoppe' },
          {
            text: '«Å sjofe betyr altså å hoppe i vannet?»',
            translation: '«Então “sjofe” quer dizer pular na água?»',
            wrong: 'O Yusuf disse «Sjof dem» e todos viraram a cabeça para a ponte: «sjofe» é gíria para olhar, ver. Quem estava na ponte era a turma; a palavra foi só um convite para olhar.',
          },
        ],
      },
      hoppe: {
        emoji: '🌉',
        text: '«Akkurat, du er rask!» sa Yusuf og ga Linu en high five med vingen. Så foreslo han at Linu skulle hoppe fra broen, han også, siden pingviner jo er vant til kaldt vann. Sara ristet på hodet og sa at vannet i mai var iskaldt, og at man ikke burde ta seg vann over hodet. «Det er et uttrykk», forklarte hun, «det betyr å prøve seg på noe som er for vanskelig.»',
        translation:
          '«Isso aí, você é rápido!», disse o Yusuf, e bateu na asa do Linu num “toca aqui”. Depois sugeriu que o Linu também pulasse da ponte, já que pinguins estão acostumados com água fria. A Sara balançou a cabeça e disse que a água em maio estava gelada, e que ninguém devia dar um passo maior que a perna. «É uma expressão», explicou ela, «quer dizer tentar uma coisa difícil demais para você.»',
        choices: [
          { text: 'Hoppe likevel — han er jo en pingvin.', translation: 'Pular assim mesmo — afinal, ele é um pinguim.', next: 'hopp' },
          { text: 'Takke nei og foreslå en is i stedet.', translation: 'Recusar e sugerir um sorvete em vez disso.', next: 'kafe' },
        ],
      },
      hopp: {
        emoji: '🐧',
        text: 'Linu klatret opp på rekkverket, og en liten folkemengde samlet seg for å sjofe. Han var helt rolig, og han stupte som en ekte pingvin rett ned i kulpen under broen. Da han dukket opp igjen, jublet ungdommene, og en eldre dame på gangstien klappet med paraplyen. «Helt sykt, wolla!» ropte Yusuf, «du er legende, bror!»',
        translation:
          'O Linu subiu no parapeito, e uma pequena multidão se juntou para olhar. Ele estava calmíssimo e mergulhou como um verdadeiro pinguim direto no poço debaixo da ponte. Quando voltou à superfície, a garotada vibrou, e uma senhora no caminho aplaudiu com o guarda-chuva. «Sinistro, juro!», gritou o Yusuf, «você é lenda, mano!»',
        choices: [{ text: 'Svømme i land og bli med på is.', translation: 'Nadar até a margem e ir tomar sorvete com eles.', next: 'kafe' }],
      },
      kafe: {
        emoji: '🍦',
        text: 'Litt senere satt de tre på en kafé ved Olaf Ryes plass, og Sara spanderte is på alle. «Nå har du is i magen på ordentlig», sa hun og blunket til Linu. Hun forklarte at uttrykket betyr å holde seg rolig når det gjelder, som en fotballspiller som skal ta straffe i siste minutt. Yusuf sa at han aldri hadde is i magen på prøver, men at han fikk sommerfugler i magen hver gang Sara smilte.',
        translation:
          'Um pouco depois, os três estavam num café na praça Olaf Ryes, e a Sara pagou sorvete para todo mundo. «Agora você tem gelo na barriga de verdade», disse ela, piscando para o Linu. Explicou que a expressão quer dizer manter a calma na hora H, como um jogador que vai bater um pênalti no último minuto. O Yusuf disse que nunca tinha sangue-frio nas provas, mas que ficava com borboletas na barriga toda vez que a Sara sorria.',
        choices: [
          { text: 'Le og si at Yusuf nettopp snakket rett fra levra.', translation: 'Rir e dizer que o Yusuf acabou de falar com toda a franqueza.', next: 'levra' },
          {
            text: '«Yusuf har altså vondt i magen hver gang Sara smiler?»',
            translation: '«Então o Yusuf fica com dor de barriga toda vez que a Sara sorri?»',
            wrong: '«Få sommerfugler i magen» é ficar com borboletas na barriga, como em português: nervoso ou apaixonado. O Yusuf não está doente; acabou de confessar, meio sem querer, que gosta da Sara.',
          },
        ],
      },
      levra: {
        emoji: '💬',
        text: '«Å snakke rett fra levra betyr å si det man mener, helt ærlig», sa Linu, stolt over at han kunne enda et uttrykk. Yusuf ble rød som en tomat, og Sara stirret lenge ned i isbegeret sitt. Så sa hun lavt at hun hadde skjønt det for lenge siden, og at det slett ikke var noen krise. «Men nå må du ikke ta helt av», la hun til og smilte skjevt.',
        translation:
          '«Falar direto do fígado quer dizer dizer o que se pensa, com toda a sinceridade», disse o Linu, orgulhoso por saber mais uma expressão. O Yusuf ficou vermelho como um tomate, e a Sara ficou um bom tempo olhando para o copinho de sorvete. Depois disse baixinho que já tinha percebido havia muito tempo, e que não era problema nenhum. «Mas agora não vai se empolgar demais», acrescentou, com um sorriso torto.',
        choices: [
          { text: 'Foreslå at de tre går til Sofienbergparken sammen.', translation: 'Sugerir que os três sigam juntos para o parque Sofienberg.', next: 'final_bom' },
          { text: 'Si at det er på tide å dra, og la dem være i fred.', translation: 'Dizer que está na hora de ir embora e deixar os dois em paz.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🌇',
        text: 'I Sofienbergparken lå halve Løkka på plenene, og noen spilte gitar under et tre. Yusuf og Sara satt tett inntil hverandre, og Linu lot som om han var veldig opptatt av musikken. Da solen gikk ned bak takene, lærte de ham et siste ord: «jalla», som betyr «kom igjen» eller «fort deg». «Jalla, Linu, vi ses neste lørdag!» ropte de, og Linu gikk hjem med et nytt ordforråd og et varmt hjerte.',
        translation:
          'No parque Sofienberg, meia Løkka estava deitada na grama, e alguém tocava violão debaixo de uma árvore. O Yusuf e a Sara sentaram bem juntinhos, e o Linu fingiu estar muito interessado na música. Quando o sol se pôs atrás dos telhados, eles lhe ensinaram uma última palavra: «jalla», que quer dizer «vamos» ou «anda logo». «Jalla, Linu, até sábado que vem!», gritaram, e o Linu foi para casa com um vocabulário novo e o coração quentinho.',
        ending: { tone: 'bom', title: 'Jalla, até sábado!', message: 'Você entendeu a gíria de Oslo, o trocadilho com «is» (gelo e sorvete) e as expressões idiomáticas — e ainda ajudou um casal a se formar.' },
      },
      final_neutro: {
        emoji: '📓',
        text: 'Linu sa ha det og vraltet hjemover langs elva, mens fossen brølte bak ham. Han hadde lært mange nye ord, men han var ikke sikker på om han hadde brukt dem riktig. Hjemme skrev han dem ned i en notatbok: wolla, sjofe, chille, is i magen. Neste gang, tenkte han, skulle han bli litt lenger og sjofe litt mer.',
        translation:
          'O Linu se despediu e foi gingando para casa ao longo do rio, enquanto a cachoeira rugia atrás dele. Tinha aprendido muitas palavras novas, mas não tinha certeza de que as usara direito. Em casa, anotou todas num caderninho: wolla, sjofe, chille, is i magen. Na próxima vez, pensou, ia ficar um pouco mais e olhar um pouco mais.',
        ending: { tone: 'neutro', title: 'Caderninho de gírias', message: 'Você entendeu a tarde, mas saiu antes do melhor. A Løkka continua lá, esperando um segundo sábado.' },
      },
    },
  },
  {
    id: 'nb-h32',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Det går på skinner',
    emoji: '🚲',
    summary: 'Em Trondheim, a estudante Ingrid mostra ao Linu o elevador de bicicletas de Bakklandet, algumas palavras em trøndersk e a arte de montar palavras compostas a caminho da catedral de Nidaros.',
    cultural_context:
      'O elevador de bicicletas da ladeira Brubakken, no bairro de Bakklandet, em Trondheim, foi inaugurado em 1993 e é considerado o primeiro do mundo: o ciclista apoia um pé numa plaquinha que corre num trilho e é empurrado ladeira acima. A catedral de Nidaros foi erguida sobre o túmulo de Olavo, o Santo, morto em 1030, e recebe peregrinos há quase mil anos.',
    start: 'start',
    glossary: [
      ['æ / itj', 'jeg / ikke (eu / não, em trøndersk)'],
      ['en sykkelheis', 'um elevador de bicicletas'],
      ['å gå på trynet', 'cair de cara; fracassar'],
      ['det går på skinner', 'vai sobre trilhos, vai às mil maravilhas'],
      ['å stå på', 'dar duro, não desistir'],
      ['å slå to fluer i en smekk', 'matar dois coelhos com uma cajadada só'],
      ['å koste skjorta', 'custar os olhos da cara (lit.: custar a camisa)'],
      ['en trønderbart', 'o bigode típico dos homens de Trøndelag'],
    ],
    nodes: {
      start: {
        emoji: '⛰️',
        text: 'Linu sto ved foten av Brubakken på Bakklandet og så opp på den bratte bakken med en leid sykkel ved siden av seg. Sammen med ham var Ingrid, en student som hadde lovet å vise ham byen. «Æ e fra Trondheim, så du får tåle litt trøndersk», sa hun og lo. Hun pekte på en metallskinne i asfalten og forklarte at det var verdens første sykkelheis.',
        translation:
          'O Linu estava ao pé da Brubakken, em Bakklandet, olhando para a ladeira íngreme, com uma bicicleta alugada ao lado. Com ele estava a Ingrid, uma estudante que tinha prometido mostrar a cidade. «Eu sou de Trondheim, então você vai ter que aguentar um pouco de trøndersk», disse ela, rindo. Ela apontou para um trilho de metal no asfalto e explicou que era o primeiro elevador de bicicletas do mundo.',
        choices: [
          { text: 'Prøve sykkelheisen.', translation: 'Experimentar o elevador de bicicletas.', next: 'heis' },
          { text: 'Trille sykkelen opp bakken til fots.', translation: 'Empurrar a bicicleta ladeira acima, a pé.', next: 'tilfots' },
          {
            text: '«Skal vi altså ta en vanlig heis inne i et hus?»',
            translation: '«Então vamos pegar um elevador comum dentro de um prédio?»',
            wrong: 'A Ingrid apontou um trilho no asfalto: a «sykkelheis» (sykkel + heis, bicicleta + elevador) fica na própria rua e empurra o ciclista ladeira acima. Não há prédio nenhum.',
          },
        ],
      },
      heis: {
        emoji: '🛗',
        text: 'Linu satte høyre fot på fotplaten, og plutselig ble han skjøvet oppover i jevnt tempo. Halvveis oppe mistet han balansen og holdt på å gå på trynet, men Ingrid ropte: «Len dæ fram, og stå på!» Han lente seg fram, og resten av turen gikk som på skinner. På toppen var han andpusten, men stolt, selv om han ikke hadde tråkket en eneste gang.',
        translation:
          'O Linu pôs o pé direito na plaquinha e de repente foi empurrado para cima num ritmo constante. No meio da subida perdeu o equilíbrio e quase caiu de cara, mas a Ingrid gritou: «Incline o corpo para a frente e não desista!» Ele se inclinou, e o resto da subida foi sobre trilhos. Lá em cima estava sem fôlego, mas orgulhoso, embora não tivesse pedalado nem uma vez.',
        choices: [{ text: 'Spørre hva «å gå på trynet» betyr.', translation: 'Perguntar o que quer dizer «gå på trynet».', next: 'uttrykk' }],
      },
      tilfots: {
        emoji: '🥵',
        text: 'Linu trillet sykkelen oppover, og etter ti meter var han allerede andpusten. Ingrid gikk ved siden av og fortalte at trøndere sier «itj» der andre nordmenn sier «ikke», og «æ» i stedet for «jeg». «Du må itj gi opp nu», sa hun, «det e bare hundre meter igjen.» Da de endelig kom opp, sa hun at han hadde stått på som en ekte trønder.',
        translation:
          'O Linu foi empurrando a bicicleta ladeira acima, e depois de dez metros já estava sem fôlego. A Ingrid caminhava ao lado e contou que os trønder dizem «itj» onde os outros noruegueses dizem «ikke», e «æ» em vez de «jeg». «Não vai desistir agora», disse ela, «só faltam uns cem metros.» Quando finalmente chegaram lá em cima, ela disse que ele tinha dado duro como um verdadeiro trønder.',
        choices: [{ text: 'Be om flere uttrykk.', translation: 'Pedir mais expressões.', next: 'uttrykk' }],
      },
      uttrykk: {
        emoji: '🏘️',
        text: 'De satte seg på en benk med utsikt over Nidelva og de fargerike bryggene langs elvebredden. Ingrid forklarte at «å gå på trynet» betyr å falle, men også å mislykkes, for eksempel når en eksamen går dårlig. «Og når noe går på skinner, går det helt glatt, akkurat som sykkelheisen når man står riktig», sa hun. Så foreslo hun en lek: Linu skulle finne så mange sammensatte ord som mulig på veien til Nidarosdomen.',
        translation:
          'Os dois se sentaram num banco com vista para o rio Nid e os armazéns coloridos ao longo da margem. A Ingrid explicou que «gå på trynet» é cair de cara, mas também fracassar, por exemplo quando uma prova vai mal. «E quando uma coisa vai sobre trilhos, vai lisinha, igual ao elevador quando a gente fica na posição certa», disse ela. Então propôs uma brincadeira: o Linu devia achar o máximo de palavras compostas no caminho até a catedral de Nidaros.',
        choices: [{ text: 'Takke ja til leken.', translation: 'Aceitar a brincadeira.', next: 'ordlek' }],
      },
      ordlek: {
        emoji: '🧩',
        text: 'På vei over Gamle Bybro ramset de opp ord: bybro, elvebredd, bryggerekke. Linu fant «sykkelheis», «studentby» og «pilegrimsvei», og Ingrid fant «trønderbart», en bart som bare ekte trøndere kan bære, påsto hun. «Sammensatte ord er som byggeklosser», sa hun, «man bygger så lange man vil, og det siste ordet bestemmer kjønnet.» Hun spurte om han visste om det het «en» eller «et domkirkeorgel».',
        translation:
          'Atravessando a Ponte Velha, foram enfileirando palavras: bybro (ponte da cidade), elvebredd (margem do rio), bryggerekke (fileira de armazéns). O Linu achou «sykkelheis», «studentby» (cidade universitária) e «pilegrimsvei» (caminho de peregrinos), e a Ingrid achou «trønderbart», um bigode que só os verdadeiros trønder sabem usar, garantiu ela. «Palavras compostas são como blocos de montar», disse ela, «a gente monta do tamanho que quiser, e é a última palavra que decide o gênero.» Ela perguntou se ele sabia se era «en» ou «et domkirkeorgel» (órgão da catedral).',
        choices: [
          { text: '«Et domkirkeorgel, fordi det heter et orgel.»', translation: '«Et domkirkeorgel, porque se diz “et orgel”.»', next: 'domen' },
          {
            text: '«En domkirkeorgel, fordi det heter en domkirke.»',
            translation: '«En domkirkeorgel, porque se diz “en domkirke”.»',
            wrong: 'A Ingrid acabou de explicar: nas palavras compostas, quem decide o gênero é a ÚLTIMA palavra. «Orgel» é neutro («et orgel»), então é «et domkirkeorgel», mesmo que «domkirke» seja «en».',
          },
        ],
      },
      domen: {
        emoji: '⛪',
        text: 'Ingrid klappet i hendene og sa at han hadde slått to fluer i en smekk: han hadde lært grammatikk og vunnet leken. Foran dem reiste Nidarosdomen seg, grå og mektig, med vestfronten full av steinfigurer. Hun fortalte at kirken ble bygd over graven til Olav den hellige, og at pilegrimer har gått hit i nesten tusen år. «Skal vi gå inn, eller skal vi ta det med ro på en kafé?» spurte hun.',
        translation:
          'A Ingrid bateu palmas e disse que ele tinha matado dois coelhos com uma cajadada só: aprendeu gramática e ganhou a brincadeira. Diante deles se erguia a catedral de Nidaros, cinzenta e imponente, com a fachada oeste cheia de estátuas de pedra. Ela contou que a igreja foi construída sobre o túmulo de Olavo, o Santo, e que há quase mil anos chegam peregrinos ali. «Vamos entrar, ou vamos descansar num café?», perguntou ela.',
        choices: [
          { text: 'Gå inn i domkirken.', translation: 'Entrar na catedral.', next: 'inne' },
          { text: 'Gå på kafé på Bakklandet.', translation: 'Ir a um café em Bakklandet.', next: 'final_neutro' },
        ],
      },
      inne: {
        emoji: '🕯️',
        text: 'Inne i kirken var det kjølig og stille, og lyset falt i alle regnbuens farger gjennom rosevinduet. Linu hvisket at det sikkert hadde kostet skjorta å bygge noe så stort. Ingrid hvisket tilbake at det hadde kostet mer enn skjorta: byggingen tok flere hundre år, og restaureringen blir egentlig aldri ferdig. Hun spurte om han ville gå opp i tårnet og se hele byen, men da måtte han tåle mange trapper.',
        translation:
          'Dentro da igreja estava fresco e silencioso, e a luz entrava com todas as cores do arco-íris pela rosácea. O Linu cochichou que devia ter custado os olhos da cara construir uma coisa tão grande. A Ingrid cochichou de volta que tinha custado mais do que isso: a construção levou vários séculos, e a restauração, na verdade, nunca termina. Perguntou se ele queria subir na torre e ver a cidade inteira, mas aí ia ter que aguentar muita escada.',
        choices: [
          { text: 'Gå opp i tårnet.', translation: 'Subir na torre.', next: 'final_bom' },
          { text: 'Si at beina er ferdige for i dag.', translation: 'Dizer que as pernas já deram o que tinham que dar hoje.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🌄',
        text: 'Etter utallige trappetrinn sto de øverst i tårnet, og hele Trondheim lå under dem: elva som slynget seg, bryggene, fjorden og Munkholmen ute i vannet. «Nu e du en ekte trønder», sa Ingrid, «du har stått på og kommet helt til topps.» Linu tenkte at dagen hadde gått som på skinner, i hvert fall nesten. Han lovet seg selv å lære seg å si «itj» før neste besøk.',
        translation:
          'Depois de incontáveis degraus, estavam no alto da torre, e Trondheim inteira se estendia lá embaixo: o rio serpenteando, os armazéns, o fiorde e a ilhota de Munkholmen na água. «Agora você é um verdadeiro trønder», disse a Ingrid, «deu duro e chegou lá no topo.» O Linu pensou que o dia tinha ido sobre trilhos, pelo menos quase. Prometeu a si mesmo aprender a dizer «itj» antes da próxima visita.',
        ending: { tone: 'bom', title: 'Lá no topo', message: 'Você entendeu as expressões, o trøndersk e a regra de ouro das palavras compostas: quem manda no gênero é a última palavra.' },
      },
      final_neutro: {
        emoji: '🥐',
        text: 'De gikk ned til en liten kafé på Bakklandet og bestilte hver sin kanelbolle, og Linu la beina høyt. Ingrid lo og sa at han var helt ute å kjøre etter bare én bakke. Han protesterte ikke, for kanelbollen var stor som et sykkelhjul og minst like god som den så ut. Tårnet fikk vente til neste gang, men uttrykkene tok han med seg hjem.',
        translation:
          'Desceram até um cafezinho em Bakklandet e pediram um pão de canela cada um, e o Linu pôs as pernas para cima. A Ingrid riu e disse que ele estava acabado depois de uma ladeira só. Ele não protestou, porque o pão de canela era do tamanho de uma roda de bicicleta e tão bom quanto parecia. A torre ia ficar para a próxima, mas as expressões ele levou para casa.',
        ending: { tone: 'neutro', title: 'Pão de canela', message: 'Você acompanhou o passeio, mas não subiu até o topo. Trondheim ainda guarda a melhor vista para a próxima visita.' },
      },
    },
  },
  {
    id: 'nb-h33',
    level: 'B2.3',
    cefr: 'B2',
    title: 'I samme båt',
    emoji: '⛵',
    summary: 'Em Arendal, o Linu passa um dia como ajudante da Bjørg, que aluga um velho barco de madeira, e aprende que o norueguês está cheio de expressões que vieram do mar.',
    cultural_context:
      'Arendal, no Sørlandet, o sul da Noruega, foi uma das maiores cidades de navegação do país no século XIX, na época dos veleiros, e o bairro de Tyholmen ainda guarda casas de madeira brancas em volta do porto, o Pollen. Como a vida de tantos noruegueses dependia do mar, a língua está cheia de expressões náuticas: «sitte i samme båt», «ha vind i seilene», «gå på grunn».',
    start: 'start',
    glossary: [
      ['å sitte i samme båt', 'estar no mesmo barco (na mesma situação)'],
      ['å ha vind i seilene', 'estar com o vento a favor'],
      ['en skipsreder', 'um armador (dono de navios)'],
      ['en sjekte', 'um barquinho de madeira típico da costa'],
      ['en skjærgård', 'um arquipélago de ilhotas junto à costa'],
      ['å være på bølgelengde', 'estar na mesma sintonia'],
      ['å ro seg i land', 'recuar com elegância, dar o braço a torcer'],
      ['å kaste loss', 'soltar as amarras, zarpar'],
    ],
    nodes: {
      start: {
        emoji: '⚓',
        text: 'I Arendal glitret vannet i Pollen, og de hvite trehusene på Tyholmen lyste i sommersolen. Linu hadde fått jobb for en dag hos Bjørg, en eldre dame som leide ut en gammel sjekte til turister. «I dag sitter vi i samme båt, du og jeg», sa hun og ga ham en redningsvest. «Det betyr at vi har det samme problemet: motoren hoster, og tre gjester skal til Merdø klokka ti.»',
        translation:
          'Em Arendal, a água do Pollen cintilava, e as casas de madeira brancas de Tyholmen brilhavam no sol de verão. O Linu tinha arrumado trabalho por um dia com a Bjørg, uma senhora que alugava um velho barquinho de madeira para turistas. «Hoje estamos no mesmo barco, você e eu», disse ela, entregando-lhe um colete salva-vidas. «Quer dizer que temos o mesmo problema: o motor está tossindo, e três passageiros vão para Merdø às dez.»',
        choices: [
          { text: 'Tilby å se på motoren.', translation: 'Oferecer-se para dar uma olhada no motor.', next: 'motor' },
          { text: 'Foreslå å ro i stedet.', translation: 'Sugerir remar em vez disso.', next: 'ro' },
          {
            text: '«Du mener altså at vi skal sitte i båten hele dagen uten gjester?»',
            translation: '«Você quer dizer que vamos ficar sentados no barco o dia inteiro, sem passageiros?»',
            wrong: 'A Bjørg explicou a expressão: «sitte i samme båt» é estar na mesma situação, com o mesmo problema — aqui, o motor tossindo e três passageiros para levar a Merdø às dez.',
          },
        ],
      },
      ro: {
        emoji: '🚣',
        text: 'Bjørg lo så hun måtte holde seg i ripa. «Å ro til Merdø med tre turister? Da tar vi oss vann over hodet, vennen min», sa hun. Linu tok årene likevel og viste at han i hvert fall kunne ro rundt i Pollen, og en liten gutt på brygga klappet. Etterpå la han årene fra seg og innrømmet at motoren nok var en bedre idé.',
        translation:
          'A Bjørg riu tanto que teve que se segurar na borda do barco. «Remar até Merdø com três turistas? Aí a gente dá um passo maior que a perna, meu querido», disse ela. O Linu pegou os remos mesmo assim e mostrou que pelo menos sabia remar pelo Pollen, e um menininho no cais aplaudiu. Depois largou os remos e admitiu que o motor devia ser uma ideia melhor.',
        choices: [{ text: 'Se på motoren likevel.', translation: 'Olhar o motor, afinal.', next: 'motor' }],
      },
      motor: {
        emoji: '🔧',
        text: 'Linu la seg på kne i båten og lyttet til motoren, som hostet som en gammel sjømann med forkjølelse. Han fant en løs ledning, festet den og ba Bjørg prøve igjen. Motoren startet med et dunk og gikk jevnt, og Bjørg utbrøt at nå hadde de virkelig vind i seilene. «Det sier vi når alt går bra», forklarte hun, «selv om denne båten aldri har hatt seil.»',
        translation:
          'O Linu se ajoelhou no barco e escutou o motor, que tossia como um velho marinheiro resfriado. Achou um fio solto, prendeu-o e pediu à Bjørg que tentasse de novo. O motor pegou com um baque e passou a funcionar redondinho, e a Bjørg exclamou que agora sim estavam com o vento a favor. «A gente diz isso quando tudo vai bem», explicou ela, «mesmo que este barco nunca tenha tido vela.»',
        choices: [{ text: 'Ønske gjestene velkommen om bord.', translation: 'Dar as boas-vindas aos passageiros a bordo.', next: 'gjester' }],
      },
      gjester: {
        emoji: '👨‍👩‍👧',
        text: 'Gjestene var en familie fra Bergen: en far, en mor og en tenåringsdatter som så ut som hun helst ville vært et helt annet sted. Mens båten gled ut mellom holmene, fortalte Bjørg at Arendal en gang var en av de største sjøfartsbyene i landet, med hundrevis av seilskuter. «Skipsredere, skipsbyggere og sjømannskoner — hele byen levde av havet», sa hun. Datteren tok ut øreproppene og spurte hva en skipsreder egentlig var.',
        translation:
          'Os passageiros eram uma família de Bergen: um pai, uma mãe e uma filha adolescente com cara de quem preferia estar em qualquer outro lugar. Enquanto o barco deslizava entre as ilhotas, a Bjørg contou que Arendal já tinha sido uma das maiores cidades de navegação do país, com centenas de veleiros. «Armadores, construtores de navios e mulheres de marinheiro — a cidade inteira vivia do mar», disse ela. A filha tirou os fones de ouvido e perguntou o que era, afinal, um armador.',
        choices: [{ text: 'La Bjørg forklare ordet.', translation: 'Deixar a Bjørg explicar a palavra.', next: 'ord' }],
      },
      ord: {
        emoji: '🧩',
        text: '«En skipsreder er en som eier skip og tjener penger på dem, og ordet er bare skip og reder satt sammen», sa Bjørg. Så ga hun dem en konkurranse: Hvem kunne lage det lengste ordet om livet på sjøen? Faren foreslo «sjømannskirke», moren «fyrlykt», og datteren sa etter en stund «redningsvestlomme» og så fornøyd ut for første gang. Alle så på Linu, som tenkte lenge før han la fram forslaget sitt.',
        translation:
          '«Um armador é quem é dono de navios e ganha dinheiro com eles, e a palavra é só “skip” e “reder” juntos», disse a Bjørg. Depois propôs um concurso: quem conseguia montar a palavra mais comprida sobre a vida no mar? O pai sugeriu «sjømannskirke» (igreja de marinheiros), a mãe «fyrlykt» (farol), e a filha, depois de um tempo, disse «redningsvestlomme» (bolso de colete salva-vidas) e pareceu satisfeita pela primeira vez. Todos olharam para o Linu, que pensou bastante antes de apresentar a sua proposta.',
        choices: [
          { text: '«Skjærgårdsbåtutleiedame!»', translation: '«Senhora-que-aluga-barcos-no-arquipélago!»', next: 'merdo' },
          {
            text: '«Moren vinner, for fyrlykt er det lengste ordet.»',
            translation: '«A mãe ganha, porque “fyrlykt” é a palavra mais comprida.»',
            wrong: 'Conte as letras: «fyrlykt» tem 7, e «redningsvestlomme» tem 16. O concurso era de quem montava a palavra composta mais longa, e até agora a filha estava ganhando.',
          },
        ],
      },
      merdo: {
        emoji: '🏝️',
        text: 'Alle lo, og Bjørg sa at hun ville ha det ordet på et skilt ved brygga. Snart la de til på Merdø, en liten øy med et gammelt skipperhus, noen hvite hus og en sandstrand. Plutselig mørknet himmelen i sør, vinden frisket på, og Bjørg så bekymret mot horisonten. «Vi kan enten vente her til bygen er over, eller kjøre hjem nå før det blir verre», sa hun.',
        translation:
          'Todo mundo riu, e a Bjørg disse que queria aquela palavra numa placa no cais. Logo atracaram em Merdø, uma ilhota com uma antiga casa de capitão, algumas casas brancas e uma prainha de areia. De repente o céu escureceu ao sul, o vento apertou, e a Bjørg olhou preocupada para o horizonte. «Podemos esperar aqui até a pancada de chuva passar, ou voltar agora, antes que piore», disse ela.',
        choices: [
          { text: 'Foreslå å vente på Merdø.', translation: 'Sugerir esperar em Merdø.', next: 'vente' },
          { text: 'Foreslå å kjøre hjem med én gang.', translation: 'Sugerir voltar para casa imediatamente.', next: 'hjem' },
        ],
      },
      vente: {
        emoji: '🦐',
        text: 'De satte seg under taket på et gammelt naust og spiste reker mens regnet trommet. Datteren fortalte at hun egentlig ikke hadde hatt lyst til å bli med, men at dette var det beste som hadde skjedd hele ferien. «Her ute må man ta ting som de kommer», sa Bjørg, «det er havet som bestemmer, ikke vi.» Etter en halvtime var bygen over, og solen kom fram igjen over skjærgården.',
        translation:
          'Sentaram-se debaixo do telhado de um velho galpão de barcos e comeram camarão enquanto a chuva tamborilava. A filha contou que na verdade não queria ter vindo, mas que aquilo era a melhor coisa que tinha acontecido nas férias inteiras. «Aqui fora a gente tem que aceitar as coisas como elas vêm», disse a Bjørg, «quem decide é o mar, não nós.» Depois de meia hora a chuva passou, e o sol voltou a aparecer sobre o arquipélago.',
        choices: [{ text: 'Kaste loss og kjøre tilbake i solskinnet.', translation: 'Soltar as amarras e voltar no sol.', next: 'final_bom' }],
      },
      hjem: {
        emoji: '🌧️',
        text: 'Bjørg ga full gass, men halvveis hjem kom regnet som fra en bøtte, og bølgene slo over ripa. Alle ble våte til skinnet, og faren sa at han følte at de holdt på å gå på grunn, i hvert fall i overført betydning. Bjørg styrte trygt inn i Pollen, men turen ble ikke helt som planlagt. «Noen ganger må man bare ro seg i land og innrømme at man burde ha ventet», sa hun.',
        translation:
          'A Bjørg acelerou tudo, mas no meio do caminho a chuva desabou como de um balde, e as ondas passavam por cima da borda. Todos ficaram encharcados até os ossos, e o pai disse que sentia que estavam prestes a encalhar, pelo menos no sentido figurado. A Bjørg entrou no Pollen em segurança, mas o passeio não saiu bem como o planejado. «Às vezes a gente tem que dar o braço a torcer e admitir que devia ter esperado», disse ela.',
        choices: [{ text: 'Fortøye båten og gå hjem for å tørke seg.', translation: 'Amarrar o barco e ir para casa se secar.', next: 'final_neutro' }],
      },
      final_bom: {
        emoji: '🌞',
        text: 'Da de kom tilbake til Arendal, ga faren Bjørg rikelig med driks, og datteren tok et bilde av Linu ved roret. Bjørg la armen rundt ham og sa at de hadde vært på bølgelengde hele dagen. «Du kan jobbe her når du vil, for sammen holder vi hodet over vannet, uansett vær», sa hun. Linu gikk hjem langs Pollen med salt i fjærene og hodet fullt av lange, rare ord.',
        translation:
          'Quando voltaram a Arendal, o pai deu à Bjørg uma gorjeta generosa, e a filha tirou uma foto do Linu no leme. A Bjørg pôs o braço em volta dele e disse que os dois tinham estado na mesma sintonia o dia inteiro. «Você pode trabalhar aqui quando quiser, porque juntos a gente mantém a cabeça fora d’água, faça o tempo que fizer», disse ela. O Linu voltou para casa pela beira do Pollen, com sal nas penas e a cabeça cheia de palavras compridas e esquisitas.',
        ending: { tone: 'bom', title: 'Vento nas velas', message: 'Você entendeu as expressões náuticas, o concurso de palavras compostas e ainda fez a escolha mais sábia: esperar o mar se acalmar.' },
      },
      final_neutro: {
        emoji: '🧺',
        text: 'Om kvelden hengte Linu de våte klærne til tørk og tenkte tilbake på dagen. Motoren hadde gått, gjestene hadde sett Merdø, men regnet hadde vasket bort det meste av stemningen. Bjørg ringte og sa at han ikke skulle ta det tungt, for slik er livet på sjøen. «Neste gang sjekker vi værmeldingen før vi kaster loss», sa hun, og Linu lovet å huske det.',
        translation:
          'À noite, o Linu pendurou a roupa molhada para secar e ficou pensando no dia. O motor tinha funcionado, os passageiros tinham visto Merdø, mas a chuva tinha lavado quase todo o clima bom. A Bjørg ligou e disse que ele não devia ficar chateado, porque a vida no mar é assim. «Da próxima vez a gente olha a previsão do tempo antes de soltar as amarras», disse ela, e o Linu prometeu não esquecer.',
        ending: { tone: 'neutro', title: 'Molhado até os ossos', message: 'Você entendeu a história e as expressões, mas a pressa trouxe chuva. No mar, às vezes, esperar é a melhor escolha.' },
      },
    },
  },
  // ───────────────────────── B2.4 ─────────────────────────
  {
    id: 'nb-h34',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Fjellet eller tunet?',
    emoji: '🪂',
    summary: 'Em Voss, a família que hospeda o Linu discute na mesa do jantar como ele deve passar o último dia: voando de parapente, como quer a neta, ou conhecendo as casas antigas da região, como quer o avô.',
    cultural_context:
      'Voss, entre Bergen e os fiordes, é conhecida como a capital norueguesa dos esportes radicais: todo verão, desde o fim dos anos 1990, recebe uma semana de festival com paraquedismo, parapente, caiaque e outros esportes. Ao mesmo tempo, guarda tradições antigas, como o «smalahove», a cabeça de ovelha defumada, e o museu ao ar livre de Mølstertunet, com casas de fazenda de séculos atrás.',
    start: 'start',
    glossary: [
      ['for det første', 'em primeiro lugar'],
      ['dessuten', 'além disso'],
      ['derimot', 'por outro lado, ao contrário'],
      ['riktignok … men', 'é verdade que… mas'],
      ['på den ene siden … på den andre siden', 'por um lado… por outro lado'],
      ['altså', 'portanto, ou seja'],
      ['likevel', 'mesmo assim'],
      ['et smalahove', 'uma cabeça de ovelha defumada, prato tradicional de Voss'],
    ],
    nodes: {
      start: {
        emoji: '🍽️',
        text: 'Det var kveld i Vossevangen, og rundt kjøkkenbordet hos familien Lid var stemningen høylytt. Linu hadde bare én dag igjen på Voss, og alle hadde en mening om hvordan han burde bruke den. Barnebarnet Kari, som var sytten år, mente at han måtte prøve paragliding fra fjellet over byen. Bestefar Sjur, derimot, slo i bordet og sa at en gjest på Voss først og fremst måtte lære noe om bygda.',
        translation:
          'Era noite em Vossevangen, e em volta da mesa da cozinha da família Lid o clima estava barulhento. O Linu só tinha mais um dia em Voss, e todos tinham uma opinião sobre como ele devia aproveitá-lo. A neta Kari, de dezessete anos, achava que ele precisava experimentar parapente do alto da montanha sobre a cidade. O avô Sjur, ao contrário, bateu na mesa e disse que um hóspede em Voss tinha, antes de tudo, que aprender alguma coisa sobre a região.',
        choices: [
          { text: 'Be Kari legge fram argumentene sine.', translation: 'Pedir à Kari que apresente os seus argumentos.', next: 'kari' },
          { text: 'Spørre hva det er som lukter så rart fra kjøleskapet.', translation: 'Perguntar o que é que está com um cheiro tão estranho na geladeira.', next: 'smalahove' },
          {
            text: '«Bestefar vil altså også at jeg skal fly?»',
            translation: '«Então o avô também quer que eu voe?»',
            wrong: '«Derimot» marca contraste: a Kari quer que ele voe de parapente; o avô Sjur, ao contrário, acha que o hóspede deve primeiro aprender sobre a região.',
          },
        ],
      },
      smalahove: {
        emoji: '🐑',
        text: '«Det er smalahove, et røykt sauehode som vi koker og spiser med potetstappe og kålrabistappe», sa Marit, moren til Kari, og smilte. Hun forklarte at retten kom av fattigdom, for på gårdene kastet man ingenting, heller ikke hodet. «I dag er det nesten en fest, og folk kommer langt for å smake», sa hun. Kari himlet med øynene og sa at nå var det på tide å snakke om noe mer spennende enn sauehoder.',
        translation:
          '«É smalahove, uma cabeça de ovelha defumada que a gente cozinha e come com purê de batata e purê de nabo», disse a Marit, mãe da Kari, sorrindo. Ela explicou que o prato nasceu da pobreza, porque nas fazendas não se jogava nada fora, nem a cabeça. «Hoje é quase uma festa, e as pessoas vêm de longe para provar», disse. A Kari revirou os olhos e disse que estava na hora de falar de algo mais empolgante do que cabeças de ovelha.',
        choices: [{ text: 'La Kari legge fram argumentene sine.', translation: 'Deixar a Kari apresentar os seus argumentos.', next: 'kari' }],
      },
      kari: {
        emoji: '🗣️',
        text: '«For det første er det mye tryggere enn det ser ut, for du flyr sammen med en instruktør», begynte Kari. «Dessuten er utsikten over vannet og fjellene helt vill, og det er jo derfor folk kommer hit fra hele verden.» Hun la til at Voss ikke bare er gamle hus og sauehoder, men også et sted der folk tør å prøve nye ting. «Man lever bare én gang, altså må man gripe sjansen når den kommer», avsluttet hun.',
        translation:
          '«Em primeiro lugar, é muito mais seguro do que parece, porque você voa junto com um instrutor», começou a Kari. «Além disso, a vista do lago e das montanhas é absurda, e é justamente por isso que vem gente do mundo inteiro.» Ela acrescentou que Voss não é só casas velhas e cabeças de ovelha, mas também um lugar onde as pessoas têm coragem de experimentar coisas novas. «Só se vive uma vez, portanto é preciso agarrar a chance quando ela aparece», concluiu.',
        choices: [{ text: 'Høre hva bestefar Sjur svarer.', translation: 'Ouvir o que o avô Sjur responde.', next: 'sjur' }],
      },
      sjur: {
        emoji: '👴',
        text: 'Bestefar Sjur hadde hørt tålmodig på, men nå kremtet han. «Riktignok er utsikten fin, det skal jeg ikke nekte for, men den kan du se fra en benk også, uten å henge i en tråd», sa han. Han mente at Linu burde besøke Mølstertunet, der gamle gårdshus viser hvordan folk levde på Voss i hundrevis av år. «Ellers reiser du herfra og tror at bygda er en fornøyelsespark, og det ville vært synd», sa han.',
        translation:
          'O avô Sjur tinha escutado com paciência, mas agora pigarreou. «É verdade que a vista é bonita, isso eu não nego, mas dá para vê-la de um banco também, sem ficar pendurado num fio», disse ele. Ele achava que o Linu devia visitar Mølstertunet, onde velhas casas de fazenda mostram como as pessoas viveram em Voss durante centenas de anos. «Senão você vai embora daqui achando que a região é um parque de diversões, e isso seria uma pena», disse.',
        choices: [{ text: 'Spørre Marit hva hun mener.', translation: 'Perguntar à Marit o que ela acha.', next: 'marit' }],
      },
      marit: {
        emoji: '☕',
        text: 'Marit satte fram kaffe og sa at hun forsto begge sider. «På den ene siden har Kari rett i at du ikke kommer til Voss hver dag, på den andre siden har far rett i at du bør forstå stedet du er på», sa hun. Hun påpekte dessuten at værmeldingen lovet sterk vind om ettermiddagen, og at ingen instruktør tar med seg gjester i sånt vær. «Altså er formiddagen den eneste muligheten hvis du vil fly», oppsummerte hun.',
        translation:
          'A Marit serviu café e disse que entendia os dois lados. «Por um lado, a Kari tem razão em dizer que você não vem a Voss todo dia; por outro, o pai tem razão em dizer que você deve entender o lugar onde está», falou. Ela ainda observou que a previsão do tempo prometia vento forte à tarde, e que nenhum instrutor leva passageiros com um tempo desses. «Portanto, a manhã é a única chance, se você quiser voar», resumiu.',
        choices: [
          { text: '«Da flyr jeg om formiddagen og går på Mølstertunet etterpå.»', translation: '«Então eu voo de manhã e vou a Mølstertunet depois.»', next: 'flyr' },
          { text: '«Da dropper jeg flyturen og bruker hele dagen på Mølstertunet.»', translation: '«Então eu desisto do voo e passo o dia inteiro em Mølstertunet.»', next: 'museum' },
          {
            text: '«Da venter jeg heller til ettermiddagen, så får jeg mer vind under vingene.»',
            translation: '«Então prefiro esperar a tarde, assim tenho mais vento debaixo das asas.»',
            wrong: 'A Marit disse que à tarde vai ventar forte e que nenhum instrutor voa com passageiros nessas condições; «altså» (portanto), a manhã é a única chance de voar. Deixar para a tarde é justamente o que não dá.',
          },
        ],
      },
      flyr: {
        emoji: '🪂',
        text: 'Kari jublet, og selv bestefar Sjur måtte innrømme at det var et fornuftig kompromiss. Neste morgen sto Linu på fjellet med hjelm og sele, festet foran en rolig instruktør, og da han ropte «løp!», løp de begge mot kanten. Plutselig forsvant bakken, og under dem lå Vangsvatnet som et speil, mens gårdene i liene så ut som leker. Likevel kom Linu på bestefarens ord, og han lurte på hvem som hadde bygd de små husene der nede.',
        translation:
          'A Kari vibrou, e até o avô Sjur teve que admitir que era um meio-termo sensato. Na manhã seguinte, o Linu estava na montanha de capacete e cadeirinha, preso à frente de um instrutor tranquilo, e quando ele gritou «corre!», os dois correram para a borda. De repente o chão sumiu, e lá embaixo estava o lago Vangsvatnet como um espelho, enquanto as fazendas nas encostas pareciam brinquedos. Mesmo assim, o Linu se lembrou das palavras do avô e ficou pensando em quem tinha construído aquelas casinhas lá embaixo.',
        choices: [{ text: 'Lande og dra rett til Mølstertunet.', translation: 'Pousar e ir direto para Mølstertunet.', next: 'tunet' }],
      },
      tunet: {
        emoji: '🏚️',
        text: 'På Mølstertunet sto bestefar Sjur og ventet ved grinda, med hendene på ryggen. Han viste Linu de gamle husene med torvtak, røykstua der familien levde rundt ildstedet, og stabburet der maten ble oppbevart. «Folk her var ikke redde, de heller: de dyrket jord i bratte lier og fraktet høy ned fjellsidene», sa han. Linu forsto plutselig at bestefaren og Kari egentlig mente det samme, nemlig at folk på Voss alltid har vært modige.',
        translation:
          'Em Mølstertunet, o avô Sjur esperava junto à porteira, com as mãos nas costas. Mostrou ao Linu as casas antigas com telhado de grama, a casa de fumaça onde a família vivia em volta do fogo e o celeiro sobre pilares onde se guardava a comida. «O pessoal daqui também não tinha medo: cultivava a terra em encostas íngremes e descia o feno pelas montanhas», disse ele. O Linu entendeu de repente que o avô e a Kari, no fundo, diziam a mesma coisa: que o povo de Voss sempre foi corajoso.',
        choices: [{ text: 'Fortelle familien det ved middagsbordet.', translation: 'Contar isso à família no jantar.', next: 'final_bom' }],
      },
      museum: {
        emoji: '🌬️',
        text: 'Linu brukte hele dagen på Mølstertunet sammen med bestefar Sjur, og han lærte om torvtak, stabbur og slått i bratte lier. Det var interessant, men hver gang han så en fargerik skjerm seile over fjellet, kjente han et lite stikk i brystet. Om ettermiddagen kom vinden, akkurat som Marit hadde sagt, og da var sjansen borte. Om kvelden spurte Kari om han angret, og han svarte ærlig at han ikke visste.',
        translation:
          'O Linu passou o dia inteiro em Mølstertunet com o avô Sjur e aprendeu sobre telhados de grama, celeiros sobre pilares e a ceifa nas encostas íngremes. Foi interessante, mas toda vez que via um parapente colorido planando sobre a montanha, sentia uma pontadinha no peito. À tarde veio o vento, exatamente como a Marit tinha dito, e aí a chance acabou. À noite a Kari perguntou se ele estava arrependido, e ele respondeu com sinceridade que não sabia.',
        choices: [{ text: 'Pakke kofferten.', translation: 'Fazer a mala.', next: 'final_neutro' }],
      },
      final_bom: {
        emoji: '🥂',
        text: 'Ved middagsbordet fortalte Linu om dagen, og han avsluttet med en liten tale. «Kari mente at man må tørre å prøve noe nytt, og bestefar mente at man må kjenne historien; etter min mening er det to sider av samme sak», sa han. Bestefar Sjur løftet kaffekoppen og sa at han aldri hadde hørt et bedre argument fra en pingvin. Kari lo og sa at neste år skulle bestefar selv prøve å fly, og for første gang på lenge sa han ikke nei.',
        translation:
          'No jantar, o Linu contou como foi o dia e terminou com um pequeno discurso. «A Kari achava que é preciso ter coragem de experimentar coisas novas, e o avô achava que é preciso conhecer a história; na minha opinião, são dois lados da mesma moeda», disse ele. O avô Sjur ergueu a xícara de café e disse que nunca tinha ouvido um argumento melhor vindo de um pinguim. A Kari riu e disse que no ano seguinte o próprio avô ia experimentar voar, e pela primeira vez em muito tempo ele não disse não.',
        ending: { tone: 'bom', title: 'Dois lados da mesma moeda', message: 'Você acompanhou os argumentos, entendeu os conectores e achou o meio-termo que agradou a todos.' },
      },
      final_neutro: {
        emoji: '🚆',
        text: 'Linu reiste fra Voss dagen etter med mye kunnskap om gamle gårdshus, men uten å ha sett bygda fra lufta. På toget mot Bergen så han opp mot fjellene og tenkte at han hadde valgt det trygge, og at det slett ikke var galt. Likevel hadde Kari et poeng: noen sjanser kommer ikke tilbake. Han bestemte seg for at han neste gang skulle prøve å få plass til begge deler.',
        translation:
          'O Linu deixou Voss no dia seguinte sabendo muito sobre casas de fazenda antigas, mas sem ter visto a região do alto. No trem para Bergen, olhou para as montanhas e pensou que tinha escolhido o caminho seguro, e que isso não era nada errado. Mesmo assim, a Kari tinha razão num ponto: algumas chances não voltam. Ele decidiu que, da próxima vez, ia tentar encaixar as duas coisas.',
        ending: { tone: 'neutro', title: 'O caminho seguro', message: 'Você entendeu o debate, mas ficou só com um dos lados. Em Voss, a coragem e a tradição cabem no mesmo dia.' },
      },
    },
  },
  {
    id: 'nb-h35',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Bare dansk med rar uttale?',
    emoji: '🇩🇰',
    summary: 'Numa noite em Nyhavn, em Copenhague, um estudante dinamarquês provoca: «o norueguês é só dinamarquês com uma pronúncia engraçada». O Linu precisa defender o norueguês com argumentos — e com cuidado.',
    cultural_context:
      'Durante cerca de quatro séculos, até 1814, a Noruega fez parte do reino da Dinamarca-Noruega, e o dinamarquês era a língua escrita dos noruegueses; o bokmål nasceu desse dinamarquês, «norueguesado» aos poucos pelas reformas ortográficas de 1907, 1917 e 1938. Hoje noruegueses e dinamarqueses se leem com facilidade, mas se entendem com mais dificuldade de ouvido, e há falsos amigos traiçoeiros, como «grine» (chorar, no norueguês coloquial; rir, em dinamarquês).',
    start: 'start',
    glossary: [
      ['et nabospråk', 'uma língua vizinha'],
      ['å grine', 'chorar (norueguês coloquial); rir (dinamarquês)'],
      ['rar', 'estranho (norueguês); gentil, fofo (dinamarquês)'],
      ['halvtreds', 'cinquenta (dinamarquês)'],
      ['riktignok', 'é verdade que, de fato'],
      ['med andre ord', 'em outras palavras'],
      ['en grunnlov', 'uma constituição'],
      ['en fornærmelse', 'uma ofensa'],
    ],
    nodes: {
      start: {
        emoji: '⚓',
        text: 'En varm sommerkveld satt Linu på kaikanten i Nyhavn sammen med den norske venninnen Ragnhild og to danske studenter, Mads og Signe. Mads løftet glasset og sa med et stort glis: «Norsk er jo bare dansk med en sjov udtale.» Ragnhild himlet med øynene og snudde seg mot Linu. «Nå må du forsvare norsken, for jeg har gitt opp å diskutere med ham», sa hun.',
        translation:
          'Numa noite quente de verão, o Linu estava sentado na beira do cais em Nyhavn com a amiga norueguesa Ragnhild e dois estudantes dinamarqueses, Mads e Signe. O Mads ergueu o copo e disse com um sorrisão: «O norueguês é só dinamarquês com uma pronúncia engraçada.» A Ragnhild revirou os olhos e se virou para o Linu. «Agora você tem que defender o norueguês, porque eu desisti de discutir com ele», disse ela.',
        choices: [
          { text: 'Spørre Mads hvorfor han mener det.', translation: 'Perguntar ao Mads por que ele acha isso.', next: 'mads' },
          { text: 'Gå rett på motargumentene.', translation: 'Partir direto para os contra-argumentos.', next: 'argument' },
        ],
      },
      mads: {
        emoji: '☝️',
        text: '«For det første skriver vi nesten likt», sa Mads og talte på fingrene, på dansk, men så tydelig at Linu forsto alt. «Dessuten var Norge en del av Danmark i omtrent fire hundre år, og Ibsen skrev på dansk.» Ragnhild måtte innrømme at han hadde et poeng: skriftspråket i Norge var dansk i flere hundre år, og bokmålet har vokst ut av det. «Riktignok», sa Linu langsomt, «men at to språk har de samme røttene, betyr ikke at de er det samme språket.»',
        translation:
          '«Em primeiro lugar, a gente escreve quase igual», disse o Mads, contando nos dedos, em dinamarquês, mas tão claro que o Linu entendeu tudo. «Além disso, a Noruega fez parte da Dinamarca por uns quatrocentos anos, e o Ibsen escrevia em dinamarquês.» A Ragnhild teve que admitir que ele tinha razão num ponto: a língua escrita na Noruega foi o dinamarquês durante séculos, e o bokmål cresceu a partir dele. «É verdade», disse o Linu devagar, «mas o fato de duas línguas terem as mesmas raízes não quer dizer que sejam a mesma língua.»',
        choices: [{ text: 'Legge fram motargumentene.', translation: 'Apresentar os contra-argumentos.', next: 'argument' }],
      },
      argument: {
        emoji: '🎶',
        text: '«Hør bare på oss», sa Linu. «Norsk har to toner som skiller ord fra hverandre, og vi uttaler konsonantene tydelig, mens dere danskere, derimot, svelger halvparten av dem.» Han la til at nynorsk, den andre skriftnormen i Norge, ble bygd på norske dialekter og ikke på dansk. Da begynte Signe å le så høyt at hun måtte holde seg på magen: «Undskyld, jeg griner bare!»',
        translation:
          '«Escutem só a gente», disse o Linu. «O norueguês tem dois tons que distinguem palavras, e pronunciamos as consoantes com clareza, enquanto vocês, dinamarqueses, ao contrário, engolem metade delas.» Ele acrescentou que o nynorsk, a outra norma escrita da Noruega, foi construído a partir dos dialetos noruegueses, e não do dinamarquês. Então a Signe começou a rir tão alto que teve que segurar a barriga: «Desculpa, eu só estou rindo!»',
        choices: [
          { text: '«Der har vi det: på norsk betyr “å grine” å gråte, men du ler!»', translation: '«Aí está: em norueguês “grine” quer dizer chorar, mas você está rindo!»', next: 'falskevenner' },
          {
            text: '«Gråter du, Signe? Ble du lei deg fordi jeg kritiserte dansken?»',
            translation: '«Você está chorando, Signe? Ficou triste porque eu critiquei o dinamarquês?»',
            wrong: 'A Signe estava rindo tanto que segurava a barriga. Em dinamarquês, «grine» é rir; no norueguês coloquial, «grine» é chorar. Ela não está triste — é só um falso amigo entre as duas línguas.',
          },
        ],
      },
      falskevenner: {
        emoji: '🎭',
        text: 'Ragnhild klappet begeistret og sa at Linu hadde funnet et perfekt eksempel. «Og hvis du sier at noen er rar i Danmark, er det et kompliment, mens det på norsk betyr at personen er litt merkelig», la hun til. Mads klødde seg på haken og kom med et nytt motargument: «Men svensk og norsk ligner jo også hverandre — er de da det samme språket?» Linu merket at diskusjonen sto og vippet, og at det neste argumentet ville avgjøre alt.',
        translation:
          'A Ragnhild bateu palmas, empolgada, e disse que o Linu tinha achado um exemplo perfeito. «E se você diz que alguém é “rar” na Dinamarca, é um elogio, enquanto em norueguês quer dizer que a pessoa é meio esquisita», acrescentou. O Mads coçou o queixo e veio com um novo contra-argumento: «Mas o sueco e o norueguês também se parecem — então são a mesma língua?» O Linu percebeu que a discussão estava na corda bamba, e que o próximo argumento ia decidir tudo.',
        choices: [
          { text: 'Svare med historien: 1814, 1905 og rettskrivningsreformene.', translation: 'Responder com a história: 1814, 1905 e as reformas ortográficas.', next: 'historie' },
          { text: 'Si at dansk uansett høres ut som en halsbetennelse.', translation: 'Dizer que o dinamarquês, de qualquer jeito, parece uma dor de garganta.', next: 'uhoflig' },
        ],
      },
      historie: {
        emoji: '📜',
        text: '«Språk handler ikke bare om ord, men også om historie og identitet», sa Linu. «I 1814 fikk Norge sin egen grunnlov, i 1905 ble landet helt selvstendig, og på 1900-tallet ble rettskrivningen gjort stadig mer norsk.» Han forklarte at det er derfor det heter «bok» og «gate» på norsk, mens det heter «bog» og «gade» på dansk. «Med andre ord: vi er søsken, ikke tvillinger», avsluttet han, og Signe nikket anerkjennende.',
        translation:
          '«Língua não é só palavra, é também história e identidade», disse o Linu. «Em 1814 a Noruega ganhou a sua própria constituição, em 1905 o país ficou totalmente independente, e ao longo do século XX a ortografia foi ficando cada vez mais norueguesa.» Ele explicou que é por isso que se escreve «bok» (livro) e «gate» (rua) em norueguês, mas «bog» e «gade» em dinamarquês. «Em outras palavras: somos irmãos, não gêmeos», concluiu, e a Signe concordou com a cabeça, impressionada.',
        choices: [{ text: 'Vente på det siste motargumentet til Mads.', translation: 'Esperar o último contra-argumento do Mads.', next: 'tall' }],
      },
      tall: {
        emoji: '🔢',
        text: 'Mads løftet hendene som om han overga seg, men han hadde ett kort igjen. «Greit, men hvis norsk er så annerledes, hva heter femti på dansk?» spurte han lurt. Linu visste at det danske ordet var «halvtreds», og at det kommer av en gammel måte å telle i tjuetall på. «Det viser bare at vi tenker forskjellig, i hvert fall når det gjelder matte», svarte han, og hele gjengen brøt ut i latter.',
        translation:
          'O Mads levantou as mãos como quem se rende, mas ainda tinha uma carta na manga. «Tá bom, mas se o norueguês é tão diferente, como se diz cinquenta em dinamarquês?», perguntou, malandro. O Linu sabia que a palavra dinamarquesa era «halvtreds», e que ela vem de um jeito antigo de contar de vinte em vinte. «Isso só mostra que a gente pensa diferente, pelo menos em matemática», respondeu, e a turma inteira caiu na gargalhada.',
        choices: [{ text: 'Foreslå at de skåler for nabospråkene.', translation: 'Propor um brinde às línguas vizinhas.', next: 'final_bom' }],
      },
      uhoflig: {
        emoji: '😬',
        text: '«Uansett høres dansk ut som en halsbetennelse», sa Linu, og han angret i det samme øyeblikket. Signe sluttet å le, og Mads løftet øyenbrynene. «Det var ikke et argument, det var en fornærmelse», sa Ragnhild lavt, «og da har du tapt debatten, selv om du hadde rett.» Linu prøvde å be om unnskyldning, men stemningen var ikke den samme lenger.',
        translation:
          '«De qualquer jeito, o dinamarquês parece uma dor de garganta», disse o Linu, e se arrependeu no mesmo instante. A Signe parou de rir, e o Mads ergueu as sobrancelhas. «Isso não foi um argumento, foi uma ofensa», disse a Ragnhild baixinho, «e aí você perdeu o debate, mesmo tendo razão.» O Linu tentou pedir desculpas, mas o clima já não era o mesmo.',
        choices: [{ text: 'Beklage igjen og gå hjem.', translation: 'Pedir desculpas de novo e ir para casa.', next: 'final_neutro' }],
      },
      final_bom: {
        emoji: '🥂',
        text: 'De hevet glassene over kanalen, der båtene gynget i kveldslyset foran de fargerike husene. «Skål for nabospråkene, som man kan lese uten ordbok, men nesten ikke forstå uten tålmodighet», sa Signe. Mads innrømmet at norsk kanskje var litt mer enn dansk med en rar uttale, og la til på dansk: «Du er sgu en rar pingvin.» Linu forsto at det var et kompliment, og det var det fineste han hadde hørt hele kvelden.',
        translation:
          'Eles ergueram os copos sobre o canal, onde os barcos balançavam na luz do entardecer diante das casas coloridas. «Às línguas vizinhas, que dá para ler sem dicionário, mas quase não dá para entender sem paciência», disse a Signe. O Mads admitiu que o norueguês talvez fosse um pouco mais do que dinamarquês com uma pronúncia esquisita, e acrescentou em dinamarquês: «Você é um pinguim muito fofo, viu.» O Linu entendeu que era um elogio, e foi a coisa mais bonita que ouviu a noite toda.',
        ending: { tone: 'bom', title: 'Irmãos, não gêmeos', message: 'Você argumentou com história e exemplos, entendeu os falsos amigos e terminou a noite com um elogio dinamarquês.' },
      },
      final_neutro: {
        emoji: '🌃',
        text: 'Linu gikk alene langs kanalen, forbi de fargerike husene i Nyhavn. Han hadde hatt gode argumenter, men én dum setning hadde ødelagt alt. Neste dag sendte han en melding til Mads og Signe og ba om unnskyldning, og de svarte vennlig at det var glemt. Likevel hadde han lært noe viktig: i en diskusjon vinner man med argumenter, ikke med fornærmelser.',
        translation:
          'O Linu caminhou sozinho ao longo do canal, passando pelas casas coloridas de Nyhavn. Tinha tido bons argumentos, mas uma frase boba tinha estragado tudo. No dia seguinte mandou uma mensagem ao Mads e à Signe pedindo desculpas, e eles responderam, gentis, que já estava esquecido. Mesmo assim, ele tinha aprendido uma coisa importante: numa discussão, vence-se com argumentos, não com ofensas.',
        ending: { tone: 'neutro', title: 'Uma frase a mais', message: 'Você entendeu o debate e os falsos amigos, mas uma ofensa derrubou os bons argumentos. Numa discussão, o tom também conta.' },
      },
    },
  },
  {
    id: 'nb-h36',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Glass over ruinene',
    emoji: '🏛️',
    summary: 'Em Hamar, junto às ruínas da catedral medieval cobertas por uma enorme estrutura de vidro, o Linu participa de um debate escolar e aprende a montar uma carta do leitor — com vírgulas no lugar certo.',
    cultural_context:
      'Hamar, às margens do Mjøsa, o maior lago da Noruega, foi sede de bispado desde o século XII, e a sua catedral medieval foi destruída no século XVI. Em 1998, as ruínas ganharam uma grande cobertura de vidro e aço que as protege da chuva e do gelo; hoje o espaço, em Domkirkeodden, recebe concertos e cerimônias.',
    start: 'start',
    glossary: [
      ['et leserinnlegg', 'uma carta do leitor (artigo de opinião no jornal)'],
      ['en påstand', 'uma tese, uma afirmação'],
      ['et motargument', 'um contra-argumento'],
      ['en leddsetning', 'uma oração subordinada'],
      ['et vernebygg', 'uma construção de proteção'],
      ['derimot', 'por outro lado, ao contrário'],
      ['altså', 'portanto, ou seja'],
      ['å ta noen på alvor', 'levar alguém a sério'],
    ],
    nodes: {
      start: {
        emoji: '🏫',
        text: 'På Domkirkeodden ved Mjøsa sto en skoleklasse fra Hamar og så opp på den enorme glasskonstruksjonen som dekker ruinene av middelalderkatedralen. Linu hadde fått lov til å følge læreren Frøydis en dag, og hun ga klassen et oppdrag. «I dag skal dere skrive et leserinnlegg om glasset over ruinene: var det en god idé eller ikke?» sa hun. Hun delte klassen i to grupper og spurte Linu hvilken han ville være med i.',
        translation:
          'Em Domkirkeodden, junto ao Mjøsa, uma turma de escola de Hamar olhava para a enorme estrutura de vidro que cobre as ruínas da catedral medieval. O Linu tinha recebido permissão para acompanhar a professora Frøydis por um dia, e ela deu uma tarefa à turma. «Hoje vocês vão escrever uma carta do leitor sobre o vidro por cima das ruínas: foi uma boa ideia ou não?», disse ela. Dividiu a turma em dois grupos e perguntou ao Linu em qual ele queria ficar.',
        choices: [
          { text: 'Være med i gruppen som er for glasset.', translation: 'Entrar no grupo a favor do vidro.', next: 'for' },
          { text: 'Være med i gruppen som er mot glasset.', translation: 'Entrar no grupo contra o vidro.', next: 'mot' },
        ],
      },
      for: {
        emoji: '👍',
        text: 'I for-gruppen satt Emil og Hanne, som allerede hadde skrevet ned tre argumenter. «For det første beskytter glasset ruinene mot regn, frost og snø, og uten det ville de smuldret opp», sa Emil. Hanne la til at bygget dessuten gjør det mulig å bruke ruinene til konserter og andre arrangementer hele året. «Riktignok er det dyrt og moderne, men det er bedre enn å miste ruinene for alltid», sa hun.',
        translation:
          'No grupo a favor estavam o Emil e a Hanne, que já tinham anotado três argumentos. «Em primeiro lugar, o vidro protege as ruínas da chuva, do gelo e da neve, e sem ele elas iam se esfarelar», disse o Emil. A Hanne acrescentou que a construção, além disso, permite usar as ruínas para concertos e outros eventos o ano inteiro. «É verdade que é caro e moderno, mas é melhor do que perder as ruínas para sempre», disse ela.',
        choices: [{ text: 'Høre hva læreren sier om oppbygningen.', translation: 'Ouvir o que a professora diz sobre a estrutura do texto.', next: 'struktur' }],
      },
      mot: {
        emoji: '👎',
        text: 'I mot-gruppen satt Jonas og Amina, som var uenige om nesten alt, bortsett fra glasset. «Ruinene sto ute i over fire hundre år, og det var jo det som var poenget med dem», sa Jonas. Amina mente dessuten at glasset tar oppmerksomheten bort fra ruinene, slik at folk ser på taket i stedet for på steinene. «Likevel må vi innrømme at glasset beskytter mot frosten, ellers er vi ikke ærlige», sa hun.',
        translation:
          'No grupo contra estavam o Jonas e a Amina, que discordavam em quase tudo, menos no vidro. «As ruínas ficaram ao ar livre por mais de quatrocentos anos, e a graça delas era justamente essa», disse o Jonas. A Amina achava, além disso, que o vidro rouba a atenção das ruínas, e as pessoas olham para o teto em vez de olhar para as pedras. «Mesmo assim, temos que admitir que o vidro protege do gelo, senão não estamos sendo honestos», disse ela.',
        choices: [{ text: 'Høre hva læreren sier om oppbygningen.', translation: 'Ouvir o que a professora diz sobre a estrutura do texto.', next: 'struktur' }],
      },
      struktur: {
        emoji: '📝',
        text: 'Frøydis gikk rundt og forklarte hvordan et godt leserinnlegg er bygd opp. «Først kommer påstanden, altså hva dere mener, så kommer argumentene, og til slutt et motargument som dere svarer på», sa hun. «Et innlegg som later som om motparten ikke har noen poeng, overbeviser ingen.» Hun ba Linu skrive en setning som begge gruppene var enige om, og han skrev på tavla: «Hvis ruinene står ute om vinteren blir steinene skadet av frosten.»',
        translation:
          'A Frøydis circulava explicando como se monta uma boa carta do leitor. «Primeiro vem a tese, ou seja, o que vocês pensam; depois vêm os argumentos; e por fim um contra-argumento, que vocês respondem», disse ela. «Um texto que finge que o outro lado não tem razão em nada não convence ninguém.» Ela pediu ao Linu que escrevesse uma frase com que os dois grupos concordassem, e ele escreveu no quadro: «Se as ruínas ficam ao ar livre no inverno as pedras são danificadas pelo gelo.»',
        choices: [{ text: 'Vente på lærerens kommentar.', translation: 'Esperar o comentário da professora.', next: 'komma' }],
      },
      komma: {
        emoji: '✏️',
        text: 'Frøydis smilte og spurte klassen om det manglet noe i setningen. Hanne rakte opp hånda og sa at det manglet et komma, fordi setningen begynner med en leddsetning. «Riktig: når leddsetningen kommer først, setter vi komma før hovedsetningen, og så kommer verbet rett etter kommaet», sa Frøydis. Hun ga kritt til Linu og ba ham rette setningen selv.',
        translation:
          'A Frøydis sorriu e perguntou à turma se faltava alguma coisa na frase. A Hanne levantou a mão e disse que faltava uma vírgula, porque a frase começa com uma oração subordinada. «Certo: quando a subordinada vem primeiro, colocamos vírgula antes da oração principal, e aí o verbo vem logo depois da vírgula», disse a Frøydis. Ela deu o giz ao Linu e pediu que ele mesmo corrigisse a frase.',
        choices: [
          { text: 'Skrive: «Hvis ruinene står ute om vinteren, blir steinene skadet av frosten.»', translation: 'Escrever: «Se as ruínas ficam ao ar livre no inverno, as pedras são danificadas pelo gelo.»', next: 'debatt' },
          {
            text: 'Skrive: «Hvis ruinene, står ute om vinteren blir steinene skadet av frosten.»',
            translation: 'Escrever: «Se as ruínas, ficam ao ar livre no inverno as pedras são danificadas pelo gelo.»',
            wrong: 'A professora explicou: a vírgula vem no fim da oração subordinada, antes da principal, e o verbo da principal vem logo depois dela: «…om vinteren, blir steinene…». Não se separa o sujeito «ruinene» do seu verbo.',
          },
        ],
      },
      debatt: {
        emoji: '🎤',
        text: 'Etter en time leste de to gruppene innleggene sine høyt under glasstaket, der stemmene ga ekko mellom de gamle buene. For-gruppen sa at vernebygget er et kompromiss: ruinene blir bevart, og likevel kan alle se dem. Mot-gruppen svarte at et kompromiss ikke nødvendigvis er det beste, og at noen ting bør få lov til å eldes i fred. Til slutt ba Frøydis Linu, som gjest, om å avslutte debatten med sin egen mening.',
        translation:
          'Depois de uma hora, os dois grupos leram as suas cartas em voz alta debaixo do teto de vidro, onde as vozes ecoavam entre os velhos arcos. O grupo a favor disse que a cobertura é um meio-termo: as ruínas são preservadas e, mesmo assim, todos podem vê-las. O grupo contra respondeu que um meio-termo não é necessariamente o melhor, e que certas coisas devem ter o direito de envelhecer em paz. Por fim, a Frøydis pediu ao Linu, como convidado, que encerrasse o debate com a sua própria opinião.',
        choices: [
          { text: 'Gi begge sider rett i noe, men konkludere tydelig.', translation: 'Dar razão aos dois lados em algo, mas concluir com clareza.', next: 'final_bom' },
          { text: 'Si at alle har rett, og at det ikke finnes noe svar.', translation: 'Dizer que todos têm razão e que não existe resposta.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '👏',
        text: '«Jeg mener at glasset var en god idé, selv om jeg forstår motargumentene», sa Linu. «Mot-gruppen har rett i at ruinene har en verdi fordi de er gamle og skjøre; derimot tror jeg ikke at de ville ha overlevd fire hundre vintre til uten beskyttelse.» «Altså: bedre en ruin under glass enn ingen ruin i det hele tatt», avsluttet han. Klassen klappet, og Frøydis sa at det var akkurat slik et godt innlegg skal slutte: med en klar mening som tar motparten på alvor.',
        translation:
          '«Eu acho que o vidro foi uma boa ideia, embora eu entenda os contra-argumentos», disse o Linu. «O grupo contra tem razão quando diz que as ruínas têm valor por serem antigas e frágeis; por outro lado, não acredito que elas sobreviveriam a mais quatrocentos invernos sem proteção.» «Portanto: melhor uma ruína debaixo do vidro do que ruína nenhuma», concluiu. A turma aplaudiu, e a Frøydis disse que era exatamente assim que uma boa carta deve terminar: com uma opinião clara que leva o outro lado a sério.',
        ending: { tone: 'bom', title: 'Uma opinião clara', message: 'Você entendeu os dois lados, acertou a vírgula depois da subordinada e fechou o debate como um bom articulista.' },
      },
      final_neutro: {
        emoji: '🤷',
        text: '«Jeg synes alle har litt rett, og det finnes vel ikke noe riktig svar», sa Linu og trakk på skuldrene. Det ble stille under glasstaket, og noen i klassen fniste. Frøydis sa vennlig at det kanskje var sant, men at et leserinnlegg uten en klar mening sjelden blir trykt i avisa. «Neste gang må du tørre å velge side, og så forklare hvorfor», sa hun.',
        translation:
          '«Acho que todo mundo tem um pouco de razão, e não deve existir resposta certa», disse o Linu, dando de ombros. Ficou um silêncio debaixo do teto de vidro, e alguns da turma deram risadinhas. A Frøydis disse com gentileza que talvez fosse verdade, mas que uma carta do leitor sem uma opinião clara raramente sai publicada no jornal. «Da próxima vez, tenha coragem de escolher um lado, e depois explique por quê», disse ela.',
        ending: { tone: 'neutro', title: 'Em cima do muro', message: 'Você entendeu o debate e a vírgula, mas terminou sem opinião. Num texto argumentativo, é preciso escolher um lado.' },
      },
    },
  },
  // ───────────────────────── C1.1 ─────────────────────────
  {
    id: 'nb-h37',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Eg, jeg og Ivar Aasen',
    emoji: '✒️',
    summary: 'Em Ørsta, terra de Ivar Aasen, a guia Solveig só fala nynorsk — e o Linu descobre que consegue entender quase tudo, desde que não misture as duas normas escritas.',
    cultural_context:
      'Ivar Aasen nasceu em 1813 numa pequena fazenda em Ørsta, na costa oeste, e quase não frequentou a escola. Nos anos 1840 percorreu boa parte do país recolhendo palavras dos dialetos e, a partir delas, criou o «landsmål»; em 1885 o Parlamento o igualou à escrita de base dinamarquesa, e em 1929 as duas normas ganharam os nomes atuais: nynorsk e bokmål.',
    start: 'start',
    glossary: [
      ['eg / ikkje (nn)', 'jeg / ikke (eu / não)'],
      ['kva / kven (nn)', 'hva / hvem (o quê / quem)'],
      ['heim / veke (nn)', 'hjem / uke (casa / semana)'],
      ['berre / òg (nn)', 'bare / også (só / também)'],
      ['millom (nn, antigo)', 'mellom (entre)'],
      ['landsmål', 'o nome antigo do nynorsk, até 1929'],
      ['å blande', 'misturar'],
      ['halvt om halvt', 'meio a meio, misturado'],
    ],
    nodes: {
      start: {
        emoji: '🏡',
        text: 'Bussen fra Volda slapp Linu av i Ørsta en grå oktoberdag, og han gikk opp til Ivar Aasen-tunet, et museum om Ivar Aasen og nynorsken. Ved inngangen ble han møtt av guiden Solveig, som smilte bredt. «Velkomen! Eg heiter Solveig, og eg skal vise deg rundt i dag», sa hun på klingende nynorsk. Linu forsto det meste, men han var usikker på om han ville klare en hel omvisning på den måten.',
        translation:
          'O ônibus de Volda deixou o Linu em Ørsta num dia cinzento de outubro, e ele subiu até o Ivar Aasen-tunet, um museu sobre Ivar Aasen e o nynorsk. Na entrada foi recebido pela guia Solveig, que abriu um sorriso largo. «Bem-vindo! Eu me chamo Solveig e vou te mostrar tudo hoje», disse ela, num nynorsk cristalino. O Linu entendeu quase tudo, mas não tinha certeza de que ia aguentar uma visita inteira daquele jeito.',
        choices: [
          { text: 'Be Solveig om å snakke bokmål.', translation: 'Pedir à Solveig que fale bokmål.', next: 'bokmal' },
          { text: 'Be henne fortsette på nynorsk, og love å spørre hvis han ikke forstår.', translation: 'Pedir que ela continue em nynorsk e prometer perguntar quando não entender.', next: 'aasen' },
        ],
      },
      bokmal: {
        emoji: '😄',
        text: 'Solveig lo og svarte at hun godt kunne snakke bokmål, men at han da ville gå glipp av halve moroa. «Ingen i Noreg snakkar eigentleg nynorsk eller bokmål; vi snakkar dialekt og skriv anten det eine eller det andre», forklarte hun. Hun fortalte at hun selv snakket sunnmørsk til daglig og skrev nynorsk på jobben, mens søsteren i Oslo skrev bokmål. «Men vi forstår kvarandre heilt fint, og det gjer du òg, skal du sjå», sa hun og blunket.',
        translation:
          'A Solveig riu e respondeu que podia muito bem falar bokmål, mas que aí ele ia perder metade da graça. «Ninguém na Noruega fala de verdade nynorsk ou bokmål; a gente fala dialeto e escreve numa norma ou na outra», explicou. Contou que ela mesma falava o dialeto de Sunnmøre no dia a dia e escrevia nynorsk no trabalho, enquanto a irmã, em Oslo, escrevia bokmål. «Mas a gente se entende perfeitamente, e você também vai entender, você vai ver», disse, piscando.',
        choices: [{ text: 'La Solveig fortsette på nynorsk.', translation: 'Deixar a Solveig continuar em nynorsk.', next: 'aasen' }],
      },
      aasen: {
        emoji: '📚',
        text: 'I utstillingen fortalte Solveig om Ivar Aasen, som ble født på en liten gård i Hovdebygda i Ørsta i 1813 og nesten ikke gikk på skole. Han lærte seg selv språk ved å lese alt han kom over, og på 1840-tallet reiste han gjennom store deler av landet for å samle ord og bøyningsformer fra dialektene. Ut fra dette materialet skrev han en grammatikk i 1848 og en ordbok i 1850, og senere formet han et skriftspråk som ble kalt landsmål. Solveig pekte på en vegg der det sto en linje fra diktet hans «Nordmannen»: «Millom bakkar og berg ut med havet».',
        translation:
          'Na exposição, a Solveig contou a história de Ivar Aasen, que nasceu numa pequena fazenda em Hovdebygda, em Ørsta, em 1813, e quase não frequentou a escola. Aprendeu línguas sozinho, lendo tudo o que lhe caía nas mãos, e nos anos 1840 viajou por boa parte do país recolhendo palavras e formas de flexão dos dialetos. A partir desse material escreveu uma gramática em 1848 e um dicionário em 1850, e depois deu forma a uma língua escrita que recebeu o nome de landsmål. A Solveig apontou para uma parede onde estava escrito um verso do poema «Nordmannen» (O norueguês): «Entre colinas e montanhas, junto ao mar».',
        choices: [
          { text: 'Spørre hva «millom» og «berg» betyr.', translation: 'Perguntar o que querem dizer «millom» e «berg».', next: 'dikt' },
          {
            text: '«Diktet handler altså om en by langt inne i landet?»',
            translation: '«Então o poema fala de uma cidade bem no interior do país?»',
            wrong: 'O verso diz «millom bakkar og berg ut med havet»: entre colinas e montanhas, ao longo do mar. «Ut med havet» é junto à costa — o poema fala do norueguês que fez a sua casa na paisagem do litoral, e não de uma cidade no interior.',
          },
        ],
      },
      dikt: {
        emoji: '🏔️',
        text: '«Millom er det same som mellom, og berg er det vi på bokmål oftast kallar fjell», forklarte Solveig. Hun viste ham at nynorsk ofte har -ar i flertall der bokmål har -er, som i «bakkar» og «bakker», og at mange ord har andre vokaler, som «heim» og «hjem». Så pekte hun på en tavle med ordpar: eg og jeg, ikkje og ikke, kva og hva, berre og bare, veke og uke. «No har du nok til å klare ei lita prøve, om du tør», sa hun.',
        translation:
          '«Millom é o mesmo que mellom (entre), e berg é o que em bokmål a gente costuma chamar de fjell (montanha)», explicou a Solveig. Mostrou que o nynorsk muitas vezes tem -ar no plural onde o bokmål tem -er, como em «bakkar» e «bakker», e que muitas palavras têm outras vogais, como «heim» e «hjem». Depois apontou para um quadro com pares de palavras: eg e jeg, ikkje e ikke, kva e hva, berre e bare, veke e uke. «Agora você já sabe o bastante para encarar uma provinha, se tiver coragem», disse ela.',
        choices: [
          { text: 'Ta prøven.', translation: 'Fazer a prova.', next: 'quiz' },
          { text: 'Takke nei og heller gå en tur ute på tunet.', translation: 'Recusar e preferir dar uma volta lá fora, pelo terreiro da fazenda.', next: 'tunet' },
        ],
      },
      quiz: {
        emoji: '📝',
        text: 'Solveig skrev en setning på et kort og ga det til Linu: «Eg kjem ikkje heim før neste veke, for bussen går berre om morgonen.» Hun ba ham forklare med egne ord, på bokmål, hva setningen betydde. Linu leste den to ganger og kjente igjen nesten alle ordene fra tavla. Han så at «berre» måtte være det samme som «bare», og at «morgonen» lignet mistenkelig på «morgenen».',
        translation:
          'A Solveig escreveu uma frase num cartão e o entregou ao Linu: «Eu não volto para casa antes da semana que vem, porque o ônibus só passa de manhã.» Pediu que ele explicasse com as próprias palavras, em bokmål, o que a frase queria dizer. O Linu leu duas vezes e reconheceu quase todas as palavras do quadro. Percebeu que «berre» devia ser o mesmo que «bare», e que «morgonen» se parecia suspeitamente com «morgenen».',
        choices: [
          { text: '«Personen kommer ikke hjem før neste uke, fordi bussen bare går om morgenen.»', translation: '«A pessoa não volta para casa antes da semana que vem, porque o ônibus só passa de manhã.»', next: 'rett' },
          {
            text: '«Personen kommer hjem i morgen tidlig, med den første bussen.»',
            translation: '«A pessoa volta para casa amanhã cedo, no primeiro ônibus.»',
            wrong: '«Eg kjem ikkje heim før neste veke» é «jeg kommer ikke hjem før neste uke»: não volto antes da semana que vem («ikkje» = ikke, «heim» = hjem, «veke» = uke). E «om morgonen» não é «amanhã de manhã», e sim «de manhã» em geral: o ônibus só passa de manhã.',
          },
        ],
      },
      rett: {
        emoji: '🏛️',
        text: '«Heilt rett!» sa Solveig og klappet. Mens de gikk videre, fortalte hun at Stortinget i 1885 vedtok at landsmålet skulle være likestilt med det dansk-norske skriftspråket, og at de to fikk navnene nynorsk og bokmål i 1929. I dag skriver de fleste nordmenn bokmål, men i Ørsta, Volda og store deler av Vestlandet er nynorsk det vanlige både i skolen og i kommunen. Til slutt la hun fram gjesteboka og spurte om Linu ville skrive en hilsen på nynorsk.',
        translation:
          '«Certinho!», disse a Solveig, batendo palmas. Enquanto seguiam, ela contou que em 1885 o Parlamento decidiu que o landsmål teria o mesmo status da língua escrita dano-norueguesa, e que as duas ganharam os nomes de nynorsk e bokmål em 1929. Hoje a maioria dos noruegueses escreve bokmål, mas em Ørsta, em Volda e em boa parte da costa oeste o nynorsk é o normal, tanto na escola quanto na prefeitura. Por fim ela abriu o livro de visitas e perguntou se o Linu queria deixar uma mensagem em nynorsk.',
        choices: [
          { text: 'Skrive en hilsen i gjesteboka.', translation: 'Escrever uma mensagem no livro de visitas.', next: 'skrive' },
          { text: 'Si at han er for sjenert, og heller gå ut på tunet.', translation: 'Dizer que está com vergonha e preferir sair para o terreiro.', next: 'tunet' },
        ],
      },
      tunet: {
        emoji: '🍂',
        text: 'Linu gikk ut og ruslet rundt blant de gamle husene på tunet, der høstløvet lå vått på bakken. På skiltene sto det tekster på nynorsk, og han prøvde å lese dem alene: noen setninger forsto han med en gang, andre måtte han gjette seg til. «Garden var liten, og arbeidet var hardt», sto det på ett skilt, og det forsto han uten problemer. Likevel tenkte han at han burde ha øvd litt mer sammen med Solveig før han gikk ut på egen hånd.',
        translation:
          'O Linu saiu e ficou passeando entre as casas antigas do terreiro, onde as folhas de outono estavam molhadas no chão. As placas tinham textos em nynorsk, e ele tentou lê-los sozinho: algumas frases entendeu na hora, outras teve que adivinhar. «A fazenda era pequena, e o trabalho era duro», dizia uma placa, e essa ele entendeu sem problema. Mesmo assim, pensou que devia ter praticado um pouco mais com a Solveig antes de sair por conta própria.',
        choices: [{ text: 'Ta bussen tilbake til Volda.', translation: 'Pegar o ônibus de volta para Volda.', next: 'final_neutro' }],
      },
      skrive: {
        emoji: '🖋️',
        text: 'Linu tok pennen og tenkte seg godt om, for han ville ikke blande de to skriftnormene. Solveig minnet ham på at nynorsk ikke er en dialekt, men et skriftspråk med egne regler, akkurat som bokmål. «Det verste ein kan gjere, er å skrive halvt om halvt», sa hun med et glimt i øyet. Linu skrev to forslag på et kladdeark og viste dem til henne.',
        translation:
          'O Linu pegou a caneta e pensou bem, porque não queria misturar as duas normas escritas. A Solveig lembrou que o nynorsk não é um dialeto, e sim uma língua escrita com regras próprias, exatamente como o bokmål. «O pior que se pode fazer é escrever meio a meio», disse ela, com um brilho nos olhos. O Linu escreveu duas propostas num rascunho e mostrou a ela.',
        choices: [
          { text: '«Eg har lært mykje i dag, og eg kjem att!»', translation: '«Aprendi muito hoje, e vou voltar!»', next: 'final_bom' },
          {
            text: '«Jeg har lært mykje i dag, og eg kommer att!»',
            translation: '«Aprendi muito hoje, e vou voltar!» (misturado)',
            wrong: 'Essa frase é justamente «halvt om halvt»: «jeg» e «kommer» são bokmål, enquanto «mykje», «eg» e «att» são nynorsk. Em nynorsk puro, fica «Eg har lært mykje i dag, og eg kjem att!».',
          },
        ],
      },
      final_bom: {
        emoji: '📖',
        text: 'Solveig leste hilsenen og nikket fornøyd: ikke én feil. «No er du nesten ein ekte nynorskbrukar», sa hun, og hun ga ham et lite hefte med dikt av Ivar Aasen som avskjedsgave. På bussen tilbake til Volda bladde Linu i heftet og fant hele diktet om nordmannen som bygde seg et hjem mellom bakker og berg ved havet. Utenfor vinduet lå fjorden og fjellene, og han forsto plutselig hvorfor Aasen hadde villet skrive landet med landets egne ord.',
        translation:
          'A Solveig leu a mensagem e assentiu, satisfeita: nenhum erro. «Agora você é quase um usuário de nynorsk de verdade», disse, e lhe deu de presente de despedida um livrinho com poemas de Ivar Aasen. No ônibus de volta a Volda, o Linu folheou o livrinho e achou o poema inteiro sobre o norueguês que construiu a sua casa entre colinas e montanhas, junto ao mar. Do lado de fora da janela estavam o fiorde e as montanhas, e de repente ele entendeu por que Aasen quis escrever o país com as palavras do próprio país.',
        ending: { tone: 'bom', title: 'Eg kjem att!', message: 'Você entendeu o nynorsk da guia, traduziu a frase sem tropeçar e escreveu sem misturar as normas — um feito digno de Ørsta.' },
      },
      final_neutro: {
        emoji: '🚌',
        text: 'Linu tok bussen tilbake til Volda med en brosjyre om Ivar Aasen i sekken. Han hadde forstått mer nynorsk enn han hadde trodd, men han hadde ikke turt å skrive noe selv. Fra bussvinduet leste han skiltene langs veien, og han la merke til at det sto «skule» og ikke «skole» på en av bygningene. Neste gang, bestemte han, skulle han både lese og skrive på nynorsk.',
        translation:
          'O Linu pegou o ônibus de volta para Volda com um folheto sobre Ivar Aasen na mochila. Tinha entendido mais nynorsk do que imaginava, mas não teve coragem de escrever nada. Pela janela do ônibus leu as placas da estrada e reparou que num dos prédios estava escrito «skule», e não «skole» (escola). Na próxima vez, decidiu, ia ler e também escrever em nynorsk.',
        ending: { tone: 'neutro', title: 'Só de passagem', message: 'Você acompanhou a visita, mas não chegou a praticar. O nynorsk fica mais fácil quando a gente escreve nele.' },
      },
    },
  },
  {
    id: 'nb-h38',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Ikke fra Norge, men fra Bergen',
    emoji: '☔',
    summary: 'No mercado de peixe de Bergen, o Linu tropeça no bergensk de um peixeiro e ganha uma aula de dialeto com a filha dele: o «r» do fundo da garganta, o «ka» no lugar do «hva» e uma cidade que só tem dois gêneros.',
    cultural_context:
      'O bergensk, o falar da cidade de Bergen, é um dos poucos dialetos noruegueses com apenas dois gêneros: o feminino se fundiu ao masculino («boken», «en jente»). Uma explicação muito citada, mas não comprovada, é o contato com os comerciantes alemães da Liga Hanseática, que mantiveram um entreposto no cais de Bryggen da Idade Média até meados do século XVIII.',
    start: 'start',
    glossary: [
      ['ka / kem / kor (bergensk)', 'hva / hvem / hvor (o quê / quem / onde)'],
      ['kossen (bergensk)', 'hvordan (como)'],
      ['e (bergensk)', 'er (é, está)'],
      ['å skarre', 'pronunciar o r no fundo da garganta'],
      ['et bymål', 'o falar de uma cidade'],
      ['å pøsregne', 'chover a cântaros'],
      ['hansaen', 'a Liga Hanseática'],
      ['på tull', 'de brincadeira'],
    ],
    nodes: {
      start: {
        emoji: '🐟',
        text: 'En regnfull tirsdag morgen gikk Linu over Torget i Bergen, der fiskehandlerne ropte ut dagens fangst under de røde teltene. Bak disken i den nærmeste boden sto en kraftig kar med gummiforkle, som het Kjell. «Ka du vil ha, lille venn? Reker, laks eller fiskekaker?» ropte han, og r-ene skrapte dypt nede i halsen. Linu kjente igjen ordene «reker» og «laks», men det første ordet hadde han aldri hørt før.',
        translation:
          'Numa terça-feira chuvosa de manhã, o Linu atravessava o Torget (a praça do mercado) em Bergen, onde os peixeiros anunciavam aos gritos a pesca do dia debaixo das tendas vermelhas. Atrás do balcão da barraca mais próxima estava um sujeito grandalhão de avental de borracha, chamado Kjell. «O que você vai querer, amiguinho? Camarão, salmão ou bolinho de peixe?», gritou ele, e os erres arranhavam lá no fundo da garganta. O Linu reconheceu as palavras «reker» e «laks», mas a primeira palavra ele nunca tinha ouvido.',
        choices: [
          { text: 'Spørre hva «ka» betyr.', translation: 'Perguntar o que quer dizer «ka».', next: 'ka' },
          { text: 'Peke på fiskekakene og smile.', translation: 'Apontar para os bolinhos de peixe e sorrir.', next: 'fisk' },
        ],
      },
      ka: {
        emoji: '🗣️',
        text: 'Kjell lo så forkleet ristet. «Ka e bergensk for hva», sa han, «og kem e hvem, kor e hvor, og kossen e hvordan.» Han forklarte at bergensere sier «eg» og «ikkje», omtrent som på nynorsk, men at bymålet ellers skiller seg ganske mye fra bygdemålene rundt byen. «Og så e eg ikkje fra Norge, eg e fra Bergen», la han til og blunket, «det sier vi alle sammen, men bare halvveis på tull.»',
        translation:
          'O Kjell riu tanto que o avental balançou. «“Ka” é bergensk para “hva”», disse ele, «e “kem” é “hvem”, “kor” é “hvor”, e “kossen” é “hvordan”.» Explicou que os bergensere dizem «eg» e «ikkje», mais ou menos como no nynorsk, mas que no resto o falar da cidade é bem diferente dos dialetos rurais em volta. «E eu não sou da Noruega, sou de Bergen», acrescentou, piscando, «isso todo mundo aqui diz, mas só meio de brincadeira.»',
        choices: [{ text: 'Kjøpe fiskekaker.', translation: 'Comprar bolinhos de peixe.', next: 'fisk' }],
      },
      fisk: {
        emoji: '🧑‍🎓',
        text: 'Linu kjøpte tre fiskekaker, og Kjell pakket dem inn i papir mens han pratet i vei. Han fortalte at datteren Tone studerte språkvitenskap ved universitetet, og at hun skrev en oppgave om nettopp bergensk. Akkurat da kom Tone gående over torget med paraply og sekk, og Kjell ropte at nå hadde hun fått et nytt forsøksobjekt. Tone ristet oppgitt på hodet av faren, men hun satte seg gjerne ned med Linu under teltet for å forklare.',
        translation:
          'O Linu comprou três bolinhos de peixe, e o Kjell os embrulhou em papel sem parar de falar. Contou que a filha, Tone, estudava linguística na universidade e fazia um trabalho justamente sobre o bergensk. Nesse momento a Tone apareceu atravessando a praça com guarda-chuva e mochila, e o Kjell gritou que agora ela tinha uma nova cobaia. A Tone balançou a cabeça, resignada com o pai, mas sentou-se de bom grado com o Linu debaixo da tenda para explicar.',
        choices: [
          { text: 'Spørre Tone hvorfor bergensere skarrer på r-en.', translation: 'Perguntar à Tone por que os bergensere pronunciam o r na garganta.', next: 'r' },
          { text: 'Spørre om det er sant at bergensk mangler et kjønn.', translation: 'Perguntar se é verdade que falta um gênero no bergensk.', next: 'kjonn' },
        ],
      },
      r: {
        emoji: '👅',
        text: '«Skarre-r-en uttales bak i munnen, omtrent som på fransk og tysk, og den brukes ikke bare i Bergen, men i store deler av Sørlandet og Vestlandet», forklarte Tone. Hun sa at forskerne ikke er helt enige om hvordan den spredte seg, men at mange mener at den kom inn via byene og kontakten med utlandet. «I Oslo bruker de fleste en rullende r med tungespissen, så du hører med en gang hvor folk kommer fra», sa hun. Kjell demonstrerte ved å si «rrrreker» så høyt at en måke lettet fra teltduken.',
        translation:
          '«O r “skarre” se pronuncia no fundo da boca, mais ou menos como no francês e no alemão, e não se usa só em Bergen, mas em boa parte do sul e do oeste do país», explicou a Tone. Disse que os pesquisadores não estão totalmente de acordo sobre como ele se espalhou, mas que muitos acham que entrou pelas cidades e pelo contato com o exterior. «Em Oslo, a maioria usa um r vibrado com a ponta da língua, então dá para ouvir na hora de onde a pessoa é», disse ela. O Kjell fez uma demonstração dizendo «rrrreker» tão alto que uma gaivota levantou voo da lona da tenda.',
        choices: [{ text: 'Spørre om kjønnene også.', translation: 'Perguntar também sobre os gêneros.', next: 'kjonn' }],
      },
      kjonn: {
        emoji: '⚖️',
        text: '«Det stemmer: bergensk har bare to kjønn, hankjønn og intetkjønn», sa Tone. «Vi sier boken, solen og en jente, aldri boka, sola eller ei jente, og det gjør bymålet ganske spesielt i Norge.» Hun fortalte at en vanlig forklaring er påvirkningen fra de tyske hansakjøpmennene på Bryggen, men at ingen vet det helt sikkert. Så ga hun Linu en liten test: Hvordan ville en ekte bergenser si «ei lita jente»?',
        translation:
          '«É verdade: o bergensk só tem dois gêneros, o masculino e o neutro», disse a Tone. «A gente diz “boken”, “solen” e “en jente”, nunca “boka”, “sola” ou “ei jente”, e isso torna o falar da cidade bem especial na Noruega.» Contou que uma explicação comum é a influência dos comerciantes alemães da Hansa em Bryggen, mas que ninguém sabe ao certo. Então fez um testezinho com o Linu: como um bergenser de verdade diria «ei lita jente» (uma menininha)?',
        choices: [
          { text: '«En liten jente.»', translation: '«En liten jente.»', next: 'floyen' },
          {
            text: '«Ei lita jente», akkurat som på nynorsk.',
            translation: '«Ei lita jente», igualzinho ao nynorsk.',
            wrong: 'A Tone acabou de explicar que o bergensk só tem dois gêneros: o feminino se juntou ao masculino. Um bergenser diz «boken», «solen» e «en jente» — então «en liten jente», nunca «ei lita jente».',
          },
        ],
      },
      floyen: {
        emoji: '🚡',
        text: 'Tone lo og sa at han var en naturbegavelse, og foreslo at de tok Fløibanen opp på Fløyen før regnet ble verre. Fra toppen så de hele byen: Vågen, Bryggen med de spisse gavlene og fjellene som omkranser sentrum. Tone fortalte at Bergen var Norges største by i flere hundre år, og at hanseatene hadde kontoret sitt på Bryggen fra middelalderen til midten av 1700-tallet. Plutselig åpnet himmelen seg, og regnet fosset ned over dem.',
        translation:
          'A Tone riu e disse que ele era um talento nato, e sugeriu que pegassem o funicular Fløibanen até o monte Fløyen antes que a chuva piorasse. Lá de cima viram a cidade inteira: a baía de Vågen, o cais de Bryggen com as empenas pontudas e as montanhas que cercam o centro. A Tone contou que Bergen foi a maior cidade da Noruega durante vários séculos, e que os hanseáticos tiveram o seu entreposto em Bryggen da Idade Média até meados do século XVIII. De repente o céu se abriu, e a chuva despencou em cima deles.',
        choices: [
          { text: 'Bli stående under paraplyen og lære regnord.', translation: 'Ficar debaixo do guarda-chuva e aprender palavras de chuva.', next: 'regn' },
          { text: 'Løpe mot banen og ta første vogn ned.', translation: 'Correr para o funicular e pegar o primeiro vagão para baixo.', next: 'final_neutro' },
        ],
      },
      regn: {
        emoji: '🌧️',
        text: '«Nå pøsregner det, men det er helt normalt her», sa Tone og holdt paraplyen over dem begge. Hun lærte ham at bergensere har mange ord for regn, som yr, duskregn, plaskregn og styrtregn, og at det ikke finnes dårlig vær, bare dårlige klær. «Det sier de over hele landet, men vi trenger det mest», sa hun tørt. Linu spurte om han kunne prøve å si en hel setning på bergensk, og Tone nikket spent.',
        translation:
          '«Agora está chovendo a cântaros, mas isso é completamente normal aqui», disse a Tone, segurando o guarda-chuva sobre os dois. Ensinou que os bergensere têm muitas palavras para chuva, como yr (garoa), duskregn (chuvisco), plaskregn (chuvarada) e styrtregn (temporal), e que não existe tempo ruim, só roupa ruim. «Isso se diz no país inteiro, mas quem mais precisa somos nós», disse ela, seca. O Linu perguntou se podia tentar dizer uma frase inteira em bergensk, e a Tone assentiu, curiosa.',
        choices: [
          { text: '«Eg e ikkje fra Norge, eg e fra Bergen!»', translation: '«Eu não sou da Noruega, sou de Bergen!»', next: 'final_bom' },
          { text: 'Si at han heller vil tørke seg på en kafé.', translation: 'Dizer que prefere ir se secar num café.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🦐',
        text: 'Linu sa setningen med den dypeste skarre-r-en han klarte, og Tone lo så hun nesten mistet paraplyen. Da de kom ned igjen til Torget, sto Kjell fortsatt i boden, og Linu ropte: «Ka koster rekene i dag?» Kjell slo ut med armene og erklærte at pingvinen var bergenser nå, med eller uten fødselsattest. Linu fikk en pose reker på huset, og regnet fortsatte å falle som om ingenting hadde skjedd.',
        translation:
          'O Linu disse a frase com o r mais fundo que conseguiu, e a Tone riu tanto que quase deixou cair o guarda-chuva. Quando desceram de volta ao Torget, o Kjell ainda estava na barraca, e o Linu gritou: «Quanto custa o camarão hoje?» O Kjell abriu os braços e declarou que o pinguim agora era bergenser, com ou sem certidão de nascimento. O Linu ganhou um saquinho de camarão por conta da casa, e a chuva continuou caindo como se nada tivesse acontecido.',
        ending: { tone: 'bom', title: 'Bergenser honorário', message: 'Você entendeu o «ka», o «kem» e o «kor», acertou os dois gêneros do bergensk e ainda falou como um nativo, com erre e tudo.' },
      },
      final_neutro: {
        emoji: '☕',
        text: 'Linu kom ned til sentrum våt til skinnet og satte seg på en kafé for å tørke fjærene. Han hadde lært mye om bergensk, men han hadde ikke prøvd å snakke det selv. Da han gikk tilbake til Torget, hadde boden til Kjell allerede stengt for dagen. Neste gang, lovet han seg selv, skulle han bli stående i regnet og øve på r-en.',
        translation:
          'O Linu chegou ao centro encharcado até os ossos e sentou num café para secar as penas. Tinha aprendido muito sobre o bergensk, mas não tinha tentado falar. Quando voltou ao Torget, a barraca do Kjell já tinha fechado. Da próxima vez, prometeu a si mesmo, ia ficar na chuva treinando o erre.',
        ending: { tone: 'neutro', title: 'Seco, mas calado', message: 'Você entendeu a aula de dialeto, mas fugiu da chuva antes de praticar. Em Bergen, a chuva faz parte da lição.' },
      },
    },
  },
  {
    id: 'nb-h39',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Rolig i Stockholm',
    emoji: '🍦',
    summary: 'Em Estocolmo, o Linu e o amigo norueguês Håkon passam o dia com a sueca Elin, cada um falando a própria língua — até que os falsos amigos começam a aprontar.',
    cultural_context:
      'Noruegueses, suecos e dinamarqueses conseguem se entender falando cada um a sua língua, o que se chama de intercompreensão escandinava; pesquisas costumam mostrar que os noruegueses são os que melhor entendem os vizinhos, porque a sua escrita é próxima do dinamarquês e a sua fala, do sueco. A Noruega esteve em união com a Suécia de 1814 a 1905, sob o mesmo rei, mas com constituição e parlamento próprios.',
    start: 'start',
    glossary: [
      ['rolig (sv)', 'engraçado, divertido (em nb: calmo)'],
      ['glass (sv)', 'sorvete (em nb: vidro, copo; sorvete é «is»)'],
      ['semester (sv)', 'férias (em nb: semestre)'],
      ['å fika (sv)', 'tomar café com algo doce, fazer uma pausa'],
      ['et nabospråk', 'uma língua vizinha'],
      ['en falsk venn', 'um falso amigo (palavra traiçoeira)'],
      ['å bytte til engelsk', 'passar para o inglês'],
      ['unionen', 'a união (Suécia–Noruega, 1814–1905)'],
    ],
    nodes: {
      start: {
        emoji: '🏰',
        text: 'Linu og vennen Håkon kom med toget fra Oslo og gikk rett til Gamla stan, der de skulle møte den svenske venninnen hans, Elin. Hun ventet ved en brønn på et lite torg, og da hun fikk øye på dem, ropte hun: «Hej! Vad roligt att ni kom!» Håkon svarte på norsk, og Elin fortsatte på svensk, som om det var den mest naturlige ting i verden. Linu forsto nesten alt, men han stusset over ordet «roligt».',
        translation:
          'O Linu e o amigo Håkon chegaram de trem de Oslo e foram direto para Gamla stan, a cidade velha, onde iam encontrar a amiga sueca dele, Elin. Ela esperava junto a um poço numa pracinha, e quando os viu, gritou: «Oi! Que legal que vocês vieram!» O Håkon respondeu em norueguês, e a Elin continuou em sueco, como se fosse a coisa mais natural do mundo. O Linu entendeu quase tudo, mas estranhou a palavra «roligt».',
        choices: [
          { text: 'Hviske til Håkon og spørre hva «roligt» betyr.', translation: 'Cochichar com o Håkon e perguntar o que quer dizer «roligt».', next: 'rolig' },
          { text: 'Svare på norsk, sakte og tydelig.', translation: 'Responder em norueguês, devagar e com clareza.', next: 'samtale' },
        ],
      },
      rolig: {
        emoji: '🤫',
        text: '«På svensk betyr rolig morsomt eller hyggelig, mens det på norsk betyr stille og avslappet», hvisket Håkon. «Så når Elin sier at det er roligt at vi kom, mener hun at det er gøy, ikke at vi er kjedelige.» Han fortalte at nordmenn og svensker har mange slike falske venner, ord som ser like ut, men betyr noe annet. «Hvis en svenske sier at du er rolig, er det altså et kompliment for humoren din», sa han.',
        translation:
          '«Em sueco, “rolig” quer dizer engraçado ou agradável, enquanto em norueguês quer dizer calmo e tranquilo», cochichou o Håkon. «Então, quando a Elin diz que é “roligt” a gente ter vindo, ela quer dizer que é divertido, e não que a gente é sem graça.» Contou que noruegueses e suecos têm muitos falsos amigos assim, palavras que parecem iguais mas querem dizer outra coisa. «Se um sueco disser que você é “rolig”, portanto, é um elogio ao seu senso de humor», disse ele.',
        choices: [{ text: 'Svare Elin på norsk, sakte og tydelig.', translation: 'Responder à Elin em norueguês, devagar e com clareza.', next: 'samtale' }],
      },
      samtale: {
        emoji: '☕',
        text: 'Linu sa sakte og tydelig at han var glad for å være i Stockholm, og Elin forsto ham uten problemer. Hun forklarte at det de gjorde nå, kalles skandinavisk: hver snakker sitt eget språk, men litt langsommere, og unngår de vanskeligste ordene. Så foreslo hun at de skulle ta en pause på en kafé: «Ska vi fika?» På kafeen pekte hun på disken og spurte: «Vill ni ha glass?»',
        translation:
          'O Linu disse devagar e com clareza que estava contente de estar em Estocolmo, e a Elin o entendeu sem problema. Ela explicou que o que estavam fazendo se chama «escandinavo»: cada um fala a própria língua, mas um pouco mais devagar, e evita as palavras mais difíceis. Depois sugeriu uma pausa num café: «Vamos tomar um café?» No café, apontou para o balcão e perguntou: «Vocês querem sorvete?»',
        choices: [
          { text: '«Ja takk, jeg vil gjerne ha is!»', translation: '«Sim, obrigado, quero sorvete!»', next: 'kafe' },
          {
            text: '«Nei takk, jeg er ikke tørst.»',
            translation: '«Não, obrigado, não estou com sede.»',
            wrong: 'Em sueco, «glass» é sorvete — o que em norueguês se chama «is». Em norueguês, «et glass» é um copo ou vidro, e é por isso que a pergunta engana. A Elin estava apontando para o balcão dos sorvetes, não oferecendo bebida.',
          },
        ],
      },
      kafe: {
        emoji: '🥐',
        text: 'Elin lo og sa at Linu allerede hadde lært den viktigste falske vennen av dem alle. Mens de spiste is og kanelboller, fortalte Håkon at forskere har undersøkt hvor godt skandinaver forstår hverandre, og at nordmenn pleier å komme best ut. «Skriftspråket vårt ligner dansk, og uttalen ligner svensk, så vi får litt gratis fra begge», sa han. Elin la til at landene jo også hadde vært i union i nesten hundre år, fra 1814 til 1905, og at det ikke alltid var like hyggelig.',
        translation:
          'A Elin riu e disse que o Linu já tinha aprendido o falso amigo mais importante de todos. Enquanto comiam sorvete e pães de canela, o Håkon contou que pesquisadores já estudaram o quanto os escandinavos se entendem, e que os noruegueses costumam se sair melhor. «A nossa escrita se parece com o dinamarquês, e a pronúncia se parece com o sueco, então a gente ganha um pouco de graça dos dois», disse ele. A Elin acrescentou que os dois países, afinal, também estiveram em união por quase cem anos, de 1814 a 1905, e que nem sempre foi tão agradável.',
        choices: [{ text: 'Foreslå å gå til Vasamuseet.', translation: 'Sugerir ir ao museu do Vasa.', next: 'vasa' }],
      },
      vasa: {
        emoji: '⛵',
        text: 'I Vasamuseet sto de og stirret opp på det enorme krigsskipet, som sank i Stockholms havn på sin første tur i 1628 og ble hevet igjen i 1961. En ung guide fortalte om skipet på svensk, men hun snakket fort og brukte ord som Linu aldri hadde hørt. Håkon hvisket at det alltid er lettere å lese et nabospråk enn å høre det, særlig når folk snakker fort. Etter omvisningen hadde Linu et spørsmål, og guiden så vennlig på ham og ventet.',
        translation:
          'No museu do Vasa, ficaram olhando para cima, para o enorme navio de guerra, que afundou no porto de Estocolmo na primeira viagem, em 1628, e foi içado de volta em 1961. Uma guia jovem falou sobre o navio em sueco, mas falava rápido e usava palavras que o Linu nunca tinha ouvido. O Håkon cochichou que é sempre mais fácil ler uma língua vizinha do que ouvi-la, principalmente quando as pessoas falam depressa. Depois da visita o Linu tinha uma pergunta, e a guia olhou para ele com simpatia, esperando.',
        choices: [
          { text: 'Spørre på norsk, sakte og tydelig.', translation: 'Perguntar em norueguês, devagar e com clareza.', next: 'guide' },
          { text: 'Bytte til engelsk for sikkerhets skyld.', translation: 'Passar para o inglês, por via das dúvidas.', next: 'engelsk' },
        ],
      },
      guide: {
        emoji: '🧭',
        text: 'Linu spurte på norsk hvorfor skipet sank, og guiden svarte på svensk, nå mye saktere. Hun forklarte at skipet var for høyt og for tungt i toppen, og at det veltet i et vindkast etter å ha seilt litt over en kilometer. Linu forsto hvert ord, og han takket henne på norsk. Guiden smilte og sa at hun var glad hun hadde hatt denne omvisningen, for fra neste uke hadde hun endelig «semester».',
        translation:
          'O Linu perguntou em norueguês por que o navio afundou, e a guia respondeu em sueco, agora bem mais devagar. Explicou que o navio era alto demais e pesado demais em cima, e que virou numa rajada de vento depois de navegar pouco mais de um quilômetro. O Linu entendeu cada palavra e agradeceu em norueguês. A guia sorriu e disse que estava contente por ter feito aquela visita, porque a partir da semana seguinte ia finalmente entrar de «semester».',
        choices: [
          { text: '«God ferie!»', translation: '«Boas férias!»', next: 'final_bom' },
          {
            text: '«Lykke til med det nye semesteret på universitetet!»',
            translation: '«Boa sorte com o novo semestre na universidade!»',
            wrong: 'Outro falso amigo: em sueco, «semester» quer dizer férias. A guia disse que ia «finalmente» entrar de «semester» — ela vai descansar, não voltar às aulas. Em norueguês, férias é «ferie».',
          },
        ],
      },
      engelsk: {
        emoji: '🇬🇧',
        text: 'Linu stilte spørsmålet på engelsk, og guiden svarte på flytende engelsk, raskt og greit. Det fungerte, men da de gikk ut, sukket Elin. Hun fortalte at mange unge skandinaver bytter til engelsk med en gang, og at de dermed aldri får øvd på nabospråkene. «Hvis vi alltid snakker engelsk, slutter vi til slutt å forstå hverandre», sa hun, og Linu kjente seg litt skyldig.',
        translation:
          'O Linu fez a pergunta em inglês, e a guia respondeu num inglês fluente, rápido e direto. Funcionou, mas quando saíram, a Elin suspirou. Contou que muitos jovens escandinavos passam para o inglês na hora, e assim nunca praticam as línguas vizinhas. «Se a gente sempre falar inglês, no fim vamos deixar de nos entender», disse ela, e o Linu se sentiu um pouco culpado.',
        choices: [{ text: 'Love å prøve skandinavisk neste gang.', translation: 'Prometer tentar o escandinavo da próxima vez.', next: 'final_neutro' }],
      },
      final_bom: {
        emoji: '🌅',
        text: 'Guiden lyste opp og sa at en pingvin som kunne skandinavisk, var det morsomste hun hadde møtt hele sesongen. Utenfor museet gikk solen ned over vannet, og Elin sa at dagen hadde vært «jätterolig», noe Linu nå forsto var ment som et kompliment. På toget hjem til Oslo skrev han en liste i notatboka: rolig, glass, semester. Under listen skrev han med store bokstaver: Snakk sakte, lytt godt, og aldri gi opp nabospråket!',
        translation:
          'A guia se iluminou e disse que um pinguim que sabia escandinavo era a coisa mais engraçada que ela tinha visto na temporada inteira. Do lado de fora do museu o sol se punha sobre a água, e a Elin disse que o dia tinha sido «superdivertido», o que o Linu agora sabia que era um elogio. No trem de volta para Oslo, ele fez uma lista no caderninho: rolig, glass, semester. Embaixo da lista, escreveu em letras grandes: fale devagar, escute bem e nunca desista da língua vizinha!',
        ending: { tone: 'bom', title: 'Fluente em escandinavo', message: 'Você desvendou os falsos amigos «rolig», «glass» e «semester» e conversou com suecos cada um na sua língua — a intercompreensão na prática.' },
      },
      final_neutro: {
        emoji: '🚆',
        text: 'Om kvelden tok Linu og Håkon toget tilbake til Oslo. Dagen hadde vært fin, men Linu tenkte på det Elin hadde sagt om engelsk og nabospråk. Han hadde forstått mer svensk enn han hadde trodd, og likevel hadde han valgt den enkle løsningen da det gjaldt. Neste gang, bestemte han, skulle han stole mer på sitt eget norsk.',
        translation:
          'À noite, o Linu e o Håkon pegaram o trem de volta para Oslo. O dia tinha sido bom, mas o Linu ficou pensando no que a Elin tinha dito sobre o inglês e as línguas vizinhas. Ele tinha entendido mais sueco do que imaginava e, mesmo assim, escolheu a saída fácil na hora H. Da próxima vez, decidiu, ia confiar mais no próprio norueguês.',
        ending: { tone: 'neutro', title: 'Saída pelo inglês', message: 'Você entendeu os falsos amigos, mas preferiu o inglês na hora de perguntar. A intercompreensão escandinava só se mantém viva quando é usada.' },
      },
    },
  },
  // ───────────────────────── C1.2 ─────────────────────────
  {
    id: 'nb-h40',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Ingressen først',
    emoji: '📰',
    summary: 'Estagiário num jornal de Bodø, no Nordland, o Linu precisa transformar uma nota da polícia cheia de substantivos pesados numa notícia clara, com a fala de um pescador em nordnorsk.',
    cultural_context:
      'O Saltstraumen, perto de Bodø, no Nordland, é uma das correntes de maré mais fortes do mundo: a cada seis horas, aproximadamente, a maré muda de direção e a água passa por um estreito formando redemoinhos. O nordnorsk, o falar do norte, é reconhecível pelo «æ» (eu) e pelos infinitivos sem a vogal final («å kjør» em vez de «å kjøre»).',
    start: 'start',
    glossary: [
      ['en ingress', 'o lide (primeiro parágrafo da notícia)'],
      ['den omvendte pyramiden', 'a pirâmide invertida (o mais importante primeiro)'],
      ['en nominalisering', 'uma nominalização (verbo virando substantivo)'],
      ['en pressemelding', 'um comunicado à imprensa'],
      ['å kantre', 'emborcar, virar (barco)'],
      ['en tidevannsstrøm', 'uma corrente de maré'],
      ['æ / va (nordnorsk)', 'jeg / var (eu / era, estava)'],
      ['veit du (nordnorsk)', 'vet du (sabe?)'],
    ],
    nodes: {
      start: {
        emoji: '🗞️',
        text: 'Linu hadde sommerjobb i en lokalavis i Bodø, og en tirsdag ettermiddag kom vaktsjefen Randi bort til pulten hans med et ark i hånda. «Politiet har sendt ut en pressemelding om en kajakkpadler som kantret i Saltstraumen, og du skal skrive saken», sa hun. Hun la til at meldingen var skrevet på typisk politispråk, tung og full av substantiver, så han måtte oversette den til vanlig norsk. «Og husk: leserne våre skal forstå hva som skjedde, allerede etter første setning», sa hun.',
        translation:
          'O Linu tinha um emprego de verão num jornal local de Bodø, e numa terça-feira à tarde a chefe de plantão, Randi, veio até a mesa dele com uma folha na mão. «A polícia mandou um comunicado sobre um caiaquista que virou no Saltstraumen, e você vai escrever a matéria», disse ela. Acrescentou que o comunicado estava escrito no típico jargão policial, pesado e cheio de substantivos, então ele teria que traduzi-lo para o norueguês comum. «E lembre-se: os nossos leitores têm que entender o que aconteceu já na primeira frase», disse.',
        choices: [
          { text: 'Lese pressemeldingen nøye først.', translation: 'Ler o comunicado com atenção primeiro.', next: 'melding' },
          { text: 'Kjøre rett ut til Saltstraumen for å snakke med vitner.', translation: 'Ir direto para o Saltstraumen falar com testemunhas.', next: 'straumen' },
        ],
      },
      melding: {
        emoji: '👮',
        text: 'I meldingen sto det: «Politiet mottok kl. 14.10 melding om kantring av kajakk i Saltstraumen. Etter iverksettelse av søk ble vedkommende lokalisert og brakt i land av privat båt. Vedkommende ble fraktet til sykehus for undersøkelse.» Randi forklarte at «iverksettelse av søk» bare betyr at de begynte å lete, og at «vedkommende» er politiets måte å si «personen» på. «Nominaliseringer gjør teksten stiv og skjuler hvem som gjorde hva», sa hun, og spurte hva som egentlig hadde skjedd med padleren.',
        translation:
          'O comunicado dizia: «A polícia recebeu às 14h10 notificação de emborcamento de caiaque no Saltstraumen. Após o desencadeamento de buscas, o indivíduo foi localizado e trazido à terra por embarcação particular. O indivíduo foi transportado ao hospital para exame.» A Randi explicou que «iverksettelse av søk» quer dizer só que eles começaram a procurar, e que «vedkommende» é o jeito da polícia de dizer «a pessoa». «As nominalizações deixam o texto duro e escondem quem fez o quê», disse ela, e perguntou o que tinha acontecido de fato com o caiaquista.',
        choices: [
          { text: '«Han ble funnet, hentet i land av en båt og kjørt til sykehuset for en sjekk.»', translation: '«Ele foi encontrado, trazido à terra por um barco e levado ao hospital para um exame.»', next: 'straumen' },
          {
            text: '«Han er fortsatt savnet, og politiet leter etter ham.»',
            translation: '«Ele continua desaparecido, e a polícia está procurando por ele.»',
            wrong: 'Por trás das nominalizações, o comunicado diz que o caiaquista «ble lokalisert og brakt i land» — foi localizado e trazido à terra por um barco particular — e depois levado ao hospital só para exame. As buscas já terminaram.',
          },
        ],
      },
      straumen: {
        emoji: '🌀',
        text: 'Linu tok bussen ut til Saltstraumen, der vannet fosset gjennom sundet under brua og laget store virvler. En skiltplate forklarte at strømmen skifter retning omtrent hver sjette time, og at den regnes som en av verdens sterkeste tidevannsstrømmer. Nede ved kaia sto en eldre fisker og spylte dekket på en liten sjark, og folk rundt pekte på ham. «Det var han som hentet padleren», hvisket en dame, og Linu tok fram notatblokka.',
        translation:
          'O Linu pegou o ônibus até o Saltstraumen, onde a água passava com força pelo estreito, debaixo da ponte, formando grandes redemoinhos. Uma placa explicava que a corrente muda de direção mais ou menos a cada seis horas e que é considerada uma das correntes de maré mais fortes do mundo. Lá embaixo, no cais, um pescador de idade lavava o convés de um barquinho de pesca, e as pessoas em volta apontavam para ele. «Foi ele que resgatou o caiaquista», cochichou uma senhora, e o Linu pegou o bloquinho.',
        choices: [{ text: 'Intervjue fiskeren.', translation: 'Entrevistar o pescador.', next: 'oddvar' }],
      },
      oddvar: {
        emoji: '🎣',
        text: 'Fiskeren het Oddvar, og han svarte på bred nordlandsdialekt mens han fortsatte å spyle. «Æ så han med en gang, og da va det bare å kjør ut. Straumen tar ingen hensyn, veit du», sa han. Han fortalte at padleren var en ung turist som hadde undervurdert strømmen, men at han heldigvis hadde redningsvest på seg. Linu skrev ned hvert ord og lurte på om han kunne bruke dialekten direkte i avisa.',
        translation:
          'O pescador se chamava Oddvar e respondia num dialeto do Nordland bem carregado, sem parar de lavar o barco. «Eu vi o rapaz na hora, e aí foi só sair com o barco. A corrente não perdoa ninguém, sabe», disse ele. Contou que o caiaquista era um turista jovem que tinha subestimado a corrente, mas que por sorte estava de colete salva-vidas. O Linu anotou cada palavra e ficou pensando se podia usar o dialeto direto no jornal.',
        choices: [{ text: 'Dra tilbake til redaksjonen og skrive.', translation: 'Voltar para a redação e escrever.', next: 'skrive' }],
      },
      skrive: {
        emoji: '🔺',
        text: 'Tilbake i redaksjonen forklarte Randi at mange aviser skriver sitater om til bokmål eller nynorsk, men at et dialektord av og til får stå, for å få fram stemmen til personen. Så tegnet hun en trekant med spissen ned på en lapp: «Den omvendte pyramiden: det viktigste først, bakgrunnen til slutt.» Ingressen skulle svare på hvem, hva, hvor og når, i én klar setning med verb i aktiv form. Linu skrev to forslag og viste dem til henne.',
        translation:
          'De volta à redação, a Randi explicou que muitos jornais reescrevem as citações em bokmål ou nynorsk, mas que às vezes uma palavra do dialeto fica, para mostrar a voz da pessoa. Depois desenhou num papelzinho um triângulo de ponta para baixo: «A pirâmide invertida: o mais importante primeiro, o contexto no fim.» O lide tinha que responder quem, o quê, onde e quando, numa frase clara, com verbo na voz ativa. O Linu escreveu duas propostas e mostrou a ela.',
        choices: [
          { text: '«En lokal fisker reddet tirsdag ettermiddag en kajakkpadler som hadde kantret i Saltstraumen.»', translation: '«Um pescador local salvou na terça à tarde um caiaquista que tinha virado no Saltstraumen.»', next: 'tittel' },
          {
            text: '«Saltstraumen er en av verdens sterkeste tidevannsstrømmer, og den trekker mange turister hver sommer.»',
            translation: '«O Saltstraumen é uma das correntes de maré mais fortes do mundo e atrai muitos turistas todo verão.»',
            wrong: 'Isso é contexto, e pela pirâmide invertida o contexto vai no fim. A Randi pediu um lide que respondesse quem, o quê, onde e quando: um pescador (quem) salvou um caiaquista (o quê) no Saltstraumen (onde) na terça à tarde (quando).',
          },
        ],
      },
      tittel: {
        emoji: '✏️',
        text: '«Det er en ingress», sa Randi fornøyd. «Kort, aktiv, og vi vet med en gang hvem som gjorde hva.» Nå manglet bare tittelen, og hun minnet ham på at en tittel helst skal ha et verb og ikke være lengre enn nødvendig. Linu så på skjermen og veide to muligheter mot hverandre.',
        translation:
          '«Isso é um lide», disse a Randi, satisfeita. «Curto, na voz ativa, e a gente sabe na hora quem fez o quê.» Agora só faltava o título, e ela lembrou que um título de preferência tem verbo e não é mais longo do que o necessário. O Linu olhou para a tela e pesou duas possibilidades.',
        choices: [
          { text: '«Fisker reddet padler i Saltstraumen»', translation: '«Pescador salvou caiaquista no Saltstraumen»', next: 'final_bom' },
          { text: '«Gjennomføring av redningsaksjon i forbindelse med kantring»', translation: '«Realização de operação de resgate em conexão com emborcamento»', next: 'tung' },
        ],
      },
      tung: {
        emoji: '😩',
        text: 'Randi leste tittelen høyt og begynte å le. «Nå skriver du jo som politiet igjen», sa hun, «ingen leser videre etter en sånn tittel.» Hun forklarte at «gjennomføring av redningsaksjon» er tre substantiver på rad der ett verb hadde holdt, og at leseren ikke får vite hvem som reddet hvem. Klokka nærmet seg deadline, og hun sa at hun kunne ordne tittelen selv denne gangen.',
        translation:
          'A Randi leu o título em voz alta e começou a rir. «Agora você está escrevendo como a polícia de novo», disse ela, «ninguém continua lendo depois de um título desses.» Explicou que «gjennomføring av redningsaksjon» são três substantivos em fila onde um verbo bastava, e que o leitor não fica sabendo quem salvou quem. O relógio se aproximava do fechamento, e ela disse que podia resolver o título ela mesma dessa vez.',
        choices: [{ text: 'La Randi skrive tittelen.', translation: 'Deixar a Randi escrever o título.', next: 'final_neutro' }],
      },
      final_bom: {
        emoji: '🏆',
        text: 'Saken ble lagt ut på nettet samme kveld, og i løpet av en time var den den mest leste i avisa. Oddvar ringte redaksjonen og sa at han ikke hadde trodd at en pingvin kunne skrive så bra norsk, og at sitatet hans sto akkurat slik han hadde sagt det. Randi klistret en lapp på skjermen til Linu der det sto: «Verb, ikke substantiver!» Han lot lappen henge der resten av sommeren.',
        translation:
          'A matéria foi publicada no site naquela mesma noite e, em uma hora, era a mais lida do jornal. O Oddvar ligou para a redação e disse que nunca tinha imaginado que um pinguim soubesse escrever um norueguês tão bom, e que a fala dele estava exatamente como ele tinha dito. A Randi colou um bilhete na tela do Linu: «Verbos, não substantivos!» Ele deixou o bilhete ali pelo resto do verão.',
        ending: { tone: 'bom', title: 'A mais lida do dia', message: 'Você desmontou as nominalizações da polícia, escreveu um lide perfeito e um título com verbo — jornalismo de verdade.' },
      },
      final_neutro: {
        emoji: '🕙',
        text: 'Randi skrev om tittelen på to minutter, og saken kom ut rett før deadline. Ingressen var god, men Linu visste at han hadde falt tilbake i det tunge språket da det gjaldt som mest. Om kvelden leste han pressemeldingen fra politiet en gang til og strøk under alle substantivene som kunne vært verb. Neste gang, tenkte han, skulle tittelen være hans egen.',
        translation:
          'A Randi reescreveu o título em dois minutos, e a matéria saiu logo antes do fechamento. O lide estava bom, mas o Linu sabia que tinha recaído na linguagem pesada justamente na hora mais importante. À noite, ele releu o comunicado da polícia e sublinhou todos os substantivos que podiam ter sido verbos. Da próxima vez, pensou, o título ia ser dele.',
        ending: { tone: 'neutro', title: 'Quase lá', message: 'Você entendeu o comunicado e acertou o lide, mas o título voltou ao jargão. Lembre-se: verbo no lugar de substantivo.' },
      },
    },
  },
  {
    id: 'nb-h41',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Klart språk i Namsos',
    emoji: '✉️',
    summary: 'Na prefeitura de Namsos, uma senhora de 84 anos chega furiosa com uma carta que ninguém consegue entender, e o Linu ajuda a reescrevê-la em linguagem clara.',
    cultural_context:
      'Namsos, na foz do rio Namsen, em Trøndelag, foi quase toda destruída por um bombardeio alemão em abril de 1940 e reconstruída depois da guerra; o Namsen é um dos rios de salmão mais famosos da Noruega. Desde 2022, a lei da língua obriga os órgãos públicos noruegueses a usar uma linguagem clara, correta e adaptada a quem recebe o texto — o chamado «klarspråk».',
    start: 'start',
    glossary: [
      ['klarspråk', 'linguagem clara'],
      ['en søknad', 'um requerimento, um pedido'],
      ['å behandle en sak', 'analisar um processo'],
      ['et situasjonskart', 'uma planta de localização'],
      ['et naust', 'um galpão de barcos à beira d’água'],
      ['å medføre', 'acarretar, ter como consequência'],
      ['et avslag', 'uma recusa, um indeferimento'],
      ['æ / itj / kor (trøndersk)', 'jeg / ikke / hvor (eu / não / onde)'],
    ],
    nodes: {
      start: {
        emoji: '🏢',
        text: 'Linu hjalp til på servicetorget i Namsos kommune da en liten, bestemt dame kom inn med et brev i hånda. Hun het Magnhild, var 84 år og hadde søkt om å bygge et nytt naust nede ved Namsen, der mannen hennes hadde hatt båten sin i femti år. «Æ har lest dette brevet fem ganger, og æ skjønner itj et ord!» sa hun på trøndersk og slo brevet i disken. Saksbehandleren Tor så på Linu og løftet øyenbrynene.',
        translation:
          'O Linu estava ajudando no balcão de atendimento da prefeitura de Namsos quando entrou uma senhora baixinha e decidida, com uma carta na mão. Chamava-se Magnhild, tinha 84 anos e tinha pedido autorização para construir um galpão de barcos novo à beira do Namsen, onde o marido dela guardou o barco por cinquenta anos. «Eu li esta carta cinco vezes e não entendo uma palavra!», disse ela em trøndersk, batendo a carta no balcão. O funcionário Tor olhou para o Linu e ergueu as sobrancelhas.',
        choices: [
          { text: 'Lese brevet høyt sammen med henne.', translation: 'Ler a carta em voz alta com ela.', next: 'brev' },
          { text: 'Tilby henne en kopp kaffe først.', translation: 'Oferecer uma xícara de café primeiro.', next: 'kaffe' },
        ],
      },
      kaffe: {
        emoji: '☕',
        text: 'Mens Magnhild drakk kaffen, fortalte hun at hun var født i 1942, i en by som nesten ikke fantes lenger. Namsos ble bombet i april 1940, og det meste av sentrum brant ned, så foreldrene hennes bodde i en brakke til den nye byen var bygd opp. «Vi har bygd opp igjen en hel by, så et naust burde vel gå greit», sa hun tørt. Linu smilte og foreslo at de nå kunne se på brevet sammen.',
        translation:
          'Enquanto tomava o café, a Magnhild contou que tinha nascido em 1942, numa cidade que quase não existia mais. Namsos foi bombardeada em abril de 1940, e a maior parte do centro pegou fogo, então os pais dela moraram num barracão até a cidade nova ser reconstruída. «A gente reconstruiu uma cidade inteira, então um galpão de barcos não deve ser problema», disse ela, seca. O Linu sorriu e sugeriu que agora eles podiam olhar a carta juntos.',
        choices: [{ text: 'Lese brevet høyt.', translation: 'Ler a carta em voz alta.', next: 'brev' }],
      },
      brev: {
        emoji: '📄',
        text: 'Linu leste: «Det vises til Deres søknad om oppføring av naust. Søknaden kan ikke behandles før innsendelse av situasjonskart har funnet sted. Manglende innsendelse innen 1. mars vil medføre at saken avsluttes uten realitetsbehandling.» Magnhild slo ut med armene og spurte om det betydde at hun hadde fått nei. Tor kremtet og så litt flau ut, for brevet var skrevet etter en gammel mal. Linu leste setningene en gang til og prøvde å finne ut hva Magnhild faktisk måtte gjøre.',
        translation:
          'O Linu leu: «Faz-se referência ao requerimento de V. Sa. para edificação de galpão de barcos. O requerimento não pode ser analisado antes que se efetue o envio de planta de localização. O não envio até 1º de março acarretará o encerramento do processo sem análise de mérito.» A Magnhild abriu os braços e perguntou se aquilo queria dizer que ela tinha levado um não. O Tor pigarreou, meio sem graça, porque a carta tinha sido escrita a partir de um modelo antigo. O Linu leu as frases mais uma vez, tentando descobrir o que a Magnhild precisava fazer de fato.',
        choices: [
          { text: '«Nei, du må bare sende et kart før 1. mars, så behandler de søknaden.»', translation: '«Não, você só precisa mandar uma planta antes de 1º de março, e aí eles analisam o pedido.»', next: 'oversett' },
          {
            text: '«Ja, dessverre: søknaden er avslått, og naustet kan ikke bygges.»',
            translation: '«Sim, infelizmente: o pedido foi negado, e o galpão não pode ser construído.»',
            wrong: 'A carta não nega nada. «Kan ikke behandles før innsendelse av situasjonskart» quer dizer que o pedido só vai ser analisado quando ela mandar a planta; o processo só é encerrado se a planta não chegar até 1º de março.',
          },
        ],
      },
      oversett: {
        emoji: '💡',
        text: 'Magnhild pustet lettet ut, og Tor innrømmet at brevet burde vært skrevet annerledes. Han fortalte at språkloven fra 2022 krever at offentlige organer skriver klart, korrekt og tilpasset mottakeren. «Tipsene er enkle: skriv du, ikke De, bruk verb i stedet for substantiver, sett det viktigste først og hold setningene korte», sa han. Så ba han Linu om å skrive om den første setningen i brevet.',
        translation:
          'A Magnhild soltou um suspiro de alívio, e o Tor admitiu que a carta devia ter sido escrita de outro jeito. Contou que a lei da língua de 2022 exige que os órgãos públicos escrevam de forma clara, correta e adaptada a quem recebe. «As dicas são simples: escreva “du”, não “De”, use verbos em vez de substantivos, ponha o mais importante primeiro e faça frases curtas», disse ele. Depois pediu ao Linu que reescrevesse a primeira frase da carta.',
        choices: [
          { text: '«Vi har fått søknaden din om å bygge naust.»', translation: '«Recebemos o seu pedido para construir um galpão de barcos.»', next: 'andre' },
          {
            text: '«Det vises til mottatt søknad vedrørende naustoppføring.»',
            translation: '«Faz-se referência ao requerimento recebido referente à edificação de galpão.»',
            wrong: 'Essa frase continua em juridiquês: voz passiva sem sujeito («det vises til»), substantivos no lugar de verbos («naustoppføring») e nenhum «du». O Tor pediu o contrário: quem faz o quê, com verbo e falando direto com a Magnhild.',
          },
        ],
      },
      andre: {
        emoji: '📝',
        text: 'Sammen skrev de resten av brevet på nytt: «Før vi kan behandle søknaden, må du sende oss et kart som viser hvor naustet skal stå. Hvis vi ikke får kartet innen 1. mars, må vi avslutte saken.» Magnhild leste det langsomt og nikket for hver setning. «Ja, dette skjønner jo til og med æ», sa hun, «men kor skal æ få tak i et sånt kart?» Tor forklarte at kartet kunne bestilles på nettet, eller at de kunne hjelpe henne med det på stedet.',
        translation:
          'Juntos, reescreveram o resto da carta: «Antes de analisarmos o pedido, você precisa nos mandar uma planta que mostre onde o galpão vai ficar. Se não recebermos a planta até 1º de março, vamos ter que encerrar o processo.» A Magnhild leu devagar, assentindo a cada frase. «Isso aí até eu entendo», disse ela, «mas onde é que eu arranjo uma planta dessas?» O Tor explicou que a planta podia ser pedida pela internet, ou que eles podiam ajudá-la ali mesmo.',
        choices: [
          { text: 'Hjelpe Magnhild med å bestille kartet med en gang.', translation: 'Ajudar a Magnhild a pedir a planta na hora.', next: 'kart' },
          { text: 'Be henne komme tilbake en annen dag, siden køen er lang.', translation: 'Pedir que ela volte outro dia, já que a fila está grande.', next: 'final_neutro' },
        ],
      },
      kart: {
        emoji: '🗺️',
        text: 'Linu fant eiendommen hennes på skjermen, og Tor skrev ut kartet på stedet. Magnhild tok en penn og satte et bestemt kryss ved elvebredden, akkurat der det gamle naustet hadde stått. Hun fortalte at mannen hennes hadde fått en laks på over tjue kilo i Namsen en gang, og at ingen i familien hadde trodd på ham før de så bildet. «Nå skal naustet stå der igjen, for barnebarna», sa hun og leverte kartet over disken.',
        translation:
          'O Linu achou o terreno dela na tela, e o Tor imprimiu a planta na hora. A Magnhild pegou uma caneta e fez um X decidido na margem do rio, exatamente onde o galpão antigo ficava. Contou que o marido uma vez pescou no Namsen um salmão de mais de vinte quilos, e que ninguém da família acreditou até ver a foto. «Agora o galpão vai voltar para lá, para os netos», disse, e entregou a planta por cima do balcão.',
        choices: [{ text: 'Registrere kartet i saken.', translation: 'Registrar a planta no processo.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🛶',
        text: 'Tor registrerte kartet i saken, og han lovet at søknaden skulle bli behandlet i løpet av noen uker. Etterpå gikk han og Linu gjennom alle de gamle brevmalene til kommunen og skrev dem om, én etter én. I juni kom det et postkort til servicetorget med et bilde av et nytt, rødt naust ved Namsen. På baksiden sto det med skjelvende håndskrift: «Takk for at dere skreiv sånn at folk skjønner det. Hilsen Magnhild.»',
        translation:
          'O Tor registrou a planta no processo e prometeu que o pedido seria analisado em poucas semanas. Depois, ele e o Linu revisaram todos os modelos antigos de carta da prefeitura e os reescreveram, um por um. Em junho chegou ao balcão de atendimento um cartão-postal com a foto de um galpão de barcos novo, vermelho, à beira do Namsen. No verso estava escrito, com letra tremida: «Obrigada por escreverem de um jeito que a gente entende. Um abraço, Magnhild.»',
        ending: { tone: 'bom', title: 'Um galpão vermelho no Namsen', message: 'Você decifrou o juridiquês, reescreveu a carta em linguagem clara e ainda resolveu o problema da Magnhild no mesmo dia.' },
      },
      final_neutro: {
        emoji: '⏳',
        text: 'Magnhild gikk hjem med det nye brevet i veska, og hun forsto endelig hva hun måtte gjøre. Men kartet klarte hun ikke å bestille alene, og det tok to nye turer til servicetorget før alt var i orden. Søknaden kom fram noen dager før fristen, med liten margin. Linu tenkte at klart språk er et godt stykke på vei, men at noen ganger trenger folk en hjelpende hånd også.',
        translation:
          'A Magnhild foi para casa com a carta nova na bolsa e finalmente entendeu o que tinha que fazer. Mas não conseguiu pedir a planta sozinha, e foram precisas mais duas idas ao balcão até tudo ficar certo. O pedido chegou poucos dias antes do prazo, por pouco. O Linu pensou que a linguagem clara resolve boa parte do caminho, mas que às vezes as pessoas também precisam de uma mão.',
        ending: { tone: 'neutro', title: 'Por um triz', message: 'Você entendeu a carta e a reescreveu bem, mas deixou a Magnhild resolver a parte difícil sozinha. Clareza e ajuda andam juntas.' },
      },
    },
  },
  {
    id: 'nb-h42',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Stev og sammendrag',
    emoji: '🎻',
    summary: 'Em Setesdal, o Linu ajuda uma pesquisadora a transformar anotações entusiasmadas sobre os «stev», os versos cantados da região, num resumo acadêmico sóbrio e bem fundamentado.',
    cultural_context:
      'Setesdal, um vale no sul da Noruega, é conhecido pelas tradições de música e dança, pelos trajes com muita prataria e por um dialeto que costuma ser descrito como um dos mais arcaicos do país. Em 2019, a prática da música e da dança tradicionais de Setesdal, com o canto de «stev» (versos curtos de quatro linhas, muitas vezes improvisados em duelo, o «stevjing»), entrou na lista do patrimônio cultural imaterial da UNESCO.',
    start: 'start',
    glossary: [
      ['et stev', 'uma quadra cantada, muitas vezes improvisada'],
      ['stevjing', 'duelo de quadras cantadas'],
      ['et sammendrag', 'um resumo (acadêmico)'],
      ['en problemstilling', 'uma pergunta de pesquisa'],
      ['å tyde på', 'indicar, sugerir'],
      ['trolig', 'provavelmente'],
      ['en informant', 'um informante (em pesquisa)'],
      ['immateriell kulturarv', 'patrimônio cultural imaterial'],
    ],
    nodes: {
      start: {
        emoji: '🏔️',
        text: 'I Valle i Setesdal bodde Linu en uke hos Gunhild, en folkemusikkforsker som hadde vokst opp i dalen. Hun hadde intervjuet eldre og yngre sangere om stev og skulle sende et sammendrag til et fagtidsskrift innen fredag. En kveld ga hun ham utkastet sitt og sukket: «Jeg har skrevet med hjertet, ikke med hodet, og det merkes.» Den første setningen lød: «Stevene i Setesdal er helt fantastiske, og alle burde høre dem!»',
        translation:
          'Em Valle, em Setesdal, o Linu passou uma semana na casa da Gunhild, uma pesquisadora de música folclórica que tinha crescido no vale. Ela tinha entrevistado cantores mais velhos e mais jovens sobre os stev e precisava mandar um resumo a uma revista científica até sexta-feira. Uma noite, entregou a ele o rascunho e suspirou: «Escrevi com o coração, não com a cabeça, e dá para perceber.» A primeira frase dizia: «Os stev de Setesdal são absolutamente fantásticos, e todo mundo devia ouvi-los!»',
        choices: [
          { text: 'Si at tonen passer bedre i et leserinnlegg enn i en fagartikkel.', translation: 'Dizer que o tom combina mais com uma carta do leitor do que com um artigo científico.', next: 'register' },
          { text: 'Be om å få høre stev selv før han sier noe.', translation: 'Pedir para ouvir stev ele mesmo antes de dar palpite.', next: 'stevjing' },
        ],
      },
      stevjing: {
        emoji: '🎶',
        text: 'Gunhild tok ham med til bygdetunet, der to eldre menn sto midt i rommet og sang stev til hverandre, fire linjer om gangen. Den ene begynte, den andre svarte på det første stevet, og slik fortsatte de, stadig kvikkere og stadig mer ertende. Gunhild forklarte at mange stev er gamle og går i arv, mens andre blir diktet på stedet, og at det er dette hun kaller stevjing. Etter en halvtime hadde Linu forstått at tradisjonen fortjente et sammendrag som tok den på alvor.',
        translation:
          'A Gunhild o levou ao museu da vila, onde dois senhores estavam no meio da sala cantando stev um para o outro, quatro versos de cada vez. Um começava, o outro respondia ao primeiro stev, e assim continuavam, cada vez mais rápidos e cada vez mais provocadores. A Gunhild explicou que muitos stev são antigos e passam de geração em geração, enquanto outros são inventados na hora, e que é isso que ela chama de stevjing. Depois de meia hora, o Linu tinha entendido que aquela tradição merecia um resumo que a levasse a sério.',
        choices: [{ text: 'Gå hjem og se på utkastet sammen.', translation: 'Voltar para casa e olhar o rascunho juntos.', next: 'register' }],
      },
      register: {
        emoji: '🎓',
        text: 'Ved kjøkkenbordet forklarte Gunhild hvordan et godt sammendrag er bygd opp: først problemstillingen, så metoden, så funnene og til slutt hva funnene betyr. «Fagspråket skal være presist og nøkternt; det er argumentene og kildene som skal overbevise, ikke utropstegnene», sa hun. Hun la til at man ikke skal skjule alt bak substantiver, men heller ikke skrive som i en melding til en venn. Så ba hun Linu om å foreslå en ny åpningssetning.',
        translation:
          'Na mesa da cozinha, a Gunhild explicou como se monta um bom resumo: primeiro a pergunta de pesquisa, depois o método, depois os resultados e, por fim, o que os resultados significam. «A linguagem acadêmica tem que ser precisa e sóbria; quem convence são os argumentos e as fontes, não os pontos de exclamação», disse ela. Acrescentou que não se deve esconder tudo atrás de substantivos, mas também não se deve escrever como numa mensagem para um amigo. Depois pediu ao Linu que sugerisse uma nova frase de abertura.',
        choices: [
          { text: '«Artikkelen undersøker hvordan stevtradisjonen i Setesdal blir overført fra én generasjon til den neste.»', translation: '«O artigo investiga como a tradição dos stev em Setesdal é transmitida de uma geração para a seguinte.»', next: 'funn' },
          {
            text: '«Alle som har hørt stev i Setesdal, vet at dette er verdens fineste tradisjon.»',
            translation: '«Todo mundo que já ouviu stev em Setesdal sabe que esta é a tradição mais bonita do mundo.»',
            wrong: 'A Gunhild pediu uma abertura precisa e sóbria, com a pergunta de pesquisa. «Todo mundo sabe» e «a mais bonita do mundo» são opinião e exagero, o mesmo problema do rascunho. A frase certa diz o que o artigo investiga.',
          },
        ],
      },
      funn: {
        emoji: '🔍',
        text: 'Gunhild nikket og skrev videre om metoden: tjue intervjuer med informanter mellom sytten og nittito år, og opptak fra tre kappleiker. Om funnene skrev hun: «Materialet tyder på at yngre utøvere trolig lærer stev like mye gjennom kurs og kappleiker som i familien.» Linu stoppet ved ordene «tyder på» og «trolig» og spurte hvorfor hun var så forsiktig. «Fordi tjue intervjuer ikke beviser noe for hele dalen», svarte hun, og spurte om han forsto hva setningen egentlig påsto.',
        translation:
          'A Gunhild assentiu e continuou escrevendo sobre o método: vinte entrevistas com informantes de dezessete a noventa e dois anos e gravações de três concursos de música folclórica. Sobre os resultados, escreveu: «O material indica que os intérpretes mais jovens provavelmente aprendem stev tanto em cursos e concursos quanto na família.» O Linu parou nas palavras «tyder på» e «trolig» e perguntou por que ela era tão cautelosa. «Porque vinte entrevistas não provam nada sobre o vale inteiro», respondeu ela, e perguntou se ele tinha entendido o que a frase afirmava de fato.',
        choices: [
          { text: '«Du påstår ikke at det er bevist, bare at det virker sannsynlig ut fra materialet.»', translation: '«Você não afirma que está provado, só que parece provável a partir do material.»', next: 'kilde' },
          {
            text: '«Du påstår altså at ingen unge lærer stev hjemme lenger.»',
            translation: '«Então você afirma que nenhum jovem aprende mais stev em casa.»',
            wrong: 'A frase diz que os jovens aprendem «tanto» em cursos «quanto» na família — ou seja, a família continua importante. E «tyder på» (indica) e «trolig» (provavelmente) mostram que é uma conclusão cautelosa, não uma prova.',
          },
        ],
      },
      kilde: {
        emoji: '📚',
        text: '«Nettopp», sa Gunhild, «forsiktige formuleringer er ikke svakhet, det er ærlighet.» Linu foreslo at hun burde nevne at tradisjonen ble skrevet inn på UNESCOs liste over immateriell kulturarv i 2019, med henvisning til selve vedtaket. Gunhild syntes det var en god idé, men minnet ham på at en kilde skal støtte et argument, ikke pynte på teksten. Klokka var blitt ni, og fra bygdetunet hørtes felemusikk og latter.',
        translation:
          '«Exatamente», disse a Gunhild, «formulações cautelosas não são fraqueza, são honestidade.» O Linu sugeriu que ela mencionasse que a tradição foi inscrita na lista de patrimônio cultural imaterial da UNESCO em 2019, citando a própria decisão. A Gunhild achou uma boa ideia, mas lembrou que uma fonte deve sustentar um argumento, não enfeitar o texto. Já eram nove horas, e do museu da vila vinha som de rabeca e risadas.',
        choices: [
          { text: 'Bli ved kjøkkenbordet og gjøre sammendraget ferdig.', translation: 'Ficar na mesa da cozinha e terminar o resumo.', next: 'sammendrag' },
          { text: 'Foreslå å gå på dansen og skrive ferdig i morgen.', translation: 'Sugerir ir ao baile e terminar amanhã.', next: 'dans' },
        ],
      },
      sammendrag: {
        emoji: '✅',
        text: 'De skrev til nesten midnatt, og til slutt var sammendraget på to hundre og femti ord, stramt og klart. Gunhild leste det høyt: problemstilling, metode, funn og konklusjon, uten et eneste utropstegn. «Det er fortsatt hjertet mitt, men nå har det fått et hode», sa hun og smilte. Hun sendte det inn samme kveld, to dager før fristen.',
        translation:
          'Escreveram até quase meia-noite, e no fim o resumo tinha duzentas e cinquenta palavras, enxuto e claro. A Gunhild leu em voz alta: pergunta de pesquisa, método, resultados e conclusão, sem um único ponto de exclamação. «Continua sendo o meu coração, mas agora ele ganhou uma cabeça», disse ela, sorrindo. Mandou o texto naquela mesma noite, dois dias antes do prazo.',
        choices: [{ text: 'Bli med på kappleiken dagen etter.', translation: 'Ir ao concurso de música no dia seguinte.', next: 'final_bom' }],
      },
      dans: {
        emoji: '💃',
        text: 'De gikk på dansen, og Linu prøvde seg på gangar med tre forskjellige partnere og tråkket hver av dem på tærne. Det var den morsomste kvelden på lenge, men dagen etter hadde Gunhild vondt i hodet og en frist som nærmet seg. Hun skrev sammendraget ferdig i full fart, og noen av de forsiktige formuleringene forsvant i stresset. Linu så at setningen om funnene nå sto uten «trolig», og han visste at det ikke var helt ærlig.',
        translation:
          'Foram ao baile, e o Linu se arriscou no gangar (uma dança tradicional) com três parceiros diferentes e pisou no pé de todos eles. Foi a noite mais divertida em muito tempo, mas no dia seguinte a Gunhild estava com dor de cabeça e um prazo se aproximando. Ela terminou o resumo às pressas, e algumas das formulações cautelosas sumiram na correria. O Linu viu que a frase sobre os resultados agora estava sem o «trolig», e sabia que aquilo não era totalmente honesto.',
        choices: [{ text: 'Påpeke det, men la Gunhild bestemme.', translation: 'Apontar isso, mas deixar a Gunhild decidir.', next: 'final_neutro' }],
      },
      final_bom: {
        emoji: '🎤',
        text: 'På kappleiken dagen etter satt Linu på første rad, og da en av de eldre sangerne fikk høre om hjelpen med sammendraget, diktet han et stev på stedet. Stevet handlet om en pingvin som kom til Setesdal for å lære å synge, men endte med å lære professoren å skrive. Salen lo og klappet, og Gunhild ble rød til ørene. Tre uker senere kom svaret fra tidsskriftet: sammendraget var godtatt uten endringer.',
        translation:
          'No concurso do dia seguinte, o Linu sentou na primeira fila, e quando um dos cantores mais velhos soube da ajuda com o resumo, inventou um stev na hora. O stev falava de um pinguim que veio a Setesdal para aprender a cantar, mas acabou ensinando a professora a escrever. A plateia riu e aplaudiu, e a Gunhild ficou vermelha até as orelhas. Três semanas depois veio a resposta da revista: o resumo tinha sido aceito sem alterações.',
        ending: { tone: 'bom', title: 'Um stev para o Linu', message: 'Você entendeu o registro acadêmico, as formulações cautelosas e o papel das fontes — e ainda virou tema de stev.' },
      },
      final_neutro: {
        emoji: '📬',
        text: 'Gunhild satte inn «trolig» igjen i siste liten og sendte sammendraget én time før fristen. Tidsskriftet svarte at teksten var lovende, men ba om flere endringer i metodedelen, som var blitt skrevet for fort. Linu hadde hatt en fantastisk kveld på dansen, men han tenkte at et sammendrag og en gangar har noe til felles: begge krever at man holder takten. Neste gang, lovte han, skulle arbeidet komme først og dansen etterpå.',
        translation:
          'A Gunhild recolocou o «trolig» no último minuto e mandou o resumo uma hora antes do prazo. A revista respondeu que o texto era promissor, mas pediu várias alterações na parte do método, que tinha sido escrita às pressas. O Linu tinha tido uma noite incrível no baile, mas pensou que um resumo e um gangar têm algo em comum: os dois exigem que a gente mantenha o ritmo. Da próxima vez, prometeu, o trabalho vinha primeiro e o baile depois.',
        ending: { tone: 'neutro', title: 'Fora do compasso', message: 'Você entendeu o estilo acadêmico, mas a pressa quase apagou a cautela do texto. Na ciência, «trolig» faz toda a diferença.' },
      },
    },
  },
  // ───────────────────────── C2 ─────────────────────────
  {
    id: 'nb-h43',
    level: 'C2',
    cefr: 'C2',
    title: 'Peer, du lyver!',
    emoji: '🎭',
    summary: 'Em Skien, cidade natal de Ibsen, o Linu vira ponto de um grupo de teatro amador que ensaia «Peer Gynt» na velha fazenda de Venstøp — e precisa ler Ibsen na grafia do século XIX.',
    cultural_context:
      'Henrik Ibsen nasceu em Skien em 1828; depois que o pai perdeu a fortuna, a família se mudou em 1835 para a fazenda de Venstøp, nos arredores, onde viveu até 1843, e hoje a casa é museu. «Brand» (1866) e «Peer Gynt» (1867) foram escritos em versos, na língua escrita dano-norueguesa da época, com grafias como «hvad» (hva), «gør» (gjør) e «fuldt» (fullt).',
    start: 'start',
    glossary: [
      ['en sufflør', 'um ponto (quem sopra as falas no teatro)'],
      ['gør / ej', 'grafia antiga de gjør / ikke (faz / não)'],
      ['hvad / fuldt', 'grafia antiga de hva / fullt (o que / inteiramente)'],
      ['stykkevis og delt', 'aos pedaços e dividido'],
      ['et bukkeritt', 'uma cavalgada em um cervo-macho (a de Peer Gynt)'],
      ['en skrøne', 'uma lorota, uma história inventada'],
      ['å gå i arv', 'passar de geração em geração'],
      ['et vers', 'um verso'],
    ],
    nodes: {
      start: {
        emoji: '🏚️',
        text: 'Det var en lys sommerkveld da Linu gikk opp bakkene fra Skien til Venstøp, den gamle gården der Henrik Ibsen bodde som gutt. I tunet sto en gjeng amatørskuespillere i halvferdige kostymer, og midt blant dem sto regissøren Aslaug med et tykt manus under armen. Hun fortalte at de skulle sette opp noen scener fra «Peer Gynt» på gården om en uke, og at de manglet en sufflør. «Du trenger ikke å spille, bare å hviske replikkene når noen går i stå, og det skjer oftere enn du tror», sa hun. Så rakte hun ham manuset, som var trykt med Ibsens egen, gammeldagse rettskrivning.',
        translation:
          'Era uma noite clara de verão quando o Linu subiu as ladeiras de Skien até Venstøp, a velha fazenda onde Henrik Ibsen morou quando menino. No terreiro havia uma turma de atores amadores com figurinos pela metade, e no meio deles estava a diretora Aslaug, com um roteiro grosso debaixo do braço. Ela contou que iam montar algumas cenas de «Peer Gynt» na fazenda dali a uma semana e que estava faltando um ponto. «Você não precisa atuar, só soprar as falas quando alguém travar, e isso acontece mais do que você imagina», disse ela. Depois lhe entregou o roteiro, impresso com a ortografia antiquada do próprio Ibsen.',
        choices: [
          { text: 'Si ja til å være sufflør.', translation: 'Aceitar ser o ponto.', next: 'sufflor' },
          { text: 'Be først om å få se huset der Ibsen bodde.', translation: 'Pedir primeiro para ver a casa onde Ibsen morou.', next: 'huset' },
        ],
      },
      huset: {
        emoji: '🕯️',
        text: 'Aslaug viste ham rundt i det gamle våningshuset, der gulvplankene knirket under hvert skritt. Hun fortalte at familien Ibsen flyttet hit i 1835, etter at faren hadde mistet formuen sin, og at Henrik var sju år gammel. På loftet sto gamle kister, et slitt ur og bøker som ingen hadde rørt på lenge, og mange mener at nettopp dette loftet ga ideen til loftet i «Vildanden». «Han reiste fra Skien som femtenåring, til et apotek i Grimstad, og kom nesten aldri tilbake», sa Aslaug. Linu ble stående en stund i halvmørket og tenkte på gutten som hadde lekt blant disse kistene.',
        translation:
          'A Aslaug o levou pela velha casa da fazenda, onde as tábuas do assoalho rangiam a cada passo. Contou que a família Ibsen se mudou para lá em 1835, depois que o pai perdeu a fortuna, e que Henrik tinha sete anos. No sótão havia baús antigos, um relógio gasto e livros que ninguém tocava havia muito tempo, e muita gente acha que foi justamente esse sótão que deu a ideia do sótão de «O pato selvagem». «Ele saiu de Skien aos quinze anos, para trabalhar numa farmácia em Grimstad, e quase nunca voltou», disse a Aslaug. O Linu ficou um tempo na penumbra, pensando no menino que tinha brincado entre aqueles baús.',
        choices: [{ text: 'Gå ut og begynne prøven som sufflør.', translation: 'Sair e começar o ensaio como ponto.', next: 'sufflor' }],
      },
      sufflor: {
        emoji: '📜',
        text: 'Prøven begynte med stykkets første replikk, og Ingeborg, som spilte moren Åse, ropte med full kraft: «Peer, du lyver!» Sindre, den unge skuespilleren som spilte Peer, åpnet munnen, men ingenting kom ut, og alle snudde seg mot Linu. Han så ned i manuset og hvisket det som sto der: «Nej, jeg gør ej!» Etterpå forklarte Aslaug at «gør» er den gamle skrivemåten for «gjør», og at «ej» er en eldre og mer poetisk form av «ikke». Hun spurte Linu om han kunne si med moderne ord hva Peer egentlig svarte moren sin.',
        translation:
          'O ensaio começou pela primeira fala da peça, e a Ingeborg, que fazia a mãe, Åse, gritou com toda a força: «Peer, você está mentindo!» O Sindre, o ator jovem que fazia o Peer, abriu a boca, mas não saiu nada, e todos se viraram para o Linu. Ele olhou para o roteiro e soprou o que estava escrito: «Não, não estou!» Depois a Aslaug explicou que «gør» é a grafia antiga de «gjør» (faz), e que «ej» é uma forma mais antiga e mais poética de «ikke» (não). Ela perguntou ao Linu se ele sabia dizer em palavras de hoje o que o Peer respondeu de fato à mãe.',
        choices: [
          { text: '«Nei, det gjør jeg ikke!» Han nekter for at han lyver.', translation: '«Não, não estou!» Ele nega que esteja mentindo.', next: 'reinsdyr' },
          {
            text: '«Nei, jeg gjør det aldri igjen!» Han lover å slutte å lyve.',
            translation: '«Não, nunca mais faço isso!» Ele promete parar de mentir.',
            wrong: '«Nej, jeg gør ej» é «nei, jeg gjør ikke» — «ej» é só uma forma antiga de «ikke», e não quer dizer «igjen» (de novo). O Peer não promete nada: ele simplesmente nega que esteja mentindo, o que já é, claro, mais uma mentira.',
          },
        ],
      },
      reinsdyr: {
        emoji: '🦌',
        text: '«Riktig, og selvsagt lyver han likevel», sa Aslaug og lo. Så fortsatte Sindre med den lange fortellingen om bukkerittet, der Peer påstår at han red på en reinsbukk langs en knivskarp fjellegg og stupte ned i et vann. Aslaug fortalte at Ibsen hentet mye fra folkeeventyr og sagn fra Gudbrandsdalen, og at Peers skrøner er satt sammen av gamle historier som han later som om han selv har opplevd. Da scenen var over, kastet Sindre manuset i gresset og erklærte at ingen ungdom i dag gidder å høre på sånne gammeldagse vers. «Hvorfor kan vi ikke bare skrive det om til vanlig norsk, sånn som vi snakker?» spurte han.',
        translation:
          '«Isso mesmo, e é claro que ele está mentindo assim mesmo», disse a Aslaug, rindo. Então o Sindre continuou com a longa história da cavalgada no cervo, em que o Peer afirma ter montado uma rena macho por uma crista de montanha afiada como faca e mergulhado num lago. A Aslaug contou que Ibsen tirou muita coisa de contos populares e lendas do vale de Gudbrand, e que as lorotas do Peer são feitas de histórias antigas que ele finge ter vivido. Quando a cena acabou, o Sindre jogou o roteiro na grama e declarou que nenhum jovem hoje tem paciência para ouvir versos tão antiquados. «Por que a gente não reescreve tudo em norueguês comum, do jeito que a gente fala?», perguntou.',
        choices: [
          { text: 'Foreslå å beholde Ibsens ord, men modernisere rettskrivningen.', translation: 'Sugerir manter as palavras de Ibsen, mas modernizar a ortografia.', next: 'brand' },
          { text: 'Gi Sindre rett og foreslå å skrive alt om til slang.', translation: 'Dar razão ao Sindre e sugerir reescrever tudo em gíria.', next: 'slang' },
        ],
      },
      brand: {
        emoji: '⚡',
        text: 'Aslaug nikket og sa at det var nettopp det de fleste teatre gjør i dag: de moderniserer stavemåten, men lar ordene og rytmen være i fred. For å vise hvorfor, siterte hun fra «Brand», stykket Ibsen skrev året før «Peer Gynt»: «Hvad du er, vær fuldt og helt, / ikke stykkevis og delt.» Hun forklarte at presten Brand krever alt eller intet, mens Peer er hans rake motsetning, en mann som aldri blir helt noe. «Skriver vi det om til dagligtale, forsvinner rimet, og da forsvinner også tanken», sa hun. Så spurte hun Linu hva han trodde de to linjene betydde.',
        translation:
          'A Aslaug concordou e disse que é justamente isso que a maioria dos teatros faz hoje: moderniza a grafia, mas deixa as palavras e o ritmo em paz. Para mostrar por quê, citou «Brand», a peça que Ibsen escreveu um ano antes de «Peer Gynt»: «O que você for, seja por inteiro, / não aos pedaços e dividido.» Explicou que o pastor Brand exige tudo ou nada, enquanto o Peer é o seu exato oposto, um homem que nunca chega a ser nada por inteiro. «Se a gente reescrever isso em linguagem do dia a dia, a rima some, e com ela some também a ideia», disse ela. Então perguntou ao Linu o que ele achava que os dois versos queriam dizer.',
        choices: [
          { text: '«At man skal være helhjertet det man er, og ikke halvveis.»', translation: '«Que a gente deve ser de corpo e alma aquilo que é, e não pela metade.»', next: 'premiere' },
          {
            text: '«At man skal dele alt man har, med andre.»',
            translation: '«Que a gente deve dividir tudo o que tem com os outros.»',
            wrong: '«Delt» aqui não é «dividido com os outros», e sim «partido, fragmentado». «Vær fuldt og helt, ikke stykkevis og delt» (em grafia moderna, «vær fullt og helt») quer dizer: seja inteiro, não aos pedaços — a exigência de Brand e o contrário do que é o Peer.',
          },
        ],
      },
      slang: {
        emoji: '🛹',
        text: 'Sindre lyste opp, og i løpet av ti minutter hadde han skrevet om åpningsscenen: «Peer, du lyver, wolla!» «Nei, mamma, chill, jeg lyver ikke!» Hele gjengen lo så de måtte sette seg i gresset, og en stund virket det som en genial idé. Men da de prøvde neste scene, merket de at de lange versene falt fra hverandre, og at Peers skrøner mistet både rytmen og humoren. Aslaug ristet på hodet og sa at det kunne bli en morsom parodi, men at det ikke lenger var Ibsen.',
        translation:
          'O Sindre se animou, e em dez minutos tinha reescrito a cena de abertura: «Peer, você está mentindo, juro!» «Não, mãe, relaxa, não estou mentindo!» A turma inteira riu tanto que teve que sentar na grama, e por um tempo aquilo pareceu uma ideia genial. Mas quando tentaram a cena seguinte, perceberam que os versos longos desmoronavam e que as lorotas do Peer perdiam o ritmo e a graça. A Aslaug balançou a cabeça e disse que aquilo podia virar uma paródia divertida, mas que já não era Ibsen.',
        choices: [{ text: 'Gå tilbake til originalteksten.', translation: 'Voltar ao texto original.', next: 'final_neutro' }],
      },
      premiere: {
        emoji: '🎬',
        text: 'En uke senere var tunet på Venstøp fullt av publikum på benker og pledd, og kveldssolen falt skrått over de gamle husene. Linu satt skjult bak en tønne med manuset i fanget, klar til å hviske. Midt i bukkerittet gikk Sindre helt i stå, og det ble så stille at man kunne høre en humle over tunet. Linu hvisket den neste linjen, og Sindre plukket den opp som om ingenting hadde skjedd, og fortsatte med full kraft. Etter siste scene reiste publikum seg, og Aslaug vinket Linu fram for å ta imot applausen sammen med de andre.',
        translation:
          'Uma semana depois, o terreiro de Venstøp estava cheio de gente em bancos e mantas, e o sol da tarde caía enviesado sobre as casas antigas. O Linu estava escondido atrás de um barril, com o roteiro no colo, pronto para soprar. No meio da cavalgada no cervo o Sindre travou de vez, e ficou tão silencioso que dava para ouvir uma mamangava no terreiro. O Linu soprou o verso seguinte, e o Sindre o pegou como se nada tivesse acontecido e continuou com toda a força. Depois da última cena o público se levantou, e a Aslaug chamou o Linu para receber os aplausos junto com os outros.',
        choices: [{ text: 'Gå fram og bukke.', translation: 'Ir à frente e fazer uma reverência.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '👏',
        text: 'Linu bukket så dypt at han nesten veltet, og publikum lo og klappet enda høyere. Etterpå kom Sindre bort, ga ham en klem og innrømmet at versene kanskje var bedre enn han hadde trodd. «Hvad du er, vær fuldt og helt», sa han med en høytidelig stemme og blunket. Aslaug ga Linu en gammel utgave av «Peer Gynt» som takk, med den samme gammeldagse rettskrivningen som manuset. På veien ned mot Skien tenkte Linu at et ord kan skifte drakt, men at det fortsatt kan slå like hardt.',
        translation:
          'O Linu fez uma reverência tão funda que quase caiu, e o público riu e aplaudiu ainda mais alto. Depois o Sindre veio, deu-lhe um abraço e admitiu que os versos talvez fossem melhores do que ele pensava. «O que você for, seja por inteiro», disse ele com voz solene, piscando. A Aslaug deu ao Linu, como agradecimento, uma edição antiga de «Peer Gynt», com a mesma ortografia antiquada do roteiro. Descendo para Skien, o Linu pensou que uma palavra pode trocar de roupa e, mesmo assim, continuar batendo com a mesma força.',
        ending: { tone: 'bom', title: 'Ponto de Ibsen', message: 'Você leu Ibsen na grafia antiga, entendeu o «ej» de Peer e o «fuldt og helt» de Brand, e salvou a estreia do fundo do palco.' },
      },
      final_neutro: {
        emoji: '📖',
        text: 'De la parodien til side og gikk tilbake til originalen, men det tok resten av kvelden å finne rytmen igjen. Sindre var fortsatt ikke overbevist, og premieren uken etter ble ujevn, med flere lange pauser. Linu hvisket så godt han kunne, men han hadde ikke fått øvd nok på den gamle skrivemåten, og én gang hvisket han feil linje. Publikum klappet høflig, og Aslaug sa at det tross alt hadde vært en fin kveld. Likevel tenkte Linu at Ibsen fortjente både et mer lojalt ensemble og en bedre forberedt sufflør.',
        translation:
          'Deixaram a paródia de lado e voltaram ao original, mas levaram o resto da noite para reencontrar o ritmo. O Sindre continuava sem se convencer, e a estreia na semana seguinte foi irregular, com várias pausas longas. O Linu soprou o melhor que pôde, mas não tinha praticado o bastante a grafia antiga, e uma vez soprou o verso errado. O público aplaudiu educadamente, e a Aslaug disse que, apesar de tudo, tinha sido uma noite bonita. Mesmo assim, o Linu pensou que Ibsen merecia um elenco mais fiel e um ponto mais bem preparado.',
        ending: { tone: 'neutro', title: 'Paródia e pausas', message: 'Você entendeu a peça, mas a ideia da gíria roubou o tempo de ensaio. Com Ibsen, a forma faz parte do sentido.' },
      },
    },
  },
  {
    id: 'nb-h44',
    level: 'C2',
    cefr: 'C2',
    title: 'Borte bra, men hjemme best',
    emoji: '🏡',
    summary: 'Em Aulestad, a casa de Bjørnstjerne Bjørnson, o Linu é guiado por uma professora aposentada que responde a tudo com provérbios — e só aproveita a visita quem entende o que ela quer dizer.',
    cultural_context:
      'Bjørnstjerne Bjørnson, autor da letra do hino nacional «Ja, vi elsker dette landet», comprou em 1874 a fazenda de Aulestad, em Gausdal, onde viveu com a mulher, Karoline; em 1903 tornou-se o primeiro norueguês a ganhar o Nobel de Literatura, e a casa hoje é museu. Os provérbios noruegueses foram recolhidos no século XIX por estudiosos como Ivar Aasen, e muitos ainda são usados no dia a dia.',
    start: 'start',
    glossary: [
      ['et ordtak', 'um provérbio, um ditado'],
      ['borte bra, men hjemme best', 'fora é bom, mas em casa é melhor'],
      ['etter regn kommer solskinn', 'depois da tempestade vem a bonança'],
      ['man skal ikke skue hunden på hårene', 'não se deve julgar pela aparência'],
      ['mange bekker små gjør en stor å', 'de grão em grão a galinha enche o papo'],
      ['den som intet våger, intet vinner', 'quem não arrisca não petisca'],
      ['furet, værbitt', 'sulcado, castigado pelo tempo'],
      ['å skue (antigo)', 'contemplar, julgar pela vista'],
    ],
    nodes: {
      start: {
        emoji: '🌦️',
        text: 'Regnet hang tungt over Gausdal da Linu gikk opp alleen mot Aulestad, den store, lyse gården der Bjørnstjerne Bjørnson hadde hjemmet sitt i over tretti år. Ved døra ventet guiden Karen, en pensjonert lærerinne med strikket sjal og et blikk som ikke gikk glipp av noe. Linu klaget litt over været og sa at han hadde håpet på sol til besøket. «Etter regn kommer solskinn», svarte Karen uten å blunke, og åpnet døra for ham. Linu skjønte raskt at hun hadde et ordtak for enhver anledning.',
        translation:
          'A chuva pesava sobre Gausdal quando o Linu subiu a alameda até Aulestad, a fazenda grande e clara onde Bjørnstjerne Bjørnson teve o seu lar por mais de trinta anos. Na porta esperava a guia Karen, uma professora aposentada de xale de tricô e olhar que não deixava escapar nada. O Linu reclamou um pouco do tempo e disse que esperava sol para a visita. «Depois da tempestade vem a bonança», respondeu a Karen sem pestanejar, e abriu a porta para ele. O Linu logo percebeu que ela tinha um provérbio para cada ocasião.',
        choices: [
          { text: 'Spørre hvorfor hun snakker i ordtak.', translation: 'Perguntar por que ela fala em provérbios.', next: 'ordtak' },
          { text: 'Be henne fortelle om Bjørnson.', translation: 'Pedir que ela fale sobre Bjørnson.', next: 'bjornson' },
        ],
      },
      ordtak: {
        emoji: '📚',
        text: '«Et ordtak er klokskap som har fått plass i et nøtteskall», sa Karen og smilte for første gang. Hun fortalte at mange norske ordtak ble samlet inn på 1800-tallet, blant annet av Ivar Aasen, som reiste rundt og skrev ned det folk sa. Hun hadde lært dem av bestemora si, som aldri gikk mange år på skole, men som kunne ett ordtak for hver dag i året. «Det er de gamle som vet best hvordan det går når man ikke hører etter», la hun til. Så foreslo hun at de begynte omvisningen, for tiden venter ikke på noen.',
        translation:
          '«Um provérbio é sabedoria que coube numa casca de noz», disse a Karen, sorrindo pela primeira vez. Contou que muitos provérbios noruegueses foram recolhidos no século XIX, entre outros por Ivar Aasen, que viajava anotando o que o povo dizia. Ela os tinha aprendido com a avó, que quase não frequentou a escola, mas sabia um provérbio para cada dia do ano. «Os velhos é que sabem melhor o que acontece quando a gente não escuta», acrescentou. Então sugeriu que começassem a visita, porque o tempo não espera ninguém.',
        choices: [{ text: 'Begynne omvisningen.', translation: 'Começar a visita.', next: 'bjornson' }],
      },
      bjornson: {
        emoji: '🖋️',
        text: 'I den store stua fortalte Karen at Bjørnson kjøpte Aulestad i 1874, og at han og kona Karoline gjorde gården til et samlingssted for kunstnere, politikere og beundrere fra hele Europa. I 1903 fikk han Nobelprisen i litteratur, som den første nordmannen. Ved ovnen lå en stor, lurvete hund og snorket, og Linu spurte forsiktig om den var en del av utstillingen. «Det er Bamse, han hører til hos meg, og han har reddet to turister som gikk seg vill i fjellet», sa Karen. «Man skal ikke skue hunden på hårene», la hun til og så strengt på Linu over brillene.',
        translation:
          'Na sala grande, a Karen contou que Bjørnson comprou Aulestad em 1874, e que ele e a mulher, Karoline, fizeram da fazenda um ponto de encontro de artistas, políticos e admiradores da Europa inteira. Em 1903 ele ganhou o Nobel de Literatura, o primeiro norueguês a recebê-lo. Junto ao fogão, um cachorro grande e desgrenhado roncava, e o Linu perguntou com cuidado se ele fazia parte da exposição. «Esse é o Bamse, ele é meu, e já salvou dois turistas que se perderam na montanha», disse a Karen. «Não se deve julgar o cão pelo pelo», acrescentou, olhando severa para o Linu por cima dos óculos.',
        choices: [
          { text: '«Du mener at man ikke skal dømme noen etter utseendet.»', translation: '«Você quer dizer que não se deve julgar ninguém pela aparência.»', next: 'stue' },
          {
            text: '«Du mener at Bamse trenger å bli børstet.»',
            translation: '«Você quer dizer que o Bamse precisa ser escovado.»',
            wrong: '«Skue» é uma palavra antiga para olhar, contemplar: «man skal ikke skue hunden på hårene» quer dizer que não se deve julgar pela aparência. O Bamse parece um tapete velho, mas já salvou dois turistas — era isso que a Karen queria dizer.',
          },
        ],
      },
      stue: {
        emoji: '🎼',
        text: 'Karen nikket anerkjennende, og Bamse løftet det ene øyelokket, som om han også var enig. Hun førte Linu bort til et innrammet ark på veggen, der første vers av nasjonalsangen sto med sirlig skrift: «Ja, vi elsker dette landet, / som det stiger frem, / furet, værbitt over vannet, / med de tusen hjem.» Hun forklarte at Bjørnson skrev teksten på slutten av 1850-tallet, og at den ble sunget offentlig med melodi av Rikard Nordraak til grunnlovsjubileet i 1864. «Se på ordene furet og værbitt: landet er beskrevet som et gammelt ansikt, fullt av rynker etter vær og vind», sa hun. Så tok hun en kortstokk fra lomma og sa at nå var det tid for en liten eksamen.',
        translation:
          'A Karen assentiu, aprovando, e o Bamse abriu uma pálpebra, como se também concordasse. Ela levou o Linu até uma folha emoldurada na parede, onde a primeira estrofe do hino nacional estava escrita em letra caprichada: «Sim, nós amamos esta terra, / assim como ela se ergue, / sulcada, castigada pelo tempo, sobre as águas, / com os seus mil lares.» Explicou que Bjørnson escreveu a letra no fim da década de 1850, e que ela foi cantada em público com melodia de Rikard Nordraak no jubileu da Constituição, em 1864. «Repare nas palavras “furet” e “værbitt”: o país é descrito como um rosto velho, cheio de rugas de sol e de vento», disse ela. Depois tirou um baralho de cartas do bolso e disse que agora era hora de uma provinha.',
        choices: [
          { text: 'Ta imot utfordringen.', translation: 'Aceitar o desafio.', next: 'quiz' },
          { text: 'Si at han heller vil se hagen før regnet kommer tilbake.', translation: 'Dizer que prefere ver o jardim antes que a chuva volte.', next: 'hage' },
        ],
      },
      quiz: {
        emoji: '🃏',
        text: 'På hvert kort sto det et ordtak, og Karen trakk det øverste og leste høyt: «Mange bekker små gjør en stor å.» Hun forklarte at en å er en liten elv, og at ordtaket ofte brukes om penger, arbeid og vennskap. Så pekte hun ut av vinduet mot bekkene som rant ned lia etter regnet, og spurte hva Linu trodde ordtaket betydde. «Tenk deg om: den som intet våger, intet vinner, men et forhastet svar er verre enn intet svar», sa hun. Linu tenkte seg om lenge før han svarte.',
        translation:
          'Em cada carta havia um provérbio, e a Karen tirou a de cima e leu em voz alta: «Muitos riachos pequenos fazem um grande rio.» Explicou que «å» é um rio pequeno, e que o provérbio costuma ser usado para dinheiro, trabalho e amizade. Depois apontou pela janela para os riachos que desciam a encosta depois da chuva e perguntou o que o Linu achava que o provérbio queria dizer. «Pense bem: quem não arrisca não petisca, mas uma resposta apressada é pior do que resposta nenhuma», disse ela. O Linu pensou um bom tempo antes de responder.',
        choices: [
          { text: '«At mange små bidrag til sammen kan bli til noe stort.»', translation: '«Que muitas pequenas contribuições, juntas, podem virar uma coisa grande.»', next: 'final_bom' },
          {
            text: '«At det alltid blir flom i Gausdal når det regner mye.»',
            translation: '«Que sempre dá enchente em Gausdal quando chove muito.»',
            wrong: 'A Karen avisou que o provérbio se usa para dinheiro, trabalho e amizade: não fala de enchente, e sim de muitas coisas pequenas que, somadas, viram uma grande — como «de grão em grão a galinha enche o papo».',
          },
        ],
      },
      hage: {
        emoji: '🌿',
        text: 'Linu gikk ut i hagen, der de våte bladene glinset og utsikten over dalen åpnet seg mellom skyene. Han ruslet en stund blant de gamle trærne og tenkte på alle de berømte gjestene som hadde gått her før ham. Men han hadde knapt kommet til enden av alleen før himmelen åpnet seg igjen, og han måtte løpe inn under et tak. Der ble han stående og se på regnet, mens han hørte Karen le inne i huset. Han forsto at han hadde gått glipp av noe, men han visste ikke helt hva.',
        translation:
          'O Linu saiu para o jardim, onde as folhas molhadas brilhavam e a vista do vale se abria entre as nuvens. Passeou um tempo entre as árvores antigas, pensando em todos os convidados famosos que tinham caminhado ali antes dele. Mas mal tinha chegado ao fim da alameda quando o céu desabou de novo, e ele teve que correr para debaixo de um telhado. Ficou ali olhando a chuva, enquanto ouvia a Karen rindo dentro da casa. Entendeu que tinha perdido alguma coisa, mas não sabia bem o quê.',
        choices: [{ text: 'Takke for omvisningen og dra hjem.', translation: 'Agradecer pela visita e ir para casa.', next: 'final_neutro' }],
      },
      final_bom: {
        emoji: '🌈',
        text: 'Karen la kortet fra seg og så på Linu med noe som lignet stolthet. «Du har lært mer på én formiddag enn mange lærer på et helt skoleår», sa hun, og ga ham hele kortstokken som gave. Da de gikk ut på trappa, hadde regnet gitt seg, og solen brøt gjennom skyene over dalen, akkurat som hun hadde sagt. «Hva sa jeg? Etter regn kommer solskinn», sa hun tilfreds, og Bamse logret for første gang den dagen. Linu vandret ned alleen med kortstokken i lomma og tenkte at det var godt å reise, men at han forsto hvorfor Bjørnson, som reiste mye, alltid kom tilbake til Aulestad: borte bra, men hjemme best.',
        translation:
          'A Karen pôs a carta de lado e olhou para o Linu com algo parecido com orgulho. «Você aprendeu mais numa manhã do que muita gente aprende num ano letivo inteiro», disse ela, e lhe deu o baralho inteiro de presente. Quando saíram para a escada, a chuva tinha parado, e o sol rompia as nuvens sobre o vale, exatamente como ela tinha dito. «Não disse? Depois da tempestade vem a bonança», falou ela, satisfeita, e o Bamse abanou o rabo pela primeira vez naquele dia. O Linu desceu a alameda com o baralho no bolso, pensando que viajar era bom, mas que entendia por que Bjørnson, que viajou muito, sempre voltava para Aulestad: fora é bom, mas em casa é melhor.',
        ending: { tone: 'bom', title: 'Um baralho de provérbios', message: 'Você decifrou os provérbios da Karen, leu o hino de Bjørnson e entendeu o «skue» antigo — e ainda ganhou o sol no fim.' },
      },
      final_neutro: {
        emoji: '☔',
        text: 'Karen fulgte ham til døra og sa at han var velkommen tilbake når som helst. Han takket, men han hadde en følelse av å ha hoppet over det viktigste, som å lese første og siste kapittel i en roman. På bussen ned dalen prøvde han å huske alle ordtakene hun hadde sagt, men han husket bare det om regn og solskinn. Utenfor vinduet regnet det fortsatt, og solskinnet lot vente på seg. Han bestemte seg for å komme tilbake en dag og ta imot utfordringen med kortstokken.',
        translation:
          'A Karen o acompanhou até a porta e disse que ele podia voltar quando quisesse. Ele agradeceu, mas teve a sensação de ter pulado a parte mais importante, como quem lê só o primeiro e o último capítulo de um romance. No ônibus, descendo o vale, tentou lembrar todos os provérbios que ela tinha dito, mas só se lembrava do da chuva e do sol. Do lado de fora da janela ainda chovia, e a bonança se fazia esperar. Ele decidiu voltar um dia e aceitar o desafio do baralho.',
        ending: { tone: 'neutro', title: 'A bonança que não veio', message: 'Você entendeu a visita, mas fugiu da prova dos provérbios. A Karen e o Bamse continuam esperando em Aulestad.' },
      },
    },
  },
  {
    id: 'nb-h45',
    level: 'C2',
    cefr: 'C2',
    title: 'Sne på Bjerkebæk',
    emoji: '❄️',
    summary: 'Num dia de neve em Lillehammer, o Linu ajuda a curadora do museu de Bjerkebæk, a casa de Sigrid Undset, a modernizar cartas antigas — e aprende que atualizar a grafia não é o mesmo que reescrever a voz de alguém.',
    cultural_context:
      'Sigrid Undset nasceu em 1882 em Kalundborg, na Dinamarca, cresceu em Kristiania (Oslo) e se estabeleceu em Lillehammer, onde escreveu a trilogia medieval «Kristin Lavransdatter» (1920–1922) e viveu em Bjerkebæk; em 1928 ganhou o Nobel de Literatura, fugiu da ocupação alemã em 1940, voltou em 1945 e morreu em 1949. A ortografia norueguesa mudou muito em pouco tempo: em 1907 os substantivos deixaram de ter maiúscula, em 1917 o «aa» virou «å», e em 1938 muitas formas como «efter», «sne» e «nu» deram lugar a «etter», «snø» e «nå».',
    start: 'start',
    glossary: [
      ['efter / nu / sne (antigo)', 'etter / nå / snø (depois / agora / neve)'],
      ['blev / meget (antigo)', 'ble / mye (ficou / muito)'],
      ['gik op paa (antes de 1907/1917)', 'gikk opp på (subiu em)'],
      ['rettskrivning', 'ortografia'],
      ['å modernisere', 'modernizar'],
      ['en kjelke', 'um trenó pequeno'],
      ['riksmål', 'a norma conservadora, próxima do dinamarquês'],
      ['en kurator', 'um curador'],
    ],
    nodes: {
      start: {
        emoji: '🌨️',
        text: 'Snøen falt tett over Lillehammer da Linu tråkket opp bakken til Bjerkebæk, der Sigrid Undset bodde og skrev i mange år. De mørke tømmerhusene lå halvt begravd i snø, og røyken steg rett opp fra pipa i den stille kulden. I døra sto kuratoren Liv, som hadde bedt ham om hjelp til et prosjekt med gamle brev. «Vi har fått en eske med brev fra bygda, skrevet mellom 1900 og 1940, og vi vil vise dem i en utstilling om hvordan skriftspråket forandret seg», forklarte hun. «Men først må noen lese dem, og de er skrevet på et norsk som ikke finnes lenger», la hun til.',
        translation:
          'A neve caía densa sobre Lillehammer quando o Linu subiu a ladeira até Bjerkebæk, onde Sigrid Undset morou e escreveu por muitos anos. As casas escuras de troncos estavam meio enterradas na neve, e a fumaça subia reta da chaminé no frio parado. Na porta estava a curadora Liv, que tinha pedido a ajuda dele num projeto com cartas antigas. «Recebemos uma caixa de cartas da região, escritas entre 1900 e 1940, e queremos mostrá-las numa exposição sobre como a língua escrita mudou», explicou ela. «Mas primeiro alguém precisa lê-las, e elas estão escritas num norueguês que não existe mais», acrescentou.',
        choices: [
          { text: 'Be om å få se huset først.', translation: 'Pedir para ver a casa primeiro.', next: 'huset' },
          { text: 'Gå rett til brevene.', translation: 'Ir direto para as cartas.', next: 'brev' },
        ],
      },
      huset: {
        emoji: '🏠',
        text: 'Liv viste ham rundt i husene, der alt var bevart slik det var i forfatterens tid, fra bøkene i hyllene til de tunge møblene. Hun fortalte at Sigrid Undset ble født i Danmark i 1882, vokste opp i Kristiania og skrev romanene om Kristin Lavransdatter, som foregår i middelalderen, her i Gudbrandsdalen. I 1928 fikk hun Nobelprisen i litteratur, og i 1940 måtte hun flykte fra landet, fordi hun hadde skrevet skarpt mot nazismen. «Hun kom tilbake i 1945, men hun levde bare noen få år etter krigen», sa Liv stille. Linu så på skrivebordet ved vinduet og tenkte på alle ordene som var skrevet der, i en rettskrivning som i dag virker gammeldags.',
        translation:
          'A Liv o levou pelas casas, onde tudo estava conservado como no tempo da escritora, dos livros nas estantes aos móveis pesados. Contou que Sigrid Undset nasceu na Dinamarca em 1882, cresceu em Kristiania e escreveu os romances sobre Kristin Lavransdatter, que se passam na Idade Média, ali no vale de Gudbrand. Em 1928 ela ganhou o Nobel de Literatura, e em 1940 teve que fugir do país, porque tinha escrito duramente contra o nazismo. «Ela voltou em 1945, mas viveu só mais alguns anos depois da guerra», disse a Liv, baixinho. O Linu olhou para a escrivaninha junto à janela e pensou em todas as palavras escritas ali, numa ortografia que hoje parece antiquada.',
        choices: [{ text: 'Gå videre til brevene.', translation: 'Seguir para as cartas.', next: 'brev' }],
      },
      brev: {
        emoji: '✉️',
        text: 'Ved et bord i et lyst rom la Liv fram et brev fra 1930, skrevet av en ung jente til moren sin. Det begynte slik: «Kjære mor! Nu har vi meget sne her, og efter middag var jeg ute med kjelken hele eftermiddagen. Lille Per blev forkjølet, men han er frisk igjen nu.» Liv forklarte at dette var riksmål slik det ble skrevet før 1938, med former som «nu», «sne», «efter» og «blev», som noen fortsatt bruker i dag. Linu kjente igjen nesten alt, men han ville være sikker på at han forsto innholdet riktig. Liv ba ham fortelle kort, med egne ord, hva jenta skrev.',
        translation:
          'Numa mesa, numa sala clara, a Liv pôs uma carta de 1930, escrita por uma moça para a mãe. Começava assim: «Querida mãe! Agora temos muita neve aqui, e depois do almoço passei a tarde inteira andando de trenó. O pequeno Per pegou um resfriado, mas agora já está bom de novo.» A Liv explicou que aquilo era riksmål, do jeito que se escrevia antes de 1938, com formas como «nu», «sne», «efter» e «blev», que algumas pessoas ainda usam hoje. O Linu reconheceu quase tudo, mas queria ter certeza de que tinha entendido o conteúdo. A Liv pediu que ele contasse em poucas palavras o que a moça tinha escrito.',
        choices: [
          { text: '«Det har kommet mye snø, hun har vært ute med kjelken, og Per ble forkjølet, men er frisk nå.»', translation: '«Caiu muita neve, ela andou de trenó, e o Per pegou um resfriado, mas agora está bom.»', next: 'gammel' },
          {
            text: '«Det har kommet mye snø, og lille Per er fortsatt syk i senga.»',
            translation: '«Caiu muita neve, e o pequeno Per continua doente de cama.»',
            wrong: '«Blev» é a forma antiga de «ble»: o Per ficou resfriado. Mas a frase continua: «men han er frisk igjen nu» — «nu» é «nå», agora. Ele já está bom de novo.',
          },
        ],
      },
      gammel: {
        emoji: '🗝️',
        text: '«Godt lest», sa Liv, og hun tok fram et enda eldre brev, fra 1901, med gulnet papir og bleknet blekk. Her var alle substantivene skrevet med stor forbokstav, som på tysk, og der vi i dag skriver å, sto det to a-er. En av setningene lød: «Søndag gik vi op paa Fjeldet.» Liv forklarte at store forbokstaver forsvant med reformen i 1907, og at «aa» ble til «å» i 1917. Hun ba Linu skrive setningen om med dagens bokmål, men uten å forandre et eneste ord mer enn nødvendig.',
        translation:
          '«Muito bem lido», disse a Liv, e pegou uma carta ainda mais antiga, de 1901, de papel amarelado e tinta desbotada. Nela todos os substantivos estavam com letra maiúscula, como no alemão, e onde hoje se escreve «å» apareciam dois «a». Uma das frases dizia: «No domingo subimos a montanha.» A Liv explicou que as maiúsculas sumiram com a reforma de 1907, e que o «aa» virou «å» em 1917. Pediu ao Linu que reescrevesse a frase no bokmål de hoje, mas sem mudar nenhuma palavra além do necessário.',
        choices: [
          { text: '«Søndag gikk vi opp på fjellet.»', translation: '«No domingo subimos a montanha.» (grafia de hoje)', next: 'respekt' },
          { text: '«Hver søndag pleide vi å gå tur i fjellet.»', translation: '«Todo domingo a gente costumava fazer trilha na montanha.»', next: 'omskriv' },
        ],
      },
      respekt: {
        emoji: '🖊️',
        text: 'Liv sammenlignet de to setningene og nikket langsomt. «Du har forandret stavemåten, men ikke stemmen, og det er hele kunsten», sa hun. Hun fortalte at det samme skjer når forlagene gir ut Sigrid Undsets romaner i ny drakt: rettskrivningen blir modernisert, men ordvalget og rytmen får stå. «En forfatter er ikke bare det hun sier, men også hvordan hun sier det», sa Liv, «og det gjelder en ung jente i 1901 like mye som en nobelprisvinner.» Hun ga ham en bunke brev til og spurte om han ville hjelpe henne resten av dagen.',
        translation:
          'A Liv comparou as duas frases e assentiu devagar. «Você mudou a grafia, mas não a voz, e essa é toda a arte», disse ela. Contou que o mesmo acontece quando as editoras relançam os romances de Sigrid Undset com roupa nova: a ortografia é modernizada, mas a escolha das palavras e o ritmo ficam. «Um escritor não é só o que ele diz, mas também como diz», falou a Liv, «e isso vale tanto para uma moça de 1901 quanto para uma ganhadora do Nobel.» Deu-lhe mais uma pilha de cartas e perguntou se ele queria ajudá-la o resto do dia.',
        choices: [{ text: 'Si ja og sette seg ved vinduet med brevene.', translation: 'Aceitar e sentar junto à janela com as cartas.', next: 'final_bom' }],
      },
      omskriv: {
        emoji: '✂️',
        text: 'Liv leste setningen og rynket pannen. «Dette er pent, men det er ikke lenger hennes setning», sa hun. Hun forklarte at «pleide» og «gå tur» er Linus egne ord, og at originalen bare forteller om én søndag, ikke om en vane. «Når vi moderniserer, skal vi bytte drakt, ikke kropp», sa hun, og ba ham prøve igjen med en ny setning fra samme brev. Linu forsto poenget, men det gikk tregt, og mange av brevene måtte vente til en annen dag.',
        translation:
          'A Liv leu a frase e franziu a testa. «Está bonito, mas não é mais a frase dela», disse. Explicou que «pleide» (costumava) e «gå tur» (fazer trilha) eram palavras do próprio Linu, e que o original fala de um domingo só, não de um hábito. «Quando modernizamos, trocamos a roupa, não o corpo», disse ela, e pediu que ele tentasse de novo com outra frase da mesma carta. O Linu entendeu a ideia, mas o trabalho andou devagar, e muitas cartas tiveram que ficar para outro dia.',
        choices: [{ text: 'Fortsette så godt han kan til det blir mørkt.', translation: 'Continuar como puder até escurecer.', next: 'final_neutro' }],
      },
      final_bom: {
        emoji: '🕯️',
        text: 'Utover ettermiddagen leste Linu brev etter brev, mens snøen la seg i tykke lag på vinduskarmen og mørket senket seg over byen. Han fant kjærlighetsbrev, klager over dårlige veier og en oppskrift på julekaker skrevet med «aa» og store forbokstaver. Da Liv tente lysene, hadde han modernisert tjue brev uten å ta fra noen av dem stemmen. Hun sa at utstillingen skulle få hans navn blant de som hadde hjulpet til, og at han måtte komme på åpningen. På vei ned bakken i den blå vinterkvelden tenkte Linu at ord, som snø, forandrer form, men at det er det samme vannet som faller.',
        translation:
          'Ao longo da tarde, o Linu leu carta após carta, enquanto a neve se acumulava em camadas grossas no parapeito e a escuridão caía sobre a cidade. Achou cartas de amor, queixas sobre estradas ruins e uma receita de biscoitos de Natal escrita com «aa» e maiúsculas. Quando a Liv acendeu as velas, ele tinha modernizado vinte cartas sem tirar a voz de nenhuma. Ela disse que o nome dele ia aparecer na exposição entre os que tinham ajudado, e que ele tinha que ir à abertura. Descendo a ladeira no azul da noite de inverno, o Linu pensou que as palavras, como a neve, mudam de forma, mas que é a mesma água que cai.',
        ending: { tone: 'bom', title: 'A mesma água', message: 'Você leu riksmål e dano-norueguês antigo, entendeu «nu», «blev» e «paa», e modernizou a grafia sem apagar a voz de ninguém.' },
      },
      final_neutro: {
        emoji: '🌙',
        text: 'Da det ble mørkt, hadde Linu bare rukket fem brev, og Liv måtte rette flere av dem. Hun var vennlig, men han så at hun strøk ut mange av de nye ordene hans og satte de gamle tilbake. På vei ned bakken i snøen tenkte han på det hun hadde sagt om drakt og kropp. Han forsto at det å modernisere en tekst krever mer ydmykhet enn det å skrive en ny. Neste gang, lovte han seg selv, skulle han la de gamle stemmene få snakke med sine egne ord.',
        translation:
          'Quando escureceu, o Linu só tinha conseguido fazer cinco cartas, e a Liv teve que corrigir várias. Ela foi gentil, mas ele viu que ela riscava muitas das palavras novas dele e recolocava as antigas. Descendo a ladeira na neve, ele pensou no que ela tinha dito sobre roupa e corpo. Entendeu que modernizar um texto exige mais humildade do que escrever um novo. Da próxima vez, prometeu a si mesmo, ia deixar as vozes antigas falarem com as próprias palavras.',
        ending: { tone: 'neutro', title: 'Roupa nova, corpo trocado', message: 'Você entendeu as cartas antigas, mas reescreveu demais. Modernizar a grafia é diferente de mudar as palavras.' },
      },
    },
  },
];
