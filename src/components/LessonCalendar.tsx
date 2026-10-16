import { useEffect, useMemo, useState } from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
import Animated, { ZoomIn } from 'react-native-reanimated';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { useApp } from '@/services/app-state';
import { useIsDark } from '@/services/theme';
import { localDay } from '@/services/progress';
import { xpByMonth } from '@/database/queries';

const MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
const DIAS_SEMANA = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

/**
 * O calendário de lições, aberto ao tocar no 🔥 (pedido do dono, item 25b do PENDENTES.md, 16/10/2026):
 * mostra os dias do mês em que a pessoa estudou (qualquer XP registrado naquele dia em `XP_Log`), com
 * navegação entre meses e um resumo (dias estudados, melhor dia). Não mostra qual idioma foi
 * praticado em cada dia (o `XP_Log` não guarda o idioma, só a data e o XP — ver a dúvida em
 * `PENDENTES.md`) nem festividades/aniversários (sem data real cadastrada em lugar nenhum do app).
 */
export function LessonCalendar({ onClose, onCongelamentos }: { onClose: () => void; onCongelamentos: () => void }) {
  const { db, streak } = useApp();
  const dark = useIsDark();
  const hoje = new Date();
  const [ano, setAno] = useState(hoje.getFullYear());
  const [mes, setMes] = useState(hoje.getMonth() + 1); // 1 = janeiro
  const [dias, setDias] = useState<{ day: string; xp: number }[]>([]);
  const ehMesAtual = ano === hoje.getFullYear() && mes === hoje.getMonth() + 1;

  useEffect(() => {
    let vivo = true;
    void xpByMonth(db, ano, mes).then((r) => vivo && setDias(r));
    return () => {
      vivo = false;
    };
  }, [db, ano, mes]);

  const resumo = useMemo(() => {
    const estudados = dias.filter((d) => d.xp > 0);
    const melhor = estudados.reduce<{ day: string; xp: number } | null>((m, d) => (!m || d.xp > m.xp ? d : m), null);
    return { diasEstudados: estudados.length, melhor };
  }, [dias]);

  // o primeiro dia do mês cai num dia da semana (0 = domingo); a grade começa com células vazias até lá
  const primeiroDiaSemana = new Date(ano, mes - 1, 1).getDay();
  const celulasVazias = Array.from({ length: primeiroDiaSemana }, (_, i) => `vazia-${i}`);
  const hojeStr = localDay();

  const mudarMes = (delta: number) => {
    const d = new Date(ano, mes - 1 + delta, 1);
    setAno(d.getFullYear());
    setMes(d.getMonth() + 1);
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
            <Text className="text-center text-sm font-bold text-orange-600 dark:text-orange-400">
              🔥 Ofensiva de {streak} {streak === 1 ? 'dia' : 'dias'}
            </Text>

            <View className="flex-row items-center justify-between">
              <Pressable accessibilityRole="button" accessibilityLabel="Mês anterior" onPress={() => mudarMes(-1)} hitSlop={8} className="p-1">
                <ChevronLeft size={22} color={dark ? '#CBD5E1' : '#475569'} />
              </Pressable>
              <Text className="text-lg font-extrabold capitalize text-slate-900 dark:text-white">
                {MESES[mes - 1]} de {ano}
              </Text>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Próximo mês"
                onPress={() => !ehMesAtual && mudarMes(1)}
                disabled={ehMesAtual}
                hitSlop={8}
                className="p-1"
              >
                <ChevronRight size={22} color={ehMesAtual ? (dark ? '#334155' : '#CBD5E1') : dark ? '#CBD5E1' : '#475569'} />
              </Pressable>
            </View>

            <View className="flex-row">
              {DIAS_SEMANA.map((d, i) => (
                <Text key={`${d}-${i}`} className="flex-1 text-center text-xs font-bold text-slate-500 dark:text-slate-400">
                  {d}
                </Text>
              ))}
            </View>
            <View className="flex-row flex-wrap">
              {celulasVazias.map((k) => (
                <View key={k} style={{ width: '14.28%' }} className="aspect-square" />
              ))}
              {dias.map((d) => {
                const estudou = d.xp > 0;
                const ehHoje = d.day === hojeStr;
                const numero = Number(d.day.slice(8, 10));
                return (
                  <View key={d.day} style={{ width: '14.28%' }} className="aspect-square items-center justify-center p-0.5">
                    <View
                      className={`h-full w-full items-center justify-center rounded-full ${estudou ? 'bg-fogo-light dark:bg-orange-950' : ''} ${ehHoje ? 'border-2 border-conecta' : ''}`}
                    >
                      <Text className={`text-xs ${estudou ? 'font-extrabold text-fogo-dark dark:text-orange-400' : 'text-slate-400 dark:text-slate-600'}`}>
                        {estudou ? '🔥' : numero}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>

            <View className="gap-1 rounded-2xl bg-slate-50 p-3 dark:bg-slate-800/60">
              <Text className="text-sm font-extrabold text-slate-800 dark:text-slate-100">Resumo do mês</Text>
              <Text className="text-sm text-slate-600 dark:text-slate-300">
                {resumo.diasEstudados} {resumo.diasEstudados === 1 ? 'dia estudado' : 'dias estudados'}
                {resumo.melhor ? ` · melhor dia: ${resumo.melhor.xp} XP em ${resumo.melhor.day.slice(8, 10)}/${mes}` : ''}
              </Text>
            </View>

            <Pressable
              accessibilityRole="button"
              onPress={onCongelamentos}
              className="items-center rounded-full bg-sky-50 py-2.5 active:opacity-80 dark:bg-sky-950/40"
            >
              <Text className="font-extrabold text-sky-700 dark:text-sky-300">🧊 Ver congelamentos</Text>
            </Pressable>
            <Pressable accessibilityRole="button" onPress={onClose} className="items-center rounded-full bg-slate-100 py-2.5 active:opacity-80 dark:bg-slate-800">
              <Text className="font-extrabold text-slate-700 dark:text-slate-200">Fechar</Text>
            </Pressable>
          </Pressable>
        </Animated.View>
      </Pressable>
    </Modal>
  );
}
