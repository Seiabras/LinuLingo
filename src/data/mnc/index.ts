import type { LanguagePack } from '../types';
import { VOCAB_MNC } from './vocabulario';
import { UNITS_MNC } from './curriculo';
import { GRAMMAR_MNC } from './gramatica';
import { STORIES_MNC } from './historias';
import { COMMUNITY_MNC, ETYMOLOGY_MNC, JOURNAL_PROMPTS_MNC, SCENARIOS_MNC, SHADOWING_MNC } from './extras';
import { toReadingManchu, typedManchu } from '@/services/reading-mongol-script';

/**
 * Manchu, na escrita manchu (vertical, de cima pra baixo, como a mongol). Fontes: ver vocabulario.ts.
 * Classificação da Wikipédia em inglês: tungúsico › tungúsico do sul › jurchênico › manchu-xibe.
 */
export const MANCHU: LanguagePack = {
  code: 'mnc',
  name: 'Manchu',
  // ᠮᠠᠨᠵᡠ ᡤᡳᠰᡠᠨ (manju gisun), “língua manchu”, como na Wikipédia e no Wikivoyage
  nativeName: 'ᠮᠠᠨᠵᡠ ᡤᡳᠰᡠᠨ',
  flag: '🇨🇳',
  lineage: {
    family: 'Tungúsico',
    branches: ['Tungúsico do sul', 'Jurchênico', 'Manchu-xibe'],
    region: 'Manchúria, no nordeste da China. Criticamente ameaçado (UNESCO): a Wikipédia em inglês dá cerca de 20 falantes nativos e milhares de pessoas que aprenderam a língua como segunda língua.',
    writing: 'Escrita manchu, adaptada da mongol em 1599 e reformada em 1632: vertical, de cima pra baixo, com as colunas andando da esquerda pra direita.',
  },
  direction: 'ttb',
  // nenhuma voz sintética fala manchu
  speechLocale: 'mnc',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, 64 palavras, 4 tópicos de gramática e 2 histórias), na escrita manchu, que se lê de cima pra baixo. As palavras vêm da lista Swadesh e dos verbetes do Wiktionary em inglês; as frases, do guia de conversação do Wikivoyage e dos exemplos da Wikipédia. Nenhuma voz sintética fala manchu, então o áudio pode ficar mudo; a romanização aparece embaixo de cada frase, e digitá-la também vale como resposta. No celular (fora do navegador), o texto aparece deitado, porque o aplicativo nativo ainda não sabe escrever na vertical. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_MNC,
  units: UNITS_MNC,
  etymology: ETYMOLOGY_MNC,
  community: COMMUNITY_MNC,
  scenarios: SCENARIOS_MNC,
  stories: STORIES_MNC,
  grammar: GRAMMAR_MNC,
  journalPrompts: JOURNAL_PROMPTS_MNC,
  shadowing: SHADOWING_MNC,
  // embaixo de cada frase, a romanização de Möllendorff (ᠮᠣᡵᡳᠨ · morin), que também vale digitada
  reading: toReadingManchu,
  typedReading: typedManchu,
  specialChars: [],
  // as letras manchu, na ordem da romanização (a forma de cada uma muda sozinha conforme a posição)
  keyboardRows: [
    ['ᠠ', 'ᡝ', 'ᡳ', 'ᠣ', 'ᡠ', 'ᡡ', 'ᠨ', 'ᠩ'],
    ['ᠪ', 'ᡦ', 'ᡴ', 'ᡤ', 'ᡥ', 'ᠮ', 'ᠯ', 'ᠰ', 'ᡧ'],
    ['ᡨ', 'ᡩ', 'ᠴ', 'ᠵ', 'ᠶ', 'ᡵ', 'ᡶ', 'ᠸ'],
  ],
  genders: [],
  greeting: 'ᠰᠠᡳᠶᡡᠨ?',
  sampleSentence: 'ᠰᡳ ᠰᠠᡳᠶᡡᠨ? ᠰᡳᠨᡳ ᡤᡝᠪᡠ ᠠᡳ ᠰᡝᠮᠪᡳ?',
  phrases: {
    hi: 'ᠰᠠᡳᠶᡡᠨ?',
    thanks: 'ᠪᠠᠨᡳᡥᠠ',
    letsStart: ['ᠰᠠᡳᠨ!', 'Bom! (usado aqui como “vamos lá”)'],
  },
  formalMarkers: 'Segundo a Wikipédia em inglês, os manchus instruídos evitavam os pronomes pessoais com quem era de posição mais alta e usavam ᠰᡳᠨᡳ ᠪᡝᠶᡝ (sini beye, lit. “sua pessoa”) como um “você” educado, no lugar do simples ᠰᡳ (si).',
  cognateNote: 'O manchu NÃO é parente do português: é uma língua tungúsica, da mesma família do evenki e do nanai, falados na Sibéria e no extremo leste da Rússia. Ele tomou muitas palavras emprestadas do mongol e do chinês — ᠴᠠᡳ (cai, chá) vem do chinês 茶, a mesma palavra que deu o “chá” do português. A antiga hipótese “altaica”, que juntaria tungúsico, mongólico e túrquico numa família só, é hoje vista como obsoleta pela maioria dos linguistas.',
};
