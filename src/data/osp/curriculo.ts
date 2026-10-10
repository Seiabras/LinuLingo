import type { UnitSeed } from '../types';

/**
 * Trilha do castelhano medieval: as quatro unidades de A1 e A2 por enquanto (ver `incomplete` em
 * index.ts). Cenário da corte de Rodrigo Díaz de Vivar, “El Cid” (ca. 1043-1099) — o herói do
 * Cantar de Mio Cid, a obra mais famosa do castelhano medieval, composta entre 1140 e 1207 (o
 * manuscrito que sobreviveu, de Per Abbat, está datado de 1207), segundo a Wikipédia em inglês
 * (“Old Spanish language”, “Cantar de Mio Cid”). Vocabulário do dia a dia (família, casa, números)
 * complementado pelo Wiktionary (seção “Old Spanish” de cada palavra, ou a etimologia do espanhol
 * moderno quando essa seção específica não existe).
 */
export const UNITS_OSP: UnitSeed[] = [
  {
    id: 'osp-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Yo seo Linu, e tú?',
    emoji: '🏰',
    card: {
      id: 'osp-c1',
      title: 'A língua do Cantar de Mio Cid',
      emoji: '🏰',
      history:
        'O castelhano medieval (castellano medieval) foi a língua de Castela entre os séculos X e XV. A obra mais famosa do período é o Cantar de Mio Cid, composto entre 1140 e 1207, sobre as aventuras de Rodrigo Díaz de Vivar, “El Cid Campeador”. O manuscrito que sobreviveu, cópia de um certo Per Abbat, traz a data de 1207. Alguns estudiosos também citam as Glosas Emilianenses, do mosteiro de San Millán de la Cogolla (séc. X), como um dos primeiros textos com anotações em romance próximo do castelhano — embora essa classificação seja discutida, e vários linguistas a considerem mais próxima do navarro-aragonês. O castelhano medieval é o ancestral direto do espanhol moderno, já completo neste aplicativo.',
      culture_tip:
        'O mosteiro de San Millán de la Cogolla, na região de La Rioja, é hoje Patrimônio Mundial da UNESCO — considerado por muitos, desde o filólogo Ramón Menéndez Pidal, o “berço da língua espanhola”, justamente por causa das Glosas Emilianenses.',
      grammar_why:
        'Como em português, o pronome de sujeito pode aparecer ou não: “seo amigo” já é “(eu) sou amigo”, porque a terminação do verbo “seer” (ser/estar) já diz quem fala — yo seo, tú sees, él sie, nos sedemos. Repare também que o castelhano medieval já distinguia “tú” (íntimo) de “vos” (cortês) — ver a lição de gramática dedicada a isso.',
      grammar_examples: [
        ['Yo seo Linu. Tú sees cavallero?', 'Eu sou Linu. Tu és cavaleiro?'],
        ['Él sie amigo.', 'Ele é amigo.'],
        ['Nos sedemos amigos.', 'Nós somos amigos.'],
      ],
      character_guide: [
        ['f-', 'ainda pronunciado “f”, nunca mudo (o “h” mudo do espanhol moderno é bem posterior)', 'fijo (“FI-djo”, filho)'],
        ['j', 'som parecido com o “dj”/“ia” do português, não o “j” espanhol moderno', 'fijo (“FI-djo”)'],
        ['ç', 'som de “ts”, diferente do “s”/“z” modernos', 'çinco (“TSIN-ko”, cinco)'],
        ['v / b', 'dois sons diferentes (ainda não se fundiram, como no espanhol moderno)', 'vino (“VI-no”, vinho) com “v” de verdade'],
      ],
    },
    lessons: [
      {
        id: 'osp-u1-l1',
        title: 'Non, yo, tú',
        kind: 'licao',
        words: ['non', 'yo', 'tú', 'él', 'nos', 'vos'],
        cloze: [
          { sentence: 'Vino? ___, agua.', answer: 'Non', options: ['Non', 'Yo', 'Tú'], translation: 'Vinho? Não, água.' },
          { sentence: '___ seo Linu.', answer: 'Yo', options: ['Yo', 'Tú', 'Él'], translation: 'Eu sou Linu.' },
          { sentence: '___ sees cavallero?', answer: 'Tú', options: ['Tú', 'Yo', 'Nos'], translation: 'Tu és cavaleiro?' },
        ],
        voice: {
          bot: 'Yo seo cavallero. Tú sees amigo?',
          botTranslation: 'Eu sou cavaleiro. Tu és amigo?',
          expected: ['Seo amigo.', 'yo seo', 'non'],
          hint: 'Responda com “Seo amigo” ou “Non”.',
        },
        communityPrompt: 'Responda em castelhano medieval: você é amigo (amigo) ou cavaleiro (cavallero)? Use “yo seo…”.',
      },
      {
        id: 'osp-u1-l2',
        title: 'Seer, aver, amigo',
        kind: 'licao',
        words: ['seer', 'aver', 'amigo', 'cavallero', 'rey', 'can'],
        cloze: [
          { sentence: 'Nos ___ amigos.', answer: 'sedemos', options: ['sedemos', 'avedes', 'seo'], translation: 'Nós somos amigos.' },
          { sentence: 'El rey ___ un fijo.', answer: 'ave', options: ['ave', 'sie', 'seo'], translation: 'O rei tem um filho.' },
          { sentence: 'Mio amigo ___ cavallero.', answer: 'sie', options: ['sie', 'ave', 'avedes'], translation: 'O meu amigo é cavaleiro.' },
        ],
        voice: {
          bot: 'Avedes un can?',
          botTranslation: 'Tens um cachorro?',
          expected: ['Ave.', 'yo ave', 'non'],
          hint: 'Responda repetindo o verbo: “Ave” (se tiver) ou “Non” (se não tiver).',
        },
        communityPrompt: 'Diga em castelhano medieval se você tem (repita o verbo de “avedes”) um cachorro (can) ou um gato (gato).',
      },
      {
        id: 'osp-u1-l3',
        title: 'Prova: primeiros passos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Yo seo Linu, e seo amigo. E tú?',
          botTranslation: 'Eu sou Linu, e sou amigo. E tu?',
          expected: ['Seo amigo.', 'yo seo', 'non'],
          hint: 'Diga “seo amigo” ou “seo cavallero” pra se apresentar.',
        },
        communityPrompt: 'Escreva uma apresentação curta em castelhano medieval: “yo seo…”.',
      },
    ],
  },
  {
    id: 'osp-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Mio padre e mi casa',
    emoji: '🏠',
    card: {
      id: 'osp-c2',
      title: 'Mio Cid: o possessivo que dá nome à obra',
      emoji: '🏠',
      history:
        'O próprio título “Cantar de Mio Cid” usa o possessivo medieval “mio” (meu) — de onde vem o epíteto do herói, “Mio Cid” (“meu senhor”, do árabe “sídi”). No castelhano medieval, “mio” é a forma masculina do possessivo, e “mi” cobre o feminino — diferente do espanhol moderno, em que “mi” já serve para os dois gêneros antes do substantivo.',
      culture_tip:
        'Rodrigo Díaz de Vivar, “El Cid Campeador” (ca. 1043-1099), foi um nobre e militar castelhano que serviu tanto a reis cristãos quanto, por um tempo, a taifas muçulmanas — e conquistou Valência em 1094. O epíteto “Cid” vem do árabe “sídi” (“meu senhor”), e “Campeador” significa “o vencedor em campo de batalha”.',
      grammar_why:
        'Repare como “mio”/“mi” (meu/minha) muda pelo gênero do substantivo que vem depois — “mio padre” (meu pai, masculino) e “mi madre” (minha mãe, feminino) — mesmo quando quem fala é a mesma pessoa, homem ou mulher.',
      grammar_examples: [
        ['Mio padre ave un can.', 'O meu pai tem um cachorro.'],
        ['Mi madre ave una casa.', 'A minha mãe tem uma casa.'],
      ],
      character_guide: [
        ['ss', 'som de “s” surdo, diferente do “s” único entre vogais (que soava como “z”)', 'casa (“KA-za”, com s suave entre vogais)'],
        ['-s final', 'já marca plural, igual ao espanhol moderno', 'canes (“KA-nes”, cachorros)'],
      ],
    },
    lessons: [
      {
        id: 'osp-u2-l1',
        title: 'Mio padre, mi madre',
        kind: 'licao',
        words: ['padre', 'madre', 'fijo', 'fija', 'ermano', 'ermana'],
        cloze: [
          { sentence: 'Mio ___ ave un can.', answer: 'padre', options: ['padre', 'madre', 'ermano'], translation: 'O meu pai tem um cachorro.' },
          { sentence: 'Mi ___ ave una casa.', answer: 'madre', options: ['madre', 'padre', 'ermana'], translation: 'A minha mãe tem uma casa.' },
          { sentence: 'El rey ave un ___.', answer: 'fijo', options: ['fijo', 'fija', 'ermano'], translation: 'O rei tem um filho.' },
        ],
        voice: {
          bot: 'Avedes un ermano?',
          botTranslation: 'Tens um irmão?',
          expected: ['Ave.', 'yo ave', 'non'],
          hint: 'Responda repetindo o verbo: “Ave” (se tiver) ou “Non”.',
        },
        communityPrompt: 'Fale da sua família em castelhano medieval: “mio padre…”, “mi madre…”, usando “ave” (tem) pra irmãos.',
      },
      {
        id: 'osp-u2-l2',
        title: 'Mi casa',
        kind: 'licao',
        words: ['casa', 'gato', 'pan', 'vino', 'agua', 'grande'],
        cloze: [
          { sentence: 'Mi ___ sie grande.', answer: 'casa', options: ['casa', 'gato', 'pan'], translation: 'A minha casa é grande.' },
          { sentence: 'Mio ___ sie blanco.', answer: 'gato', options: ['gato', 'casa', 'pan'], translation: 'O meu gato é branco.' },
          { sentence: 'El ___ sie bueno.', answer: 'pan', options: ['pan', 'vino', 'agua'], translation: 'O pão está bom.' },
        ],
        voice: {
          bot: 'El vino sie vermejo?',
          botTranslation: 'O vinho é vermelho?',
          expected: ['Sie.', 'el vino sie vermejo', 'non'],
          hint: 'Responda repetindo o verbo: “Sie” (se for) ou “Non”.',
        },
        communityPrompt: 'Diga o que tem na sua casa em castelhano medieval, usando “mi casa ave…” — pan, vino ou agua.',
      },
      {
        id: 'osp-u2-l3',
        title: 'Prova: família e casa',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Mi casa sie grande, e ave pan e vino. E tú, mi casa sie grande?',
          botTranslation: 'A minha casa é grande, e tem pão e vinho. E tu, a minha casa é grande?',
          expected: ['Sie.', 'mi casa sie grande', 'non'],
          hint: 'Responda repetindo o verbo pra confirmar ou negar.',
        },
        communityPrompt: 'Escreva um parágrafo curto em castelhano medieval contando sobre sua família (padre/madre/ermano/ermana) e sua casa (casa), usando pelo menos três palavras desta unidade.',
      },
    ],
  },
  {
    id: 'osp-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Mi cabeça, onze cavalleros',
    emoji: '🔢',
    card: {
      id: 'osp-c3',
      title: 'Onze, seze, veynte: números com página própria',
      emoji: '🔢',
      history:
        'A categoria “Old Spanish numerals” do Wiktionary confirma, com página própria, os numerais “onze” (11), “seze” (16), “veynte” (20), “sessaenta” (60) e “ochenta” (80) — todos herdados do latim, muito parecidos com o espanhol moderno. Este pacote ainda não ensina a sequência completa de 1 a 100: só entram os números com página própria conferida, a mesma régua de honestidade já usada para o “sí” na unidade 2.',
      culture_tip:
        'O Cantar de Mio Cid é cheio de números: o Cid reúne tropas, conta cavaleiros e divide o espólio das batalhas com precisão — contar bem era parte essencial da vida de um cavaleiro medieval.',
      grammar_why:
        'Repare que os ordinais (“dozeno”, 12º; “noveno”, 9º) terminam em “-eno”, do latim “-enus” — a mesma lógica do espanhol moderno “noveno”, “décimo”. E os nomes do corpo seguem o mesmo padrão de gênero já visto: “mi cabeça” (feminino) e “mio cabello” (masculino), com o possessivo mudando de forma.',
      grammar_examples: [
        ['Onze cavalleros, seze dias.', 'Onze cavaleiros, dezesseis dias.'],
        ['Mi cabeça sie grande.', 'A minha cabeça é grande.'],
        ['Mio braço sie fuerte.', 'O meu braço é forte.'],
      ],
      character_guide: [
        ['ç', 'som de “ts”, como em “çinco”', 'cabeça (“ka-BE-tsa”, cabeça)'],
        ['-eno', 'terminação dos ordinais, do latim “-enus”', 'noveno (“no-VE-no”, 9º)'],
      ],
    },
    lessons: [
      {
        id: 'osp-u3-l1',
        title: 'Onze, seze, veynte',
        kind: 'licao',
        words: ['onze', 'seze', 'veynte', 'sessaenta', 'ochenta', 'dozeno'],
        cloze: [
          { sentence: '___ cavalleros.', answer: 'Onze', options: ['Onze', 'Seze', 'Veynte'], translation: 'Onze cavaleiros.' },
          { sentence: '___ dias.', answer: 'Seze', options: ['Seze', 'Onze', 'Ochenta'], translation: 'Dezesseis dias.' },
          { sentence: 'El ___ dia.', answer: 'dozeno', options: ['dozeno', 'veynte', 'noveno'], translation: 'O décimo segundo dia.' },
        ],
        voice: {
          bot: 'Quantos cavalleros ave el rey? Onze o veynte?',
          botTranslation: 'Quantos cavaleiros o rei tem? Onze ou vinte?',
          expected: ['El rey ave veynte cavalleros.', 'onze', 'veynte'],
          hint: 'Responda com “El rey ave…” e um dos números.',
        },
        communityPrompt: 'Conte em castelhano medieval, de um a veynte, usando os números já aprendidos (uno, dos, tres… onze… veynte).',
      },
      {
        id: 'osp-u3-l2',
        title: 'Mi cabeça, mio braço',
        kind: 'licao',
        words: ['cabeça', 'boca', 'cabello', 'braço', 'cuerpo', 'cuello'],
        cloze: [
          { sentence: 'Mi ___ sie grande.', answer: 'cabeça', options: ['cabeça', 'boca', 'braço'], translation: 'A minha cabeça é grande.' },
          { sentence: 'Mio ___ sie fuerte.', answer: 'braço', options: ['braço', 'cabello', 'cuello'], translation: 'O meu braço é forte.' },
          { sentence: 'Mio ___ sie negro.', answer: 'cabello', options: ['cabello', 'cuerpo', 'boca'], translation: 'O meu cabelo é preto.' },
        ],
        voice: {
          bot: 'Tu cabello sie negro o blanco?',
          botTranslation: 'O teu cabelo é preto ou branco?',
          expected: ['Mio cabello sie negro.', 'mio cabello sie', 'negro'],
          hint: 'Responda com “Mio cabello sie…” e uma cor.',
        },
        communityPrompt: 'Descreva o seu corpo em castelhano medieval: “mi cabeça…”, “mio cabello…”, “mio braço…”.',
      },
      {
        id: 'osp-u3-l3',
        title: 'Prova: números e corpo',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Agora, dime: onze o veynte cavalleros, e tu cabello sie negro o blanco?',
          botTranslation: 'Agora, me diga: onze ou vinte cavaleiros, e o teu cabelo é preto ou branco?',
          expected: ['Veynte cavalleros, e mio cabello sie negro.', 'veynte', 'mio cabello sie'],
          hint: 'Responda com um número e a cor do cabelo, usando “mio cabello sie…”.',
        },
        communityPrompt: 'Escreva três frases em castelhano medieval: uma com um número (onze, seze, veynte…), uma descrevendo seu corpo e uma com “agora” ou “siempre”.',
      },
    ],
  },
  {
    id: 'osp-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'No mercado de la cibdat',
    emoji: '🏙️',
    card: {
      id: 'osp-c4',
      title: 'Comer, bever, fazer: os verbos regulares',
      emoji: '🏙️',
      history:
        'Depois de conquistar Valência em 1094, o Cid governou uma grande “cibdat” (cidade) com mercado, dinheiro e vida cotidiana — bem diferente da vida de acampamento guerreiro das primeiras partes do Cantar. Os verbos regulares em -er (“comer”, “bever”) seguem a mesma terminação já confirmada em “sedemos” (de seer) e “avedes” (de aver), vistas nas unidades anteriores.',
      culture_tip:
        'O castelhano medieval ainda não tinha um futuro com terminação própria: “comer he” (literalmente “comer tenho”) é a construção que, séculos depois, deu origem a “comeré” no espanhol moderno e “comerei” no português — ver a lição de gramática dedicada a isso.',
      grammar_why:
        'Repare a terminação regular dos verbos em -er: “yo como”, “yo bevo” — a mesma terminação “-o” já vista em “seyo” (de seer). E os adjetivos “vieio”, “fermoso” e “justo” concordam em gênero com o substantivo, como “grande” e “bueno” já vistos.',
      grammar_examples: [
        ['Yo como pan, e bevo vino.', 'Eu como pão, e bebo vinho.'],
        ['El rey sie vieio, mas justo.', 'O rei é velho, mas justo.'],
        ['La cibdat sie fermosa.', 'A cidade é bela.'],
      ],
      character_guide: [
        ['-er', 'terminação regular (como, come, comemos…)', 'comer (“ko-MER”, comer)'],
        ['bu/v', 'o “v” de “bever” já é um som de verdade, diferente do “b”', 'bever (“be-VER”, beber)'],
      ],
    },
    lessons: [
      {
        id: 'osp-u4-l1',
        title: 'Comer, bever, dormir',
        kind: 'licao',
        words: ['comer', 'bever', 'dormir', 'venir', 'tomar', 'fazer'],
        cloze: [
          { sentence: 'Yo ___ pan.', answer: 'como', options: ['como', 'bevo', 'dormo'], translation: 'Eu como pão.' },
          { sentence: 'Yo ___ vino.', answer: 'bevo', options: ['bevo', 'como', 'tomo'], translation: 'Eu bebo vinho.' },
          { sentence: 'Él ___ de la cibdat.', answer: 'viene', options: ['viene', 'dorme', 'canta'], translation: 'Ele vem da cidade.' },
        ],
        voice: {
          bot: 'Qué comes, pan o carne?',
          botTranslation: 'O que tu comes, pão ou carne?',
          expected: ['Yo como pan.', 'yo como', 'pan'],
          hint: 'Responda com “Yo como…” e pan ou outra palavra de comida.',
        },
        communityPrompt: 'Diga em castelhano medieval o que você come e bebe: “yo como…”, “yo bevo…”.',
      },
      {
        id: 'osp-u4-l2',
        title: 'La cibdat e el mercado',
        kind: 'licao',
        words: ['cibdat', 'dinero', 'camisa', 'castiello', 'vieio', 'fermoso'],
        cloze: [
          { sentence: 'Valençia sie una grant ___.', answer: 'cibdat', options: ['cibdat', 'camisa', 'castiello'], translation: 'Valência é uma grande cidade.' },
          { sentence: 'El cavallero ave ___.', answer: 'dinero', options: ['dinero', 'castiello', 'camisa'], translation: 'O cavaleiro tem dinheiro.' },
          { sentence: 'La cibdat sie ___.', answer: 'fermosa', options: ['fermosa', 'fermoso', 'vieio'], translation: 'A cidade é bela.' },
        ],
        voice: {
          bot: 'El castiello sie vieio o nuevo?',
          botTranslation: 'O castelo é velho ou novo?',
          expected: ['El castiello sie vieio.', 'vieio', 'el castiello sie'],
          hint: 'Responda com “El castiello sie…” e um adjetivo.',
        },
        communityPrompt: 'Descreva uma cidade imaginária do castelhano medieval: “la cibdat sie…”, usando fermoso, grande ou vieio.',
      },
      {
        id: 'osp-u4-l3',
        title: 'Prova: no mercado',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Bien venido a la cibdat! Qué comes, e qué buscas en el mercado?',
          botTranslation: 'Bem-vindo à cidade! O que tu comes, e o que procuras no mercado?',
          expected: ['Yo como pan, e busco una camisa.', 'yo como', 'yo busco'],
          hint: 'Responda com “yo como…” e “yo busco…”.',
        },
        communityPrompt: 'Escreva um parágrafo curto sobre um dia na cidade medieval, usando pelo menos três verbos desta unidade (comer, bever, buscar, tomar, andar, fazer).',
      },
    ],
  },
];
