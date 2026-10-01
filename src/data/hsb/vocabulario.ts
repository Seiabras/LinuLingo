import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do alto-sorábio (hornjoserbšćina), língua eslava minoritária da Alta Lusácia
 * (leste da Alemanha, ao redor de Budyšin/Bautzen). Idioma incompleto: por enquanto só o
 * suficiente para o nível A1 (unidades 1 e 2) — ver o campo `incomplete` do pacote. Todas as
 * palavras foram conferidas por busca (Wiktionary, Glosbe, Omniglot), não inventadas; o alto-sorábio
 * preserva o número dual do protoeslavo (ver gramática), por isso "dwaj" (dois) tem forma própria,
 * diferente do plural comum.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['witaj', 'oi, olá (bem-vindo)', 'interjeição', 'Expressões', '👋', 'Witaj, Ana!'],
  ['dobry dźeń', 'bom dia; boa tarde', 'interjeição', 'Expressões', '🌅', 'Dobry dźeń! Kak so tebi dźe?'],
  ['dobre ranje', 'bom dia (de manhã cedo)', 'interjeição', 'Expressões', '🌄', 'Dobre ranje, mać!'],
  ['dobry wječor', 'boa noite (ao chegar)', 'interjeição', 'Expressões', '🌇', 'Dobry wječor a witaj!'],
  ['dobru nóc', 'boa noite (ao se despedir, ao dormir)', 'interjeição', 'Expressões', '🌙', 'Dobru nóc, nan!'],
  ['na zasowidźenje', 'até logo, tchau', 'interjeição', 'Expressões', '👋', 'Na zasowidźenje a dźakuju!'],
  ['dźakuju so', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Dźakuju so jara!'],
  ['prošu', 'por favor; de nada', 'interjeição', 'Expressões', '🙏', 'Kofej, prošu.'],
  ['wodaj', 'desculpe, com licença', 'interjeição', 'Expressões', '🙏', 'Wodaj, hdźe je dom?'],
  ['kak so tebi dźe?', 'como vai? (informal)', 'expressão', 'Expressões', '🙂', 'Witaj, Ana! Kak so tebi dźe?'],
  // ── Essenciais ──
  ['haj', 'sim', 'partícula', 'Essenciais', '👍', 'Haj, prošu.'],
  ['ně', 'não', 'partícula', 'Essenciais', '👎', 'Ně, dźakuju.'],
  ['a', 'e', 'conjunção', 'Essenciais', null, 'Chlěb a mloko.'],
  ['abo', 'ou', 'conjunção', 'Essenciais', null, 'Kofej abo čaj?'],
  ['jara', 'muito', 'advérbio', 'Essenciais', null, 'Dźakuju so jara!'],
  ['tež', 'também', 'advérbio', 'Essenciais', null, 'Ja tež rěču serbsce.'],
  ['dobre', 'bem', 'advérbio', 'Essenciais', '👌', 'Mi dźe dobre, dźakuju.'],
  ['što', 'o que', 'pronome', 'Essenciais', '❓', 'Što je to?'],
  ['hdźe', 'onde', 'advérbio', 'Essenciais', '❓', 'Hdźe bydliš?'],
  ['kak', 'como', 'advérbio', 'Essenciais', '❓', 'Kak ty rěkaš?'],
  // ── Casa ──
  ['dom', 'casa', 'substantivo', 'Casa', '🏠', 'Mój dom je mały.', 'm'],
  // ── Animais ──
  ['psyk', 'cachorro', 'substantivo', 'Animais', '🐕', 'Psyk spi.', 'm'],
  ['kóčka', 'gato', 'substantivo', 'Animais', '🐈', 'Kóčka je čorna.', 'f'],
  // ── Descrições ──
  ['dobry', 'bom (fem. dobra)', 'adjetivo', 'Descrições', '👍', 'Chlěb je dobry.'],
  ['wulki', 'grande', 'adjetivo', 'Descrições', '📏', 'Swójba je wulka.'],
  ['mały', 'pequeno', 'adjetivo', 'Descrições', '📏', 'Dom je mały.'],
  // ── Pessoas ──
  ['ja', 'eu', 'pronome', 'Pessoas', '🙋', 'Ja sym Ana.'],
  ['ty', 'tu, você', 'pronome', 'Pessoas', '🫵', 'A ty? Kak ty rěkaš?'],
  ['wón', 'ele', 'pronome', 'Pessoas', '👨', 'Wón je z Budyšina.'],
  ['wona', 'ela', 'pronome', 'Pessoas', '👩', 'Wona je z Chóśebuza.'],
  ['my', 'nós', 'pronome', 'Pessoas', '🙌', 'My rěčimy serbsce.'],
  ['wy', 'vocês; o senhor, a senhora (formal)', 'pronome', 'Pessoas', '🫵', 'Wy sće jara lubi.'],
  ['woni', 'eles, elas', 'pronome', 'Pessoas', '👥', 'Woni bydla w Budyšinje.'],
  ['mjeno', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Moje mjeno je Linu.', 'n'],
  ['přećel', 'amigo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Wón je mój přećel.', 'm'],
  // ── Pessoas (família) ──
  ['swójba', 'família', 'substantivo', 'Pessoas', '👪', 'Moja swójba je wulka.', 'f'],
  ['mać', 'mãe', 'substantivo', 'Pessoas', '👩', 'Moja mać rěka Hanka.', 'f'],
  ['nan', 'pai', 'substantivo', 'Pessoas', '👨', 'Mój nan je z Budyšina.', 'm'],
  ['bratr', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Mam jedneho bratra.', 'm'],
  ['sotra', 'irmã', 'substantivo', 'Pessoas', '🧑', 'Mam jednu sotru.', 'f'],
  ['dźěćo', 'criança', 'substantivo', 'Pessoas', '🧒', 'Dźěćo spi.', 'n'],
  // ── Verbos-chave ──
  ['być', 'ser, estar (sym, sy, je)', 'verbo', 'Verbos-chave', '🧑', 'Ja sym z Brazilskeje.'],
  ['měć', 'ter (mam, maš, ma)', 'verbo', 'Verbos-chave', '🤲', 'Mam jedneho bratra.'],
  ['rěčeć', 'falar', 'verbo', 'Verbos-chave', '🗣️', 'Ja rěču mało serbsce.'],
  ['hić', 'ir (a pé)', 'verbo', 'Verbos-chave', '🚶', 'Ja du domoj.'],
  ['jěsć', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'Ja jěm chlěb.'],
  ['pić', 'beber', 'verbo', 'Verbos-chave', '🥤', 'Ja piju wodu.'],
  ['chcyć', 'querer', 'verbo', 'Verbos-chave', '💭', 'Chcu kofej, prošu.'],
  ['wědźeć', 'saber', 'verbo', 'Verbos-chave', '🧠', 'Ja njewěm.'],
  ['hrać', 'jogar, brincar', 'verbo', 'Verbos-chave', '🎲', 'Dźěćo hraje.'],
  // ── Alimentação ──
  ['woda', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Woda, prošu.', 'f'],
  ['chlěb', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Chlěb je čerstwy.', 'm'],
  ['mloko', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'Dźěćo pije mloko.', 'n'],
  ['kofej', 'café', 'substantivo', 'Alimentação e Restaurantes', '☕', 'Kofej, prošu.', 'm'],
  // ── Números ──
  ['jedyn', 'um', 'numeral', 'Números', '1️⃣', 'Jedyn kofej, prošu.'],
  ['dwaj', 'dois (dual: dwaj/dwě)', 'numeral', 'Números', '2️⃣', 'Mam dwaj bratraj.'],
  ['tři', 'três', 'numeral', 'Números', '3️⃣', 'Tři kofeje, prošu.'],
  ['štyri', 'quatro', 'numeral', 'Números', '4️⃣', 'Štyri dny.'],
  ['pjeć', 'cinco', 'numeral', 'Números', '5️⃣', 'Pjeć lět.'],
  ['šěsć', 'seis', 'numeral', 'Números', '6️⃣', 'Šěsć hodźin.'],
  ['sydom', 'sete', 'numeral', 'Números', '7️⃣', 'Tydźeń ma sydom dnjow.'],
  ['wósom', 'oito', 'numeral', 'Números', '8️⃣', 'Wósom hodźin.'],
  ['dźewjeć', 'nove', 'numeral', 'Números', '9️⃣', 'Dźewjeć lět.'],
  ['dźesać', 'dez', 'numeral', 'Números', '🔟', 'Dźesać min.'],
  // ── Tempo ──
  ['dźensa', 'hoje', 'advérbio', 'Tempo', '📅', 'Dźensa je póndźela.'],
  ['jutře', 'amanhã', 'advérbio', 'Tempo', '📅', 'Na zasowidźenje jutře!'],
  ['wčera', 'ontem', 'advérbio', 'Tempo', '📅', 'Wčera, dźensa a jutře.'],
  ['Póndźela', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'Dźensa je Póndźela.', 'f'],
  ['Wutora', 'terça-feira', 'substantivo', 'Tempo', '📅', 'Dźensa je Wutora.', 'f'],
  ['Srjeda', 'quarta-feira', 'substantivo', 'Tempo', '📅', 'Dźensa je Srjeda.', 'f'],
  ['Štwórtk', 'quinta-feira', 'substantivo', 'Tempo', '📅', 'Dźensa je Štwórtk.', 'm'],
  ['Pjatk', 'sexta-feira', 'substantivo', 'Tempo', '📅', 'Dźensa je Pjatk.', 'm'],
  ['Sobota', 'sábado', 'substantivo', 'Tempo', '📅', 'Dźensa je Sobota.', 'f'],
  ['Njedźela', 'domingo', 'substantivo', 'Tempo', '📅', 'Dźensa je Njedźela.', 'f'],
  // ── Cores ──
  ['čerwjeny', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Jabłuko je čerwjene.'],
  ['módry', 'azul', 'adjetivo', 'Cores', '🔵', 'Njebjo je módre.'],
  ['zeleny', 'verde', 'adjetivo', 'Cores', '🟢', 'Trawa je zelena.'],
  ['běły', 'branco', 'adjetivo', 'Cores', '⚪', 'Mloko je běłe.'],
  ['čorny', 'preto', 'adjetivo', 'Cores', '⚫', 'Kóčka je čorna.'],
];

export const VOCAB_HSB = buildVocab('hsb', ROWS);
