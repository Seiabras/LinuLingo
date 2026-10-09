import type { StorySeed } from '../types';

/**
 * Histórias interativas do malaio — A1 (A1.1 e A1.2) mais A2 (A2.1 e A2.2), acrescentado depois. Só
 * usam palavras de vocabulario.ts e frases feitas conferidas lá (Wikivoyage: «Apa khabar? / Khabar
 * baik», «Selamat datang», «Bas/tren ini pergi ke mana?»; Wiktionary: «selamat datang» = welcome, «ke
 * mana» = (to) where?, «baik» como interjeição «okay»). Selamat jalan é dito por quem fica a quem vai
 * embora (Wikivoyage), por isso é o motorista quem o diz no fim da segunda história.
 * «Kita sudah sampai» (chegamos) usa «sampai» (chegar), atestado no Wikivoyage («Bilakah tren/bas ini
 * sampai di…?»), e «sudah» (já; Wiktionary). «Kedai kopi» é subentrada de «kedai» no Kamus Dewan
 * (PRPM: «kedai tempat menjual minuman dan kuih-muih»). As duas histórias do A2 usam só palavras já
 * citadas (com fonte) em vocabulario.ts e gramatica.ts.
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
  {
    id: 'ms-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Hujan di Kuala Lumpur',
    emoji: '🌧️',
    summary: 'Uma chuva forte pega você de surpresa em Kuala Lumpur, e a sua amiga Siti ajuda você a decidir o que comprar e vestir.',
    cultural_context: 'Como todo o país, Kuala Lumpur tem clima tropical o ano inteiro, com chuvas fortes e repentinas comuns nas tardes, sobretudo durante os monções de outubro a março.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Wah, hujan sangat kuat! Awak ada payung?',
        translation: 'Nossa, está chovendo muito forte! Você tem guarda-chuva?',
        emoji: '🌧️',
        choices: [
          { text: 'Tidak, saya tak ada payung.', translation: 'Não, eu não tenho guarda-chuva.', next: 'beli' },
          { text: 'Saya suka kopi.', translation: 'Eu gosto de café.', wrong: 'Siti perguntou sobre o guarda-chuva — isso não responde à pergunta.' },
        ],
      },
      beli: {
        text: 'Jom, kita beli jaket dan payung di kedai itu.',
        translation: 'Vamos, vamos comprar uma jaqueta e um guarda-chuva naquela loja.',
        emoji: '🧥',
        choices: [
          { text: 'Baik, saya akan beli jaket juga.', translation: 'Certo, eu também vou comprar uma jaqueta.', next: 'final_bom' },
          { text: 'Saya tak suka kasut ini.', translation: 'Eu não gosto deste sapato.', wrong: 'Isso não ajuda com a chuva. Concorde em comprar o jaket/payung.' },
        ],
      },
      final_bom: {
        text: 'Bagus! Sekarang kita tak akan basah.',
        translation: 'Ótimo! Agora não vamos nos molhar.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Kering dan selamat!', message: 'Você e Siti se protegeram da chuva repentina de Kuala Lumpur — secos e prontos para continuar o dia!' },
      },
    },
    glossary: [
      ['hujan kuat', 'chuva forte'],
      ['payung', 'guarda-chuva'],
      ['akan beli', 'vou comprar'],
    ],
  },
  {
    id: 'ms-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Pekerjaan baru',
    emoji: '💼',
    summary: 'Você encontra o seu amigo Faizal depois do seu primeiro dia de trabalho como professor, e conta como se sentiu.',
    cultural_context: 'Na Malásia, é comum tratar professores e médicos pelo cargo, junto com “Encik” (senhor) ou “Puan” (senhora), mesmo fora da escola ou do hospital.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Hai! Bagaimana hari pertama awak sebagai guru?',
        translation: 'Oi! Como foi o seu primeiro dia como professor?',
        emoji: '🧑‍🏫',
        choices: [
          { text: 'Saya gembira, tapi sedikit penat.', translation: 'Estou feliz, mas um pouco cansado.', next: 'kelanjutan' },
          { text: 'Esok akan hujan.', translation: 'Vai chover amanhã.', wrong: 'Faizal perguntou sobre o seu dia de trabalho — isso não responde.' },
        ],
      },
      kelanjutan: {
        text: 'Wah, bagus! Murid-murid awak baik?',
        translation: 'Que bom! Os seus alunos são bons?',
        emoji: '🎒',
        choices: [
          { text: 'Ya, mereka murid yang baik.', translation: 'Sim, eles são bons alunos.', next: 'final_bom' },
          { text: 'Saya takut kucing.', translation: 'Eu tenho medo de gatos.', wrong: 'Isso não responde sobre os alunos.' },
        ],
      },
      final_bom: {
        text: 'Gembiranya dengar! Awak akan jadi guru yang hebat.',
        translation: 'Que bom ouvir isso! Você vai ser um professor incrível.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Hari pertama yang baik!', message: 'Faizal ficou feliz em saber do seu primeiro dia como professor — parece que você já encontrou alunos ótimos!' },
      },
    },
    glossary: [
      ['murid yang baik', 'bons alunos'],
      ['gembira, tapi penat', 'feliz, mas cansado'],
      ['guru yang hebat', 'professor incrível'],
    ],
  },
];
