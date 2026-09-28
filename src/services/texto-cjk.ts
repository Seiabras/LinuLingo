/**
 * Conferência dos textos em japonês e coreano (usada pelos testes de conteúdo e por
 * scripts/checar-conteudo-cjk.ts): números por extenso (a leitura e a IPA dependem disso), nada de
 * letra latina no meio da frase, pontuação de cada escrita e nada da escrita do outro idioma.
 */

const KANA = /[ぁ-ゖァ-ヺ]/;
const HALF_KANA = /[｡-ﾟ]/;
const KANJI = /[㐀-䶿一-鿿々〆]/;
const HANGUL = /[가-힣ᄀ-ᇿㄱ-ㆎ]/;
const LATIN = /[A-Za-zÀ-ÿ]/;

export function cjkTextProblems(lang: string, text: string): string[] {
  const out: string[] = [];
  const t = text.normalize('NFC');
  if (lang === 'ja') {
    if (!KANA.test(t) && !KANJI.test(t)) return out;
    if (/[0-9０-９]/.test(t)) out.push(`«${t}»: número em algarismos (escreva 三時, 二十歳: a leitura sai do kanji)`);
    if (HALF_KANA.test(t)) out.push(`«${t}»: katakana de meia largura`);
    if (LATIN.test(t.replace(/[「」]/g, ''))) out.push(`«${t}»: letra latina no meio do japonês`);
    if (HANGUL.test(t)) out.push(`«${t}»: hangul no japonês`);
    if (/[a-zA-Zぁ-んァ-ン一-龯][.,!?]|[.,!?][ぁ-んァ-ン一-龯]/.test(t)) out.push(`«${t}»: pontuação ocidental (use 。、！？)`);
    if (/\s{2,}|　/.test(t)) out.push(`«${t}»: espaço duplo ou de largura cheia`);
  } else if (lang === 'ko') {
    if (!HANGUL.test(t)) return out;
    if (/[0-9０-９]/.test(t)) out.push(`«${t}»: número em algarismos (escreva 세 시, 스무 살: a pronúncia sai do hangul)`);
    if (KANA.test(t)) out.push(`«${t}»: kana no coreano`);
    if (KANJI.test(t)) out.push(`«${t}»: hanja no coreano (escreva em hangul; o hanja pode ir na explicação em português)`);
    if (LATIN.test(t)) out.push(`«${t}»: letra latina no meio do coreano`);
    if (/[。、！？]/.test(t)) out.push(`«${t}»: pontuação japonesa/chinesa no coreano (use . , ? !)`);
    if (/[ᄀ-ᇿㄱ-ㆎ]/.test(t) && !/^[ㄱ-ㆎ\s·,]+$/.test(t)) out.push(`«${t}»: jamo solto no meio do texto`);
  }
  return out;
}
