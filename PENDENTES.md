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
  - A amostra do quenya virou palavras soltas, porque Tolkien morreu há menos de 70 anos.
  - **Falta ver no navegador**: Cultura → Tipos de línguas → Artificiais.

## Prontos, mas ainda não registrados
Passam no `checkpack`, mas falta revisar o conteúdo, pôr em `PACKS` e em `LANGUAGES` no grupo da
família (em `src/data/idiomas.ts`) e rodar o roteiro:
- **lb** luxemburguês (LUXEMBURGUES?), **bg** búlgaro, **sr** sérvio, **hr** croata,
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

## Git
- Push feito até `5ddab696`. Os commits depois disso (amigos do Linu, 9 idiomas novos, árvores)
  estão só no computador: é preciso dar push para o site (GitHub Pages) atualizar.
