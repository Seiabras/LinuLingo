import type { LanguagePack } from '../types';
import { VOCAB_SE } from './vocabulario';
import { UNITS_SE } from './curriculo';
import { GRAMMAR_SE } from './gramatica';
import { STORIES_SE } from './historias';
import { COMMUNITY_SE, ETYMOLOGY_SE, JOURNAL_PROMPTS_SE, SCENARIOS_SE, SHADOWING_SE } from './extras';
import { ACCENTS_SE } from './sotaques';

/**
 * SAMI DO NORTE (davvisámegiella), não “sami” em geral.
 *
 * “Sami” não é uma língua só: é uma família de várias línguas bem diferentes entre si (sami do
 * norte, sami lule, sami do sul, sami de Inari, sami skolt e outras), cada uma com o seu próprio
 * código ISO 639-3, sua gramática e seu vocabulário. Este pacote cobre só o SAMI DO NORTE — de longe
 * a mais falada (uns 25 mil falantes, ~75% de todos os falantes de línguas sami somados, segundo a
 * Wikipédia) e a que tem mais material de estudo disponível. As outras línguas sami ficam de fora por
 * enquanto (ver `incomplete` abaixo).
 *
 * Código do pacote: `se`, o ISO 639-1 do sami do norte (o ISO 639-3, mais específico, é `sme`) — a
 * mesma convenção já usada aqui para `fi` (finlandês), `et` (estoniano) e `eu` (basco): quando existe
 * um código 639-1, ele é o nome da pasta.
 *
 * `speechLocale: 'se-NO'` é uma aposta, não uma certeza: suporte de voz (TTS/reconhecimento) pra sami
 * do norte é raro nos aparelhos, e não foi possível confirmar se `se-NO` é reconhecido de fato — fica
 * como melhor tentativa (é o locale BCP-47 esperado para “sami do norte, Noruega”).
 *
 * Fontes gerais do pacote (ver também os comentários no topo de cada arquivo):
 * - Wikipédia (en): “Northern Sámi”, “Sámi languages”, “Sámi people”, “Eskimo words for snow”.
 * - Wiktionary (en): verbete a verbete, mais a lista Swadesh urálica e a categoria “Northern Sami
 *   phrasebook”.
 */
export const SAMI_DO_NORTE: LanguagePack = {
  code: 'se',
  name: 'Sami do Norte',
  nativeName: 'Davvisámegiella',
  flag: '🇳🇴',
  lineage: {
    family: 'Urálico',
    branches: ['Sámi', 'Sámi ocidental'],
    region:
      'Sápmi: norte da Noruega, da Suécia e da Finlândia (o sami do norte não chega à Rússia; a Sápmi como um todo, o território sami, se estende também até a península de Kola, na Rússia, onde se falam outras línguas sami)',
    writing: 'Alfabeto latino (á, č, đ, ŋ, š, ŧ, ž)',
  },
  speechLocale: 'se-NO',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, 60 palavras, 4 tópicos de gramática, 2 histórias), no sami do norte (davvisámegiella) especificamente — não cobre as outras línguas sami (lule, do sul, de Inari, skolt etc.), que têm gramática e vocabulário próprios. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_SE,
  units: UNITS_SE,
  etymology: ETYMOLOGY_SE,
  community: COMMUNITY_SE,
  scenarios: SCENARIOS_SE,
  stories: STORIES_SE,
  accents: ACCENTS_SE,
  grammar: GRAMMAR_SE,
  journalPrompts: JOURNAL_PROMPTS_SE,
  shadowing: SHADOWING_SE,
  specialChars: ['á', 'č', 'đ', 'ŋ', 'š', 'ŧ', 'ž'],
  // o sami do norte não tem gênero gramatical: o palácio mostra só a explicação
  genders: [],
  greeting: 'Bures',
  sampleSentence: 'Bures! Mun lean Linu. Mun háliidan oahppat!',
  phrases: { hi: 'Bures!', thanks: 'Giitu!', letsStart: ['Álgit!', 'Vamos começar!'] },
  formalMarkers:
    'O sami do norte não tem um tratamento formal separado como o nosso “você/o senhor”: “dii” é só o plural de “você” (don), sem um uso cortês especial documentado aqui.',
  cognateNote:
    'O sami do norte é uma língua urálica, prima distante do finlandês, do estoniano e do húngaro (mas sem nenhum parentesco com o português): todas descendem de uma língua ancestral comum, o proto-urálico. A prova está em palavras como “čalbmi” (olho), aparentada do finlandês “silmä”, ou “jávri” (lago), aparentada do finlandês “järvi” e do estoniano “järv”. A língua tem sete casos gramaticais (mais do que o húngaro) e um fenômeno chamado gradação consonantal, em que a própria raiz da palavra muda de som conforme o caso ou a posição: “jahki” (ano) vira “jagi” depois de um número, como em “vihtta jagi” (cinco anos).',
};
