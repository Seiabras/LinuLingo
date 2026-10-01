import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do baniwa (kpc), língua indígena viva da família Aruak (Arawak), falada na bacia do rio
 * Içana (noroeste do Amazonas, fronteira com a Colômbia e a Venezuela) — SEM NENHUMA relação com o
 * nheengatu (código `yrl`, família tupi-guarani) ou o tukano (código `tuo`, família Tukano), ambos
 * cooficiais na mesma região (São Gabriel da Cachoeira) mas de famílias totalmente diferentes.
 *
 * Nota sobre o código: o ISO 639-3 `kpc` denota formalmente o curripaco (Kurripako); a variante do
 * médio rio Içana (a estudada aqui) tem código próprio, `bwi` (ver iso639-3.sil.org/code/kpc e
 * en.wikipedia.org/wiki/ISO_639:kpc). As duas são, porém, tratadas como dialetos de uma mesma língua
 * por Aikhenvald (1999) e estudadas juntas por Henri Ramirez sob o nome “baniwa-curripaco” — ver a
 * explicação completa em index.ts (`incomplete.note`). Este pacote documenta especificamente o
 * baniwa do médio Içana (o “superdialeto Central”, na classificação de Ramirez).
 *
 * Cada palavra abaixo foi conferida em fontes específicas sobre o baniwa (nunca reaproveitada de
 * outra língua indígena deste app):
 *   - pt.wikipedia.org/wiki/Língua_baniwa — artigo extenso, citando sobretudo Henri Ramirez,
 *     “Línguas Arawak da Amazônia Setentrional” (2001a) e “Dicionário da língua baniwa” (2001b), e
 *     Gerald Taylor, “Introdução à língua Baniwa do Içana” (1991): autodesignação, classificação,
 *     alfabeto, prefixos/sufixos pessoais, pronomes independentes e demonstrativos, classificadores,
 *     numerais, ordem da frase, perguntas, negação, termos de parentesco e três contos tradicionais
 *     (narrados por Domingos de Souza Paiva em 1984, transcritos por Taylor).
 *   - en.wikipedia.org/wiki/Baniwa_of_Içana_language — classificação (Arawakan, Upper Amazon,
 *     Eastern Nawiki), prefixos de sujeito/objeto, os 46 classificadores, o exemplo do prefixo
 *     privativo/comitativo (“iipe” carne → “meepe” magro, “keepe” gordo).
 *   - en.wikipedia.org/wiki/Kurripako_language — continuum dialetal baniwa-curripaco, classificação.
 *   - en.wiktionary.org, categoria “Baniwa lemmas” — as entradas “uni” (água, rio) e “éeno” (céu).
 *   - omniglot.com/language/numbers/baniwa.htm — os numerais de 1 a 20, incluindo o sistema de base
 *     manual (5 = “apeéma pakáapi”, lit. “uma mão”; 10 = “dzameéma pakáapi”, lit. “duas mãos”),
 *     confirmado de forma independente em pt.wikipedia.org (mesma base “pakáapi”, mão).
 *   - pib.socioambiental.org/pt/Povo:Baniwa e povosindigenas.org.br/pt/Povo:Baniwa (Instituto
 *     Socioambiental) — autodesignação “walimanai”, seres cosmológicos (Nhiãperikuli, Kuwai),
 *     categorias ecológicas do rio Içana (hamariene, édzaua, arapê) e termos cerimoniais (pariká,
 *     pudali, maliiri).
 *   - Eick Marcelo Lima de Souza, “Estudo fonológico da língua baniwa-kuripako” (dissertação de
 *     mestrado, 2012, etnolinguistica.wdfiles.com) e Ovídio da Silva Camico, “Situação
 *     sociolinguística da língua baníwa na comunidade Castelo Branco no médio rio Içana” (dissertação
 *     de mestrado, UFAM, 2023, tede.ufam.edu.br) — usadas aqui só para CONFIRMAR de forma cruzada
 *     palavras já citadas por Ramirez/Wikipedia (“hape”, frio, e “dzaawi”, onça, aparecem também,
 *     foneticamente, nessas duas dissertações) e o sentido de “pudali” (troca cerimonial de presentes
 *     entre parentes); as transcrições fonéticas dessas duas fontes não entram como palavras novas no
 *     vocabulário porque usam só o Alfabeto Fonético Internacional, sem uma grafia prática — incluir
 *     uma forma inventada a partir da IPA correria o risco de inventar ortografia, o que este pacote
 *     evita (ver o relatório da entrega).
 *
 * NÃO encontrei, em nenhuma das fontes acima, uma palavra baniwa fixa para “oi”/“olá” ou “obrigado”
 * parecida com as do português — ver a explicação completa (e a solução adotada, como já acontece com
 * o kaingang e o xavante deste app) em index.ts.
 *
 * O baniwa tem nomes INDEPENDENTES (funcionam sem prefixo pessoal: “tsíino”, cão) e nomes DEPENDENTES
 * (exigem um prefixo pessoal possessivo: os termos de parentesco abaixo, citados por Ramirez na forma
 * de dicionário sem prefixo, mas que na fala real sempre vêm precedidos de nu- “meu”, pi- “teu” etc.).
 * As frases de exemplo que não são citações diretas de Ramirez/Taylor foram MONTADAS combinando
 * palavras, prefixos e a ordem de frase (sujeito-verbo-objeto; adjetivo-sujeito) já documentados —
 * nunca uma palavra nova inventada — seguindo o mesmo método já usado nos outros pacotes de língua
 * indígena deste app (ver o cabeçalho de vocabulario.ts do tukano, `src/data/tuo/vocabulario.ts`).
 *
 * O baniwa não marca gênero gramatical nos substantivos comuns (não há artigos “o/a”): a distinção
 * real que a língua tem — feminino/não-feminino — só aparece na 3ª pessoa do singular (pronomes e
 * prefixos/sufixos verbais) — ver gramatica.ts. Por isso `gender` fica sempre de fora aqui.
 */
export const ROWS: VocabRow[] = [
  // Expressões (partículas e advérbios citados em pt.wikipedia.org/wiki/Língua_baniwa, a partir de
  // Ramirez 2001a)
  ['Káphaa', 'partícula de pergunta (sim/não)', 'partícula', 'Expressões', '❓', 'Káphaa phía Walimanai?'],
  ['Kúa', 'o quê?, quem?', 'pronome', 'Expressões', '🤔', 'Kúa íinaiwatsa núawa?'],
  ['Ñame', 'não, negado', 'partícula', 'Expressões', '🚫', 'Ñame kéeruakanhua.'],
  ['Úupi', 'há pouco, passado recente', 'advérbio', 'Expressões', '⏱️', 'Úupi nukapa.'],
  ['Théewa', 'amanhã', 'advérbio', 'Expressões', '🌅', 'Théewa núawa.'],
  ['Wheekudza', 'ontem', 'advérbio', 'Expressões', '🌇', 'Wheekudza nukapa.'],
  // Pessoas: pronomes independentes (tabela completa em pt.wikipedia.org/wiki/Língua_baniwa, citando
  // Ramirez 2001a, pp. 150-152) e a autodesignação do povo/língua (ISA)
  ['Nhúa', 'eu', 'pronome', 'Pessoas', '🙋', 'Nhúa Walimanai.'],
  ['Phía', 'tu, você', 'pronome', 'Pessoas', '🫵', 'Káphaa phía Walimanai?'],
  ['Lhía', 'ele', 'pronome', 'Pessoas', '🧑', 'Lhía Walimanai.'],
  ['Rhúa', 'ela', 'pronome', 'Pessoas', '👩', 'Rhúa Walimanai.'],
  ['Wháa', 'nós', 'pronome', 'Pessoas', '🙌', 'Wháa Walimanai.'],
  ['Nháa', 'eles, elas', 'pronome', 'Pessoas', '👥', 'Nháa Walimanai.'],
  ['Walimanai', 'baniwa (autodesignação do povo e da língua; lit. “os outros novos que vão nascer”)', 'substantivo', 'Pessoas', '🏞️', 'Wháa Walimanai.'],
  // Parentesco (tabela completa em pt.wikipedia.org/wiki/Língua_baniwa, citando Ramirez 2001a); são
  // nomes DEPENDENTES — na fala real levam sempre um prefixo possessivo (nu- “meu”, pi- “teu”…)
  ['Hániri', 'pai', 'substantivo', 'Parentesco', '👨', 'Nu-hániri.'],
  ['Hadua', 'mãe', 'substantivo', 'Parentesco', '👩', 'Nu-hadua.'],
  ['Iri', 'filho', 'substantivo', 'Parentesco', '👦', 'Nu-iri.'],
  ['Íitu', 'filha', 'substantivo', 'Parentesco', '👧', 'Nu-íitu.'],
  ['Pheeri', 'irmão mais velho', 'substantivo', 'Parentesco', '🧑', 'Nu-pheeri.'],
  ['Mhéreeri', 'irmão mais novo', 'substantivo', 'Parentesco', '🧒', 'Nu-mhéreeri.'],
  // Números (pt.wikipedia.org/wiki/Língua_baniwa, citando Ramirez 2001a, e
  // omniglot.com/language/numbers/baniwa.htm, que confirma de forma independente a mesma base manual)
  ['Apaa', 'um', 'numeral', 'Números', '1️⃣', 'Apá íita.'],
  ['Dzama', 'dois', 'numeral', 'Números', '2️⃣', 'Dzamaápa palana.'],
  ['Madali', 'três', 'numeral', 'Números', '3️⃣', 'Madali majhuúpa.'],
  ['Likua', 'quatro', 'numeral', 'Números', '4️⃣', 'Apaa, dzama, madali, likuaáaka…'],
  ['Apeéma pakáapi', 'cinco (lit. “uma mão”)', 'numeral', 'Números', '🖐️', 'Apeéma pakáapi, dzameéma pakáapi.'],
  // Natureza (uni e éeno: en.wiktionary.org, categoria “Baniwa lemmas”; hamariene, édzaua e arapê:
  // categorias ecológicas do rio Içana citadas em povosindigenas.org.br/pt/Povo:Baniwa, ISA)
  ['Uni', 'água, rio', 'substantivo', 'Natureza', '💧', 'Hape uni.'],
  ['Éeno', 'céu', 'substantivo', 'Natureza', '☁️', 'Nukapa éeno.'],
  ['Hamariene', 'campinarana (vegetação de solo arenoso)', 'substantivo', 'Natureza', '🌾', 'Nukapa hamariene.'],
  ['Édzaua', 'terra firme', 'substantivo', 'Natureza', '🌳', 'Nukapa édzaua.'],
  ['Arapê', 'igapó (mata alagada)', 'substantivo', 'Natureza', '🌊', 'Nukapa arapê.'],
  // Animais e objetos (tsíino, dzaawi e aapi: pt.wikipedia.org/wiki/Língua_baniwa; íita e palana:
  // exemplos de numerais na mesma fonte)
  ['Tsíino', 'cão', 'substantivo', 'Animais e objetos', '🐕', 'Nukapa tsíino.'],
  ['Palana', 'banana', 'substantivo', 'Animais e objetos', '🍌', 'Dzamaápa palana.'],
  ['Íita', 'canoa', 'substantivo', 'Animais e objetos', '🛶', 'Apá íita.'],
  ['Dzaawi', 'onça', 'substantivo', 'Animais e objetos', '🐆', 'Nukapa dzaawi.'],
  ['Aapi', 'cobra', 'substantivo', 'Animais e objetos', '🐍', 'Nukapa aapi.'],
  // Corpo e estado: adjetivos funcionam como verbos de estado no baniwa, sem precisar de um verbo “ser/
  // estar” (pt.wikipedia.org/wiki/Língua_baniwa); iipe/meepe/keepe: en.wikipedia.org/wiki/Baniwa_of_
  // Içana_language, ilustrando o prefixo privativo (ma-) e comitativo (ka-)
  ['Hape', 'frio, está frio', 'adjetivo', 'Corpo e estado', '❄️', 'Hape uni.'],
  ['Iipe', 'carne', 'substantivo', 'Corpo e estado', '🥩', 'Nukapa iipe.'],
  ['Meepe', 'magro (lit. “sem carne”, ma- + iipe)', 'adjetivo', 'Corpo e estado', '🪶', 'Meepe.'],
  ['Keepe', 'gordo (lit. “com carne”, ka- + iipe)', 'adjetivo', 'Corpo e estado', '🍖', 'Keepe.'],
  // Cultura e espiritualidade (povosindigenas.org.br/pt/Povo:Baniwa e pib.socioambiental.org/pt/
  // Povo:Baniwa, ISA; pudali também em Camico 2023, p. 11, UFAM)
  ['Nhiãperikuli', 'o Criador e Transformador (lit. “ele dentro do osso”)', 'substantivo', 'Cultura', '🌄', 'Nhiãperikuli.'],
  ['Kuwai', 'filho de Nhiãperikuli, figura central dos ritos de iniciação', 'substantivo', 'Cultura', '🪈', 'Kuwai.'],
  ['Pariká', 'pó sagrado usado pelos pajés em transe xamânico', 'substantivo', 'Cultura', '🌿', 'Pariká.'],
  ['Pudali', 'festa cerimonial de troca de presentes entre parentes (também chamada dabukuri)', 'substantivo', 'Cultura', '🎉', 'Pudali.'],
  ['Maliiri', 'pajé (também chamado malikai-iminali, “dono-de-canto”, conforme a função)', 'substantivo', 'Cultura', '🪶', 'Maliiri.'],
];

export const VOCAB_KPC = buildVocab('kpc', ROWS);
