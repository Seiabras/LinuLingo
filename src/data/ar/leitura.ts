import { leituraPorTabela } from '@/services/leitura-tabela';

/**
 * Leitura romanizada do árabe padrão moderno (campo `reading`), para quem ainda não lê o abjad.
 *
 * Padrão: a romanização ALA-LC do árabe (Library of Congress, tabela "Arabic"; a mesma que a
 * Wikipédia em inglês usa em "Sun and moon letters" e descreve em "Romanization of Arabic"):
 * th, kh, dh, sh, gh como dígrafos (sem os ṯ ḫ ḏ š ġ de outros sistemas, que não dizem nada a quem
 * lê português), vogais longas com mácron (ā ī ū), as enfáticas com ponto embaixo (ṣ ḍ ṭ ẓ ḥ), ʻ para
 * o ʿayn e ʼ para a hamza (que não se escreve no começo da palavra).
 *
 * Adaptações, todas para a leitura mostrar o que se PRONUNCIA:
 * - o artigo al- assimila antes das "letras solares" (الشمس ash-shams, não al-shams), como a própria
 *   Wikipédia escreve em "Sun and moon letters" ("the Nile is pronounced an-Nīl, not al-Nīl"); depois
 *   de wa- «e», o a- do artigo cai (والسكر wa-s-sukkar);
 * - cada palavra vai na forma de pausa, a do fim da frase e a do árabe falado: sem as terminações de
 *   caso (-u, -a, -i, -un; a ALA-LC também não as escreve nos substantivos) — por isso حالك «ḥāluk»
 *   serve para homem e mulher (ḥāluka / ḥāluki);
 * - ة no fim sai «a» (qahwa), não o «ah» da ALA-LC, porque o h não soa; ى sai «ā» (o «á» da ALA-LC é
 *   só uma marca de grafia, o som é o do ا); consoante dobrada sai dobrada (al-ʻarabiyya, não o
 *   «-īyah» da ALA-LC).
 *
 * As vogais de cada palavra vêm do Wikcionário em inglês (en.wiktionary.org, cabeçalho vocalizado do
 * verbete, conferido em 04/10/2026 — ex.: كَلْب, قَهْوَة, مِخَدَّة, أَرُزّ, قِطّ); as formas flexionadas
 * (com artigo, «meu», «teu», plural, verbo no presente) foram montadas a partir desses verbetes pelas
 * regras da gramática do pacote (gramatica.ts). Palavra que não está aqui deixa a frase sem leitura.
 */

/** Valor de cada letra sozinha (ALA-LC); hamza e ʿayn ficam sem: não há letra nossa para eles. */
const LETRAS: Record<string, string> = {
  ا: 'ā', ب: 'b', ت: 't', ث: 'th', ج: 'j', ح: 'ḥ', خ: 'kh', د: 'd', ذ: 'dh', ر: 'r', ز: 'z', س: 's',
  ش: 'sh', ص: 'ṣ', ض: 'ḍ', ط: 'ṭ', ظ: 'ẓ', ع: '', غ: 'gh', ف: 'f', ق: 'q', ك: 'k', ل: 'l', م: 'm',
  ن: 'n', ه: 'h', و: 'w', ي: 'y', ى: 'ā', ة: 'a', ء: '', أ: '', إ: '', آ: 'ā', ؤ: '', ئ: '',
};

const PALAVRAS: Record<string, string> = {
  // ── expressões ──
  سلام: 'salām', صباح: 'ṣabāḥ', الخير: 'al-khayr', النور: 'an-nūr', مع: 'maʻa', السلامة: 'as-salāma',
  شكرا: 'shukran', فضلك: 'faḍlik', كيف: 'kayfa', حالك: 'ḥāluk', إن: 'in', شاء: 'shāʼa', وشاء: 'wa-shāʼa',
  الله: 'Allāh', لو: 'law', نعم: 'naʻam', لا: 'lā', و: 'wa', أين: 'ayna', هل: 'hal', يا: 'yā', أو: 'aw',
  في: 'fī', ما: 'mā', وما: 'wa-mā',
  // من é «min» (de) — e «man» (quem) só na pergunta «من يريد…؟»
  من: 'min', ومن: 'wa-min', 'من يريد': 'man yurīd',
  // أم é «umm» (mãe) — e «am» (ou, nas perguntas de escolha)
  'أم قهوة': 'am qahwa', 'أم ماء': 'am māʼ', 'أم صغير': 'am ṣaghīr',
  // ── pessoas ──
  أنا: 'anā', وأنا: 'wa-anā', 'أنتَ': 'anta', 'وأنتَ': 'wa-anta', 'أنتِ': 'anti', أنتما: 'antumā',
  هو: 'huwa', هي: 'hiya', اسم: 'ism', اسمي: 'ismī', اسمك: 'ismuk', أب: 'ab', أبي: 'abī', أم: 'umm',
  أمي: 'ummī', وأمي: 'wa-ummī', أخ: 'akh', أخت: 'ukht', وأخت: 'wa-ukht', أخوان: 'akhawān',
  إخوة: 'ikhwa', أصدقاء: 'aṣdiqāʼ', العائلة: 'al-ʻāʼila', عند: 'ʻinda', عندي: 'ʻindī', وعندي: 'wa-ʻindī',
  عندك: 'ʻindak',
  // nomes próprios (a grafia árabe de cada um, lida pela mesma tabela)
  أحمد: 'Aḥmad', وأحمد: 'wa-Aḥmad', سارة: 'Sāra', وسارة: 'wa-Sāra', برونو: 'Brūnū', كوريتيبا: 'Kūrītībā',
  لينو: 'Līnū', البرازيل: 'al-Barāzīl', العربية: 'al-ʻarabiyya', 'اَلْفُصْحَى': 'al-fuṣḥā',
  // ── natureza, dias ──
  شمس: 'shams', الشمس: 'ash-shams', قمر: 'qamar', القمر: 'al-qamar', يوم: 'yawm', اليوم: 'al-yawm',
  الأحد: 'al-aḥad', ليل: 'layl', الليل: 'al-layl', نهار: 'nahār', والنهار: 'wa-n-nahār',
  // ── animais ──
  كلب: 'kalb', الكلب: 'al-kalb', قط: 'qiṭṭ', القط: 'al-qiṭṭ', قطة: 'qiṭṭa', قطتي: 'qiṭṭatī',
  طائر: 'ṭāʼir', الطائر: 'aṭ-ṭāʼir', سمك: 'samak',
  // ── comida ──
  ماء: 'māʼ', خبز: 'khubz', قهوة: 'qahwa', وقهوة: 'wa-qahwa', القهوة: 'al-qahwa', حليب: 'ḥalīb',
  الحليب: 'al-ḥalīb', أرز: 'aruzz', سكر: 'sukkar', السكر: 'as-sukkar', والسكر: 'wa-s-sukkar',
  المقهى: 'al-maqhā',
  // ── verbos (o lema no passado, «ele…»; o presente na forma de pausa) ──
  أراد: 'arāda', أريد: 'urīd', وأريد: 'wa-urīd', يريد: 'yurīd', تكلم: 'takallama', يتكلم: 'yatakallam',
  ذهب: 'dhahaba', يذهب: 'yadhhab', أكل: 'akala', يأكل: 'yaʼkul', شرب: 'shariba', يشرب: 'yashrab',
  // ── corpo ──
  رأس: 'raʼs', رأسي: 'raʼsī', يد: 'yad', يدي: 'yadī', عين: 'ʻayn', عيني: 'ʻaynī', عينان: 'ʻaynān',
  عينين: 'ʻaynayn', قدم: 'qadam', قدمي: 'qadamī', خد: 'khadd', خدي: 'khaddī', المخدة: 'al-mikhadda',
  // ── casa ──
  بيت: 'bayt', بيتي: 'baytī', بيتك: 'baytuk', البيت: 'al-bayt', والبيت: 'wa-l-bayt', باب: 'bāb',
  الباب: 'al-bāb', كرسي: 'kursī', الكرسي: 'al-kursī', كتاب: 'kitāb',
  // ── números ──
  واحد: 'wāḥid', اثنان: 'ithnān', ثلاثة: 'thalātha', أربعة: 'arbaʻa', خمسة: 'khamsa', ستة: 'sitta',
  سبعة: 'sabʻa', ثمانية: 'thamāniya', تسعة: 'tisʻa', عشرة: 'ʻashara',
  // ── cores e tamanho ──
  أسود: 'aswad', سوداء: 'sawdāʼ', أبيض: 'abyaḍ', بيضاء: 'bayḍāʼ', أحمر: 'aḥmar', حمراء: 'ḥamrāʼ',
  أزرق: 'azraq', زرقاء: 'zarqāʼ', أخضر: 'akhḍar', خضراء: 'khaḍrāʼ', كبير: 'kabīr', كبيرة: 'kabīra',
  صغير: 'ṣaghīr', صغيرة: 'ṣaghīra',
  // ── títulos das lições ──
  الخطوات: 'al-khuṭuwāt', الأولى: 'al-ūlā', اختبار: 'ikhtibār',
  // ── explicações de gramática: o artigo sozinho e as vogais breves sobre o ب ──
  ال: 'al-', 'بَ': 'ba', 'بِ': 'bi', 'بُ': 'bu', 'بْ': 'b', 'َ': 'a', 'ِ': 'i', 'ُ': 'u', 'ْ': '',
};

export const LEITURA_AR = leituraPorTabela({
  letras: LETRAS,
  palavras: PALAVRAS,
  // letras árabes e os sinais de vogal (harakat), que contam como parte da palavra
  letrasDaEscrita: 'ء-غف-ْٰ',
  opcionais: /[ً-ْٰ]/g,
});
