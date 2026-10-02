import type { LanguagePack } from '../types';
import { VOCAB_LKT } from './vocabulario';
import { UNITS_LKT } from './curriculo';
import { GRAMMAR_LKT } from './gramatica';
import { STORIES_LKT } from './historias';
import { COMMUNITY_LKT, ETYMOLOGY_LKT, JOURNAL_PROMPTS_LKT, SCENARIOS_LKT, SHADOWING_LKT } from './extras';

export const LAKOTA: LanguagePack = {
  code: 'lkt',
  name: 'Lakota',
  // Lakȟótiyapi: "fala-se lakota" (en.wiktionary.org/wiki/Lakȟótiyapi) — a autodesignação da língua.
  nativeName: 'Lakȟótiyapi',
  // bandeira dos EUA: hoje falada quase só nos Estados Unidos (ver `region`); não há bandeira
  // própria de nenhuma nação lakota neste app, como também acontece nos outros pacotes indígenas
  // norte-americanos (nv, nah).
  flag: '🇺🇸',
  lineage: {
    // DECISÃO DE CLASSIFICAÇÃO (documentada aqui como os pacotes arn e tpj documentam as suas):
    // a família a que o lakota pertence NÃO estava, até este pacote, entre as famílias já usadas
    // neste app (conferido em src/data/conteudo.test.ts, no teste "seletor agrupa por família e
    // ramo" — a lista fechada ali não tinha nada de siouano). A Wikipédia em português usa, no
    // próprio título do verbete, "Línguas siuanas" para a família (pt.wikipedia.org/wiki/
    // Línguas_siuanas), com a frase de abertura "Siuano ou siuano–cataubano, ou ainda sioux, é uma
    // família linguística da América do Norte..." — por isso o nome escolhido aqui, no mesmo
        // molde usado para outras famílias deste app que levam um nome em português e o nome mais
    // conhecido em inglês entre parênteses (compare "Kra-Dai (Tai-Kadai)", "Tukano (Tukanoana)"),
    // é `family: 'Siuano (Sioux)'`. ESTA É UMA FAMÍLIA NOVA PARA O APP — precisa ser registrada em
    // idiomas.ts/conteudo.test.ts por quem for ligar este pacote (ver o relatório desta tarefa).
    family: 'Siuano (Sioux)',
    // en.wikipedia.org/wiki/Siouan_languages: Siouan → Western Siouan → Mississippi Valley Siouan →
    // Dakotan; dentro do dakotano, o lakota fica no sub-ramo "Sioux" (com o dakota), separado do
    // sub-ramo "Nakoda" (assiniboine e stoney). Ver também a nota sobre o Očhéthi Šakówiŋ em
    // curriculo.ts: o nome "nakota", usado por muito tempo para o dakota ocidental, foi um erro
    // histórico — os nakota "de verdade" (assiniboine/stoney) ficam no outro sub-ramo, mais distante.
    branches: ['Vale do Mississippi', 'Dakotano', 'Sioux (Lakota–Dakota)'],
    region:
      'Grandes Planícies dos Estados Unidos: as reservas de Pine Ridge, Rosebud, Standing Rock e Cheyenne River, em Dakota do Sul e Dakota do Norte, com falantes também em Nebraska, Minnesota, Montana e no Canadá (pt.wikipedia.org/wiki/Língua_lakota)',
    writing: 'Alfabeto latino (Ortografia Lakota Padrão, criada para o New Lakota Dictionary de 2008), com acentos de tom e letras próprias para consoantes ejetivas e fricativas (č, š, ž, ȟ, ǧ, ŋ)',
  },
  // Nenhum serviço de síntese de voz consultado tem uma voz dedicada ao lakota: 'lkt' é só o código
  // ISO 639-3 da língua, usado aqui como no restante do app para idiomas sem voz própria (ver
  // `incomplete`) — os áudios usam a voz do aparelho, se houver, como nos outros pacotes indígenas
  // deste app (arn, tpj, tca, gn, gun, kgk, nhd, kpc, tuo, yrl).
  speechLocale: 'lkt',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, 67 palavras, 4 tópicos de gramática, 2 histórias), no lakota (Lakȟótiyapi), a língua do povo lakota (sioux teton), falada nas reservas de Pine Ridge, Rosebud, Standing Rock e Cheyenne River, nas Grandes Planícies dos Estados Unidos. É uma língua ameaçada: restam cerca de 2 mil falantes de primeira língua, com idade média acima dos 70 anos (en.wikipedia.org/wiki/Lakota_language), ainda que haja um movimento ativo de revitalização. A família siouana (ver `lineage`) é nova neste app e precisa ser registrada no seletor por quem for ligar este pacote. As fontes abertas e verificáveis consultadas (Wiktionary, Wikipédia, Omniglot) são boas para palavras e frases soltas, mas não trazem um paradigma de conjugação completo para cada verbo; por isso as frases de exemplo dos verbos evitam conjugar o que não está atestado, preferindo combinações simples e seguras — a mesma prática já usada nos pacotes arn e tca. Da A2.1 até o C2 chega nas próximas atualizações, conforme mais fontes forem verificadas.',
  },
  vocab: VOCAB_LKT,
  units: UNITS_LKT,
  etymology: ETYMOLOGY_LKT,
  community: COMMUNITY_LKT,
  scenarios: SCENARIOS_LKT,
  stories: STORIES_LKT,
  grammar: GRAMMAR_LKT,
  journalPrompts: JOURNAL_PROMPTS_LKT,
  shadowing: SHADOWING_LKT,
  // š, ž, č, ȟ, ǧ, ŋ e o apóstrofo ejetivo (ʼ) não têm tecla própria num teclado em português.
  specialChars: ['š', 'ž', 'č', 'ȟ', 'ǧ', 'ŋ', 'ʼ'],
  // Nenhuma fonte consultada registra gênero gramatical no lakota: as línguas siouanas marcam
  // sobretudo pessoa (nos verbos, por prefixos e sufixos) e, em alguns casos, animacidade — não
  // gênero. Onde o sentido precisa distinguir homem/mulher, a língua usa palavras separadas
  // ("wičháša" homem, "wíŋyaŋ" mulher), não flexão — por isso `genders` fica vazio, como nos outros
  // pacotes indígenas deste app sem gênero gramatical (arn, tpj, tca, gn, gun, kgk, nhd).
  genders: [],
  greeting: 'Hau!',
  sampleSentence: 'Hau! Linu emáčiyapi. Lakȟótiyapi!',
  phrases: {
    hi: 'Hau!',
    thanks: 'Philámayaye!',
    letsStart: ['Lakȟótiyapi!', 'Em lakota! (nome da própria língua, usado aqui como convite para começar)'],
  },
  // As fontes consultadas não atestam um par "tu/você" × "o senhor/a senhora" como o do português:
  // o registro de respeito no lakota aparece, sobretudo, nas partículas de fala de homem e de
  // mulher (ver gramatica.ts) e nos termos de parentesco usados para se dirigir a alguém mais
  // velho — não numa forma de tratamento separada.
  formalMarkers:
    'As fontes consultadas não confirmam uma forma de tratamento “formal” separada, como o “vus” do romanche: o respeito aparece nas partículas de fala de homem e de mulher e nos termos de parentesco (ver a aba de gramática).',
  cognateNote:
    'O lakota é uma língua siouana, sem parentesco com o português nem com nenhuma língua indo-europeia: nenhuma palavra listada aqui é cognata do português. A relação mais interessante vai no sentido contrário: a própria palavra “tipi” entrou no português (e no inglês) vinda do lakota “thípi” (casa, moradia) — ver a aba de etimologia. Dentro da própria língua, a raiz “šúŋka” (cachorro) é produtiva: aparece também em “šúŋkawakȟáŋ” (cavalo), literalmente “cachorro-sagrado”, o nome que os lakota deram ao cavalo quando ele chegou às Planícies.',
};
