import type { NatureItem } from './fauna-musica';

/**
 * Dinheiro de cada país da cultura por país (src/data/cultura-paises.ts): a moeda, as notas e moedas
 * que chamam a atenção, como as pessoas pagam no dia a dia e a gorjeta. Os sistemas de pagamento são
 * citados pelo nome quando são o jeito comum de pagar no país (Pix, Swish, MB WAY…). Só fatos bem
 * estabelecidos; valores de câmbio ficam de fora, porque mudam todo dia.
 */
export const DINHEIRO_PAISES: Record<string, NatureItem[]> = {
  ROU: [
    { emoji: '💵', name: 'Leu romeno', local: 'leu (RON)', fact: 'Um leu tem cem bani. As notas, de um a quinhentos lei, são de plástico (polímero). A Romênia é da União Europeia, mas ainda não adotou o euro.' },
    { emoji: '💳', name: 'Cartão por aproximação', local: 'card contactless', fact: 'Nas cidades, o cartão por aproximação é aceito em quase toda loja; nas feiras (piață) e no interior, o dinheiro vivo ainda manda.' },
    { emoji: '🍽️', name: 'Gorjeta', local: 'bacșiș', fact: 'Nos restaurantes, costuma-se deixar cerca de dez por cento, em dinheiro ou somado no cartão.' },
  ],
  MDA: [
    { emoji: '💵', name: 'Leu moldávio', local: 'leu moldovenesc (MDL)', fact: 'Um leu tem cem bani, como na Romênia, mas é outra moeda e não vale o mesmo que o leu romeno.' },
    { emoji: '💶', name: 'Dinheiro vivo e remessas', local: 'numerar', fact: 'O dinheiro vivo ainda é muito usado, sobretudo fora de Chișinău. O dinheiro que os moldávios que trabalham no exterior mandam para as famílias pesa muito na economia do país.' },
    { emoji: '💳', name: 'Cartão nas cidades', local: 'card bancar', fact: 'Em Chișinău, cartões e pagamento pelo celular são aceitos nas lojas, nos cafés e no transporte.' },
  ],
  BRA: [
    { emoji: '💵', name: 'Real', local: 'real (BRL, R$)', fact: 'Um real tem cem centavos. Cada nota traz um animal brasileiro: a tartaruga-marinha na de dois, a garça na de cinco, a onça-pintada na de cinquenta e o lobo-guará na de duzentos, lançada em 2020.' },
    { emoji: '📱', name: 'Pix', local: 'Pix', fact: 'Criado pelo Banco Central em 2020, transfere dinheiro na hora, a qualquer hora, por QR code ou por uma «chave» (CPF, telefone ou e-mail). Virou o jeito mais comum de pagar, até na feira e no vendedor de rua.' },
    { emoji: '💳', name: 'Parcelado no cartão', local: 'em 3x sem juros', fact: 'Um costume bem brasileiro: dividir a compra no cartão de crédito em várias parcelas, muitas vezes «sem juros».' },
  ],
  PRT: [
    { emoji: '💶', name: 'Euro', local: 'euro (EUR)', fact: 'Portugal usa o euro desde 2002 (no lugar do escudo). As moedas portuguesas trazem selos dos primeiros reis e os castelos do escudo nacional.' },
    { emoji: '🏧', name: 'Multibanco', local: 'Multibanco', fact: 'A rede de caixas eletrônicos dos bancos portugueses paga contas, impostos, ingressos e até recarga de celular; nas compras online, muitos sites dão uma «referência Multibanco» para pagar.' },
    { emoji: '📱', name: 'MB WAY', local: 'MB WAY', fact: 'App dos bancos para mandar dinheiro pelo número de telefone e pagar nas lojas; é o jeito comum de dividir a conta entre amigos.' },
  ],
  ESP: [
    { emoji: '💶', name: 'Euro', local: 'euro (EUR)', fact: 'A Espanha usa o euro desde 2002 (no lugar da peseta). As moedas espanholas trazem o rei, a catedral de Santiago de Compostela e Cervantes.' },
    { emoji: '📱', name: 'Bizum', local: 'Bizum', fact: 'Sistema criado pelos bancos espanhóis em 2016 para mandar dinheiro na hora pelo número de telefone; «te hago un Bizum» virou expressão do dia a dia.' },
    { emoji: '🍽️', name: 'Gorjeta', local: 'propina', fact: 'Não é obrigatória: muita gente só arredonda a conta ou deixa as moedas do troco.' },
  ],
  MEX: [
    { emoji: '💵', name: 'Peso mexicano', local: 'peso (MXN, $)', fact: 'Um peso tem cem centavos. O símbolo é o mesmo cifrão do dólar: nos preços, «$» quer dizer pesos.' },
    { emoji: '🪙', name: 'Dinheiro vivo', local: 'efectivo', fact: 'Nos mercados, nas barracas de tacos e no transporte, o dinheiro vivo domina. As lojas de conveniência recebem pagamento de contas e de compras feitas pela internet.' },
    { emoji: '🍽️', name: 'Gorjeta', local: 'propina', fact: 'Nos restaurantes, o costume é deixar de dez a quinze por cento.' },
  ],
  COL: [
    { emoji: '💵', name: 'Peso colombiano', local: 'peso (COP)', fact: 'Os preços têm muitos zeros: as notas vão de dois mil a cem mil pesos, e uma refeição simples custa dezenas de milhares.' },
    { emoji: '📱', name: 'Carteiras digitais', local: 'billeteras digitales', fact: 'Os apps dos bancos que mandam dinheiro pelo número de celular se espalharam e hoje pagam até pequenas compras no bairro.' },
    { emoji: '🍽️', name: 'Serviço voluntário', local: 'propina voluntaria', fact: 'Os restaurantes perguntam se você quer incluir o serviço, em geral dez por cento. Por lei, é voluntário e pode ser recusado.' },
  ],
  ARG: [
    { emoji: '💵', name: 'Peso argentino', local: 'peso (ARS)', fact: 'Décadas de inflação alta fizeram os preços mudarem rápido e obrigaram o país a lançar notas de valor cada vez maior.' },
    { emoji: '📱', name: 'Pagamento por QR', local: 'pago con QR', fact: 'Pagar com o celular lendo um QR code, ou com transferência, virou comum até em quiosques e feiras.' },
    { emoji: '🍽️', name: 'Gorjeta', local: 'propina', fact: 'Costuma-se deixar cerca de dez por cento nos restaurantes, muitas vezes em dinheiro vivo.' },
  ],
  PER: [
    { emoji: '💵', name: 'Sol', local: 'sol (PEN, S/)', fact: 'Um sol tem cem céntimos. O nome lembra o sol dos incas; até 2015 a moeda se chamava «novo sol».' },
    { emoji: '📱', name: 'Pagamento pelo celular', local: 'billeteras móviles', fact: 'Os apps que pagam por QR code ou pelo número de celular se espalharam tanto que aparecem até nas bancas dos mercados.' },
    { emoji: '💱', name: 'Dólar lado a lado', local: 'dólares', fact: 'Em muitos lugares turísticos, os preços aparecem em soles e em dólares, e as casas de câmbio estão por toda parte.' },
  ],
  CHL: [
    { emoji: '💵', name: 'Peso chileno', local: 'peso (CLP)', fact: 'O peso chileno não usa centavos. Desde 2017, no pagamento em dinheiro, o total é arredondado para múltiplos de dez pesos, porque as moedas de um e de cinco saíram de circulação.' },
    { emoji: '🏦', name: 'Conta para todos', local: 'CuentaRUT', fact: 'A conta simples do banco estatal, aberta só com o número de identidade (RUT), levou o cartão e a transferência a quase toda a população.' },
    { emoji: '🍽️', name: 'Gorjeta sugerida', local: 'propina', fact: 'A conta dos restaurantes costuma sugerir dez por cento de gorjeta, que o cliente pode aceitar ou não.' },
  ],
  CUB: [
    { emoji: '💵', name: 'Peso cubano', local: 'peso (CUP)', fact: 'Até 2021, Cuba tinha duas moedas, o peso cubano e o peso conversível (CUC); a reforma daquele ano acabou com o CUC.' },
    { emoji: '💳', name: 'Lojas em moeda estrangeira', local: 'MLC', fact: 'Parte das lojas só aceita cartões carregados com moeda estrangeira, o que separa quem recebe dinheiro de fora de quem não recebe.' },
    { emoji: '📱', name: 'Pagamento pelo celular', local: 'Transfermóvil', fact: 'O app estatal paga contas de luz, telefone e compras, mas o dinheiro vivo ainda é o mais comum no dia a dia.' },
  ],
  ITA: [
    { emoji: '💶', name: 'Euro', local: 'euro (EUR)', fact: 'A Itália usa o euro desde 2002 (no lugar da lira). Cada moeda italiana tem uma obra de arte: o Homem Vitruviano de Leonardo na de um euro, o Coliseu na de cinco centavos.' },
    { emoji: '☕', name: 'Pagar antes, no caixa', local: 'scontrino', fact: 'Em muitos bares, você paga primeiro no caixa e depois mostra o recibo (scontrino) no balcão para pedir o café.' },
    { emoji: '🍽️', name: 'Couvert', local: 'coperto', fact: 'Muitos restaurantes cobram um valor fixo por pessoa, o coperto, pelo pão e pela mesa; a gorjeta não é obrigatória.' },
  ],
  SWE: [
    { emoji: '💵', name: 'Coroa sueca', local: 'krona (SEK)', fact: 'Uma coroa tem cem öre, mas as moedas de öre saíram de circulação. As notas trazem personagens da cultura sueca, como Astrid Lindgren, a autora de Pippi Meialonga, na de vinte.' },
    { emoji: '📱', name: 'Swish', local: 'Swish', fact: 'Criado pelos bancos suecos em 2012, manda dinheiro na hora pelo número de telefone e é usado até em feiras, igrejas e vendas de garagem.' },
    { emoji: '🚫', name: 'Loja sem dinheiro vivo', local: 'Vi hanterar inte kontanter', fact: 'É comum ver o aviso «não aceitamos dinheiro vivo»: a Suécia é um dos países que menos usa cédulas no mundo.' },
  ],
  NOR: [
    { emoji: '💵', name: 'Coroa norueguesa', local: 'krone (NOK)', fact: 'As notas mais novas trazem o mar da Noruega: um farol, um barco viking, o bacalhau, um barco de resgate e as ondas.' },
    { emoji: '📱', name: 'Vipps', local: 'Vipps', fact: 'O app dos bancos noruegueses, criado em 2015, virou verbo: «vippse» é mandar dinheiro pelo celular. Hoje faz parte do Vipps MobilePay.' },
    { emoji: '💳', name: 'Cartão para tudo', local: 'bankkort', fact: 'Quase tudo se paga com cartão ou celular, até um café na estrada; a lei, porém, garante o direito de pagar em dinheiro vivo.' },
  ],
  DNK: [
    { emoji: '🪙', name: 'Coroa dinamarquesa', local: 'krone (DKK)', fact: 'As moedas de uma, duas e cinco coroas têm um furo no meio. A coroa dinamarquesa é atrelada ao euro, mas a Dinamarca não adotou a moeda comum.' },
    { emoji: '💳', name: 'Dankort', local: 'Dankort', fact: 'O cartão de débito nacional, criado em 1983, é aceito em praticamente todas as lojas do país.' },
    { emoji: '📱', name: 'MobilePay', local: 'MobilePay', fact: 'App para pagar e mandar dinheiro pelo celular, lançado em 2013; hoje faz parte do Vipps MobilePay e é usado na Dinamarca, na Finlândia e nas ilhas Faroé.' },
  ],
  ISL: [
    { emoji: '🐟', name: 'Coroa islandesa', local: 'króna (ISK)', fact: 'As moedas trazem animais do mar: bacalhau, golfinhos, capelim, caranguejo e o peixe-lapa.' },
    { emoji: '💳', name: 'Cartão até para o pão', local: 'kort', fact: 'Os islandeses pagam com cartão até as compras mais pequenas; dá para passar uma viagem inteira sem tocar em dinheiro vivo.' },
    { emoji: '🍽️', name: 'Sem gorjeta', local: 'þjórfé', fact: 'O serviço já está incluído no preço, e a gorjeta não faz parte do costume.' },
  ],
  FRO: [
    { emoji: '💵', name: 'Coroa feroesa', local: 'króna', fact: 'As ilhas têm notas próprias, com paisagens e animais pintados em aquarela, mas elas valem exatamente o mesmo que a coroa dinamarquesa, e as moedas são as da Dinamarca.' },
    { emoji: '🔄', name: 'Duas notas, uma moeda', local: 'donsk og føroysk', fact: 'Nas ilhas, notas dinamarquesas e feroesas circulam juntas; já na Dinamarca, a nota feroesa quase nunca é aceita e precisa ser trocada no banco.' },
    { emoji: '📱', name: 'Cartão e celular', local: 'MobilePay', fact: 'Como na Dinamarca, paga-se quase tudo com cartão e com o MobilePay.' },
  ],
  RUS: [
    { emoji: '💵', name: 'Rublo', local: 'рубль (RUB)', fact: 'Um rublo tem cem copeques. As notas trazem cidades russas: Vladivostok na de dois mil, a ponte de Khabarovsk na de cinco mil.' },
    { emoji: '💳', name: 'Cartão Mir', local: 'Мир', fact: 'O sistema nacional de cartões, criado em 2015. Desde 2022, os cartões Visa e Mastercard emitidos fora da Rússia não funcionam no país.' },
    { emoji: '📱', name: 'Transferência pelo telefone', local: 'СБП', fact: 'O Sistema de Pagamentos Rápidos do Banco Central, de 2019, manda dinheiro pelo número de telefone e paga compras por QR code.' },
  ],
  FIN: [
    { emoji: '💶', name: 'Euro', local: 'euro (EUR)', fact: 'A Finlândia trocou o marco pelo euro em 2002. As moedas de um e dois centavos quase não circulam: nos pagamentos em dinheiro, o total é arredondado para cinco centavos.' },
    { emoji: '📱', name: 'MobilePay', local: 'MobilePay', fact: 'O app de pagamento pelo celular é usado para dividir contas e pagar em pequenos comércios.' },
    { emoji: '💳', name: 'Cartão para tudo', local: 'kortti', fact: 'Cartão e celular pagam quase tudo, do ônibus ao mercado; a gorjeta não é costume.' },
  ],
  EST: [
    { emoji: '💶', name: 'Euro', local: 'euro (EUR)', fact: 'A Estônia trocou a coroa (kroon) pelo euro em 2011. As moedas estonianas trazem o mapa do país.' },
    { emoji: '🪪', name: 'País digital', local: 'ID-kaart', fact: 'Com o cartão de identidade eletrônico ou o celular, os estonianos entram no banco, assinam contratos e pagam impostos pela internet em minutos.' },
    { emoji: '💳', name: 'Cartão em todo lugar', local: 'pangakaart', fact: 'Quase todo comércio aceita cartão por aproximação, e a transferência entre bancos cai na hora.' },
  ],
  LTU: [
    { emoji: '💶', name: 'Euro', local: 'euras (EUR)', fact: 'A Lituânia trocou o litas pelo euro em 2015. As moedas lituanas trazem o Vytis, o cavaleiro do brasão nacional.' },
    { emoji: '💳', name: 'Cartão e transferência', local: 'banko kortelė', fact: 'O cartão por aproximação é aceito em quase toda parte, e as transferências entre bancos são instantâneas.' },
    { emoji: '🧺', name: 'Dinheiro nas feiras', local: 'grynieji', fact: 'Nas feiras de rua e no interior, o dinheiro vivo ainda é bem-vindo.' },
  ],
  LVA: [
    { emoji: '💶', name: 'Euro', local: 'eiro (EUR)', fact: 'A Letônia trocou o lats pelo euro em 2014. As moedas de um e dois euros trazem a «donzela letã», a mesma figura de uma antiga moeda de cinco lats.' },
    { emoji: '💳', name: 'Cartão e transferência', local: 'bankas karte', fact: 'O cartão por aproximação domina nas cidades, e a transferência bancária pelo celular é o jeito comum de pagar um amigo.' },
    { emoji: '🧺', name: 'Mercado Central', local: 'Centrāltirgus', fact: 'Nos hangares de dirigíveis do Mercado Central de Riga, muitas bancas ainda preferem dinheiro vivo.' },
  ],
  JPN: [
    { emoji: '💴', name: 'Iene', local: '円 (JPY, ¥)', fact: 'As moedas de cinco e de cinquenta ienes têm um furo no meio. Em 2024 entraram em circulação notas novas de mil, cinco mil e dez mil ienes.' },
    { emoji: '🚃', name: 'Cartão de transporte', local: 'IC カード', fact: 'Os cartões recarregáveis de trem, como o Suica, também pagam em lojas de conveniência e máquinas de bebida; e o pagamento por QR code no celular cresceu muito.' },
    { emoji: '🪙', name: 'A bandejinha do troco', local: 'カルトン', fact: 'Nas lojas, o dinheiro vai numa bandejinha no balcão, não na mão do caixa. Gorjeta não existe: deixar dinheiro na mesa pode até causar constrangimento.' },
  ],
  KOR: [
    { emoji: '💴', name: 'Won', local: '원 (KRW, ₩)', fact: 'As notas trazem figuras da dinastia Joseon: o rei Sejong, criador do hangul, na de dez mil; o sábio Yulgok na de cinco mil; e a mãe dele, a artista Shin Saimdang, na de cinquenta mil.' },
    { emoji: '💳', name: 'Cartão para tudo', local: '카드', fact: 'Paga-se com cartão até um chiclete, e muitos cafés já não aceitam dinheiro vivo.' },
    { emoji: '🚇', name: 'Cartão de transporte', local: '티머니', fact: 'O cartão T-money paga metrô, ônibus e táxi e também serve nas lojas de conveniência. Gorjeta não é costume.' },
  ],
  FRA: [
    { emoji: '💶', name: 'Euro', local: 'euro (EUR)', fact: 'A França trocou o franco pelo euro em 2002. Nas moedas francesas aparecem a árvore da vida, a Semeadora e Marianne, o símbolo da República.' },
    { emoji: '💳', name: 'Carte Bancaire', local: 'CB', fact: 'O sistema nacional de cartões é aceito em quase toda loja; pagar por aproximação («sans contact») virou o normal.' },
    { emoji: '🧾', name: 'Cheque e serviço incluído', local: 'chèque, service compris', fact: 'A França ainda é um dos países europeus que mais usam cheque. Nos restaurantes, o serviço já vem incluído; deixar umas moedas é um agrado, não uma obrigação.' },
  ],
  GBR: [
    { emoji: '💷', name: 'Libra esterlina', local: 'pound sterling (GBP, £)', fact: 'Uma libra tem cem pence. Além do Banco da Inglaterra, bancos da Escócia e da Irlanda do Norte emitem notas próprias, que valem o mesmo.' },
    { emoji: '💳', name: 'Aproximação em tudo', local: 'contactless', fact: 'O cartão ou o celular por aproximação pagam quase tudo, inclusive o metrô de Londres: basta encostar na catraca.' },
    { emoji: '🍽️', name: 'Taxa de serviço', local: 'service charge', fact: 'Muitos restaurantes já somam na conta uma taxa de serviço de cerca de doze e meio por cento; nos pubs, não se dá gorjeta no balcão.' },
  ],
};
