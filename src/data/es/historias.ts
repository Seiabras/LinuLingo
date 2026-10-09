import type { StorySeed } from '../types';

/** Histórias interativas em espanhol: o Linu percorre os países hispânicos, 3 histórias por subnível. */
export const STORIES_ES: StorySeed[] = [
  {
    id: 'es-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Linu en Coyoacán',
    emoji: '🐧',
    summary: 'O Linu chega a Coyoacán e conhece a Lupita. Museu ou churros?',
    cultural_context:
      'Coyoacán, no sul da Cidade do México, tem um nome de origem náuatle, geralmente traduzido como “lugar dos coiotes”; na praça há uma fonte com dois coiotes. Ali fica a Casa Azul, onde Frida Kahlo nasceu e viveu, hoje um museu.',
    start: 'start',
    glossary: [
      ['¡Hola!', 'Oi! / Olá!'],
      ['¡Adiós!', 'Tchau! / Adeus! (para se despedir)'],
      ['soy', 'eu sou'],
      ['eres', 'você é (tú)'],
      ['¿Qué es esto?', 'O que é isto?'],
      ['la casa', 'a casa'],
      ['doce', 'doze (e não “doce” de açúcar!)'],
    ],
    nodes: {
      start: {
        emoji: '⛲',
        text: 'Coyoacán, Ciudad de México. Una fuente, dos coyotes y una chica.',
        translation: 'Coyoacán, Cidade do México. Uma fonte, dois coiotes e uma moça.',
        choices: [
          { text: '“¡Hola! Buenos días.”', translation: '“Oi! Bom dia.”', next: 'lupita' },
          {
            text: '“¡Adiós!”',
            translation: '“Tchau!”',
            wrong: 'O Linu acabou de chegar! “Adiós” é para ir embora. Para cumprimentar, diga “¡Hola!” ou “Buenos días”.',
          },
        ],
      },
      lupita: {
        emoji: '👧',
        text: '“¡Hola! Yo soy Lupita. ¿Y tú?”',
        translation: '“Oi! Eu sou a Lupita. E você?”',
        choices: [
          { text: '“Soy Linu. Soy un pingüino.”', translation: '“Sou o Linu. Sou um pinguim.”', next: 'brasil' },
          {
            text: '“Soy Lupita.”',
            translation: '“Sou a Lupita.”',
            wrong: 'Lupita é o nome DELA. Ela perguntou “¿Y tú?” (E você?). Responda com o seu: “Soy Linu”.',
          },
        ],
      },
      brasil: {
        emoji: '🧳',
        text: '“¿Eres de aquí?” —“No, soy de Brasil.”',
        translation: '“Você é daqui?” — “Não, sou do Brasil.”',
        choices: [
          { text: '“¿Qué es esa casa azul?”', translation: '“O que é aquela casa azul?”', next: 'casa' },
          { text: '“Mmm… ¿Qué es esto?”', translation: '“Hum… O que é isto?” (Tem um cheirinho de fritura no ar.)', next: 'churros' },
        ],
      },
      casa: {
        emoji: '💙',
        text: '“Es la Casa Azul. Es el museo de Frida Kahlo.”',
        translation: '“É a Casa Azul. É o museu da Frida Kahlo.”',
        choices: [{ text: '“¡Qué bonita! Gracias, Lupita.”', translation: '“Que bonita! Obrigado, Lupita.”', next: 'final_casa' }],
      },
      final_casa: {
        emoji: '🎉',
        text: 'Linu y Lupita entran. Las paredes son azules. ¡Es precioso!',
        translation: 'O Linu e a Lupita entram. As paredes são azuis. É lindo!',
        ending: { tone: 'bom', title: 'Um dia azul', message: 'O Linu fez uma amiga e conheceu a Casa Azul, em Coyoacán.' },
      },
      churros: {
        emoji: '🥖',
        text: '“¡Son churros!” Uno, dos, tres… ¡doce churros!',
        translation: '“São churros!” Um, dois, três… doze churros!',
        choices: [{ text: '“¡Doce! ¡Gracias!”', translation: '“Doze! Obrigado!”', next: 'final_churros' }],
      },
      final_churros: {
        emoji: '😵',
        text: 'Linu come doce churros. ¡Uf! ¿Y el museo? Mañana.',
        translation: 'O Linu come doze churros. Ufa! E o museu? Amanhã.',
        ending: { tone: 'neutro', title: 'Barriga cheia', message: 'Churros deliciosos, mas o Linu não viu a Casa Azul. Tente de novo!' },
      },
    },
  },
  {
    id: 'es-h2',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Arriba en Monserrate',
    emoji: '🚡',
    summary: 'Em Bogotá, o Linu sobe o cerro de Monserrate e faz um amigo no teleférico.',
    cultural_context:
      'O cerro de Monserrate, a mais de 3.000 metros de altitude, domina a paisagem de Bogotá; sobe-se de teleférico, de funicular ou a pé. Na Colômbia, muita gente usa “usted” até entre amigos e na família.',
    start: 'start',
    glossary: [
      ['llueve', 'chove (o “ll” soa quase como o “j” de “já” ou como “i”)'],
      ['el cerro', 'o morro'],
      ['el teleférico', 'o bondinho, teleférico'],
      ['usted', 'o senhor / a senhora / você (muito usado na Colômbia)'],
      ['¿De dónde es usted?', 'De onde você é?'],
      ['el colibrí', 'o beija-flor'],
      ['hotel', 'hotel (o “h” é mudo: “otél”)'],
    ],
    nodes: {
      start: {
        emoji: '⛰️',
        text: 'Bogotá. Llueve un poco. Allí está el cerro Monserrate.',
        translation: 'Bogotá. Chove um pouco. Ali está o cerro de Monserrate.',
        choices: [
          { text: 'Linu sube en el teleférico.', translation: 'O Linu sobe no teleférico.', next: 'nino' },
          { text: 'Linu vuelve al hotel.', translation: 'O Linu volta para o hotel.', next: 'hotel' },
        ],
      },
      hotel: {
        emoji: '🏨',
        text: 'Linu está en el hotel. Monserrate está allí, solo.',
        translation: 'O Linu está no hotel. Monserrate está lá, sozinho.',
        ending: { tone: 'neutro', title: 'Chuva de hotel', message: 'O Linu ficou seco, mas não viu Bogotá lá de cima. Que tal subir da próxima vez?' },
      },
      nino: {
        emoji: '👦',
        text: 'Hay un niño. “¡Hola! Soy Andrés. ¿De dónde es usted?”',
        translation: 'Tem um menino. “Oi! Sou o Andrés. De onde você é?”',
        choices: [
          { text: '“Soy de Brasil. Soy Linu.”', translation: '“Sou do Brasil. Sou o Linu.”', next: 'arriba' },
          {
            text: '“Soy un pingüino.”',
            translation: '“Sou um pinguim.”',
            wrong: 'Verdade, mas o Andrés perguntou “¿De dónde…?” (de onde?). Ele quer saber o país: “Soy de Brasil”.',
          },
        ],
      },
      arriba: {
        emoji: '🌫️',
        text: 'Arriba. ¡Bogotá es enorme! Y aquí, un pájaro muy pequeño.',
        translation: 'Lá em cima. Bogotá é enorme! E aqui, um pássaro muito pequeno.',
        choices: [
          { text: '“Andrés, ¿qué es eso?”', translation: '“Andrés, o que é aquilo?”', next: 'colibri' },
        ],
      },
      colibri: {
        emoji: '🐦',
        text: '“Es un colibrí. ¡Mire! Uno, dos, tres colibríes.”',
        translation: '“É um beija-flor. Olhe! Um, dois, três beija-flores.”',
        choices: [{ text: '“¡Qué bonitos! Gracias, Andrés.”', translation: '“Que bonitos! Obrigado, Andrés.”', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: '“De nada, Linu.” Andrés y Linu son amigos.',
        translation: '“De nada, Linu.” O Andrés e o Linu são amigos.',
        ending: { tone: 'bom', title: 'Amigo nas nuvens', message: 'O Linu subiu Monserrate, viu beija-flores e ganhou um amigo bogotano.' },
      },
    },
  },
  {
    id: 'es-h3',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Domingo en San Telmo',
    emoji: '🪗',
    summary: 'Na feira de San Telmo, em Buenos Aires, o Linu descobre o bandoneón e o tango.',
    cultural_context:
      'Aos domingos, a feira de San Telmo ocupa a rua Defensa e a praça Dorrego, em Buenos Aires, com antiguidades, música e casais dançando tango. O bandoneón, instrumento de fole parecido com uma sanfona, veio da Alemanha e virou a alma do tango.',
    start: 'start',
    glossary: [
      ['la feria', 'a feira'],
      ['Buenos días.', 'Bom dia.'],
      ['Buenas noches.', 'Boa noite.'],
      ['vos sos', 'você é (voseo argentino; no padrão: “tú eres”)'],
      ['el bandoneón', 'bandoneón, instrumento de fole do tango'],
      ['la bailarina', 'a dançarina'],
      ['¡Chau!', 'Tchau! (bem comum na Argentina)'],
    ],
    nodes: {
      start: {
        emoji: '☀️',
        text: 'Buenos Aires. Es domingo, son las once de la mañana. Es la feria de San Telmo.',
        translation: 'Buenos Aires. É domingo, são onze da manhã. É a feira de San Telmo.',
        choices: [
          { text: 'Linu escucha la música.', translation: 'O Linu escuta a música.', next: 'musico' },
          { text: 'Linu mira las antigüedades.', translation: 'O Linu olha as antiguidades.', next: 'reloj' },
        ],
      },
      reloj: {
        emoji: '🕰️',
        text: 'Hay relojes viejos: uno, dos… ¡veinte relojes! Linu mira y mira.',
        translation: 'Tem relógios velhos: um, dois… vinte relógios! O Linu olha e olha.',
        ending: { tone: 'neutro', title: 'Vinte relógios', message: 'Relógios lindos, mas o tango passou e o Linu nem ouviu. Tente de novo!' },
      },
      musico: {
        emoji: '👴',
        text: 'Un señor y un instrumento. “¡Hola! Soy Carlos. ¿Vos sos turista?”',
        translation: 'Um senhor e um instrumento. “Oi! Sou o Carlos. Você é turista?”',
        choices: [
          { text: '“Buenos días. Sí, soy turista. Soy de Brasil.”', translation: '“Bom dia. Sim, sou turista. Sou do Brasil.”', next: 'bandoneon' },
          {
            text: '“Buenas noches. Sí, soy turista.”',
            translation: '“Boa noite. Sim, sou turista.”',
            wrong: 'São onze da manhã! “Buenas noches” é para a noite. De manhã se diz “Buenos días”.',
          },
        ],
      },
      bandoneon: {
        emoji: '🪗',
        text: '“¡Qué bueno! Este es un bandoneón. Es para el tango.”',
        translation: '“Que legal! Este é um bandoneón. É para o tango.”',
        choices: [
          { text: '“¿Y ella? ¿Quién es?”', translation: '“E ela? Quem é?”', next: 'sofia' },
          { text: '“Gracias. ¡Chau!”', translation: '“Obrigado. Tchau!”', next: 'final_chau' },
        ],
      },
      sofia: {
        emoji: '💃',
        text: '“Es Sofía. Es bailarina. ¿Vos sos bailarín, Linu?”',
        translation: '“É a Sofia. É dançarina. Você é dançarino, Linu?”',
        choices: [
          { text: '“No, soy un pingüino. ¡Pero un tango, sí!”', translation: '“Não, sou um pinguim. Mas um tango, topo!”', next: 'final_tango' },
          {
            text: '“No, soy Sofía.”',
            translation: '“Não, sou a Sofia.”',
            wrong: 'A bailarina é a Sofia! O Carlos perguntou se VOCÊ (“vos”) é dançarino. “Vos sos” = “tú eres”.',
          },
        ],
      },
      final_tango: {
        emoji: '🎉',
        text: 'Carlos toca. Sofía y Linu bailan un tango. ¡Bravo!',
        translation: 'O Carlos toca. A Sofia e o Linu dançam um tango. Bravo!',
        ending: { tone: 'bom', title: 'Tango na praça', message: 'O Linu dançou tango ao som do bandoneón, na feira de San Telmo.' },
      },
      final_chau: {
        emoji: '👋',
        text: '“¡Chau, Linu!” Linu camina. Atrás, la música.',
        translation: '“Tchau, Linu!” O Linu vai andando. Atrás, a música.',
        ending: { tone: 'neutro', title: 'Tchau cedo demais', message: 'O Linu conheceu o bandoneón, mas foi embora antes do tango começar.' },
      },
    },
  },
  {
    id: 'es-h4',
    level: 'A1.2',
    cefr: 'A1',
    title: 'El puente de los Suspiros',
    emoji: '🌉',
    summary: 'Em Barranco, Lima, o Linu atravessa uma ponte com uma lenda e descobre um doce peruano.',
    cultural_context:
      'A Ponte dos Suspiros, no bairro boêmio de Barranco, em Lima, tem uma lenda: quem a atravessa pela primeira vez prendendo a respiração realiza um desejo. Os picarones, argolas fritas de massa de abóbora e batata-doce com melado de “chancaca”, são um doce típico do Peru.',
    start: 'start',
    glossary: [
      ['el puente', 'a ponte (em espanhol é masculino!)'],
      ['respirar', 'respirar'],
      ['el deseo', 'o desejo'],
      ['tener hambre', 'ter fome (“el hambre” é feminino: “mucha hambre”)'],
      ['la miel', 'o mel / o melado (em espanhol é feminino!)'],
      ['exquisito', 'delicioso (falso amigo: não é “esquisito”!)'],
      ['me gusta / me gustan', 'eu gosto (de algo / de várias coisas)'],
    ],
    nodes: {
      start: {
        emoji: '🏘️',
        text: 'Linu camina por Barranco, en Lima. Hay casas de colores y muchas flores.',
        translation: 'O Linu caminha por Barranco, em Lima. Há casas coloridas e muitas flores.',
        choices: [
          { text: 'Linu cruza el puente de los Suspiros.', translation: 'O Linu atravessa a Ponte dos Suspiros.', next: 'puente' },
          { text: 'Linu entra en un café.', translation: 'O Linu entra num café.', next: 'cafe' },
        ],
      },
      cafe: {
        emoji: '☕',
        text: 'En el café hay música y libros. Linu toma un café y lee toda la tarde.',
        translation: 'No café há música e livros. O Linu toma um café e lê a tarde toda.',
        ending: { tone: 'neutro', title: 'Tarde tranquila', message: 'Foi gostoso, mas o Linu não conheceu a ponte nem a lenda. Tente de novo!' },
      },
      puente: {
        emoji: '👩',
        text: 'Una chica, Rosa, habla con Linu. “Si cruzas el puente sin respirar, tu deseo se cumple.”',
        translation: 'Uma moça, a Rosa, fala com o Linu. “Se você atravessa a ponte sem respirar, seu desejo se realiza.”',
        choices: [
          { text: 'Linu no respira y cruza el puente.', translation: 'O Linu prende a respiração e atravessa a ponte.', next: 'deseo' },
          {
            text: 'Linu respira mucho y canta en el puente.',
            translation: 'O Linu respira fundo e canta na ponte.',
            wrong: 'A Rosa disse “sin respirar” (sem respirar): para o desejo se realizar, é preciso prender a respiração.',
          },
        ],
      },
      deseo: {
        emoji: '😮‍💨',
        text: '¡Uf! Linu cruza sin respirar. Rosa pregunta: “¿Tienes hambre? Aquí hay picarones.”',
        translation: 'Ufa! O Linu atravessa sem respirar. A Rosa pergunta: “Você está com fome? Aqui tem picarones.”',
        choices: [
          { text: '“¡Sí, tengo mucha hambre!”', translation: '“Sim, estou com muita fome!”', next: 'picarones' },
          { text: '“No, gracias. Me gusta caminar.”', translation: '“Não, obrigado. Eu gosto de caminhar.”', next: 'mar' },
        ],
      },
      mar: {
        emoji: '🌊',
        text: 'Linu y Rosa bajan hasta el mar. Hay olas grandes y muchos surfistas.',
        translation: 'O Linu e a Rosa descem até o mar. Há ondas grandes e muitos surfistas.',
        ending: { tone: 'neutro', title: 'Barriga vazia', message: 'Que vista! Mas o Linu voltou sem provar os picarones de Barranco.' },
      },
      picarones: {
        emoji: '🍩',
        text: 'Una señora vende picarones con miel. “¡Son exquisitos!”, dice.',
        translation: 'Uma senhora vende picarones com melado. “São deliciosos!”, diz ela.',
        choices: [
          { text: 'Linu compra seis picarones.', translation: 'O Linu compra seis picarones.', next: 'final_bom' },
          {
            text: '“No, gracias. No como cosas raras.”',
            translation: '“Não, obrigado. Eu não como coisas estranhas.”',
            wrong: 'Falso amigo! “Exquisito” quer dizer DELICIOSO, e não “esquisito”. Estranho, em espanhol, é “raro”.',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu y Rosa comen los picarones. ¡A Linu le gustan mucho! ¿Y el deseo? Es un secreto.',
        translation: 'O Linu e a Rosa comem os picarones. O Linu gosta muito deles! E o desejo? É segredo.',
        ending: { tone: 'bom', title: 'Desejo e melado', message: 'O Linu atravessou a Ponte dos Suspiros sem respirar e provou picarones com uma nova amiga.' },
      },
    },
  },
  {
    id: 'es-h5',
    level: 'A1.2',
    cefr: 'A1',
    title: 'La Esquina Caliente',
    emoji: '⚾',
    summary: 'Em Havana, o Linu descobre onde os cubanos discutem beisebol e ganha um convite para o jogo.',
    cultural_context:
      'O beisebol é o esporte mais popular de Cuba. No Parque Central de Havana fica a “Esquina Caliente”, onde torcedores se reúnem para discutir os jogos, e o time da cidade, o Industriales, joga no Estádio Latinoamericano.',
    start: 'start',
    glossary: [
      ['hablar alto', 'falar alto'],
      ['caliente', 'quente (aqui: acalorado, animado)'],
      ['el béisbol', 'o beisebol'],
      ['el equipo', 'o time, a equipe'],
      ['tener', 'ter (tengo, tienes, tiene)'],
      ['el partido', 'a partida, o jogo (não é partido político!)'],
      ['esta noche', 'hoje à noite'],
    ],
    nodes: {
      start: {
        emoji: '🌴',
        text: 'La Habana. Linu camina por el Parque Central. Hay muchos señores y todos hablan alto.',
        translation: 'Havana. O Linu caminha pelo Parque Central. Há muitos senhores e todos falam alto.',
        choices: [
          { text: 'Linu pregunta: “¿Qué pasa aquí?”', translation: 'O Linu pergunta: “O que está acontecendo aqui?”', next: 'esquina' },
          { text: 'Linu camina hasta el Malecón.', translation: 'O Linu caminha até o Malecón.', next: 'malecon' },
        ],
      },
      malecon: {
        emoji: '🌅',
        text: 'Linu mira el mar desde el Malecón. El sol baja y el cielo está naranja.',
        translation: 'O Linu olha o mar do Malecón. O sol se põe e o céu fica laranja.',
        ending: { tone: 'neutro', title: 'Pôr do sol sozinho', message: 'Um pôr do sol lindo, mas o Linu não descobriu por que aqueles senhores falavam tão alto.' },
      },
      esquina: {
        emoji: '👴',
        text: 'Un señor, Ramón, contesta: “Es la Esquina Caliente. Aquí hablamos de béisbol.”',
        translation: 'Um senhor, o Ramón, responde: “É a Esquina Caliente. Aqui a gente fala de beisebol.”',
        choices: [
          { text: '“¿Béisbol? ¡Me gusta mucho!”', translation: '“Beisebol? Eu gosto muito!”', next: 'equipo' },
          {
            text: '“Ah, ¿aquí venden comida caliente?”',
            translation: '“Ah, aqui vendem comida quente?”',
            wrong: 'O Ramón disse “Aquí hablamos de béisbol”: é um lugar para conversar sobre beisebol. “Caliente” é por causa das discussões acaloradas.',
          },
        ],
      },
      equipo: {
        emoji: '🧢',
        text: '“¿Tienes un equipo favorito?” Linu no tiene equipo. En Brasil, le gusta el fútbol.',
        translation: '“Você tem um time favorito?” O Linu não tem time. No Brasil, ele gosta de futebol.',
        choices: [
          { text: '“No tengo equipo. ¿Y usted?”', translation: '“Não tenho time. E o senhor?”', next: 'partido' },
          {
            text: '“Sí, tengo tres equipos.”',
            translation: '“Sim, tenho três times.”',
            wrong: 'O texto diz “Linu no tiene equipo”: o Linu NÃO tem time de beisebol. Ele gosta mesmo é de futebol.',
          },
        ],
      },
      partido: {
        emoji: '🏟️',
        text: '“¡Yo soy de Industriales! Esta noche hay un partido, a las siete. ¿Vienes?”',
        translation: '“Eu sou do Industriales! Hoje à noite tem um jogo, às sete. Você vem?”',
        choices: [
          { text: 'Linu llega al estadio a las siete de la noche.', translation: 'O Linu chega ao estádio às sete da noite.', next: 'final_bom' },
          {
            text: 'Linu llega al estadio a las siete de la mañana.',
            translation: 'O Linu chega ao estádio às sete da manhã.',
            wrong: 'O Ramón disse “esta noche” (hoje à noite). Às sete da manhã o estádio está vazio!',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'En el estadio hay mucha gente. Linu y Ramón gritan: “¡Dale, Industriales!”',
        translation: 'No estádio há muita gente. O Linu e o Ramón gritam: “Vai, Industriales!”',
        ending: { tone: 'bom', title: 'Torcedor cubano', message: 'O Linu descobriu a Esquina Caliente e viu seu primeiro jogo de beisebol em Havana.' },
      },
    },
  },
  {
    id: 'es-h6',
    level: 'A1.2',
    cefr: 'A1',
    title: 'La guitarra de Triana',
    emoji: '🎸',
    summary: 'Em Sevilha, o Linu prova uma laranja da rua e procura flamenco no bairro de Triana.',
    cultural_context:
      'O flamenco, nascido na Andaluzia, é Patrimônio Cultural Imaterial da Humanidade pela UNESCO desde 2010. As laranjeiras que enfeitam as ruas de Sevilha dão laranjas amargas, que não se comem cruas: são usadas sobretudo para fazer geleia.',
    start: 'start',
    glossary: [
      ['el naranjo', 'a laranjeira'],
      ['amargo', 'amargo'],
      ['hay', 'há / tem'],
      ['me gusta', 'eu gosto (literalmente: me agrada)'],
      ['tocar la guitarra', 'tocar violão (em espanhol, “guitarra” é o violão)'],
      ['cantar y bailar', 'cantar e dançar'],
      ['¿Bailáis?', 'Vocês dançam? (forma de “vosotros”, usada na Espanha)'],
    ],
    nodes: {
      start: {
        emoji: '🍊',
        text: 'Linu está en Sevilla. En la calle hay muchos naranjos.',
        translation: 'O Linu está em Sevilha. Na rua há muitas laranjeiras.',
        choices: [
          { text: '“¡Qué bonito! ¿Hay naranjas para comer?”', translation: '“Que bonito! Tem laranjas para comer?”', next: 'naranja' },
          { text: '“Busco música. ¿Dónde hay flamenco?”', translation: '“Procuro música. Onde tem flamenco?”', next: 'triana' },
        ],
      },
      naranja: {
        emoji: '👵',
        text: 'Una señora dice: “No, estas naranjas son amargas.” Linu come una. ¡Puaj!',
        translation: 'Uma senhora diz: “Não, estas laranjas são amargas.” O Linu come uma. Eca!',
        choices: [
          { text: '“Usted tiene razón. No me gusta.”', translation: '“A senhora tem razão. Não gosto.”', next: 'triana' },
          {
            text: '“¡Qué dulce! Me gusta mucho.”',
            translation: '“Que doce! Gosto muito.”',
            wrong: 'A senhora avisou que as laranjas são “amargas”, e o Linu fez “¡Puaj!” (eca!). Elas não estão nada doces.',
          },
        ],
      },
      triana: {
        emoji: '🌉',
        text: 'Linu cruza el río y llega a Triana. Allí un chico toca la guitarra.',
        translation: 'O Linu atravessa o rio e chega a Triana. Ali um rapaz toca violão.',
        choices: [{ text: '“¡Hola! ¿Tocas flamenco?”', translation: '“Oi! Você toca flamenco?”', next: 'pablo' }],
      },
      pablo: {
        emoji: '🎸',
        text: '“Sí, toco flamenco. Me llamo Pablo. Mi hermana Lucía canta y baila.”',
        translation: '“Sim, toco flamenco. Eu me chamo Pablo. Minha irmã Lucía canta e dança.”',
        choices: [
          { text: '“¡Qué bien! ¿Dónde está Lucía?”', translation: '“Que legal! Onde está a Lucía?”', next: 'lucia' },
          {
            text: '“Entonces tú cantas, ¿verdad?”',
            translation: '“Então você canta, né?”',
            wrong: 'O Pablo toca (“toco”) o violão. Quem canta e dança é a irmã dele, a Lucía (“canta y baila”).',
          },
        ],
      },
      lucia: {
        emoji: '💃',
        text: 'Lucía llega con una flor roja. “¡Hola, chicos! ¿Bailáis conmigo?”',
        translation: 'A Lucía chega com uma flor vermelha. “Oi, meninos! Vocês dançam comigo?”',
        choices: [
          { text: '“¡Sí! Me gusta bailar.”', translation: '“Sim! Eu gosto de dançar.”', next: 'final_baile' },
          { text: '“No, gracias. Me gusta escuchar.”', translation: '“Não, obrigado. Eu gosto de ouvir.”', next: 'final_escuchar' },
        ],
      },
      final_baile: {
        emoji: '🎉',
        text: 'Pablo toca, Lucía canta y Linu baila. ¡Olé!',
        translation: 'O Pablo toca, a Lucía canta e o Linu dança. Olé!',
        ending: { tone: 'bom', title: 'Flamenco em Triana!', message: 'O Linu dançou flamenco com dois amigos novos, às margens do rio Guadalquivir.' },
      },
      final_escuchar: {
        emoji: '👏',
        text: 'Linu escucha y aplaude. La música es muy bonita.',
        translation: 'O Linu escuta e aplaude. A música é muito bonita.',
        ending: { tone: 'neutro', title: 'Plateia de luxo', message: 'O Linu não dançou, mas ouviu flamenco de verdade em Triana. Da próxima vez, quem sabe?' },
      },
    },
  },
  {
    id: 'es-h7',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Un domingo en la rambla',
    emoji: '🧉',
    summary: 'Em Montevidéu, o Linu conhece a Martina na rambla e aprende a tomar mate do jeito uruguaio.',
    cultural_context:
      'A Rambla de Montevidéu acompanha o Rio da Prata por mais de 20 km e é o grande ponto de encontro da cidade. No Uruguai o mate se toma a toda hora; na roda, quem serve enche a cuia e a passa a cada pessoa, que a devolve depois de beber.',
    start: 'start',
    glossary: [
      ['sos / querés / venís / podés', 'você é / quer / vem / pode (voseo: no Uruguai se usa “vos” no lugar de “tú”)'],
      ['la rambla', 'a avenida à beira do rio (ou do mar)'],
      ['alquilar', 'alugar'],
      ['estar cansado', 'estar cansado'],
      ['un rato', 'um tempinho (nada a ver com o bicho, que é “ratón”)'],
      ['es amargo, pero está rico', 'é amargo, mas está gostoso'],
      ['el termo', 'a garrafa térmica'],
      ['nunca he visto', 'nunca vi (pretérito perfecto)'],
    ],
    nodes: {
      start: {
        emoji: '🌊',
        text: 'Es domingo en Montevideo y la rambla está llena de gente. Una chica con una bicicleta le dice a Linu: “¡Hola! Soy Martina. ¿Sos turista?”',
        translation: 'É domingo em Montevidéu e a rambla está cheia de gente. Uma moça com uma bicicleta diz ao Linu: “Oi! Eu sou a Martina. Você é turista?”',
        choices: [
          { text: '“Sí, soy de Brasil. Estoy de vacaciones.”', translation: '“Sim, sou do Brasil. Estou de férias.”', next: 'plan' },
          {
            text: '“Sí, estoy turista.”',
            translation: '“Sim, estou turista.”',
            wrong: 'O que a pessoa é (turista, brasileiro, estudante) vai com “ser”: “Soy turista”. “Estar” fica para estados e situações: “Estoy de vacaciones”.',
          },
        ],
      },
      plan: {
        emoji: '🚲',
        text: '“¡Bienvenido! Hoy quiero recorrer la rambla. ¿Venís conmigo? Podés alquilar una bici allí.”',
        translation: '“Bem-vindo! Hoje eu quero percorrer a rambla. Você vem comigo? Pode alugar uma bici ali.”',
        choices: [
          { text: '“¡Sí! Quiero ir en bici.”', translation: '“Sim! Quero ir de bici.”', next: 'bici' },
          { text: '“Prefiero caminar. ¿Caminamos juntos?”', translation: '“Prefiro caminhar. Vamos caminhar juntos?”', next: 'caminar' },
        ],
      },
      bici: {
        emoji: '🚴',
        text: 'Linu y Martina pedalean al lado del río. Después de una hora, Linu está muy cansado, pero Martina no.',
        translation: 'O Linu e a Martina pedalam ao lado do rio. Depois de uma hora, o Linu está muito cansado, mas a Martina não.',
        choices: [
          { text: '“Estoy cansado. ¿Paramos un rato?”', translation: '“Estou cansado. Vamos parar um pouco?”', next: 'mate' },
          {
            text: '“Martina, estás muy cansada. ¿Paramos?”',
            translation: '“Martina, você está muito cansada. Vamos parar?”',
            wrong: 'Quem está cansado é o Linu (“Linu está muy cansado”). A Martina não (“pero Martina no”).',
          },
        ],
      },
      caminar: {
        emoji: '🚶',
        text: 'Caminan despacio al lado del río. Martina dice: “Este río es tan ancho que parece el mar. Desde aquí nunca he visto la otra orilla.”',
        translation: 'Eles caminham devagar ao lado do rio. A Martina diz: “Este rio é tão largo que parece o mar. Daqui eu nunca vi a outra margem.”',
        choices: [{ text: '“¡Es verdad! Parece el mar.”', translation: '“É verdade! Parece o mar.”', next: 'mate' }],
      },
      mate: {
        emoji: '🧉',
        text: 'Se sientan en un banco. Martina saca su termo y su mate. “¿Querés probar? Es amargo, pero está rico.”',
        translation: 'Eles se sentam num banco. A Martina tira a garrafa térmica e a cuia de mate. “Quer provar? É amargo, mas está gostoso.”',
        choices: [
          { text: '“Sí, quiero probar.”', translation: '“Sim, quero provar.”', next: 'probar' },
          { text: '“No, gracias. Prefiero agua.”', translation: '“Não, obrigado. Prefiro água.”', next: 'final_agua' },
        ],
      },
      probar: {
        emoji: '😋',
        text: 'Linu prueba el mate. Está caliente y amargo. Martina se ríe: “Ahora me devolvés el mate. ¡Es la costumbre!”',
        translation: 'O Linu prova o mate. Está quente e amargo. A Martina ri: “Agora você me devolve o mate. É o costume!”',
        choices: [
          { text: '“¡Está rico! Toma, Martina.”', translation: '“Está gostoso! Tome, Martina.”', next: 'final_mate' },
          {
            text: '“¡Gracias! Me llevo el mate de regalo.”',
            translation: '“Obrigado! Levo o mate de presente.”',
            wrong: 'A Martina explicou o costume: o mate volta para quem serve (“me devolvés el mate”) e passa de mão em mão. Não é presente!',
          },
        ],
      },
      final_mate: {
        emoji: '🌅',
        text: 'El sol se pone sobre el río. Linu y Martina toman mate y hablan hasta la noche. ¡Qué buen domingo!',
        translation: 'O sol se põe sobre o rio. O Linu e a Martina tomam mate e conversam até a noite. Que domingo bom!',
        ending: { tone: 'bom', title: 'Amigos de mate', message: 'O Linu aprendeu a roda do mate e ganhou uma amiga uruguaia na rambla.' },
      },
      final_agua: {
        emoji: '💧',
        text: 'Linu toma agua y Martina toma su mate. Hoy ha sido un domingo tranquilo en la rambla.',
        translation: 'O Linu toma água e a Martina toma o mate dela. Hoje foi um domingo tranquilo na rambla.',
        ending: { tone: 'neutro', title: 'Domingo tranquilo', message: 'Foi um passeio bom, mas o Linu ficou sem provar a bebida mais uruguaia de todas.' },
      },
    },
  },
  {
    id: 'es-h8',
    level: 'A2.1',
    cefr: 'A2',
    title: 'La mitad del mundo',
    emoji: '🌍',
    summary: 'Em Quito, o Linu enfrenta a altitude e vai à linha do Equador fazer um experimento com um ovo.',
    cultural_context:
      'Quito fica a cerca de 2.850 m de altitude, uma das capitais mais altas do mundo, e o país inteiro leva o nome da linha do Equador. O monumento Mitad del Mundo, ao norte da cidade, marca a linha calculada no século XVIII por uma expedição científica franco-espanhola; medições modernas com GPS mostram que o equador real passa a algumas centenas de metros dali.',
    start: 'start',
    glossary: [
      ['el soroche', 'o mal da altitude (palavra andina)'],
      ['me duele la cabeza', 'estou com dor de cabeça'],
      ['despacio', 'devagar (nada a ver com “espaço”)'],
      ['la mitad', 'a metade'],
      ['el huevo', 'o ovo'],
      ['el clavo', 'o prego'],
      ['de pie', 'em pé'],
      ['he aprendido', 'aprendi (pretérito perfecto)'],
    ],
    nodes: {
      start: {
        emoji: '🏔️',
        text: 'Linu ha llegado a Quito esta mañana. Un chico, Andrés, lo saluda: “¡Bienvenido! Quito está a 2.850 metros de altura. ¿Cómo te sientes?”',
        translation: 'O Linu chegou a Quito hoje de manhã. Um rapaz, o Andrés, o cumprimenta: “Bem-vindo! Quito fica a 2.850 metros de altitude. Como você se sente?”',
        choices: [
          { text: '“Me duele un poco la cabeza.”', translation: '“Estou com um pouco de dor de cabeça.”', next: 'soroche' },
          { text: '“¡Me siento muy bien! Quiero ver todo.”', translation: '“Eu me sinto muito bem! Quero ver tudo.”', next: 'mitad' },
        ],
      },
      soroche: {
        emoji: '💧',
        text: '“Es el soroche, el mal de altura. Bebe mucha agua y camina despacio hoy.”',
        translation: '“É o soroche, o mal da altitude. Beba muita água e caminhe devagar hoje.”',
        choices: [
          { text: '“Gracias. Bebo agua y camino despacio.”', translation: '“Obrigado. Bebo água e caminho devagar.”', next: 'mitad' },
          {
            text: '“¡Perfecto! Entonces corro por toda la ciudad.”',
            translation: '“Perfeito! Então vou correr pela cidade toda.”',
            wrong: 'O Andrés recomendou caminhar devagar (“camina despacio”) e beber água, porque a altitude cansa. Correr hoje não é boa ideia!',
          },
        ],
      },
      mitad: {
        emoji: '🟨',
        text: 'Por la tarde van a la Mitad del Mundo, al norte de Quito. En el suelo hay una línea amarilla. Andrés explica: “Este lado es el hemisferio norte y ese lado es el hemisferio sur.”',
        translation: 'À tarde eles vão à Mitad del Mundo, ao norte de Quito. No chão há uma linha amarela. O Andrés explica: “Este lado é o hemisfério norte e aquele lado é o hemisfério sul.”',
        choices: [
          { text: '“¡Pongo una pata en cada hemisferio!”', translation: '“Vou pôr uma pata em cada hemisfério!”', next: 'pata' },
          { text: '“¿Qué experimentos hacen aquí?”', translation: '“Que experimentos fazem aqui?”', next: 'huevo' },
        ],
      },
      pata: {
        emoji: '🐧',
        text: 'Linu pone una pata en el norte y otra en el sur. Andrés le toma una foto: “¡Ahora estás en dos hemisferios!”',
        translation: 'O Linu põe uma pata no norte e outra no sul. O Andrés tira uma foto dele: “Agora você está em dois hemisférios!”',
        choices: [{ text: '“¡Genial! ¿Y ahora qué hacemos?”', translation: '“Genial! E agora, o que fazemos?”', next: 'huevo' }],
      },
      huevo: {
        emoji: '🥚',
        text: 'Andrés trae un huevo y un clavo. “Aquí la gente pone un huevo de pie sobre la cabeza de un clavo. ¿Tú lo has hecho alguna vez?”',
        translation: 'O Andrés traz um ovo e um prego. “Aqui as pessoas colocam um ovo em pé sobre a cabeça de um prego. Você já fez isso alguma vez?”',
        choices: [{ text: '“No, nunca lo he hecho. ¡Quiero intentarlo!”', translation: '“Não, nunca fiz. Quero tentar!”', next: 'intento' }],
      },
      intento: {
        emoji: '🤞',
        text: 'Linu lo intenta una vez, dos veces, tres veces… ¡y el huevo está de pie! Andrés sonríe: “No es magia. Con paciencia, también funciona en tu casa.”',
        translation: 'O Linu tenta uma vez, duas vezes, três vezes… e o ovo fica em pé! O Andrés sorri: “Não é mágica. Com paciência, também funciona na sua casa.”',
        choices: [
          { text: '“¿Entonces no es por la línea del ecuador?”', translation: '“Então não é por causa da linha do equador?”', next: 'ciencia' },
          {
            text: '“¡Qué bien! Solo funciona aquí, en la línea.”',
            translation: '“Que legal! Só funciona aqui, na linha.”',
            wrong: 'O Andrés disse o contrário: não é mágica (“no es magia”) e funciona também em casa (“también funciona en tu casa”).',
          },
        ],
      },
      ciencia: {
        emoji: '🔬',
        text: '“No. Es un truco de paciencia. Además, con GPS hemos medido el ecuador verdadero: está a unos cientos de metros de aquí.”',
        translation: '“Não. É um truque de paciência. Além disso, com GPS medimos o equador verdadeiro: ele fica a algumas centenas de metros daqui.”',
        choices: [
          { text: '“¡Hoy he aprendido mucho! Gracias, Andrés.”', translation: '“Hoje aprendi muito! Obrigado, Andrés.”', next: 'final_ciencia' },
          { text: '“¿Qué? ¡Entonces mi foto no vale!”', translation: '“O quê? Então minha foto não vale!”', next: 'final_foto' },
        ],
      },
      final_ciencia: {
        emoji: '🎓',
        text: 'Por la noche, Linu escribe en su diario: “Hoy he estado en la mitad del mundo y he aprendido mucha ciencia.”',
        translation: 'À noite, o Linu escreve no diário: “Hoje estive na metade do mundo e aprendi muita ciência.”',
        ending: { tone: 'bom', title: 'Cientista do Equador', message: 'O Linu equilibrou um ovo, venceu o soroche e descobriu que a ciência desmonta até os mitos mais famosos.' },
      },
      final_foto: {
        emoji: '📸',
        text: 'Linu mira su foto y se ríe. “Bueno, no estoy en dos hemisferios, pero la foto es muy bonita.”',
        translation: 'O Linu olha a foto e ri. “Bom, não estou em dois hemisférios, mas a foto é muito bonita.”',
        ending: { tone: 'neutro', title: 'Quase no equador', message: 'A foto não está exatamente na linha, mas virou a lembrança mais engraçada da viagem.' },
      },
    },
  },
  {
    id: 'es-h9',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Chapulines en el mercado',
    emoji: '🦗',
    summary: 'Num mercado de Oaxaca, o Linu vai à barraca de dona Rosa. Gafanhotos crocantes ou chocolate quente?',
    cultural_context:
      'Oaxaca é chamada de “terra dos sete moles”, e seus mercados vendem chapulines, gafanhotos tostados com alho, limão e chile, comidos na região desde antes da chegada dos espanhóis. O chocolate oaxaquenho é moído com açúcar, canela e muitas vezes amêndoas, e se toma com pão de gema.',
    start: 'start',
    glossary: [
      ['exquisito', 'delicioso (falso amigo: não quer dizer “esquisito”)'],
      ['el chapulín', 'o gafanhoto (palavra mexicana, vinda do náuatle)'],
      ['crujiente', 'crocante'],
      ['picante', 'apimentado'],
      ['la leche', 'o leite (em espanhol é feminino)'],
      ['huele a canela', 'tem cheiro de canela'],
      ['¿Has probado…?', 'Você já provou…?'],
      ['mojar', 'molhar (aqui: mergulhar o pão)'],
    ],
    nodes: {
      start: {
        emoji: '🌶️',
        text: 'Linu está en un mercado de Oaxaca. Huele a chocolate, a chile y a tortillas. Una señora, doña Rosa, le pregunta: “¿Qué quieres probar, joven?”',
        translation: 'O Linu está num mercado de Oaxaca. Tem cheiro de chocolate, de pimenta e de tortilhas. Uma senhora, dona Rosa, pergunta: “O que você quer provar, rapaz?”',
        choices: [
          { text: '“Quiero probar algo típico.”', translation: '“Quero provar algo típico.”', next: 'chapulines' },
          { text: '“¿Tiene chocolate caliente?”', translation: '“A senhora tem chocolate quente?”', next: 'chocolate' },
        ],
      },
      chapulines: {
        emoji: '🧺',
        text: 'Doña Rosa le muestra una canasta llena de algo rojo. “Son chapulines con chile y limón. ¡Están exquisitos!”',
        translation: 'Dona Rosa lhe mostra uma cesta cheia de uma coisa vermelha. “São chapulines com pimenta e limão. Estão deliciosos!”',
        choices: [
          { text: '“¿Chapulines? ¿Qué son?”', translation: '“Chapulines? O que são?”', next: 'que_son' },
          {
            text: '“¿Exquisitos? Entonces no, gracias. No me gusta la comida rara.”',
            translation: '“Esquisitos? Então não, obrigado. Não gosto de comida estranha.”',
            wrong: 'Falso amigo! Em espanhol, “exquisito” quer dizer delicioso, requintado, e não “esquisito” (que seria “raro”). A dona Rosa está elogiando os chapulines.',
          },
        ],
      },
      que_son: {
        emoji: '😮',
        text: '“Son saltamontes. Aquí los comemos desde hace muchos siglos.” Linu mira la canasta: los chapulines son pequeños y crujientes.',
        translation: '“São gafanhotos. Aqui nós os comemos há muitos séculos.” O Linu olha a cesta: os chapulines são pequenos e crocantes.',
        choices: [
          { text: '“Bueno, pruebo uno.”', translation: '“Tá bom, vou provar um.”', next: 'probar' },
          { text: '“Hoy no. ¿Tiene chocolate?”', translation: '“Hoje não. A senhora tem chocolate?”', next: 'chocolate' },
        ],
      },
      probar: {
        emoji: '😋',
        text: 'Linu prueba un chapulín. Está salado, un poco picante y muy crujiente. “¡Nunca he comido algo así!”',
        translation: 'O Linu prova um chapulín. Está salgado, um pouco apimentado e muito crocante. “Nunca comi nada assim!”',
        choices: [
          { text: '“¡Me gusta! ¿Me da una bolsita?”', translation: '“Gostei! A senhora me dá um saquinho?”', next: 'final_chapulines' },
          { text: '“Está rico, pero ahora quiero algo dulce.”', translation: '“Está gostoso, mas agora quero algo doce.”', next: 'chocolate' },
        ],
      },
      chocolate: {
        emoji: '🍫',
        text: 'Doña Rosa le sirve una taza. “Es chocolate de agua, sin leche. Lo preparamos con cacao, azúcar y canela.”',
        translation: 'Dona Rosa lhe serve uma xícara. “É chocolate de água, sem leite. Nós o preparamos com cacau, açúcar e canela.”',
        choices: [
          { text: '“Mmm, huele a canela.”', translation: '“Hum, tem cheiro de canela.”', next: 'pan' },
          {
            text: '“¿Con mucha leche? ¡Qué rico!”',
            translation: '“Com muito leite? Que delícia!”',
            wrong: 'A dona Rosa disse “sin leche”: esse chocolate é feito com água (“chocolate de agua”). E atenção: em espanhol é “la leche”, no feminino.',
          },
        ],
      },
      pan: {
        emoji: '🍞',
        text: '“¿Has probado el pan de yema? Aquí lo mojamos en el chocolate.”',
        translation: '“Você já provou o pão de gema? Aqui nós o mergulhamos no chocolate.”',
        choices: [{ text: '“No, nunca lo he probado. ¡Quiero uno!”', translation: '“Não, nunca provei. Quero um!”', next: 'final_chocolate' }],
      },
      final_chocolate: {
        emoji: '☕',
        text: 'Linu moja el pan en el chocolate. Doña Rosa sonríe: “Ahora sí conoces Oaxaca.”',
        translation: 'O Linu mergulha o pão no chocolate. Dona Rosa sorri: “Agora sim você conhece Oaxaca.”',
        ending: { tone: 'bom', title: 'Merenda oaxaquenha', message: 'Chocolate de água com pão de gema: o Linu provou um clássico de Oaxaca.' },
      },
      final_chapulines: {
        emoji: '🎒',
        text: 'Linu sale del mercado con una bolsita de chapulines. Sus amigos de Brasil no lo van a creer.',
        translation: 'O Linu sai do mercado com um saquinho de chapulines. Os amigos dele no Brasil não vão acreditar.',
        ending: { tone: 'bom', title: 'Pinguim corajoso', message: 'O Linu provou gafanhotos crocantes e descobriu que “exquisito” é elogio!' },
      },
    },
  },
  {
    id: 'es-h10',
    level: 'A2.2',
    cefr: 'A2',
    title: 'El canto del yigüirro',
    emoji: '🐦',
    summary: 'Em San José, a Sofía leva o Linu para procurar o pássaro que, dizem, anuncia as chuvas.',
    cultural_context:
      'O yigüirro, um sabiá de penas marrons, é a ave nacional da Costa Rica desde 1977; segundo a tradição popular, seu canto anuncia a estação das chuvas, que vai de maio a novembro. Os costa-riquenhos são chamados de “ticos” pelo hábito de usar diminutivos como “chiquitico”.',
    start: 'start',
    glossary: [
      ['el yigüirro', 'um tipo de sabiá, ave nacional da Costa Rica'],
      ['llovió', 'choveu (indefinido de “llover”)'],
      ['de color café', 'de cor marrom (“café” é a cor marrom em boa parte da América Latina)'],
      ['más pequeño que', 'menor que'],
      ['vamos a buscarlo', 'vamos procurá-lo'],
      ['la soda', 'restaurante simples e barato (Costa Rica)'],
      ['¡Pura vida!', 'expressão costa-riquenha: tudo bem, que beleza, valeu…'],
      ['¡Mire!', 'Olhe! (os ticos usam muito “usted”, até entre amigos)'],
    ],
    nodes: {
      start: {
        emoji: '🌦️',
        text: 'Es mayo en San José. En el desayuno, Sofía le cuenta a Linu: “Ayer por la tarde llovió muchísimo. ¡Y antes de la lluvia oí al yigüirro!”',
        translation: 'É maio em San José. No café da manhã, a Sofía conta ao Linu: “Ontem à tarde choveu muitíssimo. E antes da chuva eu ouvi o yigüirro!”',
        choices: [
          { text: '“¿El yigüirro? ¿Qué es eso?”', translation: '“O yigüirro? O que é isso?”', next: 'que_es' },
          {
            text: '“¿Ayer hizo sol todo el día?”',
            translation: '“Ontem fez sol o dia todo?”',
            wrong: 'A Sofía contou que ontem à tarde choveu muito (“llovió muchísimo”). “Llovió” é o pretérito indefinido de “llover” (chover).',
          },
        ],
      },
      que_es: {
        emoji: '🐦',
        text: '“Es el ave nacional de Costa Rica. Es más pequeño que una paloma y es de color café. Mucha gente lo oye cuando empiezan las lluvias.”',
        translation: '“É a ave nacional da Costa Rica. É menor que um pombo e é de cor marrom. Muita gente o ouve quando começam as chuvas.”',
        choices: [
          { text: '“¿Y dónde lo puedo ver?”', translation: '“E onde posso vê-lo?”', next: 'parque' },
          {
            text: '“¿Es un pájaro de muchos colores, como el tucán?”',
            translation: '“É um pássaro de muitas cores, como o tucano?”',
            wrong: 'A Sofía disse que ele é “de color café”: marrom! Na Costa Rica e em boa parte da América Latina, “café” é o nome da cor marrom.',
          },
        ],
      },
      parque: {
        emoji: '🌳',
        text: '“Vamos a buscarlo en el parque La Sabana. Hoy no va a llover hasta la tarde.”',
        translation: '“Vamos procurá-lo no parque La Sabana. Hoje não vai chover até a tarde.”',
        choices: [
          { text: '“¡Vamos ahora! Yo llevo la cámara.”', translation: '“Vamos agora! Eu levo a câmera.”', next: 'buscar' },
          { text: '“Mejor lo buscamos después del almuerzo.”', translation: '“Melhor procurarmos depois do almoço.”', next: 'almuerzo' },
        ],
      },
      almuerzo: {
        emoji: '🍛',
        text: 'Almuerzan en una soda: arroz, frijoles, plátano maduro y ensalada. Es el casado, un plato muy típico. Al salir, el cielo está más oscuro que en la mañana.',
        translation: 'Eles almoçam numa soda: arroz, feijão, banana-da-terra madura e salada. É o casado, um prato muito típico. Na saída, o céu está mais escuro que de manhã.',
        choices: [{ text: '“¡Rápido, al parque!”', translation: '“Rápido, para o parque!”', next: 'lluvia' }],
      },
      lluvia: {
        emoji: '☔',
        text: 'Llegan al parque, pero empieza a llover fuerte. Sofía se ríe: “¡Pura vida! Lo vamos a buscar mañana.”',
        translation: 'Eles chegam ao parque, mas começa a chover forte. A Sofía ri: “Pura vida! Vamos procurá-lo amanhã.”',
        choices: [{ text: '“Está bien. ¡Mañana volvemos!”', translation: '“Tudo bem. Amanhã a gente volta!”', next: 'final_lluvia' }],
      },
      buscar: {
        emoji: '👀',
        text: 'Buscan entre los árboles durante media hora. De pronto, Sofía dice: “¡Mire, allá está!” En una rama hay un pájaro café que canta más fuerte que los otros.',
        translation: 'Eles procuram entre as árvores durante meia hora. De repente, a Sofía diz: “Olhe, lá está ele!” Num galho há um pássaro marrom que canta mais alto que os outros.',
        choices: [{ text: '“¡Lo veo! Le tomo una foto.”', translation: '“Estou vendo! Vou tirar uma foto dele.”', next: 'foto' }],
      },
      foto: {
        emoji: '📸',
        text: 'Linu toma la foto. El yigüirro canta una vez más y se va volando. Sofía pregunta: “¿La foto salió bien?”',
        translation: 'O Linu tira a foto. O yigüirro canta mais uma vez e vai embora voando. A Sofía pergunta: “A foto ficou boa?”',
        choices: [{ text: '“¡Sí! La voy a mandar a mis amigos de Brasil.”', translation: '“Sim! Vou mandá-la para os meus amigos do Brasil.”', next: 'final_foto' }],
      },
      final_foto: {
        emoji: '🎉',
        text: 'Esa noche, Linu manda la foto. Sus amigos le preguntan: “¿Qué pájaro es?” Y Linu contesta: “¡El yigüirro, el ave nacional de Costa Rica!”',
        translation: 'Naquela noite, o Linu manda a foto. Os amigos perguntam: “Que pássaro é esse?” E o Linu responde: “O yigüirro, a ave nacional da Costa Rica!”',
        ending: { tone: 'bom', title: 'Foto rara!', message: 'O Linu encontrou o pássaro que anuncia as chuvas e ainda levou a foto para casa.' },
      },
      final_lluvia: {
        emoji: '🌧️',
        text: 'Linu y Sofía esperan bajo un árbol, mojados pero contentos. No vieron al yigüirro, pero sí oyeron su canto después de la lluvia.',
        translation: 'O Linu e a Sofía esperam debaixo de uma árvore, molhados mas contentes. Não viram o yigüirro, mas ouviram o canto dele depois da chuva.',
        ending: { tone: 'neutro', title: 'Só o canto', message: 'A chuva da tarde chegou antes. Pelo menos o Linu ouviu o yigüirro, como mandam as tradições da estação chuvosa!' },
      },
    },
  },
  {
    id: 'es-h11',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Linu en el Mercado Central',
    emoji: '🍲',
    summary: 'Em Santiago, o Linu almoça no Mercado Central. Sopa de congro ou peixe fresco para levar?',
    cultural_context:
      'O Mercado Central de Santiago, com sua grande estrutura de ferro, é famoso pelos frutos do mar. O poeta chileno Pablo Neruda escreveu uma “Ode ao caldillo de congrio”, a sopa de congro típica do Chile.',
    start: 'start',
    glossary: [
      ['el mercado', 'o mercado'],
      ['el caldillo de congrio', 'a sopa de congro'],
      ['más barato que', 'mais barato do que'],
      ['exquisito', 'delicioso (falso amigo: não é “esquisito”)'],
      ['la voy a probar', 'vou prová-la'],
      ['el puesto', 'a banca, a barraca'],
      ['la cuenta', 'a conta'],
    ],
    nodes: {
      start: {
        emoji: '🏙️',
        text: 'Ayer Linu llegó a Santiago de Chile. Hoy fue al Mercado Central, un edificio antiguo de hierro. ¡Hay pescado por todas partes!',
        translation: 'Ontem o Linu chegou a Santiago do Chile. Hoje ele foi ao Mercado Central, um edifício antigo de ferro. Há peixe por toda parte!',
        choices: [
          { text: 'Voy a buscar un restaurante.', translation: 'Vou procurar um restaurante.', next: 'mesero' },
          { text: 'Voy a comprar pescado fresco.', translation: 'Vou comprar peixe fresco.', next: 'puesto' },
        ],
      },
      mesero: {
        emoji: '🧑‍🍳',
        text: 'Un mesero, Tomás, lo saluda: “¡Hola! Hoy tenemos caldillo de congrio y paila marina. El caldillo es más barato que la paila, pero la paila es más grande.”',
        translation: 'Um garçom, o Tomás, o cumprimenta: “Olá! Hoje temos sopa de congro e paila marina. A sopa é mais barata do que a paila, mas a paila é maior.”',
        choices: [
          { text: '“Quiero el caldillo, por favor.”', translation: '“Quero a sopa de congro, por favor.”', next: 'caldillo' },
          {
            text: '“Quiero el plato más barato: la paila marina.”',
            translation: '“Quero o prato mais barato: a paila marina.”',
            wrong: 'O Tomás disse que o caldillo é MAIS barato do que a paila (“más barato que la paila”). A paila é maior, mas o prato mais barato é o caldillo.',
          },
        ],
      },
      caldillo: {
        emoji: '🍲',
        text: 'Tomás trae el plato: “Pablo Neruda escribió un poema sobre esta sopa. ¿La vas a probar?” Linu la prueba y sonríe: ¡está exquisita!',
        translation: 'O Tomás traz o prato: “Pablo Neruda escreveu um poema sobre esta sopa. Você vai prová-la?” O Linu a prova e sorri: está deliciosa!',
        choices: [
          { text: '“¡Está exquisita! ¿Me trae la cuenta, por favor?”', translation: '“Está deliciosa! Pode me trazer a conta, por favor?”', next: 'cuenta' },
          {
            text: '“Está exquisita… No la voy a comer.”',
            translation: '“Está esquisita… Não vou comê-la.”',
            wrong: 'Cuidado com o falso amigo! Em espanhol, “exquisito” quer dizer “delicioso”, não “esquisito”. O Linu sorriu: ele adorou a sopa.',
          },
        ],
      },
      cuenta: {
        emoji: '💵',
        text: 'Tomás trae la cuenta: son ocho mil pesos. Linu paga y le da las gracias. Ahora tiene toda la tarde libre.',
        translation: 'O Tomás traz a conta: são oito mil pesos. O Linu paga e agradece. Agora ele tem a tarde toda livre.',
        choices: [
          { text: 'Voy a subir al cerro Santa Lucía.', translation: 'Vou subir o morro Santa Lucía.', next: 'final_cerro' },
          { text: 'Voy a dormir una siesta en el hotel.', translation: 'Vou tirar uma soneca no hotel.', next: 'final_siesta' },
        ],
      },
      final_cerro: {
        emoji: '⛰️',
        text: 'Linu subió al cerro Santa Lucía. Desde arriba vio la ciudad y la cordillera de los Andes, más blanca que su barriga.',
        translation: 'O Linu subiu o morro Santa Lucía. Lá de cima ele viu a cidade e a cordilheira dos Andes, mais branca do que a barriga dele.',
        ending: { tone: 'bom', title: 'Sopa e montanha!', message: 'O Linu provou o caldillo de congrio e viu os Andes do alto do Santa Lucía. Dia perfeito em Santiago.' },
      },
      final_siesta: {
        emoji: '😴',
        text: 'Linu volvió al hotel y durmió tres horas. Cuando despertó, ya era de noche.',
        translation: 'O Linu voltou ao hotel e dormiu três horas. Quando acordou, já era noite.',
        ending: { tone: 'neutro', title: 'Soneca chilena', message: 'A barriga ficou feliz, mas o Linu perdeu a tarde. Amanhã tem mais Santiago!' },
      },
      puesto: {
        emoji: '🐟',
        text: 'Linu fue a un puesto. Doña Rosa vende salmón y reineta. “Hoy la reineta es más fresca que el salmón. ¿La quiere?”',
        translation: 'O Linu foi a uma banca. Dona Rosa vende salmão e reineta. “Hoje a reineta está mais fresca do que o salmão. O senhor quer?”',
        choices: [
          { text: '“Sí, la quiero. ¿Cuánto cuesta?”', translation: '“Sim, quero. Quanto custa?”', next: 'cocina' },
          { text: '“Mejor voy a comer en un restaurante.”', translation: '“Melhor eu ir comer num restaurante.”', next: 'mesero' },
        ],
      },
      cocina: {
        emoji: '🍳',
        text: 'Linu compró la reineta, pero su hotel no tiene cocina. Doña Rosa se ríe: “Mi hijo Tomás tiene un restaurante aquí. Él la va a cocinar.”',
        translation: 'O Linu comprou a reineta, mas o hotel dele não tem cozinha. Dona Rosa ri: “Meu filho Tomás tem um restaurante aqui. Ele vai prepará-la.”',
        choices: [{ text: '“¡Muchas gracias, doña Rosa!”', translation: '“Muito obrigado, dona Rosa!”', next: 'final_reineta' }],
      },
      final_reineta: {
        emoji: '🎉',
        text: 'Tomás frio la reineta con limón. Linu la comió toda y dijo: “¡Es el mejor pescado de Chile!”',
        translation: 'O Tomás fritou a reineta com limão. O Linu comeu tudo e disse: “É o melhor peixe do Chile!”',
        ending: { tone: 'bom', title: 'Do mercado para a mesa', message: 'O Linu comprou o peixe mais fresco do dia e ainda ganhou dois amigos no Mercado Central.' },
      },
    },
  },
  {
    id: 'es-h12',
    level: 'A2.2',
    cefr: 'A2',
    title: 'La cueca del cerro Alegre',
    emoji: '🎸',
    summary: 'Em Valparaíso, o Linu sobe um morro colorido e encontra uma violonista que toca cueca.',
    cultural_context:
      'O centro histórico de Valparaíso é Patrimônio Mundial da UNESCO desde 2003, e seus “ascensores” (funiculares) sobem os morros há mais de um século. A cueca, dançada com um lenço na mão, foi declarada dança nacional do Chile em 1979.',
    start: 'start',
    glossary: [
      ['el cerro', 'o morro'],
      ['el ascensor', 'o funicular (e também o elevador)'],
      ['más lento que', 'mais lento do que'],
      ['la cueca', 'a dança nacional do Chile'],
      ['el pañuelo', 'o lenço'],
      ['la conozco', 'eu a conheço'],
      ['más cortas que', 'mais curtas do que'],
    ],
    nodes: {
      start: {
        emoji: '🚡',
        text: 'Linu llegó a Valparaíso en bus. Hoy va a subir al cerro Alegre. El ascensor es muy viejo… ¡y más lento que un pingüino!',
        translation: 'O Linu chegou a Valparaíso de ônibus. Hoje ele vai subir o morro Alegre. O funicular é muito velho… e mais lento do que um pinguim!',
        choices: [
          { text: 'Subir en el ascensor.', translation: 'Subir de funicular.', next: 'arriba' },
          { text: 'Subir a pie por la escalera.', translation: 'Subir a pé pela escada.', next: 'escalera' },
        ],
      },
      escalera: {
        emoji: '🪜',
        text: 'Linu subió a pie y llegó muy cansado. En un muro vio un mural enorme de una ballena azul. ¡Es más grande que un bus!',
        translation: 'O Linu subiu a pé e chegou muito cansado. Num muro, ele viu um mural enorme de uma baleia-azul. É maior do que um ônibus!',
        choices: [{ text: 'Sacar una foto y seguir caminando.', translation: 'Tirar uma foto e continuar andando.', next: 'musica' }],
      },
      arriba: {
        emoji: '🎨',
        text: 'Arriba, las casas son de todos los colores. Desde allí Linu ve el puerto y el mar. De repente, escucha una guitarra.',
        translation: 'Lá em cima, as casas são de todas as cores. Dali o Linu vê o porto e o mar. De repente, ele escuta um violão.',
        choices: [{ text: 'Buscar la música.', translation: 'Procurar a música.', next: 'musica' }],
      },
      musica: {
        emoji: '🎸',
        text: 'Una chica, Javiera, toca la guitarra en la calle. “Esta canción es una cueca, el baile nacional de Chile. ¿La conoces?”',
        translation: 'Uma moça, a Javiera, toca violão na rua. “Esta música é uma cueca, a dança nacional do Chile. Você a conhece?”',
        choices: [
          { text: '“No, no la conozco. ¿Cómo se baila?”', translation: '“Não, não conheço. Como se dança?”', next: 'baile' },
          {
            text: '“Sí, la conozco: es un plato típico.”',
            translation: '“Sim, conheço: é um prato típico.”',
            wrong: 'A Javiera disse que a cueca é “el baile nacional de Chile”: a dança nacional do Chile, e não uma comida.',
          },
        ],
      },
      baile: {
        emoji: '💃',
        text: 'Javiera saca un pañuelo blanco. “En la cueca, los bailarines mueven un pañuelo. ¿Vas a bailar conmigo o vas a tocar la guitarra?”',
        translation: 'A Javiera pega um lenço branco. “Na cueca, os dançarinos agitam um lenço. Você vai dançar comigo ou vai tocar o violão?”',
        choices: [
          { text: '“¡Voy a bailar!”', translation: '“Vou dançar!”', next: 'final_cueca' },
          { text: '“Voy a tocar la guitarra.”', translation: '“Vou tocar o violão.”', next: 'guitarra' },
        ],
      },
      guitarra: {
        emoji: '🎶',
        text: 'Linu toma la guitarra, pero sus aletas son más cortas que los dedos de Javiera. Toca tres notas y la guitarra casi se cae. Javiera se ríe.',
        translation: 'O Linu pega o violão, mas as nadadeiras dele são mais curtas do que os dedos da Javiera. Ele toca três notas e o violão quase cai. A Javiera ri.',
        choices: [
          { text: 'Devolver la guitarra y bailar.', translation: 'Devolver o violão e dançar.', next: 'final_cueca' },
          { text: 'Comprar una guitarra pequeña para practicar.', translation: 'Comprar um violão pequeno para praticar.', next: 'final_practica' },
          {
            text: '“¡Mis aletas son más largas que tus dedos!”',
            translation: '“Minhas nadadeiras são mais compridas do que os seus dedos!”',
            wrong: 'É o contrário: o texto diz que as nadadeiras do Linu são MAIS CURTAS (“más cortas”) do que os dedos da Javiera. Por isso ele não consegue tocar.',
          },
        ],
      },
      final_cueca: {
        emoji: '🎉',
        text: 'Linu bailó la cueca con el pañuelo de Javiera. Bailó mal, pero con mucha alegría, y la gente aplaudió.',
        translation: 'O Linu dançou a cueca com o lenço da Javiera. Dançou mal, mas com muita alegria, e as pessoas aplaudiram.',
        ending: { tone: 'bom', title: 'Cueca no cerro Alegre!', message: 'O Linu aprendeu a dança nacional do Chile num morro colorido de Valparaíso.' },
      },
      final_practica: {
        emoji: '🪕',
        text: 'Linu compró una guitarra pequeña en una tienda del cerro. La va a tocar todos los días en el hotel.',
        translation: 'O Linu comprou um violão pequeno numa loja do morro. Ele vai tocá-lo todos os dias no hotel.',
        ending: { tone: 'neutro', title: 'Músico em treinamento', message: 'Ainda não foi dessa vez que o Linu dançou, mas agora ele tem um violão do tamanho das suas nadadeiras.' },
      },
    },
  },
  {
    id: 'es-h13',
    level: 'B1.1',
    cefr: 'B1',
    title: 'El espejo del cielo',
    emoji: '🪞',
    summary: 'No Salar de Uyuni, na Bolívia, o Linu vê o céu refletido no chão e encontra cactos e flamingos.',
    cultural_context:
      'Com mais de 10 mil km², o Salar de Uyuni, na Bolívia, é a maior planície de sal do mundo. Na estação das chuvas, uma fina camada de água transforma o chão num espelho gigante que reflete o céu.',
    start: 'start',
    glossary: [
      ['el salar', 'a planície de sal'],
      ['el espejo', 'o espelho'],
      ['¡Miren!', 'Olhem! (imperativo, ustedes)'],
      ['se la dio', 'deu-a a ele'],
      ['te la voy a mandar', 'vou mandá-la para você'],
      ['el flamenco', 'o flamingo'],
      ['el atardecer', 'o entardecer, o pôr do sol'],
      ['salado', 'salgado'],
    ],
    nodes: {
      start: {
        emoji: '🚙',
        text: 'Linu viajaba en una camioneta con la guía, Nilda, y un turista uruguayo, Mateo. Todo era blanco y el sol brillaba mucho. De repente, la camioneta se detuvo en medio del salar.',
        translation: 'O Linu viajava numa caminhonete com a guia, Nilda, e um turista uruguaio, o Mateo. Tudo era branco e o sol brilhava muito. De repente, a caminhonete parou no meio do salar.',
        choices: [
          { text: '“¿Qué pasó, Nilda?”', translation: '“O que aconteceu, Nilda?”', next: 'parada' },
          { text: 'Bajar a mirar el suelo.', translation: 'Descer para olhar o chão.', next: 'sal' },
        ],
      },
      parada: {
        emoji: '🛑',
        text: '“No pasa nada”, dijo Nilda. “Paramos aquí porque es el mejor lugar para ver el espejo.” Le explicó que ayer llovió y que ahora había un poco de agua sobre la sal.',
        translation: '“Não aconteceu nada”, disse a Nilda. “Paramos aqui porque é o melhor lugar para ver o espelho.” Ela explicou que ontem choveu e que agora havia um pouco de água sobre o sal.',
        choices: [
          { text: '“¿Un espejo? ¿Dónde está?”', translation: '“Um espelho? Onde está?”', next: 'espejo' },
          {
            text: '“¡Qué pena que ayer no haya llovido!”',
            translation: '“Que pena que ontem não tenha chovido!”',
            wrong: 'A Nilda disse que ontem CHOVEU (“ayer llovió”). É justamente por isso que agora há água sobre o sal e o espelho aparece.',
          },
        ],
      },
      sal: {
        emoji: '🧂',
        text: 'Linu bajó y tocó el suelo. Era duro como una piedra y tenía dibujos de hexágonos. Nilda le explicó: “Cuando el agua se evapora, la sal forma estas figuras.”',
        translation: 'O Linu desceu e tocou o chão. Era duro como pedra e tinha desenhos de hexágonos. A Nilda lhe explicou: “Quando a água evapora, o sal forma estas figuras.”',
        choices: [
          { text: 'Probar un poquito de sal.', translation: 'Provar um pouquinho de sal.', next: 'probar' },
          { text: '“¿Y dónde está el espejo?”', translation: '“E onde está o espelho?”', next: 'espejo' },
        ],
      },
      probar: {
        emoji: '😝',
        text: 'Linu probó la sal con la lengua. ¡Estaba saladísima! Mateo se rio, abrió su botella y se la ofreció: “Toma, amigo, bebe un poco.”',
        translation: 'O Linu provou o sal com a língua. Estava salgadíssimo! O Mateo riu, abriu a garrafa dele e a ofereceu ao Linu: “Toma, amigo, bebe um pouco.”',
        choices: [{ text: 'Beber agua y darle las gracias.', translation: 'Beber água e agradecer a ele.', next: 'espejo' }],
      },
      espejo: {
        emoji: '🪞',
        text: 'Nilda señaló el horizonte: “¡Miren! El cielo se ve dos veces.” Era verdad: las nubes estaban arriba y también abajo, en el agua. Mateo quería una foto y le pidió la cámara a Linu.',
        translation: 'A Nilda apontou para o horizonte: “Olhem! O céu aparece duas vezes.” Era verdade: as nuvens estavam em cima e também embaixo, na água. O Mateo queria uma foto e pediu a câmera ao Linu.',
        choices: [
          { text: 'Darle la cámara a Mateo.', translation: 'Dar a câmera ao Mateo.', next: 'foto' },
          {
            text: 'Pedirle la cámara a Mateo.',
            translation: 'Pedir a câmera ao Mateo.',
            wrong: 'Foi o Mateo que pediu a câmera ao Linu (“le pidió la cámara a Linu”). A câmera é do Linu: ele deve dá-la ao Mateo.',
          },
        ],
      },
      foto: {
        emoji: '📸',
        text: 'Linu se la dio. Mateo sacó una foto muy divertida: parecía que Linu caminaba sobre las nubes. “Te la voy a mandar esta noche”, le prometió.',
        translation: 'O Linu a entregou a ele. O Mateo tirou uma foto muito divertida: parecia que o Linu andava sobre as nuvens. “Vou mandá-la para você hoje à noite”, ele prometeu.',
        choices: [
          { text: '“Vamos a la isla Incahuasi.”', translation: '“Vamos à ilha Incahuasi.”', next: 'isla' },
          { text: '“Esperemos el atardecer aquí.”', translation: '“Vamos esperar o pôr do sol aqui.”', next: 'final_flamencos' },
        ],
      },
      isla: {
        emoji: '🌵',
        text: 'En la isla Incahuasi había cactus gigantes, mucho más altos que Linu. Nilda contó que crecen apenas un centímetro por año. Linu los miraba y pensaba en cuántos siglos tenían.',
        translation: 'Na ilha Incahuasi havia cactos gigantes, muito mais altos que o Linu. A Nilda contou que eles crescem apenas um centímetro por ano. O Linu olhava para eles e pensava em quantos séculos eles tinham.',
        choices: [
          { text: 'Quedarse un rato más con los cactus.', translation: 'Ficar mais um pouco com os cactos.', next: 'final_isla' },
          {
            text: '“¡Qué rápido crecen estos cactus!”',
            translation: '“Como esses cactos crescem rápido!”',
            wrong: 'A Nilda contou que eles crescem só um centímetro por ano (“apenas un centímetro por año”). São lentíssimos: os maiores têm séculos de vida.',
          },
        ],
      },
      final_isla: {
        emoji: '🌙',
        text: 'Linu se quedó tanto tiempo en la isla que, cuando volvieron a la camioneta, ya era de noche. Hacía muchísimo frío y temblaba. Aun así, sobre el salar brillaban miles de estrellas.',
        translation: 'O Linu ficou tanto tempo na ilha que, quando voltaram à caminhonete, já era noite. Fazia muitíssimo frio e ele tremia. Mesmo assim, sobre o salar brilhavam milhares de estrelas.',
        ending: { tone: 'neutro', title: 'Frio de pinguim', message: 'O Linu perdeu o pôr do sol, mas ganhou um céu cheio de estrelas. No altiplano, a noite é geladíssima!' },
      },
      final_flamencos: {
        emoji: '🦩',
        text: 'El sol bajaba y el cielo se volvía rosado. De pronto, pasaron tres flamencos volando hacia el sur. Nilda dijo: “Van a las lagunas; allí comen algas y bichitos que los ponen rosados.”',
        translation: 'O sol descia e o céu ficava rosado. De repente, passaram três flamingos voando para o sul. A Nilda disse: “Eles vão para as lagoas; lá comem algas e bichinhos que os deixam cor-de-rosa.”',
        ending: { tone: 'bom', title: 'Céu duplo, flamingos rosados', message: 'O Linu viu o espelho do Salar de Uyuni, ganhou uma foto sobre as nuvens e ainda aprendeu por que os flamingos são cor-de-rosa.' },
      },
    },
  },
  {
    id: 'es-h14',
    level: 'B1.1',
    cefr: 'B1',
    title: 'El sombrero de Camilo',
    emoji: '👒',
    summary: 'Em Cartagena das Índias, o Camilo empresta ao Linu o chapéu do avô. E o chapéu some!',
    cultural_context:
      'O centro histórico de Cartagena das Índias, cercado por muralhas coloniais, é Patrimônio Mundial da UNESCO desde 1984. O “sombrero vueltiao”, de fibra trançada, foi declarado símbolo cultural da Colômbia em 2004.',
    start: 'start',
    glossary: [
      ['prestar', 'emprestar (falso amigo: não é “prestar”)'],
      ['se lo prestó', 'emprestou-o a ele'],
      ['¡Póntelo!', 'Coloque-o! (imperativo)'],
      ['cuidar', 'cuidar'],
      ['la muralla', 'a muralha'],
      ['la palenquera', 'a vendedora de frutas de San Basilio de Palenque'],
      ['te lo di', 'eu o dei a você'],
      ['la limonada de coco', 'a limonada de coco'],
    ],
    nodes: {
      start: {
        emoji: '🏰',
        text: 'Linu caminaba por la Ciudad Amurallada con su amigo Camilo. Hacía mucho calor y el sol quemaba. Camilo se quitó su sombrero vueltiao y se lo prestó: “Póntelo, pero cuídalo mucho. Era de mi abuelo.”',
        translation: 'O Linu caminhava pela Cidade Amuralhada com o amigo Camilo. Fazia muito calor e o sol queimava. O Camilo tirou o seu sombrero vueltiao e o emprestou ao Linu: “Coloque-o, mas cuide bem dele. Era do meu avô.”',
        choices: [
          { text: '“Gracias, Camilo. Te lo voy a cuidar.”', translation: '“Obrigado, Camilo. Vou cuidar dele para você.”', next: 'palenquera' },
          {
            text: '“¡Qué lindo regalo! Me lo quedo para siempre.”',
            translation: '“Que presente lindo! Vou ficar com ele para sempre.”',
            wrong: 'Falso amigo! “Prestar” em espanhol é “emprestar”. O Camilo emprestou o chapéu (“se lo prestó”), não deu de presente — e ainda pediu cuidado, porque era do avô dele.',
          },
        ],
      },
      palenquera: {
        emoji: '🍉',
        text: 'En una plaza había una palenquera con un vestido de muchos colores. Llevaba en la cabeza una palangana llena de mangos, piñas y papayas. Linu nunca había visto algo así y quería una foto con ella.',
        translation: 'Numa praça havia uma palenquera com um vestido de muitas cores. Ela levava na cabeça uma bacia cheia de mangas, abacaxis e mamões. O Linu nunca tinha visto nada igual e queria uma foto com ela.',
        choices: [
          { text: '“Señora, ¿me permite una foto?”', translation: '“Senhora, me permite uma foto?”', next: 'foto' },
          { text: 'Seguir caminando hacia la muralla.', translation: 'Continuar caminhando até a muralha.', next: 'muralla_sin_foto' },
        ],
      },
      foto: {
        emoji: '📸',
        text: 'La señora sonrió: “Claro, mi amor, pero cómprame una fruta primero.” Para la foto, Linu se quitó el sombrero y se lo dio a Camilo. Después compraron mango y siguieron hacia la muralla.',
        translation: 'A senhora sorriu: “Claro, meu amor, mas compre uma fruta de mim primeiro.” Para a foto, o Linu tirou o chapéu e o deu ao Camilo. Depois compraram manga e seguiram para a muralha.',
        choices: [{ text: 'Subir a la muralla.', translation: 'Subir na muralha.', next: 'muralla' }],
      },
      muralla_sin_foto: {
        emoji: '🌊',
        text: 'Desde la muralla, el mar Caribe brillaba. Linu llevaba el sombrero de Camilo y se sentía muy elegante. El viento soplaba fuerte, así que lo sujetó con las dos aletas.',
        translation: 'Da muralha, o mar do Caribe brilhava. O Linu usava o chapéu do Camilo e se sentia muito elegante. O vento soprava forte, então ele o segurou com as duas nadadeiras.',
        choices: [{ text: '“Toma, Camilo, te lo devuelvo sano y salvo.”', translation: '“Toma, Camilo, eu o devolvo são e salvo.”', next: 'final_limonada' }],
      },
      muralla: {
        emoji: '😱',
        text: 'Desde la muralla, el mar Caribe brillaba. De repente, Linu se tocó la cabeza: ¡no tenía el sombrero! Camilo lo miró serio: “Linu, ¿dónde está el sombrero de mi abuelo?”',
        translation: 'Da muralha, o mar do Caribe brilhava. De repente, o Linu tocou a cabeça: não estava com o chapéu! O Camilo o olhou sério: “Linu, cadê o chapéu do meu avô?”',
        choices: [
          { text: '“Te lo di a ti antes de la foto, ¿te acuerdas?”', translation: '“Eu o dei a você antes da foto, lembra?”', next: 'mochila' },
          { text: '“¡Volvamos a la plaza a buscarlo!”', translation: '“Vamos voltar à praça para procurá-lo!”', next: 'plaza' },
          {
            text: '“Lo dejé en el hotel esta mañana.”',
            translation: '“Eu o deixei no hotel hoje de manhã.”',
            wrong: 'Não pode ser: de manhã o Linu nem tinha o chapéu. O Camilo o emprestou durante o passeio, e antes da foto o Linu o deu ao Camilo (“se lo dio a Camilo”).',
          },
        ],
      },
      plaza: {
        emoji: '🏃',
        text: 'Volvieron corriendo a la plaza, pero la palenquera ya no estaba. Linu estaba muy triste y Camilo no decía nada. Entonces Camilo abrió su mochila para sacar agua… ¡y allí estaba el sombrero!',
        translation: 'Voltaram correndo à praça, mas a palenquera já não estava lá. O Linu estava muito triste e o Camilo não dizia nada. Então o Camilo abriu a mochila para pegar água… e lá estava o chapéu!',
        choices: [{ text: '“¡Camilo! ¡Lo tenías tú!”', translation: '“Camilo! Estava com você!”', next: 'mochila' }],
      },
      mochila: {
        emoji: '🎒',
        text: 'Camilo se puso rojo y se rio: “¡Tienes razón! Lo guardé en la mochila y lo olvidé.” Linu respiró tranquilo. “Perdóname, amigo”, le dijo Camilo, “la culpa fue mía.”',
        translation: 'O Camilo ficou vermelho e riu: “Você tem razão! Eu o guardei na mochila e esqueci.” O Linu respirou aliviado. “Me desculpe, amigo”, disse o Camilo, “a culpa foi minha.”',
        choices: [
          { text: '“Tranquilo. Pero invítame a una limonada de coco.”', translation: '“Relaxa. Mas me paga uma limonada de coco.”', next: 'final_limonada' },
          { text: '“Guárdalo tú. Yo me voy a comprar uno.”', translation: '“Guarde-o você. Eu vou comprar um para mim.”', next: 'final_sombrero' },
        ],
      },
      final_limonada: {
        emoji: '🥥',
        text: 'Se sentaron en un café y pidieron dos limonadas de coco bien frías. Camilo le puso el sombrero a Linu otra vez: “Póntelo, que todavía hace calor.”',
        translation: 'Eles se sentaram num café e pediram duas limonadas de coco bem geladas. O Camilo colocou o chapéu no Linu outra vez: “Coloque-o, que ainda está calor.”',
        ending: { tone: 'bom', title: 'Amizade gelada', message: 'O chapéu do avô voltou para casa, e a amizade saiu ainda mais forte. Nada como uma limonada de coco em Cartagena!' },
      },
      final_sombrero: {
        emoji: '🛍️',
        text: 'Esa tarde, Linu se compró su propio sombrero vueltiao. Le quedaba enorme y le tapaba los ojos. Aun así, no se lo quitó en todo el día.',
        translation: 'Naquela tarde, o Linu comprou seu próprio sombrero vueltiao. Ficava enorme nele e cobria seus olhos. Mesmo assim, ele não o tirou o dia todo.',
        ending: { tone: 'neutro', title: 'Chapéu próprio', message: 'Agora o Linu tem o seu sombrero vueltiao — só falta crescer um pouquinho para ele caber.' },
      },
    },
  },
  {
    id: 'es-h15',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Fútbol y tereré en Asunción',
    emoji: '⚽',
    summary: 'Num domingo quente em Asunción, o Linu é chamado para uma pelada e descobre o tererê.',
    cultural_context:
      'O Paraguai tem duas línguas oficiais, o espanhol e o guarani, e grande parte da população fala as duas. O tererê, mate gelado muitas vezes preparado com ervas, é Patrimônio Cultural Imaterial da UNESCO desde 2020.',
    start: 'start',
    glossary: [
      ['¿Mba’éichapa?', 'Tudo bem? (guarani)'],
      ['aguyje', 'obrigado (guarani)'],
      ['¡Jaha!', 'Vamos! (guarani)'],
      ['el partido', 'a partida, o jogo'],
      ['la cancha', 'o campo'],
      ['pásamela', 'passa ela (a bola) para mim'],
      ['el tereré', 'o tererê, mate gelado'],
      ['la guampa', 'o copo do tererê'],
    ],
    nodes: {
      start: {
        emoji: '🌞',
        text: 'Era domingo por la tarde en Asunción y hacía casi cuarenta grados. Linu paseaba por la Costanera, junto al río Paraguay, cuando unos chicos lo llamaron. “¿Mba’éichapa? Nos falta un jugador. ¿Juegas con nosotros?”',
        translation: 'Era domingo à tarde em Asunción e fazia quase quarenta graus. O Linu passeava pela Costanera, junto ao rio Paraguai, quando uns rapazes o chamaram. “Tudo bem? Está faltando um jogador. Você joga com a gente?”',
        choices: [
          { text: '“¡Claro! Pero no juego muy bien.”', translation: '“Claro! Mas não jogo muito bem.”', next: 'equipo' },
          { text: '“Hace demasiado calor. Prefiero mirar.”', translation: '“Está calor demais. Prefiro assistir.”', next: 'mirar' },
        ],
      },
      equipo: {
        emoji: '🧑‍🤝‍🧑',
        text: 'El capitán, Rodrigo, le explicó cómo jugaban: cinco contra cinco en una cancha de tierra. “Tú juegas atrás, en la defensa”, le dijo. “Si te llega la pelota, pásamela a mí.”',
        translation: 'O capitão, o Rodrigo, explicou ao Linu como eles jogavam: cinco contra cinco num campo de terra. “Você joga atrás, na defesa”, disse ele. “Se a bola chegar em você, passa ela para mim.”',
        choices: [
          { text: '“Entendido. ¡Jaha!”', translation: '“Entendido. Vamos!”', next: 'partido' },
          {
            text: 'Correr hacia el arco rival para hacer goles.',
            translation: 'Correr para o gol adversário para fazer gols.',
            wrong: 'O Rodrigo mandou o Linu jogar atrás, na defesa (“en la defensa”), e passar a bola para ele (“pásamela a mí”). Fazer gol não era a tarefa do Linu!',
          },
        ],
      },
      partido: {
        emoji: '🏃',
        text: 'Al principio todo iba bien: Linu defendía con sus aletas y los chicos se reían mucho. Pero en el minuto veinte, la pelota le llegó a Linu. Había un rival muy cerca y Rodrigo estaba solo.',
        translation: 'No começo tudo ia bem: o Linu defendia com as nadadeiras e os rapazes riam muito. Mas no minuto vinte, a bola chegou ao Linu. Havia um adversário muito perto e o Rodrigo estava livre.',
        choices: [
          { text: 'Pasársela a Rodrigo, como él pidió.', translation: 'Passá-la para o Rodrigo, como ele pediu.', next: 'gol' },
          { text: 'Patear al arco desde lejos.', translation: 'Chutar para o gol de longe.', next: 'tiro' },
        ],
      },
      gol: {
        emoji: '🥅',
        text: 'Linu se la pasó a Rodrigo, y Rodrigo metió un golazo. Todo el equipo corrió a abrazar a Linu. “¡Jaha, jaha!”, gritaban los chicos.',
        translation: 'O Linu passou a bola para o Rodrigo, e o Rodrigo fez um golaço. O time inteiro correu para abraçar o Linu. “Vamos, vamos!”, gritavam os rapazes.',
        choices: [{ text: 'Seguir jugando hasta el final.', translation: 'Continuar jogando até o fim.', next: 'terere' }],
      },
      tiro: {
        emoji: '💨',
        text: 'Linu pateó con toda su fuerza, pero la pelota salió muy alta y cayó al río. Todos se quedaron callados. Luego Rodrigo se rio: “¡Tranquilo! Tráela tú, que eres pingüino y sabes nadar.”',
        translation: 'O Linu chutou com toda a força, mas a bola saiu muito alta e caiu no rio. Todos ficaram calados. Depois o Rodrigo riu: “Relaxa! Busca ela você, que é pinguim e sabe nadar.”',
        choices: [{ text: 'Tirarse al agua a buscar la pelota.', translation: 'Pular na água para buscar a bola.', next: 'rio' }],
      },
      rio: {
        emoji: '🏊',
        text: 'Linu se tiró al agua y nadó rápido hasta la pelota. Cuando volvió y se la devolvió a Rodrigo, todos lo aplaudieron. Ahora el partido tenía un héroe nuevo: el arquero nadador.',
        translation: 'O Linu pulou na água e nadou rápido até a bola. Quando voltou e a devolveu ao Rodrigo, todos o aplaudiram. Agora o jogo tinha um novo herói: o goleiro nadador.',
        choices: [{ text: 'Jugar hasta el final del partido.', translation: 'Jogar até o fim da partida.', next: 'terere' }],
      },
      mirar: {
        emoji: '🌳',
        text: 'Linu se sentó a la sombra de un árbol. A su lado, una señora preparaba tereré con agua muy fría y hierbas. “Tómalo, hijo; con este calor, te va a hacer bien”, le dijo, y le dio la guampa.',
        translation: 'O Linu se sentou à sombra de uma árvore. Ao lado dele, uma senhora preparava tererê com água muito gelada e ervas. “Toma, filho; com este calor, vai te fazer bem”, ela disse, e lhe deu a guampa.',
        choices: [
          { text: '“Aguyje, señora.”', translation: '“Obrigado, senhora.”', next: 'final_sombra' },
          { text: 'Tomar un poco y después ir a jugar.', translation: 'Tomar um pouco e depois ir jogar.', next: 'equipo' },
          {
            text: '“No, gracias. Con este calor, no quiero mate caliente.”',
            translation: '“Não, obrigado. Com este calor, não quero mate quente.”',
            wrong: 'O tererê é mate GELADO: a senhora o preparou com “agua muy fría”. É justamente a bebida para os dias de calor no Paraguai.',
          },
        ],
      },
      terere: {
        emoji: '🧉',
        text: 'Al terminar el partido, todos se sentaron en ronda. Rodrigo sirvió el tereré en una guampa y se la pasó a Linu primero. “Aquí el tereré se comparte: tómalo y devuélvemelo”, le explicó.',
        translation: 'Quando o jogo terminou, todos se sentaram em roda. O Rodrigo serviu o tererê numa guampa e a passou primeiro ao Linu. “Aqui o tererê é compartilhado: toma e devolve para mim”, ele explicou.',
        choices: [
          { text: 'Tomarlo y devolvérselo a Rodrigo.', translation: 'Tomar e devolver ao Rodrigo.', next: 'final_ronda' },
          {
            text: 'Quedarse con la guampa hasta terminar el tereré.',
            translation: 'Ficar com a guampa até acabar o tererê.',
            wrong: 'O Rodrigo explicou que o tererê se compartilha: “tómalo y devuélvemelo” — tome e devolva para mim. A guampa passa de mão em mão na roda.',
          },
        ],
      },
      final_ronda: {
        emoji: '🎉',
        text: 'Linu tomó un poco y se la devolvió a Rodrigo. La guampa pasó por todas las manos mientras el sol bajaba sobre el río. Linu dijo: “¡Aguyje, amigos!”, y todos aplaudieron su guaraní.',
        translation: 'O Linu tomou um pouco e a devolveu ao Rodrigo. A guampa passou por todas as mãos enquanto o sol se punha sobre o rio. O Linu disse: “Obrigado, amigos!”, e todos aplaudiram o guarani dele.',
        ending: { tone: 'bom', title: 'Da roda de futebol à roda de tererê', message: 'O Linu jogou bola, fez amigos e aprendeu que, no Paraguai, o tererê é para dividir.' },
      },
      final_sombra: {
        emoji: '🍃',
        text: 'Linu se quedó toda la tarde con la señora, tomando tereré a la sombra. Ella le enseñó tres palabras en guaraní. No jugó al fútbol, pero se fue a casa fresco y contento.',
        translation: 'O Linu ficou a tarde toda com a senhora, tomando tererê à sombra. Ela lhe ensinou três palavras em guarani. Ele não jogou futebol, mas foi para casa refrescado e contente.',
        ending: { tone: 'neutro', title: 'Tarde na sombra', message: 'Sem gol desta vez, mas o Linu descobriu o tererê e aprendeu um pouco de guarani.' },
      },
    },
  },
  // ───────────────────────── es-h16 · B1.2 · Granada ─────────────────────────
  {
    id: 'es-h16',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Una guitarra al pie de la Alhambra',
    emoji: '🎸',
    summary: 'Sem entrada para a Alhambra, o Linu descobre uma oficina de violões e uma noite de flamenco em Granada.',
    cultural_context:
      'A Alhambra foi palácio e fortaleza da dinastia nasrida, o último reino muçulmano da Península Ibérica, que caiu em 1492. Em Granada, é costume o bar servir uma tapa grátis com cada bebida.',
    start: 'start',
    glossary: [
      ['la entrada', 'o ingresso (e também a entrada)'],
      ['acabar de + infinitivo', 'ter acabado de (fazer algo)'],
      ['seguir + gerundio', 'continuar (fazendo algo)'],
      ['volver a + infinitivo', 'voltar a / fazer de novo'],
      ['el taller', 'a oficina (de artesão)'],
      ['pasad', 'entrem (forma de “vosotros”, usada na Espanha)'],
      ['el cajón', 'o cajón (instrumento de percussão em forma de caixa)'],
      ['la tapa', 'o petisco que acompanha a bebida'],
    ],
    nodes: {
      start: {
        emoji: '🏰',
        text: 'Linu acaba de llegar a Granada y sube directo a la Alhambra. En la taquilla, una chica le dice: “Lo siento, hoy no quedan entradas. Mañana habrá más, pero tendrás que venir muy temprano.”',
        translation: 'O Linu acaba de chegar a Granada e sobe direto para a Alhambra. Na bilheteria, uma moça lhe diz: “Sinto muito, hoje não há mais ingressos. Amanhã haverá mais, mas você terá que vir bem cedo.”',
        choices: [
          { text: '“Entonces volveré mañana a las ocho.”', translation: '“Então voltarei amanhã às oito.”', next: 'cuesta' },
          {
            text: '“¡Perfecto! Entonces entro ahora mismo.”',
            translation: '“Perfeito! Então entro agora mesmo.”',
            wrong: 'A moça disse “hoy no quedan entradas”: hoje não sobrou nenhum ingresso. Os próximos serão amanhã (“mañana habrá más”), e bem cedo.',
          },
        ],
      },
      cuesta: {
        emoji: '🎶',
        text: 'Linu baja por la cuesta que va hacia el centro. De repente, oye una guitarra que sale de un pequeño taller. Dentro, un señor mayor sigue lijando una guitarra aunque ya es tarde: “¡Pasad, pasad! Ah, eres uno solo… Pues pasa.”',
        translation: 'O Linu desce a ladeira que vai para o centro. De repente, ouve um violão que sai de uma pequena oficina. Lá dentro, um senhor idoso continua lixando um violão embora já seja tarde: “Entrem, entrem! Ah, é um só… Então entre.”',
        choices: [
          { text: '“¿Cuánto tiempo tarda en hacer una guitarra?”', translation: '“Quanto tempo o senhor leva para fazer um violão?”', next: 'taller' },
          { text: '“¿Podría tocar algo para mí?”', translation: '“O senhor poderia tocar algo para mim?”', next: 'musica' },
        ],
      },
      taller: {
        emoji: '🪵',
        text: '“Me llamo Manuel. Tardo unos tres meses en cada una”, explica. “Esta es para una chica de Sevilla: la hago por encargo y la terminaré el viernes. La tapa es de abeto y los lados, de ciprés; por eso suena tan brillante.”',
        translation: '“Meu nome é Manuel. Levo uns três meses para cada um”, explica. “Este é para uma moça de Sevilha: faço sob encomenda e vou terminá-lo na sexta. O tampo é de abeto e as laterais, de cipreste; por isso soa tão brilhante.”',
        choices: [
          { text: '“Me encantaría aprender a tocar un poco.”', translation: '“Eu adoraria aprender a tocar um pouco.”', next: 'aprender' },
          {
            text: '“Ah, ¿entonces usted la tocará en Sevilla el viernes?”',
            translation: '“Ah, então o senhor vai tocá-lo em Sevilha na sexta?”',
            wrong: 'O violão é “para una chica de Sevilla”: “para” indica a destinatária. Manuel só vai TERMINÁ-LO na sexta (“la terminaré el viernes”); quem vai tocar é a moça.',
          },
        ],
      },
      musica: {
        emoji: '🎸',
        text: 'El señor, que se llama Manuel, toca unos compases de soleá. Las notas llenan el taller y Linu no se mueve. “Esta noche volveré a tocar en una peña del Albaicín. ¿Vendrás?”',
        translation: 'O senhor, que se chama Manuel, toca alguns compassos de soleá. As notas enchem a oficina e o Linu nem se mexe. “Hoje à noite vou tocar de novo numa peña do Albaicín. Você vem?”',
        choices: [
          { text: '“¡Claro que iré!”', translation: '“Claro que eu vou!”', next: 'pena' },
          { text: '“Mañana tendré que madrugar para ir a la Alhambra… Mejor me acostaré temprano.”', translation: '“Amanhã vou ter que madrugar para ir à Alhambra… Melhor eu dormir cedo.”', next: 'final_descanso' },
        ],
      },
      aprender: {
        emoji: '🐧',
        text: 'Manuel le pone la guitarra entre las aletas, pero Linu no logra hacer ni un acorde. Manuel se ríe: “Con esas aletas, yo en tu lugar tocaría el cajón.” Le da una caja de madera y Linu empieza a golpearla con ritmo.',
        translation: 'Manuel coloca o violão entre as nadadeiras dele, mas o Linu não consegue fazer nem um acorde. Manuel ri: “Com essas nadadeiras, no seu lugar eu tocaria o cajón.” Ele lhe dá uma caixa de madeira e o Linu começa a batucar nela com ritmo.',
        choices: [
          { text: '“¿Podría llevarlo esta noche a algún sitio?”', translation: '“Eu poderia levá-lo a algum lugar hoje à noite?”', next: 'pena' },
        ],
      },
      pena: {
        emoji: '🌙',
        text: 'Por la noche, en la peña del Albaicín, con cada bebida les ponen una tapa gratis. Desde la ventana se ve la Alhambra iluminada. Manuel deja la guitarra y sonríe: “Acabo de terminar mi parte. Ahora te toca a ti.”',
        translation: 'À noite, na peña do Albaicín, com cada bebida servem uma tapa grátis. Da janela se vê a Alhambra iluminada. Manuel deixa o violão e sorri: “Acabei de terminar a minha parte. Agora é a sua vez.”',
        choices: [
          { text: 'Linu toca el cajón mientras todos dan palmas.', translation: 'O Linu toca o cajón enquanto todos batem palmas.', next: 'final_alhambra' },
          {
            text: '“Genial, espero a que usted empiece.”',
            translation: '“Ótimo, espero o senhor começar.”',
            wrong: '“Acabo de terminar” quer dizer “acabei de terminar”: Manuel já tocou e agora é a vez do Linu (“te toca a ti”).',
          },
        ],
      },
      final_alhambra: {
        emoji: '🦁',
        text: 'A la mañana siguiente, Linu entra en la Alhambra con los ojos medio cerrados. En el Patio de los Leones, sigue marcando el ritmo con la aleta sin darse cuenta. Seguro que volverá a Granada.',
        translation: 'Na manhã seguinte, o Linu entra na Alhambra com os olhos meio fechados. No Pátio dos Leões, continua marcando o ritmo com a nadadeira sem perceber. Com certeza voltará a Granada.',
        ending: { tone: 'bom', title: 'Flamenco e Alhambra!', message: 'O Linu ganhou um amigo, tocou cajón numa peña e ainda viu o Pátio dos Leões.' },
      },
      final_descanso: {
        emoji: '😴',
        text: 'Linu duerme temprano y, a las ocho, ya está en la Alhambra. Los palacios son preciosos, pero él sigue pensando en la guitarra de Manuel. La próxima vez no se perderá la peña.',
        translation: 'O Linu dorme cedo e, às oito, já está na Alhambra. Os palácios são lindíssimos, mas ele continua pensando no violão de Manuel. Da próxima vez não vai perder a peña.',
        ending: { tone: 'neutro', title: 'Descansado, mas curioso', message: 'O Linu viu a Alhambra, mas ficou sem a noite de flamenco no Albaicín.' },
      },
    },
  },

  // ───────────────────────── es-h17 · B1.2 · Medellín ─────────────────────────
  {
    id: 'es-h17',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Un pingüino de flores en Medellín',
    emoji: '🌸',
    summary: 'Na Feria de las Flores, o Linu pode ajudar uma silletera a montar sua silleta ou assistir ao desfile da arquibancada.',
    cultural_context:
      'Todo mês de agosto, Medellín celebra a Feria de las Flores, cujo ponto alto é o Desfile de Silleteros: camponeses do corregimiento de Santa Elena carregam nas costas grandes arranjos de flores chamados “silletas”. A cidade é conhecida como “la ciudad de la eterna primavera” pelo clima ameno.',
    start: 'start',
    glossary: [
      ['la silleta', 'estrutura de madeira carregada nas costas, coberta de flores'],
      ['el silletero / la silletera', 'quem monta e carrega a silleta'],
      ['parce', 'amigo, parceiro (gíria de Medellín)'],
      ['llevar + tiempo + gerundio', 'fazer algo há (tanto tempo)'],
      ['seguir + gerundio', 'continuar (fazendo algo)'],
      ['por × para', '“por” = causa, meio; “para” = finalidade, destino'],
      ['la tribuna', 'a arquibancada'],
    ],
    nodes: {
      start: {
        emoji: '🏙️',
        text: 'Es agosto y Medellín está llena de flores. Julián, un amigo de Linu, le dice: “Parce, mañana será el Desfile de Silleteros. Doña Rosa, mi vecina, necesitará ayuda esta noche. ¿Te gustaría ir a Santa Elena?”',
        translation: 'É agosto e Medellín está cheia de flores. Julián, um amigo do Linu, lhe diz: “Parceiro, amanhã vai ser o Desfile de Silleteros. Dona Rosa, minha vizinha, vai precisar de ajuda hoje à noite. Você gostaria de ir a Santa Elena?”',
        choices: [
          { text: '“¡Me encantaría! ¿Cómo llegaremos?”', translation: '“Eu adoraria! Como vamos chegar lá?”', next: 'subida' },
          { text: '“Preferiría ver el desfile desde la tribuna.”', translation: '“Eu preferiria ver o desfile da arquibancada.”', next: 'tribuna' },
        ],
      },
      subida: {
        emoji: '🚡',
        text: 'Suben la montaña en el metrocable y Linu ve todo el valle desde arriba. En Santa Elena, doña Rosa los recibe entre montones de flores. “Llevo cuarenta años haciendo silletas, mijo, y sigo aprendiendo cada año.”',
        translation: 'Eles sobem a montanha no metrocable e o Linu vê todo o vale lá de cima. Em Santa Elena, dona Rosa os recebe entre montes de flores. “Faço silletas há quarenta anos, meu filho, e continuo aprendendo a cada ano.”',
        choices: [
          { text: '“¿Qué diseño hará este año?”', translation: '“Que desenho a senhora vai fazer este ano?”', next: 'trabajo' },
          {
            text: '“¡Qué valiente! ¿Entonces esta es su primera silleta?”',
            translation: '“Que corajosa! Então esta é a sua primeira silleta?”',
            wrong: '“Llevo cuarenta años haciendo silletas” quer dizer que ela FAZ silletas há quarenta anos. Não é a primeira: é uma veterana que “sigue aprendiendo”.',
          },
        ],
      },
      trabajo: {
        emoji: '🐧',
        text: 'Doña Rosa mira a Linu y se le ocurre una idea: “Este año haré un pingüino de flores blancas y negras, por ti, que viniste desde tan lejos.” Trabajan toda la noche. Linu pone las margaritas una por una y Julián sigue trayendo café.',
        translation: 'Dona Rosa olha para o Linu e tem uma ideia: “Este ano vou fazer um pinguim de flores brancas e pretas, por sua causa, que veio de tão longe.” Eles trabalham a noite toda. O Linu coloca as margaridas uma por uma e Julián continua trazendo café.',
        choices: [
          { text: '“¿De verdad? ¡Sería un honor para mí!”', translation: '“Sério? Seria uma honra para mim!”', next: 'desfile' },
          {
            text: '“Qué amable, pero no hace falta que me la regale.”',
            translation: '“Que gentil, mas não precisa me dar de presente.”',
            wrong: 'Ela disse “por ti”: faz o pinguim POR causa do Linu, em homenagem a ele. Não disse “para ti”; a silleta é dela e vai para o desfile.',
          },
        ],
      },
      tribuna: {
        emoji: '☀️',
        text: 'Al día siguiente, Linu está en la tribuna, bajo un sol fuerte. Julián lo llama por teléfono: “Acabo de hablar con doña Rosa. Le falta alguien que lleve la canasta de flores pequeñas detrás de ella.”',
        translation: 'No dia seguinte, o Linu está na arquibancada, debaixo de um sol forte. Julián liga para ele: “Acabei de falar com a dona Rosa. Está faltando alguém para levar a cesta de flores pequenas atrás dela.”',
        choices: [
          { text: '“¡Bajaré ahora mismo!”', translation: '“Vou descer agora mesmo!”', next: 'desfile' },
          { text: '“Prefiero quedarme aquí; seguiré mirando desde la tribuna.”', translation: '“Prefiro ficar aqui; vou continuar assistindo da arquibancada.”', next: 'final_tribuna' },
        ],
      },
      desfile: {
        emoji: '💐',
        text: 'Empieza el desfile. Doña Rosa camina despacio con la silleta en la espalda y Linu va a su lado. La gente aplaude y grita: “¡Vamos, doña Rosa!”',
        translation: 'O desfile começa. Dona Rosa caminha devagar com a silleta nas costas e o Linu vai ao lado dela. As pessoas aplaudem e gritam: “Vamos, dona Rosa!”',
        choices: [
          { text: 'Linu saluda al público con las aletas.', translation: 'O Linu acena para o público com as nadadeiras.', next: 'final_bom' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Al final del recorrido, doña Rosa se sienta, cansada y feliz. “El próximo año volverás a desfilar conmigo, ¿verdad?” Linu no lo duda: volverá.',
        translation: 'No fim do percurso, dona Rosa se senta, cansada e feliz. “No ano que vem você vai desfilar comigo de novo, não é?” O Linu não hesita: vai voltar.',
        ending: { tone: 'bom', title: 'Silletero de honra!', message: 'O Linu desfilou ao lado de dona Rosa na Feria de las Flores.' },
      },
      final_tribuna: {
        emoji: '📸',
        text: 'Desde la tribuna, Linu toma cien fotos de las silletas. Son preciosas, pero cuando pasa doña Rosa, él piensa que podría estar allí, a su lado.',
        translation: 'Da arquibancada, o Linu tira cem fotos das silletas. São lindíssimas, mas quando dona Rosa passa, ele pensa que poderia estar lá, ao lado dela.',
        ending: { tone: 'neutro', title: 'Da arquibancada', message: 'O Linu viu o desfile inteiro, mas perdeu a chance de participar dele.' },
      },
    },
  },

  // ───────────────────────── es-h18 · B1.2 · Tenerife ─────────────────────────
  {
    id: 'es-h18',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Estrellas sobre el Teide',
    emoji: '🔭',
    summary: 'Em Tenerife, o Linu conhece um estudante de astrofísica e pode passar a noite olhando as estrelas no Teide.',
    cultural_context:
      'O Teide, em Tenerife, é o ponto mais alto da Espanha, com 3.715 metros. Nas Canárias, o ônibus se chama “guagua”, e as pessoas usam “ustedes” em vez de “vosotros”, como na América Latina.',
    start: 'start',
    glossary: [
      ['la guagua', 'o ônibus (nas Canárias e no Caribe)'],
      ['acabar de + infinitivo', 'ter acabado de (fazer algo)'],
      ['¿Qué hora será?', 'Que horas devem ser? (futuro de probabilidade)'],
      ['Serán las once.', 'Devem ser onze horas.'],
      ['yo en tu lugar…', 'no seu lugar, eu…'],
      ['el mar de nubes', 'o mar de nuvens'],
      ['la estrella fugaz', 'a estrela cadente'],
    ],
    nodes: {
      start: {
        emoji: '🚏',
        text: 'Linu espera en una parada de Tenerife. Quiere subir al Teide, el volcán más alto de España. Una señora le dice: “¿La guagua del Teide? Acaba de salir, mi niño. La próxima pasará dentro de una hora.”',
        translation: 'O Linu espera num ponto de ônibus em Tenerife. Ele quer subir o Teide, o vulcão mais alto da Espanha. Uma senhora lhe diz: “O ônibus do Teide? Acabou de sair, meu filho. O próximo vai passar daqui a uma hora.”',
        choices: [
          { text: '“Bueno, esperaré aquí con paciencia.”', translation: '“Bom, vou esperar aqui com paciência.”', next: 'guagua' },
          {
            text: '“¡Qué suerte! Llego justo a tiempo para subir.”',
            translation: '“Que sorte! Chego bem na hora para subir.”',
            wrong: '“Acaba de salir” quer dizer “acabou de sair”: o ônibus já foi embora. O próximo só passa daqui a uma hora (“dentro de una hora”).',
          },
        ],
      },
      guagua: {
        emoji: '🚌',
        text: 'Una hora después, Linu se sienta en la guagua al lado de un chico con un telescopio. “Soy Ayoze y estudio astrofísica en La Laguna”, dice. “Esta noche observaré las estrellas en el parque nacional. ¿Te gustaría venir?”',
        translation: 'Uma hora depois, o Linu se senta no ônibus ao lado de um rapaz com um telescópio. “Sou o Ayoze e estudo astrofísica em La Laguna”, diz. “Hoje à noite vou observar as estrelas no parque nacional. Você gostaria de vir?”',
        choices: [
          { text: '“¡Sí! Nunca he visto un cielo de montaña.”', translation: '“Sim! Nunca vi um céu de montanha.”', next: 'atardecer' },
          { text: '“Primero subiré en el teleférico; luego ya veremos.”', translation: '“Primeiro vou subir no teleférico; depois a gente vê.”', next: 'teleferico' },
        ],
      },
      teleferico: {
        emoji: '🚠',
        text: 'Desde arriba, Linu ve otras islas en el horizonte. Pero allí hace frío y el viento sopla fuerte. Cuando baja, está muy cansado.',
        translation: 'Lá de cima, o Linu vê outras ilhas no horizonte. Mas lá faz frio e o vento sopra forte. Quando desce, está muito cansado.',
        choices: [
          { text: '“Buscaré a Ayoze; seguro que sigue por aquí.”', translation: '“Vou procurar o Ayoze; com certeza ele continua por aqui.”', next: 'atardecer' },
          { text: '“Volveré al hotel. Ya veré las estrellas otro día.”', translation: '“Vou voltar para o hotel. Vejo as estrelas outro dia.”', next: 'final_hotel' },
        ],
      },
      atardecer: {
        emoji: '🌅',
        text: 'Al atardecer, debajo de ellos hay un mar de nubes, y la sombra del Teide forma un enorme triángulo sobre él. Ayoze mira a Linu: “Yo en tu lugar me pondría otro abrigo. Esta noche hará mucho frío aquí arriba.”',
        translation: 'Ao entardecer, abaixo deles há um mar de nuvens, e a sombra do Teide forma um enorme triângulo sobre ele. Ayoze olha para o Linu: “No seu lugar, eu vestiria outro casaco. Hoje à noite vai fazer muito frio aqui em cima.”',
        choices: [
          { text: '“Tienes razón, me pondré la bufanda.”', translation: '“Você tem razão, vou pôr o cachecol.”', next: 'noche' },
        ],
      },
      noche: {
        emoji: '🌌',
        text: 'La noche es negra y la Vía Láctea cruza todo el cielo. “¿Qué hora será?”, pregunta Linu. “Serán las once”, responde Ayoze. “Y estaremos a cero grados, más o menos.”',
        translation: 'A noite é escura e a Via Láctea atravessa o céu inteiro. “Que horas devem ser?”, pergunta o Linu. “Devem ser umas onze”, responde Ayoze. “E deve estar fazendo uns zero grau, mais ou menos.”',
        choices: [
          { text: '“Por eso los astrónomos trabajan aquí, ¿no? El cielo está tan limpio…”', translation: '“É por isso que os astrônomos trabalham aqui, né? O céu está tão limpo…”', next: 'ciencia' },
          { text: '“Me estoy congelando… ¿Volvemos?”', translation: '“Estou congelando… Vamos voltar?”', next: 'final_frio' },
          {
            text: '“¿Entonces mañana hará cero grados?”',
            translation: '“Então amanhã vai fazer zero grau?”',
            wrong: '“Serán las once” e “estaremos a cero grados” usam o futuro para expressar PROBABILIDADE no presente: “devem ser onze horas”, “deve estar uns zero grau” agora. Ninguém falou de amanhã.',
          },
        ],
      },
      ciencia: {
        emoji: '✨',
        text: '“Exacto”, dice Ayoze. “Estamos por encima de las nubes, el aire es seco y hay leyes para proteger el cielo de la luz de las ciudades.” En ese momento, pasa una estrella fugaz y Linu pide un deseo.',
        translation: '“Exato”, diz Ayoze. “Estamos acima das nuvens, o ar é seco e há leis para proteger o céu da luz das cidades.” Nesse momento, passa uma estrela cadente e o Linu faz um pedido.',
        choices: [
          { text: '“¿Me enseñarías a usar el telescopio?”', translation: '“Você me ensinaria a usar o telescópio?”', next: 'final_bom' },
        ],
      },
      final_bom: {
        emoji: '🪐',
        text: 'Ayoze apunta el telescopio hacia Saturno, y Linu ve sus anillos por primera vez. Se queda sin palabras. Mañana seguirá hablando de ellos a todo el mundo.',
        translation: 'Ayoze aponta o telescópio para Saturno, e o Linu vê os anéis dele pela primeira vez. Fica sem palavras. Amanhã vai continuar falando deles para todo mundo.',
        ending: { tone: 'bom', title: 'Os anéis de Saturno!', message: 'O Linu viu a Via Láctea, uma estrela cadente e Saturno do alto do Teide.' },
      },
      final_frio: {
        emoji: '🥶',
        text: 'Ayoze sonríe y guarda el telescopio. Para ser un pingüino, Linu tiene poca paciencia con el frío. Al menos vio la Vía Láctea.',
        translation: 'Ayoze sorri e guarda o telescópio. Para um pinguim, o Linu tem pouca paciência com o frio. Pelo menos viu a Via Láctea.',
        ending: { tone: 'neutro', title: 'Um pinguim friorento', message: 'O Linu viu a Via Láctea, mas voltou antes de conhecer os segredos do céu do Teide.' },
      },
      final_hotel: {
        emoji: '🏨',
        text: 'Linu vuelve al hotel en la última guagua. Desde la ventana, en la ciudad, casi no se ven estrellas. Mañana volverá a subir, pero esta vez buscará a Ayoze.',
        translation: 'O Linu volta para o hotel no último ônibus. Da janela, na cidade, quase não se veem estrelas. Amanhã vai subir de novo, mas desta vez vai procurar o Ayoze.',
        ending: { tone: 'neutro', title: 'Fica para amanhã', message: 'O Linu viu as ilhas do teleférico, mas perdeu a noite de estrelas.' },
      },
    },
  },

  // ───────────────────────── es-h19 · B1.3 · Antigua Guatemala ─────────────────────────
  {
    id: 'es-h19',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Chocolate para la abuela',
    emoji: '🍫',
    summary: 'Em Antigua Guatemala, o Linu ajuda a amiga Ixchel a preparar chocolate artesanal de surpresa para o aniversário da avó.',
    cultural_context:
      'Antigua Guatemala foi a capital do Reino da Guatemala até os terremotos de 1773 e hoje é Patrimônio da Humanidade pela UNESCO. Fica rodeada pelos vulcões de Agua, Fuego e Acatenango; os antigos maias já preparavam bebidas de cacau.',
    start: 'start',
    glossary: [
      ['quiero que + subjuntivo', 'quero que (você faça algo)'],
      ['ojalá (que)', 'tomara que'],
      ['para que + subjuntivo', 'para que'],
      ['cuando + subjuntivo', 'quando (no futuro)'],
      ['no le digas nada', 'não diga nada a ela'],
      ['el comal', 'chapa de barro ou metal para tostar e cozinhar'],
      ['la piedra de moler', 'pedra de moer (metate)'],
      ['los granos de cacao', 'as sementes de cacau'],
    ],
    nodes: {
      start: {
        emoji: '🌋',
        text: 'Linu pasea por Antigua, bajo el Arco de Santa Catalina, con el volcán de Agua al fondo. Su amiga Ixchel lo alcanza corriendo. “Mañana es el cumpleaños de mi abuela y quiero que me ayudes a hacer chocolate, como lo hacían los mayas. ¡Pero no le digas nada a ella!”',
        translation: 'O Linu passeia por Antigua, sob o Arco de Santa Catalina, com o vulcão de Agua ao fundo. Sua amiga Ixchel o alcança correndo. “Amanhã é o aniversário da minha avó e quero que você me ajude a fazer chocolate, como os maias faziam. Mas não diga nada a ela!”',
        choices: [
          { text: '“¡Claro! ¿Qué necesitamos?”', translation: '“Claro! Do que precisamos?”', next: 'mercado' },
          {
            text: '“¡Qué buena idea! Esta noche se lo contaré a tu abuela.”',
            translation: '“Que boa ideia! Hoje à noite vou contar para a sua avó.”',
            wrong: '“No le digas nada” é um imperativo negativo: “não diga nada a ela”. É uma surpresa, então a avó não pode saber.',
          },
        ],
      },
      mercado: {
        emoji: '🧺',
        text: 'En el mercado compran granos de cacao, canela y azúcar. El vendedor les da un consejo: “Cuando lleguen a casa, tuesten los granos en el comal. No los quemen, porque el chocolate saldría amargo.” De repente, Ixchel se pone pálida: ¡su abuela está en el puesto de al lado!',
        translation: 'No mercado, eles compram sementes de cacau, canela e açúcar. O vendedor lhes dá um conselho: “Quando chegarem em casa, tostem as sementes no comal. Não as queimem, porque o chocolate ficaria amargo.” De repente, Ixchel fica pálida: a avó dela está na barraca ao lado!',
        choices: [
          { text: 'Linu se esconde detrás de un saco de café.', translation: 'O Linu se esconde atrás de um saco de café.', next: 'cocina' },
          { text: 'Linu saluda a la abuela con la bolsa de cacao en la aleta.', translation: 'O Linu cumprimenta a avó com a sacola de cacau na nadadeira.', next: 'abuela' },
        ],
      },
      abuela: {
        emoji: '👵',
        text: 'La abuela mira la bolsa con curiosidad. “¿Y para qué quieren ustedes tanto cacao, muchachos?” Ixchel le hace señas a Linu para que no hable. Linu tiene que decidir rápido.',
        translation: 'A avó olha a sacola com curiosidade. “E para que vocês querem tanto cacau, meninos?” Ixchel faz sinais para o Linu não falar. O Linu tem que decidir rápido.',
        choices: [
          { text: '“Es para un proyecto de la escuela, señora.”', translation: '“É para um projeto da escola, senhora.”', next: 'cocina' },
          { text: '“Es un secreto… bueno, es para su cumpleaños.”', translation: '“É segredo… bom, é para o seu aniversário.”', next: 'final_secreto' },
        ],
      },
      cocina: {
        emoji: '🔥',
        text: 'En casa, tuestan los granos y el olor llena la cocina. Después los muelen en la piedra de moler con la canela. “Ojalá que salga bien”, dice Ixchel. “Muele despacio para que quede suave, y no te comas la pasta antes de tiempo.”',
        translation: 'Em casa, eles tostam as sementes e o cheiro enche a cozinha. Depois, moem tudo na pedra de moer com a canela. “Tomara que dê certo”, diz Ixchel. “Moa devagar para que fique macio, e não coma a massa antes da hora.”',
        choices: [
          { text: 'Linu muele despacio, aunque la pasta huele deliciosa.', translation: 'O Linu mói devagar, embora a massa tenha um cheiro delicioso.', next: 'visita' },
        ],
      },
      visita: {
        emoji: '🚪',
        text: 'De pronto, alguien toca a la puerta. Es la voz de la abuela: “¿Ixchel? ¡Vine temprano!” Ixchel susurra: “¡Esconde el chocolate y no hagas ruido! Yo voy a abrir.”',
        translation: 'De repente, alguém bate à porta. É a voz da avó: “Ixchel? Cheguei cedo!” Ixchel sussurra: “Esconda o chocolate e não faça barulho! Eu vou abrir.”',
        choices: [
          { text: 'Linu esconde la olla en el horno y se queda quieto.', translation: 'O Linu esconde a panela no forno e fica quietinho.', next: 'fiesta' },
          {
            text: 'Linu empieza a cantar fuerte para que la abuela no sospeche.',
            translation: 'O Linu começa a cantar alto para a avó não desconfiar.',
            wrong: 'Ixchel pediu “no hagas ruido”: não faça barulho! Cantar alto é justamente o contrário, e a avó ia desconfiar na hora.',
          },
        ],
      },
      fiesta: {
        emoji: '🎂',
        text: 'Al día siguiente, la familia se reúne para el cumpleaños. Ixchel sirve el chocolate caliente en tazas de barro. La abuela lo prueba y cierra los ojos: “Quiero que me digan quién lo hizo. ¡Sabe igual que el de mi madre!”',
        translation: 'No dia seguinte, a família se reúne para o aniversário. Ixchel serve o chocolate quente em xícaras de barro. A avó prova e fecha os olhos: “Quero que me digam quem fez. Tem o mesmo gosto do da minha mãe!”',
        choices: [
          { text: '“Lo hicimos Ixchel y yo, con mucho cariño.”', translation: '“Fomos eu e a Ixchel que fizemos, com muito carinho.”', next: 'final_bom' },
          {
            text: '“Lo siento, señora, no sé quién es su madre.”',
            translation: '“Desculpe, senhora, não sei quem é a sua mãe.”',
            wrong: 'A avó quer saber QUEM FEZ o chocolate (“quiero que me digan quién lo hizo”). A mãe dela aparece só na comparação: o sabor lembra o chocolate que a mãe fazia.',
          },
        ],
      },
      final_bom: {
        emoji: '🥰',
        text: 'La abuela abraza a los dos. “Cuando vuelvas a Antigua, Linu, quiero que vengas a mi casa. Te enseñaré las recetas de mi madre.” Linu promete que volverá.',
        translation: 'A avó abraça os dois. “Quando você voltar a Antigua, Linu, quero que venha à minha casa. Vou te ensinar as receitas da minha mãe.” O Linu promete que vai voltar.',
        ending: { tone: 'bom', title: 'Surpresa perfeita!', message: 'O chocolate foi um sucesso e o Linu ganhou uma avó guatemalteca.' },
      },
      final_secreto: {
        emoji: '🙊',
        text: 'La abuela se ríe mucho. “Entonces yo les enseñaré a hacerlo, para que no les salga amargo.” Esa tarde, los tres cocinan juntos. No hubo sorpresa, pero el chocolate quedó riquísimo.',
        translation: 'A avó ri muito. “Então eu vou ensinar vocês a fazer, para que não fique amargo.” Naquela tarde, os três cozinham juntos. Não teve surpresa, mas o chocolate ficou uma delícia.',
        ending: { tone: 'neutro', title: 'Adeus, surpresa', message: 'O segredo escapou, mas o Linu aprendeu a receita com a própria avó.' },
      },
    },
  },

  // ───────────────────────── es-h20 · B1.3 · Mendoza ─────────────────────────
  {
    id: 'es-h20',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Pedaleando entre viñedos',
    emoji: '🚴',
    summary: 'Em Mendoza, na época da vindima, o Linu participa de uma corrida de bicicleta entre os vinhedos com o amigo Facu.',
    cultural_context:
      'Mendoza é um oásis no deserto, ao pé dos Andes: as ruas têm “acequias”, canais que levam a água do degelo da cordilheira desde a época dos povos huarpes. Na província fica o Aconcágua, a montanha mais alta das Américas, e todo início de março a cidade celebra a Fiesta Nacional de la Vendimia.',
    start: 'start',
    glossary: [
      ['¿te animás?', 'topa? / tem coragem? (voseo argentino de “¿te animas?”)'],
      ['mirá / andá / seguí', 'olhe / vá / siga (imperativo do voseo, com “vos”)'],
      ['no me esperes', 'não me espere (imperativo negativo)'],
      ['cuando salga el sol', 'quando o sol nascer'],
      ['la acequia', 'o canal de irrigação à beira da rua'],
      ['el viñedo', 'o vinhedo'],
      ['la vendimia', 'a vindima, a colheita da uva'],
      ['pinchar una rueda', 'furar um pneu'],
    ],
    nodes: {
      start: {
        emoji: '🍇',
        text: 'Es marzo, época de vendimia, y Linu visita el taller de bicicletas de su amigo Facu, en Maipú. “Mañana hay una carrera entre los viñedos”, le dice Facu. “Quiero que corras conmigo en mi equipo. ¿Te animás?”',
        translation: 'É março, época da vindima, e o Linu visita a oficina de bicicletas do amigo Facu, em Maipú. “Amanhã tem uma corrida entre os vinhedos”, diz Facu. “Quero que você corra comigo no meu time. Topa?”',
        choices: [
          { text: '“¡Sí! ¿Qué tengo que llevar?”', translation: '“Sim! O que eu tenho que levar?”', next: 'preparacion' },
          { text: '“Me encantaría, pero no sé andar muy bien en bicicleta…”', translation: '“Eu adoraria, mas não sei andar muito bem de bicicleta…”', next: 'practica' },
        ],
      },
      practica: {
        emoji: '🚲',
        text: 'Facu lo lleva a practicar por una calle tranquila. “No mires la rueda. Mirá adelante, hacia la cordillera.” Linu mira las montañas nevadas y… ¡plaf!, se cae en una acequia. Facu se ríe: “Tranqui, es agua de la nieve de los Andes. ¡Te va a encantar!”',
        translation: 'Facu o leva para praticar numa rua tranquila. “Não olhe para a roda. Olhe para a frente, para a cordilheira.” O Linu olha as montanhas nevadas e… tchibum!, cai numa acequia. Facu ri: “Relaxa, é água da neve dos Andes. Você vai adorar!”',
        choices: [
          { text: '“¡Está helada! Perfecta para un pingüino. Sigamos.”', translation: '“Está gelada! Perfeita para um pinguim. Vamos continuar.”', next: 'preparacion' },
        ],
      },
      preparacion: {
        emoji: '⛑️',
        text: 'Por la noche, Facu revisa las bicicletas. “Cuando salga el sol, empezamos, así que no te acuestes tarde. Llevá agua y no te olvides del casco.” Mira el cielo y agrega: “Ojalá que no haga demasiado calor.”',
        translation: 'À noite, Facu revisa as bicicletas. “Quando o sol nascer, a gente começa, então não vá dormir tarde. Leve água e não se esqueça do capacete.” Ele olha o céu e acrescenta: “Tomara que não faça calor demais.”',
        choices: [
          { text: '“Entendido. Me acostaré temprano.”', translation: '“Entendido. Vou dormir cedo.”', next: 'carrera' },
          {
            text: '“Genial, entonces puedo dormir hasta el mediodía.”',
            translation: '“Ótimo, então posso dormir até o meio-dia.”',
            wrong: '“Cuando salga el sol” quer dizer “quando o sol nascer”: a corrida começa de madrugada. E Facu ainda pediu “no te acuestes tarde”, não vá dormir tarde.',
          },
        ],
      },
      carrera: {
        emoji: '🏔️',
        text: 'La carrera empieza con el cielo rosado sobre los Andes. Linu y Facu pedalean entre filas de uvas moradas. De repente, se oye un ¡pum!: a Facu se le pinchó una rueda. Los otros equipos los pasan uno tras otro.',
        translation: 'A corrida começa com o céu rosado sobre os Andes. O Linu e Facu pedalam entre fileiras de uvas roxas. De repente, ouve-se um pum!: o pneu do Facu furou. As outras equipes os ultrapassam uma atrás da outra.',
        choices: [
          { text: 'Linu frena y vuelve a ayudar a Facu.', translation: 'O Linu freia e volta para ajudar o Facu.', next: 'ayuda' },
          { text: 'Linu sigue pedaleando: quiere ganar.', translation: 'O Linu continua pedalando: quer ganhar.', next: 'final_solo' },
        ],
      },
      ayuda: {
        emoji: '🔧',
        text: 'Facu saca las herramientas y dice: “Seguí vos, no me esperes. Así por lo menos uno de los dos llega entre los primeros.” Pero Linu ya tiene la rueda en las aletas.',
        translation: 'Facu pega as ferramentas e diz: “Vai você, não me espere. Assim pelo menos um de nós dois chega entre os primeiros.” Mas o Linu já está com a roda nas nadadeiras.',
        choices: [
          { text: '“No quiero que termines solo. Arreglémosla juntos.”', translation: '“Não quero que você termine sozinho. Vamos consertá-la juntos.”', next: 'llegada' },
          {
            text: '“Bueno, como me pediste, te espero aquí sentado.”',
            translation: '“Bom, como você pediu, espero você aqui sentado.”',
            wrong: 'Facu disse “no me esperes”: NÃO me espere. Ele pediu que o Linu seguisse (“seguí vos”) sem ele.',
          },
        ],
      },
      llegada: {
        emoji: '🏁',
        text: 'En diez minutos arreglan la rueda y llegan juntos a la meta, casi los últimos. Aun así, todos los aplauden, porque vieron que Linu volvió a ayudar a su amigo. En la fiesta de la vendimia, les dan jugo de uva y los invitan a pisar uvas descalzos.',
        translation: 'Em dez minutos eles consertam a roda e chegam juntos à linha de chegada, quase em último. Mesmo assim, todos os aplaudem, porque viram que o Linu voltou para ajudar o amigo. Na festa da vindima, eles ganham suco de uva e são convidados a pisar uvas descalços.',
        choices: [
          { text: 'Linu salta dentro del barril de uvas.', translation: 'O Linu pula dentro do barril de uvas.', next: 'final_bom' },
        ],
      },
      final_bom: {
        emoji: '💜',
        text: 'Linu sale del barril con las patas moradas. Facu le da un abrazo: “Cuando vuelvas a Mendoza, quiero que subamos juntos hasta el Aconcagua. Bueno… por lo menos hasta el mirador.”',
        translation: 'O Linu sai do barril com os pés roxos. Facu lhe dá um abraço: “Quando você voltar a Mendoza, quero que a gente suba junto até o Aconcágua. Bom… pelo menos até o mirante.”',
        ending: { tone: 'bom', title: 'Amigos até a linha de chegada', message: 'O Linu não ganhou a corrida, mas ganhou o aplauso de todos e pisou uvas na vindima.' },
      },
      final_solo: {
        emoji: '🥉',
        text: 'Linu llega tercero y recibe una medalla. Media hora después, Facu llega empujando la bicicleta, cansado pero sonriente. Linu mira la medalla y piensa que habría sido más lindo llegar juntos.',
        translation: 'O Linu chega em terceiro e recebe uma medalha. Meia hora depois, Facu chega empurrando a bicicleta, cansado mas sorridente. O Linu olha para a medalha e pensa que teria sido mais bonito chegar juntos.',
        ending: { tone: 'neutro', title: 'Medalha solitária', message: 'O Linu ganhou uma medalha, mas deixou o amigo para trás no caminho.' },
      },
    },
  },
  {
    id: 'es-h21',
    level: 'B1.3',
    cefr: 'B1',
    title: 'El cuatro de don Tito',
    emoji: '🎸',
    summary: 'No Velho San Juan, o Linu conhece um luthier que precisa de ajuda para tocar numa festa à noite, se a chuva deixar.',
    cultural_context:
      'O cuatro puertorriqueño, apesar do nome, costuma ter dez cordas, em cinco pares, e é considerado o instrumento nacional de Porto Rico. O coquí, uma rãzinha nativa da ilha, ganhou esse nome por causa do seu canto noturno: “co-quí!”.',
    start: 'start',
    glossary: [
      ['el cuatro', 'violinha típica de Porto Rico, com dez cordas'],
      ['no toques', 'não toque (imperativo negativo = subjuntivo)'],
      ['quiero que escuches', 'quero que você escute'],
      ['ojalá que no llueva', 'tomara que não chova'],
      ['para que', 'para que (sempre + subjuntivo)'],
      ['cuando llegues', 'quando você chegar'],
      ['la chiringa', 'pipa, pandorga (em Porto Rico)'],
      ['el coquí', 'rãzinha que canta à noite, símbolo de Porto Rico'],
    ],
    nodes: {
      start: {
        emoji: '🏘️',
        text: 'Linu camina por el Viejo San Juan, entre casas de colores y calles de adoquines azules. De una tiendita sale una música alegre de cuerdas. En la puerta, un letrero dice: “Taller de cuatros. Pase sin miedo”.',
        translation:
          'O Linu caminha pelo Velho San Juan, entre casas coloridas e ruas de paralelepípedos azuis. De uma lojinha sai uma música alegre de cordas. Na porta, uma placa diz: “Oficina de cuatros. Entre sem medo”.',
        choices: [
          { text: 'Entrar en el taller.', translation: 'Entrar na oficina.', next: 'taller' },
          { text: 'Seguir hasta El Morro, el castillo junto al mar.', translation: 'Seguir até El Morro, o castelo junto ao mar.', next: 'morro' },
        ],
      },
      taller: {
        emoji: '🪕',
        text: 'Un señor de pelo blanco lija la madera de un instrumento pequeño. “Soy don Tito. Este es un cuatro, aunque tiene diez cuerdas”, dice con una sonrisa. Luego pone el instrumento sobre la mesa: “No lo toques todavía, que el barniz está fresco. Primero quiero que escuches cómo suena el mío”.',
        translation:
          'Um senhor de cabelo branco lixa a madeira de um instrumento pequeno. “Sou o dom Tito. Este é um cuatro, embora tenha dez cordas”, diz sorrindo. Depois põe o instrumento sobre a mesa: “Não toque nele ainda, que o verniz está fresco. Primeiro quero que você escute como soa o meu”.',
        choices: [
          { text: 'Sentarse y escuchar a don Tito.', translation: 'Sentar-se e escutar o dom Tito.', next: 'escuchar' },
          {
            text: 'Tomar el cuatro nuevo y probar las cuerdas.',
            translation: 'Pegar o cuatro novo e experimentar as cordas.',
            wrong: 'Dom Tito pediu o contrário: “No lo toques todavía” — não toque nele ainda, porque o verniz está fresco. O imperativo negativo usa o subjuntivo: no toques, no comas, no abras.',
          },
        ],
      },
      escuchar: {
        emoji: '🎶',
        text: 'Don Tito toca una melodía rápida y alegre. “Esta noche hay música en la plaza y necesito que alguien me ayude con los instrumentos”, explica. Mira al cielo por la ventana y suspira: “Ojalá que no llueva, porque el cuatro no se puede mojar”.',
        translation:
          'Dom Tito toca uma melodia rápida e alegre. “Hoje à noite tem música na praça e preciso que alguém me ajude com os instrumentos”, explica. Olha para o céu pela janela e suspira: “Tomara que não chova, porque o cuatro não pode se molhar”.',
        choices: [
          { text: '“¡Yo lo ayudo, don Tito!”', translation: '“Eu ajudo o senhor, dom Tito!”', next: 'lluvia' },
          { text: '“Primero quiero ver El Morro. Vuelvo por la tarde.”', translation: '“Primeiro quero ver El Morro. Volto à tarde.”', next: 'morro' },
        ],
      },
      morro: {
        emoji: '🪁',
        text: 'Frente al castillo de El Morro hay un campo verde enorme lleno de familias. Un niño le presta a Linu su chiringa, y la cometa sube muy alto sobre el mar. “¡No la sueltes, que el viento está fuerte!”, le grita el niño.',
        translation:
          'Em frente ao castelo de El Morro há um enorme gramado cheio de famílias. Um menino empresta sua pipa ao Linu, e ela sobe bem alto sobre o mar. “Não solte, que o vento está forte!”, grita o menino.',
        choices: [
          { text: 'Devolver la chiringa y volver al taller de don Tito.', translation: 'Devolver a pipa e voltar à oficina do dom Tito.', next: 'lluvia' },
          { text: 'Quedarse toda la tarde jugando con la chiringa.', translation: 'Ficar a tarde toda brincando com a pipa.', next: 'final_morro' },
        ],
      },
      lluvia: {
        emoji: '🌧️',
        text: 'A las seis empieza a llover fuerte. Don Tito mete los cuatros en estuches y le da uno a Linu. “Cuando lleguemos a la plaza, no abras el estuche hasta que estemos bajo el techo del quiosco”, le dice. “Y camina por los balcones para que no te mojes.”',
        translation:
          'Às seis começa a chover forte. Dom Tito coloca os cuatros em estojos e entrega um ao Linu. “Quando chegarmos à praça, não abra o estojo até estarmos debaixo do teto do coreto”, diz ele. “E caminhe debaixo das sacadas para não se molhar.”',
        choices: [
          { text: 'Caminar pegado a las casas, bajo los balcones.', translation: 'Caminhar rente às casas, debaixo das sacadas.', next: 'plaza' },
          {
            text: 'Abrir el estuche para ver si el cuatro está bien.',
            translation: 'Abrir o estojo para ver se o cuatro está bem.',
            wrong: 'Dom Tito disse “no abras el estuche hasta que estemos bajo el techo” — só se abre o estojo debaixo do teto do coreto, senão o cuatro se molha. Repare: “hasta que” + subjuntivo fala de algo que ainda vai acontecer.',
          },
        ],
      },
      plaza: {
        emoji: '🌙',
        text: 'Bajo el quiosco, don Tito y dos amigas empiezan a tocar, y la gente baila a pesar de la lluvia. Cuando se para el agua, se oye otro canto desde los árboles: “¡Co-quí! ¡Co-quí!”. Don Tito se ríe: “Los coquíes también quieren tocar. Que no te dé vergüenza: acompáñalos con estas maracas”.',
        translation:
          'Debaixo do coreto, dom Tito e duas amigas começam a tocar, e o pessoal dança apesar da chuva. Quando a água para, ouve-se outro canto vindo das árvores: “Co-quí! Co-quí!”. Dom Tito ri: “Os coquís também querem tocar. Não fique com vergonha: acompanhe-os com estas maracas”.',
        choices: [
          { text: 'Tocar las maracas al ritmo de los coquíes.', translation: 'Tocar as maracas no ritmo dos coquís.', next: 'final_bom' },
          { text: 'Preferir mirar y aplaudir desde un banco.', translation: 'Preferir olhar e aplaudir de um banco.', next: 'final_banco' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu toca las maracas y la gente aplaude al pingüino músico. Al final, don Tito le regala una púa de carey falso con su nombre. “Cuando vuelvas a San Juan, quiero que me visites”, le dice, “para que te enseñe a tocar el cuatro”.',
        translation:
          'O Linu toca as maracas e o pessoal aplaude o pinguim músico. No fim, dom Tito lhe dá de presente uma palheta de imitação de casco de tartaruga com o nome dele. “Quando você voltar a San Juan, quero que me visite”, diz ele, “para eu te ensinar a tocar o cuatro”.',
        ending: { tone: 'bom', title: 'Músico em San Juan!', message: 'O Linu ajudou o dom Tito, protegeu os instrumentos da chuva e ainda tocou com os coquís. Já tem até aula de cuatro marcada.' },
      },
      final_banco: {
        emoji: '👏',
        text: 'Linu se sienta en un banco y aplaude cada canción. La música es preciosa, pero ve que la gente del escenario lo busca con la mirada. Don Tito le guiña un ojo: “Ojalá que la próxima vez te animes”.',
        translation:
          'O Linu se senta num banco e aplaude cada música. A música é linda, mas ele percebe que o pessoal do palco o procura com o olhar. Dom Tito dá uma piscadinha: “Tomara que da próxima vez você se anime”.',
        ending: { tone: 'neutro', title: 'Plateia fiel', message: 'Foi uma noite bonita, mas o convite era para tocar! Na próxima, pegue as maracas.' },
      },
      final_morro: {
        emoji: '🌅',
        text: 'Linu juega con la chiringa hasta el atardecer y el cielo se pone naranja sobre el mar. Cuando por fin vuelve al taller, la puerta ya está cerrada. En un papel, don Tito escribió: “Fui a la plaza. Ojalá que nos veamos otro día”.',
        translation:
          'O Linu brinca com a pipa até o entardecer, e o céu fica laranja sobre o mar. Quando finalmente volta à oficina, a porta já está fechada. Num papel, dom Tito escreveu: “Fui para a praça. Tomara que a gente se veja outro dia”.',
        ending: { tone: 'neutro', title: 'Pipa ao pôr do sol', message: 'A tarde em El Morro foi linda, mas o dom Tito precisava de ajuda. Volte e acompanhe a música na praça!' },
      },
    },
  },
  {
    id: 'es-h22',
    level: 'B1.4',
    cefr: 'B1',
    title: 'El cenote del pájaro toh',
    emoji: '💧',
    summary: 'Em Mérida, o Linu e a estudante de biologia Itzel vão nadar num cenote, onde mora um pássaro de cauda de pêndulo.',
    cultural_context:
      'A península de Iucatã quase não tem rios na superfície: a água da chuva se infiltra no calcário e corre por rios subterrâneos. Os cenotes são poços naturais que se formam quando o teto de pedra desaba, e a palavra vem do maia “ts’ono’ot”.',
    start: 'start',
    glossary: [
      ['el cenote', 'poço natural de água doce na rocha calcária'],
      ['había salido', 'tinha saído (pluscuamperfecto)'],
      ['me dijo que…', 'me disse que… (estilo indireto)'],
      ['cuyo / cuya', 'cujo / cuja'],
      ['el cual / la cual', 'o qual / a qual'],
      ['la combi', 'van de transporte coletivo (no México)'],
      ['el bloqueador', 'protetor solar (no México)'],
      ['el pájaro toh', 'momoto de cauda longa em forma de raquete (Eumomota superciliosa), típico de Iucatã'],
    ],
    nodes: {
      start: {
        emoji: '🏛️',
        text: 'En Mérida, a la que llaman “la Ciudad Blanca”, Linu conoce a Itzel, una estudiante de biología cuya abuela habla maya. Itzel le cuenta que su abuela le había dicho que en el cenote de su pueblo vive un pájaro muy especial. “Vamos mañana temprano”, propone, “pero antes hay que desayunar bien”.',
        translation:
          'Em Mérida, que chamam de “a Cidade Branca”, o Linu conhece a Itzel, uma estudante de biologia cuja avó fala maia. A Itzel conta que a avó tinha lhe dito que no cenote do povoado dela vive um pássaro muito especial. “Vamos amanhã cedo”, propõe, “mas antes é preciso tomar um bom café da manhã”.',
        choices: [
          { text: 'Desayunar en el mercado con Itzel.', translation: 'Tomar café da manhã no mercado com a Itzel.', next: 'mercado' },
          { text: 'Ir directo a la parada de las combis.', translation: 'Ir direto ao ponto das vans.', next: 'parada' },
        ],
      },
      mercado: {
        emoji: '🌮',
        text: 'En el mercado, una señora cuyos tacos de cochinita pibil son famosos les sirve dos platos. Itzel explica que la cochinita es carne de cerdo que se cocina con achiote, el cual le da ese color rojo. Linu come tan despacio que se olvida de la hora.',
        translation:
          'No mercado, uma senhora cujos tacos de cochinita pibil são famosos serve dois pratos. A Itzel explica que a cochinita é carne de porco cozida com urucum, o qual lhe dá essa cor vermelha. O Linu come tão devagar que se esquece da hora.',
        choices: [{ text: 'Correr a la parada de las combis.', translation: 'Correr ao ponto das vans.', next: 'parada' }],
      },
      parada: {
        emoji: '🚐',
        text: 'Cuando llegan a la parada, un señor les dice que la combi de las ocho ya había salido hacía cinco minutos. La siguiente sale a las nueve. Mientras tanto, llega un taxi colectivo que va al mismo pueblo y en el cual quedan dos lugares.',
        translation:
          'Quando chegam ao ponto, um senhor diz que a van das oito já tinha saído fazia cinco minutos. A próxima sai às nove. Enquanto isso, chega um táxi coletivo que vai para o mesmo povoado e no qual sobram dois lugares.',
        choices: [
          { text: 'Subir al taxi colectivo.', translation: 'Entrar no táxi coletivo.', next: 'entrada' },
          {
            text: 'Correr para subir a la combi de las ocho.',
            translation: 'Correr para pegar a van das oito.',
            wrong: 'A van das oito “ya había salido”: já tinha saído cinco minutos antes de eles chegarem. O pluscuamperfecto (había salido) marca algo que aconteceu ANTES de outro fato passado.',
          },
        ],
      },
      entrada: {
        emoji: '🪧',
        text: 'En la entrada del cenote, el guardián les explica las reglas. Les dice que antes de bajar tienen que ducharse y que no pueden usar bloqueador ni repelente, porque los químicos contaminan el agua. También les dice que el cenote tiene veinte metros de profundidad y que hay que usar chaleco.',
        translation:
          'Na entrada do cenote, o guarda explica as regras. Diz que antes de descer eles têm de tomar uma ducha e que não podem usar protetor solar nem repelente, porque os produtos químicos contaminam a água. Também diz que o cenote tem vinte metros de profundidade e que é preciso usar colete.',
        choices: [
          { text: 'Ducharse, ponerse el chaleco y bajar.', translation: 'Tomar uma ducha, vestir o colete e descer.', next: 'bajada' },
          {
            text: 'Ponerse bloqueador para no quemarse y bajar.',
            translation: 'Passar protetor solar para não se queimar e descer.',
            wrong: 'O guarda disse “que no pueden usar bloqueador ni repelente”: os produtos químicos contaminam a água do cenote. No estilo indireto, “dice que…” repete a fala de outra pessoa.',
          },
        ],
      },
      bajada: {
        emoji: '🌿',
        text: 'Bajan por una escalera de piedra hasta una cueva enorme. Las raíces de los árboles, las cuales cuelgan desde el techo, llegan hasta el agua turquesa. Por un agujero en la roca entra un rayo de sol que ilumina a los peces pequeños.',
        translation:
          'Descem por uma escada de pedra até uma caverna enorme. As raízes das árvores, as quais pendem do teto, chegam até a água turquesa. Por um buraco na rocha entra um raio de sol que ilumina os peixinhos.',
        choices: [{ text: 'Buscar al pájaro del que habló la abuela.', translation: 'Procurar o pássaro de que a avó falou.', next: 'toh' }],
      },
      toh: {
        emoji: '🐦',
        text: 'En una pared, Itzel señala un pájaro verde y azul cuya cola larga se mueve de un lado a otro, como un péndulo. “Es el toh”, susurra. “Mi abuela me contó que su abuelo ya lo había visto aquí cuando era niño.”',
        translation:
          'Numa parede, a Itzel aponta para um pássaro verde e azul cuja cauda comprida se mexe de um lado para o outro, como um pêndulo. “É o toh”, sussurra. “Minha avó me contou que o avô dela já o tinha visto aqui quando era criança.”',
        choices: [
          { text: 'Nadar en silencio para no asustarlo.', translation: 'Nadar em silêncio para não assustá-lo.', next: 'final_bom' },
          { text: 'Gritar de emoción y lanzarse al agua.', translation: 'Gritar de emoção e se jogar na água.', next: 'final_susto' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Linu flota boca arriba en el agua fresca mientras el toh mueve la cola sobre su cabeza. Por la noche, la abuela de Itzel le dice que pocas personas habían visto el toh tan de cerca. Luego le enseña a decir “gracias” en maya: “Dios bo’otik”.',
        translation:
          'O Linu boia de barriga para cima na água fresca enquanto o toh balança a cauda sobre a cabeça dele. À noite, a avó da Itzel diz que poucas pessoas tinham visto o toh tão de perto. Depois ensina a ele como se diz “obrigado” em maia: “Dios bo’otik”.',
        ending: { tone: 'bom', title: 'Encontro com o toh!', message: 'O Linu respeitou as regras do cenote, nadou em silêncio e ainda aprendeu uma palavra em maia.' },
      },
      final_susto: {
        emoji: '💦',
        text: 'Con el ruido del salto, el toh sale volando por el agujero del techo. Itzel se ríe: “Mi abuela me había dicho que era un pájaro tímido”. Linu nada un buen rato, pero el pájaro ya no vuelve.',
        translation:
          'Com o barulho do salto, o toh sai voando pelo buraco do teto. A Itzel ri: “Minha avó tinha me dito que era um pássaro tímido”. O Linu nada um bom tempo, mas o pássaro não volta mais.',
        ending: { tone: 'neutro', title: 'Mergulho barulhento', message: 'O banho no cenote foi ótimo, mas o toh fugiu! Da próxima vez, nade em silêncio.' },
      },
    },
  },
  {
    id: 'es-h23',
    level: 'B1.4',
    cefr: 'B1',
    title: 'La isla que flota',
    emoji: '🛶',
    summary: 'Em Puno, o Linu visita as ilhas flutuantes dos uros, feitas de totora, e descobre que dá até para comer a planta.',
    cultural_context:
      'O lago Titicaca fica a cerca de 3.800 metros de altitude, na fronteira entre o Peru e a Bolívia. Perto de Puno, o povo uro vive em ilhas flutuantes feitas de camadas de totora, um junco que precisa ser renovado sem parar porque a parte de baixo apodrece na água.',
    start: 'start',
    glossary: [
      ['la totora', 'junco do lago, com o qual se fazem ilhas e barcos'],
      ['el soroche', 'mal-estar da altitude (nos Andes)'],
      ['la balsa', 'barco de totora'],
      ['la cual / en la que', 'a qual / na qual'],
      ['quien / quienes', 'quem, que (para pessoas)'],
      ['había construido', 'tinha construído (pluscuamperfecto)'],
      ['me contó que…', 'me contou que… (estilo indireto)'],
      ['el zambullidor', 'mergulhão do Titicaca, ave que não voa'],
    ],
    nodes: {
      start: {
        emoji: '🏔️',
        text: 'Linu llega a Puno, a orillas del lago Titicaca, y siente la cabeza pesada. Rosa, la dueña del hostal, le dice que es el soroche y que tiene que caminar despacio el primer día. Le sirve un té de muña, una hierba que, según ella, ayuda con la altura.',
        translation:
          'O Linu chega a Puno, às margens do lago Titicaca, e sente a cabeça pesada. A Rosa, dona do albergue, diz que é o soroche e que ele tem de caminhar devagar no primeiro dia. Ela serve um chá de muña, uma erva que, segundo ela, ajuda com a altitude.',
        choices: [
          { text: 'Descansar esa tarde y salir al día siguiente.', translation: 'Descansar naquela tarde e sair no dia seguinte.', next: 'puerto' },
          {
            text: 'Subir corriendo al mirador más alto de la ciudad.',
            translation: 'Subir correndo até o mirante mais alto da cidade.',
            wrong: 'A Rosa disse “que tiene que caminar despacio el primer día”: a 3.800 metros, correr no primeiro dia só piora o soroche. Ela relatou um conselho em estilo indireto (le dice que…).',
          },
        ],
      },
      puerto: {
        emoji: '⛵',
        text: 'Al día siguiente, Linu sube a una lancha en el puerto de Puno. El lanchero, quien ha crecido en el lago, le cuenta que su familia vive en una isla en la que no hay ni un metro de tierra. Media hora después, aparecen islas amarillas que se mueven un poco con las olas.',
        translation:
          'No dia seguinte, o Linu sobe numa lancha no porto de Puno. O barqueiro, que cresceu no lago, conta que a família dele vive numa ilha na qual não há nem um metro de terra. Meia hora depois, aparecem ilhas amarelas que se mexem um pouco com as ondas.',
        choices: [{ text: 'Bajar en la isla de la familia del lanchero.', translation: 'Descer na ilha da família do barqueiro.', next: 'isla' }],
      },
      isla: {
        emoji: '🌾',
        text: 'El suelo es blando, como un colchón de paja. Don Mateo, el abuelo de la familia, explica que la isla está hecha de totora, con la cual también construyen sus casas y sus balsas. Le cuenta que su padre había construido la primera capa hacía más de cincuenta años y que cada mes ponen totora nueva encima.',
        translation:
          'O chão é macio, como um colchão de palha. Dom Mateo, o avô da família, explica que a ilha é feita de totora, com a qual também constroem suas casas e seus barcos. Conta que o pai dele tinha construído a primeira camada fazia mais de cinquenta anos e que todo mês eles põem totora nova por cima.',
        choices: [
          { text: 'Preguntar si la totora sirve para algo más.', translation: 'Perguntar se a totora serve para mais alguma coisa.', next: 'comer' },
          { text: 'Pedir un paseo en la balsa de totora.', translation: 'Pedir um passeio no barco de totora.', next: 'balsa' },
        ],
      },
      comer: {
        emoji: '🥢',
        text: 'Don Mateo arranca un tallo de totora y lo pela. “La parte blanca, la que crece bajo el agua, se come; la parte verde de arriba, no, que es dura y amarga”, explica. Le ofrece el tallo a Linu con una sonrisa.',
        translation:
          'Dom Mateo arranca um talo de totora e o descasca. “A parte branca, a que cresce debaixo d’água, se come; a parte verde de cima, não, que é dura e amarga”, explica. Oferece o talo ao Linu com um sorriso.',
        choices: [
          { text: 'Morder la parte blanca de abajo.', translation: 'Morder a parte branca de baixo.', next: 'trabajo' },
          {
            text: 'Morder la punta verde del tallo.',
            translation: 'Morder a ponta verde do talo.',
            wrong: 'Dom Mateo disse que se come “la parte blanca, la que crece bajo el agua”. A parte verde de cima é dura e amarga. Aqui o relativo “la que” retoma “la parte”.',
          },
        ],
      },
      balsa: {
        emoji: '🛶',
        text: 'La nieta de don Mateo, quien rema desde los seis años, lleva a Linu en una balsa con cabeza de puma. Cerca de los juncos ven un ave de pecho blanco que se zambulle sin parar. “Es el zambullidor del Titicaca, el cual no puede volar”, explica la chica.',
        translation:
          'A neta de dom Mateo, que rema desde os seis anos, leva o Linu num barco com cabeça de puma. Perto dos juncos, eles veem uma ave de peito branco que mergulha sem parar. “É o mergulhão do Titicaca, o qual não consegue voar”, explica a menina.',
        choices: [
          { text: 'Volver a la isla para ayudar a don Mateo.', translation: 'Voltar à ilha para ajudar o dom Mateo.', next: 'trabajo' },
          { text: 'Seguir remando hasta ver otro zambullidor.', translation: 'Continuar remando até ver outro mergulhão.', next: 'final_noche' },
        ],
      },
      trabajo: {
        emoji: '💪',
        text: 'Toda la familia está cortando totora para la capa nueva. Linu carga los manojos, los cuales pesan más de lo que parecen, y los pone en fila sobre el suelo viejo. Don Mateo le dice que nunca había visto a un pingüino tan trabajador.',
        translation:
          'A família toda está cortando totora para a camada nova. O Linu carrega os feixes, os quais pesam mais do que parecem, e os coloca em fila sobre o chão velho. Dom Mateo diz que nunca tinha visto um pinguim tão trabalhador.',
        choices: [{ text: 'Terminar la capa y sentarse a comer con la familia.', translation: 'Terminar a camada e sentar-se para comer com a família.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'La familia sirve trucha frita con papas, y todos comen mirando el lago brillante. Don Mateo le regala a Linu un pequeño barco de totora que había hecho su nieta. “Ahora una parte de nuestra isla es tuya”, le dice.',
        translation:
          'A família serve truta frita com batatas, e todos comem olhando o lago brilhante. Dom Mateo dá ao Linu um barquinho de totora que a neta dele tinha feito. “Agora uma parte da nossa ilha é sua”, diz ele.',
        ending: { tone: 'bom', title: 'Um pedaço da ilha!', message: 'O Linu respeitou a altitude, provou a totora do jeito certo e ajudou a família a renovar a ilha flutuante.' },
      },
      final_noche: {
        emoji: '🌌',
        text: 'Cuando vuelven, la chica le dice que la última lancha a Puno ya había salido. Linu duerme en una casita de totora, bajo una manta de lana de alpaca. El cielo está tan lleno de estrellas que casi no puede dormir.',
        translation:
          'Quando voltam, a menina diz que a última lancha para Puno já tinha saído. O Linu dorme numa casinha de totora, debaixo de um cobertor de lã de alpaca. O céu está tão cheio de estrelas que ele quase não consegue dormir.',
        ending: { tone: 'neutro', title: 'Noite nos uros', message: 'A noite estrelada foi linda, mas o Linu perdeu o barco e não ajudou a família. Da próxima vez, volte a tempo!' },
      },
    },
  },
  {
    id: 'es-h24',
    level: 'B1.4',
    cefr: 'B1',
    title: 'La rana de Salamanca',
    emoji: '🐸',
    summary: 'Em Salamanca, o Linu ajuda a amiga Camila, nervosa com uma prova, a procurar a famosa rã de pedra da universidade.',
    cultural_context:
      'A Universidade de Salamanca foi fundada em 1218 e é uma das mais antigas da Europa ainda em funcionamento. Na fachada das Escuelas Mayores há uma pequena rã esculpida sobre uma caveira; diz a tradição que o estudante que a encontra passa nos exames.',
    start: 'start',
    glossary: [
      ['la fachada', 'a fachada'],
      ['la calavera', 'a caveira'],
      ['sobre la cual', 'sobre a qual'],
      ['cuyo nombre', 'cujo nome'],
      ['no había dormido', 'não tinha dormido (pluscuamperfecto)'],
      ['¿buscáis…?', 'vocês procuram…? (vosotros, usado na Espanha; na América Latina: ¿buscan…?)'],
      ['la tuna', 'grupo musical de estudantes, com capa preta e violões'],
      ['el examen', 'a prova, o exame (masculino em espanhol)'],
    ],
    nodes: {
      start: {
        emoji: '📚',
        text: 'Linu visita Salamanca con Camila, una amiga colombiana que estudia allí. Camila le cuenta que la noche anterior no había dormido nada, porque mañana tiene el examen más difícil del año. “Dicen que quien encuentra la rana de la fachada aprueba los exámenes”, suspira.',
        translation:
          'O Linu visita Salamanca com a Camila, uma amiga colombiana que estuda lá. A Camila conta que na noite anterior não tinha dormido nada, porque amanhã tem a prova mais difícil do ano. “Dizem que quem encontra a rã da fachada passa nas provas”, suspira.',
        choices: [
          { text: '“¡Vamos a buscar la rana!”', translation: '“Vamos procurar a rã!”', next: 'fachada' },
          { text: '“Mejor vamos primero a la catedral.”', translation: '“Melhor irmos primeiro à catedral.”', next: 'catedral' },
        ],
      },
      catedral: {
        emoji: '🧑‍🚀',
        text: 'En la puerta de la Catedral Nueva, Camila le muestra algo curioso: un astronauta de piedra. Le explica que un restaurador lo había añadido en 1992, durante unas obras. Linu se ríe, pero Camila mira el reloj: la universidad cierra pronto.',
        translation:
          'Na porta da Catedral Nova, a Camila mostra uma coisa curiosa: um astronauta de pedra. Explica que um restaurador o tinha acrescentado em 1992, durante umas obras. O Linu ri, mas a Camila olha o relógio: a universidade fecha logo.',
        choices: [
          { text: 'Ir rápido a la fachada de la universidad.', translation: 'Ir rápido à fachada da universidade.', next: 'fachada' },
          { text: 'Quedarse buscando más figuras en la catedral.', translation: 'Ficar procurando mais figuras na catedral.', next: 'final_sin_rana' },
        ],
      },
      fachada: {
        emoji: '🏛️',
        text: 'Delante de la fachada de las Escuelas Mayores hay un grupo de turistas mirando hacia arriba. La piedra está llena de escudos, flores y caras. En el centro hay un medallón en el cual aparecen los Reyes Católicos, pero de rana, nada.',
        translation:
          'Diante da fachada das Escuelas Mayores há um grupo de turistas olhando para cima. A pedra está cheia de brasões, flores e rostos. No centro há um medalhão no qual aparecem os Reis Católicos, mas rã, nada.',
        choices: [{ text: 'Preguntar a una estudiante que pasa por allí.', translation: 'Perguntar a uma estudante que passa por ali.', next: 'lucia' }],
      },
      lucia: {
        emoji: '👩‍🎓',
        text: 'La estudiante, cuyo nombre es Lucía, se ríe: “¿Vosotros también buscáis la rana? Mirad la columna de la derecha”. Les explica que hay unas calaveras y que la rana está sentada sobre una de ellas. “Es tan pequeña que mucha gente se va sin verla”, añade.',
        translation:
          'A estudante, cujo nome é Lucía, ri: “Vocês também estão procurando a rã? Olhem a coluna da direita”. Explica que há umas caveiras e que a rã está sentada sobre uma delas. “É tão pequena que muita gente vai embora sem vê-la”, acrescenta.',
        choices: [
          { text: 'Mirar las calaveras de la columna de la derecha.', translation: 'Olhar as caveiras da coluna da direita.', next: 'rana' },
          {
            text: 'Buscar la rana en el medallón de los Reyes Católicos.',
            translation: 'Procurar a rã no medalhão dos Reis Católicos.',
            wrong: 'A Lucía disse que a rã está “sobre una de ellas”, ou seja, sobre uma das caveiras da coluna da direita, não no medalhão do centro. Ela fala com “vosotros” (buscáis, mirad), como se faz na Espanha.',
          },
        ],
      },
      rana: {
        emoji: '🔍',
        text: 'Después de un rato, Camila grita: “¡Ahí está!”. Sobre una calavera, la cual parece sonreír, hay una ranita de piedra. Lucía los invita: “Esta noche toca la tuna en la Plaza Mayor. Os espero a las nueve, debajo del reloj”.',
        translation:
          'Depois de um tempo, a Camila grita: “Ali está!”. Sobre uma caveira, que parece sorrir, há uma rãzinha de pedra. A Lucía os convida: “Hoje à noite a tuna toca na Praça Maior. Espero vocês às nove, debaixo do relógio”.',
        choices: [
          { text: 'Ir a la Plaza Mayor a las nueve y buscar el reloj.', translation: 'Ir à Praça Maior às nove e procurar o relógio.', next: 'plaza' },
          {
            text: 'Ir a la catedral a las nueve y esperar a Lucía allí.',
            translation: 'Ir à catedral às nove e esperar a Lucía lá.',
            wrong: 'A Lucía marcou na Plaza Mayor, “debajo del reloj”, não na catedral. “Os espero” é o “vosotros” da Espanha: “espero vocês”.',
          },
        ],
      },
      plaza: {
        emoji: '🎻',
        text: 'La Plaza Mayor brilla con luz dorada. Los tunos, quienes llevan capas negras llenas de cintas de colores, cantan y tocan guitarras y bandurrias. Lucía le cuenta a Camila que ella también había estado muy nerviosa antes de su primer examen.',
        translation:
          'A Praça Maior brilha com uma luz dourada. Os tunos, que usam capas pretas cheias de fitas coloridas, cantam e tocam violões e bandurras. A Lucía conta à Camila que ela também tinha ficado muito nervosa antes da primeira prova.',
        choices: [{ text: 'Cantar con la tuna y volver temprano a casa.', translation: 'Cantar com a tuna e voltar cedo para casa.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Al día siguiente, Camila sale del examen con una sonrisa enorme. Le dice a Linu que había estudiado mucho, pero que la rana le había dado valor. Esa tarde, los tres celebran con un chocolate caliente en la Plaza Mayor.',
        translation:
          'No dia seguinte, a Camila sai da prova com um sorriso enorme. Diz ao Linu que tinha estudado muito, mas que a rã lhe tinha dado coragem. Naquela tarde, os três comemoram com um chocolate quente na Praça Maior.',
        ending: { tone: 'bom', title: 'Aprovada!', message: 'O Linu encontrou a rã, entendeu o “vosotros” da Lucía e ganhou uma amiga salmantina. A Camila passou na prova!' },
      },
      final_sin_rana: {
        emoji: '🔒',
        text: 'Linu encuentra un dragón que come helado y varios animales en la catedral. Cuando llegan a la universidad, las puertas ya están cerradas y la fachada queda en sombra. Camila se ríe: “Bueno, tendré que aprobar sin la rana”.',
        translation:
          'O Linu encontra um dragão que toma sorvete e vários animais na catedral. Quando chegam à universidade, as portas já estão fechadas e a fachada fica na sombra. A Camila ri: “Bom, vou ter que passar sem a rã”.',
        ending: { tone: 'neutro', title: 'Sem rã', message: 'A catedral é cheia de surpresas, mas a rã da sorte ficou para outro dia. Volte e procure na fachada da universidade!' },
      },
    },
  },
  {
    id: 'es-h25',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Un barco sube una montaña',
    emoji: '🚢',
    summary: 'Nas eclusas de Miraflores, uma engenheira mostra ao Linu como o Canal do Panamá levanta navios gigantes só com a força da água.',
    cultural_context:
      'O Canal do Panamá foi inaugurado em 1914 e liga o oceano Atlântico ao Pacífico. As eclusas levam os navios até o lago Gatún, cerca de 26 metros acima do nível do mar, usando só a gravidade: a água doce desce do lago, sem bombas.',
    start: 'start',
    glossary: [
      ['la esclusa', 'a eclusa'],
      ['si tuviera…', 'se tivesse… (imperfecto de subjuntivo)'],
      ['aunque', 'embora, mesmo que'],
      ['sin embargo', 'no entanto'],
      ['por lo tanto', 'portanto'],
      ['la bomba', 'a bomba (de água)'],
      ['el remolcador', 'o rebocador'],
      ['la mula', 'locomotiva que puxa os navios na eclusa (no canal)'],
    ],
    nodes: {
      start: {
        emoji: '🏗️',
        text: 'Linu está en el mirador de las esclusas de Miraflores, cerca de la Ciudad de Panamá. A su lado, la ingeniera Marisol, quien trabaja en el canal desde hace veinte años, le pregunta: “Si tuvieras que subir un barco de cincuenta mil toneladas a un lago, ¿cómo lo harías?”. Linu no tiene ni idea; sin embargo, está muy curioso.',
        translation:
          'O Linu está no mirante das eclusas de Miraflores, perto da Cidade do Panamá. Ao lado dele, a engenheira Marisol, que trabalha no canal há vinte anos, pergunta: “Se você tivesse de subir um navio de cinquenta mil toneladas até um lago, como faria?”. O Linu não faz ideia; no entanto, está muito curioso.',
        choices: [
          { text: '“Si lo supiera, ¡sería ingeniero! ¿Cómo lo hacen?”', translation: '“Se eu soubesse, seria engenheiro! Como vocês fazem?”', next: 'agua' },
          { text: '“Prefiero verlo con mis propios ojos. ¿Viene algún barco?”', translation: '“Prefiro ver com meus próprios olhos. Vem algum navio?”', next: 'espera' },
        ],
      },
      agua: {
        emoji: '💧',
        text: 'Marisol explica que el barco entra en una cámara y que después cierran las compuertas. “Aunque parezca increíble, no usamos bombas: el agua baja sola del lago Gatún por unos túneles enormes”, dice. Por lo tanto, la cámara se llena y el barco sube como un patito en la bañera.',
        translation:
          'A Marisol explica que o navio entra numa câmara e que depois fecham as comportas. “Embora pareça incrível, não usamos bombas: a água desce sozinha do lago Gatún por uns túneis enormes”, diz ela. Portanto, a câmara se enche e o navio sobe como um patinho na banheira.',
        choices: [
          { text: '“Entonces todo funciona gracias a la gravedad.”', translation: '“Então tudo funciona graças à gravidade.”', next: 'espera' },
          {
            text: '“¡Qué potentes deben de ser las bombas del canal!”',
            translation: '“Como devem ser potentes as bombas do canal!”',
            wrong: 'A Marisol disse justamente “no usamos bombas”: a água desce sozinha do lago, pela gravidade. “Aunque parezca increíble” quer dizer “embora pareça incrível”.',
          },
        ],
      },
      espera: {
        emoji: '⏳',
        text: 'Marisol consulta la radio y frunce el ceño. “Hoy hay mucha niebla en el lago; por lo tanto, el portacontenedores que esperamos llegará con una hora de retraso”, explica. Mientras tanto, propone bajar a ver las mulas, las locomotoras que guían los barcos.',
        translation:
          'A Marisol consulta o rádio e franze a testa. “Hoje há muita neblina no lago; portanto, o porta-contêineres que esperamos vai chegar com uma hora de atraso”, explica. Enquanto isso, ela propõe descer para ver as mulas, as locomotivas que guiam os navios.',
        choices: [
          { text: 'Bajar con Marisol a ver las mulas.', translation: 'Descer com a Marisol para ver as mulas.', next: 'mulas' },
          {
            text: 'Correr al mirador porque el barco ya está entrando.',
            translation: 'Correr ao mirante porque o navio já está entrando.',
            wrong: 'O navio vai atrasar: “por lo tanto, … llegará con una hora de retraso”. “Por lo tanto” introduz a consequência da neblina, e o navio ainda não chegou.',
          },
          { text: 'Irse a la ciudad, porque una hora le parece demasiado.', translation: 'Ir para a cidade, porque uma hora lhe parece demais.', next: 'final_prisa' },
        ],
      },
      mulas: {
        emoji: '🚂',
        text: 'Junto a la esclusa, las mulas parecen trenes pequeños sobre rieles muy empinados. Marisol cuenta que los barcos no las usan para avanzar, sino para no chocar contra las paredes. “Si el barco se moviera medio metro de más, podría rozar el muro”, dice, “aunque los pilotos casi nunca fallan”.',
        translation:
          'Junto à eclusa, as mulas parecem trenzinhos sobre trilhos bem íngremes. A Marisol conta que os navios não as usam para avançar, mas para não bater nas paredes. “Se o navio se mexesse meio metro a mais, poderia raspar no muro”, diz ela, “embora os pilotos quase nunca errem”.',
        choices: [{ text: 'Volver al mirador cuando suena la sirena.', translation: 'Voltar ao mirante quando toca a sirene.', next: 'barco' }],
      },
      barco: {
        emoji: '🚢',
        text: 'Por fin llega el portacontenedores, tan alto como un edificio, y entra despacio en la cámara. Las compuertas se abren y el agua baja poco a poco, por lo que el barco desciende hacia el Pacífico. Marisol le pregunta a Linu: “Si pudieras elegir, ¿qué te gustaría ver ahora?”.',
        translation:
          'Finalmente chega o porta-contêineres, alto como um prédio, e entra devagar na câmara. As comportas se abrem e a água baixa pouco a pouco, de modo que o navio desce em direção ao Pacífico. A Marisol pergunta ao Linu: “Se você pudesse escolher, o que gostaria de ver agora?”.',
        choices: [
          { text: '“Me encantaría ver el lago Gatún de cerca.”', translation: '“Eu adoraria ver o lago Gatún de perto.”', next: 'lago' },
          { text: '“Si no fuera tan tarde, vería otro barco más.”', translation: '“Se não fosse tão tarde, veria mais um navio.”', next: 'final_barcos' },
        ],
      },
      lago: {
        emoji: '🐒',
        text: 'Al día siguiente, Marisol lleva a Linu en lancha por el lago Gatún. Le explica que el lago es artificial y que, sin él, el canal no tendría agua para las esclusas. En las islas de la orilla, unos monos aulladores gritan tan fuerte que Linu se tapa las orejas.',
        translation:
          'No dia seguinte, a Marisol leva o Linu de lancha pelo lago Gatún. Explica que o lago é artificial e que, sem ele, o canal não teria água para as eclusas. Nas ilhas da margem, uns bugios gritam tão alto que o Linu tapa os ouvidos.',
        choices: [{ text: 'Darle las gracias a Marisol por el viaje.', translation: 'Agradecer à Marisol pela viagem.', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🎉',
        text: '“Si todos los turistas fueran tan curiosos como tú, mi trabajo sería aún más divertido”, le dice Marisol. Linu le promete que, aunque viva muy lejos, volverá para ver las esclusas nuevas. Mientras tanto, un barco enorme pasa despacio por el lago, rumbo al Atlántico.',
        translation:
          '“Se todos os turistas fossem tão curiosos como você, meu trabalho seria ainda mais divertido”, diz a Marisol. O Linu promete que, embora more muito longe, vai voltar para ver as eclusas novas. Enquanto isso, um navio enorme passa devagar pelo lago, rumo ao Atlântico.',
        ending: { tone: 'bom', title: 'Engenheiro honorário!', message: 'O Linu entendeu como a gravidade faz os navios subirem e descerem e ainda conheceu o lago que alimenta o canal.' },
      },
      final_barcos: {
        emoji: '🌇',
        text: 'Linu se queda en el mirador hasta el atardecer y cuenta tres barcos más. Sin embargo, cuando Marisol se despide, él se da cuenta de que no le preguntó nada sobre el lago Gatún. “Si hubiera tiempo, te lo enseñaría mañana”, dice ella, “pero me voy de viaje”.',
        translation:
          'O Linu fica no mirante até o entardecer e conta mais três navios. No entanto, quando a Marisol se despede, ele percebe que não perguntou nada sobre o lago Gatún. “Se houvesse tempo, eu te mostraria amanhã”, diz ela, “mas vou viajar”.',
        ending: { tone: 'neutro', title: 'Muitos navios', message: 'O Linu viu vários navios passarem, mas perdeu a chance de conhecer o lago Gatún. Da próxima vez, aceite o passeio!' },
      },
      final_prisa: {
        emoji: '🚕',
        text: 'Linu toma un taxi a la ciudad, aunque Marisol le dice que la espera vale la pena. Desde la ventana del hotel, ve un barco enorme que pasa por el canal. “Si me hubiera quedado, lo habría visto de cerca”, piensa.',
        translation:
          'O Linu pega um táxi para a cidade, embora a Marisol diga que a espera vale a pena. Da janela do hotel, vê um navio enorme passando pelo canal. “Se eu tivesse ficado, teria visto de perto”, pensa.',
        ending: { tone: 'neutro', title: 'Pressa demais', message: 'Uma hora de espera parecia muito, mas o Linu perdeu o melhor do canal. Tenha paciência e veja o navio subir!' },
      },
    },
  },
  {
    id: 'es-h26',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Las tortugas de Santa Cruz',
    emoji: '🐢',
    summary: 'O Linu vira voluntário num centro de tartarugas-gigantes em Galápagos, e uma das crias some.',
    cultural_context:
      'O arquipélago de Galápagos pertence ao Equador e fica a quase 1.000 km do continente. Darwin passou por lá em 1835, e o nome das ilhas vem das tartarugas-gigantes: “galápago” é uma palavra antiga para tartaruga.',
    start: 'start',
    glossary: [
      ['la cría', 'o filhote'],
      ['aunque (+ subjuntivo)', 'mesmo que, ainda que'],
      ['sin embargo', 'no entanto'],
      ['por lo tanto', 'portanto'],
      ['acercarse', 'aproximar-se'],
      ['el corral', 'o cercado'],
      ['si tuviera…, haría…', 'se eu tivesse…, faria…'],
      ['a la sombra', 'na sombra'],
    ],
    nodes: {
      start: {
        emoji: '🏝️',
        text: 'Puerto Ayora, isla Santa Cruz. Linu va a pasar una semana como voluntario en un centro de crianza de tortugas gigantes. La bióloga Rocío lo recibe en la puerta: “Me alegra mucho que aceptaras venir. Sin embargo, antes de empezar, tienes que conocer las reglas del parque.”',
        translation: 'Puerto Ayora, ilha de Santa Cruz. O Linu vai passar uma semana como voluntário num centro de criação de tartarugas-gigantes. A bióloga Rocío o recebe na porta: “Fico muito feliz que você tenha aceitado vir. No entanto, antes de começar, você precisa conhecer as regras do parque.”',
        choices: [
          { text: '“Claro. ¿Cuáles son las reglas?”', translation: '“Claro. Quais são as regras?”', next: 'reglas' },
          { text: '“Primero quisiera ver la playa, si no te importa.”', translation: '“Primeiro eu queria ver a praia, se você não se importa.”', next: 'playa' },
        ],
      },
      reglas: {
        emoji: '📋',
        text: '“Nunca toques a los animales y quédate siempre a dos metros de ellos”, explica Rocío. “Aunque una tortuga parezca tranquila, se estresa si alguien se acerca demasiado. Si todos los visitantes las tocaran, las crías no crecerían sanas.”',
        translation: '“Nunca toque nos animais e fique sempre a dois metros deles”, explica Rocío. “Mesmo que uma tartaruga pareça tranquila, ela se estressa se alguém chega perto demais. Se todos os visitantes tocassem nelas, os filhotes não cresceriam saudáveis.”',
        choices: [
          { text: '“Entendido. ¿Por dónde empiezo?”', translation: '“Entendido. Por onde eu começo?”', next: 'comida' },
          {
            text: '“Entonces, si una tortuga está tranquila, puedo acariciarla, ¿verdad?”',
            translation: '“Então, se uma tartaruga está tranquila, eu posso fazer carinho nela, né?”',
            wrong: 'Foi o contrário: “Aunque una tortuga parezca tranquila” quer dizer “mesmo que uma tartaruga pareça tranquila”. Com subjuntivo, o “aunque” indica que nem nesse caso se pode tocar nela.',
          },
        ],
      },
      comida: {
        emoji: '🥬',
        text: 'Linu corta hojas y reparte la comida en los corrales de las crías. Rocío suspira: “Si tuviera más voluntarios, limpiaríamos los corrales dos veces al día. Por lo tanto, tu ayuda vale oro.” Al terminar, Linu cuenta las crías del último corral y se da cuenta de que falta una.',
        translation: 'O Linu corta folhas e distribui a comida nos cercados dos filhotes. Rocío suspira: “Se eu tivesse mais voluntários, limparíamos os cercados duas vezes por dia. Portanto, a sua ajuda vale ouro.” Ao terminar, o Linu conta os filhotes do último cercado e percebe que está faltando um.',
        choices: [
          { text: '“¡Rocío, falta una cría! ¿Qué hacemos?”', translation: '“Rocío, está faltando um filhote! O que a gente faz?”', next: 'aviso' },
          { text: 'Buscarla solo entre las piedras, sin decir nada.', translation: 'Procurá-lo sozinho entre as pedras, sem dizer nada.', next: 'solo' },
        ],
      },
      aviso: {
        emoji: '🔎',
        text: '“Gracias por avisarme”, dice Rocío. “Si la buscaras solo y deprisa, podrías pisar otra cría sin querer. Busquemos juntos, muy despacio y mirando bien el suelo.”',
        translation: '“Obrigada por me avisar”, diz Rocío. “Se você procurasse sozinho e com pressa, poderia pisar em outro filhote sem querer. Vamos procurar juntos, bem devagar e olhando bem o chão.”',
        choices: [
          { text: '“Buena idea. Empecemos por las zonas con sombra.”', translation: '“Boa ideia. Vamos começar pelas áreas com sombra.”', next: 'encontrada' },
        ],
      },
      solo: {
        emoji: '🪨',
        text: 'Linu mueve piedras a toda prisa. De repente, Rocío llega corriendo: “¡Cuidado! Si caminaras más despacio, verías que hay otra cría justo al lado de tu pata.” Linu se queda inmóvil y mira hacia abajo.',
        translation: 'O Linu mexe nas pedras a toda a pressa. De repente, Rocío chega correndo: “Cuidado! Se você andasse mais devagar, veria que tem outro filhote bem do lado da sua pata.” O Linu fica imóvel e olha para baixo.',
        choices: [
          { text: '“¡Perdón! A partir de ahora, iré más despacio y buscaremos juntos.”', translation: '“Desculpa! A partir de agora, vou mais devagar e vamos procurar juntos.”', next: 'encontrada' },
          {
            text: '“No te preocupes: no hay ninguna cría cerca de mí.”',
            translation: '“Não se preocupe: não tem nenhum filhote perto de mim.”',
            wrong: 'Rocío disse que há outro filhote “justo al lado de tu pata”, bem ao lado da pata do Linu. “Si caminaras más despacio, verías…” é uma hipótese: se ele andasse mais devagar, teria visto o filhote.',
          },
        ],
      },
      encontrada: {
        emoji: '🌵',
        text: 'Por fin, la encuentran dormida a la sombra de un cactus. “Estaba escondida del sol”, dice Rocío. “Aunque son animales resistentes, el calor del mediodía también las cansa.” La devuelven con cuidado a su corral.',
        translation: 'Finalmente, eles o encontram dormindo à sombra de um cacto. “Estava escondido do sol”, diz Rocío. “Embora sejam animais resistentes, o calor do meio-dia também os cansa.” Eles o devolvem com cuidado ao cercado.',
        choices: [
          { text: '“¿Puedo ponerle un nombre?”', translation: '“Posso dar um nome para ele?”', next: 'final_bom' },
        ],
      },
      final_bom: {
        emoji: '🐢',
        text: 'Rocío se ríe: “Si dependiera de mí, se llamaría Linu.” Desde ese día, la cría más dormilona del centro lleva el nombre de un pingüino. Al final de la semana, Linu promete volver el año que viene.',
        translation: 'Rocío ri: “Se dependesse de mim, ele se chamaria Linu.” Desde aquele dia, o filhote mais dorminhoco do centro leva o nome de um pinguim. No fim da semana, o Linu promete voltar no ano que vem.',
        ending: { tone: 'bom', title: 'Um xará de casco', message: 'Você seguiu as regras, trabalhou em equipe e ainda ganhou um xará tartaruga. Os condicionais com “si tuviera… / si dependiera…” já não assustam mais!' },
      },
      playa: {
        emoji: '🦎',
        text: 'En la playa, Linu ve iguanas marinas tomando el sol sobre las rocas negras. Un guía le cuenta: “Si quisieras ver a tus primos, los pingüinos de Galápagos, tendrías que ir a la isla Isabela. Son los únicos pingüinos que viven tan cerca del ecuador.”',
        translation: 'Na praia, o Linu vê iguanas-marinhas tomando sol sobre as rochas negras. Um guia conta: “Se você quisesse ver os seus primos, os pinguins-de-galápagos, teria que ir à ilha Isabela. São os únicos pinguins que vivem tão perto da linha do equador.”',
        choices: [
          { text: '“¡Me voy a Isabela ahora mismo!”', translation: '“Vou para Isabela agora mesmo!”', next: 'isabela' },
          { text: '“Mejor vuelvo al centro. Rocío me está esperando.”', translation: '“Melhor eu voltar para o centro. A Rocío está me esperando.”', next: 'reglas' },
        ],
      },
      isabela: {
        emoji: '🐧',
        text: 'Linu toma una lancha y, en Isabela, ve por fin a un pequeño pingüino de Galápagos nadando entre los manglares. Es un momento precioso. Sin embargo, cuando vuelve a Santa Cruz, la semana de voluntariado ya ha terminado sin él.',
        translation: 'O Linu pega uma lancha e, em Isabela, vê finalmente um pequeno pinguim-de-galápagos nadando entre os manguezais. É um momento lindo. No entanto, quando volta para Santa Cruz, a semana de voluntariado já terminou sem ele.',
        ending: { tone: 'neutro', title: 'Um primo distante', message: 'Conhecer o primo equatoriano valeu a viagem, mas as tartarugas ficaram sem o voluntário. Da próxima vez, dá para fazer as duas coisas!' },
      },
    },
  },
  {
    id: 'es-h27',
    level: 'B2.1',
    cefr: 'B2',
    title: 'Viento en las Torres',
    emoji: '🏔️',
    summary: 'Na Patagônia chilena, o Linu quer ver o nascer do sol nas Torres del Paine, mas o vento e um trilheiro machucado mudam os planos.',
    cultural_context:
      'O Parque Nacional Torres del Paine fica na Patagônia chilena, na região de Magallanes. As “Torres” são três picos de granito, e a trilha mais famosa do parque tem o formato de um W.',
    start: 'start',
    glossary: [
      ['¿cachai?', 'sacou? entendeu? (gíria chilena)'],
      ['ya, po', 'tá bom, então (no Chile, “po” vem de “pues”)'],
      ['el pronóstico', 'a previsão do tempo'],
      ['el amanecer', 'o nascer do sol'],
      ['el tobillo', 'o tornozelo'],
      ['la linterna', 'a lanterna'],
      ['si saliéramos…, veríamos…', 'se saíssemos…, veríamos…'],
      ['aunque', 'embora, mesmo que'],
    ],
    nodes: {
      start: {
        emoji: '⛺',
        text: 'En el refugio, la guía Javiera extiende un mapa sobre la mesa. “Mañana subimos al mirador de las Torres. Si saliéramos a las cuatro, veríamos el amanecer desde arriba. Sin embargo, el pronóstico anuncia viento muy fuerte, ¿cachai?”',
        translation: 'No refúgio, a guia Javiera abre um mapa sobre a mesa. “Amanhã subimos ao mirante das Torres. Se saíssemos às quatro, veríamos o nascer do sol lá de cima. No entanto, a previsão anuncia vento muito forte, sacou?”',
        choices: [
          { text: '“¡Salgamos a las cuatro! Llevo mi linterna.”', translation: '“Vamos sair às quatro! Eu levo a minha lanterna.”', next: 'madrugada' },
          { text: '“¿Y si esperáramos a ver cómo sigue el viento?”', translation: '“E se esperássemos para ver como fica o vento?”', next: 'esperar' },
          {
            text: '“Qué bien, entonces mañana será un día tranquilo y sin viento.”',
            translation: '“Que bom, então amanhã vai ser um dia tranquilo e sem vento.”',
            wrong: 'A Javiera disse o contrário: “el pronóstico anuncia viento muy fuerte”, a previsão anuncia vento muito forte. O “sin embargo” (no entanto) marca justamente o problema do plano.',
          },
        ],
      },
      madrugada: {
        emoji: '🔦',
        text: 'A las cuatro, Linu y Javiera suben por el valle con las linternas encendidas. A mitad de camino, encuentran a Tomás, un excursionista sentado sobre una roca. “Me torcí el tobillo”, dice. “Aunque pudiera caminar, no llegaría arriba a tiempo.”',
        translation: 'Às quatro, o Linu e a Javiera sobem pelo vale com as lanternas acesas. No meio do caminho, encontram o Tomás, um trilheiro sentado sobre uma pedra. “Torci o tornozelo”, diz ele. “Mesmo que eu conseguisse andar, não chegaria lá em cima a tempo.”',
        choices: [
          { text: '“No te vamos a dejar aquí. ¿Te ayudamos a bajar?”', translation: '“Não vamos te deixar aqui. Ajudamos você a descer?”', next: 'ayuda' },
          { text: '“Lo siento mucho… Nosotros seguimos, que se nos hace tarde.”', translation: '“Sinto muito… Nós vamos seguir, que está ficando tarde.”', next: 'cima' },
        ],
      },
      ayuda: {
        emoji: '🤝',
        text: 'Javiera revisa el tobillo de Tomás y le venda el pie. “Si lo dejáramos solo, con este frío lo pasaría muy mal. Por lo tanto, lo acompañamos al refugio y mañana volvemos a intentarlo.” Linu carga la mochila de Tomás.',
        translation: 'A Javiera examina o tornozelo do Tomás e enfaixa o pé dele. “Se o deixássemos sozinho, com este frio ele passaria muito mal. Portanto, vamos acompanhá-lo até o refúgio e amanhã tentamos de novo.” O Linu carrega a mochila do Tomás.',
        choices: [
          { text: '“Ya, po. Bajemos con calma.”', translation: '“Tá bom, então. Vamos descer com calma.”', next: 'refugio' },
          {
            text: '“Entonces Javiera quiere dejar a Tomás solo en la montaña.”',
            translation: '“Então a Javiera quer deixar o Tomás sozinho na montanha.”',
            wrong: '“Si lo dejáramos solo…” é uma hipótese que a Javiera rejeita: se o deixassem sozinho, ele passaria mal. Por isso (“por lo tanto”) ela decide acompanhá-lo até o refúgio.',
          },
        ],
      },
      refugio: {
        emoji: '🏠',
        text: 'Ya en el refugio, Tomás les da las gracias con una taza de té caliente. “Si no fuera por ustedes, todavía estaría allá arriba.” Javiera mira el pronóstico nuevo: mañana el viento va a bajar.',
        translation: 'Já no refúgio, o Tomás agradece com uma xícara de chá quente. “Se não fosse por vocês, eu ainda estaria lá em cima.” A Javiera olha a nova previsão: amanhã o vento vai diminuir.',
        choices: [
          { text: '“Entonces mañana lo intentamos otra vez, a las cuatro.”', translation: '“Então amanhã tentamos de novo, às quatro.”', next: 'amanecer' },
        ],
      },
      amanecer: {
        emoji: '🌄',
        text: 'Al día siguiente, llegan al mirador justo cuando sale el sol. Las tres torres de granito se vuelven rojas y luego doradas, reflejadas en la laguna. Abajo, en el refugio, Tomás los saluda con la linterna.',
        translation: 'No dia seguinte, chegam ao mirante bem na hora em que o sol nasce. As três torres de granito ficam vermelhas e depois douradas, refletidas na lagoa. Lá embaixo, no refúgio, o Tomás acena para eles com a lanterna.',
        ending: { tone: 'bom', title: 'Um dia de atraso, uma vista inesquecível', message: 'Vocês ajudaram o Tomás e ainda viram o nascer do sol nas Torres. Você entendeu bem as hipóteses com “si + imperfecto de subjuntivo”!' },
      },
      cima: {
        emoji: '🌫️',
        text: 'Linu y Javiera siguen subiendo, aunque el viento es cada vez más fuerte. Cuando llegan al mirador, las nubes tapan las torres por completo. Javiera está callada: piensa en Tomás, que se quedó solo en el camino.',
        translation: 'O Linu e a Javiera continuam subindo, embora o vento esteja cada vez mais forte. Quando chegam ao mirante, as nuvens cobrem as torres completamente. A Javiera está calada: pensa no Tomás, que ficou sozinho no caminho.',
        ending: { tone: 'neutro', title: 'Nuvens no mirante', message: 'Vocês chegaram lá em cima, mas não viram nada, e o Tomás ficou para trás. Na montanha, às vezes vale mais ajudar do que chegar primeiro.' },
      },
      esperar: {
        emoji: '🌬️',
        text: 'Deciden esperar. A las siete, el viento baja un poco y salen con luz de día. En una ladera, un grupo de guanacos come tranquilo. “Si hubiera un puma cerca, estarían nerviosos”, comenta Javiera.',
        translation: 'Eles decidem esperar. Às sete, o vento diminui um pouco e eles saem com a luz do dia. Numa encosta, um grupo de guanacos come tranquilo. “Se houvesse um puma por perto, eles estariam nervosos”, comenta a Javiera.',
        choices: [
          { text: '“¿Y qué haríamos si viéramos un puma?”', translation: '“E o que faríamos se víssemos um puma?”', next: 'puma' },
        ],
      },
      puma: {
        emoji: '🐆',
        text: '“Nunca correríamos”, responde Javiera. “Nos quedaríamos juntos, haríamos ruido y nos alejaríamos despacio, sin darle la espalda.” Linu anota todo en su libreta. Por la tarde, llegan al mirador con el cielo despejado.',
        translation: '“Nunca correríamos”, responde a Javiera. “Ficaríamos juntos, faríamos barulho e nos afastaríamos devagar, sem dar as costas para ele.” O Linu anota tudo no caderninho. À tarde, chegam ao mirante com o céu limpo.',
        choices: [
          { text: '“¡Mira las torres! Valió la pena esperar.”', translation: '“Olha as torres! Valeu a pena esperar.”', next: 'tarde' },
        ],
      },
      tarde: {
        emoji: '📸',
        text: 'No es el amanecer, pero las torres brillan bajo el sol de la tarde y un cóndor planea sobre la laguna. Javiera sonríe: “Aunque no madrugamos, tuvimos el mejor día de la semana.”',
        translation: 'Não é o nascer do sol, mas as torres brilham sob o sol da tarde e um condor plana sobre a lagoa. A Javiera sorri: “Embora não tenhamos madrugado, tivemos o melhor dia da semana.”',
        ending: { tone: 'bom', title: 'A paciência compensa', message: 'Esperar o vento acalmar foi a escolha prudente, e você ainda aprendeu o que fazer diante de um puma.' },
      },
    },
  },
  {
    id: 'es-h28',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Una carta para la Sagrada Familia',
    emoji: '⛪',
    summary: 'Em Barcelona, o Linu escreve um e-mail formal para visitar a oficina de maquetes da Sagrada Família, com a ajuda da Montse e do coral dela.',
    cultural_context:
      'A Sagrada Família começou a ser construída em 1882 e, desde o início, é financiada por doações e pelos ingressos dos visitantes. Gaudí assumiu a obra em 1883 e está enterrado na cripta. Na Espanha, usa-se “vosotros” no plural informal.',
    start: 'start',
    glossary: [
      ['Estimados señores:', 'Prezados senhores,'],
      ['Me dirijo a ustedes para…', 'Venho por meio deste…'],
      ['Atentamente', 'Atenciosamente'],
      ['se ruega', 'pede-se, solicita-se'],
      ['fue diseñado por', 'foi projetado por'],
      ['el taller de maquetas', 'a oficina de maquetes'],
      ['¿venís? / os espero', 'vocês vêm? / espero vocês (forma de “vosotros”, da Espanha)'],
      ['la coral', 'o coral, o coro'],
    ],
    nodes: {
      start: {
        emoji: '💻',
        text: 'Linu quiere visitar el taller de maquetas de la Sagrada Familia, donde se estudian las formas del templo antes de construirlas. Su amiga Montse le dice que la solicitud debe hacerse por correo electrónico. “Y ojo: es un correo formal.” ¿Cómo empieza Linu?',
        translation: 'O Linu quer visitar a oficina de maquetes da Sagrada Família, onde as formas do templo são estudadas antes de serem construídas. A amiga dele, Montse, diz que o pedido deve ser feito por e-mail. “E atenção: é um e-mail formal.” Como o Linu começa?',
        choices: [
          { text: '“Estimados señores: Me dirijo a ustedes para solicitar una visita al taller de maquetas.”', translation: '“Prezados senhores, venho por meio deste solicitar uma visita à oficina de maquetes.”', next: 'correo' },
          {
            text: '“¡Hola, chicos! ¿Me dejáis entrar al taller?”',
            translation: '“Oi, pessoal! Vocês me deixam entrar na oficina?”',
            wrong: 'A Montse avisou que é um e-mail formal. “¡Hola, chicos!” e o “vosotros” (dejáis) servem para amigos. Para uma instituição, use “Estimados señores” e “ustedes”.',
          },
        ],
      },
      correo: {
        emoji: '✉️',
        text: 'Montse lee el borrador y asiente: “Muy bien. Ahora explica quién eres y termina con una despedida formal.” Linu escribe: “Soy estudiante de arquitectura y me interesa conocer cómo se diseñan las columnas. Quedo a la espera de su respuesta. Atentamente, Linu.”',
        translation: 'A Montse lê o rascunho e concorda: “Muito bem. Agora explique quem você é e termine com uma despedida formal.” O Linu escreve: “Sou estudante de arquitetura e tenho interesse em conhecer como as colunas são projetadas. Fico no aguardo de sua resposta. Atenciosamente, Linu.”',
        choices: [
          { text: 'Linu envía el correo.', translation: 'O Linu envia o e-mail.', next: 'respuesta' },
        ],
      },
      respuesta: {
        emoji: '📨',
        text: 'Dos días después llega la respuesta: “Estimado señor Linu: Le informamos de que las visitas al taller se organizan únicamente para grupos de diez personas o más. Se ruega llegar quince minutos antes de la hora indicada. Reciba un cordial saludo.”',
        translation: 'Dois dias depois chega a resposta: “Prezado senhor Linu, informamos que as visitas à oficina são organizadas somente para grupos de dez pessoas ou mais. Pede-se chegar quinze minutos antes do horário indicado. Cordiais saudações.”',
        choices: [
          { text: '“Montse, necesito un grupo de al menos diez personas.”', translation: '“Montse, preciso de um grupo de pelo menos dez pessoas.”', next: 'grupo' },
          {
            text: '“¡Perfecto! Puedo ir solo cuando quiera.”',
            translation: '“Perfeito! Posso ir sozinho quando quiser.”',
            wrong: 'A resposta diz que as visitas “se organizan únicamente para grupos de diez personas o más”, só para grupos de dez ou mais pessoas, e com horário marcado. Sozinho, o Linu não entra.',
          },
        ],
      },
      grupo: {
        emoji: '🎶',
        text: 'Montse sonríe: “Canto en una coral y somos doce.” Llama a sus compañeros: “Chicos, ¿venís el sábado a la Sagrada Familia? Os espero en la puerta a las diez menos cuarto.” Todos aceptan encantados.',
        translation: 'A Montse sorri: “Eu canto num coral e somos doze.” Ela liga para os colegas: “Pessoal, vocês vêm no sábado à Sagrada Família? Espero vocês na porta às quinze para as dez.” Todos aceitam encantados.',
        choices: [
          { text: '“¡Genial! Llegaremos quince minutos antes, como se nos pidió.”', translation: '“Ótimo! Chegaremos quinze minutos antes, como nos foi pedido.”', next: 'visita' },
        ],
      },
      visita: {
        emoji: '🌳',
        text: 'El sábado, una guía los recibe en la basílica: “El templo fue diseñado por Gaudí, que se hizo cargo de la obra en 1883. Las columnas fueron pensadas como árboles, y el techo, como un bosque. Todavía hoy se construye gracias a los donativos de los visitantes.”',
        translation: 'No sábado, uma guia os recebe na basílica: “O templo foi projetado por Gaudí, que assumiu a obra em 1883. As colunas foram pensadas como árvores, e o teto, como uma floresta. Ainda hoje ele é construído graças às doações dos visitantes.”',
        choices: [
          { text: '“¿Podría cantar aquí la coral de Montse?”', translation: '“O coral da Montse poderia cantar aqui?”', next: 'cantar' },
          { text: '“¿Pasamos ya al taller de maquetas?”', translation: '“Vamos já para a oficina de maquetes?”', next: 'taller' },
        ],
      },
      cantar: {
        emoji: '🤫',
        text: 'La guía responde con amabilidad: “Lo siento, durante las visitas no se permite cantar dentro del templo. Si lo desean, pueden hacerlo fuera, en la plaza.” Los cantantes se miran unos a otros.',
        translation: 'A guia responde com gentileza: “Sinto muito, durante as visitas não é permitido cantar dentro do templo. Se desejarem, podem fazer isso lá fora, na praça.” Os cantores se entreolham.',
        choices: [
          { text: '“Entonces cantamos luego. Ahora, al taller.”', translation: '“Então cantamos depois. Agora, para a oficina.”', next: 'taller' },
          { text: 'La coral sale a cantar a la plaza y se olvida del taller.', translation: 'O coral sai para cantar na praça e esquece a oficina.', next: 'plaza' },
        ],
      },
      taller: {
        emoji: '🏛️',
        text: 'En el taller, un maquetista les muestra modelos de yeso de todos los tamaños. “Aquí se prueban las formas antes de tallarlas en piedra”, explica. “Muchas piezas fueron reconstruidas a partir de fragmentos de los modelos originales de Gaudí.”',
        translation: 'Na oficina, um maquetista mostra a eles modelos de gesso de todos os tamanhos. “Aqui as formas são testadas antes de serem esculpidas na pedra”, explica. “Muitas peças foram reconstruídas a partir de fragmentos dos modelos originais de Gaudí.”',
        choices: [
          { text: '“¿Me permitiría hacerle unas preguntas para mi trabajo de la universidad?”', translation: '“O senhor me permitiria fazer umas perguntas para o meu trabalho da universidade?”', next: 'final_bom' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'El maquetista acepta y le da su tarjeta. “Si necesita más información, escríbame. Y le felicito: su correo estaba muy bien redactado.” Al salir, la coral canta en la plaza y Linu aplaude con las dos aletas.',
        translation: 'O maquetista aceita e lhe dá o cartão. “Se precisar de mais informações, escreva para mim. E parabéns: o seu e-mail estava muito bem redigido.” Na saída, o coral canta na praça e o Linu aplaude com as duas nadadeiras.',
        ending: { tone: 'bom', title: 'Portas abertas pela formalidade', message: 'O e-mail formal certo, a regra do grupo bem lida e a passiva (“fue diseñado”, “se prueban”) dominada. Missão cumprida!' },
      },
      plaza: {
        emoji: '🎤',
        text: 'La coral canta en la plaza y los turistas aplauden. Es una tarde preciosa. Sin embargo, cuando vuelven a la puerta del taller, el grupo ya se ha ido y la visita ha terminado.',
        translation: 'O coral canta na praça e os turistas aplaudem. É uma tarde linda. No entanto, quando voltam à porta da oficina, o grupo já foi embora e a visita terminou.',
        ending: { tone: 'neutro', title: 'Música sim, maquetes não', message: 'O concerto na praça foi lindo, mas a visita marcada com tanto cuidado se perdeu. Dava para fazer as duas coisas: primeiro a oficina, depois a música.' },
      },
    },
  },
  {
    id: 'es-h29',
    level: 'B2.2',
    cefr: 'B2',
    title: 'Un torneo en Malabo',
    emoji: '⚽',
    summary: 'Em Malabo, o Linu se inscreve num torneio de futebol beneficente, mas antes precisa escrever uma solicitação formal.',
    cultural_context:
      'A Guiné Equatorial é o único país da África com o espanhol como língua oficial (o francês e o português também são oficiais). A capital, Malabo, fica na ilha de Bioko, e o país sediou a Copa Africana de Nações em 2015.',
    start: 'start',
    glossary: [
      ['se buscan', 'procuram-se'],
      ['la inscripción', 'a inscrição'],
      ['la solicitud', 'o pedido, a solicitação'],
      ['Estimada señora:', 'Prezada senhora,'],
      ['será formado por sorteo', 'será formado por sorteio'],
      ['el portero', 'o goleiro'],
      ['el delantero', 'o atacante'],
      ['el aguacero', 'o temporal, a chuva forte'],
    ],
    nodes: {
      start: {
        emoji: '📌',
        text: 'En una pared del paseo marítimo de Malabo, Linu lee un cartel: “Se buscan jugadores para un torneo benéfico. Las inscripciones se reciben hasta el viernes. Se ruega enviar una solicitud formal a la señora Nsue, organizadora del torneo.” Hoy es miércoles.',
        translation: 'Numa parede da orla de Malabo, o Linu lê um cartaz: “Procuram-se jogadores para um torneio beneficente. As inscrições são recebidas até sexta-feira. Pede-se enviar uma solicitação formal à senhora Nsue, organizadora do torneio.” Hoje é quarta-feira.',
        choices: [
          { text: '“Todavía tengo tiempo. Escribiré la solicitud hoy mismo.”', translation: '“Ainda tenho tempo. Vou escrever a solicitação hoje mesmo.”', next: 'solicitud' },
          {
            text: '“Las inscripciones empiezan el viernes. Esperaré hasta entonces.”',
            translation: '“As inscrições começam na sexta. Vou esperar até lá.”',
            wrong: 'O cartaz diz “se reciben hasta el viernes”: as inscrições são recebidas ATÉ sexta, ou seja, sexta é o último dia. Se esperar, o Linu perde o prazo.',
          },
        ],
      },
      solicitud: {
        emoji: '📝',
        text: 'Linu se sienta en un café y empieza la solicitud. Sabe que la señora Nsue no lo conoce y que el cartel pedía un tono formal. Piensa bien la primera frase.',
        translation: 'O Linu se senta num café e começa a solicitação. Ele sabe que a senhora Nsue não o conhece e que o cartaz pedia um tom formal. Pensa bem na primeira frase.',
        choices: [
          { text: '“Estimada señora Nsue: Le escribo para solicitar mi inscripción en el torneo benéfico.”', translation: '“Prezada senhora Nsue, escrevo para solicitar minha inscrição no torneio beneficente.”', next: 'enviada' },
          {
            text: '“Oye, Nsue, apúntame al torneo, ¿vale?”',
            translation: '“Ô, Nsue, me coloca no torneio, beleza?”',
            wrong: 'Esse é o tom de quem fala com um amigo (“oye”, “tú”, “¿vale?”). O cartaz pedia “una solicitud formal”: use “Estimada señora”, “usted” e “le escribo para…”.',
          },
        ],
      },
      enviada: {
        emoji: '📬',
        text: 'Al día siguiente llega la respuesta: “Estimado señor Linu: Su solicitud ha sido aceptada. Los equipos serán formados por sorteo el sábado a las nueve. Se le entregará una camiseta en el campo. Atentamente, Ana Nsue.”',
        translation: 'No dia seguinte chega a resposta: “Prezado senhor Linu, sua solicitação foi aceita. As equipes serão formadas por sorteio no sábado às nove. Uma camiseta lhe será entregue no campo. Atenciosamente, Ana Nsue.”',
        choices: [
          { text: 'El sábado, Linu llega al campo a las nueve menos cuarto.', translation: 'No sábado, o Linu chega ao campo às quinze para as nove.', next: 'sorteo' },
        ],
      },
      sorteo: {
        emoji: '🎽',
        text: 'Tras el sorteo, Linu queda en el equipo verde. El entrenador, don Pedro, los reúne: “Aquí se juega con mucho calor y humedad, así que se recomienda beber agua en cada pausa. Nos falta un portero y un delantero. ¿Qué prefiere usted, señor pingüino?”',
        translation: 'Depois do sorteio, o Linu fica no time verde. O treinador, seu Pedro, reúne todos: “Aqui se joga com muito calor e umidade, então recomenda-se beber água a cada pausa. Está faltando um goleiro e um atacante. O que o senhor prefere, senhor pinguim?”',
        choices: [
          { text: '“Me pongo de portero. Tengo buenos reflejos.”', translation: '“Eu fico no gol. Tenho bons reflexos.”', next: 'portero' },
          { text: '“Prefiero jugar de delantero.”', translation: '“Prefiro jogar de atacante.”', next: 'delantero' },
        ],
      },
      portero: {
        emoji: '🧤',
        text: 'En el segundo tiempo, el árbitro pita un penalti contra el equipo verde. Linu se lanza hacia la izquierda y detiene el balón con las dos aletas. El público del paseo lo aplaude con entusiasmo.',
        translation: 'No segundo tempo, o árbitro marca um pênalti contra o time verde. O Linu se joga para a esquerda e defende a bola com as duas nadadeiras. O público da orla aplaude com entusiasmo.',
        choices: [
          { text: 'Linu sigue concentrado en la portería.', translation: 'O Linu continua concentrado no gol.', next: 'lluvia' },
        ],
      },
      delantero: {
        emoji: '🥅',
        text: 'Linu corre por la banda, recibe un pase largo y marca un gol de cabeza. Sus compañeros lo levantan en brazos. Sin embargo, el calor es intenso y Linu recuerda la recomendación del entrenador.',
        translation: 'O Linu corre pela lateral, recebe um passe longo e marca um gol de cabeça. Os companheiros o levantam nos braços. No entanto, o calor é intenso e o Linu se lembra da recomendação do treinador.',
        choices: [
          { text: 'Linu bebe agua en la pausa y vuelve al campo.', translation: 'O Linu bebe água na pausa e volta ao campo.', next: 'lluvia' },
        ],
      },
      lluvia: {
        emoji: '🌧️',
        text: 'De repente, cae un aguacero tropical, algo muy común en la isla de Bioko. La señora Nsue anuncia por el megáfono: “El partido no se suspende, pero se ruega a los jugadores que tengan cuidado con el campo mojado.”',
        translation: 'De repente, cai um temporal tropical, algo muito comum na ilha de Bioko. A senhora Nsue anuncia pelo megafone: “A partida não será suspensa, mas pede-se aos jogadores que tenham cuidado com o campo molhado.”',
        choices: [
          { text: 'Linu sigue jugando con cuidado bajo la lluvia.', translation: 'O Linu continua jogando com cuidado debaixo da chuva.', next: 'final_bom' },
          { text: 'Linu corre a refugiarse bajo un árbol hasta que pase la lluvia.', translation: 'O Linu corre para se abrigar debaixo de uma árvore até a chuva passar.', next: 'final_arbol' },
        ],
      },
      final_bom: {
        emoji: '🏆',
        text: 'El equipo verde gana dos a uno. Al final, la señora Nsue entrega las medallas y le dice a Linu: “Su solicitud fue la mejor redactada de todas. Queda usted invitado al torneo del año que viene.”',
        translation: 'O time verde ganha por dois a um. No fim, a senhora Nsue entrega as medalhas e diz ao Linu: “Sua solicitação foi a mais bem redigida de todas. O senhor está convidado para o torneio do ano que vem.”',
        ending: { tone: 'bom', title: 'Campeão na chuva', message: 'Prazo respeitado, carta formal impecável e a passiva (“ha sido aceptada”, “serán formados”) bem entendida. Um pinguim adora chuva!' },
      },
      final_arbol: {
        emoji: '🌳',
        text: 'Mientras Linu espera bajo el árbol, su equipo juega con uno menos y pierde por un gol. Don Pedro no se enfada, pero le recuerda con una sonrisa: “Se dijo que el partido no se suspendía.”',
        translation: 'Enquanto o Linu espera debaixo da árvore, o time dele joga com um a menos e perde por um gol. O seu Pedro não fica bravo, mas lembra com um sorriso: “Foi dito que a partida não seria suspensa.”',
        ending: { tone: 'neutro', title: 'Um pinguim fugindo da água?', message: 'O anúncio dizia que o jogo continuava. Na próxima, preste atenção ao “no se suspende” e fique em campo!' },
      },
    },
  },
  {
    id: 'es-h30',
    level: 'B2.2',
    cefr: 'B2',
    title: 'La güira de la Zona Colonial',
    emoji: '🪇',
    summary: 'Em Santo Domingo, o Linu quer aprender a tocar güira, o raspador de metal do merengue, e precisa se inscrever numa escola de música.',
    cultural_context:
      'A Zona Colonial de Santo Domingo é Patrimônio Mundial da UNESCO desde 1990, e ali fica a Catedral Primada da América, a primeira catedral do continente. O merengue, tocado com acordeão, tambora e güira, foi declarado Patrimônio Imaterial da Humanidade em 2016.',
    start: 'start',
    glossary: [
      ['la güira', 'raspador de metal do merengue'],
      ['la tambora', 'tambor de duas faces do merengue'],
      ['¿Qué lo que?', 'E aí? (saudação dominicana bem informal)'],
      ['un chin', 'um pouquinho (na República Dominicana)'],
      ['se imparten clases', 'são dadas aulas'],
      ['por medio de la presente', 'por meio desta (carta)'],
      ['la dirección', 'a diretoria (e também o endereço)'],
      ['el raspador', 'a baqueta de raspar a güira'],
    ],
    nodes: {
      start: {
        emoji: '🎵',
        text: 'Zona Colonial, Santo Domingo. En una plaza, tres músicos tocan merengue con acordeón, tambora y güira. Cuando terminan, el güirero, don Ramón, se acerca a Linu: “¿Qué lo que, pingüino? Te vi bailando un chin.”',
        translation: 'Zona Colonial, Santo Domingo. Numa praça, três músicos tocam merengue com acordeão, tambora e güira. Quando terminam, o güirero, seu Ramón, se aproxima do Linu: “E aí, pinguim? Te vi dançando um pouquinho.”',
        choices: [
          { text: '“¡Me encantó! ¿Dónde se aprende a tocar la güira?”', translation: '“Adorei! Onde se aprende a tocar güira?”', next: 'escuela' },
        ],
      },
      escuela: {
        emoji: '🏫',
        text: 'Don Ramón lo lleva a una escuela de música en una calle de piedra. En la puerta hay un aviso: “Se imparten clases de güira, tambora y acordeón. Las solicitudes deben ser dirigidas por escrito a la dirección. No se aceptan inscripciones por teléfono.”',
        translation: 'Seu Ramón o leva a uma escola de música numa rua de pedra. Na porta há um aviso: “São dadas aulas de güira, tambora e acordeão. As solicitações devem ser dirigidas por escrito à diretoria. Não são aceitas inscrições por telefone.”',
        choices: [
          { text: '“Entonces escribiré una carta a la directora.”', translation: '“Então vou escrever uma carta para a diretora.”', next: 'carta' },
          {
            text: '“Perfecto, llamo ahora mismo por teléfono y me inscribo.”',
            translation: '“Perfeito, ligo agora mesmo e me inscrevo.”',
            wrong: 'O aviso diz “No se aceptan inscripciones por teléfono”: não se aceitam inscrições por telefone. O pedido tem que ser feito por escrito (“por escrito”).',
          },
        ],
      },
      carta: {
        emoji: '✍️',
        text: 'Linu escribe con su mejor letra: “Estimada señora directora: Por medio de la presente, solicito una plaza en las clases de güira para principiantes. Quedo a su disposición para cualquier consulta. Atentamente, Linu.” Don Ramón lee la carta por encima de su hombro.',
        translation: 'O Linu escreve com a sua melhor letra: “Prezada senhora diretora, por meio desta, solicito uma vaga nas aulas de güira para iniciantes. Fico à sua disposição para qualquer dúvida. Atenciosamente, Linu.” Seu Ramón lê a carta por cima do ombro dele.',
        choices: [
          { text: '“¿Está bien así, don Ramón?”', translation: '“Está bom assim, seu Ramón?”', next: 'respuesta' },
        ],
      },
      respuesta: {
        emoji: '📩',
        text: '“Perfecta”, dice don Ramón, y la entrega en la secretaría. El lunes, Linu recibe la respuesta: “Estimado señor: Su solicitud ha sido aprobada. Las clases son impartidas los martes a las cinco. Se le ruega traer su propio raspador.”',
        translation: '“Perfeita”, diz seu Ramón, e a entrega na secretaria. Na segunda, o Linu recebe a resposta: “Prezado senhor, sua solicitação foi aprovada. As aulas são dadas às terças, às cinco. Pede-se que o senhor traga o seu próprio raspador.”',
        choices: [
          { text: 'El martes, Linu llega a clase con un raspador nuevo.', translation: 'Na terça, o Linu chega à aula com um raspador novo.', next: 'clase' },
          {
            text: 'Linu va a clase el lunes sin nada, porque la escuela le prestará un raspador.',
            translation: 'O Linu vai à aula na segunda sem nada, porque a escola vai emprestar um raspador.',
            wrong: 'A resposta diz que as aulas são às terças (“los martes”) e pede que ele traga o PRÓPRIO raspador (“se le ruega traer su propio raspador”).',
          },
        ],
      },
      clase: {
        emoji: '🥁',
        text: 'Sorpresa: el profesor es don Ramón. “La güira se toca con el raspador, de arriba abajo, siguiendo la tambora”, explica. “Al principio se practica despacio. La velocidad se gana con el tiempo.”',
        translation: 'Surpresa: o professor é o seu Ramón. “A güira é tocada com o raspador, de cima para baixo, acompanhando a tambora”, explica. “No começo se pratica devagar. A velocidade se ganha com o tempo.”',
        choices: [
          { text: 'Linu practica despacio, como le indicó el profesor.', translation: 'O Linu pratica devagar, como o professor indicou.', next: 'practica' },
          { text: 'Linu intenta tocar tan rápido como en la plaza.', translation: 'O Linu tenta tocar tão rápido quanto na praça.', next: 'rapido' },
        ],
      },
      rapido: {
        emoji: '😵',
        text: 'El ritmo se le escapa y el raspador sale volando. Todos se ríen, también don Ramón. “Tranquilo, que eso le pasa a todo el mundo. ¿Empezamos otra vez, despacito?”',
        translation: 'O ritmo foge dele e o raspador sai voando. Todos riem, inclusive o seu Ramón. “Calma, isso acontece com todo mundo. Vamos começar de novo, devagarinho?”',
        choices: [
          { text: '“Sí, profesor. Esta vez, despacio.”', translation: '“Sim, professor. Desta vez, devagar.”', next: 'practica' },
          { text: '“Mejor lo dejo por hoy y me voy a ver la catedral.”', translation: '“Melhor deixar por hoje e ir ver a catedral.”', next: 'catedral' },
        ],
      },
      practica: {
        emoji: '🎼',
        text: 'Semana tras semana, Linu practica con paciencia. Un martes, don Ramón le dice: “El sábado se celebra una fiesta en la plaza y se necesita un güirero más. ¿Se anima usted?”',
        translation: 'Semana após semana, o Linu pratica com paciência. Numa terça, seu Ramón diz: “No sábado vai ter uma festa na praça e está faltando mais um güirero. O senhor topa?”',
        choices: [
          { text: '“¡Claro que sí! Allí estaré.”', translation: '“Claro que sim! Estarei lá.”', next: 'fiesta' },
        ],
      },
      fiesta: {
        emoji: '💃',
        text: 'El sábado, Linu toca la güira junto a la tambora y el acordeón, y toda la plaza baila merengue. Al terminar, don Ramón le da un abrazo: “Ya eres güirero de la Zona Colonial.”',
        translation: 'No sábado, o Linu toca güira junto com a tambora e o acordeão, e a praça inteira dança merengue. No fim, seu Ramón lhe dá um abraço: “Agora você é güirero da Zona Colonial.”',
        ending: { tone: 'bom', title: 'Güirero de verdade', message: 'Paciência, carta formal e a passiva (“se imparten”, “ha sido aprobada”, “son impartidas”) bem entendidas. Que siga o merengue!' },
      },
      catedral: {
        emoji: '⛪',
        text: 'Linu visita la Catedral Primada de América, que fue construida en el siglo XVI con piedra coralina. Es un lugar impresionante. Sin embargo, esa noche, al oír merengue en la calle, piensa en la güira que dejó en la escuela.',
        translation: 'O Linu visita a Catedral Primada da América, que foi construída no século XVI com pedra coralina. É um lugar impressionante. No entanto, naquela noite, ao ouvir merengue na rua, ele pensa na güira que deixou na escola.',
        ending: { tone: 'neutro', title: 'Uma pausa na música', message: 'A catedral é linda, mas desistir no primeiro tropeço deixou a güira para depois. Como disse o professor: a velocidade se ganha com o tempo.' },
      },
    },
  },
  {
    id: 'es-h31',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Noche de estrellas en Atacama',
    emoji: '🔭',
    summary: 'No deserto do Atacama, o Linu passa uma noite num observatório com a guia Valentina. Ficar até a Lua nascer ou dormir no carro?',
    cultural_context:
      'O deserto do Atacama, no norte do Chile, é um dos lugares mais secos do mundo, e o ar seco e o céu limpo atraíram grandes observatórios internacionais. O radiotelescópio ALMA fica no planalto de Chajnantor, a cerca de 5.000 metros de altitude.',
    start: 'start',
    glossary: [
      ['ponerse rojo', 'ficar vermelho (mudança passageira)'],
      ['volverse loco por algo', 'ficar louco por algo, apaixonar-se'],
      ['hacerse astrónomo/a', 'tornar-se astrônomo/a (por esforço próprio)'],
      ['quedarse de piedra', 'ficar pasmo, de queixo caído'],
      ['quedarse con la boca abierta', 'ficar boquiaberto'],
      ['hacerse tarde', 'ficar tarde'],
      ['echarse a reír', 'cair na risada'],
      ['tiritar', 'tremer de frio'],
    ],
    nodes: {
      start: {
        emoji: '🏜️',
        text: 'San Pedro de Atacama, en el norte de Chile. De día, el sol pega tan fuerte que Linu se pone rojo como un tomate. Pero al caer la noche el aire se vuelve helado, y el pingüino se pone de muy buen humor. Valentina, guía de un pequeño observatorio, le dice: “Esta noche no hay ni una nube. Te vas a quedar con la boca abierta”.',
        translation: 'San Pedro de Atacama, no norte do Chile. De dia, o sol bate tão forte que o Linu fica vermelho como um tomate. Mas ao cair da noite o ar fica gelado, e o pinguim fica de ótimo humor. Valentina, guia de um pequeno observatório, lhe diz: “Esta noite não tem nem uma nuvem. Você vai ficar boquiaberto”.',
        choices: [
          { text: '“¡Qué bien! ¿Me llevas al observatorio?”', translation: '“Que bom! Você me leva ao observatório?”', next: 'camino' },
          {
            text: '“Entonces llevo paraguas, por si llueve.”',
            translation: '“Então eu levo guarda-chuva, caso chova.”',
            wrong: 'Valentina disse “no hay ni una nube”: o céu estará limpo. E “quedarse con la boca abierta” é ficar boquiaberto de admiração — nada a ver com chuva.',
          },
        ],
      },
      camino: {
        emoji: '🚙',
        text: 'En la camioneta, Valentina le cuenta que se hizo astrónoma casi por casualidad. De niña vivía en Santiago, donde las luces de la ciudad tapaban las estrellas. A los doce años vino de vacaciones al desierto, vio la Vía Láctea y se quedó de piedra. “Desde ese día me volví loca por el cielo”, dice riéndose.',
        translation: 'Na caminhonete, Valentina conta que virou astrônoma quase por acaso. Quando criança morava em Santiago, onde as luzes da cidade escondiam as estrelas. Aos doze anos veio de férias ao deserto, viu a Via Láctea e ficou pasma. “Desde aquele dia fiquei louca pelo céu”, diz rindo.',
        choices: [
          { text: '“A mí me va a pasar lo mismo, ya verás.”', translation: '“Comigo vai acontecer a mesma coisa, você vai ver.”', next: 'observatorio' },
          {
            text: '“¡Qué pena que después dejara de gustarte el cielo!”',
            translation: '“Que pena que depois você deixou de gostar do céu!”',
            wrong: 'Ao contrário! “Me volví loca por el cielo” quer dizer que ela ficou apaixonada pelo céu. “Volverse” indica uma mudança duradoura, que marca a pessoa.',
          },
        ],
      },
      observatorio: {
        emoji: '⛰️',
        text: 'Llegan a una colina lejos del pueblo, donde hay varios telescopios y un grupo de turistas que tiritan de frío. Valentina explica que en esta zona casi nunca llueve y que el aire es muy seco. Por eso muchos observatorios internacionales se instalaron en Atacama. “Uno de ellos, ALMA, está a unos cinco mil metros de altura”, añade.',
        translation: 'Chegam a uma colina longe do povoado, onde há vários telescópios e um grupo de turistas tremendo de frio. Valentina explica que nesta região quase nunca chove e que o ar é muito seco. Por isso muitos observatórios internacionais se instalaram no Atacama. “Um deles, o ALMA, fica a uns cinco mil metros de altitude”, acrescenta.',
        choices: [
          { text: '“¿Puedo mirar por el telescopio ahora mismo?”', translation: '“Posso olhar pelo telescópio agora mesmo?”', next: 'telescopio' },
          { text: '“Hace demasiado frío hasta para mí. Espero en la camioneta.”', translation: '“Está frio demais até para mim. Espero na caminhonete.”', next: 'camioneta' },
        ],
      },
      telescopio: {
        emoji: '🪐',
        text: 'Linu acerca el ojo al telescopio y ve Saturno con sus anillos. Se queda sin palabras. Después, Valentina señala dos manchas blanquecinas en el cielo: son las Nubes de Magallanes, dos galaxias pequeñas vecinas de la nuestra. “Solo se ven bien desde el hemisferio sur”, explica.',
        translation: 'O Linu encosta o olho no telescópio e vê Saturno com seus anéis. Fica sem palavras. Depois, Valentina aponta duas manchas esbranquiçadas no céu: são as Nuvens de Magalhães, duas galáxias pequenas vizinhas da nossa. “Só se veem bem do hemisfério sul”, explica.',
        choices: [
          { text: '“¡Entonces yo, que vengo de la Antártida, las veo siempre!”', translation: '“Então eu, que venho da Antártida, vejo as duas sempre!”', next: 'antartida' },
          {
            text: '“¿Esas manchas son nubes de lluvia?”',
            translation: '“Essas manchas são nuvens de chuva?”',
            wrong: 'Valentina explicou que são “dos galaxias pequeñas”, não nuvens de chuva. O nome “Nubes de Magallanes” engana, mas são galáxias vizinhas da Via Láctea.',
          },
        ],
      },
      antartida: {
        emoji: '🐧',
        text: 'Valentina se echa a reír. “Puede ser, pero en el verano antártico casi no oscurece”, le recuerda. Linu se queda pensando y se da cuenta de que tiene razón: en verano casi nunca ve las estrellas. “Entonces tengo que aprovechar esta noche al máximo”, decide.',
        translation: 'Valentina cai na risada. “Pode ser, mas no verão antártico quase não escurece”, lembra ela. O Linu fica pensando e percebe que ela tem razão: no verão quase nunca vê as estrelas. “Então tenho que aproveitar esta noite ao máximo”, decide.',
        choices: [{ text: '“¿Me enseñas a encontrar la Cruz del Sur?”', translation: '“Você me ensina a achar o Cruzeiro do Sul?”', next: 'cruz' }],
      },
      cruz: {
        emoji: '✨',
        text: 'Valentina le muestra la Cruz del Sur, la constelación que aparece en la bandera de Brasil y en la de Australia. Linu la dibuja en su cuaderno para no olvidarla. Poco a poco se hace tarde y los turistas se van. “Si te quedas hasta las tres, verás salir la Luna detrás de los volcanes”, le propone Valentina.',
        translation: 'Valentina mostra o Cruzeiro do Sul, a constelação que aparece na bandeira do Brasil e na da Austrália. O Linu a desenha no caderno para não esquecer. Aos poucos vai ficando tarde e os turistas vão embora. “Se você ficar até as três, vai ver a Lua nascer atrás dos vulcões”, propõe Valentina.',
        choices: [
          { text: '“¡Claro que me quedo! No quiero perderme nada.”', translation: '“Claro que eu fico! Não quero perder nada.”', next: 'final_luna' },
          { text: '“Mejor me voy: mañana madrugo para ver los géiseres.”', translation: '“Melhor eu ir: amanhã acordo cedo para ver os gêiseres.”', next: 'final_geiseres' },
        ],
      },
      camioneta: {
        emoji: '😴',
        text: 'Linu se mete en la camioneta y se queda dormido enseguida. Cuando se despierta, ya es medianoche y el grupo está volviendo al pueblo. “Te lo perdiste todo”, le dice Valentina, “pero no te preocupes: mañana también va a estar despejado”. Linu se pone colorado de vergüenza: ¡un pingüino que tiene frío!',
        translation: 'O Linu entra na caminhonete e pega no sono na hora. Quando acorda, já é meia-noite e o grupo está voltando para o povoado. “Você perdeu tudo”, diz Valentina, “mas não se preocupe: amanhã também vai estar limpo”. O Linu fica vermelho de vergonha: um pinguim com frio!',
        choices: [{ text: '“Mañana no me lo pierdo por nada del mundo.”', translation: '“Amanhã não perco isso por nada neste mundo.”', next: 'final_manana' }],
      },
      final_luna: {
        emoji: '🌕',
        text: 'A las tres de la madrugada, la Luna asoma detrás de los volcanes y tiñe el desierto de plata. Linu tirita, pero no se mueve de su sitio. “Creo que me estoy volviendo loco por el cielo, como tú”, le dice a Valentina.',
        translation: 'Às três da madrugada, a Lua aparece atrás dos vulcões e tinge o deserto de prata. O Linu treme, mas não sai do lugar. “Acho que estou ficando louco pelo céu, como você”, diz para Valentina.',
        ending: { tone: 'bom', title: 'Louco pelo céu!', message: 'O Linu viu Saturno, as Nuvens de Magalhães e a Lua nascendo sobre o Atacama. E aprendeu que “volverse” marca uma mudança que fica.' },
      },
      final_geiseres: {
        emoji: '♨️',
        text: 'Linu vuelve al pueblo y se acuesta temprano. Al amanecer, en los géiseres, ve columnas de vapor que suben hacia un cielo rosado. No vio la Luna, pero se lleva en el cuaderno su Cruz del Sur.',
        translation: 'O Linu volta ao povoado e deita cedo. Ao amanhecer, nos gêiseres, vê colunas de vapor subindo para um céu rosado. Não viu a Lua, mas leva no caderno o seu Cruzeiro do Sul.',
        ending: { tone: 'bom', title: 'Estrelas e vapor', message: 'Uma noite de estrelas e uma madrugada de gêiseres: o Atacama rendeu dois espetáculos.' },
      },
      final_manana: {
        emoji: '🌌',
        text: 'Al día siguiente, Linu se pone tres bufandas y vuelve al observatorio. Esta vez no se queda dormido, aunque sigue sin ver Saturno porque se le hace tarde para el último turno. Valentina le promete una visita especial la próxima semana.',
        translation: 'No dia seguinte, o Linu põe três cachecóis e volta ao observatório. Desta vez não pega no sono, embora continue sem ver Saturno porque fica tarde demais para o último turno. Valentina promete uma visita especial na semana que vem.',
        ending: { tone: 'neutro', title: 'Fica para a próxima', message: 'O sono venceu o Linu na primeira noite. No Atacama, vale enfrentar o frio: o céu compensa.' },
      },
    },
  },
  {
    id: 'es-h32',
    level: 'B2.3',
    cefr: 'B2',
    title: 'La guacamaya ladrona de Copán',
    emoji: '🦜',
    summary: 'Nas ruínas maias de Copán, em Honduras, uma arara-vermelha rouba o chapéu do Linu. Como recuperá-lo?',
    cultural_context:
      'A arara-vermelha (guacamaya roja) é a ave nacional de Honduras, e o campo do jogo de bola de Copán é decorado com esculturas de cabeças de arara. A Escadaria dos Hieróglifos de Copán tem mais de dois mil glifos e é o texto maia mais longo que se conhece.',
    start: 'start',
    glossary: [
      ['la guacamaya', 'a arara'],
      ['la baleada', 'tortilha de trigo com feijão, queijo e creme, típica de Honduras'],
      ['ponerse nervioso', 'ficar nervoso'],
      ['no te pongas así', 'não fique assim, calma'],
      ['meter la pata', 'dar um fora, fazer besteira'],
      ['¡Ni se te ocurra!', 'Nem pense nisso!'],
      ['caerle bien a alguien', 'agradar a alguém, ir com a cara'],
      ['hacerse amigos', 'ficar amigos'],
    ],
    nodes: {
      start: {
        emoji: '🏛️',
        text: 'Copán Ruinas, en el occidente de Honduras. Linu entra al parque arqueológico con un sombrero nuevo y una baleada en la mano. De repente, un graznido enorme lo hace dar un salto: tres guacamayas rojas pasan volando sobre su cabeza. Linu se queda boquiabierto; nunca había visto pájaros de tantos colores.',
        translation: 'Copán Ruinas, no oeste de Honduras. O Linu entra no parque arqueológico com um chapéu novo e uma baleada na mão. De repente, um grasnido enorme o faz dar um pulo: três araras-vermelhas passam voando sobre a cabeça dele. O Linu fica boquiaberto; nunca tinha visto pássaros de tantas cores.',
        choices: [
          { text: '“¡Qué belleza! Voy a sacarles una foto.”', translation: '“Que beleza! Vou tirar uma foto delas.”', next: 'foto' },
          { text: '“Mejor me siento a comer mientras las miro.”', translation: '“Melhor eu sentar para comer enquanto olho para elas.”', next: 'banco' },
        ],
      },
      foto: {
        emoji: '📷',
        text: 'Mientras Linu busca la cámara, una guacamaya baja en picada, le quita el sombrero y se lo lleva a lo alto de un árbol. Linu se pone nervioso y empieza a dar saltitos debajo de las ramas. Una muchacha con camiseta de voluntaria se acerca riéndose. “Calma, no te pongas así, que ella solo quiere jugar”, le dice.',
        translation: 'Enquanto o Linu procura a câmera, uma arara desce em mergulho, tira o chapéu dele e o leva para o alto de uma árvore. O Linu fica nervoso e começa a dar pulinhos debaixo dos galhos. Uma moça com camiseta de voluntária se aproxima rindo. “Calma, não fique assim, ela só quer brincar”, diz.',
        choices: [
          { text: '“¿Y cómo recupero mi sombrero?”', translation: '“E como eu recupero meu chapéu?”', next: 'sofia' },
          {
            text: '“Entonces la guacamaya está enojada conmigo.”',
            translation: '“Então a arara está zangada comigo.”',
            wrong: 'A voluntária disse que a arara “solo quiere jugar”: ela só quer brincar, não está zangada. E “no te pongas así” é um pedido para o Linu se acalmar.',
          },
        ],
      },
      banco: {
        emoji: '🌯',
        text: 'Linu se sienta en un banco y le da un mordisco a la baleada. Una guacamaya aterriza a su lado, lo mira de reojo y, sin pedir permiso, le arranca el sombrero con el pico. Luego sube con él hasta la rama más alta de un árbol. Una muchacha con camiseta de voluntaria se acerca riéndose: “Tranquilo, ella solo quiere jugar”.',
        translation: 'O Linu se senta num banco e dá uma mordida na baleada. Uma arara pousa ao lado dele, olha de rabo de olho e, sem pedir licença, arranca o chapéu dele com o bico. Depois sobe com ele até o galho mais alto de uma árvore. Uma moça com camiseta de voluntária se aproxima rindo: “Calma, ela só quer brincar”.',
        choices: [{ text: '“¿Y cómo recupero mi sombrero?”', translation: '“E como eu recupero meu chapéu?”', next: 'sofia' }],
      },
      sofia: {
        emoji: '👩‍🌾',
        text: 'La muchacha se llama Sofía y trabaja en un proyecto que cría guacamayas y las devuelve a la selva. Le explica que la guacamaya roja es el ave nacional de Honduras y que los mayas la veneraban. “En la cancha del juego de pelota hay esculturas de cabezas de guacamaya”, cuenta. “Si le das algo a cambio, a lo mejor te devuelve el sombrero.”',
        translation: 'A moça se chama Sofía e trabalha num projeto que cria araras e as devolve à mata. Ela explica que a arara-vermelha é a ave nacional de Honduras e que os maias a veneravam. “No campo do jogo de bola há esculturas de cabeças de arara”, conta. “Se você der algo em troca, talvez ela devolva o chapéu.”',
        choices: [
          { text: '“Le ofrezco un pedazo de mi baleada.”', translation: '“Ofereço um pedaço da minha baleada.”', next: 'nocomida' },
          { text: '“Me quedo quieto y espero con paciencia.”', translation: '“Fico parado e espero com paciência.”', next: 'paciencia' },
        ],
      },
      nocomida: {
        emoji: '🥭',
        text: '“¡Ni se te ocurra!”, exclama Sofía. “La comida de la gente les hace daño; ellas comen frutas y semillas.” Linu se pone colorado: acaba de meter la pata. Sofía saca de la mochila un trozo de mango y se lo da.',
        translation: '“Nem pense nisso!”, exclama Sofía. “A comida das pessoas faz mal para elas; elas comem frutas e sementes.” O Linu fica vermelho: acabou de dar um fora. Sofía tira da mochila um pedaço de manga e o entrega a ele.',
        choices: [
          { text: '“Gracias. Se lo ofrezco yo, despacito.”', translation: '“Obrigado. Eu mesmo ofereço a ela, devagarinho.”', next: 'mango' },
          {
            text: '“Entonces le doy la baleada entera, que es más grande.”',
            translation: '“Então dou a baleada inteira, que é maior.”',
            wrong: 'Sofía acabou de dizer que a comida das pessoas faz mal às araras (“les hace daño”). “¡Ni se te ocurra!” quer dizer “Nem pense nisso!”.',
          },
        ],
      },
      paciencia: {
        emoji: '⏳',
        text: 'Linu se sienta debajo del árbol sin moverse ni un milímetro. Pasan diez minutos, luego veinte. Al final, la guacamaya se aburre del sombrero, lo deja caer y se va volando hacia las ruinas. Linu lo recoge: está un poco mordido, pero entero.',
        translation: 'O Linu se senta debaixo da árvore sem se mexer nem um milímetro. Passam dez minutos, depois vinte. No fim, a arara se cansa do chapéu, deixa-o cair e sai voando em direção às ruínas. O Linu o recolhe: está um pouco mordido, mas inteiro.',
        choices: [{ text: '“Sofía, ¿me acompañas a ver las ruinas?”', translation: '“Sofía, você me acompanha para ver as ruínas?”', next: 'escalinata' }],
      },
      mango: {
        emoji: '🤝',
        text: 'Linu levanta el mango con el ala y se queda muy quieto. La guacamaya baja, suelta el sombrero y agarra la fruta con el pico. Desde ese momento no se separa de Linu: se le posa en el hombro, y parece que se han hecho amigos. “Le caíste bien”, dice Sofía, sorprendida.',
        translation: 'O Linu levanta a manga com a asa e fica bem parado. A arara desce, solta o chapéu e pega a fruta com o bico. A partir daí ela não se separa do Linu: pousa no ombro dele, e parece que ficaram amigos. “Ela foi com a sua cara”, diz Sofía, surpresa.',
        choices: [{ text: '“¿Puede acompañarnos a ver las ruinas?”', translation: '“Ela pode nos acompanhar para ver as ruínas?”', next: 'escalinata' }],
      },
      escalinata: {
        emoji: '🗿',
        text: 'Sofía lo lleva a la Escalinata de los Jeroglíficos, una escalera de piedra con más de dos mil glifos mayas. Le cuenta que es el texto maya más largo que se conoce y que narra la historia de los reyes de Copán. Linu se queda un buen rato mirándola; le parece mentira que alguien la haya tallado hace tantos siglos. “Muchas piedras se cayeron, y los arqueólogos todavía están armando el rompecabezas”, dice Sofía.',
        translation: 'Sofía o leva à Escadaria dos Hieróglifos, uma escada de pedra com mais de dois mil glifos maias. Conta que é o texto maia mais longo que se conhece e que narra a história dos reis de Copán. O Linu fica um bom tempo olhando; parece mentira que alguém a tenha esculpido há tantos séculos. “Muitas pedras caíram, e os arqueólogos ainda estão montando o quebra-cabeça”, diz Sofía.',
        choices: [
          { text: '“¿Puedo volver mañana para ayudar con las guacamayas?”', translation: '“Posso voltar amanhã para ajudar com as araras?”', next: 'final_voluntario' },
          { text: '“Ya vi bastante. Me voy al hotel a dormir la siesta.”', translation: '“Já vi bastante. Vou para o hotel tirar uma soneca.”', next: 'final_siesta' },
        ],
      },
      final_voluntario: {
        emoji: '🎉',
        text: 'Al día siguiente, Linu llega temprano y ayuda a Sofía a repartir fruta en los comederos. Se hace voluntario durante una semana entera. Cada mañana, la guacamaya ladrona lo espera en la misma rama.',
        translation: 'No dia seguinte, o Linu chega cedo e ajuda Sofía a distribuir fruta nos comedouros. Vira voluntário durante uma semana inteira. Toda manhã, a arara ladra o espera no mesmo galho.',
        ending: { tone: 'bom', title: 'Voluntário das araras', message: 'O Linu recuperou o chapéu, conheceu a escrita maia e ganhou uma amiga de penas vermelhas.' },
      },
      final_siesta: {
        emoji: '💤',
        text: 'Linu vuelve al hotel y se queda dormido enseguida. Al despertar, ve por la ventana una bandada de guacamayas rumbo a las ruinas. Se queda con las ganas de volver, pero su autobús sale esa misma tarde.',
        translation: 'O Linu volta para o hotel e pega no sono na hora. Ao acordar, vê pela janela um bando de araras indo para as ruínas. Fica com vontade de voltar, mas o ônibus dele sai naquela mesma tarde.',
        ending: { tone: 'neutro', title: 'Fiquei com vontade', message: 'O Linu viu Copán, mas deixou passar a chance de ajudar as araras. “Quedarse con las ganas” é isso: ficar só na vontade.' },
      },
    },
  },
  {
    id: 'es-h33',
    level: 'B2.3',
    cefr: 'B2',
    title: 'Versos y ceniza en León',
    emoji: '🌋',
    summary: 'Em León, na Nicarágua, o Linu desce um vulcão de prancha e, à noite, precisa recitar Rubén Darío num sarau.',
    cultural_context:
      'Rubén Darío (1867–1916), o grande nome do modernismo hispânico, cresceu em León e está sepultado na catedral da cidade, Patrimônio Mundial da UNESCO. Perto dali, o jovem vulcão Cerro Negro, nascido em 1850, é famoso pela descida de prancha na areia vulcânica.',
    start: 'start',
    glossary: [
      ['¿Te animás?', 'Topa? (voseo, muito usado na Nicarágua; “¿te animas?”)'],
      ['ponerse pálido', 'ficar pálido'],
      ['echarse para atrás', 'voltar atrás, desistir'],
      ['quedarse con las ganas', 'ficar só na vontade'],
      ['estar hecho polvo', 'estar acabado, exausto'],
      ['quedarse en blanco', 'dar branco'],
      ['echar una mano', 'dar uma mão, ajudar'],
      ['volverse poeta', 'virar poeta'],
    ],
    nodes: {
      start: {
        emoji: '⛪',
        text: 'León, Nicaragua. Linu llega a la ciudad donde creció Rubén Darío, el gran poeta del modernismo. En el hostal conoce a Marcela, una estudiante de Letras que los fines de semana trabaja de guía en el volcán Cerro Negro. “Mañana bajamos el volcán en tabla. ¿Te animás?”, le pregunta.',
        translation: 'León, Nicarágua. O Linu chega à cidade onde cresceu Rubén Darío, o grande poeta do modernismo. No albergue conhece Marcela, uma estudante de Letras que nos fins de semana trabalha como guia no vulcão Cerro Negro. “Amanhã descemos o vulcão de prancha. Topa?”, pergunta ela.',
        choices: [
          { text: '“¡Claro! Me encantan los deportes de aventura.”', translation: '“Claro! Adoro esportes de aventura.”', next: 'volcan' },
          { text: '“Prefiero algo más tranquilo, la verdad.”', translation: '“Prefiro algo mais tranquilo, na verdade.”', next: 'catedral' },
        ],
      },
      volcan: {
        emoji: '🏔️',
        text: 'Al amanecer suben el Cerro Negro a pie, cargando tablas de madera. Marcela le cuenta que el volcán es muy joven: nació en 1850 y todavía está activo. Arriba, el viento sopla con fuerza y la arena negra quema bajo las patas. Cuando Linu ve la pendiente, se pone pálido.',
        translation: 'Ao amanhecer sobem o Cerro Negro a pé, carregando pranchas de madeira. Marcela conta que o vulcão é muito jovem: nasceu em 1850 e ainda está ativo. Lá em cima, o vento sopra forte e a areia preta queima sob as patas. Quando o Linu vê a ladeira, fica pálido.',
        choices: [
          { text: '“Me echo para atrás. No me atrevo.”', translation: '“Vou desistir. Não tenho coragem.”', next: 'miedo' },
          { text: '“Ya que subí hasta aquí, ¡me tiro!”', translation: '“Já que subi até aqui, vou me jogar!”', next: 'bajada' },
        ],
      },
      miedo: {
        emoji: '🫂',
        text: 'Marcela no se ríe de él. “Tranquilo, a todo el mundo le pasa la primera vez”, le dice. “Si querés, bajamos juntos y despacio.” Linu respira hondo y decide que no va a quedarse con las ganas.',
        translation: 'Marcela não ri dele. “Calma, acontece com todo mundo na primeira vez”, diz. “Se você quiser, descemos juntos e devagar.” O Linu respira fundo e decide que não vai ficar só na vontade.',
        choices: [
          { text: '“Está bien, pero despacito, ¿eh?”', translation: '“Tá bom, mas devagarinho, hein?”', next: 'bajada' },
          {
            text: '“¿Por qué Marcela se burla de mí?”',
            translation: '“Por que a Marcela está zombando de mim?”',
            wrong: 'Pelo contrário: “no se ríe de él” — ela não ri dele, tranquiliza o Linu e oferece descer junto. E “no quedarse con las ganas” quer dizer não ficar só na vontade: ele decide descer.',
          },
        ],
      },
      bajada: {
        emoji: '🏂',
        text: 'Linu se sienta en la tabla y se lanza cuesta abajo. Al principio va lento, pero enseguida agarra velocidad y la arena le salta a la cara. A mitad de camino pierde el control y rueda el último tramo como una pelota. Llega abajo hecho polvo y negro de pies a cabeza, pero muerto de risa.',
        translation: 'O Linu se senta na prancha e se lança ladeira abaixo. No começo vai devagar, mas logo pega velocidade e a areia voa na cara dele. No meio do caminho perde o controle e rola o último trecho como uma bola. Chega embaixo acabado e preto da cabeça aos pés, mas morrendo de rir.',
        choices: [{ text: '“¡Qué locura! ¿Y ahora qué hacemos?”', translation: '“Que loucura! E agora, o que a gente faz?”', next: 'recital' }],
      },
      catedral: {
        emoji: '🦁',
        text: 'Marcela lo lleva entonces a la Catedral de León, una de las más grandes de Centroamérica. Adentro le muestra la tumba de Rubén Darío, custodiada por un león de piedra que parece llorar. Después suben al techo, completamente blanco, donde todos se quitan los zapatos para no ensuciarlo. Desde allí se ven los volcanes, uno detrás de otro.',
        translation: 'Marcela o leva então à Catedral de León, uma das maiores da América Central. Lá dentro mostra o túmulo de Rubén Darío, guardado por um leão de pedra que parece chorar. Depois sobem ao telhado, todo branco, onde todos tiram os sapatos para não sujá-lo. Dali se veem os vulcões, um atrás do outro.',
        choices: [{ text: '“¡Qué vista! ¿Qué más hay para hacer hoy?”', translation: '“Que vista! O que mais tem para fazer hoje?”', next: 'recital' }],
      },
      recital: {
        emoji: '📜',
        text: 'Esa noche, Marcela lo invita a una tertulia de poesía en un patio del centro. La costumbre es que cada invitado recite unos versos de Darío. Cuando le toca a Linu, se pone de pie, abre el pico y se queda en blanco: no se acuerda de nada. Todos lo miran en silencio.',
        translation: 'Naquela noite, Marcela o convida para um sarau de poesia num pátio do centro. O costume é que cada convidado recite alguns versos de Darío. Quando chega a vez do Linu, ele fica de pé, abre o bico e dá branco: não se lembra de nada. Todos olham para ele em silêncio.',
        choices: [
          { text: '“Perdón, se me olvidó todo. ¿Alguien me echa una mano?”', translation: '“Desculpem, esqueci tudo. Alguém me dá uma mão?”', next: 'ayuda' },
          { text: 'Improvisar un poema propio sobre el hielo.', translation: 'Improvisar um poema próprio sobre o gelo.', next: 'improviso' },
          {
            text: 'Recitar el poema entero sin ningún problema.',
            translation: 'Recitar o poema inteiro sem nenhum problema.',
            wrong: '“Quedarse en blanco” é dar branco: o Linu esqueceu tudo, então não consegue recitar o poema inteiro assim, do nada.',
          },
        ],
      },
      ayuda: {
        emoji: '🌊',
        text: 'Marcela le echa una mano y le susurra el comienzo: “Margarita, está linda la mar, y el viento lleva esencia sutil de azahar”. Linu lo repite despacio, y el público lo acompaña en voz baja. Al final, un señor mayor le cuenta que Darío escribió ese poema para una niña, hija de unos amigos. Linu se pone tan contento que casi se echa a llorar.',
        translation: 'Marcela lhe dá uma mão e sussurra o começo: “Margarita, o mar está lindo, e o vento leva uma essência sutil de flor de laranjeira”. O Linu repete devagar, e o público o acompanha em voz baixa. No fim, um senhor idoso conta que Darío escreveu esse poema para uma menina, filha de uns amigos. O Linu fica tão contente que quase cai no choro.',
        choices: [{ text: '“¡Gracias a todos! Nunca lo voy a olvidar.”', translation: '“Obrigado a todos! Nunca vou esquecer.”', next: 'final_margarita' }],
      },
      improviso: {
        emoji: '❄️',
        text: 'Linu cierra los ojos e inventa unos versos sobre el hielo, el mar del sur y un volcán negro. Rima “pingüino” con “camino” y con “destino”. Al principio la gente se queda callada, pero luego estalla en aplausos. “Te volviste poeta en una sola noche”, le dice Marcela.',
        translation: 'O Linu fecha os olhos e inventa uns versos sobre o gelo, o mar do sul e um vulcão preto. Rima “pingüino” com “camino” e com “destino”. No começo o pessoal fica calado, mas depois explode em aplausos. “Você virou poeta numa só noite”, diz Marcela.',
        choices: [{ text: '“Darío me perdone, pero me gustó.”', translation: '“Que Darío me perdoe, mas eu gostei.”', next: 'final_poeta' }],
      },
      final_margarita: {
        emoji: '🎉',
        text: 'Al día siguiente, Linu compra un libro de poemas de Darío en una librería de la plaza. En la primera página escribe: “León, la noche en que me quedé en blanco”. Desde entonces, se sabe de memoria el comienzo de “A Margarita Debayle”.',
        translation: 'No dia seguinte, o Linu compra um livro de poemas de Darío numa livraria da praça. Na primeira página escreve: “León, a noite em que me deu branco”. Desde então, sabe de cor o começo de “A Margarita Debayle”.',
        ending: { tone: 'bom', title: 'Versos de Darío', message: 'Com uma mão da Marcela, o branco virou poesia. O Linu levou de León um livro e um poema de cor.' },
      },
      final_poeta: {
        emoji: '✍️',
        text: 'Los amigos de Marcela le piden que vuelva a la tertulia la semana siguiente. Linu pasa los días escribiendo en el hostal, con la arena del volcán todavía entre las plumas. Se ha vuelto poeta, y no piensa dejarlo.',
        translation: 'Os amigos da Marcela pedem que ele volte ao sarau na semana seguinte. O Linu passa os dias escrevendo no albergue, com a areia do vulcão ainda entre as penas. Virou poeta, e não pretende parar.',
        ending: { tone: 'bom', title: 'Um pinguim poeta', message: 'Na cidade de Rubén Darío, o Linu descobriu que também sabe rimar. “Volverse poeta”: uma mudança para a vida toda.' },
      },
    },
  },
  {
    id: 'es-h34',
    level: 'B2.4',
    cefr: 'B2',
    title: 'El gran debate de la pupusa',
    emoji: '🫓',
    summary: 'Em San Salvador, o Linu é jurado de um concurso de pupusas: a de milho da dona Rosa ou a de arroz do sobrinho Kevin?',
    cultural_context:
      'A pupusa, disco de massa recheado de queijo, feijão ou torresmo, é o prato nacional de El Salvador, e o segundo domingo de novembro é o Dia Nacional da Pupusa. A cidade de Olocuilta é famosa pelas pupusas de massa de arroz.',
    start: 'start',
    glossary: [
      ['la colonia', 'o bairro (em El Salvador e no México)'],
      ['el curtido', 'conserva de repolho que acompanha a pupusa'],
      ['creo que + indicativo', 'acho que… (afirmo)'],
      ['no creo que + subjuntivo', 'não acho que…'],
      ['en primer lugar / por último', 'em primeiro lugar / por último'],
      ['por un lado… por otro', 'por um lado… por outro'],
      ['en cambio', 'por outro lado, já (contraste)'],
      ['a mi modo de ver', 'a meu ver'],
    ],
    nodes: {
      start: {
        emoji: '🇸🇻',
        text: 'San Salvador, segundo domingo de noviembre: es el Día Nacional de la Pupusa. En la colonia donde se hospeda Linu organizan un concurso y, como él es extranjero y neutral, lo nombran jurado. Las finalistas son doña Rosa, que hace pupusas de maíz desde hace cuarenta años, y su sobrino Kevin, que prefiere la masa de arroz, al estilo de Olocuilta. “Usted decide, Linu”, le dicen los vecinos.',
        translation: 'San Salvador, segundo domingo de novembro: é o Dia Nacional da Pupusa. No bairro onde o Linu está hospedado organizam um concurso e, como ele é estrangeiro e neutro, o nomeiam jurado. Os finalistas são dona Rosa, que faz pupusas de milho há quarenta anos, e o sobrinho dela, Kevin, que prefere a massa de arroz, ao estilo de Olocuilta. “O senhor decide, Linu”, dizem os vizinhos.',
        choices: [
          { text: '“Primero quiero escuchar a los dos.”', translation: '“Primeiro quero ouvir os dois.”', next: 'rosa' },
          { text: '“Elijo ya: la de maíz, que es la tradicional.”', translation: '“Escolho já: a de milho, que é a tradicional.”', next: 'apurado' },
        ],
      },
      apurado: {
        emoji: '🙅',
        text: 'Kevin se cruza de brazos. “No me parece justo que decida sin probarlas”, protesta. Los vecinos le dan la razón: un buen jurado escucha los argumentos antes de opinar. Linu reconoce que se ha precipitado.',
        translation: 'Kevin cruza os braços. “Não me parece justo que o senhor decida sem prová-las”, protesta. Os vizinhos lhe dão razão: um bom jurado escuta os argumentos antes de opinar. O Linu reconhece que se precipitou.',
        choices: [{ text: '“Tienen razón. Empecemos de nuevo.”', translation: '“Vocês têm razão. Vamos começar de novo.”', next: 'rosa' }],
      },
      rosa: {
        emoji: '👵',
        text: 'Doña Rosa habla primero. “Yo creo que la pupusa de maíz es la auténtica, porque así la hacían nuestras abuelas”, dice. “Además, la masa de maíz tiene más sabor.” “No creo que la de arroz sea mala, pero le falta alma”, concluye.',
        translation: 'Dona Rosa fala primeiro. “Eu acho que a pupusa de milho é a autêntica, porque era assim que nossas avós a faziam”, diz. “Além disso, a massa de milho tem mais sabor.” “Não acho que a de arroz seja ruim, mas falta alma nela”, conclui.',
        choices: [
          { text: '“Gracias, doña Rosa. ¿Y usted qué opina, Kevin?”', translation: '“Obrigado, dona Rosa. E o senhor, o que acha, Kevin?”', next: 'kevin' },
          {
            text: '“Entonces usted piensa que la de arroz es malísima.”',
            translation: '“Então a senhora acha que a de arroz é péssima.”',
            wrong: 'Cuidado: “No creo que la de arroz sea mala” quer dizer que ela NÃO acha a de arroz ruim; só acha que “le falta alma”. Depois de “no creo que” vem o subjuntivo (“sea”).',
          },
        ],
      },
      kevin: {
        emoji: '👨‍🍳',
        text: 'Kevin toma la palabra. “En primer lugar, la masa de arroz queda más crujiente por fuera y más suave por dentro”, argumenta. “En segundo lugar, en Olocuilta llevan décadas haciéndolas así, de modo que también son tradición.” “Y por último, creo que una tradición que no cambia se muere.”',
        translation: 'Kevin toma a palavra. “Em primeiro lugar, a massa de arroz fica mais crocante por fora e mais macia por dentro”, argumenta. “Em segundo lugar, em Olocuilta fazem assim há décadas, de modo que também é tradição.” “E por último, acho que uma tradição que não muda morre.”',
        choices: [{ text: '“Muy bien. Ahora quiero probar las dos.”', translation: '“Muito bem. Agora quero provar as duas.”', next: 'prueba' }],
      },
      prueba: {
        emoji: '🍽️',
        text: 'Le sirven una pupusa de cada una, con curtido y salsa de tomate. Linu las prueba despacio, como un verdadero jurado. La de maíz tiene un sabor profundo y tostado; la de arroz, en cambio, es más ligera y crujiente. Sinceramente, las dos le parecen buenísimas.',
        translation: 'Servem para ele uma pupusa de cada, com curtido e molho de tomate. O Linu prova devagar, como um verdadeiro jurado. A de milho tem um sabor profundo e tostado; a de arroz, já ela, é mais leve e crocante. Sinceramente, as duas lhe parecem ótimas.',
        choices: [
          { text: '“Propongo un empate: ganan las dos.”', translation: '“Proponho um empate: as duas ganham.”', next: 'empate' },
          { text: '“Voy a votar por una, pero explicaré mis razones.”', translation: '“Vou votar numa, mas vou explicar minhas razões.”', next: 'razones' },
          {
            text: '“La de arroz tiene un sabor profundo y tostado, así que gana Kevin.”',
            translation: '“A de arroz tem um sabor profundo e tostado, então o Kevin ganha.”',
            wrong: 'Trocou as pupusas: o texto diz que a de MILHO tem sabor profundo e tostado; a de arroz, “en cambio”, é mais leve e crocante. “En cambio” marca o contraste.',
          },
        ],
      },
      empate: {
        emoji: '⚖️',
        text: 'Linu se pone de pie y habla con seriedad. “Por un lado, la pupusa de maíz es la receta de las abuelas; por otro, la de arroz también tiene su historia”, dice. “Por lo tanto, no creo que haga falta elegir: las dos son salvadoreñas.” Hay un silencio, y luego doña Rosa y Kevin se miran y se echan a reír.',
        translation: 'O Linu se levanta e fala com seriedade. “Por um lado, a pupusa de milho é a receita das avós; por outro, a de arroz também tem sua história”, diz. “Portanto, não acho que seja preciso escolher: as duas são salvadorenhas.” Há um silêncio, e depois dona Rosa e Kevin se olham e caem na risada.',
        choices: [{ text: '“¿Y si hacen un puesto juntos?”', translation: '“E se vocês montassem uma barraca juntos?”', next: 'final_empate' }],
      },
      razones: {
        emoji: '🏆',
        text: 'Linu respira hondo. “A mi modo de ver, la de maíz gana por poco, porque su sabor es más intenso”, dice. “Sin embargo, pienso que Kevin merece un premio especial a la innovación, ya que su pupusa demuestra que la cocina también evoluciona.” Kevin se queda un poco serio, pero acaba sonriendo.',
        translation: 'O Linu respira fundo. “A meu ver, a de milho ganha por pouco, porque seu sabor é mais intenso”, diz. “No entanto, acho que o Kevin merece um prêmio especial de inovação, já que a pupusa dele mostra que a cozinha também evolui.” Kevin fica um pouco sério, mas acaba sorrindo.',
        choices: [{ text: '“Felicidades a los dos.”', translation: '“Parabéns aos dois.”', next: 'final_razones' }],
      },
      final_empate: {
        emoji: '🎉',
        text: 'Esa misma semana, tía y sobrino abren juntos un puesto con pupusas de maíz y de arroz. El cartel dice: “Aquí no se discute: se come”. Linu tiene mesa reservada todos los domingos.',
        translation: 'Naquela mesma semana, tia e sobrinho abrem juntos uma barraca com pupusas de milho e de arroz. A placa diz: “Aqui não se discute: se come”. O Linu tem mesa reservada todos os domingos.',
        ending: { tone: 'bom', title: 'Empate saboroso', message: 'Com argumentos dos dois lados e um bom “por lo tanto”, o Linu transformou uma briga de família numa sociedade.' },
      },
      final_razones: {
        emoji: '🥇',
        text: 'Doña Rosa levanta el trofeo y Kevin, su diploma a la innovación. Por la noche, todos cenan juntos en el patio, y cada uno prueba la pupusa del otro. Kevin admite que la de su tía “no está nada mal”.',
        translation: 'Dona Rosa ergue o troféu e Kevin, o diploma de inovação. À noite, todos jantam juntos no pátio, e cada um prova a pupusa do outro. Kevin admite que a da tia “não é nada mal”.',
        ending: { tone: 'bom', title: 'Um jurado justo', message: 'O Linu deu uma opinião clara e bem argumentada, sem desmerecer ninguém: “a mi modo de ver… sin embargo…”.' },
      },
    },
  },
  {
    id: 'es-h35',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Gigantes o charangas en San Fermín',
    emoji: '🎺',
    summary: 'Nas festas de San Fermín, em Pamplona, dois amigos discutem o que é melhor: os gigantes de manhã ou a música das peñas à noite.',
    cultural_context:
      'As festas de San Fermín, em Pamplona, começam em 6 de julho ao meio-dia com o chupinazo, lançado da sacada da prefeitura, e terminam em 14 de julho à meia-noite com a canção “Pobre de mí”. A comparsa de gigantes e cabezudos, com seus oito gigantes, desfila pelas ruas todas as manhãs de festa.',
    start: 'start',
    glossary: [
      ['el chupinazo', 'o foguete que abre as festas'],
      ['la peña', 'associação de amigos que sai junta nas festas'],
      ['la charanga', 'bandinha de metais e percussão'],
      ['los gigantes y cabezudos', 'bonecos gigantes e cabeçudos'],
      ['¡Venga!', 'Vamos! Anda! (muito usado na Espanha)'],
      ['os quedáis', 'vocês ficam (forma de “vosotros”, usada na Espanha)'],
      ['pasárselo en grande', 'divertir-se muito'],
      ['desde mi punto de vista', 'do meu ponto de vista'],
    ],
    nodes: {
      start: {
        emoji: '🧣',
        text: 'Pamplona, 6 de julio, casi mediodía. La plaza del Ayuntamiento está llena de gente vestida de blanco, con un pañuelo rojo en la mano. Linu, que por suerte ya es blanco y negro, solo necesita el pañuelo. A las doce en punto suena el chupinazo, y todo el mundo se ata el pañuelo al cuello gritando: “¡Viva San Fermín!”',
        translation: 'Pamplona, 6 de julho, quase meio-dia. A praça da prefeitura está cheia de gente vestida de branco, com um lenço vermelho na mão. O Linu, que por sorte já é branco e preto, só precisa do lenço. Ao meio-dia em ponto estoura o chupinazo, e todo mundo amarra o lenço no pescoço gritando: “Viva San Fermín!”',
        choices: [{ text: '“¡Qué emoción! ¿Y ahora qué hacemos?”', translation: '“Que emoção! E agora, o que a gente faz?”', next: 'debate' }],
      },
      debate: {
        emoji: '🗣️',
        text: 'Sus amigos, Ainhoa e Iñaki, no se ponen de acuerdo. “Yo creo que lo mejor de las fiestas son los gigantes y cabezudos por la mañana”, dice Ainhoa. “Pues yo no creo que haya nada mejor que la música de las peñas por la noche”, responde Iñaki. “Linu, ¿tú qué opinas?”, le preguntan los dos a la vez.',
        translation: 'Os amigos dele, Ainhoa e Iñaki, não chegam a um acordo. “Eu acho que o melhor das festas são os gigantes e cabeçudos de manhã”, diz Ainhoa. “Pois eu não acho que haja nada melhor que a música das peñas à noite”, responde Iñaki. “Linu, o que você acha?”, perguntam os dois ao mesmo tempo.',
        choices: [
          { text: '“Antes de opinar, quiero oír sus argumentos.”', translation: '“Antes de opinar, quero ouvir os argumentos de vocês.”', next: 'argumentos' },
          {
            text: '“O sea, que para Iñaki la música de noche es lo peor.”',
            translation: '“Ou seja, para o Iñaki a música à noite é o pior.”',
            wrong: '“No creo que haya nada mejor” = não acho que haja nada melhor: para o Iñaki, a música das peñas é o MELHOR. Repare no subjuntivo “haya” depois de “no creo que”.',
          },
        ],
      },
      argumentos: {
        emoji: '📋',
        text: 'Ainhoa empieza: “En primer lugar, los gigantes desfilan desde el siglo XIX y son parte de la historia de la ciudad. Además, es una fiesta para todas las edades: los niños se lo pasan en grande.” Iñaki contraataca: “Es verdad, pero de noche las charangas tocan en cada esquina y la ciudad entera baila.” “Por eso creo que la noche es el alma de San Fermín”, concluye.',
        translation: 'Ainhoa começa: “Em primeiro lugar, os gigantes desfilam desde o século XIX e fazem parte da história da cidade. Além disso, é uma festa para todas as idades: as crianças se divertem muito.” Iñaki contra-ataca: “É verdade, mas à noite as charangas tocam em cada esquina e a cidade inteira dança.” “Por isso acho que a noite é a alma de San Fermín”, conclui.',
        choices: [
          { text: '“Mañana temprano vamos a ver los gigantes.”', translation: '“Amanhã cedo vamos ver os gigantes.”', next: 'gigantes' },
          { text: '“Esta noche empiezo por las peñas.”', translation: '“Hoje à noite começo pelas peñas.”', next: 'noche' },
          {
            text: '“Ainhoa dice que los gigantes son solo para niños.”',
            translation: '“A Ainhoa diz que os gigantes são só para crianças.”',
            wrong: 'Ela disse o contrário: “es una fiesta para todas las edades”, uma festa para todas as idades. “Los niños se lo pasan en grande” só diz que as crianças se divertem muito.',
          },
        ],
      },
      gigantes: {
        emoji: '👑',
        text: 'A la mañana siguiente, la comparsa sale a la calle: ocho gigantes enormes que bailan al son de las gaitas y los tambores. Detrás vienen los cabezudos y los kilikis, que persiguen a los niños entre risas. Un kiliki confunde a Linu con un niño y lo persigue media calle. Linu corre tanto que se queda sin aliento, pero muerto de risa.',
        translation: 'Na manhã seguinte, a comparsa sai à rua: oito gigantes enormes que dançam ao som das gaitas e dos tambores. Atrás vêm os cabeçudos e os kilikis, que perseguem as crianças entre risadas. Um kiliki confunde o Linu com uma criança e o persegue por meia rua. O Linu corre tanto que fica sem fôlego, mas morrendo de rir.',
        choices: [
          { text: '“Esta noche voy con Iñaki: quiero comparar.”', translation: '“Hoje à noite vou com o Iñaki: quero comparar.”', next: 'noche' },
          { text: '“Ya lo tengo claro: me quedo con los gigantes.”', translation: '“Já está claro para mim: fico com os gigantes.”', next: 'final_gigantes' },
        ],
      },
      noche: {
        emoji: '🌙',
        text: 'Por la noche, Iñaki lo lleva con su peña, que recorre el casco viejo detrás de una charanga de trompetas y tambores. “¡Venga, que os quedáis atrás!”, les grita a los amigos. Linu no sabe bailar, pero al rato ya está saltando como todos. A las dos de la madrugada está hecho polvo, pero no quiere irse a casa.',
        translation: 'À noite, o Iñaki o leva com a peña dele, que percorre o centro histórico atrás de uma charanga de trompetes e tambores. “Vamos, vocês estão ficando para trás!”, grita para os amigos. O Linu não sabe dançar, mas logo já está pulando como todos. Às duas da madrugada está acabado, mas não quer ir para casa.',
        choices: [{ text: '“Ya sé lo que opino. ¡Se lo digo mañana a los dos!”', translation: '“Já sei o que acho. Digo amanhã para os dois!”', next: 'opinion' }],
      },
      opinion: {
        emoji: '☕',
        text: 'Al día siguiente, Linu reúne a sus amigos en un café. “Desde mi punto de vista, ustedes dos tienen razón”, empieza. “Por un lado, los gigantes son la memoria de la ciudad; por otro, la música de las peñas es la alegría de la fiesta.” “Por lo tanto, no creo que haya que elegir: San Fermín necesita las dos cosas.”',
        translation: 'No dia seguinte, o Linu reúne os amigos num café. “Do meu ponto de vista, vocês dois têm razão”, começa. “Por um lado, os gigantes são a memória da cidade; por outro, a música das peñas é a alegria da festa.” “Portanto, não acho que seja preciso escolher: San Fermín precisa das duas coisas.”',
        choices: [{ text: '“¿Qué les parece mi conclusión?”', translation: '“O que vocês acham da minha conclusão?”', next: 'final_pobre' }],
      },
      final_pobre: {
        emoji: '🕯️',
        text: 'Ainhoa e Iñaki se dan la mano, riéndose. El 14 de julio, a medianoche, los tres cantan juntos el “Pobre de mí” con una vela en la mano, como manda la tradición. Linu ya tiene claro que el año que viene volverá.',
        translation: 'Ainhoa e Iñaki apertam as mãos, rindo. No dia 14 de julho, à meia-noite, os três cantam juntos o “Pobre de mí” com uma vela na mão, como manda a tradição. O Linu já tem certeza de que no ano que vem vai voltar.',
        ending: { tone: 'bom', title: 'Até o ano que vem!', message: 'O Linu ouviu os dois lados, provou as duas festas e deu uma opinião equilibrada: “por un lado… por otro… por lo tanto”.' },
      },
      final_gigantes: {
        emoji: '🎭',
        text: 'Linu se compra un gigante en miniatura de recuerdo y pasa el resto de las fiestas siguiendo a la comparsa por las mañanas. Iñaki se queda un poco decepcionado. Aun así, le hace prometer que el año que viene saldrá con la peña.',
        translation: 'O Linu compra um gigante em miniatura de lembrança e passa o resto das festas seguindo a comparsa pelas manhãs. O Iñaki fica um pouco decepcionado. Mesmo assim, faz o Linu prometer que no ano que vem vai sair com a peña.',
        ending: { tone: 'neutro', title: 'Time dos gigantes', message: 'O Linu escolheu um lado sem conhecer o outro. Para opinar bem, vale ouvir (e dançar) as duas partes.' },
      },
    },
  },
  {
    id: 'es-h36',
    level: 'B2.4',
    cefr: 'B2',
    title: 'Debate en el Ávila',
    emoji: '⛰️',
    summary: 'Numa trilha do Ávila, em Caracas, o Linu precisa dar a sua opinião: continuar a pé ou pegar o teleférico?',
    cultural_context:
      'O Parque Nacional El Ávila, também chamado Waraira Repano, foi criado em 1958 e separa Caracas do mar do Caribe; seu ponto mais alto, o Pico Naiguatá, tem cerca de 2.765 m. Nas manhãs de Caracas, é comum ver araras (guacamayas) cruzando o céu da cidade.',
    start: 'start',
    glossary: [
      ['pana', 'amigo, parceiro (Venezuela)'],
      ['creo que + indicativo', 'acho que (opinião afirmativa)'],
      ['no creo que + subjuntivo', 'não acho que (dúvida, discordância)'],
      ['la neblina', 'a neblina'],
      ['en primer lugar… además…', 'em primeiro lugar… além disso…'],
      ['por lo tanto', 'portanto'],
      ['no es para tanto', 'não é para tanto, não é grave'],
      ['valer la pena', 'valer a pena'],
    ],
    nodes: {
      start: {
        emoji: '🌄',
        text: 'Son las seis de la mañana y Caracas todavía está medio dormida. Linu sube por el camino de Sabas Nieves con Mariela, una guía muy conversadora, y dos panas suyos, Andrés y Carolina. Sobre sus cabezas pasa una pareja de guacamayas gritando como si discutieran. “Hasta los pájaros opinan aquí”, se ríe Mariela.',
        translation:
          'São seis da manhã e Caracas ainda está meio adormecida. Linu sobe pela trilha de Sabas Nieves com Mariela, uma guia muito falante, e dois amigos dela, Andrés e Carolina. Sobre as cabeças deles passa um casal de araras gritando como se discutissem. “Aqui até os pássaros dão opinião”, ri Mariela.',
        choices: [
          { text: 'Preguntar de qué hablan Andrés y Carolina, que discuten detrás.', translation: 'Perguntar sobre o que falam Andrés e Carolina, que discutem lá atrás.', next: 'debate' },
          { text: 'Sacar la cámara para fotografiar las guacamayas.', translation: 'Pegar a câmera para fotografar as araras.', next: 'guacamayas' },
        ],
      },
      guacamayas: {
        emoji: '🦜',
        text: 'Linu saca la cámara, pero las guacamayas ya van lejos, rojas y azules contra el cielo. Mariela le cuenta que muchas viven en los árboles de la ciudad y se oyen desde muy temprano. “Yo creo que son las verdaderas dueñas de Caracas”, dice. Mientras tanto, detrás de ellos, Andrés y Carolina levantan la voz.',
        translation:
          'Linu pega a câmera, mas as araras já vão longe, vermelhas e azuis contra o céu. Mariela conta que muitas vivem nas árvores da cidade e são ouvidas desde muito cedo. “Eu acho que elas são as verdadeiras donas de Caracas”, diz. Enquanto isso, atrás deles, Andrés e Carolina levantam a voz.',
        choices: [{ text: 'Acercarse a ver qué pasa.', translation: 'Aproximar-se para ver o que está acontecendo.', next: 'debate' }],
      },
      debate: {
        emoji: '🗣️',
        text: 'En el puesto de Sabas Nieves, los dos amigos no se ponen de acuerdo. Andrés señala la montaña: “Creo que la neblina va a bajar pronto; por lo tanto, lo sensato es subir en el teleférico”. Carolina niega con la cabeza: “Pues yo no creo que la neblina baje antes del mediodía, y además, subir a pie es la gracia del paseo”. Mariela mira a Linu: “Tú decides, que eres el invitado. ¿Qué opinas?”',
        translation:
          'No posto de Sabas Nieves, os dois amigos não chegam a um acordo. Andrés aponta para a montanha: “Acho que a neblina vai baixar logo; portanto, o sensato é subir de teleférico”. Carolina balança a cabeça: “Pois eu não acho que a neblina baixe antes do meio-dia, e além disso, subir a pé é a graça do passeio”. Mariela olha para Linu: “Você decide, que é o convidado. O que você acha?”',
        choices: [
          {
            text: '“En primer lugar, no creo que haya neblina tan temprano; además, quiero ver el paisaje paso a paso. Por lo tanto, sigamos a pie.”',
            translation: '“Em primeiro lugar, não acho que haja neblina tão cedo; além disso, quero ver a paisagem passo a passo. Portanto, vamos seguir a pé.”',
            next: 'sendero',
          },
          {
            text: '“No creo que valga la pena arriesgarnos. Prefiero el teleférico, aunque me pierda la caminata.”',
            translation: '“Não acho que valha a pena arriscar. Prefiro o teleférico, mesmo que eu perca a caminhada.”',
            next: 'teleferico',
          },
          {
            text: '“Si Carolina también cree que va a haber neblina, mejor subimos en teleférico.”',
            translation: '“Se a Carolina também acha que vai ter neblina, melhor subirmos de teleférico.”',
            wrong:
              'Carolina disse o contrário: “no creo que la neblina baje” — ela duvida que a neblina venha antes do meio-dia. Quem acha que vai ter neblina é o Andrés. Repare: “no creo que” + subjuntivo expressa dúvida ou discordância.',
          },
        ],
      },
      sendero: {
        emoji: '🥾',
        text: 'La subida es dura, pero el aire huele a hierba y a tierra mojada. A mitad de camino encuentran a un señor que deja una bolsa de basura junto a un árbol. “No creo que sea para tanto —se defiende—; total, alguien la recogerá”. Carolina resopla y mira a Linu, como pidiéndole ayuda.',
        translation:
          'A subida é dura, mas o ar cheira a mato e a terra molhada. No meio do caminho, encontram um senhor que deixa um saco de lixo ao lado de uma árvore. “Não acho que seja para tanto — ele se defende —; afinal, alguém vai recolher”. Carolina bufa e olha para Linu, como se pedisse ajuda.',
        choices: [
          {
            text: '“Con todo respeto, señor, creo que sí es para tanto: si cada visitante deja una bolsa, el parque se llena de basura. Por eso, lo mejor es bajarla.”',
            translation: '“Com todo o respeito, senhor, acho que é para tanto, sim: se cada visitante deixar um saco, o parque se enche de lixo. Por isso, o melhor é levá-lo de volta.”',
            next: 'basura',
          },
          {
            text: '“¡Qué bien que usted también piense que es grave!”',
            translation: '“Que bom que o senhor também acha que é grave!”',
            wrong:
              'O senhor disse “no creo que sea para tanto”: ele NÃO acha grave deixar o lixo ali. Com “no creo que”, o verbo vai para o subjuntivo (sea) e a frase expressa discordância.',
          },
        ],
      },
      basura: {
        emoji: '♻️',
        text: 'El señor se rasca la cabeza y, después de pensarlo un momento, recoge la bolsa. “Bueno, pana, visto así, tienes razón”, admite. Incluso les regala unas mandarinas para el camino. Carolina le choca la mano a Linu: “¡Eso sí fue un buen argumento!”',
        translation:
          'O senhor coça a cabeça e, depois de pensar um momento, pega o saco. “Bom, amigo, vendo por esse lado, você tem razão”, admite. Ele até dá umas tangerinas para eles levarem no caminho. Carolina bate na mão de Linu: “Isso sim foi um bom argumento!”',
        choices: [{ text: 'Seguir subiendo hasta lo alto del cerro.', translation: 'Continuar subindo até o alto do morro.', next: 'cima' }],
      },
      cima: {
        emoji: '🌊',
        text: 'Arriba, cerca de la estación del teleférico, la neblina todavía no ha llegado, tal como decía Carolina. De un lado se ve Caracas, llena de edificios; del otro, el mar Caribe brilla hasta el horizonte. Andrés reconoce, un poco a regañadientes: “Está bien, lo admito: no creía que se pudiera ver el mar tan claro”. Mariela propone bajar en teleférico para descansar las piernas.',
        translation:
          'Lá em cima, perto da estação do teleférico, a neblina ainda não chegou, exatamente como dizia Carolina. De um lado se vê Caracas, cheia de prédios; do outro, o mar do Caribe brilha até o horizonte. Andrés reconhece, meio a contragosto: “Tá bom, admito: eu não achava que desse para ver o mar tão nítido”. Mariela sugere descer de teleférico para descansar as pernas.',
        choices: [{ text: 'Aceptar y bajar en teleférico con todos.', translation: 'Aceitar e descer de teleférico com todos.', next: 'final_bom' }],
      },
      teleferico: {
        emoji: '🚡',
        text: 'Bajan hasta la estación y suben en el teleférico; durante un rato, Caracas se hace pequeñita bajo sus pies. Pero arriba, en efecto, no hay neblina, y Carolina no pierde la oportunidad: “¿Ves? Te dije que no creía que bajara tan temprano”. Andrés se encoge de hombros: “Bueno, al menos llegamos descansados”. Mariela propone caminar un poco hasta un mirador antes de volver.',
        translation:
          'Eles descem até a estação e sobem de teleférico; por um tempo, Caracas fica pequenininha sob os pés deles. Mas lá em cima, de fato, não há neblina, e Carolina não perde a oportunidade: “Viu? Eu te disse que não achava que ela baixasse tão cedo”. Andrés dá de ombros: “Bom, pelo menos chegamos descansados”. Mariela sugere caminhar um pouco até um mirante antes de voltar.',
        choices: [
          { text: 'Admitir que Carolina tenía razón y caminar hasta el mirador.', translation: 'Admitir que Carolina tinha razão e caminhar até o mirante.', next: 'final_mirador' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Desde el teleférico, Caracas se ve dorada bajo el sol de la tarde. Andrés y Carolina ya no discuten; ahora planean juntos la próxima excursión. “Creo que eres el mejor debatiente del Ávila”, le dice Mariela a Linu. Él sonríe: no cree que sea para tanto, pero le encanta oírlo.',
        translation:
          'Do teleférico, Caracas parece dourada sob o sol da tarde. Andrés e Carolina já não discutem; agora planejam juntos a próxima excursão. “Acho que você é o melhor debatedor do Ávila”, diz Mariela a Linu. Ele sorri: não acha que seja para tanto, mas adora ouvir isso.',
        ending: { tone: 'bom', title: 'O melhor argumento do Ávila', message: 'Você entendeu quem achava o quê, defendeu a sua opinião com conectores e ainda convenceu um desconhecido a cuidar do parque.' },
      },
      final_mirador: {
        emoji: '🌫️',
        text: 'En el mirador, el mar se ve a lo lejos, aunque ya empiezan a subir algunas nubes. Carolina está contenta de haber tenido razón, pero se le nota que extrañó la caminata. “La próxima vez subimos a pie, ¿vale?”, le propone a Linu. Él asiente: no cree que vuelva a elegir el teleférico tan rápido.',
        translation:
          'No mirante, o mar aparece ao longe, embora algumas nuvens já comecem a subir. Carolina está contente por ter tido razão, mas dá para ver que sentiu falta da caminhada. “Da próxima vez a gente sobe a pé, combinado?”, ela propõe a Linu. Ele concorda: não acha que vá escolher o teleférico tão rápido de novo.',
        ending: { tone: 'neutro', title: 'Vista pela metade', message: 'A vista foi bonita, mas o seu argumento pelo teleférico partiu de um medo que a Carolina já tinha descartado.' },
      },
    },
  },
  {
    id: 'es-h37',
    level: 'C1.1',
    cefr: 'C1',
    title: '¡Qué madrugador, vos!',
    emoji: '🧉',
    summary: 'Em Córdoba, na Argentina, o Linu enfrenta o voseo, a “tonada” e a zoeira de um almoço de domingo em família.',
    cultural_context:
      'Os cordobeses são famosos na Argentina pelo humor e pela “tonada”, o sotaque que alonga a sílaba anterior à tônica. Foi em Córdoba que nasceu o cuarteto, ritmo dançante que surgiu em 1943 com o Cuarteto Leo.',
    start: 'start',
    glossary: [
      ['vos tenés / vos querés', 'você tem / você quer (voseo argentino)'],
      ['che', 'ô, ei (vocativo argentino)'],
      ['mirá vos', 'olha só (surpresa ou ironia)'],
      ['cargar / la cargada', 'zoar / a zoeira, a gozação'],
      ['mi vieja', 'minha mãe (carinhoso, Argentina)'],
      ['posta', 'sério, de verdade (gíria)'],
      ['la tonada', 'o sotaque cantado de Córdoba'],
      ['el colectivo', 'o ônibus (Argentina)'],
    ],
    nodes: {
      start: {
        emoji: '😴',
        text: 'Domingo en Córdoba. Linu se despierta a las doce y media, con el sol entrando de lleno por la ventana del barrio Güemes. En la cocina está Nacho, su anfitrión, tomando mate con cara de santo. “¡Uh, mirá quién llegó! —exclama, estirando cada vocal—. ¡Qué madrugador, vos! ¿Dormiste bien o te armo una camita acá en la mesa?”',
        translation:
          'Domingo em Córdoba. Linu acorda ao meio-dia e meia, com o sol entrando em cheio pela janela do bairro Güemes. Na cozinha está Nacho, seu anfitrião, tomando mate com cara de santo. “Uh, olha só quem chegou! — exclama, esticando cada vogal. — Que madrugador, hein! Dormiu bem ou quer que eu arme uma caminha aqui na mesa?”',
        choices: [
          {
            text: 'Seguirle la broma: “Es que en la Antártida, en invierno, el sol ni sale, che”.',
            translation: 'Entrar na brincadeira: “É que na Antártida, no inverno, o sol nem nasce, ô”.',
            next: 'mate',
          },
          { text: 'Pedir disculpas por haber dormido tanto.', translation: 'Pedir desculpas por ter dormido tanto.', next: 'disculpas' },
          {
            text: '“¡Gracias! Sí, siempre me levanto muy temprano.”',
            translation: '“Obrigado! Sim, eu sempre acordo muito cedo.”',
            wrong:
              'Nacho está sendo irônico: meio-dia e meia não é hora de madrugador! O tom arrastado, o “mirá quién llegó” e a “caminha na mesa” entregam a brincadeira. Em Córdoba, a ironia é quase uma língua oficial.',
          },
        ],
      },
      disculpas: {
        emoji: '🙇',
        text: '“Perdón, Nacho, me quedé dormido”, dice Linu, avergonzado. Nacho larga una carcajada: “¡Pero no, loco, te estoy cargando! Acá en Córdoba, si no te cargan, es que no te quieren”. Le explica que la cargada es casi un deporte provincial y que, si alguien se ofende, pierde. Después le ceba un mate, como para cerrar el asunto.',
        translation:
          '“Desculpa, Nacho, eu perdi a hora”, diz Linu, envergonhado. Nacho solta uma gargalhada: “Que nada, cara, estou te zoando! Aqui em Córdoba, se não te zoam, é porque não gostam de você”. Explica que a zoeira é quase um esporte da província e que, se alguém se ofende, perde. Depois prepara um mate para ele, como quem encerra o assunto.',
        choices: [{ text: 'Aceptar el mate y sentarse a charlar.', translation: 'Aceitar o mate e sentar para conversar.', next: 'mate' }],
      },
      mate: {
        emoji: '🧉',
        text: 'Nacho le pasa el mate y le da una instrucción muy seria: “Acordate: cuando decís ‘gracias’, es que no querés más”. Después cuenta el plan: “Hoy hay asado en lo de mi vieja, en Alta Córdoba; va a estar toda la familia, hasta el tío Coco y la abuela Nélida”. Baja la voz, con tono de conspirador: “Te aviso: el tío Coco es el rey de la cargada, y con los brasileños se ensaña, por el fútbol”. Linu termina el mate; le gustaría tomar otro.',
        translation:
          'Nacho passa o mate e dá uma instrução muito séria: “Lembre: quando você diz ‘obrigado’, é que não quer mais”. Depois conta o plano: “Hoje tem churrasco na casa da minha mãe, em Alta Córdoba; vai estar a família toda, até o tio Coco e a avó Nélida”. Abaixa a voz, em tom de conspiração: “Te aviso: o tio Coco é o rei da zoeira, e com brasileiro ele pega pesado, por causa do futebol”. Linu termina o mate; queria tomar outro.',
        choices: [
          {
            text: 'Devolver el mate sin decir nada y preguntar: “¿Y qué le llevamos a tu vieja?”.',
            translation: 'Devolver a cuia sem dizer nada e perguntar: “E o que a gente leva para a sua mãe?”.',
            next: 'asado',
          },
          {
            text: 'Devolver el mate diciendo “¡Gracias!” para que Nacho le cebe otro.',
            translation: 'Devolver a cuia dizendo “Obrigado!” para o Nacho servir outro.',
            wrong:
              'Nacho acabou de avisar: na roda de mate, dizer “gracias” ao devolver a cuia quer dizer “não quero mais”. Se o Linu quer outro, é só devolver sem agradecer; o obrigado fica para o fim.',
          },
          { text: 'Decir que prefiere quedarse a dormir la siesta.', translation: 'Dizer que prefere ficar e tirar uma soneca.', next: 'final_siesta' },
        ],
      },
      asado: {
        emoji: '🥩',
        text: 'En el patio de Alta Córdoba, el humo de la parrilla lo envuelve todo y en la radio suena un cuarteto. La madre de Nacho recibe a Linu con un beso: “¡Pasá, pasá, estás en tu casa!”. El tío Coco lo mira de arriba abajo y sonríe con malicia: “Así que brasileño, ¿eh? Tranquilo, que acá a los brasileños los tratamos bien… sobre todo cuando pierden”. Todos se ríen y se quedan mirando a Linu, a la espera de su respuesta.',
        translation:
          'No quintal em Alta Córdoba, a fumaça da churrasqueira envolve tudo e no rádio toca um cuarteto. A mãe de Nacho recebe Linu com um beijo: “Entra, entra, fica à vontade!”. O tio Coco olha Linu de cima a baixo e sorri com malícia: “Então é brasileiro, é? Relaxa, que aqui a gente trata bem os brasileiros… principalmente quando eles perdem”. Todos riem e ficam olhando para Linu, esperando a resposta.',
        choices: [
          {
            text: '“No se preocupe, Coco: con cinco estrellas en la camiseta, a nosotros perder no nos sale muy bien.”',
            translation: '“Não se preocupe, Coco: com cinco estrelas na camisa, perder não é muito a nossa praia.”',
            next: 'coco',
          },
          {
            text: '“Tú eres muy gracioso, tío.”',
            translation: '“Você é muito engraçado, tio.”',
            next: 'tu',
          },
        ],
      },
      tu: {
        emoji: '📺',
        text: 'Hay un segundo de silencio y, después, la abuela Nélida se tienta de risa: “¡Ay, ‘tú’! ¡Parece un galán de telenovela!”. Nacho le explica al oído que en Argentina casi nadie dice “tú”: se usa “vos”, y con la gente mayor o desconocida, a veces “usted”. “Y a mí decime Coco nomás —agrega el tío—, que lo de ‘tío’ me hace sentir viejo”. Linu respira hondo y lo intenta de nuevo, con toda la tonada que puede.',
        translation:
          'Há um segundo de silêncio e, depois, a avó Nélida tem um ataque de riso: “Ai, ‘tú’! Parece galã de novela!”. Nacho explica no ouvido dele que na Argentina quase ninguém diz “tú”: usa-se “vos” e, com gente mais velha ou desconhecida, às vezes “usted”. “E pode me chamar só de Coco — acrescenta o tio —, que esse negócio de ‘tio’ me faz sentir velho”. Linu respira fundo e tenta de novo, com todo o sotaque cordobês que consegue.',
        choices: [
          {
            text: '“Coco, vos sos un peligro, posta.”',
            translation: '“Coco, você é um perigo, sério.”',
            next: 'coco',
          },
        ],
      },
      coco: {
        emoji: '😂',
        text: 'El tío Coco suelta una carcajada que se oye en toda la cuadra. “¡Mirá vos, el pingüino tiene calle! —dice, y le sirve un choripán—. Posta, me caíste bien”. La abuela Nélida aprovecha para pedirle a Linu que la ayude con el postre y le habla de usted, muy seria: “¿Usted sabe batir crema, joven, o eso tampoco se aprende en Brasil?”. Nacho le guiña un ojo: hasta la abuela carga.',
        translation:
          'O tio Coco solta uma gargalhada que se ouve no quarteirão inteiro. “Olha só, o pinguim é esperto! — diz, e serve um choripán para ele. — Sério, fui com a sua cara”. A avó Nélida aproveita para pedir a Linu que a ajude com a sobremesa e fala com ele de “senhor”, muito séria: “O senhor sabe bater creme, meu jovem, ou isso também não se aprende no Brasil?”. Nacho pisca para ele: até a avó está zoando.',
        choices: [
          {
            text: 'Contestarle con el mismo tono: “Señora, batiendo crema le gano a cualquiera; lo que no sé es perder al fútbol”.',
            translation: 'Responder no mesmo tom: “Senhora, batendo creme eu ganho de qualquer um; o que eu não sei é perder no futebol”.',
            next: 'final_bom',
          },
          {
            text: 'Ayudarla sin ganas, pensando que la abuela está enojada con él.',
            translation: 'Ajudá-la sem vontade, achando que a avó está brava com ele.',
            wrong:
              'A avó não está brava: ela usa “usted” e um tom sério justamente para fazer a piada. Nacho pisca e diz “hasta la abuela carga” — até a avó está zoando. Aqui, o “usted” faz parte da brincadeira.',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'La tarde se pasa entre chistes, cuarteto y un flan casero con la crema que batió Linu. Al despedirse, el tío Coco lo abraza: “Volvé cuando quieras, brasilero, que acá siempre hay lugar para uno más en la cargada”. En el colectivo de vuelta, Linu se sorprende a sí mismo estirando las vocales como un cordobés. Nacho lo mira y se ríe: “¡Uh, ya se te pegó la tonada!”',
        translation:
          'A tarde passa entre piadas, cuarteto e um pudim caseiro com o creme que Linu bateu. Na despedida, o tio Coco o abraça: “Volta quando quiser, brasileiro, que aqui sempre tem lugar para mais um na zoeira”. No ônibus de volta, Linu se surpreende esticando as vogais como um cordobês. Nacho olha para ele e ri: “Uh, já pegou o sotaque!”',
        ending: { tone: 'bom', title: 'Cordobês honorário', message: 'Você entendeu a ironia, respondeu à zoeira com humor e ainda passou do “tú” para o “vos” no meio do churrasco.' },
      },
      final_siesta: {
        emoji: '🛌',
        text: 'Linu decide que el asado puede esperar y vuelve a la cama. Nacho lo mira, incrédulo: “¡Mirá vos! Te levantás a las doce y media para dormir la siesta a la una”. Por la tarde le llegan fotos del patio lleno de gente, del choripán y del tío Coco bailando cuarteto. Linu entiende, un poco tarde, que se perdió lo mejor del domingo cordobés.',
        translation:
          'Linu decide que o churrasco pode esperar e volta para a cama. Nacho olha para ele, incrédulo: “Olha só! Você levanta ao meio-dia e meia para tirar a sesta à uma”. À tarde chegam fotos do quintal cheio de gente, do choripán e do tio Coco dançando cuarteto. Linu entende, meio tarde, que perdeu o melhor do domingo cordobês.',
        ending: { tone: 'neutro', title: 'A sesta mais cara de Córdoba', message: 'Dormir é bom, mas o domingo cordobês acontece em volta da churrasqueira, entre zoeiras e cuarteto.' },
      },
    },
  },
  {
    id: 'es-h38',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Una noche en el Español',
    emoji: '🎭',
    summary: 'Em Madri, o Linu vai ao teatro com dois amigos e precisa decifrar o “vosotros”, as gírias e a ironia madrilenha.',
    cultural_context:
      'O Teatro Español, na Praça de Santa Ana, em Madri, ocupa o lugar do antigo Corral del Príncipe, um dos pátios de comédias onde se encenavam as peças do Século de Ouro. Na Espanha, “vosotros” é o plural informal de “tú”; na América Latina, usa-se “ustedes” para todos.',
    start: 'start',
    glossary: [
      ['vosotros habéis / sois', 'vocês têm (fizeram) / são (informal, Espanha)'],
      ['os', 'vos, a vocês (pronome de vosotros)'],
      ['vale', 'ok, combinado (Espanha)'],
      ['tío / tía', 'cara / mina (gíria, Espanha)'],
      ['mola', 'é legal (gíria, Espanha)'],
      ['chaval', 'garoto, rapaz (Espanha)'],
      ['la caña', 'o copo de chope'],
      ['el patio de butacas', 'a plateia'],
    ],
    nodes: {
      start: {
        emoji: '🎟️',
        text: 'Viernes por la noche, plaza de Santa Ana. Linu había quedado con Lucía y Javi a las siete y media en la puerta del Teatro Español, pero llega a las ocho menos diez, sin aliento. Lucía lo mira con los brazos cruzados: “¡Hombre, qué puntual! Ya pensábamos que te habías ido a ver otra función”. Javi, más práctico, agita las entradas: “Venga, tío, que empieza a las ocho y media, y vosotros dos todavía no habéis cenado, ¿no?”',
        translation:
          'Sexta à noite, Praça de Santa Ana. Linu tinha combinado com Lucía e Javi às sete e meia na porta do Teatro Español, mas chega às dez para as oito, sem fôlego. Lucía olha para ele de braços cruzados: “Nossa, que pontual! A gente já achava que você tinha ido ver outra peça”. Javi, mais prático, sacode os ingressos: “Vamos, cara, que começa às oito e meia, e vocês dois ainda não jantaram, né?”',
        choices: [
          { text: 'Pedir perdón y proponer tomar algo rápido en el bar de enfrente.', translation: 'Pedir desculpas e propor comer algo rápido no bar em frente.', next: 'bar' },
          { text: 'Decir que no tiene hambre y entrar directamente.', translation: 'Dizer que não está com fome e entrar direto.', next: 'hambre' },
          {
            text: '“¡Gracias, Lucía! Siempre intento ser puntual.”',
            translation: '“Obrigado, Lucía! Eu sempre tento ser pontual.”',
            wrong:
              'Lucía está sendo irônica: o Linu chegou vinte minutos atrasado. O “¡Qué puntual!” com os braços cruzados, seguido de “achávamos que você tinha ido ver outra peça”, quer dizer justamente o contrário.',
          },
        ],
      },
      bar: {
        emoji: '🍤',
        text: 'En la barra, Javi pide con una rapidez que Linu admira: “Ponnos dos cañas, un refresco y una de bravas, porfa”. El camarero, un señor mayor con chaleco, pregunta: “¿Vosotros vais a la función de las ocho y media? Pues daos prisa, que eso se llena”. Lucía le explica a Linu que “vosotros” es el plural de “tú”, y que el camarero los tutea porque son jóvenes. “Tú, en cambio, a él háblale de usted, que queda más fino”, le susurra.',
        translation:
          'No balcão, Javi pede com uma rapidez que Linu admira: “Põe dois chopes, um refrigerante e uma porção de batatas bravas, por favor”. O garçom, um senhor de colete, pergunta: “Vocês vão à sessão das oito e meia? Então se apressem, que aquilo lota”. Lucía explica a Linu que “vosotros” é o plural de “tú” e que o garçom os trata por “tú” porque são jovens. “Já você, com ele, fale de ‘usted’, que fica mais educado”, sussurra.',
        choices: [
          {
            text: '“Perdone, ¿nos cobra, por favor? Es que tenemos prisa.”',
            translation: '“Com licença, o senhor pode fechar a conta, por favor? É que estamos com pressa.”',
            next: 'camarero',
          },
          {
            text: '“Oye, tío, ¿nos cobras?”',
            translation: '“Ô, cara, fecha pra gente?”',
            wrong:
              'Lucía acabou de aconselhar: com o garçom mais velho, use “usted”. “Oye, tío” é íntimo demais para um senhor desconhecido — seria como chamá-lo de “mano”. O fato de ele tratar os jovens por “vosotros” não quer dizer que eles devam fazer o mesmo.',
          },
        ],
      },
      camarero: {
        emoji: '💶',
        text: 'El camarero sonríe, encantado con el “usted”: “Qué educado el chaval. Y vosotros dos, que sois de aquí, a ver si aprendéis modales”. Javi se hace el ofendido y Lucía se ríe a carcajadas. Mientras cruzan la plaza corriendo, Javi le explica a Linu que “chaval” es como decir “chico” o “muchacho”. Llegan a la puerta del teatro justo cuando suena el primer aviso.',
        translation:
          'O garçom sorri, encantado com o “usted”: “Que educado, o rapaz. E vocês dois, que são daqui, vejam se aprendem bons modos”. Javi se faz de ofendido e Lucía cai na gargalhada. Enquanto atravessam a praça correndo, Javi explica a Linu que “chaval” é como dizer “garoto” ou “rapaz”. Chegam à porta do teatro bem na hora do primeiro sinal.',
        choices: [{ text: 'Entrar y buscar las butacas.', translation: 'Entrar e procurar as poltronas.', next: 'sala' }],
      },
      hambre: {
        emoji: '🥴',
        text: 'Entran directamente. En el patio de butacas, a los diez minutos, el estómago de Linu empieza a rugir justo en medio de un silencio dramático. Una señora de la fila de delante se vuelve y dice en voz baja: “Hijo, menuda orquesta traes”. Lucía se tapa la cara para no reírse y Javi le pasa, a escondidas, una bolsita de frutos secos.',
        translation:
          'Eles entram direto. Na plateia, depois de dez minutos, o estômago de Linu começa a roncar bem no meio de um silêncio dramático. Uma senhora da fileira da frente se vira e diz em voz baixa: “Filho, que orquestra você trouxe, hein”. Lucía tapa o rosto para não rir e Javi passa para ele, escondido, um saquinho de castanhas.',
        choices: [{ text: 'Comer con disimulo y concentrarse en la obra.', translation: 'Comer disfarçadamente e se concentrar na peça.', next: 'sala' }],
      },
      sala: {
        emoji: '🎭',
        text: 'La obra es “La dama boba”, de Lope de Vega, y el público se ríe a carcajadas con Finea, la protagonista, a quien todos tienen por tonta hasta que el amor la despierta. Linu no entiende todos los versos, pero sí la gracia: al final, la que parecía boba se finge boba para engañar a todos. Javi le da un codazo: “¿Veis? Esto es lo que mola del Siglo de Oro: los chistes siguen funcionando cuatrocientos años después”. Se encienden las luces del descanso.',
        translation:
          'A peça é “A dama boba”, de Lope de Vega, e o público gargalha com Finea, a protagonista, que todos consideram tola até que o amor a desperta. Linu não entende todos os versos, mas entende a graça: no fim, a que parecia boba finge ser boba para enganar todo mundo. Javi dá uma cotovelada nele: “Viram? É isso que é legal no Século de Ouro: as piadas continuam funcionando quatrocentos anos depois”. Acendem-se as luzes do intervalo.',
        choices: [{ text: 'Salir al vestíbulo con Lucía y Javi.', translation: 'Sair para o saguão com Lucía e Javi.', next: 'descanso' }],
      },
      descanso: {
        emoji: '🥂',
        text: 'En el vestíbulo, una chica que estaba sentada a su lado les pregunta muy seria: “¿Os está gustando? A mí me parece un rollo, la verdad”. Javi arquea las cejas: “Sí, sí, un rollo tremendo; por eso te has reído más que nadie en toda la sala”. La chica se pone roja y acaba riéndose también. Se llama Marta, estudia arte dramático y sabe un montón sobre Lope.',
        translation:
          'No saguão, uma moça que estava sentada ao lado deles pergunta, muito séria: “Vocês estão gostando? Eu estou achando um tédio, para falar a verdade”. Javi arqueia as sobrancelhas: “Ah, sim, um tédio enorme; por isso você riu mais que todo mundo na plateia”. A moça fica vermelha e acaba rindo também. Ela se chama Marta, estuda artes cênicas e sabe um monte sobre Lope.',
        choices: [
          { text: 'Invitar a Marta a tomar algo con ellos después de la función.', translation: 'Convidar a Marta para tomar algo com eles depois da peça.', next: 'final_bom' },
          {
            text: 'Concluir que a Javi tampoco le está gustando la obra.',
            translation: 'Concluir que o Javi também não está gostando da peça.',
            wrong:
              'Javi está sendo irônico: o “sí, sí, un rollo tremendo” serve para mostrar que a Marta estava gargalhando, ou seja, ela está gostando, sim. E o Javi, que acabou de dizer que o Século de Ouro “mola”, está adorando.',
          },
          { text: 'Decir que está cansado y volver a casa al terminar la función.', translation: 'Dizer que está cansado e voltar para casa quando a peça acabar.', next: 'final_casa' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Al terminar, los cuatro se sientan en una terraza de la plaza. Marta les cuenta que allí mismo, hace siglos, había un corral de comedias donde el público gritaba y tiraba cosas si la obra no le gustaba. “¡Menos mal que hoy nadie ha tirado nada!”, dice Lucía, mirando a Linu con sorna. Él levanta su vaso y, sin pensarlo, brinda: “¡Por vosotros, que sois lo más!”',
        translation:
          'Quando a peça acaba, os quatro se sentam num bar com mesas na calçada da praça. Marta conta que ali mesmo, séculos atrás, havia um pátio de comédias onde o público gritava e jogava coisas se não gostasse da peça. “Ainda bem que hoje ninguém jogou nada!”, diz Lucía, olhando para Linu com ironia. Ele levanta o copo e, sem pensar, brinda: “A vocês, que são demais!”',
        ending: { tone: 'bom', title: 'Madrilenho por uma noite', message: 'Você entendeu a ironia, usou o “usted” na hora certa e terminou a noite brindando com “vosotros” como um madrilenho.' },
      },
      final_casa: {
        emoji: '🌙',
        text: 'Al terminar la función, Linu se despide: está cansado y mañana madruga. “¿Ya te vas? ¡Pero si en Madrid la noche acaba de empezar!”, protesta Lucía. De camino al metro, oye las risas que salen de las terrazas de Santa Ana. Quizá, piensa, en Madrid las once de la noche no sean tarde, sino temprano.',
        translation:
          'Quando a peça termina, Linu se despede: está cansado e amanhã acorda cedo. “Já vai? Mas em Madri a noite está só começando!”, protesta Lucía. A caminho do metrô, ele ouve as risadas que vêm dos bares da Praça de Santa Ana. Talvez, pensa, em Madri onze da noite não seja tarde, e sim cedo.',
        ending: { tone: 'neutro', title: 'A noite era uma criança', message: 'A peça foi ótima, mas em Madri a melhor parte do teatro muitas vezes acontece depois, nas mesas da praça.' },
      },
    },
  },
  {
    id: 'es-h39',
    level: 'C1.1',
    cefr: 'C1',
    title: 'Serenata en Guadalajara',
    emoji: '🎺',
    summary: 'Em Guadalajara, o Linu quer contratar mariachis para uma serenata e aprende que “ahorita” pode querer dizer quase qualquer coisa.',
    cultural_context:
      'O mariachi, música tradicional do oeste do México ligada sobretudo ao estado de Jalisco, cuja capital é Guadalajara, foi declarado Patrimônio Cultural Imaterial da Humanidade pela UNESCO em 2011. “Las Mañanitas” é a canção tradicional de aniversário no México, muitas vezes cantada de madrugada, como serenata.',
    start: 'start',
    glossary: [
      ['ahorita', 'já, daqui a pouco… ou bem mais tarde (México)'],
      ['¿Mande?', 'Como? / Pois não? (México, educado)'],
      ['¡Qué padre!', 'Que legal! (México)'],
      ['¿Qué onda?', 'E aí? (informal)'],
      ['carnal', 'irmão, parceiro (gíria mexicana)'],
      ['don / doña', 'senhor / senhora (tratamento de respeito)'],
      ['echarle ganas', 'se esforçar, dar o melhor'],
      ['las Mañanitas', 'a canção de aniversário mexicana'],
    ],
    nodes: {
      start: {
        emoji: '🎂',
        text: 'Mañana es el cumpleaños de Itzel, y su hermano Rodrigo tiene un plan: “¿Qué onda, Linu? ¿Y si le llevamos mariachi a medianoche, como serenata?”. Linu se entusiasma, pero Rodrigo tiene que trabajar hasta tarde. “Tú ve a la Plaza de los Mariachis, junto al mercado de San Juan de Dios —le dice—. Yo te alcanzo ahorita”. Linu mira el reloj: son las siete de la tarde.',
        translation:
          'Amanhã é o aniversário de Itzel, e o irmão dela, Rodrigo, tem um plano: “E aí, Linu? E se a gente levar mariachi para ela à meia-noite, como serenata?”. Linu se empolga, mas Rodrigo precisa trabalhar até tarde. “Vai você à Praça dos Mariachis, perto do mercado de San Juan de Dios — ele diz. — Eu te encontro já já”. Linu olha o relógio: são sete da noite.',
        choices: [
          { text: 'Ir solo a la plaza y empezar a buscar un mariachi.', translation: 'Ir sozinho à praça e começar a procurar um mariachi.', next: 'plaza' },
          {
            text: 'Esperar a Rodrigo en la puerta, porque “ahorita” quiere decir “ahora mismo”.',
            translation: 'Esperar o Rodrigo na porta, porque “ahorita” quer dizer “agora mesmo”.',
            wrong:
              'Cuidado: o Rodrigo acabou de dizer que precisa trabalhar até tarde. Nesse contexto, “ahorita” não é “agora mesmo”, e sim “mais tarde, quando eu puder”. No México, “ahorita” pode ir de cinco minutos a algumas horas!',
          },
        ],
      },
      plaza: {
        emoji: '🤠',
        text: 'La plaza está llena de músicos con traje de charro, sombrero y botonaduras de plata. Un señor de bigote canoso, con un guitarrón al hombro, se le acerca: “Buenas noches, joven. ¿Qué se le ofrece?”. Es don Chuy, que lleva cuarenta años tocando en esa plaza. Linu tiene que decidir cómo dirigirse a él.',
        translation:
          'A praça está cheia de músicos com traje de charro, sombrero e botões de prata. Um senhor de bigode grisalho, com um guitarrón no ombro, se aproxima: “Boa noite, meu jovem. Em que posso ajudar?”. É dom Chuy, que toca naquela praça há quarenta anos. Linu precisa decidir como se dirigir a ele.',
        choices: [
          {
            text: '“Buenas noches, don Chuy. Quisiera contratar una serenata para una amiga, si usted puede.”',
            translation: '“Boa noite, seu Chuy. Eu gostaria de contratar uma serenata para uma amiga, se o senhor puder.”',
            next: 'trato',
          },
          {
            text: '“¿Qué onda, carnal? ¿Cuánto cobras por unas canciones?”',
            translation: '“E aí, parceiro? Quanto você cobra por umas músicas?”',
            next: 'confianza',
          },
        ],
      },
      confianza: {
        emoji: '😬',
        text: 'Don Chuy levanta una ceja y se acomoda el sombrero muy despacio. “¿Carnal? Mire nomás qué confianzudo me salió el joven”, dice, con una sonrisa que no le llega a los ojos. Los otros músicos se dan codazos, divertidos. Linu entiende que se ha pasado de confianza: con un señor mayor al que no conoce, en México se habla de usted.',
        translation:
          'Dom Chuy levanta uma sobrancelha e ajeita o sombrero bem devagar. “Parceiro? Olha só que folgado me saiu o rapaz”, diz, com um sorriso que não chega aos olhos. Os outros músicos se cutucam, achando graça. Linu entende que passou dos limites: com um senhor mais velho que não conhece, no México se fala de “usted”.',
        choices: [
          { text: 'Disculparse y empezar de nuevo, de usted.', translation: 'Pedir desculpas e recomeçar, tratando-o de “usted”.', next: 'trato' },
          {
            text: 'Alegrarse, porque a don Chuy le cayó bien tanta confianza.',
            translation: 'Ficar contente, porque o dom Chuy gostou de tanta intimidade.',
            wrong:
              'O “Mire nomás qué confianzudo me salió el joven” é irônico: ele não gostou de ser chamado de “carnal” por um desconhecido. O sorriso “que no le llega a los ojos” mostra que é uma crítica educada.',
          },
        ],
      },
      trato: {
        emoji: '🤝',
        text: 'Don Chuy se acaricia el bigote: “Mire, joven, por una hora de serenata, con Las Mañanitas incluidas, le cobramos lo de siempre; y como es para una cumpleañera, le echamos ganas doble”. Linu acepta encantado. “¿A qué hora los necesita?”, pregunta el músico. “A medianoche”, responde Linu, y don Chuy le da la mano: “Ahí estaremos a las doce en punto, palabra de mariachi”.',
        translation:
          'Dom Chuy alisa o bigode: “Olha, meu jovem, por uma hora de serenata, com Las Mañanitas incluídas, cobramos o de sempre; e como é para uma aniversariante, a gente capricha em dobro”. Linu aceita encantado. “A que horas o senhor precisa da gente?”, pergunta o músico. “À meia-noite”, responde Linu, e dom Chuy aperta a mão dele: “Estaremos lá à meia-noite em ponto, palavra de mariachi”.',
        choices: [
          { text: 'Preguntarle qué canciones recomienda para la serenata.', translation: 'Perguntar que músicas ele recomenda para a serenata.', next: 'canciones' },
          { text: 'Llamar a Rodrigo para contarle la noticia.', translation: 'Ligar para o Rodrigo para contar a novidade.', next: 'llamada' },
        ],
      },
      canciones: {
        emoji: '🎶',
        text: 'A don Chuy se le iluminan los ojos: “Primero, Las Mañanitas, eso ni se discute. Luego algo de José Alfredo Jiménez, que ya sabe usted que aquí las canciones de despecho se cantan hasta en los cumpleaños”. Los músicos se ríen a coro. “Y si la muchacha llora —añade, guiñando un ojo—, no se me asuste: es que le gustó”.',
        translation:
          'Os olhos de dom Chuy brilham: “Primeiro, Las Mañanitas, isso nem se discute. Depois algo de José Alfredo Jiménez, que o senhor já sabe que aqui as canções de dor de cotovelo se cantam até em aniversário”. Os músicos riem em coro. “E se a moça chorar — acrescenta, piscando —, não se assuste: é que ela gostou”.',
        choices: [{ text: 'Llamar a Rodrigo para contarle todo.', translation: 'Ligar para o Rodrigo para contar tudo.', next: 'llamada' }],
      },
      llamada: {
        emoji: '📱',
        text: 'Rodrigo contesta con mucho ruido de fondo: “¿Mande? ¡No te oigo, Linu!”. Cuando por fin se entienden, grita: “¡Qué padre, ya los contrataste! Oye, yo salgo ahorita del trabajo, pero no me esperes para cenar”. Linu ya sabe traducirlo: Rodrigo llegará tarde, pero llegará. A las doce menos cinco, los mariachis bajan de una camioneta frente a la casa de Itzel.',
        translation:
          'Rodrigo atende com muito barulho ao fundo: “Como? Não estou te ouvindo, Linu!”. Quando finalmente se entendem, ele grita: “Que legal, você já contratou! Olha, eu saio do trabalho já já, mas não me espera para jantar”. Linu já sabe traduzir: o Rodrigo vai chegar tarde, mas vai chegar. Às cinco para a meia-noite, os mariachis descem de uma caminhonete em frente à casa de Itzel.',
        choices: [
          { text: 'Pedirles que empiecen con Las Mañanitas bajo la ventana.', translation: 'Pedir que comecem com Las Mañanitas debaixo da janela.', next: 'final_bom' },
          { text: 'Esperar a Rodrigo antes de empezar, aunque nadie sepa cuándo llegará.', translation: 'Esperar o Rodrigo antes de começar, mesmo que ninguém saiba quando ele vai chegar.', next: 'final_espera' },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: '“Estas son las mañanitas que cantaba el rey David”, entonan los mariachis, y las trompetas suenan bajo la ventana. La luz del cuarto de Itzel se enciende; ella se asoma en pijama y se lleva las manos a la cara. En ese momento aparece Rodrigo corriendo, sin aliento: “¡Les dije que llegaba ahorita!”. Todos se ríen, y don Chuy remata: “Eso, joven, fue un ahorita bien mexicano”.',
        translation:
          '“Estas são as manhãzinhas que cantava o rei Davi”, entoam os mariachis, e os trompetes soam debaixo da janela. A luz do quarto de Itzel se acende; ela aparece de pijama e leva as mãos ao rosto. Nesse momento surge Rodrigo correndo, sem fôlego: “Eu disse que chegava já já!”. Todos riem, e dom Chuy arremata: “Isso, meu jovem, foi um já já bem mexicano”.',
        ending: { tone: 'bom', title: 'Las Mañanitas', message: 'Você tratou dom Chuy com o respeito certo, entendeu o “ahorita” e deu à Itzel uma serenata inesquecível.' },
      },
      final_espera: {
        emoji: '🕐',
        text: 'Deciden esperar a Rodrigo. Pasan las doce, las doce y media, la una, y los mariachis afinan, platican y, para no aburrirse, tocan un par de canciones en la banqueta. Cuando Rodrigo por fin llega, Itzel ya se ha dormido profundamente. La serenata acaba siendo para los vecinos, que aplauden encantados desde sus ventanas.',
        translation:
          'Eles decidem esperar o Rodrigo. Passa da meia-noite, da meia-noite e meia, da uma, e os mariachis afinam, conversam e, para não se entediar, tocam umas músicas na calçada. Quando o Rodrigo finalmente chega, a Itzel já está dormindo profundamente. A serenata acaba sendo para os vizinhos, que aplaudem encantados das janelas.',
        ending: { tone: 'neutro', title: 'Serenata para os vizinhos', message: 'Esperar um “ahorita” pode levar horas: às vezes é melhor começar a festa sem ele.' },
      },
    },
  },
  {
    id: 'es-h40',
    level: 'C1.2',
    cefr: 'C1',
    title: 'El lenguaje de los tambores',
    emoji: '🥁',
    summary: 'Em Montevidéu, o Linu escreve uma matéria sobre o candombe e aprende a transformar conversa de bairro em texto jornalístico.',
    cultural_context:
      'O candombe, ritmo de matriz africana tocado com três tambores (chico, repique e piano), foi inscrito pela UNESCO em 2009 como Patrimônio Cultural Imaterial da Humanidade. Em Montevidéu, os bairros Sur e Palermo são o seu berço, e todo ano o Desfile de Llamadas passa pela rua Isla de Flores durante o carnaval.',
    start: 'start',
    glossary: [
      ['la cuerda de tambores', 'o grupo de tambores que desfila'],
      ['el chico, el repique, el piano', 'os três tambores do candombe'],
      ['templar', 'afinar (o couro, ao calor do fogo)'],
      ['las Llamadas', 'o desfile de candombe do carnaval'],
      ['la transmisión intergeneracional', 'a transmissão entre gerações'],
      ['siempre y cuando + subjuntivo', 'desde que, contanto que'],
      ['el hecho de que + subjuntivo', 'o fato de que'],
      ['ta', 'tá, ok (Uruguai)'],
    ],
    nodes: {
      start: {
        emoji: '📰',
        text: 'Linu hace una pasantía en una revista cultural de Montevideo. La editora, Graciela, le deja un encargo sobre la mesa: “Necesito una nota sobre el candombe para el número de febrero, siempre y cuando consigas entrevistar a alguien del barrio Sur antes del jueves”. Luego añade, ya en la puerta: “Y nada de ‘me contaron que tocan lindo’: quiero un texto riguroso, que dé cuenta de la complejidad del fenómeno”. Linu mira el calendario y traga saliva.',
        translation:
          'Linu faz um estágio numa revista cultural de Montevidéu. A editora, Graciela, deixa uma tarefa na mesa dele: “Preciso de uma matéria sobre o candombe para a edição de fevereiro, desde que você consiga entrevistar alguém do bairro Sur antes de quinta”. Depois acrescenta, já na porta: “E nada de ‘me contaram que eles tocam bonito’: quero um texto rigoroso, que dê conta da complexidade do fenômeno”. Linu olha o calendário e engole em seco.',
        choices: [
          { text: 'Ir al barrio Sur a buscar a un constructor de tambores.', translation: 'Ir ao bairro Sur procurar um construtor de tambores.', next: 'barrio' },
          { text: 'Leer primero un artículo académico sobre el candombe.', translation: 'Ler primeiro um artigo acadêmico sobre o candombe.', next: 'academico' },
          {
            text: 'Empezar a escribir ya, porque la entrevista es opcional.',
            translation: 'Começar a escrever já, porque a entrevista é opcional.',
            wrong:
              'Graciela impôs uma condição: “siempre y cuando consigas entrevistar…”. A matéria depende de o Linu entrevistar alguém do bairro Sur antes de quinta. “Siempre y cuando” + subjuntivo introduz uma condição obrigatória, não uma sugestão.',
          },
        ],
      },
      academico: {
        emoji: '📚',
        text: 'En la biblioteca, Linu encuentra un artículo tan denso que tiene que leer cada frase dos veces: “La transmisión intergeneracional de los saberes vinculados a la construcción y ejecución del tambor constituye un factor determinante para la continuidad de la práctica”. Tras mucho subrayar, lo traduce a su manera: los mayores enseñan a los jóvenes a hacer y tocar tambores, y por eso el candombe sigue vivo. Aprende también que en la cuerda conviven tres tambores: el chico, agudo y constante; el repique, que improvisa; y el piano, que da la base grave. Con esas notas en el bolsillo, se siente un poco menos perdido.',
        translation:
          'Na biblioteca, Linu encontra um artigo tão denso que precisa ler cada frase duas vezes: “A transmissão intergeracional dos saberes ligados à construção e à execução do tambor constitui um fator determinante para a continuidade da prática”. Depois de sublinhar muito, ele traduz do seu jeito: os mais velhos ensinam os jovens a fazer e a tocar tambores, e por isso o candombe continua vivo. Aprende também que na cuerda convivem três tambores: o chico, agudo e constante; o repique, que improvisa; e o piano, que dá a base grave. Com essas anotações no bolso, ele se sente um pouco menos perdido.',
        choices: [
          { text: 'Ir al barrio Sur con las notas.', translation: 'Ir ao bairro Sur com as anotações.', next: 'barrio' },
          {
            text: 'Resumir el artículo así: “El candombe sobrevive gracias a los estudios académicos”.',
            translation: 'Resumir o artigo assim: “O candombe sobrevive graças aos estudos acadêmicos”.',
            wrong:
              'A frase diz que a transmissão dos saberes entre gerações é o fator determinante para a continuidade da prática. Ou seja: o candombe continua vivo porque os mais velhos ensinam os mais novos, não por causa dos livros.',
          },
        ],
      },
      barrio: {
        emoji: '🔥',
        text: 'En una esquina del barrio Sur, un grupo de hombres ha encendido una pequeña fogata junto al cordón de la vereda. Beto, que fabrica tambores desde hace treinta años, acerca los parches al fuego con mucho cuidado. “Estamos templando, ¿viste? —explica—. El calor estira el cuero y el tambor suena como tiene que sonar”. Le ofrece un mate a Linu y agrega con tono pícaro: “Ta, preguntá lo que quieras, pero si ponés que soy un ‘portador de saberes ancestrales’, te corro a palazos”.',
        translation:
          'Numa esquina do bairro Sur, um grupo de homens acendeu uma pequena fogueira junto ao meio-fio da calçada. Beto, que fabrica tambores há trinta anos, aproxima os couros do fogo com muito cuidado. “Estamos afinando, viu? — explica. — O calor estica o couro e o tambor soa como tem que soar”. Ele oferece um mate a Linu e acrescenta, em tom maroto: “Tá, pergunta o que quiser, mas se você escrever que eu sou um ‘portador de saberes ancestrais’, eu te expulso a baquetadas”.',
        choices: [
          { text: 'Preguntarle cómo aprendió a construir tambores.', translation: 'Perguntar como ele aprendeu a construir tambores.', next: 'entrevista' },
          { text: 'Pedirle que toque un poco antes de la entrevista.', translation: 'Pedir que ele toque um pouco antes da entrevista.', next: 'toque' },
        ],
      },
      toque: {
        emoji: '🥁',
        text: 'Beto sonríe, se cuelga el piano al hombro y empieza a tocar. Enseguida se suman un chico y un repique, y desde los balcones algunas vecinas se asoman a mirar. Linu siente el ritmo en el pecho antes de entenderlo con la cabeza. Cuando terminan, Beto se seca la frente: “Eso no lo vas a poder escribir, pingüino, pero ahora sabés de qué estás hablando”.',
        translation:
          'Beto sorri, pendura o piano no ombro e começa a tocar. Logo se juntam um chico e um repique, e algumas vizinhas aparecem nas sacadas para olhar. Linu sente o ritmo no peito antes de entendê-lo com a cabeça. Quando terminam, Beto enxuga a testa: “Isso você não vai conseguir escrever, pinguim, mas agora sabe do que está falando”.',
        choices: [{ text: 'Empezar la entrevista.', translation: 'Começar a entrevista.', next: 'entrevista' }],
      },
      entrevista: {
        emoji: '🎙️',
        text: '“Aprendí mirando a mi abuelo —cuenta Beto—. Él decía que el tambor no se compra: se hace, se templa y se gana tocando en la cuerda”. Habla de las Llamadas, del frío de las noches de ensayo y de que, antes, algunos vecinos se quejaban del ruido. “Ahora vienen turistas de todos lados, pero ojo: el hecho de que el candombe esté de moda no quiere decir que la gente lo entienda”, advierte. Linu toma nota de todo, con la cabeza llena de frases que no sabe cómo ordenar.',
        translation:
          '“Aprendi olhando o meu avô — conta Beto. — Ele dizia que o tambor não se compra: se faz, se afina e se conquista tocando na cuerda”. Ele fala das Llamadas, do frio das noites de ensaio e de que, antes, alguns vizinhos reclamavam do barulho. “Agora vêm turistas de todo lado, mas atenção: o fato de o candombe estar na moda não quer dizer que as pessoas o entendam”, adverte. Linu anota tudo, com a cabeça cheia de frases que não sabe como organizar.',
        choices: [{ text: 'Volver a la redacción a escribir la nota.', translation: 'Voltar à redação para escrever a matéria.', next: 'redaccion' }],
      },
      redaccion: {
        emoji: '✍️',
        text: 'De vuelta en la redacción, Linu tiene dos versiones del primer párrafo. La primera dice: “Beto aprendió a hacer tambores con su abuelo y dice que ahora el candombe está de moda, pero que la gente no lo entiende mucho”. La segunda: “La transmisión familiar del oficio y la creciente popularidad del candombe conviven, según Beto, con una comprensión todavía superficial de su sentido por parte del público”. Graciela pasa por detrás y le pregunta cuál piensa entregar.',
        translation:
          'De volta à redação, Linu tem duas versões do primeiro parágrafo. A primeira diz: “Beto aprendeu a fazer tambores com o avô e diz que agora o candombe está na moda, mas que as pessoas não o entendem muito”. A segunda: “A transmissão familiar do ofício e a crescente popularidade do candombe convivem, segundo Beto, com uma compreensão ainda superficial do seu sentido por parte do público”. Graciela passa por trás dele e pergunta qual ele pretende entregar.',
        choices: [
          {
            text: 'Entregar la segunda, pero conservar la cita textual de Beto sobre su abuelo.',
            translation: 'Entregar a segunda, mas manter a citação literal do Beto sobre o avô.',
            next: 'final_bom',
          },
          { text: 'Entregar la primera, porque se entiende más fácil.', translation: 'Entregar a primeira, porque é mais fácil de entender.', next: 'final_simple' },
          {
            text: 'Descartar la segunda, porque dice que Beto no entiende el candombe.',
            translation: 'Descartar a segunda, porque ela diz que o Beto não entende o candombe.',
            wrong:
              'Leia de novo: quem tem “una comprensión todavía superficial” é o público (“por parte del público”), não o Beto. “Según Beto” só indica a fonte da opinião. Nas nominalizações, vale a pena identificar quem faz cada ação.',
          },
        ],
      },
      final_bom: {
        emoji: '🎉',
        text: 'Graciela lee la nota en silencio y, al final, asiente: “Rigor sin perder la voz del barrio; eso es periodismo”. La revista sale en febrero, justo antes de las Llamadas, con una foto de Beto templando junto al fuego. Esa noche, Linu va a ver el desfile por la calle Isla de Flores. Cuando pasa la cuerda de Beto, él lo señala con el palo y grita: “¡Ese es el pingüino que escribe!”.',
        translation:
          'Graciela lê a matéria em silêncio e, no fim, faz que sim com a cabeça: “Rigor sem perder a voz do bairro; isso é jornalismo”. A revista sai em fevereiro, logo antes das Llamadas, com uma foto do Beto afinando junto ao fogo. Naquela noite, Linu vai ver o desfile na rua Isla de Flores. Quando a cuerda do Beto passa, ele aponta para Linu com a baqueta e grita: “Aquele é o pinguim que escreve!”.',
        ending: { tone: 'bom', title: 'Rigor com ritmo', message: 'Você entendeu as condições, desmontou as nominalizações e juntou linguagem jornalística com a voz do bairro.' },
      },
      final_simple: {
        emoji: '📝',
        text: 'Graciela lee la primera versión y suspira: “Se entiende, sí, pero parece una charla de boliche, no una nota de revista”. Le pide que la reescriba antes del cierre, y Linu pasa la noche peleándose con los sustantivos. La nota sale correcta, aunque sin brillo. Beto, al leerla, le manda un audio: “Ta bien, pingüino, pero la próxima escribila con ritmo, como se toca”.',
        translation:
          'Graciela lê a primeira versão e suspira: “Dá para entender, sim, mas parece papo de boteco, não matéria de revista”. Ela pede que ele reescreva antes do fechamento, e Linu passa a noite brigando com os substantivos. A matéria sai correta, mas sem brilho. Beto, ao lê-la, manda um áudio: “Tá bom, pinguim, mas da próxima vez escreve com ritmo, do jeito que se toca”.',
        ending: { tone: 'neutro', title: 'Correto, mas sem swing', message: 'Clareza é ótima, mas uma revista cultural também pede o registro jornalístico: nominalizações bem usadas dão densidade ao texto.' },
      },
    },
  },
  {
    id: 'es-h41',
    level: 'C1.2',
    cefr: 'C1',
    title: 'El puente de las lenguas',
    emoji: '📜',
    summary: 'O Linu escreve uma reportagem sobre a Escola de Tradutores de Toledo. Rigor ou manchete chamativa?',
    cultural_context:
      'Nos séculos XII e XIII, Toledo foi um grande centro de tradução de obras árabes (muitas de origem grega) para o latim e, mais tarde, para o castelhano. Na corte de Afonso X, o Sábio, foram compostas as Cantigas de Santa Maria, escritas em galego-português, o antepassado do nosso português.',
    start: 'start',
    glossary: [
      ['la transmisión del saber', 'a transmissão do conhecimento'],
      ['sin que parezca', 'sem que pareça (sempre com subjuntivo)'],
      ['verter (un texto)', 'verter, traduzir (um texto)'],
      ['de ahí que + subj.', 'daí que, por isso'],
      ['no sea que + subj.', 'para não acontecer que, senão'],
      ['la entradilla', 'o lide, o primeiro parágrafo da matéria (na Espanha)'],
      ['el titular', 'a manchete'],
      ['la rectificación', 'a errata, a correção publicada'],
    ],
    nodes: {
      start: {
        emoji: '🏰',
        text: 'Toledo, primavera. Una revista cultural le ha encargado a Linu un reportaje sobre la llamada Escuela de Traductores. El correo de la editora es claro: “Queremos que el texto explique la transmisión del saber medieval sin que parezca una clase de historia”. Linu tiene una cita con Lucía, especialista en manuscritos, en una biblioteca cercana a la catedral. Antes de salir, relee el encargo con atención.',
        translation:
          'Toledo, primavera. Uma revista cultural encomendou ao Linu uma reportagem sobre a chamada Escola de Tradutores. O e-mail da editora é claro: “Queremos que o texto explique a transmissão do saber medieval sem que pareça uma aula de história”. O Linu tem um encontro com a Lúcia, especialista em manuscritos, numa biblioteca perto da catedral. Antes de sair, relê a encomenda com atenção.',
        choices: [
          { text: 'Ir a la biblioteca y preguntarle a Lucía cómo se trabajaba en la Escuela.', translation: 'Ir à biblioteca e perguntar à Lúcia como se trabalhava na Escola.', next: 'lucia' },
          {
            text: 'Preparar una lista de cien fechas para que el reportaje sea una clase completa.',
            translation: 'Preparar uma lista de cem datas para que a reportagem seja uma aula completa.',
            wrong: 'A editora pediu justamente o contrário: “sin que parezca una clase de historia” = sem que pareça uma aula de história. “Sin que” sempre pede subjuntivo (parezca), e a ideia é um texto leve, não uma lista de datas.',
          },
        ],
      },
      lucia: {
        emoji: '📜',
        text: '“Lo primero que conviene aclarar es que no hubo un edificio con ese nombre”, dice Lucía. “Hablamos más bien de un método de trabajo que se desarrolló en Toledo entre los siglos XII y XIII.” Según explica, era frecuente que un sabio judío o mozárabe vertiera oralmente un texto árabe a la lengua romance y que otro lo pusiera por escrito en latín. “De ahí que la colaboración entre culturas sea la verdadera protagonista de esta historia”, añade. Linu toma nota, fascinado.',
        translation:
          '“A primeira coisa que convém esclarecer é que não houve um prédio com esse nome”, diz a Lúcia. “Falamos, na verdade, de um método de trabalho que se desenvolveu em Toledo entre os séculos XII e XIII.” Segundo ela explica, era comum que um sábio judeu ou moçárabe vertesse oralmente um texto árabe para a língua românica e que outro o passasse por escrito para o latim. “Daí que a colaboração entre culturas seja a verdadeira protagonista desta história”, acrescenta. O Linu anota, fascinado.',
        choices: [
          { text: '“¿Qué obras científicas se tradujeron aquí?”', translation: '“Que obras científicas foram traduzidas aqui?”', next: 'astronomia' },
          { text: '“¿Y la música? He oído hablar de un rey poeta.”', translation: '“E a música? Ouvi falar de um rei poeta.”', next: 'cantigas' },
        ],
      },
      astronomia: {
        emoji: '🔭',
        text: '“Una de las más influyentes fue el Almagesto de Ptolomeo, que Gerardo de Cremona tradujo del árabe al latín en Toledo”, responde Lucía. “Más tarde, bajo Alfonso X, se elaboraron aquí las Tablas alfonsíes, que permitían calcular la posición de los planetas.” Linu anota: “la traducción de tratados”, “la elaboración de tablas”, “la difusión del conocimiento”. Lucía sonríe: “Veo que ya dominas la nominalización, el vicio favorito de los académicos”. “Úsala, pero sin abusar, no sea que el lector se duerma.”',
        translation:
          '“Uma das mais influentes foi o Almagesto de Ptolomeu, que Gerardo de Cremona traduziu do árabe para o latim em Toledo”, responde a Lúcia. “Mais tarde, sob Afonso X, foram elaboradas aqui as Tábuas Afonsinas, que permitiam calcular a posição dos planetas.” O Linu anota: “a tradução de tratados”, “a elaboração de tábuas”, “a difusão do conhecimento”. A Lúcia sorri: “Vejo que você já domina a nominalização, o vício favorito dos acadêmicos”. “Use, mas sem exagero, senão o leitor dorme.”',
        choices: [
          { text: '“Entonces voy a escribir el primer párrafo.”', translation: '“Então vou escrever o primeiro parágrafo.”', next: 'borrador' },
          {
            text: '“O sea que Ptolomeo vivió en Toledo y escribió allí su libro.”',
            translation: '“Ou seja, Ptolomeu viveu em Toledo e escreveu lá o seu livro.”',
            wrong: 'Não: quem trabalhou em Toledo foi Gerardo de Cremona, que TRADUZIU a obra do árabe para o latim (“tradujo del árabe al latín en Toledo”). Ptolomeu viveu em Alexandria, muitos séculos antes.',
          },
        ],
      },
      cantigas: {
        emoji: '🎶',
        text: '“Alfonso X, llamado el Sabio, impulsó la prosa en castellano, pero sus Cantigas de Santa María están escritas en gallegoportugués”, cuenta Lucía. “Son más de cuatrocientas composiciones, y los códices muestran a músicos que tocan laúdes, arpas, gaitas y otros instrumentos.” Linu se queda boquiabierto: esa lengua es la antepasada del portugués que él habla. “Que un rey castellano eligiera el gallegoportugués para la lírica dice mucho del prestigio que tenía entonces”, añade ella. “Por eso sería injusto que tu reportaje hablara solo de ciencia.”',
        translation:
          '“Afonso X, chamado o Sábio, impulsionou a prosa em castelhano, mas as suas Cantigas de Santa Maria estão escritas em galego-português”, conta a Lúcia. “São mais de quatrocentas composições, e os códices mostram músicos tocando alaúdes, harpas, gaitas de fole e outros instrumentos.” O Linu fica boquiaberto: essa língua é a antepassada do português que ele fala. “Que um rei castelhano tenha escolhido o galego-português para a lírica diz muito do prestígio que ele tinha na época”, acrescenta ela. “Por isso seria injusto que a sua reportagem falasse só de ciência.”',
        choices: [
          { text: '“Tienes razón: incluiré las cantigas en el reportaje.”', translation: '“Você tem razão: vou incluir as cantigas na reportagem.”', next: 'borrador' },
          {
            text: '“Qué pena que las cantigas estén en árabe; no podré leerlas.”',
            translation: '“Que pena que as cantigas estejam em árabe; não vou conseguir lê-las.”',
            wrong: 'A Lúcia disse que as Cantigas estão “en gallegoportugués”, o antepassado do português. O Linu, justamente, conseguiria entender boa parte delas!',
          },
        ],
      },
      borrador: {
        emoji: '✍️',
        text: 'Esa noche, en el hotel, Linu redacta la entradilla: “La traducción sistemática de obras árabes en Toledo supuso la incorporación a Europa de saberes griegos, persas e indios”. Al día siguiente se la muestra a Lucía, junto con un titular provisional: “Toledo, la ciudad que inventó la traducción”. Lucía lee en silencio y frunce el ceño. “La entradilla es rigurosa, aunque convendría que fuera menos densa”, dice. “El titular, en cambio, me preocupa bastante.”',
        translation:
          'Naquela noite, no hotel, o Linu redige o lide: “A tradução sistemática de obras árabes em Toledo representou a incorporação, pela Europa, de saberes gregos, persas e indianos”. No dia seguinte, ele o mostra à Lúcia, junto com uma manchete provisória: “Toledo, a cidade que inventou a tradução”. A Lúcia lê em silêncio e franze a testa. “O lide é rigoroso, embora conviesse que fosse menos denso”, diz. “A manchete, por outro lado, me preocupa bastante.”',
        choices: [
          { text: '“¿Por qué? ¿Qué tiene de malo el titular?”', translation: '“Por quê? O que a manchete tem de errado?”', next: 'exageracion' },
          { text: '“Entonces cambio el titular por uno más preciso.”', translation: '“Então troco a manchete por uma mais precisa.”', next: 'revision' },
        ],
      },
      exageracion: {
        emoji: '⚠️',
        text: '“Porque se traducía mucho antes de que Toledo se convirtiera en un centro de traducción”, explica Lucía. “En Bagdad, por ejemplo, se habían vertido al árabe numerosas obras griegas siglos antes.” “Lo que distingue a Toledo no es la invención, sino la magnitud y la continuidad de la tarea.” “Si quieres que el reportaje sea riguroso, evita cualquier afirmación que no puedas demostrar.” Linu mira su titular, que de repente parece un anuncio de feria.',
        translation:
          '“Porque já se traduzia muito antes de Toledo se tornar um centro de tradução”, explica a Lúcia. “Em Bagdá, por exemplo, muitas obras gregas tinham sido vertidas para o árabe séculos antes.” “O que distingue Toledo não é a invenção, e sim a dimensão e a continuidade do trabalho.” “Se você quer que a reportagem seja rigorosa, evite qualquer afirmação que não possa demonstrar.” O Linu olha para a sua manchete, que de repente parece um anúncio de feira.',
        choices: [
          { text: '“Tienes razón. Busquemos juntos un titular más justo.”', translation: '“Você tem razão. Vamos procurar juntos uma manchete mais justa.”', next: 'revision' },
          { text: '“Un titular exagerado vende más. Lo dejo así.”', translation: '“Uma manchete exagerada vende mais. Vou deixar assim.”', next: 'final_titular' },
        ],
      },
      revision: {
        emoji: '📝',
        text: 'Pasan la tarde puliendo el texto en un café de la plaza de Zocodover. Lucía propone deshacer algunas nominalizaciones: “En vez de ‘la incorporación de saberes’, escribe que ‘Europa pudo leer por fin a Aristóteles y a Ptolomeo’”. Linu elige un titular nuevo: “Toledo, el puente de las lenguas”. Para celebrarlo, Lucía pide mazapán, el dulce típico de la ciudad. “Cuando lo publiquen, quiero que me mandes un ejemplar firmado”, le dice.',
        translation:
          'Eles passam a tarde lapidando o texto num café da praça de Zocodover. A Lúcia propõe desfazer algumas nominalizações: “Em vez de ‘a incorporação de saberes’, escreva que ‘a Europa finalmente pôde ler Aristóteles e Ptolomeu’”. O Linu escolhe uma manchete nova: “Toledo, a ponte das línguas”. Para comemorar, a Lúcia pede marzipã, o doce típico da cidade. “Quando publicarem, quero que você me mande um exemplar autografado”, diz ela.',
        choices: [
          { text: '“Te lo prometo. Y gracias por enseñarme a escribir con más claridad.”', translation: '“Prometo. E obrigado por me ensinar a escrever com mais clareza.”', next: 'final_bom' },
        ],
      },
      final_bom: {
        emoji: '🌉',
        text: 'Un mes después, la revista publica “Toledo, el puente de las lenguas”. Varios lectores escriben para contar que no sabían que Toledo había sido un lugar de encuentro entre culturas. La editora felicita a Linu por haber explicado un tema complejo sin que pareciera una clase. Linu le envía a Lucía el ejemplar firmado, con una caja de mazapán. En la dedicatoria escribe: “A quien me enseñó que traducir es tender puentes”.',
        translation:
          'Um mês depois, a revista publica “Toledo, a ponte das línguas”. Vários leitores escrevem contando que não sabiam que Toledo tinha sido um lugar de encontro entre culturas. A editora parabeniza o Linu por ter explicado um tema complexo sem que parecesse uma aula. O Linu envia à Lúcia o exemplar autografado, com uma caixa de marzipã. Na dedicatória, escreve: “Para quem me ensinou que traduzir é construir pontes”.',
        ending: { tone: 'bom', title: 'A ponte das línguas', message: 'Rigor e clareza juntos: a reportagem do Linu fez sucesso sem exagerar nada.' },
      },
      final_titular: {
        emoji: '📰',
        text: 'La revista publica el reportaje con el titular “Toledo, la ciudad que inventó la traducción”. A los pocos días llega la carta de un profesor que recuerda las traducciones de Bagdad y pide una rectificación. La editora tiene que publicar una nota aclaratoria en el número siguiente. Linu comprende que un titular llamativo no compensa una afirmación falsa. La próxima vez, se promete, contrastará cada dato antes de publicar.',
        translation:
          'A revista publica a reportagem com a manchete “Toledo, a cidade que inventou a tradução”. Poucos dias depois chega a carta de um professor que lembra as traduções de Bagdá e pede uma correção. A editora precisa publicar uma nota de esclarecimento no número seguinte. O Linu entende que uma manchete chamativa não compensa uma afirmação falsa. Da próxima vez, promete a si mesmo, vai checar cada dado antes de publicar.',
        ending: { tone: 'neutro', title: 'Errata na edição seguinte', message: 'A manchete chamou atenção, mas pelo motivo errado. No jornalismo, o exagero cobra seu preço.' },
      },
    },
  },
  {
    id: 'es-h42',
    level: 'C1.2',
    cefr: 'C1',
    title: 'Un gigante en Buenos Aires',
    emoji: '🦕',
    summary: 'Num museu de ciências de Buenos Aires, o Linu ajuda uma paleontóloga a escrever o painel sobre um dinossauro gigante.',
    cultural_context:
      'O Argentinosaurus huinculensis, descrito em 1993 a partir de ossos achados na província de Neuquén, na Patagônia argentina, está entre os maiores animais terrestres já conhecidos. Como se conhecem poucos ossos dele (sobretudo vértebras), o tamanho muda conforme o método de estimativa.',
    start: 'start',
    glossary: [
      ['¡Che!', 'Ei! / Ô! (interjeição típica argentina)'],
      ['vos escribís', 'você escreve (voseo rio-platense = tú escribes)'],
      ['la heladera', 'a geladeira (na Argentina; em outros países, “el refrigerador” ou “la nevera”)'],
      ['se estima que', 'estima-se que'],
      ['el yeso', 'o gesso'],
      ['el hallazgo', 'a descoberta, o achado'],
      ['la nena', 'a menina (Argentina)'],
      ['las medialunas', 'os croissants argentinos'],
    ],
    nodes: {
      start: {
        emoji: '🦴',
        text: '“¡Che, Linu, llegaste justo!”, lo saluda Martina, paleontóloga de un museo de ciencias naturales de Buenos Aires. “Quiero que me ayudes a redactar el cartel de la sala nueva, dedicada al Argentinosaurus.” Detrás de ella hay una vértebra del tamaño de una heladera; en realidad, es una réplica. “Vos escribís bien, pero ojo: el texto tiene que ser riguroso aunque lo lean chicos de diez años”, agrega. Linu saca su libreta y observa la vértebra con asombro.',
        translation:
          '“Ô, Linu, você chegou na hora!”, cumprimenta a Martina, paleontóloga de um museu de ciências naturais de Buenos Aires. “Quero que você me ajude a redigir o painel da sala nova, dedicada ao Argentinosaurus.” Atrás dela há uma vértebra do tamanho de uma geladeira; na verdade, é uma réplica. “Você escreve bem, mas atenção: o texto tem de ser rigoroso, mesmo que seja lido por crianças de dez anos”, acrescenta. O Linu tira o caderninho e observa a vértebra, espantado.',
        choices: [
          { text: '“¿Qué se sabe con certeza de este dinosaurio?”', translation: '“O que se sabe com certeza sobre esse dinossauro?”', next: 'datos' },
          {
            text: '“Entonces escribo algo muy técnico, solo para especialistas.”',
            translation: '“Então escrevo algo bem técnico, só para especialistas.”',
            wrong: 'A Martina disse que o texto precisa ser rigoroso “aunque lo lean chicos de diez años” = mesmo que seja lido por crianças de dez anos. Rigoroso, sim; só para especialistas, não.',
          },
        ],
      },
      datos: {
        emoji: '🗺️',
        text: '“Se lo describió en 1993 a partir de restos hallados en la provincia de Neuquén”, explica Martina. “Vivió en el Cretácico Superior y fue uno de los animales terrestres más grandes de los que se tiene noticia.” Linu le pregunta cuánto medía. “Ahí está el problema: solo contamos con algunas vértebras y unos pocos huesos más, de modo que cualquier cifra es una estimación.” “No es que no sepamos nada, sino que no podemos afirmar más de lo que los huesos permiten.”',
        translation:
          '“Ele foi descrito em 1993 a partir de restos encontrados na província de Neuquén”, explica a Martina. “Viveu no Cretáceo Superior e foi um dos maiores animais terrestres de que se tem notícia.” O Linu pergunta quanto ele media. “Aí está o problema: só temos algumas vértebras e mais uns poucos ossos, de modo que qualquer número é uma estimativa.” “Não é que não saibamos nada, e sim que não podemos afirmar mais do que os ossos permitem.”',
        choices: [
          { text: '“Entonces escribamos una frase con la cifra y una advertencia.”', translation: '“Então vamos escrever uma frase com o número e uma ressalva.”', next: 'cartel' },
          { text: '“¿Y cómo trabaja un paleontólogo en el campo?”', translation: '“E como um paleontólogo trabalha em campo?”', next: 'campo' },
        ],
      },
      campo: {
        emoji: '⛏️',
        text: '“La excavación es lenta y minuciosa”, cuenta Martina, mientras le muestra fotos de Neuquén. “Antes de extraer un hueso, se lo cubre con yeso para que no se rompa durante el traslado.” En una foto aparece ella misma, cubierta de polvo, junto a un fósil envuelto como si fuera un regalo. “La preparación en el laboratorio puede llevar meses, incluso años, según el estado del material.” “Por eso me molesta que los documentales hagan parecer que todo se resuelve en una tarde.”',
        translation:
          '“A escavação é lenta e minuciosa”, conta a Martina, enquanto mostra fotos de Neuquén. “Antes de retirar um osso, ele é coberto com gesso para não se quebrar durante o transporte.” Numa foto aparece ela mesma, coberta de poeira, ao lado de um fóssil embrulhado como se fosse um presente. “A preparação no laboratório pode levar meses, até anos, dependendo do estado do material.” “Por isso me incomoda que os documentários façam parecer que tudo se resolve numa tarde.”',
        choices: [
          { text: '“Me encanta. Contemos eso también en el cartel.”', translation: '“Adorei. Vamos contar isso também no painel.”', next: 'cartel' },
          {
            text: '“Así que los huesos se envuelven en papel de regalo.”',
            translation: '“Então os ossos são embrulhados em papel de presente.”',
            wrong: 'O fóssil estava embrulhado “como si fuera un regalo” — é só uma comparação. O que protege o osso é o gesso: “se lo cubre con yeso para que no se rompa”.',
          },
        ],
      },
      cartel: {
        emoji: '🪧',
        text: 'Linu propone una primera versión: “El Argentinosaurus medía exactamente treinta y cinco metros y pesaba setenta toneladas”. Martina niega con la cabeza. “Nadie lo midió con una cinta, Linu. Hace falta una formulación que refleje la incertidumbre.” Le sugiere expresiones propias del estilo científico: “se estima que”, “según los cálculos más aceptados”, “es posible que”. “Que la frase suene menos espectacular no significa que sea menos interesante”, concluye.',
        translation:
          'O Linu propõe uma primeira versão: “O Argentinosaurus media exatamente trinta e cinco metros e pesava setenta toneladas”. A Martina balança a cabeça, negando. “Ninguém mediu ele com uma fita métrica, Linu. Precisamos de uma formulação que reflita a incerteza.” Ela sugere expressões próprias do estilo científico: “estima-se que”, “segundo os cálculos mais aceitos”, “é possível que”. “Que a frase soe menos espetacular não significa que seja menos interessante”, conclui.',
        choices: [
          { text: '“Se estima que superaba los treinta metros de largo, aunque las cifras varían según el método.”', translation: '“Estima-se que passava dos trinta metros de comprimento, embora os números variem conforme o método.”', next: 'revisado' },
          { text: '“Pongamos la cifra exacta igual; a los chicos les gustan los números grandes.”', translation: '“Vamos pôr o número exato mesmo assim; as crianças gostam de números grandes.”', next: 'presion' },
        ],
      },
      presion: {
        emoji: '😬',
        text: 'Martina suspira y le muestra un correo del director del museo. “Solicito que los textos de la sala eviten toda afirmación que no cuente con respaldo bibliográfico”, dice el mensaje. “¿Ves? No es una manía mía: es la política del museo”, explica ella. “Además, si un chico repite esa cifra en la escuela y la maestra le dice que no es exacta, ¿a quién va a culpar?” Linu se rasca la cabeza, pensativo.',
        translation:
          'A Martina suspira e mostra um e-mail do diretor do museu. “Solicito que os textos da sala evitem toda afirmação que não tenha respaldo bibliográfico”, diz a mensagem. “Viu? Não é mania minha: é a política do museu”, explica ela. “Além disso, se uma criança repetir esse número na escola e a professora disser que não é exato, de quem ela vai pôr a culpa?” O Linu coça a cabeça, pensativo.',
        choices: [
          { text: '“Tienes razón, Martina. Reformulemos con prudencia.”', translation: '“Você tem razão, Martina. Vamos reformular com cautela.”', next: 'revisado' },
          { text: '“Lo mando así y que decida el director.”', translation: '“Vou mandar assim e o diretor que decida.”', next: 'final_rechazo' },
        ],
      },
      revisado: {
        emoji: '✅',
        text: 'El texto final dice: “Se estima que el Argentinosaurus superaba los treinta metros de largo. Como solo se conocen algunas vértebras y pocos huesos más, las cifras varían según el método de cálculo”. Martina lo lee dos veces y asiente: “Es claro, es honesto y deja lugar a la curiosidad”. Después propone agregar una pregunta para los visitantes: “¿Cómo calcularías el tamaño de un animal del que solo quedan algunos huesos?” “Así los chicos piensan como científicos”, explica.',
        translation:
          'O texto final diz: “Estima-se que o Argentinosaurus passava dos trinta metros de comprimento. Como só se conhecem algumas vértebras e poucos ossos além delas, os números variam conforme o método de cálculo”. A Martina lê duas vezes e concorda: “Está claro, é honesto e deixa espaço para a curiosidade”. Depois propõe acrescentar uma pergunta para os visitantes: “Como você calcularia o tamanho de um animal do qual restam só alguns ossos?” “Assim as crianças pensam como cientistas”, explica.',
        choices: [
          { text: '“¡Me parece genial! ¿Lo probamos con un grupo de visitantes?”', translation: '“Acho genial! Vamos testar com um grupo de visitantes?”', next: 'final_bom' },
          {
            text: '“O sea que ya se encontró el esqueleto completo.”',
            translation: '“Ou seja, o esqueleto completo já foi encontrado.”',
            wrong: 'O painel diz o contrário: “solo se conocen algunas vértebras y pocos huesos más” — só se conhecem algumas vértebras e poucos ossos. Por isso as medidas são estimativas.',
          },
        ],
      },
      final_bom: {
        emoji: '🎒',
        text: 'El sábado, un grupo escolar recorre la sala nueva. Una nena lee en voz alta la pregunta del cartel y propone comparar la vértebra con la de un animal actual. Martina, emocionada, le explica que los paleontólogos hacen algo muy parecido. Al salir, la maestra felicita al museo por un texto que “no subestima a los chicos”. Linu y Martina lo festejan con un café con medialunas.',
        translation:
          'No sábado, um grupo escolar percorre a sala nova. Uma menina lê em voz alta a pergunta do painel e propõe comparar a vértebra com a de um animal atual. A Martina, emocionada, explica que os paleontólogos fazem algo muito parecido. Na saída, a professora parabeniza o museu por um texto que “não subestima as crianças”. O Linu e a Martina comemoram com um café com medialunas.',
        ending: { tone: 'bom', title: 'Pequenos cientistas', message: 'Um texto rigoroso e acessível ao mesmo tempo: as crianças saíram pensando como paleontólogas.' },
      },
      final_rechazo: {
        emoji: '📧',
        text: 'Linu envía la primera versión tal cual. Al día siguiente, el director la devuelve con un comentario en rojo: “Cifra sin respaldo. Reformular”. La inauguración de la sala se posterga una semana mientras Martina reescribe el cartel sola. Linu aprende que, en la divulgación científica, la precisión no es un detalle. “La próxima vez te hago caso desde el principio; vos sabés más”, le escribe a Martina, estrenando su voseo.',
        translation:
          'O Linu envia a primeira versão do jeito que estava. No dia seguinte, o diretor a devolve com um comentário em vermelho: “Número sem respaldo. Reformular”. A inauguração da sala é adiada uma semana enquanto a Martina reescreve o painel sozinha. O Linu aprende que, na divulgação científica, a precisão não é um detalhe. “Da próxima vez eu te escuto desde o começo; você sabe mais”, escreve ele à Martina, estreando o seu voseo.',
        ending: { tone: 'neutro', title: 'Devolvido em vermelho', message: 'O número exato impressionava, mas não tinha respaldo. Na ciência, a incerteza também é informação.' },
      },
    },
  },
  {
    id: 'es-h43',
    level: 'C2',
    cefr: 'C2',
    title: 'Molinos, azafrán y refranes',
    emoji: '🌬️',
    summary: 'Em Consuegra, na Mancha, o Linu colhe açafrão com um velho lavrador que só fala por ditados.',
    cultural_context:
      'A primeira parte do Dom Quixote saiu em 1605; no capítulo 8, o fidalgo ataca moinhos de vento achando que são gigantes, apesar dos avisos de Sancho Pança. Consuegra, na Mancha, tem uma fileira de moinhos no alto de um morro e celebra no fim de outubro a Festa da Rosa do Açafrão, com concurso de “monda” (tirar os estigmas da flor).',
    start: 'start',
    glossary: [
      ['Adonde fueres, haz lo que vieres', 'Aonde fores, faze o que vires (futuro do subjuntivo)'],
      ['coger', 'colher, pegar (na Espanha; em vários países da América é vulgar)'],
      ['salióle / contóle', 'saiu-lhe / contou-lhe (ênclise literária, arcaizante)'],
      ['hubiera escuchado', 'tivesse escutado (mais-que-perfeito do subjuntivo)'],
      ['quien tuviere', 'quem tiver (futuro do subjuntivo, estilo de edital antigo)'],
      ['la monda', 'a retirada dos estigmas da flor do açafrão'],
      ['las aspas', 'as pás do moinho'],
      ['el hidalgo', 'o fidalgo'],
    ],
    nodes: {
      start: {
        emoji: '🌾',
        text: 'En un lugar de La Mancha, de cuyo nombre esta vez sí quiero acordarme, pues se llama Consuegra, llegó Linu una mañana de otoño, cuando los campos amanecen teñidos de violeta. Era el tiempo de la rosa del azafrán, esa flor humilde que guarda en su corazón tres hilos rojos más codiciados que el oro. Salióle al encuentro el tío Anselmo, labrador viejo, enjuto de carnes y rico en refranes, que lo miró de arriba abajo como quien tasa un melón. “Adonde fueres, haz lo que vieres”, le dijo por todo saludo, y le puso un cesto entre las aletas. Y entendió Linu que aquel día no había venido a mirar, sino a trabajar.',
        translation:
          'Num lugar da Mancha, de cujo nome desta vez quero sim me lembrar, pois se chama Consuegra, chegou o Linu numa manhã de outono, quando os campos amanhecem tingidos de violeta. Era o tempo da rosa do açafrão, essa flor humilde que guarda no coração três fios vermelhos mais cobiçados que o ouro. Saiu-lhe ao encontro o tio Anselmo, lavrador velho, magro de carnes e rico em ditados, que o mediu de cima a baixo como quem avalia um melão. “Aonde fores, faze o que vires”, disse-lhe à guisa de cumprimento, e pôs-lhe um cesto entre as asas. E entendeu o Linu que naquele dia não tinha vindo para olhar, e sim para trabalhar.',
        choices: [
          { text: '“Pues a recoger flores se ha dicho.”', translation: '“Pois então, vamos colher flores.”', next: 'campo' },
          {
            text: '“Muchas gracias, pero yo solo he venido a sacar fotos de los molinos.”',
            translation: '“Muito obrigado, mas eu só vim tirar fotos dos moinhos.”',
            wrong: 'O tio Anselmo o recebeu com “Adonde fueres, haz lo que vieres” (aonde fores, faze o que vires: futuro do subjuntivo) e lhe entregou um cesto. O recado é claro: aqui se participa do costume local, não se fica só olhando.',
          },
        ],
      },
      campo: {
        emoji: '🌸',
        text: 'Antes de que el sol calentara, ya andaban los dos agachados entre los surcos, cortando las flores con cuidado de no estrujarlas. “La rosa hay que cogerla al alba, que a mediodía se abre del todo y se echa a perder”, explicaba el viejo sin levantar la vista. A Linu le dolían los riñones, cosa extraña en un pingüino, y maldecía por lo bajo la hora en que había dejado su tierra. “A quien madruga, Dios le ayuda”, sentenció Anselmo, que todo lo oía. Y Linu, avergonzado, calló y siguió cortando.',
        translation:
          'Antes que o sol esquentasse, os dois já andavam agachados entre os sulcos, cortando as flores com cuidado para não amassá-las. “A rosa tem de ser colhida ao amanhecer, que ao meio-dia ela se abre toda e se estraga”, explicava o velho sem levantar os olhos. O Linu estava com dor nas costas, coisa estranha num pinguim, e amaldiçoava baixinho a hora em que tinha deixado a sua terra. “Deus ajuda quem cedo madruga”, sentenciou o Anselmo, que tudo ouvia. E o Linu, envergonhado, calou-se e continuou cortando.',
        choices: [
          { text: '“Sigamos, tío Anselmo, que ya me voy haciendo al oficio.”', translation: '“Vamos em frente, tio Anselmo, que já estou pegando o jeito do ofício.”', next: 'monda' },
          { text: '“¿Por qué hay tantos molinos en aquel cerro?”', translation: '“Por que há tantos moinhos naquele morro?”', next: 'molinos' },
        ],
      },
      molinos: {
        emoji: '🌬️',
        text: 'Señaló el viejo con la barbilla la cresta del cerro, donde una hilera de molinos blancos se recortaba contra el cielo. “Ahí donde los ves, molían el grano con el viento, y hubo un caballero que los tomó por gigantes”, dijo con sorna. Contóle entonces, a su manera, la aventura de don Quijote, que arremetió lanza en ristre contra las aspas y salió rodando por el campo, muy maltrecho. “Si el pobre hidalgo hubiera escuchado a Sancho, se habría ahorrado los golpes”, concluyó. “Pero ya se sabe: no hay peor sordo que el que no quiere oír.”',
        translation:
          'Apontou o velho com o queixo a crista do morro, onde uma fileira de moinhos brancos se recortava contra o céu. “Esses aí moíam o grão com o vento, e houve um cavaleiro que os tomou por gigantes”, disse com ironia. Contou-lhe então, à sua maneira, a aventura de dom Quixote, que investiu de lança em riste contra as pás e saiu rolando pelo campo, muito maltratado. “Se o pobre fidalgo tivesse escutado Sancho, teria se poupado dos golpes”, concluiu. “Mas já se sabe: não há pior surdo que aquele que não quer ouvir.”',
        choices: [
          { text: '“Luego Sancho tenía razón: no eran gigantes, sino molinos.”', translation: '“Então Sancho tinha razão: não eram gigantes, e sim moinhos.”', next: 'monda' },
          {
            text: '“O sea que don Quijote venció a los gigantes y Sancho lo aplaudió.”',
            translation: '“Ou seja, dom Quixote venceu os gigantes e Sancho o aplaudiu.”',
            wrong: 'Ao contrário: dom Quixote atacou moinhos achando que eram gigantes e se deu mal. “Si el pobre hidalgo hubiera escuchado a Sancho, se habría ahorrado los golpes” = se tivesse escutado Sancho (que o avisou), teria se poupado dos golpes.',
          },
        ],
      },
      monda: {
        emoji: '🧺',
        text: 'Por la tarde se juntó la familia entera en la cocina, alrededor de una mesa cubierta de flores violetas, para la monda. Consiste la tal labor en abrir cada rosa y sacarle los tres estigmas rojos, tarea que pide más paciencia que fuerza. La nieta de Anselmo, una moza despierta llamada Casilda, le enseñó a Linu a pellizcar los hilos sin romperlos. “Poco a poco se va lejos”, le susurró al ver que se impacientaba. Al caer la noche, de aquellas montañas de flores apenas quedaba un puñadito de azafrán sobre un plato.',
        translation:
          'À tarde, a família inteira se reuniu na cozinha, em volta de uma mesa coberta de flores violeta, para a monda. Consiste esse trabalho em abrir cada rosa e tirar-lhe os três estigmas vermelhos, tarefa que pede mais paciência que força. A neta do Anselmo, uma moça esperta chamada Casilda, ensinou o Linu a beliscar os fios sem quebrá-los. “Devagar se vai ao longe”, sussurrou ela ao ver que ele se impacientava. Ao cair da noite, daquelas montanhas de flores restava apenas um punhadinho de açafrão num prato.',
        choices: [
          { text: '“Ahora entiendo por qué el azafrán es tan caro.”', translation: '“Agora entendo por que o açafrão é tão caro.”', next: 'tostado' },
          { text: '“¿Y si mezclamos pétalos con los hilos para que rinda más?”', translation: '“E se misturarmos pétalas com os fios para render mais?”', next: 'trampa' },
        ],
      },
      trampa: {
        emoji: '🤨',
        text: 'Se hizo en la cocina un silencio tan espeso que se podía cortar con cuchillo. Anselmo dejó la flor que tenía entre los dedos y miró a Linu con ojos de juez. “Al pan, pan, y al vino, vino”, dijo muy despacio, “y al azafrán, solo los hilos”. Explicóle Casilda, más compasiva, que el azafrán de La Mancha tiene fama precisamente porque nadie le echa lo que no es suyo. “Más vale poco y bueno que mucho y malo”, remató el abuelo.',
        translation:
          'Fez-se na cozinha um silêncio tão espesso que dava para cortar com faca. O Anselmo largou a flor que tinha entre os dedos e olhou para o Linu com olhos de juiz. “Pão, pão; vinho, vinho”, disse bem devagar, “e no açafrão, só os fios”. A Casilda, mais compassiva, explicou-lhe que o açafrão da Mancha tem fama justamente porque ninguém põe nele o que não é dele. “Mais vale pouco e bom que muito e ruim”, arrematou o avô.',
        choices: [
          { text: '“Tiene usted razón, tío Anselmo. Fue una broma de mal gusto.”', translation: '“O senhor tem razão, tio Anselmo. Foi uma brincadeira de mau gosto.”', next: 'tostado' },
          { text: '“Pues yo lo haría igual; nadie lo notaría.”', translation: '“Pois eu faria assim mesmo; ninguém ia perceber.”', next: 'final_trampa' },
        ],
      },
      tostado: {
        emoji: '🔥',
        text: 'Tostaron luego los hilos sobre un cedazo, junto al rescoldo, hasta que se secaron sin quemarse y la cocina entera olió a campo y a miel. Anselmo tomó una pizca entre los dedos y se la ofreció a Linu como quien entrega una reliquia. “Si me hubieran dicho esta mañana que un pájaro del sur aguantaría la jornada, no lo habría creído”, confesó. Casilda anunció que el domingo era la fiesta de la Rosa del Azafrán y que habría concurso de monda en la plaza. “Quien tuviere manos ligeras, que se apunte”, bromeó el abuelo, imitando el lenguaje de los bandos antiguos.',
        translation:
          'Depois torraram os fios sobre uma peneira, junto às brasas, até secarem sem queimar, e a cozinha inteira cheirou a campo e a mel. O Anselmo pegou uma pitada entre os dedos e a ofereceu ao Linu como quem entrega uma relíquia. “Se me tivessem dito hoje de manhã que um pássaro do sul aguentaria a jornada, eu não teria acreditado”, confessou. A Casilda anunciou que no domingo era a festa da Rosa do Açafrão e que haveria concurso de monda na praça. “Quem tiver mãos ligeiras, que se inscreva”, brincou o avô, imitando a linguagem dos editais antigos.',
        choices: [
          { text: '“¡Me apunto! Aunque pierda, habrá valido la pena.”', translation: '“Estou dentro! Mesmo que eu perca, terá valido a pena.”', next: 'final_bom' },
          { text: '“Gracias, pero el domingo ya habré vuelto a la ciudad.”', translation: '“Obrigado, mas no domingo já terei voltado para a cidade.”', next: 'final_despedida' },
        ],
      },
      final_bom: {
        emoji: '🏆',
        text: 'Llegó el domingo, y la plaza de Consuegra se llenó de mesas, de música y de gente vestida a la usanza antigua. Linu no ganó el concurso, que para eso había mondadoras con cincuenta años de oficio, pero tampoco quedó el último. Casilda lo aplaudió como si hubiera ganado, y Anselmo le regaló un frasquito de azafrán envuelto en papel de estraza. “Dime con quién andas y te diré quién eres”, le dijo al despedirse, “y tú ya andas con manchegos”. Y así volvió Linu a su tierra, con las aletas teñidas de rojo y la memoria llena de refranes.',
        translation:
          'Chegou o domingo, e a praça de Consuegra se encheu de mesas, de música e de gente vestida à moda antiga. O Linu não ganhou o concurso, que para isso havia mondadoras com cinquenta anos de ofício, mas também não ficou em último. A Casilda o aplaudiu como se ele tivesse ganhado, e o Anselmo lhe deu de presente um frasquinho de açafrão embrulhado em papel pardo. “Diz-me com quem andas e te direi quem és”, disse-lhe na despedida, “e tu já andas com manchegos”. E assim voltou o Linu para a sua terra, com as asas tingidas de vermelho e a memória cheia de ditados.',
        ending: { tone: 'bom', title: 'Manchego de coração', message: 'O Linu fez o que viu, como manda o ditado, e ganhou uma família na Mancha.' },
      },
      final_trampa: {
        emoji: '🚪',
        text: 'Nada respondió el viejo, pero aquella noche la cena fue corta y la conversación, más corta todavía. A la mañana siguiente, Anselmo le devolvió el cesto con una cortesía helada y le deseó buen viaje. Casilda ni siquiera salió a despedirlo. Se marchó Linu por el camino de los molinos, rumiando que había perdido, por una ocurrencia, la amistad de toda una casa. Y comprendió tarde lo que dice el refrán: que por la boca muere el pez.',
        translation:
          'O velho não respondeu nada, mas naquela noite o jantar foi curto e a conversa, mais curta ainda. Na manhã seguinte, o Anselmo lhe devolveu o cesto com uma cortesia gelada e lhe desejou boa viagem. A Casilda nem saiu para se despedir. O Linu foi embora pelo caminho dos moinhos, remoendo que tinha perdido, por uma tirada, a amizade de uma casa inteira. E entendeu tarde o que diz o ditado: o peixe morre pela boca.',
        ending: { tone: 'neutro', title: 'O peixe morre pela boca', message: 'Na Mancha, o açafrão puro é questão de honra. Uma frase infeliz custou ao Linu a festa e os amigos.' },
      },
      final_despedida: {
        emoji: '🚌',
        text: 'Partió Linu el sábado en el autobús de la mañana, con un frasquito de azafrán en la mochila y cierta pena en el pecho. Desde la ventanilla vio pasar los molinos, inmóviles, como gigantes dormidos. Pensó que, si se hubiera quedado un día más, habría podido ver la fiesta y competir en la plaza. Pero ya se sabe que no se puede estar en misa y repicando. Se prometió volver otro otoño, cuando los campos se tiñeran otra vez de violeta.',
        translation:
          'O Linu partiu no sábado, no ônibus da manhã, com um frasquinho de açafrão na mochila e certa tristeza no peito. Pela janela viu passar os moinhos, imóveis, como gigantes adormecidos. Pensou que, se tivesse ficado mais um dia, poderia ter visto a festa e competido na praça. Mas já se sabe que não dá para assobiar e chupar cana ao mesmo tempo. Prometeu a si mesmo voltar em outro outono, quando os campos se tingissem de novo de violeta.',
        ending: { tone: 'neutro', title: 'Gigantes adormecidos', message: 'O Linu aprendeu muito, mas perdeu a festa. Fica para outro outono.' },
      },
    },
  },
  {
    id: 'es-h44',
    level: 'C2',
    cefr: 'C2',
    title: 'El río que se distrajo',
    emoji: '🦜',
    summary: 'Em Aracataca, os pássaros emudeceram com a seca, e um papagaio centenário guarda o segredo para trazer a chuva de volta.',
    cultural_context:
      'Gabriel García Márquez nasceu em Aracataca, no departamento de Magdalena (Colômbia), em 1927, e ganhou o Nobel de Literatura em 1982. A Macondo dos seus romances se inspira na cidade natal; o nome vem de uma fazenda de bananas da região. No vallenato, a “guacharaca” é um reco-reco de cana que tem o nome de um pássaro.',
    start: 'start',
    glossary: [
      ['la guacharaca', 'ave da Colômbia e também o reco-reco do vallenato'],
      ['el turpial', 'o corrupião (pássaro)'],
      ['el guineo', 'a banana (no Caribe colombiano)'],
      ['la caja', 'o tambor do vallenato'],
      ['el fuelle', 'o fole (da sanfona)'],
      ['si lo hubiéramos sabido', 'se a gente tivesse sabido (mais-que-perfeito do subjuntivo)'],
      ['el aguacero', 'o temporal, a chuvarada'],
      ['no sea que', 'para que não aconteça que'],
    ],
    nodes: {
      start: {
        emoji: '🚂',
        text: 'Llegó Linu a Aracataca en un tren que resoplaba como un animal cansado, a la hora en que el calor derrite hasta las sombras. En la estación no lo esperaba nadie, salvo una anciana vestida de blanco que parecía estar allí desde antes de que existieran los rieles. Se llamaba Tránsito, y llevaba en el hombro un loro verde tan viejo que las plumas se le habían vuelto casi transparentes. “Desde que dejó de llover, Mamerto no ha vuelto a hablar”, le dijo sin más preámbulo, como si lo conociera de toda la vida. “Y en este pueblo, cuando un loro se calla, es porque algo anda mal.”',
        translation:
          'Chegou o Linu a Aracataca num trem que bufava como um animal cansado, na hora em que o calor derrete até as sombras. Na estação ninguém o esperava, a não ser uma velhinha vestida de branco que parecia estar ali desde antes de existirem os trilhos. Chamava-se Tránsito e levava no ombro um papagaio verde tão velho que as penas tinham ficado quase transparentes. “Desde que parou de chover, o Mamerto não voltou a falar”, disse-lhe sem mais preâmbulos, como se o conhecesse a vida inteira. “E neste povoado, quando um papagaio se cala, é porque alguma coisa vai mal.”',
        choices: [
          { text: '“¿Y qué es lo que anda mal en el pueblo?”', translation: '“E o que é que vai mal no povoado?”', next: 'casa' },
          {
            text: '“Qué suerte que el loro hable tanto; así me hará compañía.”',
            translation: '“Que sorte que o papagaio fala tanto; assim vai me fazer companhia.”',
            wrong: 'A Tránsito disse o contrário: “Mamerto no ha vuelto a hablar” = o Mamerto não voltou a falar desde que parou de chover. O papagaio está mudo, e esse é o mistério.',
          },
        ],
      },
      casa: {
        emoji: '🏡',
        text: 'Tránsito lo llevó a su casa, una construcción de tablas con un almendro en el patio y una tinaja donde el agua se conservaba fresca aunque afuera hirviera el mundo. Le contó que hacía siete meses no caía una gota, y que desde entonces los pájaros del pueblo habían ido enmudeciendo uno tras otro: primero los turpiales, después las guacharacas y, al final, el propio Mamerto. “Dicen que el río se olvidó del camino al pueblo y que los pájaros se callaron por no tener a quién cantarle”, explicó. “Si mi difunto Eusebio no se hubiera llevado el acordeón a la tumba, él habría sabido despertarlos.” Linu, que en su vida había visto un acordeón de cerca, sintió que aquel asunto le concernía.',
        translation:
          'A Tránsito o levou para casa, uma construção de tábuas com uma amendoeira no quintal e uma talha onde a água se mantinha fresca mesmo que lá fora o mundo fervesse. Contou-lhe que fazia sete meses que não caía uma gota e que, desde então, os pássaros do povoado tinham emudecido um atrás do outro: primeiro os corrupiões, depois as guacharacas e, por fim, o próprio Mamerto. “Dizem que o rio esqueceu o caminho até o povoado e que os pássaros se calaram por não terem para quem cantar”, explicou. “Se o meu falecido Eusebio não tivesse levado a sanfona para o túmulo, ele teria sabido acordá-los.” O Linu, que nunca na vida tinha visto uma sanfona de perto, sentiu que aquele assunto lhe dizia respeito.',
        choices: [
          { text: '“Busquemos a alguien que sepa tocar. ¿Dónde puedo encontrar un acordeón?”', translation: '“Vamos procurar alguém que saiba tocar. Onde posso encontrar uma sanfona?”', next: 'mercado' },
          { text: '“Vayamos al río, a ver si todavía recuerda algo.”', translation: '“Vamos ao rio, ver se ele ainda se lembra de alguma coisa.”', next: 'rio' },
        ],
      },
      rio: {
        emoji: '🏞️',
        text: 'El cauce del río Aracataca era una cicatriz de piedras grises bajo un cielo sin nubes, y el silencio pesaba tanto que casi se oía crecer la hierba. Sentado en una piedra, un pescador sin peces remendaba una red que ya no servía para nada. “El río no se ha secado, forastero; solo se ha distraído”, le dijo con la seriedad de quien afirma lo evidente. “Se fue a buscar música a la sierra, y no volverá mientras aquí nadie le toque una canción.” Linu, que jamás habría creído semejante cosa en su tierra, descubrió que en Aracataca le parecía perfectamente razonable.',
        translation:
          'O leito do rio Aracataca era uma cicatriz de pedras cinzentas sob um céu sem nuvens, e o silêncio pesava tanto que quase se ouvia a grama crescer. Sentado numa pedra, um pescador sem peixes remendava uma rede que já não servia para nada. “O rio não secou, forasteiro; só se distraiu”, disse-lhe com a seriedade de quem afirma o óbvio. “Foi buscar música na serra e não vai voltar enquanto ninguém aqui tocar uma canção para ele.” O Linu, que jamais teria acreditado em tal coisa na sua terra, descobriu que em Aracataca aquilo lhe parecia perfeitamente razoável.',
        choices: [
          { text: '“Entonces hace falta una canción. Buscaré a alguien que la toque.”', translation: '“Então falta uma canção. Vou procurar alguém que a toque.”', next: 'mercado' },
          {
            text: '“O sea que el río se secó para siempre y ya no hay nada que hacer.”',
            translation: '“Ou seja, o rio secou para sempre e não há mais nada a fazer.”',
            wrong: 'O pescador disse que o rio “no se ha secado, solo se ha distraído”: foi buscar música na serra e só volta se alguém tocar uma canção. Há, sim, o que fazer!',
          },
        ],
      },
      mercado: {
        emoji: '🪗',
        text: 'En el mercado, entre racimos de guineo y sacos de café, encontró Linu a un muchacho llamado Nicanor que vendía instrumentos hechos por él mismo. Tenía una caja de cuero, una guacharaca de caña y, colgado de un clavo, un acordeón viejo con los fuelles remendados. “Es de segunda mano, pero tiene el alma entera”, aseguró. Le explicó que el vallenato se toca con esos tres instrumentos, y que la guacharaca se llama así por un pájaro que alborota al amanecer. “Lo que no tengo es quien lo toque: mi abuelo decía que este acordeón solo obedece a quien haya venido de muy lejos.”',
        translation:
          'No mercado, entre cachos de banana e sacos de café, o Linu encontrou um rapaz chamado Nicanor que vendia instrumentos feitos por ele mesmo. Tinha uma caixa de couro, uma guacharaca de cana e, pendurada num prego, uma sanfona velha com os foles remendados. “É de segunda mão, mas tem a alma inteira”, garantiu. Explicou-lhe que o vallenato se toca com esses três instrumentos e que a guacharaca se chama assim por causa de um pássaro que faz algazarra ao amanhecer. “O que eu não tenho é quem a toque: meu avô dizia que esta sanfona só obedece a quem tiver vindo de muito longe.”',
        choices: [
          { text: '“Yo he venido de muy lejos. ¿Me dejas intentarlo?”', translation: '“Eu vim de muito longe. Você me deixa tentar?”', next: 'musica' },
          { text: '“Qué lástima. Me vuelvo a la estación.”', translation: '“Que pena. Vou voltar para a estação.”', next: 'final_tren' },
        ],
      },
      musica: {
        emoji: '🎶',
        text: 'Linu se colgó el acordeón al pecho y, como nunca en su vida había tocado nada, dejó que las aletas hicieran lo que quisieran. Salió al principio un quejido desafinado que espantó a las gallinas, pero Nicanor se puso a golpear la caja, un niño agarró la guacharaca, y aquello empezó a parecerse a una canción. Entonces, desde el hombro de Tránsito, que había llegado sin que nadie la viera, Mamerto abrió el pico. “¡Si lo hubiéramos sabido antes!”, gritó el loro con voz de trueno, y en el cielo se oyó un rumor lejano. La gente del mercado dejó de regatear y se quedó mirando hacia la sierra.',
        translation:
          'O Linu pendurou a sanfona no peito e, como nunca na vida tinha tocado nada, deixou que as asas fizessem o que quisessem. Saiu no começo um gemido desafinado que espantou as galinhas, mas o Nicanor começou a bater na caixa, um menino pegou a guacharaca, e aquilo começou a parecer uma canção. Então, do ombro da Tránsito, que tinha chegado sem que ninguém a visse, o Mamerto abriu o bico. “Se a gente tivesse sabido antes!”, gritou o papagaio com voz de trovão, e no céu se ouviu um rumor distante. O pessoal do mercado parou de pechinchar e ficou olhando para a serra.',
        choices: [
          { text: '“¡Sigan tocando! ¡El río está volviendo!”', translation: '“Continuem tocando! O rio está voltando!”', next: 'lluvia' },
          {
            text: '“Mamerto dice que ya lo sabían desde el principio.”',
            translation: '“O Mamerto diz que já sabiam disso desde o começo.”',
            wrong: '“¡Si lo hubiéramos sabido antes!” = Se a gente tivesse sabido antes! O mais-que-perfeito do subjuntivo fala de algo que NÃO aconteceu: o papagaio lamenta que ninguém soubesse a solução antes.',
          },
        ],
      },
      lluvia: {
        emoji: '🌧️',
        text: 'Llovió aquella tarde con una alegría desordenada, y el agua bajó por el cauce trayendo de la sierra ramas, hojas y un olor a tierra mojada que los viejos reconocieron con lágrimas. Los turpiales volvieron a cantar en los almendros, las guacharacas contestaron desde el monte, y hubo quien juró haber visto a una iguana bailando en el techo de la iglesia. Tránsito, empapada, abrazó a Linu como si fuera un nieto que hubiera regresado de un largo viaje. “Ahora que el río se acordó del camino, habrá que tocarle todos los sábados, no sea que se vuelva a distraer”, decretó. Y así quedó establecido, sin que nadie firmara papel alguno.',
        translation:
          'Choveu naquela tarde com uma alegria desordenada, e a água desceu pelo leito trazendo da serra galhos, folhas e um cheiro de terra molhada que os velhos reconheceram com lágrimas. Os corrupiões voltaram a cantar nas amendoeiras, as guacharacas responderam do mato, e houve quem jurasse ter visto uma iguana dançando no telhado da igreja. A Tránsito, encharcada, abraçou o Linu como se ele fosse um neto que tivesse voltado de uma longa viagem. “Agora que o rio se lembrou do caminho, vai ser preciso tocar para ele todo sábado, para que não se distraia de novo”, decretou. E assim ficou estabelecido, sem que ninguém assinasse papel algum.',
        choices: [{ text: '“Yo vendré a tocar siempre que pueda.”', translation: '“Eu venho tocar sempre que puder.”', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🌈',
        text: 'Linu se quedó en Aracataca más tiempo del que había previsto, aprendiendo de Nicanor los secretos del fuelle. Nunca llegó a tocar bien, pero en el pueblo decían que el río lo escuchaba con especial atención. Mamerto, por su parte, no volvió a callarse nunca, y hasta aprendió a decir “pingüino” con acento costeño. Cuando por fin se marchó, Tránsito le regaló una pluma transparente del loro para que no olvidara el camino de regreso. Y dicen que aquella noche, al paso del tren, llovió solo sobre su vagón.',
        translation:
          'O Linu ficou em Aracataca mais tempo do que tinha previsto, aprendendo com o Nicanor os segredos do fole. Nunca chegou a tocar bem, mas no povoado diziam que o rio o escutava com atenção especial. O Mamerto, por sua vez, nunca mais se calou, e até aprendeu a dizer “pinguim” com sotaque do litoral. Quando o Linu finalmente foi embora, a Tránsito lhe deu uma pena transparente do papagaio para que ele não esquecesse o caminho de volta. E dizem que naquela noite, quando o trem passou, choveu só em cima do vagão dele.',
        ending: { tone: 'bom', title: 'A chuva voltou', message: 'Com uma sanfona remendada e muita coragem, o Linu lembrou o rio do caminho de casa.' },
      },
      final_tren: {
        emoji: '🌙',
        text: 'Volvió Linu a la estación, y el tren salió tan despacio que parecía arrepentido de partir. Por la ventanilla vio a Tránsito en el andén, con el loro mudo en el hombro, diciéndole adiós con un pañuelo blanco. Se quedó dormido con el traqueteo y soñó con un río que buscaba música entre las montañas. Al despertar, ya lejos, no supo si había estado de verdad en Aracataca o si todo había sido un sueño de la siesta. Solo le quedó la sensación de que, si se hubiera quedado, algo maravilloso habría ocurrido.',
        translation:
          'O Linu voltou para a estação, e o trem saiu tão devagar que parecia arrependido de partir. Pela janela viu a Tránsito na plataforma, com o papagaio mudo no ombro, acenando com um lenço branco. Adormeceu com o sacolejo e sonhou com um rio que procurava música entre as montanhas. Ao acordar, já longe, não soube se tinha estado mesmo em Aracataca ou se tudo tinha sido um sonho da sesta. Ficou só com a sensação de que, se tivesse ficado, algo maravilhoso teria acontecido.',
        ending: { tone: 'neutro', title: 'Sonho da sesta', message: 'O Linu foi embora antes da hora. A sanfona ficou pendurada no prego, esperando alguém vindo de longe.' },
      },
    },
  },
  {
    id: 'es-h45',
    level: 'C2',
    cefr: 'C2',
    title: 'La dama de la proa',
    emoji: '⚓',
    summary: 'Em Isla Negra, na casa de Neruda, um temporal traz à praia uma carranca de proa. Guardar o tesouro ou avisar a autoridade?',
    cultural_context:
      'Isla Negra não é uma ilha: é um trecho do litoral central do Chile, onde Pablo Neruda (Nobel de Literatura em 1971) tinha sua casa favorita, hoje museu. Lá estão suas coleções de carrancas de proa, conchas e garrafas, e lá ele está sepultado com Matilde Urrutia. Neruda escreveu odes a coisas simples, como a cebola, o tomate e as meias.',
    start: 'start',
    glossary: [
      ['¿cachai?', 'sacou? entendeu? (gíria chilena)'],
      ['el mascarón de proa', 'a carranca de proa (figura de madeira na frente do navio)'],
      ['las caracolas', 'as conchas grandes, os búzios'],
      ['el temporal', 'o temporal, a tempestade'],
      ['quien hallare', 'quem achar (futuro do subjuntivo, linguagem jurídica antiga)'],
      ['la capitanía de puerto', 'a capitania dos portos'],
      ['las sopaipillas', 'bolinhos fritos de abóbora (Chile)'],
      ['Camarón que se duerme se lo lleva la corriente', 'Quem dorme no ponto perde a vez'],
    ],
    nodes: {
      start: {
        emoji: '🌊',
        text: 'Isla Negra no es una isla, y eso fue lo primero que aprendió Linu al bajar del bus, frente a un mar que golpeaba las rocas con la terquedad de un carpintero. La casa del poeta se alzaba sobre la costa como un barco varado, llena de ventanas que miraban hacia el Pacífico. En la puerta lo recibió Tomasa, guía del museo e hija de pescadores, con una bufanda tejida por su abuela. “Aquí adentro todo tiene alma de mar, ¿cachai?”, le dijo con su acento chileno. “El poeta les escribió odas a la cebolla, al tomate y a los calcetines, así que imagínate lo que sentía por los objetos que le traía el océano.”',
        translation:
          'Isla Negra não é uma ilha, e foi isso a primeira coisa que o Linu aprendeu ao descer do ônibus, diante de um mar que batia nas rochas com a teimosia de um carpinteiro. A casa do poeta se erguia sobre a costa como um barco encalhado, cheia de janelas que olhavam para o Pacífico. Na porta, recebeu-o a Tomasa, guia do museu e filha de pescadores, com um cachecol tricotado pela avó. “Aqui dentro tudo tem alma de mar, sacou?”, disse ela com o seu sotaque chileno. “O poeta escreveu odes à cebola, ao tomate e às meias, então imagine o que ele sentia pelos objetos que o oceano lhe trazia.”',
        choices: [
          { text: '“¿Qué colecciones guarda la casa?”', translation: '“Que coleções a casa guarda?”', next: 'colecciones' },
          {
            text: '“Qué bien. Entonces tomaremos un bote para llegar a la isla.”',
            translation: '“Que bom. Então vamos pegar um barco para chegar à ilha.”',
            wrong: 'Isla Negra “no es una isla”! É um trecho do litoral chileno: o Linu chegou de ônibus e já está lá, na porta da casa.',
          },
        ],
      },
      colecciones: {
        emoji: '🗿',
        text: 'Recorrieron salas estrechas como camarotes, donde se amontonaban caracolas, botellas de colores, mapas antiguos y barcos metidos dentro de botellas. Pero lo que más impresionó a Linu fueron los mascarones de proa, aquellas figuras de madera que antaño presidían los barcos y que ahora parecían mirar el mar con nostalgia. “Hay quien dice que por las noches lloran de tanto extrañar las olas”, susurró Tomasa, medio en broma y medio en serio. Afuera, el viento empezaba a levantarse y el cielo se ponía del color del plomo. “Se viene un temporal”, anunció ella, “y cuando el mar se enoja, siempre devuelve algo”.',
        translation:
          'Percorreram salas estreitas como cabines de navio, onde se amontoavam conchas, garrafas coloridas, mapas antigos e barcos dentro de garrafas. Mas o que mais impressionou o Linu foram as carrancas de proa, aquelas figuras de madeira que antigamente iam à frente dos navios e que agora pareciam olhar o mar com saudade. “Tem gente que diz que de noite elas choram de tanta saudade das ondas”, sussurrou a Tomasa, meio de brincadeira, meio a sério. Lá fora, o vento começava a se levantar e o céu ficava da cor do chumbo. “Vem aí um temporal”, anunciou ela, “e quando o mar se zanga, sempre devolve alguma coisa”.',
        choices: [
          { text: '“Esperemos aquí dentro a que pase la tormenta.”', translation: '“Vamos esperar aqui dentro a tempestade passar.”', next: 'tormenta' },
          { text: '“Vamos a la playa a ver qué devuelve el mar.”', translation: '“Vamos à praia ver o que o mar devolve.”', next: 'playa' },
        ],
      },
      tormenta: {
        emoji: '⛈️',
        text: 'Se refugiaron en la cocina del personal mientras la lluvia azotaba los ventanales y el mar rugía como un león encadenado. Tomasa preparó té y sacó unas sopaipillas que había traído su madre, porque en Chile, explicó, los días de lluvia piden sopaipillas. Hablaron de sus abuelos, de los pescadores que salían de madrugada y de los inviernos en que el mar se había llevado botes enteros. “Si mi abuelo hubiera conocido a un pingüino que habla, no lo habría creído ni en sueños”, se rio ella. Cuando amainó, se asomaron a la ventana y vieron algo oscuro flotando cerca de la orilla.',
        translation:
          'Refugiaram-se na cozinha dos funcionários enquanto a chuva açoitava as janelas e o mar rugia como um leão acorrentado. A Tomasa preparou chá e tirou umas sopaipillas que a mãe tinha trazido, porque no Chile, explicou, dia de chuva pede sopaipillas. Falaram dos avós, dos pescadores que saíam de madrugada e dos invernos em que o mar tinha levado barcos inteiros. “Se o meu avô tivesse conhecido um pinguim que fala, não teria acreditado nem em sonho”, riu ela. Quando o tempo acalmou, foram até a janela e viram algo escuro boiando perto da margem.',
        choices: [{ text: '“¡Mira allí! Bajemos a ver qué es.”', translation: '“Olhe ali! Vamos descer para ver o que é.”', next: 'playa' }],
      },
      playa: {
        emoji: '🪵',
        text: 'Sobre la arena, entre algas y maderos rotos, yacía una figura tallada: una mujer con los brazos cruzados sobre el pecho y el pelo recogido en trenzas, desteñida por años de agua salada. “¡Un mascarón de proa!”, exclamó Tomasa, arrodillándose junto a él con reverencia. Cerca de la caleta, un letrero oxidado decía: “Quien hallare en la costa restos de naufragio deberá dar aviso a la autoridad marítima”. Linu lo leyó dos veces, desconcertado por aquel verbo que nunca había visto conjugado así. “Es lenguaje de ley antigua, cachai; ya casi nadie habla así”, le explicó ella.',
        translation:
          'Sobre a areia, entre algas e tábuas quebradas, jazia uma figura entalhada: uma mulher com os braços cruzados sobre o peito e o cabelo preso em tranças, desbotada por anos de água salgada. “Uma carranca de proa!”, exclamou a Tomasa, ajoelhando-se ao lado dela com reverência. Perto da enseada, uma placa enferrujada dizia: “Quem achar na costa restos de naufrágio deverá avisar a autoridade marítima”. O Linu leu duas vezes, desconcertado com aquele verbo que nunca tinha visto conjugado assim. “É linguagem de lei antiga, sacou? Quase ninguém fala mais assim”, explicou ela.',
        choices: [
          { text: '“Entonces tenemos que avisar a la autoridad marítima.”', translation: '“Então temos de avisar a autoridade marítima.”', next: 'capitania' },
          { text: '“Es tan hermoso… ¿Y si nos lo llevamos a escondidas?”', translation: '“É tão bonito… E se a gente levar escondido?”', next: 'tentacion' },
          {
            text: '“El letrero dice que quien lo encuentre puede quedárselo.”',
            translation: '“A placa diz que quem encontrar pode ficar com ele.”',
            wrong: 'A placa diz “Quien hallare … deberá dar aviso a la autoridad marítima” = quem achar restos de naufrágio deverá avisar a autoridade marítima. “Hallare” é o futuro do subjuntivo, típico de textos jurídicos antigos.',
          },
        ],
      },
      tentacion: {
        emoji: '🤫',
        text: 'Tomasa lo miró largo rato, y en sus ojos se libraba una batalla entre el deseo y la conciencia. “Al poeta le habría encantado tenerlo”, admitió en voz baja. Pero luego señaló el letrero con la barbilla y recordó a su abuelo, que solía decir que lo que el mar trae no es de quien lo encuentra, sino de quien lo perdió. “Si alguien lo estuviera buscando, ¿cómo te sentirías tú?”, le preguntó. Linu bajó la vista, avergonzado, mientras las olas lamían la madera.',
        translation:
          'A Tomasa olhou para ele por um bom tempo, e nos olhos dela se travava uma batalha entre o desejo e a consciência. “O poeta teria adorado ficar com ela”, admitiu em voz baixa. Mas depois apontou a placa com o queixo e se lembrou do avô, que costumava dizer que o que o mar traz não é de quem encontra, e sim de quem perdeu. “Se alguém estivesse procurando por ela, como você se sentiria?”, perguntou. O Linu baixou os olhos, envergonhado, enquanto as ondas lambiam a madeira.',
        choices: [
          { text: '“Tienes razón. Avisemos a la autoridad.”', translation: '“Você tem razão. Vamos avisar a autoridade.”', next: 'capitania' },
          { text: '“Nadie lo va a echar de menos. Me lo llevo.”', translation: '“Ninguém vai sentir falta. Vou levar.”', next: 'final_secreto' },
        ],
      },
      capitania: {
        emoji: '⚓',
        text: 'En la capitanía de puerto, un funcionario de bigote canoso anotó con letra lenta y oficial cada detalle del hallazgo. Explicó que se investigaría la procedencia del mascarón y que, si nadie lo reclamara, podría quedar bajo la custodia de alguna institución. Tomasa, sin pensarlo dos veces, propuso que fuera la casa del poeta, donde estaría rodeado de sus hermanos de madera. El funcionario prometió transmitir la propuesta, aunque advirtió que los trámites irían para largo. “Camarón que se duerme se lo lleva la corriente”, dijo Tomasa al salir, “así que mañana mismo escribimos la carta”.',
        translation:
          'Na capitania dos portos, um funcionário de bigode grisalho anotou com letra lenta e oficial cada detalhe do achado. Explicou que a procedência da carranca seria investigada e que, se ninguém a reclamasse, ela poderia ficar sob a custódia de alguma instituição. A Tomasa, sem pensar duas vezes, propôs que fosse a casa do poeta, onde ela ficaria rodeada das suas irmãs de madeira. O funcionário prometeu transmitir a proposta, embora tenha avisado que os trâmites iam demorar. “Quem dorme no ponto perde a vez”, disse a Tomasa ao sair, “então amanhã mesmo a gente escreve a carta”.',
        choices: [
          { text: '“Y yo escribiré una oda al mascarón para acompañar la carta.”', translation: '“E eu vou escrever uma ode à carranca para acompanhar a carta.”', next: 'oda' },
          {
            text: '“Entonces el mascarón ya es del museo desde hoy.”',
            translation: '“Então a carranca já é do museu a partir de hoje.”',
            wrong: 'Ainda não: o funcionário disse que vão investigar a procedência e que, “si nadie lo reclamara”, ela poderia ficar sob a custódia de alguma instituição. E avisou que os trâmites “irían para largo” (iam demorar).',
          },
        ],
      },
      oda: {
        emoji: '📝',
        text: 'Esa noche, a la luz de una vela, Linu escribió su primera oda, torpe y sincera, a la mujer de madera que el mar había devuelto. “Oh, dama de la proa, / que cortaste la niebla / de mil amaneceres, / hoy descansas en la arena / como una palabra que el mar no quiso decir.” Tomasa la leyó en voz alta y se le humedecieron los ojos, aunque luego le echó la culpa al viento. “No es Neruda, pero tiene sal”, sentenció, y la dobló con cuidado junto a la carta. Afuera, el Pacífico, ya en calma, parecía escuchar.',
        translation:
          'Naquela noite, à luz de uma vela, o Linu escreveu a sua primeira ode, desajeitada e sincera, à mulher de madeira que o mar tinha devolvido. “Ó dama da proa, / que cortaste a neblina / de mil amanheceres, / hoje descansas na areia / como uma palavra que o mar não quis dizer.” A Tomasa leu em voz alta e os olhos dela se encheram de lágrimas, embora depois tenha posto a culpa no vento. “Não é Neruda, mas tem sal”, sentenciou, e a dobrou com cuidado junto com a carta. Lá fora, o Pacífico, já calmo, parecia escutar.',
        choices: [{ text: '“Enviémosla mañana, junto con la carta.”', translation: '“Vamos mandá-la amanhã, junto com a carta.”', next: 'final_bom' }],
      },
      final_bom: {
        emoji: '🌅',
        text: 'Pasaron meses sin noticias, y Linu ya había vuelto a su vida de pingüino viajero cuando le llegó un mensaje de Tomasa. Nadie había reclamado el mascarón, y las autoridades habían aceptado que se exhibiera en Isla Negra, frente al mar que lo había traído. Junto a la figura, en una pequeña placa, figuraba la oda de Linu, con su nombre y el de Tomasa. “Si no hubiéramos bajado a la playa aquel día, nada de esto habría sucedido”, escribía ella. “Vuelve pronto, amigo: aquí el mar y yo te esperamos.”',
        translation:
          'Passaram-se meses sem notícias, e o Linu já tinha voltado à sua vida de pinguim viajante quando recebeu uma mensagem da Tomasa. Ninguém tinha reclamado a carranca, e as autoridades tinham aceitado que ela fosse exposta em Isla Negra, diante do mar que a trouxera. Ao lado da figura, numa pequena placa, estava a ode do Linu, com o nome dele e o da Tomasa. “Se não tivéssemos descido à praia naquele dia, nada disso teria acontecido”, escrevia ela. “Volte logo, amigo: aqui o mar e eu esperamos você.”',
        ending: { tone: 'bom', title: 'A ode na placa', message: 'O Linu agiu certo, fez uma amiga e deixou um poema diante do Pacífico.' },
      },
      final_secreto: {
        emoji: '🌑',
        text: 'Linu escondió el mascarón en un galpón, envuelto en una lona, y durante unos días se sintió dueño de un tesoro. Pero Tomasa ya no le sonreía igual, y cada vez que él pasaba junto al letrero oxidado bajaba la mirada. Una semana después, un pescador del sur vino preguntando por la figura que el temporal había arrancado del bote de su padre. Linu le devolvió el mascarón en silencio, con más vergüenza que madera entre las aletas. Aprendió así que un tesoro escondido pesa más que uno compartido.',
        translation:
          'O Linu escondeu a carranca num galpão, enrolada numa lona, e durante alguns dias se sentiu dono de um tesouro. Mas a Tomasa já não sorria para ele do mesmo jeito, e cada vez que ele passava pela placa enferrujada baixava os olhos. Uma semana depois, um pescador do sul apareceu perguntando pela figura que o temporal tinha arrancado do barco do seu pai. O Linu devolveu a carranca em silêncio, com mais vergonha do que madeira entre as asas. Aprendeu assim que um tesouro escondido pesa mais que um tesouro compartilhado.',
        ending: { tone: 'neutro', title: 'Tesouro pesado', message: 'O que o mar traz tem dono. O Linu devolveu a carranca, mas perdeu a confiança da Tomasa.' },
      },
    },
  },
];
