import { useState } from 'react';
import { Text, View } from 'react-native';
import { alvoDoTour } from '@/services/tour';
import { Card, Screen } from '@/components/ui';
import { AreaCabecalho } from '@/components/area/AreaCabecalho';
import { SeletorArea } from '@/components/area/AreaTrilha';
import { MODELOS_MKT, PESSOAS_MKT_BRASIL, PESSOAS_MKT_MUNDO, type PessoaMkt } from '@/data/marketing/ideias';

function CartaoPessoa({ p }: { p: PessoaMkt }) {
  return (
    <Card className="gap-0.5">
      <Text className="text-base font-extrabold text-slate-900 dark:text-white">{p.nome}</Text>
      <Text className="text-xs font-bold text-pink-700 dark:text-pink-400">{p.onde}</Text>
      <Text className="text-sm text-slate-700 dark:text-slate-300">{p.fez}</Text>
    </Card>
  );
}

/** Os modelos clássicos do marketing, para consultar, e as pessoas que os criaram. */
export default function MktIdeiasScreen() {
  const [aba, setAba] = useState<'modelos' | 'mundo' | 'brasil'>('modelos');
  return (
    <Screen>
      <AreaCabecalho area="marketing" titulo="Ideias" subtitulo="Os modelos que o marketing usa até hoje, de onde vieram e quem os pensou." />
      <View ref={alvoDoTour('mkt-ideias')}>
        <SeletorArea
          area="marketing"
          valor={aba}
          aoEscolher={setAba}
          opcoes={[
            ['modelos', '🧩 Modelos'],
            ['mundo', '🌍 Pessoas'],
            ['brasil', '🇧🇷 No Brasil'],
          ]}
        />
      </View>
      <View className="mt-3 gap-2">
        {aba === 'modelos' &&
          MODELOS_MKT.map((m) => (
            <Card key={m.nome} className="gap-1">
              <Text className="text-lg font-extrabold text-slate-900 dark:text-white">{m.nome}</Text>
              <Text className="text-xs font-bold text-pink-700 dark:text-pink-400">{m.origem}</Text>
              {m.partes.map((p) => (
                <Text key={p} className="text-sm text-slate-700 dark:text-slate-300">
                  • {p}
                </Text>
              ))}
              <Text className="mt-1 text-xs italic text-slate-600 dark:text-slate-400">Para que serve: {m.usar}</Text>
            </Card>
          ))}
        {aba === 'mundo' && PESSOAS_MKT_MUNDO.map((p) => <CartaoPessoa key={p.nome} p={p} />)}
        {aba === 'brasil' && PESSOAS_MKT_BRASIL.map((p) => <CartaoPessoa key={p.nome} p={p} />)}
      </View>
    </Screen>
  );
}
