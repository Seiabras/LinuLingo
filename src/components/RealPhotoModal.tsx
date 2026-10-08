import { Image, Linking, Modal, Pressable, Text, View } from 'react-native';
import { X } from 'lucide-react-native';

/**
 * Foto de verdade (Wikimedia Commons) de um bicho, instrumento ou lugar, num modal — pra quando o
 * emoji não transmite a especificidade da coisa. Mostra autor e licença, com link pra fonte.
 */
export function RealPhotoModal({
  visible,
  onClose,
  title,
  subtitle,
  photo,
}: {
  visible: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  photo: { src: number; author: string; license: string; licenseUrl: string; page: string } | null;
}) {
  if (!photo) return null;
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <Pressable className="flex-1 items-center justify-center bg-black/70 p-6" onPress={onClose}>
        <Pressable onPress={() => {}} className="w-full max-w-sm gap-3 rounded-3xl bg-white p-4 dark:bg-slate-900">
          <View className="flex-row items-center justify-between">
            <View className="flex-1">
              <Text className="text-lg font-extrabold text-slate-900 dark:text-white">{title}</Text>
              {subtitle && <Text className="text-xs italic text-slate-500 dark:text-slate-400">{subtitle}</Text>}
            </View>
            <Pressable accessibilityLabel="Fechar" onPress={onClose} hitSlop={10}>
              <X size={22} color="#64748B" />
            </Pressable>
          </View>
          <Image source={photo.src} accessibilityLabel={title} style={{ width: '100%', height: 260, borderRadius: 16 }} resizeMode="cover" />
          <Pressable
            accessibilityRole="link"
            onPress={() => Linking.openURL(photo.page)}
            hitSlop={6}
          >
            <Text className="text-center text-xs text-slate-400">
              Foto: {photo.author} · {photo.license} · Wikimedia Commons
            </Text>
          </Pressable>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
