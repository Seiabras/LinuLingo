import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no toscano antigo). */
export const COMMUNITY_FIOR1236: CommunitySeed[] = [
  {
    author_name: 'Juliana 🇧🇷',
    prompt: 'Chi se\' tu?',
    content: 'Io son poeta bona.',
    reference: 'Io son poeta buono.',
  },
  {
    author_name: 'Rafael 🇧🇷',
    prompt: 'Descrevi la tua cittade.',
    content: 'Fiorenza è cittade bello.',
    reference: 'Fiorenza è cittade bella.',
  },
  {
    author_name: 'Larissa 🇧🇷',
    prompt: 'Che vuoi dir de la donna?',
    content: 'Il core move amor.',
    reference: "L'amor move il core.",
  },
];

/**
 * Cenário de conversa. Fonte do cenário (ruas de Fiorenza, fim do século XIII) e das falas de
 * Dante: ver o cabeçalho de `historias.ts`. Como no italiano moderno, o florentino antigo tem
 * distinção tu/voi — mas o registro "informal" aqui é convenção do app (o Linu, forasteiro recém-
 * chegado, trata o poeta por "tu", igual a maioria das cenas de rua deste app), não uma afirmação de
 * que não existisse cortesia formal na Fiorenza de Dante.
 */
export const SCENARIOS_FIOR1236: ScenarioSeed[] = [
  {
    id: 'fior1236-s1',
    title: 'Nas ruas de Fiorenza, com Dante',
    emoji: '⚜️',
    cefr: 'A1',
    register: 'informal',
    persona: 'Dante, poeta de Fiorenza',
    description: 'Dante te encontra numa rua de Fiorenza, antes do exílio de 1302, e fala da cidade e das estrelas.',
    turns: [
      {
        bot: "Deh, chi se' tu? Io son Dante, poeta di questa cittade.",
        botTranslation: 'Ah, quem é você? Eu sou Dante, poeta desta cidade.',
        keywords: ['deh', 'poeta', 'cittade'],
        suggestions: ['Pace, messere! Io son uom novo qui.', 'Io son poeta anch\'io.'],
      },
      {
        bot: 'Vedi la stella sovra il ciel? A riveder le stelle!',
        botTranslation: 'Você vê a estrela sobre o céu? A rever as estrelas! (verso final do Inferno de Dante)',
        keywords: ['stella', 'ciel', 'veder'],
        suggestions: ['Vedo la stella.', 'Il ciel è bello stasera.'],
      },
    ],
  },
];

/**
 * Etimologia do toscano antigo/florentino: palavras apocopadas ou com sentido arcaico apontam pra
 * forma plena correspondente no ITALIANO MODERNO (pacote `it`, já completo) — o toscano antigo é a
 * fase anterior da MESMA língua, não uma língua-filha separada (confirmado etimologicamente verbete
 * a verbete no Wiktionary, seção "Italian", via WebFetch).
 */
export const ETYMOLOGY_FIOR1236: EtymologySeed[] = [
  {
    word: 'core',
    root_word: 'cor/coris',
    origin_language: 'Latim (cor, coris, "coração")',
    cognates: c(['it', 'cuore'], ['la', 'cor']),
    evolution_note: '"Core" é rotulado "regional or archaic" no Wiktionary, forma alternativa de "cuore" — o italiano moderno trocou o ditongo "uo" no lugar do "o" simples. A forma apocopada "cor" (sem a vogal final) aparece no verso de Dante "m\'avea di paura il cor compunto" (Inferno, Canto I).',
    transparent: true,
  },
  {
    word: 'amor',
    root_word: 'amor/amoris',
    origin_language: 'Latim (amor, amoris, "amor")',
    cognates: c(['it', 'amore'], ['la', 'amor']),
    evolution_note: '"Amor" é a forma apocopada (Wiktionary: "apocopated") de "amore" — o italiano moderno manteve sempre a vogal final nesta palavra fora da poesia. É a mesma palavra do latim clássico "amor" (pacote "la", já completo), sem nenhuma mudança de forma.',
    transparent: true,
  },
  {
    word: 'fior',
    root_word: 'flos/floris',
    origin_language: 'Latim (flos, floris, "flor")',
    cognates: c(['it', 'fiore'], ['pt', 'flor']),
    evolution_note: '"Fior" é a forma apocopada de "fiore" — o português "flor" vem da MESMA raiz latina ("flos/floris"), mas por um caminho de som diferente (sem o ditongo "io" que o italiano desenvolveu).',
    transparent: true,
  },
  {
    word: 'stella',
    root_word: 'stella',
    origin_language: 'Latim (stella, do proto-itálico *stērlā)',
    cognates: c(['it', 'stella'], ['pt', 'estrela'], ['la', 'stella']),
    evolution_note: '"Stella" não mudou nada do latim clássico (pacote "la") até o italiano moderno (pacote "it") — é a mesma palavra nos três estágios. O verso final do Inferno de Dante, "a riveder le stelle" (a rever as estrelas), é uma das linhas mais citadas de toda a Divina Comédia.',
    transparent: true,
  },
  {
    word: 'cittade',
    root_word: 'civitas/civitatis',
    origin_language: 'Latim (civitas, civitatis, "cidadania, cidade")',
    cognates: c(['it', 'città'], ['pt', 'cidade']),
    evolution_note: '"Cittade" é rotulado "archaic" no Wiktionary, forma arcaica de "città" — o italiano moderno apocopou totalmente a terminação "-ade" (que o português "cidade" conservou quase intacta, pelo mesmo caminho latino de "civitas").',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_FIOR1236: [string, string][] = [
  ['Io son poeta.', 'Eu sou poeta. (E você, quem é?)'],
  ['Vedo le stelle nel ciel.', 'Eu vejo as estrelas no céu. (O que você "vê" hoje?)'],
  ["L'amor move il core.", 'O amor move o coração. (O que move o seu coração hoje?)'],
  ['Voglio andar a Fiorenza.', 'Eu quero ir a Florença. (Para onde você quer ir?)'],
];

export const SHADOWING_FIOR1236: [string, string][] = [
  ['Deh, chi se\' tu? Io son poeta.', 'Ah, quem é você? Eu sou poeta.'],
  ['A riveder le stelle!', 'A rever as estrelas! (Dante, Inferno, Canto XXXIV)'],
  ["Tanto gentile pare la donna mia.", 'Tão gentil parece a minha dona. (Dante, Vita Nuova)'],
  ["L'amor move il core, sovra ogne cosa.", 'O amor move o coração, sobre toda coisa.'],
];
