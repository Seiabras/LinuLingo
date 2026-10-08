import type { NatureItem } from './fauna-musica';

/**
 * Patrimônios da Humanidade (UNESCO) de cada país, mostrados no cartão do país no mapa.
 * Pedido do Matheus (05/10/2026): "poder ver no mapa patrimônios da humanidade".
 *
 * A UNESCO já passa de 1.200 sítios no mundo inteiro — catalogar todos seria menos útil que
 * escolher, por país, os mais emblemáticos (mesmo critério já usado em CULTURA_PAISES: poucos
 * itens bem escolhidos, não uma lista exaustiva). Ano = o de inscrição na Lista do Patrimônio
 * Mundial; fonte: as páginas "List of World Heritage Sites in <país>" da Wikipédia em inglês,
 * conferidas uma a uma em 08/10/2026. Site transnacional (ex. Arco Geodésico de Struve) aparece
 * nos países do app que o compartilham, com nota de que é transnacional.
 *
 * Cobertura (08/10/2026): só os países que já têm ficha cultural em `cultura-paises.ts` E que
 * já foram pesquisados — ARG, CHL, COL, CUB, GBR, KEN, MEX, PER e TZA entraram numa segunda
 * leva de pesquisa, também em 08/10/2026. As Ilhas Faroé (FRO) foram pesquisadas e CONFIRMADAS
 * sem nenhum sítio da UNESCO — por isso não têm entrada aqui (não é esquecimento).
 */
export const PATRIMONIOS_PAISES: Record<string, NatureItem[]> = {
  ROU: [
    { emoji: '🏛️', name: 'Delta do Danúbio', fact: 'Patrimônio da UNESCO desde 1991: a maior área de zonas úmidas da Europa, lar de mais de 300 espécies de aves e do esturjão, hoje ameaçado.' },
    {
      emoji: '🏛️',
      name: 'Vilarejos com igrejas fortificadas da Transilvânia',
      fact: 'Patrimônio da UNESCO desde 1993: sete vilarejos medievais com igrejas fortificadas, construídas pelos saxões da Transilvânia entre os séculos XIII e XVI.',
    },
    {
      emoji: '🏛️',
      name: 'Igrejas pintadas da Moldávia (Bucovina)',
      fact: 'Patrimônio da UNESCO desde 1993: oito igrejas dos séculos XV e XVI, famosas pelos afrescos de inspiração bizantina que cobrem até as paredes externas.',
    },
    {
      emoji: '🏛️',
      name: 'Fortalezas dácias dos montes Orăștie',
      fact: 'Patrimônio da UNESCO desde 1999: seis fortalezas do século I a.C./d.C., erguidas contra a conquista romana durante as guerras dácicas.',
    },
    {
      emoji: '🏛️',
      name: 'Igrejas de madeira de Maramureș',
      fact: 'Patrimônio da UNESCO desde 1999: oito igrejas dos séculos XVII e XVIII que combinam influência ortodoxa e gótica, erguidas inteiramente em madeira.',
    },
  ],
  MDA: [
    {
      emoji: '🏛️',
      name: 'Arco Geodésico de Struve',
      fact: 'Patrimônio da UNESCO desde 2005 (sítio transnacional, dividido com mais nove países): uma cadeia de pontos de triangulação do século XIX, usada para medir pela primeira vez o tamanho e a forma exatos da Terra.',
    },
  ],
  ESP: [
    {
      emoji: '🏛️',
      name: 'Alhambra, Generalife e Albaicín',
      fact: 'Patrimônio da UNESCO desde 1984: o conjunto de fortaleza, palácio e bairro mouriscos de Granada, auge da arquitetura da dinastia nazarida.',
    },
    { emoji: '🏛️', name: 'Obras de Antoni Gaudí', fact: 'Patrimônio da UNESCO desde 1984: sete edifícios modernistas de Barcelona, entre eles o Parque Güell, a Casa Milà e a Sagrada Família.' },
    {
      emoji: '🏛️',
      name: 'Cidade histórica de Toledo',
      fact: 'Patrimônio da UNESCO desde 1986: a "cidade das três culturas", onde conviveram por séculos heranças cristã, muçulmana e judaica.',
    },
    {
      emoji: '🏛️',
      name: 'Caverna de Altamira',
      fact: 'Patrimônio da UNESCO desde 1985: pinturas rupestres do Paleolítico Superior, entre 35 mil e 11 mil anos atrás, um dos primeiros registros de arte da humanidade.',
    },
    {
      emoji: '🏛️',
      name: 'Centro histórico de Santiago de Compostela',
      fact: 'Patrimônio da UNESCO desde 1985: o destino final do Caminho de Santiago, com sua catedral e traçado medieval de peregrinação.',
    },
  ],
  ITA: [
    { emoji: '🏛️', name: 'Centro histórico de Roma', fact: 'Patrimônio da UNESCO desde 1980: o coração do antigo Império Romano, com monumentos como o Coliseu e o Panteão.' },
    { emoji: '🏛️', name: 'Veneza e sua lagoa', fact: 'Patrimônio da UNESCO desde 1987: a república marítima construída sobre ilhas, com a Basílica de São Marcos e o Palácio Ducal.' },
    { emoji: '🏛️', name: 'Centro histórico de Florença', fact: 'Patrimônio da UNESCO desde 1982: símbolo do Renascimento, com a Catedral de Florença e obras de Michelangelo.' },
    {
      emoji: '🏛️',
      name: 'Áreas arqueológicas de Pompeia e Herculano',
      fact: 'Patrimônio da UNESCO desde 1997: as cidades romanas soterradas pela erupção do Vesúvio em 79 d.C., congeladas no tempo.',
    },
    {
      emoji: '🏛️',
      name: 'Piazza del Duomo, Pisa',
      fact: 'Patrimônio da UNESCO desde 1987: o conjunto medieval com a catedral, o batistério e a Torre Inclinada, famosa por sua inclinação.',
    },
  ],
  FRA: [
    {
      emoji: '🏛️',
      name: 'Monte Saint-Michel e sua baía',
      fact: 'Patrimônio da UNESCO desde 1979: a abadia e o vilarejo erguidos numa pequena ilha de maré, um dos marcos mais reconhecíveis da França.',
    },
    { emoji: '🏛️', name: 'Palácio e parque de Versalhes', fact: 'Patrimônio da UNESCO desde 1979: a residência real mandada construir por Luís XIV, símbolo do barroco francês.' },
    {
      emoji: '🏛️',
      name: 'Paris, às margens do Sena',
      fact: 'Patrimônio da UNESCO desde 1991: o centro histórico com monumentos de diferentes épocas, da Idade Média ao século XX, incluindo a Torre Eiffel e Notre-Dame.',
    },
    { emoji: '🏛️', name: 'Catedral de Chartres', fact: 'Patrimônio da UNESCO desde 1979: um dos exemplos mais completos da arquitetura gótica francesa, com vitrais originais do século XIII.' },
    { emoji: '🏛️', name: 'Canal du Midi', fact: 'Patrimônio da UNESCO desde 1996: um sistema de canais navegáveis de 360 km, ligando o Atlântico ao Mediterrâneo.' },
  ],
  RUS: [
    {
      emoji: '🏛️',
      name: 'Kremlin e Praça Vermelha, Moscou',
      fact: 'Patrimônio da UNESCO desde 1990: o centro histórico e político da Rússia, com a Catedral de São Basílio e as muralhas do Kremlin.',
    },
    {
      emoji: '🏛️',
      name: 'Centro histórico de São Petersburgo',
      fact: 'Patrimônio da UNESCO desde 1990: a capital imperial fundada por Pedro, o Grande, com seus palácios e canais.',
    },
    { emoji: '🏛️', name: 'Lago Baikal', fact: 'Patrimônio da UNESCO desde 1996: o lago de água doce mais fundo e mais antigo do mundo, com uma biodiversidade única.' },
    { emoji: '🏛️', name: 'Kizhi Pogost', fact: 'Patrimônio da UNESCO desde 1990: um conjunto de igrejas de madeira construídas sem um único prego, numa ilha do lago Onega.' },
    { emoji: '🏛️', name: 'Montanhas Douradas do Altai', fact: 'Patrimônio da UNESCO desde 1998: uma das últimas grandes áreas selvagens da Sibéria, com picos nevados e estepes.' },
  ],
  JPN: [
    { emoji: '🏛️', name: 'Castelo de Himeji', fact: 'Patrimônio da UNESCO desde 1993: o melhor exemplo de arquitetura de castelo japonês do início do século XVII, com seus telhados em camadas.' },
    {
      emoji: '🏛️',
      name: 'Monumentos históricos da antiga Kyoto',
      fact: 'Patrimônio da UNESCO desde 1994: dezessete templos e santuários da antiga capital do Japão, de 794 em diante, entre eles o Kinkaku-ji.',
    },
    { emoji: '🏛️', name: 'Monte Fuji', fact: 'Patrimônio da UNESCO desde 2013: o vulcão sagrado que inspirou gerações de artistas, sobretudo nas gravuras em xilogravura.' },
    {
      emoji: '🏛️',
      name: 'Memorial da Paz de Hiroshima',
      fact: 'Patrimônio da UNESCO desde 1996: a ruína do único prédio que restou perto do ponto zero da bomba atômica de 1945, símbolo de paz.',
    },
    {
      emoji: '🏛️',
      name: 'Monumentos budistas da região de Hōryū-ji',
      fact: 'Patrimônio da UNESCO desde 1993: quarenta e oito monumentos, entre eles algumas das construções de madeira mais antigas do mundo, dos séculos VII e VIII.',
    },
  ],
  PRT: [
    {
      emoji: '🏛️',
      name: 'Mosteiro dos Jerónimos e Torre de Belém',
      fact: 'Patrimônio da UNESCO desde 1983: os dois monumentos de Lisboa que celebram a Era dos Descobrimentos portugueses.',
    },
    { emoji: '🏛️', name: 'Convento de Cristo, em Tomar', fact: 'Patrimônio da UNESCO desde 1983: fortaleza templária do século XII que reúne séculos de estilos arquitetônicos diferentes.' },
    {
      emoji: '🏛️',
      name: 'Paisagem cultural de Sintra',
      fact: 'Patrimônio da UNESCO desde 1995: a paisagem romântica do século XIX com o Palácio da Pena e jardins de plantas exóticas.',
    },
    { emoji: '🏛️', name: 'Centro histórico de Évora', fact: 'Patrimônio da UNESCO desde 1986: considerado o melhor exemplo de cidade do período áureo português, com heranças romana, mourisca e renascentista.' },
    { emoji: '🏛️', name: 'Centro histórico do Porto', fact: 'Patrimônio da UNESCO desde 1996: a cidade portuária na foz do rio Douro, com arquitetura que vai do românico ao neoclássico.' },
  ],
  SWE: [
    {
      emoji: '🏛️',
      name: 'Palácio Real de Drottningholm',
      fact: 'Patrimônio da UNESCO desde 1991: a residência da família real sueca, com um teatro do século XVIII ainda em funcionamento e um pavilhão chinês.',
    },
    {
      emoji: '🏛️',
      name: 'Cidade hanseática de Visby',
      fact: 'Patrimônio da UNESCO desde 1995: o centro medieval de comércio báltico na ilha de Gotland, com mais de 200 armazéns e muralhas intactas.',
    },
    {
      emoji: '🏛️',
      name: 'Região da Lapônia',
      fact: 'Patrimônio da UNESCO desde 1996: a maior área de natureza selvagem da Europa, onde o povo sami ainda cria renas do jeito tradicional.',
    },
    {
      emoji: '🏛️',
      name: 'Área mineira da Grande Montanha de Cobre, em Falun',
      fact: 'Patrimônio da UNESCO desde 2001: a mina de cobre que sustentou a economia sueca por séculos, deixando uma cratera gigante.',
    },
    {
      emoji: '🏛️',
      name: 'Alto Litoral / Arquipélago de Kvarken',
      fact: 'Patrimônio da UNESCO desde 2000: a terra aqui ainda sobe quase um centímetro por ano, recuperando-se do peso do gelo da última era glacial.',
    },
  ],
  ISL: [
    {
      emoji: '🏛️',
      name: 'Parque Nacional de Þingvellir',
      fact: 'Patrimônio da UNESCO desde 2004: de 930 a 1798, sediou o Althing, um dos parlamentos mais antigos do mundo, reunido ao ar livre.',
    },
    {
      emoji: '🏛️',
      name: 'Surtsey',
      fact: 'Patrimônio da UNESCO desde 2008: a ilha vulcânica que surgiu do mar entre 1963 e 1967, estudada como laboratório natural de colonização biológica.',
    },
    {
      emoji: '🏛️',
      name: 'Parque Nacional de Vatnajökull',
      fact: 'Patrimônio da UNESCO desde 2019: a geleira mais extensa da Europa, cobrindo vulcões ativos num encontro dramático de gelo e fogo.',
    },
  ],
  EST: [
    {
      emoji: '🏛️',
      name: 'Centro histórico de Tallinn',
      fact: 'Patrimônio da UNESCO desde 1997: um exemplo raro de cidade medieval do norte europeu praticamente intacta, da época hanseática.',
    },
    {
      emoji: '🏛️',
      name: 'Arco Geodésico de Struve',
      fact: 'Patrimônio da UNESCO desde 2005 (sítio transnacional, dividido com mais nove países): pontos de triangulação do século XIX usados para medir o meridiano da Terra pela primeira vez.',
    },
  ],
  LVA: [
    { emoji: '🏛️', name: 'Centro histórico de Riga', fact: 'Patrimônio da UNESCO desde 1997: fundada em 1201, foi uma das principais cidades hanseáticas entre os séculos XIII e XV.' },
    {
      emoji: '🏛️',
      name: 'Cidade velha de Kuldīga',
      fact: 'Patrimônio da UNESCO desde 2023: o centro histórico dos séculos XVI a XVIII, quando a cidade era sede administrativa do Ducado da Curlândia.',
    },
  ],
  LTU: [
    {
      emoji: '🏛️',
      name: 'Centro histórico de Vilnius',
      fact: 'Patrimônio da UNESCO desde 1994: o coração político e cultural do Grão-Ducado da Lituânia, com arquitetura gótica, renascentista e barroca.',
    },
    {
      emoji: '🏛️',
      name: 'Península de Curônia',
      fact: 'Patrimônio da UNESCO desde 2000: uma faixa de dunas de areia de 98 km, dividida com a Rússia, habitada desde a pré-história.',
    },
    {
      emoji: '🏛️',
      name: 'Sítio arqueológico de Kernavė',
      fact: 'Patrimônio da UNESCO desde 2004: camadas de ocupação humana de diferentes épocas, com fortificações de colinas do século XIII.',
    },
  ],
  ARG: [
    { emoji: '🏛️', name: 'Parque Nacional Los Glaciares', fact: 'Patrimônio da UNESCO desde 1981: geleiras e campos de gelo da Patagônia, entre eles o famoso glaciar Perito Moreno.' },
    { emoji: '🏛️', name: 'Parque Nacional Iguazú', fact: 'Patrimônio da UNESCO desde 1984: as Cataratas do Iguaçu e a mata subtropical ao redor, com uma biodiversidade excepcional.' },
    {
      emoji: '🏛️',
      name: 'Cueva de las Manos',
      fact: 'Patrimônio da UNESCO desde 1999: pinturas rupestres com silhuetas de mãos e cenas de caça, feitas por caçadores-coletores entre 8.000 a.C. e 700 d.C.',
    },
    {
      emoji: '🏛️',
      name: 'Quebrada de Humahuaca',
      fact: 'Patrimônio da UNESCO desde 2003: um vale usado como rota de comércio e trânsito por 10 mil anos, desde os primeiros povos andinos até a época colonial.',
    },
  ],
  CHL: [
    {
      emoji: '🏛️',
      name: 'Parque Nacional Rapa Nui',
      fact: 'Patrimônio da UNESCO desde 1995: a Ilha de Páscoa, com os santuários e as estátuas de pedra moai erguidas por colonizadores polinésios.',
    },
    { emoji: '🏛️', name: 'Igrejas de Chiloé', fact: 'Patrimônio da UNESCO desde 2000: igrejas de madeira que misturam a tradição europeia com técnicas locais, num estilo só da ilha de Chiloé.' },
    {
      emoji: '🏛️',
      name: 'Área histórica de Valparaíso',
      fact: 'Patrimônio da UNESCO desde 2003: a arquitetura portuária dos séculos XIX e XX, moldada pela geografia entre o oceano e as colinas.',
    },
    {
      emoji: '🏛️',
      name: 'Oficinas salitreiras de Humberstone e Santa Laura',
      fact: 'Patrimônio da UNESCO desde 2005: antigas refinarias de salitre no deserto do Atacama, onde nasceu a cultura pampina, com língua, costumes e arte próprios.',
    },
  ],
  COL: [
    {
      emoji: '🏛️',
      name: 'Porto, fortalezas e monumentos de Cartagena',
      fact: 'Patrimônio da UNESCO desde 1984: um dos sistemas de fortificação mais completos da América do Sul, erguido pelos espanhóis contra ataques piratas.',
    },
    {
      emoji: '🏛️',
      name: 'Parque Arqueológico de San Agustín',
      fact: 'Patrimônio da UNESCO desde 1995: a maior coleção de monumentos religiosos e estátuas de pedra pré-colombianas da América do Sul (1 a 900 d.C.).',
    },
    {
      emoji: '🏛️',
      name: 'Paisagem cultural cafeeira da Colômbia',
      fact: 'Patrimônio da UNESCO desde 2011: seis áreas de cultivo de café em terreno montanhoso, com uma arquitetura rural própria da mistura espanhola e local.',
    },
    {
      emoji: '🏛️',
      name: 'Parque Nacional Chiribiquete',
      fact: 'Patrimônio da UNESCO desde 2018: um ponto de encontro de biomas na Amazônia, com formações de tepui e milhares de anos de arte rupestre indígena.',
    },
  ],
  CUB: [
    { emoji: '🏛️', name: 'Havana Velha e suas fortificações', fact: 'Patrimônio da UNESCO desde 1982: fundada em 1519, foi um dos principais centros de construção naval do Caribe colonial.' },
    {
      emoji: '🏛️',
      name: 'Trinidad e o Vale dos Engenhos',
      fact: 'Patrimônio da UNESCO desde 1988: uma cidade colonial enriquecida pela produção de açúcar, ao lado de um vale cheio de antigos engenhos e fazendas.',
    },
    { emoji: '🏛️', name: 'Vale de Viñales', fact: 'Patrimônio da UNESCO desde 1999: o vale onde se expandiu, a partir de 1875, o cultivo do tabaco que deu fama aos charutos cubanos.' },
    {
      emoji: '🏛️',
      name: 'Parque Nacional Alejandro de Humboldt',
      fact: 'Patrimônio da UNESCO desde 2001: uma região montanhosa com altíssima biodiversidade, lar de espécies endêmicas como o solenodonte-cubano, ameaçado de extinção.',
    },
  ],
  GBR: [
    {
      emoji: '🏛️',
      name: 'Stonehenge, Avebury e sítios associados',
      fact: 'Patrimônio da UNESCO desde 1986: os círculos de pedra megalíticos mais sofisticados do mundo, erguidos no Neolítico e na Idade do Bronze.',
    },
    { emoji: '🏛️', name: 'Torre de Londres', fact: 'Patrimônio da UNESCO desde 1988: fortaleza erguida depois da conquista normanda de 1066, modelo da arquitetura militar medieval inglesa.' },
    {
      emoji: '🏛️',
      name: 'Calçada do Gigante e costa de Causeway',
      fact: 'Patrimônio da UNESCO desde 1986: milhares de colunas de basalto formadas por atividade vulcânica há 60 milhões de anos, na Irlanda do Norte.',
    },
    {
      emoji: '🏛️',
      name: 'Cidade Velha e Nova de Edimburgo',
      fact: 'Patrimônio da UNESCO desde 1995: o contraste entre o assentamento medieval no alto da colina e a expansão georgiana planejada do século XVIII.',
    },
  ],
  KEN: [
    { emoji: '🏛️', name: 'Cidade Antiga de Lamu', fact: 'Patrimônio da UNESCO desde 2001: o mais antigo assentamento suaíle ainda habitado da África Oriental, construído em pedra de coral e madeira de mangue.' },
    {
      emoji: '🏛️',
      name: 'Parques Nacionais do Lago Turkana',
      fact: 'Patrimônio da UNESCO desde 1997: o maior lago salino alcalino do deserto do mundo, importante para o estudo da evolução humana e da fauna e flora locais.',
    },
    {
      emoji: '🏛️',
      name: 'Parque Nacional do Monte Quênia',
      fact: 'Patrimônio da UNESCO desde 1997: a segunda maior montanha da África, com 5.199 m de altura, geleiras e uma floresta de vegetação única.',
    },
    {
      emoji: '🏛️',
      name: 'Sistema de lagos do Quênia no Vale do Grande Rift',
      fact: 'Patrimônio da UNESCO desde 2011: três lagos que abrigam uma enorme diversidade de aves, com treze espécies ameaçadas, entre elas grandes bandos de flamingos.',
    },
  ],
  MEX: [
    {
      emoji: '🏛️',
      name: 'Teotihuacán',
      fact: 'Patrimônio da UNESCO desde 1987: a maior capital da Mesoamérica entre os séculos I e VII, com a Pirâmide do Sol como seu monumento mais famoso.',
    },
    {
      emoji: '🏛️',
      name: 'Chichén Itzá',
      fact: 'Patrimônio da UNESCO desde 1988: uma das maiores e mais importantes cidades maias, com a pirâmide El Castillo e influências da cultura tolteca.',
    },
    {
      emoji: '🏛️',
      name: 'Centro histórico da Cidade do México',
      fact: 'Patrimônio da UNESCO desde 1987: erguido sobre as ruínas da capital asteca Tenochtitlán, reúne o Templo Mayor e a Catedral Metropolitana.',
    },
    {
      emoji: '🏛️',
      name: 'Palenque',
      fact: 'Patrimônio da UNESCO desde 1987: uma cidade maia famosa pela arquitetura refinada e pelas decorações esculpidas em pedra.',
    },
  ],
  PER: [
    {
      emoji: '🏛️',
      name: 'Santuário Histórico de Machu Picchu',
      fact: 'Patrimônio da UNESCO desde 1983: a cidadela inca erguida no topo da montanha por volta do século XV, com construções resistentes a terremotos.',
    },
    { emoji: '🏛️', name: 'Cidade de Cusco', fact: 'Patrimônio da UNESCO desde 1983: a capital do Império Inca, dividida em áreas religiosas e administrativas distintas.' },
    {
      emoji: '🏛️',
      name: 'Linhas e geoglifos de Nazca',
      fact: 'Patrimônio da UNESCO desde 1994: desenhos gigantes traçados no deserto entre 400 e 650 d.C., provavelmente com fins rituais.',
    },
    {
      emoji: '🏛️',
      name: 'Cidade Sagrada de Caral-Supe',
      fact: 'Patrimônio da UNESCO desde 2009: o assentamento mais antigo conhecido das Américas, com pirâmides da civilização de Norte Chico.',
    },
  ],
  TZA: [
    {
      emoji: '🏛️',
      name: 'Área de Conservação de Ngorongoro',
      fact: 'Patrimônio da UNESCO desde 1979: a maior caldeira vulcânica intacta do mundo, palco de uma das maiores migrações de animais do planeta.',
    },
    {
      emoji: '🏛️',
      name: 'Parque Nacional do Serengeti',
      fact: 'Patrimônio da UNESCO desde 1981: planícies de savana por onde passa uma das maiores migrações de mamíferos do mundo.',
    },
    {
      emoji: '🏛️',
      name: 'Parque Nacional do Kilimanjaro',
      fact: 'Patrimônio da UNESCO desde 1987: o pico mais alto da África, com zonas ecológicas distintas conforme a altitude e espécies endêmicas.',
    },
    {
      emoji: '🏛️',
      name: 'Cidade de Pedra de Zanzibar',
      fact: 'Patrimônio da UNESCO desde 2000: uma cidade suaíle de comércio que reúne influências árabes, indianas e europeias na arquitetura.',
    },
  ],
};
