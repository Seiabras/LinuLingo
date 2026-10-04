import type { StorySeed } from '../types';

/**
 * Histórias interativas do malaio — uma por subnível (A1.1 e A1.2), pacote incompleto. Só usam
 * palavras de vocabulario.ts e frases feitas conferidas lá (Wikivoyage: «Apa khabar? / Khabar baik»,
 * «Selamat datang», «Bas/tren ini pergi ke mana?»; Wiktionary: «selamat datang» = welcome, «ke mana»
 * = (to) where?, «baik» como interjeição «okay»). Selamat jalan é dito por quem fica a quem vai
 * embora (Wikivoyage), por isso é o motorista quem o diz no fim da segunda história.
 * «Kita sudah sampai» (chegamos) usa «sampai» (chegar), atestado no Wikivoyage («Bilakah tren/bas ini
 * sampai di…?»), e «sudah» (já; Wiktionary). «Kedai kopi» é subentrada de «kedai» no Kamus Dewan
 * (PRPM: «kedai tempat menjual minuman dan kuih-muih»).
 */
export const STORIES_MS: StorySeed[] = [
  {
    id: 'ms-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Hai di Kuala Lumpur',
    emoji: '👋',
    summary: 'Você conhece Aminah numa kedai kopi de Kuala Lumpur e faz a sua primeira conversa em malaio.',
    cultural_context: 'Kuala Lumpur é a capital da Malásia. Uma kedai kopi (“loja de café”) é a lojinha que vende bebidas e quitutes.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Hai! Nama saya Aminah. Apa khabar?',
        translation: 'Oi! Meu nome é Aminah. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Khabar baik, terima kasih!', translation: 'Tudo bem, obrigado!', next: 'asal' },
          { text: 'Selamat tinggal!', translation: 'Tchau!', wrong: 'Aminah acabou de cumprimentar — despedir-se agora seria estranho. Responda primeiro com “khabar baik”.' },
        ],
      },
      asal: {
        text: 'Awak dari mana?',
        translation: 'De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Saya dari Brazil.', translation: 'Eu sou do Brasil.', next: 'final_bom' },
          { text: 'Saya suka kopi.', translation: 'Eu gosto de café.', wrong: 'Isso não responde “de onde você é”. Tente “Saya dari…”.' },
        ],
      },
      final_bom: {
        text: 'Brazil? Selamat datang ke Malaysia!',
        translation: 'Brasil? Bem-vindo à Malásia!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Uma boa conversa!', message: 'Aminah sorri: foi a primeira conversa em malaio, numa kedai kopi de Kuala Lumpur.' },
      },
    },
    glossary: [
      ['apa khabar?', 'como vai?'],
      ['khabar baik', 'tudo bem'],
      ['saya dari', 'eu sou de'],
      ['selamat datang', 'bem-vindo'],
    ],
  },
  {
    id: 'ms-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Teksi ke rumah kawan',
    emoji: '🚕',
    summary: 'Você pega um táxi em Kuala Lumpur para a casa de uma amiga e conversa com o motorista sobre família e cidade.',
    cultural_context: 'Na Malásia o táxi é “teksi” e o carro é “kereta” — palavras diferentes das do indonésio, que diz “taksi” e “mobil”.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Selamat petang! Awak mahu pergi ke mana?',
        translation: 'Boa tarde! Aonde você quer ir?',
        emoji: '🚕',
        choices: [
          { text: 'Selamat petang! Saya mahu pergi ke rumah kawan saya.', translation: 'Boa tarde! Eu quero ir à casa da minha amiga.', next: 'tinggal' },
          { text: 'Kereta saya merah.', translation: 'O meu carro é vermelho.', wrong: 'O motorista perguntou aonde você quer ir. Use “Saya mahu pergi ke…”.' },
        ],
      },
      tinggal: {
        text: 'Baik. Awak tinggal di Malaysia?',
        translation: 'Certo. Você mora na Malásia?',
        emoji: '🙂',
        choices: [
          { text: 'Tidak, saya tinggal di Brazil. Keluarga saya di Brazil.', translation: 'Não, eu moro no Brasil. A minha família está no Brasil.', next: 'keluarga' },
          { text: 'Maaf, di mana tandas?', translation: 'Com licença, onde fica o banheiro?', wrong: 'Dentro do táxi, essa pergunta não faz sentido. Responda onde você mora com “Saya tinggal di…”.' },
        ],
      },
      keluarga: {
        text: 'Awak ada abang atau kakak?',
        translation: 'Você tem irmão mais velho ou irmã mais velha?',
        emoji: '👪',
        choices: [
          { text: 'Ya, saya ada seorang kakak.', translation: 'Sim, eu tenho uma irmã mais velha.', next: 'final_bom' },
          { text: 'Saya mahu teh.', translation: 'Eu quero chá.', wrong: 'Ele perguntou sobre irmãos. Use “Saya ada…” (eu tenho…).' },
        ],
      },
      final_bom: {
        text: 'Kita sudah sampai. Selamat jalan, dan selamat datang ke Malaysia!',
        translation: 'Chegamos. Boa viagem, e bem-vindo à Malásia!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Chegou!', message: 'O motorista gostou da conversa — e você chegou à casa da sua amiga falando só malaio.' },
      },
    },
    glossary: [
      ['ke mana?', 'aonde?'],
      ['saya mahu pergi ke…', 'eu quero ir a…'],
      ['saya tinggal di…', 'eu moro em…'],
      ['abang / kakak', 'irmão mais velho / irmã mais velha'],
    ],
  },
];
