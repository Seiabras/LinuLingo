import type { OutroJogo } from './tipos';

/**
 * Esportes: história, regras e um jeito simples de jogar.
 *
 * ESGRIMA — fontes (consultadas em 14/10/2026):
 * - Wikipédia em inglês, “Fencing”: https://en.wikipedia.org/wiki/Fencing — a esgrima moderna vem da
 *   esgrima histórica europeia; escola italiana, depois refinada pela escola francesa; ganhou
 *   destaque no fim do século XIX. Está em todos os Jogos Olímpicos modernos desde 1896 (o sabre em
 *   todos; o florete em todos menos 1908; a espada em todos menos 1896). Mulheres: florete
 *   individual em 1924 (Paris), espada em 1996, sabre em 2004. Armas: florete (só o tronco,
 *   com prioridade), espada (o corpo todo, sem prioridade: toque ao mesmo tempo conta para os dois),
 *   sabre (corta e estoca, da cintura para cima, com prioridade). Aparelho elétrico: espada em 1933,
 *   florete em 1956, sabre em 1988. Poule (fase de grupos): até 5 toques ou 3 minutos; eliminação
 *   direta: até 15 toques ou 3 períodos de 3 minutos.
 * - Wikipédia em inglês, “Fédération Internationale d’Escrime”:
 *   https://en.wikipedia.org/wiki/F%C3%A9d%C3%A9ration_Internationale_d%27Escrime — a FIE foi fundada
 *   em 29 de novembro de 1913, em Paris, nas salas do Automobile Club de France; em 1913 adotou as
 *   regras francesas para a espada e o florete. Sede atual em Lausanne, na Suíça.
 * - Wikipédia em inglês, “Right of way (fencing)”: https://en.wikipedia.org/wiki/Right_of_way_(fencing)
 *   — o ataque é “a ação ofensiva inicial feita estendendo o braço e ameaçando continuamente o alvo”;
 *   ataque vence contra-ataque; a riposta vence a renovação do ataque; ataques simultâneos: ninguém
 *   tem prioridade; a parada precisa tocar a lâmina; ataque que erra ou é parado perde a prioridade.
 * - Wikipédia em inglês, “Glossary of fencing”: https://en.wikipedia.org/wiki/Glossary_of_fencing —
 *   “En garde! Prêts? Allez!”, “touche”, pista de 14 m por 1,5 a 2 m, toque duplo na espada (dois
 *   toques com menos de 40 milissegundos de diferença).
 * - Wikipédia em francês, “Glossaire de l’escrime”: https://fr.wikipedia.org/wiki/Glossaire_de_l'escrime
 *   — fente (afundo), marche (avançar), retraite (recuar), parade (parada), riposte (ataque depois
 *   da parada; no florete e no sabre a prioridade é de quem riposta).
 * - Wikipédia em português, “Esgrima”: https://pt.wikipedia.org/wiki/Esgrima — florete, espada e
 *   sabre; até 5 toques nas poules e 15 na eliminação; olímpica desde 1896.
 * - Etimologia (14/10/2026): Wikcionário em português, “esgrima”: “Do provençal antigo escrima”;
 *   Wiktionary em inglês, “esgrima”: “From Italian scrima”, e “schermire”: “From Lombardic skirmen
 *   or Frankish *skirmijan*”; Wikipédia em português, “Esgrima”: de raiz germânica que quer dizer
 *   “proteger”. Os termos em francês: a FIE nasceu em Paris (1913) e adotou as regras francesas
 *   (Wikipédia em inglês, “Fédération Internationale d’Escrime”).
 * - Regulamento da FIE (Technical rules, versão de 03/08/2026): https://fie.org/fie/documents/rules
 *   — a fonte oficial da convenção do florete; as regras acima, da Wikipédia, resumem esse texto.
 *
 * SIMPLIFICAÇÕES do jogo no app (ditas também na tela): o duelo é por tempos, com os dois escolhendo
 * a ação ao mesmo tempo; a distância anda em passos inteiros; o ataque é sempre com afundo (alcança
 * 2 passos) e o contra-ataque só alcança 1; todo toque é no alvo válido (não há toque fora do alvo,
 * que no florete real para a ação sem dar ponto); não há relógio de 3 minutos nem cartões; não dá
 * para sair pelo fundo da pista (na real, isso custa um toque); a prioridade da riposta dura um tempo.
 */
const ESGRIMA: OutroJogo = {
  id: 'esgrima',
  area: 'esportes',
  name: 'Esgrima (florete)',
  emoji: '🤺',
  status: 'pronto',
  playable: true,
  linu: true,
  year: 'esporte moderno do fim do século XIX; olímpico desde 1896',
  where: 'Europa: escolas italiana e francesa; a federação internacional (FIE) nasceu em Paris, em 1913',
  povo: 'França e Itália',
  etimologia:
    '“Esgrima” vem de uma raiz germânica que queria dizer “proteger”, “defender”, a mesma de um verbo dos lombardos e dos francos. Ela chegou às línguas latinas como “scrima” no italiano e “escrima” no provençal antigo, e daí ao português; os dicionários divergem sobre qual das duas foi a porta de entrada. Os termos do esporte são em francês porque a federação internacional nasceu em Paris, em 1913, e adotou as regras francesas: por isso se diz “touche”, “riposte” e “En garde!” no mundo todo.',
  regiao: 'europa',
  epoca: 'modernos',
  about:
    'A esgrima moderna nasceu da arte de lutar com espada na Europa: a escola italiana criou a base e a escola francesa a refinou. No fim do século XIX, virou esporte, e está em todos os Jogos Olímpicos modernos desde o primeiro, em Atenas, em 1896. A Federação Internacional de Esgrima (FIE) foi fundada em Paris, em 29 de novembro de 1913, e adotou as regras francesas. Por isso o árbitro ainda começa cada toque em francês: “En garde! Prêts? Allez!” (“Em guarda! Prontos? Já!”). As mulheres estrearam no florete olímpico em 1924. Hoje um aparelho elétrico acende uma luz a cada toque: na espada desde 1933, no florete desde 1956 e no sabre desde 1988.',
  rules: [
    { title: 'A pista', text: 'A pista tem 14 metros de comprimento. Os dois atiradores começam nas linhas de “en garde”, um de frente para o outro.' },
    { title: 'Os toques', text: 'Ganha quem chegar a 5 toques, como nas poules (a fase de grupos) das competições da FIE. Na eliminação direta, a disputa vai até 15.' },
    { title: 'Alvo do florete', text: 'No florete, só vale tocar o tronco, com a ponta da arma.' },
    { title: 'A prioridade', text: 'Quando os dois tocam quase juntos, o árbitro dá o ponto a quem tinha o “direito de ataque”. Quem começou o ataque (estendendo o braço e ameaçando o alvo) tem a prioridade sobre quem só contra-atacou. Se o ataque erra ou é parado, a prioridade passa ao outro: é a vez da riposta. Se os dois atacam ao mesmo tempo, ninguém marca.' },
    { title: 'As ações', text: 'Avançar (marche) e recuar (retraite) mudam a distância. O ataque é a estocada com afundo (fente): alcança longe. A parada (parade) desvia a lâmina do outro. O contra-ataque estende o braço sem afundar: alcança perto e pega quem chega avançando sem atacar.' },
    { title: 'No app: como é simplificado', text: 'O duelo é por tempos: você e o Linu escolhem a ação ao mesmo tempo, sem ver a do outro, e depois o árbitro decide. A distância anda de passo em passo; o ataque alcança 2 passos e o contra-ataque, 1. Todo toque conta como no alvo (no florete de verdade, o toque fora do tronco para a ação sem ponto). Não há relógio nem cartões, e não dá para sair pelo fundo da pista.' },
  ],
  variants: [
    {
      name: 'Espada (épée)',
      where: 'olímpica desde 1900; feminina desde 1996',
      text: 'Arma mais pesada, só de ponta. Vale o corpo todo, da cabeça aos pés. Não há prioridade: quem toca primeiro marca, e se os dois tocam quase juntos (menos de 40 milésimos de segundo), os dois marcam (o toque duplo). Dá para jogar no app: escolha “Espada”. A parada desvia, mas não dá prioridade; o contra-ataque chega mais longe, porque a mão e o braço da frente são alvo. Aqui, para não terminar empatado, o toque duplo que daria o 5º toque aos dois não conta.',
      jogavel: 'espada',
    },
    {
      name: 'Sabre',
      where: 'olímpico desde 1896; feminino desde 2004',
      text: 'Toca com a ponta e também com o fio da lâmina: vale cortar. O alvo é da cintura para cima, com a cabeça e os braços. Tem prioridade, como o florete. Dá para jogar no app: escolha “Sabre”. As regras de prioridade são as do florete; aqui, para simplificar, o corte no braço é o que faz o contra-ataque chegar mais longe.',
      jogavel: 'sabre',
    },
  ],
};

export const ESPORTES: OutroJogo[] = [ESGRIMA];
