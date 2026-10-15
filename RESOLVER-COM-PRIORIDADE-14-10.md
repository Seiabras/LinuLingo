# Resolver com prioridade (pedidos do dono, 14/10/2026)

Lista nova do dono, catalogada e ordenada por mim (o mais rápido primeiro, pra ir saindo logo; o
mais trabalhoso depois, porque vai demorar mais). Vem depois do item 13 da lista de 11/10 (já
fechado) e antes da fila "Depois destes" (4 jogos "em breve" + 8 jogos novos). Marque cada item com
[x] quando terminar e publicar. Se surgir dúvida, avisar o dono antes de inventar a resposta.

## ⚡ Rápido (consertos e ajustes pequenos)

- [x] **0a. Sprint: clicar na palavra/imagem às vezes manda pra fora do app.** Bug relatado pelo dono
      (sem passo a passo ainda) — a pessoa toca na palavra/imagem do sprint e, às vezes, o toque
      "vaza" e abre outro app/tela fora do LinuLingo. Prioridade alta dentro do rápido: é jogo
      central quebrando. Investigar handlers de toque/gesto da tela de sprint (link acidental,
      evento de toque que também dispara em algo por baixo, ou `Linking`/deep-link disparado por
      engano). **Feito em 14/10/2026**: causa real achada — `WordImage.tsx` mostra o crédito da
      foto/ícone (autor + licença + link) embaixo da imagem quando o cartão já está virado, e esse
      crédito é um `Pressable` (`Linking.openURL`) **dentro** do `Pressable` maior do cartão (que
      vira a carta ao tocar, em `DeckSession.tsx`). Na web, o toque num `Pressable` aninhado também
      "vazava" pro de fora (mesmo problema já resolvido antes em `ImmersionStep.tsx`/`ClozeStep.tsx`
      com `e.stopPropagation()` — apliquei o mesmo remédio aqui). No celular, abrir o link do
      crédito é abrir o navegador de verdade, que é sair do app — e como o crédito aparece bem
      embaixo da imagem (onde o dedo repete o toque pra virar de novo ou continuar), um toque que
      mirava a imagem podia cair ali sem querer. Testado no navegador (não consegui testar em
      celular de verdade nesta sessão): a página principal nunca mais navega para fora — o link do
      crédito abre certinho numa aba separada, sem afetar o cartão. **Se ainda acontecer depois
      desta correção**, o próximo passo seria afastar visualmente o texto do crédito da área onde o
      dedo toca para virar/continuar, não só impedir o vazamento do toque.
- [x] **0b. Tutorial: ainda aparece "Pular" onde devia ser "Próximo".** Texto/lógica do botão
      desatualizados num passo do tutorial. **Feito em 14/10/2026**: achei a causa — todo passo do
      tutorial com uma ação sugerida (▶ Fazer um sprint, ▶ Ver o álbum, ▶ Treinar o alfabeto…, 8
      passos ao todo, `src/services/tour.ts`) tinha o botão principal mostrando "Pular" em vez de
      "Próximo" (`TourOverlay.tsx`), porque ele nunca pulou o tutorial inteiro — só avança um passo,
      igual a qualquer outro. Trocado pra sempre "Próximo" (fora "Começar!" no último passo e
      "Concluir" pra quem já tinha pulado o tutorial, que continuam como estavam). Testado de
      verdade no navegador: cheguei no passo "Sprint de 5 minutos" e conferi o texto do botão antes
      e depois da troca.
- [x] **0c. Pacote de chance: preço em krill deve subir progressivamente a cada compra.** Hoje o
      preço é fixo; guardar quantas vezes a pessoa já comprou e escalar o preço a partir disso.
      **Feito em 14/10/2026**: novo contador `pacote_comprados` no banco; cada pacote custa
      `PACOTE_PRICE + 5 × quantos já foram comprados` (20, 25, 30…) — valor simples e previsível,
      sem decisão específica do dono sobre a curva, então fiquei com a mais fácil de entender. A UI
      (`OutfitsCard.tsx`) mostra sempre o preço do PRÓXIMO pacote. Teste novo confirmando que o preço
      sobe a cada compra.
- [ ] **0d. Chapéu de nacho mexicano com guacamole**, item novo da Loja do Linu (mesma régua de
      licença livre de sempre pros ícones/desenhos).

- [x] **1. Tutorial da sprint, botão OK não clicável.** Na tela do tutorial que explica o que é uma
      sprint (com o pinguim), ao repetir o mesmo movimento 5 vezes a tela inteira já pisca vermelho
      com a mensagem atual — mas o botão OK não responde ao toque. Manter a mensagem, só destravar o
      OK. **Feito em 14/10/2026**: achamos as duas causas de verdade — a "tela inteira" nunca
      piscava (só um texto pequeno dentro do próprio cartão do pinguim piscava, e parava de piscar
      bem na hora que o aviso grande aparecia) e o "— ok" nunca foi um botão, só texto solto, sem
      `onPress`. `GestureDemo.tsx` agora avisa o `TourOverlay.tsx` (único componente que cobre a
      tela de verdade) quando o aviso grande está ativo, e o `TourOverlay` pisca um vermelho
      translúcido por cima de tudo (sem bloquear toque em mais nada, mesmo truque já usado na
      sombra do destaque do tutorial); o "— ok" virou `Pressable`, que reinicia a demonstração ao
      tocar. Typecheck e lint passaram; **não consegui testar visualmente num navegador nesta
      sessão** (sem ferramenta de navegador disponível aqui) — vale conferir na tela de verdade.
- [x] **2. Cavalo repetido nos exércitos do México e do Japão.** Os dois temas usam a mesma figura
      de cavalo; trocar por ícones diferentes (mesma régua de sempre: licença livre, MIT/ISC/Apache
      ou CC0/BY/BY-SA, game-icons.net ou Fluent Emoji High Contrast). **Virou uma auditoria completa
      em 14/10/2026, por pedido do dono: "nenhuma peça do exército pode ser igual a de outro
      exército".** A primeira correção (trocar o cavalo do México pro mesmo estilo que Rússia/Índia/
      Vikings já usavam) **estava errada** — só movia a repetição pra outro lugar. Rodei um script
      conferindo `icone`+`autor` de toda peça de todo exército e achei 4 grupos repetidos de verdade:
      - **Cavalo** (6 exércitos queriam um: Japão, México, Vikings, Índia, China, Rússia — e só
        existem 2 ícones de "cabeça de cavalo" no game-icons.net inteiro). Mantive Japão (Lorc) e
        Vikings (Delapouite) como estavam; os outros 4 ganharam fonte nova, sem repetir nenhum:
        México → cavaleiro charro a cavalo (`cloaked-figure-on-horseback`, Caro Asercion,
        game-icons.net — aliás, combina melhor com "cavalo do charro" que o cavalo sozinho);
        Rússia → cavalaria (`cavalry`, Delapouite, game-icons.net); China → cavalo
        (Fluent Emoji High Contrast, Microsoft, MIT); Índia → cara de cavalo (idem). A Grécia já
        tinha o cavalo de Troia (`trojan-horse`, Delapouite) — não mexi, só confirmei que não bate
        com mais ninguém.
      - **Papagaio**: piratas e a fauna do Brasil usavam o mesmo (`parrot-head`, Lorc). A fauna do
        Brasil já tinha um tucano (bispo) do mesmo artista — pra não repetir de novo, a arara
        (dama) virou o papagaio do Fluent Emoji High Contrast (Microsoft, MIT).
      - **Pagode**: Japão e China usavam o mesmo (`pagoda`, Delapouite). A torre da China virou uma
        muralha (`stone-wall`, Delapouite, game-icons.net) — e cabe até melhor numa torre de xadrez
        que um pagode.
      - **Cacto**: a flora do Brasil (cavalo/n) e o exército dos cactos (dama/q) usavam o mesmo
        (`cactus`, Delapouite); o cacto do Brasil virou o do Fluent Emoji High Contrast (Microsoft,
        MIT). (Achado à parte, fora da regra do dono porque é dentro do MESMO exército, não entre
        dois: a dama e o peão do exército dos cactos também usam esse ícone igual entre si — deixei
        como estava, mas fica registrado caso o dono queira parelhar também.)
      Três dos ícones novos (papagaio, muralha, cacto do Brasil) tinham traço fino demais pro
      contorno padrão de 44 — ficavam uma mancha preta. Testei isso de verdade renderizando cada um
      do jeito que o `Figura` desenha (mesmo viewBox, mesmo contorno) antes de decidir: `traco: 10`
      resolveu os três, igual já tinha sido feito pra lhama. Conferido com screenshot antes e depois
      de cada ajuste.
- [x] **3. Borda da lhama (exército dos Andes) muito grossa.** Ajustar a espessura do traço. **Feito
      em 14/10/2026**: a borda das peças é um valor fixo (44, no quadro de 512) pensado pros ícones
      do game-icons.net, mais grossos; a lhama vem de outro acervo (Fluent Emoji High Contrast), com
      traço bem mais fino, e a borda padrão abafava o desenho dela. `PecaExercito` ganhou um campo
      `traco` opcional pra zerar isso peça por peça (só a lhama usa, por enquanto, com 18).
- [ ] **4. Loja do Linu: itens da categoria "Na mão" cortando na tela.** O dono mandou print
      (Perfil → Loja → Na mão): o cartão do item (ex. Quena) parece cortar algo — conferir o
      componente da grade/cartão de item da loja de roupinhas (não é a loja dos jogos) contra o
      print antes de mexer.
- [ ] **5. Shadowing: poder ouvir a própria gravação.** Hoje grava e compara com a voz nativa; falta
      um botão para tocar de volta o que a pessoa gravou, pra ela mesma se ouvir.

## 🛠️ Médio

- [ ] **6. Minicurso "dialeto gamer".** Um minicurso novo (ver o item 7: nome oficial "minicurso"),
      no modelo do braille (`src/data/cursos/tatil.ts`, `mais-licoes.ts`): o jeito de falar de quem
      joga (termos como "gg", "nerf", "buff", "lag", "noob", "carregar o time"…), em português do
      Brasil. Fonte: dicionários de gíria gamer e glossários de termos em português (não inventar
      gíria — cada termo entra com o sentido real, como os outros minicursos).
- [ ] **7. Renomear oficialmente para "minicurso".** Hoje o app usa "Cursos" pros dois (os grandes,
      com trilha completa — `src/app/curso/[id].tsx` — e os pequenos de 3 lições —
      `MiniCoursesScreen.tsx`, `MINI_COURSES`). Decisão do dono: só os grandes com trilha continuam
      "curso"; os pequenos passam a se chamar oficialmente **minicurso** em toda a interface (telas,
      botões, tutorial, changelog). Troca de texto na UI, não de dado — conferir se `MINI_COURSES` já
      não é o nome interno certo (parece que sim) antes de mexer no código, só nos textos visíveis.
- [ ] **8. Animação dos feijões caindo na mancala (oware e Kalah).** Hoje a semente só "aparece" na
      cova de destino; falta animar o trajeto (cada semente pulando/caindo casa a casa, no sentido da
      semeadura). Vale também pra outros jogos que semeiam (nenhum outro hoje, só as mancalas).
      Relacionado ao item 20 (animação dos lances à parte do tema) — dá pra fazer os dois juntos.
- [ ] **9. "Biologia" como área nova do Perfil, ao lado de "Psicologia".** Mesma régua de "Música" e
      "Psicologia" (`PENDENTES.md`, "Áreas novas do app"): por enquanto só a aba "em breve", sem
      conteúdo — o dono quer aumentar o escopo, mas depois de terminar jogos e focar nos idiomas.
- [ ] **10. Investigar a demora pra abrir o app.** O dono relatou que "ainda tá demorado pra abrir".
      Primeiro medir onde o tempo vai (cold start: carregar `idiomas.ts` lazy, banco, fontes,
      splash) antes de propor o que cortar — sem isso é chute.
- [ ] **11. Nome de cada jogador no modo a dois (jogos do conhecimento).** Hoje são só "Jogador 1" e
      "Jogador 2"; dar a opção de digitar o nome de cada um no Personalizar.
- [ ] **12. Relógio por jogador, opcional.** Tempo que corre pra cada jogador nos jogos do
      conhecimento, desligado por padrão.
- [ ] **12a. Buenos Aires (e cidades-estado/países muito pequenos) bugados na Expedição.** Relatado
      pelo dono sem mais detalhe — investigar a Expedição (`aventura.ts` e tela) pra entender o que
      quebra com território pequeno (provável: a área do país no mapa fica pequena demais pro
      cálculo/toque, ou o polígono do país não bate com o nome da capital). Conferir se é só Buenos
      Aires (cidade-estado, não é bem um "país" no mapa) ou se o problema é genérico pra qualquer
      território minúsculo (Mônaco, San Marino, Vaticano…).
- [ ] **12b. Tutorial: piscar "Próximo" em vermelho depois de 10s parado.** Se a pessoa fica 10
      segundos sem agir num passo do tutorial, o botão "Próximo" começa a piscar vermelho, chamando
      atenção. Relacionado ao item 1 desta lista (mesmo tipo de piscar vermelho já usado na tela da
      sprint) — dá pra reaproveitar o componente.
- [ ] **12c. Cachecol: poder voltar pra uma versão antiga já ganha, exclusiva por idioma.** Diferente
      das roupas (que valem pra qualquer idioma), o cachecol é específico de cada idioma: ganhar o
      cachecol no romeno não libera no russo. Precisa dar pra trocar entre as versões já ganhas em
      dois lugares: na Loja do Linu e na aba "Cachecol" dentro do Cofre de Vocabulário. Primeiro
      passo é entender o sistema de cachecol que já existe (onde fica guardado, como é ganho) antes
      de desenhar o seletor.

- [ ] **12d. Ao escolher um dialeto, o sotaque correspondente (quando existir) também deve aparecer
      selecionado.** Print do dono (tela "Variantes, sotaques e dialetos do mongol"): hoje, ao
      escolher o dialeto "Mongol da Mongólia", nenhum dos sotaques (Khalkha/Oirat) aparece marcado —
      mas o texto da própria tela já diz "o padrão do curso: o mongol khalkha da Mongólia". A pessoa
      não tem como ver de relance qual sotaque está estudando. Mostrar o sotaque padrão de cada
      dialeto como selecionado/destacado junto (ver o vínculo dialeto↔sotaque em
      `src/data/dialeto-de-sotaque.ts`, citado no `AGENTS.md`). Conferir se isso vale só pra exibição
      (destaque visual) ou se deve realmente fixar o campo de sotaque junto ao trocar de dialeto.

## 🧩 Trabalhoso (sistemas novos ou que mexem em muito jogo de uma vez)

A lista colada pelo dono (itens 13 a 25) é toda sobre deixar a personalização dos jogos mais solta —
hoje o tema do tabuleiro carrega várias coisas juntas (cor, som, clima, comemoração) que ele quer
poder escolher separado. Numerei seguindo a ordem que ele mandou.

- [ ] **13. Comemoração de vitória à parte do tabuleiro** (fogos, pétalas, moedas, estrelas…),
      independente do tema escolhido.
- [ ] **14. Clima à parte do tabuleiro** (neve, vaga-lumes…), independente do tema.
- [ ] **15. Som das peças à parte do tabuleiro, com volume próprio.**
- [ ] **16. A mesa em volta do tabuleiro, separada dele** (madeira, feltro verde, mármore, areia de
      praia, gelo antártico).
- [ ] **17. O Linu na partida**: joga com a roupinha do tema ativo e solta frases durante o jogo
      ("Boa jogada!"), com opção de desligar as frases.
- [ ] **18. Cor de destaque do app**, além do azul de hoje (verde, roxo, laranja…) — mexe em
      praticamente toda tela que usa a cor "conecta" fixa, não é mudança pequena.
- [ ] **19. Sons de acerto e erro das lições, para escolher** (hoje é um só por padrão).
- [ ] **20. Animação dos lances à parte do tema** (deslizar, pular ou aparecer) e velocidade
      ajustável — ver o item 8 (feijões da mancala), dá pra sair do mesmo projeto.
- [ ] **21. Tamanhos e variantes de jogo, como personalização de verdade** (não só cor/som): Go em
      9×9/13×13/19×19, gomoku 15×15/19×19, damas brasileiras ou internacionais (10×10), Kalah com 3
      a 6 sementes por casa, jogo da velha 4×4. Cada um pede motor (regra) e IA adaptados ao tamanho,
      não só visual — é o item mais trabalhoso da seção de jogos. **Dono do item: seiabras-07**
      (pedido direto do Matheus, 14/10/2026, depois das levas de jogos novos) — não mexer aqui.
- [ ] **22. Abrigo do Linu**: tapetes, quadros e móveis de países, comprados com krill — feature
      nova inteira (tela, loja, modelo de dado), no mesmo espírito da Loja de roupinhas de hoje.
- [ ] **23. Cenário da trilha** (mar, gelo, aurora, noite estrelada): arte e render novos para o mapa
      da Trilha.
- [ ] **24. Variantes dos jogos jogáveis, não só curiosidade.** Hoje cada jogo do conhecimento tem um
      campo `variants` só de texto (ex. Kalah "mais sementes por casa", `jogos-conhecimento.ts`); o
      dono quer que a pessoa consiga realmente jogar essas variantes, não só ler sobre elas. Parte
      disso é o mesmo trabalho do item 21 (tamanhos/regras como opção de verdade); outra parte é
      achar/motorizar variantes que hoje são só um parágrafo. **Dono do item: seiabras-07** (mesmo
      pedido direto do Matheus do item 21) — não mexer aqui.
- [ ] **25. Melhorar "consideravelmente" a textura dos jogos e das personalizações.** Pedido geral,
      sem detalhe do que trocar — avaliar com o dono o que ele quer dizer com "textura" (mais
      detalhe visual nas casas/peças? sombra, relevo?) antes de sair mexendo tabuleiro por tabuleiro.

- [ ] **25a. Seletor de idioma na primeira abertura: clicar num idioma com dialeto já mostra a
      escolha de dialeto ali mesmo.** Isso resolve a dúvida que estava em aberto em `PENDENTES.md`
      ("Na lista de idiomas... A discutir com o dono: como fica a variante do mongol..."): mirandês
      e mongol (escrita tradicional) deixam de ser cartões próprios na lista principal — mirandês
      passa a aparecer só dentro da escolha de dialeto do asturiano, e o mongol tradicional, dentro
      da escolha de variante/escrita do mongol. Mexe na tela de escolha de idioma do começo e em
      qualquer outro lugar que listar idiomas (trocar de idioma no Perfil, por exemplo, deveria
      ganhar o mesmo comportamento, a conferir com o dono se é só a primeira abertura ou sempre).
- [ ] **25b. Calendário de lições ao clicar no foguinho (sequência), como o do Duolingo.** Mostra os
      dias em que a pessoa fez lição. Ideias pra melhorar além do básico (o dono pediu sugestões):
      - marcar no calendário os dias de festividade/comemoração de cada país que já tem ficha
        cultural (`cultura-paises.ts`), com o emoji/ícone do país naquele dia;
      - aniversário dos personagens do app (o Linu, os amigos escondidos) marcado no calendário, com
        uma animação ou balão de fala naquele dia específico;
      - resumo do mês: quantos dias de sequência, qual foi o idioma mais praticado, recorde de XP num
        dia só;
      - nos dias sem lição, mostrar o motivo quando o app souber (ex. "congelamento usado aquele
        dia", se der pra cruzar com o histórico de congelamento já existente).
      Escopo real (motor do calendário + tela) é médio; as ideias de cima podem entrar aos poucos,
      não precisa vir tudo junto na primeira entrega.

## 🗺️ Conteúdo novo, grande escopo

- [ ] **26. Juntar, ao lado de "jogos do conhecimento", outras categorias de jogo**: jogos de carta,
      jogos de azar, brincadeiras (de rua/infância) e esportes. Isso é uma área nova de conteúdo,
      do tamanho de "jogos do conhecimento" hoje — pede decisão de escopo com o dono antes de
      começar (quantos jogos, quais países, jogáveis ou só enciclopédia como o Álbum).
- [ ] **27. Parar de depender do emoji nativo do sistema em qualquer lugar do app, não só no
      vocabulário.** O `AGENTS.md` já manda usar imagem em vez de emoji no conteúdo das palavras, com
      o emoji como último recurso; o dono agora quer isso mais largo: todo emoji que hoje é
      renderizado pela fonte do aparelho (ícone de botão, cabeçalho de seção, reação, etc.) fica
      visualmente diferente entre Android, iPhone e navegador — e ele quer consistência. Isso é
      grande se for pra trocar TODO emoji de interface por um ícone/imagem própria (passar por
      praticamente toda tela do app); levantar primeiro com o dono se é só os lugares mais visíveis
      (abas, botões principais) ou literalmente todo emoji antes de estimar o tamanho de verdade.
      **Exemplo concreto mandado pelo dono (print de 13/10/2026):** na lista de idiomas (variedades
      itálicas: lígure, lombardo, romanche, friulano, ladino das Dolomitas…), a bandeirinha do país
      não aparece no aparelho dele — fica só a sigla (IT, CH) sem a bandeira do lado. Bom ponto de
      partida pra investigar o alcance real do problema antes de decidir o tamanho da tarefa.

## 💡 Ideia solta do dono (avaliar, não é pedido fechado)

- O dono comentou, meio de passagem ("tals"): o tutorial podia mostrar as palavras que vão ser
  praticadas no dia seguinte. Não é um pedido fechado — vale perguntar antes de desenhar algo, pra
  não gastar tempo com uma ideia que ainda está sendo pensada.
- **"Mabelleto": um criptoleto baseado no jeito da Mabelle Caminha trocar palavras (14/10/2026).**
  Mabelle é a autora das fanarts do Linu já creditadas no app ("O Linu na unha"). O dono percebeu que
  ela troca certas palavras por outras, sem saber se é de propósito ou se ela realmente não conhece a
  palavra certa — exemplo dado: ela chama de "alpiste" (que em português é o que se dá pra passarinho)
  o gergelim (a sementinha do sushi). A ideia é documentar esse jeito de falar como um criptoleto
  próprio (no espírito do Tsevhu, um idioma artificial de uma pessoa só já no app), possivelmente como
  um minicurso, no estilo do "dialeto gamer" (item 6). **O dono ainda vai explicar melhor** — não
  começar a levantar vocabulário antes disso; por enquanto só a ideia e o primeiro exemplo (alpiste ↔
  gergelim) estão registrados.

## ❓ Pergunta do dono, respondida na conversa (não vira tarefa sozinha)

- **"Transformar num app online, que exige internet — quais os benefícios?"** Pergunta exploratória,
  respondida direto na conversa em 14/10/2026 (não é uma decisão tomada ainda). Resumo: hoje o app é
  100% local (SQLite no aparelho, sem servidor); exigir internet traria sincronizar progresso entre
  aparelhos, atualizar conteúdo sem passar pela loja de apps, e abrir espaço pra social (ranking,
  amigos de verdade). O custo é grande: construir e manter um backend do zero, perder o uso offline
  (hoje dá pra estudar sem internet, inclusive em viagem), e lidar com login/conta de gente de
  verdade. Não é uma mudança pequena — é uma decisão de arquitetura, não uma tarefa de lista.

## ⚠️ Para confirmar com o dono antes de mexer

- **Mancalas de países — conflito com o que já foi decidido.** O pedido novo pede "o tabuleiro de
  oware entalhado de Gana e o bao da Tanzânia, com sementes típicas de cada lugar". Isso bate só em
  parte com o que já foi entregue hoje (14/10/2026, ver `RESOLVER-COM-PRIORIDADE-11-10.md`, item
  13.5): quatro coleções novas na loja (Pallanguzhi indiano, Toguz korgool centro-asiático, Sungka
  filipino, Warri caribenho), todas pensadas como visual emprestado de um jogo de mancala real,
  aplicado ao oware/Kalah do app (que têm sempre 2 fileiras de 6 casas). O **bao da Tanzânia tem 4
  fileiras** — é outro jogo, com outro tabuleiro e outras regras (isso já tinha sido decidido assim
  em 11/10/2026, por pedido explícito do dono: "não serve como tabuleiro do oware"). Duas leituras
  possíveis do pedido novo, que só o dono pode resolver:
  1. Um tabuleiro "Oware de Gana" simples (madeira entalhada, sem o tema de país que já existe por
     padrão) — fácil de fazer, encaixa no que já foi entregue hoje.
  2. O bao da Tanzânia **como jogo jogável à parte** (motor de 4 fileiras, regras próprias) — isso
     não é mais "mancala de país" (visual), é um **jogo novo inteiro**, do tamanho dos outros jogos
     "em breve" da fila (gamão, damas chinesas, dominó, shogi).
  Perguntar ao dono qual das duas (ou as duas) antes de começar.
