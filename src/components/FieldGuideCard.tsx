import type { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { useIsDark } from '@/services/theme';

/**
 * Cartão estilo guia de campo: borda tracejada e uma etiqueta no canto, como a ficha de um espécime
 * num caderno de expedição — para o que mostra um bicho, planta ou lugar de verdade. Parte da
 * identidade visual da «expedição», ao lado de `FieldNotebookBackground`.
 */
export function FieldGuideCard({ label, children, className = '' }: { label?: string; children: ReactNode; className?: string }) {
  const dark = useIsDark();
  return (
    <View
      className={`rounded-2xl p-4 pt-5 ${className}`}
      style={{
        backgroundColor: dark ? '#17293D' : '#FBF3E3',
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: dark ? 'rgba(45, 212, 191, 0.35)' : 'rgba(15, 118, 110, 0.35)',
      }}
    >
      {label && (
        <View className="absolute -top-3 left-4 rounded-full bg-aurora-dark px-2.5 py-0.5">
          <Text className="text-[10px] font-extrabold uppercase tracking-wide text-white">{label}</Text>
        </View>
      )}
      {children}
    </View>
  );
}
