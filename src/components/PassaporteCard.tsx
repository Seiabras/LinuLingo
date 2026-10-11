import { useCallback, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Circle, Text as SvgText } from 'react-native-svg';
import { BookOpen, Crown, Flame, Gift, Globe, GraduationCap, Languages, Map, ScrollText, Star, Sticker, Trophy } from 'lucide-react-native';
import { useFocusEffect } from 'expo-router';
import { Card } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { CATEGORIAS_CONQUISTA, type EstadoConquista } from '@/data/conquistas';
import { ROUPAS_LINU } from '@/data/roupas-linu';
import { useApp } from '@/services/app-state';
import { conquistasAgora } from '@/services/conquistas';
import * as haptics from '@/services/haptics';

const ICONES = { flame: Flame, star: Star, book: BookOpen, globe: Globe, languages: Languages, graduation: GraduationCap, scroll: ScrollText, sticker: Sticker, trophy: Trophy, crown: Crown, gift: Gift, map: Map };

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
 * como carimbos num passaporte, por categoria. Toque num carimbo para ver o que falta e o prêmio.
 */
export function PassaporteCard() {
  const { db, user } = useApp();
  const [estados, setEstados] = useState<EstadoConquista[]>([]);
  const [aberto, setAberto] = useState<string | null>(null);

  const carregar = useCallback(() => {
    if (!db) return;
    void conquistasAgora(db, user).then(setEstados);
  }, [db, user]);
  useFocusEffect(carregar);

  const feitas = estados.filter((e) => e.feita).length;
  const escolhida = estados.find((e) => e.conquista.id === aberto);
  const premio = escolhida?.conquista.premio ? ROUPAS_LINU.find((o) => o.id === escolhida.conquista.premio) : undefined;

  return (
    <Card className="gap-3 overflow-hidden p-0">
      {/* a capa do passaporte */}
      <View className="flex-row items-center gap-3 bg-[#1E2A4A] px-4 py-3">
        <Linu mood="feliz" size={48} animate={false} />
        <View className="flex-1">
          <Text className="text-xs font-extrabold tracking-[3px] text-[#E8C35A]">PASSAPORTE</Text>
          <Text className="text-lg font-extrabold text-white">de conquistas</Text>
        </View>
        <View className="items-center rounded-xl border border-[#E8C35A] px-3 py-1">
          <Text className="text-lg font-extrabold text-[#E8C35A]">{feitas}</Text>
          <Text className="text-[10px] font-bold text-[#E8C35A]">de {estados.length}</Text>
        </View>
      </View>

      <View className="gap-4 px-3 pb-3">
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
                      setAberto(aberto === e.conquista.id ? null : e.conquista.id);
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

        {escolhida && (
          <View className="gap-1 rounded-2xl bg-amber-50 p-3 dark:bg-amber-950/40">
            <Text className="text-base font-extrabold text-slate-900 dark:text-white">{escolhida.conquista.nome}</Text>
            <Text className="text-sm text-slate-700 dark:text-slate-300">{escolhida.conquista.descricao}</Text>
            <Text className="text-sm font-bold text-slate-800 dark:text-slate-100">
              {escolhida.feita ? '✓ Conquista feita!' : `Progresso: ${escolhida.progresso} de ${escolhida.conquista.meta}`}
            </Text>
            {premio && (
              <Text className="text-sm text-slate-700 dark:text-slate-300">
                Prêmio: {premio.name.toLowerCase()} para o Linu{escolhida.feita ? ' (já está nos presentes da Loja do Linu)' : ''}.
              </Text>
            )}
          </View>
        )}
      </View>
    </Card>
  );
}
