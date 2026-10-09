import type { StorySeed } from '../types';

/** Histórias interativas do esperanto — A1.1 ao A2.2, pacote incompleto (ver `incomplete` em index.ts). */
export const STORIES_EO: StorySeed[] = [
  {
    id: 'eo-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Saluton en la Kongreso',
    emoji: '👋',
    summary: 'Você chega a um Congresso Mundial de Esperanto e conhece Petro, outro congressista, no saguão do hotel.',
    cultural_context: 'O Universala Kongreso (Congresso Mundial de Esperanto) acontece todo ano, num país diferente, desde 1905 — reúne milhares de falantes de dezenas de países, tudo em esperanto, sem precisar de tradutor.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Saluton! Kio estas via nomo?',
        translation: 'Olá! Qual é o seu nome?',
        emoji: '🙋‍♂️',
        choices: [
          { text: 'Mia nomo estas Ana. Kaj via?', translation: 'Meu nome é Ana. E o seu?', next: 'nome' },
          { text: 'Adiaŭ!', translation: 'Tchau!', wrong: 'Petro acabou de te perguntar seu nome — despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      nome: {
        text: 'Mi nomiĝas Petro. Ĉu vi parolas Esperanton de longe?',
        translation: 'Eu me chamo Petro. Você fala esperanto há muito tempo?',
        emoji: '😊',
        choices: [
          { text: 'Jes, mi lernas Esperanton.', translation: 'Sim, eu estudo esperanto.', next: 'final_bo' },
          { text: 'La pano estas bona.', translation: 'O pão é bom.', wrong: 'Isso não responde sobre há quanto tempo você fala esperanto. Tente "Jes…" ou "Ne…".' },
        ],
      },
      final_bo: {
        text: 'Bonege! Dankon, kaj bonan kongreson, Ana!',
        translation: 'Ótimo! Obrigado, e bom congresso, Ana!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Um novo amigo!', message: 'Petro sorri: você fez a sua primeira conversa em esperanto, num Congresso Mundial de verdade.' },
      },
    },
    glossary: [
      ['saluton / adiaŭ', 'olá / tchau'],
      ['mia nomo estas… / mi nomiĝas…', 'meu nome é… / eu me chamo…'],
      ['dankon', 'obrigado'],
    ],
  },
  {
    id: 'eo-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'En la domo de Petro',
    emoji: '🏠',
    summary: 'Você visita a casa do seu novo amigo Petro e conta um pouco sobre a sua própria família.',
    cultural_context: 'Algumas famílias esperantistas criam os filhos falando esperanto desde o nascimento, como mais uma língua materna — são os "denaskuloj" (falantes nativos de esperanto), um grupo pequeno mas real, com algumas centenas a poucos milhares de pessoas no mundo.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Saluton! Ĉu vi havas fratojn?',
        translation: 'Olá! Você tem irmãos?',
        emoji: '📜',
        choices: [
          { text: 'Jes, mi havas unu fraton kaj unu fratinon.', translation: 'Sim, eu tenho um irmão e uma irmã.', next: 'fam' },
          { text: 'Mia domo estas granda.', translation: 'Minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use "jes, mi havas…" ou "ne".' },
        ],
      },
      fam: {
        text: 'Bonege! Kaj kia estas via domo?',
        translation: 'Ótimo! E como é a sua casa?',
        emoji: '🏠',
        choices: [
          { text: 'Mia domo estas malgranda sed bona.', translation: 'Minha casa é pequena mas boa.', next: 'final_bo' },
          { text: 'Dek jaroj.', translation: 'Dez anos.', wrong: 'Isso não descreve a sua casa. Fale sobre ela: "mia domo…"' },
        ],
      },
      final_bo: {
        text: 'Interese! Bonvenon al mia domo!',
        translation: 'Interessante! Seja bem-vindo(a) à minha casa!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Uma nova amizade!', message: 'Petro gostou de saber da sua família — e já te deu as boas-vindas à casa dele.' },
      },
    },
    glossary: [
      ['frato / fratino', 'irmão / irmã'],
      ['mia domo', 'minha casa'],
      ['havi (mi havas)', 'ter (eu tenho)'],
    ],
  },
  {
    id: 'eo-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Malvarma tago en la kongreso',
    emoji: '🥶',
    summary: 'Num dia frio do Congresso Mundial, você encontra sua amiga Lara na vendejo (loja) do hotel e conversa sobre o tempo e a roupa.',
    cultural_context: 'Os Congressos Mundiais de Esperanto acontecem em cidades diferentes todo ano — às vezes em climas bem frios, como já aconteceu em Reykjavík e em Montreal.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Saluton! Estas tiel malvarme hodiaŭ, ĉu ne?',
        translation: 'Olá! Está tão frio hoje, não é?',
        emoji: '🥶',
        choices: [
          { text: 'Jes, kaj la vento estas forta.', translation: 'Sim, e o vento está forte.', next: 'vesto' },
          { text: 'Mi estas kuiristo.', translation: 'Eu sou cozinheiro.', wrong: 'Isso não responde sobre o frio. Fale do tempo: "estas malvarme/varme" ou "la vento estas forta".' },
        ],
      },
      vesto: {
        text: 'Do, aĉetu novan jakon!',
        translation: 'Então, compre um casaco novo!',
        emoji: '🧥',
        choices: [
          { text: 'Bona ideo! Mi ankaŭ aĉetos gantojn.', translation: 'Boa ideia! Eu também vou comprar luvas.', next: 'final_bo' },
          { text: 'Mia familio estas granda.', translation: 'Minha família é grande.', wrong: 'Isso não tem relação com a roupa. Fale sobre o que você vai comprar.' },
        ],
      },
      final_bo: {
        text: 'Bonege! Ĉi tiu vendejo havas bonajn prezojn.',
        translation: 'Ótimo! Esta loja aqui tem bons preços.',
        emoji: '🛍️',
        ending: { tone: 'bom', title: 'Compras feitas!', message: 'Lara te mostrou a melhor loja do hotel — e agora você está prepara para o frio!' },
      },
    },
    glossary: [
      ['estas malvarme', 'está frio'],
      ['jako', 'casaco'],
      ['aĉeti', 'comprar'],
    ],
  },
  {
    id: 'eo-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Kiam mi estis infano',
    emoji: '🏙️',
    summary: 'Sua amiga esperantista Nadia conta como era a sua vida de criança na cidade dela, e você conta a sua.',
    cultural_context: 'Muitas famílias "denaskaj" (que criam os filhos falando esperanto desde o nascimento) moram em cidades grandes pela Europa, América e Ásia — o esperanto não tem um território próprio.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Kiam mi estis infano, mi loĝis en granda urbo. Kaj vi, kie vi loĝis?',
        translation: 'Quando eu era criança, eu morava numa cidade grande. E você, onde você morava?',
        emoji: '🏙️',
        choices: [
          { text: 'Kiam mi estis infano, mi loĝis en malgranda urbo.', translation: 'Quando eu era criança, eu morava numa cidade pequena.', next: 'laboro' },
          { text: 'Mia kapo doloras.', translation: 'Minha cabeça está doendo.', wrong: 'Isso não responde onde você morava quando era criança. Use "kiam mi estis infano, mi loĝis…".' },
        ],
      },
      laboro: {
        text: 'Kaj kie viaj gepatroj laboris?',
        translation: 'E onde seus pais trabalhavam?',
        emoji: '👪',
        choices: [
          { text: 'Mia patro laboris en malsanulejo, kaj mia patrino, en lernejo.', translation: 'Meu pai trabalhava num hospital, e minha mãe, numa escola.', next: 'final_bo' },
          { text: 'Morgaŭ mi portos ganton.', translation: 'Amanhã eu vou vestir uma luva.', wrong: 'Isso não responde sobre o trabalho dos seus pais. Use o passado: "laboris".' },
        ],
      },
      final_bo: {
        text: 'Kiel interese! Niaj infanaĝoj estis tute malsamaj.',
        translation: 'Que interessante! Nossas infâncias foram bem diferentes.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Lembranças compartilhadas!', message: 'Nadia e você compartilharam suas lembranças de infância — uma boa conversa no passado!' },
      },
    },
    glossary: [
      ['kiam mi estis infano', 'quando eu era criança'],
      ['mi loĝis', 'eu morava'],
      ['laboris', 'ele/ela trabalhava'],
    ],
  },
];
