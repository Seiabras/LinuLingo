import type { StorySeed } from '../types';

/**
 * Histórias interativas do baniwa, uma por subnível do A1.1 ao A2.2.
 * As falas combinam palavras e construções atestadas em pt.wikipedia.org/wiki/Língua_baniwa (citando
 * Ramirez 2001a/2001b) com a palavra-base do vocabulário deste pacote — ver vocabulario.ts para a
 * explicação completa do método (nunca uma palavra nova inventada). Ambientadas em comunidades do
 * médio rio Içana, onde se fala baniwa no dia a dia.
 */
export const STORIES_KPC: StorySeed[] = [
  {
    id: 'kpc-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Káphaa phía Walimanai?',
    emoji: '🛶',
    summary: 'Sua canoa chega a uma comunidade do médio rio Içana, e alguém pergunta se você é walimanai.',
    cultural_context:
      'As comunidades baniwa se espalham ao longo do rio Içana e de afluentes como o Aiari e o Cuiari. Perguntar “de onde” ou “quem” alguém é, logo que a canoa chega, é um jeito comum de começar uma conversa — tanto quanto perguntar pela família de quem chegou.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Káphaa phía Walimanai?',
        translation: 'Você é walimanai?',
        emoji: '🛶',
        choices: [
          { text: 'Nhúa Walimanai.', translation: 'Eu sou walimanai.', next: 'pai' },
          { text: 'Théewa.', translation: 'Amanhã.', wrong: 'Isso não responde a pergunta sobre quem você é. Use o pronome independente: “Nhúa Walimanai.” (eu sou walimanai).' },
        ],
      },
      pai: {
        text: 'Wháa Walimanai! Kálhe phániri?',
        translation: 'Nós somos walimanai! Onde está o seu pai?',
        emoji: '👨',
        choices: [
          { text: 'Nhúniri édzaua.', translation: 'Meu pai está na terra firme.', next: 'canoa' },
          { text: 'Núitu.', translation: 'Minha filha.', wrong: 'A pergunta foi sobre o seu pai (hániri), não sobre uma filha (íitu). Responda com “Nhúniri” e onde ele está.' },
        ],
      },
      canoa: {
        text: 'Kenakúda íita?',
        translation: 'Quantas canoas?',
        emoji: '🤔',
        choices: [
          { text: 'Ápa íita.', translation: 'Uma canoa.', next: 'final' },
          { text: 'Dzamaápa palána.', translation: 'Duas bananas.', wrong: 'A pergunta foi sobre canoas (íita), não bananas (palána). Responda com um número seguido de “íita”.' },
        ],
      },
      final: {
        text: 'Núawa!',
        translation: 'Eu vou! (usado aqui como “vamos!”)',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Ápa íita no Içana',
          message: 'Você se apresentou como walimanai, falou do seu pai e contou as canoas — uma conversa simples de chegada numa comunidade do rio Içana.',
        },
      },
    },
    glossary: [
      ['Walimanai', 'baniwa (autodesignação do povo e da língua)'],
      ['hániri', 'pai'],
      ['íita', 'canoa'],
      ['kálhe', 'onde?'],
    ],
  },
  {
    id: 'kpc-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Nhúdua, núpheeri',
    emoji: '👩',
    summary: 'Uma conversa em casa, na terra firme: a família e o rio, com seus cachorros e suas onças.',
    cultural_context:
      'A água do Içana é notavelmente fria em certos trechos, e onças (“dzáawi”) fazem parte das histórias contadas à beira do rio — reconhecer “hápe” (frio) e “dzáawi” (onça) ajuda quem está aprendendo a prestar atenção na natureza ao redor das comunidades.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Kálhe phádua?',
        translation: 'Onde está a sua mãe?',
        emoji: '👩',
        choices: [
          { text: 'Nhúdua édzaua.', translation: 'Minha mãe está na terra firme.', next: 'irmaos' },
          { text: 'Nhúniri.', translation: 'Meu pai.', wrong: 'A pergunta foi sobre a sua mãe (hádua), não o seu pai (hániri). Responda com “Nhúdua”.' },
        ],
      },
      irmaos: {
        // MONTADA (revisão de 17/10/2026): kenakóda, quantos (R01b p. 171) + pí-pheeri, teu irmão maior (p. 375)
        text: 'Kenakúda pípheeri?',
        translation: 'Quantos irmãos mais velhos você tem?',
        emoji: '🧑',
        choices: [
          // MONTADA: o numeral leva o classificador de homem “-hípa” (aphépa atsíanli, 1 homem, R01b p. 50;
          // dzamhépa, 2 homens, R01a p. 210) + nópheeri (R01b p. 375) e nomhéreeri (p. 219)
          { text: 'Aphépa núpheeri, dzamhépa numhéreeri.', translation: 'Um irmão mais velho, dois irmãos mais novos.', next: 'cachorro' },
          { text: 'Ñáme.', translation: 'Não, negado.', wrong: 'Isso nega a pergunta inteira, mas ela pediu uma quantidade. Responda com um número e “núpheeri” (meu irmão mais velho).' },
        ],
      },
      cachorro: {
        text: 'Nukápa tsíinu. Hápe úuni!',
        translation: 'Eu vejo um cachorro. A água está fria!',
        emoji: '🐕',
        choices: [
          { text: 'Hápe úuni. Ñáme dzáawi.', translation: 'A água está fria. Não há onça.', next: 'final' },
          { text: 'Kéepe tsíinu.', translation: 'O cachorro é gordo.', wrong: 'Isso fala do cachorro estar gordo, não do frio da água nem da onça. Diga “Hápe úuni.” e “Ñáme dzáawi.” (não há onça).' },
        ],
      },
      final: {
        text: 'Núawa!',
        translation: 'Eu vou! (usado aqui como “vamos!”)',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Nhúdua, núpheeri',
          message: 'Você falou da sua família e ficou de olho no rio — “hápe” (frio) e “dzáawi” (onça) são boas palavras para prestar atenção na natureza do Içana.',
        },
      },
    },
    glossary: [
      ['hádua', 'mãe'],
      ['pheeri', 'irmão mais velho'],
      ['hápe', 'frio, está frio'],
      ['dzáawi', 'onça'],
    ],
  },
  // ══ A2.1 e A2.2 (17/10/2026) ══
  // Falas do “Dicionário da Língua Baniwa” de Henri Ramirez (2001), R01b, com a página ao lado; grafia
  // com “u” no lugar do “o” do dicionário (mesma vogal). Duas falas da kpc-h3 foram MONTADAS, e o
  // comentário ao lado diz a regra.
  {
    id: 'kpc-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Heekúapi whaa!',
    emoji: '🌄',
    summary: 'De manhã cedo, numa casa do médio Içana, alguém te chama para comer.',
    // R01b p. 99 (heekóapi whaa! bom dia!; heekóapi: luz do dia, dia, amanhecer)
    cultural_context:
      'No dicionário de Ramirez, “heekúapi” é a luz do dia, o dia e também o amanhecer. Por isso o bom-dia, “Heekúapi whaa!”, soa como “amanhecemos”. Entre os exemplos do mesmo dicionário está o convite “Pínu píiñha núinai!” (venha comer comigo!).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Heekúapi whaa!', // R01b p. 99
        translation: 'Bom dia!',
        emoji: '🌄',
        choices: [
          { text: 'Heekúapi whaa!', translation: 'Bom dia!', next: 'comer' },
          { text: 'Wémeenapã líudza!', translation: 'Boa noite!', wrong: '“Wémeenapã líudza!” é a despedida da noite (Ramirez, p. 137). De manhã, responda “Heekúapi whaa!”.' },
        ],
      },
      comer: {
        text: 'Pínu píiñha núinai!', // R01b p. 124 (píno píiñha nóinai!)
        translation: 'Venha comer comigo!',
        emoji: '🍽️',
        choices: [
          { text: 'Mátsia pidzeekátaka núlhiu!', translation: 'Obrigado!', next: 'triste' }, // R01b p. 212
          { text: 'Pikápa nhua.', translation: 'Tu me vês.', wrong: 'Isso quer dizer “tu me vês”. Para aceitar o convite, agradeça: “Mátsia pidzeekátaka núlhiu!”.' },
        ],
      },
      triste: {
        // MONTADA: “káphaa” abre a pergunta de sim ou não (tópico kpc-g2) + “iinúnaa phia”, estás triste (R01b p. 11)
        text: 'Káphaa iinúnaa phia?',
        translation: 'Você está triste?',
        emoji: '🤔',
        choices: [
          // MONTADA: “ñáme”, não (R01a p. 162) + “nímheeni mátsia”, dormi bem (R01b p. 137)
          { text: 'Ñáme. Nímheeni mátsia.', translation: 'Não. Dormi bem.', next: 'final' },
          { text: 'Iinúnaa nhua.', translation: 'Estou triste.', next: 'consolo' }, // R01b p. 11
        ],
      },
      consolo: {
        text: 'Mainunáakatsa!', // R01b p. 127 (mainonáakatsa! não fiques triste!)
        translation: 'Não fique triste!',
        emoji: '🤗',
        choices: [
          { text: 'Mátsia pidzeekátaka núlhiu!', translation: 'Obrigado!', next: 'final' },
          { text: 'Núidza, píidza, wáidza.', translation: 'Eu choro, tu choras, nós choramos.', wrong: 'Isso é só a conjugação de “chorar”. Agradeça o consolo: “Mátsia pidzeekátaka núlhiu!”.' },
        ],
      },
      final: {
        text: 'Pándzanialihi, wáa wáiñha!', // R01b p. 254
        translation: 'Agora, vamos comer!',
        emoji: '🐟',
        ending: {
          tone: 'bom',
          title: 'Wáa wáiñha!',
          message: 'Você respondeu o bom-dia, aceitou o convite e disse como estava. Agora é hora de comer junto.',
        },
      },
    },
    glossary: [
      ['heekúapi whaa', 'bom dia'],
      ['píiñha', 'comes (de -íiñha, comer)'],
      ['iinúnaa', 'triste'],
      ['nímheeni', 'dormi'],
      ['mainunáakatsa', 'não fique triste'],
    ],
  },
  {
    id: 'kpc-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Pándza, théewa',
    emoji: '🎣',
    summary: 'Um vizinho fala do dia de hoje, de uma pescaria e das onças que sumiram do rio.',
    // R01b p. 99 (wáa waitsaléta…), p. 254 (pándza ñámeetsa pakápa dzáawi)
    cultural_context:
      'Pescar é parte do dia a dia no rio Içana, e uma pescaria pode durar dias. Nos exemplos do dicionário de Ramirez aparecem as duas coisas: a viagem de pesca e uma mudança no rio, as onças que já não se veem.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Kúaka heekúapika pándza?', // R01b p. 99
        translation: 'Que dia é hoje?',
        emoji: '📅',
        choices: [
          { text: 'Míitsheehe pándza.', translation: 'Hoje é domingo.', next: 'pesca' }, // R01b p. 99
          { text: 'Meédzami líukawa.', translation: 'Chegou anteontem.', wrong: 'Isso conta quando alguém chegou. A pergunta é que dia é hoje: “Míitsheehe pándza.” (hoje é domingo).' },
        ],
      },
      pesca: {
        text: 'Wáa waitsaléta, wádia watsa dzamádaa heekúapi íphumitte.', // R01b p. 99
        translation: 'Nós vamos pescar; voltaremos depois de dois dias.',
        emoji: '🛶',
        choices: [
          { text: 'Nuakawátsa nuitsaléta théewa.', translation: 'Vou pescar amanhã.', next: 'onca' }, // R01b p. 286
          { text: 'Nímheeni mátsia.', translation: 'Dormi bem.', wrong: 'Isso fala do seu sono. Conte quando você vai pescar: “Nuakawátsa nuitsaléta théewa.” (vou pescar amanhã).' },
        ],
      },
      onca: {
        text: 'Káphaa pikápakeena dzáawi?', // R01b p. 124
        translation: 'Você já viu uma onça?',
        emoji: '🐆',
        choices: [
          { text: 'Pándza ñámeetsa pakápa dzáawi.', translation: 'Não se veem mais onças em nossa época.', next: 'final' }, // R01b p. 254
          { text: 'Lhiétahã atsíanli.', translation: 'Aquele homem lá.', wrong: 'Isso aponta para um homem longe. A pergunta é sobre onças: “Pándza ñámeetsa pakápa dzáawi.”.' },
        ],
      },
      final: {
        text: 'Wárheena wádiawa!', // R01b p. 124
        translation: 'Vamos já voltar!',
        emoji: '🏘️',
        ending: {
          tone: 'bom',
          title: 'Théewa, nuitsaléta',
          message: 'Você disse que dia era, combinou a pescaria de amanhã e contou que as onças já não aparecem. Hora de voltar para o povoado.',
        },
      },
    },
    glossary: [
      ['pándza', 'agora; hoje (no futuro)'],
      ['théewa', 'amanhã'],
      ['-itsaléta', 'pescar'],
      ['ñámeetsa', 'não… mais'],
      ['dzáawi', 'onça'],
    ],
  },
];
