# Pendências (atualizado em 08/10/2026)

Este arquivo lista só o que falta fazer ou decidir, e referência útil pra quem continuar o
trabalho. O que já foi implementado e testado não entra aqui — está no `git log`. Leia o
`AGENTS.md` antes de pegar qualquer item.

## Pendente de verdade

### Aguardando decisão do Matheus (pesquisa feita, falta escolher o caminho)
- **Fala só por IA lendo pelo IPA**: pesquisa concluída. Hoje a fala passa por
  `src/services/speech.ts` → `neural-tts.ts` → `public/tts/voz-worker.mjs` (espeak-ng + Piper/ONNX).
  Não dá pra injetar o IPA que o app já calcula direto — o espeak-ng só aceita a notação própria dele
  (Kirshenbaum), não IPA padrão. Caminho real: montar uma tabela de tradução IPA→espeak por IDIOMA
  (projeto de referência pra adaptar: `classical-cat-dh-lab/espeak-ng-wasm`, pasta `mapping/<lang>.json`).
  Recomendação do pesquisador: pilotar com 1-2 idiomas de IPA maduro (romeno ou russo) antes de
  estender pros ~160. Aguardando o Matheus decidir se começa o piloto.
- **Variações medievais/históricas**: nórdico antigo (`non`, com Futhark/runas) já feito. Candidatos
  pesquisados com fonte real, faltando só prioridade: eslavo eclesiástico antigo (ru/uk/bg/sr…),
  francês antigo, alto-alemão médio, castelhano medieval, toscano antigo/dantesco, latim
  medieval/eclesiástico (como variação dentro do `la`, que hoje só tem o clássico). Árabe
  clássico/corânico também é candidato, e o bloqueio original ("só depois do árabe padrão existir")
  já caiu — o árabe padrão (`ar`) já tem pacote completo.
- **Países/regiões sem o idioma mais falado deles no app**: levantamento feito, mas de conhecimento
  geral consolidado (Ethnologue/CIA Factbook/Wikipédia), sem busca ao vivo país por país — tratar
  como ponto de partida, cada país escolhido precisa de confirmação de fonte antes de construir o
  pacote. Lacunas levantadas: África (Botswana, Burkina Faso, Burundi, Rep. Centro-Africana,
  Eritreia, Essuatíni, Gâmbia, Gana, Guiné, Lesoto, Madagascar, Malawi, Mali, Namíbia, Ruanda, Sudão
  do Sul, Uganda, Zâmbia, Zimbábue); Ásia (Paquistão/panjabi, Indonésia/javanês, Sri Lanka/cingalês,
  Nepal, Butão, Cazaquistão, Turcomenistão, Quirguistão, Azerbaijão); Oceania (Papua-Nova
  Guiné/tok pisin, Fiji, Samoa, Tonga, + ilhas pequenas); regiões autônomas (Tibete, País de Gales,
  Hong Kong/Macau-cantonês, repúblicas autônomas da Rússia — tártaro, tchetcheno, baquir, sakha).
  Territórios de soberania disputada ficaram de fora (mesma neutralidade do mapa). Europa/Américas:
  sem lacuna de país, só variedades coloquiais sem pacote próprio apesar do idioma oficial já
  existir (patoá jamaicano, sranan tongo, crioulos de Maurícia/Seicheles/Serra Leoa/Cabo
  Verde-Guiné-Bissau). Aguardando decisão de por onde começar.
- **Minicursos de línguas artificiais mais difíceis de documentar** (avaliar viabilidade antes de
  prometer, mesma régua de "nunca inventar"): Huttese (gibberish fragmentário, tipo o caso já
  resolvido dos minions), Heptapod B (semasiográfica e não-linear, não falada — pode nem caber no
  formato do app), Kēlen (sem verbos), aUI, Blissymbols (sistema de símbolos sem forma falada).
  Láadan (Suzette Haden Elgin) é candidata forte, com dicionário/gramática publicados.
- **Tsevhu**: pedido de gramática nova (frases subordinadas tipo "filhotes...") pro conlang Koa
  Vhukva já no app — como a regra do projeto é nunca inventar texto em Tsevhu, precisa ser
  verificado/autorizado pelos autores antes de implementar.

### Trabalho em andamento, ainda não mesclado
- **Pontuação dos idiomas**: agente rodando na branch `pontuacao-idiomas`, ainda sem commits novos
  além do que já está na master — não mesclar nada dali até a rodada fechar.

### Idiomas artificiais: fila restante
Já têm curso de verdade no app: esperanto, toki pona, lojban, volapük, interlíngua, ido (`io` —
código ISO 639-1 real do ido, não "ido"), klingon (`tlh`), solresol, na'vi, alto-valiriano, quenya,
lingua franca nova (elefen), silbo gomero (tipo "canal"), Basic English (língua controlada).
**A segunda leva pedida pelo Matheus em 08/10/2026 (7 cursos em paralelo) está completa**: ido,
klingon, toki pona, lojban, interlíngua e volapük feitos; simlish pesquisado e decidido que NÃO
vale minicurso (ver referência abaixo, gibberish sem gramática oficial + áudio sem licença livre).
Ainda faltam, por ordem de dificuldade crescente de fonte: novial, interslavo (medžuslovjansky),
ithkuil, sindarin, dothraki, lang belta, mando'a — todos com material documentado o suficiente pra
tentar. Os mais arriscados estão na seção acima (Huttese, Heptapod B, Kēlen, aUI, Blissymbols,
Láadan).

### Idiomas naturais ainda não começados
Confirmado contra `src/data/idiomas.ts` em 08/10/2026 (vários itens que o PENDENTES.md antigo listava
como "faltando" já estavam feitos e não foram atualizados — ver nota de ESTALE no final do relatório
desta limpeza). Realmente faltam:
- **Afro-asiático**: tamazight/berbere.
- **Isoladas**: ainu (Japão), burushaski (Paquistão).
- **Caucásicas do Norte**: checheno, abecásio.
- **Coreânica**: jeju (além do coreano, já feito).
- **Tupi**: suruí do Pará (demais línguas tupi indígenas já feitas).
- **Sino-tibetano**: cantonês (diferente da distinção escrita tradicional/simplificada do mandarim,
  que já entrou como variante).
- **Túrquico**: cazaque, turcomeno, quirguiz, azeri (uzbeque já feito).
- **Austronésio/Sudeste Asiático**: javanês, tok pisin, fijiano, samoano, tonganês (malaio, birmanês
  e tétum já feitos).
- **Indo-ariano/outros da Ásia**: panjabi, nepalês, dzonga, tibetano.
- **Repúblicas autônomas da Rússia**: tártaro, baquir, sakha; carélio (nota de dado: no mapa, Carélia
  hoje pinta como finlandês — se o carélio entrar, é a escolha mais precisa pra essa subdivisão).
- **Céltico**: galês (irlandês e gaélico escocês já feitos).
- **Crioulos sem pacote próprio** (idioma oficial do país já está no app): patoá jamaicano, sranan
  tongo, crioulo mauriciano, crioulo seichelense, krio (Serra Leoa), crioulos de Cabo
  Verde/Guiné-Bissau.
- **Albanês — variantes como "sotaque", não pacote novo**: gheg, arbëresh, arvanítico são
  mutuamente inteligíveis com o albanês padrão (`sq`) já no app — ideia de nota dentro do pacote
  existente, não pacote separado. Não começado.

### Alfabeto
- **Alfabeto latino completo**: só o romeno (`ro`) tem hoje os 3 grupos (`igual`/`falsa`/
  `internacional`) do alfabeto oficial inteiro em `ALFABETO_LATINO_BASE`
  (`src/services/alfabeto-auto.ts`). Sueco, norueguês, dinamarquês, islandês, estoniano e espanhol
  continuam só com as letras extras (`'nova'`), sem o alfabeto completo — falta confirmar numa fonte
  real (Wikipédia ou gramática de referência), pra CADA idioma, se existe letra "só uso
  estrangeiro/empréstimo" antes de estender (não supor: no romeno a suposição inicial sobre o X
  estava errada). A função `alfabetoLatinoCompleto` já é genérica, só faltam os dados verificados.
- **Cursivo**: árabe já ensina as 4 formas conectadas de cada letra. Faltam hebraico, russo (cirílico
  cursivo) e outras escritas cursivas a identificar.
- **"Melhorar o ensino do alfabeto, tá bem incompleto hoje em dia"**: feedback geral do Matheus, sem
  detalhe específico do que falta — avaliar o que já existe antes de expandir.

### Features grandes, não começadas ou parciais
- **Jogos do conhecimento**: só damas está pronto. Faltam xadrez, quoridor/bloqueio, octi/octógono
  fantástico e abalone. Fica ao lado de línguas artificiais no Perfil e depois de "tipos de línguas"
  em Cultura.
- **Mais lições e tipos de exercício**: os exercícios "Pareie" e "Ordene a frase" já existem em
  todos os idiomas, e só es/it/pt ganharam as 2 lições extras de exemplo na A1.1. Falta decidir se
  estende as lições extras pros ~160 idiomas e demais níveis — escopo grande, sem instrução de por
  onde começar.
- **Semáforo de bandeiras**: pesquisado (sistema real, baseado no telégrafo de Chappe/Popham/Pasley),
  mas toda fonte encontrada (Wikipédia, dcode.fr, National Museum of the Marine Corps) mostra a
  tabela completa só como desenho, nunca como texto — transcrever 26 ângulos à mão sem como conferir
  é arriscado. Melhor fonte pra alguém transcrever com cuidado: folheto "Semaphore Flag
  Communication" do usmcmuseum.com, página 3, idealmente conferindo contra uma segunda fonte visual.
- **Escritas antigas não alfabéticas**: hieróglifos egípcios e glifos maias pedem imagem/SVG de cada
  sinal (não são digitáveis) e um jeito novo de "digitar" resposta nas lições que o app não tem
  ainda — tratar como projeto de código separado. Copta é mais simples (alfabeto Unicode, parecido
  com o grego) e pode seguir o fluxo atual.
- **Mitologia de criação dos povos**: ideia do Matheus, ainda sem decisão de onde entra (Cultura?
  aba própria? campo novo `creationMyth` no `LanguagePack`?) — mesmo cuidado de fonte real do resto
  do conteúdo.
- **Reorganizar idiomas no Perfil**: falta a parte de abas por tipo (naturais/artificiais/outros)
  permitindo escolher qualquer um dos 8 mil+ idiomas do mundo; os sem trilha (e sem planos de ter)
  iriam para "cursos" (`src/app/cursos.tsx`/`curso/[id]`, já existe como conceito).
- **Patrimônios da Humanidade (UNESCO) no mapa**: já cobre ROU, MDA, ESP, ITA, FRA, RUS, JPN, PRT,
  SWE, ISL, EST, LVA, LTU, ARG, CHL, COL, CUB, GBR, KEN, MEX, PER, TZA. Países do app ainda sem
  patrimônios cadastrados ficam pra uma rodada futura, baixa prioridade.
- **Reformulação "Antártica selvagem" — pontas sem fechar**: sons ambiente específicos por região de
  destino (fiordes na Noruega, vales na Romênia…) e paisagens específicas por região não feitos.
  Moradias do desembarque faltando pra pt, ru, sv, fr, nb, da, is, fi, et, fo (só romena, andaluza e
  toscana existem) — a cota de geração no Canva acabou; os pedidos (com a barraca como referência)
  estão prontos pra repetir, mas **pausado até o Matheus pedir de novo** (mesma régua desde
  03/10/2026).

### Revisão de conteúdo pendente
- **Histórias "de história em história"**: o Linu, escrito em 3ª pessoa, às vezes "decide" por conta
  própria em vez de esperar a escolha do jogador. Decisão já tomada: não reescrever tudo pra 2ª
  pessoa, só ajustar os trechos em que isso fica mais forte. Ainda não começado: precisa de uma
  passada por `historias.ts` de cada idioma procurando esses trechos específicos.
- Revisar `la`, `oc`, `en`, `id` e `vi` como já foi feito com `gl`, `ast` e `sc`. Há dúvida aberta
  sobre a etimologia de «nai» < matre(m), no galego.
- Suaíli: ~2.400 palavras, meta ~4.000. Próximos lotes em `src/data/sw/vocab-17.ts` e seguintes.

### Limitações técnicas conhecidas (não são bugs, não há o que corrigir sem escopo maior)
- **Microfone no app nativo**: no Expo Go/build nativo não existe reconhecimento de voz
  (`Platform.OS !== 'web'` sempre volta `false`) — precisa de módulo nativo de STT e build de
  desenvolvimento, fora do alcance de uma sessão de CLI sem Xcode/Android Studio. No navegador
  (Web Speech API) já funciona, com mensagens de erro específicas por código.

### Achados ainda sem reprodução/causa confirmada
- **Erro `removeChild` intermitente** (~1 em 4 rodadas do `fluxo-licao.mjs`, ao sair da tela de
  recompensa com `goBack`): não quebra nada visível, causa não encontrada.
- **"LinuLingo já está aberto em outra aba"**: mitigado (a tela recarrega sozinha se ninguém
  responder em 2,5s), mas a causa raiz do relato original (preso depois de abrir/voltar de
  `/amigos`) nunca foi reproduzida no Playwright.

### Outras pendências pequenas
- XP: o Matheus pediu sugestões, ainda sem decisão de qual seguir.
- ❓ **Mensagem confusa, ainda sem resposta do Matheus** (duas partes possivelmente misturadas):
  "Conjuga certo no tutorial, quando você está escrevendo tem que aparecer, na parte de novas casas
  pelo caminho: e no fim uma casa nas Ilhas Faroe ou na Romênia e etc." Pode ser (a) o tutorial
  mostrar/conjugar texto corretamente enquanto a pessoa digita uma resposta, e (b) retomar as casas
  que faltam no mapa (ver item acima) — Romênia já tem casa, então pode ser só um exemplo do Matheus
  sem saber que já existe. Perguntar antes de agir.
- "Enviar pra nativos" (botão do Diário/`communityPrompt`) hoje só grava local, sem destino de
  verdade — talvez valha ajustar o texto do botão pra deixar isso mais claro.

## Referência útil (não é tarefa, mas ajuda quem continuar)

### Como fazer um pacote novo
- Modelo: `src/data/rm/` e `src/data/lad/`. Língua morta: `src/data/la/`. Escrita não latina:
  `src/data/ja/`, `src/data/ko/`, `src/data/uk/`.
- Estrutura: 2 unidades (A1.1 e A1.2), cada uma com 2 lições de 6 palavras e 3 lacunas, mais uma
  prova; 4 tópicos de gramática e 2 histórias; extras (3 textos da comunidade, 1 cenário, 5
  etimologias, 4 temas do diário, 4 frases de shadowing); `incomplete: { until: 'A1.2', note }` — a
  nota não deve dizer "sem transcrição fonética" (o app já lista isso sozinho).
- Validação: toda palavra de lição existe no vocabulário e tem imagem; a resposta da lacuna está
  entre as opções; as histórias não têm galho sem saída. `src/data/conteudo.test.ts` já cobre boa
  parte disso.
- Depois de registrar, rode `npm test`, `npx tsc --noEmit`, `npm run lint`,
  `npx tsx scripts/fluxo-incompletos.mjs <códigos>` (com o servidor web rodando) e
  `npx tsx scripts/pictogramas-palavras.mjs`.

### Taxonomia variante/dialeto/sotaque (já aplicada, mas útil pra idiomas novos)
Definida pelo Matheus e já em uso no app: **variante** = forma ESCRITA diferente da mesma língua
(ex.: bokmål/nynorsk, chinês tradicional/simplificado, mongol tradicional/cirílico, formas
latinizadas como romaji/pinyin); **dialeto** = muda por país/região, bem documentado (ex.:
português de Portugal/Angola/Brasil); **sotaque** = variação de pronúncia dentro do mesmo
país/região (ex.: carioca, nordestino, baiano, centro-oeste). Ao criar ou revisar um pacote, aplicar
essa régua em `LanguageVariant`/`Accent`.

### RTL (direita pra esquerda) — resolvido, não reinvestigar
Os 7 pacotes RTL do app (ar, arz, fa, ur, yi, he, ckb) já são pacotes completos de verdade, não
placeholders, e o bug de bidi (trechos RTL embutidos em texto português reordenando as frases em
português ao redor) já foi corrigido com `isolateRtlRuns` (`src/services/bidi.ts`), em uso em
`CulturalGrammarCard.tsx`, `TourOverlay.tsx`, `HomeScreen.tsx` e `TutorialScreen.tsx`. Árabe também já
tem as 4 formas cursivas de cada letra. Se alguma nota antiga em qualquer lugar do projeto disser
"RTL bloqueado" ou "placeholder" pra esses códigos, está desatualizada — confira o código antes de
confiar na nota.

### Simlish — pesquisado, decisão de não criar minicurso
A origem é real (SimCopter 1996, Will Wright, gibberish improvisado por Stephen Kearin e Gerri
Lawlor pra evitar repetição cansativa entre idiomas reais), mas a própria Wikipédia confirma que
"Simlish não pretende ser uma língua estruturada" — toda tabela de "vocabulário" que aparece em
buscas vem de wiki de fã ou análise acadêmica externa não confirmada pela EA/Maxis. Ensinar isso
como vocabulário certo violaria a regra de nunca inventar conteúdo linguístico. Tratamento atual (já
suficiente, não precisa de pacote): cartão de curiosidade em `src/data/tipos-de-linguas.ts`
(id `'simlish'`), com a história real e só "Sul sul!" = "Olá!" como amostra confirmada.

### Artigo definido com nome de país (bug achado pelo Matheus, 08/10/2026)
O tutorial dizia "uma casa em Romênia" / "desembarco em Ilhas Faroe" — "em" cru sem contrair com
o artigo certo do país ("na Romênia", "nas Ilhas Faroe"). **Feito**: `src/services/artigo-geografico.ts`
(tabela de artigo por nome de país de `WORLD`, funções `emLocal`/`deLocal`, fontes: Manual de
Comunicação da Secom do Senado, Ciberdúvidas, boletim "a folha" da DGT/Comissão Europeia) — 98 dos
250 nomes com artigo confirmado, 152 sem artigo por falta de fonte segura ("em X" cru nunca está
errado). Aplicado em `tour.ts` (2 falas) e no seletor de moradia em `HomeScreen.tsx`. Se quiser
aumentar a cobertura depois, ver o critério exato no topo de `artigo-geografico.ts` antes de
preencher mais entradas (não vale só "terminar em -a": Angola/Samoa/Cuba terminam em -a e não levam
artigo nenhum).

### Destino da aventura pra línguas sem país no CLDR/mapa (bug achado por agente, corrigido 08/10/2026)
`non`, `vo`, `tok`, `jbo`, `io`, `tlh` usam bandeira simbólica (não a de um país real) e não têm
entrada no CLDR (`idiomas-mundo.ts`) nem em `onde-se-fala.ts` — `destinoDoIdioma()` (`aventura.ts`)
devolvia `null` pra todos, quebrando a trilha. Nota: esperanto e interlíngua só "funcionavam" por
coincidência — o CLDR registra ruído estatístico de falantes (San Marino pro esperanto, França pra
interlíngua), não é um padrão deliberado pra línguas sem território, então não virou precedente.
**Feito**: nórdico antigo (`non`) é língua histórica real — ganhou destino de verdade, a Islândia
(`PAIS_HISTORICO` em `aventura.ts`), por ser onde as sagas foram preservadas e onde é mais estudado
hoje. As 4 construídas internacionais (`vo`/`tok`/`jbo`/`io`, sem pátria por design) e o klingon
(`tlh`, língua fictícia de Star Trek, sem povo real) entraram em `REGIOES_SEM_PAIS` (mesmo mecanismo
do curmanji/Curdistão), com nome honesto em vez de inventar um país ou capital simbólica: "nenhum
país" pras 4 construídas, "espaço (ficção)" pro klingon (com entrada em `ARTIGOS` pra "no espaço
(ficção)"). Testes: `aventura.test.ts`, `artigo-geografico.test.ts`, `tour.test.ts`.

### Git
Desde 08/10/2026, por pedido do Matheus: só dar `git push` pra master (dispara o deploy automático
do GitHub Pages) quando uma rodada de trabalho estiver fechada de verdade — mesclar localmente sem
pressa, mas não publicar a cada merge pequeno.
