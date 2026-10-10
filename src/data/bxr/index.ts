import type { LanguagePack } from '../types';
import { VOCAB_BXR } from './vocabulario';
import { UNITS_BXR } from './curriculo';
import { GRAMMAR_BXR } from './gramatica';
import { STORIES_BXR } from './historias';
import { COMMUNITY_BXR, ETYMOLOGY_BXR, JOURNAL_PROMPTS_BXR, SCENARIOS_BXR, SHADOWING_BXR } from './extras';
import { ACCENTS_BXR } from './sotaques';

export const BURIATO: LanguagePack = {
  code: 'bxr',
  name: 'Buriato',
  // “Буряад хэлэн (буряад-монгол хэлэн)”, “língua buriata (buriato-mongol)”, é o nome que a própria
  // Wikipédia em buriato usa para a língua, confirmado em bxr.wikipedia.org/wiki/Буряад_хэлэн.
  nativeName: 'Буряад хэлэн',
  // A Buriácia é um sujeito federativo da Rússia, não um país à parte, e a maioria dos falantes e dos
  // buriatos étnicos vive lá (460.053 dos ~556 mil buriatos do mundo, segundo
  // en.wikipedia.org/wiki/Buryats) — por isso a bandeira é a da Rússia, não um símbolo da Buriácia
  // (o Unicode não tem bandeira própria para sujeitos federativos russos).
  flag: '🇷🇺',
  lineage: {
    family: 'Mongólico',
    // en.wikipedia.org/wiki/Buryat_language classifica o buriato como “Serbi–Mongolic > Mongolic >
    // Central Mongolic > ramo buriato-mongol”, e observa que ele é “classificado ora como uma língua,
    // ora como um grande grupo dialetal do mongol” — uma classificação em debate, citada aqui sem
    // tomar partido.
    branches: ['Mongólico central', 'Buriato-mongol (ao lado do khalkha, a língua oficial da Mongólia)'],
    region:
      'Principalmente a República da Buriácia, na Rússia, ao redor do lago Baikal (e também as áreas de Ust-Orda e Agin, segundo en.wikipedia.org/wiki/Buryat_language), com cerca de 440 mil falantes no total (2017–2020). Há também falantes no norte da Mongólia e no nordeste da China (pelo menos 100 mil buriatos étnicos nessas duas áreas, segundo a mesma fonte). A população étnica buriata soma cerca de 556 mil pessoas, das quais 460.053 na Rússia (295.273 só na República da Buriácia), 43.661 na Mongólia e entre 10 e 70 mil na China (en.wikipedia.org/wiki/Buryats).',
    writing:
      'Alfabeto cirílico moderno (desde 1939): o alfabeto russo mais três letras, Үү, Өө e Һһ — DIFERENTE do script mongol clássico vertical (usado até cerca de 1910), do alfabeto Vagindra (1905–1930) e do alfabeto latino usado de 1930 a 1939, todos documentados em en.wikipedia.org/wiki/Buryat_language. O cirílico foi escolhido aqui por ser a escrita oficial atual na Buriácia e a que o Wiktionary usa para o vocabulário consultado.',
  },
  // nenhum serviço de síntese de voz consultado nesta pesquisa tem uma voz específica confirmada para
  // o buriato; “bxr-RU” segue o padrão BCP 47 (código de língua ISO 639-3 + país), mas é um palpite
  // razoável, NÃO uma confirmação de que algum aparelho ou serviço tenha essa voz — os áudios usam a
  // voz do aparelho quando houver, e silenciam quando não houver.
  speechLocale: 'bxr-RU',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, 67 palavras, 4 tópicos de gramática, 2 histórias), no buriato de Rússia (código bxr), em escrita CIRÍLICA MODERNA. As fontes digitais do buriato são mais escassas que as do mongol da Mongólia: não existem listas Swadesh nem páginas de frases prontas (tipo Omniglot) especificamente para o buriato, então o vocabulário foi montado palavra por palavra a partir das categorias de substantivos, verbos, adjetivos, numerais, pronomes, advérbios e partículas do Wiktionary em inglês, cada palavra conferida num verbete individual. Por essa escassez, nenhuma fonte consultada atesta uma saudação, um “obrigado” ou um “tchau” fixos para o buriato (ao contrário do mongol khalkha, que tem “Сайн байна уу?” documentado pelo Omniglot): a saudação usada aqui, “Һайн байна!”, combina duas palavras atestadas separadamente (“һайн”, bom, e “байна”, a forma existencial de “ser/estar”), e “Баярлаа” (obrigado) é a forma verbal atestada de “баярлаха” (alegrar-se), usada por extensão, da mesma família do “obrigado” mongol. Pela mesma escassez, as 8 categorias de caso do buriato aparecem só pelo nome (sem a forma exata de cada sufixo) e a harmonia vocálica aparece só na regra geral, sem as classes exatas de vogais. Da A2.1 até o C2 chega nas próximas atualizações, conforme mais fontes específicas do buriato puderem ser conferidas.',
  },
  vocab: VOCAB_BXR,
  units: UNITS_BXR,
  etymology: ETYMOLOGY_BXR,
  community: COMMUNITY_BXR,
  scenarios: SCENARIOS_BXR,
  stories: STORIES_BXR,
  accents: ACCENTS_BXR,
  grammar: GRAMMAR_BXR,
  journalPrompts: JOURNAL_PROMPTS_BXR,
  shadowing: SHADOWING_BXR,
  // este pacote ainda não tem uma função de leitura latinizada ao lado do cirílico (como a romanização
  // que o pacote de mongol usa): fica para uma próxima atualização, quando houver uma fonte confiável
  // para a romanização oficial do cirílico buriato.
  specialChars: ['ү', 'ө', 'һ'],
  // o buriato não tem gênero gramatical, um traço geral da família mongólica (confirmado para o mongol
  // khalkha no pacote mn); nenhuma fonte consultada aqui para o buriato menciona gênero gramatical.
  genders: [],
  greeting: 'Һайн байна!',
  sampleSentence: 'Һайн байна! Би эндэ байнаб.',
  phrases: {
    hi: 'Һайн байна!',
    thanks: 'Баярлаа',
    // nenhuma fonte consultada registra uma expressão fixa equivalente a “vamos!” para o buriato, e o
    // verbo “һураха” (aprender) não tem uma forma imperativa ou exortativa atestada nas fontes
    // consultadas — por isso aparece aqui na forma de citação do dicionário, como os verbos do
    // vocabulário, em vez de uma conjugação inventada.
    letsStart: ['Һураха!', 'Aprender! (forma de citação do dicionário, usada aqui como convite para começar)'],
  },
  formalMarkers:
    'O buriato distingue “ши” (tu/você, informal) de “та” (você/vocês, formal/plural) — ambas as formas atestadas na Category:Buryat_pronouns do Wiktionary. Usar “ши” com uma pessoa mais velha ou desconhecida quebra o registro formal esperado, do mesmo jeito que “чи” quebra o registro no mongol khalkha.',
  cognateNote:
    'O buriato NÃO é parente do português: pertence à família mongólica, sem relação genealógica com as línguas indo-europeias. Dentro da própria família mongólica, porém, o buriato tem um parente bem próximo, o mongol khalkha (falado na Mongólia): os dois vêm do mesmo proto-mongólico e compartilham boa parte do vocabulário básico, mas com mudanças sonoras regulares e documentadas — o *s proto-mongólico virou “һ” no buriato em palavras como “һайн” (bom, khalkha “сайн”) e “загаһан” (peixe, khalkha “загас”), enquanto o *c proto-mongólico virou “с” no buriato e “ц” no khalkha, como em “сагаан” (branco, khalkha “цагаан”). O buriato também conserva terminações antigas em -н que o khalkha perdeu, como em “морин” (cavalo, khalkha “морь”). Por isso o buriato não é “o mesmo mongol com outro sotaque”: é uma língua com uma história sonora própria dentro da mesma família.',
};
