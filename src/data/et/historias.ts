import type { StorySeed } from '../types';

/** Histórias interativas em estoniano: 3 por subnível, cada uma num lugar diferente. */
export const STORIES_ET: StorySeed[] = [
  // ───────────────────────── A1.1 ─────────────────────────
  {
    id: 'et-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Tere, vanalinn!',
    emoji: '🏰',
    summary: 'Na cidade velha de Tallinn, o Linu vê o Velho Tomás, conhece a Kadri e prova uma rosca estoniana.',
    cultural_context:
      'A cidade velha de Tallinn é Patrimônio Mundial da UNESCO desde 1997 e uma das cidades medievais mais bem conservadas do norte da Europa. No alto da torre da prefeitura fica o “Vana Toomas” (Velho Tomás), um cata-vento em forma de soldado que virou símbolo da cidade.',
    start: 'start',
    glossary: [
      ['Tere! / Head aega!', 'Oi! / Tchau! (“head aega” é, ao pé da letra, “bom tempo”)'],
      ['Mina olen… / Kes sina oled?', 'Eu sou… / Quem é você? (o verbo “olema”: olen, oled, on)'],
      ['aitäh / palun', 'obrigado / por favor (o “ä” é um “é” bem aberto)'],
      ['vanalinn', 'cidade velha (a tônica cai sempre na primeira sílaba: VA-na-linn)'],
      ['raekoda', 'a prefeitura antiga, a casa do conselho da cidade'],
      ['kringel', 'rosca doce trançada, com canela'],
      ['üks, kaks, kaksteist, kakskümmend', 'um, dois, doze, vinte (“-teist” forma de 11 a 19; “-kümmend” são as dezenas)'],
    ],
    nodes: {
      start: {
        emoji: '🏰',
        text: 'Tallinn, vanalinn. Päike paistab. Linu on siin!',
        translation: 'Tallinn, cidade velha. O sol está brilhando. O Linu está aqui!',
        choices: [
          { text: 'Linu vaatab raekoda.', translation: 'O Linu olha a prefeitura antiga.', next: 'toomas' },
          { text: 'Linu läheb kohvikusse.', translation: 'O Linu vai ao café.', next: 'kohvik' },
        ],
      },
      toomas: {
        emoji: '💂',
        text: 'Torni otsas on Vana Toomas. Ta on vana sõdur.',
        translation: 'No alto da torre está o Velho Tomás. Ele é um soldado velho.',
        choices: [{ text: '“Tere, Vana Toomas! Nüüd kohvik!”', translation: '“Oi, Velho Tomás! Agora, o café!”', next: 'kohvik' }],
      },
      kohvik: {
        emoji: '👩',
        text: 'Kohvikus on naine. “Tere! Mina olen Kadri. Kes sina oled?”',
        translation: 'No café há uma mulher. “Oi! Eu sou a Kadri. Quem é você?”',
        choices: [
          { text: '“Tere! Mina olen Linu.”', translation: '“Oi! Eu sou o Linu.”', next: 'kringel' },
          {
            text: '“Head aega, Kadri!”',
            translation: '“Tchau, Kadri!”',
            wrong: 'A Kadri disse “Tere!” (Oi!) e perguntou “Kes sina oled?” (Quem é você?). “Head aega” é “tchau”: o Linu nem se apresentou ainda! Responda “Mina olen Linu”.',
          },
        ],
      },
      kringel: {
        emoji: '🥨',
        text: '“Siin on kringel. Üks kringel on kaks eurot.”',
        translation: '“Aqui está uma rosca. Uma rosca custa dois euros.”',
        choices: [
          { text: '“Aitäh! Üks kringel, palun.”', translation: '“Obrigado! Uma rosca, por favor.”', next: 'final_bom' },
          { text: '“Kaksteist kringlit, palun!”', translation: '“Doze roscas, por favor!”', next: 'final_liiga' },
          {
            text: '“Kakskümmend eurot? Ei, aitäh!”',
            translation: '“Vinte euros? Não, obrigado!”',
            wrong: 'A Kadri disse “kaks eurot”: DOIS euros. “Kakskümmend” seria vinte. Cuidado: “kaks” (2), “kaksteist” (12) e “kakskümmend” (20) começam igual!',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu ja Kadri söövad kringlit. Väga hea! Aitäh, Tallinn!',
        translation: 'O Linu e a Kadri comem a rosca. Muito boa! Obrigado, Tallinn!',
        ending: { tone: 'bom', title: 'Doce começo', message: 'O Linu se apresentou, entendeu o preço e ganhou uma amiga na cidade velha.' },
      },
      final_liiga: {
        emoji: '😵',
        text: 'Kaksteist kringlit! Linu kõht on täis… liiga täis.',
        translation: 'Doze roscas! A barriga do Linu está cheia… cheia demais.',
        ending: { tone: 'neutro', title: 'Pinguim guloso', message: '“Kaksteist” é doze! Da próxima vez, peça “üks kringel” (uma rosca).' },
      },
    },
  },
  {
    id: 'et-h2',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Tere, Tartu!',
    emoji: '🎓',
    summary: 'Em Tartu, a cidade dos estudantes, o Linu conhece a Liis e o Jaan perto da fonte mais famosa da praça.',
    cultural_context:
      'A Universidade de Tartu, fundada em 1632, é a mais antiga da Estônia, e por isso Tartu é chamada de cidade dos estudantes. Na praça da prefeitura fica a fonte “Suudlevad tudengid” (Estudantes se beijando): um casal abraçado debaixo de um guarda-chuva.',
    start: 'start',
    glossary: [
      ['mina olen / sina oled / tema on', 'eu sou / você é / ele, ela é (“tema” vale para ele e para ela: o estoniano não tem gênero)'],
      ['meie oleme / teie olete / nemad on', 'nós somos / vocês são / eles, elas são'],
      ['tudeng', 'estudante universitário'],
      ['sõber / sõbrad', 'amigo / amigos (o plural nominativo termina em “-d”)'],
      ['ülikool / ülikooli', 'universidade / para a universidade (o “oo” de “ülikooli” fica sobrelongo: a terceira quantidade muda o sentido)'],
      ['purskkaev', 'chafariz, fonte'],
      ['väsinud', 'cansado'],
    ],
    nodes: {
      start: {
        emoji: '⛲',
        text: 'Tartu, Raekoja plats. Siin on purskkaev “Suudlevad tudengid”.',
        translation: 'Tartu, praça da prefeitura. Aqui está a fonte “Estudantes se beijando”.',
        choices: [
          { text: 'Linu vaatab purskkaevu.', translation: 'O Linu olha a fonte.', next: 'purskkaev' },
          { text: 'Linu istub pingil.', translation: 'O Linu senta num banco.', next: 'pink' },
        ],
      },
      purskkaev: {
        emoji: '☂️',
        text: 'Kaks tudengit suudlevad vihmavarju all. Nad on armunud!',
        translation: 'Dois estudantes se beijam debaixo do guarda-chuva. Eles estão apaixonados!',
        choices: [{ text: 'Linu istub pingil.', translation: 'O Linu senta num banco.', next: 'pink' }],
      },
      pink: {
        emoji: '👩‍🎓',
        text: '“Tere! Mina olen Liis. Mina olen tudeng. Sina oled ka tudeng?”',
        translation: '“Oi! Eu sou a Liis. Eu sou estudante. Você também é estudante?”',
        choices: [
          { text: '“Ei, mina olen turist. Ma olen Brasiiliast.”', translation: '“Não, eu sou turista. Eu sou do Brasil.”', next: 'sobrad' },
          {
            text: '“Tere! Mina olen Liis.”',
            translation: '“Oi! Eu sou a Liis.”',
            wrong: '“Mina olen Liis” quer dizer “EU sou a Liis”: foi ela que disse isso! O Linu fala de si mesmo: “Mina olen Linu”.',
          },
        ],
      },
      sobrad: {
        emoji: '👫',
        text: 'Siin on ka Jaan. “Tere! Meie oleme sõbrad. Me oleme tudengid.”',
        translation: 'Aqui está também o Jaan. “Oi! Nós somos amigos. Nós somos estudantes.”',
        choices: [
          { text: '“Tere, Jaan! Te olete toredad!”', translation: '“Oi, Jaan! Vocês são legais!”', next: 'ulikool' },
          {
            text: '“Tere! Te olete õpetajad?”',
            translation: '“Oi! Vocês são professores?”',
            wrong: 'O Jaan disse “Me oleme tudengid”: nós somos ESTUDANTES, não professores (õpetajad).',
          },
        ],
      },
      ulikool: {
        emoji: '🏛️',
        text: '“See on ülikool. Ülikool on väga vana ja väga ilus.”',
        translation: '“Esta é a universidade. A universidade é muito antiga e muito bonita.”',
        choices: [
          { text: 'Linu läheb ülikooli.', translation: 'O Linu vai para a universidade.', next: 'final_bom' },
          { text: 'Linu on väsinud. Ta läheb hotelli.', translation: 'O Linu está cansado. Ele vai para o hotel.', next: 'final_uni' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Ülikool on ilus. Linu on õnnelik. “Aitäh, Liis! Aitäh, Jaan!”',
        translation: 'A universidade é linda. O Linu está feliz. “Obrigado, Liis! Obrigado, Jaan!”',
        ending: { tone: 'bom', title: 'Calouro honorário', message: 'O Linu fez dois amigos estudantes e conheceu a universidade mais antiga da Estônia.' },
      },
      final_uni: {
        emoji: '😴',
        text: 'Linu magab. Ülikool on homme ka siin!',
        translation: 'O Linu dorme. A universidade também vai estar aqui amanhã!',
        ending: { tone: 'neutro', title: 'Soninho', message: 'O passeio fica para amanhã. A universidade existe desde 1632: ela espera!' },
      },
    },
  },
  {
    id: 'et-h3',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Suvi Pärnus',
    emoji: '🏖️',
    summary: 'Na praia de Pärnu, o Linu encara a água fria do Báltico e compra um sorvete com a Anu.',
    cultural_context:
      'Pärnu é chamada de “suvepealinn”, a capital de verão da Estônia: é uma cidade balneária desde o século XIX, com uma praia de areia larga e um mar raso, que no verão se enche de gente.',
    start: 'start',
    glossary: [
      ['suvi', 'verão'],
      ['rand', 'praia'],
      ['külm / soe', 'frio / quente, morno'],
      ['jäätis', 'sorvete (o “ä” longo: JÄÄ-tis)'],
      ['kolm / kolmteist / kuusteist', 'três / treze / dezesseis'],
      ['Mina olen…', 'Eu sou…'],
      ['palun', 'por favor'],
    ],
    nodes: {
      start: {
        emoji: '☀️',
        text: 'Pärnu. Suvi. Rand on suur ja päike on soe.',
        translation: 'Pärnu. Verão. A praia é grande e o sol está quente.',
        choices: [
          { text: 'Linu läheb vette.', translation: 'O Linu entra na água.', next: 'vesi' },
          { text: 'Linu tahab jäätist.', translation: 'O Linu quer sorvete.', next: 'jaatis' },
        ],
      },
      vesi: {
        emoji: '🌊',
        text: 'Vesi on külm: ainult kuusteist kraadi! Brr!',
        translation: 'A água está fria: só dezesseis graus! Brr!',
        choices: [
          { text: '“Mina olen pingviin. Külm vesi on hea! Nüüd jäätis!”', translation: '“Eu sou um pinguim. Água fria é bom! Agora, sorvete!”', next: 'jaatis' },
          {
            text: '“Vesi on soe: kakskümmend kraadi!”',
            translation: '“A água está quente: vinte graus!”',
            wrong: 'O texto diz “Vesi on külm: ainult kuusteist kraadi”: a água está FRIA, só dezesseis (kuusteist) graus.',
          },
        ],
      },
      jaatis: {
        emoji: '🍦',
        text: '“Tere! Mina olen Anu. Jäätis on kolm eurot.”',
        translation: '“Oi! Eu sou a Anu. O sorvete custa três euros.”',
        choices: [
          { text: '“Tere, Anu! Üks jäätis, palun.”', translation: '“Oi, Anu! Um sorvete, por favor.”', next: 'maitse' },
          {
            text: '“Kolmteist eurot? Liiga kallis!”',
            translation: '“Treze euros? Caro demais!”',
            wrong: 'A Anu disse “kolm eurot”: TRÊS euros. “Kolmteist” é treze. O “-teist” faz toda a diferença!',
          },
        ],
      },
      maitse: {
        emoji: '🍓',
        text: '“Maasikas või šokolaad?”',
        translation: '“Morango ou chocolate?”',
        choices: [
          { text: '“Šokolaad, palun!”', translation: '“Chocolate, por favor!”', next: 'final_bom' },
          { text: '“Mõlemad! Kaks jäätist!”', translation: '“Os dois! Dois sorvetes!”', next: 'final_kaks' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu istub rannas ja sööb jäätist. Pärnu on super!',
        translation: 'O Linu senta na praia e toma sorvete. Pärnu é demais!',
        ending: { tone: 'bom', title: 'Verão perfeito', message: 'Mar gelado, sorvete de chocolate e uma nova amiga: um dia de verão estoniano!' },
      },
      final_kaks: {
        emoji: '🫠',
        text: 'Kaks jäätist ja päike on soe… Jäätis sulab! Linu on kleepuv.',
        translation: 'Dois sorvetes e o sol quente… O sorvete derrete! O Linu fica todo grudento.',
        ending: { tone: 'neutro', title: 'Sorvete derretido', message: 'Dois sorvetes ao mesmo tempo, no sol de Pärnu, não dá certo. Da próxima vez, um só!' },
      },
    },
  },

  // ───────────────────────── A1.2 ─────────────────────────
  {
    id: 'et-h4',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Kraater Saaremaal',
    emoji: '☄️',
    summary: 'Pedalando por Saaremaa, o Linu chega à cratera de Kaali e conhece o Tõnu, que divide com ele a água num dia de calor.',
    cultural_context:
      'Saaremaa é a maior ilha da Estônia. Em Kaali fica uma cratera aberta por um meteorito, com cerca de 110 metros de diâmetro e um laguinho no fundo; e em Angla, não muito longe, há uma fileira de moinhos de vento de madeira, um dos símbolos da ilha.',
    start: 'start',
    glossary: [
      ['mul on / sul on / tal on', 'eu tenho / você tem / ele, ela tem (ao pé da letra: “em mim há”)'],
      ['mul ei ole vett', 'eu não tenho água (a negação “ei” não muda com a pessoa; depois dela, o objeto vai para o partitivo)'],
      ['Kas…?', 'partícula que abre uma pergunta de sim ou não'],
      ['ma ei tea', 'eu não sei'],
      ['jalgratas', 'bicicleta'],
      ['palav', 'quente, calorento (o tempo)'],
      ['tuulik', 'moinho de vento'],
    ],
    nodes: {
      start: {
        emoji: '🚲',
        text: 'Linu on Saaremaal. Tal on jalgratas ja kaart. Ta sõidab Kaali külla.',
        translation: 'O Linu está em Saaremaa. Ele tem uma bicicleta e um mapa. Ele vai pedalando para a aldeia de Kaali.',
        choices: [
          { text: 'Linu sõidab kiiresti.', translation: 'O Linu pedala rápido.', next: 'kraater' },
          { text: 'Linu sõidab aeglaselt ja vaatab põlde.', translation: 'O Linu pedala devagar e olha os campos.', next: 'pold' },
          {
            text: 'Linu ei sõida, sest tal ei ole jalgratast.',
            translation: 'O Linu não pedala, porque não tem bicicleta.',
            wrong: 'O texto diz “Tal on jalgratas ja kaart”: ele TEM uma bicicleta e um mapa. “Tal on” = ele tem.',
          },
        ],
      },
      pold: {
        emoji: '🐑',
        text: 'Põllul on lambad. Lambad ei räägi eesti keelt. Nad söövad rohtu.',
        translation: 'No campo há ovelhas. As ovelhas não falam estoniano. Elas comem grama.',
        choices: [{ text: 'Linu sõidab edasi.', translation: 'O Linu segue pedalando.', next: 'kraater' }],
      },
      kraater: {
        emoji: '👨',
        text: 'Kaalis on suur auk. Seal on mees. “Tere! Mina olen Tõnu. Kas sa tead, mis see on?”',
        translation: 'Em Kaali há um buraco grande. Lá há um homem. “Oi! Eu sou o Tõnu. Você sabe o que é isto?”',
        choices: [
          { text: '“Ei, ma ei tea. Mis see on?”', translation: '“Não, eu não sei. O que é?”', next: 'seletus' },
          { text: '“Kas see on järv?”', translation: '“Isto é um lago?”', next: 'seletus' },
        ],
      },
      seletus: {
        emoji: '☄️',
        text: '“See on meteoriidikraater. See on väga vana.” Tõnu küsib: “Täna on palav. Kas sul on vett?”',
        translation: '“É uma cratera de meteorito. Ela é muito antiga.” O Tõnu pergunta: “Hoje está quente. Você tem água?”',
        choices: [
          { text: '“Ei, mul ei ole vett. Mul on ainult kaart.”', translation: '“Não, eu não tenho água. Só tenho um mapa.”', next: 'vesi' },
          {
            text: '“Jah, mul on palju vett!”',
            translation: '“Sim, eu tenho muita água!”',
            wrong: 'No começo, o texto disse “Tal on jalgratas ja kaart”: o Linu tem bicicleta e mapa, e só. Água ele não tem: “Mul ei ole vett”.',
          },
        ],
      },
      vesi: {
        emoji: '💧',
        text: '“Mul on kaks pudelit. Üks on sinu jaoks.”',
        translation: '“Eu tenho duas garrafas. Uma é para você.”',
        choices: [{ text: '“Aitäh! Sa oled väga lahke.”', translation: '“Obrigado! Você é muito gentil.”', next: 'tuulikud' }],
      },
      tuulikud: {
        emoji: '🌬️',
        text: 'Tõnu küsib: “Kas sa tahad näha Angla tuulikuid? See ei ole kaugel.”',
        translation: 'O Tõnu pergunta: “Você quer ver os moinhos de Angla? Não é longe.”',
        choices: [
          { text: '“Jah, ma tahan!”', translation: '“Sim, eu quero!”', next: 'final_bom' },
          { text: '“Ei, aitäh. Ma olen väsinud.”', translation: '“Não, obrigado. Eu estou cansado.”', next: 'final_puhkus' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Anglas on palju tuulikuid. Linu teeb pilte ja naeratab. Saaremaa on imeline!',
        translation: 'Em Angla há muitos moinhos. O Linu tira fotos e sorri. Saaremaa é maravilhosa!',
        ending: { tone: 'bom', title: 'Cratera e moinhos', message: 'O Linu entendeu “mul on” e “mul ei ole” e ganhou água, companhia e um passeio pela ilha.' },
      },
      final_puhkus: {
        emoji: '😌',
        text: 'Linu istub kraatri juures ja puhkab. Tuulikud ootavad homme.',
        translation: 'O Linu senta perto da cratera e descansa. Os moinhos esperam até amanhã.',
        ending: { tone: 'neutro', title: 'Descanso na cratera', message: 'Um dia tranquilo. Os moinhos de Angla ficam para a próxima pedalada!' },
      },
    },
  },
  {
    id: 'et-h5',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Kõpu tuletorn',
    emoji: '🗼',
    summary: 'Em Hiiumaa, o Linu procura o farol de Kõpu e ganha uma carona da Ülle.',
    cultural_context:
      'Hiiumaa é a segunda maior ilha da Estônia. O farol de Kõpu, terminado no século XVI, é um dos faróis mais antigos do mundo ainda em funcionamento.',
    start: 'start',
    glossary: [
      ['tuletorn', 'farol (ao pé da letra, “torre de fogo”)'],
      ['otsima', 'procurar: ma otsin, sa otsid, ta otsib'],
      ['Kas sa…?', 'Você…? (pergunta de sim ou não)'],
      ['mul on auto / sul ei ole autot', 'eu tenho carro / você não tem carro (depois de “ei ole”, partitivo)'],
      ['see ei ole kaugel', 'não é longe'],
      ['jõud', 'força, energia'],
      ['trepp', 'escada'],
    ],
    nodes: {
      start: {
        emoji: '🏝️',
        text: 'Linu on Hiiumaal. Ta otsib Kõpu tuletorni.',
        translation: 'O Linu está em Hiiumaa. Ele procura o farol de Kõpu.',
        choices: [
          { text: 'Linu küsib teed.', translation: 'O Linu pede informação.', next: 'tee' },
          { text: 'Linu otsib kotist kaarti.', translation: 'O Linu procura o mapa na bolsa.', next: 'kaart' },
        ],
      },
      kaart: {
        emoji: '🎒',
        text: 'Oi! Kotis ei ole kaarti. Linul ei ole kaarti!',
        translation: 'Ai! Na bolsa não tem mapa. O Linu não tem mapa!',
        choices: [{ text: 'Linu küsib teed.', translation: 'O Linu pede informação.', next: 'tee' }],
      },
      tee: {
        emoji: '👩',
        text: 'Tee ääres on naine. “Tere! Mina olen Ülle. Kas sa otsid tuletorni? See ei ole kaugel. Mul on auto.”',
        translation: 'Na beira da estrada há uma mulher. “Oi! Eu sou a Ülle. Você procura o farol? Não é longe. Eu tenho carro.”',
        choices: [
          { text: '“Jah, ma otsin Kõpu tuletorni. Kas sa sõidad sinna?”', translation: '“Sim, eu procuro o farol de Kõpu. Você vai de carro para lá?”', next: 'auto' },
          {
            text: '“Sul ei ole autot? Pole midagi, ma kõnnin.”',
            translation: '“Você não tem carro? Tudo bem, eu vou a pé.”',
            wrong: 'A Ülle disse “Mul on auto”: ela TEM carro. “Mul on” = eu tenho; “mul ei ole” seria “eu não tenho”.',
          },
        ],
      },
      auto: {
        emoji: '🚗',
        text: 'Nad sõidavad metsas. Ülle räägib: “Kõpu tuletorn on väga vana, aga see töötab ikka!”',
        translation: 'Eles vão de carro pela floresta. A Ülle conta: “O farol de Kõpu é muito antigo, mas ainda funciona!”',
        choices: [
          { text: '“Kas ma saan torni ronida?”', translation: '“Eu posso subir na torre?”', next: 'torn' },
          {
            text: '“Tuletorn on uus, jah?”',
            translation: '“O farol é novo, né?”',
            wrong: 'A Ülle disse “väga vana”: MUITO ANTIGO. O farol de Kõpu tem quase quinhentos anos!',
          },
        ],
      },
      torn: {
        emoji: '🪜',
        text: '“Jah, aga trepp on pikk. Kas sul on jõudu?”',
        translation: '“Pode, mas a escada é comprida. Você tem fôlego?”',
        choices: [
          { text: '“Jah, mul on jõudu!”', translation: '“Sim, eu tenho fôlego!”', next: 'final_bom' },
          { text: '“Ei, mul ei ole jõudu. Ma ootan all.”', translation: '“Não, eu não tenho fôlego. Eu espero lá embaixo.”', next: 'final_all' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu ronib üles. Tornist näeb Linu merd ja metsa. Väga ilus!',
        translation: 'O Linu sobe. Da torre, o Linu vê o mar e a floresta. Muito bonito!',
        ending: { tone: 'bom', title: 'Lá do alto', message: 'O Linu entendeu que a Ülle tinha carro e subiu num dos faróis mais antigos do mundo.' },
      },
      final_all: {
        emoji: '🥪',
        text: 'Linu istub all ja sööb võileiba. Torn on kõrge ja meri on sinine.',
        translation: 'O Linu senta lá embaixo e come um sanduíche. A torre é alta e o mar é azul.',
        ending: { tone: 'neutro', title: 'Piquenique no farol', message: 'A vista lá de cima fica para a próxima. Pelo menos o sanduíche estava bom!' },
      },
    },
  },
  {
    id: 'et-h6',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Rabas',
    emoji: '🌿',
    summary: 'No Parque Nacional de Lahemaa, o Linu anda pela passarela da turfeira com o guia Rein e acaba num lago gelado.',
    cultural_context:
      'Lahemaa, criado em 1971, é o primeiro parque nacional da Estônia. Nas turfeiras (raba) há passarelas de madeira (laudtee) para não afundar no musgo, e os lagos de turfeira têm água escura, cor de chá.',
    start: 'start',
    glossary: [
      ['raba', 'turfeira, pântano de musgo'],
      ['laudtee', 'passarela de tábuas'],
      ['sammal', 'musgo'],
      ['Kas sul on aega?', 'Você tem tempo?'],
      ['mul ei ole aega', 'eu não tenho tempo (“ei” + partitivo “aega”)'],
      ['vaatetorn', 'torre de observação'],
      ['ujuma: ma ujun, sa ujud', 'nadar: eu nado, você nada'],
    ],
    nodes: {
      start: {
        emoji: '🌿',
        text: 'Linu on Lahemaa rahvuspargis. Siin on suur raba ja pikk laudtee.',
        translation: 'O Linu está no Parque Nacional de Lahemaa. Aqui há uma grande turfeira e uma passarela comprida.',
        choices: [
          { text: 'Linu kõnnib laudteel.', translation: 'O Linu anda pela passarela.', next: 'giid' },
          { text: 'Linu hüppab rohelisele samblale.', translation: 'O Linu pula no musgo verde.', next: 'sammal' },
        ],
      },
      sammal: {
        emoji: '💦',
        text: 'Plärts! Sammal on märg ja Linu jalad on märjad. Keegi naerab.',
        translation: 'Plaft! O musgo está encharcado e os pés do Linu estão molhados. Alguém ri.',
        choices: [{ text: 'Linu ronib tagasi laudteele.', translation: 'O Linu sobe de volta na passarela.', next: 'giid' }],
      },
      giid: {
        emoji: '👨',
        text: 'Laudteel on mees. “Tere! Mina olen Rein. Ma olen siin giid. Kas sul on aega? Seal on vaatetorn.”',
        translation: 'Na passarela há um homem. “Oi! Eu sou o Rein. Eu sou guia aqui. Você tem tempo? Lá tem uma torre de observação.”',
        choices: [
          { text: '“Jah, mul on aega!”', translation: '“Sim, eu tenho tempo!”', next: 'torn' },
          { text: '“Ei, mul ei ole aega. Mu buss läheb kell neli.”', translation: '“Não, eu não tenho tempo. Meu ônibus sai às quatro.”', next: 'final_buss' },
          {
            text: '“Tere, Rein! Kas sa oled ka turist?”',
            translation: '“Oi, Rein! Você também é turista?”',
            wrong: 'O Rein disse “Ma olen siin giid”: ele é GUIA aqui, não turista.',
          },
        ],
      },
      torn: {
        emoji: '🗼',
        text: 'Tornist on raba väga ilus. All on väike järv. Rein küsib: “Kas sa ujud? Rabajärve vesi on külm.”',
        translation: 'Da torre, a turfeira é muito bonita. Lá embaixo há um laguinho. O Rein pergunta: “Você nada? A água do lago da turfeira é fria.”',
        choices: [
          { text: '“Jah! Ma olen pingviin. Ma ujun alati.”', translation: '“Sim! Eu sou um pinguim. Eu sempre nado.”', next: 'final_bom' },
          {
            text: '“Jah, sest vesi on soe!”',
            translation: '“Sim, porque a água está quente!”',
            wrong: 'O Rein avisou: “Rabajärve vesi on külm”: a água do lago é FRIA (külm), não quente (soe).',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu ujub rabajärves. Vesi on külm ja pruun. Rein naerab: “Sa oled tõesti pingviin!”',
        translation: 'O Linu nada no lago da turfeira. A água é fria e marrom. O Rein ri: “Você é mesmo um pinguim!”',
        ending: { tone: 'bom', title: 'Mergulho na turfeira', message: 'Água fria cor de chá: o lugar perfeito para um pinguim!' },
      },
      final_buss: {
        emoji: '🚌',
        text: 'Linu kõnnib bussi juurde. Vaatetorn ootab: järgmine kord!',
        translation: 'O Linu caminha até o ônibus. A torre espera: da próxima vez!',
        ending: { tone: 'neutro', title: 'Fica para a próxima', message: 'Sem tempo hoje. Lahemaa tem muitas turfeiras e passarelas para outra visita.' },
      },
    },
  },

  // ───────────────────────── A2.1 ─────────────────────────
  {
    id: 'et-h7',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Kaks kindlust Narvas',
    emoji: '🏯',
    summary: 'Em Narva, na fronteira leste, o Linu visita o castelo, vê a fortaleza do outro lado do rio e precisa correr para não perder o trem.',
    cultural_context:
      'Narva fica na fronteira com a Rússia, à beira do rio Narva: o castelo de Hermann, do lado estoniano, fica bem de frente para a fortaleza de Ivangorod, do lado russo. A maioria dos moradores tem o russo como língua materna, e muitos falam também estoniano.',
    start: 'start',
    glossary: [
      ['-s / -st / -sse', 'em / de / para dentro de: linnuses, linnusest, linnusesse (no castelo, do castelo, para o castelo)'],
      ['-l / -lt / -le', 'em / de / para (uma superfície, um lugar aberto): promenaadil, promenaadilt, promenaadile'],
      ['Kust sa tuled?', 'De onde você vem?'],
      ['Kuhu sa lähed?', 'Para onde você vai?'],
      ['linnus / kindlus', 'castelo / fortaleza'],
      ['jõe ääres / teisel kaldal', 'à beira do rio / na outra margem'],
      ['päikeseloojang', 'pôr do sol'],
    ],
    nodes: {
      start: {
        emoji: '🚆',
        text: 'Linu tuleb rongiga Tallinnast Narva. Ta astub rongist välja ja vaatab kaarti.',
        translation: 'O Linu vem de trem de Tallinn para Narva. Ele desce do trem e olha o mapa.',
        choices: [
          { text: 'Linu läheb otse linnusesse.', translation: 'O Linu vai direto para o castelo.', next: 'linnus' },
          { text: 'Linu läheb kõigepealt kohvikusse.', translation: 'O Linu vai primeiro ao café.', next: 'kohvik' },
        ],
      },
      kohvik: {
        emoji: '☕',
        text: 'Kohvikus töötab Olga. Ta räägib eesti ja vene keelt. “Tere! Kust sa tuled?”',
        translation: 'No café trabalha a Olga. Ela fala estoniano e russo. “Oi! De onde você vem?”',
        choices: [
          { text: '“Ma tulen Tallinnast, aga ma olen Brasiiliast.”', translation: '“Eu venho de Tallinn, mas sou do Brasil.”', next: 'soovitus' },
          {
            text: '“Ma lähen linnusesse.”',
            translation: '“Eu vou para o castelo.”',
            wrong: 'A Olga perguntou “Kust sa tuled?”: DE ONDE você vem. A resposta leva “-st” (Tallinnast = de Tallinn). “Linnusesse”, com “-sse”, responde a outra pergunta: “Kuhu sa lähed?” (Para onde você vai?).',
          },
        ],
      },
      soovitus: {
        emoji: '🗺️',
        text: 'Olga naeratab: “Linnus on jõe ääres. Õhtul on jõe kaldal ilus promenaad.”',
        translation: 'A Olga sorri: “O castelo fica à beira do rio. De noitinha, a margem do rio tem um calçadão bonito.”',
        choices: [{ text: 'Linu joob kohvi ära ja läheb linnusesse.', translation: 'O Linu termina o café e vai para o castelo.', next: 'linnus' }],
      },
      linnus: {
        emoji: '🏰',
        text: 'Hermanni linnus on suur ja võimas. Linnuses on muuseum ja tornis on vaateplatvorm.',
        translation: 'O castelo de Hermann é grande e imponente. No castelo há um museu, e na torre há um mirante.',
        choices: [
          { text: 'Linu ronib torni.', translation: 'O Linu sobe na torre.', next: 'torn' },
          { text: 'Linu läheb muuseumisse.', translation: 'O Linu entra no museu.', next: 'muuseum' },
        ],
      },
      torn: {
        emoji: '🔭',
        text: 'Tornist näeb Linu jõge ja silda. Teisel kaldal on teine kindlus, Ivangorod. See on juba Venemaal.',
        translation: 'Da torre, o Linu vê o rio e a ponte. Na outra margem há outra fortaleza, Ivangorod. Ela já fica na Rússia.',
        choices: [
          { text: 'Linu tuleb tornist alla ja läheb muuseumisse.', translation: 'O Linu desce da torre e entra no museu.', next: 'muuseum' },
          {
            text: 'Linu mõtleb: “Mõlemad kindlused on Eestis.”',
            translation: 'O Linu pensa: “As duas fortalezas ficam na Estônia.”',
            wrong: 'O texto diz “See on juba Venemaal”: a fortaleza de Ivangorod já fica NA RÚSSIA. O rio é a fronteira.',
          },
        ],
      },
      muuseum: {
        emoji: '⚔️',
        text: 'Muuseumis on vanad mõõgad, mündid ja kaardid. Giid räägib: “Linnus on üle seitsmesaja aasta vana.”',
        translation: 'No museu há espadas, moedas e mapas antigos. O guia conta: “O castelo tem mais de setecentos anos.”',
        choices: [{ text: 'Linu tuleb muuseumist välja ja läheb jõe äärde.', translation: 'O Linu sai do museu e vai para a beira do rio.', next: 'promenaad' }],
      },
      promenaad: {
        emoji: '🌇',
        text: 'Õhtul jalutab Linu promenaadil. Seal on ka Olga. “Rong läheb Tallinnasse kell kaheksa!” Kell on juba pool kaheksa.',
        translation: 'De noitinha, o Linu passeia no calçadão. A Olga também está lá. “O trem para Tallinn sai às oito!” Já são sete e meia.',
        choices: [
          { text: 'Linu jookseb promenaadilt otse jaama.', translation: 'O Linu corre do calçadão direto para a estação.', next: 'final_bom' },
          { text: 'Linu jääb promenaadile ja vaatab päikeseloojangut.', translation: 'O Linu fica no calçadão e olha o pôr do sol.', next: 'final_loojang' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu on jaamas õigel ajal. Ta istub rongi ja lehvitab aknast. “Aitäh, Olga! Aitäh, Narva!”',
        translation: 'O Linu chega à estação na hora certa. Ele entra no trem e acena da janela. “Obrigado, Olga! Obrigado, Narva!”',
        ending: { tone: 'bom', title: 'Na hora certa', message: 'Castelo, museu, rio e trem: o Linu foi de um lugar a outro sem se perder nos casos locais.' },
      },
      final_loojang: {
        emoji: '🌅',
        text: 'Päikeseloojang on ilus… aga rong on juba läinud! Linu ööbib Narvas veel ühe öö.',
        translation: 'O pôr do sol é lindo… mas o trem já foi! O Linu passa mais uma noite em Narva.',
        ending: { tone: 'neutro', title: 'Mais uma noite', message: '“Pool kaheksa” é sete e meia (meia hora ANTES das oito). O trem não esperou, mas o pôr do sol valeu.' },
      },
    },
  },
  {
    id: 'et-h8',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Kannel ja rippsild',
    emoji: '🪕',
    summary: 'No festival de música tradicional de Viljandi, o Linu atravessa a ponte suspensa atrás da amiga Triin, que vai tocar kannel.',
    cultural_context:
      'Todo mês de julho, Viljandi recebe o maior festival de música tradicional da Estônia, nas colinas das ruínas do antigo castelo, onde há também uma ponte suspensa. O kannel, uma cítara de cordas dedilhadas, é o instrumento nacional estoniano.',
    start: 'start',
    glossary: [
      ['kannel', 'o kannel, cítara tradicional estoniana'],
      ['kava', 'programação'],
      ['lava / laval / lavale', 'palco / no palco / para o palco'],
      ['rippsild / sillalt', 'ponte suspensa / da ponte (de cima dela)'],
      ['muru / murul / murule / murult', 'grama / na grama / para a grama / da grama'],
      ['paremale / vasakule', 'para a direita / para a esquerda'],
      ['pargis', 'no parque'],
    ],
    nodes: {
      start: {
        emoji: '🎶',
        text: 'Juuli. Linu on Viljandis pärimusmuusika festivalil. Tema sõber Triin mängib täna kannelt. Aga kus?',
        translation: 'Julho. O Linu está em Viljandi, no festival de música tradicional. A amiga dele, a Triin, toca kannel hoje. Mas onde?',
        choices: [
          { text: 'Linu vaatab telefonist kava.', translation: 'O Linu olha a programação no celular.', next: 'kava' },
          { text: 'Linu läheb infopunkti.', translation: 'O Linu vai ao posto de informações.', next: 'info' },
        ],
      },
      kava: {
        emoji: '📱',
        text: 'Kavas on kirjas: “Triin, kannel. Kell kuus, väike lava pargis.” Aga kus on park?',
        translation: 'Na programação está escrito: “Triin, kannel. Às seis, palco pequeno no parque.” Mas onde fica o parque?',
        choices: [{ text: 'Linu läheb infopunkti ja küsib teed.', translation: 'O Linu vai ao posto de informações e pergunta o caminho.', next: 'info' }],
      },
      info: {
        emoji: 'ℹ️',
        text: 'Infopunktis istub noormees. “Triin? Ta mängib pargis, väikesel laval. Sa lähed üle rippsilla ja siis paremale.”',
        translation: 'No posto de informações está sentado um rapaz. “A Triin? Ela toca no parque, no palco pequeno. Você atravessa a ponte suspensa e depois vira à direita.”',
        choices: [
          { text: 'Linu läheb rippsillale.', translation: 'O Linu vai para a ponte suspensa.', next: 'sild' },
          {
            text: 'Linu otsib Triinu kohvikust.',
            translation: 'O Linu procura a Triin no café.',
            wrong: 'O rapaz disse “Ta mängib pargis”: ela toca NO PARQUE (“-s” = em, dentro de). Nada de café: é atravessar a ponte e ir para o parque.',
          },
        ],
      },
      sild: {
        emoji: '🌉',
        text: 'Rippsild kõigub. Linu kott kukub sillalt alla, murule!',
        translation: 'A ponte suspensa balança. A bolsa do Linu cai da ponte, na grama!',
        choices: [
          { text: 'Linu jookseb alla ja võtab koti murult.', translation: 'O Linu corre lá para baixo e pega a bolsa na grama.', next: 'park' },
          {
            text: 'Linu otsib kotti jõest.',
            translation: 'O Linu procura a bolsa no rio.',
            wrong: 'O texto diz que a bolsa caiu “sillalt alla, murule”: da ponte PARA A GRAMA (“-le” = para cima de uma superfície). Ela não caiu no rio.',
          },
        ],
      },
      park: {
        emoji: '🌳',
        text: 'Pargis on palju inimesi. Väikesel laval istub Triin, kannel süles. Ta näeb Linut ja hüüab: “Linu! Tule lavale! Mul on sinu jaoks trumm.”',
        translation: 'No parque há muita gente. No palco pequeno está a Triin, com o kannel no colo. Ela vê o Linu e grita: “Linu! Sobe no palco! Tenho um tambor para você.”',
        choices: [
          { text: 'Linu läheb lavale ja lööb trummi.', translation: 'O Linu sobe no palco e toca o tambor.', next: 'final_bom' },
          { text: 'Linu jääb murule istuma ja plaksutab.', translation: 'O Linu fica sentado na grama e aplaude.', next: 'final_murul' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Triin mängib kannelt, Linu lööb trummi ja publik tantsib murul. Parim kontsert!',
        translation: 'A Triin toca kannel, o Linu toca tambor e o público dança na grama. O melhor show!',
        ending: { tone: 'bom', title: 'Pinguim no palco', message: 'O Linu achou o parque, resgatou a bolsa e ainda tocou no festival!' },
      },
      final_murul: {
        emoji: '👏',
        text: 'Linu istub murul ja kuulab. Kontsert on ilus, aga trumm jääb vaikseks.',
        translation: 'O Linu fica sentado na grama e escuta. O show é bonito, mas o tambor fica em silêncio.',
        ending: { tone: 'neutro', title: 'Da plateia', message: 'Bonito de ouvir, mas a Triin tinha guardado um tambor para você. Da próxima vez, suba no palco!' },
      },
    },
  },
  {
    id: 'et-h9',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Külaline Kihnus',
    emoji: '🛵',
    summary: 'Na ilha de Kihnu, o Linu anda de sidecar com a vovó Rutt, conhece a ilha e janta na casa dela.',
    cultural_context:
      'O espaço cultural de Kihnu, uma pequena ilha no golfo de Riga, está na lista do Patrimônio Cultural Imaterial da UNESCO. As mulheres da ilha ainda usam no dia a dia saias de lã listradas, feitas à mão, e é comum vê-las dirigindo motos com sidecar.',
    start: 'start',
    glossary: [
      ['praam', 'balsa'],
      ['tekk / tekil / tekile', 'convés / no convés / para o convés'],
      ['sadam / sadamas / sadamast', 'porto / no porto / do porto'],
      ['külghaagis / külghaagisesse', 'sidecar / para dentro do sidecar'],
      ['seelik', 'saia'],
      ['majakas', 'farol'],
      ['laual / laualt', 'na mesa / da mesa'],
    ],
    nodes: {
      start: {
        emoji: '⛴️',
        text: 'Linu sõidab praamiga Kihnu saarele. Praamil on palju turiste ja jalgrattaid.',
        translation: 'O Linu vai de balsa para a ilha de Kihnu. Na balsa há muitos turistas e bicicletas.',
        choices: [
          { text: 'Linu läheb tekile.', translation: 'O Linu vai para o convés.', next: 'tekk' },
          { text: 'Linu jääb salongi ja joob kohvi.', translation: 'O Linu fica no salão e toma café.', next: 'sadam' },
        ],
      },
      tekk: {
        emoji: '🦭',
        text: 'Tekil puhub tuul. Linu vaatab merele ja näeb kivil hüljest!',
        translation: 'No convés venta. O Linu olha para o mar e vê uma foca numa pedra!',
        choices: [{ text: 'Praam jõuab sadamasse.', translation: 'A balsa chega ao porto.', next: 'sadam' }],
      },
      sadam: {
        emoji: '👵',
        text: 'Sadamas ootab vanaema Rutt. Tal on seljas punane triibuline seelik ja ta istub külghaagisega mootorrattal. “Tere, Linu! Istu külghaagisesse!”',
        translation: 'No porto, a vovó Rutt está esperando. Ela usa uma saia vermelha listrada e está sentada numa moto com sidecar. “Oi, Linu! Senta no sidecar!”',
        choices: [
          { text: 'Linu istub külghaagisesse.', translation: 'O Linu senta no sidecar.', next: 'soit' },
          {
            text: 'Linu istub mootorrattale ja tahab juhtida.',
            translation: 'O Linu senta na moto e quer pilotar.',
            wrong: 'A Rutt disse “Istu külghaagisesse!”: senta DENTRO DO SIDECAR (“-sse” = para dentro de). Quem pilota a moto é ela!',
          },
        ],
      },
      soit: {
        emoji: '🛵',
        text: 'Nad sõidavad sadamast külla. Rutt näitab: “Siin on kirik, seal on muuseum ja kaugel on majakas.”',
        translation: 'Eles vão do porto para a aldeia. A Rutt mostra: “Aqui é a igreja, ali é o museu e lá longe fica o farol.”',
        choices: [
          { text: 'Linu tahab minna muuseumisse.', translation: 'O Linu quer ir ao museu.', next: 'muuseum' },
          { text: 'Linu tahab minna majaka juurde.', translation: 'O Linu quer ir até o farol.', next: 'majakas' },
        ],
      },
      muuseum: {
        emoji: '🧶',
        text: 'Muuseumis on vanad fotod ja palju seelikuid. Rutt räägib: “Kihnu naised koovad seelikuid ise.”',
        translation: 'No museu há fotos antigas e muitas saias. A Rutt conta: “As mulheres de Kihnu tecem as saias elas mesmas.”',
        choices: [{ text: 'Linu ja Rutt sõidavad muuseumist koju.', translation: 'O Linu e a Rutt vão do museu para casa.', next: 'kodu' }],
      },
      majakas: {
        emoji: '🗼',
        text: 'Majaka juures on tugev tuul. Linu seisab kivil ja vaatab kaugele merele.',
        translation: 'Perto do farol venta forte. O Linu fica de pé numa pedra e olha o mar lá longe.',
        choices: [{ text: 'Linu ja Rutt sõidavad majaka juurest koju.', translation: 'O Linu e a Rutt vão do farol para casa.', next: 'kodu' }],
      },
      kodu: {
        emoji: '🐟',
        text: 'Õhtul on Linu Ruti kodus. Laual on praetud kala ja must leib. Rutt laulab vana Kihnu laulu.',
        translation: 'À noite, o Linu está na casa da Rutt. Na mesa há peixe frito e pão preto. A Rutt canta uma velha canção de Kihnu.',
        choices: [
          { text: 'Linu võtab laualt kala, kuulab ja laulab kaasa.', translation: 'O Linu pega peixe da mesa, escuta e canta junto.', next: 'final_bom' },
          { text: 'Linu on väsinud ja läheb kohe voodisse.', translation: 'O Linu está cansado e vai direto para a cama.', next: 'final_voodi' },
          {
            text: 'Linu otsib kala külmkapist.',
            translation: 'O Linu procura peixe na geladeira.',
            wrong: 'O texto diz “Laual on praetud kala”: o peixe está NA MESA (“-l” = em cima de), prontinho. Não precisa abrir a geladeira!',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu ja Rutt laulavad koos hilja õhtuni. Kihnus on Linul nüüd vanaema!',
        translation: 'O Linu e a Rutt cantam juntos até tarde da noite. Agora o Linu tem uma avó em Kihnu!',
        ending: { tone: 'bom', title: 'Uma avó na ilha', message: 'Do porto para o sidecar, do sidecar para a mesa: o Linu entendeu cada “-sse”, “-st” e “-l”.' },
      },
      final_voodi: {
        emoji: '😴',
        text: 'Linu magab kohe. Läbi une kuuleb ta veel Ruti laulu.',
        translation: 'O Linu dorme na hora. No meio do sono, ele ainda ouve a canção da Rutt.',
        ending: { tone: 'neutro', title: 'Cantiga de ninar', message: 'Um dia cheio! Ficou faltando cantar junto com a Rutt.' },
      },
    },
  },

  // ───────────────────────── A2.2 ─────────────────────────
  {
    id: 'et-h10',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Viies aastaaeg',
    emoji: '🛶',
    summary: 'Na “quinta estação” de Soomaa, o Linu passeia de canoa pela floresta alagada com o guia Andres.',
    cultural_context:
      'Na primavera, quando a neve derrete, os rios do Parque Nacional de Soomaa transbordam e alagam florestas e prados: é a “quinta estação” (viies aastaaeg). Nessa época, o jeito de passear é de haabjas, uma canoa tradicional escavada num só tronco de álamo-tremedor (haab).',
    start: 'start',
    glossary: [
      ['haabjas', 'canoa escavada num tronco de álamo-tremedor'],
      ['kopra pesa', 'a toca do castor (genitivo: “kopra” = do castor)'],
      ['palju kopraid', 'muitos castores (depois de “palju”, partitivo plural)'],
      ['kaks õuna', 'duas maçãs (depois de número, partitivo singular)'],
      ['leiba, juustu', 'pão, queijo (partitivo: uma parte, não o todo)'],
      ['päästevest', 'colete salva-vidas'],
      ['aerutama', 'remar'],
    ],
    nodes: {
      start: {
        emoji: '🌊',
        text: 'Kevad Soomaal. Jõgede vesi on kõrge ja metsad on vee all. Giid Andres näitab oma paati: “See on haabjas. See on tehtud ühest haavapuust.”',
        translation: 'Primavera em Soomaa. A água dos rios está alta e as florestas estão debaixo d’água. O guia Andres mostra o barco dele: “Isto é um haabjas. Ele é feito de um único tronco de álamo.”',
        choices: [
          { text: 'Linu istub paadi ette.', translation: 'O Linu senta na frente do barco.', next: 'paat' },
          { text: 'Linu küsib: “Kus on päästevest?”', translation: 'O Linu pergunta: “Cadê o colete salva-vidas?”', next: 'vest' },
        ],
      },
      vest: {
        emoji: '🦺',
        text: 'Andres annab Linule päästevesti. “Ohutus on kõige tähtsam!”',
        translation: 'O Andres dá um colete salva-vidas ao Linu. “Segurança é o mais importante!”',
        choices: [{ text: 'Linu paneb vesti selga ja istub paati.', translation: 'O Linu veste o colete e senta no barco.', next: 'paat' }],
      },
      paat: {
        emoji: '🌲',
        text: 'Paat sõidab puude vahel. Vesi on vaikne. Kaldal on suur okste hunnik: kopra pesa.',
        translation: 'O barco passa entre as árvores. A água está calma. Na margem há um monte grande de galhos: a toca do castor.',
        choices: [
          { text: 'Linu vaatab kopra pesa.', translation: 'O Linu olha a toca do castor.', next: 'kobras' },
          { text: 'Linu pildistab vee ääres lilli.', translation: 'O Linu fotografa flores na beira da água.', next: 'lilled' },
        ],
      },
      kobras: {
        emoji: '🦫',
        text: 'Pesa juures ujub kobras. Tal on suured kollased hambad. Andres ütleb: “Soomaal on palju kopraid.”',
        translation: 'Perto da toca nada um castor. Ele tem dentes grandes e amarelos. O Andres diz: “Em Soomaa há muitos castores.”',
        choices: [
          { text: 'Linu lehvitab koprale.', translation: 'O Linu acena para o castor.', next: 'louna' },
          {
            text: 'Linu mõtleb: “See on Soomaa ainus kobras.”',
            translation: 'O Linu pensa: “Este é o único castor de Soomaa.”',
            wrong: 'O Andres disse “palju kopraid”: MUITOS castores. “Kopraid” é o partitivo plural, que vem depois de “palju” (muito, muitos).',
          },
        ],
      },
      lilled: {
        emoji: '🌼',
        text: 'Vee ääres on palju kollaseid lilli. Linu teeb kümme pilti.',
        translation: 'Na beira da água há muitas flores amarelas. O Linu tira dez fotos.',
        choices: [{ text: 'Andres ütleb: “Nüüd on lõuna!”', translation: 'O Andres diz: “Agora é hora do almoço!”', next: 'louna' }],
      },
      louna: {
        emoji: '🧺',
        text: 'Lõunaks on Andrese kotis leiba, juustu ja kaks õuna. “Võta, mida tahad!”',
        translation: 'Para o almoço, na bolsa do Andres há pão, queijo e duas maçãs. “Pega o que quiser!”',
        choices: [
          { text: '“Palun üks õun ja natuke juustu.”', translation: '“Uma maçã e um pouco de queijo, por favor.”', next: 'edasi' },
          {
            text: 'Linu võtab kolm õuna.',
            translation: 'O Linu pega três maçãs.',
            wrong: 'Na bolsa só há “kaks õuna”: DUAS maçãs. Não dá para pegar três!',
          },
        ],
      },
      edasi: {
        emoji: '🛶',
        text: 'Pärast lõunat sõidab paat edasi. Linu näeb vees suurt kala.',
        translation: 'Depois do almoço, o barco segue em frente. O Linu vê um peixe grande na água.',
        choices: [
          { text: 'Linu aerutab koos Andresega ja laulab.', translation: 'O Linu rema com o Andres e canta.', next: 'final_bom' },
          { text: 'Linu kummardub vee kohale, et kala paremini näha.', translation: 'O Linu se debruça sobre a água para ver melhor o peixe.', next: 'final_vette' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Õhtul on nad tagasi. Linu teab nüüd palju uusi sõnu: haabjas, kobras, raba… ja viies aastaaeg!',
        translation: 'À noite eles estão de volta. Agora o Linu sabe muitas palavras novas: haabjas, castor, turfeira… e quinta estação!',
        ending: { tone: 'bom', title: 'Remador de Soomaa', message: 'O Linu remou pela floresta alagada e voltou com a cabeça cheia de palavras novas.' },
      },
      final_vette: {
        emoji: '💦',
        text: 'Plärts! Linu kukub vette. Vesi on külm, aga pingviin ujub hästi. Andres naerab ja aitab ta paati tagasi.',
        translation: 'Tchibum! O Linu cai na água. A água está fria, mas pinguim nada bem. O Andres ri e ajuda o Linu a voltar para o barco.',
        ending: { tone: 'neutro', title: 'Mergulho imprevisto', message: 'Ainda bem que o Linu estava de colete… e que é um pinguim!' },
      },
    },
  },
  {
    id: 'et-h11',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Valge daam',
    emoji: '🌕',
    summary: 'Numa noite de lua cheia de agosto, em Haapsalu, o Linu espera com a Siiri a aparição da Dama Branca na janela do castelo.',
    cultural_context:
      'Haapsalu, cidade balneária no oeste da Estônia, é famosa pela lenda da Dama Branca (Valge daam): dizem que, nas noites de lua cheia de agosto, a silhueta dela aparece na janela da capela da catedral do castelo. A cidade também é conhecida pelos xales de renda de tricô, tão finos que passam por dentro de um anel.',
    start: 'start',
    glossary: [
      ['täiskuu', 'lua cheia'],
      ['lossi juures', 'perto do castelo (genitivo “lossi” + “juures”)'],
      ['palju inimesi', 'muita gente (partitivo plural depois de “palju”)'],
      ['kaks pirukat', 'dois pastéis assados (número + partitivo singular)'],
      ['Valget daami näha', 'ver a Dama Branca (o objeto de “näha” aqui vai no partitivo)'],
      ['sall / sõrmus', 'xale / anel'],
      ['akna poole', 'em direção à janela'],
    ],
    nodes: {
      start: {
        emoji: '🏰',
        text: 'August. Linu on Haapsalus. Täna on täiskuu ja lossi juures on palju inimesi.',
        translation: 'Agosto. O Linu está em Haapsalu. Hoje é lua cheia, e perto do castelo há muita gente.',
        choices: [
          { text: 'Linu küsib ühelt naiselt, miks siin on nii palju inimesi.', translation: 'O Linu pergunta a uma mulher por que há tanta gente ali.', next: 'naine' },
          { text: 'Linu ostab putkast kaks pirukat.', translation: 'O Linu compra dois pastéis na barraquinha.', next: 'pirukad' },
        ],
      },
      pirukad: {
        emoji: '🥟',
        text: 'Pirukad on soojad: üks on kapsaga, teine lihaga. Linu sööb mõlemad ära.',
        translation: 'Os pastéis estão quentinhos: um de repolho, outro de carne. O Linu come os dois.',
        choices: [{ text: 'Linu küsib ühelt naiselt, miks siin on nii palju inimesi.', translation: 'O Linu pergunta a uma mulher por que há tanta gente ali.', next: 'naine' }],
      },
      naine: {
        emoji: '👩',
        text: 'Naise nimi on Siiri. “Täna öösel näeme Valget daami! Legendi järgi ilmub ta kabeli aknasse, aga ainult augusti täiskuu ajal.”',
        translation: 'A mulher se chama Siiri. “Hoje à noite vamos ver a Dama Branca! Segundo a lenda, ela aparece na janela da capela, mas só na lua cheia de agosto.”',
        choices: [
          { text: 'Linu tahab ka Valget daami näha.', translation: 'O Linu também quer ver a Dama Branca.', next: 'ootamine' },
          {
            text: '“Ma näen teda siis iga öö, eks?”',
            translation: '“Então eu vejo ela toda noite, né?”',
            wrong: 'A Siiri disse “ainult augusti täiskuu ajal”: SÓ na lua cheia de agosto. Perdeu hoje, só no ano que vem!',
          },
        ],
      },
      ootamine: {
        emoji: '🧣',
        text: 'Nad ootavad kiriku ees. Siiril on õlgadel ilus valge sall. “See on Haapsalu sall. Selle kudus mu vanaema.”',
        translation: 'Eles esperam em frente à igreja. A Siiri tem nos ombros um lindo xale branco. “É um xale de Haapsalu. Foi minha avó que tricotou.”',
        choices: [
          { text: 'Linu kiidab salli.', translation: 'O Linu elogia o xale.', next: 'sall' },
          { text: 'Linu vaatab kabeli akent.', translation: 'O Linu olha para a janela da capela.', next: 'aken' },
        ],
      },
      sall: {
        emoji: '💍',
        text: 'Siiri naeratab: “Haapsalu sall on nii õhuke, et selle saab tõmmata läbi sõrmuse!”',
        translation: 'A Siiri sorri: “O xale de Haapsalu é tão fino que dá para passá-lo por dentro de um anel!”',
        choices: [{ text: 'Linu vaatab nüüd kabeli akent.', translation: 'Agora o Linu olha para a janela da capela.', next: 'aken' }],
      },
      aken: {
        emoji: '🪟',
        text: 'Kell on kaksteist. Kõik vaatavad akna poole. Järsku on aknas midagi valget!',
        translation: 'É meia-noite. Todos olham para a janela. De repente, aparece algo branco na janela!',
        choices: [
          { text: 'Linu hüüab: “Ma näen teda!”', translation: 'O Linu grita: “Eu estou vendo ela!”', next: 'final_bom' },
          { text: 'Linu vaatab hoopis telefoni ja kirjutab sõbrale.', translation: 'O Linu, em vez disso, olha o celular e escreve para um amigo.', next: 'final_telefon' },
          {
            text: 'Linu vaatab lossi torni poole.',
            translation: 'O Linu olha para a torre do castelo.',
            wrong: 'O texto diz “Kõik vaatavad akna poole”: todos olham para a JANELA (akna, genitivo de “aken”), porque é ali que a Dama Branca aparece.',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Valge kuju aknas on ilus ja salapärane. Siiri ja Linu naeratavad. Selline öö on ainult Haapsalus!',
        translation: 'A figura branca na janela é linda e misteriosa. A Siiri e o Linu sorriem. Uma noite dessas só existe em Haapsalu!',
        ending: { tone: 'bom', title: 'Ele viu!', message: 'O Linu esperou a hora certa, no lugar certo, e viu a lenda de Haapsalu.' },
      },
      final_telefon: {
        emoji: '📱',
        text: 'Kui Linu üles vaatab, on aken jälle tume. Valge daam on läinud… järgmise augustini!',
        translation: 'Quando o Linu olha para cima, a janela está escura de novo. A Dama Branca foi embora… até o próximo agosto!',
        ending: { tone: 'neutro', title: 'Perdeu!', message: 'A Dama Branca só aparece uma vez por ano. Da próxima vez, deixe o celular no bolso!' },
      },
    },
  },
  {
    id: 'et-h12',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Suusad ja pannkoogid',
    emoji: '⛷️',
    summary: 'Em Otepää, a capital de inverno, o Linu aluga esquis, escolhe uma pista e termina o dia com panquecas.',
    cultural_context:
      'Otepää é chamada de “talvepealinn”, a capital de inverno da Estônia: tem colinas, lagos e pistas de esqui cross-country, e o centro esportivo de Tehvandi já recebeu etapas da Copa do Mundo de esqui.',
    start: 'start',
    glossary: [
      ['lund on palju', 'há muita neve (partitivo: “lund”, de “lumi”)'],
      ['suusad / suuski', 'esquis / esquis (partitivo plural: “preciso de esquis”)'],
      ['kepid / keppe', 'bastões'],
      ['saapad / saapaid', 'botas'],
      ['kolm paari saapaid', 'três pares de botas'],
      ['esimene / teine / kolmas', 'primeiro / segundo / terceiro'],
      ['tass teed', 'uma xícara de chá (“tass” + partitivo)'],
    ],
    nodes: {
      start: {
        emoji: '❄️',
        text: 'Talv Otepääl. Otepää on Eesti talvepealinn. Lund on palju ja metsas on suusarajad.',
        translation: 'Inverno em Otepää. Otepää é a capital de inverno da Estônia. Há muita neve, e na floresta há pistas de esqui.',
        choices: [
          { text: 'Linu läheb suusalaenutusse.', translation: 'O Linu vai à locadora de esquis.', next: 'laenutus' },
          { text: 'Linu vaatab kõigepealt suusatajaid.', translation: 'O Linu primeiro olha os esquiadores.', next: 'laenutus' },
        ],
      },
      laenutus: {
        emoji: '🎿',
        text: 'Laenutuses töötab Priit. “Tere! Sul on vaja suuski, keppe ja saapaid. Kui suured su jalad on?”',
        translation: 'Na locadora trabalha o Priit. “Oi! Você precisa de esquis, bastões e botas. Qual o tamanho dos seus pés?”',
        choices: [{ text: '“Mul on väikesed jalad. Kas teil on väikseid saapaid?”', translation: '“Eu tenho pés pequenos. Vocês têm botas pequenas?”', next: 'saapad' }],
      },
      saapad: {
        emoji: '🥾',
        text: 'Priit toob kolm paari saapaid. Esimesed on liiga suured, teised on liiga väikesed ja kolmandad on parajad.',
        translation: 'O Priit traz três pares de botas. O primeiro é grande demais, o segundo é pequeno demais e o terceiro é do tamanho certo.',
        choices: [
          { text: 'Linu võtab kolmandad saapad.', translation: 'O Linu pega o terceiro par.', next: 'rada' },
          {
            text: 'Linu võtab esimesed saapad.',
            translation: 'O Linu pega o primeiro par.',
            wrong: 'O texto diz “Esimesed on liiga suured”: o primeiro par é GRANDE DEMAIS. O par certo (parajad) é o terceiro (kolmandad).',
          },
        ],
      },
      rada: {
        emoji: '🗺️',
        text: 'Priit näitab kaarti: “Lühike rada on kolm kilomeetrit, pikk rada on kümme kilomeetrit. Pikal rajal on palju mägesid.”',
        translation: 'O Priit mostra o mapa: “A pista curta tem três quilômetros, a pista longa tem dez quilômetros. Na pista longa há muitas subidas.”',
        choices: [
          { text: 'Linu valib lühikese raja.', translation: 'O Linu escolhe a pista curta.', next: 'luhike' },
          { text: 'Linu valib pika raja.', translation: 'O Linu escolhe a pista longa.', next: 'pikk' },
        ],
      },
      luhike: {
        emoji: '🌲',
        text: 'Lühike rada on ilus: kuused, lumi ja vaikus. Raja lõpus on kohvik.',
        translation: 'A pista curta é linda: abetos, neve e silêncio. No fim da pista há um café.',
        choices: [{ text: 'Linu läheb kohvikusse.', translation: 'O Linu entra no café.', next: 'kohvik' }],
      },
      pikk: {
        emoji: '🏔️',
        text: 'Pikal rajal on järsud mäed. Linu kukub kaks korda lumme. Tal on külm ja kõht on tühi.',
        translation: 'Na pista longa as subidas são íngremes. O Linu cai duas vezes na neve. Ele está com frio e com fome.',
        choices: [
          { text: 'Linu pöörab tagasi ja läheb kohvikusse.', translation: 'O Linu dá meia-volta e vai para o café.', next: 'kohvik' },
          { text: 'Linu suusatab edasi, kõik kümme kilomeetrit.', translation: 'O Linu segue esquiando, os dez quilômetros inteiros.', next: 'final_vasinud' },
        ],
      },
      kohvik: {
        emoji: '🥞',
        text: 'Kohvikus on soe. Linu tellib tassi teed ja kaks pannkooki. Müüja ütleb: “Tass teed ja kaks pannkooki, kokku kuus eurot.”',
        translation: 'No café está quentinho. O Linu pede uma xícara de chá e duas panquecas. A atendente diz: “Uma xícara de chá e duas panquecas, seis euros ao todo.”',
        choices: [
          { text: 'Linu maksab kuus eurot ja sööb.', translation: 'O Linu paga seis euros e come.', next: 'final_bom' },
          {
            text: 'Linu maksab kaks eurot.',
            translation: 'O Linu paga dois euros.',
            wrong: 'A atendente disse “kokku kuus eurot”: SEIS euros ao todo. “Kaks” (dois) é o número de panquecas!',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Pannkoogid on maitsvad. Aknast näeb Linu lund ja suusatajaid. Homme tuleb ta tagasi!',
        translation: 'As panquecas estão deliciosas. Pela janela, o Linu vê a neve e os esquiadores. Amanhã ele volta!',
        ending: { tone: 'bom', title: 'Dia de neve', message: 'Botas certas, pista certa e panquecas quentes: inverno à estoniana.' },
      },
      final_vasinud: {
        emoji: '🥶',
        text: 'Õhtuks jõuab Linu raja lõppu. Ta on nii väsinud, et jääb kohe magama. Kümme kilomeetrit on pingviinile palju!',
        translation: 'À noite, o Linu chega ao fim da pista. Ele está tão cansado que pega no sono na hora. Dez quilômetros é muito para um pinguim!',
        ending: { tone: 'neutro', title: 'Maratonista exausto', message: 'Ele conseguiu, mas perdeu as panquecas. Da próxima vez, comece pela pista curta!' },
      },
    },
  },

  // ───────────────────────── B1.1 ─────────────────────────
  {
    id: 'et-h13',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Sibulatee',
    emoji: '🧅',
    summary: 'Às margens do lago Peipsi, o Linu compra cebolas e peixe da dona Nadja e ouve a história da aldeia dos velhos-crentes.',
    cultural_context:
      'Na margem oeste do lago Peipsi, um dos maiores da Europa, vivem há cerca de três séculos os velhos-crentes (vanausulised), russos que fugiram de perseguição religiosa. Suas aldeias se estendem ao longo de uma única rua comprida e são famosas pelas cebolas: a região é conhecida como a “rota da cebola” (Sibulatee).',
    start: 'start',
    glossary: [
      ['sõitis / läks / ostis', 'viajou / foi / comprou (o passado com “-s-” e “-si-”)'],
      ['ostis sibulaid × ostis sibula', 'comprou (umas) cebolas × comprou a cebola (objeto parcial no partitivo × objeto total no genitivo)'],
      ['jõi teed × jõi tee ära', 'tomou (um pouco de) chá × tomou o chá todo'],
      ['Osta! Istu! Joo! Proovi!', 'Compre! Sente! Beba! Prove! (imperativo de “tu”)'],
      ['latikas', 'brema, peixe de água doce do lago'],
      ['alles', 'ainda (restando); também “só, apenas” (alles eile = só ontem)'],
      ['vanausulised', 'velhos-crentes'],
    ],
    nodes: {
      start: {
        emoji: '🏘️',
        text: 'Eile sõitis Linu Tartust Peipsi järve äärde. Küla oli pikk ja kitsas: ainult üks tänav, aga palju maju. Ühe maja ees seisis laud, sibulaid täis.',
        translation: 'Ontem o Linu viajou de Tartu até a beira do lago Peipsi. A aldeia era comprida e estreita: uma rua só, mas muitas casas. Na frente de uma casa havia uma mesa cheia de cebolas.',
        choices: [
          { text: 'Linu läks laua juurde.', translation: 'O Linu foi até a mesa.', next: 'laud' },
          { text: 'Linu läks kõigepealt järve kaldale.', translation: 'O Linu foi primeiro até a margem do lago.', next: 'kallas' },
        ],
      },
      kallas: {
        emoji: '🌊',
        text: 'Järv oli nii suur, et Linu ei näinud teist kallast. Ta mõtles: “See on nagu meri!” Siis kõndis ta tagasi küla poole.',
        translation: 'O lago era tão grande que o Linu não via a outra margem. Ele pensou: “Isto parece um mar!” Depois voltou andando para a aldeia.',
        choices: [{ text: 'Linu läks sibulalaua juurde.', translation: 'O Linu foi até a mesa das cebolas.', next: 'laud' }],
      },
      laud: {
        emoji: '👵',
        text: 'Laua taga istus vanaproua Nadja. “Tere! Osta sibulaid, need on selle aasta omad!”',
        translation: 'Atrás da mesa estava sentada uma senhora, a dona Nadja. “Olá! Compre cebolas, são desta safra!”',
        choices: [
          { text: 'Linu ostis kilo sibulaid.', translation: 'O Linu comprou um quilo de cebolas.', next: 'sibulad' },
          { text: 'Linu küsis: “Kas teil on ka kurke?”', translation: 'O Linu perguntou: “A senhora também tem pepinos?”', next: 'kurgid' },
        ],
      },
      kurgid: {
        emoji: '🥒',
        text: '“Kurgid said eile otsa”, vastas Nadja. “Aga proovi suitsukala! Mu poeg püüdis kalad eile järvest.”',
        translation: '“Os pepinos acabaram ontem”, respondeu a Nadja. “Mas prove o peixe defumado! Meu filho pescou os peixes ontem no lago.”',
        choices: [{ text: 'Linu ostis kilo sibulaid ja vaatas kala.', translation: 'O Linu comprou um quilo de cebolas e olhou o peixe.', next: 'kala' }],
      },
      sibulad: {
        emoji: '🧅',
        text: 'Nadja pani sibulad kotti. “Proovi ka suitsukala. Mu poeg püüdis kalad eile järvest.”',
        translation: 'A Nadja pôs as cebolas na sacola. “Prove também o peixe defumado. Meu filho pescou os peixes ontem no lago.”',
        choices: [{ text: 'Linu vaatas kala.', translation: 'O Linu olhou o peixe.', next: 'kala' }],
      },
      kala: {
        emoji: '🐟',
        text: 'Nadja rääkis: “Eile püüdis poeg kolm latikat. Kaks ma juba müüsin, üks on veel alles.”',
        translation: 'A Nadja contou: “Ontem meu filho pescou três bremas. Duas eu já vendi, uma ainda está sobrando.”',
        choices: [
          { text: '“Siis ma võtan viimase latika!”', translation: '“Então eu levo a última brema!”', next: 'tee' },
          {
            text: '“Palun kaks latikat!”',
            translation: '“Duas bremas, por favor!”',
            wrong: 'A Nadja disse “Kaks ma juba müüsin, üks on veel alles”: ela JÁ VENDEU duas (müüsin, passado) e só sobrou uma.',
          },
        ],
      },
      tee: {
        emoji: '🫖',
        text: 'Nadja pakkis latika paberisse ja kutsus Linu majja. Laual oli samovar. “Istu ja joo teed!”',
        translation: 'A Nadja embrulhou a brema em papel e convidou o Linu para entrar em casa. Na mesa havia um samovar. “Sente e tome um chá!”',
        choices: [
          { text: 'Linu istus, jõi teed ja kuulas Nadjat.', translation: 'O Linu sentou, tomou chá e escutou a Nadja.', next: 'lood' },
          { text: 'Linu jõi tee kiiresti ära ja jooksis bussi peale.', translation: 'O Linu tomou o chá todo depressa e correu para o ônibus.', next: 'final_buss' },
        ],
      },
      lood: {
        emoji: '📜',
        text: 'Nadja rääkis: “Minu vanavanemad elasid ka selles külas. Nad kasvatasid sibulaid ja püüdsid kala, täpselt nagu meie.”',
        translation: 'A Nadja contou: “Meus avós também moravam nesta aldeia. Eles plantavam cebola e pescavam, igualzinho a nós.”',
        choices: [
          { text: 'Linu tänas Nadjat ja lubas tagasi tulla.', translation: 'O Linu agradeceu à Nadja e prometeu voltar.', next: 'final_bom' },
          {
            text: 'Linu küsis: “Kas te kolisite siia alles eelmisel aastal?”',
            translation: 'O Linu perguntou: “A senhora se mudou para cá só no ano passado?”',
            wrong: 'A Nadja contou que os AVÓS dela já moravam nesta aldeia (“Minu vanavanemad elasid ka selles külas”). A família está ali há gerações!',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Õhtul sõitis Linu Tartusse tagasi. Kotis olid sibulad, latikas ja Nadja kingitus: purk mett.',
        translation: 'À noite, o Linu voltou para Tartu. Na sacola estavam as cebolas, a brema e o presente da Nadja: um pote de mel.',
        ending: { tone: 'bom', title: 'Sacola cheia', message: 'O Linu comprou, provou, escutou e voltou com cebolas, peixe, mel e uma história de três séculos.' },
      },
      final_buss: {
        emoji: '🚌',
        text: 'Linu jõudis bussile, aga… latikas jäi Nadja lauale! Järgmine kord sööb ta selle ära.',
        translation: 'O Linu alcançou o ônibus, mas… a brema ficou na mesa da Nadja! Da próxima vez ele come.',
        ending: { tone: 'neutro', title: 'Pressa demais', message: 'Chá tomado às pressas, peixe esquecido. Na aldeia do lago, vale a pena sentar e escutar.' },
      },
    },
  },
  {
    id: 'et-h14',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Laulupeol',
    emoji: '🎤',
    summary: 'No Festival da Canção, em Tallinn, o Linu se atrasa para encontrar o coro, mas chega a tempo da canção final.',
    cultural_context:
      'O Festival da Canção (laulupidu) acontece desde 1869, quando o primeiro foi realizado em Tartu; hoje ele reúne dezenas de milhares de cantores no Lauluväljak, o anfiteatro ao ar livre de Tallinn, em geral a cada cinco anos. Entre 1987 e 1991, as multidões cantando juntas deram nome à “Revolução Cantada”, e a canção “Mu isamaa on minu arm”, com letra de Lydia Koidula, costuma fechar a festa.',
    start: 'start',
    glossary: [
      ['laulupidu', 'Festival da Canção'],
      ['koor / koorijuht', 'coro / regente do coro'],
      ['Tule! Võta! Joo!', 'Venha! Pegue! Beba! (imperativo de “tu”)'],
      ['Ära joo!', 'Não beba! (imperativo negativo: “ära” + a forma do imperativo)'],
      ['Laulge! Naeratage!', 'Cantem! Sorriam! (imperativo de “vocês”, com “-ge”)'],
      ['jõi natuke vett × jõi kogu vee ära', 'bebeu um pouco de água × bebeu a água toda (objeto parcial × total)'],
      ['lava taha / lava ette', 'para trás do palco / para a frente do palco'],
    ],
    nodes: {
      start: {
        emoji: '🎶',
        text: 'Juulis toimus Tallinnas laulupidu. Linu tuli Lauluväljakule juba hommikul. Rahvariided laenas ta sõbralt.',
        translation: 'Em julho aconteceu o Festival da Canção em Tallinn. O Linu chegou ao Lauluväljak já de manhã. A roupa típica ele pegou emprestada de um amigo.',
        choices: [
          { text: 'Linu otsis kohe oma koori.', translation: 'O Linu procurou o coro dele na hora.', next: 'koor' },
          { text: 'Linu ostis kõigepealt jäätist.', translation: 'O Linu primeiro comprou sorvete.', next: 'jaatis' },
        ],
      },
      jaatis: {
        emoji: '🍦',
        text: 'Linu sõi jäätise ära ja vaatas ringi. Väljakul oli kümneid tuhandeid inimesi, paljudel pärjad peas.',
        translation: 'O Linu terminou o sorvete e olhou em volta. No campo havia dezenas de milhares de pessoas, muitas com coroas de flores na cabeça.',
        choices: [{ text: 'Linu hakkas oma koori otsima.', translation: 'O Linu começou a procurar o coro dele.', next: 'koor' }],
      },
      koor: {
        emoji: '📞',
        text: 'Siis helistas koorijuht Mari: “Kus sa oled? Tule kohe lava taha! Ja võta noodid kaasa!”',
        translation: 'Aí a regente, a Mari, ligou: “Onde você está? Venha já para trás do palco! E traga as partituras!”',
        choices: [
          { text: 'Linu võttis noodid kotist ja jooksis lava taha.', translation: 'O Linu tirou as partituras da bolsa e correu para trás do palco.', next: 'lava' },
          {
            text: 'Linu jooksis lava ette, publiku sekka.',
            translation: 'O Linu correu para a frente do palco, no meio do público.',
            wrong: 'A Mari disse “Tule kohe lava TAHA”: para TRÁS do palco, onde ficam os cantores. “Lava ette” seria a frente, onde fica o público.',
          },
        ],
      },
      lava: {
        emoji: '💧',
        text: 'Lava taga oli sadu lauljaid. Mari andis Linule pudeli vett. “Joo natuke, aga ära joo kõike korraga. Päev on pikk!”',
        translation: 'Atrás do palco havia centenas de cantores. A Mari deu ao Linu uma garrafa de água. “Beba um pouco, mas não beba tudo de uma vez. O dia é longo!”',
        choices: [
          { text: 'Linu jõi natuke vett.', translation: 'O Linu bebeu um pouco de água.', next: 'proov' },
          {
            text: 'Linu jõi kogu vee korraga ära.',
            translation: 'O Linu bebeu a água toda de uma vez.',
            wrong: 'A Mari pediu “ära joo kõike korraga”: NÃO beba tudo de uma vez (“ära” + imperativo = proibição). “Jõi natuke vett” (um pouco, objeto parcial) era o certo.',
          },
        ],
      },
      proov: {
        emoji: '🎼',
        text: 'Enne kontserti oli proov. Dirigent ütles: “Laulge valjemini! Ja naeratage!”',
        translation: 'Antes do concerto houve um ensaio. O regente disse: “Cantem mais alto! E sorriam!”',
        choices: [
          { text: 'Linu laulis valjemini ja naeratas.', translation: 'O Linu cantou mais alto e sorriu.', next: 'laul' },
          { text: 'Linu laulis nii valjult, et kõik pöörasid pead.', translation: 'O Linu cantou tão alto que todo mundo virou a cabeça.', next: 'naer' },
        ],
      },
      naer: {
        emoji: '😂',
        text: 'Mari naeris: “Hästi, Linu, aga natuke vaiksemalt!” Kõik lauljad naersid kaasa.',
        translation: 'A Mari riu: “Muito bem, Linu, mas um pouco mais baixo!” Todos os cantores riram junto.',
        choices: [{ text: 'Linu naeris ka ja laulis edasi.', translation: 'O Linu também riu e continuou cantando.', next: 'laul' }],
      },
      laul: {
        emoji: '🇪🇪',
        text: 'Õhtul algas lõpulaul “Mu isamaa on minu arm”. Kõik tõusid püsti ja mõned inimesed nutsid.',
        translation: 'À noite começou a canção final, “Mu isamaa on minu arm” (Minha pátria é meu amor). Todos se levantaram, e algumas pessoas choraram.',
        choices: [
          { text: 'Linu laulis kogu südamest kaasa.', translation: 'O Linu cantou junto de todo o coração.', next: 'final_bom' },
          { text: 'Linu unustas sõnad ja lihtsalt kuulas.', translation: 'O Linu esqueceu a letra e só escutou.', next: 'final_kuulas' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Kui laul lõppes, oli väljak hetkeks vaikne. Siis plaksutasid kõik. Linu sai aru, miks eestlased laulupidu nii väga armastavad.',
        translation: 'Quando a canção terminou, o campo ficou em silêncio por um instante. Depois todos aplaudiram. O Linu entendeu por que os estonianos amam tanto o Festival da Canção.',
        ending: { tone: 'bom', title: 'Uma só voz', message: 'O Linu seguiu as ordens da regente, cantou com milhares de pessoas e entendeu a Revolução Cantada.' },
      },
      final_kuulas: {
        emoji: '🥲',
        text: 'Linu kuulas ja üks pisar veeres mööda nokka alla. Järgmiseks peoks õpib ta sõnad selgeks!',
        translation: 'O Linu escutou, e uma lágrima escorreu pelo bico. Para o próximo festival, ele vai decorar a letra!',
        ending: { tone: 'neutro', title: 'Emoção sem letra', message: 'Até só ouvindo é emocionante. Da próxima vez, com a letra na ponta da língua!' },
      },
    },
  },
  {
    id: 'et-h15',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Tarvas ja rüütel',
    emoji: '🏹',
    summary: 'Em Rakvere, o Linu fotografa o auroque de bronze, aprende arco e flecha no castelo e perde uma luva na taverna.',
    cultural_context:
      'Rakvere, no norte da Estônia, tem as ruínas de um castelo medieval sobre uma colina e, perto dele, uma grande estátua de bronze de um tarvas (o auroque, boi selvagem já extinto), símbolo da cidade: o antigo nome do lugar, Tarvanpea, quer dizer “cabeça de auroque”.',
    start: 'start',
    glossary: [
      ['tarvas', 'auroque, boi selvagem extinto'],
      ['tegi pildi × tegi pilte', 'tirou a foto × tirou (umas) fotos (objeto total × parcial)'],
      ['leidis kinda × ei leidnud kinnast', 'achou a luva × não achou a luva (com negação, o objeto vai sempre para o partitivo)'],
      ['Võta! Tule! Seisa! Lase!', 'Pegue! Venha! Fique de pé! Atire! (imperativo)'],
      ['rüütel', 'cavaleiro'],
      ['vibu / nool / märk', 'arco / flecha / alvo'],
      ['kõrts', 'taverna'],
    ],
    nodes: {
      start: {
        emoji: '🚆',
        text: 'Laupäeval sõitis Linu rongiga Rakverre. Linna kohal mäe peal seisis suur pronksist tarvas.',
        translation: 'No sábado, o Linu foi de trem para Rakvere. No alto do morro, acima da cidade, havia um grande auroque de bronze.',
        choices: [
          { text: 'Linu ronis mäele ja tegi tarvast pilte.', translation: 'O Linu subiu o morro e tirou fotos do auroque.', next: 'tarvas' },
          { text: 'Linu läks otse linnusesse.', translation: 'O Linu foi direto para o castelo.', next: 'linnus' },
        ],
      },
      tarvas: {
        emoji: '🐂',
        text: 'Tarvas oli nii suur, et see ei mahtunud ühele pildile. Linu tegi kolm pilti: sarvedest, jalgadest ja sabast.',
        translation: 'O auroque era tão grande que não cabia numa foto só. O Linu tirou três fotos: dos chifres, das patas e do rabo.',
        choices: [{ text: 'Linu kõndis edasi linnusesse.', translation: 'O Linu seguiu andando até o castelo.', next: 'linnus' }],
      },
      linnus: {
        emoji: '🛡️',
        text: 'Linnuse väravas ootas rüütel. “Tere tulemast! Täna õpid vibu laskma. Võta vibu ja tule minuga!”',
        translation: 'No portão do castelo esperava um cavaleiro. “Bem-vindo! Hoje você aprende a atirar com arco. Pegue o arco e venha comigo!”',
        choices: [
          { text: 'Linu võttis vibu ja läks rüütliga kaasa.', translation: 'O Linu pegou o arco e foi com o cavaleiro.', next: 'vibu' },
          { text: 'Linu ütles: “Aitäh, aga ma olen näljane”, ja läks kõrtsi.', translation: 'O Linu disse: “Obrigado, mas estou com fome”, e foi para a taverna.', next: 'korts' },
        ],
      },
      vibu: {
        emoji: '🎯',
        text: 'Rüütel näitas: “Seisa sirgelt. Vaata märki, mitte mind! Tõmba nöör taha ja lase!”',
        translation: 'O cavaleiro mostrou: “Fique reto. Olhe para o alvo, não para mim! Puxe a corda para trás e atire!”',
        choices: [
          { text: 'Linu tegi kõik täpselt nii.', translation: 'O Linu fez tudo exatamente assim.', next: 'tabas' },
          {
            text: 'Linu vaatas rüütlit ja lasi.',
            translation: 'O Linu olhou para o cavaleiro e atirou.',
            wrong: 'O cavaleiro mandou: “Vaata märki, mitte mind!”: olhe para o ALVO, não para mim. Olhando para o cavaleiro, a flecha vai para qualquer lado!',
          },
        ],
      },
      tabas: {
        emoji: '🏹',
        text: 'Nool lendas ja tabas märki! Rüütel plaksutas: “Tubli! Nüüd mine kõrtsi ja söö kõht täis!”',
        translation: 'A flecha voou e acertou o alvo! O cavaleiro aplaudiu: “Muito bem! Agora vá à taverna e encha a barriga!”',
        choices: [{ text: 'Linu läks kõrtsi.', translation: 'O Linu foi para a taverna.', next: 'korts' }],
      },
      korts: {
        emoji: '🍲',
        text: 'Kõrtsis sõi Linu suppi ja leiba. Supp oli nii hea, et ta sõi terve kausi tühjaks. Teenindaja küsis: “Kas soovite veel suppi?”',
        translation: 'Na taverna, o Linu comeu sopa e pão. A sopa estava tão boa que ele raspou a tigela inteira. A atendente perguntou: “Deseja mais sopa?”',
        choices: [
          { text: '“Jah, palun natuke veel!”', translation: '“Sim, um pouco mais, por favor!”', next: 'kinnas' },
          { text: '“Ei, aitäh, ma sõin juba küllalt.”', translation: '“Não, obrigado, já comi bastante.”', next: 'kinnas' },
        ],
      },
      kinnas: {
        emoji: '🧤',
        text: 'Kui Linu tahtis maksta, ei leidnud ta oma kinnast. Teenindaja ütles: “Vaata laua alla! Seal on midagi.”',
        translation: 'Quando o Linu quis pagar, não achou a luva dele. A atendente disse: “Olhe embaixo da mesa! Tem alguma coisa ali.”',
        choices: [
          { text: 'Linu vaatas laua alla ja leidis kinda.', translation: 'O Linu olhou embaixo da mesa e achou a luva.', next: 'final_bom' },
          { text: 'Linu ei viitsinud otsida ja läks ilma kindata.', translation: 'O Linu ficou com preguiça de procurar e foi embora sem a luva.', next: 'final_kinnas' },
          {
            text: 'Linu otsis kinnast kotist.',
            translation: 'O Linu procurou a luva na bolsa.',
            wrong: 'A atendente disse “Vaata laua alla!”: olhe EMBAIXO DA MESA. A luva estava lá, não na bolsa.',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Kinnas oli laua all! Linu pani kinda tiiva otsa ja sõitis õnnelikult koju.',
        translation: 'A luva estava embaixo da mesa! O Linu pôs a luva na ponta da asa e voltou feliz para casa.',
        ending: { tone: 'bom', title: 'Dia de cavaleiro', message: 'O Linu seguiu cada ordem: acertou o alvo e achou a luva. Rakvere aprovou!' },
      },
      final_kinnas: {
        emoji: '🥶',
        text: 'Rongis oli Linul üks tiib külm. Kinnas jäi Rakverre, kõrtsi laua alla.',
        translation: 'No trem, o Linu estava com uma asa gelada. A luva ficou em Rakvere, embaixo da mesa da taverna.',
        ending: { tone: 'neutro', title: 'Uma asa gelada', message: 'A atendente até disse onde procurar! Da próxima vez, “vaata laua alla”.' },
      },
    },
  },
  // ───────────────────────── B1.2 ─────────────────────────
  {
    id: 'et-h16',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Soomaa üleujutus',
    emoji: '🛶',
    summary: 'Na cheia de primavera de Soomaa, o Linu anda de haabjas, a canoa de tronco escavado, com o amigo Mart por uma floresta que virou lago.',
    cultural_context:
      'Soomaa (“terra dos pântanos”) é um parque nacional no sudoeste da Estônia, criado em 1993. Na primavera, com o degelo, os rios transbordam e alagam prados, florestas e estradas: os moradores chamam essa época de “viies aastaaeg”, a quinta estação, e por gerações se deslocaram de haabjas, uma canoa escavada num único tronco de álamo-tremedor.',
    start: 'start',
    glossary: [
      ['viies aastaaeg', 'a quinta estação (a cheia de primavera em Soomaa)'],
      ['haabjas', 'canoa escavada num tronco de álamo-tremedor (haab)'],
      ['üle kallaste', 'por cima das margens (transbordando)'],
      ['olen sõitnud / olin sõitnud', 'já andei / eu tinha andado (perfeito e mais-que-perfeito com “olema” + particípio -nud)'],
      ['hakkama aerutama', 'começar a remar (“hakkama” pede o supino -ma)'],
      ['tahtma proovida', 'querer experimentar (“tahtma” pede o infinitivo -da)'],
      ['laudtee', 'passarela de tábuas'],
      ['raba', 'turfeira, pântano elevado'],
    ],
    nodes: {
      start: {
        emoji: '🌊',
        text: 'Oli aprilli algus, ja Linu oli sõitnud Pärnust Soomaale. Tema sõber Mart oli talle kirjutanud, et jõed on üle kallaste tulnud ja et viies aastaaeg on alanud. “Kas sa oled kunagi haabjaga sõitnud?” küsis Mart kaldal.',
        translation: 'Era começo de abril, e o Linu tinha viajado de Pärnu até Soomaa. O amigo dele, Mart, tinha escrito que os rios tinham transbordado e que a quinta estação tinha começado. “Você já andou de haabjas alguma vez?”, perguntou o Mart na margem.',
        choices: [
          { text: '“Ei, aga ma olen alati tahtnud seda proovida!”', translation: '“Não, mas eu sempre quis experimentar!”', next: 'paat' },
          { text: '“Ei. Ma lähen enne rabasse jalutama.”', translation: '“Não. Primeiro vou caminhar na turfeira.”', next: 'laudtee' },
          {
            text: '“Ei, sest jõed on praegu ju kuivad.”',
            translation: '“Não, porque os rios agora estão secos.”',
            wrong: 'O Mart tinha escrito “jõed on üle kallaste tulnud”: os rios TRANSBORDARAM (“on tulnud” é o perfeito: a ação já aconteceu e o resultado vale agora). É a quinta estação, época de cheia!',
          },
        ],
      },
      laudtee: {
        emoji: '🪵',
        text: 'Linu läks üksi rabasse jalutama. Raba oli vaikne ja ilus, ja ta oli juba kaks kilomeetrit kõndinud, kui ta märkas, et vesi on laudtee peale tõusnud. Tema saapad olid läbimärjad.',
        translation: 'O Linu foi caminhar sozinho na turfeira. A turfeira estava silenciosa e bonita, e ele já tinha andado dois quilômetros quando percebeu que a água tinha subido por cima da passarela. As botas dele estavam encharcadas.',
        choices: [
          { text: 'Linu pöördus tagasi ja läks Mardi juurde.', translation: 'O Linu deu meia-volta e foi até o Mart.', next: 'paat' },
          { text: 'Linu jätkas vees kõndimist.', translation: 'O Linu continuou andando pela água.', next: 'final_mark' },
        ],
      },
      paat: {
        emoji: '🛶',
        text: 'Mart näitas Linule kitsast paati. Tema isa oli selle ise ühest haavatüvest teinud. “Istu keskele ja ära hakka kõikuma,” ütles Mart.',
        translation: 'O Mart mostrou ao Linu um barco estreito. O pai dele o tinha feito com as próprias mãos, de um tronco de álamo-tremedor. “Sente no meio e não comece a balançar”, disse o Mart.',
        choices: [
          { text: 'Linu istus ettevaatlikult paadi keskele.', translation: 'O Linu sentou com cuidado no meio do barco.', next: 'mets' },
          {
            text: 'Linu ronis paadi ninale seisma.',
            translation: 'O Linu subiu na proa do barco para ficar de pé.',
            wrong: 'O Mart disse “Istu keskele” (sente NO MEIO) e “ära hakka kõikuma” (não comece a balançar). De pé na proa, o haabjas vira na hora!',
          },
        ],
      },
      mets: {
        emoji: '🌳',
        text: 'Nad sõitsid üle heinamaa, mis oli muutunud järveks. Paat libises puude vahel, kus suvel on kuiv mets. Mart rääkis, et tema vanavanemad olid kevadeti käinud haabjaga isegi poes ja kirikus.',
        translation: 'Eles atravessaram um prado que tinha virado lago. O barco deslizava entre as árvores, onde no verão há uma floresta seca. O Mart contou que os avós dele iam de haabjas, na primavera, até o mercadinho e a igreja.',
        choices: [
          { text: 'Linu küsis, kas selline sõit on ohtlik.', translation: 'O Linu perguntou se um passeio desses é perigoso.', next: 'oht' },
          { text: 'Linu tahtis ise aerutada.', translation: 'O Linu quis remar ele mesmo.', next: 'aer' },
          {
            text: 'Linu küsis, kas siin on alati järv olnud.',
            translation: 'O Linu perguntou se ali sempre tinha sido um lago.',
            wrong: 'O texto diz que o prado “oli muutunud järveks” — TINHA VIRADO lago (mais-que-perfeito), e que no verão ali é uma floresta seca. O lago só existe na cheia.',
          },
        ],
      },
      oht: {
        emoji: '🦫',
        text: 'Mart naeris ja ütles, et ta on haabjaga sõitnud juba kakskümmend kevadet. “Ohtlik on ainult siis, kui sa unustad, kuhu sa oled auto jätnud,” lisas ta. Siis näitas ta Linule üht suurt koprapesa.',
        translation: 'O Mart riu e disse que já anda de haabjas há vinte primaveras. “Perigoso só é quando você esquece onde deixou o carro”, acrescentou. Depois mostrou ao Linu uma grande toca de castor.',
        choices: [{ text: 'Linu tegi pesast pildi.', translation: 'O Linu tirou uma foto da toca.', next: 'final_bom' }],
      },
      aer: {
        emoji: '🌀',
        text: 'Linu võttis aeru ja hakkas aerutama. Paat pööras kohe vasakule, siis paremale, ja lõpuks jäi see kahe kase vahele kinni. Mart ütles naerdes, et ka tema oli esimesel korral puu otsa sõitnud.',
        translation: 'O Linu pegou o remo e começou a remar. O barco virou logo para a esquerda, depois para a direita, e no fim ficou preso entre duas bétulas. O Mart disse, rindo, que ele também tinha batido numa árvore na primeira vez.',
        choices: [
          { text: 'Linu andis aeru Mardile tagasi.', translation: 'O Linu devolveu o remo ao Mart.', next: 'final_bom' },
          { text: 'Linu proovis uuesti, seekord aeglasemalt.', translation: 'O Linu tentou de novo, dessa vez mais devagar.', next: 'final_aerutaja' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Õhtul istusid nad Mardi talus ja jõid kuuma teed. Linu ütles, et ta pole kunagi nii palju vett näinud. Mart vastas, et nüüd on Linu ka natuke Soomaa inimene.',
        translation: 'À noite eles ficaram sentados no sítio do Mart tomando chá quente. O Linu disse que nunca tinha visto tanta água. O Mart respondeu que agora o Linu também era um pouquinho de Soomaa.',
        ending: { tone: 'bom', title: 'Pela floresta alagada', message: 'O Linu atravessou a quinta estação de haabjas e ouviu as histórias da família do Mart.' },
      },
      final_aerutaja: {
        emoji: '🏅',
        text: 'Seekord aerutas Linu aeglaselt ja rahulikult. Paat liikus otse edasi, ja Mart plaksutas käsi. “Sa oled õppinud kiiremini kui mina,” ütles ta.',
        translation: 'Dessa vez o Linu remou devagar e com calma. O barco seguiu reto, e o Mart bateu palmas. “Você aprendeu mais rápido do que eu”, disse ele.',
        ending: { tone: 'bom', title: 'Remador de Soomaa', message: 'Depois de bater numa bétula, o Linu aprendeu a guiar o haabjas sozinho.' },
      },
      final_mark: {
        emoji: '💧',
        text: 'Vesi tõusis üha kõrgemale, ja lõpuks pidi Linu ikkagi tagasi pöörduma. Kui ta kaldale jõudis, oli Mart juba ammu ära sõitnud. Linu istus kaldal märgade jalgadega ja vaatas, kuidas päike loojus.',
        translation: 'A água foi subindo cada vez mais, e no fim o Linu teve de voltar mesmo assim. Quando chegou à margem, o Mart já tinha partido havia muito tempo. O Linu ficou sentado na margem com os pés molhados, vendo o sol se pôr.',
        ending: { tone: 'neutro', title: 'Pés molhados', message: 'Na quinta estação, a passarela some debaixo da água. Da próxima vez, vá de haabjas com o Mart!' },
      },
    },
  },
  {
    id: 'et-h17',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Mari tädi mootorratas',
    emoji: '🏍️',
    summary: 'Na ilha de Kihnu, o Linu anda no sidecar da tia Mari e tenta aprender a tecer as famosas saias listradas.',
    cultural_context:
      'Kihnu é uma pequena ilha no golfo de Pärnu. Em 2003, a UNESCO proclamou o “espaço cultural de Kihnu” obra-prima do patrimônio oral e imaterial da humanidade: as mulheres da ilha mantêm vivos os cantos antigos e as saias listradas de lã que elas mesmas tecem, e ficaram famosas por andar de moto com sidecar pelas estradas de areia.',
    start: 'start',
    glossary: [
      ['külgkorviga mootorratas', 'moto com sidecar'],
      ['triibuline seelik', 'saia listrada'],
      ['kuduma', 'tricotar, tecer (em estoniano é o mesmo verbo)'],
      ['Kas sa oskad kududa?', 'Você sabe tecer? (“oskama” pede o infinitivo -da)'],
      ['hakkasin kuduma', 'comecei a tecer (“hakkama” pede o supino -ma)'],
      ['olin õppinud', 'eu tinha aprendido (mais-que-perfeito)'],
      ['praam', 'balsa'],
      ['lõng', 'fio de lã'],
    ],
    nodes: {
      start: {
        emoji: '⛴️',
        text: 'Linu oli juba ammu tahtnud Kihnu saarele sõita. Kui praam sadamasse jõudis, ootas teda seal Mari tädi punases triibulises seelikus. Ta oli tulnud külgkorviga mootorrattaga ja hüüdis: “Istu korvi, ma viin su koju!”',
        translation: 'Fazia tempo que o Linu queria ir à ilha de Kihnu. Quando a balsa chegou ao porto, a tia Mari o esperava ali, de saia listrada vermelha. Ela tinha vindo de moto com sidecar e gritou: “Senta no sidecar, eu te levo para casa!”',
        choices: [
          { text: 'Linu istus külgkorvi.', translation: 'O Linu sentou no sidecar.', next: 'soit' },
          { text: 'Linu ütles, et ta tahab parem jalgsi minna.', translation: 'O Linu disse que preferia ir a pé.', next: 'jalgsi' },
          {
            text: 'Linu istus mootorratta rooli.',
            translation: 'O Linu sentou no guidão da moto.',
            wrong: 'A tia Mari disse “Istu korvi” — senta no CESTO, isto é, no sidecar — e “ma viin su koju”, EU te levo. Quem pilota é ela!',
          },
        ],
      },
      jalgsi: {
        emoji: '🚶',
        text: 'Linu kõndis mööda metsateed küla poole. Ta oli juba tund aega kõndinud, kui temast sõitis mööda sama mootorratas. Mari tädi peatus ja küsis naerdes, kas Linu on nüüd kõndimisest küllalt saanud.',
        translation: 'O Linu foi andando pela estrada da floresta em direção à vila. Ele já tinha andado uma hora quando a mesma moto passou por ele. A tia Mari parou e perguntou, rindo, se agora o Linu já tinha se cansado de andar.',
        choices: [
          { text: 'Linu istus lõpuks korvi.', translation: 'O Linu finalmente sentou no sidecar.', next: 'soit' },
          { text: 'Linu ütles, et ta tahab edasi kõndida.', translation: 'O Linu disse que queria continuar andando.', next: 'final_kond' },
        ],
      },
      soit: {
        emoji: '💨',
        text: 'Mari tädi sõitis mööda liivast teed nii kiiresti, et Linu pidi korvi servast kinni hoidma. Ta rääkis, et ta on selle mootorrattaga sõitnud juba nelikümmend aastat. “Minu ema oli ka mootorrattaga sõitma õppinud,” lisas ta uhkelt.',
        translation: 'A tia Mari andava tão rápido pela estrada de areia que o Linu tinha de se segurar na borda do sidecar. Ela contou que já anda com aquela moto há quarenta anos. “Minha mãe também tinha aprendido a andar de moto”, acrescentou, orgulhosa.',
        choices: [{ text: 'Nad jõudsid Mari tädi tallu.', translation: 'Eles chegaram ao sítio da tia Mari.', next: 'talu' }],
      },
      talu: {
        emoji: '🧶',
        text: 'Toa nurgas olid vanad kangasteljed. Nende peal oli Mari tädi kudunud kõik oma seelikud. “Kas sa oskad kududa?” küsis ta ja pani Linule villase lõnga pihku.',
        translation: 'No canto da sala havia um tear antigo. Nele a tia Mari tinha tecido todas as suas saias. “Você sabe tecer?”, perguntou ela, e pôs um fio de lã na mão do Linu.',
        choices: [
          { text: '“Ei oska, aga ma tahan õppida.”', translation: '“Não sei, mas quero aprender.”', next: 'kudumine' },
          { text: '“Ei, ma lähen parem randa jalutama.”', translation: '“Não, prefiro ir caminhar na praia.”', next: 'rand' },
          {
            text: '“Ei, aitäh, ma ei ole näljane.”',
            translation: '“Não, obrigado, não estou com fome.”',
            wrong: 'A tia Mari perguntou “Kas sa oskad kududa?” — você SABE TECER? “Kududa” é o infinitivo de “kuduma” (tecer, tricotar), não tem nada a ver com comida. E ela pôs um fio de lã na mão dele!',
          },
        ],
      },
      kudumine: {
        emoji: '🪡',
        text: 'Mari tädi näitas, kuidas lõnga tuleb keerata. Linu kudus pool tundi, aga tema triibud tulid kõverad. “Ära muretse,” ütles Mari tädi, “mina hakkasin kuduma kuueaastaselt, ja ka minu esimesed triibud olid kõverad.”',
        translation: 'A tia Mari mostrou como se deve passar o fio. O Linu teceu meia hora, mas as listras dele saíram tortas. “Não se preocupe”, disse a tia Mari, “eu comecei a tecer com seis anos, e as minhas primeiras listras também eram tortas.”',
        choices: [{ text: 'Linu jätkas kudumist.', translation: 'O Linu continuou tecendo.', next: 'final_bom' }],
      },
      rand: {
        emoji: '🎣',
        text: 'Kivide vahel istus vana mees, kes parandas võrke. Ta rääkis, et mehed olid vanasti kuude kaupa merel olnud ja et naised olid kogu saare eest hoolitsenud. Päike hakkas juba loojuma.',
        translation: 'Entre as pedras estava sentado um velho consertando redes. Ele contou que antigamente os homens passavam meses no mar e que as mulheres cuidavam da ilha inteira. O sol já começava a se pôr.',
        choices: [
          { text: 'Linu läks tagasi Mari tädi juurde kuduma.', translation: 'O Linu voltou para a casa da tia Mari para tecer.', next: 'kudumine' },
          { text: 'Linu jäi rannas päikeseloojangut vaatama.', translation: 'O Linu ficou na praia vendo o pôr do sol.', next: 'final_praam' },
        ],
      },
      final_bom: {
        emoji: '🎶',
        text: 'Õhtul laulsid Mari tädi ja tema naabrid vanu Kihnu laule. Linu oli oma esimese väikese triibulise lapi valmis kudunud. Mari tädi ütles, et järgmisel suvel võib ta juba terve seeliku kududa.',
        translation: 'À noite, a tia Mari e as vizinhas cantaram antigas canções de Kihnu. O Linu tinha terminado de tecer seu primeiro pedacinho listrado. A tia Mari disse que no verão seguinte ele já poderia tecer uma saia inteira.',
        ending: { tone: 'bom', title: 'A primeira listra', message: 'O Linu andou de sidecar, aprendeu a tecer e ouviu os cantos de Kihnu.' },
      },
      final_praam: {
        emoji: '🌅',
        text: 'Linu jäi rannas nii kauaks, et viimane praam oli juba ära läinud. Mari tädi tuli teda mootorrattaga otsima. “Nüüd pead sa veel ühe öö Kihnus magama,” ütles ta rõõmsalt.',
        translation: 'O Linu ficou tanto tempo na praia que a última balsa já tinha ido embora. A tia Mari veio procurá-lo de moto. “Agora você vai ter de dormir mais uma noite em Kihnu”, disse ela, contente.',
        ending: { tone: 'neutro', title: 'Mais uma noite na ilha', message: 'O pôr do sol era lindo, mas a última balsa partiu sem o Linu. Pelo menos a tia Mari ficou feliz!' },
      },
      final_kond: {
        emoji: '🥾',
        text: 'Mari tädi raputas pead ja sõitis minema. Linu jõudis külla alles õhtul, väsinud ja näljane. Ta oli terve päeva kõndinud, aga saarest polnud ta peaaegu midagi näinud.',
        translation: 'A tia Mari balançou a cabeça e foi embora. O Linu só chegou à vila à noite, cansado e com fome. Ele tinha andado o dia inteiro, mas quase não tinha visto nada da ilha.',
        ending: { tone: 'neutro', title: 'Pinguim teimoso', message: 'Em Kihnu, o jeito tradicional de passear é no sidecar. Da próxima vez, aceite a carona da tia Mari!' },
      },
    },
  },
  {
    id: 'et-h18',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Kindad Tartu maratonil',
    emoji: '⛷️',
    summary: 'Em Otepää, no dia da grande maratona de esqui, a amiga Kadri esqueceu as luvas no hotel e o Linu precisa decidir o que fazer.',
    cultural_context:
      'Otepää, no sul da Estônia, é chamada de “talvepealinn”, a capital do inverno, por causa das pistas de esqui nos morros ao redor. Desde 1960 acontece o Tartu Maraton, a maratona de esqui cross-country mais famosa do país, que larga perto de Otepää e termina em Elva.',
    start: 'start',
    glossary: [
      ['talvepealinn', 'capital do inverno'],
      ['suusatama / suusatada', 'esquiar (supino -ma / infinitivo -da)'],
      ['oskama suusatada', 'saber esquiar (“oskama” pede o infinitivo -da)'],
      ['läks kindaid tooma', 'foi buscar as luvas (verbo de movimento + supino -ma)'],
      ['kindad', 'luvas'],
      ['olin unustanud', 'eu tinha esquecido (mais-que-perfeito)'],
      ['start / finiš', 'largada / chegada'],
      ['rada', 'pista'],
    ],
    nodes: {
      start: {
        emoji: '❄️',
        text: 'Oli veebruari keskpaik, ja Linu oli tulnud Otepääle, Eesti talvepealinna. Tema sõbranna Kadri oli terve talve Tartu maratoniks treeninud. Hommikul helistas ta Linule: “Ma olen oma kindad hotelli unustanud! Kas sa tood need mulle starti?”',
        translation: 'Era meados de fevereiro, e o Linu tinha vindo a Otepää, a capital do inverno da Estônia. A amiga dele, Kadri, tinha treinado o inverno inteiro para o Tartu Maraton. De manhã ela ligou para o Linu: “Eu esqueci minhas luvas no hotel! Você traz para mim na largada?”',
        choices: [
          { text: 'Linu jooksis kohe hotelli kindaid tooma.', translation: 'O Linu correu na hora para o hotel buscar as luvas.', next: 'hotell' },
          { text: 'Linu ütles, et ta peab enne hommikust sööma.', translation: 'O Linu disse que antes precisava tomar café da manhã.', next: 'hommik' },
          {
            text: 'Linu läks poodi Kadrile uusi suuski ostma.',
            translation: 'O Linu foi à loja comprar esquis novos para a Kadri.',
            wrong: 'A Kadri esqueceu “oma kindad” — as LUVAS dela — no hotel, não os esquis. E ela pediu para o Linu levá-las até a largada.',
          },
        ],
      },
      hotell: {
        emoji: '🧤',
        text: 'Kindad olid laual, täpselt seal, kuhu Kadri oli need õhtul jätnud. Linu võttis need ja hakkas stardi poole jooksma. Lumi oli sügav, ja ta polnud kunagi nii kiiresti jooksnud.',
        translation: 'As luvas estavam na mesa, exatamente onde a Kadri as tinha deixado na noite anterior. O Linu as pegou e começou a correr em direção à largada. A neve estava funda, e ele nunca tinha corrido tão rápido.',
        choices: [{ text: 'Linu jõudis starti.', translation: 'O Linu chegou à largada.', next: 'stardis' }],
      },
      hommik: {
        emoji: '🥞',
        text: 'Linu sõi rahulikult pannkooke ja jõi kohvi. Kui ta lõpuks hotellist kindad üles leidis, oli võistlus juba ammu alanud. Tuhanded suusatajad olid metsa vahele kadunud.',
        translation: 'O Linu comeu panquecas com calma e tomou café. Quando finalmente achou as luvas no hotel, a prova já tinha começado havia muito tempo. Milhares de esquiadores tinham sumido entre as árvores.',
        choices: [{ text: 'Linu sõitis bussiga Elvasse Kadrit ootama.', translation: 'O Linu foi de ônibus até Elva esperar a Kadri.', next: 'final_kulm' }],
      },
      stardis: {
        emoji: '🏁',
        text: 'Kadri ootas teda stardijoone juures ja hüppas rõõmust. “Ma olin juba mõelnud, et pean ilma kinnasteta sõitma!” ütles ta. Siis küsis ta, kas Linu oskab ka ise suusatada.',
        translation: 'A Kadri o esperava junto à linha de largada e pulou de alegria. “Eu já tinha pensado que ia ter de esquiar sem luvas!”, disse ela. Depois perguntou se o Linu também sabia esquiar.',
        choices: [
          { text: '“Oskan küll, aga ma pole ammu suusatanud.”', translation: '“Sei, sim, mas faz tempo que não esquio.”', next: 'rada' },
          { text: '“Ei oska. Ma lähen parem Elvasse sind ootama.”', translation: '“Não sei. Prefiro ir a Elva te esperar.”', next: 'finis' },
          {
            text: '“Jah, ma lähen kohe kindaid tooma!”',
            translation: '“Sim, vou já buscar as luvas!”',
            wrong: 'As luvas já foram entregues! A Kadri perguntou “kas Linu oskab suusatada” — se o Linu SABE ESQUIAR (“oskama” + infinitivo -da).',
          },
        ],
      },
      rada: {
        emoji: '🎿',
        text: 'Kadri andis Linule oma vanad suusad, mille ta oli varuks autosse pannud. Linu hakkas väikesel rajal suusatama, aga juba esimesel mäel kukkus ta lumme. Üks väike tüdruk sõitis temast mööda ja naeris.',
        translation: 'A Kadri deu ao Linu os esquis velhos dela, que tinha deixado no carro de reserva. O Linu começou a esquiar numa pista pequena, mas já no primeiro morro caiu na neve. Uma menininha passou por ele e riu.',
        choices: [
          { text: 'Linu tõusis püsti ja proovis uuesti.', translation: 'O Linu se levantou e tentou de novo.', next: 'final_suusataja' },
          { text: 'Linu läks Elvasse Kadrit ootama.', translation: 'O Linu foi a Elva esperar a Kadri.', next: 'finis' },
        ],
      },
      finis: {
        emoji: '⏱️',
        text: 'Elvas seisis Linu finiši juures ja vaatas, kuidas suusatajad saabusid. Paljud olid mitu tundi sõitnud ja nägid väga väsinud välja. Lõpuks nägi ta kaugel Kadri punast mütsi.',
        translation: 'Em Elva, o Linu ficou junto à chegada vendo os esquiadores chegarem. Muitos tinham esquiado várias horas e pareciam muito cansados. Por fim, ele viu ao longe a touca vermelha da Kadri.',
        choices: [{ text: 'Linu hüüdis ja plaksutas käsi.', translation: 'O Linu gritou e bateu palmas.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Kadri sõitis üle finišijoone ja kallistas Linut. Ta ütles, et tänu kinnastele on tema käed terve tee soojad olnud. “Järgmisel aastal hakkame koos treenima!” lubas ta.',
        translation: 'A Kadri cruzou a linha de chegada e abraçou o Linu. Ela disse que, graças às luvas, as mãos dela ficaram quentes o caminho inteiro. “No ano que vem vamos começar a treinar juntos!”, prometeu.',
        ending: { tone: 'bom', title: 'Mãos quentes', message: 'O Linu levou as luvas a tempo, e a Kadri terminou a maratona de Otepää a Elva.' },
      },
      final_suusataja: {
        emoji: '⛷️',
        text: 'Linu sõitis aeglaselt edasi ega kukkunud enam kordagi. Õhtuks oli ta kolm korda ümber väikese järve suusatanud. Kadri ütles telefonis, et nüüd on Linu päris talvepealinna suusataja.',
        translation: 'O Linu seguiu devagar e não caiu mais nenhuma vez. Até a noite, tinha esquiado três vezes em volta de um laguinho. A Kadri disse ao telefone que agora o Linu era um verdadeiro esquiador da capital do inverno.',
        ending: { tone: 'bom', title: 'De pé na neve', message: 'O Linu caiu, levantou e aprendeu a esquiar na capital do inverno.' },
      },
      final_kulm: {
        emoji: '🥶',
        text: 'Linu ootas Elvas finiši juures. Kadri tuli lõpuks, aga tema käed olid külmast punased. “Ma olin sulle ju hommikul helistanud!” ütles ta pahaselt.',
        translation: 'O Linu esperou em Elva, junto à chegada. A Kadri finalmente chegou, mas as mãos dela estavam vermelhas de frio. “Mas eu tinha te ligado de manhã!”, disse ela, chateada.',
        ending: { tone: 'neutro', title: 'Luvas atrasadas', message: 'As panquecas estavam boas, mas a Kadri esquiou a maratona inteira sem luvas.' },
      },
    },
  },
  // ───────────────────────── B1.3 ─────────────────────────
  {
    id: 'et-h19',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Soov Inglisillal',
    emoji: '🌉',
    summary: 'Em Tartu, a estudante Anne mostra ao Linu a Ponte dos Anjos, o bairro da Sopa e as lendas da cidade universitária.',
    cultural_context:
      'A Universidade de Tartu foi fundada em 1632, quando a região pertencia à Suécia, e é a mais antiga da Estônia; por isso Tartu é chamada de “vaimupealinn”, a capital espiritual do país. No morro de Toome fica a Inglisild (Ponte dos Anjos): diz a tradição que, ao atravessá-la pela primeira vez, a pessoa deve prender a respiração e fazer um pedido.',
    start: 'start',
    glossary: [
      ['räägitakse / öeldakse', 'contam, dizem (impessoal: sem sujeito definido)'],
      ['kutsutakse', 'é chamado, chamam (impessoal)'],
      ['ma tahaksin', 'eu gostaria (condicional -ks-)'],
      ['kui mul oleks…', 'se eu tivesse…'],
      ['hinge kinni hoidma', 'prender a respiração'],
      ['soovima', 'desejar, fazer um pedido'],
      ['sild', 'ponte'],
      ['köögiviljad', 'legumes, verduras'],
    ],
    nodes: {
      start: {
        emoji: '💏',
        text: 'Linu oli tulnud Tartusse oma sõbranna Anne juurde, kes õpib ülikoolis. Anne ootas teda Raekoja platsil suudlevate tudengite kuju juures. “Kui sul oleks aega, läheksime kohe Toomemäele,” ütles ta. “Seal on üks sild, millest räägitakse palju legende.”',
        translation: 'O Linu tinha vindo a Tartu visitar a amiga Anne, que estuda na universidade. A Anne o esperava na Praça da Prefeitura, junto à estátua dos estudantes se beijando. “Se você tivesse tempo, a gente iria logo ao morro de Toome”, disse ela. “Lá tem uma ponte sobre a qual contam muitas lendas.”',
        choices: [
          { text: '“Mul on aega küll. Lähme Toomemäele!”', translation: '“Tempo eu tenho, sim. Vamos ao morro de Toome!”', next: 'toome' },
          { text: '“Ma tahaksin enne midagi süüa.”', translation: '“Eu gostaria de comer alguma coisa antes.”', next: 'kohvik' },
        ],
      },
      toome: {
        emoji: '👼',
        text: 'Toomemäel viis Anne ta ühe vana silla juurde. “Seda kutsutakse Inglisillaks,” selgitas ta. “Öeldakse, et kui üle selle esimest korda minnakse, tuleks hinge kinni hoida ja midagi soovida.”',
        translation: 'No morro de Toome, a Anne o levou até uma ponte antiga. “Esta se chama Ponte dos Anjos”, explicou ela. “Dizem que, quando se atravessa por ela pela primeira vez, é preciso prender a respiração e fazer um pedido.”',
        choices: [
          { text: 'Linu hoidis hinge kinni ja läks üle silla.', translation: 'O Linu prendeu a respiração e atravessou a ponte.', next: 'soov' },
          {
            text: 'Linu hakkas sillal valjusti laulma, nagu Anne oli soovitanud.',
            translation: 'O Linu começou a cantar alto na ponte, como a Anne tinha recomendado.',
            wrong: 'A Anne não recomendou cantar! “Öeldakse, et… tuleks hinge kinni hoida” — dizem que É PRECISO PRENDER A RESPIRAÇÃO. “Öeldakse” é impessoal (dizem) e “tuleks” é condicional (seria preciso).',
          },
        ],
      },
      soov: {
        emoji: '🤫',
        text: 'Teisel pool silda hingas Linu sügavalt sisse. “Mida sa soovisid?” küsis Anne. Linu vastas, et soovist ei räägita ju kellelegi, muidu see ei täitu.',
        translation: 'Do outro lado da ponte, o Linu respirou fundo. “O que você pediu?”, perguntou a Anne. O Linu respondeu que pedido não se conta para ninguém, senão não se realiza.',
        choices: [
          { text: 'Nad läksid ülikooli peahoonet vaatama.', translation: 'Eles foram ver o prédio principal da universidade.', next: 'ylikool' },
          { text: 'Nad läksid Emajõe äärde jalutama.', translation: 'Eles foram passear à beira do rio Emajõgi.', next: 'jogi' },
        ],
      },
      kohvik: {
        emoji: '☕',
        text: 'Nad läksid väikesesse kohvikusse. Anne rääkis, et Tartut nimetatakse Eesti vaimupealinnaks, sest siin asub riigi vanim ülikool. “Kui sa oleksid siin tudeng, elaksid sa kindlasti Supilinnas,” lisas ta.',
        translation: 'Eles foram a um cafezinho. A Anne contou que Tartu é chamada de capital espiritual da Estônia, porque ali fica a universidade mais antiga do país. “Se você fosse estudante aqui, com certeza moraria no Supilinn”, acrescentou.',
        choices: [
          { text: '“Mis see Supilinn on? Ma tahaksin seda näha!”', translation: '“O que é esse Supilinn? Eu gostaria de ver!”', next: 'supilinn' },
          { text: '“Lähme ikkagi Toomemäele.”', translation: '“Vamos ao morro de Toome mesmo assim.”', next: 'toome' },
        ],
      },
      supilinn: {
        emoji: '🥕',
        text: 'Supilinnas olid vanad puumajad ja kitsad tänavad. Seda linnaosa kutsutakse Supilinnaks, sest tänavatele on antud köögiviljade nimed: Herne, Oa, Kartuli. Linu ütles, et ta elaks meeleldi Herne tänaval, ja Anne vastas, et siis peaks ta talvel ise ahju kütma.',
        translation: 'No Supilinn havia casas antigas de madeira e ruas estreitas. O bairro se chama Supilinn, “cidade da sopa”, porque as ruas receberam nomes de legumes: Ervilha, Feijão, Batata. O Linu disse que moraria com gosto na rua da Ervilha, e a Anne respondeu que aí ele teria de acender o fogão a lenha sozinho no inverno.',
        choices: [
          { text: 'Nad läksid edasi Emajõe äärde.', translation: 'Eles seguiram até a beira do Emajõgi.', next: 'jogi' },
          {
            text: 'Linu küsis, kas Supilinnas müüakse ainult suppi.',
            translation: 'O Linu perguntou se no Supilinn só se vende sopa.',
            wrong: 'O texto explica o nome: “tänavatele on antud köögiviljade nimed” — as ruas receberam NOMES DE LEGUMES (Herne, Oa, Kartuli). Ninguém falou de vender sopa!',
          },
        ],
      },
      ylikool: {
        emoji: '🏛️',
        text: 'Ülikooli peahoone oli valge ja sammastega. Anne rääkis, et ülikool asutati 1632. aastal ja et siin on õppinud paljud kuulsad eestlased. “Kui ma saaksin, jääksin siia igaveseks,” ütles ta.',
        translation: 'O prédio principal da universidade era branco, com colunas. A Anne contou que a universidade foi fundada em 1632 e que muitos estonianos famosos estudaram ali. “Se eu pudesse, ficaria aqui para sempre”, disse ela.',
        choices: [{ text: 'Linu ütles, et ta mõistab teda väga hästi.', translation: 'O Linu disse que a entendia muito bem.', next: 'final_bom' }],
      },
      jogi: {
        emoji: '🌧️',
        text: 'Emajõe ääres jalutasid inimesed ja sõitsid jalgratastega. Äkki hakkas vihma sadama. Anne ütles, et kui neil oleks vihmavari, võiksid nad veel natuke jalutada.',
        translation: 'À beira do Emajõgi, as pessoas passeavam e andavam de bicicleta. De repente começou a chover. A Anne disse que, se eles tivessem um guarda-chuva, poderiam passear mais um pouco.',
        choices: [
          { text: 'Nad jooksid kohvikusse sooja.', translation: 'Eles correram para um café se aquecer.', next: 'final_bom' },
          { text: 'Linu ütles, et vihm on pingviinile täiesti tavaline asi.', translation: 'O Linu disse que chuva é uma coisa totalmente normal para um pinguim.', next: 'final_mark' },
        ],
      },
      final_bom: {
        emoji: '🎓',
        text: 'Õhtul istusid nad jälle Raekoja platsil. Anne küsis, kas Linu tahaks sügisel Tartusse õppima tulla. Linu vastas, et kui ta saaks, tuleks ta kohe homme.',
        translation: 'À noite, eles estavam de novo na Praça da Prefeitura. A Anne perguntou se o Linu gostaria de vir estudar em Tartu no outono. O Linu respondeu que, se pudesse, viria já amanhã.',
        ending: { tone: 'bom', title: 'Capital espiritual', message: 'O Linu conheceu as lendas e os bairros de Tartu, e talvez volte como estudante.' },
      },
      final_mark: {
        emoji: '🤧',
        text: 'Linu jalutas vihmas edasi, ja Anne jalutas viisakalt kaasa. Järgmisel päeval oli Anne haige, ja Linu pidi üksi linna vaatama minema. “Kui ma oleksin teda kuulanud…” mõtles ta.',
        translation: 'O Linu continuou passeando na chuva, e a Anne o acompanhou por educação. No dia seguinte a Anne estava doente, e o Linu teve de ir ver a cidade sozinho. “Se eu tivesse escutado a Anne…”, pensou ele.',
        ending: { tone: 'neutro', title: 'Chuva de Tartu', message: 'Para um pinguim, chuva é normal; para a Anne, não. Da próxima vez, corram para o café!' },
      },
    },
  },
  {
    id: 'et-h20',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Seenel Lahemaal',
    emoji: '🍄',
    summary: 'No parque nacional de Lahemaa, o Linu vai colher cogumelos com o seu Jaan e aprende o que se come e o que não se come.',
    cultural_context:
      'Lahemaa, no norte da Estônia, foi criado em 1971 e é o parque nacional mais antigo do país. Ir colher cogumelos e frutinhas silvestres (“seenel käima”, “marjul käima”) é quase um esporte nacional, e o “igaüheõigus”, o direito de todos, permite em geral andar pelas florestas e colher o que elas dão.',
    start: 'start',
    glossary: [
      ['seenel käima', 'ir colher cogumelos'],
      ['korjatakse', 'colhe-se, colhem (impessoal)'],
      ['seda ei sööda', 'isso não se come (impessoal negativo)'],
      ['kivipuravik', 'boleto, cogumelo-rei'],
      ['kärbseseen', 'amanita-mata-moscas (vermelho de bolinhas brancas, venenoso)'],
      ['kui sul oleks aega', 'se você tivesse tempo (condicional -ks-)'],
      ['igaüheõigus', 'o direito de todos de andar e colher na natureza'],
      ['laudtee', 'passarela de tábuas'],
    ],
    nodes: {
      start: {
        emoji: '🌲',
        text: 'Septembris sõitis Linu Lahemaale, sest ta oli kuulnud, et eestlased armastavad seenel käia. Metsa serval kohtas ta vana meest, kellel oli käes korv. “Seeni korjatakse noaga, mitte kätega kiskudes,” ütles mees, keda kutsuti Jaaniks. “Kas sa tahaksid tulla?”',
        translation: 'Em setembro o Linu foi a Lahemaa, porque tinha ouvido dizer que os estonianos adoram colher cogumelos. Na beira da floresta, encontrou um senhor com um cesto na mão. “Cogumelo se colhe com faca, não arrancando com a mão”, disse o homem, que se chamava Jaan. “Você gostaria de vir?”',
        choices: [
          { text: 'Linu läks koos Jaaniga metsa.', translation: 'O Linu foi com o Jaan para a floresta.', next: 'mets' },
          { text: 'Linu ütles, et ta tahaks enne rabas käia.', translation: 'O Linu disse que gostaria de ir antes à turfeira.', next: 'raba' },
        ],
      },
      mets: {
        emoji: '🔪',
        text: 'Jaan leidis kiiresti ühe suure pruuni seene. “Seda nimetatakse kivipuravikuks, ja seda süüakse väga hea meelega,” ütles ta. Siis näitas ta punast valgete täppidega seent: “See on kärbseseen. Seda ei sööda kunagi.”',
        translation: 'O Jaan logo achou um cogumelo grande e marrom. “Este se chama boleto, e é comido com muito gosto”, disse ele. Depois mostrou um cogumelo vermelho de bolinhas brancas: “Este é o amanita-mata-moscas. Este não se come nunca.”',
        choices: [
          { text: 'Linu pani kivipuraviku ettevaatlikult korvi.', translation: 'O Linu pôs o boleto com cuidado no cesto.', next: 'korv' },
          { text: 'Linu küsis, kas siin tohib üldse seeni korjata.', translation: 'O Linu perguntou se ali é permitido colher cogumelos.', next: 'luba' },
          {
            text: 'Linu pani punase täpilise seene korvi, sest see oli kõige ilusam.',
            translation: 'O Linu pôs o cogumelo vermelho de bolinhas no cesto, porque era o mais bonito.',
            wrong: 'O Jaan avisou: “Seda ei sööda kunagi” — este NÃO SE COME nunca. “Ei sööda” é o impessoal negativo de “sööma”. O kärbseseen é venenoso, por mais bonito que seja!',
          },
        ],
      },
      luba: {
        emoji: '⚖️',
        text: 'Jaan selgitas, et Eestis kehtib igaüheõigus: metsas võib üldiselt marju ja seeni korjata. “Aga prügi metsa ei jäeta ja lõket ei tehta, kus juhtub,” lisas ta. Linu noogutas ja lõikas seene noaga ära.',
        translation: 'O Jaan explicou que na Estônia vale o direito de todos: em geral pode-se colher frutinhas e cogumelos na floresta. “Mas não se deixa lixo na mata, e não se faz fogueira em qualquer lugar”, acrescentou. O Linu concordou com a cabeça e cortou o cogumelo com a faca.',
        choices: [{ text: 'Nad korjasid edasi.', translation: 'Eles continuaram colhendo.', next: 'korv' }],
      },
      korv: {
        emoji: '🧺',
        text: 'Paari tunniga oli korv täis. Jaan ütles, et kui Linul oleks aega, võiksid nad õhtul koos seeni praadida. “Minu naine teeb seenekastet, mida süüakse kartulitega,” lisas ta.',
        translation: 'Em umas duas horas o cesto estava cheio. O Jaan disse que, se o Linu tivesse tempo, eles poderiam fritar os cogumelos juntos à noite. “Minha mulher faz um molho de cogumelos que se come com batata”, acrescentou.',
        choices: [
          { text: 'Linu võttis kutse rõõmuga vastu.', translation: 'O Linu aceitou o convite com alegria.', next: 'final_bom' },
          { text: 'Linu ütles, et ta tahaks enne päikeseloojangut ka rabas käia.', translation: 'O Linu disse que gostaria de ir também à turfeira antes do pôr do sol.', next: 'final_pime' },
        ],
      },
      raba: {
        emoji: '🪵',
        text: 'Viru raba laudtee viis läbi lagedate soode ja väikeste järvede. Laudtee ääres seisis silt: “Palun ärge astuge laudteelt maha.” Linu oli nii vaimustuses, et unustas aja täielikult.',
        translation: 'A passarela de Viru raba atravessava pântanos abertos e pequenos lagos. À beira da passarela havia uma placa: “Por favor, não saiam da passarela.” O Linu estava tão encantado que perdeu totalmente a noção do tempo.',
        choices: [
          { text: 'Linu läks tagasi metsa Jaani otsima.', translation: 'O Linu voltou à floresta procurando o Jaan.', next: 'final_yksi' },
          {
            text: 'Linu astus laudteelt maha, et järve ääres ujuda.',
            translation: 'O Linu saiu da passarela para nadar na beira do lago.',
            wrong: 'A placa dizia “Palun ärge astuge laudteelt maha” — por favor, NÃO saiam da passarela. Na turfeira, fora das tábuas, o chão é mole e frágil.',
          },
        ],
      },
      final_bom: {
        emoji: '🥘',
        text: 'Õhtul istus Linu Jaani köögis ja sõi seenekastet kartulitega. Jaani naine ütles, et parimad seened leitakse siis, kui metsa minnakse vara hommikul. Linu lubas, et järgmisel korral tõuseb ta koos päikesega.',
        translation: 'À noite, o Linu estava na cozinha do Jaan comendo molho de cogumelos com batata. A mulher do Jaan disse que os melhores cogumelos são encontrados quando se vai à floresta bem cedo. O Linu prometeu que da próxima vez acordaria junto com o sol.',
        ending: { tone: 'bom', title: 'Cesto cheio', message: 'O Linu aprendeu a colher cogumelos como um estoniano e ainda jantou com o Jaan.' },
      },
      final_pime: {
        emoji: '🔦',
        text: 'Linu jõudis rabasse alles siis, kui päike oli juba loojunud. Laudteel oli nii pime, et ta pidi telefoniga teed valgustama. Jaani seenekaste jäi seekord proovimata.',
        translation: 'O Linu só chegou à turfeira quando o sol já tinha se posto. Na passarela estava tão escuro que ele teve de iluminar o caminho com o celular. O molho de cogumelos do Jaan ficou sem ser provado dessa vez.',
        ending: { tone: 'neutro', title: 'Turfeira no escuro', message: 'A turfeira à noite não tem graça. Se tivesse aceitado o convite, o Linu teria jantado com o Jaan!' },
      },
      final_yksi: {
        emoji: '🍂',
        text: 'Kui Linu metsa servale jõudis, oli Jaan juba ammu koju läinud. Linu otsis üksi seeni, aga leidis ainult ühe väikese kukeseene. “Kui ma oleksin Jaaniga läinud, oleks mu korv nüüd täis,” mõtles ta.',
        translation: 'Quando o Linu chegou à beira da floresta, o Jaan já tinha ido para casa havia muito tempo. O Linu procurou cogumelos sozinho, mas só achou um cantarelo pequenininho. “Se eu tivesse ido com o Jaan, meu cesto agora estaria cheio”, pensou.',
        ending: { tone: 'neutro', title: 'Um cantarelo só', message: 'A turfeira era linda, mas sem o Jaan o Linu não achou quase nada.' },
      },
    },
  },
  {
    id: 'et-h21',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Suvepealinnas',
    emoji: '🏖️',
    summary: 'Em Pärnu, a capital do verão, o Linu enfrenta a água fria, experimenta a lama terapêutica e decide como passar a noite na praia.',
    cultural_context:
      'Pärnu, no sudoeste da Estônia, é chamada de “suvepealinn”, a capital do verão, por causa da praia longa e rasa. Desde o século XIX a cidade é uma estância de banhos, famosa também pelos tratamentos com lama terapêutica (muda).',
    start: 'start',
    glossary: [
      ['suvepealinn', 'capital do verão'],
      ['ujutakse / ei ujuta', 'nada-se / não se nada (impessoal)'],
      ['Kas te sooviksite…?', 'O senhor desejaria…? (condicional educado)'],
      ['mudavann / mudamähis', 'banho de lama / envoltório de lama'],
      ['rannavalvur', 'salva-vidas'],
      ['kajakas', 'gaivota'],
      ['oleksin pidanud', 'eu deveria ter… (condicional passado)'],
      ['jahe', 'fresco, friozinho'],
    ],
    nodes: {
      start: {
        emoji: '☀️',
        text: 'Juuli alguses saabus Linu Pärnusse, mida nimetatakse Eesti suvepealinnaks. Rannas oli palju inimesi, aga vees oli ainult mõni üksik. Rannavalvur ütles: “Vesi on täna külm, ainult viisteist kraadi. Sellise veega ujutakse vähe.”',
        translation: 'No começo de julho o Linu chegou a Pärnu, que é chamada de capital do verão da Estônia. Na praia havia muita gente, mas na água só uns poucos. O salva-vidas disse: “A água hoje está fria, só quinze graus. Com a água assim, pouca gente nada.”',
        choices: [
          { text: 'Linu hüppas rõõmsalt vette.', translation: 'O Linu pulou feliz na água.', next: 'vesi' },
          { text: 'Linu läks mudaravilasse küsima, kas ta saaks mudavanni teha.', translation: 'O Linu foi à clínica de lama perguntar se podia tomar um banho de lama.', next: 'muda' },
        ],
      },
      vesi: {
        emoji: '🐧',
        text: 'Pingviinile oli viisteist kraadi ideaalne. Linu ujus kaugele merele ja tuli tagasi alles tunni pärast. Kaldal ootas teda rannavalvur, kes ütles tõsiselt, et nii kaugele siin ei ujuta, sest seal sõidavad paadid.',
        translation: 'Para um pinguim, quinze graus era perfeito. O Linu nadou para longe mar adentro e só voltou uma hora depois. Na margem, o salva-vidas o esperava e disse, sério, que ali não se nada tão longe, porque lá passam barcos.',
        choices: [
          { text: 'Linu vabandas ja lubas edaspidi kalda lähedal ujuda.', translation: 'O Linu pediu desculpas e prometeu nadar perto da margem daqui em diante.', next: 'kiosk' },
          {
            text: 'Linu ujus kohe uuesti samasse kohta.',
            translation: 'O Linu nadou logo de novo para o mesmo lugar.',
            wrong: 'O salva-vidas disse “nii kaugele siin ei ujuta” — aqui NÃO SE NADA tão longe (impessoal negativo), porque passam barcos. Voltar para lá seria desobedecer!',
          },
        ],
      },
      muda: {
        emoji: '🛁',
        text: 'Mudaravila administraator oli väga viisakas. “Kas te sooviksite mudavanni või mudamähist?” küsis ta. “Mudavanne tehakse ainult hommikuti, aga mähise saaksite ka kohe.”',
        translation: 'A recepcionista da clínica de lama foi muito educada. “O senhor desejaria um banho de lama ou um envoltório de lama?”, perguntou ela. “Os banhos de lama só são feitos de manhã, mas o envoltório o senhor pode fazer agora mesmo.”',
        choices: [
          { text: '“Ma võtaksin mähise kohe.”', translation: '“Eu faria o envoltório agora.”', next: 'mahis' },
          { text: '“Siis tuleksin homme hommikul tagasi.”', translation: '“Então eu voltaria amanhã de manhã.”', next: 'kiosk' },
          {
            text: '“Ma tahaksin mudavanni kohe praegu.”',
            translation: '“Eu gostaria de um banho de lama agora mesmo.”',
            wrong: 'A recepcionista disse “Mudavanne tehakse ainult hommikuti” — os banhos de lama SÓ SÃO FEITOS DE MANHÃ. Agora só dá para fazer o envoltório (mähis).',
          },
        ],
      },
      mahis: {
        emoji: '🧖',
        text: 'Linu lamas soojas mudas, ja keegi mässis ta paksu tekki. Ta tundis, kuidas kõik lihased lõdvestusid. Kui ta lahkus, ütles administraator, et Pärnus on mudaga ravitud juba üle saja aasta.',
        translation: 'O Linu ficou deitado na lama morna, e alguém o enrolou num cobertor grosso. Ele sentiu todos os músculos relaxarem. Quando ele estava saindo, a recepcionista disse que em Pärnu se faz tratamento com lama há mais de cem anos.',
        choices: [{ text: 'Linu läks rahulikult randa tagasi.', translation: 'O Linu voltou tranquilo para a praia.', next: 'kiosk' }],
      },
      kiosk: {
        emoji: '🍦',
        text: 'Rannakioskis müüdi jäätist ja kohvi. Müüja rääkis, et õhtul toimub rannas kontsert ja et kui Linu tahaks, võiks ta ka minna. “Aga õhtuti läheb siin kiiresti jahedaks,” hoiatas ta.',
        translation: 'No quiosque da praia vendiam sorvete e café. A vendedora contou que à noite ia ter um show na praia e que, se o Linu quisesse, poderia ir também. “Mas à noite aqui esfria rápido”, avisou ela.',
        choices: [
          { text: 'Linu ostis sooja kampsuni ja jäi kontserdile.', translation: 'O Linu comprou uma blusa quente e ficou para o show.', next: 'final_bom' },
          { text: 'Linu ostis jäätist ja jagas seda kajakatega.', translation: 'O Linu comprou sorvete e dividiu com as gaivotas.', next: 'final_kajakas' },
          { text: 'Linu otsustas minna varakult magama.', translation: 'O Linu decidiu ir dormir cedo.', next: 'final_uni' },
        ],
      },
      final_bom: {
        emoji: '🎶',
        text: 'Õhtul kogunes rannale sadu inimesi. Lauldi vanu eesti laule, ja kõik laulsid kaasa. Linu mõtles, et kui ta saaks, jääks ta Pärnusse terveks suveks.',
        translation: 'À noite, centenas de pessoas se juntaram na praia. Cantaram-se antigas canções estonianas, e todo mundo cantou junto. O Linu pensou que, se pudesse, ficaria em Pärnu o verão inteiro.',
        ending: { tone: 'bom', title: 'Noite de verão', message: 'O Linu aproveitou a capital do verão até o último acorde do show na praia.' },
      },
      final_kajakas: {
        emoji: '🐦',
        text: 'Linu andis ühele kajakale natuke jäätist. Minuti pärast oli tema ümber kakskümmend karjuvat kajakat, ja üks neist varastas terve jäätise. Müüja näitas naerdes silti: “Kajakaid ei toideta!”',
        translation: 'O Linu deu um pouquinho de sorvete para uma gaivota. Um minuto depois havia vinte gaivotas gritando em volta dele, e uma delas roubou o sorvete inteiro. A vendedora, rindo, apontou uma placa: “Não se alimentam as gaivotas!”',
        ending: { tone: 'neutro', title: 'Assalto na praia', message: 'Em Pärnu, as gaivotas não se alimentam, e com razão! O Linu ficou sem sorvete.' },
      },
      final_uni: {
        emoji: '😴',
        text: 'Linu läks hotelli ja jäi kohe magama. Hommikul kuulis ta, et kontsert oli olnud suve parim. “Oleksin pidanud jääma,” ohkas ta.',
        translation: 'O Linu foi para o hotel e dormiu na hora. De manhã, ouviu que o show tinha sido o melhor do verão. “Eu deveria ter ficado”, suspirou ele.',
        ending: { tone: 'neutro', title: 'Dormiu cedo', message: 'Descansar é bom, mas o Linu perdeu a melhor noite do verão em Pärnu.' },
      },
    },
  },
  // ───────────────────────── B1.4 ─────────────────────────
  {
    id: 'et-h22',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Kaali kraater',
    emoji: '☄️',
    summary: 'Em Saaremaa, o Linu pedala de Kuressaare até a cratera de Kaali e tem de escolher entre o caminho mais curto e o mais bonito.',
    cultural_context:
      'Na ilha de Saaremaa fica o campo de crateras de Kaali, formado pela queda de um meteorito há alguns milhares de anos; a cratera principal, com cerca de 110 metros de diâmetro, guarda um lago redondo. Em Kuressaare, a capital da ilha, ergue-se um castelo episcopal medieval, um dos mais bem conservados dos países bálticos.',
    start: 'start',
    glossary: [
      ['olevat', 'dizem que é, supostamente (modo indireto -vat)'],
      ['lühem / kõige lühem', 'mais curto / o mais curto'],
      ['ilusam / kõige kindlam', 'mais bonito / o mais seguro'],
      ['kes / mis', 'que, quem (pronomes relativos)'],
      ['kraater', 'cratera'],
      ['sääsk', 'mosquito'],
      ['kadakas', 'zimbro (arbusto típico de Saaremaa)'],
      ['mandri oma', 'o do continente'],
    ],
    nodes: {
      start: {
        emoji: '🚲',
        text: 'Linu rentis Kuressaares jalgratta, et sõita Kaali kraatri juurde. Rendipunkti omanik Leida ütles, et mööda maanteed on tee lühem, aga metsatee olevat palju ilusam. “Kuigi seal olevat ka rohkem sääski,” lisas ta naerdes.',
        translation: 'O Linu alugou uma bicicleta em Kuressaare para ir até a cratera de Kaali. A dona da locadora, Leida, disse que pela rodovia o caminho é mais curto, mas que a estrada da floresta seria bem mais bonita. “Se bem que lá, dizem, também tem mais mosquito”, acrescentou rindo.',
        choices: [
          { text: 'Linu valis lühema tee.', translation: 'O Linu escolheu o caminho mais curto.', next: 'maantee' },
          { text: 'Linu valis ilusama tee.', translation: 'O Linu escolheu o caminho mais bonito.', next: 'metsatee' },
          {
            text: 'Linu valis metsatee, sest seal ei olevat ühtegi sääske.',
            translation: 'O Linu escolheu a estrada da floresta, porque lá supostamente não havia nenhum mosquito.',
            wrong: 'A Leida disse o contrário: “seal olevat ka rohkem sääski” — lá, DIZEM, tem MAIS mosquitos. “Olevat” é o modo indireto: ela repete o que ouviu, e “rohkem” é “mais”.',
          },
        ],
      },
      maantee: {
        emoji: '🛣️',
        text: 'Maantee oli sirge ja tasane, aga autod sõitsid kiiremini, kui Linu oli arvanud. Poolel teel nägi ta väikest kohvikut, mille ees seisis silt: “Saaremaa parim leib!”',
        translation: 'A rodovia era reta e plana, mas os carros andavam mais rápido do que o Linu tinha imaginado. No meio do caminho, ele viu um cafezinho com uma placa na frente: “O melhor pão de Saaremaa!”',
        choices: [
          { text: 'Linu peatus ja ostis leiba.', translation: 'O Linu parou e comprou pão.', next: 'leib' },
          { text: 'Linu sõitis edasi.', translation: 'O Linu seguiu em frente.', next: 'kaali' },
        ],
      },
      leib: {
        emoji: '🍞',
        text: 'Müüja, kes oli leiva ise küpsetanud, ütles, et Saaremaa leib olevat magusam kui mandri oma. Linu maitses ja pidi nõustuma. See oli kõige parem leib, mida ta oli kunagi söönud.',
        translation: 'A vendedora, que tinha assado o pão ela mesma, disse que o pão de Saaremaa seria mais docinho que o do continente. O Linu provou e teve de concordar. Era o melhor pão que ele já tinha comido.',
        choices: [{ text: 'Linu pani leiva kotti ja sõitis edasi.', translation: 'O Linu guardou o pão na bolsa e seguiu viagem.', next: 'kaali' }],
      },
      metsatee: {
        emoji: '🌿',
        text: 'Metsatee oli tõesti ilusam: kadakad, kiviaiad ja vaikus. Aga sääski oli nii palju, et Linu sõitis nii kiiresti, kui suutis. Ühel ristteel ei teadnud ta enam, kuhu minna.',
        translation: 'A estrada da floresta era de fato mais bonita: zimbros, muros de pedra e silêncio. Mas havia tanto mosquito que o Linu pedalava o mais rápido que conseguia. Numa encruzilhada, ele já não sabia para onde ir.',
        choices: [
          { text: 'Linu küsis teed mehelt, kes niitis muru.', translation: 'O Linu pediu informação a um homem que estava cortando a grama.', next: 'mees' },
          { text: 'Linu valis tee, mis tundus laiem.', translation: 'O Linu escolheu o caminho que parecia mais largo.', next: 'final_eksinud' },
        ],
      },
      mees: {
        emoji: '🧑‍🌾',
        text: 'Mees näitas paremale. “Kaali on siit kolm kilomeetrit,” ütles ta. “Kõige lühem tee on küll läbi metsa, aga kõige kindlam on mööda külateed.”',
        translation: 'O homem apontou para a direita. “Kaali fica a três quilômetros daqui”, disse ele. “O caminho mais curto é pela floresta, mas o mais seguro é pela estrada da vila.”',
        choices: [
          { text: 'Linu valis kõige kindlama tee.', translation: 'O Linu escolheu o caminho mais seguro.', next: 'kaali' },
          {
            text: 'Linu läks läbi metsa, sest mees ütles, et see on kõige kindlam.',
            translation: 'O Linu foi pela floresta, porque o homem disse que era o mais seguro.',
            wrong: 'O homem disse que pela floresta é “kõige lühem” (O MAIS CURTO), e que “kõige kindlam” (O MAIS SEGURO) é a estrada da vila. Cuidado com o superlativo de cada adjetivo!',
          },
        ],
      },
      kaali: {
        emoji: '🌑',
        text: 'Lõpuks seisis Linu kraatri serval. All oli ümmargune roheline järv, mida ümbritsesid kõrged puud. Leida oli rääkinud, et tema vanaema arvates olevat siia kunagi päike taevast alla kukkunud.',
        translation: 'Por fim o Linu estava na borda da cratera. Lá embaixo havia um lago verde e redondo, cercado de árvores altas. A Leida tinha contado que, segundo a avó dela, o sol teria caído do céu ali um dia.',
        choices: [{ text: 'Linu läks alla järve äärde.', translation: 'O Linu desceu até a beira do lago.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '✨',
        text: 'Järve ääres oli vaikne. Linu mõtles, et see on kõige salapärasem koht, mida ta Eestis on näinud. Õhtul ütles Leida, et kõik, kes Kaalis käivad, tulevat tagasi naeratades.',
        translation: 'Na beira do lago estava silencioso. O Linu pensou que aquele era o lugar mais misterioso que ele tinha visto na Estônia. À noite, a Leida disse que todos que vão a Kaali, pelo que dizem, voltam sorrindo.',
        ending: { tone: 'bom', title: 'Onde o céu caiu', message: 'O Linu chegou à cratera de Kaali e ouviu as lendas de Saaremaa.' },
      },
      final_eksinud: {
        emoji: '🧭',
        text: 'Laiem tee viis hoopis mere äärde. Linu sõitis tunde ringi, ja kui ta lõpuks Kaalisse jõudis, oli juba pime. Kraatrit ta peaaegu ei näinudki.',
        translation: 'O caminho mais largo foi dar no mar. O Linu pedalou horas perdido, e quando finalmente chegou a Kaali já estava escuro. A cratera ele quase nem viu.',
        ending: { tone: 'neutro', title: 'O caminho mais largo', message: 'Mais largo não quer dizer mais certo. Da próxima vez, pergunte o caminho!' },
      },
    },
  },
  {
    id: 'et-h23',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Kõpu tuletorni jutud',
    emoji: '🗼',
    summary: 'No farol de Kõpu, em Hiiumaa, o Linu ouve os causos do seu Ants e precisa separar o que é fato do que é “história de Hiiumaa”.',
    cultural_context:
      'O farol de Kõpu, em Hiiumaa, foi construído no século XVI e está entre os faróis mais antigos do mundo ainda em funcionamento. Os moradores da ilha, os “hiidlased”, têm fama de gostar de contar causos, e o folclore local fala do gigante Leiger, irmão do Suur Tõll de Saaremaa.',
    start: 'start',
    glossary: [
      ['tuletorn', 'farol'],
      ['luiskaja', 'contador de lorotas'],
      ['olevat ehitatud', 'dizem que foi construído (modo indireto -vat)'],
      ['vanem / kõige vanem', 'mais velho / o mais velho'],
      ['sinisem kui…', 'mais azul que…'],
      ['hiiglane', 'gigante'],
      ['Hiiu jutt', '“história de Hiiumaa”: lorota bem contada'],
      ['päikeseloojang', 'pôr do sol'],
    ],
    nodes: {
      start: {
        emoji: '🏝️',
        text: 'Hiiumaal sõitis Linu Kõpu tuletorni juurde. Torni juures istus vanamees Ants, kes müüs pileteid. “Räägitakse, et hiidlased olevat Eesti kõige suuremad luiskajad,” ütles ta. “Aga mina räägin ainult tõtt.”',
        translation: 'Em Hiiumaa, o Linu foi até o farol de Kõpu. Junto à torre estava sentado um velhinho, o Ants, que vendia os ingressos. “Contam que os hiidlased seriam os maiores contadores de lorota da Estônia”, disse ele. “Mas eu só falo a verdade.”',
        choices: [
          { text: 'Linu ostis pileti ja ronis torni.', translation: 'O Linu comprou um ingresso e subiu na torre.', next: 'torn' },
          { text: 'Linu palus Antsul tuletorni kohta midagi rääkida.', translation: 'O Linu pediu ao Ants que contasse alguma coisa sobre o farol.', next: 'lugu' },
        ],
      },
      lugu: {
        emoji: '👴',
        text: 'Ants rääkis, et tuletorn olevat ehitatud juba 16. sajandil ja et see on üks vanemaid tuletorne maailmas. “Minu vanaisa olevat siit kord selge ilmaga Rootsi näinud,” lisas ta ja pilgutas silma.',
        translation: 'O Ants contou que o farol teria sido construído já no século XVI e que é um dos faróis mais antigos do mundo. “Meu avô, dizem, uma vez viu a Suécia daqui, num dia claro”, acrescentou, piscando o olho.',
        choices: [
          { text: 'Linu naeris: “See on vist Hiiu jutt!”', translation: 'O Linu riu: “Isso deve ser história de Hiiumaa!”', next: 'torn' },
          {
            text: 'Linu küsis Antsult, millal ta ise Rootsi nägi.',
            translation: 'O Linu perguntou ao Ants quando ele mesmo viu a Suécia.',
            wrong: 'Não foi o Ants: “Minu vanaisa olevat… näinud” — o AVÔ dele TERIA visto. O “olevat” mostra que é coisa que se conta, sem garantia, e a piscadela diz o resto!',
          },
        ],
      },
      torn: {
        emoji: '🪜',
        text: 'Trepp oli kitsam ja järsem, kui Linu oli arvanud. Ülevalt paistis meri, mis oli sinisem kui kunagi varem, ja mets, mis ulatus silmapiirini. Ants hüüdis alt, et üleval on tuul alati tugevam kui all.',
        translation: 'A escada era mais estreita e mais íngreme do que o Linu tinha imaginado. Lá de cima se via o mar, mais azul do que nunca, e a floresta, que ia até o horizonte. O Ants gritou lá de baixo que em cima o vento é sempre mais forte que embaixo.',
        choices: [
          { text: 'Linu jäi üles vaatama.', translation: 'O Linu ficou lá em cima olhando.', next: 'yleval' },
          { text: 'Linu tuli alla, sest tuul oli liiga tugev.', translation: 'O Linu desceu, porque o vento estava forte demais.', next: 'all' },
          {
            text: 'Linu võttis mütsi peast, sest üleval pidi olema soojem.',
            translation: 'O Linu tirou o gorro, porque lá em cima devia estar mais quente.',
            wrong: 'O Ants avisou que “üleval on tuul alati tugevam kui all” — em cima o vento é sempre MAIS FORTE que embaixo. Nada de mais quente: segure o gorro!',
          },
        ],
      },
      yleval: {
        emoji: '🎨',
        text: 'Üleval kohtas Linu noort naist, kes joonistas merd. Ta ütles, et tuleb siia igal suvel, sest siit olevat näha kõige ilusam päikeseloojang terves Eestis. “Nii vähemalt ütleb Ants,” lisas ta naerdes.',
        translation: 'Lá em cima o Linu conheceu uma moça que desenhava o mar. Ela disse que vem ali todo verão, porque dali, dizem, se vê o pôr do sol mais bonito da Estônia inteira. “Pelo menos é o que o Ants diz”, acrescentou rindo.',
        choices: [
          { text: 'Linu jäi päikeseloojangut ootama.', translation: 'O Linu ficou esperando o pôr do sol.', next: 'final_bom' },
          { text: 'Linu läks alla Antsu juurde.', translation: 'O Linu desceu até o Ants.', next: 'all' },
        ],
      },
      all: {
        emoji: '🫖',
        text: 'All pakkus Ants Linule tassi teed ja rääkis veel ühe loo. Tema sõnul olevat Hiiumaal kunagi elanud hiiglane Leiger, kes oli tugevam kui kõik teised mehed. Tema vend Suur Tõll olevat elanud Saaremaal.',
        translation: 'Lá embaixo, o Ants ofereceu uma xícara de chá ao Linu e contou mais uma história. Segundo ele, teria vivido em Hiiumaa um gigante, o Leiger, que era mais forte que todos os outros homens. O irmão dele, o Suur Tõll, teria vivido em Saaremaa.',
        choices: [
          { text: '“Kas see on tõsi või Hiiu jutt?” küsis Linu.', translation: '“Isso é verdade ou história de Hiiumaa?”, perguntou o Linu.', next: 'final_jutt' },
          { text: 'Linu vaatas kella ja kiirustas praamile.', translation: 'O Linu olhou o relógio e correu para a balsa.', next: 'final_praam' },
        ],
      },
      final_bom: {
        emoji: '🌅',
        text: 'Päike loojus aeglaselt merre, ja taevas muutus üha punasemaks. Linu mõtles, et see oli tõesti kõige ilusam päikeseloojang, mida ta oli näinud. Seekord polnud see Hiiu jutt.',
        translation: 'O sol foi se pondo devagar no mar, e o céu ficou cada vez mais vermelho. O Linu pensou que aquele era mesmo o pôr do sol mais bonito que ele já tinha visto. Dessa vez não era história de Hiiumaa.',
        ending: { tone: 'bom', title: 'Pôr do sol em Kõpu', message: 'O Linu subiu no velho farol e viu, com os próprios olhos, que o Ants dessa vez não exagerou.' },
      },
      final_jutt: {
        emoji: '😉',
        text: 'Ants naeratas salapäraselt. “Hiidlane ei valeta kunagi,” ütles ta. “Ta räägib lihtsalt natuke ilusamini, kui asjad tegelikult olid.”',
        translation: 'O Ants sorriu, misterioso. “Um hiidlane nunca mente”, disse ele. “Ele só conta um pouquinho mais bonito do que as coisas foram de verdade.”',
        ending: { tone: 'bom', title: 'Um causo de Hiiumaa', message: 'O Linu aprendeu a ouvir o “olevat” dos causos, e ganhou um chá e uma boa resposta.' },
      },
      final_praam: {
        emoji: '⛴️',
        text: 'Linu jõudis praamile täpselt õigel ajal. Laeval kuulis ta, et Kõpu päikeseloojang olevat täna eriti ilus olnud. Ta ohkas ja lubas järgmisel korral kauemaks jääda.',
        translation: 'O Linu chegou à balsa bem na hora. No barco, ouviu dizer que o pôr do sol em Kõpu teria sido especialmente bonito naquele dia. Ele suspirou e prometeu ficar mais tempo da próxima vez.',
        ending: { tone: 'neutro', title: 'Com pressa', message: 'O Linu pegou a balsa, mas perdeu o pôr do sol de Kõpu. Fica para a próxima!' },
      },
    },
  },
  {
    id: 'et-h24',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Baltimaade kõrgeim tipp',
    emoji: '⛰️',
    summary: 'Em Haanja, o Linu sobe o Suur Munamägi com o amigo Kaspar e descobre que uma montanha pequena pode ter uma vista enorme.',
    cultural_context:
      'O Suur Munamägi (“Grande Montanha do Ovo”), em Haanja, no sudeste da Estônia, tem 318 metros e é o ponto mais alto dos países bálticos. No topo há uma torre de observação de onde se avista uma paisagem de florestas, lagos e colinas.',
    start: 'start',
    glossary: [
      ['kõrge / kõrgem / kõige kõrgem', 'alto / mais alto / o mais alto'],
      ['kõrgeim', 'o mais alto (superlativo curto)'],
      ['kümme korda kõrgem', 'dez vezes mais alto'],
      ['tipp', 'cume, topo'],
      ['vaatetorn', 'torre de observação'],
      ['olevat näha', 'dizem que se vê (modo indireto -vat)'],
      ['järsk / järsem', 'íngreme / mais íngreme'],
      ['küngas', 'colina'],
    ],
    nodes: {
      start: {
        emoji: '🚗',
        text: 'Linu ja tema sõber Kaspar sõitsid Võrumaale, et ronida Suurele Munamäele. “See on Baltimaade kõige kõrgem tipp,” ütles Kaspar uhkelt. “Kolmsada kaheksateist meetrit!”',
        translation: 'O Linu e o amigo Kaspar foram de carro até Võrumaa para subir o Suur Munamägi. “É o ponto mais alto dos países bálticos”, disse o Kaspar, orgulhoso. “Trezentos e dezoito metros!”',
        choices: [
          { text: '“Brasiilia kõrgeim mägi on peaaegu kümme korda kõrgem,” naeris Linu.', translation: '“A montanha mais alta do Brasil é quase dez vezes mais alta”, riu o Linu.', next: 'vaidlus' },
          { text: '“Lähme siis üles!”', translation: '“Então vamos subir!”', next: 'rada' },
        ],
      },
      vaidlus: {
        emoji: '😤',
        text: 'Kaspar solvus natuke. Ta ütles, et mägi ei pea olema kõrge, et olla ilus. Tipus olevat vaatetorn, kust olevat selge ilmaga näha ka Lätit ja Venemaad.',
        translation: 'O Kaspar ficou um pouco ofendido. Ele disse que uma montanha não precisa ser alta para ser bonita. No topo haveria uma torre de observação de onde, com tempo bom, se veria até a Letônia e a Rússia.',
        choices: [
          { text: 'Linu vabandas ja nad hakkasid ronima.', translation: 'O Linu pediu desculpas, e eles começaram a subir.', next: 'rada' },
          { text: 'Linu ütles, et nii madalale mäele pole mõtet ronida.', translation: 'O Linu disse que não vale a pena subir numa montanha tão baixa.', next: 'final_auto' },
          {
            text: 'Linu ütles, et tornist näeb ju ainult Eestit.',
            translation: 'O Linu disse que da torre só se vê a Estônia.',
            wrong: 'O Kaspar disse que da torre “olevat näha ka Lätit ja Venemaad” — dizem que se vê TAMBÉM a Letônia e a Rússia. “Olevat” é o modo indireto: ele repete o que se conta.',
          },
        ],
      },
      rada: {
        emoji: '🥾',
        text: 'Rada oli lühem, kui Linu oli kartnud, aga palju järsem. Poolel teel istus pingil vanaproua, kes puhkas. Ta ütles, et on sellele mäele roninud igal aastal juba viiskümmend aastat.',
        translation: 'A trilha era mais curta do que o Linu tinha temido, mas bem mais íngreme. No meio do caminho, uma senhora descansava num banco. Ela disse que sobe aquela montanha todo ano há cinquenta anos.',
        choices: [
          { text: 'Linu istus tema kõrvale ja küsis, miks.', translation: 'O Linu sentou ao lado dela e perguntou por quê.', next: 'proua' },
          { text: 'Linu ronis edasi tippu.', translation: 'O Linu continuou subindo até o topo.', next: 'tipp' },
        ],
      },
      proua: {
        emoji: '🍎',
        text: 'Vanaproua rääkis, et tema noorusajal olevat tornis olnud ainult trepp. “Nüüd on üles saamine palju lihtsam, aga vaade on sama ilus,” ütles ta. Ta andis Linule õuna, mis oli tema enda aiast.',
        translation: 'A senhora contou que, na juventude dela, a torre teria só escada. “Agora subir é muito mais fácil, mas a vista é igualmente bonita”, disse ela. Ela deu ao Linu uma maçã, que era do quintal dela.',
        choices: [{ text: 'Linu tänas ja ronis edasi.', translation: 'O Linu agradeceu e continuou subindo.', next: 'tipp' }],
      },
      tipp: {
        emoji: '🗼',
        text: 'Tipus seisis valge vaatetorn. Kaspar ütles, et torni saab minna trepist või liftiga. “Trepp olevat tervislikum, aga lift on muidugi kiirem,” naeris ta.',
        translation: 'No topo havia uma torre de observação branca. O Kaspar disse que dava para subir na torre de escada ou de elevador. “Dizem que a escada é mais saudável, mas o elevador, claro, é mais rápido”, riu ele.',
        choices: [
          { text: 'Linu valis trepi.', translation: 'O Linu escolheu a escada.', next: 'final_bom' },
          { text: 'Linu valis lifti.', translation: 'O Linu escolheu o elevador.', next: 'lift' },
          {
            text: 'Linu valis lifti, sest see olevat tervislikum.',
            translation: 'O Linu escolheu o elevador, porque dizem que é mais saudável.',
            wrong: 'Foi o contrário: “Trepp olevat tervislikum” — a ESCADA seria mais saudável; o elevador é “kiirem”, mais rápido. Repare em qual substantivo vem com cada comparativo.',
          },
        ],
      },
      lift: {
        emoji: '🛗',
        text: 'Lift oli tõesti kiirem, aga Kaspar tuli trepist ja jõudis üles peaaegu sama ajaga. “Näed, trepp polegi palju aeglasem!” hüüdis ta hingeldades.',
        translation: 'O elevador era mesmo mais rápido, mas o Kaspar veio de escada e chegou lá em cima quase ao mesmo tempo. “Viu? A escada nem é tão mais lenta!”, gritou ele, ofegante.',
        choices: [{ text: 'Linu naeris ja vaatas alla.', translation: 'O Linu riu e olhou para baixo.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🌄',
        text: 'Tornist paistsid lõputud metsad, järved ja küngad. Linu tunnistas, et Suur Munamägi on küll väiksem kui Brasiilia mäed, aga vaade on sama suurepärane. Kaspar naeratas: “Eestis on kõik veidi väiksem, aga mitte halvem.”',
        translation: 'Da torre se viam florestas, lagos e colinas sem fim. O Linu admitiu que o Suur Munamägi é menor que as montanhas do Brasil, mas que a vista é igualmente maravilhosa. O Kaspar sorriu: “Na Estônia tudo é um pouco menor, mas não pior.”',
        ending: { tone: 'bom', title: 'O teto do Báltico', message: 'O Linu subiu ao ponto mais alto dos países bálticos e fez as pazes com o Kaspar.' },
      },
      final_auto: {
        emoji: '📱',
        text: 'Kaspar ronis üksi üles. Tagasi tulles näitas ta Linule telefonis pilte: metsad, järved ja kauged küngad. Linu pidi tunnistama, et see vaade oli palju ilusam kui auto aken.',
        translation: 'O Kaspar subiu sozinho. Na volta, mostrou ao Linu fotos no celular: florestas, lagos e colinas distantes. O Linu teve de admitir que aquela vista era muito mais bonita que a janela do carro.',
        ending: { tone: 'neutro', title: 'A vista pelo celular', message: 'Uma montanha baixa ainda pode ter uma vista alta. Da próxima vez, suba com o Kaspar!' },
      },
    },
  },
  // ───────────────────────── B2.1 ─────────────────────────
  {
    id: 'et-h25',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Kaks kindlust',
    emoji: '🏰',
    summary: 'Em Narva, na fronteira leste, o Linu visita o castelo com a guia Olga, olha a fortaleza da outra margem e pesca no calçadão do rio.',
    cultural_context:
      'Narva, na fronteira leste da Estônia, fica à margem do rio Narva: de um lado está o castelo de Narva (o castelo de Hermann), do outro a fortaleza de Ivangorod, na Rússia, e as duas se olham há séculos. A maioria dos moradores da cidade fala russo em casa, e muitos falam também estoniano.',
    start: 'start',
    glossary: [
      ['jõe kaldal seisev', 'que fica na margem do rio (particípio presente -v)'],
      ['teisel kaldal asuv', 'situado na outra margem'],
      ['jõest leitud', 'encontrado no rio (particípio passado passivo -tud)'],
      ['eesti keelt rääkiv', 'que fala estoniano'],
      ['kaht kallast ühendav sild', 'a ponte que liga as duas margens'],
      ['kindlus', 'fortaleza'],
      ['piiri ületama', 'cruzar a fronteira'],
      ['õng', 'vara de pescar'],
    ],
    nodes: {
      start: {
        emoji: '🏰',
        text: 'Jõe kaldal seisev kindlus paistis kaugele. Linu, kes oli just Tallinnast saabunud, vaatas imestunult teisel kaldal asuvat teist kindlust. “See on Ivangorod, see on juba Venemaa,” ütles tema kõrval seisev noor naine, kelle nimi oli Olga.',
        translation: 'O castelo à margem do rio se via de longe. O Linu, que tinha acabado de chegar de Tallinn, olhava admirado a outra fortaleza, situada na margem oposta. “Aquela é Ivangorod, já é a Rússia”, disse a moça ao lado dele, que se chamava Olga.',
        choices: [
          { text: 'Linu küsis, kas Olga töötab kindluses.', translation: 'O Linu perguntou se a Olga trabalhava no castelo.', next: 'olga' },
          { text: 'Linu läks üksi jõepromenaadile jalutama.', translation: 'O Linu foi sozinho passear no calçadão do rio.', next: 'promenaad' },
          {
            text: 'Linu arvas, et mõlemad kindlused asuvad Eestis.',
            translation: 'O Linu achou que as duas fortalezas ficavam na Estônia.',
            wrong: 'A fortaleza “teisel kaldal asuv” — SITUADA NA OUTRA MARGEM — é Ivangorod, e a Olga disse: “see on juba Venemaa”, já é a Rússia. O rio Narva é a fronteira.',
          },
        ],
      },
      olga: {
        emoji: '👩‍🏫',
        text: 'Olga naeratas: ta oli kindluse muuseumis töötav giid. Ta rääkis, et vastastikku seisvad kindlused on sajandeid teineteist valvanud. “Neid kutsutakse mõnikord kaheks naabriks, kes vaatavad teineteisele otsa,” ütles ta.',
        translation: 'A Olga sorriu: ela era guia no museu do castelo. Ela contou que as fortalezas, uma de frente para a outra, vigiam-se há séculos. “Às vezes as chamam de duas vizinhas que se olham nos olhos”, disse ela.',
        choices: [
          { text: 'Linu ostis pileti ja läks muuseumi.', translation: 'O Linu comprou um ingresso e entrou no museu.', next: 'muuseum' },
          { text: 'Linu küsis, mis keelt Narvas räägitakse.', translation: 'O Linu perguntou que língua se fala em Narva.', next: 'keel' },
        ],
      },
      keel: {
        emoji: '🗣️',
        text: 'Olga selgitas, et suurem osa Narva elanikest räägib kodus vene keelt, aga paljud oskavad ka eesti keelt. Tema ise oli eesti keele ära õppinud koolis ja ülikoolis. “Eesti keelt rääkiv pingviin on siin küll haruldane külaline,” naeris ta.',
        translation: 'A Olga explicou que a maior parte dos moradores de Narva fala russo em casa, mas muitos sabem também estoniano. Ela mesma tinha aprendido estoniano na escola e na universidade. “Um pinguim que fala estoniano é mesmo uma visita rara por aqui”, riu ela.',
        choices: [{ text: 'Linu läks koos Olgaga muuseumi.', translation: 'O Linu foi com a Olga ao museu.', next: 'muuseum' }],
      },
      muuseum: {
        emoji: '🗡️',
        text: 'Muuseumis oli näitus sajandeid tagasi elanud käsitööliste elust. Klaasvitriinis lebas jõest leitud vana mõõk, mille tera oli roostetanud. Kõrval olev silt palus eksponaate mitte puudutada.',
        translation: 'No museu havia uma exposição sobre a vida dos artesãos que viveram séculos atrás. Numa vitrine de vidro estava uma espada antiga, encontrada no rio, com a lâmina enferrujada. A placa ao lado pedia para não tocar nas peças.',
        choices: [
          { text: 'Linu vaatas mõõka lähedalt, käed seljal.', translation: 'O Linu olhou a espada de perto, com as mãos para trás.', next: 'torn' },
          {
            text: 'Linu arvas, et mõõk on poest ostetud uus koopia.',
            translation: 'O Linu achou que a espada era uma cópia nova, comprada numa loja.',
            wrong: 'O texto diz “jõest leitud vana mõõk” — uma espada VELHA, ENCONTRADA NO RIO (particípio passivo -tud), com a lâmina enferrujada. Não é cópia de loja!',
          },
        ],
      },
      torn: {
        emoji: '🌉',
        text: 'Kindluse tornist nägi Linu kaht kallast ühendavat silda. Sillal liikusid aeglaselt autod ja jalakäijad. Olga ütles, et piiri ületavad inimesed peavad seal näitama oma dokumente.',
        translation: 'Da torre do castelo, o Linu viu a ponte que liga as duas margens. Na ponte, carros e pedestres andavam devagar. A Olga disse que as pessoas que cruzam a fronteira precisam mostrar os documentos ali.',
        choices: [{ text: 'Linu tegi pildi mõlemast kindlusest.', translation: 'O Linu tirou uma foto das duas fortalezas.', next: 'final_bom' }],
      },
      promenaad: {
        emoji: '🎣',
        text: 'Jõe ääres kulges pikk promenaad, kus jalutasid lapsevankritega emad ja kalastasid vanad mehed. Üks kala püüdev mees kutsus Linu enda juurde. “Tahad proovida?” küsis ta vene aktsendiga eesti keeles.',
        translation: 'À beira do rio corria um longo calçadão, onde mães passeavam com carrinhos de bebê e velhos pescavam. Um homem que pescava chamou o Linu para perto. “Quer experimentar?”, perguntou ele em estoniano, com sotaque russo.',
        choices: [
          { text: 'Linu võttis õnge.', translation: 'O Linu pegou a vara.', next: 'kala' },
          { text: 'Linu läks tagasi kindluse juurde.', translation: 'O Linu voltou para o castelo.', next: 'olga' },
        ],
      },
      kala: {
        emoji: '🐟',
        text: 'Linu hoidis õnge pool tundi, aga ükski kala ei hakanud. Mees ütles, et hommikul püütud kalad on alati suuremad kui õhtul püütud. Siis tõmbas Linu välja väikese, päikese käes sädeleva kala.',
        translation: 'O Linu segurou a vara meia hora, mas nenhum peixe mordeu. O homem disse que os peixes pescados de manhã são sempre maiores que os pescados à tarde. Então o Linu puxou um peixinho que brilhava ao sol.',
        choices: [
          { text: 'Linu lasi kala jõkke tagasi.', translation: 'O Linu soltou o peixe de volta no rio.', next: 'final_kala' },
          { text: 'Linu sõi kala kohe toorelt ära.', translation: 'O Linu comeu o peixe cru na hora.', next: 'final_toores' },
        ],
      },
      final_bom: {
        emoji: '🌇',
        text: 'Õhtul istusid Linu ja Olga promenaadil. Loojuv päike värvis mõlemad kindlused kuldseks. Linu mõtles, et need sajandeid kõrvuti seisnud müürid on näinud rohkem, kui ükski raamat oskab rääkida.',
        translation: 'À noite, o Linu e a Olga ficaram sentados no calçadão. O sol poente tingia as duas fortalezas de dourado. O Linu pensou que aqueles muros, lado a lado há séculos, tinham visto mais do que qualquer livro sabe contar.',
        ending: { tone: 'bom', title: 'Duas margens', message: 'O Linu conheceu o castelo de Narva e a história das duas fortalezas que se olham sobre o rio.' },
      },
      final_kala: {
        emoji: '🍀',
        text: 'Mees noogutas rahulolevalt. “Tagasi lastud kala toob õnne,” ütles ta. Linu jalutas promenaadil edasi, tundes end üllatavalt õnnelikuna.',
        translation: 'O homem concordou, satisfeito. “Peixe devolvido traz sorte”, disse ele. O Linu seguiu pelo calçadão, sentindo-se surpreendentemente feliz.',
        ending: { tone: 'bom', title: 'Peixe da sorte', message: 'O Linu pescou no rio Narva, devolveu o peixe e ganhou a simpatia de um pescador.' },
      },
      final_toores: {
        emoji: '😳',
        text: 'Mees vaatas teda suurte silmadega. “Toorest kala sööva pingviini pole ma veel kunagi näinud,” ütles ta lõpuks. Kogu promenaad naeris, ja Linu punastas.',
        translation: 'O homem o olhou de olhos arregalados. “Um pinguim comendo peixe cru eu nunca tinha visto”, disse ele por fim. O calçadão inteiro riu, e o Linu ficou vermelho.',
        ending: { tone: 'neutro', title: 'Sushi de pinguim', message: 'Para um pinguim é normal, mas no calçadão de Narva o Linu virou atração!' },
      },
    },
  },
  {
    id: 'et-h26',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Kannel lossimägedel',
    emoji: '🎻',
    summary: 'No festival de música folk de Viljandi, o Linu esquece a pulseira no hotel e acaba escolhendo entre uma lição de kannel e uma noite de dança.',
    cultural_context:
      'Todo mês de julho, Viljandi recebe o festival de música folk (Viljandi pärimusmuusika festival), realizado desde 1993 no parque das ruínas do castelo medieval, onde uma ponte pênsil vermelha atravessa o vale. O kannel, uma cítara de madeira, é considerado o instrumento nacional estoniano.',
    start: 'start',
    glossary: [
      ['pärimusmuusika', 'música tradicional, folk'],
      ['kannel', 'kannel, cítara tradicional estoniana'],
      ['kergesti õpitav', 'fácil de aprender (particípio presente passivo -tav)'],
      ['koristaja leitud', 'encontrado pela faxineira (particípio -tud com o agente no genitivo)'],
      ['kogunenud', 'que se reuniu (particípio passado ativo -nud)'],
      ['rippsild', 'ponte pênsil'],
      ['käepael', 'pulseira (de festival)'],
      ['rahvatants', 'dança folclórica'],
    ],
    nodes: {
      start: {
        emoji: '🎶',
        text: 'Soojal juuliõhtul jõudis Linu Viljandisse, kuhu olid kogunenud tuhanded pärimusmuusikat armastavad inimesed. Lossimägedelt kostis viiulite ja torupillide hääl. Väravas avastas Linu, et tema festivalikäepael oli jäänud hotellituppa lauale.',
        translation: 'Numa noite quente de julho, o Linu chegou a Viljandi, onde tinham se reunido milhares de pessoas apaixonadas por música folk. Das colinas do castelo vinha o som de violinos e gaitas de fole. No portão, o Linu descobriu que a pulseira do festival tinha ficado na mesa do quarto do hotel.',
        choices: [
          { text: 'Linu kiirustas hotelli tagasi.', translation: 'O Linu voltou correndo ao hotel.', next: 'hotell' },
          { text: 'Linu jäi värava taha muusikat kuulama.', translation: 'O Linu ficou do lado de fora do portão ouvindo a música.', next: 'varav' },
          {
            text: 'Linu näitas väravas uhkelt oma käepaela.',
            translation: 'O Linu mostrou, orgulhoso, a pulseira no portão.',
            wrong: 'A pulseira “oli jäänud hotellituppa” — TINHA FICADO no quarto do hotel. O Linu não está com ela!',
          },
        ],
      },
      hotell: {
        emoji: '🌉',
        text: 'Hotellis ulatas administraator talle koristaja leitud käepaela. Tagasiteel läks Linu üle punase rippsilla, mis kõikus iga sammuga. Sillalt avanev vaade orule ja lossivaremetele oli nii ilus, et ta jäi hetkeks seisma.',
        translation: 'No hotel, a recepcionista lhe entregou a pulseira que a faxineira tinha encontrado. Na volta, o Linu atravessou a ponte pênsil vermelha, que balançava a cada passo. A vista que se abria da ponte para o vale e as ruínas do castelo era tão bonita que ele parou por um instante.',
        choices: [
          { text: 'Linu jooksis festivalile.', translation: 'O Linu correu para o festival.', next: 'lava' },
          { text: 'Linu jäi sillale pilte tegema.', translation: 'O Linu ficou na ponte tirando fotos.', next: 'final_sild' },
        ],
      },
      varav: {
        emoji: '🪕',
        text: 'Värava taga istus murul noor naine, kes mängis kannelt. Tema ümber oli kogunenud väike rahvahulk. Kui lugu oli lõppenud, ütles ta, et õpetab huvilistele üht lihtsat, kergesti õpitavat viisi.',
        translation: 'Do lado de fora do portão, uma moça sentada na grama tocava kannel. Em volta dela tinha se juntado uma pequena multidão. Quando a música terminou, ela disse que ia ensinar aos interessados uma melodia simples, fácil de aprender.',
        choices: [
          { text: 'Linu istus maha ja proovis mängida.', translation: 'O Linu sentou e tentou tocar.', next: 'kannel' },
          { text: 'Linu läks ikkagi hotelli käepaela tooma.', translation: 'O Linu foi mesmo assim buscar a pulseira no hotel.', next: 'hotell' },
        ],
      },
      kannel: {
        emoji: '🎼',
        text: 'Kannel oli väike puust pill, millel oli ainult mõni keel. Linu näppis keeli ettevaatlikult, ja esimesed noodid kõlasid üllatavalt ilusti. Naine ütles, et kannelt peetakse eestlaste rahvuspilliks.',
        translation: 'O kannel era um pequeno instrumento de madeira, com poucas cordas. O Linu dedilhou as cordas com cuidado, e as primeiras notas soaram surpreendentemente bonitas. A moça disse que o kannel é considerado o instrumento nacional dos estonianos.',
        choices: [
          { text: 'Linu harjutas, kuni viis tuli välja.', translation: 'O Linu treinou até a melodia sair.', next: 'final_kannel' },
          {
            text: 'Linu küsis, kuhu tuleb kannel vooluvõrku ühendada.',
            translation: 'O Linu perguntou onde se liga o kannel na tomada.',
            wrong: 'O texto descreve o kannel como “väike puust pill” — um pequeno instrumento DE MADEIRA, com cordas que se dedilham. Não tem nada de elétrico!',
          },
        ],
      },
      lava: {
        emoji: '🎤',
        text: 'Suurel laval esines ansambel, mille liikmed olid kõik Viljandis õppinud noored muusikud. Tantsivate inimeste hulgas märkas Linu oma Tallinnas elavat sõpra Olevit. Olev lehvitas talle ja hüüdis midagi, mida muusika tõttu polnud kuulda.',
        translation: 'No palco grande tocava uma banda cujos integrantes eram todos jovens músicos formados em Viljandi. No meio das pessoas dançando, o Linu notou o amigo Olev, que mora em Tallinn. O Olev acenou e gritou alguma coisa que não dava para ouvir por causa da música.',
        choices: [{ text: 'Linu läks Olevi juurde.', translation: 'O Linu foi até o Olev.', next: 'tants' }],
      },
      tants: {
        emoji: '💃',
        text: 'Olev õpetas Linule rahvatantsu, mille sammud olid lihtsamad, kui paistsid. Varsti tantsis Linu koos sadade inimestega, keda ta polnud kunagi varem näinud. Tantsijate jalgade all tolmas kuiv muru.',
        translation: 'O Olev ensinou ao Linu uma dança folclórica cujos passos eram mais simples do que pareciam. Logo o Linu dançava com centenas de pessoas que nunca tinha visto antes. Sob os pés dos dançarinos, a grama seca levantava poeira.',
        choices: [{ text: 'Linu tantsis keskööni.', translation: 'O Linu dançou até a meia-noite.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🌃',
        text: 'Kesköö paiku, kui viimased lood olid mängitud, istusid Linu ja Olev lossimäel. Taevas oli juulis ikka veel hele. Linu ütles, et ta pole kunagi tundnud end nii soojalt vastu võetud külalisena.',
        translation: 'Por volta da meia-noite, quando as últimas músicas já tinham sido tocadas, o Linu e o Olev ficaram sentados na colina do castelo. Em julho o céu ainda estava claro. O Linu disse que nunca tinha se sentido uma visita tão calorosamente recebida.',
        ending: { tone: 'bom', title: 'Noite clara em Viljandi', message: 'O Linu recuperou a pulseira, reencontrou o Olev e dançou até a meia-noite.' },
      },
      final_kannel: {
        emoji: '🎁',
        text: 'Tunni aja pärast mängis Linu lihtsa viisi algusest lõpuni. Naine kinkis talle väikese, oma käega tehtud kandle. “Viljandist lahkuv muusik peab midagi kaasa viima,” ütles ta.',
        translation: 'Uma hora depois, o Linu tocou a melodia simples do começo ao fim. A moça lhe deu de presente um kannel pequeno, feito por ela mesma. “Músico que sai de Viljandi tem de levar alguma coisa consigo”, disse ela.',
        ending: { tone: 'bom', title: 'O primeiro kannel', message: 'Sem pulseira, o Linu não entrou no festival, mas saiu de Viljandi tocando kannel.' },
      },
      final_sild: {
        emoji: '📷',
        text: 'Linu tegi kõikuval sillal nii palju pilte, et unustas aja. Kui ta lõpuks lossimägedele jõudis, oli viimane kontsert juba lõppenud. Tühjal väljakul lebasid ainult maha visatud kavalehed.',
        translation: 'O Linu tirou tantas fotos na ponte balançante que perdeu a noção do tempo. Quando finalmente chegou às colinas do castelo, o último show já tinha terminado. No gramado vazio só restavam programas jogados no chão.',
        ending: { tone: 'neutro', title: 'Fotos demais', message: 'A ponte pênsil é linda, mas o festival acabou enquanto o Linu fotografava.' },
      },
    },
  },
  {
    id: 'et-h27',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Valge Daam',
    emoji: '👻',
    summary: 'Em Haapsalu, numa noite de lua cheia de agosto, o Linu ouve a lenda da Dama Branca e descobre o xale que passa por dentro de um anel.',
    cultural_context:
      'Segundo a lenda de Haapsalu, uma moça que se disfarçou de menino para ficar perto do seu amado no castelo episcopal foi emparedada viva na capela; nas noites de lua cheia de agosto, a sua silhueta, a Valge Daam (Dama Branca), apareceria na janela da capela. A cidade é famosa também pelo xale de Haapsalu, uma renda de tricô tão fina que passa por dentro de um anel.',
    start: 'start',
    glossary: [
      ['kabeli aknas nähtav', 'visível na janela da capela (particípio presente passivo -tav)'],
      ['poisiks riietatud', 'vestida de menino (particípio passado passivo -tud)'],
      ['kuuvalgusest valgustatud', 'iluminado pelo luar'],
      ['täiskuu', 'lua cheia'],
      ['piiskopilinnus', 'castelo episcopal'],
      ['pitssall', 'xale de renda'],
      ['sõrmus', 'anel'],
      ['müürima', 'emparedar'],
    ],
    nodes: {
      start: {
        emoji: '🌕',
        text: 'Augusti täiskuu ajal saabus Linu Haapsallu. Linnas räägiti ainult ühest asjast: piiskopilinnuse kabeli aknas nähtavast Valgest Daamist. Kohvikus istuv vanaproua Aino pakkus end Linule giidiks.',
        translation: 'Na lua cheia de agosto, o Linu chegou a Haapsalu. Na cidade só se falava de uma coisa: da Dama Branca, que aparece na janela da capela do castelo episcopal. Uma senhora sentada no café, a Aino, se ofereceu para ser guia do Linu.',
        choices: [
          { text: 'Linu võttis pakkumise tänulikult vastu.', translation: 'O Linu aceitou a oferta, agradecido.', next: 'aino' },
          { text: 'Linu läks õhtul üksi linnusesse.', translation: 'O Linu foi sozinho ao castelo à noite.', next: 'linnus' },
        ],
      },
      aino: {
        emoji: '👵',
        text: 'Aino jutustas legendi: kord olevat üks poisiks riietatud neiu elanud linnuses, et olla oma armastatu lähedal. Kui saladus avastati, müüriti neiu elusalt kabeli seina. Tema kahvatut kuju nähtavat augustikuu täiskuuöödel aknas tänini.',
        translation: 'A Aino contou a lenda: certa vez, uma moça vestida de menino teria vivido no castelo para ficar perto do seu amado. Quando o segredo foi descoberto, a moça foi emparedada viva na parede da capela. A sua silhueta pálida, dizem, é vista na janela até hoje, nas noites de lua cheia de agosto.',
        choices: [
          { text: 'Linu küsis, kas Aino on Valget Daami ise näinud.', translation: 'O Linu perguntou se a Aino já tinha visto a Dama Branca.', next: 'sall' },
          { text: 'Linu tahtis kohe linnusesse minna.', translation: 'O Linu quis ir logo ao castelo.', next: 'linnus' },
        ],
      },
      sall: {
        emoji: '🧣',
        text: 'Aino naeris ja ütles, et tema on terve elu olnud liiga hõivatud sallide kudumisega. Ta näitas Linule õrna valget pitssalli, mis oli kootud nii peenest lõngast, et see mahtus läbi sõrmuse. “Minul kulus selle peale terve talv,” ütles ta.',
        translation: 'A Aino riu e disse que passou a vida inteira ocupada demais tricotando xales. Ela mostrou ao Linu um xale de renda branco e delicado, tricotado com um fio tão fino que passava por dentro de um anel. “Eu levei um inverno inteiro para fazer este”, disse ela.',
        choices: [
          { text: 'Linu palus näidata, kuidas sall läbi sõrmuse läheb.', translation: 'O Linu pediu para ver como o xale passa pelo anel.', next: 'sormus' },
          { text: 'Linu tänas ja läks linnusesse.', translation: 'O Linu agradeceu e foi ao castelo.', next: 'linnus' },
          {
            text: 'Linu arvas, et sall on kootud paksust villasest lõngast.',
            translation: 'O Linu achou que o xale era tricotado com lã grossa.',
            wrong: 'O xale “oli kootud nii peenest lõngast” — foi tricotado com um fio TÃO FINO que passava por dentro de um anel. Nada de lã grossa!',
          },
        ],
      },
      sormus: {
        emoji: '💍',
        text: 'Aino võttis sõrmest oma abielusõrmuse ja tõmbas kogu salli sellest läbi. Linu ei uskunud oma silmi. Laual lebav sall oli nüüd kergem kui sulg ja sama valge kui kuu.',
        translation: 'A Aino tirou a aliança do dedo e passou o xale inteiro por dentro dela. O Linu não acreditou nos próprios olhos. O xale estendido sobre a mesa parecia mais leve que uma pena e tão branco quanto a lua.',
        choices: [{ text: 'Linu ostis salli oma emale.', translation: 'O Linu comprou o xale para a mãe dele.', next: 'final_sall' }],
      },
      linnus: {
        emoji: '🏰',
        text: 'Öösel oli linnuse hoovis palju inimesi, kes ootasid kannatlikult. Kõik vaatasid kabeli poole, kus kuuvalgusest valgustatud aken helendas. Järsku karjatas üks tüdruk: “Seal ta on!”',
        translation: 'À noite, o pátio do castelo estava cheio de gente esperando com paciência. Todos olhavam para a capela, onde a janela iluminada pelo luar brilhava. De repente, uma menina gritou: “Lá está ela!”',
        choices: [
          { text: 'Linu vaatas tähelepanelikult aknasse.', translation: 'O Linu olhou com atenção para a janela.', next: 'aken' },
          { text: 'Linu ehmus ja jooksis minema.', translation: 'O Linu se assustou e saiu correndo.', next: 'final_hirm' },
          {
            text: 'Linu vaatas mere poole, sest kõik teised vaatasid sinna.',
            translation: 'O Linu olhou para o mar, porque todos os outros olhavam para lá.',
            wrong: 'Todos olhavam “kabeli poole” — PARA A CAPELA, onde estava a janela iluminada pelo luar. É ali que a Dama Branca aparece.',
          },
        ],
      },
      aken: {
        emoji: '🪟',
        text: 'Aknas paistis tõesti midagi valget ja udust, mis meenutas naise kuju. Linu seisis liikumatult ja hoidis hinge kinni. Kui pilv kuu eest läbi liikus, oli kuju kadunud.',
        translation: 'Na janela aparecia mesmo algo branco e nebuloso, que lembrava a silhueta de uma mulher. O Linu ficou imóvel, prendendo a respiração. Quando uma nuvem passou na frente da lua, a silhueta tinha sumido.',
        choices: [{ text: 'Linu läks hommikul Aino juurde seda jutustama.', translation: 'De manhã, o Linu foi à casa da Aino contar tudo.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '✨',
        text: 'Aino kuulas teda naeratades. Ta ütles, et teadlased seletavat nägemust kuuvalguse langemisnurgaga. “Aga mina usun pigem legendi,” lisas ta, ja Linu mõtles, et tema ka.',
        translation: 'A Aino o ouviu sorrindo. Ela disse que os cientistas, dizem, explicam a aparição pelo ângulo em que o luar bate. “Mas eu prefiro acreditar na lenda”, acrescentou, e o Linu pensou que ele também.',
        ending: { tone: 'bom', title: 'A Dama da janela', message: 'Numa noite de lua cheia, o Linu viu a Dama Branca de Haapsalu, ou pelo menos algo muito parecido com ela.' },
      },
      final_sall: {
        emoji: '🎁',
        text: 'Aino pakkis salli ettevaatlikult paberisse. “Hästi hoitud Haapsalu sall elab kauem kui tema kuduja,” ütles ta. Linu lubas seda hoida nagu aaret.',
        translation: 'A Aino embrulhou o xale com cuidado em papel. “Um xale de Haapsalu bem guardado vive mais que quem o tricotou”, disse ela. O Linu prometeu guardá-lo como um tesouro.',
        ending: { tone: 'bom', title: 'O xale do anel', message: 'O Linu não viu fantasma nenhum, mas levou de Haapsalu um xale que passa por dentro de um anel.' },
      },
      final_hirm: {
        emoji: '🏃',
        text: 'Linu jooksis linnusest välja ja peitis end lähedal asuva kohviku taha. Hommikul kuulis ta, et Valget Daami oli sel aastal näinud rohkem inimesi kui kunagi varem. Ainult tema polnud midagi näinud.',
        translation: 'O Linu saiu correndo do castelo e se escondeu atrás de um café ali perto. De manhã, ouviu dizer que naquele ano mais gente do que nunca tinha visto a Dama Branca. Só ele não tinha visto nada.',
        ending: { tone: 'neutro', title: 'Pinguim medroso', message: 'A Dama Branca só aparece para quem tem coragem de olhar. Talvez no próximo agosto!' },
      },
    },
  },
  // ───────────────────────── B2.2 ─────────────────────────
  {
    id: 'et-h28',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Elamisloakaart',
    emoji: '🪪',
    summary: 'Em Tallinn, o Linu recebe uma carta formal e vai ao posto de atendimento buscar o cartão de residência, com tudo o que a burocracia exige.',
    cultural_context:
      'A Estônia é um dos países mais digitais do mundo: desde 2002 o documento de identidade tem um chip que permite assinar digitalmente, e em 2007 o país foi o primeiro a permitir o voto pela internet em eleições parlamentares. Estrangeiros residentes recebem um cartão de residência com as mesmas funções digitais.',
    start: 'start',
    glossary: [
      ['Lugupeetud…', 'Prezado… (abertura formal de carta)'],
      ['elamisloakaart', 'cartão de autorização de residência'],
      ['pöörduma teenindusse', 'dirigir-se ao posto de atendimento'],
      ['Palun esitage…', 'Por favor, apresente… (imperativo formal, tratamento “teie”)'],
      ['reisidokument', 'documento de viagem (passaporte)'],
      ['allkirjaga kinnitama', 'confirmar com assinatura'],
      ['viivitamatult', 'imediatamente, sem demora'],
      ['järjekorranumber', 'senha, número na fila'],
    ],
    nodes: {
      start: {
        emoji: '📧',
        text: 'Linu oli saanud Politsei- ja Piirivalveametilt e-kirja: “Lugupeetud Linu! Teie elamisloakaart on valmis. Kaardi kättesaamiseks palume Teil pöörduda teenindusse isiklikult ning võtta kaasa kehtiv reisidokument.”',
        translation: 'O Linu tinha recebido um e-mail da Polícia e Guarda de Fronteira: “Prezado Linu! O seu cartão de residência está pronto. Para retirá-lo, pedimos que o senhor se dirija pessoalmente ao posto de atendimento e leve um documento de viagem válido.”',
        choices: [
          { text: 'Linu broneeris aja ja pani passi kotti.', translation: 'O Linu agendou um horário e pôs o passaporte na bolsa.', next: 'teenindus' },
          { text: 'Linu läks kohe teenindusse, aega broneerimata.', translation: 'O Linu foi direto ao posto, sem agendar horário.', next: 'jarjekord' },
          {
            text: 'Linu vastas e-kirjale ja palus kaardi posti teel saata.',
            translation: 'O Linu respondeu ao e-mail pedindo que mandassem o cartão pelo correio.',
            wrong: 'A carta diz “palume Teil pöörduda teenindusse isiklikult” — pedimos que o senhor se dirija ao posto PESSOALMENTE. O cartão não vai pelo correio.',
          },
        ],
      },
      jarjekord: {
        emoji: '🎫',
        text: 'Ootesaalis oli palju inimesi. Automaadist võetud järjekorranumber oli 147, aga ekraanil põles alles 98. Kõrval istuv naine ütles, et ilma broneeringuta võib ootamine võtta mitu tundi.',
        translation: 'Na sala de espera havia muita gente. A senha tirada na máquina era 147, mas o painel ainda mostrava 98. Uma mulher sentada ao lado disse que, sem agendamento, a espera pode levar várias horas.',
        choices: [
          { text: 'Linu jäi kannatlikult ootama.', translation: 'O Linu ficou esperando com paciência.', next: 'ootamine' },
          { text: 'Linu broneeris aja järgmiseks hommikuks ja tuli siis tagasi.', translation: 'O Linu agendou um horário para a manhã seguinte e voltou nesse horário.', next: 'teenindus' },
        ],
      },
      ootamine: {
        emoji: '⏳',
        text: 'Kolm tundi hiljem kutsuti lõpuks tema number. “Tere päevast! Palun esitage oma reisidokument,” ütles ametnik. Linu avastas kohkunult, et pass oli jäänud koju.',
        translation: 'Três horas depois, finalmente chamaram a senha dele. “Boa tarde! Por favor, apresente o seu documento de viagem”, disse o atendente. O Linu descobriu, apavorado, que o passaporte tinha ficado em casa.',
        choices: [{ text: 'Linu palus vabandust.', translation: 'O Linu pediu desculpas.', next: 'final_pass' }],
      },
      teenindus: {
        emoji: '🏢',
        text: 'Määratud ajal kutsus ametnik ta viisakalt oma laua juurde. Pärast passi kontrollimist ulatas ta Linule kaardi koos PIN-koodide ümbrikuga. “Palun kinnitage allkirjaga, et olete kaardi kätte saanud,” ütles ta.',
        translation: 'No horário marcado, o atendente o chamou educadamente à sua mesa. Depois de conferir o passaporte, ele entregou ao Linu o cartão, junto com o envelope dos códigos PIN. “Por favor, confirme com a sua assinatura que recebeu o cartão”, disse ele.',
        choices: [
          { text: 'Linu kirjutas alla ja küsis, milleks kaarti veel kasutada saab.', translation: 'O Linu assinou e perguntou para que mais o cartão pode ser usado.', next: 'kasutus' },
          { text: 'Linu kirjutas alla ja lahkus kiiresti.', translation: 'O Linu assinou e saiu às pressas.', next: 'final_kiire' },
        ],
      },
      kasutus: {
        emoji: '💳',
        text: 'Ametnik selgitas, et kaardiga saab anda digiallkirja, kasutada riigi e-teenuseid ja tõendada oma isikut. “Palun hoidke PIN-koodid kaardist eraldi,” lisas ta rangelt. “Kaardi kaotamise korral tuleb see viivitamatult peatada.”',
        translation: 'O atendente explicou que com o cartão é possível assinar digitalmente, usar os serviços eletrônicos do Estado e comprovar a identidade. “Por favor, guarde os códigos PIN separados do cartão”, acrescentou, sério. “Em caso de perda, o cartão deve ser bloqueado imediatamente.”',
        choices: [
          { text: 'Linu pani ümbriku seljakoti teise taskusse.', translation: 'O Linu guardou o envelope em outro bolso da mochila.', next: 'final_bom' },
          {
            text: 'Linu kirjutas PIN-koodid kaardi tagaküljele, et need ei ununeks.',
            translation: 'O Linu escreveu os códigos PIN no verso do cartão para não esquecê-los.',
            wrong: 'O atendente pediu justamente o contrário: “Palun hoidke PIN-koodid kaardist eraldi” — guarde os códigos SEPARADOS do cartão. Quem achar o cartão teria tudo na mão!',
          },
        ],
      },
      final_bom: {
        emoji: '✅',
        text: 'Kodus logis Linu uue kaardiga esimest korda riigiportaali sisse. Mõne minutiga oli ta digitaalselt allkirjastanud oma üürilepingu. “Eestis käib bürokraatia tõesti kiiresti,” mõtles ta rahulolevalt.',
        translation: 'Em casa, o Linu entrou pela primeira vez no portal do Estado com o cartão novo. Em poucos minutos, tinha assinado digitalmente o contrato de aluguel. “Na Estônia a burocracia anda rápido mesmo”, pensou, satisfeito.',
        ending: { tone: 'bom', title: 'Residente digital', message: 'O Linu seguiu todas as instruções formais e saiu do posto com o cartão e os códigos em segurança.' },
      },
      final_kiire: {
        emoji: '✉️',
        text: 'Kodus avastas Linu, et PIN-koodide ümbrik oli jäänud teeninduse lauale. Ta pidi helistama infotelefonile ja järgmisel päeval uuesti kohale minema. Ametnik ulatas talle ümbriku naeratades: “Kiirustamine ei tasu end ära.”',
        translation: 'Em casa, o Linu descobriu que o envelope dos códigos PIN tinha ficado na mesa do posto. Ele teve de ligar para a central de informações e voltar lá no dia seguinte. O atendente lhe entregou o envelope sorrindo: “A pressa não compensa.”',
        ending: { tone: 'neutro', title: 'Pressa demais', message: 'Com o cartão e sem os códigos, o Linu teve de voltar ao posto. Na repartição, calma é tudo!' },
      },
      final_pass: {
        emoji: '📕',
        text: 'Ametnik selgitas viisakalt, et ilma kehtiva reisidokumendita ei ole võimalik kaarti väljastada. Linu pidi järgmisel päeval uuesti tulema. Seekord broneeris ta aja ja pani passi juba õhtul ukse juurde valmis.',
        translation: 'O atendente explicou educadamente que sem um documento de viagem válido não é possível entregar o cartão. O Linu teve de voltar no dia seguinte. Dessa vez, ele agendou horário e deixou o passaporte pronto junto da porta já na noite anterior.',
        ending: { tone: 'neutro', title: 'Três horas por nada', message: 'A carta pedia “kehtiv reisidokument”. Sem passaporte, não há cartão.' },
      },
    },
  },
  {
    id: 'et-h29',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Teadaanne Peipsi kaldal',
    emoji: '🧊',
    summary: 'Às margens do lago Peipsi, um aviso oficial sobre o gelo muda os planos de pesca do Linu, que acaba conhecendo a Rota da Cebola dos velhos crentes.',
    cultural_context:
      'O lago Peipsi, na fronteira com a Rússia, é um dos maiores lagos da Europa. Na margem estoniana ficam as aldeias dos velhos crentes (vanausulised), ortodoxos que se refugiaram ali a partir do fim do século XVII; a estrada que as liga é chamada de Sibulatee, a Rota da Cebola, pelas cebolas que eles cultivam e vendem na porta de casa.',
    start: 'start',
    glossary: [
      ['teadaanne', 'aviso oficial'],
      ['Päästeamet', 'Departamento de Resgate (bombeiros e defesa civil)'],
      ['eluohtlik', 'com risco de vida'],
      ['kodanikud', 'cidadãos'],
      ['järgima ohutusnõudeid', 'seguir as normas de segurança'],
      ['eelneval kokkuleppel', 'mediante agendamento prévio'],
      ['vanausulised', 'velhos crentes'],
      ['Kas tohin paluda…?', 'Posso pedir…? (fórmula educada)'],
    ],
    nodes: {
      start: {
        emoji: '📋',
        text: 'Linu ja tema sõber Juhan olid tulnud Kallastele, et minna Peipsi järvele kala püüdma. Sadama teadetetahvlil rippus paber: “TEADAANNE. Päästeamet hoiatab: seoses sulailmaga on jää Peipsi järvel nõrgenenud ning jääle minek on eluohtlik. Palume kodanikel järgida ohutusnõudeid.”',
        translation: 'O Linu e o amigo Juhan tinham vindo a Kallaste para pescar no lago Peipsi. No quadro de avisos do porto havia um papel: “AVISO. O Departamento de Resgate alerta: em razão do degelo, o gelo do lago Peipsi enfraqueceu, e entrar no gelo representa risco de vida. Pedimos aos cidadãos que sigam as normas de segurança.”',
        choices: [
          { text: 'Linu ütles, et nad peaksid kalapüügi edasi lükkama.', translation: 'O Linu disse que eles deviam adiar a pescaria.', next: 'edasi' },
          { text: 'Linu tahtis ikkagi natukeseks jääle minna.', translation: 'O Linu quis ir um pouquinho no gelo mesmo assim.', next: 'jaa' },
          {
            text: 'Linu arvas, et teadaanne kutsub kõiki jääle kala püüdma.',
            translation: 'O Linu achou que o aviso convidava todo mundo a pescar no gelo.',
            wrong: 'O aviso diz o contrário: “jää on nõrgenenud ning jääle minek on eluohtlik” — o gelo ENFRAQUECEU e entrar nele é RISCO DE VIDA. É um alerta, não um convite.',
          },
        ],
      },
      jaa: {
        emoji: '🚒',
        text: 'Juhan haaras tal käest ja näitas kaldal seisvat päästeameti autot. Üks päästja tuli nende juurde. “Tere päevast. Kas tohin paluda Teil jääle mitte minna? Eile õhtul päästsime siit kaks kalameest.”',
        translation: 'O Juhan o segurou pelo braço e apontou o carro do Departamento de Resgate parado na margem. Um socorrista veio até eles. “Boa tarde. Posso pedir que o senhor não entre no gelo? Ontem à noite resgatamos dois pescadores aqui.”',
        choices: [
          { text: 'Linu vabandas ja lubas kaldale jääda.', translation: 'O Linu pediu desculpas e prometeu ficar na margem.', next: 'edasi' },
          { text: 'Linu küsis, kas ta tohiks minna ainult paar meetrit.', translation: 'O Linu perguntou se podia ir só uns metrinhos.', next: 'final_keeld' },
        ],
      },
      edasi: {
        emoji: '🧅',
        text: 'Juhan pakkus, et kui kalale minna ei saa, võiksid nad sõita mööda Sibulateed. Järve kaldal asuvad vanausuliste külad, kus kasvatatakse sibulat ja müüakse seda otse maja eest. Kolkja külas olevat ka väike vanausuliste muuseum.',
        translation: 'O Juhan sugeriu que, se não dava para pescar, eles podiam seguir pela Rota da Cebola. À beira do lago ficam as aldeias dos velhos crentes, onde se cultiva cebola e se vende direto na frente de casa. Na aldeia de Kolkja haveria também um pequeno museu dos velhos crentes.',
        choices: [
          { text: 'Linu tahtis näha sibulaküla.', translation: 'O Linu quis ver a aldeia das cebolas.', next: 'sibul' },
          { text: 'Linu tahtis külastada muuseumi.', translation: 'O Linu quis visitar o museu.', next: 'muuseum' },
        ],
      },
      muuseum: {
        emoji: '🚪',
        text: 'Muuseumi uksel rippus silt: “Lugupeetud külastajad! Talvisel perioodil on muuseum avatud eelneval kokkuleppel. Palume külastusaeg eelnevalt kokku leppida alloleval telefoninumbril.” Uks oli lukus.',
        translation: 'Na porta do museu havia uma placa: “Prezados visitantes! No período de inverno, o museu abre mediante agendamento prévio. Pedimos que marquem a visita com antecedência pelo telefone abaixo.” A porta estava trancada.',
        choices: [
          { text: 'Linu helistas numbril ja palus viisakalt külastusaega.', translation: 'O Linu ligou para o número e pediu educadamente um horário de visita.', next: 'giid' },
          {
            text: 'Linu koputas uksele ja jäi ootama, sest muuseum pidi olema avatud.',
            translation: 'O Linu bateu na porta e ficou esperando, porque o museu devia estar aberto.',
            wrong: 'A placa diz que no inverno o museu abre “eelneval kokkuleppel” — MEDIANTE AGENDAMENTO PRÉVIO, pelo telefone. Bater na porta trancada não adianta.',
          },
        ],
      },
      giid: {
        emoji: '🕯️',
        text: 'Kümne minuti pärast tuli kohale eakas naine, võtmekimp käes. Ta tutvustas vanausuliste ajalugu ning näitas ikoone ja vanu raamatuid. “Oleme tänulikud, et tunnete huvi meie kultuuri vastu,” ütles ta lõpuks ametlikult, kuid soojalt.',
        translation: 'Dez minutos depois chegou uma senhora de idade com um molho de chaves. Ela apresentou a história dos velhos crentes e mostrou ícones e livros antigos. “Agradecemos o seu interesse pela nossa cultura”, disse ela no fim, formal mas calorosa.',
        choices: [{ text: 'Linu tänas teda südamest.', translation: 'O Linu agradeceu de coração.', next: 'final_bom' }],
      },
      sibul: {
        emoji: '🫖',
        text: 'Majade ees rippusid sibulapunutised, ja väravate juures müüdi suitsukala. Üks vanaproua pakkus Linule klaasi teed samovarist. Ta rääkis, et tema pere on sibulat kasvatanud juba mitusada aastat.',
        translation: 'Na frente das casas pendiam tranças de cebola, e nos portões vendiam peixe defumado. Uma senhora ofereceu ao Linu um copo de chá do samovar. Ela contou que a família dela cultiva cebola há várias centenas de anos.',
        choices: [{ text: 'Linu ostis kaks sibulapunutist.', translation: 'O Linu comprou duas tranças de cebola.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🌆',
        text: 'Õhtul Kallastele tagasi sõites ütles Juhan, et jääle lähevad nad alles siis, kui päästeamet enam ei hoiata. Linu nõustus: kalad ei uju ju kuhugi. Peipsi kaldal oli ta leidnud midagi palju huvitavamat.',
        translation: 'À noite, voltando para Kallaste, o Juhan disse que só iriam para o gelo quando o Departamento de Resgate não estivesse mais alertando. O Linu concordou: os peixes não vão nadar para lugar nenhum. Na margem do Peipsi, ele tinha encontrado algo muito mais interessante.',
        ending: { tone: 'bom', title: 'Pesca adiada', message: 'O Linu levou o aviso oficial a sério e descobriu as aldeias dos velhos crentes.' },
      },
      final_keeld: {
        emoji: '🙅',
        text: 'Päästja vastas viisakalt, kuid kindlalt: “Kahjuks mitte. Ohutusnõuded kehtivad kõigile, ka pingviinidele.” Linu punastas, ja ülejäänud päev möödus kaldal jääd vaadates.',
        translation: 'O socorrista respondeu, educado mas firme: “Infelizmente, não. As normas de segurança valem para todos, inclusive para pinguins.” O Linu ficou vermelho, e o resto do dia passou olhando o gelo da margem.',
        ending: { tone: 'neutro', title: 'Nem uns metrinhos', message: 'Com o aviso de risco de vida, não há exceção. O Linu passou o dia só olhando o lago.' },
      },
    },
  },
  {
    id: 'et-h30',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Savusauna broneering',
    emoji: '🧖',
    summary: 'Em Võromaa, o Linu troca e-mails formais com a dona de um sítio para reservar uma sauna de fumaça e precisa seguir o regulamento à risca.',
    cultural_context:
      'Na sauna de fumaça (savusaun) não há chaminé: a fornalha é aquecida por horas, a fumaça enche o ambiente e só sai antes do banho, deixando as paredes pretas de fuligem. Em 2014, a tradição da sauna de fumaça de Võromaa, no sudeste da Estônia, entrou para a lista do patrimônio cultural imaterial da UNESCO.',
    start: 'start',
    glossary: [
      ['Täname Teid päringu eest.', 'Agradecemos o seu contato. (fórmula de resposta formal)'],
      ['broneering jõustub', 'a reserva passa a valer'],
      ['ettemaks', 'pagamento antecipado, sinal'],
      ['Lugupidamisega', 'Atenciosamente'],
      ['kasutamise kord', 'regulamento de uso'],
      ['tahm', 'fuligem'],
      ['savusaun', 'sauna de fumaça'],
      ['vihtlema', 'bater com o feixe de ramos de bétula (viht) na sauna'],
    ],
    nodes: {
      start: {
        emoji: '📨',
        text: 'Linu sai Võrumaa talust vastuse: “Lugupeetud Linu! Täname Teid päringu eest. Kuna savusauna kütmine võtab mitu tundi, palume broneering kinnitada vähemalt kaks päeva ette. Broneering jõustub pärast ettemaksu laekumist. Lugupidamisega, perenaine Maie.”',
        translation: 'O Linu recebeu a resposta de um sítio em Võrumaa: “Prezado Linu! Agradecemos o seu contato. Como o aquecimento da sauna de fumaça leva várias horas, pedimos que a reserva seja confirmada com pelo menos dois dias de antecedência. A reserva passa a valer após o recebimento do sinal. Atenciosamente, Maie, a dona do sítio.”',
        choices: [
          { text: 'Linu kinnitas broneeringu ülehomseks ja tasus ettemaksu.', translation: 'O Linu confirmou a reserva para depois de amanhã e pagou o sinal.', next: 'kinnitus' },
          { text: 'Linu kirjutas, et soovib sauna juba täna õhtul.', translation: 'O Linu escreveu que queria a sauna já hoje à noite.', next: 'tana' },
          {
            text: 'Linu arvas, et broneering kehtib kohe ka ilma ettemaksuta.',
            translation: 'O Linu achou que a reserva já valia, mesmo sem o sinal.',
            wrong: 'A carta diz “Broneering jõustub pärast ettemaksu laekumist” — a reserva SÓ PASSA A VALER DEPOIS que o sinal for recebido. Sem pagamento, nada de reserva.',
          },
        ],
      },
      tana: {
        emoji: '⏰',
        text: 'Peagi saabus uus kiri: “Lugupeetud Linu! Kahjuks ei ole võimalik savusauna täna õhtuks valmis kütta. Saame pakkuda aega ülehomseks. Palun andke teada, kas see Teile sobib.”',
        translation: 'Logo chegou outra mensagem: “Prezado Linu! Infelizmente não é possível deixar a sauna de fumaça aquecida para hoje à noite. Podemos oferecer um horário para depois de amanhã. Por favor, informe-nos se lhe convém.”',
        choices: [
          { text: 'Linu vastas, et ülehomne sobib suurepäraselt, ja tasus ettemaksu.', translation: 'O Linu respondeu que depois de amanhã estava ótimo e pagou o sinal.', next: 'kinnitus' },
          { text: 'Linu loobus ja läks hoopis linna spaasse.', translation: 'O Linu desistiu e foi a um spa na cidade.', next: 'final_spaa' },
        ],
      },
      kinnitus: {
        emoji: '📜',
        text: 'Ülehomme saabus Linu tallu. Perenaine Maie tervitas teda ja ulatas talle sauna kasutamise korra. Üks punkt oli alla joonitud: “Seinad on kaetud tahmaga, mistõttu palume neid mitte puudutada heledate riietega.”',
        translation: 'Depois de amanhã, o Linu chegou ao sítio. A dona, Maie, o cumprimentou e lhe entregou o regulamento de uso da sauna. Um item estava sublinhado: “As paredes são cobertas de fuligem, por isso pedimos que não sejam tocadas com roupas claras.”',
        choices: [
          { text: 'Linu jättis oma valge särgi eesruumi.', translation: 'O Linu deixou a camiseta branca na antessala.', next: 'saun' },
          {
            text: 'Linu läks sauna valges särgis ja nõjatus seinale.',
            translation: 'O Linu entrou na sauna de camiseta branca e se encostou na parede.',
            wrong: 'O regulamento pede “palume neid mitte puudutada heledate riietega” — que as paredes NÃO sejam tocadas com roupas claras, porque estão cobertas de fuligem (tahm). A camiseta sairia preta!',
          },
        ],
      },
      saun: {
        emoji: '🔥',
        text: 'Savusaun oli seest must ja lõhnas suitsu järele. Leil oli pehme ja sügav, teistsugune kui üheski teises saunas, kus Linu oli käinud. Maie tõi kasevihad ja küsis, kas Linu soovib vihtlemist.',
        translation: 'Por dentro, a sauna de fumaça era preta e cheirava a fumaça. O vapor era suave e profundo, diferente de qualquer outra sauna em que o Linu já tinha estado. A Maie trouxe os feixes de bétula e perguntou se o Linu desejava ser “vihtado”.',
        choices: [
          { text: '“Jah, tänan väga.”', translation: '“Sim, muito obrigado.”', next: 'viht' },
          { text: 'Linu vastas, et eelistaks rahulikult istuda.', translation: 'O Linu respondeu que preferia ficar sentado tranquilo.', next: 'tiik' },
        ],
      },
      viht: {
        emoji: '🌿',
        text: 'Maie vihtles teda nii osavalt, et Linu tundis end nagu uuesti sündinuna. Kasevihtade lõhn täitis kogu sauna. Pärast seda soovitas Maie hüpata tiiki, mis asus otse sauna ees.',
        translation: 'A Maie bateu com o feixe com tanta habilidade que o Linu se sentiu como se tivesse renascido. O cheiro dos ramos de bétula encheu a sauna inteira. Depois, a Maie recomendou pular no laguinho que ficava bem na frente da sauna.',
        choices: [{ text: 'Linu jooksis tiigi poole.', translation: 'O Linu correu para o laguinho.', next: 'tiik' }],
      },
      tiik: {
        emoji: '💦',
        text: 'Tiigi vesi oli jäiselt külm, aga pingviinile just parajalt jahe. Linu ujus seal nii kaua, et Maie hakkas juba muretsema. Lõpuks naeris ta, et nii rahulolevat saunalist pole tema talus veel nähtud.',
        translation: 'A água do laguinho estava gelada, mas para um pinguim estava no ponto certo. O Linu nadou ali tanto tempo que a Maie já começou a se preocupar. Por fim ela riu, dizendo que nunca se tinha visto no sítio dela um banhista tão satisfeito.',
        choices: [{ text: 'Linu läks tagasi leili.', translation: 'O Linu voltou para o vapor.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '📖',
        text: 'Lahkudes palus Maie tal kirjutada külalisteraamatusse. Linu kirjutas: “Lugupeetud perenaine! Tänan Teid südamest suurepärase vastuvõtu eest. Lugupidamisega, Linu.” Maie naeris ja ütles, et nii ametlikku sissekannet pole raamatus varem olnud.',
        translation: 'Na saída, a Maie pediu que ele escrevesse no livro de visitas. O Linu escreveu: “Prezada senhora! Agradeço de coração a excelente recepção. Atenciosamente, Linu.” A Maie riu e disse que nunca tinha havido um registro tão formal naquele livro.',
        ending: { tone: 'bom', title: 'Fumaça e cerimônia', message: 'O Linu seguiu todas as regras da reserva e do regulamento e viveu a verdadeira sauna de fumaça de Võromaa.' },
      },
      final_spaa: {
        emoji: '🏨',
        text: 'Linna spaas oli palju inimesi, muusika mängis valjult ja saun oli elektriline. Linu istus leiliruumis ja mõtles savusaunale, mida ta oleks võinud kogeda. Järgmisel korral broneerib ta aja õigeaegselt.',
        translation: 'No spa da cidade havia muita gente, a música tocava alto e a sauna era elétrica. O Linu ficou sentado na sala de vapor pensando na sauna de fumaça que poderia ter conhecido. Da próxima vez, ele vai reservar com antecedência.',
        ending: { tone: 'neutro', title: 'Sauna elétrica', message: 'A sauna de fumaça precisa de horas para aquecer. Sem paciência para a reserva, o Linu ficou com o spa comum.' },
      },
    },
  },
  // ───────────────────────── B2.3 ─────────────────────────
  {
    id: 'et-h31',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Jänes püksis',
    emoji: '🐇',
    summary: 'Em Tartu, o Linu ajuda a estudante Kertu, apavorada antes de uma apresentação, e aprende gíria e expressões idiomáticas estonianas pelo caminho.',
    cultural_context:
      'A Universidade de Tartu, fundada em 1632, é a mais antiga da Estônia. O bairro de Supilinn (“cidade da sopa”), à beira do rio Emajõgi, tem ruas com nomes de legumes e frutas, como Herne (ervilha) e Oa (fava).',
    start: 'start',
    glossary: [
      ['jänes on püksis', 'estar com medo (lit.: a lebre está nas calças)'],
      ['pole hullu', 'sem problema, relaxa'],
      ['lahe', 'legal, bacana (coloquial)'],
      ['äge', 'incrível, massa (gíria)'],
      ['lööma kaks kärbest ühe hoobiga', 'matar dois coelhos com uma cajadada só (lit.: duas moscas com um golpe)'],
      ['karuteene', 'ajuda que atrapalha (lit.: serviço de urso)'],
      ['pöialt hoidma', 'torcer por alguém (lit.: segurar o polegar)'],
      ['läbi olema', 'estar exausto, acabado (coloquial)'],
    ],
    nodes: {
      start: {
        emoji: '🌧️',
        text: 'Oli vihmane oktoobrihommik ja Linu jalutas mööda Supilinna kitsaid tänavaid. Herne tänava nurgal istus trepil tüdruk, kes lappas närviliselt paberilehti. “Tere! Mis toimub?” küsis Linu. “Ah, ära parem küsi,” ohkas tüdruk, “mul on täna ülikoolis ettekanne ja jänes on püksis.”',
        translation:
          'Era uma manhã chuvosa de outubro, e o Linu passeava pelas ruas estreitas de Supilinn. Na esquina da rua Herne, uma garota sentada numa escada folheava papéis, nervosa. “Oi! O que está rolando?”, perguntou o Linu. “Ah, melhor nem perguntar”, suspirou a garota, “hoje eu tenho uma apresentação na universidade e estou morrendo de medo.”',
        choices: [
          { text: 'Istuda tema kõrvale ja küsida, millest ettekanne räägib.', translation: 'Sentar ao lado dela e perguntar sobre o que é a apresentação.', next: 'kertu' },
          {
            text: '“Kas sul on jänes? Kus ta siis on?”',
            translation: '“Você tem uma lebre? E onde ela está?”',
            wrong: 'Não há lebre nenhuma: “jänes on püksis” (a lebre está nas calças) é uma expressão para dizer que alguém está com muito medo. A garota está nervosa por causa da apresentação.',
          },
        ],
      },
      kertu: {
        emoji: '🐟',
        text: 'Tüdruku nimi oli Kertu ja ta õppis ülikoolis bioloogiat. Tema ettekanne pidi rääkima Emajõe kaladest, aga ta oli terve öö üleval olnud ja oli täiesti läbi. “Pole hullu,” ütles Linu, “ma olen pingviin, ma tean kaladest kõike!” Kertu naeris esimest korda sel hommikul ja ütles, et see on päris äge.',
        translation:
          'A garota se chamava Kertu e estudava biologia na universidade. A apresentação dela era sobre os peixes do rio Emajõgi, mas ela tinha passado a noite inteira acordada e estava completamente acabada. “Relaxa”, disse o Linu, “eu sou pinguim, sei tudo sobre peixe!” A Kertu riu pela primeira vez naquela manhã e disse que aquilo era bem massa.',
        choices: [
          { text: 'Pakkuda, et nad harjutaksid ettekannet koos.', translation: 'Propor que os dois ensaiem a apresentação juntos.', next: 'harjutus' },
          { text: 'Soovitada, et ta jätaks ettekande ära ja läheks magama.', translation: 'Sugerir que ela desista da apresentação e vá dormir.', next: 'magama' },
        ],
      },
      harjutus: {
        emoji: '☕',
        text: 'Nad läksid lähedal asuvasse kohvikusse ja Kertu luges oma teksti valjult ette. Linu kuulas tähelepanelikult ja ütles siis: “Tead, sa räägid liiga kiiresti, nagu sa kardaksid, et keegi sind segab.” Kertu noogutas ja proovis uuesti, seekord rahulikumalt. “Nüüd on palju parem,” kiitis Linu, “ja samal ajal saad kohvi ka juua: lööme kaks kärbest ühe hoobiga!”',
        translation:
          'Eles foram a um café ali perto, e a Kertu leu o texto em voz alta. O Linu ouviu com atenção e depois disse: “Sabe, você fala rápido demais, como se tivesse medo de alguém te interromper.” A Kertu concordou com a cabeça e tentou de novo, dessa vez com mais calma. “Agora está muito melhor”, elogiou o Linu, “e ainda dá para tomar um café: matamos dois coelhos com uma cajadada só!”',
        choices: [
          { text: 'Minna koos ülikooli poole.', translation: 'Ir juntos em direção à universidade.', next: 'mart' },
          {
            text: '“Kas me peame nüüd kohvikus kärbseid püüdma?”',
            translation: '“Agora a gente tem que caçar moscas no café?”',
            wrong: '“Lööma kaks kärbest ühe hoobiga” (acertar duas moscas com um golpe só) é como o nosso “matar dois coelhos com uma cajadada só”: o Linu quis dizer que eles ensaiam e tomam café ao mesmo tempo.',
          },
        ],
      },
      mart: {
        emoji: '💻',
        text: 'Teel kohtasid nad Kertu kursusekaaslast Marti. “Oo, ettekanne! Ma võin su slaidid kiiresti ägedamaks teha, panen igale poole naljakaid pilte,” pakkus Mart. Kertu vaatas Linule otsa ja oli näha, et ta ei tea, mida vastata. Linu mõtles, et selline abi võib vabalt osutuda karuteeneks.',
        translation:
          'No caminho eles encontraram o Mart, colega de turma da Kertu. “Opa, apresentação! Posso deixar os seus slides mais legais rapidinho, ponho umas imagens engraçadas em todo canto”, ofereceu o Mart. A Kertu olhou para o Linu, e dava para ver que ela não sabia o que responder. O Linu pensou que uma ajuda dessas podia muito bem acabar atrapalhando.',
        choices: [
          { text: 'Öelda Martile viisakalt, et slaidid on juba head.', translation: 'Dizer educadamente ao Mart que os slides já estão bons.', next: 'viisakas' },
          { text: 'Lasta Martil slaidid ümber teha.', translation: 'Deixar o Mart refazer os slides.', next: 'final_karu' },
        ],
      },
      viisakas: {
        emoji: '🏛️',
        text: '“Aitäh, Mart, see on tõesti lahe mõte, aga Kertu slaidid on juba selged ja head,” ütles Linu naeratades. Mart kehitas õlgu: “Pole hullu, siis ma lihtsalt hoian teile pöialt.” Kertu hingas kergendatult välja ja sosistas Linule, et see oli nutikas. Nad jõudsid ülikooli peahoone valgete sammaste juurde täpselt õigel ajal.',
        translation:
          '“Valeu, Mart, é uma ideia legal mesmo, mas os slides da Kertu já estão claros e bons”, disse o Linu, sorrindo. O Mart deu de ombros: “Sem problema, então eu só vou torcer por vocês.” A Kertu respirou aliviada e cochichou para o Linu que aquilo tinha sido esperto. Eles chegaram às colunas brancas do prédio principal da universidade bem na hora.',
        choices: [{ text: 'Minna koos Kertuga auditooriumisse.', translation: 'Entrar no auditório com a Kertu.', next: 'ettekanne' }],
      },
      ettekanne: {
        emoji: '🎤',
        text: 'Kertu rääkis rahulikult ja selgelt, ja kui jutt jõudis Emajõe haugideni, tõstis Linu uhkelt tiiba. Pärast ettekannet tuli õppejõud Kertu juurde ja ütles, et see oli üks semestri parimaid ettekandeid. “Kas sa kuulsid?” hüüdis Kertu koridoris. “Minu jänes jooksis püksist minema!”',
        translation:
          'A Kertu falou com calma e clareza, e quando o assunto chegou aos lúcios do Emajõgi, o Linu levantou a asa, orgulhoso. Depois da apresentação, a professora foi até a Kertu e disse que tinha sido uma das melhores apresentações do semestre. “Você ouviu?”, gritou a Kertu no corredor. “A minha lebre fugiu das calças!”',
        choices: [{ text: 'Kutsuda Kertu jõe äärde tähistama.', translation: 'Convidar a Kertu para comemorar à beira do rio.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Õhtul istusid nad Emajõe kaldal ja sõid pirukaid. Kertu õpetas Linule veel mõned sõnad: “mõnus”, “norm” ja “täitsa lahe”. Linu kordas neid nii innukalt, et mööduvad tudengid hakkasid naerma. “Sa räägid juba nagu päris tartlane,” ütles Kertu, ja Linu tundis end nagu kala vees.',
        translation:
          'À noite, eles sentaram na margem do Emajõgi e comeram pastéis assados. A Kertu ensinou ao Linu mais algumas palavras: “mõnus” (gostoso, agradável), “norm” (de boa) e “täitsa lahe” (muito legal). O Linu as repetia com tanto entusiasmo que os estudantes que passavam começaram a rir. “Você já fala como um verdadeiro tartuense”, disse a Kertu, e o Linu se sentiu como peixe na água.',
        ending: { tone: 'bom', title: 'A lebre fugiu', message: 'Você entendeu as expressões, recusou uma ajuda que ia atrapalhar e ainda deu coragem à Kertu.' },
      },
      final_karu: {
        emoji: '🐻',
        text: 'Mart istus pingile ja hakkas sülearvutis slaide muutma. Kümne minuti pärast oli igal slaidil mõni tantsiv kala või vilkuv täht. Ettekanne läks lõpuks korda, aga publik naeris rohkem kalade kui Kertu jutu üle. “See oli ikka tõeline karuteene,” ohkas Kertu hiljem, ja Linu pidi temaga nõustuma.',
        translation:
          'O Mart sentou num banco e começou a mudar os slides no notebook. Dez minutos depois, cada slide tinha um peixe dançando ou uma estrela piscando. No fim a apresentação deu certo, mas o público riu mais dos peixes do que prestou atenção na fala da Kertu. “Isso foi mesmo uma ajuda de urso”, suspirou a Kertu depois, e o Linu teve de concordar.',
        ending: { tone: 'neutro', title: 'Serviço de urso', message: 'Nem toda ajuda ajuda: a “karuteene” é justamente o favor bem-intencionado que acaba atrapalhando.' },
      },
      magama: {
        emoji: '😴',
        text: 'Linu soovitas Kertul ettekanne ära jätta ja koju magama minna. Kertu mõtles hetke, aga raputas siis pead: õppejõud ei annaks talle teist võimalust. Ta läks ülikooli üksi, jänes ikka veel püksis. Linu jäi trepile istuma ja tundis, et oleks võinud teda rohkem aidata.',
        translation:
          'O Linu sugeriu que a Kertu desistisse da apresentação e fosse dormir em casa. A Kertu pensou por um instante, mas depois balançou a cabeça: a professora não lhe daria outra chance. Ela foi sozinha para a universidade, ainda morrendo de medo. O Linu ficou sentado na escada, sentindo que podia tê-la ajudado mais.',
        ending: { tone: 'neutro', title: 'Coragem que faltou', message: 'Fugir do medo nem sempre é opção: às vezes o melhor é ensaiar junto e seguir em frente.' },
      },
    },
  },
  {
    id: 'et-h32',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Talvepealinnas',
    emoji: '⛷️',
    summary: 'Em Otepää, o Linu aprende a esquiar com um rapaz que fala a mil por hora e descobre que uma senhora simpática diz as coisas mais importantes com rodeios.',
    cultural_context:
      'Otepää, no sudeste da Estônia, é chamada de “capital de inverno” do país. É de lá que larga a Tartu Maraton, uma maratona de esqui cross-country com mais de 60 quilômetros.',
    start: 'start',
    glossary: [
      ['vä', 'partícula de pergunta da fala (= kas)'],
      ['pole', 'não há, não é (forma curta de “ei ole”)'],
      ['käed-jalad tööd täis', 'estar atolado de trabalho (lit.: mãos e pés cheios de trabalho)'],
      ['asi on kotis', 'está no papo, resolvido (lit.: a coisa está no saco)'],
      ['hundiisu', 'fome de leão (lit.: apetite de lobo)'],
      ['läbi lillede ütlema', 'falar com rodeios (lit.: dizer através das flores)'],
      ['tühja kah', 'deixa pra lá'],
      ['tuult tiibadesse', 'boa sorte, vai com tudo (lit.: vento nas asas)'],
    ],
    nodes: {
      start: {
        emoji: '🎿',
        text: 'Jaanuaris sõitis Linu Otepääle, mida kutsutakse Eesti talvepealinnaks. Suusalaenutuses seisis noormees, kes rääkis nii kiiresti, et Linu sai aru ainult pooltest sõnadest. “Tšau! Suuski tahad vä?” küsis ta. “Mul on täna käed-jalad tööd täis, nii et räägime kiirelt.”',
        translation:
          'Em janeiro, o Linu foi para Otepää, que é chamada de capital de inverno da Estônia. Na locadora de esquis havia um rapaz que falava tão rápido que o Linu só entendia metade das palavras. “E aí! Quer esqui?”, perguntou ele. “Hoje eu estou atolado de trabalho, então vamos falar rapidinho.”',
        choices: [
          { text: '“Jah, palun, ühed suusad ja kepid.”', translation: '“Sim, por favor, um par de esquis e os bastões.”', next: 'suusad' },
          {
            text: '“Vabandust, kas teie käed ja jalad on haiged?”',
            translation: '“Desculpe, suas mãos e seus pés estão doentes?”',
            wrong: '“Käed-jalad tööd täis” (mãos e pés cheios de trabalho) quer dizer só que ele está muito ocupado. E o “vä” no fim da pergunta é a partícula de pergunta da fala, no lugar de “kas”.',
          },
        ],
      },
      suusad: {
        emoji: '🧑',
        text: 'Noormehe nimi oli Priit. Ta ulatas Linule suusad ja ütles: “Need on küll natuke vanad, aga pole viga, libisevad hästi.” Siis küsis ta, kas Linu on varem suusatanud. “Mitte kunagi,” tunnistas Linu, “aga jääl olen ma küll palju libisenud.”',
        translation:
          'O rapaz se chamava Priit. Ele entregou os esquis ao Linu e disse: “São meio velhos, mas não tem problema, deslizam bem.” Depois perguntou se o Linu já tinha esquiado antes. “Nunca”, confessou o Linu, “mas no gelo eu já deslizei bastante.”',
        choices: [
          { text: 'Paluda, et Priit näitaks, kuidas sõita.', translation: 'Pedir ao Priit que mostre como esquiar.', next: 'tund' },
          { text: 'Minna kohe üksi mäe otsa.', translation: 'Subir sozinho o morro logo de cara.', next: 'magi' },
        ],
      },
      magi: {
        emoji: '⛄',
        text: 'Linu ronis üksi lähima mäe otsa ja vaatas alla. Ülevalt tundus mägi palju järsem kui alt. Ta lükkas end hooga liikuma ja juba mõne sekundi pärast veeres ta nagu lumepall alla. All seisis Priit, vangutas pead ja ütles: “No kuule, sa oled ikka hull pingviin.”',
        translation:
          'O Linu subiu sozinho o morro mais próximo e olhou para baixo. Lá de cima o morro parecia bem mais íngreme do que de baixo. Ele tomou impulso e, poucos segundos depois, já rolava ladeira abaixo feito uma bola de neve. Lá embaixo estava o Priit, que balançou a cabeça e disse: “Ô, meu, você é mesmo um pinguim doido.”',
        choices: [{ text: 'Tunnistada, et tund oleks siiski hea mõte.', translation: 'Admitir que uma aula seria uma boa ideia, afinal.', next: 'tund' }],
      },
      tund: {
        emoji: '🏔️',
        text: 'Priit leidis kümme minutit vaba aega ja näitas Linule, kuidas suuski libistada ja keppidega tõugata. “Painuta põlvi, ära vaata suuski, vaata ette!” hüüdis ta. Poole tunni pärast sõitis Linu juba üsna kindlalt mööda rada. “Näed, asi on kotis,” ütles Priit ja tõstis pöidla.',
        translation:
          'O Priit arrumou dez minutos livres e mostrou ao Linu como deslizar os esquis e empurrar com os bastões. “Dobra os joelhos, não olha para os esquis, olha para a frente!”, gritou ele. Meia hora depois, o Linu já esquiava pela pista com bastante firmeza. “Viu? Está no papo”, disse o Priit, fazendo joinha.',
        choices: [
          { text: 'Minna kohvikusse midagi sooja jooma.', translation: 'Ir ao café tomar algo quente.', next: 'kohvik' },
          {
            text: '“Mis kotis? Ma ei näe siin ühtegi kotti.”',
            translation: '“Que saco? Não estou vendo saco nenhum aqui.”',
            wrong: '“Asi on kotis” (a coisa está no saco) quer dizer que está resolvido, que deu certo: o Priit está dizendo que o Linu já aprendeu a esquiar.',
          },
        ],
      },
      kohvik: {
        emoji: '🍲',
        text: 'Pärast suusatamist oli Linul selline hundiisu, et ta tellis suure kausitäie hernesuppi ja kolm pirukat. Tema kõrvale istus vanaproua, kes vaatas kaua aknast välja ja ütles siis: “Küll on mu maja ees palju lund, ja mu selg pole enam see, mis vanasti.” Siis ta ohkas ja lisas: “Noored on tänapäeval ikka nii tugevad, eks ole.” Linu sai aru, et vanaproua räägib läbi lillede.',
        translation:
          'Depois de esquiar, o Linu estava com tanta fome que pediu uma tigela grande de sopa de ervilha e três pastéis. Ao lado dele sentou uma senhora, que ficou um tempão olhando pela janela e depois disse: “Quanta neve na frente da minha casa, e as minhas costas já não são o que eram.” Então ela suspirou e acrescentou: “Os jovens de hoje são tão fortes, não é?” O Linu percebeu que a senhora estava falando com rodeios.',
        choices: [
          { text: 'Pakkuda, et ta aitab lund rookida.', translation: 'Oferecer ajuda para tirar a neve.', next: 'lumi' },
          { text: '“Jah, noored on tõesti tugevad,” vastata ja edasi süüa.', translation: 'Responder “É, os jovens são mesmo fortes” e continuar comendo.', next: 'final_supp' },
        ],
      },
      lumi: {
        emoji: '❄️',
        text: 'Vanaproua nimi oli Helju ja tema väike puumaja asus Pühajärve lähedal. Linu võttis labida ja rookis tee maja uksest väravani puhtaks. Helju tõi talle tassi kuuma teed ja taldrikutäie omatehtud kringlit. “Sa oled kuldne pingviin,” ütles ta, “ma olen sulle tänu võlgu.”',
        translation:
          'A senhora se chamava Helju, e a casinha de madeira dela ficava perto do lago Pühajärv. O Linu pegou a pá e limpou o caminho da porta da casa até o portão. A Helju trouxe para ele uma xícara de chá quente e um prato de rosca trançada caseira. “Você é um pinguim de ouro”, disse ela, “fico te devendo essa.”',
        choices: [{ text: 'Rääkida Heljule, et ta tahaks järgmisel aastal Tartu maratoni sõita.', translation: 'Contar à Helju que ele queria correr a Tartu Maraton no ano que vem.', next: 'maraton' }],
      },
      maraton: {
        emoji: '🏅',
        text: 'Helju naeris südamest. “Tartu maraton algab just siitsamast Otepäält ja on üle kuuekümne kilomeetri pikk!” ütles ta. “Aga kui sa oled sama visa nagu lumerookimisel, siis miks mitte.” Ta pigistas Linu tiiba ja lisas: “Tuult tiibadesse, mu poiss!”',
        translation:
          'A Helju riu com gosto. “A Tartu Maraton começa justamente aqui em Otepää e tem mais de sessenta quilômetros!”, disse ela. “Mas se você for tão persistente quanto foi tirando a neve, por que não?” Ela apertou a asa do Linu e acrescentou: “Vento nas asas, meu menino!”',
        choices: [
          { text: '“Aitäh! Ma harjutan terve talve.”', translation: '“Obrigado! Vou treinar o inverno inteiro.”', next: 'final_bom' },
          {
            text: '“Aga mul pole tiibades tuult, ma ei oska ju lennata.”',
            translation: '“Mas não tem vento nas minhas asas, eu nem sei voar.”',
            wrong: '“Tuult tiibadesse!” (vento nas asas) é um jeito de desejar boa sorte e ânimo, como “vai com tudo!”. A Helju não está falando de voar de verdade.',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Järgmisel päeval sõitis Linu koos Priiduga ümber Pühajärve ja kukkus ainult kaks korda. Õhtul saatis Helju talle sõnumi, kus oli kringli retsept ja üks lause: “Maja ees on jälle lund.” Seekord sai Linu vihjest kohe aru ja naeris. Ta teadis nüüd, et eestlased ütlevad kõige tähtsamad asjad tihti läbi lillede.',
        translation:
          'No dia seguinte, o Linu esquiou com o Priit em volta do Pühajärv e só caiu duas vezes. À noite, a Helju mandou uma mensagem com a receita da rosca e uma frase: “Tem neve de novo na frente da casa.” Dessa vez o Linu entendeu a indireta na hora e riu. Agora ele sabia que os estonianos muitas vezes dizem as coisas mais importantes com rodeios.',
        ending: { tone: 'bom', title: 'Vento nas asas', message: 'Você acompanhou a fala rápida, as expressões e até a indireta da Helju. Otepää te espera para a maratona!' },
      },
      final_supp: {
        emoji: '🥄',
        text: 'Linu noogutas viisakalt ja sõi oma suppi edasi. Vanaproua ootas veel natuke, tõusis siis püsti ja ütles: “Tühja kah, küll ma ise hakkama saan.” Alles hiljem, kui Linu nägi teda aknast labidaga lund rookimas, sai ta aru, mida proua tegelikult tahtis. Tal hakkas pisut piinlik.',
        translation:
          'O Linu concordou educadamente com a cabeça e continuou tomando a sopa. A senhora esperou mais um pouco, depois se levantou e disse: “Deixa pra lá, eu me viro sozinha.” Só mais tarde, quando viu pela janela a senhora tirando neve com a pá, o Linu entendeu o que ela realmente queria. Ele ficou meio sem graça.',
        ending: { tone: 'neutro', title: 'A indireta passou', message: 'A senhora falou “läbi lillede”, com rodeios: o comentário sobre a neve e as costas era um pedido de ajuda.' },
      },
    },
  },
  {
    id: 'et-h33',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Valge daam ja sõrmus',
    emoji: '🌕',
    summary: 'Em Haapsalu, numa noite de lua cheia de agosto, o Linu escapa de um vendedor espertinho, aprende a reconhecer um xale de verdade e vai ver a Dama Branca na janela do castelo.',
    cultural_context:
      'Diz a lenda que, nas noites de lua cheia de agosto, a silhueta de uma moça emparedada aparece na janela da capela do castelo episcopal de Haapsalu: é a Valge daam, a Dama Branca. O xale de Haapsalu, tricotado à mão, é tão fino que passa por dentro de um anel.',
    start: 'start',
    glossary: [
      ['pähe määrima', 'empurrar algo para alguém, vender gato por lebre (lit.: esfregar na cabeça)'],
      ['puru silma ajama', 'enganar (lit.: jogar poeira nos olhos)'],
      ['käima nagu kass ümber palava pudru', 'enrolar, fugir do assunto (lit.: andar como gato em volta do mingau quente)'],
      ['süda on saapasääres', 'estar com medo (lit.: o coração está no cano da bota)'],
      ['ehtne', 'autêntico, legítimo'],
      ['sall', 'xale'],
      ['sõrmus', 'anel'],
      ['täiskuu', 'lua cheia'],
    ],
    nodes: {
      start: {
        emoji: '🧶',
        text: 'Augusti täiskuu ajal oli Haapsalu rahvast täis. Linu peatus Maie juures, kes kudus kuulsaid Haapsalu salle juba viiekümnendat aastat. “Täna õhtul võib lossis näha Valget daami,” ütles Maie, “aga enne tasub laadal ära käia.” Ta vaatas Linule kavalalt otsa ja lisas: “Ainult ära lase endale midagi pähe määrida!”',
        translation:
          'Na lua cheia de agosto, Haapsalu estava lotada. O Linu estava hospedado na casa da Maie, que tricotava os famosos xales de Haapsalu havia cinquenta anos. “Hoje à noite dá para ver a Dama Branca no castelo”, disse a Maie, “mas antes vale a pena dar uma passada na feira.” Ela olhou para o Linu com cara de esperta e acrescentou: “Só não deixe te empurrarem nada!”',
        choices: [
          { text: 'Minna laadale ja olla ettevaatlik.', translation: 'Ir à feira e tomar cuidado.', next: 'laat' },
          {
            text: '“Kas laadal määritakse inimestele pähe võid?”',
            translation: '“Na feira passam manteiga na cabeça das pessoas?”',
            wrong: '“Pähe määrima” (lit.: esfregar na cabeça) quer dizer empurrar alguma coisa para alguém, vender gato por lebre. A Maie avisou o Linu para não se deixar enganar na feira.',
          },
        ],
      },
      laat: {
        emoji: '🏪',
        text: 'Laadal müüs üks mees valgeid salle ja kiitis neid kõva häälega. “Ehtne Haapsalu sall, puhas käsitöö, ainult kakskümmend eurot!” hüüdis ta. Linu katsus salli ja see oli kare ning paks. Ta meenutas, mida Maie oli rääkinud: päris Haapsalu sall on nii peen, et selle saab tõmmata läbi sõrmuse.',
        translation:
          'Na feira, um homem vendia xales brancos e os elogiava em voz alta. “Legítimo xale de Haapsalu, puro artesanato, só vinte euros!”, gritava ele. O Linu apalpou um xale, e ele era áspero e grosso. Ele lembrou o que a Maie tinha contado: o verdadeiro xale de Haapsalu é tão fino que dá para passá-lo por dentro de um anel.',
        choices: [
          { text: 'Paluda, et müüja tõmbaks salli läbi sõrmuse.', translation: 'Pedir ao vendedor que passe o xale por um anel.', next: 'sormus' },
          { text: 'Osta sall kohe ära, sest see on odav.', translation: 'Comprar o xale logo, porque está barato.', next: 'final_petetud' },
        ],
      },
      sormus: {
        emoji: '💍',
        text: 'Müüja hakkas järsku kiiresti rääkima ilmast, turistidest ja oma vanaemast. Ta käis küsimuse ümber nagu kass ümber palava pudru, aga sõrmust ta välja ei võtnud. Lõpuks ütles ta mossis näoga, et tal pole praegu aega. Linu sai aru, et mees oli tahtnud talle lihtsalt puru silma ajada.',
        translation:
          'De repente, o vendedor começou a falar depressa do tempo, dos turistas e da avó dele. Ele enrolou em volta da pergunta feito gato em volta de mingau quente, mas não tirou anel nenhum. No fim, disse de cara amarrada que agora não tinha tempo. O Linu entendeu que o homem só tinha querido enganá-lo.',
        choices: [
          { text: 'Minna tagasi Maie juurde ja rääkida, mis juhtus.', translation: 'Voltar para a casa da Maie e contar o que aconteceu.', next: 'maie' },
          {
            text: '“Müüjal oli silmas puru, sellepärast ei leidnud ta sõrmust.”',
            translation: '“O vendedor estava com um cisco no olho, por isso não achou o anel.”',
            wrong: '“Puru silma ajama” (jogar poeira nos olhos) quer dizer enganar alguém, e “käima nagu kass ümber palava pudru” é enrolar, fugir do assunto. O vendedor fugiu do teste porque o xale não era de verdade.',
          },
        ],
      },
      maie: {
        emoji: '🕸️',
        text: 'Maie kuulas Linu lugu ja naeris. Siis võttis ta kapist ämblikuvõrgu moodi peene salli ja oma abielusõrmuse. Ta tõmbas salli aeglaselt läbi sõrmuse ja sall libises läbi nagu vesi. “Vaat see on päris Haapsalu sall,” ütles ta uhkelt, “selle kudumiseks kulub mul terve kuu.”',
        translation:
          'A Maie ouviu a história do Linu e riu. Depois tirou do armário um xale fininho como teia de aranha e a aliança de casamento dela. Passou o xale devagar por dentro do anel, e ele deslizou como água. “Isso, sim, é um xale de Haapsalu de verdade”, disse ela, orgulhosa, “levo um mês inteiro para tricotar um desses.”',
        choices: [{ text: 'Minna koos Maiega lossi Valget daami vaatama.', translation: 'Ir com a Maie ao castelo ver a Dama Branca.', next: 'loss' }],
      },
      loss: {
        emoji: '🏰',
        text: 'Kell oli juba palju, kui nad lossihoovi jõudsid. Rahvas vaatas vaikides kabeli akna poole, kus kuuvalgel paistis hele kuju. Keegi Linu selja taga sosistas, et tal on süda saapasääres. Maie aga ütles rahulikult: “Legend räägib, et daam vaatab siiani aknast välja ja otsib oma armastatut.”',
        translation:
          'Já era tarde quando eles chegaram ao pátio do castelo. As pessoas olhavam em silêncio para a janela da capela, onde uma figura clara aparecia sob a luz da lua. Alguém atrás do Linu cochichou que estava morrendo de medo. Mas a Maie disse com calma: “A lenda diz que a dama até hoje olha pela janela procurando o seu amado.”',
        choices: [
          { text: 'Hoida Maiel käest kinni ja vaadata kuju lõpuni.', translation: 'Segurar a mão da Maie e ficar olhando a figura até o fim.', next: 'final_bom' },
          { text: 'Joosta hirmunult lossihoovist välja.', translation: 'Sair correndo do pátio, apavorado.', next: 'final_hirm' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Kuju paistis aknas veel mõne minuti ja kadus siis sama vaikselt, kui oli tulnud. Kodus pani Maie Linule õlgadele pehme valge salli, mille ta oli just valmis kudunud. “See on sulle, et sa Haapsalut mäletaksid,” ütles ta. Linu tõmbas salli läbi Maie sõrmuse ja naeratas: nüüd ei saaks keegi talle enam puru silma ajada.',
        translation:
          'A figura ainda apareceu na janela por alguns minutos e depois sumiu tão silenciosamente quanto tinha chegado. Em casa, a Maie pôs nos ombros do Linu um xale branco e macio que tinha acabado de tricotar. “É para você, para você se lembrar de Haapsalu”, disse ela. O Linu passou o xale pelo anel da Maie e sorriu: agora ninguém mais conseguiria enganá-lo.',
        ending: { tone: 'bom', title: 'Xale de verdade', message: 'Você não caiu na conversa do vendedor, entendeu as expressões e ainda viu a Dama Branca. Haapsalu te deu um presente à altura.' },
      },
      final_hirm: {
        emoji: '🍦',
        text: 'Linul oli süda saapasääres ja ta jooksis lossihoovist välja otse jäätisemüüja juurde. Kui ta natukese aja pärast tagasi tuli, oli kuju juba kadunud. Maie naeris ja ütles, et järgmisel aastal on jälle täiskuu. Linu lubas, et siis on ta julgem.',
        translation:
          'O Linu estava morrendo de medo e saiu correndo do pátio direto para o sorveteiro. Quando voltou, um tempinho depois, a figura já tinha sumido. A Maie riu e disse que no ano que vem vai ter lua cheia de novo. O Linu prometeu que aí seria mais corajoso.',
        ending: { tone: 'neutro', title: 'Coração na bota', message: 'O medo falou mais alto e a Dama Branca passou sem você. Fica para a próxima lua cheia de agosto!' },
      },
      final_petetud: {
        emoji: '💸',
        text: 'Linu maksis kakskümmend eurot ja viis salli uhkelt koju. Maie katsus salli ja ohkas: “Oi, Linu, see on masinaga tehtud. Sulle aeti puru silma.” Linu oli pettunud, aga Maie lubas talle õpetada, kuidas päris salli ära tunda. Õhtul läksid nad siiski koos lossi Valget daami vaatama.',
        translation:
          'O Linu pagou vinte euros e levou o xale para casa, todo orgulhoso. A Maie apalpou o xale e suspirou: “Ai, Linu, isso é feito à máquina. Te enganaram.” O Linu ficou decepcionado, mas a Maie prometeu ensinar a ele como reconhecer um xale de verdade. À noite, mesmo assim, os dois foram juntos ao castelo ver a Dama Branca.',
        ending: { tone: 'neutro', title: 'Gato por lebre', message: 'O xale era de máquina: o teste do anel teria desmascarado o vendedor. Pelo menos agora você sabe como se faz.' },
      },
    },
  },
  // ───────────────────────── B2.4 ─────────────────────────
  {
    id: 'et-h34',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Väitlus Rakveres',
    emoji: '📱',
    summary: 'Em Rakvere, o Linu é jurado num debate escolar sobre proibir celulares na escola e precisa acompanhar cada argumento e cada conector para dar um veredito justo.',
    cultural_context:
      'Rakvere, no norte da Estônia, tem as ruínas de um castelo medieval no morro Vallimägi. Ao lado dele fica a grande estátua de um auroque (tarvas), animal símbolo da cidade.',
    start: 'start',
    glossary: [
      ['esiteks… teiseks', 'em primeiro lugar… em segundo lugar'],
      ['seega', 'portanto, assim'],
      ['pealegi', 'além disso'],
      ['ühelt poolt… teiselt poolt', 'por um lado… por outro lado'],
      ['kuigi', 'embora'],
      ['sellegipoolest', 'mesmo assim, apesar disso'],
      ['samas', 'ao mesmo tempo, por outro lado'],
      ['väitlus', 'debate'],
    ],
    nodes: {
      start: {
        emoji: '🏫',
        text: 'Rakvere gümnaasiumi väitlusklubi kutsus Linu kohtunikuks. Teema oli: “Nutitelefonid tuleks koolis keelata.” Õpetaja Anne selgitas, et Linu peab jälgima, kas argumendid on loogilised ja kas väitlejad vastavad teineteisele. “Kõige tähtsam on põhjendus,” ütles ta, “mitte see, kes kõige valjemini räägib.”',
        translation:
          'O clube de debate do colégio de Rakvere convidou o Linu para ser jurado. O tema era: “Os celulares deveriam ser proibidos na escola.” A professora Anne explicou que o Linu tinha de observar se os argumentos eram lógicos e se os debatedores respondiam um ao outro. “O mais importante é a justificativa”, disse ela, “e não quem fala mais alto.”',
        choices: [{ text: 'Istuda kohtunikulaua taha ja kuulata esimest kõnelejat.', translation: 'Sentar-se à mesa do júri e ouvir o primeiro orador.', next: 'poolt' }],
      },
      poolt: {
        emoji: '🗣️',
        text: 'Esimesena rääkis Liisa, kes oli keelu poolt. “Esiteks segavad telefonid tundides keskendumist,” alustas ta. “Teiseks suhtlevad õpilased vahetunnis rohkem ekraani kui üksteisega. Seega leian, et telefonid peaksid koolipäeva ajal olema kapis.”',
        translation:
          'A primeira a falar foi a Liisa, que era a favor da proibição. “Em primeiro lugar, os celulares atrapalham a concentração nas aulas”, começou ela. “Em segundo lugar, no intervalo os alunos se comunicam mais com a tela do que uns com os outros. Portanto, acho que durante o dia escolar os celulares deveriam ficar no armário.”',
        choices: [
          { text: 'Kirjutada Liisa kaks argumenti üles ja kuulata teist poolt.', translation: 'Anotar os dois argumentos da Liisa e ouvir o outro lado.', next: 'vastu' },
          {
            text: '“Liisa on ju telefonide poolt, eks?”',
            translation: '“A Liisa é a favor dos celulares, né?”',
            wrong: 'Pelo contrário: a Liisa defende a proibição (“oli keelu poolt”). Ela dá dois argumentos com “esiteks” e “teiseks” e conclui com “seega” (portanto): os celulares deveriam ficar no armário.',
          },
        ],
      },
      vastu: {
        emoji: '🧑‍🎓',
        text: 'Seejärel võttis sõna Karl, kes oli keelu vastu. “Ühelt poolt on Liisal õigus, et telefonid võivad segada,” ütles ta. “Teiselt poolt kasutame me telefone ka õppimiseks: sõnaraamatu, kaardi ja kalkulaatorina. Pealegi ei õpeta keelamine meile, kuidas tehnoloogiat mõistlikult kasutada.”',
        translation:
          'Em seguida, quem pediu a palavra foi o Karl, que era contra a proibição. “Por um lado, a Liisa tem razão quando diz que os celulares podem atrapalhar”, disse ele. “Por outro lado, também usamos o celular para estudar: como dicionário, mapa e calculadora. Além disso, proibir não nos ensina a usar a tecnologia com bom senso.”',
        choices: [
          { text: 'Märkida üles, et Karl vastas otse Liisa argumendile.', translation: 'Anotar que o Karl respondeu diretamente ao argumento da Liisa.', next: 'vastulause' },
          {
            text: '“Karl nõustub Liisaga täielikult.”',
            translation: '“O Karl concorda totalmente com a Liisa.”',
            wrong: 'O Karl admite um ponto da Liisa (“ühelt poolt on Liisal õigus”: por um lado, a Liisa tem razão), mas logo vêm o “teiselt poolt” (por outro lado) e o “pealegi” (além disso): ele é contra a proibição.',
          },
        ],
      },
      vastulause: {
        emoji: '⚖️',
        text: 'Liisa tõusis kohe püsti. “Kuigi telefon võib olla kasulik, ei kasuta enamik õpilasi seda tunnis sõnaraamatuna,” ütles ta. “Pealegi on koolis arvutid, mida saab õppimiseks kasutada.” Karl vastas rahulikult, et sellegipoolest peaks kool õpetama vastutust, mitte ainult keelama.',
        translation:
          'A Liisa se levantou na hora. “Embora o celular possa ser útil, a maioria dos alunos não o usa como dicionário na aula”, disse ela. “Além disso, a escola tem computadores que podem ser usados para estudar.” O Karl respondeu com calma que, mesmo assim, a escola deveria ensinar responsabilidade, e não só proibir.',
        choices: [
          { text: 'Paluda mõlemal poolel oma argumendid kokku võtta.', translation: 'Pedir aos dois lados que resumam seus argumentos.', next: 'kokkuvote' },
          { text: 'Kuulutada kohe võitjaks see, kes rääkis kõige kindlama häälega.', translation: 'Declarar logo vencedor quem falou com a voz mais firme.', next: 'final_kiire' },
        ],
      },
      kokkuvote: {
        emoji: '📝',
        text: 'Liisa ütles kokkuvõtteks, et kuna keskendumine on õppimise alus, tuleks telefonid tundide ajaks ära panna. Karl leidis, et keeld lahendaks probleemi ainult pealtnäha ja seetõttu oleks parem kokku leppida selgetes reeglites. Saal jäi vaikseks ja kõik vaatasid Linule otsa. Linu mõtles hetke ja pani tähele, et mõlemad olid oma seisukohta hästi põhjendanud.',
        translation:
          'Para concluir, a Liisa disse que, como a concentração é a base do aprendizado, os celulares deveriam ser guardados durante as aulas. O Karl achava que a proibição resolveria o problema só na aparência e que, por isso, seria melhor combinar regras claras. A sala ficou em silêncio e todos olharam para o Linu. O Linu pensou por um instante e percebeu que os dois tinham fundamentado bem as suas posições.',
        choices: [{ text: 'Teatada kaalutud otsus ja seda põhjendada.', translation: 'Anunciar uma decisão ponderada e justificá-la.', next: 'otsus' }],
      },
      otsus: {
        emoji: '🏆',
        text: 'Linu tõusis ja ütles: “Minu arvates olid mõlemad argumendid tugevad. Liisa tõi selgeid näiteid, samas vastas Karl paremini vastase argumentidele. Seetõttu annan napi võidu Karlile, kuigi Liisa kõne oli paremini üles ehitatud.” Mõlemad väitlejad noogutasid ja õpetaja Anne naeratas rahulolevalt.',
        translation:
          'O Linu se levantou e disse: “Na minha opinião, os dois argumentos foram fortes. A Liisa deu exemplos claros; já o Karl respondeu melhor aos argumentos do adversário. Por isso dou uma vitória apertada ao Karl, embora o discurso da Liisa tenha sido mais bem estruturado.” Os dois debatedores concordaram com a cabeça, e a professora Anne sorriu satisfeita.',
        choices: [{ text: 'Minna pärast väitlust õpilastega Vallimäele.', translation: 'Depois do debate, subir o Vallimägi com os alunos.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Pärast väitlust ronisid kõik koos Vallimäele, kus seisab suur tarvase kuju. Liisa ja Karl vaidlesid edasi, aga nüüd juba naerdes. “Järgmine kord oled sa jälle kohtunik,” ütles Liisa, “sest sa kuulasid meid mõlemaid.” Linu mõtles, et hea vaidlus ei ole tüli, vaid mõtete vahetamine.',
        translation:
          'Depois do debate, todos subiram juntos o Vallimägi, onde fica a grande estátua do auroque. A Liisa e o Karl continuaram discutindo, mas agora rindo. “Da próxima vez você é jurado de novo”, disse a Liisa, “porque você ouviu nós dois.” O Linu pensou que um bom debate não é briga, e sim troca de ideias.',
        ending: { tone: 'bom', title: 'Veredito justo', message: 'Você acompanhou cada conector, pesou os argumentos dos dois lados e justificou sua decisão.' },
      },
      final_kiire: {
        emoji: '😳',
        text: 'Linu kuulutas võitjaks Liisa, sest tema hääl oli kõige kindlam. Õpetaja Anne kergitas kulmu ja küsis, milliste argumentide põhjal ta nii otsustas. Linu ei osanud vastata ja punastas. “Järgmine kord kirjuta põhjendused üles,” ütles Anne sõbralikult.',
        translation:
          'O Linu declarou a Liisa vencedora, porque a voz dela era a mais firme. A professora Anne ergueu a sobrancelha e perguntou com base em quais argumentos ele tinha decidido assim. O Linu não soube responder e ficou vermelho. “Da próxima vez, anote as justificativas”, disse a Anne, gentil.',
        ending: { tone: 'neutro', title: 'Voz não é argumento', message: 'Num debate, ganha quem argumenta melhor, não quem fala mais alto — como a professora avisou logo no começo.' },
      },
    },
  },
  {
    id: 'et-h35',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Külakoosolek Lahemaal',
    emoji: '🌲',
    summary: 'Num vilarejo do parque nacional de Lahemaa, o Linu acompanha uma reunião sobre construir um estacionamento perto do pântano e tenta achar um meio-termo entre os dois lados.',
    cultural_context:
      'Lahemaa, criado em 1971, é o primeiro parque nacional da Estônia. Tem pântanos elevados (raba) cruzados por passarelas de madeira, como a do pântano de Viru, onde vivem aves como o grou e o tetraz-lira.',
    start: 'start',
    glossary: [
      ['järelikult', 'consequentemente, logo'],
      ['vastupidi', 'pelo contrário'],
      ['mitte ainult…, vaid ka', 'não só…, mas também'],
      ['küll…, samas', 'é verdade que…, por outro lado'],
      ['ometi', 'ainda assim, no entanto'],
      ['ettepanek', 'proposta'],
      ['raba', 'pântano elevado, turfeira'],
      ['külakoosolek', 'reunião do vilarejo'],
    ],
    nodes: {
      start: {
        emoji: '🏡',
        text: 'Lahemaa rahvuspargi servas asuvas külas oli õhtul külakoosolek. Arutati, kas raba äärde tuleks ehitada uus suur parkla ja kohvik. Linu, kes elas suve läbi ühe talu heinaküünis, istus saali viimasesse ritta. Koosolekut juhatas külavanem Toomas, kes palus kõigil rääkida kordamööda ja lühidalt.',
        translation:
          'Num vilarejo na borda do parque nacional de Lahemaa, havia uma reunião dos moradores à noite. A discussão era se deveriam construir um estacionamento grande e um café perto do pântano. O Linu, que passava o verão no palheiro de uma fazenda, sentou-se na última fileira do salão. Quem conduzia a reunião era o líder do vilarejo, Toomas, que pediu a todos que falassem um de cada vez e de forma breve.',
        choices: [{ text: 'Kuulata, mida külaelanikud arvavad.', translation: 'Ouvir o que os moradores pensam.', next: 'kadri' }],
      },
      kadri: {
        emoji: '☕',
        text: 'Esimesena rääkis Kadri, kellel oli külas väike kohvik. “Turiste tuleb igal aastal üha rohkem, aga praegu pargivad nad oma autod teeservale,” ütles ta. “Järelikult on meil vaja parklat, et tee oleks ohutu. Pealegi tooks uus kohvik külale töökohti.”',
        translation:
          'A primeira a falar foi a Kadri, que tinha um pequeno café no vilarejo. “A cada ano vêm mais turistas, mas hoje eles estacionam os carros na beira da estrada”, disse ela. “Consequentemente, precisamos de um estacionamento, para que a estrada seja segura. Além disso, o café novo traria empregos para o vilarejo.”',
        choices: [
          { text: 'Kuulata ka vastuargumente.', translation: 'Ouvir também os contra-argumentos.', next: 'ants' },
          {
            text: '“Kadri arvab, et turiste on liiga palju ja nad tuleks ära saata.”',
            translation: '“A Kadri acha que há turistas demais e que eles deveriam ser mandados embora.”',
            wrong: 'A Kadri quer o estacionamento: ela diz que os turistas param na beira da estrada e, “järelikult” (consequentemente), é preciso um estacionamento. Com “pealegi” (além disso), acrescenta que o café traria empregos.',
          },
        ],
      },
      ants: {
        emoji: '🦢',
        text: 'Seejärel tõusis vana metsavaht Ants. “Mina ei ole turistide vastu, vastupidi,” alustas ta. “Aga raba ei ole mitte ainult ilus vaatepilt, vaid ka elupaik, kus pesitsevad kured ja tedred. Kui me ehitame parkla otse raba äärde, kaob just see vaikus, mille pärast inimesed siia tulevad.”',
        translation:
          'Em seguida levantou-se o velho guarda-florestal Ants. “Eu não sou contra os turistas, pelo contrário”, começou ele. “Mas o pântano não é só uma paisagem bonita: é também um habitat onde fazem ninho grous e tetrazes-liras. Se construirmos o estacionamento colado ao pântano, some justamente o silêncio que faz as pessoas virem até aqui.”',
        choices: [
          { text: 'Mõelda, kas leidub lahendus, mis arvestaks mõlema poolega.', translation: 'Pensar se existe uma solução que leve em conta os dois lados.', next: 'kompromiss' },
          { text: 'Toetada kohe Antsu, sest loodus on alati tähtsam.', translation: 'Apoiar o Ants de imediato, porque a natureza é sempre mais importante.', next: 'final_tuli' },
        ],
      },
      kompromiss: {
        emoji: '💡',
        text: 'Linu tõstis tiiva ja Toomas andis talle sõna. “Mulle tundub, et teil mõlemal on õigus,” ütles Linu. “Kas parkla ei võiks olla hoopis küla keskel, Kadri kohviku kõrval? Sealt saaks raba juurde viia jalgraja, nii et autod jääksid rabast kaugele.”',
        translation:
          'O Linu levantou a asa e o Toomas lhe deu a palavra. “Parece que vocês dois têm razão”, disse o Linu. “O estacionamento não poderia ficar no centro do vilarejo, ao lado do café da Kadri? De lá daria para fazer uma trilha até o pântano, e assim os carros ficariam longe dele.”',
        choices: [
          { text: 'Oodata, mida teised ettepanekust arvavad.', translation: 'Esperar para ver o que os outros acham da proposta.', next: 'arutelu' },
          {
            text: '“Linu tahab, et parkla ehitataks otse raba äärde.”',
            translation: '“O Linu quer que o estacionamento seja construído colado ao pântano.”',
            wrong: 'É o contrário: o Linu propõe o estacionamento “küla keskel” (no centro do vilarejo), com uma trilha até o pântano, justamente para que os carros fiquem longe dele (“jääksid rabast kaugele”).',
          },
        ],
      },
      arutelu: {
        emoji: '🗳️',
        text: 'Saalis tekkis elav arutelu. Kadri arvas, et küla keskel oleks kohvikul küll vähem juhuslikke möödujaid, samas läheksid kõik matkajad just tema uksest mööda. Ants nõustus, et see oleks mõistlik, kuigi raja ehitamine võtab aega ja raha. Lõpuks tegi Toomas ettepaneku hääletada.',
        translation:
          'No salão começou uma discussão animada. A Kadri achava que, no centro do vilarejo, o café teria, é verdade, menos gente passando por acaso; por outro lado, todos os caminhantes passariam justamente pela porta dela. O Ants concordou que seria sensato, embora construir a trilha leve tempo e custe dinheiro. No fim, o Toomas propôs uma votação.',
        choices: [{ text: 'Hääletada koos teistega.', translation: 'Votar junto com os outros.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Enamik külaelanikke hääletas Linu ettepaneku poolt. Kadri ja Ants surusid teineteisel kätt, kuigi Ants pomises, et raha tuleb alles leida. Järgmisel hommikul kõndis Linu raba laudteel ja kuulas kurgede hüüdeid. Ta mõtles, et hea kompromiss ei tee kedagi päris õnnelikuks, aga ometi saavad kõik sellega elada.',
        translation:
          'A maioria dos moradores votou a favor da proposta do Linu. A Kadri e o Ants apertaram as mãos, embora o Ants tenha resmungado que ainda era preciso achar o dinheiro. Na manhã seguinte, o Linu caminhou pela passarela do pântano ouvindo o chamado dos grous. Ele pensou que um bom meio-termo não deixa ninguém totalmente feliz, mas, ainda assim, todos conseguem conviver com ele.',
        ending: { tone: 'bom', title: 'Meio-termo', message: 'Você entendeu os argumentos dos dois lados e propôs uma solução que respeitou o pântano e o vilarejo.' },
      },
      final_tuli: {
        emoji: '🚪',
        text: 'Linu hüüdis, et loodus on alati tähtsam ja siin polegi midagi arutada. Kadri solvus ja lahkus saalist, ja koosolek lõppes ilma otsuseta. Ants tänas Linut toetuse eest, aga ohkas: “Ilma Kadrita me siin küla asju ei aja.” Linu mõistis, et vaidluses ei piisa sellest, et sul on õigus.',
        translation:
          'O Linu exclamou que a natureza é sempre mais importante e que não havia nada a discutir. A Kadri ficou ofendida e saiu do salão, e a reunião terminou sem decisão. O Ants agradeceu ao Linu pelo apoio, mas suspirou: “Sem a Kadri a gente não resolve as coisas do vilarejo.” O Linu entendeu que, numa discussão, não basta ter razão.',
        ending: { tone: 'neutro', title: 'Razão sem acordo', message: 'O Ants disse “ma ei ole turistide vastu, vastupidi”: ele não era contra ninguém. Ouvir os dois lados teria levado a um acordo.' },
      },
    },
  },
  {
    id: 'et-h36',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Vana laul uues kuues',
    emoji: '🎻',
    summary: 'No festival de música tradicional de Viljandi, o Linu entrevista uma jovem musicista e uma cantora idosa sobre modernizar a canção rúnica e precisa relatar as duas opiniões com fidelidade.',
    cultural_context:
      'O festival de música tradicional de Viljandi acontece todo mês de julho desde 1993, no parque das ruínas do castelo. A regilaul, a antiga canção rúnica estoniana, é cantada em alternância: a puxadora (eeslaulja) canta um verso e o grupo o repete.',
    start: 'start',
    glossary: [
      ['seega', 'portanto'],
      ['pealegi', 'além disso'],
      ['seetõttu', 'por isso'],
      ['küll…, ent', 'é verdade que…, mas'],
      ['kuigi', 'embora'],
      ['ometi', 'ainda assim'],
      ['regilaul', 'canção rúnica, o canto tradicional estoniano'],
      ['eeslaulja', 'puxadora, quem canta o verso primeiro'],
    ],
    nodes: {
      start: {
        emoji: '🎶',
        text: 'Juuli lõpus oli Viljandi täis muusikat, sest lossimägedes toimus pärimusmuusika festival. Linu oli lubanud kirjutada festivali ajalehele artikli teemal “Kas regilaul peab jääma vanaks?”. Ta leppis kokku kaks intervjuud: noore muusiku Mari ja vana laulja Leidaga. Esimesena kohtus ta Mariga telgi taga, kus kõlas tugev elektrooniline rütm.',
        translation:
          'No fim de julho, Viljandi estava cheia de música, porque o festival de música tradicional acontecia nos morros do castelo. O Linu tinha prometido escrever para o jornal do festival um artigo sobre o tema “A canção rúnica precisa continuar antiga?”. Ele marcou duas entrevistas: com a jovem musicista Mari e com a velha cantora Leida. A primeira foi com a Mari, atrás de uma tenda onde tocava uma batida eletrônica forte.',
        choices: [{ text: 'Küsida Marilt, miks ta regilaulu nii teistmoodi esitab.', translation: 'Perguntar à Mari por que ela apresenta a canção rúnica de um jeito tão diferente.', next: 'mari' }],
      },
      mari: {
        emoji: '🎧',
        text: '“Regilaul on alati muutunud,” ütles Mari veendunult. “Iga eeslaulja lisas sellele midagi omast, seega ei ole olemas ühte õiget vana versiooni. Pealegi kuulavad noored minu kontsertidel regilaulu, mida nad muidu ehk kunagi ei kuuleks.” Ta lisas, et just seetõttu kasutabki ta elektroonikat.',
        translation:
          '“A canção rúnica sempre mudou”, disse a Mari, convicta. “Cada puxadora acrescentava algo de seu, portanto não existe uma única versão antiga certa. Além disso, nos meus shows os jovens ouvem canção rúnica, coisa que talvez nunca ouvissem de outro jeito.” Ela acrescentou que é justamente por isso que usa música eletrônica.',
        choices: [
          { text: 'Minna nüüd Leidat intervjueerima.', translation: 'Ir agora entrevistar a Leida.', next: 'leida' },
          {
            text: '“Mari arvab, et regilaul ei tohi kunagi muutuda.”',
            translation: '“A Mari acha que a canção rúnica não pode mudar nunca.”',
            wrong: 'A Mari pensa o contrário: diz que a canção rúnica “on alati muutunud” (sempre mudou), que cada puxadora acrescentava algo e que, “seega” (portanto), não existe uma única versão antiga certa.',
          },
        ],
      },
      leida: {
        emoji: '👵',
        text: 'Leida istus puu all ja jõi teed. “Ma ei ole uute asjade vastu,” ütles ta, “kuid regilaulu mõte ei ole esinemine, vaid koos laulmine. Eeslaulja laulab rea ette ja kõik teised kordavad seda. Kui rahvas ainult kuulab ja keegi kaasa ei laula, siis on see küll ilus muusika, ent mitte enam päris regilaul.”',
        translation:
          'A Leida estava sentada debaixo de uma árvore tomando chá. “Não sou contra coisas novas”, disse ela, “mas o sentido da canção rúnica não é a apresentação, e sim cantar junto. A puxadora canta o verso e todos os outros o repetem. Se o público só escuta e ninguém canta junto, então é, sim, uma música bonita, mas já não é canção rúnica de verdade.”',
        choices: [
          { text: 'Küsida, kas Leida on Mari kontserdil käinud.', translation: 'Perguntar se a Leida já foi a um show da Mari.', next: 'kontsert' },
          {
            text: '“Leida tahab, et kõik uued asjad keelataks ära.”',
            translation: '“A Leida quer que todas as coisas novas sejam proibidas.”',
            wrong: 'A Leida diz logo de início “ma ei ole uute asjade vastu” (não sou contra coisas novas). O ponto dela é outro: a canção rúnica é cantar junto, e não só ouvir. Com “küll… ent” ela admite que é música bonita, mas diz que já não é canção rúnica de verdade.',
          },
        ],
      },
      kontsert: {
        emoji: '🔊',
        text: 'Leida naeris. “Käisin eile, kuigi lapselapsed pidid mind sinna peaaegu vägisi viima,” tunnistas ta. “Muusika oli minu jaoks liiga vali, aga ometi nägin, et noored laulsid kaasa.” Ta jäi mõtlikuks ja lisas, et võib-olla ei olegi vahe nii suur, kui ta arvas.',
        translation:
          'A Leida riu. “Fui ontem, embora os meus netos quase tenham tido que me levar à força”, confessou ela. “A música estava alta demais para mim, mas, ainda assim, vi que os jovens cantavam junto.” Ela ficou pensativa e acrescentou que talvez a diferença nem seja tão grande quanto ela achava.',
        choices: [
          { text: 'Tutvustada Leidat ja Marit teineteisele.', translation: 'Apresentar a Leida e a Mari uma à outra.', next: 'kohtumine' },
          { text: 'Kirjutada artikkel kohe valmis: Leida on uue muusika vastu.', translation: 'Escrever o artigo de uma vez: a Leida é contra a música nova.', next: 'final_vale' },
        ],
      },
      kohtumine: {
        emoji: '🤝',
        text: 'Linu viis Leida Mari telki. Alguses olid mõlemad pisut kidakeelsed, aga peagi hakkasid nad vanade laulude sõnu võrdlema. Selgus, et Leida teadis ühest laulust kolme salmi, mida Mari polnud kunagi kuulnud. “Kas te laulaksite täna õhtul koos?” küsis Linu julgelt.',
        translation:
          'O Linu levou a Leida até a tenda da Mari. No começo as duas estavam meio caladas, mas logo começaram a comparar as letras das canções antigas. Descobriu-se que a Leida sabia três estrofes de uma canção que a Mari nunca tinha ouvido. “Vocês cantariam juntas hoje à noite?”, perguntou o Linu, corajoso.',
        choices: [{ text: 'Oodata nende vastust.', translation: 'Esperar a resposta delas.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Õhtul seisid lossimägede laval kõrvuti noor muusik ja vana laulja. Leida laulis ette, Mari lisas tasase rütmi ja sajad inimesed kordasid iga rida. Linu kirjutas oma artiklisse: “Ühelt poolt tuleb traditsiooni hoida, teiselt poolt elab see ainult siis, kui seda lauldakse.” Artikkel ilmus järgmisel hommikul esilehel.',
        translation:
          'À noite, no palco dos morros do castelo, estavam lado a lado a jovem musicista e a velha cantora. A Leida puxava o canto, a Mari acrescentava uma batida suave, e centenas de pessoas repetiam cada verso. O Linu escreveu no artigo: “Por um lado, é preciso preservar a tradição; por outro, ela só vive quando é cantada.” O artigo saiu na primeira página na manhã seguinte.',
        ending: { tone: 'bom', title: 'Canção antiga, roupa nova', message: 'Você relatou as duas opiniões com fidelidade e ainda juntou as duas cantoras no mesmo palco.' },
      },
      final_vale: {
        emoji: '📰',
        text: 'Linu kirjutas artikli pealkirjaga “Vana laulja on uue muusika vastu”. Järgmisel päeval tuli Leida tema juurde ja ütles pettunult, et ta pole seda kunagi öelnud. Linu luges oma märkmed üle ja nägi, et Leida oli rääkinud hoopis midagi muud. Ta pidi ajalehes avaldama paranduse ja vabanduse.',
        translation:
          'O Linu escreveu um artigo com o título “Velha cantora é contra a música nova”. No dia seguinte, a Leida foi até ele e disse, decepcionada, que nunca tinha dito aquilo. O Linu releu as anotações e viu que a Leida tinha dito algo bem diferente. Ele teve de publicar no jornal uma correção e um pedido de desculpas.',
        ending: { tone: 'neutro', title: 'Manchete errada', message: 'A Leida disse “ma ei ole uute asjade vastu” e, depois, que talvez a diferença não fosse tão grande. Resumir uma opinião exige ouvir até o fim.' },
      },
    },
  },
  // ───────────────────────── C1.1 ─────────────────────────
  {
    id: 'et-h37',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Suitsusaun ja oma keel',
    emoji: '🧖',
    summary: 'Numa fazenda perto de Võru, o Linu toma banho de sauna de fumaça, aprende palavras em võro e descobre que um jeito regional de falar não é um jeito “errado”.',
    cultural_context:
      'O võro é falado no sudeste da Estônia, em torno de Võru; tem harmonia vocálica e escreve a oclusiva glotal com “q”. A tradição da sauna de fumaça da região de Võru entrou em 2014 na lista do Patrimônio Cultural Imaterial da UNESCO. Ali perto fica o Suur Munamägi (318 m), o ponto mais alto dos países bálticos.',
    start: 'start',
    glossary: [
      ['võro keel', 'a língua võro'],
      ['kirjakeel', 'a língua-padrão (escrita)'],
      ['suitsusaun (võro: savvusann)', 'sauna de fumaça'],
      ['om', 'é, está (võro; = on)'],
      ['lats, latsõq', 'criança, crianças (võro; = laps, lapsed)'],
      ['uma', 'próprio, seu (võro; = oma)'],
      ['kõrisulghäälik', 'oclusiva glotal'],
      ['leil', 'o vapor quente da sauna'],
    ],
    nodes: {
      start: {
        emoji: '⛰️',
        text: 'Linu sõitis Võrumaale, kus Haanja kõrgustikul kõrgub Suur Munamägi, Baltimaade kõrgeim tipp. Tema võõrustajad olid vanaema Aino ja tema lapselaps Siim, kes elasid mäe lähedal vanas talus. Juba väravas hõikas Aino midagi, millest Linu hästi aru ei saanud: sõnad kõlasid tuttavalt, aga mitte päris nii nagu Tallinnas. Siim naeris ja selgitas, et vanaema räägib võro keelt, nagu siinkandis vanasti kõik rääkisid.',
        translation:
          'O Linu foi para a região de Võru, onde, no planalto de Haanja, se ergue o Suur Munamägi, o ponto mais alto dos países bálticos. Quem o recebeu foram a avó Aino e o neto dela, Siim, que moravam numa fazenda antiga perto do morro. Já no portão, a Aino gritou alguma coisa que o Linu não entendeu direito: as palavras soavam conhecidas, mas não exatamente como em Tallinn. O Siim riu e explicou que a avó fala võro, como antigamente todo mundo falava por aqui.',
        choices: [
          { text: 'Küsida, mida Aino hõikas.', translation: 'Perguntar o que a Aino gritou.', next: 'saun' },
          {
            text: '“Aino räägib vist soome keelt?”',
            translation: '“A Aino está falando finlandês, é?”',
            wrong: 'Não é finlandês: o Siim explica que a avó fala võro (“võro keelt”), a variedade do sudeste da Estônia, que muitos consideram uma língua regional própria. Por isso as palavras soam conhecidas, mas diferentes das de Tallinn.',
          },
        ],
      },
      saun: {
        emoji: '🪵',
        text: '“Ta ütles, et savvusann om valmis,” tõlkis Siim. “Kirjakeeles oleks see: suitsusaun on valmis.” Ta näitas aia taga väikest tahmunud palkmaja, mille seinapragudest immitses veel pisut suitsu. Siim selgitas, et suitsusaunal pole korstnat: kerist köetakse tunde, suits täidab kogu ruumi ja lastakse enne saunaskäiku välja, seepärast on seinad seest pigimustad.',
        translation:
          '“Ela disse que a sauna de fumaça está pronta”, traduziu o Siim. “Na língua-padrão seria: suitsusaun on valmis.” Ele apontou, atrás da cerca, uma casinha de toras escurecida de fuligem, de cujas frestas ainda escapava um pouco de fumaça. O Siim explicou que a sauna de fumaça não tem chaminé: o fogão de pedras é aquecido por horas, a fumaça enche todo o cômodo e é soltada antes do banho, e por isso as paredes por dentro são pretas como piche.',
        choices: [
          { text: 'Minna koos Siimuga sauna.', translation: 'Ir para a sauna com o Siim.', next: 'leil' },
          { text: 'Keelduda viisakalt, sest suits tundub hirmutav.', translation: 'Recusar educadamente, porque a fumaça parece assustadora.', next: 'final_keeld' },
          {
            text: '“Suitsusaunal on siis eriti kõrge korsten?”',
            translation: '“Então a sauna de fumaça tem uma chaminé bem alta?”',
            wrong: 'Pelo contrário: o Siim disse que a sauna de fumaça não tem chaminé (“pole korstnat”). A fumaça enche o cômodo e é soltada antes do banho; por isso as paredes são pretas por dentro.',
          },
        ],
      },
      leil: {
        emoji: '♨️',
        text: 'Saunas oli hämar ja lõhnas suitsu ja kasevihtade järele. Siim viskas kerisele kulbitäie vett ja pehme, kuum leil paiskus laeni. Ta rääkis, et paljudes Võromaa peredes köetakse suitsusauna ikka veel igal laupäeval ja et see traditsioon on kantud UNESCO vaimse kultuuripärandi nimekirja. “Vanaema ütleb, et saunas peab olema nagu kirikus,” lisas ta sosinal, “ei mingit kära.”',
        translation:
          'Na sauna estava meio escuro e cheirava a fumaça e a feixes de bétula. O Siim jogou uma concha de água no fogão de pedras, e um vapor quente e macio subiu até o teto. Ele contou que muitas famílias da região de Võru ainda acendem a sauna de fumaça todo sábado e que essa tradição foi incluída na lista do patrimônio cultural imaterial da UNESCO. “A vó diz que na sauna tem que ser como na igreja”, acrescentou ele, sussurrando, “nada de barulho.”',
        choices: [{ text: 'Küsida pärast sauna Siimult veel võro sõnu.', translation: 'Depois da sauna, pedir ao Siim mais palavras em võro.', next: 'sonad' }],
      },
      sonad: {
        emoji: '📖',
        text: 'Pärast sauna istusid nad trepil ja Siim õpetas Linule sõnu. “Kirjakeeles on ‘laps’, võro keeles ‘lats’, ja mitmuses ‘latsõq’,” ütles ta. “See q tähistab kõrisulghäälikut, mida kirjakeeles üldse ei ole.” Aino hõikas köögist, et “uma” tähendab “oma” ja et võro keeles ilmub isegi oma ajaleht. Linu kordas hoolikalt: “Lats, latsõq, uma.”',
        translation:
          'Depois da sauna, eles se sentaram na escada e o Siim ensinou palavras ao Linu. “Na língua-padrão é ‘laps’ (criança), em võro é ‘lats’, e no plural ‘latsõq’”, disse ele. “Esse q marca a oclusiva glotal, um som que nem existe na língua-padrão.” Da cozinha, a Aino gritou que “uma” quer dizer “oma” (próprio) e que em võro sai até um jornal próprio. O Linu repetiu com cuidado: “Lats, latsõq, uma.”',
        choices: [
          { text: 'Küsida, kas noored räägivad ka võro keelt.', translation: 'Perguntar se os jovens também falam võro.', next: 'noored' },
          {
            text: '“Q on siis lihtsalt k, mida hääldatakse tugevamalt?”',
            translation: '“Então o q é só um k pronunciado mais forte?”',
            wrong: 'Não: o Siim disse que o “q” marca a oclusiva glotal (“kõrisulghäälik”), um som que nem existe no estoniano-padrão. Não é um “k” mais forte.',
          },
        ],
      },
      noored: {
        emoji: '🧑‍🌾',
        text: 'Siim jäi mõtlikuks. “Minu vanavanemad rääkisid kodus ainult võro keelt, vanemad juba vähem ja mina õppisin seda peamiselt vanaemalt,” ütles ta. “Mõnes koolis saab võro keelt õppida ja sellel keelel on ka uusi laule, mis noortele meeldivad.” Samas tunnistas ta, et vanasti häbenesid mõned oma kodukeelt, sest seda peeti lihtsalt valesti rääkimiseks.',
        translation:
          'O Siim ficou pensativo. “Meus avós só falavam võro em casa, meus pais já falavam menos, e eu aprendi principalmente com a minha avó”, disse ele. “Em algumas escolas dá para estudar võro, e a língua também tem músicas novas que os jovens curtem.” Por outro lado, ele admitiu que antigamente algumas pessoas tinham vergonha da língua de casa, porque ela era vista simplesmente como um jeito errado de falar.',
        choices: [
          { text: 'Paluda Ainol midagi võro keeles laulda.', translation: 'Pedir à Aino que cante alguma coisa em võro.', next: 'laul' },
          { text: 'Öelda, et kirjakeel on ju ilusam ja õigem.', translation: 'Dizer que a língua-padrão é mais bonita e mais correta.', next: 'final_solvang' },
        ],
      },
      laul: {
        emoji: '🎵',
        text: 'Aino tuli trepile, pühkis käed põlle sisse ja hakkas laulma vana laulu, mida ta oli lapsena oma emalt kuulnud. Linu ei saanud igast sõnast aru, aga viis oli nii soe, et ka Siim hakkas vaikselt kaasa ümisema. Laulu lõppedes ütles Aino, seekord kirjakeeles ja aeglaselt, et keel elab seni, kuni seda räägitakse köögis, mitte ainult raamatutes. Siis kutsus ta mõlemad õhtust sööma.',
        translation:
          'A Aino veio até a escada, enxugou as mãos no avental e começou a cantar uma canção antiga que tinha ouvido da mãe quando era criança. O Linu não entendia todas as palavras, mas a melodia era tão calorosa que o Siim também começou a cantarolar baixinho. Quando a canção terminou, a Aino disse, dessa vez na língua-padrão e devagar, que uma língua vive enquanto é falada na cozinha, e não só nos livros. Depois chamou os dois para jantar.',
        choices: [{ text: 'Minna tuppa õhtust sööma.', translation: 'Entrar para jantar.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Laual olid suitsuliha, kartulid ja hapukapsas, ja Aino rääkis kordamööda võro keeles ja kirjakeeles, et Linu kõigest aru saaks. Õhtu lõpus julges Linu ise öelda: “Aitäh, savvusann om hää!” Aino lõi käed kokku ja naeris, kuni pisarad silma tulid. “Nüüd oled sa juba peaaegu võrokene,” ütles Siim.',
        translation:
          'Na mesa havia carne defumada, batatas e chucrute, e a Aino falava ora em võro, ora na língua-padrão, para o Linu entender tudo. No fim da noite, o Linu tomou coragem e disse: “Obrigado, a sauna de fumaça é boa!” (em võro). A Aino bateu palmas e riu até chorar. “Agora você já é quase um võro”, disse o Siim.',
        ending: { tone: 'bom', title: 'Quase um võro', message: 'Você entendeu a diferença entre o võro e a língua-padrão, respeitou a língua da Aino e ainda arriscou uma frase nela.' },
      },
      final_keeld: {
        emoji: '🌙',
        text: 'Linu tänas viisakalt, aga ütles, et suits tundub talle liiga hirmutav. Aino kehitas õlgu ja läks koos Siimuga sauna. Linu istus õhtu otsa verandal ja kuulis, kuidas nad saunas naersid ja võro keeles juttu ajasid. Ta tundis, et oli jäänud ilma millestki tähtsast.',
        translation:
          'O Linu agradeceu educadamente, mas disse que a fumaça lhe parecia assustadora demais. A Aino deu de ombros e foi para a sauna com o Siim. O Linu passou a noite inteira na varanda, ouvindo os dois rirem e conversarem em võro dentro da sauna. Ele sentiu que tinha perdido algo importante.',
        ending: { tone: 'neutro', title: 'Do lado de fora', message: 'A fumaça sai antes do banho: a sauna de fumaça não tem nada de perigoso, e era a porta de entrada para a cultura de Võru.' },
      },
      final_solvang: {
        emoji: '😶',
        text: 'Linu ütles, et kirjakeel on ju ilusam ja õigem. Aino ei vastanud midagi, aga tema nägu muutus tõsiseks ja ta läks tuppa. Siim selgitas vaikselt, et vanaema on terve elu kuulnud, nagu oleks tema keel vähem väärt. Linu palus vabandust, kuid õhtu jäi pisut jahedaks.',
        translation:
          'O Linu disse que a língua-padrão é mais bonita e mais correta. A Aino não respondeu nada, mas o rosto dela ficou sério e ela entrou em casa. O Siim explicou baixinho que a avó ouviu a vida inteira que a língua dela valia menos. O Linu pediu desculpas, mas a noite ficou meio fria.',
        ending: { tone: 'neutro', title: 'Palavra que fere', message: 'O Siim tinha contado que o võro já foi visto como “falar errado”. Uma variedade regional não é um erro: é outra forma, com história própria.' },
      },
    },
  },
  {
    id: 'et-h38',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Hallitus ja valitsus',
    emoji: '⛴️',
    summary: 'A caminho de Saaremaa, o Linu viaja com um casal finlandês e descobre os falsos amigos entre o estoniano e o finlandês — alguns engraçados, outros capazes de estragar uma noite.',
    cultural_context:
      'O estoniano e o finlandês são línguas fínicas aparentadas, com muitas palavras parecidas e vários falsos amigos: “hallitus” quer dizer “governo” em finlandês e “mofo” em estoniano. Em Saaremaa ficam o castelo episcopal de Kuressaare, o castelo medieval mais bem conservado da Estônia, e a cratera de meteorito de Kaali.',
    start: 'start',
    glossary: [
      ['hallitus', 'mofo (em finlandês: governo)'],
      ['valitsus', 'governo'],
      ['pull', 'touro (em finlandês “pulla”: pãozinho doce)'],
      ['halb', 'ruim (em finlandês “halpa”: barato)'],
      ['linn', 'cidade (em finlandês “linna”: castelo)'],
      ['linnus', 'fortaleza'],
      ['sugulaskeel', 'língua aparentada'],
      ['saare murre', 'o dialeto das ilhas'],
    ],
    nodes: {
      start: {
        emoji: '🌊',
        text: 'Virtsu sadamas sõitis Linu praamile, mis viis Muhu saarele, kust tee jätkus tammi kaudu Saaremaale. Praami kohvikus istusid tema kõrval soomlased Jukka ja Satu, kes rääkisid omavahel soome keelt. Linu märkas, et saab nende jutust umbes poolest aru, sest paljud sõnad olid peaaegu samad mis eesti keeles. Satu naeratas ja ütles aeglaselt eesti keeles: “Me saame eesti keelest natuke aru, aga vahel eksime väga naljakalt.”',
        translation:
          'No porto de Virtsu, o Linu embarcou na balsa para a ilha de Muhu, de onde a estrada seguia por um aterro até Saaremaa. No café da balsa, sentados ao lado dele, estavam os finlandeses Jukka e Satu, que conversavam em finlandês. O Linu percebeu que entendia mais ou menos metade da conversa, porque muitas palavras eram quase iguais às do estoniano. A Satu sorriu e disse devagar, em estoniano: “A gente entende um pouco de estoniano, mas às vezes erra de um jeito muito engraçado.”',
        choices: [
          { text: 'Küsida, milliseid naljakaid eksimusi neil on olnud.', translation: 'Perguntar que erros engraçados eles já cometeram.', next: 'pagar' },
          {
            text: '“Soome keel on siis eesti keele murre?”',
            translation: '“Então o finlandês é um dialeto do estoniano?”',
            wrong: 'Não: o texto diz que eles falavam “soome keelt”, finlandês, uma língua própria. O Linu entende metade porque as duas línguas são parentes próximas e têm muitas palavras quase iguais, mas não são a mesma língua.',
          },
        ],
      },
      pagar: {
        emoji: '🥐',
        text: '“Eile küsisin Tallinnas pagariärist pullat,” jutustas Satu. “Soome keeles on ‘pulla’ magus kukkel, aga müüja vaatas mind nii, nagu oleksin tellinud terve härja.” Jukka lisas naerdes, et eesti keeles tähendab “pull” hoopis isast veist. Linu naeris kaasa ja mõtles, et sugulaskeeled on nagu kaksikud, kes riietuvad peaaegu ühtmoodi, aga mitte päris.',
        translation:
          '“Ontem, em Tallinn, pedi uma ‘pulla’ numa padaria”, contou a Satu. “Em finlandês, ‘pulla’ é um pãozinho doce, mas a vendedora me olhou como se eu tivesse encomendado um boi inteiro.” O Jukka acrescentou, rindo, que em estoniano “pull” quer dizer touro. O Linu riu junto e pensou que línguas aparentadas são como gêmeos que se vestem quase igual, mas não exatamente.',
        choices: [
          { text: 'Küsida, kas neil on veel selliseid lugusid.', translation: 'Perguntar se eles têm mais histórias assim.', next: 'halb' },
          {
            text: '“Nii et eesti keeles on ‘pull’ magus kukkel?”',
            translation: '“Então em estoniano ‘pull’ é um pãozinho doce?”',
            wrong: 'É o contrário: em finlandês “pulla” é pãozinho doce; em estoniano “pull” é touro (“isane veis”). Por isso a vendedora estranhou o pedido da Satu.',
          },
        ],
      },
      halb: {
        emoji: '🐟',
        text: 'Jukka noogutas innukalt. “Soome keeles tähendab ‘halpa’ odavat. Kui ma turul ütlesin, et need kalad on halvad, tahtsin ma neid tegelikult kiita!” Satu raputas pead: müüja oli solvunud ega tahtnud neile üldse kala müüa. Samal ajal hakkas praam juba Kuivastu sadamale lähenema.',
        translation:
          'O Jukka concordou com entusiasmo. “Em finlandês, ‘halpa’ quer dizer barato. Quando eu disse na feira que aqueles peixes eram ‘halvad’, na verdade eu queria elogiá-los!” A Satu balançou a cabeça: o vendedor ficou ofendido e não quis vender peixe nenhum para eles. Enquanto isso, a balsa já começava a se aproximar do porto de Kuivastu.',
        choices: [{ text: 'Sõita koos soomlastega edasi Kuressaarde.', translation: 'Seguir com os finlandeses até Kuressaare.', next: 'kuressaare' }],
      },
      kuressaare: {
        emoji: '🏰',
        text: 'Kuressaares viis tee nad piiskopilinnuse juurde, mis on Eesti kõige paremini säilinud keskaegne linnus. “Soome keeles on ‘linna’ loss või kindlus,” ütles Jukka, “aga eesti keeles on ‘linn’ koht, kus inimesed elavad.” Linu selgitas, et kindluse kohta öeldakse eesti keeles “linnus”, ja see sõna näib olevat sama päritoluga. Satu kirjutas selle hoolikalt oma märkmikku.',
        translation:
          'Em Kuressaare, o caminho os levou ao castelo episcopal, a fortaleza medieval mais bem conservada da Estônia. “Em finlandês, ‘linna’ é castelo ou fortaleza”, disse o Jukka, “mas em estoniano ‘linn’ é o lugar onde as pessoas moram, a cidade.” O Linu explicou que, para fortaleza, o estoniano diz “linnus”, e que essa palavra parece ter a mesma origem. A Satu anotou isso com cuidado no caderninho.',
        choices: [
          { text: 'Minna nendega külalistemajja.', translation: 'Ir com eles para a pousada.', next: 'majutus' },
          {
            text: '“Järelikult on soome ‘linna’ sama mis eesti ‘linn’: koht, kus inimesed elavad.”',
            translation: '“Então o ‘linna’ finlandês é o mesmo que o ‘linn’ estoniano: o lugar onde as pessoas moram.”',
            wrong: 'Não: o Jukka disse que em finlandês “linna” é castelo ou fortaleza. O lugar onde as pessoas moram, a cidade, é “linn” em estoniano. Para fortaleza, o estoniano tem “linnus”.',
          },
        ],
      },
      majutus: {
        emoji: '🏡',
        text: 'Külalistemaja perenaine Reet rääkis mõnusa saare murdega ja võttis nad lahkelt vastu. “Vannitoas oli kevadel natuke hallitust, aga nüüd on see ära koristatud,” ütles ta. Jukka purskas naerma ja küsis soome keeles, kas vannitoas istus tõesti terve valitsus. Reet kortsutas kulmu, sest ta ei saanud naljast aru ja arvas, et külaline naerab tema maja üle.',
        translation:
          'A dona da pousada, Reet, falava com um gostoso sotaque das ilhas e os recebeu com simpatia. “Na primavera apareceu um pouco de mofo no banheiro, mas agora já foi limpo”, disse ela. O Jukka caiu na gargalhada e perguntou em finlandês se havia mesmo um governo inteiro sentado no banheiro. A Reet franziu a testa, porque não entendeu a piada e achou que o hóspede estava rindo da casa dela.',
        choices: [
          { text: 'Selgitada Reedale, et soome keeles tähendab “hallitus” valitsust.', translation: 'Explicar à Reet que em finlandês “hallitus” quer dizer governo.', next: 'selgitus' },
          { text: 'Jätta asi sinnapaika ja minna oma tuppa.', translation: 'Deixar para lá e ir para o quarto.', next: 'final_segadus' },
        ],
      },
      selgitus: {
        emoji: '😂',
        text: 'Kui Linu selgitas, et soome “hallitus” on eesti keeles “valitsus”, hakkas ka Reet naerma. “Noh, eks valitsusega ole mõnikord sama palju tüli kui hallitusega,” ütles ta vallatult. Siis rääkis ta, et tema vanaisa ei hääldanud õ-d üldse, sest vanas saare murdes seda häälikut ei olnudki. “Saarlased on alati arvanud, et nemad räägivad kõige ilusamat eesti keelt,” lisas ta silma pilgutades.',
        translation:
          'Quando o Linu explicou que o “hallitus” finlandês é “valitsus” (governo) em estoniano, a Reet também começou a rir. “Bom, com o governo às vezes dá tanta dor de cabeça quanto com o mofo”, disse ela, marota. Depois contou que o avô dela nem pronunciava o õ, porque esse som não existia no velho dialeto das ilhas. “Os ilhéus sempre acharam que são eles que falam o estoniano mais bonito”, acrescentou, piscando o olho.',
        choices: [{ text: 'Minna järgmisel päeval koos Kaali kraatrit vaatama.', translation: 'No dia seguinte, ir juntos ver a cratera de Kaali.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '☄️',
        text: 'Järgmisel hommikul seisid nad Kaali kraatri serval, mille oli tuhandeid aastaid tagasi tekitanud meteoriit. Satu luges eestikeelset infotahvlit ja tõlkis selle Jukkale, kes kuulas imestunult. “Kaks keelt, aga üks perekond,” ütles Jukka lõpuks. Linu mõtles, et sugulastega on tore, eriti siis, kui oskad nende üle koos naerda.',
        translation:
          'Na manhã seguinte, eles estavam na borda da cratera de Kaali, formada milhares de anos atrás por um meteorito. A Satu leu a placa informativa em estoniano e traduziu para o Jukka, que ouvia admirado. “Duas línguas, mas uma família só”, disse o Jukka por fim. O Linu pensou que é bom ter parentes, principalmente quando se consegue rir junto deles.',
        ending: { tone: 'bom', title: 'Uma família, duas línguas', message: 'Você desfez o mal-entendido do “hallitus” e aprendeu que falsos amigos entre línguas-irmãs rendem boas risadas, se alguém explica a tempo.' },
      },
      final_segadus: {
        emoji: '🥶',
        text: 'Linu otsustas, et see pole tema asi, ja läks oma tuppa. Õhtusöögil oli Reet Jukka vastu jahe ja rääkis ainult Satuga. Jukka arvas, et perenaine on lihtsalt tusane, ja Reet arvas, et soomlane naeris tema maja üle. Üks väike sõna oli rikkunud terve õhtu.',
        translation:
          'O Linu decidiu que aquilo não era problema dele e foi para o quarto. No jantar, a Reet estava fria com o Jukka e só conversava com a Satu. O Jukka achou que a dona da pousada era simplesmente mal-humorada, e a Reet achou que o finlandês tinha rido da casa dela. Uma palavrinha tinha estragado a noite inteira.',
        ending: { tone: 'neutro', title: 'Mofo no clima', message: 'O Jukka riu porque “hallitus” é governo em finlandês; a Reet falava de mofo. Uma explicação teria salvado a noite.' },
      },
    },
  },
  {
    id: 'et-h39',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Kahe kalda vahel',
    emoji: '🌉',
    summary: 'Em Narva, na fronteira leste, o Linu é voluntário num café de conversação onde falantes de russo praticam estoniano e aprende que coragem vale mais que perfeição.',
    cultural_context:
      'Narva fica na fronteira leste da Estônia, à beira do rio Narva: o castelo de Hermann, do lado estoniano, fica de frente para a fortaleza de Ivangorod, na Rússia. A maioria dos moradores da cidade tem o russo como língua materna. Algumas palavras estonianas vêm do russo antigo, como “raamat” (livro) e “turg” (mercado).',
    start: 'start',
    glossary: [
      ['kodukeel', 'língua de casa, língua materna'],
      ['keelekohvik', 'café de conversação'],
      ['laensõna', 'empréstimo, palavra emprestada'],
      ['sugu', 'gênero (gramatical)'],
      ['segamini', 'misturado'],
      ['vabatahtlik', 'voluntário'],
      ['raamat', 'livro (do russo antigo, “carta, documento”)'],
      ['julgus', 'coragem'],
    ],
    nodes: {
      start: {
        emoji: '🏰',
        text: 'Narvas, kus jõe teiselt kaldalt paistab Ivangorodi kindlus, osales Linu vabatahtlikuna keelekohvikus. Sinna tulid inimesed, kelle kodukeel oli vene keel ja kes tahtsid eesti keelt rohkem rääkida. Kohvikut juhatas õpetaja Kristiina, kes ütles, et siin ei parandata kedagi iga sõna pealt. “Tähtis on julgus,” selgitas ta, “vead parandame hiljem ja sõbralikult.”',
        translation:
          'Em Narva, onde da outra margem do rio se avista a fortaleza de Ivangorod, o Linu participava como voluntário de um café de conversação. Iam lá pessoas cuja língua materna era o russo e que queriam falar mais estoniano. Quem coordenava o café era a professora Kristiina, que disse que ali ninguém era corrigido a cada palavra. “O importante é a coragem”, explicou ela, “os erros a gente corrige depois, com gentileza.”',
        choices: [
          { text: 'Istuda lauda, kus istub eakas proua.', translation: 'Sentar-se à mesa onde está uma senhora idosa.', next: 'olga' },
          {
            text: '“Nii et siin parandatakse iga viga kohe?”',
            translation: '“Então aqui cada erro é corrigido na hora?”',
            wrong: 'A Kristiina disse o contrário: “siin ei parandata kedagi iga sõna pealt” (aqui ninguém é corrigido a cada palavra). O importante é a coragem; os erros se corrigem depois, com gentileza.',
          },
        ],
      },
      olga: {
        emoji: '👵',
        text: 'Eakas proua tutvustas end Olgana. Ta rääkis aeglaselt ja mõtles iga käändelõpu üle: “Ma elan Narvas juba viiskümmend aastat, aga eesti keelt hakkasin õppima alles pensionil.” Kõige raskemaks pidas ta õ-d ja seda, et eesti keeles pole grammatilist sugu. “Vene keeles on laud meessoost ja raamat naissoost, aga eesti keeles on mees ja naine mõlemad lihtsalt ‘tema’,” ütles ta ja naeris.',
        translation:
          'A senhora se apresentou como Olga. Ela falava devagar e pensava em cada terminação de caso: “Moro em Narva há cinquenta anos, mas só comecei a aprender estoniano depois de aposentada.” O mais difícil, para ela, era o õ e o fato de o estoniano não ter gênero gramatical. “Em russo, ‘mesa’ é masculino e ‘livro’ é feminino, mas em estoniano homem e mulher são os dois simplesmente ‘tema’”, disse ela, rindo.',
        choices: [
          { text: 'Rääkida Olgale sõnadest, mis on eesti keelde tulnud vene keelest.', translation: 'Contar à Olga sobre palavras que entraram no estoniano vindas do russo.', next: 'laenud' },
          { text: 'Parandada kohe Olga iga väikest viga.', translation: 'Corrigir na hora cada errinho da Olga.', next: 'final_parandus' },
        ],
      },
      laenud: {
        emoji: '📚',
        text: '“Tead, Olga, mõned eesti sõnad on sulle tegelikult juba tuttavad,” ütles Linu. “Näiteks ‘raamat’ on tulnud vanast vene sõnast, mis tähendas kirja või dokumenti, ja ka ‘turg’ on pärit vene keelest.” Olga silmad läksid suureks ja ta kordas mõlemat sõna mitu korda. “Nii et ma olen eesti keelt juba ammu rääkinud, ise seda teadmata!” hüüdis ta rõõmsalt.',
        translation:
          '“Sabe, Olga, algumas palavras estonianas na verdade você já conhece”, disse o Linu. “Por exemplo, ‘raamat’ (livro) veio de uma palavra russa antiga que queria dizer carta ou documento, e ‘turg’ (mercado) também vem do russo.” Os olhos da Olga se arregalaram e ela repetiu as duas palavras várias vezes. “Então eu falo estoniano há muito tempo sem saber!”, exclamou ela, contente.',
        choices: [
          { text: 'Tutvustada Olgat noormehele, kes istub kõrvallauas.', translation: 'Apresentar a Olga ao rapaz da mesa ao lado.', next: 'artjom' },
          {
            text: '“Järelikult tähendab ‘raamat’ eesti keeles kirja.”',
            translation: '“Consequentemente, ‘raamat’ quer dizer carta em estoniano.”',
            wrong: 'Não: “carta ou documento” era o sentido da palavra russa antiga de onde “raamat” veio (“vanast vene sõnast”). Em estoniano, “raamat” é simplesmente livro.',
          },
        ],
      },
      artjom: {
        emoji: '🧑‍🎓',
        text: 'Kõrvallauas istus tudeng Artjom, kes õppis Narva kolledžis ja rääkis eesti keelt peaaegu aktsendita. Ta ütles, et kodus räägib ta vanaemaga vene keelt, sõpradega tihti mõlemat segamini ja ülikoolis eesti keelt. “Mõnikord alustan lauset eesti keeles ja lõpetan vene keeles, ise seda märkamata,” tunnistas ta. Olga kuulas teda imetlusega ja küsis, kuidas ta nii hästi õppis.',
        translation:
          'Na mesa ao lado estava o estudante Artjom, que fazia faculdade no colégio universitário de Narva e falava estoniano quase sem sotaque. Ele contou que em casa fala russo com a avó, com os amigos muitas vezes mistura as duas línguas, e na universidade fala estoniano. “Às vezes começo uma frase em estoniano e termino em russo, sem nem perceber”, confessou ele. A Olga ouvia com admiração e perguntou como ele tinha aprendido tão bem.',
        choices: [
          { text: 'Kuulata, mida Artjom Olgale soovitab.', translation: 'Ouvir o que o Artjom recomenda à Olga.', next: 'soovitus' },
          {
            text: '“Artjom räägib igal pool ainult eesti keelt.”',
            translation: '“O Artjom só fala estoniano em todo lugar.”',
            wrong: 'Não: o Artjom disse que fala russo em casa com a avó, mistura as duas línguas com os amigos (“mõlemat segamini”) e usa o estoniano na universidade. Ele até troca de língua no meio da frase.',
          },
        ],
      },
      soovitus: {
        emoji: '🏀',
        text: '“Kõige rohkem aitas mind see, et mängisin korvpalli eestikeelses võistkonnas,” ütles Artjom. “Seal polnud aega grammatikat karta, tuli lihtsalt palli küsida.” Kristiina noogutas ja lisas, et keel jääb kõige paremini meelde siis, kui seda on päriselt vaja. Olga mõtles hetke ja ütles, et tema võiks hakata käima eestikeelses kooris.',
        translation:
          '“O que mais me ajudou foi jogar basquete num time que falava estoniano”, disse o Artjom. “Lá não dava tempo de ter medo da gramática, era só pedir a bola.” A Kristiina concordou e acrescentou que uma língua fica melhor na memória quando se precisa dela de verdade. A Olga pensou um instante e disse que podia começar a frequentar um coral em estoniano.',
        choices: [{ text: 'Toetada Olga mõtet ja uurida, kus koor harjutab.', translation: 'Apoiar a ideia da Olga e descobrir onde o coral ensaia.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Kristiina teadis üht koori, mis harjutas igal neljapäeval kultuurimajas, ja Linu lubas Olgaga esimesse proovi kaasa minna. Nädal hiljem seisis Olga koori tagumises reas ja laulis rahvalaulu, hääldades õ-d peaaegu täiuslikult. Pärast proovi jalutasid nad jõe äärde, kus kaks kindlust vaatasid teineteisele otsa nagu vanad naabrid. “Keel on nagu sild,” ütles Olga, “ja mina olen nüüd sellel sillal.”',
        translation:
          'A Kristiina conhecia um coral que ensaiava toda quinta-feira na casa de cultura, e o Linu prometeu ir com a Olga ao primeiro ensaio. Uma semana depois, a Olga estava na última fileira do coral cantando uma canção popular, pronunciando o õ quase perfeitamente. Depois do ensaio, eles caminharam até a beira do rio, onde as duas fortalezas se encaravam como velhas vizinhas. “A língua é como uma ponte”, disse a Olga, “e agora eu estou em cima dela.”',
        ending: { tone: 'bom', title: 'Em cima da ponte', message: 'Você valorizou a coragem da Olga, mostrou que o estoniano e o russo têm história em comum e a ajudou a achar um lugar para usar a língua.' },
      },
      final_parandus: {
        emoji: '🤐',
        text: 'Linu parandas Olga iga käändelõppu ja iga õ-d, kuni Olga jäi täiesti vait. Lõpuks ütles ta vene keeles vabandavalt midagi ja läks varem koju. Kristiina ohkas ja meenutas Linule, et keelekohvikus on julgus tähtsam kui täpsus. Järgmisel nädalal Olga ei tulnud, ja Linu lootis väga, et ta veel tagasi tuleb.',
        translation:
          'O Linu corrigiu cada terminação de caso e cada õ da Olga, até ela ficar completamente calada. No fim, ela disse alguma coisa em russo, se desculpando, e foi embora mais cedo. A Kristiina suspirou e lembrou ao Linu que, no café de conversação, a coragem é mais importante que a precisão. Na semana seguinte a Olga não apareceu, e o Linu torceu muito para que ela voltasse.',
        ending: { tone: 'neutro', title: 'Correção demais', message: 'A Kristiina avisou logo no começo: ali não se corrige cada palavra. Quem está começando precisa primeiro de coragem.' },
      },
    },
  },
  // ───────────────────────── C1.2 ─────────────────────────
  {
    id: 'et-h40',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Viies aastaaeg ja keel',
    emoji: '🛶',
    summary: 'Na cheia de primavera de Soomaa, o Linu navega numa canoa escavada, aprende como se formam as turfeiras e por que um pântano molhado é um dos grandes depósitos de carbono do planeta.',
    cultural_context:
      'Soomaa, no sudoeste da Estônia, é famosa pela “quinta estação”: na primavera, a água do degelo inunda prados, florestas e estradas, e os moradores passam a se deslocar de barco. O haabjas, canoa tradicional escavada num só tronco de álamo-tremedor, é típico da região.',
    start: 'start',
    glossary: [
      ['suurvesi', 'cheia (de primavera)'],
      ['valgala', 'bacia de drenagem'],
      ['sademed', 'precipitação (chuva e neve)'],
      ['põhjavesi', 'água subterrânea, lençol freático'],
      ['turvas', 'turfa'],
      ['turbasammal', 'esfagno, musgo de turfeira'],
      ['süsinik', 'carbono'],
      ['kuivendama', 'drenar, secar (um terreno)'],
    ],
    nodes: {
      start: {
        emoji: '🌊',
        text: 'Aprillis, kui lumi sulas, sõitis Linu Soomaale, kus kevadist suurvett nimetatakse viiendaks aastaajaks. Jõed olid üle kallaste tõusnud ja talu juurde sai maanteelt ainult paadiga. Teda ootas loodusgiid Margus, kelle kõrval kaldal lebas pikk ja kitsas ühepuupaat. “See on haabjas,” ütles Margus, “nimi tuleb haavast, sest traditsiooniliselt õõnestatakse see ühest haavatüvest.”',
        translation:
          'Em abril, quando a neve derretia, o Linu foi para Soomaa, onde a cheia de primavera é chamada de quinta estação. Os rios tinham transbordado, e da estrada até a fazenda só se chegava de barco. Quem o esperava era o guia de natureza Margus, e ao lado dele, na margem, estava uma canoa comprida e estreita, feita de um tronco só. “Isto é um haabjas”, disse o Margus, “o nome vem de ‘haab’, o álamo-tremedor, porque por tradição ele é escavado num único tronco dessa árvore.”',
        choices: [
          { text: 'Istuda haabjasse ja lasta Margusel rääkida.', translation: 'Sentar no haabjas e deixar o Margus contar.', next: 'jogi' },
          {
            text: '“Haabjas on siis mitmest lauast kokku pandud?”',
            translation: '“Então o haabjas é montado com várias tábuas?”',
            wrong: 'Não: o Margus disse que o haabjas, por tradição, é escavado num único tronco de álamo-tremedor (“ühest haavatüvest”); o nome vem justamente de “haab”. É uma canoa de tronco só.',
          },
        ],
      },
      jogi: {
        emoji: '🌾',
        text: 'Nad sõudsid üle üleujutatud heinamaa, kus vee alt paistsid ainult põõsaste ladvad. Margus selgitas, et suurvesi tekib siis, kui lumesulamisvesi ja kevadvihmad jõuavad korraga madalale tasandikule, kust vesi ei jõua kiiresti ära voolata. “Jõgede valgala on suur, aga maastik on nii lame, et vesi valgub lihtsalt laiali,” ütles ta. Mõnel kevadel tõuseb vesi nii kõrgele, et kohalikud käivad naabritel külas ainult paadiga.',
        translation:
          'Eles remaram por cima de um prado alagado, onde só as pontas dos arbustos apareciam fora da água. O Margus explicou que a cheia acontece quando a água do degelo e as chuvas de primavera chegam ao mesmo tempo a uma planície baixa, de onde a água não consegue escoar depressa. “A bacia dos rios é grande, mas o terreno é tão plano que a água simplesmente se espalha”, disse ele. Em algumas primaveras a água sobe tanto que os moradores só visitam os vizinhos de barco.',
        choices: [
          { text: 'Küsida, miks rabad vett nii hästi hoiavad.', translation: 'Perguntar por que os pântanos retêm tão bem a água.', next: 'raba' },
          {
            text: '“Suurvesi tekib siis sellest, et meri tungib sisemaale.”',
            translation: '“Então a cheia vem do mar avançando para o interior.”',
            wrong: 'Não é o mar: o Margus explicou que a cheia vem da água do degelo e das chuvas de primavera (“lumesulamisvesi ja kevadvihmad”), que chegam juntas a uma planície baixa e plana, de onde não conseguem escoar rápido.',
          },
        ],
      },
      raba: {
        emoji: '🌿',
        text: 'Nad jõudsid rabasaarele ja jätkasid jalgsi mööda laudteed. “Raba saab vett ainult sademetest, mitte põhjaveest, seepärast on see väga toitainevaene,” rääkis Margus. “Turbasammal suudab siduda mitu korda rohkem vett, kui ta ise kaalub, ja surnud sammal muutub aeglaselt turbaks, umbes millimeeter aastas.” Linu vaatas punakat samblavaipa ja arvutas, et meetripaksuse turbakihi tekkimiseks kulub ligi tuhat aastat.',
        translation:
          'Eles chegaram a uma ilha de terra firme no meio do pântano e seguiram a pé pela passarela de madeira. “O pântano elevado recebe água só da precipitação, não do lençol freático, por isso é muito pobre em nutrientes”, contou o Margus. “O esfagno consegue reter várias vezes o próprio peso em água, e o musgo morto vai virando turfa devagar, mais ou menos um milímetro por ano.” O Linu olhou o tapete avermelhado de musgo e calculou que, para formar uma camada de turfa de um metro, são precisos quase mil anos.',
        choices: [
          { text: 'Minna edasi vaatetorni juurde, kus keegi midagi mõõdab.', translation: 'Seguir até a torre de observação, onde alguém está medindo alguma coisa.', next: 'teadlane' },
          {
            text: '“Järelikult kasvab turbakiht meetri võrra umbes kümne aastaga.”',
            translation: '“Consequentemente, a camada de turfa cresce um metro em uns dez anos.”',
            wrong: 'A conta não fecha: a turfa cresce cerca de um milímetro por ano (“umbes millimeeter aastas”). Uma camada de um metro leva perto de mil anos, e não dez.',
          },
        ],
      },
      teadlane: {
        emoji: '📡',
        text: 'Vaatetorni juures seisis noor teadlane Kaisa, kes luges väikeselt mõõteseadmelt andmeid. Ta selgitas, et jälgib raba veetaset, sest sellest sõltub, kas raba seob süsinikku või eraldab seda. “Kui raba kuivendada, pääseb õhk turba juurde ja turvas hakkab lagunema, nii et aastatuhandete jooksul talletunud süsinik jõuab süsihappegaasina atmosfääri,” ütles ta. “Märg raba on seevastu üks tõhusamaid looduslikke süsinikuhoidlaid.”',
        translation:
          'Perto da torre de observação estava uma jovem cientista, Kaisa, lendo dados num pequeno aparelho de medição. Ela explicou que acompanha o nível da água do pântano, porque é disso que depende se o pântano captura carbono ou o libera. “Se o pântano for drenado, o ar chega à turfa e ela começa a se decompor, e o carbono acumulado ao longo de milênios vai para a atmosfera como dióxido de carbono”, disse ela. “Já um pântano molhado é um dos depósitos naturais de carbono mais eficientes.”',
        choices: [
          { text: 'Küsida, kas kuivendatud rabasid saab taastada.', translation: 'Perguntar se dá para recuperar pântanos drenados.', next: 'taastamine' },
          { text: 'Küsida, kas turvast ei võiks siis rohkem kaevandada, kui seda on nii palju.', translation: 'Perguntar se não daria para extrair mais turfa, já que há tanta.', next: 'kaevandus' },
          { text: 'Astuda laudteelt kõrvale, et samblavaipa lähemalt katsuda.', translation: 'Sair da passarela para tocar o tapete de musgo de perto.', next: 'final_samm' },
        ],
      },
      kaevandus: {
        emoji: '⛏️',
        text: 'Kaisa naeratas kannatlikult. “Eestis on turvast tõesti kaevandatud ja kaevandatakse praegugi, peamiselt aianduse tarbeks,” ütles ta. “Aga turbakiht tekib tuhandeid aastaid ja kaevandamisel vabaneb süsinik kiiresti, nii et inimese elu mõõtkavas ei ole see taastuv ressurss.” Linu mõtles vastuse üle ja küsis siis, kas kuivendatud rabasid saab üldse taastada.',
        translation:
          'A Kaisa sorriu com paciência. “Na Estônia a turfa foi mesmo extraída e ainda é, principalmente para jardinagem”, disse ela. “Mas a camada de turfa leva milhares de anos para se formar, e na extração o carbono é liberado rápido; na escala de uma vida humana, não é um recurso renovável.” O Linu pensou na resposta e depois perguntou se dava para recuperar pântanos drenados.',
        choices: [{ text: 'Kuulata Kaisa vastust.', translation: 'Ouvir a resposta da Kaisa.', next: 'taastamine' }],
      },
      taastamine: {
        emoji: '🧱',
        text: '“Saab küll, kuigi see on aeglane,” vastas Kaisa. “Kuivenduskraavid suletakse tammidega, et veetase uuesti tõuseks, ja siis hakkab turbasammal tasapisi tagasi tulema.” Ta näitas kaardil alasid, kus seda oli juba tehtud, ja tunnistas, et tulemusi näeb alles aastakümnete pärast. Margus lisas muiates, et loodus on kannatlik, inimesed aga tavaliselt mitte.',
        translation:
          '“Dá, sim, embora seja lento”, respondeu a Kaisa. “As valas de drenagem são fechadas com pequenas barragens para o nível da água voltar a subir, e aí o esfagno começa a voltar aos poucos.” Ela mostrou no mapa áreas onde isso já tinha sido feito e admitiu que os resultados só aparecem depois de décadas. O Margus acrescentou, sorrindo, que a natureza é paciente, mas as pessoas geralmente não.',
        choices: [{ text: 'Sõuda õhtul koos Margusega tagasi.', translation: 'À tarde, remar de volta com o Margus.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🌅',
        text: 'Õhtul sõudsid nad vaikses videvikus tagasi ja vesi peegeldas puid nagu tume klaas. Margus ütles, et viies aastaaeg on Soomaa süda: üleujutus ei ole õnnetus, vaid osa sellest, kuidas see maastik elab. Linu kirjutas märkmikku uued sõnad: valgala, turvas, süsinikuhoidla. Ta mõtles, et saab nüüd aru, miks raba on korraga nii vaikne ja nii tähtis.',
        translation:
          'À tardinha, eles remaram de volta no crepúsculo silencioso, e a água refletia as árvores como um vidro escuro. O Margus disse que a quinta estação é o coração de Soomaa: a cheia não é uma catástrofe, e sim parte de como essa paisagem vive. O Linu anotou no caderno as palavras novas: bacia de drenagem, turfa, depósito de carbono. Ele pensou que agora entendia por que o pântano é, ao mesmo tempo, tão silencioso e tão importante.',
        ending: { tone: 'bom', title: 'O coração de Soomaa', message: 'Você acompanhou a explicação da cheia, da formação da turfa e do carbono, e fez as perguntas certas.' },
      },
      final_samm: {
        emoji: '👣',
        text: 'Linu astus laudteelt kõrvale ja vajus kohe põlvini märga samblasse. Kaisa ja Margus aitasid ta välja, aga tema jäljed jäid samblavaipa selgelt näha. “Rabas taastub sammal väga aeglaselt,” ütles Kaisa tõsiselt, “üks samm võib jääda näha veel pikaks ajaks.” Linu tundis end süüdi ja püsis ülejäänud tee laudteel.',
        translation:
          'O Linu saiu da passarela e afundou na hora até os joelhos no musgo encharcado. A Kaisa e o Margus o puxaram para fora, mas as pegadas dele ficaram bem visíveis no tapete de musgo. “No pântano o musgo se recupera muito devagar”, disse a Kaisa, séria, “uma pisada pode continuar visível por muito tempo.” O Linu se sentiu culpado e ficou na passarela o resto do caminho.',
        ending: { tone: 'neutro', title: 'Pegada no musgo', message: 'A turfa cresce cerca de um milímetro por ano: no pântano, tudo se recupera devagar. Por isso as passarelas existem.' },
      },
    },
  },
  {
    id: 'et-h41',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Kõpu tuli',
    emoji: '🗼',
    summary: 'No farol de Kõpu, em Hiiumaa, o Linu assiste a uma aula de um velho faroleiro sobre a história e a técnica dos faróis e descobre para que serve o ritmo de cada luz.',
    cultural_context:
      'O farol de Kõpu, na ilha de Hiiumaa, ficou pronto no começo do século XVI e é um dos faróis mais antigos do mundo ainda em funcionamento. Foi erguido para alertar os navios sobre o perigoso baixio de Hiiu (Hiiu madal).',
    start: 'start',
    glossary: [
      ['tuletorn', 'farol'],
      ['majakavaht', 'faroleiro'],
      ['madal', 'baixio (no mar)'],
      ['paekivi', 'calcário'],
      ['tugipiilar', 'contraforte'],
      ['lääts', 'lente'],
      ['tule karakteristik', 'característica da luz (o ritmo do farol)'],
      ['nähtavus', 'visibilidade'],
    ],
    nodes: {
      start: {
        emoji: '🏝️',
        text: 'Hiiumaa läänetipus, Kõpu poolsaarel, seisab kõrgel künkal jässakas valge torn. Linu tuli sinna tuletornide ajaloo loengule, mida pidas vana meremees ja endine majakavaht Ülo. “Kõpu tuletorn valmis kuueteistkümnenda sajandi alguses ja on üks maailma vanimaid siiani töötavaid tuletorne,” alustas Ülo. “Selle ehitamist nõudsid Hansa kaupmehed, sest Hiiu madalal oli hukkunud liiga palju laevu.”',
        translation:
          'Na ponta oeste de Hiiumaa, na península de Kõpu, ergue-se num morro alto uma torre branca e atarracada. O Linu foi até lá para uma palestra sobre a história dos faróis, dada pelo velho marinheiro e ex-faroleiro Ülo. “O farol de Kõpu ficou pronto no começo do século XVI e é um dos faróis mais antigos do mundo ainda em funcionamento”, começou o Ülo. “Quem exigiu a construção foram os mercadores da Hansa, porque navios demais tinham naufragado no baixio de Hiiu.”',
        choices: [
          { text: 'Kuulata, kuidas torn ehitati.', translation: 'Ouvir como a torre foi construída.', next: 'kivi' },
          {
            text: '“Nii et torn ehitati kahekümnendal sajandil turistide jaoks?”',
            translation: '“Então a torre foi construída no século XX para os turistas?”',
            wrong: 'Não: o Ülo disse que o farol ficou pronto no começo do século XVI (“kuueteistkümnenda sajandi alguses”) e foi construído a pedido dos mercadores hanseáticos, por causa dos naufrágios no baixio de Hiiu.',
          },
        ],
      },
      kivi: {
        emoji: '🧱',
        text: '“Torn on laotud paekivist ja selle seinad on väga paksud,” jätkas Ülo. “Aja jooksul laoti väliskülgedele tugipiilarid, et torn tuulele ja ilmastikule vastu peaks.” Ta selgitas, et algul põletati torni tipus lahtist tuld ja majakavaht pidi seda terve öö üleval hoidma, tassides kütust mööda treppe üles. “Tuli, mida laevalt ei näe, on sama hea kui tuli, mida polegi,” ütles ta.',
        translation:
          '“A torre foi erguida em calcário e as paredes são muito grossas”, continuou o Ülo. “Com o tempo, contrafortes foram levantados nas laterais para a torre resistir ao vento e às intempéries.” Ele explicou que, no começo, se queimava fogo aberto no alto da torre, e o faroleiro tinha de mantê-lo aceso a noite toda, carregando o combustível escada acima. “Uma luz que não se vê do navio vale o mesmo que luz nenhuma”, disse ele.',
        choices: [{ text: 'Küsida, kuidas tuletorni tuli hiljem muutus.', translation: 'Perguntar como a luz do farol mudou depois.', next: 'tehnika' }],
      },
      tehnika: {
        emoji: '🔦',
        text: '“Hiljem tulid õlilambid ja peeglid, veel hiljem Fresneli läätsed, mis koondavad valguse kitsaks kiireks,” rääkis Ülo. “Iga tuletorn vilgub oma rütmis, mida nimetatakse tule karakteristikuks, nii et meremees tunneb pimedas ära, millise torni lähedal ta on.” Tänapäeval töötab tuli automaatselt ja laevadel on satelliitnavigatsioon. Sellegipoolest peetakse tuletorne endiselt oluliseks varusüsteemiks juhuks, kui elektroonika peaks üles ütlema.',
        translation:
          '“Depois vieram as lamparinas a óleo e os espelhos, e mais tarde as lentes de Fresnel, que concentram a luz num feixe estreito”, contou o Ülo. “Cada farol pisca no seu próprio ritmo, que se chama característica da luz, e assim o marinheiro reconhece no escuro perto de qual farol está.” Hoje a luz funciona automaticamente e os navios têm navegação por satélite. Mesmo assim, os faróis continuam sendo considerados um sistema reserva importante, caso a eletrônica pare de funcionar.',
        choices: [
          { text: 'Ronida koos Üloga torni tippu.', translation: 'Subir com o Ülo até o alto da torre.', next: 'torn' },
          {
            text: '“Kõik tuletornid vilguvad siis ühesuguses rütmis, et neid oleks lihtsam meeles pidada.”',
            translation: '“Então todos os faróis piscam no mesmo ritmo, para ficar mais fácil de lembrar.”',
            wrong: 'É o contrário: cada farol pisca no seu próprio ritmo (“oma rütmis”), a característica da luz, justamente para que o marinheiro saiba, no escuro, perto de qual farol está.',
          },
        ],
      },
      torn: {
        emoji: '🌬️',
        text: 'Torni tipus puhus tugev tuul ja all laius meri, mille pinnal helkisid valged vahused lained. Ülo osutas merele, kus vee all peidab end Hiiu madal, ja ütles, et ka tänapäeval ei tohi sellele liiga lähedale sõita. Siis vaatas ta Linule otsa ja küsis: “Kui sina oleksid kapten ja su navigatsiooniseade läheks tormis rikki, mida sa teeksid?”',
        translation:
          'No alto da torre soprava um vento forte, e lá embaixo se estendia o mar, com ondas brancas de espuma brilhando na superfície. O Ülo apontou para o mar, onde o baixio de Hiiu se esconde debaixo d’água, e disse que ainda hoje não se deve passar perto demais dele. Então olhou para o Linu e perguntou: “Se você fosse o capitão e o seu aparelho de navegação quebrasse numa tempestade, o que você faria?”',
        choices: [
          { text: 'Vastata, et otsiks tuletorni tuld ja tunneks selle rütmi järgi ära.', translation: 'Responder que procuraria a luz do farol e a reconheceria pelo ritmo.', next: 'vastus' },
          { text: 'Vastata, et sõidaks lihtsalt kiiresti otse edasi.', translation: 'Responder que simplesmente seguiria em frente, rápido.', next: 'final_madal' },
        ],
      },
      vastus: {
        emoji: '📘',
        text: 'Ülo noogutas rahulolevalt. “Just nii. Loeksid sekundeid vilgete vahel, võrdleksid kaardiga ja teaksid, kus sa oled,” ütles ta. “Just selleks ongi see torn siin peaaegu viissada aastat seisnud.” Ta lasi Linul vaatluspäevikusse kirja panna tänase ilma: tuule suuna, nähtavuse ja lainekõrguse.',
        translation:
          'O Ülo concordou, satisfeito. “Isso mesmo. Você contaria os segundos entre as piscadas, compararia com a carta náutica e saberia onde está”, disse ele. “É exatamente para isso que esta torre está aqui há quase quinhentos anos.” Ele deixou o Linu registrar no diário de observação o tempo do dia: a direção do vento, a visibilidade e a altura das ondas.',
        choices: [{ text: 'Jääda torni juurde päikeseloojangut ootama.', translation: 'Ficar perto da torre esperando o pôr do sol.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🌅',
        text: 'Kui päike merre vajus, süttis torni tipus tuli ja hakkas oma rahulikus rütmis vilkuma. Kaugel silmapiiril liikus laev, mille kapten nägi ilmselt sedasama valgust. Linu luges sekundeid ja kirjutas rütmi märkmikku nagu päris meremees. Ülo patsutas talle õlale ja ütles, et temast saaks hea majakavaht.',
        translation:
          'Quando o sol mergulhou no mar, a luz se acendeu no alto da torre e começou a piscar no seu ritmo tranquilo. Longe, no horizonte, passava um navio cujo capitão provavelmente via essa mesma luz. O Linu contou os segundos e anotou o ritmo no caderno como um marinheiro de verdade. O Ülo deu um tapinha no ombro dele e disse que ele daria um bom faroleiro.',
        ending: { tone: 'bom', title: 'Futuro faroleiro', message: 'Você entendeu a história, a técnica e o sentido da característica da luz — e respondeu como um capitão prudente.' },
      },
      final_madal: {
        emoji: '⚓',
        text: 'Ülo raputas pead. “Otse edasi, pimedas ja tormis? Siis jõuaksid sa varsti Hiiu madalale nagu paljud laevad enne sind,” ütles ta. Ta selgitas uuesti, et tuletorni tuli ja selle rütm ongi mõeldud just selliseks hetkeks. Linu punastas ja lubas järgmine kord tähelepanelikumalt kuulata.',
        translation:
          'O Ülo balançou a cabeça. “Seguir em frente, no escuro e na tempestade? Aí você logo iria parar no baixio de Hiiu, como muitos navios antes de você”, disse ele. Ele explicou de novo que a luz do farol e o seu ritmo existem justamente para um momento assim. O Linu ficou vermelho e prometeu ouvir com mais atenção da próxima vez.',
        ending: { tone: 'neutro', title: 'Rumo ao baixio', message: 'O Ülo explicou que o ritmo de cada farol serve para o navio se orientar quando a eletrônica falha. Era essa a resposta.' },
      },
    },
  },
  {
    id: 'et-h42',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Põlevkivi pärand',
    emoji: '🪨',
    summary: 'Em Ida-Virumaa, o Linu desce a uma antiga mina de xisto betuminoso com um ex-mineiro e depois assiste a um seminário sobre a transição energética da região.',
    cultural_context:
      'O xisto betuminoso (põlevkivi) do nordeste da Estônia, chamado kukersita por causa do vilarejo de Kukruse, é extraído industrialmente há mais de cem anos e por muito tempo gerou a maior parte da eletricidade do país. Hoje a região de Ida-Virumaa passa por uma transição para outras fontes de energia.',
    start: 'start',
    glossary: [
      ['põlevkivi', 'xisto betuminoso (lit.: pedra que queima)'],
      ['kaevandus', 'mina'],
      ['kaevur', 'mineiro'],
      ['settekivim', 'rocha sedimentar'],
      ['tuhamägi', 'morro de cinzas'],
      ['süsihappegaas', 'dióxido de carbono'],
      ['õiglane üleminek', 'transição justa'],
      ['ümberõpe', 'requalificação profissional'],
    ],
    nodes: {
      start: {
        emoji: '⛑️',
        text: 'Ida-Virumaal, Kohtla-Nõmmel, laskus Linu koos ekskursioonigrupiga vanasse põlevkivikaevandusse, mis on nüüd muuseum. Giid Valeri oli ise töötanud kaevurina üle kahekümne aasta. “Eesti põlevkivi nimetatakse Kukruse küla järgi kukersiidiks,” selgitas ta kiivrit kohendades. “See on settekivim, mis sisaldab orgaanilist ainet ja põleb, sellest ka nimi põlevkivi.”',
        translation:
          'Em Kohtla-Nõmme, na região de Ida-Virumaa, o Linu desceu com um grupo de visitantes a uma antiga mina de xisto betuminoso que hoje é museu. O guia, Valeri, tinha trabalhado como mineiro por mais de vinte anos. “O xisto estoniano é chamado de kukersita, por causa do vilarejo de Kukruse”, explicou ele, ajeitando o capacete. “É uma rocha sedimentar que contém matéria orgânica e queima; daí o nome põlevkivi, pedra que queima.”',
        choices: [
          { text: 'Kuulata, kuidas põlevkivi kaevandati.', translation: 'Ouvir como o xisto era extraído.', next: 'kaevandus' },
          {
            text: '“Põlevkivi on siis sama mis kivisüsi?”',
            translation: '“Então o xisto betuminoso é a mesma coisa que o carvão mineral?”',
            wrong: 'O Valeri não disse isso: ele definiu o xisto como uma rocha sedimentar que contém matéria orgânica e queima (“settekivim, mis sisaldab orgaanilist ainet ja põleb”). O nome vem justamente de “põlema”, queimar.',
          },
        ],
      },
      kaevandus: {
        emoji: '🚇',
        text: 'Maa all oli jahe ja niiske ning kitsad käigud hargnesid igas suunas. Valeri rääkis, et Eestis on põlevkivi tööstuslikult kaevandatud juba üle saja aasta ja see on andnud tööd tuhandetele inimestele. “Pikka aega toodeti suurem osa Eesti elektrist põlevkivist,” ütles ta. “See tegi riigi energiavallas üsna sõltumatuks, aga looduse jaoks oli hind kõrge.”',
        translation:
          'Debaixo da terra estava frio e úmido, e as galerias estreitas se ramificavam em todas as direções. O Valeri contou que na Estônia o xisto é extraído industrialmente há mais de cem anos e deu trabalho a milhares de pessoas. “Por muito tempo, a maior parte da eletricidade da Estônia foi produzida com xisto”, disse ele. “Isso deixou o país bastante independente em energia, mas para a natureza o preço foi alto.”',
        choices: [
          { text: 'Küsida, milles see kõrge hind seisnes.', translation: 'Perguntar em que consistiu esse preço alto.', next: 'tuhk' },
          {
            text: '“Nii et põlevkivi hakati kaevandama alles paar aastat tagasi?”',
            translation: '“Então começaram a extrair xisto só uns dois anos atrás?”',
            wrong: 'Não: o Valeri disse que o xisto é extraído industrialmente na Estônia há mais de cem anos (“juba üle saja aasta”).',
          },
        ],
      },
      tuhk: {
        emoji: '🏔️',
        text: '“Esiteks tekkis põletamisel palju tuhka ja jääke, millest kerkisid Kohtla-Järve lähedale suured tuhamäed,” vastas Valeri. “Teiseks alandas kaevandamine mõnes piirkonnas põhjavee taset, nii et külakaevud jäid kuivaks.” Kolmandaks, lisas ta, paiskab põlevkivi põletamine õhku palju süsihappegaasi, mistõttu on see kliimapoliitika tõttu muutunud järjest kallimaks.',
        translation:
          '“Primeiro, a queima gerou muita cinza e resíduos, que formaram grandes morros de cinzas perto de Kohtla-Järve”, respondeu o Valeri. “Segundo, em algumas áreas a mineração baixou o nível do lençol freático, e os poços dos vilarejos secaram.” Terceiro, acrescentou ele, a queima do xisto lança muito dióxido de carbono no ar, e por isso, com a política climática, ela foi ficando cada vez mais cara.',
        choices: [{ text: 'Minna õhtul Jõhvisse seminarile, kus räägitakse piirkonna tulevikust.', translation: 'À noite, ir a Jõhvi para um seminário sobre o futuro da região.', next: 'seminar' }],
      },
      seminar: {
        emoji: '📊',
        text: 'Jõhvi kontserdimajas pidas ettekande majandusteadlane Katrin, kes uuris piirkonna üleminekut uutele energiaallikatele. “Kui põlevkivitööstus väheneb, ei kao ainult elektrijaamad, vaid ka töökohad ja nendega seotud teenused,” rääkis ta. “Seetõttu räägitakse õiglasest üleminekust: töötajatele pakutakse ümberõpet ja piirkonda suunatakse investeeringuid, näiteks tuule- ja päikeseenergiasse.” Saalis istus palju endisi kaevureid, kes kuulasid tähelepanelikult, kuid pisut umbusklikult.',
        translation:
          'Na sala de concertos de Jõhvi, quem apresentava era a economista Katrin, que pesquisava a transição da região para novas fontes de energia. “Quando a indústria do xisto encolhe, não somem só as usinas, mas também os empregos e os serviços ligados a eles”, disse ela. “Por isso se fala em transição justa: os trabalhadores recebem requalificação e a região recebe investimentos, por exemplo em energia eólica e solar.” Na plateia havia muitos ex-mineiros, que ouviam com atenção, mas meio desconfiados.',
        choices: [
          { text: 'Tõsta tiib ja küsida, mida ümberõpe tegelikult tähendab.', translation: 'Levantar a asa e perguntar o que a requalificação significa na prática.', next: 'kysimus' },
          { text: 'Hüüda saalis, et põlevkivi tuleks kohe homsest keelata.', translation: 'Gritar na plateia que o xisto deveria ser proibido já a partir de amanhã.', next: 'final_kiire' },
          {
            text: '“Katrin arvab, et üleminek puudutab ainult elektrijaamu.”',
            translation: '“A Katrin acha que a transição só diz respeito às usinas.”',
            wrong: 'O contrário: a Katrin disse que não somem só as usinas, mas também os empregos e os serviços ligados a eles (“ei kao ainult elektrijaamad, vaid ka töökohad”). Por isso se fala em transição justa.',
          },
        ],
      },
      kysimus: {
        emoji: '🙋',
        text: 'Katrin vastas, et ümberõpe tähendab näiteks seda, et elektrik õpib hooldama tuulegeneraatoreid või endine kaevur saab tehnikuks mõnes uues tehases. “Aga see õnnestub ainult siis, kui inimesed ise usuvad, et neil on siin tulevik,” lisas ta. Siis tõusis Valeri tagumises reas püsti ja ütles, et tema poeg õpib juba taastuvenergeetikat. Saal elavnes ja arutelu kestis veel tükk aega pärast ametlikku lõppu.',
        translation:
          'A Katrin respondeu que requalificação quer dizer, por exemplo, um eletricista aprender a fazer manutenção de turbinas eólicas ou um ex-mineiro virar técnico numa fábrica nova. “Mas isso só dá certo se as próprias pessoas acreditarem que têm futuro aqui”, acrescentou ela. Então o Valeri se levantou na última fileira e disse que o filho dele já estuda energias renováveis. A plateia se animou, e a discussão continuou por um bom tempo depois do encerramento oficial.',
        choices: [{ text: 'Jääda pärast seminari Valeri ja Katriniga juttu ajama.', translation: 'Ficar depois do seminário conversando com o Valeri e a Katrin.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '☕',
        text: 'Pärast seminari istusid Linu, Valeri ja Katrin kohvikus ja jätkasid vestlust. Valeri ütles, et põlevkivi on osa tema elust ja ta ei taha, et see unustataks, kuid mõistab, et ajad on muutunud. Katrin pakkus, et kaevandusmuuseumis võiks rääkida nii mineviku uhkusest kui ka tuleviku võimalustest. Linu kirjutas märkmikku: “Pärand ei ole ainult see, mis on maa all, vaid ka see, mida me sellest õpime.”',
        translation:
          'Depois do seminário, o Linu, o Valeri e a Katrin sentaram num café e continuaram a conversa. O Valeri disse que o xisto é parte da vida dele e que não quer que isso seja esquecido, mas entende que os tempos mudaram. A Katrin sugeriu que o museu da mina poderia falar tanto do orgulho do passado quanto das possibilidades do futuro. O Linu escreveu no caderno: “Herança não é só o que está debaixo da terra, mas também o que aprendemos com isso.”',
        ending: { tone: 'bom', title: 'Herança e futuro', message: 'Você entendeu a geologia, os custos ambientais e a economia da transição — e ouviu quem vive a mudança na pele.' },
      },
      final_kiire: {
        emoji: '🚪',
        text: 'Linu hüüdis, et põlevkivi tuleks kohe homsest keelata, sest see kahjustab kliimat. Saalis tekkis sumin ja mitu endist kaevurit tõusid püsti ning lahkusid. Katrin ütles rahulikult, et keelust üksi ei piisa, kui inimestele ei pakuta midagi asemele. Linu mõistis, et tehniliselt õige mõte võib jääda poolikuks, kui inimesi ei kuulata.',
        translation:
          'O Linu gritou que o xisto deveria ser proibido já a partir de amanhã, porque prejudica o clima. Na plateia subiu um burburinho, e vários ex-mineiros se levantaram e foram embora. A Katrin disse com calma que só a proibição não basta se não se oferece nada em troca às pessoas. O Linu entendeu que uma ideia tecnicamente certa pode ficar pela metade quando as pessoas não são ouvidas.',
        ending: { tone: 'neutro', title: 'Ideia pela metade', message: 'A Katrin falou em transição justa: trocar de energia sem pensar nos empregos deixa a região para trás.' },
      },
    },
  },
  // ───────────────────────── C2 ─────────────────────────
  {
    id: 'et-h43',
    level: 'C2',
    cefr: 'C2',
    title: 'Koidu tütar',
    emoji: '🌅',
    summary: 'Numa madrugada em Pärnu, uma professora aposentada apresenta ao Linu a poeta Lydia Koidula — e um verso famoso em que uma palavra antiga engana o leitor de hoje.',
    cultural_context:
      'Lydia Koidula (1843–1886), a grande poeta do Despertar Nacional estoniano, cresceu em Pärnu, onde o pai publicava um jornal. Seu poema “Mu isamaa on minu arm” (“Minha pátria é o meu amor”), musicado, é cantado tradicionalmente no encerramento das festas da canção (laulupidu).',
    start: 'start',
    glossary: [
      ['koit', 'aurora, alvorada'],
      ['varjunimi', 'pseudônimo'],
      ['ärkamisaeg', 'o Despertar Nacional estoniano (séc. XIX)'],
      ['arm', 'cicatriz; na poesia antiga: amor, pessoa amada'],
      ['isamaa', 'pátria'],
      ['põrm', 'restos mortais'],
      ['tasa sõuad, kaugele jõuad', 'devagar se vai ao longe (lit.: remando devagar, chega-se longe)'],
      ['hommik on õhtust targem', 'a noite é boa conselheira (lit.: a manhã é mais sábia que a noite)'],
    ],
    nodes: {
      start: {
        emoji: '🏖️',
        text: 'Oli augusti varahommik ja Pärnu rand lebas veel uimases vaikuses, kui Linu mööda niisket liiva jalutas. Pingil istus hallipäine naine, kes jälgis kahvatuvat taevast nii süvenenult, nagu loeks ta raamatut. “Koit,” lausus ta, ilma et oleks pead pööranud, “sellest sõnast sai kunagi ühe tüdruku nimi.” Linu istus tema kõrvale ja naine tutvustas end: ta oli pensionil kirjandusõpetaja Hilja. “Kas sa tead, kes oli Koidula?” küsis ta.',
        translation:
          'Era madrugada de agosto, e a praia de Pärnu ainda jazia num silêncio sonolento quando o Linu caminhava pela areia úmida. Num banco estava sentada uma mulher de cabelos grisalhos, que observava o céu empalidecendo tão concentrada como se lesse um livro. “Aurora”, disse ela, sem virar a cabeça, “dessa palavra, um dia, nasceu o nome de uma moça.” O Linu sentou-se ao lado dela, e a mulher se apresentou: era Hilja, professora de literatura aposentada. “Você sabe quem foi Koidula?”, perguntou ela.',
        choices: [{ text: '“Ei tea, aga tahaksin väga teada.”', translation: '“Não sei, mas gostaria muito de saber.”', next: 'nimi' }],
      },
      nimi: {
        emoji: '📰',
        text: '“Lydia Jannsen sündis 1843. aastal ja kasvas üles siinsamas Pärnus, kus tema isa andis välja ajalehte,” jutustas Hilja. “Varjunime Koidula, mis on tuletatud sõnast ‘koit’, ta endale ise ei valinud, see anti talle, ja temast sai ärkamisaja luuletaja.” Hilja rääkis, et Koidula näidendiga “Saaremaa onupoeg” sai 1870. aastal alguse eestikeelne teater. “Ja tema luuletus ‘Mu isamaa on minu arm’ kõlab tänini iga laulupeo lõpus,” lisas ta pehmelt. Tema hääles oli uhkust, mis ei vajanud valju sõnu.',
        translation:
          '“Lydia Jannsen nasceu em 1843 e cresceu aqui mesmo, em Pärnu, onde o pai dela publicava um jornal”, contou a Hilja. “O pseudônimo Koidula, derivado da palavra ‘koit’, aurora, não foi ela que escolheu: deram-lhe esse nome, e ela se tornou a poeta do Despertar Nacional.” A Hilja contou que, com a peça de Koidula “Saaremaa onupoeg” (“O primo de Saaremaa”), começou em 1870 o teatro em língua estoniana. “E o poema dela ‘Mu isamaa on minu arm’ ressoa até hoje no fim de cada festa da canção”, acrescentou ela com suavidade. Na voz dela havia um orgulho que não precisava de palavras altas.',
        choices: [
          { text: 'Paluda, et Hilja loeks luuletuse algust.', translation: 'Pedir à Hilja que leia o começo do poema.', next: 'luuletus' },
          {
            text: '“Koidula oli siis tema pärisnimi?”',
            translation: '“Então Koidula era o nome verdadeiro dela?”',
            wrong: 'Não: o nome de nascimento dela era Lydia Jannsen. “Koidula” foi um pseudônimo (“varjunimi”) que lhe deram, derivado de “koit”, aurora.',
          },
        ],
      },
      luuletus: {
        emoji: '📜',
        text: 'Hilja sulges silmad ja luges aeglaselt, justkui kaaluks iga sõna: “Mu isamaa on minu arm.” Siis avas ta silmad ja naeratas Linu nõutu näo peale. “Ma tean, mida sa mõtled,” ütles ta. “Tänapäeva keeles on arm eelkõige see, mis jääb nahale pärast haava paranemist. Koidula ajal tähendas see luules aga armastust ja armsat, nii nagu sõnas ‘armastus’ endaski.”',
        translation:
          'A Hilja fechou os olhos e leu devagar, como se pesasse cada palavra: “Mu isamaa on minu arm.” Então abriu os olhos e sorriu para a cara confusa do Linu. “Sei o que você está pensando”, disse ela. “Na língua de hoje, ‘arm’ é sobretudo o que fica na pele depois que uma ferida sara, a cicatriz. Mas, no tempo de Koidula, na poesia, a palavra queria dizer amor, pessoa amada — como na própria palavra ‘armastus’.”',
        choices: [
          { text: 'Tänada selgituse eest ja küsida, kas Pärnus on Koidula mälestusmärk.', translation: 'Agradecer a explicação e perguntar se há um monumento a Koidula em Pärnu.', next: 'ausammas' },
          {
            text: '“Nii et luuletaja räägib armist, mis tal isamaa pärast nahale jäi?”',
            translation: '“Então a poeta fala da cicatriz que ficou na pele dela por causa da pátria?”',
            wrong: 'Aí está a armadilha: a Hilja explicou que hoje “arm” é sobretudo cicatriz, mas no tempo de Koidula, na poesia, queria dizer amor, pessoa amada — como em “armastus”. O verso diz “Minha pátria é o meu amor”.',
          },
        ],
      },
      ausammas: {
        emoji: '🗿',
        text: 'Nad kõndisid läbi ärkava linna Koidula parki, kus kõrgub luuletaja mälestussammas. Hilja jäi selle ette seisma ja vaikis kaua, nagu tervitaks vana tuttavat. Siis jutustas ta, et Koidula suri võõrsil, Kroonlinnas, ja alles kuus aastakümmet hiljem sängitati tema põrm Tallinna mulda. “Ta igatses kodumaad kogu elu,” ütles Hilja, “ja luuletused olid tema kirjad kodumaale.” Tuul sasis pargis puude latvu, nagu tahaks ka tema midagi öelda.',
        translation:
          'Eles atravessaram a cidade que despertava até o parque Koidula, onde se ergue o monumento à poeta. A Hilja parou diante dele e ficou muito tempo em silêncio, como quem cumprimenta uma velha conhecida. Depois contou que Koidula morreu longe de casa, em Kronstadt, e que só seis décadas mais tarde os restos mortais dela foram sepultados em terra de Tallinn. “Ela sentiu saudade da terra natal a vida inteira”, disse a Hilja, “e os poemas eram as cartas dela para a pátria.” O vento despenteava as copas das árvores, como se também quisesse dizer alguma coisa.',
        choices: [
          { text: 'Küsida, miks Hilja on terve elu Koidulat õpetanud.', translation: 'Perguntar por que a Hilja passou a vida ensinando Koidula.', next: 'hilja' },
          { text: 'Öelda, et vanad luuletused on igavad ja keegi neid enam ei loe.', translation: 'Dizer que poemas antigos são chatos e ninguém mais os lê.', next: 'final_igav' },
        ],
      },
      hilja: {
        emoji: '🚣',
        text: 'Hilja naeris tasakesi. “Sest ükski sõna ei jää elama iseenesest,” vastas ta. “Õpetaja töö on nagu aerutamine vastuvoolu: tasa sõuad, kaugele jõuad. Ma lugesin igal aastal lastele Koidulat ette, ja enamik kuulas vaid poole kõrvaga, aga mõni jäi kuulama südamega.” Ta vaatas Linule otsa ja lisas, et nüüd on tal jälle üks õpilane juures.',
        translation:
          'A Hilja riu baixinho. “Porque nenhuma palavra sobrevive sozinha”, respondeu ela. “O trabalho de professor é como remar contra a corrente: devagar se vai ao longe. Todo ano eu lia Koidula para as crianças, e a maioria ouvia só com meio ouvido, mas uma ou outra ficava ouvindo com o coração.” Ela olhou para o Linu e acrescentou que agora tinha mais um aluno.',
        choices: [
          { text: 'Paluda, et Hilja õpetaks talle luuletuse algust pähe.', translation: 'Pedir à Hilja que o ensine a decorar o começo do poema.', next: 'laul' },
          {
            text: '“Tasa sõuad, kaugele jõuad: see tähendab, et kiirustades jõuab kõige kaugemale.”',
            translation: '“Remando devagar, chega-se longe: quer dizer que, com pressa, se chega mais longe.”',
            wrong: 'É o oposto: “Tasa sõuad, kaugele jõuad” diz que a calma e a constância levam mais longe. A Hilja comparou com o trabalho paciente de professora, ano após ano.',
          },
        ],
      },
      laul: {
        emoji: '🎼',
        text: 'Terve hommiku kordas Linu seda ühte rida, kuni see voolas tal suust nagu vesi. Hilja parandas õrnalt tema õ-sid ja pikki täishäälikuid ning jutustas vahepeal, kuidas kümned tuhanded lauljad seda laulu laulupeol laulavad. “Ühel päeval seisad sa ise selles kooris,” ütles ta, “ja siis saad aru, miks inimesed nutavad.” Linu ei kahelnud selles hetkekski. Kusagil kaugel hüüdis kajakas, justkui oleks ka tema rea selgeks saanud.',
        translation:
          'A manhã inteira o Linu repetiu aquele único verso, até ele sair da boca como água. A Hilja corrigia com delicadeza os õ e as vogais longas dele e, nos intervalos, contava como dezenas de milhares de cantores entoam essa canção na festa da canção. “Um dia você vai estar nesse coro”, disse ela, “e aí vai entender por que as pessoas choram.” O Linu não duvidou disso nem por um instante. Em algum lugar ao longe uma gaivota gritou, como se também tivesse aprendido o verso.',
        choices: [{ text: 'Minna koos Hiljaga Koidula muuseumisse.', translation: 'Ir com a Hilja ao museu de Koidula.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Muuseumi vitriinides olid vanad raamatud ja kolletanud ajalehed, mille trükitähed olid ladutud peaaegu poolteist sajandit tagasi. Linu vaatas neid kaua ja tundis, et need räägivad temaga. Õhtul, kui päike loojus merre, seisid Hilja ja Linu jälle rannas. Linu lausus vaikselt: “Mu isamaa on minu arm,” ja seekord teadis ta täpselt, mida iga sõna tähendab. Hilja pühkis salaja silmanurka.',
        translation:
          'Nas vitrines do museu havia livros antigos e jornais amarelados, cujas letras tinham sido compostas quase um século e meio antes. O Linu ficou olhando para eles por muito tempo e sentiu que lhe falavam. À noite, quando o sol se pôs no mar, a Hilja e o Linu estavam de novo na praia. O Linu disse baixinho: “Mu isamaa on minu arm”, e dessa vez sabia exatamente o que cada palavra queria dizer. A Hilja enxugou discretamente o canto do olho.',
        ending: { tone: 'bom', title: 'Aluno da aurora', message: 'Você entendeu o nome, a história e a palavra traiçoeira do verso de Koidula — e agora o sabe de cor.' },
      },
      final_igav: {
        emoji: '📻',
        text: 'Linu ütles, et vanad luuletused on igavad ja keegi neid enam ei loe. Hilja ei vaielnud, vaid naeratas kurvalt ja ütles: “Hommik on õhtust targem.” Siis tõusis ta ja läks aeglaselt linna poole. Õhtul kuulis Linu raadiost laulupeo salvestust, kus tuhanded hääled laulsid just seda luuletust, mida ta oli igavaks nimetanud. Ta mõistis, et Hilja oli olnud targem kui tema.',
        translation:
          'O Linu disse que poemas antigos são chatos e que ninguém mais os lê. A Hilja não discutiu: sorriu com tristeza e disse: “A noite é boa conselheira.” Depois se levantou e foi devagar em direção à cidade. À noite, o Linu ouviu no rádio uma gravação da festa da canção, em que milhares de vozes cantavam justamente o poema que ele tinha chamado de chato. Ele entendeu que a Hilja tinha sido mais sábia do que ele.',
        ending: { tone: 'neutro', title: 'A manhã é mais sábia', message: 'O poema de Koidula não é peça de museu: é cantado por milhares de vozes no encerramento de cada festa da canção.' },
      },
    },
  },
  {
    id: 'et-h44',
    level: 'C2',
    cefr: 'C2',
    title: 'Kraav Vargamäel',
    emoji: '🌾',
    summary: 'Em Vargamäe, cenário de “Tõde ja õigus”, de Tammsaare, o Linu ouve a história da rixa de Andres e Pearu — e dá de cara com dois vizinhos de verdade brigando por causa de uma vala.',
    cultural_context:
      'A. H. Tammsaare (1878–1940) é o maior romancista estoniano. Seu romance em cinco volumes “Tõde ja õigus” (“Verdade e justiça”, 1926–1933) começa em Vargamäe, inspirada na fazenda onde ele nasceu, em Albu, na região de Järvamaa — hoje um museu. A rixa dos vizinhos Andres e Pearu é uma das mais famosas da literatura estoniana.',
    start: 'start',
    glossary: [
      ['tõde ja õigus', 'verdade e justiça'],
      ['vaeva nägema', 'penar, dar duro'],
      ['kraav', 'vala, valeta'],
      ['piir', 'divisa, limite'],
      ['tüli', 'briga, rixa'],
      ['vanasõna', 'provérbio'],
      ['kes teisele auku kaevab, see ise sisse kukub', 'quem cava um buraco para o outro cai nele'],
      ['üheksa korda mõõda, üks kord lõika', 'meça nove vezes, corte uma'],
    ],
    nodes: {
      start: {
        emoji: '🏚️',
        text: 'Järvamaa metsade ja soode vahel, kus tee lõpuks muutub kitsaks kruusaribaks, asub Vargamäe. Sinna sõitis Linu ühel hilissuvisel pärastlõunal, et näha talu, kus sündis Anton Hansen Tammsaare ja mis oli eeskujuks tema suurromaani “Tõde ja õigus” Vargamäele. Väravas võttis teda vastu muuseumi giid Tiit, kes rääkis aeglaselt ja kaalutletult, nagu mees, kes on harjunud maad harima. “Romaanis elasid siin kaks naabrit, Andres ja Pearu,” ütles ta, “ja aastakümneid tülitsesid nad ühe kraavi pärast.” Tema hääles oli nii muiet kui ka kurbust.',
        translation:
          'Entre as florestas e os pântanos de Järvamaa, onde a estrada acaba virando uma faixa estreita de cascalho, fica Vargamäe. O Linu foi até lá numa tarde de fim de verão para ver a fazenda onde nasceu Anton Hansen Tammsaare e que serviu de modelo para a Vargamäe do seu grande romance “Tõde ja õigus”. No portão, quem o recebeu foi o guia do museu, Tiit, que falava devagar e ponderado, como um homem acostumado a lavrar a terra. “No romance, moravam aqui dois vizinhos, Andres e Pearu”, disse ele, “e durante décadas eles brigaram por causa de uma vala.” Na voz dele havia tanto um sorriso quanto tristeza.',
        choices: [
          { text: 'Küsida, miks nad just kraavi pärast tülitsesid.', translation: 'Perguntar por que eles brigavam justamente por uma vala.', next: 'kraav' },
          {
            text: '“Andres ja Pearu olid siis head sõbrad, kes kaevasid koos kraavi?”',
            translation: '“Então Andres e Pearu eram bons amigos que cavavam a vala juntos?”',
            wrong: 'Não: o Tiit disse que os dois vizinhos brigaram durante décadas (“aastakümneid tülitsesid”) por causa de uma vala. No romance, Andres e Pearu são o retrato da rixa entre vizinhos.',
          },
        ],
      },
      kraav: {
        emoji: '💧',
        text: '“Andres tahtis kraavi kaevata, et soist maad kuivendada ja põldu parandada,” selgitas Tiit. “Pearu aga ajas kraavi ikka ja jälle kinni, ja nii see läks aastast aastasse, kohtust kohtusse.” Ta juhatas Linu õuele, kus kahe talu vahel lookles tõepoolest vana, rohtunud kraav. “Ma arvan, et see pole ainult kahe mehe tüli,” lisas ta, “vaid inimese võitlus maa, jumala ja iseendaga.” Siis jäi ta mõtlikult tumedat vett vaatama.',
        translation:
          '“Andres queria cavar uma vala para drenar a terra pantanosa e melhorar o campo”, explicou o Tiit. “Mas o Pearu entupia a vala de novo, e de novo, e assim foi, de ano em ano, de tribunal em tribunal.” Ele levou o Linu até o terreiro, onde entre as duas fazendas serpenteava de fato uma vala velha, tomada pelo mato. “Eu acho que não é só uma briga entre dois homens”, acrescentou ele, “e sim a luta do ser humano com a terra, com Deus e consigo mesmo.” Depois ficou olhando, pensativo, a água escura.',
        choices: [{ text: 'Küsida, milline on romaani kuulsaim lause.', translation: 'Perguntar qual é a frase mais famosa do romance.', next: 'lause' }],
      },
      lause: {
        emoji: '✍️',
        text: 'Tiit naeratas, nagu oleks just seda küsimust oodanud. “Andrese elu mõte mahub ühte lausesse: ‘Tee tööd ja näe vaeva, siis tuleb ka armastus,’” tsiteeris ta. “Andres uskus, et kui ta küllalt rabeleb, saab soost põld ja elust õnn. Kuid romaani lõpuks jääb lugejale küsimus, kas armastus tulebki tööst või kaob see töö kõrval hoopis ära.” Linu kordas lauset endamisi mitu korda, justkui maitseks seda.',
        translation:
          'O Tiit sorriu, como se estivesse esperando justamente essa pergunta. “O sentido da vida de Andres cabe numa frase: ‘Trabalhe e dê duro, e então virá também o amor’”, citou ele. “Andres acreditava que, se ralasse o bastante, o pântano viraria campo e a vida, felicidade. Mas, ao fim do romance, fica para o leitor a pergunta: o amor vem mesmo do trabalho, ou acaba se perdendo ao lado dele?” O Linu repetiu a frase para si mesmo várias vezes, como se a saboreasse.',
        choices: [
          { text: 'Jalutada edasi naabertalu poole.', translation: 'Seguir caminhando em direção à fazenda vizinha.', next: 'naabrid' },
          {
            text: '“Lause tähendab, et armastus tuleb enne ja töö alles pärast.”',
            translation: '“A frase quer dizer que o amor vem antes e o trabalho só depois.”',
            wrong: 'A ordem é a outra: “Tee tööd ja näe vaeva, siis tuleb ka armastus” — trabalhe e dê duro, e então (“siis”) virá também o amor. Para Andres, o trabalho vem primeiro; o amor seria a recompensa.',
          },
        ],
      },
      naabrid: {
        emoji: '🧑‍🌾',
        text: 'Teel kohtasid nad kaht meest, kes seisid kummalgi pool uut aeda ja vaidlesid valjul häälel. Selgus, et nad olid päriselus naabrid ega suutnud kokku leppida, kust täpselt jookseb nende maade piir. “Vaat, Vargamäe ei ole ainult raamatus,” ohkas Tiit. Üks meestest, Jaan, oli juba hakanud piiri äärde labidaga kraavi kaevama, teine, Mihkel, ähvardas selle kohe kinni ajada. Päike vajus madalamale ja nende varjud venisid pikaks nagu vana vimm.',
        translation:
          'No caminho eles encontraram dois homens, um de cada lado de uma cerca nova, discutindo em voz alta. Descobriu-se que eles eram vizinhos na vida real e não conseguiam chegar a um acordo sobre por onde exatamente passava a divisa das suas terras. “Olha só: Vargamäe não existe só no livro”, suspirou o Tiit. Um dos homens, Jaan, já tinha começado a cavar com a pá uma vala junto à divisa; o outro, Mihkel, ameaçava entupi-la na hora. O sol descia, e as sombras deles se esticavam compridas como um rancor antigo.',
        choices: [
          { text: 'Jutustada meestele Andresest ja Pearust.', translation: 'Contar aos homens a história de Andres e Pearu.', next: 'lugu' },
          { text: 'Hoida eemale, sest see pole Linu asi.', translation: 'Ficar de longe, porque não é assunto do Linu.', next: 'final_korval' },
        ],
      },
      lugu: {
        emoji: '📖',
        text: 'Linu astus julgelt meeste vahele ja jutustas neile loo kahest naabrist, kes kulutasid pool elu ühe kraavi peale. Jaan kuulas, labidas käes, ja Mihkel kortsutas kulmu, kuid ei katkestanud teda. “Ja kas see tõi neile õnne?” küsis Linu lõpuks. “Vanasõna ütleb ju: kes teisele auku kaevab, see ise sisse kukub.” Mehed vaatasid kraavi, siis teineteist, ja puhkesid ootamatult naerma.',
        translation:
          'O Linu se pôs corajosamente entre os dois e contou a história dos dois vizinhos que gastaram metade da vida com uma vala. O Jaan ouvia de pá na mão, e o Mihkel franzia a testa, mas não o interrompeu. “E isso trouxe felicidade para eles?”, perguntou o Linu por fim. “O provérbio já diz: quem cava um buraco para o outro cai nele.” Os homens olharam para a vala, depois um para o outro, e de repente caíram na risada.',
        choices: [
          { text: 'Soovitada, et nad mõõdaksid piiri koos üle.', translation: 'Sugerir que eles meçam a divisa de novo, juntos.', next: 'moot' },
          {
            text: '“Linu soovitab Jaanil kraavi veel sügavamaks kaevata.”',
            translation: '“O Linu aconselha o Jaan a cavar a vala ainda mais fundo.”',
            wrong: 'Pelo contrário: com o provérbio “kes teisele auku kaevab, see ise sisse kukub” (quem cava um buraco para o outro cai nele), o Linu lembra que a rixa acaba prejudicando quem a alimenta.',
          },
        ],
      },
      moot: {
        emoji: '📏',
        text: '“Üheksa korda mõõda, üks kord lõika,” lausus Tiit, kes oli seni vaikinud, ja tõi muuseumist mõõdulindi ning vana maaplaani. Mehed mõõtsid piiri koos, aeglaselt ja hoolikalt, ning selgus, et vahe oli vaid mõni samm. Jaan pani labida maha ja Mihkel ulatas talle käe. “Andres ja Pearu oleksid võinud sama teha,” ütles Jaan poolnaljaga, “aga siis poleks Tammsaarel olnud millestki kirjutada.” Isegi Tiit ei suutnud naeru tagasi hoida.',
        translation:
          '“Meça nove vezes, corte uma”, disse o Tiit, que até então estava calado, e trouxe do museu uma trena e uma planta antiga do terreno. Os homens mediram a divisa juntos, devagar e com cuidado, e descobriu-se que a diferença era de apenas alguns passos. O Jaan largou a pá, e o Mihkel lhe estendeu a mão. “Andres e Pearu podiam ter feito a mesma coisa”, disse o Jaan meio de brincadeira, “mas aí o Tammsaare não teria tido sobre o que escrever.” Nem o Tiit conseguiu segurar o riso.',
        choices: [{ text: 'Istuda õhtul kõigiga Vargamäe õuel.', translation: 'À noite, sentar-se com todos no terreiro de Vargamäe.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🌫️',
        text: 'Õhtul istusid nad kõik Vargamäe õuel ja jõid teed, samal ajal kui soo kohalt tõusis udu. Tiit luges ette lõigu romaanist ja mehed kuulasid vaikides, nagu räägiks raamat nende endi elust. Linu mõtles, et Tammsaare polnud kirjutanud ainult Vargamäest, vaid igast paigast, kus inimesed peavad maad ja naabrit jagama. Kui ta lõpuks lahkus, kajas tal peas ikka veel: tee tööd ja näe vaeva, siis tuleb ka armastus. Ja võib-olla, lisas ta endamisi, tuleb ka rahu.',
        translation:
          'À noite, todos se sentaram no terreiro de Vargamäe tomando chá, enquanto a névoa subia do pântano. O Tiit leu em voz alta um trecho do romance, e os homens ouviram em silêncio, como se o livro falasse da vida deles. O Linu pensou que o Tammsaare não tinha escrito só sobre Vargamäe, mas sobre todo lugar onde as pessoas precisam dividir a terra e o vizinho. Quando finalmente foi embora, ainda ecoava na cabeça dele: trabalhe e dê duro, e então virá também o amor. E talvez, acrescentou ele para si mesmo, venha também a paz.',
        ending: { tone: 'bom', title: 'Verdade, justiça e paz', message: 'Você entendeu Tammsaare, os provérbios e a lição de Vargamäe — e ajudou dois vizinhos a não repetir Andres e Pearu.' },
      },
      final_korval: {
        emoji: '🌒',
        text: 'Linu otsustas, et naabrite tüli ei ole tema asi, ja jäi eemale seisma. Kraav sai õhtuks valmis ja järgmisel hommikul oli see juba kinni aetud. Tiit ohkas ja ütles, et Vargamäel on sama lugu korratud juba peaaegu sada aastat, raamatus ja väljaspool seda. Linu sõitis ära tundega, et oleks võinud ühe peatüki teisiti lõpetada. Tee ääres kõikusid rukkiväljad, ükskõiksed nagu aeg.',
        translation:
          'O Linu decidiu que a briga dos vizinhos não era assunto dele e ficou de longe. A vala ficou pronta à noite e, na manhã seguinte, já estava entupida. O Tiit suspirou e disse que em Vargamäe a mesma história se repete há quase cem anos, dentro e fora do livro. O Linu foi embora com a sensação de que poderia ter terminado um capítulo de outro jeito. À beira da estrada, os campos de centeio balançavam, indiferentes como o tempo.',
        ending: { tone: 'neutro', title: 'Capítulo repetido', message: 'A rixa de Andres e Pearu se repetiu diante de você. Um provérbio e uma trena poderiam ter mudado o final.' },
      },
    },
  },
  {
    id: 'et-h45',
    level: 'C2',
    cefr: 'C2',
    title: 'Linda pisarad',
    emoji: '🗡️',
    summary: 'Ao anoitecer em Toompea, em Tallinn, o Linu ouve um avô contar à neta as lendas de Kalev, Linda e Kalevipoeg — e o final do épico nacional estoniano, com a sua promessa.',
    cultural_context:
      'O “Kalevipoeg”, épico nacional estoniano, foi composto por Friedrich Reinhold Kreutzwald a partir do folclore e publicado entre 1857 e 1861, no metro da antiga canção rúnica. Diz a lenda que o morro de Toompea, em Tallinn, é o túmulo de Kalev, erguido pela viúva Linda, e que o lago Ülemiste nasceu das lágrimas dela.',
    start: 'start',
    glossary: [
      ['eepos', 'épico, epopeia'],
      ['rahvaluule', 'folclore, poesia popular'],
      ['kangelane', 'herói'],
      ['lesk', 'viúvo, viúva'],
      ['põrgu', 'inferno'],
      ['värsimõõt', 'métrica do verso'],
      ['algriim', 'aliteração'],
      ['kus viga näed laita, seal tule ja aita', 'onde vê um erro para criticar, venha e ajude'],
    ],
    nodes: {
      start: {
        emoji: '🏰',
        text: 'Sügisõhtu laskus Tallinnale ja Toompea vaateplatvormilt paistsid all-linna punased katused ja tornid nagu vanast muinasjutust. Linu kõrval seisis vanahärra Heino oma lapselapse Miaga, kes sikutas vanaisa varrukat ja küsis, miks see mägi siin üldse on. Heino kükitas tüdruku kõrvale ja alustas pühaliku häälega: “Vanasti, kui maailm oli veel noor, elas siin vägev kuningas Kalev.” Linu nihkus lähemale, sest ta tundis, et nüüd tuleb lugu, mida tasub kuulata. “Kui Kalev suri, kandis tema lesk Linda kokku kive ja kuhjas mehe hauale selle sama mäe,” jätkas Heino.',
        translation:
          'A noite de outono descia sobre Tallinn, e do mirante de Toompea os telhados vermelhos e as torres da cidade baixa pareciam saídos de um conto antigo. Ao lado do Linu estava um senhor idoso, Heino, com a neta, Mia, que puxava a manga do avô e perguntava por que aquele morro estava ali. O Heino se agachou ao lado da menina e começou, com voz solene: “Antigamente, quando o mundo ainda era jovem, vivia aqui um rei poderoso, Kalev.” O Linu chegou mais perto, porque sentiu que vinha aí uma história que valia a pena ouvir. “Quando Kalev morreu, a viúva dele, Linda, juntou pedras e amontoou sobre o túmulo do marido este mesmo morro”, continuou o Heino.',
        choices: [
          { text: 'Kuulata lugu edasi.', translation: 'Continuar ouvindo a história.', next: 'linda' },
          {
            text: '“Nii et Toompea kuhjasid kokku vanad kuningad oma lossi jaoks?”',
            translation: '“Então Toompea foi amontoado pelos antigos reis para o castelo deles?”',
            wrong: 'Na lenda contada pelo Heino, quem ergueu o morro foi Linda, a viúva de Kalev: ela juntou pedras e as amontoou sobre o túmulo do marido (“kuhjas mehe hauale selle sama mäe”).',
          },
        ],
      },
      linda: {
        emoji: '💧',
        text: '“Ühel päeval libises Lindal suur kivi süllest ja veeres maha,” jutustas Heino. “Linda istus kivile ja nuttis nii kaua ja nii kibedasti, et tema pisaratest sündis Ülemiste järv.” Mia vaatas suurte silmadega kaugusse, nagu otsiks ta järve pimedusest. “Ja vanad inimesed räägivad, et järvest tuleb vahel välja hallhabemega vanake ja küsib: ‘Kas linn on juba valmis?’” Heino tõstis sõrme: “Kui keegi vastaks jah, laseks ta vee linna peale, seepärast vastavad targad tallinlased alati: ‘Ei, veel ehitatakse!’”',
        translation:
          '“Um dia, uma pedra enorme escorregou do colo de Linda e rolou para baixo”, contou o Heino. “Linda sentou-se na pedra e chorou tanto tempo e tão amargamente que das lágrimas dela nasceu o lago Ülemiste.” A Mia olhou para longe de olhos arregalados, como se procurasse o lago na escuridão. “E os antigos contam que, de vez em quando, sai do lago um velhinho de barba grisalha e pergunta: ‘A cidade já está pronta?’” O Heino levantou o dedo: “Se alguém respondesse que sim, ele soltaria a água sobre a cidade; por isso os tallinenses espertos sempre respondem: ‘Não, ainda estão construindo!’”',
        choices: [
          { text: 'Küsida, mis sai Kalevi ja Linda pojast.', translation: 'Perguntar o que aconteceu com o filho de Kalev e Linda.', next: 'poeg' },
          {
            text: '“Kui vanake küsib, tuleb kindlasti vastata, et linn on valmis.”',
            translation: '“Quando o velhinho perguntar, é preciso responder, sem falta, que a cidade está pronta.”',
            wrong: 'Nada disso! Segundo a lenda, se alguém respondesse que a cidade está pronta, o velhinho soltaria a água do lago sobre ela. Por isso os tallinenses espertos respondem “Ei, veel ehitatakse!” (Não, ainda estão construindo!).',
          },
        ],
      },
      poeg: {
        emoji: '⚔️',
        text: '“Nende poeg oli Kalevipoeg, meie rahvuseepose kangelane,” ütles Heino ja ajas end sirgu. “Kreutzwald pani eepose kokku rahvaluulest ja kirjutas selle vana regilaulu värsimõõdus, nii et read kõlavad nagu laul.” Heino rääkis, kuidas Kalevipoeg kündis põlde, ehitas linnuseid ja võitles vaenlastega, kuid tegi ka raskeid vigu, mille eest pidi kibedalt maksma. “Ta pole täiuslik kangelane,” ütles vanahärra, “ja just sellepärast on ta meie oma.” Mia noogutas tõsiselt, nagu mõistaks ta seda kõike.',
        translation:
          '“O filho deles era Kalevipoeg, o herói do nosso épico nacional”, disse o Heino, endireitando-se. “Kreutzwald montou o épico a partir do folclore e o escreveu na métrica da antiga canção rúnica, de modo que os versos soam como canto.” O Heino contou como Kalevipoeg lavrava campos, erguia fortalezas e lutava contra inimigos, mas também cometia erros graves, pelos quais teve de pagar amargamente. “Ele não é um herói perfeito”, disse o velho senhor, “e é justamente por isso que é nosso.” A Mia concordou com a cabeça, séria, como se entendesse tudo aquilo.',
        choices: [
          { text: 'Küsida, kuidas eepos lõpeb.', translation: 'Perguntar como o épico termina.', next: 'lopp' },
          { text: 'Vabandada ja minna ära, sest on juba hilja.', translation: 'Pedir licença e ir embora, porque já está tarde.', next: 'final_pime' },
        ],
      },
      lopp: {
        emoji: '🌌',
        text: 'Heino jäi hetkeks vait ja vaatas tumenevasse taevasse. “Lõpuks pannakse Kalevipoeg valvama põrgu väravat ja tema käsi jääb kaljusse kinni,” ütles ta vaikselt. “Aga eepos lubab, et ükskord ta vabaneb ja tuleb koju,” ja siis tsiteeris ta aeglaselt, rõhutades iga rida: “Oma lastel õnne tooma, / Eesti põlve uueks looma.” Need kaks rida kõlasid pimeduses nagu vana lubadus, mida keegi pole unustanud. Linu tundis, kuidas tal sulgede all midagi värisema hakkas.',
        translation:
          'O Heino ficou em silêncio por um instante e olhou para o céu que escurecia. “No fim, Kalevipoeg é posto de guarda no portão do inferno, e a mão dele fica presa na rocha”, disse baixinho. “Mas o épico promete que um dia ele se libertará e voltará para casa”, e então citou devagar, marcando cada verso: “Para trazer felicidade aos seus filhos, / para fazer nova a geração da Estônia.” Os dois versos soaram na escuridão como uma promessa antiga que ninguém esqueceu. O Linu sentiu algo estremecer debaixo das penas.',
        choices: [
          { text: 'Minna koos Heino ja Miaga Linda kuju juurde.', translation: 'Ir com o Heino e a Mia até a estátua de Linda.', next: 'lindamagi' },
          {
            text: '“Nii et eepos lõpeb sellega, et kõik on igaveseks läbi?”',
            translation: '“Então o épico termina com tudo acabado para sempre?”',
            wrong: 'Não: o Heino disse que o épico promete que um dia Kalevipoeg se libertará e voltará para casa (“ükskord ta vabaneb ja tuleb koju”), para trazer felicidade aos seus filhos e renovar a geração da Estônia.',
          },
        ],
      },
      lindamagi: {
        emoji: '🕯️',
        text: 'Toompea teisel küljel, Lindamäel, istus kivil kurb naisekuju, pilk suunatud kaugusse. “Siin ootab Linda ikka veel oma meest,” ütles Heino. “Nõukogude ajal toodi siia vaikselt lilli ja küünlaid nende mälestuseks, kes olid ära viidud ega tulnud enam tagasi.” Mia asetas kuju jalamile väikese vahtralehe, mille ta oli teelt korjanud. Linu mõtles, et vanad lood ei ole muuseumieksponaadid, vaid elavad edasi nendes, kes neid jutustavad.',
        translation:
          'Do outro lado de Toompea, no morro de Linda, uma figura de mulher triste estava sentada numa pedra, com o olhar perdido na distância. “Aqui Linda ainda espera o marido”, disse o Heino. “No tempo soviético, as pessoas traziam aqui, em silêncio, flores e velas em memória dos que tinham sido deportados e nunca voltaram.” A Mia colocou ao pé da estátua uma pequena folha de bordo que tinha apanhado no caminho. O Linu pensou que as velhas histórias não são peças de museu: continuam vivas em quem as conta.',
        choices: [{ text: 'Tänada Heinot loo eest.', translation: 'Agradecer ao Heino pela história.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Heino surus Linu tiiba ja ütles vanasõna, mida tema isa oli talle kunagi öelnud: “Kus viga näed laita, seal tule ja aita.” “Kalevipoeg tegi palju vigu,” selgitas ta, “aga ta tuli ikka ja jälle appi.” Hiljem, hotellitoas, kirjutas Linu märkmikku esimesed read omaenda regilaulust, algriimiga nagu vanadel lauljatel: “Linu laulab laia laulu, / meri müriseb mu meeles.” Ta naeratas: Kalevipoja lubadus polnud ainult eestlastele, vaid igaühele, kes tahab midagi uueks luua.',
        translation:
          'O Heino apertou a asa do Linu e disse um provérbio que o pai dele um dia lhe dissera: “Onde vê um erro para criticar, venha e ajude.” “Kalevipoeg cometeu muitos erros”, explicou ele, “mas sempre voltava para ajudar.” Mais tarde, no quarto do hotel, o Linu escreveu no caderno os primeiros versos da sua própria canção rúnica, com aliteração como os antigos cantores: “Linu canta um canto largo, / o mar ruge na minha mente.” Ele sorriu: a promessa de Kalevipoeg não era só para os estonianos, mas para qualquer um que queira fazer algo novo.',
        ending: { tone: 'bom', title: 'Canto largo', message: 'Você acompanhou as lendas de Toompea, entendeu o final do Kalevipoeg e ainda arriscou seus próprios versos aliterados.' },
      },
      final_pime: {
        emoji: '🌑',
        text: 'Linu vabandas, et peab minema, sest oli juba hilja. Heino noogutas ja ütles, et lugu jääb teda ootama, nagu Kalevipoeg põrgu väraval. Hotellis otsis Linu eepose lõpu internetist üles, aga ekraanilt loetuna tundus see kuidagi külm. Ta mõistis, et mõni lugu elab ainult siis, kui seda jutustab vanaisa pimeneval mäel.',
        translation:
          'O Linu pediu licença, porque já era tarde. O Heino concordou com a cabeça e disse que a história ficaria esperando por ele, como Kalevipoeg no portão do inferno. No hotel, o Linu procurou o final do épico na internet, mas, lido na tela, ele parecia meio frio. Ele entendeu que certas histórias só vivem quando um avô as conta num morro escurecendo.',
        ending: { tone: 'neutro', title: 'História pela metade', message: 'O fim do Kalevipoeg é uma promessa de volta — e soa bem melhor na voz de quem o conta.' },
      },
    },
  },
  // FIM
];
