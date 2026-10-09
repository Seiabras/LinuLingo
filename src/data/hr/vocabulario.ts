import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do croata padrão (hrvatski standardni jezik), de base chtokaviana e pronúncia
 * ijekaviana («mlijeko», «gdje»), no alfabeto latino de Gaj. O acento tonal não é marcado. Nível A1
 * completo (unidades 1 e 2) mais A2 (unidades 3 e 4, acrescentado depois). Fontes das palavras
 * novas do A2: "Appendix:Slavic Swadesh lists" do Wikcionário em inglês (en.wiktionary.org, para
 * clima e corpo: kiša, snijeg, sunce, vjetar, glava, ruka, oko, uho, nos, usta), as categorias
 * "Category:sh:Clothing", "Category:sh:Occupations" e "Category:sh:Emotions" do mesmo Wikcionário
 * (pantalone, košulja, haljina, suknja, kaput, cipele; liječnik, učitelj, kuhar, pastir, pisac;
 * sretan, tužan, umoran, ljut) e verbetes individuais para confirmar ortografia e conjugação
 * (kupovati, prodavati, otvarati, zatvarati, pomagati, čekati; dvadeset, trideset, četrdeset,
 * pedeset, šezdeset). Idioma incompleto: por enquanto só o suficiente para o nível A2 — ver
 * `incomplete` em index.ts.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['bok', 'oi, olá (informal; também serve de tchau)', 'interjeição', 'Expressões', '👋', 'Bok! Kako si?'],
  ['dobar dan', 'bom dia; boa tarde (durante o dia)', 'interjeição', 'Expressões', '🌅', 'Dobar dan! Kako ste?'],
  ['dobra večer', 'boa noite (ao chegar)', 'interjeição', 'Expressões', '🌇', 'Dobra večer! Kako ste?'],
  ['laku noć', 'boa noite (ao se despedir ou ir dormir)', 'interjeição', 'Expressões', '🌙', 'Laku noć, mama!'],
  ['doviđenja', 'tchau, até logo', 'interjeição', 'Expressões', '👋', 'Doviđenja i hvala!'],
  ['hvala', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Puno hvala!'],
  ['molim', 'por favor; de nada', 'interjeição', 'Expressões', '🙏', 'Jednu kavu, molim.'],
  ['oprostite', 'com licença, desculpe (formal)', 'interjeição', 'Expressões', '🙏', 'Oprostite, gdje je kolodvor?'],
  ['kako si?', 'como vai? (informal)', 'expressão', 'Expressões', '🙂', 'Bok, Ivana! Kako si?'],
  // ── Essenciais ──
  ['da', 'sim', 'partícula', 'Essenciais', '👍', 'Da, molim.'],
  ['ne', 'não', 'partícula', 'Essenciais', '👎', 'Ne, hvala.'],
  ['i', 'e', 'conjunção', 'Essenciais', null, 'Kruh i sir.'],
  ['ili', 'ou', 'conjunção', 'Essenciais', null, 'Kava ili čaj?'],
  ['puno', 'muito', 'advérbio', 'Essenciais', null, 'Puno hvala!'],
  ['također', 'também', 'advérbio', 'Essenciais', null, 'Ja također govorim hrvatski.'],
  ['dobro', 'bem', 'advérbio', 'Essenciais', '👌', 'Dobro, hvala. A ti?'],
  ['što', 'o que, que', 'pronome', 'Essenciais', '❓', 'Što je ovo?'],
  ['gdje', 'onde', 'advérbio', 'Essenciais', '❓', 'Gdje živiš?'],
  ['kako', 'como', 'advérbio', 'Essenciais', '❓', 'Kako se zoveš?'],
  ['odakle', 'de onde', 'advérbio', 'Essenciais', '❓', 'Odakle si?'],
  ['grad', 'cidade', 'substantivo', 'Essenciais', '🏙️', 'Zagreb je velik grad.', 'm'],
  ['kuća', 'casa', 'substantivo', 'Casa', '🏠', 'Moja kuća je mala.', 'f'],
  ['pas', 'cachorro', 'substantivo', 'Animais', '🐕', 'Pas spava.', 'm'],
  ['mačka', 'gato', 'substantivo', 'Animais', '🐈', 'Mačka je crna.', 'f'],
  ['dobar', 'bom (fem. dobra, neutro dobro)', 'adjetivo', 'Descrições', '👍', 'Kruh je dobar.'],
  ['velik', 'grande (fem. velika, neutro veliko)', 'adjetivo', 'Descrições', '📏', 'Moja obitelj je velika.'],
  ['mali', 'pequeno (fem. mala, neutro malo)', 'adjetivo', 'Descrições', '📏', 'Mačka je mala.'],
  // ── Pessoas ──
  ['ja', 'eu', 'pronome', 'Pessoas', '🙋', 'Ja sam Ana.'],
  ['ti', 'tu, você', 'pronome', 'Pessoas', '🫵', 'A ti? Kako se zoveš?'],
  ['on', 'ele', 'pronome', 'Pessoas', '👨', 'On je iz Splita.'],
  ['ona', 'ela', 'pronome', 'Pessoas', '👩', 'Ona je iz Zagreba.'],
  ['mi', 'nós', 'pronome', 'Pessoas', '🙌', 'Mi govorimo hrvatski.'],
  ['vi', 'vocês; o senhor, a senhora (formal)', 'pronome', 'Pessoas', '🫵', 'Odakle ste vi?'],
  ['oni', 'eles', 'pronome', 'Pessoas', '👥', 'Oni žive u Zagrebu.'],
  ['ime', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Moje ime je Linu.', 'n'],
  ['prijatelj', 'amigo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Ovo je moj prijatelj.', 'm'],
  ['prijateljica', 'amiga', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Ovo je moja prijateljica.', 'f'],
  // ── Verbos-chave ──
  ['biti', 'ser, estar (sam, si, je)', 'verbo', 'Verbos-chave', '🧑', 'Ja sam iz São Paula.'],
  ['imati', 'ter (imam, imaš)', 'verbo', 'Verbos-chave', '🤲', 'Imam brata.'],
  ['zvati se', 'chamar-se (zovem se, zoveš se)', 'verbo', 'Verbos-chave', '🏷️', 'Zovem se Ana.'],
  ['govoriti', 'falar (govorim, govoriš)', 'verbo', 'Verbos-chave', '🗣️', 'Govorim malo hrvatski.'],
  ['živjeti', 'morar, viver (živim, živiš)', 'verbo', 'Verbos-chave', '🏠', 'Živim u Zagrebu.'],
  ['ići', 'ir (idem, ideš)', 'verbo', 'Verbos-chave', '🚶', 'Idem kući.'],
  ['jesti', 'comer (jedem, jedeš)', 'verbo', 'Verbos-chave', '🍽️', 'Jedem kruh sa sirom.'],
  ['piti', 'beber (pijem, piješ)', 'verbo', 'Verbos-chave', '🥤', 'Pijem vodu.'],
  ['voljeti', 'gostar, amar (volim, voliš)', 'verbo', 'Verbos-chave', '❤️', 'Volim kavu.'],
  ['znati', 'saber (znam, znaš)', 'verbo', 'Verbos-chave', '🧠', 'Ne znam.'],
  ['htjeti', 'querer (hoću, hoćeš)', 'verbo', 'Verbos-chave', '💭', 'Hoću učiti hrvatski.'],
  ['učiti', 'aprender, estudar (učim, učiš; perf. naučiti)', 'verbo', 'Verbos-chave', '📚', 'Učim hrvatski.'],
  // ── Pessoas (família) ──
  ['obitelj', 'família', 'substantivo', 'Pessoas', '👪', 'Moja obitelj je velika.', 'f'],
  ['majka', 'mãe', 'substantivo', 'Pessoas', '👩', 'Moja majka se zove Ivana.', 'f'],
  ['otac', 'pai', 'substantivo', 'Pessoas', '👨', 'Moj otac je iz Splita.', 'm'],
  ['brat', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Moj brat ima deset godina.', 'm'],
  ['sestra', 'irmã', 'substantivo', 'Pessoas', '🧑', 'Imam sestru.', 'f'],
  ['sin', 'filho', 'substantivo', 'Pessoas', '🧒', 'Njihov sin je mali.', 'm'],
  ['kći', 'filha (acus. kćer)', 'substantivo', 'Pessoas', '🧒', 'Naša kći voli mačke.', 'f'],
  // ── Alimentação ──
  ['voda', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Vodu, molim.', 'f'],
  ['kruh', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Kruh je svjež.', 'm'],
  ['mlijeko', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'Mlijeko je bijelo.', 'n'],
  ['sir', 'queijo', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'Volim sir.', 'm'],
  ['kava', 'café', 'substantivo', 'Alimentação e Restaurantes', '☕', 'Jednu kavu, molim.', 'f'],
  ['vino', 'vinho (o tinto se chama “crno vino”, “vinho preto”)', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'Čašu vina, molim.', 'n'],
  // ── Números ──
  ['jedan', 'um (fem. jedna, neutro jedno)', 'numeral', 'Números', '1️⃣', 'Jedan čaj, molim.'],
  ['dva', 'dois (fem. dvije)', 'numeral', 'Números', '2️⃣', 'Dva čaja, molim.'],
  ['tri', 'três', 'numeral', 'Números', '3️⃣', 'Tri kave, molim.'],
  ['četiri', 'quatro', 'numeral', 'Números', '4️⃣', 'Mačka ima četiri noge.'],
  ['pet', 'cinco', 'numeral', 'Números', '5️⃣', 'Pet dana.'],
  ['šest', 'seis', 'numeral', 'Números', '6️⃣', 'Šest godina.'],
  ['sedam', 'sete', 'numeral', 'Números', '7️⃣', 'Tjedan ima sedam dana.'],
  ['osam', 'oito', 'numeral', 'Números', '8️⃣', 'Osam sati.'],
  ['devet', 'nove', 'numeral', 'Números', '9️⃣', 'Devet godina.'],
  ['deset', 'dez', 'numeral', 'Números', '🔟', 'Deset minuta.'],
  // ── Tempo ──
  ['danas', 'hoje', 'advérbio', 'Tempo', '📅', 'Danas je ponedjeljak.'],
  ['sutra', 'amanhã', 'advérbio', 'Tempo', '📅', 'Sutra je subota.'],
  ['jučer', 'ontem', 'advérbio', 'Tempo', '📅', 'Jučer, danas i sutra.'],
  ['ponedjeljak', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'Danas je ponedjeljak.', 'm'],
  ['utorak', 'terça-feira', 'substantivo', 'Tempo', '📅', 'Danas je utorak.', 'm'],
  ['srijeda', 'quarta-feira', 'substantivo', 'Tempo', '📅', 'Danas je srijeda.', 'f'],
  ['četvrtak', 'quinta-feira', 'substantivo', 'Tempo', '📅', 'Danas je četvrtak.', 'm'],
  ['petak', 'sexta-feira', 'substantivo', 'Tempo', '📅', 'Danas je petak.', 'm'],
  ['subota', 'sábado', 'substantivo', 'Tempo', '📅', 'Danas je subota.', 'f'],
  ['nedjelja', 'domingo', 'substantivo', 'Tempo', '📅', 'Danas je nedjelja.', 'f'],
  // ── Cores ──
  ['crven', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Jabuka je crvena.'],
  ['plav', 'azul', 'adjetivo', 'Cores', '🔵', 'Nebo je plavo.'],
  ['zelen', 'verde', 'adjetivo', 'Cores', '🟢', 'Trava je zelena.'],
  ['bijel', 'branco', 'adjetivo', 'Cores', '⚪', 'Mlijeko je bijelo.'],
  ['crn', 'preto', 'adjetivo', 'Cores', '⚫', 'Mačka je crna.'],
  // ── A2: vrijeme ──
  ['kiša', 'chuva', 'substantivo', 'Natureza', '🌧️', 'Pada kiša.', 'f'],
  ['snijeg', 'neve', 'substantivo', 'Natureza', '❄️', 'Zimi pada snijeg.', 'm'],
  ['sunce', 'sol', 'substantivo', 'Natureza', '☀️', 'Danas ima sunca.', 'n'],
  ['vjetar', 'vento', 'substantivo', 'Natureza', '💨', 'Vani je jak vjetar.', 'm'],
  ['hladan', 'frio (fem. hladna, neutro hladno)', 'adjetivo', 'Natureza', '🥶', 'Danas je hladno.'],
  ['topao', 'quente, morno (fem. topla, neutro toplo)', 'adjetivo', 'Natureza', '🥵', 'Kava je topla.'],
  // ── A2: odjeća ──
  ['hlače', 'calça', 'substantivo', 'Roupas', '👖', 'Imam nove hlače.', 'f'],
  ['košulja', 'camisa', 'substantivo', 'Roupas', '👔', 'Moja košulja je bijela.', 'f'],
  ['haljina', 'vestido', 'substantivo', 'Roupas', '👗', 'Ona nosi zelenu haljinu.', 'f'],
  ['suknja', 'saia', 'substantivo', 'Roupas', '👗', 'Suknja je crvena.', 'f'],
  ['kaput', 'casaco', 'substantivo', 'Roupas', '🧥', 'Kaput je topao.', 'm'],
  ['cipele', 'sapatos (sing. cipela)', 'substantivo', 'Roupas', '👟', 'Kupujem nove cipele.', 'f'],
  // ── A2: tijelo ──
  ['glava', 'cabeça', 'substantivo', 'Corpo', '🙆', 'Boli me glava.', 'f'],
  ['ruka', 'mão, braço (pl. ruke)', 'substantivo', 'Corpo', '✋', 'Dajem ti ruku.', 'f'],
  ['oko', 'olho (pl. oči)', 'substantivo', 'Corpo', '👁️', 'Ima plave oči.', 'n'],
  ['uho', 'orelha, ouvido (pl. uši)', 'substantivo', 'Corpo', '👂', 'Boli me uho.', 'n'],
  ['nos', 'nariz', 'substantivo', 'Corpo', '👃', 'Nos mi je hladan.', 'm'],
  ['usta', 'boca', 'substantivo', 'Corpo', '👄', 'Otvori usta!', 'n'],
  // ── A2: grad ──
  ['trg', 'praça', 'substantivo', 'Cidade', '🏛️', 'Trg je u centru.', 'm'],
  ['tržnica', 'mercado', 'substantivo', 'Cidade', '🏪', 'Kupujemo povrće na tržnici.', 'f'],
  ['crkva', 'igreja', 'substantivo', 'Cidade', '⛪', 'Crkva je stara.', 'f'],
  ['škola', 'escola', 'substantivo', 'Cidade', '🏫', 'Djeca idu u školu.', 'f'],
  ['bolnica', 'hospital', 'substantivo', 'Cidade', '🏥', 'Liječnik radi u bolnici.', 'f'],
  ['aerodrom', 'aeroporto', 'substantivo', 'Cidade', '✈️', 'Aerodrom je velik.', 'm'],
  // ── A2: zanimanja i osjećaji ──
  ['liječnik', 'médico', 'substantivo', 'Profissões', '🧑‍⚕️', 'Liječnik radi u bolnici.', 'm'],
  ['učitelj', 'professor', 'substantivo', 'Profissões', '🧑‍🏫', 'Učitelj je dobar.', 'm'],
  ['kuhar', 'cozinheiro', 'substantivo', 'Profissões', '🧑‍🍳', 'Kuhar kuha juhu.', 'm'],
  ['pastir', 'pastor (de ovelhas)', 'substantivo', 'Profissões', '🐑', 'Pastir čuva ovce.', 'm'],
  ['pisac', 'escritor', 'substantivo', 'Profissões', '📖', 'Pisac piše knjigu.', 'm'],
  ['sretan', 'feliz (fem. sretna, neutro sretno)', 'adjetivo', 'Sentimentos', '😊', 'Danas sam veoma sretan.'],
  ['tužan', 'triste (fem. tužna, neutro tužno)', 'adjetivo', 'Sentimentos', '😢', 'Zašto si tužan?'],
  ['umoran', 'cansado (fem. umorna, neutro umorno)', 'adjetivo', 'Sentimentos', '😴', 'Veoma sam umoran.'],
  ['ljut', 'com raiva, irritado (fem. ljuta, neutro ljuto; também “picante”)', 'adjetivo', 'Sentimentos', '😠', 'On je ljut.'],
  ['gladan', 'com fome (fem. gladna, neutro gladno)', 'adjetivo', 'Sentimentos', '🍽️', 'Gladan sam!'],
  // ── A2: još glagola i brojevi ──
  ['kupovati', 'comprar (kupujem, kupuješ; perf. kupiti)', 'verbo', 'Verbos-chave', '🛍️', 'Kupujem kruh.'],
  ['prodavati', 'vender (prodajem, prodaješ; perf. prodati)', 'verbo', 'Verbos-chave', '💰', 'On prodaje knjige.'],
  ['otvarati', 'abrir (otvaram, otvaraš; perf. otvoriti)', 'verbo', 'Verbos-chave', '🚪', 'Otvaram vrata.'],
  ['zatvarati', 'fechar (zatvaram, zatvaraš; perf. zatvoriti)', 'verbo', 'Verbos-chave', '🔒', 'Zatvaram vrata.'],
  ['pomagati', 'ajudar (pomažem, pomažeš; perf. pomoći)', 'verbo', 'Verbos-chave', '🤝', 'Pomažem majci.'],
  ['čekati', 'esperar (čekam, čekaš)', 'verbo', 'Verbos-chave', '⏳', 'Čekam prijatelja.'],
  ['dvadeset', 'vinte', 'numeral', 'Números', '2️⃣0️⃣', 'On ima dvadeset godina.'],
  ['trideset', 'trinta', 'numeral', 'Números', '3️⃣0️⃣', 'Ona ima trideset godina.'],
  ['četrdeset', 'quarenta', 'numeral', 'Números', '4️⃣0️⃣', 'Četrdeset eura, molim.'],
  ['pedeset', 'cinquenta', 'numeral', 'Números', '5️⃣0️⃣', 'Pedeset eura.'],
  ['šezdeset', 'sessenta', 'numeral', 'Números', '6️⃣0️⃣', 'Baka ima šezdeset godina.'],
];

export const VOCAB_HR = buildVocab('hr', ROWS);
