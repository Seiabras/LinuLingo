import { Text, View } from 'react-native';
import { CORDAS, nomeDaCorda, palavrasParaCorda, tintasDaCorda } from '@/services/cachecol';

/** O retalho de tecido de uma corda: uma cor, ou as duas lado a lado. */
export function CordaAmostra({ corda, w = 28, h = 16, apagada = false }: { corda: number; w?: number; h?: number; apagada?: boolean }) {
  const { base, listra, duas } = tintasDaCorda(corda);
  return (
    <View style={{ width: w, height: h, flexDirection: 'row', borderRadius: 3, borderWidth: 1, borderColor: base[2], overflow: 'hidden', opacity: apagada ? 0.35 : 1 }}>
      <View style={{ flex: 1, backgroundColor: base[1] }} />
      {duas && <View style={{ flex: 1, backgroundColor: listra[1] }} />}
    </View>
  );
}

const fmt = (n: number) => n.toLocaleString('pt-BR');

/**
 * As 22 cordas do idioma estudado, com quantas palavras cada uma pede e quantas faltam: a de agora em
 * destaque, as já conquistadas com ✓. `corda` é null antes da primeira lição (nenhuma conquistada).
 */
export function CordasLista({ corda, aprendidas, total }: { corda: number | null; aprendidas: number; total: number }) {
  const atualIdx = corda ?? -1;
  return (
    <View className="gap-1" accessibilityRole="list">
      <Text className="pb-1 text-xs text-slate-600 dark:text-slate-400">
        As cordas da capoeira, da Cinza à Branca do Mestre. A Cinza vem com a primeira lição; depois, cada uma pede 1/21 das {fmt(total)} palavras deste idioma, e a Branca, todas.
      </Text>
      {CORDAS.map((_, i) => {
        const pede = palavrasParaCorda(i, total);
        const feita = i <= atualIdx;
        const atual = i === atualIdx;
        const falta = pede - aprendidas;
        const pedido = i === 0 ? 'a primeira lição' : `faltam ${fmt(falta)}`;
        return (
          <View
            key={i}
            accessibilityLabel={`${nomeDaCorda(i)}: ${i === 0 ? 'vem com a primeira lição' : `${pede} palavras`}${atual ? ', a sua corda agora' : feita ? ', conquistada' : `, ${pedido}`}`}
            className={`flex-row items-center gap-2 rounded-lg px-2 py-1.5 ${atual ? 'bg-conecta-light dark:bg-blue-950' : ''}`}
          >
            <Text className="w-5 text-right text-[11px] font-bold text-slate-500 dark:text-slate-400">{i + 1}</Text>
            <CordaAmostra corda={i} w={24} h={14} />
            <Text className={`flex-1 text-sm ${atual ? 'font-extrabold text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-200'}`}>{nomeDaCorda(i)}</Text>
            <Text className={`text-xs ${feita ? 'font-bold text-conquista-dark dark:text-green-400' : 'text-slate-600 dark:text-slate-400'}`}>
              {atual ? 'agora' : feita ? '✓' : pedido}
            </Text>
            <Text className="w-14 text-right text-xs text-slate-500 dark:text-slate-400">{i === 0 ? '1ª lição' : fmt(pede)}</Text>
          </View>
        );
      })}
    </View>
  );
}
