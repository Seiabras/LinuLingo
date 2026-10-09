import type { StorySeed } from '../types';

/** Histórias interativas do panjabi — uma por nível (A1.1, A1.2, A2.1 e A2.2), pacote incompleto. */
export const STORIES_PA: StorySeed[] = [
  {
    id: 'pa-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'سَلام، لاہور!',
    emoji: '👋',
    summary: 'Você encontra o Ali numa praça de Lahore e faz a sua primeira conversa em panjabi.',
    cultural_context: 'Lahore é a capital da província paquistanesa de Punjab e o maior centro cultural do panjabi escrito em Shahmukhi — imprensa, poesia e teatro na língua se concentram ali.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'سَلام! علی ناں اے۔ تہاڈا ناں کی اے؟',
        translation: 'Oi! Ali é o nome. Qual é o seu nome?',
        emoji: '🙋‍♂️',
        choices: [
          { text: 'سَلام! لینو ناں اے۔', translation: 'Oi! Linu é o nome.', next: 'bem' },
          { text: 'رَبّ راکھا!', translation: 'Tchau!', wrong: 'Ali acabou de se apresentar e perguntar seu nome — responda à pergunta primeiro, não se despeça já.' },
        ],
      },
      bem: {
        text: 'چنگا! تہاڈا گَھر وڈا اے؟',
        translation: 'Que bom! Sua casa é grande?',
        emoji: '😊',
        choices: [
          { text: 'ہاں، گَھر وڈا اے۔', translation: 'Sim, a casa é grande.', next: 'final_bom' },
          { text: 'چاہ پسند اے۔', translation: 'Eu gosto de chá.', wrong: 'Isso não responde sobre a casa. Use “ہاں”/“نہیں” com “گَھر وڈا اے” ou “گَھر چھوٹا اے”.' },
        ],
      },
      final_bom: {
        text: 'شکریہ!',
        translation: 'Obrigado!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Uma boa conversa!', message: 'Ali sorri: você fez a sua primeira conversa em panjabi, em Lahore.' },
      },
    },
    glossary: [
      ['سَلام', 'oi'],
      ['تہاڈا ناں کی اے؟', 'qual é o seu nome?'],
      ['وڈا', 'grande'],
    ],
  },
  {
    id: 'pa-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'سَلام، فاطمہ!',
    emoji: '🏠',
    summary: 'Você visita a Fatima e conhece um pouco da família e do chá dela.',
    cultural_context: 'O chá (“چاہ”) é parte do dia a dia panjabi, servido a visitas quase sempre que alguém entra numa casa — oferecer chá é um gesto comum de hospitalidade.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'سَلام! تہاڈا ٹَبَّر وڈا اے؟',
        translation: 'Oi! Sua família é grande?',
        emoji: '📱',
        choices: [
          { text: 'ہاں، وڈا ٹَبَّر اے۔', translation: 'Sim, é uma família grande.', next: 'fam' },
          { text: 'کُتّا لال اے۔', translation: 'O cachorro é vermelho.', wrong: 'Isso não responde sobre a família. Use “ہاں”/“نہیں” com “ٹَبَّر وڈا اے” ou “چنگا اے”.' },
        ],
      },
      fam: {
        text: 'چنگا! چاہ پسند اے؟',
        translation: 'Que bom! Você gosta de chá?',
        emoji: '🍵',
        choices: [
          { text: 'ہاں، چاہ پسند اے۔', translation: 'Sim, eu gosto de chá.', next: 'final_bom' },
          { text: 'گَھر چھوٹا اے۔', translation: 'A casa é pequena.', wrong: 'Isso não responde sobre o chá. Use “ہاں”/“نہیں” com “چاہ پسند اے”.' },
        ],
      },
      final_bom: {
        text: 'شکریہ! چاہ چنگا اے۔',
        translation: 'Obrigado! O chá é bom.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Um chá em família!', message: 'Fatima te convida pra um chá com a família — um costume bem panjabi.' },
      },
    },
    glossary: [
      ['ٹَبَّر', 'família'],
      ['چاہ پسند اے', 'eu gosto de chá'],
      ['چنگا', 'bom'],
    ],
  },
  {
    id: 'pa-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'دُدّھ مہنگا اے؟',
    emoji: '💰',
    summary: 'Você conversa com um vendedor de bairro em Lahore sobre o preço do leite e do arroz.',
    cultural_context: 'No Paquistão, muita gente ainda compra leite e arroz direto de pequenos vendedores de bairro, e perguntar se algo está caro ou barato é parte normal da conversa, não uma ofensa.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'سَلام! دُدّھ چاہیدا؟',
        translation: 'Oi! Quer leite?',
        emoji: '🧑‍🌾',
        choices: [
          { text: 'ہاں، دُدّھ چاہیدا۔', translation: 'Sim, quero leite.', next: 'preco' },
          { text: 'رَبّ راکھا!', translation: 'Tchau!', wrong: 'O vendedor acabou de oferecer leite — responda se você quer ou não antes de se despedir.' },
        ],
      },
      preco: {
        text: 'چنگا! دُدّھ سستا اے۔',
        translation: 'Ótimo! O leite está barato.',
        emoji: '🥛',
        choices: [
          { text: 'شکریہ! چاول مہنگا اے؟', translation: 'Obrigado! O arroz está caro?', next: 'final_bom' },
          { text: 'کُتّا چھوٹا اے۔', translation: 'O cachorro é pequeno.', wrong: 'Isso não tem nada a ver com o preço do leite ou do arroz. Pergunte sobre o preço do arroz.' },
        ],
      },
      final_bom: {
        text: 'نہیں، چاول سستا اے!',
        translation: 'Não, o arroz está barato!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Preço bom!', message: 'Você conseguiu leite e arroz baratos — um bom negócio em panjabi.' },
      },
    },
    glossary: [
      ['دُدّھ سستا اے', 'o leite está barato'],
      ['چاول مہنگا اے؟', 'o arroz está caro?'],
      ['سستا', 'barato'],
    ],
  },
  {
    id: 'pa-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'اج گرم اے!',
    emoji: '🌞',
    summary: 'Você encontra a Sana num dia de muito calor em Lahore e fala sobre o clima e como está se sentindo.',
    cultural_context: 'Os verões no Punjab paquistanês são muito quentes, passando dos 40°C em cidades como Lahore — por isso falar do calor é um assunto comum de conversa, parecido com falar do tempo no Brasil.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'سَلام! اج گرم اے۔',
        translation: 'Oi! Hoje está quente.',
        emoji: '🥵',
        choices: [
          { text: 'ہاں، گرم اے۔', translation: 'Sim, está quente.', next: 'pergunta' },
          { text: 'پاݨِی ٹھنڈا اے۔', translation: 'A água está fria.', wrong: 'Isso não confirma se hoje está quente. Responda com “ہاں” (sim) primeiro.' },
        ],
      },
      pergunta: {
        text: 'ہوا گرم اے۔',
        translation: 'O vento está quente.',
        emoji: '💨',
        choices: [
          { text: 'میں خوش ہاں۔', translation: 'Eu estou feliz.', next: 'final_bom' },
          { text: 'سِر چھوٹا اے۔', translation: 'A cabeça é pequena.', wrong: 'Isso não tem nada a ver com o clima ou como você se sente. Diga que está feliz com “میں خوش ہاں۔”.' },
        ],
      },
      final_bom: {
        text: 'چنگا! مینہہ چاہیدا۔',
        translation: 'Que bom! Dá vontade de chuva. (lit. “chuva é querida”)',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Um dia quente, mas feliz!', message: 'Mesmo com o calor, você e a Sana terminam a conversa sorrindo.' },
      },
    },
    glossary: [
      ['اج گرم اے', 'hoje está quente'],
      ['ہوا گرم اے', 'o vento está quente'],
      ['میں خوش ہاں', 'eu estou feliz'],
    ],
  },
];
