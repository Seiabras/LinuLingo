/**
 * Os dados dos experimentos do Laboratório da Biologia. Nada aqui é inventado: cada número vem da
 * fonte citada ao lado.
 */

// ——— As ervilhas de Mendel ———
// Gregor Mendel, “Versuche über Pflanzen-Hybriden”, Verhandlungen des naturforschenden Vereines in
// Brünn 4 (1866): 3–47. Os números da segunda geração (F2) de cada um dos sete cruzamentos são os do
// próprio artigo, reproduzidos na tabela 2-1 de Griffiths et al., “Introduction to Genetic Analysis”
// (11ª ed., Macmillan), e na página de P. McClean (North Dakota State University,
// https://www.ndsu.edu/pubweb/~mcclean/plsc431/overheads/mendel/mend2.htm).
export interface CaracterMendel {
  id: string;
  nome: string;
  dominante: string;
  recessivo: string;
  /** a cor de cada forma na tela (as cores de verdade quando o caráter é uma cor) */
  corDom: string;
  corRec: string;
  /** o que Mendel contou na F2 */
  f2: [number, number];
}

export const CARACTERES_MENDEL: CaracterMendel[] = [
  { id: 'forma', nome: 'Forma da semente', dominante: 'lisa', recessivo: 'rugosa', corDom: '#d9c27a', corRec: '#8a7440', f2: [5474, 1850] },
  { id: 'cor-semente', nome: 'Cor da semente', dominante: 'amarela', recessivo: 'verde', corDom: '#facc15', corRec: '#65a30d', f2: [6022, 2001] },
  { id: 'cor-flor', nome: 'Cor da flor', dominante: 'roxa', recessivo: 'branca', corDom: '#7e22ce', corRec: '#f1f5f9', f2: [705, 224] },
  { id: 'forma-vagem', nome: 'Forma da vagem', dominante: 'cheia', recessivo: 'estrangulada', corDom: '#16a34a', corRec: '#86efac', f2: [882, 299] },
  { id: 'cor-vagem', nome: 'Cor da vagem', dominante: 'verde', recessivo: 'amarela', corDom: '#16a34a', corRec: '#fde047', f2: [428, 152] },
  { id: 'posicao-flor', nome: 'Posição da flor', dominante: 'ao longo do caule', recessivo: 'na ponta do caule', corDom: '#0ea5e9', corRec: '#f97316', f2: [651, 207] },
  { id: 'altura', nome: 'Altura do caule', dominante: 'alto', recessivo: 'baixo', corDom: '#0f766e', corRec: '#a3e635', f2: [787, 277] },
];

// ——— As mariposas da cidade (Biston betularia) ———
// Fontes: Cook, Grant, Saccheri e Mallet, “Selective bird predation on the peppered moth: the last
// experiment of Michael Majerus”, Biology Letters 8 (2012): 609–612; e a página “Peppered Moths &
// Melanism” do Christ’s College, Cambridge (https://darwin200.christs.cam.ac.uk/melanism-moths).
export const FATOS_MARIPOSA: string[] = [
  'A mariposa-sarapintada (Biston betularia) é clara, com pintinhas, e passa o dia parada no tronco das árvores, onde os líquens a escondem.',
  'A forma escura (carbonaria) foi registrada pela primeira vez em Manchester, na Inglaterra, em 1848, quando era uma raridade.',
  'Por volta de 1895, cerca de 98% das mariposas de Manchester eram escuras: a fuligem das fábricas tinha matado os líquens e escurecido os troncos.',
  'Com o ar limpo de novo, no fim do século XX, as escuras voltaram a ficar raras.',
  'No último experimento de Michael Majerus, com 4.864 mariposas soltas ao longo de seis anos, os pássaros comeram mais as escuras nos troncos claros: o bastante para explicar a volta das claras. Ele morreu antes de publicar, e os colegas publicaram os resultados em 2012.',
];

// ——— A célula ———
// As partes e o que cada uma faz seguem os termos-chave do capítulo 4 de OpenStax, “Biology 2e”
// (Clark, Douglas e Choi, 2018, CC BY 4.0, https://openstax.org/books/biology-2e/pages/4-key-terms).
// Só a célula vegetal tem parede celular, cloroplastos e um vacúolo central grande; só a animal tem
// centrossomo e lisossomos (OpenStax, seção 4.3).
export type ParteCelula = 'membrana' | 'nucleo' | 'citoplasma' | 'mitocondria' | 'ribossomo' | 'lisossomo' | 'centrossomo' | 'parede' | 'cloroplasto' | 'vacuolo';

export const PARTES_CELULA: Record<ParteCelula, { nome: string; faz: string; so?: 'animal' | 'vegetal' }> = {
  membrana: { nome: 'Membrana plasmática', faz: 'A película que envolve a célula e escolhe o que entra e o que sai.' },
  nucleo: { nome: 'Núcleo', faz: 'Guarda o DNA da célula e comanda o que ela faz.' },
  citoplasma: { nome: 'Citoplasma', faz: 'Tudo o que fica entre a membrana e o núcleo: o líquido e as organelas.' },
  mitocondria: { nome: 'Mitocôndria', faz: 'Tira a energia dos alimentos (a respiração celular).' },
  ribossomo: { nome: 'Ribossomos', faz: 'Pontinhos que montam as proteínas.' },
  lisossomo: { nome: 'Lisossomo', faz: 'Um saquinho que digere o que a célula não quer mais.', so: 'animal' },
  centrossomo: { nome: 'Centrossomo', faz: 'Organiza os “trilhos” da célula (os microtúbulos), com dois centríolos.', so: 'animal' },
  parede: { nome: 'Parede celular', faz: 'Uma capa rígida por fora da membrana, que protege e dá forma.', so: 'vegetal' },
  cloroplasto: { nome: 'Cloroplasto', faz: 'Onde a planta faz a fotossíntese: transforma luz em alimento.', so: 'vegetal' },
  vacuolo: { nome: 'Vacúolo central', faz: 'Um saco enorme de água, que ajuda a célula a crescer e a ficar firme.', so: 'vegetal' },
};

// ——— Descubra o bicho ———
// As perguntas se respondem com os dados de `amigos-linu.ts` (classe, grupo, tamanho e fatos de cada
// amigo): o albatroz e o petrel voam; os pinguins, não (são aves que nadam).
export interface PerguntaBicho {
  id: string;
  texto: string;
  sim: string[];
}

export const PERGUNTAS_BICHO: PerguntaBicho[] = [
  { id: 'ave', texto: 'É uma ave?', sim: ['imperador', 'rei', 'adelia', 'gentoo', 'macaroni', 'albatroz', 'petrel'] },
  { id: 'mamifero', texto: 'É um mamífero?', sim: ['weddell', 'elefante-marinho', 'leopardo', 'jubarte'] },
  { id: 'pinguim', texto: 'É um pinguim?', sim: ['imperador', 'rei', 'adelia', 'gentoo', 'macaroni'] },
  { id: 'voa', texto: 'Voa?', sim: ['albatroz', 'petrel'] },
  { id: 'grande', texto: 'Passa de 1 metro (de comprimento ou de asas abertas)?', sim: ['imperador', 'weddell', 'elefante-marinho', 'leopardo', 'jubarte', 'albatroz'] },
  { id: 'enorme', texto: 'Passa de 10 metros?', sim: ['jubarte'] },
  { id: 'aptenodytes', texto: 'O nome científico começa com Aptenodytes?', sim: ['imperador', 'rei'] },
  { id: 'pygoscelis', texto: 'O nome científico começa com Pygoscelis?', sim: ['adelia', 'gentoo'] },
  { id: 'penacho', texto: 'Tem um penacho amarelo na cabeça?', sim: ['macaroni'] },
  { id: 'branco', texto: 'É todo branco?', sim: ['petrel'] },
  { id: 'maior-pinguim', texto: 'É o maior pinguim do mundo?', sim: ['imperador'] },
  { id: 'anel', texto: 'Tem um anel branco em volta do olho?', sim: ['adelia'] },
  { id: 'pintas', texto: 'Tem a pele com pintas escuras?', sim: ['leopardo'] },
  { id: 'tromba', texto: 'O macho tem uma tromba no nariz?', sim: ['elefante-marinho'] },
  { id: 'canta', texto: 'Os machos cantam canções longas?', sim: ['jubarte'] },
];
