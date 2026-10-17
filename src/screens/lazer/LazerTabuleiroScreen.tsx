import { View } from 'react-native';
import { Screen } from '@/components/ui';
import { EmBreve } from '@/components/outros-jogos/SubareaLazer';
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
      {/* o RPG ainda não tem jogos: fica aqui, junto dos jogos de mesa, até ganhar a aba dele */}
      <View className="mt-3">
        <EmBreve titulo="RPG" frase="Aqui vão chegar os jogos de interpretar personagens: a história do RPG de mesa e aventuras para jogar com o Linu." />
      </View>
    </Screen>
  );
}
