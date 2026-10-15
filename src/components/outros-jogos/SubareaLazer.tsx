import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { router } from 'expo-router';
import { IconeOutroJogo } from '@/components/outros-jogos/IconeOutroJogo';
import { AREAS_JOGO, GRUPOS_CARTAS, jogosDaArea, type AreaJogo, type GrupoCartas } from '@/data/outros-jogos';

/** Cartão “em breve”, com a frase do que vai ter. */
export function EmBreve({ titulo, frase }: { titulo: string; frase: string }) {
  return (
    <View className="gap-1 rounded-2xl bg-white p-4 dark:bg-slate-900">
      <Text className="font-bold text-slate-900 dark:text-white">{titulo}: em breve</Text>
      <Text className="text-xs text-slate-600 dark:text-slate-400">{frase}</Text>
    </View>
  );
}

/** Seletor dos subgrupos de Cartas (Jogos de cartas, Cartomagia…), quebrando linha se não couber. */
export function SeletorGrupoCartas({ grupo, onChange }: { grupo: GrupoCartas; onChange: (g: GrupoCartas) => void }) {
  return (
    <View className="flex-row flex-wrap gap-1.5">
      {GRUPOS_CARTAS.map((g) => (
        <Pressable
          key={g.id}
          accessibilityRole="radio"
          accessibilityLabel={g.nome}
          accessibilityState={{ selected: grupo === g.id }}
          aria-checked={grupo === g.id}
          onPress={() => onChange(g.id)}
          className={`rounded-full border-2 px-3 py-1 ${grupo === g.id ? 'border-conecta bg-blue-50 dark:border-blue-400 dark:bg-blue-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
        >
          <Text className={`text-xs font-bold ${grupo === g.id ? 'text-conecta-dark dark:text-blue-300' : 'text-slate-700 dark:text-slate-200'}`}>{g.nome}</Text>
        </Pressable>
      ))}
    </View>
  );
}

/**
 * O que aparece no Perfil → Lazer embaixo do seletor, para uma subárea que não é Tabuleiro: a lista dos
 * jogos (em Cartas, com os subgrupos), ou o “em breve” do RPG.
 */
export function SubareaLazer({ area }: { area: AreaJogo }) {
  const [grupo, setGrupo] = useState<GrupoCartas>('jogos');
  const info = AREAS_JOGO.find((a) => a.id === area)!;
  if (area === 'rpg') return <EmBreve titulo="RPG" frase="Aqui vão chegar os jogos de interpretar personagens: a história do RPG de mesa e aventuras para jogar com o Linu." />;
  const grupoInfo = GRUPOS_CARTAS.find((g) => g.id === grupo)!;
  const jogos = jogosDaArea(area).filter((g) => area !== 'cartas' || (g.grupo ?? 'jogos') === grupo);
  return (
    <View className="gap-2">
      <Text className="text-xs text-slate-600 dark:text-slate-400">{info.descricao}</Text>
      {area === 'cartas' && <SeletorGrupoCartas grupo={grupo} onChange={setGrupo} />}
      {area === 'cartas' && grupoInfo.emBreve ? (
        <EmBreve titulo={grupoInfo.nome} frase={grupoInfo.emBreve} />
      ) : (
        <>
          {jogos.map((g) => (
            <Pressable
              key={g.id}
              accessibilityRole="button"
              disabled={g.status !== 'pronto'}
              onPress={() => router.push(`/jogos/${g.area}/${g.id}`)}
              className={`flex-row items-center gap-3 rounded-2xl bg-white p-4 active:opacity-80 dark:bg-slate-900 ${g.status === 'pronto' ? '' : 'opacity-60'}`}
            >
              <IconeOutroJogo id={g.id} emoji={g.emoji} tamanho={40} />
              <View className="flex-1">
                <Text className="font-bold text-slate-900 dark:text-white">{g.name}</Text>
                <Text className="text-xs text-slate-600 dark:text-slate-400" numberOfLines={2}>
                  {g.status === 'pronto' ? [g.where, g.linu ? 'contra o Linu' : null].filter(Boolean).join(' · ') : 'em breve'}
                </Text>
              </View>
              <Text className="text-lg text-slate-500 dark:text-slate-400">›</Text>
            </Pressable>
          ))}
          {jogos.length === 0 && <EmBreve titulo={info.nome} frase="Os jogos desta área estão chegando." />}
          {jogos.length > 0 && (
            <Pressable accessibilityRole="link" onPress={() => router.push(`/jogos/${area}`)} className="self-start">
              <Text className="text-sm font-semibold text-conecta dark:text-blue-400">Ver a área inteira, com a história de cada jogo ›</Text>
            </Pressable>
          )}
        </>
      )}
    </View>
  );
}
