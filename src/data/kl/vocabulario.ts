import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do kalaallisut (groenlandês), ortografia padrão pós-reforma de 1973 (dialeto da
 * Groenlândia Ocidental, Nuuk). O kalaallisut é fortemente polissintético: uma palavra pode ser uma
 * frase inteira (raiz + vários sufixos). Por isso boa parte das linhas abaixo é a forma de citação
 * (3ª pessoa do singular dos verbos, ou o substantivo no absolutivo) — não flexionei nada por conta
 * própria; cada palavra e cada frase de exemplo vem de uma fonte consultada de verdade. Sem gênero
 * gramatical: ver `genders: []` em index.ts.
 *
 * Fontes: Wikipédia em português, «Língua groenlandesa»; Wikipédia em inglês, «Greenlandic language»
 * e «Greenlandic orthography»; English Wiktionary, Categoria:Greenlandic lemmas/numerals/interjections
 * e as páginas de cada palavra (ataaseq, marluk, pingasut, sisamat, tallimat, arfinillit, qulit,
 * qujanaq, naamik, aap, aluu, ajunngilaq, qanoq, uanga, illit, uagut, angut, arnaq, ateq, ateqarpoq,
 * ui, nuliaq, meeraq, ataata, anaana, nuna, sila, siku, aput, imaq, imeq, qimmeq, nanoq, puisi, tuttu,
 * timmiaq, aalisagaq, neqi, immiaq, niaqoq, taleq, isigak, assak, isi, siut, illu, qajaq, qaqortoq,
 * qernertoq, tungujortoq, aappaluttoq, sinippoq, nerivoq, imerpoq, oqarpoq, atuarpoq, pisuppoq, aamma,
 * immaqa, pilluarit, tikilluarit, baj/baaj, kina, suna, Kalaallit Nunaat); «sumi» (onde) só aparece
 * citada como cognata no verbete de Inupiaq do Wiktionary (sem página própria em groenlandês) — usada
 * aqui mesmo assim, com a ressalva. Wikivoyage, «Greenlandic phrasebook». Omniglot,
 * «Greenlandic phrases» (omniglot.com/language/phrases/greenlandic.php) — fonte das frases inteiras
 * «Qanoq ippit?», «Ajunngilanga. Illimmi qanoq ippit?», «Qanoq ateqarpit?», «Suminngaaneerpit?» e
 * «Takuss'».
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['aluu', 'oi; até logo (serve pros dois)', 'interjeição', 'Expressões', '👋', 'Aluu!'],
  ['qujanaq', 'obrigado(a)', 'interjeição', 'Expressões', '🙏', 'Qujanaq!'],
  ['qujanarujussuaq', 'muito obrigado(a) (forma intensificada de qujanaq)', 'interjeição', 'Expressões', '🙏', 'Qujanarujussuaq!'],
  ['naamik', 'não', 'interjeição', 'Expressões', '👎', 'Naamik.'],
  ['aap', 'sim (tem um sinônimo mais informal, “suu”)', 'interjeição', 'Expressões', '👍', 'Aap.'],
  ['baj', 'tchau (do inglês “bye”; também se escreve “baaj”)', 'interjeição', 'Expressões', '👋', 'Baj!'],
  ['pilluarit', 'parabéns; que corra tudo bem (imperativo de “pilluarpoq”, “está feliz”)', 'interjeição', 'Expressões', '🎉', 'Pilluarit!'],
  ['tikilluarit', 'bem-vindo(a)', 'interjeição', 'Expressões', '🤗', 'Tikilluarit!'],
  ['qanoq', 'como; o quê (também “perdão?”, pra pedir pra repetir)', 'advérbio', 'Expressões', '❓', 'Qanoq?'],
  ['qanoq ippit?', 'como vai?', 'expressão', 'Expressões', '🙂', 'Qanoq ippit?'],
  ['ajunngilanga', 'estou bem (de “ajunngilaq”, está bem, mais a terminação de “eu”)', 'verbo', 'Expressões', '😊', 'Ajunngilanga, qujanaq.'],
  ['illimmi', 'e você? (de “illit”, você, mais “-mmi”, “e quanto a…”)', 'expressão', 'Expressões', '🫵', 'Illimmi qanoq ippit?'],
  ['qanoq ateqarpit?', 'qual é o seu nome?', 'expressão', 'Expressões', '🏷️', 'Qanoq ateqarpit?'],
  ['suminngaaneerpit?', 'de onde você é?', 'expressão', 'Expressões', '🌍', 'Suminngaaneerpit?'],
  ["takuss'", 'até mais, até breve', 'interjeição', 'Expressões', '👋', "Takuss'!"],
  // ── Essenciais ──
  ['aamma', 'e; também', 'conjunção', 'Essenciais', null, 'Angut aamma arnaq.'],
  ['immaqa', 'talvez', 'advérbio', 'Essenciais', null, 'Immaqa.'],
  ['kina', 'quem', 'pronome', 'Essenciais', '❓', 'Kina?'],
  ['suna', 'o quê', 'pronome', 'Essenciais', '❓', 'Suna?'],
  ['sumi', 'onde', 'pronome', 'Essenciais', '❓', 'Sumi?'],
  ['ateq', 'nome', 'substantivo', 'Essenciais', '🏷️', 'Ateq?'],
  // ── Pessoas ──
  ['uanga', 'eu', 'pronome', 'Pessoas', '🙋', 'Uanga.'],
  ['illit', 'tu, você', 'pronome', 'Pessoas', '🫵', 'Illit.'],
  ['uagut', 'nós', 'pronome', 'Pessoas', '🙌', 'Uagut.'],
  ['angut', 'homem', 'substantivo', 'Pessoas', '👨', 'Angut aamma arnaq.'],
  ['arnaq', 'mulher', 'substantivo', 'Pessoas', '👩', 'Angut aamma arnaq.'],
  ['meeraq', 'criança', 'substantivo', 'Pessoas', '🧒', 'Nuliaq aamma meeraq.'],
  ['ataata', 'pai', 'substantivo', 'Pessoas', '👨‍🦳', 'Ataata aamma anaana.'],
  ['anaana', 'mãe', 'substantivo', 'Pessoas', '👩‍🦳', 'Ataata aamma anaana.'],
  ['ui', 'marido', 'substantivo', 'Pessoas', '🤵', 'Ui.'],
  ['nuliaq', 'esposa', 'substantivo', 'Pessoas', '👰', 'Nuliaq.'],
  // ── Natureza ──
  ['nuna', 'terra; país; mundo (raiz de “Kalaallit Nunaat”, Groenlândia)', 'substantivo', 'Natureza', '🌍', 'Kalaallit Nunaanni nunaqarpunga.'],
  ['sila', 'tempo (clima); céu; consciência', 'substantivo', 'Natureza', '🌤️', 'Sila.'],
  ['siku', 'gelo (sobre a água)', 'substantivo', 'Natureza', '🧊', 'Siku.'],
  ['aput', 'neve (no chão)', 'substantivo', 'Natureza', '❄️', 'Aput.'],
  ['imaq', 'mar', 'substantivo', 'Natureza', '🌊', 'Imaq.'],
  ['imeq', 'água (doce, de beber)', 'substantivo', 'Natureza', '💧', 'Imeq.'],
  // ── Animais ──
  ['qimmeq', 'cachorro (o de trenó, mas vale pra cachorro em geral)', 'substantivo', 'Animais', '🐕', 'Qimmeq.'],
  ['nanoq', 'urso; urso-polar', 'substantivo', 'Animais', '🐻‍❄️', 'Andap nanoq takuaa.'],
  ['puisi', 'foca', 'substantivo', 'Animais', '🦭', 'Puisi.'],
  ['tuttu', 'rena, caribu', 'substantivo', 'Animais', '🦌', 'Tuttu.'],
  ['timmiaq', 'pássaro (lit. “o que voa”)', 'substantivo', 'Animais', '🐦', 'Timmiaq.'],
  ['aalisagaq', 'peixe (lit. “o que foi pescado”, de “aalisarpoq”, pesca)', 'substantivo', 'Animais', '🐟', 'Aalisagaq.'],
  // ── Alimentação ──
  ['neqi', 'carne', 'substantivo', 'Alimentação e Restaurantes', '🥩', 'Neqi.'],
  ['immiaq', 'cerveja; também “neve ou gelo derretido”', 'substantivo', 'Alimentação e Restaurantes', '🍺', 'Immiaq.'],
  // ── Corpo ──
  ['niaqoq', 'cabeça', 'substantivo', 'Corpo', '🙂', 'Niaqoq.'],
  ['taleq', 'braço', 'substantivo', 'Corpo', '💪', 'Taleq.'],
  ['isigak', 'pé', 'substantivo', 'Corpo', '🦶', 'Isigak.'],
  ['assak', 'mão', 'substantivo', 'Corpo', '✋', 'Assak.'],
  ['isi', 'olho', 'substantivo', 'Corpo', '👁️', 'Isi.'],
  ['siut', 'orelha', 'substantivo', 'Corpo', '👂', 'Siut.'],
  // ── Casa ──
  ['illu', 'casa (parente do “iglu” inuíte canadense)', 'substantivo', 'Casa', '🏠', 'Illuga tungujortuuvoq.'],
  ['qajaq', 'caiaque (a palavra que deu “kayak” em inglês e “kajak” em dinamarquês)', 'substantivo', 'Casa', '🛶', 'Qajaq.'],
  // ── Números ──
  ['ataaseq', 'um', 'numeral', 'Números', '1️⃣', 'Ataaseq.'],
  ['marluk', 'dois', 'numeral', 'Números', '2️⃣', 'Marluk.'],
  ['pingasut', 'três', 'numeral', 'Números', '3️⃣', 'Pingasut.'],
  ['sisamat', 'quatro', 'numeral', 'Números', '4️⃣', 'Sisamat.'],
  ['tallimat', 'cinco', 'numeral', 'Números', '5️⃣', 'Tallimat.'],
  ['arfinillit', 'seis', 'numeral', 'Números', '6️⃣', 'Arfinillit.'],
  ['qulit', 'dez', 'numeral', 'Números', '🔟', 'Qulit.'],
  // ── Verbos-chave ──
  ['ajunngilaq', 'está bem, está em ordem (de “ajorpoq”, é ruim, + “-nngit-”, negativo)', 'verbo', 'Verbos-chave', '😊', 'Ajunngilaq.'],
  ['sinippoq', 'dorme', 'verbo', 'Verbos-chave', '😴', 'Sinippoq.'],
  ['nerivoq', 'come', 'verbo', 'Verbos-chave', '🍽️', 'Nerivoq.'],
  ['imerpoq', 'bebe', 'verbo', 'Verbos-chave', '🥤', 'Imerpoq.'],
  ['oqarpoq', 'fala, diz', 'verbo', 'Verbos-chave', '🗨️', 'Oqarpoq.'],
  ['atuarpoq', 'lê; vai à escola', 'verbo', 'Verbos-chave', '📖', 'Atuarpoq.'],
  ['pisuppoq', 'anda, caminha', 'verbo', 'Verbos-chave', '🚶', 'Pisuppoq.'],
  // ── Cores ──
  ['qaqortoq', 'branco (de “qaqorpoq”, é branco, + “-toq”, “o que é”)', 'substantivo', 'Cores', '⚪', 'Qaqortoq.'],
  ['qernertoq', 'preto (de “qernerpoq”, é preto)', 'substantivo', 'Cores', '⚫', 'Qernertoq.'],
  ['tungujortoq', 'azul (de “tungujorpoq”, é azul)', 'substantivo', 'Cores', '🔵', 'Illuga tungujortuuvoq.'],
  ['aappaluttoq', 'vermelho (de “aappaluppoq”, é vermelho)', 'substantivo', 'Cores', '🔴', 'Aappaluttoq.'],
];

export const VOCAB_KL = buildVocab('kl', ROWS);
