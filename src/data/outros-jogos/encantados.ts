import type { OutroJogo } from './tipos';

/**
 * ENCANTADOS (Fel Barros e Shea “Sheamus” Parkes; Ace Studios), o jogo de cartas favorito do dono.
 * Só a mecânica: as cartas do app são desenhos próprios em SVG; nada das ilustrações, do logotipo
 * nem dos textos de ambientação. Nomes e poderes reescritos com as nossas palavras.
 *
 * Fontes (consultadas em 14/10/2026):
 * - Manual oficial da 3ª edição (Ace Studios, 12 páginas): regras, poderes e canções; ficha técnica
 *   (game design Shea Parkes e Fel Barros; arte Daniel R. Lustosa, Lucas Ribeiro e Daniel Araújo;
 *   design gráfico Marcelo Groo; desenvolvimento original Rob Seator; produção Marcos Mandina).
 *   https://www.comparajogos.com.br/f/uploads/short-url/bsSAI0cFYJ8HBSk8uTMqVT9xFLu.pdf
 * - Ludopedia, “Encantados (3ª Edição)”: https://ludopedia.com.br/jogo/encantados-3-edicao — 2020,
 *   lançado em 07/2020, Ace Studios; as 60 cartas: Anões, Elfos, Fadas, Faunos, Fogos-fátuos,
 *   Gnomos, Leprechauns e Mímicos 5 cada; Trolls, Goblins e Kobolds 4 cada; canções: verão 1,
 *   outono 2, inverno 2, primavera 3.
 * - Ludopedia, “Encantados (2ª Edição)”: https://ludopedia.com.br/jogo/encantados-2-edicao — 2018;
 *   um baralho de 60 para 2 a 4 (antes, dois de 63 para 2 a 6); entra o Troll, sai a Mandrágora;
 *   poderes revistos e pontos reequilibrados; indicado ao Prêmio Ludopedia Jogo Família do Ano
 *   (Designer Nacional) 2018, voto popular.
 * - Ludopedia, “Encantados”: https://ludopedia.com.br/jogo/encantados — 1ª edição, 04/2016, 132
 *   cartas (dois baralhos de 63 e 6 de ajuda) e tabuleiro de descarte.
 * - Ludopedia, “Menos é mais: 10 jogos de cartas feitos por designers consagrados”:
 *   https://ludopedia.com.br/topico/79979/menos-e-mais-10-jogos-de-cartas-feitos-por-designers-consagrados
 *   — vem do “Plato 3000”, de Shea Parkes, brinde da caixa grande do Glory to Rome; Fel Barros o
 *   levou para a fantasia medieval e propôs a parceria; família do buraco e do pife.
 * - Pontos impressos: lidos em fotos da 3ª edição na galeria da Ludopedia
 *   (https://ludopedia.com.br/jogo/encantados-3-edicao/imagens). O valor dos Kobolds (2), meio
 *   borrado na foto, foi confirmado pelo dono do app.
 * - BoardGameGeek, versão 575820 (“Third Edition”, português, 2020):
 *   https://boardgamegeek.com/boardgameversion/575820 (o site bloqueou a leitura automática).
 * - Editora: Ace Studios, no Brasil. Uma loja lista a 3ª edição com a marca Ludens Spirit e um
 *   arquivo da Ludopedia fala em “distribuição Grok”: não confirmado. Não achamos edição de fora.
 * - Etimologia: o manual chama as criaturas do jardim de “os Encantados”. Não achamos fonte que
 *   ligue o nome aos encantados das religiões brasileiras: fica dito como incerto.
 *
 * O que o manual não resolve foi respondido pelo dono do app, que conhece o jogo (16/10/2026):
 * 1. A busca dos elfos (olhar 3 e ficar com 1) vale com 3 elfos no jardim, ou 2 com o poder dos
 *    fogos-fátuos, ou 2 com um mímico fazendo as vezes de elfo.
 * 2. Gnomos com a busca dos elfos: pega as 3 e escolhe 2 para descartar, da mão toda.
 * 3. Goblin, kobold e troll: o poder é usado uma vez, quando a raça entra no seu jardim.
 * 4. Na mão, as cartas contam negativo, e as negativas continuam negativas (−3 fica −3).
 * 5. Raça nova é a que VOCÊ não tem no seu jardim, mesmo que o outro tenha; e dá para expandir uma
 *    raça que já está num jardim, no seu ou no do adversário.
 * 6. Troll: pega qualquer carta em jogo, em qualquer jardim, e a põe em qualquer jardim; pode ser um
 *    mímico, mas o mímico só vai para cima de outra raça, nunca sozinho.
 * 7. Kobold: põe qualquer carta em jogo no fundo do baralho, inclusive um mímico.
 * 8. Mímico no jardim do adversário vale. Se o kobold ou o troll tiram a última carta de verdade de
 *    uma raça que tinha mímico, o mímico fica sozinho e o grupo trava: nada mais entra nele.
 */
export const ENCANTADOS: OutroJogo = {
  id: 'encantados',
  area: 'cartas',
  grupo: 'baralho',
  name: 'Encantados',
  emoji: '🧚',
  status: 'pronto',
  playable: true,
  linu: true,
  year: '2016 (1ª edição); 2ª em 2018; 3ª em 2020',
  where: 'Brasil',
  povo: 'Fel Barros (Brasil) e Shea Parkes, autor do jogo de origem',
  regiao: 'americas',
  epoca: 'atuais',
  etimologia:
    'O manual chama de “os Encantados” as criaturas mágicas que aparecem no jardim de quem fica quieto e presta atenção. Não achamos fonte que ligue o nome aos encantados das religiões e do folclore brasileiros: as criaturas do jogo vêm do folclore europeu. A origem do jogo, de Shea Parkes, se chamava “Plato 3000”. Não achamos edição com outro nome. (Fontes: manual da 3ª edição e Ludopedia.)',
  about:
    'Encantados é um jogo de cartas brasileiro de Fel Barros e Shea “Sheamus” Parkes, publicado pela Ace Studios em 2016, com arte de Daniel Lustosa, Lucas Ribeiro e Daniel Araújo. Ele nasceu do “Plato 3000”, de Shea Parkes, que vinha de brinde na caixa grande do Glory to Rome: Fel Barros levou a ideia para a fantasia e chamou o Shea para a parceria. Lembra o buraco e o pife: você junta cartas iguais e baixa na mesa. Cada um é um jardineiro que quer atrair criaturas mágicas para o seu jardim. Cada raça tem um poder que ajuda você ou atrapalha os outros. A 2ª edição (2018) ficou com um baralho só, de 60 cartas, trocou a Mandrágora pelo Troll e foi indicada ao Prêmio Ludopedia de Jogo Família do Ano. A 3ª edição saiu em 2020. Aqui, as cartas são desenhos do app.',
  rules: [
    {
      title: 'O baralho e a mão',
      text: 'São 60 cartas: 10 raças de criaturas, os mímicos e 4 canções. Cada carta tem pontos nos cantos. Com 2 jogadores, cada um recebe 10 cartas. O resto vira o monte. Há duas pilhas de descarte: a de busca e a de fim de turno. Pelo manual, começa quem viu uma fada por último; aqui, você escolhe antes da partida: você, o Linu ou sorteio.',
    },
    {
      title: 'Fase 1: comprar',
      text: 'Pegue a carta de cima de uma das pilhas de descarte, OU faça uma busca: olhe 2 cartas do monte, fique com 1 e ponha a outra no descarte de busca.',
    },
    {
      title: 'Fase 2: baixar',
      text: 'Em qualquer ordem: toque UMA canção; baixe UMA raça nova, com 3 cartas iguais; e expanda quantas vezes quiser: se a raça já está num jardim, o seu ou o do adversário, baixe nele quantas cartas dela quiser. Raça nova é a que VOCÊ ainda não tem no seu jardim, mesmo que o adversário tenha. O mímico vale por uma carta de qualquer raça, também no jardim do adversário, mas só um por raça e sempre junto de uma carta de verdade. A última carta da mão não pode ser baixada.',
    },
    {
      title: 'Fase 3: descartar',
      text: 'Ponha uma carta da mão no descarte de fim de turno. A rodada acaba no fim do turno em que o monte acabou ou alguém ficou sem cartas.',
    },
    {
      title: 'Pontos e fim do jogo',
      text: 'As cartas do jardim somam seus pontos. As da mão contam negativo, e as que já são negativas continuam negativas: leprechaun −4, verão −3, mímico −3. O mímico conta sempre negativo. Quem passar de 100 no fim de uma rodada faz o jogo acabar, e vence quem tem mais. No empate, mais uma rodada. Na próxima rodada, começa quem tem menos pontos.',
    },
    {
      title: 'Os poderes',
      text: 'Com 2 ou mais no seu jardim (o mímico não conta): anões deixam pegar qualquer carta da pilha de descarte; fadas deixam seus mímicos com 0; faunos dão +2 por canção no seu jardim; fogos-fátuos deixam uma raça nova entrar com 2 cartas; gnomos põem a busca toda na mão, e depois você descarta; leprechauns valem +4 cada, em vez de −4. Os elfos fazem a busca olhar 3 cartas (você fica com 1) quando são 3 no jardim, ou 2 com o poder dos fogos-fátuos, ou 2 com um mímico fazendo as vezes de elfo; com os gnomos junto, você pega as 3 e descarta 2, escolhidas na mão toda. Goblin, kobold e troll usam o poder uma vez, quando a raça entra no seu jardim: o goblin faz alguém comprar 2; o kobold manda qualquer carta em jogo, de qualquer jardim, para o fundo do monte, até um mímico; o troll pega qualquer carta em jogo e a põe em qualquer jardim, o seu ou o do outro. O troll também pode levar um mímico, mas só para cima de outra raça, nunca sozinho. Se o kobold ou o troll tiram a última carta de verdade de uma raça que tinha mímico, o mímico fica sozinho no jardim e o grupo trava: nada mais entra nele, nem carta da raça, nem outro mímico, e ninguém pode expandi-lo.',
    },
    {
      title: 'As canções',
      text: 'Primavera: alguém (pode ser você) faz uma busca extra. Outono: alguém pega as 4 cartas de cima de uma pilha de descarte. Inverno: pegue a carta de cima de uma pilha de descarte e faça uma busca extra. Verão: vale 8 em vez de −3 se o jardim onde está tiver 5 raças diferentes.',
    },
  ],
  fontes: [
    { titulo: 'Manual oficial da 3ª edição (Ace Studios)', url: 'https://www.comparajogos.com.br/f/uploads/short-url/bsSAI0cFYJ8HBSk8uTMqVT9xFLu.pdf' },
    { titulo: 'Ludopedia, “Encantados (3ª Edição)”', url: 'https://ludopedia.com.br/jogo/encantados-3-edicao' },
    { titulo: 'Ludopedia, “Encantados (2ª Edição)”', url: 'https://ludopedia.com.br/jogo/encantados-2-edicao' },
    { titulo: 'Ludopedia, “Encantados” (1ª edição)', url: 'https://ludopedia.com.br/jogo/encantados' },
    { titulo: 'Ludopedia, “Menos é mais: 10 jogos de cartas feitos por designers consagrados”', url: 'https://ludopedia.com.br/topico/79979/menos-e-mais-10-jogos-de-cartas-feitos-por-designers-consagrados' },
    { titulo: 'BoardGameGeek, Encantados (Third Edition)', url: 'https://boardgamegeek.com/boardgameversion/575820' },
  ],
  variants: [
    {
      name: '3 e 4 jogadores (duplas)',
      where: 'No manual da 3ª edição',
      text: 'Com 3, cada um recebe 9 cartas e a rodada acaba quando 2 jogadores ficarem sem cartas. Com 4, são duas duplas que dividem o mesmo jardim, com 8 cartas cada. Na dupla, no lugar da canção, dá para trocar 2 cartas com o parceiro, sem conversar.',
    },
    {
      name: '5 ou 6 jogadores',
      where: 'No manual, juntando duas caixas do jogo',
      text: 'Juntam-se dois baralhos e cada um recebe 7 cartas. Com 5, a rodada acaba quando 2 baterem. Com 6, são três duplas, e a rodada acaba quando uma dupla esvaziar a mão.',
    },
    {
      name: 'As edições',
      where: 'Brasil, Ace Studios: 2016, 2018 e 2020',
      text: 'A 1ª edição tinha dois baralhos de 63 cartas, para até 6, e a Mandrágora. A 2ª passou a um baralho de 60, para 2 a 4, trocou a Mandrágora pelo Troll e reequilibrou os pontos. A 3ª voltou à caixa maior e revisou o manual. O app segue a 3ª.',
    },
  ],
};

/**
 * De onde vem cada criatura (pedido do dono: o app gosta de ensinar cultura). Fontes consultadas em
 * 14/10/2026, todas na Wikipédia: Dwarf (folklore), Elf, Fairy, Faun, Fogo-fátuo (pt), Gnome,
 * Goblin, Kobold, Leprechaun, Troll, Mimic (Dungeons & Dragons).
 */
export const ORIGEM_DAS_CRIATURAS: Record<string, { texto: string; fonte: string }> = {
  anoes: {
    texto: 'Vêm da mitologia nórdica. Os anões (“dvergar”) saem da terra e moram nas pedras. São ferreiros: fizeram o martelo de Thor, o Mjölnir.',
    fonte: 'https://en.wikipedia.org/wiki/Dwarf_(folklore)',
  },
  elfos: {
    texto: 'Os “álfar” da mitologia nórdica e germânica andavam perto dos deuses. Shakespeare os fez pequenos, e Tolkien os fez altos, sábios e bons de arco.',
    fonte: 'https://en.wikipedia.org/wiki/Elf',
  },
  fadas: {
    texto: 'A palavra vem do latim “fata”, de “fatum”, o destino. A fada junta crenças celtas, germânicas e romanas, como as fadas das colinas da Irlanda.',
    fonte: 'https://en.wikipedia.org/wiki/Fairy',
  },
  faunos: {
    texto: 'Da mitologia romana: espíritos do campo, menores que o deus Fauno, parecido com o grego Pã. Metade gente, metade bode, com chifres e rabo.',
    fonte: 'https://en.wikipedia.org/wiki/Faun',
  },
  fogos: {
    texto: 'Luzinhas que aparecem em brejos e cemitérios. O nome vem do latim “ignis fatuus”, “fogo tolo”. No Brasil, é o boitatá, descrito por Anchieta em 1560. A ciência explica: gases da matéria podre pegam fogo sozinhos.',
    fonte: 'https://pt.wikipedia.org/wiki/Fogo-f%C3%A1tuo',
  },
  gnomos: {
    texto: 'Inventados pelo médico suíço Paracelso, no século XVI: espíritos da terra, pequenos, que vivem embaixo do chão. Os gnomos de jardim surgiram no século XIX.',
    fonte: 'https://en.wikipedia.org/wiki/Gnome',
  },
  goblins: {
    texto: 'Do folclore europeu. A palavra vem do francês “gobelin” e aparece em 1140 (“gobelinus”), um demônio expulso de uma igreja em Évreux, na França.',
    fonte: 'https://en.wikipedia.org/wiki/Goblin',
  },
  kobolds: {
    texto: 'Espíritos da casa do folclore alemão: ajudam na limpeza em troca de leite. Também moravam nas minas, e o povo ligou a eles o nome do minério de cobalto.',
    fonte: 'https://en.wikipedia.org/wiki/Kobold',
  },
  leprechauns: {
    texto: 'Do folclore irlandês: um sapateiro solitário e brincalhão, com um pote de ouro escondido. O nome vem do irlandês antigo “luchorpán”.',
    fonte: 'https://en.wikipedia.org/wiki/Leprechaun',
  },
  trolls: {
    texto: 'Da Escandinávia. Na mitologia nórdica, eram gigantes das montanhas e cavernas. No folclore, viram pedra com a luz do sol, e algumas rochas seriam trolls.',
    fonte: 'https://en.wikipedia.org/wiki/Troll',
  },
  mimicos: {
    texto: 'Não vêm do folclore. O mímico, bicho que se disfarça de objeto, foi criado por Gary Gygax no “Monster Manual” do Dungeons & Dragons, em 1977.',
    fonte: 'https://en.wikipedia.org/wiki/Mimic_(Dungeons_%26_Dragons)',
  },
};
