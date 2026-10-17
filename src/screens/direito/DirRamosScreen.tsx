import { useState } from 'react';
import { Text, View } from 'react-native';
import { alvoDoTour } from '@/services/tour';
import { Card, Screen, SectionTitle } from '@/components/ui';
import { AreaCabecalho } from '@/components/area/AreaCabecalho';
import { FichaArea, SeletorArea } from '@/components/area/AreaTrilha';
import { ESCOLAS_DIREITO, RAMOS_DIREITO, SISTEMAS_JURIDICOS } from '@/data/direito/consulta';

const ESFERAS = [
  ['público', 'Direito público: o Estado no exercício do poder dele.'],
  ['privado', 'Direito privado: as pessoas e as empresas, em pé de igualdade.'],
  ['difuso e coletivo', 'Direitos difusos e coletivos: interesses de muita gente ao mesmo tempo.'],
] as const;

/** Os ramos do direito (público, privado, difuso), os grandes sistemas do mundo e as escolas de pensamento. */
export default function DirRamosScreen() {
  const [aba, setAba] = useState<'ramos' | 'sistemas' | 'escolas'>('ramos');
  return (
    <Screen>
      <AreaCabecalho area="direito" titulo="Ramos" subtitulo="Como o direito se divide, como cada parte do mundo organiza as leis e as grandes ideias sobre o que o direito é." />
      <View ref={alvoDoTour('dir-ramos')}>
        <SeletorArea
          area="direito"
          valor={aba}
          aoEscolher={setAba}
          opcoes={[
            ['ramos', '🌿 Ramos'],
            ['sistemas', '🌍 No mundo'],
            ['escolas', '💭 Ideias'],
          ]}
        />
      </View>
      {aba === 'ramos' &&
        ESFERAS.map(([esfera, sobre]) => (
          <View key={esfera}>
            <SectionTitle>{`Direito ${esfera}`}</SectionTitle>
            <Text className="mb-2 text-sm text-slate-600 dark:text-slate-400">{sobre}</Text>
            <View className="gap-2">
              {RAMOS_DIREITO.filter((r) => r.esfera === esfera).map((r) => (
                <Card key={r.nome} className="gap-0.5">
                  <Text className="text-base font-extrabold text-slate-900 dark:text-white">Direito {r.nome}</Text>
                  <Text className="text-xs font-bold text-amber-700 dark:text-amber-400">{r.lei}</Text>
                  <Text className="text-sm text-slate-700 dark:text-slate-300">{r.cuida}</Text>
                  <Text className="text-xs italic text-slate-600 dark:text-slate-400">Exemplo: {r.exemplo}</Text>
                </Card>
              ))}
            </View>
          </View>
        ))}
      {aba === 'sistemas' && (
        <View className="mt-3 gap-2">
          {SISTEMAS_JURIDICOS.map((s) => (
            <FichaArea key={s.nome} titulo={s.nome} linha={s.onde} paragrafos={[s.como]} />
          ))}
        </View>
      )}
      {aba === 'escolas' && (
        <View className="mt-3 gap-2">
          {ESCOLAS_DIREITO.map((s) => (
            <FichaArea key={s.nome} titulo={s.nome} linha={s.quem} paragrafos={[s.ideia]} />
          ))}
        </View>
      )}
    </Screen>
  );
}
