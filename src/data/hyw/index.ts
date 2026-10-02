import type { LanguagePack } from '../types';
import { VOCAB_HYW } from './vocabulario';
import { UNITS_HYW } from './curriculo';
import { GRAMMAR_HYW } from './gramatica';
import { STORIES_HYW } from './historias';
import { COMMUNITY_HYW, ETYMOLOGY_HYW, JOURNAL_PROMPTS_HYW, SCENARIOS_HYW, SHADOWING_HYW } from './extras';

/**
 * Armênio ocidental (hyw) — padrão culto separado do armênio oriental (`hy/`, a Armênia atual),
 * falado sobretudo na diáspora: sem um país onde seja língua oficial. Baseado no dialeto armênio
 * de Constantinopla/Istambul; depois do genocídio armênio de 1915 passou a existir quase só fora
 * da Turquia. A UNESCO classifica o armênio ocidental como língua vulnerável/ameaçada.
 *
 * IMPORTANTE: este pacote NÃO reaproveita `src/services/reading-armenian.ts` — aquele helper foi
 * construído especificamente para a pronúncia do armênio oriental (ver o comentário no topo do
 * próprio arquivo) e daria leituras erradas aqui, por causa da troca de sonoridade entre as duas
 * variantes (ver gramatica.ts, tópico "hyw-g2"). Por isso o campo `reading` fica de fora deste
 * pacote por enquanto — criar um leitor próprio para o ocidental é tarefa separada.
 *
 * Fontes gerais: Wikipédia em inglês ("Western Armenian", "Eastern Armenian", "Armenian
 * phonology", "Armenian language") e Wikcionário em inglês (en.wiktionary.org), uma entrada por
 * palavra — ver os comentários de vocabulario.ts, gramatica.ts e extras.ts para as citações
 * específicas de cada fato.
 */
export const ARMENIO_OCIDENTAL: LanguagePack = {
  code: 'hyw',
  name: 'Armênio ocidental',
  nativeName: 'Արեւմտահայերէն',
  flag: '🇱🇧',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Armênio'],
    region:
      'Diáspora armênia — sem um país onde seja língua oficial. Maiores comunidades: Líbano (Beirute é, desde o início do século XX, um centro de imprensa e material escolar em armênio ocidental), Síria (Alepo, Damasco), França (Marselha) e Estados Unidos (região de Los Angeles e Fresno, na Califórnia). Antes de 1915 era falado sobretudo no Império Otomano (Anatólia) — não na Armênia atual, território do armênio oriental (`hy/`).',
    writing:
      'Alfabeto armênio (39 letras, criado por Mesrop Mashtots no século V) — mas com a ortografia clássica (mesrropiana), que a diáspora manteve; o armênio oriental da Armênia atual usa, desde a era soviética, uma reforma ortográfica que simplificou várias terminações (ver o tópico de gramática “hyw-g1”).',
  },
  speechLocale: 'hyw',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, pacote recém-criado), no armênio ocidental (o da diáspora — Líbano, Síria, França, Estados Unidos) — não no oriental, o da Armênia atual (ver `hy/`). A bandeira do Líbano foi escolhida porque é lá que fica um dos maiores centros históricos de imprensa e ensino em armênio ocidental, mas o idioma não tem um país onde seja oficial: é falado em várias comunidades da diáspora, sem um território único. Por enquanto: (1) sem treino do alfabeto; (2) sem leitura romanizada (campo `reading`) — o leitor do armênio oriental (`reading-armenian.ts`) não serve aqui, porque a pronúncia das consoantes é diferente (ver gramatica.ts); um leitor próprio do ocidental é tarefa futura; (3) algumas formas verbais compostas das frases de exemplo seguem o padrão regular de conjugação do ocidental por extensão de formas confirmadas (ex.: a 1ª pessoa do plural em “-ինք”, a partir do “-իմ” confirmado para verbos como “խօսիլ”), mesmo onde a forma exata não foi encontrada palavra por palavra numa fonte — todo o vocabulário, a troca de sonoridade e as palavras próprias do ocidental (pronomes, verbos) foram verificados um por um no Wikcionário e na Wikipédia em inglês antes de entrar no pacote. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_HYW,
  units: UNITS_HYW,
  etymology: ETYMOLOGY_HYW,
  community: COMMUNITY_HYW,
  scenarios: SCENARIOS_HYW,
  stories: STORIES_HYW,
  grammar: GRAMMAR_HYW,
  journalPrompts: JOURNAL_PROMPTS_HYW,
  shadowing: SHADOWING_HYW,
  specialChars: ['ա', 'բ', 'գ', 'դ', 'ե', 'զ', 'է', 'ը', 'թ', 'ժ', 'ի', 'լ', 'խ', 'ծ', 'կ', 'հ', 'ձ', 'ղ', 'ճ', 'մ', 'յ', 'ն', 'շ', 'ո', 'չ', 'պ', 'ջ', 'ռ', 'ս', 'վ', 'տ', 'ր', 'ց', 'ու', 'փ', 'ք', 'օ', 'ֆ', 'ւ', '՚'],
  // alfabeto armênio inteiro, em fileiras de teclado (ordem tradicional; sem a ligadura և, que a
  // grafia clássica do ocidental escreve como duas letras, եւ — ver hyw-g1)
  keyboardRows: [
    ['ա', 'բ', 'գ', 'դ', 'ե', 'զ', 'է', 'ը', 'թ', 'ժ', 'ի', 'լ', 'խ'],
    ['ծ', 'կ', 'հ', 'ձ', 'ղ', 'ճ', 'մ', 'յ', 'ն', 'շ', 'ո', 'չ', 'պ'],
    ['ջ', 'ռ', 'ս', 'վ', 'տ', 'ր', 'ց', 'ու', 'փ', 'ք', 'օ', 'ֆ', 'ւ'],
  ],
  // o armênio não marca gênero gramatical, nos dois padrões
  genders: [],
  greeting: 'Բարև',
  sampleSentence: 'Բարև, անունս Լինու է: Ես հայերէն կը խօսիմ:',
  phrases: { hi: 'Բարև:', thanks: 'Շնորհակալութիւն:', letsStart: ['Կը խօսինք:', 'Vamos começar!'] },
  formalMarkers: 'դուք (com o verbo no plural, para uma pessoa só), շնորհակալութիւն, ներեցէք',
  cognateNote:
    'O armênio forma, sozinho, um dos ramos da família indo-europeia — não é eslavo, nem românico, nem germânico, mas um parente distante de todos eles. O armênio ocidental é o mesmo ramo, só que descende do dialeto de Constantinopla/Istambul, e não do dialeto de Erevan (o do armênio oriental, em `hy/`): por isso “մայր” (mayr) lembra “mãe” e “անուն” (anoun) lembra “nome” nos dois padrões igual, mesmo vindo de um caminho sonoro bem diferente do português. O que muda bastante entre os dois armênios modernos não é o parentesco com o português — é a pronúncia de boa parte das consoantes (ver o tópico de gramática “A troca de sonoridade”) e algumas palavras do dia a dia.',
};
