import type { StorySeed } from '../types';

/** Histórias interativas do georgiano — uma por subnível, de A1.1 até A2.2 (pacote incompleto). */
export const STORIES_KA: StorySeed[] = [
  {
    id: 'ka-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'გამარჯობა თბილისში',
    emoji: '🏰',
    summary: 'Perto da fortaleza de Narikala, na Cidade Velha de Tbilisi, alguém puxa conversa com você.',
    cultural_context: 'A fortaleza de Narikala, erguida no século IV e ampliada por invasores árabes nos séculos VII e VIII, olha de cima para a Cidade Velha de Tbilisi e para o rio Mtkvari — um bom lugar para encontrar gente disposta a bater papo.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'გამარჯობა! როგორ ხარ?',
        translation: 'Oi! Como vai?',
        emoji: '🙋',
        choices: [
          { text: 'კარგად ვარ, გმადლობთ. შენ?', translation: 'Vou bem, obrigado(a)! E você?', next: 'kargad' },
          { text: 'ნახვამდის!', translation: 'Tchau!', wrong: 'A pessoa acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      kargad: {
        text: 'მეც კარგად. საიდან ხარ?',
        translation: 'Eu também vou bem. De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'მე ბრაზილიადან ვარ.', translation: 'Eu sou do Brasil.', next: 'final_bun' },
          { text: 'მე წყალს ვსვამ.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “მე … ვარ”.' },
        ],
      },
      final_bun: {
        text: 'ეს ძალიან კარგია! კეთილი იყოს შენი მობრძანება თბილისში.',
        translation: 'Isso é muito bom! Bem-vindo(a) a Tbilisi.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'პირველი საუბარი', message: 'Você fez a sua primeira conversa em georgiano na Cidade Velha de Tbilisi.' },
      },
    },
    glossary: [
      ['გამარჯობა', 'oi, olá'],
      ['როგორ ხარ', 'como vai?'],
      ['საიდან ხარ', 'de onde você é?'],
      ['კეთილი იყოს შენი მობრძანება', 'bem-vindo(a)'],
    ],
  },
  {
    id: 'ka-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'ხინკალი და ოჯახი',
    emoji: '🥟',
    summary: 'Numa pequena casa de khinkali em Tbilisi, alguém pergunta pela sua família e convida você para comer junto.',
    cultural_context: 'O khinkali, trouxinha de massa recheada típica das montanhas georgianas, se come com as mãos, segurando pelo “nó” no topo — que tradicionalmente fica no prato, sem ser comido.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'გამარჯობა! და ან ძმა გყავს?',
        translation: 'Oi! Você tem irmã ou irmão?',
        emoji: '📱',
        choices: [
          { text: 'კი, მყავს ერთი ძმა.', translation: 'Sim, eu tenho um irmão.', next: 'ojakhi' },
          { text: 'ჩემი სახლი პატარაა.', translation: 'A minha casa é pequena.', wrong: 'Isso não responde se você tem irmãos. Use “მყავს” ou “არა, არ მყავს”.' },
        ],
      },
      ojakhi: {
        text: 'ძალიან კარგია! გინდა ხინკალი ჭამა?',
        translation: 'Que ótimo! Você quer comer khinkali?',
        emoji: '🥟',
        choices: [
          { text: 'კი, მინდა! დიდი მადლობა.', translation: 'Sim, quero! Muito obrigado(a).', next: 'final_bun' },
          { text: 'მე თბილისში ვცხოვრობ.', translation: 'Eu moro em Tbilisi.', wrong: 'Isso não responde ao convite. Use “კი, მინდა” ou “არა, მადლობა”.' },
        ],
      },
      final_bun: {
        text: 'კარგი! ეს ხინკალი ძალიან გემრიელია.',
        translation: 'Ótimo! Este khinkali é muito gostoso.',
        emoji: '🧀',
        ending: { tone: 'bom', title: 'ხინკალი ერთად', message: 'Você comeu khinkali em boa companhia em Tbilisi.' },
      },
    },
    glossary: [
      ['და / ძმა', 'irmã / irmão'],
      ['მყავს', 'eu tenho (alguém, um bicho)'],
      ['მინდა', 'eu quero'],
      ['გემრიელია', 'é gostoso(a)'],
    ],
  },
  {
    id: 'ka-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'ბაზარში ბათუმში',
    emoji: '🌊',
    summary: 'No bazar de Batumi, perto do Mar Negro, alguém ajuda você a escolher uma roupa num dia chuvoso.',
    cultural_context: 'Batumi, porto principal da Geórgia no Mar Negro, é a cidade mais chuvosa do país — um bom motivo para aprender vocabulário de roupa e de tempo ao mesmo tempo.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'გამარჯობა! დღეს წვიმა არის. რა გინდა?',
        translation: 'Oi! Hoje tem chuva. O que você quer?',
        emoji: '🙋',
        choices: [
          { text: 'გამარჯობა! მე მინდა ახალი ქუდი.', translation: 'Oi! Eu quero um chapéu novo.', next: 'kudi' },
          { text: 'მე ოცი წლის ვარ.', translation: 'Eu tenho vinte anos.', wrong: 'A pessoa perguntou o que você quer, não a sua idade. Use “მე მინდა …”.' },
        ],
      },
      kudi: {
        text: 'კარგი! ამ მაღაზიაში ლამაზი ტანსაცმელიც არის.',
        translation: 'Ótimo! Esta loja também tem roupas bonitas.',
        emoji: '🧢',
        choices: [
          { text: 'ეს რა ღირს?', translation: 'Quanto custa isto?', next: 'final_bun' },
          { text: 'დღეს დიდი სიცხე არის.', translation: 'Hoje tem muito calor.', wrong: 'Isso não combina com o dia chuvoso que a pessoa mencionou. Pergunte o preço: “ეს რა ღირს?”.' },
        ],
      },
      final_bun: {
        text: 'ეს ორმოცი ლარი ღირს.',
        translation: 'Isto custa quarenta laris.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'ყიდვა ბათუმში', message: 'Você comprou a sua primeira roupa num bazar georgiano, debaixo de chuva.' },
      },
    },
    glossary: [
      ['მინდა', 'eu quero'],
      ['წვიმა არის', 'tem chuva, está chovendo'],
      ['რა ღირს', 'quanto custa'],
      ['მაღაზია', 'loja'],
    ],
  },
  {
    id: 'ka-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'კახეთში: ახალი დაწყება',
    emoji: '🍇',
    summary: 'Numa vinícola de Kakheti, onde o vinho envelhece em potes de qvevri, alguém pergunta sobre a sua profissão e os seus planos.',
    cultural_context: 'Kakheti concentra a maior parte dos vinhedos da Geórgia, e a tradição do vinho em qvevri (potes de barro enterrados no chão) foi reconhecida pela UNESCO como Patrimônio Cultural Imaterial em 2013.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'გამარჯობა! რას მუშაობ?',
        translation: 'Oi! Qual é o seu trabalho?',
        emoji: '📱',
        choices: [
          { text: 'მე ინჟინერი ვარ.', translation: 'Eu sou engenheiro(a).', next: 'mushaoba' },
          { text: 'დღეს წვიმა არის.', translation: 'Hoje tem chuva.', wrong: 'Isso não responde sobre o seu trabalho. Diga a sua profissão.' },
        ],
      },
      mushaoba: {
        text: 'კარგი! ხვალ რას გააკეთებ?',
        translation: 'Ótimo! O que você vai fazer amanhã?',
        emoji: '😊',
        choices: [
          { text: 'ხვალ ვმუშაობ.', translation: 'Amanhã eu trabalho.', next: 'final_bun' },
          { text: 'მე ნაღვლიანი ვარ.', translation: 'Eu estou triste.', wrong: 'A pessoa perguntou sobre os seus planos de amanhã, não sobre como você se sente. Fale do seu plano.' },
        ],
      },
      final_bun: {
        text: 'ძალიან კარგი! მე ბედნიერი ვარ, რომ ქართულს სწავლობ.',
        translation: 'Muito bom! Eu estou feliz que você esteja aprendendo georgiano.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'ახალი დაწყება', message: 'Você falou sobre o seu trabalho e os seus planos de futuro em georgiano, em Kakheti.' },
      },
    },
    glossary: [
      ['მუშაობა', 'trabalhar'],
      ['ხვალ გააკეთებ', 'você vai fazer amanhã'],
      ['ვმუშაობ', 'eu trabalho'],
      ['ბედნიერი', 'feliz'],
    ],
  },
];
