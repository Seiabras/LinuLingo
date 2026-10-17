import { useState } from 'react';
import { View } from 'react-native';
import { alvoDoTour } from '@/services/tour';
import { Screen } from '@/components/ui';
import { AreaCabecalho } from '@/components/area/AreaCabecalho';
import { FichaArea, SeletorArea } from '@/components/area/AreaTrilha';
import { COCCOES, CORTES, MOLHOS_MAE, type FichaCozinha } from '@/data/alimentacao/consulta';

const ABAS = { coccao: COCCOES, cortes: CORTES, molhos: MOLHOS_MAE } satisfies Record<string, FichaCozinha[]>;

/** A Cozinha: os jeitos de cozinhar, os cortes e os cinco molhos-mãe de Escoffier, para consultar. */
export default function CozinhaScreen() {
  const [aba, setAba] = useState<keyof typeof ABAS>('coccao');
  return (
    <Screen>
      <AreaCabecalho area="alimentacao" titulo="Cozinha" subtitulo="As técnicas de base, para consultar com a mão na massa." />
      <View ref={alvoDoTour('ali-cozinha')}>
        <SeletorArea
          area="alimentacao"
          valor={aba}
          aoEscolher={setAba}
          opcoes={[
            ['coccao', '🔥 Cozinhar'],
            ['cortes', '🔪 Cortes'],
            ['molhos', '🥣 Molhos-mãe'],
          ]}
        />
      </View>
      <View className="mt-3 gap-2">
        {aba === 'molhos' && (
          <FichaArea
            titulo="Os cinco molhos-mãe"
            linha="Auguste Escoffier, “Le Guide Culinaire”, 1903"
            paragrafos={['O chef francês organizou a cozinha clássica em cinco molhos de base. Deles saem centenas de outros: com queijo, a bechamel vira molho mornay; com estragão, o holandês vira bearnês.']}
          />
        )}
        {aba === 'cortes' && (
          <FichaArea titulo="Antes de cortar" paragrafos={['Faca afiada, tábua firme (um pano úmido embaixo segura) e a mão de apoio em garra, com os dedos dobrados. Pedaços do mesmo tamanho cozinham no mesmo tempo.']} />
        )}
        {ABAS[aba].map((f) => (
          <FichaArea key={f.nome} titulo={f.nome} linha={f.linha} paragrafos={[f.sobre]} />
        ))}
      </View>
    </Screen>
  );
}
