import type { FonteEstudo, MetodoEnsino } from '../types';

/**
 * Fontes para estudar huni kuĩ (hãtxa kuĩ) por conta própria e os jeitos como a língua é ensinada
 * (16/10/2026).
 *
 * Primeiro vêm as que o próprio curso usa: as duas obras de Joaquim Paulo de Lima Kaxinawá (a tese de
 * 2014, nas versões em português e em hãtxa kuĩ, e a dissertação de 2011), o artigo de Eliane Camargo
 * (2005), o de Silva e Duarte (2025) e o dicionário de Susan Montag. Depois, os livros bilíngues dos
 * professores e agentes huni kuĩ publicados pela Comissão Pró-Índio do Acre, a reedição de Capistrano de
 * Abreu e bases de referência. Cada URL foi aberta com curl nesta data, conferindo título e responsável;
 * o repositório da UnB estava fora do ar (erro 503), e por isso as teses apontam para a cópia guardada
 * pelo Internet Archive (web.archive.org), que abre o PDF do próprio repositório. A licença só entra
 * quando a obra a declara. A reedição de 2016 de Capistrano é livro à venda e entra sem link.
 *
 * Os métodos vêm de [KAX11] (p. 13-14, 20 e 33-39), [KAX14] (p. 16-17), [HM] (p. 4-5), do sumário e dos
 * agradecimentos da reedição de Capistrano (2016, p. 5-9) e do catálogo do Glottolog.
 */
export const FONTES_CBS: FonteEstudo[] = [
  // ---- Gramática e descrição
  {
    titulo: 'Uma gramática da língua Hãtxa Kuĩ',
    autor: 'Joaquim Paulo de Lima Kaxinawá (tese de doutorado, Universidade de Brasília); cópia do repositório da UnB no Internet Archive',
    ano: 2014,
    url: 'http://web.archive.org/web/20180720071428/http://repositorio.unb.br/bitstream/10482/18984/1/2014_JoaquimPaulodeLimaKaxinaw%c3%a1_Portugu%c3%aas.pdf',
    tipo: 'gramatica',
    acesso: 'aberto',
    nivel: 'A1–B1',
    sobre:
      'A gramática mais completa da língua, escrita por um linguista huni kuĩ: classes de palavras, cores, parentesco, números, pronomes, os tempos do verbo, “ki/kiki/kiaki”, perguntas e orações, com centenas de exemplos traduzidos, um mito glosado e as adivinhas de Capistrano. É a base deste curso.',
  },
  {
    titulo: 'Hãtxa Kuĩ haska xarabu (a mesma tese, na versão em hãtxa kuĩ)',
    autor: 'Joaquim Paulo de Lima Kaxinawá (Universidade de Brasília); cópia do repositório da UnB no Internet Archive',
    ano: 2014,
    url: 'https://web.archive.org/web/20231120203814/https://repositorio.unb.br/bitstream/10482/18984/2/2014_JoaquimPaulodeLimaKaxinaw%C3%A1_Kaxinawa.pdf',
    tipo: 'textos',
    acesso: 'aberto',
    nivel: 'A2–B2',
    sobre:
      'A gramática explicada em hãtxa kuĩ, na grafia prática dos professores, para as escolas das aldeias. Para quem já lê um pouco, é o maior texto corrido na língua aberto na internet.',
  },
  {
    titulo: 'Confrontando registros e memórias sobre a língua e a cultura Huni Kuĩ: de Capistrano de Abreu aos dias atuais',
    autor: 'Joaquim Paulo de Lima Kaxinawá (dissertação de mestrado, Universidade de Brasília); cópia do repositório da UnB no Internet Archive',
    ano: 2011,
    url: 'https://web.archive.org/web/20260419075729/https://repositorio.unb.br/bitstream/10482/9318/1/2011_JoaquimPaulodeLimaKaxinawa.pdf',
    tipo: 'tese',
    acesso: 'aberto',
    nivel: 'A1–B1',
    sobre:
      'Uma tabela que passa as palavras de Capistrano para a grafia de hoje, um esboço de gramática com os cinco passados do verbo e três histórias de 1914 (entre elas a do povo sovino) reescritas na grafia atual, palavra por palavra, com tradução.',
  },
  {
    titulo: 'Manifestações da ergatividade em caxinauá (pano)',
    autor: 'Eliane Camargo (LIAMES 5, Unicamp)',
    ano: 2005,
    url: 'https://periodicos.sbu.unicamp.br/ojs/index.php/liames/article/view/1439',
    tipo: 'gramatica',
    acesso: 'aberto',
    nivel: 'A2–B1',
    sobre:
      'Como o huni kuĩ marca quem faz a ação (o “-ã” dos nomes) e como funcionam os pronomes, os casos e as posposições (com, para, de), com exemplos do rio Curanja, no Peru.',
  },
  {
    titulo: 'Hãtxa Kuĩ e Yawanawá, uma apresentação dos povos e línguas',
    autor: 'Amanda Milza Miranda Silva e Fábio Bonfim Duarte (Revista Brasileira de Linguística Antropológica 17)',
    ano: 2025,
    url: 'https://doi.org/10.26512/rbla.v17i1.61005',
    tipo: 'gramatica',
    acesso: 'aberto',
    nivel: 'A1–A2',
    sobre:
      'Um panorama curto do povo, das terras indígenas e dos pronomes do hãtxa kuĩ, comparado ao yawanawá, a partir da tese de Joaquim Kaxinawá. Bom primeiro texto acadêmico.',
  },
  // ---- Dicionários
  {
    titulo: 'Diccionario cashinahua (3ª edição)',
    autor: 'Susan Montag (comp.), Instituto Lingüístico de Verano, Lima; no Internet Archive',
    ano: 2008,
    url: 'https://archive.org/details/cashinahuadiccionario',
    tipo: 'dicionario',
    acesso: 'aberto',
    licenca: 'CC BY-NC-ND 3.0',
    nivel: 'A1–C1',
    sobre:
      'O maior dicionário da língua: cashinahua–espanhol e espanhol–cashinahua, com uma frase de exemplo em quase todo verbete, notas de gramática e nomes de aves. É a variedade do Peru, na grafia de lá (“j” onde o Brasil escreve “h”, “d” onde escreve “r”).',
  },
  {
    titulo: 'Notas gramaticales (apêndice A do Diccionario cashinahua, tomo II)',
    autor: 'Richard Montag, Instituto Lingüístico de Verano; digitalizado pelo Rosetta Project no Internet Archive',
    ano: 1981,
    url: 'https://archive.org/details/rosettaproject_cbs_morsyn-1',
    tipo: 'gramatica',
    acesso: 'aberto',
    nivel: 'A2–B1',
    sobre: 'Um resumo da gramática do cashinahua do Peru, em espanhol: os sufixos e partículas mais frequentes, os pronomes e outros pontos importantes, para usar junto com o dicionário.',
  },
  {
    titulo: 'Hátxa Kuin (dicionário vivo)',
    autor: 'Carlee Schulz com Yube Huni Kuin, na plataforma Living Dictionaries (Living Tongues Institute)',
    url: 'https://livingdictionaries.app/hatxa-kuin',
    tipo: 'dicionario',
    acesso: 'aberto',
    nivel: 'A1',
    sobre: 'Um dicionário on-line em construção, feito com um líder huni kuĩ do Acre, com verbetes em inglês e espanhol. Para reaproveitar o conteúdo, a página pede que se fale antes com a equipe.',
  },
  // ---- Textos da comunidade
  {
    titulo: 'Shenipabu Miyui: história dos antigos',
    autor: 'Professores huni kuĩ (org. Joaquim Paula Mana Kaxinawa e Nietta Lindenberg Monte), Comissão Pró-Índio do Acre',
    ano: 1995,
    url: 'https://cpiacre.org.br/publicacao-acervo/shenipabu-miyui/',
    tipo: 'textos',
    acesso: 'aberto',
    nivel: 'A2–C1',
    sobre: 'As histórias dos antigos gravadas, transcritas e escritas em hãtxa kuĩ e em português por jovens professores huni kuĩ, ao longo de sete anos, para o currículo bilíngue das escolas; traz outra versão do povo sovino. A página da CPI-Acre tem o PDF.',
  },
  {
    titulo: 'Huni Meka: cantos do Nixi Pae',
    autor: 'Professores indígenas da TI Kaxinawá do Rio Jordão (org. Dedê Maia), CPI-Acre e OPIAC',
    ano: 2007,
    url: 'https://cpiacre.org.br/publicacao-acervo/huni-meka-cantos-do-nixi-pae/',
    tipo: 'textos',
    acesso: 'aberto',
    nivel: 'A2–C1',
    sobre:
      'Os cantos do nixi pae transcritos pelos professores, com a história do cipó, depoimentos dos velhos cantadores (txanas) e textos em hãtxa kuĩ e português. Usa a grafia do Jordão, com “d” (“dau”, “dume”).',
  },
  {
    titulo: 'Nũ hiwea inũ, betsa betsapa hiweabu: nossa biodiversidade, nossa vida',
    autor: 'Agentes agroflorestais huni kuĩ (org. Ana Luiza Melgaço e Vera Olinda Sena; tradução de Joaquim Mana Kaxinawá), CPI-Acre',
    ano: 2017,
    url: 'https://cpiacre.org.br/publicacao-acervo/nu-hiwea-inu-betsa-betsapa-hiweabu-nossa-biodiversidade-nossa-vida/',
    tipo: 'textos',
    acesso: 'aberto',
    nivel: 'B1–C1',
    sobre: 'Textos dos agentes agroflorestais sobre a história, os roçados e a mata, primeiro em hãtxa kuĩ e depois em português: bom para ler o mesmo assunto nas duas línguas.',
  },
  {
    titulo: 'Nuku beyakiri yuinaka bushaka xarabu habu samaketi: animais de caça e seus resguardos na cultura huni kuĩ',
    autor: 'Aldemir Luiz Matheus Bina Kaxinawa (revisão do hãtxa kuĩ por Joaquim Mana Huni Kuĩ), AMAAIAC e CPI-Acre',
    ano: 2023,
    url: 'https://cpiacre.org.br/publicacao-acervo/nuku-beyakiri-yuinaka-bushaka-xarabu-habu-samaket-animais-de-caca-e-seus-resguardos-na-cultura-huni-ku%e1%bf%96/',
    tipo: 'textos',
    acesso: 'aberto',
    nivel: 'A2–B2',
    sobre: 'A pesquisa de um agente agroflorestal sobre os animais de caça, com listas de nomes de bichos ilustradas por ele e textos nas duas línguas.',
  },
  {
    titulo: 'Rã-txa hu-ni ku-ĩ: a língua dos caxinauás do rio Ibuaçu, afluente do Muru (textos bilíngues)',
    autor: 'João Capistrano de Abreu (1914); reedição organizada por Eliane Camargo, Editora da Unicamp e Editora Unemat',
    ano: 2016,
    tipo: 'textos',
    acesso: 'pago',
    nivel: 'B1–C2',
    sobre:
      'Milhares de frases e dezenas de histórias de 1914, agora na grafia atual e com tradução: roçado, pesca, festas, mitos e a história do sovino. O maior corpus da língua; livro à venda.',
  },
  // ---- Referência
  {
    titulo: 'Huni Kuin (Kaxinawá)',
    autor: 'Instituto Socioambiental, Povos Indígenas no Brasil',
    url: 'https://pib.socioambiental.org/pt/Povo:Huni_Kuin_(Kaxinaw%C3%A1)',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'O verbete do povo: terras indígenas, história do contato, organização social, rituais e bibliografia.',
  },
  {
    titulo: 'Língua caxinauá',
    autor: 'Wikipédia em português',
    url: 'https://pt.wikipedia.org/wiki/L%C3%ADngua_caxinau%C3%A1',
    tipo: 'site',
    acesso: 'aberto',
    licenca: 'CC BY-SA 4.0',
    nivel: 'A1',
    sobre: 'Um resumo da língua, com sons, pronomes, números e algumas frases, a partir dos trabalhos de Eliane Camargo e Joaquim Kaxinawá.',
  },
  {
    titulo: 'Cashinahua (cash1254)',
    autor: 'Glottolog (Instituto Max Planck de Antropologia Evolutiva)',
    url: 'https://glottolog.org/resource/languoid/id/cash1254',
    tipo: 'site',
    acesso: 'aberto',
    licenca: 'CC BY 4.0',
    nivel: 'todos',
    sobre: 'A classificação da língua na família pano e a lista de tudo o que já se publicou sobre ela, com links para o que está aberto.',
  },
  {
    titulo: 'Cashinahua',
    autor: 'WALS Online (The World Atlas of Language Structures)',
    url: 'https://wals.info/languoid/lect/wals_code_csh',
    tipo: 'site',
    acesso: 'aberto',
    licenca: 'CC BY 4.0',
    nivel: 'A2–C1',
    sobre: 'Os traços da gramática do huni kuĩ comparados com os de centenas de línguas: ordem das palavras, caso ergativo, pronomes, com as fontes.',
  },
];

export const METODOS_CBS: MetodoEnsino[] = [
  {
    nome: 'Escola indígena bilíngue com professores huni kuĩ',
    ondeQuem: 'Escolas das aldeias huni kuĩ do Acre, com professores do próprio povo formados pela Comissão Pró-Índio do Acre e pela OPIAC',
    comoFunciona:
      'Em 2011 eram 80 escolas e 161 professores huni kuĩ, ligados a 13 associações das terras indígenas. Os conhecimentos tradicionais entram como disciplina obrigatória, para os alunos dominarem “os dois conhecimentos”, o huni kuĩ e o dos não indígenas. A escrita das aulas é a grafia prática aprendida na formação da CPI-Acre.',
    fonte:
      'Joaquim Paulo de Lima Kaxinawá, dissertação (UnB, 2011), p. 14 e 20, https://web.archive.org/web/20260419075729/https://repositorio.unb.br/bitstream/10482/9318/1/2011_JoaquimPaulodeLimaKaxinawa.pdf (consultado em 16/10/2026)',
    ideiaApp: 'Ensinar sempre na grafia da escola huni kuĩ (e, x, sh, tx, til) e mostrar, nas lições de cultura, o conhecimento tradicional junto com a língua.',
  },
  {
    nome: 'Professor pesquisador, autor do próprio material',
    ondeQuem: 'Programa de formação “Uma experiência de autoria”, da CPI-Acre, com professores huni kuĩ como Isaías Sales Ibã e Joaquim Paulo Mana Kaxinawá',
    comoFunciona:
      'A pesquisa entra na formação do professor: ele grava os velhos, transcreve os cantos e as histórias e publica livros bilíngues para as escolas, como “Shenipabu Miyui” (1995) e “Huni Meka” (2007). O objetivo declarado é que as músicas e os conhecimentos “façam parte do estudo de línguas nas escolas indígenas”.',
    fonte:
      'Huni Meka: cantos do Nixi Pae (CPI-Acre e OPIAC, 2007), p. 4-5, https://cpiacre.org.br/publicacao-acervo/huni-meka-cantos-do-nixi-pae/; Kaxinawá (2011), p. 13 (consultados em 16/10/2026)',
    ideiaApp: 'Abrir cada unidade com um trecho escrito por um autor huni kuĩ, com o crédito, e usar os livros da CPI-Acre como leituras do B1 em diante.',
  },
  {
    nome: 'Ensino tradicional por faixa de idade',
    ondeQuem: 'Famílias huni kuĩ, com pais, mães e avós como professores',
    comoFunciona:
      'O ensino começa entre os 3 e os 5 anos e segue a idade: o pai ensina o menino, a mãe a menina, e os avós completam o que os pais não ensinaram. A criança aprende indo junto ao roçado, à pesca, às festas; aos quatro ou cinco anos o menino ganha arco e flechas pequenas. O ensino de todos acontece em casa ou no pátio, de madrugada, nas refeições e ao escurecer; o conhecimento específico é passado a uma a três pessoas, na mata.',
    fonte:
      'Kaxinawá (2011), p. 33-34, https://web.archive.org/web/20260419075729/https://repositorio.unb.br/bitstream/10482/9318/1/2011_JoaquimPaulodeLimaKaxinawa.pdf (consultado em 16/10/2026)',
    ideiaApp: 'Lições ligadas a uma atividade (o roçado, a pesca, a festa) e a ideia de que o parentesco se ensina primeiro: como chamar os avós, os tios e o “txai”.',
  },
  {
    nome: 'Uma gramática em duas versões, para a escola',
    ondeQuem: 'A gramática de Joaquim Paulo de Lima Kaxinawá (UnB, 2014), pensada para os professores e alunos huni kuĩ do Brasil',
    comoFunciona:
      'A tese foi escrita em português e também em hãtxa kuĩ, “voltada para as necessidades do meu povo”, e é “abundantemente” ilustrada com exemplos, para servir aos professores da língua nas escolas.',
    fonte:
      'Kaxinawá, Uma gramática da língua Hãtxa Kuĩ (UnB, 2014), p. 16-17, http://web.archive.org/web/20180720071428/http://repositorio.unb.br/bitstream/10482/18984/1/2014_JoaquimPaulodeLimaKaxinaw%c3%a1_Portugu%c3%aas.pdf (consultado em 16/10/2026)',
    ideiaApp: 'Explicar a gramática com os exemplos do próprio Joaquim e, no B1, mostrar as explicações dele em hãtxa kuĩ, para ler a língua falando de si mesma.',
  },
  {
    nome: 'Lições para aprender o cashinahua (Peru)',
    ondeQuem: 'Instituto Lingüístico de Verano, no Peru: “Lecciones para el aprendizaje del idioma cashinahua”, de Susan Montag (1979; 2ª ed. 2004)',
    comoFunciona:
      'Um curso em lições, em espanhol, para quem vai aprender a língua do Purus e do Curanja; o próprio dicionário de Montag recomenda as lições ao estudante. O catálogo do Glottolog registra a obra como gramática de 165 páginas.',
    fonte:
      'Glottolog, referência 15476, https://glottolog.org/resource/reference/id/15476; Montag, Diccionario cashinahua (2008), introdução, https://archive.org/details/cashinahuadiccionario (consultados em 16/10/2026)',
    ideiaApp: 'Um sotaque do Peru com as palavras que mudam de grafia (“juni” e “huni”, “jene” e “hene”), para quem for ao Purus.',
  },
  {
    nome: 'Oficinas para devolver Capistrano ao povo',
    ondeQuem: 'Projeto de documentação do caxinauá (programa DoBeS, 2006-2011), com Eliane Camargo e falantes huni kuĩ do Brasil e do Peru',
    comoFunciona:
      'Os huni kuĩ “pediam para poder ler a língua que estava no livro” de 1914, mas a notação de Capistrano era difícil. Em oficinas chamadas “Capistrano de Abreu” (a primeira na aldeia Mucuripe, no rio Tarauacá, em 2006), falantes e linguista passaram os textos para a grafia atual e revisaram a tradução, até a reedição bilíngue de 2016.',
    fonte:
      'Abreu, Rã-txa hu-ni ku-ĩ (org. Eliane Camargo, Editora da Unicamp e Editora Unemat, 2016), agradecimentos, p. 5-6, amostra no site da editora: https://loja.editoraunicamp.com.br/DynamicItems/Catalog/36989e42-67b6-4e50-868a-7ea12b6abd7620pp-Hantxa_hu-ni_ku-i_W65.pdf (consultado em 16/10/2026)',
    ideiaApp: 'Usar as frases de Capistrano já passadas para a grafia atual como leituras graduadas, sempre com a fonte e a frase de 1914 ao lado.',
  },
];
