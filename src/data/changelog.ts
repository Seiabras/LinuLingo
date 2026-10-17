// Mapa de atualizações do LinuLingo (Perfil → 🗓️ Atualizações).
// Regra: mudança grande sobe a versão (1.1 → 2.0 → 3.0…); ajuste pequeno dentro do mesmo marco
// acrescenta um dígito (1.1 → 1.11 → 1.111…). Ao terminar uma entrega, adicione uma entrada no
// TOPO de RELEASES — é lista curada à mão (como o changelog do NeuroSim), não gerada do git log.
// O histórico anterior a isto tem mais de 400 commits; as versões abaixo cobrem os marcos reais
// que valem a pena contar, não cada commit — datas e fatos conferidos contra `git log`/README.md/
// PENDENTES.md. `scripts/gerar-changelog.mjs` continua útil como apoio (lista os commits de um
// período, pra lembrar o que entrou), mas não escreve mais este arquivo sozinho.

export interface ChangelogRelease {
  v: string;
  /** 'AAAA-MM-DD HH:MM', horário de São Paulo. */
  date: string;
  title: string;
  items: string[];
}

export const RELEASES: ChangelogRelease[] = [
  {
    v: '26.12',
    date: '2026-10-17 15:08',
    title: 'Zoom nos mapas das áreas',
    items: [
      'Os mapas da Música, da Psicologia, do Lazer, dos biomas (do mundo e do Brasil) e das línguas inventadas agora aproximam como o mapa dos Idiomas: pinça e arrasto no celular, roda do mouse no computador e os botões +, − e “mapa inteiro”.',
    ],
  },
  {
    v: '26.11',
    date: '2026-10-17 15:04',
    title: 'Curso de teclado e kalimbas de 7 a 21 lâminas',
    items: [
      'O **Curso de teclado** agora é como os outros cursos de instrumento: os números dos dedos e o mapa das teclas, cinco dedos em cinco notas (com o número do dedo de cada tecla), a escala e as duas músicas, com o microfone ouvindo você tocar.',
      'No **Curso de kalimba**, escolha o tamanho da sua: 7, 8, 10, 17 ou 21 lâminas. A de 21 vai do fá3 ao mi6, com o fá3 no meio, e as músicas mudam de tom para caber em cada uma.',
    ],
  },
  {
    v: '26.10',
    date: '2026-10-17 15:00',
    title: 'Criar: salvar e enviar a sua música',
    items: [
      'Na **Música → Criar**, dê um nome à música e salve em **Minhas músicas**, para abrir de novo depois. **Enviar o link** manda a música para alguém abrir no LinuLingo, pronta para tocar e mudar; **Enviar o áudio** gera um arquivo .wav que toca em qualquer celular.',
      'Mais opções: a escala (maior, menor ou pentatônica), o som (piano ou flauta), 16 ou 32 tempos, os exemplos “Brilha, brilha, estrelinha” e “Ode à Alegria” para começar, e o botão **Surpresa**, que inventa uma melodia.',
    ],
  },
  {
    v: '26.9',
    date: '2026-10-17 14:50',
    title: 'Oito cursos de instrumento novos',
    items: [
      'Na **Música → Trilha**, oito cursos novos, no molde do de clarinete: **violão**, **viola caipira** (cebolão em mi ou em ré), **viola de arco**, **cavaquinho e banjo de samba**, **violoncelo**, **baixolão**, **kalimba** e **sanfona (acordeão)**.',
      'Cada um tem a lição de conhecer o instrumento (as partes, a afinação e de onde veio, com as fontes), as primeiras notas, a escala maior e duas músicas inteiras, “Brilha, brilha, estrelinha” e a “Ode à Alegria”, no tom que cabe nas primeiras casas. O braço, a kalimba ou o teclado mostram onde tocar, a partitura vem na clave de cada instrumento (sol, sol com 8, dó ou fá), e o microfone confere.',
    ],
  },
  {
    v: '26.8',
    date: '2026-10-17 14:25',
    title: 'Movimento: seguir o aparelho, sempre animar ou reduzir',
    items: [
      'No **Perfil → Acessibilidade → Movimento**, o antigo “Reduzir movimento” virou três escolhas: **Seguir o aparelho** (o padrão), **Sempre animar** e **Reduzir**. Em computadores com o “reduzir movimento” do sistema ligado, o Linu, os amigos e as peças dos jogos ficavam parados; agora dá para animar mesmo assim.',
      'Nos jogos, **Animações** começa seguindo o aparelho. Se você mexer nela, vale a sua escolha. Só o “Reduzir” do Perfil continua deixando as peças paradas em todos os jogos.',
    ],
  },
  {
    v: '26.7',
    date: '2026-10-17 13:56',
    title: 'Som das respostas',
    items: [
      'Os exercícios agora tocam um som quando você acerta e outro quando erra. No **Perfil**, em “Som das respostas”, dá para escolher entre suave, sino, xilofone, moeda e fliperama, ajustar o volume ou deixar sem som. Tocar num estilo já mostra como ele soa.',
      'Jogos: no reversi, os botões de variante não se confundem mais (a variante “Clássica” e a de hoje dividiam o mesmo nome por dentro).',
    ],
  },
  {
    v: '26.6',
    date: '2026-10-17 13:55',
    title: 'Um passeio guiado para cada área, e o sistema do clarinete',
    items: [
      'Na primeira vez que você entra no **Lazer**, na **Música**, na **Biologia** ou na **Psicologia**, o Linu mostra o passeio da área, aba por aba. Dá para rever pelo **Perfil › Ajuda › Rever o passeio**.',
      'O curso de clarinete agora diz qual **sistema de chaves** ele ensina: o **Boehm (francês)**, o mais usado no mundo. O **Öhler (alemão)**, usado sobretudo na Alemanha e na Áustria, aparece como “em preparação”.',
    ],
  },
  {
    v: '26.5',
    date: '2026-10-17 12:26',
    title: 'Karitiana completo',
    items: [
      'O karitiana, língua tupi de Rondônia, chegou ao fim do nível dele (A2): 115 palavras, pessoa, modo e tempo no verbo, o “sim” do modo assertivo, os verbos de postura, “quando, antes, depois”, duas lições novas no A1.1 e 4 histórias, uma delas “Quem come quem?”, com o léxico ilustrado “Gopi Yjxa”, feito com a escola da aldeia Kyõwã.',
      'As frases vêm da gramática de Luciana Storto (1999) e de estudos abertos da USP. Na aba Gramática, **Estudar pelas fontes** traz 14 fontes e 4 jeitos de ensinar a língua.',
    ],
  },
  {
    v: '26.4',
    date: '2026-10-17 11:52',
    title: 'Kaingang completo, agora até o B1',
    items: [
      'O kaingang chegou ao fim do nível novo dele (B1): 230 palavras, 15 tópicos de gramática (juntar frases, contar uma história, orações relativas sem “que”, quando/se/para/porque, causativo e passiva, reflexivo e recíproco), 8 unidades e 8 histórias.',
      'Três histórias novas são narrativas reais de falantes de Apucaraninha (o campeonato de sábado, a casa da irmã, a manhã de ir à UEL); a quarta junta falas do livro “Vãnh kãmĩ grugru”. No A1, quase todas as frases montadas viraram frases reais, e os números agora vêm depois do nome, como no kaingang.',
    ],
  },
  {
    v: '26.3',
    date: '2026-10-17 11:34',
    title: 'Sete amigos novos nas áreas, e o Lazer separado por tipo de jogo',
    items: [
      '**Sete amigos novos do Linu**, escondidos nas outras áreas: o Bento (pinguim-de-barbicha) na Biologia › Biomas, a Cristal (peixe-gelo, de sangue quase transparente) no Laboratório, a Maestra (orca) na Música › Ouvido, o Tenor (lobo-marinho-antártico) na Música › Tocar, a Nevinha (pomba-antártica) no Lab da Psicologia, o Blefe (skua-polar-do-sul) no Lazer › Cartas e o Saltinho (pinguim-saltador-da-rocha) no Lazer › Esportes. As dicas de onde achar cada um estão no Perfil.',
      'No **Lazer**, a barra de baixo voltou a separar os jogos como antes: **Tabuleiro**, **Cartas**, **Azar**, **Brincar**, **Esportes**, **Games** e **Perfil**. O **mapa** dos jogos abre pelo botão **Mapa**, no topo, e o RPG (ainda em breve) fica no Tabuleiro.',
      'No mapa de cada área, a lista de países virou uma **faixa que rola para o lado**, com os países de mais itens primeiro: ocupa uma linha só.',
      'O Perfil ganhou mais quatro áreas, ainda “em breve”: **Física**, **Matemática**, **Química** (em que toda teoria vai vir com a prática) e **Arte**.',
    ],
  },
  {
    v: '26.2',
    date: '2026-10-17 11:32',
    title: 'Baniwa até o A2, e o teto dele sobe para B1',
    items: [
      'O baniwa ganhou o A2: 84 palavras, verbos com quem faz a ação, futuro e passado remoto, demonstrativos de quatro distâncias, duas lições novas no A1.1 e 4 histórias. As frases vêm do dicionário e da gramática de Henri Ramirez (2001).',
      'Consertos no A1: “obrigado” agora é “Mátsia pidzeekátaka núlhiu!” (antes o curso usava “Keepe!”, que quer dizer “gordo”), o bom-dia é “Heekúapi whaa!”, e “meu pai”, “minha mãe” e os outros parentes seguem as formas do dicionário. O curso pode ir até o B1, que chega nas próximas atualizações.',
    ],
  },
  {
    v: '26.1',
    date: '2026-10-17 11:03',
    title: 'Kaingang até o A2, e o teto dele sobe para B1',
    items: [
      'O kaingang ganhou o A2: 148 palavras, perguntas e respostas (com o “não” gentil e o rude), pronomes, ordens e proibições, negação e tempo, duas lições novas no A1.1 e 4 histórias, no falar do Paraná (Apucaraninha). O curso agora cumprimenta com “Ã mỹ há?”.',
      'Consertos no A1: os números seguem a cartilha de Inhacorá (tũ, régre, tẽgtũ…) e frases sem fonte foram trocadas por falas reais. Com o dicionário de Wiesemann, as descrições abertas e o material escolar bilíngue, o curso pode ir até o B1, que chega nas próximas atualizações.',
    ],
  },
  {
    v: '26.0',
    date: '2026-10-17 11:02',
    title: 'Lazer vira um app próprio, e a flora de cada bioma',
    items: [
      'O **Lazer** saiu de dentro dos Idiomas e virou uma área própria, como a Música, a Biologia e a Psicologia. No **Perfil › 🎲 Lazer › Entrar no Lazer** (ou logo na abertura), o app troca as abas: **Tabuleiro**, **Cartas**, **Mais jogos** (azar, brincadeiras, esportes, videogames e RPG), **Mapa** e **Perfil**. A aba Jogos da Cultura saiu, e o passeio dos Idiomas não passa mais pelos jogos.',
      'No **Lazer › Mapa**, o mapa-múndi mostra de onde vem cada jogo: o tabuleiro, as cartas, a roleta, a esgrima e os videogames.',
      'O mapa de cada área mostra só o que é dela: os jogos no Lazer, os instrumentos e as pessoas na Música, as pessoas na Psicologia, os biomas na Biologia.',
      'Na **Biologia › Biomas**, cada bioma, do mundo e do Brasil, mostra agora também as **plantas** dele, ao lado dos bichos: castanheira e vitória-régia na Amazônia, pequizeiro e buriti no Cerrado, mandacaru e umbuzeiro na Caatinga, pau-brasil e araucária na Mata Atlântica, butiá no Pampa, carandá no Pantanal, baobá na savana, saguaro no deserto e mais. Cada uma com a fonte.',
    ],
  },
  {
    v: '25.4',
    date: '2026-10-17 10:50',
    title: 'Guarani kaiowá completo, agora até o B1',
    items: [
      'O guarani kaiowá chegou ao fim do nível novo dele (B1): 194 palavras, 15 tópicos de gramática (orações ligadas, relativas, causativo, reflexivo e recíproco, “dizem” e “parece”, fala citada), 8 unidades e 8 histórias: um ano na roça, a armadilha dos antigos, o vovô que sara, o sol e a lua.',
      'As histórias juntam frases do dicionário de Eliane Barros, porque não há texto corrido em kaiowá com licença livre; cada história avisa que a ordem é do curso.',
    ],
  },
  {
    v: '25.3',
    date: '2026-10-17 10:40',
    title: 'Escolha a área logo na abertura, e o mapa-múndi em cada área',
    items: [
      'Na primeira abertura, o Linu agora pergunta **o que você quer aprender**: **Idiomas**, **Música**, **Biologia** ou **Psicologia**. Quem escolhe Música (ou outra área) já entra no app dela, sem passar pelos idiomas. Dá para trocar depois, no Perfil.',
      'O **mapa-múndi** em cada área: em **Idiomas**, as línguas (no Mapa); em **Biologia**, os biomas; em **Música › Mundo › Mapa**, os instrumentos de cada país, com foto, e as pessoas da música; em **Psicologia › Pessoas › No mapa**, onde trabalhou cada pessoa; em **Lazer › Jogos de tabuleiro › Agrupar por: No mapa**, de onde vem cada jogo.',
    ],
  },
  {
    v: '25.2',
    date: '2026-10-17 10:26',
    title: 'Música: o curso de clarinete, em Si♭, Dó, Lá ou Mi♭',
    items: [
      'Em **Música › Trilha › Cursos de instrumento**, o **Curso de clarinete**: você escolhe o seu clarinete (em **Si♭**, **Dó**, **Lá** ou **Mi♭**, a requinta), e o app mostra a nota escrita na partitura, o **dedilhado desenhado** e a nota que o seu clarinete realmente faz.',
      'Pelo microfone, o app ouve o seu clarinete, converte o som na nota escrita (no Si♭, o sol escrito soa fá) e avança quando você acerta. As lições vão do sol solto às notas da mão esquerda e da mão direita, e às primeiras músicas: “Brilha, brilha, estrelinha” e “Ode à Alegria”.',
    ],
  },
  {
    v: '25.1',
    date: '2026-10-17 10:25',
    title: 'Kamaiurá completo',
    items: [
      'O kamaiurá, língua tupi-guarani do Alto Xingu, chegou ao fim do nível dele (A2): 117 palavras, parentes com dono, negação, ordens e pedidos, lugares e “quando”, e 4 histórias, numa casa de família e numa pescaria na lagoa. As frases vêm da gramática de Lucy Seki (2000).',
      'Na aba Gramática, **Estudar pelas fontes** traz 12 fontes e 5 jeitos de ensinar a língua, entre eles as escolas kamaiurá descritas pelo professor Aisanain Páltu Kamaiwrá.',
    ],
  },
  {
    v: '25.0',
    date: '2026-10-17 10:17',
    title: 'Música: a terceira área com app próprio, com microfone',
    items: [
      'No **Perfil › 🎵 Música**, o botão **Entrar na Música** troca o app inteiro: **Trilha**, **Tocar**, **Ouvido**, **Criar**, **Afinador**, **Mundo** e **Perfil**.',
      '**Trilha**: a teoria com a **partitura desde o começo**, e cada exemplo toca. As unidades **As notas** (de onde vem o dó-ré-mi, o nome das notas em inglês e em alemão, o lá de 440 Hz) e **A pauta** (as cinco linhas, a clave de sol, o dó central). E o primeiro curso de instrumento, o **Curso de teclado**; violão, flauta doce, canto, bateria e cavaquinho vêm depois.',
      '**Tocar**: um teclado na tela com a pauta em cima. Toque livre ou **siga a música** (“Brilha, brilha, estrelinha”, “Ode à Alegria”, “Parabéns pra você”, todas de domínio público), na tela ou **no seu instrumento de verdade, com o microfone ouvindo**.',
      '**Ouvido**: qual nota é mais aguda, acorde maior ou menor, que nota é essa e **cante a nota** (o microfone confere).',
      '**Criar**: uma grade para montar melodias e batidas, que aparece também na pauta. **Afinador** pelo microfone e **metrônomo** com compasso e tempo forte.',
      '**Mundo**: os instrumentos por família, com o som e o nome no idioma que você estuda; pessoas (Chiquinha Gonzaga, Pixinguinha, Villa-Lobos, Tom Jobim, Beethoven); profissões; e o mito do “efeito Mozart”.',
      'No celular, o microfone da Música precisa da versão de desenvolvimento do app (não funciona no Expo Go); no navegador, já funciona.',
      'O Perfil ganhou mais cinco áreas, ainda “em breve”: Computação e IA, Arquitetura e Design, Ciências Sociais, Filosofia e Astronomia.',
    ],
  },
  {
    v: '24.1',
    date: '2026-10-17 10:15',
    title: 'Guarani kaiowá até o A2, e o teto dele sobe para B1',
    items: [
      'O guarani kaiowá ganhou o A2: 114 palavras, os prefixos do verbo, quem é o dono (gwóga, a casa do próprio sujeito, × hóga, a de outra pessoa), negação, perguntas, duas lições novas no A1.1 e 4 histórias, em Panambizinho e a caminho de Tanambi. As frases vêm do dicionário de Eliane Barros (UFMS, 2014).',
      'O A1 inteiro foi revisto: a grafia agora é uma só (a do dicionário), “Óga porã” é “casa bonita” e os demonstrativos foram consertados. O curso pode ir até o B1, que chega nas próximas atualizações.',
    ],
  },
  {
    v: '24.0',
    date: '2026-10-17 09:02',
    title: 'Psicologia: a segunda área com app próprio',
    items: [
      'No **Perfil › 🧠 Psicologia**, o botão **Entrar na Psicologia** troca o app inteiro: **Trilha**, **Lab**, **Escolas**, **Pessoas**, **Brasil** e **Perfil**. É psicologia como ciência, com o bem-estar junto, e um aviso fixo: o app ensina, não faz terapia nem diagnóstico, e o CVV atende pelo 188.',
      '**Trilha**: seis unidades — o que é psicologia, a memória (Ebbinghaus e o “sete, mais ou menos dois”), percepção e atenção (as setas de Müller-Lyer e o efeito Stroop), a gente e os outros (as linhas de Asch), **Ciência ou não?** e **Bem-estar com ciência**.',
      '**Lab**: quatro experimentos clássicos para fazer em você mesmo — o Stroop (também com as cores no idioma que você estuda), as setas que enganam, quantos números você guarda e o tempo de reação.',
      '**Escolas**: psicanálise, behaviorismo, Gestalt, humanismo e TCC lado a lado, com a mesma situação vista por cada lente; **Psicanálise e ciência** (por que ela está num limbo e se dá para ser psicanalista sem ser psicólogo); e **Pseudociências**, com os sinais de alerta e casos reais, cada um com fonte.',
      '**Pessoas**: quem criou as ideias, no mundo e no Brasil (Helena Antipoff, Nise da Silveira, Virgínia Bicudo, Carolina Bori, Neusa Santos Souza). **Brasil**: a história da psicologia aqui, ano a ano, e onde pedir ajuda.',
      'As pseudociências chegaram também à **Biologia** (na Trilha: o design inteligente e o lysenkoísmo) e aos **Idiomas** (em Gramática › Estudar pelas fontes: aprender dormindo, as “palavras para neve” e “a língua decide o que você pensa”).',
    ],
  },
  {
    v: '23.2',
    date: '2026-10-17 08:29',
    title: 'Biomas: os bichos de cada bioma e os 6 biomas do Brasil',
    items: [
      'Cada bioma agora mostra **os bichos que vivem nele**, não mais os bichos dos países: a onça e o boto na floresta tropical, o lobo-guará e o tamanduá na savana, a vicunha e o condor nas montanhas, o feneco e o dromedário no deserto, o guará e o caranguejo-uçá no manguezal. Cada um com o nome científico e um fato com fonte.',
      'Na **Trilha**, cada unidade abre com uma **tirinha** de três quadrinhos com o Linu e os amigos dele.',
      'Em **Biomas › O Brasil**, o mapa oficial do IBGE com os **6 biomas** (Amazônia, Cerrado, Mata Atlântica, Caatinga, Pampa e Pantanal): toque num deles para ver o que ele é, quanto do Brasil ele ocupa e os bichos que vivem nele. As 45 ecorregiões continuam lá, no botão “Ver as ecorregiões”.',
    ],
  },
  {
    v: '23.1',
    date: '2026-10-17 08:03',
    title: 'Biologia: laboratório, árvore da vida, linha do tempo e o Brasil',
    items: [
      '**Laboratório** com cinco experimentos: **Descubra o bicho** (perguntas de sim ou não, como uma chave de identificação), **Monte uma célula** (a animal e a vegetal, para explorar e depois achar cada parte), **As ervilhas de Mendel** (cruze as plantas e compare com os números que Mendel contou em 1866) e **As mariposas da cidade** (seja o passarinho e veja a seleção natural mudar a cor das mariposas).',
      '**Seres vivos**: a **lista da vida** (marque os bichos que você já viu ao vivo e ganhe insígnias) e a **árvore da vida** dos amigos do Linu: toque em dois bichos para ver o parente comum mais próximo.',
      '**Trilha**: a **linha do tempo da vida**, da Terra recém-nascida ao Homo sapiens, em anos ou num dia de 24 horas.',
      '**Biomas**: o mapa do **Brasil** com as suas 45 ecorregiões, e a palavra de cada bioma (floresta, deserto…) no idioma que você estuda.',
    ],
  },
  {
    v: '23.0',
    date: '2026-10-17 07:45',
    title: 'Biologia: a primeira área com app próprio',
    items: [
      'No **Perfil › 🧬 Biologia**, o botão **Entrar na Biologia** troca o app inteiro: as abas viram **Trilha**, **Seres vivos**, **Biomas**, **Laboratório** e **Perfil**. O botão “← Idiomas”, no topo de cada aba, volta para os idiomas.',
      '**Trilha**: duas unidades, **Os bichos do frio** (os amigos do Linu, com o nome científico e a classe) e **O nome científico** (Lineu, o grego dos pinguins e o latim da jubarte). Cada bicho mostra a palavra no idioma que você estuda, com áudio.',
      '**Seres vivos**: o catálogo dos amigos do Linu por classe e os bichos de cada país do álbum, com foto e o nome na língua do país, começando pelos países do idioma estudado.',
      '**Biomas**: o mapa-múndi pintado com os 14 biomas da Terra (Ecoregions 2017, CC BY 4.0). Tocar num bioma mostra o que ele é, ecorregiões de exemplo (o Cerrado, o Pantanal, a Caatinga…), os países onde ele aparece e bichos desses países.',
      '**Laboratório**: o primeiro experimento, **Classifique os seres vivos** (ave, mamífero ou crustáceo?), vale XP. Os próximos estão listados.',
    ],
  },
  {
    v: '22.129',
    date: '2026-10-17 06:08',
    title: 'Quéchua de Áncash completo, agora até o B1',
    items: [
      'O quéchua de Áncash chegou ao fim do nível novo dele (B1): 187 palavras, 15 tópicos de gramática (orações subordinadas e relativas, condicional, “ter que”, a fala dos contos e as partículas que dizem de onde vem a informação), 8 unidades e 8 histórias.',
      'As histórias novas juntam pedaços de contos citados na gramática de Gary Parker (a moça e o puma, o menino mentiroso, a bruxa e o condor); a ordem é do curso, e cada história avisa isso.',
    ],
  },
  {
    v: '22.128',
    date: '2026-10-17 05:29',
    title: 'Quéchua de Áncash até o A2, e o teto dele sobe para B1',
    items: [
      'O quéchua de Áncash ganhou o A2: 108 palavras, presente, passado e “estar fazendo”, os casos, futuro e ordens, posse, duas lições novas no A1.1 e 4 histórias. As frases vêm da gramática de Gary Parker (1976), e o curso mostra onde Áncash difere do quéchua do sul (kima × kimsa, -chaw × -pi).',
      'Com a gramática completa de Parker, os dicionários e os contos em quéchua de Áncash, o curso pode ir até o B1, que chega nas próximas atualizações.',
    ],
  },
  {
    v: '22.127',
    date: '2026-10-17 05:27',
    title: 'Hopi completo, agora até o B1',
    items: [
      'O hopi chegou ao fim do nível novo dele (B1): 198 palavras, 16 tópicos de gramática (compostos, orações relativas, voz passiva, conectivos, “dizem”, orações ligadas, condicional, perguntas encaixadas), 8 unidades e 8 histórias, com diálogos e leituras de Milo Kalectaca, entre elas o coiote e os passarinhos.',
      'O curso lembra que, pela tradição hopi, os contos do coiote se contam nas noites de inverno, e continua sem nada cerimonial.',
    ],
  },
  {
    v: '22.126',
    date: '2026-10-17 04:54',
    title: 'Campo Minado nos videogames',
    items: [
      'Em **Lazer › Videogames**, o **Campo Minado**, com três níveis, bandeira (segurando a casa, com o botão direito ou pelo botão “Pondo bandeiras”), relógio e o melhor tempo de cada nível guardado. A primeira casa nunca tem mina. A ficha conta como ele nasceu no OS/2, foi para o Windows em 1990 e por que os matemáticos se interessam por ele.',
    ],
  },
  {
    v: '22.125',
    date: '2026-10-17 04:21',
    title: 'Cartas: cartomagia, cardistry, baralhos e tarô',
    items: [
      'Os quatro grupos de **Cartas** que estavam “em breve” ganharam um minicurso cada: **Cartomagia** (o livro de Erdnase e o double lift), **Cardistry** (como a arte dos floreios nasceu da mágica), **Os baralhos e as figuras** (quem são os reis, as damas e os valetes, e a história do Bicycle) e **O tarô: do jogo ao oráculo** (o jogo italiano do século XV que virou baralho de adivinhação; o curso conta a história, não ensina a ler a sorte).',
    ],
  },
  {
    v: '22.124',
    date: '2026-10-17 04:15',
    title: 'Minicurso: os naipes nas línguas',
    items: [
      'Em **Cartas › Baralho francês**, o minicurso **Os naipes nas línguas**: por que o coração se chama “copas” e o losango “ouros” em português, por que o inglês diz “clubs” (bastões) e o que o francês, o alemão, o italiano e o holandês veem em cada naipe.',
    ],
  },
  {
    v: '22.123',
    date: '2026-10-17 04:10',
    title: 'Ganjifa: as cartas redondas da Índia',
    items: [
      'Em **Cartas › Jogos de baralho**, a ficha da **ganjifa**, o baralho de cartas redondas pintadas à mão da Pérsia e da Índia, com os 8 naipes da corte mogol. Por enquanto só a história e o baralho: as regras mudam muito de região para região, e o app não inventa uma.',
    ],
  },
  {
    v: '22.122',
    date: '2026-10-17 04:06',
    title: 'Karuta: os cem poemas do Hyakunin Isshu',
    items: [
      'Em **Cartas › Jogos de baralho**, a **karuta** do Hyakunin Isshu, contra o Linu: o leitor mostra o começo de um poema japonês, sílaba por sílaba, e quem reconhece primeiro toca na carta com o fim dele, escrita em kana, em colunas, como nas cartas de verdade. Os 100 poemas estão no app, e depois de cada carta o poema aparece inteiro, com o autor.',
    ],
  },
  {
    v: '22.121',
    date: '2026-10-17 03:58',
    title: 'Escopa contra o Linu',
    items: [
      'Em **Cartas › Baralho francês**, a **escopa** (de 15), que veio da Itália com os imigrantes: jogue uma carta e leve as da mesa que, somadas a ela, dão 15. Limpar a mesa é escopa. A partida vai a 21.',
    ],
  },
  {
    v: '22.120',
    date: '2026-10-17 03:51',
    title: 'Sueca, em duplas',
    items: [
      'Em **Cartas › Baralho francês**, a **sueca**, o jogo de cartas mais jogado onde se fala português: você e o Pipo contra o Linu e a Dedé, com trunfo, 120 pontos por mão e a partida até 4 jogos.',
    ],
  },
  {
    v: '22.119',
    date: '2026-10-17 03:44',
    title: 'Copas, com o Linu e dois amigos',
    items: [
      'Em **Cartas › Baralho francês**, a **copas**: você, o Linu, o Pipo e a Dedé fogem das cartas de copas e da dama de espadas. Tem a passagem de 3 cartas, a “lua” e a partida até 100, e ganha quem tiver menos pontos.',
    ],
  },
  {
    v: '22.118',
    date: '2026-10-17 03:36',
    title: 'Buraco contra o Linu',
    items: [
      'Em **Cartas › Baralho francês**, o **buraco** (aberto), você contra o Linu, cada um com o seu morto, até 3000 pontos: compre ou pegue o lixo, baixe sequências do mesmo naipe, use o 2 como coringa, forme canastras e bata. A ficha conta a história da canastra, inventada em Montevidéu em 1939.',
    ],
  },
  {
    v: '22.117',
    date: '2026-10-17 03:17',
    title: 'Truco paulista contra o Linu',
    items: [
      'Em **Cartas › Baralho francês**, o **truco paulista**, você contra o Linu, até 12 pontos: vira e manilhas, “Truco!”, seis, nove e doze, mão de onze e mão de ferro. O Linu pede truco quando tem mão boa e, de vez em quando, blefa.',
    ],
  },
  {
    v: '22.116',
    date: '2026-10-17 02:55',
    title: 'Paciência: o primeiro jogo do baralho francês',
    items: [
      'Em **Lazer › Cartas › Baralho francês**, que estava “em breve”, chegou a **Paciência (Klondike)**: monte as fundações do ás ao rei. Toque numa carta e depois no lugar dela, ou toque duas vezes para ela ir sozinha para o melhor lugar. Tem desfazer, “terminar sozinho” e a variante comprando 3 cartas.',
      'O baralho é desenhado pelo próprio app, com naipes e figuras próprios, e vai servir para os próximos jogos do grupo.',
    ],
  },
  {
    v: '22.115',
    date: '2026-10-17 02:36',
    title: 'Contra o Linu, você joga sempre embaixo',
    items: [
      'Nos jogos de tabuleiro, quando você joga contra o Linu, **as suas peças ficam sempre embaixo**: se o seu lado é o de cima, o tabuleiro **gira com animação** e as peças continuam de pé. Vale nas damas, na lasca, no xadrez tailandês, chinês, coreano e japonês, no chaturanga, no alquerque, no fanorona, no surakarta, nas amazonas, no halma, no quoridor, no octi, no abalone, nas damas chinesas e nas mancalas (oware, kalah, bao e as da mesma família).',
    ],
  },
  {
    v: '22.114',
    date: '2026-10-17 02:18',
    title: 'Calendário: as palavras de amanhã',
    items: [
      'O **calendário de lições** (o 🔥 lá em cima) agora mostra **as palavras que você vai praticar amanhã** no idioma atual, contando as revisões que já venceram e ainda não foram feitas.',
    ],
  },
  {
    v: '22.113',
    date: '2026-10-17 01:57',
    title: 'Guarani mbyá completo, agora até o B1',
    items: [
      'O guarani mbyá chegou ao fim do nível novo dele (B1): 179 palavras, 16 tópicos de gramática (orações ligadas, “quem/o que”, causativo, reflexivo e recíproco, fala citada, as partículas que dizem de onde vem a notícia), 8 unidades e 8 histórias, uma delas com um conto e um canto infantis do “Ayvu Rapyta”.',
      'Conserto no A1: frases como “Tekoa porã!” agora são traduzidas “Que aldeia bonita!”; para dizer “é bonita”, o mbyá usa “iporã”.',
    ],
  },
  {
    v: '22.112',
    date: '2026-10-17 01:32',
    title: 'Hopi até o A2, e o teto dele sobe para B1',
    items: [
      'O hopi ganhou o A2: 112 palavras, parentesco e posse, objeto, “não” e “ter”, perguntas, futuro e ordens, duas lições novas no A1.1 e 4 histórias, com diálogos do livro “Lessons in Hopi”, de Milo Kalectaca (1978). O curso agora cumprimenta com “Um waynuma?” e agradece com “Kwakwhá!”.',
      'Consertos no A1: os números de dois a cinco agora são as formas de contar do livro (lööyöm, pàayom…), e o acento que marca a sílaba forte voltou às palavras. Nada cerimonial entra no curso, por respeito ao escritório cultural hopi. O curso pode ir até o B1, que chega nas próximas atualizações.',
    ],
  },
  {
    v: '22.111',
    date: '2026-10-17 01:20',
    title: 'Guarani mbyá até o A2, e o teto dele sobe para B1',
    items: [
      'O guarani mbyá ganhou o A2: 103 palavras, os prefixos de pessoa e de dono, negação, tempo, perguntas, duas lições novas no A1.1 e 4 histórias. Todas as frases vêm do léxico de Robert Dooley, conferidas na página.',
      'Consertos no A1: “nhe’ẽ” (fala, alma) agora com o til, e “xy” (mãe) sempre com dono, como o mbyá usa. Com o léxico, a descrição de Marci Martins e os textos em mbyá, o curso pode ir até o B1, que chega nas próximas atualizações.',
    ],
  },
  {
    v: '22.110',
    date: '2026-10-17 01:19',
    title: 'Alutiiq completo',
    items: [
      'O alutiiq, do Alasca, chegou ao fim do nível dele (A2): 115 palavras, verbos para um, dois e muitos, lugares, posse, passado e futuro, duas lições novas no A1.1 e 4 histórias, uma delas a visita a uma anciã.',
      'O A1 foi conferido com o livro didático e o “Word of the Week” do museu de Kodiak: 18 palavras passaram para a grafia de Kodiak (como “caayuq”, chá), e as frases sobre o tempo foram consertadas.',
    ],
  },
  {
    v: '22.109',
    date: '2026-10-17 00:44',
    title: 'Asháninka completo',
    items: [
      'O asháninka chegou ao fim do nível dele (A2): 110 palavras, o real e o “ainda não” do verbo, negação, plural, perguntas, duas lições novas no A1.1 e 4 histórias, uma delas na aldeia Apiwtxa, no rio Amônia (Acre).',
      'As frases vêm do dicionário de Kindberg (1980) e do vocabulário pedagógico do Ministério da Educação do Peru. Na aba Gramática, **Estudar pelas fontes** traz 10 fontes e 4 jeitos de ensinar a língua.',
    ],
  },
  {
    v: '22.108',
    date: '2026-10-17 00:32',
    title: 'Ligue 4: a peça cai por trás da grade',
    items: [
      'No **Ligue 4**, a peça agora cai **por trás da grade**, aparecendo só pelos furos, e quica no fundo, como no jogo de verdade. Antes ela passava por cima dos buracos.',
    ],
  },
  {
    v: '22.107',
    date: '2026-10-17 00:00',
    title: 'Huni kuĩ completo, agora até o B1',
    items: [
      'O huni kuĩ chegou ao fim do nível novo dele (B1): 169 palavras, 16 tópicos de gramática (causa, tempo, finalidade, quando o sujeito muda, causativo, fala contada, foco), 8 unidades e 8 histórias.',
      'As histórias novas continuam o mito do povo sovino: o calango e o milho, a curica e o fogo, o beija-flor e o algodão. No A2.2, voltaram os tis que faltavam em várias palavras.',
    ],
  },
  {
    v: '22.106',
    date: '2026-10-16 22:47',
    title: 'Burushaski completo, agora até o B1',
    items: [
      'O burushaski chegou ao fim do nível novo dele (B1): 138 palavras, 16 tópicos de gramática (contínuo, perfeito, ações encadeadas, causativo, condicional, obrigação, orações relativas, fala relatada), 8 unidades e 8 histórias.',
      'As histórias novas seguem o conto do peixe de ouro, gravado em Hunza por Noboru Yoshioka, e a lenda de Śíri Badát, de Gilgit.',
    ],
  },
  {
    v: '22.105',
    date: '2026-10-16 22:22',
    title: 'Huni kuĩ até o A2, e o teto dele sobe para B1',
    items: [
      'O huni kuĩ ganhou o A2: 92 palavras, os cinco passados e o futuro, perguntas, “ter” e “não ter”, ordens, duas lições novas no A1.1 e 4 histórias, entre elas adivinhas e o conto do povo sovino, anotados por Capistrano de Abreu em 1914 e escritos na grafia de hoje por Joaquim Kaxinawá.',
      'O curso inteiro agora usa a grafia das escolas huni kuĩ, no lugar do alfabeto fonético. Com a gramática de Joaquim Kaxinawá, o dicionário e os livros bilíngues, o curso pode ir até o B1, que chega nas próximas atualizações.',
    ],
  },
  {
    v: '22.104',
    date: '2026-10-16 22:04',
    title: 'Burushaski até o A2, e o teto dele sobe para B1',
    items: [
      'O burushaski ganhou o A2: 90 palavras, casos, o verbo “ser” que muda com a classe do nome, passado e futuro, ordens e perguntas, 4 histórias com frases de contos gravados em Hunza e duas lições novas no A1.1.',
      'Conserto no A1: “eu” é “je” (e não “ja”, que é do falar de Yasin); “jáa” quer dizer “meu”. A grafia agora segue a de Hermann Berger em todo o curso.',
      'Com três gramáticas, dicionários e contos publicados, o curso agora pode ir até o B1, que chega nas próximas atualizações.',
    ],
  },
  {
    v: '22.103',
    date: '2026-10-16 21:27',
    title: 'Aleúte completo, agora até o B1',
    items: [
      'O aleúte chegou ao fim do nível novo dele (B1): 207 palavras, 14 tópicos de gramática (orações ligadas, costume, posições, ordens e proibição, condicional, “dizem”, voz passiva), 8 unidades e 8 histórias.',
      'As frases do B1 vêm da gramática de Knut Bergsland, do livro de receitas “Atkan Food” (Moses e Lydia Dirks, 1978) e das histórias que Cedor Snigaroff contou em Atka em 1952.',
    ],
  },
  {
    v: '22.102',
    date: '2026-10-16 21:26',
    title: 'Awetí completo',
    items: [
      'O awetí, língua tupi do Xingu, chegou ao fim do nível dele (A2): 128 palavras, futuro, ordens, verbos de estado, 4 histórias (uma na festa do Jawari) e duas lições novas no A1.1.',
      'Na aba Gramática, **Estudar pelas fontes** traz 17 fontes, inclusive a ortografia escrita com professores awetí, e 6 jeitos de ensinar a língua.',
    ],
  },
  {
    v: '22.101',
    date: '2026-10-16 20:22',
    title: 'A cor do app',
    items: [
      'No **Perfil**, logo abaixo do tema, a **cor de destaque** do app: azul (a de sempre), verde, roxo, laranja, rosa ou petróleo. Botões, abas, marcações e ícones mudam de cor juntos, no claro e no escuro.',
    ],
  },
  {
    v: '22.100',
    date: '2026-10-16 20:15',
    title: 'Aleúte até o A2, e o teto dele sobe para B1',
    items: [
      'O aleúte ganhou o A2: 148 palavras, 8 tópicos de gramática (passado, futuro, um/dois/muitos, números grandes), 4 histórias e duas lições novas no A1.1. As frases novas vêm do dicionário e da gramática de Knut Bergsland, no aleúte de Atka.',
      'Com essas obras e os textos antigos em aleúte, o curso agora pode ir até o B1, que chega nas próximas atualizações. Na aba Gramática, **Estudar pelas fontes** traz 15 fontes e 7 jeitos de ensinar a língua.',
    ],
  },
  {
    v: '22.99',
    date: '2026-10-16 20:14',
    title: 'Apache ocidental completo',
    items: [
      'O apache ocidental chegou ao fim do nível dele (A2): 116 palavras, verbos conjugados para um, dois e muitos, perguntas, negação, os prefixos de dono, passado e futuro, 4 histórias e duas lições novas no A1.1. As frases vêm da gramática de San Carlos de Willem de Reuse (2006).',
      'Na aba Gramática, **Estudar pelas fontes** traz dicionários, livros infantis em vídeo e 7 jeitos de ensinar a língua.',
    ],
  },
  {
    v: '22.98',
    date: '2026-10-16 20:10',
    title: 'O Linu na partida',
    items: [
      'Jogando **contra o Linu**, ele aparece em cima do tabuleiro e **comenta a partida**: o começo, as capturas, alguns lances e o resultado. Dá para deixá-lo em silêncio em **Personalizar**.',
      'Nos tabuleiros de um país que tem roupa na Loja do Linu, ele joga **vestido a caráter**: kilt e tam no tartan escocês, kokoshnik e sarafan na khokhloma russa, vinok no bordado ucraniano, charro no México, fez no zellige, kente em Gana e outros.',
    ],
  },
  {
    v: '22.97',
    date: '2026-10-16 20:06',
    title: 'A mesa em volta do tabuleiro',
    items: [
      'Em **Personalizar**, uma **mesa** para pôr o tabuleiro em cima: madeira, feltro verde, mármore, areia de praia ou gelo antártico, cada uma com a sua textura. As instruções ganham um fundo escuro para continuar legíveis em qualquer mesa.',
    ],
  },
  {
    v: '22.96',
    date: '2026-10-16 20:02',
    title: 'Som das peças e volume',
    items: [
      'Em **Personalizar**, o **som de mover as peças** pode ser escolhido à parte do tema (madeira, pedra, cerâmica, gelo, moeda, sino, papel, tecido, areia, mar, chuva, mata), e ele toca na hora para você ouvir.',
      'E um **volume** só para os sons dos jogos, de 20% a 100%.',
    ],
  },
  {
    v: '22.95',
    date: '2026-10-16 20:00',
    title: 'Clima à sua escolha',
    items: [
      'Em **Personalizar**, o **clima em volta do tabuleiro** também pode ser escolhido à parte do tema: neve, chuva e névoa, pétalas, vaga-lumes, aurora, areia ou papel picado, em qualquer tabuleiro.',
    ],
  },
  {
    v: '22.94',
    date: '2026-10-16 19:58',
    title: 'Comemoração de vitória à sua escolha',
    items: [
      'Em **Personalizar**, a **comemoração de vitória** pode ser escolhida à parte do tabuleiro: confete, fogos, estrelas, moedas, pétalas, folhas, papel picado, neve, bolhas, brasas ou areia. “Do tema” continua sendo a de cada tabuleiro.',
    ],
  },
  {
    v: '22.93',
    date: '2026-10-16 19:54',
    title: 'Relógio nos jogos',
    items: [
      'Em **Personalizar**, um **relógio para cada jogador**, desligado por padrão: só contar quanto tempo cada um pensou, ou um limite de 1, 3, 5 ou 10 minutos para cada um, correndo para baixo. Quem chega a zero perde no relógio. Vale para todos os jogos e zera ao recomeçar.',
    ],
  },
  {
    v: '22.92',
    date: '2026-10-16 19:51',
    title: 'O nome de cada jogador',
    items: [
      'Jogando a dois no mesmo aparelho, dá para escrever o **nome de cada jogador** em **Personalizar**: o placar de todos os jogos mostra “Ana (Brancas)”, e os jogos que diziam “Jogador 1” passam a dizer o nome.',
    ],
  },
  {
    v: '22.91',
    date: '2026-10-16 19:40',
    title: 'Como o Linu joga',
    items: [
      'Os cursos do **jogo da velha** e do **gamão** ganharam uma última lição: **como o Linu joga**, nível por nível (a busca até o fim na velha; a nota da posição e a média dos dados do adversário no gamão).',
    ],
  },
  {
    v: '22.90',
    date: '2026-10-16 19:38',
    title: 'Yawanawá completo, e fontes do marúbo e do yawanawá',
    items: [
      'O curso de yawanawá chegou ao fim do nível dele (A1): 93 palavras, 6 tópicos de gramática, duas unidades e duas histórias. A do A1.2, “Os jabutis e a onça”, usa as falas do livro de contos do pajé Tata, publicado pela associação yawanawá.',
      'Marúbo e yawanawá ganharam a lista **Estudar pelas fontes** (na aba Gramática), com artigos, teses e livros da própria comunidade, e o jeito como cada língua é ensinada.',
    ],
  },
  {
    v: '22.89',
    date: '2026-10-16 19:37',
    title: 'Marúbo completo',
    items: [
      'O curso de marúbo chegou ao fim do nível dele (A1): 74 palavras, 6 tópicos de gramática, duas unidades e duas histórias, tudo tirado de uma narrativa marúbo publicada com análise por Pedro Cesarino e dois coautores marúbo.',
    ],
  },
  {
    v: '22.88',
    date: '2026-10-16 19:36',
    title: 'Músicas novas na tela inicial',
    items: [
      'A tela inicial ganhou duas músicas compostas pelo criador do LinuLingo, no lugar do som de vento, pinguins e mar. O botão de som, ao lado do Linu, passa por desligado, música tranquila e música pesada.',
    ],
  },
  {
    v: '22.87',
    date: '2026-10-16 19:35',
    title: 'Estudar pelas fontes, começando pelo galego',
    items: [
      'Na aba **Gramática**, o cartão **Estudar pelas fontes** abre a lista das gramáticas, dicionários, cursos, corpora e áudios do idioma, agrupados por tipo, com autor, ano, nível, se é grátis e a licença. Cada link abre no navegador.',
      'Embaixo, **Como a língua é ensinada**: a certificação oficial, a escola, as escolas de idiomas e os cursos para estrangeiros, com a fonte de cada um e o que o LinuLingo pode aproveitar.',
      'O galego é o primeiro, com 21 fontes conferidas (Real Academia Galega, Instituto da Lingua Galega, Xunta) e 5 jeitos de ensinar. Os outros idiomas chegam nas próximas atualizações.',
    ],
  },
  {
    v: '22.86',
    date: '2026-10-16 18:45',
    title: 'App abre mais leve',
    items: [
      'As **gravações de nativos** e os **números por extenso** de cada idioma agora carregam só quando o idioma é usado, em vez de irem todos na abertura do app.',
      'As **bandeiras** ficaram com metade do tamanho (o mesmo desenho) e também chegam depois da primeira tela.',
      'A **esgrima** passa a se chamar só “Esgrima”, porque agora tem as três armas.',
      'Dá para jogar a **Trilha (jogo do moinho)**, o **Hnefatafl**, o **Quoridor**, o **Octi**, o **Abalone** e o **Go** **contra o Linu**, em três níveis (na Trilha, nas três regras; no Quoridor, nos dois tamanhos).',
      'Aba nova em **Cultura: Gírias e expressões**, com as gírias para aprender (gíria gamer, Mabelleto) e as expressões prontas do idioma que você estuda, com a voz.',
      'Em **Lazer › Cartas**, os jogos se separam em **Jogos de baralho** (Hanafuda, Encantados), **Baralho francês** (em breve) e **TCG**, os jogos de cartas colecionáveis (Duelo de Bichos, Duelo dos Biomas, Bichos Ocultos, Trilha da Evolução).',
      'Chapéu de nacho: o **guacamole agora fica espalhado** pela tigela, escorrendo pela borda, em vez de um bloco em cima.',
      'Minicurso novo em Gírias: o **Mabelleto**, o jeito de falar da Mabelle Caminha (quem desenha as fanarts do Linu). Em construção, com a primeira palavra: “alpiste”.',
    ],
  },
  {
    v: '22.85',
    date: '2026-10-16 17:53',
    title: 'Bandeiras desenhadas, sem depender do aparelho',
    items: [
      'As bandeiras dos idiomas no topo da trilha, na lista de idiomas do perfil e na escolha de sotaques agora são desenhadas pelo app. Em vários Android, a bandeira do sistema não aparecia e ficava só a sigla do país (IT, CH…).',
    ],
  },
  {
    v: '22.84',
    date: '2026-10-16 06:49',
    title: 'Bichos Ocultos: o jogo de cartas dos bichos virados, contra o Linu',
    items: [
      'Em **Lazer › Cartas › Jogos de cartas** chegou **Bichos Ocultos**, com as regras principais de outro jogo de cartas colecionáveis famoso do Japão (a ficha conta qual e a história dele) e cartas do LinuLingo: 8000 de vida, 1 chamada por turno, sacrifício para os bichos de 5 estrelas ou mais, bichos de frente em ataque ou virados em defesa, magias e armadilhas, e a batalha de ATQ contra ATQ ou DEF.',
      'São 4 baralhos prontos de 40 cartas (Gelo do Sul, com os Amigos do Linu, Mata Viva, Céu e Montanha e Savana), o Linu em 3 níveis, sem espiar os seus bichos virados nem as suas armadilhas, a opção “quem começa” e um tutorial curto.',
    ],
  },
  {
    v: '22.83',
    date: '2026-10-16 06:48',
    title: 'Trilha da Evolução: o jogo de cartas dos estágios, contra o Linu',
    items: [
      'Em **Lazer › Cartas › Jogos de cartas** chegou a **Trilha da Evolução**, com as regras principais de um dos jogos de cartas colecionáveis mais famosos do Japão (a ficha conta qual e a história dele) e cartas do LinuLingo: um bicho ativo na frente e até 5 no banco, 1 energia por turno, ataques que custam energia, fraqueza (dano dobrado) e resistência (−30), recuar e 6 cartas de prêmio.',
      'Os estágios são crescimento de verdade: o filhote de pinguim-imperador vira o Tobias, o girino vira sapo e a lagarta vira crisálida e depois borboleta. A ficha explica por que isso é metamorfose, e não evolução.',
      'São 4 baralhos prontos de 40 cartas (Gelo do Sul, com os Amigos do Linu, Mata Viva, Céu e Montanha e Savana), o Linu em 3 níveis, sem espiar as suas cartas, a opção “quem começa” e um tutorial curto.',
    ],
  },
  {
    v: '22.82',
    date: '2026-10-16 06:47',
    title: 'Jogo de cartas novo: Duelo de Bichos, o nosso',
    items: [
      'Em Lazer › Cartas › Jogos de cartas, o **Duelo de Bichos**, o jogo de cartas colecionáveis próprio do LinuLingo, contra o Linu (fácil, médio e difícil).',
      'O krill paga as cartas e cresce a cada turno; os filhotes evoluem (o Filhote de pinguim-imperador vira o Tobias, o girino vira sapo, a lagarta vira borboleta); as armadilhas ficam viradas para baixo e pegam o outro de surpresa. Guarda, Voo e Ímpeto.',
      '4 baralhos prontos de 30 cartas, nos mesmos 4 temas do Duelo dos Biomas. A ficha conta a história dos três grandes jogos do gênero que ele homenageia, com as fontes.',
    ],
  },
  {
    v: '22.81',
    date: '2026-10-16 06:46',
    title: 'Jogo de cartas novo: Duelo dos Biomas',
    items: [
      'Em Lazer › Cartas › Jogos de cartas, o **Duelo dos Biomas**, contra o Linu (fácil, médio e difícil). Ele usa as regras principais do Magic: The Gathering, com cartas do LinuLingo: os Amigos do Linu e bichos do Brasil, dos Andes e do Himalaia e da África, desenhados pelo app.',
      'Um bioma por turno dá a energia; os bichos atacam, quem defende escolhe os bloqueios, e as magias rápidas viram o combate. Habilidades: Voo, Alcance, Ímpeto, Vigia e Atropelar.',
      '4 baralhos prontos de 40 cartas: Gelo do Sul, Mata Viva, Céu e Montanha e Savana. A ficha conta a história do jogo homenageado, explica de onde vem “trading card game” e diz o que ficou de fora. Tem tutorial curto na primeira partida.',
    ],
  },
  {
    v: '22.80',
    date: '2026-10-16 06:36',
    title: 'Jogos: vitória sem erro do banco',
    items: [
      'Ao vencer uma partida, o app grava o XP e o tema da vitória um depois do outro. Antes, as duas gravações podiam se cruzar no navegador e mostrar o erro “Error finalizing statement”.',
      'Vale para o app todo: os comandos do banco agora entram numa fila, um de cada vez.',
    ],
  },
  {
    v: '22.79',
    date: '2026-10-16 06:23',
    title: 'Jogos: “Sua vez” e “Vez do Linu”',
    items: [
      'Contra o Linu, a instrução diz “Sua vez” ou “Vez do Linu”, em vez do nome do lado (xadrez chinês, japonês, coreano e tailandês, chaturanga, damas, lasca, fanorona, gamão, gomoku, amazonas, dara e jogo da velha).',
      'A dois no mesmo aparelho, continua o nome do lado.',
    ],
  },
  {
    v: '22.78',
    date: '2026-10-16 06:22',
    title: 'Personalizar: uma escolha de peça só',
    items: [
      'Com uma **peça especial** do jogo em uso, os outros seletores de peça (exército, cores, estilo, pedras do dominó, sementes e tábuas das mancalas) aparecem desmarcados, com o aviso “usando as peças especiais”. Escolher outra peça desliga a especial só naquele jogo: a coleção das mancalas continua nas outras mancalas.',
    ],
  },
  {
    v: '22.77',
    date: '2026-10-16 06:21',
    title: 'Hnefatafl: o rei tem peça própria',
    items: [
      'O **rei do hnefatafl** agora tem silhueta própria: uma peça alta, 15% maior, com corpo de escudo e a coroa no mesmo material, cingida de ouro. Ele não se confunde com os defensores em nenhum visual: clássico, cada exército e cada coleção, como a de âmbar e osso.',
    ],
  },
  {
    v: '22.76',
    date: '2026-10-16 05:23',
    title: 'Calendário de lições no 🔥',
    items: [
      'Toque no 🔥 (na trilha ou no Perfil) para ver o calendário do mês, com os dias em que você estudou e um resumo (dias estudados, melhor dia). O ❄️ dos congelamentos ganhou um toque próprio, separado do 🔥.',
      'Chapéu de nacho mexicano: refeito como a tigela de totopo cheia de guacamole, igual à referência que o Matheus mandou.',
    ],
  },
  {
    v: '22.75',
    date: '2026-10-16 04:02',
    title: 'Shogi: minishogi 5×5',
    items: [
      'Na página do shogi, escolha “Minishogi”: o tabuleiro de 5×5 de Shigenobu Kusumoto, com rei, ouro, prata, bispo, torre e um peão para cada lado. A zona de promoção é só a última fileira. O Linu joga também.',
    ],
  },
  {
    v: '22.74',
    date: '2026-10-16 04:01',
    title: 'Jogo da onça com duas tocas',
    items: [
      'Na página do jogo da onça, escolha “Com mais de uma toca”: além da toca de cima, há outra igual embaixo, atrás dos cachorros. A onça ganha caminhos, e os cachorros, mais lugares para prendê-la. O Linu joga dos dois lados.',
    ],
  },
  {
    v: '22.73',
    date: '2026-10-16 04:00',
    title: 'Shogi: partidas com vantagem (komaochi)',
    items: [
      'Na página do shogi, escolha “Partidas com vantagem”: o lado de cima (o Linu, contra ele) tira peças do próprio lado e começa. Sete vantagens, da lança às seis peças.',
    ],
  },
  {
    v: '22.72',
    date: '2026-10-16 03:59',
    title: 'Janggi: a arrumação da Coreia do Norte',
    items: [
      'No janggi, antes do primeiro lance, dá para escolher a quinta arrumação, “상마차 (carro no meio)”: os elefantes nas pontas e os carros ao lado dos guardas, como nos jogos informais e na Coreia do Norte.',
    ],
  },
  {
    v: '22.71',
    date: '2026-10-16 03:58',
    title: 'Fanorona: vela, a revanche',
    items: [
      'Na página do fanorona, escolha “Vela”, a revanche de Madagascar: as pretas, vencedoras da partida anterior, não capturam e têm de deixar uma pedra para as brancas tirarem, uma por vez, até ficarem com 5. Se não conseguem, as brancas são perdoadas. O Linu joga com as pretas.',
    ],
  },
  {
    v: '22.70',
    date: '2026-10-16 03:57',
    title: 'Alquerque: peça soprada',
    items: [
      'No alquerque, escolha “Peça soprada” acima do tabuleiro: quem podia capturar e fez outro lance perde a peça, soprada para fora. O Linu joga também.',
    ],
  },
  {
    v: '22.69',
    date: '2026-10-16 03:56',
    title: 'Damas chinesas rápidas',
    items: [
      'Na página das damas chinesas, escolha “Damas chinesas rápidas”: o salto pode ser longo, sobre uma peça que esteja longe, caindo à mesma distância do outro lado, com o caminho vazio. Dá para encadear saltos longos e curtos. O Linu joga também.',
    ],
  },
  {
    v: '22.68',
    date: '2026-10-16 03:55',
    title: 'Xiangqi: xadrez manchu',
    items: [
      'Na página do xiangqi, escolha “Xadrez manchu”: as vermelhas jogam sem os cavalos, sem os canhões e com um carro só, a “bandeira” (旗), que anda como carro, como cavalo e como canhão. O Linu joga também.',
    ],
  },
  {
    v: '22.67',
    date: '2026-10-16 03:54',
    title: 'Jogo da velha: terni lapilli',
    items: [
      'Na página do jogo da velha, escolha “Terni lapilli”, o jogo dos romanos: cada um tem só três peças e, depois de pô-las, move uma por vez para uma casa vazia, até alguém fazer três em linha. O Linu joga também.',
    ],
  },
  {
    v: '22.66',
    date: '2026-10-16 01:19',
    title: 'Encantados: o mímico sozinho trava o grupo',
    items: [
      'No **Encantados**, quando o kobold ou o troll tiram a última carta de verdade de uma raça que tinha mímico, o mímico fica sozinho e aquele grupo trava: nada mais entra nele, de nenhum jogador. O jardim mostra o grupo como “travado”.',
      'Confirmado também: dá para jogar um mímico no jardim do adversário, e o Linu faz isso.',
    ],
  },
  {
    v: '22.65',
    date: '2026-10-16 01:18',
    title: 'Jogos: escolha quem começa contra o Linu',
    items: [
      'Em todos os jogos contra o Linu, escolha antes da partida: **Eu começo**, **O Linu começa** ou **Sorteio**. A regra de cada jogo continua dizendo qual lado começa (as brancas no xadrez, as pretas no go); a escolha decide de que lado fica o Linu.',
      'A opção fica no Personalizar e no cartão dos jogos do Lazer. Onde a regra decide (o gamão pelos dados, o dominó pela carroça) ou você escolhe o lado (onça, bagh-chal, raposa e gansos), ela aparece desligada, com o motivo.',
      'Nas damas, antes o Linu sempre começava; agora o padrão é você começar.',
    ],
  },
  {
    v: '22.64',
    date: '2026-10-16 01:09',
    title: 'Pachisi: casas tocáveis no celular',
    items: [
      'No celular, o tabuleiro do **pachisi** abre com casas de 28 px, numa faixa que rola para os lados e se move sozinha até o braço da cor da vez. No computador, nada muda.',
    ],
  },
  {
    v: '22.63',
    date: '2026-10-16 01:08',
    title: 'Pallanguzhi: a variante de 12 sementes',
    items: [
      'O **pallanguzhi** ganhou a variante **12 sementes (Wikipédia)**: 12 sementes em cada cova, menos a do meio de cada fileira, que começa com 2, e o “pasu” quando a cova chega a 6. A ficha avisa que a Wikipédia em inglês dá essa versão sem citar fonte; a padrão segue o Mancala World. O Linu joga nas duas.',
    ],
  },
  {
    v: '22.62',
    date: '2026-10-16 01:07',
    title: 'Chaturanga: o movimento do gaja fica guardado',
    items: [
      'No **chaturanga**, as três reconstruções do gaja (elefante) viraram variantes no seletor: gaja alfil (o padrão), de al-Biruni e de al-Adli. A escolha fica guardada e não volta ao padrão quando o app reabre; cada uma tem a sua partida.',
    ],
  },
  {
    v: '22.61',
    date: '2026-10-16 01:06',
    title: 'Raposa e gansos: a variante em que os gansos podem voltar',
    items: [
      '**Raposa e gansos** ganhou a variante **Gansos podem voltar**, a da Wikipédia em inglês: 13 gansos que andam em qualquer direção, também para trás e na diagonal. Escolha no seletor de variante; o Linu joga dos dois lados.',
    ],
  },
  {
    v: '22.60',
    date: '2026-10-16 01:00',
    title: 'Contraste: botão "Ouvir o Linu falar" mais legível',
    items: [
      'No tutorial, o texto do botão "▶ Ouvir o Linu falar" estava com contraste abaixo do recomendado no modo claro. Cor mais escura, mesmo padrão já usado nos outros chips selecionados do app.',
    ],
  },
  {
    v: '22.59',
    date: '2026-10-16 00:24',
    title: 'Encantados: regras confirmadas',
    items: [
      'As dúvidas de regra do **Encantados** foram respondidas por quem conhece o jogo: a busca dos elfos (olhar 3) vale com 3 elfos, ou 2 com o poder dos fogos-fátuos ou com um mímico de elfo; com os gnomos junto, você descarta 2; goblin, kobold e troll usam o poder quando a raça entra no seu jardim; e as cartas negativas na mão continuam negativas.',
      'Raça nova é a que você ainda não tem, mesmo que o Linu tenha. E agora dá para expandir uma raça no jardim do Linu, o que ele também faz.',
      'O kobold manda qualquer carta em jogo para o fundo do monte, até um mímico; o troll leva qualquer carta para qualquer jardim, e o mímico só vai para cima de outra raça. O Linu escolhe o melhor alvo.',
      'Antes da partida, escolha quem começa: você, o Linu ou sorteio.',
    ],
  },
  {
    v: '22.58',
    date: '2026-10-16 00:05',
    title: 'Cinco áreas novas "em breve" no Perfil',
    items: [
      'O seletor de Áreas do LinuLingo, no Perfil, ganhou cinco abas novas: Biologia, Direito, Política, Marketing e Alimentação (antes "Gastronomia/Nutrição"). Por enquanto, como Música e Psicologia, são só o aviso "em breve" — o conteúdo de cada uma ainda vai ser combinado.',
    ],
  },
  {
    v: '22.57',
    date: '2026-10-15 19:36',
    title: 'Esgrima: espada e sabre',
    items: [
      'Na página da esgrima, escolha a arma. Na espada não há prioridade: quando os dois tocam juntos, os dois marcam (o toque duplo). No sabre vale a prioridade, como no florete, e o corte no braço faz o contra-ataque chegar mais longe. O Linu duela com as três armas.',
    ],
  },
  {
    v: '22.56',
    date: '2026-10-15 19:35',
    title: 'Xadrez tailandês: ouk e kar ouk',
    items: [
      'Na página do makruk, escolha o ouk, do Camboja: enquanto ninguém capturou, o khun pode pular como o cavalo no primeiro lance dele e o met pode andar duas casas. Ou o kar ouk, em que vence quem der o primeiro xeque. O Linu joga as duas.',
    ],
  },
  {
    v: '22.55',
    date: '2026-10-15 19:34',
    title: 'Pontos e Caixas: tabuleiros sueco e islandês',
    items: [
      'Na página do Pontos e Caixas, escolha o tabuleiro sueco (a borda de fora já começa traçada) ou o islandês (só os lados da esquerda e de baixo começam traçados). O Linu joga nos dois.',
    ],
  },
  {
    v: '22.54',
    date: '2026-10-15 19:33',
    title: 'Quarto para iniciantes',
    items: [
      'Na página do Quarto, escolha “Para iniciantes”: só valem 1, 2 ou 3 características. Comece só com a cor, depois junte a altura e a forma. O Linu e as dicas seguem a mesma regra.',
    ],
  },
  {
    v: '22.53',
    date: '2026-10-15 19:32',
    title: 'Hanafuda: Koi-Koi de regras curtas',
    items: [
      'Na página do Hanafuda, escolha “Koi-Koi de regras curtas”: os dois yaku do saquê (com a lua e com a cortina) não contam, e o koi-koi só vale uma vez por rodada. Quem já pediu e faz outro yaku para na hora. O Linu joga com as mesmas regras.',
    ],
  },
  {
    v: '22.52',
    date: '2026-10-15 19:31',
    title: 'Gamão: hypergammon e tavla',
    items: [
      'No seletor “Variante” do gamão: o hypergammon (só 3 peças de cada lado, nos pontos 24, 23 e 22) e a tavla da Turquia (quem ganha a abertura rola de novo, a peça que bate na própria casa não segue em frente e não existe o backgammon). O Linu joga as duas.',
    ],
  },
  {
    v: '22.51',
    date: '2026-10-15 19:30',
    title: 'Reversi: a clássica de 1883',
    items: [
      'No seletor “Variante” do reversi: a Reversi clássica, de 1883. O tabuleiro começa vazio, e os 4 primeiros lances (2 de cada um) são livres nas 4 casas do meio, sem virar nada. Depois, segue a regra de sempre. O Linu joga também.',
    ],
  },
  {
    v: '22.50',
    date: '2026-10-15 19:29',
    title: 'Go: contagem por território e partida com handicap',
    items: [
      'No seletor “Variante” do Go: a contagem por território, das regras japonesas e coreanas (pontos vazios cercados mais prisioneiros, komi de 6,5), e a partida com handicap (2 a 4 pedras pretas nos cantos, as brancas começam, komi de 0,5).',
    ],
  },
  {
    v: '22.49',
    date: '2026-10-15 19:28',
    title: 'Gomoku: variantes Caro e troca de cor',
    items: [
      'No seletor “Variante” do gomoku: o Caro, do Vietnã (o cinco tapado nas duas pontas pelo adversário não vale), e a troca depois do primeiro lance (quem joga com as brancas pode ficar com a pedra preta).',
      'Contra o Linu, ele joga as duas; na troca, é ele quem decide se fica com a primeira pedra.',
    ],
  },
  {
    v: '22.48',
    date: '2026-10-15 19:27',
    title: 'Jogos: textura e volume também nos jogos novos',
    items: [
      'Pallanguzhi, toguz korgool e sungka ganharam a tábua com veio e os depósitos fundos, como as outras mancalas.',
      'Halma, linhas de ação e lasca agora têm as casas com o veio da madeira (ou o material do tema); ur e senet com casas em relevo; os laços do surakarta parecem sulcos; as estações do yut nori são covas; as casas do pachisi têm linhas mais fortes, para ler melhor no celular.',
      'Os dados de Ur e as varetas do senet e do yut pegam luz. Space Invaders, Breakout e Pong, nas cores do app, ganharam luz no campo (e os tijolos do Breakout, relevo); o visual de época continua igual.',
    ],
  },
  {
    v: '22.47',
    date: '2026-10-15 18:50',
    title: 'Linhas de ação jogável',
    items: [
      '**Linhas de ação** (Claude Soucie; no livro de Sid Sackson, 1969): a peça anda tantas casas quantas peças há na linha, pula as suas e captura as do outro. Ganha quem junta todas as suas peças num grupo só.',
      'A dois ou **contra o Linu**, em três níveis.',
    ],
  },
  {
    v: '22.46',
    date: '2026-10-15 18:49',
    title: 'Surakarta jogável',
    items: [
      '**Surakarta**, de Java (Indonésia): 12 peças de cada lado num 6×6 com laços nos cantos. Para capturar, a peça corre pela linha colorida e dá a volta num laço, e a gente vê ela correr pela curva.',
      'A dois ou **contra o Linu**, em três níveis.',
    ],
  },
  {
    v: '22.45',
    date: '2026-10-15 18:48',
    title: 'Raposa e gansos jogável',
    items: [
      '**Raposa e gansos**: a raposa captura saltando e os gansos tentam prendê-la, numa cruz de 33 pontos. As regras variam muito: jogue a versão de 1870 (13 gansos, só nas linhas retas) ou a moderna (15 gansos, também na diagonal). Os gansos nunca voltam.',
      'A dois ou **contra o Linu**, escolhendo o lado: a raposa ou os gansos.',
    ],
  },
  {
    v: '22.44',
    date: '2026-10-15 18:47',
    title: 'Halma jogável',
    items: [
      '**Halma** (George Howard Monks, 1883/84), o avô das damas chinesas: 19 peças em cada canto de um tabuleiro 16×16. Um passo, ou uma corrente de saltos por cima de qualquer peça; nada é capturado. Ganha quem leva todas ao canto oposto.',
      'A dois ou **contra o Linu**, em três níveis. Os destinos marcados mostram até onde chega cada corrente de saltos.',
    ],
  },
  {
    v: '22.43',
    date: '2026-10-15 18:46',
    title: 'Yut nori jogável, o jogo do Ano-Novo coreano',
    items: [
      '**Yut nori**, o jogo de família do Ano-Novo coreano: 4 varetas (do, gae, geol, yut e mo), yut e mo lançam de novo, atalhos pelas diagonais do malpan, peças que andam juntas e capturas que dão outro lançamento.',
      'As varetas caem na tela, com o lado chato ou o redondo, e nos cantos você escolhe o caminho.',
      'A dois ou **contra o Linu**.',
    ],
  },
  {
    v: '22.42',
    date: '2026-10-15 18:45',
    title: 'Pachisi jogável, o avô do ludo',
    items: [
      '**Pachisi**, o jogo de corrida em cruz da Índia, avô do ludo: búzios que valem 2 a 6, 10 e 25, a graça que tira peças do Charkoni e dá outro lançamento, castelos onde ninguém é capturado.',
      'A dois, como na regra tradicional das duplas: você joga com o Amarelo e o Preto, o adversário com o Vermelho e o Verde. Há uma opção de partida curta, com 2 peças por cor.',
      'Os búzios caem na tela e as peças andam pela cruz. A dois ou **contra o Linu**.',
    ],
  },
  {
    v: '22.41',
    date: '2026-10-15 18:44',
    title: 'Senet jogável, o jogo do Egito antigo',
    items: [
      '**Senet**, o jogo de 30 casas do Egito antigo, de mais de 4.600 anos, na reconstrução moderna de Timothy Kendall: 5 peões de cada lado, 4 varetas que valem de 1 a 5, a casa da água que manda de volta e as casas do fim que só se deixam com o número certo.',
      'As varetas caem na tela, os peões deslizam pelo caminho em zigue-zague e o capturado volta para trás.',
      'A dois ou **contra o Linu**. A ficha diz o que é certo e o que é reconstrução, e traz a versão de R. C. Bell.',
    ],
  },
  {
    v: '22.40',
    date: '2026-10-15 18:43',
    title: 'Jogo Real de Ur jogável',
    items: [
      '**Jogo Real de Ur**, o jogo de tabuleiro de 4.500 anos da Mesopotâmia, na reconstrução de Irving Finkel, do Museu Britânico: 7 peças de cada lado, 4 dados em forma de pirâmide, capturas nas casas do meio e rosetas que dão outra jogada.',
      'Os dados caem rolando na tela, a peça anda até a casa nova e a capturada volta para a reserva.',
      'A dois ou **contra o Linu**; no difícil, ele pesa a sua resposta em cada resultado dos dados. A ficha diz o que é certo e o que é reconstrução.',
    ],
  },
  {
    v: '22.39',
    date: '2026-10-15 18:42',
    title: 'Lasca jogável',
    items: [
      '**Lasca**, as damas de colunas do campeão de xadrez Emanuel Lasker (1911): no 7×7, quem captura leva só a peça de cima da coluna pulada, que fica presa embaixo. Quem manda na coluna é a peça de cima, e uma peça presa pode ser libertada.',
      'Dá para jogar a dois ou **contra o Linu**, em três níveis.',
    ],
  },
  {
    v: '22.38',
    date: '2026-10-15 18:41',
    title: 'Dara jogável',
    items: [
      '**Dara**, da Nigéria, do Níger e de Burkina Faso: 30 buracos (5×6) e 12 peças para cada um. Primeiro se colocam as peças, sem fazer linha; depois se anda uma casa por vez, e quem faz exatamente três em linha tira uma peça do outro.',
      'Dá para jogar a dois ou **contra o Linu**, em três níveis.',
    ],
  },
  {
    v: '22.37',
    date: '2026-10-15 18:40',
    title: 'Jogo das Amazonas jogável',
    items: [
      '**Jogo das Amazonas**, do argentino Walter Zamkauskas (1988): no 10×10, cada um anda com uma amazona como a dama do xadrez e atira uma flecha que queima uma casa. Perde quem não consegue mais andar.',
      'Dá para jogar a dois ou **contra o Linu**, em três níveis: ele mede o território, quem chega antes a cada casa vazia.',
    ],
  },
  {
    v: '22.36',
    date: '2026-10-15 18:39',
    title: 'Chaturanga jogável',
    items: [
      '**Chaturanga**, o antepassado indiano do xadrez: raja, mantri, gaja, ashva, ratha e padati no ashtapada de uma cor só, com os rajas em e1 e d8.',
      'As regras são uma reconstrução, e o app diz isso: dá para escolher como o gaja (o elefante) anda, nas três versões das fontes (o alfil, a de al-Biruni e a de al-Adli). Afogado e rei nu seguem al-Adli.',
      'Dá para jogar a dois ou **contra o Linu**, em três níveis. A ficha conta de onde vem a palavra “xadrez”.',
    ],
  },
  {
    v: '22.35',
    date: '2026-10-15 18:38',
    title: 'Jogos: tabuleiros e peças com textura e volume',
    items: [
      'As **paredes do Quoridor** foram redesenhadas: madeira com veios e pontas chanfradas, pedra em blocos com rejunte, gelo translúcido com brilho e cerca viva de folhas, todas com sombra no tabuleiro. A parede em prévia tem o mesmo desenho, meio transparente, com o contorno na cor de quem joga, e a parede da reserva aparece no placar.',
      'Todos os tabuleiros ganharam a textura do material do tema (veio de madeira, granulado de pedra, tecido ou papel), uma luz suave e uma moldura com friso. No xadrez e nas damas de madeira, as casas escuras têm o veio atravessado, como na marchetaria.',
      'As peças redondas ganharam volume e brilho; as covas das mancalas, do kōnane, do pylos, do quarto e do Ligue 4 ficaram fundas; os cubos do quixo, as peças do shogi e do janggi e as pedras do dominó pegam luz.',
      'No Lazer: feltro na mesa do hanafuda e dos Encantados, madeira na roleta, calçada na amarelinha. O tema de alto contraste continua liso.',
    ],
  },
  {
    v: '22.34',
    date: '2026-10-15 18:37',
    title: 'Lazer › Videogames: o Space Invaders, de 1978',
    items: [
      'O Space Invaders, da Taito, chegou: derrube as fileiras de alienígenas antes que elas desçam, escondido atrás dos abrigos. Quanto menos sobram, mais rápido eles andam, como na máquina de 1978.',
      'Alienígenas, canhão e nave desenhados pelo app, visual de época ou com as cores do app, três velocidades, a marcha e os bipes gerados, recorde guardado. Teclado, mouse, dedo e o botão “Atirar”.',
    ],
  },
  {
    v: '22.33',
    date: '2026-10-15 18:36',
    title: 'Lazer › Videogames: o Breakout, de 1976',
    items: [
      'O Breakout, da Atari, chegou: quebre a parede de tijolos com a bola, com 3 bolas para limpar duas telas. A bola acelera e a raquete encolhe como na máquina de 1976.',
      'Visual de época (tijolos em faixas de cor no fundo preto) ou com as cores do app, três velocidades, bipes e recorde guardado. Mouse, dedo ou teclado.',
    ],
  },
  {
    v: '22.32',
    date: '2026-10-15 18:35',
    title: 'Sungka jogável, com o Linu',
    items: [
      'O sungka, a mancala das Filipinas, virou um jogo próprio: a mão continua quando a última concha cai numa casinha com conchas, quem termina no próprio depósito joga de novo, e a casinha vazia sua captura a da frente.',
      'No jogo de verdade, o primeiro lance é dos dois ao mesmo tempo; aqui é um de cada vez. A coleção “Mancala filipino” da loja também vale nele.',
    ],
  },
  {
    v: '22.31',
    date: '2026-10-15 18:34',
    title: 'Toguz korgool jogável, com o Linu',
    items: [
      'O toguz korgool, a mancala do Quirguistão e do Cazaquistão, virou um jogo próprio: 9 covas de cada lado com 9 bolinhas, captura com número par e a “tuz”, a cova do adversário que vira sua para sempre.',
      'Contra o Linu, em três níveis, ou a dois, com a semeadura animada. A coleção “Mancala centro-asiático” da loja também vale nele.',
    ],
  },
  {
    v: '22.30',
    date: '2026-10-15 18:33',
    title: 'Pallanguzhi jogável, com o Linu',
    items: [
      'O pallanguzhi, a mancala dos tâmeis do sul da Índia, virou um jogo próprio (antes era só uma roupa da loja): a mão continua pela cova seguinte, captura depois de uma cova vazia, e a cova que chega a 4 (o “pasu”) é de quem semeou.',
      'A semeadura aparece semente por semente, também nas voltas. Contra o Linu, em três níveis, ou a dois. A coleção “Mancala indiano” da loja também vale nele.',
    ],
  },
  {
    v: '22.29',
    date: '2026-10-15 18:31',
    title: 'O sotaque padrão aparece marcado em mais idiomas',
    items: [
      'Ao escolher um dialeto com mais de um sotaque, o que o curso realmente ensina já aparece marcado, mesmo sem tocar em nada — e, se você escolher outro, é esse outro que fica marcado. Antes só acontecia no mongol; agora vale também para catalão, dinamarquês, inglês dos EUA, estoniano, persa (Irã e Afeganistão), islandês, italiano, japonês, coreano (Sul e Norte), lituano, letão, norueguês, neerlandês, português de Portugal, romeno, russo, suaíli e chinês — os casos em que o próprio texto do app já dizia qual é a referência.',
    ],
  },
  {
    v: '22.28',
    date: '2026-10-15 18:03',
    title: 'Pontinhos agora se chama Pontos e Caixas',
    items: [
      'O jogo dos pontinhos (dots and boxes) mudou de nome no app: agora é **Pontos e Caixas**, a tradução direta do nome em inglês. As regras e o Linu continuam iguais.',
    ],
  },
  {
    v: '22.27',
    date: '2026-10-15 13:57',
    title: 'Variantes jogáveis: damas, trilha, Ligue 4, xadrez, abalone, roleta e mancala',
    items: [
      'A página de cada jogo ganhou o seletor **Variante**, ao lado do tamanho do tabuleiro, quando a variante dá para jogar no app. A escolha fica lembrada, e cada variante tem a sua partida.',
      '**Damas**: as **inglesas** (a peça comum só captura para a frente, a dama anda uma casa, sem lei da maioria) e as **internacionais**, no 10×10 com 20 peças. O Linu joga nas três.',
      '**Trilha**: a **de 12 peças**, com as 4 diagonais (tabuleiro cheio na colocação é empate), e a **Lasker**, de 10 peças, em que dá para colocar ou mover desde o começo.',
      '**Ligue 4 Pop Out**: solte uma peça ou tire uma sua de baixo. **Xadrez960**: cada partida sorteia a fileira de trás; o roque é tocar no rei e depois na torre. Os dois com o Linu.',
      '**Abalone**: a regra oficial continua a padrão, e o lance de lado agora aparece como **“andar de lado (não empurra)”**. Nova variante **Só em linha (regra da casa)**, que não é oficial.',
      '**Roleta**: a **americana** (0 e 00, a casa leva 5,26%) e a **francesa com “la partage”**. **Mancala (Kalah)**: a captura com a casa da frente vazia e 6 sementes por casa.',
    ],
  },
  {
    v: '22.26',
    date: '2026-10-15 13:44',
    title: 'Minicurso novo: Gíria gamer',
    items: [
      'O jeito de falar de quem joga videogame: GG, nerf, buff, noob, lag, camperar, gankar, grindar e mais, em 4 lições curtas — com a história de onde vêm termos como "1-Up", "metroidvania" e "tiltado".',
    ],
  },
  {
    v: '22.25',
    date: '2026-10-15 13:02',
    title: 'Jogos: escolha o tamanho do tabuleiro',
    items: [
      'Nos jogos em que o tamanho muda de verdade, dá para escolher, e o app lembra da escolha: **go** 9×9, 13×13 e 19×19; **gomoku** 15×15 e 19×19; **jogo da velha** 3×3 e 4×4 (quatro em linha); **reversi** 8×8 e 6×6; **Ligue 4** 6×5, 7×6, 8×7 e 9×7; **Quoridor** 9×9 e 7×7 (o Quoridor Kid, com 8 paredes cada).',
      'O Linu se ajusta a cada tamanho: no 4×4 da velha ele dá nota às linhas, e nos tabuleiros maiores pensa um lance a menos para continuar rápido.',
      'A ficha de cada jogo diz os tamanhos e de onde vêm.',
    ],
  },
  {
    v: '22.24',
    date: '2026-10-15 09:16',
    title: 'Bao jogável, a mancala de quatro fileiras',
    items: [
      '**Bao**, o jogo de semear da costa suaíli (Tanzânia, Quênia, Zanzibar): quatro fileiras de oito covas, a nyumba (a casa) e os kichwa. As regras seguem as de Zanzibar, transcritas por Alexander de Voogt.',
      'Duas fases: na **namua**, cada lance começa com uma semente da mão; na **mtaji**, com todas no tabuleiro. As sementes capturadas atravessam o tabuleiro e recomeçam num kichwa, e a semeadura continua volta após volta, tudo animado.',
      'Para começar, o **Bao la kujifunza** (o bao para aprender), sem a fase namua. A dois ou **contra o Linu**, em três níveis.',
    ],
  },
  {
    v: '22.23',
    date: '2026-10-15 09:15',
    title: 'Nim jogável',
    items: [
      '**Nim**: tire quantos palitos quiser de uma pilha só. Na versão normal, quem tira o último ganha; na misère, perde. Escolha as pilhas (3-4-5, a 1-3-5-7 do filme “O Ano Passado em Marienbad”) ou monte as suas.',
      'No difícil, o **Linu** joga perfeito, como o Nimatron de 1940. O botão “Por que o Linu ganha?” explica a soma nim, a conta em binário de Charles Bouton (1901).',
    ],
  },
  {
    v: '22.22',
    date: '2026-10-15 09:14',
    title: 'Alquerque jogável',
    items: [
      '**Alquerque**, o avô das damas: 12 peças de cada lado num tabuleiro 5×5 com diagonais, capturando por salto. As regras vêm do livro de jogos do rei Alfonso X, de 1283, e a ficha diz o que é reconstrução moderna.',
      'Escolha a regra do livro (anda para qualquer lado, capturar é opcional) ou as regras de Bell (captura obrigatória, sem andar para trás). A dois ou **contra o Linu**.',
    ],
  },
  {
    v: '22.21',
    date: '2026-10-15 09:13',
    title: 'Hnefatafl e damas: o rei e a dama sempre à vista',
    items: [
      'O rei do hnefatafl agora tem sempre um aro dourado e uma coroa, com qualquer exército ou coleção da loja: antes, em alguns visuais, ele ficava igual aos defensores.',
      'A dama das damas ganha o mesmo selo quando o exército ou a coleção não mostram a coroa dela.',
    ],
  },
  {
    v: '22.20',
    date: '2026-10-15 09:10',
    title: 'Mongol: o sotaque padrão aparece marcado ao escolher o dialeto',
    items: [
      'Ao escolher "Mongol da Mongólia", nenhum dos sotaques (Khalkha, Oirat) aparecia marcado, mesmo o texto do dialeto já dizendo que o padrão do curso é o khalkha. Agora o khalkha aparece selecionado de cara.',
    ],
  },
  {
    v: '22.19',
    date: '2026-10-15 09:00',
    title: 'Tutorial: "Próximo" pisca vermelho se a pessoa fica parada',
    items: [
      'Se a pessoa fica 10 segundos sem trocar de passo no tutorial, o botão "Próximo" começa a piscar vermelho, chamando atenção — mesmo truque já usado na tela da sprint.',
    ],
  },
  {
    v: '22.18',
    date: '2026-10-15 08:13',
    title: 'Expedição: capitais pequenas ficam fáceis de tocar',
    items: [
      'Em países grandes, a região certa de uma capital (Buenos Aires, Paris, Moscou, Oslo, Luanda, Kazan, Kaliningrado, Dakar) aparecia quase um pontinho no mapa do país inteiro, difícil de acertar com o dedo. A área de toque agora tem um tamanho mínimo, sem aumentar o que aparece na tela — não entrega a resposta, só facilita acertar quem já sabe onde é.',
    ],
  },
  {
    v: '22.17',
    date: '2026-10-15 08:04',
    title: 'Kōnane jogável, o jogo havaiano de saltar pedras',
    items: [
      '**Kōnane**, do Havaí: o tabuleiro começa cheio de pedras pretas (basalto) e brancas (coral); depois da abertura, toda jogada é um salto em linha reta, e perde quem não tem salto. Tabuleiros de 6×6, 8×8 ou 10×10.',
      'Dá para jogar a dois ou **contra o Linu**, em três níveis. A ficha conta a história, do Kumulipo ao papamū de pedra, e o que se sabe do nome.',
    ],
  },
  {
    v: '22.16',
    date: '2026-10-15 08:03',
    title: 'Mū tōrere jogável, o primeiro jogo da Oceania',
    items: [
      '**Mū tōrere**, o jogo maori da estrela de 8 pontas: 4 peças de cada lado, sempre um ponto vazio, e perde quem não pode mover. Dá para jogar a dois ou **contra o Linu**, em três níveis; no difícil ele conhece o jogo inteiro e não erra.',
      'As fontes não concordam sobre a regra do centro: você escolhe entre a mais comum (só nas primeiras jogadas) e a de R. C. Bell (sempre). A ficha conta a história, o que se sabe do nome e onde as fontes divergem.',
    ],
  },
  {
    v: '22.15',
    date: '2026-10-15 08:02',
    title: 'Xadrez tailandês (makruk) jogável',
    items: [
      '**Xadrez tailandês (makruk)**: o tabuleiro de uma cor só, os bia na 3ª fileira, o met e o khon que andam uma casa, e o bia que vira bia ngai (de cabeça para baixo) na 6ª fileira.',
      'As contagens de honra do fim de jogo estão lá: a do tabuleiro (até 64) e a das peças, com o limite que depende do que sobrou. A contagem aparece na tela.',
      'Dá para jogar a dois ou **contra o Linu**, em três níveis. A ficha conta de onde vem o jogo, o ouk do Camboja e os “sutras”.',
    ],
  },
  {
    v: '22.14',
    date: '2026-10-15 08:01',
    title: 'Xadrez coreano (janggi) jogável',
    items: [
      '**Xadrez coreano (janggi)**: o tabuleiro sem rio, os palácios com as diagonais e as peças octogonais de tamanhos diferentes, com 漢 e 楚 nos generais. Antes do primeiro lance, cada lado escolhe a arrumação dos cavalos e elefantes.',
      'O canhão só anda pulando uma peça (e não pula canhão), dá para passar a vez, e o bikjang, os generais frente a frente, acaba a partida pelos pontos, com o 덤 de 1,5 para o vermelho.',
      'Dá para jogar a dois ou **contra o Linu**, em três níveis. A ficha conta a história do jogo na Coreia e de onde vem o nome.',
    ],
  },
  {
    v: '22.13',
    date: '2026-10-15 04:09',
    title: 'Bagh-chal jogável',
    items: [
      '**Bagh-chal (tigres e cabras)**, do Nepal: 4 tigres contra 20 cabras, que entram uma por vez. O tigre captura saltando e vence com 5 capturas; as cabras vencem quando prendem os 4 tigres.',
      'Depois que todas as cabras entraram, não vale repetir uma posição. O salto aparece na tela e, se os tigres ficarem presos, eles piscam no fim.',
      'A dois ou **contra o Linu**, escolhendo o lado: os tigres ou as cabras.',
    ],
  },
  {
    v: '22.12',
    date: '2026-10-15 04:08',
    title: 'Jogo da onça jogável',
    items: [
      '**Jogo da onça (adugo)**, do povo Bororo e de outros povos indígenas do Brasil: a onça contra 14 cachorros, no tabuleiro de alquerque com a toca triangular. A onça captura saltando e vence com 5 capturas; os cachorros vencem quando a encurralam.',
      'A onça pode saltar vários cachorros seguidos e parar quando quiser. O salto aparece na tela, o cachorro capturado some num estouro e, se a onça ficar presa, ela pisca no fim.',
      'A dois ou **contra o Linu**, e dá para escolher o lado: a onça ou os cachorros.',
      'A ficha conta o que as fontes dizem do jogo, de onde vem o nome “adugo” e os jogos parecidos dos Andes e do Chile.',
    ],
  },
  {
    v: '22.11',
    date: '2026-10-15 04:07',
    title: 'Pontinhos (Timbiriche) jogável, com o Linu',
    items: [
      'O jogo dos pontinhos, descrito por Édouard Lucas em 1889, saiu do “em breve”: trace um traço entre dois pontos; quem fecha um quadradinho fica com ele e joga de novo. Grade de 2×2 a 5×5 quadradinhos.',
      'O traço é desenhado na tela e o quadradinho é pintado na cor de quem fechou. As dicas mostram o traço que fecha e o que dá o terceiro lado. O Linu difícil conhece o “double-cross”.',
    ],
  },
  {
    v: '22.10',
    date: '2026-10-15 04:06',
    title: 'Hex jogável, com o Linu',
    items: [
      'O Hex, inventado por Piet Hein (1942) e de novo por John Nash (1948), saiu do “em breve”: ligue os seus dois lados do losango com uma corrente de pedras. No Hex não existe empate.',
      'Tabuleiro de 9×9, 11×11 (o padrão) ou 13×13, e a regra da troca para tirar a vantagem de quem começa. Contra o Linu, em três níveis, ou a dois. A corrente vencedora brilha no fim.',
    ],
  },
  {
    v: '22.9',
    date: '2026-10-15 03:54',
    title: 'Qomet jogável',
    items: [
      '**Qomet** (Fabrice Puleo, Gigamic, 2025): no tabuleiro da trilha de 12 peças com uma casa no centro, cada um tem 7 estrelas. Ponha uma estrela ou deslize uma das suas, até na diagonal, empurrando a estrela da frente. Ganha quem forma um quadrado de 4 estrelas da sua cor, mas quem forma o quadrado do outro sem querer dá a vitória a ele.',
      'Do quadrado de fora, setas tiram a estrela do tabuleiro, e ela volta para a mão. A dois ou **contra o Linu**, em três níveis.',
    ],
  },
  {
    v: '22.8',
    date: '2026-10-15 03:38',
    title: 'Jogos de tabuleiro: de onde vem o nome',
    items: [
      'A ficha de cada jogo de tabuleiro ganhou a seção “De onde vem o nome”, logo depois da história: a palavra de origem, o que ela quer dizer e como chegou ao português. Xadrez vem do sânscrito, passando pelo persa e pelo árabe; “Othello” é homenagem a Shakespeare; e, quando ninguém sabe ao certo (como no “jogo da velha”), a ficha diz isso.',
    ],
  },
  {
    v: '22.7',
    date: '2026-10-15 03:31',
    title: 'Qawale jogável, com o Linu',
    items: [
      'O filtro “quando” dos jogos ganhou a época Século XXI: Quantik (2019), Squadro (2018), Qawale (2022) e Encantados (2016) saíram do Século XX.',
      'O Qawale, da Gigamic (Romain Froger e Didier Lenain-Bragard, 2022), saiu do “em breve”: ponha a sua pedra numa pilha e espalhe a pilha, uma pedra por casa, como numa mancala. Vence quem deixar 4 pedras suas à vista em linha.',
      'Você escolhe casa por casa onde cada pedra cai, e vê a pilha que ainda está na mão. Dá para jogar a dois ou contra o Linu, em três níveis; a semeadura dele aparece pedra por pedra.',
    ],
  },
  {
    v: '22.6',
    date: '2026-10-15 03:30',
    title: 'Squadro jogável, com o Linu',
    items: [
      'O Squadro, da Gigamic (Adrián Jiménez Pascual, 2018), saiu do “em breve”: 5 barcos de cada lado cruzam o tabuleiro e voltam, cada um na velocidade marcada na beira. Quem passa por cima de um barco do adversário manda ele de volta. Vence quem fizer a ida e volta com 4 barcos.',
      'Dá para jogar a dois ou contra o Linu, em três níveis. Os barcos deslizam pelo trilho, e os saltados voltam para trás.',
    ],
  },
  {
    v: '22.5',
    date: '2026-10-15 03:28',
    title: 'Gamão: a soma dos dados num toque só',
    items: [
      'No **gamão**, ao tocar numa peça, as marcas mostram também as **somas** dos dados (3+5 = 8; numa dupla de 4, também 8, 12 e 16), com um anel branco. Escolher uma soma move a peça num toque só, e ela passa pelas paradas do meio na animação.',
      'As regras não mudam: a parada do meio não pode ser um ponto fechado, e continuam valendo o máximo de dados, o dado maior, a barra e a retirada. O Linu também joga assim.',
      'O gamão ganhou o curso **“Aprenda a jogar”**, com seis lições curtas, e a ficha conta de onde vem o nome do jogo.',
    ],
  },
  {
    v: '22.4',
    date: '2026-10-15 03:26',
    title: 'Pylos jogável',
    items: [
      '**Pylos** (David G. Royffe, Gigamic, 1994): os dois montam juntos uma pirâmide de 30 bolas. Ponha uma bola da reserva, ou suba uma sua para poupar; com um quadrado da sua cor, pegue 1 ou 2 bolas de volta. Quem põe a bola do topo vence, e quem fica sem bolas perde.',
      'A pirâmide aparece vista de cima, com as bolas de cima maiores e com sombra; a bola sobe deslizando e as tiradas rolam para fora.',
      'Três jeitos de jogar, da regra oficial: para crianças (sem o quadrado), normal e para experientes (linhas também valem). A dois ou **contra o Linu**, em três níveis.',
    ],
  },
  {
    v: '22.3',
    date: '2026-10-15 03:25',
    title: 'Quixo jogável',
    items: [
      '**Quixo** (Thierry Chapeau, Gigamic, 1995): tire um cubo da borda, vire com o seu símbolo e devolva empurrando a fileira. Ganha quem faz cinco em linha, mas quem forma a linha do adversário perde.',
      'A fileira desliza na tela quando o cubo entra, e setas mostram por onde ele pode voltar.',
      'Dá para jogar a dois, **contra o Linu** (três níveis) ou a quatro, em duplas, com a ponta do símbolo que diz qual parceiro joga cada cubo.',
    ],
  },
  {
    v: '22.2',
    date: '2026-10-15 03:11',
    title: 'Lazer › Cartas: Encantados',
    items: [
      '**Encantados**, de Fel Barros e Sheamus Parkes (Ace Studios), em Jogos de cartas: junte as raças no seu jardim, use os poderes de cada uma e jogue contra o Linu, em três níveis. As cartas são desenhos do app, e a ficha conta de onde vem cada criatura (kobolds, leprechauns, fogos-fátuos, mímicos…).',
      'Onde o manual não é claro, a regra escolhida aparece escrita no próprio texto da regra.',
    ],
  },
  {
    v: '22.1',
    date: '2026-10-15 03:06',
    title: 'Shadowing: ouvir a própria gravação',
    items: [
      'Depois de gravar a voz no Shadowing, um botão novo ("▶ Ouvir minha gravação") toca de volta o que você falou, pra se ouvir e comparar com o modelo.',
    ],
  },
  {
    v: '22.0',
    date: '2026-10-15 02:55',
    title: 'Lazer: Hanafuda e roleta estreiam',
    items: [
      'No Perfil, a área “🎲 Jogos” agora se chama **Lazer** e tem sete subáreas, como Naturais e Artificiais em Idiomas: Tabuleiro, Cartas, Azar, Brincadeiras, Esportes, Videogames e RPG. Em Tabuleiro ficam os jogos de tabuleiro de sempre; o RPG chega em breve.',
      'Cartas se divide em Jogos de cartas, Cartomagia, Cardistry, Colecionismo e Cartomancia (estes quatro, em breve).',
      '**Hanafuda**: o baralho japonês das flores que a Nintendo fabrica desde 1889, no jogo Koi-Koi contra o Linu. São 48 cartas, os yaku com pontos e a escolha entre parar e dizer “koi-koi”.',
      '**Roleta**: a roleta europeia, só com fichas de mentira. Ela mostra a chance de cada aposta, a vantagem da casa (2,7%) e um gráfico do saldo esperado e do real. Nada vale dinheiro nem prêmio.',
      'Cada jogo tem a história, de onde vem o nome, as regras, as variantes e as fontes. O tutorial apresenta as áreas novas.',
    ],
  },
  {
    v: '21.24',
    date: '2026-10-15 02:53',
    title: 'Loja do Linu: itens na mão não cortam mais',
    items: [
      'A quena e mais 10 itens que o Linu segura (tabuleiro de xadrez, nai, matriochka, abanico, frevo, coração de Natal dinamarquês, djembê, uchiwa, papel picado e lanterna chinesa) passavam um pouco da borda do desenho e ficavam cortados. Ajustado sem mudar o visual, só a margem.',
      'Teste novo confere, pra toda peça nova que o Linu segurar, se o desenho continua inteiro dentro da área visível.',
    ],
  },
  {
    v: '21.23',
    date: '2026-10-15 02:50',
    title: 'Lazer › Videogames: o Pong, de 1972',
    items: [
      'Nova área Videogames, que estreia com o Pong: fundo preto, traços brancos e placar em blocos, como em 1972, ou com as cores do app. Jogue contra o Linu (fácil, médio ou difícil) ou a dois no mesmo aparelho, cada um na sua metade da tela.',
      'No celular, arraste o dedo; no computador, use W e S, as setas ou o mouse. O bipe é opcional, e o jogo pausa sozinho quando você sai da tela.',
      'A história conta quem fez o Pong e mostra que ele não foi o primeiro videogame: antes vieram o OXO (1952), o Tennis for Two (1958) e o Spacewar! (1962). O Pong foi o primeiro grande sucesso.',
    ],
  },
  {
    v: '21.22',
    date: '2026-10-15 02:48',
    title: 'Quantik jogável',
    items: [
      '**Quantik** (Nouri Khalifa, Gigamic, 2019): cada um tem 2 esferas, 2 cilindros, 2 cubos e 2 cones. Ganha quem completa uma linha, coluna ou região com as 4 formas diferentes, mas não vale pôr uma forma onde o adversário já tem essa forma. E quem fica sem lance perde.',
      'As formas são desenhadas em madeira clara e escura, e as dicas marcam as casas em que a forma escolhida pode entrar.',
      'A dois ou **contra o Linu**: o jogo é pequeno, e no difícil ele calcula a partida até o fim a partir do meio do jogo.',
    ],
  },
  {
    v: '21.21',
    date: '2026-10-15 02:19',
    title: 'Chapéu de nacho com guacamole, na Loja do Linu',
    items: [
      'No Perfil, a área “🎲 Jogos” agora se chama **Lazer** e tem sete subáreas, como Naturais e Artificiais em Idiomas: Tabuleiro, Cartas, Azar, Brincadeiras, Esportes, Videogames e RPG. Em Tabuleiro ficam os jogos de tabuleiro de sempre; o RPG chega em breve.',
      'Cartas se divide em Jogos de cartas, Cartomagia, Cardistry, Colecionismo e Cartomancia (estes quatro, em breve).',
      '**Hanafuda**: o baralho japonês das flores que a Nintendo fabrica desde 1889, no jogo Koi-Koi contra o Linu. São 48 cartas, os yaku com pontos e a escolha entre parar e dizer “koi-koi”.',
      '**Roleta**: a roleta europeia, só com fichas de mentira. Ela mostra a chance de cada aposta, a vantagem da casa (2,7%) e um gráfico do saldo esperado e do real. Nada vale dinheiro nem prêmio.',
      'Cada jogo tem a história, de onde vem o nome, as regras, as variantes e as fontes. O tutorial apresenta as áreas novas.',
    ],
  },
  {
    v: '21.20',
    date: '2026-10-15 02:06',
    title: 'Quarto jogável',
    items: [
      '**Quarto** (Blaise Müller, Gigamic, 1991): você coloca a peça que recebeu e escolhe a peça que o adversário vai colocar. Ganha quem completa uma fileira de 4 peças com algo em comum: altas, baixas, claras, escuras, redondas, quadradas, maciças ou furadas.',
      'As 16 peças são desenhadas em perspectiva, para ver a altura, a cor, a forma e o furo até no celular. Com as dicas, as peças que dão a vitória ao adversário ganham um “!”.',
      'Dá para ligar a variante avançada (quadrados 2×2 também valem) e a regra oficial do anúncio: quem não diz “Quarto!” pode ver o adversário anunciar no lugar dele.',
      'A dois ou **contra o Linu**, em três níveis; no difícil, ele vê o fim da partida.',
    ],
  },
  {
    v: '21.19',
    date: '2026-10-14 23:58',
    title: 'Cachecol: trocar pra uma cor já ganha',
    items: [
      'No Cofre de Vocabulário e na Loja do Linu, dá para escolher usar uma cor de cachecol mais antiga entre as que você já ganhou naquele idioma — é só visual, o progresso real continua subindo por trás e a troca não passa para os outros idiomas.',
    ],
  },
  {
    v: '21.18',
    date: '2026-10-14 23:51',
    title: 'Amarelinha e esgrima, para as novas áreas de jogos',
    items: [
      '**Amarelinha** (Brincadeiras): jogue a pedrinha mirando e acertando a força, pule com um pé nas casas simples e dois nas duplas, sem pisar na casa da pedra, vire no céu e pegue a pedra na volta. Pisar na linha passa a vez. A dois ou contra o Linu, que pula pelo desenho; partida completa (até a 10) ou curta (até a 5).',
      'A ficha da amarelinha conta o que se sabe da origem (a história dos soldados romanos é só lenda), de onde vem o nome e os nomes pelo mundo: hopscotch, marelle, rayuela, Himmel und Hölle, jogo da macaca e, no Brasil, academia, maré, macaca, sapata, avião.',
      '**Esgrima** (Esportes): duelo de florete contra o Linu numa pista, até 5 toques. Avançar, recuar, atacar com afundo, parar e contra-atacar, com a regra de prioridade simplificada (o ataque vence o contra-ataque, quem para ganha a riposta, dois ataques juntos não marcam).',
      'A ficha da esgrima traz a história (olímpica desde 1896, FIE fundada em Paris em 1913), por que os termos são em francês, e a espada e o sabre como variantes.',
    ],
  },
  {
    v: '21.17',
    date: '2026-10-14 23:50',
    title: 'Damas chinesas jogáveis',
    items: [
      '**Damas chinesas**: a estrela de 6 pontas com 121 casas e 10 peças por jogador. Um passo ou uma cadeia de saltos, e você escolhe onde parar; cada salto anda na tela.',
      'Dá para jogar a dois, a três no mesmo aparelho ou **contra o Linu**, em três níveis.',
      'A ficha conta a história de verdade: o jogo é alemão (Stern-Halma, 1892), vem do Halma americano, e o nome “chinês” foi marketing nos Estados Unidos, em 1928.',
    ],
  },
  {
    v: '21.16',
    date: '2026-10-14 23:40',
    title: 'Xadrez japonês (shogi) jogável',
    items: [
      '**Xadrez japonês (shogi)**: o tabuleiro de 9×9, as peças pentagonais com kanji, a promoção na zona e as peças capturadas na mão, que voltam ao jogo (com o nifu e o uchifuzume).',
      'Dá para jogar a dois ou **contra o Linu**, em três níveis.',
      'Para quem não lê kanji: peças com o movimento desenhado, com o kanji ou com uma letra.',
      'A ficha conta a história do jogo, da era Heian ao Meijin, e as variantes: minishogi, dōbutsu shōgi, chu shogi e as partidas com vantagem.',
    ],
  },
  {
    v: '21.15',
    date: '2026-10-14 23:36',
    title: 'Pacote de chance: preço sobe a cada compra',
    items: [
      'O pacote de chance (🎁) custava sempre 🦐 20; agora o preço sobe 5 krill a cada pacote que você já abriu (20, 25, 30…), pra não ficar fácil demais ganhar roupinha de brinde repetindo o pacote.',
    ],
  },
  {
    v: '21.14',
    date: '2026-10-14 22:49',
    title: 'Nenhuma peça de exército repetida entre exércitos',
    items: [
      'Auditei todos os exércitos: o cavalo do México, da Rússia, da Índia e da China não usam mais o mesmo desenho dos Vikings nem um do outro; a arara do Brasil e a muralha da China (no lugar do pagode, que já era do Japão) também ganharam desenho próprio.',
      'Na loja, as quatro coleções de mancala por país perderam o nome do jogo real (viram jogos jogáveis à parte em breve) e passam a se chamar só pelo lugar: Mancala indiano, centro-asiático, filipino e caribenho — o visual continua o mesmo.',
    ],
  },
  {
    v: '21.13',
    date: '2026-10-14 22:30',
    title: 'Gamão jogável',
    items: [
      '**Gamão (backgammon)**: os dados rolam na tela, a dupla joga quatro vezes, a peça batida vai para a barra e entra de novo pela casa do adversário, e no fim as peças saem para a bandeja.',
      'O app segue a regra de usar o maior número de dados possível (e o dado maior quando só um cabe) e conta no fim se foi vitória simples, gamão ou backgammon. O cubo de dobrar ficou de fora.',
      'Dá para jogar a dois ou **contra o Linu**, em três níveis: no difícil, ele pensa também na sua melhor resposta para cada rolagem.',
      'A ficha conta a história, do nard persa ao nome inglês de 1647, e as variantes: tavla turca, tavli grego (portes, plakoto e fevga), nardy e hypergammon.',
    ],
  },
  {
    v: '21.12',
    date: '2026-10-14 22:25',
    title: 'Jogos: animação nos tabuleiros que estavam parados',
    items: [
      'Oware e Mancala (Kalah): a semeadura agora acontece semente a semente, cova por cova, com o som do tabuleiro, e as sementes capturadas voam para o depósito (ou para o placar, no oware). O Linu espera a sua semeadura terminar antes de jogar.',
      'Jogo da velha, Ligue 4 e gomoku: a linha vencedora acende peça por peça e pulsa; na velha, o risco é desenhado de ponta a ponta.',
      'Abalone: a bolinha empurrada para fora rola para além da borda e some, com um estouro. Octi: a peça capturada encolhe e some, e a peça que ganha um prong dá um pulo.',
      'Tudo respeita a opção “Animações” do Personalizar.',
    ],
  },
  {
    v: '21.11',
    date: '2026-10-14 21:59',
    title: 'Sprint: toque na palavra/imagem não sai mais do app sem querer',
    items: [
      'O crédito da foto/ícone, que aparece embaixo da imagem quando o cartão já está virado, podia "vazar" o toque para o cartão por cima: às vezes isso abria o link do crédito (e, no celular, saía do app) quando a intenção era só virar a carta de novo ou continuar.',
    ],
  },
  {
    v: '21.10',
    date: '2026-10-14 21:54',
    title: 'Tutorial: botão certo em "Próximo", nunca mais "Pular"',
    items: [
      'Nos passos do tutorial que sugerem uma ação de verdade (fazer um sprint, abrir o álbum, treinar o alfabeto…), o botão principal dizia "Pular" — agora diz sempre "Próximo", porque ele nunca pulou o tutorial inteiro, só avança um passo.',
    ],
  },
  {
    v: '21.9',
    date: '2026-10-14 21:53',
    title: 'Dominó jogável nos Jogos do conhecimento',
    items: [
      'O dominó de 28 pedras (duplo-seis) agora dá para jogar: contra o Linu (fácil, médio ou difícil) ou a dois no mesmo aparelho, com a mão de quem não joga escondida.',
      'Compra do monte, passe, jogo trancado com contagem de pontos e partida até 50, 100 ou 150 pontos.',
      'A linha de pedras faz curvas para caber no celular, e a pedra desliza da mão até a ponta. Quatro estilos de pedra na personalização.',
      'História do dominó chinês até a chegada à Itália no século XVIII, e três variantes: em duplas, All Fives e o dominó chinês.',
    ],
  },
  {
    v: '21.8',
    date: '2026-10-14 21:41',
    title: 'Exércitos: cavalo do México diferente do Japão, borda da lhama mais fina',
    items: [
      'O cavalo do exército do México (Mariachi) não é mais idêntico ao do Japão: cada um usa o desenho de um artista diferente do game-icons.net.',
      'A lhama do exército dos Andes ganhou uma borda mais fina, proporcional ao desenho dela (mais detalhado que o normal) — não abafa mais os traços finos.',
    ],
  },
  {
    v: '21.7',
    date: '2026-10-14 21:34',
    title: 'Tutorial: tela inteira pisca no aviso de gesto repetido, "ok" clicável',
    items: [
      'Na parte do tutorial que ensina os gestos da sprint (o pinguim), repetir o mesmo movimento 4 vezes seguidas agora faz a **tela inteira** piscar vermelho, não só um texto pequeno dentro do cartão.',
      'O "— ok" desse aviso agora é um botão de verdade: tocar nele reinicia a demonstração.',
    ],
  },
  {
    v: '21.6',
    date: '2026-10-14 21:20',
    title: 'Mancalas de países',
    items: [
      'Na loja, quatro coleções novas para o oware e o Kalah (as duas compartilham a escolha): **Mancala indiano** (tabuleiro de metal, conchas de búzio), **Mancala centro-asiático** (tabuleiro de madeira, pedrinhas), **Mancala filipino** (tabuleiro de madeira em forma de barco, conchas de búzio) e **Mancala caribenho** (tabuleiro de madeira, as sementes “nickernut”).',
    ],
  },
  {
    v: '21.5',
    date: '2026-10-11 21:10',
    title: 'Consertos: linhas dos tabuleiros e peças do Ligue 4',
    items: [
      'As linhas do go, do gomoku, da trilha, do fanorona e do xadrez chinês voltaram a aparecer: no navegador, o fundo do tabuleiro ficava por cima delas.',
      'As peças do Ligue 4 não somem mais depois de cair: no navegador, o buraco da grade ficava por cima da peça.',
      'As animações das peças agora sempre terminam no lugar certo, mesmo quando o aparelho atrasa os quadros.',
    ],
  },
  {
    v: '21.4',
    date: '2026-10-11 20:00',
    title: 'Exércitos em mais jogos e coleções novas',
    items: [
      'No go, no gomoku, no reversi, na trilha e no fanorona, dá para ligar **“Usar o exército escolhido também neste jogo”**: as peças levam a figura do exército, e no da Antártida aparecem os bichos.',
      '**Jogo da velha**: o X e o O em quatro jeitos, clássico, giz, pincel ou néon.',
      '**Quoridor**: paredes de madeira, pedra, gelo ou cerca viva.',
      '**Xadrez chinês**: mais dois estilos de peça, madeira e pedra.',
      'Na loja, duas coleções novas: **Fanorona de pedra e concha** e **Abalone de bolinhas de gude**.',
    ],
  },
  {
    v: '21.3',
    date: '2026-10-11 19:10',
    title: 'Exército da Antártida e cinco exércitos de países',
    items: [
      'Novo exército grátis da **Antártida**: o Linu é o rei, e a turma dele vira as outras peças. A Jubi é a dama, o Bolota a torre, o Vento o bispo, a Malhada o cavalo e o Kiko o peão.',
      'Cinco exércitos novos na loja:',
      '— **Índia**: tigre, lótus, palácio, elefante, cavalo e naja;',
      '— **China**: dragão, panda, pagode, lanterna, cavalo e arroz;',
      '— **Grécia antiga**: louros, coruja de Atena, templo, ânfora, cavalo de Troia e elmo espartano;',
      '— **Rússia**: urso, matriosca, Catedral de São Basílio, bétulas, cavalo e pinheiro;',
      '— **Andes**: condor, poncho, montanhas, siku, lhama e batata.',
      'Pacotes novos: Índia, China, Grécia antiga, Rússia e Andes, cada um com o exército, o tabuleiro do país e, no da Índia, o Ligue 4 açafrão e verde.',
    ],
  },
  {
    v: '21.2',
    date: '2026-10-11 18:20',
    title: 'Seis temas novos de países e cores para todos os jogos',
    items: [
      'Seis tabuleiros novos na loja dos jogos, cada um com a moldura desenhada: **Rangoli da Índia**, **Tecido andino** (Peru), **Khokhloma russa**, **Cerâmica de Iznik** (Turquia), **Bojagi coreano** e **Bordado ucraniano**.',
      'O **Ligue 4** ganhou personalização: a cor das fichas, a cor da grade e três coleções na loja (verde-amarelo do Brasil, cerejeiras do Japão e açafrão e verde da Índia).',
      'O **Quoridor**, o **Abalone**, o **Octi** e o **jogo da velha** agora deixam escolher o par de cores das peças. O par de sempre fica marcado com ★.',
      'No go, no gomoku, no reversi, na trilha e no fanorona, dá para escolher a cor das peças de cada jogador.',
    ],
  },
  {
    v: '21.1',
    date: '2026-10-11 17:45',
    title: 'Xadrez chinês (xiangqi) jogável',
    items: [
      '**Xadrez chinês (xiangqi)**: o tabuleiro com o rio e os palácios e as peças com os caracteres chineses. Ao tocar numa peça, aparece o nome dela e como ela anda.',
      'Dá para jogar a dois ou **contra o Linu**, em três níveis.',
      'A ficha tem a história do jogo, da dinastia Tang à Song do Sul, e as variantes: xadrez manchu, banqi e o Jogo dos Três Reinos.',
      'Personalização: as peças em estilo **clássico**, **jade** ou **laca**, além dos temas de tabuleiro.',
    ],
  },
  {
    v: '21.0',
    date: '2026-10-11 17:10',
    title: 'Fanorona e Mancala (Kalah) jogáveis',
    items: [
      '**Fanorona**, o jogo de Madagascar: 22 peças de cada lado num tabuleiro de linhas com diagonais, e captura por aproximação ou por afastamento. Depois de capturar, a mesma peça pode seguir capturando. Tem a história da lenda do rei Ralambo, as regras e as variantes.',
      '**Mancala (Kalah)**, a mancala com os dois depósitos nas pontas: quem termina a semeadura no próprio depósito joga de novo.',
      'Dá para jogar os dois a dois no mesmo aparelho ou **contra o Linu**, em três níveis.',
      'Personalização nova das mancalas (oware e Kalah): o **tabuleiro** (madeira, ébano, bambu, pedra ou barro, cada um com o seu som) e as **sementes** (sementes, feijões, búzios, pedrinhas ou bolinhas de vidro).',
    ],
  },
  {
    v: '20.7',
    date: '2026-10-11 16:05',
    title: 'Cor das peças em todos os exércitos',
    items: [
      'Os exércitos dos jogos (deserto, piratas, fauna, flora, calaveras…) também ganharam a **escolha de cor**, como as peças clássicas. O padrão continua sendo a cor natural de cada exército, marcada com ★.',
      'Se os dois jogadores usarem o mesmo exército, as cores parecidas com a do outro jogador ficam bloqueadas, para nunca confundir as peças.',
    ],
  },
  {
    v: '20.6',
    date: '2026-10-11 15:40',
    title: 'Fanarts do Linu',
    items: [
      'Nova página **Fanarts do Linu**, no perfil, logo abaixo do tutorial. A primeira é “O Linu na unha”, de **Mabelle Caminha**, com as três fotos juntas numa faixa que rola para o lado. Toque numa foto para ver grande.',
    ],
  },
  {
    v: '20.5',
    date: '2026-10-11 15:20',
    title: 'Ache os amigos do Linu',
    items: [
      'Os 12 **amigos do Linu** se esconderam pelo app: na trilha, no Cofre, na Gramática, no Mapa, no Diário e em outros lugares. Na página dos amigos, cada um mostra só a dica de onde está.',
      'Ao achar um, aparece uma comemoração com “Parabéns, você achou…”, e ele passa a aparecer na página dos amigos com a foto, a descrição e os fatos.',
      'No **Álbum de figurinhas**, “Comida, folclore e mais” agora abre para o lado: um cartão por categoria, para arrastar da direita para a esquerda, como na Cultura.',
    ],
  },
  {
    v: '20.4',
    date: '2026-10-11 14:45',
    title: 'Congelamento explicado, e dá para comprar',
    items: [
      'Toque no 🔥 no topo da trilha (ou em “congelamentos”, no perfil) para entender o **congelamento**: o que ele faz, como ganhar mais e a opção de **comprar um por 10 krill**.',
      'Cada congelamento agora protege um dia sem estudo: com 2 guardados, dá para ficar até 2 dias sem estudar sem perder a ofensiva. Antes, só um dia era coberto.',
      'O topo da trilha mostra quantos congelamentos você tem, ao lado da ofensiva.',
    ],
  },
  {
    v: '20.3',
    date: '2026-10-11 14:20',
    title: 'Passaporte com capa nova e perfil mais enxuto',
    items: [
      'A capa do **Passaporte de conquistas** ficou arredondada, com o contorno dourado dos passaportes, e virou o botão de abrir e fechar. Ele começa fechado.',
      'Os detalhes de cada carimbo (o que falta e o prêmio) abrem num **pop-up**.',
      'A seção **Acessibilidade** do perfil também abre e fecha, começando fechada.',
    ],
  },
  {
    v: '20.2',
    date: '2026-10-11 13:55',
    title: 'Tabuleiros sem pulo e o Ligue 4',
    items: [
      'O tabuleiro não cresce nem diminui mais quando o Linu está pensando: a linha de aviso tem sempre a mesma altura e a animação de entrada que às vezes se repetia saiu. Vale para todos os jogos.',
      'O Conecta 4 agora se chama **Ligue 4**, e o texto conta que ele nasceu nos Estados Unidos como Connect Four.',
      'A personalização mostra só o que vale para cada jogo: o Ligue 4 e o oware não oferecem temas de tabuleiro, e dicas, último lance e coordenadas só aparecem nos jogos que os usam. A loja segue a mesma regra.',
    ],
  },
  {
    v: '20.1',
    date: '2026-10-11 12:40',
    title: 'Modo desenvolvedor: krill e loja liberada para testar',
    items: [
      'No modo desenvolvedor (3 toques em “Apagar meu progresso”), dois botões novos: **ganhar 200 krill de teste** e **desbloquear toda a loja**, com as roupinhas do Linu e todos os temas, tabuleiros e peças dos jogos.',
      'Conserto: “Apagar meu progresso” agora zera também o krill gasto em pacotes de chance e as roupinhas ganhas neles. Antes, o krill podia ficar negativo depois de apagar.',
    ],
  },
  {
    v: '20.0',
    date: '2026-10-11 12:20',
    title: 'Passaporte de conquistas e as áreas do LinuLingo',
    items: [
      'Novo **Passaporte de conquistas** no perfil: 22 carimbos do app inteiro, como dias seguidos, lições, idiomas, cursos completos, histórias, figurinhas e vitórias nos jogos. Toque num carimbo para ver o que falta.',
      'Conquista **Jogador mundial**: vença uma partida com cada tema de tabuleiro e o Linu ganha um tabuleiro de xadrez para segurar.',
      'O perfil agora tem as **áreas do LinuLingo**: Idiomas (naturais e artificiais, como antes), Jogos, e Música e Psicologia, que ainda vão chegar.',
      'O **tutorial** mostra as novidades: os jogos do conhecimento, o Ampliar, a personalização, o passaporte e as áreas do perfil.',
      'O penúltimo passo do tutorial é o **apoio ao projeto**, e quem pula o tutorial também passa por ele antes de começar.',
    ],
  },
  {
    v: '19.0',
    date: '2026-10-11 11:48',
    title: 'Jogos do conhecimento: tudo novo, com temas do mundo',
    items: [
      'Três jogos novos: **Go** (9×9, com contagem e komi), **Gomoku** (cinco em linha) e **jogo da velha**, que vem com o primeiro curso “Aprenda a jogar”, com desafios no tabuleiro.',
      'Todos os tabuleiros ganharam visual novo: peças desenhadas, contraste melhor, animações (a peça desliza, as capturas estouram, a vitória comemora) e som próprio de cada tabuleiro.',
      'Dá para jogar **contra o Linu** no xadrez, nas damas, no Conecta 4, no reversi, no oware, no gomoku e na velha, em três níveis, ou continuar a dois no mesmo aparelho. Todo jogo tem **desfazer**.',
      'Novo botão **Ampliar**: o tabuleiro grande por cima da tela, com o fundo desfocado.',
      'A aba de jogos foi reorganizada: grade com ícones, agrupada por tipo, época ou lugar, e filtros “quando” e “onde”.',
      '**Personalize**: o tema do tabuleiro, o exército de cada jogador (no xadrez, o cavalo vira camelo no deserto e o rei vira onça na fauna do Brasil), as cores das peças, as dicas, as coordenadas, o clima animado (pétalas no Japão, chuva em Londres…) e o som.',
      '**Loja dos jogos**, com krill: pacotes por tema (Brasil, México, Japão, Egito, Vikings, Piratas, Deserto, Reino Unido) ou cada peça separada, por jogo, jogador e tabuleiro.',
      'O Abalone ficou mais fácil: setas que apontam para onde as bolinhas vão, prévia do lance e confirmação. No Quoridor, a parede aparece em prévia antes de pôr.',
    ],
  },
  {
    v: '18.0',
    date: '2026-10-11 10:06',
    title: 'Mais 6 idiomas chegam ao A2 completo',
    items: [
      'Klingon, novial, judeu-espanhol (ladino), ladino das Dolomitas, amárico e iorubá chegam ao **A2 completo**, com vocabulário, gramática e histórias novas.',
      'Cada um passou por um revisor de fontes que conferiu palavra por palavra e corrigiu o que não tinha fonte.',
    ],
  },
  {
    v: '17.1',
    date: '2026-10-11 03:15',
    title: 'Mirandês e mongol na escrita tradicional viram dialeto de verdade',
    items: [
      'Na aba Cultura, escolher o mirandês dentro do asturiano (ou a escrita tradicional dentro do mongol) troca para o curso dele sem parecer que você foi para outro lugar. A tela mostra os dialetos do idioma, com o seu marcado, e os sotaques do curso.',
      'Escolher outro dialeto volta ao curso do idioma principal, já com o dialeto escolhido. O mirandês é o primeiro dialeto com trilha própria.',
      'Saiu o quadro “Este curso também aparece em”, e o texto do mongol no Perfil ficou curto e direto.',
    ],
  },
  {
    v: '17.0',
    date: '2026-10-10 16:53',
    title: 'Sete cursos novos: as famílias esquimó-aleúte e quéchua',
    items: [
      'Novos cursos no A1: **inuktitut** (no silabário e em letras latinas), **inupiaque**, **iúpique do Alasca central**, **aleúte** (com a escrita em cirílico de Bering) e **alutiiq**.',
      'Do lado do quéchua: **kichwa** do Equador e **quéchua de Áncash**, cada um com os dialetos dele. O quéchua do sul passou a funcionar como família, com ligações entre os cursos.',
    ],
  },
  {
    v: '16.0',
    date: '2026-10-10 13:14',
    title: 'Dialetos, sotaques e escritas revistos em todos os idiomas',
    items: [
      'Todos os idiomas foram revistos: cerca de 50 dialetos novos, sotaques de dezenas de idiomas (da África, da Ásia, do Pacífico, do Cáucaso e das línguas regionais da Europa) e as escritas de quem tem mais de uma (sérvio, uzbeque, bielorrusso).',
      'Escolher um dialeto que tem curso próprio leva o app inteiro (trilha, cofre e histórias) para ele.',
      'Corrigido: no Perfil, trocar o dialeto do idioma que já está aberto não trocava de verdade.',
    ],
  },
  {
    v: '15.1',
    date: '2026-10-10 02:49',
    title: 'Mais 16 idiomas chegam ao A2 completo',
    items: [
      'Latim medieval, toscano antigo, francês antigo, eslavo eclesiástico antigo, castelhano medieval, alto-alemão médio, luxemburguês, interslavo, sardo, romanche, friulano, interlíngua, volapük, toki pona, lojban e ido chegam ao **A2 completo**.',
    ],
  },
  {
    v: '15.0',
    date: '2026-10-09 20:31',
    title: 'Mais 20 idiomas sobem de nível, do A1 pro A2 completo',
    items: [
      'Basco, macedônio, chinês mandarim, bielorrusso, bósnio, grego, albanês, armênio, híndi, bengali, georgiano, tailandês, árabe, persa, urdu, hebraico, télugo, marati, húngaro e tâmil saem do A1 e chegam ao **A2 completo** — vocabulário, gramática e histórias novas em cada um.',
      'Com essa leva, já são 64 idiomas levados do A1 ao A2 completo desde que essa faxina começou.',
    ],
  },
  {
    v: '14.1',
    date: '2026-10-09 19:56',
    title: 'Corrigido: o Perfil podia travar logo na primeira abertura',
    items: [
      'Abrir o Perfil nos primeiros instantes depois do app carregar podia travar a tela, porque ela tentava usar o conteúdo de um idioma que ainda estava carregando em segundo plano. Corrigido.',
      'O carregamento em segundo plano também ficou mais resistente: se um idioma falhar ao carregar (ex. sem internet num instante ruim), os outros continuam carregando normalmente, e aquele é tentado de novo depois.',
    ],
  },
  {
    v: '14.0',
    date: '2026-10-09 18:46',
    title: '26 idiomas sobem de nível, do A1 pro A2 completo',
    items: [
      'Somali, maltês, armênio ocidental, occitano, khmer, nórdico antigo, galego, latim, esperanto, inglês, indonésio, malaio, vietnamita, alemão, neerlandês, africâner, polonês, tcheco, búlgaro, sérvio, croata, esloveno, eslovaco, ucraniano, turco e uzbeque saem do A1 e chegam ao **A2 completo** — vocabulário, gramática e histórias novas em cada um, sempre com pesquisa real por trás.',
      'Continua a faxina começada na leva anterior: em vez de abrir idioma novo, o app leva os que já existem até onde a pesquisa confirma que dá pra chegar com rigor.',
    ],
  },
  {
    v: '13.0',
    date: '2026-10-09 14:13',
    title: 'O app abre mais rápido, principalmente pra quem é novo',
    items: [
      'A tela de escolher idioma e a primeira abertura do app não esperam mais o conteúdo inteiro (vocabulário, gramática, histórias) de todos os idiomas: cada um só carrega de verdade quando é escolhido, começando pelo que você estuda.',
      'Sem mudança no conteúdo nem no funcionamento de nenhuma lição — só na velocidade de abrir o app.',
    ],
  },
  {
    v: '12.1',
    date: '2026-10-09 13:43',
    title: 'Menos palavras com o cartão genérico de ilustração',
    items: [
      'Novas levas de ícones próprios e de acervo livre pra palavras abstratas, conectivos e conceitos de vários idiomas — o cartão (a palavra escrita, sem imagem) agora aparece bem menos vezes.',
      'Os últimos contrastes de texto abaixo do mínimo de acessibilidade foram corrigidos, e o cartão de idioma do tutorial não quebra mais em telas estreitas de celular.',
    ],
  },
  {
    v: '12.0',
    date: '2026-10-09 13:38',
    title: 'Sete jogos novos nos Jogos do conhecimento, com xadrez e damas jogáveis',
    items: [
      '**Xadrez** e **damas** agora são jogáveis de verdade, dois jogadores no mesmo aparelho, com todas as regras (roque, en passant, promoção, afogamento).',
      'Hnefatafl (tafl vikingue), trilha (jogo do moinho), conecta 4, oware e reversi/othello entram jogáveis também, cada um com a história e as regras reais.',
      'Mais 8 jogos (Go, gamão, damas chinesas, dominó, xiangqi, shogi, gomoku, fanorona) entram como "em breve".',
    ],
  },
  {
    v: '11.6',
    date: '2026-10-09 13:06',
    title: 'Dezoito idiomas sobem de nível, em vez de abrir idioma novo',
    items: [
      'Asturiano, frísio ocidental, alto-sorábio, hauçá, iídiche, zulu, uigur, javanês, malgaxe, panjabi, gaélico escocês, bretão, árabe egípcio, pashto, curdo sorani, tagalo, curmanji e mongol saem do nível A1 e chegam ao **A2 completo** — vocabulário, gramática e história novos em cada um.',
      'Essa é a primeira leva de uma faxina maior: em vez de abrir idioma novo, o app passa a levar os que já existem até o nível que a pesquisa (feita em cada idioma) já confirmou que as fontes sustentam.',
    ],
  },
  {
    v: '11.5',
    date: '2026-10-09 08:40',
    title: 'Abalone e Octi entram jogáveis nos Jogos do conhecimento',
    items: [
      'O **Abalone** agora é jogável de verdade: hexágono de 61 casas, empurrão por maioria (o "Sumito") e vitória tirando 6 bolinhas do adversário pra fora — dois jogadores no mesmo aparelho.',
      'O **Octi** também: tabuleiro 6×7, cada peça ganha movimento instalando "prongs" em até 8 direções, com saltos encadeados e captura opcional, peça por peça.',
      'O **Tsevhu** ganha um tópico novo de gramática: orações subordinadas.',
      'Corrigido um teste desatualizado que travava a publicação automática do site desde a entrada do jeju, sem ninguém notar — o app volta a publicar sozinho a cada mudança.',
      'Só falta o **xadrez** para fechar a lista de Jogos do conhecimento.',
    ],
  },
  {
    v: '11.4',
    date: '2026-10-09 04:02',
    title: 'Nove variações históricas fecham a fila, e mais dois idiomas isolados',
    items: [
      'O **toscano antigo** (o italiano de Dante) e o **árabe clássico/corânico** entram como variação histórica — com eles, fecha a fila de nove variações medievais/históricas do app: nórdico antigo, francês antigo, eslavo eclesiástico antigo, alto-alemão médio, castelhano medieval, copta, latim medieval, toscano antigo e árabe clássico.',
      'O **burushaski** (isolado do norte do Paquistão) e o **jeju** (ilha de Jeju, Coreia do Sul) entram no seletor de idiomas.',
    ],
  },
  {
    v: '11.3',
    date: '2026-10-09 00:30',
    title: 'Visual mais consistente, e mais seis idiomas',
    items: [
      'O **Cofre** passa a mostrar uma imagem só por palavra — nunca repetida — e um cartão desenhado pra palavra que não tem foto nem pictograma que faça sentido.',
      '1.547 conceitos ganham **ícone** de licença livre, e 1.804 palavras ganham **foto nova** do Wikimedia Commons.',
      'Contraste revisado (padrão **WCAG AA**) no modo claro e no escuro, em boa parte das telas do app.',
      '**Copta**, **checheno**, **abcázio**, **panjabi** (com a escrita Shahmukhi) e **latim medieval** entram no seletor — checheno e abcázio abrem a família "Caucasiano do norte".',
      'Perfil: os dialetos de um idioma (sueco, dinamarquês, islandês…) ficam **fechados até tocar**, em vez de aparecer todos abertos de uma vez.',
    ],
  },
  {
    v: '11.2',
    date: '2026-10-08 23:26',
    title: 'Bandeiras com brasão, semáforo completo e mais línguas construídas',
    items: [
      'Quebec, Sicília, Sardenha, Córsega e Bretanha ganham a **bandeira regional de verdade, com brasão** (Fleurdelisé, tríscele, Quatro Mouros, cabeça de mouro, Gwenn ha Du).',
      'O **semáforo de bandeiras** fecha as 26 letras (entraram P, W, X e Y).',
      '**Interslavo** ganha pacote completo; **sindarin, dothraki, lang belta, láadan e mando\'a** ganham minicurso — fecha a terceira leva de línguas construídas.',
      '**Mito de criação** chega a 10 países.',
      '**Tamazight** e **malgaxe** entram no seletor.',
    ],
  },
  {
    v: '11.1',
    date: '2026-10-08 22:13',
    title: 'Javanês e cantonês chegam, e o alfabeto de seis idiomas fica completo',
    items: [
      '**Javanês** (o idioma mais falado da Indonésia que ainda não tinha pacote) e **cantonês** entram no seletor.',
      '**Novial** ganha curso completo, terceira leva de línguas construídas.',
      'Sueco, norueguês, dinamarquês, islandês, estoniano e espanhol ganham o **alfabeto completo** (letra igual, falsa amiga e internacional), e hebraico/russo ganham uma nota sobre a letra cursiva.',
      '**Francês antigo** e **eslavo eclesiástico antigo** entram como variação histórica.',
    ],
  },
  {
    v: '11.0',
    date: '2026-10-08 21:43',
    title: 'Cada idioma termina onde a fonte real termina, e o Perfil aprende dialeto',
    items: [
      'A trilha e a aventura passam a terminar no **nível que o material real de cada idioma sustenta** (documentado idioma por idioma), em vez de prometer C2 pra todos sem fonte pra isso.',
      'Perfil: idioma com dois ou mais dialetos nacionais de verdade (português, romeno, francês, italiano, dinamarquês, finlandês, islandês, coreano, sueco) abre como **sub-curso** — escolher "português do Brasil" ou "de Portugal" direto — e a Cultura passa a mostrar só os sotaques daquele dialeto escolhido.',
      '**Catalão, basco e galego** ganham a bandeira regional de verdade (Senyera, Ikurriña, bandeira da Galiza) em "Línguas próprias", em vez da bandeira do país inteiro.',
    ],
  },
  {
    v: '10.11',
    date: '2026-10-08 19:40',
    title: 'O modo desenvolvedor ganha ferramentas',
    items: [
      'A página secreta (três toques em “Apagar meu progresso”) passou a mostrar **de qual versão** o app veio: o commit do GitHub (com link) e a hora em que o site foi montado. Também mostra **quanto conteúdo** existe no idioma atual e no app inteiro (idiomas, unidades, lições, palavras, histórias e tópicos de gramática).',
      'Atalhos de teste: ganhar 100 XP, **liberar todas as lições e travessias** do idioma de uma vez e rever o tutorial como na primeira visita, ao lado do botão de apagar o progresso de um idioma só.',
      'Diagnóstico do aparelho: sistema, navegador, tamanho da tela, qual voz do sistema foi escolhida para o idioma e se a voz neural do app já foi baixada. E dá pra **exportar o banco inteiro** num arquivo JSON legível.',
    ],
  },
  {
    v: '10.1',
    date: '2026-10-08 17:20',
    title: 'Jogo de verdade, álbum completo e o alfabeto na ordem da escola',
    items: [
      'O **Quoridor** deixou de ser “em breve”: dá pra jogar em dois no mesmo aparelho, com todas as regras (pular a peça do outro, paredes que nunca podem fechar o último caminho de ninguém) e 10 XP por vitória.',
      'O **Álbum** passou a reunir tudo de cada país num lugar só: além dos bichos e instrumentos, a comida, o folclore, as danças, as plantas, as brincadeiras, os gestos e o dinheiro. Os **Patrimônios da Humanidade** chegaram também a Brasil, Dinamarca, Finlândia, Noruega e Coreia do Sul, fechando todos os países que já têm ficha cultural.',
      'O **alfabeto** agora ensina as letras na ordem oficial, a que um nativo aprende na escola. A separação por categoria (letra igual, falsa amiga, nova) virou uma vista secundária. O card da trilha passou a se chamar **Sistema de escrita**, porque nem todo idioma usa alfabeto, e cada tipo de escrita (alfabeto, abjad, abugida, silabário) ganhou uma frase de abertura própria.',
      'Piloto de **voz por IPA** no romeno e no russo: quando não há gravação de um nativo, a voz lê a pronúncia exata do sotaque em vez do texto escrito.',
      'Ajustes: a figurinha rara da Expedição só vem quando as 3 paradas são acertadas de verdade; os cursos curtos deixaram de listar os idiomas que já ganharam trilha completa; as fotos dos Amigos do Linu e do álbum não são mais cortadas; e entrou a tela **Apoie este projeto**, com a chave PIX, no Perfil e no tutorial.',
    ],
  },
  {
    v: '10.0',
    date: '2026-10-08 14:21',
    title: 'Chegam os idiomas inventados',
    items: [
      'Pela primeira vez, idiomas construídos ganharam **trilha completa** (nível A1), e não só um curso curto: **esperanto, interlíngua, volapük, toki pona, lojban, ido e klingon**. Na aventura, os que não têm país desembarcam num destino honesto (“nenhum país”, ou “espaço (ficção)” no caso do klingon), em vez de um país inventado.',
      'Um **mapa para cada idioma construído**: o esperanto mostra as cidades reais dos congressos mundiais, de 1905 a 2025; o klingon, o quenya e o na’vi ganham um mapa estilizado dos seus mundos de ficção.',
      'Novos cursos curtos: o **silbo gomero**, o espanhol assobiado de La Gomera (um “canal” de uma língua que já existe, e não uma língua própria), e o **Basic English** de Ogden. Em “Secretas e cifras”, os **códigos** (morse, alfabeto da OTAN, cifra de Bacon, semáforo) viraram uma categoria própria.',
      'Na Cultura, a aba **Sistemas de escrita** agrupa todos os idiomas pela escrita que usam, com a história de cada uma, e ensina a **pontuação** típica de cada escrita. O espanhol e o japonês ganharam uma lição de pontuação. Também na Cultura, a aba **Jogos do conhecimento** estreou com a história das damas.',
      'As **fotos do vocabulário** foram todas refeitas em 512 px, sem cortar nada. Antes, um recorte quadrado de 256 px cortava a borda ou a cabeça de quase toda foto que não era quadrada.',
    ],
  },
  {
    v: '9.4',
    date: '2026-10-08 04:25',
    title: 'Acessibilidade, sotaques e os Patrimônios da Humanidade',
    items: [
      'Novas opções de **acessibilidade** no Perfil: alto contraste, texto mais espaçado, voz mais devagar, Sprint sem limite de tempo e foco do teclado sempre visível.',
      'O quiz **“qual é o seu sotaque?”** deixou de ser só do português: agora vale também para espanhol, romeno e russo, com perguntas tiradas dos traços de cada sotaque já documentados. E a nova aba **Dialetos** lista todos os dialetos do app, o que muda em cada um e por quê.',
      'O cartão de cada país no mapa ganhou os **Patrimônios da Humanidade (UNESCO)**, com o ano de inscrição, em 22 países.',
      'O **nórdico antigo** entrou com as runas do Futhark Mais Recente. O treino de alfabeto passou a valer também para idiomas de escrita latina com letras próprias (romeno, sueco, norueguês, dinamarquês, estoniano), e no árabe cada letra mostra as 4 formas que ela toma dentro da palavra.',
      'O **cachecol** do Linu passou a seguir o vocabulário aprendido, pelas 22 cordas de graduação da capoeira. O Cofre mostra a contagem real de palavras do idioma, e as categorias dele abrem ao toque. O Linu de lado ganhou roupa, chapéu e objeto na mão, fechando a pendência da v8.0.',
    ],
  },
  {
    v: '9.3',
    date: '2026-10-08 01:21',
    title: 'Variante, dialeto e sotaque deixam de ser a mesma caixa',
    items: [
      'Até agora "variante" misturava três coisas diferentes: bokmål/nynorsk (outra ESCRITA da mesma língua), português de Portugal (outro PAÍS) e o carioca/nordestino (outra PRONÚNCIA). Agora cada um tem o seu lugar: **variante** é escrita diferente, **dialeto** é país/região com diferença documentada, **sotaque** é pronúncia dentro do mesmo lugar. O painel de variantes e o de sotaques passaram a mostrar o rótulo certo em vez de um "variante" genérico pra tudo.',
      'O **chinês mandarim** ganhou a escrita **tradicional** e o **pinyin romanizado** como variantes do mesmo pacote — exatamente o mesmo mecanismo que já separava o mongol tradicional do cirílico, só que agora reaproveitado em vez de reinventado.',
    ],
  },
  {
    v: '9.2',
    date: '2026-10-08 00:35',
    title: 'A palavra da lição conta mais sobre si mesma',
    items: [
      'Tocar numa palavra, dentro de uma lição, agora abre uma ficha rápida com a tradução e, quando existir, a classe gramatical e o gênero. Quando aquela palavra específica já aparece num exemplo ou tabela de algum tópico de gramática do idioma, a ficha mostra esse trecho também — nunca uma flexão inventada: sem exemplo catalogado, mostra só a tradução. Na Imersão o botão só aparece depois de resolvido, pra não entregar a resposta antes da hora.',
    ],
  },
  {
    v: '9.1',
    date: '2026-10-07 23:58',
    title: 'Uzbeque chega, e três escritas ganham romanização',
    items: [
      '**Uzbeque** entra no seletor: alfabeto latino oficial (a reforma de 28 letras aprovada em setembro de 2026), vocabulário, gramática e histórias com fonte conferida.',
      '**Lao, armênio ocidental e árabe** ganham leitura romanizada de verdade (o sistema ALA-LC de cada um) — eram os três últimos pacotes de escrita não-latina que ainda não tinham essa pista pra quem não lê o alfabeto nativo. O treino de alfabeto automático passou a valer pra eles também, sem nenhum código extra: ele já lia o campo de romanização de qualquer pacote, só faltava os três preencherem.',
    ],
  },
  {
    v: '9.0',
    date: '2026-10-04 12:57',
    title: 'A casa em ordem antes de crescer de novo',
    items: [
      'LICENSE publicada (direitos reservados do app, com as licenças de terceiros de cada áudio/imagem), e o README passou a listar os 160 idiomas de verdade, gerado direto do app (`scripts/tabela-idiomas.mjs`) em vez de escrito à mão — e por isso parar de ficar desatualizado.',
      'Entrou o **modo desenvolvedor secreto** (três toques em "Apagar meu progresso") e a aba Atualizações saiu do Perfil pra ficar à parte.',
      'Regras de XP mais justas: produzir (escrever, falar) passou a valer 1,5× o normal, a revisão do dia vale o dobro, e repetir a mesma lição depois da 3ª vez no dia passa a valer a metade — pra sobra de tempo não virar sobra de pontos.',
      'O Linu em pixel art ganhou cachecol redesenhado e roupas/chapéus com volume e sombra, em vez do visual chapado de antes.',
    ],
  },
  {
    v: '8.1',
    date: '2026-10-02 22:39',
    title: 'Cada desembarque ganha a sua casa',
    items: [
      'As moradias do Linu passaram a mudar com a aventura: barraca no início, estação de pesquisa, refúgio, navio na travessia do Drake e, ao desembarcar no país do idioma estudado, uma casa própria daquele lugar — romena, andaluza, toscana por enquanto, desenhadas no mesmo estilo pixel art da barraca.',
    ],
  },
  {
    v: '8.0',
    date: '2026-10-02 21:48',
    title: 'A trilha vira a Antártida',
    items: [
      'A faixa de subníveis deu lugar a um **mapa de aventura** vertical: o Linu sai da colônia dele na Ilha Meia-Lua, desce a Península Antártica, cruza o Drake e desembarca no país do idioma — com o contorno do país de verdade desenhado na terra.',
      'A prova de fim de unidade virou **travessia**: rádio só em áudio, decisões de diálogo, lacunas e uma conversa por voz, tirados do próprio conteúdo da unidade, com 80% pra passar — bem mais perto de um desafio de verdade do que de um teste de múltipla escolha.',
      'O abrigo ganhou visual em **pixel art** com o Linu dentro, luz que muda com o relógio (dia, sol da meia-noite, noite com aurora), e objetos tocáveis que levam direto a cada parte do app (mural → expedição, caderno → diário, rádio → conversa, cabideiro → loja, estante → álbum).',
      'E o Linu em pixel art passou a ter roupa de verdade nas poses de frente e de costas — a de lado (andando) ainda ficou pra trás, sem roupa, registrado como pendência.',
    ],
  },
  {
    v: '7.0',
    date: '2026-10-02 02:03',
    title: 'As escritas do mundo',
    items: [
      'O mongol ganhou a escrita vertical tradicional (de cima pra baixo, lida da esquerda pra direita) ao lado da cirílica moderna, e o manchu entrou com a escrita que nasceu dela — o app aprendeu a desenhar texto na direção vertical (`writing-mode: vertical-lr` na web), não só da direita pra esquerda.',
      'Georgiano, armênio, grego, os cirílicos (russo, ucraniano, bielorrusso, búlgaro, macedônio, sérvio, mongol), devanágari, télugo, bengali, khmer, tailandês e tâmil passaram a ter romanização (o campo que mostra como ler em letras latinas, acima do IPA) — cada um no seu sistema oficial, não uma transliteração genérica.',
      'E um bug sutil ficou resolvido: quando um texto em português cita uma palavra em escrita da direita pra esquerda (árabe, hebraico…) mais de uma vez no mesmo parágrafo, o algoritmo de direção de texto do navegador reordenava as FRASES EM PORTUGUÊS ao redor da citação. A correção isola cada trecho RTL em marcadores Unicode invisíveis (o mesmo truque que a Wikipédia usa) — o português ao redor para de dançar.',
    ],
  },
  {
    v: '6.1',
    date: '2026-10-01 02:21',
    title: 'Catorze idiomas do zero, e prioridade pras línguas indígenas',
    items: [
      'Corso, aragonês, valão, vêneto, napolitano, siciliano, frísio ocidental, baixo-alemão, scots, suíço-alemão, bielorrusso, bósnio, alto-sorábio e cassubiano entraram do zero, todos até A1.2.',
      'A partir daqui, as línguas indígenas brasileiras passaram a ter prioridade sobre o resto da fila — pedido direto de quem mantém o projeto.',
    ],
  },
  {
    v: '6.0',
    date: '2026-09-29 00:41',
    title: 'A fila de idiomas cresce',
    items: [
      'Entraram 28 idiomas registrados até A1 (galego, asturiano, occitano, sardo, romanche, friulano, latim, ladino, inglês, indonésio, vietnamita, iorubá, luxemburguês, búlgaro, sérvio, croata, esloveno, basco e outros) — cada um com vocabulário, currículo, gramática, histórias e extras no mesmo padrão dos idiomas completos, só mais curto.',
      'As árvores genealógicas das línguas artificiais (quenya/sindarin, alto-valiriano, esperanto→ido→novial, brithenig, loglan→lojban) entraram na aba Cultura → Tipos de línguas.',
    ],
  },
  {
    v: '5.1',
    date: '2026-09-28 12:01',
    title: 'Catalão, basco e galego com pacote próprio',
    items: [
      'Até aqui catalão, basco e galego apareciam só dentro do pacote do espanhol — ganharam pacote próprio, por serem línguas com identidade e gramática próprias, não dialetos do espanhol.',
    ],
  },
  {
    v: '5.0',
    date: '2026-09-28 04:56',
    title: 'Línguas que não se falam como as outras',
    items: [
      'Nova aba "Tipos de línguas" na Cultura: artificiais, formais, de contato, controladas e por modalidade — e dentro dela, **línguas de sinais**: Libras com avatar VLibras de verdade, mais ASL, BSL, LSF e LGP, e Braille como sistema de escrita tátil.',
      'Oito línguas artificiais novas entraram, e os 17 minicursos (versão mais leve que uma trilha completa, pra idiomas sem material pra um curso inteiro) ficaram todos prontos.',
    ],
  },
  {
    v: '4.4',
    date: '2026-09-27 22:15',
    title: 'Francês completo',
    items: [
      '4.314 palavras, trilha, gramática, 57 histórias, IPA e as variantes da francofonia (não só a França) — o quinto idioma a fechar o ciclo completo.',
    ],
  },
  {
    v: '4.3',
    date: '2026-09-27 20:07',
    title: 'Islandês e finlandês completos, e "qual é o seu sotaque?"',
    items: [
      'Os dois com cerca de 4.200 palavras, trilha, gramática, 48 histórias, sotaques e IPA.',
      'As línguas próprias e indígenas ganharam abas dedicadas na Cultura, e entrou o quiz "Qual é o seu sotaque?" em português.',
    ],
  },
  {
    v: '4.2',
    date: '2026-09-27 07:13',
    title: 'Sueco e português de Portugal completos, e o som vira de verdade',
    items: [
      'Português de Portugal chegou com norma culta própria (não é o pt-BR com sotaque trocado) e 4.616 palavras; sueco completo com 4.254.',
      '"Adivinhe o som" passou a usar gravações reais de bichos e instrumentos do Wikimedia Commons, em vez de qualquer efeito genérico.',
    ],
  },
  {
    v: '4.1',
    date: '2026-09-27 05:20',
    title: 'Pares mínimos e o caderno de erros',
    items: [
      'Treino de pares mínimos (palavras que só diferem num som, tipo "pata" e "bata") e um caderno que guarda os erros de cada um pra revisar depois, em vez de deixá-los se perderem na lição seguinte.',
    ],
  },
  {
    v: '4.0',
    date: '2026-09-27 04:35',
    title: 'O app sai do navegador',
    items: [
      'LinuLingo passou a ser instalável como **PWA** e a funcionar **sem internet** depois da primeira abertura — até aqui, fechar a aba ou perder o sinal significava perder o que estava em jogo.',
    ],
  },
  {
    v: '3.1',
    date: '2026-09-27 02:33',
    title: 'Sotaques e dialetos de verdade',
    items: [
      '18 sotaques do espanhol, 5 do romeno e 8 do russo, cada um com minimapa de onde se fala — e a primeira abertura do app ficou 3× mais rápida, semeando só o idioma escolhido em lotes, em vez de tudo de uma vez.',
    ],
  },
  {
    v: '3.0',
    date: '2026-09-27 02:00',
    title: 'Nome novo, mundo inteiro no mapa',
    items: [
      '**LinuLingo** é o nome — "Poliglota" era só o nome de trabalho. Logo e Linu animado novos.',
      'Espanhol e italiano completos (trilha, gramática, histórias, falsos amigos, sotaques e IPA cada um), e o mapa-múndi passou a cobrir todos os idiomas do CLDR (700+), não só os que o app ensina.',
    ],
  },
  {
    v: '2.1',
    date: '2026-09-26 20:46',
    title: 'Linguística vira aula de verdade',
    items: [
      '13 aulas gerais de linguística mais 7 áreas específicas (fonética, morfologia…) aplicadas ao romeno e ao russo — até aqui a aba de linguística era mais curiosidade solta do que curso.',
    ],
  },
  {
    v: '2.0',
    date: '2026-09-26 17:39',
    title: 'O motor aprende a trocar de idioma',
    items: [
      '**Russo completo**, do A1.1 ao C2 — o segundo idioma a fechar o ciclo inteiro, depois do romeno. E foi fazendo o russo que o motor da lição deixou de ter romeno escrito no meio do código: regras de fonética, teclado e histórias passaram a ser **por idioma**, não fixas, abrindo caminho pra qualquer idioma novo entrar sem reescrever o motor.',
    ],
  },
  {
    v: '1.1',
    date: '2026-09-26 10:54',
    title: 'Primeiro passo no ar',
    items: [
      'A versão web publicada no GitHub Pages — até aqui o app só existia rodando localmente.',
    ],
  },
  {
    v: '1.0',
    date: '2026-09-26 01:04',
    title: 'O Linu dá as boas-vindas',
    items: [
      'Nasce o Poliglota (ainda sem o nome LinuLingo): **romeno completo do A1 ao B1**, com o mascote **Linu**, um pinguim-de-barbicha — a primeira versão a existir de ponta a ponta.',
    ],
  },
];
