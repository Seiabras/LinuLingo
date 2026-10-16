import type { FonteEstudo, MetodoEnsino } from '../types';

/**
 * Fontes para estudar apache ocidental por conta própria e os jeitos como a língua é ensinada
 * (16/10/2026).
 *
 * Primeiro vêm as que o próprio curso usa: a gramática de De Reuse (2006), base do A2; o Wiktionary e a
 * Wikipédia em inglês, base do A1; e o artigo de De Reuse (1997) sobre livros-texto de apache. Depois,
 * dicionários e textos que a página comunitária @ApacheLanguage reúne (e que a ementa do curso APA 101
 * do San Carlos Apache College indica). Cada URL foi aberta em 16/10/2026 com curl, conferindo título e
 * responsável na própria página. Livros sem página aberta do editor entram sem link, como “pago”.
 * Os métodos vêm da página do Programa de Preservação da Língua Apache de San Carlos, da ementa do APA
 * 101, dos artigos de De Reuse e de Adley-SantaMaria (1997), de uma reportagem da Courthouse News (2023)
 * sobre as aulas em Peridot e da reportagem da Current sobre a rádio KNNB.
 */
export const FONTES_APW: FonteEstudo[] = [
  // ---- Gramática
  {
    titulo: 'A Practical Grammar of the San Carlos Apache Language',
    autor: 'Willem J. de Reuse, com Phillip Goode (Lincom Europa, Munique); resenha de Edward Vajda nas Book Notices da Linguistic Society of America',
    ano: 2006,
    url: 'https://journals.linguisticsociety.org/booknotices/?p=1049',
    tipo: 'gramatica',
    acesso: 'pago',
    nivel: 'A1–B2',
    sobre:
      'A gramática de referência do apache ocidental (569 páginas, variedade de San Carlos): 20 lições com paradigmas, conversas, exercícios e glossários apache-inglês e inglês-apache. É a base do A2 deste curso; a ementa do curso APA 101 do San Carlos Apache College indica uma cópia em PDF.',
  },
  {
    titulo: 'Issues in Language Textbook Development: The Case of Western Apache',
    autor: 'Willem J. de Reuse, em “Teaching Indigenous Languages” (org. Jon Reyhner, Northern Arizona University), via ERIC',
    ano: 1997,
    url: 'https://files.eric.ed.gov/fulltext/ED415069.pdf',
    tipo: 'tese',
    acesso: 'aberto',
    nivel: 'A1–A2',
    sobre: 'Artigo curto sobre como foram feitos dois livros para ensinar apache (um de gramática e tradução, outro de Resposta Física Total), com frases de exemplo e os cuidados culturais dos autores.',
  },
  {
    titulo: 'White Mountain Apache Language: Issues in Language Shift, Textbook Development, and Native Speaker-University Collaboration',
    autor: 'Bernadette Adley-SantaMaria, em “Teaching Indigenous Languages” (org. Jon Reyhner, Northern Arizona University)',
    ano: 1997,
    url: 'https://jan.ucc.nau.edu/~jar/TIL_12.html',
    tipo: 'tese',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'Uma falante de White Mountain conta a perda da língua entre os mais jovens (com números de uma pesquisa na comunidade) e como escreveu um livro-texto com um linguista da Universidade do Arizona.',
  },
  // ---- Dicionários
  {
    titulo: "Dilzhę́'é Apache Dictionary (Dilzhę́'é Biyáti')",
    autor: 'Yavapai-Apache Nation',
    ano: 2023,
    url: 'https://dilzhee.western-apache.org/',
    tipo: 'dicionario',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'Dicionário apache-inglês on-line, com áudio e busca nos dois sentidos; dá para escolher a variedade preferida (White Mountain, Dilzhę́\'é, San Carlos, Cibecue ou Bylas). Tem também aplicativo para celular.',
  },
  {
    titulo: 'Western Apache-English Dictionary: A Community-Generated Bilingual Dictionary',
    autor: 'Dorothy Bray (org.), em colaboração com a Tribo Apache de White Mountain (Bilingual Press/Editorial Bilingüe, Tempe, Arizona)',
    ano: 1998,
    tipo: 'dicionario',
    acesso: 'pago',
    nivel: 'todos',
    sobre: 'O dicionário publicado do apache ocidental, feito com a comunidade de White Mountain: parte apache-inglês, parte inglês-apache e uma introdução sobre o verbo e os verbos de “segurar”.',
  },
  {
    titulo: 'Wiktionary: Western Apache lemmas',
    autor: 'Colaboradores do Wiktionary em inglês',
    url: 'https://en.wiktionary.org/wiki/Category:Western_Apache_lemmas',
    tipo: 'dicionario',
    acesso: 'aberto',
    licenca: 'CC BY-SA 4.0',
    nivel: 'A1–A2',
    sobre: 'Cerca de 500 verbetes de apache ocidental, muitos com a etimologia e as palavras irmãs em navajo e outras línguas apache. É a base do A1 deste curso.',
  },
  // ---- Textos, cursos e áudio
  {
    titulo: '@ApacheLanguage: recursos de apache ocidental',
    autor: 'Página comunitária no Linktree, indicada na ementa do curso APA 101 do San Carlos Apache College',
    url: 'https://linktr.ee/ApacheLanguage',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'Reúne livros infantis em vídeo no dialeto Dilzhę́\'é, aplicativos de vocabulário de San Carlos, os dicionários de 1972 e 1998, o Novo Testamento em apache ocidental, hinos e o teclado para digitar a língua.',
  },
  {
    titulo: 'Dagot’éé? (How Are You?): Dilzhe’e Apache Picture Book',
    autor: 'Livro ilustrado em vídeo no YouTube, listado pela página @ApacheLanguage',
    url: 'https://www.youtube.com/watch?v=x8fh4pJUA7c',
    tipo: 'audio',
    acesso: 'aberto',
    nivel: 'A1',
    sobre: 'Um livro infantil lido em voz alta no dialeto Dilzhę́\'é; bom para ouvir a pronúncia e os tons das saudações.',
  },
  {
    titulo: 'Apache Language Resources',
    autor: 'San Carlos Apache College',
    url: 'https://www.apachecollege.org/apache/',
    tipo: 'curso',
    acesso: 'aberto',
    nivel: 'A1',
    sobre: 'Página do curso de apache da faculdade tribal de San Carlos: como instalar o teclado apache e as gravações das aulas de APA 101 (estas só para alunos matriculados).',
  },
  {
    titulo: 'Syllabus: Apache Language and Culture I (APA 101)',
    autor: 'Monica Loas, San Carlos Apache College',
    ano: 2025,
    url: 'https://www.apachecollege.org/wp-content/uploads/2025/06/APA-101-1-Summer-Syllabus.pdf',
    tipo: 'curso',
    acesso: 'aberto',
    nivel: 'A1',
    sobre: 'Ementa de um curso de apache de oito semanas pelo Zoom: objetivos (entender e escrever frases simples, perguntas, ordens e saudações) e materiais indicados (o dicionário Dilzhę́\'é e a gramática de De Reuse).',
  },
  {
    titulo: 'Keyboards (Nḏéé Biyáti’, APW)',
    autor: 'Languagegeek',
    url: 'https://languagegeek.com/lgwp/keyboards/',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'Teclado para Windows e Mac com as letras do apache ocidental (ł, ṉ, vogais com gancho e acentos), o mesmo que o San Carlos Apache College instala nos computadores.',
  },
  // ---- Cultura e etnografia
  {
    titulo: 'Wisdom Sits in Places: Landscape and Language Among the Western Apache',
    autor: 'Keith H. Basso (University of New Mexico Press, Albuquerque)',
    ano: 1996,
    tipo: 'textos',
    acesso: 'pago',
    nivel: 'B1+',
    sobre: 'Estudo clássico, em inglês, dos nomes de lugares em Cibecue e das histórias que eles carregam; muitas palavras e frases em apache, com guia de pronúncia.',
  },
  {
    titulo: 'Western Apache Language and Culture: Essays in Linguistic Anthropology',
    autor: 'Keith H. Basso (University of Arizona Press, Tucson)',
    ano: 1990,
    url: 'https://uapress.arizona.edu/author/keith-h-basso',
    tipo: 'tese',
    acesso: 'pago',
    nivel: 'B1+',
    sobre: 'Sete ensaios sobre a língua em Cibecue: os verbos classificatórios, as palavras novas vindas do contato com o inglês, a escrita criada por Silas John, as metáforas, o silêncio na conversa e os nomes de lugares.',
  },
  {
    titulo: 'Western Apache language',
    autor: 'Colaboradores da Wikipédia em inglês',
    url: 'https://en.wikipedia.org/wiki/Western_Apache_language',
    tipo: 'site',
    acesso: 'aberto',
    licenca: 'CC BY-SA 4.0',
    nivel: 'todos',
    sobre: 'Resumo da língua: falantes, dialetos (os cinco grupos de Goodwin: Cibecue, Tonto do Norte, Tonto do Sul, San Carlos e White Mountain), sons, a escrita de Silas John e os verbos classificatórios.',
  },
  {
    titulo: 'Glottolog: Western Apache',
    autor: 'Hammarström, Forkel, Haspelmath e Bank (Instituto Max Planck)',
    url: 'https://glottolog.org/resource/languoid/id/west2615',
    tipo: 'site',
    acesso: 'aberto',
    licenca: 'CC BY 4.0',
    nivel: 'todos',
    sobre: 'Classificação da língua entre as atabascanas meridionais e a lista de referências (gramáticas, dicionários, artigos).',
  },
  {
    titulo: 'Grambank: Western Apache',
    autor: 'Grambank (Instituto Max Planck de Antropologia Evolutiva)',
    url: 'https://grambank.clld.org/languages/west2615',
    tipo: 'gramatica',
    acesso: 'aberto',
    licenca: 'CC BY 4.0',
    nivel: 'todos',
    sobre: 'Ficha com traços gramaticais do apache ocidental (ordem das palavras, prefixos, plural…), cada um com a fonte.',
  },
  {
    titulo: 'Apache Language and the Apache Indian Tribe',
    autor: 'Native Languages of the Americas',
    url: 'https://www.native-languages.org/apache.htm',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'A1',
    sobre: 'Página com links sobre as línguas apache: uma lista de palavras de jicarila e apache ocidental comparadas a outras línguas atabascanas, guias de pronúncia e vídeos.',
  },
];

export const METODOS_APW: MetodoEnsino[] = [
  {
    nome: 'Mestre e aprendiz, com imersão',
    ondeQuem: 'Programa de Preservação da Língua Apache de San Carlos (Tribo Apache de San Carlos)',
    comoFunciona:
      'O programa montou um esquema comunitário de mestre e aprendiz, com imersão e Resposta Física Total, para dar fluência. Também fez um currículo apache das estações do ano, um acervo digital da língua e entrevistas com os mais velhos sobre as atividades tradicionais. Jovens e idosos trabalham juntos num dicionário de San Carlos, e há aulas gratuitas para as famílias.',
    fonte: 'San Carlos Apache Language Preservation Program, página do Office of the Chairman, https://www.chairmanterryrambler.org/?p=2476 (consultado em 16/10/2026)',
    ideiaApp: 'Lições organizadas pelas estações e atividades do ano, e tarefas que peçam ao aluno aprender uma palavra com um falante mais velho.',
  },
  {
    nome: 'Aulas de apache na escola',
    ondeQuem: 'San Carlos High School, em Peridot (Reserva Apache de San Carlos), e professores da primeira infância',
    comoFunciona:
      'A professora Joyce Johnson dá seis aulas de apache por dia e incentiva os alunos a falar apache com os pais e os avós. A reportagem conta que, dos cerca de 350 alunos do ensino médio, só um é fluente, e que a maioria dos falantes fluentes tem mais de 50 anos. Professores e empresas também fizeram versões em apache de jogos conhecidos.',
    fonte: 'Courthouse News Service, “After centuries of erasure, Native tribes fight to preserve culture through language” (2023), https://www.courthousenews.com/after-centuries-of-erasure-native-tribes-fight-to-preserve-culture-through-language/ (consultado em 16/10/2026)',
    ideiaApp: 'Desafios de conversa para fazer em casa, com uma frase da lição para dizer a alguém mais velho da família.',
  },
  {
    nome: 'Curso universitário APA 101',
    ondeQuem: 'San Carlos Apache College, curso “Apache Language and Culture I”, oito semanas pelo Zoom',
    comoFunciona:
      'Não há livro obrigatório: a presença e as anotações em aula são essenciais, e as câmeras ficam ligadas. A nota vem de presença, tarefas (incluindo a “pergunta da semana” em Nḏēē Biyáti’), provinhas e prova final. Os objetivos são entender e escrever frases simples, pronunciar expressões básicas e entender perguntas, ordens e saudações. Como apoio, a ementa indica o dicionário Dilzhę́\'é on-line e a gramática de De Reuse.',
    fonte: 'Monica Loas, “Syllabus: Apache Language and Culture I” (San Carlos Apache College, 2025), https://www.apachecollege.org/wp-content/uploads/2025/06/APA-101-1-Summer-Syllabus.pdf (consultado em 16/10/2026)',
    ideiaApp: 'Uma “pergunta da semana” em apache na tela inicial, com a resposta escrita pelo aluno na comunidade.',
  },
  {
    nome: 'Resposta Física Total (ordens para um, dois ou vários)',
    ondeQuem: 'Guia de Phillip Goode (1996), com frases de San Carlos gravadas em fita, comentado por Willem de Reuse',
    comoFunciona:
      'O professor dá ordens e os alunos as cumprem com o corpo. Em apache, a ordem muda conforme quantas pessoas a recebem: “hizįįh” (levante-se, para uma pessoa), “hołsįįh” (para duas), “dahołsįįh” (para três ou mais). De Reuse recomenda ensinar os verbos classificatórios com gramática e usar a Resposta Física Total para revisar. E alerta que tocar e apontar para o corpo dos outros costuma ser culturalmente inadequado entre os apaches.',
    fonte: 'Willem J. de Reuse, “Issues in Language Textbook Development: The Case of Western Apache” (1997), p. 124, https://files.eric.ed.gov/fulltext/ED415069.pdf; De Reuse (2006), p. 343 (consultados em 16/10/2026)',
    ideiaApp: 'Exercícios de ordens com figuras de uma, duas ou várias pessoas, para o aluno escolher a forma certa do verbo.',
  },
  {
    nome: 'Livro-texto com conversas feitas por falantes',
    ondeQuem: 'Ndee biyáti’ bígoch’il’aah (Willem de Reuse e Bernadette Adley-SantaMaria) e a gramática de San Carlos (De Reuse e Phillip Goode)',
    comoFunciona:
      'O livro ensina conversa, leitura e escrita pelo método de gramática e tradução, com as dez últimas lições em conversas do dia a dia, traduzidas linha a linha e comentadas. As conversas foram escritas por educadores apaches de San Carlos e adaptadas para White Mountain. O linguista nunca criou frases sozinho, e os autores evitaram temas culturalmente delicados. Na gramática de 2006, cada lição tem exercícios para quem aprende e outros para falantes nativos.',
    fonte: 'De Reuse (1997), p. 120–123, https://files.eric.ed.gov/fulltext/ED415069.pdf; Adley-SantaMaria (1997), https://jan.ucc.nau.edu/~jar/TIL_12.html (consultados em 16/10/2026)',
    ideiaApp: 'Usar só frases de falantes (nunca montar à toa) e marcar, nas lições, o que é cultural e deve ser tratado com respeito.',
  },
  {
    nome: 'Rádio na língua',
    ondeQuem: 'KNNB 88.1 FM, rádio pública de Whiteriver, na Reserva Apache de White Mountain',
    comoFunciona:
      'A rádio, da Apache Radio Broadcasting Corporation, tem programas locais e lê a Bíblia em apache aos domingos. Durante um incêndio, os mais velhos falaram em apache no ar, dando informações sobre o fogo. Um apresentador voluntário criou um noticiário em apache, e parte da comunidade vê a rádio como um meio de salvar a língua; a dificuldade é que muitos ouvintes com menos de 40 anos não são fluentes.',
    fonte: 'KNNB, Wikipédia em inglês, https://en.wikipedia.org/wiki/KNNB; “Friction and smoke at Whiteriver”, Current, https://current.org/?p=17016 (consultados em 16/10/2026)',
    ideiaApp: 'Exercícios de escuta curtos, no formato de aviso de rádio, com frases do dia a dia.',
  },
  {
    nome: 'Livros infantis, aplicativos e teclado',
    ondeQuem: 'Yavapai-Apache Nation e a página comunitária @ApacheLanguage',
    comoFunciona:
      'Livros ilustrados no dialeto Dilzhę́\'é são lidos em voz alta em vídeos (saudações, almoço, família, tempo). O dicionário on-line e o aplicativo deixam escolher a variedade da língua, e há aplicativos de vocabulário de San Carlos e um teclado com todas as letras do apache.',
    fonte: 'https://linktr.ee/ApacheLanguage e https://dilzhee.western-apache.org/ (consultados em 16/10/2026)',
    ideiaApp: 'Mostrar que a mesma palavra muda de uma comunidade para outra (San Carlos, White Mountain, Cibecue), como o dicionário faz.',
  },
];
