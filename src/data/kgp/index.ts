import type { LanguagePack } from '../types';
import { VOCAB_KGP } from './vocabulario';
import { UNITS_KGP } from './curriculo';
import { GRAMMAR_KGP } from './gramatica';
import { STORIES_KGP } from './historias';
import { COMMUNITY_KGP, ETYMOLOGY_KGP, JOURNAL_PROMPTS_KGP, SCENARIOS_KGP, SHADOWING_KGP } from './extras';
import { ACCENTS_KGP } from './sotaques';

export const KAINGANG: LanguagePack = {
  code: 'kgp',
  name: 'Kaingang',
  // "Kanhgág" ("pessoa, gente") é a autodesignação do povo e da língua, confirmada na Wikipédia em
  // português e em inglês sobre a língua kaingang e no Wiktionary (entrada "kanhgág").
  nativeName: 'Kanhgág',
  // não há um símbolo próprio da língua: bandeira do Brasil, o país onde o povo kaingang vive hoje,
  // como já se faz para o tupi antigo (tpw) neste app.
  flag: '🇧🇷',
  lineage: {
    family: 'Macro-Jê',
    branches: ['Jê', 'Jê Meridional (Jê do Sul, junto com o xokleng)'],
    region: 'Sul e sudeste do Brasil: Rio Grande do Sul, Santa Catarina, Paraná e São Paulo, em mais de 30 terras indígenas (como Xapecó, em SC, e Nonoai, no RS)',
    writing: 'Alfabeto latino, ortografia de Ursula Wiesemann (28 grafemas, com vogais centrais e cinco vogais nasais)',
  },
  // nenhum serviço de síntese de voz consultado tem voz para o kaingang: os áudios usam a voz do
  // aparelho, se houver (o mesmo caso do tupi antigo e do guarani neste app).
  speechLocale: 'kgp',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, pouco menos de 100 palavras, 4 tópicos de gramática, 2 histórias), na ortografia de Ursula Wiesemann. As fontes consultadas (o próprio dicionário de Wiesemann, citado palavra por palavra no Wiktionary; a Wikipédia em português e em inglês; e a página do povo kaingang no ISA) não registram uma palavra fixa para “oi”, “tchau”, “sim” ou “não” parecida com as do português — por isso o curso usa frases reais de apresentação (“Inh kanhgág”, eu/kaingang) em vez de inventar uma saudação. Nenhum serviço de síntese de voz tem voz para o kaingang: os áudios usam a voz do aparelho, se houver. Da A2.1 até o C2 chega nas próximas atualizações, conforme mais vocabulário puder ser conferido em fontes específicas da língua.',
  },
  vocab: VOCAB_KGP,
  units: UNITS_KGP,
  etymology: ETYMOLOGY_KGP,
  community: COMMUNITY_KGP,
  scenarios: SCENARIOS_KGP,
  stories: STORIES_KGP,
  accents: ACCENTS_KGP,
  grammar: GRAMMAR_KGP,
  journalPrompts: JOURNAL_PROMPTS_KGP,
  shadowing: SHADOWING_KGP,
  // á (vogal central /ə/) e y (vogal central /ɨ/) não existem no português; as cinco nasais
  // (ã, ẽ, ĩ, ũ, ỹ) e o apóstrofo (oclusiva glotal) completam o teclado adaptado.
  specialChars: ['á', 'y', 'ã', 'ẽ', 'ĩ', 'ũ', 'ỹ', "'"],
  // o kaingang não marca gênero gramatical em substantivo nem em adjetivo: a única distinção de
  // gênero é nos pronomes de 3ª pessoa (ti/fi, ag/fag), explicada na gramática desta unidade.
  genders: [],
  greeting: 'Inh kanhgág.',
  sampleSentence: 'Inh kanhgág! Inh panh mág, inh nỹ sĩnvĩ. Mrir!',
  phrases: {
    hi: 'Inh kanhgág.',
    // não há, nas fontes consultadas, uma interjeição kaingang equivalente a "obrigado": usamos o
    // adjetivo real "mrir" (feliz, contente) como expressão de apreço, do mesmo jeito que o curso de
    // tupi antigo usa "katu" (bom) onde a língua não lexicalizou um "obrigado" separado.
    thanks: 'Mrir!',
    // também não há verbo "ir" documentado para formar um "vamos" literal: usamos o advérbio real
    // "ũri" (hoje) como convite para começar agora, sem inventar uma palavra nova.
    letsStart: ['Ũri!', 'Hoje! (usado aqui como convite para começar agora)'],
  },
  formalMarkers:
    'As fontes consultadas para o kaingang não descrevem uma forma “formal” de tratamento separada da informal: o pronome “ã” (tu/você) serve para qualquer pessoa, independentemente da idade ou da posição social de quem ouve — parecido com o que acontece no tupi antigo deste app.',
  cognateNote:
    'O kaingang não é parente do português: é uma língua jê, do tronco Macro-Jê, nativa do Brasil — uma família totalmente diferente da indo-europeia (a mesma do português) e também diferente da tupi-guarani (a do tupi antigo e do guarani já no app). Não há nenhum ancestral comum, então não existem cognatos “de berço” entre kaingang e português. O que existe é o caminho mais raro mostrado na aba de etimologia deste curso: palavras que o kaingang tomou emprestadas do português depois do contato, como “kasor” (cachorro), “kãvãru” (cavalo), “aronh” (arroz) e “vĩjũ” (vinho) — a direção contrária da que costuma aparecer nas outras línguas indígenas do app, onde é a palavra indígena que entrou no português (como “jaguar”, do tupi antigo “îagûara”).',
};
