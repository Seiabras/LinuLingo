import type { StorySeed } from '../types';

/** Histórias interativas do laosiano — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_LO: StorySeed[] = [
  {
    id: 'lo-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'ສະບາຍດີຢູ່ວຽງຈັນ',
    emoji: '👋',
    summary: 'Você conhece o ບຸນມີ (Bounmy) perto do ທາດຫຼວງ, em Vientiane, e faz a sua primeira conversa em laosiano.',
    cultural_context: 'O ທາດຫຼວງ (That Luang) é um estupa budista coberto de ouro, em Vientiane, considerado o símbolo nacional do Laos — acredita-se que guarde uma relíquia do Buda. Foi reconstruído no século XX depois de ser destruído em conflitos regionais.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'ສະບາຍດີ, ຂ້ອຍຊື່ບຸນມີ. ສະບາຍດີບໍ່',
        translation: 'Oi! Eu me chamo Bounmy. Como você vai?',
        emoji: '🙋',
        choices: [
          { text: 'ສະບາຍດີ, ຂ້ອຍສະບາຍດີ, ຂອບໃຈ', translation: 'Oi! Eu vou bem, obrigado(a)!', next: 'sabaai' },
          { text: 'ໂຊກດີເດີ', translation: 'Até logo!', wrong: 'Bounmy acabou de se apresentar e perguntar como você está: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      sabaai: {
        text: 'ດີ, ເຈົ້າຊື່ຫຍັງ, ແລະ ເຈົ້າມາແຕ່ໃສ',
        translation: 'Que bom! Qual é o seu nome, e de onde você vem?',
        emoji: '😊',
        choices: [
          { text: 'ຂ້ອຍຊື່ລູກາສ, ຂ້ອຍມາຈາກບຣາຊິນ', translation: 'Eu me chamo Lucas. Eu venho do Brasil.', next: 'final_bom' },
          { text: 'ຂ້ອຍກິນເຂົ້າ', translation: 'Eu como arroz.', wrong: 'Isso não responde seu nome nem de onde você vem. Use “ຂ້ອຍຊື່…” e “ຂ້ອຍມາຈາກ…”.' },
        ],
      },
      final_bom: {
        text: 'ຍິນດີຫຼາຍ. ນີ້ແມ່ນທາດຫຼວງ',
        translation: 'Que prazer! Este é o That Luang.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'ວຽງຈັນ', message: 'Bounmy sorri: você fez a sua primeira conversa em laosiano, perto do That Luang.' },
      },
    },
    glossary: [
      ['ສະບາຍດີ', 'oi, olá; tchau'],
      ['ສະບາຍດີບໍ່', 'como vai?'],
      ['ຊື່…', 'me chamo…'],
      ['ມາຈາກ…', 'eu venho de…'],
    ],
  },
  {
    id: 'lo-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'ກິນເຂົ້າແລງຢູ່ຫຼວງພະບາງ',
    emoji: '👪',
    summary: 'ແສງ (Saeng), um(a) amigo(a) de Luang Prabang, pergunta pela sua família e convida você para comer na casa dele(a).',
    cultural_context: 'Luang Prabang foi a primeira capital do reino de Lan Xang, fundado em 1353, e continuou como residência real até o século XX. Hoje é Patrimônio Mundial da UNESCO, às margens do rio Mekong (ແມ່ນ້ຳຂອງ), com dezenas de templos budistas — e é comum que uma refeição reúna várias gerações da família.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'ສະບາຍດີ, ຄອບຄົວຂອງເຈົ້າໃຫຍ່ບໍ່',
        translation: 'Oi! A sua família é grande?',
        emoji: '📱',
        choices: [
          { text: 'ແມ່ນ, ຄອບຄົວຂອງຂ້ອຍໃຫຍ່. ຂ້ອຍມີນ້ອງສາວນຶ່ງຄົນ', translation: 'Sim, a minha família é grande. Eu tenho uma irmã mais nova.', next: 'nongsaao' },
          { text: 'ເຮືອນຂອງຂ້ອຍນ້ອຍ', translation: 'A minha casa é pequena.', wrong: 'Isso não responde se a sua família é grande. Use “ແມ່ນ…” ou “ບໍ່…”.' },
        ],
      },
      nongsaao: {
        text: 'ດີຫຼາຍ! ເຈົ້າຢາກກິນເຂົ້າຢູ່ເຮືອນຂ້ອຍວັນເສົາບໍ່',
        translation: 'Que ótimo! Você quer comer na minha casa no sábado?',
        emoji: '🍽️',
        choices: [
          { text: 'ຢາກ, ຂອບໃຈຫຼາຍ', translation: 'Eu quero, muito obrigado(a)!', next: 'final_bom' },
          { text: 'ຂ້ອຍຢູ່ວຽງຈັນ', translation: 'Eu moro em Vientiane.', wrong: 'Saeng fez um convite: responda dizendo se você quer ir, com “ຢາກ” ou “ບໍ່ຢາກ”.' },
        ],
      },
      final_bom: {
        text: 'ດີຫຼາຍ! ເຂົ້າຂອງແມ່ຂ້ອຍແຊບຫຼາຍ',
        translation: 'Ótimo! O arroz da minha mãe é muito gostoso.',
        emoji: '🍚',
        ending: { tone: 'bom', title: 'ຫຼວງພະບາງ', message: 'Você foi convidado(a) para comer com a família de Saeng em Luang Prabang.' },
      },
    },
    glossary: [
      ['ຄອບຄົວ', 'família'],
      ['ຂ້ອຍມີ…', 'eu tenho…'],
      ['ຢາກ', 'querer'],
      ['ແຊບ', 'gostoso'],
    ],
  },
];
