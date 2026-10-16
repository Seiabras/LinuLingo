import { useCallback, useEffect, useSyncExternalStore } from 'react';
import { getMeta, setMeta } from '@/database/queries';
import { useApp } from '@/services/app-state';
import type { TemaJogoId } from '@/data/temas-jogos';

/**
 * Personalização dos jogos do conhecimento (Cultura → 🎲 Jogos → “Personalizar”), pedido do dono em
 * 11/10/2026. Vale para todos os tabuleiros de uma vez e fica guardada no banco (meta `jogos_prefs`).
 */
export type { TemaJogoId };
export type EstiloPecas = 'desenho' | 'simbolos';
export type Adversario = 'humano' | 'linu';
export type NivelLinu = 'facil' | 'medio' | 'dificil';

export interface JogosPrefs {
  tema: TemaJogoId;
  /** só o xadrez: peças desenhadas (Cburnett) ou os símbolos ♔♕ do texto */
  pecas: EstiloPecas;
  /** marca as casas para onde a peça escolhida pode ir */
  dicas: boolean;
  /** letras e números em volta do tabuleiro (xadrez, damas, go) */
  coordenadas: boolean;
  /** destaca de onde e para onde foi o último lance */
  ultimoLance: boolean;
  animacoes: boolean;
  /** o som de mover a peça, próprio de cada tabuleiro */
  sons: boolean;
  /** a animação de clima do tema (pétalas, chuva, neve…) */
  clima: boolean;
  /** xadrez a dois no mesmo aparelho: o tabuleiro gira para quem tem a vez */
  girar: boolean;
  /** nos jogos em que o Linu sabe jogar: contra ele ou a dois no mesmo aparelho */
  adversario: Adversario;
  nivel: NivelLinu;
  /** o exército de cada jogador (as figuras das peças, ver `data/exercitos-jogos.ts`); 'classico' é o padrão */
  exercito1: string;
  exercito2: string;
  /** a cor das peças clássicas de cada jogador (ids de `CORES_CLASSICAS`): o padrão é branco e preto */
  cor1: string;
  cor2: string;
  /** a cor das peças de exército de cada jogador: 'natural' (a do exército) ou um id de `CORES_PARA_EXERCITO` */
  corEx1: string;
  corEx2: string;
  /** o tabuleiro e as sementes das mancalas (oware e Kalah) */
  mancalaTabua: MancalaTabua;
  mancalaSemente: MancalaSemente;
  /** o estilo das peças do xiangqi */
  xiangqiPecas: XiangqiPecas;
  /** o estilo das peças do shogi: kanji, kanji com o movimento desenhado, ou letra com o movimento */
  shogiPecas: ShogiPecas;
  /** a cor das pedras do dominó */
  dominoPedras: DominoPedras;
  /** o par de cores escolhido em cada jogo de cores próprias (Ligue 4, Quoridor…), por id do jogo */
  pares: Record<string, string>;
  /** o tamanho do tabuleiro escolhido em cada jogo que tem mais de um (ex. go: '13', conecta4: '8x7'), por id do jogo */
  tamanhos: Record<string, string>;
  /** a cor da grade do Ligue 4 */
  ligue4Grade: string;
  /** usar o exército escolhido também nos jogos de peça redonda sem exército (go, reversi, trilha…) */
  exercitoEmTodos: boolean;
  /** as paredes do Quoridor */
  quoridorParede: QuoridorParede;
  /** o jeito de desenhar o X e o O do jogo da velha */
  velhaEstilo: VelhaEstilo;
  /** quantos jogam as damas chinesas no mesmo aparelho (contra o Linu, são sempre dois) */
  estrelaJogadores: EstrelaJogadores;
  /** as peças especiais de cada jogo que estão em uso (ids do catálogo da loja, `jogo:…`) */
  skins: string[];
  /** o recorde de pontos de cada videogame de fliperama (Breakout, Space Invaders…), por id do jogo */
  recordes: Record<string, number>;
  /** a variante escolhida em cada jogo (id do jogo → `GameVariant.jogavel`); sem nada, a regra clássica */
  variantes: Record<string, string>;
  /**
   * Contra o Linu, quem começa a partida (pedido do dono, 16/10/2026: “quero ter a opção de não
   * começar sempre”). Uma escolha só, para todos os jogos; vale a partir da próxima partida.
   */
  quemComeca: QuemComeca;
}

export type QuemComeca = 'eu' | 'linu' | 'sorteio';

export type MancalaTabua = 'madeira' | 'ebano' | 'bambu' | 'pedra' | 'barro';
export type XiangqiPecas = 'classicas' | 'jade' | 'laca' | 'madeira' | 'pedra';
export type ShogiPecas = 'kanji' | 'setas' | 'letras';
export type DominoPedras = 'marfim' | 'preta' | 'madeira' | 'colorida';
export type QuoridorParede = 'madeira' | 'pedra' | 'gelo' | 'cerca';
export type VelhaEstilo = 'classico' | 'giz' | 'pincel' | 'neon';
export type EstrelaJogadores = 'dois' | 'tres';
export type MancalaSemente = 'sementes' | 'feijoes' | 'buzios' | 'pedrinhas' | 'vidro';

export const PREFS_PADRAO: JogosPrefs = {
  tema: 'madeira',
  pecas: 'desenho',
  dicas: true,
  coordenadas: true,
  ultimoLance: true,
  animacoes: true,
  sons: true,
  clima: true,
  girar: false,
  adversario: 'humano',
  nivel: 'facil',
  exercito1: 'classico',
  exercito2: 'classico',
  cor1: 'branco',
  cor2: 'preto',
  corEx1: 'natural',
  corEx2: 'natural',
  mancalaTabua: 'madeira',
  mancalaSemente: 'sementes',
  xiangqiPecas: 'classicas',
  shogiPecas: 'kanji',
  dominoPedras: 'marfim',
  pares: {},
  tamanhos: {},
  ligue4Grade: 'azul',
  exercitoEmTodos: false,
  quoridorParede: 'madeira',
  velhaEstilo: 'classico',
  estrelaJogadores: 'dois',
  skins: [],
  recordes: {},
  variantes: {},
  quemComeca: 'eu',
};

/** valores aceitos de cada opção de texto */
const VALORES: Partial<Record<keyof JogosPrefs, readonly string[]>> = {
  tema: ['madeira', 'verde', 'oceano', 'gelo', 'noite', 'contraste', 'papiro', 'grega', 'jade', 'sakura', 'azulejo', 'zellige', 'kente', 'tartan', 'marajoara', 'aurora', 'deserto', 'piratas', 'vikings', 'copacabana', 'amazonia', 'mexico', 'talavera', 'londres', 'rangoli', 'andino', 'khokhloma', 'iznik', 'bojagi', 'vyshyvanka'],
  pecas: ['desenho', 'simbolos'],
  adversario: ['humano', 'linu'],
  nivel: ['facil', 'medio', 'dificil'],
  mancalaTabua: ['madeira', 'ebano', 'bambu', 'pedra', 'barro'],
  mancalaSemente: ['sementes', 'feijoes', 'buzios', 'pedrinhas', 'vidro'],
  xiangqiPecas: ['classicas', 'jade', 'laca', 'madeira', 'pedra'],
  shogiPecas: ['kanji', 'setas', 'letras'],
  dominoPedras: ['marfim', 'preta', 'madeira', 'colorida'],
  quoridorParede: ['madeira', 'pedra', 'gelo', 'cerca'],
  velhaEstilo: ['classico', 'giz', 'pincel', 'neon'],
  estrelaJogadores: ['dois', 'tres'],
  quemComeca: ['eu', 'linu', 'sorteio'],
};

const META = 'jogos_prefs';
let atual: JogosPrefs = PREFS_PADRAO;
let carregou = false;
const ouvintes = new Set<() => void>();

function avisar() {
  for (const o of ouvintes) o();
}

function assinar(o: () => void) {
  ouvintes.add(o);
  return () => ouvintes.delete(o);
}

/** Lê o JSON salvo, aceitando só os campos e valores conhecidos (um valor velho ou estranho cai no padrão). */
export function lerPrefs(json: string | null): JogosPrefs {
  if (!json) return PREFS_PADRAO;
  try {
    const salvo = JSON.parse(json) as Partial<Record<keyof JogosPrefs, unknown>>;
    const out: JogosPrefs = { ...PREFS_PADRAO };
    for (const k of Object.keys(PREFS_PADRAO) as (keyof JogosPrefs)[]) {
      const v = salvo[k];
      if (typeof v !== typeof PREFS_PADRAO[k]) continue;
      if (VALORES[k] && !VALORES[k]!.includes(v as string)) continue;
      (out as unknown as Record<string, unknown>)[k] = v;
    }
    return out;
  } catch {
    return PREFS_PADRAO;
  }
}

/** As preferências dos jogos e a função que muda uma parte delas (salva no banco e avisa todos os tabuleiros). */
export function useJogosPrefs(): [JogosPrefs, (mudanca: Partial<JogosPrefs>) => void] {
  const { db } = useApp();
  const prefs = useSyncExternalStore(assinar, () => atual, () => atual);

  useEffect(() => {
    if (carregou || !db) return;
    carregou = true;
    getMeta(db, META).then((json) => {
      atual = lerPrefs(json);
      avisar();
    });
  }, [db]);

  const mudar = useCallback(
    (mudanca: Partial<JogosPrefs>) => {
      atual = { ...atual, ...mudanca };
      avisar();
      if (db) setMeta(db, META, JSON.stringify(atual));
    },
    [db],
  );

  return [prefs, mudar];
}

/** A variante escolhida de um jogo ('' = a regra clássica) e a função que troca. */
export function useVariante(jogo: string): [string, (v: string) => void] {
  const [prefs, mudar] = useJogosPrefs();
  const v = prefs.variantes[jogo] ?? '';
  const trocar = useCallback((nova: string) => mudar({ variantes: { ...prefs.variantes, [jogo]: nova } }), [mudar, prefs.variantes, jogo]);
  return [v, trocar];
}

// só no desenvolvimento: os scripts de captura (scripts/fluxo-*.mjs) trocam o tema e as coleções sem
// passar pela loja nem gravar no banco
if (typeof __DEV__ !== 'undefined' && __DEV__ && typeof window !== 'undefined') {
  (window as unknown as { __jogosPrefs?: (m: Partial<JogosPrefs>) => void }).__jogosPrefs = (m) => {
    atual = { ...atual, ...m };
    avisar();
  };
}
