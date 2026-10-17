import type { MiniCourse, MiniLesson, MiniQuestion } from '@/data/cursos/tipos';
import { amigosDaBiologia, CLASSE_DO_AMIGO, NOME_CLASSE, PALAVRA_DO_AMIGO } from './seres';

/**
 * A trilha da área Biologia (pedido do dono, 17/10/2026): unidades em ordem, cada uma com lições que
 * usam o mesmo motor dos minicursos (explicação, itens, perguntas, XP e prova final), do tipo
 * 'biologia' (fora da lista de línguas). As unidades seguem a lista de ramos guardada em
 * `docs/areas-futuras.md`; as que ainda não têm conteúdo com fonte ficam em `PROXIMAS_UNIDADES`.
 */

// ---------- Unidade 1: os bichos do frio (zoologia), com os amigos do Linu ----------

const AMIGOS = amigosDaBiologia();
const grupo = (ids: string[]) => AMIGOS.filter((a) => ids.includes(a.id));

/** As perguntas de uma lição de bichos: o nome científico e a classe de cada um. */
function perguntasDe(ids: string[]): MiniQuestion[] {
  const qs: MiniQuestion[] = [];
  for (const a of grupo(ids)) {
    const outros = AMIGOS.filter((o) => o.id !== a.id).slice(0, 12);
    const distratores = [...new Set(outros.map((o) => o.scientific))].filter((s) => s !== a.scientific);
    const k = (a.id.length + a.scientific.length) % 3;
    const opcoes = [distratores[k % distratores.length]!, distratores[(k + 4) % distratores.length]!];
    opcoes.splice(k % 3, 0, a.scientific);
    qs.push({ q: `Qual é o nome científico do ${a.species.toLowerCase()}?`, options: opcoes, answer: opcoes.indexOf(a.scientific) });
  }
  const classes = [...new Set(grupo(ids).map((a) => CLASSE_DO_AMIGO[a.id]!))];
  if (classes.length === 1) {
    const c = classes[0]!;
    const opcoes = (['ave', 'mamifero', 'crustaceo'] as const).map((x) => NOME_CLASSE[x]);
    qs.push({ q: `Todos os bichos desta lição são de que classe?`, options: opcoes, answer: opcoes.indexOf(NOME_CLASSE[c]) });
  }
  return qs;
}

function licaoDeBichos(id: string, title: string, emoji: string, intro: string[], ids: string[]): MiniLesson {
  return {
    id,
    title,
    emoji,
    intro,
    items: grupo(ids).map((a) => ({
      term: a.species,
      meaning: `${a.scientific} · ${NOME_CLASSE[CLASSE_DO_AMIGO[a.id]!]} · ${a.size}`,
      how: `${a.home}. ${a.facts[0] ?? ''}`.trim(),
      pt: PALAVRA_DO_AMIGO[a.id],
      cientifico: a.scientific,
    })),
    quiz: perguntasDe(ids),
  };
}

export const BIO_FRIO: MiniCourse = {
  id: 'bio-frio',
  name: 'Os bichos do frio',
  emoji: '🐧',
  kind: 'biologia',
  summary: 'Zoologia com os amigos do Linu: os pinguins, as focas, a baleia, as aves do mar e o krill da Antártida, cada um com o nome científico e o lugar onde vive.',
  sources: [],
  lessons: [
    licaoDeBichos(
      'pinguins-grandes',
      'Os pinguins grandes',
      '🐧',
      [
        'Pinguim é ave: tem penas, bico e põe ovos. Mas não voa: as asas viraram nadadeiras, e ele “voa” debaixo d’água.',
        'Os dois maiores pinguins são do mesmo gênero, Aptenodytes: o imperador, o maior de todos, e o rei, um pouco menor.',
      ],
      ['imperador', 'rei'],
    ),
    licaoDeBichos(
      'pinguins-escovas',
      'Os pinguins da Antártida e das ilhas',
      '🧊',
      [
        'O pinguim-de-adélia e o gentoo são do gênero Pygoscelis. O macaroni, com o topete amarelo, é do gênero Eudyptes, o dos pinguins de crista.',
        'Cada um vive num pedaço do sul do mundo: das costas geladas da Antártida às ilhas subantárticas.',
      ],
      ['adelia', 'gentoo', 'macaroni'],
    ),
    licaoDeBichos(
      'mamiferos-marinhos',
      'Focas e baleia',
      '🦭',
      [
        'Focas, elefantes-marinhos e baleias são mamíferos: respiram ar, e os filhotes mamam no leite da mãe. Vivem no mar, mas sobem para respirar.',
        'A foca-de-weddell, o elefante-marinho e a foca-leopardo são focas. A jubarte é uma baleia que passa o verão nas águas geladas do sul e o inverno no litoral do Brasil.',
      ],
      ['weddell', 'elefante-marinho', 'leopardo', 'jubarte'],
    ),
    licaoDeBichos(
      'ceu-e-krill',
      'As aves do céu e o krill',
      '🪶',
      [
        'O albatroz-errante e o petrel-das-neves são aves que voam, e muito: o albatroz tem as maiores asas de todas as aves.',
        'O krill é bem diferente: é um crustáceo pequenininho, parente distante dos camarões, que vive em cardumes de milhões e é a base da cadeia alimentar da Antártida: pinguins, focas, baleias e aves comem krill.',
      ],
      ['albatroz', 'petrel', 'krill'],
    ),
  ],
};

// ---------- Unidade 2: o nome científico (a ponte com os idiomas) ----------

/*
 * Fontes (consultadas em 17/10/2026, por busca na web, porque a rede do ambiente não abria as páginas
 * direto; os trechos usados aparecem citados nos resultados):
 * - Wikipedia, “Systema Naturae”: https://en.wikipedia.org/wiki/Systema_Naturae e “Binomial
 *   nomenclature”: https://en.wikipedia.org/wiki/Binomial_nomenclature — Lineu usou o nome de duas
 *   partes nas plantas no “Species Plantarum” (1753) e nos animais na 10ª edição do “Systema Naturae”
 *   (1758), a primeira obra a usá-lo em todo o reino animal; a Comissão Internacional de Nomenclatura
 *   Zoológica conta a nomenclatura dos animais a partir de 1º de janeiro de 1758; antes, os catálogos
 *   usavam nomes longos, de várias palavras; o gênero vai com maiúscula e a espécie com minúscula, os
 *   dois em itálico.
 * - Birds of the World, “The Key to Scientific Names”:
 *   https://birdsoftheworld.org/bow/key-to-scientific-names/ — Aptenodytes, do grego “aptēn”, sem asas
 *   (que não voa), e “dutēs”, mergulhador. Penguins International, “Etymology of penguin names”:
 *   https://www.penguinsinternational.org/etymology-of-penguin-names/ e Wikipedia, “Pygoscelis”:
 *   https://en.wikipedia.org/wiki/Pygoscelis — Pygoscelis, “de pernas no traseiro”; Eudyptes, “bom
 *   mergulhador” (a Wikipedia lê “eû” como “verdadeiro, bem”).
 * - Wikipedia, “Humpback whale”: https://en.wikipedia.org/wiki/Humpback_whale; NOAA Fisheries,
 *   “Humpback whale”: https://www.fisheries.noaa.gov/species/humpback-whale; WoRMS,
 *   “Megaptera novaeangliae”: https://www.marinespecies.org/aphia.php?p=taxdetails&id=137092 —
 *   Megaptera, do grego “mega” (grande) e “ptera” (asa), pelas nadadeiras compridas; novaeangliae,
 *   “da Nova Inglaterra”, pela baleia vista na costa da Nova Inglaterra (Brisson, 1756).
 */
export const BIO_NOMES: MiniCourse = {
  id: 'bio-nomes',
  name: 'O nome científico',
  emoji: '🔤',
  kind: 'biologia',
  summary: 'Por que todo bicho tem um nome em latim, e o que o grego e o latim dizem sobre ele: a biologia falando outras línguas.',
  sources: [
    { label: 'Wikipedia, “Systema Naturae”', url: 'https://en.wikipedia.org/wiki/Systema_Naturae' },
    { label: 'Wikipedia, “Binomial nomenclature”', url: 'https://en.wikipedia.org/wiki/Binomial_nomenclature' },
    { label: 'Birds of the World, “The Key to Scientific Names”', url: 'https://birdsoftheworld.org/bow/key-to-scientific-names/' },
    { label: 'Penguins International, “Etymology of penguin names”', url: 'https://www.penguinsinternational.org/etymology-of-penguin-names/' },
    { label: 'NOAA Fisheries, “Humpback whale”', url: 'https://www.fisheries.noaa.gov/species/humpback-whale' },
  ],
  lessons: [
    {
      id: 'lineu',
      title: 'Lineu e os dois nomes',
      emoji: '📗',
      intro: [
        'Cada língua chama o mesmo bicho de um jeito: pinguim, penguin, pingüino, Pinguin. Para os cientistas do mundo inteiro falarem da mesma espécie sem confusão, cada ser vivo tem também um nome científico, igual em todas as línguas.',
        'Quem espalhou esse jeito de dar nome foi o sueco Carl Lineu: nas plantas, no livro “Species Plantarum”, de 1753, e nos animais, na 10ª edição do “Systema Naturae”, de 1758. Antes dele, os nomes científicos eram frases longas, de várias palavras.',
        'O nome tem duas partes: o gênero, com letra maiúscula, e a espécie, com minúscula, os dois em itálico. Aptenodytes forsteri é o pinguim-imperador: Aptenodytes é o gênero, forsteri é a espécie. Para os animais, a contagem oficial dos nomes começa em 1º de janeiro de 1758.',
      ],
      items: [
        { term: 'gênero', meaning: 'a primeira parte do nome, com maiúscula', how: 'Aptenodytes, em Aptenodytes forsteri.' },
        { term: 'espécie', meaning: 'a segunda parte, com minúscula', how: 'forsteri, em Aptenodytes forsteri.' },
        { term: 'Lineu', meaning: 'o naturalista sueco que espalhou o nome de duas partes', how: '1753 (plantas) e 1758 (animais).' },
      ],
      quiz: [
        { q: 'Por que todo ser vivo tem um nome científico?', options: ['Para todo mundo falar da mesma espécie, em qualquer língua', 'Porque o latim é a língua dos bichos', 'Para os nomes ficarem mais difíceis'], answer: 0 },
        { q: 'Em “Aptenodytes forsteri”, qual parte é o gênero?', options: ['Aptenodytes', 'forsteri', 'As duas juntas'], answer: 0 },
        { q: 'Em que ano começa a contagem oficial dos nomes dos animais?', options: ['1758', '1500', '1900'], answer: 0 },
      ],
    },
    {
      id: 'grego-dos-pinguins',
      title: 'O grego dos pinguins',
      emoji: '🏛️',
      intro: [
        'Muitos nomes científicos vêm do grego antigo e contam alguma coisa do bicho. Aptenodytes, o gênero dos pinguins imperador e rei, junta “aptēn”, sem asas (que não voa), e “dutēs”, mergulhador: “o mergulhador que não voa”.',
        'Pygoscelis, o gênero do adélia e do gentoo, quer dizer “de pernas no traseiro”: as patas do pinguim ficam bem atrás no corpo.',
        'Eudyptes, o gênero dos pinguins de crista, como o macaroni, quer dizer “bom mergulhador”.',
      ],
      items: [
        { term: 'Aptenodytes', meaning: '“mergulhador que não voa”', how: 'Grego: aptēn (sem asas) + dutēs (mergulhador).', pt: 'pinguim', cientifico: 'Aptenodytes forsteri' },
        { term: 'Pygoscelis', meaning: '“de pernas no traseiro”', how: 'As patas ficam bem atrás no corpo.', cientifico: 'Pygoscelis adeliae' },
        { term: 'Eudyptes', meaning: '“bom mergulhador”', how: 'O gênero dos pinguins de crista.', cientifico: 'Eudyptes chrysolophus' },
      ],
      quiz: [
        { q: 'O que quer dizer Aptenodytes?', options: ['Mergulhador que não voa', 'Pássaro do gelo', 'Rei do mar'], answer: 0 },
        { q: 'Por que o gênero Pygoscelis quer dizer “de pernas no traseiro”?', options: ['As patas ficam bem atrás no corpo', 'Ele anda de costas', 'As pernas são muito compridas'], answer: 0 },
        { q: 'Eudyptes quer dizer…', options: ['Bom mergulhador', 'Topete amarelo', 'Ave pequena'], answer: 0 },
      ],
    },
    {
      id: 'asa-grande',
      title: 'A baleia de asas grandes',
      emoji: '🐋',
      intro: [
        'A baleia-jubarte se chama Megaptera novaeangliae. Megaptera junta duas palavras gregas: “mega”, grande, e “ptera”, asa. As “asas” são as nadadeiras do peito, que na jubarte são compridíssimas.',
        'E novaeangliae é latim: “da Nova Inglaterra”, a região dos Estados Unidos em cuja costa os europeus viam essas baleias. O nome lembra a “baleia da Nova Inglaterra” descrita pelo francês Brisson em 1756.',
        'Assim, um nome científico pode juntar o grego e o latim, e ainda guardar um lugar do mapa.',
      ],
      items: [
        { term: 'Megaptera', meaning: '“asa grande”', how: 'Grego: mega (grande) + ptera (asa), pelas nadadeiras compridas.', pt: 'baleia', cientifico: 'Megaptera novaeangliae' },
        { term: 'novaeangliae', meaning: '“da Nova Inglaterra”', how: 'Latim: a costa onde os europeus viam as jubartes.' },
      ],
      quiz: [
        { q: 'O que são as “asas grandes” da jubarte, no nome Megaptera?', options: ['As nadadeiras do peito', 'O rabo', 'Os jatos de água'], answer: 0 },
        { q: 'O que quer dizer novaeangliae?', options: ['Da Nova Inglaterra', 'Nova baleia', 'Do mar gelado'], answer: 0 },
      ],
    },
  ],
};

/** As unidades da trilha, na ordem. */
export const UNIDADES_BIO: MiniCourse[] = [BIO_FRIO, BIO_NOMES];

/** Os próximos ramos da trilha, da lista guardada em `docs/areas-futuras.md`, ainda sem conteúdo. */
export const PROXIMAS_UNIDADES: { nome: string; emoji: string; sobre: string }[] = [
  { nome: 'A célula', emoji: '🔬', sobre: 'Do que todo ser vivo é feito: a membrana, o núcleo e as partes da célula.' },
  { nome: 'Evolução', emoji: '🦕', sobre: 'Como as espécies mudam com o tempo: Darwin, a seleção natural e o ancestral comum.' },
  { nome: 'Ecologia e biomas', emoji: '🌳', sobre: 'Os seres vivos e o ambiente: cadeias alimentares e os biomas do Brasil e do mundo.' },
  { nome: 'Genética', emoji: '🧬', sobre: 'Genes, herança e as ervilhas de Mendel.' },
  { nome: 'Botânica', emoji: '🌿', sobre: 'Das algas e dos musgos às plantas com flor.' },
  { nome: 'Microbiologia', emoji: '🦠', sobre: 'Bactérias, fungos microscópicos e vírus.' },
];
