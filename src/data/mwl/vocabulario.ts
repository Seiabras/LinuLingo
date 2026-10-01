import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do mirandês (Convenção Ortográfica da Língua Mirandesa, 1999). Idioma incompleto:
 * por enquanto só o suficiente para o nível A1 (unidades 1 e 2) — ver o campo `incomplete` do
 * pacote. Só ~66 palavras em vez das ~85-95 de costume: o mirandês tem pouquíssima documentação
 * confiável online (dicionário oficial em PDF não indexado, poucos dicionários de palavra única) e
 * preferimos ficar com menos palavras a inventar vocabulário sem fonte — não há emoji de animal
 * aqui porque não achamos confirmação segura das palavras genéricas para "cão"/"gato".
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['buonos dies', 'bom dia', 'interjeição', 'Expressões', '🌅', 'Buonos dies! Cumo stá?'],
  ['buonas tardes', 'boa tarde', 'interjeição', 'Expressões', '🌇', 'Buonas tardes a todos!'],
  ['buonas nuites', 'boa noite', 'interjeição', 'Expressões', '🌙', 'Buonas nuites, mai!'],
  ['oulá', 'oi, olá', 'interjeição', 'Expressões', '👋', 'Oulá! Cumo stá?'],
  ['adius', 'tchau, adeus', 'interjeição', 'Expressões', '👋', 'Adius i até lougo!'],
  ['até lougo', 'até logo', 'interjeição', 'Expressões', '👋', 'Até lougo, amigo!'],
  ['oubrigado', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Oubrigado pul café!'],
  ['oubrigada', 'obrigada', 'interjeição', 'Expressões', '🙏', 'Oubrigada pula ajuda!'],
  ['por fabor', 'por favor', 'interjeição', 'Expressões', '🙏', 'Un café, por fabor.'],
  ['çculpe', 'desculpe, com licença', 'interjeição', 'Expressões', '🙏', 'Çculpe, adonde ye la çtaçon?'],
  ['bienbenido', 'bem-vindo', 'interjeição', 'Expressões', '🤗', 'Bienbenido a Miranda!'],
  ['cumo stá?', 'como está?', 'expressão', 'Expressões', '🙂', 'Oulá! Cumo stá?'],
  // ── Essenciais ──
  ['si', 'sim', 'advérbio', 'Essenciais', '👍', 'Si, por fabor.'],
  ['nó', 'não', 'advérbio', 'Essenciais', '👎', 'Nó, oubrigado.'],
  ['i', 'e', 'conjunção', 'Essenciais', null, 'Pan i queiso.'],
  ['adonde', 'onde', 'advérbio', 'Essenciais', '❓', 'Adonde stá la mie casa?'],
  ['cumo', 'como', 'advérbio', 'Essenciais', '❓', 'Cumo se chama?'],
  ['qual', 'qual, o que', 'pronome', 'Essenciais', '❓', 'Qual ye l sou nome?'],
  ['casa', 'casa', 'substantivo', 'Casa', '🏠', 'La mie casa ye pequeinha.', 'f'],
  ['cidade', 'cidade', 'substantivo', 'Essenciais', '🏙️', 'Miranda de l Douro ye ua cidade.', 'f'],
  // ── Pessoas ──
  ['eu', 'eu', 'pronome', 'Pessoas', '🙋', 'Eu sou de Miranda.'],
  ['tu', 'tu, você', 'pronome', 'Pessoas', '🫵', 'I tu, cumo te chamas?'],
  ['el', 'ele', 'pronome', 'Pessoas', '👨', 'El ye de Sendin.'],
  ['eilha', 'ela', 'pronome', 'Pessoas', '👩', 'Eilha ye mie armana.'],
  ['nós', 'nós', 'pronome', 'Pessoas', '🙌', 'Nós somos amigos.'],
  ['bós', 'vocês; o senhor, a senhora (formal)', 'pronome', 'Pessoas', '🫵', 'Adonde stais bós?'],
  ['eilhes', 'eles', 'pronome', 'Pessoas', '👥', 'Eilhes falan mirandés.'],
  ['eilhas', 'elas', 'pronome', 'Pessoas', '👥', 'Eilhas son de Angueira.'],
  ['pai', 'pai', 'substantivo', 'Pessoas', '👨', 'Miu pai ye de Miranda.', 'm'],
  ['mai', 'mãe', 'substantivo', 'Pessoas', '👩', 'Mie mai chama-se Rosa.', 'f'],
  ['armano', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Tengo un armano.', 'm'],
  ['armana', 'irmã', 'substantivo', 'Pessoas', '🧑', 'Tengo ua armana.', 'f'],
  ['moço', 'filho', 'substantivo', 'Pessoas', '🧒', 'Tengo un moço.', 'm'],
  ['moça', 'filha', 'substantivo', 'Pessoas', '🧒', 'Tengo ua moça.', 'f'],
  // ── Verbos-chave ──
  ['ser', 'ser, estar (sou, sós, yê, somos, sodes, son)', 'verbo', 'Verbos-chave', '🧑', 'Eu sou de Miranda.'],
  ['tener', 'ter (tengo, tenes, ten, tenemos, teneis, ténen)', 'verbo', 'Verbos-chave', '🤲', 'Tengo trés moços i ua moça.'],
  // ── Descrições ──
  ['buono', 'bom (fem. buona; antes do nome: bun)', 'adjetivo', 'Descrições', '👍', 'Esto pan ye buono.'],
  ['grande', 'grande', 'adjetivo', 'Descrições', '📏', 'La cidade ye grande.'],
  // ── Alimentação e Restaurantes ──
  ['pan', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Quiero pan, por fabor.', 'm'],
  ['auga', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Un copo d´auga, por fabor.', 'f'],
  ['lheite', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'L lheite ye branco.', 'm'],
  ['queiso', 'queijo', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'Quiero pan i queiso.', 'm'],
  ['café', 'café', 'substantivo', 'Alimentação e Restaurantes', '☕', 'Un café, por fabor.', 'm'],
  ['bino', 'vinho', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'Un copo de bino, por fabor.', 'm'],
  // ── Números ──
  ['un', 'um (fem. ua)', 'numeral', 'Números', '1️⃣', 'Un café, por fabor.'],
  ['dous', 'dois (fem. duas)', 'numeral', 'Números', '2️⃣', 'Tengo dous armanos.'],
  ['trés', 'três', 'numeral', 'Números', '3️⃣', 'Trés cafés, por fabor.'],
  ['quatro', 'quatro', 'numeral', 'Números', '4️⃣', 'Quatro pessonas.'],
  ['cinco', 'cinco', 'numeral', 'Números', '5️⃣', 'Cinco dies.'],
  ['seis', 'seis', 'numeral', 'Números', '6️⃣', 'Seis años.'],
  ['siete', 'sete', 'numeral', 'Números', '7️⃣', 'La semana ten siete dies.'],
  ['uito', 'oito', 'numeral', 'Números', '8️⃣', 'Uito horas.'],
  ['nuobe', 'nove', 'numeral', 'Números', '9️⃣', 'Nuobe años.'],
  ['dieç', 'dez', 'numeral', 'Números', '🔟', 'Dieç francos.'],
  // ── Tempo ──
  ['deimingo', 'domingo', 'substantivo', 'Tempo', '📅', 'Hoije ye deimingo.', 'm'],
  ['segunda', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'Hoije ye segunda.', 'f'],
  ['terça', 'terça-feira', 'substantivo', 'Tempo', '📅', 'Hoije ye terça.', 'f'],
  ['quarta', 'quarta-feira', 'substantivo', 'Tempo', '📅', 'Hoije ye quarta.', 'f'],
  ['quinta', 'quinta-feira', 'substantivo', 'Tempo', '📅', 'Hoije ye quinta.', 'f'],
  ['sesta', 'sexta-feira', 'substantivo', 'Tempo', '📅', 'Hoije ye sesta.', 'f'],
  ['sábado', 'sábado', 'substantivo', 'Tempo', '📅', 'Hoije ye sábado.', 'm'],
  // ── Cores ──
  ['burmeilho', 'vermelho', 'adjetivo', 'Cores', '🔴', 'L bino ye burmeilho.'],
  ['azul', 'azul', 'adjetivo', 'Cores', '🔵', 'L cielo ye azul.'],
  ['berde', 'verde', 'adjetivo', 'Cores', '🟢', 'La yerba ye berde.'],
  ['branco', 'branco', 'adjetivo', 'Cores', '⚪', 'L lheite ye branco.'],
  ['negro', 'preto', 'adjetivo', 'Cores', '⚫', 'La nuite ye negra.'],
];

export const VOCAB_MWL = buildVocab('mwl', ROWS);
