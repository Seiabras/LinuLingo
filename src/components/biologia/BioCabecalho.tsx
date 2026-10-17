import { AreaCabecalho } from '@/components/area/AreaCabecalho';

/** O topo de cada aba da Biologia: o título, a marca da área e o botão de voltar aos Idiomas. */
export function BioCabecalho({ titulo, subtitulo }: { titulo: string; subtitulo?: string }) {
  return <AreaCabecalho area="biologia" titulo={titulo} subtitulo={subtitulo} />;
}
