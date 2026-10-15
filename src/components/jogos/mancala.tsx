import { useCallback, useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Circle, Ellipse, G, Line } from 'react-native-svg';
import { useJogosPrefs, type MancalaSemente, type MancalaTabua } from '@/services/jogos-prefs';
import { tocarSomJogo, type EfeitoJogo } from '@/services/sons-jogos';
import { duracaoDoQuadro, type Quadro } from '@/services/semeadura';
import { skinDoJogo } from '@/data/loja-jogos';
import { Desliza, Estouro, Some, Surge } from './anim';
import { materialDoSom, SombraCova, Textura } from './visual';

/**
 * O visual das mancalas (oware e Kalah), personalizável (pedido do dono, 11/10/2026: os jogos sem
 * tabuleiro de casas também ganham personalização): o material do tabuleiro (madeira, ébano, bambu,
 * pedra, barro), com o som dele, e as sementes (sementes, feijões, búzios, pedrinhas, bolinhas de vidro).
 */
export interface VisualTabua {
  nome: string;
  tabua: string;
  borda: string;
  cova: string;
  covaJogavel: string;
  som: EfeitoJogo;
}

export const TABUAS_MANCALA: Record<MancalaTabua, VisualTabua> = {
  madeira: { nome: 'Madeira', tabua: '#8B5A2B', borda: '#5A3410', cova: '#5C3A1A', covaJogavel: '#7A4E24', som: 'madeira' },
  ebano: { nome: 'Ébano', tabua: '#2B1D14', borda: '#0F0905', cova: '#1A110B', covaJogavel: '#3B2A1D', som: 'madeira-grave' },
  bambu: { nome: 'Bambu', tabua: '#D8B76A', borda: '#8A6A26', cova: '#A9873F', covaJogavel: '#BE9C50', som: 'madeira' },
  pedra: { nome: 'Pedra', tabua: '#8D8D8A', borda: '#4B4B48', cova: '#62625E', covaJogavel: '#787873', som: 'pedra' },
  barro: { nome: 'Barro', tabua: '#B5562F', borda: '#6E2E14', cova: '#843B1D', covaJogavel: '#9E4825', som: 'ceramica' },
};

export const SEMENTES_MANCALA: Record<MancalaSemente, { nome: string }> = {
  sementes: { nome: 'Sementes' },
  feijoes: { nome: 'Feijões' },
  buzios: { nome: 'Búzios' },
  pedrinhas: { nome: 'Pedrinhas' },
  vidro: { nome: 'Bolinhas de vidro' },
};

const VIDRO = ['#38BDF8', '#F472B6', '#34D399', '#FBBF24', '#A78BFA', '#FB7185'];
const PEDRAS = ['#D1D5DB', '#9CA3AF', '#E5E7EB', '#A8A29E'];

/**
 * O tabuleiro e as sementes de um jogo de mancala: a coleção de país em uso (comprada na loja), ou
 * o material/sementes escolhidos de graça no Personalizar.
 */
export function useVisualMancala(jogo: string): { tabua: VisualTabua; semente: MancalaSemente } {
  const [prefs] = useJogosPrefs();
  const colecao = skinDoJogo(jogo, prefs.skins)?.mancala;
  if (colecao) return { tabua: colecao, semente: colecao.semente };
  return { tabua: TABUAS_MANCALA[prefs.mancalaTabua] ?? TABUAS_MANCALA.madeira, semente: prefs.mancalaSemente };
}

/** Posições das sementes dentro de uma cova de raio `r` (até `max` desenhadas; daí em diante só o número conta). */
function posicoes(n: number, r: number, max: number): { x: number; y: number; ang: number }[] {
  const out: { x: number; y: number; ang: number }[] = [];
  const m = Math.min(n, max);
  for (let k = 0; k < m; k++) {
    // espiral simples a partir do centro
    const ang = k * 2.4;
    const dist = m === 1 ? 0 : r * 0.18 * Math.sqrt(k + 0.5);
    out.push({ x: r + Math.cos(ang) * dist, y: r + Math.sin(ang) * dist, ang: (k * 47) % 180 });
  }
  return out;
}

/**
 * As sementes de uma cova, no tipo escolhido. `so` desenha só a semente desse índice e `pula` desenha
 * todas menos ela (a semente que acaba de cair, animada à parte).
 */
export function Sementes({ n, r, tipo, max = 12, largura, so, pula }: { n: number; r: number; tipo: MancalaSemente; max?: number; largura?: number; so?: number; pula?: number }) {
  const s = Math.max(2.5, r * 0.13);
  const w = largura ?? r * 2;
  return (
    <Svg width={w} height={r * 2}>
      {posicoes(n, r, max).map((p, k) => {
        if ((so !== undefined && k !== so) || k === pula) return null;
        const x = p.x + (w - r * 2) / 2;
        const giro = `rotate(${p.ang} ${x} ${p.y})`;
        switch (tipo) {
          case 'feijoes':
            return (
              <G key={k} transform={giro}>
                <Ellipse cx={x} cy={p.y} rx={s * 1.35} ry={s * 0.85} fill="#8B2E1F" stroke="#3B0F08" strokeWidth={0.8} />
                <Ellipse cx={x - s * 0.4} cy={p.y - s * 0.3} rx={s * 0.45} ry={s * 0.2} fill="#FFFFFF" opacity={0.4} />
              </G>
            );
          case 'buzios':
            return (
              <G key={k}>
                <Ellipse cx={x} cy={p.y} rx={s * 1.3} ry={s * 0.95} fill="#F5EFE0" stroke="#8C7B5E" strokeWidth={0.8} transform={giro} />
                <Line x1={x - s * 0.8} y1={p.y} x2={x + s * 0.8} y2={p.y} stroke="#6B5A3E" strokeWidth={0.9} transform={giro} />
              </G>
            );
          case 'pedrinhas':
            return (
              <G key={k}>
                <Circle cx={x} cy={p.y} r={s * (0.9 + ((k * 13) % 5) / 20)} fill={PEDRAS[k % PEDRAS.length]} stroke="#374151" strokeWidth={0.8} />
                <Circle cx={x - s * 0.3} cy={p.y - s * 0.3} r={s * 0.28} fill="#FFFFFF" opacity={0.5} />
              </G>
            );
          case 'vidro':
            return (
              <G key={k}>
                <Circle cx={x} cy={p.y} r={s} fill={VIDRO[k % VIDRO.length]} stroke="#1E293B" strokeWidth={0.6} opacity={0.92} />
                <Circle cx={x - s * 0.35} cy={p.y - s * 0.35} r={s * 0.3} fill="#FFFFFF" opacity={0.85} />
              </G>
            );
          default:
            return (
              <G key={k}>
                <Circle cx={x} cy={p.y} r={s} fill="#E8D9B0" stroke="#6B5A33" strokeWidth={0.8} />
                <Circle cx={x - s * 0.3} cy={p.y - s * 0.3} r={s * 0.3} fill="#FFFFFF" opacity={0.55} />
              </G>
            );
        }
      })}
    </Svg>
  );
}

/** Uma cova (casa) da mancala, com as sementes e o número. */
export function Cova({
  n,
  tamanho,
  jogavel,
  destaque,
  ganhou,
  chave,
  rotulo,
  tabua,
  semente,
  caiu,
  onPress,
}: {
  n: number;
  tamanho: number;
  jogavel: boolean;
  /** cor da borda de destaque (último lance, dica), ou undefined */
  destaque?: string;
  /** a cova ganhou sementes no último lance (o número pisca) */
  ganhou: boolean;
  chave: number;
  rotulo: string;
  tabua: VisualTabua;
  semente: MancalaSemente;
  /** na semeadura animada: a cova acabou de receber uma semente (o número muda a cada quadro) */
  caiu?: number;
  onPress: () => void;
}) {
  const r = tamanho / 2 - 2;
  // a semente que cai é a última desenhada (depois de 12, as novas só contam no número)
  const nova = caiu !== undefined && n > 0 && n <= 12 ? n - 1 : undefined;
  return (
    <Pressable
      accessibilityLabel={rotulo}
      disabled={!jogavel}
      onPress={onPress}
      style={{
        width: tamanho,
        height: tamanho,
        borderRadius: tamanho,
        backgroundColor: jogavel ? tabua.covaJogavel : tabua.cova,
        borderWidth: 2,
        borderColor: destaque ?? tabua.borda,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <SombraCova raio={tamanho} />
      <Sementes n={n} r={r} tipo={semente} pula={nova} />
      {nova !== undefined && (
        <View key={caiu} style={{ position: 'absolute', left: 0, top: 0, width: r * 2, height: r * 2, pointerEvents: 'none' }}>
          <Desliza dx={0} dy={-r * 0.9} duracao={150} quica>
            <Sementes n={n} r={r} tipo={semente} so={nova} />
          </Desliza>
        </View>
      )}
      <Numero n={n} ganhou={ganhou} chave={chave} />
    </Pressable>
  );
}

/** O número de sementes no canto da cova (aceso quando a cova acabou de ganhar sementes). */
export function Numero({ n, ganhou, chave }: { n: number; ganhou: boolean; chave: number }) {
  return (
    <View style={{ position: 'absolute', bottom: -2, right: -2 }}>
      {ganhou ? (
        <Surge key={chave}>
          <Text className="rounded-full bg-amber-300 px-1.5 text-xs font-extrabold text-amber-950">{n}</Text>
        </Surge>
      ) : (
        <Text className="rounded-full bg-white/90 px-1.5 text-xs font-extrabold text-slate-900">{n}</Text>
      )}
    </View>
  );
}

/**
 * A semeadura animada (pedido do dono, 14/10/2026): a mão pega as sementes e deixa uma em cada cova,
 * com o som do tabuleiro a cada semente; as capturadas voam para o depósito (ou para o placar). Só
 * visual: a posição do motor já está no histórico, e o tabuleiro mostra o quadro da vez enquanto
 * `animando`. Quem usa não deixa tocar nas covas nem o Linu jogar até a animação acabar.
 */
export function useSemeadura(som: EfeitoJogo) {
  const [prefs] = useJogosPrefs();
  const [anim, setAnim] = useState<{ quadros: Quadro[]; i: number; sementes: number } | null>(null);
  /** Começa a animação (devolve false, sem animar, com as animações desligadas). */
  const iniciar = useCallback(
    (quadros: Quadro[]) => {
      if (!prefs.animacoes || quadros.length < 2) return false;
      setAnim({ quadros, i: 0, sementes: Math.max(1, quadros[0]!.mao) });
      return true;
    },
    [prefs.animacoes],
  );
  const parar = useCallback(() => setAnim(null), []);
  useEffect(() => {
    if (!anim) return;
    const q = anim.quadros[anim.i]!;
    if (prefs.sons) {
      if (q.tipo === 'semeia') tocarSomJogo(som, 0.5);
      else if (q.tipo === 'voa') tocarSomJogo('captura');
    }
    const t = setTimeout(() => setAnim((a) => (a && a.i + 1 < a.quadros.length ? { ...a, i: a.i + 1 } : null)), duracaoDoQuadro(q, anim.sementes));
    return () => clearTimeout(t);
  }, [anim, prefs.sons, som]);
  return { quadro: anim ? anim.quadros[anim.i]! : null, passo: anim?.i ?? 0, animando: anim !== null, iniciar, parar };
}

/** O aviso embaixo do placar durante a semeadura animada. */
export function textoSemeadura(q: Quadro, destino = 'para o depósito'): string {
  if (q.tipo === 'voa' || q.tipo === 'chega') return `Captura! As sementes vão ${destino}.`;
  if (q.mao === 0) return 'Semeando… a última semente caiu.';
  return `Semeando… ${q.mao} ${q.mao === 1 ? 'semente' : 'sementes'} na mão.`;
}

/**
 * As sementes capturadas saindo da cova (com um estouro): voam até o depósito (`pousa`, no Kalah) ou
 * sobem para o placar e somem (no oware). Posições em pixels dentro do tabuleiro.
 */
export function VooSementes({
  de,
  para,
  n,
  casa,
  semente,
  pousa,
}: {
  de: { x: number; y: number };
  para: { x: number; y: number };
  n: number;
  casa: number;
  semente: MancalaSemente;
  pousa: boolean;
}) {
  const r = casa * 0.32;
  const punhado = <Sementes n={Math.min(n, 7)} r={r} tipo={semente} />;
  return (
    <>
      <View style={{ position: 'absolute', left: de.x - casa / 2, top: de.y - casa / 2, width: casa, height: casa, alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 20 }}>
        <Estouro tamanho={casa} cor="#E11D48" />
      </View>
      {pousa ? (
        <View style={{ position: 'absolute', left: para.x - r, top: para.y - r, width: r * 2, height: r * 2, pointerEvents: 'none', zIndex: 25 }}>
          <Desliza dx={de.x - para.x} dy={de.y - para.y} duracao={420}>
            {punhado}
          </Desliza>
        </View>
      ) : (
        <View style={{ position: 'absolute', left: de.x - r, top: de.y - r, width: r * 2, height: r * 2, pointerEvents: 'none', zIndex: 25 }}>
          <Some dx={para.x - de.x} dy={para.y - de.y} duracao={500}>
            {punhado}
          </Some>
        </View>
      )}
    </>
  );
}

/** O veio (ou o granulado) da tábua da mancala, pelo material dela; vai como primeiro filho da tábua. */
export function TexturaTabua({ tabua, raio }: { tabua: VisualTabua; raio: number }) {
  return <Textura material={materialDoSom(tabua.som)} fundo={tabua.tabua} raio={raio} />;
}
