import type { StorySeed } from '../types';

/** Histórias interativas do georgiano — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
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
];
