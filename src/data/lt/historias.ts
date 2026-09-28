import type { StorySeed } from '../types';

/** Histórias interativas em lituano: 3 por subnível, cada uma num lugar diferente. */
export const STORIES_LT: StorySeed[] = [
  // ───────────────────────── A1.1 ─────────────────────────
  {
    id: 'lt-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Labas, aš Linu!',
    emoji: '🏰',
    summary: 'Na praça da Catedral, em Vilnius, o Linu conhece a Rūta, uma guia, e sobe até a torre de Gediminas.',
    cultural_context:
      'A praça da Catedral (Katedros aikštė) é o coração de Vilnius: a catedral branca tem a torre do sino (varpinė) separada, e no morro ao lado fica a torre de tijolos vermelhos do castelo de Gediminas. No chão da praça, um ladrilho com a palavra «Stebuklas» (milagre) marca uma das pontas da Via Báltica de 1989, a corrente humana que ligou Vilnius a Tallinn.',
    start: 'start',
    glossary: [
      ['Labas! / Viso gero!', 'Oi! / Tchau!'],
      ['Aš esu… / Kas tu?', 'Eu sou… / Quem é você?'],
      ['yra', 'é, está, há (3ª pessoa de «būti», ser/estar)'],
      ['ačiū', 'obrigado (o «č» soa como o «tch» de «tchau»)'],
      ['taip / ne', 'sim / não'],
      ['Man dvidešimt metų.', 'Eu tenho vinte anos. (ao pé da letra: «a mim, vinte anos»)'],
      ['gidė / gidas', 'guia (mulher) / guia (homem)'],
      ['dešimt', 'dez'],
    ],
    nodes: {
      start: {
        emoji: '⛪',
        text: 'Vilnius, Katedros aikštė. Linu yra turistas. Jis yra laimingas.',
        translation: 'Vilnius, praça da Catedral. O Linu é turista. Ele está feliz.',
        choices: [
          { text: 'Linu žiūri į katedrą.', translation: 'O Linu olha para a catedral.', next: 'katedra' },
          { text: 'Linu eina prie varpinės.', translation: 'O Linu vai até a torre do sino.', next: 'varpine' },
        ],
      },
      katedra: {
        emoji: '🏛️',
        text: 'Katedra yra didelė ir balta.',
        translation: 'A catedral é grande e branca.',
        choices: [{ text: 'Linu eina toliau.', translation: 'O Linu segue em frente.', next: 'rute' }],
      },
      varpine: {
        emoji: '🔔',
        text: 'Varpinė yra aukšta. Ji irgi balta.',
        translation: 'A torre do sino é alta. Ela também é branca.',
        choices: [{ text: 'Linu eina toliau.', translation: 'O Linu segue em frente.', next: 'rute' }],
      },
      rute: {
        emoji: '👩',
        text: 'Čia yra mergina. «Labas! Aš esu Rūta. O kas tu?»',
        translation: 'Aqui há uma moça. «Oi! Eu sou a Rūta. E quem é você?»',
        choices: [
          { text: '«Labas! Aš esu Linu.»', translation: '«Oi! Eu sou o Linu.»', next: 'metai' },
          {
            text: '«Viso gero, Rūta!»',
            translation: '«Tchau, Rūta!»',
            wrong: 'A Rūta disse «Labas!» (Oi!) e perguntou «Kas tu?» (Quem é você?). «Viso gero» é «tchau»: o Linu nem se apresentou ainda! Responda «Aš esu Linu».',
          },
        ],
      },
      metai: {
        emoji: '🎂',
        text: '«Malonu, Linu! Man dvidešimt metų. O tau?»',
        translation: '«Prazer, Linu! Eu tenho vinte anos. E você?»',
        choices: [
          { text: '«Man irgi dvidešimt!»', translation: '«Eu também tenho vinte!»', next: 'gide' },
          { text: '«Man dešimt metų.»', translation: '«Eu tenho dez anos.»', next: 'gide' },
        ],
      },
      gide: {
        emoji: '🗺️',
        text: '«Aš esu gidė. Ten yra Gedimino bokštas. Eime?»',
        translation: '«Eu sou guia. Lá está a torre de Gediminas. Vamos?»',
        choices: [
          { text: '«Taip! Ačiū, Rūta!»', translation: '«Sim! Obrigado, Rūta!»', next: 'final_bom' },
          { text: '«Ne, ačiū. Viso gero!»', translation: '«Não, obrigado. Tchau!»', next: 'final_neutro' },
          {
            text: '«Tu esi turistė?»',
            translation: '«Você é turista?»',
            wrong: 'A Rūta acabou de dizer «Aš esu gidė»: ela é guia, não turista. «Aš esu» é «eu sou»; o turista aqui é o Linu!',
          },
        ],
      },
      final_bom: {
        emoji: '🧱',
        text: 'Gedimino bokštas yra raudonas. Vilnius yra gražus!',
        translation: 'A torre de Gediminas é vermelha. Vilnius é linda!',
        ending: { tone: 'bom', title: 'Vilnius lá de cima', message: 'O Linu subiu o morro com a Rūta e viu a cidade inteira. Primeira amiga lituana!' },
      },
      final_neutro: {
        emoji: '🚶',
        text: 'Linu yra vienas. Rūta yra ten, prie bokšto.',
        translation: 'O Linu está sozinho. A Rūta está lá, perto da torre.',
        ending: { tone: 'neutro', title: 'Turista solitário', message: 'O Linu disse «ne, ačiū» (não, obrigado) e perdeu o passeio. Tente de novo e responda «taip» (sim)!' },
      },
    },
  },
  {
    id: 'lt-h2',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Kibinai Trakuose',
    emoji: '🥟',
    summary: 'Em Trakai, ao lado do castelo na ilha, o Linu conhece o Tomas e conta pastéis caraítas.',
    cultural_context:
      'Trakai, a cerca de 30 km de Vilnius, tem um castelo de tijolos vermelhos numa ilha do lago Galvė. Ali vivem há séculos os caraítas (karaimai), um pequeno povo de origem turcomana trazido pelo grão-duque Vytautas no fim do século XIV; o prato deles, o kibinas (um pastel assado recheado de carne), virou símbolo da cidade.',
    start: 'start',
    glossary: [
      ['Laba diena!', 'Bom dia! / Boa tarde! (a saudação mais educada do dia)'],
      ['pilis', 'castelo'],
      ['ežeras', 'lago'],
      ['kibinas / kibinai', 'pastel caraíta / pastéis caraítas'],
      ['prašau', 'por favor'],
      ['vienas, du, trys, keturi', 'um, dois, três, quatro'],
      ['skanu', 'gostoso'],
      ['alkanas', 'com fome'],
    ],
    nodes: {
      start: {
        emoji: '🏞️',
        text: 'Trakai. Čia yra ežeras ir pilis. Pilis yra raudona.',
        translation: 'Trakai. Aqui há um lago e um castelo. O castelo é vermelho.',
        choices: [
          { text: 'Linu žiūri į pilį.', translation: 'O Linu olha para o castelo.', next: 'pilis' },
          { text: 'Linu yra alkanas.', translation: 'O Linu está com fome.', next: 'kavine' },
        ],
      },
      pilis: {
        emoji: '🏰',
        text: 'Pilis yra sena ir graži. Bet Linu yra alkanas!',
        translation: 'O castelo é antigo e bonito. Mas o Linu está com fome!',
        choices: [{ text: 'Linu eina į kavinę.', translation: 'O Linu vai ao café.', next: 'kavine' }],
      },
      kavine: {
        emoji: '👨‍🍳',
        text: '«Laba diena! Aš esu Tomas. Čia yra kibinai.»',
        translation: '«Bom dia! Eu sou o Tomas. Aqui há kibinai.»',
        choices: [
          { text: '«Laba diena! Aš esu Linu.»', translation: '«Bom dia! Eu sou o Linu.»', next: 'kiek' },
          { text: '«Labas! Kibinai? Kas tai?»', translation: '«Oi! Kibinai? O que é isso?»', next: 'kas' },
        ],
      },
      kas: {
        emoji: '🥟',
        text: '«Tai pyragėliai su mėsa. Labai skanu!»',
        translation: '«São pasteizinhos com carne. Muito gostoso!»',
        choices: [{ text: '«Gerai!»', translation: '«Está bem!»', next: 'kiek' }],
      },
      kiek: {
        emoji: '💶',
        text: '«Vienas kibinas – du eurai. Kiek?»',
        translation: '«Um kibinas: dois euros. Quantos?»',
        choices: [
          { text: '«Du, prašau.»', translation: '«Dois, por favor.»', next: 'du' },
          { text: '«Dešimt, prašau!»', translation: '«Dez, por favor!»', next: 'final_neutro' },
          {
            text: '«Vienas kibinas – dešimt eurų? Brangu!»',
            translation: '«Um kibinas: dez euros? Caro!»',
            wrong: 'O Tomas disse «du eurai»: dois euros, não dez (dešimt). Um kibinas é baratinho!',
          },
        ],
      },
      du: {
        emoji: '🧾',
        text: '«Du kibinai – keturi eurai. Ačiū!»',
        translation: '«Dois kibinai: quatro euros. Obrigado!»',
        choices: [{ text: '«Ačiū, Tomai!»', translation: '«Obrigado, Tomas!»', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '😋',
        text: 'Linu valgo prie ežero. Kibinai karšti ir labai skanūs.',
        translation: 'O Linu come perto do lago. Os kibinai estão quentes e muito gostosos.',
        ending: { tone: 'bom', title: 'Piquenique no lago', message: 'Dois kibinai, quatro euros e uma vista para o castelo. O Linu aprendeu a contar comendo!' },
      },
      final_neutro: {
        emoji: '💸',
        text: 'Dešimt kibinų – dvidešimt eurų! Linu sotus, bet piniginė tuščia.',
        translation: 'Dez kibinai: vinte euros! O Linu está cheio, mas a carteira está vazia.',
        ending: { tone: 'neutro', title: 'Pinguim guloso', message: '«Dešimt» é dez! Um já era de bom tamanho… Tente de novo e peça «du» (dois).' },
      },
    },
  },
  {
    id: 'lt-h3',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Gintaras ant smėlio',
    emoji: '🟠',
    summary: 'Na praia de Palanga, o Linu conhece a pequena Ieva, que encontrou âmbar na areia.',
    cultural_context:
      'Palanga é a cidade de praia mais famosa da Lituânia, com um longo píer de madeira sobre o Báltico. Depois das tempestades, o mar joga pedacinhos de âmbar (gintaras) na areia; o Museu do Âmbar da cidade fica num palácio do século XIX dos condes Tiškevičius, no meio de um grande parque botânico.',
    start: 'start',
    glossary: [
      ['jūra', 'mar'],
      ['smėlis', 'areia'],
      ['tiltas', 'ponte; aqui, o píer de Palanga'],
      ['gintaras', 'âmbar'],
      ['Man septyneri metai.', 'Eu tenho sete anos. (com «metai», que só existe no plural, usa-se o numeral coletivo: «septyneri»)'],
      ['Žiūrėk!', 'Olha!'],
      ['tau', 'para você'],
    ],
    nodes: {
      start: {
        emoji: '🏖️',
        text: 'Palanga. Čia yra jūra ir smėlis. Diena graži.',
        translation: 'Palanga. Aqui há mar e areia. O dia está bonito.',
        choices: [
          { text: 'Linu eina į paplūdimį.', translation: 'O Linu vai à praia.', next: 'smelis' },
          { text: 'Linu eina į tiltą.', translation: 'O Linu vai ao píer.', next: 'tiltas' },
        ],
      },
      tiltas: {
        emoji: '🌬️',
        text: 'Tiltas yra ilgas. Vėjas stiprus!',
        translation: 'O píer é comprido. O vento está forte!',
        choices: [{ text: 'Linu eina į paplūdimį.', translation: 'O Linu vai à praia.', next: 'smelis' }],
      },
      smelis: {
        emoji: '👧',
        text: 'Ten yra mergaitė. «Labas! Aš esu Ieva. Man septyneri metai.»',
        translation: 'Lá está uma menina. «Oi! Eu sou a Ieva. Eu tenho sete anos.»',
        choices: [
          { text: '«Labas, Ieva! Aš esu Linu.»', translation: '«Oi, Ieva! Eu sou o Linu.»', next: 'gintaras' },
          {
            text: '«Tau septyniolika metų?»',
            translation: '«Você tem dezessete anos?»',
            wrong: 'A Ieva disse «septyneri»: sete anos, não dezessete (septyniolika). Ela é uma menininha!',
          },
        ],
      },
      gintaras: {
        emoji: '✨',
        text: '«Žiūrėk! Čia gintaras! Vienas, du, trys!»',
        translation: '«Olha! Aqui tem âmbar! Um, dois, três!»',
        choices: [
          { text: '«Gintaras yra gražus!»', translation: '«O âmbar é bonito!»', next: 'dovana' },
          { text: '«Tai tik akmuo.»', translation: '«Isso é só uma pedra.»', next: 'final_neutro' },
        ],
      },
      dovana: {
        emoji: '🎁',
        text: '«Vienas – tau, Linu!»',
        translation: '«Um é para você, Linu!»',
        choices: [{ text: '«Ačiū, Ieva! Labai ačiū!»', translation: '«Obrigado, Ieva! Muito obrigado!»', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🌅',
        text: 'Linu turi gintarą. Saulė raudona. Palanga graži!',
        translation: 'O Linu tem um âmbar. O sol está vermelho. Palanga é linda!',
        ending: { tone: 'bom', title: 'Um tesouro do Báltico', message: 'O Linu ganhou um pedacinho de âmbar da Ieva e viu o pôr do sol no mar.' },
      },
      final_neutro: {
        emoji: '😢',
        text: '«Ne, tai ne akmuo! Tai gintaras!» Ieva liūdna.',
        translation: '«Não, isso não é pedra! É âmbar!» A Ieva está triste.',
        ending: { tone: 'neutro', title: 'Não é pedra!', message: 'O âmbar é o «ouro do Báltico». Tente de novo e diga que ele é «gražus» (bonito).' },
      },
    },
  },
  // ───────────────────────── A1.2 ─────────────────────────
  {
    id: 'lt-h4',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Cepelinai Laisvės alėjoje',
    emoji: '🥔',
    summary: 'Em Kaunas, o Linu entra num restaurante da avenida da Liberdade para provar os cepelinai.',
    cultural_context:
      'Kaunas foi a capital provisória da Lituânia entre as duas guerras mundiais (1920–1939), e a Laisvės alėja (avenida da Liberdade), comprida e só para pedestres, é o seu passeio principal. Os cepelinai, grandes bolinhos de batata recheados de carne ou de requeijão, ganharam o nome pela forma parecida com a dos dirigíveis zepelim.',
    start: 'start',
    glossary: [
      ['nori / noriu', 'quer / eu quero'],
      ['valgo / valgau', 'come / eu como'],
      ['turime cepelinus', 'temos cepelinai (o objeto vai no acusativo: cepelinai → cepelinus)'],
      ['neturime šaltibarščių', 'não temos sopa fria de beterraba (depois do «ne-», o objeto passa para o genitivo)'],
      ['padavėja', 'garçonete'],
      ['su varške', 'com requeijão (varškė: um queijo fresco tipo ricota)'],
      ['Ar skanu?', 'Está gostoso?'],
    ],
    nodes: {
      start: {
        emoji: '🌳',
        text: 'Kaunas, Laisvės alėja. Linu nori valgyti ir ieško restorano.',
        translation: 'Kaunas, avenida da Liberdade. O Linu quer comer e procura um restaurante.',
        choices: [
          { text: 'Linu eina į restoraną.', translation: 'O Linu entra no restaurante.', next: 'restoranas' },
          { text: 'Linu perka ledus.', translation: 'O Linu compra sorvete.', next: 'ledai' },
        ],
      },
      ledai: {
        emoji: '🍦',
        text: 'Linu valgo ledus. Bet jis vis dar alkanas!',
        translation: 'O Linu toma sorvete. Mas ele ainda está com fome!',
        choices: [{ text: 'Linu eina į restoraną.', translation: 'O Linu entra no restaurante.', next: 'restoranas' }],
      },
      restoranas: {
        emoji: '👩‍🍳',
        text: 'Padavėja sako: «Laba diena! Šiandien turime cepelinus. Bet neturime šaltibarščių.»',
        translation: 'A garçonete diz: «Boa tarde! Hoje temos cepelinai. Mas não temos sopa fria de beterraba.»',
        choices: [
          { text: '«Du cepelinus, prašau.»', translation: '«Dois cepelinai, por favor.»', next: 'cepelinai' },
          { text: '«Ačiū, bet aš nevalgau mėsos.»', translation: '«Obrigado, mas eu não como carne.»', next: 'varske' },
          {
            text: '«Tada šaltibarščius, prašau.»',
            translation: '«Então a sopa fria de beterraba, por favor.»',
            wrong: 'A garçonete disse «neturime šaltibarščių»: NÃO temos. O «ne-» grudado no verbo nega, e por isso a palavra foi para o genitivo (šaltibarščių). Hoje só tem cepelinai!',
          },
        ],
      },
      varske: {
        emoji: '🧀',
        text: 'Padavėja šypsosi: «Nieko tokio. Turime cepelinus su varške!»',
        translation: 'A garçonete sorri: «Não tem problema. Temos cepelinai com requeijão!»',
        choices: [{ text: '«Puiku! Du, prašau.»', translation: '«Ótimo! Dois, por favor.»', next: 'cepelinai' }],
      },
      cepelinai: {
        emoji: '🍽️',
        text: 'Cepelinai dideli ir karšti. Linu valgo, o padavėja klausia: «Ar skanu?»',
        translation: 'Os cepelinai são grandes e quentes. O Linu come, e a garçonete pergunta: «Está gostoso?»',
        choices: [
          { text: '«Labai skanu! Ačiū!»', translation: '«Muito gostoso! Obrigado!»', next: 'final_bom' },
          { text: '«Skanu, bet labai sunku…»', translation: '«Gostoso, mas muito pesado…»', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🚶',
        text: 'Linu moka ir eina Laisvės alėja. Kaunas jam labai patinka!',
        translation: 'O Linu paga e passeia pela avenida da Liberdade. Ele gosta muito de Kaunas!',
        ending: { tone: 'bom', title: 'Zepelim na barriga', message: 'O Linu provou o prato mais famoso da Lituânia. Próxima parada: um bom passeio para digerir!' },
      },
      final_neutro: {
        emoji: '😴',
        text: 'Linu nebevalgo antro cepelino. Jis nori tik miegoti!',
        translation: 'O Linu não come mais o segundo cepelinas. Ele só quer dormir!',
        ending: { tone: 'neutro', title: 'Soneca depois do almoço', message: 'Os cepelinai são pesados mesmo! Repare: «nebevalgo antro cepelino», com a negação, o objeto vai para o genitivo.' },
      },
    },
  },
  {
    id: 'lt-h5',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Keltas į Smiltynę',
    emoji: '⛴️',
    summary: 'Em Klaipėda, o Linu precisa de uma passagem para a balsa e descobre pinguins do outro lado.',
    cultural_context:
      'Klaipėda é o único porto marítimo da Lituânia. Uma balsa curta atravessa o estreito até Smiltynė, a ponta norte do istmo da Curlândia, onde o Museu Marítimo da Lituânia (Lietuvos jūrų muziejus), instalado num forte do século XIX, tem golfinhos, focas e até pinguins.',
    start: 'start',
    glossary: [
      ['keltas', 'balsa'],
      ['bilietas', 'passagem, bilhete'],
      ['turi / neturi bilieto', 'tem / não tem passagem (com «ne-», bilietas vai para o genitivo: bilieto)'],
      ['kasa', 'bilheteria, caixa'],
      ['kainuoja', 'custa'],
      ['mato', 'vê'],
      ['pingvinai', 'pinguins'],
      ['draugai', 'amigos'],
    ],
    nodes: {
      start: {
        emoji: '⚓',
        text: 'Klaipėda, uostas. Linu nori plaukti į Smiltynę, bet neturi bilieto.',
        translation: 'Klaipėda, porto. O Linu quer ir para Smiltynė, mas não tem passagem.',
        choices: [
          { text: 'Linu eina į kasą.', translation: 'O Linu vai à bilheteria.', next: 'kasa' },
          { text: 'Linu lipa į keltą be bilieto.', translation: 'O Linu sobe na balsa sem passagem.', next: 'kontrole' },
        ],
      },
      kontrole: {
        emoji: '👮',
        text: 'Kontrolierius klausia: «Kur jūsų bilietas?» Linu neturi bilieto.',
        translation: 'O fiscal pergunta: «Onde está a sua passagem?» O Linu não tem passagem.',
        choices: [{ text: '«Atsiprašau! Aš einu į kasą.»', translation: '«Desculpe! Eu vou à bilheteria.»', next: 'kasa' }],
      },
      kasa: {
        emoji: '🎫',
        text: 'Kasininkė sako: «Bilietas kainuoja vieną eurą.»',
        translation: 'A caixa diz: «A passagem custa um euro.»',
        choices: [
          { text: '«Prašau vieną bilietą.»', translation: '«Uma passagem, por favor.»', next: 'keltas' },
          {
            text: '«Dešimt eurų? Labai brangu!»',
            translation: '«Dez euros? Muito caro!»',
            wrong: 'A caixa disse «vieną eurą»: um euro («vienas» no acusativo, porque é o que a passagem custa). Não são dez!',
          },
        ],
      },
      keltas: {
        emoji: '🌊',
        text: 'Keltas plaukia. Linu mato jūrą ir žuvėdras.',
        translation: 'A balsa navega. O Linu vê o mar e as gaivotas.',
        choices: [
          { text: 'Linu eina į Jūrų muziejų.', translation: 'O Linu vai ao Museu Marítimo.', next: 'muziejus' },
          { text: 'Linu eina į paplūdimį.', translation: 'O Linu vai à praia.', next: 'final_neutro' },
        ],
      },
      muziejus: {
        emoji: '🐧',
        text: 'Jūrų muziejus turi pingvinus! Jie žiūri į Linu.',
        translation: 'O Museu Marítimo tem pinguins! Eles olham para o Linu.',
        choices: [
          { text: '«Labas, broliai!»', translation: '«Oi, irmãos!»', next: 'final_bom' },
          {
            text: '«Gaila, čia nėra pingvinų.»',
            translation: '«Que pena, aqui não há pinguins.»',
            wrong: 'O texto diz «muziejus turi pingvinus»: o museu TEM pinguins (pingvinus, no acusativo). E eles estão olhando para o Linu!',
          },
        ],
      },
      final_bom: {
        emoji: '💙',
        text: 'Pingvinai ir Linu kartu žiūri į jūrą. Linu turi naujus draugus!',
        translation: 'Os pinguins e o Linu olham juntos para o mar. O Linu tem novos amigos!',
        ending: { tone: 'bom', title: 'Família no Báltico', message: 'Uma passagem de balsa e o Linu encontrou parentes do outro lado do estreito!' },
      },
      final_neutro: {
        emoji: '😴',
        text: 'Linu guli ant smėlio ir miega. Muziejaus jis nemato.',
        translation: 'O Linu deita na areia e dorme. O museu, ele não vê.',
        ending: { tone: 'neutro', title: 'Soneca na areia', message: 'A praia é boa, mas o Linu perdeu os pinguins do museu! Repare: «muziejaus nemato», o objeto negado vai para o genitivo.' },
      },
    },
  },
  {
    id: 'lt-h6',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Sūrus vanduo',
    emoji: '💧',
    summary: 'Em Druskininkai, a cidade das águas, o Linu prova a água mineral e vai ao parque aquático.',
    cultural_context:
      'Druskininkai, perto da fronteira sul, é a estância termal mais famosa da Lituânia, à beira do rio Nemunas. O nome vem de «druska» (sal): as fontes de água mineral da cidade são salgadas, e ela tem hoje um grande parque aquático coberto.',
    start: 'start',
    glossary: [
      ['vanduo', 'água (acusativo: vandenį)'],
      ['sūrus', 'salgado'],
      ['plaukti / plaukia', 'nadar / nada'],
      ['rankšluostis', 'toalha'],
      ['neturiu rankšluosčio', 'não tenho toalha (genitivo depois do «ne-»)'],
      ['skaito laikraštį', 'lê o jornal'],
      ['senelis', 'avô, senhor idoso'],
    ],
    nodes: {
      start: {
        emoji: '🏞️',
        text: 'Druskininkai. Linu turi laisvą dieną. Jis nori plaukti.',
        translation: 'Druskininkai. O Linu tem um dia livre. Ele quer nadar.',
        choices: [
          { text: 'Linu eina į vandens parką.', translation: 'O Linu vai ao parque aquático.', next: 'parkas' },
          { text: 'Linu geria mineralinį vandenį.', translation: 'O Linu bebe água mineral.', next: 'saltinis' },
        ],
      },
      saltinis: {
        emoji: '⛲',
        text: 'Vanduo labai sūrus! Linu sako: «Kaip jūra!»',
        translation: 'A água é muito salgada! O Linu diz: «Igual ao mar!»',
        choices: [{ text: '«Dabar – į vandens parką!»', translation: '«Agora, ao parque aquático!»', next: 'parkas' }],
      },
      parkas: {
        emoji: '🎟️',
        text: 'Kasininkė klausia: «Ar turite rankšluostį?»',
        translation: 'A caixa pergunta: «O senhor tem toalha?»',
        choices: [
          { text: '«Taip, turiu rankšluostį.»', translation: '«Sim, tenho toalha.»', next: 'baseinas' },
          { text: '«Ne, neturiu rankšluosčio.»', translation: '«Não, não tenho toalha.»', next: 'nuoma' },
        ],
      },
      nuoma: {
        emoji: '🧺',
        text: '«Nieko tokio. Rankšluostis kainuoja tris eurus.»',
        translation: '«Não tem problema. A toalha custa três euros.»',
        choices: [{ text: '«Gerai, ačiū.»', translation: '«Está bem, obrigado.»', next: 'baseinas' }],
      },
      baseinas: {
        emoji: '🏊',
        text: 'Baseinas didelis. Vaikai čiuožia, o senelis skaito laikraštį.',
        translation: 'A piscina é grande. As crianças escorregam no tobogã, e um senhor lê o jornal.',
        choices: [
          { text: 'Linu plaukia kaip žuvis.', translation: 'O Linu nada como um peixe.', next: 'final_bom' },
          { text: 'Linu irgi skaito laikraštį.', translation: 'O Linu também lê o jornal.', next: 'final_neutro' },
          {
            text: '«Kodėl vaikai skaito laikraštį?»',
            translation: '«Por que as crianças estão lendo jornal?»',
            wrong: 'Quem lê o jornal é o «senelis» (o senhor idoso): «senelis skaito laikraštį». As crianças (vaikai) escorregam (čiuožia)!',
          },
        ],
      },
      final_bom: {
        emoji: '🐧',
        text: 'Linu plaukia greitai. Vaikai šaukia: «Pingvinas!»',
        translation: 'O Linu nada rápido. As crianças gritam: «Um pinguim!»',
        ending: { tone: 'bom', title: 'Estrela da piscina', message: 'Nadar é com o Linu mesmo! Ele virou a atração do parque aquático.' },
      },
      final_neutro: {
        emoji: '📰',
        text: 'Linu skaito, bet nesupranta žodžių. Jis užmiega.',
        translation: 'O Linu lê, mas não entende as palavras. Ele pega no sono.',
        ending: { tone: 'neutro', title: 'Jornal de travesseiro', message: 'Veio nadar e dormiu lendo! Repare: «nesupranta žodžių», genitivo depois do «ne-».' },
      },
    },
  },
  // ───────────────────────── A2.1 ─────────────────────────
  {
    id: 'lt-h7',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Ant Parnidžio kopos',
    emoji: '🏜️',
    summary: 'Em Nida, no istmo da Curlândia, o Linu visita o porto dos pescadores e sobe a grande duna de Parnidis.',
    cultural_context:
      'O istmo da Curlândia (Kuršių nerija), uma faixa de areia entre o mar Báltico e a laguna (marios), é Patrimônio Mundial da UNESCO desde 2000; a Lituânia divide o istmo com a Rússia (a região de Kaliningrado), ao sul de Nida. No alto da duna de Parnidis há um grande relógio de sol, e os barcos dos pescadores levavam cataventos coloridos (vėtrungės) que indicavam a aldeia de cada barco.',
    start: 'start',
    glossary: [
      ['Kuršių nerijoje', 'no istmo da Curlândia (locativo de «nerija»)'],
      ['prie marių', 'junto à laguna (prie + genitivo)'],
      ['kopa / ant kopos', 'duna / em cima da duna (ant + genitivo)'],
      ['vėtrungė', 'catavento de barco de pesca'],
      ['saulės laikrodis', 'relógio de sol (ao pé da letra: «relógio do sol», com o genitivo na frente)'],
      ['mediniu taku', 'pela passarela de madeira'],
      ['Ar…?', 'partícula que abre as perguntas de sim ou não'],
    ],
    nodes: {
      start: {
        emoji: '🏡',
        text: 'Nida yra mažas kaimas Kuršių nerijoje. Linu gyvena mėlyname name prie marių.',
        translation: 'Nida é uma aldeia pequena no istmo da Curlândia. O Linu mora numa casa azul junto à laguna.',
        choices: [
          { text: 'Linu eina į Parnidžio kopą.', translation: 'O Linu vai à duna de Parnidis.', next: 'kopa' },
          { text: 'Linu eina į žvejų uostą.', translation: 'O Linu vai ao porto dos pescadores.', next: 'uostas' },
        ],
      },
      uostas: {
        emoji: '⛵',
        text: 'Uoste stovi seni mediniai laivai. Ant stiebų kabo spalvotos vėtrungės.',
        translation: 'No porto há barcos velhos de madeira. Nos mastros estão pendurados cataventos coloridos.',
        choices: [{ text: '«Atsiprašau, ar šios vėtrungės labai senos?»', translation: '«Com licença, esses cataventos são muito antigos?»', next: 'zvejys' }],
      },
      zvejys: {
        emoji: '🎣',
        text: 'Senas žvejys atsako: «Vėtrungė – tai laivo pasas. Ji rodo žvejo kaimą.»',
        translation: 'Um pescador velho responde: «O catavento é o passaporte do barco. Ele mostra a aldeia do pescador.»',
        choices: [{ text: '«Įdomu! Dabar einu į kopą.»', translation: '«Interessante! Agora vou à duna.»', next: 'kopa' }],
      },
      kopa: {
        emoji: '☀️',
        text: 'Parnidžio kopa yra aukšta ir smėlėta. Ant kopos stovi didelis saulės laikrodis. Prie tako yra ženklas: «Eiti tik mediniu taku!»',
        translation: 'A duna de Parnidis é alta e arenosa. No alto da duna fica um grande relógio de sol. Perto do caminho há uma placa: «Andar só pela passarela de madeira!»',
        choices: [
          { text: 'Linu eina mediniu taku.', translation: 'O Linu vai pela passarela de madeira.', next: 'virsus' },
          { text: 'Linu bėga per smėlį.', translation: 'O Linu corre pela areia.', next: 'final_neutro' },
          {
            text: 'Linu ieško saulės laikrodžio prie jūros.',
            translation: 'O Linu procura o relógio de sol perto do mar.',
            wrong: 'O texto diz «ant kopos»: o relógio de sol fica EM CIMA da duna. «Ant» + genitivo (kopos) indica «em cima de».',
          },
        ],
      },
      virsus: {
        emoji: '🌬️',
        text: 'Nuo kopos viršaus matyti marios ir jūra. Vėjas stiprus, o smėlis šiltas.',
        translation: 'Do alto da duna dá para ver a laguna e o mar. O vento está forte, e a areia está quente.',
        choices: [
          { text: '«Ar čia dar Lietuva?»', translation: '«Aqui ainda é a Lituânia?»', next: 'pasienis' },
          { text: 'Linu sėdi ir žiūri į jūrą.', translation: 'O Linu senta e olha para o mar.', next: 'final_bom' },
        ],
      },
      pasienis: {
        emoji: '🗺️',
        text: 'Moteris šalia šypsosi: «Taip, mes esame Lietuvoje. Bet pietuose, netoli nuo čia, yra Rusijos siena.»',
        translation: 'Uma mulher ao lado sorri: «Sim, estamos na Lituânia. Mas ao sul, pertinho daqui, fica a fronteira com a Rússia.»',
        choices: [{ text: '«Ačiū! Dabar žinau.»', translation: '«Obrigado! Agora eu sei.»', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🌅',
        text: 'Saulė leidžiasi į jūrą. Linu tyliai sėdi ant kopos viršaus.',
        translation: 'O sol se põe no mar. O Linu fica sentado em silêncio no alto da duna.',
        ending: { tone: 'bom', title: 'Pôr do sol na duna', message: 'Pela passarela, sem estragar a areia: o Linu viu o mar e a laguna ao mesmo tempo.' },
      },
      final_neutro: {
        emoji: '🦺',
        text: 'Prižiūrėtojas sustabdo Linu: «Kopos yra trapios! Prašom eiti taku.» Linu raudonuoja.',
        translation: 'Um guarda-parque para o Linu: «As dunas são frágeis! Por favor, ande pela passarela.» O Linu fica vermelho.',
        ending: { tone: 'neutro', title: 'Fora da trilha', message: 'A placa dizia «tik mediniu taku» (só pela passarela de madeira): as dunas se desfazem com os passos.' },
      },
    },
  },
  {
    id: 'lt-h8',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Kelias į Kryžių kalną',
    emoji: '✝️',
    summary: 'Em Šiauliai, o Linu procura o ônibus certo para a Colina das Cruzes.',
    cultural_context:
      'A Colina das Cruzes (Kryžių kalnas) fica a cerca de 12 km ao norte de Šiauliai. As pessoas deixam cruzes ali desde o século XIX; no período soviético a colina foi arrasada várias vezes, e as cruzes sempre voltaram. Hoje são dezenas de milhares, grandes e pequenas, e o papa João Paulo II visitou o lugar em 1993.',
    start: 'start',
    glossary: [
      ['Šiauliuose', 'em Šiauliai (locativo de um nome que só existe no plural)'],
      ['autobusų stotyje', 'na rodoviária (ao pé da letra: «na estação dos ônibus»)'],
      ['už dvylikos kilometrų', 'a doze quilômetros (už + genitivo)'],
      ['kito autobuso', 'de outro ônibus (genitivo)'],
      ['tūkstančiai kryžių', 'milhares de cruzes'],
      ['tarp', 'entre (+ genitivo)'],
      ['mažo kryžiaus', 'de uma cruz pequena (adjetivo e substantivo concordam no genitivo)'],
    ],
    nodes: {
      start: {
        emoji: '🚌',
        text: 'Linu yra Šiauliuose, autobusų stotyje. Jis nori važiuoti į Kryžių kalną.',
        translation: 'O Linu está em Šiauliai, na rodoviária. Ele quer ir à Colina das Cruzes.',
        choices: [
          { text: '«Atsiprašau, ar šis autobusas važiuoja į Kryžių kalną?»', translation: '«Com licença, este ônibus vai à Colina das Cruzes?»', next: 'vairuotojas' },
          { text: 'Linu eina į kavinę prie stoties.', translation: 'O Linu vai ao café perto da estação.', next: 'kavine' },
        ],
      },
      kavine: {
        emoji: '☕',
        text: 'Kavinėje dirba jauna mergina. Ji sako: «Kalnas yra už dvylikos kilometrų nuo miesto. Važiuokite autobusu.»',
        translation: 'No café trabalha uma moça. Ela diz: «A colina fica a doze quilômetros da cidade. Vá de ônibus.»',
        choices: [{ text: '«Ačiū! Einu į stotį.»', translation: '«Obrigado! Vou à estação.»', next: 'vairuotojas' }],
      },
      vairuotojas: {
        emoji: '🧔',
        text: 'Vairuotojas atsako: «Ne, šis autobusas važiuoja į Kelmę. Jums reikia kito autobuso – jis stovi prie kiosko.»',
        translation: 'O motorista responde: «Não, este ônibus vai para Kelmė. O senhor precisa de outro ônibus: ele está parado perto do quiosque.»',
        choices: [
          { text: 'Linu eina prie kiosko.', translation: 'O Linu vai até o quiosque.', next: 'kitas' },
          {
            text: 'Linu lieka šiame autobuse.',
            translation: 'O Linu fica neste ônibus.',
            wrong: 'O motorista disse «Ne» e «Jums reikia kito autobuso»: o senhor precisa de OUTRO ônibus, que está «prie kiosko» (perto do quiosque).',
          },
        ],
      },
      kitas: {
        emoji: '🌾',
        text: 'Autobusas važiuoja pro laukus. Po dvidešimties minučių Linu mato kalną.',
        translation: 'O ônibus passa pelos campos. Depois de vinte minutos, o Linu vê a colina.',
        choices: [{ text: 'Linu išlipa.', translation: 'O Linu desce do ônibus.', next: 'kalnas' }],
      },
      kalnas: {
        emoji: '⛰️',
        text: 'Ant kalno stovi tūkstančiai kryžių: dideli ir maži, mediniai ir metaliniai. Tarp kryžių eina siauras takas.',
        translation: 'Na colina há milhares de cruzes: grandes e pequenas, de madeira e de metal. Entre as cruzes passa um caminho estreito.',
        choices: [
          { text: 'Linu tyliai eina taku.', translation: 'O Linu anda em silêncio pelo caminho.', next: 'moteris' },
          {
            text: '«Čia tik keli kryžiai.»',
            translation: '«Aqui há só algumas cruzes.»',
            wrong: '«Tūkstančiai kryžių» são MILHARES de cruzes: tūkstantis é «mil», e depois dele a palavra vai para o genitivo plural (kryžių).',
          },
        ],
      },
      moteris: {
        emoji: '👵',
        text: 'Prie kalno sėdi sena moteris. Ji klausia: «Ar nori mažo kryžiaus? Jis kainuoja tris eurus.»',
        translation: 'Perto da colina está sentada uma senhora. Ela pergunta: «Quer uma cruz pequena? Custa três euros.»',
        choices: [
          { text: '«Taip, prašau. Noriu jį palikti čia.»', translation: '«Sim, por favor. Quero deixá-la aqui.»', next: 'final_bom' },
          { text: '«Ne, ačiū. Aš tik žiūriu.»', translation: '«Não, obrigado. Só estou olhando.»', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🕊️',
        text: 'Linu pakabina mažą kryžių ant didelio kryžiaus. Dabar ant kalno yra ir pingvino kryžius.',
        translation: 'O Linu pendura a cruz pequena numa cruz grande. Agora na colina também há a cruz de um pinguim.',
        ending: { tone: 'bom', title: 'Uma cruz a mais', message: 'O Linu achou o ônibus certo e deixou sua marca num dos lugares mais tocantes da Lituânia.' },
      },
      final_neutro: {
        emoji: '🤫',
        text: 'Linu vaikšto tarp kryžių ir tyli. Jis nieko neperka, bet ši vieta jam labai svarbi.',
        translation: 'O Linu caminha entre as cruzes em silêncio. Ele não compra nada, mas este lugar é muito importante para ele.',
        ending: { tone: 'neutro', title: 'Só olhando', message: 'Visitar em silêncio também vale. Da próxima vez, quem sabe, uma cruzinha?' },
      },
    },
  },
  {
    id: 'lt-h9',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Užupio konstitucija',
    emoji: '👼',
    summary: 'No bairro boêmio de Užupis, em Vilnius, o Linu procura a famosa «constituição» da república dos artistas.',
    cultural_context:
      'Užupis, bairro de artistas do outro lado do riozinho Vilnelė, declarou-se «república» de brincadeira em 1º de abril de 1997, com presidente, bandeira e hino. Sua constituição está pendurada numa parede da rua Paupio, em placas em várias línguas, com artigos como «Šuo turi teisę būti šunimi» (o cão tem o direito de ser cão). Na praça central, um anjo de bronze toca trombeta no alto de uma coluna.',
    start: 'start',
    glossary: [
      ['per tiltą', 'pela ponte, atravessando a ponte'],
      ['kitoje upės pusėje', 'do outro lado do rio (locativo + genitivo)'],
      ['spyna / spynų', 'cadeado / de cadeados'],
      ['ant sienos', 'na parede (ant + genitivo)'],
      ['Paupio gatvėje', 'na rua Paupio (locativo)'],
      ['žemėlapis', 'mapa'],
      ['turi teisę', 'tem o direito'],
      ['laimingas', 'feliz'],
    ],
    nodes: {
      start: {
        emoji: '🌉',
        text: 'Linu eina per tiltą per Vilnelę. Kitoje upės pusėje yra Užupis – menininkų rajonas.',
        translation: 'O Linu atravessa a ponte sobre o Vilnelė. Do outro lado do rio fica Užupis, o bairro dos artistas.',
        choices: [
          { text: 'Linu sustoja ant tilto.', translation: 'O Linu para em cima da ponte.', next: 'tiltas' },
          { text: 'Linu eina į aikštę.', translation: 'O Linu vai até a praça.', next: 'aikste' },
        ],
      },
      tiltas: {
        emoji: '🔒',
        text: 'Ant tilto turėklų kabo daug spynų. Tai įsimylėjėlių spynos.',
        translation: 'No corrimão da ponte estão pendurados muitos cadeados. São cadeados de namorados.',
        choices: [{ text: '«Gražu! Einu toliau.»', translation: '«Que bonito! Vou em frente.»', next: 'aikste' }],
      },
      aikste: {
        emoji: '🎺',
        text: 'Aikštės viduryje stovi aukšta kolona. Ant kolonos stovi bronzinis angelas su trimitu.',
        translation: 'No meio da praça há uma coluna alta. Em cima da coluna há um anjo de bronze com uma trombeta.',
        choices: [{ text: 'Linu klausia menininko: «Kur yra Užupio konstitucija?»', translation: 'O Linu pergunta a um artista: «Onde fica a constituição de Užupis?»', next: 'menininkas' }],
      },
      menininkas: {
        emoji: '🎨',
        text: 'Menininkas Paulius šypsosi: «Konstitucija kabo ant sienos Paupio gatvėje, netoli nuo čia. Ar turi žemėlapį?»',
        translation: 'O artista Paulius sorri: «A constituição está pendurada numa parede da rua Paupio, pertinho daqui. Você tem mapa?»',
        choices: [
          { text: '«Taip, turiu. Ačiū!»', translation: '«Sim, tenho. Obrigado!»', next: 'gatve' },
          { text: '«Ne, neturiu žemėlapio.»', translation: '«Não, não tenho mapa.»', next: 'kartu' },
          {
            text: 'Linu ieško konstitucijos ant kolonos.',
            translation: 'O Linu procura a constituição na coluna.',
            wrong: 'O Paulius disse «ant sienos Paupio gatvėje»: numa parede da rua Paupio. Na coluna só está o anjo!',
          },
        ],
      },
      kartu: {
        emoji: '🚶',
        text: '«Nieko tokio, eime kartu!» Paulius ir Linu eina siaura gatve. Paulius pasakoja: Užupio respublika turi savo prezidentą, vėliavą ir himną.',
        translation: '«Não tem problema, vamos juntos!» O Paulius e o Linu vão por uma rua estreita. O Paulius conta: a república de Užupis tem presidente, bandeira e hino próprios.',
        choices: [{ text: '«Tikra respublika!»', translation: '«Uma república de verdade!»', next: 'gatve' }],
      },
      gatve: {
        emoji: '🪞',
        text: 'Ant sienos kabo daug blizgančių lentelių įvairiomis kalbomis. Linu skaito lietuvišką tekstą: «Šuo turi teisę būti šunimi.»',
        translation: 'Na parede há muitas placas brilhantes em várias línguas. O Linu lê o texto em lituano: «O cão tem o direito de ser cão.»',
        choices: [
          { text: '«O pingvinas turi teisę būti pingvinu!»', translation: '«E o pinguim tem o direito de ser pinguim!»', next: 'final_bom' },
          { text: '«Keista konstitucija. Einu namo.»', translation: '«Constituição esquisita. Vou para casa.»', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '😄',
        text: 'Praeivė juokiasi: «Teisingai! Kiekvienas turi teisę būti laimingas.» Linu Užupyje labai laimingas.',
        translation: 'Uma passante ri: «Isso mesmo! Todo mundo tem o direito de ser feliz.» O Linu está muito feliz em Užupis.',
        ending: { tone: 'bom', title: 'Cidadão de Užupis', message: 'O Linu entendeu o espírito da república dos artistas e ganhou até um artigo novo para a constituição.' },
      },
      final_neutro: {
        emoji: '🤷',
        text: 'Linu grįžta į Senamiestį. Užupio humoro jis dar nesupranta.',
        translation: 'O Linu volta para a Cidade Velha. O humor de Užupis ele ainda não entende.',
        ending: { tone: 'neutro', title: 'Piada perdida', message: 'A constituição de Užupis é uma brincadeira poética. Volte e leia de novo, com um sorriso!' },
      },
    },
  },
  // ───────────────────────── A2.2 ─────────────────────────
  {
    id: 'lt-h10',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Valtis iki septynių',
    emoji: '🚣',
    summary: 'No lago Plateliai, na Samogícia, o Linu e a amiga Gintarė alugam um barco e precisam devolvê-lo na hora.',
    cultural_context:
      'O lago Plateliai é o maior da Samogícia (Žemaitija) e o centro do Parque Nacional da Samogícia, criado em 1991; tem várias ilhas, entre elas a Ilha do Castelo (Pilies sala), cheia de lendas. No vilarejo de Plateliai há uma exposição das máscaras de madeira do carnaval samogiciano (Užgavėnės).',
    start: 'start',
    glossary: [
      ['atvažiavo / buvo', 'chegou / foi, estava (passado)'],
      ['su savo drauge', 'com a sua amiga (instrumental; «savo» remete ao sujeito)'],
      ['davė jiems', 'deu a eles (dativo)'],
      ['irklai', 'remos'],
      ['iki septynių', 'até as sete (horas)'],
      ['pusė septynių', 'seis e meia (ao pé da letra: «metade da sétima»)'],
      ['mano senelis', 'o meu avô'],
      ['laiku', 'na hora certa (instrumental de «laikas», tempo)'],
    ],
    nodes: {
      start: {
        emoji: '🏞️',
        text: 'Vakar Linu atvažiavo prie Platelių ežero su savo drauge Gintare. Oras buvo šiltas, o vanduo – ramus.',
        translation: 'Ontem o Linu chegou ao lago Plateliai com a sua amiga Gintarė. O tempo estava quente, e a água, calma.',
        choices: [
          { text: 'Jie išsinuomojo valtį.', translation: 'Eles alugaram um barco.', next: 'valtis' },
          { text: 'Pirmiausia jie nuėjo į miestelį.', translation: 'Primeiro eles foram ao vilarejo.', next: 'miestelis' },
        ],
      },
      miestelis: {
        emoji: '👺',
        text: 'Miestelyje jie aplankė kaukių ekspoziciją. Gintarė parodė Linu seną velnio kaukę ir pasakė: «Mano brolis turi tokią pačią!»',
        translation: 'No vilarejo eles visitaram uma exposição de máscaras. A Gintarė mostrou ao Linu uma velha máscara de diabo e disse: «O meu irmão tem uma igualzinha!»',
        choices: [{ text: '«Dabar – prie ežero!»', translation: '«Agora, para o lago!»', next: 'valtis' }],
      },
      valtis: {
        emoji: '🛶',
        text: 'Valčių nuomotojas davė jiems du irklus ir dvi gelbėjimosi liemenes. «Valtį reikia grąžinti iki septynių», – pasakė jis.',
        translation: 'O homem que aluga os barcos deu a eles dois remos e dois coletes salva-vidas. «É preciso devolver o barco até as sete», disse ele.',
        choices: [
          { text: 'Linu nuirklavo į Pilies salą.', translation: 'O Linu remou até a Ilha do Castelo.', next: 'sala' },
          {
            text: 'Jie galėjo plaukioti visą naktį.',
            translation: 'Eles podiam passear de barco a noite toda.',
            wrong: 'O homem disse «iki septynių»: o barco tinha de voltar até as sete horas. Nada de passar a noite no lago!',
          },
        ],
      },
      sala: {
        emoji: '🌳',
        text: 'Pilies saloje augo seni medžiai. Jie sėdėjo ant kranto ir valgė sumuštinius, o Gintarė papasakojo Linu legendą apie seną pilį.',
        translation: 'Na Ilha do Castelo cresciam árvores velhas. Eles se sentaram na margem e comeram sanduíches, e a Gintarė contou ao Linu uma lenda sobre um castelo antigo.',
        choices: [
          { text: 'Linu paklausė: «Ar tai tiesa?»', translation: 'O Linu perguntou: «Isso é verdade?»', next: 'legenda' },
          { text: 'Linu nieko neklausė ir užsnūdo.', translation: 'O Linu não perguntou nada e cochilou.', next: 'vakaras' },
        ],
      },
      legenda: {
        emoji: '🔔',
        text: 'Gintarė nusijuokė: «Mano senelis sakė, kad naktį iš ežero girdėti varpai. Bet aš jų niekada negirdėjau.»',
        translation: 'A Gintarė riu: «O meu avô dizia que, à noite, dá para ouvir sinos saindo do lago. Mas eu nunca ouvi.»',
        choices: [{ text: '«Gal ir gerai!»', translation: '«Talvez seja melhor assim!»', next: 'vakaras' }],
      },
      vakaras: {
        emoji: '🕡',
        text: 'Saulė jau leidosi. Linu pažiūrėjo į savo laikrodį: buvo pusė septynių.',
        translation: 'O sol já estava se pondo. O Linu olhou para o seu relógio: eram seis e meia.',
        choices: [
          { text: 'Jie greitai irklavo atgal.', translation: 'Eles remaram depressa de volta.', next: 'final_bom' },
          { text: 'Jie liko saloje ir žiūrėjo į saulėlydį.', translation: 'Eles ficaram na ilha olhando o pôr do sol.', next: 'final_neutro' },
          {
            text: '«Dar turime dvi valandas!»',
            translation: '«Ainda temos duas horas!»',
            wrong: '«Pusė septynių» é seis e meia (a metade da hora sete). O barco tinha de voltar às sete: sobrava só meia hora!',
          },
        ],
      },
      final_bom: {
        emoji: '🐟',
        text: 'Jie grąžino valtį laiku. Nuomotojas padėkojo jiems ir padovanojo Linu rūkytą žuvį.',
        translation: 'Eles devolveram o barco na hora. O homem agradeceu a eles e deu de presente ao Linu um peixe defumado.',
        ending: { tone: 'bom', title: 'Pontualidade premiada', message: 'Remando rápido, o Linu e a Gintarė chegaram antes das sete e ainda ganharam o jantar!' },
      },
      final_neutro: {
        emoji: '😠',
        text: 'Jie grįžo tik aštuntą valandą. Nuomotojas buvo piktas, ir jiems reikėjo sumokėti baudą.',
        translation: 'Eles só voltaram às oito horas. O homem estava bravo, e eles tiveram de pagar multa.',
        ending: { tone: 'neutro', title: 'Pôr do sol caro', message: 'A vista era linda, mas o combinado era «iki septynių» (até as sete). Tente de novo!' },
      },
    },
  },
  {
    id: 'lt-h11',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Grybų diena',
    emoji: '🍄',
    summary: 'No Parque Nacional de Aukštaitija, o Linu vai colher cogumelos com o avô Vytautas.',
    cultural_context:
      'O Parque Nacional de Aukštaitija, criado em 1974, foi o primeiro da Lituânia: florestas de pinheiros e abetos e dezenas de lagos, que se avistam do morro Ladakalnis. Colher cogumelos (grybauti) é quase um esporte nacional no fim do verão e no outono, e o boleto (baravykas) é o mais cobiçado.',
    start: 'start',
    glossary: [
      ['išėjo / paėmė', 'saiu / pegou (passado)'],
      ['grybai / grybų', 'cogumelos / de cogumelos (genitivo plural)'],
      ['po eglėmis', 'debaixo dos abetos (po + instrumental plural)'],
      ['baravykas', 'boleto, o cogumelo mais apreciado'],
      ['musmirė', 'amanita, o cogumelo vermelho de bolinhas brancas (venenoso)'],
      ['nuodinga', 'venenosa'],
      ['savo lėkštę', 'o seu prato (o próprio)'],
      ['močiutei ir seneliui', 'à avó e ao avô (dativo)'],
    ],
    nodes: {
      start: {
        emoji: '🧺',
        text: 'Rugsėjo rytą Linu ir senelis Vytautas išėjo į mišką. Senelis turėjo du krepšius ir peilį.',
        translation: 'Numa manhã de setembro, o Linu e o avô Vytautas saíram para a floresta. O avô levava dois cestos e uma faca.',
        choices: [
          { text: 'Linu paėmė vieną krepšį.', translation: 'O Linu pegou um cesto.', next: 'miskas' },
          { text: 'Linu paklausė: «Kur mes einame?»', translation: 'O Linu perguntou: «Aonde nós vamos?»', next: 'kalnas' },
        ],
      },
      kalnas: {
        emoji: '⛰️',
        text: 'Senelis atsakė: «Pirmiausia – ant Ladakalnio.» Nuo kalno jie pamatė mėlynus ežerus tarp miškų.',
        translation: 'O avô respondeu: «Primeiro, ao Ladakalnis.» Do alto do morro eles viram lagos azuis entre as florestas.',
        choices: [{ text: 'Paskui jie nuėjo į mišką.', translation: 'Depois eles foram para a floresta.', next: 'miskas' }],
      },
      miskas: {
        emoji: '🌲',
        text: 'Miške buvo drėgna ir tylu. Po eglėmis augo daug grybų.',
        translation: 'Na floresta estava úmido e silencioso. Debaixo dos abetos cresciam muitos cogumelos.',
        choices: [
          { text: 'Linu rado rudą grybą storu kotu.', translation: 'O Linu achou um cogumelo marrom de pé grosso.', next: 'baravykas' },
          { text: 'Linu rado raudoną grybą su baltais taškeliais.', translation: 'O Linu achou um cogumelo vermelho com bolinhas brancas.', next: 'musmire' },
        ],
      },
      musmire: {
        emoji: '⚠️',
        text: 'Senelis sušuko: «Ne! Tai musmirė – ji nuodinga!» Linu greitai padėjo grybą ant žemės.',
        translation: 'O avô gritou: «Não! Isso é uma amanita, ela é venenosa!» O Linu pôs depressa o cogumelo no chão.',
        choices: [
          { text: 'Linu ieškojo toliau.', translation: 'O Linu continuou procurando.', next: 'baravykas' },
          {
            text: 'Linu įdėjo musmirę į savo krepšį.',
            translation: 'O Linu colocou a amanita no seu cesto.',
            wrong: 'O avô disse «ji nuodinga» (ela é venenosa), e o Linu «padėjo grybą ant žemės»: pôs o cogumelo no chão. Nada de amanita no cesto!',
          },
        ],
      },
      baravykas: {
        emoji: '🤩',
        text: 'Senelis apsidžiaugė: «Baravykas! Tai geriausias grybas.» Iki pietų jie pririnko pilnus krepšius.',
        translation: 'O avô ficou contente: «Um boleto! É o melhor cogumelo.» Até a hora do almoço, eles encheram os cestos.',
        choices: [
          { text: 'Jie grįžo namo pas močiutę.', translation: 'Eles voltaram para casa, para a avó.', next: 'namai' },
          { text: 'Linu norėjo rinkti dar ilgiau ir nuėjo vienas.', translation: 'O Linu quis colher ainda mais e foi sozinho.', next: 'final_neutro' },
        ],
      },
      namai: {
        emoji: '🍳',
        text: 'Močiutė iškepė grybus su bulvėmis. Linu padavė jai savo lėkštę ir paprašė dar.',
        translation: 'A avó fritou os cogumelos com batatas. O Linu passou a ela o seu prato e pediu mais.',
        choices: [
          { text: 'Linu padėkojo močiutei ir seneliui.', translation: 'O Linu agradeceu à avó e ao avô.', next: 'final_bom' },
          { text: 'Linu paskambino savo mamai ir papasakojo apie grybus.', translation: 'O Linu ligou para a sua mãe e contou dos cogumelos.', next: 'final_bom' },
        ],
      },
      final_bom: {
        emoji: '🫙',
        text: '«Ačiū jums už tokią dieną!» – pasakė Linu. Močiutė įdėjo jam stiklainį grybų kelionei.',
        translation: '«Obrigado a vocês por um dia assim!», disse o Linu. A avó colocou para ele um pote de cogumelos para a viagem.',
        ending: { tone: 'bom', title: 'Cesto cheio', message: 'O Linu aprendeu a separar o boleto da amanita e voltou com cogumelos para o inverno.' },
      },
      final_neutro: {
        emoji: '🌙',
        text: 'Linu vaikščiojo iki vakaro ir pasiklydo. Senelis jį rado tik vakare, pavargusį ir alkaną.',
        translation: 'O Linu andou até a noite e se perdeu. O avô só o encontrou ao anoitecer, cansado e com fome.',
        ending: { tone: 'neutro', title: 'Perdido no bosque', message: 'Na floresta de Aukštaitija não se anda sozinho! Volte e vá para casa com o avô.' },
      },
    },
  },
  {
    id: 'lt-h12',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Šventė prie piliakalnių',
    emoji: '🏹',
    summary: 'Em Kernavė, a antiga capital, o Linu vai a uma festa de arqueologia viva e experimenta ofícios medievais.',
    cultural_context:
      'Kernavė, às margens do rio Neris, foi uma cidade importante do Grão-Ducado da Lituânia na Idade Média; seus cinco morros fortificados (piliakalniai) formam um sítio arqueológico que é Patrimônio Mundial da UNESCO desde 2004. Todo verão, a festa «Gyvosios archeologijos dienos» (dias da arqueologia viva) mostra ali ferreiros, oleiros e arqueiros com roupas de época.',
    start: 'start',
    glossary: [
      ['piliakalnis', 'morro fortificado (onde havia um castelo de madeira)'],
      ['kalvis', 'ferreiro'],
      ['puodininkė', 'oleira'],
      ['parodė jam', 'mostrou a ele (dativo)'],
      ['senoviniais drabužiais', 'com roupas antigas (instrumental plural)'],
      ['lankas / strėlės', 'arco / flechas'],
      ['su dviem dovanomis', 'com dois presentes (instrumental)'],
      ['tavo', 'teu, seu'],
    ],
    nodes: {
      start: {
        emoji: '🛡️',
        text: 'Liepos šeštadienį Linu atvyko į Kernavę. Pievoje prie piliakalnių vyko šventė, o žmonės buvo apsirengę senoviniais drabužiais.',
        translation: 'Num sábado de julho, o Linu chegou a Kernavė. No prado ao lado dos morros fortificados acontecia uma festa, e as pessoas estavam vestidas com roupas antigas.',
        choices: [
          { text: 'Linu užlipo ant piliakalnio.', translation: 'O Linu subiu num dos morros.', next: 'piliakalnis' },
          { text: 'Linu nuėjo pas kalvį.', translation: 'O Linu foi até o ferreiro.', next: 'kalvis' },
        ],
      },
      piliakalnis: {
        emoji: '🏞️',
        text: 'Nuo piliakalnio Linu pamatė Neries slėnį ir dar keturis piliakalnius. Vėjas plaikstė vėliavas.',
        translation: 'Do alto do morro, o Linu viu o vale do Neris e mais quatro morros fortificados. O vento agitava as bandeiras.',
        choices: [{ text: 'Linu nusileido į šventę.', translation: 'O Linu desceu para a festa.', next: 'kalvis' }],
      },
      kalvis: {
        emoji: '⚒️',
        text: 'Kalvis dirbo prie ugnies. Jis parodė Linu, kaip kalti vinį, ir padovanojo jam vieną vinį.',
        translation: 'O ferreiro trabalhava junto ao fogo. Ele mostrou ao Linu como forjar um prego e deu a ele um prego de presente.',
        choices: [{ text: 'Linu padėkojo kalviui ir nuėjo toliau.', translation: 'O Linu agradeceu ao ferreiro e seguiu em frente.', next: 'puodininke' }],
      },
      puodininke: {
        emoji: '🏺',
        text: 'Šalia sėdėjo puodininkė. Ji lipdė molinius puodus rankomis ir sakė vaikams: «Molis mėgsta kantrybę.»',
        translation: 'Ao lado estava sentada uma oleira. Ela modelava potes de barro com as mãos e dizia às crianças: «O barro gosta de paciência.»',
        choices: [
          { text: 'Linu pabandė nulipdyti puodelį.', translation: 'O Linu tentou modelar uma canequinha.', next: 'puodelis' },
          { text: 'Linu nuėjo prie lankininkų.', translation: 'O Linu foi até os arqueiros.', next: 'lankai' },
        ],
      },
      puodelis: {
        emoji: '☕',
        text: 'Puodelis išėjo kreivas, bet puodininkė pagyrė Linu: «Tavo pirmas puodelis – pats gražiausias!»',
        translation: 'A canequinha saiu torta, mas a oleira elogiou o Linu: «A sua primeira canequinha é a mais bonita de todas!»',
        choices: [
          { text: 'Linu įsidėjo savo puodelį į kuprinę.', translation: 'O Linu guardou a sua canequinha na mochila.', next: 'final_bom' },
          {
            text: 'Linu išmetė puodelį, nes puodininkė jį išbarė.',
            translation: 'O Linu jogou a canequinha fora, porque a oleira brigou com ele.',
            wrong: 'A oleira «pagyrė Linu»: ELOGIOU o Linu. Ela disse que a primeira canequinha dele é a mais bonita!',
          },
        ],
      },
      lankai: {
        emoji: '🎯',
        text: 'Lankininkai šaudė į taikinį. Vienas vyras davė Linu lanką ir tris strėles.',
        translation: 'Os arqueiros atiravam num alvo. Um homem deu ao Linu um arco e três flechas.',
        choices: [
          { text: 'Linu šovė tris kartus.', translation: 'O Linu atirou três vezes.', next: 'final_neutro' },
          { text: 'Linu grąžino lanką ir grįžo prie molio.', translation: 'O Linu devolveu o arco e voltou para o barro.', next: 'puodelis' },
        ],
      },
      final_bom: {
        emoji: '🎁',
        text: 'Vakare Linu grįžo į Vilnių su dviem dovanomis: su vinimi ir su kreivu puodeliu.',
        translation: 'À noite o Linu voltou para Vilnius com dois presentes: um prego e uma canequinha torta.',
        ending: { tone: 'bom', title: 'Artesão medieval', message: 'Prego forjado e caneca de barro: o Linu voltou da Idade Média com as mãos cheias.' },
      },
      final_neutro: {
        emoji: '😅',
        text: 'Visos trys strėlės nuskriejo pro šalį. Vaikai juokėsi, o Linu nusprendė kitą kartą likti prie molio.',
        translation: 'As três flechas passaram longe. As crianças riram, e o Linu decidiu ficar com o barro da próxima vez.',
        ending: { tone: 'neutro', title: 'Arqueiro de primeira viagem', message: 'Nem todo pinguim nasce para o arco! Tente de novo e experimente a oleira.' },
      },
    },
  },
  // ───────────────────────── B1.1 ─────────────────────────
  {
    id: 'lt-h13',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Kaziuko mugėje',
    emoji: '🌾',
    summary: 'Na feira de São Casimiro, em Vilnius, o Linu e o amigo Mindaugas procuram ramos secos, rosquinhas e brinquedos de madeira.',
    cultural_context:
      'A Kaziuko mugė, feira de artesanato em homenagem a São Casimiro (Šv. Kazimieras, padroeiro da Lituânia, festejado em 4 de março), enche há séculos as ruas de Vilnius no começo de março. Os símbolos da feira são as verbos (ramos coloridos de flores e ervas secas, usados no Domingo de Ramos) e os riestainiai, rosquinhas duras vendidas em cordões.',
    start: 'start',
    glossary: [
      ['eisime / susitiksime', 'iremos / nos encontraremos (futuro com -s-)'],
      ['Atsikelk! / Apsirenk!', 'Levante-se! / Vista-se! (imperativo com -k e o reflexivo -si: atsikelti, apsirengti)'],
      ['Mindaugai! / Egle!', 'vocativos de Mindaugas e Eglė: o nome muda quando a gente chama alguém'],
      ['Laikykis šalia manęs!', 'Fique perto de mim!'],
      ['verba', 'ramo de flores secas da feira'],
      ['riestainis', 'rosquinha dura'],
      ['Nupirk!', 'Compre! (imperativo de «nupirkti»)'],
      ['Išsirinkite!', 'Escolham! / Escolha! (imperativo de cortesia)'],
    ],
    nodes: {
      start: {
        emoji: '📱',
        text: 'Kovo pradžia, Vilnius. Mindaugas skambina Linu: «Linu, rytoj eisime į Kaziuko mugę! Atsikelk anksti ir apsirenk šiltai.»',
        translation: 'Começo de março, Vilnius. O Mindaugas liga para o Linu: «Linu, amanhã iremos à feira de São Casimiro! Levante cedo e vista-se bem quente.»',
        choices: [
          { text: '«Gerai, Mindaugai! Susitiksime prie Katedros devintą.»', translation: '«Está bem, Mindaugas! Nos encontramos na Catedral às nove.»', next: 'muge' },
          { text: '«Aš dar pamiegosiu… Susitikime po pietų.»', translation: '«Eu vou dormir mais um pouco… Vamos nos encontrar depois do almoço.»', next: 'popiet' },
        ],
      },
      popiet: {
        emoji: '👥',
        text: 'Po pietų mugėje – tūkstančiai žmonių. Linu vos randa Mindaugą. «Matai? Reikėjo keltis anksčiau!» – juokiasi Mindaugas.',
        translation: 'Depois do almoço, a feira está com milhares de pessoas. O Linu mal consegue achar o Mindaugas. «Viu? Era para ter levantado mais cedo!», ri o Mindaugas.',
        choices: [{ text: '«Atsiprašau! Eime prie verbų.»', translation: '«Desculpe! Vamos até os ramos.»', next: 'verbos' }],
      },
      muge: {
        emoji: '🎪',
        text: 'Gedimino prospekte ir Senamiestyje stovi šimtai palapinių. Žmonės pardavinėja medinius šaukštus, pintines ir verbas. Mindaugas sako: «Laikykis šalia manęs ir nepasiklysk!»',
        translation: 'Na avenida Gediminas e na Cidade Velha há centenas de barracas. As pessoas vendem colheres de madeira, cestos de vime e ramos secos. O Mindaugas diz: «Fique perto de mim e não se perca!»',
        choices: [
          { text: 'Linu eina prie verbų.', translation: 'O Linu vai até os ramos.', next: 'verbos' },
          { text: 'Linu eina prie riestainių.', translation: 'O Linu vai até as rosquinhas.', next: 'riestainiai' },
        ],
      },
      verbos: {
        emoji: '💐',
        text: 'Pardavėja rodo spalvingas verbas iš džiovintų gėlių. «Pasiimkite šitą, – sako ji. – Ji puoš jūsų namus iki Velykų.»',
        translation: 'A vendedora mostra ramos coloridos de flores secas. «Leve este», diz ela. «Ele vai enfeitar a sua casa até a Páscoa.»',
        choices: [
          { text: 'Linu nuperka mažą verbą.', translation: 'O Linu compra um ramo pequeno.', next: 'riestainiai' },
          {
            text: '«Ar ji iš plastiko? Ar ji ilgai neišsilaikys?»',
            translation: '«Ele é de plástico? Não vai durar muito?»',
            wrong: 'A vendedora disse «iš džiovintų gėlių» (de flores secas) e «puoš jūsų namus iki Velykų»: vai enfeitar a casa até a Páscoa. «Puoš» é o futuro de «puošti» (enfeitar)!',
          },
        ],
      },
      riestainiai: {
        emoji: '🥯',
        text: 'Ant virvės kabo riestainiai. Mindaugas sako: «Nupirk du – vieną sau, o kitą mano sesei Rasai. Ji ateis vėliau.»',
        translation: 'Num cordão estão penduradas as rosquinhas. O Mindaugas diz: «Compre duas: uma para você e a outra para a minha irmã Rasa. Ela vai chegar mais tarde.»',
        choices: [
          { text: 'Linu nuperka du riestainius.', translation: 'O Linu compra duas rosquinhas.', next: 'rasa' },
          { text: 'Linu nuperka vieną riestainį ir iš karto suvalgo.', translation: 'O Linu compra uma rosquinha e come na hora.', next: 'final_neutro' },
        ],
      },
      rasa: {
        emoji: '👧',
        text: 'Ateina Rasa. «Labas, Linu! Ačiū už riestainį! Ar nueisime pažiūrėti medinių žaislų?»',
        translation: 'Chega a Rasa. «Oi, Linu! Obrigada pela rosquinha! Vamos ver os brinquedos de madeira?»',
        choices: [{ text: '«Žinoma, Rasa! Eime!»', translation: '«Claro, Rasa! Vamos!»', next: 'zaislai' }],
      },
      zaislai: {
        emoji: '🪵',
        text: 'Prie medinių žaislų stovi senas meistras. Jis sako: «Išsirinkite bet kurį paukštį. Visus padariau pats.»',
        translation: 'Junto aos brinquedos de madeira está um velho artesão. Ele diz: «Escolham qualquer passarinho. Todos eu mesmo fiz.»',
        choices: [
          { text: 'Linu išsirenka medinį pingviną.', translation: 'O Linu escolhe um pinguim de madeira.', next: 'final_bom' },
          {
            text: '«Kas padarė šiuos žaislus? Gal fabrikas?»',
            translation: '«Quem fez esses brinquedos? Uma fábrica, talvez?»',
            wrong: 'O artesão disse «Visus padariau pats»: fui eu mesmo que fiz todos. Nada de fábrica!',
          },
        ],
      },
      final_bom: {
        emoji: '🐧',
        text: 'Meistras nusišypso: «Tegu šitas pingvinas saugo tavo namus.» Linu, Mindaugas ir Rasa eina namo su riestainiais ir mediniu pingvinu.',
        translation: 'O artesão sorri: «Que este pinguim proteja a sua casa.» O Linu, o Mindaugas e a Rasa voltam para casa com rosquinhas e um pinguim de madeira.',
        ending: { tone: 'bom', title: 'Um pinguim de madeira', message: 'O Linu seguiu todos os conselhos do Mindaugas e voltou da feira com o melhor souvenir possível.' },
      },
      final_neutro: {
        emoji: '😳',
        text: 'Ateina Rasa: «O kur mano riestainis?» Mindaugas atsidūsta: «Linu, kitą kartą klausykis, ką sakau!»',
        translation: 'Chega a Rasa: «E cadê a minha rosquinha?» O Mindaugas suspira: «Linu, da próxima vez escute o que eu digo!»',
        ending: { tone: 'neutro', title: 'A rosquinha da Rasa', message: 'O Mindaugas pediu duas: «vieną sau, o kitą mano sesei» (uma para você, a outra para a minha irmã). Tente de novo!' },
      },
    },
  },
  {
    id: 'lt-h14',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Užgavėnės Rumšiškėse',
    emoji: '🎭',
    summary: 'No museu a céu aberto de Rumšiškės, o Linu coloca uma máscara e vê o inverno perder a briga no carnaval lituano.',
    cultural_context:
      'As Užgavėnės são o carnaval lituano, na terça-feira antes da Quarta-Feira de Cinzas: gente mascarada de bode, diabo e bruxa, a luta entre o gordo Lašininis (o inverno) e o magro Kanapinis (a primavera), a queima de um boneco de palha, a Morė, e muitas panquecas (blynai). O museu a céu aberto de Rumšiškės, perto de Kaunas, com aldeias antigas remontadas, é um dos lugares onde a festa é mais animada.',
    start: 'start',
    glossary: [
      ['Užsidėk kaukę!', 'Ponha uma máscara! (imperativo do reflexivo «užsidėti»)'],
      ['neįleisime', 'não deixaremos entrar (futuro)'],
      ['Lašininis / Kanapinis', 'o Toucinhudo (inverno) / o Magricela (primavera), de «lašiniai» (toucinho) e «kanapės» (cânhamo)'],
      ['pingvine!', 'ó pinguim! (vocativo de «pingvinas»)'],
      ['Kanapini!', 'vocativo de «Kanapinis»'],
      ['sudegins', 'vão queimar (futuro de «sudeginti»)'],
      ['blynai', 'panquecas'],
      ['Valgyk!', 'Coma! (imperativo)'],
    ],
    nodes: {
      start: {
        emoji: '🛖',
        text: 'Vasario pabaiga. Linu atvažiuoja į Rumšiškes. Draugė Aistė jam sako: «Linu, šiandien Užgavėnės! Užsidėk kaukę – kitaip tavęs neįleisime į šventę!»',
        translation: 'Fim de fevereiro. O Linu chega a Rumšiškės. A amiga Aistė diz a ele: «Linu, hoje é Užgavėnės! Ponha uma máscara, senão não vamos deixar você entrar na festa!»',
        choices: [
          { text: 'Linu užsideda ožio kaukę.', translation: 'O Linu põe uma máscara de bode.', next: 'kauke' },
          { text: 'Linu užsideda velnio kaukę.', translation: 'O Linu põe uma máscara de diabo.', next: 'kauke' },
        ],
      },
      kauke: {
        emoji: '👹',
        text: 'Kaime pilna kaukėtų žmonių: ožių, velnių, raganų. Staiga prie Linu prieina storas vyras. «Aš esu Lašininis! Stok į mano pusę, pingvine!»',
        translation: 'A aldeia está cheia de gente mascarada: bodes, diabos, bruxas. De repente, um homem gordo se aproxima do Linu. «Eu sou o Lašininis! Fique do meu lado, pinguim!»',
        choices: [
          { text: 'Linu stoja į Lašininio pusę.', translation: 'O Linu fica do lado do Lašininis.', next: 'lasininis' },
          { text: 'Linu klausia Aistės: «Kas jis toks?»', translation: 'O Linu pergunta à Aistė: «Quem é esse aí?»', next: 'aiskina' },
        ],
      },
      aiskina: {
        emoji: '🧑‍🏫',
        text: 'Aistė paaiškina: «Lašininis – tai žiema, o Kanapinis – pavasaris. Jie kovos, ir Kanapinis laimės. Tada ateis pavasaris.»',
        translation: 'A Aistė explica: «O Lašininis é o inverno, e o Kanapinis é a primavera. Eles vão lutar, e o Kanapinis vai ganhar. Aí a primavera vai chegar.»',
        choices: [
          { text: 'Linu stoja į Kanapinio pusę.', translation: 'O Linu fica do lado do Kanapinis.', next: 'kanapinis' },
          {
            text: '«Vadinasi, Lašininis atneš pavasarį?»',
            translation: '«Então é o Lašininis que vai trazer a primavera?»',
            wrong: 'A Aistė disse «Lašininis – tai žiema»: o Lašininis é o INVERNO. Quem vai ganhar (laimės, futuro) e trazer a primavera é o Kanapinis.',
          },
        ],
      },
      lasininis: {
        emoji: '🥓',
        text: 'Lašininis džiaugiasi ir duoda Linu dešros. Bet netrukus prasideda kova… ir Kanapinis laimi! Lašininis bėga į mišką.',
        translation: 'O Lašininis fica contente e dá linguiça ao Linu. Mas logo começa a briga… e o Kanapinis ganha! O Lašininis foge para a floresta.',
        choices: [
          { text: 'Linu bėga kartu su Lašininiu.', translation: 'O Linu foge junto com o Lašininis.', next: 'final_neutro' },
          { text: 'Linu grįžta pas Aistę.', translation: 'O Linu volta para junto da Aistė.', next: 'more' },
        ],
      },
      kanapinis: {
        emoji: '🌱',
        text: 'Kanapinis ir Lašininis kovoja su pagaliais. Žmonės šaukia: «Kanapini, laikykis!» Pagaliau Lašininis pasiduoda.',
        translation: 'O Kanapinis e o Lašininis lutam com bastões. As pessoas gritam: «Kanapinis, aguenta firme!» Finalmente o Lašininis se rende.',
        choices: [{ text: '«Valio! Pavasaris ateina!»', translation: '«Viva! A primavera está chegando!»', next: 'more' }],
      },
      more: {
        emoji: '🔥',
        text: 'Vidury aikštės stovi didelė šiaudinė lėlė – Morė. «Žiūrėk, Linu: dabar ją sudegins, ir žiema baigsis», – sako Aistė.',
        translation: 'No meio da praça há uma grande boneca de palha, a Morė. «Olha, Linu: agora vão queimá-la, e o inverno vai acabar», diz a Aistė.',
        choices: [{ text: 'Linu žiūri, kaip dega Morė.', translation: 'O Linu olha a Morė queimar.', next: 'blynai' }],
      },
      blynai: {
        emoji: '🥞',
        text: 'Po šventės Aistės močiutė kepa blynus. «Valgyk, Linu! Per Užgavėnes reikia valgyti daug kartų – tada visus metus būsi sotus.»',
        translation: 'Depois da festa, a avó da Aistė faz panquecas. «Coma, Linu! No Užgavėnės é preciso comer muitas vezes: assim você vai ficar de barriga cheia o ano todo.»',
        choices: [
          { text: 'Linu suvalgo dvylika blynų.', translation: 'O Linu come doze panquecas.', next: 'final_bom' },
          { text: 'Linu suvalgo vieną blyną ir sako: «Užteks.»', translation: 'O Linu come uma panqueca e diz: «Chega.»', next: 'final_vienas' },
        ],
      },
      final_bom: {
        emoji: '😋',
        text: 'Linu atsilošia ir šypsosi. «Aiste, ačiū! Kitais metais vėl atvažiuosiu.»',
        translation: 'O Linu se recosta e sorri. «Aistė, obrigado! No ano que vem eu volto.»',
        ending: { tone: 'bom', title: 'Adeus, inverno!', message: 'Máscara, luta, fogueira e doze panquecas: o Linu fez o Užgavėnės completinho.' },
      },
      final_vienas: {
        emoji: '👵',
        text: 'Močiutė papurto galvą: «Tik vienas blynas? Pavasaris tave ras alkaną!»',
        translation: 'A avó balança a cabeça: «Só uma panqueca? A primavera vai encontrar você com fome!»',
        ending: { tone: 'neutro', title: 'Fome de primavera', message: 'No Užgavėnės a regra é comer muito! Volte e aceite mais blynai.' },
      },
      final_neutro: {
        emoji: '🌲',
        text: 'Linu su Lašininiu pabėga į mišką. Ten šalta ir tamsu – šventė vyks be jų.',
        translation: 'O Linu foge com o Lašininis para a floresta. Lá está frio e escuro, e a festa vai continuar sem eles.',
        ending: { tone: 'neutro', title: 'Do lado do inverno', message: 'O Lašininis é o inverno, e o inverno sempre perde no Užgavėnės! Tente de novo do lado do Kanapinis.' },
      },
    },
  },
  {
    id: 'lt-h15',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Raganų kalno paslaptis',
    emoji: '🧙‍♀️',
    summary: 'Em Juodkrantė, no istmo da Curlândia, o Linu segue a guia Eglė pelo Morro das Bruxas, cheio de esculturas de madeira.',
    cultural_context:
      'O Morro das Bruxas (Raganų kalnas), em Juodkrantė, é uma trilha na floresta de dunas com dezenas de esculturas de madeira de bruxas, diabos e outros personagens das lendas lituanas, feitas por artistas populares a partir de 1979. Perto dali, nos pinheiros à beira da laguna, fica uma das maiores colônias de garças-cinzentas e corvos-marinhos da região.',
    start: 'start',
    glossary: [
      ['važiuosime / kopsime', 'iremos / subiremos (futuro, 1ª pessoa do plural)'],
      ['Neatsilikite! / Laikykitės tako!', 'Não fiquem para trás! / Fiquem na trilha! (imperativo; «laikytis» é reflexivo)'],
      ['Egle!', 'Eglė! (vocativo: -ė vira -e)'],
      ['Nesijuokite!', 'Não riam! (reflexivo negado: o -si- vai logo depois do «ne-»)'],
      ['kaukas / kaukai', 'duende da casa na mitologia lituana'],
      ['išsipildys', 'vai se realizar (futuro do reflexivo «išsipildyti»)'],
      ['ungurys', 'enguia'],
      ['garniai ir kormoranai', 'garças e corvos-marinhos'],
    ],
    nodes: {
      start: {
        emoji: '🌲',
        text: 'Linu atvyko į Juodkrantę su turistų grupe. Gidė Eglė sako: «Rytoj važiuosime į Nidą, o šiandien kopsime į Raganų kalną. Neatsilikite ir laikykitės tako!»',
        translation: 'O Linu chegou a Juodkrantė com um grupo de turistas. A guia Eglė diz: «Amanhã iremos a Nida, e hoje vamos subir o Morro das Bruxas. Não fiquem para trás e não saiam da trilha!»',
        choices: [
          { text: '«Gerai, Egle! Eisiu šalia jūsų.»', translation: '«Está bem, Eglė! Vou ficar do seu lado.»', next: 'takas' },
          { text: 'Linu pirma nori nusipirkti rūkytos žuvies.', translation: 'O Linu quer primeiro comprar peixe defumado.', next: 'zuvis' },
        ],
      },
      zuvis: {
        emoji: '🐟',
        text: 'Prie marių stovi rūkykla. Pardavėjas šaukia: «Paragauk ungurio, pingvine! Tokio nerasi niekur kitur!»',
        translation: 'Na beira da laguna há uma defumaria. O vendedor grita: «Prove a enguia, pinguim! Igual a esta você não vai achar em lugar nenhum!»',
        choices: [
          { text: 'Linu nusiperka ungurio ir bėga pas grupę.', translation: 'O Linu compra um pouco de enguia e corre atrás do grupo.', next: 'takas' },
          { text: 'Linu atsisėda prie marių ir valgo.', translation: 'O Linu se senta na beira da laguna e come.', next: 'final_neutro' },
        ],
      },
      takas: {
        emoji: '😈',
        text: 'Miško take stovi daug medinių skulptūrų: raganos, velniai, kaukai. Eglė pasakoja: «Šitas velnias žiūri, ar vaikai gerai elgiasi. Nesijuokite iš jo!»',
        translation: 'Na trilha da floresta há muitas esculturas de madeira: bruxas, diabos, duendes. A Eglė conta: «Este diabo vigia se as crianças se comportam bem. Não riam dele!»',
        choices: [
          { text: 'Linu rimtai žiūri į velnią ir eina toliau.', translation: 'O Linu olha sério para o diabo e segue em frente.', next: 'ragana' },
          { text: 'Linu klausia: «Egle, kas tie kaukai?»', translation: 'O Linu pergunta: «Eglė, o que são esses kaukai?»', next: 'kaukai' },
          {
            text: 'Linu garsiai juokiasi iš velnio.',
            translation: 'O Linu ri alto do diabo.',
            wrong: 'A Eglė disse «Nesijuokite iš jo!»: NÃO riam dele. No imperativo negado do reflexivo «juoktis», o «-si-» vem logo depois do «ne-»: ne-si-juokite.',
          },
        ],
      },
      kaukai: {
        emoji: '🧌',
        text: 'Eglė paaiškina: «Kaukai – mažos namų dvasios. Jei juos gerai prižiūrėsi, jie atneš tau turtų.»',
        translation: 'A Eglė explica: «Os kaukai são espíritos pequeninos da casa. Se você cuidar bem deles, vão trazer riqueza para você.»',
        choices: [{ text: '«Tada pasiimsiu vieną namo!»', translation: '«Então vou levar um para casa!»', next: 'ragana' }],
      },
      ragana: {
        emoji: '🧹',
        text: 'Toliau stovi didelė ragana su šluota. Eglė juokauja: «Atsisėskite šalia jos ir sugalvokite norą. Jis išsipildys – bet niekam nesakykite!»',
        translation: 'Mais adiante há uma bruxa grande com uma vassoura. A Eglė brinca: «Sentem-se ao lado dela e pensem num desejo. Ele vai se realizar, mas não contem a ninguém!»',
        choices: [
          { text: 'Linu atsisėda ir tyliai sugalvoja norą.', translation: 'O Linu se senta e pensa num desejo em silêncio.', next: 'noras' },
          {
            text: 'Linu garsiai sako visai grupei: «Noriu skraidyti!»',
            translation: 'O Linu diz alto para o grupo todo: «Quero voar!»',
            wrong: 'A Eglė avisou: «niekam nesakykite» (não contem a ninguém). Desejo contado não se realiza!',
          },
        ],
      },
      noras: {
        emoji: '🌊',
        text: 'Eglė kviečia grupę: «Eikite su manimi prie marių. Ten pamatysite garnius ir kormoranus.»',
        translation: 'A Eglė chama o grupo: «Venham comigo até a laguna. Lá vocês vão ver garças e corvos-marinhos.»',
        choices: [{ text: 'Linu eina su grupe.', translation: 'O Linu vai com o grupo.', next: 'kolonija' }],
      },
      kolonija: {
        emoji: '🪶',
        text: 'Aukštose pušyse – šimtai lizdų. Kormoranai klykia, o garniai tyliai stovi ant šakų. Eglė šnabžda: «Linu, ar tavo noras išsipildys?»',
        translation: 'Nos pinheiros altos há centenas de ninhos. Os corvos-marinhos gritam, e as garças ficam quietas nos galhos. A Eglė cochicha: «Linu, o seu desejo vai se realizar?»',
        choices: [{ text: '«Pamatysime, Egle!»', translation: '«Veremos, Eglė!»', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '✨',
        text: 'Linu šypsosi ir niekam nesako savo noro. Jis jau žino: į Juodkrantę jis dar sugrįš.',
        translation: 'O Linu sorri e não conta o seu desejo a ninguém. Ele já sabe: ainda vai voltar a Juodkrantė.',
        ending: { tone: 'bom', title: 'Segredo guardado', message: 'O Linu seguiu a trilha, respeitou o diabo e guardou o desejo. Quem sabe ele se realiza?' },
      },
      final_neutro: {
        emoji: '😔',
        text: 'Linu valgo žuvį ir žiūri į marias. Kai jis grįžta, grupės jau nėra. «Kitą kartą klausysiuosi gidės», – atsidūsta jis.',
        translation: 'O Linu come o peixe e olha para a laguna. Quando ele volta, o grupo já não está lá. «Da próxima vez vou escutar a guia», suspira ele.',
        ending: { tone: 'neutro', title: 'Perdeu as bruxas', message: 'A Eglė disse «Neatsilikite!» (não fiquem para trás). Volte e siga o grupo!' },
      },
    },
  },
  // ───────────────────────────── B1.2 ─────────────────────────────
  {
    id: 'lt-h16',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Velnių kolekcija',
    emoji: '😈',
    summary: 'Em Kaunas, a amiga Rūta leva o Linu ao museu que ela visitava todo domingo com o avô: um museu cheio de diabos.',
    cultural_context:
      'O Museu dos Diabos (Velnių muziejus), em Kaunas, nasceu da coleção do pintor Antanas Žmuidzinavičius (1876–1966) e hoje guarda mais de 3 mil figuras de diabos do mundo inteiro. Na mitologia lituana, o «velnias» é mais um espertalhão que dá para enganar do que um ser terrível. Perto dali, o funicular de Žaliakalnis sobe a colina desde 1931.',
    start: 'start',
    glossary: [
      ['eidavo', 'ia (sempre, costumava ir) — passado frequentativo em -davo'],
      ['nupirkdavo', 'comprava (toda vez)'],
      ['atveždavo', 'costumavam trazer'],
      ['skaičiuoti → suskaičiuoti', 'contar → terminar de contar (aspecto)'],
      ['velniukas', 'diabinho'],
      ['darbuotoja', 'funcionária'],
      ['padovanoti', 'dar de presente'],
      ['krėsti pokštus', 'pregar peças'],
    ],
    nodes: {
      start: {
        emoji: '🚆',
        text: 'Linu atvažiavo į Kauną pas draugę Rūtą. Vaikystėje Rūta kiekvieną sekmadienį eidavo su seneliu į Velnių muziejų. Senelis visada sakydavo, kad tai linksmiausias muziejus Lietuvoje.',
        translation: 'O Linu chegou a Kaunas para visitar a amiga Rūta. Na infância, todo domingo a Rūta ia com o avô ao Museu dos Diabos. O avô sempre dizia que aquele era o museu mais divertido da Lituânia.',
        choices: [
          { text: 'Jie iškart nuėjo į muziejų.', translation: 'Eles foram direto ao museu.', next: 'muziejus' },
          { text: 'Linu pirmiausia norėjo išgerti kavos Laisvės alėjoje.', translation: 'O Linu queria primeiro tomar um café na avenida Laisvės.', next: 'kava' },
        ],
      },
      kava: {
        emoji: '☕',
        text: 'Laisvės alėjoje jie užsuko į mažą kavinę. Rūta pasakojo, kad po muziejaus senelis jai visada nupirkdavo ledų. Kol Linu gėrė kavą, Rūta suvalgė du pyragaičius.',
        translation: 'Na avenida Laisvės, eles entraram num pequeno café. A Rūta contou que, depois do museu, o avô sempre comprava sorvete para ela. Enquanto o Linu tomava o café, a Rūta comeu duas tortinhas.',
        choices: [
          { text: 'Paskui jie nuėjo į muziejų.', translation: 'Depois eles foram ao museu.', next: 'muziejus' },
          {
            text: 'Linu pasakė: «Tavo senelis tau niekada nepirkdavo ledų, tiesa?»',
            translation: 'O Linu disse: «Seu avô nunca comprava sorvete para você, né?»',
            wrong: '«Nupirkdavo» é o passado frequentativo (-davo): o avô comprava sorvete para ela TODA VEZ (visada) depois do museu. Era um costume da infância, e não algo que nunca acontecia.',
          },
        ],
      },
      muziejus: {
        emoji: '👹',
        text: 'Muziejuje buvo tūkstančiai velnių: medinių, molinių, net stiklinių. Rūta paaiškino, kad kolekciją pradėjo dailininkas Antanas Žmuidzinavičius. Draugai jam dažnai atveždavo velniukų, kai grįždavo iš kelionių.',
        translation: 'No museu havia milhares de diabos: de madeira, de barro e até de vidro. A Rūta explicou que a coleção foi começada pelo pintor Antanas Žmuidzinavičius. Os amigos muitas vezes lhe traziam diabinhos quando voltavam de viagem.',
        choices: [
          { text: 'Linu nusprendė suskaičiuoti visus velnius.', translation: 'O Linu resolveu contar todos os diabos.', next: 'skaiciuoti' },
          { text: 'Linu paklausė darbuotojos, kiek čia iš viso yra velnių.', translation: 'O Linu perguntou à funcionária quantos diabos havia ali ao todo.', next: 'darbuotoja' },
          {
            text: 'Linu pasakė: «Vadinasi, dailininkas visus velnius nusipirko pats.»',
            translation: 'O Linu disse: «Então o pintor comprou todos os diabos sozinho.»',
            wrong: 'O texto diz que os amigos «atveždavo» — COSTUMAVAM TRAZER — diabinhos para ele quando voltavam de viagem («kai grįždavo»). Muitas figuras chegaram de presente.',
          },
        ],
      },
      skaiciuoti: {
        emoji: '🔢',
        text: 'Linu pradėjo skaičiuoti: vienas, du, trys… Po pusvalandžio jis dar nebuvo suskaičiavęs nė vienos salės. Rūta juokėsi ir sakė, kad tokiu greičiu jie išeis tik rytoj.',
        translation: 'O Linu começou a contar: um, dois, três… Depois de meia hora, ele ainda não tinha terminado de contar nem uma sala. A Rūta ria e dizia que, naquele ritmo, eles só sairiam amanhã.',
        choices: [{ text: 'Linu nustojo skaičiuoti ir paklausė darbuotojos.', translation: 'O Linu parou de contar e perguntou à funcionária.', next: 'darbuotoja' }],
      },
      darbuotoja: {
        emoji: '🗺️',
        text: 'Darbuotoja pasakė, kad muziejuje yra daugiau nei trys tūkstančiai velnių iš viso pasaulio. Linu ilgai ieškojo velnio iš Brazilijos, bet nerado. Tada jis prisiminė, kad kuprinėje turi mažą medinį Saci, kurį nusipirko Brazilijoje.',
        translation: 'A funcionária disse que no museu há mais de três mil diabos do mundo inteiro. O Linu procurou muito um diabo do Brasil, mas não achou. Aí ele lembrou que tinha na mochila um pequeno Saci de madeira, que tinha comprado no Brasil.',
        choices: [
          { text: 'Linu parodė Saci darbuotojai.', translation: 'O Linu mostrou o Saci à funcionária.', next: 'saci' },
          { text: 'Linu nusprendė Saci pasilikti sau.', translation: 'O Linu resolveu ficar com o Saci para ele.', next: 'final_sau' },
        ],
      },
      saci: {
        emoji: '🎩',
        text: 'Darbuotoja labai nudžiugo ir paklausė, kas tai per padaras. Linu papasakojo, kad Saci turi vieną koją, raudoną kepuraitę ir mėgsta krėsti pokštus. «Mūsų velniai irgi mėgdavo apgaudinėti žmones», – nusijuokė ji.',
        translation: 'A funcionária ficou muito contente e perguntou que criatura era aquela. O Linu contou que o Saci tem uma perna só, um gorrinho vermelho e adora pregar peças. «Os nossos diabos também gostavam de enganar as pessoas», riu ela.',
        choices: [{ text: 'Linu padovanojo Saci muziejui.', translation: 'O Linu deu o Saci de presente ao museu.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🚡',
        text: 'Darbuotoja parašė kortelę «Saci, Brazilija» ir padėjo figūrėlę į vitriną. Paskui Rūta ir Linu nuėjo prie funikulieriaus ir pakilo į Žaliakalnį. Iš viršaus Rūta parodė visą miestą ir pasakė, kad senelis čia irgi mėgdavo stovėti.',
        translation: 'A funcionária escreveu uma etiqueta, «Saci, Brasil», e colocou a figurinha na vitrine. Depois a Rūta e o Linu foram até o funicular e subiram a Žaliakalnis. Lá de cima, a Rūta mostrou a cidade inteira e disse que o avô também gostava de ficar ali.',
        ending: { tone: 'bom', title: 'Um saci entre os diabos', message: 'Agora o Museu dos Diabos de Kaunas tem um visitante brasileiro fixo, e a Rūta ganhou uma nova lembrança para juntar às do avô.' },
      },
      final_sau: {
        emoji: '🎒',
        text: 'Linu įsidėjo Saci atgal į kuprinę. Jie išėjo iš muziejaus ir nuėjo valgyti cepelinų. Vis dėlto visą vakarą Linu galvojo apie tuščią vietą vitrinoje.',
        translation: 'O Linu guardou o Saci de volta na mochila. Eles saíram do museu e foram comer cepelinai. Mesmo assim, a noite toda o Linu ficou pensando no espaço vazio da vitrine.',
        ending: { tone: 'neutro', title: 'O saci na mochila', message: 'Foi um passeio divertido, mas o Saci continua sem conhecer os primos lituanos. Quem sabe na próxima visita.' },
      },
    },
  },
  {
    id: 'lt-h17',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Gintaras po audros',
    emoji: '🌊',
    summary: 'Depois de uma noite de tempestade em Palanga, o Linu sai de madrugada para catar âmbar na praia, como o velho Jonas fazia na juventude.',
    cultural_context:
      'O litoral báltico é famoso pelo âmbar (gintaras), resina fóssil de árvores de milhões de anos atrás: depois das tempestades, o mar joga pedacinhos dele na praia, no meio das algas. Em Palanga, o Museu do Âmbar ocupa o palácio dos condes Tyszkiewicz (Tiškevičiai), no parque botânico, e mostra peças com insetos presos dentro.',
    start: 'start',
    glossary: [
      ['audra', 'tempestade'],
      ['keldavosi', 'se levantava (toda vez) — -davo com reflexivo'],
      ['rinkti → prisirinkti', 'catar → juntar uma boa quantidade (aspecto)'],
      ['gintaras', 'âmbar'],
      ['jūros žolės', 'algas'],
      ['paplūdimys', 'praia'],
      ['tiltas', 'ponte; aqui, o píer de Palanga'],
      ['saulėlydis', 'pôr do sol'],
    ],
    nodes: {
      start: {
        emoji: '⛈️',
        text: 'Naktį Palangoje siautė didelė audra. Ryte šeimininkas Jonas papasakojo, kad jaunystėje po kiekvienos audros keldavosi penktą valandą ir eidavo prie jūros rinkti gintaro. Kartais per vieną rytą jis prisirinkdavo visą saują.',
        translation: 'À noite, uma grande tempestade caiu sobre Palanga. De manhã, o dono da casa, Jonas, contou que na juventude, depois de cada tempestade, se levantava às cinco horas e ia até o mar catar âmbar. Às vezes, numa só manhã, juntava um punhado inteiro.',
        choices: [
          { text: 'Linu iškart nubėgo prie jūros.', translation: 'O Linu correu na hora para o mar.', next: 'pajuris' },
          { text: 'Linu pirmiausia paklausė, kaip atskirti gintarą nuo akmens.', translation: 'O Linu perguntou primeiro como distinguir o âmbar de uma pedra.', next: 'patarimas' },
          {
            text: 'Linu pagalvojo, kad Jonas gintaro ieškojo tik vieną kartą gyvenime.',
            translation: 'O Linu pensou que o Jonas tinha procurado âmbar uma única vez na vida.',
            wrong: '«Keldavosi» e «eidavo» estão no passado frequentativo (-davo): depois de CADA tempestade (po kiekvienos audros), o Jonas se levantava cedo e ia catar âmbar. Era um hábito da juventude dele.',
          },
        ],
      },
      patarimas: {
        emoji: '🪶',
        text: 'Jonas paaiškino, kad gintaras yra daug lengvesnis už akmenį ir šiltas liečiant. Jis patarė ieškoti tarp jūros žolių, kurias audra išmeta į krantą. «Jeigu rasi, neparduok – pasilik atminimui», – pridūrė jis.',
        translation: 'O Jonas explicou que o âmbar é muito mais leve que uma pedra e morno ao toque. Ele aconselhou procurar no meio das algas que a tempestade joga na praia. «Se achar, não venda: guarde de lembrança», acrescentou.',
        choices: [{ text: 'Linu padėkojo ir nuėjo prie jūros.', translation: 'O Linu agradeceu e foi até o mar.', next: 'pajuris' }],
      },
      pajuris: {
        emoji: '🏖️',
        text: 'Paplūdimyje jau vaikščiojo keli žmonės su maišeliais. Visi lėtai ėjo palei vandenį ir atidžiai žiūrėjo į smėlį. Linu irgi pradėjo ieškoti, bet ilgai nieko nerado.',
        translation: 'Na praia já andavam algumas pessoas com saquinhos. Todos caminhavam devagar junto à água e olhavam com atenção para a areia. O Linu também começou a procurar, mas por muito tempo não achou nada.',
        choices: [
          { text: 'Linu ėmė kapstytis jūros žolėse.', translation: 'O Linu começou a remexer nas algas.', next: 'zoles' },
          { text: 'Linu nuėjo toliau, link tilto.', translation: 'O Linu foi mais adiante, na direção do píer.', next: 'tiltas' },
        ],
      },
      tiltas: {
        emoji: '🍾',
        text: 'Prie tilto Linu rado blizgų geltoną daiktą. Jis buvo sunkus, šaltas ir su aštriais kraštais. Pro šalį ėjęs žvejys nusijuokė ir pasakė, kad tai tik butelio stiklas.',
        translation: 'Perto do píer, o Linu achou uma coisa amarela e brilhante. Era pesada, fria e de bordas afiadas. Um pescador que passava por ali riu e disse que aquilo era só vidro de garrafa.',
        choices: [
          { text: 'Linu išmetė stiklą ir grįžo prie jūros žolių.', translation: 'O Linu jogou o vidro fora e voltou para as algas.', next: 'zoles' },
          {
            text: 'Linu nusprendė, kad rado didžiausią gintarą Palangoje.',
            translation: 'O Linu concluiu que tinha achado o maior âmbar de Palanga.',
            wrong: 'O pescador disse que era «tik butelio stiklas», só vidro de garrafa. E o objeto era pesado e frio («sunkus, šaltas»), enquanto o âmbar é leve e morno.',
          },
        ],
      },
      zoles: {
        emoji: '✨',
        text: 'Tarp rudų jūros žolių kažkas sublizgo. Linu paėmė mažą geltoną gabalėlį: jis buvo lengvas ir šiltas. Šalia stovinti moteris pažiūrėjo ir pasakė: «Sveikinu, tai tikras gintaras!»',
        translation: 'No meio das algas marrons, alguma coisa brilhou. O Linu pegou um pedacinho amarelo: era leve e morno. Uma mulher que estava ao lado olhou e disse: «Parabéns, isso é âmbar de verdade!»',
        choices: [{ text: 'Linu atsargiai įsidėjo gintarą į kišenę ir grįžo namo.', translation: 'O Linu guardou o âmbar no bolso com cuidado e voltou para casa.', next: 'gintaras' }],
      },
      gintaras: {
        emoji: '👴',
        text: 'Linu parodė radinį Jonui. Senis ilgai vartė gintarą rankose ir prisiminė, kaip kadaise pats rasdavo tokių gabalėlių. Jis pasiūlė po pietų nueiti į Gintaro muziejų botanikos parke.',
        translation: 'O Linu mostrou o achado ao Jonas. O velho ficou um bom tempo virando o âmbar nas mãos e lembrou como, antigamente, ele mesmo achava pedacinhos assim. Ele sugeriu ir depois do almoço ao Museu do Âmbar, no parque botânico.',
        choices: [
          { text: 'Linu sutiko, ir jie nuėjo į muziejų.', translation: 'O Linu topou, e eles foram ao museu.', next: 'muziejus' },
          { text: 'Linu norėjo grįžti prie jūros ir ieškoti daugiau.', translation: 'O Linu quis voltar para o mar e procurar mais.', next: 'final_daugiau' },
        ],
      },
      muziejus: {
        emoji: '🦟',
        text: 'Muziejus įrengtas senuose Tiškevičių rūmuose. Ten Linu pamatė gintaro gabalų su įstrigusiais vabzdžiais, kurie gyveno prieš milijonus metų. Jis ilgai žiūrėjo pro didinamąjį stiklą į mažą uodą.',
        translation: 'O museu fica no antigo palácio dos Tyszkiewicz. Lá o Linu viu pedaços de âmbar com insetos presos, que viveram há milhões de anos. Ele ficou um tempão olhando pela lupa um mosquitinho.',
        choices: [{ text: 'Vakare jie nuėjo pasižiūrėti saulėlydžio nuo tilto.', translation: 'À noite, eles foram ver o pôr do sol do píer.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🌅',
        text: 'Saulė lėtai leidosi į jūrą, o tilte buvo pilna žmonių. Jonas pasakė, kad jaunystėje beveik kiekvieną vakarą čia ateidavo su žmona. Linu kišenėje laikė savo gintarą ir galvojo, kad tai geriausia jo diena Palangoje.',
        translation: 'O sol descia devagar no mar, e o píer estava cheio de gente. O Jonas disse que, na juventude, vinha ali com a esposa quase toda noite. O Linu segurava o seu âmbar no bolso e pensava que aquele era o melhor dia dele em Palanga.',
        ending: { tone: 'bom', title: 'Um tesouro no bolso', message: 'Âmbar de verdade, um museu cheio de insetos antigos e o pôr do sol no píer: o Linu entendeu por que o Jonas acordava tão cedo depois das tempestades.' },
      },
      final_daugiau: {
        emoji: '🥶',
        text: 'Linu visą popietę vaikščiojo paplūdimiu, bet daugiau nieko nerado. Vakare jis grįžo pavargęs ir sušalęs. Jonas nusišypsojo: «Jūra dovanoja tik tiems, kurie keliasi anksti.»',
        translation: 'O Linu passou a tarde inteira andando pela praia, mas não achou mais nada. À noite, voltou cansado e com frio. O Jonas sorriu: «O mar só dá presentes para quem acorda cedo.»',
        ending: { tone: 'neutro', title: 'O mar já tinha dado', message: 'Um pedacinho de âmbar já é sorte. Da próxima vez, o museu pode ser um bom programa para a tarde.' },
      },
    },
  },
  {
    id: 'lt-h18',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Močiutės malūnas',
    emoji: '🛶',
    summary: 'De caiaque pelos lagos da Aukštaitija, o Linu e a guia Aistė vão até o velho moinho de Ginučiai, onde a avó dela levava o trigo todo outono.',
    cultural_context:
      'O Parque Nacional da Aukštaitija, criado em 1974, foi o primeiro parque nacional da Lituânia: são dezenas de lagos ligados por riachos, bons para descer de caiaque. No parque ficam o antigo moinho d’água de Ginučiai e a colina de Ladakalnis, de onde se veem vários lagos entre as florestas.',
    start: 'start',
    glossary: [
      ['baidarė', 'caiaque'],
      ['irkluoti', 'remar'],
      ['veždavo', 'levava (todo ano) — passado frequentativo'],
      ['malūnas / malūnininkas', 'moinho / moleiro'],
      ['malti → sumalti', 'moer → terminar de moer (aspecto)'],
      ['girnos', 'mó (pedras do moinho)'],
      ['miltai', 'farinha'],
      ['apsiniaukti', 'nublar-se, fechar o tempo'],
    ],
    nodes: {
      start: {
        emoji: '🛶',
        text: 'Vasarą Linu su gide Aiste plaukė baidare per Aukštaitijos ežerus. Aistė pasakojo, kad jos močiutė gyveno netoliese ir kiekvieną rudenį veždavo grūdus į Ginučių malūną. Kol Aistė pasakojo, Linu irklavo vis lėčiau.',
        translation: 'No verão, o Linu descia de caiaque pelos lagos da Aukštaitija com a guia Aistė. A Aistė contava que a avó dela morava ali perto e todo outono levava os grãos para o moinho de Ginučiai. Enquanto a Aistė contava, o Linu remava cada vez mais devagar.',
        choices: [
          { text: 'Linu pasiūlė plaukti tiesiai iki malūno.', translation: 'O Linu sugeriu remar direto até o moinho.', next: 'ezeras' },
          { text: 'Linu norėjo pirmiausia užlipti ant Ladakalnio.', translation: 'O Linu quis primeiro subir a colina de Ladakalnis.', next: 'ladakalnis' },
        ],
      },
      ladakalnis: {
        emoji: '⛰️',
        text: 'Jie priplaukė prie kranto ir užlipo ant Ladakalnio. Iš viršaus matėsi daug ežerų, kurie blizgėjo tarp miškų. Aistė sakė, kad močiutė čia ateidavo per kiekvienas Jonines ir dainuodavo su kaimynais.',
        translation: 'Eles encostaram na margem e subiram a Ladakalnis. Lá de cima se viam muitos lagos, que brilhavam entre as florestas. A Aistė disse que a avó vinha ali em todas as festas de São João e cantava com os vizinhos.',
        choices: [
          { text: 'Jie vėl sėdo į baidarę ir nuplaukė prie malūno.', translation: 'Eles voltaram para o caiaque e remaram até o moinho.', next: 'ezeras' },
          {
            text: 'Linu paklausė: «Tai tavo močiutė čia buvo tik vieną kartą?»',
            translation: 'O Linu perguntou: «Então a sua avó só esteve aqui uma vez?»',
            wrong: '«Ateidavo» e «dainuodavo» estão no passado frequentativo (-davo): a avó vinha e cantava ali em TODAS as festas de São João (per kiekvienas Jonines). Era costume, não uma visita única.',
          },
        ],
      },
      ezeras: {
        emoji: '🌥️',
        text: 'Vidury ežero pakilo vėjas, ir dangus apsiniaukė. Aistė pasakė, kad močiutė, pamačiusi tokius debesis, visada sustodavo ir palaukdavo ant kranto. Netoliese buvo mažas smėlėtas krantas.',
        translation: 'No meio do lago, começou a ventar e o céu fechou. A Aistė disse que a avó, quando via nuvens assim, sempre parava e esperava na margem. Ali perto havia uma prainha de areia.',
        choices: [
          { text: 'Jie priplaukė prie kranto ir palaukė, kol praeis debesys.', translation: 'Eles encostaram na margem e esperaram as nuvens passarem.', next: 'malunas' },
          { text: 'Linu nusprendė plaukti toliau per vėją.', translation: 'O Linu decidiu seguir remando contra o vento.', next: 'final_slapi' },
        ],
      },
      malunas: {
        emoji: '🏚️',
        text: 'Po valandos saulė vėl pasirodė, ir jie priplaukė prie senojo Ginučių malūno. Aistė paaiškino, kad anksčiau čia malūnininkas sumaldavo viso kaimo grūdus. Dabar malūne lankytojai gali pamatyti, kaip jis veikė.',
        translation: 'Uma hora depois o sol voltou, e eles chegaram ao velho moinho de Ginučiai. A Aistė explicou que antigamente o moleiro moía ali os grãos da aldeia inteira. Hoje os visitantes podem ver no moinho como ele funcionava.',
        choices: [{ text: 'Linu įėjo į vidų.', translation: 'O Linu entrou.', next: 'vidus' }],
      },
      vidus: {
        emoji: '⚙️',
        text: 'Viduje stovėjo didelės girnos ir senos svarstyklės. Aistė papasakojo, kad kai močiutė atveždavo grūdų, ji visada laukdavo, kol malūnininkas juos sumals. Laukdama ji megzdavo kojines.',
        translation: 'Lá dentro havia uma grande mó e uma balança antiga. A Aistė contou que, quando a avó trazia os grãos, ela sempre esperava o moleiro terminar de moê-los. Enquanto esperava, tricotava meias.',
        choices: [
          { text: 'Linu paklausė, ką močiutė darydavo su miltais.', translation: 'O Linu perguntou o que a avó fazia com a farinha.', next: 'miltai' },
          {
            text: 'Linu pasakė: «Vadinasi, močiutė pati maldavo grūdus.»',
            translation: 'O Linu disse: «Então a avó moía os grãos ela mesma.»',
            wrong: 'Quem moía era o moleiro: a avó «laukdavo, kol malūnininkas juos sumals», esperava ATÉ o moleiro terminar de moer. Enquanto isso, ela tricotava meias («megzdavo kojines»).',
          },
        ],
      },
      miltai: {
        emoji: '🍞',
        text: 'Iš miltų močiutė kepdavo juodą duoną, kurios kvapas pasklisdavo po visą kaimą. Aistė išsitraukė iš kuprinės duonos riekę ir padavė ją Linu. Duona buvo iškepta pagal močiutės receptą.',
        translation: 'Com a farinha, a avó assava pão preto, cujo cheiro se espalhava pela aldeia inteira. A Aistė tirou da mochila uma fatia de pão e deu ao Linu. O pão tinha sido feito com a receita da avó.',
        choices: [
          { text: 'Linu paragavo ir paprašė recepto.', translation: 'O Linu provou e pediu a receita.', next: 'final_bom' },
          { text: 'Linu pasakė, kad nemėgsta juodos duonos.', translation: 'O Linu disse que não gosta de pão preto.', next: 'final_duona' },
        ],
      },
      final_bom: {
        emoji: '🌇',
        text: 'Aistė pažadėjo atsiųsti receptą ir pakvietė Linu rudenį atvažiuoti į kaimą. Jie vėl sėdo į baidarę ir, saulei leidžiantis, nuplaukė namo. Šįkart Linu irklavo greitai ir nė karto nesustojo.',
        translation: 'A Aistė prometeu mandar a receita e convidou o Linu para ir à aldeia no outono. Eles voltaram para o caiaque e, com o sol se pondo, remaram para casa. Desta vez o Linu remou rápido e não parou nem uma vez.',
        ending: { tone: 'bom', title: 'O pão da avó', message: 'O Linu conheceu o moinho, as histórias da avó da Aistė e ainda ganhou uma receita de pão preto.' },
      },
      final_duona: {
        emoji: '😶',
        text: 'Aistė truputį nusiminė, bet nieko nesakė. Grįždami jie abu tylėjo, ir kelionė atrodė labai ilga. Tik vakare Linu suprato, kad ta duona Aistei buvo daugiau nei duona.',
        translation: 'A Aistė ficou um pouco chateada, mas não disse nada. Na volta, os dois ficaram calados, e o caminho pareceu muito longo. Só à noite o Linu entendeu que aquele pão era, para a Aistė, mais do que um pão.',
        ending: { tone: 'neutro', title: 'Mais que um pão', message: 'Às vezes uma fatia de pão é uma lembrança de família. Da próxima vez, o Linu vai provar antes de dar a opinião.' },
      },
      final_slapi: {
        emoji: '💦',
        text: 'Bangos buvo didelės, ir baidarė vos neapvirto. Jie pasiekė malūną visiškai šlapi, kai muziejus jau buvo uždarytas. Aistė tik atsiduso: «Močiutė visada sakydavo, kad ežeras nemėgsta skubančių.»',
        translation: 'As ondas estavam grandes, e o caiaque quase virou. Eles chegaram ao moinho encharcados, quando o museu já estava fechado. A Aistė só suspirou: «A vovó sempre dizia que o lago não gosta de quem tem pressa.»',
        ending: { tone: 'neutro', title: 'O lago não gosta de pressa', message: 'Chegaram inteiros, mas molhados e tarde demais. A avó da Aistė tinha razão: melhor esperar as nuvens passarem.' },
      },
    },
  },
  // ───────────────────────────── B1.3 ─────────────────────────────
  {
    id: 'lt-h19',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Mergaitė ant fontano',
    emoji: '⛲',
    summary: 'Recém-chegado a Klaipėda de balsa, o Linu passeia pela cidade velha com o estudante Mantas e descobre a história da estátua que sumiu na guerra.',
    cultural_context:
      'Klaipėda é o grande porto da Lituânia, junto ao Báltico. Na Praça do Teatro fica a fonte com a estátua de Ännchen von Tharau (Taravos Anikė), a moça de uma canção atribuída ao poeta Simon Dach, nascido na cidade em 1605. A estátua original, de 1912, desapareceu no fim da Segunda Guerra Mundial, e a cópia atual foi inaugurada em 1989.',
    start: 'start',
    glossary: [
      ['prišvartuotas', 'atracado (particípio passivo)'],
      ['pastatytas', 'construído, erguido'],
      ['gimęs, gimusi', 'nascido, nascida (particípio ativo passado)'],
      ['atkurta', 'reconstruída, recriada'],
      ['atidengta', 'inaugurada (um monumento: «descoberta»)'],
      ['jaunavedžiai', 'os recém-casados'],
      ['vyksiantis', 'que vai acontecer (particípio ativo futuro)'],
      ['krantinė', 'cais'],
    ],
    nodes: {
      start: {
        emoji: '⛴️',
        text: 'Linu atplaukė į Klaipėdą keltu iš Vokietijos. Uoste jo laukė studentas Mantas, pažadėjęs aprodyti senamiestį. Pirmiausia jie sustojo prie didelio burlaivio, prišvartuoto Danės upėje.',
        translation: 'O Linu chegou a Klaipėda de balsa, vindo da Alemanha. No porto, esperava por ele o estudante Mantas, que tinha prometido mostrar a cidade velha. Primeiro eles pararam junto a um grande veleiro atracado no rio Danė.',
        choices: [
          { text: 'Linu paklausė, kas tai per laivas.', translation: 'O Linu perguntou que navio era aquele.', next: 'meridianas' },
          { text: 'Linu norėjo iškart eiti į Teatro aikštę.', translation: 'O Linu quis ir direto para a Praça do Teatro.', next: 'teatras' },
        ],
      },
      meridianas: {
        emoji: '⚓',
        text: 'Mantas paaiškino, kad tai «Meridianas» – burlaivis, pastatytas Suomijoje ir tapęs miesto simboliu. Ilgus metus jame mokydavosi būsimieji jūreiviai. Laivo nuotrauka puošia daugybę atvirukų, parduodamų senamiestyje.',
        translation: 'O Mantas explicou que aquele era o «Meridianas», um veleiro construído na Finlândia que virou símbolo da cidade. Por muitos anos, futuros marinheiros estudaram a bordo dele. A foto do navio enfeita um monte de cartões-postais vendidos na cidade velha.',
        choices: [
          { text: 'Paskui jie nuėjo į Teatro aikštę.', translation: 'Depois eles foram para a Praça do Teatro.', next: 'teatras' },
          {
            text: 'Linu pasakė: «Vadinasi, šis laivas buvo pastatytas čia, Klaipėdoje.»',
            translation: 'O Linu disse: «Então este navio foi construído aqui, em Klaipėda.»',
            wrong: 'O Mantas disse «burlaivis, pastatytas Suomijoje»: um veleiro CONSTRUÍDO NA FINLÂNDIA. O particípio passivo «pastatytas» vem junto do lugar onde a ação aconteceu.',
          },
        ],
      },
      teatras: {
        emoji: '🎭',
        text: 'Teatro aikštėje stovėjo fontanas su mergaitės skulptūra. Mantas papasakojo, kad tai Taravos Anikė – mergaitė iš dainos, sukurtos poeto Simono Dacho, gimusio Klaipėdoje. Paminklas skirtas būtent jam.',
        translation: 'Na Praça do Teatro havia uma fonte com a estátua de uma moça. O Mantas contou que era a Ännchen von Tharau, a moça de uma canção criada pelo poeta Simon Dach, nascido em Klaipėda. O monumento é dedicado justamente a ele.',
        choices: [
          { text: 'Linu paklausė, ar skulptūra labai sena.', translation: 'O Linu perguntou se a estátua era muito antiga.', next: 'dingusi' },
          { text: 'Linu pastebėjo prie fontano susirinkusius žmones.', translation: 'O Linu reparou nas pessoas reunidas perto da fonte.', next: 'zmones' },
        ],
      },
      dingusi: {
        emoji: '🕵️',
        text: 'Mantas atsakė, kad pirmoji skulptūra buvo pastatyta 1912 metais, bet pasibaigus Antrajam pasauliniam karui ji dingo. Niekas tiksliai nežino, kas ją išvežė ar sunaikino. Dabartinė skulptūra buvo atkurta pagal senas nuotraukas ir atidengta 1989 metais.',
        translation: 'O Mantas respondeu que a primeira estátua foi erguida em 1912, mas, no fim da Segunda Guerra Mundial, ela desapareceu. Ninguém sabe ao certo quem a levou ou a destruiu. A estátua atual foi reconstruída a partir de fotos antigas e inaugurada em 1989.',
        choices: [
          { text: 'Tuo metu Linu pastebėjo prie fontano susirinkusius žmones.', translation: 'Nesse momento, o Linu reparou nas pessoas reunidas perto da fonte.', next: 'zmones' },
          {
            text: 'Linu sušuko: «Tai čia stovi ta pati skulptūra nuo 1912 metų!»',
            translation: 'O Linu exclamou: «Então é a mesma estátua que está aqui desde 1912!»',
            wrong: 'A estátua de 1912 «dingo», desapareceu. A de hoje «buvo atkurta… ir atidengta 1989 metais»: FOI RECONSTRUÍDA a partir de fotos antigas e inaugurada em 1989. É uma cópia.',
          },
        ],
      },
      zmones: {
        emoji: '👰',
        text: 'Prie fontano fotografavosi jaunavedžiai, apsupti draugų. Fotografas, pamatęs pingviną, paprašė Linu atsistoti šalia nuotakos. «Pingvinas vestuvių nuotraukoje – tai laimė!» – juokėsi jaunikis.',
        translation: 'Perto da fonte, uns recém-casados tiravam fotos, rodeados de amigos. O fotógrafo, ao ver o pinguim, pediu ao Linu que ficasse ao lado da noiva. «Um pinguim na foto do casamento dá sorte!», ria o noivo.',
        choices: [
          { text: 'Linu sutiko nusifotografuoti.', translation: 'O Linu topou tirar a foto.', next: 'nuotrauka' },
          { text: 'Linu mandagiai atsisakė, ir jie nuėjo toliau per senamiestį.', translation: 'O Linu recusou educadamente, e eles seguiram pela cidade velha.', next: 'gatves' },
        ],
      },
      gatves: {
        emoji: '🏘️',
        text: 'Jie ėjo siauromis gatvelėmis pro senus namus, pastatytus prieš kelis šimtus metų. Mantas rodė Linu medines sijas, matomas namų sienose. Vakare jie atsisėdo ant krantinės prie uosto.',
        translation: 'Eles andaram por ruelas estreitas, passando por casas antigas, construídas séculos atrás. O Mantas mostrava ao Linu as vigas de madeira aparentes nas paredes das casas. À noite, eles se sentaram no cais, perto do porto.',
        choices: [{ text: 'Jie žiūrėjo į išplaukiančius laivus.', translation: 'Eles ficaram olhando os navios que partiam.', next: 'final_uostas' }],
      },
      nuotrauka: {
        emoji: '📸',
        text: 'Linu atsistojo šalia nuotakos, ir fotografas padarė keliolika nuotraukų. Jaunavedžiai pakvietė jį ir Mantą į vestuvių vakarėlį, vyksiantį restorane prie jūros. Jaunikis pasakė, kad svečias, atplaukęs iš taip toli, jiems atneš laimę.',
        translation: 'O Linu ficou ao lado da noiva, e o fotógrafo tirou uma dúzia de fotos. Os recém-casados convidaram ele e o Mantas para a festa do casamento, que ia ser num restaurante à beira-mar. O noivo disse que um convidado vindo de tão longe ia trazer sorte a eles.',
        choices: [
          { text: 'Linu ir Mantas priėmė kvietimą.', translation: 'O Linu e o Mantas aceitaram o convite.', next: 'final_bom' },
          { text: 'Linu padėkojo, bet norėjo dar pasivaikščioti po senamiestį.', translation: 'O Linu agradeceu, mas queria passear mais pela cidade velha.', next: 'gatves' },
        ],
      },
      final_bom: {
        emoji: '💃',
        text: 'Vakarėlyje visi šoko ir dainavo lietuviškas dainas. Linu nemokėjo žodžių, bet šoko iki vidurnakčio. Kitą dieną jaunavedžiai atsiuntė jam nuotrauką, pavadintą «Mūsų laimingas pingvinas».',
        translation: 'Na festa, todos dançaram e cantaram músicas lituanas. O Linu não sabia a letra, mas dançou até a meia-noite. No dia seguinte, os recém-casados mandaram para ele uma foto chamada «Nosso pinguim da sorte».',
        ending: { tone: 'bom', title: 'O pinguim da sorte', message: 'Um veleiro, uma estátua que voltou do sumiço e um casamento de presente: o primeiro dia do Linu em Klaipėda não podia ter sido melhor.' },
      },
      final_uostas: {
        emoji: '🚢',
        text: 'Saulė leidosi, o dideli laivai lėtai išplaukdavo į jūrą. Mantas pasakojo apie savo studijas, o Linu tylėdamas klausėsi. Buvo ramus vakaras, nors Linu kartais pagalvodavo apie vestuves, kurių nepamatė.',
        translation: 'O sol se punha, e os navios grandes iam saindo devagar para o mar. O Mantas falava dos estudos dele, e o Linu escutava em silêncio. Foi uma noite tranquila, embora o Linu às vezes pensasse no casamento que não tinha visto.',
        ending: { tone: 'neutro', title: 'Noite no cais', message: 'Um passeio calmo pela cidade velha de Klaipėda. Só ficou a curiosidade de como teria sido a festa.' },
      },
    },
  },
  {
    id: 'lt-h20',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Trys langai',
    emoji: '🏰',
    summary: 'Em Trakai, a caraíta Sara mostra ao Linu o castelo da ilha, as casinhas de três janelas da rua dos caraítas e os kibinai recém-saídos do forno.',
    cultural_context:
      'O castelo de Trakai, de tijolos vermelhos, fica numa ilha do lago Galvė; ficou em ruínas por séculos e foi reconstruído no século XX. Na cidade vivem os caraítas (karaimai), um povo de língua túrquica trazido da Crimeia pelo grão-duque Vytautas por volta de 1400; os «kibinai», pastéis assados recheados de carne, são a comida típica deles.',
    start: 'start',
    glossary: [
      ['stovinti', 'que fica, situada (particípio ativo presente)'],
      ['sugriauta', 'destruída (particípio passivo)'],
      ['atstatyta', 'reconstruída'],
      ['apleista', 'abandonada'],
      ['buvo atvežti', 'foram trazidos (voz passiva)'],
      ['karaimai', 'os caraítas'],
      ['kibinai', 'pastéis caraítas assados'],
      ['kepami', 'que são assados (particípio passivo presente)'],
    ],
    nodes: {
      start: {
        emoji: '🚉',
        text: 'Šeštadienį Linu atvažiavo į Trakus traukiniu iš Vilniaus. Stotyje jį pasitiko karaimė Sara, pakvietusi jį pietų. Prieš pietus ji pasiūlė aplankyti pilį, stovinčią saloje Galvės ežere.',
        translation: 'No sábado, o Linu foi de trem de Vilnius a Trakai. Na estação, esperava por ele a Sara, uma caraíta que o tinha convidado para almoçar. Antes do almoço, ela sugeriu visitar o castelo que fica numa ilha do lago Galvė.',
        choices: [
          { text: 'Jie nuėjo prie pilies pėsčiomis per medinį tiltą.', translation: 'Eles foram a pé até o castelo, pela ponte de madeira.', next: 'tiltas' },
          { text: 'Linu norėjo nuplaukti iki pilies valtimi.', translation: 'O Linu quis ir até o castelo de barco.', next: 'valtis' },
        ],
      },
      valtis: {
        emoji: '🚣',
        text: 'Jie išsinuomojo valtį ir irklavo per ežerą. Iš vandens raudonų plytų pilis atrodė kaip iš pasakos. Sara pasakė, kad Galvės ežere yra daugiau nei dvidešimt salų.',
        translation: 'Eles alugaram um barco e remaram pelo lago. Vista da água, o castelo de tijolos vermelhos parecia saído de um conto de fadas. A Sara disse que no lago Galvė há mais de vinte ilhas.',
        choices: [{ text: 'Priplaukę prie salos, jie įėjo į pilį.', translation: 'Chegando à ilha, eles entraram no castelo.', next: 'pilis' }],
      },
      tiltas: {
        emoji: '🌉',
        text: 'Ant medinio tilto buvo pilna turistų. Sara parodė Linu lentelę, ant kurios buvo parašyta, kad pilis pastatyta XIV–XV amžiuje. Linu nustebo, kad tokia sena pilis atrodo kaip nauja.',
        translation: 'Na ponte de madeira havia muitos turistas. A Sara mostrou ao Linu uma placa onde estava escrito que o castelo foi construído nos séculos XIV e XV. O Linu se espantou que um castelo tão antigo parecesse novo.',
        choices: [{ text: 'Linu paklausė, kodėl pilis atrodo nauja.', translation: 'O Linu perguntou por que o castelo parecia novo.', next: 'pilis' }],
      },
      pilis: {
        emoji: '🧱',
        text: 'Sara paaiškino, kad per karus pilis buvo sugriauta ir šimtus metų stovėjo apleista. Tik XX amžiuje ji buvo atstatyta pagal senus planus ir piešinius. Dabar joje įrengtas istorijos muziejus.',
        translation: 'A Sara explicou que, nas guerras, o castelo foi destruído e passou séculos abandonado. Só no século XX ele foi reconstruído com base em plantas e desenhos antigos. Hoje funciona nele um museu de história.',
        choices: [
          { text: 'Linu paklausė, kaip karaimai atsirado Trakuose.', translation: 'O Linu perguntou como os caraítas chegaram a Trakai.', next: 'karaimai' },
          {
            text: 'Linu pasakė: «Taigi ši pilis niekada nebuvo sugriauta.»',
            translation: 'O Linu disse: «Então este castelo nunca foi destruído.»',
            wrong: 'A Sara disse o contrário: «pilis buvo sugriauta» — o castelo FOI DESTRUÍDO nas guerras — e só no século XX «buvo atstatyta», foi reconstruído. Por isso parece novo.',
          },
        ],
      },
      karaimai: {
        emoji: '🐎',
        text: 'Sara papasakojo, kad jos protėviai buvo atvežti iš Krymo daugiau nei prieš šešis šimtus metų. Juos pakvietė didysis kunigaikštis Vytautas, ir jie saugojo pilį. Karaimų kalba Trakuose skamba iki šiol, nors ja kalba vis mažiau žmonių.',
        translation: 'A Sara contou que os antepassados dela foram trazidos da Crimeia há mais de seiscentos anos. Quem os convidou foi o grão-duque Vytautas, e eles guardavam o castelo. A língua caraíta ainda se ouve em Trakai, embora cada vez menos gente a fale.',
        choices: [{ text: 'Paskui jie nuėjo į Karaimų gatvę.', translation: 'Depois eles foram para a rua dos Caraítas.', next: 'namai' }],
      },
      namai: {
        emoji: '🏠',
        text: 'Karaimų gatvėje stovėjo mediniai nameliai, atsukti į gatvę galu. Sara parodė, kad kiekvienas namas turi tris langus. «Sakoma, kad vienas langas skirtas Dievui, antras – Vytautui, o trečias – šeimai», – paaiškino ji.',
        translation: 'Na rua dos Caraítas havia casinhas de madeira viradas para a rua pelo lado estreito. A Sara mostrou que cada casa tem três janelas. «Dizem que uma janela é dedicada a Deus, a segunda a Vytautas e a terceira à família», explicou ela.',
        choices: [
          { text: 'Jie įėjo į Saros namus, iš kurių sklido skanus kvapas.', translation: 'Eles entraram na casa da Sara, de onde saía um cheiro gostoso.', next: 'kibinai' },
          {
            text: 'Linu paklausė: «Ar trečias langas skirtas Vytautui?»',
            translation: 'O Linu perguntou: «A terceira janela é dedicada a Vytautas?»',
            wrong: 'A Sara disse que a janela de Vytautas é a «antras», a segunda. A terceira é «skirtas šeimai», dedicada à família. «Skirtas» é particípio passivo: «destinado, dedicado a».',
          },
        ],
      },
      kibinai: {
        emoji: '🥟',
        text: 'Virtuvėje ant stalo gulėjo karšti kibinai, ką tik ištraukti iš orkaitės. Sara paaiškino, kad tradiciniai kibinai kepami su aviena, bet šiandien ji iškepė ir su vištiena. Linu galėjo išsirinkti pirmąjį.',
        translation: 'Na cozinha, sobre a mesa, estavam os kibinai quentes, recém-tirados do forno. A Sara explicou que os kibinai tradicionais são assados com carne de carneiro, mas hoje ela também tinha feito de frango. O Linu podia escolher o primeiro.',
        choices: [
          { text: 'Linu paėmė kibiną su aviena ir palaukė, kol jis truputį atvės.', translation: 'O Linu pegou um kibinas de carneiro e esperou esfriar um pouco.', next: 'final_bom' },
          { text: 'Linu iškart įkando karštą kibiną.', translation: 'O Linu mordeu na hora o kibinas quente.', next: 'final_karsta' },
        ],
      },
      final_bom: {
        emoji: '😋',
        text: 'Kibinas buvo traškus, o įdaras viduje – sultingas. Linu suvalgė tris ir paprašė recepto, bet Sara tik nusišypsojo: receptas saugomas šeimoje jau kelias kartas. Vietoj recepto ji įdėjo jam kibinų kelionei.',
        translation: 'O kibinas estava crocante, e o recheio, suculento. O Linu comeu três e pediu a receita, mas a Sara só sorriu: a receita é guardada na família há várias gerações. Em vez da receita, ela embrulhou uns kibinai para a viagem.',
        ending: { tone: 'bom', title: 'Segredo de família', message: 'Castelo, história dos caraítas e kibinai quentinhos: o Linu voltou para Vilnius de barriga cheia e com a mochila perfumada.' },
      },
      final_karsta: {
        emoji: '🔥',
        text: 'Karštos sultys ištekėjo Linu ant snapo, ir jis sušuko iš skausmo. Sara juokėsi ir padavė jam stiklinę šalto vandens. Ji paaiškino, kad kibinas valgomas atsargiai, laikant jį rankoje, kad sultys neištekėtų.',
        translation: 'O caldo quente escorreu no bico do Linu, e ele gritou de dor. A Sara riu e deu a ele um copo de água gelada. Ela explicou que o kibinas se come com cuidado, segurando-o na mão, para o caldo não escorrer.',
        ending: { tone: 'neutro', title: 'Bico queimado', message: 'Os kibinai estavam deliciosos, mas o Linu aprendeu do jeito difícil que eles saem do forno pelando.' },
      },
    },
  },
  {
    id: 'lt-h21',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Drožėjo kryžius',
    emoji: '✝️',
    summary: 'Em Šiauliai, o Linu ajuda o entalhador Petras a levar uma cruz encomendada até a Colina das Cruzes.',
    cultural_context:
      'A Colina das Cruzes (Kryžių kalnas), a uns 12 km de Šiauliai, reúne dezenas de milhares de cruzes deixadas por peregrinos. Na época soviética, as autoridades mandaram derrubá-las várias vezes, mas as pessoas voltavam, muitas vezes à noite, com cruzes novas. O papa João Paulo II esteve lá em 1993, e o artesanato lituano das cruzes (kryždirbystė) está na lista do Patrimônio Imaterial da UNESCO.',
    start: 'start',
    glossary: [
      ['drožėjas', 'entalhador'],
      ['drožti → išdrožti', 'entalhar → terminar de entalhar'],
      ['užsakytas', 'encomendado (particípio passivo)'],
      ['nugriautas', 'derrubado, demolido'],
      ['atnešdavo', 'traziam (toda vez)'],
      ['pakabintas', 'pendurado'],
      ['rožinis', 'terço, rosário'],
      ['apaugęs samanomis', 'coberto de musgo (particípio ativo)'],
    ],
    nodes: {
      start: {
        emoji: '🪵',
        text: 'Linu atvažiavo į Šiaulius pas medžio drožėją Petrą. Petras ką tik baigė drožti kryžių, užsakytą vienos šeimos iš Kauno. Jis paprašė Linu padėti nuvežti kryžių į Kryžių kalną.',
        translation: 'O Linu foi a Šiauliai visitar o entalhador Petras. O Petras tinha acabado de entalhar uma cruz encomendada por uma família de Kaunas. Ele pediu ao Linu que o ajudasse a levar a cruz até a Colina das Cruzes.',
        choices: [
          { text: 'Linu sutiko ir padėjo įkelti kryžių į mašiną.', translation: 'O Linu topou e ajudou a pôr a cruz no carro.', next: 'kelias' },
          { text: 'Linu pirmiausia norėjo apžiūrėti dirbtuvę.', translation: 'O Linu quis primeiro conhecer a oficina.', next: 'dirbtuve' },
        ],
      },
      dirbtuve: {
        emoji: '🔨',
        text: 'Dirbtuvėje kvepėjo ąžuolu, o ant sienų kabojo nebaigti kryžiai ir saulutės. Petras paaiškino, kad lietuviškų kryžių darymas įrašytas į UNESCO nematerialaus paveldo sąrašą. Kiekvienas ornamentas, išdrožtas medyje, kažką reiškia.',
        translation: 'A oficina cheirava a carvalho, e nas paredes estavam penduradas cruzes inacabadas e «solzinhos». O Petras explicou que o artesanato lituano das cruzes está inscrito na lista do Patrimônio Imaterial da UNESCO. Cada ornamento entalhado na madeira quer dizer alguma coisa.',
        choices: [{ text: 'Jie įkėlė kryžių į mašiną ir išvažiavo.', translation: 'Eles puseram a cruz no carro e partiram.', next: 'kelias' }],
      },
      kelias: {
        emoji: '🚗',
        text: 'Kryžių kalnas buvo už keliolikos kilometrų nuo miesto. Važiuodamas Petras pasakojo, kad sovietmečiu kalnas buvo kelis kartus nugriautas buldozeriais. Tačiau kiekvieną kartą žmonės, dažnai naktimis, atnešdavo naujų kryžių.',
        translation: 'A Colina das Cruzes ficava a uns quinze quilômetros da cidade. No caminho, o Petras contou que, na época soviética, a colina foi derrubada com escavadeiras várias vezes. Mas, toda vez, as pessoas traziam cruzes novas, muitas vezes à noite.',
        choices: [
          { text: 'Pagaliau jie privažiavo kalną.', translation: 'Finalmente eles chegaram à colina.', next: 'kalnas' },
          {
            text: 'Linu pasakė: «Vadinasi, po pirmo karto žmonės nustojo nešti kryžius.»',
            translation: 'O Linu disse: «Então, depois da primeira vez, as pessoas pararam de trazer cruzes.»',
            wrong: 'Foi o contrário: a colina «buvo kelis kartus nugriauta» (foi derrubada VÁRIAS vezes), mas «kiekvieną kartą» — TODA VEZ — as pessoas «atnešdavo naujų kryžių», traziam cruzes novas.',
          },
        ],
      },
      kalnas: {
        emoji: '⛪',
        text: 'Linu sustojo nustebęs: ant nedidelės kalvos stovėjo tūkstančiai kryžių – didelių ir mažų, medinių ir metalinių. Vėjui pučiant, ant jų pakabinti rožiniai tyliai skambėjo. Petras sakė, kad niekas nežino, kiek čia iš tikrųjų yra kryžių.',
        translation: 'O Linu parou, espantado: sobre uma colina pequena havia milhares de cruzes, grandes e pequenas, de madeira e de metal. Com o vento soprando, os terços pendurados nelas tilintavam baixinho. O Petras disse que ninguém sabe quantas cruzes há ali de verdade.',
        choices: [
          { text: 'Jie ėmė ieškoti vietos savo kryžiui.', translation: 'Eles começaram a procurar um lugar para a cruz deles.', next: 'vieta' },
          { text: 'Linu paklausė, ar čia lankėsi žinomų žmonių.', translation: 'O Linu perguntou se gente famosa já tinha visitado o lugar.', next: 'popiezius' },
        ],
      },
      popiezius: {
        emoji: '🕊️',
        text: 'Petras paaiškino, kad 1993 metais čia lankėsi popiežius Jonas Paulius II. Tą dieną prie kalno susirinko labai daug žmonių. Vėliau netoliese buvo įkurtas ir pranciškonų vienuolynas.',
        translation: 'O Petras explicou que em 1993 o papa João Paulo II esteve ali. Naquele dia, muita gente se reuniu perto da colina. Mais tarde, ali perto também foi fundado um mosteiro franciscano.',
        choices: [{ text: 'Paskui jie ėmė ieškoti vietos kryžiui.', translation: 'Depois eles começaram a procurar um lugar para a cruz.', next: 'vieta' }],
      },
      vieta: {
        emoji: '🌿',
        text: 'Jie rado laisvą vietą prie seno kryžiaus, apaugusio samanomis. Petras įkasė naująjį kryžių į žemę, o Linu laikė jį tiesiai. Ant kryžiaus buvo išdrožti šeimos narių vardai ir žodžiai «Už tuos, kurių nebėra».',
        translation: 'Eles acharam um lugar livre ao lado de uma cruz velha, coberta de musgo. O Petras fincou a cruz nova na terra, e o Linu a segurava reta. Na cruz estavam entalhados os nomes da família e as palavras «Por aqueles que já não estão aqui».',
        choices: [
          { text: 'Petras nufotografavo kryžių šeimai.', translation: 'O Petras fotografou a cruz para a família.', next: 'nuotrauka' },
          {
            text: 'Linu paklausė: «Ar šitą kryžių nupirkai parduotuvėje?»',
            translation: 'O Linu perguntou: «Você comprou esta cruz numa loja?»',
            wrong: 'Desde o começo o texto diz que o Petras «baigė drožti kryžių», acabou de ENTALHAR a cruz, encomendada («užsakytą») por uma família de Kaunas. Os nomes também foram «išdrožti», entalhados por ele.',
          },
        ],
      },
      nuotrauka: {
        emoji: '📱',
        text: 'Petras išsiuntė nuotrauką šeimai, kuri buvo užsakiusi kryžių. Po kelių minučių atėjo atsakymas su daugybe širdelių. Tada Petras parodė Linu mažus medinius kryželius, parduodamus prie įėjimo.',
        translation: 'O Petras mandou a foto para a família que tinha encomendado a cruz. Alguns minutos depois, chegou uma resposta cheia de coraçõezinhos. Então o Petras mostrou ao Linu as pequenas cruzes de madeira vendidas na entrada.',
        choices: [
          { text: 'Linu nusipirko mažą kryželį ir jį paliko ant kalno.', translation: 'O Linu comprou uma cruzinha e a deixou na colina.', next: 'final_bom' },
          { text: 'Linu tik tyliai pastovėjo ir grįžo prie mašinos.', translation: 'O Linu só ficou um tempo em silêncio e voltou para o carro.', next: 'final_tyla' },
        ],
      },
      final_bom: {
        emoji: '🙏',
        text: 'Linu parašė ant kryželio savo šeimos vardą ir pakabino jį šalia Petro kryžiaus. Petras linktelėjo ir uždėjo jam ranką ant peties. Važiuojant atgal jis pasakė, kad dabar ant kalno yra ir pingvino paliktas ženklas.',
        translation: 'O Linu escreveu na cruzinha o nome da família dele e a pendurou ao lado da cruz do Petras. O Petras acenou com a cabeça e pôs a mão no ombro dele. Na volta, ele disse que agora a colina também tinha um sinal deixado por um pinguim.',
        ending: { tone: 'bom', title: 'Um sinal na colina', message: 'O Linu ajudou a levar a cruz, conheceu a história de resistência da colina e deixou ali a sua própria lembrança.' },
      },
      final_tyla: {
        emoji: '🌬️',
        text: 'Linu dar ilgai stovėjo ir klausėsi, kaip vėjas skambina rožiniais. Jis nieko nepaliko, bet šią vietą prisiminė visam gyvenimui. Pakeliui atgal jie abu beveik nekalbėjo.',
        translation: 'O Linu ainda ficou muito tempo parado, ouvindo o vento fazer os terços tilintarem. Ele não deixou nada, mas lembrou daquele lugar para o resto da vida. No caminho de volta, os dois quase não conversaram.',
        ending: { tone: 'neutro', title: 'O som do vento', message: 'Às vezes basta ficar em silêncio. O Linu levou a colina na memória, mesmo sem deixar uma cruz.' },
      },
    },
  },
  // ───────────────────────────── B1.4 ─────────────────────────────
  {
    id: 'lt-h22',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Smėlis, kuris keliauja',
    emoji: '🏜️',
    summary: 'De bicicleta pelo istmo da Curlândia, em Nida, o Linu e a amiga Ieva escolhem entre o mar e a laguna, sobem a duna de Parnidis e visitam a casa de veraneio de Thomas Mann.',
    cultural_context:
      'O istmo da Curlândia (Kuršių nerija) é uma faixa estreita de areia entre o mar Báltico e a laguna da Curlândia (Kuršių marios), Patrimônio Mundial da UNESCO desde 2000. Suas dunas estão entre as mais altas da Europa e, no passado, a areia em movimento soterrou aldeias e obrigou moradores a mudá-las de lugar. Em Nida, o escritor alemão Thomas Mann passou os verões de 1930 a 1932 numa casa de teto de junco sobre a laguna.',
    start: 'start',
    glossary: [
      ['nerija', 'istmo, restinga'],
      ['marios', 'laguna (só no plural)'],
      ['šiltesnis už…', 'mais quente que… (comparativo)'],
      ['aukščiausias', 'o mais alto (superlativo)'],
      ['kuo… tuo…', 'quanto mais… mais…'],
      ['kopa', 'duna'],
      ['kuris, kuri', 'que, o qual, a qual (relativo)'],
      ['vasaroti', 'passar o verão, veranear'],
    ],
    nodes: {
      start: {
        emoji: '🚲',
        text: 'Linu ir Ieva išsinuomojo dviračius Nidoje. Ieva sakė, kad Kuršių nerija yra siaura smėlio juosta, kurios vienoje pusėje – jūra, o kitoje – marios. Ji pasiūlė nuvažiuoti prie Parnidžio kopos, nes nerijos kopos – vienos aukščiausių Europoje.',
        translation: 'O Linu e a Ieva alugaram bicicletas em Nida. A Ieva disse que o istmo da Curlândia é uma faixa estreita de areia que tem de um lado o mar e, do outro, a laguna. Ela sugeriu ir até a duna de Parnidis, porque as dunas do istmo estão entre as mais altas da Europa.',
        choices: [
          { text: 'Jie iškart nuvažiavo prie Parnidžio kopos.', translation: 'Eles foram direto para a duna de Parnidis.', next: 'kopa' },
          { text: 'Linu norėjo pirmiausia išsimaudyti.', translation: 'O Linu quis primeiro dar um mergulho.', next: 'marios' },
        ],
      },
      marios: {
        emoji: '🏊',
        text: 'Ieva paklausė, kur Linu nori maudytis – jūroje ar mariose. Ji paaiškino, kad marių vanduo šiltesnis ir ramesnis, o jūros bangos daug smagesnės. Linu, kuris mėgsta šaltą vandenį, ilgai negalvojo.',
        translation: 'A Ieva perguntou onde o Linu queria nadar: no mar ou na laguna. Ela explicou que a água da laguna é mais quente e mais calma, e as ondas do mar são bem mais divertidas. O Linu, que adora água fria, não pensou muito.',
        choices: [
          { text: 'Linu nubėgo prie jūros.', translation: 'O Linu correu para o mar.', next: 'jura' },
          {
            text: 'Linu pasirinko marias, nes ten vanduo šaltesnis.',
            translation: 'O Linu escolheu a laguna, porque lá a água é mais fria.',
            wrong: 'A Ieva disse que «marių vanduo šiltesnis»: a água da laguna é MAIS QUENTE (šiltas → šiltesnis). Para um pinguim que adora frio, a escolha certa é o mar.',
          },
        ],
      },
      jura: {
        emoji: '🌊',
        text: 'Jūra buvo šalta ir banguota, o Linu jautėsi kaip namie. Ieva stovėjo ant kranto ir sakė, kad dar niekada nebuvo mačiusi laimingesnio paukščio. Išsimaudę jie nuvažiavo prie kopos.',
        translation: 'O mar estava frio e agitado, e o Linu se sentia em casa. A Ieva ficou na areia e disse que nunca tinha visto um pássaro mais feliz. Depois do banho, eles foram de bicicleta até a duna.',
        choices: [{ text: 'Jie užlipo į Parnidžio kopos viršų.', translation: 'Eles subiram ao topo da duna de Parnidis.', next: 'kopa' }],
      },
      kopa: {
        emoji: '🕰️',
        text: 'Nuo Parnidžio kopos viršaus matėsi smėlis, pušynai ir abu vandenys. Viršuje stovėjo didelis saulės laikrodis. Ieva papasakojo, kad seniau kopos judėdavo taip greitai, jog žmonėms tekdavo perkelti savo kaimus į kitas vietas.',
        translation: 'Do alto da duna de Parnidis se viam a areia, os pinheirais e as duas águas. Lá em cima havia um grande relógio de sol. A Ieva contou que, antigamente, as dunas andavam tão depressa que as pessoas tinham de mudar suas aldeias de lugar.',
        choices: [
          { text: 'Linu norėjo pasivaikščioti per kopas.', translation: 'O Linu quis caminhar pelas dunas.', next: 'kopos' },
          { text: 'Ieva pasiūlė aplankyti namą, kuriame vasarodavo rašytojas Thomas Mannas.', translation: 'A Ieva sugeriu visitar a casa onde o escritor Thomas Mann passava os verões.', next: 'manas' },
        ],
      },
      kopos: {
        emoji: '👣',
        text: 'Jie ėjo takeliu per kopas, o smėlis buvo vis minkštesnis. Kuo toliau jie ėjo, tuo tyliau darėsi aplinkui. Ieva priminė, kad jau vėlu ir kad į Nidą reikia grįžti tuo pačiu keliu.',
        translation: 'Eles andaram por uma trilha nas dunas, e a areia ficava cada vez mais fofa. Quanto mais longe iam, mais silencioso ficava tudo em volta. A Ieva lembrou que já estava tarde e que era preciso voltar a Nida pelo mesmo caminho.',
        choices: [
          { text: 'Jie grįžo į Nidą aplankyti Thomo Manno namo.', translation: 'Eles voltaram a Nida para visitar a casa de Thomas Mann.', next: 'manas' },
          { text: 'Linu nuėjo dar toliau, nors Ieva sakė, kad jau vėlu.', translation: 'O Linu foi ainda mais longe, embora a Ieva dissesse que já era tarde.', next: 'final_pasiklydo' },
        ],
      },
      manas: {
        emoji: '📚',
        text: 'Ant aukšto kranto virš marių stovėjo nedidelis namas su nendriniu stogu. Gidė paaiškino, kad Thomas Mannas čia praleido tris vasaras ir kad labiausiai jam patiko vaizdas į marias. Linu atsistojo prie lango ir suprato, kodėl.',
        translation: 'Na margem alta sobre a laguna, havia uma casinha com teto de junco. A guia explicou que Thomas Mann passou ali três verões e que o que ele mais gostava era da vista para a laguna. O Linu parou diante da janela e entendeu por quê.',
        choices: [
          { text: 'Vakare jie grįžo į kopą pažiūrėti saulėlydžio.', translation: 'À tardinha, eles voltaram à duna para ver o pôr do sol.', next: 'final_bom' },
          {
            text: 'Linu paklausė, ar Thomas Mannas Nidoje gyveno visą gyvenimą.',
            translation: 'O Linu perguntou se Thomas Mann tinha morado em Nida a vida inteira.',
            wrong: 'A guia disse que ele «praleido tris vasaras»: passou TRÊS VERÕES ali. Era a casa de veraneio dele — daí o verbo «vasaroti», passar o verão.',
          },
        ],
      },
      final_bom: {
        emoji: '🌅',
        text: 'Saulė leidosi į jūrą, ir kopos nusidažė rausvai. Ieva sakė, kad tai pati gražiausia vieta Lietuvoje, ir Linu jai neprieštaravo. Jis pagalvojo, kad ši diena buvo dar geresnė, nei jis tikėjosi.',
        translation: 'O sol se punha no mar, e as dunas ficaram rosadas. A Ieva disse que aquele era o lugar mais bonito da Lituânia, e o Linu não discordou. Ele pensou que aquele dia tinha sido ainda melhor do que esperava.',
        ending: { tone: 'bom', title: 'Entre duas águas', message: 'Mar gelado, dunas que andam e a vista preferida de Thomas Mann: o Linu viu o istmo da Curlândia do melhor jeito.' },
      },
      final_pasiklydo: {
        emoji: '🌙',
        text: 'Netrukus visos kopos atrodė vienodos, ir Linu nebežinojo, kurioje pusėje Nida. Ieva jį surado tik sutemus, pasišviesdama telefonu. Jie grįžo pavargę labiau nei bet kada, o saulėlydį jau buvo praleidę.',
        translation: 'Logo todas as dunas pareciam iguais, e o Linu já não sabia para que lado ficava Nida. A Ieva só o encontrou quando escureceu, iluminando o caminho com o celular. Eles voltaram mais cansados do que nunca, e o pôr do sol já tinha passado.',
        ending: { tone: 'neutro', title: 'Perdido nas dunas', message: 'Nas dunas, tudo parece igual. Da próxima vez, o Linu vai ouvir a Ieva quando ela disser que já está tarde.' },
      },
    },
  },
  {
    id: 'lt-h23',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Paveikslai, kurie skamba',
    emoji: '🎹',
    summary: 'Num dia de chuva em Druskininkai, o Linu visita a casa-museu de Čiurlionis, o pintor que também era compositor, e quase perde um concerto no jardim.',
    cultural_context:
      'Druskininkai, à beira do rio Nemunas, é uma estância termal famosa pelas águas minerais. Ali passou a infância Mikalojus Konstantinas Čiurlionis (1875–1911), pintor e compositor que deu a quadros nomes de peças musicais, como «Sonata do Mar»; a casa da família virou museu memorial, com concertos no jardim, e a maior parte dos quadros originais está no museu que leva o nome dele, em Kaunas.',
    start: 'start',
    glossary: [
      ['mažiau nei…', 'menos de…, menos que…'],
      ['sveikesnis už…', 'mais saudável que…'],
      ['garsiausias', 'o mais famoso'],
      ['kuris, kuri, kurioje', 'que, o qual, na qual'],
      ['pasakė, kad…', 'disse que… (discurso indireto)'],
      ['šaltinis', 'fonte (de água)'],
      ['kompozitorius', 'compositor'],
      ['skambinti fortepijonu', 'tocar piano'],
    ],
    nodes: {
      start: {
        emoji: '🌧️',
        text: 'Druskininkuose lijo, todėl Linu nusprendė aplankyti Čiurlionio memorialinį muziejų. Kasininkė pasakė, kad po valandos sode vyks fortepijono koncertas. Ji pridūrė, kad bilietų liko mažiau nei dešimt.',
        translation: 'Chovia em Druskininkai, então o Linu resolveu visitar o museu memorial de Čiurlionis. A moça da bilheteria disse que dali a uma hora ia ter um concerto de piano no jardim. Ela acrescentou que sobravam menos de dez ingressos.',
        choices: [
          { text: 'Linu iškart nusipirko bilietą į koncertą.', translation: 'O Linu comprou na hora um ingresso para o concerto.', next: 'bilietas' },
          { text: 'Linu nusprendė pirma paragauti mineralinio vandens ir grįžti vėliau.', translation: 'O Linu decidiu primeiro provar a água mineral e voltar depois.', next: 'saltinis' },
        ],
      },
      saltinis: {
        emoji: '💧',
        text: 'Šaltinio vanduo buvo sūrokas ir šiek tiek kvepėjo geležimi. Vietinė senutė pasakė, kad šis vanduo sveikesnis už bet kokius vaistus. Ji papasakojo, kad seniau į Druskininkus gydytis atvažiuodavo žmonės iš labai tolimų kraštų.',
        translation: 'A água da fonte era meio salgada e tinha um leve cheiro de ferro. Uma senhorinha da cidade disse que aquela água era mais saudável que qualquer remédio. Ela contou que antigamente vinha gente de terras muito distantes para se tratar em Druskininkai.',
        choices: [{ text: 'Linu grįžo prie muziejaus.', translation: 'O Linu voltou ao museu.', next: 'grizo' }],
      },
      grizo: {
        emoji: '🎟️',
        text: 'Kai Linu grįžo, kasininkė liūdnai papurtė galvą: visi bilietai jau buvo parduoti. Ji pasakė, kad koncerto galima pasiklausyti ir už tvoros. Linu atsistojo po dideliu klevu, kuris saugojo nuo lietaus.',
        translation: 'Quando o Linu voltou, a moça da bilheteria balançou a cabeça, triste: todos os ingressos já tinham sido vendidos. Ela disse que dava para ouvir o concerto do lado de fora da cerca. O Linu ficou debaixo de um grande bordo, que protegia da chuva.',
        choices: [
          { text: 'Linu klausėsi koncerto už tvoros.', translation: 'O Linu ouviu o concerto do lado de fora da cerca.', next: 'final_tvora' },
          {
            text: 'Linu pasakė: «Bet jūs sakėte, kad bilietų yra daugiau nei šimtas!»',
            translation: 'O Linu disse: «Mas a senhora disse que havia mais de cem ingressos!»',
            wrong: 'Ela tinha dito «bilietų liko mažiau nei dešimt»: sobravam MENOS DE dez ingressos. «Mažiau nei» é menos que; «daugiau nei», mais que. Com tão poucos, era arriscado sair.',
          },
        ],
      },
      bilietas: {
        emoji: '🖼️',
        text: 'Iki koncerto buvo dar valanda, todėl Linu apžiūrėjo muziejų. Gidė papasakojo, kad Čiurlionis čia praleido vaikystę ir kad jis buvo ne tik dailininkas, bet ir kompozitorius. Kai kurie jo paveikslai vadinami sonatomis ir fugomis, kaip muzikos kūriniai.',
        translation: 'Ainda faltava uma hora para o concerto, então o Linu visitou o museu. A guia contou que Čiurlionis passou a infância ali e que ele não era só pintor, mas também compositor. Alguns quadros dele se chamam sonatas e fugas, como peças musicais.',
        choices: [
          { text: 'Linu paklausė, kuris paveikslas yra garsiausias.', translation: 'O Linu perguntou qual quadro é o mais famoso.', next: 'paveikslai' },
          { text: 'Linu paklausė, kas Čiurlioniui buvo svarbiau – tapyba ar muzika.', translation: 'O Linu perguntou o que era mais importante para Čiurlionis: a pintura ou a música.', next: 'svarbiau' },
        ],
      },
      paveikslai: {
        emoji: '🌊',
        text: 'Gidė atsakė, kad dauguma originalų saugoma Kaune, o čia kabo reprodukcijos. Ji parodė «Jūros sonatą», kurioje bangos atrodo kaip muzika. Linu pasakė, kad dar niekada nebuvo matęs paslaptingesnio paveikslo.',
        translation: 'A guia respondeu que a maior parte dos originais fica guardada em Kaunas e que ali estão reproduções. Ela mostrou a «Sonata do Mar», na qual as ondas parecem música. O Linu disse que nunca tinha visto um quadro mais misterioso.',
        choices: [{ text: 'Tada kažkas pranešė, kad koncertas prasideda.', translation: 'Então alguém avisou que o concerto ia começar.', next: 'koncertas' }],
      },
      svarbiau: {
        emoji: '🎼',
        text: 'Gidė pasakė, kad Čiurlioniui abu menai buvo vienodai svarbūs: jis tapė paveikslus, panašius į muziką, ir kūrė muziką, panašią į paveikslus. Deja, jis mirė labai jaunas, vos trisdešimt penkerių metų. Vis dėlto per tokį trumpą gyvenimą jis sukūrė daugiau nei daugelis per ilgą.',
        translation: 'A guia disse que, para Čiurlionis, as duas artes eram igualmente importantes: ele pintava quadros parecidos com música e compunha música parecida com quadros. Infelizmente, ele morreu muito jovem, com apenas trinta e cinco anos. Mesmo assim, numa vida tão curta, criou mais do que muitos numa vida longa.',
        choices: [
          { text: 'Tada kažkas pranešė, kad koncertas prasideda.', translation: 'Então alguém avisou que o concerto ia começar.', next: 'koncertas' },
          {
            text: 'Linu pasakė: «Vadinasi, Čiurlionis gyveno labai ilgai.»',
            translation: 'O Linu disse: «Então Čiurlionis viveu muito tempo.»',
            wrong: 'A guia disse que ele «mirė labai jaunas, vos trisdešimt penkerių metų»: morreu muito JOVEM, com apenas 35 anos. O que ela comparou foi a obra: ele criou mais do que muitos numa vida longa.',
          },
        ],
      },
      koncertas: {
        emoji: '🎶',
        text: 'Sode ant kėdžių sėdėjo žmonės, o pianistė skambino Čiurlionio kūrinius. Lietus jau buvo liovęsis, ir nuo medžių krito paskutiniai lašai. Per pertrauką pianistė paklausė, ar kas nors iš klausytojų pats skambina fortepijonu.',
        translation: 'No jardim, as pessoas estavam sentadas em cadeiras, e a pianista tocava obras de Čiurlionis. A chuva já tinha parado, e das árvores caíam as últimas gotas. No intervalo, a pianista perguntou se alguém da plateia também tocava piano.',
        choices: [
          { text: 'Linu drąsiai pakėlė sparną.', translation: 'O Linu levantou a asa, corajoso.', next: 'final_groja' },
          { text: 'Linu tyliai sėdėjo ir laukė antrosios dalies.', translation: 'O Linu ficou quieto esperando a segunda parte.', next: 'final_klauso' },
        ],
      },
      final_groja: {
        emoji: '👏',
        text: 'Linu atsisėdo prie fortepijono ir sugrojo paprastą brazilišką melodiją. Klausytojai plojo, o pianistė pasakė, kad tai buvo trumpiausias, bet linksmiausias kūrinys, kokį ji kada nors girdėjo šiame sode. Linu dar niekada nebuvo toks laimingas lietingą dieną.',
        translation: 'O Linu sentou ao piano e tocou uma melodia brasileira simples. A plateia aplaudiu, e a pianista disse que foi a peça mais curta, mas a mais alegre, que ela já tinha ouvido naquele jardim. O Linu nunca tinha estado tão feliz num dia de chuva.',
        ending: { tone: 'bom', title: 'Um concerto a quatro mãos… ou asas', message: 'O Linu conheceu o pintor que pintava música e ainda tocou no jardim onde Čiurlionis cresceu.' },
      },
      final_klauso: {
        emoji: '🌈',
        text: 'Antroje dalyje pianistė skambino kūrinį, kurį Čiurlionis parašė būdamas jaunas. Virš sodo pasirodė vaivorykštė, ir visi klausytojai tuo pačiu metu pakėlė akis. Linu pagalvojo, kad Druskininkuose net lietus baigiasi gražiau nei kitur.',
        translation: 'Na segunda parte, a pianista tocou uma peça que Čiurlionis escreveu quando era jovem. Sobre o jardim apareceu um arco-íris, e todos na plateia levantaram os olhos ao mesmo tempo. O Linu pensou que em Druskininkai até a chuva acaba de um jeito mais bonito do que em outros lugares.',
        ending: { tone: 'bom', title: 'Arco-íris no jardim', message: 'Música, pintura e um arco-íris: o dia chuvoso do Linu virou um dos mais bonitos da viagem.' },
      },
      final_tvora: {
        emoji: '🍁',
        text: 'Muzika pro tvorą buvo girdima, bet ne taip gerai, kaip sode. Linu stovėjo po klevu, kol koncertas baigėsi, ir galvojo, kad reikėjo pirkti bilietą iš karto. Kitą dieną jis grįžo ir apžiūrėjo muziejų iš vidaus.',
        translation: 'Dava para ouvir a música pela cerca, mas não tão bem quanto no jardim. O Linu ficou debaixo do bordo até o concerto acabar, pensando que devia ter comprado o ingresso logo. No dia seguinte, ele voltou e visitou o museu por dentro.',
        ending: { tone: 'neutro', title: 'Do lado de fora da cerca', message: 'Com menos de dez ingressos sobrando, não dava para deixar para depois. Ainda assim, o Linu ouviu a música, mesmo que de longe.' },
      },
    },
  },
  {
    id: 'lt-h24',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Teisė būti pingvinu',
    emoji: '👼',
    summary: 'No dia 1º de abril, o Linu atravessa a ponte para a «república» de Užupis, em Vilnius, lê a constituição mais divertida do mundo e ajuda uma artista num quadro.',
    cultural_context:
      'Užupis, bairro boêmio de Vilnius do outro lado do riozinho Vilnelė, se declarou em 1º de abril de 1997 uma «república» de artistas, com presidente, bandeira e hino, tudo por brincadeira. A «constituição» está em placas de metal na rua Paupio, em dezenas de línguas, com artigos como «Todos têm direito de ser felizes» e «Todos têm direito de ser infelizes». Na praça central fica, desde 2002, a estátua de um anjo tocando trombeta.',
    start: 'start',
    glossary: [
      ['pasienietis', 'guarda de fronteira'],
      ['antspaudas', 'carimbo'],
      ['mažesnis už…', 'menor que…'],
      ['labiausiai', 'mais que tudo (superlativo do advérbio)'],
      ['straipsnis', 'artigo (de uma lei)'],
      ['neprivalo', 'não é obrigado'],
      ['kurį, kuriame', 'que, no qual (relativo)'],
      ['drobė', 'tela (de pintura)'],
    ],
    nodes: {
      start: {
        emoji: '🌉',
        text: 'Balandžio pirmąją Linu atėjo prie tilto per Vilnelę. Ten stovėjo juokingi «pasieniečiai», kurie tikrino atvykstančiųjų pasus. Vienas jų pasakė, kad Užupio respublika mažesnė už bet kurią kitą, bet linksmesnė už visas.',
        translation: 'No dia 1º de abril, o Linu chegou à ponte sobre o Vilnelė. Ali estavam uns «guardas de fronteira» engraçados, que conferiam os passaportes de quem chegava. Um deles disse que a república de Užupis é menor que qualquer outra, mas mais divertida que todas.',
        choices: [
          { text: 'Linu padavė savo pasą.', translation: 'O Linu entregou o passaporte.', next: 'pasas' },
          { text: 'Linu prisipažino, kad pasą paliko viešbutyje.', translation: 'O Linu confessou que tinha deixado o passaporte no hotel.', next: 'be_paso' },
        ],
      },
      be_paso: {
        emoji: '🛂',
        text: 'Pasienietis rimtai pažiūrėjo į Linu ir pasakė, kad be paso įeiti negalima. Tačiau jis pridūrė, kad pingvinams daroma išimtis, jeigu jie papasakoja anekdotą. Linu papasakojo trumpiausią anekdotą, kokį žinojo, ir pasienietis nusijuokė.',
        translation: 'O guarda olhou sério para o Linu e disse que sem passaporte não se pode entrar. Mas acrescentou que para pinguins se abre uma exceção, se eles contarem uma piada. O Linu contou a piada mais curta que sabia, e o guarda caiu na risada.',
        choices: [{ text: 'Pasienietis praleido Linu, ir šis nuėjo į Paupio gatvę.', translation: 'O guarda deixou o Linu passar, e ele foi para a rua Paupio.', next: 'konstitucija' }],
      },
      pasas: {
        emoji: '🔖',
        text: 'Pasienietis uždėjo ant paso spalvotą antspaudą su angelu. Jis paaiškino, kad Užupio respublika buvo paskelbta 1997 metais ir kad tai menininkų respublika. Šalia stovinti menininkė Greta pasisiūlė aprodyti Linu savo rajoną.',
        translation: 'O guarda pôs no passaporte um carimbo colorido com um anjo. Ele explicou que a república de Užupis foi proclamada em 1997 e que é uma república de artistas. Uma artista que estava ali perto, a Greta, se ofereceu para mostrar o bairro dela ao Linu.',
        choices: [
          { text: 'Linu sutiko ir nuėjo su Greta į Paupio gatvę.', translation: 'O Linu aceitou e foi com a Greta para a rua Paupio.', next: 'konstitucija' },
          {
            text: 'Linu paklausė, ar respublika paskelbta tik šiandien.',
            translation: 'O Linu perguntou se a república tinha sido proclamada só hoje.',
            wrong: 'O guarda disse «buvo paskelbta 1997 metais»: foi proclamada em 1997. Hoje, 1º de abril, é só o aniversário dela — por isso a festa na ponte.',
          },
        ],
      },
      konstitucija: {
        emoji: '📜',
        text: 'Paupio gatvėje ant sienos kabojo daugybė metalinių lentelių su Užupio konstitucija įvairiomis kalbomis. Greta paaiškino, kad visi straipsniai trumpi, bet kai kurie – labai rimti. Linu perskaitė: «Kiekvienas turi teisę būti laimingas» ir «Kiekvienas turi teisę būti nelaimingas».',
        translation: 'Na rua Paupio, havia na parede um monte de placas de metal com a constituição de Užupis em várias línguas. A Greta explicou que todos os artigos são curtos, mas alguns são bem sérios. O Linu leu: «Todos têm direito de ser felizes» e «Todos têm direito de ser infelizes».',
        choices: [
          { text: 'Linu paklausė, kuris straipsnis Gretai patinka labiausiai.', translation: 'O Linu perguntou de qual artigo a Greta gostava mais.', next: 'kate' },
          { text: 'Linu norėjo pamatyti Užupio angelą.', translation: 'O Linu quis ver o anjo de Užupis.', next: 'angelas' },
        ],
      },
      kate: {
        emoji: '🐈',
        text: 'Greta atsakė, kad jai labiausiai patinka straipsnis apie katę. Jame parašyta, kad katė neprivalo mylėti savo šeimininko, tačiau sunkią minutę privalo jam padėti. Greta juokėsi, kad jos katinas šio straipsnio dar neperskaitė.',
        translation: 'A Greta respondeu que o artigo de que ela mais gosta é o do gato. Nele está escrito que o gato não é obrigado a amar o dono, mas, num momento difícil, tem de ajudá-lo. A Greta riu, dizendo que o gato dela ainda não tinha lido esse artigo.',
        choices: [
          { text: 'Paskui jie nuėjo prie angelo.', translation: 'Depois eles foram até o anjo.', next: 'angelas' },
          {
            text: 'Linu pasakė: «Vadinasi, katė visada privalo mylėti savo šeimininką.»',
            translation: 'O Linu disse: «Então o gato é sempre obrigado a amar o dono.»',
            wrong: 'O artigo diz «katė NEprivalo mylėti savo šeimininko»: o gato NÃO É OBRIGADO a amar o dono (repare no genitivo da negação: «šeimininko»). A obrigação é só ajudar num momento difícil.',
          },
        ],
      },
      angelas: {
        emoji: '🎺',
        text: 'Aikštėje ant aukšto stulpo stovėjo bronzinis angelas, pučiantis trimitą. Greta papasakojo, kad angelas čia stovi nuo 2002 metų ir saugo menininkų rajoną. Ji paklausė Linu, ar jis nenorėtų padėti jai baigti naują paveikslą.',
        translation: 'Na praça, no alto de uma coluna, havia um anjo de bronze tocando trombeta. A Greta contou que o anjo está ali desde 2002 e protege o bairro dos artistas. Ela perguntou ao Linu se ele não queria ajudá-la a terminar um quadro novo.',
        choices: [
          { text: 'Linu mielai sutiko.', translation: 'O Linu topou com prazer.', next: 'dirbtuve' },
          { text: 'Linu atsakė, kad labai išalko, ir pasiūlė pirma pavalgyti.', translation: 'O Linu respondeu que estava com muita fome e sugeriu comer primeiro.', next: 'final_pietus' },
        ],
      },
      dirbtuve: {
        emoji: '🎨',
        text: 'Gretos dirbtuvė buvo mažesnė už Linu viešbučio kambarį, bet pilna spalvų. Ji paprašė Linu pamerkti sparną į mėlynus dažus ir paspausti jį ant drobės. Greta sakė, kad tai bus pirmasis Užupio paveikslas, kurį nutapė pingvinas.',
        translation: 'O ateliê da Greta era menor que o quarto de hotel do Linu, mas cheio de cores. Ela pediu ao Linu que molhasse a asa na tinta azul e a apertasse na tela. A Greta disse que aquele ia ser o primeiro quadro de Užupis pintado por um pinguim.',
        choices: [{ text: 'Linu atsargiai paspaudė sparną ant drobės.', translation: 'O Linu apertou a asa na tela com cuidado.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🖌️',
        text: 'Ant drobės liko mėlynas sparno atspaudas, panašus į bangą. Greta pavadino paveikslą «Kiekvienas turi teisę būti pingvinu». Ji pažadėjo, kad jis kabos jos dirbtuvės lange tol, kol Linu vėl grįš į Užupį.',
        translation: 'Na tela ficou a marca azul da asa, parecida com uma onda. A Greta deu ao quadro o nome de «Todos têm direito de ser pinguins». Ela prometeu que ele ia ficar pendurado na vitrine do ateliê até o Linu voltar a Užupis.',
        ending: { tone: 'bom', title: 'Um artigo novo', message: 'Carimbo no passaporte, constituição lida e uma obra de arte assinada com a asa: o Linu virou cidadão honorário de Užupis.' },
      },
      final_pietus: {
        emoji: '🥣',
        text: 'Jie nuėjo į kavinę prie Vilnelės ir ilgai kalbėjosi apie meną ir Braziliją. Po pietų Greta prisiminė, kad turi skubėti į parodos atidarymą. Ji pažadėjo pakviesti Linu kitą kartą, kai pieš naują paveikslą.',
        translation: 'Eles foram a um café à beira do Vilnelė e conversaram muito sobre arte e sobre o Brasil. Depois do almoço, a Greta lembrou que precisava correr para a abertura de uma exposição. Ela prometeu chamar o Linu da próxima vez que fosse pintar um quadro novo.',
        ending: { tone: 'neutro', title: 'Fica para a próxima', message: 'Um almoço gostoso e uma amiga nova, mas o quadro ficou sem a asa do Linu. Užupis vai continuar esperando por ele.' },
      },
    },
  },
  // ───────────────────────────── B2.1 ─────────────────────────────
  {
    id: 'lt-h25',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Kanapinio pergalė',
    emoji: '🎭',
    summary: 'Em Plateliai, na Žemaitija, o Linu põe uma máscara, come panquecas e assiste à briga entre o Gordo e o Magro no carnaval lituano, o Užgavėnės.',
    cultural_context:
      'O Užgavėnės é o carnaval lituano, na véspera da Quarta-feira de Cinzas: as pessoas se fantasiam com máscaras de diabos, bruxas, bodes e grous, comem muitas panquecas (blynai) e encenam a luta entre o gordo Lašininis (o Toucinho) e o magro Kanapinis (o Cânhamo), que sempre vence e abre a Quaresma. No fim, queima-se a Morė, um boneco de palha que leva o inverno embora. A festa de Plateliai, no Parque Nacional da Žemaitija, é das mais conhecidas, e ali há um museu de máscaras de Užgavėnės.',
    start: 'start',
    glossary: [
      ['jei turėtum…', 'se você tivesse… (condicional)'],
      ['atpažintų', 'reconheceriam'],
      ['aš tavo vietoje…', 'eu, no seu lugar…'],
      ['persirengėlis', 'fantasiado, mascarado'],
      ['kaukė', 'máscara'],
      ['blynai', 'panquecas'],
      ['Lašininis, Kanapinis', 'o Gordo (Toucinho) e o Magro (Cânhamo)'],
      ['Morė', 'boneco de palha queimado no fim da festa'],
    ],
    nodes: {
      start: {
        emoji: '❄️',
        text: 'Vasario pabaigoje Linu atvažiavo į Platelius švęsti Užgavėnių. Šeimininkė Danutė pasakė: «Jei neturėtum kaukės, tave visi atpažintų, o per Užgavėnes niekas neturėtų būti atpažintas.» Ji pasiūlė Linu išsirinkti kaukę iš senos skrynios.',
        translation: 'No fim de fevereiro, o Linu foi a Plateliai para festejar o Užgavėnės. A dona da casa, Danutė, disse: «Se você não tivesse máscara, todo mundo te reconheceria, e no Užgavėnės ninguém deveria ser reconhecido.» Ela sugeriu que o Linu escolhesse uma máscara num velho baú.',
        choices: [
          { text: 'Linu išsirinko velnio kaukę su ragais.', translation: 'O Linu escolheu uma máscara de diabo com chifres.', next: 'velnias' },
          { text: 'Linu išsirinko gervės kaukę su ilgu snapu.', translation: 'O Linu escolheu uma máscara de grou com um bico comprido.', next: 'gerve' },
        ],
      },
      velnias: {
        emoji: '😈',
        text: 'Danutė nusijuokė ir pasakė, kad velnio kaukė Linu tinka geriau nei bet kuri kita. «Aš tavo vietoje dar pasiimčiau ir šluotą», – patarė ji. Su šluota ir ragais Linu atrodė tikrai baisiai.',
        translation: 'A Danutė riu e disse que a máscara de diabo caía no Linu melhor do que qualquer outra. «Eu, no seu lugar, ainda levaria uma vassoura», aconselhou ela. Com vassoura e chifres, o Linu ficou assustador de verdade.',
        choices: [{ text: 'Jie išėjo į miestelio aikštę.', translation: 'Eles saíram para a praça da cidadezinha.', next: 'aikste' }],
      },
      gerve: {
        emoji: '🦩',
        text: 'Gervės kaukė buvo tokia ilga, kad Linu vos matė, kur eina. Danutė perspėjo, kad jei jis nusiimtų kaukę per anksti, persirengėliai jį išjuoktų. Todėl Linu nusprendė kentėti iki vakaro.',
        translation: 'A máscara de grou era tão comprida que o Linu mal via por onde andava. A Danutė avisou que, se ele tirasse a máscara cedo demais, os mascarados iam caçoar dele. Por isso o Linu resolveu aguentar até a noite.',
        choices: [
          { text: 'Jie išėjo į miestelio aikštę.', translation: 'Eles saíram para a praça da cidadezinha.', next: 'aikste' },
          {
            text: 'Linu iškart nusiėmė kaukę, nes Danutė sakė, kad niekas nesijuoks.',
            translation: 'O Linu tirou a máscara na hora, porque a Danutė disse que ninguém ia rir.',
            wrong: 'A Danutė disse o contrário: «jei jis nusiimtų kaukę per anksti, persirengėliai jį išjuoktų» — SE ele TIRASSE a máscara cedo, os mascarados CAÇOARIAM dele. O condicional (-tų) mostra o que aconteceria nessa hipótese.',
          },
        ],
      },
      aikste: {
        emoji: '👹',
        text: 'Aikštėje susirinko šimtai persirengėlių: velnių, raganų, ožių ir gervių. Visi laukė kovos tarp Lašininio ir Kanapinio. Danutė paaiškino, kad jei laimėtų storasis Lašininis, žiema niekada nesibaigtų – taip bent jau sakoma per šventę.',
        translation: 'Na praça se juntaram centenas de mascarados: diabos, bruxas, bodes e grous. Todos esperavam a luta entre o Gordo e o Magro. A Danutė explicou que, se o gordo Lašininis ganhasse, o inverno nunca acabaria — pelo menos é o que se diz na festa.',
        choices: [
          { text: 'Linu prasibrovė arčiau, kad geriau matytų kovą.', translation: 'O Linu se espremeu mais para a frente, para ver melhor a luta.', next: 'kova' },
          { text: 'Linu nusprendė pirmiausia paragauti blynų.', translation: 'O Linu resolveu primeiro provar as panquecas.', next: 'blynai' },
        ],
      },
      blynai: {
        emoji: '🥞',
        text: 'Prie didelio stalo moterys kepė blynus ir dalijo juos visiems. Danutė sakė, kad per Užgavėnes reikėtų valgyti daug kartų: kas valgytų mažai, tas visus metus būtų alkanas. Linu suvalgė penkis blynus su spirgučiais ir grietine.',
        translation: 'Numa mesa grande, umas mulheres faziam panquecas e as distribuíam para todos. A Danutė disse que no Užgavėnės se deveria comer muitas vezes: quem comesse pouco passaria fome o ano inteiro. O Linu comeu cinco panquecas com torresminho e creme de leite azedo.',
        choices: [
          { text: 'Staiga pasigirdo šauksmai – prasidėjo kova.', translation: 'De repente se ouviram gritos: a luta começou.', next: 'kova' },
          {
            text: 'Linu atsisakė blynų, nes Danutė sakė, kad šiandien reikia pasninkauti.',
            translation: 'O Linu recusou as panquecas, porque a Danutė disse que hoje era preciso jejuar.',
            wrong: 'A Danutė disse que no Užgavėnės «reikėtų valgyti daug kartų», deveria-se comer MUITAS vezes, e que quem comesse pouco («kas valgytų mažai») passaria fome o ano todo. O jejum só começa depois, na Quaresma.',
          },
        ],
      },
      kova: {
        emoji: '🤼',
        text: 'Liesas Kanapinis ir storas Lašininis ilgai stumdėsi, o minia garsiai šaukė. Pagaliau Kanapinis parvertė Lašininį ant sniego. «Jei ne Kanapinis, pavasaris niekada neateitų!» – šaukė vaikai.',
        translation: 'O magro Kanapinis e o gordo Lašininis se empurraram por muito tempo, e a multidão gritava alto. Finalmente o Kanapinis derrubou o Lašininis na neve. «Se não fosse o Kanapinis, a primavera nunca chegaria!», gritavam as crianças.',
        choices: [{ text: 'Vakare visi nuėjo prie ežero deginti Morės.', translation: 'À noite, todos foram para o lago queimar a Morė.', next: 'more' }],
      },
      more: {
        emoji: '🔥',
        text: 'Ant Platelių ežero kranto stovėjo didelė šiaudinė Morė. Kai ją uždegė, liepsnos pakilo aukščiau už medžius. Danutė paklausė, ką Linu norėtų, kad ugnis nusineštų kartu su žiema.',
        translation: 'Na margem do lago Plateliai havia uma grande Morė de palha. Quando a acenderam, as chamas subiram mais alto que as árvores. A Danutė perguntou o que o Linu gostaria que o fogo levasse embora junto com o inverno.',
        choices: [
          { text: 'Linu atsakė: «Norėčiau, kad ugnis nusineštų mano baimę kalbėti lietuviškai.»', translation: 'O Linu respondeu: «Eu queria que o fogo levasse embora o meu medo de falar lituano.»', next: 'final_bom' },
          { text: 'Linu atsakė, kad jam žiema patinka ir jis norėtų, kad ji niekada nesibaigtų.', translation: 'O Linu respondeu que gosta do inverno e queria que ele nunca acabasse.', next: 'final_ziema' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Danutė pritarė ir pasakė, kad jis jau dabar kalba geriau nei daugelis turistų. Visi aplink plojo, o Morė sudegė iki galo. Linu grįžo namo pavargęs, sotus ir drąsesnis nei bet kada.',
        translation: 'A Danutė concordou e disse que ele já falava melhor do que muitos turistas. Todos em volta aplaudiram, e a Morė queimou até o fim. O Linu voltou para casa cansado, de barriga cheia e mais corajoso do que nunca.',
        ending: { tone: 'bom', title: 'Adeus, medo', message: 'Máscara, panquecas e a vitória do Magro: o Linu viveu o carnaval da Žemaitija e deixou o medo queimar junto com a Morė.' },
      },
      final_ziema: {
        emoji: '🌨️',
        text: 'Danutė juokėsi, kad tokio noro Plateliuose dar niekas nebuvo girdėjęs. Kitą rytą, lyg tyčia, pasnigo dar daugiau. Kaimynai juokais sakė, kad kaltas pingvinas, o Linu buvo labai patenkintas.',
        translation: 'A Danutė riu, dizendo que ninguém em Plateliai tinha ouvido um desejo desses. Na manhã seguinte, como se fosse de propósito, nevou ainda mais. Os vizinhos diziam, brincando, que a culpa era do pinguim, e o Linu ficou todo contente.',
        ending: { tone: 'neutro', title: 'O inverno do pinguim', message: 'No Užgavėnės todo mundo quer se livrar do inverno, menos um pinguim. A festa foi ótima, mas os vizinhos não gostaram muito da neve extra.' },
      },
    },
  },
  {
    id: 'lt-h26',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Kaimo meistras',
    emoji: '🐴',
    summary: 'No museu a céu aberto de Rumšiškės, o Linu passa um dia como um aldeão do século XIX: forja um prego ou assa pão num forno de lenha, e depois encara uma charrete.',
    cultural_context:
      'O Museu Etnográfico ao Ar Livre de Rumšiškės (Lietuvos liaudies buities muziejus), perto de Kaunas, é um dos maiores museus a céu aberto da Europa: reúne casas de fazenda, moinhos, igrejas e oficinas trazidos das quatro regiões etnográficas da Lituânia (Aukštaitija, Žemaitija, Dzūkija e Suvalkija). Ele fica à beira do reservatório de Kaunas (Kauno marios), cuja criação, em 1959, inundou parte da antiga cidadezinha de Rumšiškės.',
    start: 'start',
    glossary: [
      ['jei gyventum…, kuo norėtum būti?', 'se você vivesse…, o que gostaria de ser?'],
      ['kalvis, kalvė', 'ferreiro, ferraria'],
      ['kalti vinį', 'forjar um prego'],
      ['krosnis', 'forno, fogão a lenha'],
      ['neiškiltų', 'não cresceria (a massa)'],
      ['jei ne…', 'se não fosse…'],
      ['vadelės', 'rédeas'],
      ['būtų buvęs', 'teria sido (condicional passado)'],
    ],
    nodes: {
      start: {
        emoji: '🏡',
        text: 'Rumšiškėse, Liaudies buities muziejuje, Linu dalyvavo edukacinėje programoje. Edukatorius Jurgis paklausė: «Jei gyventum XIX amžiaus kaime, kuo norėtum būti?» Jis pasakė, kad Linu galėtų pasirinkti vieną darbą visai dienai.',
        translation: 'Em Rumšiškės, no museu etnográfico ao ar livre, o Linu participou de uma atividade educativa. O educador Jurgis perguntou: «Se você vivesse numa aldeia do século XIX, o que gostaria de ser?» Ele disse que o Linu poderia escolher um trabalho para o dia inteiro.',
        choices: [
          { text: 'Linu atsakė, kad norėtų būti kalviu.', translation: 'O Linu respondeu que gostaria de ser ferreiro.', next: 'kalve' },
          { text: 'Linu atsakė, kad norėtų kepti duoną.', translation: 'O Linu respondeu que gostaria de assar pão.', next: 'duona' },
        ],
      },
      kalve: {
        emoji: '⚒️',
        text: 'Kalvėje buvo karšta ir tamsu. Jurgis paaiškino, kad be kalvio kaimas negalėtų gyventi: niekas neturėtų nei pasagų, nei plūgų, nei vinių. Jis padavė Linu plaktuką ir parodė, kaip kalti vinį.',
        translation: 'Na ferraria estava quente e escuro. O Jurgis explicou que, sem o ferreiro, a aldeia não conseguiria viver: ninguém teria ferraduras, nem arados, nem pregos. Ele deu um martelo ao Linu e mostrou como forjar um prego.',
        choices: [
          { text: 'Linu pradėjo kalti.', translation: 'O Linu começou a martelar.', next: 'vinis' },
          {
            text: 'Linu pasakė: «Vadinasi, kalvis kaime buvo nelabai reikalingas.»',
            translation: 'O Linu disse: «Então o ferreiro não era muito necessário na aldeia.»',
            wrong: 'O Jurgis disse que «be kalvio kaimas negalėtų gyventi»: SEM o ferreiro a aldeia NÃO CONSEGUIRIA viver, porque ninguém teria («neturėtų») ferraduras, arados nem pregos. O condicional descreve esse mundo sem ferreiro.',
          },
        ],
      },
      vinis: {
        emoji: '🔩',
        text: 'Po valandos Linu nukalė kreivą, bet tikrą vinį. Jurgis juokavo, kad jei Linu čia pagyventų metus, taptų geriausiu kalviu apylinkėse. Linu atsakė, kad sutiktų, jei tik kalvėje būtų vėsiau.',
        translation: 'Depois de uma hora, o Linu tinha forjado um prego torto, mas de verdade. O Jurgis brincou que, se o Linu morasse ali um ano, viraria o melhor ferreiro da região. O Linu respondeu que toparia, se ao menos a ferraria fosse mais fresca.',
        choices: [{ text: 'Vidurdienį jie nuėjo pietauti.', translation: 'Ao meio-dia, eles foram almoçar.', next: 'pietus' }],
      },
      duona: {
        emoji: '🧱',
        text: 'Dzūkų troboje šeimininkė Ona kūreno didelę krosnį. Ji paaiškino, kad jei krosnis būtų per karšta, duona sudegtų, o jei per šalta – neiškiltų. Todėl ji karštį tikrindavo ranka.',
        translation: 'Na casa de fazenda da Dzūkija, a dona Ona esquentava um grande forno a lenha. Ela explicou que, se o forno estivesse quente demais, o pão queimaria, e se estivesse frio demais, não cresceria. Por isso ela verificava o calor com a mão.',
        choices: [
          { text: 'Linu padėjo suformuoti kepalus.', translation: 'O Linu ajudou a moldar os pães.', next: 'kepimas' },
          {
            text: 'Linu pasiūlė įkaitinti krosnį kuo labiau, kad duona iškeptų greičiau.',
            translation: 'O Linu sugeriu esquentar o forno ao máximo, para o pão assar mais rápido.',
            wrong: 'A Ona tinha explicado que, «jei krosnis būtų per karšta, duona sudegtų»: SE o forno estivesse quente DEMAIS, o pão QUEIMARIA. O segredo é o calor certo, conferido com a mão.',
          },
        ],
      },
      kepimas: {
        emoji: '🍞',
        text: 'Kepalai buvo padėti ant klevo lapų ir pašauti į krosnį. Kol duona kepė, Ona pasakojo, kad jos senelių namai stovėjo senosiose Rumšiškėse, kurias užliejo Kauno marios. «Jei ne marios, gal ir dabar ten gyvenčiau», – atsiduso ji.',
        translation: 'Os pães foram postos sobre folhas de bordo e empurrados para dentro do forno. Enquanto o pão assava, a Ona contou que a casa dos avós dela ficava na antiga Rumšiškės, que foi inundada pelo reservatório de Kaunas. «Se não fosse o reservatório, talvez eu ainda morasse lá», suspirou ela.',
        choices: [{ text: 'Vidurdienį jie nuėjo pietauti.', translation: 'Ao meio-dia, eles foram almoçar.', next: 'pietus' }],
      },
      pietus: {
        emoji: '🍲',
        text: 'Per pietus visi valgė šaltibarščius ir karštą duoną. Jurgis pasakė, kad po pietų laukia tikras išbandymas: reikės pravažiuoti su arkliu ir vežimu per miestelio aikštę. Jis pridūrė, kad jei Linu nesijaustų drąsiai, galėtų tiesiog pasėdėti vežime.',
        translation: 'No almoço, todos comeram sopa fria de beterraba e pão quente. O Jurgis disse que depois do almoço vinha um desafio de verdade: atravessar a praça da cidadezinha com o cavalo e a charrete. Ele acrescentou que, se o Linu não se sentisse corajoso, poderia só ir sentado na charrete.',
        choices: [
          { text: 'Linu paėmė vadeles.', translation: 'O Linu pegou as rédeas.', next: 'arklys' },
          { text: 'Linu nusprendė tik pasėdėti vežime.', translation: 'O Linu decidiu só ir sentado na charrete.', next: 'vezimas' },
        ],
      },
      arklys: {
        emoji: '🐎',
        text: 'Arklys buvo senas ir ramus, bet Linu vos pasiekė vadeles. Vos jam sušukus «Vio!», arklys pajudėjo, ir lankytojai ėmė ploti. Jurgis šypsojosi: jei visi mokiniai būtų tokie drąsūs, jo darbas būtų daug lengvesnis.',
        translation: 'O cavalo era velho e calmo, mas o Linu mal alcançava as rédeas. Assim que ele gritou «Eia!», o cavalo andou, e os visitantes começaram a aplaudir. O Jurgis sorria: se todos os alunos fossem tão corajosos assim, o trabalho dele seria bem mais fácil.',
        choices: [{ text: 'Linu apvažiavo visą aikštę ir sustojo prie bažnyčios.', translation: 'O Linu deu a volta na praça inteira e parou perto da igreja.', next: 'final_bom' }],
      },
      vezimas: {
        emoji: '🛒',
        text: 'Linu sėdėjo vežime, o Jurgis vedė arklį už pavadžio. Aikštėje lankytojai mojavo ir fotografavo. Linu galvojo, kad jei būtų buvęs drąsesnis, dabar pats laikytų vadeles.',
        translation: 'O Linu ia sentado na charrete, e o Jurgis puxava o cavalo pelo cabresto. Na praça, os visitantes acenavam e tiravam fotos. O Linu pensava que, se tivesse sido mais corajoso, agora estaria ele mesmo segurando as rédeas.',
        choices: [{ text: 'Vakare Linu grįžo į Kauną.', translation: 'À noite, o Linu voltou para Kaunas.', next: 'final_keleivis' }],
      },
      final_bom: {
        emoji: '📜',
        text: 'Dienos pabaigoje Jurgis įteikė Linu popierinį «kaimo meistro» pažymėjimą. Linu pagalvojo, kad jei gyventų XIX amžiuje, jam tikriausiai patiktų. Bet tik tuo atveju, jei vasaros būtų šaltesnės.',
        translation: 'No fim do dia, o Jurgis entregou ao Linu um certificado de papel de «mestre da aldeia». O Linu pensou que, se vivesse no século XIX, provavelmente ia gostar. Mas só se os verões fossem mais frios.',
        ending: { tone: 'bom', title: 'Mestre da aldeia', message: 'Trabalho de verdade, pão de forno a lenha e uma charrete na praça: o Linu viveu um dia inteiro como no século XIX.' },
      },
      final_keleivis: {
        emoji: '🚌',
        text: 'Linu grįžo į Kauną su duonos kvapu plunksnose. Diena buvo įdomi, nors vežime jis buvo tik keleivis. Kitą kartą, pagalvojo jis, būtinai pats paims vadeles.',
        translation: 'O Linu voltou para Kaunas com cheiro de pão nas penas. O dia foi interessante, embora na charrete ele tenha sido só passageiro. Da próxima vez, pensou ele, vai pegar as rédeas ele mesmo, sem falta.',
        ending: { tone: 'neutro', title: 'Só passageiro', message: 'Um dia bonito no museu, mas a coragem ficou para a próxima. Se tivesse pegado as rédeas, a história seria outra!' },
      },
    },
  },
  {
    id: 'lt-h27',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Paparčio žiedo naktis',
    emoji: '🔥',
    summary: 'Na noite mais curta do ano, em Kernavė, o Linu sobe os antigos morros-fortaleza, solta uma guirlanda no rio e decide se vai procurar a lendária flor da samambaia.',
    cultural_context:
      'Kernavė, às margens do rio Neris, foi uma cidade importante do Grão-Ducado da Lituânia nos séculos XIII e XIV, destruída pelos Cavaleiros Teutônicos em 1390; seus cinco morros-fortaleza (piliakalniai) são Patrimônio Mundial da UNESCO desde 2004. Ali se celebra a Rasos (Joninės), a festa do solstício de verão, com fogueiras, guirlandas soltas na água e a busca da flor da samambaia, que segundo a lenda floresce uma única noite por ano — embora samambaias não deem flores.',
    start: 'start',
    glossary: [
      ['piliakalnis', 'morro-fortaleza, colina fortificada'],
      ['jei galėtum…, nepažintum…', 'se você pudesse…, não reconheceria…'],
      ['jei ne…', 'se não fosse…'],
      ['vainikas', 'guirlanda, coroa de flores'],
      ['laužas', 'fogueira'],
      ['paparčio žiedas', 'a flor da samambaia'],
      ['rasa', 'orvalho (e o nome da festa)'],
      ['susikibę už rankų', 'de mãos dadas'],
    ],
    nodes: {
      start: {
        emoji: '🌄',
        text: 'Birželio 23-iosios vakarą Linu atvyko į Kernavę švęsti Rasų. Studentė archeologė Emilija parodė penkis piliakalnius prie Neries ir pasakė, kad čia kadaise stovėjo didelis miestas. «Jei galėtum pamatyti Kernavę prieš septynis šimtus metų, šio slėnio nepažintum», – pridūrė ji.',
        translation: 'Na noite de 23 de junho, o Linu chegou a Kernavė para festejar a Rasos. A estudante de arqueologia Emilija mostrou os cinco morros-fortaleza à beira do Neris e disse que ali existiu uma grande cidade. «Se você pudesse ver Kernavė setecentos anos atrás, não reconheceria este vale», acrescentou ela.',
        choices: [
          { text: 'Linu užlipo ant aukščiausio piliakalnio.', translation: 'O Linu subiu no morro-fortaleza mais alto.', next: 'piliakalnis' },
          { text: 'Linu nuėjo prie merginų, pinančių vainikus.', translation: 'O Linu foi até as moças que trançavam guirlandas.', next: 'vainikai' },
        ],
      },
      piliakalnis: {
        emoji: '⛰️',
        text: 'Nuo viršaus matėsi upė, pievos ir laužai, kuriuos žmonės jau kūrė slėnyje. Emilija papasakojo, kad 1390 metais miestą sudegino kryžiuočiai ir jis daugiau nebuvo atstatytas. «Jei ne tas gaisras, gal čia ir dabar būtų didelis miestas», – sakė ji.',
        translation: 'Lá de cima se viam o rio, os prados e as fogueiras que as pessoas já acendiam no vale. A Emilija contou que em 1390 os Cavaleiros Teutônicos incendiaram a cidade, e ela nunca mais foi reconstruída. «Se não fosse aquele incêndio, talvez ainda houvesse uma cidade grande aqui», disse ela.',
        choices: [
          { text: 'Jie nusileido prie merginų, pinančių vainikus.', translation: 'Eles desceram até as moças que trançavam guirlandas.', next: 'vainikai' },
          {
            text: 'Linu pasakė: «Vadinasi, Kernavė ir dabar yra didelis miestas.»',
            translation: 'O Linu disse: «Então Kernavė ainda hoje é uma cidade grande.»',
            wrong: '«Jei ne tas gaisras, gal… būtų didelis miestas» é uma hipótese irreal: SE NÃO FOSSE o incêndio, talvez HOUVESSE uma cidade grande. Ou seja, não há: a cidade foi incendiada em 1390 e nunca reconstruída.',
          },
        ],
      },
      vainikai: {
        emoji: '💐',
        text: 'Merginos pynė vainikus iš lauko gėlių ir ąžuolo lapų. Viena jų paaiškino, kad vėliau vainikai bus paleisti į upę: jei du vainikai plauktų kartu, tų žmonių lauktų vestuvės. Ji pasiūlė Linu nusipinti savo vainiką.',
        translation: 'As moças trançavam guirlandas de flores do campo e folhas de carvalho. Uma delas explicou que depois as guirlandas seriam soltas no rio: se duas guirlandas boiassem juntas, aquelas pessoas teriam casamento pela frente. Ela sugeriu que o Linu trançasse a sua própria guirlanda.',
        choices: [
          { text: 'Linu nusipynė vainiką ir nuėjo prie upės.', translation: 'O Linu trançou uma guirlanda e foi até o rio.', next: 'upe' },
          { text: 'Linu mandagiai atsisakė ir nuėjo prie laužo.', translation: 'O Linu recusou educadamente e foi até a fogueira.', next: 'lauzas' },
        ],
      },
      upe: {
        emoji: '🕯️',
        text: 'Prie Neries visi paleido vainikus su degančiomis žvakutėmis. Linu vainikas ilgai sukosi vietoje, o paskui priplaukė prie Emilijos vainiko. Visi aplinkui ėmė juoktis ir ploti, o Emilija paraudo.',
        translation: 'À beira do Neris, todos soltaram as guirlandas com velinhas acesas. A guirlanda do Linu ficou um tempão girando no lugar e depois foi parar junto da guirlanda da Emilija. Todo mundo em volta começou a rir e aplaudir, e a Emilija ficou vermelha.',
        choices: [{ text: 'Emilija greitai pasiūlė eiti prie laužo.', translation: 'A Emilija logo sugeriu ir até a fogueira.', next: 'lauzas' }],
      },
      lauzas: {
        emoji: '🌿',
        text: 'Vidurnaktį jaunimas šokinėjo per laužą, o vyresni dainavo. Emilija papasakojo apie paparčio žiedą, kuris žydi tik vieną naktį per metus – šiąnakt. «Sakoma, kad jei jį rastum, suprastum paukščių ir žvėrių kalbą», – sakė ji.',
        translation: 'À meia-noite, os jovens pulavam a fogueira, e os mais velhos cantavam. A Emilija falou da flor da samambaia, que floresce uma única noite por ano: esta. «Dizem que, se você a encontrasse, entenderia a língua dos pássaros e dos bichos», disse ela.',
        choices: [
          { text: 'Linu nusprendė eiti į mišką ieškoti paparčio žiedo.', translation: 'O Linu resolveu ir para a floresta procurar a flor da samambaia.', next: 'miskas' },
          { text: 'Linu nusprendė peršokti per laužą.', translation: 'O Linu resolveu pular a fogueira.', next: 'sokti' },
          {
            text: 'Linu pasakė, kad paparčio žiedo galima ieškoti bet kurią naktį.',
            translation: 'O Linu disse que dá para procurar a flor da samambaia em qualquer noite.',
            wrong: 'A Emilija disse que a flor «žydi tik vieną naktį per metus – šiąnakt»: floresce UMA única noite por ano, justamente esta. Por isso a busca é na noite da Rasos.',
          },
        ],
      },
      miskas: {
        emoji: '🌲',
        text: 'Miške buvo tamsu ir drėgna, o paparčių augo visur. Linu ieškojo žiedo iki pat aušros, bet rado tik rasą ant lapų. Grįžęs jis sužinojo, kad paparčio žiedo niekas niekada nerado, nes papartis apskritai nežydi.',
        translation: 'Na floresta estava escuro e úmido, e havia samambaias por todo lado. O Linu procurou a flor até o amanhecer, mas só achou orvalho nas folhas. Ao voltar, descobriu que ninguém nunca achou a flor da samambaia, porque samambaia simplesmente não dá flor.',
        choices: [{ text: 'Linu grįžo prie laužų.', translation: 'O Linu voltou para as fogueiras.', next: 'final_rasa' }],
      },
      sokti: {
        emoji: '🤸',
        text: 'Linu įsibėgėjo ir peršoko per laužą, nors jo kojos trumpos. Emilija pasakė, kad jei per laužą šoktų du žmonės, susikibę už rankų, jie būtų laimingi visus metus. Ji ištiesė Linu ranką.',
        translation: 'O Linu tomou impulso e pulou a fogueira, apesar das perninhas curtas. A Emilija disse que, se duas pessoas pulassem a fogueira de mãos dadas, seriam felizes o ano inteiro. Ela estendeu a mão para o Linu.',
        choices: [{ text: 'Linu paėmė ją už rankos, ir jie peršoko kartu.', translation: 'O Linu pegou a mão dela, e os dois pularam juntos.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '✨',
        text: 'Jie peršoko per laužą, ir kibirkštys pakilo į dangų. Auštant visi nusiprausė rasa, kaip liepia tradicija. Linu pagalvojo, kad jei visos šventės būtų tokios, jis niekada neišvažiuotų iš Lietuvos.',
        translation: 'Eles pularam a fogueira, e as fagulhas subiram para o céu. Ao amanhecer, todos lavaram o rosto com orvalho, como manda a tradição. O Linu pensou que, se todas as festas fossem assim, ele nunca iria embora da Lituânia.',
        ending: { tone: 'bom', title: 'Um ano de sorte', message: 'Morros antigos, guirlandas no rio e um pulo na fogueira: o Linu viveu a noite mais curta do ano do jeito mais lituano possível.' },
      },
      final_rasa: {
        emoji: '💧',
        text: 'Kai Linu grįžo, laužai jau buvo užgesę, o dauguma žmonių išsiskirstę. Emilija juokėsi, kad jis vienintelis visoje Kernavėje tikrai ieškojo paparčio žiedo. Linu buvo pavargęs ir šlapias, bet bent jau nusiprausęs rasa.',
        translation: 'Quando o Linu voltou, as fogueiras já tinham se apagado, e a maioria das pessoas tinha ido embora. A Emilija riu, dizendo que ele foi o único em Kernavė inteira a procurar a flor da samambaia de verdade. O Linu estava cansado e molhado, mas pelo menos lavado de orvalho.',
        ending: { tone: 'neutro', title: 'A flor que não existe', message: 'O Linu não achou a flor (ninguém acha!) e perdeu a fogueira. Mas agora conhece a lenda melhor do que ninguém.' },
      },
    },
  },
  // ───────────────────────────── B2.2 ─────────────────────────────
  {
    id: 'lt-h28',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Pagarbiai, Linu',
    emoji: '📨',
    summary: 'Com um emprego novo em Panevėžys, o Linu precisa escrever à repartição de migração e descobre que «Labas, tudo bem?» não é o jeito certo de começar.',
    cultural_context:
      'Na correspondência formal lituana, trata-se o destinatário por «Jūs» com J maiúsculo, começa-se com «Laba diena» ou «Gerbiamasis pone / Gerbiamoji ponia» e termina-se com «Pagarbiai» (Atenciosamente). O condicional deixa os pedidos mais educados: «Būčiau dėkingas, jei galėtumėte…» (Eu ficaria grato se o senhor pudesse…). Panevėžys, no norte do país, é a quinta maior cidade da Lituânia.',
    start: 'start',
    glossary: [
      ['migracijos skyrius', 'setor de migração (repartição)'],
      ['leidimas gyventi', 'autorização de residência'],
      ['pateikti dokumentus', 'apresentar documentos'],
      ['Gerbiamoji ponia', 'Prezada senhora'],
      ['Pagarbiai', 'Atenciosamente'],
      ['Būčiau dėkingas, jei galėtumėte…', 'Eu ficaria grato se o(a) senhor(a) pudesse…'],
      ['maloniai prašome', 'pedimos gentilmente'],
      ['prašymas', 'requerimento, pedido'],
    ],
    nodes: {
      start: {
        emoji: '💼',
        text: 'Linu gavo darbą Panevėžyje ir turėjo pateikti dokumentus migracijos skyriui. Jis parašė laišką, kuris prasidėjo žodžiais «Labas, kaip sekasi?». Draugė Rasa jį perskaitė ir išsigando.',
        translation: 'O Linu conseguiu um emprego em Panevėžys e precisava apresentar documentos ao setor de migração. Ele escreveu uma carta que começava com as palavras «Oi, tudo bem?». A amiga Rasa leu e levou um susto.',
        choices: [
          { text: 'Linu paklausė Rasos, kas negerai.', translation: 'O Linu perguntou à Rasa o que havia de errado.', next: 'rasa' },
          { text: 'Linu vis tiek išsiuntė laišką.', translation: 'O Linu mandou a carta mesmo assim.', next: 'siuncia' },
        ],
      },
      siuncia: {
        emoji: '📭',
        text: 'Po dviejų dienų atėjo trumpas atsakymas: «Gerbiamasis Linu, prašome kreiptis nustatyta forma ir nurodyti prašymo tikslą.» Linu nesuprato, ar tai reiškia «taip», ar «ne». Rasa paaiškino, kad jo laiškas buvo per daug draugiškas.',
        translation: 'Dois dias depois, chegou uma resposta curta: «Prezado Linu, pedimos que se dirija a nós na forma estabelecida e indique o objetivo do requerimento.» O Linu não entendeu se aquilo queria dizer «sim» ou «não». A Rasa explicou que a carta dele tinha sido informal demais.',
        choices: [{ text: 'Linu paprašė Rasos padėti parašyti naują laišką.', translation: 'O Linu pediu à Rasa que o ajudasse a escrever uma carta nova.', next: 'rasa' }],
      },
      rasa: {
        emoji: '✍️',
        text: 'Rasa paaiškino, kad oficialiame laiške nerašoma «labas» ir kad į adresatą kreipiamasi «Jūs» iš didžiosios raidės. Laišką reikėtų pradėti žodžiais «Laba diena» arba «Gerbiamoji ponia», o baigti – «Pagarbiai». Ji padėjo Linu parašyti naują laišką.',
        translation: 'A Rasa explicou que numa carta oficial não se escreve «labas» (oi) e que o destinatário é tratado por «Jūs», com J maiúsculo. A carta deveria começar com «Laba diena» (Bom dia) ou «Prezada senhora» e terminar com «Atenciosamente». Ela ajudou o Linu a escrever uma carta nova.',
        choices: [
          { text: 'Linu perskaitė naują laišką.', translation: 'O Linu leu a carta nova.', next: 'laiskas' },
          {
            text: 'Linu pradėjo naują laišką žodžiu «Labas» ir baigė «Iki!».',
            translation: 'O Linu começou a carta nova com «Oi» e terminou com «Tchau!».',
            wrong: 'A Rasa acabou de explicar que «oficialiame laiške nerašoma „labas“»: numa carta oficial NÃO se escreve «labas». Começa-se com «Laba diena» ou «Gerbiamoji ponia» e termina-se com «Pagarbiai».',
          },
        ],
      },
      laiskas: {
        emoji: '📝',
        text: 'Naujasis laiškas skambėjo taip: «Laba diena, norėčiau užsiregistruoti vizitui dėl leidimo gyventi Lietuvoje. Būčiau dėkingas, jei galėtumėte nurodyti, kokius dokumentus turėčiau pateikti. Pagarbiai, Linu.»',
        translation: 'A carta nova dizia assim: «Bom dia, gostaria de agendar um atendimento referente à autorização de residência na Lituânia. Eu ficaria grato se a senhora pudesse indicar quais documentos devo apresentar. Atenciosamente, Linu.»',
        choices: [{ text: 'Linu išsiuntė laišką.', translation: 'O Linu mandou a carta.', next: 'atsakymas' }],
      },
      atsakymas: {
        emoji: '📬',
        text: 'Kitą dieną atėjo atsakymas, pasirašytas specialistės Kazlauskienės. Jame buvo parašyta: «Maloniai prašome atvykti pirmadienį 10 val. su pasu, darbo sutartimi ir nuotrauka.» Rasa pasakė, kad dabar svarbiausia – nepavėluoti.',
        translation: 'No dia seguinte chegou a resposta, assinada pela especialista Kazlauskienė. Nela estava escrito: «Pedimos gentilmente que compareça na segunda-feira às 10h, com passaporte, contrato de trabalho e foto.» A Rasa disse que agora o mais importante era não se atrasar.',
        choices: [
          { text: 'Pirmadienį Linu atvyko dešimt minučių anksčiau.', translation: 'Na segunda, o Linu chegou dez minutos adiantado.', next: 'vizitas' },
          {
            text: 'Linu nusprendė, kad nuotraukos nereikės.',
            translation: 'O Linu concluiu que a foto não seria necessária.',
            wrong: 'A resposta pedia para ir «su pasu, darbo sutartimi ir nuotrauka»: COM passaporte, contrato de trabalho E FOTO. Os três estão no instrumental depois de «su» (com).',
          },
        ],
      },
      vizitas: {
        emoji: '🏢',
        text: 'Specialistė pasisveikino: «Laba diena, prašom sėstis. Ar atsinešėte visus dokumentus?» Linu padavė pasą, sutartį ir nuotrauką. Tada ji paklausė, kur jis gyvens Panevėžyje.',
        translation: 'A especialista cumprimentou: «Bom dia, sente-se, por favor. O senhor trouxe todos os documentos?» O Linu entregou o passaporte, o contrato e a foto. Então ela perguntou onde ele ia morar em Panevėžys.',
        choices: [
          { text: 'Linu padavė buto nuomos sutartį.', translation: 'O Linu entregou o contrato de aluguel do apartamento.', next: 'adresas' },
          { text: 'Linu prisipažino, kad adreso dar neturi.', translation: 'O Linu confessou que ainda não tinha endereço.', next: 'adreso_nera' },
        ],
      },
      adresas: {
        emoji: '✅',
        text: 'Specialistė viską patikrino ir pasakė: «Jūsų prašymas priimtas. Sprendimą gausite elektroniniu paštu.» Ji palinkėjo Linu sėkmės naujame darbe.',
        translation: 'A especialista conferiu tudo e disse: «O seu requerimento foi aceito. O senhor vai receber a decisão por e-mail.» Ela desejou ao Linu sucesso no trabalho novo.',
        choices: [{ text: 'Linu padėkojo: «Labai ačiū, geros Jums dienos.»', translation: 'O Linu agradeceu: «Muito obrigado, tenha um bom dia.»', next: 'final_bom' }],
      },
      adreso_nera: {
        emoji: '🏠',
        text: 'Specialistė mandagiai paaiškino, kad be gyvenamosios vietos adreso prašymo priimti negalės. «Kai turėsite adresą, maloniai prašome užsiregistruoti iš naujo», – pasakė ji. Linu išėjo nusiminęs.',
        translation: 'A especialista explicou com educação que, sem o endereço de residência, não poderia aceitar o requerimento. «Quando o senhor tiver um endereço, pedimos gentilmente que agende de novo», disse ela. O Linu saiu desanimado.',
        choices: [{ text: 'Linu grįžo namo ieškoti buto.', translation: 'O Linu voltou para casa para procurar apartamento.', next: 'final_butas' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Išėjęs Linu paskambino Rasai ir pasakė, kad viskas pavyko. Rasa juokėsi: «Matai, kaip veikia žodis „Pagarbiai“?» Tą vakarą Linu net draugams rašė labai mandagias žinutes.',
        translation: 'Ao sair, o Linu ligou para a Rasa e disse que tinha dado tudo certo. A Rasa riu: «Viu como funciona a palavra „Atenciosamente“?» Naquela noite, o Linu escreveu mensagens superformais até para os amigos.',
        ending: { tone: 'bom', title: 'Requerimento aceito', message: 'Com «Laba diena», «Jūs» e «Pagarbiai», o Linu passou pela burocracia sem tropeços.' },
      },
      final_butas: {
        emoji: '🗝️',
        text: 'Visą savaitę Linu žiūrėjo butus Panevėžyje. Pagaliau jis rado mažą butą netoli centro ir vėl parašė laišką – šįkart iškart oficialiai. Dokumentai buvo priimti tik po mėnesio.',
        translation: 'A semana inteira, o Linu visitou apartamentos em Panevėžys. Finalmente achou um apartamentinho perto do centro e escreveu de novo, desta vez formal logo de cara. Os documentos só foram aceitos um mês depois.',
        ending: { tone: 'neutro', title: 'Um mês de atraso', message: 'A carta estava perfeita, mas faltou o endereço. Na burocracia, cada papel conta.' },
      },
    },
  },
  {
    id: 'lt-h29',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Gido pareigos',
    emoji: '🌲',
    summary: 'O Linu se candidata a uma vaga de guia de verão na trilha nas copas das árvores de Anykščiai: currículo, carta de apresentação e uma entrevista em tom formal.',
    cultural_context:
      'Anykščiai, no nordeste da Lituânia, é a terra do poema «Anykščių šilelis» (O pinhal de Anykščiai), escrito por Antanas Baranauskas em 1858–1859. Perto da cidade fica a pedra Puntukas, um dos maiores rochedos do país, com o relevo dos aviadores Darius e Girėnas, que morreram em 1933 ao tentar voar sem escalas de Nova York a Kaunas; segundo a lenda, foi o diabo que deixou a pedra cair quando ia esmagar a igreja da cidade. No parque regional há uma trilha suspensa entre as copas das árvores, com uma torre de observação sobre o vale do rio Šventoji.',
    start: 'start',
    glossary: [
      ['skelbimas', 'anúncio'],
      ['gyvenimo aprašymas', 'currículo'],
      ['motyvacinis laiškas', 'carta de apresentação'],
      ['pateikti kandidatūrą', 'apresentar candidatura'],
      ['pareigos', 'cargo, função'],
      ['pokalbis', 'entrevista, conversa'],
      ['Kaip Jūs pristatytumėte…?', 'Como o senhor apresentaria…?'],
      ['Apie sprendimą informuosime', 'Informaremos sobre a decisão'],
    ],
    nodes: {
      start: {
        emoji: '📰',
        text: 'Linu pamatė skelbimą: Anykščių regioninio parko lankytojų centras ieško vasaros gido medžių lajų takui. Reikėjo atsiųsti gyvenimo aprašymą ir motyvacinį laišką. Linu nusprendė pabandyti.',
        translation: 'O Linu viu um anúncio: o centro de visitantes do parque regional de Anykščiai procurava um guia de verão para a trilha nas copas das árvores. Era preciso mandar currículo e carta de apresentação. O Linu resolveu tentar.',
        choices: [
          { text: 'Linu pradėjo nuo gyvenimo aprašymo.', translation: 'O Linu começou pelo currículo.', next: 'cv' },
          { text: 'Linu pradėjo nuo motyvacinio laiško.', translation: 'O Linu começou pela carta de apresentação.', next: 'motyvacinis' },
        ],
      },
      cv: {
        emoji: '📄',
        text: 'Gyvenimo aprašyme Linu surašė savo išsilavinimą, darbo patirtį ir kalbas: portugalų, anglų ir lietuvių. Prie pomėgių jis parašė: «Plaukimas šaltame vandenyje». Kaimynė Irena patarė pridėti ir tai, kad jis nebijo aukščio.',
        translation: 'No currículo, o Linu listou a formação, a experiência profissional e as línguas: português, inglês e lituano. Nos interesses, escreveu: «Natação em água fria». A vizinha Irena aconselhou acrescentar também que ele não tem medo de altura.',
        choices: [{ text: 'Tada Linu ėmėsi motyvacinio laiško.', translation: 'Então o Linu passou para a carta de apresentação.', next: 'motyvacinis' }],
      },
      motyvacinis: {
        emoji: '✉️',
        text: 'Laiškas prasidėjo taip: «Gerbiamieji, norėčiau pateikti savo kandidatūrą į vasaros gido pareigas. Esu susipažinęs su Anykščių krašto istorija ir galėčiau vesti ekskursijas trimis kalbomis.» Irena perskaitė ir pasakė, kad laiškas geras, bet kai ko trūksta.',
        translation: 'A carta começava assim: «Prezados, gostaria de apresentar a minha candidatura ao cargo de guia de verão. Conheço a história da região de Anykščiai e poderia conduzir visitas em três línguas.» A Irena leu e disse que a carta estava boa, mas faltava uma coisa.',
        choices: [{ text: 'Linu paklausė, ko trūksta.', translation: 'O Linu perguntou o que faltava.', next: 'irena' }],
      },
      irena: {
        emoji: '💡',
        text: 'Irena paaiškino, kad laiško pabaigoje reikėtų padėkoti už skirtą laiką ir parašyti «Pagarbiai». Be to, derėtų paminėti, kodėl jis nori dirbti būtent Anykščiuose. Linu pridūrė sakinį apie Antano Baranausko poemą «Anykščių šilelis».',
        translation: 'A Irena explicou que, no fim da carta, seria bom agradecer pelo tempo dedicado e escrever «Atenciosamente». Além disso, conviria mencionar por que ele queria trabalhar justamente em Anykščiai. O Linu acrescentou uma frase sobre o poema «O pinhal de Anykščiai», de Antanas Baranauskas.',
        choices: [{ text: 'Linu išsiuntė laišką.', translation: 'O Linu mandou a carta.', next: 'kvietimas' }],
      },
      kvietimas: {
        emoji: '📩',
        text: 'Po savaitės Linu gavo atsakymą: «Gerbiamasis Linu, dėkojame už Jūsų susidomėjimą. Kviečiame Jus į pokalbį ketvirtadienį, 14 val., lankytojų centre.» Linu iškart atsakė ir patvirtino, kad atvyks.',
        translation: 'Uma semana depois, o Linu recebeu a resposta: «Prezado Linu, agradecemos o seu interesse. Convidamos o senhor para uma entrevista na quinta-feira, às 14h, no centro de visitantes.» O Linu respondeu na hora, confirmando que iria.',
        choices: [
          { text: 'Ketvirtadienį Linu nuvyko į pokalbį.', translation: 'Na quinta-feira, o Linu foi à entrevista.', next: 'pokalbis' },
          {
            text: 'Linu atvyko į pokalbį pirmadienį, 10 val. ryto.',
            translation: 'O Linu foi à entrevista na segunda-feira, às 10h da manhã.',
            wrong: 'O convite dizia «ketvirtadienį, 14 val.»: na QUINTA-FEIRA, às 14h. Numa situação formal, errar a data e a hora é o pior começo possível.',
          },
        ],
      },
      pokalbis: {
        emoji: '🧑‍💼',
        text: 'Direktorė Petrauskienė paklausė: «Kaip Jūs pristatytumėte lankytojams šį taką?» Linu papasakojo, kad takas vingiuoja tarp medžių viršūnių, o nuo apžvalgos bokšto matyti Šventosios upės slėnis. Direktorė linktelėjo ir paklausė, ką jis žino apie Puntuką.',
        translation: 'A diretora Petrauskienė perguntou: «Como o senhor apresentaria esta trilha aos visitantes?» O Linu contou que a trilha serpenteia entre as copas das árvores e que da torre de observação se vê o vale do rio Šventoji. A diretora acenou com a cabeça e perguntou o que ele sabia sobre a Puntukas.',
        choices: [
          { text: 'Linu papasakojo apie Puntuko akmenį.', translation: 'O Linu falou sobre a pedra Puntukas.', next: 'puntukas' },
          { text: 'Linu prisipažino, kad apie Puntuką nieko nežino.', translation: 'O Linu confessou que não sabia nada sobre a Puntukas.', next: 'nezino' },
          {
            text: 'Linu atsakė: «Sveika, na, takas labai kietas!»',
            translation: 'O Linu respondeu: «E aí, então, a trilha é muito massa!»',
            wrong: 'A diretora fala em registro formal («Kaip Jūs pristatytumėte…?», com o «Jūs» de cortesia). Numa entrevista, cumprimentos como «sveika» e gírias como «kietas» (massa, legal) soam desrespeitosos.',
          },
        ],
      },
      puntukas: {
        emoji: '🪨',
        text: 'Linu paaiškino, kad Puntukas – vienas didžiausių akmenų Lietuvoje, o jame iškaltas lakūnų Dariaus ir Girėno bareljefas. Pasak legendos, velnias nešė akmenį sugriauti Anykščių bažnyčios, bet užgiedojus gaidžiui jį numetė. Direktorė nusišypsojo: «Matau, kad pasiruošėte.»',
        translation: 'O Linu explicou que a Puntukas é uma das maiores pedras da Lituânia e que nela está esculpido o relevo dos aviadores Darius e Girėnas. Segundo a lenda, o diabo levava a pedra para destruir a igreja de Anykščiai, mas, quando o galo cantou, ele a deixou cair. A diretora sorriu: «Vejo que o senhor se preparou.»',
        choices: [{ text: 'Direktorė pasiūlė Linu pasirašyti sutartį.', translation: 'A diretora propôs ao Linu assinar o contrato.', next: 'final_bom' }],
      },
      nezino: {
        emoji: '😬',
        text: 'Direktorė mandagiai paaiškino, kad Puntukas – vienas žinomiausių lankytinų objektų Anykščiuose ir kad gidas apie jį turėtų žinoti. «Dėkojame už pokalbį. Apie sprendimą informuosime Jus elektroniniu paštu», – pasakė ji. Linu suprato, kad reikėjo geriau pasiruošti.',
        translation: 'A diretora explicou educadamente que a Puntukas é uma das atrações mais conhecidas de Anykščiai e que um guia deveria conhecê-la. «Agradecemos pela entrevista. Informaremos o senhor sobre a decisão por e-mail», disse ela. O Linu entendeu que devia ter se preparado melhor.',
        choices: [{ text: 'Linu grįžo namo laukti atsakymo.', translation: 'O Linu voltou para casa para esperar a resposta.', next: 'final_kitas' }],
      },
      final_bom: {
        emoji: '🌳',
        text: 'Direktorė pasakė: «Mums būtų malonu, jei galėtumėte pradėti birželio pirmąją.» Linu padėkojo už galimybę ir pasirašė sutartį. Išėjęs jis užlipo į lajų taką ir pirmą kartą pažvelgė į slėnį kaip būsimas gidas.',
        translation: 'A diretora disse: «Seria um prazer para nós se o senhor pudesse começar no dia 1º de junho.» O Linu agradeceu pela oportunidade e assinou o contrato. Ao sair, subiu na trilha das copas e olhou para o vale pela primeira vez como futuro guia.',
        ending: { tone: 'bom', title: 'Guia entre as copas', message: 'Currículo, carta formal e uma entrevista bem preparada: o Linu conseguiu o emprego de verão em Anykščiai.' },
      },
      final_kitas: {
        emoji: '📚',
        text: 'Po savaitės atėjo laiškas: «Deja, šį kartą pasirinkome kitą kandidatą. Linkime Jums sėkmės.» Linu nusiminė, bet nusprendė perskaityti viską apie Anykščių kraštą. Kitą vasarą jis bandys dar kartą.',
        translation: 'Uma semana depois chegou uma carta: «Infelizmente, desta vez escolhemos outro candidato. Desejamos-lhe sucesso.» O Linu ficou desanimado, mas resolveu ler tudo sobre a região de Anykščiai. No próximo verão, ele vai tentar de novo.',
        ending: { tone: 'neutro', title: 'Fica para o ano que vem', message: 'A carta estava ótima, mas faltou estudar a região. Com a Puntukas na ponta da língua, a próxima entrevista vai ser outra história.' },
      },
    },
  },
  {
    id: 'lt-h30',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Skylė, kurios vakar nebuvo',
    emoji: '🕳️',
    summary: 'Perto de Biržai, um buraco aparece de um dia para o outro no quintal do fazendeiro Algis, e o Linu precisa comunicar o caso à prefeitura em lituano formal.',
    cultural_context:
      'A região de Biržai, no norte da Lituânia, é conhecida pelo carste de gipsita: a água subterrânea dissolve a rocha, e o chão às vezes afunda de repente, formando dolinas (smegduobės), muitas das quais viram laguinhos. Para proteger essa paisagem existe o Parque Regional de Biržai. A cidade também é famosa pela tradição cervejeira e pelo lago Širvėna, represado no século XVI.',
    start: 'start',
    glossary: [
      ['smegduobė', 'dolina, buraco de afundamento'],
      ['savivaldybė', 'prefeitura, administração municipal'],
      ['pranešimas', 'comunicado, notificação'],
      ['kreipimasis', 'solicitação, pedido formal'],
      ['sklypas', 'terreno, lote'],
      ['Prašytume…', 'Pediríamos… (pedido formal no condicional)'],
      ['aptverti', 'cercar, isolar'],
      ['išvada', 'parecer, conclusão'],
    ],
    nodes: {
      start: {
        emoji: '😱',
        text: 'Vieną rytą Linu išėjo į sodą ir vos neįkrito į duobę, kurios vakar dar nebuvo. Šeimininkas Algis paaiškino, kad Biržų krašte tokios smegduobės atsiranda, kai požeminis vanduo ištirpdo gipsą. Jis pasakė, kad apie tai reikia oficialiai pranešti savivaldybei.',
        translation: 'Uma manhã, o Linu saiu para o quintal e quase caiu num buraco que na véspera não estava ali. O dono da casa, Algis, explicou que na região de Biržai esses buracos aparecem quando a água subterrânea dissolve a gipsita. Ele disse que era preciso comunicar o caso oficialmente à prefeitura.',
        choices: [
          { text: 'Linu pasiūlė iškart paskambinti į savivaldybę.', translation: 'O Linu sugeriu ligar na hora para a prefeitura.', next: 'skambutis' },
          { text: 'Algis paprašė Linu parašyti pranešimą elektroniniu paštu.', translation: 'O Algis pediu ao Linu que escrevesse um comunicado por e-mail.', next: 'pranesimas' },
        ],
      },
      skambutis: {
        emoji: '📞',
        text: 'Linu paskambino ir sušuko: «Sveiki, čia Linu! Mūsų sode – didžiulė skylė!» Specialistas mandagiai paprašė pateikti rašytinį pranešimą su adresu ir nuotraukomis. «Taip galėsime užregistruoti Jūsų kreipimąsi», – paaiškino jis.',
        translation: 'O Linu ligou e gritou: «Oi, aqui é o Linu! Tem um buraco enorme no nosso quintal!» O funcionário pediu com educação que ele mandasse um comunicado por escrito, com endereço e fotos. «Assim poderemos registrar a sua solicitação», explicou.',
        choices: [{ text: 'Linu sėdo rašyti pranešimo.', translation: 'O Linu sentou para escrever o comunicado.', next: 'pranesimas' }],
      },
      pranesimas: {
        emoji: '⌨️',
        text: 'Linu parašė: «Gerbiamieji, informuojame, kad šiandien ryte mūsų sklype atsirado smegduobė. Jos skersmuo – apie du metrai. Prašytume atsiųsti specialistą, kuris galėtų ją įvertinti.»',
        translation: 'O Linu escreveu: «Prezados, informamos que hoje de manhã surgiu uma dolina no nosso terreno. O diâmetro dela é de uns dois metros. Pediríamos que enviassem um especialista que pudesse avaliá-la.»',
        choices: [{ text: 'Linu parodė laišką Algiui.', translation: 'O Linu mostrou a carta ao Algis.', next: 'algis' }],
      },
      algis: {
        emoji: '🧐',
        text: 'Algis perskaitė ir pasakė, kad laiškas beveik tobulas. Tačiau jame trūksta sklypo adreso, nuotraukų ir kontaktinio telefono numerio. «Be adreso jie net nežinos, kur važiuoti», – nusijuokė jis.',
        translation: 'O Algis leu e disse que a carta estava quase perfeita. Mas faltavam o endereço do terreno, as fotos e um telefone de contato. «Sem o endereço, eles nem vão saber para onde ir», riu ele.',
        choices: [
          { text: 'Linu pridėjo adresą, telefoną bei nuotraukas ir išsiuntė laišką.', translation: 'O Linu acrescentou o endereço, o telefone e as fotos e mandou a carta.', next: 'atsakymas' },
          {
            text: 'Linu išsiuntė laišką nieko nepridėjęs, nes Algis sakė, kad jis tobulas.',
            translation: 'O Linu mandou a carta sem acrescentar nada, porque o Algis disse que ela estava perfeita.',
            wrong: 'O Algis disse «beveik tobulas», QUASE perfeita, e logo explicou o que faltava («trūksta»): o endereço, as fotos e o telefone. Sem o endereço, ninguém sabe aonde ir.',
          },
        ],
      },
      atsakymas: {
        emoji: '📨',
        text: 'Po valandos atėjo atsakymas: «Dėkojame už pranešimą, Jūsų kreipimasis užregistruotas. Rytoj 9 val. atvyks geologas. Iki jo atvykimo prašome prie smegduobės neprisiartinti ir ją aptverti.»',
        translation: 'Uma hora depois chegou a resposta: «Agradecemos o comunicado; a sua solicitação foi registrada. Amanhã, às 9h, um geólogo irá ao local. Até a chegada dele, pedimos que não se aproximem da dolina e que a isolem.»',
        choices: [
          { text: 'Linu ir Algis aptvėrė duobę virve.', translation: 'O Linu e o Algis isolaram o buraco com uma corda.', next: 'geologe' },
          { text: 'Linu norėjo pažiūrėti į duobę iš arčiau.', translation: 'O Linu quis olhar o buraco mais de perto.', next: 'arciau' },
          {
            text: 'Linu nusprendė, kad geologas atvyks jau šį vakarą.',
            translation: 'O Linu concluiu que o geólogo viria já nesta noite.',
            wrong: 'A resposta diz «rytoj 9 val.»: AMANHÃ, às 9h. «Rytoj» é amanhã; «šįvakar» seria esta noite.',
          },
        ],
      },
      arciau: {
        emoji: '⚠️',
        text: 'Linu priėjo prie pat krašto, ir žemė po juo truputį įgriuvo. Algis spėjo sugriebti jį už sparno. «Juk aiškiai prašė neprisiartinti!» – supyko jis.',
        translation: 'O Linu chegou bem na beirada, e a terra cedeu um pouco debaixo dele. O Algis conseguiu agarrá-lo pela asa a tempo. «Pediram claramente para não chegar perto!», se irritou ele.',
        choices: [{ text: 'Išsigandę jie aptvėrė duobę virve.', translation: 'Assustados, eles isolaram o buraco com uma corda.', next: 'geologe' }],
      },
      geologe: {
        emoji: '🧪',
        text: 'Kitą rytą atvyko geologė Jankauskaitė. Ji paaiškino, kad Biržų apylinkėse kasmet atsiranda naujų smegduobių, o kai kurios būna labai gilios. Ji mandagiai paprašė leidimo paimti grunto mėginių.',
        translation: 'Na manhã seguinte, chegou a geóloga Jankauskaitė. Ela explicou que nos arredores de Biržai surgem dolinas novas todo ano, e algumas são bem fundas. Ela pediu educadamente permissão para colher amostras do solo.',
        choices: [{ text: 'Algis leido ir paklausė, ar namui gresia pavojus.', translation: 'O Algis deixou e perguntou se a casa corria perigo.', next: 'isvada' }],
      },
      isvada: {
        emoji: '🏡',
        text: 'Geologė atsakė: «Jūsų namui pavojaus nematau, tačiau rekomenduočiau smegduobės neužpilti bent mėnesį.» Ji pasakė, kad oficialią išvadą atsiųs raštu, ir paliko vizitinę kortelę. Algis padėkojo jai už greitą atvykimą.',
        translation: 'A geóloga respondeu: «Não vejo perigo para a sua casa, mas eu recomendaria não aterrar a dolina durante pelo menos um mês.» Ela disse que mandaria o parecer oficial por escrito e deixou um cartão de visita. O Algis agradeceu pela vinda rápida.',
        choices: [
          { text: 'Linu pasiūlė laukti, kaip patarė geologė.', translation: 'O Linu sugeriu esperar, como a geóloga aconselhou.', next: 'final_bom' },
          { text: 'Algis nusprendė duobę užpilti iš karto.', translation: 'O Algis resolveu aterrar o buraco de uma vez.', next: 'final_uzpilta' },
        ],
      },
      final_bom: {
        emoji: '🏊',
        text: 'Per mėnesį duobėje susikaupė vanduo, ir ji virto mažu tvenkiniu. Linu jame plaukiojo kiekvieną rytą. Algis juokavo, kad tai vienintelis pingvinų baseinas visame Biržų rajone.',
        translation: 'Em um mês, a água se acumulou no buraco, e ele virou um laguinho. O Linu nadava ali toda manhã. O Algis brincava que aquela era a única piscina de pinguim de todo o distrito de Biržai.',
        ending: { tone: 'bom', title: 'A piscina do pinguim', message: 'Comunicado formal, resposta rápida e um conselho seguido à risca: o buraco virou um laguinho, e o Linu ganhou um lugar para nadar.' },
      },
      final_uzpilta: {
        emoji: '🚜',
        text: 'Algis nepaklausė patarimo ir kitą dieną užpylė duobę žemėmis. Po savaitės žemė vėl įsmego, ir teko viską daryti iš naujo. Algis atsiduso, kad specialistų patarimų reikėjo klausyti.',
        translation: 'O Algis não seguiu o conselho e, no dia seguinte, aterrou o buraco. Uma semana depois, o chão afundou de novo, e foi preciso fazer tudo outra vez. O Algis suspirou, dizendo que devia ter ouvido os especialistas.',
        ending: { tone: 'neutro', title: 'O buraco voltou', message: 'A carta formal funcionou, mas o conselho da geóloga foi ignorado, e o carste de Biržai não perdoa pressa.' },
      },
    },
  },
  // ───────────────────────── B2.3 ─────────────────────────
  {
    id: 'lt-h31',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Meduolinė širdelė su svetimu vardu',
    emoji: '🥨',
    summary: 'Na Feira de Kaziukas, em Vilnius, uma vendedora idosa trata o Linu com diminutivos carinhosos — e ele precisa entender que «arbatėlė» não quer dizer pouco chá.',
    cultural_context:
      'A Feira de Kaziukas (Kaziuko mugė) acontece em Vilnius no começo de março, em torno do dia de São Casimiro (4 de março), padroeiro da Lituânia; «Kaziukas» é o diminutivo carinhoso de «Kazimieras». Os símbolos da feira são as «verbos» de Vilnius, buquês de flores e ervas secas usados no Domingo de Ramos, e as rosquinhas «riestainiai», vendidas em cordões.',
    start: 'start',
    glossary: [
      ['Kaziuko mugė', 'a Feira de Kaziukas (São Casimiro), em março'],
      ['verba', '«palmeira» de Vilnius: buquê de flores e ervas secas'],
      ['riestainis', 'rosquinha (parecida com um bagel)'],
      ['meduolinė širdelė', 'coraçãozinho de pão de mel'],
      ['arbatėlė', 'chazinho (diminutivo carinhoso de «arbata»)'],
      ['vaikeli / paukšteli', 'meu filho / passarinho (vocativo carinhoso)'],
      ['aukso rankos', 'mãos de ouro (quem faz tudo bem)'],
    ],
    nodes: {
      start: {
        emoji: '🏙️',
        text: 'Kovo pradžioje Vilniaus senamiestis virsta viena didele muge: prasideda Kaziuko mugė. Linu vaikšto tarp palapinių Pilies gatvėje, o pardavėjai šaukia: «Riestainiukai, šilti riestainiukai!» Prie vienos palapinės sėdi smulki senutė su languota skarele ir pardavinėja verbas. «Ateik, vaikeli, pažiūrėk», – kviečia ji, mostelėdama ranka.',
        translation:
          'No começo de março, a Cidade Velha de Vilnius vira uma única grande feira: começa a Feira de Kaziukas. O Linu passeia entre as barracas da rua Pilies, e os vendedores gritam: «Rosquinhas, rosquinhas quentinhas!» Numa das barracas está sentada uma velhinha miúda, de lenço xadrez, vendendo «verbos». «Vem, meu filho, vem ver», chama ela, acenando com a mão.',
        choices: [
          { text: 'Prieiti prie senutės palapinės.', translation: 'Ir até a barraca da velhinha.', next: 'verbos' },
          { text: 'Pirma nusipirkti riestainių virtinę.', translation: 'Primeiro comprar um cordão de rosquinhas.', next: 'riestainiai' },
        ],
      },
      riestainiai: {
        emoji: '🥯',
        text: 'Linu nusiperka riestainių virtinę ir užsikabina ją ant kaklo, kaip daro vaikai aplink. Pardavėjas, jaunas vyrukas, juokiasi: «Na, dabar tu tikras vilnietis!» Jis pasakoja, kad mugė vyksta per šventą Kazimierą, Lietuvos globėją, kurio diena – kovo ketvirtoji. «Oficialiai jis Kazimieras, o liaudyje – tiesiog Kaziukas», – mirkteli vyrukas.',
        translation:
          'O Linu compra um cordão de rosquinhas e pendura no pescoço, como fazem as crianças em volta. O vendedor, um rapaz jovem, ri: «Pronto, agora você é um vilniense de verdade!» Ele conta que a feira acontece pelo dia de São Casimiro, padroeiro da Lituânia, que é 4 de março. «Oficialmente ele é Kazimieras, mas para o povo é só Kaziukas», diz o rapaz, piscando.',
        choices: [
          { text: 'Grįžti prie senutės su verbomis.', translation: 'Voltar à velhinha das «verbos».', next: 'verbos' },
          {
            text: 'Paklausti, ar Kaziukas buvo labai mažo ūgio šventasis.',
            translation: 'Perguntar se Kaziukas foi um santo muito baixinho.',
            wrong: 'O sufixo -ukas em «Kaziukas» não fala de tamanho: é um diminutivo de carinho, como «Zezinho» para José. O rapaz explicou que é só o jeito popular e afetuoso de chamar São Casimiro.',
          },
        ],
      },
      verbos: {
        emoji: '💐',
        text: 'Senutė rodo spalvingas verbas, surištas iš džiovintų gėlių ir žolelių. «Čia Vilniaus verbos, – aiškina ji. – Jas rišu nuo rudens, kiekvieną žiedelį pati susirinkau pievoje.» Linu klausia, kiek kainuoja mažoji verba, o senutė nusišypso: «Tau, paukšteli, pigiau – tik penki eurai.» Ji priduria, kad verbą reikia parsinešti namo ir pasilaikyti iki Verbų sekmadienio.',
        translation:
          'A velhinha mostra «verbos» coloridas, amarradas com flores e ervinhas secas. «Estas são as «verbos» de Vilnius», explica ela. «Venho amarrando desde o outono, cada florzinha eu mesma colhi no campo.» O Linu pergunta quanto custa a «verba» pequena, e a velhinha sorri: «Para você, passarinho, mais barato: só cinco euros.» Ela acrescenta que é preciso levar a «verba» para casa e guardar até o Domingo de Ramos.',
        choices: [{ text: 'Nusipirkti mažąją verbą.', translation: 'Comprar a «verba» pequena.', next: 'arbata' }],
      },
      arbata: {
        emoji: '🫖',
        text: 'Senutė įvynioja verbą į laikraštį ir staiga paklausia: «O gal išgersi arbatėlės? Turiu termosą, liepžiedžių arbatėlė dar karšta.» Ji įpila į puodelį ir paduoda jį Linu kartu su meduoline širdele, ant kurios baltu glajumi parašyta «Aldona». «Čia mano vardas, – juokiasi ji. – Širdelių su tavo vardu neturiu, tai imk mano.»',
        translation:
          'A velhinha embrulha a «verba» em jornal e de repente pergunta: «E que tal um chazinho? Tenho uma garrafa térmica, o chazinho de flor de tília ainda está quente.» Ela serve numa caneca e entrega ao Linu junto com um coraçãozinho de pão de mel em que está escrito «Aldona» com glacê branco. «Esse é o meu nome», ri ela. «Coraçãozinho com o seu nome eu não tenho, então leva o meu.»',
        choices: [
          { text: 'Padėkoti ir pasisiūlyti padėti jai pardavinėti verbas.', translation: 'Agradecer e se oferecer para ajudá-la a vender as «verbos».', next: 'padeda' },
          { text: 'Padėkoti, pasiimti širdelę ir eiti toliau po mugę.', translation: 'Agradecer, pegar o coraçãozinho e seguir pela feira.', next: 'final_neutro' },
          {
            text: 'Paprašyti didelio puodelio, nes «arbatėlė» reiškia labai mažai arbatos.',
            translation: 'Pedir uma caneca grande, porque «arbatėlė» quer dizer pouquíssimo chá.',
            wrong: 'O diminutivo «arbatėlė» (de «arbata», chá) aqui não fala de quantidade: é carinho, o jeito de avó oferecer «um chazinho». A dona Aldona já ia encher a caneca inteira.',
          },
        ],
      },
      padeda: {
        emoji: '🛍️',
        text: 'Visą popietę Linu stovi prie palapinės ir šaukia: «Verbos, gražiausios Vilniaus verbos!» Praeiviai sustoja, nes niekada nematė pingvino, pardavinėjančio verbas. Iki vakaro ant stalo lieka tik viena mažytė verbelė. «Na, tavo tai tikrai aukso rankos», – sako Aldona ir jį apkabina.',
        translation:
          'A tarde inteira o Linu fica na barraca gritando: «Verbos, as mais lindas «verbos» de Vilnius!» Os passantes param, porque nunca tinham visto um pinguim vendendo «verbos». Até a noite, sobra na mesa só uma «verbinha» minúscula. «Olha, você tem mesmo mãos de ouro», diz a Aldona, e lhe dá um abraço.',
        choices: [{ text: 'Pažadėti atvažiuoti ir kitais metais.', translation: 'Prometer voltar também no ano que vem.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Aldona įdeda paskutinę verbelę Linu į rankas ir nieko už ją neima. «Kitais metais lauksiu tavęs toje pačioje vietoje», – sako ji. Linu grįžta namo su riestainiais ant kaklo, verbele rankoje ir širdele kišenėje. Namie jis pastato verbelę į vazą ir nusprendžia, kad kitais metais pats išmoks jas rišti.',
        translation:
          'A Aldona põe a última «verbinha» nas mãos do Linu e não cobra nada. «No ano que vem vou te esperar no mesmo lugar», diz ela. O Linu volta para casa com rosquinhas no pescoço, a «verbinha» na mão e o coraçãozinho no bolso. Em casa, põe a «verbinha» num vaso e decide que no ano que vem vai aprender a amarrá-las ele mesmo.',
        ending: { tone: 'bom', title: 'Mãos de ouro', message: 'Você entendeu que os diminutivos da dona Aldona eram carinho — e ganhou uma amiga na Feira de Kaziukas.' },
      },
      final_neutro: {
        emoji: '🍯',
        text: 'Linu padėkoja, pasiima širdelę ir nueina toliau tarp palapinių. Mugėje daug įdomių dalykų: mediniai šaukštai, pinti krepšeliai ir moliniai švilpukai. Vakare jis suvalgo meduolinę širdelę ir pagalvoja, kad reikėjo ilgiau pasėdėti prie Aldonos. Kitais metais jis būtinai ją susiras.',
        translation:
          'O Linu agradece, pega o coraçãozinho e segue entre as barracas. Na feira há muita coisa interessante: colheres de pau, cestinhas trançadas e apitos de barro. À noite ele come o coraçãozinho de pão de mel e pensa que devia ter ficado mais tempo com a Aldona. No ano que vem, sem falta, vai procurá-la.',
        ending: { tone: 'neutro', title: 'Um coração de mel', message: 'Você aproveitou a feira, mas saiu cedo demais de perto de quem estava te tratando como neto.' },
      },
    },
  },
  {
    id: 'lt-h32',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Visiškos šakės ant Palangos tilto',
    emoji: '🌅',
    summary: 'No píer de Palanga, dois adolescentes de Kaunas falam com o Linu cheios de gíria — e, quando cai um temporal, ele precisa entender que «šakės» não é ferramenta.',
    cultural_context:
      'Palanga é a praia de veraneio mais famosa da Lituânia, e sua longa ponte-píer de madeira, que avança quase meio quilômetro mar adentro, é o ponto clássico para ver o sol se pôr no Báltico. Na gíria dos jovens lituanos, «šakės» (literalmente, «forcado») quer dizer «desastre», e «kietai» (de «kietas», duro) quer dizer «muito legal».',
    start: 'start',
    glossary: [
      ['nufotkinti', 'tirar uma foto (gíria de «nufotografuoti»)'],
      ['kietai!', 'muito legal! (gíria)'],
      ['faina', 'bonito, bacana (gíria)'],
      ['šakės', 'forcado; na gíria: desastre, que furada'],
      ['profas', 'profissional, fera (gíria)'],
      ['lyja kaip iš kibiro', 'chove como de um balde (chove a cântaros)'],
      ['kaip ant delno', 'como na palma da mão (bem à vista)'],
    ],
    nodes: {
      start: {
        emoji: '🌊',
        text: 'Rugpjūčio vakarą Palangoje visi eina ta pačia kryptimi – į tiltą, žiūrėti saulėlydžio. Linu irgi žingsniuoja Basanavičiaus gatve, pro kavines ir ilgas eiles prie ledainių. Tilto gale prie turėklų stovi du paaugliai, Gabija ir Rokas, ir bando nusifotografuoti su saule. «Ei, gal gali mus nufotkinti?» – paprašo Gabija ir paduoda Linu telefoną.',
        translation:
          'Numa noite de agosto em Palanga, todo mundo vai na mesma direção: para a ponte-píer, ver o pôr do sol. O Linu também segue pela rua Basanavičius, passando por cafés e filas compridas nas sorveterias. Na ponta do píer, junto ao parapeito, dois adolescentes, a Gabija e o Rokas, tentam tirar uma selfie com o sol. «Ei, dá para tirar uma foto da gente?», pede a Gabija, entregando o celular ao Linu.',
        choices: [
          { text: 'Paimti telefoną ir juos nufotografuoti.', translation: 'Pegar o celular e fotografá-los.', next: 'foto' },
          {
            text: 'Parodyti jiems savo paties nuotraukas.',
            translation: 'Mostrar a eles as próprias fotos.',
            wrong: '«Nufotkinti» é gíria de «nufotografuoti», fotografar. A Gabija pediu que você tirasse uma foto dela e do Rokas — por isso te deu o celular.',
          },
        ],
      },
      foto: {
        emoji: '📸',
        text: 'Linu padaro kelias nuotraukas, o Rokas jas peržiūri ir sušunka: «Kietai! Tu tikras profas.» Gabija pritaria: «Faina gavosi, saulė kaip tik tarp mūsų galvų.» Jie pasakoja, kad yra iš Kauno ir atvažiavo prie jūros visai savaitei. «Palanga vasarą – tai visa Lietuva viename kurorte», – juokiasi Rokas.',
        translation:
          'O Linu tira algumas fotos, e o Rokas olha e exclama: «Muito massa! Você é fera.» A Gabija concorda: «Ficou lindo, o sol bem no meio das nossas cabeças.» Eles contam que são de Kaunas e vieram para o mar por uma semana inteira. «Palanga no verão é a Lituânia inteira numa praia só», ri o Rokas.',
        choices: [
          { text: 'Paklausti, ką reiškia «kietai» ir «faina».', translation: 'Perguntar o que querem dizer «kietai» e «faina».', next: 'zodynas' },
          { text: 'Pasiūlyti kartu pažiūrėti saulėlydžio.', translation: 'Propor verem o pôr do sol juntos.', next: 'debesys' },
        ],
      },
      zodynas: {
        emoji: '📖',
        text: '«Kietai – tai kaip labai gerai, super», – aiškina Gabija. Rokas priduria, kad «faina» reiškia gražu arba smagu, o «profas» – profesionalas. «O kai viskas blogai, sakome „šakės“», – sako Gabija. Linu nesupranta, kaip šakės, kuriomis kaime kraunamas šienas, gali būti kažkas blogo.',
        translation:
          '«Kietai é tipo muito bom, demais», explica a Gabija. O Rokas acrescenta que «faina» quer dizer bonito ou divertido, e «profas», profissional. «E quando tudo dá errado, a gente diz „šakės“», diz a Gabija. O Linu não entende como um forcado, com que se junta feno no campo, pode ser uma coisa ruim.',
        choices: [{ text: 'Atsisukti į jūrą ir laukti saulėlydžio.', translation: 'Virar para o mar e esperar o pôr do sol.', next: 'debesys' }],
      },
      debesys: {
        emoji: '⛈️',
        text: 'Visi trys atsisuka į jūrą, bet staiga nuo horizonto atslenka tamsus debesis ir uždengia saulę. Po minutės ima lyti kaip iš kibiro, ir žmonės bėga nuo tilto į krantą. «Na, visiškos šakės!» – sušunka Rokas, užsidengdamas galvą kuprine. Gabija juokiasi, nors jos plaukai jau kiaurai šlapi.',
        translation:
          'Os três se viram para o mar, mas de repente uma nuvem escura chega do horizonte e cobre o sol. Um minuto depois começa a chover a cântaros, e as pessoas correm do píer para a praia. «Pronto, desastre total!», grita o Rokas, cobrindo a cabeça com a mochila. A Gabija ri, embora o cabelo já esteja encharcado.',
        choices: [
          { text: 'Pasiūlyti pasislėpti nuo lietaus po kavinės skėčiu.', translation: 'Propor se abrigar da chuva debaixo do guarda-sol de um café.', next: 'kavine' },
          { text: 'Pasiūlyti bėgti į Birutės kalną, nes nuo ten viskas matyti kaip ant delno.', translation: 'Propor correr até o morro de Birutė, porque de lá se vê tudo como na palma da mão.', next: 'kalnas' },
          {
            text: 'Pasiūlyti nueiti į kaimą ir nupirkti Rokui naujas šakes.',
            translation: 'Propor ir a um vilarejo comprar um forcado novo para o Rokas.',
            wrong: 'Na gíria, «šakės» (forcado) quer dizer «desastre, que furada». O Rokas não falou de ferramenta nenhuma: ele reclamou da chuva que estragou o pôr do sol.',
          },
        ],
      },
      kavine: {
        emoji: '☕',
        text: 'Jie trise sulenda po kavinės skėčiu ir užsisako karšto šokolado. Rokas tikina, kad Palangoje lietus niekada neužsibūna ilgai: «Pamatysi, po dešimties minučių vėl bus saulė.» Ir iš tiesų debesis nuslenka į šiaurę, o virš jūros vėl pasirodo raudonas saulės kraštelis. «Bėgam atgal!» – sušunka Gabija.',
        translation:
          'Os três se enfiam debaixo do guarda-sol de um café e pedem chocolate quente. O Rokas garante que em Palanga a chuva nunca demora: «Você vai ver, em dez minutos volta o sol.» E de fato a nuvem vai embora para o norte, e sobre o mar reaparece a pontinha vermelha do sol. «Bora voltar!», grita a Gabija.',
        choices: [{ text: 'Bėgti atgal į tiltą.', translation: 'Correr de volta para o píer.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🌇',
        text: 'Jie pasiekia tilto galą kaip tik tą akimirką, kai saulė paliečia vandenį. Keli žmonės ant tilto ima ploti, o Linu ploja garsiausiai. Gabija dar kartą paduoda jam telefoną: «Nufotkink mus, profe, tik dabar jau su savimi.» Nuotraukoje trys šlapi draugai šypsosi prieš raudoną jūrą.',
        translation:
          'Eles chegam à ponta do píer bem no instante em que o sol toca a água. Algumas pessoas no píer começam a aplaudir, e o Linu aplaude mais alto que todos. A Gabija lhe entrega o celular mais uma vez: «Tira uma foto da gente, fera, só que agora com você junto.» Na foto, três amigos encharcados sorriem diante do mar vermelho.',
        ending: { tone: 'bom', title: 'Pôr do sol salvo', message: 'Você entendeu a gíria da Gabija e do Rokas — do «kietai» às «šakės» — e ganhou dois amigos e a foto mais bonita do verão.' },
      },
      kalnas: {
        emoji: '⛰️',
        text: 'Jie bėga į Birutės kalną, nes nuo jo viskas matyti kaip ant delno. Bet parko takai permirkę, ir pusiaukelėje Rokas paslysta į balą. Kol jie užlipa į viršų, lietus jau liaujasi, tačiau saulė jau yra nusileidusi už jūros. «Na, ką padarysi», – atsidūsta Gabija, gręždama šlapius plaukus.',
        translation:
          'Eles correm para o morro de Birutė, porque de lá se vê tudo como na palma da mão. Mas as trilhas do parque estão encharcadas, e no meio do caminho o Rokas escorrega numa poça. Quando chegam lá em cima, a chuva já está parando, mas o sol já se pôs atrás do mar. «Fazer o quê», suspira a Gabija, torcendo o cabelo molhado.',
        ending: { tone: 'neutro', title: 'Chuva no morro', message: 'O passeio foi divertido, mas o pôr do sol ficou para outro dia — às vezes é melhor esperar a chuva passar.' },
      },
    },
  },
  {
    id: 'lt-h33',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Pirtis ne kiškis – į mišką nepabėgs',
    emoji: '🧖',
    summary: 'Num sítio da Aukštaitija, entre lagos e florestas, o Linu passa um sábado de sauna com o anfitrião Vytautas e um vizinho contador de lorotas — um fim de semana inteiro de expressões idiomáticas.',
    cultural_context:
      'A «pirtis», a sauna tradicional lituana, é quase um ritual no campo: aquece-se com lenha, joga-se água nas pedras quentes e bate-se de leve no corpo com uma «vanta», um feixe de galhos de bétula, antes de pular no lago. O Parque Nacional de Aukštaitija, criado em 1974, foi o primeiro parque nacional da Lituânia e é famoso pela quantidade de lagos.',
    start: 'start',
    glossary: [
      ['ne kiškis – į mišką nepabėgs', 'não é lebre, não foge para o mato (calma, não tem pressa)'],
      ['abi rankos kairės', 'as duas mãos esquerdas (ser desajeitado)'],
      ['vanta', 'feixe de galhos de bétula usado na sauna'],
      ['pūsti miglą į akis', 'soprar névoa nos olhos (enganar, contar lorota)'],
      ['šlapias kaip pelė', 'molhado como um rato (encharcado)'],
      ['laikyti liežuvį už dantų', 'segurar a língua atrás dos dentes (guardar segredo)'],
      ['iš adatos vežimą priskaldyti', 'rachar uma carroça de lenha de uma agulha (fazer tempestade em copo d’água)'],
    ],
    nodes: {
      start: {
        emoji: '🌲',
        text: 'Linu atvažiavo savaitgaliui į sodybą Aukštaitijoje, tarp miškų ir ežerų. Šeimininkas Vytautas, stambus žilas vyras, jau nuo ryto kūrena pirtį prie pat ežero. Linu nekantrauja ir kas penkias minutes klausia, ar pirtis jau paruošta. Vytautas tik nusijuokia: «Ramiau, ramiau. Pirtis ne kiškis – į mišką nepabėgs.»',
        translation:
          'O Linu veio passar o fim de semana num sítio da Aukštaitija, entre florestas e lagos. O dono, Vytautas, um homem grandalhão de cabelo branco, está desde cedo acendendo a sauna à beira do lago. O Linu está impaciente e a cada cinco minutos pergunta se a sauna já está pronta. O Vytautas só ri: «Calma, calma. A sauna não é lebre, não vai fugir para o mato.»',
        choices: [
          { text: 'Palaukti ir padėti Vytautui prinešti malkų.', translation: 'Esperar e ajudar o Vytautas a trazer lenha.', next: 'malkos' },
          {
            text: 'Išsigąsti ir nueiti pažiūrėti, ar miške nėra kiškio.',
            translation: 'Assustar-se e ir ver se há uma lebre na floresta.',
            wrong: '«Ne kiškis – į mišką nepabėgs» (não é lebre, não foge para o mato) quer dizer «calma, não tem pressa». O Vytautas só pediu paciência: não tem lebre nenhuma na história.',
          },
        ],
      },
      malkos: {
        emoji: '🪵',
        text: 'Linu neša glėbį beržinių malkų, bet pusiaukelėje jos visos išbyra ant tako. «Oi, tavo abi rankos kairės», – juokiasi Vytautas, bet padeda jas surinkti. Paskui jis parodo, kaip rišamos vantos: beržo šakelės surišamos į kuokštą, kad pirtyje gerai kvepėtų. «Vantą reikia pamerkti į karštą vandenį, tada ji minkšta kaip šilkas», – aiškina jis.',
        translation:
          'O Linu carrega uma braçada de lenha de bétula, mas no meio do caminho ela toda se espalha pela trilha. «Ai, você tem duas mãos esquerdas», ri o Vytautas, mas ajuda a recolher. Depois ele mostra como se amarram as «vantas»: os galhinhos de bétula são amarrados num feixe, para a sauna ficar bem cheirosa. «A vanta tem que ficar de molho em água quente, aí fica macia como seda», explica.',
        choices: [{ text: 'Eiti į pirtį.', translation: 'Entrar na sauna.', next: 'pirtis' }],
      },
      pirtis: {
        emoji: '♨️',
        text: 'Viduje karšta ir prieblanda, kvepia beržu ir dūmais. Vytautas užpila ant akmenų vandens, ir garas pakyla taip staiga, kad Linu užgniaužia kvapą. Paskui šeimininkas švelniai pliekia jį vanta per nugarą ir niūniuoja kažkokią seną dainą. «Pirtyje nėra nei rūpesčių, nei skubos», – sako jis.',
        translation:
          'Lá dentro está quente e na penumbra, com cheiro de bétula e fumaça. O Vytautas joga água nas pedras, e o vapor sobe tão de repente que o Linu perde o fôlego. Depois o anfitrião bate de leve nas costas dele com a «vanta» e cantarola uma canção antiga. «Na sauna não existem nem preocupações nem pressa», diz.',
        choices: [
          { text: 'Iššokti iš pirties ir nerti į ežerą.', translation: 'Sair correndo da sauna e mergulhar no lago.', next: 'ezeras' },
          { text: 'Užsilipti ant viršutinio suolo ir pasilikti ilgiau.', translation: 'Subir no banco mais alto e ficar mais tempo.', next: 'karsta' },
        ],
      },
      ezeras: {
        emoji: '🏊',
        text: 'Linu iššoka pro duris ir su šūksniu neria į vėsų ežerą. Ant lieptelio jau sėdi kaimynas Petras, kuris pasakoja, kad šįryt pagavo lydeką, didesnę už savo valtį. Vytautas mirkteli Linu ir tyliai sako: «Neklausyk jo, jis visada pučia miglą į akis.» Petras įsižeidęs aiškina, kad lydeką jau suvalgė, todėl parodyti negali.',
        translation:
          'O Linu sai porta afora e, com um grito, mergulha no lago fresco. No pequeno píer já está sentado o vizinho Petras, contando que hoje de manhã pescou um lúcio maior que o próprio barco. O Vytautas pisca para o Linu e diz baixinho: «Não dá ouvidos, ele sempre conta lorota.» O Petras, ofendido, explica que já comeu o lúcio, por isso não pode mostrar.',
        choices: [
          { text: 'Nusišypsoti ir paklausti Petro, kokio dydžio buvo lydeka.', translation: 'Sorrir e perguntar ao Petras de que tamanho era o lúcio.', next: 'lieptas' },
          {
            text: 'Pagirti Petrą, nes Vytautas patvirtino, kad jis sako tiesą.',
            translation: 'Elogiar o Petras, porque o Vytautas confirmou que ele diz a verdade.',
            wrong: '«Pūsti miglą į akis» (soprar névoa nos olhos) é enganar, contar lorota. O Vytautas avisou que o Petras está inventando o peixe gigante — ele não confirmou nada.',
          },
        ],
      },
      lieptas: {
        emoji: '💦',
        text: 'Petras nori parodyti, kokia buvo lydeka, plačiai išskečia rankas – ir pliumpt! – su visais drabužiais įkrenta į ežerą. Išlipęs jis šlapias kaip pelė. «Tik laikyk liežuvį už dantų, – maldauja jis Linu. – Jei Rasa sužinos, visas kaimas juoksis iki Kalėdų.» Linu pažada niekam nesakyti.',
        translation:
          'O Petras quer mostrar o tamanho do lúcio, abre bem os braços — e tchibum! — cai no lago de roupa e tudo. Quando sai, está encharcado como um pinto. «Só não abre o bico», implora ele ao Linu. «Se a Rasa souber, a vila inteira vai rir até o Natal.» O Linu promete não contar a ninguém.',
        choices: [{ text: 'Eiti vakarieniauti.', translation: 'Ir jantar.', next: 'vakariene' }],
      },
      vakariene: {
        emoji: '🍽️',
        text: 'Vakare Vytauto žmona Rasa padeda ant stalo bulvių plokštainio ir grietinės. Ji pro langą pastebi Petro kelnes, kurios džiūsta ant tvoros, ir smalsiai paklausia: «Kas gi nutiko Petrui?» Vytautas ir Linu susižvalgo. Rasa laukia atsakymo, parėmusi smakrą ranka.',
        translation:
          'À noite, a esposa do Vytautas, Rasa, põe na mesa torta de batata e creme azedo. Pela janela ela nota as calças do Petras secando na cerca e pergunta, curiosa: «O que foi que aconteceu com o Petras?» O Vytautas e o Linu se entreolham. A Rasa espera a resposta, com o queixo apoiado na mão.',
        choices: [
          { text: 'Laikyti liežuvį už dantų ir pasakyti, kad Petras tiesiog maudėsi.', translation: 'Guardar segredo e dizer que o Petras só estava tomando banho de lago.', next: 'final_bom' },
          { text: 'Papasakoti viską apie lydeką ir kritimą į ežerą.', translation: 'Contar tudo sobre o lúcio e a queda no lago.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🍄',
        text: 'Rasa pakelia antakį, bet daugiau nieko neklausia. Kitą rytą Petras atneša į sodybą pilną krepšį baravykų. «Čia tau, už tai, kad moki laikyti liežuvį už dantų», – sako jis Linu. Vytautas juokiasi, kad per vieną savaitgalį Linu tapo tikru aukštaičiu.',
        translation:
          'A Rasa levanta uma sobrancelha, mas não pergunta mais nada. Na manhã seguinte o Petras traz ao sítio uma cesta cheia de cogumelos porcini. «Isto é para você, por saber guardar segredo», diz ele ao Linu. O Vytautas ri e diz que num único fim de semana o Linu virou um aukštaitis de verdade.',
        ending: { tone: 'bom', title: 'Boca de siri', message: 'Você entendeu cada expressão — da lebre que não foge à língua atrás dos dentes — e guardou o segredo do Petras.' },
      },
      final_neutro: {
        emoji: '😅',
        text: 'Linu papasakoja viską, ir Rasa juokiasi taip, kad net ašaros rieda. Kitą dieną apie Petro lydeką ir jo maudynes su kelnėmis žino visas kaimas. Petras su Linu nesikalba iki pat jo išvažiavimo. «Visas kaimas iš adatos vežimą priskaldė», – bamba jis, nors istorija buvo visai tikra.',
        translation:
          'O Linu conta tudo, e a Rasa ri tanto que chega a chorar. No dia seguinte, a vila inteira já sabe do lúcio do Petras e do banho de calças. O Petras não fala com o Linu até o dia em que ele vai embora. «A vila inteira fez tempestade em copo d’água», resmunga ele, embora a história fosse bem verdadeira.',
        ending: { tone: 'neutro', title: 'Segredo vazado', message: 'A história era boa demais para guardar — mas você tinha prometido segurar a língua atrás dos dentes.' },
      },
      karsta: {
        emoji: '🥵',
        text: 'Linu nori parodyti, kad jam nekaršta, ir sėdi ant viršutinio suolo vis ilgiau. Galiausiai jam ima suktis galva, ir Vytautas išveda jį į lauką atsigulti ant žolės. «Pirtis – ne varžybos», – sako šeimininkas, paduodamas jam puodelį vėsios giros. Visą vakarą Linu guli po obelimi ir žiūri į debesis.',
        translation:
          'O Linu quer mostrar que não está com calor e fica cada vez mais tempo no banco de cima. Por fim começa a ficar tonto, e o Vytautas o leva para fora para deitar na grama. «Sauna não é competição», diz o anfitrião, entregando-lhe uma caneca de gira (bebida de pão fermentado) geladinha. A noite inteira o Linu fica deitado debaixo da macieira, olhando as nuvens.',
        ending: { tone: 'neutro', title: 'Quente demais', message: 'Na pirtis não há pressa nem competição — o Vytautas avisou logo de manhã.' },
      },
    },
  },
  // ───────────────────────── B2.4 ─────────────────────────
  {
    id: 'lt-h34',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Telefonai į stalčių? Debatai Klaipėdoje',
    emoji: '🎤',
    summary: 'Numa escola de Klaipėda, o Linu é jurado convidado de um debate sobre proibir celulares nas aulas — e precisa seguir os conectores para saber quem defende o quê.',
    cultural_context:
      'Klaipėda é o único porto marítimo da Lituânia; na praça do Teatro fica a estátua de Ännchen von Tharau (Taravos Anikė), homenagem ao poeta Simon Dach, nascido na cidade. Na escrita lituana, antes de conectores que abrem oração, como «tačiau», «nes», «kad» e «todėl», vai vírgula.',
    start: 'start',
    glossary: [
      ['tačiau', 'porém, no entanto'],
      ['todėl', 'por isso'],
      ['be to', 'além disso'],
      ['vis dėlto', 'ainda assim, mesmo assim'],
      ['užuot (+ particípio)', 'em vez de'],
      ['nors', 'embora'],
      ['pirma… antra…', 'primeiro… segundo…'],
      ['pagrįsti', 'fundamentar, justificar'],
    ],
    nodes: {
      start: {
        emoji: '⚓',
        text: 'Klaipėdoje pučia vėjas nuo marių, o Linu skuba per Teatro aikštę, pro Taravos Anikės skulptūrą, į vieną senamiesčio gimnaziją. Šiandien jis – svečias komisijos narys moksleivių debatų turnyre. Tema skamba paprastai, tačiau kelia daug aistrų: «Ar mokyklose reikėtų uždrausti mobiliuosius telefonus?» Salė pilna, o dvi komandos jau sėdi viena priešais kitą.',
        translation:
          'Em Klaipėda sopra o vento da laguna, e o Linu atravessa depressa a praça do Teatro, passando pela estátua de Ännchen von Tharau, rumo a uma escola da cidade velha. Hoje ele é jurado convidado de um torneio de debates de estudantes. O tema parece simples, mas desperta muita paixão: «As escolas deveriam proibir os celulares?» O auditório está cheio, e os dois times já estão sentados frente a frente.',
        choices: [
          { text: 'Užimti vietą prie komisijos stalo.', translation: 'Sentar-se à mesa dos jurados.', next: 'ieva' },
          { text: 'Pirma paklausti mokytojos apie taisykles.', translation: 'Primeiro perguntar à professora sobre as regras.', next: 'taisykles' },
        ],
      },
      taisykles: {
        emoji: '📋',
        text: 'Mokytoja Daiva paaiškina, kad kiekviena komanda turi po tris minutes kalbai. Vertinami ne tik argumentai, bet ir tai, kaip jie sujungti: «Svarbu ne tik ką sakai, bet ir kaip jungi mintis – pirma, antra, be to, todėl.» Be to, komisijos narys turi pagrįsti savo sprendimą, o ne tik pasakyti, kas laimėjo. Linu viską užsirašo į sąsiuvinį.',
        translation:
          'A professora Daiva explica que cada time tem três minutos para falar. Não se avaliam só os argumentos, mas também como eles estão ligados: «Importa não só o que você diz, mas como liga as ideias — primeiro, segundo, além disso, por isso.» Além do mais, o jurado precisa fundamentar a decisão, e não só dizer quem ganhou. O Linu anota tudo no caderno.',
        choices: [{ text: 'Užimti vietą prie komisijos stalo.', translation: 'Sentar-se à mesa dos jurados.', next: 'ieva' }],
      },
      ieva: {
        emoji: '🙋‍♀️',
        text: 'Pirmoji kalba Ieva, teigiamos komandos kapitonė. «Pirma, telefonai blaško dėmesį per pamokas. Antra, per pertraukas mokiniai nebesikalba: užuot bendravę, jie spokso į ekranus. Be to, be telefonų mokiniams lengviau susikaupti, todėl siūlome juos palikti spintelėse iki pamokų pabaigos.»',
        translation:
          'A primeira a falar é a Ieva, capitã do time a favor. «Primeiro, os celulares distraem a atenção durante as aulas. Segundo, nos intervalos os alunos já não conversam: em vez de conviver, ficam vidrados nas telas. Além disso, sem celular os alunos se concentram com mais facilidade, por isso propomos deixá-los nos armários até o fim das aulas.»',
        choices: [
          { text: 'Išklausyti priešingos komandos atsakymą.', translation: 'Ouvir a resposta do time contrário.', next: 'mantas' },
          {
            text: 'Užsirašyti, kad Ieva nori, jog per pertraukas mokiniai daugiau žiūrėtų į ekranus.',
            translation: 'Anotar que a Ieva quer que os alunos olhem mais para as telas nos intervalos.',
            wrong: '«Užuot bendravę» quer dizer «em vez de conviver»: a Ieva reclama justamente que os alunos olham para as telas EM VEZ de conversar. Ela quer menos tela, não mais.',
          },
        ],
      },
      mantas: {
        emoji: '🙋‍♂️',
        text: 'Tada atsistoja Mantas iš neigiamos komandos. «Sutinku, kad telefonai kartais blaško, tačiau draudimas – ne išeitis. Telefonas yra ir žodynas, ir skaičiuotuvas, ir žemėlapis, be to, tėvai nori galėti susisiekti su vaikais. Vis dėlto svarbiausia kita: jei mokykla viską draudžia, mokiniai niekada neišmoks patys valdyti savo laiko.»',
        translation:
          'Então se levanta o Mantas, do time contra. «Concordo que os celulares às vezes distraem, porém proibir não é a saída. O celular é dicionário, calculadora e mapa ao mesmo tempo; além disso, os pais querem poder falar com os filhos. Mesmo assim, o mais importante é outra coisa: se a escola proíbe tudo, os alunos nunca vão aprender a administrar o próprio tempo.»',
        choices: [
          { text: 'Užduoti Mantui klausimą.', translation: 'Fazer uma pergunta ao Mantas.', next: 'klausimas' },
          {
            text: 'Pažymėti, kad Mantas pritaria draudimui, nes jis pasakė «sutinku».',
            translation: 'Marcar que o Mantas apoia a proibição, porque ele disse «concordo».',
            wrong: 'O Mantas concorda só em parte («sutinku, kad…» — concordo que distraem), mas logo vem o «tačiau» (porém): para ele, proibir não é a saída. Ele é contra a proibição.',
          },
        ],
      },
      klausimas: {
        emoji: '❓',
        text: 'Linu paklausia: «O jeigu telefonus leistume naudoti tik per pertraukas, ar tai būtų kompromisas?» Mantas akimirką pagalvoja ir atsako, kad pertraukos tada taptų dar tylesnės, bet mokiniai bent jau išmoktų savidrausmės. Ieva iš savo vietos šūkteli: «Būtent todėl mes ir siūlome juos surinkti ryte!» Salėje kyla juokas, o mokytoja primena, kad kalbėti galima tik gavus žodį.',
        translation:
          'O Linu pergunta: «E se deixássemos usar o celular só nos intervalos, seria um meio-termo?» O Mantas pensa um instante e responde que aí os intervalos ficariam ainda mais silenciosos, mas os alunos pelo menos aprenderiam autodisciplina. A Ieva grita do seu lugar: «É justamente por isso que propomos recolhê-los de manhã!» O auditório cai na risada, e a professora lembra que só se pode falar quando se recebe a palavra.',
        choices: [{ text: 'Pasiruošti komisijos vertinimui.', translation: 'Preparar-se para a avaliação dos jurados.', next: 'vertinimas' }],
      },
      vertinimas: {
        emoji: '⚖️',
        text: 'Komisijos pirmininkė paprašo Linu ne tik pasakyti, kuri komanda laimėjo, bet ir pagrįsti savo nuomonę. «Mūsų turnyre svarbu ne tai, kuri pusė teisi, o tai, kuri geriau argumentavo», – priduria ji. Linu peržvelgia užrašus: Ieva kalbėjo aiškiai ir nuosekliai, tačiau Mantas geriau atsakė į klausimus. Dabar jis turi nuspręsti.',
        translation:
          'A presidente da banca pede ao Linu que não só diga qual time ganhou, mas também fundamente sua opinião. «No nosso torneio, o que importa não é qual lado tem razão, e sim qual argumentou melhor», acrescenta ela. O Linu revisa as anotações: a Ieva falou de forma clara e coerente, porém o Mantas respondeu melhor às perguntas. Agora ele precisa decidir.',
        choices: [
          {
            text: '«Nors abi komandos buvo stiprios, laimi Mantas, nes jis ne tik gynė savo poziciją, bet ir atsakė į kritiką.»',
            translation: '«Embora os dois times tenham sido fortes, o Mantas vence, porque não só defendeu sua posição como também respondeu às críticas.»',
            next: 'final_bom',
          },
          { text: '«Laimi Ieva, nes aš irgi nemėgstu telefonų.»', translation: '«A Ieva vence, porque eu também não gosto de celulares.»', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🏆',
        text: 'Salė ploja, o Mantas paspaudžia Ievai ranką. Mokytoja pagiria Linu, kad jis vertino argumentus, o ne savo paties skonį. Po turnyro Ieva prieina prie jo ir prisipažįsta: «Tavo klausimas buvo sunkus, tačiau teisingas.» Išėjęs į lauką, Linu mato, kaip visi moksleiviai tuoj pat išsitraukia telefonus, ir nusijuokia.',
        translation:
          'O auditório aplaude, e o Mantas aperta a mão da Ieva. A professora elogia o Linu por ter avaliado os argumentos, e não o próprio gosto. Depois do torneio, a Ieva vem até ele e confessa: «Sua pergunta foi difícil, mas justa.» Ao sair, o Linu vê todos os estudantes tirando o celular do bolso na mesma hora, e cai na risada.',
        ending: { tone: 'bom', title: 'Jurado de verdade', message: 'Você seguiu cada «tačiau», «be to» e «užuot» e julgou pelos argumentos — exatamente o que um debate pede.' },
      },
      final_neutro: {
        emoji: '😬',
        text: 'Kai kurie moksleiviai ploja, bet Manto komanda nusivylusi žiūri į komisiją. Pirmininkė mandagiai primena, kad komisijos nariai turi vertinti argumentus, o ne rinktis pusę pagal savo skonį. Linu parausta ir pripažįsta, kad jo sprendimas, tiesą sakant, nebuvo pagrįstas. Kitą kartą jis žada klausytis atidžiau.',
        translation:
          'Alguns estudantes aplaudem, mas o time do Mantas olha decepcionado para a banca. A presidente lembra, com educação, que os jurados devem avaliar os argumentos, e não escolher um lado pelo gosto pessoal. O Linu fica vermelho e admite que, para ser sincero, a decisão dele não foi fundamentada. Da próxima vez, promete ouvir com mais atenção.',
        ending: { tone: 'neutro', title: 'Voto de gosto', message: 'Você entendeu o debate, mas decidiu pela sua opinião, não pelos argumentos — e um jurado precisa fundamentar.' },
      },
    },
  },
  {
    id: 'lt-h35',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Laiškas redakcijai apie pušyną prie Nemuno',
    emoji: '✉️',
    summary: 'Em Druskininkai, a senhoria do Linu quer escrever ao jornal contra um hotel no pinhal à beira do Nemunas — e ele ajuda com os argumentos, o contra-argumento e as vírgulas.',
    cultural_context:
      'Druskininkai, à beira do rio Nemunas, é a estância termal mais famosa da Lituânia, conhecida pelas águas minerais e pelos pinhais; o pintor e compositor M. K. Čiurlionis passou ali a infância. Na pontuação lituana, a vírgula antes de «kad» (que) e «nes» (porque), quando abrem uma oração subordinada, é obrigatória — e esquecê-la é um erro clássico.',
    start: 'start',
    glossary: [
      ['laiškas redakcijai', 'carta à redação (do jornal)'],
      ['pušynas', 'pinhal'],
      ['taigi', 'portanto, então'],
      ['kita vertus', 'por outro lado'],
      ['vis dėlto', 'ainda assim'],
      ['užuot kirtę', 'em vez de derrubar'],
      ['skyryba', 'pontuação'],
      ['kablelis', 'vírgula'],
    ],
    nodes: {
      start: {
        emoji: '🌲',
        text: 'Druskininkai garsėja mineraliniu vandeniu, pušynais ir ramybe, todėl čia ilsėtis ir gydytis atvažiuoja žmonės iš visos Lietuvos. Linu nuomojasi kambarėlį pas ponią Genovaitę, kuri kiekvieną rytą skaito vietinį laikraštį. Šįryt ji piktai trenkia laikraštį ant stalo: pušyne prie Nemuno planuojama statyti naują didžiulį viešbutį. «Reikia rašyti laišką redakcijai! – sako ji. – Tik mano rašyba... Gal padėsi?»',
        translation:
          'Druskininkai é famosa pela água mineral, pelos pinhais e pelo sossego, por isso gente de toda a Lituânia vem aqui descansar e se tratar. O Linu aluga um quartinho na casa da dona Genovaitė, que toda manhã lê o jornal local. Hoje ela bate o jornal na mesa, brava: planejam construir um hotel enorme no pinhal à beira do Nemunas. «Tem que escrever uma carta para a redação!», diz ela. «Só que a minha ortografia... Você me ajuda?»',
        choices: [
          { text: 'Sutikti ir pirmiausia paklausti jos argumentų.', translation: 'Aceitar e primeiro perguntar quais são os argumentos dela.', next: 'argumentai' },
          { text: 'Pasiūlyti pirma nueiti pasižiūrėti į tą pušyną.', translation: 'Propor ir primeiro ver o tal pinhal.', next: 'pusynas' },
        ],
      },
      pusynas: {
        emoji: '🚶',
        text: 'Jie eina takeliu palei Nemuną, kur tarp pušų stovi senas medinis suoliukas. Genovaitė pasakoja, kad vaikystėje čia rinkdavo grybus, o dabar čia vaikštinėja kurorto svečiai. Pakeliui jie sutinka kaimyną Algirdą, kuris mano visai kitaip: naujas viešbutis atneštų darbo vietų jaunimui, kuris dabar išvažiuoja į didmiesčius. «Kita vertus, jei iškirs pušyną, kas čia beatvažiuos?» – atkerta Genovaitė.',
        translation:
          'Eles seguem pela trilha ao longo do Nemunas, onde entre os pinheiros há um velho banco de madeira. A Genovaitė conta que na infância colhia cogumelos ali, e agora quem passeia por lá são os hóspedes da estância. No caminho encontram o vizinho Algirdas, que pensa bem diferente: o hotel novo traria empregos para os jovens, que hoje vão embora para as cidades grandes. «Por outro lado, se derrubarem o pinhal, quem é que ainda vai vir para cá?», rebate a Genovaitė.',
        choices: [
          { text: 'Grįžti namo ir sėsti rašyti.', translation: 'Voltar para casa e sentar para escrever.', next: 'argumentai' },
          {
            text: 'Nuspręsti, kad Algirdas nori iškirsti pušyną, nes nemėgsta medžių.',
            translation: 'Concluir que o Algirdas quer derrubar o pinhal porque não gosta de árvores.',
            wrong: 'O Algirdas defende o hotel por causa dos empregos para os jovens que estão indo embora — não por não gostar de árvores. Quem diz «kita vertus» (por outro lado) é a Genovaitė, rebatendo o argumento dele.',
          },
        ],
      },
      argumentai: {
        emoji: '📝',
        text: 'Genovaitė diktuoja, o Linu rašo. «Pirma, pušynas – tai miesto plaučiai. Antra, žmonės čia važiuoja būtent dėl ramybės, taigi didelis viešbutis ją sugadintų. Be to, mieste jau yra nemažai viešbučių, kurie ne sezono metu stovi pustuščiai.» Linu pastebi, kad ji nė žodžiu neužsiminė apie kaimyno argumentą dėl darbo vietų.',
        translation:
          'A Genovaitė dita, e o Linu escreve. «Primeiro, o pinhal é o pulmão da cidade. Segundo, as pessoas vêm aqui justamente pelo sossego, portanto um hotel grande o estragaria. Além disso, a cidade já tem bastantes hotéis, que fora da temporada ficam meio vazios.» O Linu percebe que ela não disse uma palavra sobre o argumento do vizinho a respeito dos empregos.',
        choices: [
          { text: 'Pasiūlyti laiške paminėti ir priešingą nuomonę.', translation: 'Sugerir mencionar na carta também a opinião contrária.', next: 'kita_vertus' },
          { text: 'Rašyti tik tai, ką ji diktuoja.', translation: 'Escrever só o que ela dita.', next: 'tik_savo' },
        ],
      },
      kita_vertus: {
        emoji: '🤝',
        text: '«Laiškas bus stipresnis, jei parodysite, kad girdite ir kitą pusę», – sako Linu. Genovaitė iš pradžių susiraukia, tačiau paskui linkteli. Jie parašo: «Suprantame, kad miestui reikia darbo vietų. Vis dėlto, užuot kirtę pušyną, galėtume atnaujinti kurį nors seną, nenaudojamą pastatą mieste.»',
        translation:
          '«A carta vai ficar mais forte se a senhora mostrar que ouve também o outro lado», diz o Linu. A Genovaitė a princípio fecha a cara, mas depois concorda com a cabeça. Eles escrevem: «Entendemos que a cidade precisa de empregos. Ainda assim, em vez de derrubar o pinhal, poderíamos reformar algum prédio antigo e sem uso na cidade.»',
        choices: [{ text: 'Patikrinti skyrybą.', translation: 'Conferir a pontuação.', next: 'kableliai' }],
      },
      kableliai: {
        emoji: '✏️',
        text: 'Belieka patikrinti skyrybą. Genovaitė pati parašė paskutinį sakinį: «Mes nenorime kad pušyną iškirstų nes jis mums brangus.» Linu primena, kad lietuvių kalboje prieš «kad» ir «nes», kai jie pradeda šalutinį sakinį, rašomas kablelis. Genovaitė atsidūsta: «Mokykloje mane už tai bardavo, o dabar bara pingvinas.»',
        translation:
          'Só falta conferir a pontuação. A própria Genovaitė escreveu a última frase: «Mes nenorime kad pušyną iškirstų nes jis mums brangus» (não queremos que derrubem o pinhal porque ele nos é caro). O Linu lembra que em lituano, antes de «kad» e «nes», quando abrem uma oração subordinada, vai vírgula. A Genovaitė suspira: «Na escola me davam bronca por isso, e agora quem me dá bronca é um pinguim.»',
        choices: [
          { text: 'Pataisyti: «Mes nenorime, kad pušyną iškirstų, nes jis mums brangus.»', translation: 'Corrigir: «Não queremos que derrubem o pinhal, porque ele nos é caro.»', next: 'final_bom' },
          {
            text: 'Pataisyti: «Mes, nenorime kad pušyną, iškirstų nes jis mums brangus.»',
            translation: 'Corrigir com vírgulas depois do sujeito e no meio do objeto.',
            wrong: 'A vírgula lituana vem antes de «kad» (que) e de «nes» (porque), que abrem orações subordinadas — não depois do sujeito nem no meio da frase. O certo é «Mes nenorime, kad pušyną iškirstų, nes jis mums brangus».',
          },
        ],
      },
      final_bom: {
        emoji: '📰',
        text: 'Po savaitės laiškas išspausdinamas laikraštyje, ir Genovaitė garsiai jį perskaito visiems kaimynams. Net Algirdas pripažįsta, kad laiškas sąžiningas, nes jame paminėti ir jo argumentai. Savivaldybė pažada projektą dar kartą aptarti su gyventojais. «Na, bent jau kableliai savo vietose», – juokiasi Genovaitė.',
        translation:
          'Uma semana depois, a carta sai no jornal, e a Genovaitė a lê em voz alta para todos os vizinhos. Até o Algirdas admite que a carta é honesta, porque menciona também os argumentos dele. A prefeitura promete discutir o projeto de novo com os moradores. «Bom, pelo menos as vírgulas estão no lugar», ri a Genovaitė.',
        ending: { tone: 'bom', title: 'Carta com vírgulas no lugar', message: 'Você ajudou a montar uma argumentação honesta — com «kita vertus», «vis dėlto» e as vírgulas antes de «kad» e «nes».' },
      },
      tik_savo: {
        emoji: '🗞️',
        text: 'Linu parašo tik tai, ką diktuoja Genovaitė, ir laiškas išspausdinamas. Kitą savaitę tame pačiame laikraštyje pasirodo Algirdo atsakymas: jis rašo, kad kaimynė visai negalvoja apie jaunus žmones, kuriems reikia darbo. Dabar kaimynai nebesisveikina per tvorą. Linu pagalvoja, kad geras argumentas turi atsakyti ir į priešingą nuomonę.',
        translation:
          'O Linu escreve só o que a Genovaitė dita, e a carta é publicada. Na semana seguinte, no mesmo jornal, sai a resposta do Algirdas: ele escreve que a vizinha não pensa nem um pouco nos jovens que precisam de trabalho. Agora os vizinhos nem se cumprimentam mais por cima da cerca. O Linu pensa que um bom argumento precisa responder também à opinião contrária.',
        ending: { tone: 'neutro', title: 'Guerra de cartas', message: 'A carta saiu, mas ignorou o outro lado — e virou briga em vez de conversa.' },
      },
    },
  },
  {
    id: 'lt-h36',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Dviračių takas per Saulės miestą',
    emoji: '🚲',
    summary: 'Em Šiauliai, o Linu vai parar ao vivo num programa de rádio sobre trocar vagas de carro por uma ciclovia — e precisa ouvir os dois lados antes de dar a sua opinião.',
    cultural_context:
      'Šiauliai, no norte da Lituânia, é apelidada «Cidade do Sol» (Saulės miestas): a tradição liga a cidade à Batalha do Sol (Saulės mūšis), de 1236, e no centro há uma praça com relógio de sol e a estátua dourada de um arqueiro. A cidade tem um museu da bicicleta, lembrança da grande fábrica de bicicletas que funcionou ali na época soviética.',
    start: 'start',
    glossary: [
      ['iš vienos pusės… iš kitos pusės…', 'por um lado… por outro…'],
      ['vadinasi', 'ou seja, quer dizer que'],
      ['mano nuomone', 'na minha opinião'],
      ['dviračių takas', 'ciclovia'],
      ['stovėjimo vieta', 'vaga de estacionamento'],
      ['bandomasis laikotarpis', 'período de teste'],
      ['laidos vedėjas', 'apresentador do programa'],
    ],
    nodes: {
      start: {
        emoji: '☀️',
        text: 'Šiauliai vadinami Saulės miestu, o centre, ant aukšto stulpo prie saulės laikrodžio, blizga auksinis šaulys. Linu atvažiavo čia dviračiu ir netikėtai buvo pakviestas į vietinio radijo laidą. Tema – ar centrinėje gatvėje vietoj automobilių stovėjimo vietų reikėtų įrengti dviračių taką. Studijoje jau sėdi du svečiai: parduotuvės savininkė Vida ir studentas Tomas.',
        translation:
          'Šiauliai é chamada Cidade do Sol, e no centro, no alto de uma coluna junto ao relógio de sol, brilha um arqueiro dourado. O Linu chegou de bicicleta e, sem esperar, foi convidado para um programa da rádio local. O tema: se a rua central deveria ganhar uma ciclovia no lugar das vagas de carro. No estúdio já estão dois convidados: a dona de loja Vida e o estudante Tomas.',
        choices: [
          { text: 'Papasakoti, kad ką tik aplankė Dviračių muziejų.', translation: 'Contar que acabou de visitar o Museu da Bicicleta.', next: 'muziejus' },
          { text: 'Iš karto pareikšti savo nuomonę.', translation: 'Dar logo a sua opinião.', next: 'skubota' },
        ],
      },
      skubota: {
        emoji: '📻',
        text: '«Žinoma, takų reikia, ir viskas!» – sušunka Linu, vos užsidėjęs ausines. Vedėjas mandagiai nusišypso: «Nuomonė be argumentų – tik nuotaika. Pirmiausia išklausykime kitus svečius.» Linu nuraudęs linkteli ir pasiruošia klausytis. Vida jau pasilenkia prie mikrofono.',
        translation:
          '«Claro que precisa de ciclovia, e pronto!», exclama o Linu, mal colocou os fones. O apresentador sorri com educação: «Opinião sem argumento é só humor do momento. Primeiro vamos ouvir os outros convidados.» O Linu, vermelho, concorda com a cabeça e se prepara para ouvir. A Vida já se inclina para o microfone.',
        choices: [{ text: 'Išklausyti Vidą.', translation: 'Ouvir a Vida.', next: 'vida' }],
      },
      muziejus: {
        emoji: '🏛️',
        text: 'Linu pasakoja, kad Šiauliuose yra Dviračių muziejus, kur galima pamatyti senovinių dviračių su milžinišku priekiniu ratu. «Taigi dviračiai čia turi ilgą istoriją», – šypsosi vedėjas. Tomas priduria, kad sovietmečiu Šiauliuose veikė didelė dviračių gamykla. Vida tik gūžteli pečiais: «Istorija istorija, tačiau mano klientai atvažiuoja automobiliais.»',
        translation:
          'O Linu conta que Šiauliai tem um Museu da Bicicleta, onde dá para ver bicicletas antigas com uma roda dianteira gigante. «Então aqui a bicicleta tem uma longa história», sorri o apresentador. O Tomas acrescenta que na época soviética funcionava em Šiauliai uma grande fábrica de bicicletas. A Vida só dá de ombros: «História é história, mas os meus clientes chegam de carro.»',
        choices: [{ text: 'Išklausyti Vidos argumentus.', translation: 'Ouvir os argumentos da Vida.', next: 'vida' }],
      },
      vida: {
        emoji: '🛒',
        text: 'Vida kalba ramiai, bet tvirtai: «Iš vienos pusės, suprantu, kad važinėti dviračiu sveika ir ekologiška. Iš kitos pusės, jei panaikinsite stovėjimo vietas, pirkėjai tiesiog važiuos į prekybos centrą už miesto. Vadinasi, mažos parduotuvės užsidarys, o gatvė ištuštės.»',
        translation:
          'A Vida fala com calma, mas com firmeza: «Por um lado, entendo que a bicicleta é saudável e ecológica. Por outro, se vocês acabarem com as vagas, os clientes vão simplesmente ao shopping fora da cidade. Ou seja, as lojas pequenas vão fechar, e a rua vai se esvaziar.»',
        choices: [
          { text: 'Išklausyti Tomo atsakymą.', translation: 'Ouvir a resposta do Tomas.', next: 'tomas' },
          {
            text: 'Pasakyti, kad Vida apskritai prieš dviračius.',
            translation: 'Dizer que a Vida é contra a bicicleta em geral.',
            wrong: 'A Vida diz «iš vienos pusės… iš kitos pusės» (por um lado… por outro): ela reconhece que a bicicleta é saudável e ecológica. O medo dela é outro — perder as vagas e, com elas, os clientes.',
          },
        ],
      },
      tomas: {
        emoji: '🎓',
        text: 'Tomas atsako, kad daugelyje Europos miestų dviračių takai, jo žodžiais, atgaivino centrines gatves, nes dviratininkai dažniau sustoja ir užsuka į parduotuves. «Be to, – priduria jis, – dabar studentai į universitetą važiuoja tarp automobilių, o tai pavojinga.» Vida suraukia antakius, bet nieko neatsako. Vedėjas atsisuka į Linu: «O kokia jūsų nuomonė?»',
        translation:
          'O Tomas responde que em muitas cidades europeias as ciclovias, segundo ele, reavivaram as ruas centrais, porque os ciclistas param mais e entram nas lojas. «Além disso», acrescenta, «hoje os estudantes vão para a universidade pedalando no meio dos carros, e isso é perigoso.» A Vida franze a testa, mas não responde nada. O apresentador se vira para o Linu: «E qual é a sua opinião?»',
        choices: [
          { text: 'Pasiūlyti kompromisą.', translation: 'Propor um meio-termo.', next: 'kompromisas' },
          { text: 'Palaikyti tik Tomą.', translation: 'Apoiar só o Tomas.', next: 'final_neutro' },
        ],
      },
      kompromisas: {
        emoji: '⚖️',
        text: '«Mano nuomone, abu svečiai iš dalies teisūs, – sako Linu. – Todėl siūlyčiau taką įrengti, tačiau palikti kelias trumpalaikes stovėjimo vietas prie parduotuvių. Be to, būtų galima viską išbandyti vieną vasarą: jei pirkėjų sumažės, visada galima grįžti atgal.» Vida atsidūsta ir pripažįsta, kad bandomasis laikotarpis skamba protingai.',
        translation:
          '«Na minha opinião, os dois convidados têm razão em parte», diz o Linu. «Por isso eu proporia fazer a ciclovia, mas deixar algumas vagas rápidas perto das lojas. Além disso, daria para testar tudo durante um verão: se os clientes diminuírem, sempre dá para voltar atrás.» A Vida suspira e admite que um período de teste parece sensato.',
        choices: [{ text: 'Išklausyti klausytojų skambučius.', translation: 'Ouvir as ligações dos ouvintes.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '📞',
        text: 'Po laidos į studiją skambina klausytojai, ir daugelis jų palaiko bandomąjį variantą. Vida pažada Linu kavos puodelį savo parduotuvėje, jei jis kada nors užsuks dviračiu. Tomas juokauja, kad Linu galėtų kandidatuoti į miesto tarybą. Linu tik šypsosi ir dar kartą nuvažiuoja pažiūrėti į auksinį šaulį prieš saulėlydį.',
        translation:
          'Depois do programa os ouvintes ligam para o estúdio, e muitos apoiam a ideia do teste. A Vida promete ao Linu um cafezinho na loja dela, se algum dia ele passar por lá de bicicleta. O Tomas brinca que o Linu poderia se candidatar à câmara municipal. O Linu só sorri e vai mais uma vez ver o arqueiro dourado antes do pôr do sol.',
        ending: { tone: 'bom', title: 'Meio-termo na rádio', message: 'Você ouviu os dois lados, usou «mano nuomone», «todėl» e «be to» — e transformou uma briga numa proposta.' },
      },
      final_neutro: {
        emoji: '🔇',
        text: 'Linu pasako, kad palaiko Tomą, nes dviratis visada geresnis už automobilį. Vida įsižeidusi primena, kad jis net nebandė atsakyti į jos argumentus. Vedėjas mandagiai užbaigia laidą, tačiau studijoje lieka įtampa. Išeidamas Linu supranta, kad šūkis dar nėra argumentas.',
        translation:
          'O Linu diz que apoia o Tomas, porque a bicicleta é sempre melhor que o carro. A Vida, ofendida, lembra que ele nem tentou responder aos argumentos dela. O apresentador encerra o programa com educação, mas fica um clima tenso no estúdio. Ao sair, o Linu percebe que um slogan ainda não é um argumento.',
        ending: { tone: 'neutro', title: 'Slogan não é argumento', message: 'Você tomou partido sem responder à Vida — numa argumentação, o outro lado também merece resposta.' },
      },
    },
  },
  // ───────────────────────── C1.1 ─────────────────────────
  {
    id: 'lt-h37',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Žemaitiškai prie Platelių ežero',
    emoji: '🐻',
    summary: 'No lago Plateliai, na Žemaitija, o Linu aluga um barco de um velho pescador que só fala samogiciano — e a neta, estudante em Vilnius, faz a ponte entre o dialeto e a língua padrão.',
    cultural_context:
      'A Lituânia tem dois grandes grupos de dialetos: o aukštaičių (alto-lituano), base da língua padrão, e o žemaičių (samogiciano), falado na Žemaitija, no oeste, que muitos samogicianos consideram uma língua à parte. O lago Plateliai fica no Parque Nacional da Žemaitija, e a cidadezinha de Plateliai é famosa pelas máscaras do Užgavėnės, o Carnaval lituano.',
    start: 'start',
    glossary: [
      ['žemaičiai', 'samogicianos, o povo da Žemaitija'],
      ['žemaitiškai', 'em samogiciano'],
      ['tarmė', 'dialeto'],
      ['bendrinė kalba', 'língua padrão'],
      ['aukštaičiai', 'os aukštaičiai, o povo da Aukštaitija'],
      ['persijungti', 'trocar de «chave», mudar de registro'],
      ['Užgavėnės', 'o Carnaval lituano, com máscaras, antes da Quaresma'],
      ['irkluoti', 'remar'],
    ],
    nodes: {
      start: {
        emoji: '🛶',
        text: 'Gegužę Platelių ežero vanduo blizga tarp miškų lyg sidabrinis indas. Linu nori išsinuomoti valtį iš seno žvejo, vardu Stasys, kuris jį pasitinka žodžiais, skambančiais maždaug kaip «lab dėina». Tačiau to, ką Stasys sako toliau, Linu beveik nesupranta: žodžiai trumpi, galūnės tarsi nukąstos, o balsiai visai kitokie nei vadovėlyje. Laimei, iš namo išbėga Stasio anūkė Austėja, studentė iš Vilniaus.',
        translation:
          'Em maio, a água do lago Plateliai brilha entre as florestas como uma travessa de prata. O Linu quer alugar um barco de um velho pescador chamado Stasys, que o recebe com palavras que soam mais ou menos como «lab dėina» (bom dia). Mas o que o Stasys diz em seguida o Linu quase não entende: palavras curtas, terminações como que mordidas e vogais bem diferentes das do livro. Por sorte, sai correndo de casa a neta do Stasys, Austėja, estudante em Vilnius.',
        choices: [
          { text: 'Paprašyti Austėjos išversti.', translation: 'Pedir à Austėja que traduza.', next: 'austeja' },
          {
            text: 'Nuspręsti, kad Stasys kalba latviškai.',
            translation: 'Concluir que o Stasys está falando letão.',
            wrong: 'O Stasys fala samogiciano (žemaitiškai), a fala da Žemaitija, no oeste da Lituânia — não letão. As terminações «mordidas» e as vogais diferentes que o Linu notou são marcas típicas do samogiciano.',
          },
        ],
      },
      austeja: {
        emoji: '👩‍🎓',
        text: '«Senelis kalba žemaitiškai, – juokiasi Austėja. – Jis klausia, ar mokate irkluoti ir ar nebijote vandens.» Ji paaiškina, kad žemaičiai dažnai tarsi „suvalgo“ žodžių galūnes, o vietoj bendrinės kalbos dvibalsių „ie“ ir „uo“ taria kitus garsus. Kalbininkai žemaičių kalbą paprastai laiko viena iš dviejų didžiųjų lietuvių kalbos tarmių, bet patys žemaičiai neretai sako, kad tai atskira kalba. «Vilniuje kalbu bendrine kalba, o čia, pas senelį, persijungiu per akimirką», – priduria ji.',
        translation:
          '«O vovô fala samogiciano», ri a Austėja. «Ele está perguntando se você sabe remar e se não tem medo de água.» Ela explica que os samogicianos muitas vezes como que «engolem» as terminações das palavras e, no lugar dos ditongos «ie» e «uo» da língua padrão, pronunciam outros sons. Os linguistas costumam considerar o samogiciano um dos dois grandes dialetos do lituano, mas os próprios samogicianos muitas vezes dizem que é uma língua à parte. «Em Vilnius eu falo a língua padrão, e aqui, com o vovô, troco de chave num instante», acrescenta.',
        choices: [
          { text: 'Paklausti, ar žemaičiai turi savo raštą.', translation: 'Perguntar se os samogicianos têm escrita própria.', next: 'rastas' },
          { text: 'Išplaukti su Stasiu į ežerą.', translation: 'Sair de barco com o Stasys pelo lago.', next: 'ezeras' },
        ],
      },
      rastas: {
        emoji: '📚',
        text: 'Austėja pasakoja, kad žemaičiai turi savo rašybą, kuria leidžiamos knygos ir rašomi eilėraščiai. Ji parodo lipduką ant senelio valties: juodą lokį, žemaičių herbo ženklą. Aukštaičiai mėgsta juokauti, kad žemaičiai užsispyrę ir išdidūs kaip tas lokys. «O žemaičiai apie aukštaičius juokauja dar smarkiau, tik jau žemaitiškai, kad šie nesuprastų», – mirkteli Austėja. Stasys, lyg supratęs, apie ką kalbama, kažką burbteli ir nusijuokia.',
        translation:
          'A Austėja conta que os samogicianos têm ortografia própria, em que se publicam livros e se escrevem poemas. Ela mostra um adesivo no barco do avô: um urso preto, o símbolo do brasão da Žemaitija. Os aukštaičiai adoram brincar que os samogicianos são teimosos e orgulhosos como aquele urso. «E os samogicianos fazem piadas ainda piores sobre os aukštaičiai — só que em samogiciano, para eles não entenderem», pisca a Austėja. O Stasys, como se tivesse entendido do que falam, resmunga alguma coisa e ri.',
        choices: [{ text: 'Išplaukti su Stasiu į ežerą.', translation: 'Sair de barco com o Stasys pelo lago.', next: 'ezeras' }],
      },
      ezeras: {
        emoji: '🏝️',
        text: 'Stasys irkluoja lėtai ir kažką pasakoja, rodydamas į salą ežero viduryje. Austėja verčia: ežere yra kelios salos, o ant vienos jų, pasak senelio, kadaise stovėjusi pilis. Tada Stasys dar kažką priduria, ir Austėja parausta: «Jis sako, kad miestiečiai kaip jūs irkluoja taip, kad net žuvys juokiasi.» Stasio balsas griežtas, bet akys linksmos, o ūsai vos pastebimai krusteli. Linu jaučia, kad dabar visi laukia, ką jis atsakys.',
        translation:
          'O Stasys rema devagar e vai contando alguma coisa, apontando para uma ilha no meio do lago. A Austėja traduz: no lago há várias ilhas, e numa delas, segundo o avô, teria existido um castelo. Então o Stasys acrescenta mais alguma coisa, e a Austėja fica vermelha: «Ele diz que gente da cidade como você rema de um jeito que até os peixes riem.» A voz do Stasys é dura, mas os olhos estão alegres, e o bigode mexe quase sem se notar. O Linu sente que agora todos esperam a resposta dele.',
        choices: [
          { text: 'Atsakyti juokais: «Pasakykite jam, kad pingvinai irkluoja sparnais.»', translation: 'Responder na brincadeira: «Diga a ele que pinguins remam com as asas.»', next: 'juokas' },
          {
            text: 'Įsižeisti ir paprašyti grįžti į krantą, nes Stasys piktas.',
            translation: 'Ofender-se e pedir para voltar à margem, porque o Stasys está bravo.',
            wrong: 'O texto avisa: a voz do Stasys é dura, mas os olhos estão alegres e o bigode mexe — é humor samogiciano, uma provocação carinhosa, e todos esperam uma resposta à altura. Ele não está bravo.',
          },
        ],
      },
      juokas: {
        emoji: '😄',
        text: 'Austėja išverčia, ir Stasys taip nusijuokia, kad valtis net sulinguoja. Jis paduoda Linu irklus ir parodo, kaip irkluoti ramiai, be purslų, kaip žvejai irkluodavo jo jaunystėje. Grįžtant į krantą, jis pasakoja apie Užgavėnes Plateliuose: kasmet per jas miestelis prisipildo kaukių, o senajame dvaro svirne įrengta kaukių ekspozicija. «Jei atvažiuosite per Užgavėnes, pamatysite tikrą Žemaitiją», – verčia Austėja. Stasys dar kartą kažką sako ir, rodos, laukia Linu atsakymo.',
        translation:
          'A Austėja traduz, e o Stasys ri tanto que o barco chega a balançar. Ele passa os remos ao Linu e mostra como remar com calma, sem espirrar água, como os pescadores remavam na juventude dele. Na volta para a margem, conta sobre o Užgavėnės em Plateliai: todo ano a cidadezinha se enche de máscaras, e no velho celeiro da antiga propriedade senhorial há uma exposição de máscaras. «Se você vier no Užgavėnės, vai ver a verdadeira Žemaitija», traduz a Austėja. O Stasys diz mais alguma coisa e parece esperar a resposta do Linu.',
        choices: [
          { text: 'Paprašyti Stasio išmokyti jį kelių žemaitiškų žodžių.', translation: 'Pedir ao Stasys que lhe ensine algumas palavras em samogiciano.', next: 'final_bom' },
          { text: 'Pasakyti, kad bendrinė kalba vis tiek gražesnė.', translation: 'Dizer que a língua padrão, de todo modo, é mais bonita.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🎭',
        text: 'Visą vakarą Stasys moko Linu tarti žemaitiškus žodžius, o Austėja juokiasi iš jų abiejų. Kai kurie žodžiai visiškai nepanašūs į bendrinės kalbos, ir Linu juos užsirašo į sąsiuvinį, pažymėdamas, kaip jie tariami. Atsisveikindamas Stasys ilgai spaudžia jam ranką ir pasako vieną ilgą sakinį. «Senelis sako, kad jūs pirmas miestietis, kuris norėjo išmokti žemaitiškai, užuot iš to juokęsis», – išverčia Austėja. Linu pažada grįžti per Užgavėnes, su kauke ir su sąsiuviniu.',
        translation:
          'A noite inteira o Stasys ensina o Linu a pronunciar palavras samogicianas, e a Austėja ri dos dois. Algumas palavras não se parecem nada com as da língua padrão, e o Linu as anota no caderno, marcando como se pronunciam. Na despedida, o Stasys aperta a mão dele por um bom tempo e diz uma frase comprida. «O vovô diz que você é o primeiro da cidade que quis aprender samogiciano em vez de rir dele», traduz a Austėja. O Linu promete voltar no Užgavėnės, com máscara e com o caderno.',
        ending: { tone: 'bom', title: 'Aluno do Stasys', message: 'Você entendeu o humor samogiciano e tratou o dialeto como riqueza, não como erro — e ganhou um professor.' },
      },
      final_neutro: {
        emoji: '🌫️',
        text: 'Austėja išverčia, ir Stasys ilgai tyli, žiūrėdamas į ežerą. Paskui jis kažką trumpai atsako ir, nieko daugiau nelaukęs, nueina į namą. «Jis sako, kad bendrinė kalba gera Vilniuje, o čia – Žemaitija», – tyliai paaiškina Austėja. Linu nejaukiai pasijunta, tarsi būtų įžeidęs ne vieną žmogų, o visą kraštą. Grįždamas jis supranta, kad tarmė žmonėms – ne klaida, o namai.',
        translation:
          'A Austėja traduz, e o Stasys fica muito tempo calado, olhando para o lago. Depois responde alguma coisa curta e, sem esperar mais nada, entra em casa. «Ele diz que a língua padrão é boa em Vilnius, mas aqui é a Žemaitija», explica a Austėja baixinho. O Linu se sente constrangido, como se tivesse ofendido não uma pessoa, mas uma região inteira. Na volta, entende que o dialeto, para as pessoas, não é erro: é casa.',
        ending: { tone: 'neutro', title: 'Lição de humildade', message: 'Você comparou o dialeto com a língua padrão como se fosse uma disputa — e um dialeto é identidade, não versão errada.' },
      },
    },
  },
  {
    id: 'lt-h38',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Ponia Ona iš Vila Zelinos',
    emoji: '⛪',
    summary: 'Em Vila Zelina, em São Paulo, o Linu conhece a dona Ona, filha de imigrantes lituanos dos anos 1920, que fala um lituano antigo, cheio de «tamsta» e de palavras portuguesas.',
    cultural_context:
      'Entre o fim dos anos 1920 e os anos 1930, dezenas de milhares de lituanos emigraram para o Brasil, e muitos se fixaram em São Paulo, sobretudo em Vila Zelina, na Zona Leste, que ainda guarda a memória da comunidade. «Tamsta», tratamento cortês antigo, sobrevive na fala dos mais velhos e da diáspora, enquanto na Lituânia de hoje o normal é «Jūs».',
    start: 'start',
    glossary: [
      ['tamsta', 'o senhor, a senhora (tratamento cortês antigo)'],
      ['išeivija', 'diáspora, comunidade emigrada'],
      ['imigrantai', 'imigrantes'],
      ['proanūkė', 'bisneta'],
      ['šakotis', 'bolo-árvore lituano, assado no espeto'],
      ['tautiniai šokiai', 'danças folclóricas'],
      ['kalba gyva, kol ja kalbama', 'a língua vive enquanto é falada'],
    ],
    nodes: {
      start: {
        emoji: '🏘️',
        text: 'Rytiniame São Paulo pakraštyje yra Vila Zelina – rajonas, kuriame praėjusio amžiaus trečiajame ir ketvirtajame dešimtmečiais apsigyveno daug lietuvių imigrantų. Linu atėjo čia sekmadienį, nes girdėjo, kad po mišių kai kurie žmonės dar kalbasi lietuviškai. Prie bažnyčios jį sustabdo smulki, gal devyniasdešimties metų ponia gėlėta suknele. «Laba diena, tamsta, – sako ji, atidžiai jį nužvelgusi. – Ar tamsta iš Lietuvos?»',
        translation:
          'Na ponta leste de São Paulo fica Vila Zelina, o bairro onde, nas décadas de 1920 e 1930, se instalaram muitos imigrantes lituanos. O Linu veio num domingo, porque ouviu dizer que depois da missa algumas pessoas ainda conversam em lituano. Perto da igreja, uma senhora miúda, de uns noventa anos, de vestido florido, o faz parar. «Bom dia, o senhor», diz ela, depois de examiná-lo com atenção. «O senhor é da Lituânia?»',
        choices: [
          { text: 'Paaiškinti, kad jis ne iš Lietuvos, bet mokosi lietuvių kalbos.', translation: 'Explicar que não é da Lituânia, mas está aprendendo lituano.', next: 'ona' },
          {
            text: 'Pasakyti, kad jo vardas ne Tamsta, o Linu.',
            translation: 'Dizer que o nome dele não é Tamsta, e sim Linu.',
            wrong: '«Tamsta» não é nome: é um tratamento antigo e cortês, algo como «o senhor» ou «vossa mercê». Hoje quase só os mais velhos e a diáspora o usam; na Lituânia atual, o normal é «Jūs».',
          },
        ],
      },
      ona: {
        emoji: '👵',
        text: 'Ponia prisistato: ji Ona, jos tėvai atplaukė į Braziliją laivu 1927 metais iš kaimo netoli Kauno. «Namie kalbėjome tik lietuviškai, o gatvėje – portugališkai, – pasakoja ji. – Tai dabar mano lietuvių kalba sena kaip aš pati.» Ji kalba lėtai, šiek tiek dainingai, ir kartais įterpia portugališką žodį, pavyzdžiui, sako «vamos» vietoj «eime». Linu pastebi, kad kai kurie jos žodžiai skamba kaip iš senos knygos, kurios šiandien niekas nebeskaito.',
        translation:
          'A senhora se apresenta: é Ona, e os pais dela chegaram de navio ao Brasil em 1927, vindos de uma aldeia perto de Kaunas. «Em casa a gente só falava lituano, e na rua, português», conta ela. «Por isso hoje o meu lituano é velho como eu.» Ela fala devagar, meio cantado, e às vezes encaixa uma palavra em português, por exemplo diz «vamos» em vez de «eime». O Linu percebe que algumas palavras dela soam como tiradas de um livro antigo que hoje ninguém mais lê.',
        choices: [
          { text: 'Paklausti, kodėl ji sako «tamsta».', translation: 'Perguntar por que ela diz «tamsta».', next: 'tamsta' },
          { text: 'Paklausti, kaip čia gyveno lietuviai anksčiau.', translation: 'Perguntar como viviam os lituanos aqui antigamente.', next: 'praeitis' },
        ],
      },
      tamsta: {
        emoji: '🗣️',
        text: 'Ona nusijuokia: «Taip kalbėjo mano tėvai, taip kalbu ir aš. Anūkai, kurie buvo nuvažiavę į Vilnių, sako, kad ten dabar visi sako „jūs“, o „tamsta“ skamba kaip iš senų filmų.» Ji pasakoja, kad jos pusseserė iš Čikagos kalba dar kitaip – į jos lietuvių kalbą prilindę angliškų žodžių, kaip į Onos – portugališkų. «Taigi, vaikeli, mūsų kalba išsibarsčiusi po visą pasaulį, ir kiekviename krašte ji truputį kitokia.» Linu supranta, kad ir tai – lietuvių kalbos istorija, tik parašyta ne vadovėliuose.',
        translation:
          'A Ona ri: «Assim falavam os meus pais, e assim falo eu. Os netos, que foram a Vilnius, dizem que lá agora todo mundo diz „jūs“, e „tamsta“ soa como coisa de filme antigo.» Ela conta que a prima de Chicago fala de outro jeito ainda: no lituano dela entraram palavras inglesas, como no da Ona entraram portuguesas. «Pois é, meu filho, a nossa língua se espalhou pelo mundo inteiro, e em cada terra ela é um pouquinho diferente.» O Linu entende que isso também é história do lituano, só que não escrita nos livros didáticos.',
        choices: [{ text: 'Paklausti, kaip čia gyveno lietuviai anksčiau.', translation: 'Perguntar como viviam os lituanos aqui antigamente.', next: 'praeitis' }],
      },
      praeitis: {
        emoji: '🖼️',
        text: 'Ona veda Linu į nedidelę salę, kur ant sienų kabo senos nuotraukos: vaikai tautiniais drabužiais, choras, šokėjai. «Kadaise čia skambėjo lietuviškos dainos, veikė lietuviškos draugijos, – pasakoja ji. – Dabar jaunimas lietuviškai beveik nebekalba, bet šoka tautinius šokius ir per šventes kepa šakočius.» Ji parodo nuotrauką, kurioje ji pati, dar jauna, dainuoja chore antroje eilėje. Jos balse girdėti ir pasididžiavimas, ir liūdesys.',
        translation:
          'A Ona leva o Linu a um pequeno salão onde há fotos antigas nas paredes: crianças com trajes típicos, um coral, dançarinos. «Antigamente aqui soavam canções lituanas, funcionavam associações lituanas», conta ela. «Hoje a juventude quase não fala mais lituano, mas dança as danças folclóricas e, nas festas, faz šakotis.» Ela mostra uma foto em que ela mesma, ainda jovem, canta no coral, na segunda fila. Na voz dela se ouvem orgulho e tristeza ao mesmo tempo.',
        choices: [
          { text: 'Paklausti, ar ji norėtų, kad jaunimas vėl mokytųsi kalbos.', translation: 'Perguntar se ela gostaria que os jovens voltassem a aprender a língua.', next: 'noras' },
          {
            text: 'Pagirti ją, kad jos anūkai taip gerai kalba lietuviškai.',
            translation: 'Elogiá-la porque os netos dela falam lituano tão bem.',
            wrong: 'A dona Ona disse o contrário: hoje os jovens quase não falam mais lituano («beveik nebekalba») — mas dançam as danças folclóricas e fazem šakotis nas festas. A língua se perdeu mais depressa que as tradições.',
          },
        ],
      },
      noras: {
        emoji: '💭',
        text: 'Ona ilgai žiūri į nuotrauką. «Norėčiau, – sako ji tyliai. – Bet kalba gyva tik tol, kol ja kas nors kalba.» Paskui ji paklausia, ar Linu nenorėtų kartais ateiti ir pasikalbėti su jos proanūke Julija, kuri mokosi lietuvių kalbos internetu. «Jai bus smagiau mokytis, kai pamatys, kad net pingvinas moka», – mirkteli Ona. Ji jau ieško rankinėje popieriaus lapelio, kad užrašytų telefono numerį.',
        translation:
          'A Ona olha longamente para a foto. «Gostaria», diz ela baixinho. «Mas a língua só vive enquanto alguém a fala.» Depois pergunta se o Linu não gostaria de vir de vez em quando conversar com a bisneta dela, Julija, que está aprendendo lituano pela internet. «Vai ser mais divertido para ela quando vir que até um pinguim fala», pisca a Ona. Ela já está procurando na bolsa um pedaço de papel para anotar o telefone.',
        choices: [
          { text: 'Sutikti ir susitarti dėl kito sekmadienio.', translation: 'Aceitar e combinar para o domingo seguinte.', next: 'final_bom' },
          { text: 'Atsiprašyti, kad neturi laiko.', translation: 'Desculpar-se por não ter tempo.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '☕',
        text: 'Kitą sekmadienį Linu, Ona ir Julija sėdi prie stalo su kava ir šakočio gabalėliais. Julija kalba lietuviškai su portugališku akcentu, Ona ją taiso senoviškais žodžiais, o Linu – vadovėlio žodžiais, ir visi trys juokiasi iš savo skirtumų. «Štai matai, – sako Ona, – trys kartos, trys lietuvių kalbos, ir visos gyvos.» Julija pažada per Kalėdas parašyti proprosenelių kaimui laišką lietuviškai. Linu pagalvoja, kad Lietuva kartais būna ir São Paulo priemiestyje.',
        translation:
          'No domingo seguinte, o Linu, a Ona e a Julija estão à mesa com café e pedacinhos de šakotis. A Julija fala lituano com sotaque brasileiro, a Ona a corrige com palavras antigas, e o Linu, com palavras do livro didático — e os três riem das diferenças. «Está vendo», diz a Ona, «três gerações, três lituanos, e todos vivos.» A Julija promete escrever no Natal uma carta em lituano para a aldeia dos trisavós. O Linu pensa que às vezes a Lituânia fica também num bairro de São Paulo.',
        ending: { tone: 'bom', title: 'Três gerações, uma língua', message: 'Você entendeu o lituano da diáspora — o «tamsta», as palavras emprestadas — e ajudou a mantê-lo vivo.' },
      },
      final_neutro: {
        emoji: '🟠',
        text: 'Ona nusišypso ir sako, kad supranta: jaunimas visada skuba. Ji įspraudžia Linu į delną mažą gintaro gabalėlį, kurį jos motina atsivežė iš Lietuvos. «Kai turėsi laiko, sugrįžk», – sako ji ir lėtai nueina gatve. Pakeliui namo Linu jaučia, kad gintaras delne šiltesnis, nei turėtų būti. Jis nusprendžia, kad laiko vis dėlto reikės surasti.',
        translation:
          'A Ona sorri e diz que entende: os jovens estão sempre com pressa. Ela aperta na mão do Linu um pedacinho de âmbar que a mãe dela trouxe da Lituânia. «Quando tiver tempo, volte», diz, e vai embora devagar pela rua. No caminho de casa, o Linu sente que o âmbar na mão está mais quente do que deveria. Ele decide que, afinal, vai ter que arranjar tempo.',
        ending: { tone: 'neutro', title: 'Âmbar no bolso', message: 'Você ouviu a história da dona Ona, mas deixou passar a chance de ajudar a língua dela a continuar viva.' },
      },
    },
  },
  {
    id: 'lt-h39',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Pokalbis ant Parnidžio kopos',
    emoji: '🏜️',
    summary: 'Numa duna de Nida, o Linu conhece uma letã que fala lituano e descobre o que aproxima e o que separa as duas línguas bálticas vivas — e o que sobrou das que se extinguiram.',
    cultural_context:
      'O lituano e o letão são as duas únicas línguas bálticas vivas; o prussiano antigo se extinguiu por volta do começo do século XVIII, e o curônio, que deu nome ao istmo da Curlândia (Kuršių nerija), desapareceu antes disso. No letão, a tônica cai quase sempre na primeira sílaba, enquanto no lituano ela é livre e móvel.',
    start: 'start',
    glossary: [
      ['baltų kalbos', 'línguas bálticas'],
      ['latvių kalba', 'letão'],
      ['kirtis', 'acento tônico'],
      ['skiemuo', 'sílaba'],
      ['kuršiai', 'curônios, antigo povo báltico'],
      ['prūsai', 'prussianos antigos, povo báltico'],
      ['išnykusi kalba', 'língua extinta'],
      ['paldies (latv.)', 'obrigado (em letão; em lituano, «ačiū»)'],
    ],
    nodes: {
      start: {
        emoji: '💨',
        text: 'Nidoje, ant Parnidžio kopos, pučia toks vėjas, kad smėlis girgžda net tarp dantų. Iš vienos pusės matyti Kuršių marios, iš kitos – Baltijos jūra, o visai netoli į pietus prasideda Rusijos Kaliningrado sritis. Ant suoliuko sėdi mergina su kuprine ir garsiai kalba telefonu kalba, labai panašia į lietuvių, bet vis dėlto kitokia. Baigusi pokalbį, ji taisyklinga lietuvių kalba paklausia Linu: «Atsiprašau, ar nežinote, kiek laiko eiti iki Nidos centro?»',
        translation:
          'Em Nida, na duna de Parnidis, venta tanto que a areia range até entre os dentes. De um lado se vê a laguna da Curlândia, do outro o mar Báltico, e bem pertinho, ao sul, começa a região russa de Kaliningrado. Num banco está sentada uma moça de mochila, falando alto ao telefone numa língua muito parecida com o lituano, mas mesmo assim diferente. Ao terminar a ligação, ela pergunta ao Linu num lituano correto: «Com licença, o senhor sabe quanto tempo leva a pé até o centro de Nida?»',
        choices: [
          { text: 'Atsakyti ir paklausti, kokia kalba ji kalbėjo.', translation: 'Responder e perguntar que língua ela estava falando.', next: 'laima' },
          { text: 'Pasiūlyti kartu nusileisti nuo kopos.', translation: 'Propor descerem juntos da duna.', next: 'gidas' },
        ],
      },
      laima: {
        emoji: '🇱🇻',
        text: 'Mergina prisistato: ji Laima iš Rygos, o telefonu kalbėjo latviškai su mama. «Lietuviškai išmokau studijuodama Vilniuje, – paaiškina ji. – Mes, latviai ir lietuviai, kalbame vienintelėmis gyvomis baltų kalbomis, bet be mokymosi susikalbėti beveik neįmanoma.» Pasak jos, daug žodžių panašūs: lietuvių «saulė» latviškai yra «saule», o «diena» – ir latviškai «diena». Tačiau duoną latviai vadina «maize», o vandenį – «ūdens».',
        translation:
          'A moça se apresenta: é Laima, de Riga, e ao telefone falava letão com a mãe. «Aprendi lituano quando estudei em Vilnius», explica ela. «Nós, letões e lituanos, falamos as únicas línguas bálticas vivas, mas sem estudar é quase impossível a gente se entender.» Segundo ela, muitas palavras são parecidas: o lituano «saulė» (sol) em letão é «saule», e «diena» (dia) em letão também é «diena». Mas o pão os letões chamam de «maize», e a água, de «ūdens».',
        choices: [
          { text: 'Paklausti, kaip latviškai «ačiū».', translation: 'Perguntar como se diz «obrigado» em letão.', next: 'aciu' },
          {
            text: 'Nudžiugti, kad dabar galės be vargo skaityti latviškus laikraščius.',
            translation: 'Alegrar-se porque agora vai poder ler jornais letões sem esforço.',
            wrong: 'A Laima disse justamente que, sem estudar, lituanos e letões quase não se entendem: há palavras parecidas («saulė» / «saule»), mas muitas bem diferentes, como «duona» × «maize» (pão). São línguas irmãs, não a mesma língua.',
          },
        ],
      },
      aciu: {
        emoji: '🙏',
        text: '«Paldies», – nusišypso Laima, ir Linu nusijuokia, nes žodis visai nepanašus į lietuvišką. Ji paaiškina dar vieną skirtumą: latvių kalboje kirtis beveik visada tenka pirmajam skiemeniui, o lietuvių kalboje jis laisvas ir net to paties žodžio formose gali šokinėti iš vienos vietos į kitą. «Todėl mums, latviams, lietuvių kalba skamba kaip daina, kurios melodija nuolat keičiasi», – sako ji. Linu prisipažįsta, kad jam kirčiai – didžiausias galvos skausmas. Laima juokiasi, kad ir jai lygiai taip pat.',
        translation:
          '«Paldies», sorri a Laima, e o Linu cai na risada, porque a palavra não se parece nada com a lituana. Ela explica mais uma diferença: no letão a tônica cai quase sempre na primeira sílaba, enquanto no lituano ela é livre e, até nas formas de uma mesma palavra, pode pular de um lugar para outro. «Por isso, para nós, letões, o lituano soa como uma canção cuja melodia muda o tempo todo», diz ela. O Linu confessa que a tônica é a maior dor de cabeça dele. A Laima ri e diz que com ela é igualzinho.',
        choices: [{ text: 'Pasiūlyti kartu nusileisti į Nidą.', translation: 'Propor descerem juntos até Nida.', next: 'gidas' }],
      },
      gidas: {
        emoji: '🧭',
        text: 'Leisdamiesi nuo kopos, jie sutinka seną gidą su turistų grupe. Jis pasakoja, kad pusiasalis vadinamas Kuršių nerija nuo kuršių – baltų genties, kurios kalba seniai išnykusi. Dar toliau į pietus gyveno prūsai; jų kalba išnyko maždaug XVIII amžiaus pradžioje, o jų vardą perėmė vokiečių valstybė – Prūsija. «Prūsų kalbą šiandien pažįstame daugiausia iš kelių senų katekizmų ir žodynėlių», – priduria gidas. Laima tyliai sako Linu, kad kažkada baltų kalbų būta daug daugiau nei dvi.',
        translation:
          'Descendo da duna, eles encontram um guia idoso com um grupo de turistas. Ele conta que a península se chama Kuršių nerija por causa dos curônios, uma tribo báltica cuja língua se extinguiu há muito tempo. Mais ao sul ainda viviam os prussianos; a língua deles desapareceu por volta do começo do século XVIII, e o nome deles foi herdado por um Estado alemão, a Prússia. «Hoje conhecemos o prussiano principalmente por alguns catecismos e vocabulários antigos», acrescenta o guia. A Laima comenta baixinho com o Linu que um dia as línguas bálticas foram muito mais que duas.',
        choices: [
          { text: 'Paklausti Laimos, ar latviai jaučiasi lietuvių giminaičiais.', translation: 'Perguntar à Laima se os letões se sentem parentes dos lituanos.', next: 'gimines' },
          {
            text: 'Paklausti gido, kur Nidoje galima išgirsti kalbant prūsiškai.',
            translation: 'Perguntar ao guia onde em Nida se pode ouvir alguém falando prussiano.',
            wrong: 'O guia disse que o prussiano se extinguiu por volta do começo do século XVIII e hoje só é conhecido por alguns catecismos e vocabulários antigos. Não há falantes nativos para ouvir.',
          },
        ],
      },
      gimines: {
        emoji: '🤝',
        text: 'Laima pagalvoja ir sako: «Mes kaip pusbroliai: kai susitinkame, džiaugiamės, bet kiekvienas turi savo namus.» Ji primena, kad 1989 metų rugpjūčio 23-iąją Baltijos kelyje rankomis susikibo lietuviai, latviai ir estai – nuo Vilniaus per Rygą iki Talino. «Estų kalba visai kitokia, finougrų, bet tą dieną visi buvome viena grandinė», – sako ji. Saulė leidžiasi virš marių, ir smėlis ant kopų atrodo auksinis. Laima pasižiūri į laikrodį ir klausia, kokie Linu planai vakarui.',
        translation:
          'A Laima pensa e diz: «Somos como primos: quando nos encontramos, ficamos contentes, mas cada um tem sua casa.» Ela lembra que em 23 de agosto de 1989, na Via Báltica, lituanos, letões e estonianos deram as mãos, de Vilnius a Tallinn, passando por Riga. «O estoniano é bem diferente, é uma língua fino-úgrica, mas naquele dia éramos todos uma corrente só», diz ela. O sol se põe sobre a laguna, e a areia das dunas parece dourada. A Laima olha o relógio e pergunta quais são os planos do Linu para a noite.',
        choices: [
          { text: 'Pakviesti Laimą vakarienės ir pasimokyti vienas kito kalbos.', translation: 'Convidar a Laima para jantar e aprenderem a língua um do outro.', next: 'final_bom' },
          { text: 'Atsisveikinti ir skubėti į paskutinį autobusą.', translation: 'Despedir-se e correr para o último ônibus.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🐟',
        text: 'Vakare, restorane prie marių, jie užsisako rūkytos žuvies ir susitaria: kiekvienas žodis turi būti pasakytas dviem kalbomis. Laima moko Linu latviškų žodžių, o Linu jai parodo, kaip kirčiuoti lietuviškus «sūnus» ir «dievas» – žodžius tokius senus, kad primena sanskritą ir lotynų kalbą. Laima pastebi, kad latviai sūnų vadina visai kitaip, o dievą – beveik taip pat. Išsiskirdami jie abu sako tą patį, tik skirtingai: jis «ačiū», ji «paldies». Linu supranta, kad kalbų giminystė – tai ne vien panašumas, bet ir bendra istorija.',
        translation:
          'À noite, num restaurante à beira da laguna, eles pedem peixe defumado e combinam: cada palavra tem que ser dita nas duas línguas. A Laima ensina palavras letãs ao Linu, e o Linu mostra a ela como acentuar os lituanos «sūnus» (filho) e «dievas» (deus), palavras tão antigas que lembram o sânscrito e o latim. A Laima observa que os letões chamam o filho de um jeito bem diferente, mas deus quase igual. Na despedida, os dois dizem a mesma coisa, só que de jeitos diferentes: ele «ačiū», ela «paldies». O Linu entende que o parentesco das línguas não é só semelhança, mas também história em comum.',
        ending: { tone: 'bom', title: 'Primos bálticos', message: 'Você entendeu o que une e o que separa o lituano e o letão — e o que se perdeu com o prussiano e o curônio.' },
      },
      final_neutro: {
        emoji: '🚌',
        text: 'Linu atsisveikina ir bėga į autobusą, nes nori spėti į keltą Smiltynėje. Autobuse jis bando prisiminti latviškus žodžius, bet atsimena tik «paldies». Pro langą jis mato, kaip saulė leidžiasi už kopų, ir pagalvoja apie Laimą, kuri tikriausiai dabar sėdi prie marių. Jis net nepaklausė, kaip latviškai «iki pasimatymo». Kitą kartą, nusprendžia jis, kalbai skirs daugiau laiko nei tvarkaraščiui.',
        translation:
          'O Linu se despede e corre para o ônibus, porque quer pegar a balsa em Smiltynė. No ônibus tenta lembrar as palavras letãs, mas só se lembra de «paldies». Pela janela vê o sol se pondo atrás das dunas e pensa na Laima, que agora provavelmente está sentada à beira da laguna. Ele nem perguntou como se diz «até logo» em letão. Da próxima vez, decide, vai dar mais tempo à língua do que ao horário do ônibus.',
        ending: { tone: 'neutro', title: 'Só «paldies»', message: 'Você aprendeu as diferenças entre as línguas bálticas, mas trocou a conversa pelo horário do ônibus.' },
      },
    },
  },
  // ───────────────────────── C1.2 ─────────────────────────
  {
    id: 'lt-h40',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Trys langai Karaimų gatvėje',
    emoji: '🏰',
    summary: 'Em Trakai, o Linu ajuda uma museóloga a revisar um artigo científico sobre os caraítas e o castelo da ilha — e aprende a separar o fato da lenda com o modo relatado.',
    cultural_context:
      'Os caraítas (karaimai) são uma pequena comunidade de língua túrquica cujos antepassados, segundo a tradição, foram trazidos da Crimeia para Trakai pelo grão-duque Vytautas no fim do século XIV; os kibinai, pastéis recheados, viraram símbolo da cidade. O castelo da ilha, de tijolos vermelhos, fica no lago Galvė.',
    start: 'start',
    glossary: [
      ['netiesioginė nuosaka', 'modo relatado (o que se ouviu dizer, com particípio)'],
      ['pasakojama, kad…', 'conta-se que…'],
      ['pasak tradicijos', 'segundo a tradição'],
      ['liudininkų teigimu', 'segundo testemunhas'],
      ['šaltinis', 'fonte (histórica)'],
      ['karaimai', 'os caraítas'],
      ['kenesa', 'a casa de oração dos caraítas'],
      ['kibinai', 'pastéis de massa recheados, típicos dos caraítas'],
    ],
    nodes: {
      start: {
        emoji: '🏠',
        text: 'Trakuose, Karaimų gatvėje, stovi mediniai namai, atsukę į gatvę po tris langus. Linu atėjo čia su muziejininke Rūta, kuri rengia straipsnį mokslo žurnalui. «Pasakojama, kad kiekvienas namas turėjęs tris langus: vieną Dievui, vieną Vytautui ir vieną šeimai», – skaito ji iš savo užrašų. Paskui ji paaiškina, kad žodis «turėjęs» čia labai svarbus: tai netiesioginė nuosaka, kuria perteikiama tai, ką sako kiti, bet ko autorius pats negali patvirtinti. Tokiu būdu, sako ji, mokslininkas gali papasakoti legendą, nemeluodamas skaitytojui.',
        translation:
          'Em Trakai, na rua Karaimų, há casas de madeira que viram três janelas para a rua. O Linu veio com a museóloga Rūta, que está preparando um artigo para uma revista científica. «Conta-se que cada casa teria tido três janelas: uma para Deus, uma para Vytautas e uma para a família», lê ela nas anotações. Depois explica que a palavra «turėjęs» (teria tido) é muito importante aqui: é o modo relatado, com que se transmite o que os outros dizem, mas que o autor não pode confirmar por conta própria. Desse jeito, diz ela, o cientista consegue contar a lenda sem mentir para o leitor.',
        choices: [
          { text: 'Paklausti, kas yra karaimai.', translation: 'Perguntar quem são os caraítas.', next: 'karaimai' },
          {
            text: 'Užsirašyti kaip įrodytą faktą, kad langai buvo skirti Dievui, Vytautui ir šeimai.',
            translation: 'Anotar como fato comprovado que as janelas eram para Deus, Vytautas e a família.',
            wrong: 'O «turėjęs» (particípio no lugar do verbo conjugado) marca o modo relatado: «conta-se que teria tido». É lenda transmitida, não fato que a Rūta confirma. Anotar como fato comprovado seria errar justamente o que ela explicou.',
          },
        ],
      },
      karaimai: {
        emoji: '📜',
        text: 'Rūta pasakoja, kad karaimai – nedidelė tiurkų kilmės bendruomenė, kurios protėvius XIV amžiaus pabaigoje, kaip manoma, iš Krymo į Lietuvą atsikvietė didysis kunigaikštis Vytautas. Jie išsaugojo savo tikėjimą, maldos namus, vadinamus kenesa, ir savo kalbą, kuria šiandien kalba labai nedaug žmonių. «Straipsnyje negaliu parašyti, kad karaimai saugojo pilį, jei šaltiniai to tiksliai nepatvirtina, – sako ji. – Galiu parašyti: „Karaimai, kaip teigiama, saugoję pilį“, arba nurodyti, kas tai teigia.» Linu stebisi, kiek tikslumo reikia vienam sakiniui.',
        translation:
          'A Rūta conta que os caraítas são uma pequena comunidade de origem túrquica, cujos antepassados, pelo que se acredita, foram chamados da Crimeia para a Lituânia pelo grão-duque Vytautas no fim do século XIV. Eles preservaram a religião, a casa de oração, chamada kenesa, e a língua, que hoje pouquíssima gente fala. «No artigo não posso escrever que os caraítas guardavam o castelo se as fontes não confirmam isso com precisão», diz ela. «Posso escrever: „Os caraítas, segundo se afirma, teriam guardado o castelo“, ou indicar quem afirma isso.» O Linu se admira de quanta precisão uma única frase exige.',
        choices: [
          { text: 'Užsukti į kavinę paragauti kibinų.', translation: 'Passar num café para provar kibinai.', next: 'kibinai' },
          { text: 'Nueiti prie salos pilies.', translation: 'Ir até o castelo da ilha.', next: 'pilis' },
        ],
      },
      kibinai: {
        emoji: '🥟',
        text: 'Kavinėje jiems atneša karštų kibinų – pusmėnulio formos pyragėlių su aviena. Rūta aiškina, kad šiandien kibinai – vienas Trakų simbolių, o receptas atkeliavęs iš karaimų virtuvės. Ji parodo, kaip tą patį faktą parašytų skirtingi stiliai. Mokslo žurnale: «Kibinai laikomi tradiciniu karaimų patiekalu.» Laikraštyje – paprasčiau: «Kibinai – karaimų virtuvės pasididžiavimas.»',
        translation:
          'No café trazem para eles kibinai quentinhos — pasteizinhos em forma de meia-lua recheados de carneiro. A Rūta explica que hoje os kibinai são um dos símbolos de Trakai, e que a receita teria vindo da cozinha caraíta. Ela mostra como estilos diferentes escreveriam o mesmo fato. Numa revista científica: «Os kibinai são considerados um prato tradicional caraíta.» Num jornal, mais simples: «Os kibinai são o orgulho da cozinha caraíta.»',
        choices: [{ text: 'Nueiti prie salos pilies.', translation: 'Ir até o castelo da ilha.', next: 'pilis' }],
      },
      pilis: {
        emoji: '🧱',
        text: 'Jie eina mediniu tiltu į salos pilį – raudonų plytų gotikinę tvirtovę Galvės ežere. Ant suoliuko prie vandens Rūta perskaito savo straipsnio pradžią: «Pasak tradicijos, Vytautas Didysis gimęs Senuosiuose Trakuose, apie 1350 metus.» Ji paaiškina, kad tikslių to meto dokumentų apie Vytauto gimimą nėra, o datą ir vietą žinome iš vėlesnių šaltinių. Todėl ji ir pasirinko ne «gimė», o «gimęs». Ji klausia Linu, ar šis sakinys, jo nuomone, tinka moksliniam straipsniui, ar jį reikėtų keisti.',
        translation:
          'Eles atravessam a ponte de madeira até o castelo da ilha, uma fortaleza gótica de tijolos vermelhos no lago Galvė. Num banco à beira d’água, a Rūta lê o começo do artigo: «Segundo a tradição, Vytautas, o Grande, teria nascido em Senieji Trakai, por volta de 1350.» Ela explica que não há documentos exatos da época sobre o nascimento de Vytautas, e que a data e o lugar vêm de fontes posteriores. Por isso ela escolheu não «gimė» (nasceu), mas «gimęs» (teria nascido). Pergunta ao Linu se, na opinião dele, a frase serve para um artigo científico ou se deveria ser mudada.',
        choices: [
          { text: 'Pasakyti, kad sakinys tinka: «pasak tradicijos» ir netiesioginė nuosaka rodo, jog tai ne įrodytas faktas.', translation: 'Dizer que a frase serve: «segundo a tradição» e o modo relatado mostram que não é fato comprovado.', next: 'redagavimas' },
          { text: 'Pasiūlyti parašyti tvirčiau: «Vytautas Didysis gimė Senuosiuose Trakuose 1350 metais.»', translation: 'Sugerir escrever de modo mais firme: «Vytautas, o Grande, nasceu em Senieji Trakai em 1350.»', next: 'final_neutro' },
        ],
      },
      redagavimas: {
        emoji: '🔍',
        text: 'Rūta patenkinta ir paprašo padėti su kolegos tekstu. Jame parašyta: «Liudininkų teigimu, 1655 metais, per karą su Maskva, pilis buvusi smarkiai nuniokota.» Ji pabrėžia, kad šis sakinys sukonstruotas labai atsargiai: autorius remiasi kitų liudijimais ir pats neprisiima atsakomybės už kiekvieną detalę. «Studentai dažnai skaito tokius sakinius kaip paprastą pasakojimą, – atsidūsta ji. – O kaip jūs jį suprantate?» Linu dar kartą įdėmiai perskaito sakinį.',
        translation:
          'A Rūta fica satisfeita e pede ajuda com o texto de um colega. Nele está escrito: «Segundo testemunhas, em 1655, durante a guerra com Moscou, o castelo teria sido gravemente devastado.» Ela ressalta que a frase foi construída com muito cuidado: o autor se apoia no testemunho de outros e não assume por conta própria cada detalhe. «Os estudantes muitas vezes leem frases assim como um relato comum», suspira ela. «E você, como entende?» O Linu lê a frase mais uma vez com atenção.',
        choices: [
          { text: '«Autorius perteikia kitų liudijimus ir pats jų nepatvirtina.»', translation: '«O autor transmite o testemunho de outros e não o confirma por conta própria.»', next: 'final_bom' },
          {
            text: '«Autorius pats matė, kaip pilis buvo nuniokota.»',
            translation: '«O próprio autor viu o castelo ser devastado.»',
            wrong: '«Liudininkų teigimu» (segundo testemunhas) + «buvusi» (particípio) é modo relatado: o autor repassa o que outros contaram, sem assumir como testemunho próprio. E nenhum autor de hoje viu o castelo em 1655!',
          },
        ],
      },
      final_bom: {
        emoji: '📘',
        text: 'Rūta šypsosi ir įrašo Linu vardą į straipsnio padėkas. Vakare jie sėdi ant kranto ir žiūri, kaip pilies bokštai atsispindi ramiame ežere. «Moksle svarbu ne tik tai, ką žinai, bet ir kaip tiksliai pasakai, ko nežinai», – sako ji. Linu pagalvoja, kad lietuvių kalba tam turi net atskirą nuosaką. Pakeliui į autobusą jis dar nusiperka kibinų – šįkart jau be jokių abejonių dėl jų skonio.',
        translation:
          'A Rūta sorri e põe o nome do Linu nos agradecimentos do artigo. À noite, eles se sentam à margem e olham as torres do castelo refletidas no lago tranquilo. «Na ciência, importa não só o que você sabe, mas com que precisão você diz o que não sabe», diz ela. O Linu pensa que o lituano tem até um modo verbal inteiro para isso. A caminho do ônibus, ele ainda compra kibinai — desta vez sem nenhuma dúvida quanto ao sabor.',
        ending: { tone: 'bom', title: 'Nos agradecimentos', message: 'Você distinguiu o fato da lenda pelo modo relatado — «gimęs», «buvusi» — exatamente como um texto acadêmico exige.' },
      },
      final_neutro: {
        emoji: '✂️',
        text: 'Rūta papurto galvą: toks sakinys skamba tvirtai, bet mokslininkas negali teigti to, ko šaltiniai tiksliai nepatvirtina. «Vytauto gimimo data ir vieta žinomos tik iš tradicijos ir vėlesnių šaltinių», – ramiai paaiškina ji. Ji grąžina sakinį į ankstesnį variantą ir padėkoja Linu už pagalbą, nors šiek tiek šaltokai. Grįždamas tiltu, Linu mato turistų gidą, garsiai pasakojantį, kad Vytautas «tikrai» gimė čia pat. Jis supranta, kad akademinėje kalboje atsargumas – ne silpnybė, o sąžiningumas.',
        translation:
          'A Rūta balança a cabeça: uma frase assim soa firme, mas o cientista não pode afirmar o que as fontes não confirmam com precisão. «A data e o lugar do nascimento de Vytautas só são conhecidos pela tradição e por fontes posteriores», explica ela com calma. Ela volta a frase à versão anterior e agradece ao Linu pela ajuda, embora meio friamente. Voltando pela ponte, o Linu vê um guia de turistas contando em voz alta que Vytautas «com certeza» nasceu ali mesmo. Ele entende que, na linguagem acadêmica, cautela não é fraqueza, e sim honestidade.',
        ending: { tone: 'neutro', title: 'Certeza demais', message: 'Você trocou o modo relatado por uma afirmação firme — e, na ciência, dizer mais do que as fontes permitem é um erro.' },
      },
    },
  },
  {
    id: 'lt-h41',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Segė iš Kernavės kultūrinio sluoksnio',
    emoji: '🏺',
    summary: 'Nas escavações de Kernavė, o Linu encontra um broche medieval e aprende a descrevê-lo na linguagem seca e cautelosa de um relatório arqueológico.',
    cultural_context:
      'Kernavė, à beira do rio Neris, foi um dos centros mais importantes da Lituânia medieval e às vezes é chamada de primeira capital; seus cinco morros fortificados (piliakalniai) e a cidade enterrada no vale são Patrimônio Mundial da UNESCO desde 2004. A cidade foi incendiada pelos cavaleiros teutônicos em 1390 e nunca recuperou a importância antiga.',
    start: 'start',
    glossary: [
      ['piliakalnis', 'morro fortificado, antigo castro'],
      ['radinys', 'achado arqueológico'],
      ['segė', 'broche, fivela de roupa'],
      ['kasinėjimai', 'escavações'],
      ['kultūrinis sluoksnis', 'camada arqueológica (estrato com vestígios humanos)'],
      ['tikėtina', 'provavelmente, é provável'],
      ['datuotinas', 'que deve ser datado (particípio de necessidade)'],
      ['kryžiuočiai', 'os cavaleiros teutônicos'],
    ],
    nodes: {
      start: {
        emoji: '⛰️',
        text: 'Kernavėje, virš Neries slėnio, stūkso penki žole apaugę piliakalniai, tarsi milžinų kepurės. Linu jau savaitę dirba savanoriu archeologinėje ekspedicijoje, kuriai vadovauja archeologė Jurgita. Šįryt jis teptuku atsargiai valo žemę kasinėjimų plote, kai staiga po teptuku kažkas sublizga. Jo širdis pradeda smarkiai plakti, o ranka pati tiesiasi prie daikto. «Nejudink! – šūkteli Jurgita iš tolo. – Pirmiausia nufotografuosime ir užfiksuosime radinio vietą.»',
        translation:
          'Em Kernavė, acima do vale do Neris, erguem-se cinco morros fortificados cobertos de grama, como chapéus de gigantes. Há uma semana o Linu trabalha como voluntário numa expedição arqueológica chefiada pela arqueóloga Jurgita. Hoje de manhã ele limpa a terra da área de escavação com um pincel, com cuidado, quando de repente algo brilha debaixo do pincel. O coração dele dispara, e a mão já se estica sozinha em direção ao objeto. «Não mexa!», grita a Jurgita de longe. «Primeiro vamos fotografar e registrar o local do achado.»',
        choices: [
          { text: 'Palaukti, kol Jurgita užfiksuos radinį.', translation: 'Esperar a Jurgita registrar o achado.', next: 'radinys' },
          {
            text: 'Greitai paimti daiktą ir nunešti jį Jurgitai parodyti.',
            translation: 'Pegar o objeto depressa e levá-lo para mostrar à Jurgita.',
            wrong: 'A Jurgita gritou «Nejudink!» (não mexa!): antes de tirar qualquer peça do chão, é preciso fotografar e registrar o local exato. Arrancar o achado apaga informações que a arqueologia não recupera mais.',
          },
        ],
      },
      radinys: {
        emoji: '🔎',
        text: 'Jurgita išmatuoja gylį, nufotografuoja ir tik tada pincetu pakelia mažą žalvarinį papuošalą. «Tai, tikėtina, segė, – sako ji, apžiūrėdama jį per didinamąjį stiklą. – Panašios segės būdingos XIII–XIV amžiams, tačiau tiksliau datuoti galėsime tik laboratorijoje.» Ji paaiškina, kad tuo metu Kernavė buvo vienas svarbiausių Lietuvos centrų, todėl kartais net vadinama pirmąja sostine. Linu žiūri į žalią, laiko apgraužtą metalą ir negali patikėti, kad jį paskutinis lietė žmogus prieš septynis šimtus metų.',
        translation:
          'A Jurgita mede a profundidade, fotografa e só então ergue com uma pinça um pequeno enfeite de latão. «Isto provavelmente é um broche», diz ela, examinando-o com uma lupa. «Broches parecidos são típicos dos séculos XIII e XIV, mas uma datação mais precisa só vamos poder fazer no laboratório.» Ela explica que naquela época Kernavė era um dos centros mais importantes da Lituânia, e por isso às vezes é até chamada de primeira capital. O Linu olha para o metal esverdeado, roído pelo tempo, e não consegue acreditar que a última pessoa a tocá-lo viveu há setecentos anos.',
        choices: [
          { text: 'Padėti Jurgitai aprašyti radinį ekspedicijos dienyne.', translation: 'Ajudar a Jurgita a descrever o achado no diário da expedição.', next: 'dienynas' },
          { text: 'Paklausti, kodėl čia net penki piliakalniai.', translation: 'Perguntar por que aqui há cinco morros fortificados.', next: 'piliakalniai' },
        ],
      },
      piliakalniai: {
        emoji: '🏯',
        text: '«Piliakalniai – tai kalvos, ant kurių kadaise stovėjo medinės pilys», – aiškina Jurgita. Kernavėje jie sudarė vieną gynybinę sistemą, o apačioje, slėnyje, buvo įsikūręs amatininkų ir pirklių miestas. 1390 metais miestą sudegino kryžiuočiai, ir jis niekada nebeatgavo buvusios reikšmės. Anot Jurgitos, būtent todėl po žole iki šiol glūdi beveik nepaliestas viduramžių miestas – archeologams tikras lobis. «Kitose vietose miestai buvo perstatinėjami šimtus kartų, o čia laikas tarsi sustojo», – sako ji.',
        translation:
          '«Piliakalniai são colinas onde antigamente ficavam castelos de madeira», explica a Jurgita. Em Kernavė eles formavam um único sistema de defesa, e embaixo, no vale, ficava uma cidade de artesãos e mercadores. Em 1390, os cavaleiros teutônicos incendiaram a cidade, e ela nunca mais recuperou a importância de antes. Segundo a Jurgita, é justamente por isso que debaixo da grama ainda jaz uma cidade medieval quase intocada — um verdadeiro tesouro para os arqueólogos. «Em outros lugares as cidades foram reconstruídas centenas de vezes, mas aqui o tempo como que parou», diz ela.',
        choices: [{ text: 'Padėti aprašyti radinį dienyne.', translation: 'Ajudar a descrever o achado no diário.', next: 'dienynas' }],
      },
      dienynas: {
        emoji: '📓',
        text: 'Jurgita diktuoja, o Linu rašo: «Kasinėjimų plote Nr. 3, 0,4 m gylyje, rasta žalvarinė segė. Radinys, tikėtina, datuotinas XIII–XIV a. Kultūrinis sluoksnis ties radimo vieta neišjudintas.» Linu nustemba, kaip sausai skamba mokslinis tekstas, lyginant su tuo, ką jis jautė prieš valandą. «Mokslo kalboje nėra vietos žodžiams „stebuklinga“ ar „nuostabu“, – juokiasi Jurgita. – Bet širdyje gali džiaugtis kiek tik nori.» Ji paprašo Linu pabaigti įrašą vienu sakiniu apie radinio amžių.',
        translation:
          'A Jurgita dita, e o Linu escreve: «Na área de escavação n.º 3, a 0,4 m de profundidade, foi encontrado um broche de latão. O achado deve, provavelmente, ser datado dos séculos XIII–XIV. A camada arqueológica no local do achado não foi revolvida.» O Linu se espanta com o quanto o texto científico soa seco, comparado com o que ele sentiu uma hora antes. «Na linguagem científica não há lugar para palavras como „mágico“ ou „maravilhoso“», ri a Jurgita. «Mas no coração você pode se alegrar o quanto quiser.» Ela pede ao Linu que termine o registro com uma frase sobre a idade do achado.',
        choices: [
          { text: 'Parašyti: «Tikslus datavimas bus atliktas laboratorijoje.»', translation: 'Escrever: «A datação exata será feita no laboratório.»', next: 'toliau' },
          {
            text: 'Parašyti: «Segė neabejotinai pagaminta XIII amžiuje.»',
            translation: 'Escrever: «O broche foi, sem dúvida, feito no século XIII.»',
            wrong: 'O registro diz «tikėtina» (provavelmente) e «datuotinas XIII–XIV a.» — uma faixa de dois séculos, que só o laboratório vai poder precisar. Escrever «sem dúvida no século XIII» afirmaria o que ninguém sabe ainda.',
          },
        ],
      },
      toliau: {
        emoji: '🔥',
        text: 'Jurgita paaiškina, kad radinys bus nuvežtas į laboratoriją, nuvalytas, ištirtas ir galiausiai perduotas muziejui. Vakare ekspedicijos nariai susirenka prie laužo, ir ji paprašo Linu trumpai pristatyti dienos radinį kitiems savanoriams. Jie daugiausia studentai iš įvairių šalių, todėl kalbėti reikia aiškiai ir paprastai. Visi nekantriai laukia, o laužas traška, mėtydamas kibirkštis į tamsą. Linu turi nuspręsti, kaip papasakoti savo atradimą.',
        translation:
          'A Jurgita explica que o achado vai para o laboratório, onde será limpo e estudado, e no fim será entregue a um museu. À noite, os membros da expedição se reúnem em volta da fogueira, e ela pede ao Linu que apresente rapidamente o achado do dia aos outros voluntários. São, na maioria, estudantes de vários países, por isso é preciso falar de forma clara e simples. Todos esperam, ansiosos, e a fogueira estala, jogando faíscas na escuridão. O Linu precisa decidir como contar a sua descoberta.',
        choices: [
          { text: 'Pristatyti tiksliai: kas rasta, kur ir kad datavimas dar tik preliminarus.', translation: 'Apresentar com precisão: o que foi achado, onde, e que a datação ainda é preliminar.', next: 'final_bom' },
          { text: 'Pristatyti įspūdingai: kad jis rado kunigaikštienės segę.', translation: 'Apresentar de forma impressionante: que ele achou o broche de uma grã-duquesa.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🌙',
        text: 'Linu kalba trumpai ir tiksliai, o pabaigoje prisipažįsta, kad tai buvo pati įdomiausia jo gyvenimo akimirka. Studentai ploja, o Jurgita linkteli: «Tai buvo geriausias pranešimas šioje ekspedicijoje – ir moksliškas, ir žmogiškas.» Virš piliakalnių teka mėnulis, ir Linu galvoja apie tą nežinomą žmogų, kuris kadaise pametė segę. Galbūt jis irgi sėdėjo prie laužo ir žiūrėjo į tą patį slėnį. Tą naktį Linu užmiega su šypsena.',
        translation:
          'O Linu fala de forma curta e precisa, e no fim confessa que foi o momento mais interessante da vida dele. Os estudantes aplaudem, e a Jurgita concorda com a cabeça: «Foi a melhor apresentação desta expedição — científica e humana ao mesmo tempo.» A lua nasce sobre os morros, e o Linu pensa naquela pessoa desconhecida que um dia perdeu o broche. Talvez ela também tenha se sentado junto a uma fogueira, olhando o mesmo vale. Naquela noite o Linu dorme sorrindo.',
        ending: { tone: 'bom', title: 'Relatório exato', message: 'Você registrou o achado com a cautela da linguagem científica — «tikėtina», «datuotinas» — sem perder o encanto da descoberta.' },
      },
      final_neutro: {
        emoji: '👑',
        text: 'Studentai susidomėję klausosi, bet Jurgita susiraukia. Ji ramiai paaiškina, kad nėra jokių duomenų, jog segė priklausė kunigaikštienei, o tokios istorijos greitai pasklinda ir virsta „faktais“. «Archeologas turi saugoti ne tik radinius, bet ir tiesą apie juos», – sako ji. Linu gėdingai linkteli, o kitą dieną kasinėja ypač atsargiai. Vakare jis dienyne pasibraukia vieną žodį: «tikėtina».',
        translation:
          'Os estudantes ouvem interessados, mas a Jurgita franze a testa. Ela explica com calma que não há nenhum dado de que o broche tenha pertencido a uma grã-duquesa, e que histórias assim se espalham depressa e viram «fatos». «O arqueólogo tem que proteger não só os achados, mas também a verdade sobre eles», diz ela. O Linu concorda, envergonhado, e no dia seguinte escava com cuidado redobrado. À noite, sublinha uma palavra no diário: «tikėtina» (provavelmente).',
        ending: { tone: 'neutro', title: 'A grã-duquesa que não existiu', message: 'O achado era real, mas a história que você contou não — na arqueologia, o «provavelmente» faz parte da verdade.' },
      },
    },
  },
  {
    id: 'lt-h42',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Penkiolika minučių prie Pasvalio plento',
    emoji: '📰',
    summary: 'Estagiário num jornal de Panevėžys, o Linu escreve uma reportagem sobre o aniversário da Via Báltica com o depoimento de uma testemunha — e aprende as regras do texto jornalístico.',
    cultural_context:
      'Em 23 de agosto de 1989, cerca de dois milhões de pessoas deram as mãos numa corrente humana de mais de 600 km, de Vilnius a Tallinn passando por Riga: a Via Báltica (Baltijos kelias), que pedia a independência dos três países bálticos. A data marcava os 50 anos do Pacto Molotov-Ribbentrop, e a corrente se fechou às sete da noite.',
    start: 'start',
    glossary: [
      ['Baltijos kelias', 'a Via Báltica (1989)'],
      ['liudininkas, liudininkė', 'testemunha'],
      ['pasak (+ gen.)', 'segundo, de acordo com'],
      ['šaltinis', 'fonte'],
      ['antraštė', 'manchete, título'],
      ['įžanga', 'abertura, lide'],
      ['susikibti rankomis', 'dar-se as mãos'],
      ['redakcija', 'redação'],
    ],
    nodes: {
      start: {
        emoji: '🗞️',
        text: 'Panevėžio laikraščio redakcijoje kvepia kava ir spaustuvės dažais. Linu čia atlieka praktiką, ir vyriausiasis redaktorius Laimutis jam paveda pirmą rimtą užduotį: parašyti straipsnį Baltijos kelio metinių proga. «1989 metų rugpjūčio 23-iąją žmonės susikibo rankomis nuo Vilniaus iki Talino, ir grandinė ėjo pro Panevėžį, – sako jis. – Surask liudininką ir parašyk taip, kad skaitytojas pajustų tą dieną, bet nepamirštų faktų.» Jis paduoda Linu užrašų knygutę ir diktofoną. Linu jaučia, kad nuo šios užduoties priklauso, ar jam bus patikėta daugiau.',
        translation:
          'Na redação do jornal de Panevėžys há cheiro de café e de tinta de gráfica. O Linu faz estágio aqui, e o editor-chefe, Laimutis, lhe passa a primeira tarefa séria: escrever uma reportagem pelo aniversário da Via Báltica. «Em 23 de agosto de 1989, as pessoas deram as mãos de Vilnius a Tallinn, e a corrente passava por Panevėžys», diz ele. «Encontre uma testemunha e escreva de um jeito que o leitor sinta aquele dia, mas não esqueça os fatos.» Ele entrega ao Linu um bloquinho e um gravador. O Linu sente que desta tarefa depende se vão lhe confiar mais coisas.',
        choices: [
          { text: 'Pirmiausia paskaityti archyvą.', translation: 'Primeiro ler o arquivo.', next: 'archyvas' },
          { text: 'Iš karto ieškoti liudininko.', translation: 'Ir logo atrás de uma testemunha.', next: 'birute' },
        ],
      },
      archyvas: {
        emoji: '🗄️',
        text: 'Archyve Linu randa to meto laikraščių su nuotraukomis: ilgos žmonių eilės palei plentą, trispalvės, gėlės. Tuometiniuose straipsniuose rašoma, kad grandinėje stovėjo apie du milijonus žmonių, o jos ilgis siekė daugiau kaip šešis šimtus kilometrų. Linu pastebi, kad skirtingi šaltiniai skaičius pateikia šiek tiek skirtingai, todėl straipsnyje būtina nurodyti, iš kur jie paimti. Laimutis, pro šalį eidamas, pritaria: «Skaičius be šaltinio – tik gandas.» Paskui jis duoda Linu adresą moters, kuri tą dieną stovėjo prie pat miesto.',
        translation:
          'No arquivo, o Linu encontra jornais da época com fotos: filas compridas de gente ao longo da estrada, bandeiras tricolores, flores. Nos artigos de então se lê que na corrente havia cerca de dois milhões de pessoas e que ela tinha mais de seiscentos quilômetros. O Linu percebe que fontes diferentes dão números um pouco diferentes, por isso na reportagem é obrigatório indicar de onde foram tirados. O Laimutis, passando por ali, concorda: «Número sem fonte é só boato.» Depois dá ao Linu o endereço de uma mulher que naquele dia estava bem perto da cidade.',
        choices: [{ text: 'Nuvažiuoti pas liudininkę.', translation: 'Ir até a testemunha.', next: 'birute' }],
      },
      birute: {
        emoji: '👵',
        text: 'Liudininkė – pensininkė Birutė, gyvenanti prie pat kelio į Pasvalį. «Tą dieną su vyru ir vaikais stovėjome čia pat, prie šito plento, – pasakoja ji, rodydama pro langą. – Nieko nežinojome, ar pakaks žmonių, ir tik septintą valandą vakaro, kai visi susikibome rankomis, supratome, kad grandinė nenutrūko.» Ji nusišluosto akis ir sako, kad gražesnių penkiolikos minučių jos gyvenime nebuvo. Linu užrašo kiekvieną žodį, stengdamasis nepertraukti.',
        translation:
          'A testemunha é a aposentada Birutė, que mora bem na beira da estrada para Pasvalys. «Naquele dia, eu, meu marido e as crianças estávamos bem aqui, nesta estrada», conta ela, apontando pela janela. «A gente não sabia se ia ter gente suficiente, e só às sete da noite, quando todos demos as mãos, entendemos que a corrente não tinha se rompido.» Ela enxuga os olhos e diz que nunca teve na vida quinze minutos mais bonitos. O Linu anota cada palavra, tentando não interromper.',
        choices: [
          { text: 'Grįžti į redakciją ir rašyti.', translation: 'Voltar à redação e escrever.', next: 'rasymas' },
          {
            text: 'Užsirašyti, kad Birutė iš anksto žinojo, jog žmonių pakaks.',
            translation: 'Anotar que a Birutė sabia de antemão que haveria gente suficiente.',
            wrong: 'A Birutė disse o contrário: «Nieko nežinojome, ar pakaks žmonių» — não sabiam se haveria gente suficiente. Só às sete da noite, de mãos dadas, viram que a corrente não tinha se rompido.',
          },
        ],
      },
      rasymas: {
        emoji: '⌨️',
        text: 'Linu pradeda straipsnį: «Prieš trisdešimt septynerius metus panevėžietė Birutė stovėjo prie Pasvalio plento, susikibusi rankomis su nepažįstamaisiais.» Laimutis perskaito ir pagiria įžangą, tačiau pastebi vieną dalyką. «Kai rašai tai, ką tau papasakojo, turi aiškiai parodyti, kad tai jos žodžiai: „pasak Birutės“, „kaip prisimena liudininkė“, – sako jis. – Galima ir netiesiogine nuosaka: „grandinė, pasak jos, nenutrūkusi“.» Be to, jis primena, kad laikraštis rašo pagarbiai ir be šūkių, net apie tokias jaudinančias dienas.',
        translation:
          'O Linu começa a reportagem: «Há trinta e sete anos, a panevezense Birutė estava na estrada de Pasvalys, de mãos dadas com desconhecidos.» O Laimutis lê e elogia a abertura, mas repara numa coisa. «Quando você escreve o que te contaram, tem que mostrar claramente que são palavras dela: „segundo Birutė“, „como lembra a testemunha“», diz ele. «Também dá para usar o modo relatado: „a corrente, segundo ela, não teria se rompido“.» Além disso, lembra que o jornal escreve com respeito e sem palavras de ordem, mesmo sobre dias tão emocionantes.',
        choices: [{ text: 'Sugalvoti antraštę.', translation: 'Pensar na manchete.', next: 'antraste' }],
      },
      antraste: {
        emoji: '🖋️',
        text: 'Belieka sugalvoti antraštę. Laimutis sako, kad gera antraštė turi būti trumpa, tiksli ir niekada nemeluoti, net jei melas skambėtų gražiau. Linu vaikšto po redakciją, kramto pieštuką ir rašo variantus ant lapelių. Galiausiai lieka du. Laimutis sukryžiuoja rankas ir laukia.',
        translation:
          'Só falta pensar na manchete. O Laimutis diz que uma boa manchete tem que ser curta, exata e nunca mentir, mesmo que a mentira soasse mais bonita. O Linu anda pela redação, morde o lápis e escreve versões em papeizinhos. No fim, sobram duas. O Laimutis cruza os braços e espera.',
        choices: [
          { text: '«Penkiolika minučių, kurių Birutė nepamiršo»', translation: '«Quinze minutos que a Birutė não esqueceu»', next: 'final_bom' },
          { text: '«Tą dieną visa Lietuva verkė iš laimės»', translation: '«Naquele dia a Lituânia inteira chorou de felicidade»', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '📖',
        text: 'Laimutis šypteli: antraštė tiksli ir kartu jaudinanti, nes kalba apie vieną žmogų, o ne už visus iš karto. Straipsnis išspausdinamas šeštadienio numeryje su sena Birutės šeimos nuotrauka prie plento. Kitą dieną Birutė paskambina į redakciją ir sako, kad jos anūkai pirmą kartą paklausė, kaip ten viskas buvo. Laimutis paveda Linu dar vieną temą, šįkart jau be priežiūros. Linu supranta, kad geras žurnalistinis tekstas ne tik informuoja, bet ir sujungia kartas.',
        translation:
          'O Laimutis dá um meio sorriso: a manchete é exata e, ao mesmo tempo, comovente, porque fala de uma pessoa, e não por todo mundo de uma vez. A reportagem sai na edição de sábado, com uma foto antiga da família da Birutė na beira da estrada. No dia seguinte a Birutė liga para a redação e diz que os netos, pela primeira vez, perguntaram como tinha sido tudo aquilo. O Laimutis passa ao Linu mais uma pauta, desta vez sem supervisão. O Linu entende que um bom texto jornalístico não só informa, mas também une gerações.',
        ending: { tone: 'bom', title: 'Pauta nova', message: 'Você citou a fonte, marcou o que era depoimento e escolheu uma manchete exata — jornalismo de verdade.' },
      },
      final_neutro: {
        emoji: '✂️',
        text: 'Laimutis papurto galvą: «Iš kur žinai, kad visa Lietuva verkė? Kalbi už du milijonus žmonių.» Jis paaiškina, kad tokia antraštė skamba gražiai, bet yra apibendrinimas, kurio neįmanoma patikrinti. Straipsnis išspausdinamas su redaktoriaus antrašte, o Linu vardas lieka tik mažomis raidėmis apačioje. Vakare jis įsirašo į užrašų knygutę: „Rašyk tik tai, ką gali įrodyti.“ Kitą kartą, nusprendžia jis, antraštę tikrins taip pat griežtai kaip skaičius.',
        translation:
          'O Laimutis balança a cabeça: «Como você sabe que a Lituânia inteira chorou? Você está falando por dois milhões de pessoas.» Ele explica que uma manchete assim soa bonita, mas é uma generalização impossível de verificar. A reportagem sai com a manchete do editor, e o nome do Linu fica só em letrinhas miúdas lá embaixo. À noite, ele anota no bloquinho: «Escreva só o que você pode provar.» Da próxima vez, decide, vai checar a manchete com o mesmo rigor que os números.',
        ending: { tone: 'neutro', title: 'Manchete do editor', message: 'A reportagem era boa, mas a manchete generalizou o que ninguém pode verificar — no jornalismo, emoção não substitui fato.' },
      },
    },
  },
  // ───────────────────────── C2 ─────────────────────────
  {
    id: 'lt-h43',
    level: 'C2',
    cefr: 'C2',
    title: 'Šalis, kur miega kapuos didvyriai',
    emoji: '🪶',
    summary: 'Numa noite de chuva, no museu-casa de Maironis em Kaunas, uma guardiã idosa lê para o Linu os versos mais conhecidos do poeta e a balada de Jūratė e Kastytis.',
    cultural_context:
      'Maironis, pseudônimo do padre Jonas Mačiulis (1862–1932), é o grande poeta do renascimento nacional lituano; seu livro «Pavasario balsai» (Vozes da primavera), de 1895, marcou gerações, e a casa onde viveu, na praça da Prefeitura de Kaunas, é hoje o museu da literatura lituana. Seus versos «Lietuva brangi, mano tėvyne» viraram canção com música de Juozas Naujalis, e ele está sepultado junto ao muro da catedral de Kaunas.',
    start: 'start',
    glossary: [
      ['kapuos (= kapuose)', 'nos túmulos (locativo plural encurtado, poético)'],
      ['didvyris', 'herói'],
      ['tėvynė', 'pátria'],
      ['baladė', 'balada'],
      ['rankraštis', 'manuscrito'],
      ['atmintinai', 'de cor'],
      ['Perkūnas', 'Perkūnas, o deus do trovão báltico'],
      ['gintaras', 'âmbar'],
    ],
    nodes: {
      start: {
        emoji: '🏛️',
        text: 'Kauno senamiestyje, Rotušės aikštėje, stovi senas namas, kuriame kadaise gyveno kunigas ir poetas Jonas Mačiulis, visai Lietuvai žinomas Maironio vardu. Rudens vakarą Linu užsuka į muziejų paskutinis, kai prižiūrėtoja jau ruošiasi gesinti šviesas. Ji – žila, tiesios laikysenos moteris, vardu Teofilė, kuri, pamačiusi, kaip Linu žiūri į pageltusius rankraščius, nusprendžia muziejaus dar neuždaryti. «Užeikite, užeikite, – taria ji, – eilėraščiai nemėgsta skubos.» Ji atsiverčia seną knygą ir paklausia, ar Linu žino, kas buvo Maironis.',
        translation:
          'Na cidade velha de Kaunas, na praça da Prefeitura, fica uma casa antiga onde outrora morou o padre e poeta Jonas Mačiulis, conhecido na Lituânia inteira pelo nome de Maironis. Numa noite de outono, o Linu entra no museu por último, quando a guardiã já se prepara para apagar as luzes. Ela é uma senhora de cabelos brancos e postura ereta, chamada Teofilė, que, ao ver como o Linu olha para os manuscritos amarelados, decide não fechar o museu ainda. «Entre, entre», diz ela, «poemas não gostam de pressa.» Ela abre um livro antigo e pergunta se o Linu sabe quem foi Maironis.',
        choices: [
          { text: 'Prisipažinti, kad žino tik vardą, ir paprašyti papasakoti.', translation: 'Confessar que só conhece o nome e pedir que ela conte.', next: 'poetas' },
          { text: 'Paprašyti jos paskaityti ką nors balsu.', translation: 'Pedir que ela leia algo em voz alta.', next: 'skaito' },
        ],
      },
      poetas: {
        emoji: '📜',
        text: 'Teofilė pasakoja, kad Maironis gimė 1862 metais, o jo jaunystė prabėgo tais dešimtmečiais, kai lietuviškos knygos lotyniškomis raidėmis buvo draudžiamos. 1895 metais pasirodė jo rinkinys «Pavasario balsai», ir, anot jos, jaunimas tuos eilėraščius nusirašinėdavęs ranka ir mokydavęsis atmintinai. «Jis rašė apie Lietuvos praeitį, apie pilis ir kunigaikščius tada, kai pati Lietuva dar buvo tik svajonė, o ne valstybė žemėlapyje», – taria Teofilė. Ji priduria, kad poetas palaidotas prie Kauno katedros sienos, vos už kelių šimtų žingsnių nuo čia. Tada ji užsideda akinius ir atsiverčia knygą ten, kur įdėtas senas skirtukas.',
        translation:
          'A Teofilė conta que Maironis nasceu em 1862 e que a juventude dele se passou nas décadas em que os livros lituanos em letras latinas eram proibidos. Em 1895 saiu a coletânea «Pavasario balsai», e, segundo ela, os jovens copiavam aqueles poemas à mão e os decoravam. «Ele escrevia sobre o passado da Lituânia, sobre castelos e grão-duques, numa época em que a própria Lituânia ainda era só um sonho, e não um Estado no mapa», diz a Teofilė. Ela acrescenta que o poeta está sepultado junto ao muro da catedral de Kaunas, a poucas centenas de passos dali. Então põe os óculos e abre o livro onde há um marcador antigo.',
        choices: [{ text: 'Klausytis, ką ji skaitys.', translation: 'Ouvir o que ela vai ler.', next: 'skaito' }],
      },
      skaito: {
        emoji: '🕯️',
        text: 'Teofilė pakelia galvą ir, tarsi būtų tai kartojusi tūkstantį kartų, taria: «Lietuva brangi, mano tėvyne, šalis, kur miega kapuos didvyriai.» Jos balsas suvirpa ties paskutiniu žodžiu, ir tuščioje salėje pasidaro taip tylu, kad girdėti, kaip lietus barbena į langą. Ji paaiškina, kad šias eilutes kompozitorius Juozas Naujalis pavertė daina, kurią lietuviai iki šiol dainuoja per didžiąsias šventes. Tada ji atsisuka į Linu ir, lyg mokytoja per egzaminą, klausia, ar jis suprato, kur miega didvyriai. «Poezijoje žodžiai kartais sutrumpėja, kad tilptų į eilutę», – mįslingai priduria ji.',
        translation:
          'A Teofilė ergue a cabeça e, como se já tivesse repetido aquilo mil vezes, pronuncia: «Lituânia querida, minha pátria, terra onde dormem nos túmulos os heróis.» A voz dela treme na última palavra, e o salão vazio fica tão silencioso que se ouve a chuva batucando na janela. Ela explica que o compositor Juozas Naujalis transformou esses versos numa canção que os lituanos até hoje cantam nas grandes celebrações. Então se vira para o Linu e, como uma professora num exame, pergunta se ele entendeu onde dormem os heróis. «Na poesia, às vezes as palavras encolhem para caber no verso», acrescenta, enigmática.',
        choices: [
          { text: '«Kapuose – tik žodis sutrumpintas iki „kapuos“.»', translation: '«Nos túmulos — a palavra só foi encurtada para „kapuos“.»', next: 'kapai' },
          {
            text: '«Kepurėse – nes „kapuos“ skamba panašiai kaip kepurė.»',
            translation: '«Nos chapéus — porque „kapuos“ soa parecido com „kepurė“ (chapéu).»',
            wrong: '«Kapuos» é a forma poética, encurtada, de «kapuose» (nos túmulos), locativo plural de «kapas». O poeta corta o -e final para caber no ritmo do verso: os heróis dormem nos túmulos — o chapéu («kepurė») não tem nada a ver.',
          },
        ],
      },
      kapai: {
        emoji: '📖',
        text: 'Teofilė patenkinta linkteli: taip, «kapuos» – tai «kapuose», tik poetas nukirpo galūnę, kaip darydavo daugelis to meto rašytojų. Ji paaiškina, kad tokios trumpesnės vietininko formos – «namuos», «laukuos» – ir šiandien gyvos šnekamojoje kalboje, dainose ir tarmėse. «Maironis nesakė tiesiog „aš myliu Lietuvą“, jis ją piešė žodžiais – su Nemunu, piliakalniais ir Trakų pilimi», – sako ji, glostydama puslapį. Už lango lietus sustiprėja, bet nė vienas iš jų nė nemano eiti namo. Teofilė atsiverčia kitą puslapį – baladę «Jūratė ir Kastytis».',
        translation:
          'A Teofilė assente, satisfeita: sim, «kapuos» é «kapuose», só que o poeta cortou a terminação, como faziam muitos escritores da época. Ela explica que essas formas mais curtas do locativo — «namuos», «laukuos» — continuam vivas até hoje na fala coloquial, nas canções e nos dialetos. «Maironis não dizia simplesmente „eu amo a Lituânia“: ele a pintava com palavras — com o Nemunas, os morros fortificados e o castelo de Trakai», diz ela, alisando a página. Lá fora a chuva aperta, mas nenhum dos dois pensa em ir para casa. A Teofilė vira a página: a balada «Jūratė e Kastytis».',
        choices: [
          { text: 'Paprašyti papasakoti baladės siužetą.', translation: 'Pedir que ela conte o enredo da balada.', next: 'jurate' },
          { text: 'Padėkoti ir paklausti, ar galima ateiti rytoj.', translation: 'Agradecer e perguntar se pode voltar amanhã.', next: 'final_neutro' },
        ],
      },
      jurate: {
        emoji: '🌊',
        text: 'Teofilė pasakoja legendą, kurią Maironis apdainavo: jūrų deivė Jūratė gyveno gintaro rūmuose Baltijos dugne ir pamilo paprastą žveją Kastytį. Perkūnas, įtūžęs, kad nemirtinga deivė pamilo mirtingąjį, trenkė žaibu į rūmus, ir šie subyrėjo į šipulius. «Todėl, – baigia ji, – po audros pajūryje ir randame gintaro gabalėlių: tai Jūratės rūmų liekanos.» Ji tyliai priduria, kad per audrą jūra tarsi iki šiol dejuoja. Tada ji išsiima iš kišenės nedidelį gintaro gabalėlį, padeda jį Linu ant delno ir laukia, ką jis pasakys.',
        translation:
          'A Teofilė conta a lenda que Maironis cantou em versos: a deusa do mar Jūratė vivia num palácio de âmbar no fundo do Báltico e se apaixonou por um simples pescador, Kastytis. Perkūnas, furioso porque uma deusa imortal amou um mortal, lançou um raio no palácio, que se despedaçou em lascas. «Por isso», conclui ela, «depois das tempestades encontramos pedacinhos de âmbar na praia: são os restos do palácio de Jūratė.» Ela acrescenta baixinho que, nas tempestades, o mar parece gemer até hoje. Então tira do bolso um pedacinho de âmbar, põe na palma da mão do Linu e espera o que ele vai dizer.',
        choices: [
          { text: '«Tai ne akmenėlis, o istorijos gabalėlis.»', translation: '«Isto não é uma pedrinha, é um pedacinho de história.»', next: 'final_bom' },
          {
            text: '«Keista, kad Jūratė pati sudaužė savo rūmus.»',
            translation: '«Que estranho que a própria Jūratė tenha destruído o palácio.»',
            wrong: 'Na lenda, quem destrói o palácio de âmbar é Perkūnas, o deus do trovão, furioso porque uma deusa imortal amou um mortal. A Jūratė é a vítima, não a culpada.',
          },
        ],
      },
      final_bom: {
        emoji: '🟠',
        text: 'Teofilė nusišypso taip, kaip šypsomasi tik retam svečiui, ir sako, kad gintarą Linu gali pasilikti. Išėjęs į aikštę, jis mato, kad lietus liovėsi, o virš rotušės bokšto pro debesis spindi pilnatis. Pakeliui jis užsuka prie katedros ir ilgai stovi prie poeto kapo, nieko nesakydamas. Kišenėje gintaras šyla nuo jo delno, tarsi mažytė Jūratės rūmų šukė. Linu supranta, kad Maironio Lietuva gyva ne žemėlapyje, o žodžiuose, kuriuos žmonės nešiojasi širdyje.',
        translation:
          'A Teofilė sorri como só se sorri para um visitante raro e diz que o Linu pode ficar com o âmbar. Ao sair para a praça, ele vê que a chuva parou e que, sobre a torre da Prefeitura, a lua cheia brilha entre as nuvens. No caminho, ele passa pela catedral e fica muito tempo diante do túmulo do poeta, sem dizer nada. No bolso, o âmbar se aquece na mão dele, como um caquinho do palácio de Jūratė. O Linu entende que a Lituânia de Maironis vive não no mapa, mas nas palavras que as pessoas levam no coração.',
        ending: { tone: 'bom', title: 'O âmbar de Jūratė', message: 'Você decifrou o «kapuos» do verso e a lenda de Jūratė — e ganhou uma noite de poesia que não estava no programa do museu.' },
      },
      final_neutro: {
        emoji: '🌧️',
        text: 'Teofilė linkteli, bet jos akyse šmėsteli nusivylimas: rytoj muziejuje budės kita prižiūrėtoja. Ji uždaro knygą, užgesina šviesas, ir Linu išeina į lietingą aikštę. Kitą dieną muziejus pilnas moksleivių ekskursijų, ir niekas nebeskaito eilėraščių balsu. Linu vaikšto tarp vitrinų ir galvoja, kad kartais geriausia pamoka būna ta, kuri pasiūloma tik vieną vakarą. Senas priežodis sako: «Ką gali padaryti šiandien, neatidėk rytojui.»',
        translation:
          'A Teofilė assente, mas nos olhos dela passa uma sombra de decepção: amanhã quem vai estar de plantão no museu é outra guardiã. Ela fecha o livro, apaga as luzes, e o Linu sai para a praça chuvosa. No dia seguinte o museu está cheio de excursões escolares, e ninguém mais lê poemas em voz alta. O Linu anda entre as vitrines e pensa que às vezes a melhor lição é aquela que só é oferecida numa noite. Diz o velho ditado: «Não deixe para amanhã o que você pode fazer hoje.»',
        ending: { tone: 'neutro', title: 'Deixado para amanhã', message: 'Você entendeu o verso de Maironis, mas saiu antes da lenda — e certas leituras não se repetem.' },
      },
    },
  },
  {
    id: 'lt-h44',
    level: 'C2',
    cefr: 'C2',
    title: 'Maldaknygė, pernešta per Šešupę',
    emoji: '📕',
    summary: 'Em Kudirkos Naumiestis, na antiga fronteira com a Prússia, um velho professor mostra ao Linu o livro de orações que o bisavô, um knygnešys, contrabandeou pelo rio — e lê com ele Donelaitis e o hino de Kudirka.',
    cultural_context:
      'Depois da revolta de 1863, o Império Russo proibiu imprimir lituano em letras latinas (1864–1904); livros impressos na Prússia Oriental, sobretudo em Tilsit (Tilžė), cruzavam a fronteira escondidos pelos knygnešiai, os «carregadores de livros», hoje lembrados em 16 de março. Vincas Kudirka, autor do hino nacional, morreu em 1899 em Naumiestis, cidadezinha à beira do rio Šešupė que hoje leva o nome dele.',
    start: 'start',
    glossary: [
      ['knygnešys', 'carregador de livros, contrabandista de livros lituanos'],
      ['spaudos draudimas', 'proibição da imprensa (1864–1904)'],
      ['lotyniškos raidės', 'letras latinas'],
      ['maldaknygė', 'livro de orações'],
      ['svietas (sen.)', 'mundo (arcaico; hoje «pasaulis»)'],
      ['atkopti', 'subir de volta, escalar'],
      ['beraštis', 'analfabeto'],
      ['Kas skaito, rašo – duonos neprašo', 'Quem lê e escreve não pede pão'],
    ],
    nodes: {
      start: {
        emoji: '🌉',
        text: 'Kudirkos Naumiestis – mažas miestelis prie Šešupės, kuri kadaise skyrė Rusijos imperiją nuo Prūsijos. Linu atvyko čia pas mokytoją pensininką Antaną, kurio prosenelis, kaip pasakojama šeimoje, buvęs knygnešys. Senasis mokytojas pasitinka jį prie vartų, pasiramsčiuodamas lazda, ir, dar nespėjęs pasisveikinti, ištiesia jam aptriušusią knygelę juodais viršeliais. «Štai ką prosenelis nešė per upę maiše su kitomis knygomis, – taria jis. – Už tokią knygelę tada galėjai atsidurti kalėjime ar net Sibire.» Ant titulinio lapo Linu įžiūri žodį «Tilžėje» ir metus – 1893.',
        translation:
          'Kudirkos Naumiestis é uma cidadezinha à beira do Šešupė, o rio que outrora separava o Império Russo da Prússia. O Linu veio visitar o professor aposentado Antanas, cujo bisavô, como se conta na família, teria sido um knygnešys. O velho professor o recebe no portão, apoiado numa bengala, e, antes mesmo de cumprimentar, estende a ele um livrinho gasto de capa preta. «Foi isto que o meu bisavô levou pelo rio, num saco com outros livros», diz ele. «Por um livrinho desses, naquela época, você podia ir parar na prisão ou até na Sibéria.» Na folha de rosto, o Linu distingue a palavra «Tilžėje» (em Tilsit) e o ano: 1893.',
        choices: [
          { text: 'Paklausti, kodėl tokios knygos buvo draudžiamos.', translation: 'Perguntar por que livros assim eram proibidos.', next: 'draudimas' },
          { text: 'Paklausti apie prosenelį.', translation: 'Perguntar sobre o bisavô.', next: 'prosenelis' },
        ],
      },
      draudimas: {
        emoji: '🚫',
        text: 'Antanas atsisėda ant suoliuko po obelimi ir pradeda tarsi per pamoką. Po 1863 metų sukilimo carinė valdžia uždraudė spausdinti lietuviškas knygas lotyniškomis raidėmis; leista buvo spausdinti tik kirilica, bet žmonės tokių knygų nepirko ir nenorėjo. Keturiasdešimt metų, nuo 1864 iki 1904-ųjų, lietuviškos knygos buvo spausdinamos Prūsijoje, daugiausia Tilžėje, o paskui slapta gabenamos per sieną. «Uždrausta buvo ne kalba, o raidės, – pabrėžia Antanas, – bet be raidžių kalba lieka be knygų.» Ir, pasak jo, būtent knygnešiai tas raides išsaugojo savo nugaromis.',
        translation:
          'O Antanas se senta num banquinho debaixo da macieira e começa como numa aula. Depois da revolta de 1863, o governo tsarista proibiu imprimir livros lituanos em letras latinas; só era permitido o cirílico, mas o povo não comprava nem queria esses livros. Durante quarenta anos, de 1864 a 1904, os livros lituanos foram impressos na Prússia, sobretudo em Tilsit, e depois levados às escondidas pela fronteira. «Proibidas não eram a língua, eram as letras», frisa o Antanas, «mas sem letras a língua fica sem livros.» E, segundo ele, foram justamente os knygnešiai que salvaram essas letras nas próprias costas.',
        choices: [
          { text: 'Paklausti apie prosenelį.', translation: 'Perguntar sobre o bisavô.', next: 'prosenelis' },
          {
            text: 'Nustebti, kad tada lietuviškai apskritai buvo draudžiama kalbėti.',
            translation: 'Espantar-se porque naquela época era proibido até falar lituano.',
            wrong: 'O Antanas frisou: «Uždrausta buvo ne kalba, o raidės» — proibido não era falar lituano, e sim imprimi-lo em letras latinas. O governo tsarista só permitia livros lituanos em cirílico, que o povo rejeitou.',
          },
        ],
      },
      prosenelis: {
        emoji: '🌙',
        text: 'Antano prosenelis, pasakoja jis, buvęs paprastas ūkininkas, kuris naktimis brisdavęs per Šešupę ties seklia vieta, užsimetęs ant pečių maišą knygų. Kartą jį pagavę žandarai, knygas sudeginę, o jį patį įmetę į kalėjimą. «Bet vos išėjęs į laisvę, jis vėl ėjo per upę», – su pasididžiavimu sako Antanas, ir jo balsas, rodos, pajaunėja keliolika metų. Jis priduria, kad knygnešiai nešė ne tik maldaknyges, bet ir kalendorius, elementorius ir laikraščius, pavyzdžiui, «Varpą», kurį leido Vincas Kudirka. Paskui jis tyliai parodo lazda į miestelio aikštės pusę.',
        translation:
          'O bisavô do Antanas, conta ele, teria sido um simples lavrador que, à noite, costumava atravessar o Šešupė a vau num trecho raso, com um saco de livros nas costas. Certa vez os gendarmes o teriam pegado, queimado os livros e jogado ele na prisão. «Mas, mal saiu em liberdade, ele voltou a atravessar o rio», diz o Antanas com orgulho, e a voz dele parece rejuvenescer uns tantos anos. Ele acrescenta que os knygnešiai levavam não só livros de orações, mas também almanaques, cartilhas e jornais, como o «Varpas» (O Sino), que Vincas Kudirka publicava. Depois aponta em silêncio, com a bengala, para o lado da praça da cidade.',
        choices: [{ text: 'Paklausti, kas buvo Vincas Kudirka.', translation: 'Perguntar quem foi Vincas Kudirka.', next: 'kudirka' }],
      },
      kudirka: {
        emoji: '🎼',
        text: '«Kudirka buvo gydytojas, rašytojas ir mūsų himno autorius, – sako Antanas. – Jis mirė čia, Naumiestyje, 1899 metais, išsekintas džiovos, taip ir nesulaukęs spaudos draudimo panaikinimo.» Senasis mokytojas atsistoja, nusiima kepurę ir tyliai, beveik šnabždomis, pradeda: «Lietuva, Tėvyne mūsų, tu didvyrių žeme...» Linu, nors dar nemoka visų žodžių, atsistoja kartu su juo. Kai giesmė nutyla, Antanas dar ilgai stovi, žiūrėdamas į upę. Tada jis nueina į trobą ir grįžta su dar viena knyga.',
        translation:
          '«Kudirka foi médico, escritor e autor do nosso hino», diz o Antanas. «Ele morreu aqui, em Naumiestis, em 1899, consumido pela tuberculose, sem chegar a ver o fim da proibição da imprensa.» O velho professor se levanta, tira o boné e começa, baixinho, quase num sussurro: «Lituânia, nossa pátria, tu, terra de heróis...» O Linu, embora ainda não saiba todas as palavras, se levanta junto com ele. Quando o canto silencia, o Antanas ainda fica muito tempo de pé, olhando para o rio. Então entra em casa e volta com mais um livro.',
        choices: [{ text: 'Paklausti, kokia tai knyga.', translation: 'Perguntar que livro é aquele.', next: 'metai' }],
      },
      metai: {
        emoji: '🌅',
        text: 'Tai Kristijono Donelaičio «Metai». Antanas paaiškina, kad šią poemą apie būrų gyvenimą Prūsų Lietuvoje Donelaitis parašė dar XVIII amžiuje, o išspausdinta ji buvo tik 1818 metais, kai autoriaus seniai nebebuvo gyvo. Senasis mokytojas perskaito pirmąją eilutę taip, kaip skaitoma malda: «Jau saulelė vėl atkopdama budino svietą.» Paskui jis klausia Linu, kas vyksta šioje eilutėje, nes, anot jo, joje sutilpęs visas lietuviškas pavasaris. «Svietas – senas žodis, šiandien sakytume „pasaulis“», – pamokomai priduria jis.',
        translation:
          'São «As Estações» (Metai), de Kristijonas Donelaitis. O Antanas explica que Donelaitis escreveu esse poema sobre a vida dos camponeses na Lituânia prussiana ainda no século XVIII, mas ele só foi impresso em 1818, quando o autor já tinha morrido havia muito tempo. O velho professor lê o primeiro verso como quem reza: «Já o solzinho, subindo de novo, despertava o mundo.» Depois pergunta ao Linu o que acontece nesse verso, porque, segundo ele, nele cabe toda a primavera lituana. «„Svietas“ é palavra antiga; hoje diríamos „pasaulis“», acrescenta, em tom de professor.',
        choices: [
          { text: '«Pavasario saulė grįžta, kopia vis aukščiau ir žadina pasaulį.»', translation: '«O sol da primavera volta, sobe cada vez mais e acorda o mundo.»', next: 'patarle' },
          {
            text: '«Saulė leidžiasi ir užmigdo pasaulį žiemai.»',
            translation: '«O sol se põe e faz o mundo adormecer para o inverno.»',
            wrong: '«Atkopdama» é «subindo de volta» (de «atkopti», escalar) e «budino» é «despertava». Donelaitis abre «As Estações» com o sol da primavera voltando a subir e acordando o mundo («svietas», palavra antiga para «pasaulis») — o contrário de se pôr e adormecer.',
          },
        ],
      },
      patarle: {
        emoji: '🍞',
        text: 'Antanas užverčia knygą ir sako, kad jo prosenelis pats buvęs beraštis, bet savo vaikus išmokęs skaityti iš tų pačių kontrabandinių knygų. «Namuose jis mėgdavo kartoti: „Kas skaito, rašo – duonos neprašo“», – šypteli senasis mokytojas. Jis tyliai priduria, kad šiandien knygynai pilni knygų, o jaunimas jų vis mažiau skaito, ir kad tai jam skaudžiau už bet kokį draudimą. Tada jis pažvelgia į Linu ir paklausia, ar šis nenorėtų pasiimti maldaknygės, nes jo paties vaikai gyvena toli ir jos nesaugos. Linu jaučia, kad tai ne dovana, o prašymas.',
        translation:
          'O Antanas fecha o livro e diz que o bisavô era analfabeto, mas teria ensinado os filhos a ler com aqueles mesmos livros contrabandeados. «Em casa ele gostava de repetir: „Quem lê e escreve não pede pão“», sorri o velho professor. Ele acrescenta baixinho que hoje as livrarias estão cheias de livros, e os jovens leem cada vez menos, e que isso dói nele mais do que qualquer proibição. Então olha para o Linu e pergunta se ele não gostaria de levar o livro de orações, porque os filhos dele moram longe e não vão guardá-lo. O Linu sente que não é um presente, é um pedido.',
        choices: [
          { text: 'Pasiūlyti knygą perduoti miestelio bibliotekai, kad ją matytų visi.', translation: 'Propor entregar o livro à biblioteca da cidade, para que todos o vejam.', next: 'final_bom' },
          { text: 'Priimti knygą ir išsivežti ją su savimi.', translation: 'Aceitar o livro e levá-lo consigo.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🏛️',
        text: 'Antanas ilgai tyli, o paskui jo veidas nušvinta: apie tai jis niekada nebuvo pagalvojęs. Kitą savaitę jie kartu nuneša maldaknygę į biblioteką, ir bibliotekininkė pažada išstatyti ją vitrinoje kovo 16-ąją, Knygnešio dieną. Po stiklu padedama kortelė su prosenelio vardu ir užrašu: «Nešė per Šešupę». Antanas sako, kad dabar gali ramiai miegoti, nes knyga vėl keliauja pas žmones. Linu pagalvoja, kad knygnešio kelias baigiasi ne tada, kai knyga pasiekia namus, o tada, kai ją kas nors perskaito.',
        translation:
          'O Antanas fica muito tempo calado, e depois o rosto dele se ilumina: nunca tinha pensado nisso. Na semana seguinte, os dois levam juntos o livro de orações à biblioteca, e a bibliotecária promete expô-lo numa vitrine no dia 16 de março, o Dia do Knygnešys. Sob o vidro vai um cartão com o nome do bisavô e a inscrição: «Levou-o pelo Šešupė». O Antanas diz que agora pode dormir tranquilo, porque o livro volta a viajar até as pessoas. O Linu pensa que o caminho de um knygnešys não termina quando o livro chega a uma casa, mas quando alguém o lê.',
        ending: { tone: 'bom', title: 'Dia do Knygnešys', message: 'Você entendeu que o proibido eram as letras, não a língua, leu Donelaitis no original — e devolveu o livro contrabandeado aos leitores.' },
      },
      final_neutro: {
        emoji: '📦',
        text: 'Linu priima knygą ir padėkoja, o Antanas atsisveikina su juo prie vartų. Kelyje namo Linu vis žiūri į juodus viršelius ir galvoja, kad knyga, kuri tiek kartų perėjo per upę, dabar keliauja dar toliau nuo savo krašto. Namie jis pastato ją lentynoje tarp vadovėlių. Kartais jis ją atsiverčia, bet niekas kitas jos nemato. Jo vis neapleidžia jausmas, kad knygnešio žygį reikėjo pratęsti kitaip.',
        translation:
          'O Linu aceita o livro e agradece, e o Antanas se despede dele no portão. No caminho de casa, o Linu olha e olha para a capa preta e pensa que o livro, que tantas vezes atravessou o rio, agora viaja para ainda mais longe da sua terra. Em casa, ele o põe na estante, entre os livros didáticos. De vez em quando o abre, mas ninguém mais o vê. Não o larga a sensação de que a jornada do knygnešys deveria ter continuado de outro jeito.',
        ending: { tone: 'neutro', title: 'Livro na estante', message: 'Você guardou o livro com carinho, mas um livro contrabandeado para ser lido merecia voltar aos leitores.' },
      },
    },
  },
  {
    id: 'lt-h45',
    level: 'C2',
    cefr: 'C2',
    title: 'Sodauto prie senosios klėties',
    emoji: '🎶',
    summary: 'No museu ao ar livre de Rumšiškės, três cantoras de sutartinės chamam o Linu para cantar com elas — e entre canções da arruda e provérbios, ele descobre que a dissonância é de propósito.',
    cultural_context:
      'As sutartinės, cantos polifônicos a duas, três ou quatro vozes, em que as vozes se chocam de propósito, sobreviveram sobretudo no nordeste da Aukštaitija e entraram em 2010 na lista do Patrimônio Cultural Imaterial da UNESCO. O Museu ao Ar Livre de Rumšiškės, perto de Kaunas, reúne casas de fazenda trazidas de todas as regiões da Lituânia.',
    start: 'start',
    glossary: [
      ['sutartinė', 'canto polifônico tradicional lituano'],
      ['priedainis', 'refrão'],
      ['skudučiai', 'flautas de pã lituanas'],
      ['rūtų vainikas', 'coroa de arruda (símbolo da moça solteira)'],
      ['patarlė', 'provérbio'],
      ['Obuolys nuo obels netoli rieda', 'A maçã não rola longe da macieira (filho de peixe, peixinho é)'],
      ['Tyli kiaulė gilią vagą knisa', 'O porco calado cava o sulco fundo (quem fica quieto faz das suas)'],
      ['Kas kitam duobę kasa, tas pats į ją įkrenta', 'Quem cava um buraco para o outro cai nele'],
    ],
    nodes: {
      start: {
        emoji: '🏡',
        text: 'Rumšiškėse, didžiuliame liaudies buities muziejuje prie Kauno marių, sekmadienio popietę tvyro šieno ir dūmų kvapas. Tarp senųjų sodybų, perkeltų čia iš visų Lietuvos kraštų, Linu išgirsta keistą, lyg varpų gaudesį primenantį giedojimą. Prie klėties stovi trys moterys lininiais drabužiais ir gieda, bet kiekviena tarsi savo melodiją, o balsai susiduria taip, kad net ausyse suskamba. Vis kartojasi keistas žodis «sodauto», kurio Linu neranda jokiame žodyne. Kai giesmė baigiasi, vyriausioji moteris, vardu Uršulė, pamoja jam ranka.',
        translation:
          'Em Rumšiškės, o enorme museu ao ar livre à beira do reservatório de Kaunas, numa tarde de domingo paira um cheiro de feno e fumaça. Entre as antigas casas de fazenda, trazidas para cá de todas as regiões da Lituânia, o Linu ouve um canto estranho, que lembra o dobre de sinos. Junto a um celeiro, três mulheres em roupas de linho cantam, mas cada uma parece cantar a sua própria melodia, e as vozes se chocam de um jeito que chega a zumbir nos ouvidos. Repete-se sem parar uma palavra estranha, «sodauto», que o Linu não encontra em dicionário nenhum. Quando o canto termina, a mais velha, chamada Uršulė, acena para ele.',
        choices: [
          { text: 'Prieiti ir paklausti, kas čia buvo giedama.', translation: 'Aproximar-se e perguntar o que estavam cantando.', next: 'sutartines' },
          {
            text: 'Mandagiai pasakyti moterims, kad jos, rodos, susipainiojo ir gieda netaisyklingai.',
            translation: 'Dizer educadamente às mulheres que elas parecem ter se atrapalhado e estão cantando errado.',
            wrong: 'Nas sutartinės as vozes se chocam de propósito, em intervalos «ásperos» que soam como sinos — foi isso que o Linu ouviu. Não é erro: é justamente a estética desse canto polifônico lituano, Patrimônio Imaterial da UNESCO.',
          },
        ],
      },
      sutartines: {
        emoji: '🎵',
        text: '«Tai sutartinė, – šypsosi Uršulė. – Žodis kilęs iš „sutarti“, tai yra sutikti, derėti, nors mūsų balsai, kaip girdėjai, lyg ir nesutaria.» Ji paaiškina, kad sutartinės giedamos dviem, trimis ar keturiais balsais, kurie vienas su kitu tarsi ginčijasi ir kartu susipina, o tokie žodžiai kaip «sodauto» ar «lylio» – tai priedainiai, kurių prasmė seniai pasimiršusi, o gal jos niekada ir nebuvo. Anot jos, sutartinės daugiausia išliko šiaurės rytų Aukštaitijoje, o 2010 metais jos buvo įrašytos į UNESCO nematerialaus kultūros paveldo sąrašą. «Senovėje jas giedodavo moterys, o vyrai sutartines grodavo ir skudučiais», – priduria ji. Paskui ji netikėtai paklausia, ar Linu nenorėtų pabandyti.',
        translation:
          '«É uma sutartinė», sorri a Uršulė. «A palavra vem de „sutarti“, isto é, concordar, combinar — embora as nossas vozes, como você ouviu, pareçam não combinar.» Ela explica que as sutartinės se cantam a duas, três ou quatro vozes, que como que discutem entre si e ao mesmo tempo se entrelaçam, e que palavras como «sodauto» ou «lylio» são refrões cujo sentido se perdeu há muito tempo — ou que talvez nunca tenham tido sentido. Segundo ela, as sutartinės sobreviveram sobretudo no nordeste da Aukštaitija, e em 2010 entraram na lista do Patrimônio Cultural Imaterial da UNESCO. «Antigamente quem as cantava eram as mulheres, mas os homens também as tocavam nas flautas de pã, os skudučiai», acrescenta. Depois, de repente, pergunta se o Linu não gostaria de tentar.',
        choices: [
          { text: 'Sutikti ir pabandyti giedoti kartu.', translation: 'Aceitar e tentar cantar junto.', next: 'giedojimas' },
          { text: 'Nedrąsiai atsisakyti ir paprašyti geriau padainuoti paprastą dainą.', translation: 'Recusar, tímido, e pedir que cantem antes uma canção simples.', next: 'dainos' },
        ],
      },
      giedojimas: {
        emoji: '🔔',
        text: 'Uršulė pastato Linu tarp savęs ir savo dukters Elzbietos ir liepia kartoti tik vieną trumpą frazę, nepaisant to, ką gieda kitos. Pirmą kartą jis nuslysta į kaimynės melodiją, antrą kartą nutyla vidury žodžio, bet trečią kartą jo balsas atsilaiko, ir staiga jis išgirsta tą patį varpų gaudesį, tik dabar – iš vidaus. «Matai, – sako Uršulė, – sutartinėje kiekvienas turi laikytis savo, bet klausytis kitų, antraip giesmė subyra.» Elzbieta, juokdamasi, priduria, kad tai tinka ne tik giedant, bet ir gyvenant. Linu šypsosi ir galvoja, kad niekada nebuvo taip arti kažko, kas senesnis už pačias pilis.',
        translation:
          'A Uršulė põe o Linu entre ela e a filha, Elzbieta, e manda que ele repita só uma frase curta, sem ligar para o que as outras cantam. Na primeira vez ele escorrega para a melodia da vizinha; na segunda, se cala no meio da palavra; mas na terceira a voz dele se aguenta, e de repente ele ouve o mesmo dobre de sinos, só que agora de dentro. «Está vendo», diz a Uršulė, «na sutartinė cada um tem que se manter no seu, mas ouvir os outros, senão o canto desmorona.» A Elzbieta, rindo, acrescenta que isso vale não só para cantar, mas também para viver. O Linu sorri e pensa que nunca esteve tão perto de algo mais antigo que os próprios castelos.',
        choices: [{ text: 'Paprašyti, kad jos padainuotų ir paprastą dainą.', translation: 'Pedir que cantem também uma canção simples.', next: 'dainos' }],
      },
      dainos: {
        emoji: '🌿',
        text: 'Uršulė užtraukia lėtą dainą apie mergelę, kuri darželyje augina rūtas, ir kitos moterys tyliai pritaria. Ji paaiškina, kad rūta lietuvių dainose – mergystės ženklas, o rūtų vainikas nuimamas vestuvėse, kai jaunoji tampa marčia. Pasak jos, tautosakininkai užrašė dešimtis tūkstančių dainų, ir dauguma jų buvo dainuojamos ne scenoje, o prie darbo – ravint, pjaunant, audžiant. «Daina buvo ir laikraštis, ir laiškas, ir malda», – sako ji. Paskui, žiūrėdama į dukrą Elzbietą, kuri dainuoja lygiai taip pat kaip ji, ištaria patarlę: «Obuolys nuo obels netoli rieda.»',
        translation:
          'A Uršulė puxa uma canção lenta sobre uma mocinha que cultiva arruda no jardim, e as outras mulheres a acompanham baixinho. Ela explica que, nas canções lituanas, a arruda é o sinal da moça solteira, e a coroa de arruda é tirada no casamento, quando a noiva passa a ser nora. Segundo ela, os folcloristas registraram dezenas de milhares de canções, e a maioria delas era cantada não no palco, mas no trabalho: capinando, ceifando, tecendo. «A canção era jornal, carta e oração», diz ela. Depois, olhando para a filha, Elzbieta, que canta igualzinho a ela, solta um provérbio: «A maçã não rola longe da macieira.»',
        choices: [
          { text: '«Taigi dukra – kaip motina.»', translation: '«Ou seja, a filha é como a mãe.»', next: 'patarles' },
          {
            text: '«Taigi šiemet obuolių derlius bus prastas.»',
            translation: '«Ou seja, este ano a colheita de maçãs vai ser fraca.»',
            wrong: '«Obuolys nuo obels netoli rieda» (a maçã não rola longe da macieira) é provérbio, não previsão de colheita: os filhos saem parecidos com os pais. A Uršulė falava da filha, que canta igualzinho a ela.',
          },
        ],
      },
      patarles: {
        emoji: '💬',
        text: 'Uršulė juokiasi ir sako, kad lietuviai patarlėmis kalba tada, kai nori pasakyti daug, o žodžių sugaišti mažai. Ji pažeria dar kelias: «Tyli kiaulė gilią vagą knisa» – apie tuos, kurie tylomis daro savo, ir «Kas kitam duobę kasa, tas pats į ją įkrenta» – apie piktus darbus, kurie sugrįžta. Elzbieta priduria, kad jos močiutė be patarlės nepasakydavusi nė vieno sakinio. Saulė jau leidžiasi už senųjų klėčių, ir moterys ruošiasi paskutinei sutartinei. Uršulė ištiesia Linu ranką ir klausia, ar jis liks.',
        translation:
          'A Uršulė ri e diz que os lituanos falam por provérbios quando querem dizer muito gastando poucas palavras. Ela solta mais alguns: «O porco calado cava o sulco fundo» — sobre quem faz das suas em silêncio — e «Quem cava um buraco para o outro cai nele» — sobre as maldades que voltam. A Elzbieta acrescenta que a avó dela, pelo que contam, não dizia uma frase sequer sem provérbio. O sol já se põe atrás dos velhos celeiros, e as mulheres se preparam para a última sutartinė. A Uršulė estende a mão ao Linu e pergunta se ele vai ficar.',
        choices: [
          { text: 'Likti ir giedoti paskutinę sutartinę kartu.', translation: 'Ficar e cantar a última sutartinė junto.', next: 'final_bom' },
          { text: 'Atsisveikinti, nes jau eina paskutinis autobusas į Kauną.', translation: 'Despedir-se, porque o último ônibus para Kaunas já vai sair.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        emoji: '🌾',
        text: 'Keturi balsai susipina virš klėties stogo, ir Linu šįkart nė karto nesuklysta, tarsi jo balsas visada būtų žinojęs savo vietą. Kai giesmė baigiasi, prie tvoros sustoję keli užsieniečiai turistai ima ploti, o Uršulė juokiasi, kad dabar jos ansamblis tarptautinis. Atsisveikindama ji įdeda jam į delną rūtos šakelę ir sako: «Kad nepamirštum: kiekvienas balsas laikosi savo, bet gieda su kitais.» Pakeliui į autobusą Linu dar ilgai niūniuoja «sodauto», nors ir nežino, ką tas žodis reiškia. Galbūt, pagalvoja jis, kai kurie žodžiai tam ir yra, kad būtų giedami, o ne verčiami.',
        translation:
          'Quatro vozes se entrelaçam sobre o telhado do celeiro, e desta vez o Linu não erra nenhuma vez, como se a voz dele sempre tivesse sabido o seu lugar. Quando o canto termina, alguns turistas estrangeiros parados junto à cerca começam a aplaudir, e a Uršulė ri, dizendo que agora o grupo dela é internacional. Na despedida, ela põe na mão dele um raminho de arruda e diz: «Para você não esquecer: cada voz se mantém no seu, mas canta com os outros.» A caminho do ônibus, o Linu passa muito tempo cantarolando «sodauto», embora não saiba o que a palavra quer dizer. Talvez, pensa ele, algumas palavras existam justamente para serem cantadas, e não traduzidas.',
        ending: { tone: 'bom', title: 'Uma voz no coro', message: 'Você entendeu que a dissonância da sutartinė é arte, decifrou os provérbios — e cantou com as guardiãs de uma tradição de séculos.' },
      },
      final_neutro: {
        emoji: '🚌',
        text: 'Uršulė linkteli ir palinki jam laimingos kelionės, o moterys vėl susistoja prie klėties. Jau eidamas takeliu, Linu išgirsta paskutinę sutartinę ir stabteli, bet autobusas nelaukia. Autobuse jis bando prisiminti savo frazę, tačiau be kitų balsų ji skamba plokščiai ir keistai. Tada jis supranta, ką reiškė Uršulės žodžiai: sutartinė vienam balsui neegzistuoja. Jis nusprendžia kitą sekmadienį grįžti į Rumšiškes anksčiau ir be jokio tvarkaraščio.',
        translation:
          'A Uršulė assente e lhe deseja boa viagem, e as mulheres voltam a se posicionar junto ao celeiro. Já no caminho, o Linu ouve a última sutartinė e para por um instante, mas o ônibus não espera. No ônibus ele tenta lembrar a sua frase, mas sem as outras vozes ela soa chocha e estranha. Então entende o que queriam dizer as palavras da Uršulė: a sutartinė não existe para uma voz só. Ele decide voltar a Rumšiškės no domingo seguinte, mais cedo e sem horário nenhum.',
        ending: { tone: 'neutro', title: 'Uma voz sozinha', message: 'Você aprendeu o que é uma sutartinė, mas saiu antes do último canto — e ela não existe para uma voz só.' },
      },
    },
  },
];
