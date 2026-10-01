import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no georgiano). */
export const COMMUNITY_KA: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'დაწერე შენი სახელი, ქალაქი და ოჯახი.',
    content: 'გამარჯობა, მე ვარ ბრუნო და მე ვარ კურიტიბა. მე მაქვს ერთი ძმა.',
    reference: 'გამარჯობა, ჩემი სახელია ბრუნო, და მე კურიტიბადან ვარ. მე მყავს ერთი ძმა.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'რა გინდა ჭამა დღეს?',
    content: 'მე მინდა ჭამა ხაჭაპური.',
    reference: 'მე მინდა ხაჭაპური.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'შენი სახლი პატარაა?',
    content: 'კი, ჩემი სახლი პატარა.',
    reference: 'კი, ჩემი სახლი პატარაა.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_KA: ScenarioSeed[] = [
  {
    id: 'ka-s1',
    title: 'ყავახანაში თბილისში',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'ნინო, მეგობარი თბილისიდან',
    description: 'Nino convida você para tomar algo num café da Cidade Velha de Tbilisi. É uma conversa entre amigos: use “შენ”.',
    turns: [
      {
        bot: 'გამარჯობა! ყავა გინდა ან ჩაი?',
        botTranslation: 'Oi! Você quer café ou chá?',
        keywords: ['ყავა', 'ჩაი'],
        suggestions: ['მე მინდა ყავა, გთხოვთ.', 'ჩაი, გთხოვთ.'],
      },
      {
        bot: 'ხაჭაპური გინდა?',
        botTranslation: 'Você quer khachapuri?',
        keywords: ['კი', 'არა', 'მინდა'],
        suggestions: ['კი, მინდა ხაჭაპური.', 'არა, მადლობა.'],
      },
    ],
  },
];

/**
 * Palavras do georgiano: raízes do próprio kartveliano (com parentes no mingreliano, a língua
 * kartveliana mais próxima) e empréstimos de outras línguas — o georgiano não é indo-europeu, então
 * aqui não há cognatos de verdade com o português.
 */
export const ETYMOLOGY_KA: EtymologySeed[] = [
  {
    word: 'წყალი',
    root_word: '*c̣q̇al-',
    origin_language: 'Proto-kartveliano',
    cognates: c(['xmf', 'წყუ (ts’q’u), წყარი (ts’q’ari)']),
    evolution_note: '“წყალი” (ts’q’ali, água) vem direto do proto-kartveliano, a língua-mãe da família — sem relação nenhuma com o português “água”. O parente mais próximo está no mingreliano, outra língua kartveliana falada no oeste da Geórgia, com “წყუ” (ts’q’u) e “წყარი” (ts’q’ari).',
    transparent: false,
  },
  {
    word: 'და',
    root_word: '*da-',
    origin_language: 'Proto-kartveliano',
    cognates: [],
    evolution_note: '“და” é, ao mesmo tempo, a conjunção “e” e a palavra para “irmã” — um caso raro de homógrafo genuíno, que vem de duas raízes antigas diferentes (a de “irmã” passou pelo georgiano antigo “დაჲ”, day). Não é uma brincadeira de tradução: as duas palavras realmente se escrevem e se pronunciam igual.',
    transparent: false,
  },
  {
    word: 'შვილი',
    root_word: '*šw-il-',
    origin_language: 'Proto-kartveliano',
    cognates: [],
    evolution_note: '“შვილი” (shvili, filho/filha) vem do proto-kartveliano “*šw-/*šew-” (dar à luz) mais o sufixo “-il”, formando algo como “o que foi gerado”. É a raiz por trás de quase todo sobrenome georgiano, que termina em “-შვილი” (-shvili, “filho de”) — como em Stalin, nascido Jughashvili.',
    transparent: false,
  },
  {
    word: 'გამარჯობა',
    root_word: 'გამარჯვება',
    origin_language: 'Georgiano',
    cognates: c(['ka', 'გაუმარჯოს (gaumarjos, “saúde!”, no brinde)']),
    evolution_note: '“გამარჯობა” (gamarjoba, oi) vem de “გამარჯვება” (gamarjveba, vitória): um jeito antigo de desejar sucesso a quem se encontra, de uma cultura acostumada a guerras de defesa no Cáucaso. O brinde “გაუმარჯოს” (gaumarjos, “que vença!”) vem da mesma raiz.',
    transparent: false,
  },
  {
    word: 'ხაჭაპური',
    root_word: 'ხაჭო + პური',
    origin_language: 'Georgiano (com empréstimo grego)',
    cognates: c(['grc', 'πυρός (pyrós, “trigo”)']),
    evolution_note: '“ხაჭაპური” (khachapuri) é a soma de “ხაჭო” (khacho, coalhada, queijo fresco) com “პური” (puri, pão) — e “პური” , por sua vez, veio do grego antigo “πυρός” (pyrós, “trigo”), um empréstimo bem mais antigo que a palavra composta.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_KA: [string, string][] = [
  ['დღეს როგორ ხარ?', 'Como você está hoje?'],
  ['გყავს და ან ძმა?', 'Você tem irmã ou irmão?'],
  ['რა გინდა ჭამა და სმა?', 'O que você quer comer e beber?'],
  ['სად ცხოვრობ?', 'Onde você mora?'],
];

export const SHADOWING_KA: [string, string][] = [
  ['გამარჯობა! როგორ ხარ?', 'Oi! Como vai?'],
  ['ჩემი სახელია ლინუ.', 'O meu nome é Linu.'],
  ['მე მყავს ერთი ძმა.', 'Eu tenho um irmão.'],
  ['მე ქართული ყავა მიყვარს.', 'Eu gosto de café georgiano.'],
];
