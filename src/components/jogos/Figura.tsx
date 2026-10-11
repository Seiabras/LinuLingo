import { View } from 'react-native';
import Svg, { Circle, Ellipse, Path } from 'react-native-svg';
import { Linu } from '@/components/Linu';
import { LinuAmigo } from '@/components/LinuAmigo';
import { coresDosLados, EXERCITOS, type CoresLado } from '@/data/exercitos-jogos';
import { useJogosPrefs } from '@/services/jogos-prefs';
import type { PieceType } from '@/services/xadrez-engine';

/** O exército pelo id (ou undefined para o clássico e ids desconhecidos). */
export const exercitoPorId = (id: string | undefined) => (id && id !== 'classico' ? EXERCITOS.find((e) => e.id === id) : undefined);

/** As cores de cada lado ('w' = jogador 1, 'b' = jogador 2): ver a regra em `coresDosLados`. */
export function useCoresLado(): (lado: 'w' | 'b') => CoresLado {
  const [prefs] = useJogosPrefs();
  const cores = coresDosLados(prefs);
  return (lado) => cores[lado];
}

/**
 * Uma figura de exército (silhueta do game-icons.net): primeiro um contorno grosso, depois o
 * preenchimento, sobre uma sombrinha. Lê bem em casa clara e em casa escura.
 */
export function Figura({ d, detalhe, tamanho, cor, cores, sombra = true }: { d: string; detalhe?: string; tamanho: number; cor: 'w' | 'b'; cores?: CoresLado; sombra?: boolean }) {
  const doLado = useCoresLado();
  const c = cores ?? doLado(cor);
  return (
    <Svg width={tamanho} height={tamanho} viewBox="-24 -24 560 560">
      {sombra && <Ellipse cx={256} cy={500} rx={170} ry={26} fill="rgba(0,0,0,0.28)" />}
      <Path d={d} fill={c.contorno} stroke={c.contorno} strokeWidth={c.traco ?? 44} strokeLinejoin="round" />
      <Path d={d} fill={c.fundo} />
      {detalhe && <Path d={detalhe} fill={c.contorno} />}
    </Svg>
  );
}

/**
 * Uma peça do exército da Antártida: uma base redonda na cor do jogador, com o desenho do Linu ou de
 * um amigo dele por cima (os desenhos são coloridos, então quem diz de que lado é a peça é a base).
 */
export function FiguraAmigo({ amigo, tamanho, cor, cores }: { amigo: string; tamanho: number; cor: 'w' | 'b'; cores?: CoresLado }) {
  const doLado = useCoresLado();
  const c = cores ?? doLado(cor);
  const r = tamanho / 2;
  return (
    <View style={{ width: tamanho, height: tamanho, alignItems: 'center', justifyContent: 'flex-end' }}>
      <Svg width={tamanho} height={tamanho} style={{ position: 'absolute', left: 0, top: 0 }}>
        <Ellipse cx={r} cy={tamanho * 0.86} rx={r * 0.86} ry={r * 0.3} fill={c.fundo} stroke={c.contorno} strokeWidth={Math.max(1.5, tamanho * 0.06)} />
        <Circle cx={r} cy={r * 0.92} r={r * 0.62} fill={c.fundo} opacity={0.55} />
      </Svg>
      <View style={{ marginBottom: tamanho * 0.06 }}>
        {amigo === 'linu' ? <Linu mood="feliz" size={tamanho * 0.86} animate={false} cachecol={null} /> : <LinuAmigo id={amigo} size={tamanho * 0.86} />}
      </View>
    </View>
  );
}

/** A peça de xadrez de um exército, se o exército existir. */
export function pecaDoExercito(exercito: string | undefined, tipo: PieceType) {
  return exercitoPorId(exercito)?.pecas[tipo];
}
