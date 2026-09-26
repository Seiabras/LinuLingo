import { Children, useState, type ReactNode } from 'react';
import { router } from 'expo-router';
import { ActivityIndicator, Pressable, ScrollView, Text, View, type PressableProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Volume2, VolumeX } from 'lucide-react-native';
import { useApp } from '@/services/app-state';
import { speak } from '@/services/speech';
import { tapLight } from '@/services/haptics';
import { useIsDark } from '@/services/theme';

/** Tela padrão: área segura, fundo do tema e largura máxima no desktop. */
export function Screen({ children, scroll = true, edges }: { children: ReactNode; scroll?: boolean; edges?: ('top' | 'bottom')[] }) {
  const body = <View className="w-full max-w-2xl self-center px-4 pb-8">{children}</View>;
  return (
    <SafeAreaView edges={edges ?? ['top']} className="flex-1 bg-suave dark:bg-grafite">
      {scroll ? (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
          {body}
        </ScrollView>
      ) : (
        <View className="w-full max-w-2xl flex-1 self-center px-4">{children}</View>
      )}
    </SafeAreaView>
  );
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <View className={`rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 ${className}`}>{children}</View>;
}

type Variant = 'primary' | 'success' | 'fire' | 'ghost' | 'danger';

const VARIANTS: Record<Variant, { box: string; text: string }> = {
  primary: { box: 'bg-conecta active:bg-conecta-dark', text: 'text-white' },
  success: { box: 'bg-conquista active:bg-conquista-dark', text: 'text-white' },
  fire: { box: 'bg-fogo active:bg-fogo-dark', text: 'text-white' },
  ghost: { box: 'border-2 border-slate-200 bg-white active:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:active:bg-slate-800', text: 'text-slate-700 dark:text-slate-200' },
  danger: { box: 'bg-rose-600 active:bg-rose-700', text: 'text-white' },
};

export function Button({
  title,
  variant = 'primary',
  icon,
  loading,
  className = '',
  onPress,
  ...rest
}: PressableProps & { title: string; variant?: Variant; icon?: ReactNode; loading?: boolean; className?: string }) {
  const v = VARIANTS[variant];
  return (
    <Pressable
      accessibilityRole="button"
      onPress={(e) => {
        tapLight();
        onPress?.(e);
      }}
      className={`min-h-[52px] flex-row items-center justify-center gap-2 rounded-2xl px-5 py-3 ${v.box} ${rest.disabled ? 'opacity-40' : ''} ${className}`}
      {...rest}
    >
      {loading ? <ActivityIndicator color="#fff" /> : icon}
      <Text className={`text-center text-base font-bold ${v.text}`}>{title}</Text>
    </Pressable>
  );
}

export function ProgressBar({ value, color = 'bg-conquista', className = '' }: { value: number; color?: string; className?: string }) {
  const pct = Math.max(0, Math.min(1, value)) * 100;
  return (
    <View className={`h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800 ${className}`}>
      <View className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
    </View>
  );
}

export function Chip({ label, tone = 'slate' }: { label: string; tone?: 'slate' | 'blue' | 'green' | 'orange' | 'rose' | 'amber' }) {
  const tones = {
    slate: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300',
    blue: 'bg-conecta-light text-conecta-dark dark:bg-blue-950 dark:text-blue-300',
    green: 'bg-conquista-light text-conquista-dark dark:bg-green-950 dark:text-green-300',
    orange: 'bg-fogo-light text-fogo-dark dark:bg-orange-950 dark:text-orange-300',
    rose: 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300',
    amber: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300',
  };
  return <Text className={`self-start overflow-hidden rounded-full px-2.5 py-0.5 text-xs font-semibold ${tones[tone]}`}>{label}</Text>;
}

/** Botão de alto-falante: lê o texto na voz do idioma. */
export function SpeakButton({ text, locale, size = 20, slow }: { text: string; locale: string; size?: number; slow?: boolean }) {
  const dark = useIsDark();
  const [mute, setMute] = useState(false);
  return (
    <View className="flex-row items-center gap-1">
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`Ouvir: ${text}`}
        hitSlop={8}
        onPress={async () => {
          const r = await speak(text, locale, { rate: slow ? 0.6 : 0.9 });
          if (r === 'sem-voz') {
            setMute(true);
            setTimeout(() => setMute(false), 3500);
          }
        }}
        className={`rounded-full p-2 active:opacity-70 ${mute ? 'bg-amber-100 dark:bg-amber-950' : 'bg-conecta-light dark:bg-blue-950'}`}
      >
        {mute ? <VolumeX size={size} color="#D97706" /> : <Volume2 size={size} color={dark ? '#93C5FD' : '#2563EB'} />}
      </Pressable>
      {mute && (
        <Pressable onPress={() => router.push('/voz')} hitSlop={6}>
          <Text className="text-xs font-semibold text-amber-600">sem voz neste aparelho · ver IPA</Text>
        </Pressable>
      )}
    </View>
  );
}

/** Pronúncia em IPA (Alfabeto Fonético Internacional), gerada por regras do idioma. */
export function Ipa({ text, className = '' }: { text: string; className?: string }) {
  const { pack } = useApp();
  const ipa = pack.ipa?.(text);
  if (!ipa) return null;
  return (
    <Text accessibilityLabel={`Pronúncia: ${ipa}`} selectable className={`font-mono text-sm text-slate-500 dark:text-slate-400 ${className}`}>
      {ipa}
    </Text>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return <Text className="mb-2 mt-6 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">{children}</Text>;
}

/** Balão de fala do Linu. */
export function SpeechBubble({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <View className={`flex-1 rounded-2xl rounded-bl-sm border-2 border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-900 ${className}`}>
      {Children.toArray(children).every((c) => typeof c === 'string' || typeof c === 'number') ? <Text className="text-base text-slate-800 dark:text-slate-100">{children}</Text> : children}
    </View>
  );
}

export const GENDER_LABEL: Record<string, { label: string; tone: 'blue' | 'rose' | 'amber' }> = {
  m: { label: 'masc.', tone: 'blue' },
  f: { label: 'fem.', tone: 'rose' },
  n: { label: 'neutro', tone: 'amber' },
};

/**
 * Teclado de letras do idioma. Poucas letras (ă â î ș ț): uma fileira de botões.
 * Alfabeto inteiro (cirílico): teclado em fileiras com apagar e espaço, que pode ser recolhido,
 * para quem não tem o teclado do idioma instalado.
 */
export function LetterPad({ onInsert, onBackspace, small }: { onInsert: (ch: string) => void; onBackspace?: () => void; small?: boolean }) {
  const { pack } = useApp();
  const [open, setOpen] = useState(false);
  const rows = pack.keyboardRows;
  const key = small ? 'h-9 w-9 rounded-lg' : 'h-11 w-11 rounded-xl';
  if (!rows) {
    return (
      <View className="flex-row flex-wrap justify-center gap-2">
        {pack.specialChars.map((ch) => (
          <Pressable key={ch} accessibilityLabel={`Inserir ${ch}`} onPress={() => onInsert(ch)} className={`${key} items-center justify-center bg-slate-200 active:bg-slate-300 dark:bg-slate-800`}>
            <Text className="text-lg font-bold text-slate-800 dark:text-slate-100">{ch}</Text>
          </Pressable>
        ))}
      </View>
    );
  }
  return (
    <View className="gap-1">
      <Pressable accessibilityRole="button" accessibilityState={{ expanded: open }} onPress={() => setOpen((v) => !v)} className="self-center rounded-full bg-slate-200 px-3 py-1 dark:bg-slate-800">
        <Text className="text-sm font-semibold text-slate-700 dark:text-slate-200">⌨️ {open ? 'Esconder' : 'Mostrar'} teclado ({pack.name.toLowerCase()})</Text>
      </Pressable>
      {open &&
        rows.map((row, r) => (
          <View key={r} className="flex-row justify-center gap-[3px]">
            {row.map((ch) => (
              <Pressable
                key={ch}
                accessibilityLabel={`Inserir ${ch}`}
                onPress={() => onInsert(ch)}
                style={{ flexBasis: 0, maxWidth: 38 }}
                className="h-10 flex-1 items-center justify-center rounded-md bg-slate-200 active:bg-slate-300 dark:bg-slate-800"
              >
                <Text className="text-base font-bold text-slate-800 dark:text-slate-100">{ch}</Text>
              </Pressable>
            ))}
            {r === rows.length - 1 && onBackspace && (
              <Pressable accessibilityLabel="Apagar" onPress={onBackspace} style={{ flexBasis: 0, maxWidth: 52 }} className="h-10 flex-[1.4] items-center justify-center rounded-md bg-slate-300 dark:bg-slate-700">
                <Text className="text-base font-bold text-slate-800 dark:text-slate-100">⌫</Text>
              </Pressable>
            )}
          </View>
        ))}
      {open && (
        <Pressable accessibilityLabel="Espaço" onPress={() => onInsert(' ')} className="h-10 w-1/2 items-center justify-center self-center rounded-md bg-slate-200 dark:bg-slate-800">
          <Text className="text-xs font-semibold text-slate-500">espaço</Text>
        </Pressable>
      )}
    </View>
  );
}
