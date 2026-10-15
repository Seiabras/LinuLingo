import { useEffect, useRef, useState } from 'react';
import { Pressable, Text, useWindowDimensions, View } from 'react-native';
import Svg, { Circle, G, Line, Path, Rect, Text as SvgText } from 'react-native-svg';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Linu } from '@/components/Linu';
import { Comemora } from '@/components/jogos/anim';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { useIsDark } from '@/services/theme';
import {
  ALCANCE_ATAQUE,
  ALCANCE_CONTRA,
  acoesPossiveis,
  distancia,
  escolhaLinu,
  INICIO,
  jogarTempo,
  novoDuelo,
  PISTA,
  TOQUES_PARA_VENCER,
  type Acao,
  type Estado,
  type Lado,
  type Veredito,
} from '@/services/esgrima-engine';

/**
 * A esgrima jogável (Perfil → Jogos → Esportes): um duelo de florete contra o Linu, por tempos.
 * Regras, fontes e simplificações em `src/data/outros-jogos/esportes.ts`; o motor em
 * `src/services/esgrima-engine.ts`. Desenho próprio em SVG: a pista, o atirador e o Linu de florete.
 * A opção “Animações” liga o deslizar na pista; desligada, cada um só aparece no lugar novo.
 */

const ACAO_INFO: Record<Acao, { nome: string; fr: string; feito: string }> = {
  avancar: { nome: 'Avançar', fr: 'marche', feito: 'avançou' },
  recuar: { nome: 'Recuar', fr: 'retraite', feito: 'recuou' },
  ataque: { nome: 'Atacar', fr: 'fente', feito: 'atacou com afundo' },
  parada: { nome: 'Parar', fr: 'parade', feito: 'fez a parada' },
  contra: { nome: 'Contra-atacar', fr: 'contre-attaque', feito: 'contra-atacou' },
};

const NOMES = ['Você', 'o Linu'] as const;
const nome = (l: Lado, inicio = false) => (inicio ? ['Você', 'O Linu'][l] : NOMES[l]);
const pontoDe = (l: Lado) => (l === 0 ? 'ponto seu' : 'ponto do Linu');

function explicar(v: Veredito): string {
  switch (v.tipo) {
    case 'toque':
      if (v.por === 'prioridade') return `Halte! Os dois tocaram, mas o ataque tem a prioridade sobre o contra-ataque: ${pontoDe(v.para)}.`;
      if (v.por === 'riposta') return `Halte! Riposta: ${nome(v.para)} tinha a prioridade depois da parada. Touche, ${pontoDe(v.para)}.`;
      if (v.por === 'preparacao') return `Halte! ${nome(v.para, true)} pegou o outro avançando sem atacar (contra-ataque na preparação): ${pontoDe(v.para)}.`;
      if (v.por === 'contra-ataque') return `Halte! ${nome(v.para, true)} tocou com o contra-ataque: ${pontoDe(v.para)}.`;
      return `Halte! ${nome(v.para, true)} tocou com o ataque: ${pontoDe(v.para)}.`;
    case 'parada':
      return `${nome(v.quem, true)} desviou a lâmina com a parada. Agora ${v.quem === 0 ? 'você tem' : 'o Linu tem'} a prioridade: é a vez da riposta.`;
    case 'simultaneo':
      return 'Ataque simultâneo: os dois tocaram juntos, sem prioridade de ninguém. Ninguém marca.';
    case 'curto':
      return `O ataque ${v.quem === 0 ? 'seu' : 'do Linu'} ficou curto: a distância era grande demais. A prioridade passa ${v.quem === 0 ? 'para o Linu' : 'para você'}.`;
    default:
      return 'Ninguém tocou. Allez!';
  }
}

/** desliza até `x` (desligado sem animações) */
function NaPista({ x, children, anima }: { x: number; children: React.ReactNode; anima: boolean }) {
  const v = useSharedValue(x);
  useEffect(() => {
    v.value = anima ? withTiming(x, { duration: 260, easing: Easing.out(Easing.cubic) }) : x;
  }, [x, anima, v]);
  const estilo = useAnimatedStyle(() => ({ transform: [{ translateX: v.value }] }));
  return <Animated.View style={[{ position: 'absolute', left: 0, bottom: 0 }, estilo]}>{children}</Animated.View>;
}

type Pose = 'guarda' | 'afundo' | 'parada' | 'contra' | 'tocado';
const poseDe = (a: Acao | undefined): Pose => (a === 'ataque' ? 'afundo' : a === 'parada' ? 'parada' : a === 'contra' ? 'contra' : 'guarda');

/** O atirador visto de lado, olhando para a direita (roupa branca, máscara de tela). Caixa 80 × 80, o pé da frente em x = 50. */
function Atirador({ pose, tam, escuro }: { pose: Pose; tam: number; escuro: boolean }) {
  const linha = escuro ? '#CBD5E1' : '#334155';
  const roupa = '#F8FAFC';
  const P = {
    guarda: { quadril: [36, 50], ombro: [38, 31], peF: [50, 78], joF: [48, 63], peT: [20, 78], joT: [26, 64], mao: [56, 38], cot: [48, 40], ponta: [80, 30], bracoT: [24, 22], cotT: [28, 28] },
    afundo: { quadril: [34, 56], ombro: [42, 38], peF: [62, 78], joF: [60, 62], peT: [8, 78], joT: [20, 68], mao: [64, 38], cot: [54, 38], ponta: [92, 36], bracoT: [18, 54], cotT: [26, 48] },
    parada: { quadril: [34, 50], ombro: [36, 31], peF: [48, 78], joF: [46, 63], peT: [18, 78], joT: [24, 64], mao: [52, 36], cot: [46, 42], ponta: [62, 8], bracoT: [22, 22], cotT: [27, 28] },
    contra: { quadril: [36, 50], ombro: [39, 31], peF: [50, 78], joF: [48, 63], peT: [20, 78], joT: [26, 64], mao: [62, 34], cot: [52, 33], ponta: [92, 32], bracoT: [24, 22], cotT: [28, 28] },
    tocado: { quadril: [32, 50], ombro: [30, 32], peF: [46, 78], joF: [44, 63], peT: [18, 78], joT: [24, 64], mao: [46, 44], cot: [40, 44], ponta: [70, 56], bracoT: [16, 26], cotT: [22, 30] },
  }[pose];
  const seg = (a: number[], b: number[], w: number, cor = roupa) => (
    <>
      <Line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={linha} strokeWidth={w + 2.4} strokeLinecap="round" />
      <Line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={cor} strokeWidth={w} strokeLinecap="round" />
    </>
  );
  return (
    <Svg width={tam * 1.2} height={tam} viewBox="0 0 96 80">
      {/* a lâmina do florete */}
      <Line x1={P.mao[0]} y1={P.mao[1]} x2={P.ponta[0]} y2={P.ponta[1]} stroke={escuro ? '#E2E8F0' : '#475569'} strokeWidth={1.6} strokeLinecap="round" />
      {seg(P.quadril, P.joT, 6)}
      {seg(P.joT, P.peT, 5)}
      {seg(P.quadril, P.joF, 6)}
      {seg(P.joF, P.peF, 5)}
      {seg(P.ombro, P.quadril, 11)}
      {seg(P.ombro, P.cotT, 4)}
      {seg(P.cotT, P.bracoT, 4)}
      {seg(P.ombro, P.cot, 4.5)}
      {seg(P.cot, P.mao, 4.5)}
      {/* a guarda (o copo) e a luva */}
      <Circle cx={P.mao[0] + 1.5} cy={P.mao[1]} r={3.2} fill="#94A3B8" stroke={linha} strokeWidth={1} />
      {/* a máscara de tela */}
      <G>
        <Circle cx={P.ombro[0] + 3} cy={P.ombro[1] - 9} r={7.5} fill="#1F2937" stroke={linha} strokeWidth={1.2} />
        <Path d={`M ${P.ombro[0] - 1} ${P.ombro[1] - 15} l 9 0 M ${P.ombro[0] - 2} ${P.ombro[1] - 11} l 11 0 M ${P.ombro[0] - 2} ${P.ombro[1] - 7} l 11 0 M ${P.ombro[0] - 1} ${P.ombro[1] - 3} l 9 0`} stroke="#64748B" strokeWidth={0.8} />
        <Path d={`M ${P.ombro[0] - 3} ${P.ombro[1] - 3} q 4 4 10 1`} stroke={roupa} strokeWidth={2.2} fill="none" />
      </G>
    </Svg>
  );
}

/** O florete do Linu, apontado para a esquerda (para o jogador). */
function FloreteLinu({ pose, tam, escuro }: { pose: Pose; tam: number; escuro: boolean }) {
  const ponta = pose === 'afundo' || pose === 'contra' ? [2, 30] : pose === 'parada' ? [30, 2] : pose === 'tocado' ? [16, 60] : [8, 22];
  return (
    <Svg width={tam} height={tam} viewBox="0 0 60 60" style={{ position: 'absolute', left: -tam * (pose === 'afundo' ? 0.62 : 0.42), top: tam * 0.12 }}>
      <Line x1={46} y1={36} x2={ponta[0]} y2={ponta[1]} stroke={escuro ? '#E2E8F0' : '#475569'} strokeWidth={2} strokeLinecap="round" />
      <Circle cx={46} cy={36} r={4} fill="#94A3B8" stroke={escuro ? '#CBD5E1' : '#334155'} strokeWidth={1.2} />
    </Svg>
  );
}

function Lampada({ acesa, cor }: { acesa: boolean; cor: string }) {
  return <View style={{ width: 22, height: 22, borderRadius: 11, backgroundColor: acesa ? cor : 'transparent', borderWidth: 2, borderColor: cor, opacity: acesa ? 1 : 0.5 }} />;
}

export default function EsgrimaJogo() {
  const [prefs] = useJogosPrefs();
  const escuro = useIsDark();
  const { width } = useWindowDimensions();
  const [s, setS] = useState<Estado>(novoDuelo);
  const [msg, setMsg] = useState('En garde! Prêts? Allez! Escolha a sua ação: o Linu escolhe a dele ao mesmo tempo.');
  const historico = useRef<{ d: number; acao: Acao }[]>([]);

  const jogar = (minha: Acao) => {
    if (s.vencedor !== null) return;
    const dele = escolhaLinu(s, prefs.nivel, historico.current);
    historico.current = [...historico.current.slice(-30), { d: distancia(s), acao: minha }];
    const depois = jogarTempo(s, [minha, dele]);
    const v = depois.ultimo!.veredito;
    const lances = `Você ${ACAO_INFO[minha].feito}; o Linu ${ACAO_INFO[dele].feito}. `;
    const fim = depois.vencedor === null ? '' : depois.vencedor === 0 ? ' Você venceu o duelo!' : ' O Linu venceu o duelo!';
    setMsg(lances + explicar(v) + fim);
    setS(depois);
  };

  const reiniciar = () => {
    setS(novoDuelo());
    historico.current = [];
    setMsg('En garde! Prêts? Allez!');
  };

  const W = Math.min(Math.max(width - 48, 280), 620);
  const margem = 22;
  const passo = (W - 2 * margem) / (PISTA - 1);
  const H = 150;
  const chao = H - 28;
  const tam = Math.min(86, passo * 2.4);
  const d = distancia(s);
  const ult = s.ultimo;
  const tocou = ult?.veredito.tipo === 'toque' ? ult.veredito.para : null;
  const meuPose: Pose = tocou === 1 ? 'tocado' : poseDe(ult?.acoes[0]);
  const poseLinu: Pose = tocou === 0 ? 'tocado' : poseDe(ult?.acoes[1]);
  // depois de um toque, os dois já voltaram ao en garde: o desenho mostra o golpe na posição do en garde
  const xMeu = margem + s.pos[0] * passo;
  const xLinu = margem + s.pos[1] * passo;
  const possiveis = acoesPossiveis(s, 0);
  const pista = escuro ? '#334155' : '#CBD5E1';
  const fundo = escuro ? '#0F172A' : '#F1F5F9';
  const giz = escuro ? '#E2E8F0' : '#475569';

  return (
    <View className="gap-3" testID="esgrima-jogo">
      {/* o placar, como o aparelho de pontos: uma luz para cada lado */}
      <View className="flex-row items-center justify-between rounded-2xl bg-slate-900 px-4 py-2.5">
        <View className="flex-row items-center gap-2">
          <Lampada acesa={tocou === 0} cor="#22C55E" />
          <Text className="text-base font-bold text-white">Você</Text>
          <Text testID="esgrima-placar-voce" className="text-3xl font-black text-white">
            {s.toques[0]}
          </Text>
        </View>
        <Text className="text-xs font-semibold text-slate-400">até {TOQUES_PARA_VENCER}</Text>
        <View className="flex-row items-center gap-2">
          <Text testID="esgrima-placar-linu" className="text-3xl font-black text-white">
            {s.toques[1]}
          </Text>
          <Text className="text-base font-bold text-white">Linu</Text>
          <Lampada acesa={tocou === 1} cor="#EF4444" />
        </View>
      </View>

      <Text testID="esgrima-msg" className="min-h-[60px] text-center text-sm font-semibold text-slate-700 dark:text-slate-200">
        {msg}
      </Text>

      <View className="items-center">
        <View style={{ width: W, height: H, borderRadius: 16, overflow: 'hidden', backgroundColor: fundo }}>
          <Svg width={W} height={H} style={{ position: 'absolute' }}>
            <Rect x={margem - 10} y={chao - 4} width={W - 2 * margem + 20} height={22} rx={4} fill={pista} />
            {/* linha do meio, linhas de en garde e o fundo da pista */}
            <Line x1={W / 2} y1={chao - 4} x2={W / 2} y2={chao + 18} stroke={giz} strokeWidth={2} />
            {INICIO.map((p) => (
              <Line key={p} x1={margem + p * passo} y1={chao - 4} x2={margem + p * passo} y2={chao + 18} stroke={giz} strokeWidth={1.4} strokeDasharray="3 3" />
            ))}
            {[0, PISTA - 1].map((p) => (
              <Line key={p} x1={margem + p * passo} y1={chao - 4} x2={margem + p * passo} y2={chao + 18} stroke="#EF4444" strokeWidth={2.5} />
            ))}
            <SvgText x={W / 2} y={H - 3} fill={giz} fontSize={10} textAnchor="middle">
              {`distância: ${d} ${d === 1 ? 'passo' : 'passos'}`}
            </SvgText>
          </Svg>
          <NaPista x={xMeu - tam * 0.62} anima={prefs.animacoes}>
            <View style={{ marginBottom: H - chao - 2 }}>
              <Atirador pose={meuPose} tam={tam} escuro={escuro} />
            </View>
          </NaPista>
          <NaPista x={xLinu - tam * 0.35} anima={prefs.animacoes}>
            <View style={{ marginBottom: H - chao - 4, width: tam * 0.8, height: tam * 0.8 }}>
              <FloreteLinu pose={poseLinu} tam={tam * 0.8} escuro={escuro} />
              <Linu size={tam * 0.8} mood={s.vencedor === 1 ? 'comemorando' : tocou === 0 ? 'triste' : poseLinu === 'guarda' ? 'feliz' : 'pensando'} animate={prefs.animacoes} />
            </View>
          </NaPista>
        </View>
      </View>

      <Text className="text-center text-xs text-slate-500 dark:text-slate-400">
        {s.prioridade === 0
          ? 'Você tem a prioridade neste tempo (riposta).'
          : s.prioridade === 1
            ? 'O Linu tem a prioridade neste tempo (riposta).'
            : `O ataque alcança ${ALCANCE_ATAQUE} passos; o contra-ataque, ${ALCANCE_CONTRA}.`}
      </Text>

      {s.vencedor !== null ? (
        <Comemora>
          <View className="items-center gap-2">
            <Text className="text-lg font-extrabold text-slate-800 dark:text-white">{s.vencedor === 0 ? `Vitória por ${s.toques[0]} a ${s.toques[1]}!` : `O Linu venceu por ${s.toques[1]} a ${s.toques[0]}.`}</Text>
            <Pressable testID="esgrima-de-novo" accessibilityRole="button" onPress={reiniciar} className="rounded-2xl bg-emerald-600 px-6 py-3 active:opacity-80">
              <Text className="text-base font-extrabold text-white">Duelar de novo</Text>
            </Pressable>
          </View>
        </Comemora>
      ) : (
        <View className="flex-row flex-wrap justify-center gap-2">
          {(['recuar', 'avancar', 'ataque', 'parada', 'contra'] as Acao[]).map((a) => {
            const pode = possiveis.includes(a);
            return (
              <Pressable
                key={a}
                testID={`esgrima-${a}`}
                accessibilityRole="button"
                disabled={!pode}
                onPress={() => jogar(a)}
                style={{ opacity: pode ? 1 : 0.4 }}
                className={`min-w-[96px] items-center rounded-2xl px-3 py-2.5 active:opacity-80 ${a === 'ataque' ? 'bg-rose-600' : a === 'parada' ? 'bg-sky-600' : a === 'contra' ? 'bg-amber-600' : 'bg-slate-600'}`}
              >
                <Text className="text-sm font-extrabold text-white">{ACAO_INFO[a].nome}</Text>
                <Text className="text-[11px] italic text-white/80">{ACAO_INFO[a].fr}</Text>
              </Pressable>
            );
          })}
        </View>
      )}

      <Text className="text-center text-[11px] leading-4 text-slate-500 dark:text-slate-400">
        Florete simplificado: por tempos, com os dois escolhendo juntos; todo toque vale como no tronco; sem relógio, sem cartões e sem sair pelo fundo da pista.
      </Text>
    </View>
  );
}
