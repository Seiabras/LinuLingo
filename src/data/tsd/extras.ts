import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo tsakônio). */
export const COMMUNITY_TSD: CommunitySeed[] = [
  {
    author_name: 'Marina 🇬🇷',
    prompt: 'Εκιού τσαι εζού;',
    content: 'Σι τσαι εζού.',
    reference: 'Εζού τσαι εκιού.',
  },
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Νι έννι λιούκο;',
    content: 'Νι έννι βου.',
    reference: 'Νι έννι λιούκο.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Κιά έννι το όντα σι;',
    content: 'Τάνου έννι.',
    reference: 'Νι έννι τάνου.',
  },
];

/**
 * Cenário de conversa. As fontes consultadas não registram nenhuma forma de tratamento “formal”
 * separada da informal no tsakônio — por isso o cenário é informal, como os outros pacotes de língua
 * pequena/ameaçada deste app.
 */
export const SCENARIOS_TSD: ScenarioSeed[] = [
  {
    id: 'tsd-s1',
    title: 'Perguntando o caminho',
    emoji: '🏛️',
    cefr: 'A1',
    register: 'informal',
    persona: 'Alguém de Leonídio ou Tiros, na Tsakônia',
    description:
      'As fontes consultadas não documentam uma forma “formal” separada da informal no tsakônio: o mesmo jeito de falar serve para qualquer pessoa.',
    turns: [
      {
        bot: 'Κιά έννι το όντα σι;',
        botTranslation: 'Onde fica o quarto dele/dela?',
        keywords: ['τάνου', 'κάτου'],
        suggestions: ['Νι έννι τάνου.', 'Νι έννι κάτου.'],
      },
      {
        bot: "Καούρ! Μη' μ' αντζίζερε όρπα!",
        botTranslation: 'Bem! Não me toque ali!',
        keywords: ['καούρ'],
        suggestions: ['Καούρ, καούρ.', 'Καούρ.'],
      },
    ],
  },
];

/**
 * Etimologia de palavras tsakônias. O tsakônio É parente do grego padrão (pacote “el”, já neste app):
 * os dois vêm do mesmo ramo helênico do indo-europeu, mas de troncos diferentes dentro dele — o
 * tsakônio do dórico, o grego padrão do ático-jônico/coiné (ver gramatica.ts, tsd-g1 e tsd-g3). Com o
 * português, o parentesco é só o parentesco distante de toda língua indo-europeia (pelo proto-
 * indo-europeu), nunca por descendência direta como o português tem com o latim.
 */
export const ETYMOLOGY_TSD: EtymologySeed[] = [
  {
    word: 'βάννε',
    root_word: 'ϝαρήν (wărḗn)',
    origin_language: 'Grego dórico',
    cognates: c(['el', 'αρνί']),
    evolution_note:
      '“Βάννε” (cordeiro, ovelha) preserva o “digama” (ϝ, a letra grega antiga para o som /w/) do dórico “ϝαρήν”, como o som /v/ — um som que o ático já tinha perdido na época clássica (“ἀρήν”, sem digama), e que por isso também não chegou ao grego padrão “αρνί” (en.wiktionary.org/wiki/βάννε). É um dos exemplos mais citados da origem dórica do tsakônio.',
    transparent: false,
  },
  {
    word: 'αμέρα',
    root_word: 'ᾱ̔μέρᾱ (hāmérā)',
    origin_language: 'Grego dórico',
    cognates: c(['el', 'ημέρα']),
    evolution_note:
      '“Αμέρα” (dia) mostra outro traço típico do dórico: onde o ático tinha a vogal longa “η”, o dórico tinha um “α” longo — por isso “ἡμέρα” no grego padrão (de onde vem também a palavra curta “μέρα”) corresponde a “αμέρα” no tsakônio (en.wikipedia.org/wiki/Tsakonian_Greek, seção de fonologia). Curiosamente, embora a palavra equivalente seja feminina no grego padrão, o Wikcionário marca “αμέρα” como MASCULINA em tsakônio — um fato citado, não uma regra geral.',
    transparent: false,
  },
  {
    word: 'εκιού',
    root_word: 'τύ (dórico)',
    origin_language: 'Grego dórico',
    cognates: c(['el', 'εσύ']),
    evolution_note:
      'O pronome “εκιού” (tu, você) vem do dórico “τύ”, enquanto o grego padrão “εσύ” vem do ático “σύ” — duas formas de pronome de 2ª pessoa que já eram diferentes no grego antigo, muito antes do tsakônio e do grego moderno existirem como línguas separadas (en.wiktionary.org/wiki/εκιού).',
    transparent: false,
  },
  {
    word: 'γουναίκα',
    root_word: 'γῠνᾱ́ (gŭnā́)',
    origin_language: 'Grego dórico',
    cognates: c(['el', 'γυναίκα']),
    evolution_note:
      '“Γουναίκα” (mulher) e o “γυναίκα” do grego padrão vêm da mesma raiz indo-europeia, “*gʷḗn” — a mesma raiz, bem mais distante, por trás da palavra inglesa “queen” (rainha). No tsakônio, porém, o Wikcionário marca essa palavra como de gênero gramatical MASCULINO (en.wiktionary.org/wiki/γουναίκα), diferente do feminino esperado pela forma grega padrão — um dos dois casos conhecidos dessa mudança de classe (o outro é “αμέρα”, dia).',
    transparent: false,
  },
  {
    word: 'κρέφτα',
    root_word: 'κλέφτης',
    origin_language: 'Grego',
    cognates: c(['el', 'κλέφτης']),
    evolution_note:
      '“Κρέφτα” (ladrão) nasce de “κλέφτης” por um processo chamado metátese do “λ”: o grupo consonantal “κλ” vira “κρ”, com o “λ” mudando de lugar e de som — o mesmo processo que, segundo a Wikipédia, transforma “πλατύ” (largo) em “πρακιού” e “γλώσσα” (língua) em “γρούσα”/“γρούσσα”, a mesma raiz de “γρούσσα” (língua) deste pacote (en.wikipedia.org/wiki/Tsakonian_Greek, seção de fonologia).',
    transparent: false,
  },
  {
    word: 'πόρε',
    root_word: 'πόρος',
    origin_language: 'Grego antigo',
    cognates: c(['el', 'πόρος']),
    evolution_note:
      '“Πόρε” (porta) vem de “πόρος” — no grego antigo e no grego padrão, uma palavra para “passagem, vau, recurso”, não para “porta” (o grego padrão usa “πόρτα”, emprestado do veneziano). O tsakônio reaproveitou a palavra herdada do grego antigo com um sentido novo, mais concreto: a passagem virou a própria porta (en.wikipedia.org/wiki/Tsakonian_Greek, seção de fonologia).',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_TSD: [string, string][] = [
  ['Κιά έννι το όντα σι;', 'Onde fica o quarto dele/dela?'],
  ['Νι έννι λιούκο;', 'Isto é um lobo?'],
  ['Σάμερε τσαι επφέρζι;', 'Hoje e ontem?'],
  ['Νι έννι θάσσα;', 'Isto é o mar?'],
];

export const SHADOWING_TSD: [string, string][] = [
  ['Groússa námou eíni ta Tsakónika.', 'Nossa língua é o tsakônio.'],
  ['Κιά έννι το όντα σι;', 'Onde fica o quarto dele/dela?'],
  ["Μη' μ' αντζίζερε όρπα!", 'Não me toque ali!'],
  ['Νι έννι λιούκο.', 'Ele/isto é lobo.'],
];
