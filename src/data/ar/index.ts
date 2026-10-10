import type { LanguagePack } from '../types';
import { VOCAB_AR } from './vocabulario';
import { UNITS_AR } from './curriculo';
import { GRAMMAR_AR } from './gramatica';
import { STORIES_AR } from './historias';
import { COMMUNITY_AR, ETYMOLOGY_AR, JOURNAL_PROMPTS_AR, SCENARIOS_AR, SHADOWING_AR } from './extras';
import { LEITURA_AR } from './leitura';
import { ACCENTS_AR } from './sotaques';

/**
 * Árabe padrão moderno (al-fuṣḥá, اَلْفُصْحَى) — o registro escrito e formal comum a todo o mundo
 * árabe, não um dialeto falado específico (o árabe egípcio é um pacote à parte, `arz`). Primeiro
 * idioma de escrita da direita para a esquerda (RTL) deste app — ver `src/services/direction.ts`.
 * Fontes gerais: artigos “Modern Standard Arabic”, “Arabic”, “Arabic alphabet”, “Sun and moon
 * letters” e “Arabic grammar” da Wikipédia em inglês; verbetes individuais do Wikcionário em inglês
 * (citados palavra a palavra em vocabulario.ts e extras.ts).
 */
export const ARABE: LanguagePack = {
  code: 'ar',
  name: 'Árabe',
  nativeName: 'العربية',
  // 🇸🇦 Arábia Saudita: sede de Meca e Medina, berço do árabe clássico do Alcorão — a bandeira mais
  // usada como padrão para o árabe-padrão moderno, que, como o latim medieval, não é a língua do dia
  // a dia de um único país: é a norma escrita comum a mais de vinte países árabes (ver `incomplete`).
  flag: '🇸🇦',
  lineage: {
    family: 'Afro-asiático',
    branches: ['Semítico', 'Semítico ocidental', 'Semítico central'],
    region: 'Península Arábica (Ásia Ocidental), hoje também o norte da África',
    writing: 'Alfabeto árabe (abjad, da direita para a esquerda)',
  },
  speechLocale: 'ar-SA',
  available: true,
  direction: 'rtl',
  incomplete: {
    until: 'A2.2',
    note:
      'A1 e A2 completos por enquanto (unidades 1 a 4, ~107 palavras, 7 tópicos de gramática, 4 histórias), no árabe padrão moderno (al-fuṣḥá) — o registro escrito e formal comum a todo o mundo árabe, não um dialeto falado específico. Por enquanto: as vogais breves (harakat) não aparecem marcadas nas frases, como no árabe escrito do dia a dia (ver o tópico de gramática sobre o abjad) — e a leitura romanizada ainda cobre só as palavras do A1, deixando as novas do A2 sem leitura por enquanto. De B1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_AR,
  units: UNITS_AR,
  etymology: ETYMOLOGY_AR,
  community: COMMUNITY_AR,
  scenarios: SCENARIOS_AR,
  stories: STORIES_AR,
  accents: ACCENTS_AR,
  grammar: GRAMMAR_AR,
  journalPrompts: JOURNAL_PROMPTS_AR,
  shadowing: SHADOWING_AR,
  // leitura em letras latinas para quem ainda não lê o abjad árabe (ver src/data/ar/leitura.ts)
  reading: LEITURA_AR.reading,
  letterReading: LEITURA_AR.letterReading,
  specialChars: ['أ', 'إ', 'آ', 'ؤ', 'ئ', 'ء', 'ة', 'ى'],
  // Teclado árabe padrão (102 teclas), nas mesmas posições físicas do teclado QWERTY latino — não é
  // a ordem alfabética do abjad (ver gramatica.ts, tópico "ar-g1"), é a disposição real de digitação.
  keyboardRows: [
    ['ض', 'ص', 'ث', 'ق', 'ف', 'غ', 'ع', 'ه', 'خ', 'ح', 'ج', 'د'],
    ['ش', 'س', 'ي', 'ب', 'ل', 'ا', 'ت', 'ن', 'م', 'ك', 'ط'],
    ['ئ', 'ء', 'ؤ', 'ر', 'لا', 'ى', 'ة', 'و', 'ز', 'ظ'],
  ],
  // masculino e feminino, sem neutro
  genders: ['m', 'f'],
  greeting: 'سلام',
  sampleSentence: 'سلام! اسمي لينو. كيف حالك؟',
  // “إن شاء الله” (lit. “se Deus quiser”) é o que muita gente diz ao embarcar em algo nessa esperança
  // de que dê certo — o par cultural mais honesto que achamos para “vamos começar!”, sem inventar
  // uma palavra para “começar” que não foi conferida neste pacote.
  phrases: { hi: 'سلام!', thanks: 'شكرا!', letsStart: ['إن شاء الله!', 'Vamos começar!'] },
  formalMarkers:
    'o árabe padrão já é, por si só, o registro formal (é a norma da escrita e dos discursos); o que muda com a pessoa é o gênero de quem ouve — “أنتَ” (masculino) e “أنتِ” (feminino) — não um grau extra de formalidade como o “você”/“senhor” do português.',
  cognateNote:
    'O árabe é afro-asiático, de família bem diferente do português (indo-europeu): não há parentesco direto entre as palavras das duas línguas. Mas houve um contato histórico profundo e na direção contrária — foi o português que tomou emprestado do árabe, durante séculos, palavras como “açúcar”, “arroz”, “café” e “almofada” (ver a aba de etimologia): são essas pontes, e não um parentesco de família, que aparecem aqui.',
};
