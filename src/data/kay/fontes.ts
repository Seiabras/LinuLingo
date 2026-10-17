import type { FonteEstudo, MetodoEnsino } from '../types';

/**
 * Fontes para estudar kamaiurá por conta própria e os jeitos como a língua é ensinada (17/10/2026).
 *
 * A primeira é a base do curso inteiro: a gramática de Lucy Seki (2000), digitalizada na Biblioteca
 * Digital Curt Nimuendajú. As outras foram abertas uma a uma em 17/10/2026 com curl, conferindo título e
 * responsável na própria página: as dissertações de Aisanain Páltu Kamaiwrá (2010) e Warý Kamaiurá (2012)
 * no repositório da UnB, a tese de Márcio Ferreira da Silva (1981), a entrevista de Lucy Seki a Andrew
 * Nevins (2017), a resenha do livro de mitos de Seki (2010) na LIAMES, o verbete do ISA, o artigo do
 * Arquivo Kamayurá (2023), o livro da ATIX/ISA com textos de professores kamaiurá, o Glottolog e o ASJP.
 * Os métodos vêm da dissertação de Páltu Kamaiwrá (pp. 26–30, sobre as escolas kamaiurá), do verbete do
 * ISA (“Educação indígena”) e do artigo do Arquivo Kamayurá.
 */
export const FONTES_KAY: FonteEstudo[] = [
  // ---- Gramática e descrições
  {
    titulo: 'Gramática do Kamaiurá: língua Tupi-Guarani do Alto Xingu',
    autor: 'Lucy Seki (Editora da Unicamp e Imprensa Oficial), na Biblioteca Digital Curt Nimuendajú',
    ano: 2000,
    url: 'https://www.etnolinguistica.org/biblio:seki-2000-gramatica',
    tipo: 'gramatica',
    acesso: 'aberto',
    nivel: 'A1–B2',
    sobre:
      'A gramática de referência do kamaiurá, fruto de pesquisa com o povo desde 1968: pronomes, verbos, posse, negação, ordens, perguntas, parentesco, partes do dia, textos analisados e uma lista de palavras. É a base de todo este curso.',
  },
  {
    titulo: 'A fonologia segmental Kamayurá',
    autor: 'Márcio Ferreira da Silva (dissertação, Unicamp), na Biblioteca Digital Curt Nimuendajú',
    ano: 1981,
    url: 'https://www.etnolinguistica.org/tese:silva-1981',
    tipo: 'tese',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'Estudo dos sons do kamaiurá: consoantes, vogais e como eles mudam na palavra. Útil para quem quer entender a pronúncia a fundo.',
  },
  {
    titulo: 'Uma análise linguístico-antropológica de exemplares de dois gêneros discursivos Kamaiurá',
    autor: 'Aisanain Páltu Kamaiwrá (dissertação de mestrado, Universidade de Brasília)',
    ano: 2010,
    url: 'https://repositorio.unb.br/handle/10482/8948',
    tipo: 'tese',
    acesso: 'aberto',
    nivel: 'A2–B2',
    sobre:
      'Escrita por um professor kamaiurá, que foi o primeiro professor da escola do Morená: analisa discursos tradicionais e conta como a língua é ensinada nas escolas das aldeias.',
  },
  {
    titulo: 'Awetí e Tupí-Guaraní, relações genéticas e contato linguístico',
    autor: 'Warý Kamaiurá (dissertação de mestrado, Universidade de Brasília)',
    ano: 2012,
    url: 'https://repositorio.unb.br/handle/10482/10570',
    tipo: 'tese',
    acesso: 'aberto',
    nivel: 'B1–B2',
    sobre: 'Um pesquisador kamaiurá compara o vocabulário do awetí com o das línguas tupi-guarani, entre elas o kamaiurá. Bom para ver o kamaiurá ao lado de uma língua vizinha do Alto Xingu.',
  },
  {
    titulo: 'Entrevista: Lucy Seki',
    autor: 'Andrew Nevins, Revista LinguíStica (UFRJ), v. 13, n. 1',
    ano: 2017,
    url: 'https://revistas.ufrj.br/index.php/rl/article/download/10417/7909/21446',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'A linguista que descreveu o kamaiurá conta como começou a pesquisa em 1968, em plena ditadura, e como trabalhou com os Kamaiurá por décadas.',
  },
  // ---- Textos e cultura
  {
    titulo: 'Resenha de “Jene Ramŷjwena juru pytsaret: o que habitava a boca de nossos ancestrais” (Lucy Seki, 2010)',
    autor: 'Maria C. Chavarria, LIAMES: Línguas Indígenas Americanas, v. 15, n. 2, pp. 411–421',
    ano: 2015,
    url: 'https://periodicos.sbu.unicamp.br/ojs/index.php/liames/article/view/8642309',
    tipo: 'textos',
    acesso: 'aberto',
    nivel: 'B1–B2',
    sobre: 'Apresenta a coletânea de narrativas kamaiurá organizada por Seki (2010), com os textos na língua e em português; o livro em si é publicação do Museu do Índio.',
  },
  {
    titulo: 'Ecologia, Economia e Cultura – Livro 1',
    autor: 'Associação Terra Indígena Xingu (ATIX) e Instituto Socioambiental (ISA)',
    ano: 2005,
    url: 'https://acervo.socioambiental.org/sites/default/files/publications/0pl00005_0.pdf',
    tipo: 'textos',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'Livro feito pelos professores indígenas do Xingu, em português, com textos de professores kamaiurá (Warý, Aisanain, Arautará, Matariwa) sobre o sagrado, a ética e os espíritos da mata, com palavras em kamaiurá.',
  },
  {
    titulo: 'Arquivo Kamayurá: pesquisa, documentação e transmissão da memória',
    autor: 'Kanawayuri Kamaiurá e Mayaru Kamayurá, Boletim do Museu Paraense Emílio Goeldi. Ciências Humanas, v. 18, n. 1',
    ano: 2023,
    url: 'https://doi.org/10.1590/2178-2547-BGOELDI-2022-0086',
    tipo: 'site',
    acesso: 'aberto',
    licenca: 'CC BY',
    nivel: 'todos',
    sobre: 'Lideranças de Ypavu e do Morená contam o projeto de reunir os registros feitos sobre o povo (gravações, fotos, cadernos de Lucy Seki e de antropólogos) e de decidir com os mais velhos como usá-los.',
  },
  {
    titulo: 'Povos Indígenas no Brasil: Kamaiurá',
    autor: 'Instituto Socioambiental; verbete de Kanawayuri Kamaiurá, Aisanain Kamaiurá, Maria Cristina Troncarelli e Carmen Junqueira',
    url: 'https://pib.socioambiental.org/pt/Povo:Kamaiur%C3%A1',
    tipo: 'site',
    acesso: 'aberto',
    nivel: 'todos',
    sobre: 'O verbete de referência sobre o povo: aldeia, história no Alto Xingu, organização social, rituais, cosmologia e educação escolar, com depoimentos kamaiurá.',
  },
  // ---- Catálogos e listas de palavras
  {
    titulo: 'Glottolog: Kamayurá',
    autor: 'Glottolog (Instituto Max Planck de Antropologia Evolutiva)',
    url: 'https://glottolog.org/resource/languoid/id/kama1373',
    tipo: 'site',
    acesso: 'aberto',
    licenca: 'CC BY 4.0',
    nivel: 'todos',
    sobre: 'A classificação do kamaiurá na família tupi-guarani e a bibliografia sobre a língua, com links para outros catálogos.',
  },
  {
    titulo: 'ASJP: Wordlist Kamayura',
    autor: 'Automated Similarity Judgment Program (ASJP), na plataforma CLLD',
    url: 'https://asjp.clld.org/languages/KAMAYURA',
    tipo: 'dicionario',
    acesso: 'aberto',
    nivel: 'A1',
    sobre: 'Uma lista curta de palavras básicas (eu, você, peixe, cachorro, sol, pedra, fogo, noite) numa transcrição simplificada, para comparar o kamaiurá com outras línguas.',
  },
  {
    titulo: 'Wiktionary: Kamayurá lemmas',
    autor: 'Colaboradores do Wiktionary em inglês',
    url: 'https://en.wiktionary.org/wiki/Category:Kamayur%C3%A1_lemmas',
    tipo: 'dicionario',
    acesso: 'aberto',
    licenca: 'CC BY-SA 4.0',
    nivel: 'A1',
    sobre: 'Poucos verbetes, mas as páginas das raízes do proto-tupi-guarani mostram as palavras kamaiurá ao lado das do tupi antigo e do guarani; foram usadas nas etimologias deste curso.',
  },
];

export const METODOS_KAY: MetodoEnsino[] = [
  {
    nome: 'Alfabetização em kamaiurá na escola da aldeia',
    ondeQuem: 'Escola Sol e Lua (aldeia Morená, Feliz Natal) e Escola Mawajaka (aldeia Ypavu, Gaúcha do Norte), com professores kamaiurá',
    comoFunciona:
      'No começo, os primeiros professores alfabetizavam em português, com frases como “a vaca correu”, sem vaca na aldeia. Depois da formação com a linguista Lucy Seki, as crianças passaram a aprender a ler e escrever primeiro em kamaiurá; quando já leem um pouco, o professor ensina nas duas línguas. A língua das aulas é o kamaiurá, mesmo quando se ensina o português.',
    fonte:
      'Aisanain Páltu Kamaiwrá, dissertação de mestrado (UnB, 2010), seção 1.2.4, pp. 26–28, https://repositorio.unb.br/handle/10482/8948 (consultado em 17/10/2026)',
    ideiaApp: 'Usar frases curtas do dia a dia da aldeia, como as da escola (“Ama oho kop”, minha mãe foi na roça), em vez de frases traduzidas de um mundo de fora.',
  },
  {
    nome: 'Aulas a partir do que está em volta da criança',
    ondeQuem: 'Professores kamaiurá das escolas das aldeias',
    comoFunciona:
      'O professor planeja a aula com os recursos da natureza e da vida da aldeia: os alunos aprendem a escrever os nomes das plantas e dos bichos que estão ao redor e estudam, em kamaiurá, a geografia dos rios, das matas, das lagoas e das aldeias no mapa.',
    fonte:
      'Aisanain Páltu Kamaiwrá, dissertação de mestrado (UnB, 2010), p. 28, https://repositorio.unb.br/handle/10482/8948 (consultado em 17/10/2026)',
    ideiaApp: 'Lições temáticas com o território: a lagoa Ipavu, a roça, a mata, cada uma com as palavras e as frases kamaiurá do lugar.',
  },
  {
    nome: 'Cartilha “Kamajura jemo’etap”',
    ondeQuem: 'Professores kamaiurá em formação, com a organização de Lucy Seki (ISA e MEC, 1998)',
    comoFunciona:
      'Durante os cursos de formação, os professores fizeram uma cartilha própria para ensinar a ler e escrever kamaiurá. Hoje ela já não é usada, e os professores criam o próprio material; o autor da dissertação aponta a falta de livros na língua.',
    fonte:
      'Aisanain Páltu Kamaiwrá, dissertação de mestrado (UnB, 2010), p. 29 e bibliografia, https://repositorio.unb.br/handle/10482/8948; ISA, verbete “Kamaiurá”, “Educação indígena” (capa da cartilha, desenho de Kanawayuri Kamaiurá, 1998), https://pib.socioambiental.org/pt/Povo:Kamaiur%C3%A1 (consultados em 17/10/2026)',
    ideiaApp: 'Seguir a ordem de uma cartilha: primeiro os sons próprios da língua (o y, o ŋ, a glotal), depois palavras e frases curtas.',
  },
  {
    nome: 'Escola da Cultura',
    ondeQuem: 'Associação Mavutsinin, dos Kamaiurá, com apoio da Funai',
    comoFunciona: 'Homens e mulheres mais velhos ensinam as crianças e os jovens a dançar, cantar, fazer artesanato e conhecer as histórias do povo.',
    fonte: 'ISA, verbete “Kamaiurá”, “Educação indígena”, https://pib.socioambiental.org/pt/Povo:Kamaiur%C3%A1 (consultado em 17/10/2026)',
    ideiaApp: 'Abrir cada unidade com um costume ensinado pelos mais velhos (o canto, a luta, o kwaryp), ligado às palavras da lição.',
  },
  {
    nome: 'Arquivo Kamayurá: aprender com os registros antigos',
    ondeQuem: 'Lideranças e professores das aldeias Ypavu e Morená (projeto Arquivo Kamayurá, desde 2019)',
    comoFunciona:
      'A equipe visitou pesquisadores e arquivos que guardam gravações, fotos e cadernos sobre o povo, entre eles os materiais de Lucy Seki, e leva cópias digitais para as aldeias. Antes de mostrar os registros, conversa com os mais velhos sobre o que pode circular; os computadores ficam nas escolas.',
    fonte:
      'Kanawayuri Kamaiurá e Mayaru Kamayurá, “Arquivo Kamayurá: pesquisa, documentação e transmissão da memória”, Boletim do Museu Paraense Emílio Goeldi, Ciências Humanas 18(1), 2023, pp. 1–5, https://doi.org/10.1590/2178-2547-BGOELDI-2022-0086 (consultado em 17/10/2026)',
    ideiaApp: 'Quando houver gravações de licença livre, usar a voz de um falante nas leituras, sempre respeitando o que a comunidade decidiu mostrar.',
  },
];
