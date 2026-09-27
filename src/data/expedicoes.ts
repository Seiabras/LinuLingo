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
