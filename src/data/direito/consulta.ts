import type { MarcoArea } from '@/components/area/AreaTrilha';

/**
 * As abas de consulta da área Direito: os casos do dia a dia (aba Casos), os ramos e os sistemas
 * jurídicos (aba Ramos) e o direito no Brasil (aba Brasil). Cada caso cita o artigo de lei que o
 * resolve; o texto das leis é o do site do Planalto (planalto.gov.br). Fontes do resto:
 * - Sistemas jurídicos: R. David, “Os grandes sistemas do direito contemporâneo” (1964; trad. Martins
 *   Fontes); JuriGlobe, Universidade de Ottawa (juriglobe.ca), para a lista de sistemas mistos.
 * - Escolas: H. Kelsen, “Teoria pura do direito” (1934); M. Reale, “Teoria tridimensional do direito”
 *   (1968).
 * - Marcos: as Constituições e as leis no Planalto; Lei de 11 de agosto de 1827 (cursos jurídicos);
 *   Decreto nº 19.408/1930 (a OAB); Decreto nº 21.076/1932 (Código Eleitoral, voto feminino).
 * - Pessoas: OAB, Conselho Federal, reconhecimento de Esperança Garcia como primeira advogada do Brasil
 *   (2022) e de Luiz Gama como advogado (2015); Senado Federal e Câmara dos Deputados (biografias de Rui
 *   Barbosa e Ulysses Guimarães); Instituto dos Advogados Brasileiros (Myrthes Gomes de Campos); Instituto
 *   Maria da Penha (institutomariadapenha.org.br).
 */

export interface CasoDireito {
  id: string;
  emoji: string;
  situacao: string;
  pergunta: string;
  opcoes: string[];
  resposta: number;
  porque: string;
  lei: string;
}

export const CASOS_DIREITO: CasoDireito[] = [
  {
    id: 'tenis-online',
    emoji: '👟',
    situacao: 'Ana comprou um tênis num site. Chegou ontem, serviu, mas ela não gostou da cor.',
    pergunta: 'Ela pode devolver?',
    opcoes: ['Sim, em até 7 dias do recebimento, com o dinheiro todo de volta', 'Não: o tênis não tem defeito', 'Só se pagar o frete da volta'],
    resposta: 0,
    porque: 'Na compra fora da loja física, o consumidor pode desistir em 7 dias sem dar motivo, e tudo o que pagou volta, atualizado.',
    lei: 'CDC, art. 49',
  },
  {
    id: 'camisa-loja',
    emoji: '👕',
    situacao: 'Bruno comprou uma camisa na loja do shopping, provou lá e levou. Em casa, desistiu.',
    pergunta: 'A loja é obrigada a trocar?',
    opcoes: ['Não: só se ela prometeu a troca', 'Sim, em até 7 dias', 'Sim, em até 30 dias'],
    resposta: 0,
    porque: 'O direito de arrependimento vale para compras fora do estabelecimento. Na loja física, a troca sem defeito é um favor, e vale se a loja prometeu (aí ela tem de cumprir).',
    lei: 'CDC, arts. 30 e 49',
  },
  {
    id: 'celular-defeito',
    emoji: '📱',
    situacao: 'O celular de Carla parou de carregar com 40 dias de uso. A loja diz que é com o fabricante.',
    pergunta: 'Quem responde?',
    opcoes: ['A loja e o fabricante, juntos', 'Só o fabricante', 'Ninguém: passou de 30 dias'],
    resposta: 0,
    porque: 'Todos os fornecedores da cadeia respondem juntos pelo defeito. Celular é durável: o prazo para reclamar é de 90 dias, e eles têm 30 dias para consertar.',
    lei: 'CDC, arts. 18 e 26, II',
  },
  {
    id: 'venda-casada',
    emoji: '🍿',
    situacao: 'O cinema não deixa Diego entrar com a pipoca comprada fora; ali dentro, ela custa o triplo.',
    pergunta: 'Isso é permitido?',
    opcoes: ['Não: é venda casada', 'Sim: o cinema é particular', 'Só em filme de estreia'],
    resposta: 0,
    porque: 'Obrigar a comprar o lanche ali para poder ver o filme condiciona um produto ao outro. O Superior Tribunal de Justiça já decidiu assim, em 2007.',
    lei: 'CDC, art. 39, I',
  },
  {
    id: 'cobranca',
    emoji: '💸',
    situacao: 'A conta de Elisa veio com R$ 50 de um serviço que ela nunca contratou, e ela pagou sem ver.',
    pergunta: 'Quanto ela pode pedir de volta?',
    opcoes: ['R$ 100, o dobro, com correção', 'Só os R$ 50', 'Nada: ela pagou porque quis'],
    resposta: 0,
    porque: 'Quem paga uma cobrança indevida tem direito ao dobro do que pagou a mais, com correção e juros, salvo engano justificável da empresa.',
    lei: 'CDC, art. 42, parágrafo único',
  },
  {
    id: 'ferias',
    emoji: '🏖️',
    situacao: 'Fábio ganha R$ 2.400 por mês com carteira assinada e vai tirar 30 dias de férias.',
    pergunta: 'Quanto ele recebe pelas férias?',
    opcoes: ['R$ 3.200', 'R$ 2.400', 'R$ 4.800'],
    resposta: 0,
    porque: 'As férias são pagas com um terço a mais: R$ 2.400 + R$ 800 = R$ 3.200.',
    lei: 'CF, art. 7º, XVII',
  },
  {
    id: 'hora-extra',
    emoji: '⏰',
    situacao: 'Gabi ganha R$ 20 por hora e trabalhou 2 horas além da jornada.',
    pergunta: 'Quanto ela deve receber, no mínimo, por essas 2 horas?',
    opcoes: ['R$ 60', 'R$ 40', 'R$ 20'],
    resposta: 0,
    porque: 'A hora extra vale pelo menos 50% a mais: R$ 20 + R$ 10 = R$ 30 por hora; 2 horas dão R$ 60.',
    lei: 'CF, art. 7º, XVI',
  },
  {
    id: 'lei-nova',
    emoji: '📕',
    situacao: 'Uma lei de hoje transforma em crime uma coisa que Hugo fez no ano passado, quando era permitida.',
    pergunta: 'Hugo pode ser punido?',
    opcoes: ['Não', 'Sim', 'Só com multa'],
    resposta: 0,
    porque: 'Não há crime sem lei anterior que o defina, e a lei penal não volta no tempo para prejudicar ninguém.',
    lei: 'CF, art. 5º, XXXIX e XL; Código Penal, art. 1º',
  },
  {
    id: 'casa',
    emoji: '🏠',
    situacao: 'De madrugada, sem ordem do juiz e sem nenhuma emergência, alguém quer entrar na casa de Iara para “dar uma olhada”.',
    pergunta: 'Pode entrar sem ela deixar?',
    opcoes: ['Não', 'Sim, se for de madrugada', 'Sim, se for um vizinho'],
    resposta: 0,
    porque: 'A casa é asilo inviolável. Só se entra sem o consentimento do morador em flagrante delito, desastre, para prestar socorro ou, de dia, com ordem judicial.',
    lei: 'CF, art. 5º, XI',
  },
  {
    id: 'aluguel-juizado',
    emoji: '⚖️',
    situacao: 'O antigo dono do apartamento não devolveu a João a caução de R$ 3.000.',
    pergunta: 'João precisa de advogado para cobrar na Justiça?',
    opcoes: ['Não: no Juizado Especial, até 20 salários mínimos, pode ir sozinho', 'Sim, sempre', 'Só se ganhar mais de 40 salários'],
    resposta: 0,
    porque: 'O Juizado Especial Cível julga causas de até 40 salários mínimos, e até 20 a pessoa pode entrar sem advogado.',
    lei: 'Lei nº 9.099/1995, arts. 3º e 9º',
  },
];

export interface RamoDireito {
  nome: string;
  esfera: 'público' | 'privado' | 'difuso e coletivo';
  cuida: string;
  exemplo: string;
  lei: string;
}

export const RAMOS_DIREITO: RamoDireito[] = [
  { nome: 'Constitucional', esfera: 'público', cuida: 'A Constituição: os direitos fundamentais e a organização do Estado e dos Poderes.', exemplo: 'Quem pode se candidatar a presidente.', lei: 'Constituição de 1988' },
  { nome: 'Penal', esfera: 'público', cuida: 'Os crimes e as penas que o Estado pode aplicar.', exemplo: 'Furto, roubo, homicídio e as penas de cada um.', lei: 'Código Penal (1940)' },
  { nome: 'Administrativo', esfera: 'público', cuida: 'A administração pública: os servidores, as licitações, os serviços públicos.', exemplo: 'Como a prefeitura contrata uma obra.', lei: 'Lei nº 14.133/2021 (licitações)' },
  { nome: 'Tributário', esfera: 'público', cuida: 'Os impostos e as contribuições: quem cobra, quem paga e como.', exemplo: 'O IPTU da casa e o IPVA do carro.', lei: 'Código Tributário Nacional (1966)' },
  { nome: 'Processual', esfera: 'público', cuida: 'Como o processo anda na Justiça, da petição ao julgamento e à execução.', exemplo: 'Os prazos para recorrer de uma sentença.', lei: 'Código de Processo Civil (2015) e de Processo Penal (1941)' },
  { nome: 'Civil', esfera: 'privado', cuida: 'A vida privada: contratos, propriedade, família, herança e indenizações.', exemplo: 'Um contrato de aluguel ou a partilha de uma herança.', lei: 'Código Civil (2002)' },
  { nome: 'Empresarial', esfera: 'privado', cuida: 'As empresas: como se abrem, funcionam, se juntam e quebram.', exemplo: 'A recuperação judicial de uma empresa.', lei: 'Código Civil e Lei nº 11.101/2005' },
  { nome: 'do Trabalho', esfera: 'privado', cuida: 'A relação entre empregado e empregador e a proteção de quem trabalha.', exemplo: 'O 13º, as férias e a demissão sem justa causa.', lei: 'CLT (1943)' },
  { nome: 'do Consumidor', esfera: 'difuso e coletivo', cuida: 'A proteção de quem compra, a parte mais fraca da relação de consumo.', exemplo: 'O direito de se arrepender da compra pela internet.', lei: 'CDC (1990)' },
  { nome: 'Ambiental', esfera: 'difuso e coletivo', cuida: 'O meio ambiente, que é de todos, inclusive das gerações futuras.', exemplo: 'A multa por desmatar uma área protegida.', lei: 'CF, art. 225; Lei nº 9.605/1998' },
  { nome: 'Digital e de dados', esfera: 'difuso e coletivo', cuida: 'A internet e os dados pessoais: privacidade, responsabilidade das plataformas.', exemplo: 'Pedir a uma empresa para apagar os seus dados.', lei: 'Marco Civil da Internet (2014) e LGPD (2018)' },
];

export interface SistemaJuridico {
  nome: string;
  onde: string;
  como: string;
}

export const SISTEMAS_JURIDICOS: SistemaJuridico[] = [
  {
    nome: 'Civil law (romano-germânico)',
    onde: 'Brasil, quase toda a América Latina, Europa continental, Japão',
    como: 'O centro são as leis e os códigos escritos. O juiz parte da lei para decidir. Vem do direito romano de Justiniano e dos códigos do século XIX, como o de Napoleão.',
  },
  {
    nome: 'Common law',
    onde: 'Inglaterra, Estados Unidos, Canadá (menos o Quebec), Austrália, Índia',
    como: 'O centro são os precedentes: as decisões anteriores dos tribunais obrigam os juízes nos casos parecidos. Nasceu nos tribunais do rei da Inglaterra, na Idade Média.',
  },
  {
    nome: 'Direito religioso',
    onde: 'Em parte, em vários países de maioria muçulmana',
    como: 'Regras tiradas de textos religiosos. A sharia, do islã, vem do Alcorão e da tradição do profeta; muitos países a usam só em família e herança, ao lado de códigos civis.',
  },
  {
    nome: 'Direito costumeiro',
    onde: 'Comunidades tradicionais, em muitos países da África, da Ásia e das Américas',
    como: 'Regras que vêm do costume do povo, passadas de geração em geração, muitas vezes ao lado do direito do Estado. A Constituição do Brasil reconhece os costumes e a organização dos povos indígenas (art. 231).',
  },
  {
    nome: 'Sistemas mistos',
    onde: 'Escócia, África do Sul, Quebec, Luisiana, Filipinas',
    como: 'Misturam o civil law com o common law (e às vezes com o direito religioso ou costumeiro), por causa da história de cada lugar.',
  },
];

export interface EscolaDireito {
  nome: string;
  ideia: string;
  quem: string;
}

export const ESCOLAS_DIREITO: EscolaDireito[] = [
  { nome: 'Jusnaturalismo', ideia: 'Existem direitos que nascem com a pessoa e valem em qualquer lugar, acima das leis escritas.', quem: 'De Aristóteles e Tomás de Aquino a John Locke.' },
  { nome: 'Positivismo jurídico', ideia: 'O direito é o conjunto das normas em vigor, separado da moral: a norma vale porque foi feita do jeito certo.', quem: 'Hans Kelsen, “Teoria pura do direito” (1934).' },
  { nome: 'Teoria tridimensional', ideia: 'O direito é fato, valor e norma ao mesmo tempo: um acontecimento da vida, julgado por um valor, vira regra.', quem: 'Miguel Reale, brasileiro, “Teoria tridimensional do direito” (1968).' },
  { nome: 'Sociologia do direito', ideia: 'Estudar o que a lei faz de verdade na sociedade, e não só o que ela diz no papel.', quem: 'Max Weber e Eugen Ehrlich, no começo do século XX.' },
];

export const MARCOS_DIREITO_BRASIL: MarcoArea[] = [
  { ano: '1770', titulo: 'A petição de Esperança Garcia', sobre: 'Escravizada no Piauí, ela escreve ao governador denunciando os maus-tratos. Em 2022, a OAB a reconheceu como a primeira advogada do Brasil.' },
  { ano: '1824', titulo: 'A primeira Constituição', sobre: 'Outorgada por Dom Pedro I, com um quarto poder, o Moderador, nas mãos do imperador.' },
  { ano: '1827', titulo: 'Os cursos de direito', sobre: 'Uma lei de 11 de agosto cria os cursos jurídicos de São Paulo e de Olinda. Por isso 11 de agosto é o Dia do Advogado.' },
  { ano: '1888', titulo: 'A Lei Áurea', sobre: 'A Lei nº 3.353, de 13 de maio, abole a escravidão no Brasil, a última nas Américas.' },
  { ano: '1891', titulo: 'A Constituição da República', sobre: 'A primeira republicana, com forte influência de Rui Barbosa: federação, presidencialismo e separação entre Estado e Igreja.' },
  { ano: '1930', titulo: 'A OAB', sobre: 'O Decreto nº 19.408 cria a Ordem dos Advogados do Brasil.' },
  { ano: '1932', titulo: 'O voto das mulheres', sobre: 'O Código Eleitoral garante o voto feminino. Em 1934, a Constituição confirma.' },
  { ano: '1934', titulo: 'A Constituição de 1934', sobre: 'Traz pela primeira vez os direitos trabalhistas e sociais na Constituição.' },
  { ano: '1937', titulo: 'A Constituição do Estado Novo', sobre: 'Outorgada por Getúlio Vargas, concentra o poder no presidente.' },
  { ano: '1943', titulo: 'A CLT', sobre: 'A Consolidação das Leis do Trabalho é assinada em 1º de maio.' },
  { ano: '1946', titulo: 'A Constituição de 1946', sobre: 'Devolve a democracia depois do Estado Novo.' },
  { ano: '1967', titulo: 'A Constituição da ditadura', sobre: 'Feita sob o regime militar, e muito mudada pela Emenda nº 1, de 1969.' },
  { ano: '1988', titulo: 'A Constituição Cidadã', sobre: 'Promulgada em 5 de outubro, depois da ditadura, com o maior rol de direitos da história do país.' },
  { ano: '1990', titulo: 'O ECA e o CDC', sobre: 'Saem o Estatuto da Criança e do Adolescente (julho) e o Código de Defesa do Consumidor (setembro).' },
  { ano: '2002', titulo: 'O novo Código Civil', sobre: 'Substitui o Código de 1916, de Clóvis Beviláqua, e baixa a maioridade civil de 21 para 18 anos.' },
  { ano: '2006', titulo: 'A Lei Maria da Penha', sobre: 'A Lei nº 11.340 cria mecanismos para coibir a violência doméstica e familiar contra a mulher.' },
  { ano: '2014', titulo: 'O Marco Civil da Internet', sobre: 'A Lei nº 12.965 define direitos e deveres de quem usa a internet no Brasil.' },
  { ano: '2018', titulo: 'A LGPD', sobre: 'A Lei Geral de Proteção de Dados (nº 13.709) diz como os dados pessoais podem ser usados.' },
];

export interface PessoaDireito {
  nome: string;
  anos?: string;
  fez: string;
}

export const PESSOAS_DIREITO_BRASIL: PessoaDireito[] = [
  { nome: 'Esperança Garcia', anos: 'século XVIII', fez: 'Escravizada que escreveu, em 1770, uma petição ao governador do Piauí; reconhecida pela OAB como a primeira advogada do Brasil.' },
  { nome: 'Luiz Gama', anos: '1830–1882', fez: 'Nascido livre e vendido como escravo na infância, conquistou a liberdade e, como advogado sem diploma (rábula), libertou centenas de pessoas na Justiça.' },
  { nome: 'Rui Barbosa', anos: '1849–1923', fez: 'Jurista e político; influenciou a Constituição de 1891 e defendeu a igualdade entre as nações na Conferência da Paz de Haia, em 1907.' },
  { nome: 'Clóvis Beviláqua', anos: '1859–1944', fez: 'Escreveu o projeto do Código Civil de 1916, que valeu até 2002.' },
  { nome: 'Myrthes Gomes de Campos', anos: '1875–1965', fez: 'A primeira mulher a exercer a advocacia no Brasil, depois de anos de luta para ser aceita.' },
  { nome: 'Sobral Pinto', anos: '1893–1991', fez: 'Advogado que defendeu presos políticos no Estado Novo e na ditadura militar, inclusive adversários das ideias dele.' },
  { nome: 'Miguel Reale', anos: '1910–2006', fez: 'Filósofo do direito, criou a teoria tridimensional e coordenou o projeto do Código Civil de 2002.' },
  { nome: 'Ulysses Guimarães', anos: '1916–1992', fez: 'Presidiu a Assembleia Constituinte e chamou a Constituição de 1988 de “Constituição Cidadã”.' },
  { nome: 'Maria da Penha Maia Fernandes', fez: 'Sobreviveu a duas tentativas de feminicídio e lutou por justiça até a Comissão Interamericana de Direitos Humanos; a lei de 2006 tem o nome dela.' },
];
