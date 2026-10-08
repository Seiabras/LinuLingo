import { Text, View } from 'react-native';
import { CORDAS, nomeDaCorda, palavrasParaCorda, tintasDaCorda, type Cachecol } from '@/services/cachecol';

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
 * destaque, as já conquistadas com ✓.
 */
export function CordasLista({ cachecol }: { cachecol: Cachecol }) {
  return (
    <View className="gap-1" accessibilityRole="list">
      <Text className="pb-1 text-xs text-slate-500 dark:text-slate-400">
        As cordas da capoeira, da Cinza à Branca do Mestre. Cada uma pede 1/21 das {fmt(cachecol.total)} palavras deste idioma; a Branca, todas.
      </Text>
      {CORDAS.map((_, i) => {
        const pede = palavrasParaCorda(i, cachecol.total);
        const feita = i <= cachecol.corda;
        const atual = i === cachecol.corda;
        const falta = pede - cachecol.aprendidas;
        return (
          <View
            key={i}
            accessibilityLabel={`${nomeDaCorda(i)}: ${pede} palavras${atual ? ', a sua corda agora' : feita ? ', conquistada' : `, faltam ${falta}`}`}
            className={`flex-row items-center gap-2 rounded-lg px-2 py-1.5 ${atual ? 'bg-conecta-light dark:bg-blue-950' : ''}`}
          >
            <Text className="w-5 text-right text-[11px] font-bold text-slate-400">{i + 1}</Text>
            <CordaAmostra corda={i} w={24} h={14} />
            <Text className={`flex-1 text-sm ${atual ? 'font-extrabold text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-200'}`}>{nomeDaCorda(i)}</Text>
            <Text className={`text-xs ${feita ? 'font-bold text-conquista' : 'text-slate-500 dark:text-slate-400'}`}>
              {atual ? 'agora' : feita ? '✓' : `faltam ${fmt(falta)}`}
            </Text>
            <Text className="w-14 text-right text-xs text-slate-400">{fmt(pede)}</Text>
          </View>
        );
      })}
    </View>
  );
}
