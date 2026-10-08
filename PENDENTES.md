# Pendências (atualizado em 03/10/2026)

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

## Feito em 02–03/10/2026
- **Idiomas novos**: zulu (`zu`), somali (`so`), sateré-mawé (`mav`), kamaiurá (`kay`), mundurukú
  (`myu`), ka'apor (`urb`), terena (`ter`) e awetí (`awe`) — 157 idiomas no seletor. As escolhas
  de grafia, frases e nomes de cada agente foram conferidas com fonte (relatório da auditoria de
  03/10/2026): somali sem registro formal (Saeed 1999, Orwin 1995) e «nabadgelyo» corrigido;
  sateré-mawé sem a grafia acentuada (era de um glossário, não da escola) e posse uniformizada
  (Franceschini 1999); ka'apor com «Nde nengwéi?» virado afirmação; mundurukú com nome nativo
  «Munduruku» (o «Mõnjoroko» é apelido dado por inimigos, Gomes 2006). **Aguardando aprovação do
  Matheus.**
- **Bidi nas citações RTL** (commit `96f72987`): `isolateRtlRuns` envolve os trechos em escrita da
  direita pra esquerda em isolamento Unicode (FSI…PDI) na hora de mostrar; o português em volta não
  se reordena mais. No mesmo commit, o seletor de idioma ganhou busca e rola até a família do idioma
  atual.
- **Textos de gênero e tabela truncada** (commit `9ff20855`): os textos genéricos sobre gênero somem
  nos idiomas sem gênero, e a 3ª coluna do `GrammarParts.tsx` não corta mais em tela estreita.
- **Leitura em pinyin do mandarim** (`src/services/zh-pinyin.ts`): sai do pinyin já conferido de
  cada palavra do vocabulário (com um suplemento conferido no CC-CEDICT); caractere desconhecido →
  sem leitura, nunca uma pronúncia inventada. **Bengali** com a regra de Ohala (কলকাতা → kolkata) e
  **khmer** com as vogais longas escritas dobradas (sem mácron), os dois com teste.
- **Talian** como nota dentro do vêneto (`vec`): região certa (RS, SC), reconhecimento do IPHAN
  (2014) e de Serafina Corrêa (2010).
- **Comunidade**: os envios ganharam «☆ marcar como ideal» (a resposta ideal vai para o topo), e o
  diário e a lição deixam claro que o envio fica no aparelho.
- **Ficha do Linu** (atributos e o cachecol do nível CEFR conquistado na travessia), com a opção de
  usar ou não o cachecol (na ficha e na loja de roupinhas).
- **Tutorial refeito como passeio guiado** pelas páginas de verdade (`src/services/tour.ts`,
  `src/components/TourOverlay.tsx`): balões curtos, o resto da tela escurecido, Voltar/Próximo/Sair.
- **`fluxo-trilha.mjs` refeito** e `fluxo-travessia.mjs` novo. Achado deles: tocar várias vezes no
  fim da lição/travessia dava o XP várias vezes — corrigido.
- **Rádio do abrigo** abre a conversa com uma seta de voltar para o abrigo.
- **Ideias do Gemini (itens 1, 2 e 5)**: pontes eletivas a partir do B1.1 (`src/services/pontes.ts`,
  `/ponte/[id]`), nós de reparo do SRS no mapa (`src/services/reparo.ts`: a chave 🔧 na parada,
  revisão só das palavras da unidade com XP ×2) e lição adaptativa (`src/services/licao-adaptativa.ts`:
  acerto rápido encurta a imersão; erro na lacuna mostra «Por que é assim?» e retesta no fim).
- **Pacote de chance**: sorteia figurinha ou roupa, e a roupa só entre as peças de comprar.
- **Travessia trancada** também pela URL direta, com o botão «Fazer o teste para pular».
- **Treino de escrita automático**: todo idioma de outra escrita com `reading` ganha o alfabeto
  gerado do teclado e da leitura (`src/services/alfabeto-auto.ts`). Ainda sem `reading` (e por isso
  sem treino): lo, hyw, ar, he, fa, ur, yi, arz, dv, ug, ps, ckb, ryu.
- **Não confunda do português** (30 grupos: mas/mais, mal/mau, a/há, onde/aonde…), com treino.
- **Som ambiente no abrigo** (`src/services/ambiente.ts`, `scripts/baixar-ambiente.mjs`): vento na
  barraca e na estação, pinguins no refúgio, mar no navio, silêncio nas casas do país; começa
  desligado, botão 🔇/🔊 ao lado do abrigo, só toca com a trilha aberta. Sons do Wikimedia Commons
  com crédito.
- **«Já está aberto em outra aba»**: a tela pergunta se a outra aba existe e recarrega sozinha se
  ninguém responder.
- **LICENSE** (todos os direitos reservados, com as licenças de terceiros), **README** com
  destaques e a tabela dos idiomas gerada do app (`npx tsx scripts/tabela-idiomas.mjs`) e o
  **changelog** das Atualizações regenerado.

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
  turcaico/tungúsico (hipótese "altaica" obsoleta). A escrita mongol vertical tradicional **também
  feita**, como `mvf` (02/10/2026), junto com o manchu (`mnc`, família tungúsica, escrito numa escrita
  que nasceu da mongol) — resolvido o suporte a escrita vertical (`direction: 'ttb'` em
  `src/services/direction.ts`, `writing-mode: vertical-lr` na web). Trabalho iniciado pela sessão
  "LinuLingu arquivo revisão", que ficou indisponível no meio do caminho; assumido e finalizado por
  esta sessão (commit `f0b96260`).
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
**Resolvida em grande parte, 02/10/2026**: `src/services/direction.ts` (`isRtl`/`targetTextStyle`)
está aplicado em ~15 telas/componentes (ImmersionStep, ClozeStep, VoiceStep, StoryScreen, etc.) e
funciona bem para blocos 100% no idioma-alvo — confirmado com teste visual de verdade (Playwright)
no pacote `ar`. Sete pacotes RTL no ar: ar, arz, fa, ur, yi, he, ckb (kmr e mt são semíticos/do
Oriente Médio mas usam alfabeto latino, não são RTL).

**Corrigido em 02/10/2026 (commit `96f72987`, `isolateRtlRuns`).** O bug era este: quando um texto majoritariamente em
PORTUGUÊS intercala trechos citados no idioma-alvo (ex.: `card.culture_tip` citando "سلام" (salām)
várias vezes seguidas, ou a saudação `pack.phrases.hi` no início da bolha de fala do Linu), o
algoritmo de bidi do navegador reordena as ORAÇÕES EM PORTUGUÊS ao redor da citação RTL — não é
`writingDirection` nem `targetTextStyle` fazendo isso errado, é o comportamento padrão do bidi
quando duas direções se intercalam sem isolamento. Com uma citação curta e isolada o efeito é
pequeno; com várias no mesmo parágrafo (como em `ar`'s `culture_tip`, que tem 5), o efeito é severo
e prejudica a leitura do PORTUGUÊS. Mesmo problema que a Wikipédia resolve com `<bdi>`/isolamento
Unicode (U+2066 LRI / U+2068 FSI … U+2069 PDI). Conserto provável: uma função que varre o texto por
trechos em escrita não latina e os envolve em isolamento bidi (FSI…PDI) na camada de apresentação,
não no conteúdo — mesmo padrão de `targetTextStyle`. Achado e documentado por um subagente desta
sessão (pacote `ar`) com capturas de tela reais; ainda não corrigido. A sessão que editava
`CulturalGrammarCard.tsx`/`direction.ts` em paralelo (escrita vertical mongol/manchu) ficou
indisponível e esse trabalho dela já foi assumido e commitado (ver nota do mongol/manchu acima) — o
conserto do bidi continua livre pra pegar, sem mais colisão.

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
  `pack.genders?.length === 0` — **corrigido** (`9ff20855`). (3) `reading` faltando em vários idiomas — ver item acima, em
  andamento. (4) Seletor de idioma no topo da Home abre o Perfil na primeira família da lista, sem
  rolar até a família do idioma atual nem ter busca — **corrigido** (`96f72987`).
- Revisar la, oc, en, id e vi como já foi feito com gl, ast e sc. Há dúvida sobre a etimologia de
  «nai» < matre(m), no galego.
- ~~Atualizar o README (tabela de idiomas)~~ — **feito** (03/10/2026, gerada por
  `scripts/tabela-idiomas.mjs`; rodar de novo depois de juntar idiomas). NotebookLM.md também atualizado (03/10/2026).
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
  **Mandarim também feito em 03/10/2026** (ver "Feito em 02–03/10/2026"). Antes: faltava o mandarim (`zh`) — o pinyin já vem escrito à mão em cada palavra do vocabulário, mas
  não como `reading` computado de verdade; como é por caractere (não por som), precisaria de um
  dicionário hanzi→pinyin, não uma regra fonética como os outros — fica pra outra sessão.
- **Pendência de baixa prioridade (achado de seiabras-b8, 02/10/2026)**: bengali (`reading-bengali.ts`)
  tem o mesmo problema que o devanágari tinha antes da regra de Ohala — "কলকাতা" sai "kolokata" em
  vez de "kolkata" (schwa do meio da palavra sobrando); khmer (`reading-khmer.ts`) usa o mácron de
  forma inconsistente entre exemplos diferentes (alguns têm, outros não). **Os dois corrigidos em 03/10/2026.**
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
- **`GrammarParts.tsx`: a 3ª coluna ("Som aproximado") trunca em telas estreitas** — **corrigido** (`9ff20855`). Achado por um
  subagente desta sessão (02/10/2026) enquanto dava papel à Dedé em `GrammarTopicScreen.tsx`; não é
  causado pela mudança dele (não mexeu nesse arquivo), só notado de passagem. Ainda não corrigido.

## Ideias de pesquisa externa (tipo Gemini, 30/09–01/10/2026 — lista completa, 6 itens)
**Itens 1, 2 e 5 feitos em 03/10/2026** (ver «Feito em 02–03/10/2026»); 3, 4 e 6 continuam como ideia.
Era uma lista numerada 1-6; os itens 3 e 4 chegaram primeiro
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
- **Reformulação temática «Antártica selvagem» — EM GRANDE PARTE FEITA em 02/10/2026** (confirmado
  pelo Matheus: Antártica mesmo, de propósito, por não pertencer a nenhum país — tema neutro pra
  quem estuda qualquer idioma do app; essa razão está registrada em `tailwind.config.js`). O que
  já existe:
  - **Visual**: `src/components/FieldNotebookBackground.tsx` (fundo gelo/pergaminho com linhas de
    contorno fracas, estilo mapa topográfico), `FieldGuideCard.tsx` (borda tracejada + etiqueta no
    canto, "ficha de espécime"), `PageFlipTransition.tsx` (troca de tela "folheando o caderno",
    com `useReducedMotion`/o toggle de acessibilidade desligando a animação). Cores em
    `tailwind.config.js`: `gelo`, `pergaminho`, `aurora`. Aplicado em Amigos do Linu (`/amigos`,
    já existia), e agora também nas telas de estudo: `LessonScreen`, `HomeScreen`, `GrammarScreen`,
    `GrammarTopicScreen`, `CultureScreen`, `ExpeditionScreen`, `JournalScreen`.
  - **«O bando» no hábitat natural**: 3 dos 12 bichos de `src/data/amigos-linu.ts` ganharam papel
    fixo, na voz da própria personalidade já registrada — Dedé (pinguim-de-adélia) na gramática,
    Wendel (foca-de-weddell) na Cultura, Floco (petrel-das-neves) ligando expedição e diário.
  - **Trilha como «rota de migração»**: a trilha da Home tem visual de rota náutica (linha
    tracejada cor de aurora, âncoras ⚓ nos subníveis não alcançados, halo tipo GPS no atual); entre
    uma unidade e a próxima, um cartão fixo de "🌊 Travessia oceânica" com a Jubi (baleia-jubarte)
    marcando a transição.
  - **Trilha virou mapa de aventura (02/10/2026, 2ª camada, pedido do usuário)**: a faixa de
    subníveis e os cartões de unidade da Home deram lugar a um mapa ilustrado vertical
    (`src/components/AdventureMap.tsx`) que se lê de baixo para cima: o Linu sai da colônia dele na
    Ilha Meia-Lua, desce a Península Antártica (6 paradas de verdade, fatos em
    `src/data/aventura.ts`), cruza o Drake e a Convergência Antártica e **desembarca no país do
    idioma** (7 paradas: cidades das expedições quando o idioma tem, senão os temas das unidades;
    país pelo mapa de "Onde se fala" ou pela bandeira do pacote — `src/services/aventura.ts`), com o
    contorno do país desenhado na terra. Tocar numa parada abre um painel com o amigo do Linu daquele
    lugar, o "diário de campo", as lições e a travessia.
  - **Travessias viraram desafio de verdade** (`src/screens/CrossingScreen.tsx`, rota
    `/travessia/[id]`, lógica em `src/services/travessia.ts`): substituem a prova da unidade — 2
    mensagens de rádio (só áudio), 2 decisões (o que o Linu responde), 2 lacunas e 1 conversa por
    voz, gerados do conteúdo da própria unidade (vale para todos os idiomas); 80% para chegar à
    próxima parada; errou, "o mar ficou bravo" e dá para tentar de novo. O teste para pular continua
    usando a prova antiga (`/licao/<prova>?pular=1`).
  - Roteiros Playwright atualizados para o mapa (`fluxo-trilha`, `fluxo-fotos`, `fluxo-licao` e os
    de cada idioma). **Achado**: a parte de `fluxo-trilha.mjs` que faz o teste para pular (arrastar
    cartões, lacunas) já estava desatualizada antes do mapa e trava em "Continuar" — **refeito em 03/10/2026**, junto com um `fluxo-travessia.mjs` novo.
  - **Abrigo em pixel art no topo da Home (feito, 02/10/2026)**: `src/components/PixelShelter.tsx` —
    a barraca com o Linu em pixel art, luz pelo relógio (dia, sol da meia-noite, noite com aurora;
    o lampião troca), objetos tocáveis com o Linu andando até eles: mural → quadro da expedição,
    caderno → diário, rádio → conversa, cabideiro → loja de roupas, estante → álbum, cama → revisão,
    porta → parada atual, janela → mapa "Onde se fala"; selos de pendência. Ícones das paradas, das
    travessias e enfeites do mapa em pixel art desenhada por código (`src/components/PixelIcon.tsx`).
    Moradias (03/10/2026): barraca, estação de pesquisa (Rei George), refúgio (Port Lockroy), navio
    (Drake) e casa romena (desembarque do romeno) — geradas no Canva com a barraca como referência,
    reduzidas à grade 344 × 192; noite/sol da meia-noite recoloridos por código. Escolha salva em
    Meta `moradia`. Casas do desembarque: romena, andaluza (es) e toscana (it). **Faltam as de pt, ru,
    sv, fr, nb, da, is, fi, et** — a cota de IA do Canva acabou (03/10/2026) no meio; os pedidos (com
    a barraca como referência) estão prontos para repetir. **Pausado (03/10/2026): só voltar a gerar
    casas no Canva quando o Matheus pedir.** Para os outros ~130 idiomas não há casa:
    eles ficam nas moradias antárticas.
  - **Linu em pixel art com as roupas da loja** (03/10/2026): `scripts/linu-pixel.mjs` + `.py` geram,
    do desenho vetorial, o corpo/olhos nas 12 cores e as 106 peças (`assets/pixel/linu/`,
    `src/data/linu-pixel.ts`); `LinuPixel` empilha o visual escolhido. Poses: de frente (parado),
    de costas (olhando o objeto) e de lado (andando, o pinguim do PixelLab, sem roupas). Peça nova na
    loja → rodar os dois scripts de novo (com o servidor de pé).
  - **Feito (03/10/2026): o abrigo customizável** (inspirado no app do irmão do usuário, "Dojo Legacy"): cena
    pixel art do PixelLab com objetos tocáveis (mural → quadro da expedição, rádio → conversa,
    caderno → diário, cabideiro → loja/roupas, estante → álbum), selos de pendência, o Linu andando
    até o objeto, moradias que mudam com as paradas (barraca → refúgio → estação → navio → casa do
    país). Em `assets/pixel/`: a barraca de dia (PixelLab), as versões de noite com aurora e de sol
    da meia-noite (geradas por código a partir dela, recolorindo os pixels) e um Linu em pixel art
    (`linu-pixel.png`, ainda com fundo cinza, sem transparência). Guia do PixelLab foi passado no chat.
  - Paradas usam emoji como ícone por enquanto; trocar por ilustrações (PixelLab) segue a regra
    "imagens, não emojis" do AGENTS.md.
  - Sons ambiente (mar, vento, aves) e paisagens específicas por região de destino (fiordes na
    Noruega, vales na Romênia…) **não feitos** — ficam para outra rodada, se quiser.
  - «Desafios de Chefe» virarem «travessias oceânicas» de verdade (um teste interativo na
    transição, não só visual) **não feito**: o próprio conceito de chefe/boss battle nunca chegou a
    ser construído no app, então não tinha o que "virar" — por ora a travessia é um marco visual.
  - Fontes PlayfairDisplay/SpaceMono da proposta original **não usadas** — as telas de estudo
    continuam com a tipografia padrão do app; avaliar se vale a pena trocar depois de ver o
    restante do reskin em uso.
  - Achado de passagem (não deste trabalho): `GrammarParts.tsx` trunca a 3ª coluna ("Som
    aproximado") em telas estreitas — ver "Revisões pendentes" acima.

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
  ajudar a lembrar. **Esclarecido pelo Matheus (03/10/2026)**: é nos dois — no idioma estudado E no
  português —, mas cada bloco/exercício fica separado por idioma. **Feito (03/10/2026)**: a tela
  «⚠️ Não confunda» tem as abas «Em <idioma>» e «Em português» (30 grupos de parônimos com sentido,
  exemplo, dica e treino de lacunas; `src/data/confusaveis-pt.ts`).
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
- ~~Ideia nova: «pacote de chance»~~ — **feito**: sorteia figurinha ou roupa (só as de comprar).
- Pergunta: o app usa muito os códigos ISO (639 idiomas, 3166 países) — existe alternativa?
  **Respondida em 03/10/2026** (Glottolog, BCP 47, Wikidata, UN M49…); nada mudou, a decisão é dele.
- XP: o Matheus pediu sugestões (03/10/2026), ainda sem decisão — ver a resposta daquele dia.
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
    **3ª rodada: o aviso de console "Unknown event handler property" — FECHADO em 02/10/2026** (achado
    e resolvido pela própria revisão de seiabras-b8, depois que o agente dedicado a investigar isso
    travou num loop de ferramentas e foi interrompido manualmente). Causa raiz lida direto no código do
    react-native-svg: qualquer `<Path>`/`<Circle>` com `onPress`, na web, faz a biblioteca injetar 6
    props de responder do React Native direto no elemento SVG real do DOM, que não os reconhece.
    Corrigido trocando `onPress` por `onClick` na web (mantendo `onPress` no nativo) nos três pontos do
    mapa e em mais dois componentes com o mesmo padrão (`RegionTapMap.tsx`, `MapGameScreen.tsx`); a
    trava de arrasto já existente (`dragLocked`) continua intacta. Removido o `LogBox.ignoreLogs` que
    nunca escondia o aviso na web mesmo — agora o aviso nem aparece mais.
    **4ª rodada, URGENTE: a correção acima quebrou o toque em país/estado na web** — corrigido na hora
    (commit `81f390ac`). Causa: o próprio react-native-svg sobrescreve `onClick` com `undefined` quando
    `onPress` chega como `undefined` (não `null`) — `prepare.ts` faz `if (onPress !== null) clean.onClick
    = props.onPress`. A correção de verdade precisa passar `onPress: null` explicitamente (não só omitir
    o campo) junto do `onClick`, na web. Achado, testado e consertado por seiabras-b8 (ela mesma pediu
    desculpa, já que a sugestão original de `onClick` sem o `onPress: null` foi dela).
    **5ª achado — resolvido** (o `onPan` agora soma os deslocamentos incrementais `changeX/changeY` sobre a caixa atual, sem guardar o início do gesto). Era assim: num
    arraste rápido e curto (ex.: 12px num só passo), o `onPan` às vezes lê o `start` (estado) de um
    render anterior, em vez do valor que `onPanStart` acabou de gravar — o mapa salta pro mundo inteiro
    por um instante. A correção óbvia (trocar o `useState` de `start` por um `useRef`, lido de forma
    síncrona) esbarra no lint de pureza do React Compiler: `scheduleOnRN(onPan, …)`, dentro do
    `.onUpdate(...)` do gesto, passa uma função que lê uma ref pra uma função externa durante a
    renderização (a mesma classe de falso positivo que atingiu `tapProps`, achado na rodada anterior) —
    e esta sessão preferiu não suprimir o lint (o app não tem nenhuma supressão dessa regra até agora)
    sem antes achar uma reestruturação de verdade. Fica pra uma próxima rodada, com mais tempo pra
    investigar uma forma limpa de ler o estado síncrono sem cair nesse alerta.
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
    europeu, ramo britônico, irmão do galês, diferente do goidélico do gaélico escocês/irlandês) e
    lakota (`lkt` — nova família "Siuano (Sioux)" na lista fechada de `conteudo.test.ts`; marca a
    pessoa no verbo, não com pronome + conjugação; partículas de fim de frase diferentes conforme
    quem fala é homem ou mulher) e saami do norte (`se` — urálico, ramo sámi; a variedade sami mais
    falada, ~15-25 mil falantes; as outras línguas sami, como a lule e a skolt, têm código próprio à
    parte — a escolha de qual variedade construir está documentada no próprio pacote).
  - **Todos os 12 idiomas pedidos pelo Matheus, feitos em 02/10/2026**: tétum, mapudungún, karitiana,
    kimbundu, gaélico escocês, crioulo haitiano, groenlandês, palenquero, saami do norte, bretão,
    lakota (todos acima) — e **fon** (`fon`), construído no lugar da "língua geral de mina" ambígua.
  - **"Língua geral de mina" → fon (`fon`), feito em 02/10/2026, mas como DECISÃO DESTA SESSÃO, NÃO
    CONFIRMADA PELO MATHEUS** — pesquisado antes de construir: descartada a hipótese de ser a língua
    geral tupi (nheengatu, `yrl`, ou a paulista) — nenhuma fonte liga as duas coisas. Confirmado:
    "mina" vem da Costa da Mina/São Jorge da Mina (Elmina, Gana de hoje) e remete ao Tambor de Mina e
    ao candomblé jeje, cujos cânticos (na Casa das Minas, São Luís/MA) são na "língua jeje" — uma
    variedade gbe, identificada nas fontes acadêmicas (Ferretti 1996; Pereira 1979) como o fon. Existe
    até uma língua africana chamada literalmente "mina"/gen/popo (ISO `gej`, ~620 mil falantes,
    Togo/Benim), mas com documentação pública fraca demais pra um pacote honesto (a única gramática
    encontrada é de 1969, em francês, sem acesso). O fon (`fon`) em si tem base real e sólida
    (gramática, dicionário, ~2,3 milhões de falantes, língua oficial do Benim) — mas o próprio registro
    ritual brasileiro (os cânticos da Casa das Minas) não é ensinável sem inventar: a etnografia
    acadêmica descreve esse registro como fragmentado e alterado ao longo dos séculos. Como o pedido
    original citava justamente essa tradição brasileira, e a resposta mais honesta (fon, com nota
    cultural ligando à Costa da Mina/jeje, em `cognateNote`/`incomplete.note` do pacote) é uma
    extrapolação razoável mas não exatamente o que foi pedido, **o pacote foi construído mesmo assim
    como a melhor aposta, mas precisa da confirmação do Matheus** — se ele quis outra coisa (a língua
    "mina"/gen literal, ou nem isso), o pacote fica disponível de qualquer forma (é uma língua real e
    bem documentada do Benim), só a ligação com o pedido original que pode estar errada.
  - **Confirmado pelo Matheus (03/10/2026): fon está certo.** Pendência fechada.
  - **Farsi (fa)**: bloqueado por RTL, mesmo motivo do árabe e do urdu (ver "Pendência técnica: RTL"
    acima) — não dá pra começar antes de resolver a escrita direita-pra-esquerda.
  - **Talian**: não tem código ISO 639-3 próprio — é classificado como um dialeto/variante do vêneto
    (`vec`, já no app) falado por descendentes de imigrantes no Rio Grande do Sul e Santa Catarina,
    não uma língua separada pelo padrão que o app já segue (mesmo critério usado pro jopará dentro do
    `gn`). Em vez de um pacote novo, entrou como nota dentro do `vec` existente — **feito** (03/10/2026).

## Lista de idiomas sugeridos pelo Matheus (02/10/2026, 3 mensagens coladas)
Lista grande, por família, pra guardar pra quando chegar a vez — "foca em implementar o novo
design" veio logo depois, então isso fica pra depois, não é pra começar agora. Os já implementados
(ficam como estão, não listados nos "faltam" abaixo): sw, yo, ig, nah, nv, cbs, mn, mnc, lkt, kl,
ht, pln, ar, am, om, zh, id, tl, mi, haw, vi, km, ta, te, th, lo, tr, gn, yrl, tpw, qu, ay, xav,
kgp, tuo, ka, eu, ja, ryu, ko.
- **Feitos, registrados e com push (02-03/10/2026)**: marúbo (mzr), yawanawá (ywn), apache ocidental
  (apw), buriato (bxr), lingala (ln), shoshone (shh), lingít/tlingit (tli), shipibo-konibo (shp),
  hopi (hop), uolofe/wolof (wo), xhosa (xh) — 11 dos 12 que chegaram a ter agente rodando.
- **zu (zulu): feito** (02/10/2026, commit `019e6f33`). Antes: o agente falhou por limite de uso antes de escrever qualquer arquivo (ao
  contrário dos outros 11, que já tinham pelo menos o vocabulário pronto); precisa recomeçar do
  zero, não só retomar.
- **Faltam, AINDA sem agente, pedidos nas mensagens coladas**:
  - Afro-asiático: hauçá **já feito** (ha); somali **feito** (`so`, 03/10/2026); falta tamazight/berbere.
  - Austronésio: malaio (distinto do indonésio, já feito).
  - Túrquico: uzbeque.
  - Tupi: sateré-mawé **feito** (`mav`, 03/10/2026); mundurukú, kamaiurá e ka'apor com agente rodando (03/10/2026); faltam awetí e suruí do Pará.
  - Macro-jê: xavante **já feito**; kaingang **já feito**.
  - Tukano: tucano **já feito**.
  - Aruak/Arawak: baniwa já é o `kpc`; terena com agente rodando (03/10/2026); falta ashaninka.
  - Coreânica: jeju (além do coreano, já feito).
  - Caucásicas do Norte: checheno, abecásio (georgiano, cartveliano, já feito).
  - Papuas/Austrália: nada ainda — famílias inteiras (Trans-Nova Guiné, Pama-Nyungan), sem idioma
    específico pedido.
  - Outras famílias indígenas americanas: caribe, chibcha, iroquês — sem idioma específico pedido
    (yanomami e mapuche/mapudungún `arn` já feitos).
  - Línguas isoladas: ainu (Japão), burushaski (Paquistão) — basco `eu` já feito.
  - Artificiais: esperanto, ido, klingon, toki pona, quenya, alto-valiriano — tsevhu já existe
    (`src/data/tsevhu/`, pasta cheia: dicionario.ts tem 389 KB, não é rascunho).
- Itens "MD"/"MD+1" nas mensagens coladas do Matheus: ele também não sabe o que é (03/10/2026),
  então veio da lista de origem que ele colou — ignorado ao decidir o que já está feito, usei o
  código real do pacote pra conferir em vez da sigla.
- **Lista extra de línguas artificiais (02/10/2026, mais 2 mensagens coladas)** — pra quando chegar
  a vez, não um pedido de agora:
  - Auxlangs (internacionais): esperanto (**já feito**), interlíngua, ido, novial, volapük,
    interslavo (medžuslovjansky), lingua franca nova (elefen).
  - Artlangs (ficção): klingon, quenya/sindarin, alto-valiriano, na'vi (Avatar), dothraki (além do
    alto-valiriano, mesmo autor/série), lang belta (The Expanse), mando'a (Star Wars) — tsevhu
    **já feito**.
  - Loglangs/englangs (lógicas e minimalistas): toki pona, lojban/loglan, ithkuil, solresol (as 7
    notas musicais), kēlen (sem verbos), aUI, blissymbols (sistema de símbolos, sem forma falada —
    não dá pra ensinar "pronúncia", avaliar se cabe no formato do app antes de começar).
  - Ucronias (como uma língua teria evoluído): brithenig (latim vulgar com influência céltica, como
    se tivesse se fixado na Grã-Bretanha).

## Achados do Matheus testando ao vivo (02/10/2026) — ainda em aberto

- **Erro `removeChild` intermitente** (achado nos testes de 03/10/2026): às vezes (1 em 4 rodadas do
  `fluxo-licao.mjs`) aparece no console ao sair da tela de recompensa da lição com `goBack`. Não
  quebra nada visível; causa não achada.

Vários já foram corrigidos na hora (aba "Cofre", card "Aprenda primeiro" repetido, mensagem ao
tocar numa parada/lição bloqueada, tradução na etapa de imersão, nadadeira sumida no humor
"pensando"). Ficaram em aberto:

- **"LinuLingo já está aberto em outra aba" preso** — **mitigado (03/10/2026)**: a tela agora pergunta pelo canal se existe mesmo outra aba com o banco; se ninguém responder em 2,5 s (página antiga congelada segurando a trava), recarrega sozinha (até 2 vezes), que é o que o Ctrl+R fazia. Testado no Playwright com uma trava sem dono. A causa exata continua sem reprodução. Relato original: aconteceu depois de abrir "Ver os amigos do
  Linu" (Perfil → `/amigos`) e voltar. "Recarregar" não resolveu; só `Ctrl+R` (recarga de verdade do
  navegador), e aí foi parar no álbum de figurinhas em vez de voltar pra onde estava. `/amigos` é
  uma rota comum do `Stack` (não deveria desmontar o `DatabaseGate`, que fica na raiz) — não
  consegui reproduzir com o Playwright pra confirmar a causa. Ver `src/components/DatabaseGate.tsx`
  (o comentário do arquivo explica a trava por aba via Web Locks).
- **Aba "Comunidade"** — **feito** (03/10/2026: «marcar como ideal» nos envios). Pedido: como ainda não tem falante nativo corrigindo as frases dos desafios de voz
  e do `communityPrompt`, seria bom uma aba onde o Matheus possa ver (e marcar como "resposta
  ideal") o que foi enviado por `submitToCommunity`, em vez de ficar só arquivado no banco.
- **Reorganizar idiomas no Perfil** — a separação naturais/artificiais e a busca já existem
  (`fdd308fb`, `96f72987`); falta a parte dos 8 mil idiomas virando cursos. Pedido: abas por tipo (idiomas naturais / artificiais / outros),
  podendo escolher qualquer um dos 8 mil+ idiomas do mundo; os que já têm trilha (ou vão ter) ficam
  como estão, os que não têm (e não está nos planos ter) vão para a parte de "cursos"
  (`src/app/cursos.tsx` / `curso/[id]`, já existe como conceito de conteúdo mais leve).

## Pedidos do Matheus Vega (04/10/2026, por WhatsApp — recebidos em 07/10/2026)
Lista bruta, ainda não implementada — fica aqui pra não perder. Itens com `❓` precisam de mais
detalhe antes de mexer em código.
- Imagens também para os Amigos do Linu (hoje só ilustração dentro do próprio app; ele quer que
  apareça imagem ao tocar, como já acontece com o Linu) e tutorial mais explicado, passando por
  dentro de uma lição de verdade (não só falando sobre ela).
- Dentro da lição, poder tocar numa palavra pra ver tradução, declinação e/ou conjugação.
- Tutorial: revelar as abas conforme a pessoa avança, com a opção de fazer cada possibilidade do
  app de verdade ou pular, além do X de fechar que já existe.
- Países (mapa) e álbum de figurinhas: acrescentar imagem também (o emoji pode continuar, mas ao
  tocar mostra imagem, como já é feito com o Linu) — o emoji às vezes não transmite a
  especificidade.
- ❓ Variações medievais/históricas de idiomas (ex.: inglês shakespeariano, que ele já conhece) —
  ainda não há lista de quais outros idiomas do app teriam uma variação histórica bem documentada;
  perguntado ao Matheus em 07/10/2026.
- Auditoria de nível por idioma: analisar, com fontes reais da internet (sem inventar), até que
  nível CEFR (A1–C2) cada idioma do app tem documentação suficiente pra chegar — algumas línguas
  não têm registro oficial pra ir até C2. Serve pra ele decidir depois pra quais idiomas vale a
  pena expandir.
- Aba Atualizações: organizar por versão (como ele descreveu, "que nem o Neurolingo"), não só como
  changelog cru do git.

## Git
- Tudo com push até 03/10/2026 (o site do GitHub Pages atualiza sozinho a cada push em `master`).
