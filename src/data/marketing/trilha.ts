import type { MiniCourse } from '@/data/cursos/tipos';
import { comOpcoesEmbaralhadas } from '@/data/cursos/embaralhar';

/**
 * A trilha da área Marketing (pedido do dono, 17/10/2026: “faz as abas de marketing, astronomia e
 * direito”). As unidades usam o motor dos minicursos (kind 'marketing') e seguem a taxonomia guardada em
 * `docs/areas-futuras.md` (4 Ps, STP, canais, objetivos, ética). Cada unidade termina numa aplicação: as
 * contas de verdade estão na aba “Na prática” (preço, ponto de equilíbrio, CAC × LTV, funil).
 *
 * Fontes de cada lição: os artigos e livros originais citados em `sources` (datas e autores conferidos
 * pelas referências bibliográficas usuais) e as leis brasileiras no site do Planalto.
 */

export const MKT_INICIO: MiniCourse = {
  id: 'mkt-inicio',
  name: 'O que é marketing',
  emoji: '📣',
  kind: 'marketing',
  summary: 'Marketing não é só propaganda: é entender o que as pessoas precisam e levar até elas algo que valha a troca.',
  sources: [
    { label: 'American Marketing Association, “Definitions of Marketing”', url: 'https://www.ama.org/the-definition-of-marketing-what-is-marketing/' },
    { label: 'T. Levitt, “Marketing Myopia”, Harvard Business Review (1960)', url: 'https://hbr.org/2004/07/marketing-myopia' },
  ],
  lessons: [
    {
      id: 'troca',
      title: 'Uma troca que vale a pena',
      emoji: '🤝',
      intro: [
        'Muita gente acha que marketing é só fazer propaganda. A propaganda é uma parte pequena. A Associação Americana de Marketing (AMA) define marketing como a atividade e os processos de criar, comunicar, entregar e trocar ofertas que têm valor para os clientes, os parceiros e a sociedade.',
        'O centro é a troca: a pessoa dá dinheiro, tempo ou atenção e recebe algo que vale mais para ela do que aquilo que deu. Se a troca não vale a pena, nenhuma propaganda segura o cliente por muito tempo.',
        'Por isso o marketing começa antes do produto existir: descobrir quem precisa do quê, o que já existe e o que falta.',
      ],
      items: [
        { term: 'marketing', meaning: 'criar, comunicar, entregar e trocar ofertas de valor', how: 'Do inglês market, “mercado”.' },
        { term: 'valor percebido', meaning: 'quanto a oferta vale aos olhos de quem compra', how: 'Não é o custo de produção: é o que o cliente acha que ganha.' },
        { term: 'propaganda', meaning: 'só uma das ferramentas do marketing', how: 'Ela comunica; o marketing inteiro decide o que, para quem e a que preço.' },
      ],
      quiz: [
        { q: 'O que está no centro do marketing?', options: ['A troca de valor entre quem vende e quem compra', 'Fazer o maior anúncio possível', 'Baixar o preço sempre'], answer: 0 },
        {
          q: 'Quando o marketing começa?',
          options: ['Antes do produto existir, entendendo quem precisa do quê', 'Só depois que o produto está pronto', 'Só quando as vendas caem'],
          answer: 0,
        },
      ],
    },
    {
      id: 'miopia',
      title: 'A miopia em marketing',
      emoji: '👓',
      intro: [
        'Em 1960, o professor Theodore Levitt, de Harvard, publicou “Marketing Myopia” (“Miopia em marketing”). O exemplo mais famoso é o das ferrovias americanas: elas encolheram porque se achavam no negócio de trens, e não no negócio de transporte. Carros, caminhões e aviões levaram os clientes.',
        'A lição: a empresa deve se definir pela necessidade que atende, não pelo produto que faz. Levitt contava uma frase que ficou famosa: as pessoas não querem uma broca de um quarto de polegada; querem um furo de um quarto de polegada.',
        'Na prática: antes de vender algo, pergunte “que problema isso resolve?”. Uma escola de idiomas não vende aulas; vende conseguir conversar numa viagem ou passar numa entrevista.',
      ],
      items: [
        { term: 'miopia em marketing', meaning: 'olhar só para o produto e esquecer a necessidade', how: 'Theodore Levitt, Harvard Business Review, 1960.' },
        { term: 'a broca e o furo', meaning: 'o cliente quer o resultado, não a ferramenta', how: 'O exemplo que Levitt tornou famoso.' },
      ],
      quiz: [
        { q: 'Por que as ferrovias encolheram, segundo Levitt?', options: ['Achavam que vendiam trens, não transporte', 'Os trens ficaram baratos demais', 'Ninguém mais viajava'], answer: 0 },
        { q: 'Quem compra uma broca quer, na verdade…', options: ['O furo', 'A caixa da broca', 'A marca da loja'], answer: 0 },
      ],
    },
  ],
};

export const MKT_4PS: MiniCourse = {
  id: 'mkt-4ps',
  name: 'Os 4 Ps',
  emoji: '🧩',
  kind: 'marketing',
  summary: 'Produto, preço, praça e promoção: as quatro decisões de toda oferta, e por que o preço termina em 9.',
  sources: [
    { label: 'E. J. McCarthy, “Basic Marketing: A Managerial Approach” (1960)', url: 'https://openlibrary.org/search?q=Basic+Marketing+A+Managerial+Approach' },
    { label: 'N. H. Borden, “The Concept of the Marketing Mix”, Journal of Advertising Research (1964)', url: 'https://scholar.google.com/scholar?q=%22The+Concept+of+the+Marketing+Mix%22+Borden+1964' },
    {
      label: 'M. Thomas e V. Morwitz, “Penny Wise and Pound Foolish: The Left-Digit Effect in Price Cognition”, Journal of Consumer Research 32 (2005)',
      url: 'https://doi.org/10.1086/429600',
    },
  ],
  lessons: [
    {
      id: 'mix',
      title: 'O composto de marketing',
      emoji: '🧩',
      intro: [
        'Nos anos 1950, o professor Neil Borden, de Harvard, chamou de “marketing mix” (composto de marketing) a mistura de decisões que a empresa faz para vender. Em 1960, E. Jerome McCarthy resumiu essas decisões em quatro palavras que começam com P, no livro “Basic Marketing”.',
        'Produto: o que se oferece (qualidade, embalagem, garantia). Preço: quanto custa e como se paga. Praça: onde e como chega ao cliente (loja, site, entrega). Promoção: como as pessoas ficam sabendo (propaganda, redes, vendedores, descontos).',
        'Os quatro precisam combinar. Um perfume caro vendido em saquinho de feira não convence ninguém, por melhor que seja o cheiro.',
      ],
      items: [
        { term: 'Produto', meaning: 'o que se oferece', how: 'Inclui a embalagem, o atendimento e a garantia.' },
        { term: 'Preço', meaning: 'quanto custa e como se paga', how: 'À vista, parcelado, assinatura.' },
        { term: 'Praça', meaning: 'onde e como chega ao cliente', how: 'Em inglês, place: a distribuição.' },
        { term: 'Promoção', meaning: 'como o público fica sabendo', how: 'Propaganda, redes sociais, vendedores, amostras.' },
      ],
      quiz: [
        { q: 'Quem resumiu o composto de marketing em 4 Ps, em 1960?', options: ['E. Jerome McCarthy', 'Theodore Levitt', 'Philip Kotler'], answer: 0 },
        { q: 'A entrega em casa faz parte de qual P?', options: ['Praça', 'Preço', 'Produto'], answer: 0 },
        { q: 'Um anúncio nas redes sociais faz parte de qual P?', options: ['Promoção', 'Praça', 'Preço'], answer: 0 },
      ],
    },
    {
      id: 'preco',
      title: 'Como nasce um preço',
      emoji: '🏷️',
      intro: [
        'Há três jeitos clássicos de pensar o preço: a partir do custo (quanto custou fazer, mais uma margem), a partir da concorrência (quanto os outros cobram) e a partir do valor (quanto o cliente acha que aquilo vale). Na vida real, a empresa olha os três.',
        'E por que tanta coisa custa R$ 9,99? Em 2005, Manoj Thomas e Vicki Morwitz mostraram o “efeito do dígito da esquerda”: a gente lê o preço da esquerda para a direita e dá peso demais ao primeiro algarismo. R$ 9,99 parece bem mais perto de 9 do que de 10.',
        'Faça a conta na aba “Na prática”: com o custo e a margem que você quer, ela mostra o preço e a diferença entre margem e markup.',
      ],
      items: [
        { term: 'preço pelo custo', meaning: 'custo mais uma margem', how: 'Garante o lucro, mas ignora o cliente.' },
        { term: 'preço pelo valor', meaning: 'quanto o cliente acha que vale', how: 'Um guarda-chuva vale mais quando começa a chover.' },
        { term: 'efeito do dígito da esquerda', meaning: 'o primeiro algarismo pesa demais', how: 'Thomas e Morwitz, 2005: 9,99 parece “nove e pouco”.' },
      ],
      quiz: [
        { q: 'Por que R$ 9,99 parece mais barato que R$ 10,00?', options: ['A gente dá peso demais ao primeiro algarismo', 'Porque é muito mais barato', 'Por causa do imposto'], answer: 0 },
        {
          q: 'Cobrar pelo quanto o cliente acha que algo vale é o preço pelo…',
          options: ['Valor', 'Custo', 'Peso'],
          answer: 0,
        },
      ],
    },
  ],
};

export const MKT_PUBLICO: MiniCourse = {
  id: 'mkt-publico',
  name: 'Público e posicionamento',
  emoji: '🎯',
  kind: 'marketing',
  summary: 'Ninguém vende para todo mundo: dividir o mercado, escolher para quem falar e ocupar um lugar na cabeça dessas pessoas.',
  sources: [
    {
      label: 'W. R. Smith, “Product Differentiation and Market Segmentation as Alternative Marketing Strategies”, Journal of Marketing 21 (1956)',
      url: 'https://doi.org/10.1177/002224295602100102',
    },
    { label: 'A. Ries e J. Trout, “Positioning: The Battle for Your Mind” (1981)', url: 'https://openlibrary.org/search?q=Positioning+The+Battle+for+Your+Mind' },
  ],
  lessons: [
    {
      id: 'segmentacao',
      title: 'Dividir para entender',
      emoji: '🍕',
      intro: [
        'Em 1956, Wendell R. Smith publicou no Journal of Marketing a ideia de segmentação de mercado: em vez de tratar todos os clientes como iguais, dividir o mercado em grupos com necessidades parecidas.',
        'Os jeitos mais comuns de dividir: geográfico (cidade, região, clima), demográfico (idade, renda, família), comportamental (quanto e como compra) e psicográfico (estilo de vida, valores, interesses).',
        'Daí vem a sigla STP: Segmentar (dividir o mercado), Targeting (escolher o público-alvo) e Posicionar (decidir como quer ser lembrado por ele).',
      ],
      items: [
        { term: 'segmentação', meaning: 'dividir o mercado em grupos parecidos', how: 'Wendell R. Smith, 1956.' },
        { term: 'público-alvo', meaning: 'o grupo que a empresa escolhe atender', how: 'O T de STP, de targeting.' },
        { term: 'psicográfico', meaning: 'pelo estilo de vida e pelos valores', how: 'Quem acampa, quem cozinha, quem joga.' },
      ],
      quiz: [
        { q: 'Dividir o público por idade e renda é uma segmentação…', options: ['Demográfica', 'Geográfica', 'Psicográfica'], answer: 0 },
        { q: 'O que quer dizer o S de STP?', options: ['Segmentar', 'Somar', 'Sortear'], answer: 0 },
      ],
    },
    {
      id: 'posicionamento',
      title: 'Um lugar na cabeça',
      emoji: '🧠',
      intro: [
        'Em 1972, Al Ries e Jack Trout escreveram uma série de artigos na revista Advertising Age sobre “posicionamento”, e em 1981 lançaram o livro “Positioning: The Battle for Your Mind”.',
        'A ideia: o posicionamento não é o que você faz com o produto, é o que você faz com a mente do cliente. Cada marca disputa uma palavra ou uma ideia na cabeça das pessoas: a mais segura, a mais barata, a mais rápida.',
        'Um teste simples: complete a frase “para [público], a [marca] é a [categoria] que [diferença]”. Se você não consegue completar, o posicionamento ainda não existe.',
      ],
      items: [
        { term: 'posicionamento', meaning: 'o lugar que a marca ocupa na mente do cliente', how: 'Ries e Trout, 1972 (artigos) e 1981 (livro).' },
        { term: 'diferencial', meaning: 'o que faz escolher você e não o outro', how: 'Tem de importar para o público, não só para a empresa.' },
      ],
      quiz: [
        { q: 'Onde acontece o posicionamento, segundo Ries e Trout?', options: ['Na mente do cliente', 'Na prateleira da loja', 'No contrato social da empresa'], answer: 0 },
        { q: 'Um bom diferencial precisa importar para…', options: ['O público', 'Só o dono da empresa', 'Os concorrentes'], answer: 0 },
      ],
    },
  ],
};

export const MKT_MENTE: MiniCourse = {
  id: 'mkt-mente',
  name: 'A cabeça de quem compra',
  emoji: '🛒',
  kind: 'marketing',
  summary: 'Ancoragem, opções demais, a isca e os seis princípios de Cialdini: a psicologia por trás das compras (e como não cair nelas).',
  sources: [
    { label: 'A. Tversky e D. Kahneman, “Judgment under Uncertainty: Heuristics and Biases”, Science 185 (1974)', url: 'https://doi.org/10.1126/science.185.4157.1124' },
    { label: 'S. Iyengar e M. Lepper, “When Choice is Demotivating”, Journal of Personality and Social Psychology 79 (2000)', url: 'https://doi.org/10.1037/0022-3514.79.6.995' },
    { label: 'J. Huber, J. Payne e C. Puto, “Adding Asymmetrically Dominated Alternatives”, Journal of Consumer Research 9 (1982)', url: 'https://doi.org/10.1086/208899' },
    { label: 'R. Cialdini, “Influence: The Psychology of Persuasion” (1984)', url: 'https://openlibrary.org/search?q=Influence+The+Psychology+of+Persuasion' },
  ],
  lessons: [
    {
      id: 'ancoragem',
      title: 'A âncora do preço',
      emoji: '⚓',
      intro: [
        'Em 1974, os psicólogos Amos Tversky e Daniel Kahneman mostraram na revista Science que um número visto antes puxa a nossa estimativa para perto dele, mesmo quando não tem nada a ver com a pergunta. É a ancoragem.',
        'No comércio, a âncora é o “de R$ 299 por R$ 149”: o primeiro preço faz o segundo parecer barato. Também é por isso que o cardápio às vezes tem um prato caríssimo que quase ninguém pede.',
        'Como se proteger: antes de olhar o desconto, pergunte “eu pagaria R$ 149 por isso se não tivesse visto o outro preço?”.',
      ],
      items: [
        { term: 'ancoragem', meaning: 'o primeiro número puxa a estimativa', how: 'Tversky e Kahneman, Science, 1974.' },
        { term: 'preço de referência', meaning: 'o preço “de”, que faz o “por” parecer barato', how: 'Só vale se o produto foi mesmo vendido por ele.' },
      ],
      quiz: [
        { q: 'No “de R$ 299 por R$ 149”, qual é a âncora?', options: ['Os R$ 299', 'Os R$ 149', 'O nome da loja'], answer: 0 },
        { q: 'Quem descreveu a ancoragem em 1974?', options: ['Tversky e Kahneman', 'Ries e Trout', 'McCarthy e Borden'], answer: 0 },
      ],
    },
    {
      id: 'escolhas',
      title: 'Opções demais e a isca',
      emoji: '🍓',
      intro: [
        'Em 2000, Sheena Iyengar e Mark Lepper montaram uma banca de geleias num supermercado. Com 24 sabores, muita gente parava, mas só 3% compravam; com 6 sabores, 30% dos que paravam compravam. Opções demais podem paralisar.',
        'Já em 1982, Joel Huber, John Payne e Christopher Puto mostraram o efeito da isca: pôr uma terceira opção um pouco pior faz uma das outras parecer melhor. É o pipoca média quase do preço da grande.',
        'Na prática: ao ver três planos, pergunte qual deles está ali só para empurrar você para o vizinho.',
      ],
      items: [
        { term: 'excesso de escolha', meaning: 'opções demais diminuem a compra', how: 'As geleias de Iyengar e Lepper: 24 sabores × 6 sabores.' },
        { term: 'efeito isca', meaning: 'uma opção pior faz a vizinha parecer ótima', how: 'Huber, Payne e Puto, 1982.' },
      ],
      quiz: [
        { q: 'Na banca de geleias, quem comprou mais?', options: ['Quem viu 6 sabores', 'Quem viu 24 sabores', 'Os dois igual'], answer: 0 },
        { q: 'A pipoca média quase do preço da grande serve para…', options: ['Fazer a grande parecer vantajosa', 'Ser a mais vendida', 'Pagar o cinema'], answer: 0 },
      ],
    },
    {
      id: 'cialdini',
      title: 'Os seis princípios da persuasão',
      emoji: '6️⃣',
      intro: [
        'Em 1984, o psicólogo Robert Cialdini publicou “Influence” (“As armas da persuasão”), depois de anos estudando vendedores, publicitários e arrecadadores de doações por dentro.',
        'Ele juntou seis princípios: reciprocidade (quem ganha algo quer retribuir), compromisso e coerência (quem diz sim a pouco tende a dizer sim a mais), prova social (fazemos o que os outros fazem), afeição (dizemos sim a quem gostamos), autoridade (confiamos em especialistas) e escassez (o que é raro parece valer mais).',
        'Conhecer os seis serve dos dois lados: para comunicar melhor algo bom, e para perceber quando estão usando você. “Só hoje!” e “últimas unidades!” são escassez.',
      ],
      items: [
        { term: 'reciprocidade', meaning: 'quem ganha algo quer retribuir', how: 'A amostra grátis do supermercado.' },
        { term: 'prova social', meaning: 'fazer o que os outros fazem', how: '“Mais vendido”, as avaliações com estrelas.' },
        { term: 'escassez', meaning: 'o raro parece valer mais', how: '“Últimas unidades”, “só hoje”.' },
        { term: 'autoridade', meaning: 'confiar em quem parece especialista', how: 'O jaleco branco no comercial.' },
      ],
      quiz: [
        { q: '“Só restam 2 quartos neste hotel!” usa qual princípio?', options: ['Escassez', 'Reciprocidade', 'Afeição'], answer: 0 },
        { q: 'A estrelinha “mais vendido” usa qual princípio?', options: ['Prova social', 'Autoridade', 'Coerência'], answer: 0 },
        { q: 'A amostra grátis no mercado usa qual princípio?', options: ['Reciprocidade', 'Escassez', 'Autoridade'], answer: 0 },
      ],
    },
  ],
};

export const MKT_NUMEROS: MiniCourse = {
  id: 'mkt-numeros',
  name: 'As contas do marketing',
  emoji: '📊',
  kind: 'marketing',
  summary: 'O funil AIDA, a taxa de conversão, quanto custa um cliente e quanto ele vale: o marketing medido com números (e feito na aba “Na prática”).',
  sources: [
    {
      label: 'E. K. Strong, “Theories of Selling”, Journal of Applied Psychology 9 (1925), que atribui a fórmula AIDA a E. St. Elmo Lewis',
      url: 'https://scholar.google.com/scholar?q=%22Theories+of+Selling%22+Strong+1925',
    },
    { label: 'P. Farris et al., “Marketing Metrics” (Wharton School Publishing, 2010)', url: 'https://openlibrary.org/search?q=Marketing+Metrics+Farris' },
  ],
  lessons: [
    {
      id: 'funil',
      title: 'O funil AIDA',
      emoji: '🔻',
      intro: [
        'No fim do século XIX, o publicitário americano E. St. Elmo Lewis descreveu os passos de uma boa venda: chamar a Atenção, despertar o Interesse, criar o Desejo e levar à Ação. A sigla AIDA é usada até hoje.',
        'Como em cada passo muita gente desiste, o caminho parece um funil: muitos veem, menos se interessam, poucos compram. A taxa de conversão é a fração que passa de um passo para o outro.',
        'Exemplo: 10.000 pessoas viram o anúncio, 400 entraram no site e 20 compraram. A conversão do site é 20 ÷ 400 = 5%. Teste com os seus números na aba “Na prática”.',
      ],
      items: [
        { term: 'AIDA', meaning: 'Atenção, Interesse, Desejo, Ação', how: 'Atribuída a E. St. Elmo Lewis, fim do século XIX.' },
        { term: 'taxa de conversão', meaning: 'quem fez a ação ÷ quem chegou ao passo', how: '20 compras ÷ 400 visitas = 5%.' },
      ],
      quiz: [
        { q: 'O que vem depois do Interesse, no AIDA?', options: ['Desejo', 'Atenção', 'Avaliação'], answer: 0 },
        { q: '400 pessoas visitaram a loja e 20 compraram. Qual a conversão?', options: ['5%', '20%', '50%'], answer: 0 },
      ],
    },
    {
      id: 'cac-ltv',
      title: 'Quanto custa e quanto vale um cliente',
      emoji: '⚖️',
      intro: [
        'O custo de aquisição de cliente (CAC) é tudo o que se gastou em marketing e vendas num período dividido pelo número de clientes novos. Gastou R$ 5.000 e ganhou 100 clientes: o CAC é R$ 50.',
        'O valor do cliente ao longo do tempo (LTV, de lifetime value) é quanto ele deixa de lucro enquanto continua comprando. Um cliente que dá R$ 20 de margem por mês e fica 10 meses vale R$ 200.',
        'A regra de bolso: o LTV tem de ser bem maior que o CAC. Se cada cliente custa mais do que deixa, quanto mais a empresa vende, mais ela perde.',
      ],
      items: [
        { term: 'CAC', meaning: 'gasto em marketing e vendas ÷ clientes novos', how: 'R$ 5.000 ÷ 100 = R$ 50 por cliente.' },
        { term: 'LTV', meaning: 'quanto o cliente deixa de lucro enquanto fica', how: 'R$ 20 por mês × 10 meses = R$ 200.' },
        { term: 'churn', meaning: 'a fração de clientes que vai embora num período', how: 'Quanto menor, mais tempo o cliente fica.' },
      ],
      quiz: [
        { q: 'Gastei R$ 3.000 e ganhei 60 clientes. Qual o CAC?', options: ['R$ 50', 'R$ 180', 'R$ 20'], answer: 0 },
        { q: 'Para o negócio dar certo, o LTV deve ser…', options: ['Bem maior que o CAC', 'Menor que o CAC', 'Igual a zero'], answer: 0 },
      ],
    },
  ],
};

export const MKT_ETICA: MiniCourse = {
  id: 'mkt-etica',
  name: 'Propaganda com ética',
  emoji: '🧭',
  kind: 'marketing',
  summary: 'O que a lei proíbe na propaganda, o que o CONAR julga e o cuidado com as crianças e com o “verde de fachada”.',
  sources: [
    { label: 'Código de Defesa do Consumidor, Lei nº 8.078/1990, arts. 36 a 38', url: 'https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm' },
    { label: 'CONAR, Código Brasileiro de Autorregulamentação Publicitária', url: 'http://www.conar.org.br/' },
    { label: 'Conanda, Resolução nº 163, de 13 de março de 2014', url: 'https://www.gov.br/mdh/pt-br/navegue-por-temas/crianca-e-adolescente/conanda' },
  ],
  lessons: [
    {
      id: 'cdc',
      title: 'Enganosa e abusiva',
      emoji: '🚫',
      intro: [
        'O Código de Defesa do Consumidor (Lei nº 8.078, de 1990) proíbe, no artigo 37, a publicidade enganosa e a abusiva.',
        'Enganosa é a que induz ao erro sobre o produto: a característica, a qualidade, a quantidade, o preço. Também engana quem omite um dado essencial (a “letra miúda” que muda tudo). Abusiva é a que discrimina, incita a violência, explora o medo ou a superstição, se aproveita da inexperiência da criança ou desrespeita o meio ambiente.',
        'E o artigo 36 diz que a publicidade tem de ser fácil de reconhecer como publicidade. É por isso que influenciadores marcam #publi.',
      ],
      items: [
        { term: 'publicidade enganosa', meaning: 'induz ao erro, mesmo por omissão', how: 'CDC, art. 37, § 1º e § 3º.' },
        { term: 'publicidade abusiva', meaning: 'discrimina, assusta, explora a criança', how: 'CDC, art. 37, § 2º.' },
        { term: '#publi', meaning: 'avisa que o post é propaganda', how: 'CDC, art. 36: a publicidade tem de ser identificável.' },
      ],
      quiz: [
        { q: 'Esconder um dado essencial do produto é publicidade…', options: ['Enganosa', 'Permitida', 'Institucional'], answer: 0 },
        { q: 'Por que o influenciador marca #publi?', options: ['A lei exige que a propaganda seja identificável', 'Para ganhar mais curtidas', 'Por costume, sem nenhuma regra'], answer: 0 },
      ],
    },
    {
      id: 'criancas-verde',
      title: 'Crianças e verde de fachada',
      emoji: '🌱',
      intro: [
        'Em 2014, a Resolução nº 163 do Conanda (Conselho Nacional dos Direitos da Criança e do Adolescente) considerou abusiva a publicidade dirigida à criança com linguagem infantil, personagens e brindes para convencê-la a consumir.',
        'O CONAR, o conselho de autorregulamentação criado pelas próprias agências e anunciantes em 1980, julga queixas de consumidores e de concorrentes e pode recomendar que um anúncio mude ou saia do ar.',
        'Outro cuidado é o “greenwashing” (maquiagem verde): dizer que o produto é ecológico sem provar. O código do CONAR pede que as afirmações ambientais sejam verdadeiras, exatas e possíveis de comprovar.',
      ],
      items: [
        { term: 'CONAR', meaning: 'Conselho Nacional de Autorregulamentação Publicitária', how: 'Criado em 1980 pelo próprio mercado publicitário.' },
        { term: 'Resolução 163', meaning: 'publicidade dirigida à criança é abusiva', how: 'Conanda, 2014.' },
        { term: 'greenwashing', meaning: 'dizer que é ecológico sem provar', how: '“Maquiagem verde”.' },
      ],
      quiz: [
        { q: 'O que o Conanda considerou abusivo em 2014?', options: ['Publicidade dirigida à criança para ela consumir', 'Toda propaganda de brinquedo para adultos', 'Anúncio de jornal'], answer: 0 },
        { q: 'Dizer que um produto é “100% sustentável” sem provar é…', options: ['Greenwashing', 'Posicionamento', 'Prova social'], answer: 0 },
      ],
    },
  ],
};

export const UNIDADES_MKT: MiniCourse[] = [MKT_INICIO, MKT_4PS, MKT_PUBLICO, MKT_MENTE, MKT_NUMEROS, MKT_ETICA].map(comOpcoesEmbaralhadas);

/** Os ramos que ainda vão chegar (a lista do dono em `docs/areas-futuras.md`). */
export const PROXIMAS_UNIDADES_MKT = [
  { emoji: '💎', nome: 'Marca (branding)', sobre: 'O nome, o logotipo, a voz e a promessa: como uma marca vira parte da vida das pessoas.' },
  { emoji: '🌐', nome: 'Marketing digital', sobre: 'Busca (SEO), anúncios pagos, redes sociais, e-mail e conteúdo.' },
  { emoji: '🔍', nome: 'Pesquisa de mercado', sobre: 'Questionários, entrevistas e testes A/B: perguntar antes de apostar.' },
  { emoji: '🤝', nome: 'Marketing social e de causa', sobre: 'Campanhas de vacinação, doação de sangue e de causas, e como saber se funcionaram.' },
  { emoji: '🏬', nome: 'Varejo e ponto de venda', sobre: 'A vitrine, a prateleira e o caminho do cliente dentro da loja.' },
];
