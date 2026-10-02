import type { StorySeed } from '../types';

/** Histórias interativas do tâmil — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_TA: StorySeed[] = [
  {
    id: 'ta-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'மெரினா கடற்கரையில் வணக்கம்',
    emoji: '🏖️',
    summary: 'Você conhece a கவிதா (Kavitha) na praia de Marina, em Chennai, e faz a sua primeira conversa em tâmil.',
    cultural_context:
      'A praia de Marina, em Chennai, corre ao longo do golfo de Bengala e é considerada a segunda praia urbana mais longa do mundo (uns 13 km de areia), embora essa posição no ranking seja disputada. A promenade foi criada em 1884, batizada de “Madras Marina” em homenagem às praias da Sicília.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'வணக்கம்! என் பெயர் கவிதா. நீங்கள் எப்படி இருக்கின்றீர்கள்?',
        translation: 'Olá! Meu nome é Kavitha. Como você está?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'வணக்கம்! நான் நல்லா இருக்கின்றேன், நன்றி.', translation: 'Olá! Eu estou bem, obrigado(a).', next: 'nalla' },
          { text: 'எனக்கு சோறு வேண்டும்.', translation: 'Eu quero comida.', wrong: 'Kavitha acabou de se apresentar e perguntar como você está: pedir comida agora seria estranho. Responda primeiro.' },
        ],
      },
      nalla: {
        text: 'நல்லது! உங்கள் பெயர் என்ன?',
        translation: 'Que bom! Qual é o seu nome?',
        emoji: '😊',
        choices: [
          { text: 'என் பெயர் ... .', translation: 'Meu nome é ... .', next: 'final_bom' },
          { text: 'எனக்கு ஒரு அண்ணன் உண்டு.', translation: 'Eu tenho um irmão mais velho.', wrong: 'Isso não responde qual é o seu nome. Use “என் பெயர் … .”.' },
        ],
      },
      final_bom: {
        text: 'மிகவும் நல்லது! மெரினா கடற்கரைக்கு வணக்கம்.',
        translation: 'Muito bom! Bem-vindo(a) à praia de Marina.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'முதல் உரையாடல்', message: 'Kavitha sorri: você fez a sua primeira conversa em tâmil na praia de Marina.' },
      },
    },
    glossary: [
      ['வணக்கம்', 'oi, olá (cumprimento formal)'],
      ['நீங்கள் எப்படி இருக்கின்றீர்கள்?', 'como você está? (formal)'],
      ['நான் நல்லா இருக்கின்றேன்', 'eu estou bem'],
      ['பெயர்', 'nome'],
    ],
  },
  {
    id: 'ta-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'பொங்கல் பண்டிகை',
    emoji: '🌾',
    summary: 'முருகன் (Murugan) pergunta pela sua família durante a festa do Pongal.',
    cultural_context:
      'O Pongal é a festa da colheita do tâmil, em janeiro, quando se ferve arroz com leite e melaço até transbordar da panela — um símbolo de fartura — enquanto a família se reúne para homenagear o sol e o gado que ajudou na lavoura.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'வணக்கம்! பொங்கல் நல்வாழ்த்துகள்! உங்களுக்கு ஒரு அண்ணன் உண்டா?',
        translation: 'Olá! Feliz Pongal! Você tem um irmão mais velho?',
        emoji: '🌾',
        choices: [
          { text: 'ஆம், எனக்கு ஒரு அண்ணன் உண்டு.', translation: 'Sim, eu tenho um irmão mais velho.', next: 'annan' },
          { text: 'இது என் வீடு.', translation: 'Esta é a minha casa.', wrong: 'Isso não responde sobre o seu irmão. Use “ஆம்/இல்லை, எனக்கு ஒரு அண்ணன் உண்டு/இல்லை.”.' },
        ],
      },
      annan: {
        text: 'நல்லது! எனக்கும் ஒரு தங்கை உண்டு. உங்களுக்கு?',
        translation: 'Que bom! Eu também tenho uma irmã mais nova. E você?',
        emoji: '😊',
        choices: [
          { text: 'எனக்கு ஒரு அக்கா உண்டு.', translation: 'Eu tenho uma irmã mais velha.', next: 'final_bom' },
          { text: 'எனக்கு தண்ணீர் வேண்டும்.', translation: 'Eu quero água.', wrong: 'Isso não responde sobre os seus irmãos. Fale da sua família com “எனக்கு … உண்டு.”.' },
        ],
      },
      final_bom: {
        text: 'மிகவும் நல்லது! என் குடும்பம் பெரிய குடும்பம்.',
        translation: 'Muito bom! Minha família é uma família grande.',
        emoji: '👪',
        ending: { tone: 'bom', title: 'பொங்களோ பொங்கல்', message: 'Murugan sorri: agora você sabe contar sobre a sua família em tâmil, bem na época do Pongal.' },
      },
    },
    glossary: [
      ['அண்ணன் / அக்கா', 'irmão / irmã mais velho(a)'],
      ['எனக்கு … உண்டு', 'eu tenho … (parente)'],
      ['பொங்கல்', 'Pongal, a festa tâmil da colheita'],
      ['குடும்பம்', 'família'],
    ],
  },
];
