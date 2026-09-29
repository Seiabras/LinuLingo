import type { StorySeed } from '../types';

/** Histórias interativas do turco — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_TR: StorySeed[] = [
  {
    id: 'tr-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Merhaba, İstanbul!',
    emoji: '⛴️',
    summary: 'Na fila da balsa em Istambul, você conhece Elif e faz a sua primeira conversa em turco.',
    cultural_context: 'Istambul fica dos dois lados do estreito do Bósforo, metade na Europa e metade na Ásia, e as balsas (vapur) ligam as duas margens.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Merhaba! Benim adım Elif. Nasılsın?',
        translation: 'Oi! Meu nome é Elif. Como você está?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'İyiyim, teşekkürler! Ya sen?', translation: 'Estou bem, obrigado! E você?', next: 'iyi' },
          { text: 'Hoşça kal!', translation: 'Tchau!', wrong: 'Elif acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      iyi: {
        text: 'Ben de iyiyim! Nerelisin?',
        translation: 'Eu também estou bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: "São Paulo'luyum.", translation: 'Sou de São Paulo.', next: 'final_bom' },
          { text: 'Su içiyorum.', translation: 'Estou bebendo água.', wrong: 'Isso não responde de onde você é. Use «…lıyım / …luyum».' },
        ],
      },
      final_bom: {
        text: "Çok güzel! İstanbul'a hoş geldin!",
        translation: 'Que legal! Bem-vindo(a) a Istambul!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'İyi bir başlangıç!', message: 'Elif sorri: você fez a sua primeira conversa em turco.' },
      },
    },
    glossary: [
      ['merhaba', 'oi, olá'],
      ['nasılsın?', 'como você está?'],
      ['nerelisin?', 'de onde você é?'],
      ['hoş geldin', 'bem-vindo(a)'],
    ],
  },
  {
    id: 'tr-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Çay saati',
    emoji: '🍵',
    summary: 'Mehmet, um colega de curso em Esmirna, pergunta pela sua família e convida você para um chá.',
    cultural_context: 'Na Turquia, o chá preto é servido em copinhos de vidro em forma de tulipa, geralmente sem leite.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Merhaba! Kardeşin var mı?',
        translation: 'Oi! Você tem irmãos?',
        emoji: '📱',
        choices: [
          { text: 'Evet, bir erkek kardeşim var.', translation: 'Sim, tenho um irmão.', next: 'davet' },
          { text: 'Evim küçük.', translation: 'A minha casa é pequena.', wrong: 'Isso não responde se você tem irmãos. Use «… var» ou «… yok».' },
        ],
      },
      davet: {
        text: 'Güzel! Bize çaya gelir misin?',
        translation: 'Legal! Quer vir tomar um chá lá em casa?',
        emoji: '🍵',
        choices: [
          { text: 'Evet, teşekkür ederim!', translation: 'Sim, obrigado!', next: 'final_bom' },
          { text: "São Paulo'luyum.", translation: 'Sou de São Paulo.', wrong: 'Mehmet fez um convite: responda com «evet» (sim) ou «hayır, teşekkürler».' },
        ],
      },
      final_bom: {
        text: 'Harika! Annem çay yapıyor.',
        translation: 'Ótimo! A minha mãe está fazendo chá.',
        emoji: '🫖',
        ending: { tone: 'bom', title: 'Bir davet!', message: 'Você foi convidado para tomar chá com a família de Mehmet.' },
      },
    },
    glossary: [
      ['kardeş', 'irmão, irmã'],
      ['… var mı?', 'tem …?'],
      ['evet', 'sim'],
      ['çay', 'chá'],
    ],
  },
];
