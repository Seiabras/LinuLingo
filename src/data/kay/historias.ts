import type { StorySeed } from '../types';

/**
 * Histórias interativas do kamaiurá — uma por subnível, do A1.1 ao A2.2. Ambientadas
 * na aldeia kamaiurá à beira da lagoa Ipavu (Ypawu), no Parque Indígena do Xingu (Seki 2000, pp. 31–35;
 * pib.socioambiental.org, «Kamaiurá»). As personagens são fictícias e só dizem frases da gramática de
 * Seki ou trocas mínimas de uma palavra num molde atestado:
 * - h1: «Haaa, erejo ko'yt?» / «Ajo ko'yt» (texto de Arawitará, linhas 16–17); «Awa ene?» / «Ije …»
 *   (797); «Kamajura ako» (798a); «Jene retama» (texto de Arawitará, linha 27); «Ejot ekarum» (73,
 *   «vem comer»); «Aje» (231); «Tata heny» (1436a).
 * - h2: «Ka'arukamuẽ tete aha 'yp» (137); «Po ipira a'ep?» (521); numerais (107); «Jawara oy'u» (424);
 *   «Aha ko'yt» (214); «Amana okywe» (142); «Je juru» (molde de (3a)).
 * - h3 (A2.1): «Po ne pyt?» (498) p. 160; «Na je pyrite» (1230) p. 330; «Je pyra amoete» (515) p. 163;
 *   «Mame ne ra'yra rekow?» (519) p. 164; «Amoete ikow» (99b) p. 77; «Ejot ekarum» (73) p. 73; «Aje»
 *   (231); «Je tutyra morerekwara» (449) p. 151; «Ne ramỹja ke eraha» (290) p. 117; «Erekaruem» (841).
 * - h4 (A2.2): «Mametuamuẽ ereyk? — Ko'emamuẽ ayk» (789) p. 219; «O'iran aha pinamomoten» (216) p. 99;
 *   «Maramuẽ ko katy ereo?» (764) p. 215; «Arehe ahan» (477) p. 157; «Peje'atamen ka'a rupin
 *   ypytunimen» (857) p. 235; «Moĩa 'aŋ o'up yupawa reme'yp» (1369) p. 363; «Ikue rak ikeri» (96) p. 76;
 *   «Anite pakua pem» (1246) p. 333; respostas a ordens com aje (858) p. 235.
 * O jogador escolhe sempre a fala do Linu; nenhuma personagem decide por ele.
 */
export const STORIES_KAY: StorySeed[] = [
  {
    id: 'kay-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: "Erejo ko'yt? Chegando à aldeia",
    emoji: '👋',
    summary: 'O Linu chega à aldeia kamaiurá, na beira da lagoa Ipavu, e uma senhora o recebe à moda da casa.',
    cultural_context:
      'A aldeia kamaiurá fica perto da lagoa Ipavu (Ypawu), no Parque Indígena do Xingu, em Mato Grosso. As casas grandes, de planta oval e cobertas de sapé, ficam em roda em volta de um pátio; a comida do dia a dia é o beiju de mandioca e o peixe. Quem chega não ouve um “oi”: ouve “Erejo ko\'yt?” — você veio?',
    start: 'inicio',
    nodes: {
      inicio: {
        text: "Haaa, erejo ko'yt?",
        translation: 'Ah! Você veio?',
        emoji: '👵',
        choices: [
          { text: "Ajo ko'yt.", translation: 'Eu vim.', next: 'quem' },
          { text: 'Anite.', translation: 'Não.', wrong: "Você acabou de chegar — a resposta para “Erejo ko'yt?” é “Ajo ko'yt” (eu vim)." },
        ],
      },
      quem: {
        text: 'Awa ene?',
        translation: 'Quem é você?',
        emoji: '❓',
        choices: [
          { text: 'Ije Linu.', translation: 'Eu sou o Linu.', next: 'aldeia' },
          { text: 'Mam?', translation: 'Onde?', wrong: '“Awa” é “quem”, não “onde”. Ela quer saber quem você é: responda “Ije…” com o seu nome.' },
        ],
      },
      aldeia: {
        text: 'Kamajura ako. Jene retama.',
        translation: 'Eu sou kamaiurá. Esta é a nossa aldeia (sua também).',
        emoji: '🏘️',
        choices: [
          { text: "He'ẽ!", translation: 'Sim!', next: 'comer' },
          { text: 'Kõ.', translation: 'Não sei.', wrong: 'Ela não te perguntou nada difícil: está te dando as boas-vindas. Concorde com “he\'ẽ”.' },
        ],
      },
      comer: {
        text: 'Ejot ekarum!',
        translation: 'Venha comer!',
        emoji: '🫓',
        choices: [
          { text: 'Aje.', translation: 'Está bem.', next: 'final' },
          { text: 'Haj.', translation: 'Pois não?', wrong: '“Haj” é para responder a quem chama você. Para aceitar um convite, diga “Aje” (está bem).' },
        ],
      },
      final: {
        text: 'Tata heny.',
        translation: 'O fogo está aceso.',
        emoji: '🔥',
        ending: {
          tone: 'bom',
          title: "Ajo ko'yt!",
          message: 'Você chegou à aldeia kamaiurá, disse quem é e aceitou o beiju em volta do fogo.',
        },
      },
    },
    glossary: [
      ["erejo ko'yt / ajo ko'yt", 'você veio? / eu vim'],
      ['awa ene?', 'quem é você?'],
      ['jene retama', 'a nossa aldeia (com você)'],
      ['ejot ekarum', 'venha comer'],
      ['aje', 'está bem'],
    ],
  },
  {
    id: 'kay-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Na beira da lagoa Ipavu',
    emoji: '🐟',
    summary: 'Um menino kamaiurá leva o Linu para pescar na lagoa, e um bicho grande aparece na margem.',
    cultural_context:
      'Os povos do Alto Xingu vivem mais da pesca do que da caça, e a lagoa Ipavu é o centro da vida kamaiurá: ali se pesca, se toma banho e se atravessa de canoa. Na mata em volta vivem a onça, a anta e o jacaré, que aparecem em muitas histórias contadas na aldeia.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: "Ka'arukamuẽ tete aha 'yp.",
        translation: 'Toda tarde eu vou à água (à lagoa).',
        emoji: '👦',
        choices: [
          { text: "Po ipira a'ep?", translation: 'Lá tem peixe?', next: 'peixe' },
          { text: 'Awa ene?', translation: 'Quem é você?', wrong: 'Ele está falando da lagoa, e você já sabe quem ele é. Pergunte se lá tem peixe: “Po ipira a\'ep?”.' },
        ],
      },
      peixe: {
        text: "He'ẽ! Mojepete, mokõj, mo'apyt…",
        translation: 'Sim! Um, dois, três…',
        emoji: '🎣',
        choices: [
          { text: "Mojo'irũ, jenepomomap!", translation: 'Quatro, cinco!', next: 'onca' },
          { text: 'Jenepopap, mokõj.', translation: 'Dez, dois.', wrong: "Ele está contando os peixes um a um: depois de “mo'apyt” (três) vêm “mojo'irũ” (quatro) e “jenepomomap” (cinco)." },
        ],
      },
      onca: {
        text: "Jawara oy'u!",
        translation: 'A onça está bebendo água!',
        emoji: '🐆',
        choices: [
          { text: "Aha ko'yt!", translation: 'Já vou! (estou indo embora)', next: 'final' },
          { text: 'Je juru.', translation: 'A minha boca.', wrong: 'Tem uma onça bebendo água ali na margem! Não é hora de falar da sua boca: diga que já vai.' },
        ],
      },
      final: {
        text: 'Amana okywe.',
        translation: 'E ainda está chovendo.',
        emoji: '🌧️',
        ending: {
          tone: 'bom',
          title: 'Ipira, jawat, aman!',
          message: 'Você contou cinco peixes, viu uma onça bebendo água na lagoa e voltou para a aldeia debaixo de chuva.',
        },
      },
    },
    glossary: [
      ["po ipira a'ep?", 'lá tem peixe?'],
      ["mojepete, mokõj, mo'apyt, mojo'irũ, jenepomomap", 'um, dois, três, quatro, cinco'],
      ["jawara oy'u", 'a onça está bebendo água'],
      ['amana okywe', 'ainda está chovendo'],
    ],
  },
  {
    id: 'kay-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Na casa da família',
    emoji: '🏡',
    summary: 'Uma senhora kamaiurá conversa com o Linu sobre casa e família, e no fim apresenta o tio, que é o chefe.',
    cultural_context:
      'Na aldeia kamaiurá, cada casa grande abriga uma família extensa, e o dono da casa organiza o trabalho dos parentes. Em kamaiurá, parente sempre tem dono: não se diz “o tio”, e sim “je tutyt”, o meu tio. Com alguns parentes por casamento, como o sogro, a regra é de respeito: não se diz o nome da pessoa.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Po ne pyt?',
        translation: 'Você tem casa?',
        emoji: '👵',
        choices: [
          { text: 'Na je pyrite.', translation: 'Eu não tenho casa.', next: 'longe' },
          { text: 'Erekaruem!', translation: 'Não coma!', wrong: 'Ela fez uma pergunta, não está comendo nada. Responda que não tem casa: “Na je pyrite”, com o “na… -ite” que envolve a palavra.' },
        ],
      },
      longe: {
        text: 'Je pyra amoete.',
        translation: 'A minha casa fica longe.',
        emoji: '🏠',
        choices: [
          { text: "Mame ne ra'yra rekow?", translation: 'Onde está o teu filho?', next: 'filho' },
          { text: 'Na je pyrite.', translation: 'Eu não tenho casa.', wrong: 'Você já disse isso. Agora pergunte da família dela: “Mame ne ra\'yra rekow?” (onde está o teu filho?).' },
        ],
      },
      filho: {
        text: 'Amoete ikow. Ejot ekarum!',
        translation: 'Ele está longe. Venha comer!',
        emoji: '🫓',
        choices: [
          { text: 'Aje.', translation: 'Está bem.', next: 'tio' },
          { text: 'Ne ramỹja ke eraha.', translation: 'Leve o teu avô.', wrong: 'Ela convidou você para comer. Não é hora de dar ordens: aceite com “Aje”.' },
        ],
      },
      tio: {
        text: 'Je tutyra morerekwara.',
        translation: 'O meu tio é o chefe.',
        emoji: '👑',
        ending: {
          tone: 'bom',
          title: 'Je tutyt, je pyt',
          message: 'Você falou de casa e de família com o dono antes de cada palavra, aceitou o convite para comer e conheceu o tio da senhora, que é o chefe.',
        },
      },
    },
    glossary: [
      ['po ne pyt?', 'você tem casa?'],
      ['na je pyrite', 'eu não tenho casa'],
      ["mame ne ra'yra rekow?", 'onde está o teu filho?'],
      ['amoete ikow', 'ele está longe'],
      ['je tutyra morerekwara', 'o meu tio é o chefe'],
    ],
  },
  {
    id: 'kay-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Amanhã, pesca na lagoa',
    emoji: '🎣',
    summary: 'Um amigo kamaiurá pergunta quando o Linu chegou, combina a pescaria e avisa dos perigos da mata à noite.',
    cultural_context:
      'O dia kamaiurá é marcado pelo sol: “kwara emamuẽ”, quando o sol sai; “ywate kwara”, o sol alto; “kwara jup”, o sol amarelo do fim da tarde. A pesca é a principal fonte de comida, e a lagoa Ipavu fica perto da aldeia.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Mametuamuẽ ereyk?',
        translation: 'Quando você chegou? (onde estava o sol?)',
        emoji: '👦',
        choices: [
          { text: "Ko'emamuẽ ayk.", translation: 'Cheguei de manhã.', next: 'pesca' },
          { text: 'Ikue rak ikeri.', translation: 'Ele dormiu ontem.', wrong: 'Ele quer saber de você, e de quando você chegou. Responda pelo sol: “Ko\'emamuẽ ayk” (cheguei de manhã).' },
        ],
      },
      pesca: {
        text: "O'iran aha pinamomoten.",
        translation: 'Amanhã irei pescar.',
        emoji: '🐟',
        choices: [
          { text: 'Maramuẽ ko katy ereo?', translation: 'Quando você vai à roça?', next: 'hoje' },
          { text: 'Anite pakua pem.', translation: 'Lá não há paca.', wrong: 'Ele falou de pescar, não de caçar paca. Pergunte da roça: “Maramuẽ ko katy ereo?”.' },
        ],
      },
      hoje: {
        text: "Arehe ahan. Peje'atamen ka'a rupin ypytunimen!",
        translation: 'Irei hoje. Não andem pelo mato à noite!',
        emoji: '🌃',
        choices: [
          { text: 'Aje.', translation: 'Está bem.', next: 'final' },
          { text: "Ko'emamuẽ ayk.", translation: 'Cheguei de manhã.', wrong: 'Ele deu um conselho, uma ordem. Concorde com “Aje” (sim, de acordo).' },
        ],
      },
      final: {
        text: "Moĩa 'aŋ o'up yupawa reme'yp.",
        translation: 'A cobra está na margem da lagoa.',
        emoji: '🐍',
        ending: {
          tone: 'bom',
          title: "O'iran!",
          message: 'Você disse quando chegou pelo jeito kamaiurá, combinou a pescaria de amanhã e aceitou o conselho de não andar pelo mato à noite — com uma cobra na margem da lagoa, ainda bem.',
        },
      },
    },
    glossary: [
      ['mametuamuẽ ereyk?', 'quando você chegou?'],
      ["ko'emamuẽ ayk", 'cheguei de manhã'],
      ["o'iran aha pinamomoten", 'amanhã irei pescar'],
      ['maramuẽ ko katy ereo?', 'quando você vai à roça?'],
      ["peje'atamen ka'a rupin ypytunimen", 'não andem pelo mato à noite'],
    ],
  },
];
