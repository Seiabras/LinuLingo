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
];
