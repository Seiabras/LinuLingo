import type { LanguagePack } from '../types';
import { VOCAB_BSK } from './vocabulario';
import { UNITS_BSK } from './curriculo';
import { GRAMMAR_BSK } from './gramatica';
import { STORIES_BSK } from './historias';
import { COMMUNITY_BSK, ETYMOLOGY_BSK, JOURNAL_PROMPTS_BSK, SCENARIOS_BSK, SHADOWING_BSK } from './extras';
import { ACCENTS_BSK } from './sotaques';
import { FONTES_BSK, METODOS_BSK } from './fontes';

/**
 * Burushaski (بروشسکی) — língua ISOLADA (sem parentesco comprovado com nenhuma outra língua do
 * mundo), falada nos vales de Hunza, Nager e Yasin, no norte do Paquistão (Gilgit-Baltistão), por
 * cerca de 130 mil pessoas (Wikipédia, estimativa de 2018-2020). Este pacote ensina o dialeto
 * Hunza-Nager (o mais falado); o de Yasin é bem mais divergente. Sem status oficial, sem imprensa
 * própria, sem ensino regular nas escolas. Escrito aqui na romanização de Hermann Berger, usada
 * pelos linguistas (e pela Wikipédia e pelo dicionário anotado de G. Starostin) — não no alfabeto
 * perso-árabe/Nastaliq promovido no Paquistão, sem fonte confiável o bastante nesta sessão pra
 * ensinar a grafia árabe palavra por palavra.
 *
 * Fontes gerais (todas consultadas em 09/10/2026): o dicionário comparativo anotado de G. Starostin
 * ("Annotated Swadesh wordlists for the Burushaski group", starlingdb.org/new100/bur.pdf, abril de
 * 2013), que organiza e cita palavra por palavra a obra de Hermann Berger ("Das Yasin-Burushaski",
 * 1974, e "Die Burushaski-Sprache von Hunza und Nager", 3 vols., 1998, as GRAMÁTICAS DE REFERÊNCIA,
 * em alemão, mas aqui usadas só pelas tabelas já traduzidas e comentadas em inglês por Starostin,
 * nunca lidas diretamente em alemão); a Wikipédia em inglês ("Burushaski"); o Wikcionário em inglês
 * ("Appendix:Burushaski_Swadesh_list"); e o roteiro de frases do Wikivoyage em inglês ("Burushaski
 * phrasebook") só pras poucas palavras de cortesia que nenhuma gramática acadêmica cobre.
 *
 * A2 (16/10/2026): a gramática de referência de Noboru Yoshioka (“A Reference Grammar of Eastern
 * Burushaski”, tese, Tóquio, 2012, acesso aberto), com os contos gravados e o vocabulário do apêndice,
 * e o esboço de Sadaf Munshi e Piar Karim (“A Grammatical Sketch of Hunza Burushaski”, UNT, 2012),
 * lidos nas imagens das páginas; detalhes e regra de grafia nos comentários de curriculo e vocabulario.
 */
export const BURUSHASKI: LanguagePack = {
  code: 'bsk',
  name: 'Burushaski',
  nativeName: 'بروشسکی',
  flag: '🇵🇰',
  lineage: {
    family: 'Língua isolada',
    branches: ['Burushaski'],
    region: 'Vales de Hunza, Nager e Yasin, no norte do Paquistão (Gilgit-Baltistão)',
    writing: 'Perso-árabe/Nastaliq (promovido oficialmente no Paquistão hoje) e romanização latina de Hermann Berger, usada pelos linguistas e por este pacote',
  },
  speechLocale: 'bsk',
  available: true,
  // Curso completo até o teto (A2, em tetos): os testes de teto leem “incomplete.until igual ao último
  // subnível do teto” como curso completo; sem o campo, entenderiam conteúdo até o C2. A nota diz ao
  // aluno de onde vem o material e o que ficou de fora.
  incomplete: {
    until: 'A2.2',
    note:
      'Curso completo até o teto do burushaski (A2): quatro unidades, 90 palavras, 8 tópicos de gramática e 4 histórias, no falar de Hunza e Nager. O A1 vem de listas de palavras (Starostin, a partir de Berger, e o Wikcionário) e de um roteiro de viagem. O A2 vem da gramática de Noboru Yoshioka (2012), feita com falantes de Hunza e Nager, e do esboço de Sadaf Munshi e Piar Karim (2012), feito com um falante de Hunza. As frases do A2 são desses livros, e as histórias usam frases de dois contos que Yoshioka gravou em Hunza em 2008: nenhuma frase foi criada pelo curso. A escrita segue a romanização de Hermann Berger, também nas palavras do A1, conferidas no vocabulário de Yoshioka, que cita o dicionário de Berger. Em Hunza, “eu” é “je” e “meu” é “jáa”. A grafia ainda muda um pouco entre as fontes: Munshi e Karim não marcam a sílaba forte e escrevem “bazaar” onde Yoshioka escreve “baazáar”. Ficaram de fora a escrita em letras árabes, que só agora ganhou uma forma unificada, e os verbos com o prefixo “d-”, que pedem mais do que o A2. Nenhum serviço de voz tem uma voz própria para o burushaski, então o áudio usa a voz do aparelho.',
  },
  vocab: VOCAB_BSK,
  units: UNITS_BSK,
  etymology: ETYMOLOGY_BSK,
  community: COMMUNITY_BSK,
  scenarios: SCENARIOS_BSK,
  stories: STORIES_BSK,
  accents: ACCENTS_BSK,
  grammar: GRAMMAR_BSK,
  journalPrompts: JOURNAL_PROMPTS_BSK,
  shadowing: SHADOWING_BSK,
  fontes: FONTES_BSK,
  metodos: METODOS_BSK,
  // grafia de Berger em todo o curso (Yoshioka 2012, tabela de notações, p. xv); “ỵ” com ponto embaixo, como
  // em Yoshioka (“áỵa”). O “č” e o “ẏ” saíram na revisão de 16/10/2026: eram grafias do Wikivoyage e do Wikcionário.
  specialChars: ['ć', 'ċ', 'ṣ', 'ṭ', 'ỵ', 'ś', 'ġ', 'ṅ', 'ḍ'],
  // o burushaski tem de 4 a 5 classes nominais (hm, hf, x, y, z — ver gramática), mas nenhuma
  // corresponde 1-pra-1 ao sistema masculino/feminino/neutro do app, então nenhuma palavra do
  // vocabulário leva gênero marcado
  genders: [],
  greeting: 'Bebila?',
  sampleSentence: 'Bebila? Jáa aek Linu bila. Ju na!',
  phrases: { hi: 'Bebila?', thanks: 'Ju na!', letsStart: ['Awá!', 'Sim! (usado aqui como um “vamos!” de aprovação)'] },
  // Munshi e Karim (2012), p. 71, (103): “A suffix [-in] is added for politeness or for plural forms”;
  // Yoshioka (2012), p. 145–146, trata o “-in” como imperativo plural.
  formalMarkers:
    'Nenhuma fonte consultada atesta um “você” formal separado de “un” (tu, você). O que existe é o pedido educado: Munshi e Karim contam que a ordem ganha “-in” para pedir com educação ou falar com várias pessoas (“ni”, vá; “ni-in”, vão, ou vá, por favor). Yoshioka descreve esse “-in” como a ordem para várias pessoas.',
  cognateNote:
    'O burushaski é uma língua ISOLADA: sem parentesco comprovado com nenhuma outra língua do mundo, nem com o urdu, o xina ou qualquer outra língua indo-iraniana vizinha (apesar de séculos de contato, que deixaram empréstimos no vocabulário cultural, mas não provam origem comum). Por isso não espere reconhecer palavras de cara: veja a aba de etimologia pra conhecer a origem das próprias palavras burushaski.',
};
