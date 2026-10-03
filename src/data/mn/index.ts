import type { LanguagePack } from '../types';
import { VOCAB_MN } from './vocabulario';
import { UNITS_MN } from './curriculo';
import { GRAMMAR_MN } from './gramatica';
import { STORIES_MN } from './historias';
import { COMMUNITY_MN, ETYMOLOGY_MN, JOURNAL_PROMPTS_MN, SCENARIOS_MN, SHADOWING_MN } from './extras';
import { toReadingMn } from '@/services/reading-cyrillic';

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
    region:
      'Mongólia — cerca de 3,6 milhões de falantes, a maioria dos 5–6 milhões de falantes de mongol no mundo, segundo en.wikipedia.org/wiki/Mongolian_language. Há também falantes na Mongólia Interior (China, cerca de 2,9 milhões de mongóis étnicos) e no sul da Sibéria, mas a maior parte da população da Mongólia Interior usa a escrita mongol vertical tradicional, não o cirílico — por isso este pacote fica limitado à Mongólia, onde o cirílico é a escrita oficial.',
    writing:
      'Alfabeto cirílico mongol (35 letras: as 33 do alfabeto russo mais Өө e Үү), tornado obrigatório por decreto em 1941 e confirmado oficialmente em 1946, segundo en.wikipedia.org/wiki/Mongolian_Cyrillic_alphabet — DIFERENTE da escrita mongol vertical tradicional, ainda usada na Mongólia Interior (China), que este pacote não usa.',
  },
  // nenhum serviço de síntese de voz consultado (Google, incluindo o Cloud Text-to-Speech) foi
  // verificado com voz específica para “mn-MN” neste levantamento; o código de locale segue o padrão
  // BCP 47 do mongol da Mongólia, e os áudios usam a voz do aparelho quando houver.
  speechLocale: 'mn-MN',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, 60 palavras, 4 tópicos de gramática, 2 histórias), no mongol khalkha, em escrita CIRÍLICA MODERNA — a escrita oficial da Mongólia desde 1941/1946 (en.wikipedia.org/wiki/Mongolian_Cyrillic_alphabet). Este pacote NÃO usa a escrita mongol vertical tradicional (ainda usada na Mongólia Interior, na China), que é um problema de renderização à parte, tratado separadamente. O mongol pertence à família mongólica, uma família pequena SEM relação de parentesco confirmada com o turcaico, o tungúsico ou qualquer outra família: a antiga hipótese “altaica”, que uniria essas línguas, é hoje vista como obsoleta pela maioria dos linguistas comparativistas, que preferem explicar as semelhanças entre mongólico, turcaico e tungúsico por um Sprachbund (área de contato linguístico), não por origem comum (en.wikipedia.org/wiki/Mongolian_language). As fontes usadas foram a Wikipédia em inglês (gramática geral, história da escrita, classificação), a lista Swadesh do mongol no Wiktionary, verbetes individuais do Wiktionary para cada palavra, e omniglot.com/language/phrases/mongolian.php para frases de cortesia. Como nenhuma fonte consultada traz frases conjugadas específicas para cada verbo do vocabulário, os verbos aparecem na forma de citação de dicionário (infinitivo/substantivo verbal em “-х”), sem conjugação inventada; a ordem numeral+substantivo (“Хоёр морь”, dois cavalos) é uma extensão razoável do padrão adjetivo+substantivo atestado pelo Wiktionary, não uma regra confirmada palavra por palavra para numerais. Da A2.1 até o C2 chega nas próximas atualizações, conforme mais vocabulário e gramática puderem ser conferidos.',
  },
  vocab: VOCAB_MN,
  units: UNITS_MN,
  etymology: ETYMOLOGY_MN,
  community: COMMUNITY_MN,
  scenarios: SCENARIOS_MN,
  stories: STORIES_MN,
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
