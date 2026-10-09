import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do malgaxe (teny malagasy). Idioma incompleto: só o nível A1 por enquanto (ver o campo
 * `incomplete` em index.ts). Palavras conferidas no Wiktionary em inglês (seção "Malagasy", inclusive
 * o apêndice "Malagasy Swadesh list"), no dicionário malagasyword.org (Malagasy Word Network, projeto
 * acadêmico de dicionário malgaxe-inglês-francês) e no roteiro de frases do Wikivoyage ("Malagasy
 * phrasebook", CC BY-SA) — fonte de cada palavra anotada junto dela aqui embaixo.
 *
 * Observações de quem pesquisou, pra quem for revisar ou expandir:
 * (a) "rahalahy" (irmão) e "rahavavy" (irmã) têm, no malagasyword.org, um detalhe mais fino do que
 *     esta tradução simples mostra: "rahalahy" é literalmente "irmão de um HOMEM" e "rahavavy" é
 *     "irmã de uma MULHER" — o malgaxe tem palavras diferentes ("anadahy"/"anabavy") para "irmão de
 *     uma mulher"/"irmã de um homem". Essa nuance está na gramática (ver gramatica.ts), não aqui;
 *     "anadahy"/"anabavy" não entraram no vocabulário desta versão.
 * (b) "namana" NÃO é "amigo" (erro fácil, por parecer com "nama" de outras línguas malaio-polinésias):
 *     o Wiktionary traduz como "cúmplice" ("accomplice"). A palavra certa para "amigo" é "sakaiza".
 * (c) Para "saber/entender" usei "mahafantatra" (confirmado no apêndice Swadesh do Wiktionary), não
 *     "mahalala" (que o malagasyword.org também traduz como "saber", mas sem confirmação no
 *     Wiktionary) — tradução em português "entender/saber" para reaproveitar o pictograma já usado
 *     por outros idiomas na palavra "entender".
 * (d) Para "querer" usei "mila" (malagasyword.org: "querer, precisar, pedir" — ativo e bem confirmado),
 *     não "te-" nem "maniry" (pesquisa anterior não confirmou "te-" em nenhuma fonte; "maniry" é mais
 *     "desejar/almejar" do que "querer" do dia a dia).
 * (e) O "20" do roteiro do Wikivoyage aparecia como "roambolo", mas essa grafia não bate em nenhum
 *     dicionário — a forma confirmada (malagasyword.org e languagesandnumbers.com) é "roapolo".
 *
 * Observações da expansão para A2 (vocabulário novo confirmado em malagasyword.org, Wiktionary em
 * inglês e um curso de malgaxe da Universidade de Wisconsin-Madison, "wisc.pb.unizin.org/lctlresources"):
 * (f) As dezenas de 30 a 90 seguem o mesmo padrão já visto no "roapolo" (20 = roa+polo): o dígito
 *     multiplicador colado em "-polo" ("folo", dez, perde o "f") — telopolo (30), efapolo (40),
 *     dimampolo (50), enimpolo (60), fitopolo (70), valopolo (80), sivifolo (90) — cada forma
 *     confirmada na própria entrada de malagasyword.org (ex.: "efapolo" tem "efatra" e "folo" como
 *     palavras elementares). "Zato" (100) e "arivo" (1.000) são palavras próprias, não compostas.
 * (g) "Lafo" aparece no malagasyword.org com dois sentidos ("vendido" e "caro") — só o sentido de
 *     "caro" entrou aqui, por ser o que interessa no mercado. "Mora" também tem mais de um sentido
 *     ("fácil", "lento" e "barato") — aqui entrou só com o sentido de "barato", oposto de "lafo".
 * (h) "Firy" (quantos) é a mesma palavra confirmada na frase "Firy taona ianao?" (quantos anos você
 *     tem?, lit. "quantos anos você"), de um guia de frases malgaxe (coleção Hippocrene) citado num
 *     recurso de ensino. "Hoatrinona" (quanto custa) é outra palavra, confirmada separadamente no
 *     malagasyword.org como advérbio.
 * (i) Para "mercado" usei "tsena" (malagasyword.org, substantivo) — a frase "tany an-tsena" (no
 *     mercado) é da mesma fonte da Universidade de Wisconsin-Madison.
 * (j) Para contar a hora, o mesmo curso da Universidade de Wisconsin-Madison confirma a pergunta
 *     "Amin'ny firy izao?" (que horas são agora?) e a estrutura de resposta "Amin'ny [número]
 *     [maraina/hariva/alina]" (às [número] da manhã/tarde/noite) — e a própria entrada de "amy" no
 *     malagasyword.org já usa esse mesmo padrão no exemplo "miainga amin'ny fito maraina" (sai às
 *     sete da manhã). Esta versão do curso fica só nas horas cheias, sem os minutos (que o malgaxe
 *     conta de um jeito próprio, com "sy"/"latsaka" e fahefany/sasary — fora desta versão).
 * (k) "Mivarotra" (vender) não tem um glossário em inglês direto no malagasyword.org — a página só
 *     dá a definição em malgaxe "Manao varotra" (fazer comércio) e o exemplo "Mivarotra anana
 *     Rasoa". A tradução "vender" usada aqui é inferência a partir dessas duas pistas (o verbo ativo
 *     mi- da raiz "varotra", comércio/venda), não uma tradução em inglês confirmada ao pé da letra.
 */
export const ROWS: VocabRow[] = [
  // Expressões — Wikivoyage "Malagasy phrasebook"; "manao ahoana" também em malagasyword.org
  // (locução, "saudação comum", "como você está")
  ['Manao ahoana', 'oi', 'interjeição', 'Expressões', '👋', 'Manao ahoana, Rakoto!'],
  ['Veloma', 'tchau', 'interjeição', 'Expressões', '👋', 'Veloma, Dada!'],
  ['Misaotra', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Misaotra, Reny!'],
  ['Azafady', 'desculpa', 'interjeição', 'Expressões', '🙏', 'Azafady, Rakoto!'],
  // Essenciais
  ['Eny', 'sim', 'advérbio', 'Essenciais', '👍', 'Eny, tsara!'],
  ['Tsia', 'não', 'advérbio', 'Essenciais', '👎', 'Tsia, misaotra.'],
  ['Tsara', 'bom', 'adjetivo', 'Essenciais', '👍', 'Tsara ny mofo.'],
  ['Ratsy', 'mau', 'adjetivo', 'Essenciais', '👎', 'Ratsy ny ronono.'],
  ['Lehibe', 'grande', 'adjetivo', 'Essenciais', '📏', 'Lehibe ny trano.'],
  ['Kely', 'pequeno', 'adjetivo', 'Essenciais', '📏', 'Kely ny saka.'],
  ['Alika', 'cachorro', 'substantivo', 'Essenciais', '🐕', 'Mainty ny alika.'],
  ['Saka', 'gato', 'substantivo', 'Essenciais', '🐈', 'Fotsy ny saka.'],
  ['Trano', 'casa', 'substantivo', 'Essenciais', '🏠', 'Lehibe ny trano.'],
  // Pessoas
  ['Aho', 'eu', 'pronome', 'Pessoas', '🙋', 'Tsara aho, misaotra!'],
  ['Ianao', 'você', 'pronome', 'Pessoas', '🫵', 'Manao ahoana ianao?'],
  ['Izy', 'ele/ela', 'pronome', 'Pessoas', '🧑', 'Tsara izy.'],
  ['Isika', 'nós', 'pronome', 'Pessoas', '🙌', 'Mihinana vary isika.'],
  ['Reny', 'mãe', 'substantivo', 'Pessoas', '👩', 'Tsara ny reny.'],
  ['Dada', 'pai', 'substantivo', 'Pessoas', '👨', 'Lehibe ny dada.'],
  ['Rahalahy', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Tsara ny rahalahy.'],
  ['Rahavavy', 'irmã', 'substantivo', 'Pessoas', '🧑', 'Kely ny rahavavy.'],
  ['Sakaiza', 'amigo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Tsara ny sakaiza.'],
  ['Fianakaviana', 'família', 'substantivo', 'Pessoas', '👪', 'Lehibe ny fianakaviana.'],
  ['Lehilahy', 'homem', 'substantivo', 'Pessoas', '👨', 'Tsara ny lehilahy.'],
  ['Vehivavy', 'mulher', 'substantivo', 'Pessoas', '👩', 'Tsara ny vehivavy.'],
  ['Anarana', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Anarako Linu.'],
  // Alimentação e Restaurantes
  ['Rano', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Misotro rano aho.'],
  ['Mofo', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Tsara ny mofo.'],
  ['Ronono', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'Misotro ronono izy.'],
  ['Kafe', 'café', 'substantivo', 'Alimentação e Restaurantes', '☕', 'Misotro kafe ianao?'],
  ['Vary', 'arroz', 'substantivo', 'Alimentação e Restaurantes', '🍚', 'Mihinana vary aho.'],
  ['Trondro', 'peixe', 'substantivo', 'Alimentação e Restaurantes', '🐟', 'Mihinana trondro isika.'],
  // Verbos-chave
  ['Mihinana', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'Mihinana vary aho.'],
  ['Misotro', 'beber', 'verbo', 'Verbos-chave', '🥤', 'Misotro rano aho.'],
  ['Tia', 'gostar/amar', 'verbo', 'Verbos-chave', '❤️', 'Tia vary aho.'],
  ['Mandeha', 'ir', 'verbo', 'Verbos-chave', '🚶', 'Mandeha aho.'],
  ['Manana', 'ter', 'verbo', 'Verbos-chave', '🤲', 'Manana trano aho.'],
  ['Mahafantatra', 'entender/saber', 'verbo', 'Verbos-chave', '🧠', 'Tsy mahafantatra aho.'],
  ['Monina', 'morar', 'verbo', 'Verbos-chave', '🏠', 'Monina aho.'],
  ['Miteny', 'falar', 'verbo', 'Verbos-chave', '🗣️', 'Miteny malagasy aho.'],
  ['Mila', 'querer', 'verbo', 'Verbos-chave', '💭', 'Mila rano aho.'],
  // Tempo
  ['Androany', 'hoje', 'advérbio', 'Tempo', '📅', 'Tsara ny androany.'],
  ['Rahampitso', 'amanhã', 'advérbio', 'Tempo', '📅', 'Rahampitso, mandeha aho.'],
  ['Omaly', 'ontem', 'advérbio', 'Tempo', '📅', 'Omaly, nihinana vary aho.'],
  ['Alahady', 'domingo', 'substantivo', 'Tempo', '📅', 'Tsara ny alahady.'],
  ['Alatsinainy', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'Tsara ny alatsinainy.'],
  ['Talata', 'terça-feira', 'substantivo', 'Tempo', '📅', 'Tsara ny talata.'],
  ['Alarobia', 'quarta-feira', 'substantivo', 'Tempo', '📅', 'Tsara ny alarobia.'],
  ['Alakamisy', 'quinta-feira', 'substantivo', 'Tempo', '📅', 'Tsara ny alakamisy.'],
  ['Zoma', 'sexta-feira', 'substantivo', 'Tempo', '📅', 'Tsara ny zoma.'],
  ['Asabotsy', 'sábado', 'substantivo', 'Tempo', '📅', 'Tsara ny asabotsy.'],
  // Números
  ['Iray', 'um', 'numeral', 'Números', '1️⃣', 'Manana alika iray aho.'],
  ['Roa', 'dois', 'numeral', 'Números', '2️⃣', 'Manana saka roa aho.'],
  ['Telo', 'três', 'numeral', 'Números', '3️⃣', 'Manana trano telo izy.'],
  ['Efatra', 'quatro', 'numeral', 'Números', '4️⃣', 'Manana mofo efatra aho.'],
  ['Dimy', 'cinco', 'numeral', 'Números', '5️⃣', 'Manana trondro dimy aho.'],
  ['Enina', 'seis', 'numeral', 'Números', '6️⃣', 'Manana alika enina izy.'],
  ['Fito', 'sete', 'numeral', 'Números', '7️⃣', 'Manana saka fito aho.'],
  ['Valo', 'oito', 'numeral', 'Números', '8️⃣', 'Manana trano valo ny tanàna.'],
  ['Sivy', 'nove', 'numeral', 'Números', '9️⃣', 'Manana mofo sivy aho.'],
  ['Folo', 'dez', 'numeral', 'Números', '🔟', 'Manana trondro folo isika.'],
  ['Roapolo', 'vinte', 'numeral', 'Números', '🔢', 'Manana alika roapolo ny tanàna.'],
  // Cores
  ['Mena', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Mena ny trano.'],
  ['Manga', 'azul', 'adjetivo', 'Cores', '🔵', 'Manga ny trano.'],
  ['Maitso', 'verde', 'adjetivo', 'Cores', '🟢', 'Maitso ny trano.'],
  ['Fotsy', 'branco', 'adjetivo', 'Cores', '⚪', 'Fotsy ny saka.'],
  ['Mainty', 'preto', 'adjetivo', 'Cores', '⚫', 'Mainty ny alika.'],
  // A2.1 — Números de 30 a 1.000 (malagasyword.org: telopolo, efapolo, dimampolo, enimpolo,
  // fitopolo, valopolo, sivifolo, zato, arivo) e "firy"/"taona" (Hippocrene, via recurso de ensino)
  ['Telopolo', 'trinta', 'numeral', 'Números', '3️⃣0️⃣', 'Telopolo taona aho.'],
  ['Efapolo', 'quarenta', 'numeral', 'Números', '4️⃣0️⃣', 'Efapolo taona ny reny.'],
  ['Dimampolo', 'cinquenta', 'numeral', 'Números', '5️⃣0️⃣', 'Dimampolo taona ny dada.'],
  ['Enimpolo', 'sessenta', 'numeral', 'Números', '6️⃣0️⃣', 'Manana trondro enimpolo aho.'],
  ['Fitopolo', 'setenta', 'numeral', 'Números', '7️⃣0️⃣', 'Manana saka fitopolo ny tanàna.'],
  ['Valopolo', 'oitenta', 'numeral', 'Números', '8️⃣0️⃣', 'Valopolo taona ny sakaiza.'],
  ['Sivifolo', 'noventa', 'numeral', 'Números', '9️⃣0️⃣', 'Sivifolo taona ny lehilahy.'],
  ['Zato', 'cem', 'numeral', 'Números', '💯', 'Zato taona ny trano.'],
  ['Arivo', 'mil', 'numeral', 'Números', '🧮', 'Arivo ariary ny vidy.'],
  ['Firy', 'quantos', 'advérbio', 'Essenciais', '❓', 'Firy taona ianao?'],
  ['Taona', 'ano', 'substantivo', 'Tempo', '🎂', 'Folo taona aho.'],
  // A2.1 — Mercado e dinheiro (malagasyword.org: tsena, vidy, hoatrinona, mora, lafo, mividy,
  // mivarotra, vola; Wikipédia em inglês "Malagasy ariary", moeda oficial de Madagascar desde 2005)
  ['Tsena', 'mercado', 'substantivo', 'Compras', '🧺', 'Mandeha tany an-tsena aho.'],
  ['Vidy', 'preço', 'substantivo', 'Compras', '💲', 'Lehibe ny vidy.'],
  ['Hoatrinona', 'quanto custa', 'advérbio', 'Compras', '🤔', 'Hoatrinona ny trondro?'],
  ['Mora', 'barato', 'adjetivo', 'Compras', '🪙', 'Mora ny mofo.'],
  ['Lafo', 'caro', 'adjetivo', 'Compras', '💸', 'Lafo ny trondro.'],
  ['Mividy', 'comprar', 'verbo', 'Verbos-chave', '🛒', 'Mividy vary aho.'],
  ['Mivarotra', 'vender', 'verbo', 'Verbos-chave', '🏪', 'Mivarotra vary ny sakaiza.'],
  ['Vola', 'dinheiro', 'substantivo', 'Compras', '💰', 'Tsy manana vola aho.'],
  ['Ariary', 'ariary (moeda malgaxe)', 'substantivo', 'Compras', '💵', 'Manana ariary arivo aho.'],
  // A2.2 — Hora, rotina e clima (malagasyword.org: ora, maraina, hariva, alina, izao, miasa,
  // mianatra, mifoha, matory, mafana, mangatsiaka, orana, masoandro; curso de malgaxe da
  // Universidade de Wisconsin-Madison para a frase "Amin'ny firy izao?")
  ['Ora', 'hora', 'substantivo', 'Tempo', '🕐', 'Amin\'ny firy izao?'],
  ['Maraina', 'manhã', 'substantivo', 'Tempo', '🌅', 'Mifoha amin\'ny enina maraina aho.'],
  ['Hariva', 'fim de tarde', 'substantivo', 'Tempo', '🌇', 'Miasa amin\'ny roa hariva aho.'],
  ['Alina', 'noite', 'substantivo', 'Tempo', '🌙', 'Matory amin\'ny folo alina aho.'],
  ['Izao', 'agora', 'advérbio', 'Tempo', '⏰', 'Miasa aho izao.'],
  ['Miasa', 'trabalhar', 'verbo', 'Verbos-chave', '💼', 'Miasa any an-tsena ny dada.'],
  ['Mianatra', 'estudar', 'verbo', 'Verbos-chave', '📚', 'Mianatra malagasy aho.'],
  ['Mifoha', 'levantar/despertar', 'verbo', 'Verbos-chave', '🌄', 'Mifoha maraina aho.'],
  ['Matory', 'dormir', 'verbo', 'Verbos-chave', '😴', 'Matory alina aho.'],
  ['Mafana', 'quente', 'adjetivo', 'Descrições', '🔥', 'Mafana ny andro.'],
  ['Mangatsiaka', 'frio', 'adjetivo', 'Descrições', '🥶', 'Mangatsiaka ny rano.'],
  ['Orana', 'chuva', 'substantivo', 'Natureza', '🌧️', 'Misy orana androany.'],
  ['Masoandro', 'sol', 'substantivo', 'Natureza', '☀️', 'Mafana ny masoandro.'],
];

export const VOCAB_MG = buildVocab('mg', ROWS);
