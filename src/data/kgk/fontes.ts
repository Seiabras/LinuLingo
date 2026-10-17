import type { FonteEstudo, MetodoEnsino } from '../types';

/**
 * Fontes para estudar kaiowá por conta própria e os jeitos como a língua é ensinada (17/10/2026).
 *
 * Primeiro as que o curso usa: o dicionário de Barros (UFMS, 2014), a tese de Cardoso (Unicamp, 2008), a
 * tese de Eliel Benites (UFGD) e a página do ISA. Cada URL foi aberta com curl em 17/10/2026, conferindo
 * título e responsável na página. O «Dicionário Kaiowá-Português» de Graciela Chamorro (Editora Javali)
 * entra sem link: o site da editora não abriu daqui, e a obra impressa é vendida; a resenha da Revista
 * Brasileira de Linguística Antropológica (CC BY 4.0, aberta em 17/10/2026) diz que uma versão digital
 * foi posta para download gratuito no site da editora em setembro de 2022. Na entrega do B1 (17/10/2026)
 * entraram dois textos corridos, só como leitura: o Novo Testamento em kaiwá (Wycliffe, 2006), cuja página no
 * eBible.org declara a licença CC BY-NC-ND (por isso o curso não copia trechos dele), e o livro escolar «Tekoha
 * vy'a renda» (EdUFGD, 2019), aberto no portal de livros da editora, com todos os direitos reservados. Os trabalhos de John e Audrey Taylor no
 * arquivo do SIL Brasil não entraram porque o site pediu verificação humana e não abriu.
 *
 * Métodos: o Projeto Pedagógico da Licenciatura Intercultural Indígena Teko Arandu (UFGD, 2012, arquivo
 * aberto em 17/10/2026), a resenha de Martins e Amaurílio (RBLA, 2023) e o cap. 3 de Barros (2014).
 */
export const FONTES_KGK: FonteEstudo[] = [
  // ---- Dicionários
  {
    titulo: 'Dicionário bilíngue kaiwá-português',
    autor: 'Eliane Berendina Loman de Barros (dissertação de mestrado, UFMS, Três Lagoas)',
    ano: 2014,
    url: 'https://repositorio.ufms.br/handle/123456789/2029',
    tipo: 'dicionario',
    acesso: 'aberto',
    nivel: 'todos',
    sobre:
      'Dicionário de 1.034 verbetes, cada um com frases de exemplo tiradas de histórias contadas por falantes de Dourados e Panambizinho, e um resumo da gramática (pronomes, prefixos do verbo, negação, posposições). É a base das frases deste curso, na grafia do SIL.',
  },
  {
    titulo: 'Dicionário Kaiowá-Português',
    autor: 'Graciela Chamorro (Editora Javali), com colaboradores kaiowá e guarani',
    ano: 2022,
    tipo: 'dicionario',
    acesso: 'pago',
    nivel: 'todos',
    sobre:
      'O maior dicionário da língua, com cerca de seis mil verbetes, notas culturais e um esboço de gramática de Martins e Cabral. A edição impressa é vendida; segundo uma resenha de 2023, a editora ofereceu uma versão digital gratuita em 2022.',
  },
  // ---- Gramática e descrição
  {
    titulo: 'Aspectos morfossintáticos da língua Kaiowá (Guarani)',
    autor: 'Valéria Faria Cardoso (tese de doutorado, Unicamp; Biblioteca Digital Curt Nimuendajú)',
    ano: 2008,
    url: 'https://www.etnolinguistica.org/tese:cardoso-2008',
    tipo: 'tese',
    acesso: 'aberto',
    nivel: 'A2–B2',
    sobre:
      'A descrição gramatical mais completa do kaiowá: classes de palavras, posse, pronomes, prefixos do verbo, tempo, aspecto, causativo, negação, partículas, orações relativas e adverbiais. No fim há um texto kaiowá glosado palavra por palavra. Os exemplos estão em transcrição fonológica, não na grafia escolar.',
  },
  {
    titulo: 'Kaiwá — inventário fonológico (SAPhon, South American Phonological Inventory Database)',
    autor: 'University of California, Berkeley',
    url: 'https://linguistics.berkeley.edu/saphon/en/inv/Kaiwa.html',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'A1',
    sobre: 'Quadro das consoantes e das doze vogais (seis orais e seis nasais), com a bibliografia: Cardoso (2008) e o artigo de Loraine Bridgeman sobre a fonologia kaiwá (1961).',
  },
  {
    titulo: 'Glottolog: Kaiwá (kaiw1246)',
    autor: 'Glottolog (Max Planck Institute for Evolutionary Anthropology)',
    url: 'https://glottolog.org/resource/languoid/id/kaiw1246',
    tipo: 'site',
    acesso: 'aberto',
    licenca: 'CC BY 4.0',
    nivel: 'todos',
    sobre: 'A ficha da língua na família tupi-guarani, com a bibliografia reunida (gramáticas, dicionários, teses e artigos), para ir além do curso.',
  },
  // ---- Textos e cultura
  {
    titulo: 'A Busca do Teko Araguyje (jeito sagrado de ser) nas retomadas territoriais Guarani e Kaiowá',
    autor: 'Eliel Benites (tese de doutorado, UFGD)',
    ano: 2021,
    url: 'https://repositorio.ufgd.edu.br/jspui/handle/prefix/4591',
    tipo: 'tese',
    acesso: 'aberto',
    nivel: 'B1–C1',
    sobre:
      'Tese de um pesquisador kaiowá sobre o teko araguyje e as retomadas de terra a partir da reserva Te\'yikue, em Caarapó, com relatos dos mais velhos e um glossário de termos kaiowá. Boa para entender as palavras da espiritualidade.',
  },
  {
    titulo: "Nhandejáry Nhe'ẽ — Novo Testamento em kaiwá",
    autor: 'Wycliffe Bible Translators (eBible.org)',
    ano: 2006,
    url: 'https://ebible.org/study/content/texts/kgkNT/about.html',
    tipo: 'textos',
    acesso: 'aberto',
    licenca: 'CC BY-NC-ND',
    nivel: 'B1–C1',
    sobre:
      'O maior texto corrido em kaiwá na internet, na grafia do SIL (nh, gw, kw), com a mesma ortografia deste curso. Bom para ler frases longas e ver as orações ligadas; a licença não permite adaptações.',
  },
  {
    titulo: "Tekoha vy'a renda",
    autor: 'Comitê Editorial Cone Sul, Ação Saberes Indígenas na Escola (Editora da UFGD), com professores guarani e kaiowá da Te\'yikue',
    ano: 2019,
    url: 'https://omp.ufgd.edu.br/livrosabertos/catalog/book/250',
    tipo: 'textos',
    acesso: 'aberto',
    nivel: 'B1–B2',
    sobre:
      'Livro escolar ilustrado, escrito por professores guarani e kaiowá da terra indígena Te\'yikue, em Caarapó: histórias curtas sobre o tekoha, a pesca, a caça e os rituais. As histórias estão em guarani, na grafia paraguaia (ñ, gu, ch), sem tradução; só a apresentação do fim é em português, e um glossário explica as palavras locais com sinônimos em guarani. Um desafio de leitura depois do B1.',
  },
  {
    titulo: 'Guarani Kaiowá — Povos Indígenas no Brasil',
    autor: 'Instituto Socioambiental',
    url: 'https://pib.socioambiental.org/pt/Povo:Guarani_Kaiowá',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'O povo, os tekoha, a organização social, a religião e a história das terras, com bibliografia. Fonte de contexto para as notas de cultura.',
  },
  {
    titulo: 'Língua caiouá (Wikipédia em português)',
    autor: 'Wikipédia (comunidade)',
    url: 'https://pt.wikipedia.org/wiki/L%C3%ADngua_caiou%C3%A1',
    tipo: 'site',
    acesso: 'aberto',
    licenca: 'CC BY-SA 4.0',
    nivel: 'A1',
    sobre: 'Resumo da língua em português: onde é falada, quantos falantes tem, sons, escrita, pronomes e numerais, com base sobretudo em Cardoso (2008).',
  },
  {
    titulo: 'Kaiwá language (Wikipédia em inglês)',
    autor: 'Wikipédia (comunidade)',
    url: 'https://en.wikipedia.org/wiki/Kaiw%C3%A1_language',
    tipo: 'site',
    acesso: 'aberto',
    licenca: 'CC BY-SA 4.0',
    nivel: 'A1',
    sobre: 'Ficha curta em inglês, com a comparação com o pãi-tavyterã do Paraguai e uma amostra da cartilha “Te\'ýi nhe\'ẽ” do SIL.',
  },
];

export const METODOS_KGK: MetodoEnsino[] = [
  {
    nome: 'Ação Saberes Indígenas na Escola: livros feitos pelos professores',
    ondeQuem: 'Professores guarani e kaiowá da terra indígena Te\'yikue (Caarapó, MS), com a Editora da UFGD, na Coleção Saberes Indígenas na Escola',
    comoFunciona:
      'Os próprios professores das escolas da aldeia escrevem livros na língua para as aulas, com as histórias e os saberes da comunidade. O livro “Tekoha vy\'a renda” (2019) apresenta às novas gerações a visão guarani e kaiowá do território tradicional e quer despertar nelas o interesse de continuar conversando com os mais velhos.',
    fonte: 'Editora da UFGD, página do livro «Tekoha vy\'a renda» no Portal de Livros Abertos (omp.ufgd.edu.br/livrosabertos/catalog/book/250), consultada em 17/10/2026',
    ideiaApp: 'Leituras curtas e ilustradas, escritas a partir das histórias da comunidade, com uma pergunta no fim que manda o aluno conversar com alguém mais velho.',
  },
  {
    nome: 'Licenciatura Intercultural Indígena Teko Arandu',
    ondeQuem: 'Universidade Federal da Grande Dourados (UFGD), para professores kaiowá e guarani das escolas das aldeias de Mato Grosso do Sul, desde 2005',
    comoFunciona:
      'O curso se organiza em três eixos: teko (cultura), tekoha (território) e ñe\'ẽ (língua). A seleção tem redação e prova oral em guarani, “considerando suas variações”. O projeto lista os jeitos tradicionais de ensinar dos guarani e kaiowá: a experiência de vida, o exemplo, o aconselhamento e a escuta, o acompanhamento dos mais velhos, o mutirão, a repetição e o domínio das regras do bem falar. Os professores aprendem também a produzir material didático na língua e a liderar a escolha da ortografia da sua comunidade.',
    fonte: 'UFGD, Faculdade Intercultural Indígena, «Projeto Pedagógico do Curso de Licenciatura Intercultural Indígena – Teko Arandu» (2012), pp. 14–21 (files.ufgd.edu.br/arquivos/arquivos/78/COGRAD/PPC_TEKO__REESTRUTURADO__25abril2013.pdf), consultado em 17/10/2026',
    ideiaApp: 'Lições de conversa que imitam o aconselhamento dos mais velhos: o aluno ouve uma frase de um avô ou avó e responde, repetindo até falar bem.',
  },
  {
    nome: 'Magistério indígena e pedagogia intercultural',
    ondeQuem: 'Curso de Magistério Indígena Ára Vera (Secretaria de Educação de Mato Grosso do Sul) e Pedagogia Intercultural (UEMS), além do Teko Arandu',
    comoFunciona:
      'Esses cursos formam os professores que ensinam a língua materna kaiowá e guarani nas escolas das aldeias, do ensino fundamental ao médio. Segundo a resenha, o dicionário de Chamorro passou a ser material de consulta nesses cursos.',
    fonte: 'Andérbio Márcio Silva Martins e Edson Amaurílio, resenha do «Dicionário Kaiowá-Português», Revista Brasileira de Linguística Antropológica, v. 15, 2023, p. 201 (periodicos.unb.br/index.php/ling/article/view/51536), consultada em 17/10/2026',
    ideiaApp: 'Usar o dicionário como companheiro das lições: cada palavra nova com um exemplo de uso tirado de um verbete, como o curso faz com Barros.',
  },
  {
    nome: 'Cartilhas de alfabetização na língua',
    ondeQuem: 'Linguistas do SIL nas aldeias kaiowá de Dourados, a partir dos anos 1960',
    comoFunciona:
      'Os linguistas criaram uma ortografia, testada e modificada antes de ser fixada, e com ela fizeram livros de leitura para alfabetizar na própria língua, como a série “Te\'ýi nhe\'ẽ” (1963), e livros de histórias da cultura kaiowá. A mesma grafia foi usada depois pelo pesquisador Garcia, que passou mais de dez anos reunindo histórias, em “Nhande rembypy” (2001), uma coletânea de histórias kaiowá.',
    fonte: 'Eliane B. L. de Barros, «Dicionário bilíngue kaiwá-português», UFMS, 2014, p. 90 (repositorio.ufms.br/handle/123456789/2029), consultado em 17/10/2026',
    ideiaApp: 'Lições de leitura com histórias curtas da própria cultura, na mesma grafia das lições, para o aluno ler sozinho desde o A2.',
  },
  {
    nome: 'Dicionário feito com falantes de duas sincronias',
    ondeQuem: 'Eliane B. L. de Barros (UFMS), com falantes kaiowá de Dourados e Panambizinho',
    comoFunciona:
      'O dicionário partiu de 65 histórias contadas por 21 falantes, gravadas em 1960 e em 2013, organizadas no programa FLEx. Cada verbete traz exemplos das duas épocas, o que mostra mudanças na língua e os empréstimos do português.',
    fonte: 'Eliane B. L. de Barros, «Dicionário bilíngue kaiwá-português», UFMS, 2014, resumo e cap. 4 (repositorio.ufms.br/handle/123456789/2029), consultado em 17/10/2026',
    ideiaApp: 'Mostrar ao aluno a mesma palavra numa frase antiga e numa recente, para ele perceber que a língua está viva e muda.',
  },
];
