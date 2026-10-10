import type { UnitSeed } from '../types';

/**
 * Trilha do alto-alemão médio: as quatro unidades de A1 e A2 por enquanto (ver `incomplete` em
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
  {
    id: 'gmh-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Einlif ritter, mīn hant',
    emoji: '🔢',
    card: {
      id: 'gmh-c3',
      title: 'Einlif, zwelf, zweinzic: os numerais maiores',
      emoji: '🔢',
      history:
        'A “Appendix:Middle High German numerals” do Wiktionary confirma “einlif” (11), “zwelf” (12), “zweinzic” (20), “drīȥic” (30) e “hundert” (100) — já muito parecidos com o alemão moderno “elf”, “zwölf”, “zwanzig”, “dreißig”, “hundert”. Nos poemas da época, como o Nibelungenlied, números grandes aparecem para contar tropas, dias de viagem e tesouros.',
      culture_tip:
        'Os verbos fortes de classe 5, como “ëȥȥen” (comer) e “sprëchen” (falar), mudam a vogal da raiz: “ich iȥȥe” mas “wir ëȥȥen” — a mesma alternância “e/i” que o alemão moderno ainda guarda em “ich esse / du isst”.',
      grammar_why:
        'Repare como “du” e “ër” trocam o “e” da raiz por “i” nos verbos fortes de classe 5: “du iȥȥest”, “ër iȥȥet”, mas “wir ëȥȥen”. E as partes do corpo seguem o mesmo padrão de possessivo já visto: “mīn hant” (a minha mão) muda de gênero só no artigo, não no possessivo “mīn”.',
      grammar_examples: [
        ['Einlif ritter, zwelf tage.', 'Onze cavaleiros, doze dias.'],
        ['Ich iȥȥe brōt, du iȥȥest wīn.', 'Eu como pão, tu comes/bebes vinho.'],
        ['Mīn hant ist starc.', 'A minha mão é forte.'],
      ],
      character_guide: [
        ['ȥȥ', 'duplo “ȥ”, som de “ts” mais longo', 'ëȥȥen (“ETS-sen”, comer)'],
        ['-zic', 'terminação das dezenas, antecessora do “-zig” moderno', 'zweinzic (“TSVEIN-tsik”, vinte)'],
      ],
    },
    lessons: [
      {
        id: 'gmh-u3-l1',
        title: 'Einlif, zwelf, zweinzic',
        kind: 'licao',
        words: ['einlif', 'zwelf', 'zweinzic', 'drīȥic', 'hundert', 'mantac'],
        cloze: [
          { sentence: '___ ritter.', answer: 'Einlif', options: ['Einlif', 'Zwelf', 'Zweinzic'], translation: 'Onze cavaleiros.' },
          { sentence: '___ tage.', answer: 'Zwelf', options: ['Zwelf', 'Einlif', 'Hundert'], translation: 'Doze dias.' },
          { sentence: 'Hiute ist ___.', answer: 'mantac', options: ['mantac', 'zweinzic', 'hundert'], translation: 'Hoje é segunda-feira.' },
        ],
        voice: {
          bot: 'Wie vil ritter hāt dër künec? Einlif oder zweinzic?',
          botTranslation: 'Quantos cavaleiros o rei tem? Onze ou vinte?',
          expected: ['Dër künec hāt zweinzic ritter.', 'einlif', 'zweinzic'],
          hint: 'Responda com um dos dois números.',
        },
        communityPrompt: 'Conte em alto-alemão médio de um a zweinzic, usando os números já aprendidos.',
      },
      {
        id: 'gmh-u3-l2',
        title: 'Mīn hant, mīn houbet',
        kind: 'licao',
        words: ['hant', 'houbet', 'fuoz', 'bein', 'herze', 'ëȥȥen'],
        cloze: [
          { sentence: 'Mīn ___ ist starc.', answer: 'hant', options: ['hant', 'houbet', 'fuoz'], translation: 'A minha mão é forte.' },
          { sentence: 'Mīn ___ ist grōȥ.', answer: 'houbet', options: ['houbet', 'bein', 'herze'], translation: 'A minha cabeça é grande.' },
          { sentence: 'Ich ___ brōt.', answer: 'iȥȥe', options: ['iȥȥe', 'iȥȥest', 'ëȥȥen'], translation: 'Eu como pão.' },
        ],
        voice: {
          bot: 'Waȥ iȥȥest du, brōt oder vleisch?',
          botTranslation: 'O que tu comes, pão ou carne?',
          expected: ['Ich iȥȥe brōt.', 'ich iȥȥe', 'brōt'],
          hint: 'Responda com “Ich iȥȥe…” e brōt ou outra palavra de comida.',
        },
        communityPrompt: 'Descreva o seu corpo em alto-alemão médio: “mīn hant…”, “mīn houbet…”, “mīn fuoz…”.',
      },
      {
        id: 'gmh-u3-l3',
        title: 'Prova: números e corpo',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Sage mir: einlif oder zweinzic ritter, unde waȥ iȥȥest du hiute?',
          botTranslation: 'Me diga: onze ou vinte cavaleiros, e o que tu comes hoje?',
          expected: ['Zweinzic ritter, unde ich iȥȥe brōt.', 'zweinzic', 'ich iȥȥe'],
          hint: 'Responda com um número e “ich iȥȥe…”.',
        },
        communityPrompt: 'Escreva três frases em alto-alemão médio: uma com um número, uma descrevendo seu corpo e uma com “ich iȥȥe…” ou “ich trinke…”.',
      },
    ],
  },
  {
    id: 'gmh-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Diu burc unde mīn buoch',
    emoji: '🏰',
    card: {
      id: 'gmh-c4',
      title: 'Hān: a segunda forma de “ter”',
      emoji: '🏰',
      history:
        'O pacote de A1 deste idioma avisava que nenhuma fonte conferida trazia a conjugação de “haben” (ter) no alto-alemão médio. A entrada “hān”, do Wiktionary, resolve essa lacuna: é a mesma palavra, numa grafia de dicionário diferente, com tabela de conjugação própria — inclusive o auxiliar irregular confirmado “ich hān”.',
      culture_tip:
        '“Burc” (castelo/fortaleza) é um substantivo feminino forte com plural de Umlaut (“bürge”) — diferente de “sun” (masculino) e “tohter” (feminino em -r), já vistos, mostrando a riqueza das classes de declinação do alto-alemão médio.',
      grammar_why:
        'Repare o novo verbo “hān” (ter): “ich hān einen hunt” (eu tenho um cachorro), finalmente com conjugação confirmada. E o adjetivo “niuwe” (novo) e “schœne” (belo) seguem o mesmo padrão de concordância já visto com “guot” e “wīȥ”.',
      grammar_examples: [
        ['Ich hān einen hunt, unde ein buoch.', 'Eu tenho um cachorro, e um livro.'],
        ['Diu burc ist alt, abe diu kirche ist niuwe.', 'O castelo é antigo, mas a igreja é nova.'],
        ['Diu bluome ist schœne.', 'A flor é bela.'],
      ],
      character_guide: [
        ['œ', 'ditongo arredondado, parecido com o “eu” do francês', 'schœne (“SHÖ-ne”, belo)'],
        ['-e final em adjetivos', 'sempre pronunciado, nunca mudo', 'niuwe (“NI-u-ve”, novo)'],
      ],
    },
    lessons: [
      {
        id: 'gmh-u4-l1',
        title: 'Ich hān…',
        kind: 'licao',
        words: ['hān', 'burc', 'kirche', 'buoch', 'bette', 'bluome'],
        cloze: [
          { sentence: 'Ich ___ einen hunt.', answer: 'hān', options: ['hān', 'bin', 'iȥȥe'], translation: 'Eu tenho um cachorro.' },
          { sentence: 'Diu ___ ist alt.', answer: 'burc', options: ['burc', 'kirche', 'buoch'], translation: 'O castelo é antigo.' },
          { sentence: 'Daȥ ___ ist guot.', answer: 'buoch', options: ['buoch', 'bette', 'bluome'], translation: 'O livro é bom.' },
        ],
        voice: {
          bot: 'Hāst du ein buoch?',
          botTranslation: 'Tens um livro?',
          expected: ['Ich hān ein buoch.', 'ich hān', 'ja'],
          hint: 'Responda com “Ich hān…” ou “Nein”.',
        },
        communityPrompt: 'Diga em alto-alemão médio o que você tem, usando “ich hān…” — buoch, bluome ou bette.',
      },
      {
        id: 'gmh-u4-l2',
        title: 'Niuwe, schœne, riche',
        kind: 'licao',
        words: ['niuwe', 'schœne', 'junc', 'riche', 'übel', 'trinken'],
        cloze: [
          { sentence: 'Mīn hūs ist ___.', answer: 'niuwe', options: ['niuwe', 'übel', 'junc'], translation: 'A minha casa é nova.' },
          { sentence: 'Diu bluome ist ___.', answer: 'schœne', options: ['schœne', 'riche', 'übel'], translation: 'A flor é bela.' },
          { sentence: 'Ich ___ wīn.', answer: 'trinke', options: ['trinke', 'trinket', 'trinken'], translation: 'Eu bebo vinho.' },
        ],
        voice: {
          bot: 'Waȥ trinkest du, wīn oder wazzer?',
          botTranslation: 'O que tu bebes, vinho ou água?',
          expected: ['Ich trinke wīn.', 'ich trinke', 'wīn'],
          hint: 'Responda com “Ich trinke…”.',
        },
        communityPrompt: 'Descreva uma igreja ou um castelo imaginário em alto-alemão médio, usando niuwe, schœne ou riche.',
      },
      {
        id: 'gmh-u4-l3',
        title: 'Prova: a burc unde daȥ buoch',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Willekomen zur burc! Waȥ hāst du, unde waȥ trinkest du?',
          botTranslation: 'Bem-vindo ao castelo! O que tens, e o que bebes?',
          expected: ['Ich hān ein buoch, unde ich trinke wīn.', 'ich hān', 'ich trinke'],
          hint: 'Responda com “ich hān…” e “ich trinke…”.',
        },
        communityPrompt: 'Escreva um parágrafo curto sobre um castelo (burc) ou uma igreja (kirche) em alto-alemão médio, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
];
