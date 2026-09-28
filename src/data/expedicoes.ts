/**
 * Expedições do Linu: cidades dos países de cada idioma. A pista é falada no idioma estudado («Linu
 * viaja a Sevilla»), e o aluno toca, no mapa do país, a região onde a cidade fica. Os códigos são
 * os ISO 3166-2 dos contornos do mapa (Natural Earth); algumas cidades aceitam mais de um, porque o
 * mapa junta a cidade com a região em volta (Moscou, São Petersburgo, Maputo).
 * Os fatos dizem só o que é bem estabelecido.
 */
export interface ExpeditionPlace {
  /** o nome no idioma estudado (com a marca de tônica no russo) */
  city: string;
  /** o nome em português */
  cityPt: string;
  /** país (ISO 3166-1 alfa-3, o do mapa) */
  country: string;
  /** região(ões) certas no mapa (ISO 3166-2) */
  codes: string[];
  fact: string;
}

export const EXPEDITION_PLACES: Record<string, ExpeditionPlace[]> = {
  ro: [
    { city: 'București', cityPt: 'Bucareste', country: 'ROU', codes: ['RO-B'], fact: 'A capital da Romênia, com o Palatul Parlamentului, um dos maiores prédios administrativos do mundo.' },
    { city: 'Cluj-Napoca', cityPt: 'Cluj-Napoca', country: 'ROU', codes: ['RO-CJ'], fact: 'A principal cidade da Transilvânia e um grande centro universitário: a Universidade Babeș-Bolyai é a maior do país.' },
    { city: 'Iași', cityPt: 'Iași', country: 'ROU', codes: ['RO-IS'], fact: 'A capital histórica da Moldávia romena; lá funcionou a primeira universidade moderna da Romênia, de 1860.' },
    { city: 'Timișoara', cityPt: 'Timișoara', country: 'ROU', codes: ['RO-TM'], fact: 'Teve iluminação elétrica nas ruas já em 1884, uma das primeiras da Europa, e foi onde começou a Revolução de 1989.' },
    { city: 'Constanța', cityPt: 'Constança', country: 'ROU', codes: ['RO-CT'], fact: 'O maior porto do Mar Negro. Foi fundada pelos gregos como Tomis, onde o poeta romano Ovídio viveu no exílio.' },
    { city: 'Brașov', cityPt: 'Brașov', country: 'ROU', codes: ['RO-BV'], fact: 'Cercada pelos Cárpatos, tem a Biserica Neagră (Igreja Negra), que ganhou o nome depois de um incêndio em 1689.' },
    { city: 'Sibiu', cityPt: 'Sibiu', country: 'ROU', codes: ['RO-SB'], fact: 'Cidade fundada por colonos saxões (alemães) na Transilvânia; foi Capital Europeia da Cultura em 2007.' },
    { city: 'Sighișoara', cityPt: 'Sighișoara', country: 'ROU', codes: ['RO-MS'], fact: 'Uma cidadela medieval ainda habitada, com a Torre do Relógio; é Patrimônio Mundial da UNESCO.' },
    { city: 'Suceava', cityPt: 'Suceava', country: 'ROU', codes: ['RO-SV'], fact: 'A porta dos mosteiros pintados da Bucovina, com afrescos do lado de fora das paredes.' },
    { city: 'Baia Mare', cityPt: 'Baia Mare', country: 'ROU', codes: ['RO-MM'], fact: 'A capital do Maramureș, região das igrejas de madeira e do Cemitério Alegre de Săpânța.' },
    { city: 'Tulcea', cityPt: 'Tulcea', country: 'ROU', codes: ['RO-TL'], fact: 'A porta do Delta do Danúbio, uma das maiores áreas alagadas da Europa, com colônias de pelicanos.' },
    { city: 'Chișinău', cityPt: 'Chișinău', country: 'MDA', codes: ['MD-CU'], fact: 'A capital da Moldávia, onde também se fala romeno; perto ficam as enormes adegas subterrâneas de Cricova.' },
  ],
  es: [
    { city: 'Madrid', cityPt: 'Madri', country: 'ESP', codes: ['ES-M'], fact: 'A capital da Espanha, com o Museu do Prado.' },
    { city: 'Barcelona', cityPt: 'Barcelona', country: 'ESP', codes: ['ES-B'], fact: 'Na Catalunha, onde se fala catalão e espanhol; lá está a Sagrada Família, de Gaudí.' },
    { city: 'Sevilla', cityPt: 'Sevilha', country: 'ESP', codes: ['ES-SE'], fact: 'A capital da Andaluzia, terra do flamenco e da Feria de Abril.' },
    { city: 'Granada', cityPt: 'Granada', country: 'ESP', codes: ['ES-GR'], fact: 'Tem a Alhambra, palácio dos nasridas, os últimos governantes muçulmanos da Península Ibérica.' },
    { city: 'Valencia', cityPt: 'Valência', country: 'ESP', codes: ['ES-V'], fact: 'O berço da paella e da festa das Fallas, em março.' },
    { city: 'Santiago de Compostela', cityPt: 'Santiago de Compostela', country: 'ESP', codes: ['ES-C'], fact: 'Na Galícia, o fim do Caminho de Santiago; lá se fala também o galego.' },
    { city: 'Bilbao', cityPt: 'Bilbau', country: 'ESP', codes: ['ES-BI'], fact: 'No País Basco, com o Museu Guggenheim; ali se fala também o basco (euskara).' },
    { city: 'Salamanca', cityPt: 'Salamanca', country: 'ESP', codes: ['ES-SA'], fact: 'Tem uma das universidades mais antigas da Europa, fundada em 1218.' },
    { city: 'Oaxaca', cityPt: 'Oaxaca', country: 'MEX', codes: ['MX-OAX'], fact: 'No sul do México, famosa pelo mole, pelo mezcal e por muitas línguas indígenas, como o zapoteco.' },
    { city: 'Guadalajara', cityPt: 'Guadalajara', country: 'MEX', codes: ['MX-JAL'], fact: 'Em Jalisco, o estado dos mariachis e da tequila.' },
    { city: 'Mérida', cityPt: 'Mérida', country: 'MEX', codes: ['MX-YUC'], fact: 'Na península de Yucatán, perto das ruínas maias de Chichén Itzá; muita gente lá fala maia yucateco.' },
    { city: 'Buenos Aires', cityPt: 'Buenos Aires', country: 'ARG', codes: ['AR-C'], fact: 'A capital da Argentina; foi ali e em Montevidéu que nasceu o tango.' },
    { city: 'Mendoza', cityPt: 'Mendoza', country: 'ARG', codes: ['AR-M'], fact: 'Aos pés dos Andes, a maior região de vinhos da Argentina.' },
    { city: 'Cusco', cityPt: 'Cusco', country: 'PER', codes: ['PE-CUS'], fact: 'A antiga capital do Império Inca, perto de Machu Picchu; lá se fala muito quíchua.' },
    { city: 'Cartagena', cityPt: 'Cartagena', country: 'COL', codes: ['CO-BOL'], fact: 'Cidade murada no Caribe colombiano, Patrimônio Mundial da UNESCO.' },
    { city: 'Medellín', cityPt: 'Medellín', country: 'COL', codes: ['CO-ANT'], fact: 'A «cidade da eterna primavera», nas montanhas de Antioquia.' },
    { city: 'Valparaíso', cityPt: 'Valparaíso', country: 'CHL', codes: ['CL-VS'], fact: 'Porto chileno de morros coloridos, subidos por velhos elevadores (os ascensores).' },
    { city: 'La Habana', cityPt: 'Havana', country: 'CUB', codes: ['CU-03'], fact: 'A capital de Cuba, com o Malecón à beira-mar.' },
  ],
  it: [
    { city: 'Roma', cityPt: 'Roma', country: 'ITA', codes: ['IT-RM'], fact: 'A capital da Itália, com o Coliseu; dentro dela fica o Vaticano.' },
    { city: 'Milano', cityPt: 'Milão', country: 'ITA', codes: ['IT-MI'], fact: 'Capital da moda e do design, com o Duomo gótico.' },
    { city: 'Venezia', cityPt: 'Veneza', country: 'ITA', codes: ['IT-VE'], fact: 'Construída sobre ilhas numa laguna, com canais no lugar das ruas.' },
    { city: 'Firenze', cityPt: 'Florença', country: 'ITA', codes: ['IT-FI'], fact: 'O berço do Renascimento; o italiano padrão nasceu do toscano falado em Florença.' },
    { city: 'Napoli', cityPt: 'Nápoles', country: 'ITA', codes: ['IT-NA'], fact: 'A terra da pizza margherita e do napolitano, uma língua regional.' },
    { city: 'Palermo', cityPt: 'Palermo', country: 'ITA', codes: ['IT-PA'], fact: 'A capital da Sicília, onde se fala também o siciliano.' },
    { city: 'Torino', cityPt: 'Turim', country: 'ITA', codes: ['IT-TO'], fact: 'Foi a primeira capital da Itália unificada, em 1861.' },
    { city: 'Bologna', cityPt: 'Bolonha', country: 'ITA', codes: ['IT-BO'], fact: 'Tem a universidade mais antiga do mundo ocidental ainda em funcionamento, de 1088.' },
    { city: 'Genova', cityPt: 'Gênova', country: 'ITA', codes: ['IT-GE'], fact: 'Grande porto da Ligúria e cidade natal de Cristóvão Colombo.' },
    { city: 'Bolzano', cityPt: 'Bolzano', country: 'ITA', codes: ['IT-BZ'], fact: 'No Tirol do Sul, província onde a maioria fala alemão; as placas são bilíngues.' },
    { city: 'Cagliari', cityPt: 'Cagliari', country: 'ITA', codes: ['IT-CA'], fact: 'A capital da Sardenha, ilha onde se fala o sardo.' },
    { city: 'Bari', cityPt: 'Bari', country: 'ITA', codes: ['IT-BA'], fact: 'Na Puglia, o «salto da bota» italiana, terra das orecchiette.' },
  ],
  pt: [
    { city: 'Lisboa', cityPt: 'Lisboa', country: 'PRT', codes: ['PT-11'], fact: 'A capital de Portugal, com os elétricos e o fado.' },
    { city: 'Porto', cityPt: 'Porto', country: 'PRT', codes: ['PT-13'], fact: 'Deu nome ao vinho do Porto e ao próprio país: Portugal vem de Portus Cale.' },
    { city: 'Coimbra', cityPt: 'Coimbra', country: 'PRT', codes: ['PT-06'], fact: 'Tem a universidade mais antiga de Portugal, fundada em 1290.' },
    { city: 'Braga', cityPt: 'Braga', country: 'PRT', codes: ['PT-03'], fact: 'Uma das cidades mais antigas de Portugal: a Bracara Augusta dos romanos.' },
    { city: 'Faro', cityPt: 'Faro', country: 'PRT', codes: ['PT-08'], fact: 'A capital do Algarve, a região das praias do sul.' },
    { city: 'Évora', cityPt: 'Évora', country: 'PRT', codes: ['PT-07'], fact: 'No Alentejo, com um templo romano no centro histórico, Patrimônio Mundial.' },
    { city: 'Funchal', cityPt: 'Funchal', country: 'PRT', codes: ['PT-30'], fact: 'A capital da Madeira, a ilha do vinho Madeira.' },
    { city: 'Ponta Delgada', cityPt: 'Ponta Delgada', country: 'PRT', codes: ['PT-20'], fact: 'Nos Açores, ilhas vulcânicas no meio do Atlântico.' },
    { city: 'Salvador', cityPt: 'Salvador', country: 'BRA', codes: ['BR-BA'], fact: 'A primeira capital do Brasil, de 1549 a 1763.' },
    { city: 'Rio de Janeiro', cityPt: 'Rio de Janeiro', country: 'BRA', codes: ['BR-RJ'], fact: 'Foi capital do Brasil até 1960; tem o Cristo Redentor.' },
    { city: 'Manaus', cityPt: 'Manaus', country: 'BRA', codes: ['BR-AM'], fact: 'No coração da Amazônia, com o Teatro Amazonas.' },
    { city: 'Luanda', cityPt: 'Luanda', country: 'AGO', codes: ['AO-LUA'], fact: 'A capital de Angola, onde o português convive com línguas como o quimbundo.' },
    { city: 'Maputo', cityPt: 'Maputo', country: 'MOZ', codes: ['MZ-MPM', 'MZ-L'], fact: 'A capital de Moçambique, na baía de Maputo, junto ao oceano Índico.' },
    { city: 'Praia', cityPt: 'Praia', country: 'CPV', codes: ['CV-PR'], fact: 'A capital de Cabo Verde, onde se fala o crioulo cabo-verdiano e o português.' },
  ],
  ru: [
    { city: 'Москва́', cityPt: 'Moscou', country: 'RUS', codes: ['RU-MOW', 'RU-MOS'], fact: 'A capital da Rússia, com o Kremlin e a Praça Vermelha.' },
    { city: 'Санкт-Петербу́рг', cityPt: 'São Petersburgo', country: 'RUS', codes: ['RU-SPE', 'RU-LEN'], fact: 'Fundada por Pedro, o Grande, em 1703; tem o Museu Hermitage.' },
    { city: 'Каза́нь', cityPt: 'Kazan', country: 'RUS', codes: ['RU-TA'], fact: 'A capital do Tartaristão, onde se fala russo e tártaro; no kremlin, uma mesquita e uma catedral ficam lado a lado.' },
    { city: 'Новосиби́рск', cityPt: 'Novosibirsk', country: 'RUS', codes: ['RU-NVS'], fact: 'A maior cidade da Sibéria.' },
    { city: 'Владивосто́к', cityPt: 'Vladivostok', country: 'RUS', codes: ['RU-PRI'], fact: 'No oceano Pacífico, o ponto final da Transiberiana, a ferrovia mais longa do mundo.' },
    { city: 'Екатеринбу́рг', cityPt: 'Ecaterimburgo', country: 'RUS', codes: ['RU-SVE'], fact: 'Nos Montes Urais, perto da fronteira entre a Europa e a Ásia.' },
    { city: 'Со́чи', cityPt: 'Sóchi', country: 'RUS', codes: ['RU-KDA'], fact: 'Balneário no Mar Negro que sediou os Jogos Olímpicos de Inverno de 2014.' },
    { city: 'Ирку́тск', cityPt: 'Irkutsk', country: 'RUS', codes: ['RU-IRK'], fact: 'Perto do lago Baikal, o lago mais profundo do mundo.' },
    { city: 'Му́рманск', cityPt: 'Murmansk', country: 'RUS', codes: ['RU-MUR'], fact: 'A maior cidade ao norte do Círculo Polar Ártico.' },
    { city: 'Калинингра́д', cityPt: 'Kaliningrado', country: 'RUS', codes: ['RU-KGD'], fact: 'Um pedaço da Rússia entre a Polônia e a Lituânia, à beira do Báltico.' },
    { city: 'Яку́тск', cityPt: 'Iakutsk', country: 'RUS', codes: ['RU-SA'], fact: 'Uma das cidades mais frias do mundo, na Iacútia.' },
    { city: 'Арха́нгельск', cityPt: 'Arcangel', country: 'RUS', codes: ['RU-ARK'], fact: 'Porto no Mar Branco, no norte da Rússia.' },
  ],
  sv: [
    { city: 'Stockholm', cityPt: 'Estocolmo', country: 'SWE', codes: ['SE-AB'], fact: 'A capital da Suécia, construída sobre 14 ilhas.' },
    { city: 'Göteborg', cityPt: 'Gotemburgo', country: 'SWE', codes: ['SE-O'], fact: 'O maior porto dos países nórdicos.' },
    { city: 'Malmö', cityPt: 'Malmö', country: 'SWE', codes: ['SE-M'], fact: 'Ligada a Copenhague, na Dinamarca, pela ponte de Öresund.' },
    { city: 'Uppsala', cityPt: 'Uppsala', country: 'SWE', codes: ['SE-C'], fact: 'Tem a universidade mais antiga dos países nórdicos, de 1477.' },
    { city: 'Kiruna', cityPt: 'Kiruna', country: 'SWE', codes: ['SE-BD'], fact: 'Cidade mineira no extremo norte, na terra dos sámi, onde se vê a aurora boreal.' },
    { city: 'Visby', cityPt: 'Visby', country: 'SWE', codes: ['SE-I'], fact: 'Na ilha de Gotland, com muralhas medievais: é Patrimônio Mundial.' },
    { city: 'Umeå', cityPt: 'Umeå', country: 'SWE', codes: ['SE-AC'], fact: 'Cidade universitária do norte, conhecida como «a cidade das bétulas».' },
    { city: 'Karlstad', cityPt: 'Karlstad', country: 'SWE', codes: ['SE-S'], fact: 'À beira do Vänern, o maior lago da Suécia.' },
    { city: 'Jönköping', cityPt: 'Jönköping', country: 'SWE', codes: ['SE-F'], fact: 'No lago Vättern; lá se fabricavam os famosos fósforos de segurança suecos.' },
    { city: 'Falun', cityPt: 'Falun', country: 'SWE', codes: ['SE-W'], fact: 'A mina de cobre de lá deu o pigmento do vermelho das casas suecas, o «falu rödfärg».' },
    { city: 'Östersund', cityPt: 'Östersund', country: 'SWE', codes: ['SE-Z'], fact: 'À beira do lago Storsjön, que tem até um monstro de lenda.' },
    { city: 'Kalmar', cityPt: 'Kalmar', country: 'SWE', codes: ['SE-H'], fact: 'Tem um castelo à beira-mar; ali se criou, em 1397, a União de Kalmar, que juntou Suécia, Dinamarca e Noruega.' },
  ],
  fr: [
    { city: 'Paris', cityPt: 'Paris', country: 'FRA', codes: ['FR-75C', 'FR-75'], fact: 'A capital, cortada pelo Sena; a Torre Eiffel foi construída para a Exposição Universal de 1889.' },
    { city: 'Lyon', cityPt: 'Lyon', country: 'FRA', codes: ['FR-69'], fact: 'Capital da gastronomia francesa e cidade dos irmãos Lumière, que apresentaram o cinematógrafo em 1895.' },
    { city: 'Marseille', cityPt: 'Marselha', country: 'FRA', codes: ['FR-13'], fact: 'A cidade mais antiga da França, fundada por gregos por volta de 600 a.C., à beira do Mediterrâneo.' },
    { city: 'Bordeaux', cityPt: 'Bordeaux', country: 'FRA', codes: ['FR-33'], fact: 'Cercada de vinhedos famosos; o centro histórico, o «porto da Lua» no rio Garonne, é patrimônio da UNESCO.' },
    { city: 'Strasbourg', cityPt: 'Estrasburgo', country: 'FRA', codes: ['FR-67'], fact: 'Na fronteira com a Alemanha, é sede do Parlamento Europeu e do Conselho da Europa.' },
    { city: 'Toulouse', cityPt: 'Toulouse', country: 'FRA', codes: ['FR-31'], fact: 'A «cidade rosa», dos tijolos avermelhados, e um centro da indústria aeronáutica europeia.' },
    { city: 'Lille', cityPt: 'Lille', country: 'FRA', codes: ['FR-59'], fact: 'Perto da Bélgica, a capital da Flandres francesa, com uma enorme feira de rua em setembro, a Braderie.' },
    { city: 'Nice', cityPt: 'Nice', country: 'FRA', codes: ['FR-06'], fact: 'Na Côte d\u2019Azur, com a Promenade des Anglais à beira do mar; passou a fazer parte da França em 1860.' },
    { city: 'Saint-Malo', cityPt: 'Saint-Malo', country: 'FRA', codes: ['FR-35'], fact: 'A cidade murada dos corsários, na costa da Bretanha, onde a maré sobe mais de dez metros.' },
    { city: 'Chamonix', cityPt: 'Chamonix', country: 'FRA', codes: ['FR-74'], fact: 'Aos pés do Mont Blanc, o ponto mais alto dos Alpes; sediou os primeiros Jogos Olímpicos de Inverno, em 1924.' },
    { city: 'Ajaccio', cityPt: 'Ajaccio', country: 'FRA', codes: ['FR-2A'], fact: 'A capital da Córsega e a cidade onde nasceu Napoleão Bonaparte.' },
    { city: 'Montréal', cityPt: 'Montreal', country: 'CAN', codes: ['CA-QC'], fact: 'A maior cidade francófona das Américas, numa ilha do rio São Lourenço.' },
    { city: 'Québec', cityPt: 'Quebec (cidade)', country: 'CAN', codes: ['CA-QC'], fact: 'Fundada em 1608 por Samuel de Champlain; o bairro antigo, murado, é patrimônio da UNESCO.' },
    { city: 'Bruxelles', cityPt: 'Bruxelas', country: 'BEL', codes: ['BE-BRU'], fact: 'Capital da Bélgica, oficialmente bilíngue (francês e holandês), e sede de instituições da União Europeia.' },
    { city: 'Genève', cityPt: 'Genebra', country: 'CHE', codes: ['CH-GE'], fact: 'Na ponta do lago Léman, é sede europeia da ONU e sede da Cruz Vermelha.' },
    { city: 'Dakar', cityPt: 'Dacar', country: 'SEN', codes: ['SN-DK'], fact: 'A capital do Senegal, na ponta mais ocidental da África continental; ali o francês convive com o uólofe.' },
    { city: 'Port-au-Prince', cityPt: 'Porto Príncipe', country: 'HTI', codes: ['HT-OU'], fact: 'A capital do Haiti, onde as línguas oficiais são o francês e o crioulo haitiano.' },
    { city: 'Abidjan', cityPt: 'Abidjan', country: 'CIV', codes: ['CI-AB', 'CI-LG'], fact: 'A maior cidade da Costa do Marfim e uma das maiores cidades francófonas do mundo.' },
  ],
  nb: [
    { city: 'Oslo', cityPt: 'Oslo', country: 'NOR', codes: ['NO-03'], fact: 'A capital da Noruega, no fundo do fiorde de Oslo; ali se entrega o Prêmio Nobel da Paz.' },
    { city: 'Bergen', cityPt: 'Bergen', country: 'NOR', codes: ['NO-46'], fact: 'A cidade das sete montanhas, com o cais hanseático de Bryggen, Patrimônio Mundial; é uma das cidades mais chuvosas da Europa.' },
    { city: 'Trondheim', cityPt: 'Trondheim', country: 'NOR', codes: ['NO-50'], fact: 'Fundada pelos vikings; a catedral de Nidaros foi erguida sobre o túmulo de Santo Olavo, o rei que cristianizou a Noruega.' },
    { city: 'Stavanger', cityPt: 'Stavanger', country: 'NOR', codes: ['NO-11'], fact: 'A capital do petróleo da Noruega, perto do Preikestolen, o penhasco do púlpito sobre o Lysefjord.' },
    { city: 'Tromsø', cityPt: 'Tromsø', country: 'NOR', codes: ['NO-55', 'NO-54'], fact: 'Acima do Círculo Polar Ártico: no inverno o sol não nasce por semanas e a aurora boreal dança no céu.' },
    { city: 'Kautokeino', cityPt: 'Kautokeino (Guovdageaidnu)', country: 'NOR', codes: ['NO-56', 'NO-54'], fact: 'Guovdageaidnu em sámi: quase todo mundo fala sámi setentrional, e ali fica a universidade sámi.' },
    { city: 'Bodø', cityPt: 'Bodø', country: 'NOR', codes: ['NO-18'], fact: 'Capital Europeia da Cultura em 2024, perto do Saltstraumen, uma das correntes de maré mais fortes do mundo.' },
    { city: 'Ålesund', cityPt: 'Ålesund', country: 'NOR', codes: ['NO-15'], fact: 'Reconstruída em estilo art nouveau depois do incêndio que destruiu a cidade em 1904.' },
    { city: 'Lillehammer', cityPt: 'Lillehammer', country: 'NOR', codes: ['NO-34'], fact: 'Sediou os Jogos Olímpicos de Inverno de 1994.' },
    { city: 'Kristiansand', cityPt: 'Kristiansand', country: 'NOR', codes: ['NO-42'], fact: 'A maior cidade do Sørlandet, o sul ensolarado da Noruega, com as casinhas brancas de madeira do bairro de Posebyen.' },
    { city: 'Fredrikstad', cityPt: 'Fredrikstad', country: 'NOR', codes: ['NO-31', 'NO-30'], fact: 'Tem a Gamlebyen, a cidade velha fortificada mais bem conservada dos países nórdicos.' },
    { city: 'Tønsberg', cityPt: 'Tønsberg', country: 'NOR', codes: ['NO-39', 'NO-38'], fact: 'Considerada a cidade mais antiga da Noruega; perto dali foi achado o navio viking de Oseberg.' },
  ],
  da: [
    { city: 'København', cityPt: 'Copenhague', country: 'DNK', codes: ['DK-84'], fact: 'A capital da Dinamarca, com a Pequena Sereia de Hans Christian Andersen e o porto colorido de Nyhavn.' },
    { city: 'Aarhus', cityPt: 'Aarhus', country: 'DNK', codes: ['DK-82'], fact: 'A segunda maior cidade, com o museu a céu aberto Den Gamle By e a passarela arco-íris no alto do museu ARoS.' },
    { city: 'Odense', cityPt: 'Odense', country: 'DNK', codes: ['DK-83'], fact: 'A cidade natal de Hans Christian Andersen, na ilha de Fiônia.' },
    { city: 'Aalborg', cityPt: 'Aalborg', country: 'DNK', codes: ['DK-81'], fact: 'No norte da Jutlândia, à beira do Limfjord; é famosa pela aquavita.' },
    { city: 'Skagen', cityPt: 'Skagen', country: 'DNK', codes: ['DK-81'], fact: 'Na ponta norte da Dinamarca, onde dois mares se encontram: o Skagerrak e o Kattegat.' },
    { city: 'Roskilde', cityPt: 'Roskilde', country: 'DNK', codes: ['DK-85'], fact: 'A catedral guarda os túmulos dos reis dinamarqueses, e o museu mostra navios vikings; em julho há um dos maiores festivais de música da Europa.' },
    { city: 'Helsingør', cityPt: 'Helsingør', country: 'DNK', codes: ['DK-84'], fact: 'Tem o castelo de Kronborg, onde Shakespeare pôs a história de Hamlet.' },
    { city: 'Billund', cityPt: 'Billund', country: 'DNK', codes: ['DK-83'], fact: 'Onde nasceu o LEGO; o primeiro parque Legoland abriu ali em 1968.' },
    { city: 'Ribe', cityPt: 'Ribe', country: 'DNK', codes: ['DK-83'], fact: 'A cidade mais antiga da Dinamarca, fundada na era viking, no começo do século VIII.' },
    { city: 'Silkeborg', cityPt: 'Silkeborg', country: 'DNK', codes: ['DK-82'], fact: 'Entre lagos e florestas; no museu está o Homem de Tollund, um corpo de uns 2.400 anos achado num pântano.' },
    { city: 'Jelling', cityPt: 'Jelling', country: 'DNK', codes: ['DK-83'], fact: 'As pedras rúnicas de Jelling, do século X, são chamadas de «certidão de batismo da Dinamarca».' },
    { city: 'Rønne', cityPt: 'Rønne', country: 'DNK', codes: ['DK-84'], fact: 'Na ilha de Bornholm, no mar Báltico, famosa pelas igrejas redondas medievais.' },
  ],
  is: [
    { city: 'Reykjavík', cityPt: 'Reykjavík', country: 'ISL', codes: ['IS-RKV', 'IS-1'], fact: 'A capital mais ao norte de um país soberano; a igreja Hallgrímskirkja lembra as colunas de basalto.' },
    { city: 'Hafnarfjörður', cityPt: 'Hafnarfjörður', country: 'ISL', codes: ['IS-1'], fact: 'A «cidade na lava», onde se diz que moram elfos e o povo oculto.' },
    { city: 'Akureyri', cityPt: 'Akureyri', country: 'ISL', codes: ['IS-6'], fact: 'A «capital do norte», no fundo do fiorde Eyjafjörður; os semáforos acendem um coração vermelho.' },
    { city: 'Húsavík', cityPt: 'Húsavík', country: 'ISL', codes: ['IS-6'], fact: 'A capital da observação de baleias da Islândia.' },
    { city: 'Ísafjörður', cityPt: 'Ísafjörður', country: 'ISL', codes: ['IS-4'], fact: 'A maior cidade dos Fiordes do Oeste; tem um festival de música chamado Aldrei fór ég suður, «Nunca fui para o sul».' },
    { city: 'Egilsstaðir', cityPt: 'Egilsstaðir', country: 'ISL', codes: ['IS-7'], fact: 'No leste, perto do lago Lagarfljót, onde a lenda diz que vive um verme gigante.' },
    { city: 'Vík', cityPt: 'Vík í Mýrdal', country: 'ISL', codes: ['IS-8'], fact: 'A vila mais ao sul da Islândia, com a praia de areia preta de Reynisfjara.' },
    { city: 'Þingvellir', cityPt: 'Þingvellir', country: 'ISL', codes: ['IS-8'], fact: 'Onde o parlamento islandês, o Alþingi, se reuniu ao ar livre a partir de 930, entre duas placas tectônicas.' },
    { city: 'Heimaey', cityPt: 'Heimaey (Vestmannaeyjar)', country: 'ISL', codes: ['IS-8'], fact: 'Em 1973 um vulcão entrou em erupção na ilha e quase fechou o porto; a lava foi resfriada com água do mar.' },
    { city: 'Keflavík', cityPt: 'Keflavík', country: 'ISL', codes: ['IS-2'], fact: 'Onde fica o aeroporto internacional: quase todo viajante chega à Islândia por aqui.' },
    { city: 'Borgarnes', cityPt: 'Borgarnes', country: 'ISL', codes: ['IS-3'], fact: 'A terra de Egill Skallagrímsson, o poeta viking da saga de Egill.' },
    { city: 'Sauðárkrókur', cityPt: 'Sauðárkrókur', country: 'ISL', codes: ['IS-5'], fact: 'No Skagafjörður, a região mais famosa pelos cavalos islandeses.' },
  ],
  fi: [
    { city: 'Helsinki', cityPt: 'Helsinque', country: 'FIN', codes: ['FI-18'], fact: 'A capital da Finlândia, com a fortaleza de Suomenlinna, construída sobre ilhas.' },
    { city: 'Porvoo', cityPt: 'Porvoo', country: 'FIN', codes: ['FI-18'], fact: 'A segunda cidade mais antiga da Finlândia, com armazéns vermelhos à beira do rio.' },
    { city: 'Turku', cityPt: 'Turku', country: 'FIN', codes: ['FI-19'], fact: 'A antiga capital e a cidade mais antiga da Finlândia, com castelo e catedral medievais.' },
    { city: 'Tampere', cityPt: 'Tampere', country: 'FIN', codes: ['FI-11'], fact: 'Entre dois lagos ligados por corredeiras, que moviam as fábricas; diz ser a capital mundial da sauna.' },
    { city: 'Rovaniemi', cityPt: 'Rovaniemi', country: 'FIN', codes: ['FI-10'], fact: 'Na linha do Círculo Polar Ártico; ali fica a Vila do Papai Noel.' },
    { city: 'Inari', cityPt: 'Inari', country: 'FIN', codes: ['FI-10'], fact: 'O coração da cultura sámi na Finlândia, com o Parlamento Sámi e o museu Siida.' },
    { city: 'Oulu', cityPt: 'Oulu', country: 'FIN', codes: ['FI-14'], fact: 'Sedia o Campeonato Mundial de Air Guitar e foi Capital Europeia da Cultura em 2026.' },
    { city: 'Savonlinna', cityPt: 'Savonlinna', country: 'FIN', codes: ['FI-04'], fact: 'O castelo medieval de Olavinlinna, no meio dos lagos do Saimaa, recebe um festival de ópera.' },
    { city: 'Kuopio', cityPt: 'Kuopio', country: 'FIN', codes: ['FI-15'], fact: 'Na Savônia, a terra do kalakukko, um pão recheado de peixe.' },
    { city: 'Jyväskylä', cityPt: 'Jyväskylä', country: 'FIN', codes: ['FI-08'], fact: 'A cidade do arquiteto Alvar Aalto, com muitos prédios desenhados por ele.' },
    { city: 'Vaasa', cityPt: 'Vaasa', country: 'FIN', codes: ['FI-12'], fact: 'Na costa oeste, onde muita gente fala sueco; em frente fica o arquipélago de Kvarken, Patrimônio Mundial.' },
    { city: 'Lahti', cityPt: 'Lahti', country: 'FIN', codes: ['FI-16'], fact: 'A cidade dos esportes de inverno, com as grandes rampas de salto de esqui.' },
    { city: 'Joensuu', cityPt: 'Joensuu', country: 'FIN', codes: ['FI-13'], fact: 'A capital da Carélia do Norte, entre florestas, perto da fronteira com a Rússia.' },
  ],
  et: [
    { city: 'Tallinn', cityPt: 'Tallinn', country: 'EST', codes: ['EE-37'], fact: 'A capital, com a cidade velha medieval da Liga Hanseática, Patrimônio Mundial.' },
    { city: 'Tartu', cityPt: 'Tartu', country: 'EST', codes: ['EE-79'], fact: 'A cidade universitária, com a universidade mais antiga da Estônia (1632); foi Capital Europeia da Cultura em 2024.' },
    { city: 'Pärnu', cityPt: 'Pärnu', country: 'EST', codes: ['EE-68'], fact: 'A «capital de verão» da Estônia, com praias de areia.' },
    { city: 'Narva', cityPt: 'Narva', country: 'EST', codes: ['EE-45'], fact: 'Na fronteira com a Rússia, onde a maioria fala russo; o castelo de Narva fica de frente para a fortaleza de Ivangorod, do outro lado do rio.' },
    { city: 'Kuressaare', cityPt: 'Kuressaare', country: 'EST', codes: ['EE-74'], fact: 'Na ilha de Saaremaa, com um castelo episcopal medieval muito bem conservado.' },
    { city: 'Kärdla', cityPt: 'Kärdla', country: 'EST', codes: ['EE-39'], fact: 'A única cidade da ilha de Hiiumaa, a ilha dos faróis.' },
    { city: 'Viljandi', cityPt: 'Viljandi', country: 'EST', codes: ['EE-84'], fact: 'Sedia o maior festival de música folclórica da Estônia.' },
    { city: 'Võru', cityPt: 'Võru', country: 'EST', codes: ['EE-87'], fact: 'No sudeste, onde se fala o võro, parente do estoniano com escrita própria.' },
    { city: 'Otepää', cityPt: 'Otepää', country: 'EST', codes: ['EE-81'], fact: 'A «capital de inverno» da Estônia, com pistas de esqui cross-country.' },
    { city: 'Rakvere', cityPt: 'Rakvere', country: 'EST', codes: ['EE-60'], fact: 'Tem um castelo medieval e a estátua gigante de um auroque, o boi selvagem extinto.' },
    { city: 'Paide', cityPt: 'Paide', country: 'EST', codes: ['EE-52'], fact: 'No centro do país, e por isso chamada de «coração da Estônia».' },
    { city: 'Jõgeva', cityPt: 'Jõgeva', country: 'EST', codes: ['EE-50'], fact: 'Registrou a temperatura mais baixa da Estônia: −43,5 °C, em 1940.' },
  ],
};

/** A pista falada: «Linu viaja a Sevilla» no idioma estudado. */
export function clueSentence(lang: string, city: string): string {
  switch (lang) {
    case 'ro':
      return `Linu călătorește la ${city}.`;
    case 'es':
      return `Linu viaja a ${city}.`;
    case 'it':
      return `Linu viaggia a ${city}.`;
    case 'pt':
      return `O Linu viaja até ${city}.`;
    case 'ru':
      return `Лину е́дет в го́род ${city}.`;
    case 'sv':
      return `Linu reser till ${city}.`;
    case 'fr':
      return `Linu voyage à ${city}.`;
    case 'nb':
      return `Linu reiser til ${city}.`;
    case 'da':
      return `Linu rejser til ${city}.`;
    // islandês, finlandês e estoniano mudam o nome da cidade depois de «para» (caso): o nome fica no nominativo
    case 'is':
      return `Linu er á ferðalagi. Næsti áfangastaður: ${city}.`;
    case 'fi':
      return `Linu matkustaa. Seuraava kohde on ${city}.`;
    case 'et':
      return `Linu reisib. Järgmine sihtkoht on ${city}.`;
    default:
      return city;
  }
}

export const STOPS_PER_EXPEDITION = 3;

/** Semana ISO (ano e número): a expedição muda toda segunda-feira. */
export function isoWeek(d = new Date()): string {
  const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const day = t.getUTCDay() || 7;
  t.setUTCDate(t.getUTCDate() + 4 - day);
  const year = t.getUTCFullYear();
  const week = Math.ceil(((t.getTime() - Date.UTC(year, 0, 1)) / 86400000 + 1) / 7);
  return `${year}-${String(week).padStart(2, '0')}`;
}

/** As paradas da semana: sorteadas pela semana e pelo idioma (iguais para quem abrir na mesma semana). */
export function weeklyStops(lang: string, week: string): ExpeditionPlace[] {
  const places = EXPEDITION_PLACES[lang] ?? [];
  let seed = [...`${lang}:${week}`].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);
  const rnd = () => ((seed = (seed * 1103515245 + 12345) >>> 0) / 2 ** 32);
  const pool = [...places];
  const out: ExpeditionPlace[] = [];
  while (out.length < STOPS_PER_EXPEDITION && pool.length) out.push(pool.splice(Math.floor(rnd() * pool.length), 1)[0]);
  return out;
}
