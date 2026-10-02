import type { LanguagePack } from '../types';
import { VOCAB_RYU } from './vocabulario';
import { UNITS_RYU } from './curriculo';
import { GRAMMAR_RYU } from './gramatica';
import { STORIES_RYU } from './historias';
import { COMMUNITY_RYU, ETYMOLOGY_RYU, JOURNAL_PROMPTS_RYU, SCENARIOS_RYU, SHADOWING_RYU } from './extras';

export const OKINAWANO: LanguagePack = {
  code: 'ryu',
  name: 'Okinawano',
  // “うちなーぐち” (uchinaaguchi) é a forma em hiragana, de uso corrente, do nome que os falantes dão
  // à própria língua; a Wikipédia em inglês (en.wikipedia.org/wiki/Ryukyuan_languages) cita a forma em
  // kanji equivalente, 沖縄口, com a mesma leitura “Uchināguchi”. Este pacote usa só hiragana (ver
  // vocabulario.ts), por isso a forma em hiragana foi escolhida aqui também.
  nativeName: 'うちなーぐち',
  // nenhuma bandeira própria de Okinawa tem uso oficial ou comum fora do Japão: existe uma “bandeira
  // da província de Okinawa” (como cada uma das 47 províncias japonesas tem a sua), mas é um símbolo
  // administrativo de província, não um símbolo do povo ou da língua okinawana — diferente do que a
  // bandeira da Escócia ou do País de Gales representam para o escocês e o galês. Por isso, como os
  // pacotes sco (escocês) e gd (gaélico escocês) deste app usam a bandeira do Reino Unido, este pacote
  // usa a bandeira do Japão.
  flag: '🇯🇵',
  lineage: {
    // mesma grafia exata usada no pacote “ja” (japonês), já neste app: ver src/data/ja/index.ts.
    family: 'Japônico',
    // O japônico se divide em DOIS ramos irmãos: o ramo japonês (onde fica só o japonês, pacote “ja”)
    // e o ramo ryukyuano, por sua vez dividido em ryukyuano do norte (amami, kunigami, okinawano) e
    // ryukyuano do sul (miyako, yaeyama, yonaguni) — en.wikipedia.org/wiki/Ryukyuan_languages. O
    // okinawano fica no ramo ryukyuano do norte: um ramo PRÓPRIO e SEPARADO do ramo japonês dentro do
    // japônico, não um dialeto dentro do ramo japonês. As duas línguas não são mutuamente inteligíveis
    // e compartilham cerca de 71% do vocabulário básico (mesma fonte) — grau de parentesco comparável,
    // dentro do japônico, ao do espanhol com o português dentro do românico: parentes próximos, mas
    // línguas diferentes, não dialetos uma da outra.
    branches: ['Ryukyuano', 'Ryukyuano do norte'],
    region:
      'Metade sul da ilha de Okinawa, mais as ilhas Kerama e Kumejima, no arquipélago Ryukyu, Japão — território do antigo Reino de Ryukyu, unificado em 1429 e anexado pelo Japão em 1879, quando virou a província de Okinawa (en.wikipedia.org/wiki/Okinawan_language; en.wikipedia.org/wiki/Okinawa_Prefecture).',
    writing:
      'Hiragana, katakana e kanji, como o japonês, mas sem ortografia padronizada oficial; inclui kana que o japonês moderno não usa mais (ゐ, ゑ) e uma convenção própria, o ゎ pequeno em くゎ/ぐゎ, para dois sons (/kwa/, /gwa/) que o japonês não tem — ver gramatica.ts.',
  },
  // Nenhum serviço de síntese de voz consultado tem uma voz específica para o okinawano (língua
  // ryukyuana, diferente do japonês padrão “ja-JP”, que é a única variante japônica com voz nos
  // serviços comuns). Os áudios usam a voz do aparelho, se houver, como nos outros pacotes de língua
  // pequena/ameaçada deste app (tsd, tpj, nhd, gun, kgk, kpc, tuo, yrl); “ryu” é o próprio código
  // ISO 639-3 da língua (iso639-3.sil.org/code/ryu, “Central Okinawan”), usado aqui como identificador
  // best-effort, não como um locale de voz confirmado.
  speechLocale: 'ryu',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, 72 palavras, 4 tópicos de gramática, 2 histórias), no okinawano (uchinaaguchi). É uma língua ryukyuana do ramo norte da família japônica — IRMÃ do japonês (pacote “ja”, já neste app), não um dialeto dele: as duas línguas vêm de um ancestral japônico comum mas não são mutuamente inteligíveis, e compartilham só cerca de 71% do vocabulário básico (en.wikipedia.org/wiki/Ryukyuan_languages). A UNESCO classifica o okinawano como língua ameaçada, e a maioria de quem ainda fala fluentemente tem mais de 50 anos (mesma fonte; en.wikipedia.org/wiki/Okinawan_language). Apesar de ter uma base de falantes bem maior do que outras línguas pequenas deste app (tsd, tpj), as fontes digitais específicas e confiáveis continuam limitadas: o vocabulário vem quase todo do Apêndice de lista Swadesh do Wiktionary em inglês (en.wiktionary.org/wiki/Appendix:Okinawan_Swadesh_list) e de um punhado de páginas individuais do Wiktionary conferidas uma a uma (はいさい, 猫, 家, 肝, 泡盛, ごーやー), mais a tabela de numerais de omniglot.com/language/numbers/okinawan.htm. Por causa disso, este pacote fez três recortes honestos, em vez de inventar o que falta: (1) não há uma palavra de “sim”/“não” confirmada numa fonte (nenhuma das consultadas registra uma); (2) os números nativos vão só até dez — acima disso, pelas fontes, o próprio okinawano usa os números do japonês; (3) as frases de exemplo evitam a partícula de tópico や (ya), porque uma frase citada na própria Wikipédia mostra essa partícula se fundindo com a palavra anterior (“unju” + ya → “unjō”) em vez de aparecer solta, e a regra exata dessa fusão não pôde ser confirmada com segurança — por isso as frases usam só justaposição direta (pronome/demonstrativo + predicado + やん yan) ou verbos/adjetivos em -un/-san, que já fecham a frase sozinhos. Este pacote também não implementa romanização automática (como a dos pacotes ja/ko): o vocabulário é escrito só em hiragana (nunca kanji), mas as romanizações citadas pelas fontes nem sempre seguem uma regra simples e sistemática de conversão kana→romaji (ex.: てぃ aparece como “tī” em “tīda” mas como “ti” em outras romanizações da mesma fonte) — implementar isso direito pediria conferir palavra por palavra, como um dicionário, não uma regra fonética geral; fica para outra sessão, com mais fontes. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_RYU,
  units: UNITS_RYU,
  etymology: ETYMOLOGY_RYU,
  community: COMMUNITY_RYU,
  scenarios: SCENARIOS_RYU,
  stories: STORIES_RYU,
  grammar: GRAMMAR_RYU,
  journalPrompts: JOURNAL_PROMPTS_RYU,
  shadowing: SHADOWING_RYU,
  // ー alonga a vogal anterior; ゐ/ゑ são kana antigos (wi/we) que o okinawano ainda usa; ゃゅょ são os
  // pequenos de sempre do silabário — ver gramatica.ts.
  specialChars: ['ー', 'ゐ', 'ゑ', 'ゎ', 'っ', 'ゃ', 'ゅ', 'ょ'],
  // mesmo silabário hiragana de base do japonês (fato objetivo sobre a escrita, não vocabulário
  // aproveitado do pacote “ja”), mais ゐ/ゑ (wi/we), kana arcaicos que o japonês moderno não usa mas o
  // okinawano ainda emprega (ver gramatica.ts).
  keyboardRows: [
    ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 'さ', 'し', 'す', 'せ', 'そ'],
    ['た', 'ち', 'つ', 'て', 'と', 'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ'],
    ['ま', 'み', 'む', 'め', 'も', 'や', 'ゆ', 'よ', 'ら', 'り', 'る', 'れ', 'ろ', 'わ', 'ゐ', 'ゑ', 'を', 'ん'],
    ['が', 'ぎ', 'ぐ', 'げ', 'ご', 'ざ', 'じ', 'ず', 'ぜ', 'ぞ', 'だ', 'ぢ', 'づ', 'で', 'ど'],
    ['ば', 'び', 'ぶ', 'べ', 'ぼ', 'ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ', 'ゃ', 'ゅ', 'ょ', 'ゎ', 'っ', 'ー'],
  ],
  // como o japonês (mesma família japônica, pacote “ja”): nenhuma das fontes consultadas (Wikipédia,
  // Wiktionary) menciona classes de gênero gramatical para substantivos, nem concordância de gênero,
  // no okinawano — consistente com o padrão tipológico comum a toda a família japônica.
  genders: [],
  // saudação real e atestada (ver vocabulario.ts); a forma masculina informal, dita por quem apresenta
  // o Linu aqui — as variantes “haitai” (feminina) e “hai” (neutra) aparecem no vocabulário.
  greeting: 'Haisai!',
  sampleSentence: 'Haisai! Wan Linu yan.',
  phrases: {
    hi: 'Haisai!',
    thanks: 'Nifēdēbiru!',
    // nenhuma fonte registra um “vamos!” imperativo em okinawano: “mensōre” (bem-vindo) é reaproveitado
    // aqui como convite para começar, do mesmo jeito que os pacotes tpj e tsd reaproveitam uma forma
    // real da língua (e não uma invenção) para preencher essa mesma lacuna.
    letsStart: ['Mensōre!', 'Bem-vindo(a)! (usado aqui como convite para começar, já que nenhuma fonte registra um “vamos!” imperativo em okinawano)'],
  },
  formalMarkers:
    'うんじゅ (unju, “você”, forma educada) no lugar do pronome informal; a saudação muda com o gênero de QUEM FALA, não de quem ouve: “haisai” (homens), “haitai” (mulheres), “hai” (neutro) — ver vocabulário.',
  cognateNote:
    'O okinawano não é parente do português: é uma língua japônica, da mesma família do japonês (pacote “ja”, já neste app) — mas de um ramo SEPARADO dentro dessa família, o ramo ryukyuano, não um dialeto do ramo japonês. As duas línguas vêm de um ancestral japônico comum, mas não são mutuamente inteligíveis entre si, e compartilham só cerca de 71% do vocabulário básico. Isso aparece nas próprias palavras: onde o japonês tem e, o okinawano costuma ter i (japonês te, mão → okinawano tī); onde o japonês tem o, o okinawano costuma ter u (japonês kimo, fígado → okinawano chimu; japonês tō, dez → okinawano tū). Mas nem toda palavra divergiu: “umi” (mar) é idêntica nas duas línguas, herdada sem mudança do mesmo ancestral. Outro exemplo curioso aparece na cultura: “awamori”, a bebida destilada típica de Okinawa, usa os mesmos kanji no japonês e no okinawano (泡盛), mas com leituras completamente diferentes (japonês awamori; okinawano āmui) — um lembrete de que a escrita parecida esconde uma pronúncia e uma história bem distintas. Cada palavra mostra o ancestral comum e o parente no japonês na aba de etimologia.',
};
