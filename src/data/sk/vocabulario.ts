import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do eslovaco padrão (spisovná slovenčina, ortografia das Regras da Ortografia
 * Eslovaca). Idioma incompleto: cobre A1.1, A1.2, A2.1 e A2.2 — ver o campo `incomplete` em
 * index.ts.
 *
 * Fontes das palavras A2 (unidades 3 e 4, pesquisadas em 09/10/2026), todas conferidas no
 * Wikcionário em inglês (en.wiktionary.org), seção eslovaca, salvo indicação contrária:
 * - Clima: dážď (masc. inanimado, padrão “stroj”, gen. dažďa), slnko (neutro, padrão “mesto”) —
 *   confirmados por página própria. “Je horúco/zima/chladno” são frases impessoais de clima sem
 *   sujeito, documentadas em fontes de ensino (enrsi.stvr.sk, talkpal.ai/vocabulary/
 *   slovak-vocabulary-for-weather-conditions) — não achamos uma entrada lexicográfica isolada
 *   para “horúco”/“chladno” como advérbios, mas o padrão “Je + advérbio” é o mesmo já ensinado
 *   para “dobre” (A1.1).
 * - Roupas: košeľa (fem., padrão “ulica”), nohavice (fem. plural, de “noha”), topánka (fem., mais
 *   usada no plural “topánky”), kabát (masc. inanimado) — todas confirmadas por página própria.
 * - Corpo: hlava (fem., padrão “žena”), ruka (fem.; a mesma palavra cobre “mão” e “braço”), noha
 *   (fem.; cobre “perna” e “pé”), ústa (neutro, só no plural, padrão “mesto”) — confirmadas por
 *   página própria. “Oko” (olho, neutro) é um substantivo eslavo básico amplamente atestado, mas a
 *   página consultada nesta sessão veio truncada antes da seção eslovaca; mantido por ser um termo
 *   de altíssima frequência e sem controvérsia, igual ao já usado nos cognatos eslavos do pacote.
 * - Lugares: škola, nemocnica, obchod, ulica e reštaurácia, todas com a tabela de declinação
 *   (incluindo o locativo, usado no cartão da unidade 3) confirmada por página própria do
 *   Wikcionário.
 * - Profissões: lekár, učiteľ, študent (com o feminino “študentka” dado pela própria página como
 *   “female equivalent”) e kuchár — confirmadas por página própria ou por fontes de ensino
 *   cruzadas (ling-app.com/blog/occupations-in-slovak, goethe-verlag.com).
 * - Sentimentos: šťastný, smutný, unavený e hladný (com a concordância de gênero šťastný/-á,
 *   hladný/-á explicada em fonte de ensino, academy.europa.eu e talkpal.ai/vocabulary/
 *   slovak-words-for-various-emotions).
 * - Verbos môcť (poder, no sentido de permissão/possibilidade — o Wikcionário nota que “vedieť”,
 *   já no pacote desde o A1, é quem cobre “poder” no sentido de capacidade) e musieť (precisar,
 *   ter que): conjugação completa confirmada por página própria do Wikcionário
 *   (en.wiktionary.org/wiki/môcť, en.wiktionary.org/wiki/musieť).
 * - Números 20, 30, 50 e 100: confirmados por languagesandnumbers.com/how-to-count-in-slovak e
 *   omniglot.com/language/numbers/slovak.htm (o padrão -dsať para as dezenas de 20 a 49 e
 *   -desiat de 50 em diante está documentado nessas mesmas fontes).
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['ahoj', 'oi, olá (informal; também serve de tchau)', 'interjeição', 'Expressões', '👋', 'Ahoj! Ako sa máš?'],
  ['dobrý deň', 'bom dia; boa tarde (formal, durante o dia)', 'interjeição', 'Expressões', '🌅', 'Dobrý deň! Ako sa máte?'],
  ['dobrý večer', 'boa noite (ao chegar)', 'interjeição', 'Expressões', '🌇', 'Dobrý večer! Ako sa máte?'],
  ['dobrú noc', 'boa noite (ao se despedir ou ir dormir)', 'interjeição', 'Expressões', '🌙', 'Dobrú noc, mami!'],
  ['dovidenia', 'tchau, até logo (formal)', 'interjeição', 'Expressões', '👋', 'Dovidenia a ďakujem!'],
  ['ďakujem', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Ďakujem veľmi pekne!'],
  ['prosím', 'por favor; de nada', 'interjeição', 'Expressões', '🙏', 'Kávu, prosím.'],
  ['prepáčte', 'com licença, desculpe (formal)', 'interjeição', 'Expressões', '🙏', 'Prepáčte, kde je stanica?'],
  ['ako sa máš?', 'como vai? (informal)', 'expressão', 'Expressões', '🙂', 'Ahoj, Zuzka! Ako sa máš?'],
  // ── Essenciais ──
  ['áno', 'sim (na fala, também “hej”)', 'partícula', 'Essenciais', '👍', 'Áno, prosím.'],
  ['nie', 'não', 'partícula', 'Essenciais', '👎', 'Nie, ďakujem.'],
  ['a', 'e', 'conjunção', 'Essenciais', null, 'Chlieb a syr.'],
  ['alebo', 'ou', 'conjunção', 'Essenciais', null, 'Káva alebo čaj?'],
  ['veľmi', 'muito', 'advérbio', 'Essenciais', null, 'Je to veľmi dobré.'],
  ['tiež', 'também', 'advérbio', 'Essenciais', null, 'Ja tiež hovorím po slovensky.'],
  ['dobre', 'bem', 'advérbio', 'Essenciais', '👌', 'Dobre, ďakujem. A ty?'],
  ['čo', 'o que, que', 'pronome', 'Essenciais', '❓', 'Čo je to?'],
  ['kde', 'onde', 'advérbio', 'Essenciais', '❓', 'Kde bývaš?'],
  ['ako', 'como', 'advérbio', 'Essenciais', '❓', 'Ako sa voláš?'],
  ['odkiaľ', 'de onde', 'advérbio', 'Essenciais', '❓', 'Odkiaľ si?'],
  ['mesto', 'cidade', 'substantivo', 'Essenciais', '🏙️', 'Bratislava je krásne mesto.', 'n'],
  ['dom', 'casa', 'substantivo', 'Casa', '🏠', 'Môj dom je malý.', 'm'],
  ['pes', 'cachorro', 'substantivo', 'Animais', '🐕', 'Pes spí.', 'm'],
  ['mačka', 'gato', 'substantivo', 'Animais', '🐈', 'Mačka je čierna.', 'f'],
  ['dobrý', 'bom (fem. dobrá, neutro dobré)', 'adjetivo', 'Descrições', '👍', 'Chlieb je dobrý.'],
  ['veľký', 'grande (fem. veľká, neutro veľké)', 'adjetivo', 'Descrições', '📏', 'Moja rodina je veľká.'],
  ['malý', 'pequeno (fem. malá, neutro malé)', 'adjetivo', 'Descrições', '📏', 'Mačka je malá.'],
  // ── Pessoas ──
  ['ja', 'eu', 'pronome', 'Pessoas', '🙋', 'Ja sa volám Anna.'],
  ['ty', 'tu, você', 'pronome', 'Pessoas', '🫵', 'A ty? Ako sa voláš?'],
  ['on', 'ele', 'pronome', 'Pessoas', '👨', 'On je z Košíc.'],
  ['ona', 'ela', 'pronome', 'Pessoas', '👩', 'Ona je z Bratislavy.'],
  ['my', 'nós', 'pronome', 'Pessoas', '🙌', 'My hovoríme po slovensky.'],
  ['vy', 'vocês; o senhor, a senhora (formal)', 'pronome', 'Pessoas', '🫵', 'Odkiaľ ste vy?'],
  ['oni', 'eles', 'pronome', 'Pessoas', '👥', 'Oni bývajú v Bratislave.'],
  ['meno', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Moje meno je Linu.', 'n'],
  ['kamarát', 'amigo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'To je môj kamarát.', 'm'],
  ['kamarátka', 'amiga', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'To je moja kamarátka.', 'f'],
  // ── Verbos-chave ──
  ['byť', 'ser, estar (som, si, je)', 'verbo', 'Verbos-chave', '🧑', 'Som zo São Paula.'],
  ['mať', 'ter (mám, máš, má)', 'verbo', 'Verbos-chave', '🤲', 'Mám brata.'],
  ['volať sa', 'chamar-se (volám sa, voláš sa)', 'verbo', 'Verbos-chave', '🏷️', 'Volám sa Anna Nováková.'],
  ['hovoriť', 'falar (hovorím, hovoríš)', 'verbo', 'Verbos-chave', '🗣️', 'Hovorím trochu po slovensky.'],
  ['bývať', 'morar (bývam, bývaš)', 'verbo', 'Verbos-chave', '🏠', 'Bývam v Košiciach.'],
  ['ísť', 'ir (a pé: idem, ideš)', 'verbo', 'Verbos-chave', '🚶', 'Idem domov.'],
  ['jesť', 'comer (jem, ješ; perf. zjesť)', 'verbo', 'Verbos-chave', '🍽️', 'Jem chlieb so syrom.'],
  ['piť', 'beber (pijem, piješ; perf. vypiť)', 'verbo', 'Verbos-chave', '🥤', 'Pijem vodu.'],
  ['mať rád', 'gostar (lit. “ter querido”: mám rád, uma mulher diz “mám rada”)', 'expressão', 'Verbos-chave', '❤️', 'Mám rád kávu.'],
  ['vedieť', 'saber (viem, vieš)', 'verbo', 'Verbos-chave', '🧠', 'Neviem.'],
  ['chcieť', 'querer (chcem, chceš)', 'verbo', 'Verbos-chave', '💭', 'Chcem sa učiť slovenčinu.'],
  ['učiť sa', 'aprender, estudar (učím sa; perf. naučiť sa)', 'verbo', 'Verbos-chave', '📚', 'Učím sa slovenčinu.'],
  // ── Pessoas (família) ──
  ['rodina', 'família', 'substantivo', 'Pessoas', '👪', 'Moja rodina je veľká.', 'f'],
  ['mama', 'mãe', 'substantivo', 'Pessoas', '👩', 'Moja mama sa volá Eva.', 'f'],
  ['otec', 'pai', 'substantivo', 'Pessoas', '👨', 'Môj otec je z Košíc.', 'm'],
  ['brat', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Môj brat má desať rokov.', 'm'],
  ['sestra', 'irmã', 'substantivo', 'Pessoas', '🧑', 'Mám sestru.', 'f'],
  ['syn', 'filho', 'substantivo', 'Pessoas', '🧒', 'Ich syn je malý.', 'm'],
  ['dcéra', 'filha', 'substantivo', 'Pessoas', '🧒', 'Naša dcéra má rada mačky.', 'f'],
  // ── Alimentação ──
  ['voda', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Vodu, prosím.', 'f'],
  ['chlieb', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'Chlieb je čerstvý.', 'm'],
  ['mlieko', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'Mlieko je biele.', 'n'],
  ['syr', 'queijo', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'Mám rád syr.', 'm'],
  ['káva', 'café', 'substantivo', 'Alimentação e Restaurantes', '☕', 'Kávu, prosím.', 'f'],
  ['víno', 'vinho', 'substantivo', 'Alimentação e Restaurantes', '🍷', 'Červené víno, prosím.', 'n'],
  // ── Números ──
  ['jeden', 'um (fem. jedna, neutro jedno)', 'numeral', 'Números', '1️⃣', 'Jeden chlieb, prosím.'],
  ['dva', 'dois (fem. e neutro dve)', 'numeral', 'Números', '2️⃣', 'Dva čaje, prosím.'],
  ['tri', 'três', 'numeral', 'Números', '3️⃣', 'Tri kávy, prosím.'],
  ['štyri', 'quatro', 'numeral', 'Números', '4️⃣', 'Mačka má štyri nohy.'],
  ['päť', 'cinco', 'numeral', 'Números', '5️⃣', 'Päť dní.'],
  ['šesť', 'seis', 'numeral', 'Números', '6️⃣', 'Šesť rokov.'],
  ['sedem', 'sete', 'numeral', 'Números', '7️⃣', 'Týždeň má sedem dní.'],
  ['osem', 'oito', 'numeral', 'Números', '8️⃣', 'Osem hodín.'],
  ['deväť', 'nove', 'numeral', 'Números', '9️⃣', 'Deväť rokov.'],
  ['desať', 'dez', 'numeral', 'Números', '🔟', 'Desať eur.'],
  // ── Tempo ──
  ['dnes', 'hoje', 'advérbio', 'Tempo', '📅', 'Dnes je pondelok.'],
  ['zajtra', 'amanhã', 'advérbio', 'Tempo', '📅', 'Zajtra je sobota.'],
  ['včera', 'ontem', 'advérbio', 'Tempo', '📅', 'Včera, dnes a zajtra.'],
  ['pondelok', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'Dnes je pondelok.', 'm'],
  ['utorok', 'terça-feira', 'substantivo', 'Tempo', '📅', 'Dnes je utorok.', 'm'],
  ['streda', 'quarta-feira', 'substantivo', 'Tempo', '📅', 'Dnes je streda.', 'f'],
  ['štvrtok', 'quinta-feira', 'substantivo', 'Tempo', '📅', 'Dnes je štvrtok.', 'm'],
  ['piatok', 'sexta-feira', 'substantivo', 'Tempo', '📅', 'Dnes je piatok.', 'm'],
  ['sobota', 'sábado', 'substantivo', 'Tempo', '📅', 'Dnes je sobota.', 'f'],
  ['nedeľa', 'domingo', 'substantivo', 'Tempo', '📅', 'Dnes je nedeľa.', 'f'],
  // ── Cores ──
  ['červený', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Víno je červené.'],
  ['modrý', 'azul', 'adjetivo', 'Cores', '🔵', 'Obloha je modrá.'],
  ['zelený', 'verde', 'adjetivo', 'Cores', '🟢', 'Tráva je zelená.'],
  ['biely', 'branco', 'adjetivo', 'Cores', '⚪', 'Mlieko je biele.'],
  ['čierny', 'preto', 'adjetivo', 'Cores', '⚫', 'Mačka je čierna.'],

  // ════════ A2.1 e A2.2 (sessão de 09/10/2026) ════════
  // ── Clima ──
  ['dážď', 'chuva (gen. dažďa)', 'substantivo', 'Clima', '🌧️', 'Vonku je dážď.', 'm'],
  ['slnko', 'sol', 'substantivo', 'Clima', '☀️', 'Dnes je slnko.', 'n'],
  ['vietor', 'vento (gen. vetra)', 'substantivo', 'Clima', '💨', 'Vonku je silný vietor.', 'm'],
  ['horúco', 'calor (está calor; usa-se com “je”, sem sujeito)', 'advérbio', 'Clima', '🥵', 'Dnes je horúco.'],
  ['zima', 'frio (está frio; a mesma palavra também quer dizer “inverno”)', 'substantivo', 'Clima', '🥶', 'Dnes je zima.', 'f'],
  ['chladno', 'frio ameno, fresco (está frio/fresco; usa-se com “je”)', 'advérbio', 'Clima', '🧊', 'Večer je chladno.'],
  // ── Roupas ──
  ['košeľa', 'camisa', 'substantivo', 'Roupas', '👔', 'Moja košeľa je biela.', 'f'],
  ['nohavice', 'calça (de “noha”, perna; a palavra só existe no plural)', 'substantivo', 'Roupas', '👖', 'Moje nohavice sú čierne.', 'f'],
  ['topánka', 'sapato (mais usada no plural, topánky)', 'substantivo', 'Roupas', '👟', 'Moje topánky sú nové.', 'f'],
  ['kabát', 'casaco', 'substantivo', 'Roupas', '🧥', 'Môj kabát je teplý.', 'm'],
  // ── Corpo ──
  ['hlava', 'cabeça', 'substantivo', 'Corpo', '🧠', 'Bolí ma hlava.', 'f'],
  ['ruka', 'mão, braço (o eslovaco não separa os dois sentidos)', 'substantivo', 'Corpo', '✋', 'Ruka je čistá.', 'f'],
  ['oko', 'olho (pl. oči)', 'substantivo', 'Corpo', '👁️', 'Mám modré oči.', 'n'],
  ['noha', 'perna, pé (o eslovaco não separa os dois sentidos)', 'substantivo', 'Corpo', '🦵', 'Noha ma bolí.', 'f'],
  ['ústa', 'boca (só existe no plural)', 'substantivo', 'Corpo', '👄', 'Ústa sú malé.', 'n'],
  // ── Lugares ──
  ['škola', 'escola (loc. škole)', 'substantivo', 'Lugares', '🏫', 'Idem do školy.', 'f'],
  ['nemocnica', 'hospital (loc. nemocnici)', 'substantivo', 'Lugares', '🏥', 'Pracujem v nemocnici.', 'f'],
  ['obchod', 'loja (loc. obchode)', 'substantivo', 'Lugares', '🏬', 'Obchod je v meste.', 'm'],
  ['ulica', 'rua (loc. ulici)', 'substantivo', 'Lugares', '🛣️', 'Bývam na tejto ulici.', 'f'],
  ['reštaurácia', 'restaurante (loc. reštaurácii)', 'substantivo', 'Lugares', '🍽️', 'Jeme v reštaurácii.', 'f'],
  // ── Profissões ──
  ['lekár', 'médico (fem. lekárka)', 'substantivo', 'Profissões', '👨‍⚕️', 'Môj otec je lekár.', 'm'],
  ['učiteľ', 'professor (fem. učiteľka)', 'substantivo', 'Profissões', '👨‍🏫', 'Moja mama je učiteľka.', 'm'],
  ['študent', 'estudante (fem. študentka)', 'substantivo', 'Profissões', '🎓', 'Som študent.', 'm'],
  ['kuchár', 'cozinheiro', 'substantivo', 'Profissões', '👨‍🍳', 'On je kuchár.', 'm'],
  // ── Sentimentos ──
  ['šťastný', 'feliz (fem. šťastná)', 'adjetivo', 'Sentimentos', '😊', 'Som šťastný.'],
  ['smutný', 'triste (fem. smutná; subst. smútok, tristeza)', 'adjetivo', 'Sentimentos', '😢', 'Je smutná.'],
  ['unavený', 'cansado (fem. unavená)', 'adjetivo', 'Sentimentos', '😴', 'Sme unavení.'],
  ['hladný', 'com fome (fem. hladná)', 'adjetivo', 'Sentimentos', '🍽️', 'Som hladný.'],
  // ── Verbos-chave (A2) ──
  ['môcť', 'poder (môžem, môžeš, môže — permissão/possibilidade; diferente de “vedieť”, que é saber/conseguir)', 'verbo', 'Verbos-chave', '🆗', 'Môžem ísť?'],
  ['musieť', 'precisar, ter que (musím, musíš, musí)', 'verbo', 'Verbos-chave', '❗', 'Musím ísť domov.'],
  ['robiť', 'fazer; trabalhar (robím, robíš; passado robil)', 'verbo', 'Verbos-chave', '🛠️', 'Čo robíš?'],
  ['pracovať', 'trabalhar (pracujem, pracuješ)', 'verbo', 'Verbos-chave', '💼', 'Pracujem v škole.'],
  // ── Números (A2) ──
  ['dvadsať', 'vinte', 'numeral', 'Números', '2️⃣0️⃣', 'Mám dvadsať rokov.'],
  ['tridsať', 'trinta', 'numeral', 'Números', '3️⃣0️⃣', 'Tridsať dní.'],
  ['päťdesiat', 'cinquenta', 'numeral', 'Números', '5️⃣0️⃣', 'Päťdesiat eur.'],
  ['sto', 'cem', 'numeral', 'Números', '💯', 'Sto rokov.'],
];

export const VOCAB_SK = buildVocab('sk', ROWS);
