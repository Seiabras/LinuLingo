import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { Card, Chip } from '@/components/ui';
import { CODIGOS, CODIGOS_INTRO, GRUPOS_CODIGO, pontosBraille, type Codigo, type CodigoGrupo } from '@/data/codigos';

const GRUPOS = Object.keys(GRUPOS_CODIGO) as CodigoGrupo[];

/**
 * Secretas e cifras → Códigos: uma caixa só para escrever uma palavra, e cada código mostra como ela
 * fica nele, com a história, um exemplo e a tabela (aberta ao toque).
 */
export function Codigos() {
  const [texto, setTexto] = useState('Linu');
  return (
    <View className="gap-3">
      <Card className="gap-2">
        <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">{CODIGOS_INTRO}</Text>
        <TextInput
          value={texto}
          onChangeText={setTexto}
          maxLength={40}
          autoCapitalize="none"
          autoCorrect={false}
          accessibilityLabel="Palavra para codificar"
          placeholder="Escreva uma palavra…"
          placeholderTextColor="#94A3B8"
          className="rounded-xl border-2 border-slate-200 bg-white px-3 py-2.5 text-base text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
        />
      </Card>
      {GRUPOS.map((g) => (
        <View key={g} className="gap-3">
          <Text className="mt-2 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">{GRUPOS_CODIGO[g]}</Text>
          {CODIGOS.filter((c) => c.grupo === g).map((c) => (
            <CodigoCard key={c.id} c={c} texto={texto} />
          ))}
        </View>
      ))}
    </View>
  );
}

function CodigoCard({ c, texto }: { c: Codigo; texto: string }) {
  const [tabela, setTabela] = useState(false);
  const saida = texto.trim() ? c.codificar(texto) : '';
  const mono = c.mono ? 'font-mono' : '';
  return (
    <Card className="gap-2">
      <Text className="text-base font-extrabold text-slate-900 dark:text-white">{c.nome}</Text>
      <View className="flex-row flex-wrap">
        <Chip label={c.origem} tone="amber" />
      </View>
      <Text className="text-sm leading-5 text-slate-600 dark:text-slate-400">{c.texto}</Text>

      <View className="gap-0.5 rounded-xl bg-conecta-light px-3 py-2 dark:bg-blue-950" accessibilityLiveRegion="polite">
        <Text className="text-xs font-bold text-slate-500 dark:text-slate-400">“{texto.trim() || '…'}” fica:</Text>
        {c.braille && saida ? (
          <BrailleTexto texto={saida} />
        ) : (
          <Text selectable className={`text-base font-bold text-slate-900 dark:text-white ${mono}`}>
            {saida || (texto.trim() ? '(nenhuma letra que este código tenha)' : 'escreva uma palavra acima')}
          </Text>
        )}
      </View>

      <View className="rounded-xl bg-amber-50 px-3 py-2 dark:bg-amber-950/40">
        <Text className="text-xs text-slate-500 dark:text-slate-400">Exemplo: {c.exemplo[0]}</Text>
        {c.braille ? <BrailleTexto texto={c.exemplo[1]} /> : <Text selectable className={`font-bold text-slate-900 dark:text-white ${mono}`}>{c.exemplo[1]}</Text>}
        <Text className="text-sm text-slate-600 dark:text-slate-400">{c.exemplo[2]}</Text>
      </View>

      {c.tabela && (
        <>
          <Pressable
            accessibilityRole="button"
            accessibilityState={{ expanded: tabela }}
            onPress={() => setTabela((v) => !v)}
            className="self-start rounded-lg px-1 py-1 active:opacity-70"
          >
            <Text className="text-sm font-bold text-conecta dark:text-blue-400">{tabela ? '▾ Esconder a tabela' : '▸ Ver a tabela'}</Text>
          </Pressable>
          {tabela && (
            <View className="flex-row flex-wrap gap-x-4 gap-y-1">
              {c.tabela.map(([k, v]) =>
                c.braille ? (
                  <View key={k} className="flex-row items-center gap-1.5">
                    <Text className="text-sm font-bold text-slate-800 dark:text-slate-200">{k}</Text>
                    <BrailleCela cela={v} />
                  </View>
                ) : (
                  <Text key={k} className={`text-sm text-slate-800 dark:text-slate-200 ${mono}`}>
                    <Text className="font-bold">{k}</Text> {v}
                  </Text>
                ),
              )}
            </View>
          )}
        </>
      )}
    </Card>
  );
}

/**
 * Uma cela de braille desenhada: 2 colunas × 3 linhas, pontos 1-2-3 à esquerda e 4-5-6 à direita;
 * o ponto em relevo é cheio, os outros só um contorno leve (para ver a posição).
 */
function BrailleCela({ cela, d = 7 }: { cela: string; d?: number }) {
  const on = new Set(pontosBraille(cela));
  const ponto = (p: number) => (
    <View
      key={p}
      className={on.has(p) ? 'bg-slate-900 dark:bg-white' : 'border border-slate-300 dark:border-slate-600'}
      style={{ width: d, height: d, borderRadius: d / 2 }}
    />
  );
  return (
    <View accessibilityLabel={`pontos ${[...on].join(', ') || 'nenhum'}`} style={{ flexDirection: 'row', gap: d * 0.45 }}>
      <View style={{ gap: d * 0.45 }}>{[1, 2, 3].map(ponto)}</View>
      <View style={{ gap: d * 0.45 }}>{[4, 5, 6].map(ponto)}</View>
    </View>
  );
}

function BrailleTexto({ texto }: { texto: string }) {
  return (
    <View className="flex-row flex-wrap items-center gap-x-2.5 gap-y-2 py-1">
      {[...texto].map((ch, i) => (ch === ' ' ? <View key={i} style={{ width: 10 }} /> : <BrailleCela key={i} cela={ch} />))}
    </View>
  );
}
