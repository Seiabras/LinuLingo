import type { LanguagePack } from '../types';
import { VOCAB_XH } from './vocabulario';
import { UNITS_XH } from './curriculo';
import { GRAMMAR_XH } from './gramatica';
import { STORIES_XH } from './historias';
import { COMMUNITY_XH, ETYMOLOGY_XH, JOURNAL_PROMPTS_XH, SCENARIOS_XH, SHADOWING_XH } from './extras';
import { ACCENTS_XH } from './sotaques';

export const XHOSA: LanguagePack = {
  code: 'xh',
  name: 'Xhosa',
  nativeName: 'isiXhosa',
  // bandeira da África do Sul: país onde a imensa maioria dos falantes vive e onde o isiXhosa é uma
  // das línguas oficiais (en.wikipedia.org/wiki/Xhosa_language); a língua também é oficial no Zimbábue
  // e falada em comunidades no Lesoto, mas não há um símbolo próprio da língua neste app.
  flag: '🇿🇦',
  lineage: {
    family: 'Níger-Congo',
    // cadeia confirmada na infobox de en.wikipedia.org/wiki/Xhosa_language: Niger–Congo > Atlantic–
    // Congo > Volta-Congo > Benue–Congo > Bantoid > Southern Bantoid > Bantu > Southern Bantu > Nguni-
    // Tsonga > Nguni > Zunda.
    branches: ['Atlântico-congolês', 'Volta-congolês', 'Benue-congolês', 'Bantoide', 'Bantoide meridional', 'Banto', 'Banto meridional', 'Nguni-tsonga', 'Nguni', 'Zunda'],
    region: 'Sudeste da África do Sul (Cabo Oriental, Cabo Ocidental, Cabo Norte e Gauteng), com comunidades no Zimbábue e no Lesoto',
    writing: 'Alfabeto latino, com três letras de clique (c, q, x) e os dígrafos ch, xh, qh, gc, gq, gx, nc, nq, nx, ny e hl',
  },
  speechLocale: 'xh-ZA',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, 65 palavras, 4 tópicos de gramática, 2 histórias), no isiXhosa, língua banta do ramo nguni falada por cerca de 8 milhões de pessoas como língua materna (2013) e mais 11 milhões como segunda língua (2002), sobretudo na África do Sul (onde é língua oficial), e também no Zimbábue e no Lesoto — segundo en.wikipedia.org/wiki/Xhosa_language, que também confirma a classificação genealógica usada acima e o traço mais conhecido da língua: os sons de clique (as letras c, q e x), herdados do contato histórico com línguas coissã (cerca de 15% do vocabulário xhosa tem essa origem). O vocabulário foi conferido palavra por palavra no Wiktionary em inglês (en.wiktionary.org/wiki/<palavra>, uma página por palavra), as saudações, os números e as cores vêm do roteiro de conversação da Wikivoyage (en.wikivoyage.org/wiki/Xhosa_phrasebook), e as frases de exemplo só combinam essas palavras com três regras de verbo confirmadas em fontes específicas: a cópula “ngu-” e a concordância de sujeito do verbo (Wikipédia), a alternância entre a forma conjunta do presente (sem “-ya-”, quando o verbo é seguido de objeto) e a disjunta (com “-ya-”, quando o verbo fecha a oração) — tema de uma dissertação de mestrado inteira sobre o isiXhosa, Pitcher (Dallas International University, 2023), citando Visser (1989) —, e a negação do presente (“andi-…-i”), confirmada no African Language Grammar Portal (grammar.sadilar.org/algrap, projeto do SADiLaR) e também pela própria Wikipédia. Como o isiXhosa tem um sistema de concordância de classes nominais rico, mas as fontes consultadas nesta entrega só confirmam esse sistema em detalhe para poucas classes (1, 1a e 9) e para um pequeno conjunto de verbos, o curso evita deliberadamente inventar concordâncias para classes ou verbos não vistos nessas fontes: por isso as frases de exemplo são mais repetitivas e mais simples do que poderiam ser, preferindo um alcance menor e honesto a arriscar uma concordância errada. Da A2.1 até o C2 chega nas próximas atualizações, conforme mais gramática e vocabulário puderem ser conferidos em fontes específicas da língua.',
  },
  vocab: VOCAB_XH,
  units: UNITS_XH,
  etymology: ETYMOLOGY_XH,
  community: COMMUNITY_XH,
  scenarios: SCENARIOS_XH,
  stories: STORIES_XH,
  accents: ACCENTS_XH,
  grammar: GRAMMAR_XH,
  journalPrompts: JOURNAL_PROMPTS_XH,
  shadowing: SHADOWING_XH,
  // nenhuma letra do isiXhosa tem acento ou diacrítico: os sons de clique (c, q, x) já usam letras do
  // alfabeto latino comum, presentes em qualquer teclado português.
  specialChars: [],
  // sem gênero gramatical: o isiXhosa tem classes de substantivo (um-/aba-, u-/oo-, i(n)-/ii(n)-…), não
  // masculino, feminino ou neutro — a mesma solução já usada no suaíli e no huni kuĩ deste app.
  genders: [],
  greeting: 'Molo',
  sampleSentence: 'Molo! Igama lam nguLinu. Sifunda isiXhosa!',
  phrases: {
    hi: 'Molo!',
    thanks: 'Enkosi!',
    // não há, nas fontes consultadas, um imperativo isolado para “vamos!”: reaproveitamos a frase real
    // atestada “Sifunda isiXhosa” (nós estudamos isiXhosa — concordância “si-”, nós, + raiz do verbo,
    // sem “-ya-” porque há objeto depois) como convite para começar agora, sem inventar uma forma nova.
    letsStart: ['Sifunda isiXhosa!', 'Nós estudamos isiXhosa! (usado aqui como convite para começar agora)'],
  },
  formalMarkers:
    '“Molo” cumprimenta uma só pessoa; “Molweni” cumprimenta várias pessoas, ou mostra respeito a alguém mais velho — mesmo sendo uma só pessoa. O mesmo vale para “Unjani?” (como você está, uma pessoa) e “Ninjani?” (como vocês estão, ou com respeito a alguém mais velho) — uma distinção confirmada no roteiro de conversação da Wikivoyage.',
  cognateNote:
    'O isiXhosa não é parente do português: é uma língua banta viva da família Níger-Congo, nativa do sudeste da África do Sul — uma família totalmente diferente da indo-europeia (a mesma do português). Não há ancestral comum, então não existem cognatos “de berço” entre as duas línguas. O que existe é, de um lado, o traço mais famoso do isiXhosa — os sons de clique (as letras c, q e x) — herdado não do português, mas do contato histórico com línguas coissã da região: cerca de 15% do vocabulário xhosa tem essa origem, segundo a Wikipédia em inglês. De outro lado, alguns empréstimos recentes vêm do africâner, fruto do contato colonial, não de parentesco: “ikati” (gato, do africâner “kat”) e “isikolo” (escola, do africâner “skool”), mostrados na aba de etimologia.',
};
