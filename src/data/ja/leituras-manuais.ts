/**
 * Correções das leituras do japonês, por cima do kuromoji (scripts/gerar-leituras-ja.ts): nomes
 * próprios, palavras que o dicionário IPADIC não conhece e leituras que ele erra no contexto.
 * Formato: grafia → «leitura» ou «leitura|pronúncia», em katakana (ー = vogal longa na pronúncia).
 */
export const CORRECOES_JA: Record<string, string> = {
  リヌ: 'リヌ',
  // o IPADIC lê 日本 como «ニッポン» em alguns contextos; a leitura comum é «にほん»
  日本: 'ニホン',
  日本人: 'ニホンジン',
  日本語: 'ニホンゴ',
  // leituras que o IPADIC erra no contexto dos textos do app
  何です: 'ナンデス',
  何ですか: 'ナンデスカ',
  行って: 'イッテ',
  四人: 'ヨニン',
  九時: 'クジ',
  八本: 'ハッポン',
  三羽: 'サンバ',
  十歳: 'ジュッサイ',
  十分: 'ジュップン',
  唐揚げ: 'カラアゲ',
  一人: 'ヒトリ',
  二人: 'フタリ',
  四時: 'ヨジ',
  二十分: 'ニジュップン',
  三十分: 'サンジュップン',
  四十分: 'ヨンジュップン',
  五十分: 'ゴジュップン',
  郡上八幡: 'グジョウハチマン',
  三線: 'サンシン',
};
