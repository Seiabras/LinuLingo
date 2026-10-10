import type { LanguagePack } from '../types';
import { VOCAB_WO } from './vocabulario';
import { UNITS_WO } from './curriculo';
import { GRAMMAR_WO } from './gramatica';
import { STORIES_WO } from './historias';
import { COMMUNITY_WO, ETYMOLOGY_WO, JOURNAL_PROMPTS_WO, SCENARIOS_WO, SHADOWING_WO } from './extras';
import { ACCENTS_WO } from './sotaques';
import { VARIANTS_WO } from './variantes';

export const WOLOF: LanguagePack = {
  code: 'wo',
  // “Uolofe” é o nome em português já usado em idiomas-mundo.ts (lista de idiomas do mundo deste app)
  // para esta língua; “Wolof” é o nome como o próprio povo e a própria língua se chamam.
  name: 'Uolofe',
  nativeName: 'Wolof',
  // o wolof é falado sobretudo no Senegal (cerca de 40% da população como língua nativa, e quase todo
  // mundo como língua franca), por isso a bandeira do Senegal — também é falado na Gâmbia e na
  // Mauritânia, sem bandeira própria da língua.
  flag: '🇸🇳',
  lineage: {
    family: 'Níger-Congo',
    branches: [
      'Atlântico-congolês',
      'Atlântico Ocidental',
      'Senegambiano',
      'Fula-wolof (classificação do infobox de en.wikipedia.org/wiki/Wolof_language: Niger–Congo > Atlantic–Congo > West Atlantic > Senegambian > Fula–Wolof)',
    ],
    region: 'Senegal (onde é falado por cerca de 40% da população como língua nativa e como língua franca por quase todo mundo), também a Gâmbia (maioria em Banjul) e a Mauritânia',
    writing: 'Alfabeto latino oficial desde decretos do governo do Senegal entre 1971 e 1985 (referência: o Centro de Linguística Aplicada de Dakar, CLAD); também existem a grafia árabe wolofal e o alfabeto garay, criado em 1961',
  },
  // nenhum serviço de síntese de voz consultado tem voz neural para o wolof: os áudios usam a voz do
  // aparelho, se houver.
  speechLocale: 'wo-SN',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, 64 palavras, 4 tópicos de gramática, 2 histórias), no wolof, língua da família Níger-Congo (ramo atlântico/senegambiano — não é uma língua banta como o suaíli ou o zulu), falada sobretudo no Senegal, onde é a língua nativa de cerca de 40% da população e funciona como língua franca para quase todo mundo, além de também ser falada na Gâmbia e na Mauritânia. O vocabulário e a gramática foram conferidos palavra por palavra na Wikipédia em inglês (“Wolof language”), no Wikcionário em inglês e em francês (verbetes individuais de cada palavra) e no Omniglot (“Wolof phrases”, para os cumprimentos). As frases que não são citações diretas foram montadas combinando só palavras já atestadas com padrões de frase também já atestados nessas fontes, nunca uma palavra nova inventada. Da A2.1 até o C2 chega nas próximas atualizações, conforme mais vocabulário e gramática puderem ser conferidos em fontes específicas da língua.',
  },
  vocab: VOCAB_WO,
  units: UNITS_WO,
  etymology: ETYMOLOGY_WO,
  community: COMMUNITY_WO,
  scenarios: SCENARIOS_WO,
  stories: [...STORIES_WO, ...VARIANTS_WO.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_WO,
  accents: ACCENTS_WO,
  grammar: GRAMMAR_WO,
  journalPrompts: JOURNAL_PROMPTS_WO,
  shadowing: SHADOWING_WO,
  // ë, ñ e ŋ não existem no teclado em português; à e ó já existem (crase e acento agudo), por isso
  // ficam de fora.
  specialChars: ['ë', 'ñ', 'ŋ'],
  // o wolof não marca gênero gramatical: não há masculino/feminino nem no substantivo nem no pronome
  // (“moom” serve tanto para “ele” quanto para “ela”) — confirmado na seção “Gender” de
  // en.wikipedia.org/wiki/Wolof_language.
  genders: [],
  greeting: 'Na nga def?',
  sampleSentence: 'Na nga def? Jàmm rekk, jërejëf.',
  phrases: {
    hi: 'Na nga def?',
    thanks: 'Jërejëf',
    // não há, nas fontes consultadas, um “vamos!” imperativo isolado: reaproveitamos a frase real
    // atestada “Dama bëgg waxtaan” (eu quero conversar) como convite animado para começar agora, sem
    // inventar uma forma nova.
    letsStart: ['Dama bëgg waxtaan!', 'Eu quero conversar! (frase real, usada aqui como convite animado para começar agora)'],
  },
  formalMarkers:
    'As fontes acadêmicas consultadas (Wikipédia, Wikcionário, Omniglot) não registram, para o wolof, um pronome “formal” separado do informal como o “você”/“o senhor” do português: “yow” (tu/você) serve, nelas, para qualquer pessoa. Um site de ensino de wolof (wolofschool.com) descreve, à parte, que a forma de plural (“Nangeen def?”, com “ngeen”, em vez de “Na nga def?”, com “nga”) também é usada para tratar com mais respeito uma única pessoa mais velha, desconhecida ou numa situação formal — um uso parecido com o “vous” do francês — mas, como essa informação vem de uma única fonte não acadêmica, este curso ensina só a forma “nga”, comum a qualquer situação.',
  cognateNote:
    'O wolof não é parente do português: é uma língua da família Níger-Congo, no ramo atlântico (também chamado senegambiano) — diferente do ramo banto, o do suaíli, já com curso neste app. Não há nenhum ancestral comum com o português, então não existem cognatos “de berço” entre as duas línguas. O que existe — e está documentado na aba de etimologia — é o caminho raro de palavras wolof que viraram empréstimo no francês (e, por ele, no inglês): “bisaab” (bissap, o suco de hibisco), “tubaab” (toubab, estrangeiro branco), “foño” (fonio, um cereal), “mbalax” (o ritmo e estilo musical) e “mbubb” (boubou, a veste tradicional) — o oposto do que costuma acontecer nos pacotes de língua indígena deste app, onde é a palavra indígena que entra no português.',
};
