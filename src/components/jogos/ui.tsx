import { createContext, useCallback, useContext, useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from 'react';
import { Pressable, Text, useWindowDimensions, View } from 'react-native';
import Svg, { Circle, Defs, G, Path, RadialGradient, Stop } from 'react-native-svg';
import { RotateCcw, Undo2 } from 'lucide-react-native';
import { Linu } from '@/components/Linu';
import { LinuAmigo } from '@/components/LinuAmigo';
import { awardXp } from '@/database/queries';
import { useApp } from '@/services/app-state';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { useIsDark } from '@/services/theme';
import { Comemora, Destaca } from './anim';
import { Clima, Comemoracao } from './efeitos';
import { tocarSomJogo, type EfeitoJogo } from '@/services/sons-jogos';
import { registrarVitoriaComTema } from '@/services/conquistas';
import { DefsVolume, PadraoDaMoldura, PecaFeitio, Textura, materialDoTema, volumePeca } from './visual';
import { useTemaJogo } from './tema';
import { exercitoPorId, useCoresLado } from './Figura';
import { EXERCITOS } from '@/data/exercitos-jogos';
import { JOGOS_COM_EXERCITO, skinDoJogo } from '@/data/loja-jogos';
import { coresDosLados, type CoresLado } from '@/data/exercitos-jogos';
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
export function Disco({
  tamanho,
  cor,
  marca,
  emblema,
  cores,
}: {
  tamanho: number;
  cor: 'escura' | 'clara' | string;
  marca?: 'dama' | 'rei';
  emblema?: string;
  cores?: CoresLado;
}) {
  const doLado = useCoresLado();
  const lado = cores ?? (cor === 'clara' ? doLado('w') : cor === 'escura' ? doLado('b') : null);
  const p = lado
    ? { fundo: lado.fundo, brilho: '#FFFFFF', borda: lado.contorno, anel: lado.contorno }
    : { fundo: cor, brilho: '#FFFFFF', borda: 'rgba(0,0,0,0.55)', anel: 'rgba(255,255,255,0.75)' };
  const id = `disco-${p.fundo.replace(/[^a-zA-Z0-9]/g, '')}`;
  const r = tamanho / 2;
  // dentro de uma View: no web, a <svg> solta ficava por baixo dos destaques absolutos (o buraco do
  // Ligue 4) e a peça sumia
  return (
    <View style={{ width: tamanho, height: tamanho }}>
      <Svg width={tamanho} height={tamanho}>
        <Defs>
          <RadialGradient id={id} cx="38%" cy="32%" r="70%">
            <Stop offset="0" stopColor={p.brilho} stopOpacity={0.75} />
            <Stop offset="0.45" stopColor={p.fundo} />
            <Stop offset="1" stopColor={p.fundo} />
          </RadialGradient>
        </Defs>
        <DefsVolume />
        <Circle cx={r} cy={r + Math.max(1, r * 0.08)} r={r - 1.5} fill="rgba(0,0,0,0.3)" />
        <Circle cx={r} cy={r} r={r - 1.5} fill={`url(#${id})`} stroke={p.borda} strokeWidth={1.6} />
        {volumePeca(r, r, r - 2.3)}
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
              <Path
                d={`M ${r - r * 0.12} ${r - r * 0.5} h ${r * 0.24} v ${r * 0.26} h ${r * 0.26} v ${r * 0.24} h ${-r * 0.26} v ${r * 0.5} h ${-r * 0.24} v ${-r * 0.5} h ${-r * 0.26} v ${-r * 0.24} h ${r * 0.26} Z`}
                fill="#C9A227"
                stroke={p.borda}
                strokeWidth={0.8}
              />
            )}
          </>
        )}
      </Svg>
    </View>
  );
}

/** O material do rei: a cor do corpo, o contorno e se ele é translúcido (âmbar, vidro). */
interface MaterialRei {
  corpo: string;
  borda: string;
  translucido?: boolean;
  /** veios entalhados (osso) */
  entalhe?: boolean;
}

const BORDA_DO_FEITIO: Record<string, string> = { ambar: '#5A2800', osso: '#5A4E36', concha: '#6B5B45', ardosia: '#111827', moeda: '#5A3A00', vidro: '#1E3A5F' };

/**
 * O rei do hnefatafl com silhueta própria (pedido do dono, 16/10/2026: “um design mais único pro
 * rei”): uma peça alta, 15% maior que as outras, com corpo em forma de escudo e a coroa no mesmo
 * material, cingida por uma faixa dourada, no material da coleção ou nas cores do exército. Não se
 * confunde com um defensor redondo em nenhum visual. `emblema`: a figura do rei do exército, gravada
 * no escudo; sem ela, a cruz do rei.
 */
export function PecaRei({ tamanho, material, emblema, amigo }: { tamanho: number; material: MaterialRei; emblema?: string; amigo?: ReactNode }) {
  const S = tamanho * 1.15;
  const id = `rei-${material.corpo.replace(/[^a-zA-Z0-9]/g, '')}`;
  return (
    <View style={{ width: tamanho, height: tamanho }}>
      <View pointerEvents="none" style={{ position: 'absolute', width: S, height: S * 1.2, left: (tamanho - S) / 2, top: tamanho - S * 1.2 + S * 0.1 }}>
        <Svg width={S} height={S * 1.2} viewBox="0 0 40 48">
          <Defs>
            <RadialGradient id={id} cx="35%" cy="35%" r="75%">
              <Stop offset="0" stopColor="#FFFFFF" stopOpacity={material.translucido ? 0.85 : 0.6} />
              <Stop offset="0.45" stopColor={material.corpo} stopOpacity={material.translucido ? 0.88 : 1} />
              <Stop offset="1" stopColor={material.corpo} />
            </RadialGradient>
          </Defs>
          {/* sombra no chão */}
          <Path d="M8 45.5 Q20 49 32 45.5 Q20 42.5 8 45.5 Z" fill="rgba(0,0,0,0.3)" />
          {/* corpo em escudo e a coroa, num desenho só */}
          <Path
            d="M8 19 L8 8.5 L13.2 13 L20 3.5 L26.8 13 L32 8.5 L32 19 L32.5 31 Q32.5 40.5 20 45 Q7.5 40.5 7.5 31 Z"
            fill={`url(#${id})`}
            stroke={material.borda}
            strokeWidth={1.8}
            strokeLinejoin="round"
          />
          {/* a faixa dourada da coroa */}
          <Path d="M7.8 17 H32.2 V21 H7.8 Z" fill="#F5C542" stroke="#7A5200" strokeWidth={1} />
          <Circle cx={20} cy={19} r={1.3} fill="#B91C1C" stroke="#7A5200" strokeWidth={0.5} />
          {material.entalhe && <Path d="M12 25 Q20 29 28 25 M13 36 Q20 39.5 27 36" fill="none" stroke={material.borda} strokeWidth={0.9} opacity={0.6} />}
          {material.translucido && (
            <>
              <Circle cx={26} cy={27} r={1.3} fill="rgba(255,255,255,0.55)" />
              <Circle cx={15} cy={36} r={0.8} fill="rgba(255,255,255,0.4)" />
            </>
          )}
          {emblema ? (
            <G transform="translate(12.5, 23.5) scale(0.0293)">
              <Path d={emblema} fill={material.borda} opacity={0.85} />
            </G>
          ) : amigo ? null : (
            // a cruz do rei
            <Path d="M20 24.5 V39 M14.5 30.5 H25.5" stroke={material.borda} strokeWidth={2.4} strokeLinecap="round" />
          )}
        </Svg>
        {amigo && <View style={{ position: 'absolute', left: S * 0.29, top: S * 0.55 }}>{amigo}</View>}
      </View>
    </View>
  );
}

/**
 * A peça redonda de um jogo, com tudo o que a personalização escolheu: a peça especial do jogo (se
 * houver uma ativa, ex. o Go de concha e ardósia), ou o disco nas cores do jogador, com a figura do
 * exército dele gravada nos jogos que usam exército (`figura`: qual peça do exército mostrar).
 * `lado`: 'escura' é o jogador 2 (ou quem joga de escuras) e 'clara', o jogador 1.
 */
export function PecaRedonda({
  jogo,
  lado,
  tamanho,
  marca,
  figura: figuraPedida,
}: {
  jogo: string;
  lado: 'escura' | 'clara';
  tamanho: number;
  marca?: 'dama' | 'rei';
  figura?: PieceType;
}) {
  const [prefs] = useJogosPrefs();
  let figura = figuraPedida;
  const skin = skinDoJogo(jogo, prefs.skins, prefs.semSkin ?? []);
  if (skin) {
    const p = skin.pecas![lado === 'escura' ? 0 : 1];
    const emblemaSkin = skin.emblemaDe ? EXERCITOS.find((e) => e.id === skin.emblemaDe)?.pecas[figura ?? 'p'].d : undefined;
    if (marca === 'rei')
      return <PecaRei tamanho={tamanho} emblema={emblemaSkin} material={{ corpo: p.cor, borda: BORDA_DO_FEITIO[p.feitio] ?? '#3B2A14', translucido: p.feitio === 'ambar' || p.feitio === 'vidro', entalhe: p.feitio === 'osso' }} />;
    return (
      <ComSelo marca={marca} tamanho={tamanho}>
        <PecaFeitio tamanho={tamanho} feitio={p.feitio} cor={p.cor} emblema={emblemaSkin} id={`${jogo}-${lado}`} />
      </ComSelo>
    );
  }
  // os exércitos só valem nos jogos de exército; nos outros (go, gomoku, reversi, trilha, fanorona), a
  // peça usa a cor clássica que o jogador escolheu
  // (a não ser que o jogador ligue “usar o exército também nos outros jogos”: aí a peça leva a figura do
  // peão do exército, como nas damas)
  const comExercito = JOGOS_COM_EXERCITO.includes(jogo) || prefs.exercitoEmTodos;
  if (!comExercito) {
    const classicas = coresDosLados({ ...prefs, exercito1: 'classico', exercito2: 'classico' });
    if (marca === 'rei') {
      const c = classicas[lado === 'clara' ? 'w' : 'b'];
      return <PecaRei tamanho={tamanho} material={{ corpo: c.fundo, borda: c.contorno }} />;
    }
    const disco = <Disco tamanho={tamanho} cor={lado} marca={marca} cores={classicas[lado === 'clara' ? 'w' : 'b']} />;
    return disco;
  }
  if (!JOGOS_COM_EXERCITO.includes(jogo)) figura = figura ?? 'p';
  const ex = exercitoPorId(lado === 'clara' ? prefs.exercito1 : prefs.exercito2);
  // o exército da Antártida usa o desenho do bicho em cima do disco, no lugar do emblema gravado
  const amigo = figura && ex ? ex.pecas[figura].amigo : undefined;
  if (marca === 'rei') {
    const c = coresDosLados(prefs)[lado === 'clara' ? 'w' : 'b'];
    const emblemaRei = !amigo && figura && ex ? ex.pecas[figura].d || undefined : undefined;
    const bicho = amigo ? amigo === 'linu' ? <Linu mood="feliz" size={tamanho * 0.5} animate={false} cachecol={null} /> : <LinuAmigo id={amigo} size={tamanho * 0.5} /> : undefined;
    return <PecaRei tamanho={tamanho} emblema={emblemaRei} amigo={bicho} material={{ corpo: c.fundo, borda: c.contorno }} />;
  }
  if (amigo) {
    return (
      <ComSelo marca={marca} tamanho={tamanho}>
      <View style={{ width: tamanho, height: tamanho, alignItems: 'center', justifyContent: 'center' }}>
        <Disco tamanho={tamanho} cor={lado} />
        <View style={{ position: 'absolute' }}>
          {amigo === 'linu' ? <Linu mood="feliz" size={tamanho * 0.7} animate={false} cachecol={null} /> : <LinuAmigo id={amigo} size={tamanho * 0.7} />}
        </View>
      </View>
      </ComSelo>
    );
  }
  const emblema = figura && ex ? ex.pecas[figura].d || undefined : undefined;
  if (!emblema) {
    const disco = <Disco tamanho={tamanho} cor={lado} marca={marca} />;
    return disco;
  }
  return (
    <ComSelo marca={marca} tamanho={tamanho}>
      <Disco tamanho={tamanho} cor={lado} emblema={emblema} />
    </ComSelo>
  );
}

/**
 * O rei (hnefatafl) e a dama (damas) têm de ser sempre diferentes das outras peças, com qualquer
 * coleção da loja ou exército (pedido do dono, 15/10/2026: “o rei não é sempre distinto das outras”).
 * Onde a peça não desenha a própria marca (coleção, exército, Amigos do Linu), põe um aro dourado e
 * uma coroa pequena no alto.
 */
function ComSelo({ marca, tamanho, children }: { marca?: 'dama' | 'rei'; tamanho: number; children: ReactNode }) {
  if (!marca) return <>{children}</>;
  const c = Math.max(12, tamanho * 0.55);
  const aro = Math.max(2, tamanho * 0.08);
  return (
    <View style={{ width: tamanho, height: tamanho }}>
      {children}
      {/* aro dourado com contorno escuro, para ler bem até em cima do trono e dos cantos dourados */}
      <View
        pointerEvents="none"
        style={{ position: 'absolute', inset: -1, borderRadius: tamanho / 2 + 1, borderWidth: aro + 2, borderColor: '#5A3A00' }}
      />
      <View
        pointerEvents="none"
        style={{ position: 'absolute', inset: 0, borderRadius: tamanho / 2, borderWidth: aro, borderColor: '#F5C542' }}
      />
      <View pointerEvents="none" style={{ position: 'absolute', top: -c * 0.55, left: (tamanho - c) / 2 }}>
        <Svg width={c} height={c} viewBox="0 0 24 24">
          {marca === 'rei' ? (
            <Path d="M3 18 L5 7 L9.5 12 L12 4 L14.5 12 L19 7 L21 18 Z" fill="#F5C542" stroke="#7A5200" strokeWidth={1.6} strokeLinejoin="round" />
          ) : (
            <Path d="M4 17 L6 9 L10 13 L12 8 L14 13 L18 9 L20 17 Z M4 19 H20" fill="#F5C542" stroke="#7A5200" strokeWidth={1.6} strokeLinejoin="round" />
          )}
        </Svg>
      </View>
    </View>
  );
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
    <View style={{ minHeight: ALTURA_AVISO, justifyContent: 'center' }}>
      <Comemora>
        {tom === 'vitoria' && prefs.animacoes && <Comemoracao tipo={tema.vitoria ?? 'confete'} />}
        <View className={`flex-row items-center gap-2 rounded-2xl px-4 py-2 ${cores}`}>
          {tom === 'vitoria' && <Linu mood="comemorando" size={34} animate={false} />}
          {tom === 'derrota' && <Linu mood="triste" size={34} animate={false} />}
          <Text className="shrink text-sm font-extrabold text-white">{texto}</Text>
        </View>
      </Comemora>
    </View>
  );
}

/**
 * A linha de aviso embaixo do placar (instrução, “o Linu está pensando…” ou o resultado) tem sempre a
 * mesma altura: assim o tabuleiro não sobe nem desce quando o aviso troca (pedido do dono, 11/10/2026).
 */
export const ALTURA_AVISO = 52;

/** Texto curto de instrução embaixo do placar. */
export function Instrucao({ children }: { children: ReactNode }) {
  return (
    <View style={{ minHeight: ALTURA_AVISO, justifyContent: 'center' }}>
      <Text className="text-center text-xs font-medium text-slate-600 dark:text-slate-300">{children}</Text>
    </View>
  );
}

/** Recomeçar e desfazer, com ícone. */
export function ControlesJogo({
  onRecomecar,
  onDesfazer,
  podeDesfazer,
  extra,
}: {
  onRecomecar: () => void;
  onDesfazer?: () => void;
  podeDesfazer?: boolean;
  extra?: ReactNode;
}) {
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
export function Moldura({
  largura,
  altura,
  casa,
  colunas,
  linhas,
  fundo,
  children,
}: {
  largura: number;
  altura: number;
  casa?: number;
  colunas?: string[];
  linhas?: string[];
  fundo?: string;
  children: ReactNode;
}) {
  const tema = useTemaJogo();
  const [prefs] = useJogosPrefs();
  const comCoord = prefs.coordenadas && !!colunas && !!linhas && !!casa;
  const comPadrao = !!tema.padrao && !!tema.padraoCores;
  const b = comPadrao ? 12 : 7;
  const m = comCoord ? Math.max(16, b) : b;
  const W = largura + m + b;
  const H = altura + b + m;
  // a textura do material do tema (pedido do dono, 15/10/2026): na moldura e na superfície do
  // tabuleiro. Um fundo que não é do tema (o feltro do reversi) é pano. O alto contraste fica liso.
  const liso = tema.id === 'contraste';
  const matFundo = fundo === undefined || liso ? null : [tema.claro, tema.escuro, tema.superficie, tema.moldura].includes(fundo) ? materialDoTema(tema) : 'tecido';
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
      {!liso && <Textura largura={W} altura={H} tema={tema} fundo={tema.moldura} />}
      {comPadrao && <PadraoDaMoldura largura={W} altura={H} borda={b} padrao={tema.padrao!} cores={tema.padraoCores!} />}
      {tema.clima && prefs.clima && prefs.animacoes && <Clima tipo={tema.clima} largura={W} altura={H} />}
      <View
        style={{
          width: largura,
          height: altura,
          backgroundColor: fundo,
          borderRadius: 4,
          overflow: 'hidden',
          borderWidth: comPadrao ? 0 : 0,
          borderColor: 'transparent',
        }}
      >
        {matFundo && <Textura largura={largura} altura={altura} tema={tema} fundo={fundo} material={matFundo} />}
        {children}
      </View>
      {/* o acabamento: um friso fundo em volta do tabuleiro e a quina da moldura pegando luz */}
      {!liso && (
        <>
          <View style={{ position: 'absolute', left: m - 2, top: b - 2, width: largura + 4, height: altura + 4, borderRadius: 6, borderWidth: 2, borderColor: 'rgba(0,0,0,0.3)', pointerEvents: 'none' }} />
          <View style={{ position: 'absolute', left: 0, top: 0, width: W, height: H, borderRadius: 14, borderWidth: 1, borderTopColor: 'rgba(255,255,255,0.3)', borderLeftColor: 'rgba(255,255,255,0.18)', borderRightColor: 'rgba(0,0,0,0.25)', borderBottomColor: 'rgba(0,0,0,0.35)', pointerEvents: 'none' }} />
        </>
      )}
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
  // sem animação de entrada: no web ela às vezes se repetia no meio da partida e o tabuleiro
  // encolhia e crescia de novo (relato do dono, 11/10/2026, jogando damas contra o Linu)
  return corpo;
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
  // cada lance toca o som do tabuleiro (madeira, pedra, mar…), ou o de captura quando o lance captura;
  // `null` não toca nada (a semeadura animada das mancalas toca um som por semente)
  const jogar = useCallback(
    (next: S, efeito?: EfeitoJogo | null) => {
      if (prefs.sons && efeito !== null) tocarSomJogo(efeito ?? tema.som ?? 'madeira');
      mudar((p) => [...p, next]);
    },
    [mudar, prefs.sons, tema.som],
  );
  const desfazer = useCallback((n = 1) => mudar((p) => (p.length > 1 ? p.slice(0, Math.max(1, p.length - n)) : p)), [mudar]);
  const reiniciar = useCallback(() => mudar(() => [inicial()]), [mudar, inicial]);
  return { state, pilha, lances: pilha.length - 1, jogar, desfazer, reiniciar };
}

/**
 * Vez do Linu: quando `vezDoLinu` fica verdadeira (ou `chave` muda com ela verdadeira), espera um instante (para a animação do lance
 * anterior terminar e dar tempo de ver) e chama `jogar`. Devolve se ele está “pensando”.
 */
export function useLinuJoga(vezDoLinu: boolean, jogar: () => void, espera = 450, chave?: string | number): boolean {
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
    // `chave` muda quando o Linu joga de novo em seguida (a vez extra do Kalah)
  }, [vezDoLinu, espera, chave]);
  return pensando;
}

/** “O Linu está pensando…”, com o Linu pequeno. */
export function LinuPensando({ visivel }: { visivel: boolean }) {
  return (
    <View style={{ height: ALTURA_AVISO, opacity: visivel ? 1 : 0 }} className="flex-row items-center justify-center gap-1.5">
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
    // o tema da vitória conta para a conquista “Jogador mundial” do Passaporte
    // uma falha ao gravar não pode virar erro na tela: a partida já acabou, só o registro se perde
    registrarVitoriaComTema(db, prefs.tema).catch((e) => console.warn('vitória com tema não gravada', e));
    awardXp(db, 10, `jogo:${jogo}`)
      .then(() => refresh())
      .catch((e) => console.warn('XP da vitória não gravado', e));
  }, [db, refresh, jogo, prefs.sons, prefs.tema]);
  const zerar = useCallback(() => {
    ganhou.current = false;
  }, []);
  return { dar, zerar };
}
