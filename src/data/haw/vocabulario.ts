import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do havaiano (ʻŌlelo Hawaiʻi). Idioma incompleto: por enquanto só o nível A1 (unidades
 * 1 e 2) — ver o campo `incomplete` do pacote. NÃO confundir com o maori (outra língua polinésia,
 * tratada em outro pacote): nenhuma palavra foi reaproveitada entre os dois, cada uma foi conferida
 * separadamente para o havaiano.
 *
 * Fontes conferidas palavra a palavra (busca real, não "achismo"): en.wiktionary.org (seção havaiana
 * de cada verbete, que cita o Hawaiian Dictionary de Pukui & Elbert), en.wikipedia.org/wiki/Hawaiian_
 * language e en.wikipedia.org/wiki/Hawaiian_grammar, Omniglot (omniglot.com/language/phrases|kinship/
 * hawaiian), e reportagens da KHON2 "Aloha Authentic" que citam professores de havaiano.
 *
 * Revisão desta entrega (conferência renovada, palavra a palavra, de todo o arquivo herdado, mais as
 * categorias novas): cada item abaixo foi checado de novo contra en.wiktionary.org (lido direto do
 * wikitexto em inglês, seção "==Hawaiian==", via `action=raw`, para pegar a definição exata sem
 * resumo de terceiros) e contra omniglot.com/language/phrases/hawaiian.php e omniglot.com/language/
 * kinship/hawaiian.htm. wehewehe.org (o dicionário Pukui & Elbert online) bloqueou a consulta direta
 * (HTTP 403) nesta sessão, por isso ele NÃO foi usado como fonte própria aqui — todas as confirmações
 * desta revisão vêm do Wiktionary e do Omniglot citados acima. Itens que passaram por checagem extra
 * por serem menos óbvios: "kaikuaʻana"/"kaikaina" (confirmado: irmão/irmã mais velho(a)/mais novo(a)
 * do MESMO sexo de quem fala — o Wiktionary é explícito nisso, inclusive com nota de uso para
 * "kaikaina"); "polū" (azul, sem etimologia registrada no Wiktionary — por isso não afirmamos se é
 * empréstimo do inglês "blue" ou não); "hea" (onde/qual, do proto-polinésio nuclear *fea); "mauka"/
 * "makai" (confirmados: para a montanha/terra adentro vs. para o mar); "hoʻomaka" (começar); "aʻo"
 * (confirmado que cobre tanto "ensinar" quanto "aprender", com as formas direcionais "aʻo mai" =
 * aprender e "aʻo aku" = ensinar); e a diferença entre "ʻekahi" (usado para CONTAR em sequência,
 * "um, dois, três…") e "hoʻokahi" (usado para se referir a UM objeto só) — por isso a frase de
 * exemplo de "ʻekahi" no vocabulário usa "hoʻokahi", de propósito, não é erro de cópia.
 *
 * Categorias novas acrescentadas nesta entrega (Corpo, Casa, e mais itens de Natureza/Animais), cada
 * palavra nova confirmada pelo wikitexto havaiano do Wiktionary (action=raw): "lima" (mão — ênfase:
 * NÃO é a mesma entrada do numeral "cinco", mas é a mesma palavra/raiz nas duas funções, um padrão
 * comum em língua polinésia, repetido no mapa de etimologia), "wāwae" (pé, perna — o Wiktionary dá os
 * dois sentidos juntos, "leg, foot"), "poʻo" (cabeça), "maka" (olho), "waha" (boca), "pepeiao"
 * (orelha), "ihu" (nariz), "puʻuwai" (coração), "mauna" (montanha), "hōkū" (estrela), "makani"
 * (vento), "honu" (tartaruga, especificamente a tartaruga marinha), "manō" (tubarão), "ipu" (cabaça,
 * vasilha — também o nome do tambor de cabaça usado na hula), "kīʻaha" (copo) e "moena" (esteira,
 * tradicionalmente usada também como cama).
 */
export const ROWS: VocabRow[] = [
  // Expressões
  ['aloha', 'olá / amor / adeus', 'interjeição', 'Expressões', '👋', 'Aloha! Pehea ʻoe?'],
  ['aloha kakahiaka', 'bom dia', 'interjeição', 'Expressões', '🌅', 'Aloha kakahiaka, e Kai!'],
  ['aloha ʻauinalā', 'boa tarde', 'interjeição', 'Expressões', '🌤️', 'Aloha ʻauinalā, e nā hoa!'],
  ['aloha ahiahi', 'boa noite (ao entardecer)', 'interjeição', 'Expressões', '🌇', 'Aloha ahiahi, e Lani!'],
  ['e komo mai', 'bem-vindo(a)', 'interjeição', 'Expressões', '🚪', 'E komo mai! Pehea ʻoe?'],
  ['a hui hou', 'até logo, até a próxima', 'interjeição', 'Expressões', '🤙', 'A hui hou, e nā hoa!'],
  ['mahalo', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Mahalo no kou kōkua!'],
  ['mahalo nui loa', 'muito obrigado', 'interjeição', 'Expressões', '🙏', 'Mahalo nui loa no ka poi!'],
  ['e ʻoluʻolu', 'por favor', 'interjeição', 'Expressões', '🙏', 'Hoʻokahi wai, e ʻoluʻolu.'],
  ['e kala mai', 'desculpa, com licença', 'interjeição', 'Expressões', '🙏', 'E kala mai iaʻu!'],
  ['ʻae', 'sim', 'advérbio', 'Expressões', '👍', 'ʻAe, maikaʻi au.'],
  ['ʻaʻole', 'não', 'advérbio', 'Expressões', '👎', 'ʻAʻole, mahalo.'],

  // Essenciais (perguntas, artigos, partículas gramaticais)
  ['pehea', 'como', 'advérbio', 'Essenciais', '❓', 'Pehea ʻoe i kēia lā?'],
  ['ʻo wai', 'quem', 'pronome', 'Essenciais', '❓', 'ʻO wai kou inoa?'],
  ['aha', 'o quê', 'pronome', 'Essenciais', '❓', 'He aha kēia?'],
  ['hea', 'onde, qual', 'pronome', 'Essenciais', '❓', 'No hea mai ʻoe?'],
  ['ʻehia', 'quantos', 'pronome', 'Essenciais', '❓', 'ʻEhia kou mau kaikaina?'],
  ['kēia', 'este, esta', 'pronome', 'Essenciais', '👉', 'He hale nani kēia.'],
  ['me', 'com', 'preposição', 'Essenciais', null, 'Ke hele nei au me koʻu hoa.'],
  ['ka', 'o, a (artigo definido)', 'artigo', 'Essenciais', null, 'Nani ka hale.'],
  ['ke', 'o, a (artigo definido antes de a-, e-, o- e k-)', 'artigo', 'Essenciais', null, 'Nui ke kula.'],
  ['nā', 'os, as (artigo definido plural)', 'artigo', 'Essenciais', null, 'Nani nā manu.'],
  ['he', 'um, uma (artigo indefinido)', 'artigo', 'Essenciais', null, 'He hale kēia.'],
  ['ua', 'marca que a ação já aconteceu (passado/perfeito)', 'partícula', 'Essenciais', null, 'Ua ʻai ka pōpoki i ka iʻa.'],
  ['ʻo', 'marca o sujeito antes de nomes e pronomes', 'partícula', 'Essenciais', null, 'ʻO ia koʻu kaikuaʻana.'],
  ['hale', 'casa', 'substantivo', 'Essenciais', '🏠', 'Liʻiliʻi koʻu hale.'],
  ['kai', 'mar', 'substantivo', 'Essenciais', '🌊', 'Nani ke kai.'],
  ['ʻāina', 'terra', 'substantivo', 'Essenciais', '🌍', 'Nani ka ʻāina.'],
  ['lā', 'sol, dia', 'substantivo', 'Essenciais', '☀️', 'Nani ka lā.'],
  ['mahina', 'lua, mês', 'substantivo', 'Essenciais', '🌙', 'Nani ka mahina.'],
  ['manu', 'pássaro', 'substantivo', 'Essenciais', '🐦', 'Liʻiliʻi ka manu.'],
  ['mauka', 'para a montanha, terra adentro', 'advérbio', 'Essenciais', '⛰️', 'Ke hele nei mākou i mauka.'],
  ['makai', 'para o mar', 'advérbio', 'Essenciais', '🌊', 'Ke hele nei mākou i makai.'],
  ['ʻīlio', 'cachorro', 'substantivo', 'Essenciais', '🐕', 'Nani koʻu ʻīlio.'],
  ['pōpoki', 'gato', 'substantivo', 'Essenciais', '🐈', 'Ua ʻai ka pōpoki i ka iʻa.'],
  ['maikaʻi', 'bom', 'adjetivo', 'Essenciais', '👍', 'Maikaʻi au.'],
  ['nui', 'grande', 'adjetivo', 'Essenciais', '📏', 'Nui ka hale.'],
  ['liʻiliʻi', 'pequeno', 'adjetivo', 'Essenciais', '📏', 'Liʻiliʻi ke keiki.'],
  ['nani', 'bonito', 'adjetivo', 'Essenciais', '🌸', 'Nani ke kai.'],
  ['hou', 'novo', 'adjetivo', 'Essenciais', '✨', 'Hou koʻu hale.'],
  ['kahiko', 'velho, antigo', 'adjetivo', 'Essenciais', '🏺', 'Kahiko kēia mele.'],
  ['pau', 'terminado, pronto', 'adjetivo', 'Essenciais', '✅', 'Pau ka hana.'],
  ['kula', 'escola', 'substantivo', 'Essenciais', '🏫', 'Ke hele nei au i ke kula.'],
  ['wikiwiki', 'rápido, veloz', 'adjetivo', 'Essenciais', '⚡', 'Wikiwiki ka ʻīlio.'],

  // Pessoas (pronomes e família)
  ['au', 'eu', 'pronome', 'Pessoas', '🙋', 'Ke hele nei au i ke kula.'],
  ['ʻoe', 'você, tu', 'pronome', 'Pessoas', '🫵', 'Pehea ʻoe?'],
  ['ia', 'ele, ela', 'pronome', 'Pessoas', '🧑', 'ʻO ia koʻu hoa.'],
  ['kākou', 'nós (todos, com quem ouve)', 'pronome', 'Pessoas', '🙌', 'E hoʻomaka kākou!'],
  ['mākou', 'nós (sem incluir quem ouve)', 'pronome', 'Pessoas', '🙌', 'Mākou mai Hawaiʻi.'],
  ['ʻoukou', 'vocês', 'pronome', 'Pessoas', '👥', 'Pehea ʻoukou?'],
  ['lākou', 'eles, elas', 'pronome', 'Pessoas', '👥', 'Ke hele nei lākou i ke kai.'],
  ['inoa', 'nome', 'substantivo', 'Pessoas', '🏷️', 'ʻO wai kou inoa?'],
  ['ʻohana', 'família', 'substantivo', 'Pessoas', '👪', 'Nui koʻu ʻohana.'],
  ['makuahine', 'mãe', 'substantivo', 'Pessoas', '👩', 'Maikaʻi koʻu makuahine.'],
  ['makua kāne', 'pai', 'substantivo', 'Pessoas', '👨', 'Nui koʻu makua kāne.'],
  ['keiki', 'criança, filho(a)', 'substantivo', 'Pessoas', '🧒', 'Nani kēia keiki.'],
  ['kaikamahine', 'filha', 'substantivo', 'Pessoas', '👧', 'Liʻiliʻi koʻu kaikamahine.'],
  ['kaikuaʻana', 'irmão/irmã mais velho(a), do mesmo sexo de quem fala', 'substantivo', 'Pessoas', '🧑', 'ʻO ia koʻu kaikuaʻana.'],
  ['kaikaina', 'irmão/irmã mais novo(a), do mesmo sexo de quem fala', 'substantivo', 'Pessoas', '🧒', 'Liʻiliʻi koʻu kaikaina.'],
  ['kaikunāne', 'irmão (dito por uma mulher)', 'substantivo', 'Pessoas', '👦', 'ʻO ia koʻu kaikunāne.'],
  ['kaikuahine', 'irmã (dito por um homem)', 'substantivo', 'Pessoas', '👧', 'ʻO ia koʻu kaikuahine.'],
  ['kupuna wahine', 'avó', 'substantivo', 'Pessoas', '👵', 'Nani koʻu kupuna wahine.'],
  ['kupuna kāne', 'avô', 'substantivo', 'Pessoas', '👴', 'Kahiko koʻu kupuna kāne.'],
  ['hoa', 'amigo(a)', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'ʻO ia kaʻu hoa.'],
  ['wahine', 'mulher', 'substantivo', 'Pessoas', '👩', 'Nani ka wahine.'],
  ['kāne', 'homem, marido', 'substantivo', 'Pessoas', '👨', 'Maikaʻi ke kāne.'],
  ['kumu', 'professor(a)', 'substantivo', 'Pessoas', '👩‍🏫', 'Maikaʻi koʻu kumu.'],
  ['haumāna', 'aluno(a)', 'substantivo', 'Pessoas', '🧑‍🎓', 'Nui nā haumāna.'],

  // Verbos-chave
  ['ʻai', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'Ke ʻai nei au i ke kalo.'],
  ['inu', 'beber', 'verbo', 'Verbos-chave', '🥤', 'Ke inu nei māua i ka wai.'],
  ['hele', 'ir, andar', 'verbo', 'Verbos-chave', '🚶', 'Ke hele nei au i ke kula.'],
  ['noho', 'morar, sentar, ficar', 'verbo', 'Verbos-chave', '🏠', 'Ke noho nei au ma Honolulu.'],
  ['makemake', 'querer, gostar', 'verbo', 'Verbos-chave', '❤️', 'Makemake au i ka poi.'],
  ['ʻike', 'ver, saber', 'verbo', 'Verbos-chave', '🧠', 'ʻIke au iā ʻoe.'],
  ['aʻo', 'ensinar, aprender', 'verbo', 'Verbos-chave', '📚', 'E aʻo kākou i ka ʻŌlelo Hawaiʻi!'],
  ['hoʻomaka', 'começar', 'verbo', 'Verbos-chave', '🏁', 'E hoʻomaka kākou!'],

  // Alimentação
  ['wai', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Ke inu nei au i ka wai.'],
  ['ʻono', 'delicioso, saboroso', 'adjetivo', 'Alimentação e Restaurantes', '😋', 'ʻOno kēia kalo.'],
  ['kalo', 'taro', 'substantivo', 'Alimentação e Restaurantes', '🌱', 'Maikaʻi ke kalo.'],
  ['poi', 'poi (purê de taro)', 'substantivo', 'Alimentação e Restaurantes', '🥣', 'ʻOno ka poi.'],
  ['moa', 'galinha, frango', 'substantivo', 'Alimentação e Restaurantes', '🐔', 'Nui ka moa.'],
  ['puaʻa', 'porco', 'substantivo', 'Alimentação e Restaurantes', '🐖', 'ʻOno ka puaʻa.'],
  ['iʻa', 'peixe', 'substantivo', 'Alimentação e Restaurantes', '🐟', 'ʻOno ka iʻa.'],

  // Corpo
  ['lima', 'mão', 'substantivo', 'Corpo', '✋', 'Nui koʻu lima.'],
  ['wāwae', 'pé, perna', 'substantivo', 'Corpo', '🦶', 'Nui koʻu wāwae.'],
  ['poʻo', 'cabeça', 'substantivo', 'Corpo', '👤', 'Nui koʻu poʻo.'],
  ['maka', 'olho', 'substantivo', 'Corpo', '👁️', 'Nani kou maka.'],
  ['waha', 'boca', 'substantivo', 'Corpo', '👄', 'Nui ka waha.'],
  ['pepeiao', 'orelha', 'substantivo', 'Corpo', '👂', 'Nui ka pepeiao.'],
  ['ihu', 'nariz', 'substantivo', 'Corpo', '👃', 'Liʻiliʻi ka ihu.'],
  ['puʻuwai', 'coração', 'substantivo', 'Corpo', '❤️', 'Maikaʻi koʻu puʻuwai.'],

  // Casa e objetos
  ['ipu', 'cabaça, vasilha', 'substantivo', 'Casa', '🏺', 'Nani kēia ipu.'],
  ['kīʻaha', 'copo', 'substantivo', 'Casa', '🥛', 'Hoʻokahi kīʻaha, e ʻoluʻolu.'],
  ['moena', 'esteira', 'substantivo', 'Casa', '🛏️', 'Hou koʻu moena.'],

  // Natureza (mais itens)
  ['mauna', 'montanha', 'substantivo', 'Natureza', '⛰️', 'Nani ka mauna.'],
  ['hōkū', 'estrela', 'substantivo', 'Natureza', '⭐', 'Nani ka hōkū.'],
  ['makani', 'vento', 'substantivo', 'Natureza', '💨', 'Nui ka makani.'],

  // Animais (mais itens)
  ['honu', 'tartaruga', 'substantivo', 'Animais', '🐢', 'Nani ka honu.'],
  ['manō', 'tubarão', 'substantivo', 'Animais', '🦈', 'Nui ka manō.'],

  // Números
  ['ʻekahi', 'um', 'numeral', 'Números', '1️⃣', 'Hoʻokahi kope, e ʻoluʻolu.'],
  ['ʻelua', 'dois', 'numeral', 'Números', '2️⃣', 'ʻElua keiki koʻu.'],
  ['ʻekolu', 'três', 'numeral', 'Números', '3️⃣', 'ʻEkolu hoa koʻu.'],
  ['ʻehā', 'quatro', 'numeral', 'Números', '4️⃣', 'ʻEhā mahina.'],
  ['ʻelima', 'cinco', 'numeral', 'Números', '5️⃣', 'ʻElima lā.'],
  ['ʻeono', 'seis', 'numeral', 'Números', '6️⃣', 'ʻEono ʻīlio.'],
  ['ʻehiku', 'sete', 'numeral', 'Números', '7️⃣', 'ʻEhiku lā o ka pule.'],
  ['ʻewalu', 'oito', 'numeral', 'Números', '8️⃣', 'ʻEwalu manu.'],
  ['ʻeiwa', 'nove', 'numeral', 'Números', '9️⃣', 'ʻEiwa haumāna.'],
  ['ʻumi', 'dez', 'numeral', 'Números', '🔟', 'ʻUmi kumu ma ke kula.'],

  // Tempo (dias da semana)
  ['Pōʻakahi', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'Hele au i ke kula i ka Pōʻakahi.'],
  ['Pōʻalua', 'terça-feira', 'substantivo', 'Tempo', '📅', 'Hele au i ke kula i ka Pōʻalua.'],
  ['Pōʻakolu', 'quarta-feira', 'substantivo', 'Tempo', '📅', 'Hele au i ke kula i ka Pōʻakolu.'],
  ['Pōʻahā', 'quinta-feira', 'substantivo', 'Tempo', '📅', 'Hele au i ke kula i ka Pōʻahā.'],
  ['Pōʻalima', 'sexta-feira', 'substantivo', 'Tempo', '📅', 'Hele au i ke kai i ka Pōʻalima.'],
  ['Pōʻaono', 'sábado', 'substantivo', 'Tempo', '📅', 'Noho au ma ka hale i ka Pōʻaono.'],
  ['Lāpule', 'domingo', 'substantivo', 'Tempo', '📅', 'Noho koʻu ʻohana ma ka hale i ka Lāpule.'],

  // Cores
  ['ʻulaʻula', 'vermelho', 'adjetivo', 'Cores', '🔴', 'ʻUlaʻula ka iʻa.'],
  ['melemele', 'amarelo', 'adjetivo', 'Cores', '🟡', 'Melemele ka lā.'],
  ['polū', 'azul', 'adjetivo', 'Cores', '🔵', 'Polū ke kai.'],
  ['ʻōmaʻomaʻo', 'verde', 'adjetivo', 'Cores', '🟢', 'ʻŌmaʻomaʻo ke kalo.'],
  ['keʻokeʻo', 'branco', 'adjetivo', 'Cores', '⚪', 'Keʻokeʻo ka poi.'],
  ['ʻeleʻele', 'preto', 'adjetivo', 'Cores', '⚫', 'ʻEleʻele koʻu ʻīlio.'],

  // Cultura (palavras havaianas conhecidas mundo afora)
  ['hula', 'dança hula', 'substantivo', 'Cultura', '💃', 'Nani ka hula.'],
  ['ukulele', 'ukulele (instrumento musical)', 'substantivo', 'Cultura', '🎸', 'Ke hoʻokani nei au i ke ukulele.'],
  ['lūʻau', 'banquete tradicional havaiano, lūʻau', 'substantivo', 'Cultura', '🌺', 'Nui ka lūʻau.'],
];

export const VOCAB_HAW = buildVocab('haw', ROWS);
