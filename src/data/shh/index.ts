import type { LanguagePack } from '../types';
import { VOCAB_SHH } from './vocabulario';
import { UNITS_SHH } from './curriculo';
import { GRAMMAR_SHH } from './gramatica';
import { STORIES_SHH } from './historias';
import { COMMUNITY_SHH, ETYMOLOGY_SHH, JOURNAL_PROMPTS_SHH, SCENARIOS_SHH, SHADOWING_SHH } from './extras';
import { ACCENTS_SHH } from './sotaques';

export const SHOSHONE: LanguagePack = {
  code: 'shh',
  name: 'Shoshone',
  // "Newe" (pessoa, gente) é como o próprio povo chama a si mesmo, confirmado tanto pela lista
  // Swadesh da Wiktionary (que traduz "man, human being" por "newe") quanto pela Wikipédia em inglês,
  // que registra endônimos da língua girando em torno dessa mesma raiz ("a língua do povo"). "Shoshone"
  // e "Shoshoni" são os nomes usados de fora, em inglês.
  nativeName: 'Newe',
  // Grande Bacia, oeste dos Estados Unidos (Wyoming, Idaho, Nevada, Utah) — não há uma bandeira
  // própria da língua nem de um só povo shoshone (ver `lineage.region` e a nota em `incomplete`:
  // várias tribos e reservas reconhecidas separadamente pelo governo dos Estados Unidos).
  flag: '🇺🇸',
  lineage: {
    family: 'Uto-asteca',
    branches: ['Numic', 'Numic central'],
    region:
      'Grande Bacia, oeste dos Estados Unidos (Wyoming, Idaho, Nevada e Utah) — faladas por várias tribos e reservas reconhecidas separadamente pelo governo federal dos EUA, não por uma única nação política',
    writing:
      'Alfabeto latino, sem padronização única: a Wikipédia em inglês cita pelo menos duas ortografias (a de Crum–Miller, mais fonêmica, e a do Estado de Idaho, mais fonética). Este curso segue a grafia do dialeto de Fort Hall (Idaho) usada pela lista Swadesh da Wiktionary (via shoshonidictionary.com): o apóstrofo marca a oclusiva glotal (uma consoante de verdade) e uma vogal duplicada marca a vogal longa — veja a aba Gramática.',
  },
  // nenhum serviço de síntese de voz consultado tem voz dedicada ao shoshone: 'shh' é só a melhor
  // aproximação de locale (não confirmada por nenhuma fonte) — na prática, os áudios usam a voz do
  // aparelho, se houver, provavelmente sem a pronúncia correta da oclusiva glotal nem da duração
  // vocálica. Mesmo caso dos outros pacotes indígenas deste app (nah, nv, tpj, nhd, kgk, kpc, tuo, yrl).
  speechLocale: 'shh',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, 65 palavras, 4 tópicos de gramática, 2 histórias), no shoshone (shoshoni) do dialeto de Fort Hall, em Idaho — o dialeto da fonte principal deste pacote, a lista Swadesh de uto-asteca da Wiktionary (que cita, como fonte do shoshone, o “Shoshoni Online Dictionary”, hoje fora do ar). O shoshone forma uma cadeia de pelo menos quatro dialetos regionais (shoshone ocidental em Nevada, gosiute no oeste de Utah, shoshone do norte no sul de Idaho e no norte de Utah, shoshone do leste em Wyoming), falados por várias tribos e reservas reconhecidas separadamente pelo governo dos Estados Unidos — não por um só povo com um só governo. Como a documentação aberta específica do shoshone é escassa, este curso evita inventar frases com sujeito, verbo e objeto: nenhuma fonte consultada traz uma frase completa testemunhal no dialeto de Fort Hall, só palavras isoladas, por isso as lições e as histórias usam enumerações (contar números, listar bichos) em vez de sintaxe nova. Nenhum serviço de síntese de voz consultado tem voz para o shoshone: os áudios usam a voz do aparelho, se houver. Da A2.1 até o C2 chega nas próximas atualizações, conforme mais fontes específicas do dialeto de Fort Hall (ou claramente identificadas de outro dialeto) puderem ser conferidas.',
  },
  vocab: VOCAB_SHH,
  units: UNITS_SHH,
  etymology: ETYMOLOGY_SHH,
  community: COMMUNITY_SHH,
  scenarios: SCENARIOS_SHH,
  stories: STORIES_SHH,
  accents: ACCENTS_SHH,
  grammar: GRAMMAR_SHH,
  journalPrompts: JOURNAL_PROMPTS_SHH,
  shadowing: SHADOWING_SHH,
  // o apóstrofo marca a oclusiva glotal, uma consoante de verdade no shoshone, não uma pontuação
  // decorativa — ver gramatica.ts, tópico de fonologia.
  specialChars: ["'"],
  // nenhuma fonte consultada registra gênero gramatical (m/f/n) no shoshone, um traço comum às línguas
  // uto-astecas já neste app (ver nah/index.ts, náuatle clássico).
  genders: [],
  // nenhuma fonte consultada registra uma saudação fixa tipo "oi" em shoshone: este curso usa o
  // adjetivo atestado "tsaa'" (bom, legal) como cumprimento e expressão de aprovação, a mesma
  // estratégia já usada por outros pacotes indígenas deste app com lacunas parecidas (tpj, nhd, kgk).
  greeting: "Tsaa'!",
  sampleSentence: "Tsaa'! Newe.",
  phrases: {
    hi: "Tsaa'!",
    thanks: "Tsaa'!",
    // também não há, nas fontes, um "vamos!" imperativo nem uma conjugação verbal atestada no dialeto
    // de Fort Hall: este curso usa a contagem de um a cinco, já atestada palavra por palavra, como
    // convite para começar agora — a mesma estratégia do pacote do navajo (nv) deste app.
    letsStart: ["Seme', wahatehwe, bahaitee', watsewite, manegite!", 'Vamos contar até cinco em shoshone!'],
  },
  formalMarkers:
    'Nenhuma fonte consultada registra uma forma de tratamento “formal” separada da informal no shoshone — um traço que, pelas fontes disponíveis, parece comum a outras línguas indígenas norte-americanas já neste app (nv, nah).',
  cognateNote:
    'O shoshone é uma língua uto-asteca do ramo numic central, parente do comanche e do panamint (timbisha) — mas não tem nenhum parentesco com o português, que vem do latim: não espere reconhecer palavras shoshone pela semelhança sonora ou escrita. O que mais chama atenção no vocabulário, mostrado na aba de etimologia, é a própria autodesignação do povo: “newe” (pessoa, gente) é também como os shoshone chamam a si mesmos — “Shoshone”/“Shoshoni”, o nome usado neste curso, veio de fora, do inglês.',
};
