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
