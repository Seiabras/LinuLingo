import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do esperanto — a primeira língua construída com curso de verdade no app (pedido do
 * Matheus, 08/10/2026: "faz o primeiro curso para colocar ao lado dos naturais"). Esperanto não tem
 * gênero gramatical nos substantivos (o feminino é derivado com o sufixo -ino, não concordância:
 * "patro" pai, "patrino" mãe), por isso nenhuma linha usa o campo de gênero. Raízes e frases
 * conferidas contra o PMEG (Plena Manlibro de Esperanta Gramatiko, Bertilo Wennergren, lernu.net/
 * pmeg), o Fundamento de Esperanto (L. L. Zamenhof, 1887) e a Wikipédia ("Esperanto vocabulary",
 * "Esperanto grammar", "Esperanto orthography"). Idioma incompleto: só o suficiente para o nível A1
 * por enquanto — ver `incomplete` em index.ts.
 */
export const ROWS: VocabRow[] = [
  // Expressões
  ['saluton', 'olá', 'interjeição', 'Expressões', '👋', 'Saluton, Petro!'],
  ['adiaŭ', 'tchau/adeus', 'interjeição', 'Expressões', '👋', 'Adiaŭ, amiko!'],
  ['dankon', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Dankon pro la pano!'],
  ['bonvolu', 'por favor', 'interjeição', 'Expressões', '🙏', 'Bonvolu, donu al mi akvon.'],
  ['pardonu', 'desculpe/perdão', 'verbo', 'Expressões', '🙏', 'Pardonu min!'],
  ['ĝis revido', 'até mais (até rever)', 'interjeição', 'Expressões', '👋', 'Ĝis revido, amikoj!'],
  ['bonan matenon', 'bom dia (com -n: "(eu desejo) uma boa manhã")', 'interjeição', 'Expressões', '🌅', 'Bonan matenon, Ana!'],
  ['jes', 'sim', 'advérbio', 'Essenciais', '👍', 'Jes, mi estas Maria.'],
  ['ne', 'não', 'advérbio', 'Essenciais', '👎', 'Ne, mi ne estas Petro.'],
  // Essenciais (palavras de função e perguntas)
  ['kaj', 'e', 'conjunção', 'Essenciais', null, 'Pano kaj akvo.'],
  ['aŭ', 'ou', 'conjunção', 'Essenciais', null, 'Akvo aŭ vino?'],
  ['sed', 'mas', 'conjunção', 'Essenciais', null, 'Mi estas malgranda, sed bona.'],
  ['tre', 'muito', 'advérbio', 'Essenciais', null, 'Li estas tre granda.'],
  ['ankaŭ', 'também', 'advérbio', 'Essenciais', null, 'Mi ankaŭ parolas Esperanton.'],
  ['kio', 'o que', 'pronome', 'Essenciais', '❓', 'Kio estas tio?'],
  ['kiu', 'quem/qual', 'pronome', 'Essenciais', '❓', 'Kiu vi estas?'],
  ['kie', 'onde', 'advérbio', 'Essenciais', '❓', 'Kie estas la domo?'],
  ['kiel', 'como', 'advérbio', 'Essenciais', '❓', 'Kiel vi fartas?'],
  // "ĉu" no começo da frase transforma ela numa pergunta de sim/não — não existe equivalente em
  // português (lá a entonação já faz isso), é uma palavra própria do esperanto.
  ['ĉu', 'partícula de pergunta sim/não', 'partícula', 'Essenciais', '❓', 'Ĉu vi estas Ana?'],
  // Pessoas: pronomes (vi serve pro singular E plural, formal e informal — não existe distinção)
  ['mi', 'eu', 'pronome', 'Pessoas', '🙋', 'Mi estas Ana.'],
  ['vi', 'você/vocês', 'pronome', 'Pessoas', '🫵', 'Vi estas bona amiko.'],
  ['li', 'ele', 'pronome', 'Pessoas', '👨', 'Li estas mia patro.'],
  ['ŝi', 'ela', 'pronome', 'Pessoas', '👩', 'Ŝi estas mia patrino.'],
  ['ni', 'nós', 'pronome', 'Pessoas', '🙌', 'Ni estas amikoj.'],
  ['ili', 'eles/elas', 'pronome', 'Pessoas', '👥', 'Ili estas junaj.'],
  ['ĝi', 'ele/ela (para coisas e bichos)', 'pronome', 'Pessoas', '🔘', 'La hundo estas granda; ĝi estas bona.'],
  // Pessoas: nome e família
  ['nomo', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Kio estas via nomo?'],
  ['amiko', 'amigo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Petro estas mia amiko.'],
  ['familio', 'família', 'substantivo', 'Pessoas', '👪', 'Mia familio estas granda.'],
  ['patro', 'pai', 'substantivo', 'Pessoas', '👨', 'Mia patro nomiĝas Johano.'],
  ['patrino', 'mãe', 'substantivo', 'Pessoas', '👩', 'Mia patrino nomiĝas Maria.'],
  ['frato', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Mia frato estas juna.'],
  ['fratino', 'irmã', 'substantivo', 'Pessoas', '🧑', 'Mia fratino estas bona.'],
  ['filo', 'filho', 'substantivo', 'Pessoas', '🧒', 'Mia filo estas malgranda.'],
  ['filino', 'filha', 'substantivo', 'Pessoas', '🧒', 'Mia filino lernas Esperanton.'],
  ['avo', 'avô', 'substantivo', 'Pessoas', '👴', 'Mia avo estas maljuna.'],
  ['avino', 'avó', 'substantivo', 'Pessoas', '👵', 'Mia avino kuiras bone.'],
  // Verbos-chave (esti NUNCA muda de forma por pessoa: mi/vi/li/ni/ili estas — todos "estas")
  ['esti', 'ser/estar', 'verbo', 'Verbos-chave', '🧑', 'Mi estas feliĉa.'],
  ['havi', 'ter', 'verbo', 'Verbos-chave', '🤲', 'Mi havas hundon.'],
  ['nomiĝi', 'chamar-se', 'verbo', 'Verbos-chave', '🏷️', 'Mi nomiĝas Ana.'],
  ['paroli', 'falar', 'verbo', 'Verbos-chave', '🗣️', 'Ŝi parolas Esperanton.'],
  ['loĝi', 'morar', 'verbo', 'Verbos-chave', '🏠', 'Ni loĝas en granda urbo.'],
  ['iri', 'ir', 'verbo', 'Verbos-chave', '🚶', 'Mi iras hejmen.'],
  ['manĝi', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'Ni manĝas panon.'],
  ['trinki', 'beber', 'verbo', 'Verbos-chave', '🥤', 'Mi trinkas akvon.'],
  ['ami', 'amar', 'verbo', 'Verbos-chave', '❤️', 'Li amas sian familion.'],
  ['voli', 'querer', 'verbo', 'Verbos-chave', '💭', 'Mi volas akvon.'],
  ['scii', 'saber', 'verbo', 'Verbos-chave', '🧠', 'Mi scias tion.'],
  ['vidi', 'ver', 'verbo', 'Verbos-chave', '👀', 'Mi vidas la domon.'],
  ['farti', 'passar/estar de saúde', 'verbo', 'Verbos-chave', '🩺', 'Kiel vi fartas?'],
  ['kompreni', 'entender', 'verbo', 'Verbos-chave', '🧠', 'Mi ne komprenas.'],
  // Casa e cidade
  ['domo', 'casa', 'substantivo', 'Essenciais', '🏠', 'Mia domo estas malgranda.'],
  ['urbo', 'cidade', 'substantivo', 'Essenciais', '🏙️', 'Tio estas granda urbo.'],
  ['libro', 'livro', 'substantivo', 'Essenciais', '📖', 'Mi legas libron.'],
  ['hundo', 'cachorro', 'substantivo', 'Essenciais', '🐕', 'Mia hundo estas granda.'],
  ['kato', 'gato', 'substantivo', 'Essenciais', '🐈', 'Ŝia kato estas malgranda.'],
  ['ĉielo', 'céu', 'substantivo', 'Essenciais', '🌤️', 'La ĉielo estas blua.'],
  // Adjetivos essenciais (granda/malgranda e bona/malbona mostram o prefixo mal-, "oposto de")
  ['granda', 'grande', 'adjetivo', 'Essenciais', '📏', 'La domo estas granda.'],
  ['malgranda', 'pequeno', 'adjetivo', 'Essenciais', '📏', 'La hundo estas malgranda.'],
  ['bona', 'bom', 'adjetivo', 'Essenciais', '👍', 'La pano estas bona.'],
  ['malbona', 'mau/ruim', 'adjetivo', 'Essenciais', '👎', 'La vetero estas malbona.'],
  // Tempo (advérbios) — todos terminam em -aŭ
  ['hodiaŭ', 'hoje', 'advérbio', 'Essenciais', '📅', 'Hodiaŭ mi lernas.'],
  ['morgaŭ', 'amanhã', 'advérbio', 'Essenciais', '📅', 'Morgaŭ ni iros.'],
  ['hieraŭ', 'ontem', 'advérbio', 'Essenciais', '📅', 'Hieraŭ mi legis.'],
  // Alimentação e Restaurantes
  ['akvo', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'La akvo estas malvarma.'],
  ['pano', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'La pano estas bona.'],
  ['lakto', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'La lakto estas blanka.'],
  ['vino', 'vinho', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'La vino estas ruĝa.'],
  ['fromaĝo', 'queijo', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'Mi manĝas fromaĝon.'],
  // Números
  ['unu', 'um', 'numeral', 'Números', '1️⃣', 'Unu hundo.'],
  ['du', 'dois', 'numeral', 'Números', '2️⃣', 'Du fratoj.'],
  ['tri', 'três', 'numeral', 'Números', '3️⃣', 'Tri amikoj.'],
  ['kvar', 'quatro', 'numeral', 'Números', '4️⃣', 'Kvar libroj.'],
  ['kvin', 'cinco', 'numeral', 'Números', '5️⃣', 'Kvin domoj.'],
  ['ses', 'seis', 'numeral', 'Números', '6️⃣', 'Ses katoj.'],
  ['sep', 'sete', 'numeral', 'Números', '7️⃣', 'Sep tagoj.'],
  ['ok', 'oito', 'numeral', 'Números', '8️⃣', 'Ok jaroj.'],
  ['naŭ', 'nove', 'numeral', 'Números', '9️⃣', 'Naŭ monatoj.'],
  ['dek', 'dez', 'numeral', 'Números', '🔟', 'Dek urboj.'],
  ['cent', 'cem', 'numeral', 'Números', '💯', 'La urbo havas cent domojn.'],
  ['mil', 'mil', 'numeral', 'Números', '🔢', 'La urbo havas mil domojn.'],
  ['unua', 'primeiro', 'adjetivo', 'Números', '🥇', 'Tio estas mia unua libro.'],
  // Tempo: dias da semana (terminam em -o, como todo substantivo) e tago/semajno/monato/jaro
  ['lundo', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'Lundon mi lernas Esperanton.'],
  ['mardo', 'terça-feira', 'substantivo', 'Tempo', '📅', 'Mardo estas la dua tago.'],
  ['merkredo', 'quarta-feira', 'substantivo', 'Tempo', '📅', 'Merkredo estas la tria tago.'],
  ['ĵaŭdo', 'quinta-feira', 'substantivo', 'Tempo', '📅', 'Ĵaŭdo estas la kvara tago.'],
  ['vendredo', 'sexta-feira', 'substantivo', 'Tempo', '📅', 'Vendredo estas la kvina tago.'],
  ['sabato', 'sábado', 'substantivo', 'Tempo', '📅', 'Sabato estas la sesa tago.'],
  ['dimanĉo', 'domingo', 'substantivo', 'Tempo', '📅', 'Dimanĉo estas la sepa tago.'],
  ['tago', 'dia', 'substantivo', 'Tempo', '📅', 'Bonan tagon!'],
  ['semajno', 'semana', 'substantivo', 'Tempo', '📅', 'Unu semajno havas sep tagojn.'],
  ['monato', 'mês', 'substantivo', 'Tempo', '📅', 'Decembro estas la lasta monato.'],
  ['jaro', 'ano', 'substantivo', 'Tempo', '📅', 'Unu jaro havas dek du monatojn.'],
  // Cores
  ['ruĝa', 'vermelho', 'adjetivo', 'Cores', '🔴', 'La vino estas ruĝa.'],
  ['blua', 'azul', 'adjetivo', 'Cores', '🔵', 'La ĉielo estas blua.'],
  ['verda', 'verde', 'adjetivo', 'Cores', '🟢', 'La herbo estas verda.'],
  ['blanka', 'branco', 'adjetivo', 'Cores', '⚪', 'La lakto estas blanka.'],
  ['nigra', 'preto', 'adjetivo', 'Cores', '⚫', 'La kato estas nigra.'],
  ['flava', 'amarelo', 'adjetivo', 'Cores', '🟡', 'La suno estas flava.'],
  // Mais adjetivos com mal- (o contrário)
  ['bela', 'bonito/bonita', 'adjetivo', 'Essenciais', '✨', 'Ŝi estas bela.'],
  ['malbela', 'feio/feia', 'adjetivo', 'Essenciais', '🚫', 'Tio estas malbela.'],
  ['nova', 'novo', 'adjetivo', 'Essenciais', '🆕', 'Mia domo estas nova.'],
  ['malnova', 'velho (coisa)', 'adjetivo', 'Essenciais', '📜', 'Tio estas malnova libro.'],
  // Comer, beber e morar: mais algumas palavras, e -il- (instrumento)
  ['kafo', 'café', 'substantivo', 'Alimentação e Restaurantes', '☕', 'Mi trinkas kafon.'],
  ['frukto', 'fruta', 'substantivo', 'Alimentação e Restaurantes', '🍎', 'Mi manĝas frukton.'],
  ['ĉambro', 'quarto', 'substantivo', 'Essenciais', '🚪', 'Mia ĉambro estas malgranda.'],
  ['kuirejo', 'cozinha (lugar de cozinhar, -ej-)', 'substantivo', 'Essenciais', '🍳', 'Mia patrino estas en la kuirejo.'],
  ['tranĉilo', 'faca (instrumento de cortar, -il-)', 'substantivo', 'Essenciais', '🔪', 'Mi tranĉas panon per tranĉilo.'],
  // Preposições (en/al/de já aparecem em frases soltas; aqui, o grupo sur/sub/kun/sen)
  ['sur', 'sobre', 'preposição', 'Essenciais', null, 'La libro estas sur la tablo.'],
  ['sub', 'sob', 'preposição', 'Essenciais', null, 'La kato estas sub la tablo.'],
  ['kun', 'com', 'preposição', 'Essenciais', null, 'Mi iras kun mia amiko.'],
  ['sen', 'sem', 'preposição', 'Essenciais', null, 'Kafo sen sukero.'],
];

export const VOCAB_EO = buildVocab('eo', ROWS);
