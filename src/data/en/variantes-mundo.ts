import type { LanguageVariant } from '../types';
import { ipaEnDe } from './tracos';

/**
 * Os dialetos do inglês fora dos EUA, do Reino Unido e da Irlanda (decisão do dono, 10/10/2026):
 * Canadá, Austrália, Nova Zelândia, Índia e África do Sul. Vocabulário no formato [EUA, dialeto,
 * explicação, nota]. Como o curso ainda vai até o A2, as histórias também são A2.
 *
 * Fontes: Wikipédia em inglês («Canadian English», «Canadian raising», «Australian English», «New
 * Zealand English», «Māori Language Act 1987», «Indian English», «South African English», «Languages
 * of South Africa», consultadas em 10/10/2026).
 */
export const VARIANTS_EN_MUNDO: LanguageVariant[] = [
  // ───────────────────────────── CANADÁ ─────────────────────────────
  {
    code: 'en-CA',
    country: 'CAN',
    kind: 'dialeto',
    speechLocale: 'en-CA',
    name: 'Inglês do Canadá',
    flag: '🇨🇦',
    summary:
      'O inglês do Canadá, entre o americano e o britânico: a pronúncia é parecida com a dos EUA, a ortografia mistura as duas (colour, mas tire), e há palavras próprias, como toque, washroom e loonie, além do famoso “eh?”.',
    card: {
      id: 'en-ca-c1',
      title: 'Colour, tire e “eh?”',
      emoji: '🍁',
      history:
        'O inglês do Canadá se formou com colonos britânicos e com os “legalistas”, americanos fiéis à coroa britânica que se mudaram para o norte depois da independência dos EUA, em 1783. Por isso a pronúncia é parecida com a americana, mas a ortografia e algumas palavras seguem o Reino Unido. Desde a Lei das Línguas Oficiais de 1969, o Canadá é oficialmente bilíngue: inglês e francês têm o mesmo status no governo federal, e as embalagens, as placas federais e os documentos vêm nas duas línguas.',
      culture_tip:
        'O “eh?” no fim da frase pede confirmação, como o nosso “né?”: “Nice day, eh?”. A moeda de um dólar tem um mergulhão (loon) e por isso se chama “loonie”; a de dois, “toonie”. O café mais popular é o “double-double” (com dois de açúcar e dois de creme) da rede Tim Hortons. E no inverno ninguém sai sem a “toque”, o gorro de lã.',
      grammar_why:
        'A gramática é a mesma; o que muda é a ortografia e o vocabulário: (1) a ortografia britânica em “colour”, “centre”, “cheque”, mas americana em “tire” e “program”; (2) palavras próprias: toque (gorro), washroom (banheiro público), loonie e toonie (moedas), double-double (café), pop (refrigerante); (3) a letra Z se diz “zed”, como no Reino Unido; (4) o “eh?” de confirmação.',
      grammar_examples: [
        ['It’s cold today, eh?', 'Está frio hoje, né?'],
        ['Where’s the washroom?', 'Onde fica o banheiro? (EUA: restroom)'],
        ['Put on your toque!', 'Põe o gorro! (EUA: beanie)'],
        ['A double-double, please.', 'Um café com dois de açúcar e dois de creme, por favor.'],
        ['My favourite colour is red.', 'A minha cor preferida é o vermelho. (EUA: favorite color)'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'O “r” soa depois de vogal, como nos EUA.',
      'O “Canadian raising”: o ditongo de “about” e “house” começa mais fechado, e para o ouvido americano “about” soa quase como “a boat”.',
      'O mesmo vale para “ice” e “write”, que soam diferentes de “eyes” e “ride”.',
      'O “t” entre vogais vira um “d” rápido, como nos EUA: “water” soa “wader”.',
    ],
    vocab: [
      ['beanie', 'toque', 'gorro de lã', 'do francês canadense “tuque”'],
      ['restroom', 'washroom', 'banheiro público'],
      ['one-dollar coin', 'loonie', 'moeda de um dólar', 'por causa do mergulhão (loon) desenhado nela'],
      ['two-dollar coin', 'toonie', 'moeda de dois dólares', 'de “two” + “loonie”'],
      ['soda', 'pop', 'refrigerante', 'também no meio-oeste dos EUA'],
      ['zee', 'zed', 'a letra Z', 'como no Reino Unido'],
      ['color', 'colour', 'cor', 'a ortografia britânica'],
      ['right?', 'eh?', 'né?', 'pede confirmação no fim da frase'],
    ],
    stories: [
      {
        id: 'en-h11',
        variant: 'en-CA',
        level: 'A2.1',
        cefr: 'A2',
        title: 'A double-double in Toronto',
        emoji: '☕',
        summary: 'Num inverno de Toronto, a amiga Emily leva Linu para tomar café e ele aprende o que são toque, loonie e double-double.',
        cultural_context:
          'Toronto é a maior cidade do Canadá. No inverno, faz muito frio, e ninguém sai sem a “toque”. A rede de cafés Tim Hortons é um símbolo do país, e o pedido mais famoso é o “double-double”.',
        start: 'start',
        glossary: [
          ['toque', 'gorro de lã'],
          ['double-double', 'café com dois de açúcar e dois de creme'],
          ['loonie', 'moeda de um dólar'],
          ['toonie', 'moeda de dois dólares'],
          ['eh?', 'né?'],
        ],
        nodes: {
          start: {
            emoji: '❄️',
            text: 'It is January in Toronto. Emily says: “It’s minus twenty today, eh? Put on your toque!” Linu doesn’t understand.',
            translation: 'É janeiro em Toronto. Emily diz: “Hoje está vinte graus negativos, né? Põe o gorro!” Linu não entende.',
            choices: [
              { text: '“What is a toque?”', translation: '“O que é toque?”', next: 'toque' },
            ],
          },
          toque: {
            emoji: '🧢',
            text: 'Emily gives him a wool hat: “This is a toque!” They go to a café. Emily orders: “A double-double, please.” Then she asks Linu: “What do you want?”',
            translation: 'Emily dá a ele um gorro de lã: “Isto é uma toque!” Eles vão a um café. Emily pede: “Um double-double, por favor.” Depois ela pergunta ao Linu: “O que você quer?”',
            choices: [
              { text: '“What is a double-double?”', translation: '“O que é double-double?”', next: 'cafe' },
              {
                text: '“Two coffees, please.”',
                translation: '“Dois cafés, por favor.”',
                wrong: '“Double-double” não é café duplo: é um café com dois de açúcar e dois de creme. Pergunte antes de pedir!',
              },
            ],
          },
          cafe: {
            emoji: '☕',
            text: '“Coffee with two sugars and two creams,” Emily explains. Linu orders one too. The coffee costs two dollars. Linu gives a coin with a bird on it. The cashier says: “Thanks! A toonie, perfect.”',
            translation: '“Café com dois de açúcar e dois de creme”, explica Emily. Linu pede um também. O café custa dois dólares. Linu dá uma moeda com um pássaro. O caixa diz: “Obrigado! Um toonie, perfeito.”',
            choices: [
              { text: '“A toonie? I thought it was a loonie!”', translation: '“Toonie? Eu achei que era um loonie!”', next: 'final_bom' },
            ],
          },
          final_bom: {
            emoji: '🍁',
            text: 'Emily laughs: “The loonie is one dollar, with the loon bird. The toonie is two dollars!” Linu drinks his double-double: “It’s good, eh?”',
            translation: 'Emily ri: “O loonie é um dólar, com o pássaro mergulhão. O toonie é dois dólares!” Linu bebe o seu double-double: “É bom, né?”',
            ending: {
              tone: 'bom',
              title: 'Canadian, eh?',
              message: 'Você aprendeu o inglês do Canadá: toque, double-double, loonie, toonie e o “eh?” no fim da frase.',
            },
          },
        },
      },
      {
        id: 'en-h12',
        variant: 'en-CA',
        level: 'A2.2',
        cefr: 'A2',
        title: 'Two languages on the box',
        emoji: '🥣',
        summary: 'Em Ottawa, Linu repara que tudo vem escrito em inglês e francês, e o amigo Daniel explica o bilinguismo canadense.',
        cultural_context:
          'O Canadá é oficialmente bilíngue desde 1969: inglês e francês têm o mesmo status no governo federal. Em Ottawa, a capital, na fronteira entre a Ontário de língua inglesa e o Quebec de língua francesa, muita gente fala as duas línguas.',
        start: 'start',
        glossary: [
          ['bilingual', 'bilíngue'],
          ['official language', 'língua oficial'],
          ['washroom', 'banheiro público'],
          ['pop', 'refrigerante'],
        ],
        nodes: {
          start: {
            emoji: '🥣',
            text: 'Linu is in Ottawa with his friend Daniel. At breakfast, he looks at a cereal box. It says “Corn Flakes / Flocons de maïs”. Linu asks: “Why is it in two languages?”',
            translation: 'Linu está em Ottawa com o amigo Daniel. No café da manhã, ele olha uma caixa de cereal. Está escrito “Corn Flakes / Flocons de maïs”. Linu pergunta: “Por que está em duas línguas?”',
            choices: [
              { text: '“Is French an official language here?”', translation: '“O francês é língua oficial aqui?”', next: 'oficial' },
            ],
          },
          oficial: {
            emoji: '🇨🇦',
            text: '“Yes! Canada has two official languages, English and French,” says Daniel. “Boxes, signs and government papers are in both. In Ottawa, many people speak both.”',
            translation: '“Sim! O Canadá tem duas línguas oficiais, o inglês e o francês”, diz Daniel. “Caixas, placas e documentos do governo vêm nas duas. Em Ottawa, muita gente fala as duas.”',
            choices: [
              {
                text: '“So in Canada, French and English are equal in the government.”',
                translation: '“Então no Canadá o francês e o inglês são iguais no governo.”',
                next: 'passeio',
              },
              {
                text: '“So in Canada, only French is official.”',
                translation: '“Então no Canadá só o francês é oficial.”',
                wrong: 'São as duas: o inglês e o francês têm o mesmo status no governo federal desde 1969.',
              },
            ],
          },
          passeio: {
            emoji: '🏛️',
            text: 'They visit Parliament Hill. Linu needs the washroom. He asks a guard in English, and she answers: “Down the hall, on the left. Bonne journée!”',
            translation: 'Eles visitam a colina do Parlamento. Linu precisa ir ao banheiro. Ele pergunta a uma guarda em inglês, e ela responde: “No fim do corredor, à esquerda. Bom dia!”',
            choices: [
              { text: '“Merci! Thank you!”', translation: '“Merci! Obrigado!”', next: 'final_bom' },
            ],
          },
          final_bom: {
            emoji: '😄',
            text: 'Daniel laughs: “Merci and thank you! Now you’re a real Canadian, eh?”',
            translation: 'Daniel ri: “Merci e thank you! Agora você é um canadense de verdade, né?”',
            ending: {
              tone: 'bom',
              title: 'Bilingual',
              message: 'Você conheceu o bilinguismo do Canadá e palavras do inglês canadense: washroom, pop e o “eh?”.',
            },
          },
        },
      },
    ],
  },

  // ───────────────────────────── AUSTRÁLIA ─────────────────────────────
  {
    code: 'en-AU',
    country: 'AUS',
    kind: 'dialeto',
    speechLocale: 'en-AU',
    ipa: ipaEnDe('en-AU'),
    name: 'Inglês da Austrália',
    flag: '🇦🇺',
    summary:
      'O inglês australiano, sem o “r” no fim da sílaba, com vogais próprias e a mania de encurtar palavras: arvo (tarde), brekkie (café da manhã), servo (posto de gasolina). “G’day, mate!” e “No worries!” são as marcas registradas.',
    card: {
      id: 'en-au-c1',
      title: 'G’day, mate!',
      emoji: '🦘',
      history:
        'O inglês chegou à Austrália em 1788, com a primeira frota de condenados e colonos britânicos que fundou Sydney. Os falantes vinham de muitas regiões da Grã-Bretanha e da Irlanda, e em poucas gerações nasceu um sotaque novo, australiano. O país tem também centenas de línguas aborígenes, muitas hoje ameaçadas, que deram ao inglês palavras como “kangaroo”, “koala” e “boomerang”. Hoje o inglês australiano tem dicionário próprio, o Macquarie Dictionary, publicado desde 1981.',
      culture_tip:
        'Os australianos encurtam quase tudo e põem “-ie” ou “-o” no fim: “brekkie” (breakfast), “arvo” (afternoon), “servo” (service station), “barbie” (barbecue), “Aussie” (australiano). O tom é informal e igualitário: todo mundo é “mate”, até um desconhecido. “No worries” serve para “de nada”, “tudo bem” e “sem problema”. E no verão (dezembro a fevereiro), o churrasco na praia é tradição, até no Natal.',
      grammar_why:
        'A gramática é a mesma; o vocabulário e o tom mudam: (1) palavras encurtadas com “-ie” e “-o”: brekkie, arvo, servo, barbie; (2) palavras próprias: thongs (chinelos), ute (picape), esky (caixa térmica), bottle-o (loja de bebidas); (3) a ortografia britânica: colour, centre; (4) “heaps” para “muito”: “heaps of people”; (5) a frase afirmativa terminando com a voz subindo, como uma pergunta.',
      grammar_examples: [
        ['G’day, mate! How are you going?', 'Oi, cara! Como vai?'],
        ['See you this arvo!', 'Te vejo hoje à tarde! (EUA: this afternoon)'],
        ['Let’s have a barbie at the beach.', 'Vamos fazer um churrasco na praia.'],
        ['No worries!', 'De nada! / Tudo bem!'],
        ['There were heaps of people.', 'Tinha muita gente.'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'O “r” depois de vogal, no fim da sílaba, não soa: “car” soa [kaː].',
      'O ditongo de “day” abre e soa perto de “dai”: “G’day” soa quase “gudai”.',
      'O “t” entre vogais pode virar um “d” rápido, como nos EUA: “water” soa “wada”.',
      'A voz sobe no fim de muitas frases afirmativas, como se fossem perguntas.',
    ],
    vocab: [
      ['afternoon', 'arvo', 'tarde'],
      ['breakfast', 'brekkie', 'café da manhã'],
      ['gas station', 'servo', 'posto de gasolina', 'de “service station”'],
      ['barbecue', 'barbie', 'churrasco'],
      ['flip-flops', 'thongs', 'chinelos', 'cuidado: nos EUA, “thong” é fio dental'],
      ['pickup truck', 'ute', 'picape', 'de “utility vehicle”'],
      ['cooler', 'esky', 'caixa térmica', 'de uma antiga marca'],
      ['liquor store', 'bottle-o', 'loja de bebidas'],
      ['a lot of', 'heaps of', 'muito, um monte de'],
      ['you’re welcome', 'no worries', 'de nada, sem problema'],
    ],
    stories: [
      {
        id: 'en-h13',
        variant: 'en-AU',
        level: 'A2.1',
        cefr: 'A2',
        title: 'A barbie at Bondi',
        emoji: '🏖️',
        summary: 'Em Sydney, o amigo Jack convida Linu para um churrasco na praia de Bondi, e Linu precisa entender o inglês australiano para não chegar sem chinelo nem caixa térmica.',
        cultural_context:
          'Bondi é a praia mais famosa de Sydney. O churrasco (barbie) na praia é parte da vida australiana, e as palavras encurtadas estão em toda parte: arvo (tarde), esky (caixa térmica), thongs (chinelos).',
        start: 'start',
        glossary: [
          ['arvo', 'tarde'],
          ['barbie', 'churrasco'],
          ['esky', 'caixa térmica'],
          ['thongs', 'chinelos'],
          ['no worries', 'tudo bem, de nada'],
          ['mate', 'cara, amigo'],
        ],
        nodes: {
          start: {
            emoji: '📱',
            text: 'Linu gets a message from Jack: “G’day mate! Barbie at Bondi this arvo. Bring your thongs and an esky!”',
            translation: 'Linu recebe uma mensagem do Jack: “Oi, cara! Churrasco em Bondi hoje à tarde. Traz os chinelos e uma caixa térmica!”',
            choices: [
              { text: 'Linu asks Jack: “What is an arvo? And an esky?”', translation: 'Linu pergunta ao Jack: “O que é arvo? E esky?”', next: 'palavras' },
            ],
          },
          palavras: {
            emoji: '🧊',
            text: 'Jack answers: “Arvo is afternoon. An esky is a box to keep drinks cold. And thongs are the shoes for the beach!”',
            translation: 'Jack responde: “Arvo é a tarde. Esky é uma caixa para manter as bebidas geladas. E thongs são os chinelos de praia!”',
            choices: [
              { text: 'Linu buys flip-flops and a cooler.', translation: 'Linu compra chinelos e uma caixa térmica.', next: 'praia' },
              {
                text: 'Linu brings a winter coat.',
                translation: 'Linu leva um casaco de inverno.',
                wrong: 'É um churrasco na praia, à tarde: Jack pediu chinelos (thongs) e uma caixa térmica (esky), não roupa de frio.',
              },
            ],
          },
          praia: {
            emoji: '🏖️',
            text: 'At Bondi, there are heaps of people. Jack is cooking sausages on the barbie. Linu gives him the esky. Jack says: “Thanks, mate!”',
            translation: 'Em Bondi, tem muita gente. Jack está assando linguiças na churrasqueira. Linu entrega a caixa térmica. Jack diz: “Valeu, cara!”',
            choices: [
              { text: '“No worries, mate!”', translation: '“De nada, cara!”', next: 'final_bom' },
              { text: '“You’re welcome, sir.”', translation: '“De nada, senhor.”', next: 'final_neutro' },
            ],
          },
          final_bom: {
            emoji: '🌭',
            text: 'Jack laughs: “No worries, mate! You sound like an Aussie!” They eat sausages and swim in the sea.',
            translation: 'Jack ri: “No worries, mate! Você fala como um australiano!” Eles comem linguiça e nadam no mar.',
            ending: {
              tone: 'bom',
              title: 'True blue Aussie',
              message: 'Você aprendeu o inglês da Austrália: G’day, mate, arvo, barbie, esky, thongs, heaps e no worries.',
            },
          },
          final_neutro: {
            emoji: '😅',
            text: 'Jack laughs: “Sir? Mate, this is Australia! Everybody is a mate here.”',
            translation: 'Jack ri: “Senhor? Cara, aqui é a Austrália! Todo mundo é ‘mate’ aqui.”',
            ending: {
              tone: 'neutro',
              title: 'Todo mundo é mate',
              message: 'Na Austrália, o tom é informal: “mate” e “no worries” servem para quase tudo.',
            },
          },
        },
      },
      {
        id: 'en-h14',
        variant: 'en-AU',
        level: 'A2.2',
        cefr: 'A2',
        title: 'Brekkie and the servo',
        emoji: '🚙',
        summary: 'Numa viagem de carro pelo interior da Austrália, Linu e a amiga Chloe param num posto e num café, e ele aprende as palavras encurtadas da estrada.',
        cultural_context:
          'A Austrália é enorme, e no interior (the outback) as cidades ficam longe umas das outras. Na estrada, o posto de gasolina é o “servo”, a picape é a “ute” e o café da manhã é o “brekkie”. Cangurus atravessando a estrada são um perigo real ao amanhecer e ao anoitecer.',
        start: 'start',
        glossary: [
          ['brekkie', 'café da manhã'],
          ['servo', 'posto de gasolina'],
          ['ute', 'picape'],
          ['outback', 'o interior desértico da Austrália'],
          ['roo', 'canguru'],
        ],
        nodes: {
          start: {
            emoji: '🌅',
            text: 'Linu and Chloe are driving in the outback. Chloe says: “We need petrol and brekkie. Let’s stop at the next servo.”',
            translation: 'Linu e Chloe estão dirigindo pelo interior. Chloe diz: “Precisamos de gasolina e de café da manhã. Vamos parar no próximo posto.”',
            choices: [
              { text: '“Servo? Is that a gas station?”', translation: '“Servo? É um posto de gasolina?”', next: 'servo' },
            ],
          },
          servo: {
            emoji: '⛽',
            text: '“Yes! Service station, servo,” says Chloe. At the servo, a man with a big ute says: “Watch out for roos on the road, mate. They’re everywhere this morning.”',
            translation: '“Isso! Service station, servo”, diz Chloe. No posto, um homem com uma picape grande diz: “Cuidado com os cangurus na estrada, cara. Eles estão por toda parte esta manhã.”',
            choices: [
              {
                text: '“Roos are kangaroos, right? We will drive slowly.”',
                translation: '“Roos são cangurus, né? Vamos dirigir devagar.”',
                next: 'brekkie',
              },
              {
                text: 'Linu thinks “roos” are big rocks.',
                translation: 'Linu acha que “roos” são pedras grandes.',
                wrong: '“Roo” é a forma curta de “kangaroo”, canguru. Ao amanhecer, eles atravessam muito a estrada.',
              },
            ],
          },
          brekkie: {
            emoji: '🍳',
            text: 'In the café, Chloe orders brekkie: eggs, toast and a flat white. Linu orders the same. The waitress says: “No worries, it’ll be ready in five.”',
            translation: 'No café, Chloe pede o café da manhã: ovos, torrada e um flat white. Linu pede o mesmo. A garçonete diz: “Tudo bem, fica pronto em cinco minutos.”',
            choices: [
              { text: '“Cheers! Best brekkie in the outback!”', translation: '“Valeu! O melhor café da manhã do interior!”', next: 'final_bom' },
            ],
          },
          final_bom: {
            emoji: '🦘',
            text: 'Back on the road, a big roo jumps across. Linu stops the car slowly. Chloe smiles: “Good driving, mate!”',
            translation: 'De volta à estrada, um canguru grande atravessa pulando. Linu para o carro devagar. Chloe sorri: “Boa direção, cara!”',
            ending: {
              tone: 'bom',
              title: 'Outback road trip',
              message: 'Você aprendeu as palavras encurtadas da estrada australiana: servo, ute, roo, brekkie, e o café “flat white”.',
            },
          },
        },
      },
    ],
  },

  // ───────────────────────────── NOVA ZELÂNDIA ─────────────────────────────
  {
    code: 'en-NZ',
    country: 'NZL',
    kind: 'dialeto',
    speechLocale: 'en-NZ',
    ipa: ipaEnDe('en-NZ'),
    name: 'Inglês da Nova Zelândia',
    flag: '🇳🇿',
    summary:
      'O inglês neozelandês, sem o “r” no fim da sílaba, com o “i” de “fish” quase um “u” (“fush and chups”) e muitas palavras do maori no dia a dia: kia ora, whānau, kai.',
    card: {
      id: 'en-nz-c1',
      title: 'Kia ora!',
      emoji: '🥝',
      history:
        'Os maoris chegaram às ilhas da Nova Zelândia (Aotearoa, em maori) por volta do século XIII. Os colonos britânicos vieram no século XIX, e em 1840 o Tratado de Waitangi foi assinado entre a coroa britânica e chefes maoris. O inglês virou a língua da maioria, mas o maori nunca saiu da vida do país: desde 1987 é língua oficial, e a língua de sinais neozelandesa ganhou o mesmo status em 2006. O inglês da Nova Zelândia é parecido com o australiano, mas tem vogais próprias e muitas palavras maoris.',
      culture_tip:
        'O cumprimento “Kia ora” (do maori, “tenha saúde”) é usado por todo mundo, em qualquer situação. Família é “whānau”, comida é “kai”, e muitas escolas e empresas abrem os eventos com cantos e saudações maoris. O haka, a dança de guerra maori, é famoso pelo time de rúgbi, os All Blacks. E os neozelandeses se chamam de “kiwis”, como a ave símbolo do país.',
      grammar_why:
        'A gramática é a mesma; mudam o vocabulário e a pronúncia: (1) palavras do maori no inglês de todo dia: kia ora (oi), whānau (família), kai (comida), mahi (trabalho); (2) palavras próprias: jandals (chinelos), chilly bin (caixa térmica), dairy (mercadinho de esquina), tramping (trilha); (3) “sweet as” = tudo certo, ótimo; (4) a ortografia britânica: colour, centre.',
      grammar_examples: [
        ['Kia ora! How’s it going?', 'Oi! Como vai?'],
        ['I’m going tramping this weekend.', 'Vou fazer trilha neste fim de semana. (EUA: hiking)'],
        ['Can you grab some milk from the dairy?', 'Você pode pegar leite no mercadinho? (EUA: corner store)'],
        ['Sweet as, see you then!', 'Fechado, te vejo lá!'],
        ['The whole whānau is coming.', 'A família toda vem.'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'O “r” depois de vogal, no fim da sílaba, não soa.',
      'O “i” curto de “fish” e “chips” soa quase como um “u” fraco: “fish and chips” soa perto de “fush and chups”, motivo de piada dos australianos.',
      'O “e” curto fecha e soa quase como “i”: “yes” soa perto de “yis”.',
      'As palavras maoris são ditas com as vogais do maori: “Māori” soa [ˈmaːɔɾi], com o “r” batido.',
    ],
    vocab: [
      ['hello', 'kia ora', 'oi, olá', 'do maori; também “obrigado”'],
      ['family', 'whānau', 'família', 'do maori'],
      ['food', 'kai', 'comida', 'do maori'],
      ['flip-flops', 'jandals', 'chinelos'],
      ['cooler', 'chilly bin', 'caixa térmica'],
      ['corner store', 'dairy', 'mercadinho de esquina'],
      ['hiking', 'tramping', 'trilha'],
      ['great, OK', 'sweet as', 'tudo certo, ótimo'],
    ],
    stories: [
      {
        id: 'en-h15',
        variant: 'en-NZ',
        level: 'A2.1',
        cefr: 'A2',
        title: 'Kia ora, Auckland!',
        emoji: '🥝',
        summary: 'Em Auckland, Linu é recebido pela família da amiga Mere e aprende as palavras maoris que todo neozelandês usa.',
        cultural_context:
          'Em Auckland, a maior cidade da Nova Zelândia, todo mundo diz “kia ora” (oi, em maori). A família é a “whānau”, e a comida, “kai”. O maori é língua oficial desde 1987.',
        start: 'start',
        glossary: [
          ['kia ora', 'oi, olá; obrigado'],
          ['whānau', 'família'],
          ['kai', 'comida'],
          ['jandals', 'chinelos'],
          ['sweet as', 'tudo certo'],
        ],
        nodes: {
          start: {
            emoji: '🏠',
            text: 'Linu arrives at Mere’s house in Auckland. Her mum opens the door: “Kia ora, Linu! Welcome! The whole whānau is here.”',
            translation: 'Linu chega à casa da Mere, em Auckland. A mãe dela abre a porta: “Kia ora, Linu! Bem-vindo! A família toda está aqui.”',
            choices: [
              { text: '“Kia ora! Thank you!”', translation: '“Kia ora! Obrigado!”', next: 'whanau' },
              {
                text: 'Linu thinks “whānau” is a dog.',
                translation: 'Linu acha que “whānau” é um cachorro.',
                wrong: '“Whānau” é a família, em maori. A mãe da Mere disse que a família toda está em casa.',
              },
            ],
          },
          whanau: {
            emoji: '👨‍👩‍👧‍👦',
            text: 'Mere says: “Take off your shoes, you can wear these jandals. Come, the kai is ready!” Linu looks at the jandals. They are flip-flops.',
            translation: 'Mere diz: “Tira os sapatos, pode usar estes chinelos. Vem, a comida está pronta!” Linu olha os “jandals”. São chinelos.',
            choices: [
              { text: '“Kai is food, right?”', translation: '“Kai é comida, né?”', next: 'kai' },
            ],
          },
          kai: {
            emoji: '🍠',
            text: '“Yes! Today we have kūmara, sweet potato, and fish,” says Mere. After lunch, she asks: “Do you want to go to the beach tomorrow?”',
            translation: '“Isso! Hoje tem kūmara, batata-doce, e peixe”, diz Mere. Depois do almoço, ela pergunta: “Quer ir à praia amanhã?”',
            choices: [
              { text: '“Sweet as!”', translation: '“Fechado!”', next: 'final_bom' },
            ],
          },
          final_bom: {
            emoji: '🌊',
            text: 'Mere laughs: “Sweet as! You’re a real Kiwi now!” The whānau says goodbye: “Ka kite anō!”, see you again.',
            translation: 'Mere ri: “Sweet as! Agora você é um kiwi de verdade!” A família se despede: “Ka kite anō!”, até a próxima.',
            ending: {
              tone: 'bom',
              title: 'Real Kiwi',
              message: 'Você aprendeu o inglês da Nova Zelândia e as palavras maoris do dia a dia: kia ora, whānau, kai, jandals e sweet as.',
            },
          },
        },
      },
      {
        id: 'en-h16',
        variant: 'en-NZ',
        level: 'A2.2',
        cefr: 'A2',
        title: 'Tramping and a chilly bin',
        emoji: '🥾',
        summary: 'Linu faz uma trilha com o amigo Sam perto de Queenstown e se confunde com as palavras neozelandesas da natureza.',
        cultural_context:
          'Na Nova Zelândia, fazer trilha é “tramping”, e o país tem algumas das trilhas mais famosas do mundo, as Great Walks. Para levar a comida gelada, usa-se o “chilly bin”, e para comprar o que falta, o “dairy”, o mercadinho de esquina.',
        start: 'start',
        glossary: [
          ['tramping', 'trilha'],
          ['chilly bin', 'caixa térmica'],
          ['dairy', 'mercadinho de esquina'],
          ['hut', 'abrigo de montanha'],
        ],
        nodes: {
          start: {
            emoji: '🏔️',
            text: 'Sam says: “Tomorrow we go tramping near Queenstown. Buy some food at the dairy and put it in the chilly bin.”',
            translation: 'Sam diz: “Amanhã vamos fazer trilha perto de Queenstown. Compra comida no mercadinho e põe na caixa térmica.”',
            choices: [
              { text: '“Tramping is hiking, right? And the dairy sells milk?”', translation: '“Tramping é trilha, né? E o dairy vende leite?”', next: 'dairy' },
            ],
          },
          dairy: {
            emoji: '🏪',
            text: 'Sam laughs: “Tramping is hiking, yes. But the dairy is a small shop. It sells everything: bread, drinks, lollies.”',
            translation: 'Sam ri: “Tramping é trilha, sim. Mas o dairy é uma lojinha. Vende de tudo: pão, bebida, balas.”',
            choices: [
              {
                text: 'Linu goes to the small shop and buys food.',
                translation: 'Linu vai à lojinha e compra comida.',
                next: 'trilha',
              },
              {
                text: 'Linu goes to a farm to buy milk.',
                translation: 'Linu vai a uma fazenda comprar leite.',
                wrong: 'O “dairy” neozelandês é o mercadinho de esquina, não uma fazenda de leite. Lá se compra de tudo.',
              },
            ],
          },
          trilha: {
            emoji: '🥾',
            text: 'They walk for five hours. The mountains and the lake are beautiful. At the hut, Sam opens the chilly bin: the drinks are still cold.',
            translation: 'Eles caminham por cinco horas. As montanhas e o lago são lindos. No abrigo, Sam abre a caixa térmica: as bebidas ainda estão geladas.',
            choices: [
              { text: '“Sweet as! Best tramping ever!”', translation: '“Que ótimo! A melhor trilha da vida!”', next: 'final_bom' },
            ],
          },
          final_bom: {
            emoji: '🌄',
            text: 'Sam smiles: “Next time we do a Great Walk. Three days!” Linu is tired, but happy.',
            translation: 'Sam sorri: “Da próxima vez a gente faz uma Great Walk. Três dias!” Linu está cansado, mas feliz.',
            ending: {
              tone: 'bom',
              title: 'Kiwi tramper',
              message: 'Você aprendeu tramping, chilly bin, dairy, hut e sweet as, as palavras da natureza neozelandesa.',
            },
          },
        },
      },
    ],
  },

  // ───────────────────────────── ÍNDIA ─────────────────────────────
  {
    code: 'en-IN',
    country: 'IND',
    kind: 'dialeto',
    speechLocale: 'en-IN',
    name: 'Inglês da Índia',
    flag: '🇮🇳',
    summary:
      'O inglês da Índia, um dos países com mais falantes de inglês do mundo, quase todos como segunda língua. Tem pronúncia, palavras e construções próprias: prepone, do the needful, cousin-brother, lakh e crore, e o “isn’t it?” no fim de qualquer frase.',
    card: {
      id: 'en-in-c1',
      title: 'Do the needful',
      emoji: '🇮🇳',
      history:
        'O inglês chegou à Índia com a Companhia das Índias Orientais, no século XVII, e se firmou no domínio britânico como língua da administração e do ensino superior. Depois da independência, em 1947, a ideia era deixar só o híndi como língua oficial da União, mas a resistência dos estados do sul, que não falam híndi, fez o governo manter o inglês: a Lei das Línguas Oficiais de 1963 o mantém ao lado do híndi, sem prazo para sair. Hoje o inglês é a língua dos tribunais superiores, das universidades e de boa parte dos negócios, e a ponte entre falantes de línguas diferentes, num país com 22 línguas reconhecidas pela Constituição.',
      culture_tip:
        'Na Índia, os números grandes se contam em “lakh” (100 mil, escrito 1,00,000) e “crore” (10 milhões, 1,00,00,000), também em inglês: “The film made 100 crore”. O balanço de cabeça de um lado para o outro (head wobble) pode querer dizer “sim”, “entendi” ou “tudo bem”. E o “Hinglish”, a mistura de híndi e inglês, está na publicidade, nos filmes de Bollywood e nas conversas do dia a dia.',
      grammar_why:
        'O inglês indiano tem usos próprios: (1) “prepone” (antecipar), o contrário de “postpone”; (2) “do the needful” (faça o que for preciso), comum nos e-mails; (3) “cousin-brother” e “cousin-sister” (primo, prima); (4) “only” e “itself” para ênfase: “I’ll come today only” (venho hoje mesmo); (5) “isn’t it?” como pergunta de confirmação para qualquer frase: “You are coming, isn’t it?”; (6) o presente contínuo com verbos de estado: “I am knowing him”.',
      grammar_examples: [
        ['The meeting is preponed to 10 a.m.', 'A reunião foi antecipada para as 10h. (EUA: moved up)'],
        ['Kindly do the needful.', 'Por favor, faça o necessário.'],
        ['He is my cousin-brother.', 'Ele é meu primo. (EUA: my cousin)'],
        ['I will come today only.', 'Venho hoje mesmo.'],
        ['You are from Brazil, isn’t it?', 'Você é do Brasil, não é? (EUA: aren’t you?)'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'O “t” e o “d” são retroflexos, com a ponta da língua dobrada para trás: um som característico do inglês indiano.',
      'O “r” depois de vogal geralmente soa, batido como no português “caro”.',
      'O “w” e o “v” muitas vezes soam iguais, como um som entre os dois.',
      'O “th” vira um “t” ou “d” aspirado: “thank” soa perto de “t-hank”.',
      'O ritmo segue o das línguas indianas: cada sílaba com o mesmo tempo, sem engolir as átonas.',
    ],
    vocab: [
      ['move up (a date)', 'prepone', 'antecipar', 'o contrário de “postpone”'],
      ['do what is necessary', 'do the needful', 'fazer o necessário', 'muito comum em e-mails formais'],
      ['cousin', 'cousin-brother / cousin-sister', 'primo, prima'],
      ['100,000', 'one lakh', 'cem mil', 'escrito 1,00,000'],
      ['10,000,000', 'one crore', 'dez milhões', 'escrito 1,00,00,000'],
      ['killing time', 'timepass', 'passatempo', 'do Hinglish'],
      ['right?', 'isn’t it?', 'né?', 'para qualquer frase'],
      ['downtown', 'the market', 'o centro comercial'],
    ],
    stories: [
      {
        id: 'en-h17',
        variant: 'en-IN',
        level: 'A2.1',
        cefr: 'A2',
        title: 'The meeting is preponed',
        emoji: '💼',
        summary: 'No primeiro dia de estágio em Bengaluru, Linu recebe um e-mail cheio de inglês indiano e precisa entender a que horas é a reunião.',
        cultural_context:
          'Bengaluru (Bangalore) é o centro da tecnologia da Índia. Nas empresas, o inglês é a língua de trabalho, com expressões próprias: “prepone” (antecipar), “do the needful” (faça o necessário), “kindly” (por favor).',
        start: 'start',
        glossary: [
          ['prepone', 'antecipar'],
          ['do the needful', 'fazer o necessário'],
          ['kindly', 'por favor (formal)'],
          ['isn’t it?', 'né?'],
        ],
        nodes: {
          start: {
            emoji: '📧',
            text: 'Linu reads an email from his manager, Priya: “Dear Linu, the meeting is preponed from 3 p.m. to 11 a.m. Kindly do the needful and bring the report.”',
            translation: 'Linu lê um e-mail da gerente, Priya: “Caro Linu, a reunião foi antecipada das 15h para as 11h. Por favor, faça o necessário e traga o relatório.”',
            choices: [
              { text: 'Linu prepares the report for 11 a.m.', translation: 'Linu prepara o relatório para as 11h.', next: 'reuniao' },
              {
                text: 'Linu thinks the meeting is later, after 3 p.m.',
                translation: 'Linu acha que a reunião é mais tarde, depois das 15h.',
                wrong: '“Prepone” é o contrário de “postpone”: antecipar. A reunião passou das 15h para as 11h.',
              },
            ],
          },
          reuniao: {
            emoji: '👩🏽‍💼',
            text: 'At 11 a.m., Linu is in the meeting room with the report. Priya smiles: “Very good! You are new, isn’t it? But you understood my email.”',
            translation: 'Às 11h, Linu está na sala de reunião com o relatório. Priya sorri: “Muito bem! Você é novo, né? Mas entendeu o meu e-mail.”',
            choices: [
              { text: '“Yes! Prepone means to move earlier.”', translation: '“Sim! Prepone quer dizer passar para mais cedo.”', next: 'final_bom' },
            ],
          },
          final_bom: {
            emoji: '☕',
            text: 'After the meeting, Priya invites Linu for chai: “Come, we’ll have chai and some timepass.”',
            translation: 'Depois da reunião, Priya convida o Linu para um chá: “Vem, vamos tomar um chai e passar o tempo.”',
            ending: {
              tone: 'bom',
              title: 'Needful done',
              message: 'Você entendeu o inglês dos escritórios da Índia: prepone, do the needful, kindly, isn’t it? e timepass.',
            },
          },
        },
      },
      {
        id: 'en-h18',
        variant: 'en-IN',
        level: 'A2.2',
        cefr: 'A2',
        title: 'My cousin-brother’s wedding',
        emoji: '💐',
        summary: 'Linu é convidado para o casamento do primo da amiga Ananya em Delhi e precisa entender os números em lakh e as palavras da família.',
        cultural_context:
          'Os casamentos indianos duram vários dias e reúnem centenas de convidados. No inglês da Índia, o primo é “cousin-brother”, e os números grandes se contam em lakh (100 mil) e crore (10 milhões).',
        start: 'start',
        glossary: [
          ['cousin-brother', 'primo'],
          ['lakh', 'cem mil'],
          ['crore', 'dez milhões'],
          ['only', 'mesmo (ênfase)'],
        ],
        nodes: {
          start: {
            emoji: '💌',
            text: 'Ananya says: “My cousin-brother is getting married in Delhi. You must come! The wedding is three days long.” Linu asks: “Your cousin-brother? Is he your brother or your cousin?”',
            translation: 'Ananya diz: “O meu primo vai casar em Delhi. Você tem que vir! O casamento dura três dias.” Linu pergunta: “Seu cousin-brother? Ele é seu irmão ou seu primo?”',
            choices: [
              { text: 'Ananya answers: “He is my cousin. In India we say cousin-brother.”', translation: 'Ananya responde: “Ele é meu primo. Na Índia a gente diz cousin-brother.”', next: 'festa' },
            ],
          },
          festa: {
            emoji: '🎊',
            text: 'At the wedding, there is music, dancing and heaps of food. Ananya says: “My uncle spent almost two lakh rupees on the flowers only!”',
            translation: 'No casamento, há música, dança e muita comida. Ananya diz: “O meu tio gastou quase duzentas mil rúpias só com as flores!”',
            choices: [
              {
                text: '“Two lakh? That is two hundred thousand rupees!”',
                translation: '“Dois lakh? São duzentas mil rúpias!”',
                next: 'final_bom',
              },
              {
                text: '“Two lakh? That is two rupees!”',
                translation: '“Dois lakh? São duas rúpias!”',
                wrong: 'Um lakh são cem mil: dois lakh são duzentos mil (escrito 2,00,000). Flores para um casamento indiano custam caro!',
              },
            ],
          },
          final_bom: {
            emoji: '💃',
            text: 'Ananya laughs: “Correct! Now come and dance, the baraat is starting!” Linu dances with the whole family.',
            translation: 'Ananya ri: “Certo! Agora vem dançar, o cortejo do noivo vai começar!” Linu dança com a família toda.',
            ending: {
              tone: 'bom',
              title: 'Wedding guest',
              message: 'Você aprendeu cousin-brother, lakh, crore e o “only” de ênfase, e foi a um casamento indiano.',
            },
          },
        },
      },
    ],
  },

  // ───────────────────────────── ÁFRICA DO SUL ─────────────────────────────
  {
    code: 'en-ZA',
    country: 'ZAF',
    kind: 'dialeto',
    speechLocale: 'en-ZA',
    ipa: ipaEnDe('en-ZA'),
    name: 'Inglês da África do Sul',
    flag: '🇿🇦',
    summary:
      'O inglês da África do Sul, um país de 12 línguas oficiais, cheio de palavras do africâner e das línguas africanas: braai (churrasco), lekker (gostoso), robot (semáforo) e o “now now”, que ninguém sabe exatamente quando é.',
    card: {
      id: 'en-za-c1',
      title: 'Braai, robot e “now now”',
      emoji: '🦁',
      history:
        'Os britânicos tomaram a Colônia do Cabo em 1806, e o inglês chegou ao lado do holandês dos colonos que já viviam ali, de onde nasceu o africâner. Durante o apartheid (1948–1994), o africâner foi a língua do governo, e o inglês ficou associado à resistência e ao comércio. A Constituição de 1996 reconheceu 11 línguas oficiais, entre elas o zulu, o xhosa, o africâner e o inglês; em 2023, a língua de sinais sul-africana virou a 12ª. Só cerca de um em cada dez sul-africanos tem o inglês como língua de casa, mas ele é a língua comum da política, da economia e da TV.',
      culture_tip:
        'O “braai” (churrasco, do africâner) é uma instituição: o 24 de setembro, Dia da Herança, é chamado por muitos de “Braai Day”. Cumprimenta-se com “Howzit?” (como vai?). E cuidado com o tempo: “now” é “daqui a pouco”, “just now” é “mais tarde” e “now now” é “logo, já, já”, sem garantia nenhuma.',
      grammar_why:
        'A gramática é a mesma; o vocabulário é o que mais muda: (1) palavras do africâner: braai (churrasco), lekker (gostoso, legal), bakkie (picape), stoep (varanda); (2) palavras das línguas africanas: indaba (reunião, do zulu), muti (remédio tradicional); (3) palavras próprias: robot (semáforo), takkies (tênis); (4) as expressões de tempo: now, just now e now now; (5) “ja” (sim, do africâner) e “hey?” no fim da frase.',
      grammar_examples: [
        ['Howzit, my bru?', 'E aí, irmão?'],
        ['Turn left at the robot.', 'Vire à esquerda no semáforo. (EUA: at the traffic light)'],
        ['Let’s have a braai on Saturday.', 'Vamos fazer um churrasco no sábado.'],
        ['I’ll do it now now.', 'Já, já eu faço.'],
        ['This food is lekker!', 'Esta comida está gostosa!'],
      ],
      character_guide: null,
    },
    pronunciation: [
      'O “r” depois de vogal, no fim da sílaba, não soa, como no inglês da Inglaterra.',
      'O “i” de “bit” pode soar mais central, quase como um “ã” fraco.',
      'Quem tem o africâner ou uma língua africana como primeira língua leva o sotaque dela para o inglês: há muitos ingleses sul-africanos.',
      'O “r” às vezes é vibrado, por influência do africâner.',
    ],
    vocab: [
      ['traffic light', 'robot', 'semáforo'],
      ['barbecue', 'braai', 'churrasco', 'do africâner'],
      ['great, tasty', 'lekker', 'gostoso, legal', 'do africâner'],
      ['pickup truck', 'bakkie', 'picape', 'do africâner'],
      ['sneakers', 'takkies', 'tênis'],
      ['porch', 'stoep', 'varanda', 'do africâner'],
      ['how are you?', 'howzit?', 'como vai?', 'de “how is it?”'],
      ['soon', 'now now', 'já, já', '“just now” é mais tarde'],
      ['meeting', 'indaba', 'reunião, encontro', 'do zulu'],
    ],
    stories: [
      {
        id: 'en-h19',
        variant: 'en-ZA',
        level: 'A2.1',
        cefr: 'A2',
        title: 'Turn left at the robot',
        emoji: '🚦',
        summary: 'Em Joanesburgo, Linu se perde a caminho do churrasco do amigo Thabo e precisa entender as instruções sul-africanas.',
        cultural_context:
          'Na África do Sul, o semáforo é o “robot”, o churrasco é o “braai” e a picape é a “bakkie”. Muitas palavras vêm do africâner e das línguas africanas, e o inglês é a língua comum entre pessoas que falam zulu, xhosa, africâner e outras línguas em casa.',
        start: 'start',
        glossary: [
          ['robot', 'semáforo'],
          ['braai', 'churrasco'],
          ['bakkie', 'picape'],
          ['howzit?', 'como vai?'],
          ['lekker', 'gostoso, legal'],
        ],
        nodes: {
          start: {
            emoji: '📞',
            text: 'Linu calls his friend Thabo: “Howzit, Thabo? I’m lost!” Thabo says: “No problem. Go straight and turn left at the second robot. My house has a white bakkie in front.”',
            translation: 'Linu liga para o amigo Thabo: “E aí, Thabo? Estou perdido!” Thabo diz: “Sem problema. Siga reto e vire à esquerda no segundo semáforo. A minha casa tem uma picape branca na frente.”',
            choices: [
              { text: 'Linu looks for the second traffic light.', translation: 'Linu procura o segundo semáforo.', next: 'robot' },
              {
                text: 'Linu looks for a robot on the street.',
                translation: 'Linu procura um robô na rua.',
                wrong: 'Na África do Sul, “robot” é o semáforo! Thabo quer que o Linu vire à esquerda no segundo sinal.',
              },
            ],
          },
          robot: {
            emoji: '🛻',
            text: 'Linu turns left at the second robot. He sees a white pickup in front of a house. There is smoke and music. Thabo shouts: “You found it! The braai is ready!”',
            translation: 'Linu vira à esquerda no segundo semáforo. Ele vê uma picape branca na frente de uma casa. Tem fumaça e música. Thabo grita: “Você achou! O churrasco está pronto!”',
            choices: [
              { text: '“The bakkie helped me!”', translation: '“A picape me ajudou!”', next: 'braai' },
            ],
          },
          braai: {
            emoji: '🍖',
            text: 'Thabo gives Linu a plate with meat and pap, a maize porridge. “Try it! It’s lekker!” Linu eats.',
            translation: 'Thabo dá ao Linu um prato com carne e pap, um angu de milho. “Prova! Está uma delícia!” Linu come.',
            choices: [
              { text: '“Ja, it’s very lekker!”', translation: '“É, está muito gostoso!”', next: 'final_bom' },
            ],
          },
          final_bom: {
            emoji: '😄',
            text: 'Everybody laughs. Thabo says: “Listen to him! ‘Ja’ and ‘lekker’! You’re a South African now, my bru!”',
            translation: 'Todo mundo ri. Thabo diz: “Olha só! ‘Ja’ e ‘lekker’! Agora você é sul-africano, irmão!”',
            ending: {
              tone: 'bom',
              title: 'Lekker braai',
              message: 'Você chegou ao braai com as palavras da África do Sul: robot, bakkie, howzit, braai, lekker e ja.',
            },
          },
        },
      },
      {
        id: 'en-h20',
        variant: 'en-ZA',
        level: 'A2.2',
        cefr: 'A2',
        title: 'Now, just now or now now?',
        emoji: '⏰',
        summary: 'Na Cidade do Cabo, Linu espera a amiga Zanele para subir a Table Mountain e descobre que “now”, “just now” e “now now” não querem dizer “agora”.',
        cultural_context:
          'Na África do Sul, as expressões de tempo confundem os visitantes: “now” é “daqui a pouco”, “now now” é “logo, já, já” e “just now” é “mais tarde”. A Table Mountain, a montanha chata que domina a Cidade do Cabo, é o cartão-postal do país.',
        start: 'start',
        glossary: [
          ['now now', 'já, já'],
          ['just now', 'mais tarde'],
          ['shame', 'que dó; que fofo'],
          ['cable car', 'teleférico'],
        ],
        nodes: {
          start: {
            emoji: '📱',
            text: 'Linu is waiting for Zanele at the Table Mountain cable car. She sends a message: “I’m coming now now!” Linu waits ten minutes, then twenty.',
            translation: 'Linu está esperando a Zanele no teleférico da Table Mountain. Ela manda uma mensagem: “Já, já estou chegando!” Linu espera dez minutos, depois vinte.',
            choices: [
              { text: 'Linu calls her: “Where are you? You said now now!”', translation: 'Linu liga para ela: “Cadê você? Você disse now now!”', next: 'agora' },
            ],
          },
          agora: {
            emoji: '😅',
            text: 'Zanele laughs: “Shame, sorry! ‘Now now’ means soon, not this minute. If I say ‘just now’, that’s even later!”',
            translation: 'Zanele ri: “Ai, desculpa! ‘Now now’ quer dizer logo, não neste minuto. Se eu disser ‘just now’, é ainda mais tarde!”',
            choices: [
              {
                text: '“So ‘just now’ is later than ‘now now’!”',
                translation: '“Então ‘just now’ é mais tarde que ‘now now’!”',
                next: 'montanha',
              },
              {
                text: '“So ‘just now’ means right now.”',
                translation: '“Então ‘just now’ quer dizer agora mesmo.”',
                wrong: 'Na África do Sul é o contrário do que parece: “just now” é “mais tarde”, e “now now” é “logo”.',
              },
            ],
          },
          montanha: {
            emoji: '🏔️',
            text: 'Zanele arrives and they take the cable car. At the top, they can see all of Cape Town and the sea.',
            translation: 'Zanele chega e eles pegam o teleférico. Lá em cima, dá para ver toda a Cidade do Cabo e o mar.',
            choices: [
              { text: '“Wow! This view is lekker!”', translation: '“Uau! Esta vista é demais!”', next: 'final_bom' },
            ],
          },
          final_bom: {
            emoji: '🌅',
            text: 'Zanele smiles: “Lekker, ja! Let’s eat something just now.” Linu laughs: “Just now? Then I’ll be hungry for a long time!”',
            translation: 'Zanele sorri: “Demais, é! Vamos comer alguma coisa just now.” Linu ri: “Just now? Então vou ficar com fome muito tempo!”',
            ending: {
              tone: 'bom',
              title: 'Now now',
              message: 'Você aprendeu as expressões de tempo da África do Sul (now, now now, just now), o “shame” e o “lekker”.',
            },
          },
        },
      },
    ],
  },
  // ───────────────────────────── NIGÉRIA ─────────────────────────────
  // decisão do dono (10/10/2026); sem histórias por falta de fonte. Fonte: Wikipédia, «Nigerian
  // English» (consultada em 10/10/2026)
  {
    code: 'en-NG',
    country: 'NGA',
    kind: 'dialeto',
    name: 'Inglês da Nigéria',
    flag: '🇳🇬',
    summary:
      'O inglês da Nigéria, língua oficial de um país de mais de 500 línguas, o da escola, do governo e dos jornais, com ritmo silábico e palavras próprias. Ao lado dele vive o pidgin nigeriano, que tem curso próprio no app.',
    pronunciation: [
      'Ritmo silábico: cada sílaba com o mesmo peso, sem as vogais reduzidas do inglês britânico e americano.',
      'O “th” vira “t” e “d”: “think” soa “tink”, “this” soa “dis”.',
      'Sem “r” no fim da sílaba, como na Inglaterra.',
    ],
    vocab: [
      ['traffic jam', 'go-slow', 'engarrafamento'],
      ['to give a missed call', 'to flash', 'dar um toque no celular'],
      ['I’ll be right back', 'I’m coming', 'já volto', 'literalmente “estou vindo”'],
      ['older brother', 'senior brother', 'irmão mais velho'],
    ],
  },
];

