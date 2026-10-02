import type { UnitSeed } from '../types';

/**
 * Trilha do curdo central (soranî) — por enquanto só as duas unidades do nível A1 (o pacote está
 * marcado como incompleto — ver `incomplete` em index.ts). Fontes gerais: ver o cabeçalho de
 * vocabulario.ts e os comentários de gramatica.ts (Wikipédia em inglês e Wikcionário em inglês).
 */
export const UNITS_CKB: UnitSeed[] = [
  {
    id: 'ckb-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'سڵاو! یەکەم هەنگاوەکان',
    emoji: '👋',
    card: {
      id: 'ckb-c1',
      title: 'Uma língua, um alfabeto com vogais próprias',
      emoji: '🔤',
      history:
        'O curdo central (soranî, کوردیی ناوەندی, código ckb) é uma das variedades curdas — não a única: o curdo do norte (curmanji) é outra língua curda, escrita em alfabeto latino, enquanto o soranî usa um alfabeto árabe-persa modificado. O soranî é falado sobretudo no Curdistão iraquiano, onde é uma das duas línguas oficiais do Iraque (ao lado do árabe) e língua oficial da Região do Curdistão, além do oeste do Irã (Wikipédia, “Central Kurdish”). Diferente do árabe, que normalmente não escreve as vogais curtas, o alfabeto do soranî escreve quase todas as vogais como letras próprias — ئا, ە, و, وو, ۆ, ی, ێ — o que o torna bem mais fácil de ler em voz alta do que o árabe (Wikipédia, “Kurdish alphabets”).',
      culture_tip:
        'O cumprimento mais comum é “سڵاو” (silaw), que serve em qualquer hora do dia; “بەیانی باش” é só de manhã, “ڕۆژ باش” à tarde e “شەو باش” à noite, ao se despedir (Omniglot, “Useful Sorani Kurdish phrases”). Entre família e amigos próximos usa-se muito “برا” (irmão) e “خوشک” (irmã) como forma carinhosa de chamar alguém, mesmo sem parentesco.',
      grammar_why:
        'O soranî não tem gênero gramatical nem os casos (nominativo/oblíquo) que o curmanji ainda tem — Kreyenbroek resume: “Sorani has neither gender nor case-endings, whereas Kurmanji has both” (apud Wikipédia, “Kurdish languages”). Por isso este pacote não traz tabela de gênero: todo substantivo soranî se comporta do mesmo jeito.',
      grammar_examples: [
        ['سڵاو! چۆنی؟', 'Oi! Como vai?'],
        ['بەیانی باش، برا!', 'Bom dia, irmão!'],
        ['ناوی تۆ چییە؟', 'Qual é o teu nome?'],
        ['باوکی من باشە.', 'O meu pai é bom.'],
      ],
      character_guide: [
        ['ا', 'vogal longa, parecida com “á”', 'ئاو (aw, água)'],
        ['ە', 'vogal breve, parecida com um “é” curto', 'باش (baş, bom)'],
        ['و', 'vogal “u”, curta ou longa conforme a palavra', 'دوو (dû, dois)'],
        ['ۆ', 'vogal “ô” fechada', 'تۆ (to, tu/você)'],
        ['ی', 'vogal “i”, ou a consoante “i” de “iodo”', 'شین (şîn, azul)'],
        ['ێ', 'vogal “ê” fechada', 'ئەستێرە (estêre, estrela)'],
      ],
    },
    lessons: [
      {
        id: 'ckb-u1-l1',
        title: 'سڵاو و سوپاس',
        kind: 'licao',
        words: ['سڵاو', 'چۆنی', 'بەیانی باش', 'ڕۆژ باش', 'شەو باش', 'سوپاس'],
        cloze: [
          { sentence: '___، برا! چۆنی؟', answer: 'سڵاو', options: ['سڵاو', 'سوپاس', 'ببوورە'], translation: 'Oi, irmão! Como vai?' },
          { sentence: '___، دایک!', answer: 'ڕۆژ باش', options: ['ڕۆژ باش', 'بەیانی باش', 'شەو باش'], translation: 'Boa tarde, mãe!' },
          { sentence: '___، برا!', answer: 'سوپاس', options: ['سوپاس', 'ببوورە', 'سڵاو'], translation: 'Obrigado, irmão!' },
        ],
        voice: {
          bot: 'سڵاو! چۆنی؟',
          botTranslation: 'Oi! Como vai?',
          expected: ['باش، سوپاس!', 'باش', 'سوپاس'],
          hint: 'Responda que está bem e agradeça: “باش، سوپاس!” (baş, spas!).',
        },
        communityPrompt: 'Escreva três cumprimentos em soranî: um de manhã (بەیانی باش), um à tarde (ڕۆژ باش) e uma despedida à noite (شەو باش).',
      },
      {
        id: 'ckb-u1-l2',
        title: 'من، تۆ، باوک و دایک',
        kind: 'licao',
        words: ['من', 'تۆ', 'ئەو', 'ناو', 'باوک', 'دایک'],
        cloze: [
          { sentence: 'ناوی ___ چییە؟', answer: 'تۆ', options: ['تۆ', 'من', 'ئەو'], translation: 'Qual é o teu nome?' },
          { sentence: 'دایکی ___ باشە.', answer: 'ئەو', options: ['ئەو', 'تۆ', 'من'], translation: 'A mãe dele(a) é boa.' },
          { sentence: 'باوکی ___ باشە.', answer: 'من', options: ['من', 'تۆ', 'ئەو'], translation: 'O meu pai é bom.' },
        ],
        voice: {
          bot: 'ناوی تۆ چییە؟',
          botTranslation: 'Qual é o teu nome?',
          expected: ['لینو', 'ناوم لینو'],
          hint: 'Diga seu nome — pode usar o clítico “-م” (meu), como em “باوکم” (meu pai): “ناوم …”.',
        },
        communityPrompt: 'Apresente sua família em soranî usando o clítico “-م” (meu/minha): “باوکم” (meu pai) e “دایکم” (minha mãe) já vêm com o posssuidor embutido, sem precisar de “من”.',
      },
      {
        id: 'ckb-u1-l3',
        title: 'تاقیکردنەوە: یەکەم هەنگاوەکان',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'سڵاو! ناوی تۆ چییە؟',
          botTranslation: 'Oi! Qual é o teu nome?',
          expected: ['سڵاو! ناوم لینو.', 'ناوم', 'سڵاو'],
          hint: 'Devolva o cumprimento (“سڵاو!”) e diga seu nome com “ناوم …” (meu nome, …).',
        },
        communityPrompt: 'Escreva uma apresentação completa em soranî: cumprimento (سڵاو), seu nome (ناوم …) e uma despedida (شەو باش).',
      },
    ],
  },
  {
    id: 'ckb-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'خواردن و ڕەنگەکان',
    emoji: '☕',
    card: {
      id: 'ckb-c2',
      title: 'O “ی/ـی” que liga duas palavras: a ezafe',
      emoji: '🔗',
      history:
        'O soranî não declina os substantivos por caso (ao contrário do curmanji, que ainda tem nominativo, oblíquo, construto e vocativo — Wikipédia, “Kurdish grammar”). Em vez disso, para ligar um substantivo a um possuidor ou a um adjetivo, o soranî usa uma partícula de ligação chamada ezafe (também escrita “izafe”): o som “î” depois de consoante, “y” depois de vogal, preso ao fim da primeira palavra. “کراسی ئادام” (kras-y Adam) é, literalmente, “camisa-DE Adam”, ou seja, “a camisa do Adam” (Wikipédia, “Central Kurdish grammar”, citando Thackston 2006).',
      culture_tip:
        'A mesma partícula liga um substantivo ao adjetivo que vem depois dele: “خانووێکی خۆش” (xanwêkî xoş) é “uma casa agradável”, literalmente “casa-uma-DE agradável” (Wikipédia, “Central Kurdish grammar”, citando Karimi 2007). É por isso que, no soranî, o adjetivo sempre vem depois do substantivo que descreve.',
      grammar_why:
        'A ezafe junta substantivo + possuidor (“داری چیا”, a árvore da montanha) e substantivo + adjetivo (“داری سەوز”, a árvore verde) com a mesma partícula “ی”. Já o verbo, como em “من نان دەخۆم” (eu como o pão), fica no fim da frase — sujeito, objeto e por último o verbo (Wikipédia, “Central Kurdish grammar”, exemplo de Thackston 2006).',
      grammar_examples: [
        ['داری چیا.', 'A árvore da montanha.'],
        ['داری سەوز.', 'A árvore verde.'],
        ['من نان دەخۆم.', 'Eu como o pão.'],
        ['قاوە ڕەشە.', 'O café é preto.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ckb-u2-l1',
        title: 'نان و قاوە',
        kind: 'licao',
        words: ['ئاو', 'نان', 'قاوە', 'چا', 'شیر', 'گۆشت'],
        cloze: [
          { sentence: 'من ___ دەخۆم.', answer: 'نان', options: ['نان', 'ئاو', 'قاوە'], translation: 'Eu como o pão.' },
          { sentence: '___ی پشیلە.', answer: 'شیر', options: ['شیر', 'چا', 'ئاو'], translation: 'O leite do gato.' },
          { sentence: '___ی من.', answer: 'گۆشت', options: ['گۆشت', 'نان', 'قاوە'], translation: 'A minha carne.' },
        ],
        voice: {
          bot: 'من نان دەخۆم. تۆ؟',
          botTranslation: 'Eu como pão. E você?',
          expected: ['من شیر دەخۆم.', 'من قاوە دەخۆم.', 'دەخۆم'],
          hint: 'Diga o que você come ou bebe com “من … دەخۆم” (eu como/bebo …).',
        },
        communityPrompt: 'Escreva o que você come e bebe pela manhã em soranî, usando “من … دەخۆم”: pão (نان), água (ئاو), café (قاوە), chá (چا) ou leite (شیر).',
      },
      {
        id: 'ckb-u2-l2',
        title: 'ڕەنگەکان',
        kind: 'licao',
        words: ['سوور', 'سپی', 'ڕەش', 'زەرد', 'سەوز', 'شین'],
        cloze: [
          { sentence: 'پشیلەی ___.', answer: 'سوور', options: ['سوور', 'سپی', 'ڕەش'], translation: 'O gato vermelho.' },
          { sentence: 'ئەسپی ___.', answer: 'سپی', options: ['سپی', 'ڕەش', 'زەرد'], translation: 'O cavalo branco.' },
          { sentence: 'قاوە ___ە.', answer: 'ڕەش', options: ['ڕەش', 'سپی', 'سەوز'], translation: 'O café é preto.' },
        ],
        voice: {
          bot: 'چاوی من سەوزە. چاوی تۆ چۆنە؟',
          botTranslation: 'Meu olho é verde. E o teu, de que cor é?',
          expected: ['چاوی من ڕەشە.', 'چاوی من شینە.', 'ڕەشە', 'شینە'],
          hint: 'Diga a cor do seu olho com “چاوی من … ە” (meu olho é …).',
        },
        communityPrompt: 'Descreva as cores de três coisas em soranî: o café preto (قاوەی ڕەش), a árvore verde (داری سەوز) e o cavalo branco (ئەسپی سپی) — ou use “… ە” (é …) como em “قاوە ڕەشە”.',
      },
      {
        id: 'ckb-u2-l3',
        title: 'تاقیکردنەوە: خواردن و ڕەنگەکان',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'من قاوەی ڕەش دەخۆم. تۆ؟',
          botTranslation: 'Eu bebo café preto. E você?',
          expected: ['من شیری سپی دەخۆم.', 'دەخۆم'],
          hint: 'Diga o que você bebe com “من … دەخۆم”, juntando uma bebida e uma cor com “ی” (ezafe).',
        },
        communityPrompt: 'Escreva cinco frases em soranî sobre comida e cores, usando “دەخۆم” (eu como/bebo) e “… ە” (é …).',
      },
    ],
  },
];
