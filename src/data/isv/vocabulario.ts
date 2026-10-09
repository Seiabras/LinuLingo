import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do interslavo/medžuslovjansky (código ISO 639-3 real: `isv`, adicionado em abril de
 * 2024, depois de duas tentativas anteriores em 2012 e 2014) — uma língua zonal construída para ser
 * entendida por qualquer eslavo SEM precisar estudá-la, montada com as raízes e as regras
 * gramaticais que as línguas eslavas vivas têm em comum. O projeto atual nasceu em 2017, da fusão de
 * dois projetos dos anos 2000 (Slovianski e Novoslověnsky/Neoslavonic), e é mantido por um comitê de
 * 5 linguistas: Vojtěch Merunka, Jan van Steenbergen, Roberto Lombino, Michał Swat e Pavel Skrylev.
 *
 * Fonte única e oficial: `steen.free.fr/interslavic/` (o site pessoal de Jan van Steenbergen, membro
 * do comitê — confirmado de novo nesta sessão via HTTP direto, já que a conexão HTTPS normal falhou
 * no sandbox). Páginas usadas: `orthography.html` (alfabeto), `nouns.html`/`pronouns.html`/
 * `adjectives.html`/`verbs.html`/`numerals.html`/`syntax.html` (gramática) e `en-ms.html` (o
 * dicionário inglês→interslavo, com ~12.700 linhas). **Armadilhas confirmadas a NUNCA usar como
 * fonte**: `interslavic.org` (domínio de terceiros, hostil, o site oficial avisa) e
 * `neoslavonic.org` (domínio expirado, hoje é parking de anúncios).
 *
 * Interslavo tem SETE casos (nominativo, acusativo, genitivo, dativo, instrumental, locativo,
 * vocativo) e TRÊS gêneros — mas este curso (nível A1) evita martelar a declensão inteira: os
 * substantivos aparecem no vocabulário sempre no nominativo, e cada frase de exemplo só usa um caso
 * diferente quando a própria gramática oficial dá o exemplo exato (ex.: “pet domov”, do capítulo de
 * numerais) ou quando a regra é mecânica e já confirmada na mesma página (ex.: o dativo “domu” e o
 * instrumental “bratom” vêm direto da tabela de declinação de `nouns.html`). Nenhuma forma foi
 * inventada.
 *
 * Interslavo tem alfabeto latino E cirílico, “oficialmente iguais” — este curso usa só o latino,
 * como o app já faz com outras línguas birracionais (ver `alfabeto.ts` para o porquê).
 */
export const ROWS: VocabRow[] = [
  // Expressões
  ['da', 'sim', 'advérbio', 'Expressões', '👍', 'Da, ja jesm Ana.'],
  ['ne', 'não', 'advérbio', 'Expressões', '👎', 'Ne, ja ne jesm Ana.'],
  ['Dobry denj', 'olá/bom dia', 'interjeição', 'Expressões', '👋', 'Dobry denj, Petr!'],
  ['Blagodarju', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Blagodarju za hlěb!'],
  ['Izvinite', 'desculpe', 'interjeição', 'Expressões', '🙏', 'Izvinite, ja ne znaju.'],
  ['Sbogom', 'tchau/adeus', 'interjeição', 'Expressões', '👋', 'Sbogom, prijatelju!'],
  // Essenciais
  ['i', 'e', 'conjunção', 'Essenciais', null, 'Hlěb i voda.'],
  ['ili', 'ou', 'conjunção', 'Essenciais', null, 'Voda ili mlěko?'],
  ['ale', 'mas', 'conjunção', 'Essenciais', null, 'Dom jest maly, ale dobry.'],
  ['mnogo', 'muito', 'advérbio', 'Essenciais', null, 'Dom jest mnogo veliky.'],
  ['takože', 'também', 'advérbio', 'Essenciais', null, 'Ja takože znaju Interslavic.'],
  ['čto', 'o que', 'pronome', 'Essenciais', '❓', 'Čto jest to?'],
  ['kto', 'quem', 'pronome', 'Essenciais', '❓', 'Kto ty jesi?'],
  ['kde', 'onde', 'advérbio', 'Essenciais', '❓', 'Kde jest dom?'],
  ['kak', 'como', 'advérbio', 'Essenciais', '❓', 'Kak jest dom?'],
  // partícula de pergunta sim/não, no início da frase, sem mudar a ordem — ver gramática
  ['či', 'partícula de pergunta', 'partícula', 'Essenciais', '❓', 'Či ty jesi Ana?'],
  ['k', 'a/para (direção)', 'preposição', 'Essenciais', null, 'Ja idu k domu.'],
  ['s', 'com', 'preposição', 'Essenciais', null, 'Ja idu s bratom.'],
  ['bez', 'sem', 'preposição', 'Essenciais', null, 'Ja idu bez brata.'],
  ['za', 'para/por', 'preposição', 'Essenciais', null, 'Blagodarju za hlěb.'],
  ['dom', 'casa', 'substantivo', 'Essenciais', '🏠', 'Dom jest veliky.', 'm'],
  ['grad', 'cidade', 'substantivo', 'Essenciais', '🏙️', 'Grad jest maly.', 'm'],
  ['kniga', 'livro', 'substantivo', 'Essenciais', '📖', 'Kniga jest dobra.', 'f'],
  ['veliky', 'grande', 'adjetivo', 'Essenciais', '📏', 'Dom jest veliky.'],
  ['maly', 'pequeno', 'adjetivo', 'Essenciais', '📏', 'Dom jest maly.'],
  ['dobry', 'bom', 'adjetivo', 'Essenciais', '👍', 'Dom jest dobry.'],
  ['zly', 'mau/ruim', 'adjetivo', 'Essenciais', '👎', 'To jest zly denj.'],
  ['krasny', 'bonito', 'adjetivo', 'Essenciais', '✨', 'Grad jest krasny.'],
  ['denj', 'dia', 'substantivo', 'Essenciais', '📅', 'Denj jest dobry.', 'm'],
  ['dnes', 'hoje', 'advérbio', 'Essenciais', '📅', 'Dnes jest dobry denj.'],
  ['zautra', 'amanhã', 'advérbio', 'Essenciais', '📅', 'Zautra ja idu do grada.'],
  ['včera', 'ontem', 'advérbio', 'Essenciais', '📅', 'Včera, dnes i zautra.'],
  ['noč', 'noite', 'substantivo', 'Essenciais', '🌙', 'Dobra noč!', 'f'],
  ['časina', 'hora', 'substantivo', 'Essenciais', '🕐', 'Jedna časina.', 'f'],
  ['tydenj', 'semana', 'substantivo', 'Essenciais', '🗓️', 'Jedin tydenj.', 'm'],
  // Pessoas: pronomes — “oni” serve para eles/elas (masc./misto); o feminino puro “one” existe mas
  // fica só na nota de gramática, pra não duplicar o item de vocabulário
  ['ja', 'eu', 'pronome', 'Pessoas', '🙋', 'Ja jesm Ana.'],
  ['ty', 'você/tu', 'pronome', 'Pessoas', '🫵', 'Ty jesi Petr?'],
  ['on', 'ele', 'pronome', 'Pessoas', '👨', 'On jest moj otec.'],
  ['ona', 'ela', 'pronome', 'Pessoas', '👩', 'Ona jest moja mati.'],
  ['my', 'nós', 'pronome', 'Pessoas', '🙌', 'My jesmo prijatelji.'],
  // “vy” serve tanto para “vocês” quanto para o “você” formal/respeitoso — ver gramática (T-V)
  ['vy', 'vocês/você (formal)', 'pronome', 'Pessoas', '🫵', 'Vy jeste moji prijatelji.'],
  ['oni', 'eles/elas', 'pronome', 'Pessoas', '👥', 'Oni sut moji brati.'],
  ['ime', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Čto jest tvoje ime?', 'n'],
  ['prijatelj', 'amigo/amiga', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Ty jesi moj prijatelj.', 'm'],
  ['rodina', 'família', 'substantivo', 'Pessoas', '👪', 'Moja rodina jest velika.', 'f'],
  ['otec', 'pai', 'substantivo', 'Pessoas', '👨', 'Moj otec jest dobry.', 'm'],
  ['mati', 'mãe', 'substantivo', 'Pessoas', '👩', 'Moja mati jest dobra.', 'f'],
  ['brat', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Moj brat jest dobry.', 'm'],
  ['sestra', 'irmã', 'substantivo', 'Pessoas', '🧑', 'Moja sestra jest krasna.', 'f'],
  ['syn', 'filho', 'substantivo', 'Pessoas', '🧒', 'Moj syn jest maly.', 'm'],
  ['dočera', 'filha', 'substantivo', 'Pessoas', '🧒', 'Moja dočera jest mala.', 'f'],
  ['muž', 'homem', 'substantivo', 'Pessoas', '🧑', 'Toj muž jest dobry.', 'm'],
  ['žena', 'mulher', 'substantivo', 'Pessoas', '🧑', 'Ta žena jest dobra.', 'f'],
  // Natureza
  ['solnce', 'sol', 'substantivo', 'Natureza', '☀️', 'Solnce jest veliko.', 'n'],
  ['luna', 'lua', 'substantivo', 'Natureza', '🌙', 'Luna jest krasna.', 'f'],
  ['voda', 'água', 'substantivo', 'Natureza', '💧', 'Voda jest dobra.', 'f'],
  ['ogonj', 'fogo', 'substantivo', 'Natureza', '🔥', 'Ja vidžu ogonj.', 'm'],
  ['zemja', 'terra', 'substantivo', 'Natureza', '🌍', 'Zemja jest velika.', 'f'],
  ['drěvo', 'árvore', 'substantivo', 'Natureza', '🌳', 'Drěvo jest veliko.', 'n'],
  ['cvět', 'flor', 'substantivo', 'Natureza', '🌸', 'Cvět jest črveny.', 'm'],
  // Comida
  ['hlěb', 'pão', 'substantivo', 'Comida', '🍞', 'Ja jem hlěb.', 'm'],
  ['mlěko', 'leite', 'substantivo', 'Comida', '🥛', 'Ja piju mlěko.', 'n'],
  ['meso', 'carne', 'substantivo', 'Comida', '🥩', 'Meso jest dobro.', 'n'],
  ['ovoč', 'fruta', 'substantivo', 'Comida', '🍎', 'Ovoč jest dobry.', 'm'],
  // Corpo
  ['glava', 'cabeça', 'substantivo', 'Corpo', '👤', 'Moja glava jest velika.', 'f'],
  ['ruka', 'mão', 'substantivo', 'Corpo', '✋', 'Moja ruka jest mala.', 'f'],
  ['oko', 'olho', 'substantivo', 'Corpo', '👁️', 'Moje oko jest modro.', 'n'],
  ['usta', 'boca', 'substantivo', 'Corpo', '👄', 'Usta i oči.', 'n'],
  // Números
  ['jedin', 'um', 'numeral', 'Números', '1️⃣', 'Jedin dom.'],
  ['dva', 'dois', 'numeral', 'Números', '2️⃣', 'Dva grady.'],
  ['tri', 'três', 'numeral', 'Números', '3️⃣', 'Tri domy.'],
  ['četyri', 'quatro', 'numeral', 'Números', '4️⃣', 'Četyri grady.'],
  ['pet', 'cinco', 'numeral', 'Números', '5️⃣', 'Pet domov.'],
  ['šest', 'seis', 'numeral', 'Números', '6️⃣', 'Šest gradov.'],
  ['sedm', 'sete', 'numeral', 'Números', '7️⃣', 'Sedm domov.'],
  ['osm', 'oito', 'numeral', 'Números', '8️⃣', 'Osm gradov.'],
  ['devet', 'nove', 'numeral', 'Números', '9️⃣', 'Devet domov.'],
  ['deset', 'dez', 'numeral', 'Números', '🔟', 'Deset gradov.'],
  ['dvadeset', 'vinte', 'numeral', 'Números', '✨', 'Dvadeset domov.'],
  ['sto', 'cem', 'numeral', 'Números', '💯', 'Sto gradov.'],
  // Cores
  ['črveny', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Cvět jest črveny.'],
  ['modry', 'azul', 'adjetivo', 'Cores', '🔵', 'Moje oko jest modro.'],
  ['zeleny', 'verde', 'adjetivo', 'Cores', '🟢', 'Drěvo jest zeleno.'],
  ['běly', 'branco', 'adjetivo', 'Cores', '⚪', 'Mlěko jest bělo.'],
  ['črny', 'preto', 'adjetivo', 'Cores', '⚫', 'Noč jest črna.'],
  // Verbos-chave (dados no infinitivo, como no dicionário oficial; as formas conjugadas das frases
  // de exemplo vêm das tabelas confirmadas de `verbs.html`, nunca inventadas)
  ['byti', 'ser/estar', 'verbo', 'Verbos-chave', '🧑', 'Ja jesm Ana.'],
  ['imati', 'ter', 'verbo', 'Verbos-chave', '🤲', 'Ja imaju brata.'],
  ['idti', 'ir', 'verbo', 'Verbos-chave', '🚶', 'Kde ty ideš?'],
  ['govoriti', 'falar', 'verbo', 'Verbos-chave', '🗣️', 'Ona govori dobro.'],
  ['jesti', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'Ja jem hlěb.'],
  ['piti', 'beber', 'verbo', 'Verbos-chave', '🥤', 'Ja piju mlěko.'],
  ['viděti', 'ver', 'verbo', 'Verbos-chave', '👀', 'Ja vidžu solnce.'],
  ['znati', 'saber', 'verbo', 'Verbos-chave', '🧠', 'Ja znaju Interslavic.'],
  ['hotěti', 'querer', 'verbo', 'Verbos-chave', '💭', 'Ja hoču mlěko.'],
  ['dělati', 'fazer', 'verbo', 'Verbos-chave', '🛠️', 'Čto ty dělaješ?'],
  ['kazati', 'dizer', 'verbo', 'Verbos-chave', '💬', 'Čto on kaže?'],
];

export const VOCAB_ISV = buildVocab('isv', ROWS);
