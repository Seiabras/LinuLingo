import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do aromeno (armãneashti) na grafia padronizada no simpósio de Bitola (1997) — a do
 * dicionário de Tiberius Cunia («Dictsiunar a limbãljei armãneascã») e dos verbetes aromenos do
 * Wiktionary: ã, sh, ts, dz, lj, nj. O aromeno tem muita variação regional (formas terminadas em -i
 * ou em -e, por exemplo: pãni/pãne); aqui fica sempre a primeira forma do dicionário de Cunia.
 * Idioma incompleto: por enquanto só o suficiente para o nível A1 (unidades 1 e 2) — ver o campo
 * `incomplete` do pacote.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['bunã dzua', 'bom dia, olá', 'interjeição', 'Expressões', '🌅', 'Bunã dzua! Cum eshti?'],
  ['bunã searã', 'boa noite (ao chegar)', 'interjeição', 'Expressões', '🌇', 'Bunã searã, dadã!'],
  ['noapti bunã', 'boa noite (ao se despedir)', 'interjeição', 'Expressões', '🌙', 'Noapti bunã shi s-nã videm cu ghine!'],
  ['s-nã videm cu ghine', 'até logo, tchau (lit. «que nos vejamos bem»)', 'expressão', 'Expressões', '👋', 'Adio! S-nã videm cu ghine!'],
  ['adio', 'tchau, adeus', 'interjeição', 'Expressões', '👋', 'Adio shi efharisto!'],
  ['efharisto', 'obrigado (do grego; também haristo)', 'interjeição', 'Expressões', '🙏', 'Ghini escu, efharisto!'],
  ['vã plãcãrsescu', 'por favor (formal)', 'expressão', 'Expressões', '🙏', 'Apã, vã plãcãrsescu.'],
  ['ghini vinishi', 'bem-vindo (a uma pessoa; a várias: ghini vinit)', 'interjeição', 'Expressões', '🤗', 'Ghini vinishi, Ana!'],
  ['cum eshti?', 'como vai?, como você está?', 'expressão', 'Expressões', '🙂', 'Bunã dzua, Andrei! Cum eshti?'],
  // ── Essenciais ──
  ['ie', 'sim', 'advérbio', 'Essenciais', '👍', 'Ie, efharisto!'],
  ['nu', 'não', 'advérbio', 'Essenciais', '👎', 'Nu shtiu.'],
  ['shi', 'e; também', 'conjunção', 'Essenciais', null, 'Pãni shi cash.'],
  ['i', 'ou', 'conjunção', 'Essenciais', null, 'Ai frats i surãri?'],
  ['multu', 'muito', 'advérbio', 'Essenciais', null, 'Efharisto multu!'],
  ['ghini', 'bem', 'advérbio', 'Essenciais', '👌', 'Ghini escu, efharisto!'],
  ['tsi', 'o que, que', 'pronome', 'Essenciais', '❓', 'Tsi mãts?'],
  ['iu', 'onde', 'advérbio', 'Essenciais', '❓', 'Iu ti duts?'],
  ['cum', 'como', 'advérbio', 'Essenciais', '❓', 'Cum ti cljamã?'],
  ['di iu', 'de onde', 'advérbio', 'Essenciais', '❓', 'Di iu eshti?'],
  ['cãndu', 'quando', 'advérbio', 'Essenciais', '❓', 'Cãndu yini?'],
  ['casã', 'casa', 'substantivo', 'Casa', '🏠', 'Casa easti mari.', 'f'],
  ['acasã', 'em casa, para casa', 'advérbio', 'Casa', '🏠', 'Io mi duc acasã.'],
  ['hoarã', 'aldeia, vilarejo', 'substantivo', 'Viagens e Transporte', '🏡', 'Hoara easti njicã.', 'f'],
  ['cãsãbã', 'cidade', 'substantivo', 'Viagens e Transporte', '🏙️', 'Cãsãbãlu easti mari.', 'm'],
  ['cãni', 'cachorro', 'substantivo', 'Animais', '🐕', 'Cãnli easti lai.', 'm'],
  ['cãtush', 'gato', 'substantivo', 'Animais', '🐈', 'Cãtushlu easti albu.', 'm'],
  ['bun', 'bom (fem. bunã)', 'adjetivo', 'Descrições', '👍', 'Cashlu easti bun.'],
  ['mari', 'grande', 'adjetivo', 'Descrições', '📏', 'Casa easti mari.'],
  ['njic', 'pequeno (fem. njicã)', 'adjetivo', 'Descrições', '📏', 'Hoara easti njicã.'],
  // ── Pessoas ──
  ['io', 'eu (também mini)', 'pronome', 'Pessoas', '🙋', 'Io escu dit São Paulo.'],
  ['tini', 'tu, você', 'pronome', 'Pessoas', '🫵', 'Ghini escu. Tini cum eshti?'],
  ['el', 'ele', 'pronome', 'Pessoas', '👨', 'El easti dit Salvador.'],
  ['ea', 'ela', 'pronome', 'Pessoas', '👩', 'Ea easti dit Curitiba.'],
  ['noi', 'nós', 'pronome', 'Pessoas', '🙌', 'Noi him dit Recife.'],
  ['voi', 'vocês; o senhor, a senhora (formal)', 'pronome', 'Pessoas', '🫵', 'Voi cum hits?'],
  ['elj', 'eles', 'pronome', 'Pessoas', '👥', 'Elj suntu frats.'],
  ['numã', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Numa-a mea easti Ana.', 'f'],
  ['armãneashti', 'aromeno (a língua); em aromeno', 'substantivo', 'Sociedade', '🗣️', 'Io nvets armãneashti.', 'f'],
  // ── Verbos-chave ──
  ['escu', 'ser, estar (io escu, tini eshti, el easti; também hiu)', 'verbo', 'Verbos-chave', '🧑', 'Io escu dit Porto Alegre.'],
  ['am', 'ter (io am, tini ai, el ari)', 'verbo', 'Verbos-chave', '🤲', 'Am un frati shi unã sorã.'],
  ['mi cljamã', 'eu me chamo (lit. «me chamam»; cum ti cljamã? = como você se chama?)', 'expressão', 'Verbos-chave', '🏷️', 'Mi cljamã Linu.'],
  ['zburãscu', 'falar (io zburãscu)', 'verbo', 'Verbos-chave', '🗣️', 'Io zburãscu armãneashti.'],
  ['bãnedz', 'viver, morar (io bãnedz)', 'verbo', 'Verbos-chave', '🏠', 'Io bãnedz tu Curitiba.'],
  ['mi duc', 'ir, eu vou (tini ti duts)', 'expressão', 'Verbos-chave', '🚶', 'Io mi duc acasã.'],
  ['mãc', 'comer (io mãc, tini mãts, el mãcã)', 'verbo', 'Verbos-chave', '🍽️', 'Mãc pãni cu cash.'],
  ['beau', 'beber (io beau, el bea)', 'verbo', 'Verbos-chave', '🥤', 'Io beau apã.'],
  ['plac', 'agradar («nj-platsi» = eu gosto)', 'verbo', 'Verbos-chave', '❤️', 'Nj-platsi yinlu.'],
  ['shtiu', 'saber (io shtiu)', 'verbo', 'Verbos-chave', '🧠', 'Nu shtiu.'],
  ['io voi', 'eu quero (el va = ele quer)', 'expressão', 'Verbos-chave', '💭', 'Io voi apã.'],
  ['nvets', 'aprender (io nvets)', 'verbo', 'Verbos-chave', '📚', 'Io nvets armãneashti.'],
  // ── Pessoas (família) ──
  ['fumealji', 'família', 'substantivo', 'Pessoas', '👪', 'Fumealja easti mari.', 'f'],
  ['dadã', 'mãe', 'substantivo', 'Pessoas', '👩', 'Bunã searã, dadã!', 'f'],
  ['tatã', 'pai', 'substantivo', 'Pessoas', '👨', 'Tatã, cum eshti?', 'm'],
  ['frati', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Am un frati.', 'm'],
  ['sorã', 'irmã', 'substantivo', 'Pessoas', '🧑', 'Am unã sorã.', 'f'],
  ['hilj', 'filho', 'substantivo', 'Pessoas', '🧒', 'Am un hilj.', 'm'],
  ['hilji', 'filha', 'substantivo', 'Pessoas', '🧒', 'Am unã hilji.', 'f'],
  // ── Alimentação ──
  ['apã', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Io beau apã.', 'f'],
  ['pãni', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Mãc pãni cu cash.', 'f'],
  ['lapti', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'Laptili easti albu.', 'n'],
  ['cash', 'queijo', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'Pãni cu cash.', 'n'],
  ['cafe', 'café', 'substantivo', 'Alimentação e Restaurantes', '☕', 'Un cafe, vã plãcãrsescu.', 'm'],
  ['yin', 'vinho', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'Yinlu easti arosh.', 'n'],
  // ── Números ──
  ['unu', 'um (fem. unã)', 'numeral', 'Números', '1️⃣', 'Unu, doi, trei!'],
  ['doi', 'dois (fem. dauã)', 'numeral', 'Números', '2️⃣', 'Am doi frats.'],
  ['trei', 'três', 'numeral', 'Números', '3️⃣', 'Am trei frats.'],
  ['patru', 'quatro', 'numeral', 'Números', '4️⃣', 'Patru casi.'],
  ['tsintsi', 'cinco', 'numeral', 'Números', '5️⃣', 'Tsintsi casi.'],
  ['shasi', 'seis', 'numeral', 'Números', '6️⃣', 'Shasi casi.'],
  ['shapti', 'sete', 'numeral', 'Números', '7️⃣', 'Shapti casi.'],
  ['optu', 'oito', 'numeral', 'Números', '8️⃣', 'Optu casi.'],
  ['noauã', 'nove', 'numeral', 'Números', '9️⃣', 'Noauã casi.'],
  ['dzatsi', 'dez', 'numeral', 'Números', '🔟', 'Dzatsi casi.'],
  // ── Tempo ──
  ['adzã', 'hoje', 'advérbio', 'Tempo', '📅', 'Adzã easti Luni.'],
  ['mãni', 'amanhã', 'advérbio', 'Tempo', '📅', 'S-nã videm mãni!'],
  ['aeri', 'ontem', 'advérbio', 'Tempo', '📅', 'Aeri searã.'],
  ['Luni', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'Adzã easti Luni.', 'f'],
  ['Martsã', 'terça-feira', 'substantivo', 'Tempo', '📅', 'Adzã easti Martsã.', 'f'],
  ['Njercuri', 'quarta-feira', 'substantivo', 'Tempo', '📅', 'Adzã easti Njercuri.', 'f'],
  ['Gioi', 'quinta-feira', 'substantivo', 'Tempo', '📅', 'Adzã easti Gioi.', 'f'],
  ['Vinjiri', 'sexta-feira', 'substantivo', 'Tempo', '📅', 'Adzã easti Vinjiri.', 'f'],
  ['Sãmbãtã', 'sábado', 'substantivo', 'Tempo', '📅', 'Adzã easti Sãmbãtã.', 'f'],
  ['Dumãnicã', 'domingo', 'substantivo', 'Tempo', '📅', 'Adzã easti Dumãnicã.', 'f'],
  // ── Cores ──
  ['arosh', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Yinlu easti arosh.'],
  ['albastru', 'azul (fem. albastrã)', 'adjetivo', 'Cores', '🔵', 'Casa easti albastrã.'],
  ['veardi', 'verde', 'adjetivo', 'Cores', '🟢', 'Earba easti veardi.'],
  ['albu', 'branco (fem. albã)', 'adjetivo', 'Cores', '⚪', 'Laptili easti albu.'],
  ['lai', 'preto', 'adjetivo', 'Cores', '⚫', 'Cãnli easti lai.'],
  ['galbin', 'amarelo (fem. galbinã)', 'adjetivo', 'Cores', '🟡', 'Casa easti galbinã.'],
];

export const VOCAB_RUP = buildVocab('rup', ROWS);
