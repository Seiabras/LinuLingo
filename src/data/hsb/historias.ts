import type { StorySeed } from '../types';

/** Histórias interativas do alto-sorábio — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_HSB: StorySeed[] = [
  {
    id: 'hsb-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Witaj w Budyšinje',
    emoji: '👋',
    summary: 'Você conhece Hanka na praça principal de Budyšin (Bautzen) e faz a sua primeira conversa em alto-sorábio.',
    cultural_context: 'Budyšin (Bautzen, em alemão) é o centro cultural dos sorábios na Alta Lusácia: lá fica o teatro sorábio, o museu e a sede da Domowina, a organização que representa o povo sorábio.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Witaj! Moje mjeno je Hanka. Kak so tebi dźe?',
        translation: 'Oi! Meu nome é Hanka. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Mi dźe dobre, dźakuju! A tebi?', translation: 'Vou bem, obrigado! E você?', next: 'dobre' },
          { text: 'Na zasowidźenje!', translation: 'Até logo!', wrong: 'Hanka acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      dobre: {
        text: 'Mi tež dźe dobre! Z hdźe sy?',
        translation: 'Eu também vou bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Ja sym z Brazilskeje.', translation: 'Sou do Brasil.', next: 'final_dobry' },
          { text: 'Ja piju wodu.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Ja sym z…”.' },
        ],
      },
      final_dobry: {
        text: 'Pěkne! Witaj w Budyšinje!',
        translation: 'Que legal! Bem-vindo a Bautzen!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Prěni rozmołwa!', message: 'Hanka sorri: você acabou de ter a sua primeira conversa em alto-sorábio.' },
      },
    },
    glossary: [
      ['witaj', 'oi, olá'],
      ['kak so tebi dźe?', 'como vai?'],
      ['ja sym z', 'eu sou de'],
      ['witaj w', 'bem-vindo a'],
    ],
  },
  {
    id: 'hsb-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Swójba w domje',
    emoji: '👪',
    summary: 'Michał, um amigo de Budyšin, pergunta pela sua família e convida você para comer na casa dele.',
    cultural_context: 'Muitas famílias sorábias ainda falam a língua em casa, especialmente nas aldeias católicas ao redor de Budyšin, onde a tradição sorábia ficou mais forte do que nas áreas protestantes.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Witaj! Maš bratra abo sotru?',
        translation: 'Oi! Você tem irmão ou irmã?',
        emoji: '📱',
        choices: [
          { text: 'Haj, mam jednu sotru.', translation: 'Sim, tenho uma irmã.', next: 'sotra' },
          { text: 'Mój dom je wulki.', translation: 'Minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “mam…”.' },
        ],
      },
      sotra: {
        text: 'Pěkne! Chceš hić k nam na chlěb a mloko?',
        translation: 'Que legal! Quer vir à nossa casa comer pão e beber leite?',
        emoji: '🍽️',
        choices: [
          { text: 'Haj, jara rady!', translation: 'Sim, com muito gosto!', next: 'final_dobry' },
          { text: 'Ja sym z Brazilskeje.', translation: 'Sou do Brasil.', wrong: 'Michał fez um convite: responda com “haj” ou “ně, dźakuju”.' },
        ],
      },
      final_dobry: {
        text: 'Jara dobre! Moja mać pječe chlěb.',
        translation: 'Muito bem! Minha mãe assa pão.',
        emoji: '🍞',
        ending: { tone: 'bom', title: 'Přeprošenje!', message: 'Você foi convidado para comer na casa de Michał.' },
      },
    },
    glossary: [
      ['bratr / sotra', 'irmão / irmã'],
      ['mam', 'eu tenho'],
      ['haj', 'sim'],
      ['k nam', 'à nossa casa'],
    ],
  },
  {
    id: 'hsb-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Ptači kwas',
    emoji: '🐦',
    summary: 'Hanka encontra você no dia do Ptači kwas, a festa sorábia do “casamento dos pássaros”, e pergunta se você trouxe pão para eles.',
    cultural_context: 'O Ptači kwas (casamento dos pássaros) acontece todo 25 de janeiro: na noite anterior, as crianças deixam um prato vazio na janela, que aparece cheio de doces na manhã seguinte, como um agradecimento imaginário dos pássaros por terem sido alimentados no inverno. A festa nasceu na Alta Lusácia e hoje é celebrada em creches e escolas sorábias.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Witaj! Dźensa je Ptači kwas!',
        translation: 'Oi! Hoje é o Ptači kwas (o casamento dos pássaros)!',
        emoji: '🐦',
        choices: [
          { text: 'Što je to?', translation: 'O que é isso?', next: 'pytanje' },
          { text: 'Na zasowidźenje!', translation: 'Até logo!', wrong: 'Hanka acabou de cumprimentar você e contar uma novidade: despedir-se agora seria estranho. Pergunte o que é primeiro.' },
        ],
      },
      pytanje: {
        text: 'To je Ptači kwas. Maš chlěb?',
        translation: 'É o casamento dos pássaros. Você tem pão?',
        emoji: '🍞',
        choices: [
          { text: 'Haj, mam chlěb.', translation: 'Sim, tenho pão.', next: 'final_dobry' },
          { text: 'Mam wulkeho ptaka.', translation: 'Tenho um pássaro grande.', wrong: 'Hanka perguntou se você tem pão, não se você tem um pássaro de estimação. Responda sobre o pão.' },
        ],
      },
      final_dobry: {
        text: 'Pěkne! Dźensa je dobry dźeń.',
        translation: 'Que bom! Hoje é um bom dia.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Ptači kwas!', message: 'Você vai comemorar o Ptači kwas levando pão para os pássaros, do jeito que as crianças sorábias fazem todo 25 de janeiro.' },
      },
    },
    glossary: [
      ['ptači kwas', 'o casamento dos pássaros (festa sorábia de 25 de janeiro)'],
      ['maš chlěb?', 'você tem pão?'],
      ['mam wulkeho ptaka', 'tenho um pássaro grande (acusativo animado)'],
    ],
  },
  {
    id: 'hsb-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'List do swójby',
    emoji: '✍️',
    summary: 'Michał pergunta o que você escreveu hoje, e você conta sobre a carta que mandou para a sua família contando como estava o tempo ontem.',
    cultural_context: 'O Serbske Nowiny é o único jornal diário do mundo em alto-sorábio, publicado em Budyšin — para uma língua com só alguns milhares de falantes, escrever e ler todos os dias na própria língua é um motivo de orgulho da comunidade sorábia.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Witaj! Što sy pisał dźensa?',
        translation: 'Oi! O que você escreveu hoje?',
        emoji: '✍️',
        choices: [
          { text: 'Sym pisał list.', translation: 'Eu escrevi uma carta.', next: 'list' },
          { text: 'Chcu kofej.', translation: 'Eu quero um café.', wrong: 'Michał perguntou o que você escreveu, não o que você quer beber. Responda sobre a carta.' },
        ],
      },
      list: {
        text: 'Pěkne! Było ćopłe wčera?',
        translation: 'Que bom! Estava quente ontem?',
        emoji: '🥵',
        choices: [
          { text: 'Haj, było ćopłe.', translation: 'Sim, estava quente.', next: 'final_dobry' },
          { text: 'Sym pisał list.', translation: 'Eu escrevi uma carta.', wrong: 'Michał já sabe da carta: agora ele perguntou sobre o tempo de ontem. Responda com “było…”.' },
        ],
      },
      final_dobry: {
        text: 'Dobre! To je pěkny list.',
        translation: 'Bom! Essa é uma carta bonita.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'List je pisany!', message: 'Sua carta está escrita, contando que esteve quente ontem — do jeito que se conta o passado em alto-sorábio, com “sym pisał” e “było”.' },
      },
    },
    glossary: [
      ['sym pisał list', 'eu escrevi uma carta (fala um homem)'],
      ['było ćopłe', 'estava quente'],
      ['pěkne', 'que bom, bonito'],
      ['dobre', 'bem, bom'],
    ],
  },
];
