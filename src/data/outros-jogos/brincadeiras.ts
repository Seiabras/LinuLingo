import type { OutroJogo } from './tipos';

/**
 * Brincadeiras: brincadeiras de rua e de infância de cada país.
 *
 * AMARELINHA — fontes (consultadas em 14/10/2026):
 * - Wikipédia em inglês, “Hopscotch”: https://en.wikipedia.org/wiki/Hopscotch — origem desconhecida;
 *   o arqueólogo alemão Ulrich Schädler não achou indício do jogo antes do século XVI; a ideia de
 *   que crianças e soldados romanos jogavam uma forma antiga “não tem evidência”. Primeiros registros:
 *   “Scotch Hopper” no “Book of Games” de Francis Willughby (compilado entre 1635 e 1672) e
 *   “Scotch-hoppers” no “Poor Robin’s Almanack” de 1677. O nome inglês vem de “hop” (pular num pé)
 *   e “scotch” (risco, linha riscada), segundo o Oxford English Dictionary. Regras: a pedra não pode
 *   cair na linha nem fora da casa; pula-se a casa da pedra; casa simples com um pé, casas lado a
 *   lado com um pé em cada; na volta, para na casa antes da pedra, pega a pedra e segue; pisar na
 *   linha, errar a casa ou perder o equilíbrio encerra a vez. Nomes: “marelle” (França, com a
 *   variante em espiral “escargot”), “Himmel und Hölle” (Alemanha, Áustria, Suíça), “rayuela”
 *   (Espanha e vários países da América do Sul), “jogo da macaca” (Portugal).
 * - Wikipédia em português, “Amarelinha”: https://pt.wikipedia.org/wiki/Amarelinha — o nome brasileiro
 *   veio do francês “marelle”; nomes por estado (avião em Alagoas e no Rio Grande do Norte; macaca
 *   na Bahia e no Pará; “maré” em Minas Gerais, onde se diz “pular maré”; “academia” ou “cademia”
 *   na Paraíba, em Pernambuco e no Rio de Janeiro; “sapata” no Rio Grande do Sul); em Portugal,
 *   “jogo da macaca” e “pé-coxinho” (a página cita a Infopédia, da Porto Editora); na Itália,
 *   “gioco della campana”; na Rússia, “классики”; no Chile, “luche”. A página traz a regra do “céu”
 *   (lá se vira para voltar) e a frase “ganha quem acabar de saltar por todas as casas primeiro”
 *   (citando Guilherme Almeida, “Na Minha Rua... Jogos Tradicionais”, 2007).
 * - Wikipédia em francês, “Marelle”: https://fr.wikipedia.org/wiki/Marelle — “marelle” vem do francês
 *   antigo “merel/mereau” (o século XII, segundo o CNRTL), “palet, ficha, pedrinha”; não há regra
 *   oficial; o percurso vai da “terra” ao “céu”; a marelle redonda (“escargot”, “colimaçon”).
 *
 * - Etimologia (14/10/2026): Wikipédia em português, “Amarelinha”, seção Etimologia — “O nome
 *   brasileiro do jogo vem do francês marelle, que por adaptação popular ganhou a associação com
 *   amarelo e o sufixo diminutivo” (citando o Novo Dicionário Aurélio, 1996); “marelle” de “merel”,
 *   pedrinha/ficha: Wikipédia em francês, “Marelle”, citando o CNRTL.
 *
 * Observação: o pedido dizia “sapata” em Portugal, mas a fonte põe “sapata” no Rio Grande do Sul;
 * em Portugal, o nome é “macaca”. Ficou como diz a fonte.
 */
const AMARELINHA: OutroJogo = {
  id: 'amarelinha',
  area: 'brincadeiras',
  name: 'Amarelinha',
  emoji: '🪨',
  status: 'pronto',
  playable: true,
  linu: true,
  year: 'tradicional; registrada na Inglaterra desde o século XVII',
  where: 'brincadeira de rua do mundo todo',
  etimologia:
    'A origem do nome é discutida. A explicação mais aceita, a do dicionário Aurélio, é que “amarelinha” vem do francês “marelle”, o nome da brincadeira na França. Ao chegar ao Brasil, o povo aproximou a palavra estranha de “amarelo”, que soava parecido, e juntou o “-inha” das coisas pequenas e queridas. E “marelle” vem de “merel”, a pedrinha ou ficha que se joga nas casas, no francês antigo.',
  regiao: 'europa',
  epoca: 'tradicionais',
  about:
    'A amarelinha é desenhada no chão, com giz ou riscada na terra: casas numeradas de 1 a 10 e, no alto, o “céu”. Ninguém sabe ao certo onde ela nasceu. Há uma lenda famosa de que soldados romanos treinavam assim, mas não existe prova disso: o arqueólogo alemão Ulrich Schädler não achou sinal do jogo antes do século XVI. O registro mais antigo é inglês: “Scotch Hopper”, no livro de jogos de Francis Willughby (escrito entre 1635 e 1672), e “Scotch-hoppers” no almanaque “Poor Robin’s Almanack”, de 1677. O nome brasileiro vem do francês “marelle”, que por sua vez vem de “merel”, a pedrinha que se joga.',
  rules: [
    { title: 'A pedrinha', text: 'Na sua vez, jogue a pedrinha na casa da vez: na primeira rodada, a casa 1; depois a 2, a 3, até a 10. A pedra tem de cair dentro da casa certa. Caiu na linha, fora do desenho ou em outra casa, a vez passa.' },
    { title: 'Pular', text: 'Vá pulando casa por casa, sem pisar na casa da pedra. Nas casas simples, um pé só. Nas casas duplas (lado a lado), um pé em cada. Se a pedra está numa casa dupla, pise com um pé só na outra.' },
    { title: 'O céu', text: 'No céu, descanse e vire para voltar.' },
    { title: 'Pegar a pedra', text: 'Na volta, pare na casa antes da pedra, abaixe-se e pegue a pedra sem perder o equilíbrio. Depois siga até sair do desenho.' },
    { title: 'Passar a vez', text: 'Pisar na linha, pisar com os pés errados ou perder o equilíbrio passa a vez. Na próxima, você continua da mesma casa.' },
    { title: 'Quem ganha', text: 'Ganha quem completar as dez casas primeiro.' },
    { title: 'No app', text: 'Para jogar a pedra, toque duas vezes: a primeira fixa a direção (a seta vai e volta), a segunda fixa a força (a barra sobe e desce). Para pular, escolha “1 pé” ou “2 pés” quando o ponteiro do equilíbrio estiver na faixa verde. Fora da faixa, você pisou na linha.' },
  ],
  variants: [
    { name: 'Amarelinha, macaca, maré, academia, sapata', where: 'Brasil (nomes por estado)', text: '“Academia” ou “cademia” na Paraíba, em Pernambuco e no Rio de Janeiro; “maré” em Minas Gerais (lá se diz “pular maré”); “macaca” na Bahia e no Pará; “avião” em Alagoas e no Rio Grande do Norte; “sapata” no Rio Grande do Sul.' },
    { name: 'Jogo da macaca', where: 'Portugal', text: 'Também chamado “pé-coxinho”, pelo pulo num pé só.' },
    { name: 'Hopscotch', where: 'Inglaterra e Estados Unidos', text: 'De “hop” (pular num pé) e “scotch” (risco no chão). Na Escócia e na Irlanda, a pedra chata pode se chamar “piggy”.' },
    { name: 'Marelle', where: 'França', text: 'Vai da “terra” ao “céu”. Tem a marelle redonda, em espiral, chamada “escargot” (caracol): as casas vão ficando menores até o centro.' },
    { name: 'Himmel und Hölle', where: 'Alemanha, Áustria e Suíça', text: '“Céu e inferno”: a pedra e o jogador têm de evitar a casa do inferno.' },
    { name: 'Rayuela', where: 'Espanha e vários países da América do Sul', text: 'Em alguns lugares também se chama “golosa” ou “charranca”; no Chile, “luche”.' },
    { name: 'Gioco della campana e klássiki', where: 'Itália e Rússia', text: 'Na Itália, “o jogo do sino”; na Rússia, “классики” (klássiki).' },
  ],
};

export const BRINCADEIRAS: OutroJogo[] = [AMARELINHA];
