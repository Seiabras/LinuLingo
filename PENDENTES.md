# Pendências (29/09/2026)

Trabalho interrompido por falta de créditos. Onde parou:

## Idiomas incompletos (só o A1)
- **Registrados e testados** (`src/data/idiomas.ts`, `scripts/fluxo-incompletos.mjs` passou em todos):
  gl, ast, oc, sc, rm, fur, la, lad, en, id, vi, yo.
- **Prontos, mas ainda não registrados** (passam no `checkpack`, falta revisar o conteúdo e pôr em
  `PACKS` + `LANGUAGES` no grupo da família):
  - românicos: lld (ladino das Dolomitas);
  - germânicos: de, nl, af;
  - eslavos: pl, cs, uk, sk.
- **Nem começados** (os agentes pararam antes):
  - românicos: rup, co, an, wa, vec, nap, scn, pms, lij, lmo, mwl, frp;
  - germânicos: lb, fy, yi, nds, sco, gsw;
  - eslavos: bg, sr, hr, sl, mk, be, bs, hsb, csb.
- **Línguas de família única** (pedido novo, não começado): eu (basco, isolada), el (grego,
  helênico), sq (albanês), hy (armênio).
- **Turco (tr)**: só `vocabulario.ts` e `curriculo.ts`; faltam gramatica, historias, extras e
  index, e trocar o objeto provisório de `tr` em `LANGUAGES` pelo pacote.

### Como validar cada pacote novo
- Formato a copiar: `src/data/rm/` e `src/data/lad/`.
- Depois de registrar, rodar `npx vitest run`, `npx tsc --noEmit` e `npm run lint`.
- Com o servidor web rodando: `npx tsx scripts/fluxo-incompletos.mjs <códigos>`.

## Revisões pendentes
- Revisar la, oc, en, id e vi como já foi feito com gl, ast e sc. Há dúvida sobre a etimologia de
  «nai» < matre(m), no galego.
- Nos pacotes gl, ast, oc, sc, la, en, id, vi e tr, trocar as categorias fora do padrão:
  «Saudações» → «Expressões», «Família» → «Pessoas», «Comida» → «Alimentação e Restaurantes».
- Rodar `scripts/pictogramas-palavras.mjs` para os vocabulários novos.
- Atualizar o README (tabela de idiomas) e o NotebookLM.md com os idiomas incompletos.

## Línguas artificiais: árvore genealógica (pedido novo, não feito)
Ideia: em `src/data/tipos-de-linguas.ts`, dar a `Conlang` um campo opcional `tree` e mostrar a
árvore no `ConlangCard` (`src/components/LanguageTypesTab.tsx`).
- **Quenya / Sindarin** (Tolkien), na versão tardia: quendiano primitivo → avarin | eldarin
  comum. O eldarin comum dá o quenya (vanyarin, noldorin) e o telerin comum. O telerin comum dá o
  telerin de Aman, o sindarin e o nandorin. Tolkien mudou essa árvore várias vezes (a do
  «Lhammas», de 1937, é outra); dizer isso.
- **Alto Valiriano** → dialetos «bastardos» (Astapor, Meereen), que Peterson também criou para a
  série.
- **Esperanto → Ido** (reforma de 1907), um parentesco real entre línguas artificiais.
- **Brithenig**: fica no ramo românico imaginário (latim → brithenig).
- Fontes (raízes) das a posteriori: interlingua, elefen, nadsat, toki pona.
- Regra do dono: citações só de autores mortos há mais de 70 anos. Tolkien morreu em 1973, então
  a amostra «Elen síla lúmenn’ omentielvo» deve virar palavras soltas (elen = estrela, …).

## Outros
- Suaíli está com ~2.400 palavras; a meta é ~4.000. Continuar dos lotes `src/data/sw/vocab-17.ts`
  em diante.
