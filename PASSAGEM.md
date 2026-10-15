# Passagem: Quarto e Quantik (branch jogo-quarto-quantik)

Trabalho parado a pedido da coordenadora (máquina pesada). Apagar este arquivo antes do commit final de cada jogo.

Atenção: o roteiro `scratchpad/roteiro-jogo.md` NÃO existia quando comecei (o /tmp foi limpo). Segui o padrão dos commits do gamão (4c1f7b31) e do dominó (639a83bc).

## Pronto (commit WIP, ainda sem o typecheck conferido)
- `src/services/quarto-engine.ts`: regras oficiais (escolher a peça do adversário, colocar, linhas/colunas/diagonais, variante avançada dos 9 quadrados 2×2, regra do anúncio “Quarto!” com roubo pelo adversário “naquele momento” e perda de valor depois, empate, `encerrar` para tabuleiro cheio com Quarto não anunciado). Peça = número 0–15, bits ALTA=1, ESCURA=2, QUADRADA=4, FURADA=8.
- `src/services/quarto-ia.ts`: Linu com negamax + alfa-beta sobre pares casa+peça; poda as peças que entregam vitória na hora; difícil com aprofundamento iterativo e 700 ms de limite; médio prof. 2; fácil prof. 1 com ruído (nunca dá peça que perde na hora). Fica fora do `jogos-ia.ts` para evitar conflito com as outras worktrees.
- `src/services/quarto-engine.test.ts`: 11 testes, todos passando (`npx tsx --test src/services/quarto-engine.test.ts`; o teste Linu × Linu demora ~7 s por causa do limite de tempo do difícil).
- `src/components/QuartoBoard.tsx`: peças em SVG próprio (perspectiva leve: corpo alto/baixo, madeira clara/escura, topo elipse = redonda, losango com duas faces = quadrada, furo escuro com borda no topo), tabuleiro 4×4 com covas, reserva 2×8, “Na sua mão”, chips “Só linhas | Linhas e quadrados 2×2 | Anunciar Quarto: sim/não” (mudar recomeça), botão “Quarto!”, “Terminar (empate)”, dicas (peças perigosas com “!”, casas vencedoras), último lance, desfazer volta até a sua vez contra o Linu. Quem começa é sorteado (regra: dados). NÃO conferido no tsc nem no navegador.
- `git merge master` feito (traz o campo `etimologia`, e0f9f225).

## Falta
Quarto:
1. `npx tsc --noEmit` e `npx expo lint` no QuartoBoard (o tsc em segundo plano terminou com código 0 filtrando por “quarto”, mas conferir de novo).
2. Registrar: `src/components/jogos/tabuleiros.ts` (`quarto: QuartoBoard`), `src/data/opcoes-jogos.ts` (`quarto: { tabuleiro: true, dicas: true, ultimoLance: true, coordenadas: false }`; o teste `opcoes-jogos.test.ts` confere contra o código), ícone em `src/components/jogos/IconeJogo.tsx` (case 'quarto').
3. Ficha em `src/data/jogos-conhecimento.ts` (trocar o stub): `status: 'pronto'`, `playable: true`, `linu: true`, `categoria: 'modernos'`, `epoca: 'contemporaneos'`, `regiao: 'europa'`, `povo: 'Suíça (autor) e França (editora)'`, year '1991', rules, variants (iniciantes com 1–3 características; avançada dos quadrados; anúncio), about, etimologia.
4. Entrada no topo de `src/data/changelog.ts` (hora de São Paulo).
5. `scripts/fluxo-quarto.mjs` (modelo: `scripts/fluxo-domino.mjs`) e olhar no navegador, porta 8109, celular e desktop, claro e escuro; fechar o servidor logo depois.
6. Commit “Quarto jogável…”.

Quantik (nada começado ainda):
- Motor `quantik-engine.ts`: 4×4 em 4 regiões 2×2; cada jogador 8 peças (2 esferas, 2 cilindros, 2 cubos, 2 cones); proibido pôr uma forma na linha, coluna ou região onde o ADVERSÁRIO já tem essa forma (as próprias não impedem; se as suas permitem e as dele proíbem, é proibido); vence na hora quem põe a 4ª forma diferente numa linha, coluna ou região, não importa de quem são as outras; quem não tem lance na vez PERDE na hora; primeiro jogador sorteado.
- IA: negamax com alfa-beta e tabela de transposição, quase completa (o jogo é pequeno), lances que vencem primeiro.
- Board com as 4 formas em SVG próprio (esfera, cilindro, cubo, cone), madeira clara/escura; tudo o mais como no Quarto. Commit separado.

## Fontes (consultadas em 14/10/2026)
- Regra oficial do Quarto, Gigamic, edição 11-2016, “© 1991 Gigamic from a concept of Blaise Muller”: https://en.gigamic.com/index.php?controller=attachment&id_attachment=466 (anúncio, roubo, perda de valor, empate, variante para iniciantes, variante avançada com “9 maneiras a mais”). Página: https://en.gigamic.com/game/quarto-classic (Super As d'Or 1992; Auswahlliste do Spiel des Jahres 1993).
- Wikipédia em inglês “Quarto (board game)”: autor suíço Blaise Müller; Dé d'Or des Créateurs de Jeux 1989 (Paris); Super As d'Or 1992 (Cannes); indicado ao Spiel des Jahres 1993; Mensa Select 1993; resolvido por computador por Luc Goossens (1998): com jogo perfeito, empate.
- François Jacquet, “Quarto”, Math-École nº 154 (set. 1994), reproduzido em “Grand N” nº 58 (IREM Grenoble): Blaise Müller é suíço, a Gigamic é francesa, Dé d'Or do concurso de Boulogne-Billancourt.
- tesla-mag.com “Quarto Gigamic règle”: a Gigamic foi fundada em 1991 em Wimereux por três irmãos; o Quarto foi o primeiro jogo dela; Mensa Select 1993.
- Regra oficial do Quantik, Gigamic 06-2019, “® & © 2019 GIGAMIC from a concept of Nouri Khalifa” (PDF: https://www.lesjouetsenbois.com/files/catalog/products/documents/gigamic-quantik.pdf; tem versão em português, p. 7). Página: https://export.gigamic.com/game/quantik/ (autor Nouri Khalifa). Lançamento 2019 (ficha de loja: 16/10/2019). Nenhum prêmio encontrado.

## Decisões e dúvidas
- Quantik é de 2019 (século XXI): nenhuma época serve; usar `epoca: 'contemporaneos'` (a mais próxima) e avisar no relatório, sem criar época nova.
- Etimologia (pedido do dono, campo `etimologia`): nenhuma fonte explica os nomes. Quarto: “quarto” é o ordinal “quarto/quarta” em italiano e português, e o jogo gira em torno do 4 (4 características, 4 em linha, 4×4), mas a Gigamic e o autor não explicam: escrever como provável e incerto. Quantik: lembra o francês “quantique” (quântico), mas sem fonte; dizer que é incerto.
- Sem exército nem skin nova (não precisa).
