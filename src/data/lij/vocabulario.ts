import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do lígure (zeneize, o genovês) na grafia do Conseggio Ligure (DEIZE), a norma mais
 * documentada hoje. Idioma incompleto: por enquanto só o suficiente para o nível A1 (unidades 1 e
 * 2) — ver o campo `incomplete` do pacote. Todas as palavras foram confirmadas em
 * conseggio-ligure.org (dicionário DEIZE) e languagesandyou.com; por isso a lista é mais curta
 * (72, não 85-95): preferimos não completar a cota inventando palavra sem fonte.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['ciao', 'oi, tchau (informal)', 'interjeição', 'Expressões', '👋', 'Ciao, comme ti stæ?'],
  ['bongiorno', 'bom dia', 'interjeição', 'Expressões', '🌅', 'Bongiorno a tutti!'],
  ['bonasêa', 'boa tarde, boa noite (ao chegar)', 'interjeição', 'Expressões', '🌇', 'Bonasêa, segnoa!'],
  ['à reveise', 'até logo, tchau', 'interjeição', 'Expressões', '👋', 'À reveise e graçie!'],
  ['per piaxei', 'por favor', 'interjeição', 'Expressões', '🙏', 'In cafè, per piaxei.'],
  ['graçie', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Graçie mille!'],
  ['de ninte', 'de nada', 'interjeição', 'Expressões', '🙂', 'Graçie! — De ninte.'],
  ['comme ti stæ?', 'como vai? (informal)', 'expressão', 'Expressões', '🙂', 'Ciao Anna, comme ti stæ?'],
  // ── Essenciais ──
  ['scì', 'sim', 'advérbio', 'Essenciais', '👍', 'Scì, graçie.'],
  ['no', 'não', 'advérbio', 'Essenciais', '👎', 'No, graçie.'],
  ['e', 'e', 'conjunção', 'Essenciais', null, 'Pan e formaggio.'],
  ['ancheu', 'hoje', 'advérbio', 'Essenciais', '📅', 'Ancheu l’é lunesdì.'],
  ['doman', 'amanhã', 'advérbio', 'Essenciais', '📅', 'Se veddemmo doman?'],
  ['vëi', 'ontem', 'advérbio', 'Essenciais', '📅', 'Vëi, ancheu e doman.'],
  // ── Pessoas ──
  ['mi', 'eu', 'pronome', 'Pessoas', '🙋', 'Mi ò un fræ.'],
  ['ti', 'tu, você', 'pronome', 'Pessoas', '🫵', 'E ti, comme ti stæ?'],
  ['lê', 'ele, ela', 'pronome', 'Pessoas', '👤', 'Lê o l’é de Zena.'],
  ['niatri', 'nós', 'pronome', 'Pessoas', '🙌', 'Niatri emmo doî figgi.'],
  ['viatri', 'vocês', 'pronome', 'Pessoas', '🫵', 'Viatri sei amixi.'],
  ['liatri', 'eles, elas', 'pronome', 'Pessoas', '👥', 'Liatri an üña cà grande.'],
  ['moæ', 'mãe', 'substantivo', 'Pessoas', '👩', 'Mia moæ a l’à nomme Rosa.', 'f'],
  ['poæ', 'pai', 'substantivo', 'Pessoas', '👨', 'Mæ poæ o l’é de Zena.', 'm'],
  ['fræ', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Mi ò un fræ.', 'm'],
  ['seu', 'irmã', 'substantivo', 'Pessoas', '🧑', 'Mi ò üña seu.', 'f'],
  ['figgio', 'filho', 'substantivo', 'Pessoas', '🧒', 'Sò figgio o l’à dexe anni.', 'm'],
  ['figgia', 'filha', 'substantivo', 'Pessoas', '🧒', 'Sò figgia a l’é pittin-a.', 'f'],
  ['amigo', 'amigo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Lê o l’é mæ amigo.', 'm'],
  ['amiga', 'amiga', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Lê a l’é mia amiga.', 'f'],
  // ── Casa ──
  ['cà', 'casa', 'substantivo', 'Casa', '🏠', 'Mia cà a l’é pittin-a.', 'f'],
  // ── Animais ──
  ['can', 'cachorro', 'substantivo', 'Animais', '🐕', 'O can o dorme.', 'm'],
  ['gatto', 'gato', 'substantivo', 'Animais', '🐈', 'O gatto o l’é neigro.', 'm'],
  // ── Alimentação e Restaurantes ──
  ['ægua', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Üña ægua, per piaxei.', 'f'],
  ['fugassa', 'pão (a focaccia, o pão típico de Zena)', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'A fugassa a l’é frësca.', 'f'],
  ['cafè', 'café', 'substantivo', 'Alimentação e Restaurantes', '☕', 'In cafè, per piaxei.', 'm'],
  ['læte', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'O læte o l’é gianco.', 'm'],
  ['vin', 'vinho', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'Un vin rosso, per piaxei.', 'm'],
  // ── Verbos-chave ──
  ['ëse', 'ser, estar (mi son, ti t’ê, lê o l’é)', 'verbo', 'Verbos-chave', '🧑', 'Mi son de San Paolo.'],
  ['avei', 'ter (mi ò, ti t’æ, lê o l’à)', 'verbo', 'Verbos-chave', '🤲', 'Mi ò un fræ.'],
  ['ciammâse', 'chamar-se (mi acciammo, ti t’acciammi)', 'verbo', 'Verbos-chave', '🏷️', 'Comme ti te ciammi?'],
  ['parlâ', 'falar', 'verbo', 'Verbos-chave', '🗣️', 'Mi parlo un pittin de lìgure.'],
  ['anâ', 'ir', 'verbo', 'Verbos-chave', '🚶', 'Mi vaggo a cà.'],
  ['mangiâ', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'Mi mangio fugassa.'],
  ['beive', 'beber', 'verbo', 'Verbos-chave', '🥤', 'Mi bevo ægua.'],
  ['piaxei', 'agradar, gostar (sto vin o me piaxe = eu gosto desse vinho)', 'verbo', 'Verbos-chave', '❤️', 'O lìgure o me piaxe.'],
  ['savei', 'saber (mi sò, ti ti sæ)', 'verbo', 'Verbos-chave', '🧠', 'No sò ninte.'],
  ['stâ', 'morar (mi stagghiero a Zena)', 'verbo', 'Verbos-chave', '🏠', 'Mi stagghio a Zena.'],
  ['imprende', 'aprender', 'verbo', 'Verbos-chave', '📚', 'Niatri imprendemmo o lìgure.'],
  // ── Números ──
  ['un', 'um', 'numeral', 'Números', '1️⃣', 'Un cafè, per piaxei.'],
  ['doî', 'dois', 'numeral', 'Números', '2️⃣', 'Mi ò doî fræ.'],
  ['trei', 'três', 'numeral', 'Números', '3️⃣', 'Trei cafè, per piaxei.'],
  ['quattro', 'quatro', 'numeral', 'Números', '4️⃣', 'O gatto o l’à quattro gambe.'],
  ['çinque', 'cinco', 'numeral', 'Números', '5️⃣', 'Çinque giorni.'],
  ['sei', 'seis', 'numeral', 'Números', '6️⃣', 'Sei amixi.'],
  ['sette', 'sete', 'numeral', 'Números', '7️⃣', 'A settimann-a a l’à sette giorni.'],
  ['eutto', 'oito', 'numeral', 'Números', '8️⃣', 'Eutto oe.'],
  ['neuve', 'nove', 'numeral', 'Números', '9️⃣', 'Neuve anni.'],
  ['dexe', 'dez', 'numeral', 'Números', '🔟', 'Dexe euro.'],
  // ── Tempo (dias da semana) ──
  ['lunesdì', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'Ancheu l’é lunesdì.', 'm'],
  ['mätesdì', 'terça-feira', 'substantivo', 'Tempo', '📅', 'Ancheu l’é mätesdì.', 'm'],
  ['mäcordì', 'quarta-feira', 'substantivo', 'Tempo', '📅', 'Ancheu l’é mäcordì.', 'm'],
  ['zeuggia', 'quinta-feira', 'substantivo', 'Tempo', '📅', 'Ancheu l’é zeuggia.', 'f'],
  ['venardì', 'sexta-feira', 'substantivo', 'Tempo', '📅', 'Ancheu l’é venardì.', 'm'],
  ['sabbo', 'sábado', 'substantivo', 'Tempo', '📅', 'Ancheu l’é sabbo.', 'm'],
  ['domenega', 'domingo', 'substantivo', 'Tempo', '📅', 'Ancheu l’é domenega.', 'f'],
  // ── Descrições ──
  ['bon', 'bom (fem. boña)', 'adjetivo', 'Descrições', '👍', 'O vin o l’é bon.'],
  ['grande', 'grande', 'adjetivo', 'Descrições', '📏', 'A cà a l’é grande.'],
  ['piccin', 'pequeno (fem. piccin-a)', 'adjetivo', 'Descrições', '📏', 'O gatto o l’é piccin.'],
  // ── Cores ──
  ['rosso', 'vermelho', 'adjetivo', 'Cores', '🔴', 'O vin o l’é rosso.'],
  ['bleu', 'azul', 'adjetivo', 'Cores', '🔵', 'O çê o l’é bleu.'],
  ['verde', 'verde', 'adjetivo', 'Cores', '🟢', 'L’erba a l’é verde.'],
  ['gianco', 'branco', 'adjetivo', 'Cores', '⚪', 'O læte o l’é gianco.'],
  ['neigro', 'preto', 'adjetivo', 'Cores', '⚫', 'O gatto o l’é neigro.'],
];

export const VOCAB_LIJ = buildVocab('lij', ROWS);
