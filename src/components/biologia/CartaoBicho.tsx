import { Image, Text, View } from 'react-native';
import { Card } from '@/components/ui';
import { WordCard } from '@/components/WordCard';
import type { BichoDoBioma } from '@/data/biologia/bichos-bioma';
import type { PlantaDoBioma } from '@/data/biologia/plantas-bioma';
import { FOTOS_ALBUM } from '@/data/fotos-album';

const chave = (s: string) => s.normalize('NFC').replace(/́/g, '').toLowerCase().trim();

/** O cartão de um bicho (ou de uma planta) do bioma: a foto do álbum (ou o cartão desenhado, enquanto não tem foto), o nome, o nome científico e o fato. */
export function CartaoBicho({ b }: { b: BichoDoBioma | PlantaDoBioma }) {
  const foto = FOTOS_ALBUM[chave(b.foto ?? b.nome)];
  return (
    <Card className="flex-row gap-3">
      {foto ? (
        <Image source={foto.src} style={{ width: 72, height: 72, borderRadius: 12 }} accessibilityLabel={`Foto: ${b.nome}`} />
      ) : (
        <WordCard text={b.nome} size={72} />
      )}
      <View className="flex-1 gap-0.5">
        <Text className="text-base font-extrabold text-slate-900 dark:text-white">{b.nome}</Text>
        <Text className="text-sm italic text-slate-600 dark:text-slate-400">{b.cientifico}</Text>
        {b.fato && <Text className="text-sm text-slate-700 dark:text-slate-300">{b.fato}</Text>}
        {foto && (
          <Text className="text-[10px] text-slate-500">
            Foto: {foto.author}, {foto.license}
          </Text>
        )}
      </View>
    </Card>
  );
}
