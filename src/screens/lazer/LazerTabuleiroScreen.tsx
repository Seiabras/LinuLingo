import { Screen } from '@/components/ui';
import { AreaCabecalho } from '@/components/area/AreaCabecalho';
import { KnowledgeGamesTab } from '@/components/KnowledgeGamesTab';

/**
 * O Lazer como app próprio (pedido do dono, 17/10/2026: “tirar a parte de Lazer de dentro do Idiomas
 * e criar a parte separada, assim como Biologia, Psicologia e Música”). A primeira aba são os jogos
 * de tabuleiro, que antes ficavam na Cultura.
 */
export default function LazerTabuleiroScreen() {
  return (
    <Screen>
      <AreaCabecalho area="lazer" titulo="Tabuleiro" />
      <KnowledgeGamesTab />
    </Screen>
  );
}
