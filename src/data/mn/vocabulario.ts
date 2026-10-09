import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do mongol khalkha (mn), em escrita cirílica moderna — a escrita oficial da Mongólia
 * desde 1941/1946, DIFERENTE da escrita mongol vertical tradicional (ainda usada na Mongólia Interior,
 * na China), que não entra neste pacote. Toda palavra abaixo foi conferida em pelo menos uma fonte
 * linguística ou lexicográfica específica do mongol:
 *
 *   - en.wikipedia.org/wiki/Mongolian_language — gramática geral (ordem SOV, harmonia vocálica,
 *     ausência de gênero gramatical e de artigos, sistema de casos, classificação genealógica) e a
 *     frase completa “Bi naizaa avarsan” (“Eu salvei meu amigo”, no original “Би найзаа аварсан”).
 *   - en.wikipedia.org/wiki/Mongolian_Cyrillic_alphabet — o alfabeto cirílico mongol (35 letras: o
 *     russo mais Өө e Үү) e sua história (decreto de 1941, adoção formal em 1946).
 *   - en.wiktionary.org/wiki/Appendix:Mongolian_Swadesh_list — lista Swadesh do mongol (pronomes,
 *     números 1–5, natureza, corpo, verbos básicos, adjetivos, perguntas).
 *   - Verbetes individuais do Wiktionary em inglês, um por palavra, confirmando significado, pronúncia
 *     e classe gramatical: морь (cavalo), гэр (casa/guer), хонь (ovelha), ямаа (cabra), тэмээ (camelo),
 *     сүү (leite), айраг (koumiss, leite de égua fermentado), цай (chá), найз (amigo, com a frase
 *     atestada “Энэ хүн миний найз” = “esta pessoa é meu amigo/minha amiga”), шинэ (novo), улаан
 *     (vermelho, com os compostos atestados “улаан лооль” = tomate vermelho e “улаан лууван” = cenoura
 *     vermelha, que mostram o adjetivo ANTES do substantivo), хоёр (dois), зургаа (seis), долоо (sete),
 *     найм (oito), ес (nove), арав (dez), яагаад (por quê), миний (meu/minha), вэ (partícula de
 *     pergunta com palavras interrogativas), байна (forma presente durativa do verbo “бай”, ser/estar/
 *     existir, com os exemplos atestados “Энд харандаа байна” = “há um lápis aqui” e “Танд мөнгө байна
 *     уу?” = “você tem dinheiro?”), уу (partícula de pergunta de sim/não, com a variante harmônica үү e
 *     a observação de que soa “юу” depois de vogal) e -ж (sufixo converbo, usado sobretudo com “байх”
 *     para o presente contínuo).
 *   - omniglot.com/language/phrases/mongolian.php — frases de cortesia e do dia a dia: “Сайн байна уу?”
 *     (olá), “Сайн, та сайн байна уу?” (bem, e você?), “Таны нэр хэн бэ?” (qual é seu nome?), “Миний
 *     нэр …” (meu nome é …), “Та хаанаас ирсэн бэ?” (de onde você é?), “Би …ээс ирсэн” (eu sou de …),
 *     “Чи монгол хэл мэдэх үү?” (você fala mongol? informal), “Та монгол хэл мэдэх үү?” (você fala
 *     mongol? formal), “Монголоор …-г яаж хэлэх вэ?” (como se diz … em mongol?), “Баярлалаа” (obrigado),
 *     “Танд их баярлалаа” (muito obrigado), “Баяртай” (tchau).
 *
 * O mongol é uma língua da família mongólica (ver nota em index.ts sobre a hipótese “altaica”), SEM
 * gênero gramatical e SEM artigos (confirmado na Wikipédia) — por isso `gender` fica sempre de fora
 * neste pacote. A ordem das palavras é sujeito-objeto-verbo (SOV), e os modificadores (adjetivo,
 * numeral, demonstrativo) vêm ANTES do substantivo, como mostram os compostos atestados com “улаан”
 * (vermelho) citados acima — por isso frases como “Нэг гэр” (uma casa) e “Хоёр морь” (dois cavalos)
 * seguem esse mesmo padrão numeral+substantivo, embora a ordem numeral-substantivo em si não tenha sido
 * conferida palavra por palavra (é uma extensão razoável do padrão adjetivo-substantivo atestado, não
 * uma regra citada diretamente para numerais).
 *
 * SOBRE AS FRASES DE EXEMPLO (honestidade sobre o que é citação direta e o que é combinação):
 *   (a) Quando existe uma frase ATESTADA de verdade numa fonte (Wikipédia, Wiktionary ou Omniglot), ela
 *       é usada tal qual — ex.: “Би найзаа аварсан.”, “Энэ хүн миний найз.”, “Сайн байна уу?”, “Таны нэр
 *       хэн бэ?”, “Та хаанаас ирсэн бэ?”, “Чи/Та монгол хэл мэдэх үү?”, “Монголоор …-г яаж хэлэх вэ?”,
 *       “Баярлалаа.”/“Танд их баярлалаа.”, “Баяртай!”.
 *   (b) Para substantivos sem frase própria atestada, a frase de exemplo usa o padrão demonstrativo
 *       “Энэ ___.” (“isto é ___”), seguindo o mesmo tipo de construção sem cópula que aparece na frase
 *       atestada “Энэ хүн миний найз” (“esta pessoa [é] meu amigo”, sem verbo “ser” explícito).
 *   (c) Para adjetivos, a frase de exemplo usa “___ байна.” (“___ é/está”), seguindo o padrão atestado
 *       em “Сайн байна уу?” (literalmente “bem está?”, onde “сайн” é o adjetivo predicativo e “байна” é
 *       a cópula/existencial).
 *   (d) Para verbos, nenhuma fonte consultada atesta uma frase conjugada específica para cada verbo
 *       deste pacote (a Wikipédia confirma, de forma geral, que o sufixo converbo “-ж” combinado com
 *       “байх” forma o presente contínuo, mas sem exemplos palavra por palavra) — por isso os verbos
 *       aparecem na forma de citação do dicionário (o infinitivo/substantivo verbal terminado em “-х”),
 *       sem frase conjugada inventada.
 *   (e) Para numerais, a frase combina o numeral com um substantivo da lista (ex.: “Хоёр морь.”, dois
 *       cavalos), pela razão exposta acima sobre a ordem numeral-substantivo.
 *
 * NÍVEL A2 (rotina, tempo/clima, compras, transporte, profissões, saúde) — fontes adicionais, cada
 * palavra conferida num verbete individual do Wiktionary em inglês, salvo indicação contrária:
 *   - цаг (tempo/hora/relógio, com o exemplo atestado “дөрвөн цаг” = as quatro estações), өдөр (dia,
 *     plural atestado “өдрүүд”, com os nomes de dia da semana derivados citados pelo próprio verbete:
 *     “бүтэн сайн өдөр” = domingo, “нэг дэх өдөр” = segunda, “гурав дахь өдөр” = quarta, “дөрөв дэх өдөр”
 *     = quinta, “тав дахь өдөр” = sexta, “хагас сайн өдөр” = sábado — terça não é citada por nenhuma
 *     fonte consultada, por isso fica de fora), сар (mês, também “lua”), долоо хоног (semana, composto
 *     atestado de “долоо” sete + “хоног” dia), өглөө (manhã), орой (entardecer/início da noite,
 *     sinônimo atestado “үдэш”), шөнө (noite/madrugada).
 *   - омниглот (omniglot.com/language/phrases/mongolian.php): as três saudações por hora do dia,
 *     atestadas tal qual — “Өглөөний мэнд!” (bom dia), “Өдрийн мэнд!” (boa tarde), “Оройн мэнд!” (boa
 *     noite) — e os votos/despedidas “Сайхан амраарай”/“Сайхан нойрсоорой” (durma bem), “Маргааш
 *     уулзая” (até amanhã), “Дараа уулзая” (até mais), “Сайн яваарай!”/“Сайн сууж байгаарай!” (boa
 *     viagem!/fique bem!, despedida e resposta), “Энэ ямар үнэтэй вэ?” (quanto custa isto?) e “Хурдан
 *     идгээрэй” (que se recupere rápido).
 *   - бороо (chuva, com o verbete citando “бороо орох” = chover), салхи (vento, com o termo relacionado
 *     atestado “хий” = ar), хүйтэн (frio, adjetivo e substantivo, do proto-mongólico “*küyitün”), дулаан
 *     (quente/morno, agradável; também substantivo para “calor”).
 *   - мөнгө (prata/dinheiro), үнэ (preço, com o termo relacionado atestado “үнэтэй” = caro/de valor),
 *     дэлгүүр (loja, com os compostos atestados “хүнсний дэлгүүр” = quitanda, “их дэлгүүр” = loja de
 *     departamentos, “номын дэлгүүр” = livraria), худалдах (vender, com o antônimo atestado “авах” =
 *     comprar), авах (pegar/tomar/ganhar/COMPRAR — o Wiktionary lista “comprar” como um dos sentidos e
 *     também como antônimo direto de “худалдах”).
 *   - машин (carro/máquina, com a frase atestada “Надад машин байна.” = eu tenho um carro, exemplo de
 *     caso dativo-locativo em “надад” = para mim), онгоц (cocho/banheira e, por extensão atestada,
 *     barco/navio e avião — sinônimos atestados “усан онгоц” = barco, “нисэх онгоц” = avião), автобус
 *     (ônibus), галт тэрэг (trem, calque atestado do chinês 火車), зам (caminho/estrada, com o termo
 *     derivado atestado “төмөр зам” = ferrovia, lit. “caminho de ferro”), аялал (viagem/turismo, sinônimo
 *     atestado “аян”).
 *   - багш (professor, com a frase atestada “Тэр сайн багш.” = ele/ela é um bom professor), эмч (médico),
 *     оюутан (estudante universitário, com a frase atestada “Тэр сайн оюутан.” = ele/ela é um bom
 *     estudante, e o sinônimo atestado “сурагч”), жолооч (motorista, de “жолоо” = guidão/rédeas + sufixo
 *     agentivo “-ч”), ажил (trabalho/emprego, com a frase atestada “Түүний ажил эндээс хол биш.” = o
 *     trabalho dele/dela não é longe daqui — exemplo de genitivo “түүний” + ablativo “эндээс”).
 *   - эмнэлэг (hospital/tratamento médico, de “эмнэ-” tratar + sufixo “-лэг”), өвчин (doença/dor).
 *   - сэрэх (despertar/acordar), босох (levantar-se, do proto-mongólico “*bos-”, com os antônimos
 *     atestados “хэвтэх” = deitar-se e “суух” = sentar-se), угаах (lavar, com a forma imperativa atestada
 *     “угаарай” = lave, por favor), хооллох (fazer uma refeição, de “хоол” = comida + sufixo “-лах”),
 *     явах (ir/partir, antônimo atestado de “ирэх” = vir), сурах (aprender/estudar, com a frase atestada
 *     “Тэр монгол хэл сурна.” = ele/ela está aprendendo mongol — exemplo do sufixo de futuro/presente
 *     genérico “-на”), ярих (falar), бичих (escrever), унших (ler, com a frase atestada “Би шинэ ном
 *     уншина.” = eu vou ler um livro novo — outro exemplo do sufixo “-на”).
 *   - хоол (comida/refeição).
 *   - en.wikipedia.org/wiki/Mongolian_language — a tabela de numerais confirma хорь (20), гуч (30), дөч
 *     (40), тавь (50), жар (60), дал (70), ная (80), ер (90) e “нэг зуу” (100, lit. “um cem”); os
 *     numerais de 11 a 19 seguem о padrão atestado “арван + unidade” (ex.: арван нэг = 11), não repetido
 *     aqui por já estar implícito no padrão. A mesma página confirma o sistema de casos usado nos tópicos
 *     de gramática novos (ablativo “-аас/-оос/-ээс/-өөс”, diretivo “руу/рүү/луу/лүү”), o sufixo de
 *     futuro/presente genérico “-на/-но/-нэ/-нө”, o sufixo de passado perfectivo “-сан”, o converbo
 *     “-ж/-ч” (com “байна” para o presente contínuo) e o imperativo negativo “битгий”/“бүү”.
 * Como em todo o pacote, nenhuma palavra ou frase nova entrou sem conferência numa dessas fontes — ver
 * o tópico de gramática correspondente para a citação exata de cada regra.
 */
const ROWS: VocabRow[] = [
  // Pessoas
  ['би', 'eu', 'pronome', 'Pessoas', '🙋', 'Би найзаа аварсан.'],
  ['чи', 'tu, você (informal)', 'pronome', 'Pessoas', '👉', 'Чи монгол хэл мэдэх үү?'],
  ['та', 'você (formal), vocês', 'pronome', 'Pessoas', '🫵', 'Та монгол хэл мэдэх үү?'],
  ['тэр', 'ele, ela', 'pronome', 'Pessoas', '🧑', 'Тэр.'],
  ['ээж', 'mãe', 'substantivo', 'Pessoas', '👩', 'Энэ ээж.'],
  ['аав', 'pai', 'substantivo', 'Pessoas', '👨', 'Энэ аав.'],
  ['найз', 'amigo, amiga', 'substantivo', 'Pessoas', '🤝', 'Энэ хүн миний найз.'],
  // Natureza
  ['нар', 'sol', 'substantivo', 'Natureza', '☀️', 'Энэ нар.'],
  ['ус', 'água', 'substantivo', 'Natureza', '💧', 'Энэ ус.'],
  ['уул', 'montanha', 'substantivo', 'Natureza', '⛰️', 'Энэ уул.'],
  ['тэнгэр', 'céu', 'substantivo', 'Natureza', '🌌', 'Энэ тэнгэр.'],
  ['цас', 'neve', 'substantivo', 'Natureza', '❄️', 'Энэ цас.'],
  // Animais
  ['морь', 'cavalo', 'substantivo', 'Animais', '🐴', 'Энэ морь.'],
  ['хонь', 'ovelha', 'substantivo', 'Animais', '🐑', 'Энэ хонь.'],
  ['ямаа', 'cabra', 'substantivo', 'Animais', '🐐', 'Энэ ямаа.'],
  ['тэмээ', 'camelo', 'substantivo', 'Animais', '🐫', 'Энэ тэмээ.'],
  ['нохой', 'cão', 'substantivo', 'Animais', '🐕', 'Энэ нохой.'],
  ['шувуу', 'pássaro', 'substantivo', 'Animais', '🐦', 'Энэ шувуу.'],
  // Comida
  ['мах', 'carne', 'substantivo', 'Comida', '🍖', 'Энэ мах.'],
  ['цай', 'chá', 'substantivo', 'Comida', '🍵', 'Энэ цай.'],
  ['сүү', 'leite', 'substantivo', 'Comida', '🥛', 'Энэ сүү.'],
  ['айраг', 'airag (leite de égua fermentado)', 'substantivo', 'Comida', '🍶', 'Энэ айраг.'],
  // Corpo
  ['толгой', 'cabeça', 'substantivo', 'Corpo', '👤', 'Энэ толгой.'],
  ['нүд', 'olho', 'substantivo', 'Corpo', '👁️', 'Энэ нүд.'],
  ['гар', 'mão, braço', 'substantivo', 'Corpo', '✋', 'Энэ гар.'],
  ['хөл', 'pé, perna', 'substantivo', 'Corpo', '🦵', 'Энэ хөл.'],
  ['ам', 'boca', 'substantivo', 'Corpo', '👄', 'Энэ ам.'],
  // Casa
  ['гэр', 'casa, guer (tenda redonda mongol)', 'substantivo', 'Casa', '⛺', 'Энэ гэр.'],
  // Números
  ['нэг', 'um', 'numeral', 'Números', '1️⃣', 'Нэг гэр.'],
  ['хоёр', 'dois', 'numeral', 'Números', '2️⃣', 'Хоёр морь.'],
  ['гурав', 'três', 'numeral', 'Números', '3️⃣', 'Гурав хонь.'],
  ['дөрөв', 'quatro', 'numeral', 'Números', '4️⃣', 'Дөрөв ямаа.'],
  ['тав', 'cinco', 'numeral', 'Números', '5️⃣', 'Тав тэмээ.'],
  ['зургаа', 'seis', 'numeral', 'Números', '6️⃣', 'Зургаа нохой.'],
  ['долоо', 'sete', 'numeral', 'Números', '7️⃣', 'Долоо шувуу.'],
  ['найм', 'oito', 'numeral', 'Números', '8️⃣', 'Найм гэр.'],
  ['ес', 'nove', 'numeral', 'Números', '9️⃣', 'Ес морь.'],
  ['арав', 'dez', 'numeral', 'Números', '🔟', 'Арав хонь.'],
  // Verbos
  ['идэх', 'come, comer', 'verbo', 'Verbos', '🍽️', 'Идэх.'],
  ['уух', 'bebe, beber', 'verbo', 'Verbos', '🥤', 'Уух.'],
  ['үзэх', 'vê, ver', 'verbo', 'Verbos', '👀', 'Үзэх.'],
  ['мэдэх', 'sabe, saber, conhecer', 'verbo', 'Verbos', '🧠', 'Мэдэх.'],
  ['унтах', 'dorme, dormir', 'verbo', 'Verbos', '😴', 'Унтах.'],
  ['ирэх', 'vem, vir', 'verbo', 'Verbos', '🚶', 'Ирэх.'],
  // Adjetivos
  ['том', 'grande', 'adjetivo', 'Adjetivos', '📏', 'Тэмээ том байна.'],
  ['жижиг', 'pequeno', 'adjetivo', 'Adjetivos', '🤏', 'Шувуу жижиг байна.'],
  ['сайн', 'bom', 'adjetivo', 'Adjetivos', '👍', 'Сайн байна уу?'],
  ['муу', 'mau, ruim', 'adjetivo', 'Adjetivos', '👎', 'Энэ муу байна.'],
  ['шинэ', 'novo', 'adjetivo', 'Adjetivos', '✨', 'Гэр шинэ байна.'],
  ['улаан', 'vermelho', 'adjetivo', 'Adjetivos', '🔴', 'Нар улаан байна.'],
  ['цагаан', 'branco', 'adjetivo', 'Adjetivos', '⚪', 'Цас цагаан байна.'],
  // Perguntas
  ['хэн', 'quem', 'pronome', 'Perguntas', '❓', 'Таны нэр хэн бэ?'],
  ['юу', 'o quê, o que', 'pronome', 'Perguntas', '❓', 'Юу байна вэ?'],
  ['хаана', 'onde', 'advérbio', 'Perguntas', '❓', 'Та хаанаас ирсэн бэ?'],
  ['хэзээ', 'quando', 'advérbio', 'Perguntas', '❓', 'Хэзээ?'],
  ['яаж', 'como', 'advérbio', 'Perguntas', '❓', 'Монголоор …-г яаж хэлэх вэ?'],
  // Expressões
  ['энэ', 'este, esta, isto', 'pronome', 'Expressões', '👉', 'Энэ хүн миний найз.'],
  ['сайн байна уу', 'olá (lit. “você está bem?”)', 'expressão', 'Expressões', '👋', 'Сайн, та сайн байна уу?'],
  ['баярлалаа', 'obrigado, obrigada', 'expressão', 'Expressões', '🙏', 'Танд их баярлалаа.'],
  ['баяртай', 'tchau, adeus', 'expressão', 'Expressões', '👋', 'Баяртай!'],
  // Nível A2 — ver o parágrafo "NÍVEL A2" no cabeçalho para a citação exata de cada palavra.
  // Tempo
  ['цаг', 'hora, tempo (relógio)', 'substantivo', 'Tempo', '🕐', 'Энэ цаг.'],
  ['өдөр', 'dia', 'substantivo', 'Tempo', '📅', 'Энэ өдөр.'],
  ['сар', 'mês, lua', 'substantivo', 'Tempo', '🌙', 'Энэ сар.'],
  ['долоо хоног', 'semana', 'substantivo', 'Tempo', '🗓️', 'Энэ долоо хоног.'],
  ['өглөө', 'manhã', 'substantivo', 'Tempo', '🌅', 'Өглөөний мэнд!'],
  ['орой', 'entardecer, início da noite', 'substantivo', 'Tempo', '🌆', 'Оройн мэнд!'],
  ['шөнө', 'noite (madrugada)', 'substantivo', 'Tempo', '🌃', 'Энэ шөнө.'],
  // Clima
  ['бороо', 'chuva', 'substantivo', 'Clima', '🌧️', 'Энэ бороо.'],
  ['салхи', 'vento', 'substantivo', 'Clima', '💨', 'Энэ салхи.'],
  ['хүйтэн', 'frio', 'adjetivo', 'Clima', '🥶', 'Цас хүйтэн байна.'],
  ['дулаан', 'quente, morno (agradável)', 'adjetivo', 'Clima', '🌡️', 'Нар дулаан байна.'],
  // Compras
  ['мөнгө', 'dinheiro, prata', 'substantivo', 'Compras', '💰', 'Энэ мөнгө.'],
  ['үнэ', 'preço', 'substantivo', 'Compras', '🏷️', 'Энэ үнэ.'],
  ['үнэтэй', 'caro, de preço alto', 'adjetivo', 'Compras', '💸', 'Энэ ямар үнэтэй вэ?'],
  ['дэлгүүр', 'loja, mercado', 'substantivo', 'Compras', '🏪', 'Энэ дэлгүүр.'],
  ['худалдах', 'vende, vender', 'verbo', 'Compras', '💱', 'Худалдах.'],
  ['авах', 'pega, compra, comprar', 'verbo', 'Compras', '🛍️', 'Авах.'],
  // Transporte
  ['машин', 'carro', 'substantivo', 'Transporte', '🚗', 'Надад машин байна.'],
  ['онгоц', 'barco, avião (veículo)', 'substantivo', 'Transporte', '✈️', 'Энэ онгоц.'],
  ['автобус', 'ônibus', 'substantivo', 'Transporte', '🚌', 'Энэ автобус.'],
  ['галт тэрэг', 'trem', 'substantivo', 'Transporte', '🚆', 'Энэ галт тэрэг.'],
  ['зам', 'caminho, estrada', 'substantivo', 'Transporte', '🛣️', 'Энэ зам.'],
  ['аялал', 'viagem', 'substantivo', 'Transporte', '🧳', 'Энэ аялал.'],
  // Profissões
  ['багш', 'professor, professora', 'substantivo', 'Profissões', '👩‍🏫', 'Тэр сайн багш.'],
  ['эмч', 'médico, médica', 'substantivo', 'Profissões', '👨‍⚕️', 'Энэ эмч.'],
  ['оюутан', 'estudante (universitário)', 'substantivo', 'Profissões', '🎓', 'Тэр сайн оюутан.'],
  ['жолооч', 'motorista', 'substantivo', 'Profissões', '🧑‍✈️', 'Энэ жолооч.'],
  ['ажил', 'trabalho, emprego', 'substantivo', 'Profissões', '💼', 'Түүний ажил эндээс хол биш.'],
  // Saúde
  ['эмнэлэг', 'hospital', 'substantivo', 'Saúde', '🏥', 'Энэ эмнэлэг.'],
  ['өвчин', 'doença, dor', 'substantivo', 'Saúde', '🤒', 'Энэ өвчин.'],
  // Verbos (A2)
  ['сэрэх', 'desperta, acordar', 'verbo', 'Verbos', '⏰', 'Сэрэх.'],
  ['босох', 'levanta-se, levantar-se', 'verbo', 'Verbos', '🧍', 'Босох.'],
  ['угаах', 'lava, lavar', 'verbo', 'Verbos', '🧼', 'Угаарай.'],
  ['хооллох', 'alimenta-se, faz uma refeição', 'verbo', 'Verbos', '🍴', 'Хооллох.'],
  ['явах', 'vai, ir', 'verbo', 'Verbos', '🏃', 'Явах.'],
  ['сурах', 'aprende, estuda, aprender', 'verbo', 'Verbos', '🎒', 'Тэр монгол хэл сурна.'],
  ['ярих', 'fala, falar', 'verbo', 'Verbos', '🗣️', 'Ярих.'],
  ['бичих', 'escreve, escrever', 'verbo', 'Verbos', '✍️', 'Бичих.'],
  ['унших', 'lê, ler', 'verbo', 'Verbos', '📖', 'Би шинэ ном уншина.'],
  // Comida (mais uma palavra A2)
  ['хоол', 'comida, refeição', 'substantivo', 'Comida', '🍲', 'Энэ хоол.'],
  // Números (A2: as dezenas)
  ['хорь', 'vinte', 'numeral', 'Números', '2️⃣0️⃣', 'Хорь гэр.'],
  ['гуч', 'trinta', 'numeral', 'Números', '3️⃣0️⃣', 'Гуч морь.'],
  ['дөч', 'quarenta', 'numeral', 'Números', '4️⃣0️⃣', 'Дөч хонь.'],
  ['тавь', 'cinquenta', 'numeral', 'Números', '5️⃣0️⃣', 'Тавь ямаа.'],
  ['жар', 'sessenta', 'numeral', 'Números', '6️⃣0️⃣', 'Жар тэмээ.'],
  ['дал', 'setenta', 'numeral', 'Números', '7️⃣0️⃣', 'Дал нохой.'],
  ['ная', 'oitenta', 'numeral', 'Números', '8️⃣0️⃣', 'Ная шувуу.'],
  ['ер', 'noventa', 'numeral', 'Números', '9️⃣0️⃣', 'Ер гэр.'],
  ['зуу', 'cem', 'numeral', 'Números', '💯', 'Зуу морь.'],
];

export const VOCAB_MN = buildVocab('mn', ROWS);
