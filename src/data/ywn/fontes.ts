import type { FonteEstudo, MetodoEnsino } from '../types';

/**
 * Fontes para estudar yawanawá por conta própria e os jeitos como a língua é ensinada (16/10/2026).
 *
 * Primeiro vêm as que o próprio curso usa (citadas nos comentários de vocabulario, gramatica e curriculo):
 * os artigos de Silva e Duarte (2024, 2025), os de Aldir Santos de Paula (2003, 2008), a lista do ASJP, os
 * livros da comunidade (Costumes e tradições, 2006; Vakehu Shenipahu, 2016; Plano de Vida, 2016) e a
 * dissertação de Laura Pérez Gil (1999). Cada URL foi aberta em 16/10/2026 (com curl), conferindo título
 * e responsável na própria página ou no PDF. As duas obras principais sobre a língua, a tese de Paula
 * (2004) e a dissertação de Camargo-Tavares (2013), não foram achadas em acesso aberto: entram sem link,
 * como acesso de biblioteca. Os métodos vêm do livro dos professores yawanawá (CPI-Acre, 2006), do Plano de
 * Vida Yawanawa (2016), do livro de contos da ASCY (2016) e do caderno pedagógico de Lima e Ghidini (UFAC,
 * 2019).
 */
export const FONTES_YWN: FonteEstudo[] = [
  // ---- Gramática e descrição da língua
  {
    titulo: 'De que se trata a ergatividade cindida em Yawanawá?',
    autor: 'Amanda Milza Miranda Silva e Fábio Bonfim Duarte (UFMG), Revista Brasileira de Linguística Antropológica 16',
    ano: 2024,
    url: 'https://periodicos.unb.br/index.php/ling/article/view/55784',
    tipo: 'tese',
    acesso: 'aberto',
    nivel: 'A1–A2',
    sobre: 'O resumo mais completo da gramática em acesso aberto: tabela dos pronomes, os quatro passados, aspecto, modo, ordem das palavras e a marca “-n”, com dezenas de frases glosadas tiradas de Paula (2004) e Camargo-Tavares (2013).',
  },
  {
    titulo: 'Hãtxa Kuĩ e Yawanawá, uma apresentação dos povos e línguas',
    autor: 'Amanda Milza Miranda Silva e Fábio Bonfim Duarte, Revista Brasileira de Linguística Antropológica 17',
    ano: 2025,
    url: 'https://periodicos.unb.br/index.php/ling/article/view/61005',
    tipo: 'tese',
    acesso: 'aberto',
    nivel: 'A1',
    sobre: 'Compara os pronomes e as frases simples do yawanawá com os do huni kuĩ, e traz os dados do povo (aldeias, número de falantes, demarcação da terra).',
  },
  {
    titulo: 'Formação de palavras na língua Yawanawá',
    autor: 'Aldir Santos de Paula (UFAL), Revista do GELNE 5',
    ano: 2003,
    url: 'https://www.periodicos.ufrn.br/gelne/article/view/9429',
    tipo: 'tese',
    acesso: 'aberto',
    nivel: 'A1–A2',
    sobre: 'Artigo curto (seis páginas, digitalizadas) sobre plural, compostos, adjetivos e sufixos como “-ti” e “-tapa”; bom para entender como as palavras se montam.',
  },
  {
    titulo: 'Os morfemas de negação e causatividade nas línguas Puyanáwa e Yawanawá (pano)',
    autor: 'Aldir Santos de Paula (UFAL), Revista do GELNE 10(2)',
    ano: 2008,
    url: 'https://www.periodicos.ufrn.br/gelne/article/view/12155',
    tipo: 'tese',
    acesso: 'aberto',
    nivel: 'A1–A2',
    sobre: 'Mostra a negação “-ma” e o causativo, com frases numa grafia já próxima da prática (“e-n”, “vene”, “itxa-pa-ma”).',
  },
  {
    titulo: 'A língua dos índios Yawanawá do Acre',
    autor: 'Aldir Santos de Paula (tese de doutorado, Unicamp; livro pela Edufal, Maceió, 2007)',
    ano: 2004,
    tipo: 'gramatica',
    acesso: 'biblioteca',
    nivel: 'A1–B1',
    sobre: 'A principal descrição da língua: fonologia, morfologia e sintaxe. Não foi achada em acesso aberto (o repositório da Unicamp estava fora do ar no dia da consulta); procure o livro da Edufal em bibliotecas.',
  },
  {
    titulo: 'Fonologia, morfologia e sintaxe das expressões nominais em Yawanawá (Pano)',
    autor: 'Lívia de Camargo Silva Tavares de Souza (dissertação de mestrado, UFRJ)',
    ano: 2013,
    tipo: 'tese',
    acesso: 'biblioteca',
    nivel: 'A1–A2',
    sobre: 'Descreve os sons e os nomes, com frases numa grafia prática (“yawa rete-a”, “peshe”); não foi achada aberta na internet, só citada em outros trabalhos.',
  },
  {
    titulo: 'As relações de escopo entre tempo e aspecto em línguas indígenas da família Pano',
    autor: 'Edson Rosa Francisco de Souza e Paulo Henrique Pereira Silva de Felipe, LIAMES 17(2)',
    ano: 2017,
    url: 'https://periodicos.sbu.unicamp.br/ojs/index.php/liames/article/view/8649548',
    tipo: 'tese',
    acesso: 'aberto',
    nivel: 'A2',
    sobre: 'Quadro dos sufixos de tempo e aspecto do yawanawá (segundo Paula, 2004) ao lado de seis outras línguas pano.',
  },
  {
    titulo: 'Contribuições para a reconstrução do protopáno',
    autor: 'Sanderson Castro Soares de Oliveira (tese de doutorado, UnB)',
    ano: 2014,
    url: 'https://www.repositorio.unb.br/bitstream/10482/17129/1/2014_SandersonCastroSoaresdeOliveira.pdf',
    tipo: 'tese',
    acesso: 'aberto',
    nivel: 'B1+',
    sobre: 'Compara 18 línguas pano, o yawanawá entre elas, para reconstruir a língua antiga da família; útil para ver parentescos de palavras.',
  },
  {
    titulo: 'Grambank: Yawanawá',
    autor: 'Grambank (Instituto Max Planck de Antropologia Evolutiva)',
    url: 'https://grambank.clld.org/languages/yawa1260',
    tipo: 'gramatica',
    acesso: 'aberto',
    licenca: 'CC BY 4.0',
    nivel: 'todos',
    sobre: 'Ficha com traços gramaticais do yawanawá (ordem das palavras, caso, plural…), cada um com a fonte, a partir de Paula (2004) e Souza (2013).',
  },
  // ---- Palavras
  {
    titulo: 'ASJP Database: lista “YAWANAWA”',
    autor: 'Wichmann, Brown, Holman et al. (lista feita a partir de Paula, 2004)',
    url: 'https://asjp.clld.org/languages/YAWANAWA',
    tipo: 'dicionario',
    acesso: 'aberto',
    licenca: 'CC BY 4.0',
    nivel: 'A1',
    sobre: 'Cerca de 40 palavras básicas (eu, você, peixe, água, sangue, fogo…) num código fonético simples; boa para conferir palavras do dia a dia.',
  },
  {
    titulo: 'Yawanawa Language and the Yawanawa Indian Tribe',
    autor: 'Native Languages of the Americas',
    url: 'https://www.native-languages.org/yawanawa.htm',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'A1',
    sobre: 'Página com links para uma lista de palavras, as partes do corpo num desenho, um guia de pronúncia e a comparação com outras línguas pano.',
  },
  // ---- Textos da comunidade
  {
    titulo: 'Costumes e tradições do povo Yawanawá',
    autor: 'Aldaiso Luiz Vinnya, Maria Luiza Pinedo Ochoa e Gleyson de Araújo Teixeira (orgs.), Comissão Pró-Índio do Acre e Organização dos Professores Indígenas do Acre',
    ano: 2006,
    url: 'https://cpiacre.org.br/wp-content/uploads/2020/03/Costumes-e-Tradicoes-do-Povo-Yawanawa.pdf',
    tipo: 'textos',
    acesso: 'aberto',
    nivel: 'A1–A2',
    sobre: 'Livro escrito por pesquisadores e professores yawanawá para as escolas das aldeias: história, comida, caça, pesca, festas e educação, com muitas palavras na grafia da comunidade (pratos, bichos, cores).',
  },
  {
    titulo: 'Vakehu Shenipahu: contos infantis do povo Yawanawa',
    autor: 'Associação Sociocultural Yawanawa (org. Laura Soriano Yawanawa; contos do pajé Tata Txanu Natasheni), com apoio da Forest Trends',
    ano: 2016,
    url: 'https://www.forest-trends.org/wp-content/uploads/imported/livroyawa-contospdf-pdf.pdf',
    tipo: 'textos',
    acesso: 'aberto',
    nivel: 'A2–B1',
    sobre: 'Sete contos em yawanawá e português, página a página, ilustrados pelas crianças das aldeias; o melhor texto corrido na língua que está aberto.',
  },
  {
    titulo: 'Plano de Vida Yawanawa',
    autor: 'Associação Sociocultural Yawanawa e Forest Trends',
    ano: 2016,
    url: 'https://www.forest-trends.org/wp-content/uploads/2019/03/life-plan-yawanawa.pdf',
    tipo: 'textos',
    acesso: 'aberto',
    nivel: 'A1',
    sobre: 'Em português: a história recente do povo, o renascimento cultural, o festival Mariri e os planos para a língua e a escola, com depoimentos das lideranças.',
  },
  // ---- Cultura e etnografia
  {
    titulo: 'Pelos caminhos de Yuve: conhecimento, cura e poder no xamanismo yawanawa',
    autor: 'Laura Pérez Gil (dissertação de mestrado, UFSC)',
    ano: 1999,
    url: 'https://repositorio.ufsc.br/bitstream/handle/123456789/80950/151694.pdf?sequence=1',
    tipo: 'tese',
    acesso: 'aberto',
    nivel: 'B1+',
    sobre: 'Etnografia do xamanismo yawanawá, com termos da língua explicados (shuãnka, xinaya, yuve, txai); boa para o vocabulário da cultura.',
  },
  {
    titulo: 'Povos Indígenas no Brasil: Yawanawá',
    autor: 'Instituto Socioambiental',
    url: 'https://pib.socioambiental.org/pt/Povo:Yawanawá',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'Verbete sobre o povo: história, organização, festas e uma bibliografia com os principais estudos.',
  },
  {
    titulo: 'Terra Indígena Rio Gregório',
    autor: 'Instituto Socioambiental (Terras Indígenas no Brasil)',
    url: 'https://terrasindigenas.org.br/pt-br/terras-indigenas/3846',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'Situação da terra indígena onde a língua é falada, com mapa, povos e notícias.',
  },
  {
    titulo: 'Iauanauás (Yawanawá)',
    autor: 'Colaboradores da Wikipédia em português',
    url: 'https://pt.wikipedia.org/wiki/Yawanawá',
    tipo: 'site',
    acesso: 'aberto',
    licenca: 'CC BY-SA 4.0',
    nivel: 'todos',
    sobre: 'Resumo sobre o povo e a língua, com população e localização.',
  },
  {
    titulo: 'Glottolog: Yawanawa',
    autor: 'Hammarström, Forkel, Haspelmath e Bank (Instituto Max Planck)',
    url: 'https://glottolog.org/resource/languoid/id/yawa1260',
    tipo: 'site',
    acesso: 'aberto',
    licenca: 'CC BY 4.0',
    nivel: 'todos',
    sobre: 'Classificação da língua na família pano e lista de referências bibliográficas (teses, artigos e vocabulários antigos).',
  },
  {
    titulo: 'Panoan languages and linguistics',
    autor: 'David W. Fleck (Anthropological Papers of the American Museum of Natural History 99)',
    ano: 2013,
    tipo: 'tese',
    acesso: 'aberto',
    nivel: 'B1+',
    sobre: 'Panorama em inglês das línguas pano, sua classificação e seus estudos. O repositório do Museu de História Natural não abriu no teste de 16/10/2026; procure pelo título.',
  },
];

export const METODOS_YWN: MetodoEnsino[] = [
  {
    nome: 'Escola diferenciada yawanawá',
    ondeQuem: 'Escolas das aldeias da Terra Indígena Rio Gregório, com professores yawanawá',
    comoFunciona:
      'Na escola se ensinam e se falam as duas línguas, o yawanawá e o português. O professor usa o livro feito por ele, com as palavras do dia a dia, escolhe as atividades conforme a necessidade dos alunos e participa dos trabalhos da comunidade. Os velhos são tratados como “arquivos de histórias”, geógrafos e cientistas, e as brincadeiras e músicas tradicionais entram na escola.',
    fonte: 'Fernando Luiz Nani Yawanawá, “Educação tradicional e escola”, em Costumes e tradições do povo Yawanawá (CPI-Acre e OPIAC, 2006), p. 164–165, https://cpiacre.org.br/wp-content/uploads/2020/03/Costumes-e-Tradicoes-do-Povo-Yawanawa.pdf (consultado em 16/10/2026)',
    ideiaApp: 'Partir das palavras do dia a dia da aldeia (comida, caça, festa) e trazer, nas lições, a fala dos mais velhos como fonte, não só a do linguista.',
  },
  {
    nome: 'Educação tradicional (Mesenai)',
    ondeQuem: 'Famílias yawanawá; pais, velhos contadores de histórias e pajés',
    comoFunciona:
      'A educação começa pelos pais: o pai ensina o menino e a mãe ensina a menina enquanto trabalha (paneiro, cerâmica, caiçuma). Depois vêm os velhos e os pajés, com histórias que dão exemplos de como viver. O Plano de Vida pede “ensinadores” pagos nas aldeias (pajés, artesãs, quem ensina pintura) e uma escola tradicional, no Centro Cerimonial, que reúna velhos e professores.',
    fonte: 'Costumes e tradições do povo Yawanawá (2006), p. 162; Plano de Vida Yawanawa (ASCY e Forest Trends, 2016), p. 59–61, https://www.forest-trends.org/wp-content/uploads/2019/03/life-plan-yawanawa.pdf (consultados em 16/10/2026)',
    ideiaApp: 'Tarefas de comunidade que peçam ao aluno perguntar a um mais velho da família e recontar o que ouviu.',
  },
  {
    nome: 'Contação de histórias em livro bilíngue',
    ondeQuem: 'Associação Sociocultural Yawanawa (ASCY), crianças das aldeias',
    comoFunciona:
      'O pajé Tata, então com 103 anos, contou sete histórias; elas foram escritas em yawanawá, revistas por um professor yawanawá e traduzidas. As crianças ouviram as histórias na língua e fizeram os desenhos do livro. As histórias são contadas pelos velhos de madrugada ou à noite, e também na pescaria e na caçada.',
    fonte: 'Vakehu Shenipahu: contos infantis do povo Yawanawa (ASCY, 2016), p. 2–5, https://www.forest-trends.org/wp-content/uploads/imported/livroyawa-contospdf-pdf.pdf; Costumes e tradições do povo Yawanawá (2006), p. 167 (consultados em 16/10/2026)',
    ideiaApp: 'Histórias com o texto na língua e a tradução lado a lado, e uma atividade de desenhar o que se ouviu antes de ler.',
  },
  {
    nome: 'Festival Mariri e o renascimento cultural',
    ondeQuem: 'Todas as aldeias yawanawá, com poucos visitantes de fora, todo mês de julho',
    comoFunciona:
      'Em 2002, os velhos e as lideranças criaram uma festa anual de canto, dança, arte e cura para acordar costumes “adormecidos”; daí nasceram o Mariri Yawanawá (desde 2008–2009) e um centro de aprendizado da espiritualidade. Lideranças contam que voltaram a falar a língua já adultas, estimuladas por esse movimento, e o Plano de Vida pede um calendário cultural em cada aldeia, com danças, brincadeiras e comidas.',
    fonte: 'Tashka Yawanawa, depoimentos no Plano de Vida Yawanawa (ASCY e Forest Trends, 2016), p. 39–42 e 59, https://www.forest-trends.org/wp-content/uploads/2019/03/life-plan-yawanawa.pdf (consultado em 16/10/2026)',
    ideiaApp: 'Uma unidade cultural em torno da festa (nomes de comidas, brincadeiras e cantos), e uma trilha pensada para adultos que entendem um pouco e querem voltar a falar.',
  },
  {
    nome: 'Livros yawanawá nas outras matérias',
    ondeQuem: 'Ensino médio nas escolas yawanawá de Tarauacá (escolas Iva Sttiho, Wixy Tapimaty Peshe Tui Kuru e Nixiwaka)',
    comoFunciona:
      'O caderno pedagógico de Biologia usa os livros da própria comunidade (Costumes e tradições; Tui Kuru Ânihãu Xinã, memórias do velho Raimundo Luiz) como ponto de partida, segue o Projeto Político Pedagógico Yawanawá e propõe entrevistas com pessoas da comunidade. Os textos produzidos pelos alunos são traduzidos para a língua indígena junto com o professor de língua indígena.',
    fonte: 'Eucilene Ferreira de Lima e André Ricardo Ghidini, Nũ Ãũkai Vãi: Nos Caminhos da Vida (produto educacional, UFAC, 2019), eduCAPES, https://educapes.capes.gov.br/handle/capes/564016 (consultado em 16/10/2026)',
    ideiaApp: 'Exercícios de traduzir para o yawanawá frases curtas escritas pelo próprio aluno, com as palavras do Cofre como apoio.',
  },
];
