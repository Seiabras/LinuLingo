import type { StorySeed } from '../types';

/**
 * Histórias interativas do karitiana, uma por subnível do A1.1 ao A2.2 (as do A2 estão no fim, com
 * as fontes de cada fala).
 * As falas combinam frases atestadas em pt.wikipedia.org/wiki/Língua_caritiana (citando Storto 1999,
 * Everett 2007 e Rocha 2014) com a regra documentada de que frases nominais em karitiana respondem a
 * uma pergunta com um substantivo “nu”, sem artigo — ver o cabeçalho de vocabulario.ts para a
 * explicação completa do método (nunca uma palavra ou regra nova inventada). Ambientadas na aldeia
 * Kyõwã e às margens do rio Candeias, na Terra Indígena Karitiana (RO).
 */
export const STORIES_KTN: StorySeed[] = [
  {
    id: 'ktn-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Go i haap, Kyõwã!',
    emoji: '🏞️',
    summary: 'De manhã na aldeia Kyõwã, alguém cumprimenta você e pergunta pela sua família.',
    cultural_context:
      'Kyõwã, a maior e mais antiga aldeia Karitiana, significa “boca (sorriso) de criança” — fica a cerca de 100 km de Porto Velho e é dividida ao meio pelo igarapé Sapoti, afluente do rio Candeias. É comum cumprimentar quem chega com “Go i haap!” (bom dia) ou “Go i mõnh!” (boa noite).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Go i haap!',
        translation: 'Bom dia!',
        emoji: '🌅',
        choices: [
          { text: 'Go i haap! Yryhon.', translation: 'Bom dia! Obrigado.', next: 'familia' },
          { text: 'Go i mõnh!', translation: 'Boa noite!', wrong: '“Go i mõnh” é a saudação da noite — de manhã, responda com “Go i haap!”.' },
        ],
      },
      familia: {
        text: 'Mãn. I sojt?',
        translation: 'Marido. A esposa dele?',
        emoji: '🤵',
        choices: [
          { text: 'I sojt.', translation: 'A esposa dele.', next: 'bicho' },
          { text: 'Ombyj.', translation: 'Avô, avó.', wrong: 'A pergunta foi sobre a esposa (sojt), não sobre o avô (ombyj). Responda “I sojt.”.' },
        ],
      },
      bicho: {
        text: 'Mõrãmõn onỹ?',
        translation: 'O que é aquilo ali?',
        emoji: '🤔',
        choices: [
          { text: 'Omãky.', translation: 'Onça.', next: 'final' },
          { text: "Pyse'an.", translation: 'Está bom.', wrong: 'Isso não nomeia o bicho. Responda só com o substantivo, sem artigo: “Omãky” (onça).' },
        ],
      },
      final: {
        text: "My'ari!",
        translation: 'Vamos!',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Yryhon, Kyõwã!',
          message: 'Você cumprimentou, falou da família (marido e esposa) e nomeou um bicho à distância, sem artigo — uma conversa simples de manhã na aldeia Kyõwã.',
        },
      },
    },
    glossary: [
      ['Go i haap', 'bom dia'],
      ['Sojt', 'esposa'],
      ['Mõrãmõn', 'o quê?, quem?'],
      ['Omãky', 'onça'],
    ],
  },
  {
    id: 'ktn-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Yj pyt ip, ese Candeias',
    emoji: '🐟',
    summary: 'Às margens do rio Candeias, depois de comer mandioca, você conta até cinco e nomeia um peixe.',
    cultural_context:
      'O rio Candeias é piscoso, e um dos principais rituais karitiana é a festa da jatuarana, celebrando a fartura desse peixe muito apreciado — pescado com rede, anzol, arco-e-flecha e também com timbó, um cipó que entorpece os peixes. A mandioca (gok), plantada em roças de coivara, é a base da alimentação do dia a dia.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ãn i-y gok-o hỹ?',
        translation: 'Você comeu a mandioca?',
        emoji: '🥔',
        choices: [
          { text: 'Ỹn naka-y-t gok.', translation: 'Eu comi a mandioca.', next: 'contagem' },
          { text: 'Yj pyt.', translation: 'Cinco (lit. “uma mão”).', wrong: 'Isso é um número, não responde se você comeu a mandioca. Responda “Ỹn naka-y-t gok.”.' },
        ],
      },
      contagem: {
        text: 'Mỹhĩn, sypõm, mỹnhỹm…?',
        translation: 'Um, dois, três… (pedindo para continuar a contagem)',
        emoji: '🖐️',
        choices: [
          { text: 'Otannỹmỹn, yj pyt.', translation: 'Quatro, cinco.', next: 'bicho' },
          { text: 'Omãky.', translation: 'Onça.', wrong: 'Isso é um bicho, não um número. Continue a contagem com “otannỹmỹn, yj pyt” (quatro, cinco).' },
        ],
      },
      bicho: {
        text: 'Mõrãmõn ka?',
        translation: 'O que é isso? (apontando um peixe)',
        emoji: '🐟',
        choices: [
          { text: 'Ip.', translation: 'Peixe.', next: 'final' },
          { text: 'Moroja.', translation: 'Cobra.', wrong: 'Isso é uma cobra (moroja), não o peixe. Responda “Ip.”.' },
        ],
      },
      final: {
        text: "My'ari!",
        translation: 'Vamos!',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Yj pyt ip!',
          message: 'Você contou até cinco, falou que comeu mandioca (gok) e nomeou um peixe (ip) às margens do rio Candeias — onde os Karitiana celebram a fartura de peixe na festa da jatuarana.',
        },
      },
    },
    glossary: [
      ['Gok', 'mandioca'],
      ['Mỹhĩn', 'um'],
      ['Yj pyt', 'cinco (lit. “uma mão”)'],
      ['Ip', 'peixe'],
    ],
  },
  // ══ A2.1 e A2.2 (17/10/2026) ══
  // Siglas como em vocabulario.ts. Todas as falas são frases das fontes, com a página; a única
  // montada é a resposta “Koboty.” à pergunta “Mõrãmõn ka?”, pela regra do A1 (pergunta atestada +
  // substantivo nu).
  {
    id: 'ktn-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: "Mora-mon taso ti-'y-t?",
    emoji: '🍠',
    summary: 'Na aldeia, alguém pergunta quem vai comer, o que o homem comeu e quando você vai à cidade comprar leite.',
    // ST19 p. 420–421 (crianças da aldeia aprendem karitiana como 1ª língua; o português é a 2ª língua
    // de todos na aldeia; os mais velhos falam menos português que os jovens).
    cultural_context:
      'Na aldeia central, o karitiana é a primeira língua das crianças, e o português é a segunda língua de todo mundo; os mais velhos têm mais dificuldade com o português do que os jovens (Storto, 2019). As perguntas desta conversa são de Luciana Storto (1999), que mostrou como a resposta muda de ordem conforme a pergunta: “quem?” põe a pessoa na frente; “o quê?” põe a coisa.',
    start: 'inicio',
    nodes: {
      inicio: {
        // ST99 p. 134, ex. 52a–c
        text: "Mora i-'y-j ohy?",
        translation: 'Quem vai comer batata-doce?',
        emoji: '❓',
        choices: [
          { text: "Taso naka-'y-j ohy.", translation: 'O homem vai comer batata-doce.', next: 'comeu' },
          {
            text: "Naka-'y-j ohy taso.",
            translation: '(verbo primeiro, o homem no fim)',
            wrong: 'Storto (1999) mostra que essa ordem não serve aqui: na resposta a “quem?”, a pessoa vem antes do verbo. Diga “Taso naka-\'y-j ohy.”.',
          },
        ],
      },
      comeu: {
        // ST99 p. 135, ex. 53a–c
        text: "Mora-mon taso ti-'y-t?",
        translation: 'O que o homem comeu?',
        emoji: '🍠',
        choices: [
          { text: "Ohy a-taka-'y-t taso.", translation: 'Batata-doce, o homem comeu.', next: 'amanha' },
          {
            text: "Taso naka-'y-t ohy.",
            translation: 'O homem comeu batata-doce.',
            wrong: 'A frase existe, mas Storto (1999) a acha estranha como resposta a “o quê?”: aqui a coisa comida vem primeiro, com “a-taka-”. Diga “Ohy a-taka-\'y-t taso.”.',
          },
        ],
      },
      amanha: {
        // ST99 p. 135, ex. 54a–b; a opção errada é MC10 p. 38, ex. 24
        text: 'Tikat a-ama-j leite-ty?',
        translation: 'Quando você vai comprar leite?',
        emoji: '🥛',
        choices: [
          { text: 'Dibm y-ta-ama-j leite-ty.', translation: 'Amanhã eu vou comprar leite.', next: 'final' },
          {
            text: 'Maria na-amang gok koot.',
            translation: 'Ontem a Maria plantou mandioca.',
            wrong: 'Essa frase fala de ontem (“koot”) e de plantar. A pergunta é “quando você vai comprar?”: responda com “dibm” (amanhã) e o verbo no futuro, com “-j”.',
          },
        ],
      },
      final: {
        // SUB p. 12, ex. 35
        text: "Y-ta-ahy-t yn y-pyt'y tykiri.",
        translation: 'Quando eu como, eu bebo.',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Dibm!',
          message: 'Você respondeu “quem?” com a pessoa na frente, “o quê?” com a coisa na frente e “quando?” com “dibm” e o futuro em “-j”, como nas frases de Luciana Storto.',
        },
      },
    },
    glossary: [
      ['Mora', 'quem? (grafia de Storto 1999)'],
      ['Ohy', 'batata-doce'],
      ['Dibm', 'amanhã'],
      ['Tykiri', 'quando (no fim da oração)'],
    ],
  },
  {
    id: 'ktn-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: "Morã i'y morã?",
    emoji: '🐒',
    summary: 'Com as páginas do Gopi Yjxa, você é um boto, descobre quem come quem na floresta e quem é caça e quem é caçador.',
    // GOPI pp. 31–38 e as traduções da p. 93; p. 90 (Introdução).
    cultural_context:
      'O “Gopi Yjxa” (2020), léxico ilustrado feito com a escola da aldeia Kyõwã, tem uma sequência de páginas com perguntas: “Onde você mora?”, “Quem come quem?”, “Quem é caça? Quem é caçador?”. A cadeia vai do sol às plantas, das plantas às caças e das caças às “mães da caça”, como a onça e o gavião-real. E termina com os bichinhos, as “mãezinhas da caça”, que comem todo mundo.',
    start: 'inicio',
    nodes: {
      inicio: {
        // GOPI p. 32 (tradução p. 93)
        text: 'Tihoot aka ano?',
        translation: 'Onde você mora? (você é um boto, “iphy”)',
        emoji: '🐬',
        choices: [
          { text: 'Ese pip.', translation: 'Na água.', next: 'come' },
          { text: 'Ejepi.', translation: 'Na terra.', wrong: 'O boto (“iphy”) não mora na terra: ele mora na água, “Ese pip”.' },
        ],
      },
      come: {
        // GOPI p. 36 e p. 28 (traduções pp. 93 e 92)
        text: "Morã i'y morã?",
        translation: 'Quem come quem? (apontando a roça de macaxeira)',
        emoji: '🌿',
        choices: [
          { text: "Mydo, sojxa, tym naka'yt gok.", translation: 'Cotia, queixada e cateto também comem macaxeira.', next: 'cupuacu' },
          { text: 'Kedo.', translation: 'Babaçu.', wrong: 'Isso só nomeia uma planta. A pergunta é quem come: responda com a frase do livro, “Mydo, sojxa, tym naka\'yt gok.”.' },
        ],
      },
      cupuacu: {
        // pergunta: A1 (pt.wikipedia.org/wiki/Língua_caritiana); resposta MONTADA (substantivo nu)
        text: 'Mõrãmõn ka?',
        translation: 'O que é isso? (um cupuaçu caído no chão)',
        emoji: '🥥',
        choices: [
          { text: 'Koboty.', translation: 'Cupuaçu.', next: 'caca' },
          { text: 'Iri.', translation: 'Açaí.', wrong: '“Iri” é o açaí, uma frutinha de palmeira. A fruta grande caída no chão é o cupuaçu, “koboty”.' },
        ],
      },
      caca: {
        // GOPI p. 37 (tradução p. 93); resposta SUB p. 8, ex. 19; a opção errada é MC10 p. 15, ex. 2
        text: 'Morã mot him? Morã mot pontidn?',
        translation: 'Quem é caça? Quem é caçador?',
        emoji: '🏹',
        choices: [
          { text: 'I na-aka-t i-pon tyka-t.', translation: 'Ele está caçando.', next: 'final' },
          { text: 'Na-ohit tyka-t õwã.', translation: 'A criança está pescando.', wrong: 'Pescar (“ohit”) não é caçar. Mostre o caçador: “I na-aka-t i-pon tyka-t.” (ele está caçando).' },
        ],
      },
      final: {
        // GOPI p. 38 (tradução p. 93)
        text: "Kida'it naka'yt iaka tym!",
        translation: 'As mãezinhas da caça comem todo mundo!',
        emoji: '🐜',
        ending: {
          tone: 'bom',
          title: 'Gopi Yjxa!',
          message: 'Você disse onde o boto mora (“Ese pip”), quem come a macaxeira, nomeou o cupuaçu e mostrou o caçador com o auxiliar “tyka”. No fim, os bichinhos, as “mãezinhas da caça”, comem todo mundo.',
        },
      },
    },
    glossary: [
      ['Tihoot aka ano?', 'Onde você mora? (tradução do Gopi Yjxa)'],
      ['Pip', 'em, para (depois do nome)'],
      ['Mydo', 'cotia'],
      ['Koboty', 'cupuaçu'],
      ['Him', 'caça'],
    ],
  },
];
