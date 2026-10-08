import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do Ido — a segunda língua CONSTRUÍDA com curso de verdade no app (depois do
 * esperanto), pedido do Matheus: “cria o equivalente (A1) para os outros idiomas artificiais”.
 * O Ido não tem gênero gramatical — e vai além do esperanto: as raízes de parentesco (frato,
 * filio) são neutras por padrão, e os sufixos -ulo (masculino) e -ino (feminino) são OPCIONAIS,
 * usados só quando o sexo importa (diferente do esperanto, que assume o masculino como padrão:
 * “frato” já é “irmão”, e precisa de -ino pra virar “irmã”). Por isso nenhuma linha usa o campo de
 * gênero. Palavras e frases conferidas contra: Wikipédia (“Ido”, “Ido grammar”, “Comparison
 * between Esperanto and Ido”); Wikcionário (verbetes individuais, citados palavra por palavra nos
 * comentários do currículo); o vocabulário básico inglês-Ido da Ido-España/Uniono por la Linguo
 * Internaciona Ido (idolinguo.org.uk/engido.htm); e a lista de frases da Omniglot
 * (omniglot.com/language/phrases/ido.htm). Idioma incompleto: só o suficiente para o nível A1 por
 * enquanto — ver `incomplete` em index.ts.
 */
export const ROWS: VocabRow[] = [
  // Expressões
  ['saluto', 'olá', 'interjeição', 'Expressões', '👋', 'Saluto, Petro!'],
  ['adio', 'tchau/adeus', 'interjeição', 'Expressões', '👋', 'Adio, amiko!'],
  ['danko', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Danko pro la pano!'],
  ['bonvolez', 'por favor', 'interjeição', 'Expressões', '🙏', 'Bonvolez, donez a me aquo.'],
  ['pardonez', 'desculpe/perdão', 'verbo', 'Expressões', '🙏', 'Pardonez me!'],
  // “yes”/“no” são mesmo escritos assim no Ido — foram adotados quase sem mudança do inglês
  // (idolinguo.org.uk: “yes”; “no (opposite of yes) no”; confirmado também na Omniglot).
  ['yes', 'sim', 'advérbio', 'Essenciais', '👍', 'Yes, me esas Maria.'],
  ['no', 'não', 'advérbio', 'Essenciais', '👎', 'No, me ne esas Petro.'],
  // Essenciais (palavras de função e perguntas)
  ['e', 'e', 'conjunção', 'Essenciais', null, 'Pano e aquo.'],
  ['o', 'ou', 'conjunção', 'Essenciais', null, 'Aquo o vino?'],
  ['ma', 'mas', 'conjunção', 'Essenciais', null, 'Me esas mikra, ma bona.'],
  ['tre', 'muito', 'advérbio', 'Essenciais', null, 'Il esas tre granda.'],
  ['anke', 'também', 'advérbio', 'Essenciais', null, 'Me anke parolas Ido.'],
  ['quo', 'o que', 'pronome', 'Essenciais', '❓', 'Quo esas ito?'],
  ['qua', 'quem/qual', 'pronome', 'Essenciais', '❓', 'Qua vu esas?'],
  ['ube', 'onde', 'advérbio', 'Essenciais', '❓', 'Ube esas la domo?'],
  ['quale', 'como', 'advérbio', 'Essenciais', '❓', 'Quale vu standas?'],
  // “ka” no começo da frase transforma ela numa pergunta de sim/não — igual ao “ĉu” do esperanto.
  ['ka', 'partícula de pergunta sim/não', 'partícula', 'Essenciais', '❓', 'Ka vu esas Ana?'],
  // Pessoas: pronomes. “vu” é o “você” padrão (singular, neutro); o Ido também tem “tu” (íntimo,
  // raro na prática) — ver `formalMarkers`.
  ['me', 'eu', 'pronome', 'Pessoas', '🙋', 'Me esas Ana.'],
  ['vu', 'você', 'pronome', 'Pessoas', '🫵', 'Vu esas bona amiko.'],
  ['il', 'ele', 'pronome', 'Pessoas', '👨', 'Il esas mea patro.'],
  ['el', 'ela', 'pronome', 'Pessoas', '👩', 'El esas mea matro.'],
  ['ni', 'nós', 'pronome', 'Pessoas', '🙌', 'Ni esas amiki.'],
  ['li', 'eles/elas', 'pronome', 'Pessoas', '👥', 'Li esas bona amiki.'],
  // Pessoas: nome e família
  ['nomo', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Quo esas vua nomo?'],
  ['amiko', 'amigo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Petro esas mea amiko.'],
  ['familio', 'família', 'substantivo', 'Pessoas', '👪', 'Mea familio esas granda.'],
  ['patro', 'pai', 'substantivo', 'Pessoas', '👨', 'Mea patro nomesas Johano.'],
  // “matro” (não “patrino”!) — o Ido usa raízes INDEPENDENTES pra pai/mãe, em vez de derivar “mãe”
  // de “pai” com sufixo, como faz o esperanto (patro/patrino). Fonte: Wikcionário “matro”.
  ['matro', 'mãe', 'substantivo', 'Pessoas', '👩', 'Mea matro nomesas Maria.'],
  // “fratulo”/“fratino” — a raiz “frato” é neutra (não é “irmão” por padrão); -ulo marca o
  // masculino e -ino o feminino, os dois opcionais. Fonte: idolinguo.org.uk/engido.htm.
  ['fratulo', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Mea fratulo esas yuna.'],
  ['fratino', 'irmã', 'substantivo', 'Pessoas', '🧑', 'Mea fratino esas bona.'],
  ['filiulo', 'filho', 'substantivo', 'Pessoas', '🧒', 'Mea filiulo esas mikra.'],
  ['filiino', 'filha', 'substantivo', 'Pessoas', '🧒', 'Mea filiino lernas Ido.'],
  ['studento', 'estudante', 'substantivo', 'Pessoas', '🎓', 'Me esas studento.'],
  // Verbos-chave (esar NUNCA muda de forma por pessoa: me/vu/il/ni/li esas — todos “esas”)
  ['esar', 'ser/estar', 'verbo', 'Verbos-chave', '🧑', 'Me esas felica.'],
  ['havar', 'ter', 'verbo', 'Verbos-chave', '🤲', 'Me havas hundo.'],
  ['nomesar', 'chamar-se', 'verbo', 'Verbos-chave', '🏷️', 'Me nomesas Ana.'],
  ['parolar', 'falar', 'verbo', 'Verbos-chave', '🗣️', 'El parolas Ido.'],
  ['lojar', 'morar', 'verbo', 'Verbos-chave', '🏠', 'Ni lojas en granda urbo.'],
  ['irar', 'ir', 'verbo', 'Verbos-chave', '🚶', 'Me iras a la urbo.'],
  ['manjar', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'Ni manjas pano.'],
  ['drinkar', 'beber', 'verbo', 'Verbos-chave', '🥤', 'Me drinkas aquo.'],
  ['amar', 'amar', 'verbo', 'Verbos-chave', '❤️', 'Il amas sua familio.'],
  ['volar', 'querer', 'verbo', 'Verbos-chave', '💭', 'Me volas aquo.'],
  ['savar', 'saber', 'verbo', 'Verbos-chave', '🧠', 'Me savas ito.'],
  ['vidar', 'ver', 'verbo', 'Verbos-chave', '👀', 'Me vidas la domo.'],
  // Casa e cidade
  ['domo', 'casa', 'substantivo', 'Essenciais', '🏠', 'Mea domo esas mikra.'],
  ['urbo', 'cidade', 'substantivo', 'Essenciais', '🏙️', 'Ito esas granda urbo.'],
  ['libro', 'livro', 'substantivo', 'Essenciais', '📖', 'Me lektas libro.'],
  ['hundo', 'cachorro', 'substantivo', 'Essenciais', '🐕', 'Mea hundo esas granda.'],
  ['kato', 'gato', 'substantivo', 'Essenciais', '🐈', 'Elua kato esas mikra.'],
  ['cielo', 'céu', 'substantivo', 'Essenciais', '🌤️', 'La cielo esas blua.'],
  // Adjetivos essenciais. “mikra”/“mala” são raízes PRÓPRIAS (do grego “mikro-” e do prefixo
  // mal-), não “mal-” + “granda”/“bona” como no esperanto — o Ido evita empilhar mal- sempre que
  // existe uma palavra pronta. Fonte: idolinguo.org.uk/engido.htm; Wikcionário “mala” (mal- + -a).
  ['granda', 'grande', 'adjetivo', 'Essenciais', '📏', 'La domo esas granda.'],
  ['mikra', 'pequeno', 'adjetivo', 'Essenciais', '📏', 'La hundo esas mikra.'],
  ['bona', 'bom', 'adjetivo', 'Essenciais', '👍', 'La pano esas bona.'],
  ['mala', 'mau/ruim', 'adjetivo', 'Essenciais', '👎', 'La vetero esas mala.'],
  // Tempo (advérbios)
  ['hodie', 'hoje', 'advérbio', 'Essenciais', '📅', 'Hodie me lernas.'],
  ['morge', 'amanhã', 'advérbio', 'Essenciais', '📅', 'Morge ni iros.'],
  ['hiere', 'ontem', 'advérbio', 'Essenciais', '📅', 'Hiere me lektis.'],
  // Alimentação e Restaurantes
  ['aquo', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'La aquo esas kolda.'],
  ['pano', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'La pano esas bona.'],
  ['lakto', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'La lakto esas blanka.'],
  ['vino', 'vinho', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'La vino esas reda.'],
  ['fromajo', 'queijo', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'Me manjas fromajo.'],
  // Números (confirmados via Omniglot “Ido numbers” e Wikcionário, entrada a entrada)
  ['un', 'um', 'numeral', 'Números', '1️⃣', 'Un hundo.'],
  ['du', 'dois', 'numeral', 'Números', '2️⃣', 'Du fratuli.'],
  ['tri', 'três', 'numeral', 'Números', '3️⃣', 'Tri amiki.'],
  ['quar', 'quatro', 'numeral', 'Números', '4️⃣', 'Quar libri.'],
  ['kin', 'cinco', 'numeral', 'Números', '5️⃣', 'Kin domi.'],
  ['sis', 'seis', 'numeral', 'Números', '6️⃣', 'Sis kati.'],
  ['sep', 'sete', 'numeral', 'Números', '7️⃣', 'Sep jorni.'],
  ['ok', 'oito', 'numeral', 'Números', '8️⃣', 'Ok yari.'],
  ['non', 'nove', 'numeral', 'Números', '9️⃣', 'Non monati.'],
  ['dek', 'dez', 'numeral', 'Números', '🔟', 'Dek urbi.'],
  ['cent', 'cem', 'numeral', 'Números', '💯', 'La urbo havas cent domi.'],
  // Cores
  ['reda', 'vermelho', 'adjetivo', 'Cores', '🔴', 'La vino esas reda.'],
  ['blua', 'azul', 'adjetivo', 'Cores', '🔵', 'La cielo esas blua.'],
  ['verda', 'verde', 'adjetivo', 'Cores', '🟢', 'Mea libro esas verda.'],
  ['blanka', 'branco', 'adjetivo', 'Cores', '⚪', 'La lakto esas blanka.'],
  ['nigra', 'preto', 'adjetivo', 'Cores', '⚫', 'La kato esas nigra.'],
];

export const VOCAB_IDO = buildVocab('io', ROWS);
