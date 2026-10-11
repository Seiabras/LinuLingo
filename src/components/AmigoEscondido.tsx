import { useEffect, useState } from 'react';
import { Modal, Pressable, Text, View, type ViewStyle } from 'react-native';
import Animated, { BounceIn, FadeIn, useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming } from 'react-native-reanimated';
import { router } from 'expo-router';
import { LinuAmigo } from '@/components/LinuAmigo';
import { Comemoracao } from '@/components/jogos/efeitos';
import { AMIGOS_LINU } from '@/data/amigos-linu';
import { useAppReduceMotion } from '@/services/accessibility';
import { useApp } from '@/services/app-state';
import { marcarAchado, useAmigosAchados } from '@/services/amigos-achados';
import * as haptics from '@/services/haptics';

/**
 * Um amigo do Linu escondido numa tela (pedido do dono, 11/10/2026): pequeno, espiando e balançando
 * de leve. Tocar nele comemora (“Parabéns, você achou o Duque!”) e o amigo passa a aparecer inteiro na
 * página dos amigos. Depois de achado, ele some daqui. A dica de onde ele está fica em /amigos.
 */
export function AmigoEscondido({ id, tamanho = 44, style }: { id: string; tamanho?: number; style?: ViewStyle }) {
  const { db } = useApp();
  const { achados, carregado } = useAmigosAchados(db);
  const [festa, setFesta] = useState(false);
  const reduz = useAppReduceMotion();
  const giro = useSharedValue(0);
  useEffect(() => {
    if (reduz) return;
    giro.value = withRepeat(withSequence(withTiming(-8, { duration: 700 }), withTiming(8, { duration: 700 })), -1, true);
  }, [giro, reduz]);
  const balanco = useAnimatedStyle(() => ({ transform: [{ rotate: `${giro.value}deg` }] }));
  const amigo = AMIGOS_LINU.find((a) => a.id === id);
  if (!amigo || !carregado) return null;
  const jaAchado = achados.includes(id);
  if (jaAchado && !festa) return null;

  return (
    <View style={style}>
      {!jaAchado && (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={`Um amigo do Linu escondido. Tocar para achar`}
          hitSlop={8}
          onPress={() => {
            haptics.success();
            setFesta(true);
            void marcarAchado(db, id);
          }}
        >
          <Animated.View style={[{ opacity: 0.92 }, balanco]}>
            <LinuAmigo id={id} size={tamanho} />
          </Animated.View>
        </Pressable>
      )}
      {festa && (
        <Modal transparent visible animationType="none" onRequestClose={() => setFesta(false)}>
          <Pressable
            accessibilityLabel="Fechar"
            onPress={() => setFesta(false)}
            style={{ flex: 1, backgroundColor: 'rgba(15, 23, 42, 0.6)', alignItems: 'center', justifyContent: 'center', padding: 24 }}
          >
            <Animated.View entering={FadeIn.duration(200)} style={{ width: '100%', maxWidth: 380 }}>
              <Pressable onPress={() => {}} className="items-center gap-2 rounded-3xl bg-white p-5 dark:bg-slate-900">
                {!reduz && <Comemoracao tipo="neve" largura={340} />}
                <Animated.View entering={reduz ? undefined : BounceIn.duration(700)}>
                  <LinuAmigo id={id} size={150} />
                </Animated.View>
                <Text className="text-center text-2xl font-extrabold text-slate-900 dark:text-white">
                  Parabéns, você achou {amigo.artigo} {amigo.name}!
                </Text>
                <Text className="text-center text-sm font-semibold text-slate-600 dark:text-slate-300">
                  {amigo.species} · <Text className="italic">{amigo.scientific}</Text>
                </Text>
                <View className="mt-1 rounded-xl bg-sky-50 px-3 py-2 dark:bg-sky-950/40">
                  <Text className="text-center text-sm leading-5 text-slate-800 dark:text-slate-200">“{amigo.hi}”</Text>
                </View>
                <Text className="text-center text-xs text-slate-600 dark:text-slate-400">
                  Agora {amigo.artigo === 'a' ? 'ela' : 'ele'} aparece com a descrição na página dos amigos do Linu.
                </Text>
                <View className="mt-2 w-full flex-row gap-2">
                  <Pressable
                    accessibilityRole="button"
                    onPress={() => setFesta(false)}
                    className="flex-1 items-center rounded-full bg-slate-100 py-2.5 active:opacity-80 dark:bg-slate-800"
                  >
                    <Text className="font-extrabold text-slate-700 dark:text-slate-200">Continuar</Text>
                  </Pressable>
                  <Pressable
                    accessibilityRole="button"
                    onPress={() => {
                      setFesta(false);
                      router.push('/amigos');
                    }}
                    className="flex-1 items-center rounded-full bg-conecta py-2.5 active:opacity-80"
                  >
                    <Text className="font-extrabold text-white">Ver os amigos</Text>
                  </Pressable>
                </View>
              </Pressable>
            </Animated.View>
          </Pressable>
        </Modal>
      )}
    </View>
  );
}
