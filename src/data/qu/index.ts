import type { LanguagePack } from '../types';
import { VOCAB_QU } from './vocabulario';
import { UNITS_QU } from './curriculo';
import { GRAMMAR_QU } from './gramatica';
import { STORIES_QU } from './historias';
import { COMMUNITY_QU, ETYMOLOGY_QU, JOURNAL_PROMPTS_QU, SCENARIOS_QU, SHADOWING_QU } from './extras';
import { ACCENTS_QU } from './sotaques';

export const QUECHUA: LanguagePack = {
  code: 'qu',
  name: 'Quéchua',
  nativeName: 'Runasimi',
  flag: '🇵🇪',
  lineage: {
    family: 'Quéchua',
    branches: ['Quéchua II (periférico)', 'Quéchua II-C', 'Quéchua sulenho (Qusqu-Qullaw, cusquenho-boliviano)'],
    region: 'Andes — sul do Peru (Cusco, Puno), Bolívia e noroeste da Argentina',
    writing: 'Alfabeto latino, ortografia de três vogais (a, i, u), com consoantes ejetivas e aspiradas marcadas por apóstrofo e “h” (padrão fixado pelo linguista Rodolfo Cerrón Palomino)',
  },
  // ISO 639-1 na melhor tentativa: nem o Android nem o iOS trazem voz nativa para o quéchua — a leitura
  // em voz alta pode não funcionar na maioria dos aparelhos (ver nota em `incomplete`).
  speechLocale: 'qu',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, ~92 palavras, 4 tópicos de gramática, 2 histórias). O quéchua tem várias variedades pouco inteligíveis entre si (central, norenha, sulenha…): este curso ensina o quéchua sulenho, na norma cusquenho-boliviana (Qusqu-Qullaw), a mais documentada e mais ensinada. A maioria dos aparelhos também não tem voz sintetizada para o quéchua, então a leitura em voz alta pode não soar certa ou pode faltar. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_QU,
  units: UNITS_QU,
  etymology: ETYMOLOGY_QU,
  community: COMMUNITY_QU,
  scenarios: SCENARIOS_QU,
  stories: STORIES_QU,
  accents: ACCENTS_QU,
  grammar: GRAMMAR_QU,
  journalPrompts: JOURNAL_PROMPTS_QU,
  shadowing: SHADOWING_QU,
  specialChars: ['ñ', "'", 'í'],
  // o quéchua não marca gênero gramatical: não há artigos nem concordância de gênero nos substantivos
  // e adjetivos (as palavras de parentesco mudam conforme o gênero de quem FALA, não por gramática).
  genders: [],
  greeting: 'Napaykullayki',
  sampleSentence: 'Napaykullayki! Linu sutiymi. Runasimita yachasun!',
  phrases: { hi: 'Napaykullayki!', thanks: 'Sulpayki!', letsStart: ['Yachasun!', 'Vamos começar!'] },
  formalMarkers:
    'O quéchua não tem um “você” formal separado do “tu”, como o espanhol: “qam” serve para qualquer pessoa. O respeito vem do vocabulário, sobretudo de chamar alguém de “tayta” (lit. “meu pai”) ou “mama” (lit. “minha mãe”) antes do nome ou sozinho, como quem diz “senhor” e “senhora” em português.',
  cognateNote:
    'O quéchua não é parente do português — são famílias de línguas completamente diferentes, então não espere reconhecer palavras por semelhança de raiz, como acontece com o espanhol ou o italiano. Mas o caminho inverso é real e documentado: o quéchua emprestou várias palavras PARA o espanhol e, por ele, para o português — “condor” (de “kuntur”), “puma”, “lhama” (de “llama”), “vicunha” (de “wik\'uña”) e “charque” (de “ch\'arki”) são todas palavras quéchuas do dia a dia andino que você já conhecia sem saber.',
};
