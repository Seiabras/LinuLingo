import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do copta — dialeto SAÍDICO (ⲥⲁϩⲓⲇⲓⲕⲟⲛ), a variedade mais estudada e com mais verbetes
 * no Wiktionary (o Bohaírico, de Alexandria e do delta do Nilo, é a forma usada hoje na liturgia da
 * Igreja Ortodoxa Copta, mas o saídico é "generally the dialect studied by learners", conforme a
 * Wikipédia em inglês, "Coptic language") — por isso ESTE pacote ensina o saídico, com uma nota em
 * cada tópico de gramática sobre a forma bohaírica quando ela é diferente e confirmada. Todas as
 * palavras abaixo foram conferidas uma a uma no Wiktionary (en.wiktionary.org, seção "Coptic"
 * dedicada, com etimologia do demótico/egípcio antigo e formas por dialeto) — ver fontes completas
 * no cabeçalho de `gramatica.ts` e `extras.ts`. Idioma incompleto: por enquanto só o suficiente para
 * o nível A1 (unidades 1 e 2) — ver o campo `incomplete` do pacote.
 *
 * Lacunas honestas (não inventadas): não há, em nenhuma fonte conferida nesta rodada, uma palavra
 * simples de "por favor" em copta, nem cores básicas (branco/preto/vermelho) com seção "Coptic"
 * própria e inequívoca, nem um numeral "cinco" claramente saídico (a única forma achada, ϯⲟⲩ, está
 * rotulada como faiúmica no Wiktionary), nem uma palavra interrogativa confirmada para "que/qual".
 * Por isso o vocabulário para em "quatro", não ensina cores/"por favor", e nenhuma frase deste
 * pacote é uma pergunta. "Obrigado" (ϣⲉⲡϩⲙⲟⲧ, literalmente "receber graça") É confirmado — mas só em
 * BOHAÍRICO, com tabela de conjugação completa no Wiktionary (o saídico não tem seção própria pra
 * essa palavra); usado aqui como única excepção ao saídico, igual uma importação pontual.
 *
 * Sobre as frases de exemplo: a oração nominal/identificacional do copta não tem verbo "ser" — usa
 * o pronome demonstrativo ⲡⲉ/ⲧⲉ (concordando em gênero com o PREDICADO) encaixado ENTRE o sujeito
 * e o predicado: "ⲁⲛⲟⲕ ⲡⲉ ⲡϣⲏⲣⲉ ⲙⲡⲛⲟⲩⲧⲉ" ("eu ⲡⲉ o-filho de-deus" = "eu sou o filho de deus"), um
 * exemplo acadêmico citado por Boud'hors/Shisha-Halevy e reproduzido num estudo da Universidade de
 * Leiden sobre sentenças nominais coptas (ver gramatica.ts). Todas as frases abaixo seguem essa MESMA
 * ordem (sujeito – ⲡⲉ/ⲧⲉ – predicado), nunca ⲡⲉ no final. Os verbos transitivos (ⲟⲩⲱⲙ "comer", ⲥⲱ
 * "beber", ⲙⲉ "amar") marcam o objeto com a preposição ⲛ̄- (que assimila para ⲙ̄- antes de ⲡ/ⲃ/ⲙ),
 * confirmada em geral para o saídico (differential object marking, ver gramatica.ts); "ⲛⲁⲩ" (ver)
 * aparece só sem objeto, porque nenhuma fonte conferida confirmou qual preposição ele pede. Os
 * numerais seguem a ÚNICA ordem substantivo+numeral atestada diretamente (ⲣⲱⲙⲉ ⲥⲛⲁⲩ, "duas
 * pessoas", do próprio verbete do Wiktionary de ⲣⲱⲙⲉ) — nunca numeral antes do substantivo.
 */
export const ROWS: VocabRow[] = [
  // Expressões
  ['ⲭⲉⲣⲉ', 'oi', 'interjeição', 'Expressões', '👋', 'Ⲭⲉⲣⲉ! Ⲡⲁⲣⲁⲛ ⲡⲉ Ⲗⲓⲛⲟⲩ.'],
  ['ϣⲉⲡϩⲙⲟⲧ', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Ϣⲉⲡϩⲙⲟⲧ!'],
  // Pessoas: pronome
  ['ⲁⲛⲟⲕ', 'eu', 'pronome', 'Pessoas', '🙋', 'Ⲁⲛⲟⲕ ⲡⲉ Ⲗⲓⲛⲟⲩ.'],
  // Pessoas: família
  ['ⲉⲓⲱⲧ', 'pai', 'substantivo', 'Pessoas', '👨', 'Ⲡⲁⲉⲓⲱⲧ ⲡⲉ ⲟⲩⲛⲟϭ.', 'm'],
  ['ⲙⲁⲁⲩ', 'mãe', 'substantivo', 'Pessoas', '👩', 'Ⲧⲁⲙⲁⲁⲩ ⲧⲉ ⲟⲩⲥϩⲓⲙⲉ.', 'f'],
  ['ⲥⲟⲛ', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Ⲡⲁⲥⲟⲛ ⲡⲉ ⲟⲩⲣⲱⲙⲉ.', 'm'],
  ['ⲥⲱⲛⲉ', 'irmã', 'substantivo', 'Pessoas', '🧑', 'Ⲧⲁⲥⲱⲛⲉ ⲧⲉ ⲟⲩⲥϩⲓⲙⲉ.', 'f'],
  ['ϣⲏⲣⲉ', 'filho', 'substantivo', 'Pessoas', '🧒', 'Ⲡⲁϣⲏⲣⲉ ⲡⲉ ⲟⲩⲕⲟⲩⲓ.', 'm'],
  ['ⲣⲱⲙⲉ', 'pessoa', 'substantivo', 'Pessoas', '🧑', 'Ⲁⲛⲟⲕ ⲡⲉ ⲟⲩⲣⲱⲙⲉ.', 'm'],
  ['ⲥϩⲓⲙⲉ', 'mulher', 'substantivo', 'Pessoas', '👩', 'Ⲧⲁⲙⲁⲁⲩ ⲧⲉ ⲟⲩⲥϩⲓⲙⲉ.', 'f'],
  // Essenciais
  ['ⲣⲁⲛ', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Ⲡⲉⲕⲣⲁⲛ ⲡⲉ Ⲡⲉⲧⲣⲟⲥ.', 'm'],
  ['ⲛⲟⲩⲧⲉ', 'deus', 'substantivo', 'Essenciais', '✝️', 'Ⲡⲛⲟⲩⲧⲉ ⲡⲉ ⲟⲩⲛⲟϭ.', 'm'],
  ['ⲛⲟϭ', 'grande', 'adjetivo', 'Essenciais', '📏', 'Ⲡⲁⲉⲓⲱⲧ ⲡⲉ ⲟⲩⲛⲟϭ.'],
  ['ⲕⲟⲩⲓ', 'pequeno', 'adjetivo', 'Essenciais', '📏', 'Ⲡⲁϣⲏⲣⲉ ⲡⲉ ⲟⲩⲕⲟⲩⲓ.'],
  // Casa e natureza
  ['ⲏⲓ', 'casa', 'substantivo', 'Essenciais', '🏠', 'Ⲡⲁⲏⲓ ⲡⲉ ⲟⲩⲕⲟⲩⲓ.', 'm'],
  ['ⲙⲟⲟⲩ', 'água', 'substantivo', 'Natureza', '💧', 'Ϯⲥⲱ ⲙⲙⲟⲟⲩ.', 'm'],
  ['ⲉⲓⲉⲣⲟ', 'rio', 'substantivo', 'Natureza', '🏞️', 'Ⲡⲓⲉⲣⲟ ⲡⲉ ⲟⲩⲛⲟϭ.', 'm'],
  ['ⲣⲏ', 'sol', 'substantivo', 'Natureza', '☀️', 'Ⲡⲣⲏ ⲡⲉ ⲟⲩⲛⲟϭ.', 'm'],
  // Alimentação
  ['ⲟⲉⲓⲕ', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Ϯⲟⲩⲱⲙ ⲙⲡⲟⲉⲓⲕ.', 'm'],
  ['ⲏⲣⲡ', 'vinho', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'Ϯⲥⲱ ⲙⲡⲏⲣⲡ.', 'm'],
  // Verbos-chave
  ['ⲙⲉ', 'amar', 'verbo', 'Verbos-chave', '❤️', 'Ϯⲙⲉ ⲙⲡⲁⲥⲟⲛ.'],
  ['ⲟⲩⲱⲙ', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'Ϯⲟⲩⲱⲙ ⲙⲡⲟⲉⲓⲕ.'],
  ['ⲥⲱ', 'beber', 'verbo', 'Verbos-chave', '🥤', 'Ϯⲥⲱ ⲙⲙⲟⲟⲩ.'],
  ['ⲛⲁⲩ', 'ver', 'verbo', 'Verbos-chave', '👀', 'Ϯⲛⲁⲩ.'],
  // Números
  ['ⲟⲩⲁ', 'um', 'numeral', 'Números', '1️⃣', 'Ⲣⲱⲙⲉ ⲟⲩⲁ.'],
  ['ⲥⲛⲁⲩ', 'dois', 'numeral', 'Números', '2️⃣', 'Ⲣⲱⲙⲉ ⲥⲛⲁⲩ.'],
  ['ϣⲟⲙⲛ̄ⲧ', 'três', 'numeral', 'Números', '3️⃣', 'Ⲣⲱⲙⲉ ϣⲟⲙⲛ̄ⲧ.'],
  ['ϥⲧⲟⲟⲩ', 'quatro', 'numeral', 'Números', '4️⃣', 'Ⲣⲱⲙⲉ ϥⲧⲟⲟⲩ.'],
];

export const VOCAB_COP = buildVocab('cop', ROWS);
