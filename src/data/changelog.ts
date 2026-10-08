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
