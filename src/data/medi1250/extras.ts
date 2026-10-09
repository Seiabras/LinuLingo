import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no latim medieval). */
export const COMMUNITY_MEDI1250: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Quis es?',
    content: 'Ego sum abbas bona.',
    reference: 'Ego sum abbas bonus.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Descreve scribam tuam.',
    content: 'Scriba mea bona est.',
    reference: 'Scriba meus bonus est.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Quid cras facies?',
    content: 'Habeo cantare in ecclesia.',
    reference: 'Cantare habeo in ecclesia.',
  },
];

/**
 * Cenário de conversa. Fonte do pupilo histórico (Fridugiso) e do cenário (scriptorium de Tours): ver
 * o cabeçalho de `historias.ts`. Como no latim clássico, não há uma distinção formal/informal clara
 * de verdade: a disputa acadêmica sobre o "vos" de cortesia ao imperador (a partir do século IV,
 * segundo Brown & Gilman, citados pela Wikipédia em inglês, "T–V distinction") é contestada por
 * estudos mais recentes (o estudo sobre as cartas de Símaco encontra, na correspondência real, que a
 * troca singular/plural rastreia o NÚMERO de destinatários, não a cortesia) — e, segundo a própria
 * Wikipédia, as normas de uso só se consolidaram entre os séculos XII-XIV, bem depois do cenário
 * desta rodada. Por isso o registro aqui é só "informal" por convenção do app, não uma afirmação
 * sobre a língua.
 */
export const SCENARIOS_MEDI1250: ScenarioSeed[] = [
  {
    id: 'medi1250-s1',
    title: 'No scriptorium de Tours, com Fridugiso',
    emoji: '✍️',
    cefr: 'A1',
    register: 'informal',
    persona: 'Fridugiso, monge e pupilo de Alcuíno',
    description: 'Fridugiso te recebe no scriptorium do mosteiro de Tours, onde os monges copiam manuscritos com a nova letra carolíngia.',
    turns: [
      {
        bot: 'Pax! Ego sum Fridugisus, monachus huius monasterii.',
        botTranslation: 'Paz! Eu sou Fridugiso, monge deste mosteiro.',
        keywords: ['pax', 'monachus', 'frater'],
        suggestions: ['Pax! Ego sum monachus novus.', 'Deo gratias!'],
      },
      {
        bot: 'Codicem scribo in scriptorio. Et tu?',
        botTranslation: 'Eu escrevo um códice no scriptorium. E você?',
        keywords: ['codex', 'liber', 'legere', 'scribere'],
        suggestions: ['Librum lego.', 'Psalmum scribo.'],
      },
    ],
  },
];

/**
 * Etimologia do latim medieval: algumas palavras são empréstimos do grego cristão, sem parentesco
 * direto com o português além da própria palavra grega (ver medi1250-g1 em gramatica.ts) — nesses
 * casos a seta aponta pro grego moderno (pacote "el" deste app, já completo), confirmando que a
 * palavra continua praticamente igual depois de mais de dois mil anos (conferido verbete a verbete no
 * Wiktionary, seção "Greek" — grego moderno —, via WebFetch). Outras palavras já são clássicas, sem
 * mudança de forma: a seta aponta pro português (pacote "pt") e, quando a própria palavra aparece
 * também no pacote "la" (latim clássico), pra ele também.
 */
export const ETYMOLOGY_MEDI1250: EtymologySeed[] = [
  {
    word: 'monachus',
    root_word: 'μοναχός',
    origin_language: 'Grego antigo (μοναχός, "solitário"), via o latim tardio',
    cognates: c(['el', 'μοναχός'], ['pt', 'monge']),
    evolution_note: '"Monachus" é empréstimo do grego μοναχός (monakhós), que continua, com a MESMA forma, significando "monge" no grego de hoje — mais de dois mil anos sem mudar de sentido. O português "monge" vem direto do latim "monachus", perdendo a terminação -us.',
    transparent: false,
  },
  {
    word: 'ecclesia',
    root_word: 'ἐκκλησία',
    origin_language: 'Grego antigo (ἐκκλησία, "assembleia")',
    cognates: c(['el', 'εκκλησία'], ['pt', 'igreja']),
    evolution_note: '"Ecclesia" (igreja) é a mesma palavra grega ἐκκλησία ("assembleia"), ainda usada no grego de hoje para "igreja". O português "igreja" vem dela, mas mudou bastante de som pelo caminho (o grupo -cl- virou -gr-, numa troca de posição chamada metátese).',
    transparent: false,
  },
  {
    word: 'episcopus',
    root_word: 'ἐπίσκοπος',
    origin_language: 'Grego antigo (ἐπίσκοπος, "supervisor")',
    cognates: c(['el', 'επίσκοπος'], ['pt', 'bispo']),
    evolution_note: '"Episcopus" vem do grego ἐπίσκοπος (epískopos, "quem olha por cima, supervisor"), ainda a palavra do grego de hoje para "bispo". O português "bispo" é um encurtamento grande da mesma palavra, perdendo o "e-" e o "-sco-" do meio.',
    transparent: false,
  },
  {
    word: 'psalmus',
    root_word: 'ψαλμός',
    origin_language: 'Grego antigo (ψαλμός)',
    cognates: c(['el', 'ψαλμός'], ['pt', 'salmo']),
    evolution_note: '"Psalmus" vem do grego ψαλμός (psalmós), ligado ao verbo "tocar uma corda" — ainda a palavra do grego de hoje para "salmo". O português "salmo" perdeu só o "p-" inicial.',
    transparent: true,
  },
  {
    word: 'frater',
    root_word: 'frater',
    origin_language: 'Latim (clássico e medieval, sem mudança de forma)',
    cognates: c(['la', 'frater'], ['pt', 'frei']),
    evolution_note: 'No sentido religioso deste pacote ("irmão de hábito", não de sangue), "frater" é a raiz do português "frei"/"freire" (como em "Frei Caneca") — não de "irmão", que vem de outra palavra latina, "germanus". Curiosamente, os dois descendentes portugueses de "frater" (no sentido de família) e "germanus" trocaram de papel ao longo do tempo.',
    transparent: false,
  },
  {
    word: 'codex',
    root_word: 'codex/caudex',
    origin_language: 'Latim (sentido "livro" já atestado por Sêneca, c. 49 d.C.)',
    cognates: c(['la', 'codex'], ['pt', 'códice']),
    evolution_note: '"Codex" deu o português "códice" quase sem mudança — só a terminação -ex virou -ice. É também a raiz, por outro caminho, da palavra inglesa "code".',
    transparent: true,
  },
  {
    word: 'littera',
    root_word: 'littera',
    origin_language: 'Latim (origem anterior incerta, segundo o Wiktionary)',
    cognates: c(['la', 'littera'], ['pt', 'letra']),
    evolution_note: '"Littera" deu o português "letra", perdendo uma das duas consoantes dobradas (-tt- virou -t-) e a terminação -a se mantendo quase igual.',
    transparent: true,
  },
  {
    word: 'liber',
    root_word: 'liber/libri',
    origin_language: 'Latim (segunda acepção de "liber", diferente do adjetivo "livre")',
    cognates: c(['la', 'liber'], ['pt', 'livro']),
    evolution_note: '"Liber" (livro) é bem diferente do adjetivo "liber, libera, liberum" (livre) — são duas palavras que só parecem iguais na forma masculina. O português "livro" vem do substantivo, puxado do caso acusativo "librum".',
    transparent: false,
  },
  {
    word: 'charta',
    root_word: 'χάρτης',
    origin_language: 'Grego antigo (χάρτης, "papiro"), com mudança para o feminino em latim',
    cognates: c(['el', 'χάρτης'], ['pt', 'carta']),
    evolution_note: '"Charta" (papiro/papel) vem do grego χάρτης. O português "carta" vem dela, mas pelo sentido 3 do Wiktionary ("um pedaço de escrita, carta"), não pelo sentido 1 ("papiro/papel") usado neste pacote — as duas palavras portuguesas "carta" e "papel" descendem, por caminhos diferentes, da mesma raiz latina.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_MEDI1250: [string, string][] = [
  ['Pax! Ego sum monachus.', 'Paz! Eu sou monge. (E você, quem é?)'],
  ['Codicem scribo in scriptorio.', 'Eu escrevo um códice no scriptorium. (O que você "escreveria" hoje?)'],
  ['Deo gratias pro pace.', 'Graças a Deus pela paz. (Pelo que você é grato hoje?)'],
  ['Cantare habeo psalmum.', 'Eu vou cantar um salmo (lit. "cantar tenho"). (O que você vai fazer hoje?)'],
];

export const SHADOWING_MEDI1250: [string, string][] = [
  ['Pax! Ego sum monachus huius monasterii.', 'Paz! Eu sou monge deste mosteiro.'],
  ['Codicem scribo. Psalmum lego.', 'Eu escrevo um códice. Eu leio um salmo.'],
  ['Deo gratias! Legere et scribere bonum est.', 'Graças a Deus! Ler e escrever é bom.'],
  ['Cantare habeo in ecclesia.', 'Eu vou cantar na igreja.'],
];
