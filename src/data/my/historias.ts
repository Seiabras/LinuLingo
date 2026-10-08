import type { StorySeed } from '../types';

/**
 * Histórias interativas do birmanês — por enquanto uma por nível (A1.1 e A1.2), pacote
 * incompleto. "ဆု" (Hcu) é um nome birmanês de verdade, conferido no apêndice de nomes próprios
 * do Wiktionary em inglês (Appendix:Burmese given names).
 */
export const STORIES_MY: StorySeed[] = [
  {
    id: 'my-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'မင်္ဂလာပါ ရန်ကုန်မှာ',
    emoji: '👋',
    summary: 'Você chega a Yangon e conhece Hsu, que pergunta o seu nome.',
    cultural_context: 'Yangon (antiga Rangum) foi a capital de Myanmar até 2006, quando o governo mudou a capital para Naypyidaw; ainda hoje é a maior cidade e o principal centro comercial do país.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'မင်္ဂလာပါ! ကျွန်မ နာမည် ဆု ပါ။ ခင်ဗျား နာမည် ဘာလဲ။',
        translation: 'Olá! Meu nome é Hsu. Qual é o seu nome, senhor?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'ကျွန်တော့် နာမည် လီနူ ပါ။', translation: 'Meu nome é Linu.', next: 'nome' },
          { text: 'ကော်ဖီ ကြိုက်တယ်။', translation: 'Eu gosto de café.', wrong: 'Hsu perguntou o seu nome, não o que você gosta de beber. Responda com “ကျွန်တော့်/ကျွန်မ နာမည် ... ပါ။”.' },
        ],
      },
      nome: {
        text: 'ကျေးဇူးတင်ပါတယ်၊ လီနူ။ ကော်ဖီ ဒါမှမဟုတ် လက်ဖက်ရည်: ဘာ ကြိုက်လဲ။',
        translation: 'Obrigada, Linu. Café ou chá: o que você gosta?',
        emoji: '☕',
        choices: [
          { text: 'ကျွန်တော် လက်ဖက်ရည် ကြိုက်တယ်။', translation: 'Eu gosto de chá.', next: 'final_bom' },
          { text: 'ဟင့်အင်း။', translation: 'Não.', wrong: 'Hsu perguntou qual dos dois você gosta, não se você gosta ou não. Escolha “ကော်ဖီ” ou “လက်ဖက်ရည်” com “ကြိုက်တယ်”.' },
        ],
      },
      final_bom: {
        text: 'ကောင်းတယ်! ကျွန်မ လက်ဖက်ရည် ကြိုက်တယ်။',
        translation: 'Que bom! Eu gosto de chá.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'ကောင်းတယ်!', message: 'Hsu sorri: você fez a sua primeira conversa em birmanês em Yangon.' },
      },
    },
    glossary: [
      ['မင်္ဂလာပါ', 'olá'],
      ['နာမည်', 'nome'],
      ['ကြိုက်', 'gostar'],
      ['ကျေးဇူးတင်ပါတယ်', 'obrigado'],
    ],
  },
  {
    id: 'my-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'သူငယ်ချင်းအိမ်မှာ',
    emoji: '👪',
    summary: 'Hsu convida você para a casa dela e pergunta sobre a sua família.',
    cultural_context: 'Visitar a casa de amigos para uma xícara de chá é comum em Myanmar; é educado aceitar o que é oferecido.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'မင်္ဂလာပါ! ခင်ဗျား မိသားစု ကြီးလား။',
        translation: 'Olá! A sua família é grande?',
        emoji: '👪',
        choices: [
          { text: 'ဟုတ်ကဲ့၊ ကျွန်တော့် မိသားစု ကြီးတယ်။', translation: 'Sim, a minha família é grande.', next: 'familia' },
          { text: 'ရေ သောက်တယ်။', translation: 'Eu bebo água.', wrong: 'Isso não responde se a sua família é grande ou não. Responda com “ဟုတ်ကဲ့”/“ဟင့်အင်း”.' },
        ],
      },
      familia: {
        text: 'ကျွန်မ လက်ဖက်ရည် ရှိတယ်။ ကြိုက်လား။',
        translation: 'Eu tenho chá. Você gosta?',
        emoji: '🍵',
        choices: [
          { text: 'ကြိုက်တယ်၊ ကျေးဇူးတင်ပါတယ်။', translation: 'Gosto, obrigado.', next: 'final_bom' },
          { text: 'ကလေး သုံး ယောက် ရှိတယ်။', translation: 'Eu tenho três filhos.', wrong: 'Hsu perguntou se você gosta de chá, não sobre filhos. Responda “ကြိုက်တယ်” ou “ဟင့်အင်း”.' },
        ],
      },
      final_bom: {
        text: 'ကောင်းတယ်! ထမင်း ရှိတယ်။',
        translation: 'Que bom! Tem arroz.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'ကောင်းတယ်!', message: 'Você tomou chá na casa de Hsu e falou da sua família em birmanês.' },
      },
    },
    glossary: [
      ['မိသားစု', 'família'],
      ['ကြီး', 'grande'],
      ['လက်ဖက်ရည်', 'chá'],
      ['ကြိုက်', 'gostar'],
    ],
  },
];
