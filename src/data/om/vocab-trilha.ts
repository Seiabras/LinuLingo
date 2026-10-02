import type { VocabRow } from '../types';

/**
 * Palavras das lições da trilha (vêm primeiro no vocabulário: são as mais úteis).
 * Oromo padrão, escrito em qubee (alfabeto latino oficial desde 1991).
 * Fontes: Omniglot (cumprimentos e agradecimentos), Wikivoyage Oromo phrasebook (confirmado no
 * wikitext bruto: eeyyee/lakki, saudações), Wiktionary (tabela de pronomes pessoais em "inni",
 * gênero e plural de abbaa/haadha/ilma/intala/obboleessa/obboleettii/bishaan/foon/aannan/buna/nyaata,
 * e os exemplos "Kun gaarii dha" / "Kun kan koo dha" usados como padrão para as frases com "dha").
 */
export const ROWS: VocabRow[] = [
  // ── Unidade 1, Lição 1: cumprimentos ──
  ['akkam', 'oi, como vai (lit. “como”)', 'interjeição', 'Expressões', '👋', 'Akkam! Maqaan koo Linu.'],
  ['baga nagaan dhufte', 'bem-vindo(a) (lit. “que tenha chegado em paz”)', 'expressão', 'Expressões', '🤗', 'Baga nagaan dhufte!'],
  ['galatoomi', 'obrigado (para uma pessoa)', 'interjeição', 'Expressões', '🙏', 'Galatoomi!'],
  ['galatoomaa', 'obrigado (para várias pessoas, ou respeito)', 'interjeição', 'Expressões', '🙏', 'Galatoomaa!'],
  ['maaloo', 'por favor', 'expressão', 'Expressões', '🙏', 'Bishaan, maaloo!'],
  ['nagaatti', 'até logo, tchau (lit. “na paz”)', 'expressão', 'Expressões', '👋', 'Nagaatti!'],
  // ── Unidade 1, Lição 2: pronomes, nome e o verbo "ser" (dha) ──
  ['ani', 'eu', 'pronome', 'Pessoas', '🙋', 'Ani diimaa dha.'],
  ['ati', 'tu, você', 'pronome', 'Pessoas', '🫵', 'Ati gaarii dha.'],
  ['inni', 'ele', 'pronome', 'Pessoas', '👨', 'Inni diimaa dha.', 'm'],
  ['isheen', 'ela', 'pronome', 'Pessoas', '👩', 'Isheen diimtuu dha.', 'f'],
  ['maqaa', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Maqaan kee eenyu?', 'm'],
  ['dha', 'é, sou, são (verbo “ser” grudado no fim da frase)', 'verbo', 'Essenciais', '✅', 'Kun gaarii dha.'],
  // ── Unidade 2, Lição 1: família ──
  ['abbaa', 'pai', 'substantivo', 'Pessoas', '👨', 'Kun abbaa koo dha.', 'm'],
  ['haadha', 'mãe', 'substantivo', 'Pessoas', '👩', 'Kun haadha koo dha.', 'f'],
  ['obboleessa', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Kun obboleessa koo dha.', 'm'],
  ['obboleettii', 'irmã', 'substantivo', 'Pessoas', '🧑', 'Kun obboleettii koo dha.', 'f'],
  ['ilma', 'filho', 'substantivo', 'Pessoas', '🧒', 'Kun ilma koo dha.', 'm'],
  ['intala', 'filha', 'substantivo', 'Pessoas', '🧒', 'Kun intala koo dha.', 'f'],
  // ── Unidade 2, Lição 2: comida e bebida ──
  ['bishaan', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Bishaan, maaloo!', 'm'],
  ['buna', 'café', 'substantivo', 'Alimentação e Restaurantes', '☕', 'Buna gaarii dha.'],
  ['aannan', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'Aannan, maaloo!'],
  ['nyaata', 'comida', 'substantivo', 'Alimentação e Restaurantes', '🍽️', 'Nyaata gaarii dha.'],
  ['foon', 'carne', 'substantivo', 'Alimentação e Restaurantes', '🍖', 'Foon gaarii dha.', 'm'],
];
