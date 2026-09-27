import { Image, Linking, Pressable, ScrollView, Text, View } from 'react-native';
import { LINU_PHOTOS } from '@/data/fotos-linu';

/**
 * Fotos reais do pinguim-de-barbicha, a espécie do Linu, para mostrar de onde vem o desenho
 * (a faixinha preta sob o queixo). Cada foto leva autor e licença, com link para o Commons.
 */
export function SpeciesPhotos({ height = 150, withFacts = true }: { height?: number; withFacts?: boolean }) {
  return (
    <View className="gap-2">
      <Text className="text-xs font-bold uppercase tracking-wide text-slate-500">📷 Assim é um pinguim-de-barbicha de verdade</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 10 }}>
        {LINU_PHOTOS.map((p) => {
          const w = Math.round(height * p.ratio);
          return (
            <View key={p.page} style={{ width: Math.max(w, 150) }} className="gap-1">
              <Image
                source={p.src}
                accessibilityLabel={p.caption}
                style={{ width: Math.max(w, 150), height, borderRadius: 14 }}
                resizeMode="cover"
              />
              <Text className="text-xs leading-4 text-slate-700 dark:text-slate-300">{p.caption}</Text>
              <Pressable accessibilityRole="link" onPress={() => Linking.openURL(p.page)} hitSlop={6}>
                <Text className="text-[10px] text-slate-400">
                  Foto: {p.author} · {p.license}
                </Text>
              </Pressable>
            </View>
          );
        })}
      </ScrollView>
      {withFacts && (
        <Text className="text-sm leading-5 text-slate-600 dark:text-slate-400">
          O pinguim-de-barbicha (<Text className="italic">Pygoscelis antarctica</Text>) mede cerca de 70 cm, vive na Península Antártica e nas ilhas do
          oceano Austral e come sobretudo krill. O nome vem da faixa preta sob o queixo, como a tira de um capacete.
        </Text>
      )}
    </View>
  );
}
