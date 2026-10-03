import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do lingít/tlingit (Lingít, código ISO 639-3 “tli”), língua na-dené falada no sudeste do
 * Alasca (Estados Unidos) e em partes costeiras de Colúmbia Britânica e Yukon (Canadá) — uma língua
 * GRAVEMENTE ameaçada: a Wikipédia em inglês cita estimativas de ~50-200 falantes nativos fluentes nos
 * Estados Unidos e ~120-150 no Canadá (censo de 2016), quase todos com mais de 60 anos, classificada
 * “criticamente em perigo” pela UNESCO. Por isso este pacote é pequeno e 100% verificado, no mesmo
 * espírito dos outros pacotes de língua ameaçada deste app (nv, tpj): cada palavra abaixo foi conferida
 * contra pelo menos uma fonte real e aberta, nunca tirada de memória.
 *
 * FONTES:
 * - en.wikipedia.org/wiki/Tlingit_language — classificação (ramo própria e distinto dentro do
 *   na-dené, não atabascano/não aparentado de perto com o navajo — ver index.ts), número de falantes,
 *   região (sudeste do Alasca e oeste do Canadá), sistemas de escrita, visão geral do inventário de
 *   consoantes (série quase completa de ejetivas) e do sistema de tom, natureza polissintética do
 *   verbo, e a frase “Lingít x̱ʼéinax̱” (“a língua lingít”, lit. “boca/fala lingít”, usada ali como
 *   exemplo do sufixo perlativo “-nax̱”);
 * - en.wikipedia.org/wiki/Tlingit_phonology — contagem e organização do inventário consonantal (mais
 *   de 40 consoantes; falta só uma africada ejetiva, [ʃʼ], para a série ser completa; sem [l] sonoro
 *   nem labiais, exceto em empréstimos recentes do inglês), sistemas de tom por dialeto (dois tons nos
 *   dialetos do norte/transicionais, três tons no dialeto do sul, e um sistema de registro de vogal —
 *   sem tom — no dialeto tongass) e a marcação do tom na ortografia do tlingit do interior (agudo =
 *   vogal curta de tom alto, circunflexo = vogal longa de tom alto, grave = vogal longa de tom baixo);
 * - en.wikipedia.org/wiki/Tlingit — o povo lingít: cerca de 22.600 pessoas no Alasca e 2.110 no Canadá
 *   (censo dos EUA de 2020 e dados citados para o Canadá), as duas metades (moieties) Raven (corvo) e
 *   Eagle (águia), clãs e descendência matrilinear, autodesignação “lingít” traduzida como “povo das
 *   marés”;
 * - en.wikipedia.org/wiki/Tlingit_grammar — ordem SOV por padrão (mas flexível), natureza polissintética
 *   do verbo (um só verbo pode equivaler a uma frase inteira em português), sistema de pronomes
 *   (sujeito, objeto, independentes, com distinções de saliência na 3ª pessoa) — e o fato de que, nos
 *   artigos consultados, a própria Wikipédia e o Wiktionary não registram uma classe de “verbos” com
 *   forma de citação simples (infinitivo): por isso este pacote não tem a categoria “Verbos-chave” —
 *   ver a nota abaixo e em index.ts;
 * - en.wiktionary.org (Category:Tlingit_lemmas, 626 verbetes; e cada palavra abaixo, conferida
 *   individualmente): a maior parte vem do “Dictionary of Tlingit” de Keri Edwards (Sealaska Heritage
 *   Institute, 2009), citado nos próprios verbetes do Wiktionary; o cesto “ḵákw” vem especificamente do
 *   “Tlingit Online Dictionary” de X̱ʼunei Lance Twitchell (Juneau, Alasca, 2020), também citado no
 *   Wiktionary;
 * - www.omniglot.com/writing/tlingit.htm — os três sistemas de ortografia latina em uso (popular
 *   revisada, canadense, “de e-mail”), e a pronúncia do próprio nome “Tlingit” em inglês ([ˈklɪŋkɪt]).
 *
 * DECISÕES IMPORTANTES:
 * 1. SEM a categoria “Verbos-chave”: o tlingit é polissintético — um verbo muda de forma conforme
 *    sujeito, objeto, modo, aspecto e um “classificador”, tudo preso à própria raiz (ver gramatica.ts).
 *    Nem a Wikipédia (Tlingit_grammar) nem o Wiktionary (cujas 626 palavras lingít se dividem só em
 *    substantivos, adjetivos, pronomes, numerais, partículas, advérbios, determinantes e interjeições —
 *    NENHUMA delas categorizada como verbo) trazem uma forma de citação simples para um verbo lingít
 *    fora de frases já totalmente conjugadas. Por isso, em vez de inventar um “infinitivo” que nenhuma
 *    fonte confirma, este pacote simplesmente não tem verbos de ação no vocabulário — a mesma escolha
 *    que o pacote do navajo (nv) fez por um motivo parecido (ver nv/vocabulario.ts).
 * 2. Substantivos INALIENÁVEIS (parentesco e partes do corpo: “éesh” pai, “tláa” mãe, “yádi” filho/a,
 *    “jín” mão, “waaḵ” olho, “lú” nariz, “gúk” orelha, “goosh” polegar, “kool” umbigo) não podem
 *    aparecer sozinhos em lingít: o Wiktionary mostra que cada um deles exige um possuidor, com o
 *    prefixo “ax̱-” para “meu/minha” (o próprio Wiktionary lista “ax̱ tláa”, “minha mãe”, como forma
 *    citada) ou “du-” para “dele/dela”. Por isso as frases de exemplo abaixo usam “Ax̱ ___.” para essas
 *    palavras — é o PRÓPRIO PADRÃO do dicionário (Edwards 2009, via Wiktionary), não uma frase nova
 *    inventada. Já para substantivos alienáveis (como “hít”, casa), o Wiktionary mostra uma estratégia
 *    diferente, com sufixo (“du hídi”, “a casa dele/dela”) — como esse paradigma completo não foi
 *    conferido palavra por palavra, este pacote não tenta aplicá-lo às outras palavras.
 * 3. Os adjetivos lingít têm posição fixa: “pré-nominais” (vêm antes do substantivo: “aakʼé”, bom;
 *    “aatlein”, muito) ou “pós-nominais” (vêm depois: “tlein”, grande). Quando a posição de um adjetivo
 *    está confirmada no Wiktionary, este pacote monta frases curtas respeitando essa ordem (“Aakʼé
 *    yaakw.”, boa canoa; “Yaakw tlein.”, canoa grande); quando a posição não vinha explícita na fonte
 *    consultada (“yées”, “tlagu”), a palavra fica sozinha, sem frase montada.
 * 4. Este pacote ainda não tem uma função `reading` (romanização alternativa): a própria ortografia
 *    latina do tlingit já é a forma usada nas fontes consultadas, sem um sistema de leitura auxiliar
 *    equivalente ao kana do japonês.
 * 5. Sem gênero gramatical: nenhuma fonte consultada (Tlingit_grammar, Wiktionary) descreve uma divisão
 *    de substantivos por gênero (masculino/feminino/neutro) no lingít — o sistema de pronomes de 3ª
 *    pessoa distingue “saliência” no discurso, não gênero (ver gramatica.ts) — por isso `genders: []`.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  // nenhuma fonte consultada registra uma palavra fixa para “oi”/“olá” em lingít (a busca por “hello
  // Tlingit” no Wiktionary não encontrou nenhum verbete): por isso este pacote não tem uma saudação de
  // abertura inventada, e começa com a única interjeição bem confirmada, o agradecimento.
  ['gunalchéesh', 'obrigado(a) (lit. substantivo verbal “não é fácil de conseguir para si mesmo”)', 'interjeição', 'Expressões', '🙏', 'Gunalchéesh!'],
  // ── Essenciais ──
  ['gé', 'partícula que transforma uma frase em pergunta de sim/não', 'partícula', 'Essenciais', '❓', 'Gé?'],
  ['ḵa', 'e (conjunção)', 'conjunção', 'Essenciais', '➕', 'Keitl ḵa shaawát.'],
  ['yáa', 'este, esta, isto (algo perto de quem fala)', 'pronome', 'Essenciais', '👉', 'Yáa.'],
  ['ldakát', 'tudo, todo', 'partícula', 'Essenciais', '💯', 'Ldakát.'],
  ['aatlein', 'muito (vem antes do substantivo)', 'advérbio', 'Essenciais', '📈', 'Aatlein héen.'],
  // ── Pessoas ──
  ['x̱át', 'eu', 'pronome', 'Pessoas', '🙋', 'X̱át.'],
  ['wa.é', 'tu, você', 'pronome', 'Pessoas', '🫵', 'Wa.é.'],
  ['hú', 'ele, ela', 'pronome', 'Pessoas', '👤', 'Hú.'],
  ['hás', 'eles, elas', 'pronome', 'Pessoas', '👥', 'Hás.'],
  ['haa', 'nosso, nossa (possessivo de nós)', 'pronome', 'Pessoas', '🤝', 'Haa.'],
  ['ax̱', 'meu, minha (prefixo possessivo, usado com substantivos inalienáveis)', 'pronome', 'Pessoas', '🤲', 'Ax̱ tláa.'],
  ['ḵáa', 'homem', 'substantivo', 'Pessoas', '🧑', 'Ḵáa.'],
  ['shaawát', 'mulher', 'substantivo', 'Pessoas', '👩', 'Shaawát.'],
  ['yádi', 'filho, filha, criança (substantivo inalienável; também “pequeno, filhote”)', 'substantivo', 'Pessoas', '🧒', 'Ax̱ yádi.'],
  ['éesh', 'pai (substantivo inalienável: precisa de um possuidor, “ax̱ éesh” = meu pai)', 'substantivo', 'Pessoas', '👨', 'Ax̱ éesh.'],
  ['tláa', 'mãe (substantivo inalienável: precisa de um possuidor, “ax̱ tláa” = minha mãe)', 'substantivo', 'Pessoas', '👩', 'Ax̱ tláa.'],
  ['lingít', 'pessoa, ser humano; (adjetivo, antes do substantivo) lingít, tlingit — também a autodesignação do povo', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Lingít x̱ʼéinax̱.'],
  // ── Natureza ──
  ['g̱agaan', 'sol', 'substantivo', 'Natureza', '☀️', 'G̱agaan.'],
  ['dís', 'lua; mês', 'substantivo', 'Natureza', '🌙', 'Dís.'],
  ['héen', 'água; rio', 'substantivo', 'Natureza', '💧', 'Héen.'],
  ['áa', 'lago', 'substantivo', 'Natureza', '🏞️', 'Áa.'],
  ['x̱ʼaan', 'fogo; (adjetivo) vermelho', 'substantivo', 'Natureza', '🔥', 'X̱ʼaan.'],
  ['dleit', 'neve; (adjetivo) branco', 'substantivo', 'Natureza', '❄️', 'Dleit.'],
  // ── Animais ──
  ['keitl', 'cachorro', 'substantivo', 'Animais', '🐕', 'Keitl.'],
  ['yéil', 'corvo (também o nome de uma das duas metades do povo lingít)', 'substantivo', 'Animais', '🐦‍⬛', 'Yéil.'],
  ['chʼáakʼ', 'águia-de-cabeça-branca (também associada à outra metade do povo lingít)', 'substantivo', 'Animais', '🦅', 'Chʼáakʼ.'],
  ['g̱ooch', 'lobo', 'substantivo', 'Animais', '🐺', 'G̱ooch.'],
  ['x̱áat', 'peixe; salmão', 'substantivo', 'Animais', '🐟', 'X̱áat.'],
  ['sʼeek', 'urso-negro-americano', 'substantivo', 'Animais', '🐻', 'Sʼeek.'],
  // ── Alimentação ──
  ['tléiḵw', 'baga(s), fruta silvestre', 'substantivo', 'Alimentação', '🫐', 'Tléiḵw.'],
  ['tayeidí', 'alga marinha, quelpo', 'substantivo', 'Alimentação', '🌿', 'Tayeidí.'],
  ['yaaw', 'arenque', 'substantivo', 'Alimentação', '🐠', 'Yaaw.'],
  ['kʼínkʼ', 'cabeças de salmão fermentadas, comida tradicional lingít', 'substantivo', 'Alimentação', '🍽️', 'Kʼínkʼ.'],
  // ── Corpo (substantivos inalienáveis: ver nota 2 acima) ──
  ['jín', 'mão; pata', 'substantivo', 'Corpo', '✋', 'Ax̱ jín.'],
  ['waaḵ', 'olho (lit. “buraco do olho”)', 'substantivo', 'Corpo', '👁️', 'Ax̱ waaḵ.'],
  ['lú', 'nariz; bico', 'substantivo', 'Corpo', '👃', 'Ax̱ lú.'],
  ['gúk', 'orelha', 'substantivo', 'Corpo', '👂', 'Ax̱ gúk.'],
  ['goosh', 'polegar', 'substantivo', 'Corpo', '👍', 'Ax̱ goosh.'],
  ['kool', 'umbigo', 'substantivo', 'Corpo', '🫃', 'Ax̱ kool.'],
  // ── Casa ──
  ['hít', 'casa (inclusive a casa de clã tradicional)', 'substantivo', 'Casa', '🏠', 'Hít.'],
  ['lítaa', 'faca', 'substantivo', 'Casa', '🔪', 'Lítaa.'],
  ['shál', 'colher', 'substantivo', 'Casa', '🥄', 'Shál.'],
  ['yaakw', 'canoa, barco', 'substantivo', 'Casa', '🛶', 'Aakʼé yaakw.'],
  ['kootéeyaa', 'mastro totêmico', 'substantivo', 'Casa', '🗿', 'Kootéeyaa.'],
  ['ḵákw', 'cesto, cesta', 'substantivo', 'Casa', '🧺', 'Ḵákw.'],
  // ── Números ──
  ['tléixʼ', 'um', 'numeral', 'Números', '1️⃣', 'Tléixʼ.'],
  ['déix̱', 'dois', 'numeral', 'Números', '2️⃣', 'Tléixʼ, déix̱.'],
  ['násʼk', 'três', 'numeral', 'Números', '3️⃣', 'Tléixʼ, déix̱, násʼk.'],
  ['daaxʼoon', 'quatro', 'numeral', 'Números', '4️⃣', 'Násʼk, daaxʼoon.'],
  ['keijín', 'cinco (lit. “kei”, para cima, + “jín”, mão)', 'numeral', 'Números', '5️⃣', 'Daaxʼoon, keijín.'],
  ['tleidooshú', 'seis', 'numeral', 'Números', '6️⃣', 'Keijín, tleidooshú.'],
  ['dax̱adooshú', 'sete', 'numeral', 'Números', '7️⃣', 'Tleidooshú, dax̱adooshú.'],
  ['nasʼgadooshú', 'oito', 'numeral', 'Números', '8️⃣', 'Dax̱adooshú, nasʼgadooshú.'],
  ['gooshúḵ', 'nove', 'numeral', 'Números', '9️⃣', 'Nasʼgadooshú, gooshúḵ.'],
  ['jinkaat', 'dez (lit. “jín”, mão, + “kaat”)', 'numeral', 'Números', '🔟', 'Gooshúḵ, jinkaat.'],
  // ── Descrições ──
  ['aakʼé', 'bom, bem (adjetivo pré-nominal: vem antes do substantivo)', 'adjetivo', 'Descrições', '👍', 'Aakʼé yaakw.'],
  ['tlein', 'grande (adjetivo pós-nominal: vem depois do substantivo)', 'adjetivo', 'Descrições', '📏', 'Yaakw tlein.'],
  ['yées', 'novo, jovem, fresco', 'adjetivo', 'Descrições', '✨', 'Yées.'],
  ['tlagu', 'antigo, do passado', 'adjetivo', 'Descrições', '🏺', 'Tlagu.'],
];

export const VOCAB_TLI = buildVocab('tli', ROWS);
