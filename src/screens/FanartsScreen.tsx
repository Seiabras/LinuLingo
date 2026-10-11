import { useState } from 'react';
import { Image, Modal, Pressable, Text, View, useWindowDimensions, type ImageSourcePropType } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { Card, Screen, SpeechBubble } from '@/components/ui';
import { HScroll } from '@/components/HScroll';
import { Linu } from '@/components/Linu';
import { FANARTS } from '@/data/fanarts';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';

/**
 * /fanarts: as fanarts do Linu (pedido do dono, 11/10/2026), cada uma com as fotos agrupadas numa
 * faixa que rola para o lado e o crédito de quem fez. Tocar numa foto abre ela grande.
 */
export default function FanartsScreen() {
  const dark = useIsDark();
  const { width, height } = useWindowDimensions();
  const [grande, setGrande] = useState<ImageSourcePropType | null>(null);
  const alto = 260;
  return (
    <Screen>
      <View className="flex-row items-center gap-3 pt-3">
        <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
          <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
        </Pressable>
        <Text className="flex-1 text-2xl font-extrabold text-slate-900 dark:text-white">🎨 Fanarts do Linu</Text>
      </View>
      <View className="mt-3 flex-row items-end gap-2">
        <Linu mood="comemorando" size={72} />
        <SpeechBubble>Olha o que fizeram de mim! Cada fanart tem o nome de quem fez.</SpeechBubble>
      </View>

      <View className="mb-8 mt-4 gap-4">
        {FANARTS.map((f) => (
          <Card key={f.id} className="gap-3">
            <View>
              <Text className="text-lg font-extrabold text-slate-900 dark:text-white">{f.titulo}</Text>
              <Text className="text-sm font-bold text-conecta dark:text-blue-400">por {f.autora}</Text>
            </View>
            <HScroll label="as fotos" contentContainerStyle={{ gap: 10 }}>
              {f.fotos.map((foto, i) => (
                <Pressable key={i} accessibilityRole="imagebutton" accessibilityLabel={`${f.titulo}, foto ${i + 1} de ${f.fotos.length}. Ver grande`} onPress={() => setGrande(foto)}>
                  <Image source={foto} style={{ width: alto * (506 / 900), height: alto, borderRadius: 14 }} resizeMode="cover" accessibilityIgnoresInvertColors />
                </Pressable>
              ))}
            </HScroll>
            <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">{f.sobre}</Text>
          </Card>
        ))}
      </View>

      {/* montado só quando aberto: no web, o Modal com animação não fechava */}
      {grande && (
        <Modal transparent visible animationType="none" onRequestClose={() => setGrande(null)}>
          <Pressable accessibilityLabel="Fechar a foto" onPress={() => setGrande(null)} style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.85)', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={grande} style={{ width: Math.min(width - 32, (height - 80) * (506 / 900)), height: Math.min(height - 80, (width - 32) * (900 / 506)), borderRadius: 16 }} resizeMode="contain" />
          </Pressable>
        </Modal>
      )}
    </Screen>
  );
}
