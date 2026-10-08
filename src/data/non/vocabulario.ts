import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do nórdico antigo (norrœnt mál / Old Norse), na ortografia normalizada acadêmica
 * (a mesma convenção do dicionário de Zoëga e das gramáticas modernas: acentos agudos marcam
 * vogal longa, þ/ð para as duas fricativas dentais, æ/ø para as vogais próprias). Sem falantes
 * nativos vivos — como o latim (`la`), os exemplos usam nomes e cenário da era viking, não o
 * Brasil. Fontes: Geir T. Zoëga, "A Concise Dictionary of Old Icelandic" (1910, domínio público,
 * archive.org/details/zoegaaconcisedictionaryofold_202207); Michael Barnes, "A New Introduction to
 * Old Norse" (Viking Society for Northern Research); "Old Norse Online" (Jonathan Slocum & Todd
 * Krause, Linguistics Research Center, UT Austin, lrc.la.utexas.edu/eieol/norol — curso de 10
 * lições com textos de época); Wiktionary (verbetes de nórdico antigo, cruzados com Zoëga).
 * Idioma incompleto: só o suficiente para o nível A1 por enquanto — ver `incomplete` em index.ts.
 */
export const ROWS: VocabRow[] = [
  // Saudações — nórdico antigo tinha saudação com GÊNERO: "heill" para homem, "heil" para mulher
  // (Zoëga, verbete "heill": "kom heill!" = "bem-vindo!"; ver também o artigo "Heil og sæl" sobre a
  // forma composta "heill ok sæll"/"heil ok sæl").
  ['heill', 'oi/salve (dito a um homem)', 'interjeição', 'Expressões', '👋', 'Heill, Þórir!'],
  ['heil', 'oi/salve (dito a uma mulher)', 'interjeição', 'Expressões', '👋', 'Heil, Auðr!'],
  ['far vel', 'tchau/passe bem', 'interjeição', 'Expressões', '👋', 'Far vel, vinr minn!'],
  ['þökk fyrir', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Þökk fyrir, frændi!'],
  ['fyrirgefa', 'perdoar/desculpar', 'verbo', 'Expressões', '🙏', 'Fyrirgef mér, herra.'],
  ['já', 'sim', 'advérbio', 'Essenciais', '👍', 'Já, þat er satt.'],
  ['nei', 'não', 'advérbio', 'Essenciais', '👎', 'Nei, eigi svá.'],
  // Essenciais (palavras de função)
  ['ok', 'e', 'conjunção', 'Essenciais', null, 'Brauð ok vatn.'],
  ['eða', 'ou', 'conjunção', 'Essenciais', null, 'Vín eða mjólk?'],
  ['mjök', 'muito', 'advérbio', 'Essenciais', null, 'Hann er mjök stórr.'],
  ['einnig', 'também', 'advérbio', 'Essenciais', null, 'Ek mæli norrœnu einnig.'],
  // Pessoas: pronomes
  ['ek', 'eu', 'pronome', 'Pessoas', '🙋', 'Ek em Auðr.'],
  ['þú', 'você (tu)', 'pronome', 'Pessoas', '🫵', 'Þú ert Þórir?'],
  ['hann', 'ele', 'pronome', 'Pessoas', '👨', 'Hann er faðir minn.'],
  ['hon', 'ela', 'pronome', 'Pessoas', '👩', 'Hon er móðir mín.'],
  ['vér', 'nós', 'pronome', 'Pessoas', '🙌', 'Vér erum vinir.'],
  ['þér', 'vocês', 'pronome', 'Pessoas', '🫵', 'Þér eruð Norðmenn.'],
  ['þeir', 'eles', 'pronome', 'Pessoas', '👥', 'Þeir eru vinir mínir.'],
  // Verbos-chave
  ['vera', 'ser/estar', 'verbo', 'Verbos-chave', '🧑', 'Hon er í Nóregi.'],
  ['eiga', 'ter/possuir', 'verbo', 'Verbos-chave', '🤲', 'Ek á skip.'],
  ['heita', 'chamar-se', 'verbo', 'Verbos-chave', '🏷️', 'Ek heiti Auðr.'],
  ['mæla', 'falar/dizer', 'verbo', 'Verbos-chave', '🗣️', 'Hann mælir norrœnu.'],
  ['búa', 'morar/viver', 'verbo', 'Verbos-chave', '🏠', 'Vér búum í Íslandi.'],
  ['ganga', 'andar/ir', 'verbo', 'Verbos-chave', '🚶', 'Ek geng til hafnar.'],
  ['eta', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'Vér etum brauð.'],
  ['drekka', 'beber', 'verbo', 'Verbos-chave', '🥤', 'Ek drekk vatn.'],
  ['unna', 'amar/gostar', 'verbo', 'Verbos-chave', '❤️', 'Hon ann honum.'],
  ['vilja', 'querer', 'verbo', 'Verbos-chave', '💭', 'Ek vil vatn.'],
  ['vita', 'saber', 'verbo', 'Verbos-chave', '🧠', 'Ek veit þat.'],
  ['sjá', 'ver', 'verbo', 'Verbos-chave', '👀', 'Ek sé skip.'],
  // Pessoas: nome e amizade
  ['nafn', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Hvert er nafn þitt?', 'n'],
  ['vinr', 'amigo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Þórir er vinr minn.', 'm'],
  ['vina', 'amiga', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Auðr er vina mín.', 'f'],
  // Família (faðir/móðir/bróðir/systir/dóttir formam uma declinação própria, rara, com -ir no
  // nominativo singular — Wikibooks "Old Norse/Noun Declension")
  ['ætt', 'família', 'substantivo', 'Pessoas', '👪', 'Ætt mín er stór.', 'f'],
  ['móðir', 'mãe', 'substantivo', 'Pessoas', '👩', 'Móðir mín heitir Auðr.', 'f'],
  ['faðir', 'pai', 'substantivo', 'Pessoas', '👨', 'Faðir minn heitir Þórir.', 'm'],
  ['bróðir', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Bróðir minn er ungr.', 'm'],
  ['systir', 'irmã', 'substantivo', 'Pessoas', '🧑', 'Systir mín er góð.', 'f'],
  ['sonr', 'filho', 'substantivo', 'Pessoas', '🧒', 'Sonr minn er hér.', 'm'],
  ['dóttir', 'filha', 'substantivo', 'Pessoas', '🧒', 'Dóttir mín er ung.', 'f'],
  // Casa e cidade
  ['hús', 'casa', 'substantivo', 'Essenciais', '🏠', 'Hús mitt er lítit.', 'n'],
  ['borg', 'cidade/fortaleza', 'substantivo', 'Essenciais', '🏙️', 'Þetta er mikil borg.', 'f'],
  ['skip', 'navio', 'substantivo', 'Essenciais', '🚢', 'Skip várt er mikit.', 'n'],
  ['konungr', 'rei', 'substantivo', 'Essenciais', '👑', 'Hann er konungr várr.', 'm'],
  ['sverð', 'espada', 'substantivo', 'Essenciais', '⚔️', 'Sverð hans er gott.', 'n'],
  // Comida
  ['vatn', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Vatnit er kalt.', 'n'],
  ['brauð', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Brauðit er gott.', 'n'],
  ['mjólk', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'Mjólkin er hvít.', 'f'],
  ['vín', 'vinho', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'Vínit er rautt.', 'n'],
  ['ostr', 'queijo', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'Ostrinn er góðr.', 'm'],
  // Bichos e adjetivos essenciais
  ['hundr', 'cachorro', 'substantivo', 'Essenciais', '🐕', 'Hundr minn er mikill.', 'm'],
  ['köttr', 'gato', 'substantivo', 'Essenciais', '🐈', 'Köttrinn er lítill.', 'm'],
  ['stórr', 'grande', 'adjetivo', 'Essenciais', '📏', 'Fjall er stórt.'],
  ['lítill', 'pequeno', 'adjetivo', 'Essenciais', '📏', 'Hundr er lítill.'],
  ['góðr', 'bom', 'adjetivo', 'Essenciais', '👍', 'Vín er gott.'],
  // Tempo (advérbios) — continuam quase idênticos no islandês moderno
  ['í dag', 'hoje', 'advérbio', 'Essenciais', '📅', 'Ek kem í dag.'],
  ['á morgun', 'amanhã', 'advérbio', 'Essenciais', '📅', 'Hann kemr á morgun.'],
  ['í gær', 'ontem', 'advérbio', 'Essenciais', '📅', 'Hon kom í gær.'],
  // Números
  ['einn', 'um', 'numeral', 'Números', '1️⃣', 'Einn hundr.'],
  ['tveir', 'dois', 'numeral', 'Números', '2️⃣', 'Tveir bræðr.'],
  ['þrír', 'três', 'numeral', 'Números', '3️⃣', 'Þrjár systr.'],
  ['fjórir', 'quatro', 'numeral', 'Números', '4️⃣', 'Fjórir vinir.'],
  ['fimm', 'cinco', 'numeral', 'Números', '5️⃣', 'Fimm skip.'],
  ['sex', 'seis', 'numeral', 'Números', '6️⃣', 'Sex konungar.'],
  ['sjau', 'sete', 'numeral', 'Números', '7️⃣', 'Sjau dagar.'],
  ['átta', 'oito', 'numeral', 'Números', '8️⃣', 'Átta menn.'],
  ['níu', 'nove', 'numeral', 'Números', '9️⃣', 'Níu vetr.'],
  ['tíu', 'dez', 'numeral', 'Números', '🔟', 'Tíu ár.'],
  ['tuttugu', 'vinte', 'numeral', 'Números', '🔢', 'Tuttugu dagar.'],
  // Cores
  ['rauðr', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Sverð er rautt af blóði.'],
  ['blár', 'azul', 'adjetivo', 'Cores', '🔵', 'Himinn er blár.'],
  ['grœnn', 'verde', 'adjetivo', 'Cores', '🟢', 'Gras er grœnt.'],
  ['hvítr', 'branco', 'adjetivo', 'Cores', '⚪', 'Mjólk er hvít.'],
  ['svartr', 'preto', 'adjetivo', 'Cores', '⚫', 'Hrafn er svartr.'],
  // Perguntas
  ['hvar', 'onde', 'pronome', 'Essenciais', '❓', 'Hvar ert þú?'],
  ['hvat', 'o que', 'pronome', 'Essenciais', '❓', 'Hvat er þetta?'],
  ['hvé', 'como', 'advérbio', 'Essenciais', '❓', 'Hvé heitir þú?'],
  ['hvaðan', 'de onde', 'advérbio', 'Essenciais', '❓', 'Hvaðan ert þú?'],
];

export const VOCAB_NON = buildVocab('non', ROWS);
