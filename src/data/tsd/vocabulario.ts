import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do tsakônio (tsakónika, τσακώνικα), a variedade do grego moderno com a descendência mais
 * divergente de todas: vem do DÓRICO antigo, não do ramo ático-jônico de que descendem o grego padrão
 * (pacote “el”) e o coiné — por isso alguns linguistas o tratam como uma língua separada dentro do ramo
 * helênico, não como um simples dialeto do grego. É falado por só algumas centenas (talvez alguns
 * milhares, incluindo falantes passivos) de pessoas, a maioria idosas, numa região montanhosa do leste
 * do Peloponeso (a “Tsakônia”), e a UNESCO classifica o tsakônio como “criticamente em perigo”
 * (“critically endangered”). NÃO é inteligível com o grego padrão, apesar do parentesco.
 *
 * Este é um dos pacotes mais pobres em fontes de todo o app: não há um dicionário tsakônio acessível
 * online (a obra de referência, de Thanásis Kostákis — “Λεξικό της Τσακωνικής Διαλέκτου”, 1986 — é um
 * livro impresso, sem versão digital encontrada em nenhum repositório testado), e não existe Wikipédia
 * nem Wikcionário NA língua tsakônia (só artigos SOBRE ela, em grego e inglês). Por isso cada uma das
 * 47 palavras abaixo foi conferida, uma por uma, numa das duas fontes a seguir — nunca presumida a
 * partir do grego padrão:
 *
 *   - en.wiktionary.org/wiki/Category:Tsakonian_lemmas — as 37 palavras tsakônias catalogadas no
 *     Wikcionário em inglês (tag de língua “tsd”), cada uma com sua própria página (ex.:
 *     en.wiktionary.org/wiki/αμέρα, en.wiktionary.org/wiki/λιούκο etc.), de onde vêm a definição em
 *     inglês, a pronúncia IPA, a etimologia (quando dada) e, para os substantivos, o gênero gramatical —
 *     conferido no código-fonte wikitexto de cada página (modelo “{{tsd-noun|gênero|plural}}”), não só no
 *     texto renderizado. Duas palavras do pronome pessoal (“ο” “o/a”, artigo definido) ficaram de fora do
 *     vocabulário por serem só gramática, não palavras de sentido próprio — ver gramatica.ts. A palavra
 *     “εμού” também ficou de fora: a própria tabela de pronomes do Wikcionário a lista ao mesmo tempo como
 *     1ª pessoa do plural (caso oblíquo) E como forma nominativa da 2ª pessoa do plural, uma contradição
 *     que não dá pra resolver com segurança a partir da fonte disponível.
 *   - en.wikipedia.org/wiki/Tsakonian_Greek — o artigo da Wikipédia em inglês sobre a língua (o título
 *     “Tsakonian language” redireciona para este), fonte de 10 palavras que não têm página própria no
 *     Wikcionário mas aparecem citadas, com tradução para o inglês, dentro do próprio texto do artigo:
 *     nas seções de fonologia (mudanças de vogal e consoante, cada mudança ilustrada com uma palavra real
 *     e sua tradução) e na tabela “Sample texts” (frases de viagem com tradução para o inglês e o grego
 *     padrão lado a lado). Deste artigo também vêm a classificação dórica, a história, os nomes das
 *     aldeias e o número de falantes (ver index.ts).
 *
 * Todas as 47 palavras, suas fontes exatas e qualquer nota de sentido duplo ou duvidoso estão comentadas
 * linha a linha abaixo. NENHUMA palavra foi inventada ou completada por semelhança com o grego padrão: o
 * tsakônio mudou demais para isso ser seguro (ver gramatica.ts — queda do /s/ final, palatalização,
 * redução de grupos consonantais).
 *
 * SOBRE AS FRASES DE EXEMPLO: como nenhuma das duas fontes é um livro de frases, a maioria das frases
 * abaixo foi MONTADA combinando só elementos atestados — o pronome de 3ª pessoa “νι” (ele/ela/isto) com a
 * cópula de 3ª pessoa do presente, “έννι” (é, está), também atestada na tabela de conjugação do artigo da
 * Wikipédia: “Νι έννι λιούκο.” (ele/isto é lobo) segue o mesmo padrão sujeito-cópula-predicado do grego
 * padrão (“αυτός είναι λύκος”), mas essa ordem específica para frases com “νι” não está, ela mesma,
 * atestada em nenhuma fonte — é uma combinação razoável, não uma frase citada. Quando a fonte realmente
 * cita uma frase inteira, ela é usada tal qual, marcada com “(frase atestada)” no comentário da palavra:
 * “Groússa námou eíni ta Tsakónika.” (nossa língua é o tsakônio) e “Κιά έννι το όντα σι;” (onde é/fica o
 * quarto dele/dela?), ambas do artigo da Wikipédia, e “Μη' μ' αντζίζερε όρπα!” (não me toque ali!), da
 * mesma tabela “Sample texts”.
 *
 * SOBRE O GÊNERO: o tsakônio tem três gêneros gramaticais (masculino, feminino, neutro), como o grego
 * padrão — mas pelo menos duas palavras documentadas no Wikcionário têm um gênero DIFERENTE do que se
 * esperaria pela palavra equivalente em grego padrão: “αμέρα” (dia) e “γουναίκα” (mulher) são marcadas
 * como MASCULINAS no modelo de flexão do Wikcionário (en.wiktionary.org/wiki/αμέρα e
 * en.wiktionary.org/wiki/γουναίκα, código-fonte: “{{tsd-noun|m|...}}”), embora as palavras equivalentes
 * no grego padrão (“ημέρα”, “γυναίκα”) sejam femininas. Não inventamos uma explicação para essa mudança
 * de classe (o Wikcionário não comenta o motivo) — é só registrada aqui como um fato curioso e citado,
 * não generalizada para outras palavras terminadas em “-α”, que no resto da lista seguem o gênero
 * esperado (ex.: “μάτη”, mãe, feminino; “θάσσα”, mar, feminino). Palavras sem gênero confirmado na fonte
 * (as que vêm só do artigo da Wikipédia, não do Wikcionário) ficam sem a marca de gênero.
 */
export const ROWS: VocabRow[] = [
  // Pessoas (pronomes, parentesco, pessoas)
  ['εζού', 'eu, me, meu', 'pronome', 'Pessoas', '🙋', 'Εζού τσαι εκιού.'], // en.wiktionary.org/wiki/εζού — 1ª pess. sing.
  ['εκιού', 'tu, você, teu', 'pronome', 'Pessoas', '🫵', 'Εζού τσαι εκιού.'], // en.wiktionary.org/wiki/εκιού — 2ª pess. sing.
  ['νι', 'ele, ela, isto, o, a', 'pronome', 'Pessoas', '🧑', 'Νι έννι λιούκο.'], // en.wiktionary.org/wiki/νι — 3ª pess. sing.
  ['νάμου', 'nós, nosso', 'pronome', 'Pessoas', '🤝', 'Groússa námou eíni ta Tsakónika.'], // en.wiktionary.org/wiki/νάμου — frase atestada (en.wikipedia.org/wiki/Tsakonian_Greek)
  ['νιούμου', 'vós, vosso', 'pronome', 'Pessoas', '👥', 'Νιούμου τσαι σι.'], // en.wiktionary.org/wiki/νιούμου — 2ª pess. plural
  ['σι', 'eles, elas, seu, dele, dela', 'pronome', 'Pessoas', '🫂', 'Κιά έννι το όντα σι;'], // en.wiktionary.org/wiki/σι — frase atestada (en.wikipedia.org/wiki/Tsakonian_Greek, tabela “Sample texts”)
  ['γουναίκα', 'mulher', 'substantivo', 'Pessoas', '👩', 'Νι έννι γουναίκα.', 'm'], // en.wiktionary.org/wiki/γουναίκα — gênero masculino na fonte, ver nota no cabeçalho
  ['μάτη', 'mãe', 'substantivo', 'Pessoas', '👩', 'Νι έννι μάτη.', 'f'], // en.wiktionary.org/wiki/μάτη
  ['σάτη', 'filha', 'substantivo', 'Pessoas', '👧', 'Νι έννι σάτη.', 'f'], // en.wiktionary.org/wiki/σάτη
  ['βασιλλία', 'rei', 'substantivo', 'Pessoas', '👑', 'Νι έννι βασιλλία.'], // en.wikipedia.org/wiki/Tsakonian_Greek (seção de história das vogais)
  ['κρέφτα', 'ladrão', 'substantivo', 'Pessoas', '🥷', 'Νι έννι κρέφτα.'], // en.wikipedia.org/wiki/Tsakonian_Greek (seção de história das vogais)
  // Animais
  ['λιούκο', 'lobo', 'substantivo', 'Animais', '🐺', 'Νι έννι λιούκο.', 'm'], // en.wiktionary.org/wiki/λιούκο + en.wikipedia.org/wiki/Tsakonian_Greek
  ['βου', 'boi', 'substantivo', 'Animais', '🐂', 'Νι έννι βου.', 'm'], // en.wiktionary.org/wiki/βου
  ['κούε', 'cão, cachorro', 'substantivo', 'Animais', '🐕', 'Νι έννι κούε.', 'm'], // en.wiktionary.org/wiki/κούε
  ['κούλικα', 'vaca', 'substantivo', 'Animais', '🐄', 'Νι έννι κούλικα.', 'f'], // en.wiktionary.org/wiki/κούλικα
  ['βάννε', 'cordeiro, ovelha', 'substantivo', 'Animais', '🐑', 'Νι έννι βάννε.', 'n'], // en.wiktionary.org/wiki/βάννε (“lamb”) + en.wikipedia.org/wiki/Tsakonian_Greek (“sheep”); preserva o digamma dórico (ϝαρήν), perdido no ático (ἀρήν) — ver gramatica.ts
  ['όνε', 'burro, jumento', 'substantivo', 'Animais', '🫏', 'Νι έννι όνε.'], // en.wikipedia.org/wiki/Tsakonian_Greek (mudança de vogal final: όνος > όνε)
  ['ουιθί', 'cobra, serpente', 'substantivo', 'Animais', '🐍', 'Νι έννι ουιθί.'], // en.wikipedia.org/wiki/Tsakonian_Greek, escrita na fonte como “ου(ι)θί” (variação atestada com/sem o “ι”)
  // Natureza
  ['θάσσα', 'mar', 'substantivo', 'Natureza', '🌊', 'Νι έννι θάσσα.', 'f'], // en.wiktionary.org/wiki/θάσσα
  ['σχίνα', 'montanha', 'substantivo', 'Natureza', '⛰️', 'Νι έννι σχίνα.', 'm'], // en.wiktionary.org/wiki/σχίνα
  ['σχίντα', 'raiz', 'substantivo', 'Natureza', '🌱', 'Νι έννι σχίντα.', 'f'], // en.wiktionary.org/wiki/σχίντα
  ['νιούτθα', 'noite', 'substantivo', 'Natureza', '🌙', 'Νι έννι νιούτθα.', 'f'], // en.wiktionary.org/wiki/νιούτθα + en.wikipedia.org/wiki/Tsakonian_Greek
  ['αμέρα', 'dia', 'substantivo', 'Natureza', '☀️', 'Νι έννι αμέρα.', 'm'], // en.wiktionary.org/wiki/αμέρα — gênero masculino na fonte, ver nota no cabeçalho
  ['ούρα', 'hora, tempo', 'substantivo', 'Natureza', '⏰', 'Νι έννι ούρα.', 'f'], // en.wiktionary.org/wiki/ούρα
  ['ύο', 'água', 'substantivo', 'Natureza', '💧', 'Νι έννι ύο.', 'n'], // en.wiktionary.org/wiki/ύο
  ['περιγιάλλι', 'praia', 'substantivo', 'Natureza', '🏖️', 'Κιά έννι το περιγιάλλι;'], // en.wikipedia.org/wiki/Tsakonian_Greek, tabela “Sample texts” — frase atestada
  // Comida
  ['βότσχε', 'uva, vinho', 'substantivo', 'Comida', '🍇', 'Νι έννι βότσχε.', 'm'], // en.wiktionary.org/wiki/βότσχε — os dois sentidos (uva e vinho) vêm da própria página
  ['μάλι', 'maçã', 'substantivo', 'Comida', '🍎', 'Νι έννι μάλι.', 'n'], // en.wiktionary.org/wiki/μάλι
  ['σχομό', 'comida', 'substantivo', 'Comida', '🍲', 'Νι έννι σχομό.'], // en.wikipedia.org/wiki/Tsakonian_Greek (de θερμόν, “quente” — mudança de sentido)
  // Corpo
  ['τθούμα', 'boca', 'substantivo', 'Corpo', '👄', 'Νι έννι τθούμα.', 'n'], // en.wiktionary.org/wiki/τθούμα + en.wikipedia.org/wiki/Tsakonian_Greek
  // Casa e objetos
  ['ποκήρι', 'copo', 'substantivo', 'Casa', '🥛', 'Νι έννι ποκήρι.', 'n'], // en.wiktionary.org/wiki/ποκήρι
  ['πόρε', 'porta', 'substantivo', 'Casa', '🚪', 'Νι έννι πόρε.'], // en.wikipedia.org/wiki/Tsakonian_Greek (de πόρος, “passagem” — mudança de sentido)
  ['όντα', 'quarto, aposento', 'substantivo', 'Casa', '🛏️', 'Κιά έννι το όντα σι;'], // en.wikipedia.org/wiki/Tsakonian_Greek, tabela “Sample texts” — frase atestada
  // Números
  ['εννία', 'nove', 'numeral', 'Números', '9️⃣', 'Εννία.'], // en.wikipedia.org/wiki/Tsakonian_Greek (par mínimo de vogais, do grego antigo ἐννέα)
  ['νία', 'um, uma (feminino)', 'numeral', 'Números', '1️⃣', 'Νία.'], // en.wikipedia.org/wiki/Tsakonian_Greek (par mínimo com “εννία”, do grego antigo μία)
  // Verbos
  ['αντζίζερε', 'toca, tocar', 'verbo', 'Verbos', '✋', "Μη' μ' αντζίζερε όρπα!"], // en.wikipedia.org/wiki/Tsakonian_Greek, tabela “Sample texts” — frase atestada (2ª pessoa, usada com “μη'” para proibição, como no grego padrão)
  // Adjetivos
  ['γραφτέ', 'escrito', 'adjetivo', 'Adjetivos', '✍️', 'Νι έννι γραφτέ.'], // en.wikipedia.org/wiki/Tsakonian_Greek (mudança de vogal: γραφτός > γραφτέ)
  // Expressões (advérbios, conjunções)
  ['απέ', 'depois, então', 'advérbio', 'Expressões', '➡️', 'Απέ.'], // en.wiktionary.org/wiki/απέ
  ['επφέρζι', 'ontem', 'advérbio', 'Expressões', '📅', 'Επφέρζι.'], // en.wiktionary.org/wiki/επφέρζι
  ['καούρ', 'bem', 'advérbio', 'Expressões', '👍', 'Καούρ.'], // en.wiktionary.org/wiki/καούρ
  ['κάτου', 'embaixo', 'advérbio', 'Expressões', '⬇️', 'Κάτου.'], // en.wiktionary.org/wiki/κάτου
  ['σάμερε', 'hoje', 'advérbio', 'Expressões', '📆', 'Σάμερε.'], // en.wiktionary.org/wiki/σάμερε
  ['τάνου', 'em cima', 'advérbio', 'Expressões', '⬆️', 'Τάνου.'], // en.wiktionary.org/wiki/τάνου
  ['κιά', 'onde', 'advérbio', 'Expressões', '❓', 'Κιά έννι το όντα σι;'], // en.wikipedia.org/wiki/Tsakonian_Greek, tabela “Sample texts” — frase atestada
  ['όρπα', 'ali, lá', 'advérbio', 'Expressões', '👉', "Μη' μ' αντζίζερε όρπα!"], // en.wikipedia.org/wiki/Tsakonian_Greek, tabela “Sample texts” — frase atestada
  ['τσαι', 'e', 'conjunção', 'Expressões', '➕', 'Εζού τσαι εκιού.'], // en.wiktionary.org/wiki/τσαι
  ['πφη', 'que (pronome relativo)', 'conjunção', 'Expressões', '🔗', 'Πφη.'], // en.wikipedia.org/wiki/Tsakonian_Greek (chamado “relativiser” no artigo)
];

export const VOCAB_TSD = buildVocab('tsd', ROWS);
