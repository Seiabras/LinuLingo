import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do volapük na forma reformada de Arie de Jong (1931, "Volapük nulik" — ver index.ts
 * pra que isso quer dizer). Pacote mais compacto que o do esperanto: as fontes abertas e confiáveis
 * pro volapük (um idioma com pouquíssimos falantes hoje) são bem mais raras, então todo exemplo e
 * toda palavra aqui foi conferida contra fonte antes de entrar — nada inventado.
 *
 * Fontes: Wikipédia em inglês, "Volapük" (gramática, pronomes, tabela de declinação de "vol"
 * https://en.wikipedia.org/wiki/Volap%C3%BCk); Comprehensive Volapük Grammar (Wikisource,
 * https://en.wikisource.org/wiki/Comprehensive_Volap%C3%BCk_Grammar/Part_1 — frase "Fat löfom
 * soni", "o pai ama o filho", usada aqui e reaproveitada por analogia mecânica, com a MESMA regra
 * de sufixo, em "mot löfof dauti"); Hand-book of Volapük, de Charles E. Sprague, 1888 (Wikisource,
 * vocabulário: https://en.wikisource.org/wiki/Hand-book_of_Volap%C3%BCk/VOCABULARY); Omniglot,
 * "Useful phrases in Volapük" (https://www.omniglot.com/language/phrases/volapuk.php — as frases
 * fixas de saudação, já na forma revisada por de Jong em 1930); andydrummond.net/Volapuk
 * (vocabulário geral). Os pronomes com -a (genitivo, "meu") seguem o PADRÃO da própria língua
 * (oba "meu", de ob "eu" + -a), a mesma regra citada na Wikipédia pra "vola" (de "vol").
 *
 * Volapük tem 4 casos (nominativo sem marca, genitivo -a, dativo -e, acusativo -i — ver gramática),
 * mas nenhuma linha usa o campo de gênero: substantivos não têm gênero gramatical (só os PRONOMES
 * distinguem "om"/"of" quando o falante quer marcar que alguém é homem ou mulher).
 */
export const ROWS: VocabRow[] = [
  // Expressões (Omniglot, phrases in Volapük, forma revisada 1930)
  ['glidö', 'olá', 'interjeição', 'Expressões', '👋', 'Glidö, flen!'],
  ['adyö', 'tchau/adeus', 'interjeição', 'Expressões', '👋', 'Adyö, flen!'],
  ['danö', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Danö, flen!'],
  ['vilöfö', 'de nada (resposta a "obrigado")', 'interjeição', 'Expressões', '🙏', 'Vilöfö!'],
  ['begö', 'por favor', 'interjeição', 'Expressões', '🙏', 'Vat, begö!'],
  ['pardö', 'desculpe/com licença', 'interjeição', 'Expressões', '🙏', 'Pardö!'],
  ['si', 'sim', 'advérbio', 'Essenciais', '👍', 'Si, ob labob kati.'],
  ['nö', 'não', 'advérbio', 'Essenciais', '👎', 'Nö, danö!'],
  // Essenciais (palavras de função)
  ['e', 'e', 'conjunção', 'Essenciais', null, 'Fat e mot.'],
  ['u', 'ou', 'conjunção', 'Essenciais', null, 'Vat u vin?'],
  ['ab', 'mas', 'conjunção', 'Essenciais', null, 'Smalik ab gudik.'],
  ['nem', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Nem oba binon Lina.'],
  // Pessoas: pronomes (todos começam com o-; "ol" serve pra qualquer pessoa, sem forma de tratamento)
  ['ob', 'eu', 'pronome', 'Pessoas', '🙋', 'Ob labob büki.'],
  ['ol', 'você', 'pronome', 'Pessoas', '🫵', 'Ol binol flen gudik.'],
  ['om', 'ele', 'pronome', 'Pessoas', '👨', 'Om binom fat oba.'],
  ['of', 'ela', 'pronome', 'Pessoas', '👩', 'Of binof mot oba.'],
  ['obs', 'nós', 'pronome', 'Pessoas', '🙌', 'Obs binobs flens.'],
  ['oms', 'eles/elas', 'pronome', 'Pessoas', '👥', 'Oms binoms flens.'],
  // Pessoas: família (Wikibooks "Volapük", Hand-book of Volapük)
  ['famül', 'família', 'substantivo', 'Pessoas', '👪', 'Famül oba binon gretik.'],
  ['fat', 'pai', 'substantivo', 'Pessoas', '👨', 'Fat oba binom gudik.'],
  ['mot', 'mãe', 'substantivo', 'Pessoas', '👩', 'Mot oba binof gudik.'],
  ['blod', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Blod oba binom smalik.'],
  ['sör', 'irmã', 'substantivo', 'Pessoas', '🧑', 'Sör oba binof smalik.'],
  ['son', 'filho', 'substantivo', 'Pessoas', '🧒', 'Fat löfom soni.'],
  ['daut', 'filha', 'substantivo', 'Pessoas', '🧒', 'Mot löfof dauti.'],
  ['flen', 'amigo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Flen oba binon gudik.'],
  ['man', 'homem', 'substantivo', 'Pessoas', '🧑', 'Man binom gretik.'],
  ['vom', 'mulher', 'substantivo', 'Pessoas', '🧑', 'Vom binof smalik.'],
  ['cil', 'criança', 'substantivo', 'Pessoas', '🧒', 'Cil binon smalik.'],
  // Verbos-chave (os sufixos de pessoa se colam direto no verbo — ver gramática)
  ['binön', 'ser/estar', 'verbo', 'Verbos-chave', '🧑', 'Ob binob flen.'],
  ['labön', 'ter', 'verbo', 'Verbos-chave', '🤲', 'Ol labol büki.'],
  ['pükön', 'falar', 'verbo', 'Verbos-chave', '🗣️', 'Ob pükob Volapüki.'],
  ['fidön', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'Obs fidobs bodi.'],
  ['dlinön', 'beber', 'verbo', 'Verbos-chave', '🥤', 'Ol dlinol vati.'],
  ['golön', 'ir', 'verbo', 'Verbos-chave', '🚶', 'Ob golob.'],
  ['kömön', 'vir', 'verbo', 'Verbos-chave', '🚶', 'Of kömof.'],
  ['logön', 'ver', 'verbo', 'Verbos-chave', '👀', 'Ob logob sili.'],
  ['vipön', 'querer', 'verbo', 'Verbos-chave', '💭', 'Ob vipob vati.'],
  ['nolön', 'saber', 'verbo', 'Verbos-chave', '🧠', 'Ol nolol nemi oba.'],
  ['löfön', 'amar', 'verbo', 'Verbos-chave', '❤️', 'Ob löfob famüli oba.'],
  ['lifön', 'viver', 'verbo', 'Verbos-chave', '🌱', 'Obs lifobs.'],
  ['sagön', 'dizer', 'verbo', 'Verbos-chave', '🗯️', 'Ol sagol si.'],
  // Casa, cidade e objetos
  ['dom', 'casa', 'substantivo', 'Essenciais', '🏠', 'Dom binon gretik.'],
  ['zif', 'cidade', 'substantivo', 'Essenciais', '🏙️', 'Zif binon gretik.'],
  ['buk', 'livro', 'substantivo', 'Essenciais', '📖', 'Buk binon gretik.'],
  ['dog', 'cachorro', 'substantivo', 'Essenciais', '🐕', 'Dog binon gudik.'],
  ['kat', 'gato', 'substantivo', 'Essenciais', '🐈', 'Kat binon smalik.'],
  ['sil', 'céu', 'substantivo', 'Essenciais', '🌤️', 'Sil binon yulibik.'],
  ['sol', 'sol', 'substantivo', 'Essenciais', '☀️', 'Sol binon gretik.'],
  ['mun', 'lua', 'substantivo', 'Essenciais', '🌙', 'Mun binon smalik.'],
  ['stel', 'estrela', 'substantivo', 'Essenciais', '⭐', 'Stel binon smalik.'],
  ['del', 'dia', 'substantivo', 'Essenciais', '📅', 'Del binon gudik.'],
  ['neit', 'noite', 'substantivo', 'Essenciais', '🌙', 'Neit binon badik.'],
  // Adjetivos essenciais
  ['gudik', 'bom', 'adjetivo', 'Essenciais', '👍', 'Vat binon gudik.'],
  ['badik', 'mau/ruim', 'adjetivo', 'Essenciais', '👎', 'Vin binon badik.'],
  ['gretik', 'grande', 'adjetivo', 'Essenciais', '📏', 'Vol binon gretik.'],
  ['smalik', 'pequeno', 'adjetivo', 'Essenciais', '📏', 'Mun binon smalik.'],
  // Alimentação e Restaurantes
  ['vat', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Ob dlinob vati.'],
  ['bod', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Bod binon gudik.'],
  ['milig', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'Cil dlinon miligi.'],
  ['vin', 'vinho', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'Fat dlinom vini.'],
  ['fömad', 'queijo', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'Ob fidob fömadi.'],
  // Números (Omniglot, Wikisource, Tatoeba — "Bal, tel, kil, fol, lul, mäl, vel, jöl, zül, deg")
  ['bal', 'um', 'numeral', 'Números', '1️⃣', 'Bal dog.'],
  ['tel', 'dois', 'numeral', 'Números', '2️⃣', 'Tel kats.'],
  ['kil', 'três', 'numeral', 'Números', '3️⃣', 'Kil büks.'],
  ['fol', 'quatro', 'numeral', 'Números', '4️⃣', 'Fol doms.'],
  ['lul', 'cinco', 'numeral', 'Números', '5️⃣', 'Lul flens.'],
  ['mäl', 'seis', 'numeral', 'Números', '6️⃣', 'Mäl stels.'],
  ['vel', 'sete', 'numeral', 'Números', '7️⃣', 'Vel zifs.'],
  ['jöl', 'oito', 'numeral', 'Números', '8️⃣', 'Jöl cils.'],
  ['zül', 'nove', 'numeral', 'Números', '9️⃣', 'Zül famüls.'],
  ['deg', 'dez', 'numeral', 'Números', '🔟', 'Deg vins.'],
  // Cores
  ['ledik', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Vin binon ledik.'],
  ['yulibik', 'azul', 'adjetivo', 'Cores', '🔵', 'Sil binon yulibik.'],
  ['glünik', 'verde', 'adjetivo', 'Cores', '🟢', 'Buk binon glünik.'],
  ['vietik', 'branco', 'adjetivo', 'Cores', '⚪', 'Milig binon vietik.'],
  ['blägik', 'preto', 'adjetivo', 'Cores', '⚫', 'Kat binon blägik.'],
  // As duas raízes que dão nome à própria língua: vol (mundo) + pük (língua/fala) = "Volapük"
  ['vol', 'mundo', 'substantivo', 'Essenciais', '🌍', 'Vol binon gretik.'],
  ['pük', 'língua/fala', 'substantivo', 'Essenciais', '🗣️', 'Volapük binon pük gudik.'],
];

export const VOCAB_VO = buildVocab('vo', ROWS);
