import Svg, { Ellipse, Path } from 'react-native-svg';
import { CORES_CLASSICAS, CORES_EXERCITO, EXERCITOS, type CoresLado } from '@/data/exercitos-jogos';
import { useJogosPrefs } from '@/services/jogos-prefs';
import type { PieceType } from '@/services/xadrez-engine';

/** O exército pelo id (ou undefined para o clássico e ids desconhecidos). */
export const exercitoPorId = (id: string | undefined) => (id && id !== 'classico' ? EXERCITOS.find((e) => e.id === id) : undefined);

/**
 * As cores de cada lado ('w' = jogador 1, 'b' = jogador 2), a regra do dono (11/10/2026):
 *   - exércitos diferentes (fauna × flora): cada um na cor natural dele (o tom `w`), porque as
 *     figuras já mostram de quem é cada peça;
 *   - o mesmo exército dos dois lados (flora × flora): o jogador 1 no tom claro e o 2 no escuro,
 *     com contraste forte;
 *   - peças clássicas: a cor que o jogador escolheu (branco e preto por padrão).
 */
export function useCoresLado(): (lado: 'w' | 'b') => CoresLado {
  const [prefs] = useJogosPrefs();
  return (lado) => {
    const ex = lado === 'w' ? prefs.exercito1 : prefs.exercito2;
    const doEx = CORES_EXERCITO[ex];
    if (doEx) return prefs.exercito1 === prefs.exercito2 ? doEx[lado] : doEx.w;
    const id = lado === 'w' ? prefs.cor1 : prefs.cor2;
    return CORES_CLASSICAS[lado].find((c) => c.id === id) ?? CORES_CLASSICAS[lado][0]!;
  };
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

/** A peça de xadrez de um exército, se o exército existir. */
export function pecaDoExercito(exercito: string | undefined, tipo: PieceType) {
  return exercitoPorId(exercito)?.pecas[tipo];
}
