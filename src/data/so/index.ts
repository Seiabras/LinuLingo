import type { LanguagePack } from '../types';
import { VOCAB_SO } from './vocabulario';
import { UNITS_SO } from './curriculo';
import { GRAMMAR_SO } from './gramatica';
import { STORIES_SO } from './historias';
import { COMMUNITY_SO, ETYMOLOGY_SO, JOURNAL_PROMPTS_SO, SCENARIOS_SO, SHADOWING_SO } from './extras';

export const SOMALI: LanguagePack = {
  code: 'so',
  name: 'Somali',
  nativeName: 'Af Soomaali',
  // bandeira da Somália: onde vive a maior parte dos falantes e onde o somali é língua oficial (com o
  // árabe); a língua também é oficial na Etiópia (região Somali) e nacional no Djibuti
  // (en.wikipedia.org/wiki/Somali_language).
  flag: '🇸🇴',
  lineage: {
    family: 'Afro-asiático',
    // cadeia do Glottolog (soma1255, conferida no JSON do próprio languoid): Afro-Asiatic › Cushitic ›
    // East Cushitic › Lowland East Cushitic › Southern Lowland East Cushitic › Mainstream Lowland East
    // Cushitic › Omo-Tana › Eastern Omo-Tana › Somali. Os dois primeiros nós com o mesmo nome usado no
    // oromo (om): «Cuchítico», «Cuchítico oriental» (assim os dois caem no mesmo grupo do seletor).
    branches: [
      'Cuchítico',
      'Cuchítico oriental',
      'Cuchítico oriental das terras baixas',
      'Cuchítico oriental das terras baixas meridional',
      'Cuchítico oriental das terras baixas principal',
      'Omo-Tana',
      'Omo-Tana oriental',
    ],
    region: 'Somália, Djibuti, leste da Etiópia (região Somali) e nordeste do Quênia, além da diáspora',
    writing: 'Alfabeto latino oficial (desde 1972), com c, x e q para sons do fundo da garganta e vogal dobrada para vogal longa',
  },
  speechLocale: 'so-SO',
  available: true,
  incomplete: {
    until: 'A2.2',
    note:
      'A1 e A2 por enquanto (unidades 1 a 4, 107 palavras, 8 tópicos de gramática, 4 histórias), no somali padrão, de base setentrional, escrito no alfabeto latino oficial adotado em 1972. As frases de exemplo ficam de propósito simples: só usam conjugações e construções confirmadas em gramáticas e dicionários da língua, em vez de arriscar uma forma errada. Do B1 até o C1 chega nas próximas atualizações.',
  },
  vocab: VOCAB_SO,
  units: UNITS_SO,
  etymology: ETYMOLOGY_SO,
  community: COMMUNITY_SO,
  scenarios: SCENARIOS_SO,
  stories: STORIES_SO,
  grammar: GRAMMAR_SO,
  journalPrompts: JOURNAL_PROMPTS_SO,
  shadowing: SHADOWING_SO,
  // o alfabeto oficial não tem acentos nem letras fora do teclado comum: os sons difíceis usam c, x, q,
  // dh, kh, e a parada glotal é o apóstrofo comum (lo', gado).
  specialChars: [],
  // masculino e feminino, sem neutro (Somali_grammar: artigo -ka/-ta; gênero de cada verbete g=m/g=f)
  genders: ['m', 'f'],
  greeting: 'Subax wanaagsan',
  sampleSentence: 'Subax wanaagsan! Magacay waa Linu. Sidee tahay?',
  phrases: {
    hi: 'Subax wanaagsan!',
    thanks: 'Mahadsanid!',
    // «haye» = «all right» (verbete do Wiktionary): sem um «vamos!» atestado, usamos o «tudo bem,
    // combinado» como convite para começar, sem inventar uma forma nova.
    letsStart: ['Haye!', 'Combinado! (usado aqui como convite para começar)'],
  },
  formalMarkers:
    'As fontes consultadas não registram um pronome de respeito (um “senhor/senhora”): a cortesia do somali está nas fórmulas — “fadlan” (por favor), “mahadsanid” (obrigado), “raali ahow” (desculpe) — e no cumprimento conforme a hora do dia, como “subax wanaagsan” (bom dia) e “habeen wanaagsan” (boa noite). Pedir com o imperativo puro (“keen!”, traga!) não é grosseiro em somali.',
  cognateNote:
    'O somali não é parente do português: é uma língua cuchítica, do tronco afro-asiático, nativa do Chifre da África. O parente mais próximo dele aqui no app é o oromo, também cuchítico oriental: compare “af” (boca, língua) com o oromo “afaan”, “aabbe” (pai) com “abbaa” e “biyo” (água) com “bishaan”. Mais longe, no mesmo tronco afro-asiático, estão o árabe, o hebraico e o amárico — “aabbe” vem da mesma raiz antiga do árabe “ʔab” e do hebraico “av”. Os empréstimos contam outra história, a do comércio e da religião: cerca de um quinto do vocabulário somali vem do árabe (“shaah”, chá; “bisad”, gato), e há palavras do italiano e do inglês (“buug”, livro, do inglês “book”).',
};
