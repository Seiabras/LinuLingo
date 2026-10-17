import type { LanguagePack } from '../types';
import { VOCAB_KPC } from './vocabulario';
import { UNITS_KPC } from './curriculo';
import { GRAMMAR_KPC } from './gramatica';
import { STORIES_KPC } from './historias';
import { COMMUNITY_KPC, ETYMOLOGY_KPC, JOURNAL_PROMPTS_KPC, SCENARIOS_KPC, SHADOWING_KPC } from './extras';
import { ACCENTS_KPC } from './sotaques';
import { FONTES_KPC, METODOS_KPC } from './fontes';

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
  // Curso completo até o teto (A2, em tetos): os testes de teto leem “incomplete.until igual ao último
  // subnível do teto” como curso completo. O A2 (17/10/2026) vem do dicionário (2001b) e da gramática
  // (2001a) de Henri Ramirez, com a página de cada frase nos comentários.
  incomplete: {
    until: 'A2.2',
    note:
      'Curso completo até o teto do baniwa (A2): quatro unidades, 84 palavras, 8 tópicos de gramática e 4 histórias, no baniwa do médio rio Içana, o “dialeto central” de Henri Ramirez. O A1 vem sobretudo da Wikipédia em português, que resume Ramirez e Gerald Taylor, e do Instituto Socioambiental. O A2 vem direto de dois livros de Ramirez de 2001, abertos na Biblioteca Digital Curt Nimuendajú: o “Dicionário da Língua Baniwa”, com 10 mil verbetes, e a gramática de “Línguas Arawak da Amazônia Setentrional”. Quase todas as frases do A2 são frases desses livros; duas falas de uma história foram montadas com regras dos livros, assim como algumas falas curtas das histórias do A1. O dicionário escreve “o” onde o curso escreve “u”: é a mesma vogal, entre o “o” fechado e o “u”. Com o dicionário, as palavras do A1 ganharam a grafia de Ramirez (“úuni”, água; “tsíinu”, cão; “dzáawi”, onça; “ñáme”, não; “ápa íita”, uma canoa), e os parentes aparecem com o “meu” fundido à palavra, como no dicionário (“nhúniri”, meu pai; “nhúdua”, minha mãe). O curso agora tem também um “obrigado” de verdade: “Mátsia pidzeekátaka núlhiu!”. O baniwa forma uma só língua com o curripaco (kurripako), falado mais ao norte, no alto Içana e na Colômbia; o código “kpc” é, formalmente, o do curripaco, e o baniwa do médio Içana tem também o código “bwi”. Nenhum serviço de voz consultado tem voz para o baniwa, então o áudio usa a voz do aparelho. O baniwa não tem parentesco com o nheengatu nem com o tukano, as outras línguas cooficiais de São Gabriel da Cachoeira (AM).',
  },
  vocab: VOCAB_KPC,
  units: UNITS_KPC,
  etymology: ETYMOLOGY_KPC,
  community: COMMUNITY_KPC,
  scenarios: SCENARIOS_KPC,
  stories: STORIES_KPC,
  accents: ACCENTS_KPC,
  grammar: GRAMMAR_KPC,
  journalPrompts: JOURNAL_PROMPTS_KPC,
  shadowing: SHADOWING_KPC,
  fontes: FONTES_KPC,
  metodos: METODOS_KPC,
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
  greeting: 'Heekúapi whaa!',
  sampleSentence: 'Nhúa Walimanai! Wháa Walimanai. Núawa!',
  phrases: {
    // R01b p. 99: “heekóapi whaa! bom dia!”
    hi: 'Heekúapi whaa!',
    // R01b (Ramirez, “Dicionário da Língua Baniwa”, 2001), p. 212: “mátsia pidzeekátaka nólhio!
    // obrigado!”; as partes estão no próprio Ramirez: mátsia “bem”, pi-dzeekáta “fazes” (R01a p. 163),
    // nó-lhio “para mim” (R01b p. 11). Grafia com “u” no lugar do “o” do dicionário. Antes de
    // 17/10/2026 o curso usava “keepe” (gordo) por falta de fonte.
    thanks: 'Mátsia pidzeekátaka núlhiu!',
    // R01b p. 6: “wárha! eia!”; p. 66 “wárha wádiawa! vamos voltar!”; p. 161 “wárha wakánta! vamos
    // cantar!”. Antes de 17/10/2026 o curso usava “núawa” (eu irei) por falta de fonte.
    letsStart: ['Wárha!', 'Eia, vamos! (como em “Wárha wádiawa!”, vamos voltar!)'],
  },
  formalMarkers:
    'Nas fontes consultadas não há registro de um pronome ou prefixo “formal” separado no baniwa: “phía” (tu/você) e o prefixo “pi-” servem para qualquer pessoa, sem a distinção que o português marca com “você”/“o senhor” — um traço que o baniwa compartilha com o nheengatu e o tukano, as outras línguas indígenas cooficiais em São Gabriel da Cachoeira já neste app.',
  cognateNote:
    'O baniwa não é parente do português: é uma língua indígena da família aruak (arawak), nativa da bacia do rio Içana — uma família totalmente diferente da indo-europeia (a mesma do português) e também diferente do tupi-guarani (a família do nheengatu, cooficial na mesma região) e do tukano (outra família cooficial ali). Não há nenhum ancestral comum com o português, então não existem cognatos “de berço” entre as duas línguas. O que existe — e está documentado em pt.wikipedia.org/wiki/Língua_baniwa — é um empréstimo em UMA direção: o som [b], raro no baniwa, aparece sobretudo em palavras importadas do português depois do contato. O que mais chama atenção no baniwa, mostrado na aba de etimologia, é a formação interna de palavras por prefixos: “keepe” (gordo) e “meepe” (magro) nascem da mesma raiz “iipe” (carne) com prefixos opostos (“com”/“sem”), e termos de parentesco como “hániri” (pai) são nomes dependentes que, na fala real, sempre vêm com um prefixo possessivo (“nu-hániri”, meu pai) — bem diferente de como o português lida com posse.',
};
