import { useState } from 'react';
import { Linking, Pressable, Text, View } from 'react-native';
import { Card, Collapsible } from '@/components/ui';
import { pseudocienciasDa, SINAIS_DE_ALERTA, type AreaCiencia, type Pseudociencia } from '@/data/ciencia/pseudociencias';

const COR = {
  psicologia: 'text-violet-700 dark:text-violet-400',
  biologia: 'text-emerald-700 dark:text-emerald-400',
  idiomas: 'text-conecta-dark dark:text-conecta-300',
  musica: 'text-orange-700 dark:text-orange-400',
} as const;

function CartaoPseudo({ p }: { p: Pseudociencia }) {
  const [aberto, setAberto] = useState(false);
  return (
    <Card className="gap-1.5">
      <Pressable accessibilityRole="button" accessibilityState={{ expanded: aberto }} onPress={() => setAberto((a) => !a)} className="gap-1 active:opacity-70">
        <Text className="text-base font-extrabold text-slate-900 dark:text-white">{p.nome}</Text>
        <Text className="text-sm text-slate-700 dark:text-slate-300">
          <Text className="font-bold">O que promete: </Text>
          {p.promete}
        </Text>
        {!aberto && <Text className={`text-xs font-bold ${COR[p.area]}`}>O que a pesquisa diz ›</Text>}
      </Pressable>
      {aberto && (
        <>
          <Text className="text-sm text-slate-700 dark:text-slate-300">
            <Text className="font-bold">O que a pesquisa diz: </Text>
            {p.sabemos}
          </Text>
          {p.fontes.map((f) => (
            <Pressable key={f.url} accessibilityRole="link" onPress={() => void Linking.openURL(f.url)} className="active:opacity-70">
              <Text className="text-[11px] text-slate-500 underline dark:text-slate-400">Fonte: {f.label}</Text>
            </Pressable>
          ))}
        </>
      )}
    </Card>
  );
}

/**
 * Ciência ou pseudociência (pedido do dono, 17/10/2026): os sinais de alerta (Lilienfeld, 2012) e as
 * pseudociências de uma área, cada uma com o que promete, o que a pesquisa diz e a fonte.
 */
export function Pseudociencias({ area, intro }: { area: AreaCiencia; intro: string }) {
  const [sinais, setSinais] = useState(false);
  return (
    <View className="gap-2">
      <Text className="text-sm text-slate-600 dark:text-slate-400">{intro}</Text>
      <Collapsible title="Os sinais de alerta" count={SINAIS_DE_ALERTA.length} open={sinais} onToggle={() => setSinais((s) => !s)}>
        <Card className="gap-1.5">
          {SINAIS_DE_ALERTA.map((s) => (
            <Text key={s.sinal} className="text-sm text-slate-700 dark:text-slate-300">
              <Text className="font-bold">🚩 {s.sinal}. </Text>
              {s.explica}
            </Text>
          ))}
          <Text className="text-[11px] text-slate-500">Lilienfeld, Ammirati e David, Journal of School Psychology 50 (2012).</Text>
        </Card>
      </Collapsible>
      {pseudocienciasDa(area).map((p) => (
        <CartaoPseudo key={p.id} p={p} />
      ))}
    </View>
  );
}
