import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Card } from '@/components/ui';
import { LinuAmigo } from '@/components/LinuAmigo';
import { ARVORE, caminhoAte, parenteComum, type NoArvore } from '@/data/biologia/arvore';
import * as haptics from '@/services/haptics';

interface Ctx {
  sel: string[];
  caminhos: Set<string>[];
  comum: NoArvore | null;
  tocar: (amigo: string) => void;
}

function No({ no, nivel, ctx }: { no: NoArvore; nivel: number; ctx: Ctx }) {
  const { sel, caminhos, comum, tocar } = ctx;
  const aceso = caminhos.some((c) => c.has(no.id));
  const ehComum = comum?.id === no.id;
  if (no.amigo) {
    const marcado = sel.includes(no.amigo);
    return (
      <Pressable
        accessibilityRole="button"
        accessibilityState={{ selected: marcado }}
        onPress={() => tocar(no.amigo!)}
        className={`flex-row items-center gap-2 rounded-xl border-2 px-2 py-0.5 ${marcado ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950' : 'border-transparent'}`}
      >
        <LinuAmigo id={no.amigo} size={30} />
        <Text className="text-sm font-semibold text-slate-800 dark:text-slate-100">{no.nome}</Text>
      </Pressable>
    );
  }
  return (
    <View className={nivel ? 'ml-3 border-l-2 pl-2' : ''} style={nivel ? { borderColor: aceso ? '#10b981' : '#cbd5e1' } : undefined}>
      <Text
        className={`mt-1 text-xs font-bold ${ehComum ? 'rounded bg-amber-200 px-1 text-amber-900' : aceso ? 'text-emerald-700 dark:text-emerald-400' : 'text-slate-600 dark:text-slate-400'}`}
      >
        {no.nome}
      </Text>
      {(no.filhos ?? []).map((f) => (
        <No key={f.id} no={f} nivel={nivel + 1} ctx={ctx} />
      ))}
    </View>
  );
}

/**
 * A árvore da vida dos amigos do Linu: os grupos encaixados uns nos outros. Tocando em dois bichos, a
 * árvore acende o caminho de cada um e mostra o parente comum mais próximo.
 */
export function ArvoreDaVida() {
  const [sel, setSel] = useState<string[]>([]);
  const caminhos = sel.map((s) => new Set((caminhoAte(s) ?? []).map((n) => n.id)));
  const comum = sel.length === 2 ? parenteComum(sel[0]!, sel[1]!) : null;

  const tocar = (amigo: string) => {
    haptics.tapLight();
    setSel((s) => (s.includes(amigo) ? s.filter((x) => x !== amigo) : [...s, amigo].slice(-2)));
  };

  return (
    <Card className="gap-2">
      <Text className="text-sm text-slate-700 dark:text-slate-300">Toque em dois bichos para ver o parente comum mais próximo deles.</Text>
      {comum && (
        <View className="rounded-xl bg-amber-50 p-2 dark:bg-amber-950/50">
          <Text className="text-sm font-bold text-amber-900 dark:text-amber-100">O grupo mais próximo que os dois têm em comum: {comum.nome}</Text>
          {comum.sobre && <Text className="text-xs text-amber-900 dark:text-amber-100">{comum.sobre}</Text>}
        </View>
      )}
      <No no={ARVORE} nivel={0} ctx={{ sel, caminhos, comum, tocar }} />
      <Text className="text-[10px] text-slate-500">Pinguins e albatrozes como grupos-irmãos: Jarvis et al. 2014, Science 346.</Text>
    </Card>
  );
}
