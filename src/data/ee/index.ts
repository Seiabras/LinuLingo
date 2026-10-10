import type { LanguagePack } from '../types';
import { VOCAB_EE } from './vocabulario';
import { UNITS_EE } from './curriculo';
import { GRAMMAR_EE } from './gramatica';
import { STORIES_EE } from './historias';
import { COMMUNITY_EE, ETYMOLOGY_EE, JOURNAL_PROMPTS_EE, SCENARIOS_EE, SHADOWING_EE } from './extras';
import { ACCENTS_EE } from './sotaques';

export const EWE: LanguagePack = {
  code: 'ee',
  name: 'Eʋe',
  nativeName: 'Eʋegbe',
  // Gana tem a maior população eʋe (≈6 milhões, contra ≈3 milhões no Togo, segundo a Wikipédia em
  // inglês, artigo «Ewe people») — por isso a bandeira de Gana, e não a do Togo, onde o eʋe também é
  // uma das línguas mais faladas do país (ao lado do kabiyè).
  flag: '🇬🇭',
  lineage: {
    family: 'Níger-Congo',
    // Mesma cadeia do fon (`src/data/fon/index.ts`) até «Gbe» — onde as duas línguas se separam.
    // Capo (1988) descreve cinco grupos gbe (ewe, gen/mina, aja, fon, phla-pherá); Kluge (2011) junta
    // esses grupos em dois ramos maiores, «gbe ocidental» (onde fica o ewe) e «gbe oriental» (onde
    // fica o fon) — ver a nota de parentesco completa em `cognateNote`, mais abaixo.
    branches: ['Atlântico-congolês', 'Volta-Níger', 'Gbe', 'Gbe Ocidental (grupo eʋe, Capo 1988 / Kluge 2011)'],
    region: 'Sudeste de Gana (Região do Volta) e sul do Togo, também no Benin',
    writing: 'Alfabeto latino (Alfabeto de Referência Africano: ɖ, ɣ, ŋ, ʋ, ƒ, ɔ; nasalização por til sobre a vogal nas fontes consultadas, ou por “n” depois da vogal segundo a Wikipédia; tons normalmente não marcados na escrita do dia a dia)',
  },
  // «ee-GH» (ISO 639-1 «ee» + Gana) é uma aproximação: não há confirmação de que algum sistema de voz
  // do aparelho tenha uma voz nativa para o eʋe — vale testar e ajustar depois.
  speechLocale: 'ee-GH',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Criado a pedido do dono do projeto, que pediu outras línguas gbe depois do pacote de fon, citando o eʋe nomeadamente. Só o nível A1 por enquanto (duas unidades, 62 palavras, 4 tópicos de gramática, 2 histórias). Gaps honestos: não achamos nas fontes consultadas um verbo “ser/estar” (cópula) nem um verbo “ter” (posse) confirmados para o eʋe — por isso nenhuma frase deste pacote tenta traduzir “é”, “está” ou “tenho”; as frases juntam substantivo+artigo (“xɔ la”, a casa) ou sujeito+verbo+objeto. Também não achamos uma saudação simples tipo “oi”/“bom dia” (só “wòe zɔ”, bem-vindo, e as palavras de agradecer/pedir por favor), nem palavras para “mercado” ou “trabalho”. Este pacote também não tem, ainda, uma função de leitura/romanização (ou marcação de tom): o eʋe tem tons (altos, médios e baixos), mas a escrita do dia a dia normalmente não os marca — e é assim, sem tom marcado, que as palavras aqui aparecem, exceto o til de nasalização, que é parte da ortografia normal. Da A2.1 em diante, e essas lacunas de vocabulário e gramática, ficam para as próximas atualizações, se houver fontes melhores.',
  },
  vocab: VOCAB_EE,
  units: UNITS_EE,
  etymology: ETYMOLOGY_EE,
  community: COMMUNITY_EE,
  scenarios: SCENARIOS_EE,
  stories: STORIES_EE,
  accents: ACCENTS_EE,
  grammar: GRAMMAR_EE,
  journalPrompts: JOURNAL_PROMPTS_EE,
  shadowing: SHADOWING_EE,
  specialChars: ['ɖ', 'ɣ', 'ŋ', 'ʋ', 'ƒ', 'ɔ', 'ɔ̃', 'ã', 'ẽ', 'ĩ', 'õ', 'ũ', 'á', 'à', 'é', 'è', 'í', 'ì', 'ó', 'ò', 'ú', 'ù'],
  // o eʋe não marca gênero gramatical: o pronome de 3ª pessoa "eya" cobre "ele", "ela" e "isto/aquilo"
  // ao mesmo tempo (Wiktionary), e nenhuma fonte consultada (Wikipédia, Wiktionary) descreve artigos,
  // adjetivos ou sufixos que mudem de forma por gênero — ver o tópico de gramática `ee-g2`.
  genders: [],
  greeting: 'Wòe zɔ',
  sampleSentence: 'Wòe zɔ! Nye ɖu abolo eye no tsi.',
  phrases: { hi: 'Wòe zɔ!', thanks: 'Akpe!', letsStart: ['Mí zɔ!', 'Vamos!'] },
  // nenhuma fonte consultada confirma marcas de formalidade (pronome ou partícula) em eʋe.
  formalMarkers: 'ainda não confirmado nas fontes consultadas',
  cognateNote:
    'O eʋe e o fon são parentes próximos: os dois são línguas gbe, da família Níger-Congo, faladas lado a lado em Gana, Togo e Benin. Capo (1988) descreve cinco grupos dentro do gbe — ewe, gen/mina, aja, fon e phla-pherá — e Kluge (2011) agrupa esses cinco num "gbe ocidental" (onde fica o ewe) e um "gbe oriental" (onde fica o fon), dentro do que a Wikipédia chama de um "contínuo dialetal", sem fronteiras sempre nítidas entre os grupos. Isso aparece no vocabulário: muitos pares eʋe-fon são quase idênticos, como "eve"/"àwè" (dois), "ati"/"atin" (árvore), "nyɔnu"/"nyɔ́nu" (mulher), "vi"/"ví" (filho/criança), "avu"/"avǔn" (cachorro), "gbɔ̃"/"gbɔ́" (cabra), "alẽ"/"lɛ̀ngbɔ́" (ovelha) e "kpɔ"/"kpɔ́n" (ver) — todos confirmados pelo Wiktionary como descendentes da mesma raiz do Proto-Gbe. Quanto à inteligibilidade mútua, porém, as fontes consultadas não confirmam um número específico entre eʋe e fon: o que a Wikipédia registra é uma inteligibilidade mútua de 85% entre o eʋe e seu vizinho mais próximo, o gen/mina — um parentesco mais próximo do que o do eʋe com o fon, que fica no outro extremo do "contínuo dialetal" gbe. Por isso este pacote não afirma que falantes de eʋe e de fon se entendem direto: o parentesco é real e visível no vocabulário, mas a inteligibilidade mútua específica entre os dois não foi encontrada numa fonte confiável.',
};
