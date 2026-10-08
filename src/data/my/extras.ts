import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no birmanês). */
export const COMMUNITY_MY: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'ခင်ဗျား နာမည် နှင့် ခင်ဗျား မိသားစု အကြောင်း ပြောပါ။',
    content: 'မင်္ဂလာပါ။ ကျွန်မ နာမည် Bruno ပါ။',
    reference: 'မင်္ဂလာပါ။ ကျွန်တော့် နာမည် Bruno ပါ။',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'ဘာ ကြိုက်လဲ၊ ခွေး ရှိလား။',
    content: 'ကျွန်မ ကော်ဖီ ကြိုက်တယ်။ ကျွန်မ နှစ် ခွေး ရှိတယ်။',
    reference: 'ကျွန်မ ကော်ဖီ ကြိုက်တယ်။ ကျွန်မ ခွေး နှစ် ကောင် ရှိတယ်။',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'မိသားစု အကြောင်း ပြောပါ။',
    content: 'ကျွန်တော့် ညီမ ရှိတယ်။ သူ သေးတယ်။',
    reference: 'ကျွန်တော့် နှမ ရှိတယ်။ သူ သေးတယ်။',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_MY: ScenarioSeed[] = [
  {
    id: 'my-s1',
    title: 'ကော်ဖီဆိုင် မှာ',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'ဆု၊ သူငယ်ချင်း',
    description: 'Hsu convida você para um café. É uma conversa entre amigos.',
    turns: [
      {
        bot: 'ကော်ဖီ ဒါမှမဟုတ် လက်ဖက်ရည်: ဘာ ကြိုက်လဲ။',
        botTranslation: 'Café ou chá: o que você gosta?',
        keywords: ['ကော်ဖီ', 'လက်ဖက်ရည်'],
        suggestions: ['ကျွန်တော် ကော်ဖီ ကြိုက်တယ်။', 'ကျွန်မ လက်ဖက်ရည် ကြိုက်တယ်။'],
      },
      {
        bot: 'ခင်ဗျား မိသားစု ကြီးလား။',
        botTranslation: 'A sua família é grande, senhor?',
        keywords: ['မိသားစု'],
        suggestions: ['ဟုတ်ကဲ့၊ ကျွန်တော့် မိသားစု ကြီးတယ်။', 'ဟုတ်ကဲ့၊ ကျွန်မ မိသားစု ကြီးတယ်။'],
      },
    ],
  },
];

/** Palavras do birmanês com a raiz e os parentes em outras línguas. */
export const ETYMOLOGY_MY: EtymologySeed[] = [
  {
    word: 'ခွေး',
    root_word: '*d-kʷəj-n',
    origin_language: 'Proto-sino-tibetano',
    cognates: c(['bo', 'ཁྱི (khyi)'], ['zh', '犬 (quǎn)']),
    evolution_note:
      'O birmanês é parente distante do chinês mandarim e do tibetano: os três vêm do sino-tibetano, uma família muito mais antiga que o tempo que separa o latim do português. "ခွေး" tem primas no tibetano "ཁྱི" e no chinês antigo, registradas no STEDT (Sino-Tibetan Etymological Dictionary and Thesaurus).',
    transparent: false,
  },
  {
    word: 'ကြီး',
    root_word: '*b-gryas',
    origin_language: 'Proto-tibeto-birmanês',
    cognates: c(['zh', '耆 (qí, “idoso”)']),
    evolution_note:
      '"ကြီး" (grande; também "mais velho" de família) vem de uma raiz protótibeto-birmanesa para "velho". O mesmo radical aparece no caractere chinês "耆" (qí), que hoje quer dizer "idoso" — o sentido de "velho" e "grande" caminham juntos em várias línguas da família.',
    transparent: false,
  },
  {
    word: 'သေး',
    root_word: '*z(y)əy',
    origin_language: 'Proto-sino-tibetano',
    cognates: c(['zh', '細 (xì, “pequeno, fino”)']),
    evolution_note:
      '"သေး" (pequeno) e o caractere chinês "細" (xì, "fino, pequeno") vêm da mesma raiz sino-tibetana para "pequeno, não maduro".',
    transparent: false,
  },
  {
    word: 'ကော်ဖီ',
    root_word: 'coffee',
    origin_language: 'Inglês (de origem árabe)',
    cognates: c(['en', 'coffee'], ['pt', 'café'], ['ar', 'قهوة (qahwa)']),
    evolution_note:
      '"ကော်ဖီ" é um empréstimo direto do inglês "coffee" — a mesma palavra árabe "qahwa" que deu o português "café", só que chegou ao birmanês pela via do inglês colonial, não pelo turco/europeu como no português.',
    transparent: true,
  },
  {
    word: 'ကြက်',
    root_word: '(onomatopeia)',
    origin_language: 'Onomatopeia birmanesa',
    cognates: c(['en', 'cluck']),
    evolution_note:
      '"ကြက်" (galinha) parece vir do próprio som que a galinha faz — o Wiktionary compara com o inglês "cluck" (o cacarejar). Tentativas antigas de ligar a palavra ao páli "kakkara" (galo) hoje são vistas como menos prováveis que a origem onomatopeica.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_MY: [string, string][] = [
  ['ဒီနေ့ ဘယ်လို နေလဲ။', 'Como você está hoje?'],
  ['မိသားစု အကြောင်း ပြောပါ။', 'Fale sobre a sua família.'],
  ['ဘာ ကြိုက်လဲ။', 'O que você gosta?'],
  ['ဒီနေ့ ဘာ စားလဲ။', 'O que você comeu hoje?'],
];

export const SHADOWING_MY: [string, string][] = [
  ['မင်္ဂလာပါ! ကျွန်တော့် နာမည် လီနူ ပါ။', 'Olá! Meu nome é Linu.'],
  ['ကျွန်တော် ကော်ဖီ ကြိုက်တယ်။', 'Eu gosto de café.'],
  ['ကျွန်မ မိသားစု ကြီးတယ်။', 'A minha família é grande.'],
  ['ကျေးဇူးတင်ပါတယ်!', 'Obrigado!'],
];
