import { Pressable, Text, View } from 'react-native';
import { router } from 'expo-router';
import { ChevronDown, UserRound } from 'lucide-react-native';
import { useApp } from '@/services/app-state';
import { useIsDark } from '@/services/theme';

/** Barra de status: idioma e nível, ofensiva, XP e atalho do perfil. */
export function StatusHeader({ cefr }: { cefr: string }) {
  const { pack, user, streak } = useApp();
  const dark = useIsDark();
  return (
    <View className="flex-row items-center justify-between py-3">
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`Idioma: ${pack.name}, nível ${cefr}. Trocar idioma`}
        onPress={() => router.push('/perfil')}
        className="mr-2 shrink flex-row items-center gap-1.5 rounded-full bg-white px-3 py-1.5 active:opacity-70 dark:bg-slate-900"
      >
        <Text className="text-lg">{pack.flag}</Text>
        {/* nomes longos («Português de Portugal») encolhem com reticências em vez de empurrar o perfil para fora */}
        <Text numberOfLines={1} className="shrink font-bold text-slate-800 dark:text-slate-100">
          {pack.name}
        </Text>
        <Text className="font-bold text-conecta">({cefr})</Text>
        <ChevronDown size={16} color={dark ? '#94A3B8' : '#64748B'} />
      </Pressable>

      <View className="shrink-0 flex-row items-center gap-3">
        <View accessibilityLabel={`Ofensiva de ${streak} dias`} className="flex-row items-center gap-1">
          <Text className={`text-lg ${streak > 0 ? '' : 'opacity-40'}`}>🔥</Text>
          <Text className="font-extrabold text-fogo">{streak}</Text>
        </View>
        <View accessibilityLabel={`${user?.total_xp ?? 0} pontos de experiência`} className="flex-row items-center gap-1">
          <Text className="text-lg">⚡</Text>
          <Text className="font-extrabold text-amber-500">{user?.total_xp ?? 0}</Text>
        </View>
        <Pressable accessibilityLabel="Perfil" onPress={() => router.push('/perfil')} className="rounded-full bg-conecta-light p-1.5 dark:bg-blue-950">
          <UserRound size={18} color={dark ? '#93C5FD' : '#2563EB'} />
        </Pressable>
      </View>
    </View>
  );
}
