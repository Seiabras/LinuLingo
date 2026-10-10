import type { LanguagePack } from '../types';
import { VOCAB_MS } from './vocabulario';
import { UNITS_MS } from './curriculo';
import { GRAMMAR_MS } from './gramatica';
import { STORIES_MS } from './historias';
import { COMMUNITY_MS, ETYMOLOGY_MS, JOURNAL_PROMPTS_MS, SCENARIOS_MS, SHADOWING_MS } from './extras';
import { VARIANTS_MS } from './variantes';
import { ACCENTS_MS } from './sotaques';

/**
 * Malaio (bahasa Melayu), na norma padrão da Malásia.
 *
 * Decisões (com fonte):
 * - Código «ms»: ISO 639-1 do malaio. No ISO 639-3, «msa» é a macrolíngua e «zsm» é o malaio padrão;
 *   o Glottolog chama este idioma de «Standard Malay» [stan1306] com o código «zsm»
 *   (glottolog.org/resource/languoid/id/stan1306). O indonésio, que já está no app como «id»
 *   («Standard Indonesian» no Glottolog), é a outra norma da mesma língua.
 * - Variedade: o padrão da Malásia (Bahasa Melayu Baku, regido pela Dewan Bahasa dan Pustaka), por
 *   ser o país com mais falantes entre os três onde o malaio é oficial e o de dicionário oficial
 *   acessível (o PRPM, com o Kamus Dewan). Brunei e Singapura usam a mesma norma escrita, com órgãos
 *   próprios (en.wikipedia.org/wiki/Malaysian_Malay, campo «agency»). A pronúncia do «a» final varia
 *   (abafado na maior parte da Península; aberto em Kedah, na Malásia oriental e em Brunei —
 *   Wikivoyage, Malay phrasebook), e o curso mostra as duas como certas.
 * - Bandeira da Malásia, pelo mesmo motivo da variedade.
 * - Escrita: ensinamos só o Rumi (alfabeto latino), a escrita oficial e a mais usada na Malásia; o
 *   Jawi (escrita árabe), co-oficial em Brunei e protegido na Malásia para usos religiosos e culturais
 *   (en.wikipedia.org/wiki/Jawi_script; en.wikipedia.org/wiki/Malay_language, seção Writing system),
 *   entra como conteúdo cultural (cognateNote e o cartão da unidade 1), sem exercícios. Foi o pedido
 *   do dono do projeto (ensinar em Rumi), e o Rumi é a escrita mais usada na Malásia e em Brunei,
 *   oficial e informalmente (en.wikipedia.org/wiki/Malay_language: «The Latin script, however, is the
 *   most commonly used in Brunei and Malaysia»); um treino de Jawi seria um `alphabet` à parte.
 * - Sem `ipa`: a transcrição por regras do indonésio (src/services/ipa-id.ts) não serve sem ajuste,
 *   porque assume o «e» sempre como schwa e não trata o «a» final abafado da Malásia peninsular nem
 *   o k final como parada glotal; preferimos não mostrar uma transcrição que erraria nessas palavras.
 *   As pronúncias de referência (modelos ms-IPA «Baku»/«SV» do Wiktionary e as gravações da Lingua
 *   Libre «LL-Q9237 (msa)» ligadas lá, de falantes da Malásia) ficam para uma próxima rodada.
 * - Linhagem pelo Glottolog (stan1306): Austronesian › Malayo-Polynesian › Malayo-Chamic › Malayic ›
 *   Nuclear Malayic › Standard Malay-Indonesian › Standard Malay. O pacote do indonésio (id) usa uma
 *   cadeia curta antiga (Malaio-polinésio › Malaico); como o seletor agrupa só pelo 1º ramo
 *   (groupByLineage em idiomas.ts), os dois ficam juntos de qualquer forma.
 * - Sem gênero gramatical: «Malay does not make use of grammatical gender» (en.wikipedia.org/wiki/
 *   Malay_language, seção Grammar).
 * - Voz: «ms-MY» (o locale BCP 47 do malaio da Malásia); não há voz neural do Piper para o malaio
 *   registrada em vozes-neurais, então vale a voz do aparelho (o teste das vozes pula pacote
 *   incompleto sem voz).
 */
export const MALAIO: LanguagePack = {
  code: 'ms',
  name: 'Malaio',
  nativeName: 'Bahasa Melayu',
  flag: '🇲🇾',
  lineage: {
    family: 'Austronésio',
    branches: ['Malaio-polinésio', 'Malaio-châmico', 'Malaico', 'Malaico nuclear', 'Malaio-indonésio padrão'],
    region: 'Península Malaia, norte de Bornéu (Sarawak, Sabah e Brunei) e Singapura',
    writing: 'Alfabeto latino (Rumi); a escrita árabe Jawi segue em uso cultural e religioso',
  },
  speechLocale: 'ms-MY',
  available: true,
  incomplete: {
    until: 'A2.2',
    note: 'A1 e A2 completos por enquanto (4 unidades, mais de 150 palavras, 7 tópicos de gramática, 4 histórias), no malaio padrão da Malásia, com destaque para as palavras que mudam em relação ao indonésio. O curso usa o alfabeto latino (Rumi); a escrita árabe Jawi aparece só como cultura. Do B1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_MS,
  units: UNITS_MS,
  etymology: ETYMOLOGY_MS,
  community: COMMUNITY_MS,
  scenarios: SCENARIOS_MS,
  stories: [...STORIES_MS, ...VARIANTS_MS.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_MS,
  accents: ACCENTS_MS,
  grammar: GRAMMAR_MS,
  journalPrompts: JOURNAL_PROMPTS_MS,
  shadowing: SHADOWING_MS,
  // o Rumi de hoje não usa acentos (o é/ĕ dos dicionários antigos saiu da escrita comum), então
  // nenhuma letra especial é necessária no teclado (Wikivoyage: «the difference between a schwa and an
  // e used to be indicated in writing a long time ago but has not been since the 1960s or earlier»)
  specialChars: [],
  // sem gênero gramatical (ver acima)
  genders: [],
  greeting: 'Hai',
  sampleSentence: 'Hai! Nama saya Linu. Saya belajar bahasa Melayu.',
  // «Mari kita belajar!»: mari = «let's» (Wiktionary), kita = nós incluindo quem ouve, belajar = estudar
  phrases: { hi: 'Hai!', thanks: 'Terima kasih!', letsStart: ['Mari kita belajar!', 'Vamos estudar!'] },
  // Wikivoyage: «Anda is more formal than awak»; Encik/Puan como tratamento seguro com adultos
  formalMarkers: 'anda (você formal), Encik (senhor), Puan (senhora), sila (por favor, ao convidar)',
  cognateNote:
    'O malaio é uma língua austronésia, sem parentesco com o português — mas os dois se encontraram em Malaca, que os portugueses tomaram em 1511. Do contato com o português ficaram palavras como “sekolah” (escola), “meja” (mesa), “bendera” (bandeira), “kereta” (de “carreta”, hoje o carro) e “minggu” (de “domingo”, hoje a semana). O parente mais próximo no app é o indonésio: é a mesma língua em outra norma, e os falantes se entendem, mas muitas palavras mudam (kereta × mobil, bas × bus, lapan × delapan). Tradicionalmente o malaio também se escreve em Jawi, uma adaptação do alfabeto árabe que ainda é uma das escritas oficiais de Brunei, aparece nas cédulas do ringgit e nas placas de alguns estados da Malásia; este curso ensina o alfabeto latino (Rumi), o mais usado hoje.',
};
