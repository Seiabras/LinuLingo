import type { UnitSeed } from '../types';

/**
 * Trilha do alto-alemão médio: só as duas unidades do nível A1 por enquanto (ver `incomplete` em
 * index.ts). Cenário da corte da Suábia (séc. XII-XIII) — a corte dos Hohenstaufen deu origem à
 * língua literária supra-regional da época clássica, usada por Wolfram von Eschenbach (“Parzival”),
 * Gottfried von Strassburg (“Tristan”), Hartmann von Aue (“Erec”, “Iwein”) e Walther von der
 * Vogelweide (Minnesang) — todos citados na Wikipédia em inglês (“Middle High German”). Vocabulário
 * do dia a dia (família, casa, números) complementado pelo Wiktionary (seção “Middle High German”
 * de cada palavra, ou a etimologia do alemão moderno quando essa seção específica não existe).
 */
export const UNITS_GMH: UnitSeed[] = [
  {
    id: 'gmh-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Ich bin Linu, unde du?',
    emoji: '🏰',
    card: {
      id: 'gmh-c1',
      title: 'A língua dos cavaleiros e dos poetas',
      emoji: '🏰',
      history:
        'O alto-alemão médio (mittelhochdeutsch) foi falado entre cerca de 1050 e 1350, nas regiões da Alemanha central e da Alemanha superior (Suábia, Baviera, Francônia). A corte dos Hohenstaufen, na Suábia, deu origem a uma língua literária supra-regional usada pelos grandes nomes da época clássica: Wolfram von Eschenbach escreveu “Parzival”, Gottfried von Strassburg escreveu “Tristan”, Hartmann von Aue escreveu “Erec” e “Iwein”, e Walther von der Vogelweide compôs Minnesang (poesia de amor cortês). O poema mais famoso do período, o “Nibelungenlied” (Canção dos Nibelungos), é anônimo. O alto-alemão médio é o ancestral direto do alemão moderno, já completo neste aplicativo.',
      culture_tip:
        'A mais famosa coleção de poesia de Minnesang, o Codex Manesse (também chamado Grande Cancioneiro de Heidelberg), foi feita por volta de 1300 e guarda até hoje, na Universidade de Heidelberg, retratos coloridos de cada poeta ao lado dos seus versos.',
      grammar_why:
        'Como em português, o pronome de sujeito pode aparecer ou não: “ich bin vriunt” já é “(eu) sou amigo”, porque a terminação do verbo “sīn” (ser/estar) já diz quem fala — ich bin, du bist, ër ist, wir birn, ir birt, sie sint. Repare como “ich bin”, “du bist” e “ër ist” já são quase idênticos ao alemão moderno “ich bin, du bist, er ist”.',
      grammar_examples: [
        ['Ich bin Linu. Bist du ritter?', 'Eu sou Linu. Tu és cavaleiro?'],
        ['Ër ist vriunt.', 'Ele é amigo.'],
        ['Wir birn vriunt.', 'Nós somos amigos.'],
      ],
      character_guide: [
        ['ȥ', 'convenção acadêmica moderna pra um som que os manuscritos escreviam de formas variadas (quase sempre “s” ou “z”)', 'daȥ (“das”, isso/aquilo)'],
        ['â ê î ô û', 'vogal longa — marcada pelas edições modernas com circunflexo; os manuscritos originais quase nunca marcavam isso', 'hūs (“huus”, casa)'],
        ['ü', 'vogal com Umlaut, som parecido com o “u” fechado do francês ou do alemão moderno', 'vünf (“FÜNF”, cinco)'],
        ['-e final', 'sempre pronunciado como vogal própria, nunca mudo (diferente do alemão moderno, que o perdeu em muitas palavras)', 'muoter (“MUO-ter”, mãe) tem o “e” bem articulado'],
      ],
    },
    lessons: [
      {
        id: 'gmh-u1-l1',
        title: 'Danc, ja, nein',
        kind: 'licao',
        words: ['danc', 'ja', 'nein', 'ich', 'du', 'ër'],
        cloze: [
          { sentence: '___, vriunt!', answer: 'Danc', options: ['Danc', 'Ja', 'Nein'], translation: 'Obrigado, amigo!' },
          { sentence: '___, ich bin vriunt.', answer: 'Ja', options: ['Ja', 'Nein', 'Danc'], translation: 'Sim, eu sou amigo.' },
          { sentence: 'Wazzer? ___, wīn!', answer: 'Nein', options: ['Nein', 'Ja', 'Danc'], translation: 'Água? Não, vinho!' },
        ],
        voice: {
          bot: 'Ich bin ritter. Bist du vriunt?',
          botTranslation: 'Eu sou cavaleiro. Tu és amigo?',
          expected: ['Ja, ich bin vriunt.', 'ja', 'ich bin'],
          hint: 'Responda com “Ja” ou “Nein”, e “ich bin…” pra dizer o que você é.',
        },
        communityPrompt: 'Responda em alto-alemão médio: você é amigo (vriunt) ou cavaleiro (ritter)? Use “ich bin…”.',
      },
      {
        id: 'gmh-u1-l2',
        title: 'Wir, ir, sīn',
        kind: 'licao',
        words: ['wir', 'ir', 'sīn', 'vriunt', 'ritter', 'nāme'],
        cloze: [
          { sentence: 'Wir ___ vriunt.', answer: 'birn', options: ['birn', 'birt', 'bin'], translation: 'Nós somos amigos.' },
          { sentence: 'Ir ___ ritter.', answer: 'birt', options: ['birt', 'birn', 'bist'], translation: 'Vós sois cavaleiros.' },
          { sentence: 'Mīn ___ ist Linu.', answer: 'nāme', options: ['nāme', 'vriunt', 'ritter'], translation: 'O meu nome é Linu.' },
        ],
        voice: {
          bot: 'Ich bin Linu. Unde du?',
          botTranslation: 'Eu sou Linu. E tu?',
          expected: ['Mīn nāme ist Linu.', 'mīn nāme', 'ich bin'],
          hint: 'Responda com “Mīn nāme ist…” pra dizer o seu nome.',
        },
        communityPrompt: 'Diga em alto-alemão médio se você é amigo (vriunt) ou cavaleiro (ritter), usando “ich bin…”.',
      },
      {
        id: 'gmh-u1-l3',
        title: 'Prova: primeiros passos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ich bin Linu, unde ich bin vriunt. Unde du?',
          botTranslation: 'Eu sou Linu, e eu sou amigo. E tu?',
          expected: ['Ich bin vriunt.', 'ich bin', 'ja'],
          hint: 'Diga “ich bin vriunt” ou “ich bin ritter” pra se apresentar.',
        },
        communityPrompt: 'Escreva uma apresentação curta em alto-alemão médio: “ich bin…” e “danc” no final.',
      },
    ],
  },
  {
    id: 'gmh-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Mīn vater unde mīn hūs',
    emoji: '🏠',
    card: {
      id: 'gmh-c2',
      title: 'Quatro casos, três gêneros',
      emoji: '🏠',
      history:
        'O alto-alemão médio ainda tinha os quatro casos do alemão moderno (nominativo, genitivo, dativo, acusativo), em dois números e três gêneros, com substantivos fortes e fracos. “Sun” (filho) é um substantivo forte sem Umlaut; “tohter” (filha) é um substantivo antigo em -r que não muda no singular, mas ganha Umlaut no plural (“töhter”) — o mesmo tipo de mudança que o alemão moderno guarda em “Mutter/Mütter”.',
      culture_tip:
        'A língua tinha dialetos bem diferentes entre a Alemanha central (onde ficam a Francônia e a Turíngia) e a Alemanha superior (Suábia, Baviera) — a língua literária da corte dos Hohenstaufen, baseada no suábio, é a que os manuais acadêmicos normalizam hoje.',
      grammar_why:
        'Como em português, o possessivo “mīn” (meu/minha) não muda de forma entre masculino e feminino antes do substantivo — “mīn vater” (meu pai) e “mīn muoter” (minha mãe) usam a mesma palavra. Repare também como “daȥ ist…” (isso é…/essa é…) serve pra apresentar pessoas e coisas, sem se preocupar com o gênero do que vem depois.',
      grammar_examples: [
        ['Daȥ ist mīn vater.', 'Esse é o meu pai.'],
        ['Daȥ ist mīn hūs.', 'Essa é a minha casa.'],
        ['Mīn wīn ist rōt.', 'O meu vinho é vermelho.'],
      ],
      character_guide: [
        ['uo', 'ditongo “u-o”, bem diferente do “u” simples do alemão moderno', 'bruoder (“BRU-o-der”, irmão)'],
        ['ë', 'vogal aberta, diferente do “e” fechado', 'swëster (“SVES-ter”, irmã)'],
      ],
    },
    lessons: [
      {
        id: 'gmh-u2-l1',
        title: 'Mīn vater, mīn muoter',
        kind: 'licao',
        words: ['vater', 'muoter', 'bruoder', 'swëster', 'sun', 'tohter'],
        cloze: [
          { sentence: 'Daȥ ist mīn ___.', answer: 'vater', options: ['vater', 'muoter', 'bruoder'], translation: 'Esse é o meu pai.' },
          { sentence: 'Daȥ ist mīn ___.', answer: 'muoter', options: ['muoter', 'vater', 'swëster'], translation: 'Essa é a minha mãe.' },
          { sentence: 'Daȥ ist mīn ___.', answer: 'bruoder', options: ['bruoder', 'swëster', 'sun'], translation: 'Esse é o meu irmão.' },
        ],
        voice: {
          bot: 'Ist daȥ dīn bruoder?',
          botTranslation: 'Esse é o teu irmão?',
          expected: ['Ja, daȥ ist mīn bruoder.', 'mīn bruoder', 'ja'],
          hint: 'Responda com “Ja, daȥ ist mīn bruoder” ou só “Nein”.',
        },
        communityPrompt: 'Fale da sua família em alto-alemão médio: “daȥ ist mīn vater”, “daȥ ist mīn muoter”.',
      },
      {
        id: 'gmh-u2-l2',
        title: 'Mīn hūs',
        kind: 'licao',
        words: ['hūs', 'hunt', 'katze', 'brōt', 'wīn', 'wazzer'],
        cloze: [
          { sentence: 'Daȥ ist mīn ___.', answer: 'hūs', options: ['hūs', 'hunt', 'brōt'], translation: 'Essa é a minha casa.' },
          { sentence: 'Daȥ ist mīn ___.', answer: 'hunt', options: ['hunt', 'katze', 'hūs'], translation: 'Esse é o meu cachorro.' },
          { sentence: 'Dër ___ ist guot.', answer: 'wīn', options: ['wīn', 'wazzer', 'brōt'], translation: 'O vinho é bom.' },
        ],
        voice: {
          bot: 'Ist daȥ brōt guot?',
          botTranslation: 'O pão está bom?',
          expected: ['Ja, daȥ brōt ist guot.', 'daȥ brōt ist guot', 'ja'],
          hint: 'Responda com “Ja, daȥ brōt ist guot” ou só “Nein”.',
        },
        communityPrompt: 'Diga o que tem na sua casa em alto-alemão médio, usando “daȥ ist…” — hunt, katze, brōt ou wīn.',
      },
      {
        id: 'gmh-u2-l3',
        title: 'Prova: família e casa',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Daȥ ist mīn hūs, unde daȥ ist mīn vater. Unde du, ist daȥ dīn hūs?',
          botTranslation: 'Essa é a minha casa, e esse é o meu pai. E tu, essa é a tua casa?',
          expected: ['Ja, daȥ ist mīn hūs.', 'daȥ ist mīn hūs', 'ja'],
          hint: 'Responda com “Daȥ ist mīn hūs” pra dizer qual é a sua casa.',
        },
        communityPrompt: 'Escreva um parágrafo curto em alto-alemão médio contando sobre sua família (vater/muoter/bruoder/swëster) e sua casa (hūs), usando pelo menos três palavras desta unidade.',
      },
    ],
  },
];
