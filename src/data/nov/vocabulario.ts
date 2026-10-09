import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do novial — a terceira leva de línguas construídas com curso de verdade (depois de
 * esperanto/interlíngua e da segunda leva ido/klingon/toki pona/lojban/interlíngua/volapük, pedido
 * do Matheus em 08/10/2026). O novial foi publicado em 1928 pelo linguista dinamarquês Otto
 * Jespersen (que antes apoiava o ido) em "An International Language": o nome é um acrônimo de
 * "NOV" (novo) + "I" (internacional) + "A" (auxiliar) + "L" (língua).
 *
 * Fontes: Otto Jespersen, "An International Language" (1928) — livro completo em 58 capítulos
 * HTML no archive.org (item AILjespersen), capítulos AILsosp (sons/ortografia), AILnumb (plural),
 * AILpro (pronomes), AILadj (adjetivos), AILcase (caso), AILinfimp/AILprspst/AILfutcon/AILperplu
 * (tempos verbais); "Novial Lexike" (Jespersen, 1930, dicionário novial-inglês/francês/alemão,
 * digitado por Don Blaheta — site original blahedo.org/novial caiu em 2026, usado via Wayback
 * Machine, web.archive.org/web/2005/http://www.blahedo.org/novial/nl/<letra>.txt); Wikipédia
 * (inglês) "Novial" e o curso Wikibooks "Novial" (adaptação de "O Cão dos Baskerville", fiel à
 * gramática de Jespersen) só para cross-check e exemplos de frase. NUNCA usado: "Novial 98"
 * (reforma não-oficial de outra pessoa) nem a Wikipédia EM novial (pode ter neologismo moderno não
 * documentado por Jespersen).
 *
 * Toda frase de exemplo abaixo usa SÓ as palavras desta lista (ou partículas gramaticais
 * confirmadas: li/un/non/ob/sal/did/vud/ha/had + as terminações -s/-i/-n/-m) — nunca uma palavra
 * nova. Duas lacunas honestas: o dicionário de 1930 não tem uma saudação fixa tipo "olá" nem uma
 * fórmula pronta de "por favor" — "bon jorne" (literalmente "bom dia") é uma frase composta a
 * partir de DUAS palavras atestadas separadamente (bon = bom, jorne = dia), do mesmo jeito que toda
 * frase de exemplo deste curso é composta com vocabulário e gramática reais, nunca inventada como
 * palavra nova. "Céu" (citado como "siele" numa tradução do Pai-Nosso na Wikipédia) não foi
 * confirmado no Lexike nem no livro de 1928, por isso ficou de fora do vocabulário. O pronome
 * interrogativo "quem" usa "kel" (confirmado como pronome relativo/interrogativo no livro de 1928 e
 * no Wikibooks) — a entrada "que" do Lexike (junto com "qui"/"qum") é só mais uma grafia de "o quê",
 * não uma palavra separada para "quem".
 */
export const ROWS: VocabRow[] = [
  // Expressões
  ['yes', 'sim', 'advérbio', 'Expressões', '👍', 'Yes, me es Ana.'],
  ['non', 'não', 'advérbio', 'Expressões', '👎', 'Non, me non es Petro.'],
  ['danka', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Danka por li pane!'],
  ['pardona', 'desculpe/perdão', 'interjeição', 'Expressões', '🙏', 'Pardona! Me non sava.'],
  ['adie', 'tchau/adeus', 'interjeição', 'Expressões', '👋', 'Adie, amike!'],
  // "bon jorne" é uma composição de duas palavras atestadas (bon + jorne), não um idioma fixo
  // documentado — ver nota no cabeçalho. Mesma prática já usada no curso pra toda frase de exemplo.
  ['bon jorne', 'olá/bom dia', 'interjeição', 'Expressões', '👋', 'Bon jorne, Petro!'],
  // Essenciais
  ['e', 'e', 'conjunção', 'Essenciais', null, 'Pane e aque.'],
  ['o', 'ou', 'conjunção', 'Essenciais', null, 'Aque o milke?'],
  ['ma', 'mas', 'conjunção', 'Essenciais', null, 'Me es mikri, ma boni.'],
  ['tre', 'muito', 'advérbio', 'Essenciais', null, 'Lo es tre grandi.'],
  ['anke', 'também', 'advérbio', 'Essenciais', null, 'Me anke parla Novial.'],
  ['qui', 'o que', 'pronome', 'Essenciais', '❓', 'Qui vu voli?'],
  ['kel', 'quem', 'pronome', 'Essenciais', '❓', 'Kel es vu?'],
  ['vor', 'onde', 'advérbio', 'Essenciais', '❓', 'Vor es li hause?'],
  ['qualim', 'como', 'advérbio', 'Essenciais', '❓', 'Qualim es li libre?'],
  // partícula de pergunta sim/não, no início da frase, sem mudar a ordem — ver gramática
  ['ob', 'partícula de pergunta sim/não', 'partícula', 'Essenciais', '❓', 'Ob vu es Ana?'],
  ['a', 'a/para', 'preposição', 'Essenciais', null, 'Nus vada a li urbe.'],
  ['kun', 'com', 'preposição', 'Essenciais', null, 'Me vada kun men amike.'],
  ['sin', 'sem', 'preposição', 'Essenciais', null, 'Me vada sin vu.'],
  ['por', 'para/por', 'preposição', 'Essenciais', null, 'Li libre es por vu.'],
  ['hause', 'casa', 'substantivo', 'Essenciais', '🏠', 'Men hause es mikri.'],
  ['urbe', 'cidade', 'substantivo', 'Essenciais', '🏙️', 'Me vida un grandi urbe.'],
  ['libre', 'livro', 'substantivo', 'Essenciais', '📖', 'Me have un libre.'],
  ['grandi', 'grande', 'adjetivo', 'Essenciais', '📏', 'Li hause es grandi.'],
  ['mikri', 'pequeno', 'adjetivo', 'Essenciais', '📏', 'Li libre es mikri.'],
  ['boni', 'bom', 'adjetivo', 'Essenciais', '👍', 'Li pane es boni.'],
  ['mali', 'mau/ruim', 'adjetivo', 'Essenciais', '👎', 'Li die es mali.'],
  ['beli', 'bonito/bonita', 'adjetivo', 'Essenciais', '✨', 'La es beli.'],
  ['die', 'dia', 'substantivo', 'Essenciais', '📅', 'Disdi es un beli die.'],
  ['disdi', 'hoje', 'advérbio', 'Essenciais', '📅', 'Disdi es un boni die.'],
  ['morge', 'amanhã', 'advérbio', 'Essenciais', '📅', 'Morge nus sal vada a li urbe.'],
  ['yer', 'ontem', 'advérbio', 'Essenciais', '📅', 'Yer me did manja pane.'],
  ['nokte', 'noite', 'substantivo', 'Essenciais', '🌙', 'Bon nokte!'],
  ['hore', 'hora', 'substantivo', 'Essenciais', '🕐', 'Me non sava li hore.'],
  ['semane', 'semana', 'substantivo', 'Essenciais', '🗓️', 'Un semane have sep dies.'],
  // Pessoas: pronomes (lo = ele, la = ela, le = ele/ela comum; nus/vus/les = plurais)
  ['me', 'eu', 'pronome', 'Pessoas', '🙋', 'Me es Ana.'],
  ['vu', 'você/tu', 'pronome', 'Pessoas', '🫵', 'Vu es men amike.'],
  ['lo', 'ele', 'pronome', 'Pessoas', '👨', 'Lo es men patro.'],
  ['la', 'ela', 'pronome', 'Pessoas', '👩', 'La es men matra.'],
  ['le', 'ele/ela', 'pronome', 'Pessoas', '🧑', 'Le es boni amike.'],
  ['nus', 'nós', 'pronome', 'Pessoas', '🙌', 'Nus es amikes.'],
  ['vus', 'vocês', 'pronome', 'Pessoas', '🫵', 'Vus es tre boni.'],
  ['les', 'eles/elas', 'pronome', 'Pessoas', '👥', 'Les es fratros.'],
  ['nome', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Qui es vun nome?'],
  ['amike', 'amigo/amiga', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Petro es men boni amike.'],
  ['familie', 'família', 'substantivo', 'Pessoas', '👪', 'Men familie es grandi.'],
  // genitivo -n: patro → patron ("do pai") — ver gramática
  ['patro', 'pai', 'substantivo', 'Pessoas', '👨', 'Men patron nome es Johan.'],
  ['matra', 'mãe', 'substantivo', 'Pessoas', '👩', 'Men matra es boni.'],
  // fratro/fratra: a entrada atestada no Lexike é "fratre" (irmão OU irmã, sem distinguir sexo);
  // fratro/fratra usam a mesma regra derivacional -o/-a de filio/filia (ver gramática, gênero)
  ['fratro', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Me have un fratro e un fratra.'],
  ['fratra', 'irmã', 'substantivo', 'Pessoas', '🧑', 'Me have un fratra.'],
  ['filio', 'filho', 'substantivo', 'Pessoas', '🧒', 'Men filion nome es Marko.'],
  ['filia', 'filha', 'substantivo', 'Pessoas', '🧒', 'Men filia es mikri.'],
  ['viro', 'homem', 'substantivo', 'Pessoas', '🧑', 'Li viro parla Novial.'],
  ['fema', 'mulher', 'substantivo', 'Pessoas', '🧑', 'Li fema have un libre.'],
  // Natureza
  ['sune', 'sol', 'substantivo', 'Natureza', '☀️', 'Me vida li sune.'],
  ['lune', 'lua', 'substantivo', 'Natureza', '🌙', 'Li lune es beli.'],
  ['aque', 'água', 'substantivo', 'Natureza', '💧', 'Me drinka li aque.'],
  ['faire', 'fogo', 'substantivo', 'Natureza', '🔥', 'Me vida li faire.'],
  ['tere', 'terra', 'substantivo', 'Natureza', '🌍', 'Li tere es grandi.'],
  ['arbre', 'árvore', 'substantivo', 'Natureza', '🌳', 'Li arbre es grandi.'],
  ['flore', 'flor', 'substantivo', 'Natureza', '🌸', 'Li redi flore es beli.'],
  // Comida
  ['pane', 'pão', 'substantivo', 'Comida', '🍞', 'Li pane es boni.'],
  ['milke', 'leite', 'substantivo', 'Comida', '🥛', 'Li milke es blanki.'],
  ['karne', 'carne', 'substantivo', 'Comida', '🥩', 'Me non manja karne.'],
  ['frukte', 'fruta', 'substantivo', 'Comida', '🍎', 'Li frukte es boni.'],
  // Corpo
  ['kape', 'cabeça', 'substantivo', 'Corpo', '👤', 'Men kape es grandi.'],
  ['manu', 'mão', 'substantivo', 'Corpo', '✋', 'Me have du manus.'],
  ['okule', 'olho', 'substantivo', 'Corpo', '👁️', 'Lo have blu okules.'],
  ['boke', 'boca', 'substantivo', 'Corpo', '👄', 'Lo have un grandi boke.'],
  // Números
  ['un', 'um', 'numeral', 'Números', '1️⃣', 'Un libre.'],
  ['du', 'dois', 'numeral', 'Números', '2️⃣', 'Du amikes.'],
  ['tri', 'três', 'numeral', 'Números', '3️⃣', 'Tri hauses.'],
  ['quar', 'quatro', 'numeral', 'Números', '4️⃣', 'Quar libres.'],
  ['sink', 'cinco', 'numeral', 'Números', '5️⃣', 'Sink dies.'],
  ['six', 'seis', 'numeral', 'Números', '6️⃣', 'Six hores.'],
  ['sep', 'sete', 'numeral', 'Números', '7️⃣', 'Sep dies es un semane.'],
  ['ok', 'oito', 'numeral', 'Números', '8️⃣', 'Ok urbes.'],
  ['nin', 'nove', 'numeral', 'Números', '9️⃣', 'Nin amikes.'],
  ['dek', 'dez', 'numeral', 'Números', '🔟', 'Dek dies.'],
  ['duanti', 'vinte', 'numeral', 'Números', '✨', 'Duanti libres.'],
  ['sent', 'cem', 'numeral', 'Números', '💯', 'Li urbe have sent hauses.'],
  // Cores
  ['redi', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Li redi flore es beli.'],
  ['blu', 'azul', 'adjetivo', 'Cores', '🔵', 'Li libre es blu.'],
  ['verdi', 'verde', 'adjetivo', 'Cores', '🟢', 'Li arbre es verdi.'],
  ['blanki', 'branco', 'adjetivo', 'Cores', '⚪', 'Li milke es blanki.'],
  ['nigri', 'preto', 'adjetivo', 'Cores', '⚫', 'Li nokte es nigri.'],
  // Verbos-chave (presente = raiz pura, a MESMA forma para toda pessoa — ver gramática)
  ['es', 'ser/estar', 'verbo', 'Verbos-chave', '🧑', 'Me es boni.'],
  ['have', 'ter', 'verbo', 'Verbos-chave', '🤲', 'Me have un hause.'],
  ['vada', 'ir', 'verbo', 'Verbos-chave', '🚶', 'Me vada a li urbe.'],
  ['veni', 'vir', 'verbo', 'Verbos-chave', '🚶', 'Vu veni kun me?'],
  // advérbio: boni + -m (depois do -i final) = bonim ("bem") — ver gramática
  ['parla', 'falar', 'verbo', 'Verbos-chave', '🗣️', 'La parla Novial bonim.'],
  ['manja', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'Me manja pane e drinka milke.'],
  ['drinka', 'beber', 'verbo', 'Verbos-chave', '🥤', 'Me drinka milke.'],
  ['vida', 'ver', 'verbo', 'Verbos-chave', '👀', 'Me vida li sune.'],
  ['sava', 'saber', 'verbo', 'Verbos-chave', '🧠', 'Me sava parla Novial.'],
  ['konosa', 'conhecer', 'verbo', 'Verbos-chave', '🤝', 'Me konosa Petro.'],
  ['voli', 'querer', 'verbo', 'Verbos-chave', '💭', 'Me voli aque.'],
  ['fa', 'fazer', 'verbo', 'Verbos-chave', '🛠️', 'Qui vu fa?'],
  ['dikte', 'dizer', 'verbo', 'Verbos-chave', '💬', 'Qui lo dikte?'],
];

export const VOCAB_NOV = buildVocab('nov', ROWS);
