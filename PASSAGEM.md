# Passagem: “quem começa” contra o Linu (branch jogos-quem-comeca)

Pedido do dono: “quero ter a opção de não começar sempre”, em todos os jogos contra o Linu. O trabalho
parou no meio, a pedido do dono, porque a memória da máquina acabou.

## API

- **Preferência**: `jogosPrefs.quemComeca`, com os valores `'eu' | 'linu' | 'sorteio'` e padrão `'eu'`.
  Vale para todos os jogos de uma vez (uma escolha geral, por ser o mais simples). O tipo
  `QuemComeca` está em `src/services/quem-comeca-regra.ts`, e o `jogos-prefs` reexporta.
- **Componente** `src/components/jogos/QuemComeca.tsx`: `<QuemComeca jogo?: string />`.
  - Mostra três botões, “Eu começo”, “O Linu começa” e “Sorteio”, no estilo do SeletorVariante.
  - Se o jogo está em `SEM_QUEM_COMECA`, os botões aparecem desligados, com o motivo embaixo.
  - Está no painel Personalizar (`PainelPersonalizar.tsx`), logo depois do “Nível do Linu”, e no
    cartão do jogo nas páginas do Lazer (`OtherGameScreen.tsx`, quando `jogo.linu`).
- **Hook** `useLadoDoLinu(comeca, outro, partida, lances)`, em `src/services/quem-comeca.ts`.
  - Devolve o lado do Linu na partida. `comeca` é o lado que começa pela regra do jogo, `outro` é o
    outro lado.
  - `partida` é `h.pilha[0]!`, o estado inicial. A decisão fica guardada num WeakMap preso a ele:
    só muda numa partida nova, ou antes do primeiro lance (`lances === 0`).
- **Funções puras** em `quem-comeca-regra.ts`:
  - `ladoDoLinu(escolha, comeca, outro, rng)`.
  - `primeiroAJogar(escolha, voce, linu, rng)`, para os jogos em que o Linu tem sempre o mesmo
    lugar (a amarelinha e a primeira rodada do Hanafuda).
- **Exceções**: `src/data/quem-comeca.ts` → `SEM_QUEM_COMECA`, com o motivo de cada jogo.
  - **Pela regra**: gamão (os dados decidem) e dominó (a carroça mais alta).
  - **Pelo lado escolhido**: onça, bagh-chal e raposa e gansos.
  - **Sem vez**: esgrima e Pong (os dois agem ao mesmo tempo).
  - **Encantados**: outra sessão faz nele com o mesmo campo; quando ela juntar, tire o Encantados
    da lista.

## Decisão principal

A regra do jogo continua decidindo QUAL LADO começa (as brancas no xadrez, as pretas no go, o X na
velha…). A escolha decide DE QUE LADO fica o Linu. Em cada tabuleiro, o lado fixo do Linu (antes
`1`, `'b'`, `'o'`…) virou a variável `LINU` nas mesmas linhas: `vezDoLinu`, `xp.dar`, os nomes,
o desfazer e os textos do resultado. São mudanças pequenas e aditivas.

## Pronto (41 componentes)

- **Jogos de tabuleiro (39)**: quantik, kōnane, mū tōrere, hex, qawale, pontos e caixas, quarto,
  squadro, pylos, quixo, ur, senet, yut, kalah, bao, oware, alquerque, linhas de ação, halma, nim,
  surakarta, qomet, xadrez, chaturanga, makruk, xiangqi, janggi, shogi, amazonas, fanorona, dara,
  lasca, reversi, jogo da velha, Ligue 4, damas, gomoku, damas chinesas e pachisi.
  - **Xadrez**: contra o Linu, quem joga de pretas vê o tabuleiro do lado delas.
  - **Gomoku**: com a troca, quem joga em segundo pode trocar (agora também você, quando o Linu
    começou).
  - **Damas**: antes o Linu sempre começava; agora o padrão é “Eu começo”.
  - **Janggi (limitação)**: quando o Linu começa, ele joga antes que você escolha a sua arrumação.
- **Lazer (2)**:
  - **Hanafuda**: a escolha decide quem dá as cartas na 1ª rodada (o oya).
  - **Amarelinha**: a escolha decide quem joga primeiro; o Linu continua sendo o jogador 2.

## Falta

1. **Mancalas novas** de outra sessão: pallanguzhi, sungka e toguz korgool, e qualquer outro jogo
   com `linu: true` que tenha entrado depois. O teste `src/data/quem-comeca.test.ts` parou no
   pallanguzhi. Esses tabuleiros não usam `useLinuJoga` do mesmo jeito; ver como o Linu entra
   neles e ligar `useLadoDoLinu`, ou pôr o jogo em `SEM_QUEM_COMECA` com o motivo.
2. **Rodar os testes** de novo: `src/data/quem-comeca.test.ts`, mais os testes dos motores e das IAs
   tocados, se quiser conferir.
3. **Tutorial**: uma linha sobre a opção (`src/services/tour.ts`), por exemplo no passo `jogo`, que
   fala do Personalizar.
4. **Changelog** com a hora real (`TZ=America/Sao_Paulo date`).
5. **Navegador**: uma vez, porta 8106, desktop e iPhone, claro e escuro. Conferir “O Linu começa”:
   ele faz o primeiro lance sozinho. Depois fechar o servidor.

Até aqui: `tsc --noEmit` sem erros; eslint sem avisos nos arquivos tocados; o teste de dados com 3
de 4 passando (falta o item 1).
