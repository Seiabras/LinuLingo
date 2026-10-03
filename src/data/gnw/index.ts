import type { LanguagePack } from '../types';
import { VOCAB_GNW } from './vocabulario';
import { UNITS_GNW } from './curriculo';
import { GRAMMAR_GNW } from './gramatica';
import { STORIES_GNW } from './historias';
import { COMMUNITY_GNW, ETYMOLOGY_GNW, JOURNAL_PROMPTS_GNW, SCENARIOS_GNW, SHADOWING_GNW } from './extras';

export const GUARANI_ANTIGO: LanguagePack = {
  code: 'gnw',
  name: 'Guarani Antigo',
  // "Avañe'ẽ" (fala da gente) é o nome que o próprio guarani paraguaio moderno usa para si mesmo; o
  // guarani colonial documentado por Montoya não tem uma autodesignação própria registrada no
  // dicionário — por isso o nome nativo aqui é o nome do POVO, não da língua: Montoya conta, na
  // introdução do seu "Tesoro" (1639), que "guaraní" era como os próprios índios guerreiros do
  // Paraguai se chamavam, de "guariní" (guerra) — ver nota completa em vocabulario.ts.
  nativeName: 'Guaraní',
  // território histórico: as reduções jesuíticas do Paraguai colonial (séculos XVI-XVIII), não um
  // país de hoje — emoji de bandeira do Paraguai, por ser o território-núcleo das reduções e o país
  // onde a língua descendente direta (guarani paraguaio, pacote "gn") é hoje cooficial.
  flag: '🇵🇾',
  lineage: {
    family: 'Tupi',
    branches: ['Tupi-guarani', 'Guarani (subgrupo I)'],
    region:
      'Reduções jesuíticas do Paraguai colonial e regiões vizinhas (atuais Paraguai, nordeste da Argentina e sul do Brasil), séculos XVI-XVIII — língua histórica, sem falantes vivos nesta forma específica: ela se transformou no guarani paraguaio moderno (pacote “gn” deste app) depois da expulsão dos jesuítas em 1767.',
    writing:
      'Alfabeto latino, na ortografia jesuítica à espanhola criada por Antonio Ruiz de Montoya no século XVII: “c” (antes de a/o/u) e “qu” (antes de e/i) para /k/, “ç” para /s/ diante de a/o/u, vogais dobradas sem acento circunflexo para marcar uma oclusiva glotal entre elas (em vez do apóstrofo usado no guarani e no tupi antigo modernos), e til em algumas vogais nasais (ã ẽ ĩ õ ũ) — bem diferente tanto da ortografia oficial do guarani de hoje (Academia de la Lengua Guaraní, fundada em 2013: “k”, “j”, apóstrofo) quanto da ortografia moderna do tupi antigo (Navarro: “k”, “x”, apóstrofo). Veja o tópico de gramática gnw-g1 para o detalhe completo.',
  },
  // nenhum serviço de síntese de voz consultado (Google, incluindo o Cloud Text-to-Speech) tem voz
  // para o guarani antigo/colonial, língua histórica sem falantes vivos: os áudios usam a voz do
  // aparelho, se houver, ou a voz do guarani paraguaio moderno como aproximação — mesmo caso dos
  // outros pacotes indígenas e históricos deste app (gun, kgk, nhd, tpj, tpw).
  speechLocale: 'gnw',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, 61 palavras, 4 tópicos de gramática, 2 histórias), no guarani antigo/colonial (também chamado guarani missioneiro, jesuítico ou “clássico”) — a forma histórica da língua documentada pelos jesuítas nas reduções do Paraguai entre os séculos XVI e XVIII, sobretudo pelo padre Antonio Ruiz de Montoya (1585-1652), autor do “Vocabulario de la lengua guaraní” (1640, espanhol → guarani) e do “Tesoro de la lengua guaraní” (1639, guarani → espanhol). TODA palavra deste pacote foi conferida diretamente nesses dois dicionários, lidos na reedição crítica de Julius Platzmann (“Vocabulario y Tesoro de la lengua guaraní”, Leipzig, 1876), digitalizada com OCR em texto corrido no Internet Archive (archive.org/details/vocabularioyteso01ruiz), com atenção a nasais que o OCR de 1876 às vezes apaga. O contexto histórico e a descrição independente da fonologia/ortografia jesuítica vêm de en.wikipedia.org/wiki/Tesoro_de_la_lengua_guaraní e, sobretudo, en.wikipedia.org/wiki/Classical_Guarani, artigo acadêmico que também confirmou, sem depender do dicionário, que a língua só tinha numerais nativos de um a quatro. É a forma ANCESTRAL direta do guarani paraguaio moderno (pacote “gn” deste app) e língua-irmã do tupi antigo (pacote “tpw”), mas não é nenhuma das duas: é uma língua histórica, sem comunidade de falantes vivos nesta forma específica — ela se transformou no guarani paraguaio depois da expulsão dos jesuítas das reduções, em 1767. Por ser uma língua documentada só por dicionário (não por um corpus de frases prontas, como um livro de frases ou um curso), quase todas as frases de exemplo deste pacote são combinações de duas palavras OUTRAS vezes já confirmadas cada uma por si, no mesmo padrão de justaposição substantivo + qualidade que o próprio Montoya usa em verbetes como “Grande, adulto, Aba ocaquaábae” — nunca uma frase inventada do zero. Dois traços raros, confirmados diretamente no dicionário, estruturam boa parte do curso: “sim” tem uma forma para homem (“tã”) e outra para mulher (“heẽ”), e “filho/filha” muda conforme quem fala, mãe (“membi”) ou pai (“taíra”). Da A2.1 até o C2 chega nas próximas atualizações, conforme mais verbetes do próprio dicionário de Montoya puderem ser conferidos.',
  },
  vocab: VOCAB_GNW,
  units: UNITS_GNW,
  etymology: ETYMOLOGY_GNW,
  community: COMMUNITY_GNW,
  scenarios: SCENARIOS_GNW,
  stories: STORIES_GNW,
  grammar: GRAMMAR_GNW,
  journalPrompts: JOURNAL_PROMPTS_GNW,
  shadowing: SHADOWING_GNW,
  // ortografia jesuítica à espanhola: SEM apóstrofo (a oclusiva glotal é marcada com vogal dobrada,
  // ex. "çoó") e SEM "k" (o som /k/ vai em "c"/"qu"); "ç" e "ñ" cobrem sons que o português não separa
  // do jeito guarani — ver gramatica.ts, tópico gnw-g1, para a fonologia e a ortografia completas.
  specialChars: ['ã', 'ẽ', 'ĩ', 'õ', 'ũ', 'ñ', 'ç'],
  // nenhuma fonte consultada registra gênero gramatical (m/f/n) no guarani antigo: como no guarani
  // paraguaio moderno (pacote gn) e nos outros guarani deste app (gun, kgk, nhd, tpj), os substantivos
  // não se dividem por gênero — a língua marca, em vez disso, o GÊNERO DE QUEM FALA em certas palavras
  // (ver gnw-g3 e o campo `gender` nunca usado aqui, já que não é concordância nominal).
  genders: [],
  // cumprimento documentado por Montoya para quem chega ("Saludar al que viene, Ereyupa?"), usado no
  // lugar de um "oi" solto que o dicionário não registra.
  greeting: 'Ereyupa?',
  sampleSentence: 'Ereyupa? Tã, che Abá. Mbae nde Tera?',
  phrases: {
    hi: 'Ereyupa?',
    // "obrigado" vem direto do verbete de Montoya para "agradecer" ("Agradecer, Aguiyebeé: Aguíyebete").
    thanks: 'Aguiyevete!',
    // o dicionário não registra um "vamos!" imperativo isolado: "Ahá" (ir) é o próprio verbo de
    // movimento já confirmado em verbete isolado ("Ir, Ahá: Ho"), usado aqui como convite para começar
    // agora, sem inventar uma forma nova — mesma estratégia que os pacotes nhd e tpj já usam nas suas
    // próprias lacunas.
    letsStart: ['Ahá!', 'Vamos! (lit. “ir”; usado aqui como convite para começar agora)'],
  },
  formalMarkers:
    'Nenhuma fonte consultada registra uma forma de tratamento “formal” separada da informal no guarani antigo — um traço comum aos outros pacotes guarani deste app (gn, gun, kgk, nhd, tpj). O que o dicionário de Montoya registra, em vez disso, é uma diferença de REGISTRO POR GÊNERO DE QUEM FALA em palavras como “sim” (tã/heẽ) e “filho/filha” (taíra/membi) — ver gnw-g3.',
  cognateNote:
    'O guarani antigo é a forma ANCESTRAL direta do guarani paraguaio moderno (pacote “gn” deste app) e língua-irmã do tupi antigo (pacote “tpw”): boa parte do vocabulário sobrevive quase sem mudança nos dois — “che” (eu), “nde” (tu), “guasu” (grande), “tatá” (fogo) e os quatro numerais nativos (“peteĩ, mocõî, mbohapy, yrundy”) são praticamente idênticos aos do guarani paraguaio e do kaiowá (pacote “kgk”) de hoje, cada forma conferida separadamente no arquivo-fonte do próprio pacote (ver etimologias). Com o português, o parentesco é só de contato colonial: o guarani antigo não descende do latim nem de nenhuma língua europeia, mas o contato de dois séculos nas reduções deixou marcas nos dois sentidos — “jaguareté” (onça) deu origem ao português “jaguar” (via tupi antigo), enquanto palavras como “cabayú” (cavalo) e “mbuyapé” (pão) mostram o caminho inverso, do espanhol colonial para o guarani, batizando novidades que a América não tinha antes de 1492.',
};
