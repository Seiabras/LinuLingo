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
};
