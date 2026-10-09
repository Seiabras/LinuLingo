import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { X } from 'lucide-react-native';
import { findMapLanguage } from '@/data/onde-se-fala';
import { destinoDoIdioma } from '@/services/aventura';
import type { LanguageInfo } from '@/data/types';

/**
 * Resumo rápido de um idioma, aberto pelo botão informativo no card de escolha do tutorial: família
 * e ramo, região de origem, sistema de escrita e (quando o idioma está no mapa de "Onde se fala",
 * curado ou vindo do CLDR) o número de falantes — nunca um texto novo escrito à mão, só o que o app
 * já tem verificado em `lineage` e em `onde-se-fala.ts`.
 */
export function LanguageInfoSheet({ pack, onClose }: { pack: LanguageInfo | null; onClose: () => void }) {
  const mapLang = pack ? findMapLanguage(pack.code) : undefined;
  const destino = pack ? destinoDoIdioma(pack.code, pack.flag)?.name : undefined;

  return (
    <Modal visible={!!pack} transparent animationType="fade" onRequestClose={onClose}>
      <View className="flex-1 items-center justify-end bg-black/50">
        <Pressable accessibilityLabel="Fechar" onPress={onClose} style={StyleSheet.absoluteFill} />
        {pack && (
          <View pointerEvents="box-none" className="w-full gap-3 rounded-t-3xl bg-white p-5 pb-8 dark:bg-slate-900" style={{ maxHeight: '80%' }}>
            <View className="flex-row items-start justify-between gap-3">
              <View className="flex-1 flex-row items-center gap-2">
                <Text className="text-3xl">{pack.flag}</Text>
                <View>
                  <Text className="text-xl font-extrabold text-slate-900 dark:text-white">{pack.name}</Text>
                  {!!pack.nativeName && <Text className="text-sm text-slate-600 dark:text-slate-400">{pack.nativeName}</Text>}
                </View>
              </View>
              <Pressable accessibilityRole="button" accessibilityLabel="Fechar" onPress={onClose} hitSlop={10} className="rounded-full bg-slate-100 p-2 active:bg-slate-200 dark:bg-slate-800">
                <X size={18} color="#64748B" />
              </Pressable>
            </View>

            <ScrollView className="gap-2">
              <InfoRow label="Família" value={[pack.lineage.family, ...pack.lineage.branches].join(' › ')} />
              <InfoRow label="Região de origem" value={pack.lineage.region} />
              <InfoRow label="Sistema de escrita" value={pack.lineage.writing} />
              {mapLang && <InfoRow label="Falantes" value={mapLang.speakers} />}
              {destino && <InfoRow label="Na aventura" value={`O Linu parte da Antártica e viaja até ${destino}.`} />}
            </ScrollView>
          </View>
        )}
      </View>
    </Modal>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <View className="gap-0.5 py-1.5">
      <Text className="text-xs font-bold uppercase tracking-wide text-slate-600 dark:text-slate-400">{label}</Text>
      <Text className="text-sm leading-5 text-slate-800 dark:text-slate-100">{value}</Text>
    </View>
  );
}
