import { useCallback, useState } from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
import Animated, { ZoomIn } from 'react-native-reanimated';
import Svg, { Circle, Text as SvgText } from 'react-native-svg';
import {
  BookOpen,
  ChevronDown,
  ChevronRight,
  Crown,
  Flame,
  Gift,
  Globe,
  GraduationCap,
  Languages,
  Map,
  ScrollText,
  Star,
  Sticker,
  Trophy,
} from 'lucide-react-native';
import { useFocusEffect } from 'expo-router';
import { Card } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { CATEGORIAS_CONQUISTA, type EstadoConquista } from '@/data/conquistas';
import { ROUPAS_LINU } from '@/data/roupas-linu';
import { useApp } from '@/services/app-state';
import { conquistasAgora } from '@/services/conquistas';
import * as haptics from '@/services/haptics';
import { useIsDark } from '@/services/theme';

/** o dourado dos passaportes */
const OURO = '#E8C35A';

const ICONES = {
  flame: Flame,
  star: Star,
  book: BookOpen,
  globe: Globe,
  languages: Languages,
  graduation: GraduationCap,
  scroll: ScrollText,
  sticker: Sticker,
  trophy: Trophy,
  crown: Crown,
  gift: Gift,
  map: Map,
};

/** Um carimbo de passaporte: dois anéis (um tracejado), o nome em volta e o ícone no meio, meio torto como carimbo de verdade. */
function Carimbo({ e, tamanho = 84 }: { e: EstadoConquista; tamanho?: number }) {
  const c = e.conquista;
  const cor = e.feita ? (CATEGORIAS_CONQUISTA.find((x) => x.id === c.categoria)?.cor ?? '#334155') : '#94A3B8';
  const Icone = ICONES[c.icone];
  const giro = ((c.id.length * 37) % 24) - 12;
  const r = tamanho / 2;
  return (
    <View style={{ width: tamanho, height: tamanho, transform: [{ rotate: `${giro}deg` }], opacity: e.feita ? 1 : 0.45 }}>
      <Svg width={tamanho} height={tamanho} style={{ position: 'absolute' }}>
        <Circle cx={r} cy={r} r={r - 2} fill="none" stroke={cor} strokeWidth={2.5} />
        <Circle cx={r} cy={r} r={r - 7} fill="none" stroke={cor} strokeWidth={1.2} strokeDasharray="3 2" />
        <SvgText x={r} y={r - r * 0.48} fill={cor} fontSize={7.5} fontWeight="bold" textAnchor="middle" letterSpacing={1}>
          {(CATEGORIAS_CONQUISTA.find((x) => x.id === c.categoria)?.nome ?? '').toUpperCase()}
        </SvgText>
      </Svg>
      <View style={{ position: 'absolute', left: 0, right: 0, top: r - 12, alignItems: 'center' }}>
        <Icone size={24} color={cor} />
      </View>
      {e.feita && (
        <View style={{ position: 'absolute', left: 0, right: 0, bottom: r * 0.3, alignItems: 'center' }}>
          <Text style={{ fontSize: 8, fontWeight: '800', color: cor }}>★ FEITO ★</Text>
        </View>
      )}
    </View>
  );
}

/**
 * Passaporte de conquistas (pedido do dono, 11/10/2026), no perfil: as conquistas do app inteiro
 * como carimbos num passaporte, por categoria. A capa é o botão que abre e fecha (começa fechado), e
 * tocar num carimbo abre os detalhes num pop-up: o que falta e o prêmio.
 */
export function PassaporteCard() {
  const { db, user } = useApp();
  const dark = useIsDark();
  const [estados, setEstados] = useState<EstadoConquista[]>([]);
  const [aberto, setAberto] = useState(false);
  const [escolhidaId, setEscolhidaId] = useState<string | null>(null);

  const carregar = useCallback(() => {
    if (!db) return;
    void conquistasAgora(db, user).then(setEstados);
  }, [db, user]);
  useFocusEffect(carregar);

  const feitas = estados.filter((e) => e.feita).length;
  const escolhida = estados.find((e) => e.conquista.id === escolhidaId);
  const premio = escolhida?.conquista.premio ? ROUPAS_LINU.find((o) => o.id === escolhida.conquista.premio) : undefined;
  const corDaEscolhida = escolhida ? (CATEGORIAS_CONQUISTA.find((x) => x.id === escolhida.conquista.categoria)?.cor ?? '#334155') : '#334155';
  const Seta = aberto ? ChevronDown : ChevronRight;

  return (
    <View className="gap-3">
      {/* a capa do passaporte: azul-marinho com o dourado dos passaportes, cantos arredondados */}
      <Pressable
        accessibilityRole="button"
        accessibilityState={{ expanded: aberto }}
        accessibilityLabel={`Passaporte de conquistas: ${feitas} de ${estados.length}. ${aberto ? 'Fechar' : 'Abrir'}`}
        onPress={() => {
          haptics.tapLight();
          setAberto((v) => !v);
        }}
        style={{
          borderRadius: 24,
          backgroundColor: '#1E2A4A',
          padding: 6,
          shadowColor: '#0B1224',
          shadowOpacity: dark ? 0.5 : 0.22,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: 6 },
          elevation: 5,
        }}
      >
        <View
          className="flex-row items-center gap-3 px-3 py-3"
          style={{ borderRadius: 19, borderWidth: 1.5, borderColor: 'rgba(232, 195, 90, 0.55)', borderStyle: 'dashed' }}
        >
          <View
            style={{
              width: 58,
              height: 58,
              borderRadius: 29,
              borderWidth: 2,
              borderColor: '#E8C35A',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#26355C',
            }}
          >
            <Linu mood="feliz" size={44} animate={false} />
          </View>
          <View className="flex-1">
            <Text className="text-xs font-extrabold tracking-[3px]" style={{ color: OURO }}>
              PASSAPORTE
            </Text>
            <Text className="text-lg font-extrabold text-white">de conquistas</Text>
          </View>
          <View className="items-center rounded-2xl border px-3 py-1" style={{ borderColor: OURO }}>
            <Text className="text-lg font-extrabold" style={{ color: OURO }}>
              {feitas}
            </Text>
            <Text className="text-[10px] font-bold" style={{ color: OURO }}>
              de {estados.length}
            </Text>
          </View>
          <Seta size={22} color={OURO} />
        </View>
      </Pressable>

      {aberto && (
        <Card className="gap-4">
          {CATEGORIAS_CONQUISTA.map((cat) => {
            const daqui = estados.filter((e) => e.conquista.categoria === cat.id);
            if (daqui.length === 0) return null;
            return (
              <View key={cat.id} className="gap-2">
                <Text className="text-xs font-extrabold uppercase tracking-wide" style={{ color: cat.cor }}>
                  {cat.nome} · {daqui.filter((e) => e.feita).length}/{daqui.length}
                </Text>
                <View className="flex-row flex-wrap gap-2">
                  {daqui.map((e) => (
                    <Pressable
                      key={e.conquista.id}
                      accessibilityRole="button"
                      accessibilityLabel={`${e.conquista.nome}: ${e.feita ? 'feita' : `${e.progresso} de ${e.conquista.meta}`}`}
                      onPress={() => {
                        haptics.tapLight();
                        setEscolhidaId(e.conquista.id);
                      }}
                      className="items-center gap-1"
                    >
                      <Carimbo e={e} tamanho={76} />
                      <Text numberOfLines={2} className="w-20 text-center text-[11px] font-bold text-slate-700 dark:text-slate-200">
                        {e.conquista.nome}
                      </Text>
                      {!e.feita && (
                        <View className="h-1.5 w-16 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                          <View style={{ width: `${(e.progresso / e.conquista.meta) * 100}%`, height: '100%', backgroundColor: cat.cor }} />
                        </View>
                      )}
                    </Pressable>
                  ))}
                </View>
              </View>
            );
          })}
        </Card>
      )}

      {/* os detalhes de um carimbo, num pop-up (montado só quando aberto: no web, o Modal com
          animação não fechava) */}
      {escolhida && (
        <Modal transparent visible animationType="none" onRequestClose={() => setEscolhidaId(null)}>
          <Pressable
            accessibilityLabel="Fechar"
            onPress={() => setEscolhidaId(null)}
            style={{ flex: 1, backgroundColor: 'rgba(15, 23, 42, 0.55)', alignItems: 'center', justifyContent: 'center', padding: 24 }}
          >
            <Animated.View entering={ZoomIn.duration(220)} style={{ width: '100%', maxWidth: 380 }}>
              <Pressable onPress={() => {}} className="items-center gap-3 rounded-3xl bg-white p-5 dark:bg-slate-900">
                <Carimbo e={escolhida} tamanho={110} />
                <Text className="text-xs font-extrabold uppercase tracking-widest" style={{ color: corDaEscolhida }}>
                  {CATEGORIAS_CONQUISTA.find((x) => x.id === escolhida.conquista.categoria)?.nome}
                </Text>
                <Text className="text-center text-xl font-extrabold text-slate-900 dark:text-white">{escolhida.conquista.nome}</Text>
                <Text className="text-center text-sm leading-5 text-slate-700 dark:text-slate-300">{escolhida.conquista.descricao}</Text>
                {escolhida.feita ? (
                  <Text className="text-sm font-extrabold text-emerald-700 dark:text-emerald-400">✓ Conquista feita!</Text>
                ) : (
                  <View className="w-full items-center gap-1">
                    <View className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                      <View style={{ width: `${(escolhida.progresso / escolhida.conquista.meta) * 100}%`, height: '100%', backgroundColor: corDaEscolhida }} />
                    </View>
                    <Text className="text-xs font-bold text-slate-600 dark:text-slate-300">
                      {escolhida.progresso} de {escolhida.conquista.meta}
                    </Text>
                  </View>
                )}
                {premio && (
                  <View className="w-full rounded-2xl bg-amber-50 p-3 dark:bg-amber-950/40">
                    <Text className="text-center text-sm text-slate-800 dark:text-slate-100">
                      Prêmio: {premio.name.toLowerCase()} para o Linu{escolhida.feita ? ' (já está nos presentes da Loja do Linu)' : ''}.
                    </Text>
                  </View>
                )}
                <Pressable
                  accessibilityRole="button"
                  onPress={() => setEscolhidaId(null)}
                  className="mt-1 rounded-full px-6 py-2.5 active:opacity-80"
                  style={{ backgroundColor: '#1E2A4A' }}
                >
                  <Text className="font-extrabold" style={{ color: OURO }}>
                    Fechar
                  </Text>
                </Pressable>
              </Pressable>
            </Animated.View>
          </Pressable>
        </Modal>
      )}
    </View>
  );
}
