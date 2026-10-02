import type { LanguagePack } from '../types';
import { VOCAB_MI } from './vocabulario';
import { UNITS_MI } from './curriculo';
import { GRAMMAR_MI } from './gramatica';
import { STORIES_MI } from './historias';
import { COMMUNITY_MI, ETYMOLOGY_MI, JOURNAL_PROMPTS_MI, SCENARIOS_MI, SHADOWING_MI } from './extras';

export const MAORI: LanguagePack = {
  code: 'mi',
  name: 'Maori',
  // “Te reo Māori” (lit. “a língua maori”) é como o próprio povo chama a língua — confirmado pela
  // Wikipédia e pelo Te Aka Māori Dictionary (maoridictionary.co.nz), a referência mais usada para o
  // maori e a fonte principal deste pacote.
  nativeName: 'Te reo Māori',
  // bandeira da Nova Zelândia: o maori é língua oficial do país, ao lado do inglês e da língua de
  // sinais neozelandesa.
  flag: '🇳🇿',
  lineage: {
    family: 'Austronésio',
    branches: ['Malaio-polinésio', 'Oceânico', 'Polinésio', 'Taitiano'],
    region: 'Ilha Norte e Ilha Sul da Nova Zelândia (Aotearoa)',
    writing:
      'Alfabeto latino com macron (traço sobre a vogal: ā, ē, ī, ō, ū) para marcar vogal longa, e dois dígrafos com som próprio: “wh” (geralmente /f/) e “ng” (/ŋ/, como o “ng” de “ringue”) — ver gramatica.ts.',
  },
  // nenhum serviço de síntese de voz consultado (Google, incluindo o Cloud Text-to-Speech) tem voz
  // para o maori: os áudios usam a voz do aparelho, se houver.
  speechLocale: 'mi-NZ',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, 76 palavras, 4 tópicos de gramática, 2 histórias), no maori (te reo Māori) — língua polinésia (ramo austronésio) indígena da Nova Zelândia, cooficial com o inglês. Toda palavra foi conferida no Te Aka Māori Dictionary (maoridictionary.co.nz), a referência mais usada para o maori, com reforço da Wikipédia e do Wiktionary para números, pronomes e dias da semana — nenhuma palavra foi inventada. Da A2.1 até o C2 chega nas próximas atualizações, conforme mais vocabulário e gramática puderem ser conferidos.',
  },
  vocab: VOCAB_MI,
  units: UNITS_MI,
  etymology: ETYMOLOGY_MI,
  community: COMMUNITY_MI,
  scenarios: SCENARIOS_MI,
  stories: STORIES_MI,
  grammar: GRAMMAR_MI,
  journalPrompts: JOURNAL_PROMPTS_MI,
  shadowing: SHADOWING_MI,
  // macron (vogal longa) e os dígrafos “wh” e “ng” não têm equivalente direto no português — ver
  // gramatica.ts, tópico de pronúncia.
  specialChars: ['ā', 'ē', 'ī', 'ō', 'ū', 'wh', 'ng'],
  // o maori não marca gênero gramatical nos substantivos (sem artigos “o/a” que concordem em
  // gênero): o artigo indefinido é só “he”, o definido só “te”/“ngā”.
  genders: [],
  greeting: 'Kia ora!',
  sampleSentence: 'Kia ora! Kei te pēhea koe?',
  phrases: {
    hi: 'Kia ora!',
    // “kia ora” também funciona como “obrigado” em maori — confirmado no Te Aka Māori Dictionary.
    thanks: 'Kia ora!',
    letsStart: ['Haere tātou!', 'Vamos (todos nós)!'],
  },
  formalMarkers:
    '“Tēnā koe” é a saudação formal a uma só pessoa (“tēnā koutou” a três ou mais), usada em discursos e ocasiões cerimoniais, em vez do “kia ora” do dia a dia — confirmado no Te Aka Māori Dictionary.',
  cognateNote:
    'O maori é parente de outras línguas polinésias, como o taitiano e o havaiano (todas do ramo taitiano da família austronésia) — compartilha palavras e estrutura, mas nenhuma delas está ainda neste app para comparação direta. Com o português, o parentesco é nenhum: são famílias linguísticas completamente diferentes, sem herança comum. Um traço que chama atenção no vocabulário maori é a quantidade de palavras ligadas à vida comunitária e espiritual sem tradução direta de uma palavra só em português, como “mana” (prestígio, poder espiritual) e “marae” (o pátio de encontros, centro da vida social e ritual de um iwi).',
};
