import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { Pressable, Text, useWindowDimensions, View } from 'react-native';
import Svg, { Ellipse, G, Line, Path, Rect, Text as SvgText } from 'react-native-svg';
import { corEscura, DefsTextura, idTextura } from '@/components/jogos/visual';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withSequence, withTiming } from 'react-native-reanimated';
import { Linu, type LinuMood } from '@/components/Linu';
import { Surge } from '@/components/jogos/anim';
import { useJogosPrefs, useNomesJogadores } from '@/services/jogos-prefs';
import { primeiroAJogar } from '@/services/quem-comeca';
import { useIsDark } from '@/services/theme';
import {
  ABERTURA,
  ALCANCE,
  arremessoLinu,
  casaNoPonto,
  FAIXA_EQUILIBRIO,
  FILEIRAS,
  jogarPedra,
  novoJogo,
  ondeEsta,
  passoAtual,
  pontoDoArremesso,
  pular,
  puloLinu,
  TOTAL_CASAS,
  type Estado,
  type Pes,
} from '@/services/amarelinha-engine';

/**
 * A amarelinha jogável (Perfil → Jogos → Brincadeiras). Regras e fontes em
 * `src/data/outros-jogos/brincadeiras.ts`; o motor em `src/services/amarelinha-engine.ts`.
 * O desenho é próprio, em SVG: giz no chão, os pés de quem pula e o Linu quando é a vez dele.
 * A seta, a pedra-fantasma e o ponteiro do equilíbrio sempre se mexem (são o jogo); a opção
 * “Animações” desliga só os enfeites: o pulo do Linu e a pedra caindo.
 */

const CORES = ['#F59E0B', '#0EA5E9'] as const;

/**
 * Vai e vem de 0 a 1 (onda triangular) enquanto montado. Só este pedaço redesenha a cada quadro
 * (o resto da tela fica parado); `saida` guarda o valor da hora do toque.
 */
function VaiVem({ periodo, saida, children }: { periodo: number; saida: { current: number }; children: (v: number) => ReactNode }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    let id = 0;
    let ultimo = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const f = ((t - t0) % periodo) / periodo;
      const tri = f < 0.5 ? f * 2 : 2 - f * 2;
      saida.current = tri;
      // ~30 quadros por segundo bastam e poupam o aparelho
      if (t - ultimo > 32) {
        ultimo = t;
        setV(tri);
      }
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [periodo, saida]);
  return <>{children(v)}</>;
}

/** O pulinho: sobe e desce a cada `chave` nova (desligado sem animações). */
function Pulo({ chave, altura, children }: { chave: string; altura: number; children: ReactNode }) {
  const [prefs] = useJogosPrefs();
  const y = useSharedValue(0);
  useEffect(() => {
    if (!prefs.animacoes) return;
    y.value = withSequence(withTiming(-altura, { duration: 170, easing: Easing.out(Easing.quad) }), withTiming(0, { duration: 210, easing: Easing.in(Easing.quad) }));
    const t = setTimeout(() => {
      y.value = 0;
    }, 900);
    return () => clearTimeout(t);
  }, [chave, altura, prefs.animacoes, y]);
  const estilo = useAnimatedStyle(() => ({ transform: [{ translateY: y.value }] }));
  return <Animated.View style={estilo}>{children}</Animated.View>;
}

function Pe({ x, y, k, cor, esquerdo }: { x: number; y: number; k: number; cor: string; esquerdo: boolean }) {
  const s = esquerdo ? -1 : 1;
  return (
    <G transform={`translate(${x} ${y}) scale(${s * k} ${k})`}>
      <Path d="M0 -6 C 5 -6 6 2 4 9 C 3 13 -3 13 -4 9 C -6 2 -4 -6 0 -6 Z" fill={cor} stroke="#1F2937" strokeWidth={0.8} />
      <Ellipse cx={-3.6} cy={-9.2} rx={1.6} ry={1.9} fill={cor} stroke="#1F2937" strokeWidth={0.6} />
      <Ellipse cx={-0.6} cy={-10.4} rx={1.4} ry={1.7} fill={cor} stroke="#1F2937" strokeWidth={0.6} />
      <Ellipse cx={2.2} cy={-10} rx={1.2} ry={1.5} fill={cor} stroke="#1F2937" strokeWidth={0.6} />
      <Ellipse cx={4.4} cy={-8.4} rx={1} ry={1.3} fill={cor} stroke="#1F2937" strokeWidth={0.6} />
    </G>
  );
}

function Pedra({ r, fantasma }: { r: number; fantasma?: boolean }) {
  return (
    <Svg width={r * 2.4} height={r * 2} viewBox="-12 -10 24 20">
      <Path d="M-10 1 C -10 -6 -3 -8 3 -7 C 9 -6 11 -1 10 3 C 9 7 2 8 -3 7 C -8 6 -10 5 -10 1 Z" fill={fantasma ? 'rgba(148,163,184,0.55)' : '#64748B'} stroke={fantasma ? '#F8FAFC' : '#1E293B'} strokeWidth={1.4} strokeDasharray={fantasma ? '3 2' : undefined} />
      {!fantasma && <Path d="M-5 -3 C -2 -5 2 -5 4 -4" stroke="#CBD5E1" strokeWidth={1.4} fill="none" strokeLinecap="round" />}
    </Svg>
  );
}

function BotaoAcao({ titulo, onPress, cor = '#0EA5E9', disabled, testID }: { titulo: string; onPress: () => void; cor?: string; disabled?: boolean; testID?: string }) {
  return (
    <Pressable
      testID={testID}
      accessibilityRole="button"
      onPress={onPress}
      disabled={disabled}
      style={{ backgroundColor: cor, opacity: disabled ? 0.45 : 1 }}
      className="min-w-[110px] flex-1 items-center rounded-2xl px-4 py-3 active:opacity-80"
    >
      <Text className="text-base font-extrabold text-white">{titulo}</Text>
    </Pressable>
  );
}

function Escolha({ opcoes, valor, onChange }: { opcoes: { id: string; nome: string }[]; valor: string; onChange: (id: string) => void }) {
  return (
    <View className="flex-row rounded-full bg-slate-100 p-1 dark:bg-slate-800">
      {opcoes.map((o) => (
        <Pressable
          key={o.id}
          accessibilityRole="button"
          accessibilityState={{ selected: valor === o.id }}
          onPress={() => onChange(o.id)}
          className={`rounded-full px-3 py-1.5 ${valor === o.id ? 'bg-white dark:bg-slate-600' : ''}`}
        >
          <Text className={`text-xs font-bold ${valor === o.id ? 'text-slate-800 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>{o.nome}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const MOTIVO: Record<string, string> = {
  'linha-pedra': 'a pedra caiu na linha',
  fora: 'a pedra caiu fora do desenho',
  'pisou-linha': 'pisou na linha',
  desequilibrou: 'perdeu o equilíbrio ao pegar a pedra',
};

export default function AmarelinhaJogo() {
  const [prefs] = useJogosPrefs();
  const nomeJ = useNomesJogadores();
  const escuro = useIsDark();
  const { width, height } = useWindowDimensions();
  const [modo, setModo] = useState<'linu' | 'dois'>(prefs.adversario === 'linu' ? 'linu' : 'dois');
  const [meta, setMeta] = useState(TOTAL_CASAS);
  // contra o Linu, quem começa vem da escolha “quem começa” (o Linu é sempre o jogador 2)
  const comecar = (e: Estado, md: 'linu' | 'dois'): Estado => (md === 'linu' ? { ...e, vez: primeiroAJogar<0 | 1>(prefs.quemComeca, 0, 1) } : e);
  const [s, setS] = useState<Estado>(() => comecar(novoJogo(TOTAL_CASAS), prefs.adversario === 'linu' ? 'linu' : 'dois'));
  const [mira, setMira] = useState<'direcao' | 'forca'>('direcao');
  const [direcao, setDirecao] = useState(0);
  const [msg, setMsg] = useState('Jogue a pedrinha na casa 1.');
  const nomes = modo === 'linu' ? ['Você', 'o Linu'] : [nomeJ(0), nomeJ(1)];
  const Nome = (j: number) => (modo === 'linu' ? ['Você', 'O Linu'][j] : nomes[j]);
  const vezLinu = modo === 'linu' && s.vez === 1 && s.fase !== 'fim';

  const passo = passoAtual(s);
  const humanoMira = !vezLinu && s.fase === 'arremesso';
  const refDir = useRef(0);
  const refForca = useRef(0);
  const refEq = useRef(0);
  const precisaEquilibrio = !vezLinu && (passo?.tipo === 'pular' || passo?.tipo === 'pegar');

  const reiniciar = useCallback((m = meta, md = modo) => {
    const novo: Estado = md === 'linu' ? { ...novoJogo(m), vez: primeiroAJogar<0 | 1>(prefs.quemComeca, 0, 1) } : novoJogo(m);
    setS(novo);
    setMira('direcao');
    setMsg(md === 'linu' ? (novo.vez === 0 ? 'Você começa. Jogue a pedrinha na casa 1.' : 'O Linu começa.') : `${nomeJ(0)} começa. Jogue a pedrinha na casa 1.`);
  }, [meta, modo, prefs.quemComeca, nomeJ]);

  /** aplica uma jogada e escreve o que aconteceu */
  const aplicar = useCallback(
    (antes: Estado, depois: Estado, extra?: string) => {
      const quem = Nome(antes.vez);
      const proximo = modo === 'linu' ? (depois.vez === 0 ? 'Sua vez' : 'Vez do Linu') : `Vez do ${nomes[depois.vez]}`;
      const u = depois.ultimo;
      let texto = '';
      if (depois.fase === 'fim') texto = depois.vencedor === 0 && modo === 'linu' ? `Você completou a casa ${depois.meta} e venceu!` : `${Nome(depois.vencedor ?? 0)} completou a casa ${depois.meta} e venceu!`;
      else if (u?.tipo === 'acertou') texto = `${quem}: a pedra caiu na casa ${u.casa}! Agora pule.`;
      else if (u?.tipo === 'completou') texto = `${quem} completou a casa ${u.casa}! ${proximo}: casa ${depois.casa[depois.vez]}.`;
      else if (u?.tipo === 'erro') {
        const motivo = extra ?? MOTIVO[u.motivo] ?? 'errou';
        texto = `${quem}: ${motivo}. ${proximo}.`;
      }
      setS(depois);
      setMira('direcao');
      setMsg(texto);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [modo],
  );

  const jogar = useCallback(
    (dir: number, forca: number) => {
      const p = pontoDoArremesso(dir, forca);
      const q = casaNoPonto(p.x, p.y);
      const depois = jogarPedra(s, dir, forca);
      const extra = q.tipo === 'casa' && q.casa !== s.casa[s.vez] ? `a pedra caiu na casa ${q.casa}, e a da vez era a ${s.casa[s.vez]}` : undefined;
      aplicar(s, depois, extra);
    },
    [s, aplicar],
  );

  const saltar = useCallback(
    (pes: Pes | null, ponteiro: number) => {
      const p = passoAtual(s);
      const depois = pular(s, pes, ponteiro);
      const extra =
        depois.ultimo?.tipo === 'erro' && depois.ultimo.motivo === 'pes-errados' && p?.tipo === 'pular'
          ? `pés errados: ${p.casas.length === 2 ? `nas casas ${p.casas.join(' e ')} vão os dois pés` : `na casa ${p.casas[0]} vai um pé só`}`
          : undefined;
      if (depois.vez === s.vez && depois.fase === 'pulando') {
        setS(depois);
        return;
      }
      aplicar(s, depois, extra);
    },
    [s, aplicar],
  );

  // a vez do Linu: joga sozinho, com uma pausa para dar para ver
  useEffect(() => {
    if (!vezLinu) return;
    const t = setTimeout(
      () => {
        if (s.fase === 'arremesso') {
          const a = arremessoLinu(s.casa[1], prefs.nivel);
          jogar(a.direcao, a.forca);
        } else {
          const j = puloLinu(s, prefs.nivel);
          saltar(j.pes, j.ponteiro);
        }
      },
      s.fase === 'arremesso' ? 1300 : 520,
    );
    return () => clearTimeout(t);
  }, [vezLinu, s, prefs.nivel, jogar, saltar]);

  // ——— medidas do desenho ———
  // o desenho cabe na largura e em pouco mais de metade da altura, para os botões ficarem à vista
  const largura = Math.min(Math.max(width - 48, 240), 360);
  const rh = Math.max(30, Math.min(((largura * 0.8) / 2) * 0.56, (height * 0.52) / (FILEIRAS.length + 3)));
  const u = rh / 0.56;
  const pad = u * 0.25;
  const W = 2 * u + 2 * pad;
  const ch = rh * 1.45;
  const topo = 6;
  const base = topo + ch + FILEIRAS.length * rh;
  const H = base + rh * 1.5;
  const X = (x: number) => W / 2 + x * u;
  const Y = (y: number) => base - y * rh;
  const giz = '#F8FAFC';
  const chao = escuro ? '#2A2F37' : '#7C8591';
  const alvo = s.fase !== 'fim' ? s.casa[s.vez] : -1;
  const cor = CORES[s.vez];

  const centroDa = (casa: number) => {
    const i = FILEIRAS.findIndex((f) => f.includes(casa));
    const f = FILEIRAS[i];
    const x = f.length === 1 ? 0 : f[0] === casa ? -0.5 : 0.5;
    return { x, y: i + 0.5 };
  };
  const onde = ondeEsta(s);
  const linuNoChao = modo === 'linu';
  // onde o Linu está: pulando, nas casas do último salto; senão, atrás da linha de saída
  const posLinu = (() => {
    if (s.vez === 1 && s.fase === 'pulando') {
      if (onde.ceu) return { x: 0, y: FILEIRAS.length + 0.55 };
      if (onde.casas.length) {
        const cs = onde.casas.map(centroDa);
        return { x: cs.reduce((t, c) => t + c.x, 0) / cs.length, y: cs[0].y };
      }
    }
    return { x: 0.84, y: -0.8 };
  })();
  const humanoPulando = s.fase === 'pulando' && !(modo === 'linu' && s.vez === 1);
  const lane = humanoMira && mira === 'forca' ? direcao : null;
  const tamLinu = Math.round(rh * 1.5);
  const moodLinu: LinuMood = s.fase === 'fim' ? (s.vencedor === 1 ? 'comemorando' : 'triste') : passo?.tipo === 'pegar' && s.vez === 1 ? 'pensando' : 'feliz';

  const tocarMira = () => {
    if (!humanoMira) return;
    if (mira === 'direcao') {
      setDirecao(refDir.current * 2 - 1);
      setMira('forca');
    } else jogar(direcao, refForca.current);
  };

  const textoPasso = (() => {
    if (s.fase === 'fim') return '';
    if (vezLinu) return 'O Linu está jogando…';
    if (s.fase === 'arremesso') return mira === 'direcao' ? `Mire: toque quando a linha tracejada passar pela casa ${alvo}.` : `Força: toque quando a pedra-fantasma estiver na casa ${alvo}.`;
    if (!passo) return '';
    if (passo.tipo === 'pular') return `${passo.volta ? 'Voltando' : 'Indo'}: próximo pulo nas casas ${passo.casas.length === 2 ? `${passo.casas[0]} e ${passo.casas[1]}` : passo.casas[0]}. Um pé ou dois?`;
    if (passo.tipo === 'ceu') return 'Chegou ao céu! Vire para voltar.';
    if (passo.tipo === 'pegar') return `Abaixe e pegue a pedra da casa ${passo.casa}, com o ponteiro na faixa verde.`;
    return 'Pronto! Saia da amarelinha.';
  })();

  return (
    <View className="gap-3" testID="amarelinha-jogo">
      <View className="flex-row flex-wrap items-center justify-between gap-2">
        <Escolha
          opcoes={[
            { id: 'linu', nome: 'Contra o Linu' },
            { id: 'dois', nome: 'A dois' },
          ]}
          valor={modo}
          onChange={(id) => {
            setModo(id as 'linu' | 'dois');
            reiniciar(meta, id as 'linu' | 'dois');
          }}
        />
        <Escolha
          opcoes={[
            { id: '10', nome: 'Até a 10' },
            { id: '5', nome: 'Curta: até a 5' },
          ]}
          valor={String(meta)}
          onChange={(id) => {
            setMeta(Number(id));
            reiniciar(Number(id));
          }}
        />
      </View>

      <View className="flex-row justify-center gap-3">
        {[0, 1].map((j) => (
          <View key={j} className={`flex-1 items-center rounded-2xl border-2 px-2 py-1.5 ${s.vez === j && s.fase !== 'fim' ? '' : 'border-transparent'}`} style={s.vez === j && s.fase !== 'fim' ? { borderColor: CORES[j] } : undefined}>
            <View className="flex-row items-center gap-1.5">
              <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: CORES[j] }} />
              <Text className="text-sm font-bold text-slate-700 dark:text-slate-200">{modo === 'linu' ? ['Você', 'Linu'][j] : nomes[j]}</Text>
            </View>
            <Text className="text-xs text-slate-500 dark:text-slate-400">{s.casa[j] > s.meta ? 'completou!' : `casa ${s.casa[j]} de ${s.meta}`}</Text>
          </View>
        ))}
      </View>

      <Text testID="amarelinha-msg" className="min-h-[40px] text-center text-sm font-semibold text-slate-700 dark:text-slate-200">
        {msg}
      </Text>

      <Pressable onPress={tocarMira} disabled={!humanoMira} accessibilityLabel="Desenho da amarelinha" className="items-center">
        <View style={{ width: W, height: H }}>
          <Svg width={W} height={H}>
            <DefsTextura material="pedra" escura={corEscura(chao)} />
            <Rect x={0} y={0} width={W} height={H} rx={18} fill={chao} />
            {/* o granulado da calçada */}
            <Rect x={0} y={0} width={W} height={H} rx={18} fill={`url(#${idTextura('pedra', corEscura(chao))})`} />
            {/* o céu */}
            <Path d={`M ${X(-1)} ${Y(FILEIRAS.length)} A ${u} ${ch} 0 0 1 ${X(1)} ${Y(FILEIRAS.length)} Z`} fill={onde.ceu ? `${cor}55` : 'none'} stroke={giz} strokeWidth={3} strokeLinejoin="round" />
            <SvgText x={W / 2} y={Y(FILEIRAS.length) - ch * 0.38} fill={giz} fontSize={rh * 0.4} fontWeight="bold" textAnchor="middle">
              CÉU
            </SvgText>
            {FILEIRAS.map((f, i) => {
              const dupla = f.length === 2;
              const x0 = dupla ? X(-1) : X(-0.5);
              const x1 = dupla ? X(1) : X(0.5);
              return (
                <G key={i}>
                  {f.map((c, k) => {
                    const cx0 = dupla ? (k === 0 ? X(-1) : X(0)) : x0;
                    return c === alvo ? <Rect key={c} x={cx0} y={Y(i + 1)} width={u * (dupla ? 1 : 1)} height={rh} fill={`${cor}44`} /> : null;
                  })}
                  <Rect x={x0} y={Y(i + 1)} width={x1 - x0} height={rh} fill="none" stroke={giz} strokeWidth={3} strokeLinejoin="round" />
                  {dupla && <Line x1={X(0)} y1={Y(i + 1)} x2={X(0)} y2={Y(i)} stroke={giz} strokeWidth={3} />}
                  {f.map((c, k) => (
                    <SvgText key={c} x={dupla ? X(k === 0 ? -0.5 : 0.5) : X(0)} y={Y(i + 0.5) + rh * 0.16} fill={giz} opacity={0.9} fontSize={rh * 0.46} fontWeight="bold" textAnchor="middle">
                      {c}
                    </SvgText>
                  ))}
                </G>
              );
            })}
            {/* a linha de saída */}
            <Line x1={X(-1)} y1={Y(-0.35)} x2={X(1)} y2={Y(-0.35)} stroke={giz} strokeWidth={2} strokeDasharray="6 6" opacity={0.6} />
            {/* a mira */}
            {lane !== null && <Line x1={X(lane * ABERTURA)} y1={Y(-0.35)} x2={X(lane * ABERTURA)} y2={Y(ALCANCE)} stroke={cor} strokeWidth={3} strokeDasharray="7 5" />}
            {/* os pés de quem está pulando */}
            {humanoPulando &&
              (onde.ceu
                ? [-1, 1].map((l) => <Pe key={l} x={X(l * 0.16)} y={Y(FILEIRAS.length + 0.45)} k={rh / 26} cor={cor} esquerdo={l < 0} />)
                : onde.casas.length === 1
                  ? [<Pe key="um" x={X(centroDa(onde.casas[0]).x + 0.12)} y={Y(centroDa(onde.casas[0]).y)} k={rh / 26} cor={cor} esquerdo={false} />]
                  : onde.casas.map((c, k) => <Pe key={c} x={X(centroDa(c).x + (k === 0 ? 0.18 : -0.18))} y={Y(centroDa(c).y)} k={rh / 26} cor={cor} esquerdo={k === 0} />))}
          </Svg>
          {/* a pedra (e a pedra-fantasma da força) */}
          {s.queda && (s.fase === 'pulando' || s.ultimo?.tipo === 'erro') && (
            <View pointerEvents="none" style={{ position: 'absolute', left: X(s.queda.x) - rh * 0.3, top: Y(s.queda.y) - rh * 0.25 }}>
              <Surge key={`${s.queda.x}-${s.queda.y}`}>
                <Pedra r={rh * 0.25} />
              </Surge>
            </View>
          )}
          {humanoMira && mira === 'direcao' && (
            <VaiVem periodo={1700} saida={refDir}>
              {(v) => <View pointerEvents="none" style={{ position: 'absolute', left: X((v * 2 - 1) * ABERTURA) - 1.5, top: Y(ALCANCE), height: Y(-0.35) - Y(ALCANCE), borderLeftWidth: 3, borderStyle: 'dashed', borderColor: cor }} />}
            </VaiVem>
          )}
          {humanoMira && mira === 'forca' && (
            <VaiVem periodo={1900} saida={refForca}>
              {(v) => {
                const f = pontoDoArremesso(direcao, v);
                return (
                  <View pointerEvents="none" style={{ position: 'absolute', left: X(f.x) - rh * 0.3, top: Y(f.y) - rh * 0.25 }}>
                    <Pedra r={rh * 0.25} fantasma />
                  </View>
                );
              }}
            </VaiVem>
          )}
          {linuNoChao && (
            <View pointerEvents="none" style={{ position: 'absolute', left: X(posLinu.x) - tamLinu / 2, top: Y(posLinu.y) - tamLinu * 0.82 }}>
              <Pulo chave={`${s.vez}-${s.passo}-${s.casa[1]}`} altura={rh * 0.55}>
                <Linu size={tamLinu} mood={moodLinu} animate={prefs.animacoes} />
              </Pulo>
            </View>
          )}
        </View>
      </Pressable>

      <Text className="text-center text-sm text-slate-600 dark:text-slate-300">{textoPasso}</Text>

      {precisaEquilibrio && (
        <VaiVem key={`${s.vez}-${s.passo}`} periodo={1500} saida={refEq}>
          {(v) => <Equilibrio valor={v * 2 - 1} />}
        </VaiVem>
      )}

      <View className="flex-row flex-wrap justify-center gap-2">
        {s.fase === 'fim' ? (
          <BotaoAcao testID="amarelinha-de-novo" titulo="Jogar de novo" onPress={() => reiniciar()} cor="#16A34A" />
        ) : vezLinu ? null : s.fase === 'arremesso' ? (
          <BotaoAcao testID="amarelinha-mira" titulo={mira === 'direcao' ? 'Fixar a direção' : 'Jogar a pedra!'} onPress={tocarMira} cor={cor} />
        ) : passo?.tipo === 'pular' ? (
          <>
            <BotaoAcao testID="amarelinha-um-pe" titulo="1 pé" onPress={() => saltar('um', refEq.current * 2 - 1)} cor={cor} />
            <BotaoAcao testID="amarelinha-dois-pes" titulo="2 pés" onPress={() => saltar('dois', refEq.current * 2 - 1)} cor={cor} />
          </>
        ) : passo?.tipo === 'pegar' ? (
          <BotaoAcao testID="amarelinha-pegar" titulo="Pegar a pedra" onPress={() => saltar(null, refEq.current * 2 - 1)} cor={cor} />
        ) : passo?.tipo === 'ceu' ? (
          <BotaoAcao testID="amarelinha-ceu" titulo="Virar no céu" onPress={() => saltar(null, 0)} cor={cor} />
        ) : passo?.tipo === 'sair' ? (
          <BotaoAcao testID="amarelinha-sair" titulo="Sair da amarelinha" onPress={() => saltar(null, 0)} cor={cor} />
        ) : null}
      </View>
    </View>
  );
}

/** O ponteiro do equilíbrio: na faixa verde, o pé cai dentro da casa; fora dela, na linha. */
function Equilibrio({ valor }: { valor: number }) {
  const largura = 240;
  const faixa = FAIXA_EQUILIBRIO * (largura / 2);
  return (
    <View className="items-center gap-1">
      <View style={{ width: largura, height: 18, borderRadius: 9, overflow: 'hidden' }} className="bg-rose-200 dark:bg-rose-900">
        <View style={{ position: 'absolute', left: largura / 2 - faixa, width: faixa * 2, top: 0, bottom: 0 }} className="bg-emerald-400 dark:bg-emerald-600" />
        <View style={{ position: 'absolute', left: largura / 2 + valor * (largura / 2) - 2, width: 4, top: 0, bottom: 0 }} className="bg-slate-800 dark:bg-white" />
      </View>
      <Text className="text-xs text-slate-500 dark:text-slate-400">Equilíbrio: toque com o ponteiro no verde</Text>
    </View>
  );
}
