import type { NatureItem } from './fauna-musica';

/**
 * Comida, folclore, danças, plantas e brincadeiras de cada país que tem bichos e instrumentos
 * (src/data/fauna-musica.ts): a mesma ficha (emoji, nome, nome local, curiosidade), mostrada na aba
 * Cultura e no cartão do país no mapa. Só fatos bem estabelecidos.
 */
export interface CountryCulture {
  foods: NatureItem[];
  folklore: NatureItem[];
  dances: NatureItem[];
  plants: NatureItem[];
  games: NatureItem[];
}

export const CULTURE_KINDS: { key: keyof CountryCulture; label: string; emoji: string }[] = [
  { key: 'foods', label: 'Comida', emoji: '🍲' },
  { key: 'folklore', label: 'Folclore', emoji: '🧌' },
  { key: 'dances', label: 'Danças', emoji: '💃' },
  { key: 'plants', label: 'Plantas', emoji: '🌸' },
  { key: 'games', label: 'Brincadeiras', emoji: '🎲' },
];

export const CULTURA_PAISES: Record<string, CountryCulture> = {
  ROU: {
    foods: [
      { emoji: '🥬', name: 'Charutos de repolho', local: 'sarmale', fact: 'Folhas de repolho azedo enroladas com carne e arroz, cozidas por horas: o prato das festas de Natal e dos casamentos.' },
      { emoji: '🌽', name: 'Polenta', local: 'mămăligă', fact: 'Angu de milho servido com queijo e creme de leite; foi durante séculos o pão dos camponeses.' },
      { emoji: '🍞', name: 'Pão doce trançado', local: 'cozonac', fact: 'Com nozes e cacau em espiral, não falta na Páscoa e no Natal.' },
    ],
    folklore: [
      { emoji: '🧛', name: 'Strigoi', local: 'strigoi', fact: 'Espíritos de mortos que saem do túmulo à noite. Esse folclore dos Cárpatos ajudou a criar a imagem do vampiro na literatura.' },
      { emoji: '🧚', name: 'As três fadas do destino', local: 'ursitoare', fact: 'Na terceira noite depois do nascimento, três fadas visitam o bebê e decidem o destino dele.' },
      { emoji: '🤴', name: 'Făt-Frumos', local: 'Făt-Frumos', fact: 'O herói dos contos de fadas romenos, que enfrenta dragões (zmei) para salvar Ileana Cosânzeana.' },
    ],
    dances: [
      { emoji: '💃', name: 'Hora', local: 'hora', fact: 'Uma grande roda de mãos dadas que gira nos casamentos e nas festas; qualquer um pode entrar.' },
      { emoji: '🕺', name: 'Călușari', local: 'călușari', fact: 'Dança ritual masculina, acrobática, com bastões e guizos; é patrimônio imaterial da UNESCO.' },
    ],
    plants: [
      { emoji: '🌳', name: 'Tília', local: 'tei', fact: 'A árvore dos poemas de amor de Mihai Eminescu, o poeta nacional; o chá de flor de tília é remédio de avó.' },
      { emoji: '🌲', name: 'Faia', local: 'fag', fact: 'Os Cárpatos romenos guardam algumas das últimas florestas virgens de faias da Europa, patrimônio da UNESCO.' },
    ],
    games: [
      { emoji: '🧒', name: 'Amarelinha', local: 'șotron', fact: 'Riscada com giz na calçada, igual à brasileira.' },
      { emoji: '🙌', name: '«País, país, queremos soldados»', local: 'Țară, țară, vrem ostași', fact: 'Dois times de mãos dadas; o chamado corre e tenta romper a corrente do outro lado.' },
    ],
  },
  MDA: {
    foods: [
      { emoji: '🥟', name: 'Pastéis', local: 'plăcinte', fact: 'Massa fininha recheada de queijo, abóbora, repolho ou batata: o salgado de todo dia.' },
      { emoji: '🍜', name: 'Sopa azeda de galinha', local: 'zeamă', fact: 'Com macarrão caseiro e o azedo do farelo fermentado (borș); dizem que cura ressaca de casamento.' },
    ],
    folklore: [
      { emoji: '🐑', name: 'Miorița', local: 'Miorița', fact: 'A balada da ovelhinha que avisa o pastor de que os outros vão matá-lo. É o poema popular mais famoso da Moldávia e da Romênia.' },
      { emoji: '👸', name: 'Ileana Cosânzeana', local: 'Ileana Cosânzeana', fact: 'A princesa de beleza sem igual dos contos de fadas, que o herói Făt-Frumos salva.' },
    ],
    dances: [
      { emoji: '💃', name: 'Hora e sârba', local: 'hora, sârba', fact: 'A hora é a roda lenta; a sârba, a versão rápida, em que todos se seguram pelos ombros.' },
    ],
    plants: [
      { emoji: '🍇', name: 'Videira', local: 'viță-de-vie', fact: 'A adega de Mileștii Mici, com galerias de quase 200 km, entrou para o Guinness como a maior coleção de vinhos do mundo.' },
      { emoji: '🌳', name: 'Carvalho', local: 'stejar', fact: 'As florestas de carvalhos dos Codri cobrem o centro do país.' },
    ],
    games: [{ emoji: '🙈', name: 'Esconde-esconde', local: 'de-a v-ați ascunselea', fact: 'O nome quer dizer, ao pé da letra, «de brincar de se esconder».' }],
  },
  BRA: {
    foods: [
      { emoji: '🫘', name: 'Feijoada', fact: 'Feijão-preto com carnes de porco, servido com arroz, couve, farofa e laranja: o almoço de sábado.' },
      { emoji: '🧀', name: 'Pão de queijo', fact: 'Feito de polvilho, não de farinha de trigo: é de Minas Gerais e não leva glúten.' },
      { emoji: '🫐', name: 'Açaí', fact: 'No Pará se come o açaí sem açúcar, com peixe frito e farinha; o doce, na tigela, é invenção do resto do país.' },
    ],
    folklore: [
      { emoji: '🌪️', name: 'Saci-Pererê', fact: 'Menino de uma perna só, gorro vermelho e cachimbo, que apronta travessuras e vive nos redemoinhos.' },
      { emoji: '🦶', name: 'Curupira', fact: 'Protetor da mata, com os pés virados para trás: quem segue as pegadas dele se perde.' },
      { emoji: '🧜‍♀️', name: 'Iara', fact: 'A mãe-d’água dos rios da Amazônia, que encanta os pescadores com o seu canto.' },
    ],
    dances: [
      { emoji: '🥁', name: 'Samba de roda', fact: 'O samba de roda do Recôncavo Baiano, raiz do samba, é patrimônio imaterial da UNESCO.' },
      { emoji: '☂️', name: 'Frevo', fact: 'A dança acrobática do carnaval do Recife, com a sombrinha colorida; patrimônio da UNESCO desde 2012.' },
      { emoji: '🪗', name: 'Forró', fact: 'Dançado a dois, ao som de sanfona, zabumba e triângulo, nas festas juninas do Nordeste.' },
    ],
    plants: [
      { emoji: '🌳', name: 'Pau-brasil', fact: 'A árvore de madeira vermelha como brasa que deu nome ao país; hoje está ameaçada de extinção.' },
      { emoji: '🌼', name: 'Ipê', fact: 'Floresce no fim do inverno, sem folhas, todo amarelo, roxo ou branco.' },
      { emoji: '🪷', name: 'Vitória-régia', fact: 'A folha gigante dos rios amazônicos chega a 2 metros e aguenta o peso de uma criança pequena.' },
    ],
    games: [
      { emoji: '🏸', name: 'Peteca', fact: 'Brincadeira de origem indígena: a palavra vem do tupi e quer dizer «bater com a mão».' },
      { emoji: '🪁', name: 'Pipa', fact: 'Ou papagaio, raia, pandorga — cada região tem um nome.' },
      { emoji: '🧒', name: 'Amarelinha', fact: 'Pula-se num pé só pelas casas riscadas no chão, até o «céu».' },
    ],
  },
  PRT: {
    foods: [
      { emoji: '🐟', name: 'Bacalhau', local: 'bacalhau', fact: 'Diz-se que há 365 receitas, uma para cada dia do ano; é o prato da consoada, a ceia de Natal.' },
      { emoji: '🥧', name: 'Pastel de nata', local: 'pastel de nata', fact: 'Nasceu no Mosteiro dos Jerónimos, em Belém; a receita dos Pastéis de Belém é segredo desde 1837.' },
      { emoji: '🥣', name: 'Caldo verde', local: 'caldo verde', fact: 'Sopa de batata com couve cortada fininha e uma rodela de chouriço.' },
    ],
    folklore: [
      { emoji: '🌊', name: 'Adamastor', local: 'Adamastor', fact: 'O gigante do Cabo das Tormentas, que Camões pôs em Os Lusíadas para ameaçar os navegadores.' },
      { emoji: '🌫️', name: 'O rei que voltará', local: 'D. Sebastião, o Desejado', fact: 'O rei sumiu numa batalha em 1578; nasceu a crença de que ele voltaria numa manhã de nevoeiro.' },
    ],
    dances: [
      { emoji: '💃', name: 'Vira', local: 'vira', fact: 'Dança de roda do Minho, em que os pares giram e trocam de lugar, com trajes bordados.' },
      { emoji: '🪗', name: 'Corridinho', local: 'corridinho', fact: 'Dança rápida do Algarve, ao som do acordeão.' },
    ],
    plants: [
      { emoji: '🌳', name: 'Sobreiro', local: 'sobreiro', fact: 'Árvore nacional de Portugal desde 2011: a casca é a cortiça, e Portugal é o maior produtor do mundo.' },
      { emoji: '🫒', name: 'Oliveira', local: 'oliveira', fact: 'Há oliveiras em Portugal com mais de dois mil anos.' },
    ],
    games: [
      { emoji: '🧒', name: 'Amarelinha', local: 'macaca', fact: 'Em Portugal, a amarelinha se chama «macaca».' },
      { emoji: '🌀', name: 'Pião', local: 'pião', fact: 'Lança-se com um cordel enrolado; ganha quem faz o pião girar mais tempo.' },
    ],
  },
  ESP: {
    foods: [
      { emoji: '🥘', name: 'Paella', local: 'paella', fact: 'É de Valência, e a original leva frango, coelho e feijão-verde — não frutos do mar.' },
      { emoji: '🍳', name: 'Tortilha de batata', local: 'tortilla de patatas', fact: 'Com ou sem cebola? A discussão divide a Espanha.' },
      { emoji: '🍅', name: 'Gaspacho', local: 'gazpacho', fact: 'Sopa fria de tomate, pimentão e pepino, da Andaluzia, para os verões de 40 graus.' },
    ],
    folklore: [
      { emoji: '🐭', name: 'O ratinho Pérez', local: 'el Ratoncito Pérez', fact: 'A «fada do dente» espanhola: um ratinho criado em 1894 por Luis Coloma para o pequeno rei Afonso XIII.' },
      { emoji: '👻', name: 'Santa Compaña', local: 'la Santa Compaña', fact: 'Na Galícia, a procissão das almas que anda de noite pelos caminhos com velas.' },
    ],
    dances: [
      { emoji: '💃', name: 'Flamenco', local: 'flamenco', fact: 'Canto, violão e dança da Andaluzia, com raízes ciganas; patrimônio da UNESCO desde 2010.' },
      { emoji: '🫱', name: 'Sardana', local: 'sardana', fact: 'Roda de mãos dadas e braços erguidos da Catalunha, dançada nas praças.' },
    ],
    plants: [
      { emoji: '🫒', name: 'Oliveira', local: 'olivo', fact: 'A Espanha é o maior produtor de azeite do mundo.' },
      { emoji: '🌺', name: 'Cravo', local: 'clavel', fact: 'A flor nacional, presa no cabelo das dançarinas de flamenco.' },
    ],
    games: [
      { emoji: '🧒', name: 'Amarelinha', local: 'la rayuela', fact: 'Rayuela também é o nome de um romance famoso de Julio Cortázar.' },
      { emoji: '🙈', name: 'Esconde-esconde', local: 'el escondite', fact: 'O mesmo jogo, com a contagem em espanhol.' },
    ],
  },
  MEX: {
    foods: [
      { emoji: '🌮', name: 'Tacos', local: 'tacos', fact: 'Tortilhas de milho com recheios que mudam de região para região; a cozinha mexicana é patrimônio da UNESCO.' },
      { emoji: '🍫', name: 'Mole poblano', local: 'mole poblano', fact: 'Molho com dezenas de ingredientes, entre eles pimentas e chocolate, servido com peru ou frango.' },
      { emoji: '🫔', name: 'Tamales', local: 'tamales', fact: 'Massa de milho recheada e cozida no vapor dentro da palha do milho.' },
    ],
    folklore: [
      { emoji: '😢', name: 'La Llorona', local: 'La Llorona', fact: 'A mulher que chora pelos filhos perto dos rios à noite: «¡Ay, mis hijos!».' },
      { emoji: '🐉', name: 'Alebrijes', local: 'alebrijes', fact: 'Criaturas fantásticas coloridas, criadas pelo artesão Pedro Linares em 1936 a partir de um sonho.' },
    ],
    dances: [
      { emoji: '👒', name: 'Jarabe tapatío', local: 'jarabe tapatío', fact: 'A «dança do chapéu», considerada a dança nacional; no fim, o casal dança em volta do sombrero no chão.' },
      { emoji: '🪢', name: 'Voladores de Papantla', local: 'danza de los voladores', fact: 'Quatro homens descem girando, amarrados pelos pés, do alto de um mastro de 30 metros; patrimônio da UNESCO.' },
    ],
    plants: [
      { emoji: '🌽', name: 'Milho', local: 'maíz', fact: 'Foi domesticado no México há cerca de 9 mil anos, a partir de uma planta selvagem, o teosinto.' },
      { emoji: '🌵', name: 'Agave', local: 'agave', fact: 'Da planta se fazem a tequila e o mezcal.' },
      { emoji: '🌸', name: 'Dália', local: 'dalia', fact: 'A flor nacional do México.' },
    ],
    games: [
      { emoji: '🪅', name: 'Piñata', local: 'piñata', fact: 'Com os olhos vendados, as crianças batem na piñata até cair a chuva de doces.' },
      { emoji: '🃏', name: 'Loteria', local: 'lotería', fact: 'Um bingo com figuras (el gallo, la muerte, la sirena), cantadas com rimas.' },
    ],
  },
  COL: {
    foods: [
      { emoji: '🍛', name: 'Bandeja paisa', local: 'bandeja paisa', fact: 'Feijão, arroz, carne moída, torresmo, ovo, banana-da-terra e arepa num prato só, de Antioquia.' },
      { emoji: '🫓', name: 'Arepa', local: 'arepa', fact: 'Bolinho de milho achatado, no café da manhã de colombianos e venezuelanos.' },
      { emoji: '🍲', name: 'Ajiaco', local: 'ajiaco', fact: 'Sopa de Bogotá com três tipos de batata, frango e uma erva andina, a guasca.' },
    ],
    folklore: [
      { emoji: '🦶', name: 'La Patasola', local: 'La Patasola', fact: 'A mulher de uma perna só que assusta quem entra na mata sem respeito.' },
      { emoji: '🎸', name: 'El Mohán', local: 'El Mohán', fact: 'Um velho feiticeiro dos rios, que toca violão e atrai as lavadeiras.' },
    ],
    dances: [
      { emoji: '🕯️', name: 'Cumbia', local: 'cumbia', fact: 'Nasceu no Caribe colombiano, misturando tambores africanos, flautas indígenas e trajes espanhóis.' },
      { emoji: '💃', name: 'Salsa caleña', local: 'salsa caleña', fact: 'Cali se diz a capital mundial da salsa, dançada com passos rapidíssimos.' },
    ],
    plants: [
      { emoji: '🌴', name: 'Palma-de-cera', local: 'palma de cera', fact: 'A árvore nacional, a palmeira mais alta do mundo: passa de 50 metros no Vale do Cocora.' },
      { emoji: '🌸', name: 'Orquídea', local: 'flor de mayo (Cattleya trianae)', fact: 'A flor nacional; a Colômbia é um dos países com mais espécies de orquídeas.' },
    ],
    games: [{ emoji: '💥', name: 'Tejo', local: 'tejo', fact: 'O esporte nacional: lança-se um disco de metal num alvo de argila com pólvora, que explode quando acerta.' }],
  },
  ARG: {
    foods: [
      { emoji: '🥩', name: 'Churrasco', local: 'asado', fact: 'O ritual do domingo, assado lentamente na brasa pelo «asador».' },
      { emoji: '🥟', name: 'Empanadas', local: 'empanadas', fact: 'Cada província tem a sua; o repulgue (a dobra da borda) diz o recheio.' },
      { emoji: '🍯', name: 'Doce de leite', local: 'dulce de leche', fact: 'Argentinos e uruguaios discutem quem o inventou.' },
    ],
    folklore: [
      { emoji: '👺', name: 'El Pombero', local: 'el Pombero', fact: 'Duende do nordeste argentino e do Paraguai, que protege os pássaros e apronta com quem dorme a sesta.' },
      { emoji: '💧', name: 'A Difunta Correa', local: 'la Difunta Correa', fact: 'Nas estradas há santuários cheios de garrafas de água em homenagem a uma mulher que morreu de sede no deserto.' },
    ],
    dances: [
      { emoji: '💃', name: 'Tango', local: 'tango', fact: 'Nasceu nos subúrbios de Buenos Aires e de Montevidéu; patrimônio da UNESCO desde 2009.' },
      { emoji: '🪗', name: 'Chacarera', local: 'chacarera', fact: 'Dança folclórica de pares soltos, com lenços e sapateado, das províncias do norte.' },
    ],
    plants: [
      { emoji: '🌺', name: 'Ceibo', local: 'ceibo', fact: 'A flor nacional, vermelha, das margens dos rios.' },
      { emoji: '🧉', name: 'Erva-mate', local: 'yerba mate', fact: 'O mate, bebido na cuia com a bombilla, passa de mão em mão numa roda de amigos.' },
    ],
    games: [{ emoji: '🪨', name: 'Cinco-marias', local: 'la payana', fact: 'Joga-se com cinco pedrinhas, pegando as do chão enquanto uma está no ar.' }],
  },
  PER: {
    foods: [
      { emoji: '🐟', name: 'Ceviche', local: 'ceviche', fact: 'Peixe cru «cozido» no limão, com cebola roxa e pimenta; patrimônio da UNESCO desde 2023.' },
      { emoji: '🥔', name: 'Batata', local: 'papa', fact: 'Foi domesticada nos Andes peruanos, e o Peru tem milhares de variedades.' },
    ],
    folklore: [
      { emoji: '🌍', name: 'Pachamama', local: 'Pachamama', fact: 'A Mãe Terra dos povos andinos, que recebe oferendas em agosto.' },
      { emoji: '👑', name: 'Inkarrí', local: 'Inkarrí', fact: 'O mito do inca decapitado cujo corpo cresce debaixo da terra, até voltar para restaurar o mundo andino.' },
    ],
    dances: [
      { emoji: '💃', name: 'Marinera', local: 'marinera', fact: 'A dança nacional: um namoro com lenços, elegante; há até a marinera a cavalo, com os cavalos de passo peruanos.' },
      { emoji: '✂️', name: 'Dança das tesouras', local: 'danza de las tijeras', fact: 'Dançarinos dos Andes batem lâminas de metal e fazem acrobacias num desafio; patrimônio da UNESCO.' },
    ],
    plants: [
      { emoji: '🌺', name: 'Cantuta', local: 'cantuta', fact: 'A flor nacional, sagrada para os incas.' },
      { emoji: '🌳', name: 'Quina', local: 'quina', fact: 'A árvore do brasão do Peru: da casca veio o quinino, o primeiro remédio contra a malária.' },
    ],
    games: [{ emoji: '🌀', name: 'Pião', local: 'trompo', fact: 'Os piões de madeira pintada são lançados com uma cordinha, como no Brasil.' }],
  },
  CHL: {
    foods: [
      { emoji: '🥟', name: 'Empanada de pino', local: 'empanada de pino', fact: 'Recheada de carne, cebola, ovo cozido e azeitona; não falta nas Fiestas Patrias de setembro.' },
      { emoji: '🌽', name: 'Torta de milho', local: 'pastel de choclo', fact: 'Carne por baixo e creme de milho verde por cima, gratinado no forno de barro.' },
      { emoji: '🌭', name: 'Completo', local: 'completo', fact: 'O cachorro-quente chileno, coberto de abacate, tomate e muita maionese.' },
    ],
    folklore: [
      { emoji: '🧙', name: 'El Trauco', local: 'el Trauco', fact: 'Duende feio e baixinho da ilha de Chiloé, com um machadinho de pedra.' },
      { emoji: '🚢', name: 'O Caleuche', local: 'el Caleuche', fact: 'O navio-fantasma de Chiloé, todo iluminado e cheio de música, tripulado por bruxos.' },
    ],
    dances: [{ emoji: '💃', name: 'Cueca', local: 'cueca', fact: 'A dança nacional: um casal com lenços imita o galo cortejando a galinha.' }],
    plants: [
      { emoji: '🌺', name: 'Copihue', local: 'copihue', fact: 'A flor nacional, vermelha em forma de sino, das florestas do sul.' },
      { emoji: '🌲', name: 'Araucária', local: 'araucaria (pehuén)', fact: 'Árvore sagrada para os mapuches, que comem os seus pinhões.' },
    ],
    games: [{ emoji: '🎯', name: 'Bilboquê', local: 'emboque', fact: 'Uma bola de madeira presa por um cordão, para encaixar no pino com um golpe.' }],
  },
  CUB: {
    foods: [
      { emoji: '🍖', name: 'Ropa vieja', local: 'ropa vieja', fact: 'Carne desfiada no molho de tomate: o nome quer dizer «roupa velha».' },
      { emoji: '🍚', name: 'Arroz com feijão-preto', local: 'moros y cristianos', fact: 'Cozidos juntos; o nome («mouros e cristãos») lembra a história da Espanha.' },
    ],
    folklore: [{ emoji: '🧒', name: 'O güije', local: 'el güije', fact: 'Um duende pretinho dos rios e lagoas, que puxa quem nada sozinho.' }],
    dances: [
      { emoji: '🥁', name: 'Rumba', local: 'rumba', fact: 'Música e dança afro-cubana, de tambores e canto; patrimônio da UNESCO desde 2016.' },
      { emoji: '💃', name: 'Danzón e cha-cha-chá', local: 'danzón, chachachá', fact: 'O danzón é a dança nacional; o cha-cha-chá nasceu dele nos anos 1950, e o nome imita o som dos pés.' },
    ],
    plants: [
      { emoji: '🌴', name: 'Palma-real', local: 'palma real', fact: 'A árvore nacional, que aparece no brasão de Cuba.' },
      { emoji: '🤍', name: 'Flor-borboleta', local: 'mariposa', fact: 'A flor nacional; na guerra de independência, as mulheres escondiam mensagens nela.' },
    ],
    games: [
      { emoji: '⚫', name: 'Dominó', local: 'dominó', fact: 'Jogado em mesas nas calçadas de Havana, com gritos a cada peça batida.' },
      { emoji: '⚾', name: 'Beisebol', local: 'pelota', fact: 'O esporte nacional de Cuba.' },
    ],
  },
  ITA: {
    foods: [
      { emoji: '🍕', name: 'Pizza napolitana', local: 'pizza napoletana', fact: 'A arte do pizzaiolo napolitano é patrimônio da UNESCO desde 2017.' },
      { emoji: '🍝', name: 'Massa', local: 'pasta', fact: 'Há centenas de formatos, cada um pensado para segurar um tipo de molho.' },
      { emoji: '🍨', name: 'Sorvete', local: 'gelato', fact: 'Mais denso e com menos ar que o sorvete comum.' },
    ],
    folklore: [
      { emoji: '🧹', name: 'Befana', local: 'la Befana', fact: 'A velhinha de vassoura que traz presentes às crianças na noite de 5 para 6 de janeiro — e carvão às levadas.' },
      { emoji: '🪵', name: 'Pinóquio', local: 'Pinocchio', fact: 'O boneco de madeira cujo nariz cresce, criado por Carlo Collodi em 1883.' },
      { emoji: '🧙', name: 'O Munaciello', local: "'o munaciello", fact: 'O «monginho» de Nápoles, que aparece nas casas e pode trazer sorte ou azar.' },
    ],
    dances: [
      { emoji: '🕷️', name: 'Tarantela', local: 'tarantella', fact: 'Dança rápida do sul; a lenda diz que ela curava a picada da tarântula.' },
      { emoji: '💃', name: 'Pizzica', local: 'pizzica', fact: 'A tarantela do Salento, na Puglia, com pandeiros.' },
    ],
    plants: [
      { emoji: '🍋', name: 'Limão de Amalfi', local: 'limone di Amalfi', fact: 'Os limões enormes da costa de Amalfi viram o licor limoncello.' },
      { emoji: '🫒', name: 'Oliveira', local: 'olivo', fact: 'Da Ligúria à Sicília, a paisagem do Mediterrâneo.' },
    ],
    games: [
      { emoji: '🟤', name: 'Bocha', local: 'bocce', fact: 'Os imigrantes italianos levaram a bocha para o Brasil e a Argentina.' },
      { emoji: '✋', name: 'Morra', local: 'morra', fact: 'Os dois mostram dedos e gritam um número ao mesmo tempo; já se jogava na Roma antiga.' },
    ],
  },
  SWE: {
    foods: [
      { emoji: '🧆', name: 'Almôndegas', local: 'köttbullar', fact: 'Com geleia de lingon, purê e molho — famosas no mundo inteiro pelos restaurantes da IKEA.' },
      { emoji: '🥐', name: 'Pão de canela', local: 'kanelbulle', fact: 'Tem até um dia só dele: 4 de outubro. É o companheiro da fika.' },
      { emoji: '🐟', name: 'Arenque fermentado', local: 'surströmming', fact: 'Um dos cheiros mais fortes do mundo: a lata se abre ao ar livre.' },
    ],
    folklore: [
      { emoji: '🎅', name: 'Tomte', local: 'tomte', fact: 'O duende que protege a fazenda, se ganhar mingau com manteiga no Natal.' },
      { emoji: '🎻', name: 'Näcken', local: 'näcken', fact: 'O espírito das águas que toca violino e atrai as pessoas para os rios.' },
    ],
    dances: [
      { emoji: '🐸', name: '«Os sapinhos»', local: 'Små grodorna', fact: 'No midsommar, adultos e crianças pulam como sapos em volta do mastro enfeitado de flores.' },
      { emoji: '🎻', name: 'Polska', local: 'polska', fact: 'A dança folclórica de pares girando, ao som do violino e da nyckelharpa.' },
    ],
    plants: [
      { emoji: '🍒', name: 'Lingon', local: 'lingon', fact: 'Frutinha vermelha das florestas, colhida no fim do verão pelo direito de acesso à natureza.' },
      { emoji: '🌳', name: 'Bétula', local: 'björk', fact: 'Os galhos com folhas novas enfeitam as casas no midsommar.' },
    ],
    games: [{ emoji: '🪵', name: 'Kubb', local: 'kubb', fact: 'O «xadrez viking»: lançam-se bastões para derrubar os blocos de madeira do outro time e, por último, o rei.' }],
  },
  NOR: {
    foods: [
      { emoji: '🧀', name: 'Queijo marrom', local: 'brunost', fact: 'Doce e caramelado; o fatiador de queijo (ostehøvel) foi inventado na Noruega em 1925 para cortá-lo.' },
      { emoji: '🥬', name: 'Carneiro com repolho', local: 'fårikål', fact: 'O prato nacional, cozido em camadas com pimenta-do-reino inteira.' },
    ],
    folklore: [
      { emoji: '🧌', name: 'Troll', local: 'troll', fact: 'Gigantes das montanhas que viram pedra se o sol bater neles.' },
      { emoji: '🐄', name: 'Huldra', local: 'hulder', fact: 'Uma mulher linda da floresta, com rabo de vaca escondido, que atrai os pastores.' },
    ],
    dances: [{ emoji: '🕺', name: 'Halling', local: 'halling', fact: 'Dança acrobática masculina: o ponto alto é derrubar com um chute um chapéu preso num bastão lá no alto.' }],
    plants: [
      { emoji: '💜', name: 'Urze', local: 'røsslyng', fact: 'A flor nacional, que pinta as encostas de roxo no fim do verão.' },
      { emoji: '🌲', name: 'Abeto', local: 'gran', fact: 'Todo ano, Oslo manda um abeto de Natal para Londres, em agradecimento pela ajuda na Segunda Guerra.' },
    ],
    games: [{ emoji: '⛷️', name: 'Esqui', local: 'ski', fact: '«Os noruegueses nascem de esqui nos pés», diz o ditado; a palavra «ski» é norueguesa.' }],
  },
  DNK: {
    foods: [
      { emoji: '🥪', name: 'Smørrebrød', local: 'smørrebrød', fact: 'Pão de centeio com manteiga e coberturas, comido de garfo e faca no almoço.' },
      { emoji: '🟤', name: 'Bolinhas de massa', local: 'æbleskiver', fact: 'Bolinhos redondos feitos numa frigideira com furos, com geleia e açúcar, no Natal.' },
    ],
    folklore: [
      { emoji: '🎅', name: 'Nisse', local: 'nisse', fact: 'O duende de gorro vermelho que mora no sótão e ganha um prato de arroz-doce no Natal.' },
      { emoji: '🛡️', name: 'Holger Danske', local: 'Holger Danske', fact: 'O herói que dorme nos porões do castelo de Kronborg e vai acordar se a Dinamarca estiver em perigo.' },
      { emoji: '🧜‍♀️', name: 'A Pequena Sereia', local: 'Den lille havfrue', fact: 'O conto de Andersen, cuja estátua olha o mar em Copenhague desde 1913.' },
    ],
    dances: [{ emoji: '🎄', name: 'A roda da árvore de Natal', local: 'dans om juletræet', fact: 'Na noite de Natal, a família dá as mãos e dança cantando em volta da árvore acesa.' }],
    plants: [
      { emoji: '🌳', name: 'Faia', local: 'bøg', fact: 'A árvore nacional, das florestas que chegam até a praia.' },
      { emoji: '🌼', name: 'Margarida', local: 'marguerit', fact: 'A flor nacional, que também dá nome à rainha Margarida II, que reinou de 1972 a 2024.' },
    ],
    games: [
      { emoji: '🧱', name: 'LEGO', local: 'LEGO', fact: 'Nasceu em Billund, em 1932; o nome vem de «leg godt», «brinque bem».' },
      { emoji: '🛢️', name: 'Bater no barril', local: 'slå katten af tønden', fact: 'No carnaval (fastelavn), as crianças fantasiadas batem num barril cheio de doces até ele quebrar.' },
    ],
  },
  ISL: {
    foods: [
      { emoji: '🥛', name: 'Skyr', local: 'skyr', fact: 'Parece iogurte, mas é um queijo fresco, feito pelos islandeses desde a época dos vikings.' },
      { emoji: '🦈', name: 'Tubarão fermentado', local: 'hákarl', fact: 'Fica meses enterrado e secando: o cheiro de amônia é lendário.' },
      { emoji: '🌭', name: 'Cachorro-quente', local: 'pylsa', fact: 'Pedido «með öllu» (com tudo): cebola crua e frita, ketchup, mostarda e remoulade.' },
    ],
    folklore: [
      { emoji: '🪨', name: 'O povo oculto', local: 'huldufólk', fact: 'Elfos que moram nas pedras: já houve obra de estrada desviada para não mexer numa pedra de elfos.' },
      { emoji: '🎅', name: 'Os 13 jólasveinar', local: 'jólasveinar', fact: 'Os «rapazes do Natal»: trolls brincalhões, filhos da giganta Grýla, que descem das montanhas um por noite, com o Gato de Natal.' },
    ],
    dances: [{ emoji: '💃', name: 'Vikivaki', local: 'vikivaki', fact: 'Antiga dança de roda com cantos, que a Igreja chegou a proibir.' }],
    plants: [
      { emoji: '🌼', name: 'Dríade', local: 'holtasóley', fact: 'A flor nacional, escolhida por votação em 2004.' },
      { emoji: '💜', name: 'Tremoço-azul', local: 'lúpína', fact: 'Plantado para segurar o solo contra a erosão, hoje cobre encostas inteiras de roxo — e virou praga.' },
    ],
    games: [{ emoji: '🤼', name: 'Glíma', local: 'glíma', fact: 'A luta nacional, praticada desde a época dos vikings, segurando o cinto do adversário.' }],
  },
  FRO: {
    foods: [{ emoji: '🍖', name: 'Carne seca ao vento', local: 'skerpikjøt', fact: 'Carneiro pendurado por meses nos galpões de ripas (hjallur), secando e fermentando no vento do Atlântico.' }],
    folklore: [
      { emoji: '🦭', name: 'A mulher-foca', local: 'Kópakonan', fact: 'Uma foca que tirava a pele e virava mulher; tem estátua na praia de Mikladalur.' },
      { emoji: '🐴', name: 'O nykur', local: 'nykur', fact: 'Um cavalo cinzento dos lagos que carrega quem monta nele para o fundo da água.' },
    ],
    dances: [{ emoji: '🔗', name: 'A dança em corrente', local: 'føroyskur dansur', fact: 'Uma corrente de mãos dadas que dá passos para o lado cantando baladas medievais (kvæði) de dezenas de estrofes.' }],
    plants: [{ emoji: '🌼', name: 'Calta', local: 'sólja', fact: 'A flor nacional, amarela; nas ilhas quase não há árvores, por causa do vento.' }],
    games: [{ emoji: '🚣', name: 'Regata de barcos a remo', local: 'kappróður', fact: 'O esporte nacional, com os barcos de madeira tradicionais na festa de Ólavsøka.' }],
  },
  RUS: {
    foods: [
      { emoji: '🍲', name: 'Borsch', local: 'борщ', fact: 'Sopa vermelha de beterraba, com creme azedo por cima; a Ucrânia a reivindica como sua.' },
      { emoji: '🥟', name: 'Pelmeni', local: 'пельмени', fact: 'Pasteizinhos de carne da Sibéria, que se congelavam lá fora no inverno.' },
      { emoji: '🥞', name: 'Blini', local: 'блины', fact: 'Panquecas finas, redondas como o sol, da festa da Máslenitsa, o fim do inverno.' },
    ],
    folklore: [
      { emoji: '🏚️', name: 'Baba Yaga', local: 'Баба-яга', fact: 'A bruxa que voa num pilão e mora numa casa sobre pés de galinha.' },
      { emoji: '💀', name: 'Koschei, o Imortal', local: 'Кощей Бессмертный', fact: 'Ele escondeu a própria morte numa agulha, dentro de um ovo, dentro de um pato, dentro de uma lebre.' },
      { emoji: '🔥', name: 'O Pássaro de Fogo', local: 'Жар-птица', fact: 'Pássaro de penas brilhantes dos contos, que virou balé de Stravinsky.' },
    ],
    dances: [{ emoji: '🫱', name: 'Khorovod', local: 'хоровод', fact: 'Uma das danças mais antigas: uma roda que canta e gira, nas festas de primavera.' }],
    plants: [
      { emoji: '🌳', name: 'Bétula', local: 'берёза', fact: 'A árvore-símbolo da Rússia, de casca branca, presente em poemas e canções.' },
      { emoji: '🌼', name: 'Camomila', local: 'ромашка', fact: 'A flor do campo que as moças desfolham: «bem-me-quer, mal-me-quer».' },
    ],
    games: [
      { emoji: '🪆', name: 'Matriosca', local: 'матрёшка', fact: 'A boneca que tem outra dentro, e outra, e outra: a primeira foi feita em 1890.' },
      { emoji: '🪵', name: 'Gorodki', local: 'городки', fact: 'Lança-se um bastão para derrubar figuras montadas com pinos de madeira; Lênin e Tolstói jogavam.' },
    ],
  },
  FIN: {
    foods: [
      { emoji: '🥧', name: 'Pastel da Carélia', local: 'karjalanpiirakka', fact: 'Casquinha de centeio recheada de mingau de arroz, com manteiga e ovo por cima.' },
      { emoji: '🍬', name: 'Alcaçuz salgado', local: 'salmiakki', fact: 'Bala preta, salgada e amarga, que os finlandeses adoram e os estrangeiros estranham.' },
    ],
    folklore: [
      { emoji: '🦊', name: 'Os fogos da raposa', local: 'revontulet', fact: 'A aurora boreal: uma raposa corre pela neve e a cauda dela solta faíscas até o céu.' },
      { emoji: '🎶', name: 'Väinämöinen', local: 'Väinämöinen', fact: 'O velho sábio e cantor da Kalevala, que toca o kantele feito do osso de um peixe.' },
    ],
    dances: [{ emoji: '💃', name: 'Tango finlandês', local: 'suomalainen tango', fact: 'A Finlândia adotou o tango em tom menor e melancólico; há um festival de tango em Seinäjoki desde 1985.' }],
    plants: [
      { emoji: '🌳', name: 'Bétula', local: 'koivu', fact: 'A árvore nacional; com os galhos se faz a vihta, o feixe para bater na pele na sauna.' },
      { emoji: '🤍', name: 'Lírio-do-vale', local: 'kielo', fact: 'A flor nacional da Finlândia.' },
    ],
    games: [
      { emoji: '🪵', name: 'Mölkky', local: 'mölkky', fact: 'Lança-se um bastão nos pinos numerados; quem soma exatamente 50 pontos ganha. Foi criado em 1996.' },
      { emoji: '🏃', name: 'Carregar a esposa', local: 'eukonkanto', fact: 'Uma corrida com obstáculos carregando a esposa nas costas; o prêmio é o peso dela em cerveja.' },
    ],
  },
  EST: {
    foods: [
      { emoji: '🍞', name: 'Pão de centeio', local: 'rukkileib', fact: 'Escuro e azedinho, é um símbolo nacional: quem deixa uma fatia cair a beija ao pegá-la.' },
      { emoji: '🥣', name: 'Kama', local: 'kama', fact: 'Farinha de grãos torrados misturada com leite fermentado.' },
    ],
    folklore: [
      { emoji: '🗿', name: 'Kalevipoeg', local: 'Kalevipoeg', fact: 'O gigante herói do épico nacional; as pedras grandes da paisagem seriam as que ele atirou.' },
      { emoji: '🪣', name: 'O kratt', local: 'kratt', fact: 'Uma criatura feita de objetos velhos que ganha vida por um pacto com o diabo e rouba coisas para o dono.' },
    ],
    dances: [{ emoji: '🎤', name: 'Festival de canto e dança', local: 'laulu- ja tantsupidu', fact: 'Dezenas de milhares cantam e dançam juntos em Tallinn; foi assim a «Revolução Cantada» da independência. Patrimônio da UNESCO.' }],
    plants: [
      { emoji: '💙', name: 'Centáurea-azul', local: 'rukkilill', fact: 'A flor nacional, dos campos de centeio.' },
      { emoji: '🌳', name: 'Carvalho', local: 'tamm', fact: 'A árvore nacional; os bosques sagrados (hiis) dos antigos estonianos tinham carvalhos.' },
    ],
    games: [{ emoji: '🔄', name: 'Kiiking', local: 'kiiking', fact: 'Um balanço que dá a volta completa de 360 graus, inventado na Estônia em 1996.' }],
  },
  JPN: {
    foods: [
      { emoji: '🍣', name: 'Sushi', local: '寿司', fact: 'A cozinha tradicional japonesa (washoku) é patrimônio da UNESCO desde 2013.' },
      { emoji: '🍙', name: 'Bolinho de arroz', local: 'おにぎり', fact: 'Onigiri: o lanche de todo dia, embrulhado em alga.' },
      { emoji: '🍡', name: 'Mochi', local: '餅', fact: 'Bolinho de arroz socado, comido no Ano-Novo.' },
    ],
    folklore: [
      { emoji: '🦊', name: 'Kitsune', local: '狐', fact: 'A raposa mágica que ganha caudas com a idade — até nove — e pode virar gente.' },
      { emoji: '🐢', name: 'Kappa', local: '河童', fact: 'Criatura dos rios com uma cavidade de água na cabeça: basta fazer uma reverência que ela retribui e derrama a água.' },
    ],
    dances: [
      { emoji: '🏮', name: 'Bon Odori', local: '盆踊り', fact: 'Danças em roda do festival de verão Obon, para receber os espíritos dos antepassados.' },
      { emoji: '🎭', name: 'Kabuki', local: '歌舞伎', fact: 'Teatro de dança e canto com maquiagem marcante; patrimônio da UNESCO.' },
    ],
    plants: [
      { emoji: '🌸', name: 'Cerejeira', local: '桜', fact: 'Na primavera, famílias fazem piquenique debaixo das flores: é o hanami.' },
      { emoji: '🏵️', name: 'Crisântemo', local: '菊', fact: 'O símbolo da família imperial japonesa.' },
    ],
    games: [
      { emoji: '🪀', name: 'Kendama', local: 'けん玉', fact: 'Uma bola presa por um cordão, para pegar nos copinhos ou espetar na ponta.' },
      { emoji: '✂️', name: 'Pedra, papel e tesoura', local: 'じゃんけん', fact: 'Janken: o jogo veio do Japão e se espalhou pelo mundo no século XX.' },
    ],
  },
  KOR: {
    foods: [
      { emoji: '🥬', name: 'Kimchi', local: '김치', fact: 'O kimjang, quando as famílias fazem kimchi juntas para o inverno, é patrimônio da UNESCO.' },
      { emoji: '🍚', name: 'Bibimbap', local: '비빔밥', fact: 'Arroz com legumes, carne, ovo e pasta de pimenta, misturado na hora de comer.' },
    ],
    folklore: [
      { emoji: '👹', name: 'Dokkaebi', local: '도깨비', fact: 'Goblins brincalhões com uma clava mágica que faz aparecer o que se pede.' },
      { emoji: '🦊', name: 'Gumiho', local: '구미호', fact: 'A raposa de nove caudas que se disfarça de mulher.' },
    ],
    dances: [
      { emoji: '🎭', name: 'Dança das máscaras', local: '탈춤', fact: 'Talchum: teatro dançado com máscaras que zombava dos nobres; patrimônio da UNESCO desde 2022.' },
      { emoji: '🪭', name: 'Dança dos leques', local: '부채춤', fact: 'Buchaechum: dançarinas formam flores e ondas com leques de plumas.' },
    ],
    plants: [{ emoji: '🌺', name: 'Hibisco-da-síria', local: '무궁화', fact: 'Mugunghwa, a flor nacional: o nome quer dizer «flor eterna».' }],
    games: [
      { emoji: '🎲', name: 'Yut nori', local: '윷놀이', fact: 'Jogo de tabuleiro com quatro varetas lançadas como dados, no Ano-Novo lunar.' },
      { emoji: '🧍', name: 'Batatinha frita 1, 2, 3', local: '무궁화 꽃이 피었습니다', fact: 'Na Coreia, quem conta diz «a flor mugunghwa floresceu» — a brincadeira ficou famosa na série Round 6.' },
    ],
  },
  FRA: {
    foods: [
      { emoji: '🥖', name: 'Baguete', local: 'baguette', fact: 'O saber fazer da baguete é patrimônio da UNESCO desde 2022.' },
      { emoji: '🥞', name: 'Crepe', local: 'crêpe', fact: 'Na Chandeleur, em 2 de fevereiro, vira-se o crepe no ar segurando uma moeda na outra mão, para ter sorte.' },
      { emoji: '🧀', name: 'Queijo', local: 'fromage', fact: 'São mais de mil queijos franceses: «como governar um país com tantos queijos?», teria dito De Gaulle.' },
    ],
    folklore: [
      { emoji: '🐉', name: 'A Tarasca', local: 'la Tarasque', fact: 'O monstro de Tarascon, domado por Santa Marta; a cidade ainda desfila com ele em junho.' },
      { emoji: '🐍', name: 'Melusina', local: 'Mélusine', fact: 'Fada que virava meio serpente aos sábados; seria a antepassada de famílias nobres.' },
    ],
    dances: [
      { emoji: '💃', name: 'Can-can', local: 'french cancan', fact: 'Dança de chutes altos dos cabarés de Paris no século XIX, como o Moulin Rouge.' },
      { emoji: '🫱', name: 'Farândola', local: 'farandole', fact: 'Uma fila de mãos dadas que serpenteia pelas ruas da Provença.' },
    ],
    plants: [
      { emoji: '💜', name: 'Lavanda', local: 'lavande', fact: 'Os campos roxos da Provença florescem em julho.' },
      { emoji: '⚜️', name: 'Lírio', local: 'fleur de lys', fact: 'A flor-de-lis estilizada foi o símbolo dos reis da França.' },
    ],
    games: [
      { emoji: '⚪', name: 'Petanca', local: 'pétanque', fact: 'Nasceu em La Ciotat, em 1907, para um jogador que já não conseguia correr: joga-se com os pés juntos.' },
      { emoji: '🧒', name: 'Amarelinha', local: 'marelle', fact: 'Riscada no chão do pátio da escola, do «terra» ao «céu».' },
    ],
  },
  GBR: {
    foods: [
      { emoji: '🐟', name: 'Peixe com fritas', local: 'fish and chips', fact: 'Na Segunda Guerra, estava entre os poucos alimentos que não eram racionados.' },
      { emoji: '🫖', name: 'Chá com scones', local: 'cream tea', fact: 'Na Cornualha, primeiro a geleia e depois o creme; em Devon, o contrário — e a briga é séria.' },
      { emoji: '🍽️', name: 'Haggis', local: 'haggis', fact: 'O prato nacional da Escócia, servido na Noite de Burns com um poema do próprio Robert Burns.' },
    ],
    folklore: [
      { emoji: '⚔️', name: 'Rei Artur', local: 'King Arthur', fact: 'O rei da espada Excalibur e da Távola Redonda; ninguém sabe se existiu.' },
      { emoji: '🦕', name: 'Monstro do Lago Ness', local: 'Nessie', fact: 'A criatura que muita gente jura ter visto num lago da Escócia.' },
      { emoji: '🏹', name: 'Robin Hood', local: 'Robin Hood', fact: 'O arqueiro da floresta de Sherwood, que roubava dos ricos para dar aos pobres.' },
    ],
    dances: [
      { emoji: '🔔', name: 'Morris dance', local: 'Morris dance', fact: 'Dançarinos com sininhos nas pernas, lenços e bastões, na chegada da primavera.' },
      { emoji: '🎻', name: 'Ceilidh', local: 'ceilidh', fact: 'O baile escocês e irlandês, em que todos dançam em grupo seguindo um chamador.' },
    ],
    plants: [
      { emoji: '🌹', name: 'Rosa, cardo, narciso e trevo', local: 'rose, thistle, daffodil, shamrock', fact: 'Cada nação tem sua flor: a rosa da Inglaterra, o cardo da Escócia, o narciso do País de Gales e o trevo da Irlanda do Norte.' },
    ],
    games: [
      { emoji: '🏏', name: 'Críquete', local: 'cricket', fact: 'Nasceu na Inglaterra e uma partida pode durar cinco dias.' },
      { emoji: '🌰', name: 'Conkers', local: 'conkers', fact: 'Castanhas-da-índia amarradas num barbante: cada um tenta quebrar a do outro.' },
    ],
  },
};
