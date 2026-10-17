import type { FonteEstudo, MetodoEnsino } from '../types';

/**
 * Fontes para estudar guarani mbyá por conta própria e os jeitos como a língua é ensinada e
 * documentada (17/10/2026).
 *
 * Primeiro vêm as que o curso usa (citadas nos comentários de vocabulario, gramatica, curriculo e
 * historias): o léxico de Robert A. Dooley (SIL, 2006), a tese de Marci Fileti Martins (Unicamp,
 * 2003), o TCC de Darci da Silva — Karai Nhe'ery (UFSC, 2020), a página do ISA e as Wikipédias. Cada
 * URL foi aberta em 17/10/2026 com curl, conferindo título e responsável na própria página. O PDF do
 * léxico no site do SIL pede verificação humana (Cloudflare) e não abre para robôs: o link é a cópia do
 * Web Archive de 08/09/2025, que abre e é a versão de 9 de março de 2006 lida para o curso. O Ayvu
 * Rapyta de León Cadogan (1959) é a coletânea clássica de textos míticos mbyá, aberta no repositório
 * da USP; está na grafia de Cadogan, do mbyá do Guairá paraguaio, diferente da de Dooley.
 *
 * Os métodos vêm da página «Guarani Mbya» do ISA (seção sobre a língua), da notícia do CTI sobre o
 * reconhecimento da língua pelo IPHAN (25/09/2014), da página do TCC de Darci da Silva no repositório
 * da UFSC e da nota da LinguistList (16/04/2004) sobre a tradução da Bíblia.
 */
export const FONTES_GUN: FonteEstudo[] = [
  // ---- Dicionários
  {
    titulo: 'Léxico Guarani, dialeto Mbyá, com informações úteis para o ensino médio, a aprendizagem e a pesquisa lingüística',
    autor: 'Robert A. Dooley (SIL)',
    ano: 2006,
    url: 'http://web.archive.org/web/20250908071512/https://www.sil.org/system/files/reapdata/16/91/89/169189115652017518143129200809439098203/GNDicLex.pdf',
    tipo: 'dicionario',
    acesso: 'aberto',
    nivel: 'todos',
    sobre:
      'O dicionário guarani mbyá-português de referência, com milhares de verbetes, frases de exemplo traduzidas e notas de gramática nos verbetes dos prefixos e partículas (a-, nda-, pa, \'rã). É a base do vocabulário, das frases e da gramática do A2 deste curso.',
  },
  {
    titulo: 'Wikcionário em inglês: categoria “Mbya Guarani language”',
    autor: 'Wiktionary (comunidade)',
    url: 'https://en.wiktionary.org/wiki/Category:Mbya_Guarani_language',
    tipo: 'dicionario',
    acesso: 'aberto',
    licenca: 'CC BY-SA 4.0',
    nivel: 'A1–A2',
    sobre: 'Verbetes de palavras mbyá com a origem tupi-guarani de cada uma, muitos citando o léxico de Dooley. Bom para conferir uma palavra e ver os parentes dela nas outras línguas da família.',
  },
  // ---- Gramática e descrição
  {
    titulo: 'Descrição e análise de aspectos da gramática do Guarani Mbyá',
    autor: 'Marci Fileti Martins (tese de doutorado, Unicamp; Biblioteca Digital Curt Nimuendajú)',
    ano: 2003,
    url: 'https://www.etnolinguistica.org/tese:martins-2003',
    tipo: 'tese',
    acesso: 'aberto',
    nivel: 'A2–B1',
    sobre:
      'Gramática descritiva do mbyá de Morro dos Cavalos e Maciambu (SC): classes de palavras, os prefixos de pessoa (Quadro 1, p. 36), os pronomes, as orações, as perguntas e o acento. Serve para entender por que o verbo muda no começo.',
  },
  {
    titulo: 'Mbyá — inventário fonológico (SAPhon, South American Phonological Inventory Database)',
    autor: 'University of California, Berkeley',
    url: 'https://linguistics.berkeley.edu/saphon/en/inv/Mbya.html',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'A1',
    sobre: 'Quadro das consoantes e vogais do mbyá (seis vogais orais e seis nasais), com a bibliografia (Dooley 2006, Martins 2003). Ajuda a entender as vogais nasais, o “y” e o puso antes de treinar a pronúncia.',
  },
  {
    titulo: 'Glottolog: Mbyá Guaraní (mbya1239)',
    autor: 'Glottolog (Max Planck Institute for Evolutionary Anthropology)',
    url: 'https://glottolog.org/resource/languoid/id/mbya1239',
    tipo: 'site',
    acesso: 'aberto',
    licenca: 'CC BY 4.0',
    nivel: 'todos',
    sobre: 'A ficha da língua na família tupi-guarani, com a bibliografia reunida: gramáticas, dicionários, teses e artigos sobre o mbyá, para quem quer ir além do curso.',
  },
  // ---- Textos
  {
    titulo: 'Ayvu Rapyta: textos míticos de los Mbyá-Guaraní del Guairá',
    autor: 'León Cadogan (Boletim 227, Antropologia 5, Faculdade de Filosofia, Ciências e Letras da USP)',
    ano: 1959,
    url: 'https://bore.usp.br/xmlui/bitstream/handle/123456789/8803/ANTROPOLOGIA_N-5_1959.pdf?sequence=1',
    tipo: 'textos',
    acesso: 'aberto',
    nivel: 'B1–C1',
    sobre:
      'A grande coletânea de textos míticos e ensinamentos religiosos mbyá (“o fundamento da linguagem humana”), em mbyá com tradução para o espanhol. Na grafia de Cadogan, do mbyá do Guairá paraguaio, que difere da de Dooley. Boa parte é sagrada e era guardada em segredo pelos mbyá; o curso usa só os contos, cantos infantis e saudações do capítulo XVIII.',
  },
  // revisão (17/10/2026): página do eBible.org aberta com curl; título, código gun e «Copyright © 2004 Wycliffe
  // Bible Translators» conferidos na página (lá está só o Novo Testamento; a Bíblia completa é de 2004, ver METODOS)
  {
    titulo: 'Nhanderuete ayvu iky\'a e\'ỹ va\'e (Novo Testamento em guarani mbyá)',
    autor: 'Wycliffe Bible Translators (equipe de Robert A. Dooley com quatro tradutores mbyá); eBible.org',
    ano: 2004,
    url: 'https://ebible.org/find/details.php?id=gun',
    tipo: 'textos',
    acesso: 'aberto',
    nivel: 'A2–B1',
    sobre:
      'O Novo Testamento inteiro em mbyá, para ler na internet ou baixar, na mesma grafia do léxico de Dooley. É o maior texto corrido na língua de acesso livre: bom para ver os prefixos e as partículas em frases longas, lembrando que o registro é religioso.',
  },
  {
    titulo: 'Nhemongarai: Rituais de Batismo Mbya Guarani',
    autor: 'Darci da Silva — Karai Nhe\'ery (TCC, Licenciatura Intercultural Indígena do Sul da Mata Atlântica, UFSC)',
    ano: 2020,
    url: 'https://repositorio.ufsc.br/handle/123456789/204661',
    tipo: 'textos',
    acesso: 'aberto',
    nivel: 'A2–B1',
    sobre:
      'Trabalho escrito por um professor mbyá da aldeia Piraí (SC) sobre o batismo do nome e do milho, com resumo em mbyá e português e um glossário. Mostra a língua escrita por quem a fala.',
  },
  // TCC aberto com curl em 17/10/2026: título, autor (Silva, Marco Antonio Oliveira da), orientadora, data (2020-02-12),
  // curso e resumos em português e em mbyá conferidos na página do repositório
  {
    titulo: 'Kyre\'ymba: guerreiro guardião do povo Guarani Mbya',
    autor: 'Marco Antonio Oliveira da Silva (TCC, Licenciatura Intercultural Indígena do Sul da Mata Atlântica, UFSC)',
    ano: 2020,
    url: 'https://repositorio.ufsc.br/handle/123456789/204945',
    tipo: 'textos',
    acesso: 'aberto',
    nivel: 'B1',
    sobre:
      'Um professor mbyá registra a história do kyre\'ymba, o guerreiro guardião que os mais velhos contavam, a partir de conversas com dois xondaro antigos. Tem resumo em mbyá, na grafia do autor: bom para ler a língua escrita por um falante, com “raka\'e” e “je” das histórias.',
  },
  // ---- Sites e cultura
  {
    titulo: 'Guarani Mbya — Povos Indígenas no Brasil',
    autor: 'Maria Inês Ladeira (Instituto Socioambiental)',
    url: 'https://pib.socioambiental.org/pt/Povo:Guarani_Mbya',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'O povo, a tekoa, a casa de reza, o nhemongarai, os dois tempos do ano e a escola nas aldeias, com uma bibliografia longa. É a fonte das notas de cultura deste curso.',
  },
  {
    titulo: 'Língua Guarani Mbya reconhecida como referência cultural brasileira',
    autor: 'Rafael Nakamura (Centro de Trabalho Indigenista)',
    ano: 2014,
    url: 'https://trabalhoindigenista.org.br/lingua-guarani-mbya-reconhecida-como-referencia-cultural-brasileira/',
    tipo: 'site',
    acesso: 'aberto',
    sobre: 'Como o IPHAN incluiu o mbyá no Inventário Nacional da Diversidade Linguística, a partir de uma pesquisa em 69 comunidades guarani, do Espírito Santo ao Rio Grande do Sul.',
  },
  {
    titulo: 'Mbyá Guaraní dialect (Wikipédia em inglês)',
    autor: 'Wikipédia (comunidade)',
    url: 'https://en.wikipedia.org/wiki/Mby%C3%A1_Guaran%C3%AD_dialect',
    tipo: 'site',
    acesso: 'aberto',
    licenca: 'CC BY-SA 4.0',
    nivel: 'A1',
    sobre: 'Resumo da língua (falantes, sons, pronomes, comparação com o guarani paraguaio) com links para o léxico de Dooley e outras fontes.',
  },
  {
    titulo: 'Língua guarani mbiá (Wikipédia em português)',
    autor: 'Wikipédia (comunidade)',
    url: 'https://pt.wikipedia.org/wiki/L%C3%ADngua_guarani_mbi%C3%A1',
    tipo: 'site',
    acesso: 'aberto',
    licenca: 'CC BY-SA 4.0',
    nivel: 'A1',
    sobre: 'Apresentação curta da língua em português: onde é falada, quantos falantes tem e como se relaciona com os outros guaranis.',
  },
];

export const METODOS_GUN: MetodoEnsino[] = [
  {
    nome: 'Ouvir e registrar as histórias dos mais velhos',
    ondeQuem: 'Professores mbyá formados na Licenciatura Intercultural Indígena do Sul da Mata Atlântica (UFSC), para as escolas e comunidades guarani',
    comoFunciona:
      'O professor conversa com os mais velhos (no TCC de Marco Antonio Oliveira da Silva, dois antigos xondaro), registra a história e a oferece às escolas das aldeias, com resumo em mbyá. O autor conta que os mais velhos já contam menos histórias porque os jovens prestam menos atenção, e escreve para que elas não se percam.',
    fonte: 'Repositório Institucional da UFSC, página do TCC «Kyre\'ymba: guerreiro guardião do povo Guarani Mbya» (repositorio.ufsc.br/handle/123456789/204945), consultado em 17/10/2026',
    ideiaApp: 'Lições de leitura com histórias curtas contadas por falantes, marcando “je” (ouvi dizer) e “raka\'e” (antigamente), e pedindo ao aluno que reconte com as próprias palavras.',
  },
  {
    nome: 'Escola bilíngue na aldeia',
    ondeQuem: 'Escolas indígenas das aldeias mbyá do Sul e do Sudeste, ligadas às Secretarias Estaduais de Educação e ao MEC',
    comoFunciona:
      'Desde 1997, com os Núcleos de Educação Indígena, as escolas das aldeias ensinam a ler e escrever em guarani. Entre os mbyá há quem apoie e quem desconfie: há quem observe que crianças alfabetizadas em guarani muito cedo, entre seis e dez anos, perdem a fluência e a entonação da língua de casa.',
    fonte: 'Maria Inês Ladeira, «Guarani Mbya», Povos Indígenas no Brasil (pib.socioambiental.org/pt/Povo:Guarani_Mbya), seção sobre a língua (consultado em 17/10/2026)',
    ideiaApp: 'Deixar a escrita para depois de ouvir: nas primeiras lições, mais áudio e repetição da entonação, e só então a grafia.',
  },
  {
    nome: 'Professor indígena que escreve sobre o próprio povo',
    ondeQuem: 'Licenciatura Intercultural Indígena do Sul da Mata Atlântica, Universidade Federal de Santa Catarina',
    comoFunciona:
      'Na licenciatura, professores indígenas escrevem o trabalho de conclusão sobre a cultura do próprio povo. O de Darci da Silva — Karai Nhe\'ery, sobre o nhemongarai, tem o resumo em português e em mbyá (“Kova\'e mba\'eapo Nhemongarai regua re xe ayvua…”) e diz que foi escrito para os futuros pesquisadores da licenciatura.',
    fonte: 'Repositório Institucional da UFSC, página do TCC «Nhemongarai: Rituais de Batismo Mbya Guarani» (repositorio.ufsc.br/handle/123456789/204661), consultado em 17/10/2026',
    ideiaApp: 'Lições de leitura com textos curtos escritos por falantes, como esses resumos, lado a lado com a tradução.',
  },
  {
    nome: 'Inventário da língua feito com as comunidades',
    ondeQuem: 'IPOL (Instituto de Investigação e Desenvolvimento em Política Linguística) e IPHAN, em 69 comunidades guarani do Espírito Santo ao Rio Grande do Sul',
    comoFunciona:
      'A pesquisa perguntou aos próprios falantes como eles definem a língua, como ela passa entre as gerações e onde ela circula, e terminou com um livro e um DVD aprovados pelos guarani num encontro. Em 2014, o IPHAN reconheceu o mbyá como referência cultural brasileira. O IPHAN, o CTI e a Comissão Guarani Yvyrupa também formam jovens pesquisadores guarani para registrar os saberes do povo, como no livro e filme “A força do Xondaro”.',
    fonte: 'Rafael Nakamura, «Língua Guarani Mbya reconhecida como referência cultural brasileira», Centro de Trabalho Indigenista, 25/09/2014 (trabalhoindigenista.org.br), consultado em 17/10/2026',
    ideiaApp: 'Perguntar ao aluno, nas lições de cultura, onde ele ouviria cada frase (casa, escola, opy), como a pesquisa perguntou aos falantes.',
  },
  {
    nome: 'Escrita criada junto com os falantes',
    ondeQuem: 'Robert A. Dooley (SIL) e uma equipe de quatro mbyá, na tradução da Bíblia lançada pela Sociedade Bíblica do Brasil em 2004',
    comoFunciona:
      'A tradução levou 46 anos, de 1958 a 2004, e foi junto com o desenvolvimento da escrita mbyá, numa língua usada quase só na fala. Segundo Dooley, criar o alfabeto e traduzir estimulou a própria língua, que passou a ser mais usada pela comunidade.',
    fonte: 'Nota «Bible in Guaraní» (Latin American Press, 16/04/2004), reproduzida na lista ILAT da LinguistList (listserv.linguistlist.org/pipermail/ilat/2004-April/000809.html), consultada em 17/10/2026',
    ideiaApp: 'Mostrar ao aluno de onde vem cada letra da grafia (o x, o y, o puso) com a história de quem a criou.',
  },
];
