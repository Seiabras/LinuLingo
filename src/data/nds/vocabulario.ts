import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do baixo-alemão (Plattdüütsch) na grafia Sass'sche Schrievwies (de Johannes Sass,
 * a mais usada hoje), no Nordniedersächsisch (norte da Baixa Saxônia/variedade mais difundida).
 * Palavras conferidas por busca (Omniglot, Wikivoyage, Wiktionary, plattmakers.de). Idioma
 * incompleto: por enquanto só o suficiente para o nível A1 (unidades 1 e 2) — ver o campo
 * `incomplete` do pacote.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['Moin', 'oi, olá (vale o dia todo, não só de manhã)', 'interjeição', 'Expressões', '👋', 'Moin! Wo geiht’t?'],
  ['Goden Morgen', 'bom dia', 'interjeição', 'Expressões', '🌅', 'Goden Morgen, Mudder!'],
  ['Goden Dag', 'boa tarde', 'interjeição', 'Expressões', '🌇', 'Goden Dag! Wo geiht’t?'],
  ['Goden Avend', 'boa noite (ao chegar)', 'interjeição', 'Expressões', '🌙', 'Goden Avend, all tosamen!'],
  ['Adjüüs', 'tchau, até logo', 'interjeição', 'Expressões', '👋', 'Adjüüs un bit morgen!'],
  ['Dankeschöön', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Dankeschöön ok!'],
  ['Bidd', 'por favor', 'interjeição', 'Expressões', '🙏', 'Een Koffee, bidd.'],
  ['Dat deit mi leed', 'desculpe, sinto muito', 'interjeição', 'Expressões', '🙏', 'Dat deit mi leed!'],
  ['Wo geiht’t?', 'como vai?', 'expressão', 'Expressões', '🙂', 'Moin, Anna! Wo geiht’t?'],
  // ── Essenciais ──
  ['Ja', 'sim', 'advérbio', 'Essenciais', '👍', 'Ja, bidd.'],
  ['Nee', 'não', 'advérbio', 'Essenciais', '👎', 'Nee, dankeschöön.'],
  ['un', 'e', 'conjunção', 'Essenciais', null, 'Brood un Kees.'],
  ['oder', 'ou', 'conjunção', 'Essenciais', null, 'Koffee oder Tee?'],
  ['bannig', 'muito', 'advérbio', 'Essenciais', null, 'Dankeschöön bannig!'],
  ['ook', 'também', 'advérbio', 'Essenciais', null, 'Ik snack ook Platt.'],
  ['good', 'bom, bem', 'advérbio', 'Essenciais', '👌', 'Mi geiht dat good, dankeschöön.'],
  ['wat', 'o que, que', 'pronome', 'Essenciais', '❓', 'Wat is dat?'],
  ['woneem', 'onde', 'advérbio', 'Essenciais', '❓', 'Woneem wahnst du?'],
  ['woans', 'como', 'advérbio', 'Essenciais', '❓', 'Woans heetst du?'],
  ['wokeen', 'quem', 'pronome', 'Essenciais', '❓', 'Wokeen is dat?'],
  ['Stadt', 'cidade', 'substantivo', 'Essenciais', '🏙️', 'Hamborg is een groot Stadt.', 'f'],
  ['Huus', 'casa', 'substantivo', 'Casa', '🏠', 'Mien Huus is lütt.', 'n'],
  ['Hund', 'cachorro', 'substantivo', 'Animais', '🐕', 'De Hund slöppt.', 'm'],
  ['Katt', 'gato', 'substantivo', 'Animais', '🐈', 'De Katt is swart.', 'f'],
  ['groot', 'grande', 'adjetivo', 'Descrições', '📏', 'De Familie is groot.'],
  ['lütt', 'pequeno', 'adjetivo', 'Descrições', '📏', 'De Katt is lütt.'],
  // ── Pessoas ──
  ['ik', 'eu', 'pronome', 'Pessoas', '🙋', 'Ik bün Anna.'],
  ['du', 'tu, você', 'pronome', 'Pessoas', '🫵', 'Un du? Woans heetst du?'],
  ['he', 'ele', 'pronome', 'Pessoas', '👨', 'He is ut Hamborg.'],
  ['se', 'ela', 'pronome', 'Pessoas', '👩', 'Se is ut Bremen.'],
  ['wi', 'nós', 'pronome', 'Pessoas', '🙌', 'Wi snackt Platt.'],
  ['ji', 'vós, vocês', 'pronome', 'Pessoas', '🫵', 'Wo geiht’t ji?'],
  ['Naam', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Mien Naam is Linu.', 'm'],
  ['Fründ', 'amigo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'He is mien Fründ.', 'm'],
  // ── Verbos-chave ──
  ['wesen', 'ser, estar (ik bün, du büst, he is)', 'verbo', 'Verbos-chave', '🧑', 'Ik bün ut São Paulo.'],
  ['hebben', 'ter (ik heff, du hest, he hett)', 'verbo', 'Verbos-chave', '🤲', 'Ik heff een Broder.'],
  ['heten', 'chamar-se (ik heet, du heetst)', 'verbo', 'Verbos-chave', '🏷️', 'Ik heet Anna.'],
  ['snacken', 'falar (ik snack)', 'verbo', 'Verbos-chave', '🗣️', 'Ik snack een beten Platt.'],
  ['wahnen', 'morar (ik wahn)', 'verbo', 'Verbos-chave', '🏠', 'Ik wahn in Hamborg.'],
  ['gahn', 'ir (ik gah)', 'verbo', 'Verbos-chave', '🚶', 'Ik gah na Huus.'],
  ['eten', 'comer (ik eet)', 'verbo', 'Verbos-chave', '🍽️', 'Ik eet Brood mit Kees.'],
  ['drinken', 'beber (ik drink)', 'verbo', 'Verbos-chave', '🥤', 'Ik drink Water.'],
  ['will', 'querer (ik will, infinitivo willen)', 'verbo', 'Verbos-chave', '💭', 'Ik will Platt lehren.'],
  ['weten', 'saber (ik weet)', 'verbo', 'Verbos-chave', '🧠', 'Ik weet dat nich.'],
  ['lehren', 'aprender, ensinar (ik lehr)', 'verbo', 'Verbos-chave', '📚', 'Wi lehrt Plattdüütsch.'],
  // ── Pessoas (família) ──
  ['Familie', 'família', 'substantivo', 'Pessoas', '👪', 'Mien Familie is groot.', 'f'],
  ['Moder', 'mãe', 'substantivo', 'Pessoas', '👩', 'Mien Moder heet Rosa.', 'f'],
  ['Vader', 'pai', 'substantivo', 'Pessoas', '👨', 'Mien Vader is ut Bremen.', 'm'],
  ['Broder', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Ik heff een Broder.', 'm'],
  ['Swester', 'irmã', 'substantivo', 'Pessoas', '🧑', 'Ik heff een Swester.', 'f'],
  ['Söhn', 'filho', 'substantivo', 'Pessoas', '🧒', 'Ehr Söhn is lütt.', 'm'],
  ['Dochter', 'filha', 'substantivo', 'Pessoas', '🧒', 'Sien Dochter heet Lina.', 'f'],
  // ── Alimentação ──
  ['Water', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Een Glas Water, bidd.', 'n'],
  ['Brood', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Dat Brood is frisch.', 'n'],
  ['Melk', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'De Melk is witt.', 'f'],
  ['Kees', 'queijo', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'Ik eet geern Kees.', 'm'],
  ['Koffee', 'café', 'substantivo', 'Alimentação e Restaurantes', '☕', 'Een Koffee, bidd.', 'm'],
  ['Wien', 'vinho', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'Se drinkt Wien.', 'm'],
  // ── Números ──
  ['een', 'um', 'numeral', 'Números', '1️⃣', 'Een Koffee, bidd.'],
  ['twee', 'dois', 'numeral', 'Números', '2️⃣', 'Ik heff twee Bröder.'],
  ['dree', 'três', 'numeral', 'Números', '3️⃣', 'Dree Koffees, bidd.'],
  ['veer', 'quatro', 'numeral', 'Números', '4️⃣', 'De Katt hett veer Been.'],
  ['fief', 'cinco', 'numeral', 'Números', '5️⃣', 'Fief Daag.'],
  ['söss', 'seis', 'numeral', 'Números', '6️⃣', 'Söss Johr.'],
  ['söven', 'sete', 'numeral', 'Números', '7️⃣', 'De Week hett söven Daag.'],
  ['acht', 'oito', 'numeral', 'Números', '8️⃣', 'Acht Uhr.'],
  ['negen', 'nove', 'numeral', 'Números', '9️⃣', 'Negen Johr.'],
  ['teihn', 'dez', 'numeral', 'Números', '🔟', 'Teihn Minuten.'],
  // ── Tempo ──
  ['vundaag', 'hoje', 'advérbio', 'Tempo', '📅', 'Vundaag is Maandag.'],
  ['morgen', 'amanhã', 'advérbio', 'Tempo', '📅', 'Bit morgen!'],
  ['güstern', 'ontem', 'advérbio', 'Tempo', '📅', 'Güstern, vundaag un morgen.'],
  ['Maandag', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'Vundaag is Maandag.', 'm'],
  ['Dingsdag', 'terça-feira', 'substantivo', 'Tempo', '📅', 'Vundaag is Dingsdag.', 'm'],
  ['Middeweek', 'quarta-feira', 'substantivo', 'Tempo', '📅', 'Vundaag is Middeweek.', 'f'],
  ['Dünnersdag', 'quinta-feira', 'substantivo', 'Tempo', '📅', 'Vundaag is Dünnersdag.', 'm'],
  ['Freedag', 'sexta-feira', 'substantivo', 'Tempo', '📅', 'Vundaag is Freedag.', 'm'],
  ['Saterdag', 'sábado', 'substantivo', 'Tempo', '📅', 'Vundaag is Saterdag.', 'm'],
  ['Sünndag', 'domingo', 'substantivo', 'Tempo', '📅', 'Vundaag is Sünndag.', 'm'],
  // ── Cores ──
  ['root', 'vermelho', 'adjetivo', 'Cores', '🔴', 'De Wien is root.'],
  ['blau', 'azul', 'adjetivo', 'Cores', '🔵', 'De Heven is blau.'],
  ['gröön', 'verde', 'adjetivo', 'Cores', '🟢', 'Dat Gras is gröön.'],
  ['witt', 'branco', 'adjetivo', 'Cores', '⚪', 'De Melk is witt.'],
  ['swart', 'preto', 'adjetivo', 'Cores', '⚫', 'De Katt is swart.'],
];

export const VOCAB_NDS = buildVocab('nds', ROWS);
