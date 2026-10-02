import type { LanguagePack } from '../types';
import { VOCAB_KMB } from './vocabulario';
import { UNITS_KMB } from './curriculo';
import { GRAMMAR_KMB } from './gramatica';
import { STORIES_KMB } from './historias';
import { COMMUNITY_KMB, ETYMOLOGY_KMB, JOURNAL_PROMPTS_KMB, SCENARIOS_KMB, SHADOWING_KMB } from './extras';

/**
 * Quimbundo (kimbundu), língua banta de Angola — ISO 639-3 “kmb”. Fontes gerais do pacote:
 * - Wikipédia (inglês) “Kimbundu language”: https://en.wikipedia.org/wiki/Kimbundu_language
 * - Wikipédia (português) “Língua quimbundo”: https://pt.wikipedia.org/wiki/Língua_quimbundo
 * - Wikipédia (inglês) “Angola” (seção de etimologia) e “Nzinga Mbande”
 * - Wikcionário (inglês), dezenas de verbetes individuais do quimbundo e do português com etimologia
 *   quimbundo (ver o cabeçalho de vocabulario.ts e extras.ts para a lista completa)
 * - Omniglot, números do quimbundo e a amostra em quimbundo da Declaração Universal dos Direitos
 *   Humanos: https://www.omniglot.com/language/numbers/kimbundu.htm e
 *   https://www.omniglot.com/writing/kimbundu.htm
 */
export const QUIMBUNDO: LanguagePack = {
  code: 'kmb',
  name: 'Quimbundo',
  nativeName: 'Kimbundu',
  flag: '🇦🇴',
  lineage: {
    family: 'Níger-Congo',
    branches: ['Atlântico-congolês', 'Benue-congolês', 'Banto', 'Banto central (zona H.20 na classificação de Guthrie)'],
    region: 'Noroeste de Angola (Luanda, Bengo, Icolo e Bengo, Cuanza Norte, Cuanza Sul e Malanje)',
    writing: 'Alfabeto latino (sem c, q, r; x = “ch”; ortografia fixada por gramáticas missionárias desde o fim do século XIX)',
  },
  // código BCP-47 na melhor tentativa (kmb-AO): não há cobertura de voz nativa conhecida para o
  // quimbundo em aparelhos comuns — o código é um palpite razoável, não uma confirmação.
  speechLocale: 'kmb-AO',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, pouco mais de 50 palavras, 4 tópicos de gramática — incluindo as classes nominais — e 2 histórias). O quimbundo tem poucas fontes abertas e verificáveis: nenhuma das consultadas trouxe uma interjeição de saudação, de agradecimento ou palavras interrogativas (“o quê”, “onde”), nem cores básicas além de tons de pele — por isso elas ainda não aparecem aqui. Da A2.1 até o C2, e esses gaps, chegam conforme aparecem fontes confiáveis novas.',
  },
  vocab: VOCAB_KMB,
  units: UNITS_KMB,
  etymology: ETYMOLOGY_KMB,
  community: COMMUNITY_KMB,
  scenarios: SCENARIOS_KMB,
  stories: STORIES_KMB,
  grammar: GRAMMAR_KMB,
  journalPrompts: JOURNAL_PROMPTS_KMB,
  shadowing: SHADOWING_KMB,
  specialChars: [],
  // sem gênero gramatical: o quimbundo tem classes nominais (mu-/a-, ki-/i-, N-/ji-, di-/ma-…),
  // como outras línguas bantas deste app (suaíli, igbo não é banto mas também não tem gênero) — ver
  // a explicação completa em gramatica.ts (kmb-g4).
  genders: [],
  greeting: 'Eme ngala.',
  sampleSentence: 'Eme ngala ni dikamba. Etu tuala ni Kimbundu!',
  // “thanks” usa “Kalunga!” (grande, excelente — um elogio atestado para o adjetivo “kalunga”, não
  // uma palavra específica de agradecimento): nenhuma das fontes consultadas trouxe uma interjeição
  // de “obrigado” em quimbundo. Ver a nota em `incomplete` acima.
  phrases: { hi: 'Eme ngala.', thanks: 'Kalunga!', letsStart: ['Etu tuala ni Kimbundu!', 'Vamos começar!'] },
  formalMarkers:
    'Ainda não documentado nas fontes consultadas: é possível que o quimbundo tenha formas de tratamento respeitoso (como “kota”, usado para mais velhos no português de Angola, mas sem fonte que confirme o uso dentro do próprio quimbundo), mas nenhuma fonte usada aqui comprova isso — por honestidade, este pacote não marca nenhum registro formal ainda.',
  cognateNote:
    'O quimbundo é uma língua banta da família Níger-Congo, sem parentesco com o português — mas foi uma das línguas que mais emprestou palavras ao português do Brasil, por causa do tráfico de pessoas escravizadas de Angola. “Moleque” vem de “muleke” (menino), “bunda” vem de “mbunda” (nádegas), “cafuné” vem de “kifune” (o carinho de cocar a cabeça), “zumbi” vem de “nzumbi” (espírito) e “quilombo” vem de “kilombo” (acampamento, refúgio) — cada uma com a fonte e a palavra original em extras.ts. Outras palavras do quimbundo também chegaram ao português: “quitute” (de “kitutu”), “dendê” (de “ndénde”), “fubá” (de “fuba”), “senzala” (de “sanzala”), “quitanda” (de “kitanda”) e até a gíria europeia “bué” (de “mbuwe”, fartura). Já “samba” tem uma origem banta próxima mas distinta, mais ligada ao quicongo “semba” do que ao quimbundo propriamente dito — por isso não entra na lista de empréstimos diretos.',
};
