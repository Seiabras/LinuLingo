import type { VocabRow } from '../types';

/**
 * Palavras das etimologias, dos falsos amigos e do dia a dia que não estão na trilha.
 * Fontes: Wiktionary, verbete de cada palavra — etimologia e classe gramatical conferidas:
 * መኪና (do italiano “macchina”), ጋዜጣ (do italiano “gazzetta”), ፖሊስ (do francês “police”),
 * ባንክ (internacionalismo), ካርታ (do italiano “carta”, mas sentido de “mapa”), ፖስታ (do italiano
 * “posta”), ሆስፒታል (do inglês “hospital”), አውሮፕላን, ገንዘብ, ብር, ገበያ, መጽሐፍ, መምህር, ተማሪ, ፍቅር (raiz
 * ፈ-ቀ-ረ), አያት, አክስት, ጫማ, ሳሙና (do árabe ṣābūna).
 */
export const ROWS: VocabRow[] = [
  ['መኪና', 'carro (do italiano “macchina”, máquina)', 'substantivo', 'Transporte', '🚗', 'ይህ መኪና ነው።', 'm'],
  ['ጋዜጣ', 'jornal (do italiano “gazzetta”)', 'substantivo', 'Essenciais', '📰', 'ይህ ጋዜጣ ነው።'],
  ['ፖሊስ', 'polícia (do francês “police”)', 'substantivo', 'Essenciais', '👮', 'ፖሊስ እዚያ ነው።'],
  ['ባንክ', 'banco (internacionalismo)', 'substantivo', 'Essenciais', '🏦', 'ባንክ ሩቅ ነው።'],
  ['ካርታ', 'mapa (do italiano “carta”, papel)', 'substantivo', 'Essenciais', '🗺️', 'ይህ ካርታ ነው።'],
  ['ፖስታ', 'envelope, correio (do italiano “posta”)', 'substantivo', 'Essenciais', '✉️', 'ይህ ፖስታ ነው።'],
  ['ሆስፒታል', 'hospital (do inglês “hospital”)', 'substantivo', 'Essenciais', '🏥', 'ሆስፒታል እዚያ ነው።', 'm'],
  ['አውሮፕላን', 'avião', 'substantivo', 'Transporte', '✈️', 'ይህ አውሮፕላን ነው።'],
  ['ገንዘብ', 'dinheiro', 'substantivo', 'Essenciais', '💰', 'ገንዘብ ፈለገ።'],
  ['ብር', 'birr (a moeda etíope); também “prata”', 'substantivo', 'Essenciais', '💵', 'ዐሥር ብር።'],
  ['ገበያ', 'mercado, feira', 'substantivo', 'Essenciais', '🛒', 'ገበያ ሩቅ ነው።'],
  ['መጽሐፍ', 'livro', 'substantivo', 'Escola', '📖', 'ይህ መጽሐፍ ነው።', 'm'],
  ['መምህር', 'professor, professora', 'substantivo', 'Profissões', '🧑‍🏫', 'እሱ መምህር ነው።'],
  ['ተማሪ', 'estudante', 'substantivo', 'Profissões', '🧑‍🎓', 'እኔ ተማሪ ነኝ።'],
  ['ፍቅር', 'amor (raiz ፈ-ቀ-ረ, f-ḳ-r)', 'substantivo', 'Essenciais', '❤️', 'ፍቅር ጥሩ ነው።'],
  ['አያት', 'avô (também usado para avó)', 'substantivo', 'Pessoas', '👴', 'ይህ አያት ነው።', 'm'],
  ['አክስት', 'tia', 'substantivo', 'Pessoas', '👩', 'ይህ አክስት ናት።', 'f'],
  ['ጫማ', 'sapato', 'substantivo', 'Roupas', '👞', 'ይህ ጫማ ነው።'],
  ['ሳሙና', 'sabonete, sabão (do árabe “ṣābūna”)', 'substantivo', 'Essenciais', '🧼', 'ሳሙና ፈለገ።'],
];
