import type { StorySeed } from '../types';

/** Histórias interativas em feroês: 3 por subnível, cada uma num lugar diferente. */
export const STORIES_FO: StorySeed[] = [
  // ───────────────────────── A1.1 ─────────────────────────
  {
    id: 'fo-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Kaffi í Havn',
    emoji: '☕',
    summary: 'Num dia de chuva em Tórshavn, o Linu entra num café, conhece a Rakul e treina as primeiras frases em feroês.',
    cultural_context:
      'Tórshavn é a capital das Ilhas Faroé, e os moradores a chamam simplesmente de «Havn» (o porto). Na pontinha de pedra do porto, Tinganes, o parlamento feroês, o Løgting, já se reunia na era viking: é um dos parlamentos mais antigos do mundo.',
    start: 'start',
    glossary: [
      ['Hey! / Farvæl!', 'Oi! / Tchau!'],
      ['Eg eiti… / Hvat eitur tú?', 'Eu me chamo… / Como você se chama? (o «ei» soa «ai»: «ê áiti»)'],
      ['Hvaðani ert tú?', 'De onde você é? (o «ð» não soa e o «hv» soa «kv»: «kvéanî»)'],
      ['Eg eri úr Brasil.', 'Eu sou do Brasil.'],
      ['svangur / kaldur', 'com fome / com frio'],
      ['ja takk / nei takk', 'sim, obrigado / não, obrigado'],
      ['Vælkomin til Føroya!', 'Bem-vindo às Faroé!'],
      ['fýra / fjúrtan', 'quatro / catorze (o «ý» e o «ú» soam «ui»: «fuíra», «fiúrtan»)'],
    ],
    nodes: {
      start: {
        emoji: '🌧️',
        text: 'Tórshavn. Tað regnar. Linu er kaldur og svangur.',
        translation: 'Tórshavn. Está chovendo. O Linu está com frio e com fome.',
        choices: [
          { text: 'Linu fer inn á eina kaffistovu.', translation: 'O Linu entra num café.', next: 'kaffistova' },
          { text: 'Linu hyggur at bátunum.', translation: 'O Linu olha os barcos.', next: 'batar' },
        ],
      },
      batar: {
        emoji: '⛵',
        text: 'Bátarnir eru reyðir og hvítir.',
        translation: 'Os barcos são vermelhos e brancos.',
        choices: [{ text: '«Nú: kaffi!»', translation: '«Agora: café!»', next: 'kaffistova' }],
      },
      kaffistova: {
        emoji: '👩',
        text: '«Hey! Eg eiti Rakul. Hvat eitur tú?»',
        translation: '«Oi! Eu me chamo Rakul. Como você se chama?»',
        choices: [
          { text: '«Hey! Eg eiti Linu.»', translation: '«Oi! Eu me chamo Linu.»', next: 'hvadani' },
          {
            text: '«Farvæl, Rakul!»',
            translation: '«Tchau, Rakul!»',
            wrong: 'A Rakul disse «Hey!» (Oi!) e perguntou «Hvat eitur tú?» (Como você se chama?). «Farvæl» é «tchau»: o Linu nem se apresentou ainda! Responda «Eg eiti Linu».',
          },
        ],
      },
      hvadani: {
        emoji: '🌍',
        text: '«Hvaðani ert tú, Linu?»',
        translation: '«De onde você é, Linu?»',
        choices: [
          { text: '«Eg eri úr Brasil.»', translation: '«Eu sou do Brasil.»', next: 'brasil' },
          { text: '«Eg eri ein fuglur úr Brasil!»', translation: '«Eu sou um pássaro do Brasil!»', next: 'brasil' },
        ],
      },
      brasil: {
        emoji: '🍰',
        text: '«Vælkomin til Føroya! Vilt tú hava kaffi og eina køku?»',
        translation: '«Bem-vindo às Faroé! Você quer café e um bolo?»',
        choices: [
          { text: '«Ja takk!»', translation: '«Sim, obrigado!»', next: 'prisur' },
          {
            text: '«Nei takk, eg eri ikki svangur.»',
            translation: '«Não, obrigado, não estou com fome.»',
            wrong: 'A história começou dizendo «Linu er kaldur og svangur»: o Linu ESTÁ com fome! «Svangur» quer dizer «com fome».',
          },
        ],
      },
      prisur: {
        emoji: '💰',
        text: '«Tað kostar fjúrtan krónur.»',
        translation: '«Custa catorze coroas.»',
        choices: [
          { text: 'Linu gevur Rakul fjúrtan krónur.', translation: 'O Linu dá catorze coroas à Rakul.', next: 'final_bom' },
          { text: 'Linu gevur Rakul fýra krónur.', translation: 'O Linu dá quatro coroas à Rakul.', next: 'final_fyra' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Kaffið er heitt, og kakan er góð. «Takk fyri, Rakul!» «Hav tað gott, Linu!»',
        translation: 'O café está quente, e o bolo está gostoso. «Obrigado, Rakul!» «Tudo de bom, Linu!»',
        ending: { tone: 'bom', title: 'Primeiro café em Havn', message: 'O Linu se apresentou, pagou certinho e ganhou uma amiga em Tórshavn.' },
      },
      final_fyra: {
        emoji: '😅',
        text: '«Fýra? Nei, fjúrtan!» Rakul flennir.',
        translation: '«Quatro? Não, catorze!» A Rakul ri.',
        ending: { tone: 'neutro', title: 'Fýra ou fjúrtan?', message: 'A Rakul disse «fjúrtan» (catorze), e não «fýra» (quatro). Os números parecem, mas o «-tan» faz toda a diferença!' },
      },
    },
  },
  {
    id: 'fo-h2',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Lundar í Mykinesi',
    emoji: '🐦',
    summary: 'Na ilha de Mykines, o Linu conta papagaios-do-mar, conhece a Sunneva e fica bem quietinho para ver um deles de perto.',
    cultural_context:
      'Mykines é a ilha mais a oeste das Faroé. No verão, mais ou menos de maio a agosto, milhares de papagaios-do-mar (em feroês, «lundi») fazem ninho em tocas no capim das encostas.',
    start: 'start',
    glossary: [
      ['ein lundi / lundar', 'um papagaio-do-mar / papagaios-do-mar'],
      ['ein, tveir, trý', 'um, dois, três'],
      ['tólv / tjúgu', 'doze / vinte (o «gu» de «tjúgu» quase some: «tchúvu»)'],
      ['Eg eri úr…', 'Eu sou de…'],
      ['Ert tú…?', 'Você é…?'],
      ['nev', 'bico'],
      ['burtur', 'embora'],
    ],
    nodes: {
      start: {
        emoji: '🏝️',
        text: 'Linu er í Mykinesi. Har eru nógvir lundar!',
        translation: 'O Linu está em Mykines. Lá tem muitos papagaios-do-mar!',
        choices: [
          { text: 'Linu telur lundarnar.', translation: 'O Linu conta os papagaios-do-mar.', next: 'telja' },
          { text: 'Linu tosar við eina konu.', translation: 'O Linu fala com uma mulher.', next: 'kona' },
        ],
      },
      telja: {
        emoji: '🔢',
        text: '«Ein, tveir, trý… ellivu, tólv!» Linu sær tólv lundar.',
        translation: '«Um, dois, três… onze, doze!» O Linu vê doze papagaios-do-mar.',
        choices: [{ text: 'Ein kona kemur.', translation: 'Uma mulher chega.', next: 'kona' }],
      },
      kona: {
        emoji: '👩',
        text: '«Hey! Eg eiti Sunneva. Eg eri úr Mykinesi. Og tú?»',
        translation: '«Oi! Eu me chamo Sunneva. Eu sou de Mykines. E você?»',
        choices: [
          { text: '«Hey, Sunneva! Eg eri Linu.»', translation: '«Oi, Sunneva! Eu sou o Linu.»', next: 'lundi' },
          {
            text: '«Hey! Ert tú úr Havn?»',
            translation: '«Oi! Você é de Havn?»',
            wrong: 'A Sunneva acabou de dizer «Eg eri úr Mykinesi»: ela é DE MYKINES, e não de Havn (Tórshavn).',
          },
        ],
      },
      lundi: {
        emoji: '😄',
        text: 'Sunneva flennir. «Linu! Ert tú ein lundi?»',
        translation: 'A Sunneva ri. «Linu! Você é um papagaio-do-mar?»',
        choices: [
          { text: '«Nei, eg eri ikki ein lundi!»', translation: '«Não, eu não sou um papagaio-do-mar!»', next: 'nev' },
          { text: '«Ja! Eg eri ein svartur lundi.»', translation: '«Sou! Eu sou um papagaio-do-mar preto.»', next: 'nev' },
        ],
      },
      nev: {
        emoji: '🐟',
        text: 'Ein lundi situr á einum steini. Hann hevur fisk í nevinum.',
        translation: 'Um papagaio-do-mar está sentado numa pedra. Ele tem peixe no bico.',
        choices: [
          { text: 'Linu situr stillur og hyggur.', translation: 'O Linu fica sentado quietinho e olha.', next: 'final_bom' },
          { text: 'Linu rópar: «HEY, LUNDI!»', translation: 'O Linu grita: «OI, PAPAGAIO-DO-MAR!»', next: 'final_burtur' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Lundin er ikki bangin. Sunneva og Linu telja: tjúgu lundar!',
        translation: 'O papagaio-do-mar não tem medo. A Sunneva e o Linu contam: vinte papagaios-do-mar!',
        ending: { tone: 'bom', title: 'Vinte amigos de bico colorido', message: 'Quietinho, o Linu viu os papagaios-do-mar de pertinho e contou até vinte em feroês.' },
      },
      final_burtur: {
        emoji: '💨',
        text: 'Lundin flýgur burtur. Farvæl, lundi!',
        translation: 'O papagaio-do-mar sai voando. Tchau, papagaio-do-mar!',
        ending: { tone: 'neutro', title: 'Grito demais', message: 'Os papagaios-do-mar se assustam com barulho. Tente de novo e fique «stillur» (quietinho)!' },
      },
    },
  },
  {
    id: 'fo-h3',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Í Gjógv',
    emoji: '🌊',
    summary: 'Na vila de Gjógv, num dia de vento, o Linu conhece os irmãos Jógvan e Beinta.',
    cultural_context:
      'Gjógv é uma vilazinha no norte da ilha de Eysturoy. O nome quer dizer «fenda, desfiladeiro»: ao lado da vila há uma fenda estreita no rochedo, cheia de mar, que serve de porto natural para os barcos.',
    start: 'start',
    glossary: [
      ['gjógv', 'fenda no rochedo, desfiladeiro (soa mais ou menos «djégv»)'],
      ['Hatta er…', 'Este(a) é…'],
      ['hon / hann', 'ela / ele'],
      ['systir mín', 'minha irmã (o possessivo vem depois do nome)'],
      ['vit eru / tit eru', 'nós somos / vocês são'],
      ['Hvussu hevur tú tað? / Eg havi tað gott.', 'Como vai você? / Eu vou bem.'],
      ['Kom við!', 'Venha junto!'],
    ],
    nodes: {
      start: {
        emoji: '🏘️',
        text: 'Gjógv er ein lítil bygd. Tað er kalt, og vindurin er sterkur.',
        translation: 'Gjógv é uma vila pequena. Está frio, e o vento está forte.',
        choices: [
          { text: 'Linu gongur niður í gjógvina.', translation: 'O Linu desce até a fenda.', next: 'gjogv' },
          { text: 'Linu sær ein drong og eina gentu.', translation: 'O Linu vê um menino e uma menina.', next: 'drongur' },
        ],
      },
      gjogv: {
        emoji: '⛵',
        text: 'Í gjógvini eru bátar. Havið er grønt.',
        translation: 'Na fenda há barcos. O mar é verde.',
        choices: [{ text: 'Ein drongur og ein genta koma.', translation: 'Um menino e uma menina chegam.', next: 'drongur' }],
      },
      drongur: {
        emoji: '👦',
        text: '«Hey! Eg eri Jógvan. Hatta er Beinta. Hon er systir mín.»',
        translation: '«Oi! Eu sou o Jógvan. Esta é a Beinta. Ela é minha irmã.»',
        choices: [
          { text: '«Hey, Jógvan! Hey, Beinta!»', translation: '«Oi, Jógvan! Oi, Beinta!»', next: 'hvussu' },
          {
            text: '«Hey! Er Beinta bróðir tín?»',
            translation: '«Oi! A Beinta é seu irmão?»',
            wrong: 'O Jógvan disse «Hon er systir mín»: «hon» é «ela», e «systir» é «irmã». A Beinta é a IRMÃ dele!',
          },
        ],
      },
      hvussu: {
        emoji: '👧',
        text: '«Hvussu hevur tú tað, Linu?» spyr Beinta.',
        translation: '«Como vai você, Linu?», pergunta a Beinta.',
        choices: [
          { text: '«Eg havi tað gott, takk! Og tit?»', translation: '«Eu vou bem, obrigado! E vocês?»', next: 'bod' },
          { text: '«Eg eri kaldur!»', translation: '«Eu estou com frio!»', next: 'bod' },
        ],
      },
      bod: {
        emoji: '☕',
        text: '«Vit hava tað gott. Mamma okkara hevur eina kaffistovu. Kom við!»',
        translation: '«Nós vamos bem. A nossa mãe tem um café. Venha junto!»',
        choices: [
          { text: '«Ja takk!»', translation: '«Sim, obrigado!»', next: 'final_bom' },
          { text: '«Nei takk. Farvæl!»', translation: '«Não, obrigado. Tchau!»', next: 'final_einsamallur' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Kaffistovan er heit. Mamma teirra eitur Ása. «Vælkomin, Linu!»',
        translation: 'O café é quentinho. A mãe deles se chama Ása. «Bem-vindo, Linu!»',
        ending: { tone: 'bom', title: 'Quentinho em Gjógv', message: 'O Linu aceitou o convite e fugiu do vento com os novos amigos.' },
      },
      final_einsamallur: {
        emoji: '🥶',
        text: '«Farvæl!» Jógvan og Beinta fara. Linu er einsamallur og kaldur.',
        translation: '«Tchau!» O Jógvan e a Beinta vão embora. O Linu fica sozinho e com frio.',
        ending: { tone: 'neutro', title: 'Sozinho no vento', message: '«Kom við!» era um convite: «Venha junto!». Tente de novo e aceite!' },
      },
    },
  },
  // ───────────────────────── A1.2 ─────────────────────────
  {
    id: 'fo-h4',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Fiskur í Klaksvík',
    emoji: '🐟',
    summary: 'Em Klaksvík, o Linu acompanha o pescador Óli até o porto e aprende o nome dos peixes.',
    cultural_context:
      'Klaksvík, na ilha de Borðoy, é a segunda maior cidade das Faroé e vive da pesca há muito tempo. Desde 2006 um túnel submarino liga Borðoy à ilha de Eysturoy.',
    start: 'start',
    glossary: [
      ['fiskimaður', 'pescador'],
      ['ein toskur → toskurin', 'um bacalhau → o bacalhau (o artigo vem colado no fim)'],
      ['ein hýsa → hýsan', 'um hadoque → o hadoque (feminino)'],
      ['ein sild → sildin', 'um arenque → o arenque'],
      ['havnin / bátarnir', 'o porto / os barcos'],
      ['hetta / hatta', 'isto (aqui) / aquilo (ali)'],
      ['til døgurða', 'para o almoço'],
      ['feskur', 'fresco'],
    ],
    nodes: {
      start: {
        emoji: '🌅',
        text: 'Tað er morgun í Klaksvík. Linu býr hjá Óla. Óli er fiskimaður.',
        translation: 'É de manhã em Klaksvík. O Linu mora na casa do Óli. O Óli é pescador.',
        choices: [
          { text: 'Linu fer við Óla niður á havnina.', translation: 'O Linu vai com o Óli até o porto.', next: 'havn' },
          { text: 'Linu svevur.', translation: 'O Linu dorme.', next: 'sova' },
        ],
      },
      sova: {
        emoji: '😴',
        text: 'Óli bankar á hurðina. «Linu! Bátarnir koma!»',
        translation: 'O Óli bate na porta. «Linu! Os barcos estão chegando!»',
        choices: [{ text: 'Linu rennur niður á havnina.', translation: 'O Linu desce correndo até o porto.', next: 'havn' }],
      },
      havn: {
        emoji: '⚓',
        text: 'Á havnini er ein stórur bátur. Í bátinum eru nógvir fiskar.',
        translation: 'No porto há um barco grande. No barco há muitos peixes.',
        choices: [{ text: '«Óli, hvat eitur hesin fiskurin?»', translation: '«Óli, como se chama este peixe?»', next: 'fiskar' }],
      },
      fiskar: {
        emoji: '🐟',
        text: '«Hetta er ein toskur, og hatta er ein hýsa. Toskurin er stórur, og hýsan er lítil.»',
        translation: '«Isto é um bacalhau, e aquilo é um hadoque. O bacalhau é grande, e o hadoque é pequeno.»',
        choices: [
          { text: '«Og hvat er hatta?»', translation: '«E o que é aquilo?»', next: 'sild' },
          {
            text: '«Ha! Hýsan er stór, og toskurin er lítil.»',
            translation: '«Ha! O hadoque é grande, e o bacalhau é pequeno.»',
            wrong: 'O Óli disse o contrário: «Toskurin er stórur» (o bacalhau é grande) e «hýsan er lítil» (o hadoque é pequeno).',
          },
        ],
      },
      sild: {
        emoji: '🐠',
        text: '«Tað er ein sild. Sildin er lítil, men í havinum eru milliónir av sildum.»',
        translation: '«É um arenque. O arenque é pequeno, mas no mar há milhões de arenques.»',
        choices: [{ text: 'Linu hyggur at fiskunum. Hann er svangur.', translation: 'O Linu olha os peixes. Ele está com fome.', next: 'keypa' }],
      },
      keypa: {
        emoji: '🍽️',
        text: '«Toskurin er feskur. Vilt tú eta hann til døgurða?»',
        translation: '«O bacalhau está fresco. Você quer comê-lo no almoço?»',
        choices: [
          { text: '«Ja takk!»', translation: '«Sim, obrigado!»', next: 'final_bom' },
          { text: '«Nei takk. Eg eti ikki fisk.»', translation: '«Não, obrigado. Eu não como peixe.»', next: 'final_nei' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Til døgurða eta Óli og Linu toskin. Hann er feskur og góður.',
        translation: 'No almoço, o Óli e o Linu comem o bacalhau. Ele está fresco e gostoso.',
        ending: { tone: 'bom', title: 'Do mar para a mesa', message: 'O Linu aprendeu o nome dos peixes e almoçou bacalhau fresquinho em Klaksvík.' },
      },
      final_nei: {
        emoji: '🤨',
        text: 'Óli flennir. «Ein fuglur, sum ikki etur fisk? Tað trúgvi eg ikki!»',
        translation: 'O Óli ri. «Um pássaro que não come peixe? Não acredito!»',
        ending: { tone: 'neutro', title: 'Pinguim sem peixe?', message: 'Um pinguim recusando peixe fresco em Klaksvík… Tente de novo e diga «Ja takk!».' },
      },
    },
  },
  {
    id: 'fo-h5',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Kirkjan í Saksun',
    emoji: '⛪',
    summary: 'Em Saksun, o Linu e a Marjun veem a igrejinha de teto de grama e a baía que esvazia na maré baixa.',
    cultural_context:
      'Saksun fica no norte da ilha de Streymoy. A igrejinha de madeira com teto de grama é de 1858, e a baía em frente quase se esvazia na maré baixa: dá para andar na areia, mas é preciso tomar cuidado quando a maré volta.',
    start: 'start',
    glossary: [
      ['ein kirkja → kirkjan', 'uma igreja → a igreja'],
      ['eitt tak → takið', 'um teto → o teto (neutro)'],
      ['torvtak', 'teto de grama (de torrões de turfa)'],
      ['ein vík → víkin', 'uma baía → a baía'],
      ['fjøra', 'maré baixa'],
      ['hús', 'casa / casas (o plural neutro não muda)'],
      ['vátur', 'molhado'],
    ],
    nodes: {
      start: {
        emoji: '🏞️',
        text: 'Saksun er ein lítil bygd. Her eru ein kirkja, nøkur hús og ein stór vík. Linu er her við Marjun.',
        translation: 'Saksun é uma vila pequena. Aqui há uma igreja, algumas casas e uma baía grande. O Linu está aqui com a Marjun.',
        choices: [
          { text: 'Linu og Marjun ganga niður at kirkjuni.', translation: 'O Linu e a Marjun descem até a igreja.', next: 'kirkja' },
          { text: 'Linu hyggur at víkini.', translation: 'O Linu olha a baía.', next: 'vik' },
        ],
      },
      kirkja: {
        emoji: '⛪',
        text: 'Kirkjan er lítil og hvít. Takið er grønt: tað er gras!',
        translation: 'A igreja é pequena e branca. O teto é verde: é grama!',
        choices: [{ text: '«Gras á takinum!»', translation: '«Grama no teto!»', next: 'tak' }],
      },
      tak: {
        emoji: '🌱',
        text: '«Tað er eitt torvtak,» sigur Marjun. «Nógv gomul hús í Føroyum hava torvtak.»',
        translation: '«É um teto de grama», diz a Marjun. «Muitas casas antigas nas Faroé têm teto de grama.»',
        choices: [{ text: 'Linu og Marjun ganga niður at víkini.', translation: 'O Linu e a Marjun descem até a baía.', next: 'vik' }],
      },
      vik: {
        emoji: '🏖️',
        text: 'Nú er fjøra. Í víkini er einki vatn, bara sandur!',
        translation: 'Agora é maré baixa. Na baía não há água nenhuma, só areia!',
        choices: [
          { text: 'Linu gongur út á sandin.', translation: 'O Linu anda pela areia.', next: 'sandur' },
          {
            text: 'Linu vil svimja í víkini.',
            translation: 'O Linu quer nadar na baía.',
            wrong: 'O texto diz «Í víkini er einki vatn, bara sandur»: na maré baixa (fjøra) a baía fica sem água, só com areia. Não dá para nadar!',
          },
        ],
      },
      sandur: {
        emoji: '🌊',
        text: 'Marjun rópar: «Linu! Nú kemur vatnið aftur!»',
        translation: 'A Marjun grita: «Linu! Agora a água está voltando!»',
        choices: [
          { text: 'Linu rennur skjótt upp á land.', translation: 'O Linu corre rápido para a terra.', next: 'final_bom' },
          { text: '«Nei, sandurin er stuttligur!»', translation: '«Não, a areia é divertida!»', next: 'final_vatur' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu og Marjun sita við kirkjuna. Nú er víkin full av vatni.',
        translation: 'O Linu e a Marjun se sentam junto à igreja. Agora a baía está cheia de água.',
        ending: { tone: 'bom', title: 'A maré no seu tempo', message: 'O Linu ouviu a Marjun e viu, sequinho, a baía de Saksun se encher de novo.' },
      },
      final_vatur: {
        emoji: '💦',
        text: 'Vatnið kemur skjótt. Nú er Linu vátur, men glaður. Hann er jú ein fuglur!',
        translation: 'A água chega rápido. Agora o Linu está molhado, mas feliz. Afinal, ele é um pássaro!',
        ending: { tone: 'neutro', title: 'Pinguim encharcado', message: 'Deu tudo certo porque o Linu é pinguim, mas a maré de Saksun volta rápido: quando alguém gritar «vatnið kemur aftur», saia da areia!' },
      },
    },
  },
  {
    id: 'fo-h6',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Lombini í Kirkjubø',
    emoji: '🐑',
    summary: 'Em Kirkjubøur, o Linu vê as ruínas de uma catedral sem teto, uma igrejinha branca e os cordeiros do fazendeiro Pætur.',
    cultural_context:
      'Kirkjubøur, ao sul de Tórshavn, foi a sede do bispado das Faroé na Idade Média. Lá estão as ruínas da catedral de São Magno, o «Múrurin», de por volta de 1300, que nunca ganhou teto, e a igreja de Santo Olavo, a mais antiga das ilhas ainda em uso.',
    start: 'start',
    glossary: [
      ['ein múrur → múrurin', 'um muro → o muro'],
      ['eitt hús → húsið', 'uma casa → a casa'],
      ['eitt lamb → lambið / lombini', 'um cordeiro → o cordeiro / os cordeiros'],
      ['tey', 'eles (para um grupo neutro ou misto)'],
      ['einki tak', 'nenhum teto'],
      ['ein bóndi', 'um fazendeiro'],
      ['kýr', 'vaca / vacas'],
    ],
    nodes: {
      start: {
        emoji: '☀️',
        text: 'Linu er í Kirkjubø. Sólin skínur.',
        translation: 'O Linu está em Kirkjubøur. O sol está brilhando.',
        choices: [
          { text: 'Linu hyggur at einum stórum múri.', translation: 'O Linu olha um muro grande.', next: 'mur' },
          { text: 'Linu gongur niður at sjónum.', translation: 'O Linu desce até o mar.', next: 'olav' },
        ],
      },
      mur: {
        emoji: '🧱',
        text: 'Hetta er Múrurin. Hann er ein stór, gomul kirkja. Men kirkjan hevur einki tak!',
        translation: 'Este é o Múrurin. Ele é uma igreja grande e antiga. Mas a igreja não tem teto!',
        choices: [{ text: 'Linu gongur víðari.', translation: 'O Linu segue em frente.', next: 'hus' }],
      },
      olav: {
        emoji: '⛪',
        text: 'Niðri við sjógvin er ein lítil, hvít kirkja. Tað er Ólavskirkjan. Hon hevur tak!',
        translation: 'Lá embaixo, junto ao mar, há uma igreja pequena e branca. É a igreja de Santo Olavo. Ela tem teto!',
        choices: [{ text: 'Linu gongur víðari.', translation: 'O Linu segue em frente.', next: 'hus' }],
      },
      hus: {
        emoji: '🏠',
        text: 'Her er eitt gamalt træhús við torvtaki. Ein bóndi stendur í hurðini. «Hey! Eg eiti Pætur. Vilt tú síggja lombini?»',
        translation: 'Aqui há uma casa velha de madeira com teto de grama. Um fazendeiro está na porta. «Oi! Eu me chamo Pætur. Você quer ver os cordeiros?»',
        choices: [
          { text: '«Ja takk!»', translation: '«Sim, obrigado!»', next: 'lomb' },
          {
            text: '«Ja! Hvar eru kýrnar?»',
            translation: '«Quero! Onde estão as vacas?»',
            wrong: 'O Pætur perguntou sobre «lombini»: os cordeiros (lamb, plural lomb), e não as vacas (kýr).',
          },
        ],
      },
      lomb: {
        emoji: '🐑',
        text: 'Í gerðinum eru fimm lomb. Tey eru hvít og svørt. Eitt lamb er lítið og svart.',
        translation: 'No pasto há cinco cordeiros. Eles são brancos e pretos. Um cordeiro é pequeno e preto.',
        choices: [
          { text: 'Linu klappar lambið.', translation: 'O Linu faz carinho no cordeiro.', next: 'final_bom' },
          { text: 'Linu rennur eftir lombunum.', translation: 'O Linu corre atrás dos cordeiros.', next: 'final_skjot' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Lambið er blítt. Pætur flennir: «Tað eitur Linu eisini!»',
        translation: 'O cordeiro é mansinho. O Pætur ri: «Ele também se chama Linu!»',
        ending: { tone: 'bom', title: 'Xará de lã', message: 'O Linu fez carinho no cordeirinho preto… e descobriu que ele tem o mesmo nome!' },
      },
      final_skjot: {
        emoji: '💨',
        text: 'Lombini renna burtur. «Tey eru skjót!» sigur Pætur.',
        translation: 'Os cordeiros fogem correndo. «Eles são rápidos!», diz o Pætur.',
        ending: { tone: 'neutro', title: 'Corrida perdida', message: 'Cordeiro não gosta de ser perseguido. Tente de novo com calma: «Linu klappar lambið».' },
      },
    },
  },
  // ───────────────────────── A2.1 ─────────────────────────
  {
    id: 'fo-h7',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Fossurin í Gásadali',
    emoji: '💧',
    summary: 'O Linu chega de avião a Vágar, e o amigo Hanus o leva de carro até a cachoeira que cai direto no mar.',
    cultural_context:
      'Vágar tem o único aeroporto das Faroé, construído pelos britânicos durante a Segunda Guerra Mundial. Na vila de Gásadalur, a cachoeira Múlafossur despenca do rochedo direto no mar; até o túnel ficar pronto, em 2004, só se chegava à vila por uma trilha íngreme sobre a montanha.',
    start: 'start',
    glossary: [
      ['á flogvøllinum', 'no aeroporto (á + dativo: onde está)'],
      ['bíða eftir + dativo', 'esperar por (bíðar eftir Linu)'],
      ['ein fossur → fossin (acusativo)', 'uma cachoeira → a cachoeira (objeto)'],
      ['Hvussu nógv fólk…? / Hvar…?', 'Quantas pessoas…? / Onde…?'],
      ['út í havið', 'para dentro do mar (í + acusativo: movimento)'],
      ['Ansa tær!', 'Cuidado!'],
      ['mjørki', 'neblina, cerração'],
    ],
    nodes: {
      start: {
        emoji: '✈️',
        text: 'Flogfarið lendir í Vágum. Á flogvøllinum bíðar Hanus eftir Linu. «Hey, Linu! Vilt tú síggja ein foss í dag?»',
        translation: 'O avião pousa em Vágar. No aeroporto, o Hanus espera pelo Linu. «Oi, Linu! Você quer ver uma cachoeira hoje?»',
        choices: [
          { text: '«Ja! Hvar er fossurin?»', translation: '«Quero! Onde fica a cachoeira?»', next: 'bilur' },
          { text: '«Fyrst vil eg hava ein kopp av kaffi.»', translation: '«Primeiro eu quero uma xícara de café.»', next: 'kaffi' },
        ],
      },
      kaffi: {
        emoji: '☕',
        text: 'Á kaffistovuni keypir Linu ein kopp av kaffi. Hanus hyggur út gjøgnum vindeygað. «Skunda tær! Nú skínur sólin, men seinnapartin kemur mjørki.»',
        translation: 'Na cafeteria, o Linu compra uma xícara de café. O Hanus olha pela janela. «Anda logo! Agora o sol está brilhando, mas à tarde vem neblina.»',
        choices: [{ text: 'Linu drekkur kaffið skjótt.', translation: 'O Linu bebe o café rapidinho.', next: 'bilur' }],
      },
      bilur: {
        emoji: '🚗',
        text: 'Hanus koyrir bilin gjøgnum ein langan tunnil. Aftan fyri tunnilin liggur Gásadalur, ein lítil bygd millum fjøllini.',
        translation: 'O Hanus dirige o carro por um túnel comprido. Depois do túnel fica Gásadalur, uma vila pequena entre as montanhas.',
        choices: [
          { text: '«Hvussu nógv fólk búgva her?»', translation: '«Quantas pessoas moram aqui?»', next: 'folk' },
          { text: '«Hvar er fossurin?»', translation: '«Onde está a cachoeira?»', next: 'fossur' },
        ],
      },
      folk: {
        emoji: '🏘️',
        text: '«Ikki nógv!» sigur Hanus. «Men um summarið koma nógv ferðafólk. Øll vilja síggja fossin.»',
        translation: '«Não muitas!», diz o Hanus. «Mas no verão vêm muitos turistas. Todos querem ver a cachoeira.»',
        choices: [{ text: '«Eg eisini! Hvar er hann?»', translation: '«Eu também! Onde ela está?»', next: 'fossur' }],
      },
      fossur: {
        emoji: '💧',
        text: 'Tey ganga eftir gøtuni út á bergið. Har sær Linu Múlafoss. Vatnið fellur beint út í havið!',
        translation: 'Eles andam pela trilha até o rochedo. Lá o Linu vê a Múlafossur. A água cai direto no mar!',
        choices: [
          { text: 'Linu tekur eina mynd av fossinum.', translation: 'O Linu tira uma foto da cachoeira.', next: 'mynd' },
          {
            text: '«Hví fellur fossurin niður á ein sand?»',
            translation: '«Por que a cachoeira cai numa areia?»',
            wrong: 'O texto diz «Vatnið fellur beint út í havið»: a água cai direto NO MAR («út í havið», com «í» + acusativo, indica para onde vai). Não há praia embaixo dela.',
          },
        ],
      },
      mynd: {
        emoji: '📸',
        text: '«Ansa tær! Far ikki ov nær við kantin,» sigur Hanus. Úti á havinum sær Linu mjørka koma.',
        translation: '«Cuidado! Não chegue perto demais da beirada», diz o Hanus. Lá longe no mar, o Linu vê a neblina chegando.',
        choices: [
          { text: '«Nú ganga vit aftur.»', translation: '«Agora vamos voltar.»', next: 'final_bom' },
          { text: 'Linu vil bíða eftir sólini.', translation: 'O Linu quer esperar pelo sol.', next: 'final_mjorki' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Í bilinum drekka tey heitt te. Á telefonini hjá Linu er ein vøkur mynd av Múlafossi.',
        translation: 'No carro, eles tomam chá quente. No celular do Linu há uma foto linda da Múlafossur.',
        ending: { tone: 'bom', title: 'Foto antes da neblina', message: 'O Linu ouviu o Hanus e saiu com a foto perfeita antes que a neblina cobrisse tudo.' },
      },
      final_mjorki: {
        emoji: '🌫️',
        text: 'Linu bíðar og bíðar. Mjørkin fer ikki. Nú sær hann einki: hvørki fossin ella havið!',
        translation: 'O Linu espera e espera. A neblina não vai embora. Agora ele não vê nada: nem a cachoeira nem o mar!',
        ending: { tone: 'neutro', title: 'Tudo branco', message: 'Nas Faroé, a neblina chega rápido e pode demorar a ir embora. O Hanus avisou: «seinnapartin kemur mjørki».' },
      },
    },
  },
  {
    id: 'fo-h8',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Ferjan til Suðuroyar',
    emoji: '⛴️',
    summary: 'Na balsa de Tórshavn para Suðuroy, o Linu conversa com uma senhora que conhece o amigo que ele vai visitar.',
    cultural_context:
      'Suðuroy é a ilha mais ao sul das Faroé. A balsa sai de Tórshavn e leva cerca de duas horas até o porto de Krambatangi; o mar no caminho pode ser bem agitado.',
    start: 'start',
    glossary: [
      ['Hvagar fert tú?', 'Para onde você vai?'],
      ['Hvønn vitjar tú?', 'Quem você visita? («hvønn» é o acusativo de «hvør», quem)'],
      ['Eg kenni hann.', 'Eu o conheço. (hann: pronome no acusativo)'],
      ['hjá konuni / hjá Bárði', 'com a senhora, junto dela / na casa do Bárður (hjá + dativo)'],
      ['stórur sjógvur', 'mar agitado'],
      ['dekkið', 'o convés'],
      ['í Vági', 'em Vágur (cidade de Suðuroy)'],
    ],
    nodes: {
      start: {
        emoji: '⚓',
        text: 'Linu stendur á bryggjuni í Havn. Ferjan til Suðuroyar fer klokkan átta.',
        translation: 'O Linu está no cais em Tórshavn. A balsa para Suðuroy sai às oito.',
        choices: [
          { text: 'Linu fer beinanvegin inn í ferjuna.', translation: 'O Linu entra na balsa na mesma hora.', next: 'ferja' },
          { text: 'Linu keypir sær eina bók og fer so inn í ferjuna.', translation: 'O Linu compra um livro e depois entra na balsa.', next: 'ferja' },
        ],
      },
      ferja: {
        emoji: '👵',
        text: 'Í ferjuni situr Linu við eitt vindeyga. Við síðuna av honum situr ein gomul kona. «Hvagar fert tú, lítli vinur?»',
        translation: 'Na balsa, o Linu se senta junto a uma janela. Ao lado dele está sentada uma senhora. «Para onde você vai, amiguinho?»',
        choices: [{ text: '«Eg fari til Suðuroyar. Og tú?»', translation: '«Vou para Suðuroy. E a senhora?»', next: 'kona' }],
      },
      kona: {
        emoji: '🏡',
        text: '«Eg fari heim. Eg búgvi í Vági. Hvønn vitjar tú?»',
        translation: '«Vou para casa. Eu moro em Vágur. Quem você vai visitar?»',
        choices: [
          { text: '«Eg vitji ein vin. Hann eitur Bárður.»', translation: '«Vou visitar um amigo. Ele se chama Bárður.»', next: 'vinur' },
          {
            text: '«Við ferjuni, sjálvandi!»',
            translation: '«De balsa, claro!»',
            wrong: 'A senhora perguntou «Hvønn vitjar tú?»: «hvønn» quer dizer «quem» (no acusativo, como objeto). Ela quer saber QUEM o Linu vai visitar, não como ele vai viajar.',
          },
        ],
      },
      vinur: {
        emoji: '⚽',
        text: '«Bárður? Eg kenni hann! Hann spælir fótbólt.» Nú er stórur sjógvur, og ferjan fer upp og niður.',
        translation: '«O Bárður? Eu o conheço! Ele joga futebol.» Agora o mar está agitado, e a balsa sobe e desce.',
        choices: [
          { text: 'Linu fer út á dekkið.', translation: 'O Linu sai para o convés.', next: 'dekk' },
          { text: 'Linu situr hjá konuni og tosar.', translation: 'O Linu fica sentado com a senhora e conversa.', next: 'tosa' },
        ],
      },
      dekk: {
        emoji: '🌊',
        text: 'Á dekkinum er hvassur vindur. Linu sær fuglar yvir bylgjunum. Hann er glaður: hann elskar havið!',
        translation: 'No convés venta forte. O Linu vê pássaros sobre as ondas. Ele está feliz: ele adora o mar!',
        choices: [{ text: 'Linu verður á dekkinum alla ferðina.', translation: 'O Linu fica no convés a viagem inteira.', next: 'land' }],
      },
      tosa: {
        emoji: '🍰',
        text: 'Konan gevur Linu eitt stykki av køku. Tey tosa um Bárð og um Brasil.',
        translation: 'A senhora dá ao Linu um pedaço de bolo. Eles conversam sobre o Bárður e sobre o Brasil.',
        choices: [{ text: '«Takk fyri kakuna!»', translation: '«Obrigado pelo bolo!»', next: 'land' }],
      },
      land: {
        emoji: '👋',
        text: 'Eftir tveir tímar kemur ferjan til Krambatanga. Á bryggjuni stendur Bárður. «Hey, Linu! Hvat vilt tú gera í dag?»',
        translation: 'Depois de duas horas, a balsa chega a Krambatangi. No cais está o Bárður. «Oi, Linu! O que você quer fazer hoje?»',
        choices: [
          { text: '«Eg vil síggja bygdina hjá tær!»', translation: '«Quero ver a sua vila!»', next: 'final_bom' },
          { text: '«Eg vil sova. Eg eri so trøttur.»', translation: '«Quero dormir. Estou tão cansado.»', next: 'final_sova' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Bárður og Linu ganga gjøgnum Vág. Um kvøldið eta tey fisk hjá mammu hansara.',
        translation: 'O Bárður e o Linu passeiam por Vágur. À noite, eles comem peixe na casa da mãe dele.',
        ending: { tone: 'bom', title: 'Bem-vindo a Suðuroy', message: 'O Linu chegou ao sul das Faroé cheio de energia e conheceu a vila do amigo.' },
      },
      final_sova: {
        emoji: '😴',
        text: 'Linu svevur allan dagin hjá Bárði. Bárður spælir fótbólt einsamallur.',
        translation: 'O Linu dorme o dia inteiro na casa do Bárður. O Bárður joga futebol sozinho.',
        ending: { tone: 'neutro', title: 'Dia de sono', message: 'A viagem cansou, mas o Bárður ficou sozinho. Tente de novo e vá conhecer Vágur!' },
      },
    },
  },
  {
    id: 'fo-h9',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Upp á Slættaratind',
    emoji: '⛰️',
    summary: 'Na ilha de Eysturoy, o Linu e a Sára sobem a montanha mais alta das Faroé e enfrentam a neblina no caminho.',
    cultural_context:
      'O Slættaratindur, na ilha de Eysturoy, tem 880 metros e é a montanha mais alta das Faroé. Dizem que, num dia bem claro, dá para ver do topo todas as 18 ilhas do arquipélago.',
    start: 'start',
    glossary: [
      ['Hvør gongur fyrst?', 'Quem vai na frente?'],
      ['gøtan', 'a trilha'],
      ['við ein stóran stein', 'junto a uma pedra grande (við + acusativo)'],
      ['tyrstur', 'com sede'],
      ['varðin → við varðan', 'o marco de pedras → junto ao marco'],
      ['á tindinum', 'no cume (á + dativo)'],
      ['ein, tvær, tríggjar', 'um, duas, três (no feminino, para «oyggjar», ilhas)'],
    ],
    nodes: {
      start: {
        emoji: '⛰️',
        text: 'Linu og Sára standa undir Slættaratindi. Tindurin er 880 metrar høgur. «Hvør gongur fyrst?» spyr Sára.',
        translation: 'O Linu e a Sára estão ao pé do Slættaratindur. O pico tem 880 metros de altura. «Quem vai na frente?», pergunta a Sára.',
        choices: [
          { text: '«Tú! Tú kennir gøtuna.»', translation: '«Você! Você conhece a trilha.»', next: 'gota' },
          { text: '«Eg! Eg eri ein sterkur fuglur.»', translation: '«Eu! Eu sou um pássaro forte.»', next: 'gota' },
        ],
      },
      gota: {
        emoji: '🥾',
        text: 'Gøtan er brøtt. Eftir hálvan tíma steðga tey við ein stóran stein. «Ert tú móður? Vilt tú hava vatn?» spyr Sára.',
        translation: 'A trilha é íngreme. Depois de meia hora, eles param junto a uma pedra grande. «Você está cansado? Quer água?», pergunta a Sára.',
        choices: [
          { text: '«Ja takk, eg eri tyrstur!»', translation: '«Quero, obrigado, estou com sede!»', next: 'mjorki' },
          {
            text: '«Nei takk, eg eti ikki nú.»',
            translation: '«Não, obrigado, não vou comer agora.»',
            wrong: 'A Sára não ofereceu comida: ela perguntou «Vilt tú hava vatn?», «Você quer ÁGUA?». «Vatn» é água.',
          },
        ],
      },
      mjorki: {
        emoji: '🌫️',
        text: 'Longri uppi kemur mjørki. Nú sær Linu ikki Sáru longur. «Linu! Hvar ert tú?»',
        translation: 'Mais para cima, chega a neblina. Agora o Linu não vê mais a Sára. «Linu! Onde você está?»',
        choices: [
          { text: '«Eg eri her, við varðan!»', translation: '«Estou aqui, junto ao marco de pedras!»', next: 'saman' },
          { text: '«Eg fari niður aftur!»', translation: '«Vou descer de volta!»', next: 'final_nidur' },
        ],
      },
      saman: {
        emoji: '🤝',
        text: 'Sára finnur Linu við varðan. Tey ganga saman upp á tindin. Á tindinum er mjørkin burtur!',
        translation: 'A Sára encontra o Linu junto ao marco. Eles sobem juntos até o cume. No cume, a neblina sumiu!',
        choices: [{ text: '«Hvat síggja vit nú?»', translation: '«O que a gente está vendo agora?»', next: 'utsyn' }],
      },
      utsyn: {
        emoji: '🏝️',
        text: 'Undir teimum liggja fjøll, firðir og oyggjar. «Í góðum veðri sært tú allar átjan oyggjarnar her frá,» sigur Sára.',
        translation: 'Lá embaixo ficam montanhas, fiordes e ilhas. «Com tempo bom, daqui você vê todas as dezoito ilhas», diz a Sára.',
        choices: [
          { text: 'Linu telur: «Ein, tvær, tríggjar…»', translation: 'O Linu conta: «Uma, duas, três…»', next: 'final_bom' },
          { text: 'Linu setur seg og etur matpakkan.', translation: 'O Linu se senta e come o lanche.', next: 'final_bom' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu og Sára sita á tindinum og hyggja. «Hvussu vakurt!» sigur Linu.',
        translation: 'O Linu e a Sára ficam sentados no cume olhando. «Que lindo!», diz o Linu.',
        ending: { tone: 'bom', title: 'No topo das Faroé', message: 'Juntos, o Linu e a Sára venceram a neblina e chegaram ao ponto mais alto das ilhas.' },
      },
      final_nidur: {
        emoji: '😟',
        text: 'Linu gongur einsamallur niður aftur í mjørkanum. Seinni kemur Sára. Hon er ill: «Tú mást ikki ganga einsamallur!»',
        translation: 'O Linu desce sozinho na neblina. Mais tarde chega a Sára. Ela está brava: «Você não pode andar sozinho!»',
        ending: { tone: 'neutro', title: 'Descida sozinho', message: 'Na neblina, o certo é ficar parado e dizer onde se está. Tente de novo: «Eg eri her, við varðan!».' },
      },
    },
  },
  // ───────────────────────── A2.2 ─────────────────────────
  {
    id: 'fo-h10',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Ein dagur í Nólsoy',
    emoji: '🐦',
    summary: 'Em Nólsoy, a ilhota em frente a Tórshavn, o velho Símun conta ao Linu sobre o herói Nólsoyar Páll e a sua balada dos pássaros.',
    cultural_context:
      'Nólsoy fica bem em frente a Tórshavn, a uns vinte minutos de balsa. Lá nasceu Nólsoyar Páll (1766–1809), herói nacional que enfrentou o monopólio comercial dinamarquês e escreveu a «Fuglakvæðið» (Balada dos Pássaros), em que o ostraceiro (tjaldur) representa os feroeses. O tjaldur é a ave nacional, e a sua chegada é festejada em 12 de março.',
    start: 'start',
    glossary: [
      ['fór / kom / stóð', 'foi / veio / estava de pé (passado de verbos fortes)'],
      ['skrivaði / segði / hugdi', 'escreveu / disse / olhou (passado de verbos fracos)'],
      ['ein gamal maður → gamli maðurin', 'um homem velho → o homem velho (adjetivo forte × fraco)'],
      ['tann góði fuglurin', 'o pássaro bom (adjetivo fraco depois do artigo)'],
      ['abbi mín / sítt hús', 'meu avô / a casa dele (possessivo reflexivo)'],
      ['tjaldur', 'ostraceiro, a ave nacional das Faroé'],
      ['ránsfuglur', 'ave de rapina'],
      ['æt', 'se chamava (passado de «eita»)'],
    ],
    nodes: {
      start: {
        emoji: '⛴️',
        text: 'Í gjár fór Linu við lítlu ferjuni úr Havn til Nólsoyar. Ferðin tók bara tjúgu minuttir. Á bryggjuni stóð ein gamal maður við stórum, hvítum skeggi.',
        translation: 'Ontem o Linu foi na balsinha de Tórshavn para Nólsoy. A viagem levou só vinte minutos. No cais estava um homem velho de barba grande e branca.',
        choices: [
          { text: '«Hey! Eg eiti Linu.»', translation: '«Oi! Eu me chamo Linu.»', next: 'simun' },
        ],
      },
      simun: {
        emoji: '👴',
        text: '«Vælkomin til Nólsoyar! Eg eiti Símun. Hevur tú hoyrt um Nólsoyar Pál?»',
        translation: '«Bem-vindo a Nólsoy! Eu me chamo Símun. Você já ouviu falar de Nólsoyar Páll?»',
        choices: [
          { text: '«Nei, hvør var hann?»', translation: '«Não, quem era ele?»', next: 'pall' },
          { text: '«Ja, hann skrivaði eitt kvæði um fuglar!»', translation: '«Sim, ele escreveu uma balada sobre pássaros!»', next: 'kvaedi' },
        ],
      },
      pall: {
        emoji: '⛵',
        text: '«Hann var ein djarvur maður úr hesi bygdini. Hann sigldi við sínum egna skipi, og hann skrivaði eitt kvæði um fuglar.»',
        translation: '«Ele era um homem corajoso desta vila. Ele navegava no seu próprio navio, e escreveu uma balada sobre pássaros.»',
        choices: [{ text: '«Um fuglar? Hvat hendi í kvæðinum?»', translation: '«Sobre pássaros? O que acontecia na balada?»', next: 'kvaedi' }],
      },
      kvaedi: {
        emoji: '📜',
        text: '«Í kvæðinum var tjaldurin tann góði fuglurin. Ránsfuglarnir vóru teir ringu.»',
        translation: '«Na balada, o ostraceiro era o pássaro bom. As aves de rapina eram as más.»',
        choices: [
          { text: '«Tjaldurin! Hann er tjóðarfuglurin hjá tykkum.»', translation: '«O ostraceiro! Ele é a ave nacional de vocês.»', next: 'hus' },
          {
            text: '«So vóru ránsfuglarnir teir góðu?»',
            translation: '«Então as aves de rapina eram as boas?»',
            wrong: 'O Símun disse o contrário: «tjaldurin var tann góði fuglurin» (o ostraceiro era o pássaro bom) e «ránsfuglarnir vóru teir ringu» (as aves de rapina eram as más).',
          },
        ],
      },
      hus: {
        emoji: '🏠',
        text: 'Símun vísti Linu sítt gamla hús. Í stovuni hekk ein mynd av einum lítlum skipi. «Hetta var skipið hjá abba mínum,» segði hann.',
        translation: 'O Símun mostrou ao Linu a sua casa antiga. Na sala havia um quadro de um navio pequeno. «Este era o navio do meu avô», disse ele.',
        choices: [
          { text: '«Hvat æt skipið?»', translation: '«Como se chamava o navio?»', next: 'skip' },
          { text: 'Linu hugdi leingi at myndini.', translation: 'O Linu olhou o quadro por muito tempo.', next: 'skip' },
        ],
      },
      skip: {
        emoji: '🌫️',
        text: '«Tað æt Tjaldur, sjálvandi!» Símun flenti. Men nú kom mjørki inn yvir oynna.',
        translation: '«Ele se chamava Tjaldur, claro!» O Símun riu. Mas agora a neblina chegou sobre a ilha.',
        choices: [
          { text: 'Linu skundaði sær niður á bryggjuna.', translation: 'O Linu desceu correndo até o cais.', next: 'final_bom' },
          { text: 'Linu drakk ein kaffikopp afturat hjá Símuni.', translation: 'O Linu tomou mais uma xícara de café com o Símun.', next: 'final_farin' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu náddi seinastu ferjuna. Um kvøldið skrivaði hann í dagbókina sína: «Ein góður dagur í Nólsoy!»',
        translation: 'O Linu pegou a última balsa. À noite, ele escreveu no seu diário: «Um dia bom em Nólsoy!»',
        ending: { tone: 'bom', title: 'Um dia de história', message: 'O Linu conheceu o herói de Nólsoy, a balada dos pássaros e ainda voltou para casa a tempo.' },
      },
      final_farin: {
        emoji: '🛏️',
        text: 'Tá ið Linu kom niður á bryggjuna, var ferjan farin! Hann svav hjá Símuni og fekk heitt te og køku.',
        translation: 'Quando o Linu chegou ao cais, a balsa tinha ido embora! Ele dormiu na casa do Símun e ganhou chá quente e bolo.',
        ending: { tone: 'neutro', title: 'Hóspede sem querer', message: 'O café a mais custou a última balsa. Pelo menos o Símun é um ótimo anfitrião!' },
      },
    },
  },
  {
    id: 'fo-h11',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Fuglabergini við Vestmanna',
    emoji: '🚤',
    summary: 'Num passeio de barco saindo de Vestmanna, o Linu entra numa gruta do mar e quase perde o boné novo que ganhou da mãe.',
    cultural_context:
      'Da vila de Vestmanna, na ilha de Streymoy, saem passeios de barco até os paredões de Vestmanna (Vestmannabjørgini), rochedos altíssimos com grutas marinhas onde fazem ninho fulmares, airos e papagaios-do-mar.',
    start: 'start',
    glossary: [
      ['fór / sigldi / kom', 'foi / navegou / veio'],
      ['regnjakkin sín', 'a capa de chuva dele (possessivo reflexivo)'],
      ['nýggja húgvan', 'o boné novo (adjetivo fraco + artigo no substantivo)'],
      ['ein gomul húgva', 'um boné velho (adjetivo forte)'],
      ['húgvan mín / húgvan tín', 'o meu boné / o seu boné'],
      ['eitt helli', 'uma gruta'],
      ['fleyg', 'voou (passado de «flúgva»)'],
      ['skiparin', 'o capitão do barco'],
    ],
    nodes: {
      start: {
        emoji: '🚤',
        text: 'Í gjár fór Linu á bátsferð úr Vestmanna. Báturin var reyður, og skiparin æt Rói. «Tað kann vera vátt í dag,» segði Rói.',
        translation: 'Ontem o Linu fez um passeio de barco saindo de Vestmanna. O barco era vermelho, e o capitão se chamava Rói. «Hoje pode molhar», disse o Rói.',
        choices: [
          { text: 'Linu fór í regnjakkan sín.', translation: 'O Linu vestiu a capa de chuva dele.', next: 'jakki' },
          { text: '«Eg havi ikki brúk fyri regnjakka.»', translation: '«Eu não preciso de capa de chuva.»', next: 'vatur' },
        ],
      },
      jakki: {
        emoji: '🪨',
        text: 'Báturin sigldi út úr fjørðinum. Bergini vóru høg og svørt, og allastaðni vóru fuglar.',
        translation: 'O barco saiu do fiorde. Os rochedos eram altos e pretos, e havia pássaros por toda parte.',
        choices: [{ text: 'Linu hugdi upp á fuglarnar.', translation: 'O Linu olhou para cima, para os pássaros.', next: 'helli' }],
      },
      vatur: {
        emoji: '💦',
        text: 'Ein stór alda kom inn yvir bátin, og Linu varð gjøgnumvátur! Rói flenti og gav honum ein gamlan regnjakka.',
        translation: 'Uma onda grande entrou no barco, e o Linu ficou encharcado! O Rói riu e lhe deu uma capa de chuva velha.',
        choices: [{ text: '«Takk… tú hevði rætt.»', translation: '«Obrigado… você tinha razão.»', next: 'helli' }],
      },
      helli: {
        emoji: '🕳️',
        text: 'Rói sigldi bátin inn í eitt stórt helli. Har inni var myrkt og kalt. «Hygg upp!» segði Rói.',
        translation: 'O Rói levou o barco para dentro de uma gruta grande. Lá dentro estava escuro e frio. «Olhe para cima!», disse o Rói.',
        choices: [
          { text: 'Linu hugdi upp og sá eitt lítið hol, har ljósið kom inn.', translation: 'O Linu olhou para cima e viu um buraquinho por onde a luz entrava.', next: 'huva' },
          { text: 'Linu hugdi niður í grøna vatnið.', translation: 'O Linu olhou para baixo, para a água verde.', next: 'huva' },
        ],
      },
      huva: {
        emoji: '🧢',
        text: 'Tá ið báturin kom út aftur, kom ein sterkur vindur. Nýggja húgvan hjá Linu fleyg út á sjógvin!',
        translation: 'Quando o barco saiu de novo, veio um vento forte. O boné novo do Linu voou para o mar!',
        choices: [
          { text: '«Húgvan mín! Hon var ein gáva frá mammu míni!»', translation: '«O meu boné! Ele foi um presente da minha mãe!»', next: 'stong' },
          {
            text: '«Tað ger einki. Tað var ein gomul húgva.»',
            translation: '«Não faz mal. Era um boné velho.»',
            wrong: 'O texto diz «nýggja húgvan»: o boné NOVO do Linu. «Nýggja» é a forma fraca de «nýggjur», novo; velho seria «gamla húgvan».',
          },
        ],
      },
      stong: {
        emoji: '🎣',
        text: 'Rói tók eina langa stong og fiskaði húgvuna upp. «Her er húgvan tín. Hon er vát, men hon er heil.»',
        translation: 'O Rói pegou uma vara comprida e pescou o boné. «Aqui está o seu boné. Está molhado, mas está inteiro.»',
        choices: [
          { text: '«Takk fyri, Rói! Tú ert ein góður skipari.»', translation: '«Obrigado, Rói! Você é um bom capitão.»', next: 'final_bom' },
          { text: 'Linu setti vátu húgvuna beint á høvdið.', translation: 'O Linu pôs o boné molhado direto na cabeça.', next: 'final_sjukur' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Um kvøldið turkaði Linu húgvuna við omnin og sendi mammu síni eina mynd av fuglabergunum.',
        translation: 'À noite, o Linu secou o boné junto ao aquecedor e mandou para a mãe uma foto dos rochedos dos pássaros.',
        ending: { tone: 'bom', title: 'Boné resgatado', message: 'O presente da mãe voltou para casa, e o Linu viu de perto os paredões de Vestmanna.' },
      },
      final_sjukur: {
        emoji: '🤧',
        text: 'Á veg heim var Linu kaldur í høvdinum. Um kvøldið var hann sjúkur og drakk heitt te í songini.',
        translation: 'No caminho de volta, o Linu estava com a cabeça gelada. À noite, ele estava doente e tomou chá quente na cama.',
        ending: { tone: 'neutro', title: 'Resfriado de boné', message: 'O boné foi salvo, mas o Linu pegou um resfriado. Da próxima vez, seque o boné antes de usar!' },
      },
    },
  },
  {
    id: 'fo-h12',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Kópakonan í Mikladali',
    emoji: '🦭',
    summary: 'Na ilha de Kalsoy, um velho conta ao Linu a lenda da mulher-foca de Mikladalur.',
    cultural_context:
      'Segundo o folclore feroês, as focas tiravam a pele em certas noites e dançavam na praia como gente. Em Mikladalur, na ilha de Kalsoy, uma grande estátua à beira-mar lembra a lenda da Kópakonan, a mulher-foca que um rapaz da vila prendeu escondendo a pele dela.',
    start: 'start',
    glossary: [
      ['ein kópur / kópar', 'uma foca / focas'],
      ['kópakona', 'mulher-foca'],
      ['hamur → haman hennara', 'pele de foca → a pele dela (possessivo «hennara», dela)'],
      ['søgn', 'lenda'],
      ['tók / goymdi / fann', 'pegou / guardou / encontrou'],
      ['ein vøkur kópakona → eina vakra kópakonu', 'uma bela mulher-foca (nominativo → acusativo)'],
      ['gamli maðurin', 'o velho (adjetivo fraco)'],
      ['standmynd', 'estátua'],
    ],
    nodes: {
      start: {
        emoji: '🚌',
        text: 'Linu kom við ferjuni til Kalsoyar og koyrdi við bussi til Mikladals. Niðri við sjógvin stóð ein stór standmynd av eini konu.',
        translation: 'O Linu chegou de balsa a Kalsoy e foi de ônibus até Mikladalur. Lá embaixo, junto ao mar, havia uma grande estátua de uma mulher.',
        choices: [
          { text: 'Linu gekk niður at standmyndini.', translation: 'O Linu desceu até a estátua.', next: 'madur' },
          { text: 'Linu spurdi ein gamlan mann: «Hvør er hon?»', translation: 'O Linu perguntou a um homem velho: «Quem é ela?»', next: 'madur' },
        ],
      },
      madur: {
        emoji: '👴',
        text: 'Gamli maðurin segði: «Hon er Kópakonan. Vilt tú hoyra søgnina?»',
        translation: 'O velho disse: «Ela é a Kópakonan, a mulher-foca. Você quer ouvir a lenda?»',
        choices: [
          { text: '«Ja, fegin!»', translation: '«Quero, com prazer!»', next: 'sogn1' },
          { text: '«Nei takk, eg havi ikki tíð.»', translation: '«Não, obrigado, não tenho tempo.»', next: 'final_skjott' },
        ],
      },
      sogn1: {
        emoji: '🌙',
        text: '«Fyrr í tíðini komu kópar upp á sandin eina vetrarnátt. Teir fóru úr hamunum og dansaðu sum fólk.»',
        translation: '«Antigamente, numa noite de inverno, as focas subiram na areia. Elas tiraram a pele e dançaram como gente.»',
        choices: [{ text: '«Kópar, sum dansaðu?»', translation: '«Focas que dançavam?»', next: 'sogn2' }],
      },
      sogn2: {
        emoji: '🧥',
        text: '«Ja. Ein ungur maður úr bygdini sá eina vakra kópakonu. Hann tók haman hennara og goymdi hann í eini kistu.»',
        translation: '«Sim. Um rapaz da vila viu uma bela mulher-foca. Ele pegou a pele dela e a guardou num baú.»',
        choices: [
          { text: '«Og hvat gjørdi kópakonan?»', translation: '«E o que a mulher-foca fez?»', next: 'sogn3' },
          {
            text: '«So tók kópakonan haman hjá manninum?»',
            translation: '«Então a mulher-foca pegou a pele do rapaz?»',
            wrong: 'Foi o contrário: «Hann tók haman hennara», ELE (o rapaz) pegou a pele DELA. «Hennara» quer dizer «dela».',
          },
        ],
      },
      sogn3: {
        emoji: '🗝️',
        text: '«Hon kundi ikki fara aftur í sjógvin uttan haman. Hon varð konan hjá manninum, og tey fingu børn. Men ein dagin fann hon lykilin at kistuni…»',
        translation: '«Ela não podia voltar para o mar sem a pele. Ela virou a esposa do rapaz, e eles tiveram filhos. Mas um dia ela encontrou a chave do baú…»',
        choices: [
          { text: '«Og so fór hon aftur í sjógvin?»', translation: '«E aí ela voltou para o mar?»', next: 'endi' },
          { text: 'Linu hugdi at standmyndini og segði einki.', translation: 'O Linu olhou a estátua e não disse nada.', next: 'endi' },
        ],
      },
      endi: {
        emoji: '🌊',
        text: '«Ja. Hon tók haman og fór aftur í sjógvin. Men børnini gloymdi hon aldri.»',
        translation: '«Sim. Ela pegou a pele e voltou para o mar. Mas nunca esqueceu os filhos.»',
        choices: [
          { text: '«Ein sorglig søga!»', translation: '«Uma história triste!»', next: 'final_bom' },
          { text: 'Linu hugdi út á havið.', translation: 'O Linu olhou para o mar.', next: 'final_kopur' },
        ],
      },
      final_bom: {
        emoji: '🙏',
        text: 'Linu takkaði gamla manninum fyri søgnina. Á veg heim hugsaði hann um kópakonuna og børnini hennara.',
        translation: 'O Linu agradeceu ao velho pela lenda. No caminho de volta, ele pensou na mulher-foca e nos filhos dela.',
        ending: { tone: 'bom', title: 'A lenda de Kalsoy', message: 'O Linu ouviu até o fim a lenda mais famosa de Mikladalur, contada por quem mora lá.' },
      },
      final_kopur: {
        emoji: '🦭',
        text: 'Í sjónum var ein kópur. Hann hugdi at Linu, og Linu hugdi at honum. So hvarv hann.',
        translation: 'No mar havia uma foca. Ela olhou para o Linu, e o Linu olhou para ela. Depois ela sumiu.',
        ending: { tone: 'bom', title: 'Olhar de foca', message: 'Será que era só uma foca? Em Kalsoy, quem ouve a lenda nunca mais olha o mar do mesmo jeito.' },
      },
      final_skjott: {
        emoji: '📷',
        text: 'Linu tók eina mynd av standmyndini og fór. Í bussinum hugsaði hann: «Hvør var hon?»',
        translation: 'O Linu tirou uma foto da estátua e foi embora. No ônibus, ele pensou: «Quem era ela?»',
        ending: { tone: 'neutro', title: 'Só uma foto', message: 'A pressa custou a melhor parte: a lenda. Tente de novo e diga «Ja, fegin!».' },
      },
    },
  },
  // ───────────────────────── B1.1 ─────────────────────────
  {
    id: 'fo-h13',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Ein dagur í Sandoy',
    emoji: '🏖️',
    summary: 'O Linu e a Katrin atravessam o túnel submarino até Sandoy, onde há praia de areia, um ostraceiro bravo e ovelhas para recolher.',
    cultural_context:
      'Sandoy, ao sul de Streymoy, quer dizer «ilha da areia»: a vila de Sandur tem praia e dunas, coisa rara nas Faroé. Desde dezembro de 2023, um túnel submarino liga a ilha a Streymoy.',
    start: 'start',
    glossary: [
      ['skula: eg skal, vit skulu', 'dever, ir (plano, obrigação)'],
      ['kunna: eg kann, vit kunnu', 'poder, saber fazer'],
      ['tú mást ikki…', 'você não pode…, não deve…'],
      ['fara at + infinitivo', 'ir + infinitivo (futuro: «tað fer at regna», vai chover)'],
      ['Tak skógvarnar av! / Stand still!', 'Tire os sapatos! / Fique parado!'],
      ['Ansa tær!', 'Cuidado!'],
      ['Lat okkum…', 'Vamos…'],
      ['reka seyð', 'tocar, recolher as ovelhas'],
    ],
    nodes: {
      start: {
        emoji: '🚗',
        text: 'Linu og Katrin koyra gjøgnum langa tunnilin undir havinum. «Um fimm minuttir eru vit í Sandoy,» sigur Katrin. «Hvat vilt tú gera í dag?»',
        translation: 'O Linu e a Katrin atravessam de carro o túnel comprido debaixo do mar. «Daqui a cinco minutos estamos em Sandoy», diz a Katrin. «O que você quer fazer hoje?»',
        choices: [
          { text: '«Eg vil ganga á sandinum á Sandi!»', translation: '«Quero andar na areia em Sandur!»', next: 'sandur' },
          { text: '«Eg vil síggja seyð! Kunnu vit vitja ein bónda?»', translation: '«Quero ver ovelhas! A gente pode visitar um fazendeiro?»', next: 'bondi' },
        ],
      },
      sandur: {
        emoji: '👟',
        text: 'Á Sandi steðga tey bilin. «Tú mást ikki ganga ov langt út, tí sjógvurin kemur skjótt inn,» sigur Katrin. «Og tak skógvarnar av: sandurin er vátur!»',
        translation: 'Em Sandur, eles param o carro. «Você não pode ir longe demais, porque o mar sobe rápido», diz a Katrin. «E tire os sapatos: a areia está molhada!»',
        choices: [
          { text: 'Linu tekur skógvarnar av og gongur út á sandin.', translation: 'O Linu tira os sapatos e vai andando pela areia.', next: 'tjaldur' },
          {
            text: 'Linu gongur beint út í vatnið við skónum á.',
            translation: 'O Linu entra direto na água de sapato.',
            wrong: 'A Katrin deu duas ordens: «Tú mást ikki ganga ov langt út» (você não pode ir longe demais) e «tak skógvarnar av» (tire os sapatos). O Linu fez justamente o contrário das duas!',
          },
        ],
      },
      tjaldur: {
        emoji: '🐦',
        text: 'Í grasinum sær Linu ein svartan og hvítan fugl við reyðum nevi. «Hatta er ein tjaldur,» sigur Katrin. «Ansa tær! Hann hevur reiður her. Vit skulu ganga ein annan veg.»',
        translation: 'No capim, o Linu vê um pássaro preto e branco de bico vermelho. «Aquilo é um ostraceiro», diz a Katrin. «Cuidado! Ele tem ninho aqui. Vamos ter que ir por outro caminho.»',
        choices: [
          { text: '«Tú hevur rætt. Vit ganga uttan um.»', translation: '«Você tem razão. Vamos dar a volta.»', next: 'regn' },
          { text: 'Linu vil taka eina mynd tætt við reiðrið.', translation: 'O Linu quer tirar uma foto bem perto do ninho.', next: 'aras' },
        ],
      },
      aras: {
        emoji: '😱',
        text: 'Tjaldurin flýgur beint ímóti Linu og rópar hart. «Far burtur frá reiðrinum! Beinanvegin!» rópar Katrin.',
        translation: 'O ostraceiro voa direto contra o Linu, gritando alto. «Saia de perto do ninho! Já!», grita a Katrin.',
        choices: [{ text: 'Linu rennur burtur. «Orsaka, tjaldur!»', translation: 'O Linu sai correndo. «Desculpe, ostraceiro!»', next: 'regn' }],
      },
      bondi: {
        emoji: '🐑',
        text: 'Í Skálavík hitta tey Jákup, ein bónda við nógvum seyði. «Nú skulu vit reka seyðin niður av fjallinum,» sigur hann. «Vilt tú hjálpa mær?»',
        translation: 'Em Skálavík, eles encontram o Jákup, um fazendeiro com muitas ovelhas. «Agora vamos tocar as ovelhas para baixo da montanha», diz ele. «Você quer me ajudar?»',
        choices: [
          { text: '«Ja! Hvat skal eg gera?»', translation: '«Quero! O que eu tenho que fazer?»', next: 'rekstur' },
          { text: '«Nei takk, eg eri ov lítil.»', translation: '«Não, obrigado, eu sou pequeno demais.»', next: 'regn' },
        ],
      },
      rekstur: {
        emoji: '🙌',
        text: '«Tú skalt standa her og veiva við ørmunum,» sigur Jákup. «Um ein seyður kemur, mást tú ikki renna eftir honum. Stand bara still!»',
        translation: '«Você tem que ficar aqui e abanar os braços», diz o Jákup. «Se uma ovelha vier, você não pode correr atrás dela. Só fique parado!»',
        choices: [
          { text: 'Linu stendur still og veivar.', translation: 'O Linu fica parado e abana os braços.', next: 'regn' },
          {
            text: 'Linu rennur eftir einum seyði.',
            translation: 'O Linu corre atrás de uma ovelha.',
            wrong: 'O Jákup avisou: «mást tú ikki renna eftir honum», você NÃO PODE correr atrás dela. «Tú mást ikki» é uma proibição.',
          },
        ],
      },
      regn: {
        emoji: '🌧️',
        text: 'Seinnapartin fer at regna. «Vit kunnu fara heim nú,» sigur Katrin, «ella vit kunnu fara á kaffistovuna og bíða.»',
        translation: 'À tarde começa a chover. «A gente pode ir para casa agora», diz a Katrin, «ou pode ir ao café e esperar.»',
        choices: [
          { text: '«Lat okkum fara á kaffistovuna!»', translation: '«Vamos ao café!»', next: 'final_bom' },
          { text: '«Vit fara heim. Eg eri vátur og trøttur.»', translation: '«Vamos para casa. Estou molhado e cansado.»', next: 'final_heim' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Á kaffistovuni drekka tey heitt kakao og eta vaflur. «Í morgin skal eg aftur til Sandoyar!» sigur Linu.',
        translation: 'No café, eles tomam chocolate quente e comem waffles. «Amanhã eu vou voltar a Sandoy!», diz o Linu.',
        ending: { tone: 'bom', title: 'Chuva com chocolate', message: 'O Linu seguiu as instruções, conheceu Sandoy e ainda quer voltar amanhã.' },
      },
      final_heim: {
        emoji: '😴',
        text: 'Í bilinum sovnar Linu, áðrenn tey koma inn í tunnilin. Hann sær einki meira av Sandoy.',
        translation: 'No carro, o Linu pega no sono antes de eles entrarem no túnel. Ele não vê mais nada de Sandoy.',
        ending: { tone: 'neutro', title: 'Soneca no túnel', message: 'Um dia cansativo, mas a chuva nas Faroé costuma passar. Da próxima vez, experimente o café da vila!' },
      },
    },
  },
  {
    id: 'fo-h14',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Dansur á Viðareiði',
    emoji: '💃',
    summary: 'Num casamento em Viðareiði, a vila mais ao norte das Faroé, a Turið ensina o Linu a dançar a dança de roda feroesa.',
    cultural_context:
      'Na dança feroesa, as pessoas se dão as mãos numa longa roda e dão dois passos para a esquerda e um para a direita, enquanto cantam baladas medievais (kvæði), algumas com mais de cem estrofes. Perto de Viðareiði, na ilha de Viðoy, fica o Enniberg, um dos paredões marinhos mais altos da Europa.',
    start: 'start',
    glossary: [
      ['Kanst tú…?', 'Você sabe…?, Você consegue…? (de «kunna»)'],
      ['Tak í hondina á mær!', 'Pegue a minha mão!'],
      ['Stíg tvey fet til vinstru!', 'Dê dois passos para a esquerda!'],
      ['til høgru', 'para a direita'],
      ['Gloym ikki…', 'Não esqueça…'],
      ['eg má', 'eu preciso, eu tenho que (de «mega»)'],
      ['kvæði / ørindi / niðurlag', 'balada / estrofe / refrão'],
      ['brúdleyp', 'casamento'],
    ],
    nodes: {
      start: {
        emoji: '💒',
        text: 'Linu er á Viðareiði, í Viðoy. Í kvøld er brúdleyp í bygdini, og øll eru boðin. Vinkona hansara, Turið, spyr: «Kanst tú dansa føroyskan dans?»',
        translation: 'O Linu está em Viðareiði, na ilha de Viðoy. Hoje à noite tem casamento na vila, e todo mundo foi convidado. A amiga dele, a Turið, pergunta: «Você sabe dançar a dança feroesa?»',
        choices: [
          { text: '«Nei, men eg vil fegin læra tað!»', translation: '«Não, mas quero muito aprender!»', next: 'laera' },
          { text: '«Eg kann dansa samba!»', translation: '«Eu sei dançar samba!»', next: 'samba' },
        ],
      },
      samba: {
        emoji: '🥁',
        text: 'Turið flennir. «Samba er stuttligt, men í kvøld skalt tú dansa sum ein føroyingur. Kom her, eg skal vísa tær!»',
        translation: 'A Turið ri. «Samba é divertido, mas hoje à noite você vai dançar como um feroês. Venha cá, eu vou te mostrar!»',
        choices: [{ text: '«Gott! Vís mær!»', translation: '«Legal! Me mostre!»', next: 'laera' }],
      },
      laera: {
        emoji: '👣',
        text: '«Hoyr nú: Tak í hondina á mær. Stíg tvey fet til vinstru og eitt fet til høgru. Og gloym ikki: tú skalt syngja við!»',
        translation: '«Escute: pegue a minha mão. Dê dois passos para a esquerda e um passo para a direita. E não esqueça: você tem que cantar junto!»',
        choices: [
          { text: 'Linu stígur tvey fet til vinstru og eitt til høgru.', translation: 'O Linu dá dois passos para a esquerda e um para a direita.', next: 'ringur' },
          {
            text: 'Linu stígur tvey fet til høgru og eitt til vinstru.',
            translation: 'O Linu dá dois passos para a direita e um para a esquerda.',
            wrong: 'A Turið mandou: «Stíg tvey fet til vinstru og eitt fet til høgru», DOIS passos para a ESQUERDA (vinstru) e UM para a DIREITA (høgru). O Linu inverteu e trombou com o vizinho!',
          },
        ],
      },
      ringur: {
        emoji: '⭕',
        text: 'Í salinum dansa hundrað fólk í einum stórum ringi. Ein maður syngur eitt langt kvæði, og øll hini syngja niðurlagið við.',
        translation: 'No salão, cem pessoas dançam numa roda grande. Um homem canta uma balada longa, e todos os outros cantam o refrão junto.',
        choices: [
          { text: '«Hvussu langt er kvæðið?»', translation: '«Qual o tamanho da balada?»', next: 'kvaedi' },
          { text: 'Linu syngur hart við.', translation: 'O Linu canta junto bem alto.', next: 'syngja' },
        ],
      },
      kvaedi: {
        emoji: '📜',
        text: '«Hetta kvæðið hevur meira enn hundrað ørindi,» sigur Turið. «Vit skulu dansa leingi í kvøld!»',
        translation: '«Esta balada tem mais de cem estrofes», diz a Turið. «A gente vai dançar muito tempo hoje!»',
        choices: [{ text: '«Hundrað?! Nú fari eg at læra niðurlagið.»', translation: '«Cem?! Agora eu vou aprender o refrão.»', next: 'trottur' }],
      },
      syngja: {
        emoji: '🎤',
        text: 'Linu kann ikki orðini, men hann syngur við kortini: «La-la-la!» Fólk flenna, men tey eru ikki ill.',
        translation: 'O Linu não sabe a letra, mas canta junto mesmo assim: «Lá-lá-lá!» O pessoal ri, mas ninguém fica bravo.',
        choices: [{ text: 'Linu dansar og syngur víðari.', translation: 'O Linu continua dançando e cantando.', next: 'trottur' }],
      },
      trottur: {
        emoji: '😮‍💨',
        text: 'Eftir ein tíma er Linu trøttur. «Eg má hvíla meg,» sigur hann. «Tú mást ikki sleppa ringinum nú!» sigur Turið. «Kvæðið er næstan liðugt.»',
        translation: 'Depois de uma hora, o Linu está cansado. «Preciso descansar», diz ele. «Você não pode largar a roda agora!», diz a Turið. «A balada já está quase no fim.»',
        choices: [
          { text: 'Linu dansar víðari.', translation: 'O Linu continua dançando.', next: 'final_bom' },
          { text: 'Linu fer út eina løtu.', translation: 'O Linu sai um pouquinho.', next: 'uti' },
        ],
      },
      uti: {
        emoji: '🌅',
        text: 'Úti er næstan ljóst, hóast klokkan er tólv um náttina. Við bygdina stendur Enniberg, eitt risastórt fuglaberg.',
        translation: 'Lá fora está quase claro, mesmo sendo meia-noite. Perto da vila fica o Enniberg, um paredão enorme cheio de pássaros.',
        choices: [
          { text: 'Linu fer aftur inn og dansar.', translation: 'O Linu volta para dentro e dança.', next: 'final_bom' },
          { text: 'Linu setur seg og hyggur út á havið.', translation: 'O Linu se senta e olha o mar.', next: 'final_uti' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Seint um náttina er kvæðið liðugt. «Tú dansar sum ein føroyingur!» sigur Turið. Í morgin fer Linu at dansa aftur.',
        translation: 'Tarde da noite, a balada termina. «Você dança como um feroês!», diz a Turið. Amanhã o Linu vai dançar de novo.',
        ending: { tone: 'bom', title: 'Um feroês na roda', message: 'Dois passos para a esquerda, um para a direita: o Linu dançou a balada inteira até o fim.' },
      },
      final_uti: {
        emoji: '🌊',
        text: 'Linu situr einsamallur úti og hoyrir sangin gjøgnum vindeygað. Tað er vakurt, men dansurin fer fram uttan hann.',
        translation: 'O Linu fica sentado sozinho lá fora, ouvindo a cantoria pela janela. É bonito, mas a dança continua sem ele.',
        ending: { tone: 'neutro', title: 'A roda sem o Linu', message: 'A noite clara de verão é linda, mas a Turið tinha avisado: «Kvæðið er næstan liðugt». Faltava pouco!' },
      },
    },
  },
  {
    id: 'fo-h15',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Risin og Kellingin',
    emoji: '🏄',
    summary: 'Em Tjørnuvík, o Linu tenta surfar pela primeira vez e ouve a lenda das duas rochas que saem do mar.',
    cultural_context:
      'Tjørnuvík, no norte de Streymoy, tem uma praia de areia escura procurada por surfistas. Dali se veem Risin og Kellingin, «o Gigante e a Bruxa», duas rochas no mar junto a Eysturoy: pela lenda, eram dois gigantes da Islândia que tentaram arrastar as Faroé para lá e viraram pedra quando o sol nasceu.',
    start: 'start',
    glossary: [
      ['Eg kann læra teg.', 'Eu posso te ensinar.'],
      ['Fyrst mást tú…', 'Primeiro você tem que…'],
      ['Legg teg! / Ró!', 'Deite-se! / Reme!'],
      ['skalt tú standa upp', 'você deve ficar de pé'],
      ['Hvíl teg!', 'Descanse!'],
      ['eg fari at vísa tær', 'eu vou te mostrar (futuro com «fara at»)'],
      ['brettið', 'a prancha'],
      ['ein alda / aldur', 'uma onda / ondas'],
    ],
    nodes: {
      start: {
        emoji: '🌊',
        text: 'Linu er í Tjørnuvík, norðuri á Streymoy. Í víkini eru stórar aldur, og nøkur ung fólk surfa. Ein ungur maður, Ári, spyr: «Vilt tú royna? Eg kann læra teg.»',
        translation: 'O Linu está em Tjørnuvík, no norte de Streymoy. Na baía há ondas grandes, e alguns jovens estão surfando. Um rapaz, o Ári, pergunta: «Quer tentar? Eu posso te ensinar.»',
        choices: [
          { text: '«Ja! Hvat skal eg gera?»', translation: '«Quero! O que eu tenho que fazer?»', next: 'fyrst' },
          { text: '«Nei takk. Eg vil heldur síggja Risan og Kellingina.»', translation: '«Não, obrigado. Prefiro ver o Gigante e a Bruxa.»', next: 'legend' },
        ],
      },
      fyrst: {
        emoji: '🏄',
        text: '«Fyrst mást tú læra at liggja á brettinum,» sigur Ári. «Legg teg á magan og ró við hondunum!»',
        translation: '«Primeiro você tem que aprender a ficar deitado na prancha», diz o Ári. «Deite-se de barriga e reme com as mãos!»',
        choices: [
          { text: 'Linu leggur seg á brettið og rør við hondunum.', translation: 'O Linu se deita na prancha e rema com as mãos.', next: 'alda' },
          {
            text: 'Linu stendur beinanvegin upp á brettið.',
            translation: 'O Linu fica de pé na prancha na mesma hora.',
            wrong: 'O Ári disse «Fyrst mást tú læra at liggja»: PRIMEIRO é preciso aprender a ficar DEITADO («Legg teg á magan», deite-se de barriga). Ficar de pé vem depois!',
          },
        ],
      },
      alda: {
        emoji: '🌊',
        text: '«Nú kemur ein stór alda! Tá ið eg rópi, skalt tú standa upp. Klárur? NÚ!»',
        translation: '«Agora vem uma onda grande! Quando eu gritar, você tem que ficar de pé. Pronto? AGORA!»',
        choices: [
          { text: 'Linu stendur upp… og dettur beint í sjógvin.', translation: 'O Linu fica de pé… e cai direto no mar.', next: 'datt' },
          { text: 'Linu er bangin og verður liggjandi á brettinum.', translation: 'O Linu fica com medo e continua deitado na prancha.', next: 'ligg' },
        ],
      },
      datt: {
        emoji: '💦',
        text: 'Linu kemur upp úr sjónum og flennir. «Hetta skal eg royna aftur!» «Gott!» sigur Ári. «Men nú mást tú hvíla teg. Hygg út á havið: har standa Risin og Kellingin.»',
        translation: 'O Linu sai do mar rindo. «Isso eu vou tentar de novo!» «Muito bem!», diz o Ári. «Mas agora você tem que descansar. Olhe o mar: lá estão o Gigante e a Bruxa.»',
        choices: [{ text: '«Hvørji eru tey?»', translation: '«Quem são eles?»', next: 'legend' }],
      },
      ligg: {
        emoji: '🏖️',
        text: 'Aldan ber Linu alla leið inn á sandin. «Tað var eisini surf!» sigur Ári og flennir. «Hvíl teg nú og hygg út á havið: har standa Risin og Kellingin.»',
        translation: 'A onda leva o Linu até a areia. «Isso também foi surfe!», diz o Ári, rindo. «Agora descanse e olhe o mar: lá estão o Gigante e a Bruxa.»',
        choices: [{ text: '«Hvørji eru tey?»', translation: '«Quem são eles?»', next: 'legend' }],
      },
      legend: {
        emoji: '🪨',
        text: 'Úti í havinum standa tveir høgir klettar. «Tey komu úr Íslandi og vildu draga Føroyar norður til Íslands,» sigur Ári. «Risin stóð í sjónum, og Kellingin stóð uppi á fjallinum og bant eitt reip um oynna.»',
        translation: 'Lá no mar há duas rochas altas. «Eles vieram da Islândia e queriam arrastar as Faroé para o norte, até a Islândia», diz o Ári. «O Gigante ficou dentro do mar, e a Bruxa subiu na montanha e amarrou uma corda em volta da ilha.»',
        choices: [{ text: '«Og hvat hendi so?»', translation: '«E o que aconteceu depois?»', next: 'sol' }],
      },
      sol: {
        emoji: '🌄',
        text: '«Tey drógu alla náttina, men oyggin flutti seg ikki. Um morgunin kom sólin upp, og tá vórðu tey at steini.»',
        translation: '«Eles puxaram a noite inteira, mas a ilha não saiu do lugar. De manhã o sol nasceu, e aí eles viraram pedra.»',
        choices: [
          { text: '«So standa tey her enn í dag!»', translation: '«Então eles estão aqui até hoje!»', next: 'ari' },
          {
            text: '«So fóru tey heim aftur til Íslands?»',
            translation: '«Então eles voltaram para a Islândia?»',
            wrong: 'O Ári contou que, quando o sol nasceu, «vórðu tey at steini»: eles viraram PEDRA. Por isso ainda estão ali, no mar, e nunca voltaram para casa.',
          },
        ],
      },
      ari: {
        emoji: '⏰',
        text: '«Rætt!» sigur Ári. «Í morgin fari eg at vísa tær, hvussu tú kanst standa á brettinum. Kom klokkan níggju!»',
        translation: '«Isso!», diz o Ári. «Amanhã eu vou te mostrar como você consegue ficar de pé na prancha. Venha às nove!»',
        choices: [
          { text: '«Eg skal koma!»', translation: '«Eu vou vir!»', next: 'final_bom' },
          { text: '«Í morgin kann eg ikki. Eg fari aftur til Havnar.»', translation: '«Amanhã eu não posso. Vou voltar para Tórshavn.»', next: 'final_farvael' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Dagin eftir stendur Linu á brettinum í heilar fimm sekundir. Úti í havinum hyggja Risin og Kellingin at honum.',
        translation: 'No dia seguinte, o Linu fica de pé na prancha por cinco segundos inteiros. Lá no mar, o Gigante e a Bruxa olham para ele.',
        ending: { tone: 'bom', title: 'Surfista de Tjørnuvík', message: 'O Linu seguiu as instruções do Ári, ouviu a lenda e voltou para ficar de pé na prancha.' },
      },
      final_farvael: {
        emoji: '🚌',
        text: 'Linu fer aftur til Havnar. Í bussinum hugsar hann: «Næsta summar skal eg royna aftur!»',
        translation: 'O Linu volta para Tórshavn. No ônibus, ele pensa: «No verão que vem eu vou tentar de novo!»',
        ending: { tone: 'neutro', title: 'Fica para o próximo verão', message: 'A aula de amanhã ficou para depois. As ondas de Tjørnuvík (e as duas rochas) vão continuar lá esperando.' },
      },
    },
  },
  // ───────────────────────── B1.2 ─────────────────────────
  {
    id: 'fo-h16',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Mjørki í Gjógv',
    emoji: '🌫️',
    summary: 'Em Gjógv, no norte de Eysturoy, o Linu quer descer até o porto escondido na garganta antes que a neblina chegue.',
    cultural_context:
      'Gjógv é uma aldeia no norte de Eysturoy que tem o nome de uma garganta natural («gjógv») de uns 200 metros, que corre da aldeia até o mar e serve de porto. Como o mar ali raramente é calmo, os barcos ficam em terra.',
    start: 'start',
    glossary: [
      ['gjógv', 'garganta, fenda no rochedo (e o nome da aldeia)'],
      ['mjørki', 'neblina, cerração'],
      ['til Gjógvar', 'para Gjógv (depois de «til» vem o genitivo: Gjógv → Gjógvar)'],
      ['at … ikki', 'que … não (na subordinada, o «ikki» costuma vir ANTES do verbo)'],
      ['áðrenn', 'antes que'],
      ['tí at', 'porque'],
      ['tá ið', 'quando'],
      ['gistingarhús', 'pousada, casa de hóspedes'],
    ],
    nodes: {
      start: {
        emoji: '🚌',
        text: 'Linu kom til Gjógvar við bussinum ein morgun í juli. Marjun, sum eigur gistingarhúsið, segði, at hann átti at ganga niður á havnina, áðrenn mjørkin kom. Hon helt, at góða veðrið ikki fór at vara allan dagin.',
        translation: 'O Linu chegou a Gjógv de ônibus numa manhã de julho. A Marjun, que é dona da pousada, disse que ele devia descer até o porto antes que a neblina chegasse. Ela achava que o tempo bom não ia durar o dia todo.',
        choices: [
          { text: 'Linu fór beinanvegin niður á havnina.', translation: 'O Linu desceu logo até o porto.', next: 'havnin' },
          { text: 'Linu spurdi, hví havnin er so serlig.', translation: 'O Linu perguntou por que o porto é tão especial.', next: 'serlig' },
          {
            text: 'Linu settist at drekka kaffi, tí at Marjun hevði sagt, at mjørkin ikki kom fyrr enn í kvøld.',
            translation: 'O Linu sentou para tomar café, porque a Marjun tinha dito que a neblina só chegaria à noite.',
            wrong: 'A Marjun disse o contrário: ele devia descer «áðrenn mjørkin kom», ANTES que a neblina chegasse, porque o tempo bom «ikki fór at vara», NÃO ia durar. Repare no «ikki» antes do verbo: é assim que a negação costuma aparecer na subordinada.',
          },
        ],
      },
      serlig: {
        emoji: '🪨',
        text: 'Marjun greiddi frá, at havnin liggur í eini smalari gjógv, sum gongur frá bygdini út í havið. Tað er gjógvin, sum hevur givið bygdini navn. Hon segði eisini, at hon sjálv ikki hevði verið niðri har í fleiri ár.',
        translation: 'A Marjun explicou que o porto fica numa garganta estreita que vai da aldeia até o mar. Foi a garganta que deu nome à aldeia. Ela disse também que ela mesma não descia até lá havia vários anos.',
        choices: [
          { text: 'Linu bað Marjun koma við niður.', translation: 'O Linu pediu à Marjun que descesse com ele.', next: 'saman' },
          { text: 'Linu takkaði og fór einsamallur niður.', translation: 'O Linu agradeceu e desceu sozinho.', next: 'havnin' },
        ],
      },
      saman: {
        emoji: '👵',
        text: 'Marjun tók jakkan og fylgdi við. Á vegnum vísti hon honum húsini hjá abba sínum, sum hevði verið fiskimaður í Gjógv. Tá ið tey komu niður, var mjørkin longu farin at koma inn av havinum.',
        translation: 'A Marjun pegou o casaco e foi junto. No caminho, mostrou a ele a casa do avô dela, que tinha sido pescador em Gjógv. Quando eles chegaram lá embaixo, a neblina já estava começando a entrar do mar.',
        choices: [{ text: 'Linu og Marjun vendu beinanvegin aftur.', translation: 'O Linu e a Marjun deram meia-volta na hora.', next: 'final_saman' }],
      },
      havnin: {
        emoji: '⚓',
        text: 'Niðri við havnina sá Linu, hvussu brattir hamrarnir vóru á báðum síðum. Bátarnir lógu uppi á landi, tí at sjógvurin har ikki er kyrrur. Hann tók myndir, meðan fuglarnir flugu undir honum.',
        translation: 'Lá embaixo, perto do porto, o Linu viu como os rochedos eram íngremes dos dois lados. Os barcos ficavam em terra, porque o mar ali não é calmo. Ele tirou fotos enquanto os pássaros voavam abaixo dele.',
        choices: [
          { text: 'Linu hugdi út móti havinum.', translation: 'O Linu olhou para o mar.', next: 'mjorki' },
          {
            text: 'Linu steig niður í ein bát, tí at sjógvurin var so kyrrur.',
            translation: 'O Linu desceu num barco, porque o mar estava tão calmo.',
            wrong: 'O texto diz que os barcos ficam em terra «tí at sjógvurin har ikki er kyrrur»: porque o mar ali NÃO é calmo. O «ikki» antes de «er» nega a subordinada inteira.',
          },
        ],
      },
      mjorki: {
        emoji: '🌫️',
        text: 'Alt í einum kom mjørkin. Linu sá næstan ikki ein metur fram um seg. Hann mintist tað, sum Marjun hevði sagt: at vegurin upp aftur í bygdina er brattur og hálur, tá ið alt er vátt.',
        translation: 'De repente, a neblina chegou. O Linu quase não enxergava um metro à frente. Ele se lembrou do que a Marjun tinha dito: que o caminho de volta para a aldeia é íngreme e escorregadio quando tudo está molhado.',
        choices: [
          { text: 'Linu gekk spakuliga upp aftur, stig fyri stig.', translation: 'O Linu subiu de volta devagar, passo a passo.', next: 'final_bom' },
          { text: 'Linu varð verandi niðri við havnina, til mjørkin fór.', translation: 'O Linu ficou lá embaixo, no porto, até a neblina ir embora.', next: 'final_bida' },
        ],
      },
      final_bom: {
        emoji: '🏡',
        text: 'Tað tók langa tíð, men Linu kom upp aftur uttan at detta. Marjun stóð í durunum og hugdi eftir honum. Hon segði, at hann var klókur, sum ikki hevði skundað sær.',
        translation: 'Demorou, mas o Linu voltou lá para cima sem cair. A Marjun estava na porta, de olho no caminho. Ela disse que ele tinha sido esperto por não ter se apressado.',
        ending: { tone: 'bom', title: 'Passo a passo', message: 'O Linu viu o porto da garganta e voltou são e salvo, sem pressa, pela neblina.' },
      },
      final_saman: {
        emoji: '☕',
        text: 'Marjun kendi vegin so væl, at tey komu trygt upp aftur, hóast tey næstan einki sóu. Í gistingarhúsinum fingu tey heitt te. Marjun segði, at tað var fyrsta ferð í fleiri ár, at hon hevði verið niðri við havnina.',
        translation: 'A Marjun conhecia o caminho tão bem que eles voltaram em segurança, embora quase não enxergassem nada. Na pousada, tomaram chá quente. A Marjun disse que era a primeira vez em vários anos que ela descia até o porto.',
        ending: { tone: 'bom', title: 'Com quem conhece o caminho', message: 'O Linu não viu muito do porto, mas ganhou uma boa companhia e a Marjun reencontrou um lugar da infância.' },
      },
      final_bida: {
        emoji: '🛏️',
        text: 'Linu varð verandi niðri við havnina í tveir tímar. Tá ið mjørkin endiliga fór, var bussurin, sum hann skuldi við, longu farin. Hann mátti sova eina nátt afturat í Gjógv.',
        translation: 'O Linu ficou lá embaixo no porto por duas horas. Quando a neblina finalmente foi embora, o ônibus que ele ia pegar já tinha partido. Ele teve que dormir mais uma noite em Gjógv.',
        ending: { tone: 'neutro', title: 'Mais uma noite em Gjógv', message: 'A neblina passou, mas o ônibus também. Pelo menos a pousada da Marjun tinha quarto livre!' },
      },
    },
  },
  {
    id: 'fo-h17',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Søgnin um risan',
    emoji: '🗿',
    summary: 'Na praia de areia preta de Tjørnuvík, um menino conta ao Linu por que dois rochedos no mar se chamam «o gigante e a velha».',
    cultural_context:
      'De Tjørnuvík, no norte de Streymoy, veem-se no mar os rochedos Risin og Kellingin, «o gigante e a velha». Diz a lenda que dois trolls islandeses tentaram arrastar as Faroé para a Islândia amarrando uma corda no monte Eiðiskollur, mas o sol nasceu e os transformou em pedra.',
    start: 'start',
    glossary: [
      ['risi / kelling', 'gigante / velha, bruxa'],
      ['til Íslands', 'para a Islândia (genitivo depois de «til»)'],
      ['til Havnar', 'para Tórshavn (Havn, no genitivo)'],
      ['søgan sigur, at…', 'a lenda diz que…'],
      ['trøll', 'troll(s)'],
      ['fyrr enn', 'antes que; «ikki… fyrr enn» = só quando'],
      ['sólarljósið', 'a luz do sol'],
      ['klettur', 'rochedo'],
    ],
    nodes: {
      start: {
        emoji: '🏖️',
        text: 'Linu kom til Tjørnuvíkar ein summarmorgun. Sandurin á strondini var svartur, og aldurnar vóru stórar. Úti í havinum stóðu tveir høgir klettar, sum hann ikki visti nakað um.',
        translation: 'O Linu chegou a Tjørnuvík numa manhã de verão. A areia da praia era preta, e as ondas eram grandes. Lá no mar havia dois rochedos altos sobre os quais ele não sabia nada.',
        choices: [
          { text: 'Linu spurdi ein drong, sum sat á strondini.', translation: 'O Linu perguntou a um menino que estava sentado na praia.', next: 'drongurin' },
          { text: 'Linu fór út í sjógvin at svimja.', translation: 'O Linu entrou no mar para nadar.', next: 'svimja' },
        ],
      },
      drongurin: {
        emoji: '👦',
        text: 'Drongurin æt Rói, og hann segði, at klettarnir eita Risin og Kellingin. Hann greiddi frá, at abbi hansara hevði sagt honum søguna, tá ið hann var lítil. Men hann vildi ikki siga hana, fyrr enn Linu hevði keypt honum ein ís.',
        translation: 'O menino se chamava Rói, e ele disse que os rochedos se chamam Risin og Kellingin. Ele contou que o avô dele tinha lhe contado a história quando ele era pequeno. Mas ele não queria contá-la enquanto o Linu não lhe comprasse um sorvete.',
        choices: [
          { text: 'Linu keypti ein ís til Róa.', translation: 'O Linu comprou um sorvete para o Rói.', next: 'isur' },
          {
            text: 'Linu bað Róa siga søguna beinanvegin, tí at hann hevði longu fingið ísin.',
            translation: 'O Linu pediu ao Rói que contasse a história logo, porque ele já tinha ganhado o sorvete.',
            wrong: 'O Rói disse que só contaria «fyrr enn Linu hevði keypt honum ein ís»: com «ikki… fyrr enn», ele NÃO conta ANTES de ganhar o sorvete. O Linu ainda não tinha comprado nada!',
          },
        ],
      },
      isur: {
        emoji: '🍦',
        text: 'Rói át ísin so skjótt, at Linu næstan ikki sá tað. Síðan setti hann seg beint og byrjaði at greiða frá, sum abbi hansara plagdi at gera.',
        translation: 'O Rói comeu o sorvete tão rápido que o Linu quase não viu. Depois ele se sentou direito e começou a contar, como o avô dele costumava fazer.',
        choices: [{ text: 'Linu lurtaði.', translation: 'O Linu escutou.', next: 'soga' }],
      },
      svimja: {
        emoji: '🥶',
        text: 'Sjógvurin var so kaldur, at Linu fór beinanvegin upp aftur. Ein gomul kona, sum stóð á strondini, flenti og segði, at eingin, sum ikki er føddur í Føroyum, svimur her í juli. Síðan vísti hon út á klettarnar og spurdi, um hann kendi søguna.',
        translation: 'O mar estava tão frio que o Linu saiu na mesma hora. Uma senhora que estava na praia riu e disse que ninguém que não tenha nascido nas Faroé nada ali em julho. Depois ela apontou para os rochedos e perguntou se ele conhecia a história.',
        choices: [{ text: 'Linu segði, at hann ikki kendi hana.', translation: 'O Linu disse que não conhecia.', next: 'soga' }],
      },
      soga: {
        emoji: '🧌',
        text: 'Søgan sigur, at ein risi og ein kelling úr Íslandi vildu draga Føroyar við sær til Íslands. Kellingin fór upp á Eiðiskoll at binda eitt reip um fjallið, meðan risin stóð úti í sjónum og skuldi draga. Men tey gloymdu, at trøll ikki tola sólarljósið.',
        translation: 'A lenda diz que um gigante e uma velha da Islândia queriam arrastar as Faroé com eles até a Islândia. A velha subiu no Eiðiskollur para amarrar uma corda em volta do monte, enquanto o gigante ficava no mar para puxar. Mas eles esqueceram que trolls não suportam a luz do sol.',
        choices: [
          { text: 'Linu spurdi, hvat so hendi.', translation: 'O Linu perguntou o que aconteceu então.', next: 'steinar' },
          {
            text: '«So fingu tey Føroyar við sær til Íslands!»',
            translation: '«Então eles levaram as Faroé para a Islândia!»',
            wrong: 'A frase «tey gloymdu, at trøll ikki tola sólarljósið» (eles esqueceram que trolls NÃO suportam a luz do sol) já avisa que o sol vai atrapalhar. E as Faroé, como se vê, continuam no lugar!',
          },
        ],
      },
      steinar: {
        emoji: '🌅',
        text: 'Tá ið sólin kom upp, vórðu bæði til stein. Tí standa tey enn úti við Eiðiskoll og hyggja móti Íslandi. Linu helt, at hetta var tann besta søgan, sum hann hevði hoyrt í Føroyum.',
        translation: 'Quando o sol nasceu, os dois viraram pedra. Por isso eles continuam lá, perto do Eiðiskollur, olhando para a Islândia. O Linu achou que era a melhor história que tinha ouvido nas Faroé.',
        choices: [
          { text: 'Linu setti seg í sandin at hyggja eftir klettunum.', translation: 'O Linu sentou na areia para olhar os rochedos.', next: 'final_bom' },
          { text: 'Linu skundaði sær til bussin, tí at hann skuldi aftur til Havnar.', translation: 'O Linu correu para o ônibus, porque tinha que voltar para Tórshavn.', next: 'final_bussur' },
        ],
      },
      final_bom: {
        emoji: '☀️',
        text: 'Linu sat í sandinum og hugdi eftir klettunum, meðan sólin skein á tey. Hann hugsaði um trøllini, sum ikki náddu heim til Íslands. Tað var ein av teimum bestu døgunum í allari ferðini.',
        translation: 'O Linu ficou sentado na areia olhando os rochedos enquanto o sol brilhava sobre eles. Ele pensou nos trolls que não conseguiram voltar para casa na Islândia. Foi um dos melhores dias da viagem inteira.',
        ending: { tone: 'bom', title: 'Pedra ao sol', message: 'O Linu conheceu a lenda mais famosa do norte de Streymoy e viu os trolls de pedra com calma.' },
      },
      final_bussur: {
        emoji: '🚌',
        text: 'Linu náddi bussin, men alla leiðina hugsaði hann um klettarnar. Tá ið hann kom til Havnar, sá hann, at hann ikki hevði tikið eina einastu mynd av teimum.',
        translation: 'O Linu pegou o ônibus, mas passou o caminho todo pensando nos rochedos. Quando chegou a Tórshavn, percebeu que não tinha tirado uma única foto deles.',
        ending: { tone: 'neutro', title: 'Sem foto', message: 'A história ficou na memória, mas o gigante e a velha não apareceram em nenhuma foto. Fica para a próxima!' },
      },
    },
  },
  {
    id: 'fo-h18',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Til vitan á Nólsoy',
    emoji: '🗼',
    summary: 'O Linu pega a balsa para Nólsoy, a ilha em frente a Tórshavn, e precisa decidir entre caminhar até o farol e ouvir uma balada.',
    cultural_context:
      'Nólsoy fica bem em frente a Tórshavn, a uns vinte minutos de balsa. Dali vinha Nólsoyar Páll (1766–1809), navegador e poeta que escreveu a balada satírica «Fuglakvæðið» e é lembrado como herói nacional.',
    start: 'start',
    glossary: [
      ['vitin', 'o farol'],
      ['til Nólsoyar / til Havnar', 'para Nólsoy / para Tórshavn (genitivo depois de «til»)'],
      ['Nólsoyar Páll', 'Páll de Nólsoy (o nome da ilha no genitivo, como sobrenome)'],
      ['seinasta ferjan', 'a última balsa'],
      ['um … ikki', 'se … não'],
      ['ørindi', 'estrofe'],
      ['kvæði', 'balada'],
      ['hóast', 'embora'],
    ],
    nodes: {
      start: {
        emoji: '⛴️',
        text: 'Linu tók ferjuna úr Havn til Nólsoyar. Á ferjuni hitti hann Sunnvá, sum býr í Nólsoy og arbeiðir í Havn. Hon spurdi, hvat hann ætlaði sær at gera á oynni.',
        translation: 'O Linu pegou a balsa de Tórshavn para Nólsoy. Na balsa ele conheceu a Sunnvá, que mora em Nólsoy e trabalha em Tórshavn. Ela perguntou o que ele pretendia fazer na ilha.',
        choices: [
          { text: 'Linu segði, at hann vildi ganga til vitan.', translation: 'O Linu disse que queria ir a pé até o farol.', next: 'vitin' },
          { text: 'Linu segði, at hann ikki visti tað enn.', translation: 'O Linu disse que ainda não sabia.', next: 'bygdin' },
        ],
      },
      vitin: {
        emoji: '🧭',
        text: 'Sunnvá segði, at túrurin til vitan á Borðan tekur fleiri tímar. Hon segði, at hann skuldi fara beinanvegin, tí at seinasta ferjan aftur til Havnar fer klokkan sjey. Um hann ikki náddi hana, mátti hann sova í Nólsoy.',
        translation: 'A Sunnvá disse que a caminhada até o farol de Borðan leva várias horas. Ela disse que ele devia sair logo, porque a última balsa de volta para Tórshavn sai às sete. Se ele não a pegasse, teria que dormir em Nólsoy.',
        choices: [
          { text: 'Linu gekk beinanvegin suður eftir oynni.', translation: 'O Linu foi logo para o sul da ilha.', next: 'sudur' },
          {
            text: 'Linu settist at hvíla, tí at ferjan fór ikki fyrr enn um kvøldið.',
            translation: 'O Linu sentou para descansar, porque a balsa só sairia à noite.',
            wrong: 'A Sunnvá disse que a caminhada leva «fleiri tímar» (várias horas) e que ele devia sair «beinanvegin» (logo). Se ele não pegasse a balsa das sete — «um hann ikki náddi hana» —, teria de dormir na ilha.',
          },
        ],
      },
      bygdin: {
        emoji: '🏘️',
        text: 'Sunnvá vísti honum bygdina. Hon segði, at Nólsoyar Páll, sum skrivaði Fuglakvæðið, var úr Nólsoy. Linu hevði ongantíð hoyrt um hann, men hann vildi fegin vita meira.',
        translation: 'A Sunnvá mostrou a aldeia para ele. Ela disse que Nólsoyar Páll, que escreveu o «Fuglakvæðið», era de Nólsoy. O Linu nunca tinha ouvido falar dele, mas queria muito saber mais.',
        choices: [
          { text: 'Linu bað hana syngja eitt ørindi úr kvæðinum.', translation: 'O Linu pediu que ela cantasse uma estrofe da balada.', next: 'kvaedi' },
          { text: 'Linu spurdi, hvar vitin er.', translation: 'O Linu perguntou onde fica o farol.', next: 'vitin' },
        ],
      },
      kvaedi: {
        emoji: '🎶',
        text: 'Sunnvá flenti og segði, at hon ikki kundi syngja væl. Kortini sang hon eitt ørindi, og nøkur fólk á kaiini sungu við. Linu skildi ikki øll orðini, men hann skildi, at kvæðið var um fuglar.',
        translation: 'A Sunnvá riu e disse que não cantava bem. Mesmo assim ela cantou uma estrofe, e algumas pessoas no cais cantaram junto. O Linu não entendeu todas as palavras, mas entendeu que a balada era sobre pássaros.',
        choices: [
          { text: 'Linu varð verandi á kaiini og lurtaði.', translation: 'O Linu ficou no cais escutando.', next: 'final_sangur' },
          { text: 'Linu spurdi síðan, hvar vitin er.', translation: 'Depois o Linu perguntou onde fica o farol.', next: 'vitin' },
        ],
      },
      sudur: {
        emoji: '🐑',
        text: 'Vegurin suður eftir oynni var longri, enn Linu hevði hildið. Seyðir stóðu allastaðni og hugdu at honum. Tá ið hann endiliga sá vitan, var klokkan longu fimm.',
        translation: 'O caminho para o sul da ilha era mais longo do que o Linu tinha pensado. Havia ovelhas por toda parte olhando para ele. Quando ele finalmente avistou o farol, já eram cinco horas.',
        choices: [
          { text: 'Linu vendi beinanvegin aftur.', translation: 'O Linu deu meia-volta na hora.', next: 'final_bom' },
          { text: 'Linu gekk heilt fram at vitanum, hóast tíðin var knøpp.', translation: 'O Linu foi até o farol, embora o tempo estivesse apertado.', next: 'final_seint' },
        ],
      },
      final_bom: {
        emoji: '⛴️',
        text: 'Linu náddi ferjuna klokkan fimm minuttir í sjey. Sunnvá stóð á kaiini og flenti, tá ið hon sá, hvussu móður hann var. Hann hevði sæð vitan, og hann var komin aftur í tíð.',
        translation: 'O Linu pegou a balsa às cinco para as sete. A Sunnvá estava no cais e riu quando viu como ele estava cansado. Ele tinha visto o farol e tinha voltado a tempo.',
        ending: { tone: 'bom', title: 'Por cinco minutos', message: 'O Linu viu o farol de longe e ainda pegou a última balsa para Tórshavn.' },
      },
      final_seint: {
        emoji: '🌙',
        text: 'Tá ið Linu kom aftur til bygdina, sá hann ferjuna sigla móti Havn uttan hann. Sunnvá segði, at hann kundi sova hjá mammu hennara.',
        translation: 'Quando o Linu voltou à aldeia, viu a balsa navegando para Tórshavn sem ele. A Sunnvá disse que ele podia dormir na casa da mãe dela.',
        ending: { tone: 'neutro', title: 'Noite em Nólsoy', message: 'O farol valeu a pena, mas a balsa não esperou. Ainda bem que em Nólsoy todo mundo conhece todo mundo.' },
      },
      final_sangur: {
        emoji: '🐦',
        text: 'Linu sat á kaiini, til sólin fór at síga. Fólkini sungu eitt kvæði eftir annað, og tey lærdu hann eitt ørindi. Vitan sá hann ikki, men hann fór aftur til Havnar við einum kvæði í høvdinum.',
        translation: 'O Linu ficou no cais até o sol começar a baixar. As pessoas cantaram uma balada atrás da outra e lhe ensinaram uma estrofe. O farol ele não viu, mas voltou para Tórshavn com uma balada na cabeça.',
        ending: { tone: 'bom', title: 'Uma balada na cabeça', message: 'Em vez do farol, o Linu conheceu Nólsoyar Páll e as baladas que as Faroé cantam há séculos.' },
      },
    },
  },
  // ───────────────────────── B1.3 ─────────────────────────
  {
    id: 'fo-h19',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Lundarnir í Mykinesi',
    emoji: '🐧',
    summary: 'O Linu quer ver os papagaios-do-mar de Mykines, mas o barco não sai com mar bravo, e na ilha é preciso cuidado onde se pisa.',
    cultural_context:
      'Mykines, a ilha mais ocidental das Faroé, recebe milhares de papagaios-do-mar (lundar) da primavera ao fim do verão; eles fazem ninho em tocas no chão. O barco sai de Sørvágur, em Vágar, e muitas vezes não navega quando o mar está bravo.',
    start: 'start',
    glossary: [
      ['lundi (pl. lundar)', 'papagaio-do-mar'],
      ['Í dag verður ikki siglt.', 'Hoje não se navega. (passiva com «verða» + particípio)'],
      ['kennast', 'parecer, sentir-se (voz média em -st)'],
      ['síggjast', 'ser visto, aparecer (voz média)'],
      ['mintist', 'lembrou-se (passado de «minnast»)'],
      ['glett seg til', 'esperar ansiosamente por (particípio de «gleða seg»)'],
      ['oyðilagdur', 'destruído (particípio)'],
      ['brimið', 'a arrebentação, o mar batendo'],
    ],
    nodes: {
      start: {
        emoji: '⚓',
        text: 'Linu stóð á kaiini í Sørvági klokkan átta um morgunin. Hann hevði glett seg til at síggja lundarnar í Mykinesi í fleiri vikur. Men á kaiini hekk ein seðil, har tað stóð: «Í dag verður ikki siglt orsakað av veðrinum.»',
        translation: 'O Linu estava no cais de Sørvágur às oito da manhã. Fazia semanas que ele esperava ansioso para ver os papagaios-do-mar em Mykines. Mas no cais havia um aviso que dizia: «Hoje não haverá travessia por causa do tempo.»',
        choices: [
          { text: 'Linu spurdi skiparan, hvussu tað sær út í morgin.', translation: 'O Linu perguntou ao capitão como estaria o tempo amanhã.', next: 'skiparin' },
          { text: 'Linu fór aftur til Havnar og gavst.', translation: 'O Linu voltou para Tórshavn e desistiu.', next: 'final_gavst' },
          {
            text: 'Linu fór umborð, tí at báturin skuldi fara klokkan níggju.',
            translation: 'O Linu embarcou, porque o barco ia sair às nove.',
            wrong: 'O aviso diz «Í dag verður ikki siglt»: hoje NÃO se navega. É uma passiva impessoal com «verða» + particípio («siglt», navegado). Não tem barco hoje!',
          },
        ],
      },
      skiparin: {
        emoji: '🌊',
        text: 'Skiparin segði, at brimið er ov stórt við lendingina í Mykinesi. «Tað kennist ikki so illa her,» segði hann, «men har úti er alt annað.» Hann helt, at veðrið fór at batna í morgin.',
        translation: 'O capitão disse que a arrebentação está forte demais no desembarque de Mykines. «Aqui não parece tão ruim», disse ele, «mas lá fora é outra coisa.» Ele achava que o tempo ia melhorar no dia seguinte.',
        choices: [{ text: 'Linu leigaði sær eitt kamar í Sørvági.', translation: 'O Linu alugou um quarto em Sørvágur.', next: 'natt' }],
      },
      natt: {
        emoji: '🪟',
        text: 'Um kvøldið settist Linu við vindeygað og hugdi út á sjógvin. Hann vónaði, at vindurin fór at leggjast um náttina. Tá ið hann fór at sova, var havið longu kyrrari.',
        translation: 'À noite, o Linu se sentou perto da janela e ficou olhando o mar. Ele esperava que o vento se acalmasse durante a noite. Quando foi dormir, o mar já estava mais calmo.',
        choices: [{ text: 'Linu vaknaði tíðliga næsta morgun.', translation: 'O Linu acordou cedo na manhã seguinte.', next: 'morgin' }],
      },
      morgin: {
        emoji: '⛵',
        text: 'Næsta morgun sigldi báturin. Tá ið Linu var komin á land í Mykinesi, gekk hann beint upp eftir brekkuni. Har síggjast lundarnir, sum sita uttanfyri holurnar hjá sær.',
        translation: 'Na manhã seguinte o barco saiu. Quando desembarcou em Mykines, o Linu subiu direto a encosta. Lá se veem os papagaios-do-mar, sentados do lado de fora das tocas deles.',
        choices: [
          { text: 'Linu gekk varliga eftir gøtuni, sum er merkt.', translation: 'O Linu andou com cuidado pela trilha, que é sinalizada.', next: 'lundar' },
          { text: 'Linu fór út av gøtuni at koma nærri lundunum.', translation: 'O Linu saiu da trilha para chegar mais perto dos papagaios-do-mar.', next: 'uttanfyri' },
        ],
      },
      uttanfyri: {
        emoji: '⚠️',
        text: 'Ein maður úr bygdini kallaði á hann og segði, at jørðin her er full av holum, sum lundarnir búgva í. «Um tú gongur her, verða holurnar oyðilagdar,» segði hann. Linu skammaðist.',
        translation: 'Um homem da aldeia o chamou e disse que o chão ali está cheio de tocas onde os papagaios-do-mar moram. «Se você andar por aqui, as tocas serão destruídas», disse ele. O Linu ficou envergonhado.',
        choices: [
          { text: 'Linu bað um umbering og fór aftur á gøtuna.', translation: 'O Linu pediu desculpas e voltou para a trilha.', next: 'lundar' },
          {
            text: 'Linu helt fram, tí at maðurin segði, at holurnar vóru tómar.',
            translation: 'O Linu seguiu em frente, porque o homem disse que as tocas estavam vazias.',
            wrong: 'O homem não disse isso: ele disse que os papagaios-do-mar moram nas tocas e que, «um tú gongur her», elas «verða oyðilagdar», SERÃO DESTRUÍDAS (passiva com «verða» + particípio).',
          },
        ],
      },
      lundar: {
        emoji: '🐟',
        text: 'Lundarnir vóru als ikki bangnir. Summir flugu inn við smáfiski í nevinum, og aðrir stóðu bara og hugdu. Linu var so glaður, at hann næstan gloymdi at taka myndir.',
        translation: 'Os papagaios-do-mar não tinham medo nenhum. Alguns chegavam voando com peixinhos no bico, e outros só ficavam parados, olhando. O Linu estava tão feliz que quase esqueceu de tirar fotos.',
        choices: [{ text: 'Linu gekk aftur til bátin um kvøldið.', translation: 'À tardinha, o Linu voltou para o barco.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🌅',
        text: 'Um kvøldið sat Linu í bátinum á veg aftur til Sørvágs. Hann mintist hvønn lunda, sum hann hevði sæð, og ætlaði at koma aftur næsta summar.',
        translation: 'À tardinha, o Linu estava sentado no barco a caminho de Sørvágur. Ele se lembrava de cada papagaio-do-mar que tinha visto e planejava voltar no verão seguinte.',
        ending: { tone: 'bom', title: 'Valeu esperar', message: 'Um dia de espera, e o Linu viu os papagaios-do-mar de Mykines de pertinho, sem estragar nenhuma toca.' },
      },
      final_gavst: {
        emoji: '🚌',
        text: 'Linu fór aftur til Havnar við bussinum. Dagin eftir frætti hann, at báturin var farin út í Mykines, og at ferðafólkini høvdu sæð hundraðtals lundar.',
        translation: 'O Linu voltou para Tórshavn de ônibus. No dia seguinte, soube que o barco tinha ido a Mykines e que os turistas tinham visto centenas de papagaios-do-mar.',
        ending: { tone: 'neutro', title: 'Desistiu cedo demais', message: 'Nas Faroé, o tempo muda rápido. Às vezes, vale a pena esperar um dia.' },
      },
    },
  },
  {
    id: 'fo-h20',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Múrurin í Kirkjubø',
    emoji: '⛪',
    summary: 'Em Kirkjubøur, o Linu conhece a catedral que nunca foi terminada, a igreja mais antiga ainda em uso e uma casa de madeira muito antiga.',
    cultural_context:
      'Kirkjubøur, no sul de Streymoy, foi o centro religioso das Faroé na Idade Média, sede do bispo. Ali estão as ruínas da catedral de São Magnus, erguida por volta de 1300 e nunca terminada (o povo a chama de «Múrurin», «o muro»), e a Ólavskirkjan, a igreja mais antiga do país ainda em uso. Ao lado fica a Roykstovan, uma casa de fazenda de madeira muito antiga; a lenda diz que a madeira veio flutuando da Noruega.',
    start: 'start',
    glossary: [
      ['varð bygdur / bygd / bygt', 'foi construído / construída (passiva com «verða» + particípio)'],
      ['liðugur', 'pronto, terminado'],
      ['friðaður', 'tombado, protegido por lei (particípio)'],
      ['verður brúkt', 'é usado (passiva)'],
      ['sást / kendist', 'via-se / parecia (voz média no passado)'],
      ['torvtak', 'telhado de grama (de turfa)'],
      ['biskupur', 'bispo'],
      ['gudstænasta', 'culto, missa'],
    ],
    nodes: {
      start: {
        emoji: '🥾',
        text: 'Linu gekk til Kirkjubøar úr Havn eftir gomlu gøtuni yvir fjallið. Tá ið hann kom niður í bygdina, sá hann fyrst ein stóran múr uttan tak. Ein kona, sum æt Guðrun, stóð við hann og segði: «Hetta er Múrurin. Hann varð ongantíð liðugur.»',
        translation: 'O Linu foi a pé de Tórshavn a Kirkjubøur pela trilha antiga que cruza a montanha. Quando desceu até a aldeia, viu primeiro um grande muro sem telhado. Uma mulher chamada Guðrun estava ao lado dele e disse: «Este é o Múrurin. Ele nunca foi terminado.»',
        choices: [
          { text: 'Linu spurdi, hví hann ikki varð liðugur.', translation: 'O Linu perguntou por que ele não foi terminado.', next: 'murur' },
          { text: 'Linu spurdi um tað gamla træhúsið við torvtakinum.', translation: 'O Linu perguntou sobre a velha casa de madeira com telhado de grama.', next: 'roykstova' },
          {
            text: '«Hann er nýbygdur, er hann ikki?»',
            translation: '«Ele é recém-construído, não é?»',
            wrong: 'A Guðrun disse «Hann varð ongantíð liðugur»: ele NUNCA FOI TERMINADO («varð» + particípio/adjetivo). É uma ruína medieval, não uma obra nova.',
          },
        ],
      },
      murur: {
        emoji: '🧱',
        text: 'Guðrun greiddi frá, at kirkjan varð bygd um ár 1300, tá ið biskupurin búði í Kirkjubø. Men takið varð ongantíð lagt á. Enn í dag veit eingin við vissu, hví arbeiðið steðgaði.',
        translation: 'A Guðrun explicou que a igreja foi construída por volta de 1300, quando o bispo morava em Kirkjubøur. Mas o telhado nunca foi colocado. Até hoje ninguém sabe ao certo por que a obra parou.',
        choices: [
          { text: 'Linu spurdi, um hann mátti klatra upp á múrin.', translation: 'O Linu perguntou se podia subir no muro.', next: 'klatra' },
          { text: 'Linu vildi síggja ta gomlu kirkjuna, sum enn verður brúkt.', translation: 'O Linu quis ver a igreja antiga que ainda é usada.', next: 'olavskirkja' },
        ],
      },
      klatra: {
        emoji: '🚫',
        text: 'Guðrun rysti við høvdinum. Hon segði, at múrurin er friðaður, og at eingin má klatra upp á hann. Hann skal verjast, so at hann kann standa í mong hundrað ár afturat.',
        translation: 'A Guðrun balançou a cabeça. Ela disse que o muro é tombado e que ninguém pode subir nele. Ele precisa ser protegido, para poder ficar de pé por mais algumas centenas de anos.',
        choices: [{ text: 'Linu bað um umbering og spurdi um hina kirkjuna.', translation: 'O Linu pediu desculpas e perguntou sobre a outra igreja.', next: 'olavskirkja' }],
      },
      olavskirkja: {
        emoji: '🕯️',
        text: 'Ólavskirkjan er lítil og hvít. Guðrun segði, at hon er elsta kirkjan í Føroyum, sum enn verður brúkt til gudstænastur. Inni í kirkjuni kendist tað, sum um tíðin stóð still.',
        translation: 'A Ólavskirkjan é pequena e branca. A Guðrun disse que ela é a igreja mais antiga das Faroé que ainda é usada para missas. Lá dentro, parecia que o tempo tinha parado.',
        choices: [{ text: 'Síðan gingu tey yvir til gamla træhúsið.', translation: 'Depois eles foram até a velha casa de madeira.', next: 'roykstova' }],
      },
      roykstova: {
        emoji: '🏚️',
        text: 'Træhúsið eitur Roykstovan. Guðrun segði, at tað er eitt av elstu húsunum í Føroyum, sum fólk enn búgva í. Søgan sigur, at viðurin kom rekandi úr Noregi, longu tilhøgdur.',
        translation: 'A casa de madeira se chama Roykstovan. A Guðrun disse que ela é uma das casas mais antigas das Faroé em que ainda mora gente. A lenda diz que a madeira veio flutuando da Noruega, já cortada.',
        choices: [
          { text: 'Linu bað um loyvi at síggja inn.', translation: 'O Linu pediu licença para ver por dentro.', next: 'inni' },
          { text: 'Linu segði farvæl og fór aftur yvir fjallið.', translation: 'O Linu se despediu e voltou pela montanha.', next: 'final_fjall' },
        ],
      },
      inni: {
        emoji: '🫖',
        text: 'Inni í Roykstovuni var myrkt, og tað luktaði av royki. Tað sást, at hvør bjálki var gjørdur við hond. Guðrun gav honum ein kopp av te og eitt stykki av heimagjørdari køku.',
        translation: 'Dentro da Roykstovan estava escuro e cheirava a fumaça. Dava para ver que cada viga tinha sido feita à mão. A Guðrun lhe deu uma xícara de chá e um pedaço de bolo caseiro.',
        choices: [{ text: 'Linu takkaði fyri seg.', translation: 'O Linu agradeceu.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🌄',
        text: 'Tá ið Linu gekk heim eftir gomlu gøtuni, var sólin farin at síga. Hann hevði lært meira um føroyska søgu á einum degi enn á einum heilum ári.',
        translation: 'Quando o Linu voltou para casa pela trilha antiga, o sol já estava baixando. Ele tinha aprendido mais sobre a história das Faroé num dia do que num ano inteiro.',
        ending: { tone: 'bom', title: 'Mil anos numa tarde', message: 'Catedral inacabada, igreja medieval e uma casa de madeira lendária: o Linu viu o coração antigo das Faroé.' },
      },
      final_fjall: {
        emoji: '🌫️',
        text: 'Á vegnum yvir fjallið kom mjørki, og Linu mátti ganga spakuliga frá varða til varða. Hann kom heilur heim, men hann angraði, at hann ikki hevði sæð inn í Roykstovuna.',
        translation: 'No caminho pela montanha veio a neblina, e o Linu teve que andar devagar, de marco de pedra em marco de pedra. Ele chegou em casa inteiro, mas se arrependeu de não ter visto a Roykstovan por dentro.',
        ending: { tone: 'neutro', title: 'Só por fora', message: 'O Linu voltou em segurança, mas ficou sem conhecer o interior da casa mais famosa de Kirkjubøur.' },
      },
    },
  },
  {
    id: 'fo-h21',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Havnin í Klaksvík',
    emoji: '🐟',
    summary: 'Em Klaksvík, o Linu acompanha a descarga do peixe no porto e descobre um barco pendurado no teto da igreja.',
    cultural_context:
      'Klaksvík, na ilha de Borðoy, é a segunda maior cidade das Faroé e um grande porto pesqueiro; desde 2006 um túnel submarino a liga a Eysturoy. Na Christianskirkjan, a igreja principal da cidade, há um velho barco pendurado no teto.',
    start: 'start',
    glossary: [
      ['verður landaður', 'é desembarcado (passiva: «verða» + particípio)'],
      ['varð lossaður', 'foi descarregado'],
      ['frystur', 'congelado (particípio de «frysta»)'],
      ['nýkomin', 'recém-chegado'],
      ['undraðist', 'admirou-se (voz média)'],
      ['hekk undir loftinum', 'pendia do teto'],
      ['takkaði ja', 'aceitou, agradecendo'],
    ],
    nodes: {
      start: {
        emoji: '🚇',
        text: 'Linu kom til Klaksvíkar gjøgnum tunnilin, sum gongur undir sjónum. Í bussinum hitti hann Tóka, sum arbeiðir á havnini. Tóki spurdi, um hann vildi síggja, hvussu fiskurin verður landaður.',
        translation: 'O Linu chegou a Klaksvík pelo túnel que passa debaixo do mar. No ônibus ele conheceu o Tóki, que trabalha no porto. O Tóki perguntou se ele queria ver como o peixe é desembarcado.',
        choices: [
          { text: 'Linu takkaði ja og fylgdi við niður á havnina.', translation: 'O Linu aceitou e desceu com ele até o porto.', next: 'havnin' },
          { text: 'Linu segði, at hann heldur vildi síggja kirkjuna.', translation: 'O Linu disse que preferia ver a igreja.', next: 'kirkjan' },
        ],
      },
      havnin: {
        emoji: '🚢',
        text: 'Á havnini lá eitt stórt skip, sum var nýkomið inn. Fiskurin varð lossaður í kassar og koyrdur beint inn í eitt hús, har hann verður frystur. Tóki segði, at skipið hevði verið úti í tríggjar vikur.',
        translation: 'No porto havia um navio grande que tinha acabado de chegar. O peixe foi descarregado em caixas e levado direto para um galpão, onde é congelado. O Tóki disse que o navio tinha passado três semanas no mar.',
        choices: [
          { text: 'Linu spurdi, hvar fiskurin verður seldur.', translation: 'O Linu perguntou onde o peixe é vendido.', next: 'seldur' },
          {
            text: 'Linu spurdi, hví skipið fór út aftur, júst sum tey komu.',
            translation: 'O Linu perguntou por que o navio estava saindo de novo bem na hora em que eles chegaram.',
            wrong: 'O navio «var nýkomið inn»: tinha ACABADO DE CHEGAR («ný-» + o particípio «komið»). Ele não estava saindo, e sim voltando de três semanas no mar.',
          },
        ],
      },
      seldur: {
        emoji: '📦',
        text: 'Tóki greiddi frá, at nógv av fiskinum verður selt til útlanda. «Hann verður fluttur við skipi,» segði hann, «og summur verður etin í Evropa longu í næstu viku.» Linu undraðist á, hvussu skjótt alt gekk.',
        translation: 'O Tóki explicou que boa parte do peixe é vendida para o exterior. «Ele é levado de navio», disse, «e uma parte já é comida na Europa na semana que vem.» O Linu ficou admirado com a rapidez de tudo.',
        choices: [{ text: 'Síðan fóru teir upp í býin at síggja kirkjuna.', translation: 'Depois eles subiram até o centro para ver a igreja.', next: 'kirkjan' }],
      },
      kirkjan: {
        emoji: '⛪',
        text: 'Christianskirkjan er stór og ljós. Tá ið Linu kom inn, sá hann, at ein gamal bátur hekk undir loftinum. Hann hevði ongantíð sæð nakað líknandi í eini kirkju.',
        translation: 'A Christianskirkjan é grande e clara. Quando o Linu entrou, viu que um barco velho pendia do teto. Ele nunca tinha visto nada parecido numa igreja.',
        choices: [
          { text: 'Linu spurdi eina konu, sum sat í kirkjuni, hví báturin hongur har.', translation: 'O Linu perguntou a uma mulher sentada na igreja por que o barco fica pendurado ali.', next: 'baturin' },
          { text: 'Linu tók eina skjóta mynd og fór út aftur.', translation: 'O Linu tirou uma foto rápida e saiu de novo.', next: 'final_mynd' },
        ],
      },
      baturin: {
        emoji: '🛶',
        text: 'Konan segði, at báturin minnir fólk á, hvussu nógv sjógvurin altíð hevur havt at siga fyri bygdirnar í Føroyum. Mong, sum eru farin út á sjógv, eru ongantíð komin heim aftur. Linu kendi seg lítlan, meðan hann hugdi upp á bátin.',
        translation: 'A mulher disse que o barco lembra as pessoas de quanto o mar sempre significou para os povoados das Faroé. Muitos que saíram para o mar nunca voltaram para casa. O Linu se sentiu pequeno olhando para o barco lá em cima.',
        choices: [{ text: 'Linu fór aftur niður til Tóka.', translation: 'O Linu desceu de novo até o Tóki.', next: 'toki' }],
      },
      toki: {
        emoji: '🍽️',
        text: 'Tóki bað Linu heim til sín at eta. Á borðinum stóð kókaður fiskur við eplum, sum Tóki sjálvur hevði keypt á havnini um morgunin. «Fiskur, sum er nýlandaður, smakkar best,» segði hann.',
        translation: 'O Tóki convidou o Linu para comer na casa dele. Na mesa havia peixe cozido com batatas, que o próprio Tóki tinha comprado no porto de manhã. «Peixe recém-desembarcado tem o melhor sabor», disse ele.',
        choices: [{ text: 'Linu tók ein stóran bita.', translation: 'O Linu pegou um pedaço grande.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '😋',
        text: 'Fiskurin var tann besti, sum Linu nakrantíð hevði smakkað. Um kvøldið fór hann aftur gjøgnum tunnilin og hugsaði um bátin, sum hongur í kirkjuni.',
        translation: 'O peixe era o melhor que o Linu já tinha provado. À noite, ele voltou pelo túnel pensando no barco pendurado na igreja.',
        ending: { tone: 'bom', title: 'Do mar à mesa', message: 'O Linu viu o caminho do peixe, do navio até o prato, e entendeu por que o mar pesa tanto na vida das Faroé.' },
      },
      final_mynd: {
        emoji: '📷',
        text: 'Tá ið Linu seinni hugdi at myndini, sá hann bátin hanga undir loftinum. Men hann hevði ikki spurt nakran um hann, og nú visti hann ikki, hví hann hongur har.',
        translation: 'Quando o Linu olhou a foto mais tarde, viu o barco pendurado no teto. Mas ele não tinha perguntado nada a ninguém, e agora não sabia por que o barco estava ali.',
        ending: { tone: 'neutro', title: 'Visita relâmpago', message: 'A foto ficou boa, mas a história do barco ficou sem resposta. Às vezes vale perguntar!' },
      },
    },
  },
  // ───────────────────────── B1.4 ─────────────────────────
  {
    id: 'fo-h22',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Vatnið við tveimum nøvnum',
    emoji: '🏞️',
    summary: 'Em Vágar, o Linu caminha até o maior lago das Faroé com dois moradores que não concordam nem sobre o nome dele.',
    cultural_context:
      'Em Vágar fica o maior lago das Faroé, chamado Sørvágsvatn ou Leitisvatn, conforme a aldeia de quem fala. Na ponta sul, a cachoeira Bøsdalafossur cai direto no mar, e do alto do penhasco Trælanípa o lago parece flutuar bem acima do oceano: uma ilusão de ótica famosa.',
    start: 'start',
    glossary: [
      ['størsta vatnið', 'o maior lago (superlativo)'],
      ['eldri enn / betri enn', 'mais velho que / melhor que (comparativos irregulares)'],
      ['tann vakrasti', 'o mais bonito'],
      ['sum', 'que (pronome relativo, não muda)'],
      ['Hon segði, at…', 'Ela disse que… (discurso indireto)'],
      ['fossur', 'cachoeira'],
      ['hamar', 'penhasco, paredão de rocha'],
      ['narra', 'enganar'],
    ],
    nodes: {
      start: {
        emoji: '🥾',
        text: 'Linu var í Vágum at ganga til Trælanípu, sum er ein høgur hamar við størsta vatnið í Føroyum. Á vegnum hitti hann Jóhonnu úr Miðvági og Pætur úr Sørvági. Tey vóru ikki samd um, hvussu vatnið eitur.',
        translation: 'O Linu estava em Vágar para caminhar até a Trælanípa, um penhasco alto ao lado do maior lago das Faroé. No caminho ele encontrou a Jóhanna, de Miðvágur, e o Pætur, de Sørvágur. Eles não concordavam sobre o nome do lago.',
        choices: [
          { text: 'Linu spurdi Jóhonnu fyrst.', translation: 'O Linu perguntou primeiro à Jóhanna.', next: 'johanna' },
          { text: 'Linu spurdi Pætur fyrst.', translation: 'O Linu perguntou primeiro ao Pætur.', next: 'paetur' },
        ],
      },
      johanna: {
        emoji: '👩',
        text: 'Jóhanna segði, at vatnið eitur Leitisvatn, og at tað altíð hevur eitið so. Hon segði eisini, at hon hevði búð longri við vatnið enn Pætur. Pætur flenti og segði einki.',
        translation: 'A Jóhanna disse que o lago se chama Leitisvatn e que sempre se chamou assim. Ela disse também que tinha morado perto do lago mais tempo que o Pætur. O Pætur riu e não disse nada.',
        choices: [
          { text: 'Linu spurdi nú Pætur.', translation: 'Agora o Linu perguntou ao Pætur.', next: 'paetur' },
          { text: 'Linu skeyt upp, at tey gingu víðari.', translation: 'O Linu sugeriu que eles seguissem caminho.', next: 'fossur' },
        ],
      },
      paetur: {
        emoji: '👨',
        text: 'Pætur segði, at tað rætta navnið er Sørvágsvatn, og at tað var navnið, sum abbi hansara brúkti. Hann segði eisini, at hann var eldri enn Jóhanna og tí visti betur. Jóhanna segði einki, men hon var als ikki samd.',
        translation: 'O Pætur disse que o nome certo é Sørvágsvatn e que era o nome que o avô dele usava. Ele disse também que era mais velho que a Jóhanna e por isso sabia mais. A Jóhanna não disse nada, mas não concordava nem um pouco.',
        choices: [
          { text: 'Linu spurdi nú Jóhonnu.', translation: 'Agora o Linu perguntou à Jóhanna.', next: 'johanna' },
          { text: 'Linu skeyt upp, at tey gingu víðari.', translation: 'O Linu sugeriu que eles seguissem caminho.', next: 'fossur' },
          {
            text: 'Linu segði, at Jóhanna mátti vita best, tí at hon var eldri enn Pætur.',
            translation: 'O Linu disse que a Jóhanna devia saber mais, porque ela era mais velha que o Pætur.',
            wrong: 'O Pætur disse «hann var eldri enn Jóhanna»: ELE era mais velho que ela. Repare no discurso indireto: «hann» é o próprio Pætur, e «eldri enn» é o comparativo irregular de «gamal» (mais velho que).',
          },
        ],
      },
      fossur: {
        emoji: '💦',
        text: 'Tey gingu øll trý saman út á enda vatnsins. Har fellur vatnið beint út í havið í einum fossi, sum eitur Bøsdalafossur. Linu segði, at hetta var tann vakrasti fossurin, sum hann nakrantíð hevði sæð.',
        translation: 'Os três foram juntos até a ponta do lago. Ali a água cai direto no mar numa cachoeira que se chama Bøsdalafossur. O Linu disse que era a cachoeira mais bonita que ele já tinha visto.',
        choices: [
          { text: 'Linu vildi ganga upp á Trælanípu at síggja vatnið omanfyri.', translation: 'O Linu quis subir a Trælanípa para ver o lago de cima.', next: 'nipa' },
          { text: 'Linu segði, at hann var ov móður, og vendi heim.', translation: 'O Linu disse que estava cansado demais e voltou para casa.', next: 'final_heim' },
        ],
      },
      nipa: {
        emoji: '🪄',
        text: 'Uppi á Trælanípu sá Linu nakað løgið: vatnið sá út til at liggja nógv hægri enn havið, næstan sum tað hekk í luftini. Jóhanna greiddi frá, at tað eru eyguni, sum narra okkum. Tað er hamarin, sum er høgur, ikki vatnið.',
        translation: 'No alto da Trælanípa o Linu viu uma coisa estranha: o lago parecia estar muito mais alto que o mar, quase como se estivesse pendurado no ar. A Jóhanna explicou que são os olhos que nos enganam. É o penhasco que é alto, não o lago.',
        choices: [
          { text: 'Linu tók myndina, har hann stóð.', translation: 'O Linu tirou a foto de onde estava.', next: 'final_bom' },
          { text: 'Linu gekk heilt út á kantin at taka eina betri mynd.', translation: 'O Linu foi até a beirada para tirar uma foto melhor.', next: 'kantur' },
        ],
      },
      kantur: {
        emoji: '🌬️',
        text: 'Pætur tók í hann og segði, at hann var ov nær. Hann greiddi frá, at vindurin her er sterkari, enn fólk halda, og at kanturin er hálari, enn hann sær út. Linu fór nakrar metrar aftur og tók myndina haðani.',
        translation: 'O Pætur o segurou e disse que ele estava perto demais. Ele explicou que o vento ali é mais forte do que as pessoas pensam e que a beirada é mais escorregadia do que parece. O Linu recuou alguns metros e tirou a foto dali.',
        choices: [{ text: 'Linu takkaði Pætri.', translation: 'O Linu agradeceu ao Pætur.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '📸',
        text: 'Um kvøldið sendi Linu vinunum heima myndina. Undir myndina skrivaði hann: «Leitisvatn ella Sørvágsvatn: tað vakrasta vatnið í Føroyum.» Bæði Jóhanna og Pætur vóru nøgd.',
        translation: 'À noite, o Linu mandou a foto para os amigos no Brasil. Embaixo da foto, escreveu: «Leitisvatn ou Sørvágsvatn: o lago mais bonito das Faroé.» Tanto a Jóhanna quanto o Pætur ficaram satisfeitos.',
        ending: { tone: 'bom', title: 'Diplomacia de pinguim', message: 'O Linu viu o lago que flutua sobre o mar e ainda deixou as duas aldeias contentes com o nome.' },
      },
      final_heim: {
        emoji: '🛋️',
        text: 'Linu fór heim, áðrenn hann var komin upp á Trælanípu. Seinni sá hann myndir av vatninum, sum sær út til at hanga yvir havinum, og hann angraði, at hann ikki hevði gingið longur.',
        translation: 'O Linu foi para casa antes de subir a Trælanípa. Mais tarde, ele viu fotos do lago que parece pendurado sobre o mar e se arrependeu de não ter ido mais longe.',
        ending: { tone: 'neutro', title: 'Faltou pouco', message: 'A cachoeira foi linda, mas a vista mais famosa de Vágar ficou para a próxima.' },
      },
    },
  },
  {
    id: 'fo-h23',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Tokan á Slættaratindi',
    emoji: '⛰️',
    summary: 'Em Eysturoy, o Linu e o amigo Hanus sobem a montanha mais alta das Faroé.',
    cultural_context:
      'Slættaratindur, em Eysturoy, é a montanha mais alta das Faroé, com 880 metros. A subida mais comum começa no passo de Eiðisskarð, e em dias claros dá para avistar boa parte do arquipélago lá de cima.',
    start: 'start',
    glossary: [
      ['hægsta fjallið', 'a montanha mais alta (superlativo de «høgur»)'],
      ['brattari / skjótari enn', 'mais íngreme / mais rápido que'],
      ['tað besta', 'o melhor'],
      ['sum', 'que (relativo)'],
      ['Hann segði, at…', 'Ele disse que… (discurso indireto)'],
      ['útsýni', 'vista, panorama'],
      ['tindur', 'pico, cume'],
      ['móður', 'cansado'],
    ],
    nodes: {
      start: {
        emoji: '🥾',
        text: 'Linu og vinur hansara Hanus stóðu í Eiðisskarði, har gøtan upp á Slættaratind byrjar. Hanus segði, at Slættaratindur er hægsta fjallið í Føroyum, og at túrurin upp tekur umleið ein tíma. Hann spurdi, um Linu hevði tikið nóg nógv vatn við.',
        translation: 'O Linu e o amigo dele, o Hanus, estavam no passo de Eiðisskarð, onde começa a trilha para o Slættaratindur. O Hanus disse que o Slættaratindur é a montanha mais alta das Faroé e que a subida leva mais ou menos uma hora. Ele perguntou se o Linu tinha trazido água suficiente.',
        choices: [
          { text: 'Linu segði, at hann hevði tvær fløskur við.', translation: 'O Linu disse que tinha trazido duas garrafas.', next: 'upp' },
          { text: 'Linu segði, at hann hevði gloymt vatnið í bilinum.', translation: 'O Linu disse que tinha esquecido a água no carro.', next: 'vatn' },
          {
            text: '«Nú skulu vit upp á næsthægsta fjallið!»',
            translation: '«Agora vamos subir a segunda montanha mais alta!»',
            wrong: 'O Hanus disse «hægsta fjallið í Føroyum»: a montanha MAIS alta das Faroé (superlativo de «høgur»), não a segunda.',
          },
        ],
      },
      vatn: {
        emoji: '💧',
        text: 'Hanus segði, at hann hevði eina fløsku meira, enn hann tørvaði. Hann gav Linu hana og segði, at hetta ikki var fyrsta ferð, at hann hjálpti einum vini, sum hevði gloymt nakað.',
        translation: 'O Hanus disse que tinha uma garrafa a mais do que precisava. Ele a deu ao Linu e disse que não era a primeira vez que ajudava um amigo que tinha esquecido alguma coisa.',
        choices: [{ text: 'Linu takkaði, og teir byrjaðu at ganga.', translation: 'O Linu agradeceu, e eles começaram a caminhar.', next: 'upp' }],
      },
      upp: {
        emoji: '🧗',
        text: 'Leiðin var brattari, enn Linu hevði væntað. Hanus gekk skjótari enn hann, men steðgaði við og við. Hann segði, at tað besta er ikki at ganga skjótast, men at koma upp.',
        translation: 'O caminho era mais íngreme do que o Linu esperava. O Hanus andava mais rápido que ele, mas parava de vez em quando. Ele disse que o melhor não é andar mais rápido, e sim chegar lá em cima.',
        choices: [
          { text: 'Linu gekk spakuliga og hvíldi seg ofta.', translation: 'O Linu andou devagar e descansou muitas vezes.', next: 'tindur' },
          { text: 'Linu royndi at ganga skjótari enn Hanus.', translation: 'O Linu tentou andar mais rápido que o Hanus.', next: 'modur' },
          { text: 'Linu vendi aftur, tí at hann helt, at leiðin var ov brøtt.', translation: 'O Linu voltou, porque achou o caminho íngreme demais.', next: 'final_vend' },
        ],
      },
      modur: {
        emoji: '😮‍💨',
        text: 'Eftir tíggju minuttir var Linu so móður, at hann mátti seta seg. Hanus flenti og minti hann á tað, sum hann hevði sagt um tað besta. Teir hvíldu seg eina løtu og gingu so víðari.',
        translation: 'Depois de dez minutos, o Linu estava tão cansado que precisou sentar. O Hanus riu e lembrou o que tinha dito sobre o melhor. Eles descansaram um pouco e depois seguiram.',
        choices: [{ text: 'Nú gekk Linu spakuliga.', translation: 'Agora o Linu andou devagar.', next: 'tindur' }],
      },
      tindur: {
        emoji: '🏔️',
        text: 'Á tindinum var útsýnið tað vakrasta, sum Linu nakrantíð hevði sæð. Hanus peikaði á fjøllini og oyggjarnar og segði honum, hvussu tær eita. Hann segði, at í klárum veðri sæst næstan alt landið haðani.',
        translation: 'No cume, a vista era a mais bonita que o Linu já tinha visto. O Hanus apontou para as montanhas e as ilhas e disse como elas se chamam. Ele disse que, com tempo limpo, dá para ver quase o país inteiro dali.',
        choices: [{ text: 'Linu spurdi, hvør oyggjin var longst burturi.', translation: 'O Linu perguntou qual ilha estava mais longe.', next: 'longst' }],
      },
      longst: {
        emoji: '🧭',
        text: 'Hanus peikaði suður móti eini oyggj langt burturi og segði, at hann helt, at tað var Suðuroy, sum er sunnasta oyggjin. Linu segði, at hon sá minni út, enn hann hevði hildið. Hanus svaraði, at alt sær minni út, tá ið ein stendur so høgt.',
        translation: 'O Hanus apontou para o sul, para uma ilha bem distante, e disse que achava que era Suðuroy, a ilha mais ao sul. O Linu disse que ela parecia menor do que ele imaginava. O Hanus respondeu que tudo parece menor quando a gente está tão alto.',
        choices: [{ text: 'Linu og Hanus gingu niður aftur.', translation: 'O Linu e o Hanus desceram de volta.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🏅',
        text: 'Tá ið teir komu niður til bilin, var Linu móðari enn nakrantíð, men eisini glaðari. Hann hevði staðið á hægsta staðnum í Føroyum.',
        translation: 'Quando eles chegaram ao carro, o Linu estava mais cansado do que nunca, mas também mais feliz. Ele tinha estado no ponto mais alto das Faroé.',
        ending: { tone: 'bom', title: 'No topo das Faroé', message: 'Devagar e sempre, o Linu chegou aos 880 metros do Slættaratindur.' },
      },
      final_vend: {
        emoji: '🚗',
        text: 'Linu fór niður aftur og setti seg í bilin at lesa. Tá ið Hanus kom aftur tveir tímar seinni, vísti hann honum myndir, sum vóru vakrari enn nakað, sum Linu hevði hugsað sær.',
        translation: 'O Linu desceu e sentou no carro para ler. Quando o Hanus voltou duas horas depois, mostrou a ele fotos mais bonitas do que qualquer coisa que o Linu tinha imaginado.',
        ending: { tone: 'neutro', title: 'Ficou no carro', message: 'A trilha era íngreme, mas ia no ritmo de cada um. Da próxima vez, o Linu sobe devagar!' },
      },
    },
  },
  {
    id: 'fo-h24',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Suður í Suðuroy',
    emoji: '⛴️',
    summary: 'Na balsa para Suðuroy, o Linu conhece o Símun, que fala o dialeto do sul e o leva ao alto do penhasco Beinisvørð.',
    cultural_context:
      'Suðuroy é a ilha mais ao sul das Faroé; a balsa de Tórshavn até Krambatangi leva cerca de duas horas. O falar de Suðuroy é bem diferente do de Tórshavn, e o penhasco Beinisvørð, com uns 470 metros, é um dos mais altos do país.',
    start: 'start',
    glossary: [
      ['ein av teimum vakrastu', 'um dos mais bonitos (superlativo)'],
      ['øðrvísi enn', 'diferente de'],
      ['sum', 'que (relativo)'],
      ['suðuroyingur', 'pessoa de Suðuroy'],
      ['minsta oyggjin', 'a menor ilha'],
      ['hamar', 'penhasco'],
      ['havnarmaður', 'pessoa de Tórshavn'],
    ],
    nodes: {
      start: {
        emoji: '🛳️',
        text: 'Linu sat á ferjuni til Suðuroyar. Hann hevði hoyrt, at Suðuroy er ein av teimum vakrastu oyggjunum, og at fólkini har tosa øðrvísi enn í Havn. Við sama borð sat ein gamal maður, sum æt Símun.',
        translation: 'O Linu estava na balsa para Suðuroy. Ele tinha ouvido que Suðuroy é uma das ilhas mais bonitas e que as pessoas lá falam diferente de Tórshavn. Na mesma mesa estava sentado um senhor que se chamava Símun.',
        choices: [
          { text: 'Linu spurdi Símun, hvaðani hann var.', translation: 'O Linu perguntou ao Símun de onde ele era.', next: 'simun' },
          { text: 'Linu fór út á dekkið at hyggja eftir sjónum.', translation: 'O Linu foi para o convés olhar o mar.', next: 'dekk' },
        ],
      },
      simun: {
        emoji: '👴',
        text: 'Símun segði, at hann var føddur í Vági, og at fólkini í Suðuroy tosa vakrast í øllum Føroyum. Hann segði tað við einum smíli. Linu legði merki til, at Símun segði nøkur orð øðrvísi, enn hann hevði lært.',
        translation: 'O Símun disse que tinha nascido em Vágur e que o povo de Suðuroy fala mais bonito que todo mundo nas Faroé. Ele disse isso sorrindo. O Linu reparou que o Símun dizia algumas palavras de um jeito diferente do que ele tinha aprendido.',
        choices: [
          { text: 'Linu spurdi, hví hann tosar øðrvísi.', translation: 'O Linu perguntou por que ele fala diferente.', next: 'mal' },
          {
            text: 'Linu segði, at Símun tosaði júst sum fólk í Havn.',
            translation: 'O Linu disse que o Símun falava igualzinho ao povo de Tórshavn.',
            wrong: 'O Linu tinha reparado justamente que o Símun dizia palavras «øðrvísi, enn hann hevði lært», DIFERENTE do que ele tinha aprendido. E o próprio Símun disse que no sul se fala do jeito deles.',
          },
        ],
      },
      mal: {
        emoji: '🗣️',
        text: 'Símun segði, at hann í skúlanum varð rættaður av lærarum, sum vóru úr Havn. Men hann hevði ongantíð broytt málið. «Tað er mitt mál, og tað var málið hjá mammu og pápa,» segði hann.',
        translation: 'O Símun disse que na escola era corrigido por professores que eram de Tórshavn. Mas ele nunca tinha mudado o jeito de falar. «É a minha língua, e era a língua da minha mãe e do meu pai», disse ele.',
        choices: [{ text: 'Linu lurtaði, til ferjan kom fram.', translation: 'O Linu escutou até a balsa chegar.', next: 'fram' }],
      },
      dekk: {
        emoji: '🏝️',
        text: 'Úti á dekkinum var kaldari enn inni, men útsýnið var betri. Linu sá eina lítla oyggj, sum hevði brattar hamrar allan vegin runt. Ein kona, sum stóð við síðuna av honum, segði, at tað var Lítla Dímun, minsta oyggjin av teimum átjan, og at eingin býr har.',
        translation: 'Lá fora no convés estava mais frio do que dentro, mas a vista era melhor. O Linu viu uma ilha pequena, com penhascos íngremes em toda a volta. Uma mulher que estava ao lado dele disse que era Lítla Dímun, a menor das dezoito ilhas, e que ninguém mora lá.',
        choices: [{ text: 'Linu var á dekkinum, til ferjan kom fram.', translation: 'O Linu ficou no convés até a balsa chegar.', next: 'fram' }],
      },
      fram: {
        emoji: '🚗',
        text: 'Eftir tveimum tímum kom ferjan til Krambatanga. Símun spurdi, um Linu vildi koma við honum til Vágs, har systir hansara býr. Hann segði, at hann fyrst kundi koyra hann upp á Beinisvørð, sum er ein av hægstu hamrunum í Føroyum.',
        translation: 'Depois de duas horas, a balsa chegou a Krambatangi. O Símun perguntou se o Linu queria ir com ele até Vágur, onde mora a irmã dele. Ele disse que antes podia levá-lo de carro até o Beinisvørð, um dos penhascos mais altos das Faroé.',
        choices: [
          { text: 'Linu bað Símun koyra seg upp á Beinisvørð.', translation: 'O Linu pediu ao Símun que o levasse até o Beinisvørð.', next: 'beinisvord' },
          { text: 'Linu segði, at hann heldur vildi ganga ein túr í Vági.', translation: 'O Linu disse que preferia dar uma volta em Vágur.', next: 'final_vagur' },
        ],
      },
      beinisvord: {
        emoji: '☀️',
        text: 'Símun koyrdi upp á fjallið og steðgaði við kantin. Mjørkin lá niðri á sjónum, men uppi á hamrinum skein sólin. Linu segði, at hetta var tað løgnasta og vakrasta, sum hann hevði sæð í Føroyum.',
        translation: 'O Símun subiu a montanha de carro e parou perto da beirada. A neblina estava lá embaixo, sobre o mar, mas em cima do penhasco o sol brilhava. O Linu disse que aquilo era a coisa mais estranha e mais bonita que ele tinha visto nas Faroé.',
        choices: [{ text: 'Linu takkaði Símuni fyri túrin.', translation: 'O Linu agradeceu ao Símun pelo passeio.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🍲',
        text: 'Um kvøldið át Linu døgurða hjá systrini hjá Símuni í Vági. Tey tosaðu leingi, og Linu royndi at tosa sum ein suðuroyingur. Øll flentu, men tey søgdu, at hann var betri enn nógvir havnarmenn.',
        translation: 'À noite, o Linu jantou na casa da irmã do Símun, em Vágur. Eles conversaram por muito tempo, e o Linu tentou falar como alguém de Suðuroy. Todo mundo riu, mas disseram que ele era melhor que muita gente de Tórshavn.',
        ending: { tone: 'bom', title: 'Sotaque do sul', message: 'O Linu viu o sol acima da neblina e ainda aprendeu um pouco do falar de Suðuroy.' },
      },
      final_vagur: {
        emoji: '🌫️',
        text: 'Linu gekk ein túr í Vági, men mjørkin lá tjúkkur yvir bygdini allan dagin. Um kvøldið frætti hann, at uppi á Beinisvørð hevði sólin skinið alla tíðina.',
        translation: 'O Linu deu uma volta em Vágur, mas a neblina ficou grossa sobre a aldeia o dia todo. À noite, soube que no alto do Beinisvørð o sol tinha brilhado o tempo inteiro.',
        ending: { tone: 'neutro', title: 'Sol lá em cima', message: 'Nas Faroé, às vezes o sol está acima da neblina. Da próxima vez, o Linu sobe!' },
      },
    },
  },
  // ───────────────────────── B2.1 ─────────────────────────
  {
    id: 'fo-h25',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Fjøra í Saksun',
    emoji: '🌊',
    summary: 'Em Saksun, o Linu chega tarde demais para atravessar a lagoa a pé e ouve de um fazendeiro tudo o que «teria» acontecido.',
    cultural_context:
      'Saksun, no noroeste de Streymoy, é um povoado minúsculo à beira de uma lagoa ligada ao mar, que se enche e se esvazia com a maré: na maré baixa dá para caminhar pela areia até a praia. No alto ficam uma igreja com telhado de grama e a antiga fazenda Dúvugarðar, hoje museu.',
    start: 'start',
    glossary: [
      ['fjøra', 'maré baixa'],
      ['Hevði tú komið…, hevði tú…', 'Se você tivesse vindo…, você teria… (condicional com «hevði»)'],
      ['Um eg var tú, fór eg…', 'Se eu fosse você, eu iria… (hipótese com o passado)'],
      ['Tú skuldi sæð…', 'Você precisava ter visto… («skuldi» + particípio)'],
      ['Gud signi teg!', 'Deus te abençoe! (subjuntivo presente, «signi»)'],
      ['tvørur', 'teimoso'],
      ['vágur', 'baía, enseada'],
    ],
    nodes: {
      start: {
        emoji: '🏞️',
        text: 'Linu kom til Saksunar seint á degnum. Hann vildi ganga eftir sandinum í vágnum út til havið, men vatnið stóð høgt. Ein bóndi, sum æt Heðin, segði: «Hevði tú komið tveir tímar fyrr, hevði tú gingið turrur út.»',
        translation: 'O Linu chegou a Saksun no fim do dia. Ele queria caminhar pela areia da enseada até o mar, mas a água estava alta. Um fazendeiro chamado Heðin disse: «Se você tivesse chegado duas horas antes, teria ido até lá sem se molhar.»',
        choices: [
          { text: 'Linu spurdi, nær fjøran kemur aftur.', translation: 'O Linu perguntou quando a maré baixa volta.', next: 'fjora' },
          { text: 'Linu vildi ganga út kortini, tí at vatnið ikki sá so djúpt út.', translation: 'O Linu quis ir mesmo assim, porque a água não parecia tão funda.', next: 'vatid' },
          {
            text: '«Fínt, so eri eg komin júst í tíð!»',
            translation: '«Ótimo, então cheguei na hora certa!»',
            wrong: 'O Heðin usou o condicional: «Hevði tú komið tveir tímar fyrr, hevði tú gingið turrur út», SE você TIVESSE chegado duas horas antes, TERIA ido sem se molhar. Ou seja: o Linu chegou tarde, a maré já subiu.',
          },
        ],
      },
      fjora: {
        emoji: '🕛',
        text: 'Heðin hugdi upp í loftið og segði, at fjøran kom ikki fyrr enn um miðnátt. «Um eg var tú, fór eg upp at síggja kirkjuna og Dúvugarðar í staðin,» segði hann. «Tað hevði verið betri enn at sita her og bíða.»',
        translation: 'O Heðin olhou para o céu e disse que a maré baixa só viria à meia-noite. «Se eu fosse você, subiria para ver a igreja e Dúvugarðar em vez disso», disse ele. «Seria melhor do que ficar sentado aqui esperando.»',
        choices: [
          { text: 'Linu fylgdi ráðnum hjá Heðini.', translation: 'O Linu seguiu o conselho do Heðin.', next: 'kirkjan' },
          { text: 'Linu segði, at hann heldur vildi bíða til miðnátt.', translation: 'O Linu disse que preferia esperar até a meia-noite.', next: 'final_midnatt' },
          {
            text: 'Linu fylgdi Heðini, sum var farin upp til kirkjuna.',
            translation: 'O Linu foi atrás do Heðin, que tinha subido até a igreja.',
            wrong: 'O Heðin não foi a lugar nenhum. «Um eg var tú, fór eg upp…» é uma hipótese: SE EU FOSSE você, EU SUBIRIA. Em feroês, o passado («var», «fór») também serve para o irreal: é um conselho.',
          },
        ],
      },
      vatid: {
        emoji: '🥶',
        text: 'Eftir fáum stigum stóð vatnið Linu upp um knøini, og tað var ískalt. Heðin kallaði eftir honum: «Hevði eg vitað, at tú vart so tvørur, hevði eg sagt tær tað beinleiðis: vend aftur!»',
        translation: 'Depois de poucos passos, a água já batia acima dos joelhos do Linu, e estava gelada. O Heðin gritou para ele: «Se eu soubesse que você era tão teimoso, teria dito na lata: volte!»',
        choices: [
          { text: 'Linu vendi aftur og fór upp til kirkjuna.', translation: 'O Linu voltou e subiu até a igreja.', next: 'kirkjan' },
          { text: 'Linu helt fram út móti havinum.', translation: 'O Linu continuou em direção ao mar.', next: 'final_vatur' },
        ],
      },
      kirkjan: {
        emoji: '⛪',
        text: 'Kirkjan í Saksun er lítil og hevur torvtak. Úr kirkjugarðinum sá Linu niður á vágin, har vatnið nú lá slætt sum ein spegil. «Tú skuldi sæð hetta, mamma,» hugsaði hann.',
        translation: 'A igreja de Saksun é pequena e tem telhado de grama. Do cemitério, o Linu viu lá embaixo a enseada, onde a água agora estava lisa como um espelho. «Você precisava ver isto, mãe», pensou ele.',
        choices: [
          { text: 'Linu gekk yvir til Dúvugarðar.', translation: 'O Linu foi até Dúvugarðar.', next: 'duvugardar' },
          { text: 'Linu fór niður aftur at bíða eftir fjøruni.', translation: 'O Linu desceu de novo para esperar a maré baixa.', next: 'final_midnatt' },
        ],
      },
      duvugardar: {
        emoji: '🏚️',
        text: 'Í Dúvugarðum vóru gomul amboð, rúm við torvtaki og ein roykstova. Ein kvinna, sum vísti fram, segði, at fólk livdu her á sama hátt í mong hundrað ár. «Hevði tú búð her fyri hundrað árum síðan, hevði tú etið turran fisk og skerpikjøt hvønn dag,» segði hon.',
        translation: 'Em Dúvugarðar havia ferramentas antigas, cômodos com telhado de grama e uma sala de fumaça. Uma mulher que mostrava o lugar disse que as pessoas viveram ali do mesmo jeito por muitos séculos. «Se você tivesse morado aqui cem anos atrás, teria comido peixe seco e carne de carneiro curada ao vento todo dia», disse ela.',
        choices: [{ text: 'Linu takkaði og fór út í kvøldljósið.', translation: 'O Linu agradeceu e saiu para a luz do fim de tarde.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🙏',
        text: 'Linu gekk aftur til Heðins at siga farvæl. Heðin tók í hondina á honum og segði: «Gud signi teg, og kom aftur til fjøru næstu ferð!»',
        translation: 'O Linu voltou até o Heðin para se despedir. O Heðin apertou a mão dele e disse: «Deus te abençoe, e da próxima vez venha na maré baixa!»',
        ending: { tone: 'bom', title: 'Bom conselho', message: 'Sem a maré baixa, o Linu conheceu a igreja, a fazenda antiga e um fazendeiro cheio de «se».' },
      },
      final_midnatt: {
        emoji: '🌌',
        text: 'Linu sat á einum steini í fleiri tímar. Um miðnátt var vatnið farið, og í ljósu summarnáttini gekk hann út eftir sandinum til havið. Hann hevði ongantíð hildið, at hann skuldi ganga á havsbotninum um miðnátt.',
        translation: 'O Linu ficou sentado numa pedra por várias horas. À meia-noite, a água tinha ido embora, e na noite clara de verão ele caminhou pela areia até o mar. Ele nunca tinha imaginado que um dia andaria no fundo do mar à meia-noite.',
        ending: { tone: 'bom', title: 'Caminhada à meia-noite', message: 'A paciência do Linu valeu: a lagoa de Saksun se abriu só para ele, na noite clara do verão.' },
      },
      final_vatur: {
        emoji: '🧣',
        text: 'Linu kom ikki langt, áðrenn vatnið stóð honum upp um búkin. Hann mátti venda aftur, og restina av degnum sat hann í einum ullteppi hjá Heðini og skalv.',
        translation: 'O Linu não foi muito longe antes de a água chegar à barriga. Teve que voltar, e passou o resto do dia enrolado num cobertor de lã na casa do Heðin, tremendo.',
        ending: { tone: 'neutro', title: 'Teimoso e molhado', message: 'Se o Linu tivesse escutado o Heðin, teria ficado seco. Fica a lição!' },
      },
    },
  },
  {
    id: 'fo-h26',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Bjørgini við Vestmanna',
    emoji: '🦅',
    summary: 'Num barquinho saído de Vestmanna, o Linu navega junto aos penhascos das aves e decide se entra numa gruta com o mar balançando.',
    cultural_context:
      'De Vestmanna, em Streymoy, saem barcos para os penhascos de Vestmanna, paredões de centenas de metros cheios de aves marinhas, com grutas onde os barcos entram quando o mar deixa. Antigamente, homens desciam os penhascos pendurados em cordas para caçar aves e colher ovos.',
    start: 'start',
    glossary: [
      ['Var eg ikki vísur í tí, fór eg ikki inn.', 'Se eu não tivesse certeza, não entraria. (hipótese sem «um»: o verbo vem primeiro)'],
      ['Hevði brimið verið størri, hevði eg…', 'Se a arrebentação estivesse maior, eu teria…'],
      ['mundi', 'provavelmente iria, devia (suposição)'],
      ['gjógv', 'fenda estreita no rochedo, gruta marinha'],
      ['fuglabjørg', 'penhascos de aves'],
      ['ivaleyst', 'sem dúvida'],
      ['reip', 'corda'],
    ],
    nodes: {
      start: {
        emoji: '🚤',
        text: 'Linu sat í einum lítlum báti, sum sigldi úr Vestmanna út til fuglabjørgini. Skiparin, Bjarni, segði, at tey kundu sigla inn í eina gjógv, um sjógvurin var nóg kyrrur. «Men var eg ikki vísur í tí, fór eg ikki inn,» segði hann.',
        translation: 'O Linu estava num barco pequeno que saía de Vestmanna rumo aos penhascos das aves. O capitão, Bjarni, disse que eles poderiam entrar numa gruta se o mar estivesse calmo o bastante. «Mas, se eu não tivesse certeza, não entraria», disse ele.',
        choices: [
          { text: 'Linu spurdi, hvussu Bjarni sær, um sjógvurin er nóg kyrrur.', translation: 'O Linu perguntou como o Bjarni sabe se o mar está calmo o bastante.', next: 'kyrrur' },
          { text: 'Linu hugdi upp eftir hamrinum.', translation: 'O Linu olhou para o alto do penhasco.', next: 'fuglar' },
          {
            text: '«So fara vit inn, hvussu sum veðrið er!»',
            translation: '«Então vamos entrar, faça o tempo que fizer!»',
            wrong: 'O Bjarni disse o contrário: «var eg ikki vísur í tí, fór eg ikki inn», SE ele NÃO tivesse certeza (de que o mar está calmo), NÃO entraria. É uma hipótese com o verbo na frente, sem «um».',
          },
        ],
      },
      kyrrur: {
        emoji: '🌊',
        text: 'Bjarni vísti á aldurnar við hamarin. «Hevði brimið verið eitt sindur størri, hevði eg vent aftur beinanvegin,» segði hann. «Men í dag er sjógvurin blíður.»',
        translation: 'O Bjarni apontou para as ondas junto ao penhasco. «Se a arrebentação estivesse um pouquinho maior, eu teria dado meia-volta na hora», disse ele. «Mas hoje o mar está manso.»',
        choices: [{ text: 'Linu spurdi, hvaðani bygdin hevur navnið.', translation: 'O Linu perguntou de onde vem o nome da aldeia.', next: 'navn' }],
      },
      navn: {
        emoji: '📜',
        text: 'Báturin sigldi fram við hamrinum, meðan Bjarni greiddi frá. «Um tú spyrt meg, eru tað írar, sum hava givið bygdini navnið,» segði hann. «Men tað veit eingin við vissu.»',
        translation: 'O barco seguia ao longo do penhasco enquanto o Bjarni contava. «Se você me perguntar, foram os irlandeses que deram o nome à aldeia», disse ele. «Mas ninguém sabe com certeza.»',
        choices: [{ text: 'Linu hugdi upp eftir hamrinum.', translation: 'O Linu olhou para o alto do penhasco.', next: 'fuglar' }],
      },
      fuglar: {
        emoji: '🐦',
        text: 'Hamrarnir vóru so høgir, at Linu mátti leggja høvdið aftur á bak fyri at síggja ovast. Túsundtals fuglar sótu á hvørjari hillu, og luftin var full av ljóði. Bjarni segði, at fólk í gomlum døgum sigu niður í hamrarnar í reipi eftir fugli og eggjum.',
        translation: 'Os penhascos eram tão altos que o Linu teve que inclinar a cabeça para trás para ver o topo. Milhares de aves estavam em cada saliência, e o ar estava cheio de barulho. O Bjarni disse que, antigamente, as pessoas desciam os penhascos em cordas atrás de aves e ovos.',
        choices: [
          { text: 'Linu spurdi Bjarna, um hann sjálvur hevði torað tað.', translation: 'O Linu perguntou ao Bjarni se ele mesmo teria coragem.', next: 'reip' },
          { text: 'Linu bað Bjarna sigla inn í gjógvina.', translation: 'O Linu pediu ao Bjarni que entrasse na gruta.', next: 'hellur' },
        ],
      },
      reip: {
        emoji: '🪢',
        text: 'Bjarni flenti. «Hevði eg verið føddur fyri hundrað árum síðan, hevði eg ivaleyst gjørt tað,» segði hann. «Men í dag vil eg heldur sita her í bátinum og hyggja at teimum.»',
        translation: 'O Bjarni riu. «Se eu tivesse nascido cem anos atrás, sem dúvida teria feito isso», disse ele. «Mas hoje prefiro ficar sentado aqui no barco olhando para elas.»',
        choices: [{ text: 'Linu bað hann sigla inn í gjógvina.', translation: 'O Linu pediu que ele entrasse na gruta.', next: 'hellur' }],
      },
      hellur: {
        emoji: '🕳️',
        text: 'Bjarni sigldi spakuliga inn í eina tronga gjógv. Inni var myrkt, og vatnið var grønt og klárt. Alt í einum kom ein alda inn, og báturin lyftist upp og niður.',
        translation: 'O Bjarni entrou devagar numa gruta estreita. Lá dentro estava escuro, e a água era verde e transparente. De repente entrou uma onda, e o barco subiu e desceu.',
        choices: [
          { text: 'Linu helt seg fast og sat still.', translation: 'O Linu se segurou e ficou quieto.', next: 'final_bom' },
          { text: 'Linu reistist upp at taka eina mynd.', translation: 'O Linu se levantou para tirar uma foto.', next: 'final_mynd' },
        ],
      },
      final_bom: {
        emoji: '🌞',
        text: 'Tá ið tey komu út aftur, skein sólin á hamrarnar. Bjarni segði, at Linu hevði verið heppin, og at hann ikki mundi fáa so gott veður aftur í ár. Linu segði: «Gud signi teg og bátin!»',
        translation: 'Quando eles saíram de novo, o sol brilhava nos penhascos. O Bjarni disse que o Linu tinha tido sorte e que provavelmente não pegaria um tempo tão bom de novo naquele ano. O Linu disse: «Deus abençoe você e o barco!»',
        ending: { tone: 'bom', title: 'Dentro da rocha', message: 'Com um capitão prudente e mar manso, o Linu entrou numa gruta dos penhascos de Vestmanna.' },
      },
      final_mynd: {
        emoji: '📷',
        text: 'Bjarni kallaði: «Set teg niður! Hevði tú dottið í sjógvin her inni, hevði eg ikki fingið teg upp aftur so skjótt.» Linu settist beinanvegin, men myndin, sum hann hevði tikið, var alt ov myrk.',
        translation: 'O Bjarni gritou: «Senta! Se você tivesse caído no mar aqui dentro, eu não teria conseguido te tirar tão rápido.» O Linu sentou na hora, mas a foto que ele tinha tirado estava escura demais.',
        ending: { tone: 'neutro', title: 'Foto escura', message: 'Ninguém se machucou, mas a foto não serviu para nada. Numa gruta com onda, o melhor é ficar sentado.' },
      },
    },
  },
  {
    id: 'fo-h27',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Enniberg í mjørka',
    emoji: '🏔️',
    summary: 'Em Viðareiði, a aldeia mais ao norte das Faroé, o Linu quer ver o penhasco de Enniberg, mas a neblina não ajuda.',
    cultural_context:
      'Viðareiði, na ilha de Viðoy, é o povoado mais ao norte das Faroé. Dali se chega a Enniberg, um dos penhascos marinhos mais altos da Europa, com uns 750 metros de altura.',
    start: 'start',
    glossary: [
      ['Gud gevi, at…', 'Queira Deus que… (subjuntivo presente, «gevi»)'],
      ['Harrin signi teg og varðveiti teg!', 'O Senhor te abençoe e te guarde! (bênção tradicional, no subjuntivo)'],
      ['Um eg var tú, …', 'Se eu fosse você, …'],
      ['Hevði eg bara…!', 'Se eu tivesse…! (desejo irreal)'],
      ['lætta', 'dissipar-se (a neblina)'],
      ['givist', 'desistido (particípio de «gevast»)'],
      ['berg', 'rochedo, penhasco'],
    ],
    nodes: {
      start: {
        emoji: '🌫️',
        text: 'Linu var komin til Viðareiðis at ganga upp á Villingadalsfjall og hyggja út á Enniberg. Men um morgunin lá mjørkin so tjúkkur, at hann ikki sá kirkjuna hinumegin vegin. Ragnhild, sum hann búði hjá, segði: «Gud gevi, at hann lættir, áðrenn tú fert!»',
        translation: 'O Linu tinha vindo a Viðareiði para subir o Villingadalsfjall e olhar para Enniberg. Mas de manhã a neblina estava tão grossa que ele não enxergava a igreja do outro lado da rua. A Ragnhild, em cuja casa ele estava hospedado, disse: «Queira Deus que ela se dissipe antes de você sair!»',
        choices: [
          { text: 'Linu spurdi, hvat hon hevði gjørt í hansara stað.', translation: 'O Linu perguntou o que ela faria no lugar dele.', next: 'rad' },
          { text: 'Linu fór beinanvegin avstað upp á fjallið.', translation: 'O Linu saiu na hora para a montanha.', next: 'mjorki' },
          {
            text: 'Linu takkaði Ragnhild, tí at mjørkin var farin.',
            translation: 'O Linu agradeceu à Ragnhild porque a neblina tinha ido embora.',
            wrong: '«Gud gevi, at hann lættir» é um desejo, com o subjuntivo «gevi»: QUEIRA DEUS que a neblina se dissipe. Ela ainda estava lá, tão grossa que nem a igreja se via.',
          },
        ],
      },
      rad: {
        emoji: '☕',
        text: 'Ragnhild hugsaði seg um. «Um eg var tú, fór eg ikki avstað fyrr enn um middagin,» segði hon. «Eftir mínum royndum lættir mjørkin ofta um tað mundið.»',
        translation: 'A Ragnhild pensou um pouco. «Se eu fosse você, só sairia lá pelo meio-dia», disse ela. «Pela minha experiência, a neblina muitas vezes se dissipa por volta dessa hora.»',
        choices: [
          { text: 'Linu varð verandi og drakk kaffi við Ragnhild.', translation: 'O Linu ficou e tomou café com a Ragnhild.', next: 'kaffi' },
          { text: 'Linu fór avstað kortini.', translation: 'O Linu saiu mesmo assim.', next: 'mjorki' },
        ],
      },
      kaffi: {
        emoji: '👵',
        text: 'Meðan tey drukku kaffi, segði Ragnhild frá, at abbi hennara hevði farið eftir fugli undir Enniberg. «Hevði hann livað í dag, hevði hann sagt tær, at bergið er vakrast í mjørka,» segði hon og flenti. Um middagin fór sólin at skína gjøgnum mjørkan.',
        translation: 'Enquanto tomavam café, a Ragnhild contou que o avô dela caçava aves ao pé de Enniberg. «Se ele estivesse vivo hoje, teria dito que o penhasco é mais bonito na neblina», disse ela, rindo. Ao meio-dia, o sol começou a atravessar a neblina.',
        choices: [{ text: 'Linu fór nú avstað.', translation: 'Agora o Linu saiu.', next: 'upp' }],
      },
      mjorki: {
        emoji: '😰',
        text: 'Uppi í fjallinum var mjørkin enn tjúkkari. Linu kundi ikki síggja, hvar gøtan fór, og hann mintist, at Ragnhild hevði sagt, at har eru brattir hamrar á báðum síðum. «Hevði eg bara lurtað eftir henni!» hugsaði hann.',
        translation: 'Na montanha, a neblina estava ainda mais grossa. O Linu não conseguia ver para onde a trilha ia, e se lembrou de que a Ragnhild tinha dito que ali há penhascos íngremes dos dois lados. «Se eu tivesse escutado ela!», pensou.',
        choices: [
          { text: 'Linu vendi aftur niður í bygdina.', translation: 'O Linu voltou para a aldeia.', next: 'aftur' },
          {
            text: 'Linu gekk víðari, tí at Ragnhild hevði sagt, at gøtan var trygg í mjørka.',
            translation: 'O Linu seguiu em frente, porque a Ragnhild tinha dito que a trilha era segura na neblina.',
            wrong: 'A Ragnhild disse que há «brattir hamrar á báðum síðum», penhascos íngremes dos dois lados. E o próprio Linu pensa «Hevði eg bara lurtað eftir henni!»: SE EU TIVESSE escutado ela! Ele se arrepende de não ter seguido o conselho.',
          },
        ],
      },
      aftur: {
        emoji: '🏠',
        text: 'Ragnhild stóð í durunum, tá ið hann kom aftur. Hon segði einki, men setti ein kopp av kaffi fram fyri hann. Um middagin lætti mjørkin, júst sum hon hevði sagt.',
        translation: 'A Ragnhild estava na porta quando ele voltou. Ela não disse nada, mas pôs uma xícara de café na frente dele. Ao meio-dia, a neblina se dissipou, bem como ela tinha dito.',
        choices: [
          { text: 'Linu fór upp aftur.', translation: 'O Linu subiu de novo.', next: 'upp' },
          { text: 'Linu var so móður, at hann varð verandi inni.', translation: 'O Linu estava tão cansado que ficou em casa.', next: 'final_inni' },
        ],
      },
      upp: {
        emoji: '🌄',
        text: 'Uppi á fjallinum sá Linu Enniberg standa beint niður í havið. Hamarin var so høgur, at fuglarnir niðri við sjógvin næstan ikki vóru at síggja. Hann hugsaði, at hevði hann givist, hevði hann ongantíð sæð hetta.',
        translation: 'No alto da montanha, o Linu viu Enniberg descendo reto até o mar. O penhasco era tão alto que as aves lá embaixo, perto da água, quase não se enxergavam. Ele pensou que, se tivesse desistido, nunca teria visto aquilo.',
        choices: [{ text: 'Linu fór niður aftur at siga Ragnhild frá.', translation: 'O Linu desceu para contar tudo à Ragnhild.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🙏',
        text: 'Ragnhild lurtaði, meðan Linu greiddi frá. Tá ið hann fór um kvøldið, segði hon: «Harrin signi teg og varðveiti teg!» Linu lovaði, at hann skuldi koma aftur.',
        translation: 'A Ragnhild escutou enquanto o Linu contava. Quando ele foi embora, à noite, ela disse: «O Senhor te abençoe e te guarde!» O Linu prometeu que voltaria.',
        ending: { tone: 'bom', title: 'Acima da neblina', message: 'Com paciência e o conselho certo, o Linu viu um dos penhascos mais altos da Europa.' },
      },
      final_inni: {
        emoji: '🛏️',
        text: 'Linu svav allan seinnapartin. Tá ið hann vaknaði, var mjørkin komin aftur, og Enniberg hvarv aftur í tí gráa.',
        translation: 'O Linu dormiu a tarde inteira. Quando acordou, a neblina tinha voltado, e Enniberg sumiu de novo no cinza.',
        ending: { tone: 'neutro', title: 'Janela perdida', message: 'A neblina abriu por algumas horas, e o Linu estava dormindo. Enniberg fica para outro dia.' },
      },
    },
  },
  // ───────────────────────── B2.2 ─────────────────────────
  {
    id: 'fo-h28',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Flytiboð í Runavík',
    emoji: '🏛️',
    summary: 'Recém-mudado para Runavík, o Linu vai à prefeitura registrar o endereço e descobre o formalíssimo «tygum».',
    cultural_context:
      'Quem se muda para as Faroé ou dentro delas avisa a mudança ao município; os moradores têm um número pessoal, o «p-tal», usado em quase todos os serviços públicos. Runavík, no sul de Eysturoy, é sede de um dos municípios mais populosos do país.',
    start: 'start',
    glossary: [
      ['tygum', 'o senhor / a senhora (tratamento formal antigo, hoje raro; o verbo vai no plural)'],
      ['flytiboð', 'aviso de mudança de endereço'],
      ['Eg vildi fegin latið inn…', 'Eu gostaria de entregar… (pedido educado)'],
      ['p-tal', 'número pessoal de identificação'],
      ['samleikaprógv', 'documento de identidade'],
      ['leigusáttmáli', 'contrato de aluguel'],
      ['viðvíkjandi', 'referente a, a respeito de'],
      ['hjálagt', 'em anexo'],
    ],
    nodes: {
      start: {
        emoji: '🏢',
        text: 'Linu var fluttur til Runavíkar og skuldi lata flytiboð inn á kommununi. Á skrivstovuni sat ein eldri maður, sum spurdi: «Hvat kann eg gera fyri tygum?» Linu var ikki vanur við, at nakar segði «tygum» við hann.',
        translation: 'O Linu tinha se mudado para Runavík e precisava entregar o aviso de mudança na prefeitura. No guichê estava um senhor que perguntou: «Em que posso servi-lo?» O Linu não estava acostumado a ser tratado por «tygum».',
        choices: [
          { text: '«Eg vildi fegin latið inn eitt flytiboð.»', translation: '«Eu gostaria de entregar um aviso de mudança.»', next: 'flytibod' },
          { text: '«Hey! Eg eri Linu, og eg búgvi her nú.»', translation: '«Oi! Eu sou o Linu e moro aqui agora.»', next: 'uformligt' },
          {
            text: 'Linu vendi sær við, tí at hann helt, at maðurin tosaði við onkran annan.',
            translation: 'O Linu olhou para trás, porque achou que o homem estava falando com outra pessoa.',
            wrong: '«Tygum» é o tratamento formal antigo, como «o senhor»: o funcionário falava com o próprio Linu, por cortesia. O verbo com «tygum» fica no plural, mas é uma pessoa só.',
          },
        ],
      },
      uformligt: {
        emoji: '😄',
        text: 'Maðurin flenti og segði, at tað var í lagi. «Tað eru ikki so nógv, sum siga tygum longur,» segði hann. «Men her á skrivstovuni royni eg at halda gamla siðin.» Síðan spurdi hann, hvat Linu ætlaði at fáa gjørt.',
        translation: 'O homem riu e disse que tudo bem. «Já não é muita gente que diz «tygum»», disse ele. «Mas aqui no escritório eu tento manter o costume antigo.» Depois perguntou o que o Linu pretendia resolver.',
        choices: [{ text: 'Linu segði, at hann skuldi lata flytiboð inn.', translation: 'O Linu disse que precisava entregar o aviso de mudança.', next: 'flytibod' }],
      },
      flytibod: {
        emoji: '📄',
        text: 'Maðurin gav honum eitt skjal og segði: «Tygum mugu fylla skjalið út og lata tað inn saman við samleikaprógvi og leigusáttmála.» Linu hevði vegabrævið við, men leigusáttmálan hevði hann gloymt heima.',
        translation: 'O homem lhe deu um formulário e disse: «O senhor precisa preencher o formulário e entregá-lo junto com um documento de identidade e o contrato de aluguel.» O Linu estava com o passaporte, mas tinha esquecido o contrato em casa.',
        choices: [
          { text: 'Linu spurdi, um hann kundi senda sáttmálan við telduposti.', translation: 'O Linu perguntou se podia mandar o contrato por e-mail.', next: 'teldupostur' },
          { text: 'Linu spurdi, hvat eitt p-tal er.', translation: 'O Linu perguntou o que é um «p-tal».', next: 'ptal' },
          { text: 'Linu fór heim eftir sáttmálanum.', translation: 'O Linu foi em casa buscar o contrato.', next: 'final_stongt' },
        ],
      },
      ptal: {
        emoji: '🔢',
        text: 'Maðurin greiddi frá, at p-talið er eitt persónligt tal, sum øll, ið búgva í Føroyum, fáa. «Tað verður brúkt, tá ið tygum fara til lækna, í bankan og á skattstovuna,» segði hann. «Uttan tað er lívið í Føroyum sera torført.»',
        translation: 'O homem explicou que o «p-tal» é um número pessoal que todos os que moram nas Faroé recebem. «Ele é usado quando o senhor vai ao médico, ao banco e à Receita», disse ele. «Sem ele, a vida nas Faroé fica muito difícil.»',
        choices: [
          { text: 'Linu spurdi, um hann kundi senda sáttmálan við telduposti.', translation: 'O Linu perguntou se podia mandar o contrato por e-mail.', next: 'teldupostur' },
          { text: 'Linu fór heim eftir sáttmálanum.', translation: 'O Linu foi em casa buscar o contrato.', next: 'final_stongt' },
        ],
      },
      teldupostur: {
        emoji: '📧',
        text: 'Maðurin segði, at tað lat seg gera. «Tygum kunnu senda hann til kommununa í dag,» segði hann. «Men gloymið ikki at skriva fulla navnið og nýggju adressuna í teldupostin.»',
        translation: 'O homem disse que dava para fazer isso. «O senhor pode mandá-lo hoje para a prefeitura», disse ele. «Mas não se esqueça de escrever o nome completo e o endereço novo no e-mail.»',
        choices: [{ text: 'Linu fór heim at skriva teldupostin.', translation: 'O Linu foi para casa escrever o e-mail.', next: 'skriva' }],
      },
      skriva: {
        emoji: '⌨️',
        text: 'Um kvøldið skrivaði Linu teldupostin. Hann royndi at vera so formligur sum gjørligt: «Góðu tit. Viðvíkjandi flytiboðinum, sum eg lat inn í dag, sendi eg hjálagt leigusáttmálan. Vinarliga, Linu.»',
        translation: 'À noite, o Linu escreveu o e-mail. Ele tentou ser o mais formal possível: «Prezados. Com referência ao aviso de mudança que entreguei hoje, envio em anexo o contrato de aluguel. Atenciosamente, Linu.»',
        choices: [
          { text: 'Linu las teldupostin ígjøgnum, legði sáttmálan við og sendi hann.', translation: 'O Linu releu o e-mail, anexou o contrato e mandou.', next: 'final_bom' },
          {
            text: 'Linu sendi teldupostin, men gloymdi at skriva adressuna, tí at maðurin hevði sagt, at hon ikki var neyðug.',
            translation: 'O Linu mandou o e-mail, mas esqueceu de escrever o endereço, porque o homem tinha dito que não era necessário.',
            wrong: 'O funcionário disse o contrário: «gloymið ikki at skriva fulla navnið og nýggju adressuna», NÃO SE ESQUEÇA de escrever o nome completo e o endereço novo. «Gloymið» é o imperativo formal (no plural, por causa do «tygum»).',
          },
        ],
      },
      final_bom: {
        emoji: '✉️',
        text: 'Tveir dagar seinni fekk Linu eitt bræv frá kommununi. Í brævinum stóð, at flytiboðið var skrásett, og at p-talið fór at verða sent honum við posti. Seinast í brævinum stóð: «Hjartaliga vælkomin til Runavíkar.»',
        translation: 'Dois dias depois, o Linu recebeu uma carta da prefeitura. A carta dizia que a mudança estava registrada e que o «p-tal» seria enviado pelo correio. No fim da carta estava escrito: «Seja muito bem-vindo a Runavík.»',
        ending: { tone: 'bom', title: 'Morador oficial', message: 'Com um e-mail formal e o contrato em anexo, o Linu virou morador oficial de Runavík.' },
      },
      final_stongt: {
        emoji: '🔒',
        text: 'Tá ið Linu kom aftur við sáttmálanum, var skrivstovan stongd. Á durunum hekk ein seðil: «Skrivstovan er opin frá klokkan 9 til 15.» Klokkan var tíggju minuttir yvir tríggj.',
        translation: 'Quando o Linu voltou com o contrato, o escritório estava fechado. Na porta havia um aviso: «O escritório funciona das 9h às 15h.» Eram três e dez.',
        ending: { tone: 'neutro', title: 'Por dez minutos', message: 'O Linu vai ter que voltar amanhã. Repartição tem horário, e às vezes um e-mail resolve mais rápido.' },
      },
    },
  },
  {
    id: 'fo-h29',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Bræv til Tinganess',
    emoji: '📨',
    summary: 'Em Tinganes, o bairro do governo em Tórshavn, o Linu aprende que, para visitar a sede do governo, é preciso escrever um pedido formal.',
    cultural_context:
      'Tinganes, a península de casinhas de madeira com telhados de grama no porto de Tórshavn, é um dos lugares de assembleia mais antigos do mundo: o «ting» se reunia ali desde a Era Viking. Hoje as casas abrigam o governo das Faroé, e o parlamento (Løgtingið) funciona em outro prédio da cidade.',
    start: 'start',
    glossary: [
      ['bert eftir avtalu', 'só com hora marcada'],
      ['fyrispurningur', 'pedido de informação, consulta'],
      ['Takk fyri tín fyrispurning.', 'Obrigado pela sua consulta. (fórmula de resposta)'],
      ['Við vinarligari heilsan / Vinarliga', 'Atenciosamente (fechos formais de carta)'],
      ['Vit biðja teg vinarliga at…', 'Pedimos gentilmente que você… (pedido formal)'],
      ['varð tikin ímóti', 'foi recebido (passiva)'],
      ['lesandi', 'estudante (universitário)'],
      ['hósdagur', 'quinta-feira'],
    ],
    nodes: {
      start: {
        emoji: '🏘️',
        text: 'Linu gekk úti á Tinganesi millum smáu húsini. Hann var farin at skriva eina grein um føroyska søgu og vildi fegin sæð inn í eitt av húsunum. Á einum skelti við durnar stóð: «Løgmansskrivstovan. Vitjan bert eftir avtalu.»',
        translation: 'O Linu andava por Tinganes, entre as casinhas. Ele tinha começado a escrever um artigo sobre a história das Faroé e gostaria muito de ver uma das casas por dentro. Numa placa junto à porta estava escrito: «Gabinete do Primeiro-Ministro. Visitas só com hora marcada.»',
        choices: [
          { text: 'Linu bankaði á durnar kortini.', translation: 'O Linu bateu na porta mesmo assim.', next: 'banka' },
          { text: 'Linu fór at skriva ein teldupost at biðja um eina avtalu.', translation: 'O Linu foi escrever um e-mail para pedir um horário.', next: 'post' },
          {
            text: 'Linu gekk beint inn, tí at skeltið segði, at øll vóru vælkomin.',
            translation: 'O Linu entrou direto, porque a placa dizia que todos eram bem-vindos.',
            wrong: 'A placa dizia «Vitjan bert eftir avtalu»: visita SÓ («bert») com hora marcada («eftir avtalu»). Em repartição, sem agendamento não se entra.',
          },
        ],
      },
      banka: {
        emoji: '🚪',
        text: 'Ein ung kvinna lat upp og hugdi vinarliga at honum. «Tíverri kunnu vit ikki taka ímóti vitjandi uttan avtalu,» segði hon. «Men tú ert vælkomin at senda okkum ein fyrispurning.»',
        translation: 'Uma moça abriu a porta e olhou para ele com simpatia. «Infelizmente não podemos receber visitantes sem hora marcada», disse ela. «Mas você pode nos enviar uma consulta.»',
        choices: [{ text: 'Linu takkaði og fór at skriva.', translation: 'O Linu agradeceu e foi escrever.', next: 'post' }],
      },
      post: {
        emoji: '☕',
        text: 'Linu settist á eitt kaffihús við Vaglið at skriva. Hann visti, at hann mátti skriva formliga, men hann var ikki vísur í, hvussu ein byrjar. Fyrst skrivaði hann: «Hey! Kann eg koma á vitjan í morgin?»',
        translation: 'O Linu sentou num café perto do Vaglið para escrever. Ele sabia que precisava escrever formalmente, mas não tinha certeza de como se começa. Primeiro escreveu: «Oi! Posso fazer uma visita amanhã?»',
        choices: [
          { text: 'Linu strikaði tað og byrjaði av nýggjum.', translation: 'O Linu apagou aquilo e começou de novo.', next: 'formligt' },
          { text: 'Linu sendi teldupostin, sum hann var.', translation: 'O Linu mandou o e-mail do jeito que estava.', next: 'final_stutt' },
        ],
      },
      formligt: {
        emoji: '✍️',
        text: 'Í seinna royndini skrivaði hann: «Góða Løgmansskrivstova. Eg eri ein útlendskur lesandi, sum skrivar eina grein um søgu Tinganess. Eg vildi fegin spurt, um tað er gjørligt at fáa eina stutta vitjan í einum av húsunum. Vinarliga, Linu.»',
        translation: 'Na segunda tentativa, escreveu: «Prezado Gabinete do Primeiro-Ministro. Sou um estudante estrangeiro e escrevo um artigo sobre a história de Tinganes. Gostaria de perguntar se é possível fazer uma breve visita a uma das casas. Atenciosamente, Linu.»',
        choices: [{ text: 'Linu sendi teldupostin.', translation: 'O Linu mandou o e-mail.', next: 'svar' }],
      },
      svar: {
        emoji: '📬',
        text: 'Dagin eftir kom eitt svar: «Takk fyri tín fyrispurning. Vit kunnu bjóða tær eina stutta vitjan hósdagin klokkan 14. Vit biðja teg vinarliga at hava samleikaprógv við. Við vinarligari heilsan.»',
        translation: 'No dia seguinte chegou uma resposta: «Obrigado pela sua consulta. Podemos lhe oferecer uma breve visita na quinta-feira às 14h. Pedimos gentilmente que traga um documento de identidade. Atenciosamente.»',
        choices: [
          { text: 'Linu svaraði og játtaði tíðini.', translation: 'O Linu respondeu e confirmou o horário.', next: 'vitjan' },
          {
            text: 'Linu fór til Tinganess mánadagin klokkan tvey.',
            translation: 'O Linu foi a Tinganes na segunda-feira às duas.',
            wrong: 'A resposta marcava «hósdagin klokkan 14»: QUINTA-FEIRA às 14h. «Mánadagur» é segunda-feira. Em correspondência formal, vale a pena ler data e hora com calma.',
          },
        ],
      },
      vitjan: {
        emoji: '🏛️',
        text: 'Hósdagin varð Linu tikin ímóti av eini kvinnu frá skrivstovuni, sum vísti honum runt. Hon greiddi frá, at tingið varð hildið her longu í víkingatíð, og at húsini hava verið brúkt til nógv ymiskt síðan. Linu skrivaði so skjótt, at hondin næstan datt av.',
        translation: 'Na quinta, o Linu foi recebido por uma funcionária do gabinete, que lhe mostrou o lugar. Ela explicou que o «ting» já se reunia ali na Era Viking e que as casas foram usadas para muitas coisas diferentes desde então. O Linu escreveu tão rápido que a mão quase caiu.',
        choices: [{ text: 'Linu takkaði fyri vitjanina.', translation: 'O Linu agradeceu pela visita.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '📰',
        text: 'Greinin, sum Linu skrivaði, varð prentað í skúlablaðnum. Seinast í greinini takkaði hann Løgmansskrivstovuni fyri ein stuttligan og lærurikan dag.',
        translation: 'O artigo que o Linu escreveu foi publicado no jornal da escola. No fim do artigo, ele agradeceu ao Gabinete do Primeiro-Ministro por um dia divertido e instrutivo.',
        ending: { tone: 'bom', title: 'A porta certa', message: 'Um e-mail formal abriu as portas de Tinganes, um dos lugares de assembleia mais antigos do mundo.' },
      },
      final_stutt: {
        emoji: '📭',
        text: 'Svarið kom eftir eini viku: «Takk fyri. Vinarliga send okkum ein fyrispurning við fullum navni og endamálinum við vitjanini.» Tá var greinin longu liðug, og Linu hevði einki sæð inni á Tinganesi.',
        translation: 'A resposta veio depois de uma semana: «Obrigado. Por gentileza, envie-nos uma consulta com o nome completo e o objetivo da visita.» A essa altura o artigo já estava pronto, e o Linu não tinha visto nada por dentro de Tinganes.',
        ending: { tone: 'neutro', title: '«Oi!» não abre porta', message: 'Na repartição, um e-mail informal demais pode atrasar tudo. O registro formal também é uma ferramenta.' },
      },
    },
  },
  {
    id: 'fo-h30',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Pengapungurin á Sandi',
    emoji: '👛',
    summary: 'Em Sandoy, o Linu perde a carteira e precisa comunicar o sumiço à polícia, no registro mais formal que consegue.',
    cultural_context:
      'Sandoy deve o nome às praias de areia, raras nas Faroé; a maior aldeia da ilha é Sandur. Desde o fim de 2023, um túnel submarino liga Sandoy a Streymoy, e dá para ir de ônibus de Tórshavn até lá sem pegar balsa.',
    start: 'start',
    glossary: [
      ['pengapungur', 'carteira'],
      ['løgreglan', 'a polícia'],
      ['boða frá', 'comunicar, notificar'],
      ['burturmistur', 'perdido, extraviado'],
      ['verður funnin', 'é encontrado (passiva)'],
      ['innlatin', 'entregue (particípio de «lata inn»)'],
      ['samsvara við', 'corresponder a'],
      ['heinta', 'buscar, retirar'],
    ],
    nodes: {
      start: {
        emoji: '🚌',
        text: 'Linu kom til Sands við bussinum gjøgnum nýggja tunnilin. Tá ið hann skuldi keypa sær ein ís í handlinum, fann hann ikki pengapungin. Hann var vísur í, at hann hevði havt hann í bussinum.',
        translation: 'O Linu chegou a Sandur de ônibus pelo túnel novo. Quando foi comprar um sorvete no mercadinho, não achou a carteira. Ele tinha certeza de que estava com ela no ônibus.',
        choices: [
          { text: 'Linu ringdi til løgregluna.', translation: 'O Linu ligou para a polícia.', next: 'logreglan' },
          { text: 'Linu spurdi bussførarin, sum enn stóð við bussin.', translation: 'O Linu perguntou ao motorista, que ainda estava perto do ônibus.', next: 'bussforari' },
        ],
      },
      bussforari: {
        emoji: '🧑‍✈️',
        text: 'Bussførarin leitaði undir sessunum, men fann einki. Hann segði, at tað er skilagott at boða løgregluni frá. «Tey skráseta alt, sum verður funnið,» segði hann.',
        translation: 'O motorista procurou embaixo dos bancos, mas não achou nada. Ele disse que o sensato é avisar a polícia. «Eles registram tudo o que é encontrado», disse.',
        choices: [{ text: 'Linu ringdi til løgregluna.', translation: 'O Linu ligou para a polícia.', next: 'logreglan' }],
      },
      logreglan: {
        emoji: '📞',
        text: 'Ein kvinna svaraði: «Løgreglan, góðan dag. Hvat kann eg hjálpa tygum við?» Linu segði, at hann vildi fegin boðað frá einum burturmistum pengapungi. Kvinnan bað hann greiða frá, hvussu hann sær út, og hvar hann seinast varð sæddur.',
        translation: 'Uma mulher atendeu: «Polícia, bom dia. Em que posso ajudar o senhor?» O Linu disse que gostaria de comunicar a perda de uma carteira. A mulher pediu que ele descrevesse como ela é e onde foi vista pela última vez.',
        choices: [
          { text: 'Linu lýsti pengapungin nágreiniliga.', translation: 'O Linu descreveu a carteira em detalhes.', next: 'lysing' },
          {
            text: 'Linu greiddi frá, hvussu bussurin sá út.',
            translation: 'O Linu explicou como era o ônibus.',
            wrong: 'A policial pediu para descrever «hvussu hann sær út»: como ELE é. «Hann» retoma «pengapungur» (masculino), a carteira, e não o ônibus. Em feroês, objetos também são «hann» ou «hon», conforme o gênero.',
          },
        ],
      },
      lysing: {
        emoji: '📝',
        text: '«Hann er brúnur og úr leðri, og í honum eru bankakort og eitt vegabræv,» segði Linu. Kvinnan skrásetti alt og gav honum eitt málsnummar. «Um hann verður funnin, fáa tygum boð beinanvegin,» segði hon.',
        translation: '«Ela é marrom, de couro, e dentro tem cartões do banco e um passaporte», disse o Linu. A mulher registrou tudo e lhe deu um número de protocolo. «Se ela for encontrada, o senhor será avisado imediatamente», disse ela.',
        choices: [
          { text: 'Linu takkaði og fór at ganga ein túr á sandinum.', translation: 'O Linu agradeceu e foi dar uma volta na praia.', next: 'sandur' },
          { text: 'Linu fór aftur við bussinum at leita sjálvur.', translation: 'O Linu voltou de ônibus para procurar por conta própria.', next: 'final_leita' },
        ],
      },
      sandur: {
        emoji: '🏖️',
        text: 'Linu gekk eftir tí langa sandinum við sjógvin. Tað var kalt, men vakurt, og hann gloymdi næstan pengapungin. Tá ið hann kom aftur til bygdina, ringdi telefonin.',
        translation: 'O Linu caminhou pela longa praia de areia à beira-mar. Estava frio, mas bonito, e ele quase esqueceu a carteira. Quando voltou para a aldeia, o telefone tocou.',
        choices: [{ text: 'Linu svaraði.', translation: 'O Linu atendeu.', next: 'funnin' }],
      },
      funnin: {
        emoji: '✅',
        text: '«Góðan dag, tað er løgreglan. Ein pengapungur, sum samsvarar við lýsingina, er innlatin av einum bussførara. Tygum kunnu heinta hann á løgreglustøðini í Havn eftir klokkan fýra.»',
        translation: '«Bom dia, aqui é a polícia. Uma carteira que corresponde à descrição foi entregue por um motorista de ônibus. O senhor pode retirá-la na delegacia de Tórshavn depois das quatro.»',
        choices: [
          { text: 'Linu fór til Havnar og kom á løgreglustøðina eftir klokkan fýra.', translation: 'O Linu foi para Tórshavn e chegou à delegacia depois das quatro.', next: 'final_bom' },
          {
            text: 'Linu fór beinanvegin til løgreglustøðina á Sandi.',
            translation: 'O Linu foi na hora para a delegacia de Sandur.',
            wrong: 'A polícia disse «á løgreglustøðini í Havn eftir klokkan fýra»: na delegacia de TÓRSHAVN («Havn») e só DEPOIS das quatro.',
          },
        ],
      },
      final_bom: {
        emoji: '💌',
        text: 'Á løgreglustøðini skrivaði Linu undir, at hann hevði fingið pengapungin aftur. Alt var í honum, eisini peningurin til ísin. Um kvøldið sendi hann bussførarinum eitt takkarbræv.',
        translation: 'Na delegacia, o Linu assinou que tinha recebido a carteira de volta. Estava tudo lá dentro, até o dinheiro do sorvete. À noite, ele mandou uma carta de agradecimento ao motorista.',
        ending: { tone: 'bom', title: 'Tudo em ordem', message: 'Com uma comunicação formal e bem feita, a carteira do Linu voltou inteirinha.' },
      },
      final_leita: {
        emoji: '🔍',
        text: 'Linu leitaði í bussinum í tveir tímar uttan at finna nakað. Tá ið hann kom til Havnar, var løgreglustøðin stongd. Hann frætti ikki fyrr enn dagin eftir, at pengapungurin var funnin.',
        translation: 'O Linu procurou no ônibus por duas horas sem achar nada. Quando chegou a Tórshavn, a delegacia estava fechada. Ele só soube no dia seguinte que a carteira tinha sido encontrada.',
        ending: { tone: 'neutro', title: 'Um dia a mais', message: 'A carteira apareceu, mas o Linu só a recuperou no dia seguinte. Às vezes, é melhor deixar a repartição fazer o trabalho dela.' },
      },
    },
  },
  // ───────────────────────── B2.3 ─────────────────────────
  {
    id: 'fo-h31',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Telda og tyrla',
    emoji: '💻',
    summary: 'Na biblioteca de Tórshavn, o Linu pede um «komputari» e descobre que o feroês prefere criar palavras próprias a pegar emprestado do dinamarquês e do inglês.',
    cultural_context:
      'O feroês tem uma forte tradição purista: em vez de emprestar palavras, cria termos novos com raízes nórdicas. «Telda» (computador), que lembra o verbo «telja» (contar), e «tyrla» (helicóptero) são exemplos famosos; na fala do dia a dia, porém, muitas palavrinhas dinamarquesas continuam vivas.',
    start: 'start',
    glossary: [
      ['ein telda', 'um computador'],
      ['ein tyrla', 'um helicóptero'],
      ['eitt flogfar', 'um avião'],
      ['eitt nýggjorð', 'um neologismo, uma palavra nova'],
      ['bókasavnið', 'a biblioteca'],
      ['tað ber til', 'dá, é possível'],
      ['tað ger einki', 'não faz mal'],
      ['hava rætt', 'ter razão'],
    ],
    nodes: {
      start: {
        emoji: '📚',
        text: 'Linu situr á bókasavninum í Tórshavn og skal skriva eitt bræv til ein vin í Brasil. Hann spyr bókavørðin, eina eldri kvinnu, ið eitur Turið, um hann kann fáa lánt ein «komputara». Turið hyggur at honum yvir brillurnar og brosar. «Tú hugsar um eina teldu», sigur hon. «Her í Føroyum siga vit telda, og tað orðið dámar okkum sera væl.»',
        translation:
          'O Linu está sentado na biblioteca de Tórshavn e precisa escrever uma carta para um amigo no Brasil. Ele pergunta à bibliotecária, uma senhora chamada Turið, se pode pegar emprestado um «komputari». A Turið olha para ele por cima dos óculos e sorri. «Você quer dizer uma telda», diz ela. «Aqui nas Faroé a gente diz telda, e gostamos muito dessa palavra.»',
        choices: [
          { text: 'Spyrja, hví tey ikki bert siga «komputari».', translation: 'Perguntar por que eles não dizem simplesmente «komputari».', next: 'purisma' },
          { text: 'Siga, at hann ikki kennir orðið, og biðja hana greiða frá.', translation: 'Dizer que não conhece a palavra e pedir que ela explique.', next: 'telda' },
        ],
      },
      purisma: {
        emoji: '🛡️',
        text: 'Turið setur seg niður og fortelur, at føroyingar í meira enn hundrað ár hava roynt at verja málið móti donskum og enskum orðum. Í staðin fyri at lána orð, gera tey nýggj orð úr gomlum norrønum røtum. «Telda» minnir um sagnorðið «telja», tí at ein telda fyrst og fremst telur. «Tað er ikki altíð lætt», sigur hon, «men soleiðis livir málið víðari.»',
        translation:
          'A Turið se senta e conta que, há mais de cem anos, os feroeses tentam proteger a língua contra palavras dinamarquesas e inglesas. Em vez de pegar palavras emprestadas, eles fazem palavras novas a partir de velhas raízes nórdicas. «Telda» lembra o verbo «telja» (contar), porque um computador, antes de tudo, conta. «Nem sempre é fácil», diz ela, «mas é assim que a língua continua viva.»',
        choices: [{ text: 'Biðja hana vísa honum fleiri nýggjorð.', translation: 'Pedir que ela mostre mais neologismos.', next: 'telda' }],
      },
      telda: {
        emoji: '💻',
        text: 'Turið skrivar tvey orð á eitt blað: «telda» og «tyrla». Hon greiðir frá, at bæði eru nýggjorð, gjørd úr føroyskum orðum í staðin fyri at koma úr enskum, og at ein tyrla er tað, sum onnur kalla ein helikoptara. So skrivar hon eitt triðja orð, «flogfar», og spyr, hvat hann heldur, at tað merkir. «Hugsa um sagnorðið flúgva», sigur hon.',
        translation:
          'A Turið escreve duas palavras numa folha: «telda» e «tyrla». Ela explica que as duas são neologismos, feitos de palavras feroesas em vez de virem do inglês, e que uma tyrla é o que os outros chamam de helicóptero. Então ela escreve uma terceira palavra, «flogfar», e pergunta o que ele acha que significa. «Pense no verbo flúgva (voar)», diz ela.',
        choices: [
          { text: '«Tað er eitt far, sum flýgur í luftini!»', translation: '«É um veículo que voa pelo ar — um avião!»', next: 'bara' },
          {
            text: '«Eitt skip, sum siglir á havinum.»',
            translation: '«Um navio que navega no mar.»',
            wrong: '«Flogfar» junta «flog» (voo, da família de «flúgva», voar) e «far» (veículo). É um avião, não um navio: a própria Turið deu a dica do verbo «voar».',
          },
        ],
      },
      bara: {
        emoji: '🗣️',
        text: '«Tú hevur rætt!», sigur Turið glað. Í tí sama hoyra tey ein ungan drong við næsta borðið siga í telefonina: «Eg skal lige koma, bara ein minutt.» Turið hvískrar, at tað er júst tað, puristarnir berjast ímóti: donsk orð sum «lige» og «bara», ið sníkja seg inn í gerandismálið. «Rætt føroyskt hevði verið: Eg komi beint», sigur hon, «men tað ger einki; mál broytast, og ungdómurin tosar, sum hann vil.»',
        translation:
          '«Você tem razão!», diz a Turið, contente. Nesse momento, eles ouvem um rapaz na mesa ao lado dizer ao telefone: «Eg skal lige koma, bara ein minutt» (já vou, só um minuto). A Turið sussurra que é justamente contra isso que os puristas lutam: palavras dinamarquesas como «lige» e «bara», que vão se infiltrando na língua do dia a dia. «O feroês correto seria: Eg komi beint (já estou indo)», diz ela, «mas não faz mal; as línguas mudam, e a juventude fala como quer.»',
        choices: [
          { text: 'Spyrja, um tað er galið at siga «bara».', translation: 'Perguntar se é errado dizer «bara».', next: 'final_bom' },
          { text: 'Siga, at hann heldur fer at skriva brævið á enskum, tí tað er lættari.', translation: 'Dizer que prefere escrever a carta em inglês, porque é mais fácil.', next: 'final_neutro' },
          {
            text: '«Drongurin tosar sostatt reint føroyskt.»',
            translation: '«Então o rapaz fala um feroês puro.»',
            wrong: 'Pelo contrário: a Turið disse que «lige» e «bara» são «donsk orð», palavras dinamarquesas que se infiltram na fala. O feroês «correto», segundo os puristas, seria «Eg komi beint».',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Turið hugsar seg um og sigur, at tað er ikki galið, men at tað er gott at vita, hvaðani orðini koma. Hon letur hann fáa eina teldu og eina lítla orðabók við nýggjorðum. Linu skrivar brævið til vin sín og roynir at nýta so nógv føroysk orð, sum til ber: telda, tyrla, flogfar. Tá ið hann fer, sigur Turið: «Nú tosar tú betri føroyskt enn helmingurin av ungdóminum.»',
        translation:
          'A Turið pensa um pouco e diz que não é errado, mas que é bom saber de onde vêm as palavras. Ela lhe empresta um computador e um dicionariozinho de neologismos. O Linu escreve a carta para o amigo e tenta usar tantas palavras feroesas quanto possível: telda, tyrla, flogfar. Quando ele vai embora, a Turið diz: «Agora você fala feroês melhor que metade da juventude.»',
        ending: { tone: 'bom', title: 'Neologismos na ponta do bico', message: 'Você entendeu o purismo feroês — e que dá para respeitá-lo sem brigar com quem diz «bara».' },
      },
      final_neutro: {
        emoji: '🤷',
        text: 'Turið hyggur eitt bil at honum og sigur so vinaliga: «Tað ber sjálvandi til, men so missir tú nakað.» Hon letur hann fáa eina teldu, og Linu skrivar brævið á enskum. Tá ið hann fer, hoyrir hann Turið siga «telda, tyrla, flogfar» lágt við seg sjálva, sum var tað eitt kvæði. Linu hugsar, at hann næstu ferð kanska skal royna tað á føroyskum.',
        translation:
          'A Turið olha para ele por um instante e diz, gentil: «Claro que dá, mas aí você perde alguma coisa.» Ela lhe empresta um computador, e o Linu escreve a carta em inglês. Quando ele sai, ouve a Turið repetir baixinho para si mesma «telda, tyrla, flogfar», como se fosse uma balada. O Linu pensa que, da próxima vez, talvez tente em feroês.',
        ending: { tone: 'neutro', title: 'Carta em inglês', message: 'A carta saiu, mas você deixou passar a chance de usar as palavras que o feroês inventou com tanto cuidado.' },
      },
    },
  },
  {
    id: 'fo-h32',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Havið gevur, og havið tekur',
    emoji: '⚓',
    summary: 'No porto de Klaksvík, o Linu quer sair para pescar com um velho pescador que fala por expressões — e precisa entendê-las para não fazer papel de bobo.',
    cultural_context:
      'Klaksvík, na ilha de Borðoy, é a segunda maior cidade das Faroé e um dos grandes portos pesqueiros do arquipélago. O peixe é até hoje a base da economia feroesa, e o mar deixou muitas marcas na língua.',
    start: 'start',
    glossary: [
      ['hava hug at', 'estar com vontade de'],
      ['taka tað róligt', 'ficar calmo, ir com calma'],
      ['tað ber til', 'dá, é possível'],
      ['fara á sjógv', 'ir para o mar (pescar)'],
      ['vindurin leggur seg', 'o vento amaina'],
      ['ein toskur', 'um bacalhau'],
      ['epli', 'batatas'],
      ['eitt orðatak', 'uma expressão, um dito'],
    ],
    nodes: {
      start: {
        emoji: '⚓',
        text: 'Tað er tíðliga á morgni á havnini í Klaksvík, og másarnir flúgva skríggjandi yvir bátunum. Linu spyr ein gamlan fiskimann, ið eitur Jákup, um hann kann sleppa við á sjógv. Jákup hyggur upp í loftið og sigur: «Tak tað róligt, drongur. Í dag havi eg ongan hug at fara út; vindurin kemur úr norðri.» So biður hann Linu um at seta seg hjá sær.',
        translation:
          'É cedo de manhã no porto de Klaksvík, e as gaivotas voam gritando sobre os barcos. O Linu pergunta a um velho pescador chamado Jákup se pode ir junto para o mar. O Jákup olha para o céu e diz: «Calma, rapaz. Hoje não estou com a menor vontade de sair; o vento vem do norte.» Então pede que o Linu se sente ao lado dele.',
        choices: [
          { text: 'Seta seg og spyrja, hví hann ikki hevur hug at fara út.', translation: 'Sentar e perguntar por que ele não está com vontade de sair.', next: 'vindur' },
          {
            text: 'Siga, at hann skilir, at Jákup er sjúkur í dag.',
            translation: 'Dizer que entende que o Jákup está doente hoje.',
            wrong: '«Eg havi ongan hug» quer dizer «não estou com vontade». O Jákup não está doente: ele não quer sair porque «vindurin kemur úr norðri», o vento vem do norte.',
          },
        ],
      },
      vindur: {
        emoji: '🌬️',
        text: 'Jákup fortelur, at hann hevur fiskað í fimmti ár, og at hann hevur lært at lurta eftir havinum. «Havið gevur, og havið tekur», sigur hann, «og tann, sum gloymir tað, kemur ikki altíð heim aftur.» Hann greiðir frá, at norðanvindurin á vári kann gera havið so ringt, at ein lítil bátur ikki eigur at fara út. «Men seinnapartin, tá ið vindurin hevur lagt seg, ber tað kanska til.»',
        translation:
          'O Jákup conta que pesca há cinquenta anos e que aprendeu a escutar o mar. «O mar dá, e o mar tira», diz ele, «e quem esquece isso nem sempre volta para casa.» Ele explica que o vento norte na primavera pode deixar o mar tão ruim que um barco pequeno não deve sair. «Mas à tarde, quando o vento tiver amainado, talvez dê.»',
        choices: [
          { text: 'Siga, at hann gjarna bíðar til seinnapartin.', translation: 'Dizer que espera com prazer até a tarde.', next: 'bida' },
          { text: 'Spyrja, hvat «havið gevur, og havið tekur» merkir.', translation: 'Perguntar o que quer dizer «o mar dá, e o mar tira».', next: 'ordatak' },
        ],
      },
      ordatak: {
        emoji: '🌊',
        text: 'Jákup sigur einki eina løtu. Síðan fortelur hann, at havið hevur givið Klaksvík alt, sum býurin eigur: fisk, arbeiði og pening. «Men tað hevur eisini tikið mangan góðan mann», sigur hann lágt. «Tí siga vit tað. Tað er ikki eitt orðatak, sum ein sigur fyri at vera stuttligur.» Linu skilir, at orðini ikki bert eru fagurt tos, men ein minning um tey, ið ikki komu heim.',
        translation:
          'O Jákup fica um tempo em silêncio. Depois conta que o mar deu a Klaksvík tudo o que a cidade tem: peixe, trabalho e dinheiro. «Mas também levou muito homem bom», diz baixinho. «Por isso dizemos isso. Não é uma expressão que se diz para ser engraçado.» O Linu entende que as palavras não são só um jeito bonito de falar, mas uma lembrança dos que não voltaram.',
        choices: [{ text: 'Siga, at hann gjarna bíðar til seinnapartin.', translation: 'Dizer que espera com prazer até a tarde.', next: 'bida' }],
      },
      bida: {
        emoji: '⏳',
        text: 'Seinnapartin hevur vindurin lagt seg, og Jákup kemur gangandi við einum lítlum smíli. «Nú ber tað til», sigur hann. «Men eitt skalt tú lova mær: tú gert, sum eg sigi, og tú tekur tað róligt.» Linu fer umborð, og báturin glíður út úr havnini, framvið húsunum og kirkjuni.',
        translation:
          'À tarde o vento amainou, e o Jákup vem andando com um sorrisinho. «Agora dá», diz ele. «Mas uma coisa você tem que me prometer: faz o que eu disser e vai com calma.» O Linu sobe a bordo, e o barco desliza para fora do porto, passando pelas casas e pela igreja.',
        choices: [
          { text: 'Lova at gera, sum Jákup sigur.', translation: 'Prometer fazer o que o Jákup disser.', next: 'sjogv' },
          {
            text: 'Spyrja, hví teir fara út, nú vindurin enn er so harður.',
            translation: 'Perguntar por que vão sair, se o vento ainda está tão forte.',
            wrong: 'O texto diz que «vindurin hevur lagt seg» — o vento amainou, parou de soprar forte. É justamente por isso que agora «ber tað til»: dá para sair.',
          },
        ],
      },
      sjogv: {
        emoji: '🎣',
        text: 'Úti á havinum fiska teir í einar tveir tímar, og Linu fær sín fyrsta tosk. Hann verður so glaður, at hann nærum dettur í sjógvin. «Tak tað róligt!», rópar Jákup, men hann brosar sjálvur. Tá ið teir sigla heimaftur, spyr Jákup, hvat Linu vil gera við fiskin.',
        translation:
          'Lá no mar eles pescam por umas duas horas, e o Linu pega seu primeiro bacalhau. Ele fica tão feliz que quase cai na água. «Calma!», grita o Jákup, mas ele mesmo está sorrindo. Quando voltam navegando para casa, o Jákup pergunta o que o Linu quer fazer com o peixe.',
        choices: [
          { text: 'Spyrja, um teir kunnu eta hann saman í kvøld.', translation: 'Perguntar se podem comê-lo juntos à noite.', next: 'final_bom' },
          { text: 'Siga, at hann vil selja hann á havnini fyri at fáa pening.', translation: 'Dizer que quer vendê-lo no porto para ganhar dinheiro.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🍽️',
        text: 'Um kvøldið sita teir í køkinum hjá Jákupi og eta toskin við eplum og smøri. Jákup fortelur søgur frá gomlu døgunum, og Linu lærir fleiri orðatøk, enn hann kann minnast. Tá ið hann fer, sigur Jákup: «Tú ert vælkomin aftur, nær tú hevur hug.» Linu gongur heim eftir havnini og hugsar, at havið hevur givið honum meira enn ein fisk í dag.',
        translation:
          'À noite eles se sentam na cozinha do Jákup e comem o bacalhau com batatas e manteiga. O Jákup conta histórias dos velhos tempos, e o Linu aprende mais expressões do que consegue lembrar. Quando ele vai embora, o Jákup diz: «Volte quando tiver vontade.» O Linu vai para casa pela beira do porto, pensando que hoje o mar lhe deu mais do que um peixe.',
        ending: { tone: 'bom', title: 'Pescador de expressões', message: 'Você entendeu «hava hug», «taka tað róligt» e «tað ber til» — e ganhou um jantar e um amigo no porto.' },
      },
      final_neutro: {
        emoji: '💰',
        text: 'Jákup sigur, at tað ger einki, men at ein einstakur toskur ikki gevur nógv á havnini. Linu fær nakrar fáar krónur fyri fiskin og keypir sær ein kaffikopp. Tá ið hann situr einsamallur á havnini, sær hann Jákup ganga heim, og hann hugsar, at ein kvøldmatur saman kanska hevði verið meira verdur. Næstu ferð spyr hann, áðrenn hann selur.',
        translation:
          'O Jákup diz que não faz mal, mas que um bacalhau sozinho não rende muito no porto. O Linu ganha umas poucas coroas pelo peixe e compra um café. Sentado sozinho no porto, vê o Jákup indo para casa e pensa que um jantar juntos talvez tivesse valido mais. Da próxima vez, vai perguntar antes de vender.',
        ending: { tone: 'neutro', title: 'Umas poucas coroas', message: 'Você entendeu as expressões do Jákup, mas trocou uma noite de histórias por um café.' },
      },
    },
  },
  {
    id: 'fo-h33',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Fjallið fer ikki nakran stað',
    emoji: '🌫️',
    summary: 'Em Gjógv, o Linu sai para uma caminhada nas montanhas com um guia que fala por ditados — até a neblina chegar.',
    cultural_context:
      'Gjógv, no norte da ilha de Eysturoy, tem o nome da fenda funda no rochedo onde o mar entra e que serve de porto natural («gjógv» quer dizer desfiladeiro). Nas Faroé o tempo muda muito depressa, e a neblina («mjørki») pode cobrir as montanhas em minutos.',
    start: 'start',
    glossary: [
      ['mjørki', 'neblina'],
      ['toka', 'nevoeiro, cerração'],
      ['tað ber ikki til', 'não dá, não é possível'],
      ['venda aftur', 'dar meia-volta, voltar'],
      ['villast', 'perder-se'],
      ['ferðafólk', 'turistas, viajantes'],
      ['allar árstíðir á einum degi', 'todas as estações num só dia'],
      ['fjallið fer ikki nakran stað', 'a montanha não vai a lugar nenhum'],
    ],
    nodes: {
      start: {
        emoji: '🏞️',
        text: 'Linu er í Gjógv, eini lítlari bygd, sum hevur navn eftir einari djúpari gjógv, har havið gongur inn í bergið. Ein ungur maður, Rógvi, sum vísir ferðafólki vegin – «ferðafólki, ikki turistum», sigur hann og blinkar –, skal ganga við honum niðan á fjallið. «Í Føroyum kanst tú fáa allar árstíðir á einum degi», sigur hann og hyggur upp í loftið. «Tak regnklæði við tær.»',
        translation:
          'O Linu está em Gjógv, uma aldeiazinha que tem o nome de uma fenda funda onde o mar entra no rochedo. Um rapaz, o Rógvi, que mostra o caminho aos viajantes — «ferðafólk, não turistar», diz ele, piscando —, vai subir a montanha com ele. «Nas Faroé você pode ter todas as estações num só dia», diz ele, olhando para o céu. «Leve roupa de chuva.»',
        choices: [
          { text: 'Spyrja, hvat hann meinar við «allar árstíðir á einum degi».', translation: 'Perguntar o que ele quer dizer com «todas as estações num só dia».', next: 'arstidir' },
          { text: 'Taka regnklæðini og fara beinanvegin.', translation: 'Pegar a roupa de chuva e partir logo.', next: 'fjall' },
        ],
      },
      arstidir: {
        emoji: '🌦️',
        text: 'Rógvi brosar og greiðir frá, at veðrið í Føroyum broytist so skjótt, at tú kanst fáa sól, regn, vind og mjørka á fáum tímum. «Golfstreymurin ger, at tað ongantíð verður sera kalt, men heldur ikki sera heitt», sigur hann. «Tí siga vit, at her er einki ringt veður, bert ringur klæðnaður.» Linu tekur regnklæðini, og teir fara avstað.',
        translation:
          'O Rógvi sorri e explica que o tempo nas Faroé muda tão depressa que dá para ter sol, chuva, vento e neblina em poucas horas. «A Corrente do Golfo faz com que nunca fique muito frio, mas também nunca muito quente», diz ele. «Por isso dizemos que aqui não existe tempo ruim, só roupa ruim.» O Linu pega a roupa de chuva, e eles partem.',
        choices: [{ text: 'Fara avstað saman við Rógva.', translation: 'Partir junto com o Rógvi.', next: 'fjall' }],
      },
      fjall: {
        emoji: '⛰️',
        text: 'Teir ganga niðan eftir grønum líðum, har seyðir standa og hyggja at teimum. Men eftir einum tíma kemur mjørkin rullandi inn av havinum, og brátt síggja teir næstan einki. Rógvi steðgar og sigur: «Tað ber ikki til at fara longur í dag. Vit venda aftur.»',
        translation:
          'Eles sobem por encostas verdes, onde ovelhas param para olhá-los. Mas depois de uma hora a neblina vem rolando do mar, e logo eles quase não enxergam nada. O Rógvi para e diz: «Não dá para ir mais longe hoje. Vamos voltar.»',
        choices: [
          { text: 'Venda aftur saman við Rógva.', translation: 'Voltar junto com o Rógvi.', next: 'aftur' },
          {
            text: 'Ganga víðari, tí Rógvi sigur, at tað ber til.',
            translation: 'Seguir em frente, porque o Rógvi disse que dá.',
            wrong: 'O Rógvi disse o contrário: «Tað ber ikki til» — não dá. Com «ikki», a expressão vira proibição: na neblina não dá para seguir, e ele decide voltar («vit venda aftur»).',
          },
          { text: 'Siga, at hann heldur vil fara víðari einsamallur.', translation: 'Dizer que prefere seguir sozinho.', next: 'einsamallur' },
        ],
      },
      einsamallur: {
        emoji: '🌫️',
        text: 'Rógvi hyggur álvarsamur at honum. «Í mjørka villast fleiri fólk á fjøllunum enn í nøkrum øðrum veðri», sigur hann. «Tú sært ikki kantin, fyrr enn tú stendur á honum.» Hann leggur hondina á herðarnar á Linu og sigur, at fjallið fer ikki nakran stað; tað stendur har enn í morgin.',
        translation:
          'O Rógvi olha sério para ele. «Na neblina, mais gente se perde nas montanhas do que com qualquer outro tempo», diz ele. «Você não vê a beirada até estar em cima dela.» Ele põe a mão no ombro do Linu e diz que a montanha não vai a lugar nenhum; amanhã ela ainda vai estar lá.',
        choices: [
          { text: 'Geva honum rætt og venda aftur.', translation: 'Dar razão a ele e voltar.', next: 'aftur' },
          { text: 'Fara víðari kortini.', translation: 'Seguir em frente mesmo assim.', next: 'final_neutro' },
        ],
      },
      aftur: {
        emoji: '☕',
        text: 'Tá ið teir koma niður í bygdina aftur, er mjørkin horvin, og sólin skín, sum einki hevði hent. «Sært tú?», sigur Rógvi og brosar. «Allar árstíðir á einum degi.» Teir seta seg í gistingarhúsinum og fáa sær kaffi, meðan tokan aftur leggur seg um tindarnar. Rógvi spyr, um Linu vil royna aftur í morgin.',
        translation:
          'Quando eles voltam à aldeia, a neblina sumiu, e o sol brilha como se nada tivesse acontecido. «Está vendo?», diz o Rógvi, sorrindo. «Todas as estações num só dia.» Eles se sentam na pousada e tomam um café, enquanto a cerração volta a se deitar sobre os picos. O Rógvi pergunta se o Linu quer tentar de novo amanhã.',
        choices: [{ text: 'Siga ja við gleði.', translation: 'Dizer que sim, com alegria.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🌄',
        text: 'Næsta morgun er himmalin reinur, og Linu og Rógvi ganga niðan á fjallið í sólskini. Ovast uppi sæst út yvir havið, bygdirnar og hinar oyggjarnar, og Linu skilir, hví fólk tosa um hetta landið, sum var tað eitt ævintýr. «Takk fyri, at vit vendu aftur í gjár», sigur hann. Rógvi brosar: «Fjallið fór ikki nakran stað.»',
        translation:
          'Na manhã seguinte o céu está limpo, e o Linu e o Rógvi sobem a montanha sob o sol. Lá de cima se vê o mar, as aldeias e as outras ilhas, e o Linu entende por que as pessoas falam desta terra como se fosse um conto de fadas. «Obrigado por termos voltado ontem», diz ele. O Rógvi sorri: «A montanha não foi a lugar nenhum.»',
        ending: { tone: 'bom', title: 'Cume no sol', message: 'Você entendeu «tað ber ikki til» e o ditado do Rógvi — e ganhou a montanha num dia de céu limpo.' },
      },
      final_neutro: {
        emoji: '🧭',
        text: 'Linu fer víðari inn í mjørkan, men eftir fáum minuttum veit hann ikki longur, hvar upp og niður er. Hann hoyrir Rógva rópa navn hansara og fylgir ljóðinum aftur. Teir ganga tigandi niður í bygdina, og Linu skammast. «Nú veitst tú tað», sigur Rógvi vinaliga: «Fjallið fer ikki nakran stað – men tað kanst tú.»',
        translation:
          'O Linu segue neblina adentro, mas em poucos minutos já não sabe onde é em cima e onde é embaixo. Ouve o Rógvi chamar o nome dele e segue o som de volta. Eles descem calados até a aldeia, e o Linu fica envergonhado. «Agora você sabe», diz o Rógvi, gentil: «A montanha não vai a lugar nenhum — mas você pode ir.»',
        ending: { tone: 'neutro', title: 'Perdido na neblina', message: 'Você voltou inteiro, mas aprendeu do jeito difícil por que o guia disse «tað ber ikki til».' },
      },
    },
  },
  // ───────────────────────── B2.4 ─────────────────────────
  {
    id: 'fo-h34',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Kjak um tunlar',
    emoji: '🚇',
    summary: 'Numa escola de Runavík, em Eysturoy, o Linu entra num debate: todas as ilhas das Faroé devem ser ligadas por túneis submarinos?',
    cultural_context:
      'O Eysturoyartunnilin, aberto em dezembro de 2020, liga Tórshavn, em Streymoy, às duas margens do fiorde Skálafjørður, em Eysturoy, e tem uma rotatória debaixo do mar. Antes dele já existiam o túnel de Vágar (2002) e o das Ilhas do Norte (2006), e os túneis são um tema de debate constante nas Faroé.',
    start: 'start',
    glossary: [
      ['eitt kjak', 'um debate'],
      ['ein grundgeving', 'um argumento'],
      ['ein áskoðan', 'um ponto de vista'],
      ['í fyrsta lagi', 'em primeiro lugar'],
      ['harumframt', 'além disso'],
      ['hinvegin', 'por outro lado'],
      ['tískil / sostatt', 'por isso / portanto'],
      ['ein undirsjóvartunnil', 'um túnel submarino'],
    ],
    nodes: {
      start: {
        emoji: '🏫',
        text: 'Í einum skúla í Runavík er kjakdagur, og Linu er boðin sum gestur. Evnið er: «Skulu allar oyggjarnar í Føroyum bindast saman við undirsjóvartunlum?» Lærarin, Marjun, greiðir frá reglunum: hvør bólkur fær fimm minuttir, og øll skulu grundgeva fyri síni áskoðan. Linu verður settur í bólkin, sum skal tala fyri tunlunum.',
        translation:
          'Numa escola de Runavík é dia de debate, e o Linu foi convidado. O tema é: «Todas as ilhas das Faroé devem ser ligadas por túneis submarinos?» A professora, Marjun, explica as regras: cada grupo tem cinco minutos, e todos precisam fundamentar seu ponto de vista. O Linu é colocado no grupo que vai falar a favor dos túneis.',
        choices: [
          { text: 'Byrja við at nevna Eysturoyartunnilin sum dømi.', translation: 'Começar citando o túnel de Eysturoy como exemplo.', next: 'domi' },
          { text: 'Biðja um at hoyra hin bólkin fyrst.', translation: 'Pedir para ouvir o outro grupo primeiro.', next: 'moti' },
        ],
      },
      domi: {
        emoji: '🔄',
        text: 'Linu reisir seg og sigur: «Í fyrsta lagi hava tunlarnir longu broytt lívið her. Síðan Eysturoyartunnilin varð latin upp í 2020, er ferðin til Tórshavnar vorðin nógv styttri.» Harumframt nevnir hann, at tunnilin hevur eina rundkoyring undir havinum, sum ferðafólk koma langt at síggja. «Tískil», sigur hann, «knýta tunlar ikki bert bygdir saman, men eisini fólk.» Fólkið í salinum klappar.',
        translation:
          'O Linu se levanta e diz: «Em primeiro lugar, os túneis já mudaram a vida aqui. Desde que o túnel de Eysturoy foi aberto, em 2020, a viagem até Tórshavn ficou muito mais curta.» Além disso, ele menciona que o túnel tem uma rotatória debaixo do mar, que turistas vêm de longe para ver. «Por isso», diz ele, «os túneis não ligam só aldeias, mas também pessoas.» O público no salão aplaude.',
        choices: [{ text: 'Lurta eftir svarinum frá hinum bólkinum.', translation: 'Ouvir a resposta do outro grupo.', next: 'moti' }],
      },
      moti: {
        emoji: '⚖️',
        text: 'Ein genta úr hinum bólkinum, Sunnleif, reisir seg. «Eg eri samd í, at tunlarnir eru hentir», sigur hon, «men hinvegin kosta teir ómetaliga nógvan pening.» Hon heldur fram, at smáar bygdir ofta missa síni serligu eyðkenni, tá ið býurin kemur so nær. «Sjálvt um ein tunnil sparir tíð, kann hann kortini gera, at bygdin verður ein sovibygd, har fólk bert koma heim at sova.» So hyggur hon at Linu og spyr, hvat hann hevur at svara.',
        translation:
          'Uma moça do outro grupo, Sunnleif, se levanta. «Concordo que os túneis são práticos», diz ela, «mas, por outro lado, custam uma fortuna.» Ela continua dizendo que aldeias pequenas muitas vezes perdem seu caráter próprio quando a cidade fica tão perto. «Mesmo que um túnel economize tempo, ele pode fazer da aldeia um dormitório, aonde as pessoas só voltam para dormir.» Então ela olha para o Linu e pergunta o que ele tem a responder.',
        choices: [
          { text: '«Tað er satt, men uttan tunnil flyta tey ungu kanska heilt burtur.»', translation: '«É verdade, mas sem túnel os jovens talvez se mudem de vez.»', next: 'svar' },
          {
            text: '«Tú hevur rætt: tunlarnir eru ov bíligir.»',
            translation: '«Você tem razão: os túneis são baratos demais.»',
            wrong: 'A Sunnleif disse o contrário: os túneis «kosta ómetaliga nógvan pening», custam uma fortuna. O «men hinvegin» (mas, por outro lado) introduz a desvantagem: são práticos, mas caros.',
          },
        ],
      },
      svar: {
        emoji: '🗣️',
        text: 'Linu hugsar seg um og sigur: «Tað er satt, at bygdirnar broytast. Men uttan tunnil flyta ung fólk kanska heilt burtur úr oynni – til Tórshavnar ella til Danmarkar.» Hann leggur afturat, at ein sovibygd tó er betri enn ein tóm bygd. Sunnleif brosar og viðurkennir, at tað er ein góð grundgeving. Marjun biður nú báðar bólkarnar um at gera eina niðurstøðu.',
        translation:
          'O Linu pensa e diz: «É verdade que as aldeias mudam. Mas sem túnel os jovens talvez se mudem de vez da ilha — para Tórshavn ou para a Dinamarca.» Ele acrescenta que, ainda assim, uma aldeia-dormitório é melhor do que uma aldeia vazia. A Sunnleif sorri e reconhece que é um bom argumento. A Marjun agora pede aos dois grupos que tirem uma conclusão.',
        choices: [
          { text: 'Enda við at siga, at báðar síður hava rætt í nøkrum.', translation: 'Terminar dizendo que os dois lados têm razão em alguma coisa.', next: 'final_bom' },
          { text: 'Enda við at siga, at hin bólkurin bert er ímóti øllum nýggjum.', translation: 'Terminar dizendo que o outro grupo é só contra tudo o que é novo.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🤝',
        text: 'Linu sigur at enda: «Sostatt eru tunlar hvørki góðir ella ringir í sjálvum sær; tað avgerandi er, hvussu vit nýta teir.» Marjun metir, at hetta var besta niðurstøðan á deginum, og báðir bólkarnir fáa somu stig. Eftir kjakið býður Sunnleif honum at koyra við henni gjøgnum tunnilin at síggja rundkoyringina. Undir havinum hugsar Linu, at eitt gott kjak eisini kann knýta fólk saman.',
        translation:
          'O Linu diz, por fim: «Portanto, os túneis não são nem bons nem ruins em si; o decisivo é como os usamos.» A Marjun avalia que essa foi a melhor conclusão do dia, e os dois grupos recebem a mesma pontuação. Depois do debate, a Sunnleif o convida para atravessar o túnel de carro com ela e ver a rotatória. Debaixo do mar, o Linu pensa que um bom debate também pode ligar as pessoas.',
        ending: { tone: 'bom', title: 'Ponte (ou túnel) entre opiniões', message: 'Você usou «í fyrsta lagi», «harumframt», «tískil» e «sostatt» — e respondeu aos argumentos, não à pessoa.' },
      },
      final_neutro: {
        emoji: '😬',
        text: 'Tá ið Linu sigur, at hin bólkurin bert er ímóti øllum nýggjum, verður heilt kvirt í salinum. Marjun minnir hann á, at í einum kjaki skal ein svara grundgevingunum, ikki persóninum. Hin bólkurin fær flest stig, men Sunnleif takkar honum kortini vinaliga fyri kjakið. Linu lærir, at ein góð grundgeving vigar meira enn eitt hart orð.',
        translation:
          'Quando o Linu diz que o outro grupo é só contra tudo o que é novo, o salão fica em silêncio total. A Marjun lembra a ele que num debate se responde aos argumentos, não à pessoa. O outro grupo leva mais pontos, mas a Sunnleif, mesmo assim, agradece a ele gentilmente pelo debate. O Linu aprende que um bom argumento pesa mais do que uma palavra dura.',
        ending: { tone: 'neutro', title: 'Ataque pessoal', message: 'Seus argumentos eram bons, mas o final atacou a pessoa em vez da ideia — e o júri percebeu.' },
      },
    },
  },
  {
    id: 'fo-h35',
    level: 'B2.4',
    cefr: 'B2',
    title: 'At fara ella at verða',
    emoji: '🧳',
    summary: 'Em Viðareiði, a aldeia mais ao norte das Faroé, o Linu janta com uma família em que a neta quer estudar medicina em Copenhague — e o avô é contra.',
    cultural_context:
      'Viðareiði, na ilha de Viðoy, é a aldeia mais setentrional das Faroé. Muitos jovens feroeses estudam fora, sobretudo na Dinamarca, porque vários cursos, como medicina, não existem na universidade das Faroé (Fróðskaparsetur Føroya, chamada de «Setrið»).',
    start: 'start',
    glossary: [
      ['í fyrsta lagi… í øðrum lagi', 'em primeiro lugar… em segundo lugar'],
      ['hóast', 'embora, apesar de'],
      ['kortini', 'mesmo assim'],
      ['hava tørv á', 'precisar de'],
      ['lesa til lækna', 'estudar para ser médico'],
      ['Setrið', 'a universidade das Faroé'],
      ['eitt barnabarn', 'um neto, uma neta'],
      ['keddur', 'triste'],
    ],
    nodes: {
      start: {
        emoji: '🏠',
        text: 'Linu etur kvøldmat saman við eini familju í Viðareiði, nyrstu bygdini í Føroyum. Elin, sum er átjan ár, sigur við borðið, at hon vil lesa læknafrøði í Keypmannahavn. Abbi hennara, Heðin, leggur gaffilin frá sær og sigur: «Og so kemur tú ongantíð aftur, júst sum hinir.» Tað verður kvirt, og øll hyggja at Linu, sum er gestur.',
        translation:
          'O Linu está jantando com uma família em Viðareiði, a aldeia mais ao norte das Faroé. A Elin, que tem dezoito anos, diz à mesa que quer estudar medicina em Copenhague. O avô dela, Heðin, larga o garfo e diz: «E aí você nunca mais volta, igualzinho aos outros.» Fica tudo em silêncio, e todos olham para o Linu, que é o convidado.',
        choices: [
          { text: 'Spyrja Heðin, hví hann heldur, at hon ikki kemur aftur.', translation: 'Perguntar ao Heðin por que ele acha que ela não volta.', next: 'abbin' },
          { text: 'Spyrja Elin, hví hon vil fara.', translation: 'Perguntar à Elin por que ela quer ir.', next: 'elin' },
        ],
      },
      abbin: {
        emoji: '👴',
        text: 'Heðin fortelur, at í hansara ungdómi búðu nógv fleiri fólk í bygdini enn nú. «Fyrst fara tey at lesa, síðan finna tey sær ein maka úti í heimi, og at enda eru bert gamlingar eftir her», sigur hann. «Tískil haldi eg, at tey ungu eiga at lesa her heima, á Setrinum.» Hann slær við hondini í borðið, men eygu hansara eru meira kedd enn ill.',
        translation:
          'O Heðin conta que, na juventude dele, moravam muito mais pessoas na aldeia do que agora. «Primeiro eles vão estudar, depois arranjam um par lá fora, e no fim só sobram velhos aqui», diz ele. «Por isso acho que os jovens deviam estudar aqui em casa, no Setrið.» Ele bate com a mão na mesa, mas os olhos dele estão mais tristes do que zangados.',
        choices: [{ text: 'Spyrja Elin, hvat hon heldur um hetta.', translation: 'Perguntar à Elin o que ela acha disso.', next: 'elin' }],
      },
      elin: {
        emoji: '🩺',
        text: 'Elin svarar róliga: «Í fyrsta lagi ber ikki til at lesa til lækna á Setrinum; tað má ein gera uttanlands. Í øðrum lagi hava Føroyar tørv á læknum, og tað er júst tí, at eg vil fara.» Hon leggur afturat, at hon ætlar sær at koma heim aftur, tá ið hon er liðug. «Hóast tað er satt, at nógv ikki koma aftur, so fara tey kortini ikki øll.»',
        translation:
          'A Elin responde com calma: «Em primeiro lugar, não dá para estudar medicina no Setrið; isso tem que ser feito fora do país. Em segundo lugar, as Faroé precisam de médicos, e é justamente por isso que eu quero ir.» Ela acrescenta que pretende voltar quando terminar. «Embora seja verdade que muitos não voltam, mesmo assim não são todos que vão embora de vez.»',
        choices: [
          { text: '«Tað er ein sterk grundgeving: hon fer fyri at koma heim sum lækni.»', translation: '«É um argumento forte: ela vai para voltar como médica.»', next: 'linu' },
          {
            text: '«So Elin vil lesa til lækna her heima á Setrinum.»',
            translation: '«Então a Elin quer estudar medicina aqui mesmo, no Setrið.»',
            wrong: 'Ela disse o contrário: «ikki ber til» — não dá para estudar medicina no Setrið, a universidade das Faroé; é preciso ir para fora («uttanlands»). É justamente por isso que ela quer ir.',
          },
        ],
      },
      linu: {
        emoji: '🐧',
        text: 'Linu tekur orðið og sigur, at hann skilir tey bæði. «Harumframt er tað ikki bert í Føroyum, at ungdómurin fer burtur», sigur hann; «í Brasil, har eg havi búð, flyta mong ung eisini til stórbýirnar.» Hann spyr Heðin, um tað ikki er betri, at Elin fer við hansara vælsignan, enn at hon fer við einum stríði í hjartanum. Heðin sigur einki leingi og hyggur út gjøgnum vindeygað, út á havið.',
        translation:
          'O Linu pede a palavra e diz que entende os dois. «Além disso, não é só nas Faroé que a juventude vai embora», diz ele; «no Brasil, onde eu morei, muitos jovens também se mudam para as cidades grandes.» Ele pergunta ao Heðin se não é melhor a Elin partir com a bênção dele do que partir com uma briga no coração. O Heðin fica muito tempo calado, olhando pela janela para o mar.',
        choices: [
          { text: 'Bíða eftir, hvat Heðin sigur.', translation: 'Esperar o que o Heðin vai dizer.', next: 'final_bom' },
          { text: 'Siga, at Heðin er gamaldags og eigur at blanda seg uttanum.', translation: 'Dizer que o Heðin é antiquado e devia ficar de fora.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '💛',
        text: 'At enda sigur Heðin: «Tú hevur rætt, Linu. Eg vil heldur hava eitt barnabarn, sum er lækni í Danmark, enn eitt, sum er ilt við meg her heima.» Hann leggur hondina á hondina hjá Elin og biður hana lova at koma heim hvørt summar. Elin lovar og kramar hann. Seinni um kvøldið sita tey øll saman úti og hyggja at summarljósinum, sum í juni nærum ikki hvørvur í Viðareiði.',
        translation:
          'Por fim o Heðin diz: «Você tem razão, Linu. Prefiro ter uma neta que é médica na Dinamarca a ter uma zangada comigo aqui em casa.» Ele põe a mão sobre a mão da Elin e pede que ela prometa voltar todo verão. A Elin promete e o abraça. Mais tarde, eles se sentam todos lá fora olhando a luz de verão, que em junho quase não some em Viðareiði.',
        ending: { tone: 'bom', title: 'Com a bênção do avô', message: 'Você entendeu «í fyrsta lagi… í øðrum lagi» e «hóast… kortini» — e ajudou a transformar uma briga numa promessa.' },
      },
      final_neutro: {
        emoji: '😶',
        text: 'Heðin reisir seg uttan at siga eitt orð og fer út. Elin sigur við Linu, at abbi hennara ætlaði sær einki ilt, og at hann má koma til hetta sjálvur, ikki verða trýstur. Seinni um kvøldið sær Linu hann standa einsamallan og hyggja út á havið. Linu skilir, at í einum kjaki við tey, ið vit elska, vinnur ein sjáldan við hørðum orðum.',
        translation:
          'O Heðin se levanta sem dizer uma palavra e sai. A Elin diz ao Linu que o avô não fez por mal e que ele precisa chegar a essa conclusão sozinho, não ser pressionado. Mais tarde, o Linu o vê sozinho, olhando para o mar. O Linu entende que, numa discussão com quem a gente ama, raramente se ganha com palavras duras.',
        ending: { tone: 'neutro', title: 'Palavra dura demais', message: 'Você entendeu os argumentos dos dois, mas chamar o avô de antiquado fechou a conversa.' },
      },
    },
  },
  {
    id: 'fo-h36',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Gjald til Kallin?',
    emoji: '🗼',
    summary: 'Em Trøllanes, na ilha de Kalsoy, o Linu assiste a uma reunião: o dono das terras quer cobrar uma taxa de quem vai ao farol do Kallur, e a dona do café é contra.',
    cultural_context:
      'Kalsoy é uma ilha comprida e estreita, ligada a Klaksvík por balsa. Em Mikladalur, uma estátua lembra a lenda da Kópakonan, a mulher-foca, e a trilha até o farol do Kallur, no norte da ilha, ficou famosa entre turistas do mundo todo.',
    start: 'start',
    glossary: [
      ['eitt gjald', 'uma taxa'],
      ['á einari síðu… á hinari síðu', 'por um lado… por outro'],
      ['tó', 'porém'],
      ['hava ráð til', 'ter dinheiro para, poder pagar'],
      ['ein miðleið', 'um meio-termo'],
      ['skjóta upp', 'propor'],
      ['ein semja', 'um acordo'],
      ['ein viti', 'um farol'],
    ],
    nodes: {
      start: {
        emoji: '🗼',
        text: 'Linu er komin við ferjuni úr Klaksvík til Kalsoyar og hevur tikið bussin norður til Trøllanes. Í kvøld er fundur í bygdini, tí at nógv ferðafólk ganga út til vitan á Kalli, og jørðin er slitin. Ein bóndi, Sámal, vil krevja gjald av teimum, sum ganga har. Ein ung kvinna, Rannvá, ið rekur eitt kaffihús, er ósamd.',
        translation:
          'O Linu chegou de balsa de Klaksvík a Kalsoy e pegou o ônibus para o norte, até Trøllanes. Hoje à noite há uma reunião na aldeia, porque muitos turistas vão a pé até o farol do Kallur, e o chão está gasto. Um fazendeiro, Sámal, quer cobrar uma taxa de quem passa por lá. Uma moça, Rannvá, que tem um café, não concorda.',
        choices: [
          { text: 'Fara á fundin og lurta.', translation: 'Ir à reunião e ouvir.', next: 'samal' },
          {
            text: '«So fundurin er um ferjuna til Klaksvíkar.»',
            translation: '«Então a reunião é sobre a balsa para Klaksvík.»',
            wrong: 'A reunião («fundur») é sobre o farol do Kallur: muitos turistas vão até lá, a «jørðin er slitin» (o chão está gasto), e o Sámal quer cobrar uma taxa. A balsa foi só o jeito de o Linu chegar à ilha.',
          },
        ],
      },
      samal: {
        emoji: '🐑',
        text: 'Sámal sigur, at jørðin er hansara, og at seyðurin hevur gingið á hesum haganum í hundraðtals ár. «Fyrst og fremst gera ferðafólkini skaða: tey ganga uttan fyri gøtuna, og tey skræða seyðin», sigur hann. «Harumframt kostar tað pening at gera gøtuna trygga.» Tískil heldur hann, at eitt lítið gjald er bæði rímiligt og neyðugt.',
        translation:
          'O Sámal diz que a terra é dele e que as ovelhas pastam nesse campo há centenas de anos. «Antes de tudo, os turistas causam estragos: andam fora da trilha e assustam as ovelhas», diz ele. «Além disso, custa dinheiro deixar a trilha segura.» Por isso ele acha que uma pequena taxa é ao mesmo tempo razoável e necessária.',
        choices: [
          { text: 'Nú vil hann hoyra, hvat Rannvá sigur.', translation: 'Agora ele quer ouvir o que a Rannvá diz.', next: 'rannva' },
          {
            text: '«So Sámal vil forbjóða ferðafólki at koma.»',
            translation: '«Então o Sámal quer proibir os turistas de vir.»',
            wrong: 'Não: o Sámal quer cobrar «eitt lítið gjald», uma pequena taxa. Ele não quer proibir ninguém; acha a taxa «rímiligt og neyðugt», razoável e necessária, para pagar a trilha.',
          },
        ],
      },
      rannva: {
        emoji: '☕',
        text: 'Rannvá reisir seg. «Eg skilji Sámal, og hann hevur rætt í, at gøtan er slitin», sigur hon. «Tó eri eg bangin fyri, at gjaldið fer at skræða ferðafólkini burtur, og tá missa vit øll, eisini ferjan, bussurin og kaffihúsið hjá mær.» Hon skjýtur upp, at kommunan og landið heldur skulu gjalda fyri eina nýggja gøtu. «Náttúran er okkara felags, og tí eiga vit øll at bera kostnaðin.»',
        translation:
          'A Rannvá se levanta. «Eu entendo o Sámal, e ele tem razão em que a trilha está gasta», diz ela. «Porém, tenho medo de que a taxa espante os turistas, e aí todos perdemos, inclusive a balsa, o ônibus e o meu café.» Ela propõe que o município e o governo paguem por uma trilha nova. «A natureza é de todos nós, e por isso todos devemos arcar com o custo.»',
        choices: [{ text: 'Siga, hvat hann sjálvur heldur.', translation: 'Dizer o que ele mesmo acha.', next: 'linu' }],
      },
      linu: {
        emoji: '🐧',
        text: 'Formaðurin spyr, um gesturin hevur nakað at siga. Linu reisir seg og sigur, at bæði hava góðar grundgevingar. «Á einari síðu er tað rímiligt, at tey, ið nýta gøtuna, gjalda fyri hana. Á hinari síðu má gjaldið ikki vera so høgt, at bert rík fólk hava ráð til at síggja Kallin.» Hann hugsar um eina miðleið.',
        translation:
          'O presidente da reunião pergunta se o convidado tem algo a dizer. O Linu se levanta e diz que os dois têm bons argumentos. «Por um lado, é razoável que quem usa a trilha pague por ela. Por outro lado, a taxa não pode ser tão alta que só gente rica possa pagar para ver o Kallur.» Ele pensa num meio-termo.',
        choices: [
          { text: 'Skjóta upp eitt lítið gjald, sum fer beinleiðis til gøtuna.', translation: 'Propor uma taxa pequena que vá direto para a trilha.', next: 'final_bom' },
          { text: 'Siga, at ferðafólkini eiga at gera, sum tey vilja; náttúran er ókeypis.', translation: 'Dizer que os turistas devem fazer o que quiserem; a natureza é de graça.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🌅',
        text: 'Linu skjýtur upp, at gjaldið verður lítið, at øll vita, at pengarnir fara til gøtuna, og at bygdarfólk ganga ókeypis. Sámal hyggur at Rannvá, og síðan nikka tey bæði. Næsta morgun gongur Linu út til vitan á Kalli saman við teimum báðum, og tey hyggja út yvir brøttu fjøllini í Norðoyggjunum. «Ein góð semja er sum ein góð gøta», sigur Sámal: «hon ber okkum øll.»',
        translation:
          'O Linu propõe que a taxa seja pequena, que todos saibam que o dinheiro vai para a trilha e que os moradores passem de graça. O Sámal olha para a Rannvá, e então os dois fazem que sim com a cabeça. Na manhã seguinte o Linu vai até o farol do Kallur com os dois, e eles olham as montanhas íngremes das Ilhas do Norte. «Um bom acordo é como uma boa trilha», diz o Sámal: «aguenta todos nós.»',
        ending: { tone: 'bom', title: 'O meio-termo do Kallur', message: 'Você pesou «á einari síðu… á hinari síðu» e encontrou uma «miðleið» que os dois lados aceitaram.' },
      },
      final_neutro: {
        emoji: '🚶',
        text: 'Tað verður kvirt, og Sámal sigur turt, at náttúran kanska er ókeypis, men at gøtan ikki er tað. Fundurin endar uttan nakra avgerð, og øll ganga heim hvør til sín. Linu gongur einsamallur út til vitan á Kalli og sær, hvussu djúp spor fólk hava gjørt í grasinum. Hann skilir, at ein grundgeving, sum ikki tekur hin partin í álvara, sjáldan loysir nakað.',
        translation:
          'Fica tudo em silêncio, e o Sámal diz, seco, que a natureza talvez seja de graça, mas a trilha não é. A reunião termina sem nenhuma decisão, e cada um vai para sua casa. O Linu vai sozinho até o farol do Kallur e vê como são fundas as marcas que as pessoas deixaram na grama. Ele entende que um argumento que não leva o outro lado a sério raramente resolve alguma coisa.',
        ending: { tone: 'neutro', title: 'Reunião sem acordo', message: 'Você entendeu os dois lados, mas a sua conclusão ignorou o problema real da trilha.' },
      },
    },
  },
  // ───────────────────────── C1.1 ─────────────────────────
  {
    id: 'fo-h37',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Eitt mál, mong ljóð',
    emoji: '🗣️',
    summary: 'Em Fámjin, na costa oeste de Suðuroy, o Linu vai ver a primeira bandeira feroesa e não entende nada do que diz um senhor da aldeia — até descobrir por que todas as ilhas escrevem igual e falam diferente.',
    cultural_context:
      'A bandeira feroesa, o «Merkið», foi criada em 1919 por estudantes feroeses em Copenhague, entre eles um rapaz de Fámjin, e o original está guardado na igreja da aldeia. Quando V. U. Hammershaimb fixou a ortografia, em 1846, escolheu uma escrita etimológica, próxima do nórdico antigo, que não privilegia a pronúncia de nenhuma ilha.',
    start: 'start',
    glossary: [
      ['eitt málføri', 'um dialeto'],
      ['framburðurin', 'a pronúncia'],
      ['stavsetingin', 'a ortografia'],
      ['Merkið', 'a bandeira feroesa'],
      ['øðrvísi', 'de outro jeito, diferente'],
      ['spakuliga', 'devagar, com calma'],
      ['hvør á sín hátt', 'cada um do seu jeito'],
      ['ein suðuroyingur', 'alguém de Suðuroy'],
    ],
    nodes: {
      start: {
        emoji: '⛪',
        text: 'Linu er komin til Suðuroyar, í lítlu bygdina Fámjin á vesturstrondini. Hann vil síggja Merkið, fyrsta føroyska flaggið, sum verður goymt í kirkjuni. Uttan fyri kirkjuna situr ein gamal maður, sum eitur Hanus, og sigur nakað við Linu. Tað gongur so skjótt, at Linu ikki skilir eitt einasta orð. Hanus flennir: «Ja, tú hevur víst lært føroyskt í Havn!»',
        translation:
          'O Linu chegou a Suðuroy, à aldeiazinha de Fámjin, na costa oeste. Ele quer ver o Merkið, a primeira bandeira feroesa, que fica guardada na igreja. Do lado de fora da igreja está sentado um senhor chamado Hanus, que diz alguma coisa ao Linu. É tão rápido que o Linu não entende uma única palavra. O Hanus ri: «É, pelo jeito você aprendeu feroês em Tórshavn!»',
        choices: [
          { text: 'Biðja Hanus um at tosa spakuliga.', translation: 'Pedir ao Hanus que fale devagar.', next: 'spakuliga' },
          { text: 'Royna at svara honum á donskum.', translation: 'Tentar responder a ele em dinamarquês.', next: 'donskt' },
        ],
      },
      donskt: {
        emoji: '🇩🇰',
        text: 'Linu roynir seg á donskum, tí hann heldur, at tað kanska er lættari. Hanus brosar og sigur nei. «Danskt skilja vit øll, tað lærdu vit í skúlanum», sigur hann, nú nógv spakari. «Men tú ert ikki komin so langt fyri at tosa danskt við meg.» Hann bendir á beinkin og biður Linu seta seg hjá sær.',
        translation:
          'O Linu arrisca o dinamarquês, porque acha que talvez seja mais fácil. O Hanus sorri e diz que não. «Dinamarquês todos nós entendemos, aprendemos na escola», diz ele, agora bem mais devagar. «Mas você não veio de tão longe para falar dinamarquês comigo.» Ele aponta para o banco e pede ao Linu que se sente ao lado dele.',
        choices: [{ text: 'Seta seg og lurta.', translation: 'Sentar-se e escutar.', next: 'spakuliga' }],
      },
      spakuliga: {
        emoji: '📖',
        text: 'Nú tosar Hanus spakuliga, og Linu skilir hvørt orð. «Í Suðuroy siga vit nógv orð øðrvísi enn tit í Havn, og í Norðoyggjum er tað aftur øðrvísi», sigur hann. «Men lesur tú eina bók, so er alt skrivað á sama hátt, hvaðani tú so ert.» Hann greiðir frá, at Hammershaimb í 1846 valdi at skriva orðini, sum tey vóru í gamla málinum, og ikki eftir framburðinum í nakrari ávísari bygd. «Tí kunnu vit øll lesa somu bók, hóast vit siga orðini hvør á sín hátt.»',
        translation:
          'Agora o Hanus fala devagar, e o Linu entende cada palavra. «Em Suðuroy a gente diz muitas palavras de um jeito diferente de vocês em Tórshavn, e nas Ilhas do Norte é diferente de novo», diz ele. «Mas, se você lê um livro, está tudo escrito do mesmo jeito, venha você de onde vier.» Ele explica que Hammershaimb, em 1846, escolheu escrever as palavras como elas eram na língua antiga, e não pela pronúncia de alguma aldeia específica. «Por isso todos nós podemos ler o mesmo livro, embora cada um diga as palavras do seu jeito.»',
        choices: [
          {
            text: '«So tí er ð-ið í skriftini, hóast tað sjáldan hoyrist?»',
            translation: '«Então é por isso que o ð está na escrita, mesmo quase nunca sendo ouvido?»',
            next: 'kirkja',
          },
          {
            text: '«So í Suðuroy skriva tit við øðrum bókstavum enn í Havn?»',
            translation: '«Então em Suðuroy vocês escrevem com outras letras que em Tórshavn?»',
            wrong: 'Não é isso: o Hanus disse que, num livro, «alt er skrivað á sama hátt, hvaðani tú so ert» — está tudo escrito do mesmo jeito, venha você de onde vier. A escrita é a mesma em todas as ilhas; o que muda é a pronúncia.',
          },
        ],
      },
      kirkja: {
        emoji: '🏳️',
        text: '«Júst!», sigur Hanus og reisir seg. «Ð-ið minnir okkum á, hvussu orðini einaferð ljóðaðu.» Hann letur kirkjuhurðina upp, og inni hongur Merkið: hvítt við einum reyðum krossi, sum hevur bláa rond. Hanus greiðir frá, at føroyskir studentar í Keypmannahavn gjørdu tað í 1919, og at ein av teimum var úr Fámjin. «Fyrst var tað okkara flagg her í bygdini», sigur hann stoltur, «men nú er tað flaggið hjá øllum oyggjunum.»',
        translation:
          '«Exatamente!», diz o Hanus, levantando-se. «O ð nos lembra como as palavras soavam antigamente.» Ele abre a porta da igreja, e lá dentro está pendurado o Merkið: branco, com uma cruz vermelha de borda azul. O Hanus explica que estudantes feroeses em Copenhague o fizeram em 1919, e que um deles era de Fámjin. «Primeiro foi a nossa bandeira aqui na aldeia», diz ele, orgulhoso, «mas agora é a bandeira de todas as ilhas.»',
        choices: [{ text: 'Spyrja, hvussu Hanus sigur «Fámjin».', translation: 'Perguntar como o Hanus pronuncia «Fámjin».', next: 'ljod' }],
      },
      ljod: {
        emoji: '👂',
        text: 'Hanus sigur navnið á bygdini, og Linu roynir at siga tað eftir. Í tí sama kemur Rannvá, abbadóttir hansara, inn í kirkjuna; hon býr í Klaksvík. Tá ið hon sigur somu setning sum abbi hennara, ljóðar tað næstan sum eitt annað mál. Tey bæði flenna, og Rannvá sigur, at í skúlanum í Klaksvík hermdu tey stundum eftir suðuroyingum. «Men tað er einki at skammast við», leggur hon afturat, «tað er júst hetta, sum ger føroyskt so ríkt.»',
        translation:
          'O Hanus diz o nome da aldeia, e o Linu tenta repetir. Nesse momento, a Rannvá, neta dele, entra na igreja; ela mora em Klaksvík. Quando ela diz a mesma frase que o avô, soa quase como outra língua. Os dois riem, e a Rannvá conta que, na escola em Klaksvík, às vezes eles imitavam o jeito de falar de Suðuroy. «Mas não há nada de que se envergonhar», acrescenta ela, «é justamente isso que deixa o feroês tão rico.»',
        choices: [
          { text: '«Kanst tú læra meg at siga tað sum ein suðuroyingur?»', translation: '«Você pode me ensinar a dizer isso como alguém de Suðuroy?»', next: 'final_bom' },
          { text: '«Eg haldi kortini, at framburðurin í Havn er tann rætti.»', translation: '«Mesmo assim, eu acho que a pronúncia de Tórshavn é a certa.»', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Restina av seinnapartinum sita tey trý á beinkinum uttan fyri kirkjuna og øva seg. Hanus sigur eitt orð sum ein suðuroyingur, Rannvá tað sama sum ein klaksvíkingur, og Linu roynir at fylgja við. Tey flenna nógv, men Linu lærir, at eingin framburður er rættari enn annar. Tá ið hann fer, sigur Hanus: «Kom aftur, so gera vit teg til ein ekta suðuroying!» Á leiðini til ferjuna hoyrir Linu nú munin millum oyggjarnar allastaðni.',
        translation:
          'O resto da tarde os três ficam sentados no banco do lado de fora da igreja, praticando. O Hanus diz uma palavra como alguém de Suðuroy, a Rannvá diz a mesma como alguém de Klaksvík, e o Linu tenta acompanhar. Eles riem muito, mas o Linu aprende que nenhuma pronúncia é mais certa que a outra. Quando ele vai embora, o Hanus diz: «Volte, que a gente faz de você um legítimo suðuroyingur!» No caminho para a balsa, o Linu agora escuta a diferença entre as ilhas em toda parte.',
        ending: { tone: 'bom', title: 'Ouvido para as ilhas', message: 'Você entendeu que o feroês se escreve igual em todas as ilhas e se fala de muitos jeitos — e que ninguém fala «errado».' },
      },
      final_neutro: {
        emoji: '😶',
        text: 'Tá ið Linu sigur, at framburðurin í Havn er tann rætti, verður Hanus heilt kvirrur. Rannvá hyggur at abba sínum og sigur kurteisliga, at í hesum føri finst einki rætt ella skeivt. Hanus fylgir Linu út aftur, men tosar nú bert danskt við hann. Á ferjuni heim skilir Linu, at hann hevur gjørt ein gamlan mann keddan. Hann ætlar at koma aftur og siga orsaka.',
        translation:
          'Quando o Linu diz que a pronúncia de Tórshavn é a certa, o Hanus fica completamente calado. A Rannvá olha para o avô e diz, educadamente, que nesse caso não existe certo nem errado. O Hanus acompanha o Linu até a saída, mas agora só fala dinamarquês com ele. Na balsa, voltando, o Linu percebe que deixou um senhor triste. Ele pretende voltar e pedir desculpas.',
        ending: { tone: 'neutro', title: 'Sotaque «certo»?', message: 'Você entendeu a explicação do Hanus, mas no fim tratou um jeito de falar como melhor que os outros.' },
      },
    },
  },
  {
    id: 'fo-h38',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Tríggir frændur í Kirkjubø',
    emoji: '🏛️',
    summary: 'Em Kirkjubøur, o Linu é guia voluntário e mostra as ruínas medievais a uma islandesa e a um norueguês — e descobre como as três línguas se parecem e se afastam.',
    cultural_context:
      'Kirkjubøur, no sul de Streymoy, foi sede do bispado das Faroé na Idade Média. Ali estão a Ólavskirkjan, igreja medieval ainda em uso, e as ruínas da catedral de São Magno, o «Múrurin», que o bispo Erlendur começou por volta de 1300 e que nunca foi terminada. Feroês, islandês e norueguês descendem do nórdico antigo: o islandês é o mais próximo do feroês na escrita, e os dialetos do oeste da Noruega também guardam muitas semelhanças.',
    start: 'start',
    glossary: [
      ['ein leiðsøgumaður', 'um guia'],
      ['sjálvboðin', 'voluntário'],
      ['Múrurin', 'as ruínas da catedral de Kirkjubøur'],
      ['eitt skelti', 'uma placa'],
      ['skyldur', 'aparentado'],
      ['at líkjast', 'parecer-se'],
      ['miðøldin', 'a Idade Média'],
      ['mitt ímillum', 'bem no meio'],
    ],
    nodes: {
      start: {
        emoji: '🏛️',
        text: 'Í Kirkjubø, sunnast í Streymoy, er Linu sjálvboðin leiðsøgumaður eitt summar. Í dag vísir hann tveimum ferðafólkum runt: Sigrún, sum er úr Reykjavík, og Olav, sum er úr Bergen. Tey standa framman fyri Múrinum, stóru kirkjuni, sum ongantíð varð liðug. Sigrún lesur skeltið á føroyskum og sigur, at hon skilir tað næstan alt. Olav hinvegin klórar sær í høvdinum.',
        translation:
          'Em Kirkjubøur, no extremo sul de Streymoy, o Linu é guia voluntário durante um verão. Hoje ele mostra o lugar a dois turistas: Sigrún, que é de Reykjavík, e Olav, que é de Bergen. Eles estão diante do Múrurin, a grande igreja que nunca ficou pronta. A Sigrún lê a placa em feroês e diz que entende quase tudo. O Olav, por outro lado, coça a cabeça.',
        choices: [
          { text: 'Siga Olav, hvat stendur á skeltinum.', translation: 'Contar ao Olav o que está escrito na placa.', next: 'skelti' },
          { text: 'Biðja Sigrún lesa skeltið upp.', translation: 'Pedir à Sigrún que leia a placa em voz alta.', next: 'upplestur' },
        ],
      },
      skelti: {
        emoji: '🪧',
        text: 'Linu greiðir frá: «Her stendur, at Erlendur biskupur fór undir at byggja kirkjuna umleið ár 1300, men at hon ongantíð varð liðug.» Olav nikkar; nú tá ið Linu sigur tað, skilir hann meira. «Tað ljóðar næstan sum vesturnorskt», sigur hann. Sigrún sigur, at hjá henni er tað øvugt: tað skrivaða skilir hon væl, men tað talaða ikki. Linu hugsar, at tað er løgið, at so skyld mál kunnu vera so ymisk.',
        translation:
          'O Linu explica: «Aqui diz que o bispo Erlendur começou a construir a igreja por volta do ano 1300, mas que ela nunca ficou pronta.» O Olav concorda com a cabeça; agora que o Linu fala, ele entende mais. «Soa quase como o norueguês do oeste», diz ele. A Sigrún diz que com ela é o contrário: o escrito ela entende bem, mas o falado não. O Linu acha curioso que línguas tão aparentadas possam ser tão diferentes.',
        choices: [{ text: 'Biðja Sigrún lesa skeltið upp.', translation: 'Pedir à Sigrún que leia a placa em voz alta.', next: 'upplestur' }],
      },
      upplestur: {
        emoji: '🇮🇸',
        text: 'Sigrún lesur skeltið upp á íslendskan hátt. Olav skilir einki, og Linu má flenna, tí tað ljóðar ikki sum føroyskt heldur. «Bókstavirnir eru næstan teir somu», sigur Sigrún, «men vit siga teir heilt øðrvísi.» Hon greiðir frá, at føroyingar og íslendingar stundum tosa enskt ella danskt saman, tí tað talaða málið er so ymiskt. Olav vil nú royna seg við nøkrum orðum.',
        translation:
          'A Sigrún lê a placa em voz alta, à maneira islandesa. O Olav não entende nada, e o Linu não segura o riso, porque também não soa como feroês. «As letras são quase as mesmas», diz a Sigrún, «mas nós as pronunciamos de um jeito completamente diferente.» Ela conta que feroeses e islandeses às vezes falam inglês ou dinamarquês entre si, porque a língua falada é muito diferente. O Olav agora quer arriscar algumas palavras.',
        choices: [
          { text: 'Lata Olav royna.', translation: 'Deixar o Olav tentar.', next: 'ord' },
          {
            text: '«So íslendingar skilja føroyskt betur, tá ið tað verður talað.»',
            translation: '«Então os islandeses entendem melhor o feroês quando ele é falado.»',
            wrong: 'É o contrário: a Sigrún disse que as letras são quase as mesmas («bókstavirnir eru næstan teir somu»), mas que a pronúncia é muito diferente. Para ela, o feroês escrito é fácil; o falado, não.',
          },
        ],
      },
      ord: {
        emoji: '📝',
        text: 'Linu skrivar trý orð á eitt pappír: «genta», «drongur» og «hvussu». Olav sigur tey á norskum, «jente», «gut» og «korleis», og Sigrún á íslendskum, «stúlka», «strákur» og «hvernig». «Genta» og «jente» líkjast nógv, meðan «drongur» og «strákur» eru heilt ymisk orð. Sigrún vísir á, at «takk fyri» er næstan sum á íslendskum, «takk fyrir». Linu sigur, at føroyskt stendur mitt ímillum.',
        translation:
          'O Linu escreve três palavras num papel: «genta» (moça), «drongur» (rapaz) e «hvussu» (como). O Olav as diz em norueguês, «jente», «gut» e «korleis», e a Sigrún em islandês, «stúlka», «strákur» e «hvernig». «Genta» e «jente» se parecem muito, enquanto «drongur» e «strákur» são palavras completamente diferentes. A Sigrún observa que «takk fyri» é quase igual ao islandês, «takk fyrir». O Linu diz que o feroês fica bem no meio.',
        choices: [{ text: 'Fara yvir til Ólavskirkjuna.', translation: 'Ir até a Ólavskirkjan.', next: 'olavskirkjan' }],
      },
      olavskirkjan: {
        emoji: '⛪',
        text: 'Tey ganga yvir til Ólavskirkjuna, sum er frá miðøld og enn verður brúkt. Linu greiðir frá, at Kirkjubøur var biskupssetur í miðøldini. «Tá vóru føroyskt, íslendskt og norskt næstan eitt og sama mál», sigur Olav. Sigrún leggur afturat, at íslendskt hevur broytt seg minst av teimum trimum, í øllum førum í skrift. Linu spyr tey, hvat tey fáa við sær heim frá hesum degi.',
        translation:
          'Eles vão até a Ólavskirkjan, que é da Idade Média e continua em uso. O Linu explica que Kirkjubøur era a sede do bispado na Idade Média. «Naquela época, feroês, islandês e norueguês eram quase uma só língua», diz o Olav. A Sigrún acrescenta que o islandês é o que menos mudou dos três, pelo menos na escrita. O Linu pergunta o que eles levam para casa deste dia.',
        choices: [
          { text: '«At vit eru frændur, sum mugu lurta eitt sindur betur eftir hvørjum øðrum.»', translation: '«Que somos parentes que precisam escutar um ao outro um pouco melhor.»', next: 'final_bom' },
          { text: '«At tað er best bara at tosa enskt saman.»', translation: '«Que o melhor é simplesmente falar inglês entre nós.»', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Sigrún og Olav flenna og taka undir við honum. Síðani seta tey trý seg á bakkan við sjógvin og hvíla seg. Hvør sigur ein setning á sínum máli, og hini royna at gita, hvat hann merkir. Tað gongur betur og betur, sum dagurin líður. Tá ið tey fara, sigur Sigrún á føroyskum: «Takk fyri í dag!» – og Olav rættar hana ikki.',
        translation:
          'A Sigrún e o Olav riem e concordam com ele. Depois os três se sentam na encosta à beira-mar para descansar. Cada um diz uma frase na sua língua, e os outros tentam adivinhar o que significa. Vai ficando cada vez mais fácil à medida que o dia passa. Quando vão embora, a Sigrún diz em feroês: «Takk fyri í dag!» — e o Olav não a corrige.',
        ending: { tone: 'bom', title: 'Parentes e vizinhos', message: 'Você viu que feroês, islandês e norueguês são parentes próximos — parecidos na escrita, bem diferentes na fala — e fez os três conversarem.' },
      },
      final_neutro: {
        emoji: '🤷',
        text: 'Tey tosa enskt restina av túrinum, og alt gongur skjótt og lætt. Men nú hoyra tey ikki longur, hvussu orðini líkjast. Tá ið tey fara, sigur Sigrún, at hon hevði vónað at læra eitt sindur føroyskt. Linu hugsar, at hann hevur mist eitt gott høvi. Í morgin ætlar hann at royna øðrvísi við næstu ferðafólkunum.',
        translation:
          'Eles falam inglês o resto do passeio, e tudo corre rápido e fácil. Mas agora já não ouvem como as palavras se parecem. Quando vão embora, a Sigrún diz que esperava aprender um pouco de feroês. O Linu pensa que perdeu uma boa oportunidade. Amanhã ele pretende fazer diferente com os próximos turistas.',
        ending: { tone: 'neutro', title: 'Atalho em inglês', message: 'Foi prático, mas o inglês apagou justamente o que tornava o encontro especial: o parentesco entre as três línguas.' },
      },
    },
  },
  {
    id: 'fo-h39',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Gøtudanskt',
    emoji: '🎶',
    summary: 'Em Sandur, na ilha de Sandoy, o Linu visita um lar de idosos e descobre que os feroeses têm um jeito todo seu de falar dinamarquês — e de cantar hinos dinamarqueses.',
    cultural_context:
      'Durante séculos, o dinamarquês foi a língua da escola e da igreja nas Faroé; o feroês só entrou de vez nas escolas em 1938 e na igreja em 1939. O jeito feroês de pronunciar o dinamarquês, bem mais perto da escrita, tem até nome: «gøtudanskt». E os hinos dinamarqueses de Thomas Kingo ainda são cantados com melodias tradicionais feroesas, o «Kingosangur».',
    start: 'start',
    glossary: [
      ['gøtudanskt', 'o dinamarquês falado à moda feroesa'],
      ['eitt ellisheim', 'um lar de idosos'],
      ['ein sjúkrarøktarfrøðingur', 'um enfermeiro, uma enfermeira'],
      ['ein sálmur', 'um hino religioso'],
      ['ein sálmabók', 'um hinário'],
      ['at skifta', 'trocar'],
      ['eitt lag', 'uma melodia'],
      ['beinanvegin', 'na mesma hora'],
    ],
    nodes: {
      start: {
        emoji: '🏠',
        text: 'Linu er í Sandi í Sandoy at vitja á ellisheiminum, har hann lesur upp fyri teimum gomlu hvønn fríggjadag. Í dag er ein nýggjur sjúkrarøktarfrøðingur byrjaður; hon eitur Mette og er úr Danmark. Tá ið Mette kemur inn í stovuna, skifta øll tey gomlu beinanvegin til danskt. Men Mette flennir og sigur, at hon hevur ongantíð hoyrt danskt ljóða soleiðis. Linu skilir ikki, hvat er so løgið.',
        translation:
          'O Linu está em Sandur, na ilha de Sandoy, visitando o lar de idosos, onde ele lê em voz alta para os velhinhos toda sexta-feira. Hoje começou uma enfermeira nova; ela se chama Mette e é da Dinamarca. Quando a Mette entra na sala, todos os idosos passam na mesma hora para o dinamarquês. Mas a Mette ri e diz que nunca ouviu o dinamarquês soar assim. O Linu não entende o que há de tão estranho.',
        choices: [
          { text: 'Spyrja Mette, hvat hon meinar.', translation: 'Perguntar à Mette o que ela quer dizer.', next: 'mette' },
          { text: 'Spyrja Katrinu, eina av teimum gomlu.', translation: 'Perguntar à Katrina, uma das idosas.', next: 'katrina' },
        ],
      },
      mette: {
        emoji: '💬',
        text: 'Mette greiðir frá, at tey gomlu siga donsku orðini næstan júst, sum tey eru skrivað. «Í Danmark gloyma vit helvtina av bókstavunum, tá ið vit tosa», sigur hon og flennir. Katrina, sum situr í stólinum við vindeygað, hoyrir hetta og brosar. «Tað kalla vit gøtudanskt», sigur hon, «soleiðis hava vit altíð lisið danskt her.» Hon leggur afturat, at tað er eingin skomm, tí tað er okkara egna danskt.',
        translation:
          'A Mette explica que os idosos dizem as palavras dinamarquesas quase exatamente como são escritas. «Na Dinamarca a gente esquece metade das letras quando fala», diz ela, rindo. A Katrina, sentada na poltrona junto à janela, ouve isso e sorri. «Isso nós chamamos de gøtudanskt», diz ela, «foi sempre assim que lemos o dinamarquês aqui.» Ela acrescenta que não é vergonha nenhuma, porque é o nosso próprio dinamarquês.',
        choices: [{ text: 'Biðja Katrinu siga meira.', translation: 'Pedir à Katrina que conte mais.', next: 'katrina' }],
      },
      katrina: {
        emoji: '👵',
        text: 'Katrina greiðir frá, at tá ið mamma hennara gekk í skúla, var alt á donskum: lesibøkurnar, sangirnir og eisini gudstænasturnar í kirkjuni. «Føroyskt tosaðu vit heima, men danskt var málið í skúla og kirkju», sigur hon. Fyrst í 1938 kom føroyskt veruliga inn í skúlarnar, og árið eftir inn í kirkjuna. Enn í dag læra øll børn danskt í skúlanum, og mong flyta til Danmarkar at lesa. «Tí skifta vit so lætt», sigur hon, «tað er næstan sum at skifta jakka.»',
        translation:
          'A Katrina conta que, quando a mãe dela ia à escola, tudo era em dinamarquês: os livros de leitura, as canções e também os cultos na igreja. «Feroês a gente falava em casa, mas dinamarquês era a língua da escola e da igreja», diz ela. Só em 1938 o feroês entrou de verdade nas escolas, e no ano seguinte na igreja. Até hoje todas as crianças aprendem dinamarquês na escola, e muitas se mudam para a Dinamarca para estudar. «Por isso a gente troca tão fácil», diz ela, «é quase como trocar de casaco.»',
        choices: [
          { text: '«So føroyskt kom ikki inn í kirkjuna fyrr enn í 1939?»', translation: '«Então o feroês só entrou na igreja em 1939?»', next: 'salmur' },
          {
            text: '«So mamma tín lærdi føroyskt í skúlanum og danskt heima?»',
            translation: '«Então a sua mãe aprendeu feroês na escola e dinamarquês em casa?»',
            wrong: 'Foi o contrário: a Katrina disse «føroyskt tosaðu vit heima, men danskt var málið í skúla og kirkju» — em casa se falava feroês; na escola e na igreja, dinamarquês.',
          },
        ],
      },
      salmur: {
        emoji: '📕',
        text: 'Katrina nikkar og tekur eina gamla sálmabók fram úr skuffuni. «Hesir sálmarnir eru á donskum, eftir Kingo», sigur hon, «men lagini eru okkara.» Hon byrjar at syngja, og skjótt syngja fleiri av teimum gomlu við. Mette kennir orðini, men lagið hevur hon ongantíð hoyrt; tað er langsamt og ríkt, næstan sum eitt kvæði. Eftir sanginum spyr Katrina Linu, hvat hann heldur um alt hetta.',
        translation:
          'A Katrina concorda com a cabeça e tira um hinário velho da gaveta. «Estes hinos são em dinamarquês, de Kingo», diz ela, «mas as melodias são nossas.» Ela começa a cantar, e logo vários idosos cantam junto. A Mette conhece a letra, mas a melodia ela nunca ouviu; é lenta e cheia de ornamentos, quase como uma balada. Depois do canto, a Katrina pergunta ao Linu o que ele acha de tudo isso.',
        choices: [
          { text: '«Her búgva tvey mál saman, og hvørt hevur fingið nakað frá hinum.»', translation: '«Aqui duas línguas moram juntas, e cada uma ganhou alguma coisa da outra.»', next: 'final_bom' },
          { text: '«Eg haldi, at føroyingar áttu at gloyma danskt heilt.»', translation: '«Eu acho que os feroeses deviam esquecer o dinamarquês de vez.»', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Mette tekur undir við Linu og biður Katrinu læra seg lagið. Allan seinnapartin sita tær báðar og syngja, og Linu lesur orðini upp á gøtudanskum. Mette sigur, at hon ætlar at læra føroyskt, so hon kann svara teimum gomlu á teirra egna máli. Katrina svarar, at tá skal hon eisini læra at tosa danskt, sum tað verður skrivað. Øll í stovuni flenna.',
        translation:
          'A Mette concorda com o Linu e pede à Katrina que lhe ensine a melodia. A tarde inteira as duas ficam sentadas cantando, e o Linu lê a letra em voz alta em gøtudanskt. A Mette diz que pretende aprender feroês, para poder responder aos idosos na língua deles. A Katrina responde que, então, ela também vai ter que aprender a falar dinamarquês do jeito que se escreve. Todos na sala riem.',
        ending: { tone: 'bom', title: 'Duas línguas, uma casa', message: 'Você entendeu o lugar do dinamarquês nas Faroé — da escola ao «gøtudanskt» e ao Kingosangur — sem tratar nenhuma das duas línguas como inimiga.' },
      },
      final_neutro: {
        emoji: '😔',
        text: 'Katrina leggur sálmabókina aftur og sigur stilliliga: «Danskt er eisini ein partur av okkara søgu, drongur mín.» Mette sær órólig út, og tað verður kvirt í stovuni. Linu skilir, at hann hevur talað um lívið hjá fólki, sum hann ikki kennir nóg væl. Áðrenn hann fer, biður hann Katrinu syngja sálmin einaferð aftur. Hon ger tað, men nú syngur hon einsamøll.',
        translation:
          'A Katrina fecha o hinário e diz baixinho: «O dinamarquês também é parte da nossa história, meu rapaz.» A Mette parece desconfortável, e a sala fica em silêncio. O Linu percebe que falou da vida de pessoas que ele não conhece bem o bastante. Antes de ir embora, ele pede à Katrina que cante o hino mais uma vez. Ela canta, mas agora canta sozinha.',
        ending: { tone: 'neutro', title: 'Parte da história', message: 'Você entendeu a história, mas esqueceu que o dinamarquês também faz parte da vida — e da memória — dos feroeses.' },
      },
    },
  },
  // ───────────────────────── C1.2 ─────────────────────────
  {
    id: 'fo-h40',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Teljingin á Mykineshólmi',
    emoji: '🐧',
    summary: 'Em Mykines, o Linu ajuda uma ornitóloga a contar tocas de papagaio-do-mar — e precisa entender um relatório científico antes de pisar no campo.',
    cultural_context:
      'Mykines, a ilha mais a oeste das Faroé, é famosa pelos papagaios-do-mar («lundi»), que fazem ninho em tocas cavadas na turfa; uma ponte leva à ilhota Mykineshólmur, onde fica o farol. O papagaio-do-mar põe um único ovo por ano, e a falta de alimento, como a galeota («síl»), é apontada como uma das causas da queda da população no arquipélago neste século.',
    start: 'start',
    glossary: [
      ['ein fuglafrøðingur', 'um ornitólogo, uma ornitóloga'],
      ['stovnurin', 'a população (de uma espécie)'],
      ['ein frágreiðing', 'um relatório'],
      ['at verpa', 'pôr ovos'],
      ['føði', 'alimento'],
      ['síl', 'galeota (peixe)'],
      ['háttalagið', 'o método'],
      ['eitt royndarøki', 'uma área de amostragem'],
    ],
    nodes: {
      start: {
        emoji: '⛴️',
        text: 'Linu er komin við bátinum úr Sørvági til Mykinesar, vestastu oynna í Føroyum. Har hittir hann Rakul, sum er fuglafrøðingur og kannar lundastovnin hvørt summar. «Í dag skulu vit telja, hvussu nógv hol eru í brúki í einum royndarøki», sigur hon og gevur honum eina frágreiðing. «Men fyrst mást tú skilja, hvussu lundin livir, annars gert tú bara skaða.» Linu hyggur at tekstinum, sum er fullur av fakorðum.',
        translation:
          'O Linu chegou de barco de Sørvágur a Mykines, a ilha mais a oeste das Faroé. Lá ele encontra a Rakul, que é ornitóloga e estuda a população de papagaios-do-mar todo verão. «Hoje vamos contar quantas tocas estão em uso numa área de amostragem», diz ela, entregando-lhe um relatório. «Mas primeiro você precisa entender como o papagaio-do-mar vive, senão só vai causar estrago.» O Linu olha para o texto, que está cheio de termos técnicos.',
        choices: [
          { text: 'Lesa frágreiðingina beinanvegin.', translation: 'Ler o relatório imediatamente.', next: 'varp' },
          { text: 'Spyrja fyrst, hví lundin skal teljast.', translation: 'Perguntar primeiro por que os papagaios-do-mar precisam ser contados.', next: 'hvi' },
        ],
      },
      hvi: {
        emoji: '📊',
        text: 'Rakul greiðir frá, at lundin er ein av teimum kendastu fuglunum í Føroyum, og at Mykines hevur eitt av størstu lundalondunum í landinum. «Fyri at vita, um stovnurin veksur ella minkar, mugu vit telja á sama hátt á sama stað hvørt ár», sigur hon. «Annars kunnu vit ikki samanbera tølini.» Hon leggur afturat, at eitt einstakt ár sigur lítið; tað er rákið yvir mong ár, sum hevur týdning. Síðani biður hon hann lesa um varpið.',
        translation:
          'A Rakul explica que o papagaio-do-mar é uma das aves mais conhecidas das Faroé e que Mykines tem uma das maiores colônias do país. «Para saber se a população cresce ou diminui, precisamos contar do mesmo jeito, no mesmo lugar, todo ano», diz ela. «Senão não dá para comparar os números.» Ela acrescenta que um ano isolado diz pouco; o que importa é a tendência ao longo de muitos anos. Depois ela pede que ele leia sobre a reprodução.',
        choices: [{ text: 'Lesa um varpið.', translation: 'Ler sobre a reprodução.', next: 'varp' }],
      },
      varp: {
        emoji: '🥚',
        text: 'Í frágreiðingini stendur: «Lundin (Fratercula arctica) kemur til Mykinesar í apríl og fer aftur út á hav í august. Hann grevur eitt djúpt hol í torvið og kemur ofta aftur til sama hol ár eftir ár. Lundin verpir bert eitt egg um árið, og foreldrini skiftast um at liggja á tí í umleið seks vikur. Tá ið ungin er klaktur, føða tey hann við smáfiski, serliga síli.» Rakul sigur, at tí er so umráðandi ikki at stíga á holini.',
        translation:
          'No relatório está escrito: «O papagaio-do-mar (Fratercula arctica) chega a Mykines em abril e volta para o alto-mar em agosto. Ele cava uma toca funda na turfa e muitas vezes volta para a mesma toca, ano após ano. Ele põe um único ovo por ano, e os pais se revezam para chocá-lo por cerca de seis semanas. Quando o filhote nasce, eles o alimentam com peixes pequenos, sobretudo galeotas.» A Rakul diz que, por isso, é tão importante não pisar nas tocas.',
        choices: [
          { text: '«So í hvørjum holi er í mesta lagi ein ungi um árið.»', translation: '«Então em cada toca há no máximo um filhote por ano.»', next: 'fodi' },
          {
            text: '«So lundin verpir mong egg, og tí er tað ikki so vandamikið at missa eitt.»',
            translation: '«Então o papagaio-do-mar põe muitos ovos, e por isso não é tão grave perder um.»',
            wrong: 'O relatório diz o contrário: «lundin verpir bert eitt egg um árið» — o papagaio-do-mar põe um único ovo por ano. É justamente por isso que cada ninho perdido pesa tanto.',
          },
        ],
      },
      fodi: {
        emoji: '📉',
        text: 'Rakul vísir honum eitt línurit á telefonini. «Stovnurin er minkaður nógv, síðan í byrjanini av hesi øld», greiðir hon frá. «Granskarar halda, at vantandi føði er ein av høvuðsorsøkunum: tá ið ov lítið av síli er í sjónum, svølta ungarnir í holunum.» Hon leggur afturat, at ein stovnur, sum bert fær ein unga um árið, er leingi um at koma fyri seg aftur. Linu fer nú at skilja, hví teljingin er so týdningarmikil.',
        translation:
          'A Rakul mostra a ele um gráfico no celular. «A população diminuiu muito desde o começo deste século», explica ela. «Os pesquisadores acham que a falta de alimento é uma das causas principais: quando há galeota de menos no mar, os filhotes passam fome nas tocas.» Ela acrescenta que uma população que tem só um filhote por ano demora muito para se recuperar. O Linu começa a entender por que a contagem é tão importante.',
        choices: [{ text: 'Fara út á Mykineshólm at telja.', translation: 'Ir até Mykineshólmur para contar.', next: 'holmur' }],
      },
      holmur: {
        emoji: '🗼',
        text: 'Tey ganga yvir brúnna til Mykineshólms, har vitin stendur, og Rakul vísir honum royndarøkið. Hon greiðir frá háttalagnum: við hvørt hol skulu tey kanna, um har eru spor av fugli uttan fyri, til dømis fjaðrar, fiskur ella nýggj mold. Eitt hol uttan spor verður ikki talt sum brúkt. Í tí sama sær Linu ein lunda koma við síli í nevinum og hvørva niður í eitt hol. «Hetta holið telja vit uttan iva, ikki?» spyr hann.',
        translation:
          'Eles atravessam a ponte até Mykineshólmur, onde fica o farol, e a Rakul mostra a área de amostragem. Ela explica o método: em cada toca, eles devem verificar se há sinais de ave do lado de fora, por exemplo penas, peixe ou terra revirada recentemente. Uma toca sem sinais não é contada como ocupada. Nesse momento, o Linu vê um papagaio-do-mar chegar com galeotas no bico e sumir dentro de uma toca. «Essa toca a gente conta, sem dúvida, não é?», pergunta ele.',
        choices: [
          { text: 'Merkja holið sum brúkt og halda varliga fram.', translation: 'Marcar a toca como ocupada e continuar com cuidado.', next: 'final_bom' },
          { text: 'Leggjast niður og stinga hondina inn í holið fyri at vera vísur.', translation: 'Deitar no chão e enfiar a mão na toca para ter certeza.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Rakul nikkar: «Ja, tað er júst slíkt prógv, vit leita eftir.» Allan dagin ganga tey varliga frá holi til hol og skriva niður. Um kvøldið eru tey komin ígjøgnum alt royndarøkið, og úrslitið verður lagt afturat talvuni frá undanfarnu árunum. Rakul sigur, at talið er eitt sindur hægri enn í fjør, og at tað gevur eina lítla vón. Linu hevur aldri verið so stoltur av eini talvu.',
        translation:
          'A Rakul concorda: «Sim, é exatamente esse tipo de prova que procuramos.» O dia inteiro eles andam com cuidado de toca em toca, anotando. À noite, já percorreram toda a área de amostragem, e o resultado é acrescentado à tabela dos anos anteriores. A Rakul diz que o número está um pouco mais alto que no ano passado, e que isso dá uma pequena esperança. O Linu nunca teve tanto orgulho de uma tabela.',
        ending: { tone: 'bom', title: 'Contador de papagaios', message: 'Você leu um texto científico de verdade — varp, føði, stovnur, háttalag — e aplicou o método sem estragar nenhum ninho.' },
      },
      final_neutro: {
        emoji: '✋',
        text: 'Áðrenn Linu fær stungið hondina niður, steðgar Rakul honum. «Nei! Holini eru so veik, at tey kunnu detta saman, og tá kunnu foreldrini missa ungan», sigur hon strangliga. Hon minnir hann á, at í háttalagnum stendur, at ein bert skal hyggja eftir sporum uttan fyri. Restina av deginum telur Linu varliga, men hann skammast. Hann hevur lært, at í granskingini er háttalagið ikki bert ein regla, men eisini ein vernd.',
        translation:
          'Antes que o Linu consiga enfiar a mão, a Rakul o detém. «Não! As tocas são tão frágeis que podem desabar, e aí os pais podem perder o filhote», diz ela, séria. Ela lembra que o método diz que só se deve procurar sinais do lado de fora. No resto do dia o Linu conta com cuidado, mas está envergonhado. Ele aprendeu que, na pesquisa, o método não é só uma regra, mas também uma proteção.',
        ending: { tone: 'neutro', title: 'Mão no ninho, não', message: 'Você entendeu a biologia, mas esqueceu o método: no trabalho de campo, conta-se pelos sinais do lado de fora.' },
      },
    },
  },
  {
    id: 'fo-h41',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Lag á lag',
    emoji: '🌋',
    summary: 'Num passeio de barco pelos penhascos de Vestmanna, o Linu escuta um geólogo contar como as Faroé nasceram do fogo e foram esculpidas pelo gelo.',
    cultural_context:
      'As Faroé são feitas de basalto: camadas de lava de erupções de uns 55 a 60 milhões de anos atrás, quando o Atlântico Norte começava a se abrir, separadas por faixas avermelhadas de cinza e solo antigo; em Suðuroy há até camadas de carvão formadas por plantas. Hoje não há vulcões ativos nas ilhas: os vales e fiordes foram escavados pelas geleiras da Era do Gelo, e os penhascos, como os de Vestmanna, pelo mar.',
    start: 'start',
    glossary: [
      ['ein jarðfrøðingur', 'um geólogo, uma geóloga'],
      ['eitt lag (pl. løg)', 'uma camada'],
      ['eitt eldgos', 'uma erupção vulcânica'],
      ['eitt eldfjall', 'um vulcão'],
      ['oska', 'cinza'],
      ['ein jøkul', 'uma geleira'],
      ['ein hamar (pl. hamrar)', 'um penhasco, um paredão de rocha'],
      ['ein fyrilestur', 'uma palestra'],
    ],
    nodes: {
      start: {
        emoji: '🚤',
        text: 'Linu situr í einum báti, sum siglir úr Vestmanna út til fuglabjørgini. Við síðuna av honum situr Brandur, ein jarðfrøðingur, sum heldur fyrilestur fyri ferðafólkunum um borð. Hann vísir á hamrarnar, har tunnar reyðar strikur skilja tjúkk, myrk løg hvørt frá øðrum. «Hvørt myrkt lag er basalt, sum einaferð rann sum glóandi grót úr eldgosum», sigur hann. «Her síggja tit søguna um, hvussu Føroyar vórðu til.»',
        translation:
          'O Linu está sentado num barco que sai de Vestmanna rumo aos penhascos das aves. Ao lado dele está o Brandur, um geólogo que dá uma palestra para os turistas a bordo. Ele aponta para os paredões, onde faixas vermelhas finas separam camadas grossas e escuras umas das outras. «Cada camada escura é basalto, que um dia escorreu como rocha incandescente de erupções vulcânicas», diz ele. «Aqui vocês veem a história de como as Faroé surgiram.»',
        choices: [
          { text: 'Spyrja, nær hetta hendi.', translation: 'Perguntar quando isso aconteceu.', next: 'aldur' },
          { text: 'Spyrja, hvat reyðu strikurnar eru.', translation: 'Perguntar o que são as faixas vermelhas.', next: 'reyd' },
        ],
      },
      aldur: {
        emoji: '⏳',
        text: 'Brandur greiðir frá, at Føroyar vórðu til fyri umleið 55–60 milliónum árum síðan, tá ið Norðuratlantshavið byrjaði at opnast. «Tá gusu eldfjøll aftur og aftur, og glóandi grótið legðist lag á lag, fleiri kilometrar tjúkt», sigur hann. Síðani eru eldgosini steðgað, og í dag eru eingi virkin eldfjøll í Føroyum. Allar oyggjarnar, sum tit síggja, eru bert leivdir av einum miklu størri basaltlandi, sum havið og ísurin hava tært burtur. Ein ferðamaður blístrar av undran.',
        translation:
          'O Brandur explica que as Faroé surgiram há uns 55 a 60 milhões de anos, quando o Atlântico Norte começou a se abrir. «Naquela época os vulcões entravam em erupção sem parar, e a rocha incandescente se acumulou camada sobre camada, com vários quilômetros de espessura», diz ele. Depois as erupções pararam, e hoje não há nenhum vulcão ativo nas Faroé. Todas as ilhas que vocês veem são só o que restou de uma terra de basalto muito maior, que o mar e o gelo desgastaram. Um turista assobia de espanto.',
        choices: [{ text: 'Spyrja, hvat reyðu strikurnar eru.', translation: 'Perguntar o que são as faixas vermelhas.', next: 'reyd' }],
      },
      reyd: {
        emoji: '🟥',
        text: 'Brandur fegnast um spurningin. «Reyðu strikurnar eru gomul oska og mold, sum fekk tíð at leggjast, meðan tað var steðgur millum gosini», sigur hann. «Summastaðni vaks enntá skógur, áðrenn næsta gosið kom; í Suðuroy liggja kolløg, sum eru gjørd av gomlum plantum.» Harumframt vísir hann á, at løgini liggja næstan vatnrætt, bara eitt sindur hallandi. Linu roknar út, at hvør strika merkir eina langa bíð millum tvey gos.',
        translation:
          'O Brandur fica contente com a pergunta. «As faixas vermelhas são cinza e solo antigos, que tiveram tempo de se depositar enquanto havia uma pausa entre as erupções», diz ele. «Em alguns lugares cresceu até floresta antes da erupção seguinte; em Suðuroy há camadas de carvão formadas por plantas antigas.» Além disso, ele mostra que as camadas estão quase na horizontal, só um pouco inclinadas. O Linu deduz que cada faixa representa uma longa espera entre duas erupções.',
        choices: [
          { text: '«So hvør reyð strika merkir eitt tíðarskeið uttan gos.»', translation: '«Então cada faixa vermelha representa um período sem erupções.»', next: 'isur' },
          {
            text: '«So reyðu strikurnar eru frá teimum heitastu gosunum.»',
            translation: '«Então as faixas vermelhas são das erupções mais quentes.»',
            wrong: 'Não: o Brandur disse que as faixas vermelhas se formaram «meðan tað var steðgur millum gosini» — enquanto havia uma pausa entre as erupções. Elas marcam os intervalos, não as erupções.',
          },
        ],
      },
      isur: {
        emoji: '🧊',
        text: 'Báturin siglir inn ímillum hamrarnar, har fuglarnir sita í hvørjari rivu. «Men hví eru oyggjarnar so bratar og firðirnir so djúpir?» spyr ein ferðamaður. Brandur svarar, at í ístíðunum lá ein tjúkkur ísur yvir øllum oyggjunum. Jøklarnir skóru dalar og firðir út í basaltið, og síðani hevur brimið gnagað hamrar sum hesar. «Landslagið er sostatt verk bæði hjá eldi og ísi», sigur hann og biður Linu siga tað við barnið, sum situr hjá honum.',
        translation:
          'O barco entra por entre os paredões, onde as aves ocupam cada fenda. «Mas por que as ilhas são tão íngremes e os fiordes tão fundos?», pergunta um turista. O Brandur responde que, nas eras glaciais, uma camada grossa de gelo cobria todas as ilhas. As geleiras escavaram vales e fiordes no basalto, e desde então a arrebentação vem roendo paredões como estes. «A paisagem é, portanto, obra tanto do fogo quanto do gelo», diz ele, e pede ao Linu que explique isso à criança sentada ao lado dele.',
        choices: [
          { text: 'Greiða barninum frá: «Fyrst kom eldurin, so ísurin, og nú gnagar havið.»', translation: 'Explicar à criança: «Primeiro veio o fogo, depois o gelo, e agora o mar vai roendo.»', next: 'final_bom' },
          { text: 'Greiða barninum frá: «Oyggjarnar eru eitt eldfjall, sum kann gjósa hvønn dag.»', translation: 'Explicar à criança: «As ilhas são um vulcão que pode entrar em erupção a qualquer dia.»', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Barnið, ein lítil genta, hyggur upp á hamrarnar og tekur at telja strikurnar. Brandur brosar og sigur, at Linu hevur samanfatað sextíu milliónir ár í fáum orðum. Á veg aftur til Vestmanna spyr hann, um Linu vil hjálpa honum at skriva tekstin til eitt nýtt skelti fyri ferðafólk. «Tú dugir at gera torført greitt», sigur hann. Linu hevði ongantíð hugsað, at grót kundi vera so spennandi.',
        translation:
          'A criança, uma menininha, olha para os paredões e começa a contar as faixas. O Brandur sorri e diz que o Linu resumiu sessenta milhões de anos em poucas palavras. Na volta para Vestmanna, ele pergunta se o Linu quer ajudá-lo a escrever o texto de uma placa nova para turistas. «Você sabe deixar claro o que é difícil», diz ele. O Linu nunca tinha imaginado que pedras pudessem ser tão emocionantes.',
        ending: { tone: 'bom', title: 'Fogo, gelo e mar', message: 'Você entendeu um texto de geologia — basalt, eldgos, løg, jøklar — e ainda o explicou com palavras simples e corretas.' },
      },
      final_neutro: {
        emoji: '😟',
        text: 'Gentan verður bangin og spyr mammu sína, um tey skulu fara heim. Brandur rættar Linu vinaliga: «Her hava ikki verið eldgos í milliónir av árum.» Linu skammast; hann hevði skilt tekstin, men gjørt hann alt ov einfaldan og skeivan. Restina av túrinum lurtar hann eftir, hvussu Brandur greiðir frá uttan at skræða nakran. Hann lærir, at at gera nakað einfalt er ikki tað sama sum at gera tað skeivt.',
        translation:
          'A menina fica com medo e pergunta à mãe se eles vão ter que ir para casa. O Brandur corrige o Linu com gentileza: «Aqui não há erupções há milhões de anos.» O Linu fica envergonhado; ele tinha entendido o texto, mas o deixou simples demais e errado. No resto do passeio ele presta atenção em como o Brandur explica sem assustar ninguém. Ele aprende que simplificar não é o mesmo que distorcer.',
        ending: { tone: 'neutro', title: 'Vulcão imaginário', message: 'Você entendeu a geologia, mas na hora de simplificar trocou o passado pelo presente — e assustou uma criança à toa.' },
      },
    },
  },
  {
    id: 'fo-h42',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Leivdir úr víkingatíð',
    emoji: '🏺',
    summary: 'Em Kvívík, o Linu ajuda uma arqueóloga a transformar um relatório de escavação cheio de termos técnicos num texto que qualquer turista entenda.',
    cultural_context:
      'Os nórdicos se estabeleceram nas Faroé nos anos 800, e em Kvívík, em Streymoy, há ruínas de uma fazenda da era viking, com casa comprida e estábulo. A Føroyinga søga, escrita na Islândia por volta de 1200, diz que o primeiro colono foi Grímur Kamban; o monge irlandês Dicuil, por volta de 825, já falava de eremitas em ilhas ao norte da Grã-Bretanha, e grãos de cevada queimados achados em Sandoy sugerem presença humana antes dos vikings.',
    start: 'start',
    glossary: [
      ['ein fornfrøðingur', 'um arqueólogo, uma arqueóloga'],
      ['ein útgrevstur', 'uma escavação'],
      ['eitt langhús', 'uma casa comprida (viking)'],
      ['eitt fjós', 'um estábulo'],
      ['at tíðarfesta', 'datar'],
      ['ein kelda (pl. keldur)', 'uma fonte (de informação)'],
      ['eitt prógv', 'uma prova'],
      ['fakorð', 'termos técnicos'],
    ],
    nodes: {
      start: {
        emoji: '📜',
        text: 'Í Kvívík, eini gamlari bygd í Streymoy, hjálpir Linu Guðrið, sum er fornfrøðingur, at skriva ein nýggjan tekst til ferðafólk um víkingaleivdirnar í bygdini. Hon hevur givið honum eina gamla útgrevstrarfrágreiðing, fulla av fakorðum. «Tín uppgáva er at skilja hana og síðani greiða frá við vanligum orðum», sigur hon. Linu lesur fyrsta setningin: «Á staðnum eru grundarnar av einum langhúsi og einum fjósi, sum bæði eru gjørd av gróti og torvi.» Hann skilir orðini, men ikki alt samanhangið.',
        translation:
          'Em Kvívík, uma aldeia antiga em Streymoy, o Linu ajuda a Guðrið, que é arqueóloga, a escrever um texto novo para turistas sobre as ruínas vikings da aldeia. Ela lhe deu um relatório de escavação antigo, cheio de termos técnicos. «Sua tarefa é entendê-lo e depois explicar com palavras comuns», diz ela. O Linu lê a primeira frase: «No local estão as fundações de uma casa comprida e de um estábulo, ambos feitos de pedra e turfa.» Ele entende as palavras, mas não o contexto todo.',
        choices: [
          { text: 'Spyrja, hvat eitt fjós er.', translation: 'Perguntar o que é um «fjós».', next: 'fjos' },
          { text: 'Lesa víðari um aldurin.', translation: 'Continuar lendo sobre a idade.', next: 'aldur' },
        ],
      },
      fjos: {
        emoji: '🐄',
        text: 'Guðrið greiðir frá, at eitt fjós er húsið, har neytini stóðu um veturin. «Í langhúsinum búðu fólkini, og í fjósinum kýrnar; tí hevur tað stóran týdning at finna bæði», sigur hon. «Tá vita vit, at her ikki bert var ein veiðibúð, men ein garður, har fólk búðu alt árið.» Hon vísir honum eina tekning av, hvussu húsini kunnu hava sæð út, við torvtekju og einum eldstaði mitt á gólvinum. Linu skrivar orðið niður við týðingini á portugisiskum.',
        translation:
          'A Guðrið explica que um «fjós» é a construção onde o gado ficava no inverno. «Na casa comprida moravam as pessoas, e no estábulo, as vacas; por isso é tão importante encontrar os dois», diz ela. «Assim sabemos que aqui não havia só um abrigo de caça e pesca, mas uma fazenda, onde as pessoas moravam o ano inteiro.» Ela lhe mostra um desenho de como as casas podem ter sido, com teto de turfa e uma lareira no meio do piso. O Linu anota a palavra com a tradução em português.',
        choices: [{ text: 'Lesa víðari um aldurin.', translation: 'Continuar lendo sobre a idade.', next: 'aldur' }],
      },
      aldur: {
        emoji: '🔎',
        text: 'Í frágreiðingini stendur: «Út frá funnum lutum og byggilagnum verður garðurin tíðarfestur til víkingatíð.» Guðrið greiðir frá, at «tíðarfesta» merkir at avgera, hvussu gamalt nakað er. «Norrønt fólk búsettist í Føroyum í 800-árunum», sigur hon. «Men í Sandoy hava fornfrøðingar funnið brent bygg, sum er fleiri hundrað ár eldri, og tað bendir á, at onkur var her áðrenn víkingarnir.» Hon leggur dent á, at hetta er eitt kjak, sum enn ikki er avgjørt.',
        translation:
          'No relatório está escrito: «Com base nos objetos encontrados e no estilo de construção, a fazenda é datada da era viking.» A Guðrið explica que «tíðarfesta» significa determinar a idade de alguma coisa. «Os nórdicos se estabeleceram nas Faroé nos anos 800», diz ela. «Mas em Sandoy os arqueólogos encontraram cevada queimada que é várias centenas de anos mais antiga, e isso indica que alguém esteve aqui antes dos vikings.» Ela frisa que essa é uma discussão que ainda não está resolvida.',
        choices: [
          { text: '«So spurningurin um tey fyrstu fólkini er enn opin.»', translation: '«Então a questão sobre os primeiros habitantes ainda está em aberto.»', next: 'saga' },
          {
            text: '«So vit vita við vissu, at víkingarnir vóru tey fyrstu her.»',
            translation: '«Então sabemos com certeza que os vikings foram os primeiros aqui.»',
            wrong: 'Não foi isso que a Guðrið disse: a cevada queimada achada em Sandoy é «fleiri hundrað ár eldri» (várias centenas de anos mais antiga), o que indica que alguém esteve ali antes dos vikings — e ela frisou que a discussão ainda não está resolvida.',
          },
        ],
      },
      saga: {
        emoji: '📚',
        text: 'Guðrið nikkar og tekur eina bók niður úr hillini: Føroyinga søgu. «Søgan varð skrivað í Íslandi umleið ár 1200 og sigur, at Grímur Kamban var fyrstur at búseta seg her», sigur hon. «Og ein írskur munkur, Dicuil, skrivaði umleið ár 825 um oyggjar norðanfyri Bretland, har einsetumenn høvdu búð.» Hon greiðir frá, at ein fornfrøðingur má vega skrivligar keldur og funnar lutir saman. «Ein søga er ikki eitt prógv, men hon kann vísa okkum, hvar vit skulu grava.»',
        translation:
          'A Guðrið concorda com a cabeça e tira um livro da estante: a Føroyinga søga. «A saga foi escrita na Islândia por volta do ano 1200 e diz que Grímur Kamban foi o primeiro a se estabelecer aqui», diz ela. «E um monge irlandês, Dicuil, escreveu por volta do ano 825 sobre ilhas ao norte da Grã-Bretanha onde eremitas tinham morado.» Ela explica que um arqueólogo precisa pesar juntas as fontes escritas e os objetos encontrados. «Uma saga não é uma prova, mas pode nos mostrar onde cavar.»',
        choices: [
          { text: 'Skriva: «Her búðu fólk í víkingatíð – og kanska var onkur her áðrenn teir.»', translation: 'Escrever: «Aqui viveram pessoas na era viking — e talvez alguém tenha estado aqui antes deles.»', next: 'final_bom' },
          { text: 'Skriva: «Her búði Grímur Kamban, fyrsti føroyingurin.»', translation: 'Escrever: «Aqui morou Grímur Kamban, o primeiro feroês.»', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Guðrið lesur tekstin og brosar. «Hetta er júst rætt: greitt, satt og uttan at siga meira, enn vit vita», sigur hon. Teksturin verður settur upp á einum skelti við leivdirnar, og ferðafólk steðga og lesa. Linu hoyrir eina familju tosa um, hvør kanska búði her fyri túsund árum síðan. Hann er stoltur av at hava umsett fornfrøði til eitt mál, sum øll skilja.',
        translation:
          'A Guðrið lê o texto e sorri. «Está exatamente certo: claro, verdadeiro e sem dizer mais do que sabemos», diz ela. O texto é colocado numa placa junto às ruínas, e os turistas param para ler. O Linu ouve uma família conversando sobre quem talvez tenha morado ali mil anos atrás. Ele tem orgulho de ter traduzido a arqueologia para uma língua que todos entendem.',
        ending: { tone: 'bom', title: 'Arqueólogo de palavras', message: 'Você entendeu um relatório técnico — fjós, tíðarfesta, keldur — e escreveu um texto claro que não diz mais do que as provas permitem.' },
      },
      final_neutro: {
        emoji: '📝',
        text: 'Guðrið sigur nei. «Vit vita ikki, hvør búði her, og søgan er ikki eitt prógv», sigur hon. Hon minnir hann á, at ein tekstur á einum skelti skal byggja á tað, sum er funnið, ikki á tað, sum vit vilja trúgva. Linu skrivar tekstin av nýggjum, men skilir, at hann hevði gloymt tað mest týdningarmikla úr frágreiðingini. Í fornfrøði er ivin eisini ein partur av sannleikanum.',
        translation:
          'A Guðrið diz que não. «Não sabemos quem morou aqui, e a saga não é uma prova», diz ela. Ela lembra que o texto de uma placa deve se basear no que foi encontrado, não no que gostaríamos de acreditar. O Linu reescreve o texto, mas percebe que tinha esquecido o mais importante do relatório. Na arqueologia, a dúvida também faz parte da verdade.',
        ending: { tone: 'neutro', title: 'Lenda no lugar de prova', message: 'Você transformou uma saga em fato — e a Guðrið lembrou que uma placa deve dizer só o que as escavações mostram.' },
      },
    },
  },
  // ───────────────────────── C2 ─────────────────────────
  {
    id: 'fo-h43',
    level: 'C2',
    cefr: 'C2',
    title: 'Glymur dansur í høll',
    emoji: '💃',
    summary: 'Numa noite de outono em Nólsoy, o Linu entra na dança em roda feroesa, canta o refrão de «Ormurin langi» e ouve a história do Fuglakvæðið, a balada satírica de Nólsoyar Páll.',
    cultural_context:
      'A dança em roda feroesa, de mãos dadas, com dois passos para a esquerda e um para a direita, acompanha baladas longas («kvæði»): um canta as estrofes e todos respondem no refrão. «Ormurin langi», de Jens Christian Djurhuus (1773–1853), fala do rei norueguês Olavo Tryggvason; e o Fuglakvæðið, de Nólsoyar Páll (1766–1809), filho de Nólsoy, satirizava com aves os funcionários do monopólio comercial dinamarquês.',
    start: 'start',
    glossary: [
      ['eitt kvæði', 'uma balada'],
      ['eitt niðurlag', 'um refrão'],
      ['at kvøða fyri', 'puxar o canto'],
      ['eitt ørindi', 'uma estrofe'],
      ['eitt skaldaorð', 'uma expressão poética'],
      ['Hildar ting', 'a batalha (lit. «a assembleia de Hild»)'],
      ['einahandilin', 'o monopólio comercial'],
      ['ein ránsfuglur', 'uma ave de rapina'],
    ],
    nodes: {
      start: {
        emoji: '🌙',
        text: 'Tað var eitt kalt heystkvøld, tá ið Linu steig av ferjuni í Nólsoy, beint yvir av Havnini. Í samkomuhúsinum skuldi verða dansur, og úr allari bygdini streymaðu fólk til, ung og gomul, mong í føroyskum klæðum. Uttan fyri dyrnar stóð gamli Símun og roykti pípu, og hann heilsaði Linu, eins og hann hevði kent hann alt lívið. «Í kvøld skalt tú ikki bara síggja dansin», segði hann, «tú skalt vera í honum.» Linu kendi, hvussu hjartað tók at banka.',
        translation:
          'Era uma noite fria de outono quando o Linu desceu da balsa em Nólsoy, bem em frente a Tórshavn. No salão comunitário ia haver dança, e de toda a aldeia chegava gente, jovens e velhos, muitos em trajes feroeses. Do lado de fora da porta, o velho Símun fumava cachimbo, e cumprimentou o Linu como se o conhecesse a vida inteira. «Hoje você não vai só ver a dança», disse ele, «vai estar dentro dela.» O Linu sentiu o coração começar a bater mais forte.',
        choices: [
          { text: 'Fara beint inn í dansin.', translation: 'Entrar direto na dança.', next: 'dansur' },
          { text: 'Spyrja Símun fyrst, hvussu ein dansar.', translation: 'Perguntar primeiro ao Símun como se dança.', next: 'stig' },
        ],
      },
      stig: {
        emoji: '👣',
        text: 'Símun legði pípuna frá sær og vísti honum stigini: tvey stig til vinstru, eitt til høgru, altíð í sama takti. «Tað er alt, ið skal til við beinunum», segði hann, «men restin situr í orðunum.» Hann greiddi frá, at ein kvøður fyri, og hini svara í niðurlagnum, og at tað er søgan í kvæðinum, sum ber dansin. «Tá ið bardagin er harðastur, stappa vit fastari; tá ið kongurin doyr, verður alt kvirt.» Linu royndi stigini á grúsinum, til hann ikki longur hugsaði um tey.',
        translation:
          'O Símun deixou o cachimbo de lado e mostrou os passos: dois passos para a esquerda, um para a direita, sempre no mesmo ritmo. «É só isso que as pernas precisam», disse ele, «o resto está nas palavras.» Ele explicou que uma pessoa puxa o canto e os outros respondem no refrão, e que é a história da balada que conduz a dança. «Quando a batalha fica mais dura, batemos os pés com mais força; quando o rei morre, tudo fica em silêncio.» O Linu ensaiou os passos no cascalho até parar de pensar neles.',
        choices: [{ text: 'Fara inn í dansin.', translation: 'Entrar na dança.', next: 'dansur' }],
      },
      dansur: {
        emoji: '🔁',
        text: 'Inni var heitt og trongt, og ringurin bugaðist gjøgnum allan salin sum ein ormur. Ein gráhærdur maður kvað fyri, og tá ið hann kom til niðurlagið, ljóðaðu hundrað røddir sum ein: «Glymur dansur í høll, dans sláið í ring! Glaðir ríða Noregs menn til Hildar ting.» Símun rópti Linu í oyrað, at hetta var Ormurin langi, sum Jens Christian Djurhuus orti um Ólav Tryggvason og skipið hansara. «Hildar ting», legði hann afturat, «tað er eitt gamalt skaldaorð fyri bardaga.» Linu dansaði við, og orðini runnu gjøgnum hann sum ein streymur.',
        translation:
          'Lá dentro estava quente e apertado, e a roda serpenteava pelo salão inteiro como uma cobra. Um homem de cabelos grisalhos puxava o canto, e quando chegou ao refrão, cem vozes soaram como uma só: «Ressoa a dança no salão, formem a roda! Alegres cavalgam os homens da Noruega para a assembleia de Hild.» O Símun gritou no ouvido do Linu que aquela era «Ormurin langi», que Jens Christian Djurhuus compôs sobre Olavo Tryggvason e o navio dele. «Hildar ting», acrescentou, «é uma velha expressão poética para batalha.» O Linu dançou junto, e as palavras corriam por ele como uma correnteza.',
        choices: [
          { text: '«So Hildar ting er ein bardagi, ikki eitt tingmót.»', translation: '«Então «Hildar ting» é uma batalha, não uma reunião.»', next: 'fuglakvaedi' },
          {
            text: '«So kvæðið er um eina gleðiveitslu hjá Hild.»',
            translation: '«Então a balada é sobre uma festa na casa da Hild.»',
            wrong: 'O Símun explicou que «Hildar ting» é «eitt gamalt skaldaorð fyri bardaga» — uma velha expressão poética para batalha. Os noruegueses cavalgam alegres para a luta, não para uma festa.',
          },
        ],
      },
      fuglakvaedi: {
        emoji: '🐦',
        text: 'Í einum steðgi settust teir á ein beink við vindeygað, og Símun tók til orða um Nólsoyar Pál, sum var føddur her í bygdini. «Hann stríddist ímóti einahandlinum, og tá ið orð ikki hjálptu, gjørdi hann eitt kvæði», segði hann. Í Fuglakvæðinum eru ránsfuglarnir embætismenn, men tjaldur, tjóðfuglurin, verjir smáfuglarnar, og øll vistu, hvønn Páll meinti. Síðan hvarv hann á havinum í 1809, men kvæðið livir enn. «Soleiðis er tað við kvæðum», segði Símun, «tey siga tað, sum ein ikki torir at siga beinleiðis.»',
        translation:
          'Num intervalo, os dois se sentaram num banco junto à janela, e o Símun começou a falar de Nólsoyar Páll, que nasceu ali na aldeia. «Ele lutou contra o monopólio comercial, e quando as palavras não adiantaram, fez uma balada», disse ele. No Fuglakvæðið, as aves de rapina são os funcionários, mas o ostraceiro, a ave nacional, defende os passarinhos, e todos sabiam a quem Páll se referia. Depois ele desapareceu no mar em 1809, mas a balada vive até hoje. «É assim com as baladas», disse o Símun, «elas dizem o que ninguém ousa dizer às claras.»',
        choices: [
          { text: 'Fara aftur inn í ringin og dansa, til dansurin endar.', translation: 'Voltar para a roda e dançar até o fim.', next: 'final_bom' },
          { text: '«Kvæðini eru vøkur, men alt ov long og gamaldags.»', translation: '«As baladas são bonitas, mas longas e antiquadas demais.»', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Teir fóru aftur inn, og Linu dansaði, til klokkan var langt yvir miðnátt og síðsta ørindið var kvøðið. Hann kundi ikki øll orðini, men hann rópti niðurlagið við, og tá ið stappið kom, stappaði hann eins fast og hini. Tá ið ringurin loysnaði, klappaði ein ókend kona honum á herðarnar og segði: «Nú ert tú ein av okkum.» Á fyrstu ferjuni aftur til Havnar um morgunin sang hann niðurlagið fyri sær sjálvum. Hann skildi, at í Føroyum er eitt kvæði ikki nakað, ein lesur, men nakað, ein ger saman.',
        translation:
          'Os dois voltaram para dentro, e o Linu dançou até muito depois da meia-noite, quando a última estrofe foi cantada. Ele não sabia todas as palavras, mas gritava o refrão junto, e quando vinha a batida de pés, batia com a mesma força que os outros. Quando a roda se desfez, uma mulher desconhecida lhe deu um tapinha no ombro e disse: «Agora você é um dos nossos.» Na primeira balsa de volta a Tórshavn, de manhã, ele cantarolava o refrão para si mesmo. Ele entendeu que, nas Faroé, uma balada não é algo que se lê, mas algo que se faz junto.',
        ending: { tone: 'bom', title: 'No meio da roda', message: 'Você entendeu a linguagem das baladas — niðurlag, skaldaorð, a sátira do Fuglakvæðið — e entrou na roda.' },
      },
      final_neutro: {
        emoji: '🚪',
        text: 'Símun leit leingi at honum og segði einki. Síðan stóð hann upp og fór inn aftur í dansin uttan Linu. Linu sat einsamallur á beinkinum og hoyrdi niðurlagið ljóða gjøgnum veggin, hundrað røddir sum ein. Tað gekk upp fyri honum, at hann hevði kallað tað gamaldags, sum fyri hesum fólkunum var lívið sjálvt. Seinni, á ferjuni, royndi hann at minnast orðini, men tey vóru longu horvin.',
        translation:
          'O Símun olhou longamente para ele e não disse nada. Depois se levantou e voltou para a dança sem o Linu. O Linu ficou sozinho no banco, ouvindo o refrão atravessar a parede, cem vozes como uma só. Caiu a ficha de que ele tinha chamado de antiquado o que, para aquelas pessoas, era a própria vida. Mais tarde, na balsa, ele tentou lembrar as palavras, mas elas já tinham sumido.',
        ending: { tone: 'neutro', title: 'Do lado de fora', message: 'Você entendeu as palavras, mas chamou de antiquado o que para a aldeia é vida — e ficou fora da roda.' },
      },
    },
  },
  {
    id: 'fo-h44',
    level: 'C2',
    cefr: 'C2',
    title: 'Tann, ið skrivaði, sum orðini vóru',
    emoji: '✒️',
    summary: 'Em Sandavágur, terra natal de Hammershaimb, o Linu acompanha uma professora e sua turma numa aula ao ar livre sobre como o feroês ganhou uma escrita.',
    cultural_context:
      'Jens Christian Svabo (1746–1824), de Miðvágur, recolheu baladas nos anos 1780 numa escrita guiada pela pronúncia; o pastor V. U. Hammershaimb (1819–1909), nascido em Sandavágur, criou em 1846 a ortografia etimológica usada até hoje. O primeiro livro com baladas feroesas saiu em 1822, publicado pelo pastor dinamarquês Hans Christian Lyngbye: as baladas de Sjúrður (Sigurd), o matador do dragão.',
    start: 'start',
    glossary: [
      ['eitt skriftmál', 'uma língua escrita'],
      ['ein minnisvarði', 'um monumento'],
      ['at skriva upp', 'anotar, registrar por escrito'],
      ['ein orðabók', 'um dicionário'],
      ['at geva út', 'publicar'],
      ['ein fyrimunur', 'uma vantagem'],
      ['í fólks munni', 'na boca do povo, na tradição oral'],
      ['felags', 'comum, compartilhado'],
    ],
    nodes: {
      start: {
        emoji: '🌧️',
        text: 'Tað regnaði spakuliga yvir Sandavág, tá ið Linu steðgaði við minnisvarðan um V. U. Hammershaimb, sum føddist her í 1819. Turið, lærarinna í bygdini, stóð við síðuna av honum við einum flokki av næmingum. «Uttan hann hevði føroyskt kanska ikki havt eitt skriftmál, sum vit kenna tað í dag», segði hon. Ein drongur spurdi, hví nakar skuldi gera eitt skriftmál, tá ið fólk kortini tosaðu føroyskt. Turið brosti og hugdi at Linu, sum um hon vildi hoyra hansara svar.',
        translation:
          'Chovia fininho sobre Sandavágur quando o Linu parou junto ao monumento a V. U. Hammershaimb, que nasceu ali em 1819. A Turið, professora da aldeia, estava ao lado dele com uma turma de alunos. «Sem ele, o feroês talvez não tivesse uma língua escrita como a conhecemos hoje», disse ela. Um menino perguntou por que alguém precisaria fazer uma língua escrita, se as pessoas já falavam feroês de qualquer jeito. A Turið sorriu e olhou para o Linu, como se quisesse ouvir a resposta dele.',
        choices: [
          { text: '«Tí at eitt mál, sum ikki verður skrivað, hevur ringt við at verja seg.»', translation: '«Porque uma língua que não é escrita tem dificuldade de se defender.»', next: 'svabo' },
          { text: 'Lata Turið svara.', translation: 'Deixar a Turið responder.', next: 'svabo' },
        ],
      },
      svabo: {
        emoji: '📓',
        text: 'Turið greiddi frá, at Hammershaimb ikki var tann fyrsti, sum skrivaði føroyskt. Longu í 1781 og 1782 ferðaðist Jens Christian Svabo úr Miðvági, næstu bygd, um oyggjarnar og skrivaði kvæði upp. Hann skrivaði tey, sum hann hoyrdi tey, eftir framburðinum og mest sum tað ljóðaði í Vágum. Hann gjørdi eisini eina orðabók, sum tó ikki varð prentað, meðan hann livdi. «Svabo bjargaði kvæðunum», segði Turið, «men ein skrift eftir framburðinum í einari bygd kundi ikki verða skrift fyri allar oyggjarnar.»',
        translation:
          'A Turið explicou que Hammershaimb não foi o primeiro a escrever em feroês. Já em 1781 e 1782, Jens Christian Svabo, de Miðvágur, a aldeia vizinha, viajou pelas ilhas anotando baladas. Ele as escrevia como as ouvia, pela pronúncia, e sobretudo como se falava em Vágar. Ele também fez um dicionário, que, no entanto, não foi impresso enquanto ele viveu. «Svabo salvou as baladas», disse a Turið, «mas uma escrita baseada na pronúncia de uma aldeia não podia ser a escrita de todas as ilhas.»',
        choices: [
          { text: '«So Svabo skrivaði, sum hann hoyrdi, og Hammershaimb, sum orðini høvdu verið.»', translation: '«Então Svabo escrevia como ouvia, e Hammershaimb como as palavras tinham sido.»', next: 'hammershaimb' },
          {
            text: '«So tað var Svabo, ið gjørdi stavsetingina, sum vit brúka í dag.»',
            translation: '«Então foi Svabo quem criou a ortografia que usamos hoje.»',
            wrong: 'Não: a Turið contou que Svabo escrevia «eftir framburðinum» (pela pronúncia), sobretudo como se falava em Vágar, e que isso não servia para todas as ilhas. A ortografia de hoje é a de Hammershaimb, de 1846.',
          },
        ],
      },
      hammershaimb: {
        emoji: '📘',
        text: 'Turið nikkaði. «Í 1846 gav Hammershaimb út eina stavseting, sum bygdi á gamalt norrønt mál, ikki á nakra ávísa bygd», segði hon. Ikki øllum dámdi hon; summi hildu, at hon var ov langt frá tí talaða málinum. Men hon hevði ein stóran fyrimun: ein suðuroyingur og ein norðoyingur kundu lesa somu síðu, og hvør kendi sítt egna mál aftur í henni. Seinni savnaði Hammershaimb kvæði, sagnir og ævintýr, og í 1891 kom Færøsk Anthologi út.',
        translation:
          'A Turið concordou com a cabeça. «Em 1846, Hammershaimb publicou uma ortografia baseada na antiga língua nórdica, não em alguma aldeia específica», disse ela. Nem todos gostaram; alguns achavam que ela estava longe demais da língua falada. Mas tinha uma grande vantagem: alguém de Suðuroy e alguém das Ilhas do Norte podiam ler a mesma página, e cada um reconhecia nela a sua própria língua. Mais tarde, Hammershaimb reuniu baladas, lendas e contos, e em 1891 saiu a Færøsk Anthologi.',
        choices: [{ text: 'Spyrja um fyrstu prentaðu bókina við føroyskum kvæðum.', translation: 'Perguntar sobre o primeiro livro impresso com baladas feroesas.', next: 'lyngbye' }],
      },
      lyngbye: {
        emoji: '🐉',
        text: 'Turið tók eina gamla bók upp úr taskuni og greiddi frá, at longu í 1822 hevði danski presturin Hans Christian Lyngbye givið út Sjúrðar kvæði, fyrstu bókina við føroyskum kvæðum. «Hugsið tykkum», segði hon við næmingarnar, «kvæðini um Sjúrð, sum drap dragan Fáfni, høvdu livað í fólks munni í hundraðtals ár, áðrenn tey komu á prent.» Linu hugsaði um, hvussu nógv kvæði vóru gloymd, áðrenn nakar nakrantíð skrivaði tey upp. Regnið var steðgað, og ein veikur sólargeisli fall á minnisvarðan. Turið spurdi, hvat næmingarnir skuldu minnast frá hesum degi, og hugdi aftur at Linu.',
        translation:
          'A Turið tirou um livro velho da bolsa e explicou que, já em 1822, o pastor dinamarquês Hans Christian Lyngbye tinha publicado as baladas de Sjúrður, o primeiro livro com baladas feroesas. «Imaginem», disse ela aos alunos, «as baladas sobre Sjúrður, que matou o dragão Fáfnir, tinham vivido na boca do povo por centenas de anos antes de chegar à imprensa.» O Linu pensou em quantas baladas tinham sido esquecidas antes que alguém chegasse a anotá-las. A chuva tinha parado, e um raio de sol fraco caiu sobre o monumento. A Turið perguntou o que os alunos deviam lembrar deste dia, e olhou de novo para o Linu.',
        choices: [
          { text: '«At tað, vit skriva, verður verandi, tá ið vit sjálv eru farin.»', translation: '«Que o que escrevemos permanece quando nós mesmos já tivermos partido.»', next: 'final_bom' },
          { text: '«At tað er líkamikið, hvussu vit skriva, bara vit skilja hvønn annan.»', translation: '«Que tanto faz como escrevemos, contanto que a gente se entenda.»', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Turið bað næmingarnar skriva setningin hjá Linu upp í heftini, og ein drongur skrivaði hann fyrst, sum hann hoyrdi hann, og síðan rætt. Tey løgdu merki til, hvussu ymisk eitt orð kundi síggja út, sjálvt um tað ljóðaði eins. «Nú hava tit sjálv verið bæði Svabo og Hammershaimb á somu síðu», segði Turið. Um kvøldið stóð Linu einsamallur við minnisvarðan og las navnið í steininum. Honum tóktist, at stavirnir høvdu eina rødd, sum rakk langt út um Vágar.',
        translation:
          'A Turið pediu aos alunos que anotassem a frase do Linu nos cadernos, e um menino a escreveu primeiro como a ouvia e depois do jeito certo. Eles perceberam como uma palavra podia parecer diferente, mesmo soando igual. «Agora vocês mesmos foram Svabo e Hammershaimb na mesma página», disse a Turið. À noite, o Linu ficou sozinho diante do monumento e leu o nome na pedra. Pareceu-lhe que as letras tinham uma voz que chegava muito além de Vágar.',
        ending: { tone: 'bom', title: 'Letras que ficam', message: 'Você acompanhou a história da escrita feroesa — de Svabo e Lyngbye a Hammershaimb — e entendeu por que ela importa.' },
      },
      final_neutro: {
        emoji: '🌫️',
        text: 'Turið nikkaði, men hon sá eitt sindur kedd út. «Tað er rætt, at vit skulu skilja hvønn annan», segði hon, «men uttan eina felags skrift høvdu vit kanska ikki havt nakað mál at skiljast á í dag.» Næmingarnir fóru heim, og Linu stóð eftir í regninum, sum aftur var byrjað. Hann hugsaði um Svabo, sum ferðaðist um oyggjarnar at bjarga kvæðum, sum eingin annar skrivaði. Seint um kvøldið skrivaði hann í dagbókina, at líkamikið er tað als ikki.',
        translation:
          'A Turið concordou com a cabeça, mas pareceu um pouco triste. «É verdade que precisamos nos entender», disse ela, «mas sem uma escrita comum talvez não tivéssemos hoje uma língua em que nos entender.» Os alunos foram para casa, e o Linu ficou na chuva, que tinha recomeçado. Ele pensou em Svabo, que viajou pelas ilhas para salvar baladas que ninguém mais anotava. Tarde da noite, escreveu no diário que não, não tanto faz.',
        ending: { tone: 'neutro', title: 'Tanto faz?', message: 'Você entendeu a história, mas no fim tratou a ortografia como detalhe — justamente o que manteve o feroês vivo por escrito.' },
      },
    },
  },
  {
    id: 'fo-h45',
    level: 'C2',
    cefr: 'C2',
    title: 'Kvæðið um risan og kellingina',
    emoji: '🪨',
    summary: 'Numa noite em Eiði, uma senhora conta ao Linu a lenda dos dois pilares de rocha no mar — e o Linu precisa acompanhar uma narrativa literária cheia de viradas.',
    cultural_context:
      'Ao largo de Eiði, no noroeste de Eysturoy, erguem-se no mar dois pilares de rocha chamados Risin og Kellingin («o gigante e a giganta»). Diz a lenda que os dois vieram da Islândia para arrastar as Faroé até lá, trabalharam a noite inteira e, ao nascer do sol, viraram pedra — porque trolls não suportam a luz do dia.',
    start: 'start',
    glossary: [
      ['ein søgn', 'uma lenda'],
      ['ein drangur', 'um pilar de rocha no mar'],
      ['ein risi', 'um gigante'],
      ['ein kelling', 'uma velha; nas lendas, uma giganta'],
      ['at ágirnast', 'cobiçar'],
      ['at stirðna', 'enrijecer, petrificar-se'],
      ['varð teimum at bana', 'foi a morte deles'],
      ['tað var einaferð', 'era uma vez'],
    ],
    nodes: {
      start: {
        emoji: '🌅',
        text: 'Eitt kvøld í Eiði, norðarlaga í Eysturoy, sat Linu hjá gomlu Sunnevu og hugdi út gjøgnum vindeygað. Úti í sjónum, norðanfyri bygdina, stóðu tveir høgir drangar, myrkir móti kvøldhimninum. «Veitst tú, hvørji tey eru?» spurdi Sunneva, og áðrenn hann fekk svarað, helt hon fram: «Tað eru Risin og Kellingin, og tey vóru einaferð livandi.» Hon legði bundingina frá sær, sum ein ger, tá ið ein long søga er á veg. Linu setti seg til rættis.',
        translation:
          'Numa noite em Eiði, no norte de Eysturoy, o Linu estava sentado na casa da velha Sunneva, olhando pela janela. Lá fora no mar, ao norte da aldeia, erguiam-se dois pilares altos de rocha, escuros contra o céu da noite. «Você sabe quem eles são?», perguntou a Sunneva, e antes que ele conseguisse responder, continuou: «São o Gigante e a Giganta, e um dia eles estiveram vivos.» Ela deixou o tricô de lado, como se faz quando vem aí uma história comprida. O Linu se ajeitou na cadeira.',
        choices: [
          { text: 'Biðja hana fortelja søguna.', translation: 'Pedir que ela conte a história.', next: 'island' },
          { text: '«Ein drangur kann ikki hava verið livandi.»', translation: '«Um pilar de rocha não pode ter estado vivo.»', next: 'ivi' },
        ],
      },
      ivi: {
        emoji: '👓',
        text: 'Sunneva hugdi at honum yvir brillurnar. «Nei, tað sigur tú, og tað sigur skúlin», segði hon, «men søgan veit ymiskt, sum skúlin ikki veit.» Hon greiddi frá, at ein søgn ikki er ein lygn, men ein máti at goyma nakað satt á, um fólk og um landið. «Hoyr fyrst, so kanst tú døma», segði hon. Linu brosti og lovaði at lurta.',
        translation:
          'A Sunneva olhou para ele por cima dos óculos. «É, isso diz você, e isso diz a escola», disse ela, «mas a história sabe umas coisas que a escola não sabe.» Ela explicou que uma lenda não é uma mentira, mas um jeito de guardar algo verdadeiro, sobre as pessoas e sobre a terra. «Escute primeiro, depois você julga», disse ela. O Linu sorriu e prometeu escutar.',
        choices: [{ text: 'Lurta eftir søguni.', translation: 'Escutar a história.', next: 'island' }],
      },
      island: {
        emoji: '🧌',
        text: 'Sunneva byrjaði, sum mamma hennara hevði byrjað: «Tað var einaferð, at íslendingar tóku at ágirnast Føroyar.» Teir sendu ein risa og eina kelling suður um havið at draga oyggjarnar heim til Íslands. Tá ið tey komu til Eiðiskoll, norðvesturhornið á Eysturoy, vóð risin út í sjógvin, men kellingin kleiv upp á fjallið við einum reipi. Hon bant reipið um kollin og togaði, so fjallið rivnaði, og sagt verður, at enn í dag sæst rivan. «Men Føroyar sita fast í botninum», segði Sunneva og klappaði í borðið, «tær lata seg ikki flyta so lætt.»',
        translation:
          'A Sunneva começou do jeito que a mãe dela começava: «Era uma vez, os islandeses começaram a cobiçar as Faroé.» Eles mandaram um gigante e uma giganta para o sul, pelo mar, para arrastar as ilhas até a Islândia. Quando chegaram a Eiðiskollur, a ponta noroeste de Eysturoy, o gigante entrou no mar, mas a giganta subiu a montanha com uma corda. Ela amarrou a corda em volta do cume e puxou, e a montanha se rachou; dizem que até hoje se vê a fenda. «Mas as Faroé estão bem presas no fundo», disse a Sunneva, dando um tapinha na mesa, «não se deixam mover tão fácil.»',
        choices: [
          { text: '«Og fingu tey so ikki dregið tær avstað?»', translation: '«E eles não conseguiram arrastá-las, então?»', next: 'sol' },
          {
            text: '«So kellingin stóð í sjónum, og risin kleiv upp á fjallið?»',
            translation: '«Então a giganta ficou no mar, e o gigante subiu a montanha?»',
            wrong: 'Foi o contrário: «risin» (o gigante) entrou no mar («vóð út í sjógvin»), e «kellingin» (a giganta) subiu a montanha com a corda («kleiv upp á fjallið»). Num texto literário, vale conferir quem faz o quê!',
          },
        ],
      },
      sol: {
        emoji: '☀️',
        text: 'Sunneva lækkaði røddina. «Tey stríddust alla náttina, og tey vóru so upptikin av arbeiðinum, at tey gloymdu at hyggja eftir tíðini.» Tá ið sólin rann og fyrsti geislin kom yvir havið, varð hann teimum at bana, tí trøll tola ikki dagsljós. Tey stirðnaðu til stein, júst har tey stóðu, og har standa tey enn og hyggja út móti Íslandi, sum tey ongantíð komu heim aftur til. Sunneva tagdi eina løtu, og Linu hoyrdi bert brimið úti við drangarnar.',
        translation:
          'A Sunneva baixou a voz. «Eles lutaram a noite inteira, e estavam tão absortos no trabalho que se esqueceram de olhar a hora.» Quando o sol nasceu e o primeiro raio atravessou o mar, foi a morte deles, porque trolls não suportam a luz do dia. Eles viraram pedra exatamente onde estavam, e lá continuam, olhando para a Islândia, para onde nunca voltaram. A Sunneva ficou calada por um momento, e o Linu só ouvia a arrebentação lá fora, junto aos pilares.',
        choices: [
          { text: '«So søgan sigur eisini nakað um, hvussu fast føroyingar halda um landið.»', translation: '«Então a história também diz algo sobre o quanto os feroeses se apegam à sua terra.»', next: 'final_bom' },
          { text: '«Tað er bara ein barnasøga um trøll.»', translation: '«É só uma historinha infantil sobre trolls.»', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Sunneva brosti og tók bundingina upp aftur. «Tú hevur hoyrt meira enn orðini», segði hon, «tú hevur hoyrt, hví vit fortelja hana.» Hon greiddi frá, at søgan varð fortald í mongum húsum, og at hvør forteljari legði sítt afturat. Tá ið Linu fór til songar, stóð hann eina løtu við vindeygað og hugdi eftir drangunum í náttarmyrkrinum. Honum tóktist, at Kellingin brosti eitt sindur, nú tá ið enn ein hevði lært søgu hennara.',
        translation:
          'A Sunneva sorriu e pegou o tricô de novo. «Você ouviu mais do que as palavras», disse ela, «ouviu por que nós a contamos.» Ela explicou que a história era contada em muitas casas, e que cada narrador acrescentava algo seu. Quando o Linu foi se deitar, ficou um momento à janela olhando os pilares na escuridão da noite. Pareceu-lhe que a Giganta sorria um pouco, agora que mais alguém tinha aprendido a história dela.',
        ending: { tone: 'bom', title: 'A voz da lenda', message: 'Você acompanhou uma narrativa literária no passado — søgn, stirðnaðu, varð teimum at bana — e ouviu o que a lenda diz sobre o apego à terra.' },
      },
      final_neutro: {
        emoji: '🌬️',
        text: 'Sunneva segði einki, men hon tók bundingina upp aftur og bant víðari í tøgn. Eftir eina løtu segði hon stilliliga, at tað finnast søgur, sum børn hoyra, og søgur, sum vaksin skilja. Linu kendi, at hann hevði latið eina hurð aftur, sum hon hevði hildið opna fyri honum. Um morgunin gekk hann út móti Eiðiskolli at síggja drangarnar úr nánd. Í vindinum hugsaði hann, at hann kanska skuldi havt lurtað eitt sindur betur.',
        translation:
          'A Sunneva não disse nada, mas pegou o tricô de novo e continuou tricotando em silêncio. Depois de um momento, disse baixinho que existem histórias que as crianças ouvem e histórias que os adultos entendem. O Linu sentiu que tinha fechado uma porta que ela mantinha aberta para ele. De manhã, ele caminhou em direção a Eiðiskollur para ver os pilares de perto. No vento, pensou que talvez devesse ter escutado um pouco melhor.',
        ending: { tone: 'neutro', title: 'Só uma história de troll?', message: 'Você entendeu a lenda, mas a reduziu a conto de criança — e perdeu o que a Sunneva queria mostrar.' },
      },
    },
  },
];
