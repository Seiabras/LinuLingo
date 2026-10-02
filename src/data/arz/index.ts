import type { LanguagePack } from '../types';
import { VOCAB_ARZ } from './vocabulario';
import { UNITS_ARZ } from './curriculo';
import { GRAMMAR_ARZ } from './gramatica';
import { STORIES_ARZ } from './historias';
import { COMMUNITY_ARZ, ETYMOLOGY_ARZ, JOURNAL_PROMPTS_ARZ, SCENARIOS_ARZ, SHADOWING_ARZ } from './extras';

/**
 * O abjad árabe (28 letras), na ordem alfabética tradicional, mas organizado em fileiras na ORDEM
 * EM QUE O ÁRABE É LIDO — da direita pra esquerda. O componente de teclado (`LetterPad`, em
 * `src/components/ui.tsx`) desenha cada fileira num `flex-row` comum (esquerda pra direita, porque
 * o resto do app continua em português — ver `src/services/direction.ts`), então cada fileira foi
 * invertida aqui: o primeiro som do alfabeto (ا) fica na ponta DIREITA da tela, e o som seguinte
 * sempre uma posição à esquerda dele — exatamente como ficaria se a fileira fosse escrita à mão da
 * direita pra esquerda.
 */
const ALPHABET_ROWS_RTL: string[][] = [
  ['ر', 'ذ', 'د', 'خ', 'ح', 'ج', 'ث', 'ت', 'ب', 'ا'],
  ['غ', 'ع', 'ظ', 'ط', 'ض', 'ص', 'ش', 'س', 'ز'],
  ['ي', 'و', 'ه', 'ن', 'م', 'ل', 'ك', 'ق', 'ف'],
];

export const ARABE_EGIPCIO: LanguagePack = {
  code: 'arz',
  name: 'Árabe egípcio',
  nativeName: 'مصري',
  flag: '🇪🇬',
  lineage: {
    family: 'Afro-asiático',
    // mesma árvore genealógica do árabe padrão (código «ar»): são «primos», não a mesma língua com
    // nomes diferentes — o ISO 639-3 dá códigos separados (arz × ar) por falta de inteligibilidade
    // mútua na fala, do mesmo jeito que faz com o guarani ñandeva/paraguaio ou o grego pôntico/padrão
    branches: ['Semítico', 'Semítico ocidental', 'Semítico central', 'Árabe'],
    region: 'Egito (variedade do Cairo e do delta do Nilo)',
    writing: 'Abjad árabe (a mesma escrita do árabe padrão)',
  },
  speechLocale: 'ar-EG',
  available: true,
  direction: 'rtl',
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, 65 palavras, 4 tópicos de gramática, 2 histórias), na variedade do Cairo. Da A2.1 até o C2 chega nas próximas atualizações. Este pacote também ainda não tem romanização (uma leitura em letras latinas ao lado da escrita árabe) — é um trabalho futuro à parte, do mesmo jeito que o pacote de mandarim ainda está sem pinyin.',
  },
  vocab: VOCAB_ARZ,
  units: UNITS_ARZ,
  etymology: ETYMOLOGY_ARZ,
  community: COMMUNITY_ARZ,
  scenarios: SCENARIOS_ARZ,
  stories: STORIES_ARZ,
  grammar: GRAMMAR_ARZ,
  journalPrompts: JOURNAL_PROMPTS_ARZ,
  shadowing: SHADOWING_ARZ,
  specialChars: [],
  keyboardRows: ALPHABET_ROWS_RTL,
  // masculino e feminino, sem neutro
  genders: ['m', 'f'],
  greeting: 'إزيك',
  sampleSentence: 'إزيك؟ أنا كويس، شكرا!',
  phrases: { hi: 'إزيك!', thanks: 'شكرا!', letsStart: ['أيوه!', 'Vamos! (lit. “sim!”)'] },
  formalMarkers: 'O egípcio tem formas de tratamento mais respeitosas que este pacote ainda não documenta (ver nota em “incomplete”).',
  cognateNote:
    'O árabe é afro-asiático, bem diferente do português (indo-europeu): não existe parentesco direto, e quase nenhuma palavra é reconhecível de cara. O português tem, sim, palavras de origem árabe antiga (“almofada”, “azeite”…), mas herdadas sobretudo do árabe falado na Península Ibérica na Idade Média — não do árabe egípcio, que é o objeto deste curso. Aqui, em vez de parentesco com o português, cada palavra mostra a origem dentro do próprio árabe e, quando é o caso, o que veio do copta, a língua que o árabe foi substituindo no Egito.',
};
