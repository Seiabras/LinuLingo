import type { UnitSeed } from '../types';

/**
 * Trilha do birmanês — por enquanto só as duas unidades do nível A1 (pacote incompleto, ver
 * `incomplete` em index.ts). Nomes próprios de exemplo usam «လီနူ» (Linu, o pinguim-mascote),
 * para não arriscar errar a grafia de um nome birmanês de verdade.
 */
export const UNITS_MY: UnitSeed[] = [
  {
    id: 'my-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'မင်္ဂလာပါ! ပထမဆုံး စကားများ',
    emoji: '👋',
    card: {
      id: 'my-c1',
      title: 'A escrita redonda que veio da Índia',
      emoji: '🇲🇲',
      history:
        'A escrita birmanesa é um abugida (cada letra já carrega uma vogal "a" embutida, que muda com sinais ao redor) que desce, por meio das escritas mon e pyu mais antigas, do alfabeto brâmico da Índia — a mesma família de origem do devanágari do híndi e do cingalês. As inscrições mais antigas em birmanês propriamente dito datam do início do século XII, em Bagan, capital do primeiro império birmanês. As letras são cheias de curvas porque, durante séculos, eram gravadas com um estilete em folhas secas de palmeira: traços retos rasgavam a folha.',
      culture_tip:
        'Tradicionalmente, os birmaneses não usam sobrenome de família: o nome é só o nome próprio, às vezes escolhido com uma sílaba inicial associada ao dia da semana em que a pessoa nasceu (por exemplo, quem nasce num domingo ganha nomes que começam com certas letras). Títulos como "U" (senhor, para homens mais velhos) ou "Daw" (senhora) vêm antes do nome, não substituem um sobrenome.',
      grammar_why:
        'O birmanês é SOV (sujeito-objeto-verbo) e quase sempre termina a frase numa partícula: "တယ်" ou, de forma mais educada, "ပါတယ်", depois do verbo. "ကျွန်တော် ထမင်း စားတယ်။" é, palavra por palavra, "eu arroz comer-FINAL" — "Eu como arroz." O pronome "eu" muda com quem fala: ver o tópico de gramática "Pronomes: quem fala decide a palavra".',
      grammar_examples: [
        ['မင်္ဂလာပါ!', 'Olá!'],
        ['ကျွန်တော့် နာမည် လီနူ ပါ။', 'Meu nome é Linu.'],
        ['ကျွန်တော် ကော်ဖီ ကြိုက်တယ်။', 'Eu gosto de café.'],
      ],
      character_guide: [
        ['တယ်', 'o final mais comum de uma frase afirmativa, depois do verbo', 'ကြိုက်တယ် (gosto)'],
        ['ပါ', 'torna a frase mais educada (pedido, apresentação)', 'ကျေးဇူးပြု၍ ပြောပါ။ (por favor, fale)'],
        ['း (visarga)', 'marca o tom alto da sílaba (lido “:” na romanização)', 'ခွေး (cachorro, “hkwe:”)'],
        ['့ (ponto embaixo)', 'marca o tom rangido/curto da sílaba (lido “.” na romanização)', 'ဟုတ်ကဲ့ (sim, “hutkai.”)'],
        ['ရ', 'no birmanês de hoje soa “y”, não “r”', 'ရေ (água, “re”, soa “ye”)'],
        ['ဟ', '“h” aspirado, puxado da garganta', 'ဟင့်အင်း (não)'],
      ],
    },
    lessons: [
      {
        id: 'my-u1-l1',
        title: 'မင်္ဂလာပါ! ကျေးဇူးတင်ပါတယ်!',
        kind: 'licao',
        words: ['မင်္ဂလာပါ', 'ကျေးဇူးတင်ပါတယ်', 'ကျေးဇူးပြု၍', 'ဟုတ်ကဲ့', 'ဟင့်အင်း', 'နာမည်'],
        cloze: [
          { sentence: '___! ကျွန်တော့် နာမည် လီနူ ပါ။', answer: 'မင်္ဂလာပါ', options: ['မင်္ဂလာပါ', 'ဟင့်အင်း', 'ကျေးဇူးတင်ပါတယ်'], translation: 'Olá! Meu nome é Linu.' },
          { sentence: '___ ပြောပါ။', answer: 'ကျေးဇူးပြု၍', options: ['ကျေးဇူးပြု၍', 'ဟင့်အင်း', 'ဟုတ်ကဲ့'], translation: 'Por favor, fale.' },
          { sentence: 'ကော်ဖီ ကောင်းတယ်။ ___!', answer: 'ကျေးဇူးတင်ပါတယ်', options: ['ကျေးဇူးတင်ပါတယ်', 'ဟင့်အင်း', 'ကျေးဇူးပြု၍'], translation: 'O café está bom. Obrigado!' },
        ],
        voice: {
          bot: 'မင်္ဂလာပါ! နာမည် ဘာလဲ။',
          botTranslation: 'Olá! Qual é o nome?',
          expected: ['ကျွန်တော့် နာမည် လီနူ ပါ။', 'နာမည်', 'လီနူ'],
          hint: 'Diga seu nome com “ကျွန်တော့်/ကျွန်မ နာမည် ... ပါ။”.',
        },
        communityPrompt: 'Apresente-se em birmanês: saúde com “မင်္ဂလာပါ!” e diga seu nome com “ကျွန်တော့်/ကျွန်မ နာမည် ... ပါ။”.',
      },
      {
        id: 'my-u1-l2',
        title: 'ကျွန်တော်၊ ကျွန်မ၊ နင်',
        kind: 'licao',
        words: ['ကျွန်တော်', 'ကျွန်မ', 'နင်', 'ခင်ဗျား', 'ရှင်', 'သူ'],
        cloze: [
          { sentence: '___ ကော်ဖီ ကြိုက်တယ်။ (ယောက်ျား ပြောတာ)', answer: 'ကျွန်တော်', options: ['ကျွန်တော်', 'ကျွန်မ', 'သူ'], translation: 'Eu gosto de café. (fala de homem)' },
          { sentence: '___ ကော်ဖီ ကြိုက်တယ်။ (မိန်းမ ပြောတာ)', answer: 'ကျွန်မ', options: ['ကျွန်မ', 'ကျွန်တော်', 'နင်'], translation: 'Eu gosto de café. (fala de mulher)' },
          { sentence: 'ခင်ဗျား နာမည် ဘာလဲ။ — ___ နာမည် လီနူ ပါ။', answer: 'ကျွန်တော့်', options: ['ကျွန်တော့်', 'ကျွန်မ', 'နင်'], translation: 'Qual é o seu nome, senhor? — Meu nome é Linu.' },
        ],
        voice: {
          bot: 'ခင်ဗျား နာမည် ဘာလဲ။',
          botTranslation: 'Qual é o seu nome, senhor?',
          expected: ['ကျွန်တော့် နာမည် လီနူ ပါ။', 'ကျွန်တော့်'],
          hint: 'Responda com “ကျွန်တော့်/ကျွန်မ နာမည် ... ပါ။”.',
        },
        communityPrompt: 'Explique em português quando usar ကျွန်တော် (fala de homem), ကျွန်မ (fala de mulher), ခင်ဗျား/ရှင် (você, educado) e နင် (você, informal) em birmanês.',
      },
      {
        id: 'my-u1-l3',
        title: 'Teste: ပထမဆုံး စကားများ',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'မင်္ဂလာပါ! ခင်ဗျား နာမည် ဘာလဲ။',
          botTranslation: 'Olá! Qual é o seu nome, senhor?',
          expected: ['မင်္ဂလာပါ! ကျွန်တော့် နာမည် လီနူ ပါ။', 'နာမည်', 'လီနူ'],
          hint: 'Devolva a saudação (“မင်္ဂလာပါ!”) e diga o seu nome.',
        },
        communityPrompt: 'Escreva uma apresentação completa em birmanês: saudação, nome com “ကျွန်တော့်/ကျွန်မ နာမည် ... ပါ။” e um agradecimento.',
      },
    ],
  },
  {
    id: 'my-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'မိသားစု နှင့် ရေနွေးကြမ်း',
    emoji: '👪',
    card: {
      id: 'my-c2',
      title: 'Quem fala muda até os irmãos',
      emoji: '🧭',
      history:
        'O birmanês pertence à família sino-tibetana, ramo lolo-birmanês, e é parente distante (não "filho") do chinês mandarim — os dois vêm de um ancestral comum muito mais antigo que o latim é do português. As palavras para "cachorro" (ခွေး), "grande" (ကြီး) e "pequeno" (သေး), por exemplo, têm primas atestadas no chinês antigo e no tibetano, registradas no STEDT (Sino-Tibetan Etymological Dictionary and Thesaurus) — ver a aba Vocabulário, "de onde vêm as palavras".',
      culture_tip:
        'O chá é parte do dia a dia: além do "လက်ဖက်ရည်" (chá preto doce com leite condensado, servido em caldas de chá de rua chamadas "လက်ဖက်ရည်ဆိုင်"), existe também "လက်ဖက်သုပ်", uma salada feita com folhas de chá fermentadas — um prato tipicamente birmanês que não existe nos países vizinhos.',
      grammar_why:
        'Os irmãos "mais velhos" têm uma palavra só, que vale para quem fala seja homem ou mulher: "အစ်ကို" (irmão mais velho) e "အစ်မ" (irmã mais velha). Mas os irmãos "mais novos" dependem do gênero de quem fala: um homem chama o irmão mais novo de "ညီ" e a irmã mais nova de "နှမ"; uma mulher chama o irmão mais novo de "မောင်" e a irmã mais nova de "ညီမ". Ver a tabela completa no tópico de gramática desta unidade.',
      grammar_examples: [
        ['ကျွန်တော့် အစ်ကို ကြီးတယ်။', 'Meu irmão mais velho é grande/é mais velho.'],
        ['ကျွန်မ အစ်မ ရှိတယ်။', 'Eu (mulher) tenho uma irmã mais velha.'],
        ['အမေ လက်ဖက်ရည် သောက်တယ်။', 'A mãe bebe chá.'],
      ],
      character_guide: [
        ['ို', 'som “ui”', 'ကိုး (nove, “kui:”)'],
        ['ော်', 'som “au”, fechado', 'ကော်ဖီ (café, “kauhpi”)'],
        ['ည / ဉ', 'as duas letras soam “ny”', 'ညီ (irmão mais novo, na fala de homem, “nyi”)'],
        ['ှ', 'aspira a consoante anterior (um “h” antes dela)', 'ရှိ (ter, “hri.”), ရှင် (você, de mulher, “hrang”)'],
      ],
    },
    lessons: [
      {
        id: 'my-u2-l1',
        title: 'မိသားစု',
        kind: 'licao',
        words: ['မိသားစု', 'အဖေ', 'အမေ', 'အစ်ကို', 'အစ်မ', 'ကလေး'],
        cloze: [
          { sentence: 'ကျွန်တော့် ___ ကြီးတယ်။', answer: 'မိသားစု', options: ['မိသားစု', 'ကလေး', 'အဖေ'], translation: 'A minha família é grande.' },
          { sentence: '___ ထမင်း စားတယ်။', answer: 'အဖေ', options: ['အဖေ', 'ကလေး', 'မိသားစု'], translation: 'O pai come arroz.' },
          { sentence: '___ လက်ဖက်ရည် သောက်တယ်။', answer: 'အမေ', options: ['အမေ', 'အစ်ကို', 'ကလေး'], translation: 'A mãe bebe chá.' },
        ],
        voice: {
          bot: 'ကျွန်တော့် မိသားစု မှာ ကလေး လေး ယောက် ရှိတယ်။ ခင်ဗျားရော?',
          botTranslation: 'Na minha família tem quatro crianças. E você (senhor)?',
          expected: ['ကျွန်တော့် မိသားစု မှာ ကလေး နှစ် ယောက် ရှိတယ်။', 'မိသားစု', 'ကလေး'],
          hint: 'Fale da sua família com “ကျွန်တော့်/ကျွန်မ မိသားစု မှာ ... ရှိတယ်။”.',
        },
        communityPrompt: 'Descreva a sua família em birmanês: quantas pessoas, usando “ကျွန်တော့်/ကျွန်မ မိသားစု မှာ ... ရှိတယ်။”.',
      },
      {
        id: 'my-u2-l2',
        title: 'ရေ နှင့် လက်ဖက်ရည်',
        kind: 'licao',
        words: ['ရေ', 'ထမင်း', 'လက်ဖက်ရည်', 'ကော်ဖီ', 'စား', 'သောက်'],
        cloze: [
          { sentence: 'ကျွန်တော် ___ သောက်တယ်။', answer: 'ရေ', options: ['ရေ', 'ထမင်း', 'ကလေး'], translation: 'Eu bebo água.' },
          { sentence: 'ကျွန်မ ___ စားတယ်။', answer: 'ထမင်း', options: ['ထမင်း', 'ကော်ဖီ', 'မိသားစု'], translation: 'Eu como arroz.' },
          { sentence: 'အမေ ___ ကြိုက်တယ်။', answer: 'လက်ဖက်ရည်', options: ['လက်ဖက်ရည်', 'ရေ', 'ကလေး'], translation: 'A mãe gosta de chá.' },
        ],
        voice: {
          bot: 'ကော်ဖီ ဒါမှမဟုတ် လက်ဖက်ရည်: ဘာ ကြိုက်လဲ။',
          botTranslation: 'Café ou chá: o que você gosta?',
          expected: ['ကျွန်တော် ကော်ဖီ ကြိုက်တယ်။', 'ကော်ဖီ', 'ကြိုက်'],
          hint: 'Responda com “ကျွန်တော်/ကျွန်မ ... ကြိုက်တယ်။”.',
        },
        communityPrompt: 'Escreva o que você come e bebe, usando “... စားတယ်။” e “... သောက်တယ်။”.',
      },
      {
        id: 'my-u2-l3',
        title: 'Teste: မိသားစု နှင့် အစားအသောက်',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'ခင်ဗျား မိသားစု အကြောင်း ပြောပါ။',
          botTranslation: 'Fale sobre a sua família.',
          expected: ['ကျွန်တော့် မိသားစု မှာ အဖေ၊ အမေ နှင့် ကျွန်တော် ရှိတယ်။', 'မိသားစု', 'အဖေ', 'အမေ'],
          hint: 'Cite quem está na sua família com “... ရှိတယ်။”.',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família, a comida e a bebida que você gosta, usando “ရှိတယ်”, “ကြိုက်တယ်”, “စားတယ်” e “သောက်တယ်”.',
      },
    ],
  },
];
