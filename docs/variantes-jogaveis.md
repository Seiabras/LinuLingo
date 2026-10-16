# Variantes jogáveis (levantamento de 15/10/2026)

Pedido do dono (item 24 da lista ativa em `PENDENTES.md`): “colocar as variantes como jogáveis”.
Aqui está cada variante (`variants`) dos jogos prontos, em `src/data/jogos-conhecimento.ts` e em
`src/data/outros-jogos/`, com uma destas classes:

- **(a) já jogável**: dá para jogar no app. O seletor “Variante” (campo `jogavel`) ou o seletor
  próprio do jogo.
- **(b) cabe no motor atual**: precisa de poucas mudanças de regra.
- **(c) precisa de motor novo**, ou de outro tabuleiro.
- **(d) não dá para jogar no app**: é só histórica, sem regra completa, só muda o material, só muda o
  nome, ou não faz sentido no aparelho.

Como uma variante (b) vira jogável:

1. Pôr a regra no motor, com teste.
2. Fazer o tabuleiro ler `useVariante('<id do jogo>')`.
3. Pôr `jogavel: '<id da regra>'` na variante, nos dados.

O teste `src/data/variantes-jogaveis.test.ts` confere o passo 3 contra o tabuleiro. A escolha fica em
`jogosPrefs.variantes`, e cada variante guarda a sua própria partida.

## Jogos de tabuleiro

| Jogo | Variante | Classe | Observação |
|---|---|---|---|
| Damas | Inglesas/americanas | **a** (`inglesa`) | A peça comum só captura para a frente; a dama anda uma casa; sem lei da maioria; quem coroa encerra o lance. Tem o Linu. |
| Damas | Internacionais (10×10) | **a** (`internacional`) | 10×10 com 20 peças. O Linu olha 2 lances a menos. |
| Xadrez | Xadrez960 | **a** (`960`) | Fileira sorteada. Roque é tocar no rei e depois na torre. Tem o Linu. |
| Quoridor | Para 4 jogadores | c | Pede 4 peões e o turno de 4 no motor e na tela. |
| Abalone | Belgian daisy | b (pendente) | Só muda a posição inicial, mas não achamos a posição escrita casa a casa em fonte aberta (a Wikipédia só tem a figura). |
| Abalone | Grand Abalone | c | Hexágono de 6 por lado (91 casas). |
| Abalone | Só em linha (regra da casa) | **a** (`linha`) | Pedido do dono; não é oficial. O Abalone ainda não tem o Linu. |
| Octi | Octi-X | c | Tabuleiro 9×9 e empilhamento de pods. |
| Hnefatafl | Tablut | c | Tabuleiro 9×9, com outras casas e outras regras de captura do rei. |
| Trilha | Doze homens (12 peças) | **a** (`doze`) | Diagonais. Tabuleiro cheio na colocação é empate. A trilha ainda não tem o Linu. |
| Trilha | Lasker | **a** (`lasker`) | 10 peças; colocar ou mover desde o começo. |
| Ligue 4 | Pop Out | **a** (`popout`) | Funciona em todos os tamanhos. Tem o Linu. |
| Oware | Ayò / Awari | d | As fontes dizem que as regras são praticamente as mesmas; muda o nome. |
| Oware | Warri | d | Só o nome e a história caribenha; sem regra completa. |
| Reversi | Reversi clássica (1883) | **a** (`classica`) | Começa vazio; os 4 primeiros lances são livres nas 4 casas do meio, sem virar nada. Tem o Linu. |
| Go | Contagem por território | **a** (`territorio`) | Território + prisioneiros (as mortas na contagem também), komi 6,5. O Go não tem o Linu. |
| Go | Partida com handicap | **a** (`handicap`) | 2 a 4 pedras pretas nos pontos dos cantos, brancas começam, komi 0,5. |
| Gomoku | Renju | c | As proibições das pretas (3-3, 4-4, linha longa) pedem detecção de padrões e o tabuleiro 15×15. |
| Gomoku | Caro | **a** (`caro`) | O cinco bloqueado nas duas pontas por pedras do adversário não vale; seis ou mais escapam; a beira não bloqueia. Tem o Linu. |
| Gomoku | Troca depois do primeiro lance | **a** (`troca`) | Botão “trocar de cor” a dois; contra o Linu, ele decide (troca se a 1ª pedra estiver perto do meio). |
| Jogo da velha | Terni lapilli | **a** (`terni`) | 3 peças de cada lado e depois mover para qualquer casa vazia (as fontes não dizem se é só a vizinha); a 3ª repetição empata. Tem o Linu. |
| Jogo da velha | Jogos de k em linha (m,n,k) | a (em parte) | O seletor de tamanho do jogo da velha e o gomoku já cobrem parte disso. |
| Fanorona | Fanoron-Telo (3×3) | c | Outro tabuleiro, e a regra é de outro tipo (movimento, sem captura). |
| Fanorona | Fanoron-Dimy (5×5) | b | Mesmas regras num tabuleiro 5×5. Fica para o seletor de tamanho. |
| Fanorona | Vela | **a** (`vela`) | As pretas (vencedoras) só oferecem pedras até ficarem com 5; as brancas tiram uma por vez. Tem o Linu. |
| Mancala (Kalah) | Captura com a casa da frente vazia | **a** (`frente-vazia`) | Tem o Linu. |
| Mancala (Kalah) | Mais sementes por casa | **a** (`seis`) | 6 sementes por casa. Tem o Linu. |
| Xiangqi | Xadrez manchu | **a** (`manchu`) | As vermelhas só com a bandeira (carro, cavalo e canhão juntos). Tem o Linu. |
| Xiangqi | Banqi | c | Outro jogo, com peças viradas para baixo. |
| Xiangqi | San Guo Qi | d | Três jogadores, tabuleiro hexagonal, regras incompletas nas fontes. |
| Gamão | Tavla | **a** (`tavla`) | Quem ganha a abertura rola de novo; na própria casa, a peça que bate não segue; sem backgammon. Tem o Linu. |
| Gamão | Tavli (portes, plakoto, fevga) | c | Portes é b; plakoto e fevga têm posição e regras próprias (prender, sem bater). |
| Gamão | Nardy | c | Peças juntas na “cabeça”, os dois no mesmo sentido, sem bater. |
| Gamão | Hypergammon | **a** (`hypergammon`) | 3 peças de cada lado nos pontos 24, 23 e 22. Tem o Linu. |
| Damas chinesas | Rápidas (salto longo) | **a** (`longo`) | Salto simétrico à distância, em cadeia também. Tem o Linu. |
| Damas chinesas | Diamond game | c | Outro tabuleiro (73 casas) e o rei. |
| Damas chinesas | Halma | c | Tabuleiro quadrado 16×16. |
| Damas chinesas | Com captura | c | 60 peças no meio e capturas. |
| Dominó | Em duplas (sem monte) | d | Quatro jogadores. Contra o Linu, ele teria de jogar três mãos; fica para depois. |
| Dominó | All Fives (Muggins) | c | Pontos durante a rodada e a “spinner” (4 pontas). |
| Dominó | Dominó chinês | d | Outras pedras e jogos parecidos com os de cartas. |
| Shogi | Minishogi | **a** (`mini`) | O motor agora lê o tamanho pelo tabuleiro (81 ou 25 casas); o perft do 9×9 não mudou e o do 5×5 bate com o Fairy-Stockfish. Tem o Linu. |
| Shogi | Dōbutsu shōgi | c | 3×4 e peças próprias. |
| Shogi | Chu shogi | c | 12×12, 21 tipos de peça. |
| Shogi | Komaochi (vantagem) | **a** (`komaochi`) | Sete vantagens, da lança às seis peças; o lado de cima dá a vantagem e começa. Tem o Linu. |
| Jogo da onça | Com mais de uma toca | **a** (`tocas`) | Duas tocas, em cima e embaixo (as fontes não dizem quantas nem onde). Tem o Linu. |
| Jogo da onça | Puma (taptana) e komikan | d | As fontes não são unânimes sobre as regras. |
| Bagh-chal | Aadu puli attam | d | As fontes não descrevem o tabuleiro. |
| Bagh-chal | Jogo da onça (adugo) | a | É o jogo da onça, que já está à parte. |
| Mū tōrere | Regra do centro só nas primeiras jogadas | a | Seletor próprio do jogo. |
| Mū tōrere | Regra do centro sempre | a | Seletor próprio do jogo. |
| Kōnane | Papa retangular tradicional | b | Mesmas regras em tabuleiro retangular. Fica para o seletor de tamanho. |
| Kōnane | Kōnane moderno de feltro | d | Só muda o material. |
| Hex | Regra da troca | a | Seletor próprio do jogo. |
| Hex | Outros tamanhos | a | Seletor próprio do jogo. |
| Hex | Con-tac-tix | d | Só o nome comercial. |
| Pontos e Caixas | Tabuleiro sueco | **a** (`sueco`) | A borda de fora já começa traçada. Tem o Linu. |
| Pontos e Caixas | Tabuleiro islandês | **a** (`islandes`) | Só a esquerda e a de baixo começam traçadas. Tem o Linu. |
| Pontos e Caixas | Barbantes e moedas | d | É o mesmo jogo visto de outro jeito. |
| Pontos e Caixas | Grades de triângulos e hexágonos | c | Outra grade. |
| Alquerque | Regras de Bell (1979) | a | Seletor próprio do jogo. |
| Alquerque | Peça “soprada” | a | Seletor próprio do jogo (“Peça soprada”); o sopro é automático. Tem o Linu. |
| Alquerque | Alquerque a quatro (zuni) | d | Quatro jogadores. |
| Janggi | Da Coreia do Norte | a | A quinta arrumação (carro no meio) entrou no seletor de arrumação do jogo; o resto é nome. |
| Janggi | Por vitória ou por pontos | b | Muda o fim (bikjang e pontos). |
| Janggi | Gwangsanghui | d | Sem regras na fonte. |
| Makruk | Ouk | **a** (`ouk`) | Pulos do primeiro lance do khun (como o cavalo, para a fileira da frente) e do met (duas casas), enquanto ninguém capturou. Tem o Linu. |
| Makruk | Kar ouk | **a** (`karouk`) | O ouk em que vence quem der o primeiro xeque. Tem o Linu. |
| Makruk | Os “sutras” | b | Lances especiais de abertura. |
| Nim | Misère | a | Seletor próprio do jogo. |
| Nim | Jogo de Marienbad (1-3-5-7) | a | Seletor próprio do jogo. |
| Bao | Bao la kujifunza | a | Seletor próprio do jogo. |
| Bao | Bawo | c | Outras regras do Malawi. |
| Bao | Onde as fontes divergem | d | Nota sobre as fontes, não é variante. |
| Quarto | Quadrados 2×2 | a | Seletor próprio do jogo. |
| Quarto | Para iniciantes | **a** (`iniciantes`) | Só valem 1, 2 ou 3 características (a cor, depois a altura e a forma). Tem o Linu. |
| Quarto | Mini e Gigante | d | Só muda o material. |
| Quixo | A quatro, em duplas | a | Seletor próprio do jogo. |
| Quixo | Mini | d | Só muda o material. |
| Pylos | Para crianças | a | Seletor próprio do jogo. |
| Pylos | Experientes (linhas) | a | Seletor próprio do jogo. |
| Pylos | Mini | d | Só muda o material. |
| Quantik | Mini | d | Só muda o material. |
| Squadro | Mini | d | Só muda o material. |
| Qawale | Mini | d | Só muda o material. |
| Qomet | Trilha de 12 peças | a | É a trilha de 12 peças (variante `doze` da trilha). |

## Lazer: outras áreas

| Jogo | Variante | Classe | Observação |
|---|---|---|---|
| Hanafuda | Go-Stop (Matgo) | c | Baralho e pontuação coreanos, de 2 a 4 jogadores. |
| Hanafuda | Koi-Koi de regras curtas | **a** (`curtas`) | Sem os yaku do saquê e com um koi-koi só por rodada (no segundo yaku, para sozinho). Tem o Linu. |
| Hanafuda | Sakura (Higobana) | c | Outra pontuação, de 2 a 7 jogadores. |
| Encantados | 3 e 4 jogadores (duplas) | d | Mais jogadores no mesmo aparelho, com mãos escondidas. |
| Encantados | 5 ou 6 jogadores | d | Dois baralhos e até 6 jogadores. |
| Encantados | As edições | d | Nota sobre as edições, não é variante. |
| Roleta | Americana (dois zeros) | **a** (`americana`) | 38 casas; a casa leva 5,26%. |
| Roleta | Francesa com “la partage” | **a** (`partage`) | O zero devolve metade das apostas simples. |
| Amarelinha | Nomes regionais (Brasil, Portugal, mundo) | d | Só muda o nome. A marelle em espiral (“escargot”) seria c. |
| Esgrima | Espada (épée) | **a** (`espada`) | Sem prioridade, com toque duplo; o contra-ataque chega a 2 (a mão é alvo). Tem o Linu. |
| Esgrima | Sabre | **a** (`sabre`) | Com prioridade, como o florete; o corte no braço faz o contra-ataque chegar a 2. Tem o Linu. |
| Pong | Home Pong | d | Só a história do aparelho. |
| Pong | Pong Doubles | c | Quatro raquetes. |
| Pong | Os clones | d | Só história. |
| Pong | Breakout | c | Outro jogo. |

## Para a próxima leva (b, em ordem de popularidade)

Já entraram na 2ª leva (15/10/2026): gomoku Caro e troca; go por território e com handicap; reversi
clássica; gamão hypergammon e tavla; Koi-Koi de regras curtas; Quarto para iniciantes; Pontos e
Caixas sueco e islandês; makruk ouk e kar ouk; espada e sabre na esgrima.

Faltam: terni lapilli; xadrez manchu; damas chinesas rápidas; alquerque com a peça soprada; fanorona
vela; janggi norte-coreano; komaochi no shogi; jogo da onça com mais tocas; Belgian daisy no abalone
(falta a fonte da posição).

As (c) pedem um motor novo ou outro tabuleiro, e ficam para depois:

- **Tablut, Renju, Grand Abalone, Octi-X e Quoridor a quatro**.
- **Tavli plakoto e fevga, nardy e All Fives**.
