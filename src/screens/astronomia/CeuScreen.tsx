import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { alvoDoTour } from '@/services/tour';
import { Card, Screen, SectionTitle } from '@/components/ui';
import { AreaCabecalho } from '@/components/area/AreaCabecalho';
import { FichaArea, SeletorArea } from '@/components/area/AreaTrilha';
import { CruzeiroDoSul } from '@/components/astronomia/CruzeiroDoSul';
import { fmt } from '@/components/area/Calculadora';
import { CONSTELACOES, CONSTELACOES_INDIGENAS, LUA, PLANETAS, type Planeta } from '@/data/astronomia/ceu';

function FichaPlaneta({ p }: { p: Planeta }) {
  const [aberto, setAberto] = useState(false);
  const anos = p.orbitaDias / 365.25;
  return (
    <Pressable accessibilityRole="button" accessibilityState={{ expanded: aberto }} onPress={() => setAberto(!aberto)} className="active:opacity-80">
      <Card className="gap-1">
        <View className="flex-row items-center gap-3">
          <Text className="text-3xl">{p.emoji}</Text>
          <View className="flex-1">
            <Text className="text-lg font-extrabold text-slate-900 dark:text-white">{p.nome}</Text>
            <Text className="text-xs font-bold text-indigo-700 dark:text-indigo-400">{p.tipo}</Text>
          </View>
          <Text className="text-lg text-slate-500">{aberto ? '▾' : '›'}</Text>
        </View>
        {aberto && (
          <View className="gap-0.5">
            <Text className="text-sm text-slate-700 dark:text-slate-300">Diâmetro: {fmt(p.diametroKm, 0)} km</Text>
            <Text className="text-sm text-slate-700 dark:text-slate-300">Gravidade: {fmt(p.gravidade, 1)} m/s² ({fmt(p.gravidade / 9.8, 2)} × a da Terra)</Text>
            <Text className="text-sm text-slate-700 dark:text-slate-300">
              {p.tipo === 'satélite' ? 'Distância à Terra' : 'Distância média ao Sol'}: {fmt(p.distanciaMkm * 1e6, 0)} km
            </Text>
            <Text className="text-sm text-slate-700 dark:text-slate-300">
              {p.tipo === 'satélite' ? 'Volta na Terra' : 'Ano (volta no Sol)'}: {fmt(p.orbitaDias, 1)} dias{anos >= 2 ? ` (${fmt(anos, 1)} anos da Terra)` : ''}
            </Text>
            <Text className="text-sm text-slate-700 dark:text-slate-300">
              Dia (de um nascer do Sol ao outro): {p.diaHoras >= 48 ? `${fmt(p.diaHoras / 24, 1)} dias da Terra` : `${fmt(p.diaHoras, 1)} horas`}
            </Text>
            <Text className="text-sm text-slate-700 dark:text-slate-300">Temperatura média: {fmt(p.temperatura, 0)} °C</Text>
            <Text className="mt-1 text-sm italic text-slate-600 dark:text-slate-400">{p.curiosidade}</Text>
          </View>
        )}
      </Card>
    </Pressable>
  );
}

/** O céu: o Cruzeiro do Sul nas posições de verdade, as constelações fáceis de achar e as fichas dos planetas. */
export default function CeuScreen() {
  const [aba, setAba] = useState<'estrelas' | 'planetas'>('estrelas');
  return (
    <Screen>
      <AreaCabecalho area="astronomia" titulo="Céu" subtitulo="O que dá para ver lá fora, e a ficha de cada mundo do Sistema Solar. Dados da NASA e da União Astronômica Internacional." />
      <View ref={alvoDoTour('astro-ceu')}>
        <SeletorArea
          area="astronomia"
          valor={aba}
          aoEscolher={setAba}
          opcoes={[
            ['estrelas', '✨ Estrelas'],
            ['planetas', '🪐 Planetas'],
          ]}
        />
      </View>
      {aba === 'estrelas' ? (
        <>
          <SectionTitle>O Cruzeiro do Sul</SectionTitle>
          <CruzeiroDoSul />
          <View className="mt-2">
            <FichaArea
              titulo="Na prática: achar o sul pelas estrelas"
              paragrafos={[
                'Ache a cruz e o braço maior, de Rubídea (γ, a alaranjada) a Magalhães (α). Prolongue esse braço, para o lado de Magalhães, cerca de quatro vezes e meia o tamanho dele.',
                'Ali fica o polo sul celeste, um ponto sem estrela brilhante. Desça uma linha reta dele até o horizonte: aquele é o sul. De costas para o sul, o norte fica à sua frente, o leste à direita e o oeste à esquerda.',
              ]}
            />
          </View>
          <SectionTitle>Constelações fáceis de achar</SectionTitle>
          <View className="gap-2">
            {CONSTELACOES.map((c) => (
              <FichaArea key={c.nome} titulo={c.nome} linha={c.quando} paragrafos={[c.comoAchar]} />
            ))}
          </View>
          <SectionTitle>O céu dos povos indígenas</SectionTitle>
          <Text className="mb-2 text-sm text-slate-600 dark:text-slate-400">
            Os povos indígenas do Brasil têm constelações próprias, que marcam as estações, o plantio e a pesca. Muitas usam também as manchas escuras da Via Láctea.
          </Text>
          <View className="gap-2">
            {CONSTELACOES_INDIGENAS.map((c) => (
              <FichaArea key={c.nome} titulo={c.nome} linha={c.povo} paragrafos={[c.estrelas, c.quando]} />
            ))}
          </View>
        </>
      ) : (
        <>
          <SectionTitle>Os planetas, do Sol para fora</SectionTitle>
          <Text className="mb-2 text-sm text-slate-600 dark:text-slate-400">Toque num planeta para abrir a ficha.</Text>
          <View className="gap-2">
            {[...PLANETAS, LUA].map((p) => (
              <FichaPlaneta key={p.nome} p={p} />
            ))}
          </View>
        </>
      )}
    </Screen>
  );
}
