import type { LanguagePack } from '../types';
import { VOCAB_UG } from './vocabulario';
import { UNITS_UG } from './curriculo';
import { GRAMMAR_UG } from './gramatica';
import { STORIES_UG } from './historias';
import { COMMUNITY_UG, ETYMOLOGY_UG, JOURNAL_PROMPTS_UG, SCENARIOS_UG, SHADOWING_UG } from './extras';

export const UIGUR: LanguagePack = {
  code: 'ug',
  name: 'Uigur',
  nativeName: 'ئۇيغۇرچە',
  // bandeira da China: reflete a geografia administrativa atual (o uigur é oficial na Região
  // Autônoma Uigur de Xinjiang, dentro da China), não um estado uigur separado — o mesmo tipo de
  // escolha honesta que outros pacotes de línguas sub-nacionais/minoritárias deste app já fazem
  // (ver, por exemplo, o comentário sobre a bandeira no pacote tpj).
  flag: '🇨🇳',
  lineage: {
    family: 'Túrquico',
    // o uigur é do ramo carlúquico, parente próximo do uzbeque — DIFERENTE do turco da Turquia
    // (pacote "tr" deste app), que é do ramo oghuz. Confirmado em
    // en.wikipedia.org/wiki/Uyghur_language: "Uyghur belongs to the Karluk branch of Turkic
    // languages... closely related to... Uzbek" (mais distante do turco, de outro ramo).
    branches: ['Carlúquico'],
    region:
      'Região Autônoma Uigur de Xinjiang, no noroeste da China (quase 11,8 milhões de pessoas uigures no censo chinês de 2020); comunidades também no Cazaquistão, no Paquistão, na Turquia, no Quirguistão e no Uzbequistão (Wikipédia, verbete “Uyghurs”)',
    writing:
      'Alfabeto árabe uigur (Uyghur Ereb Yéziqi, UEY), oficializado em 1978/1983, com vogais próprias marcadas por hemze (ئا, ئە, ئو...) — diferente do árabe padrão, que normalmente não escreve vogais curtas; fora da China também se usa o alfabeto cirílico e versões em alfabeto latino',
  },
  // nenhuma fonte consultada confirma uma voz de síntese de verdade para o uigur: "ug-CN" é uma
  // aposta razoável (código de língua + país), não uma voz testada e confirmada.
  speechLocale: 'ug-CN',
  available: true,
  incomplete: {
    until: 'A2.2',
    note:
      'Os níveis A1 e A2 completos por enquanto (unidades 1 a 4, 102 palavras, 8 tópicos de gramática, 4 histórias), no uigur escrito com o alfabeto árabe uigur (UEY), padrão oficial na Região Autônoma Uigur de Xinjiang, China — a forma de escrita mais usada hoje, embora também existam versões em alfabeto latino e cirílico fora da China. O uigur é uma língua túrquica do ramo CARLÚQUICO, parente do uzbeque: é DIFERENTE do turco da Turquia (pacote “tr” deste app, do ramo oghuz) e não é parente do árabe, do persa nem do urdu, apesar do alfabeto parecido — só o sistema de escrita foi emprestado; os sufixos de caso e os tempos verbais do A2 também vêm só de fontes específicas do uigur (principalmente a Wikipédia em inglês, no artigo “Uyghur grammar”), nunca extrapolados do turco ou do uzbeque, apesar do parentesco. A Wikipédia cita um relatório do INALCO (2021) descrevendo o uigur como língua ameaçada (o dialeto lop, inclusive, como criticamente ameaçado), o que pesou na decisão de ir com calma: o vocabulário é pequeno e quase todas as frases de exemplo foram montadas combinando palavras e regras já atestadas pelas fontes (a Wikipédia em inglês, o Wikcionário em inglês, o Omniglot e, a partir do A2, também o guia de frases em uigur da Wikivoyage), em vez de inventar conjugações ou frases novas sem apoio — por isso frases como “X yaxshi” e “X yaxshimu?” se repetem bastante: é o padrão mais seguro disponível nas fontes consultadas, não uma repetição por descuido. As poucas formas flexionadas novas do A2 (como “ئاتنى”/atni, “ئاتلار”/atlar e “مۈشۈكلەر”/müshükler) ou são citações diretas da Wikipédia ou aplicam, a uma palavra já atestada, uma regra de sufixo que a mesma fonte confirma explicitamente para o uigur (nunca uma regra importada de outra língua túrquica). Este pacote ainda não tem uma função “reading” (romanização automática, letra por palavra): a transliteração em alfabeto latino vem escrita entre parênteses ao lado de cada palavra do vocabulário, do mesmo jeito que o pinyin aparece junto da tradução no pacote do mandarim (zh) — a mesma lacuna, resolvida do mesmo jeito provisório. A palavra “ئات” (at) aparece só no sentido de “cavalo”: o Wikcionário registra que a mesma grafia também quer dizer “nome”, mas, como nenhuma fonte consultada confirmou com segurança uma palavra separada para “nome” em uigur, este pacote não usa “at” nesse sentido, para não confundir — e a mesma cautela vale para “كۆك” (kök, usado só no sentido de “azul”, embora o Wikcionário também registre “verde” e “sem maturar”) e para “يۈز” (yüz, usado só no sentido do numeral “cem”, que o Wikcionário lista como uma etimologia separada do substantivo “rosto”, não usado aqui). Nenhuma fonte consultada confirmou, especificamente para o uigur, as posposições “bilen” e “üchün” com exemplos completos, o comparativo/superlativo além do sufixo de grau “-raq”, nem os dias da semana em grafia árabe (só em transliteração latina, no guia de frases da Wikivoyage) — por isso o pacote não usa nenhum desses pontos em frases novas, para não inventar. Da B1.1 até o C2 chega conforme mais fontes específicas do uigur (dicionários e gramáticas mais completos) puderem ser conferidas.',
  },
  vocab: VOCAB_UG,
  units: UNITS_UG,
  etymology: ETYMOLOGY_UG,
  community: COMMUNITY_UG,
  scenarios: SCENARIOS_UG,
  stories: STORIES_UG,
  grammar: GRAMMAR_UG,
  journalPrompts: JOURNAL_PROMPTS_UG,
  shadowing: SHADOWING_UG,
  direction: 'rtl',
  // as 8 vogais do uigur (todas com hemze de apoio no início da palavra) e a consoante "ڭ" (nasal
  // "ng"), que o árabe padrão não tem — ver en.wikipedia.org/wiki/Uyghur_Arabic_alphabet.
  specialChars: ['ئا', 'ئە', 'ئو', 'ئۇ', 'ئۆ', 'ئۈ', 'ئې', 'ئى', 'ڭ'],
  // alfabeto árabe uigur completo (32 letras), na ordem oficial, da direita para a esquerda —
  // en.wikipedia.org/wiki/Uyghur_Arabic_alphabet.
  keyboardRows: [
    ['ئا', 'ئە', 'ب', 'پ', 'ت', 'ج', 'چ', 'خ'],
    ['د', 'ر', 'ز', 'ژ', 'س', 'ش', 'غ', 'ف'],
    ['ق', 'ك', 'گ', 'ڭ', 'ل', 'م', 'ن', 'ھ'],
    ['ئو', 'ئۇ', 'ئۆ', 'ئۈ', 'ۋ', 'ئې', 'ئى', 'ي'],
  ],
  // o uigur não tem gênero gramatical, confirmado em en.wikipedia.org/wiki/Uyghur_language
  // ("Grammatical gender: Absent"): nenhuma palavra do vocabulário leva gênero.
  genders: [],
  greeting: 'ياخشىمۇسىز',
  sampleSentence: 'ياخشىمۇسىز! بۇ لىنۇ.',
  phrases: {
    hi: 'ياخشىمۇسىز!',
    thanks: 'رەھمەت!',
    // as fontes consultadas não registraram uma forma cohortativa de "vamos!": em vez de inventar
    // uma, reaproveitamos aqui o verbo já atestado "oquymen" (eu leio/estudo) como convite para
    // começar a estudar — a mesma estratégia usada no pacote tpj para a mesma lacuna.
    letsStart: ['مەن ئوقۇيمەن!', 'Eu estudo! (lit. “eu leio/estudo”; as fontes não registraram uma forma de “vamos!”, por isso usamos aqui o verbo já atestado “oquymen” como convite para começar)'],
  },
  formalMarkers: 'سىز (siz, tratamento formal — equivalente a “o senhor”/“a senhora”); a diferença entre “sen” (informal) e “siz” (formal) é só de registro, já que o uigur não tem gênero gramatical',
  cognateNote:
    'O uigur não é parente do português: é uma língua túrquica do ramo carlúquico, parente próximo do uzbeque. É DIFERENTE do turco da Turquia (pacote “tr” deste app), que vem do ramo oghuz da mesma família túrquica — os dois têm palavras e gramática parecidas, mas por serem parentes “primos”, não “irmãos”. O uigur também não é parente do árabe, do persa nem do urdu: a semelhança está só no alfabeto, emprestado do árabe-persa e adaptado com vogais próprias (um traço que o árabe padrão não tem). Como o português e o uigur não vêm da mesma família, nenhuma palavra do vocabulário é “transparente” para quem já fala português — mas a aba de etimologia mostra, mesmo assim, de onde cada palavra vem: raízes prototurcas antigas (como em “süt”, leite) ou empréstimos do árabe clássico por meio do chagatai (como em “rehmet”, obrigado).',
};
