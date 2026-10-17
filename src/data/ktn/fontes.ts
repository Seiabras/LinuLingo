import type { FonteEstudo, MetodoEnsino } from '../types';

/**
 * Fontes para estudar karitiana por conta própria e os jeitos como a língua é ensinada (17/10/2026).
 *
 * Primeiro vêm as que o próprio curso usa no A2 (citadas com página em vocabulario, gramatica,
 * curriculo e historias): a tese de Storto (1999), o capítulo de Storto e Rocha sobre estrutura
 * argumental, o artigo de Storto sobre subordinação, a dissertação de Marques de Carvalho (2010) e o
 * léxico ilustrado “Gopi Yjxa” (2020). Depois, a narrativa “Gokyp” publicada por Storto com Garcia e
 * Nelson Karitiana (2019), o artigo da Wikipédia que é a base do A1 e os bancos de dados que listam a
 * língua. Cada URL foi aberta em 17/10/2026 com curl, conferindo título e responsável na própria
 * página. O dicionário de David Landin (SIL) e a tese de Caleb Everett entram sem link: as páginas do
 * SIL Brasil e do repositório da Rice estavam fora do ar ou bloqueadas para leitura automática nesse
 * dia. Os métodos vêm da introdução de Storto (2019, pp. 419–420), do resumo da dissertação de Ciola
 * (2019) e dos créditos do próprio “Gopi Yjxa”.
 */
export const FONTES_KTN: FonteEstudo[] = [
  // ---- Gramáticas e descrições
  {
    titulo: 'Aspects of a Karitiana Grammar',
    autor: 'Luciana R. Storto (tese de doutorado, MIT, orientação de Kenneth Hale)',
    ano: 1999,
    url: 'https://dspace.mit.edu/handle/1721.1/9702',
    tipo: 'tese',
    acesso: 'aberto',
    nivel: 'A2–B2',
    sobre:
      'A descrição de referência do karitiana: sons, acento e tom, ordem das palavras, concordância e foco, com centenas de frases glosadas em inglês. É a base do A2 deste curso (perguntas “quem?” e “o quê?”, futuro e não futuro).',
  },
  {
    titulo: 'Estrutura Argumental na Língua Karitiana',
    autor: 'Luciana Storto e Ivan Rocha (Departamento de Linguística, USP)',
    url: 'https://linguistica.fflch.usp.br/sites/linguistica.fflch.usp.br/files/inline-files/Estrutura%20Argumental%20na%20L%C3%ADngua%20Karitiana.pdf',
    tipo: 'tese',
    acesso: 'aberto',
    nivel: 'A2–B1',
    sobre:
      'Capítulo em português com um panorama da gramática e as tabelas de 170 verbos testados por Rocha (2011), cada um com a tradução: ótimo para aprender verbos e ver o declarativo, o assertivo, o causativo e a passiva lado a lado.',
  },
  {
    titulo: 'Subordination in Karitiana',
    autor: 'Luciana Storto (Amerindia 35, Paris)',
    ano: 2012,
    url: 'https://linguistica.fflch.usp.br/sites/linguistica.fflch.usp.br/files/inline-files/Subordination%20in%20Karitiana.pdf',
    tipo: 'tese',
    acesso: 'aberto',
    nivel: 'A2–B1',
    sobre:
      'Artigo em inglês sobre as orações de “quando”, “antes” e “depois” (tykiri, kit, byyk), os auxiliares de postura e as orações relativas, com exemplos glosados frase a frase.',
  },
  {
    titulo: 'O auxiliar aspectual Tyka do Karitiana',
    autor: 'Andrea Marques de Carvalho (dissertação de mestrado, USP)',
    ano: 2010,
    url: 'https://teses.usp.br/teses/disponiveis/8/8139/tde-25082010-144136/pt-br.html',
    tipo: 'tese',
    acesso: 'aberto',
    nivel: 'A2–B1',
    sobre:
      'Dissertação em português que resume a morfologia do verbo (pessoa, modo, tempo, evidenciais) e explica os auxiliares que dizem a posição do corpo (tyka, tyja, tyso, tysyp), com muitas frases glosadas.',
  },
  {
    titulo: 'Patterns in Karitiana: Articulation, Perception, and Grammar',
    autor: 'Caleb Everett (tese de doutorado, Rice University)',
    ano: 2006,
    tipo: 'tese',
    acesso: 'biblioteca',
    nivel: 'A2–B2',
    sobre:
      'A segunda grande descrição da língua, sobre os sons e a percepção (primeira parte) e a morfologia e a sintaxe (segunda parte); é uma das fontes do artigo da Wikipédia em que se apoia o A1.',
  },
  // ---- Dicionários e vocabulários
  {
    titulo: 'Gopi Yjxa. Léxico ilustrado pedagógico karitiana: plantas e animais',
    autor: 'Lucas Blaud Ciola (edição de Ana Müller; levantamento de Cizino Dantas Morais Karitiana; textos de professores karitiana), Editora Curt Nimuendajú',
    ano: 2020,
    url: 'https://anamuller.fflch.usp.br/sites/anamuller.fflch.usp.br/files/inline-files/GOPI%20YJXA%20-%20L%C3%A9xico%20ilustrado%20pedag%C3%B3gico%20karitiana_plantas%20e%20animais.pdf',
    tipo: 'dicionario',
    acesso: 'aberto',
    nivel: 'A1–B1',
    sobre:
      'Livro ilustrado feito para a escola karitiana: plantas da floresta e da roça, caças, peixes, pássaros e insetos, cada um com o nome em karitiana, um texto curto na língua e a tradução em português no fim. É a base do A2.2 deste curso.',
  },
  {
    titulo: 'Léxico ilustrado pedagógico de plantas e animais Karitiana',
    autor: 'Lucas Blaud Ciola (dissertação de mestrado, USP, orientação de Ana Lúcia de Paula Müller)',
    ano: 2019,
    url: 'https://teses.usp.br/teses/disponiveis/8/8139/tde-28022020-145739/pt-br.html',
    tipo: 'tese',
    acesso: 'aberto',
    nivel: 'A1–B1',
    sobre:
      'A pesquisa por trás do “Gopi Yjxa”: como o léxico foi feito com anciãos, lideranças, agricultores e professores da aldeia Kyõwã, com os nomes científicos das espécies.',
  },
  {
    titulo: 'Dicionário e léxico karitiana/português',
    autor: 'David Landin (Summer Institute of Linguistics); 1ª edição em 1983',
    ano: 2005,
    tipo: 'dicionario',
    acesso: 'biblioteca',
    nivel: 'todos',
    sobre:
      'O primeiro dicionário da língua, feito pelos missionários do SIL. Storto e Rocha avisam que algumas informações sobre os verbos diferem das pesquisas mais novas: vale conferir nas descrições da USP.',
  },
  // ---- Textos
  {
    titulo: 'Karitiana – Gokyp – O Sol',
    autor: 'Luciana R. Storto, Garcia Karitiana (narrador) e Nelson Karitiana (colaborador), Revista Linguíʃtica (UFRJ), v. 15, n. 1',
    ano: 2019,
    url: 'https://revistas.ufrj.br/index.php/rl/article/view/25577',
    tipo: 'textos',
    acesso: 'aberto',
    nivel: 'B1–B2',
    licenca: 'CC BY-NC 4.0',
    sobre:
      'O mito da origem do sol, contado por Garcia Karitiana em 1992, em 53 frases com a transcrição, a glosa de cada pedaço da palavra e a tradução em português e inglês. A introdução conta a história da escrita e da escola karitiana. Boa leitura depois do A2.',
  },
  // ---- Sites e bancos de dados
  {
    titulo: 'Língua caritiana',
    autor: 'Colaboradores da Wikipédia em português',
    url: 'https://pt.wikipedia.org/wiki/L%C3%ADngua_caritiana',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'A1',
    licenca: 'CC BY-SA 4.0',
    sobre:
      'Artigo longo, com fonologia, ortografia, pronomes, numerais, negação, frases glosadas e um léxico por temas, citando Storto e Everett. É a base do A1 deste curso.',
  },
  {
    titulo: 'Karitiana',
    autor: 'Instituto Socioambiental, Povos Indígenas no Brasil',
    url: 'https://pib.socioambiental.org/pt/Povo:Karitiana',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'Verbete sobre o povo: história do contato, aldeias, organização social, cosmologia (Botyj̃) e as casas redondas tradicionais. Ajuda a entender o contexto das palavras.',
  },
  {
    titulo: 'Karitiâna',
    autor: 'Glottolog (Max Planck Institute for Evolutionary Anthropology)',
    url: 'https://glottolog.org/resource/languoid/id/kari1311',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'Ficha da língua no Glottolog, com a classificação (Tupi > Arikém) e a bibliografia completa: o melhor ponto de partida para achar mais artigos.',
  },
  {
    titulo: 'Wordlist Karitiana',
    autor: 'The ASJP Database',
    url: 'https://asjp.clld.org/languages/KARITIANA',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'A1',
    sobre: 'Lista curta de palavras básicas (corpo, natureza, pronomes) numa transcrição padronizada, útil para comparar o karitiana com outras línguas.',
  },
  {
    titulo: 'Storto 1999 (inventário de sons)',
    autor: 'PHOIBLE 2.0',
    url: 'https://phoible.org/sources/2091_storto1999',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'O inventário de consoantes e vogais do karitiana tirado da tese de Storto, em símbolos fonéticos: bom para quem quer saber exatamente como cada letra soa.',
  },
];

export const METODOS_KTN: MetodoEnsino[] = [
  {
    nome: 'Alfabetização na língua e livro da escola',
    ondeQuem: 'Aldeia central da Terra Indígena Karitiana; projeto coordenado por Luciana Storto pelo Museu Paraense Emílio Goeldi (1994–1997)',
    comoFunciona:
      'O projeto ensinou a ortografia a um terço das pessoas com mais de 10 anos. A comunidade construiu uma “casa da língua” para as aulas, e o material didático feito para o projeto, com mais de 100 páginas, é usado até hoje na escola para ensinar a escrever e ler em karitiana.',
    fonte: 'Luciana R. Storto, Garcia Karitiana e Nelson Karitiana, “Karitiana – Gokyp – O Sol”, Revista Linguíʃtica 15(1), 2019, pp. 419–420, https://revistas.ufrj.br/index.php/rl/article/view/25577 (consultado em 17/10/2026)',
    ideiaApp: 'Uma lição de leitura que comece pelas letras próprias da ortografia karitiana (y, nh, o apóstrofo, o til), antes das palavras.',
  },
  {
    nome: 'Material didático feito com a comunidade',
    ondeQuem: 'Escola indígena da reserva karitiana (aldeia Kyõwã), com pesquisadores da USP',
    comoFunciona:
      'O léxico “Gopi Yjxa” saiu de uma pesquisa participante com anciãos, lideranças, agricultores-extrativistas e professores da escola. Cizino Dantas Morais Karitiana fez o levantamento das espécies, os professores escreveram os textos numa oficina, e o livro mostra cada bicho numa cadeia de “quem come quem”.',
    fonte: 'Resumo da dissertação de Lucas Blaud Ciola (USP, 2019), https://teses.usp.br/teses/disponiveis/8/8139/tde-28022020-145739/pt-br.html, e créditos de “Gopi Yjxa” (2020) (consultados em 17/10/2026)',
    ideiaApp: 'Lições de vocabulário em cadeia (a fruta, o bicho que come a fruta, quem caça o bicho), como as páginas do livro.',
  },
  {
    nome: 'Professores karitiana formados e ensino fundamental na aldeia',
    ondeQuem: 'Aldeia central da Terra Indígena Karitiana',
    comoFunciona:
      'A aldeia central tem o ensino fundamental completo, o que é raro entre os povos indígenas do Brasil. Depois de cursos de equivalência, muitos jovens entraram nos cursos para indígenas do Estado de Rondônia, a partir de 2000, e hoje há mais de uma dezena de professores karitiana formados. As narrativas transcritas e as gravações foram deixadas na biblioteca da escola para as aulas bilíngues.',
    fonte: 'Storto, Garcia Karitiana e Nelson Karitiana, “Karitiana – Gokyp – O Sol”, 2019, pp. 420 e 427, https://revistas.ufrj.br/index.php/rl/article/view/25577 (consultado em 17/10/2026)',
    ideiaApp: 'Leituras graduadas feitas de narrativas tradicionais curtas, com a glosa aberta palavra por palavra.',
  },
  {
    nome: 'Falantes karitiana como consultores na universidade',
    ondeQuem: 'Departamento de Linguística da USP, desde 2003',
    comoFunciona:
      'Quase todo ano, professores ou falantes karitiana vão a São Paulo trabalhar com alunos de graduação e pós-graduação como tradutores e consultores. Daí saíram dissertações sobre a língua e uma coleção de materiais didáticos entregue à comunidade.',
    fonte: 'Storto, Garcia Karitiana e Nelson Karitiana, “Karitiana – Gokyp – O Sol”, 2019, p. 420, https://revistas.ufrj.br/index.php/rl/article/view/25577 (consultado em 17/10/2026)',
    ideiaApp: 'Créditos visíveis, em cada lição, para os falantes e professores que estão por trás das frases.',
  },
];
