import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do huni kuĩ/hãtxa kuĩ (cbs), língua indígena viva da família Pano, falada em terras
 * indígenas do leste do Acre (Brasil) — rio Jordão, Purus, Humaitá, Breu — e no sudeste do Peru, ao
 * longo dos rios Curanja e Purus. SEM NENHUMA relação com o tupi-guarani, o jê, o aruak (arawak) ou o
 * tukano, famílias de outras línguas indígenas já neste app.
 *
 * Nota sobre nomes: “huni kuin” (lit. “homens verdadeiros”, “gente com costumes conhecidos”) é a
 * autodesignação do POVO, confirmada em pt.wikipedia.org/wiki/Huni_Kuin (redirecionado também a partir
 * de pt.wikipedia.org/wiki/Caxinauá). “Kaxinawá” é um exônimo de origem pejorativa (“povo morcego”,
 * “povo canibal”, “povo que anda à noite”), ainda usado em muitas fontes acadêmicas e oficiais (inclusive
 * no próprio nome do código ISO, ver index.ts), mas não é como o povo se autodenomina. A LÍNGUA, por
 * sua vez, costuma ser chamada “Hãtxa Kuĩ” (também grafada “Hantxa Kuin”) — forma usada tanto por
 * en.wikipedia.org/wiki/Kaxinawá_language quanto pelo próprio quadro de professores indígenas do Acre
 * (cpiacre.org.br, que lista a disciplina “Língua Hãtxa Kuī” nos cursos de formação).
 *
 * Cada palavra abaixo foi conferida em fontes específicas sobre o huni kuĩ/caxinauá (nunca reaproveitada
 * de outra língua indígena deste app):
 *   - pt.wikipedia.org/wiki/Língua_caxinauá — artigo com fonologia (17 consoantes, 11 vogais orais e
 *     nasais), as duas séries de pronomes pessoais (uma “nominativa”: ɨ, mĩ, nũ, mã; outra, com marcas
 *     de caso ergativo -ã e acusativo -a: ɨ, mi, nuku, matu), pronomes possessivos (ɨn “meu”, min “teu”,
 *     nukun “nosso”), numerais de 1 a 10 (sistema de base 10, citando Camargo 1991), ordem SOV, o par de
 *     sufixos modais/evidenciais -kiki (certeza) × -kiaki (“dizem que”), e frases completas com tradução.
 *   - en.wikipedia.org/wiki/Kaxinawá_language — código ISO 639-3 cbs, autoglossônimo “Hãtxa Kuĩ”,
 *     classificação Pano (Mainline Panoan → Nawa → Headwaters), região (Acre e rios Curanja/Purus no
 *     Peru), população, e vocabulário básico (huni “pessoa, homem”, hiwɨ “casa”, mani “banana”, ui
 *     “chuva”, ni “árvore”) e um trecho da Declaração Universal dos Direitos Humanos em caxinauá.
 *   - pt.wikipedia.org/wiki/Huni_Kuin (e o redirecionamento a partir de “Caxinauá”) — autodesignação do
 *     povo, significado do exônimo pejorativo “kaxinawá”, organização social, e vocabulário cultural:
 *     “muka” (poder xamânico), “yuxin” (visões/espíritos), “dume” (tabaco/rapé usado para fumaça
 *     xamânica), “nixi pae” (ayahuasca), “dau” (remédio, com os subtipos “dau bata”, remédios doces, e
 *     “dau muka”, remédios amargos/poderes invisíveis dos espíritos) e “mukaia” (pajé/xamã).
 *   - en.wikipedia.org/wiki/Txai — a palavra “txai” (termo de parentesco cruzado, cunhado/primo
 *     cruzado) “translates roughly to ‘comrade’ in the Kashinawa language”, citada a propósito do álbum
 *     “Txai” (1990) de Milton Nascimento, feito em homenagem a Chico Mendes — usada aqui como forma de
 *     tratamento/saudação informal (ver index.ts).
 *   - cpiacre.org.br/publicacoes — confirma o nome “Hãtxa Kuī” usado pelos próprios professores
 *     indígenas do Acre e cita títulos de livros bilíngues produzidos pela CPI-AC (Comissão Pró-Índio do
 *     Acre) com professores huni kuĩ, como “Shenipabu Miyui” (Histórias dos Antigos) — “miyui” (história,
 *     conto) é usado também em “Huni Kuĩnẽ Miyui” e “Hi Xarabũ miyui”, o que confirma seu sentido.
 *
 * NÃO encontrei, em nenhuma fonte, uma palavra fixa equivalente a “oi”/“olá” ou “obrigado” no huni
 * kuĩ — ver a solução adotada (como já acontece com baniwa, tukano, xavante e kaingang deste app) em
 * index.ts.
 *
 * Frases de exemplo: as que aparecem citadas tal como nas fontes (“Na mani pi wɨ.”, “coma esta banana”;
 * “Ɨ-ã hiwɨ hawɨ̃-rua.”, “minha casa é bonita”) são citações diretas de pt.wikipedia.org/wiki/Língua_
 * caxinauá. As demais frases foram MONTADAS combinando só palavras já atestadas com os dois padrões de
 * frase confirmados nessa mesma fonte — demonstrativo “na” + substantivo (“na mani”, esta banana) e
 * pronome+“-ã” + substantivo (“ɨ-ã hiwɨ”, minha casa) — nunca uma palavra nova inventada, seguindo o
 * mesmo método já usado nos outros pacotes de língua indígena deste app (ver o cabeçalho de
 * vocabulario.ts do baniwa, `src/data/kpc/vocabulario.ts`). As sequências de contagem dos numerais (ex.:
 * “Bɨsti, rabɨ, tsamĩ…”) só encadeiam os próprios numerais, sem montar uma frase com substantivo, porque
 * nenhuma fonte confirma a ordem numeral+substantivo (pode haver classificadores, como em outras línguas
 * pano, não confirmados aqui para o huni kuĩ).
 *
 * Normalização ortográfica: a palavra “txara” (flecha) aparece transcrita em IPA na fonte, como “tʃara”,
 * dentro da frase “ɨ̃ tʃara rã tʃiʃtɨ ki” (minha flecha é curta). Substituí /tʃ/ por “tx” — o dígrafo já
 * confirmado na grafia prática do próprio nome da língua, “Hãtxa Kuĩ”, e em “yuxin” (que usa “x” para
 * /ʃ/) — para não deixar uma transcrição fonética solta como se fosse a forma escrita da palavra; a
 * frase de exemplo mantém a transcrição original da fonte, sem alteração.
 */
export const ROWS: VocabRow[] = [
  // Pessoas: as duas séries pronominais (pt.wikipedia.org/wiki/Língua_caxinauá, citando Camargo 1991) e
  // o autônimo do povo, “huni kuin” (lit. “gente/pessoa verdadeira”), decomposto em duas entradas.
  ['Ɨ', 'eu', 'pronome', 'Pessoas', '🙋', 'Ɨ-ã hiwɨ hawɨ̃-rua.'],
  ['Mĩ', 'tu, você', 'pronome', 'Pessoas', '🫵', 'Ɨ̃ mi-ã tsua mɨkã i, nɨ ri hu ri wɨ a tã.'],
  ['Nũ', 'nós', 'pronome', 'Pessoas', '🙌', 'Nũ huni kuin.'],
  ['Mã', 'vocês', 'pronome', 'Pessoas', '👥', 'Mã huni kuin?'],
  ['Huni', 'pessoa, homem', 'substantivo', 'Pessoas', '🧑', 'Huni kuin.'],
  ['Kuin', 'verdadeiro, real', 'adjetivo', 'Pessoas', '✅', 'Huni kuin.'],
  // Parentesco (ɨpa, ɨwa, aĩ, aĩbu: pt.wikipedia.org/wiki/Língua_caxinauá; txai: en.wikipedia.org/wiki/Txai)
  ['Ɨpa', 'pai', 'substantivo', 'Parentesco', '👨', 'Ɨ-ã ɨpa.'],
  ['Ɨwa', 'mãe', 'substantivo', 'Parentesco', '👩', 'Ɨ-ã ɨwa.'],
  ['Aĩ', 'esposa', 'substantivo', 'Parentesco', '👰', 'Ɨ-ã aĩ.'],
  ['Aĩbu', 'mulher', 'substantivo', 'Parentesco', '👩', 'Na aĩbu.'],
  ['Txai', 'cunhado, primo cruzado; por extensão, amigo, parceiro', 'substantivo', 'Parentesco', '🤝', 'Txai!'],
  // Números (pt.wikipedia.org/wiki/Língua_caxinauá, citando Camargo 1991; confirmados de forma
  // independente em en.wikipedia.org/wiki/Kaxinawá_language para bɨsti, rabɨ, tsamĩ e nati)
  ['Bɨsti', 'um', 'numeral', 'Números', '1️⃣', 'Bɨsti, rabɨ, tsamĩ…'],
  ['Rabɨ', 'dois', 'numeral', 'Números', '2️⃣', 'Rabɨ, tsamĩ, kɨtaş…'],
  ['Tsamĩ', 'três', 'numeral', 'Números', '3️⃣', 'Tsamĩ, kɨtaş, mɨtsã…'],
  ['Kɨtaş', 'quatro', 'numeral', 'Números', '4️⃣', 'Kɨtaş, mɨtsã, sĩti…'],
  ['Mɨtsã', 'cinco', 'numeral', 'Números', '5️⃣', 'Mɨtsã, sĩti, kɨkũ…'],
  ['Sĩti', 'seis', 'numeral', 'Números', '6️⃣', 'Sĩti, kɨkũ, bunɨ…'],
  ['Kɨkũ', 'sete', 'numeral', 'Números', '7️⃣', 'Kɨkũ, bunɨ, usũ…'],
  ['Bunɨ', 'oito', 'numeral', 'Números', '8️⃣', 'Bunɨ, usũ, nati…'],
  ['Usũ', 'nove', 'numeral', 'Números', '9️⃣', 'Usũ, nati.'],
  ['Nati', 'dez', 'numeral', 'Números', '🔟', 'Nati.'],
  // Natureza (pt.wikipedia.org/wiki/Língua_caxinauá e en.wikipedia.org/wiki/Kaxinawá_language, Lista de
  // Swadesh)
  ['Ni', 'árvore', 'substantivo', 'Natureza', '🌳', 'Na ni.'],
  ['Kaya', 'rio', 'substantivo', 'Natureza', '🏞️', 'Na kaya.'],
  ['Ui', 'chuva', 'substantivo', 'Natureza', '🌧️', 'Na ui.'],
  // Corpo (pt.wikipedia.org/wiki/Língua_caxinauá, Lista de Swadesh)
  ['Bɨru', 'olho', 'substantivo', 'Corpo', '👁️', 'Ɨ-ã bɨru.'],
  ['Mɨkɨ̃', 'mão', 'substantivo', 'Corpo', '✋', 'Ɨ-ã mɨkɨ̃.'],
  ['Taɨ', 'pé', 'substantivo', 'Corpo', '🦶', 'Ɨ-ã taɨ.'],
  // Animais e objetos (takara, mani, hiwɨ: pt.wikipedia.org/wiki/Língua_caxinauá e en.wikipedia.org/
  // wiki/Kaxinawá_language; txara: pt.wikipedia.org/wiki/Língua_caxinauá, ver nota de normalização acima)
  ['Takara', 'galinha', 'substantivo', 'Animais e objetos', '🐔', 'Na takara.'],
  ['Mani', 'banana', 'substantivo', 'Animais e objetos', '🍌', 'Na mani pi wɨ.'],
  ['Hiwɨ', 'casa', 'substantivo', 'Animais e objetos', '🏠', 'Ɨ-ã hiwɨ hawɨ̃-rua.'],
  ['Txara', 'flecha', 'substantivo', 'Animais e objetos', '🏹', 'Ɨ̃ tʃara rã tʃiʃtɨ ki.'],
  // Cultura e espiritualidade (pt.wikipedia.org/wiki/Huni_Kuin; mukaia e muka também descritos juntos,
  // na mesma passagem sobre o xamanismo caxinauá)
  ['Muka', 'poder xamânico, força invisível', 'substantivo', 'Cultura', '✨', 'Muka.'],
  ['Yuxin', 'espírito, visão', 'substantivo', 'Cultura', '👁️‍🗨️', 'Yuxin.'],
  ['Dume', 'tabaco, rapé usado em rituais xamânicos', 'substantivo', 'Cultura', '🌿', 'Dume.'],
  ['Nixi pae', 'ayahuasca (bebida ritual)', 'substantivo', 'Cultura', '🍵', 'Nixi pae.'],
  ['Dau', 'remédio', 'substantivo', 'Cultura', '🍃', 'Dau.'],
  ['Mukaia', 'pajé, xamã', 'substantivo', 'Cultura', '🪶', 'Mukaia.'],
  // Posse: pronomes possessivos (pt.wikipedia.org/wiki/Língua_caxinauá)
  ['Ɨn', 'meu', 'pronome', 'Posse', '🫳', 'Ɨn.'],
  ['Min', 'teu', 'pronome', 'Posse', '🫴', 'Min.'],
  ['Nukun', 'nosso', 'pronome', 'Posse', '🤲', 'Nukun.'],
];

export const VOCAB_CBS = buildVocab('cbs', ROWS);
