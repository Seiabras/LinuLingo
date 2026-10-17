import { View } from 'react-native';
import { alvoDoTour } from '@/services/tour';
import { Screen, SectionTitle } from '@/components/ui';
import { AreaCabecalho } from '@/components/area/AreaCabecalho';
import { FichaArea } from '@/components/area/AreaTrilha';
import { CirculoCromatico } from '@/components/arte/CirculoCromatico';
import { DESAFIOS } from '@/data/arte/consulta';

/** O Ateliê: o círculo cromático para brincar com as harmonias e os desafios para desenhar no papel. */
export default function AtelieScreen() {
  return (
    <Screen>
      <AreaCabecalho area="arte" titulo="Ateliê" subtitulo="Para pôr a mão na massa: as cores que combinam e desafios curtos para fazer no papel." />
      <SectionTitle>O círculo cromático</SectionTitle>
      <View ref={alvoDoTour('arte-atelie')}>
        <CirculoCromatico />
      </View>
      <View className="mt-2">
        <FichaArea
          titulo="Misturando na tinta"
          paragrafos={[
            'Amarelo + vermelho = laranja. Vermelho + azul = violeta. Azul + amarelo = verde.',
            'Uma cor com a complementar dela fica acinzentada, “suja”: é o jeito dos pintores de escurecer uma cor sem usar o preto.',
          ]}
        />
      </View>
      <SectionTitle>Desafios para o papel</SectionTitle>
      <View className="gap-2">
        {DESAFIOS.map((d) => (
          <FichaArea key={d.titulo} titulo={d.titulo} linha={`⏱️ ${d.tempo}`} paragrafos={[d.como]} />
        ))}
      </View>
    </Screen>
  );
}
