/**
 * Jogos do conhecimento (Cultura → aba "🎲 Jogos", e atalho no Perfil ao lado de línguas
 * artificiais): jogos de tabuleiro/estratégia, fora do escopo de idiomas. Lista inicial, pedida
 * pelo Matheus em 05-07/10/2026 ("por enquanto", pode crescer): damas, xadrez, quoridor/bloqueio,
 * octi (octógono fantástico) e abalone. Cada jogo só entra com regras e história reais e citáveis
 * — nunca inventadas (mesma régua do resto do app, ver AGENTS.md). Damas mostra só a posição
 * inicial (tabuleiro ilustrativo); Quoridor e Octi (`playable: true`) têm motor de regras de
 * verdade (`src/services/quoridor-engine.ts`, `src/services/octi-engine.ts`) e tabuleiro jogável
 * (`src/components/QuoridorBoard.tsx`, `src/components/OctiBoard.tsx`).
 */

export type GameStatus = 'pronto' | 'em breve';

export interface GameRule {
  title: string;
  text: string;
}

/** Uma variante regional/histórica do jogo: o que muda e onde é jogada assim. */
export interface GameVariant {
  name: string;
  where: string;
  text: string;
}

export interface KnowledgeGame {
  id: string;
  name: string;
  emoji: string;
  status: GameStatus;
  /** quando surgiu (ou as raízes, quando o jogo evoluiu por séculos) */
  year?: string;
  where?: string;
  about?: string;
  rules?: GameRule[];
  variants?: GameVariant[];
  /** pro tabuleiro desenhado: lado em casas (8 = 8×8). As peças somem em "em breve". */
  board?: { size: number; rows: number; dark: string; light: string; a: string; b: string };
  /** se tem motor de regras + tabuleiro de verdade pra jogar (não só história/regras em texto). */
  playable?: boolean;
}

const DAMAS_RULES: GameRule[] = [
  { title: 'Tabuleiro e peças', text: 'Só as casas escuras entram em jogo. Cada jogador começa com as peças nas fileiras mais próximas dele.' },
  { title: 'Movimento', text: 'As peças comuns andam uma casa na diagonal, sempre para a frente.' },
  { title: 'Captura', text: 'Captura-se saltando sobre a peça do adversário e caindo na casa vazia logo depois dela, na diagonal.' },
  { title: 'Virar dama', text: 'Ao chegar na última fileira do lado do adversário, a peça vira "dama" e ganha movimento mais forte — o quanto, muda de uma variante para a outra (veja abaixo).' },
];

const DAMAS: KnowledgeGame = {
  id: 'damas',
  name: 'Damas',
  emoji: '⚫',
  status: 'pronto',
  year: 'raízes no séc. X; virou "jogo das damas" por volta do séc. XII',
  where: 'raízes árabes/norte-africanas; o jogo de damas nasceu no sul da França',
  about:
    'As damas descendem do alquerque: um jogo árabe (quirkat, também chamado al-qirq), jogado num tabuleiro 5×5, já citado no livro "Kitab al-Aghani", do século X. Os mouros levaram o alquerque para a Espanha, onde as regras aparecem no "Libro de los juegos", de Alfonso X, no século XIII. Por volta do século XII, provavelmente no sul da França, alguém pôs as peças do alquerque no tabuleiro de xadrez (8×8) e as prendeu às diagonais: nasceu o "fierges", depois chamado "jeu de dames" (o jogo das damas). No século XVI, a França tornou a captura obrigatória, virando o "jeu force".',
  rules: DAMAS_RULES,
  variants: [
    {
      name: 'Damas inglesas/americanas (English draughts / checkers)',
      where: 'Reino Unido e Estados Unidos',
      text: 'Tabuleiro 8×8, 12 peças por jogador. A peça comum só captura para a frente. A dama captura uma casa de cada vez (não "voa" por várias), mas pode andar e capturar para trás também. A captura não é obrigatória: quem joga escolhe qual captura fazer, entre as possíveis.',
    },
    {
      name: 'Damas internacionais (International draughts)',
      where: 'criado por um polonês anônimo no século XVIII; popularizado nos Países Baixos',
      text: 'Tabuleiro 10×10, 20 peças por jogador. A peça comum captura para a frente E para trás. A dama "voa": anda e captura várias casas de uma vez na diagonal, sem precisar parar logo depois da peça capturada. A captura é obrigatória, e tem que ser sempre a que captura o MAIOR número de peças possível (a "regra da maioria").',
    },
  ],
  board: { size: 8, rows: 8, dark: '#334155', light: '#E2E8F0', a: '#1E293B', b: '#F8FAFC' },
};

const QUORIDOR_RULES: GameRule[] = [
  { title: 'Tabuleiro e objetivo', text: 'Tabuleiro 9×9. Cada jogador começa no meio da fileira do seu lado e precisa ser o primeiro a chegar a qualquer casa da fileira oposta.' },
  { title: 'Na sua vez', text: 'Você faz UMA coisa: anda com a sua peça uma casa (na horizontal ou vertical, nunca na diagonal de cara) ou coloca uma parede.' },
  { title: 'Saltar o adversário', text: 'Se a peça do adversário estiver colada à sua, você pode saltar por cima dela, caindo na casa logo depois. Se essa casa estiver bloqueada por parede ou pela borda do tabuleiro, você salta na diagonal, para um dos lados.' },
  { title: 'Paredes', text: 'Cada jogador tem 10 paredes (no 2 jogadores). Uma parede ocupa a borda de 2 casas vizinhas, trava a passagem por ali e não pode se cruzar nem se sobrepor a outra. A única regra que vale sempre: nenhuma parede pode fechar de vez o último caminho de QUALQUER jogador até a chegada dele.' },
];

const QUORIDOR: KnowledgeGame = {
  id: 'quoridor',
  name: 'Quoridor',
  emoji: '🧱',
  status: 'pronto',
  playable: true,
  year: '1997',
  where: 'criado pelo designer francês Mirko Marchesi; publicado pela Gigamic (França)',
  about:
    'O Quoridor foi criado em 1997 pelo designer de jogos francês Mirko Marchesi e publicado pela empresa francesa Gigamic. Diferente da maioria dos jogos de tabuleiro "de guerra" (xadrez, damas), aqui ninguém captura peça de ninguém: o objetivo é só chegar primeiro ao outro lado do tabuleiro, usando paredes para atrapalhar o caminho do adversário sem nunca fechá-lo por completo. O jogo ganhou o selo Mensa Select (seleção da American Mensa para jogos que exercitam o raciocínio) em 1998 e vários prêmios de "jogo do ano" em diferentes países.',
  rules: QUORIDOR_RULES,
  variants: [
    {
      name: 'Quoridor para 4 jogadores',
      where: 'regra oficial, já vem na caixa original da Gigamic',
      text: 'O mesmo tabuleiro 9×9, mas cada um dos 4 jogadores começa no meio de um lado diferente e precisa chegar ao lado oposto ao seu. Com mais gente jogando, cada jogador recebe só 5 paredes (em vez de 10) para o total continuar dando 20.',
    },
  ],
};

const OCTI_RULES: GameRule[] = [
  { title: 'Tabuleiro e peças', text: 'Tabuleiro retangular de 6 colunas por 7 linhas (não é octogonal — o "octo" do nome vem da peça, o "pod", que tem 8 faces). Cada jogador começa com 4 pods nas suas 4 casas OCTI (a base dele) e 12 "prongs" (pinos) de reserva.' },
  { title: 'Prongs: o que dão vida ao pod', text: 'Um pod sem prong nenhum não se move. Cada prong instalado libera o movimento numa das 8 direções (como uma bússola). Instalar um prong é uma jogada inteira: você gasta 1 prong da reserva e passa a vez.' },
  { title: 'Mover', text: 'Um pod anda uma casa vazia na direção de um prong que ele já tem.' },
  { title: 'Saltar', text: 'Um pod pode saltar por cima de qualquer peça adjacente (sua ou do adversário), na direção de um prong, caindo na casa vazia logo depois. Dá pra encadear vários saltos seguidos com a mesma peça, mas nunca saltando a mesma casa duas vezes no mesmo turno.' },
  { title: 'Capturar', text: 'Toda peça saltada PODE ser capturada (removida do tabuleiro) — mas não é obrigatório. A decisão é livre, peça por peça. Quem captura ganha os prongs da peça capturada para a própria reserva.' },
  { title: 'Como se vence', text: 'O primeiro jogador a pisar com um pod numa casa OCTI do adversário vence na hora. Também vence quem deixar o adversário sem nenhuma jogada possível (sem prong pra instalar e sem peça que consiga mover ou saltar).' },
];

const OCTI: KnowledgeGame = {
  id: 'octi',
  name: 'Octi (octógono fantástico)',
  emoji: '🔷',
  status: 'pronto',
  playable: true,
  year: '1999',
  where: 'criado pelo designer americano Donald Green; publicado pela The Great American Trading Company (EUA)',
  about:
    'O Octi foi criado pelo designer de jogos americano Donald Green e publicado em 1999 pela The Great American Trading Company. A peça central do jogo, o "pod", é um octógono: cada uma das suas 8 faces recebe um "prong" (um pino), e cada prong instalado libera o movimento do pod numa direção diferente — um pod sem prong nenhum fica parado. O tabuleiro original é 9×9 (a variante "Octi-X", mais avançada, com empilhamento de peças); existe também uma versão mais simples, 6×7, batizada de "OCTI: New Edition" (antes chamada "OCTI for Kids"), que é a implementada aqui. O jogo chamou atenção da pesquisa em inteligência artificial: foi tema de uma dissertação de mestrado na Universidade de Maastricht (sobre como ensinar um computador a jogar) e uma das categorias da 9ª Computer Olympiad, em 2004.',
  rules: OCTI_RULES,
};

export const KNOWLEDGE_GAMES: KnowledgeGame[] = [
  DAMAS,
  QUORIDOR,
  { id: 'xadrez', name: 'Xadrez', emoji: '♟️', status: 'em breve' },
  OCTI,
  { id: 'abalone', name: 'Abalone', emoji: '⚪', status: 'em breve' },
];
