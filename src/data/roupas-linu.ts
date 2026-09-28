/**
 * Loja do Linu: chapéus, roupas, objetos para levar na nadadeira e pinturas de rosto tradicionais do
 * mundo, cada um com o país, a região e a cultura de onde veio. O Linu usa uma peça de cada lugar ao
 * mesmo tempo (cabeça, corpo, mão e rosto).
 * - As roupinhas de um idioma do app (`lang`) vêm de presente com as lições dele (OUTFIT_UNLOCK).
 * - As do mundo (`price`) se compram com krill 🦐, que se ganha estudando (1 a cada KRILL_XP de XP).
 * Os textos dizem só o que é bem estabelecido: de onde é e quem usa.
 */
/** Onde a peça vai: na cabeça, no corpo, na nadadeira ou no rosto. */
export type OutfitSlot = 'cabeca' | 'corpo' | 'mao' | 'rosto';

export const SLOTS: { id: OutfitSlot; label: string; emoji: string }[] = [
  { id: 'cabeca', label: 'Cabeça', emoji: '🎩' },
  { id: 'corpo', label: 'Corpo', emoji: '👕' },
  { id: 'mao', label: 'Na mão', emoji: '✋' },
  { id: 'rosto', label: 'Rosto', emoji: '🎭' },
];

export interface LinuOutfit {
  id: string;
  /** onde vai (sem o campo: na cabeça, como os chapéus) */
  slot?: OutfitSlot;
  /** idioma cujas lições liberam a roupinha (as da loja não têm) */
  lang?: string;
  /** preço em krill (só as da loja) */
  price?: number;
  name: string;
  /** país de origem (ISO 3166-1 alfa-2), para a bandeira e o nome */
  country: string;
  /** região ou cidade dentro do país */
  region: string;
  /** povo ou cultura que usa */
  culture: string;
  about: string;
}

/** Lições do idioma para cada roupinha dele, pela ordem: a 1ª com 1 lição, a 2ª com 5… */
export const OUTFIT_UNLOCK = [1, 5, 10, 20, 30, 40, 50, 60, 75, 90, 105, 120, 135, 150];

/** Quanto XP vale um krill. */
export const KRILL_XP = 10;

export const ROUPAS_LINU: LinuOutfit[] = [
  // ── de presente, com as lições de cada idioma ──
  { id: 'caciula', lang: 'ro', name: 'Căciulă', country: 'RO', region: 'Romênia', culture: 'Camponeses e pastores romenos', about: 'Gorro alto de pele de carneiro dos camponeses e pastores romenos, usado no inverno e nas festas tradicionais.' },
  { id: 'clop', lang: 'ro', name: 'Clop', country: 'RO', region: 'Maramureș', culture: 'Aldeias do Maramureș', about: 'Chapeuzinho de palha de aba curta dos homens do Maramureș, às vezes enfeitado com contas e fitas.' },
  { id: 'naframa', lang: 'ro', name: 'Năframă', country: 'RO', region: 'Romênia rural', culture: 'Mulheres casadas das aldeias romenas', about: 'Lenço de cabeça do traje tradicional romeno: nas aldeias, cobrir o cabelo com a năframă era o costume das mulheres casadas.' },
  { id: 'ushanka', lang: 'ru', name: 'Ушанка (uchanka)', country: 'RU', region: 'Rússia', culture: 'Inverno russo', about: 'Gorro de pele com abas que protegem as orelhas no inverno; o nome vem de «у́ши», orelhas.' },
  { id: 'kokoshnik', lang: 'ru', name: 'Кокошник (kokóchnik)', country: 'RU', region: 'Rússia', culture: 'Trajes de festa russos', about: 'Toucado em forma de arco das roupas de festa russas, bordado e enfeitado com contas.' },
  { id: 'platok', lang: 'ru', name: 'Павлопоса́дский плато́к (xale de Pávlovski Possad)', country: 'RU', region: 'Pávlovski Possad, perto de Moscou', culture: 'Artesanato russo', about: 'Xale de lã estampado com grandes flores, feito na cidade de Pávlovski Possad e famoso desde o século XIX; usado sobre a cabeça ou nos ombros.' },
  { id: 'cordobes', lang: 'es', name: 'Sombrero cordobés', country: 'ES', region: 'Andaluzia', culture: 'Feiras andaluzas e flamenco', about: 'Chapéu de aba reta e copa baixa, de Córdoba e da Andaluzia; aparece nas feiras e no flamenco.' },
  { id: 'charro', lang: 'es', name: 'Sombrero de charro', country: 'MX', region: 'México', culture: 'Charros e mariachis', about: 'Chapéu de aba larga e copa alta dos charros (os cavaleiros mexicanos) e dos mariachis, muitas vezes bordado.' },
  { id: 'chullo', lang: 'es', name: 'Chullo', country: 'PE', region: 'Andes (Peru e Bolívia)', culture: 'Povos andinos (quíchuas e aimarás)', about: 'Gorro de lã, muitas vezes de alpaca, com orelheiras e desenhos coloridos, tricotado nos Andes.' },
  { id: 'vueltiao', lang: 'es', name: 'Sombrero vueltiao', country: 'CO', region: 'Costa caribenha da Colômbia', culture: 'Povo zenú', about: 'Chapéu trançado com fibra de caña flecha em faixas claras e escuras, feito pelo povo zenú; é um dos símbolos culturais da Colômbia.' },
  { id: 'toquilla', lang: 'es', name: 'Sombrero de paja toquilla', country: 'EC', region: 'Equador (Montecristi e Cuenca)', culture: 'Tecelões equatorianos', about: 'Chapéu de palha toquilla trançado à mão no Equador. Ficou conhecido no mundo como «chapéu-panamá» porque era vendido pelo Panamá; a tecelagem é Patrimônio Imaterial da UNESCO desde 2012.' },
  { id: 'txapela', lang: 'es', name: 'Txapela', country: 'ES', region: 'País Basco', culture: 'Bascos', about: 'A boina basca de lã. Nas competições bascas, o vencedor ganha uma txapela, e por isso o campeão se chama «txapeldun».' },
  { id: 'bombin', lang: 'es', name: 'Bombín', country: 'BO', region: 'La Paz, Bolívia', culture: 'Mulheres aimarás (cholas paceñas)', about: 'Chapéu-coco pequeno, usado no alto da cabeça pelas mulheres aimarás de La Paz junto com a saia pollera e o xale.' },
  { id: 'chupalla', lang: 'es', name: 'Chupalla', country: 'CL', region: 'Zona central do Chile', culture: 'Huasos chilenos', about: 'Chapéu de palha de aba larga dos huasos, os homens do campo do Chile; aparece nas Fiestas Patrias e na dança da cueca.' },
  { id: 'paglietta', lang: 'it', name: 'Paglietta', country: 'IT', region: 'Veneza', culture: 'Gondoleiros venezianos', about: 'Chapéu de palha de aba reta com fita, o chapéu dos gondoleiros de Veneza.' },
  { id: 'coppola', lang: 'it', name: 'Coppola', country: 'IT', region: 'Sicília', culture: 'Sul da Itália', about: 'Boné achatado de tecido, tradicional na Sicília e no sul da Itália.' },
  { id: 'bigoudene', lang: 'fr', name: 'Coiffe bigoudène', country: 'FR', region: 'Pays Bigouden, sudoeste da Bretanha', culture: 'Bretões', about: 'A touca de renda branca das mulheres do Pays Bigouden, na Bretanha: foi crescendo no começo do século XX até passar dos 30 centímetros de altura. Hoje aparece nas festas e nos desfiles de trajes tradicionais.' },
  { id: 'berritta', lang: 'it', name: 'Berritta', country: 'IT', region: 'Sardenha', culture: 'Traje tradicional sardo', about: 'Gorro comprido de lã, em geral preto, dobrado sobre a cabeça: faz parte do traje tradicional dos homens da Sardenha.' },
  { id: 'firenze', lang: 'it', name: 'Cappello di paglia di Firenze', country: 'IT', region: 'Signa, Toscana', culture: 'Trançadeiras da Toscana', about: 'Chapéu de palha de trigo trançada bem fina, feito em Signa, perto de Florença, desde o século XVIII.' },
  { id: 'barrete', lang: 'pt', name: 'Barrete de campino', country: 'PT', region: 'Ribatejo', culture: 'Campinos', about: 'Gorro verde com barra vermelha dos campinos, os guardadores de touros e cavalos do Ribatejo.' },
  { id: 'carapuca', lang: 'pt', name: 'Carapuça da Madeira', country: 'PT', region: 'Ilha da Madeira', culture: 'Traje tradicional madeirense', about: 'Barrete pequeno e pontudo, com um rabicho no alto, que faz parte do traje tradicional da Madeira.' },
  { id: 'nazare', lang: 'pt', name: 'Barrete de pescador da Nazaré', country: 'PT', region: 'Nazaré', culture: 'Pescadores da Nazaré', about: 'Barrete comprido de lã preta dos pescadores da Nazaré, que cai para o lado da cabeça.' },
  { id: 'vaqueiro', lang: 'pt', name: 'Chapéu de couro do vaqueiro', country: 'BR', region: 'Sertão nordestino', culture: 'Vaqueiros do sertão', about: 'Chapéu de couro de aba virada que protege o vaqueiro dos espinhos da caatinga; ficou famoso também na música de Luiz Gonzaga.' },
  { id: 'krans', lang: 'sv', name: 'Midsommarkrans', country: 'SE', region: 'Suécia', culture: 'Festa do Midsommar', about: 'Coroa de flores do Midsommar, a festa do solstício de verão, em junho.' },
  { id: 'luciakrona', lang: 'sv', name: 'Luciakrona', country: 'SE', region: 'Suécia', culture: 'Festa de Santa Lúcia', about: 'Coroa de velas usada no dia de Santa Lúcia, 13 de dezembro, no cortejo que canta e traz os pãezinhos de açafrão (lussekatter).' },
  { id: 'topplue', lang: 'nb', name: 'Topplue', country: 'NO', region: 'Noruega', culture: 'Esqui e trilhas de inverno', about: 'Gorro de lã com pompom, companheiro dos noruegueses no esqui e nas trilhas de inverno.' },
  { id: 'studenterhue', lang: 'da', name: 'Studenterhue', country: 'DK', region: 'Dinamarca', culture: 'Formandos do ensino médio dinamarquês', about: 'Boné branco de pala preta que os estudantes dinamarqueses ganham ao terminar o ensino médio (o gymnasium); a tradição vem do século XIX, e a festa inclui um passeio de caminhão pela cidade.' },
  { id: 'skotthufa', lang: 'is', name: 'Skotthúfa', country: 'IS', region: 'Islândia', culture: 'Traje nacional islandês (peysuföt)', about: 'Touquinha preta de tricô usada no alto da cabeça com o traje nacional das islandesas, com uma borla comprida presa num tubinho de metal.' },
  { id: 'sorokka', lang: 'fi', name: 'Sorokka', country: 'FI', region: 'Carélia', culture: 'Mulheres casadas da Carélia e da Íngria', about: 'Toucado de linho bordado que as mulheres casadas da Carélia e da Íngria usavam para cobrir o cabelo; hoje aparece nos trajes típicos.' },
  { id: 'tanu', lang: 'et', name: 'Tanu', country: 'EE', region: 'Estônia', culture: 'Mulheres casadas do traje tradicional estoniano', about: 'Touca branca, muitas vezes de renda e com bordados, que as mulheres casadas usavam com o traje tradicional estoniano; o modelo muda de paróquia para paróquia.' },
  { id: 'hugva', lang: 'fo', name: 'Húgva', country: 'FO', region: 'Ilhas Faroé', culture: 'Traje nacional feroês (masculino)', about: 'Gorro de lã listrado de vermelho e azul-escuro que os homens usam com o traje nacional feroês, nas festas e no dia de São Olavo (Ólavsøka).' },
  { id: 'rutuvainikas', lang: 'lt', name: 'Rūtų vainikas', country: 'LT', region: 'Lituânia', culture: 'Moças do traje tradicional lituano', about: 'Coroa de arruda (rūta), a flor nacional da Lituânia. As moças solteiras a usavam como sinal da juventude, e no casamento tradicional ela era tirada da noiva num rito com canções.' },
  { id: 'barretina', lang: 'ca', name: 'Barretina', country: 'ES', region: 'Catalunha', culture: 'Traje tradicional catalão', about: 'Gorro comprido de lã, vermelho ou roxo (o roxo, chamado «musca», era o mais fino), que cai para o lado. Virou o símbolo mais reconhecível da cultura catalã e ainda aparece nas colles de castellers e nas festas populares.' },
  // ── roupas, objetos para a nadadeira e pinturas (depois dos chapéus de cada idioma: quem já liberou um chapéu não o perde) ──
  { id: 'ie', slot: 'corpo', lang: 'ro', name: 'Ia (blusa romena)', country: 'RO', region: 'Romênia', culture: 'Traje tradicional romeno', about: 'Blusa de linho ou de algodão branco bordada à mão nos ombros, nas mangas e no peito, com desenhos que mudam de região para região. Em 2022, a arte da blusa com bordado no ombro (altiță) entrou na lista do patrimônio imaterial da UNESCO, pela Romênia e pela Moldávia.' },
  { id: 'martisor', slot: 'corpo', lang: 'ro', name: 'Mărțișor', country: 'RO', region: 'Romênia e Moldávia', culture: 'Festa do 1º de março', about: 'Enfeite preso na roupa com um cordãozinho trançado branco e vermelho, dado de presente no dia 1º de março para festejar a chegada da primavera. Os costumes do 1º de março são Patrimônio Imaterial da UNESCO desde 2017, pela Romênia, Bulgária, Macedônia do Norte e Moldávia.' },
  { id: 'nai', slot: 'mao', lang: 'ro', name: 'Nai', country: 'RO', region: 'Romênia', culture: 'Música popular romena', about: 'A flauta de pã romena: uma fileira curva de tubos de tamanhos diferentes, tocada soprando por cima deles. É um dos instrumentos típicos da música popular do país.' },
  { id: 'matriochka', slot: 'mao', lang: 'ru', name: 'Матрёшка (matriochka)', country: 'RU', region: 'Rússia', culture: 'Artesanato russo', about: 'Boneca de madeira oca que se abre e guarda outras cada vez menores dentro. A primeira foi feita no começo da década de 1890, perto de Moscou, entalhada por Vassíli Zviózdotchkin e pintada por Serguei Maliútin.' },
  { id: 'balalaica', slot: 'mao', lang: 'ru', name: 'Балала́йка (balalaica)', country: 'RU', region: 'Rússia', culture: 'Música popular russa', about: 'Instrumento de cordas com a caixa em forma de triângulo e três cordas, típico da música popular russa. No fim do século XIX, Vassíli Andréiev montou a primeira orquestra de balalaicas.' },
  { id: 'sarafan', slot: 'corpo', lang: 'ru', name: 'Сарафа́н (sarafan)', country: 'RU', region: 'Norte e centro da Rússia', culture: 'Camponesas russas', about: 'Vestido comprido sem mangas, usado por cima de uma blusa, que fazia parte do traje das camponesas russas, sobretudo no norte e no centro do país; hoje aparece nos trajes de festa e nos grupos de dança folclórica.' },
  { id: 'abanico', slot: 'mao', lang: 'es', name: 'Abanico', country: 'ES', region: 'Espanha', culture: 'Espanhóis', about: 'Leque dobrável de tecido ou papel sobre varetas, companheiro dos dias de calor e das danças espanholas. A região de Valência tem uma longa tradição na fabricação artesanal de leques.' },
  { id: 'castanuelas', slot: 'mao', lang: 'es', name: 'Castañuelas', country: 'ES', region: 'Espanha', culture: 'Danças espanholas', about: 'Par de conchinhas de madeira presas aos dedos por um cordão, que batem uma na outra marcando o ritmo das danças espanholas, como as sevilhanas e a jota.' },
  { id: 'manton', slot: 'corpo', lang: 'es', name: 'Mantón de Manila', country: 'ES', region: 'Andaluzia', culture: 'Feiras andaluzas', about: 'Xale grande de seda bordado com flores e com franjas compridas. Apesar do nome, vinha da China: chegava à Espanha pelo porto de Manila, nas Filipinas, e virou peça das festas andaluzas.' },
  { id: 'catrina', slot: 'rosto', lang: 'es', name: 'Maquiagem de Catrina', country: 'MX', region: 'México', culture: 'Día de Muertos', about: 'Pintura do rosto como uma caveira sorridente e florida, inspirada na gravura «La Calavera Garbancera», de José Guadalupe Posada (por volta de 1910), que Diego Rivera chamou de Catrina. É comum no Día de Muertos, quando as famílias mexicanas lembram os seus mortos com festa; a celebração é Patrimônio Imaterial da UNESCO desde 2008.' },
  { id: 'faixa', slot: 'corpo', lang: 'ca', name: 'Faixa', country: 'ES', region: 'Catalunha', culture: 'Castellers e traje tradicional catalão', about: 'Cinta comprida de tecido, quase sempre preta, enrolada várias vezes na cintura. Nas colles de castellers, protege a lombar do peso da torre humana e serve de apoio para quem sobe e desce; quem é novato na colla usa uma faixa vermelha, para os outros saberem que precisa de ajuda.' },
  { id: 'porro', slot: 'mao', lang: 'ca', name: 'Porró', country: 'ES', region: 'Catalunha', culture: 'Mesa catalã', about: 'Jarra de vidro com um bico comprido e fino, usada para beber vinho a jato, sem encostar os lábios no gargalo, o que permite que todo mundo beba do mesmo porró à mesa. O mais antigo já encontrado, do mosteiro de Poblet, é dos séculos XIV-XV.' },
  { id: 'mascara', slot: 'rosto', lang: 'it', name: 'Maschera veneziana', country: 'IT', region: 'Veneza', culture: 'Carnaval de Veneza', about: 'Máscara que cobre os olhos e o nariz, enfeitada com dourado, usada no Carnaval de Veneza. Os venezianos usam máscaras desde a Idade Média; o carnaval foi retomado em 1979 e hoje atrai visitantes do mundo todo.' },
  { id: 'mandolino', slot: 'mao', lang: 'it', name: 'Mandolino', country: 'IT', region: 'Nápoles', culture: 'Canção napolitana', about: 'Instrumento pequeno de caixa arredondada e oito cordas em pares, tocado com palheta. O modelo napolitano do século XVIII deu origem ao bandolim de hoje e acompanha as canções napolitanas.' },
  { id: 'cavaquinho', slot: 'mao', lang: 'pt', name: 'Cavaquinho', country: 'PT', region: 'Minho, norte de Portugal', culture: 'Música popular portuguesa e brasileira', about: 'Violinha de quatro cordas nascida no norte de Portugal, que viajou com os portugueses: no Brasil é peça central do choro e do samba, e um parente dele, o machete da Madeira, levado ao Havaí, deu origem ao ukulele.' },
  { id: 'frevo', slot: 'mao', lang: 'pt', name: 'Sombrinha de frevo', country: 'BR', region: 'Recife e Olinda, Pernambuco', culture: 'Frevo', about: 'Guarda-chuva pequeno e colorido que os passistas equilibram enquanto dançam o frevo no carnaval de Recife e Olinda. O frevo é Patrimônio Imaterial da UNESCO desde 2012.' },
  { id: 'careto', slot: 'rosto', lang: 'pt', name: 'Máscara de careto', country: 'PT', region: 'Podence, Trás-os-Montes', culture: 'Caretos de Podence', about: 'Máscara de latão ou de couro pintada de vermelho, amarelo e verde, usada pelos caretos, que correm pelas ruas com roupas de franjas coloridas no Entrudo, o carnaval. O Carnaval de Podence é Patrimônio Imaterial da UNESCO desde 2019.' },
  { id: 'cuia', slot: 'mao', lang: 'pt', name: 'Cuia de chimarrão', country: 'BR', region: 'Rio Grande do Sul', culture: 'Gaúchos', about: 'Cuia de porongo com bomba de metal para o chimarrão, a infusão quente de erva-mate que passa de mão em mão numa roda de conversa. O costume vem dos povos guaranis e é o mesmo do mate da Argentina, do Uruguai e do Paraguai.' },
  { id: 'capulana', slot: 'corpo', lang: 'pt', name: 'Capulana', country: 'MZ', region: 'Moçambique', culture: 'Moçambicanos', about: 'Pano de algodão estampado com cores fortes que as mulheres moçambicanas amarram na cintura como saia, usam para levar os bebês nas costas e dão de presente em ocasiões importantes.' },
  { id: 'mariniere', slot: 'corpo', lang: 'fr', name: 'Marinière', country: 'FR', region: 'Bretanha', culture: 'Marinheiros franceses', about: 'Camiseta de listras azuis e brancas que virou, em 1858, o uniforme dos marinheiros da Marinha francesa na Bretanha; depois caiu no gosto de todo mundo como peça da moda.' },
  { id: 'baguete', slot: 'mao', lang: 'fr', name: 'Baguette', country: 'FR', region: 'França', culture: 'Padeiros franceses', about: 'O pão comprido e fino que se leva para casa debaixo do braço. Em 2022, a UNESCO inscreveu o saber artesanal e a cultura da baguete na lista do patrimônio imaterial.' },
  { id: 'dalahast', slot: 'mao', lang: 'sv', name: 'Dalahäst', country: 'SE', region: 'Dalarna', culture: 'Artesanato sueco', about: 'Cavalinho de madeira pintado de vermelho com flores no estilo «kurbits», feito na região da Dalarna, sobretudo na aldeia de Nusnäs. É um dos símbolos mais conhecidos da Suécia.' },
  { id: 'lusekofte', slot: 'corpo', lang: 'nb', name: 'Lusekofte', country: 'NO', region: 'Setesdal', culture: 'Suéter norueguês', about: 'Suéter de lã tricotado em preto e branco, com pontinhos espalhados («lus», piolhos) e fechos de metal. Surgiu no vale de Setesdal no século XIX e virou a roupa típica do esqui na Noruega.' },
  { id: 'julehjerte', slot: 'mao', lang: 'da', name: 'Flettet julehjerte', country: 'DK', region: 'Dinamarca', culture: 'Natal dinamarquês', about: 'Coração de papel trançado em duas cores, em geral vermelho e branco, que as famílias dinamarquesas fazem juntas para pendurar na árvore de Natal. O mais antigo que se conhece foi feito por Hans Christian Andersen, por volta de 1860.' },
  { id: 'lopapeysa', slot: 'corpo', lang: 'is', name: 'Lopapeysa', country: 'IS', region: 'Islândia', culture: 'Islandeses', about: 'Suéter de lã islandesa (lopi) com uma faixa redonda de desenhos em volta da gola. Ficou popular na metade do século XX e virou um dos símbolos da Islândia.' },
  { id: 'vihta', slot: 'mao', lang: 'fi', name: 'Vihta (ou vasta)', country: 'FI', region: 'Finlândia', culture: 'Sauna finlandesa', about: 'Maço de galhos de bétula com folhas, usado na sauna para dar batidinhas leves na pele, que soltam um cheiro fresco de folha. A cultura da sauna finlandesa é Patrimônio Imaterial da UNESCO desde 2020.' },
  { id: 'hachimaki', lang: 'ja', name: 'Hachimaki (鉢巻)', country: 'JP', region: 'Japão', culture: 'Festivais, esportes e provas', about: 'Faixa de pano amarrada na testa para dar coragem e concentração: aparece nos festivais (matsuri), nas gincanas escolares e na véspera das provas, muitas vezes com o círculo vermelho da bandeira.' },
  { id: 'jobawi', lang: 'ko', name: 'Jobawi (조바위)', country: 'KR', region: 'Coreia', culture: 'Mulheres da dinastia Joseon', about: 'Touca de inverno de seda escura, aberta no alto, que cobre as orelhas; na frente e atrás leva pingentes coloridos e borlas, e hoje aparece com o hanbok no Ano-Novo Lunar.' },
  // ── da loja, com krill ──
  { id: 'sugegasa', price: 40, name: 'Sugegasa', country: 'JP', region: 'Japão', culture: 'Camponeses e viajantes japoneses', about: 'Chapéu cônico de junco («suge») que protegia do sol e da chuva quem trabalhava no campo ou viajava a pé.' },
  { id: 'gat', price: 60, name: 'Gat (갓)', country: 'KR', region: 'Coreia', culture: 'Homens da dinastia Joseon', about: 'Chapéu de aba larga e transparente, feito de crina de cavalo e bambu, usado pelos homens adultos na dinastia Joseon.' },
  { id: 'nonla', price: 40, name: 'Nón lá', country: 'VN', region: 'Vietnã', culture: 'Vietnamitas', about: 'Chapéu cônico de folhas de palmeira presas em aros de bambu, que protege do sol forte e da chuva de monção.' },
  { id: 'tam', price: 50, name: "Tam o' shanter", country: 'GB', region: 'Escócia', culture: 'Escoceses', about: 'Boina escocesa de lã com um pompom no alto, o «toorie»; o nome vem do herói do poema de Robert Burns.' },
  { id: 'bollenhut', price: 80, name: 'Bollenhut', country: 'DE', region: 'Floresta Negra', culture: 'Aldeias de Gutach, Kirnbach e Reichenbach', about: 'Chapéu de palha com grandes pompons de lã: vermelhos para as moças solteiras e pretos para as casadas.' },
  { id: 'vinok', price: 50, name: 'Вінок (vinok)', country: 'UA', region: 'Ucrânia', culture: 'Moças ucranianas', about: 'Coroa de flores com fitas coloridas, usada pelas moças nas festas, como a noite de Ivana Kupala, no verão.' },
  { id: 'kalpak', price: 60, name: 'Ак калпак (ak kalpak)', country: 'KG', region: 'Quirguistão', culture: 'Quirguizes', about: 'Chapéu alto de feltro branco com a aba virada, símbolo do Quirguistão; o país tem o Dia do Kalpak em 5 de março.' },
  { id: 'fez', price: 40, name: 'Fez', country: 'MA', region: 'Marrocos', culture: 'Norte da África', about: 'Chapéu de feltro vermelho em forma de cone cortado, com uma borla preta; o nome vem da cidade de Fez.' },
  { id: 'gele', price: 70, name: 'Gèlè', country: 'NG', region: 'Sudoeste da Nigéria', culture: 'Mulheres iorubás', about: 'Turbante de tecido duro amarrado em dobras altas, usado pelas mulheres iorubás em casamentos e festas.' },
  { id: 'isicholo', price: 70, name: 'Isicholo', country: 'ZA', region: 'KwaZulu-Natal, África do Sul', culture: 'Mulheres zulus casadas', about: 'Chapéu largo em forma de disco, tradicionalmente usado pelas mulheres zulus casadas; os modernos costumam ser enfeitados com contas.' },
  { id: 'pagri', price: 60, name: 'Pagri do Rajastão', country: 'IN', region: 'Rajastão, Índia', culture: 'Rajastanis', about: 'Turbante de tecido longo e colorido; a cor e o jeito de amarrar mudam conforme a região, a ocasião e a estação.' },
  { id: 'cauboi', price: 50, name: 'Chapéu de caubói', country: 'US', region: 'Oeste dos Estados Unidos', culture: 'Vaqueiros do oeste', about: 'Chapéu de copa alta e aba larga dos vaqueiros do oeste americano, herdeiro do sombrero dos vaqueros mexicanos.' },
  { id: 'lei', price: 40, name: 'Lei poʻo', country: 'US', region: 'Havaí', culture: 'Havaianos', about: 'Coroa de flores ou folhas usada na cabeça no Havaí, em festas, na dança hula e para receber visitas.' },
  { id: 'salakot', price: 50, name: 'Salakot', country: 'PH', region: 'Filipinas', culture: 'Filipinos', about: 'Chapéu em forma de cúpula, de bambu ou rattan, com uma ponta no alto; protege do sol e da chuva no campo.' },
  { id: 'blangkon', price: 60, name: 'Blangkon', country: 'ID', region: 'Java, Indonésia', culture: 'Javaneses', about: 'Turbante pronto de tecido batik dos homens javaneses; o estilo de Yogyakarta tem um nó arredondado atrás, o «mondolan».' },
  { id: 'kilt', slot: 'corpo', price: 60, name: 'Kilt', country: 'GB', region: 'Terras Altas da Escócia', culture: 'Escoceses', about: 'Saia de lã xadrez (o tartã), pregueada atrás, do traje tradicional masculino das Terras Altas da Escócia; hoje aparece em casamentos, festas e desfiles de gaitas de foles.' },
  { id: 'kente', slot: 'corpo', price: 70, name: 'Kente', country: 'GH', region: 'Gana', culture: 'Povos axânti e ewe', about: 'Tecido feito de tiras estreitas tecidas no tear e costuradas lado a lado, com cores fortes e desenhos geométricos, cada um com nome e significado. Em Gana, é usado em festas e em ocasiões importantes.' },
  { id: 'lederhosen', slot: 'corpo', price: 60, name: 'Lederhosen', country: 'DE', region: 'Baviera e Alpes', culture: 'Povos alpinos', about: 'Calça curta de couro com suspensórios, do traje tradicional dos homens da Baviera e da região dos Alpes; aparece nas festas, como a Oktoberfest de Munique.' },
  { id: 'lanterna', slot: 'mao', price: 40, name: 'Lanterna de papel (灯笼)', country: 'CN', region: 'China', culture: 'Festival das Lanternas', about: 'Lanterna vermelha de papel ou de seda que ilumina as ruas no Festival das Lanternas, no 15º dia do Ano-Novo chinês, o dia que encerra as festas do ano novo.' },
  { id: 'djembe', slot: 'mao', price: 60, name: 'Djembê', country: 'ML', region: 'Mali e África Ocidental', culture: 'Povos mandingas', about: 'Tambor de madeira em forma de taça, coberto de couro de cabra e tocado com as mãos. Nasceu entre os povos mandingas da África Ocidental e hoje é tocado no mundo inteiro.' },
  { id: 'ukulele', slot: 'mao', price: 50, name: 'ʻUkulele', country: 'US', region: 'Havaí', culture: 'Havaianos', about: 'Violinha de quatro cordas que surgiu no Havaí no fim do século XIX, a partir do machete trazido por imigrantes da Madeira. O nome havaiano costuma ser traduzido como «pulga saltitante».' },
  { id: 'uchiwa', slot: 'mao', price: 40, name: 'Uchiwa (団扇)', country: 'JP', region: 'Japão', culture: 'Festivais de verão japoneses', about: 'Leque redondo e rígido, de papel sobre varetas de bambu, que não se dobra: é companheiro dos festivais de verão (matsuri) e das noites quentes no Japão.' },
  { id: 'thanaka', slot: 'rosto', price: 40, name: 'Thanaka', country: 'MM', region: 'Mianmar', culture: 'Birmaneses', about: 'Pasta amarelo-clara feita da casca moída de uma árvore, passada nas bochechas em círculos ou em desenhos de folha. Em Mianmar, é usada há séculos no dia a dia para proteger a pele do sol e refrescar.' },
  { id: 'holi', slot: 'rosto', price: 50, name: 'Cores do Holi', country: 'IN', region: 'Índia e Nepal', culture: 'Festa do Holi', about: 'Pó colorido (gulal) que se joga nos amigos na festa do Holi, que celebra a chegada da primavera na Índia e no Nepal: nesse dia, todo mundo termina colorido.' },
];

/** Onde a peça vai (os chapéus não declaram: cabeça). */
export function slotOf(id: string): OutfitSlot {
  return ROUPAS_LINU.find((o) => o.id === id)?.slot ?? 'cabeca';
}

/** O visual com a peça `id` no lugar dela (tira a que estava no mesmo lugar). */
export function withOutfit(look: readonly string[], id: string): string[] {
  const slot = slotOf(id);
  return [...look.filter((x) => slotOf(x) !== slot), id];
}

/** Quantas lições do idioma liberam cada roupinha dele (pela ordem entre as do idioma). As da loja não liberam com lições. */
export function lessonsToUnlock(o: LinuOutfit): number {
  if (!o.lang) return Infinity;
  const idx = ROUPAS_LINU.filter((x) => x.lang === o.lang).indexOf(o);
  return OUTFIT_UNLOCK[Math.min(idx, OUTFIT_UNLOCK.length - 1)];
}

/** As roupinhas que o aluno tem: as de presente (pelas lições de cada idioma) e as compradas. */
export function unlockedOutfits(lessonsByLang: Record<string, number>, bought: Iterable<string> = []): Set<string> {
  const out = new Set(ROUPAS_LINU.filter((o) => o.lang && (lessonsByLang[o.lang] ?? 0) >= lessonsToUnlock(o)).map((o) => o.id));
  for (const id of bought) if (ROUPAS_LINU.some((o) => o.id === id && o.price)) out.add(id);
  return out;
}

/** Krill ganho com o XP total, menos o gasto na loja. */
export function krillBalance(totalXp: number, bought: Iterable<string>): number {
  let spent = 0;
  for (const id of bought) spent += ROUPAS_LINU.find((o) => o.id === id)?.price ?? 0;
  return Math.floor(totalXp / KRILL_XP) - spent;
}
