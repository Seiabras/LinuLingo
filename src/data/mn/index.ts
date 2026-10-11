import type { LanguagePack } from '../types';
import { VOCAB_MN } from './vocabulario';
import { UNITS_MN } from './curriculo';
import { GRAMMAR_MN } from './gramatica';
import { STORIES_MN } from './historias';
import { COMMUNITY_MN, ETYMOLOGY_MN, JOURNAL_PROMPTS_MN, SCENARIOS_MN, SHADOWING_MN } from './extras';
import { toReadingMn } from '@/services/reading-cyrillic';
import { ACCENTS_MN } from './sotaques';
import { VARIANTS_MN } from './variantes';

export const MONGOL: LanguagePack = {
  code: 'mn',
  name: 'Mongol',
  // “Монгол хэл” (mongol khel, “língua mongol”) é o nome usado pelos próprios falantes, confirmado em
  // en.wikipedia.org/wiki/Mongolian_language.
  nativeName: 'Монгол хэл',
  flag: '🇲🇳',
  lineage: {
    family: 'Mongólico',
    // en.wikipedia.org/wiki/Khalkha_Mongolian confirma que o khalkha é “um dialeto do mongol central”,
    // o dialeto padrão falado na Mongólia e a base da língua oficial do país.
    branches: ['Mongólico central', 'Khalkha (dialeto padrão da Mongólia)'],
    // falantes: en.wikipedia.org/wiki/Mongolian_language; escrita: en.wikipedia.org/wiki/Mongolian_Cyrillic_alphabet
    region:
      'Mongólia, com cerca de 3,6 milhões de falantes (de 5 a 6 milhões no mundo). Também se fala na Mongólia Interior (China) e no sul da Sibéria.',
    writing:
      'Alfabeto cirílico mongol (35 letras: as 33 do russo mais Өө e Үү), oficial desde 1941/1946. A escrita tradicional, vertical, tem curso próprio: escolha “Mongol na escrita tradicional” na aba Cultura.',
  },
  // nenhum serviço de síntese de voz consultado (Google, incluindo o Cloud Text-to-Speech) foi
  // verificado com voz específica para “mn-MN” neste levantamento; o código de locale segue o padrão
  // BCP 47 do mongol da Mongólia, e os áudios usam a voz do aparelho quando houver.
  speechLocale: 'mn-MN',
  available: true,
  incomplete: {
    until: 'A2.2',
    // fontes: Wikipédia em inglês (gramática, casos, escrita, classificação), lista Swadesh e verbetes do
    // Wiktionary, omniglot.com/language/phrases/mongolian.php (cortesia). A família mongólica não tem
    // parentesco confirmado com o turcaico nem com o tungúsico (a hipótese “altaica” está superada).
    note: 'A1 e A2 por enquanto (unidades 1 a 4, ~110 palavras, 8 tópicos de gramática, 4 histórias), no mongol khalkha em cirílico. Do B1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_MN,
  units: UNITS_MN,
  etymology: ETYMOLOGY_MN,
  community: COMMUNITY_MN,
  scenarios: SCENARIOS_MN,
  stories: [...STORIES_MN, ...VARIANTS_MN.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_MN,
  accents: ACCENTS_MN,
  grammar: GRAMMAR_MN,
  journalPrompts: JOURNAL_PROMPTS_MN,
  shadowing: SHADOWING_MN,
  // o cirílico mongol não é latino: embaixo de cada frase vem a romanização oficial (Сайн байна
  // уу? · Sain baina uu?), sistema nacional MNS 5217:2012 (ver cabeçalho de reading-cyrillic.ts)
  reading: (t) => (/[Ѐ-ӿ]/.test(t) ? toReadingMn(t) : ''),
  // Өө e Үү são as duas letras do cirílico mongol que não existem no alfabeto russo (confirmado em
  // en.wikipedia.org/wiki/Mongolian_Cyrillic_alphabet); as demais são letras cirílicas sem equivalente
  // direto no alfabeto latino, todas conferidas contra a coluna `word_target` de vocabulario.ts.
  specialChars: ['ө', 'ү', 'й', 'ь', 'э', 'я', 'ю', 'ц', 'ч', 'ш', 'ж', 'х'],
  // alfabeto cirílico mongol completo (35 letras), em ordem, dividido em três fileiras — ordem
  // confirmada em en.wikipedia.org/wiki/Mongolian_Cyrillic_alphabet.
  keyboardRows: [
    ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к'],
    ['л', 'м', 'н', 'о', 'ө', 'п', 'р', 'с', 'т', 'у', 'ү', 'ф'],
    ['х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'],
  ],
  // o mongol não tem gênero gramatical (substantivos, adjetivos e pronomes não variam por gênero),
  // confirmado em en.wikipedia.org/wiki/Mongolian_language.
  genders: [],
  greeting: 'Сайн байна уу?',
  sampleSentence: 'Сайн байна уу? Таны нэр хэн бэ?',
  phrases: {
    hi: 'Сайн байна уу?',
    thanks: 'Баярлалаа',
    // “ирээрэй” (venha, por favor) é a forma imperativa/polida atestada do verbo “ирэх” (vir), citada
    // pelo Wiktionary no exemplo “Манайд ирээрэй” (venha à nossa casa, por favor) — reaproveitada aqui
    // como convite para começar, já que nenhuma fonte consultada registra uma expressão fixa
    // equivalente a “vamos!” para o mongol.
    letsStart: ['Ирээрэй!', 'Venha! (lit. “venha, por favor”; forma verbal atestada, usada aqui como convite para começar)'],
  },
  formalMarkers:
    'O mongol distingue “чи” (tu/você, informal) de “та” (você/vocês, formal/plural) — ambas as formas atestadas em omniglot.com/language/phrases/mongolian.php, nas frases “Чи монгол хэл мэдэх үү?” (informal) e “Та монгол хэл мэдэх үү?” (formal). Usar “чи” com uma pessoa mais velha ou desconhecida, como no cenário do ancião da estepe, quebra o registro formal esperado.',
  cognateNote:
    'O mongol NÃO é parente do português: pertence à família mongólica, sem nenhuma relação genealógica com as línguas indo-europeias (a antiga hipótese “altaica”, que uniria as duas, é hoje vista como obsoleta). Dentro da própria família mongólica, porém, o mongol khalkha tem parentes reais, como o buriato e o calmuco — visíveis em palavras como “гэр” (casa/guer) e nos numerais “зургаа” (seis) e “арав” (dez), todos de raiz proto-mongólica comum (ver etimologia). Já “айраг” (koumiss, leite de égua fermentado) mostra outro tipo de relação, de CONTATO, não de parentesco: a palavra tem origem proto-turcaica, um empréstimo entre povos vizinhos da Ásia Central, sem que isso implique que o mongol e as línguas turcaicas pertençam à mesma família.',
};
