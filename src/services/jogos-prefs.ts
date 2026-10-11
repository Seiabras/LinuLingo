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
  /** o par de cores escolhido em cada jogo de cores próprias (Ligue 4, Quoridor…), por id do jogo */
  pares: Record<string, string>;
  /** a cor da grade do Ligue 4 */
  ligue4Grade: string;
  /** usar o exército escolhido também nos jogos de peça redonda sem exército (go, reversi, trilha…) */
  exercitoEmTodos: boolean;
  /** as paredes do Quoridor */
  quoridorParede: QuoridorParede;
  /** o jeito de desenhar o X e o O do jogo da velha */
  velhaEstilo: VelhaEstilo;
  /** as peças especiais de cada jogo que estão em uso (ids do catálogo da loja, `jogo:…`) */
  skins: string[];
}

export type MancalaTabua = 'madeira' | 'ebano' | 'bambu' | 'pedra' | 'barro';
export type XiangqiPecas = 'classicas' | 'jade' | 'laca' | 'madeira' | 'pedra';
export type QuoridorParede = 'madeira' | 'pedra' | 'gelo' | 'cerca';
export type VelhaEstilo = 'classico' | 'giz' | 'pincel' | 'neon';
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
  pares: {},
  ligue4Grade: 'azul',
  exercitoEmTodos: false,
  quoridorParede: 'madeira',
  velhaEstilo: 'classico',
  skins: [],
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
  quoridorParede: ['madeira', 'pedra', 'gelo', 'cerca'],
  velhaEstilo: ['classico', 'giz', 'pincel', 'neon'],
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
