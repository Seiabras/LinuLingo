import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/**
 * Textos de outros alunos esperando correção — erros típicos de quem estuda árabe clássico,
 * baseados nos dois achados reais documentados em gramatica.ts: a ambiguidade de "ملك" sem vogais
 * (pode ser "rei" OU "anjo") e a regra de que a idafa nunca leva artigo na primeira palavra.
 */
export const COMMUNITY_CLAS1259: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Traduza "مَلِكِ النَّاسِ" (114:2).',
    content: 'O Anjo das pessoas.',
    reference: 'O Rei das pessoas. ("ملك" sem vogais também pode ser "anjo" — mas aqui, ao lado de "رب" e "إله", o sentido é "rei".)',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Escreva "o Senhor das pessoas" em árabe, como uma idafa.',
    content: 'الرب الناس',
    reference: 'رَبِّ النَّاسِ (sem o artigo "ال-" na primeira palavra — numa idafa, só a ÚLTIMA palavra leva artigo).',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Complete a Basmala de memória: "بِسْمِ اللَّهِ..."',
    content: 'بِسْمِ اللَّهِ الرَّحِيمِ الرَّحْمَٰنِ',
    reference: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ (a ordem certa é "o Misericordioso" antes de "o Clemente").',
  },
];

/**
 * Cenários de conversa: a mesma dupla de personagens históricos das histórias (historias.ts) — Zayd
 * ibn Thabit confirmando um versículo, Ubayy ibn Ka'b testando a memorização. Como em toda a trilha
 * deste pacote, cada frase em árabe é um versículo real; os "registerBreakers" ficam de fora porque
 * nenhuma palavra informal/íntima sourceada existe neste vocabulário tão restrito.
 */
export const SCENARIOS_CLAS1259: ScenarioSeed[] = [
  {
    id: 'clas1259-s1',
    title: 'Confirmando um versículo com Zayd ibn Thabit',
    emoji: '✍️',
    cefr: 'A1',
    register: 'formal',
    persona: 'Zayd ibn Thabit, escriba do profeta e líder da compilação do Alcorão',
    description: 'Zayd pede que você confirme, versículo por versículo, a sura Al-Fátiha antes de registrá-la no exemplar oficial.',
    turns: [
      {
        bot: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
        botTranslation: 'Em nome de Deus, o Misericordioso, o Clemente (1:1).',
        keywords: ['رب', 'العالمين'],
        suggestions: ['الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ'],
      },
      {
        bot: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
        botTranslation: 'Louvado seja Deus, Senhor dos mundos (1:2).',
        keywords: ['الدين'],
        suggestions: ['مَالِكِ يَوْمِ الدِّينِ'],
      },
    ],
  },
  {
    id: 'clas1259-s2',
    title: 'Recitando com Ubayy ibn Ka\'b',
    emoji: '🎙️',
    cefr: 'A1',
    register: 'informal',
    persona: 'Ubayy ibn Ka\'b, memorizador e professor do Alcorão',
    description: 'Ubayy testa sua memorização da sura An-Nas, repetindo a cadeia "رَبِّ، مَلِكِ، إِلٰهِ النَّاسِ".',
    turns: [
      {
        bot: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ',
        botTranslation: 'Diz: busco refúgio no Senhor das pessoas (114:1).',
        keywords: ['ملك'],
        suggestions: ['مَلِكِ النَّاسِ'],
      },
      {
        bot: 'مَلِكِ النَّاسِ',
        botTranslation: 'O Rei das pessoas (114:2).',
        keywords: ['إله'],
        suggestions: ['إِلٰهِ النَّاسِ'],
      },
    ],
  },
];

/**
 * Etimologia do árabe clássico: como é a MESMA língua do árabe padrão de hoje (pacote "ar", já
 * completo) — não uma língua-filha —, a seta aponta sempre pra ele, confirmando que boa parte destas
 * palavras está praticamente INALTERADA depois de 1400 anos (achado documentado em gramatica.ts,
 * tópico clas1259-g4). Duas excecões documentadas à parte: a raiz compartilhada "سلام"/"الإسلام" (sentidos
 * de "paz"/"submissão", ambos do mesmo radical س-ل-م, fato citado por dicionários e pela própria
 * Wikipédia em inglês, "Islam", seção de etimologia) e a etimologia contestada de "الصراط" (empréstimo
 * do latim "strata", segundo notas de leitura (qira'at) do próprio quran.com, ao lado da teoria
 * alternativa de raiz árabe nativa س-ر-ط).
 */
export const ETYMOLOGY_CLAS1259: EtymologySeed[] = [
  {
    word: 'سلام',
    root_word: 'س-ل-م (s-l-m)',
    origin_language: 'Árabe (raiz s-l-m, "estar inteiro, estar em paz, estar seguro")',
    cognates: c(['ar', 'سلام']),
    evolution_note: '"سلام" (paz) é a MESMA palavra, sem mudança, do árabe padrão de hoje (pacote "ar", onde também vale como "oi"/"tchau"). Compartilha a raiz س-ل-م com "الإسلام" (al-islam, "submissão" [a Deus]) — a própria Wikipédia em inglês ("Islam") liga os dois sentidos, "paz" e "submissão", à mesma raiz.',
    transparent: false,
  },
  {
    word: 'الكتاب',
    root_word: 'ك-ت-ب (k-t-b)',
    origin_language: 'Árabe (raiz k-t-b, "escrever")',
    cognates: c(['ar', 'كتاب']),
    evolution_note: '"كتاب" (livro) é a MESMA palavra do árabe padrão de hoje, sem mudança de forma ou sentido — e é também a raiz de "الكُتَّاب" (al-kuttab), o nome tradicional das escolas corânicas onde se ensinava a ler e memorizar o Alcorão.',
    transparent: false,
  },
  {
    word: 'رب',
    root_word: 'ر-ب-ب (r-b-b)',
    origin_language: 'Árabe (raiz r-b-b, "cuidar de, ser senhor de, criar")',
    cognates: c(['ar', 'رب']),
    evolution_note: '"رب" (senhor) é a MESMA palavra do árabe padrão de hoje — usada tanto para "Deus, o Senhor" quanto, no árabe comum, para "patrão, chefe de família" (رب البيت, "o senhor da casa").',
    transparent: false,
  },
  {
    word: 'الرحمن',
    root_word: 'ر-ح-م (r-ḥ-m)',
    origin_language: 'Árabe (raiz r-ḥ-m, "ter misericórdia, ter compaixão")',
    cognates: c(['ar', 'رحمن']),
    evolution_note: '"الرحمن"/"الرحيم" (o Misericordioso/o Clemente) compartilham a raiz ر-ح-م com "رَحِم" (rahim, "útero") — a mesma raiz liga, no árabe, a ideia de misericórdia à de parentesco/geração, uma conexão discutida há séculos pelos próprios comentadores do Alcorão.',
    transparent: false,
  },
  {
    word: 'الصراط',
    root_word: 'incerta — talvez do latim "strata" (via aramaico/siríaco) ou da raiz árabe nativa س-ر-ط',
    origin_language: 'Disputada: as notas de leitura (qira\'at) do próprio quran.com citam estudiosos que ligam "صراط" ao latim "strata" ("estrada pavimentada"), ao lado de uma teoria alternativa de raiz árabe nativa ("engolir")',
    cognates: [],
    evolution_note: 'Mesmo um dos termos religiosos mais centrais do Alcorão — "o caminho" do pedido central da Fátiha — tem etimologia debatida: pode ser um empréstimo antigo do latim "strata" (a mesma raiz de "estrada", em português, via outro caminho) ou uma palavra árabe nativa. As duas leituras históricas do Alcorão (com ص ou com س) refletem exatamente essa disputa.',
    transparent: false,
  },
  {
    word: 'الصمد',
    root_word: 'صَمَدَ (samada, "persistir, resistir, não depender de nada")',
    origin_language: 'Árabe (verbo da raiz ص-م-د); sentido de epíteto divino com significado discutido — ver gramática, tópico clas1259-g3',
    cognates: [],
    evolution_note: '"الصمد" é um hapax legomenon do Alcorão (só aparece em 112:2) — por isso não tem, no árabe padrão de hoje, um uso comum fora da citação religiosa, diferente de "الرحمن"/"الرحيم", usados com frequência.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_CLAS1259: [string, string][] = [
  ['بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', 'Em nome de Deus, o Misericordioso, o Clemente (1:1). (Que frase abre algo importante para você?)'],
  ['اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ', 'Guia-nos ao caminho reto (1:6). (Que "caminho reto" você está buscando hoje?)'],
  ['وَالشَّمْسِ وَضُحَاهَا', 'Pelo sol e seu brilho matinal (91:1). (O que você notou no céu hoje?)'],
  ['إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ', 'Em verdade, Nós o revelamos na Noite do Decreto (97:1). (Alguma noite ficou marcada pra você?)'],
];

export const SHADOWING_CLAS1259: [string, string][] = [
  ['بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', 'Em nome de Deus, o Misericordioso, o Clemente.'],
  ['قُلْ هُوَ اللَّهُ أَحَدٌ', 'Diz: Ele é Deus, o Único.'],
  ['رَبِّ النَّاسِ، مَلِكِ النَّاسِ، إِلٰهِ النَّاسِ', 'O Senhor das pessoas, o Rei das pessoas, o Deus das pessoas.'],
  ['وَالشَّمْسِ وَضُحَاهَا وَالْقَمَرِ إِذَا تَلَاهَا', 'Pelo sol e seu brilho matinal, e pela lua quando a segue.'],
  ['سَلَامٌ هِيَ حَتَّى مَطْلَعِ الْفَجْرِ', 'Paz, até o romper da alvorada.'],
];
