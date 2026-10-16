import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

/**
 * Peças de tela comuns aos jogos de cartas colecionáveis: a fileira de opções (baralho, nível) e o
 * tutorial curto, em passos, que abre na primeira vez e dá para ver de novo.
 */

export function Escolhas<T extends string>({ titulo, opcoes, valor, onEscolher }: { titulo: string; opcoes: { id: T; nome: string }[]; valor: T; onEscolher: (v: T) => void }) {
  return (
    <View className="flex-row flex-wrap items-center gap-1.5">
      <Text className="text-xs font-bold text-slate-600 dark:text-slate-400">{titulo}</Text>
      {opcoes.map((o) => (
        <Pressable
          key={o.id}
          accessibilityRole="radio"
          accessibilityState={{ selected: valor === o.id }}
          aria-checked={valor === o.id}
          onPress={() => onEscolher(o.id)}
          className={`rounded-full px-3 py-1.5 ${valor === o.id ? 'bg-slate-700 dark:bg-slate-200' : 'bg-slate-100 dark:bg-slate-800'}`}
        >
          <Text className={`text-xs font-bold ${valor === o.id ? 'text-white dark:text-slate-900' : 'text-slate-700 dark:text-slate-200'}`}>{o.nome}</Text>
        </Pressable>
      ))}
    </View>
  );
}

/** Um botão de ação do jogo (atacar, passar, fim do turno…). */
export function BotaoTCG({ texto, onPress, cor = 'neutro', desligado = false }: { texto: string; onPress: () => void; cor?: 'neutro' | 'verde' | 'laranja' | 'azul'; desligado?: boolean }) {
  const fundo = { neutro: 'bg-slate-100 dark:bg-slate-800', verde: 'bg-emerald-600', laranja: 'bg-orange-500', azul: 'bg-blue-600' }[cor];
  const tinta = cor === 'neutro' ? 'text-slate-800 dark:text-slate-100' : 'text-white';
  return (
    <Pressable accessibilityRole="button" disabled={desligado} onPress={onPress} className={`rounded-full px-4 py-2 ${fundo} ${desligado ? 'opacity-40' : 'active:opacity-80'}`}>
      <Text className={`text-sm font-extrabold ${tinta}`}>{texto}</Text>
    </Pressable>
  );
}

// o tutorial fecha uma vez por sessão do app, por jogo (não precisa sobreviver a fechar o app)
const TUTORIAL_VISTO = new Set<string>();

/** O tutorial curto, em passos: abre na primeira partida de cada jogo e dá para ver de novo. */
export function TutorialTCG({ jogo, passos }: { jogo: string; passos: { titulo: string; texto: string }[] }) {
  const [aberto, setAberto] = useState(!TUTORIAL_VISTO.has(jogo));
  const [i, setI] = useState(0);
  const fechar = () => {
    TUTORIAL_VISTO.add(jogo);
    setAberto(false);
    setI(0);
  };
  if (!aberto)
    return (
      <Pressable accessibilityRole="button" onPress={() => setAberto(true)} className="self-center rounded-full bg-sky-50 px-3 py-1.5 dark:bg-sky-950/60">
        <Text className="text-xs font-bold text-sky-800 dark:text-sky-200">Como jogar (tutorial)</Text>
      </Pressable>
    );
  const p = passos[i]!;
  return (
    <View className="gap-2 rounded-2xl border-2 border-sky-300 bg-sky-50 p-3 dark:border-sky-700 dark:bg-sky-950/60">
      <Text className="text-xs font-bold text-sky-700 dark:text-sky-300">
        Tutorial · {i + 1} de {passos.length}
      </Text>
      <Text className="text-base font-extrabold text-slate-900 dark:text-white">{p.titulo}</Text>
      <Text className="text-sm leading-5 text-slate-700 dark:text-slate-200">{p.texto}</Text>
      <View className="flex-row flex-wrap justify-end gap-2">
        <BotaoTCG texto="Pular" onPress={fechar} />
        {i > 0 && <BotaoTCG texto="Voltar" onPress={() => setI(i - 1)} />}
        <BotaoTCG texto={i + 1 < passos.length ? 'Próximo' : 'Jogar'} cor="azul" onPress={() => (i + 1 < passos.length ? setI(i + 1) : fechar())} />
      </View>
    </View>
  );
}
