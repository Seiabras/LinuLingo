import type { LanguagePack } from '../types';
import { VOCAB_TPJ } from './vocabulario';
import { UNITS_TPJ } from './curriculo';
import { GRAMMAR_TPJ } from './gramatica';
import { STORIES_TPJ } from './historias';
import { COMMUNITY_TPJ, ETYMOLOGY_TPJ, JOURNAL_PROMPTS_TPJ, SCENARIOS_TPJ, SHADOWING_TPJ } from './extras';

export const TAPIETE: LanguagePack = {
  code: 'tpj',
  name: 'Tapiete',
  // autoglotônimo “tapiete”, usado na Argentina e na Bolívia (es.wikipedia.org/wiki/Tapietes); os
  // grupos do Paraguai preferem “ñandereta”, “ava” ou “guaraní ñandeva”. O nome “tapiete” vem do guarani
  // “tapii ete” (lit. “verdadeiros escravos”), um exônimo histórico, não uma autodesignação original.
  nativeName: 'Tapiete',
  // bandeira da Argentina: a fonte principal (González 2010) documenta a comunidade de “Misión Los
  // Tapietes”, Tartagal, província de Salta, Argentina — onde vivem a maioria dos falantes de primeira
  // língua segundo o censo citado em es.wikipedia.org/wiki/Tapietes, mesmo o Paraguai tendo mais pessoas
  // que se identificam como tapietes (mas menos falantes fluentes, pelo mesmo censo).
  flag: '🇦🇷',
  lineage: {
    family: 'Tupi',
    branches: ['Tupi-guarani', 'Guarani boliviano-paraguaio'],
    region:
      'Chaco, na fronteira entre Argentina (província de Salta, cerca de 407 pessoas tapietes), Bolívia (cerca de 144 pessoas) e Paraguai (cerca de 2.470 pessoas tapietes, mas só 1.748 falantes de primeira língua), segundo os censos de 2010-2012 citados em es.wikipedia.org/wiki/Tapietes',
    writing:
      'Alfabeto latino, no “alfabeto tentativo tapiete” usado por González (2010): apóstrofo (puso) para a oclusiva glotal, trema (ä, ö) e til para marcar vogais nasais, e “ɨ” para uma vogal central alta sem arredondamento — veja a aba Gramática para a fonologia (só sílabas abertas, harmonia nasal).',
  },
  // nenhum serviço de síntese de voz consultado (Google, incluindo o Cloud Text-to-Speech) tem voz
  // para o tapiete: os áudios usam a voz do aparelho, se houver — o mesmo caso dos outros pacotes
  // indígenas deste app (gn, gun, kgk, nhd, kpc, tuo, yrl).
  speechLocale: 'tpj',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, 49 palavras, 4 tópicos de gramática, 2 histórias), no tapiete — língua tupi-guarani viva, falada por um grupo pequeno no Chaco, na fronteira entre Argentina, Bolívia e Paraguai, com código ISO 639-3 próprio, “tpj” (confirmado em iso639-3.sil.org/code/tpj e no Glottolog, tapi1253). É DIFERENTE do guarani paraguaio (pacote “gn”), do guarani mbyá (“gun”), do guarani kaiowá (“kgk”) e do guarani ñandeva (“nhd”) já presentes neste app: a classificação do tapiete dentro do guarani é, inclusive, discutida entre linguistas — González (2005, 2010) o trata como um desenvolvimento independente dentro do tupi-guarani, enquanto outros autores, como Dietrich (1986), o tratam como um dialeto do avá-guaraní/chiriguano (en.wikipedia.org/wiki/Tapiete_language) — por isso, com mais razão ainda, nenhuma palavra deste pacote foi aproveitada de outro pacote guarani sem conferência própria e específica para o tapiete. A fonte principal é um artigo acadêmico de FONOLOGIA, não um dicionário ou um livro de frases: González, Hebe (2010) “Una aproximación a la fonología del tapiete (Tupí-Guaraní)”, LIAMES 8, pp. 7-43, Unicamp — por isso o vocabulário é pequeno (49 palavras) e a maior parte das frases de exemplo foi montada combinando só morfemas atestados no próprio artigo (nunca palavras novas), com exceção de duas frases citadas tal qual pela fonte: “Ha\'e ñi-mbo\'e.” (ele/ela estuda) e “Heta o-ĩ.” (há muito). Duas palavras com sentido conflitante dentro do próprio artigo-fonte (“pi\'a” e “owa”) foram excluídas por segurança, em vez de escolher um dos dois sentidos ao acaso. As fontes consultadas não registram um “oi” nem um “obrigado” fixos em tapiete — por isso o curso usa a frase testemunhal real de identidade (“Nde tapiete?”, você é tapiete?) como abertura, do mesmo jeito que os pacotes nhd, kpc, tuo e kgk já fazem nas suas próprias lacunas. Da A2.1 até o C2 chega nas próximas atualizações, conforme mais fontes específicas do tapiete (e não de outras variedades guarani) puderem ser conferidas.',
  },
  vocab: VOCAB_TPJ,
  units: UNITS_TPJ,
  etymology: ETYMOLOGY_TPJ,
  community: COMMUNITY_TPJ,
  scenarios: SCENARIOS_TPJ,
  stories: STORIES_TPJ,
  grammar: GRAMMAR_TPJ,
  journalPrompts: JOURNAL_PROMPTS_TPJ,
  shadowing: SHADOWING_TPJ,
  // apóstrofo (puso) marca uma oclusiva glotal; “ɨ” é uma vogal central alta sem equivalente no
  // português; til e trema (ä, ö) marcam vogais nasais — ver gramatica.ts, tópicos de fonologia.
  specialChars: ['ɨ', 'ä', 'ö', 'ã', 'ĩ', 'ũ', '̃', '\''],
  // nenhuma fonte consultada registra gênero gramatical no tapiete: como nos outros pacotes guarani
  // deste app (gn, gun, kgk, nhd), os substantivos não se dividem por gênero.
  genders: [],
  // frase testemunhal de identidade, montada só com morfemas atestados por González (2010) — usada no
  // lugar de um “oi” inventado, que nenhuma fonte registra.
  greeting: 'Nde tapiete?',
  sampleSentence: "Wähe! Nde tapiete? Ha'e tapiete.",
  phrases: {
    hi: 'Nde tapiete?',
    // nenhuma fonte registra um “obrigado” fixo em tapiete: “pörä” (bonito, formoso) é usado aqui como
    // expressão de apreço, do mesmo jeito que o pacote kgk usa “porã” (bom) onde a língua não tem um
    // “obrigado” separado documentado.
    thanks: 'Pörä!',
    // também não há, nas fontes, um “vamos!” imperativo: usamos o verbo real “a-wata” (eu ando, eu
    // caminho) como convite para começar agora, sem inventar uma forma nova — mesma estratégia do nhd,
    // que reaproveita “oguata” (caminhar) com o mesmo propósito.
    letsStart: ['A-wata!', 'Eu ando! (lit. “eu caminho”; usado aqui como convite para começar agora)'],
  },
  formalMarkers:
    'Nenhuma fonte consultada registra uma forma de tratamento “formal” separada da informal no tapiete — um traço que, pelas fontes disponíveis, parece comum aos outros pacotes guarani deste app (gn, gun, kgk, nhd) e às demais línguas indígenas já incluídas (kpc, tuo).',
  cognateNote:
    'O tapiete é parente do guarani paraguaio (pacote “gn”), do guarani mbyá (“gun”), do guarani kaiowá (“kgk”) e do guarani ñandeva (“nhd”) já neste app: todos vêm do mesmo ramo guarani da família tupi-guarani, embora o lugar exato do tapiete dentro desse ramo seja discutido entre linguistas. Isso aparece no vocabulário: o prefixo de 1ª pessoa “a-” (a-karu, como; a-pota, quero) e a harmonia nasal são traços típicos de toda a família tupi-guarani, documentados também nos outros pacotes guarani deste app. Com o português, o parentesco é só de contato: o tapiete não descende do latim nem de nenhuma língua europeia. O que mais chama atenção no vocabulário tapiete, mostrado na aba de etimologia, é justamente o próprio nome da língua: “tapiete” não é uma autodesignação original, mas um exônimo guarani antigo, “tapii ete” (lit. “verdadeiros escravos”), um nome dado de fora que o povo acabou adotando.',
};
