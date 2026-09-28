/**
 * Correções das leituras do japonês, por cima do kuromoji (scripts/gerar-leituras-ja.ts): nomes
 * próprios, palavras que o dicionário IPADIC não conhece e leituras que ele erra no contexto.
 * Formato: grafia → «leitura» ou «leitura|pronúncia», em katakana (ー = vogal longa na pronúncia).
 */
export const CORRECOES_JA: Record<string, string> = {
  リヌ: 'リヌ',
};
