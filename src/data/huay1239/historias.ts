import type { StorySeed } from '../types';

/**
 * Histórias do quéchua de Áncash — uma por subnível, do A1.1 ao B1.4. Ambientadas em Huaraz, no
 * Callejón de Huaylas. As do A1 usam só o [WIKI]; as do A2 usam frases de [PAR] (Parker, 1976; ver
 * vocabulario.ts), com a página ao lado, e nenhuma foi montada: as cenas só juntam frases que as fontes
 * já trazem. Nas do A1, todas as falas são do [WIKI] («Quechua de Huaylas»: o breve
 * vocabulário e os exemplos do verbo “ser” implícito; «Quechua ancashino»: as interjeições), com a
 * tradução deles.
 */
export const STORIES_HUAY1239: StorySeed[] = [
  {
    id: 'huay1239-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Pitaq?',
    emoji: '🚪',
    summary: 'O Linu bate à porta de uma casa em Huaraz.',
    cultural_context:
      'Huaraz fica no Callejón de Huaylas, o vale aos pés da Cordilheira Branca, onde se fala o dialeto de Huaylas do quéchua de Áncash.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Pitaq?',
        translation: 'Quem é?',
        emoji: '🚪',
        choices: [
          { text: 'Nuqallaa.', translation: 'Sou eu, aqui estou.', next: 'como' },
          { text: 'Alalaw!', translation: 'Que frio!', wrong: 'Perguntaram quem é. Responda: “Nuqallaa” (sou eu).' },
        ],
      },
      como: {
        text: 'Yaw! Imanawllataq kaykanki?',
        translation: 'Olá! Como você está?',
        emoji: '👋',
        choices: [
          { text: 'Yamayllam kaykaa.', translation: 'Estou bem.', next: 'final' },
          { text: 'Imatan?', translation: 'O que é?', wrong: 'Perguntaram como você está. Diga “Yamayllam kaykaa”.' },
        ],
      },
      final: {
        text: 'Yamayllaku kaykanki?',
        translation: 'Você está bem mesmo?',
        emoji: '😊',
        ending: { tone: 'bom', title: 'Yamayllam!', message: 'Você respondeu ao “Pitaq?” e ao “Imanawllataq kaykanki?” no quéchua de Huaylas.' },
      },
    },
    glossary: [
      ['Pitaq?', 'quem é?'],
      ['Nuqallaa', 'sou eu'],
      ['Imanawllataq kaykanki?', 'como você está?'],
      ['Yamayllam kaykaa', 'estou bem'],
    ],
  },
  {
    id: 'huay1239-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Allqupaqku?',
    emoji: '🐕',
    summary: 'Numa tarde fria, o Linu leva comida e pergunta para quem é.',
    cultural_context:
      'Na serra de Áncash faz frio, e o quéchua tem uma palavra só para reclamar dele: “Alalaw!”.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Alalaw!',
        translation: 'Que frio!',
        emoji: '🥶',
        choices: [
          { text: 'Awmi!', translation: 'Sim!', next: 'oque' },
          { text: 'Ananaw!', translation: 'Que cansaço!', wrong: 'Ela reclamou do frio. Concorde: “Awmi!”.' },
        ],
      },
      oque: {
        text: 'Imatan?',
        translation: 'O que é?',
        emoji: '❔',
        choices: [
          { text: 'Allqupaqku?', translation: 'É para o cachorro?', next: 'final' },
          { text: 'Nuqam.', translation: 'Sou eu.', wrong: 'Ela perguntou o que é, e não quem. Pergunte: “Allqupaqku?”.' },
        ],
      },
      final: {
        text: 'Allqupaqmi.',
        translation: 'É para o cachorro, sim.',
        emoji: '🐕',
        ending: { tone: 'bom', title: 'Allqupaqmi!', message: 'Você usou o -ku da pergunta e entendeu o -mi da resposta.' },
      },
    },
    glossary: [
      ['Alalaw!', 'que frio!'],
      ['Imatan?', 'o que é?'],
      ['Allqupaqku?', 'é para o cachorro?'],
      ['Allqupaqmi', 'é para o cachorro, sim'],
    ],
  },
  // [PAR]: “¿Maytan kanki?”, '¿Dónde estás?' (p. 147); “¿Pitaq shamuykan?”, '¿Quién está viniendo?', e
  // “Pablom”, 'Pablo' (p. 70); “¿Imatam rikarqayki?”, '¿Qué cosa viste?', e “Wayintam”, 'Su casa' (p. 70);
  // “Mesachawmi mikuyniki kaykan”, 'Tu comida está en la mesa' (p. 84); “Yosulpaaki”, 'Gracias', e
  // “¡Achacháw!”, '¡Qué pena!' (p. 72); “Pablo yakutam upyaykan”, 'Pablo está tomando agua' (p. 71). A
  // resposta “Hirkachawmi kaykaa” é do [WIKI].
  {
    id: 'huay1239-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Maytan kanki?',
    emoji: '🏡',
    summary: 'O Linu chega à casa de uma família em Huaraz, e a dona da casa quer saber de tudo.',
    cultural_context:
      'Nas perguntas, o quéchua de Áncash marca a palavra perguntada com -taq ou -tan: “Maytan kanki?”, onde você está? A resposta é só a informação nova, com o -m: “Pablom”, é o Pablo.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Maytan kanki?',
        translation: 'Onde você está?',
        emoji: '📞',
        choices: [
          { text: 'Hirkachawmi kaykaa.', translation: 'Estou no morro.', next: 'quem' },
          { text: 'Pablom.', translation: 'É o Pablo.', wrong: 'Ela perguntou onde você está. Responda: “Hirkachawmi kaykaa” (estou no morro).' },
        ],
      },
      quem: {
        text: 'Pitaq shamuykan?',
        translation: 'Quem está vindo?',
        emoji: '🚶',
        choices: [
          { text: 'Pablom.', translation: 'É o Pablo.', next: 'oque' },
          { text: 'Wayintam.', translation: 'A casa dele.', wrong: 'Ela perguntou quem está vindo. Responda com o nome: “Pablom”.' },
        ],
      },
      oque: {
        text: 'Imatam rikarqayki?',
        translation: 'O que você viu?',
        emoji: '👀',
        choices: [
          { text: 'Wayintam.', translation: 'A casa dele.', next: 'mesa' },
          { text: 'Pablom.', translation: 'É o Pablo.', wrong: 'Agora ela quer saber o que você viu, e não quem. Responda: “Wayintam” (a casa dele).' },
        ],
      },
      mesa: {
        text: 'Mesachawmi mikuyniki kaykan.',
        translation: 'A sua comida está na mesa.',
        emoji: '🍲',
        choices: [
          { text: 'Yosulpaaki.', translation: 'Obrigado.', next: 'final' },
          { text: 'Achacháw!', translation: 'Que pena!', wrong: 'Ela serviu a comida. Agradeça: “Yosulpaaki”.' },
        ],
      },
      final: {
        text: 'Pablo yakutam upyaykan.',
        translation: 'O Pablo está bebendo água.',
        emoji: '💧',
        ending: { tone: 'bom', title: 'Yosulpaaki!', message: 'Você respondeu ao “onde”, ao “quem” e ao “o quê” com o -m, e agradeceu como em Huaylas.' },
      },
    },
    glossary: [
      ['Maytan kanki?', 'onde você está?'],
      ['Pitaq shamuykan?', 'quem está vindo?'],
      ['Imatam rikarqayki?', 'o que você viu?'],
      ['mikuyniki', 'a sua comida'],
      ['Yosulpaaki', 'obrigado'],
    ],
  },
  // [PAR]: “Winchis”, 'Buenos días', e “¡Achacháw!” (p. 72); “¿Ayka watayoqtaq kanki?”, '¿Cuántos años
  // tienes?' (p. 147), e “Ishkay chunka watayoq kaa”, 'Tengo veinte años' (p. 94); “¡Upyarkushun!”,
  // '¡Brindemos!', '¡Salud!' (p. 126); “ichikllapa”, 'apenas, un poco' (p. 94); “Tushunaykita munaa”, 'Quiero
  // que bailes', “Tushuyta pweediitsu”, 'No puedo bailar', e “Tushuyta munaa”, 'Quiero bailar' (p. 164–165);
  // “Imanantsu”, 'No importa' (p. 137); “Qamchir tushunki”, 'Tú quizás bailarás pues' (p. 151). “Kima” e
  // “Ama!” são do pacote (Omniglot e Wikipédia). Grafia: watayoq → watayuq (a regra de vocabulario.ts).
  {
    id: 'huay1239-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Upyarkushun!',
    emoji: '💃',
    summary: 'Numa festa em Huaraz, um senhor puxa conversa com o Linu e quer vê-lo dançar.',
    cultural_context:
      'O -chi diz que quem fala está supondo: “Qamchir tushunki” é “acho que você vai dançar, então”. O -r do fim é como um “pois” ou um “então”.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Winchis!',
        translation: 'Bom dia!',
        emoji: '🌅',
        choices: [
          { text: 'Winchis!', translation: 'Bom dia!', next: 'idade' },
          { text: 'Achacháw!', translation: 'Que pena!', wrong: 'Ele deu bom dia. Devolva: “Winchis!”.' },
        ],
      },
      idade: {
        text: 'Ayka watayuqtaq kanki?',
        translation: 'Quantos anos você tem?',
        emoji: '🎂',
        choices: [
          { text: 'Ishkay chunka watayuq kaa.', translation: 'Tenho vinte anos.', next: 'brinde' },
          { text: 'Kima.', translation: 'Três.', wrong: 'Só “três” não diz a idade. Responda com “… watayuq kaa”: “Ishkay chunka watayuq kaa”.' },
        ],
      },
      brinde: {
        text: 'Upyarkushun!',
        translation: 'Saúde! (Vamos brindar!)',
        emoji: '🥂',
        choices: [
          { text: 'Ichikllapa.', translation: 'Só um pouquinho.', next: 'danca' },
          { text: 'Ama!', translation: 'Não! (proibição)', wrong: '“Ama” é para proibir alguém. Para aceitar pouco, diga “Ichikllapa”.' },
        ],
      },
      danca: {
        text: 'Tushunaykita munaa.',
        translation: 'Quero que você dance.',
        emoji: '🎶',
        choices: [
          { text: 'Tushuyta munaa.', translation: 'Quero dançar.', next: 'final' },
          { text: 'Tushuyta pweediitsu.', translation: 'Não consigo dançar.', next: 'consolo' },
        ],
      },
      consolo: {
        text: 'Imanantsu.',
        translation: 'Não tem importância.',
        emoji: '🤷',
        choices: [
          { text: 'Yosulpaaki.', translation: 'Obrigado.', next: 'final' },
          { text: 'Winchis!', translation: 'Bom dia!', wrong: 'O bom-dia já passou. Agradeça: “Yosulpaaki”.' },
        ],
      },
      final: {
        text: 'Qamchir tushunki.',
        translation: 'Acho que você vai dançar, então.',
        emoji: '💃',
        ending: { tone: 'bom', title: 'Upyarkushun!', message: 'Você disse a idade com -yuq, respondeu ao brinde e usou o “querer fazer”: “Tushuyta munaa”.' },
      },
    },
    glossary: [
      ['Winchis', 'bom dia'],
      ['Ayka watayuqtaq kanki?', 'quantos anos você tem?'],
      ['Upyarkushun!', 'saúde! vamos brindar!'],
      ['Ichikllapa', 'só um pouquinho'],
      ['Tushunaykita munaa', 'quero que você dance'],
      ['Imanantsu', 'não tem importância'],
    ],
  },
  // ══ B1 (17/10/2026). Cada fala em quéchua é uma frase do [PAR], com a página no comentário do nó e a
  // tradução de Parker passada para o português. As reações do leitor (“Achacháw!”, “Atataw!”, “Awmi”…) são
  // as palavras do pacote. As h6, h7 e h8 seguem contos que Parker cita aos pedaços no capítulo 7: as
  // frases são dele, mas a ordem entre elas é do curso, e o livro não traz os contos inteiros. Juntar as
  // frases num mesmo conto também é do curso, salvo onde Parker diz que são do mesmo conto (p. 156: a da
  // bruxa e a do condor); a summary e o cultural_context de cada uma avisam o leitor disso. Os contos
  // do Wikilibros da Incubadora não entraram: não têm tradução, e não há dicionário aberto do quéchua de
  // Áncash para conferir cada palavra (ver index.ts).
  //
  // h5: [PAR] p. 147 (“¿Maytaq libru?”, '¿Dónde está el libro?'), p. 172 (“Pununa hananchaw kaykan”;
  // “Purinqaa naani illakash”; “Mikunaykita munaa”, 'Quiero tu comida'; “Mikunqayki manam allitsu”), p. 146
  // (“Tsaychawran kaykan”, 'Está allí todavía'), p. 171 (“Partishqa keesu hitaraykan”; “Mikushqaa papa
  // pachaachaw kaykan”; “machashqa nunakuna”), p. 102 (“Musyaatsu pi kanqanta”; “Musyaa pununkanqanta”,
  // 'Sé que está durmiendo'), p. 101 (“pishipashqa wamra”; “Tushunaykipaq tokashaq”), p. 165 (“Tushunaykita
  // munaa”).
  {
    id: 'huay1239-h5',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Maytaq libru?',
    emoji: '📕',
    summary: 'O Linu procura um livro numa casa em Huaraz e acha um queijo, uma conversa sobre comida e alguém dormindo.',
    cultural_context:
      'Nesta história quase toda frase tem um verbo virado nome: “pununa” (o que serve para dormir, a cama), “mikushqaa” (o que comi), “mikunqayki” (o que você come).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Maytaq libru?',
        translation: 'Onde está o livro?',
        emoji: '📕',
        choices: [
          { text: 'Pununa hananchaw kaykan.', translation: 'Está em cima da cama.', next: 'queijo' },
          { text: 'Tsaychawran kaykan.', translation: 'Ainda está ali.', next: 'queijo' },
          { text: 'Purinqaa naani illakash.', translation: 'O caminho que eu andava desapareceu.', wrong: 'Perguntaram pelo livro, não pelo caminho. Diga onde ele está: “Pununa hananchaw kaykan” (está em cima da cama).' },
        ],
      },
      queijo: {
        text: 'Partishqa keesu hitaraykan.',
        translation: 'Tem um queijo partido jogado aí.',
        emoji: '🧀',
        choices: [
          { text: 'Mikunaykita munaa.', translation: 'Quero a sua comida.', next: 'comida' },
          { text: 'Musyaatsu pi kanqanta.', translation: 'Não sei quem é.', wrong: 'Falaram de um queijo, não de uma pessoa. Peça a comida: “Mikunaykita munaa”.' },
        ],
      },
      comida: {
        text: 'Mikunqayki manam allitsu.',
        translation: 'O que você come não é bom.',
        emoji: '🍽️',
        choices: [
          { text: 'Mikushqaa papa pachaachaw kaykan.', translation: 'A batata que comi está na minha barriga.', next: 'dorme' },
          { text: 'Tushunaykita munaa.', translation: 'Quero que você dance.', wrong: 'Ainda se fala de comida. Responda com o -shqa: “Mikushqaa papa pachaachaw kaykan”.' },
        ],
      },
      dorme: {
        text: 'Musyaa pununkanqanta.',
        translation: 'Sei que ele está dormindo.',
        emoji: '😴',
        choices: [
          { text: 'Pishipashqa wamra.', translation: 'É uma criança cansada.', next: 'final' },
          { text: 'Machashqa nunakuna.', translation: 'É gente bêbada.', next: 'final' },
        ],
      },
      final: {
        text: 'Tushunaykipaq tokashaq.',
        translation: 'Vou tocar para você dançar.',
        emoji: '🎸',
        ending: { tone: 'bom', title: 'Tushunaykipaq!', message: 'Você entendeu os verbos virados nome: -na (pununa), -shqa (mikushqaa, pishipashqa) e -nqa (mikunqayki, pununkanqanta).' },
      },
    },
    glossary: [
      ['pununa', 'cama'],
      ['keesu', 'queijo'],
      ['mikushqaa', 'o que eu comi'],
      ['mikunqayki', 'o que você come'],
      ['pishipashqa', 'cansado'],
    ],
  },
  // h6, o conto do puma e da moça. Parker só diz de que conto é a frase do puma que cuida da moça (p. 156–157,
  // com shipash como objeto); as outras ele cita sem dizer de onde, e o curso as junta pelo que contam (a
  // moça, a pitaia, o puma, a caverna). [PAR] p. 168 (“Shipasta kachanaq irkaman anyarta pallamunampaq”, 'Mandó
  // a la muchacha al cerro para recoger pitahaya'), p. 160 (“Anyarta pallaraykaptinshi, yana puma
  // yuririn”), p. 161 (“Yuririrninqa katakurkur heqatsikurin kweebanman”, 'Cuando apareció, cargándola sobre
  // el hombro, la llevó a su cueva'; “Tsaychawmi kawakullan asikurirnin, waqakurirnin, shunqun rurinchaw
  // llakikurirpis”; “Qoya waraqwan shaarikurirnin, millwanta hichikur, intita shuyan”), p. 156 (“Tsaychawmi
  // (puma) waatakunaq, uushata apaq, wallpata apaq, imayka aytsata faltatseqtsu”, com shipash 'la muchacha'
  // como objeto, segundo Parker) e p. 171 (“Tsaychawmi kawakullan tamya nuyushqa, aachachay rupashqa”,
  // 'Allí vive no más, mojada por la lluvia y quemada por el calor'). Reações: “Imanawshir!”, '¡Cómo puede
  // ser pues!' (p. 151); “Achacháw!” (p. 72); “Atataw!”, “Alalaw!”, “Awmi” (do pacote).
  {
    id: 'huay1239-h6',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Yana puma',
    emoji: '🐆',
    summary: 'Frases de contos que Parker cita aos pedaços, juntadas pelo curso num conto só: a moça que foi colher pitaia no morro e o puma preto.',
    cultural_context:
      'Cada fala em quéchua é uma frase do livro de Parker, com a tradução dele; juntá-las num conto e pôr nesta ordem foi escolha do curso. A pitaia (“anyar”) dá nos morros secos de Áncash. Repare no -pti (“pallaraykaptin”, quando ela colhia) e no -r (“shaarikurirnin”, levantando-se; “hichikur”, cardando).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Shipasta kachanaq irkaman anyarta pallamunampaq.',
        translation: 'Mandou a moça ao morro para colher pitaia.',
        emoji: '⛰️',
        choices: [
          { text: 'Awmi.', translation: 'Sim.', next: 'puma' },
          { text: 'Alalaw!', translation: 'Que frio!', wrong: 'Ninguém falou de frio: a moça foi colher pitaia. Siga o conto: “Awmi”.' },
        ],
      },
      puma: {
        text: 'Anyarta pallaraykaptinshi, yana puma yuririn.',
        translation: 'Quando ela estava colhendo pitaia, dizem, apareceu um puma preto.',
        emoji: '🐆',
        choices: [
          { text: 'Achacháw!', translation: 'Que pena!', next: 'caverna' },
          { text: 'Imanawshir!', translation: 'Como pode ser, pois!', next: 'caverna' },
          { text: 'Yosulpaaki.', translation: 'Obrigado.', wrong: 'Apareceu um puma: não é hora de agradecer. Diga “Achacháw!”.' },
        ],
      },
      caverna: {
        text: 'Yuririrninqa katakurkur hiqatsikurin kweebanman.',
        translation: 'Quando apareceu, carregou-a no ombro e a levou para a caverna dele.',
        emoji: '🕳️',
        choices: [
          { text: 'Achacháw!', translation: 'Que pena!', next: 'cuida' },
          { text: 'Winchis!', translation: 'Bom dia!', wrong: 'O puma levou a moça embora. Diga “Achacháw!” (que pena!).' },
        ],
      },
      cuida: {
        text: 'Tsaychawmi waatakunaq, uushata apaq, wallpata apaq, imayka aytsata faltatsiqtsu.',
        translation: 'Ali o puma cuidou dela: levava ovelhas, levava galinhas, não deixava faltar carne de nenhum tipo.',
        emoji: '🍖',
        choices: [
          { text: 'Awmi.', translation: 'Sim.', next: 'vive' },
          { text: 'Atataw!', translation: 'Que feio!', next: 'vive' },
        ],
      },
      vive: {
        text: 'Tsaychawmi kawakullan asikurirnin, waqakurirnin, shunqun rurinchaw llakikurirpis.',
        translation: 'Ali ela vive, rindo, chorando e com pena dentro do coração.',
        emoji: '💔',
        choices: [
          { text: 'Achacháw!', translation: 'Que pena!', next: 'chuva' },
          { text: 'Ama!', translation: 'Não! (proibição)', wrong: '“Ama” é para proibir alguém. Para ter pena da moça, diga “Achacháw!”.' },
        ],
      },
      chuva: {
        text: 'Tsaychawmi kawakullan tamya nuyushqa, aachachay rupashqa.',
        translation: 'Ali ela vive, molhada pela chuva e queimada pelo calor.',
        emoji: '🌧️',
        choices: [{ text: 'Achacháw!', translation: 'Que pena!', next: 'final' }],
      },
      final: {
        text: 'Quya waraqwan shaarikurirnin, millwanta hichikur, intita shuyan.',
        translation: 'Levantando-se de madrugada, cardando a lã, ela espera o sol.',
        emoji: '🌄',
        ending: { tone: 'bom', title: 'Intita shuyan', message: 'O livro de Parker não traz o fim do conto. Você acompanhou a moça com o -pti (pallaraykaptin) e o -r (shaarikurirnin, hichikur).' },
      },
    },
    glossary: [
      ['anyar', 'pitaia'],
      ['yana puma', 'puma preto'],
      ['kweeba', 'caverna'],
      ['millwa', 'lã'],
      ['shuyay', 'esperar'],
    ],
  },
  // h7, o conto do menino mentiroso. As frases das p. 159 e 113 são do leste (Parker as dá como das
  // províncias orientais e de Llamellín); as da p. 162 ele não localiza, mas têm o -naa e o -ski, que
  // são do leste (p. 111 e 127). [PAR] p. 162 (“Uushata
  // mitsikurqa kaykaanaa”, 'Estaba pastoreando las ovejas', com o -naa que é o -naq de Antonio Raimondi e
  // Huari, p. 111), p. 159 (“Taqayqa ardaymi yapay qayaykachaykaamun llullakur, manam kanan itsan
  // kaasushaatsu”, 'Aquel está llamando a propósito de nuevo pero ahora no le haré caso'; “Yarpachakunaa i
  // nin runaqa "kanan qayakamuptin itsanmi wanukuptinsi manam kutishaatsu"”; “Wamraqa yarpachakun i nin
  // "kananmi itsanqa llulla kayniipa, llapan uushaata oqraykuu"”; o “itsan” só nas províncias orientais),
  // p. 162 (“Runaqa manana munaykarqa, yarpachakuskir nin allawcha”, 'El hombre, sin querer ya, al pensarlo
  // dijo "¡Qué pena!"') e p. 113 (“Mana tsay runata llullapaaman karqan, llapan uushaata saanutami wayiiman
  // chaatsiiman karqan”, registrada em Llamellín). Os empréstimos ficam como no livro (“ardaymi”,
  // “kaasushaatsu”, “saanutami”).
  {
    id: 'huay1239-h7',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Llulla wamra',
    emoji: '🐑',
    summary: 'Frases do leste de Áncash que Parker cita aos pedaços, juntadas pelo curso num conto só: o menino que chamava de mentira enquanto pastoreava as ovelhas.',
    cultural_context:
      'Cada fala em quéchua é uma frase do livro de Parker, com a tradução dele; a ordem é do curso. Quase todas Parker registrou no leste de Áncash, a leste da Cordilheira Branca; as outras têm o -naa e o -ski de lá. Nelas, “pessoa” é “runa” (no resto do livro de Parker, “nuna”), e “itsan” quer dizer “mas”, uma palavra que Parker só registrou no leste.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Uushata mitsikurqa kaykaanaa.',
        translation: 'Estava pastoreando as ovelhas.',
        emoji: '🐑',
        choices: [
          { text: 'Awmi.', translation: 'Sim.', next: 'chama' },
          { text: 'Upyarkushun!', translation: 'Saúde! (Vamos brindar!)', wrong: 'Não é festa: o menino está no pasto com as ovelhas. Siga o conto: “Awmi”.' },
        ],
      },
      chama: {
        text: 'Taqayqa ardaymi yapay qayaykachaykaamun llullakur, manam kanan itsan kaasushaatsu.',
        translation: 'Aquele lá está chamando de novo de propósito, mentindo, mas agora não vou dar atenção.',
        emoji: '📢',
        choices: [
          { text: 'Atataw!', translation: 'Que feio!', next: 'pensa' },
          { text: 'Imanawshir!', translation: 'Como pode ser, pois!', next: 'pensa' },
          { text: 'Winchis!', translation: 'Bom dia!', wrong: 'O homem está bravo com o menino mentiroso. Diga “Atataw!” (que feio!).' },
        ],
      },
      pensa: {
        text: 'Yarpachakunaa i nin runaqa “kanan qayakamuptin itsanmi wanukuptinsi manam kutishaatsu”.',
        translation: 'O homem pensou e disse: “Agora, se ele chamar, mesmo que morra, não volto”.',
        emoji: '💭',
        choices: [
          { text: 'Achacháw!', translation: 'Que pena!', next: 'pena' },
          { text: 'Awmi.', translation: 'Sim.', next: 'pena' },
        ],
      },
      pena: {
        text: 'Runaqa manana munaykarqa, yarpachakuskir nin allawcha.',
        translation: 'O homem, já sem querer, pensando, disse: “Que pena!”.',
        emoji: '😔',
        choices: [{ text: 'Achacháw!', translation: 'Que pena!', next: 'perdeu' }],
      },
      perdeu: {
        text: 'Wamraqa yarpachakun i nin “kananmi itsanqa llulla kayniipa, llapan uushaata uqraykuu”.',
        translation: 'O menino pensa e diz: “Mas agora, por ser mentiroso, perdi todas as minhas ovelhas”.',
        emoji: '😢',
        choices: [
          { text: 'Achacháw!', translation: 'Que pena!', next: 'final' },
          { text: 'Imanantsu.', translation: 'Não tem importância.', wrong: 'Ele perdeu todas as ovelhas: tem importância, sim. Diga “Achacháw!”.' },
        ],
      },
      final: {
        text: 'Mana tsay runata llullapaaman karqan, llapan uushaata saanutami wayiiman chaatsiiman karqan.',
        translation: 'Se eu não tivesse mentido para aquele homem, teria levado todas as minhas ovelhas sãs para casa.',
        emoji: '🏠',
        ending: { tone: 'bom', title: 'Llulla kayniipa', message: 'Você leu o conto com o condicional passado (llullapaaman karqan, chaatsiiman karqan) e o -pti (qayakamuptin, wanukuptin).' },
      },
    },
    glossary: [
      ['llulla', 'mentiroso'],
      ['yarpachakuy', 'pensar'],
      ['uqraykuu', 'perdi'],
      ['itsan', 'mas (no leste)'],
      ['chaatsiiman karqan', 'eu teria levado'],
    ],
  },
  // h8, o conto da bruxa, do menino e do condor. Parker diz que a frase da bruxa (achikay) que procura o
  // menino (warma, o objeto) e a do condor que a chuta são do mesmo conto (p. 156); a do condor que a golpeia
  // enquanto o menino escapa (p. 150) conta a mesma cena. As do menino que acha o condor, da corda, do
  // zorrilho e do “ni kantsu” ele cita em outras páginas, sem dizer de que conto são: juntá-las aqui é do
  // curso. [PAR] p. 101 e 171 (“Wamraqa taririnaq naanichaw huk kondor ratarishqata”), p. 156
  // (“(Achikay) ashin, qayaykachan”, '(La bruja) lo busca y lo llama', com o menino, warma, como objeto;
  // “Tsayshi kondorqa haytakacharqunaq i sheqikacharqunaq”), p. 158 (“Ashin qayaykachan ni kantsu”, 'Lo
  // busca y lo llama y no hay'), p. 161 (“Bruha aywaraykaptinqa, kordelqa rachikurinaq”; “Yaykuykaptinqa
  // anasqa ishpapuykamunaq nawichaw”, 'Cuando entró (la bruja), el zorrillo le orinó en los ojos') e p. 150
  // (“Kondorqa sheqikacharqunaq tsayyaqshi wamraqa eskapakunaq”, 'El cóndor la golpeó mientras el niño
  // escapaba'). Grafia: sheqi- → shiqi- (a regra de vocabulario.ts); “nawi” sem o ñ, como no livro.
  {
    id: 'huay1239-h8',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Achikay',
    emoji: '🧙‍♀️',
    summary: 'O conto da bruxa que procura um menino, e do condor que o salva, com frases que Parker cita aos pedaços, na ordem escolhida pelo curso.',
    cultural_context:
      'Cada fala em quéchua é uma frase do livro de Parker, com a tradução dele; Parker diz que a da bruxa e a do condor são do mesmo conto, e o curso juntou as outras e escolheu a ordem. A “achikay” é a bruxa dos contos de Áncash. Repare no -naq em quase todo verbo e no -shi: quem conta não viu, só ouviu contar.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Wamraqa taririnaq naanichaw huk kondor ratarishqata.',
        translation: 'O menino encontrou no caminho um condor que tinha acabado de pousar.',
        emoji: '🦅',
        choices: [
          { text: 'Awmi.', translation: 'Sim.', next: 'bruxa' },
          { text: 'Ananaw!', translation: 'Que cansaço!', wrong: 'O conto mal começou! Siga: “Awmi”.' },
        ],
      },
      bruxa: {
        text: 'Achikay ashin, qayaykachan.',
        translation: 'A bruxa procura o menino e o chama.',
        emoji: '🧙‍♀️',
        choices: [
          { text: 'Atataw!', translation: 'Que feio!', next: 'ninguem' },
          { text: 'Yosulpaaki.', translation: 'Obrigado.', wrong: 'A bruxa está atrás do menino: não é hora de agradecer. Diga “Atataw!”.' },
        ],
      },
      ninguem: {
        text: 'Ashin qayaykachan ni kantsu.',
        translation: 'Procura, chama, e ele não está.',
        emoji: '🔍',
        choices: [
          { text: 'Imanawshir!', translation: 'Como pode ser, pois!', next: 'corda' },
          { text: 'Awmi.', translation: 'Sim.', next: 'corda' },
        ],
      },
      corda: {
        text: 'Bruha aywaraykaptinqa, kordelqa rachikurinaq.',
        translation: 'Enquanto a bruxa ia embora, a corda se rompeu.',
        emoji: '🪢',
        choices: [{ text: 'Achacháw!', translation: 'Que pena!', next: 'zorrilho' }],
      },
      zorrilho: {
        text: 'Yaykuykaptinqa anasqa ishpapuykamunaq nawichaw.',
        translation: 'Quando a bruxa entrou, o zorrilho fez xixi nos olhos dela.',
        emoji: '🦨',
        choices: [
          { text: 'Atataw!', translation: 'Que feio!', next: 'condor' },
          { text: 'Ananaw!', translation: 'Que cansaço!', wrong: 'Não é cansaço, é nojo! Diga “Atataw!” (que feio!).' },
        ],
      },
      condor: {
        text: 'Tsayshi kondorqa haytakacharqunaq i shiqikacharqunaq.',
        translation: 'Dizem que então o condor a chutou e a golpeou.',
        emoji: '🦅',
        choices: [{ text: 'Awmi!', translation: 'Sim!', next: 'final' }],
      },
      final: {
        text: 'Kondorqa shiqikacharqunaq tsayyaqshi wamraqa eskapakunaq.',
        translation: 'O condor golpeou a bruxa, e enquanto isso, dizem, o menino escapou.',
        emoji: '🏃',
        ending: { tone: 'bom', title: 'Eskapakunaq!', message: 'Você leu o conto como se contam os contos de Áncash: com o -naq (taririnaq, rachikurinaq, eskapakunaq) e o -shi (tsayshi, tsayyaqshi).' },
      },
    },
    glossary: [
      ['achikay', 'bruxa'],
      ['kondor', 'condor'],
      ['anas', 'zorrilho'],
      ['kordel', 'corda'],
      ['-naq', 'sem ter visto (nos contos)'],
    ],
  },
];
