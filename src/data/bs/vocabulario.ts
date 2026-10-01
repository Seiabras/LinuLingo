import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do bósnio padrão (bosanski standardni jezik), de base štokaviana e pronúncia
 * ijekaviana (“mlijeko”, “gdje”, como o croata), no alfabeto latino (gajica) — o cirílico também é
 * oficial no país, mas não é usado aqui. O bósnio, o croata e o sérvio formam um mesmo continuum
 * dialetal štokaviano, quase 100% inteligível entre si; viraram padrões nacionais distintos nos
 * anos 1990, uma questão de identidade, não de distância estrutural grande — este pacote evita
 * tomar partido nesse debate. Os traços que marcam o bósnio frente aos outros dois, usados aqui:
 * o som “h” que o bósnio conserva onde o sérvio e o croata o perderam (“lahko” em vez de “lako”,
 * “kahva” em vez de “kafa”/“kava”) e o vocabulário de origem turca/árabe mais presente no dia a
 * dia (herança do período otomano). O acento tonal não é marcado. Idioma incompleto: por enquanto
 * só o suficiente para o nível A1 (unidades 1 e 2) — ver o campo `incomplete` do pacote.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['zdravo', 'oi, olá (informal; também serve de tchau)', 'interjeição', 'Expressões', '👋', 'Zdravo! Kako si?'],
  ['dobar dan', 'bom dia; boa tarde (durante o dia)', 'interjeição', 'Expressões', '🌅', 'Dobar dan! Kako ste?'],
  ['dobro veče', 'boa noite (ao chegar)', 'interjeição', 'Expressões', '🌇', 'Dobro veče! Kako ste?'],
  ['laku noć', 'boa noite (ao se despedir ou ir dormir)', 'interjeição', 'Expressões', '🌙', 'Laku noć, mama!'],
  ['doviđenja', 'tchau, até logo', 'interjeição', 'Expressões', '👋', 'Doviđenja i hvala!'],
  ['hvala', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Puno hvala!'],
  ['molim', 'por favor; de nada', 'interjeição', 'Expressões', '🙏', 'Jednu kahvu, molim.'],
  ['izvinite', 'com licença, desculpe (formal)', 'interjeição', 'Expressões', '🙏', 'Izvinite, gdje je stanica?'],
  ['kako si?', 'como vai? (informal)', 'expressão', 'Expressões', '🙂', 'Zdravo, Amina! Kako si?'],
  // ── Essenciais ──
  ['da', 'sim', 'partícula', 'Essenciais', '👍', 'Da, molim.'],
  ['ne', 'não', 'partícula', 'Essenciais', '👎', 'Ne, hvala.'],
  ['i', 'e', 'conjunção', 'Essenciais', null, 'Hljeb i sir.'],
  ['ili', 'ou', 'conjunção', 'Essenciais', null, 'Kahva ili čaj?'],
  ['puno', 'muito', 'advérbio', 'Essenciais', null, 'Puno hvala!'],
  ['također', 'também', 'advérbio', 'Essenciais', null, 'Ja također govorim bosanski.'],
  ['dobro', 'bem', 'advérbio', 'Essenciais', '👌', 'Dobro, hvala. A ti?'],
  ['lahko', 'fácil, leve (o “h” que o bósnio conserva: sérvio/croata dizem “lako”)', 'adjetivo', 'Essenciais', '🪶', 'Bosanski nije lahko, ali je lijepo.'],
  ['šta', 'o que, que', 'pronome', 'Essenciais', '❓', 'Šta je ovo?'],
  ['gdje', 'onde', 'advérbio', 'Essenciais', '❓', 'Gdje živiš?'],
  ['kako', 'como', 'advérbio', 'Essenciais', '❓', 'Kako se zoveš?'],
  ['odakle', 'de onde', 'advérbio', 'Essenciais', '❓', 'Odakle si?'],
  ['grad', 'cidade', 'substantivo', 'Essenciais', '🏙️', 'Sarajevo je lijep grad.', 'm'],
  ['kuća', 'casa', 'substantivo', 'Casa', '🏠', 'Moja kuća je mala.', 'f'],
  ['komšija', 'vizinho (do turco; sérvio usa a mesma palavra, croata prefere “susjed”)', 'substantivo', 'Casa', '🧑‍🤝‍🧑', 'Moj komšija je dobar čovjek.', 'm'],
  ['pas', 'cachorro', 'substantivo', 'Animais', '🐕', 'Pas spava.', 'm'],
  ['mačka', 'gato', 'substantivo', 'Animais', '🐈', 'Mačka je crna.', 'f'],
  ['dobar', 'bom (fem. dobra, neutro dobro)', 'adjetivo', 'Descrições', '👍', 'Hljeb je dobar.'],
  ['velik', 'grande (fem. velika, neutro veliko)', 'adjetivo', 'Descrições', '📏', 'Moja porodica je velika.'],
  ['mali', 'pequeno (fem. mala, neutro malo)', 'adjetivo', 'Descrições', '📏', 'Mačka je mala.'],
  // ── Pessoas ──
  ['ja', 'eu', 'pronome', 'Pessoas', '🙋', 'Ja sam Amina.'],
  ['ti', 'tu, você', 'pronome', 'Pessoas', '🫵', 'A ti? Kako se zoveš?'],
  ['on', 'ele', 'pronome', 'Pessoas', '👨', 'On je iz Mostara.'],
  ['ona', 'ela', 'pronome', 'Pessoas', '👩', 'Ona je iz Sarajeva.'],
  ['mi', 'nós', 'pronome', 'Pessoas', '🙌', 'Mi govorimo bosanski.'],
  ['vi', 'vocês; o senhor, a senhora (formal)', 'pronome', 'Pessoas', '🫵', 'Odakle ste vi?'],
  ['oni', 'eles', 'pronome', 'Pessoas', '👥', 'Oni žive u Sarajevu.'],
  ['ime', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Moje ime je Linu.', 'n'],
  ['prijatelj', 'amigo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Ovo je moj prijatelj.', 'm'],
  ['prijateljica', 'amiga', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Ovo je moja prijateljica.', 'f'],
  // ── Verbos-chave ──
  ['biti', 'ser, estar (sam, si, je)', 'verbo', 'Verbos-chave', '🧑', 'Ja sam iz São Paula.'],
  ['imati', 'ter (imam, imaš)', 'verbo', 'Verbos-chave', '🤲', 'Imam brata.'],
  ['zvati se', 'chamar-se (zovem se, zoveš se)', 'verbo', 'Verbos-chave', '🏷️', 'Zovem se Amina.'],
  ['govoriti', 'falar (govorim, govoriš)', 'verbo', 'Verbos-chave', '🗣️', 'Govorim malo bosanski.'],
  ['živjeti', 'morar, viver (živim, živiš)', 'verbo', 'Verbos-chave', '🏠', 'Živim u Sarajevu.'],
  ['ići', 'ir (idem, ideš)', 'verbo', 'Verbos-chave', '🚶', 'Idem kući.'],
  ['jesti', 'comer (jedem, jedeš)', 'verbo', 'Verbos-chave', '🍽️', 'Jedem hljeb sa sirom.'],
  ['piti', 'beber (pijem, piješ)', 'verbo', 'Verbos-chave', '🥤', 'Pijem vodu.'],
  ['voljeti', 'gostar, amar (volim, voliš)', 'verbo', 'Verbos-chave', '❤️', 'Volim kahvu.'],
  ['znati', 'saber (znam, znaš)', 'verbo', 'Verbos-chave', '🧠', 'Ne znam.'],
  ['htjeti', 'querer (hoću, hoćeš)', 'verbo', 'Verbos-chave', '💭', 'Hoću učiti bosanski.'],
  ['učiti', 'aprender, estudar (učim, učiš; perf. naučiti)', 'verbo', 'Verbos-chave', '📚', 'Učim bosanski.'],
  // ── Pessoas (família) ──
  ['porodica', 'família (sérvio e bósnio preferem “porodica”; croata, “obitelj”)', 'substantivo', 'Pessoas', '👪', 'Moja porodica je velika.', 'f'],
  ['majka', 'mãe', 'substantivo', 'Pessoas', '👩', 'Moja majka se zove Fatima.', 'f'],
  ['otac', 'pai', 'substantivo', 'Pessoas', '👨', 'Moj otac je iz Mostara.', 'm'],
  ['brat', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Moj brat ima deset godina.', 'm'],
  ['sestra', 'irmã', 'substantivo', 'Pessoas', '🧑', 'Imam sestru.', 'f'],
  ['sin', 'filho', 'substantivo', 'Pessoas', '🧒', 'Njihov sin je mali.', 'm'],
  ['kći', 'filha (acus. kćer)', 'substantivo', 'Pessoas', '🧒', 'Naša kći voli mačke.', 'f'],
  // ── Alimentação ──
  ['voda', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Vodu, molim.', 'f'],
  ['hljeb', 'pão (o “h” do bósnio; croata diz “kruh”)', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Hljeb je svjež.', 'm'],
  ['mlijeko', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'Mlijeko je bijelo.', 'n'],
  ['sir', 'queijo', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'Volim sir.', 'm'],
  ['kahva', 'café (do turco “kahve”; sérvio diz “kafa”, croata “kava” — o “h” marca o bósnio)', 'substantivo', 'Alimentação e Restaurantes', '☕', 'Jednu kahvu, molim.', 'f'],
  ['vino', 'vinho (o tinto se chama “crno vino”, “vinho preto”)', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'Čašu vina, molim.', 'n'],
  // ── Números ──
  ['jedan', 'um (fem. jedna, neutro jedno)', 'numeral', 'Números', '1️⃣', 'Jedan čaj, molim.'],
  ['dva', 'dois (fem. dvije)', 'numeral', 'Números', '2️⃣', 'Dva čaja, molim.'],
  ['tri', 'três', 'numeral', 'Números', '3️⃣', 'Tri kahve, molim.'],
  ['četiri', 'quatro', 'numeral', 'Números', '4️⃣', 'Mačka ima četiri noge.'],
  ['pet', 'cinco', 'numeral', 'Números', '5️⃣', 'Pet dana.'],
  ['šest', 'seis', 'numeral', 'Números', '6️⃣', 'Šest godina.'],
  ['sedam', 'sete', 'numeral', 'Números', '7️⃣', 'Sedmica ima sedam dana.'],
  ['osam', 'oito', 'numeral', 'Números', '8️⃣', 'Osam sati.'],
  ['devet', 'nove', 'numeral', 'Números', '9️⃣', 'Devet godina.'],
  ['deset', 'dez', 'numeral', 'Números', '🔟', 'Deset minuta.'],
  // ── Tempo ──
  ['danas', 'hoje', 'advérbio', 'Tempo', '📅', 'Danas je ponedjeljak.'],
  ['sutra', 'amanhã', 'advérbio', 'Tempo', '📅', 'Sutra je subota.'],
  ['juče', 'ontem (também “jučer”)', 'advérbio', 'Tempo', '📅', 'Juče, danas i sutra.'],
  ['ponedjeljak', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'Danas je ponedjeljak.', 'm'],
  ['utorak', 'terça-feira', 'substantivo', 'Tempo', '📅', 'Danas je utorak.', 'm'],
  ['srijeda', 'quarta-feira', 'substantivo', 'Tempo', '📅', 'Danas je srijeda.', 'f'],
  ['četvrtak', 'quinta-feira', 'substantivo', 'Tempo', '📅', 'Danas je četvrtak.', 'm'],
  ['petak', 'sexta-feira', 'substantivo', 'Tempo', '📅', 'Danas je petak.', 'm'],
  ['subota', 'sábado', 'substantivo', 'Tempo', '📅', 'Danas je subota.', 'f'],
  ['nedjelja', 'domingo (também o nome da semana, “sedmica”)', 'substantivo', 'Tempo', '📅', 'Danas je nedjelja.', 'f'],
  // ── Cores ──
  ['crven', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Jabuka je crvena.'],
  ['plav', 'azul', 'adjetivo', 'Cores', '🔵', 'Nebo je plavo.'],
  ['zelen', 'verde', 'adjetivo', 'Cores', '🟢', 'Trava je zelena.'],
  ['bijel', 'branco', 'adjetivo', 'Cores', '⚪', 'Mlijeko je bijelo.'],
  ['crn', 'preto', 'adjetivo', 'Cores', '⚫', 'Mačka je crna.'],
];

export const VOCAB_BS = buildVocab('bs', ROWS);
