import type { LanguagePack } from '../types';
import { VOCAB_HAW } from './vocabulario';
import { UNITS_HAW } from './curriculo';
import { GRAMMAR_HAW } from './gramatica';
import { STORIES_HAW } from './historias';
import { COMMUNITY_HAW, ETYMOLOGY_HAW, JOURNAL_PROMPTS_HAW, SCENARIOS_HAW, SHADOWING_HAW } from './extras';

export const HAVAIANO: LanguagePack = {
  code: 'haw',
  name: 'Havaiano',
  // autoglotônimo "ʻŌlelo Hawaiʻi" (lit. "língua do Havaí"), confirmado em
  // en.wikipedia.org/wiki/Hawaiian_language.
  nativeName: 'ʻŌlelo Hawaiʻi',
  // o havaiano é cooficial (com o inglês) do estado do Havaí, Estados Unidos, desde 1978 — mesma
  // bandeira já usada para o navajo (pacote "nv"), outra língua indígena dos EUA neste app.
  flag: '🇺🇸',
  lineage: {
    family: 'Austronésio',
    branches: ['Malaio-polinésio', 'Oceânico', 'Polinésio', 'Polinésio oriental', 'Marquesano'],
    region: 'Ilhas Havaí (arquipélago no meio do Oceano Pacífico), Estados Unidos',
    writing:
      'Alfabeto latino com só 13 letras (5 vogais + 8 consoantes), mais duas marcas diacríticas que são letras à parte na ortografia moderna: o ʻokina (ʻ, oclusiva glotal) e o kahakō (traço sobre a vogal, marca de vogal longa: ā, ē, ī, ō, ū) — ver gramatica.ts.',
  },
  // nenhum serviço de síntese de voz consultado tem voz dedicada ao havaiano: 'haw' é só a melhor
  // aproximação de locale (mesmo caso do navajo, "nv-US", e dos pacotes guarani/indígenas deste app).
  // Na prática, os áudios usam a voz do aparelho, se houver.
  speechLocale: 'haw',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, 125 palavras, 5 tópicos de gramática, 2 histórias). O havaiano (ʻŌlelo Hawaiʻi) é uma língua polinésia bem documentada — diferente de outros pacotes indígenas pequenos deste app (como tpj, tapiete) — mas com uma história de quase extinção: a Lei 57 de 1896 baniu o idioma das escolas por 91 anos (até 1987), e por volta de 1997 os falantes nativos já eram menos de 0,1% da população do estado do Havaí (en.wikipedia.org/wiki/Hawaiian_language). A revitalização começou com o status de língua cooficial em 1978 e com a ʻAha Pūnana Leo, o movimento de escolas de imersão criado em 1983-1984; hoje há cerca de 2.000 falantes nativos entre 24.000 falantes fluentes (censo de 2011), e Niʻihau é o único lugar do mundo onde o havaiano, e não o inglês, é a língua do dia a dia. Cada palavra deste pacote foi conferida contra en.wiktionary.org (seção “==Hawaiian==” de cada verbete, que cita o Hawaiian Dictionary de Pukui & Elbert), en.wikipedia.org/wiki/Hawaiian_language, en.wikipedia.org/wiki/Hawaiian_grammar, en.wikipedia.org/wiki/Hawaiian_phonology e omniglot.com/language/phrases|kinship/hawaiian — wehewehe.org (o dicionário Pukui & Elbert online) bloqueou a consulta direta (HTTP 403) nesta sessão, por isso NÃO foi usado como fonte própria aqui, só os sites acima. NÃO confundir com o maori (outra língua polinésia, tratada em outro pacote deste app): nenhuma palavra foi reaproveitada entre os dois. Da A2.1 até o C2 chega nas próximas atualizações, conforme mais vocabulário e mais estruturas gramaticais forem conferidos.',
  },
  vocab: VOCAB_HAW,
  units: UNITS_HAW,
  etymology: ETYMOLOGY_HAW,
  community: COMMUNITY_HAW,
  scenarios: SCENARIOS_HAW,
  stories: STORIES_HAW,
  grammar: GRAMMAR_HAW,
  journalPrompts: JOURNAL_PROMPTS_HAW,
  shadowing: SHADOWING_HAW,
  // ʻokina (oclusiva glotal, letra própria do havaiano) e as 5 vogais com kahakō (traço de vogal
  // longa) — as únicas letras especiais que aparecem de fato nas palavras deste pacote (conferido com
  // uma busca nos word_target de vocabulario.ts).
  specialChars: ['ʻ', 'ā', 'ē', 'ī', 'ō', 'ū'],
  // o havaiano não marca gênero gramatical nos substantivos (sem "o/a" como em português): confirmado
  // em en.wikipedia.org/wiki/Hawaiian_grammar.
  genders: [],
  greeting: 'Aloha!',
  sampleSentence: 'Aloha! Pehea ʻoe?',
  phrases: {
    hi: 'Aloha!',
    thanks: 'Mahalo!',
    // "e hoʻomaka kākou" (vamos começar, todos nós) já é usada como exemplo do verbo "hoʻomaka" no
    // vocabulário — aqui ela vira o convite para começar a lição, no mesmo tom.
    letsStart: ['E hoʻomaka kākou!', 'Vamos começar! (lit. “comecemos nós”, incluindo quem ouve)'],
  },
  formalMarkers:
    'As fontes consultadas (Wikipédia, Wiktionary, Omniglot) não registram, no havaiano, uma distinção gramatical de registro formal/informal como o “tu”/“você” do português — por isso, como em outros pacotes pequenos deste app (nv, tpj), este curso não marca um contraste de registro que nenhuma fonte confirma.',
  cognateNote:
    'O havaiano pertence à família austronésia (ramo polinésio), sem nenhum parentesco com o português, que é indo-europeu: não espere reconhecer palavras havaianas pela semelhança sonora ou escrita, a não ser pelas próprias palavras havaianas que o português já tomou emprestadas, como “havaiano”, “hula”, “ukulele” e “lūʻau”. Um caso curioso de empréstimo na direção contrária é “wiki”: a palavra havaiana “wikiwiki” (rápido) deu nome ao “WikiWikiWeb”, o primeiro software de wiki, criado em 1995 — e de lá para a palavra “wiki” usada no mundo todo, inclusive em português (ver a aba de etimologia). Dentro da própria família polinésia, o havaiano é parente próximo do māori, do samoano, do taitiano e do marquesano (ramo marquesano, segundo en.wikipedia.org/wiki/Hawaiian_language) — “aloha” (māori “aroha”, samoano “alofa”) e “kalo”/“taro” são exemplos desse parentesco, mostrados na etimologia.',
};
