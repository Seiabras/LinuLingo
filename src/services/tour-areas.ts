import type { SQLiteDatabase } from 'expo-sqlite';
import { getMeta, setMeta } from '@/database/queries';
import { iniciarTourDaArea, type AreaDoTour, type PassoTour } from '@/services/tour';

/**
 * O passeio de cada área (pedido do dono, 17/10/2026: “pode fazer esse passeio tutorial para cada
 * uma”), no mesmo formato do passeio dos Idiomas (`passosDoTour`): o Linu abre cada aba da área e
 * conta, num balão curto, para que ela serve. Abre na primeira vez que a pessoa entra na área (ver o
 * layout das abas) e pode ser revisto pelo Perfil. Como no passeio dos Idiomas, o penúltimo passo é
 * sempre o apoio (quem sai no meio passa por ele) e o último volta para a primeira aba da área.
 * Aba nova numa área entra no passeio dela na mesma entrega.
 */
export function passosDaArea(area: AreaDoTour): PassoTour[] {
  return [...PASSOS[area], ...final(area)];
}

/** A marca de que a pessoa já viu o passeio da área (meta `tour_area_<área>`). */
const chave = (area: AreaDoTour) => `tour_area_${area}`;

/**
 * Abre o passeio da área na primeira vez que a pessoa entra nela (chamado pelo layout das abas ao
 * trocar de modo). Com `sempre`, abre mesmo que já tenha visto (a abertura e o “rever” do Perfil).
 */
export async function passeioDaAreaNaPrimeiraVez(db: SQLiteDatabase, area: AreaDoTour, sempre = false) {
  if (!sempre && (await getMeta(db, chave(area)))) return;
  await setMeta(db, chave(area), '1');
  // depois que a primeira aba da área abriu
  setTimeout(() => iniciarTourDaArea(area), 450);
}

const PASSOS: Record<AreaDoTour, PassoTour[]> = {
  lazer: [
    {
      id: 'lazer-tabuleiro',
      rota: '/lazer',
      alvo: 'jogos-botoes',
      humor: 'feliz',
      titulo: 'Bem-vindo ao Lazer!',
      texto: 'Aqui é só jogo. No Tabuleiro: xadrez, go, oware, damas e muitos outros do mundo todo, a dois ou contra mim. Separe por época ou lugar e personalize as peças.',
    },
    {
      id: 'lazer-cartas',
      rota: '/lazer-cartas',
      alvo: 'lazer-cartas',
      humor: 'falando',
      titulo: 'Cartas',
      texto: 'Baralhos do mundo: o hanafuda e a karuta do Japão, o truco, o buraco e a paciência no baralho francês, e jogos de cartas colecionáveis com os bichos.',
    },
    {
      id: 'lazer-azar',
      rota: '/lazer-azar',
      alvo: 'lazer-azar',
      humor: 'pensando',
      titulo: 'Azar',
      texto: 'Jogos de sorte para entender as chances, como a roleta. Só com fichas de mentira: aqui ninguém aposta dinheiro.',
    },
    {
      id: 'lazer-brincadeiras',
      rota: '/lazer-brincadeiras',
      alvo: 'lazer-brincadeiras',
      humor: 'feliz',
      titulo: 'Brincar',
      texto: 'As brincadeiras de rua e de infância de cada país, como a amarelinha.',
    },
    {
      id: 'lazer-esportes',
      rota: '/lazer-esportes',
      alvo: 'lazer-esportes',
      humor: 'falando',
      titulo: 'Esportes',
      texto: 'Os esportes, a história e as regras de cada um, para jogar de um jeito simples na tela, como a esgrima.',
    },
    {
      id: 'lazer-videogames',
      rota: '/lazer-videogames',
      alvo: 'lazer-videogames',
      humor: 'comemorando',
      titulo: 'Games',
      texto: 'Os videogames que fizeram história: Pong, Breakout, Space Invaders e o Campo Minado, para jogar aqui mesmo.',
    },
    {
      id: 'lazer-mapa',
      rota: '/lazer-mapa',
      alvo: 'mapa-area',
      humor: 'falando',
      titulo: 'O mapa dos jogos',
      texto: 'O botão Mapa, no topo de cada aba, mostra de onde vem cada jogo. Toque num país para ver os jogos que nasceram ali.',
    },
  ],
  musica: [
    {
      id: 'musica-trilha',
      rota: '/musica',
      alvo: 'mus-trilha',
      humor: 'feliz',
      titulo: 'Bem-vindo à Música!',
      texto: 'Na Trilha, a teoria com a partitura desde o começo, e cada exemplo toca. Embaixo ficam os cursos de instrumento: teclado, clarinete, violão, viola, cavaquinho, kalimba, sanfona…',
    },
    {
      id: 'musica-tocar',
      rota: '/tocar',
      alvo: 'mus-teclado',
      humor: 'comemorando',
      titulo: 'Tocar',
      texto: 'Um teclado na tela, com a nota aparecendo na pauta. Toque livre ou siga uma música, na tela ou no seu instrumento, com o microfone ouvindo.',
    },
    {
      id: 'musica-ouvido',
      rota: '/ouvido',
      humor: 'pensando',
      titulo: 'Ouvido',
      texto: 'Treinos curtos para reconhecer de ouvido: qual nota é mais aguda, acorde maior ou menor, que nota é essa, e cante a nota que eu tocar.',
    },
    {
      id: 'musica-criar',
      rota: '/criar',
      humor: 'feliz',
      titulo: 'Criar',
      texto: 'Monte uma melodia e uma batida tocando nos quadrados: cada linha é uma nota, cada coluna, um tempo. Ela aparece também na partitura.',
    },
    {
      id: 'musica-afinador',
      rota: '/afinador',
      humor: 'falando',
      titulo: 'Afinador e metrônomo',
      texto: 'O afinador ouve o seu instrumento ou a sua voz pelo microfone e mostra se a nota está alta ou baixa. O metrônomo marca o tempo.',
    },
    {
      id: 'musica-mundo',
      rota: '/musica-mundo',
      alvo: 'mus-mundo',
      humor: 'falando',
      titulo: 'Mundo',
      texto: 'Os instrumentos por família, com o som; o mapa dos instrumentos de cada país; as pessoas e as profissões da música; e os mitos, como o “efeito Mozart”.',
    },
  ],
  biologia: [
    {
      id: 'biologia-trilha',
      rota: '/biologia',
      alvo: 'bio-trilha',
      humor: 'feliz',
      titulo: 'Bem-vindo à Biologia!',
      texto: 'Na Trilha, a biologia em unidades curtas, com quadrinhos, a linha do tempo da vida e o que é ciência ou não.',
    },
    {
      id: 'biologia-seres',
      rota: '/seres-vivos',
      humor: 'falando',
      titulo: 'Seres vivos',
      texto: 'O catálogo dos bichos do app, com a sua lista da vida, a árvore da vida e o nome de cada bicho no idioma que você estuda.',
    },
    {
      id: 'biologia-biomas',
      rota: '/biomas',
      alvo: 'bio-mapa',
      humor: 'comemorando',
      titulo: 'Biomas',
      texto: 'O mapa dos biomas do mundo e os seis do Brasil. Toque num bioma para ver o que ele é, onde fica, os bichos e as plantas que vivem nele.',
    },
    {
      id: 'biologia-laboratorio',
      rota: '/laboratorio',
      humor: 'pensando',
      titulo: 'Laboratório',
      texto: 'Experimentos curtos para ver as ideias funcionando: as ervilhas de Mendel, as mariposas, a célula e o “descubra o bicho”.',
    },
  ],
  psicologia: [
    {
      id: 'psicologia-trilha',
      rota: '/psicologia',
      alvo: 'psi-trilha',
      humor: 'feliz',
      titulo: 'Bem-vindo à Psicologia!',
      texto: 'Na Trilha, a psicologia como ciência: memória, percepção, a vida com os outros e o bem-estar. Aqui não tem terapia nem diagnóstico.',
    },
    {
      id: 'psicologia-lab',
      rota: '/experimentos',
      humor: 'pensando',
      titulo: 'Lab',
      texto: 'Experimentos clássicos para fazer em você mesmo: o efeito Stroop, a ilusão de Müller-Lyer, a memória de dígitos e o tempo de reação.',
    },
    {
      id: 'psicologia-escolas',
      rota: '/abordagens',
      alvo: 'psi-abordagens',
      humor: 'falando',
      titulo: 'Escolas',
      texto: 'As escolas da psicologia lado a lado, a psicanálise e a ciência, e as pseudociências, bem explicadas.',
    },
    {
      id: 'psicologia-pessoas',
      rota: '/pessoas',
      alvo: 'psi-pessoas',
      humor: 'falando',
      titulo: 'Pessoas',
      texto: 'Quem pensou as ideias da trilha, no mundo e no Brasil, e um mapa de onde cada pessoa trabalhou.',
    },
    {
      id: 'psicologia-brasil',
      rota: '/psicologia-brasil',
      humor: 'falando',
      titulo: 'Brasil',
      texto: 'A história da psicologia no Brasil, ano a ano, a diferença entre psicólogo e psicanalista, e onde pedir ajuda, como o CVV, no 188.',
    },
  ],
};

const NOME_DA_AREA: Record<AreaDoTour, string> = { lazer: 'o Lazer', musica: 'a Música', biologia: 'a Biologia', psicologia: 'a Psicologia' };
const PRIMEIRA: Record<AreaDoTour, string> = { lazer: '/lazer', musica: '/musica', biologia: '/biologia', psicologia: '/psicologia' };

/** Os três passos de toda área: trocar de área, o apoio (sempre o penúltimo) e o “bora”. */
function final(area: AreaDoTour): PassoTour[] {
  return [
    {
      id: `${area}-perfil`,
      rota: '/perfil',
      alvo: 'perfil-areas',
      humor: 'falando',
      titulo: 'Trocar de área',
      texto: 'Para voltar aos Idiomas, toque em “← Idiomas” no topo de qualquer aba. Aqui no Perfil você entra nas outras áreas e revê este passeio.',
    },
    {
      id: `${area}-apoio`,
      rota: '/apoiar',
      alvo: 'apoio-pix',
      humor: 'feliz',
      titulo: 'Apoie o projeto 💛',
      texto: 'O LinuLingo é gratuito e sem anúncios, feito por uma pessoa só. Se puder, ajude a mantê-lo atualizado com uma doação por PIX, de qualquer valor.',
    },
    {
      id: `${area}-fim`,
      rota: PRIMEIRA[area],
      humor: 'comemorando',
      titulo: 'Bora!',
      texto: `Pronto, agora é com você. Divirta-se com ${NOME_DA_AREA[area]}! Meus amigos também estão escondidos por aqui: procure!`,
    },
  ];
}
