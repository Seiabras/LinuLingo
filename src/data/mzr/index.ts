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
    writing:
      'Alfabeto latino. Nas poucas palavras marúbo encontradas em fontes específicas, o acento agudo (á, é, í, ó) marca a sílaba tônica e o circunflexo aparece em pelo menos uma palavra (kenchintxô); a fonologia abstrata descrita por en.wikipedia.org/wiki/Marúbo_language (citando L. Costa, 2000) lista também vogais nasais (ã, ĩ, ũ) e uma vogal central (ɨ, ɨ̃), mas nenhuma delas aparece grafada nas palavras atestadas usadas neste curso.',
  },
  // nenhum serviço de síntese de voz consultado tem voz para o marúbo: os áudios usam a voz do aparelho,
  // se houver (o mesmo caso do huni kuĩ, do baniwa, do tukano, do kaingang e do xavante neste app). Como
  // nesses pacotes, o código do próprio idioma é usado aqui em vez de um substituto como “pt-BR”, para
  // manter o mesmo padrão já adotado pelos outros idiomas indígenas sem voz sintética deste app.
  speechLocale: 'mzr',
  available: true,
  incomplete: {
    until: 'A1.1',
    note:
      'Pacote MUITO menor que o modelo padrão deste app, de propósito: o marúbo é uma língua pano do Vale do Javari (Amazonas) com pouquíssima documentação digital disponível. Não há dicionário publicado on-line, lista de Swadesh ou gramática descritiva de acesso livre para o marúbo — só números de falantes (cerca de 1.250 em 2006, segundo en.wikipedia.org/wiki/Marúbo_language) e uma fonologia abstrata, sem exemplos de palavras escritas. A única fonte encontrada com palavras marúbo individuais, cada uma com sua glosa em português, foi a página do povo marúbo no Instituto Socioambiental (ISA, pib.socioambiental.org/pt/Povo:Marubo, “Povos Indígenas no Brasil”): dela vêm as 11 palavras do vocabulário — a maioria títulos sociais (koka, take, kakáya, kenchintxô, romeyá) e termos cosmológicos (yové, shokó, tanaméa, Roka), mais “vai” e “vei”, duas palavras que este curso identificou comparando os dois únicos compostos citados pela fonte, “Yové Vai” (caminho dos espíritos) e “Vei Vai” (caminho da névoa) — uma inferência explicada na aba Gramática deste curso, não uma palavra isolada atestada diretamente. Por não haver nenhuma frase marúbo completa com gramática de conversa nas fontes consultadas, este curso tem só UMA unidade (não duas), com uma lição de 6 palavras e uma prova de revisão (não duas lições), uma única história curta e um único cenário — todos usando apenas essas palavras isoladas e os dois compostos reais, nunca uma frase inventada. O código ISO 639-3 “mzr” foi confirmado em iso639-3.sil.org/code/mzr, en.wikipedia.org/wiki/Marúbo_language e pt.wikipedia.org/wiki/Língua_marubo — as três fontes concordam entre si, e o Glottolog (maru1252) confirma o mesmo mapeamento. Mais vocabulário e gramática chegam se e quando fontes específicas e confiáveis do marúbo (como um dicionário publicado) forem encontradas — este curso preferiu ficar pequeno a inventar palavras ou frases para preencher o modelo padrão.',
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
  // á, é, í, ó, ô (acentos agudo e circunflexo) são as únicas marcas realmente vistas nas palavras
  // marúbo atestadas por este curso (ver vocabulario.ts); as vogais nasais e a vogal central que a
  // fonologia abstrata da Wikipédia em inglês descreve não aparecem grafadas em nenhuma delas, por isso
  // não entram aqui — não dá para adivinhar que letra as representaria na ortografia prática da língua.
  specialChars: ['á', 'é', 'í', 'ó', 'ô'],
  // as fontes consultadas não descrevem gênero gramatical de substantivo no marúbo (nem artigos, nem
  // concordância de gênero) — por isso o campo fica vazio, como no huni kuĩ, no baniwa e no tukano deste
  // app.
  genders: [],
  greeting: 'Kakáya!',
  sampleSentence: 'Kakáya! Yové Vai, Vei Vai.',
  phrases: {
    hi: 'Kakáya!',
    // não há, nas fontes consultadas, uma interjeição marúbo equivalente a “oi” ou “obrigado”: usamos o
    // título social real “kakáya” (dono de maloca respeitado, procurado como conselheiro — um papel de
    // prestígio e boa vontade) como saudação de boas-vindas, do mesmo jeito que o curso de huni kuĩ usa
    // “txai” (parceiro) e o de baniwa usa “keepe” (gordo) onde a língua não tem uma palavra separada.
    // também não há, nas fontes, uma palavra separada para “obrigado”: como não sobrou nenhuma outra
    // palavra positiva atestada para emprestar (diferente do huni kuĩ, que tem o adjetivo “hawɨ̃”, bonito/
    // bom), este curso repete aqui o mesmo “kakáya” do campo “hi” acima, por ser a única palavra marúbo
    // atestada com sentido de apreço social (o dono de maloca admirado e “procurado como conselheiro”) —
    // uma solução mais limitada que a dos outros pacotes indígenas deste app, reconhecida como tal.
    thanks: 'Kakáya!',
    // também não há, nas fontes, um verbo ou interjeição equivalente a “vamos”: reaproveitamos o composto
    // real “Yové Vai” (caminho dos espíritos) como convite para começar a jornada deste curso, sem
    // inventar uma forma nova — o mesmo recurso usado no huni kuĩ com “na mani pi wɨ” (coma esta banana).
    letsStart: ['Yové Vai!', 'Caminho dos espíritos! (composto real citado pelo ISA; usado aqui como convite para começar a jornada deste curso)'],
  },
  formalMarkers:
    'As fontes consultadas não descrevem, para o marúbo, uma marca gramatical “formal” separada da informal como o “você”/“o senhor” do português. O que existe — e está documentado pelo ISA — são títulos sociais conquistados pelo mérito, como “kakáya” (dono de maloca respeitado, procurado como conselheiro) e “kenchintxô”/“romeyá” (especialistas em cura e xamanismo): formas de reconhecimento social, não um registro gramatical de tratamento.',
  cognateNote:
    'O marúbo não é parente do português: é uma língua indígena viva da família pano, nativa da Terra Indígena Vale do Javari (Amazonas, Brasil) — uma família totalmente diferente da indo-europeia (a mesma do português). Dentro da própria família pano, o marúbo é classificado como parente próximo do katukina/waninawa e do kulina de Olivença (segundo Fleck, 2013) e, numa classificação alternativa do etnólogo Philippe Erikson, do “ramo central” da família, junto com o katukína-pâno, o nukiní e o poyanáwa (Brasil) e o kapanáwa (Peru) — mas é só um parente distante do huni kuĩ, a outra língua pano já neste app. Não há nenhum ancestral comum com o português, então não existem cognatos “de berço” nem empréstimos conhecidos registrados nas fontes consultadas. O que existe — e está documentado na aba de etimologia — é a formação interna de palavras dentro do próprio marúbo: o nome “Marúbo” não é a autodenominação do povo, e a palavra “vai” (caminho) se repete em dois compostos cosmológicos reais, “Yové Vai” e “Vei Vai”, mostrando como o marúbo forma palavras novas por justaposição.',
};
