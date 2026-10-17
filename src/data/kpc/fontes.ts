import type { FonteEstudo, MetodoEnsino } from '../types';

/**
 * Fontes para estudar baniwa por conta própria e os jeitos como a língua é ensinada (17/10/2026).
 *
 * Primeiro vêm as que o próprio curso usa: o dicionário e a gramática de Henri Ramirez (2001), base do
 * A2, abertos na Biblioteca Digital Curt Nimuendajú; depois a Wikipédia, o ISA e o Wiktionary, base do
 * A1. Cada URL foi aberta em 17/10/2026 com curl, conferindo título e responsável na própria página.
 * Livros sem página aberta entram sem link, como “pago” ou “biblioteca”. A licença só aparece quando a
 * página a declara para a obra (a da Biblioteca Curt Nimuendajú vale para o site, não para os livros).
 * Os métodos vêm da página do ISA sobre a Escola Pamáali (2018), do texto da Lei 145/2002 de São
 * Gabriel da Cachoeira (na versão da Universidade Laval), da introdução e do guia de pronúncia do
 * dicionário de Ramirez e do artigo de Artur Garcia Gonçalves (2025) sobre o dicionário bidialetal.
 */
export const FONTES_KPC: FonteEstudo[] = [
  // ---- Dicionário e gramáticas
  {
    titulo: 'Dicionário da Língua Baniwa',
    autor: 'Henri Ramirez (Editora da Universidade do Amazonas, Manaus); arquivo cedido pelo autor à Biblioteca Digital Curt Nimuendajú',
    ano: 2001,
    url: 'http://www.etnolinguistica.org/biblio:ramirez-2001-dicionario',
    tipo: 'dicionario',
    acesso: 'aberto',
    nivel: 'A1–B2',
    sobre:
      'Mais de 10 mil verbetes baniwa-português, com muitas frases de exemplo, as diferenças dos outros dialetos, um léxico português-baniwa, um guia de pronúncia, um resumo gramatical e os termos de parentesco. É a base do A2 deste curso; escreve “o” onde o curso escreve “u”.',
  },
  {
    titulo: 'Línguas Arawak da Amazônia Setentrional: Comparação e Descrição',
    autor: 'Henri Ramirez (Editora da Universidade do Amazonas, Manaus), na Biblioteca Digital Curt Nimuendajú',
    ano: 2001,
    url: 'http://www.etnolinguistica.org/biblio:ramirez-2001-arawak',
    tipo: 'gramatica',
    acesso: 'aberto',
    nivel: 'A2–B2',
    sobre:
      'O capítulo 2 é uma gramática descritiva do baniwa-curripaco com quase 200 páginas: sons, acento, classes de palavras, prefixos e sufixos, tempo e aspecto, classificadores, demonstrativos e orações. Usa uma escrita mais técnica que a do dicionário.',
  },
  {
    titulo: 'Enciclopédia das Línguas Arawak, acrescida de seis novas línguas e dois bancos de dados',
    autor: 'Henri Ramirez (Editora CRV, Curitiba), 4 volumes; anúncio de Denny Moore na LINGUIST List',
    ano: 2020,
    url: 'https://linguistlist.org/issues/32/1368/',
    tipo: 'gramatica',
    acesso: 'pago',
    nivel: 'B1–B2',
    sobre: 'O volume I traz uma versão nova da gramática baniwa-koripako de 2001. Livro e e-book à venda; o link é o anúncio da obra.',
  },
  {
    titulo: 'Introdução à língua baniwa do Içana',
    autor: 'Gerald Taylor (Editora da Unicamp, Campinas)',
    ano: 1991,
    tipo: 'gramatica',
    acesso: 'biblioteca',
    nivel: 'A1–A2',
    sobre: 'Uma das primeiras descrições do baniwa do Içana. Ramirez e os estudos recentes ainda a citam.',
  },
  // ---- Artigos e pesquisas
  {
    titulo: 'A construção de dicionário bilíngue e bidialetal para a língua Medzeniakonai (Baniwa-Koripako)',
    autor: 'Artur Garcia Gonçalves, Cadernos de Linguística (Abralin), v. 6, n. 3',
    ano: 2025,
    url: 'https://cadernos.abralin.org/index.php/cadernos/article/view/788',
    tipo: 'tese',
    acesso: 'aberto',
    licenca: 'CC BY 4.0',
    nivel: 'todos',
    sobre: 'Como está sendo feito um dicionário baniwa-koripako-português coletivo, com os dois dialetos lado a lado (parte de uma tese da UnB, 2023). Traz a bibliografia da língua no Brasil, na Colômbia e na Venezuela.',
  },
  {
    titulo: 'Classifiers in multiple environments: Baniwa of Içana/Kurripako — a North Arawak perspective',
    autor: 'Alexandra Y. Aikhenvald, International Journal of American Linguistics, v. 73, p. 475–500; registro no repositório da James Cook University',
    ano: 2007,
    url: 'https://researchonline.jcu.edu.au/8737/',
    tipo: 'tese',
    acesso: 'pago',
    nivel: 'B1–B2',
    sobre: 'Artigo em inglês sobre os classificadores do baniwa: onde eles aparecem (numerais, adjetivos, demonstrativos, verbos) e o que marcam. O texto completo é restrito.',
  },
  // ---- Dicionários abertos e referências
  {
    titulo: 'Wiktionary: Baniwa lemmas',
    autor: 'Colaboradores do Wiktionary em inglês',
    url: 'https://en.wiktionary.org/wiki/Category:Baniwa_lemmas',
    tipo: 'dicionario',
    acesso: 'aberto',
    licenca: 'CC BY-SA 4.0',
    nivel: 'A1',
    sobre: 'Só dois verbetes de baniwa, em inglês: “uni” (água) e “éeno” (céu). Foram usados no começo do A1 deste curso.',
  },
  {
    titulo: 'Língua baniua',
    autor: 'Colaboradores da Wikipédia em português',
    url: 'https://pt.wikipedia.org/wiki/L%C3%ADngua_baniwa',
    tipo: 'site',
    acesso: 'aberto',
    licenca: 'CC BY-SA 4.0',
    nivel: 'A1',
    sobre: 'Artigo longo, baseado em Ramirez e Taylor: alfabeto, pronomes, prefixos, numerais, perguntas, negação e trechos de contos. Foi a base do A1 deste curso.',
  },
  {
    titulo: 'Baniwa do Içana (bani1255)',
    autor: 'Glottolog, Instituto Max Planck de Antropologia Evolutiva',
    url: 'https://glottolog.org/resource/languoid/id/bani1255',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'A ficha da língua no catálogo Glottolog: a classificação dentro da família aruak, os dialetos e a lista de livros e artigos sobre o baniwa.',
  },
  // ---- Povo, escola e política linguística
  {
    titulo: 'Baniwa — Povos Indígenas no Brasil',
    autor: 'Instituto Socioambiental (ISA)',
    url: 'https://pib.socioambiental.org/pt/Povo:Baniwa',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'A enciclopédia do ISA sobre o povo baniwa: território, fratrias, cosmologia, festas, organizações e educação. Ajuda a entender as palavras de cultura do curso.',
  },
  {
    titulo: 'Acervo ISA',
    autor: 'Instituto Socioambiental (ISA)',
    url: 'https://acervo.socioambiental.org/',
    tipo: 'textos',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'O acervo do ISA, com livros, teses, mapas e notícias do rio Negro. É onde procurar os livros bilíngues feitos com a FOIRN e as escolas indígenas.',
  },
  {
    titulo: 'FOIRN — Federação das Organizações Indígenas do Rio Negro',
    autor: 'FOIRN, São Gabriel da Cachoeira (AM)',
    url: 'https://www.foirn.org.br/',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'Site da federação dos povos do rio Negro, entre eles os baniwa e os coripaco, com notícias e as publicações da região.',
  },
  {
    titulo: 'Lei nº 145, de 11 de dezembro de 2002 (São Gabriel da Cachoeira)',
    autor: 'Câmara Municipal de São Gabriel da Cachoeira; texto em português e tradução francesa de Jacques Leclerc (Universidade Laval)',
    ano: 2002,
    url: 'https://www.axl.cefan.ulaval.ca/amsudant/bresil-loi-St-Gabriel-2002.htm',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'A lei que tornou o baniwa, o nheengatu e o tukano línguas cooficiais do município, ao lado do português.',
  },
];

export const METODOS_KPC: MetodoEnsino[] = [
  {
    nome: 'Ensino via pesquisa na Escola Pamáali',
    ondeQuem: 'Escola Indígena Baniwa e Coripaco Pamáali, no rio Içana (Terra Indígena Alto Rio Negro), para alunos dos ensinos fundamental e médio',
    comoFunciona:
      'Fundada em 2000, a escola ensina pela pesquisa: parte do conhecimento tradicional e dialoga com o conhecimento acadêmico. Os alunos estudam temas como as histórias de origem dos baniwa e coripaco, a medicina indígena e o manejo de recursos. O MEC a reconheceu como referência em inovação na educação básica.',
    fonte: 'Instituto Socioambiental, “Ajude a Escola Indígena Pamáali, no Alto Rio Negro, voltar a funcionar!” (19/02/2018), https://site-antigo.socioambiental.org/en/print/5913, consultado em 17/10/2026',
    ideiaApp:
      'Propor, no fim de cada unidade, uma pequena pesquisa: perguntar a alguém da família como se diz uma palavra da lição e trazer a resposta para a comunidade do app.',
  },
  {
    nome: 'Língua cooficial no município',
    ondeQuem: 'Prefeitura e escolas de São Gabriel da Cachoeira (AM), desde 2002',
    comoFunciona:
      'A Lei 145/2002 tornou o baniwa cooficial, com o nheengatu e o tukano. O município deve atender o público nessas línguas, oralmente e por escrito, produzir documentos e campanhas nelas e incentivar seu ensino nas escolas e seu uso nos meios de comunicação.',
    fonte: 'Lei nº 145/2002 de São Gabriel da Cachoeira, texto e tradução em https://www.axl.cefan.ulaval.ca/amsudant/bresil-loi-St-Gabriel-2002.htm, consultado em 17/10/2026',
    ideiaApp: 'Um cenário de conversa num balcão de atendimento público em São Gabriel, com as fórmulas de saudação e agradecimento do dicionário.',
  },
  {
    nome: 'Treino de pronúncia por pares de palavras',
    ondeQuem: 'Guia de pronúncia do dicionário de Henri Ramirez, escrito para professores baniwa e curripaco e para quem quer aprender a língua',
    comoFunciona:
      'O guia pede que o leitor “treine” pares de palavras que só mudam num som: “táara” (duro) e “tháara” (mariposa), “íita” (canoa) e “íitta” (fumaça), vogal curta e longa como “káana” (milho) e “káanaa” (aguado). A introdução diz que o livro serve para consulta ou como método sistemático de aprendizagem.',
    fonte: 'Henri Ramirez, “Dicionário da Língua Baniwa” (2001), p. 1–7, em http://www.etnolinguistica.org/biblio:ramirez-2001-dicionario, consultado em 17/10/2026',
    ideiaApp: 'Um exercício de escuta com pares mínimos do guia: o aluno ouve uma palavra e escolhe entre a consoante simples e a com sopro, ou entre a vogal curta e a longa.',
  },
  {
    nome: 'Dicionário coletivo e com dois dialetos',
    ondeQuem: 'Projeto de dicionário baniwa-koripako-português feito com as comunidades do rio Içana (tese da UnB, 2023)',
    comoFunciona:
      'O dicionário é feito em coletivo, com falantes das comunidades, e põe lado a lado as palavras do baniwa e do koripako, os dois dialetos da mesma língua, em vez de escolher um só.',
    fonte: 'Artur Garcia Gonçalves, Cadernos de Linguística 6(3), 2025, https://cadernos.abralin.org/index.php/cadernos/article/view/788, consultado em 17/10/2026',
    ideiaApp:
      'Mostrar a forma koripako ao lado da baniwa quando ela muda de jeito regular, como o “dz” que vira “y” (“dzáawi” e “yáawi”, onça, no dicionário de Ramirez, p. 5).',
  },
];
