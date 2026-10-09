import type { StorySeed } from '../types';

/** Histórias interativas do turco — uma por nível (A1.1, A1.2, A2.1 e A2.2), pacote incompleto. */
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
          { text: 'Su içiyorum.', translation: 'Estou bebendo água.', wrong: 'Isso não responde de onde você é. Use “…lıyım / …luyum”.' },
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
          { text: 'Evim küçük.', translation: 'A minha casa é pequena.', wrong: 'Isso não responde se você tem irmãos. Use “… var” ou “… yok”.' },
        ],
      },
      davet: {
        text: 'Güzel! Bize çaya gelir misin?',
        translation: 'Legal! Quer vir tomar um chá lá em casa?',
        emoji: '🍵',
        choices: [
          { text: 'Evet, teşekkür ederim!', translation: 'Sim, obrigado!', next: 'final_bom' },
          { text: "São Paulo'luyum.", translation: 'Sou de São Paulo.', wrong: 'Mehmet fez um convite: responda com “evet” (sim) ou “hayır, teşekkürler”.' },
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
  {
    id: 'tr-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Yeni gömlek',
    emoji: '👔',
    summary: 'Você vai a uma loja em Istambul comprar uma camisa nova e pergunta pelo hospital mais próximo para um amigo.',
    cultural_context: 'O Kapalıçarşı (Grande Bazar) de Istambul, com mais de quinhentos anos, é um dos mercados cobertos mais antigos e maiores do mundo, cheio de lojinhas de roupa e artesanato.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'İyi günler! Yardımcı olabilir miyim?',
        translation: 'Boa tarde! Posso ajudar?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Evet, lütfen. Yeni bir gömlek arıyorum.', translation: 'Sim, por favor. Estou procurando uma camisa nova.', next: 'gomlek' },
          { text: 'Dışarıda yağmur var.', translation: 'Está chovendo lá fora.', wrong: 'A vendedora perguntou se pode ajudar: diga o que você procura, usando “…arıyorum”.' },
        ],
      },
      gomlek: {
        text: 'Mavi ve kırmızı var. Hangisini istersin?',
        translation: 'Temos azul e vermelha. Qual você quer?',
        emoji: '👔',
        choices: [
          { text: 'Mavi gömlek istiyorum, lütfen.', translation: 'Eu quero uma camisa azul, por favor.', next: 'hastane' },
          { text: 'Otuz yaşındayım.', translation: 'Eu tenho trinta anos.', wrong: 'Isso não responde sobre a cor da camisa. Use “…istiyorum”.' },
        ],
      },
      hastane: {
        text: 'Buyurun. Başka bir şey?',
        translation: 'Aqui está. Mais alguma coisa?',
        emoji: '🛍️',
        choices: [
          { text: 'Buralarda hastane var mı? Arkadaşım hasta.', translation: 'Tem um hospital por aqui? Meu amigo está doente.', next: 'final' },
          { text: 'Peyniri seviyorum.', translation: 'Eu gosto de queijo.', wrong: 'Isso não tem nada a ver com a situação. Pergunte pelo hospital com “… var mı?”.' },
        ],
      },
      final: {
        text: 'Hastane bu sokakta, hemen orada.',
        translation: 'O hospital é nesta rua, logo ali.',
        emoji: '🏥',
        ending: { tone: 'bom', title: 'Harika!', message: 'Você comprou uma camisa nova e descobriu onde fica o hospital, tudo em turco.' },
      },
    },
    glossary: [
      ['arıyorum', 'eu procuro'],
      ['istiyorum', 'eu quero'],
      ['… var mı?', 'tem…?'],
      ['hastane', 'hospital'],
    ],
  },
  {
    id: 'tr-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Dün ne yaptın?',
    emoji: '⏳',
    summary: 'Um colega de trabalho pergunta o que você fez ontem e qual é a sua profissão.',
    cultural_context: 'Perguntar “Ne iş yapıyorsun?” (que trabalho você faz?) é uma forma comum de conhecer a profissão de alguém numa conversa na Turquia.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Merhaba! Dün ne yaptın?',
        translation: 'Oi! O que você fez ontem?',
        emoji: '📱',
        choices: [
          { text: 'Okulda çalıştım.', translation: 'Eu trabalhei numa escola.', next: 'profissao' },
          { text: 'Gözlerim mavi.', translation: 'Meus olhos são azuis.', wrong: 'Isso não responde o que você fez ontem. Use o passado, como “çalıştım”.' },
        ],
      },
      profissao: {
        text: 'Demek öğretmensin? Bugün çalışacak mısın?',
        translation: 'Então você é professor? Você vai trabalhar hoje?',
        emoji: '🤔',
        choices: [
          { text: 'Evet, öğretmenim ve bugün çalışacağım.', translation: 'Sim, eu sou professor e hoje vou trabalhar.', next: 'final' },
          { text: 'Eve gidebilirim.', translation: 'Eu posso ir para casa.', wrong: 'Isso não responde se você vai trabalhar hoje. Use “çalışacağım” ou “çalışmayacağım”.' },
        ],
      },
      final: {
        text: 'Harika! İyi çalışmalar!',
        translation: 'Ótimo! Bom trabalho!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Güzel bir sohbet!', message: 'Você contou o que fez ontem e falou da sua profissão, usando o passado e o futuro.' },
      },
    },
    glossary: [
      ['dün ne yaptın?', 'o que você fez ontem?'],
      ['çalıştım', 'eu trabalhei'],
      ['çalışacağım', 'eu vou trabalhar'],
      ['öğretmen', 'professor'],
    ],
  },
];
