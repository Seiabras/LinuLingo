import type { LanguagePack } from '../types';
import { VOCAB_YI } from './vocabulario';
import { UNITS_YI } from './curriculo';
import { GRAMMAR_YI } from './gramatica';
import { STORIES_YI } from './historias';
import { COMMUNITY_YI, ETYMOLOGY_YI, JOURNAL_PROMPTS_YI, SCENARIOS_YI, SHADOWING_YI } from './extras';

/**
 * Iídiche (yi) — língua germânica ocidental (da mesma família do alemão: descende de um substrato
 * do alto-alemão médio), mas escrita com o alfabeto hebraico. Apesar da escrita, a gramática é
 * germânica de ponta a ponta: três gêneros (como o alemão), artigos “der/di/dos”, ordem V2 — NÃO é
 * uma língua semítica como o hebraico, mesmo usando o alfabeto dele. Por cima dessa base germânica,
 * o vocabulário tem uma camada do hebraico e do aramaico (o “loshn-koydesh”, usado para religião,
 * família e cultura) e uma camada eslava, incorporada quando as comunidades se mudaram para o Leste
 * Europeu — ver o tópico de gramática “As três camadas do vocabulário”.
 *
 * BANDEIRA: o iídiche não tem país próprio. Considerei três opções: (1) um emoji neutro, como o 📜
 * do judeu-espanhol (`lad/index.ts`); (2) a bandeira de Israel; (3) a dos Estados Unidos. Descartei
 * Israel de propósito: o idioma oficial de Israel é o hebraico — uma revivificação que, historicamente,
 * disputou espaço com o próprio iídiche no movimento sionista —, e usar a bandeira israelense aqui
 * reforçaria exatamente a confusão que este pacote tenta desfazer (iídiche não é hebraico). Segundo
 * uma estimativa da Universidade Rutgers (2021), os EUA e Israel têm hoje populações de falantes
 * parecidas (≈250 mil cada), mas é nos Estados Unidos — nas comunidades hassídicas de Nova York
 * (Brooklyn, Kiryas Joel, Monroe) e de Lakewood (Nova Jérsei) — que o iídiche é falado em casa, de
 * pais para filhos, como língua do dia a dia, com o número de falantes jovens crescendo (segundo o
 * YIVO, entre 500 mil e 1 milhão de haredim falam iídiche em 2014). Por isso a bandeira escolhida foi
 * a dos Estados Unidos (🇺🇸), não por ser um “país do iídiche” (não existe tal coisa), mas por ser
 * onde a língua está mais viva como língua do dia a dia hoje. Um detalhe curioso à parte: a única
 * região do mundo onde o iídiche tem status oficial por lei é o Oblast Autônomo Judaico de
 * Birobidjã, no extremo oriente da Rússia (criado em 1934) — mas quase ninguém fala a língua lá hoje,
 * o que tornaria a bandeira russa uma escolha enganosa.
 *
 * Fontes gerais: Wikipédia em inglês, “Yiddish” (família, falantes, status, escrita, mame-loshn ×
 * loshn-koydesh), “Yiddish grammar” (gêneros, artigos, conjugação de זײַן/האָבן, ordem V2, artigo
 * indefinido) e “Yiddish orthography” (as letras de vogal do YIVO); Wikcionário em inglês
 * (en.wiktionary.org), uma entrada por palavra — ver os comentários de vocabulario.ts, gramatica.ts
 * e extras.ts para as citações específicas de cada palavra e etimologia.
 */
export const IIDICHE: LanguagePack = {
  code: 'yi',
  name: 'Iídiche',
  nativeName: 'ייִדיש',
  flag: '🇺🇸',
  direction: 'rtl',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Germânico', 'Germânico ocidental', 'Alto-alemão'],
    region:
      'Diáspora asquenazita — sem país próprio. Historicamente, comunidades judaicas da Europa Central e Oriental; hoje, sobretudo comunidades haredi (ultraortodoxas) e hassídicas nos Estados Unidos (Nova York, Nova Jérsei), em Israel, na Antuérpia e em Londres.',
    writing: 'Alfabeto hebraico, na ortografia fonética do YIVO (escreve as vogais com letras próprias — ao contrário do hebraico, que normalmente só escreve consoantes)',
  },
  // sem voz nativa confirmada no aparelho: código aproximado, não verificado contra uma lista oficial de vozes.
  speechLocale: 'yi',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, cerca de 70 palavras, 4 tópicos de gramática, 2 histórias), na ortografia padrão do YIVO. Por enquanto: (1) sem romanização — a transliteração YIVO de cada palavra vem escrita entre parênteses na tradução (igual ao pinyin no mandarim), mas ainda não existe uma função automática de leitura; o sistema YIVO já existe e dá pra usar numa versão futura, só que construir esse leitor é tarefa separada; (2) sem treino do alfabeto hebraico. Todo o vocabulário, o gênero, a conjugação dos verbos e a etimologia de cada palavra foram verificados um por um no Wikcionário e na Wikipédia antes de entrar no pacote. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_YI,
  units: UNITS_YI,
  etymology: ETYMOLOGY_YI,
  community: COMMUNITY_YI,
  scenarios: SCENARIOS_YI,
  stories: STORIES_YI,
  grammar: GRAMMAR_YI,
  journalPrompts: JOURNAL_PROMPTS_YI,
  shadowing: SHADOWING_YI,
  // letras do YIVO que marcam vogais e não existem (ou não têm esse uso) no hebraico comum
  specialChars: ['אַ', 'אָ', 'בֿ', 'וּ', 'יִ', 'ײַ', 'כּ', 'פּ', 'פֿ', 'שׂ', 'תּ'],
  // alfabeto hebraico do YIVO inteiro (consoantes-base + as letras de vogal), na ordem tradicional —
  // que já é a ordem “da direita pra esquerda” do próprio alfabeto, por isso não foi invertida aqui.
  keyboardRows: [
    ['א', 'אַ', 'אָ', 'ב', 'בֿ', 'ג', 'ד', 'ה', 'ו', 'וּ', 'וו', 'וי'],
    ['ז', 'ח', 'ט', 'י', 'יִ', 'יי', 'ײַ', 'כּ', 'כ', 'ל', 'מ', 'נ'],
    ['ס', 'ע', 'פּ', 'פֿ', 'צ', 'ק', 'ר', 'ש', 'שׂ', 'תּ', 'ת'],
  ],
  // masculino (דער), feminino (די) e neutro (דאָס), como no alemão
  genders: ['m', 'f', 'n'],
  greeting: 'שלום עליכם',
  sampleSentence: 'שלום עליכם! איך הייס לינו.',
  // “גוט־מאָרגן!” (bom dia) como abertura animada: não encontrei, nas fontes consultadas, uma
  // expressão fixa equivalente a “vamos lá!” para confirmar com segurança.
  phrases: { hi: 'שלום עליכם!', thanks: 'אַ דאַנק!', letsStart: ['גוט־מאָרגן!', 'Vamos começar!'] },
  formalMarkers: 'איר (com o verbo no plural, no lugar do “דו” informal)',
  cognateNote:
    'O parente vivo mais próximo do iídiche é o alemão: as duas línguas vêm do alto-alemão médio, e um falante de alemão e um falante de iídiche conseguem, em boa parte, se entender um pouco — “הויז” (hoyz) e “Haus”, “גרויס” (groys) e “groß” são praticamente a mesma palavra. Mas o iídiche tem camadas que o alemão não tem: palavras do hebraico e do aramaico para religião, família e cultura (“משפּחה”, família) e palavras do eslavo, incorporadas no Leste Europeu (“קאַווע”, café, veio do polonês). Cada palavra do vocabulário mostra a sua origem.',
};
