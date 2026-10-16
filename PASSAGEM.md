# Passagem: 3ª leva de variantes jogáveis (branch `jogos-variantes-3`)

Pausa pedida pelo dono em 16/10/2026 (memória esgotando). A branch saiu do master d83b8f1b.

## Pronto (commitado; tsc, eslint e testes escopados passando)

- `618c9562` **Jogo da velha: terni lapilli** (`terni`).
  - Arquivos: `services/terni-engine.ts`, `terni-ia.ts`, `terni-variantes.test.ts` e `components/TerniBoard.tsx`.
  - No `VelhaBoard.tsx` só mudou isto: a função antiga virou `VelhaClassico`, e o `VelhaBoard` virou um invólucro que lê `useVariante('velha')`. O `TerniBoard` recebe o `MarcaVelha` por prop, para evitar import circular.
- `ae0b7d36` **Xiangqi: xadrez manchu** (`manchu`).
  - O tipo `'b'` (bandeira, 旗) entrou em `xiangqi-engine.ts`: anda como carro, cavalo (com a perna presa) e canhão, e também está no `emXeque`.
  - `createInitialState(manchu)`: as vermelhas ficam só com a bandeira, em a1.
  - A bandeira vale 1600 no `VALOR_XIANGQI` (`jogos-ia.ts`).
  - O `XiangqiBoard` lê `useVariante('xiangqi')`. Teste: `xiangqi-manchu.test.ts`.
- Em cada commit: entrada no changelog (22.59 e 22.60, com a hora real), linha do `docs/variantes-jogaveis.md` passada para **a** e `jogavel` nos dados.
- Ainda NÃO conferido no navegador: abrir a porta 8108 uma vez só, no fim de tudo.

## Pela metade

- **Damas chinesas rápidas** (salto longo, “Super Chinese Checkers”): só li o código, nada foi editado.
  - Plano para `services/damas-chinesas-engine.ts`:
    - `longo?: boolean` no `EstrelaState` e `createInitialState(n, longo = false)`.
    - Em `saltosDe`, em cada direção: k casas vazias, a peça do “meio”, mais k casas vazias e a casa de pouso vazia (k = 0 é o salto normal).
    - Em `jogar`, carregar o `longo` para o estado seguinte (hoje o `next` é montado campo a campo).
  - No `DamasChinesasBoard.tsx`: `useVariante('damas-chinesas')`, `inicio` com o `longo` e chave de histórico `damas-chinesas:longo`.
  - A IA (`BUSCA_DAMAS_CHINESAS` em `jogos-ia.ts`) usa `jogar` e `lancesLegais`, então segue sozinha.
  - O texto da variante está em `jogos-conhecimento.ts`, por volta da linha 865.

## Fila que falta

1. **(b), na ordem:**
   - alquerque com a peça “soprada” (quem não captura perde a peça);
   - fanorona vela;
   - janggi norte-coreano (a quinta arrumação; ver o texto da variante);
   - komaochi no shogi;
   - jogo da onça com mais tocas;
   - Belgian daisy no abalone (sem fonte da posição: pular ou achar a fonte).
   - Extras (b), se sobrar tempo: Fanoron-Dimy 5×5, Kōnane retangular, janggi por pontos, sutras do makruk.
2. **(c), em ordem de popularidade:**
   - MINISHOGI 5×5: generalizar o motor do shogi (hoje `N9` fixo) sem mudar o perft do 9×9;
   - TABLUT: reaproveitar o hnefatafl;
   - RENJU: as proibições das pretas, 3-3, 4-4 e linha longa;
   - GRAND ABALONE e OCTI-X, só com fonte completa;
   - QUORIDOR A QUATRO, só se der para jogar bem no aparelho.
3. **No fim:** atualizar a seção “Para a próxima leva” do docs, conferir no navegador (porta 8108, uma vez, e fechar logo) e mandar o relatório ao coordenador.

## Fontes já lidas (16/10/2026)

- **Wikipédia em inglês, “Tic-tac-toe”:** no terni lapilli, cada um tinha só três peças e as movia “to empty spaces”. Não diz se é só para a casa vizinha.
- **Wikipédia em inglês, “Manchu chess”:** as vermelhas jogam sem cavalos, sem canhões e sem um dos carros, e o carro que sobra junta carro, cavalo e canhão. Pode começar em a1 ou em i1. As pretas parecem levar vantagem.
- **PyChess, “manchu”:** chama a peça de “Banner”. A versão Manchu+ do PyChess inverte os lados e não foi usada.

## Decisões (marcadas no texto do app como escolha ou simplificação)

- **Terni lapilli:**
  - a peça vai para qualquer casa vazia;
  - a mesma posição pela 3ª vez é empate.
- **Manchu:**
  - a perna do “cavalo” da bandeira pode ser presa, e ela captura como o canhão;
  - o caractere 旗 é escolha do app;
  - a bandeira começa em a1.
- **Padrão de trabalho:**
  - mudanças aditivas nos `*Board.tsx`, porque outros agentes mexem neles (“quem começa”, Pachisi, raposa, chaturanga, pallanguzhi);
  - commits por variante;
  - changelog pelo script `chlog.py` (no scratchpad desta sessão; ele põe a entrada no topo com a hora de `TZ=America/Sao_Paulo`);
  - testes só por escopo;
  - nunca rodar o Prettier nos arquivos: o repo não segue a config dele, e ele reescreve código que não foi tocado.
