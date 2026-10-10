import type { LanguagePack } from '../types';
import { VOCAB_ARN } from './vocabulario';
import { UNITS_ARN } from './curriculo';
import { GRAMMAR_ARN } from './gramatica';
import { STORIES_ARN } from './historias';
import { COMMUNITY_ARN, ETYMOLOGY_ARN, JOURNAL_PROMPTS_ARN, SCENARIOS_ARN, SHADOWING_ARN } from './extras';
import { ACCENTS_ARN } from './sotaques';
import { VARIANTS_ARN } from './variantes';

export const MAPUDUNGUN: LanguagePack = {
  code: 'arn',
  name: 'Mapudungún',
  // "mapu" (terra) + "dungun" (fala): "fala da terra", a autodesignação mais usada pelo próprio povo
  // mapuche para a língua (en.wikipedia.org/wiki/Mapuche_language, pt.wikipedia.org/wiki/Língua_mapuche).
  nativeName: 'Mapudungún',
  // bandeira do Chile: a Araucanía (Chile) concentra a maior parte dos falantes, segundo as duas fontes
  // citadas acima; há também comunidades do outro lado da Cordilheira, na Argentina (ver `region`).
  flag: '🇨🇱',
  lineage: {
    // DECISÃO DE CLASSIFICAÇÃO (documentada aqui como o pacote tpj documenta a sua própria disputa):
    // a classificação genealógica do mapudungún é discutida entre linguistas, e conferimos tanto a
    // Wikipédia quanto o Glottolog antes de decidir. en.wikipedia.org/wiki/Mapuche_language resume bem
    // o quadro: "classified as a language isolate, or more conservatively, an unclassified language",
    // mas observa que o SIL International (a base do código Ethnologue) "classify Mapuche as one of
    // the two languages that form that Araucana family along with Huilliche" — e, mesmo registrando
    // essa classificação do SIL/Ethnologue, descreve a posição isolada como a mais conservadora e a
    // mais seguida pelos linguistas contemporâneos. A Wikipédia em
    // português (pt.wikipedia.org/wiki/Língua_mapuche) lista ainda outras hipóteses de parentesco mais
    // distantes e todas elas controversas (Greenberg 1987 e Key 1978, ligando-a às línguas andinas;
    // Stark 1970 e Hamp 1971, ao maia; Croese 1989/1991, ao aruaque) — nenhuma aceita como consenso.
    // Tentamos também consultar o Glottolog diretamente (glottolog.org/resource/languoid/id/mapu1245),
    // mas a árvore de classificação daquele site é renderizada por JavaScript e não pôde ser lida pela
    // ferramenta de busca usada para montar este pacote; por isso a decisão se apoia nas duas
    // Wikipédias, que por sua vez citam a literatura linguística primária. Diante de um quadro sem
    // consenso e com a maioria dos linguistas contemporâneos preferindo a posição mais conservadora,
    // seguimos aqui o mesmo precedente já usado neste app para o tikuna (pacote "tca", também uma
    // língua sem parentesco comprovado): `family: 'Língua isolada'`.
    family: 'Língua isolada',
    branches: ['Mapudungún'],
    region:
      'Araucanía, no centro-sul do Chile (onde se concentra a maioria dos falantes), também nas regiões de Los Lagos, Biobío e na Região Metropolitana de Santiago; na Argentina, em comunidades das províncias de Neuquén, Río Negro e Chubut, do outro lado da Cordilheira dos Andes',
    writing:
      'Alfabeto latino, no Alfabeto Unificado (o mais usado no ensino) — mas sem consenso: o Grafemário Raguileo e o Azümchefe são dois outros sistemas em uso, cada um com a sua própria lógica para as mesmas letras (veja a aba Gramática, tópico sobre os três alfabetos)',
  },
  // Nenhum serviço de síntese de voz consultado tem uma voz dedicada ao mapudungún: 'arn' é só o
  // código ISO 639-3 da língua, usado aqui como no restante do app (ver `incomplete`) — os áudios usam
  // a voz do aparelho, se houver, como nos outros pacotes indígenas deste app (tpj, tca, gn, gun, kgk,
  // nhd, kpc, tuo, yrl).
  speechLocale: 'arn',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, 65 palavras, 4 tópicos de gramática, 2 histórias), no mapudungún (também chamado mapuche), a língua do povo mapuche, falada na Araucanía (Chile) e em comunidades do outro lado da fronteira, na Argentina. Este pacote segue o Alfabeto Unificado, a ortografia mais usada no ensino — mas boa parte do Wiktionary em inglês, uma das fontes consultadas, usa o Grafemário Raguileo: cada palavra vinda de lá foi convertida letra por letra com a correspondência que a própria Wikipédia em português documenta (v→ü, c→ch, j→ll), conferida sempre que possível contra um segundo par já publicado na outra grafia. A classificação da língua dentro da árvore genealógica é discutida entre linguistas (isolada vs. uma pequena família “araucana” junto com o huilliche, hoje à beira da extinção). O mapudungún é uma língua com uma gramática rica e fortemente aglutinante, mas as fontes abertas e verificáveis para um curso de frases (em vez de um artigo acadêmico de fonologia ou sintaxe) são poucas — por isso as frases de exemplo deste pacote evitam qualquer conjugação ou ordem de palavras que não estivesse diretamente atestada numa fonte, preferindo um vocabulário levemente repetitivo a uma frase natural, porém inventada. As fontes consultadas também não confirmam uma palavra fixa para “obrigado”: o curso usa “Küme!” (bom, ótimo) como expressão de apreço. Da A2.1 até o C2 chega nas próximas atualizações, conforme mais fontes forem verificadas.',
  },
  vocab: VOCAB_ARN,
  units: UNITS_ARN,
  etymology: ETYMOLOGY_ARN,
  community: COMMUNITY_ARN,
  scenarios: SCENARIOS_ARN,
  stories: [...STORIES_ARN, ...VARIANTS_ARN.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_ARN,
  accents: ACCENTS_ARN,
  grammar: GRAMMAR_ARN,
  journalPrompts: JOURNAL_PROMPTS_ARN,
  shadowing: SHADOWING_ARN,
  // ü (vogal central fechada), ñ, ll (como "lh"), ng (nasal velar) e tr (retroflexa) não têm letra
  // própria no teclado em português — ver gramatica.ts, tópico sobre os três alfabetos.
  specialChars: ['ü', 'ñ', 'll', 'ng', 'tr'],
  // Nenhuma fonte consultada registra gênero gramatical no mapudungún: os substantivos se dividem por
  // ANIMACIDADE (ser animado vs. inanimado, visível sobretudo no plural — "pu" vs. "yuka", ver
  // gramatica.ts), não por gênero. Onde o sentido precisa distinguir macho/fêmea, a língua usa uma
  // palavra lexical separada ("wentru" homem, "domo" mulher), como o próprio par "wentru pichiche"/
  // "domo pichiche" (menino/menina) mostra — por isso `genders` fica vazio, como nos outros pacotes
  // indígenas deste app sem gênero gramatical (tpj, tca, gn, gun, kgk, nhd).
  genders: [],
  greeting: 'Mari mari!',
  // Nenhuma fonte consultada atesta uma construção verificável para "eu me chamo" ou "o meu nome é" em
  // mapudungún — por isso, como o pacote tca (tikuna) já faz, a frase de teste de voz não afirma um
  // nome, só combina palavras e frases já verificadas (ver vocabulario.ts).
  sampleSentence: '¡Mari mari! Kümelen, kafey. ¡Pewkallal!',
  phrases: {
    hi: 'Mari mari!',
    // nenhuma fonte consultada registra uma palavra fixa para "obrigado": "küme" (bom, ótimo),
    // confirmado em es.wiktionary.org/wiki/küme, é usado aqui como expressão de apreço, pela mesma
    // razão e do mesmo jeito que os pacotes tpj e kgk já fazem nas suas próprias lacunas.
    thanks: 'Küme!',
    letsStart: ['¡Amun!', 'Eu vou! (lit. “eu vou”; usado aqui como convite para começar agora)'],
  },
  formalMarkers:
    'As fontes consultadas não confirmam uma forma de tratamento “formal” separada de “eymi” (você) — o mesmo traço já registrado nos outros pacotes indígenas deste app (tpj, tca).',
  cognateNote:
    'O mapudungún é tratado aqui como língua isolada: não tem cognatos com o português, nem com nenhuma outra língua viva comprovadamente. A relação mais interessante vai no sentido contrário: o espanhol do Chile e da Argentina emprestou várias palavras do mapudungún, como “pewen” (araucária), que virou “pehuén” em espanhol — ver a aba de etimologia. Dentro da própria língua, a raiz “che” (pessoa, gente) é bastante produtiva: aparece no nome do próprio povo, “mapuche” (mapu + che, “gente da terra”), e em palavras como “pichiche” (criança, “pequeno” + “pessoa”).',
};
