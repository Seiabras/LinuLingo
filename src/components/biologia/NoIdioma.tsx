import { Text, View } from 'react-native';
import { SpeakButton } from '@/components/ui';
import { useApp } from '@/services/app-state';

/** A palavra no idioma estudado (a ponte com os idiomas), quando o Cofre tem a palavra em português. */
export function NoIdioma({ pt }: { pt: string }) {
  const { pack } = useApp();
  const v = pack.vocab.find((x) => x.word_native.toLowerCase() === pt.toLowerCase());
  if (!v) return null;
  return (
    <View className="flex-row items-center gap-1 self-start rounded-full bg-conecta-50 px-2.5 py-0.5 dark:bg-conecta-950">
      <Text className="text-xs text-conecta-dark dark:text-conecta-300">
        {pack.flag} {pt}: <Text className="font-extrabold">{v.word_target}</Text>
      </Text>
      {pack.speechLocale && <SpeakButton text={v.word_target} locale={pack.speechLocale} size={14} />}
    </View>
  );
}
