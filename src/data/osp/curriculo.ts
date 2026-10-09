import type { UnitSeed } from '../types';

/**
 * Trilha do castelhano medieval: só as duas unidades do nível A1 por enquanto (ver `incomplete` em
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
];
