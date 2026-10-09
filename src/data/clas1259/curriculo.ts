import type { UnitSeed } from '../types';

/**
 * Trilha do árabe clássico/corânico: só as duas unidades do nível A1 por enquanto (ver `incomplete`
 * em index.ts). Cenário: a compilação do Alcorão por Zayd ibn Thabit, sob os califas Abu Bakr
 * (c. 632-634) e depois Uthman (c. 650-656) — Zayd exigia o testemunho de duas pessoas por
 * versículo antes de aceitá-lo por escrito, mesmo quando ele próprio já sabia o versículo de
 * memória (Wikipédia em inglês, "Uthmanic codex", conferida via WebSearch em 09/10/2026). Nenhum
 * abjad novo: o árabe clássico usa o MESMO alfabeto árabe (RTL) do pacote `ar` — sem `alfabeto.ts`
 * nem campo `alphabet` próprios, mesma solução do latim medieval/toscano antigo reaproveitando o
 * alfabeto do pacote-base.
 *
 * Diferente dos outros idiomas históricos deste app, este pacote NÃO tem frases livres de
 * apresentação ("eu sou Linu", "como você está?"): nenhuma das palavras básicas pra isso ("أنا", eu;
 * "كيف", como; "أنتَ", tu) aparece nos versículos escolhidos como fonte, e inventar essas formas só
 * pra uma apresentação livre quebraria a regra de não inventar nada sem fonte. Por isso toda frase
 * em árabe deste currículo é um VERSÍCULO REAL (citado "sura:versículo") ou um fragmento dele — as
 * lições e os desafios de voz funcionam como "o Linu recita parte de um versículo, você continua",
 * um formato que também é, por acaso, exatamente como a tradição oral de memorização (hifz) do
 * Alcorão funciona de verdade: um professor recita, o aluno continua.
 */
export const UNITS_CLAS1259: UnitSeed[] = [
  {
    id: 'clas1259-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'بِسْمِ اللَّهِ — a Fátiha e Al-Ikhlás',
    emoji: '📖',
    card: {
      id: 'clas1259-c1',
      title: 'A compilação do Alcorão: o método de Zayd ibn Thabit',
      emoji: '✍️',
      history:
        'Segundo a tradição islâmica, depois da morte do profeta Muhammad (632 d.C.), muitos dos companheiros que haviam memorizado o Alcorão inteiro morreram na Batalha de Al-Yamama. Preocupado que o texto se perdesse, o califa Abu Bakr encarregou Zayd ibn Thabit, um dos escribas do profeta, de reunir o Alcorão por escrito. Zayd era rigoroso: não aceitava um versículo só porque ele mesmo (ou outra pessoa) o tinha de memória — exigia o testemunho de duas pessoas que o tivessem tanto memorizado quanto escrito diretamente a partir do profeta. Duas décadas depois, sob o califa Uthman, Zayd liderou um segundo comitê que copiou o texto a partir do exemplar de Hafsa bint Umar, padronizando a grafia que chegou até hoje (Wikipédia em inglês, "Uthmanic codex").',
      culture_tip:
        'A sura Al-Fátiha ("A Abertura") é a primeira do Alcorão e é recitada em cada uma das cinco orações diárias do islã — provavelmente o texto árabe mais repetido do mundo, dito de memória por mais de um bilhão de pessoas. Al-Ikhlás ("A Sinceridade", sura 112) é uma das mais curtas e, por isso, uma das primeiras que crianças aprendem a memorizar.',
      grammar_why:
        'O árabe clássico (como o árabe padrão de hoje) não usa um verbo "ser/estar" no presente para ligar sujeito e predicado: "اللَّهُ الصَّمَدُ" (112:2) é, literalmente, "Deus o-Absoluto" — frase completa, sem verbo nenhum entre as duas palavras.',
      grammar_examples: [
        ['بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', 'Em nome de Deus, o Misericordioso, o Clemente (1:1).'],
        ['الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', 'Louvado seja Deus, Senhor dos mundos (1:2).'],
        ['قُلْ هُوَ اللَّهُ أَحَدٌ', 'Diz: Ele é Deus, o Único (112:1).'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'clas1259-u1-l1',
        title: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
        kind: 'licao',
        words: ['الله', 'الرحمن', 'الرحيم', 'رب', 'العالمين', 'الدين'],
        cloze: [
          { sentence: 'بِسْمِ ___ الرَّحْمَٰنِ الرَّحِيمِ', answer: 'الله', options: ['الله', 'الناس', 'الملائكة'], translation: 'Em nome de Deus, o Misericordioso, o Clemente (1:1).' },
          { sentence: 'الْحَمْدُ لِلَّهِ ___ الْعَالَمِينَ', answer: 'رب', options: ['رب', 'ملك', 'إله'], translation: 'Louvado seja Deus, Senhor dos mundos (1:2).' },
          { sentence: 'مَالِكِ يَوْمِ ___', answer: 'الدين', options: ['الدين', 'الصراط', 'الكتاب'], translation: 'Soberano do dia do Juízo (1:4).' },
        ],
        voice: {
          bot: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ. الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ.',
          botTranslation: 'Em nome de Deus, o Misericordioso, o Clemente. Louvado seja Deus, Senhor dos mundos.',
          expected: ['مَالِكِ يَوْمِ الدِّينِ', 'maliki yawmi addin'],
          hint: 'Continue a Fátiha com o próximo versículo (1:4): "مَالِكِ يَوْمِ الدِّينِ" (Soberano do dia do Juízo).',
        },
        communityPrompt: 'Recite de memória os três primeiros versículos da Fátiha (1:1, 1:2 e 1:4) e explique, em português, o que cada um significa.',
      },
      {
        id: 'clas1259-u1-l2',
        title: 'إِيَّاكَ نَعْبُدُ — e Al-Ikhlás',
        kind: 'licao',
        words: ['نعبد', 'اهدنا', 'الصراط', 'المستقيم', 'قل', 'أحد'],
        cloze: [
          { sentence: 'إِيَّاكَ ___ وَإِيَّاكَ نَسْتَعِينُ', answer: 'نعبد', options: ['نعبد', 'نعلم', 'نقرأ'], translation: 'A Ti [só] adoramos, e a Ti [só] pedimos ajuda (1:5).' },
          { sentence: '___ الصِّرَاطَ الْمُسْتَقِيمَ', answer: 'اهدنا', options: ['اهدنا', 'اعبدنا', 'اخلقنا'], translation: 'Guia-nos ao caminho reto (1:6).' },
          { sentence: 'قُلْ هُوَ اللَّهُ ___', answer: 'أحد', options: ['أحد', 'الصمد', 'الرحيم'], translation: 'Diz: Ele é Deus, o Único (112:1).' },
        ],
        voice: {
          bot: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ.',
          botTranslation: 'Guia-nos ao caminho reto (1:6).',
          expected: ['قُلْ هُوَ اللَّهُ أَحَدٌ', 'qul huwa Allahu ahad'],
          hint: 'Recite a abertura de outra sura curta, Al-Ikhlás (112:1): "diz que Ele, Deus, é único".',
        },
        communityPrompt: 'Complete a frase "اهدنا..." com o resto do versículo 1:6 e explique, em português, o que você está pedindo.',
      },
      {
        id: 'clas1259-u1-l3',
        title: 'Prova: a Fátiha e Al-Ikhlás',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'قُلْ هُوَ اللَّهُ أَحَدٌ. اللَّهُ الصَّمَدُ.',
          botTranslation: 'Diz: Ele é Deus, o Único. Deus, o Absoluto (112:1-2).',
          expected: ['لَمْ يَلِدْ وَلَمْ يُولَدْ', 'lam yalid walam yulad'],
          hint: 'Continue Al-Ikhlás com o versículo 112:3: "Ele não gera, nem é gerado".',
        },
        communityPrompt: 'Escreva, em português, a diferença entre "رب" (senhor), "ملك" (rei) e "إله" (deus) — e por que "ملك" também pode significar "anjo".',
      },
    ],
  },
  {
    id: 'clas1259-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'رَبِّ النَّاسِ — An-Nas, Al-Qadr e a criação',
    emoji: '🌌',
    card: {
      id: 'clas1259-c2',
      title: 'A tradição oral: memorizar antes de escrever',
      emoji: '🎙️',
      history:
        'Antes da compilação escrita de Zayd ibn Thabit, o Alcorão viveu primeiro na memória: o próprio profeta Muhammad é descrito nas fontes islâmicas como o primeiro "hafiz" (memorizador), e companheiros como Ubayy ibn Ka\'b, Abdullah ibn Mas\'ud, Mu\'adh ibn Jabal e Zayd ibn Thabit ficaram conhecidos por memorizar o texto inteiro e ensiná-lo a outros. Suras curtas como An-Nas (114) e Al-Falaq (113) — as duas últimas do livro — são, até hoje, normalmente as primeiras que crianças aprendem de cor, por serem breves e repetitivas.',
      culture_tip:
        'A sura Al-Qadr (97) celebra a "Noite do Decreto" (لَيْلَةُ الْقَدْرِ), tradicionalmente associada a uma das últimas noites ímpares do mês de Ramadã — um símbolo tão central que o próprio texto a chama "melhor que mil meses" (97:3).',
      grammar_why:
        'An-Nas repete a mesma palavra final, "النَّاسِ" (as pessoas), três vezes em três idafas diferentes ("رَبِّ النَّاسِ", "مَلِكِ النَّاسِ", "إِلٰهِ النَّاسِ") — e a segunda delas, "ملك" (rei), tem a MESMA grafia sem vogais da palavra "anjo" (malak): só o contexto decide qual é.',
      grammar_examples: [
        ['قُلْ أَعُوذُ بِرَبِّ النَّاسِ', 'Diz: busco refúgio no Senhor das pessoas (114:1).'],
        ['مَلِكِ النَّاسِ', 'O Rei das pessoas (114:2).'],
        ['تَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ فِيهَا', 'Os anjos e o Espírito descem nela (97:4).'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'clas1259-u2-l1',
        title: 'رَبِّ النَّاسِ، مَلِكِ النَّاسِ، إِلٰهِ النَّاسِ',
        kind: 'licao',
        words: ['الناس', 'ملك', 'إله', 'الملائكة', 'الروح', 'سلام'],
        cloze: [
          { sentence: 'قُلْ أَعُوذُ بِرَبِّ ___', answer: 'الناس', options: ['الناس', 'السماء', 'الأرض'], translation: 'Diz: busco refúgio no Senhor das pessoas (114:1).' },
          { sentence: '___ النَّاسِ', answer: 'ملك', options: ['ملك', 'إله', 'رب'], translation: 'O Rei das pessoas (114:2).' },
          { sentence: 'تَنَزَّلُ ___ وَالرُّوحُ فِيهَا', answer: 'الملائكة', options: ['الملائكة', 'الناس', 'الكتاب'], translation: 'Os anjos e o Espírito descem nela (97:4).' },
        ],
        voice: {
          bot: 'مَلِكِ النَّاسِ.',
          botTranslation: 'O Rei das pessoas (114:2).',
          expected: ['إِلٰهِ النَّاسِ', 'ilahi annas'],
          hint: 'Complete a cadeia de idafa com a terceira palavra, "إله" (deus): "إِلٰهِ النَّاسِ".',
        },
        communityPrompt: 'Explique, em português, por que "ملك" em 114:2 quer dizer "rei" e não "anjo" (مَلَك), mesmo as duas palavras tendo a mesma grafia sem vogais.',
      },
      {
        id: 'clas1259-u2-l2',
        title: 'وَالشَّمْسِ وَضُحَاهَا — o juramento pela natureza',
        kind: 'licao',
        words: ['الشمس', 'القمر', 'السماء', 'الأرض', 'الماء', 'خلق'],
        cloze: [
          { sentence: 'وَ___ وَضُحَاهَا', answer: 'الشمس', options: ['الشمس', 'القمر', 'الماء'], translation: 'Pelo sol e seu brilho matinal (91:1).' },
          { sentence: 'وَ___ إِذَا تَلَاهَا', answer: 'القمر', options: ['القمر', 'النهار', 'الليل'], translation: 'E pela lua, quando a segue (91:2).' },
          { sentence: 'وَجَعَلْنَا مِنَ ___ كُلَّ شَيْءٍ حَيٍّ', answer: 'الماء', options: ['الماء', 'الأرض', 'السماء'], translation: 'E fizemos da água todo ser vivo (21:30).' },
        ],
        voice: {
          bot: 'وَالشَّمْسِ وَضُحَاهَا. وَالْقَمَرِ إِذَا تَلَاهَا.',
          botTranslation: 'Pelo sol e seu brilho matinal. E pela lua, quando a segue (91:1-2).',
          expected: ['وَالنَّهَارِ إِذَا جَلَّاهَا', 'wannahari idha jallaha'],
          hint: 'Continue o juramento encadeado de Ash-Shams com o terceiro versículo, sobre "o dia" (91:3).',
        },
        communityPrompt: 'Continue o juramento de Ash-Shams (91:1-6) até "a terra", dizendo em português o que cada versículo jura.',
      },
      {
        id: 'clas1259-u2-l3',
        title: 'Prova: a Noite do Decreto',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ.',
          botTranslation: 'Em verdade, Nós o revelamos na Noite do Decreto (97:1).',
          expected: ['سَلَامٌ هِيَ حَتَّى مَطْلَعِ الْفَجْرِ', 'salamun hiya hatta matlaAAi alfajr'],
          hint: 'Pule para o último versículo da sura (97:5): "paz, até o romper da alvorada".',
        },
        communityPrompt: 'Escreva, em português, o que significa "ليلة القدر" e por que ela é importante na tradição islâmica.',
      },
    ],
  },
];
