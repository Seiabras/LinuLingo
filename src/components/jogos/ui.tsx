import { createContext, useCallback, useContext, useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from 'react';
import { Pressable, Text, useWindowDimensions, View } from 'react-native';
import Svg, { Circle, Defs, G, Path, RadialGradient, Stop } from 'react-native-svg';
import { RotateCcw, Undo2 } from 'lucide-react-native';
import { Linu } from '@/components/Linu';
import { awardXp } from '@/database/queries';
import { useApp } from '@/services/app-state';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { useIsDark } from '@/services/theme';
import Animated, { ZoomIn } from 'react-native-reanimated';
import { Comemora, Destaca } from './anim';
import { Clima, Comemoracao } from './efeitos';
import { tocarSomJogo } from '@/services/sons-jogos';
import { PadraoDaMoldura, PecaFeitio } from './visual';
import { useTemaJogo } from './tema';
import { exercitoPorId, useCoresLado } from './Figura';
import { EXERCITOS } from '@/data/exercitos-jogos';
import { skinDoJogo } from '@/data/loja-jogos';
import type { PieceType } from '@/services/xadrez-engine';

/** Se o tabuleiro está no modo “Ampliar” (a janela por cima da tela, com o fundo desfocado). */
export const AmpliadoContext = createContext(false);

/**
 * Tamanho da casa que cabe na tela: o tabuleiro de `n` casas ocupa a largura útil (a tela tem no
 * máximo 672 px de conteúdo, menos as margens da página, do cartão e da moldura), sem passar de `max`.
 * Ampliado, ocupa a tela toda (deixando lugar para o placar e os botões) e pode ficar bem maior.
 */
export function useCasa(n: number, max = 46, min = 22): number {
  const { width, height } = useWindowDimensions();
  const ampliado = useContext(AmpliadoContext);
  if (ampliado) {
    const util = Math.min(width - 40, height - 300);
    return Math.max(min, Math.min(max * 2.2, Math.floor(util / n)));
  }
  const util = Math.min(width, 672) - 32 - 32 - 28;
  return Math.max(min, Math.min(max, Math.floor(util / n)));
}

/**
 * Para tabuleiros de desenho fixo (abalone, octi): escala o tabuleiro inteiro para caber na largura
 * útil (ou crescer no modo ampliado). O toque continua certo, porque a escala é uma transformação.
 */
export function Escala({ largura, altura, children }: { largura: number; altura: number; children: ReactNode }) {
  const { width, height } = useWindowDimensions();
  const ampliado = useContext(AmpliadoContext);
  const util = ampliado ? Math.min(width - 40, height - 300) : Math.min(width, 672) - 32 - 32;
  const k = Math.min(ampliado ? 2 : 1, util / largura);
  return (
    <View style={{ width: largura * k, height: altura * k }}>
      <View style={{ width: largura, height: altura, transform: [{ scale: k }], transformOrigin: 'top left' }}>{children}</View>
    </View>
  );
}

/**
 * Peça redonda desenhada, com brilho e contorno: lê bem em qualquer cor de casa. 'clara' é o jogador 1
 * e 'escura' o jogador 2, nas cores do exército ou da cor escolhida por eles; um hex fixo vale para
 * jogos de cores próprias (vermelho e azul do quoridor…). `emblema` é a figura do exército gravada.
 */
export function Disco({ tamanho, cor, marca, emblema }: { tamanho: number; cor: 'escura' | 'clara' | string; marca?: 'dama' | 'rei'; emblema?: string }) {
  const doLado = useCoresLado();
  const lado = cor === 'clara' ? doLado('w') : cor === 'escura' ? doLado('b') : null;
  const p = lado ? { fundo: lado.fundo, brilho: '#FFFFFF', borda: lado.contorno, anel: lado.contorno } : { fundo: cor, brilho: '#FFFFFF', borda: 'rgba(0,0,0,0.55)', anel: 'rgba(255,255,255,0.75)' };
  const id = `disco-${p.fundo.replace(/[^a-zA-Z0-9]/g, '')}`;
  const r = tamanho / 2;
  return (
    <Svg width={tamanho} height={tamanho}>
      <Defs>
        <RadialGradient id={id} cx="38%" cy="32%" r="70%">
          <Stop offset="0" stopColor={p.brilho} stopOpacity={0.75} />
          <Stop offset="0.45" stopColor={p.fundo} />
          <Stop offset="1" stopColor={p.fundo} />
        </RadialGradient>
      </Defs>
      <Circle cx={r} cy={r + 1} r={r - 1.5} fill="rgba(0,0,0,0.28)" />
      <Circle cx={r} cy={r} r={r - 1.5} fill={`url(#${id})`} stroke={p.borda} strokeWidth={1.6} />
      <Circle cx={r} cy={r} r={r * 0.66} fill="none" stroke={p.anel} strokeWidth={1.2} opacity={0.55} />
      {emblema ? (
        <G transform={`translate(${r * 0.42}, ${r * 0.42}) scale(${(r * 1.16) / 512})`}>
          <Path d={emblema} fill={p.anel} opacity={0.85} />
        </G>
      ) : (
        <>
          {marca === 'dama' && (
            // coroa simples: três pontas sobre uma base
            <Path
              d={`M ${r - r * 0.42} ${r + r * 0.22} L ${r - r * 0.46} ${r - r * 0.22} L ${r - r * 0.2} ${r} L ${r} ${r - r * 0.36} L ${r + r * 0.2} ${r} L ${r + r * 0.46} ${r - r * 0.22} L ${r + r * 0.42} ${r + r * 0.22} Z`}
              fill={p.anel}
              stroke={p.borda}
              strokeWidth={0.8}
            />
          )}
          {marca === 'rei' && (
            // cruz do rei do hnefatafl
            <Path d={`M ${r - r * 0.12} ${r - r * 0.5} h ${r * 0.24} v ${r * 0.26} h ${r * 0.26} v ${r * 0.24} h ${-r * 0.26} v ${r * 0.5} h ${-r * 0.24} v ${-r * 0.5} h ${-r * 0.26} v ${-r * 0.24} h ${r * 0.26} Z`} fill="#C9A227" stroke={p.borda} strokeWidth={0.8} />
          )}
        </>
      )}
    </Svg>
  );
}

/**
 * A peça redonda de um jogo, com tudo o que a personalização escolheu: a peça especial do jogo (se
 * houver uma ativa, ex. o Go de concha e ardósia), ou o disco nas cores do jogador, com a figura do
 * exército dele gravada nos jogos que usam exército (`figura`: qual peça do exército mostrar).
 * `lado`: 'escura' é o jogador 2 (ou quem joga de escuras) e 'clara', o jogador 1.
 */
export function PecaRedonda({ jogo, lado, tamanho, marca, figura }: { jogo: string; lado: 'escura' | 'clara'; tamanho: number; marca?: 'dama' | 'rei'; figura?: PieceType }) {
  const [prefs] = useJogosPrefs();
  const skin = skinDoJogo(jogo, prefs.skins);
  if (skin) {
    const p = skin.pecas[lado === 'escura' ? 0 : 1];
    const emblemaSkin = skin.emblemaDe ? EXERCITOS.find((e) => e.id === skin.emblemaDe)?.pecas[figura ?? 'p'].d : undefined;
    return <PecaFeitio tamanho={tamanho} feitio={p.feitio} cor={p.cor} emblema={emblemaSkin} id={`${jogo}-${lado}`} />;
  }
  const ex = exercitoPorId(lado === 'clara' ? prefs.exercito1 : prefs.exercito2);
  const emblema = figura && ex ? ex.pecas[figura].d : undefined;
  return <Disco tamanho={tamanho} cor={lado} marca={emblema ? undefined : marca} emblema={emblema} />;
}

export interface JogadorPlacar {
  id: string | number;
  nome: string;
  /** desenho pequeno da peça do jogador */
  amostra: ReactNode;
  /** texto extra (ex. “12 peças”, “3 paredes”) */
  extra?: string;
}

/** Os dois jogadores, com a vez de quem joga destacada (borda e um leve aumento). */
export function PlacarJogo({ jogadores, vez, terminou }: { jogadores: JogadorPlacar[]; vez: string | number; terminou: boolean }) {
  return (
    <View className="flex-row flex-wrap items-center justify-center gap-2">
      {jogadores.map((j) => {
        const ativo = !terminou && j.id === vez;
        return (
          <Destaca key={j.id} ativo={ativo}>
            <View
              className={`flex-row items-center gap-1.5 rounded-full border-2 px-3 py-1 ${ativo ? 'border-conecta bg-white dark:border-blue-400 dark:bg-slate-900' : 'border-transparent bg-slate-100 dark:bg-slate-800'}`}
            >
              {j.amostra}
              <Text className={`text-xs font-bold ${ativo ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-300'}`}>
                {j.nome}
                {j.extra ? ` · ${j.extra}` : ''}
              </Text>
            </View>
          </Destaca>
        );
      })}
    </View>
  );
}

/** Aviso de fim de jogo (ou de estado importante, como o xeque), entrando com um pulo. */
export function FaixaResultado({ texto, tom = 'vitoria' }: { texto: string; tom?: 'vitoria' | 'empate' | 'alerta' | 'derrota' }) {
  const tema = useTemaJogo();
  const [prefs] = useJogosPrefs();
  const cores = {
    vitoria: 'bg-emerald-600 dark:bg-emerald-500',
    empate: 'bg-amber-500 dark:bg-amber-500',
    alerta: 'bg-rose-600 dark:bg-rose-500',
    derrota: 'bg-slate-700 dark:bg-slate-600',
  }[tom];
  return (
    <Comemora>
      {tom === 'vitoria' && prefs.animacoes && <Comemoracao tipo={tema.vitoria ?? 'confete'} />}
      <View className={`flex-row items-center gap-2 rounded-2xl px-4 py-2 ${cores}`}>
        {tom === 'vitoria' && <Linu mood="comemorando" size={34} animate={false} />}
        {tom === 'derrota' && <Linu mood="triste" size={34} animate={false} />}
        <Text className="shrink text-sm font-extrabold text-white">{texto}</Text>
      </View>
    </Comemora>
  );
}

/** Texto curto de instrução embaixo do placar. */
export function Instrucao({ children }: { children: ReactNode }) {
  return <Text className="text-center text-xs font-medium text-slate-600 dark:text-slate-300">{children}</Text>;
}

/** Recomeçar e desfazer, com ícone. */
export function ControlesJogo({ onRecomecar, onDesfazer, podeDesfazer, extra }: { onRecomecar: () => void; onDesfazer?: () => void; podeDesfazer?: boolean; extra?: ReactNode }) {
  const dark = useIsDark();
  const cor = dark ? '#E2E8F0' : '#334155';
  return (
    <View className="flex-row flex-wrap items-center justify-center gap-2">
      {onDesfazer && (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Desfazer o último lance"
          disabled={!podeDesfazer}
          onPress={onDesfazer}
          className={`flex-row items-center gap-1.5 rounded-full bg-slate-100 px-3.5 py-2 active:bg-slate-200 dark:bg-slate-800 dark:active:bg-slate-700 ${podeDesfazer ? '' : 'opacity-40'}`}
        >
          <Undo2 size={16} color={cor} />
          <Text className="text-sm font-bold text-slate-700 dark:text-slate-200">Desfazer</Text>
        </Pressable>
      )}
      <Pressable
        accessibilityRole="button"
        onPress={onRecomecar}
        className="flex-row items-center gap-1.5 rounded-full bg-slate-100 px-3.5 py-2 active:bg-slate-200 dark:bg-slate-800 dark:active:bg-slate-700"
      >
        <RotateCcw size={16} color={cor} />
        <Text className="text-sm font-bold text-slate-700 dark:text-slate-200">Recomeçar</Text>
      </Pressable>
      {extra}
    </View>
  );
}

/**
 * Moldura do tabuleiro, na cor do tema, com sombra. Com `colunas`/`linhas`, escreve as coordenadas
 * na própria moldura (letras embaixo, números à esquerda), se a opção “Coordenadas” estiver ligada.
 */
export function Moldura({ largura, altura, casa, colunas, linhas, fundo, children }: { largura: number; altura: number; casa?: number; colunas?: string[]; linhas?: string[]; fundo?: string; children: ReactNode }) {
  const tema = useTemaJogo();
  const [prefs] = useJogosPrefs();
  const comCoord = prefs.coordenadas && !!colunas && !!linhas && !!casa;
  const comPadrao = !!tema.padrao && !!tema.padraoCores;
  const b = comPadrao ? 12 : 7;
  const m = comCoord ? Math.max(16, b) : b;
  const W = largura + m + b;
  const H = altura + b + m;
  // as coordenadas ficam num selo escuro quando há padrão na moldura, para não sumir no desenho
  const selo = comPadrao ? { backgroundColor: 'rgba(0,0,0,0.55)', color: '#FFFFFF', borderRadius: 3 } : { color: tema.coordenada };
  const corpo = (
    <View
      style={{
        width: W,
        height: H,
        paddingTop: b,
        paddingRight: b,
        paddingLeft: m,
        paddingBottom: m,
        backgroundColor: tema.moldura,
        borderRadius: 14,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOpacity: 0.35,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
        elevation: 8,
      }}
    >
      {comPadrao && <PadraoDaMoldura largura={W} altura={H} borda={b} padrao={tema.padrao!} cores={tema.padraoCores!} />}
      {tema.clima && prefs.clima && prefs.animacoes && <Clima tipo={tema.clima} largura={W} altura={H} />}
      <View style={{ width: largura, height: altura, backgroundColor: fundo, borderRadius: 4, overflow: 'hidden', borderWidth: comPadrao ? 0 : 0, borderColor: 'transparent' }}>{children}</View>
      {comCoord && (
        <>
          <View style={{ position: 'absolute', left: m, bottom: 1, flexDirection: 'row', pointerEvents: 'none' }}>
            {colunas!.map((c) => (
              <View key={c} style={{ width: casa, alignItems: 'center' }}>
                <Text style={{ fontSize: 10, fontWeight: '800', paddingHorizontal: 2, ...selo }}>{c}</Text>
              </View>
            ))}
          </View>
          <View style={{ position: 'absolute', left: 0, top: b, width: m, alignItems: 'center', pointerEvents: 'none' }}>
            {linhas!.map((l) => (
              <View key={l} style={{ height: casa, justifyContent: 'center' }}>
                <Text style={{ fontSize: 10, fontWeight: '800', paddingHorizontal: 2, ...selo }}>{l}</Text>
              </View>
            ))}
          </View>
        </>
      )}
    </View>
  );
  if (!prefs.animacoes) return corpo;
  return <Animated.View entering={ZoomIn.duration(320)}>{corpo}</Animated.View>;
}

// as partidas em andamento, uma por jogo: sobrevivem ao “Ampliar” (o tabuleiro remonta na janela) e
// a sair e voltar para a página do jogo, enquanto o app estiver aberto
const PARTIDAS = new Map<string, unknown[]>();
const OUVINTES = new Map<string, Set<() => void>>();

function usePilha<S>(chave: string, inicial: () => S): [S[], (f: (p: S[]) => S[]) => void] {
  if (!PARTIDAS.has(chave)) PARTIDAS.set(chave, [inicial()]);
  const pilha = useSyncExternalStore(
    (o) => {
      if (!OUVINTES.has(chave)) OUVINTES.set(chave, new Set());
      OUVINTES.get(chave)!.add(o);
      return () => OUVINTES.get(chave)?.delete(o);
    },
    () => PARTIDAS.get(chave) as S[],
    () => PARTIDAS.get(chave) as S[],
  );
  const mudar = useCallback(
    (f: (p: S[]) => S[]) => {
      PARTIDAS.set(chave, f(PARTIDAS.get(chave) as S[]));
      OUVINTES.get(chave)?.forEach((o) => o());
    },
    [chave],
  );
  return [pilha, mudar];
}

/**
 * Pilha de posições para desfazer lances. `jogar` guarda a posição nova; `desfazer(n)` volta n
 * lances. A partida fica guardada pelo nome do jogo (`chave`).
 */
export function useHistorico<S>(inicial: () => S, chave: string) {
  const [pilha, mudar] = usePilha<S>(chave, inicial);
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const state = pilha[pilha.length - 1]!;
  // cada lance toca o som do tabuleiro (madeira, pedra, mar…), ou o de captura quando o lance captura
  const jogar = useCallback(
    (next: S, efeito?: 'captura') => {
      if (prefs.sons) tocarSomJogo(efeito ?? tema.som ?? 'madeira');
      mudar((p) => [...p, next]);
    },
    [mudar, prefs.sons, tema.som],
  );
  const desfazer = useCallback((n = 1) => mudar((p) => (p.length > 1 ? p.slice(0, Math.max(1, p.length - n)) : p)), [mudar]);
  const reiniciar = useCallback(() => mudar(() => [inicial()]), [mudar, inicial]);
  return { state, pilha, lances: pilha.length - 1, jogar, desfazer, reiniciar };
}

/**
 * Vez do Linu: quando `vezDoLinu` fica verdadeira, espera um instante (para a animação do lance
 * anterior terminar e dar tempo de ver) e chama `jogar`. Devolve se ele está “pensando”.
 */
export function useLinuJoga(vezDoLinu: boolean, jogar: () => void, espera = 450): boolean {
  const [pensando, setPensando] = useState(false);
  const jogarRef = useRef(jogar);
  useEffect(() => {
    jogarRef.current = jogar;
  });
  useEffect(() => {
    if (!vezDoLinu) return;
    const t1 = setTimeout(() => setPensando(true), 0);
    const t2 = setTimeout(() => {
      jogarRef.current();
      setPensando(false);
    }, espera);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      setPensando(false);
    };
  }, [vezDoLinu, espera]);
  return pensando;
}

/** “O Linu está pensando…”, com o Linu pequeno. */
export function LinuPensando({ visivel }: { visivel: boolean }) {
  return (
    <View style={{ height: 30, opacity: visivel ? 1 : 0 }} className="flex-row items-center justify-center gap-1.5">
      <Linu mood="pensando" size={28} animate={visivel} />
      <Text className="text-xs font-semibold text-slate-600 dark:text-slate-300">O Linu está pensando…</Text>
    </View>
  );
}

/** XP de vitória, uma vez por partida (não conta quando quem venceu foi o Linu). */
export function useXpDeVitoria(jogo: string) {
  const { db, refresh } = useApp();
  const ganhou = useRef(false);
  const [prefs] = useJogosPrefs();
  const dar = useCallback(() => {
    if (ganhou.current) return;
    ganhou.current = true;
    haptics.success();
    if (prefs.sons) setTimeout(() => tocarSomJogo('vitoria'), 250);
    awardXp(db, 10, `jogo:${jogo}`).then(() => refresh());
  }, [db, refresh, jogo, prefs.sons]);
  const zerar = useCallback(() => {
    ganhou.current = false;
  }, []);
  return { dar, zerar };
}
