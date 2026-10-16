import type { FonteEstudo, MetodoEnsino } from '../types';

/**
 * Fontes para estudar marúbo por conta própria e os jeitos como a língua é ensinada (16/10/2026).
 *
 * Feito a partir do relatório de fontes do curso de marúbo (16/10/2026). As primeiras são as que o próprio
 * curso cita nos comentários de vocabulario e gramatica (Cesarino 2017, 2018, 2013 e 2008; Anonby e
 * Holbrook 2010; ASJP; ISA; native-languages.org). Cada URL foi aberta com curl em 16/10/2026: as que não
 * abriram (o repositório do Museu de História Natural, com Fleck 2013; a página da Oxford com Fleck 2022;
 * o Global Recordings) ficaram sem link, com a explicação no “sobre”. A Revista da ABRALIN abriu, mas a
 * página do artigo traz links de spam injetados (“slot gacor”), e o “sobre” avisa. O artigo de Costa é de
 * 2002 (data da própria página da revista, v. 1, n. 1).
 */
export const FONTES_MZR: FonteEstudo[] = [
  // ---- Textos glosados (a base do curso)
  {
    titulo: 'Marubo (capítulo de “On this and other worlds: Voices from Amazonia”)',
    autor: 'Pedro de Niemeyer Cesarino, Armando Mariano Marubo Cherõpapa Txano e Robson Dionísio Doles Marubo (orgs. do livro: Kristine Stenzel e Bruna Franchetto), Language Science Press',
    ano: 2017,
    url: 'https://langsci-press.org/catalog/view/167/740/839-2',
    tipo: 'textos',
    acesso: 'aberto',
    licenca: 'CC BY 4.0',
    nivel: 'A1–A2',
    sobre: 'A narrativa “Vei Vai yoã” (105 linhas) com cada palavra cortada em pedaços, glosada e traduzida, mais o quadro da ortografia e os cinco passados; é a base do curso.',
  },
  {
    titulo: 'Wenía: o surgimento dos antepassados – Leitura e tradução de um canto narrativo ameríndio (Marubo, Amazônia Ocidental)',
    autor: 'Pedro de Niemeyer Cesarino, Estudos de Literatura Brasileira Contemporânea 53',
    ano: 2018,
    url: 'https://doi.org/10.1590/2316-4018533',
    tipo: 'textos',
    acesso: 'aberto',
    nivel: 'B1+',
    sobre: 'Canto bilíngue sobre a origem dos povos antigos, com notas sobre parentesco (txai, koka) e a fala ritual; bom para ler depois do básico.',
  },
  {
    titulo: 'Cartografias do cosmos: conhecimento, iconografia e artes verbais entre os Marubo',
    autor: 'Pedro de Niemeyer Cesarino, Mana 19(3)',
    ano: 2013,
    url: 'https://doi.org/10.1590/S0104-93132013000300002',
    tipo: 'tese',
    acesso: 'aberto',
    nivel: 'A1–A2',
    sobre: 'Artigo sobre o conhecimento dos pajés, com muitas palavras marúbo explicadas no texto (nome, pé do céu, olho de onça-fogo).',
  },
  {
    titulo: 'Babel da floresta, cidades dos brancos? Os Marubo no trânsito entre dois mundos',
    autor: 'Pedro de Niemeyer Cesarino, Novos Estudos CEBRAP 82',
    ano: 2008,
    url: 'https://doi.org/10.1590/S0101-33002008000300007',
    tipo: 'tese',
    acesso: 'aberto',
    nivel: 'A1',
    sobre: 'Ensaio sobre a vida dos Marúbo entre a aldeia e a cidade, com termos como yora (gente), nawa (estrangeiro) e chinã (pensamento).',
  },
  // ---- Palavras e pronúncia
  {
    titulo: 'A survey of the languages of the Javari River Valley, Brazil',
    autor: 'Stan Anonby e David J. Holbrook, SIL Electronic Survey Report 2010-003',
    ano: 2010,
    url: 'https://web.archive.org/web/2015/http://www.sil.org/silesr/2010/silesr2010-003.pdf',
    tipo: 'dicionario',
    acesso: 'aberto',
    nivel: 'A1',
    sobre: 'Levantamento das línguas do Vale do Javari; o apêndice traz uma lista de 345 palavras com uma coluna de marúbo, em transcrição fonética (cópia no Internet Archive).',
  },
  {
    titulo: 'ASJP Database: lista “MARUBO”',
    autor: 'Wichmann, Brown, Holman et al. (lista de Viveka Velupillai, a partir de Costa 1993 e 2000)',
    url: 'https://asjp.clld.org/languages/MARUBO',
    tipo: 'dicionario',
    acesso: 'aberto',
    licenca: 'CC BY 4.0',
    nivel: 'A1',
    sobre: 'Cerca de 40 palavras básicas num código fonético simples; serve para conferir palavras do dia a dia.',
  },
  {
    titulo: 'Interações entre restrições em Marubo (Pano)',
    autor: 'Raquel Guimarães Romankevicius Costa (Museu Nacional/UFRJ), Revista da ABRALIN 1(1)',
    ano: 2002,
    url: 'https://revista.abralin.org/index.php/abralin/article/download/727/1827',
    tipo: 'tese',
    acesso: 'aberto',
    nivel: 'A1',
    sobre: 'Artigo técnico sobre sílabas e acento do marúbo, da principal linguista da língua. Atenção: a página da revista tem links de spam injetados; abra só o PDF e não clique em outros links do site.',
  },
  {
    titulo: 'Dissertação (1992) e tese (2000) sobre o marúbo',
    autor: 'Raquel Guimarães Romankevicius Costa (UFRJ)',
    tipo: 'tese',
    acesso: 'biblioteca',
    nivel: 'A2',
    sobre: 'A principal descrição da fonologia e da marcação de caso do marúbo; não foram achadas abertas na internet, só em bibliotecas.',
  },
  {
    titulo: 'Marubo Words',
    autor: 'Native Languages of the Americas',
    url: 'https://www.native-languages.org/marubo_words.htm',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'A1',
    sobre: 'Lista curta de palavras básicas e de animais (há uma página irmã, marubo_animals.htm), numa grafia própria do site, irregular; use para comparar, não como norma.',
  },
  // ---- Família pano e história
  {
    titulo: 'Contribuições para a reconstrução do protopáno',
    autor: 'Sanderson Castro Soares de Oliveira (tese de doutorado, UnB)',
    ano: 2014,
    url: 'https://www.repositorio.unb.br/bitstream/10482/17129/1/2014_SandersonCastroSoaresdeOliveira.pdf',
    tipo: 'tese',
    acesso: 'aberto',
    nivel: 'B1+',
    sobre: 'Compara 18 línguas pano, o marúbo entre elas, e reconstrói a língua antiga da família; útil para ver parentescos de palavras.',
  },
  {
    titulo: 'O mundo de João Tuxaua: (trans)formação do povo Marubo',
    autor: 'Elena Monteiro Welper (tese de doutorado, PPGAS/Museu Nacional/UFRJ)',
    ano: 2009,
    url: 'https://biblioteca.trabalhoindigenista.org.br/wp-content/uploads/2018/06/tese_PARTE-1_elena.pdf',
    tipo: 'tese',
    acesso: 'aberto',
    nivel: 'B1+',
    sobre: 'História de como o povo marúbo se formou em torno do chefe João Tuxaua; esta é a primeira parte da tese, em PDF.',
  },
  {
    titulo: 'Panoan languages and linguistics',
    autor: 'David W. Fleck (Anthropological Papers of the American Museum of Natural History 99)',
    ano: 2013,
    tipo: 'tese',
    acesso: 'aberto',
    nivel: 'B1+',
    sobre: 'Panorama em inglês das línguas pano, que põe o marúbo perto do katukina. O repositório do Museu de História Natural não abriu no teste de 16/10/2026; procure pelo título.',
  },
  {
    titulo: 'Vestiges of body-part prefixation in Marubo',
    autor: 'David W. Fleck (Oxford University Press, capítulo de livro)',
    ano: 2022,
    tipo: 'tese',
    acesso: 'pago',
    nivel: 'B1+',
    sobre: 'Capítulo em inglês sobre restos de prefixos de parte do corpo no marúbo; a página da editora não abriu no teste de 16/10/2026 (DOI 10.1093/oso/9780198852476.003.0015).',
  },
  {
    titulo: 'Povos Indígenas no Brasil: Marubo',
    autor: 'Instituto Socioambiental',
    url: 'https://pib.socioambiental.org/pt/Povo:Marubo',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'Verbete sobre o povo: história, malocas, seções, pajés e festas, com bibliografia.',
  },
  {
    titulo: 'Glottolog: Marúbo',
    autor: 'Hammarström, Forkel, Haspelmath e Bank (Instituto Max Planck)',
    url: 'https://glottolog.org/resource/languoid/id/maru1252',
    tipo: 'site',
    acesso: 'aberto',
    licenca: 'CC BY 4.0',
    nivel: 'todos',
    sobre: 'Classificação da língua e lista das referências bibliográficas sobre ela.',
  },
  // ---- Livros e materiais de outros tipos
  {
    titulo: 'Oniska: poética do xamanismo na Amazônia (2011) e Quando a Terra deixou de falar: cantos da mitologia marubo (2013)',
    autor: 'Pedro de Niemeyer Cesarino (Perspectiva; Editora 34)',
    ano: 2011,
    tipo: 'textos',
    acesso: 'pago',
    nivel: 'B1+',
    sobre: 'Os livros de Cesarino com os cantos marúbo traduzidos; vendidos em livraria ou consultados em biblioteca.',
  },
  {
    titulo: 'Scripture Earth: Marubo do Brasil',
    autor: 'Scripture Earth (materiais de missões)',
    url: 'https://www.scriptureearth.org/00eng.php?iso=mzr',
    tipo: 'textos',
    acesso: 'aberto',
    nivel: 'B1+',
    sobre: 'Porções da Bíblia em marúbo, de origem missionária; o conteúdo não foi conferido pelo curso. O Global Recordings também lista áudios em marúbo, mas a página não abriu no teste de 16/10/2026.',
  },
];

export const METODOS_MZR: MetodoEnsino[] = [
  {
    nome: 'Transmissão oral pelos pajés',
    ondeQuem: 'Malocas marúbo do Vale do Javari; pajés rezadores (kẽchĩtxo) e os mais novos que os escutam',
    comoFunciona:
      'Os mais novos aprendem ouvindo as falas de ensinamento (ese vana), as narrativas (yoã vana) e os cantos, cheios de versos paralelos e fórmulas que se repetem trocando uma palavra. Cesarino distingue a fala comum da “fala pensada” dos pajés.',
    fonte: 'Cesarino, Marubo e Marubo, “Marubo”, Language Science Press, 2017, https://langsci-press.org/catalog/view/167/740/839-2; Cesarino, “Wenía”, 2018, https://doi.org/10.1590/2316-4018533 (consultados em 16/10/2026)',
    ideiaApp: 'Exercícios de ouvir e repetir com versos paralelos, trocando uma palavra de cada vez.',
  },
  {
    nome: 'Escola indígena e formação de professores no Vale do Javari',
    ondeQuem: 'Professores indígenas formados no curso de Pedagogia Intercultural Indígena (UEA/PARFOR) em Atalaia do Norte (AM)',
    comoFunciona:
      'O curso alterna tempo na universidade e tempo na aldeia e trabalha a alfabetização na língua indígena e a produção de material didático. A autora conclui que a escola, sozinha, não revitaliza a língua: é preciso o uso na comunidade.',
    fonte: 'Célia Aparecida Bettiol, “Escolas e professores indígenas: reflexões sobre a formação e o uso das línguas indígenas”, Revista ODEERE, 2022, https://doi.org/10.22481/odeere.v7i3.11597 (consultado em 16/10/2026)',
    ideiaApp: 'Tarefas de comunidade que peçam pesquisar com alguém da família e contar o que aprendeu.',
  },
  {
    nome: 'Material bilíngue pedido pelas lideranças',
    ondeQuem: 'União dos Povos Indígenas do Vale do Javari (Univaja) e lideranças marúbo, 2023',
    comoFunciona:
      'As lideranças pressionaram o Ministério da Educação por uma educação escolar indígena com material bilíngue e espaço para as práticas tradicionais nas escolas do Vale do Javari.',
    fonte: 'Agência Pública, “Educação escolar indígena: lideranças do Vale do Javari pressionam MEC”, dezembro de 2023, https://apublica.org/2023/12/educacao-escolar-indigena-liderancas-do-vale-do-javari-pressionam-mec (consultado em 16/10/2026)',
    ideiaApp: 'Manter o marúbo sempre ao lado do português nas lições e nas histórias.',
  },
  {
    nome: 'Currículo escolar sobre as histórias dos Marúbo',
    ondeQuem: 'Universidade William & Mary (EUA), com o Javari Project, para alunos de 9 a 12 anos',
    comoFunciona:
      'Uma estudante da universidade montou um currículo para crianças de 9 a 12 anos centrado nas histórias dos Marúbo e das comunidades do Vale do Javari, contadas no filme “Tribes on the Edge”, para refletir sobre a ligação com a comunidade e o ambiente. Não é um curso da língua marúbo, mas mostra como ensinar a partir das histórias do povo.',
    fonte: 'William & Mary, Institute for Integrative Conservation, “Developing Education Curriculum Centered on the Stories of the Marubo Tribe and our Interconnectedness”, https://www.wm.edu/offices/iic/research/research-portfolio/21-009-marubo-tribe.php (consultado em 16/10/2026)',
    ideiaApp: 'Organizar cada unidade em torno de uma história, como as lições do curso já fazem com o Caminho-Morte.',
  },
];
