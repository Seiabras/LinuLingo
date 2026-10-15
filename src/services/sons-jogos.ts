import { Platform } from 'react-native';
import { Asset } from 'expo-asset';
import { createAudioPlayer } from 'expo-audio';
import type { SomJogo } from '@/data/temas-jogos';

/**
 * Os sons curtos dos tabuleiros (gerados por scripts/gerar-sons-jogos.py, sem autor a creditar): o de
 * mover a peça, que muda com o tema do tabuleiro (madeira, pedra, mar…), o de captura, o de vitória e o dos dados rolando.
 * Tocam por cima, sem parar a voz do app.
 */
const ARQUIVOS: Record<SomJogo | 'captura' | 'vitoria' | 'dados', number> = {
  madeira: require('../../assets/sons/jogos/madeira.wav'),
  'madeira-grave': require('../../assets/sons/jogos/madeira-grave.wav'),
  pedra: require('../../assets/sons/jogos/pedra.wav'),
  areia: require('../../assets/sons/jogos/areia.wav'),
  onda: require('../../assets/sons/jogos/onda.wav'),
  mata: require('../../assets/sons/jogos/mata.wav'),
  moeda: require('../../assets/sons/jogos/moeda.wav'),
  sino: require('../../assets/sons/jogos/sino.wav'),
  gelo: require('../../assets/sons/jogos/gelo.wav'),
  ceramica: require('../../assets/sons/jogos/ceramica.wav'),
  tecido: require('../../assets/sons/jogos/tecido.wav'),
  papel: require('../../assets/sons/jogos/papel.wav'),
  chuva: require('../../assets/sons/jogos/chuva.wav'),
  captura: require('../../assets/sons/jogos/captura.wav'),
  vitoria: require('../../assets/sons/jogos/vitoria.wav'),
  // os dados rolando (gamão)
  dados: require('../../assets/sons/jogos/dados.wav'),
};

export type EfeitoJogo = keyof typeof ARQUIVOS;

export function tocarSomJogo(som: EfeitoJogo, volume = 0.7) {
  const src = ARQUIVOS[som];
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
    // sem som não é erro: o jogo continua
  }
}
