import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário da interlíngua (IALA) — segunda língua CONSTRUÍDA do app com curso de verdade
 * (pedido do Matheus, 08/10/2026: "cria o equivalente (A1) para os outros idiomas artificiais"),
 * seguindo o esperanto (`eo/`) como modelo estrutural. Interlíngua não tem gênero gramatical: a
 * maioria das palavras de parentesco usa raízes PRÓPRIAS para cada sexo em vez de sufixo, diferente
 * do esperanto ("patre"/"matre", "fratre"/"soror" — não "patre"/"patrina"); só "filio"/"filia" muda
 * só a vogal final (-o/-a), e mesmo assim por regra de prototipagem, não por concordância. Por isso
 * nenhuma linha usa o campo de gênero.
 *
 * Fontes: B. C. Sexton (British Interlingua Society, 1979; reimpresso pela Union Mundial pro
 * Interlingua, 2019), "English-Interlingua: A Basic Vocabulary" (interlingua.com/archivos/en/
 * English-Interlingua%20-%20A%20basic%20vocabulary.pdf) — o vocabulário-fonte principal, com o
 * resumo oficial da gramática de Gode & Blair na última página; Wiktionary (confirmação palavra a
 * palavra, sobretudo "novem"=nove × "nove"=novo, que são parecidas mas diferentes); Wikipédia
 * ("Interlingua", "Interlingua grammar"). Nenhuma palavra inventada — todas conferidas contra o
 * dicionário oficial.
 */
export const ROWS: VocabRow[] = [
  // Expressões
  ['bon die', 'olá/bom dia', 'interjeição', 'Expressões', '👋', 'Bon die, Petro!'],
  ['adeo', 'tchau/adeus', 'interjeição', 'Expressões', '👋', 'Adeo, amico!'],
  ['a revider', 'até a vista (até rever)', 'interjeição', 'Expressões', '👋', 'A revider, amicos!'],
  ['gratias', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Gratias pro le pan!'],
  ['per favor', 'por favor', 'interjeição', 'Expressões', '🙏', 'Da me aqua, per favor.'],
  ['pardono', 'desculpe/perdão', 'interjeição', 'Expressões', '🙏', 'Pardono! Io non sape.'],
  ['si', 'sim', 'advérbio', 'Essenciais', '👍', 'Si, io es Ana.'],
  // Essenciais (palavras de função e perguntas)
  ['no', 'não', 'advérbio', 'Essenciais', '👎', 'No, io non es Petro.'],
  ['e', 'e', 'conjunção', 'Essenciais', null, 'Pan e aqua.'],
  ['o', 'ou', 'conjunção', 'Essenciais', null, 'Aqua o vino?'],
  ['ma', 'mas', 'conjunção', 'Essenciais', null, 'Io es parve, ma bon.'],
  ['multo', 'muito', 'advérbio', 'Essenciais', null, 'Ille es multo grande.'],
  ['anque', 'também', 'advérbio', 'Essenciais', null, 'Io anque parla Interlingua.'],
  ['que', 'o que', 'pronome', 'Essenciais', '❓', 'Que es isto?'],
  ['qui', 'quem', 'pronome', 'Essenciais', '❓', 'Qui es tu?'],
  ['ubi', 'onde', 'advérbio', 'Essenciais', '❓', 'Ubi es le domo?'],
  // "como sta vos?" é a frase sourceada no próprio dicionário oficial para "how do you do?"
  ['como', 'como', 'advérbio', 'Essenciais', '❓', 'Como sta vos?'],
  // partícula opcional pra perguntas de sim/não, no começo da frase (como o "est-ce que" francês) —
  // a interlíngua também aceita só inverter verbo+sujeito ou mudar a entonação, sem "esque"
  ['esque', 'partícula de pergunta sim/não', 'partícula', 'Essenciais', '❓', 'Esque tu es Ana?'],
  ['quando', 'quando', 'advérbio', 'Essenciais', '❓', 'Quando es le autobus?'],
  ['proque', 'por que', 'advérbio', 'Essenciais', '❓', 'Proque tu non veni?'],
  ['pro', 'para/por', 'preposição', 'Essenciais', null, 'Isto es pro tu.'],
  ['con', 'com', 'preposição', 'Essenciais', null, 'Io vade con mi amico.'],
  ['sin', 'sem', 'preposição', 'Essenciais', null, 'Caffe sin sucro.'],
  // "a" + "le" contrai para "al" — detalhe real da gramática (ver gramática, tópico pronomes/artigos)
  ['a', 'a/para', 'preposição', 'Essenciais', null, 'Nos va al citate deman.'],
  // Casa e cidade
  ['domo', 'casa', 'substantivo', 'Essenciais', '🏠', 'Mi domo es parve.'],
  ['citate', 'cidade', 'substantivo', 'Essenciais', '🏙️', 'Isto es un grande citate.'],
  ['libro', 'livro', 'substantivo', 'Essenciais', '📖', 'Io lege un libro.'],
  ['can', 'cachorro', 'substantivo', 'Essenciais', '🐕', 'Mi can es grande.'],
  ['catto', 'gato', 'substantivo', 'Essenciais', '🐈', 'Su catto es nigre.'],
  ['celo', 'céu', 'substantivo', 'Essenciais', '🌤️', 'Le celo es blau hodie.'],
  // Adjetivos essenciais (SEMPRE invariáveis: não concordam em gênero nem número com o substantivo)
  ['grande', 'grande', 'adjetivo', 'Essenciais', '📏', 'Le domo es grande.'],
  ['parve', 'pequeno', 'adjetivo', 'Essenciais', '📏', 'Le can es parve, ma le catto es grande.'],
  ['bon', 'bom', 'adjetivo', 'Essenciais', '👍', 'Le pan es bon.'],
  ['mal', 'mau/ruim', 'adjetivo', 'Essenciais', '👎', 'Le tempore es mal.'],
  ['belle', 'bonito/bonita', 'adjetivo', 'Essenciais', '✨', 'Illa es belle.'],
  // Tempo
  // "die" (dia) é diferente de "morir" (morrer) — não confundir com o inglês "die"
  ['die', 'dia', 'substantivo', 'Essenciais', '📅', 'Hodie es un belle die.'],
  ['hodie', 'hoje', 'advérbio', 'Essenciais', '📅', 'Hodie es lunedi.'],
  ['deman', 'amanhã', 'advérbio', 'Essenciais', '📅', 'Deman nos va al citate.'],
  ['heri', 'ontem', 'advérbio', 'Essenciais', '📅', 'Heri io mangiava pan.'],
  ['nocte', 'noite', 'substantivo', 'Essenciais', '🌙', 'Bon nocte!'],
  ['hora', 'hora', 'substantivo', 'Essenciais', '🕐', 'Qual hora es il?'],
  ['septimana', 'semana', 'substantivo', 'Essenciais', '🗓️', 'Un septimana ha septe dies.'],
  // Pessoas: pronomes (tu = informal/singular; vos = formal E plural, sem equivalente único)
  ['io', 'eu', 'pronome', 'Pessoas', '🙋', 'Io es Ana.'],
  ['tu', 'você/tu (informal)', 'pronome', 'Pessoas', '🫵', 'Tu es mi amico.'],
  ['vos', 'você (formal)/vocês', 'pronome', 'Pessoas', '🫵', 'Vos es multo amabile.'],
  ['ille', 'ele', 'pronome', 'Pessoas', '👨', 'Ille es mi patre.'],
  ['illa', 'ela', 'pronome', 'Pessoas', '👩', 'Illa es mi matre.'],
  ['nos', 'nós', 'pronome', 'Pessoas', '🙌', 'Nos es amicos.'],
  ['illes', 'eles/elas', 'pronome', 'Pessoas', '👥', 'Illes es fratres.'],
  // Pessoas: nome e família
  ['nomine', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Qual es tu nomine?'],
  ['amico', 'amigo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Petro es mi bon amico.'],
  ['familia', 'família', 'substantivo', 'Pessoas', '👪', 'Mi familia es grande.'],
  ['patre', 'pai', 'substantivo', 'Pessoas', '👨', 'Mi patre se appella Johan.'],
  ['matre', 'mãe', 'substantivo', 'Pessoas', '👩', 'Mi matre ama su familia.'],
  ['fratre', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Io ha un fratre e un soror.'],
  ['soror', 'irmã', 'substantivo', 'Pessoas', '🧑', 'Mi soror es juvene.'],
  ['filio', 'filho', 'substantivo', 'Pessoas', '🧒', 'Mi filio se appella Marco.'],
  ['filia', 'filha', 'substantivo', 'Pessoas', '🧒', 'Mi filia ama animales.'],
  ['puero', 'menino', 'substantivo', 'Pessoas', '🧒', 'Le puero joca.'],
  ['puera', 'menina', 'substantivo', 'Pessoas', '🧒', 'Le puera canta.'],
  // Verbos-chave (esser e haber NUNCA mudam por pessoa: io/tu/ille/nos/vos/illes es — todos "es")
  ['esser', 'ser/estar', 'verbo', 'Verbos-chave', '🧑', 'Io es felice.'],
  ['haber', 'ter', 'verbo', 'Verbos-chave', '🤲', 'Io ha un can.'],
  // vader: um dos 3 verbos irregulares (esser, haber, vader) — presente é "va", não "vade"
  ['vader', 'ir', 'verbo', 'Verbos-chave', '🚶', 'Io va a domo.'],
  ['parlar', 'falar', 'verbo', 'Verbos-chave', '🗣️', 'Illa parla Interlingua ben.'],
  ['viver', 'morar/viver', 'verbo', 'Verbos-chave', '🏠', 'Nos vive in Brasil.'],
  ['mangiar', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'Io mangia pan cata die.'],
  ['biber', 'beber', 'verbo', 'Verbos-chave', '🥤', 'Io bibe aqua fresc.'],
  ['amar', 'amar', 'verbo', 'Verbos-chave', '❤️', 'Ille ama su can.'],
  ['voler', 'querer', 'verbo', 'Verbos-chave', '💭', 'Io vole aqua, per favor.'],
  ['saper', 'saber', 'verbo', 'Verbos-chave', '🧠', 'Io sape parlar Interlingua.'],
  ['vider', 'ver', 'verbo', 'Verbos-chave', '👀', 'Io vide le celo blau.'],
  ['appellar', 'chamar/chamar-se', 'verbo', 'Verbos-chave', '🏷️', 'Io me appella Ana.'],
  ['comprender', 'entender', 'verbo', 'Verbos-chave', '🧠', 'Io non comprende.'],
  // Alimentação e Restaurantes
  ['aqua', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Le aqua es fresc.'],
  ['pan', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Le pan es bon.'],
  ['lacte', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'Le lacte es blanc.'],
  ['vino', 'vinho', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'Le vino es rubie.'],
  ['caseo', 'queijo', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'Io ama caseo.'],
  // Números
  ['un', 'um', 'numeral', 'Números', '1️⃣', 'Un can.'],
  ['duo', 'dois', 'numeral', 'Números', '2️⃣', 'Duo cattos.'],
  ['tres', 'três', 'numeral', 'Números', '3️⃣', 'Tres amicos.'],
  ['quatro', 'quatro', 'numeral', 'Números', '4️⃣', 'Quatro libros.'],
  ['cinque', 'cinco', 'numeral', 'Números', '5️⃣', 'Cinque domos.'],
  ['sex', 'seis', 'numeral', 'Números', '6️⃣', 'Sex dies.'],
  ['septe', 'sete', 'numeral', 'Números', '7️⃣', 'Septe annos.'],
  ['octo', 'oito', 'numeral', 'Números', '8️⃣', 'Octo horas.'],
  // "novem" (nove) não é "nove" (novo) — falsos amigos entre si, ver gramática
  ['novem', 'nove', 'numeral', 'Números', '9️⃣', 'Novem citates.'],
  ['dece', 'dez', 'numeral', 'Números', '🔟', 'Dece amicos.'],
  ['cento', 'cem', 'numeral', 'Números', '💯', 'Le citate ha cento domos.'],
  // Cores
  ['rubie', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Le vino es rubie.'],
  ['blau', 'azul', 'adjetivo', 'Cores', '🔵', 'Le celo es blau.'],
  ['verde', 'verde', 'adjetivo', 'Cores', '🟢', 'Le herba es verde.'],
  ['blanc', 'branco', 'adjetivo', 'Cores', '⚪', 'Le lacte es blanc.'],
  ['nigre', 'preto', 'adjetivo', 'Cores', '⚫', 'Le catto es nigre.'],
  ['jalne', 'amarelo', 'adjetivo', 'Cores', '🟡', 'Le sol es jalne.'],
];

export const VOCAB_IA = buildVocab('ia', ROWS);
