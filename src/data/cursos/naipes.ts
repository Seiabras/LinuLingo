import type { MiniCourse } from './tipos';

/**
 * Os naipes nas línguas: de onde vêm os quatro naipes do baralho francês e por que cada língua os
 * chama de um jeito (item 3 da aba Cartas, pedido do dono, 17/10/2026).
 * Fontes (consultadas em 17/10/2026, por busca na web, porque a rede do ambiente não abria as páginas
 * direto; os trechos usados aparecem citados nos resultados):
 * - Wikipedia, “Hearts (suit)”: https://en.wikipedia.org/wiki/Hearts_(suit) — o naipe de copas nasceu na
 *   Alemanha do século XV, entre vários sinais testados para trocar os naipes latinos; em francês,
 *   “cœur”; em alemão, “Herz” e, antigo, “Rot”; ninguém sabe por que se chama “coração” um desenho
 *   que mal lembra um coração; em português, “copas” (taças).
 * - Wikipedia, “Diamonds (suit)”: https://en.wikipedia.org/wiki/Diamonds_(suit) — em francês, “carreau”,
 *   do latim “quadrum”, “quadrado”; em alemão e em polonês, “Karo”, que entrou no alemão no século
 *   XVIII; no alemão da Suíça, “Egge” (“canto”); em português, “ouros” (moedas de ouro).
 * - Wikipedia, “Clubs (suit)”: https://en.wikipedia.org/wiki/Clubs_(suit) — em francês, “trèfle”
 *   (trevo), desenho tirado do naipe de bolotas do baralho alemão quando os naipes franceses foram
 *   criados, por volta de 1480; o inglês “clubs” traduz o espanhol “basto” (bastão), sinal de que
 *   os ingleses usavam cartas espanholas antes das francesas; em italiano, “fiori” (flores); em
 *   alemão, “Kreuz” (cruz); em português, “paus”.
 * - Wikipedia, “Spades (suit)”: https://en.wikipedia.org/wiki/Spades_(suit) — o inglês “spade” vem
 *   provavelmente do espanhol antigo “spada”, “espada”; em francês, “pique”, que no século XIV era
 *   uma arma (a ponta de ferro na ponta da lança); o desenho na verdade vem do naipe de folhas do
 *   baralho alemão; em alemão, “Pik”.
 * - Wikipedia, “Portuguese-suited playing cards”: https://en.wikipedia.org/wiki/Portuguese-suited_playing_cards
 *   e “Cups (suit)”: https://en.wikipedia.org/wiki/Cups_(suit) — quando os naipes latinos passaram para
 *   o desenho francês, os nomes antigos ficaram com os naipes novos: copas, ouros, espadas, paus.
 * - Wikipedia, “Italian playing cards”: https://en.wikipedia.org/wiki/Italian_playing_cards — os
 *   naipes latinos do baralho italiano: spade (espadas), coppe (taças), denari (moedas), bastoni
 *   (bastões).
 * - Wikipedia, “Klaverjas”: https://en.wikipedia.org/wiki/Klaverjas — o holandês “klaver”, trevo, no
 *   nome do jogo.
 * Os nomes dos naipes em italiano e holandês que as fontes não confirmaram (como os de copas e ouros)
 * ficaram de fora; as figuras (valete, dama, rei) também, até haver fonte.
 */
export const CURSO_NAIPES: MiniCourse = {
  id: 'naipes',
  name: 'Os naipes nas línguas',
  emoji: '♣️',
  kind: 'cartas',
  summary: 'Por que, em português, o coração se chama copas e o losango, ouros? E por que o inglês diz “clubs”? A história dos quatro naipes contada pelos nomes deles.',
  sources: [
    { label: 'Wikipedia, “Hearts (suit)”', url: 'https://en.wikipedia.org/wiki/Hearts_(suit)' },
    { label: 'Wikipedia, “Diamonds (suit)”', url: 'https://en.wikipedia.org/wiki/Diamonds_(suit)' },
    { label: 'Wikipedia, “Clubs (suit)”', url: 'https://en.wikipedia.org/wiki/Clubs_(suit)' },
    { label: 'Wikipedia, “Spades (suit)”', url: 'https://en.wikipedia.org/wiki/Spades_(suit)' },
    { label: 'Wikipedia, “Portuguese-suited playing cards”', url: 'https://en.wikipedia.org/wiki/Portuguese-suited_playing_cards' },
    { label: 'Wikipedia, “Italian playing cards”', url: 'https://en.wikipedia.org/wiki/Italian_playing_cards' },
  ],
  lessons: [
    {
      id: 'latinos',
      title: 'Os nomes que vieram de outro baralho',
      emoji: '🏆',
      intro: [
        'Antes do baralho de corações e losangos, a Península Ibérica e a Itália jogavam com os naipes latinos: taças, moedas, espadas e bastões. É o baralho que o italiano ainda usa, com spade, coppe, denari e bastoni.',
        'Quando o baralho francês chegou, com outros desenhos, o português não trocou os nomes: cada naipe novo ficou com o nome de um naipe antigo. Por isso o coração se chama “copas” (as taças), o losango se chama “ouros” (as moedas de ouro), e continuamos dizendo “espadas” e “paus” (os bastões).',
        'Copas vem de “copo”: o naipe era de taças e cálices, virou coração, mas o nome ficou.',
      ],
      items: [
        { term: 'copas', meaning: 'o naipe de corações (♥)', how: 'Era o naipe das taças, os copos.' },
        { term: 'ouros', meaning: 'o naipe de losangos (♦)', how: 'Era o naipe das moedas de ouro.' },
        { term: 'espadas', meaning: 'o naipe preto de ponta (♠)', how: 'Era o naipe das espadas.' },
        { term: 'paus', meaning: 'o naipe de trevos (♣)', how: 'Era o naipe dos bastões, os paus.' },
      ],
      quiz: [
        { q: 'Por que, em português, o naipe de corações se chama “copas”?', options: ['Ficou com o nome do naipe antigo das taças', 'Porque o coração parece uma taça de cabeça para baixo', 'Por causa da Copa do Mundo'], answer: 0, why: 'Os naipes novos herdaram os nomes dos naipes latinos: o coração ficou com o das taças.' },
        { q: '“Ouros” eram, no baralho antigo…', options: ['Moedas de ouro', 'Anéis de ouro', 'Coroas'], answer: 0 },
        { q: 'Que baralho ainda usa espadas, taças, moedas e bastões?', options: ['O italiano', 'O francês', 'O alemão'], answer: 0, why: 'O baralho italiano tem spade, coppe, denari e bastoni.' },
      ],
    },
    {
      id: 'frances-ingles',
      title: 'O francês e o inglês',
      emoji: '🇫🇷',
      intro: [
        'Os naipes franceses foram criados por volta de 1480, a partir dos naipes do baralho alemão. O coração já tinha nascido na Alemanha do século XV, entre vários desenhos testados para trocar os naipes latinos.',
        'Em francês: “cœur” (coração), “carreau” (do latim “quadrum”, quadrado), “trèfle” (trevo, desenho tirado das bolotas do baralho alemão) e “pique”, que no século XIV era uma arma de ponta de ferro. O pique lembra uma ponta de lança, mas o desenho vem, na verdade, das folhas do baralho alemão.',
        'O inglês tem uma surpresa: “clubs” quer dizer “bastões”, e “spade” vem provavelmente do espanhol antigo “spada”, “espada”. Os ingleses jogavam com cartas espanholas antes das francesas e guardaram os nomes delas.',
      ],
      items: [
        { term: 'cœur', meaning: 'copas, em francês', how: '“Coração”.' },
        { term: 'carreau', meaning: 'ouros, em francês', how: 'Do latim “quadrum”, quadrado.' },
        { term: 'trèfle', meaning: 'paus, em francês', how: '“Trevo”.' },
        { term: 'pique', meaning: 'espadas, em francês', how: 'Uma arma de ponta de ferro, no século XIV.' },
        { term: 'clubs', meaning: 'paus, em inglês', how: 'Traduz o espanhol “basto”, bastão.' },
        { term: 'spades', meaning: 'espadas, em inglês', how: 'Provavelmente do espanhol antigo “spada”, espada.' },
      ],
      quiz: [
        { q: 'O que quer dizer “trèfle”, o nome francês de paus?', options: ['Trevo', 'Bastão', 'Cruz'], answer: 0 },
        { q: 'Por que o inglês chama paus de “clubs” (bastões)?', options: ['Os ingleses usavam cartas espanholas antes das francesas', 'Porque o trevo parece um bastão', 'Foi um erro de tradução recente'], answer: 0, why: '“Clubs” traduz o espanhol “basto”: o nome ficou do baralho espanhol.' },
        { q: '“Carreau”, ouros em francês, vem do latim “quadrum”. O que é?', options: ['Quadrado', 'Moeda', 'Diamante'], answer: 0 },
      ],
    },
    {
      id: 'alemao-italiano-holandes',
      title: 'O alemão, o italiano e o holandês',
      emoji: '🇩🇪',
      intro: [
        'O alemão usa nomes próprios: “Herz” (coração, que antigamente também se chamava “Rot”, vermelho), “Karo” (que entrou no alemão no século XVIII, do francês “carreau”), “Kreuz” (cruz) e “Pik”. Na Suíça, ouros também se chama “Egge”, canto.',
        'O italiano chama o trevo de “fiori”, flores: cada língua viu uma coisa no mesmo desenho. E o holandês o chama de “klaver”, trevo, palavra que está no nome de um jogo de lá, o klaverjas.',
        'O polonês também diz “Karo” para ouros, como o alemão.',
      ],
      items: [
        { term: 'Herz', meaning: 'copas, em alemão', how: '“Coração”; antigamente também “Rot”, vermelho.' },
        { term: 'Karo', meaning: 'ouros, em alemão e em polonês', how: 'Do francês “carreau”, no século XVIII.' },
        { term: 'Kreuz', meaning: 'paus, em alemão', how: '“Cruz”.' },
        { term: 'Pik', meaning: 'espadas, em alemão' },
        { term: 'fiori', meaning: 'paus, em italiano', how: '“Flores”.' },
        { term: 'klaver', meaning: 'paus, em holandês', how: '“Trevo”, como no jogo klaverjas.' },
      ],
      quiz: [
        { q: 'Em alemão, o naipe de paus se chama “Kreuz”. O que quer dizer?', options: ['Cruz', 'Trevo', 'Flor'], answer: 0 },
        { q: 'O que o italiano vê no desenho de paus?', options: ['Flores (fiori)', 'Bastões (bastoni)', 'Cruzes'], answer: 0 },
        { q: 'De onde vem o alemão “Karo”, ouros?', options: ['Do francês “carreau”', 'Do latim “caro”, carne', 'Do inglês “carrot”'], answer: 0, why: 'Entrou no alemão no século XVIII, vindo do francês.' },
      ],
    },
  ],
};
