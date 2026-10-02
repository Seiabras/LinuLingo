# Pendências (atualizado em 01/10/2026)

Este arquivo diz onde o trabalho de conteúdo parou. Tudo mencionado aqui como "feito" já está
commitado.

## Feito até 01/10/2026
- **Amigos do Linu** (`/amigos`): 5 pinguins (Tobias, Duque, Dedé, Pipo, Topete) e 7 vizinhos do
  gelo (Wendel, Bolota, Malhada, Jubi, Kiko, Vento, Floco), todos ilustrados no mesmo estilo do
  Linu (não são fotos). Tem atalho na Home e no Perfil.
- **28 idiomas registrados só com o A1**: gl, ast, oc, sc, rm, fur, la, lad, en, id, vi, yo, lld,
  de, nl, af, pl, cs, sk, uk, tr — e, desde 30/09/2026, lb (luxemburguês), bg (búlgaro), sr
  (sérvio), hr (croata), sl (esloveno) e eu (basco). Todos testados no navegador com
  `scripts/fluxo-incompletos.mjs`.
- **Árvores genealógicas das línguas artificiais** (Cultura → Tipos de línguas → Artificiais):
  quenya/sindarin, alto valiriano, esperanto→ido→novial, brithenig, loglan→lojban — conferidas no
  navegador em 30/09/2026, sem erro de console.
- **mk (macedônio), rup (arromeno) e zh (chinês mandarim): completos até A1.2** (01/10/2026) —
  eram os "pela metade"; agora têm vocabulário, currículo, gramática, histórias e extras, iguais
  aos outros 28 "só A1". Testados no navegador.
- **14 idiomas novos do zero até A1.2** (01/10/2026): corso, aragonês, valão, vêneto, napolitano,
  siciliano, frísio ocidental, baixo-alemão, scots, suíço-alemão (dialeto de Zurique), bielorrusso,
  bósnio, alto-sorábio, cassubiano — todos criados com a receita de "pacote novo" abaixo, vocabulário
  verificado por busca, testados no navegador. O iídiche (yi) e o árabe (ar) ficaram de fora por
  exigirem escrita da direita pra esquerda, que o app ainda não suporta.
- **Mudanças de UI pedidas pelo Matheus Vega (= o dono do app)** (01/10/2026): trilha subiu pro
  topo da Home; gesto de arrastar no tutorial avança sozinho; tocar na figurinha nova abre ela
  direto no álbum com som; escala de risco das línguas indígenas (e do mapa) usa os nomes da
  UNESCO; nova tela "🗓️ Atualizações" no Perfil (changelog gerado do git, hora de São Paulo);
  figurinha agora é por sorte (50%), não mais toda atividade; tela de recompensa da lição mostra a
  meta de XP do dia; aviso de que "enviar pra nativos" ainda é só local, sem servidor.
- **Aspas « » trocadas por “ ”/‘ ’ no app inteiro** (30/09/2026, commit `325ecd21`): 546 arquivos,
  incluindo ~20 arquivos de serviço que usavam « » em regex (resposta do aluno, avisos de
  ortografia, extração de citação em histórias). Comentários de código continuam com « » (não é
  texto que o usuário vê). **Essa é a convenção de agora em diante**: citação de palavra usa “ ”;
  citação dentro de citação usa ‘ ’.
- **README e NotebookLM.md atualizados** com a lista real de idiomas (antes estavam bem
  desatualizados — nem listavam o catalão).

## Não começados
- **Românicos**: fechado (pms, lij, lmo, mwl, frp — todos integrados).
- **Germânico que falta**: yi (iídiche) — precisa de suporte a escrita direita-pra-esquerda no app
  antes de dar pra fazer (ver "RTL" abaixo).
- **Urálico**: fechado. Húngaro (hu) — pedido do Matheus em 02/10/2026 — **feito** (02/10/2026):
  mesma família do finlandês e do estoniano já no app (fi, et), mas ramo diferente (úgrico, não
  fino-permiano) e sem parentesco próximo com eles.
- **Família única**: fechado (el grego, sq albanês, hy armênio); ka (georgiano) em andamento —
  família cartveliana, sem parentesco com o indo-europeu, mas pedida pelo Matheus junto com a
  conferência abaixo. **Auditoria de família/ramo (01/10/2026)**: o Matheus notou grego, armênio e
  albanês parecendo "juntos" em Helênico no Perfil — na verdade cada um é mesmo o único ramo próprio
  dentro do indo-europeu (está certo, é assim que a linguística classifica os três); o bug era só
  visual: o acordeão escondia o nome do ramo quando só tinha 1 idioma, então vários ramos de 1 só
  ficavam parecendo um grupo só sem rótulo (corrigido). Conferi as famílias/ramos de todos os
  idiomas registrados contra a classificação de verdade (Glottolog/Ethnologue): não achei nenhum erro
  de fundo, só um nome de ramo impreciso no scots (dizia "Inglês" no lugar de "Ânglico" — corrigido;
  scots é parente do inglês, não veio dele). **Pergunta do Matheus (02/10/2026): dá pra adicionar mais
  línguas nessas famílias de um só idioma?** Resposta, pesquisada na Wikipédia em inglês: o helênico, o
  albanês e o armênio continuam sendo ramos de um só idioma dentro do indo-europeu — não existe uma
  "língua irmã" de ramo diferente para adicionar. Mas cada um tem variedades da MESMA língua que o
  ISO 639-3 trata como código próprio, por não serem inteligíveis com o padrão:
    - **grego**: tsaconiano (tsd) é o caso mais forte — descende do dórico antigo, não do coiné/ático
      como o grego padrão, não é inteligível com ele, e está criticamente ameaçado (poucas centenas de
      falantes fluentes, na região da Lacônia). Pôntico (pnt) e capadócio (cpg, hoje quase extinto, os
      falantes foram realocados para a Grécia na troca populacional de 1923) também têm código próprio
      por falta de inteligibilidade mútua; jevânico/judeu-grego (yej) tem código próprio por motivo
      étnico/cultural, não por falta de inteligibilidade. A linguística grega tradicional trata todos
      como dialetos do grego, não como línguas à parte — mas o ISO os separa.
    - **albanês**: gheg (aln) e tosk (als, base do albanês padrão já no app) são dialetos mutuamente
      inteligíveis com códigos próprios; arbëresh (aae, Itália) e arvanítico (aat, Grécia) são
      variedades de diáspora antigas (séculos de isolamento) com código próprio, mas ainda inteligíveis
      com o albanês padrão — mais parecido com o caso de um "sotaque"/variante do que com uma língua
      separada de verdade.
    - **armênio**: o caso mais claro de todos. O armênio ocidental (hyw) é tratado pelo ISO 639-3 como
      língua separada do armênio oriental padrão (hy, já no app) — 1,58 milhão de falantes, quase todos
      na diáspora (Líbano, Síria, França, EUA), sem nenhum país onde seja língua oficial, classificado
      como ameaçado pela UNESCO. Forte candidato a pacote próprio, pelo mesmo critério já usado aqui
      para separar guarani ñandeva/tapiete do guarani paraguaio.
  Armênio ocidental (hyw) e tsaconiano (tsd), os dois candidatos mais fortes, **feitos em 02/10/2026**.
  gheg/arbëresh/arvanítico ficam mais como ideia de "sotaque" dentro do pacote `sq` já existente do
  que como pacote novo — não começado.
- **Os 20 idiomas mais falados do mundo (pergunta do Matheus, 02/10/2026)**: conferido contra a
  tabela do Ethnologue 2026 (via Wikipédia, "List of languages by total number of speakers", L1+L2).
  18 dos 20 já têm pacote de verdade no app: inglês, chinês mandarim, híndi, espanhol, francês,
  bengali, português, indonésio, russo, alemão, japonês, vietnamita, suaíli, haussá, télugo e marati
  (os dois últimos feitos em 02/10/2026) completos ou em A1. Faltam 4:
    - **árabe padrão** (ar) e **urdu** (ur) — já tinham entrada placeholder em `idiomas.ts`, mas
      nenhum pacote de verdade: bloqueados por escrita direita-pra-esquerda (ver "RTL" abaixo).
    - **pidgin nigeriano** (pcm) — crioulo de base inglesa — **feito em 02/10/2026**.
    - **árabe egípcio** (arz) — variedade do árabe com código ISO 639-3 próprio (diferente do árabe
      padrão/moderno já citado acima); também bloqueado por RTL.
- **Asiáticos**: hi (híndi), bn (bengali), th (tailandês), km (khmer), lo (laosiano), te (télugo),
  mr (marati), ta (tâmil) e tl (tagalo, idioma filipino, não indiano, mas agrupado aqui por região —
  todos 02/10/2026) feitos. Falta: ur e fa (bloqueados por RTL, ver abaixo). Do Sudeste Asiático
  continental ainda falta my (birmanês) — ainda não confirmado, conferir documentação antes de
  começar.
- **Mongol (pedido do Matheus)**: **feito** como `mn` (02/10/2026), em escrita CIRÍLICA MODERNA (a
  oficial na Mongólia desde 1941/1946) — família mongólica própria, sem parentesco comprovado com o
  turcaico/tungúsico (hipótese "altaica" obsoleta). A escrita mongol vertical tradicional (ainda usada
  na Mongólia Interior, China) fica de fora por enquanto: é um problema de renderização à parte (texto
  de cima pra baixo), tratado separadamente das RTL — nenhuma das duas está resolvida ainda.
- **Indígenas**: tpw (tupi antigo), gn (guarani paraguaio), qu (quéchua sulenho), yrl (nheengatu),
  kgp (kaingang), tca (tikuna), xav (xavante), tuo (tukano), kpc (baniwa), ay (aimará), kgk (guarani
  kaiowá) e nah (náuatle) feitos; gun (guarani mbyá) e ka (georgiano, pedido à parte) feitos por outra
  sessão. **Nota de 01/10/2026, madrugada**: esta sessão rodou em paralelo com outra sessão do Claude
  Code no mesmo repositório — por isso os idiomas feitos vêm às vezes de um processo, às vezes de
  outro; sempre `git pull` antes de editar `idiomas.ts`/`conteudo.test.ts`/este arquivo, pra não
  divergir. **Pedido do Matheus Vega: dar prioridade às línguas indígenas brasileiras.**
  - **Família guarani**: gn (paraguaio), gun (mbyá), kgk (kaiowá/pãi-tavyterã) e, desde 02/10/2026,
    nhd (guarani ñandeva/avá guarani/chiripá) e tpj (tapieté) **feitos**, cada um com fonte própria —
    não são a mesma língua com nomes diferentes (nhd é especialmente próximo do mbyá, mas tem
    fonologia e documentação próprias; o lugar exato do tapiete dentro do ramo guarani é discutido
    entre linguistas — ver a nota em `src/data/tpj/index.ts`). Jopará (mistura guarani-espanhol do dia
    a dia) não é uma língua à parte, só uma nota no texto do `gn`. Ainda falta:
    - **guarani antigo**: **feito** como `gnw` (02/10/2026) — colonial, documentado por jesuítas
      (sobretudo Ruiz de Montoya, "Tesoro"/"Vocabulario de la lengua guaraní", 1639-40); língua
      histórica à parte, ancestral direto do `gn` de hoje e prima do tupi antigo (`tpw`).
  - huni kuĩ/kaxinawá: **feito** como `cbs` (código confirmado via ISO 639-3/Glottolog).
  - navajo: **feito** como `nv` (02/10/2026) — família na-dené, sem parentesco com as demais línguas
    indígenas americanas do app.
  - maori: **feito** como `mi` (02/10/2026).
  - havaiano: **feito** como `haw` (02/10/2026).
  - Todos exigem fonte para cada palavra: não inventar, e usar o empréstimo que a comunidade usa.
- **Africanos**: ha (haussá), ig (igbo), om (oromo) e am (amárico, ambos 02/10/2026) feitos. ar
  (árabe) continua bloqueado por RTL (ver abaixo).

### Pendência técnica: escrita da direita pra esquerda (RTL)
O app nunca precisou disso até agora (nenhum idioma atual é RTL). Árabe (ar) e iídiche (yi) estão
parados por causa disso — teclado, cloze, comparação de resposta e o layout geral assumem texto da
esquerda pra direita. Resolver isso (telas, `writingDirection`, o teclado virtual, o SM-2/cloze)
antes de começar esses dois.

### Como fazer um pacote novo
- Modelo: `src/data/rm/` e `src/data/lad/`. Para uma língua morta, veja `src/data/la/`; para uma
  escrita não latina, `src/data/ja/`, `src/data/ko/` e `src/data/uk/`.
- Estrutura:
  - 2 unidades (A1.1 e A1.2), cada uma com 2 lições de 6 palavras e 3 lacunas, mais uma prova;
  - 4 tópicos de gramática e 2 histórias;
  - extras: 3 textos da comunidade, 1 cenário, 5 etimologias, 4 temas do diário e 4 frases de shadowing;
  - `incomplete: { until: 'A1.2', note }`. A nota não deve dizer «sem transcrição fonética»: o app
    já lista isso sozinho.
- O validador `checkpack.mts` ficava no rascunho da sessão e se perde. Para recriá-lo:
  - estrutura 2/3/4/2 como acima;
  - toda palavra de lição existe no vocabulário e tem emoji;
  - a resposta da lacuna está entre as opções;
  - as histórias não têm galho sem saída.
  - Os testes em `src/data/conteudo.test.ts` já cobrem boa parte disso.
- Depois de registrar, rode:
  - `npm test`, `npx tsc --noEmit` e `npm run lint`;
  - `npx tsx scripts/fluxo-incompletos.mjs <códigos>`, com o servidor web rodando;
  - `npx tsx scripts/pictogramas-palavras.mjs`.

## Revisões pendentes
- **Achados da revisão externa de seiabras-b8 (02/10/2026, commit 969bbc86)**: (1) `genders` faltando
  em 12 pacotes caindo no padrão errado — **corrigido**. (2) Textos genéricos mencionando "gênero" em
  idiomas sem gênero (card "🏛️ Palácio" na Home, frase do tutorial "eu corrijo acentos, gênero e
  erros comuns", texto do Diário) — ainda não corrigido: esconder/trocar o texto quando
  `pack.genders?.length === 0`. (3) `reading` faltando em vários idiomas — ver item acima, em
  andamento. (4) Seletor de idioma no topo da Home abre o Perfil na primeira família da lista, sem
  rolar até a família do idioma atual nem ter busca — ainda não corrigido, menor prioridade.
- Revisar la, oc, en, id e vi como já foi feito com gl, ast e sc. Há dúvida sobre a etimologia de
  «nai» < matre(m), no galego.
- Atualizar o README (tabela de idiomas) e o NotebookLM.md com os idiomas incompletos.
- **Histórias: revisão "de história em história" (pedido do Matheus, 01/10/2026 de madrugada)** —
  ele notou em catalão e espanhol que o Linu, escrito em 3ª pessoa como protagonista, às vezes
  "decide" pelo jogador quem ele é/o que ele faz (o jogador só escolhe a fala do Linu, não é ele
  quem vive a cena). Decisão: NÃO reescrever tudo para 2ª pessoa — só ajustar os trechos em que isso
  fica mais forte (o personagem "decidindo" algo por conta própria em vez de esperar a escolha).
  Ainda não começado: precisa de uma passada por `historias.ts` de cada idioma (são muitos — os ~40
  "só A1" têm 2 cada, os completos (es, it, pt, fr, ru, sv…) têm bem mais) procurando esses trechos
  específicos, não uma reescrita geral.
- Suaíli: ~2.400 palavras, a meta é ~4.000. Os próximos lotes vão em `src/data/sw/vocab-17.ts` e seguintes.
- **Leitura romanizada (`reading`) pra idiomas de escrita não-latina — FECHADO em 02/10/2026** (pedido
  do Matheus, achado também pela revisão externa de seiabras-b8): o campo `reading` (mostrado acima
  do IPA, e nas opções de imersão/lacuna, pra quem ainda não lê a escrita do idioma) só existia em
  ja/ko/am. Agora todo pacote de escrita não-latina tem: georgiano (National System 2002/BGN-PCGN),
  armênio (apóstrofo de aspiração BGN-PCGN/ISO 9985), grego (ELOT 743), cirílico — russo, ucraniano,
  bielorrusso, búlgaro, macedônio, sérvio e mongol, cada um no seu sistema nacional, não um padrão
  genérico único —, devanágari (híndi e marati, com a regra de Ohala pro "a" do meio da palavra),
  télugo, bengali, khmer (consciente do registro A/O das consoantes), tailandês (RTGS, com a
  reordenação das vogais escritas antes da consoante) e, desde 02/10/2026 (achado pela revisão
  externa de seiabras-b8, que notou o tâmil sem nenhuma pista de pronúncia), tâmil — com a alofonia
  das 6 consoantes "duras" (வல்லினம்) implementada letra por letra (cada uma com sua própria regra de
  voicing por posição, verificada no Wikcionário; não é uma regra única pra todas). Todos com teste.
  Único que falta: mandarim (`zh`) — o pinyin já vem escrito à mão em cada palavra do vocabulário, mas
  não como `reading` computado de verdade; como é por caractere (não por som), precisaria de um
  dicionário hanzi→pinyin, não uma regra fonética como os outros — fica pra outra sessão.
- **Pendência de baixa prioridade (achado de seiabras-b8, 02/10/2026)**: bengali (`reading-bengali.ts`)
  tem o mesmo problema que o devanágari tinha antes da regra de Ohala — "কলকাতা" sai "kolokata" em
  vez de "kolkata" (schwa do meio da palavra sobrando); khmer (`reading-khmer.ts`) usa o mácron de
  forma inconsistente entre exemplos diferentes (alguns têm, outros não). Nenhum dos dois corrigido
  ainda — baixa prioridade.
- **"Secretas e cifras" (Cultura → Tipos de línguas) — pedido do Matheus em 01-02/10/2026**: nova aba
  com criptoletos (Pajubá, Verlan, Polari, Lunfardo), cifras fonéticas (Língua do P, Pig Latin,
  Javanais) e código morse, **feito em 02/10/2026** (commit `e2584261`). Revisão externa de
  seiabras-b8 achou 5 imprecisões factuais (base do Pajubá misturando banto com iorubá/jeje, data da
  descriminalização no Reino Unido pro Polari, origem do Verlan, data da revisão de Gerke no morse, e
  a Língua do P com regra/exemplo incoerentes) — **todas corrigidas** (commits `f08090aa` e
  `4d8a0fbb`, esse último depois de uma segunda rodada de revisão pegar que a correção da Língua do P
  tinha ficado inconsistente consigo mesma).
- **Microfone não funcionava nas lições (pedido do Matheus, 01/10/2026 às 16:20 por WhatsApp)**:
  investigado a fundo (Playwright, web, com permissão concedida/negada) — o mecanismo em si
  (`src/services/speech.ts`, Web Speech API) funciona; o problema real era que todo erro, menos
  "permissão negada", caía na mesma mensagem genérica de "falhou", incluindo os dois mais comuns na
  prática ("no-speech", sem detectar fala a tempo, e "audio-capture", sem microfone de verdade — bem
  comum em máquina de desenvolvimento Linux sem mic). **Corrigido em 02/10/2026** com mensagens
  específicas por código de erro (`src/services/recognition-error.ts`, novo, com teste). **Limitação
  que não é bug, e continua de fora**: no app nativo (Expo Go/build), não existe reconhecimento de
  voz nenhum (`Platform.OS !== 'web'` sempre volta `false`) — precisa de um módulo nativo de STT e
  um build de desenvolvimento, fora do alcance de uma sessão de CLI sem Xcode/Android Studio.

## Ideias de pesquisa externa (tipo Gemini, 30/09–01/10/2026 — lista completa, 6 itens)
Só anotar, não implementar ainda. Era uma lista numerada 1-6; os itens 3 e 4 chegaram primeiro
(entradas abaixo), depois o resto chegou de uma vez.
- **Item 1, ramificações eletivas na trilha**: a partir do B1.1, além da trilha principal linear,
  abrir "pontes eletivas" temáticas opcionais sem sair da progressão CEFR: ✈️ Viagens/burocracia
  (check-in, saúde, documentos); 💼 Profissional/negócios (entrevista, e-mail formal, reunião);
  🎭 Cultura/literatura (provérbios, regionalismos, história do séc. XX). Ideia: mantém motivação
  no "platô intermediário" (quando o aluno já sabe o básico e a progressão linear cansa).
- **Item 2, SRS visível na trilha ("nós de reparo")**: hoje o SM-2 só aparece no Vocab/Cofre e no
  sprint de 5 min; a ideia é mostrar o esquecimento na própria trilha — o ícone da unidade muda de
  cor/anima quando as palavras dela estão no ponto de esquecer ("a ponte da Unidade 2 precisa de
  manutenção"), e um "nó de reparo" rápido restaura e dá XP bônus. Força revisão ativa antes de
  esquecer de vez, em vez de só depois.
- **Item 5, checkpoints adaptativos dentro da lição**: ajustar a quantidade de exercícios pelo
  desempenho em tempo real — acerto rápido e sem hesitar encurta a lição; dificuldade num ponto
  gramatical específico insere um card extra de "Por que é assim?" antes de retestar.
- **Item 6, blocos de lançamento por família** (ordem sugerida pro roadmap de expansão, não uma
  mecânica nova): 🌲 nórdico/fínico (dinamarquês, islandês, feroês, finlandês, estoniano — JÁ TODOS
  completos no app, essa parte da sugestão está desatualizada); 🌏 asiático (japonês/coreano com
  kanji/hangul graduado e registro de polidez — também já completos); 🌍 africano (iorubá, amárico,
  suaíli). Vale só pro que ainda falta: amárico e os outros africanos da lista de "não começados".
- **Item 3, "Desafios de Chefe" (boss battles com o Linu)**: trocar a prova de fim de subnível
  (hoje valida antes de liberar o próximo, múltipla escolha) por um cenário de missão completa —
  ex.: resolver um imprevisto num aeroporto/hotel no fim da unidade de Viagens, misturando escuta
  de áudio real, decisão (estilo histórias interativas) e resposta por voz, com 80% para passar.
  Itens 1 e 2 da lista ainda não chegaram.
- **Guias de escrita/alfabeto na trilha principal**: pra idiomas de escrita não-latina (russo,
  japonês, coreano, amárico, iorubá…), ensinar o sistema de escrita já no começo do A1.1, dentro da
  própria trilha (não só como extra à parte) — «micro-nós de alfabetização»: cirílico + regra da
  tônica no russo; kana/hangul progressivos antes do vocabulário no japonês/coreano, restringindo
  romaji nos campos principais pra forçar a leitura nativa; marcas tonais no iorubá; caracteres
  ge'ez no amárico. Hoje o app já tem um pouco disso solto (treino do alfabeto russo em
  `pack.alphabet`/`/alfabeto`, IPA por regras/dicionário) mas não integrado À TRILHA logo no
  início — comparar com o que já existe antes de desenhar isso.
- **Visual «Antártica selvagem»**: paleta inspirada na luz polar de verdade (azul-marinho do
  oceano, branco neve texturizado, cinza rocha das ilhas antárticas tipo Deception/Elefante, tons
  quentes do sol da meia-noite/Aurora Austral); telas com cara de caderno de expedição/diário de
  naturalista (contornos suaves, mapas em linha fina, tipografia elegante); sons ambiente sutis
  (mar, vento nas geleiras, aves oceânicas reais) de fundo no estudo. Mudança de identidade visual
  grande — precisa decidir se é reskin geral ou só em telas específicas.
- **«O bando» no hábitat natural**: dar papel a bichos antárticos de verdade (não antropomorfizados
  fazendo tarefa de escritório, já tem «Amigos do Linu» em `/amigos` com 5 pinguins + 7 da fauna
  antártica, ver `src/data/amigos-linu.ts`) ligados a partes específicas do app: 🐧 pinguim-de-adélia
  nas lições de estrutura/gramática; 🦭 foca-de-weddell guiando escuta/história/cultura no mapa;
  🐦 petrel-das-neves ligando mapa, expedições e diário; 🐋 baleia-jubarte/orca nas travessias
  oceânicas da trilha (transição entre continentes/idiomas). Combinar com o visual «Antártica
  selvagem» acima — parecem a mesma reformulação temática maior, não ideias soltas.
- **Trilha como «rota de migração»**: em vez de caminho reto, desenhar a trilha como rota de
  navegação saindo da Antártica, atravessando o oceano e desembarcando nos biomas do idioma
  estudado (fiordes na Noruega, vales na Romênia, rios na Rússia…); os «Desafios de Chefe» (item
  acima) virariam «travessias oceânicas» no fim de cada subnível — ancorar na região nova depois de
  escutar áudio local, ajustar a fala e corrigir pontos fracos. Isso amarra os 3 itens anteriores
  (chefe/boss battle, visual antártico, bando no hábitat) numa reformulação temática só, não 4
  ideias separadas — vale esperar o resto da lista antes de avaliar o tamanho da mudança.
  - Proposta de paleta Tailwind pro tema «caderno de expedição» (cores `field.paper/darkpaper/
    border/darkborder/ink/amber/glacier` + fontes PlayfairDisplay/SpaceMono) — fica aqui pra
    quando/se o reskin acima for decidido; NativeWind já está no projeto (`tailwind.config.js` na
    raiz), então o formato bate com o que o app usa.
  - Proposta de um `FieldNotebookBackground.tsx` com `react-native-svg` desenhando linhas
    topográficas/coordenadas sutis de fundo (clima de mapa/caderno de campo) — o trecho de código
    colado veio incompleto (o corpo do componente e o JSX se perderam na colagem), só a ideia e os
    imports servem de referência; precisa ser escrito do zero quando for a hora.
  - Proposta de um `FieldGuideCard.tsx`: cartões de lição/animal/gramática como «ficha catalogada
    de diário de campo» (borda fina, carimbo de categoria tipo «FAUNA NATIVA» ou «GRAMÁTICA //
    B1.2», IPA, descrição).
  - Proposta de um `PageFlipTransition.tsx` (`react-native-reanimated`, `FadeInRight`/`FadeOutLeft`)
    pra passar entre as 6 etapas da lição com sensação de «folhear o caderno de campo».
  - **Aviso sobre os códigos colados**: nos últimos 3 (`FieldNotebookBackground`, `FieldGuideCard`,
    `PageFlipTransition`) só chegaram os imports e a assinatura da função — o corpo/JSX do retorno
    se perdeu na colagem toda vez. Parece ser um problema sistemático de onde o usuário está
    copiando (um documento que não exporta bem o bloco de retorno). Só a ideia de cada um é
    confiável; o código precisa ser escrito do zero quando for a hora de implementar.

## Pedidos do Matheus Vega (29–30/09/2026, por WhatsApp)
Lista bruta, ainda não implementada — fica aqui para não se perder. Itens com `❓` precisam de
mais detalhe do usuário antes de mexer em código.
- Status de ameaça das línguas indígenas: trocar para a escala (tipo UNESCO) **Não ameaçada,
  Vulnerável, Em perigo/Ameaçada, Severamente Ameaçada, Criticamente Ameaçada, Extinta**.
- **Esclarecido**: «enviar para nativos» é o botão «Enviar também para nativos» do Diário (e o
  `communityPrompt` das lições) — hoje ele só grava o texto no SQLite local
  (`submitToCommunity`); não existe destino de verdade (confirma a pendência #4, comunidade
  simulada). O botão promete mais do que entrega; talvez valha ajustar o texto pra deixar claro
  que é local por enquanto.
- **Esclarecido**: «cofre» é a própria aba Vocabulário — o título da tela é literalmente
  «⚡ Cofre de Vocabulário» (`src/screens/VocabScreen.tsx`). Não é outra coisa; falta saber o que
  exatamente não funcionou ao tentar entrar.
- No tutorial: ao arrastar o pinguim (gesto), avançar direto sem esperar outro toque.
- Palavras parecidas que confundem (ex.: mãe/manhã/manha, em português) viram um recurso pra
  ajudar a lembrar — decidir se é dentro do idioma estudado, do português, ou os dois.
- Melhorar a parte do XP (sem detalhe do que incomoda).
- Página inicial: subir a trilha para o topo.
- Tutorial: explicar mais com imagens/demonstração visual do que com texto.
- Álbum de figurinhas: ao tocar numa figurinha nova (ganha!), ir direto pra ela, com a imagem e o
  som do que ela representa.
- **Confirmado (30/09/2026)**: tirar as aspas « » usadas pra citar palavras no app inteiro.
  Maior que parecia: não é só texto de exibição — ~20 arquivos de serviço (`answers.ts`,
  `mistakes.ts`, `pitch.ts`, `word-images.ts`, `*-texto.ts`, `ipa-lexicon.ts`, `*-pronuncia.ts`,
  `numeros/*.ts`) usam « » em regex pra checar resposta do aluno, gerar avisos dinâmicos de
  ortografia e achar trechos citados dentro das histórias — essa lógica muda junto, não só o texto
  estático dos ~650 arquivos de conteúdo. Troca por aspas tipográficas “ ” (não as retas "):
  não colidem com os delimitadores de string (' nem ") do TypeScript, então não quebra a sintaxe.
  Em andamento (30/09/2026).
- Mudar a frequência de ganhar figurinha (hoje: toda atividade concluída dá uma).
- Ideia nova: «pacote de chance» (tipo loot box, sem dinheiro real) que sorteia entre figurinha,
  roupa do Linu ou outra coisa a definir.
- Pergunta: o app usa muito os códigos ISO (639 idiomas, 3166 países) — existe alternativa? (Já
  usamos também Glottolog e CLDR em partes do mapa; dá pra comparar as opções quando ele quiser.)
- **Ideia nova (01/10/2026 de madrugada), ainda não implementada**: histórias e mitos de criação dos
  povos que falam cada idioma — a mitologia de cada cultura, não só a gramática e o vocabulário.
  Precisa decidir onde entra (Cultura? Histórias, como aba própria? Um `creationMyth` novo no
  `LanguagePack`?) e o mesmo cuidado de fonte real que o resto do conteúdo já tem.
- **Ideia nova (01/10/2026 de madrugada), ainda não implementada**: ensinar escritas antigas que não
  são só alfabeto — hieróglifos egípcios, copta e a escrita maia (logossilábica, "glifos maias" — o
  Matheus não lembrava o nome). São bem mais difíceis que os idiomas de escrita não latina já no app
  (armênio, híndi…): hieróglifos e glifos maias não são digitáveis por teclado normal, então pedem
  imagem/SVG de cada sinal em vez de texto Unicode, e um jeito de "digitar" a resposta nas lições que
  ainda não existe no app. O copta tem alfabeto Unicode próprio (parecido com o grego) e é mais
  parecido com as línguas que já existem. Vale tratar como 3 propostas separadas, não uma só: copta
  é parecido com o fluxo atual; egípcio antigo e maia clássico pedem um jeito novo de mostrar e
  treinar a escrita.

## Pedidos do Matheus Vega (01-02/10/2026, por WhatsApp)
- **"Na parte de palavras é pra você escolher uma e passar pra outra, parece que você tá confundindo
  duas metodologias de ensino"**: achado o bug — a Imersão (`ImmersionStep.tsx`) tinha um
  `SwipeCard` com gesto de arrastar pra direita (emprestado do fluxo de revisão SRS do
  `DeckSession.tsx`) competindo com o próprio mecanismo de toque-pra-escolher da Imersão; a legenda
  da tela chegava a instruir os dois métodos ao mesmo tempo. **Corrigido** (commit `0bdaed4d`):
  removido o gesto de arrastar da Imersão — ela é só toque-pra-escolher; o gesto de arrastar continua
  existindo, mas só no `DeckSession` (revisão espaçada), onde faz sentido.
- **"O microfone não tá funcionando dentro das lições"**: **corrigido** — ver a entrada em "Revisões
  pendentes" acima.
- **"Na parte do mundo o mapa tá meio bugado para mexer e colocar a língua onde se fala com o país, e
  na hora de aproximar, colocar o estado em que se fala com as cores diferentes"**: **feito em
  02/10/2026**. Corrigido: arrastar/aproximar não abre mais um país por engano (o toque real ficou
  travado por um bug introduzido durante o próprio conserto do arrasto, pego e corrigido); zoom pela
  roda do mouse/trackpad na web; recorte por estado/província/cantão (Suíça, Canadá, Índia, via novo
  `CLDR_SUBDIVISIONS` em `onde-se-fala.ts`) com cor própria por idioma, em vez de todos saírem na
  mesma cor por família linguística; legenda das línguas do país aproximado. **Nota de processo**: um
  agente em segundo plano rodou `git stash`/`git stash pop` sozinho durante o diagnóstico (pra comparar
  com o estado já commitado) — voltou limpo, sem perder nada, mas é um uso de git fora do combinado
  (git stash/reset não são ações que um agente devia tomar por conta própria); vale reforçar essa
  instrução nos próximos agentes de bugfix.
  - **2ª rodada (revisão de seiabras-b8, ainda 02/10/2026)**: achado grave — a prioridade de pintura
    comparava TODAS as línguas (`languagesIn`, sem filtro de papel), e o Glottolog carrega centenas de
    línguas "faladas" por país, cada uma com só 1-2 subdivisões (um ponto de coordenada, não um
    território de verdade), que sempre venciam línguas reais na comparação de "menos subdivisões"
    (Tamil Nadu saía como língua obscura, Quebec como outra, etc.). **Corrigido**: novo
    `notableLanguagesIn()` em `onde-se-fala.ts`, só línguas com papel oficial/regional (o Glottolog
    nunca marca nenhum dos dois); teste de regressão com o Glottolog de verdade carregado, cobrindo os
    4 casos que a revisão apontou. Também corrigidos: legenda cortava em 6 mesmo com mais línguas
    pintando de verdade (removido o corte fixo) e várias línguas regionais sem `subdivisions`
    (catalão/galego/basco na Espanha, havaiano, inuktitut, romanche, tibetano/uigur/mongol/zhuang na
    China, tártaro/baquir/checheno/sakha na Rússia — todas já eram `role: 'r'` no CLDR, só faltava o
    recorte territorial). O teste de códigos ISO 3166-1/2 passou a cobrir `ALL_MAP_LANGUAGES`, fechando
    de vez a pendência técnica anterior (os códigos do `CLDR_SUBDIVISIONS` agora têm guarda automática).
    **Nota de dados de baixa prioridade, ainda aberta**: na Rússia, Carélia (RU-KR) pinta como finlandês
    — o idioma regional com apoio oficial lá é o carélio (junto do finlandês e do vepse); se um dia o
    carélio entrar no mapa, ele é a escolha mais precisa pra essa subdivisão.
- **"Em línguas artificiais adicione a língua dos minions"**: a "língua dos minions" (dos filmes da
  Illumination) não é um conlang estruturado de verdade — é gibberish dos diretores, uma mistura de
  fragmentos de línguas reais (italiano, espanhol, francês, inglês, japonês, coreano, indonésio…) sem
  gramática nem vocabulário consistentes documentados por linguistas, bem diferente do quenya/
  sindarin/alto-valiriano/esperanto/lojban já no app (que são conlangs de verdade, com gramática
  publicada). Pra não quebrar a regra de "nada de inventar" criando vocabulário/gramática que não
  existe, a solução é uma seção pequena e honesta (como as outras árvores de Artificiais), explicando
  o que é (e o que não é) a "língua" dos minions, citando as poucas palavras reais que os diretores
  confirmaram em entrevista (ex.: "banana", "bello", "poopaye") — não um curso completo. Confirmado
  pelo Matheus em 02/10/2026; **feito** (ver commit desta mesma pendência).
- **"implemente as linguas que apareceram no Babbel podcast"**: não foi possível identificar o
  episódio/lista exata (sem resultado de busca específico). Matheus então listou direto (02/10/2026)
  os idiomas que quer que não estão no app ainda: tétum, mapudungún (mapuche), língua geral de mina,
  farsi, karitiana, kimbundu, gaélico escocês, crioulo haitiano, groenlandês, palenquero, saami,
  talian, bretão, lakota. Status de cada um:
  - **Feitos em 02/10/2026**: tétum (`tdt` — austronésio, ramo tetárico, muitos empréstimos do
    português por contato colonial), mapudungún (`arn` — tratado como língua isolada, posição
    majoritária entre linguistas hoje, mesmo caso do tikuna/basco), gaélico escocês (`gd` — indo-
    europeu, ramo goidélico, irmão do irlandês), crioulo haitiano (`ht` — crioulo de base francesa,
    família própria "Crioulo de base francesa" adicionada à lista fechada de `conteudo.test.ts`,
    mesma convenção do pidgin nigeriano) e karitiana (`ktn` — família tupi, mas ramo arikém, diferente
    do tupi-guarani das outras línguas tupis do app; ergativo-absolutivo, raro entre línguas tupis) e
    quimbundo (`kmb` — níger-congo, ramo banto zona H.20 de Guthrie; uma das línguas bantas que mais
    moldou o português do Brasil via o tráfico negreiro: moleque, cafuné, caçula, quitute, zumbi,
    quilombo, dendê, bunda, fubá, senzala, quitanda) e palenquero (`pln` — crioulo de base espanhola
    com substrato quicongo (banto), o único crioulo de base espanhola que sobreviveu na América
    Latina; falado em San Basilio de Palenque, Colômbia, o primeiro povoado de ex-escravizados livres
    das Américas; nova família "Crioulo de base espanhola" na lista fechada de `conteudo.test.ts`) e
    groenlandês/kalaallisut (`kl` — família esquimó-aleúte própria, sem parentesco com nenhuma outra
    já no app; fortemente polissintética, o que limitou o vocabulário a formas já atestadas inteiras,
    sem flexionar nada por conta própria — ver `incomplete.note` do pacote) e bretão (`br` — indo-
    europeu, ramo britônico, irmão do galês, diferente do goidélico do gaélico escocês/irlandês).
  - **Em andamento** (pacote do zero, igual aos outros): saami do norte (`se` — a variedade sami mais
    falada, ~15-25 mil falantes; as outras línguas sami, como a lule e a skolt, têm código próprio à
    parte), lakota (`lkt`).
  - **"Língua geral de mina"**: pesquisado em 02/10/2026. Descartada a hipótese de ser a língua
    geral tupi (nheengatu, `yrl`, ou a paulista) — nenhuma fonte liga as duas coisas. Confirmado:
    "mina" vem da Costa da Mina/São Jorge da Mina (Elmina, Gana de hoje) e remete ao Tambor de Mina e
    ao candomblé jeje, cujos cânticos (na Casa das Minas, São Luís/MA) são na "língua jeje" — uma
    variedade gbe, identificada nas fontes acadêmicas (Ferretti 1996; Pereira 1979) como o fon. Existe
    até uma língua africana chamada literalmente "mina"/gen/popo (ISO `gej`, ~620 mil falantes,
    Togo/Benim), mas com documentação pública fraca demais pra um pacote honesto (a única gramática
    encontrada é de 1969, em francês, sem acesso). O fon (`fon`) em si tem base real e sólida
    (gramática, dicionário, ~2,3 milhões de falantes, língua oficial do Benim) — mas o próprio registro
    ritual brasileiro (os cânticos da Casa das Minas) não é ensinável sem inventar: a etnografia
    acadêmica descreve esse registro como fragmentado e alterado ao longo dos séculos. Decisão: como o
    pedido original citava justamente essa tradição brasileira, e a resposta mais honesta (fon, com
    nota cultural ligando à Costa da Mina/jeje) é uma extrapolação razoável, mas não exatamente o que
    foi pedido — fica como item pra confirmar com o Matheus antes de começar, em vez de presumir.
  - **Farsi (fa)**: bloqueado por RTL, mesmo motivo do árabe e do urdu (ver "Pendência técnica: RTL"
    acima) — não dá pra começar antes de resolver a escrita direita-pra-esquerda.
  - **Talian**: não tem código ISO 639-3 próprio — é classificado como um dialeto/variante do vêneto
    (`vec`, já no app) falado por descendentes de imigrantes no Rio Grande do Sul e Santa Catarina,
    não uma língua separada pelo padrão que o app já segue (mesmo critério usado pro jopará dentro do
    `gn`). Em vez de um pacote novo, a ideia é uma nota/variante dentro do `vec` existente — ainda não
    feito.

## Git
- Push feito até `5ddab696`. Os commits depois disso (amigos do Linu, 9 idiomas novos, árvores)
  estão só no computador: é preciso dar push para o site (GitHub Pages) atualizar.
