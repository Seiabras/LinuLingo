import type { UnitSeed } from '../types';

/**
 * Trilha do curdo central (soranî) — A1 completo (unidades 1 e 2) e A2 completo (unidades 3 e 4,
 * novas nesta rodada). Fontes gerais: ver o cabeçalho de vocabulario.ts e os comentários de
 * gramatica.ts (Wikipédia em inglês e Wikcionário em inglês).
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
  {
    id: 'ckb-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'خێزانی گەورە و کەش و هەوا',
    emoji: '👨‍👩‍👧‍👦',
    card: {
      id: 'ckb-c3',
      title: 'Um só “-م” para tudo: posse e “quem fez”',
      emoji: '🔗',
      history:
        'O soranî usa uma única série de seis terminações presas — -م, -ت, -ی, -مان, -تان, -یان — para dizer “meu, teu, dele/dela, nosso, vosso, deles” (Wikipédia em inglês, “Kurdish grammar” e “Central Kurdish grammar”). “کوڕم” é “meu filho”, “کچم” é “minha filha”, do mesmo jeito que “باوکم” (meu pai) já usado na A1. O surpreendente, que a próxima unidade explica melhor, é que esse mesmo “-م” também marca QUEM fez a ação no passado de verbos com objeto — não só posse.',
      culture_tip:
        'Silêmanî (Slemani), a cidade de onde vêm os exemplos das gramáticas de referência do soranî, tem inverno com neve nas montanhas ao redor — “بەفر لە چیاکە” (neve na montanha) é uma cena comum lá, bem diferente do estereótipo de deserto que muita gente tem do Oriente Médio.',
      grammar_why:
        'Além da posse, os clíticos -م/-ت/-ی/-مان/-تان/-یان aparecem presos a qualquer palavra, não só substantivos: “باشترین کوڕم” (lit. “melhor filho-meu”) seguiria o mesmo padrão. Aqui praticamos só o uso mais simples: substantivo + clítico.',
      grammar_examples: [
        ['کوڕم باشە.', 'Meu filho está bem.'],
        ['کچم لە باخچەکەیە.', 'Minha filha está no jardim.'],
        ['باران دێت.', 'A chuva vem/está chovendo.'],
        ['بەفر لە چیاکە.', 'Neve na montanha.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ckb-u3-l1',
        title: 'کوڕ، کچ و ساڵ',
        kind: 'licao',
        words: ['کوڕ', 'کچ', 'ساڵ', 'ڕۆژ', 'برا', 'خوشک'],
        cloze: [
          { sentence: '___م باشە.', answer: 'کوڕ', options: ['کوڕ', 'کچ', 'ساڵ'], translation: 'Meu filho está bem.' },
          { sentence: 'ساڵی ___ چەندە؟', answer: 'تۆ', options: ['تۆ', 'کوڕ', 'ڕۆژ'], translation: 'Quantos anos você tem? (lit. “o ano de teu…”)' },
          { sentence: '___ باش!', answer: 'ڕۆژ', options: ['ڕۆژ', 'ساڵ', 'کچ'], translation: 'Boa tarde! (lit. “dia bom”)' },
        ],
        voice: {
          bot: 'کوڕت یان کچت هەیە؟',
          botTranslation: 'Você tem filho ou filha?',
          expected: ['کوڕم هەیە.', 'کچم هەیە.', 'کوڕم', 'کچم'],
          hint: 'Responda com “کوڕم هەیە” (tenho um filho) ou “کچم هەیە” (tenho uma filha).',
        },
        communityPrompt: 'Apresente sua família estendida em soranî usando o clítico “-م”: کوڕم (meu filho), کچم (minha filha), برام (meu irmão), خوشکم (minha irmã).',
      },
      {
        id: 'ckb-u3-l2',
        title: 'باران و بەفر',
        kind: 'licao',
        words: ['باران', 'بەفر', 'بەرد', 'بزن', 'چیا', 'دار'],
        cloze: [
          { sentence: '___ دێت.', answer: 'باران', options: ['باران', 'بەفر', 'بەرد'], translation: 'Está chovendo.' },
          { sentence: '___ لە چیاکە.', answer: 'بەفر', options: ['بەفر', 'باران', 'بزن'], translation: 'Neve na montanha.' },
          { sentence: 'بزنی ___.', answer: 'باوکم', options: ['باوکم', 'بەرد', 'دار'], translation: 'A cabra do meu pai.' },
        ],
        voice: {
          bot: 'ئەمڕۆ باران یان بەفرە؟',
          botTranslation: 'Hoje está chuva ou neve?',
          expected: ['باران.', 'بەفر.', 'باران', 'بەفر'],
          hint: 'Responda com “باران” (chuva) ou “بەفر” (neve).',
        },
        communityPrompt: 'Descreva o tempo de hoje em soranî: “باران دێت” (está chovendo) ou “بەفر دێت” (está nevando).',
      },
      {
        id: 'ckb-u3-l3',
        title: 'تاقیکردنەوە: خێزانی گەورە و کەش و هەوا',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'کوڕت یان کچت هەیە؟ ئەمڕۆ باران یان بەفرە؟',
          botTranslation: 'Você tem filho ou filha? Hoje está chuva ou neve?',
          expected: ['کوڕم هەیە. باران دێت.', 'کوڕم هەیە', 'کچم هەیە', 'باران', 'بەفر'],
          hint: 'Responda as duas perguntas: sobre a família (کوڕم/کچم هەیە) e sobre o tempo (باران/بەفر).',
        },
        communityPrompt: 'Escreva cinco frases sobre sua família estendida e o tempo, usando o clítico “-م” e “باران”/“بەفر”.',
      },
    ],
  },
  {
    id: 'ckb-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'بازاڕ و باخچە',
    emoji: '🛒',
    card: {
      id: 'ckb-c4',
      title: 'No passado, o “eu” se esconde dentro de outra palavra',
      emoji: '🧩',
      history:
        'A gramática de referência do soranî mostra algo que soa estranho pra quem só conhece português: no passado de um verbo com objeto, é o OBJETO que carrega a marca de quem fez a ação, não o verbo. “Min nanim xward” (eu comi o pão) é, literalmente, “eu · pão-meu · comeu” — o “-م” que normalmente quer dizer “meu” está, aqui, avisando que fui EU quem comeu, não que o pão é meu (Wikipédia em inglês, “Central Kurdish grammar”).',
      culture_tip:
        'Nos bazares (بازاڕ) do Curdistão iraquiano, como o de Silêmanî, é comum comprar e vender regateando o preço — e contar o que você comprou depois, no passado, puxa exatamente essa construção com o objeto carregando o clítico.',
      grammar_why:
        'Compare “کردم” (eu fiz, forma simples — sem objeto expresso na frase) com “کتێبەکەم کڕی” (eu comprei o livro, lit. “o-livro-meu comprou”, se essa fosse uma frase confirmada do mesmo padrão): o clítico de pessoa prefere se prender ao objeto quando ele existe. Este pacote só confirma com fonte real os exemplos “Min nanim xward” e “wtar-ekem nûsî” — generalizar para todo verbo exigiria mais pesquisa.',
      grammar_examples: [
        ['کتێبەکە باشە.', 'O livro é bom.'],
        ['بازاڕەکە باشە.', 'O bazar é bom.'],
        ['تۆپی کوڕم سوورە.', 'A bola do meu filho é vermelha.'],
        ['من دەبینم.', 'Eu vejo.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ckb-u4-l1',
        title: 'بازاڕ و باخچە',
        kind: 'licao',
        words: ['بازاڕ', 'باخچە', 'تۆپ', 'پشیلە', 'سەگ', 'خانوو'],
        cloze: [
          { sentence: '___ەکە باشە.', answer: 'بازاڕ', options: ['بازاڕ', 'باخچە', 'خانوو'], translation: 'O bazar é bom.' },
          { sentence: 'تۆپی کوڕم ___ە.', answer: 'سوور', options: ['سوور', 'باش', 'سپی'], translation: 'A bola do meu filho é vermelha.' },
          { sentence: '___ی خانوومان باشە.', answer: 'باخچە', options: ['باخچە', 'بازاڕ', 'تۆپ'], translation: 'O jardim da nossa casa é bom.' },
        ],
        voice: {
          bot: 'بازاڕەکە باشە؟',
          botTranslation: 'O bazar é bom?',
          expected: ['ئا، باشە.', 'باشە', 'بازاڕ'],
          hint: 'Responda com “باشە” (é bom) sobre o bazar ou o jardim.',
        },
        communityPrompt: 'Escreva três frases sobre o bazar, o jardim e uma bola, usando “… باشە” (é bom) ou uma cor com “… ە”.',
      },
      {
        id: 'ckb-u4-l2',
        title: 'کردم، دیتم',
        kind: 'licao',
        words: ['کردن', 'دیتن', 'زانین', 'خواردن', 'بوون', 'نان'],
        cloze: [
          { sentence: '___.', answer: 'کردم', options: ['کردم', 'دیتم', 'خوارد'], translation: 'Eu fiz.' },
          { sentence: 'من ___.', answer: 'دەبینم', options: ['دەبینم', 'کردم', 'دیتم'], translation: 'Eu vejo.' },
          { sentence: 'من ئەوم ___.', answer: 'دیت', options: ['دیت', 'کرد', 'خوارد'], translation: 'Eu o(a) vi. (lit. “eu ele/ela-meu viu”, o clítico “-م” marca quem viu.)' },
        ],
        voice: {
          bot: 'ئەمڕۆ چیت کرد؟',
          botTranslation: 'O que você fez hoje?',
          expected: ['کردم.', 'دیتم.', 'کردم'],
          hint: 'Responda com “کردم” (eu fiz) ou “دیتم” (eu vi) e complete com o que fez/viu.',
        },
        communityPrompt: 'Conte o que você fez e viu hoje em soranî, usando “کردم” (eu fiz) e “دیتم” (eu vi).',
      },
      {
        id: 'ckb-u4-l3',
        title: 'تاقیکردنەوە: بازاڕ و باخچە',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'ئەمڕۆ چیت دیت؟ بازاڕەکە باش بوو؟',
          botTranslation: 'O que você viu hoje? O bazar estava bom?',
          expected: ['پشیلەیەکم دیت. باش بوو.', 'دیتم', 'کردم'],
          hint: 'Responda com “دیتم” (eu vi) e “باش بوو” (estava bom).',
        },
        communityPrompt: 'Escreva cinco frases sobre uma visita ao bazar e ao jardim, usando “کردم”, “دیتم” e os clíticos “-م/-ت”.',
      },
    ],
  },
];
