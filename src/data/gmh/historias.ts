import type { StorySeed } from '../types';

/** Histórias interativas do alto-alemão médio — uma por subnível (A1.1 a A2.2), pacote ainda incompleto. */
export const STORIES_GMH: StorySeed[] = [
  {
    id: 'gmh-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Na corte da Suábia',
    emoji: '🏰',
    summary: 'Você chega à corte dos Hohenstaufen, na Suábia, e encontra um ritter (cavaleiro).',
    cultural_context: 'A corte dos Hohenstaufen, na Suábia, deu origem à língua literária supra-regional do alto-alemão médio clássico (séc. XII-XIII) — a mesma usada por Wolfram von Eschenbach (“Parzival”) e Hartmann von Aue (“Erec”, “Iwein”), segundo a Wikipédia em inglês (“Middle High German”).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ich bin ritter. Bist du vriunt?',
        translation: 'Eu sou cavaleiro. Tu és amigo?',
        emoji: '🛡️',
        choices: [
          { text: 'Ja, ich bin vriunt.', translation: 'Sim, eu sou amigo.', next: 'amigo' },
          { text: 'Daȥ ist mīn hunt.', translation: 'Esse é o meu cachorro.', wrong: 'O cavaleiro te perguntou se você é amigo — isso não responde a pergunta dele. Tente “Ja, ich bin vriunt.”' },
        ],
      },
      amigo: {
        text: 'Guot! Mīn nāme ist Parzival. Unde du?',
        translation: 'Bom! O meu nome é Parzival. E tu?',
        emoji: '😊',
        choices: [
          { text: 'Mīn nāme ist Linu.', translation: 'O meu nome é Linu.', next: 'final_bo' },
          { text: 'Daȥ ist mīn katze.', translation: 'Esse é o meu gato.', wrong: 'Parzival perguntou o seu nome — isso não responde à pergunta dele. Tente “Mīn nāme ist…”' },
        ],
      },
      final_bo: {
        text: 'Guot, Linu! Danc!',
        translation: 'Bom, Linu! Obrigado!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Um novo amigo na corte!', message: 'Parzival sorri: você fez a sua primeira conversa em alto-alemão médio, na corte da Suábia.' },
      },
    },
    glossary: [
      ['ich bin / ër ist', 'eu sou / ele é'],
      ['vriunt / ritter', 'amigo / cavaleiro'],
      ['mīn nāme ist…', 'o meu nome é…'],
    ],
  },
  {
    id: 'gmh-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Mīn vater unde mīn hūs',
    emoji: '🏠',
    summary: 'Você visita a casa de um novo amigo e conta um pouco sobre a sua família.',
    cultural_context: 'No alto-alemão médio, “hūs” (casa) já descrevia tanto a construção física quanto, por extensão, a linhagem de uma família nobre — sentido que o alemão moderno “Haus” ainda guarda em expressões como “Haus Hohenstaufen” (a Casa dos Hohenstaufen, a dinastia).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ist daȥ dīn bruoder?',
        translation: 'Esse é o teu irmão?',
        emoji: '📜',
        choices: [
          { text: 'Ja, daȥ ist mīn bruoder.', translation: 'Sim, esse é o meu irmão.', next: 'fam' },
          { text: 'Daȥ brōt ist guot.', translation: 'O pão está bom.', wrong: 'Isso não responde sobre o seu irmão. Tente “Ja, daȥ ist mīn bruoder” ou “Nein.”' },
        ],
      },
      fam: {
        text: 'Guot! Ist daȥ dīn hūs?',
        translation: 'Bom! Essa é a tua casa?',
        emoji: '🏠',
        choices: [
          { text: 'Ja, daȥ ist mīn hūs.', translation: 'Sim, essa é a minha casa.', next: 'final_bo' },
          { text: 'Nein, ich bin ritter.', translation: 'Não, eu sou cavaleiro.', wrong: 'Isso não responde sobre a casa. Tente “Ja, daȥ ist mīn hūs” ou “Nein.”' },
        ],
      },
      final_bo: {
        text: 'Guot! Willekomen, vriunt!',
        translation: 'Bom! Bem-vindo(a), amigo(a)!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Convidado para a casa!', message: 'O seu novo amigo ficou feliz em saber da sua família — e já te convidou pra conhecer a casa dele.' },
      },
    },
    glossary: [
      ['bruoder / swëster', 'irmão / irmã'],
      ['hūs', 'casa'],
      ['ist daȥ dīn…?', 'esse/essa é o/a teu/tua…?'],
    ],
  },
  {
    id: 'gmh-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Einlif ritter',
    emoji: '🔢',
    summary: 'Parzival conta os cavaleiros antes de uma viagem, e você ajuda com os números.',
    cultural_context: 'Nos poemas da época, como o Nibelungenlied, números grandes aparecem para contar tropas, dias de viagem e tesouros — a mesma estrutura numérica que o alemão moderno ainda guarda quase intacta.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Wie vil ritter hān wir? Einlif oder zweinzic?',
        translation: 'Quantos cavaleiros temos? Onze ou vinte?',
        emoji: '🔢',
        choices: [
          { text: 'Wir hān zweinzic ritter.', translation: 'Temos vinte cavaleiros.', next: 'numero' },
          { text: 'Mīn hant ist starc.', translation: 'A minha mão é forte.', wrong: 'Parzival perguntou sobre o número de cavaleiros — isso não responde. Tente “Wir hān…”.' },
        ],
      },
      numero: {
        text: 'Guot! Unde du, bist du starc? Ist dīn hant starc?',
        translation: 'Bom! E tu, és forte? A tua mão é forte?',
        emoji: '✋',
        choices: [
          { text: 'Ja, mīn hant ist starc.', translation: 'Sim, a minha mão é forte.', next: 'final_bo' },
          { text: 'Zwelf tage.', translation: 'Doze dias.', wrong: 'Parzival perguntou sobre a sua mão — isso não responde. Tente “Mīn hant ist…”.' },
        ],
      },
      final_bo: {
        text: 'Guot, ritter! Nu rīten wir zur burc!',
        translation: 'Bom, cavaleiro! Agora vamos cavalgar até o castelo!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Zweinzic ritter!', message: 'Parzival conferiu os números e confia na sua força: vocês cavalgam juntos até a burc.' },
      },
    },
    glossary: [
      ['einlif / zweinzic', 'onze / vinte'],
      ['mīn hant ist starc', 'a minha mão é forte'],
      ['nu', 'agora'],
    ],
  },
  {
    id: 'gmh-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Diu burc unde daȥ buoch',
    emoji: '🏰',
    summary: 'Você visita a burc (castelo) de Parzival e descobre o que ele tem na biblioteca.',
    cultural_context: '“Burc” é um substantivo feminino forte com plural de Umlaut (“bürge”) — um castelo medieval como esse abrigava não só cavaleiros, mas também livros, como o próprio “Parzival” de Wolfram von Eschenbach.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Willekomen zur burc! Hāst du ein buoch?',
        translation: 'Bem-vindo ao castelo! Tens um livro?',
        emoji: '🏰',
        choices: [
          { text: 'Ja, ich hān ein buoch.', translation: 'Sim, eu tenho um livro.', next: 'livro' },
          { text: 'Diu kirche ist niuwe.', translation: 'A igreja é nova.', wrong: 'Parzival perguntou sobre o seu livro — isso não responde. Tente “Ich hān…” ou “Nein”.' },
        ],
      },
      livro: {
        text: 'Guot! Waȥ trinkest du, wīn oder wazzer?',
        translation: 'Bom! O que tu bebes, vinho ou água?',
        emoji: '🥤',
        choices: [
          { text: 'Ich trinke wīn.', translation: 'Eu bebo vinho.', next: 'final_bo' },
          { text: 'Ich iȥȥe brōt.', translation: 'Eu como pão.', wrong: 'Parzival perguntou sobre bebida — isso não responde. Tente “Ich trinke…”.' },
        ],
      },
      final_bo: {
        text: 'Guot! Diu burc ist dīn hūs nu!',
        translation: 'Bom! O castelo é a tua casa agora!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Willekomen zur burc!', message: 'Parzival ficou feliz com a sua visita — você é bem-vindo na burc sempre que quiser.' },
      },
    },
    glossary: [
      ['ich hān ein buoch', 'eu tenho um livro'],
      ['ich trinke wīn', 'eu bebo vinho'],
      ['diu burc', 'o castelo'],
    ],
  },
];
