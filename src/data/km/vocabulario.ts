import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do khmer (cambojano), escrito na escrita khmer (abugida própria, sem relação com o
 * alfabeto latino). A pronúncia aproximada vem entre parênteses na tradução, como nas outras línguas
 * de escrita não latina. O khmer NÃO é tonal — diferente dos vizinhos tailandês e vietnamita — e não
 * marca gênero gramatical nem plural nos substantivos, e os verbos não se conjugam (ver `gramatica.ts`).
 * Idioma incompleto: por enquanto só o suficiente para o nível A1 (unidades 1 e 2) — ver `incomplete`
 * em `index.ts`.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['សួស្តី', 'oi, olá, informal (suostei)', 'interjeição', 'Expressões', '👋', 'សួស្តី! អ្នកសុខសប្បាយទេ?'],
  ['ជំរាបសួរ', 'oi, olá, formal (chumreap suor)', 'interjeição', 'Expressões', '🙏', 'ជំរាបសួរ លោកគ្រូ។'],
  ['លាហើយ', 'até logo, tchau (lea haeuy)', 'interjeição', 'Expressões', '👋', 'លាហើយ, ជួបគ្នាថ្ងៃស្អែក!'],
  ['អរគុណ', 'obrigado (arkoun)', 'interjeição', 'Expressões', '🙏', 'អរគុណណាស់!'],
  ['សូម', 'por favor (soum)', 'interjeição', 'Expressões', '🙏', 'សូមចាប់ផ្ដើម!'],
  ['សុំទោស', 'desculpa, com licença (somtos)', 'interjeição', 'Expressões', '😳', 'សុំទោស, ខ្ញុំមិនដឹងទេ។'],
  ['បាទ', 'sim, dito por um homem (baat)', 'interjeição', 'Expressões', '👍', 'បាទ, ខ្ញុំចង់ទៅ។'],
  ['ចាស', 'sim, dito por uma mulher (chaa)', 'interjeição', 'Expressões', '👍', 'ចាស, ខ្ញុំជាគ្រូ។'],
  // ── Essenciais ──
  ['ទេ', 'partícula do final de perguntas e negações (te)', 'partícula', 'Essenciais', '❓', 'ខ្ញុំមិនដឹងទេ។'],
  ['មិន', 'não, antes do verbo (min)', 'advérbio', 'Essenciais', '🚫', 'ខ្ញុំមិនចង់ទៅទេ។'],
  ['និង', 'e (ning)', 'conjunção', 'Essenciais', null, 'ម្ដាយ និង ឪពុក។'],
  ['ឬ', 'ou (rue)', 'conjunção', 'Essenciais', null, 'តែ ឬ កាហ្វេ?'],
  ['ណាស់', 'muito, depois do adjetivo (nas)', 'advérbio', 'Essenciais', null, 'ល្អណាស់!'],
  ['ដែរ', 'também (dae)', 'advérbio', 'Essenciais', null, 'ខ្ញុំចូលចិត្តតែដែរ។'],
  ['អ្វី', 'o quê (avey)', 'pronome', 'Essenciais', '❓', 'នេះជាអ្វី?'],
  ['ឯណា', 'onde (ae na)', 'advérbio', 'Essenciais', '❓', 'អ្នកនៅឯណា?'],
  ['ម៉េច', 'como, por quê (mech)', 'advérbio', 'Essenciais', '❓', 'ម៉េច?'],
  ['នរណា', 'quem (no na)', 'pronome', 'Essenciais', '❓', 'គាត់ជានរណា?'],
  ['ក្រុង', 'cidade (krong)', 'substantivo', 'Essenciais', '🏙️', 'ភ្នំពេញជាក្រុងធំ។'],
  ['ប្រទេស', 'país (prateh)', 'substantivo', 'Essenciais', '🌍', 'កម្ពុជាជាប្រទេសខ្ញុំ។'],
  ['ភាសា', 'língua, idioma (phiesa)', 'substantivo', 'Essenciais', '🗣️', 'ខ្ញុំរៀនភាសាខ្មែរ។'],
  // ── Descrições ──
  ['ល្អ', 'bom (l-or)', 'adjetivo', 'Descrições', '👌', 'ទឹកនេះល្អ។'],
  ['អាក្រក់', 'ruim, mau (akrak)', 'adjetivo', 'Descrições', '👎', 'ឆ្កែនេះអាក្រក់។'],
  ['ធំ', 'grande (thom)', 'adjetivo', 'Descrições', '📏', 'ផ្ទះខ្ញុំធំ។'],
  ['តូច', 'pequeno (touch)', 'adjetivo', 'Descrições', '📏', 'ឆ្មាខ្ញុំតូច។'],
  // ── Casa ──
  ['ផ្ទះ', 'casa (phteah)', 'substantivo', 'Casa', '🏠', 'ផ្ទះខ្ញុំតូច។'],
  // ── Animais ──
  ['ឆ្កែ', 'cachorro (chhkae)', 'substantivo', 'Animais', '🐕', 'ឆ្កែញ៉ាំបាយ។'],
  ['ឆ្មា', 'gato (chhmaa)', 'substantivo', 'Animais', '🐈', 'ឆ្មាផឹកទឹកដោះគោ។'],
  // ── Pessoas ──
  ['ខ្ញុំ', 'eu (khnhom — vem de uma palavra antiga para “servo”, hoje é o pronome neutro do dia a dia)', 'pronome', 'Pessoas', '🙋', 'ខ្ញុំឈ្មោះដារា។'],
  ['អ្នក', 'você, neutro e educado (neak)', 'pronome', 'Pessoas', '🫵', 'អ្នកឈ្មោះអ្វី?'],
  ['គាត់', 'ele, ela, de adultos, respeitoso (koat)', 'pronome', 'Pessoas', '👤', 'គាត់ជាមិត្តខ្ញុំ។'],
  ['យើង', 'nós (yeung)', 'pronome', 'Pessoas', '🙌', 'យើងទៅផ្ទះ។'],
  ['ឈ្មោះ', 'nome (chhmoh)', 'substantivo', 'Pessoas', '🏷️', 'ខ្ញុំឈ្មោះដារា។'],
  ['មិត្ត', 'amigo (mit)', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'គាត់ជាមិត្តខ្ញុំ។'],
  ['គ្រួសារ', 'família (kruosa)', 'substantivo', 'Pessoas', '👪', 'គ្រួសារខ្ញុំធំ។'],
  ['ម្តាយ', 'mãe (mdaay)', 'substantivo', 'Pessoas', '👩', 'ម្តាយខ្ញុំនៅផ្ទះ។'],
  ['ឪពុក', 'pai (ovpuk)', 'substantivo', 'Pessoas', '👨', 'ឪពុកខ្ញុំនៅភ្នំពេញ។'],
  ['បងប្រុស', 'irmão mais velho (bong proh)', 'substantivo', 'Pessoas', '🧑', 'ខ្ញុំមានបងប្រុស។'],
  ['បងស្រី', 'irmã mais velha (bong srey)', 'substantivo', 'Pessoas', '🧑', 'ខ្ញុំមានបងស្រី។'],
  ['ប្អូនប្រុស', 'irmão mais novo (p-oun proh)', 'substantivo', 'Pessoas', '🧒', 'ខ្ញុំមានប្អូនប្រុស។'],
  ['ប្អូនស្រី', 'irmã mais nova (p-oun srey)', 'substantivo', 'Pessoas', '🧒', 'ខ្ញុំមានប្អូនស្រី។'],
  // ── Verbos-chave ──
  ['ជា', 'ser, identidade: X ជា Y = X é Y (chea)', 'verbo', 'Verbos-chave', '🧑', 'គាត់ជាមិត្តខ្ញុំ។'],
  ['មាន', 'ter, haver (mien)', 'verbo', 'Verbos-chave', '🤲', 'ខ្ញុំមានគ្រួសារធំ។'],
  ['ចង់', 'querer (chang)', 'verbo', 'Verbos-chave', '💭', 'ខ្ញុំចង់ទៅ។'],
  ['ដឹង', 'saber (deung)', 'verbo', 'Verbos-chave', '🧠', 'ខ្ញុំមិនដឹងទេ។'],
  ['ទៅ', 'ir (tov)', 'verbo', 'Verbos-chave', '🚶', 'ខ្ញុំទៅផ្ទះ។'],
  ['នៅ', 'morar, estar (em) (nouv)', 'verbo', 'Verbos-chave', '🏠', 'ខ្ញុំនៅភ្នំពេញ។'],
  ['និយាយ', 'falar (niyeay)', 'verbo', 'Verbos-chave', '🗣️', 'ខ្ញុំនិយាយភាសាខ្មែរ។'],
  ['ញ៉ាំ', 'comer, de todo dia (nham)', 'verbo', 'Verbos-chave', '🍽️', 'ខ្ញុំញ៉ាំបាយ។'],
  ['ផឹក', 'beber (phoek)', 'verbo', 'Verbos-chave', '🥤', 'ខ្ញុំផឹកទឹក។'],
  ['ចូលចិត្ត', 'gostar de (chol chet — ao pé da letra, “entrar no coração”)', 'verbo', 'Verbos-chave', '❤️', 'ខ្ញុំចូលចិត្តតែ។'],
  ['រៀន', 'aprender, estudar (rien)', 'verbo', 'Verbos-chave', '📖', 'ខ្ញុំរៀនភាសាខ្មែរ។'],
  // ── Alimentação e Restaurantes ──
  ['ទឹក', 'água (teuk)', 'substantivo', 'Alimentação e Restaurantes', '💧', 'ទឹកនេះល្អ។'],
  ['បាយ', 'arroz cozido; comida, refeição (bay)', 'substantivo', 'Alimentação e Restaurantes', '🍚', 'ខ្ញុំញ៉ាំបាយ។'],
  ['ទឹកដោះគោ', 'leite (teuk doh ko — ao pé da letra, “líquido do peito da vaca”)', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'ទឹកដោះគោស។'],
  ['តែ', 'chá (tae)', 'substantivo', 'Alimentação e Restaurantes', '🍵', 'ខ្ញុំចូលចិត្តតែបៃតង។'],
  ['កាហ្វេ', 'café (kafe)', 'substantivo', 'Alimentação e Restaurantes', '☕', 'ខ្ញុំចូលចិត្តកាហ្វេ។'],
  // ── Números ──
  ['មួយ', 'um (muoy)', 'numeral', 'Números', '1️⃣', 'ខ្ញុំមានឆ្កែមួយ។'],
  ['ពីរ', 'dois (pii)', 'numeral', 'Números', '2️⃣', 'ខ្ញុំមានប្អូនស្រីពីរ។'],
  ['បី', 'três (bei)', 'numeral', 'Números', '3️⃣', 'ខ្ញុំមានឆ្មាបី។'],
  ['បួន', 'quatro (buon)', 'numeral', 'Números', '4️⃣', 'ខ្ញុំមានមិត្តបួន។'],
  ['ប្រាំ', 'cinco (pram)', 'numeral', 'Números', '5️⃣', 'ថ្ងៃប្រាំ។'],
  ['ប្រាំមួយ', 'seis (pram muoy)', 'numeral', 'Números', '6️⃣', 'ថ្ងៃប្រាំមួយ។'],
  ['ប្រាំពីរ', 'sete (pram pii)', 'numeral', 'Números', '7️⃣', 'ថ្ងៃប្រាំពីរ។'],
  ['ប្រាំបី', 'oito (pram bei)', 'numeral', 'Números', '8️⃣', 'ថ្ងៃប្រាំបី។'],
  ['ប្រាំបួន', 'nove (pram buon)', 'numeral', 'Números', '9️⃣', 'ថ្ងៃប្រាំបួន។'],
  ['ដប់', 'dez (dop)', 'numeral', 'Números', '🔟', 'ថ្ងៃដប់។'],
  // ── Tempo ──
  ['ថ្ងៃនេះ', 'hoje (thngai nih)', 'advérbio', 'Tempo', '📅', 'ថ្ងៃនេះជាថ្ងៃច័ន្ទ។'],
  ['ស្អែក', 'amanhã (s-aek)', 'advérbio', 'Tempo', '📅', 'ថ្ងៃស្អែកជាថ្ងៃអង្គារ។'],
  ['ថ្ងៃច័ន្ទ', 'segunda-feira (thngai chan — “dia da Lua”)', 'substantivo', 'Tempo', '📅', 'ថ្ងៃនេះជាថ្ងៃច័ន្ទ។'],
  ['ថ្ងៃអង្គារ', 'terça-feira (thngai angkear — “dia de Marte”)', 'substantivo', 'Tempo', '📅', 'ថ្ងៃស្អែកជាថ្ងៃអង្គារ។'],
  ['ថ្ងៃពុធ', 'quarta-feira (thngai put — “dia de Mercúrio”)', 'substantivo', 'Tempo', '📅', 'ថ្ងៃនេះជាថ្ងៃពុធ។'],
  ['ថ្ងៃព្រហស្បតិ៍', 'quinta-feira (thngai prohoah — “dia de Júpiter”)', 'substantivo', 'Tempo', '📅', 'ថ្ងៃនេះជាថ្ងៃព្រហស្បតិ៍។'],
  ['ថ្ងៃសុក្រ', 'sexta-feira (thngai sok — “dia de Vênus”)', 'substantivo', 'Tempo', '📅', 'ថ្ងៃនេះជាថ្ងៃសុក្រ។'],
  ['ថ្ងៃសៅរ៍', 'sábado (thngai saur — “dia de Saturno”)', 'substantivo', 'Tempo', '📅', 'ថ្ងៃនេះជាថ្ងៃសៅរ៍។'],
  ['ថ្ងៃអាទិត្យ', 'domingo (thngai atit — “dia do Sol”)', 'substantivo', 'Tempo', '📅', 'ថ្ងៃនេះជាថ្ងៃអាទិត្យ។'],
  // ── Cores ──
  ['ស', 'branco (sâ)', 'adjetivo', 'Cores', '⚪', 'ទឹកដោះគោស។'],
  ['ខ្មៅ', 'preto (khmav)', 'adjetivo', 'Cores', '⚫', 'ឆ្មានេះខ្មៅ។'],
  ['ក្រហម', 'vermelho (krâhâm)', 'adjetivo', 'Cores', '🔴', 'ផ្ទះនេះក្រហម។'],
  ['បៃតង', 'verde (baytong)', 'adjetivo', 'Cores', '🟢', 'ខ្ញុំចូលចិត្តតែបៃតង។'],
  ['ខៀវ', 'azul (khiev)', 'adjetivo', 'Cores', '🔵', 'ផ្ទះនេះខៀវ។'],
  ['លឿង', 'amarelo (luong)', 'adjetivo', 'Cores', '🟡', 'ផ្ទះនេះលឿង។'],
];

export const VOCAB_KM = buildVocab('km', ROWS);
