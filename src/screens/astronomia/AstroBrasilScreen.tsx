import { View } from 'react-native';
import { Screen, SectionTitle } from '@/components/ui';
import { AreaCabecalho } from '@/components/area/AreaCabecalho';
import { FichaArea, MarcosArea } from '@/components/area/AreaTrilha';
import { MARCOS_ASTRO_BRASIL } from '@/data/astronomia/ceu';

/** A astronomia no Brasil: a história em marcos e por onde começar a participar. */
export default function AstroBrasilScreen() {
  return (
    <Screen>
      <AreaCabecalho area="astronomia" titulo="Astronomia no Brasil" subtitulo="Do observatório do Recife holandês ao brasileiro no espaço." />

      <SectionTitle>A história, ano a ano</SectionTitle>
      <MarcosArea area="astronomia" marcos={MARCOS_ASTRO_BRASIL} />

      <SectionTitle>Para participar</SectionTitle>
      <View className="gap-2">
        <FichaArea
          titulo="OBA, a Olimpíada Brasileira de Astronomia e Astronáutica"
          linha="oba.org.br"
          paragrafos={['A escola se inscreve e os alunos, do 1º ano do fundamental ao fim do ensino médio, fazem a prova na própria escola. Tem também a Mostra de Foguetes, com foguetes de garrafa PET.']}
        />
        <FichaArea
          titulo="Planetários e observatórios"
          paragrafos={['Muitas cidades têm planetário, e os observatórios das universidades costumam abrir à noite para o público olhar o céu pelo telescópio. Procure o mais perto de você.']}
        />
        <FichaArea
          titulo="Clubes de astronomia amadora"
          paragrafos={['Grupos de astrônomos amadores marcam observações em lugares escuros, emprestam telescópios e ensinam a reconhecer o céu. Muitos achados de cometas e de supernovas são de amadores.']}
        />
      </View>
    </Screen>
  );
}
