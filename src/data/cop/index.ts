import type { LanguagePack } from '../types';
import { VOCAB_COP } from './vocabulario';
import { UNITS_COP } from './curriculo';
import { GRAMMAR_COP } from './gramatica';
import { STORIES_COP } from './historias';
import { COMMUNITY_COP, ETYMOLOGY_COP, JOURNAL_PROMPTS_COP, SCENARIOS_COP, SHADOWING_COP } from './extras';
import { ALPHABET_COP } from './alfabeto';
import { ACCENTS_COP } from './sotaques';

/**
 * Copta (dialeto saídico) — a última fase da língua egípcia antiga, a mesma dos hieróglifos, só
 * escrita com um alfabeto baseado no grego (mais sete letras do demótico egípcio). Par natural:
 * `arz` (árabe egípcio), já pacote completo no app — mas sem parentesco genealógico real entre os
 * dois (ver a nota em `extras.ts` sobre a etimologia). O copta não tem falantes nativos do dia a dia
 * desde algum momento entre os séculos X e XII, mas continua em uso litúrgico na Igreja Ortodoxa
 * Copta até hoje (no dialeto bohaírico — este pacote ensina o saídico, ver nota em `vocabulario.ts`).
 */
export const COPTA: LanguagePack = {
  code: 'cop',
  name: 'Copta',
  nativeName: 'ϯⲙⲉⲧⲣⲉⲙⲛ̄ⲭⲏⲙⲓ',
  // sem estado vivo (não é país da ISO 3166-1) e sem falantes nativos no dia a dia: um emoji
  // simbólico (o anká, símbolo egípcio de vida que os coptas adotaram como cruz) em vez de bandeira.
  flag: '☥',
  lineage: {
    family: 'Afro-asiático',
    branches: ['Egípcio'],
    region: 'Vale do Nilo, Egito — sobretudo o Alto Egito (saídico, este pacote) e o Baixo Egito (bohaírico, hoje litúrgico)',
    writing: 'Alfabeto copta (as 24 letras gregas, de alfa a ômega, mais 7 letras emprestadas do demótico egípcio)',
  },
  // BCP-47 na melhor tentativa: nenhum aparelho tem voz nativa para copta.
  speechLocale: 'cop',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, ~29 palavras, 4 tópicos de gramática, 2 histórias), no dialeto saídico. Por enquanto: nenhuma frase do curso é uma pergunta (nenhuma fonte conferida confirmou uma palavra interrogativa) e não há cores básicas nem "por favor" confirmados. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_COP,
  units: UNITS_COP,
  etymology: ETYMOLOGY_COP,
  community: COMMUNITY_COP,
  scenarios: SCENARIOS_COP,
  stories: STORIES_COP,
  accents: ACCENTS_COP,
  grammar: GRAMMAR_COP,
  journalPrompts: JOURNAL_PROMPTS_COP,
  shadowing: SHADOWING_COP,
  specialChars: ['ϣ', 'ϥ', 'ϧ', 'ϩ', 'ϫ', 'ϭ', 'ϯ'],
  alphabet: ALPHABET_COP,
  keyboardRows: [
    ['ⲁ', 'ⲃ', 'ⲅ', 'ⲇ', 'ⲉ', 'ⲋ', 'ⲍ', 'ⲏ', 'ⲑ', 'ⲓ', 'ⲕ', 'ⲗ'],
    ['ⲙ', 'ⲛ', 'ⲝ', 'ⲟ', 'ⲡ', 'ⲣ', 'ⲥ', 'ⲧ', 'ⲩ', 'ⲫ', 'ⲭ', 'ⲯ', 'ⲱ'],
    ['ϣ', 'ϥ', 'ϧ', 'ϩ', 'ϫ', 'ϭ', 'ϯ'],
  ],
  // masculino e feminino, sem neutro (confirmado: Wikipedia, "Coptic language" — todo substantivo é masc. ou fem.)
  genders: ['m', 'f'],
  greeting: 'Ⲭⲉⲣⲉ',
  sampleSentence: 'Ⲭⲉⲣⲉ! Ⲡⲁⲣⲁⲛ ⲡⲉ Ⲗⲓⲛⲟⲩ.',
  // sem um verbo "começar" confirmado nas fontes desta rodada, "vamos começar" usa, livremente, a
  // mesma expressão de concordância já confirmada em extras.ts/historias.ts ("ⲟⲩⲙⲉ ⲡⲉ", "é verdade")
  phrases: { hi: 'Ⲭⲉⲣⲉ!', thanks: 'Ϣⲉⲡϩⲙⲟⲧ!', letsStart: ['Ⲟⲩⲙⲉ ⲡⲉ!', 'Vamos começar!'] },
  formalMarkers:
    'nenhuma fonte conferida confirma uma distinção formal/informal dentro do próprio copta — a mesma lacuna honesta que o francês antigo e o eslavo eclesiástico antigo já documentam no app.',
  cognateNote:
    'O copta é afro-asiático, mas do ramo EGÍPCIO — bem diferente do ramo semítico do árabe (padrão ou egípcio) e do indo-europeu do português: não existe parentesco direto, e quase nenhuma palavra é reconhecível de cara. Aqui a etimologia aponta pra TRÁS, pra raiz egípcia antiga/demótica de cada palavra (a mesma língua dos hieróglifos), em vez de pra um idioma moderno: o copta não tem um descendente vivo rastreado neste app — o árabe egípcio SUBSTITUIU o copta como língua do dia a dia, mas não desceu dele.',
};
