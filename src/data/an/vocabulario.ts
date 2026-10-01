import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do aragonês na norma gráfica EFA (Academia de l'Aragonés, 2010). Idioma incompleto:
 * por enquanto só o suficiente para o nível A1 (unidades 1 e 2) — ver o campo `incomplete` do
 * pacote. O verbo é dado na forma “eu” (ex.: “fablo” = eu falo), a mais útil para quem começa.
 * “demá” (amanhã) é a forma do ribagorzano/benasqués; a forma mais geral nos dicionários é
 * “maitín”, mas “demá” é bem documentada e mais fácil de reconhecer para quem fala português.
 * Vocabulário conferido contra o Aragonario (aragonario.aragon.es) e o Wiktionary em 01/10/2026.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['ola', 'oi, olá (informal)', 'interjeição', 'Expressões', '👋', 'Ola! Cómo yes?'],
  ['buen día', 'bom dia', 'interjeição', 'Expressões', '🌅', 'Buen día a toz!'],
  ['buena tardada', 'boa tarde', 'interjeição', 'Expressões', '🌇', 'Buena tardada, amigo!'],
  ['buena nuei', 'boa noite', 'interjeição', 'Expressões', '🌙', 'Buena nuei e dormir bien!'],
  ['adiós', 'tchau, até logo', 'interjeição', 'Expressões', '👋', 'Adiós e grazias!'],
  ['grazias', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Muitas grazias!'],
  ['por favor', 'por favor', 'interjeição', 'Expressões', '🙏', 'Un café, por favor.'],
  ['perdón', 'com licença, desculpe', 'interjeição', 'Expressões', '🙏', 'Perdón, an ye a estación?'],
  ['cómo yes?', 'como vai?', 'expressão', 'Expressões', '🙂', 'Ola, Ana! Cómo yes?'],
  // ── Essenciais ──
  ['sí', 'sim', 'advérbio', 'Essenciais', '👍', 'Sí, grazias!'],
  ['no', 'não', 'advérbio', 'Essenciais', '👎', 'No, grazias.'],
  ['e', 'e', 'conjunção', 'Essenciais', null, 'Pan e queso.'],
  ['u', 'ou', 'conjunção', 'Essenciais', null, 'Café u augua?'],
  ['muito', 'muito', 'advérbio', 'Essenciais', null, 'Grazias muito!'],
  ['tamién', 'também', 'advérbio', 'Essenciais', null, 'Yo tamién fablo aragonés.'],
  ['bien', 'bem', 'advérbio', 'Essenciais', '👌', 'Bien, grazias. E tu?'],
  ['qué', 'o que, que', 'pronome', 'Essenciais', '❓', 'Qué ye asto?'],
  ['an', 'onde', 'advérbio', 'Essenciais', '❓', 'An veyes?'],
  ['cómo', 'como', 'advérbio', 'Essenciais', '❓', 'Cómo te clamas?'],
  ["d'an", 'de onde', 'advérbio', 'Essenciais', '❓', "D'an yes?"],
  ['ziudá', 'cidade', 'substantivo', 'Essenciais', '🏙️', 'Uesca ye una ziudá chicota.', 'f'],
  ['casa', 'casa', 'substantivo', 'Casa', '🏠', 'A mía casa ye chicota.', 'f'],
  ['can', 'cachorro', 'substantivo', 'Animais', '🐕', 'O can duerme.', 'm'],
  ['gato', 'gato', 'substantivo', 'Animais', '🐈', 'O gato ye negro.', 'm'],
  ['bueno', 'bom (fem. buena)', 'adjetivo', 'Descrições', '👍', 'O pan ye bueno.'],
  ['gran', 'grande', 'adjetivo', 'Descrições', '📏', 'A mía familia ye gran.'],
  ['menudo', 'pequeno (fem. menuda)', 'adjetivo', 'Descrições', '📏', 'O gato ye menudo.'],
  // ── Pessoas ──
  ['yo', 'eu', 'pronome', 'Pessoas', '🙋', 'Yo soi d’Uesca.'],
  ['tu', 'tu, você', 'pronome', 'Pessoas', '🫵', 'E tu, cómo te clamas?'],
  ['er', 'ele', 'pronome', 'Pessoas', '👨', 'Er ye de Chaca.'],
  ['ella', 'ela', 'pronome', 'Pessoas', '👩', 'Ella ye de Balbastro.'],
  ['nusatros', 'nós', 'pronome', 'Pessoas', '🙌', 'Nusatros fablamos aragonés.'],
  ['vusatros', 'vocês', 'pronome', 'Pessoas', '🫵', 'Vusatros soz d’astí?'],
  ['ers', 'eles', 'pronome', 'Pessoas', '👥', 'Ers son chirmans.'],
  ['nombre', 'nome', 'substantivo', 'Pessoas', '🏷️', 'O mío nombre ye Linu.', 'm'],
  ['amigo', 'amigo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Er ye o mío amigo.', 'm'],
  ['amiga', 'amiga', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Ella ye a mía amiga.', 'f'],
  // ── Verbos-chave ──
  ['estar', 'ser, estar (soi, yes, ye)', 'verbo', 'Verbos-chave', '🧑', 'Yo soi de Sant Paulo.'],
  ['aber', 'ter (he, has, ha)', 'verbo', 'Verbos-chave', '🤲', 'Yo he un chirmán.'],
  ['clamar-se', 'chamar-se (me clamo)', 'expressão', 'Verbos-chave', '🏷️', 'Cómo te clamas?'],
  ['fablar', 'falar (fablo)', 'verbo', 'Verbos-chave', '🗣️', 'Fablo un poquet d’aragonés.'],
  ['vivir', 'morar, viver (vivo)', 'verbo', 'Verbos-chave', '🏠', 'Vivo en Uesca.'],
  ['ir', 'ir (vo)', 'verbo', 'Verbos-chave', '🚶', 'Vo ta casa.'],
  ['minchar', 'comer (mincho)', 'verbo', 'Verbos-chave', '🍽️', 'Mincho pan e queso.'],
  ['beber', 'beber (bebo)', 'verbo', 'Verbos-chave', '🥤', 'Bebo augua.'],
  ['querer', 'gostar, querer (quiero)', 'verbo', 'Verbos-chave', '❤️', 'Me quiero aprender aragonés.'],
  ['saber', 'saber (sé)', 'verbo', 'Verbos-chave', '🧠', 'No sé.'],
  ['aprender', 'aprender (aprendo)', 'verbo', 'Verbos-chave', '📚', 'Aprendemos aragonés.'],
  // ── Pessoas (família) ──
  ['familia', 'família', 'substantivo', 'Pessoas', '👪', 'A mía familia ye gran.', 'f'],
  ['mai', 'mãe', 'substantivo', 'Pessoas', '👩', 'A mía mai se clama Rosa.', 'f'],
  ['pai', 'pai', 'substantivo', 'Pessoas', '👨', 'O mío pai ye de Chaca.', 'm'],
  ['chirmán', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Yo he un chirmán.', 'm'],
  ['chirmana', 'irmã', 'substantivo', 'Pessoas', '🧑', 'Yo he una chirmana.', 'f'],
  ['fillo', 'filho', 'substantivo', 'Pessoas', '🧒', 'O suyo fillo ha diez anyadas.', 'm'],
  ['filla', 'filha', 'substantivo', 'Pessoas', '🧒', 'A suya filla ye menuda.', 'f'],
  // ── Alimentação ──
  ['augua', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Un vaso d’augua, por favor.', 'f'],
  ['pan', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'O pan ye fresco.', 'm'],
  ['leit', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'O leit ye blanco.', 'm'],
  ['queso', 'queijo', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'O queso de Chistau ye bueno.', 'm'],
  ['café', 'café', 'substantivo', 'Alimentação e Restaurantes', '☕', 'Un café, por favor.', 'm'],
  ['vino', 'vinho', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'Un vaso de vino, por favor.', 'm'],
  // ── Números ──
  ['un', 'um (fem. una)', 'numeral', 'Números', '1️⃣', 'Un café, por favor.'],
  ['dos', 'dois', 'numeral', 'Números', '2️⃣', 'Yo he dos chirmans.'],
  ['tres', 'três', 'numeral', 'Números', '3️⃣', 'Tres cafés, por favor.'],
  ['quatre', 'quatro', 'numeral', 'Números', '4️⃣', 'O gato ha quatre potas.'],
  ['zinco', 'cinco', 'numeral', 'Números', '5️⃣', 'Zinco días.'],
  ['seis', 'seis', 'numeral', 'Números', '6️⃣', 'Seis anyadas.'],
  ['siet', 'sete', 'numeral', 'Números', '7️⃣', "A semana ha siet días."],
  ['ueito', 'oito', 'numeral', 'Números', '8️⃣', 'Ueito oras.'],
  ['nueu', 'nove', 'numeral', 'Números', '9️⃣', 'Nueu anyadas.'],
  ['diez', 'dez', 'numeral', 'Números', '🔟', 'Diez euros.'],
  // ── Tempo ──
  ['hue', 'hoje', 'advérbio', 'Tempo', '📅', 'Hue ye luns.'],
  ['demá', 'amanhã', 'advérbio', 'Tempo', '📅', 'Ta demá!'],
  ['ahier', 'ontem', 'advérbio', 'Tempo', '📅', 'Ahier, hue e demá.'],
  ['luns', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'Hue ye luns.', 'm'],
  ['martes', 'terça-feira', 'substantivo', 'Tempo', '📅', 'Hue ye martes.', 'm'],
  ['miércols', 'quarta-feira', 'substantivo', 'Tempo', '📅', 'Hue ye miércols.', 'm'],
  ['chuebes', 'quinta-feira', 'substantivo', 'Tempo', '📅', 'Hue ye chuebes.', 'm'],
  ['biernes', 'sexta-feira', 'substantivo', 'Tempo', '📅', 'Hue ye biernes.', 'm'],
  ['sabado', 'sábado', 'substantivo', 'Tempo', '📅', 'Hue ye sabado.', 'm'],
  ['domingo', 'domingo', 'substantivo', 'Tempo', '📅', 'Hue ye domingo.', 'm'],
  // ── Cores ──
  ['royo', 'vermelho', 'adjetivo', 'Cores', '🔴', 'O vino ye royo.'],
  ['azul', 'azul', 'adjetivo', 'Cores', '🔵', 'O zielo ye azul.'],
  ['berde', 'verde', 'adjetivo', 'Cores', '🟢', "A yerba ye berde."],
  ['blanco', 'branco', 'adjetivo', 'Cores', '⚪', 'O leit ye blanco.'],
  ['negro', 'preto', 'adjetivo', 'Cores', '⚫', 'O gato ye negro.'],
];

export const VOCAB_AN = buildVocab('an', ROWS);
