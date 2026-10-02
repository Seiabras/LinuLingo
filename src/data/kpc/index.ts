import type { LanguagePack } from '../types';
import { VOCAB_KPC } from './vocabulario';
import { UNITS_KPC } from './curriculo';
import { GRAMMAR_KPC } from './gramatica';
import { STORIES_KPC } from './historias';
import { COMMUNITY_KPC, ETYMOLOGY_KPC, JOURNAL_PROMPTS_KPC, SCENARIOS_KPC, SHADOWING_KPC } from './extras';

export const BANIWA: LanguagePack = {
  code: 'kpc',
  name: 'Baniwa',
  // “Walimanai” (“os outros novos que vão nascer”) é a autodesignação do povo e da língua, confirmada
  // em pt.wikipedia.org/wiki/Língua_baniwa (citando Ramirez 2001a) e em povosindigenas.org.br/pt/
  // Povo:Baniwa (ISA), que também registra o contraste com “waferinaipe” (os antepassados ancestrais).
  // NÃO confundir com o nheengatu (código `yrl`, família tupi-guarani) nem com o tukano (código `tuo`,
  // família Tukano) — línguas de famílias totalmente diferentes, também cooficiais em São Gabriel da
  // Cachoeira, mas sem nenhum parentesco com o baniwa.
  nativeName: 'Walimanai',
  // território: a bacia do rio Içana, no noroeste do Amazonas — emoji de bandeira do Brasil, na falta
  // de um símbolo próprio da língua (também falada na Colômbia e na Venezuela).
  flag: '🇧🇷',
  lineage: {
    family: 'Aruak (Arawak)',
    branches: ['Aruak Ocidental', 'Japurá-Colômbia', 'Baniwa-Curripaco'],
    region:
      'Bacia do rio Içana e afluentes (como os rios Aiari e Cuiari), noroeste do Amazonas, na fronteira entre Brasil, Colômbia e Venezuela — sobretudo o médio Içana; cooficial em São Gabriel da Cachoeira (AM) e no estado do Amazonas, ao lado do português, do nheengatu e do tukano',
    writing:
      'Alfabeto latino, na ortografia de Henri Ramirez (usada neste pacote): 4 vogais orais (a, e, i, u — sem “o”), com nasalização e alongamento; acento agudo marcando a sílaba tônica fora do padrão e distinguindo palavras; grave marcando acento secundário em pronomes-objeto; circunflexo marcando elevação da voz; consoante “ñ” para a nasal palatal. Uma segunda proposta ortográfica, criada pela missionária evangélica Sophie Müller para a tradução do Novo Testamento, também circula entre alguns grupos.',
  },
  // nenhum serviço de síntese de voz consultado tem voz para o baniwa: os áudios usam a voz do
  // aparelho, se houver (o mesmo caso do nheengatu e do tukano neste app).
  speechLocale: 'kpc',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, 43 palavras, 4 tópicos de gramática, 2 histórias), no baniwa do médio rio Içana (o “superdialeto Central”, na classificação de Henri Ramirez) — língua viva da família aruak (arawak), cooficial em São Gabriel da Cachoeira (AM) junto com o nheengatu (yrl, família tupi-guarani) e o tukano (tuo, família Tukano), duas línguas de famílias totalmente diferentes que não têm nenhuma relação com o baniwa. O baniwa forma um continuum dialetal com o curripaco (kurripako), falado mais ao norte, no alto Içana e na Colômbia: Aikhenvald (1999) trata as duas variantes como dialetos de uma mesma língua, e Ramirez estuda ambas sob o nome “baniwa-curripaco”. Vale uma nota técnica: o código ISO 639-3 “kpc” denota formalmente o curripaco; a variante do médio Içana documentada aqui tem, à parte, o código “bwi” (ver iso639-3.sil.org/code/kpc e pt.wikipedia.org/wiki/Língua_baniwa, cujo infobox registra “bwi”) — são o mesmo continuum linguístico, mas classificados de formas distintas por fontes diferentes. O vocabulário aqui foi conferido palavra por palavra, sobretudo em pt.wikipedia.org/wiki/Língua_baniwa (artigo extenso citando Henri Ramirez, “Línguas Arawak da Amazônia Setentrional”, 2001, e “Dicionário da língua baniwa”, 2001, e Gerald Taylor, “Introdução à língua Baniwa do Içana”, 1991), complementado por en.wikipedia.org, Wiktionary, omniglot.com, o Instituto Socioambiental (ISA) e duas dissertações de mestrado (Eick Marcelo Lima de Souza, 2012, e Ovídio da Silva Camico, UFAM, 2023). Nenhuma fonte consultada registra uma palavra baniwa fixa para “oi”/“olá” ou “obrigado”: por isso o curso usa uma apresentação real (“Nhúa Walimanai.”, eu sou walimanai) como saudação, aproveitando o fato de que pronomes independentes dispensam verbo “ser” no baniwa, e usa a palavra real “keepe” (lit. “com carne”, gordo) como expressão de apreço e “núawa” (lit. “eu irei”) como convite para começar — o mesmo tipo de solução já usado nos cursos de kaingang e xavante deste app, em vez de inventar palavras nessas duas lacunas. Da A2.1 até o C2 chega nas próximas atualizações, conforme mais vocabulário e gramática puderem ser conferidos em fontes específicas da língua.',
  },
  vocab: VOCAB_KPC,
  units: UNITS_KPC,
  etymology: ETYMOLOGY_KPC,
  community: COMMUNITY_KPC,
  scenarios: SCENARIOS_KPC,
  stories: STORIES_KPC,
  grammar: GRAMMAR_KPC,
  journalPrompts: JOURNAL_PROMPTS_KPC,
  shadowing: SHADOWING_KPC,
  // ñ (nasal palatal) não existe no português; os acentos agudo, grave e circunflexo sobre as quatro
  // vogais do baniwa (a, e, i, u — sem “o”) marcam tom e sílaba tônica, por isso entram no teclado
  // adaptado (ver pt.wikipedia.org/wiki/Língua_baniwa, seção de ortografia).
  specialChars: ['ñ', 'á', 'é', 'í', 'ú', 'â', 'ê', 'î', 'û'],
  // o baniwa não marca gênero gramatical nos substantivos comuns (não há artigos “o/a”); a distinção
  // real que a língua tem — feminino/não-feminino — só aparece na 3ª pessoa do singular (pronomes
  // “lhía”/“rhúa” e prefixos/sufixos verbais “li-”/“ru-”), explicada em gramatica.ts, não no sistema de
  // gênero de substantivos. Os classificadores nominais (forma, consistência) são outro sistema, à
  // parte, também explicado em gramatica.ts — não é “gênero” no sentido deste campo.
  genders: [],
  greeting: 'Nhúa Walimanai.',
  sampleSentence: 'Nhúa Walimanai! Wháa Walimanai. Núawa!',
  phrases: {
    hi: 'Nhúa Walimanai.',
    // não há, nas fontes consultadas, uma interjeição baniwa equivalente a “obrigado”: usamos a
    // palavra real “keepe” (lit. “com carne”, gordo — en.wikipedia.org/wiki/Baniwa_of_Içana_language)
    // como expressão de apreço, do mesmo jeito que o curso de xavante usa “ĩwẽ” (bom) e o de kaingang
    // usa “mrir” (feliz) onde a língua não lexicalizou um “obrigado” separado.
    thanks: 'Keepe!',
    // também não há, nas fontes, um “vamos!” imperativo: usamos a forma real “núawa” (“eu irei”,
    // citada em pt.wikipedia.org/wiki/Língua_baniwa dentro do exemplo “kúa íinaiwatsa núawa?”, com
    // quem irei?) como anúncio de partida/convite para começar agora, sem inventar uma forma nova.
    letsStart: ['Núawa!', 'Eu vou! (lit. “eu irei”; usado aqui como convite para começar agora)'],
  },
  formalMarkers:
    'Nas fontes consultadas não há registro de um pronome ou prefixo “formal” separado no baniwa: “phía” (tu/você) e o prefixo “pi-” servem para qualquer pessoa, sem a distinção que o português marca com “você”/“o senhor” — um traço que o baniwa compartilha com o nheengatu e o tukano, as outras línguas indígenas cooficiais em São Gabriel da Cachoeira já neste app.',
  cognateNote:
    'O baniwa não é parente do português: é uma língua indígena da família aruak (arawak), nativa da bacia do rio Içana — uma família totalmente diferente da indo-europeia (a mesma do português) e também diferente do tupi-guarani (a família do nheengatu, cooficial na mesma região) e do tukano (outra família cooficial ali). Não há nenhum ancestral comum com o português, então não existem cognatos “de berço” entre as duas línguas. O que existe — e está documentado em pt.wikipedia.org/wiki/Língua_baniwa — é um empréstimo em UMA direção: o som [b], raro no baniwa, aparece sobretudo em palavras importadas do português depois do contato. O que mais chama atenção no baniwa, mostrado na aba de etimologia, é a formação interna de palavras por prefixos: “keepe” (gordo) e “meepe” (magro) nascem da mesma raiz “iipe” (carne) com prefixos opostos (“com”/“sem”), e termos de parentesco como “hániri” (pai) são nomes dependentes que, na fala real, sempre vêm com um prefixo possessivo (“nu-hániri”, meu pai) — bem diferente de como o português lida com posse.',
};
