import type { LanguageVariant } from '../types';
import { ROWS } from './vocabulario';
import { leituraPinyin } from '@/services/zh-pinyin';
import { DIALETOS_ZH } from './dialetos';

/**
 * Taxonomia do dono do app (04/10/2026): escrita diferente da mesma língua é «variante». O
 * mandarim padrão do app (`zh`, em `index.ts`) usa caracteres SIMPLIFICADOS — aqui vão as duas
 * variantes de escrita: a tradicional (ainda usada em Taiwan, Hong Kong, Macau) e a romanização em
 * pinyin (para quem ainda não lê nenhum dos dois conjuntos de caracteres).
 */

const lerPinyin = leituraPinyin(ROWS);

/**
 * Conversão simplificado → tradicional, caractere por caractere, para as palavras do vocabulário
 * A1 do app que realmente mudam de forma (conferida contra a tabela padrão de conversão
 * simplificado/tradicional — Unicode Unihan e dicionários bilíngues; as palavras que não aparecem
 * aqui são escritas do mesmo jeito nas duas normas). Caso notável: 只 cobre dois sentidos no
 * simplificado — «só» (só) e o classificador de animais (zhī) — que o tradicional distingue: 只
 * para «só», 隻 para o classificador (confirmado no Wiktionary, verbete 只).
 */
const TRADICIONAL: Record<string, string> = {
  再见: '再見',
  谢谢: '謝謝',
  不客气: '不客氣',
  请: '請',
  对不起: '對不起',
  你好吗: '你好嗎',
  认识你很高兴: '認識你很高興',
  对: '對',
  还是: '還是',
  什么: '什麼',
  哪儿: '哪兒',
  谁: '誰',
  怎么: '怎麼',
  几: '幾',
  吗: '嗎',
  这: '這',
  个: '個',
  只: '隻', // aqui é o classificador de animais (zhī), não o advérbio «só»
  学校: '學校',
  猫: '貓',
  我们: '我們',
  你们: '你們',
  他们: '他們',
  老师: '老師',
  学生: '學生',
  妈妈: '媽媽',
  儿子: '兒子',
  女儿: '女兒',
  说: '說',
  喜欢: '喜歡',
  学: '學',
  米饭: '米飯',
  面包: '麵包',
  红色: '紅色',
  蓝色: '藍色',
  绿色: '綠色',
};

// palavra inteira primeiro (como «只», que só muda de forma no sentido de classificador), senão
// caractere a caractere
function converterPalavra(palavra: string): string {
  if (TRADICIONAL[palavra]) return TRADICIONAL[palavra];
  return [...palavra].map((c) => TRADICIONAL[c] ?? c).join('');
}

const diffsTradicional: [string, string, string, string?][] = ROWS.filter(([palavra]) => converterPalavra(palavra) !== palavra).map(([palavra, traducao]) => [
  palavra,
  converterPalavra(palavra),
  traducao,
  undefined,
]);

const amostraPinyin: [string, string, string, string?][] = ROWS.slice(0, 24).map(([palavra, traducao]) => [palavra, lerPinyin(palavra) || palavra, traducao, undefined]);

// os dialetos (China, Taiwan, Singapura, Sichuan) vêm primeiro: o primeiro é o padrão do curso; as
// escritas (tradicional, pinyin) ficam numa fileira à parte no seletor (decisão do dono, 10/10/2026)
const [DIALETO_PADRAO, ...OUTROS_DIALETOS] = DIALETOS_ZH;

export const VARIANTS_ZH: LanguageVariant[] = [
  DIALETO_PADRAO,
  ...OUTROS_DIALETOS,
  {
    code: 'zh-Hant',
    country: 'TWN',
    kind: 'variante',
    name: 'Chinês em escrita tradicional',
    flag: '✍️',
    summary:
      'A escrita usada antes da reforma de simplificação de 1956 na China — hoje em Taiwan, Hong Kong e Macau. Mesma língua (mandarim padrão), mesma pronúncia e gramática do pacote: só os caracteres de algumas palavras mudam de forma.',
    vocab: diffsTradicional,
  },
  {
    code: 'zh-Latn',
    country: 'CHN',
    kind: 'variante',
    name: 'Chinês romanizado (pinyin)',
    flag: '🔤',
    summary:
      'As mesmas palavras escritas só em pinyin (letras latinas com os tons marcados), para quem ainda não lê os caracteres chineses. Amostra das primeiras palavras do vocabulário — o pinyin de qualquer palavra do app já aparece embaixo da frase, no campo de leitura.',
    vocab: amostraPinyin,
  },
];
