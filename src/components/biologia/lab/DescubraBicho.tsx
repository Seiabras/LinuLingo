import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Button, Card } from '@/components/ui';
import { LinuAmigo } from '@/components/LinuAmigo';
import { amigosDaBiologia } from '@/data/biologia/seres';
import { PERGUNTAS_BICHO } from '@/data/biologia/laboratorio';
import { awardXp } from '@/database/queries';
import { useApp } from '@/services/app-state';
import * as haptics from '@/services/haptics';

const sorteia = () => {
  const a = amigosDaBiologia();
  return a[Math.floor(Math.random() * a.length)]!.id;
};

/**
 * Descubra o bicho: o Linu pensa num dos amigos dele e você faz perguntas de sim ou não. Cada resposta
 * apaga os bichos que não combinam (é assim que funciona uma chave de identificação). Quando sobrar
 * um, ou quando você tiver certeza, toque nele para chutar.
 */
export function DescubraBicho() {
  const { db, refresh } = useApp();
  const amigos = amigosDaBiologia();
  const [segredo, setSegredo] = useState(sorteia);
  const [feitas, setFeitas] = useState<string[]>([]);
  const [chute, setChute] = useState<string | null>(null);
  const [errados, setErrados] = useState<string[]>([]);

  const resposta = (id: string) => PERGUNTAS_BICHO.find((p) => p.id === id)!.sim.includes(segredo);
  const combina = (amigo: string) =>
    !errados.includes(amigo) && feitas.every((id) => PERGUNTAS_BICHO.find((p) => p.id === id)!.sim.includes(amigo) === resposta(id));
  const sobram = amigos.filter((a) => combina(a.id));
  const acertou = chute === segredo;

  const chutar = (id: string) => {
    if (acertou) return;
    setChute(id);
    if (id === segredo) {
      haptics.success();
      if (db) void awardXp(db, Math.max(4, 12 - feitas.length), 'bio-lab:descubra').then(() => refresh());
    } else {
      haptics.error();
      setErrados((e) => [...e, id]);
    }
  };
  const denovo = () => {
    setSegredo(sorteia());
    setFeitas([]);
    setChute(null);
    setErrados([]);
  };
  const amigo = amigos.find((a) => a.id === segredo)!;

  return (
    <View className="gap-3">
      <Card className="gap-2">
        {acertou ? (
          <View className="items-center gap-2">
            <LinuAmigo id={amigo.id} size={80} />
            <Text className="text-lg font-extrabold text-slate-900 dark:text-white">Era {amigo.artigo} {amigo.species.toLowerCase()}!</Text>
            <Text className="text-sm text-slate-600 dark:text-slate-400">
              Você descobriu com {feitas.length} {feitas.length === 1 ? 'pergunta' : 'perguntas'}
              {errados.length ? ` e ${errados.length} ${errados.length === 1 ? 'chute errado' : 'chutes errados'}` : ''}.
            </Text>
            <Button title="Outro bicho" onPress={denovo} />
          </View>
        ) : (
          <>
            <Text className="text-sm text-slate-700 dark:text-slate-300">
              Pensei num dos meus amigos. Faça perguntas e toque no bicho quando souber. Sobram <Text className="font-bold">{sobram.length}</Text>.
            </Text>
            <View className="flex-row flex-wrap gap-1.5">
              {PERGUNTAS_BICHO.map((p) => {
                const feita = feitas.includes(p.id);
                return (
                  <Pressable
                    key={p.id}
                    accessibilityRole="button"
                    disabled={feita}
                    onPress={() => {
                      haptics.tapLight();
                      setFeitas((f) => [...f, p.id]);
                    }}
                    className={`rounded-xl border-2 px-2.5 py-1.5 ${feita ? (resposta(p.id) ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950' : 'border-rose-400 bg-rose-50 dark:bg-rose-950') : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
                  >
                    <Text className="text-xs font-bold text-slate-700 dark:text-slate-200">
                      {p.texto}
                      {feita ? (resposta(p.id) ? ' Sim!' : ' Não.') : ''}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </>
        )}
      </Card>
      <View className="flex-row flex-wrap justify-center gap-2">
        {amigos.map((a) => {
          const ok = combina(a.id);
          return (
            <Pressable
              key={a.id}
              accessibilityRole="button"
              accessibilityLabel={`Chutar ${a.species}`}
              onPress={() => chutar(a.id)}
              style={{ opacity: ok ? 1 : 0.2, width: 92 }}
              className="items-center rounded-xl bg-white p-1.5 dark:bg-slate-900"
            >
              <LinuAmigo id={a.id} size={56} />
              <Text numberOfLines={2} className="text-center text-[11px] font-bold text-slate-700 dark:text-slate-200">
                {a.species}
              </Text>
            </Pressable>
          );
        })}
      </View>
      {chute && !acertou && <Text className="text-center text-sm text-rose-600">Não é esse! Pergunte mais.</Text>}
    </View>
  );
}
