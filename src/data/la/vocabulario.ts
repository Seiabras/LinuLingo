import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do latim clássico (pronúncia reconstruída acadêmica — ver o tópico de gramática
 * sobre pronúncia). Idioma incompleto: por enquanto só o suficiente para o nível A1 (unidades 1 e 2)
 * — ver o campo `incomplete` do pacote. Sem falantes nativos vivos, então os exemplos usam um cenário
 * romano (Roma, Pompeios) em vez de perguntar "de onde no Brasil você é".
 */
export const ROWS: VocabRow[] = [
  // Saudações
  ['salve', 'oi', 'interjeição', 'Saudações', '👋', 'Salve, Marce!'],
  ['salvete', 'oi (para vários)', 'interjeição', 'Saudações', '🙌', 'Salvete, amici!'],
  ['vale', 'tchau', 'interjeição', 'Saudações', '👋', 'Vale, Iulia!'],
  ['valete', 'tchau (para vários)', 'interjeição', 'Saudações', '🙌', 'Valete, omnes!'],
  ['gratias tibi ago', 'obrigado', 'interjeição', 'Saudações', '🙏', 'Gratias tibi ago, amice!'],
  ['quaeso', 'por favor', 'interjeição', 'Saudações', '🙏', 'Aquam mihi da, quaeso.'],
  ['ignosce mihi', 'desculpa', 'interjeição', 'Saudações', '🙏', 'Ignosce mihi, domine.'],
  // Essenciais (palavras de função)
  ['non', 'não', 'advérbio', 'Essenciais', '👎', 'Non hodie.'],
  ['ita', 'sim', 'advérbio', 'Essenciais', '👍', 'Ita, verum est.'],
  ['et', 'e', 'conjunção', 'Essenciais', null, 'Panis et vinum.'],
  ['aut', 'ou', 'conjunção', 'Essenciais', null, 'Aqua aut vinum?'],
  ['valde', 'muito (advérbio)', 'advérbio', 'Essenciais', null, 'Valde bonus est.'],
  ['quoque', 'também', 'advérbio', 'Essenciais', null, 'Ego quoque Latine loquor.'],
  // Pessoas: pronomes
  ['ego', 'eu', 'pronome', 'Pessoas', '🙋', 'Ego sum Iulia.'],
  ['tu', 'você', 'pronome', 'Pessoas', '🫵', 'Tu es Marcus?'],
  ['is', 'ele', 'pronome', 'Pessoas', '👨', 'Is est pater meus.'],
  ['ea', 'ela', 'pronome', 'Pessoas', '👩', 'Ea est mater mea.'],
  ['nos', 'nós', 'pronome', 'Pessoas', '🙌', 'Nos sumus amici.'],
  ['vos', 'vocês', 'pronome', 'Pessoas', '🫵', 'Vos estis Romani.'],
  ['ei', 'eles', 'pronome', 'Pessoas', '👥', 'Ei sunt amici mei.'],
  // Verbos-chave
  ['esse', 'ser/estar', 'verbo', 'Verbos-chave', '🧑', 'Roma in Italia est.'],
  ['habere', 'ter', 'verbo', 'Verbos-chave', '🤲', 'Habeo vinum.'],
  ['vocari', 'chamar-se', 'verbo', 'Verbos-chave', '🏷️', 'Ego Iulia vocor.'],
  ['loqui', 'falar', 'verbo', 'Verbos-chave', '🗣️', 'Latine loquor.'],
  ['habitare', 'morar', 'verbo', 'Verbos-chave', '🏠', 'In Italia habito.'],
  ['ire', 'ir', 'verbo', 'Verbos-chave', '🚶', 'Ad forum eo.'],
  ['edere', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'Panem edo.'],
  ['bibere', 'beber', 'verbo', 'Verbos-chave', '🥤', 'Aquam bibo.'],
  ['amare', 'amar/gostar', 'verbo', 'Verbos-chave', '❤️', 'Vinum amo.'],
  ['scire', 'saber', 'verbo', 'Verbos-chave', '🧠', 'Multum scio.'],
  ['velle', 'querer', 'verbo', 'Verbos-chave', '💭', 'Aquam volo.'],
  ['videre', 'ver', 'verbo', 'Verbos-chave', '👀', 'Te video.'],
  // Pessoas: nome e amizade
  ['nomen', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Quod nomen tibi est?', 'n'],
  ['amicus', 'amigo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Marcus est amicus meus.', 'm'],
  ['amica', 'amiga', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Iulia est amica mea.', 'f'],
  // Família
  ['familia', 'família', 'substantivo', 'Família', '👪', 'Familia mea magna est.', 'f'],
  ['mater', 'mãe', 'substantivo', 'Família', '👩', 'Mater mea Iulia vocatur.', 'f'],
  ['pater', 'pai', 'substantivo', 'Família', '👨', 'Pater meus Marcus vocatur.', 'm'],
  ['frater', 'irmão', 'substantivo', 'Família', '🧑', 'Frater meus parvus est.', 'm'],
  ['soror', 'irmã', 'substantivo', 'Família', '🧑', 'Soror mea bona est.', 'f'],
  ['filius', 'filho', 'substantivo', 'Família', '🧒', 'Filius meus hic est.', 'm'],
  ['filia', 'filha', 'substantivo', 'Família', '🧒', 'Filia mea parva est.', 'f'],
  // Casa e cidade
  ['domus', 'casa', 'substantivo', 'Essenciais', '🏠', 'Domus mea parva est.', 'f'],
  ['urbs', 'cidade', 'substantivo', 'Essenciais', '🏙️', 'Roma urbs magna est.', 'f'],
  // Comida
  ['aqua', 'água', 'substantivo', 'Comida', '💧', 'Aqua frigida est.', 'f'],
  ['panis', 'pão', 'substantivo', 'Comida', '🍞', 'Panis calidus est.', 'm'],
  ['lac', 'leite', 'substantivo', 'Comida', '🥛', 'Lac album est.', 'n'],
  ['vinum', 'vinho', 'substantivo', 'Comida', '🍷', 'Vinum rubrum est.', 'n'],
  ['caseus', 'queijo', 'substantivo', 'Comida', '🧀', 'Caseus bonus est.', 'm'],
  // Bichos e adjetivos essenciais
  ['canis', 'cachorro', 'substantivo', 'Essenciais', '🐕', 'Canis meus magnus est.', 'm'],
  ['feles', 'gato', 'substantivo', 'Essenciais', '🐈', 'Feles mea parva est.', 'f'],
  ['magnus', 'grande', 'adjetivo', 'Essenciais', '📏', 'Mons magnus est.'],
  ['parvus', 'pequeno', 'adjetivo', 'Essenciais', '📏', 'Canis parvus est.'],
  ['bonus', 'bom', 'adjetivo', 'Essenciais', '👍', 'Vinum bonum est.'],
  // Tempo (advérbios)
  ['hodie', 'hoje', 'advérbio', 'Essenciais', '📅', 'Hodie sol lucet.'],
  ['cras', 'amanhã', 'advérbio', 'Essenciais', '📅', 'Cras venio.'],
  ['heri', 'ontem', 'advérbio', 'Essenciais', '📅', 'Heri, non hodie.'],
  // Números
  ['unus', 'um', 'numeral', 'Números', '1️⃣', 'Unus canis.'],
  ['duo', 'dois', 'numeral', 'Números', '2️⃣', 'Duo fratres.'],
  ['tres', 'três', 'numeral', 'Números', '3️⃣', 'Tres sorores.'],
  ['quattuor', 'quatro', 'numeral', 'Números', '4️⃣', 'Quattuor anni.'],
  ['quinque', 'cinco', 'numeral', 'Números', '5️⃣', 'Quinque dies.'],
  ['sex', 'seis', 'numeral', 'Números', '6️⃣', 'Sex horae.'],
  ['septem', 'sete', 'numeral', 'Números', '7️⃣', 'Septem dies.'],
  ['octo', 'oito', 'numeral', 'Números', '8️⃣', 'Octo amici.'],
  ['novem', 'nove', 'numeral', 'Números', '9️⃣', 'Novem menses.'],
  ['decem', 'dez', 'numeral', 'Números', '🔟', 'Decem anni.'],
  ['viginti', 'vinte', 'numeral', 'Números', '🔢', 'Viginti dies.'],
  // Tempo: os dias da semana (nomes planetários, atestados desde a Antiguidade tardia)
  ['dies Solis', 'domingo', 'substantivo', 'Tempo', '📅', 'Dies Solis primus est.', 'm'],
  ['dies Lunae', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'Dies Lunae secundus est.', 'm'],
  ['dies Martis', 'terça-feira', 'substantivo', 'Tempo', '📅', 'Dies Martis tertius est.', 'm'],
  ['dies Mercurii', 'quarta-feira', 'substantivo', 'Tempo', '📅', 'Dies Mercurii quartus est.', 'm'],
  ['dies Iovis', 'quinta-feira', 'substantivo', 'Tempo', '📅', 'Dies Iovis quintus est.', 'm'],
  ['dies Veneris', 'sexta-feira', 'substantivo', 'Tempo', '📅', 'Dies Veneris sextus est.', 'm'],
  ['dies Saturni', 'sábado', 'substantivo', 'Tempo', '📅', 'Dies Saturni septimus est.', 'm'],
  // Cores
  ['ruber', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Rosa rubra est.'],
  ['caeruleus', 'azul', 'adjetivo', 'Cores', '🔵', 'Caelum caeruleum est.'],
  ['viridis', 'verde', 'adjetivo', 'Cores', '🟢', 'Herba viridis est.'],
  ['albus', 'branco', 'adjetivo', 'Cores', '⚪', 'Toga alba est.'],
  ['niger', 'preto', 'adjetivo', 'Cores', '⚫', 'Feles nigra est.'],
  // Perguntas
  ['ubi', 'onde', 'pronome', 'Essenciais', '❓', 'Ubi es?'],
  ['quid', 'o que', 'pronome', 'Essenciais', '❓', 'Quid est hoc?'],
  ['quomodo', 'como', 'advérbio', 'Essenciais', '❓', 'Quomodo vales?'],
  ['unde', 'de onde', 'advérbio', 'Essenciais', '❓', 'Unde es?'],
];

export const VOCAB_LA = buildVocab('la', ROWS);
