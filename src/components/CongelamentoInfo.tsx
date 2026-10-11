import { useEffect, useState } from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
import Animated, { ZoomIn } from 'react-native-reanimated';
import Svg, { Path, Rect } from 'react-native-svg';
import { useApp } from '@/services/app-state';
import * as haptics from '@/services/haptics';
import { comprarCongelamento, krillForPacote, PRECO_CONGELAMENTO } from '@/services/linu-outfit';
import { MAX_CONGELAMENTOS } from '@/services/progress';

/** Um cubo de gelo desenhado (o congelamento da ofensiva). */
export function CuboDeGelo({ tamanho = 48, apagado = false }: { tamanho?: number; apagado?: boolean }) {
  return (
    <Svg width={tamanho} height={tamanho} viewBox="0 0 48 48" opacity={apagado ? 0.3 : 1}>
      <Rect x="6" y="8" width="36" height="34" rx="9" fill="#BAE6FD" stroke="#0284C7" strokeWidth="2.5" />
      <Path d="M12 14 h14 a4 4 0 0 1 4 4 v2" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
      <Path d="M24 22 v12 M18 25 l12 6 M30 25 l-12 6" stroke="#0369A1" strokeWidth="2.2" strokeLinecap="round" />
    </Svg>
  );
}

/**
 * O congelamento da ofensiva, explicado num pop-up (pedido do dono, 11/10/2026): o que ele faz,
 * como ganhar mais e a opção de comprar com krill. Abre pelo 🔥 do topo da trilha e pelo perfil.
 * Fica montado só enquanto está aberto (no web, o Modal com animação não fechava).
 */
export function CongelamentoInfo({ onClose }: { onClose: () => void }) {
  const { db, user, streak, refresh } = useApp();
  const xp = user?.total_xp ?? 0;
  const tem = user?.streak_freezes ?? 0;
  const [krill, setKrill] = useState<number | null>(null);
  const [aviso, setAviso] = useState<string | null>(null);

  useEffect(() => {
    void krillForPacote(db, xp).then(setKrill);
  }, [db, xp, tem]);

  const cheio = tem >= MAX_CONGELAMENTOS;
  const falta = krill === null ? 0 : Math.max(0, PRECO_CONGELAMENTO - krill);

  const comprar = async () => {
    const r = await comprarCongelamento(db, xp);
    if (r === 'ok') {
      haptics.success();
      setAviso('Pronto! Mais um congelamento guardado.');
      await refresh();
    } else setAviso(r === 'cheio' ? `Você já tem o máximo, ${MAX_CONGELAMENTOS}.` : 'Ainda não dá: falta krill.');
  };

  return (
    <Modal transparent visible animationType="none" onRequestClose={onClose}>
      <Pressable
        accessibilityLabel="Fechar"
        onPress={onClose}
        style={{ flex: 1, backgroundColor: 'rgba(15, 23, 42, 0.55)', alignItems: 'center', justifyContent: 'center', padding: 20 }}
      >
        <Animated.View entering={ZoomIn.duration(220)} style={{ width: '100%', maxWidth: 400 }}>
          <Pressable onPress={() => {}} className="gap-3 rounded-3xl bg-white p-5 dark:bg-slate-900">
            <View className="flex-row items-center justify-center gap-2">
              {Array.from({ length: MAX_CONGELAMENTOS }, (_, k) => (
                <CuboDeGelo key={k} tamanho={52} apagado={k >= tem} />
              ))}
            </View>
            <Text className="text-center text-xl font-extrabold text-slate-900 dark:text-white">
              Congelamentos: {tem} de {MAX_CONGELAMENTOS}
            </Text>
            <Text className="text-center text-sm font-bold text-orange-600 dark:text-orange-400">
              🔥 Ofensiva de {streak} {streak === 1 ? 'dia' : 'dias'}
            </Text>

            <View className="gap-1 rounded-2xl bg-sky-50 p-3 dark:bg-sky-950/40">
              <Text className="text-sm font-extrabold text-sky-900 dark:text-sky-200">O que é</Text>
              <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">
                Se um dia você não estudar, um congelamento protege a sua ofensiva: ela não zera, e você continua de onde parou. Cada congelamento cobre um dia
                sem estudo e é usado sozinho, sem você precisar fazer nada.
              </Text>
            </View>
            <View className="gap-1 rounded-2xl bg-emerald-50 p-3 dark:bg-emerald-950/40">
              <Text className="text-sm font-extrabold text-emerald-900 dark:text-emerald-200">Como ganhar mais</Text>
              <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">
                Você começa com 1. A cada 7 dias seguidos de ofensiva, ganha mais um. Dá para guardar até {MAX_CONGELAMENTOS} de uma vez.
              </Text>
            </View>
            <View className="gap-2 rounded-2xl bg-orange-50 p-3 dark:bg-orange-950/40">
              <Text className="text-sm font-extrabold text-orange-900 dark:text-orange-200">Comprar com krill</Text>
              <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">
                Troque {PRECO_CONGELAMENTO} krill 🦐 por um congelamento. O krill vem do XP que você ganha estudando (1 krill a cada 10 XP).
                {krill !== null ? ` Você tem 🦐 ${krill}.` : ''}
              </Text>
              <Pressable
                accessibilityRole="button"
                disabled={cheio || falta > 0}
                onPress={comprar}
                className={`items-center rounded-full px-4 py-2.5 ${cheio || falta > 0 ? 'bg-slate-200 dark:bg-slate-800' : 'bg-orange-500 active:opacity-80'}`}
              >
                <Text className={`font-extrabold ${cheio || falta > 0 ? 'text-slate-600 dark:text-slate-300' : 'text-white'}`}>
                  {cheio ? `Você já tem o máximo (${MAX_CONGELAMENTOS})` : falta > 0 ? `Faltam 🦐 ${falta}` : `Comprar por 🦐 ${PRECO_CONGELAMENTO}`}
                </Text>
              </Pressable>
              {aviso && <Text className="text-center text-xs font-bold text-slate-700 dark:text-slate-200">{aviso}</Text>}
            </View>

            <Pressable
              accessibilityRole="button"
              onPress={onClose}
              className="items-center rounded-full bg-slate-100 py-2.5 active:opacity-80 dark:bg-slate-800"
            >
              <Text className="font-extrabold text-slate-700 dark:text-slate-200">Fechar</Text>
            </Pressable>
          </Pressable>
        </Animated.View>
      </Pressable>
    </Modal>
  );
}
