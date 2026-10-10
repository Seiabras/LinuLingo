import type { LanguagePack } from '../types';
import { VOCAB_APW } from './vocabulario';
import { UNITS_APW } from './curriculo';
import { GRAMMAR_APW } from './gramatica';
import { STORIES_APW } from './historias';
import { COMMUNITY_APW, ETYMOLOGY_APW, JOURNAL_PROMPTS_APW, SCENARIOS_APW, SHADOWING_APW } from './extras';
import { ACCENTS_APW } from './sotaques';

/**
 * Apache ocidental (Western Apache, código ISO 639-3 “apw”). “Apache” não é uma única língua: é um
 * grupo de línguas atabascanas meridionais distintas — apache ocidental, chiricauá, mescalero,
 * jicarila, lipã e apache das planícies —, segundo en.wikipedia.org/wiki/Apachean_languages. Este
 * pacote escolheu especificamente o apache ocidental depois de comparar as línguas do grupo: é a que
 * tem mais falantes (13.445 em 2013, 65% da população apache ocidental, segundo
 * en.wikipedia.org/wiki/Western_Apache_language) e, nesta pesquisa, de longe a documentação digital
 * mais rica — quase 500 verbetes na categoria “Western Apache lemmas” do Wiktionary em inglês (contra
 * pouquíssimos ou nenhum verbete equivalente para as outras línguas apache), um dicionário publicado
 * (Western Apache-English Dictionary, 1998) e uma gramática (A Practical Grammar of the San Carlos
 * Apache Language, de Reuse e Adley-SantaMaria, 2006, citada pela própria Wikipédia). Cada palavra do
 * vocabulário foi conferida, verbete por verbete, no Wiktionary em inglês (ver o comentário de fontes
 * em `vocabulario.ts`).
 */
export const APACHE_OCIDENTAL: LanguagePack = {
  code: 'apw',
  name: 'Apache ocidental',
  // “Ndee biyáti'” (também grafado “Nṉee biyáti'”) é a autodesignação confirmada pelo quadro da
  // Wikipédia em inglês (artigo “Western Apache language”) e pelo Wiktionary, que define a entrada
  // multipalavra “Ndee biyáti'” exatamente como “língua apache ocidental”.
  nativeName: "Ndee biyáti'",
  // as reservas onde se fala apache ocidental (San Carlos e Fort Apache/White Mountain) ficam nos
  // Estados Unidos; a Tribo Apache de San Carlos e a Tribo Apache de White Mountain são nações
  // soberanas dentro do território dos EUA, não simples “estados” do país — a bandeira reflete só a
  // geografia política atual, não apaga essa soberania.
  flag: '🇺🇸',
  lineage: {
    family: 'Na-Dené',
    branches: ['Atabascano (Dené)', 'Atabascano meridional (apachiano)', 'Subgrupo apachiano ocidental (com o navajo, o mescalero e o chiricauá)'],
    region: 'Sudoeste dos Estados Unidos — Reserva Apache de San Carlos e Reserva de Fort Apache/White Mountain, no Arizona',
    writing:
      'Alfabeto latino, com o apóstrofo (ʼ) como letra própria (oclusiva glotal), o “ł” (lateral surda), vogais nasalizadas marcadas com o ogonek (ą, į, ǫ) e o acento agudo para o tom alto (o tom baixo fica sem marca); De Reuse (2006) descreve ainda um tom médio, marcado com mácron em alguns materiais.',
  },
  // nenhum serviço de síntese de voz consultado tem voz dedicada ao apache ocidental: “apw-US” é só a
  // melhor aproximação de locale; na prática, os áudios usam a voz do aparelho, se houver, e
  // provavelmente sem o tom nem as consoantes próprias do apache ocidental.
  speechLocale: 'apw-US',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, 75 palavras, 4 tópicos de gramática, 2 histórias). O vocabulário é todo verificado palavra por palavra, mas a morfologia verbal do apache ocidental é muito complexa — o verbo muda de forma segundo o sujeito, o objeto e até o tipo do objeto —, e as fontes abertas consultadas trazem palavras isoladas e algumas saudações fixas, não frases completas de uso cotidiano com verbo conjugado. Por isso preferimos um curso menor e honesto a inventar conjugações que nenhuma fonte confirma. Este pacote também ainda não tem uma função própria de leitura guiada para quem não conhece as letras especiais da língua, e nenhum serviço de voz consultado tem uma voz dedicada ao apache ocidental. Da A2.1 até o C2 chega nas próximas atualizações, conforme mais fontes forem encontradas.',
  },
  vocab: VOCAB_APW,
  units: UNITS_APW,
  etymology: ETYMOLOGY_APW,
  community: COMMUNITY_APW,
  scenarios: SCENARIOS_APW,
  stories: STORIES_APW,
  accents: ACCENTS_APW,
  grammar: GRAMMAR_APW,
  journalPrompts: JOURNAL_PROMPTS_APW,
  shadowing: SHADOWING_APW,
  specialChars: ['ʼ', 'ł', 'ą', 'į', 'ǫ'],
  // as fontes consultadas (Wikipédia e Wiktionary) não registram gênero gramatical nos substantivos do
  // apache ocidental; o que a língua tem é um sistema de verbos classificatórios (a forma do verbo muda
  // segundo o tipo do objeto — ver a aba de gramática), um fenômeno diferente, por isso não é marcado
  // aqui como gênero.
  genders: [],
  greeting: 'Dagotʼee!',
  sampleSentence: "Dagotʼee! Ndee biyáti'.",
  phrases: {
    hi: 'Dagotʼee!',
    thanks: 'Áho!',
    letsStart: ["Dałaá, nakih, táági, dį́į́'i, ashdla'i!", 'Vamos contar até cinco em apache ocidental!'],
  },
  formalMarkers:
    'As fontes consultadas não confirmam, no apache ocidental, uma distinção simples entre tratamento formal e informal como o “tu”/“você” do português — por isso este curso não marca um contraste de registro que nenhuma fonte confirmou. O Wiktionary registra, porém, que pelo menos uma saudação (“hon dah”, um tipo de “bom dia”) é dirigida especificamente a um grupo de homens, um lembrete de que o destinatário pode mudar a escolha da palavra mesmo sem um sistema de formalidade como o do português.',
  cognateNote:
    'O apache ocidental pertence à família na-dené, sem nenhum parentesco com línguas indo-europeias como o português: não espere reconhecer palavras pela semelhança sonora ou escrita. A língua mais próxima do apache ocidental é o navajo: as duas compartilham um sistema de tons parecido e mais de 92% do vocabulário, segundo a Wikipédia em inglês. O Wiktionary confirma esse parentesco palavra por palavra — “kįh” (casa) é cognato do navajo “kin”, “isdzán” (mulher) do navajo “asdzáán”, “ishkiin” (menino) do navajo “ashkii” — a mesma raiz atabascana herdada de forma independente pelas duas línguas, não um empréstimo recente entre elas.',
};
