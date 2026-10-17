import { useEffect, useSyncExternalStore } from 'react';
import { Platform } from 'react-native';
import { Asset } from 'expo-asset';
import { createAudioPlayer } from 'expo-audio';
import type { SQLiteDatabase } from 'expo-sqlite';
import { getMeta, setMeta } from '@/database/queries';
import { useApp } from '@/services/app-state';
import { lerSomLicao, SOM_LICAO_PADRAO, type EstiloSomLicao, type SomLicaoPrefs } from '@/data/sons-licoes';

/**
 * O som de acerto e erro das lições (item 19 do PENDENTES.md), com o estilo e o volume escolhidos no
 * Perfil e guardados no banco (meta `som_licoes`). `haptics.success/error` chama `tocarSomLicao`, então
 * todo passo de lição que vibra também toca. Toca por cima, sem parar a voz do app.
 */
const META = 'som_licoes';

type Estilo = Exclude<EstiloSomLicao, 'nenhum'>;
const ARQUIVOS: Record<Estilo, { acerto: number; erro: number }> = {
  suave: { acerto: require('../../assets/sons/licoes/suave-acerto.wav'), erro: require('../../assets/sons/licoes/suave-erro.wav') },
  sino: { acerto: require('../../assets/sons/licoes/sino-acerto.wav'), erro: require('../../assets/sons/licoes/sino-erro.wav') },
  xilofone: { acerto: require('../../assets/sons/licoes/xilofone-acerto.wav'), erro: require('../../assets/sons/licoes/xilofone-erro.wav') },
  moeda: { acerto: require('../../assets/sons/licoes/moeda-acerto.wav'), erro: require('../../assets/sons/licoes/moeda-erro.wav') },
  fliperama: { acerto: require('../../assets/sons/licoes/fliperama-acerto.wav'), erro: require('../../assets/sons/licoes/fliperama-erro.wav') },
};

let atual: SomLicaoPrefs = SOM_LICAO_PADRAO;
let carregou = false;
const ouvintes = new Set<() => void>();
const assinar = (o: () => void) => {
  ouvintes.add(o);
  return () => ouvintes.delete(o);
};
const avisar = () => ouvintes.forEach((o) => o());

export function useSomLicao(): SomLicaoPrefs {
  return useSyncExternalStore(assinar, () => atual, () => atual);
}

export async function salvarSomLicao(db: SQLiteDatabase, prefs: SomLicaoPrefs) {
  atual = prefs;
  avisar();
  await setMeta(db, META, JSON.stringify(prefs));
}

/** Carrega a escolha guardada uma vez, quando o banco abre (fica na raiz do app). */
export function SomLicaoCarregar() {
  const { db } = useApp();
  useEffect(() => {
    if (carregou || !db) return;
    carregou = true;
    getMeta(db, META).then((v) => {
      atual = lerSomLicao(v);
      avisar();
    });
  }, [db]);
  return null;
}

/** Toca o som do estilo escolhido (ou o do estilo passado, para ouvir no Perfil antes de escolher). */
export function tocarSomLicao(tipo: 'acerto' | 'erro', prefs: SomLicaoPrefs = atual) {
  if (prefs.estilo === 'nenhum') return;
  const src = ARQUIVOS[prefs.estilo][tipo];
  const volume = Math.max(0, Math.min(1, prefs.volume / 100));
  try {
    if (Platform.OS === 'web') {
      if (typeof Audio === 'undefined') return;
      // os navegadores bloqueiam áudio antes do primeiro toque na página; aí só não toca
      const a = new Audio(Asset.fromModule(src).uri);
      a.volume = volume;
      a.play().catch(() => {});
      return;
    }
    const p = createAudioPlayer(src);
    p.volume = volume;
    p.addListener('playbackStatusUpdate', (s) => {
      if (s.didJustFinish) p.remove();
    });
    p.play();
  } catch {
    // sem som não é erro: a lição continua
  }
}
