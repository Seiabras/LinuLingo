import type { LanguagePack } from '../types';
import { VOCAB_MZR } from './vocabulario';
import { UNITS_MZR } from './curriculo';
import { GRAMMAR_MZR } from './gramatica';
import { STORIES_MZR } from './historias';
import { COMMUNITY_MZR, ETYMOLOGY_MZR, JOURNAL_PROMPTS_MZR, SCENARIOS_MZR, SHADOWING_MZR } from './extras';

export const MARUBO: LanguagePack = {
  // CÓDIGO ISO 639-3: confirmado como “mzr” em TRÊS fontes independentes consultadas nesta entrega:
  // (1) iso639-3.sil.org/code/mzr — registro oficial do SIL, nome de referência “Marúbo”, status ativo,
  //     língua viva; (2) en.wikipedia.org/wiki/Marúbo_language — infobox cita “iso3: mzr”; (3)
  //     pt.wikipedia.org/wiki/Língua_marubo — infobox confirma o mesmo código “mzr”. O Glottolog
  //     (glottolog.org/resource/languoid/iso/mzr, código interno “maru1252”) confirma o mesmo mapeamento
  //     e lista “Kaniuá”, “Katukína”, “Marobo”, “Marova”, “Maruba” e “Marúbu” como variantes do mesmo
  //     nome (não línguas diferentes) — nenhuma usada neste pacote, para não confundir com o “katukína”
  //     que é uma língua pano DIFERENTE (também chamada waninawa), citada como parente próxima do marúbo
  //     por Fleck (2013), não como o mesmo idioma.
  code: 'mzr',
  name: 'Marúbo',
  // NÃO há, nas fontes consultadas, um autônimo (nome que o próprio povo/língua usa para si) diferente
  // de “Marúbo” documentado de forma específica: pib.socioambiental.org/pt/Povo:Marubo afirma que
  // “marúbo” NÃO é uma autodenominação, e sim um nome atribuído por povos não indígenas — mas a mesma
  // fonte só registra uma pista indireta sobre a identidade do grupo (“dizem os Marúbo que sua língua é
  // a dos Chaináwavo”, o nome de uma seção familiar hoje extinta, não um autônimo geral do povo ou da
  // língua). Por não haver uma palavra substituta confirmada, o campo abaixo repete “Marúbo” — o nome
  // que as três fontes do código ISO também usam —, diferente de casos como o huni kuĩ (cbs) deste app,
  // em que a fonte registra claramente um nome próprio alternativo (“Hãtxa Kuĩ”).
  // Cesarino, Marubo e Marubo (2017, p. 139) confirmam: a língua é a de um dos povos reunidos por João
  // Tuxáua, o Chai Nawavo (“Povo Pássaro”); também não dão um autônimo geral para a língua. (Nota: em
  // CES17 31 e 44, “Chai” é glosado como a árvore envireira, em “Chai Yove Nawavo”.)
  nativeName: 'Marúbo',
  // território: Terra Indígena Vale do Javari, no Amazonas — emoji de bandeira do Brasil, na falta de
  // um símbolo próprio da língua, mesma solução já usada para outras línguas indígenas brasileiras deste
  // app (huni kuĩ, baniwa, tukano, kaingang, xavante).
  flag: '🇧🇷',
  lineage: {
    family: 'Pano',
    branches: [
      'Pano continental (mainline Panoan) → ramo Náua (Nawa) → grupo Marúbo, junto com o katukina/waninawa e o kulina de Olivença (classificação de D. Fleck, 2013, citada em en.wikipedia.org/wiki/Panoan_languages)',
      '“Ramo central” da família pano, junto com o katukína-pâno, o nukiní (rêmo) e o poyanáwa (Brasil) e o kapanáwa (Peru) — classificação do etnólogo Philippe Erikson, citada em pib.socioambiental.org/pt/Povo:Marubo',
    ],
    region:
      'Terra Indígena Vale do Javari, no sudoeste do Amazonas (Brasil), ao longo dos rios Javari, Curuçá e Ituí/Ipixuna, perto das cidades de Atalaia do Norte (AM) e Cruzeiro do Sul (AC) — uma das regiões com a maior concentração de povos isolados do mundo, segundo a Funai',
    // Ortografia de Cesarino, Marubo e Marubo 2017, p. 141–142 (quadro de fonemas e grafemas; a revisão
    // das convenções da Missão Novas Tribos é dita na p. 141). Tem de ficar IGUAL à entrada mzr de
    // src/data/idiomas-metadados.ts.
    writing:
      'Alfabeto latino, na ortografia prática revista por Pedro Cesarino a partir das convenções da Missão Novas Tribos (Cesarino, Marubo e Marubo, 2017, p. 141–142): <e> = /ɨ/ (vogal central), <o> = /u/, <sh> = /ʃ/, <tx> = /tʃ/, <ch> = /ʂ/, <ts> = /ts/ e til nas vogais nasais (ã, ẽ, ĩ, õ), que também distingue formas de pronome (ẽ, “meu”; nokẽ, “nosso”). Algumas palavras vindas do Instituto Socioambiental mantêm o acento agudo da grafia do ISA (kakáya, romeyá) e o circunflexo de kenchintxô.',
  },
  // nenhum serviço de síntese de voz consultado tem voz para o marúbo: os áudios usam a voz do aparelho,
  // se houver (o mesmo caso do huni kuĩ, do baniwa, do tukano, do kaingang e do xavante neste app). Como
  // nesses pacotes, o código do próprio idioma é usado aqui em vez de um substituto como “pt-BR”, para
  // manter o mesmo padrão já adotado pelos outros idiomas indígenas sem voz sintética deste app.
  speechLocale: 'mzr',
  available: true,
  // O teto do marúbo é A1 (tetos.ts). Com a unidade 2 (A1.2) pronta, o curso chega ao teto e fica
  // COMPLETO: o campo abaixo continua com until 'A1.2' porque o app (cursoEmConstrucao) e o teste de
  // teto (aventura.test) leem “incomplete.until igual ao último subnível do teto” como curso completo;
  // sem o campo, o teste entenderia conteúdo até o C2, acima do teto. A nota diz ao aluno de onde vem
  // o material e o que ficou de fora.
  incomplete: {
    until: 'A1.2',
    note:
      'Curso completo até o teto do marúbo (A1): duas unidades, 74 palavras, 6 tópicos de gramática e 2 histórias. O marúbo é uma língua pano do Vale do Javari (Amazonas), falada por um povo de cerca de 1.700 pessoas. Não há gramática completa nem dicionário publicados em acesso aberto: a dissertação (1992) e a tese (2000) de Raquel Costa (UFRJ), que descrevem a marcação de caso e a fonologia, não foram encontradas na internet. Por isso o curso se apoia em três fontes abertas: a narrativa “Vei Vai yoã”, contada pelo pajé Armando Mariano Marubo e publicada com tradução e análise palavra por palavra por Pedro Cesarino, Armando Marubo e Robson Marubo (Language Science Press, 2017); o canto “Wenía”, traduzido por Cesarino (2018); e a lista de 345 palavras de Anonby e Holbrook (SIL, 2010). A grafia é a ortografia prática usada por Cesarino. Ficaram de fora, por falta de fonte confiável: os números (as listas discordam entre si), a palavra para “água” (as fontes dividem “waka” entre água e rio), uma saudação fixa como “oi” e um “obrigado”. No lugar da saudação, o curso usa “txai”: não é uma palavra para “oi”, e sim o termo de parentesco para cunhado e primo cruzado; segundo Cesarino (2018), é assim que os Marúbo tratam os primos cruzados. No lugar do “obrigado”, o curso usa “roaka”, que quer dizer “bom”: nenhuma fonte o registra como agradecimento.',
  },
  vocab: VOCAB_MZR,
  units: UNITS_MZR,
  etymology: ETYMOLOGY_MZR,
  community: COMMUNITY_MZR,
  scenarios: SCENARIOS_MZR,
  stories: STORIES_MZR,
  grammar: GRAMMAR_MZR,
  journalPrompts: JOURNAL_PROMPTS_MZR,
  shadowing: SHADOWING_MZR,
  // Teclado: as vogais com til (ã, ẽ, ĩ, õ) da ortografia de Cesarino, Marubo e Marubo (2017) e os
  // acentos agudos que aparecem nas palavras do curso (á, é, í, ó; ex.: awá, naí, westí, shokó). O “ô”
  // fica por causa de “kenchintxô” (grafia do ISA).
  specialChars: ['ã', 'ẽ', 'ĩ', 'õ', 'á', 'é', 'í', 'ó', 'ô'],
  // as fontes consultadas não descrevem gênero gramatical no marúbo (nem artigos, nem concordância).
  genders: [],
  greeting: 'Txai!',
  // “Txai!” (CES18 p. 48); “Nokẽ shovo.” montada (possessivo + substantivo, regra de “ẽ yora”, CES17 75).
  sampleSentence: 'Txai! Nokẽ shovo.',
  phrases: {
    // Nenhuma fonte aberta registra um “oi” fixo em marúbo. “Txai” é o termo para cunhado e primo
    // cruzado, e Cesarino (2018, p. 48, nota 6) diz que todo “Japó” trata seus primos cruzados “Arara”
    // “por txai”: é um termo de TRATAMENTO atestado, não uma saudação atestada. Fica neste campo só
    // porque o app pede um cumprimento (mesma solução do huni kuĩ); a nota de incomplete avisa o aluno.
    hi: 'Txai!',
    // Também não há “obrigado” nas fontes: usa-se o adjetivo atestado “roaka” (bom; CES17 50, CES18
    // p. 55 “vana roaka”, falar de modo belo) como palavra de apreço. NENHUMA fonte o registra como
    // agradecimento; a nota de incomplete avisa o aluno que quer dizer “bom”.
    thanks: 'Roaka!',
    // CES17 26: “noke neská akavo”, traduzido pelos autores como “agora vamos fazer assim”.
    letsStart: ['Noke neská akavo!', 'Vamos fazer assim! (frase da narrativa do pajé Armando Marubo, publicada por Cesarino, Marubo e Marubo, 2017)'],
  },
  formalMarkers:
    'As fontes consultadas não descrevem, para o marúbo, uma forma “formal” separada da informal, como o “você” e o “o senhor” do português. O que existe são termos de parentesco usados para tratar as pessoas: segundo Cesarino (2018), os primos cruzados se tratam por “txai” (cunhado) e os de certos povos tratam os de outros por “koka” (tio materno). Há também títulos conquistados, como “kakáya” (dono de maloca respeitado).',
  cognateNote:
    'O marúbo não é parente do português: é uma língua indígena da família pano, falada na Terra Indígena Vale do Javari (Amazonas). Não há ancestral comum, então não há cognatos “de berço” com o português. Dentro da família pano, o marúbo fica perto do katukina (Fleck, 2013) e é um parente distante do huni kuĩ, outra língua pano do app: compare “kaya” (rio) e “txai” (cunhado), parecidos nas duas. A aba de etimologia mostra como o marúbo forma palavras: “Vei Vai” (morte + caminho), “nokẽ shenirasĩ” (nosso + antepassado + todos) e nomes de povos como “Txonavo” (macaco-barrigudo + plural).',
};
