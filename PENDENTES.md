# Pendências (atualizado em 29/09/2026)

O trabalho foi interrompido por falta de créditos. Tudo está comitado. Este arquivo diz onde parou.

## Feito nesta rodada
- **Amigos do Linu** (`/amigos`): 5 pinguins e 7 animais da Antártida, com desenho, espécie e
  fatos. Tem atalho na Home e no Perfil.
- **Idiomas registrados só com o A1** (22), todos testados no navegador com
  `scripts/fluxo-incompletos.mjs`:
  - gl, ast, oc, sc, rm, fur, la, lad, en, id, vi, yo;
  - lld, de, nl, af, pl, cs, sk, uk;
  - tr (completado e revisado).
- **Categorias padronizadas**: «Saudações/Família/Comida» → «Expressões/Pessoas/Alimentação e
  Restaurantes» em gl, ast, oc, sc, la, en, id e vi.
- **Árvores genealógicas das línguas artificiais** (`tree` em `src/data/tipos-de-linguas.ts`, que
  o `ConlangCard` mostra):
  - quenya e sindarin (a árvore dos elfos de Tolkien);
  - alto valiriano, com os dialetos derivados;
  - esperanto → ido → novial;
  - brithenig;
  - loglan → lojban.
  - A regra dos 70 anos foi relaxada (ver AGENTS.md): a frase do quenya voltou, com o crédito.
  - **Conferido no navegador** (30/09/2026): as 5 árvores (quenya/sindarin, alto valiriano, esperanto→ido→novial, brithenig, loglan→lojban) aparecem certas em Cultura → Tipos de línguas → Artificiais, sem erro de console.

## Prontos, mas ainda não registrados
Passam no `checkpack`, mas falta revisar o conteúdo, pôr em `PACKS` e em `LANGUAGES` no grupo da
família (em `src/data/idiomas.ts`) e rodar o roteiro:
- **lb** luxemburguês (LUXEMBURGUES), **bg** búlgaro, **sr** sérvio, **hr** croata,
  **sl** esloveno, **eu** basco.
- Os nomes das exportações estão no `index.ts` de cada pasta.

## Pela metade (os agentes pararam no meio)
- **mk** macedônio: só `vocabulario.ts`.
- **rup** arromeno: só vocabulario, curriculo e gramatica.
- **zh** chinês: só vocabulario, curriculo e gramatica.

## Não começados
- **Românicos**: co, an, wa, vec, nap, scn, pms, lij, lmo, mwl, frp.
- **Germânicos**: fy, yi, nds, sco, gsw.
- **Eslavos**: be, bs, hsb, csb.
- **Família única**: el (grego), sq (albanês), hy (armênio).
- **Asiáticos**: hi, bn, ur, mr, te, ta, th, fa, tl. zh está pela metade.
- **Indígenas**:
  - gn guarani, yrl nheengatu, tpw tupi antigo;
  - qu quéchua, ay aimará, nah náuatle;
  - mi maori, haw havaiano, nv navajo.
  - Todos exigem fonte para cada palavra: não inventar, e usar o empréstimo que a comunidade usa.
- **Africanos que ainda são só um nome em `LANGUAGES`**: ar, ha, am, om, ig.

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
- Revisar la, oc, en, id e vi como já foi feito com gl, ast e sc. Há dúvida sobre a etimologia de
  «nai» < matre(m), no galego.
- Atualizar o README (tabela de idiomas) e o NotebookLM.md com os idiomas incompletos.
- Suaíli: ~2.400 palavras, a meta é ~4.000. Os próximos lotes vão em `src/data/sw/vocab-17.ts` e seguintes.

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

## Git
- Push feito até `5ddab696`. Os commits depois disso (amigos do Linu, 9 idiomas novos, árvores)
  estão só no computador: é preciso dar push para o site (GitHub Pages) atualizar.
