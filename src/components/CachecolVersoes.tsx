import { Pressable, Text, View } from 'react-native';
import * as haptics from '@/services/haptics';
import { useApp } from '@/services/app-state';
import { nomeDaCorda, setCordaEscolhida, type Cachecol } from '@/services/cachecol';
import { CordaAmostra } from './CordaAmostra';

/**
 * Trocar o cachecol por uma versão antiga já alcançada, só por estética (pedido do dono,
 * 14/10/2026): o progresso de verdade continua subindo sozinho por baixo, só a cor mostrada muda.
 * Exclusivo por idioma — mostra as cordas do idioma estudado agora, de Cinza até a conquistada.
 * Usado tanto na Loja do Linu quanto na aba do cachecol dentro do Cofre de Vocabulário.
 */
export function CachecolVersoes({ conquistado, escolhida }: { conquistado: Cachecol | null; escolhida: number | null }) {
  const { db, pack } = useApp();
  if (!conquistado || conquistado.corda === 0) return null;
  const mostrando = escolhida ?? conquistado.corda;
  const escolher = (corda: number) => {
    haptics.tapLight();
    setCordaEscolhida(db, pack.code, corda === conquistado.corda ? null : corda);
  };
  return (
    <View className="gap-1.5">
      <Text className="text-xs font-bold text-slate-600 dark:text-slate-400">🧣 Usar uma corda antiga (só por estética; o progresso continua subindo)</Text>
      <View className="flex-row flex-wrap gap-1.5" accessibilityRole="radiogroup">
        {Array.from({ length: conquistado.corda + 1 }, (_, i) => i).map((i) => (
          <Pressable
            key={i}
            accessibilityRole="radio"
            accessibilityState={{ selected: i === mostrando }}
            accessibilityLabel={`Usar a corda ${nomeDaCorda(i)}`}
            onPress={() => escolher(i)}
            className={`rounded-lg border-2 p-1 ${i === mostrando ? 'border-conecta dark:border-blue-400' : 'border-transparent'}`}
          >
            <CordaAmostra corda={i} w={30} h={18} />
          </Pressable>
        ))}
      </View>
    </View>
  );
}
