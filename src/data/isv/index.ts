import type { LanguagePack } from '../types';
import { VOCAB_ISV } from './vocabulario';
import { UNITS_ISV } from './curriculo';
import { GRAMMAR_ISV } from './gramatica';
import { STORIES_ISV } from './historias';
import { COMMUNITY_ISV, ETYMOLOGY_ISV, JOURNAL_PROMPTS_ISV, SCENARIOS_ISV, SHADOWING_ISV } from './extras';
import { ALPHABET_ISV } from './alfabeto';

/**
 * Interslavo/medžuslovjansky: a quarta língua CONSTRUÍDA do app com pacote completo de trilha,
 * depois do esperanto/interlíngua, da “segunda leva” (ido, klingon, toki pona, lojban, volapük) e do
 * novial (terceira leva, 08/10/2026). Diferente de todas essas, o interslavo não é uma língua "a
 * priori" nem o projeto de um autor só: é uma língua ZONAL, montada com as raízes e as regras
 * gramaticais que (quase) toda língua eslava viva tem em comum, pra ser entendida por qualquer
 * eslavo sem precisar estudá-la. O projeto atual nasceu em 2017, da fusão de dois projetos dos anos
 * 2000 (Slovianski e Novoslověnsky/Neoslavonic), e é mantido por um comitê de 5 linguistas: Vojtěch
 * Merunka, Jan van Steenbergen, Roberto Lombino, Michał Swat e Pavel Skrylev. Código ISO 639-3 real:
 * `isv` (adicionado em abril de 2024, depois de duas tentativas em 2012 e 2014).
 *
 * Usa `lineage.family: 'Construída'`, a mesma convenção já prevista em `isArtificial()` (ver
 * `idiomas.ts`), pra aparecer no seletor “🤖 Artificiais” do Perfil.
 *
 * Fonte única e oficial: `steen.free.fr/interslavic/` (o site pessoal de Jan van Steenbergen, membro
 * do comitê — conferido de novo nesta sessão via HTTP direto). **Armadilhas confirmadas a NUNCA usar
 * como fonte**: `interslavic.org` (domínio de terceiros, hostil, o site oficial avisa) e
 * `neoslavonic.org` (domínio expirado, hoje é parking de anúncios). Ver o cabeçalho de
 * `vocabulario.ts` para a lista completa das páginas usadas.
 */
export const INTERSLAVO: LanguagePack = {
  code: 'isv',
  name: 'Interslavo',
  nativeName: 'Medžuslovjansky',
  flag: '🔗',
  lineage: {
    family: 'Construída',
    branches: ['Auxiliares', 'Zonais (eslava)'],
    region: 'Projeto atual fundido em 2017 por um comitê de 5 linguistas (entre eles o holandês Jan van Steenbergen) — sem território próprio',
    writing: 'Alfabeto latino (usado neste curso, 27 letras: as 23 comuns menos q/w/x, mais č/ě/š/ž, e os dígrafos dž/lj/nj) ou cirílico (29 letras) — os dois são “oficialmente iguais”',
  },
  // BCP-47 na melhor tentativa ('isv' é o código ISO 639-3 real do interslavo, adicionado em 2024).
  // Sem voz nativa conhecida em sintetizadores comuns — cai no padrão do app, mesmo tratamento dado
  // ao esperanto, à interlíngua e ao novial.
  speechLocale: 'isv',
  available: true,
  incomplete: {
    until: 'A2.2',
    note: 'A1 e A2 completos por enquanto (4 unidades, mais de 130 palavras, 9 tópicos de gramática — dos dois alfabetos e o verbo byti até o acusativo, o passado composto com particípio-L e o futuro com budu —, 4 histórias). O teto real deste idioma é B2.4 (o dicionário oficial do interslavo, com mais de 12 mil linhas, sustenta mais conteúdo do que a maioria das línguas construídas do app, mas ainda bem menos que uma língua eslava viva completa): faltam o B1 inteiro e metade do B2, sempre com palavras e formas confirmadas direto em steen.free.fr/interslavic/.',
  },
  vocab: VOCAB_ISV,
  units: UNITS_ISV,
  etymology: ETYMOLOGY_ISV,
  community: COMMUNITY_ISV,
  scenarios: SCENARIOS_ISV,
  stories: STORIES_ISV,
  grammar: GRAMMAR_ISV,
  journalPrompts: JOURNAL_PROMPTS_ISV,
  shadowing: SHADOWING_ISV,
  specialChars: ['č', 'ě', 'š', 'ž'],
  alphabet: ALPHABET_ISV,
  greeting: 'Dobry denj',
  sampleSentence: 'Dobry denj! Moje ime jest Linu. My govorimo Interslavic!',
  // “Dělajmo!” é a forma oficial do imperativo de 1ª pessoa do plural (“vamos fazer!”), confirmada
  // direto em verbs.html (seção “Imperative”) — não uma tradução literal de “vamos começar”.
  phrases: { hi: 'Dobry denj!', thanks: 'Blagodarju!', letsStart: ['Dělajmo!', 'Vamos lá!'] },
  formalMarkers:
    'O interslavo distingue “ty” (só para amigos próximos, família e crianças) de “vy” (para qualquer outra pessoa, e também o plural “vocês”, sempre) — a mesma distinção T-V de quase toda língua eslava viva, diferente do esperanto e do novial, onde um único pronome serve para tudo.',
  cognateNote:
    'O interslavo não foi inventado do zero: cada palavra do vocabulário é escolhida por já existir, com som parecido, em pelo menos três das línguas eslavas vivas (russo, polonês, tcheco, croata, búlgaro…) — por isso boa parte do vocabulário se reconhece de cara por quem já estudou outra língua eslava no app, mesmo sem nunca ter estudado interslavo antes.',
};
