import type { ReactNode } from 'react';
import { Text, TextInput, View } from 'react-native';
import { Card } from '@/components/ui';

/**
 * As peças das calculadoras das áreas (“Na prática” do Marketing e da Astronomia, os prazos do
 * Direito): um campo de número que aceita o jeito brasileiro de escrever (1.234,56) e a caixa do
 * resultado.
 */

/** Lê “1.234,56”, “1234.56” ou “1234,56” como número; vazio ou inválido dá NaN. */
export function lerNumero(texto: string): number {
  const t = texto.trim().replace(/\s/g, '');
  if (!t) return NaN;
  // com vírgula, os pontos são de milhar; sem vírgula, um ponto só com 3 dígitos depois também é milhar
  const limpo = t.includes(',') ? t.replace(/\./g, '').replace(',', '.') : /^\d{1,3}(\.\d{3})+$/.test(t) ? t.replace(/\./g, '') : t;
  const n = Number(limpo);
  return Number.isFinite(n) ? n : NaN;
}

/** Escreve um número do jeito brasileiro, com até `casas` casas depois da vírgula. */
export function fmt(n: number, casas = 2): string {
  if (!Number.isFinite(n)) return '—';
  return n.toLocaleString('pt-BR', { maximumFractionDigits: casas, minimumFractionDigits: 0 });
}

export const reais = (n: number) => (Number.isFinite(n) ? `R$ ${n.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : '—');

export function Campo({ rotulo, valor, aoMudar, sufixo, dica }: { rotulo: string; valor: string; aoMudar: (v: string) => void; sufixo?: string; dica?: string }) {
  return (
    <View className="gap-1">
      <Text className="text-xs font-bold uppercase tracking-wide text-slate-600 dark:text-slate-400">{rotulo}</Text>
      <View className="flex-row items-center gap-2">
        <TextInput
          value={valor}
          onChangeText={aoMudar}
          keyboardType="decimal-pad"
          accessibilityLabel={rotulo}
          placeholderTextColor="#94A3B8"
          placeholder={dica}
          className="flex-1 rounded-xl border-2 border-slate-200 bg-white px-3 py-2 text-base text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
        />
        {sufixo ? <Text className="text-sm font-bold text-slate-600 dark:text-slate-400">{sufixo}</Text> : null}
      </View>
    </View>
  );
}

/** A caixa do resultado de uma conta: o número grande e, embaixo, a conta feita por extenso. */
export function Resultado({ titulo, valor, conta, fundo }: { titulo: string; valor: string; conta?: ReactNode; fundo: string }) {
  return (
    <View accessible accessibilityLiveRegion="polite" className={`gap-0.5 rounded-xl p-3 ${fundo}`}>
      <Text className="text-xs font-bold uppercase tracking-wide text-slate-600 dark:text-slate-300">{titulo}</Text>
      <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">{valor}</Text>
      {conta ? <Text className="text-xs text-slate-700 dark:text-slate-300">{conta}</Text> : null}
    </View>
  );
}

/** Um cartão de calculadora: o nome, para que serve, os campos, o resultado e o que aprender com ele. */
export function CartaoConta({ emoji, titulo, sobre, children, licao }: { emoji: string; titulo: string; sobre: string; children: ReactNode; licao?: string }) {
  return (
    <Card className="gap-3">
      <View className="flex-row items-center gap-2">
        <Text className="text-2xl">{emoji}</Text>
        <Text className="flex-1 text-lg font-extrabold text-slate-900 dark:text-white">{titulo}</Text>
      </View>
      <Text className="text-sm text-slate-700 dark:text-slate-300">{sobre}</Text>
      {children}
      {licao ? <Text className="text-xs italic text-slate-600 dark:text-slate-400">{licao}</Text> : null}
    </Card>
  );
}
