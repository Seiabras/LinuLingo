import type { LanguagePack } from '../types';
import { VOCAB_CLAS1259 } from './vocabulario';
import { UNITS_CLAS1259 } from './curriculo';
import { GRAMMAR_CLAS1259 } from './gramatica';
import { STORIES_CLAS1259 } from './historias';
import { COMMUNITY_CLAS1259, ETYMOLOGY_CLAS1259, JOURNAL_PROMPTS_CLAS1259, SCENARIOS_CLAS1259, SHADOWING_CLAS1259 } from './extras';

/**
 * Árabe clássico/corânico — glottocode "Classical Arabic" (`clas1259` no Glottolog,
 * glottolog.org/resource/languoid/id/clas1259), classificado como "Dialect" do árabe-padrão
 * `stan1318`. Sem código ISO 639-3 próprio (confirmado em iso639-3.sil.org: cai dentro do próprio
 * "ara", código-base do pacote `ar` deste app) — mesmo status de glottocode que o guarani antigo
 * (`oldp1258`) e o latim medieval (`medi1250`), já pacotes próprios aqui. Seguindo esse precedente
 * (decisão do dono do app, 09/10/2026), este é um `LanguagePack` PRÓPRIO e completo, não uma
 * variação dentro de "ar".
 *
 * ÚLTIMA peça da fila de variações medievais/históricas (nona de nove candidatos da pesquisa de
 * 08/10/2026) — adiada por duas rodadas anteriores por um motivo de FONTE, não de arquitetura:
 * diferente do nórdico antigo/francês antigo/eslavo eclesiástico antigo/alto-alemão médio/castelhano
 * medieval (com seção própria no Wikcionário), o Wikcionário NÃO separa "Classical Arabic" de
 * "Arabic" — a própria Wikipédia em inglês ("Classical Arabic") confirma que essa distinção é
 * sobretudo acadêmica ocidental, pouco vivida pelos falantes árabes de hoje. A solução desta rodada:
 * cada palavra e frase vem de um VERSÍCULO REAL do Alcorão, citado "sura:versículo", com a escrita
 * árabe conferida na API pública do texto uthmani oficial (api.alquran.cloud) e cruzada com artigos
 * de suras da Wikipédia em inglês (que trazem árabe + transliteração + tradução lado a lado) e, para
 * duas palavras, com a análise morfológica do Corpus Árabe Alcorânico (corpus.quran.com, GPL) — ver
 * o cabeçalho completo em vocabulario.ts.
 */
export const ARABE_CLASSICO: LanguagePack = {
  code: 'clas1259',
  name: 'Árabe Clássico',
  nativeName: 'العربية الفصحى (القرآنية)',
  // 📖 (livro aberto) em vez de uma bandeira: o árabe clássico não é a língua do dia a dia de um
  // estado, e usar a bandeira da Arábia Saudita (já usada pelo pacote "ar") criaria confusão. O país
  // histórico, em aventura.ts, é a própria Arábia Saudita — onde o Alcorão se originou (Meca e
  // Medina, início do século VII) — mas o símbolo aqui é o livro, não a bandeira.
  flag: '📖',
  lineage: {
    family: 'Afro-asiático',
    branches: ['Semítico', 'Semítico ocidental', 'Semítico central'],
    region:
      'Península Arábica (Hejaz), início do século VII — cenário deste pacote: a compilação escrita do Alcorão por Zayd ibn Thabit em Medina, sob os califas Abu Bakr (c. 632-634) e Uthman (c. 650-656), e a tradição oral de memorização (hifz) que veio antes dela.',
    writing: 'Alfabeto árabe (abjad, da direita para a esquerda) — o MESMO alfabeto do pacote "ar", sem letras ou formas novas.',
  },
  // Nenhum aparelho tem voz específica pra árabe clássico/corânico: mesma aproximação de melhor
  // esforço que o pacote "ar" já usa.
  speechLocale: 'ar-SA',
  available: true,
  direction: 'rtl',
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, 29 palavras, 4 tópicos de gramática, 2 histórias) — e, diferente dos outros oito pacotes históricos desta fila, pode FICAR só nisso: o Wikcionário não separa "Classical Arabic" do árabe padrão moderno (pacote "ar") como fez com os outros idiomas históricos, então não há uma seção própria de declinação/conjugação "clássica" para continuar expandindo direto da mesma forma. Cada palavra/frase daqui vem de um versículo real do Alcorão (citado "sura:versículo"); para ir além do A1 seria preciso mapear mais versículos e cruzar a escrita árabe de cada um com a análise morfológica do Corpus Árabe Alcorânico (corpus.quran.com) palavra por palavra, um levantamento bem maior — ver PENDENTES.md.',
  },
  vocab: VOCAB_CLAS1259,
  units: UNITS_CLAS1259,
  etymology: ETYMOLOGY_CLAS1259,
  community: COMMUNITY_CLAS1259,
  scenarios: SCENARIOS_CLAS1259,
  stories: STORIES_CLAS1259,
  grammar: GRAMMAR_CLAS1259,
  journalPrompts: JOURNAL_PROMPTS_CLAS1259,
  shadowing: SHADOWING_CLAS1259,
  // Sem romanização (campo `reading`/`letterReading`) nem `alphabet` próprio: mesma lacuna honesta
  // que o pacote "ar" já documenta (a tabela de leitura dele, em ar/leitura.ts, foi montada palavra
  // por palavra pro vocabulário DELE — não cobre as formas corânicas específicas deste pacote, e
  // montar uma tabela nova só pra 29 palavras não compensaria o esforço agora).
  specialChars: ['أ', 'إ', 'آ', 'ؤ', 'ئ', 'ء', 'ة', 'ى'],
  // Mesmo teclado árabe padrão (102 teclas) do pacote "ar": é a disposição física real de digitação,
  // não muda entre registros do árabe.
  keyboardRows: [
    ['ض', 'ص', 'ث', 'ق', 'ف', 'غ', 'ع', 'ه', 'خ', 'ح', 'ج', 'د'],
    ['ش', 'س', 'ي', 'ب', 'ل', 'ا', 'ت', 'ن', 'م', 'ك', 'ط'],
    ['ئ', 'ء', 'ؤ', 'ر', 'لا', 'ى', 'ة', 'و', 'ز', 'ظ'],
  ],
  // masculino e feminino, sem neutro — mesmo sistema do árabe padrão
  genders: ['m', 'f'],
  greeting: 'سلام',
  sampleSentence: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
  phrases: {
    hi: 'سلام!',
    // "الحمد لله" (louvado seja Deus): metade do versículo 1:2 ("الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ"),
    // usada sozinha há séculos como expressão fixa de gratidão ("graças a Deus") — mesmo recorte que
    // o latim medieval fez com "Deo gratias!" (também metade de uma fórmula litúrgica maior).
    thanks: 'الحمد لله!',
    letsStart: [
      'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ!',
      'Vamos começar! (lit. "guia-nos ao caminho reto", o pedido central da Fátiha, recitado em toda oração muçulmana — aqui como convite pra abrir esta aula, do mesmo jeito que o latim medieval usa "Oremus!", "oremos")',
    ],
  },
  formalMarkers:
    'como no árabe padrão (pacote "ar"), o árabe clássico não tem uma forma "formal" separada de "tu" dentro da fala comum — o que muda com quem se fala é o GÊNERO de quem ouve ("أنتَ" masculino, "أنتِ" feminino), não um grau extra de formalidade. Este pacote, por ser feito só de versículos citados, nem chega a usar pronomes de 2ª pessoa livremente — por isso a distinção de registro não se aplica aqui do mesmo jeito que nos outros idiomas deste app.',
  cognateNote:
    'O árabe clássico NÃO é filho do árabe padrão de hoje — é a MESMA língua, numa fase mais antiga (a Wikipédia em inglês, "Classical Arabic", confirma que a distinção é sobretudo acadêmica, pouco vivida pelos falantes árabes). A morfologia básica é idêntica à do pacote "ar", já completo — o que muda é o REGISTRO (mais retórico/religioso) e um vocabulário mais concentrado em epítetos e construções do Alcorão (ver gramática). Como o árabe é afro-asiático, de família bem diferente do português (indo-europeu), não há parentesco direto com o português — mas, como o próprio pacote "ar" já mostra, foi o português que tomou emprestado do árabe várias palavras do dia a dia ("açúcar", "arroz", "café"); nenhuma delas vem do vocabulário religioso específico deste pacote.',
};
