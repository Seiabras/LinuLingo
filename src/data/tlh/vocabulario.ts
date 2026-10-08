import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do klingon (tlhIngan Hol) — a segunda língua construída do app com curso de verdade
 * (depois do esperanto), desta vez da família "artística/de ficção" (criada por Marc Okrand para
 * Star Trek, não para comunicação internacional). Klingon não tem gênero gramatical, por isso
 * nenhuma linha usa o campo de gênero.
 *
 * Diferente do esperanto (que empresta raízes do latim/línguas românicas de propósito, para ficar
 * fácil), o vocabulário do klingon foi inventado do zero por Okrand para soar estranho a ouvidos
 * humanos — por isso é bem mais limitado do que o de uma língua auxiliar. TODA palavra abaixo é
 * conferida contra "The Klingon Dictionary" (Marc Okrand, Pocket Books, 1985/1992), cruzada com
 * klingonska.org (Klingonska Akademien) e, para o vocabulário de família/cores/qualidades, com as
 * páginas de apoio do próprio Klingon Language Institute (kli.org) ao curso de klingon do Duolingo
 * — nenhuma palavra inventada por fã entrou aqui (ex.: "muSHa'", que circula como "amar" pela
 * internet, é invenção da comunidade sem confirmação de Okrand, e por isso NÃO está nesta lista).
 *
 * Klingon não tem uma classe gramatical separada de "adjetivo": uma qualidade (grande, bom, as
 * cores...) é expressa por um VERBO ESTATIVO, que vira "adjetivo" ao seguir um substantivo dentro
 * de um sintagma ("Duj tIn", a nave grande) e vira o predicado de uma frase completa ao vir ANTES
 * do substantivo ("tIn Duj", a nave é grande) — por isso essas linhas usam a classe 'verbo', a
 * classe correta em klingon, e não 'adjetivo'. O mesmo vale para as cores.
 */
export const ROWS: VocabRow[] = [
  // Expressões (saudações e cortesias)
  ['nuqneH', 'oi/olá', 'interjeição', 'Expressões', '👋', 'nuqneH! tlhIngan jIH.'],
  ['Qapla\'', 'sucesso!/tchau', 'interjeição', 'Expressões', '🏆', 'Qapla\'!'],
  ['majQa\'', 'muito bem!/excelente!', 'interjeição', 'Expressões', '👏', 'majQa\'!'],
  ['qatlho\'', 'obrigado(a)', 'interjeição', 'Expressões', '🙏', 'qatlho\'!'],
  // Essenciais: sim/não e qualidades básicas (verbos estativos, a classe "adjetivo" do klingon)
  ['HISlaH', 'sim (resposta a pergunta de sim/não)', 'interjeição', 'Essenciais', '👍', 'tlhIngan Hol Dajatlh\'a\'? HISlaH!'],
  ['HIja\'', 'sim (afirmativa, uso mais amplo que HISlaH)', 'interjeição', 'Essenciais', '👍', 'HIja\'.'],
  ['ghobe\'', 'não', 'interjeição', 'Essenciais', '👎', 'tlhIngan Hol Dajatlh\'a\'? ghobe\'!'],
  ['tIn', 'ser grande', 'verbo', 'Essenciais', '📏', 'tIn Duj.'],
  ['mach', 'ser pequeno', 'verbo', 'Essenciais', '🤏', 'mach puq.'],
  ['QaQ', 'ser bom', 'verbo', 'Essenciais', '✅', 'QaQ Soj.'],
  ['qab', 'ser mau/feio', 'verbo', 'Essenciais', '❌', 'qab veS.'],
  ['chu\'', 'ser novo', 'verbo', 'Essenciais', '🆕', 'chu\' Duj.'],
  ['qan', 'ser velho', 'verbo', 'Essenciais', '👴', 'qan vav.'],
  // Pessoas: pronomes (capazes de linguagem × não capazes — distinção obrigatória em klingon)
  ['jIH', 'eu', 'pronome', 'Pessoas', '🙋', 'tlhIngan jIH.'],
  ['SoH', 'você/tu', 'pronome', 'Pessoas', '🫵', 'tlhIngan SoH\'a\'?'],
  ['ghaH', 'ele/ela (capaz de linguagem)', 'pronome', 'Pessoas', '🧑', 'SuvwI\' ghaH.'],
  ['\'oH', 'ele/ela/isso (não capaz de linguagem)', 'pronome', 'Pessoas', '🔘', 'Duj \'oH.'],
  ['maH', 'nós', 'pronome', 'Pessoas', '🙌', 'tlhIngan maH.'],
  ['tlhIH', 'vocês', 'pronome', 'Pessoas', '👥', 'SuvwI\' tlhIH.'],
  ['chaH', 'eles/elas (capazes de linguagem)', 'pronome', 'Pessoas', '🫂', 'tlhIngan chaH.'],
  ['bIH', 'eles/elas/isso (não capazes de linguagem)', 'pronome', 'Pessoas', '🔘', 'Dujmey bIH.'],
  // Pessoas: família
  ['vav', 'pai', 'substantivo', 'Pessoas', '👨', 'puq legh vav.'],
  ['SoS', 'mãe', 'substantivo', 'Pessoas', '👩', 'puq legh SoS.'],
  ['loDnI\'', 'irmão', 'substantivo', 'Pessoas', '👦', 'ghoj loDnI\'.'],
  ['be\'nI\'', 'irmã', 'substantivo', 'Pessoas', '👧', 'bIQ tlhutlh be\'nI\'.'],
  ['puq', 'filho(a)/criança', 'substantivo', 'Pessoas', '🧒', 'mach puq.'],
  ['puqloD', 'filho', 'substantivo', 'Pessoas', '👦', 'puqloD legh vav.'],
  ['puqbe\'', 'filha', 'substantivo', 'Pessoas', '👧', 'puqbe\' legh SoS.'],
  ['vavnI\'', 'avô', 'substantivo', 'Pessoas', '👴', 'qan vavnI\'.'],
  ['SoSnI\'', 'avó', 'substantivo', 'Pessoas', '👵', 'qan SoSnI\'.'],
  ['jup', 'amigo(a)', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'jup ghaH.'],
  ['loD', 'homem', 'substantivo', 'Pessoas', '👨', 'loD ghaH.'],
  ['be\'', 'mulher', 'substantivo', 'Pessoas', '👩', 'be\' jIH.'],
  // Verbos-chave
  ['Sop', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'Soj Sop puq.'],
  ['tlhutlh', 'beber', 'verbo', 'Verbos-chave', '🥤', 'bIQ tlhutlh ghaH.'],
  ['legh', 'ver', 'verbo', 'Verbos-chave', '👀', 'Hov legh ghaH.'],
  ['jatlh', 'falar', 'verbo', 'Verbos-chave', '🗣️', 'tlhIngan Hol Dajatlh\'a\'?'],
  ['yaj', 'entender', 'verbo', 'Verbos-chave', '🧠', 'jIyajbe\'.'],
  ['ghoj', 'aprender', 'verbo', 'Verbos-chave', '📚', 'ghoj puq.'],
  ['Suv', 'lutar', 'verbo', 'Verbos-chave', '⚔️', 'Suv SuvwI\'.'],
  ['parHa\'', 'gostar (de)', 'verbo', 'Verbos-chave', '❤️', 'Duj parHa\' SoS.'],
  // Números (o sistema usa os sufixos -maH para dezena e -vatlh para centena, presos ao número de unidades)
  ['pagh', 'zero', 'numeral', 'Números', '0️⃣', 'pagh Duj.'],
  ['wa\'', 'um', 'numeral', 'Números', '1️⃣', 'wa\' Duj.'],
  ['cha\'', 'dois', 'numeral', 'Números', '2️⃣', 'cha\' puq.'],
  ['wej', 'três', 'numeral', 'Números', '3️⃣', 'wej Duj.'],
  ['loS', 'quatro', 'numeral', 'Números', '4️⃣', 'loS puq.'],
  ['vagh', 'cinco', 'numeral', 'Números', '5️⃣', 'vagh Hov.'],
  ['jav', 'seis', 'numeral', 'Números', '6️⃣', 'jav Duj.'],
  ['Soch', 'sete', 'numeral', 'Números', '7️⃣', 'Soch puq.'],
  ['chorgh', 'oito', 'numeral', 'Números', '8️⃣', 'chorgh Hov.'],
  ['Hut', 'nove', 'numeral', 'Números', '9️⃣', 'Hut Duj.'],
  ['wa\'maH', 'dez', 'numeral', 'Números', '🔟', 'wa\'maH puq.'],
  ['wa\'vatlh', 'cem', 'numeral', 'Números', '💯', 'wa\'vatlh Duj.'],
  // Cores (também verbos estativos; o klingon só tem 4 cores básicas e não distingue verde de azul)
  ['chIS', 'ser branco', 'verbo', 'Cores', '⚪', 'chIS Hov.'],
  ['qIj', 'ser preto', 'verbo', 'Cores', '⚫', 'qIj Duj.'],
  ['Doq', 'ser vermelho/laranja (cor quente)', 'verbo', 'Cores', '🟠', 'Doq qul.'],
  ['SuD', 'ser azul/verde (cor fria)', 'verbo', 'Cores', '🔵', 'SuD chal.'],
  ['wov', 'ser claro', 'verbo', 'Cores', '🔆', 'wov jul.'],
  ['Hurgh', 'ser escuro', 'verbo', 'Cores', '🌑', 'Hurgh Duj.'],
  // Natureza e lugar
  ['bIQ', 'água', 'substantivo', 'Natureza e Lugar', '💧', 'wov bIQ.'],
  ['Soj', 'comida', 'substantivo', 'Natureza e Lugar', '🍽️', 'QaQ Soj.'],
  ['Ha\'DIbaH', 'carne', 'substantivo', 'Natureza e Lugar', '🥩', 'Ha\'DIbaH Sop SuvwI\'.'],
  ['chal', 'céu', 'substantivo', 'Natureza e Lugar', '🌤️', 'chal legh puq.'],
  ['Hov', 'estrela', 'substantivo', 'Natureza e Lugar', '⭐', 'Hov legh ghaH.'],
  ['maS', 'lua', 'substantivo', 'Natureza e Lugar', '🌙', 'maS legh be\'nI\'.'],
  ['tera\'', 'Terra', 'substantivo', 'Natureza e Lugar', '🌍', 'tera\' \'oH.'],
  ['qul', 'fogo', 'substantivo', 'Natureza e Lugar', '🔥', 'qul legh SuvwI\'.'],
  ['jul', 'sol', 'substantivo', 'Natureza e Lugar', '☀️', 'jul \'oH.'],
  ['juH', 'casa', 'substantivo', 'Natureza e Lugar', '🏠', 'tIn juH.'],
  ['veng', 'cidade', 'substantivo', 'Natureza e Lugar', '🏙️', 'tIn veng.'],
  ['Duj', 'navio', 'substantivo', 'Natureza e Lugar', '🚀', 'Duj vIlegh jIH.'],
  // Cultura (os temas mais marcantes do povo klingon de ficção)
  ['batlh', 'honra', 'substantivo', 'Cultura', '🎖️', 'batlh \'oH.'],
  ['veS', 'guerra', 'substantivo', 'Cultura', '⚔️', 'qab veS.'],
  ['SuvwI\'', 'guerreiro', 'substantivo', 'Cultura', '🛡️', 'SuvwI\' ghaH.'],
  ['wo\'', 'império', 'substantivo', 'Cultura', '👑', 'wo\' \'oH.'],
  ['tlhIngan', 'klingon (pessoa)', 'substantivo', 'Cultura', '🖖', 'tlhIngan ghaH.'],
  ['yaS', 'oficial', 'substantivo', 'Cultura', '🫡', 'puq legh yaS.'],
];

export const VOCAB_TLH = buildVocab('tlh', ROWS);
