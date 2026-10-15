/**
 * Cursos “Aprenda a jogar” dos jogos do conhecimento (pedido do dono, 11/10/2026): lições curtas,
 * cada uma com uma explicação e, quando dá, um desafio no tabuleiro (achar o lance certo). O jogo
 * da velha veio primeiro e é o modelo para os outros.
 *
 * Fonte do curso da velha: Wikipédia em inglês, “Tic-tac-toe”, seção “Strategy” (consultada em
 * 11/10/2026), com a lista de prioridades do programa de Newell e Simon (1972): ganhar, bloquear,
 * fazer garfo, impedir o garfo do outro, centro, canto oposto, canto vazio, lado vazio; e as
 * respostas certas às aberturas (canto → centro; centro → canto). As posições dos desafios foram
 * montadas para cada regra e conferidas por um teste que joga todas as continuações
 * (`cursos-jogos.test.ts`).
 */

export interface DesafioVelha {
  /** casas do X e do O (0 a 8, linha a linha) */
  x: number[];
  o: number[];
  vez: 'x' | 'o';
  /** as casas certas */
  respostas: number[];
  acerto: string;
  dica: string;
}

export interface LicaoJogo {
  id: string;
  titulo: string;
  texto: string;
  desafio?: DesafioVelha;
}

export interface CursoJogo {
  fonte: string;
  licoes: LicaoJogo[];
}

const VELHA: CursoJogo = {
  fonte: 'Wikipédia em inglês, “Tic-tac-toe” (seção “Strategy”), com a lista de prioridades de Newell e Simon (1972).',
  licoes: [
    {
      id: 'objetivo',
      titulo: '1. Três em linha',
      texto: 'Cada um marca uma casa por vez. Ganha quem fizer três em linha: numa linha, numa coluna ou numa diagonal. A primeira coisa a olhar em toda jogada: “eu já tenho dois em linha com a terceira casa livre?” Se tiver, jogue lá e ganhe.',
      desafio: { x: [0, 1], o: [3, 4], vez: 'x', respostas: [2], acerto: 'Isso! Três em linha na fileira de cima.', dica: 'Olhe a fileira de cima: o X já tem duas casas.' },
    },
    {
      id: 'bloquear',
      titulo: '2. Bloquear',
      texto: 'Se não dá para ganhar, olhe o outro lado: “o adversário tem dois em linha com a terceira livre?” Se tiver, você precisa jogar nessa casa, senão ele ganha no próximo lance.',
      desafio: { x: [0, 8], o: [3, 4], vez: 'x', respostas: [5], acerto: 'Bloqueado! O O não fecha mais a fileira do meio.', dica: 'O O tem duas casas na fileira do meio.' },
    },
    {
      id: 'garfo',
      titulo: '3. O garfo',
      texto: 'O garfo é o lance que cria duas ameaças ao mesmo tempo: duas linhas com dois seus e a terceira casa livre. O adversário só consegue bloquear uma, e você ganha com a outra. É assim que se vence alguém que não erra nos bloqueios.',
      desafio: { x: [0, 4], o: [1, 8], vez: 'x', respostas: [3, 6], acerto: 'Garfo! Agora o X ameaça duas linhas e o O só pode tapar uma.', dica: 'Procure uma casa que forme duas linhas com o X do canto e o do centro.' },
    },
    {
      id: 'contra-garfo',
      titulo: '4. Cuidado com o garfo do outro',
      texto: 'Antes de jogar, veja se o adversário pode fazer um garfo no próximo lance e tire essa chance dele. Um caso famoso: o X tem dois cantos opostos e o O tem o centro. Parece bom o O jogar num canto, mas isso dá um garfo para o X. O certo é jogar num lado e obrigar o X a se defender.',
      desafio: { x: [0, 8], o: [4], vez: 'o', respostas: [1, 3, 5, 7], acerto: 'Certo! Jogando no lado, o O ameaça e o X precisa bloquear, sem chance de garfo.', dica: 'Os cantos livres deixam o X fazer garfo. Tente um lado.' },
    },
    {
      id: 'abertura-canto',
      titulo: '5. Quando o X abre no canto',
      texto: 'A abertura do X pode ser no canto, no centro ou num lado (girando o tabuleiro, todos os cantos são iguais, e todos os lados também). Se o X começa num canto, o O precisa responder no centro. Qualquer outra resposta deixa o X forçar a vitória.',
      desafio: { x: [0], o: [], vez: 'o', respostas: [4], acerto: 'Isso: canto se responde com o centro.', dica: 'Só uma casa segura o empate aqui.' },
    },
    {
      id: 'abertura-centro',
      titulo: '6. Quando o X abre no centro',
      texto: 'Se o X começa no centro, o O deve responder num canto. Depois é seguir a lista: ganhar, bloquear, impedir garfo.',
      desafio: { x: [4], o: [], vez: 'o', respostas: [0, 2, 6, 8], acerto: 'Certo! Contra o centro, um canto.', dica: 'Contra o centro, o lado perde. Escolha outra casa.' },
    },
    {
      id: 'canto-oposto',
      titulo: '7. O canto oposto',
      texto: 'Na lista de prioridades, depois do centro vem o canto oposto: se o adversário está num canto, jogue no canto do outro lado. Quando o X abre no canto e o O responde no centro, o lance mais forte do X é o canto oposto ao primeiro.',
      desafio: { x: [0], o: [4], vez: 'x', respostas: [8], acerto: 'Canto oposto! Agora o O precisa achar o lance do lado para não cair no garfo.', dica: 'O X está no canto de cima, à esquerda.' },
    },
    {
      id: 'lista',
      titulo: '8. A lista completa',
      texto: 'Seguindo esta ordem em todo lance, você nunca perde: 1) ganhar; 2) bloquear; 3) fazer garfo; 4) impedir o garfo do outro; 5) centro; 6) canto oposto ao do adversário; 7) canto vazio; 8) lado vazio. Com os dois jogando assim, a partida sempre dá velha. Teste: jogue contra o Linu no nível difícil, que segue a busca perfeita, e tente empatar.',
    },
  ],
};

/**
 * Curso do gamão: só lições de texto, com as regras do artigo “Backgammon” da Wikipédia em inglês
 * (consultado em 14/10/2026) e o jeito de jogar neste app (a soma dos dados num toque, pedido do dono
 * em 15/10/2026, como no 51 Worldwide Games).
 */
const GAMAO: CursoJogo = {
  fonte: 'Wikipédia em inglês, “Backgammon” (regras), e o tabuleiro deste app.',
  licoes: [
    {
      id: 'corrida',
      titulo: '1. Uma corrida',
      texto: 'Cada lado tem 15 peças e corre para a própria casa, em sentidos opostos: as claras andam do ponto 24 para o 1, e a casa delas fica embaixo, à direita. Quando as 15 estão na casa, elas começam a sair do tabuleiro. Ganha quem tirar todas primeiro.',
    },
    {
      id: 'dados',
      titulo: '2. Os dados',
      texto: 'Toque em “Rolar”. Cada dado é um movimento: você pode andar com duas peças, uma com cada dado, ou com a mesma peça as duas vezes. Uma dupla vale quatro movimentos. Toque numa peça: as marcas mostram até onde ela vai, com o número do dado.',
    },
    {
      id: 'soma',
      titulo: '3. A soma num toque só',
      texto: 'As marcas mostram também as somas: com 3 e 5, a peça pode ir direto 8 pontos, e a marca da soma tem um anel branco. Numa dupla de 4, aparecem 4, 8, 12 e 16. A soma é só um atalho para os dois movimentos: a peça passa pela parada do meio, que não pode ser um ponto fechado. Se o caminho está fechado, a soma não aparece.',
    },
    {
      id: 'bater',
      titulo: '4. Bater e entrar',
      texto: 'Um ponto com duas ou mais peças do adversário está fechado. Uma peça sozinha pode ser batida: ela vai para a barra, no meio, e tem de entrar de novo pela casa do outro antes de qualquer outro lance. Por isso, evite deixar peças sozinhas ao alcance dos dados do adversário.',
    },
    {
      id: 'regras-dos-dados',
      titulo: '5. Usar o máximo de dados',
      texto: 'Você tem de usar os dois dados sempre que der. Se só um deles cabe, tem de ser o maior. O app só marca os lances que respeitam essa regra, então, se uma marca não aparece, é porque ela deixaria um dado sem uso.',
    },
    {
      id: 'pontos',
      titulo: '6. Quanto vale a vitória',
      texto: 'A vitória simples vale 1 ponto. Se o perdedor não tirou nenhuma peça, é “gamão” e vale 2. Se, além disso, ele ainda tem peça na barra ou na sua casa, é “backgammon” e vale 3.',
    },
  ],
};

export const CURSOS_JOGOS: Record<string, CursoJogo> = { velha: VELHA, gamao: GAMAO };
