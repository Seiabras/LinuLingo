import type { StorySeed } from '../types';

/**
 * Histórias interativas do tâmil — uma por subnível de A1.1 a A2.2 (pacote incompleto, falta do B1
 * em diante). As duas últimas (A2.1 e A2.2) praticam o locativo “-இல்”, o dativo com sentimentos e o
 * futuro de “இரு”, ensinados nas unidades 3 e 4 de curriculo.ts, com as mesmas fontes citadas lá.
 */
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
  {
    id: 'ta-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'கடையில் பசி',
    emoji: '🏪',
    summary: 'கவிதா (Kavitha) encontra você numa loja em Chennai e pergunta como você está se sentindo.',
    cultural_context:
      'Até 1996, a capital de Tamil Nadu se chamava Madras — o governo do estado mudou oficialmente o nome para Chennai naquele ano, embora “Madras” ainda apareça em nomes de lugares e de coisas batizadas antes da troca.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'வணக்கம்! நீங்கள் எங்கே இருக்கின்றீர்கள்?',
        translation: 'Oi! Onde você está?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'நான் கடையில் இருக்கின்றேன்.', translation: 'Eu estou na loja.', next: 'pasi' },
          { text: 'இது என் வீடு.', translation: 'Esta é a minha casa.', wrong: 'Isso não responde onde você está agora. Use “நான் … இல் இருக்கின்றேன்.”.' },
        ],
      },
      pasi: {
        text: 'நல்லது! உங்களுக்கு பசி உண்டா?',
        translation: 'Bom! Você está com fome?',
        emoji: '🤤',
        choices: [
          { text: 'ஆம், எனக்கு பசி உண்டு.', translation: 'Sim, estou com fome.', next: 'final_bom' },
          { text: 'எனக்கு பயம் உண்டு.', translation: 'Estou com medo.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        text: 'நல்லது! கடையில் சோறு உண்டு.',
        translation: 'Bom! Na loja há comida.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'கடையில் சோறு', message: 'Você disse onde está com “-இல்” e como se sente com “எனக்கு … உண்டு” — ótima prática de tâmil!' },
      },
      final_neutro: {
        text: 'பயமும் ஒரு உணர்வு.',
        translation: 'Medo também é um sentimento.',
        emoji: '😨',
        ending: { tone: 'neutro', title: 'பயம் சரி', message: 'Medo também é um sentimento válido — e você já sabe usar “-இல்” e “உண்டு” muito bem.' },
      },
    },
    glossary: [
      ['-இல்', 'em, dentro de (sufixo locativo)'],
      ['எனக்கு … உண்டு', 'estou com … (sentimento)'],
      ['பசி / பயம்', 'fome / medo'],
      ['உணர்வு', 'sentimento, emoção'],
    ],
  },
  {
    id: 'ta-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'நாளை மழை',
    emoji: '🌧️',
    summary: 'முருகன் (Murugan) e você planejam o dia de amanhã, falando do tempo e do que vão vestir.',
    cultural_context:
      'A maior parte da Índia recebe chuva com o monção do sudoeste (junho a setembro), mas Tamil Nadu depende mais do monção do nordeste (outubro a dezembro), responsável por cerca de 48% da chuva anual do estado, segundo dados do IMD, o Departamento Meteorológico da Índia.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'வணக்கம்! நாளை மழை இருக்குமா?',
        translation: 'Oi! Vai chover amanhã?',
        emoji: '🌧️',
        choices: [
          { text: 'ஆம், நாளை மழை இருக்கும்.', translation: 'Sim, vai chover amanhã.', next: 'udai' },
          { text: 'அவன் மருத்துவர்.', translation: 'Ele é médico.', wrong: 'Isso não responde se vai chover amanhã. Use “நாளை … இருக்கும்.”.' },
        ],
      },
      udai: {
        text: 'நல்லது! உங்களுக்கு என்ன வேண்டும்?',
        translation: 'Bom! O que você precisa?',
        emoji: '🧢',
        choices: [
          { text: 'ஆம், எனக்கு ஒரு தொப்பி வேண்டும்.', translation: 'Sim, eu quero um boné.', next: 'final_bom' },
          { text: 'எனக்கு ஒரு செருப்பு வேண்டும்.', translation: 'Eu quero um chinelo.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        text: 'இது நல்ல தொப்பி!',
        translation: 'Este é um bom boné!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'நல்ல தொப்பி', message: 'Você falou do tempo de amanhã com “இருக்கும்” e pediu o que precisa com “எனக்கு … வேண்டும்”.' },
      },
      final_neutro: {
        text: 'இது நல்ல செருப்பு!',
        translation: 'Este é um bom chinelo!',
        emoji: '👡',
        ending: { tone: 'neutro', title: 'நல்ல செருப்பு', message: 'Um chinelo novo também é uma boa escolha para um dia de chuva.' },
      },
    },
    glossary: [
      ['நாளை … இருக்கும்', 'amanhã vai … (futuro de “இரு”)'],
      ['எனக்கு … வேண்டும்', 'eu quero/preciso de …'],
      ['தொப்பி / செருப்பு', 'boné / chinelo'],
    ],
  },
];
