import type { LanguagePack } from '../types';
import { VOCAB_FIOR1236 } from './vocabulario';
import { UNITS_FIOR1236 } from './curriculo';
import { GRAMMAR_FIOR1236 } from './gramatica';
import { STORIES_FIOR1236 } from './historias';
import { COMMUNITY_FIOR1236, ETYMOLOGY_FIOR1236, JOURNAL_PROMPTS_FIOR1236, SCENARIOS_FIOR1236, SHADOWING_FIOR1236 } from './extras';

/**
 * Toscano antigo/florentino — glottocode "Old Italian" (fior1236 no Glottolog,
 * glottolog.org/resource/languoid/id/fior1236, classificado como "Dialect" do italiano-padrão
 * ital1282). Sem código ISO 639-3 próprio (confirmado em iso639-3.sil.org: cai dentro do próprio
 * "ita", código do pacote "it" deste app) — mesmo status de glottocode que o guarani antigo
 * (`oldp1258`) e o latim medieval (`medi1250`), já pacotes próprios aqui. Seguindo esse precedente
 * (decisão do dono do app, 09/10/2026), este é um LanguagePack PRÓPRIO e completo, não uma variação
 * dentro de "it". Nota: o Glottolog dá fior1236 à "Old Italian" como categoria ampla (não só ao
 * florentino): o dialeto florentino MODERNO tem o seu próprio código, fior1235, diferente deste.
 */
export const TOSCANO_ANTIGO: LanguagePack = {
  code: 'fior1236',
  name: 'Toscano Antigo',
  nativeName: 'Fiorentino antico',
  // sem bandeira de estado próprio (não é país da ISO 3166-1): o emblema heráldico da própria
  // Fiorenza medieval, o lírio/flor-de-lis vermelho sobre fundo branco (depois invertido pelos
  // guelfos negros), em vez da bandeira moderna da Itália. O país histórico, em aventura.ts, é a
  // Itália — Fiorenza está e sempre esteve lá (ver PAIS_HISTORICO).
  flag: '⚜️',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Itálico', 'Românico', 'Ítalo-dálmata'],
    region:
      'Fiorenza (Florença), na Toscana, entre o fim do século XIII e o começo do XIV — a língua de Dante Alighieri (1265-1321), Petrarca e Boccaccio, que mais tarde (Renascimento, com Pietro Bembo) se tornou o modelo do próprio italiano padrão. Cenário deste pacote: as ruas de Fiorenza antes do exílio de Dante, em 1302, e o soneto "Tanto gentile" da Vita Nuova, sobre Beatriz Portinari (m. 1290).',
    writing: 'Alfabeto latino (o mesmo do pacote "it").',
  },
  // BCP-47 na melhor tentativa: a maioria dos aparelhos não tem voz nativa pra toscano antigo —
  // mesma aproximação do pacote "it".
  speechLocale: 'it-IT',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, 24 palavras, 4 tópicos de gramática, 2 histórias). A morfologia básica (concordância de gênero/número, conjugação regular) segue igual ao italiano moderno — as diferenças reais estão na síncope poética/apócope ("core" → "cor", "amore" → "amor"), em palavras com sentido arcaico ("donna" = dona/senhora) e em advérbios/conjunções/pronomes que caíram em desuso ("quivi", "unque", "ca", "altrui" sem preposição). Da A2.1 até o C1 chega nas próximas atualizações.',
  },
  vocab: VOCAB_FIOR1236,
  units: UNITS_FIOR1236,
  etymology: ETYMOLOGY_FIOR1236,
  community: COMMUNITY_FIOR1236,
  scenarios: SCENARIOS_FIOR1236,
  stories: STORIES_FIOR1236,
  grammar: GRAMMAR_FIOR1236,
  journalPrompts: JOURNAL_PROMPTS_FIOR1236,
  shadowing: SHADOWING_FIOR1236,
  specialChars: [],
  greeting: 'Deh',
  sampleSentence: 'Deh! Io son Linu. Toscano antico imparemo!',
  phrases: { hi: 'Deh!', thanks: 'Deo gratias!', letsStart: ['Andiam!', 'Vamos começar! (lit. “andemos”)'] },
  formalMarkers:
    'como no italiano moderno, o florentino antigo distingue "tu" (informal) de "voi" (formal/plural) — mas este pacote, seguindo o padrão deste app pra cenas de rua, usa o registro informal "tu" em toda parte (o Linu, forasteiro recém-chegado, trata o poeta por "tu"), sem afirmar que não existisse cortesia formal na Fiorenza de Dante.',
  cognateNote:
    'O toscano antigo não é filho do italiano moderno — é a MESMA língua, na fase em que Dante, Petrarca e Boccaccio a usaram pra escrever (pacote "it" deste app, já completo, que é literalmente o descendente direto dela: o Renascimento tomou o florentino de Dante como modelo do italiano padrão). O que muda é sobretudo a síncope poética ("cor"/"amor"/"onor" no lugar de "core"/"amore"/"onore"), algumas palavras com sentido mais amplo ("donna" = dona/senhora) e um punhado de advérbios/conjunções/pronomes que caíram em desuso — não a gramática básica (ver etimologias).',
};
