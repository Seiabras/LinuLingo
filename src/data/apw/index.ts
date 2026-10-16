import type { LanguagePack } from '../types';
import { VOCAB_APW } from './vocabulario';
import { UNITS_APW } from './curriculo';
import { GRAMMAR_APW } from './gramatica';
import { STORIES_APW } from './historias';
import { COMMUNITY_APW, ETYMOLOGY_APW, JOURNAL_PROMPTS_APW, SCENARIOS_APW, SHADOWING_APW } from './extras';
import { ACCENTS_APW } from './sotaques';
import { FONTES_APW, METODOS_APW } from './fontes';

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
 * Apache Language, de Reuse, 2006, citada pela própria Wikipédia). O A1 foi conferido verbete por
 * verbete no Wiktionary em inglês; o A2 (16/10/2026) usa a gramática de De Reuse (2006), lida no PDF
 * indicado pelo San Carlos Apache College, com a página de cada frase no comentário.
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
  // Curso completo até o teto (A2, em tetos): os testes de teto leem “incomplete.until igual ao último
  // subnível do teto” como curso completo; sem o campo, entenderiam conteúdo até o C2. A nota diz ao
  // aluno de onde vem o material e o que ficou de fora.
  incomplete: {
    until: 'A2.2',
    note:
      'Curso completo até o teto do apache ocidental (A2): quatro unidades, 116 palavras, 8 tópicos de gramática e 4 histórias. O A1 vem do Wiktionary em inglês, conferido palavra por palavra. O A2 vem da gramática prática do apache de San Carlos, de Willem de Reuse e Phillip Goode (2006), feita com falantes de San Carlos, Peridot e Bylas: todas as frases do A2 são frases do livro, nenhuma foi criada pelo curso. Por isso a grafia muda um pouco no A2: o livro marca também o tom médio, com um traço sobre a vogal, e escreve “três” como “tāāgi”, onde o Wiktionary escreve “táági”. As duas formas estão certas, cada uma na sua fonte. Os parentes e as partes do corpo sempre vêm com um dono (“shitaa”, meu pai). Ficaram de fora as tabelas dos verbos que mudam conforme o objeto (os classificatórios), que pedem mais do que o A2. Nenhum serviço de voz consultado tem uma voz própria para o apache ocidental, então o áudio usa a voz do aparelho.',
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
  fontes: FONTES_APW,
  metodos: METODOS_APW,
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
  // De Reuse (2006), p. 79 (T4): prefixo 3a. “ko-/ki-”, “someone’s; his/her/their (polite)”.
  formalMarkers:
    'As fontes consultadas não confirmam, no apache ocidental, uma distinção simples entre tratamento formal e informal como o “tu”/“você” do português — por isso este curso não marca um contraste de registro que nenhuma fonte confirmou. O Wiktionary registra, porém, que pelo menos uma saudação (“hon dah”, um tipo de “bom dia”) é dirigida especificamente a um grupo de homens, um lembrete de que o destinatário pode mudar a escolha da palavra mesmo sem um sistema de formalidade como o do português. Já a gramática de De Reuse (2006) descreve um prefixo de respeito: “ko-” (ou “ki-”, em Bylas) quer dizer “de alguém”, e também “dele, dela” quando se fala de uma pessoa conhecida a quem se deve respeito.',
  cognateNote:
    'O apache ocidental pertence à família na-dené, sem nenhum parentesco com línguas indo-europeias como o português: não espere reconhecer palavras pela semelhança sonora ou escrita. A língua mais próxima do apache ocidental é o navajo: as duas compartilham um sistema de tons parecido e mais de 92% do vocabulário, segundo a Wikipédia em inglês. O Wiktionary confirma esse parentesco palavra por palavra — “kįh” (casa) é cognato do navajo “kin”, “isdzán” (mulher) do navajo “asdzáán”, “ishkiin” (menino) do navajo “ashkii” — a mesma raiz atabascana herdada de forma independente pelas duas línguas, não um empréstimo recente entre elas.',
};
