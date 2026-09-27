/**
 * Animais nativos e instrumentos musicais por país (mapa e aba Cultura).
 * `origin: 'criado'` = instrumento criado/desenvolvido ali; 'tradicional' = típico da música local,
 * mesmo que exista em outros lugares. Só fatos bem estabelecidos.
 */
export interface NatureItem {
  emoji: string;
  name: string;
  /** Nome no idioma local (com áudio/IPA quando o país é de um idioma do app) */
  local?: string;
  fact: string;
  origin?: 'criado' | 'tradicional';
}

export interface CountryNature {
  animals: NatureItem[];
  instruments: NatureItem[];
}

export const FAUNA_MUSICA: Record<string, CountryNature> = {
  ROU: {
    animals: [
      { emoji: '🐻', name: 'Urso-pardo', local: 'urs brun', fact: 'Os Cárpatos romenos abrigam a maior população de ursos-pardos da União Europeia.' },
      { emoji: '🦬', name: 'Bisão-europeu', local: 'zimbru', fact: 'Extinto na natureza no século XX, foi reintroduzido nos Cárpatos romenos.' },
      { emoji: '🐐', name: 'Camurça', local: 'capră neagră', fact: 'Vive nos picos mais altos dos Cárpatos, como os Montes Făgăraș e Retezat.' },
      { emoji: '🐺', name: 'Lobo', local: 'lup', fact: 'A Romênia tem uma das maiores populações de lobos da Europa.' },
      { emoji: '🐈', name: 'Lince-euro-asiático', local: 'râs', fact: 'Felino tímido das florestas dos Cárpatos.' },
      { emoji: '🦩', name: 'Pelicano-branco', local: 'pelican', fact: 'O Delta do Danúbio tem a maior colônia de pelicanos-brancos da Europa.' },
    ],
    instruments: [
      { emoji: '🪈', name: 'Flauta de pã', local: 'nai', fact: 'Flauta de canos de tamanhos diferentes, marca registrada da música romena, popularizada no mundo por Gheorghe Zamfir.', origin: 'tradicional' },
      { emoji: '📯', name: 'Trompa dos Cárpatos', local: 'bucium', fact: 'Longa trompa de madeira usada por pastores para se comunicar entre as montanhas.', origin: 'tradicional' },
      { emoji: '🎻', name: 'Violino com corneta', local: 'vioară cu goarnă', fact: 'Violino com uma corneta metálica que amplifica o som, típico da região de Bihor.', origin: 'tradicional' },
      { emoji: '🎼', name: 'Címbalo', local: 'țambal', fact: 'Instrumento de cordas tocado com baquetas, presente nos grupos de lăutari (músicos tradicionais).', origin: 'tradicional' },
      { emoji: '🪕', name: 'Cobza', local: 'cobză', fact: 'Alaúde de braço curto, antigo acompanhante das canções populares.', origin: 'tradicional' },
      { emoji: '🎶', name: 'Fluier', local: 'fluier', fact: 'Flauta de pastor, feita de madeira, que acompanha a doina.', origin: 'tradicional' },
    ],
  },
  MDA: {
    animals: [
      { emoji: '🐂', name: 'Auroque', local: 'bour', fact: 'Boi selvagem extinto no século XVII; sua cabeça é o símbolo do brasão histórico e atual da Moldávia.' },
      { emoji: '🦌', name: 'Veado', local: 'cerb', fact: 'Vive nas florestas dos Codri, o maciço florestal do centro do país.' },
      { emoji: '🐦', name: 'Cegonha-branca', local: 'barză', fact: 'Faz ninho nos postes e telhados das aldeias na primavera.' },
    ],
    instruments: [
      { emoji: '🪈', name: 'Flauta de pã', local: 'nai', fact: 'Tão presente na música moldava quanto na romena.', origin: 'tradicional' },
      { emoji: '🎼', name: 'Címbalo', local: 'țambal', fact: 'Base das orquestras de música popular.', origin: 'tradicional' },
      { emoji: '🎶', name: 'Fluier', local: 'fluier', fact: 'Flauta de pastor usada nas melodias tradicionais.', origin: 'tradicional' },
    ],
  },
  BRA: {
    animals: [
      { emoji: '🐆', name: 'Onça-pintada', fact: 'O maior felino das Américas; vive na Amazônia e no Pantanal.' },
      { emoji: '🦜', name: 'Arara-azul', fact: 'A maior arara do mundo, símbolo do Pantanal.' },
      { emoji: '🐬', name: 'Boto-cor-de-rosa', fact: 'Golfinho de água doce dos rios da Amazônia.' },
    ],
    instruments: [
      { emoji: '🏹', name: 'Berimbau', fact: 'Arco musical de origem africana que virou símbolo da capoeira.', origin: 'tradicional' },
      { emoji: '🎸', name: 'Viola caipira', fact: 'Viola de 10 cordas da música sertaneja de raiz, desenvolvida no Brasil a partir das violas portuguesas.', origin: 'criado' },
      { emoji: '🥁', name: 'Cuíca', fact: 'Tambor de fricção que dá o «ronco» característico do samba.', origin: 'tradicional' },
    ],
  },
  PRT: {
    animals: [
      { emoji: '🐈', name: 'Lince-ibérico', fact: 'Um dos felinos mais ameaçados do mundo, só existe na Península Ibérica.' },
      { emoji: '🐺', name: 'Lobo-ibérico', fact: 'Subespécie de lobo do norte de Portugal e da Espanha.' },
    ],
    instruments: [
      { emoji: '🎸', name: 'Guitarra portuguesa', fact: 'Guitarra de 12 cordas em forma de pera, a alma do fado.', origin: 'criado' },
      { emoji: '🪕', name: 'Cavaquinho', fact: 'Nasceu no norte de Portugal e viajou para o Brasil e Cabo Verde; o ukulele havaiano descende de um primo madeirense dele, o machete.', origin: 'criado' },
    ],
  },
  ESP: {
    animals: [
      { emoji: '🐈', name: 'Lince-ibérico', local: 'lince ibérico', fact: 'Felino exclusivo da Península Ibérica, salvo da extinção por programas de conservação.' },
      { emoji: '🦅', name: 'Águia-imperial-ibérica', local: 'águila imperial ibérica', fact: 'Ave de rapina que só existe na Península Ibérica.' },
    ],
    instruments: [
      { emoji: '🎸', name: 'Violão flamenco', local: 'guitarra flamenca', fact: 'O violão moderno ganhou sua forma na Espanha do século XIX.', origin: 'criado' },
      { emoji: '🥢', name: 'Castanholas', local: 'castañuelas', fact: 'Pequenas peças de madeira que marcam o ritmo das danças espanholas.', origin: 'tradicional' },
    ],
  },
  MEX: {
    animals: [
      { emoji: '🦎', name: 'Axolote', local: 'ajolote', fact: 'Anfíbio que regenera patas e até partes do coração. Em estado selvagem, só vive nos canais de Xochimilco, na Cidade do México.' },
      { emoji: '🐬', name: 'Vaquita', local: 'vaquita marina', fact: 'Um dos menores cetáceos do mundo, parente dos golfinhos. Só existe no norte do Golfo da Califórnia e está criticamente ameaçada.' },
    ],
    instruments: [
      { emoji: '🎸', name: 'Guitarrón', local: 'guitarrón mexicano', fact: 'Violão enorme, de fundo abaulado, que faz o baixo dos grupos de mariachi.', origin: 'criado' },
      { emoji: '🪕', name: 'Jarana jarocha', local: 'jarana jarocha', fact: 'Violinha que faz o ritmo do son jarocho, a música tradicional de Veracruz.', origin: 'criado' },
    ],
  },
  COL: {
    animals: [
      { emoji: '🐸', name: 'Rã-dourada', local: 'rana dorada', fact: 'Uma das rãs mais venenosas do mundo; só vive nas florestas da costa do Pacífico colombiano.' },
      { emoji: '🐦', name: 'Beija-flor', local: 'colibrí', fact: 'A Colômbia é o país com mais espécies de aves do mundo, entre elas dezenas de beija-flores.' },
    ],
    instruments: [
      { emoji: '🎸', name: 'Tiple', local: 'tiple', fact: 'Violão pequeno de 12 cordas, em quatro grupos de três: é o instrumento nacional da Colômbia.', origin: 'criado' },
      { emoji: '🪈', name: 'Gaita colombiana', local: 'gaita', fact: 'Flauta longa de origem indígena, da costa do Caribe, que puxa a melodia da cumbia.', origin: 'tradicional' },
    ],
  },
  ARG: {
    animals: [
      { emoji: '🐧', name: 'Pinguim-de-magalhães', local: 'pingüino de Magallanes', fact: 'Primo do Linu! Forma grandes colônias na costa da Patagônia argentina entre a primavera e o verão.' },
      { emoji: '🦙', name: 'Guanaco', local: 'guanaco', fact: 'Parente selvagem da lhama, vive nas estepes da Patagônia e nos Andes.' },
    ],
    instruments: [
      { emoji: '🪗', name: 'Bandoneón', local: 'bandoneón', fact: 'Inventado na Alemanha no século XIX, virou a alma do tango de Buenos Aires.', origin: 'tradicional' },
      { emoji: '🥁', name: 'Bombo legüero', local: 'bombo legüero', fact: 'Tambor grave de madeira e couro da música folclórica do norte argentino.', origin: 'tradicional' },
    ],
  },
  PER: {
    animals: [
      { emoji: '🦙', name: 'Vicunha', local: 'vicuña', fact: 'Parente selvagem da lhama, de lã finíssima; aparece no brasão do Peru.' },
      { emoji: '🐧', name: 'Pinguim-de-humboldt', local: 'pingüino de Humboldt', fact: 'Outro primo do Linu: vive na costa fria do Peru e do Chile, banhada pela corrente de Humboldt.' },
    ],
    instruments: [
      { emoji: '📦', name: 'Cajón peruano', local: 'cajón', fact: 'Caixa de madeira em que o músico senta e toca com as mãos. Nasceu na música afro-peruana.', origin: 'criado' },
      { emoji: '🪕', name: 'Charango', local: 'charango', fact: 'Violinha de dez cordas dos Andes, também típica da Bolívia.', origin: 'tradicional' },
    ],
  },
  CHL: {
    animals: [
      { emoji: '🦌', name: 'Huemul', local: 'huemul', fact: 'Cervo dos Andes do sul, ameaçado de extinção; aparece no brasão do Chile ao lado do condor.' },
      { emoji: '🦅', name: 'Condor-dos-andes', local: 'cóndor andino', fact: 'Uma das maiores aves voadoras do mundo, com asas de até 3 metros de ponta a ponta.' },
    ],
    instruments: [
      { emoji: '🎸', name: 'Guitarrón chileno', local: 'guitarrón chileno', fact: 'Violão de 25 cordas do canto a lo poeta, a poesia cantada do campo chileno.', origin: 'criado' },
      { emoji: '🎺', name: 'Trutruca', local: 'trutruca', fact: 'Trompa longa, feita de colihue (um bambu), do povo mapuche.', origin: 'tradicional' },
    ],
  },
  CUB: {
    animals: [
      { emoji: '🐦', name: 'Colibri-abelha', local: 'zunzuncito', fact: 'A menor ave do mundo, com cerca de 5 centímetros; só existe em Cuba.' },
      { emoji: '🐊', name: 'Crocodilo-cubano', local: 'cocodrilo cubano', fact: 'Crocodilo que só existe em Cuba, hoje restrito a poucos pântanos, como o de Zapata.' },
    ],
    instruments: [
      { emoji: '🥁', name: 'Bongô', local: 'bongó', fact: 'Par de tambores pequenos presos um ao outro, nascido no leste de Cuba, no son cubano.', origin: 'criado' },
      { emoji: '🎸', name: 'Tres cubano', local: 'tres', fact: 'Violão de três pares de cordas que faz os solos do son.', origin: 'criado' },
    ],
  },
  RUS: {
    animals: [
      { emoji: '🐅', name: 'Tigre-siberiano', local: 'амурский тигр', fact: 'O maior felino do mundo vive no extremo leste da Rússia.' },
      { emoji: '🐻', name: 'Urso-pardo', local: 'бурый медведь', fact: 'Símbolo popular da Rússia; vive em grande parte do país.' },
    ],
    instruments: [
      { emoji: '🪕', name: 'Balalaica', local: 'балалайка', fact: 'Instrumento de três cordas com caixa triangular, símbolo da música russa.', origin: 'criado' },
      { emoji: '🪗', name: 'Bayan', local: 'баян', fact: 'Acordeão cromático de botões desenvolvido na Rússia.', origin: 'criado' },
    ],
  },
  FIN: {
    animals: [
      { emoji: '🦭', name: 'Foca-anelada-de-saimaa', local: 'saimaannorppa', fact: 'Uma das focas mais raras do mundo: vive só no lago Saimaa, em água doce.' },
      { emoji: '🦌', name: 'Rena', local: 'poro', fact: 'Criada pelos sámi e por outros povos da Lapônia.' },
    ],
    instruments: [
      { emoji: '🎼', name: 'Kantele', local: 'kantele', fact: 'Cítara de cordas dedilhadas, instrumento nacional da Finlândia, presente no épico Kalevala.', origin: 'tradicional' },
    ],
  },
  EST: {
    animals: [
      { emoji: '🐈', name: 'Lince', local: 'ilves', fact: 'As florestas estonianas têm uma população estável de linces.' },
      { emoji: '🫎', name: 'Alce', local: 'põder', fact: 'Comum nas florestas e pântanos do país.' },
    ],
    instruments: [
      { emoji: '🎼', name: 'Kannel', local: 'kannel', fact: 'Cítara tradicional estoniana, parente do kantele finlandês.', origin: 'tradicional' },
      { emoji: '🎶', name: 'Gaita de foles estoniana', local: 'torupill', fact: 'Instrumento tradicional das festas de aldeia.', origin: 'tradicional' },
    ],
  },
  JPN: {
    animals: [
      { emoji: '🐒', name: 'Macaco-japonês', local: 'ニホンザル', fact: 'Famoso por se banhar em fontes termais no inverno.' },
      { emoji: '🕊️', name: 'Grou-japonês', local: 'タンチョウ', fact: 'Símbolo de longa vida e sorte no Japão.' },
    ],
    instruments: [
      { emoji: '🎼', name: 'Koto', local: '箏', fact: 'Cítara longa de 13 cordas, instrumento nacional do Japão.', origin: 'tradicional' },
      { emoji: '🪕', name: 'Shamisen', local: '三味線', fact: 'Alaúde de três cordas tocado com uma palheta grande.', origin: 'tradicional' },
      { emoji: '🥁', name: 'Taiko', local: '太鼓', fact: 'Grandes tambores japoneses, tocados em grupo.', origin: 'tradicional' },
    ],
  },
  KOR: {
    animals: [{ emoji: '🐅', name: 'Tigre', local: '호랑이', fact: 'Animal símbolo da Coreia, presente em lendas e na arte popular.' }],
    instruments: [
      { emoji: '🎼', name: 'Gayageum', local: '가야금', fact: 'Cítara coreana de 12 cordas.', origin: 'criado' },
      { emoji: '🥁', name: 'Janggu', local: '장구', fact: 'Tambor em forma de ampulheta da música tradicional.', origin: 'tradicional' },
    ],
  },
  GBR: {
    animals: [
      { emoji: '🐿️', name: 'Esquilo-vermelho', fact: 'Nativo das Ilhas Britânicas, hoje raro fora da Escócia.' },
      { emoji: '🦡', name: 'Texugo', fact: 'Mamífero noturno muito ligado ao campo britânico.' },
    ],
    instruments: [{ emoji: '🎶', name: 'Gaita de foles escocesa', fact: 'Great Highland bagpipe, som marcante da Escócia.', origin: 'tradicional' }],
  },
};

/** Países «de origem» de cada idioma do app (seção Bichos e sons da aba Cultura). */
export const HOMELANDS: Record<string, string[]> = { ro: ['ROU', 'MDA'], ru: ['RUS'], es: ['ESP', 'MEX', 'COL', 'ARG', 'PER', 'CHL', 'CUB'], pt: ['BRA', 'PRT'], fi: ['FIN'], et: ['EST'], ja: ['JPN'], ko: ['KOR'], en: ['GBR'] };
